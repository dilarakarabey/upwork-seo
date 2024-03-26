function extractPostedDate(descriptionHtml) {
  // This function returns when the job was posted.

  const regexPattern = /(?<=Posted On<\/b>: )\w+ \d{1,2}, \d{4} \d{2}:\d{2}(?= UTC)/;
  var dateParts = descriptionHtml.match(regexPattern);

  if (dateParts && dateParts.length > 0) {
    const dateString = dateParts[0];
    const postedDate = new Date(dateString + 'Z'); // Adding 'Z' to denote UTC time
    return postedDate;
  } else {
    // Log error or handle cases where the date is not found
    Logger.log('No date found in the string: ' + descriptionHtml);
    return null;
  }
}

function isPostedInLast72Hours(postedDate) {
  // This function check sif the job was posted within last 72 hours & returns a Boolean value.

  // Get the current date in UTC
  var currentDate = new Date();
  var currentDateUTC = new Date(Date.UTC(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate(),
                         currentDate.getHours(), currentDate.getMinutes(), currentDate.getSeconds()));

  // Calculate the difference in hours between the current date and the posted date
  var diffInHours = Math.abs(currentDateUTC - postedDate) / 36e5; // 36e5 is the number of milliseconds in one hour

  // Log both dates and the difference in hours to troubleshoot
  console.log(`Posted Date: ${postedDate.toISOString()}, Current Date: ${currentDateUTC.toISOString()}, Difference in Hours: ${diffInHours}`);

  // If the difference is less than or equal to 72, the job was posted in the last 72 hours
  return diffInHours <= 72;
}

function extractSkills(descriptionHtml) {
  // This function returns skills tags in a comma separated manner.

  // Find where the skills list starts and ends
  const skillsStartIndex = descriptionHtml.indexOf('<b>Skills</b>:');
  if (skillsStartIndex !== -1) {
    // We add the length of the "<b>Skills</b>:" tag to start extracting right after the tag
    const skillsStringStart = skillsStartIndex + '<b>Skills</b>:'.length;
    const skillsStringEnd = descriptionHtml.indexOf('<br', skillsStringStart);

    // Extract the skills substring
    let skillsString = descriptionHtml.substring(skillsStringStart, skillsStringEnd);

    // Clean up extraneous whitespace and split the skills into an array
    let skillsArray = skillsString.split(',')
                                  .map(skill => skill.trim()) // Trim whitespace from each skill
                                  .filter(skill => skill.length > 0); // Filter out any empty strings that may result from splitting

    // Join the array back into a comma-separated string
    let skillsCommaSeparated = skillsArray.join(', ');

    return skillsCommaSeparated;
  }
  return '';
}

function extractInformationByLabel(descriptionHtml, label) {
  // This function returns other labels that have a singular value such as Category or Country

  const labelIndex = descriptionHtml.indexOf(`<b>${label}</b>:`);
  if (labelIndex !== -1) {
    // Identify the starting point of the information string
    const infoStartIndex = labelIndex + `<b>${label}</b>: `.length;
    // Find the end of the information string, marked by the next '<br' tag
    const infoEndIndex = descriptionHtml.indexOf('<br', infoStartIndex);
    
    // Extract the information string
    const infoString = descriptionHtml.substring(infoStartIndex, infoEndIndex).trim();
    
    return infoString;
  }
  return '';
}

function setHeaders(sheet) {
  // This function sets our headers.
    
  // Define your header titles in the exact order as they should appear in your sheet
  const headers = ['Job Title', 'Job Description', 'Skills', 'Category', 'Country'];

  // Get the range for the header row (1st row) and set the values
  sheet.getRange(1, 1, 1, headers.length).setValues([headers]);
}

function importRssFeed72() {
  // This function imports our RSS feed & writes to our desired sheet.

  const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('72 Hours');
  const feedUrl = ‘<YOUR_FEED_URL_GOES_HERE>’; // Input your RSS feed URL here
  const rss = UrlFetchApp.fetch(feedUrl).getContentText();
  const doc = XmlService.parse(rss);
  const entries = doc.getRootElement().getChild('channel').getChildren('item');
  
  sheet.clear(); // Clears the existing sheet before adding new data.
  setHeaders(sheet); // Sets the headers in the first row after clearing the sheet

  // Create an array to store data for all entries
  let data = [];

  entries.forEach(entry => { //"entry => {" is the same as "function(entry, index) {" if you're not familiar with arrow functions
    // Check each job post & push data into the data array.

    // Logs job titles of processed jobs to the console
    var title = entry.getChild('title').getText();
    Logger.log('Processing entry: ' + title);

    const descriptionHtml = entry.getChild('description').getText();
    const postedDate = extractPostedDate(descriptionHtml);

    // Logs time the job was posted to the console
    Logger.log('Posted Time Extracted: ' + postedDate);

    if (postedDate && isPostedInLast72Hours(postedDate)){
      // Checks if the job was posted within last 72 hours & pushes desired values to the data array

      const jobTitle = entry.getChild('title').getText();

      // OLD APPROACH TO THIS: Get the substring of the description up to the "Posted On" tag
      //let jobDescriptionIndex = descriptionHtml.indexOf('<b>Posted On</b>');
      //let jobDescription = jobDescriptionIndex > -1 ? descriptionHtml.substring(0, jobDescriptionIndex) : descriptionHtml;

      // Now replace all <br/> tags with a space to remove excessive whitespace
      //jobDescription = jobDescription.replace(/<br\s*[\/]?>/gi, ' ').trim();

      //A MORE OPTIMIZED APPROACH BELOW:
      let jobDescription = descriptionHtml.split('<b>Posted On</b>:')[0].replace(/<br\s*[\/]?>/gi, ' ').trim();

      const skills = extractSkills(descriptionHtml);
      const category = extractInformationByLabel(descriptionHtml, 'Category');
      const country = extractInformationByLabel(descriptionHtml, 'Country');

      // Add Logger to check if this section is reached
      Logger.log('Attempting to append row to sheet for: ' + title);

      data.push([jobTitle, jobDescription, skills, category, country]);
    }
  });
  
  // If we have data, bulk set it in the sheet
  if (data.length > 0) {
    const startRow = 2; // Assuming headers are always on the first row
    const startColumn = 1;
    const numRows = data.length;
    const numColumns = data[0].length;
    
    // Get the range that will fit all of the new data
    const range = sheet.getRange(startRow, startColumn, numRows, numColumns);
    // Set all of the new data at once
    range.setValues(data);
  }
}
