function listUniqueSkillsWithCount72() {
  // Access the active spreadsheet and the two sheets
  const spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
  const sourceSheet = spreadsheet.getSheetByName('72 Hours');
  const targetSheet = spreadsheet.getSheetByName('72H Value Counts');

  // Get values from the source sheet
  const data = sourceSheet.getDataRange().getValues();
  const headerRow = 1; // assuming row 1 is your header
  let skills = {};

  // Process each row (skipping header row)
  for (let i = headerRow; i < data.length; i++) {
    // Concatenate the Job Title, Job Description, and Skills columns for skill matching
    const rowData = data[i][0] + ' ' + data[i][1] + ' ' + data[i][2];
    // Split the skills from the third column (Skills) and tally each occurrence
    data[i][2].split(',').forEach(skillName => {
      const skill = skillName.trim();
      if (!skill) return;

      // Create or increment the skill count in the object
      skills[skill] = skills[skill] ? skills[skill] + 1 : 1;

      // Count skills within Job Title and Job Description also
      const pattern = new RegExp(`\\b${escapeRegExp(skill)}\\b`, 'gi');
      const matchTitleDesc = (rowData.match(pattern) || []).length;
      if (matchTitleDesc > 1) { // We already have one from the skills cell itself
        skills[skill] += matchTitleDesc - 1;
      }
    });
  }

  // Clear any previous data in targetSheet
  targetSheet.clear();
  
  // Convert the skills object to an array of arrays suitable for spreadsheet output
  const skillsArray = Object.keys(skills).map(key => [key, skills[key]]);

  // Write unique skills and their counts to the target sheet
  if (skillsArray.length > 0) {
    // Set Headers for Skill and Count
    targetSheet.getRange(1, 1, 1, 2).setValues([['Skill', 'Count']]);
    // Outputting to Spreadsheet
    targetSheet.getRange(2, 1, skillsArray.length, 2).setValues(skillsArray);
  }
}

// Utility function to make sure the RegExp handles special characters correctly
function escapeRegExp(string) {
  return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}
