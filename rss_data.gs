{\rtf1\ansi\ansicpg1252\cocoartf2758
\cocoatextscaling0\cocoaplatform0{\fonttbl\f0\fnil\fcharset0 Menlo-Regular;}
{\colortbl;\red255\green255\blue255;\red21\green68\blue175;\red255\green255\blue255;\red46\green49\blue51;
\red24\green25\blue27;\red77\green80\blue85;\red98\green5\blue173;\red18\green115\blue127;\red187\green7\blue115;
\red161\green0\blue16;\red118\green118\blue118;\red255\green255\blue255;\red46\green49\blue52;}
{\*\expandedcolortbl;;\cssrgb\c9679\c35613\c74033;\cssrgb\c100000\c100000\c100000\c0;\cssrgb\c23565\c25135\c26282;
\cssrgb\c12570\c12963\c14124;\cssrgb\c37310\c38881\c40795;\cssrgb\c46539\c15580\c73601;\cssrgb\c3642\c52312\c57014;\cssrgb\c78916\c15366\c52569;
\cssrgb\c70163\c7760\c6888;\cssrgb\c53691\c53693\c53692;\cssrgb\c100000\c100000\c99985\c0;\cssrgb\c23600\c25173\c26290;}
\paperw11900\paperh16840\margl1440\margr1440\vieww28600\viewh14920\viewkind0
\deftab720
\pard\pardeftab720\partightenfactor0

\f0\fs26 \cf2 \cb3 \expnd0\expndtw0\kerning0
\outl0\strokewidth0 \strokec2 function\cf4 \strokec4  \cf5 \strokec5 extractPostedDate\cf4 \strokec4 (\cf5 \strokec5 descriptionHtml\cf4 \strokec4 ) \{\
  \cf6 \strokec6 // This function returns when the job was posted.\cf4 \strokec4 \
\
  \cf2 \strokec2 const\cf4 \strokec4  \cf5 \strokec5 regexPattern\cf4 \strokec4  = \cf7 \strokec7 /(?<=Posted On<\\/b>: )\\w+ \\d\{1,2\}, \\d\{4\} \\d\{2\}:\\d\{2\}(?= UTC)/\cf4 \strokec4 ;\
  \cf2 \strokec2 var\cf4 \strokec4  \cf5 \strokec5 dateParts\cf4 \strokec4  = \cf5 \strokec5 descriptionHtml\cf4 \strokec4 .\cf5 \strokec5 match\cf4 \strokec4 (\cf5 \strokec5 regexPattern\cf4 \strokec4 );\
\
  \cf2 \strokec2 if\cf4 \strokec4  (\cf5 \strokec5 dateParts\cf4 \strokec4  && \cf5 \strokec5 dateParts\cf4 \strokec4 .\cf5 \strokec5 length\cf4 \strokec4  > \cf8 \strokec8 0\cf4 \strokec4 ) \{\
    \cf2 \strokec2 const\cf4 \strokec4  \cf5 \strokec5 dateString\cf4 \strokec4  = \cf5 \strokec5 dateParts\cf4 \strokec4 [\cf8 \strokec8 0\cf4 \strokec4 ];\
    \cf2 \strokec2 const\cf4 \strokec4  \cf5 \strokec5 postedDate\cf4 \strokec4  = \cf2 \strokec2 new\cf4 \strokec4  \cf9 \strokec9 Date\cf4 \strokec4 (\cf5 \strokec5 dateString\cf4 \strokec4  + \cf10 \strokec10 'Z'\cf4 \strokec4 ); \cf6 \strokec6 // Adding 'Z' to denote UTC time\cf4 \strokec4 \
    \cf2 \strokec2 return\cf4 \strokec4  \cf5 \strokec5 postedDate\cf4 \strokec4 ;\
  \} \cf2 \strokec2 else\cf4 \strokec4  \{\
    \cf6 \strokec6 // Log error or handle cases where the date is not found\cf4 \strokec4 \
    \cf9 \strokec9 Logger\cf4 \strokec4 .\cf5 \strokec5 log\cf4 \strokec4 (\cf10 \strokec10 'No date found in the string: '\cf4 \strokec4  + \cf5 \strokec5 descriptionHtml\cf4 \strokec4 );\
    \cf2 \strokec2 return\cf4 \strokec4  \cf2 \strokec2 null\cf4 \strokec4 ;\
  \}\
\}\
\
\cf2 \strokec2 function\cf4 \strokec4  \cf5 \strokec5 isPostedInLast72Hours\cf4 \strokec4 (\cf5 \strokec5 postedDate\cf4 \strokec4 ) \{\
  \cf6 \strokec6 // This function check sif the job was posted within last 72 hours & returns a Boolean value.\cf4 \strokec4 \
\
  \cf6 \strokec6 // Get the current date in UTC\cf4 \strokec4 \
  \cf2 \strokec2 var\cf4 \strokec4  \cf5 \strokec5 currentDate\cf4 \strokec4  = \cf2 \strokec2 new\cf4 \strokec4  \cf9 \strokec9 Date\cf4 \strokec4 ();\
  \cf2 \strokec2 var\cf4 \strokec4  \cf5 \strokec5 currentDateUTC\cf4 \strokec4  = \cf2 \strokec2 new\cf4 \strokec4  \cf9 \strokec9 Date\cf4 \strokec4 (\cf9 \strokec9 Date\cf4 \strokec4 .\cf9 \strokec9 UTC\cf4 \strokec4 (\cf5 \strokec5 currentDate\cf4 \strokec4 .\cf5 \strokec5 getFullYear\cf4 \strokec4 (), \cf5 \strokec5 currentDate\cf4 \strokec4 .\cf5 \strokec5 getMonth\cf4 \strokec4 (), \cf5 \strokec5 currentDate\cf4 \strokec4 .\cf5 \strokec5 getDate\cf4 \strokec4 (),\
                         \cf5 \strokec5 currentDate\cf4 \strokec4 .\cf5 \strokec5 getHours\cf4 \strokec4 (), \cf5 \strokec5 currentDate\cf4 \strokec4 .\cf5 \strokec5 getMinutes\cf4 \strokec4 (), \cf5 \strokec5 currentDate\cf4 \strokec4 .\cf5 \strokec5 getSeconds\cf4 \strokec4 ()));\
\
  \cf6 \strokec6 // Calculate the difference in hours between the current date and the posted date\cf4 \strokec4 \
  \cf2 \strokec2 var\cf4 \strokec4  \cf5 \strokec5 diffInHours\cf4 \strokec4  = \cf9 \strokec9 Math\cf4 \strokec4 .\cf5 \strokec5 abs\cf4 \strokec4 (\cf5 \strokec5 currentDateUTC\cf4 \strokec4  - \cf5 \strokec5 postedDate\cf4 \strokec4 ) / \cf8 \strokec8 36e5\cf4 \strokec4 ; \cf6 \strokec6 // 36e5 is the number of milliseconds in one hour\cf4 \strokec4 \
\
  \cf6 \strokec6 // Log both dates and the difference in hours to troubleshoot\cf4 \strokec4 \
  \cf5 \strokec5 console\cf4 \strokec4 .\cf5 \strokec5 log\cf4 \strokec4 (\cf10 \strokec10 `Posted Date: \cf4 \strokec4 $\{\cf5 \strokec5 postedDate\cf4 \strokec4 .\cf5 \strokec5 toISOString\cf4 \strokec4 ()\}\cf10 \strokec10 , Current Date: \cf4 \strokec4 $\{\cf5 \strokec5 currentDateUTC\cf4 \strokec4 .\cf5 \strokec5 toISOString\cf4 \strokec4 ()\}\cf10 \strokec10 , Difference in Hours: \cf4 \strokec4 $\{\cf5 \strokec5 diffInHours\cf4 \strokec4 \}\cf10 \strokec10 `\cf4 \strokec4 );\
\
  \cf6 \strokec6 // If the difference is less than or equal to 72, the job was posted in the last 72 hours\cf4 \strokec4 \
  \cf2 \strokec2 return\cf4 \strokec4  \cf5 \strokec5 diffInHours\cf4 \strokec4  <= \cf8 \strokec8 72\cf4 \strokec4 ;\
\}\
\
\cf2 \strokec2 function\cf4 \strokec4  \cf5 \strokec5 extractSkills\cf4 \strokec4 (\cf5 \strokec5 descriptionHtml\cf4 \strokec4 ) \{\
  \cf6 \strokec6 // This function returns skills tags in a comma separated manner.\cf4 \strokec4 \
\
  \cf6 \strokec6 // Find where the skills list starts and ends\cf4 \strokec4 \
  \cf2 \strokec2 const\cf4 \strokec4  \cf5 \strokec5 skillsStartIndex\cf4 \strokec4  = \cf5 \strokec5 descriptionHtml\cf4 \strokec4 .\cf5 \strokec5 indexOf\cf4 \strokec4 (\cf10 \strokec10 '<b>Skills</b>:'\cf4 \strokec4 );\
  \cf2 \strokec2 if\cf4 \strokec4  (\cf5 \strokec5 skillsStartIndex\cf4 \strokec4  !== -\cf8 \strokec8 1\cf4 \strokec4 ) \{\
    \cf6 \strokec6 // We add the length of the "<b>Skills</b>:" tag to start extracting right after the tag\cf4 \strokec4 \
    \cf2 \strokec2 const\cf4 \strokec4  \cf5 \strokec5 skillsStringStart\cf4 \strokec4  = \cf5 \strokec5 skillsStartIndex\cf4 \strokec4  + \cf10 \strokec10 '<b>Skills</b>:'\cf4 \strokec4 .\cf5 \strokec5 length\cf4 \strokec4 ;\
    \cf2 \strokec2 const\cf4 \strokec4  \cf5 \strokec5 skillsStringEnd\cf4 \strokec4  = \cf5 \strokec5 descriptionHtml\cf4 \strokec4 .\cf5 \strokec5 indexOf\cf4 \strokec4 (\cf10 \strokec10 '<br'\cf4 \strokec4 , \cf5 \strokec5 skillsStringStart\cf4 \strokec4 );\
\
    \cf6 \strokec6 // Extract the skills substring\cf4 \strokec4 \
    \cf2 \strokec2 let\cf4 \strokec4  \cf5 \strokec5 skillsString\cf4 \strokec4  = \cf5 \strokec5 descriptionHtml\cf4 \strokec4 .\cf5 \strokec5 substring\cf4 \strokec4 (\cf5 \strokec5 skillsStringStart\cf4 \strokec4 , \cf5 \strokec5 skillsStringEnd\cf4 \strokec4 );\
\
    \cf6 \strokec6 // Clean up extraneous whitespace and split the skills into an array\cf4 \strokec4 \
    \cf2 \strokec2 let\cf4 \strokec4  \cf5 \strokec5 skillsArray\cf4 \strokec4  = \cf5 \strokec5 skillsString\cf4 \strokec4 .\cf5 \strokec5 split\cf4 \strokec4 (\cf10 \strokec10 ','\cf4 \strokec4 )\
                                  .\cf5 \strokec5 map\cf4 \strokec4 (\cf5 \strokec5 skill\cf4 \strokec4  => \cf5 \strokec5 skill\cf4 \strokec4 .\cf5 \strokec5 trim\cf4 \strokec4 ()) \cf6 \strokec6 // Trim whitespace from each skill\cf4 \strokec4 \
                                  .\cf5 \strokec5 filter\cf4 \strokec4 (\cf5 \strokec5 skill\cf4 \strokec4  => \cf5 \strokec5 skill\cf4 \strokec4 .\cf5 \strokec5 length\cf4 \strokec4  > \cf8 \strokec8 0\cf4 \strokec4 ); \cf6 \strokec6 // Filter out any empty strings that may result from splitting\cf4 \strokec4 \
\
    \cf6 \strokec6 // Join the array back into a comma-separated string\cf4 \strokec4 \
    \cf2 \strokec2 let\cf4 \strokec4  \cf5 \strokec5 skillsCommaSeparated\cf4 \strokec4  = \cf5 \strokec5 skillsArray\cf4 \strokec4 .\cf5 \strokec5 join\cf4 \strokec4 (\cf10 \strokec10 ', '\cf4 \strokec4 );\
\
    \cf2 \strokec2 return\cf4 \strokec4  \cf5 \strokec5 skillsCommaSeparated\cf4 \strokec4 ;\
  \}\
  \cf2 \strokec2 return\cf4 \strokec4  \cf10 \strokec10 ''\cf4 \strokec4 ;\
\}\
\
\cf2 \strokec2 function\cf4 \strokec4  \cf5 \strokec5 extractInformationByLabel\cf4 \strokec4 (\cf5 \strokec5 descriptionHtml\cf4 \strokec4 , \cf5 \strokec5 label\cf4 \strokec4 ) \{\
  \cf6 \strokec6 // This function returns other labels that have a singular value such as Category or Country\cf4 \strokec4 \
\
  \cf2 \strokec2 const\cf4 \strokec4  \cf5 \strokec5 labelIndex\cf4 \strokec4  = \cf5 \strokec5 descriptionHtml\cf4 \strokec4 .\cf5 \strokec5 indexOf\cf4 \strokec4 (\cf10 \strokec10 `<b>\cf4 \strokec4 $\{\cf5 \strokec5 label\cf4 \strokec4 \}\cf10 \strokec10 </b>:`\cf4 \strokec4 );\
  \cf2 \strokec2 if\cf4 \strokec4  (\cf5 \strokec5 labelIndex\cf4 \strokec4  !== -\cf8 \strokec8 1\cf4 \strokec4 ) \{\
    \cf6 \strokec6 // Identify the starting point of the information string\cf4 \strokec4 \
    \cf2 \strokec2 const\cf4 \strokec4  \cf5 \strokec5 infoStartIndex\cf4 \strokec4  = \cf5 \strokec5 labelIndex\cf4 \strokec4  + \cf10 \strokec10 `<b>\cf4 \strokec4 $\{\cf5 \strokec5 label\cf4 \strokec4 \}\cf10 \strokec10 </b>: `\cf4 \strokec4 .\cf5 \strokec5 length\cf4 \strokec4 ;\
    \cf6 \strokec6 // Find the end of the information string, marked by the next '<br' tag\cf4 \strokec4 \
    \cf2 \strokec2 const\cf4 \strokec4  \cf5 \strokec5 infoEndIndex\cf4 \strokec4  = \cf5 \strokec5 descriptionHtml\cf4 \strokec4 .\cf5 \strokec5 indexOf\cf4 \strokec4 (\cf10 \strokec10 '<br'\cf4 \strokec4 , \cf5 \strokec5 infoStartIndex\cf4 \strokec4 );\
    \
    \cf6 \strokec6 // Extract the information string\cf4 \strokec4 \
    \cf2 \strokec2 const\cf4 \strokec4  \cf5 \strokec5 infoString\cf4 \strokec4  = \cf5 \strokec5 descriptionHtml\cf4 \strokec4 .\cf5 \strokec5 substring\cf4 \strokec4 (\cf5 \strokec5 infoStartIndex\cf4 \strokec4 , \cf5 \strokec5 infoEndIndex\cf4 \strokec4 ).\cf5 \strokec5 trim\cf4 \strokec4 ();\
    \
    \cf2 \strokec2 return\cf4 \strokec4  \cf5 \strokec5 infoString\cf4 \strokec4 ;\
  \}\
  \cf2 \strokec2 return\cf4 \strokec4  \cf10 \strokec10 ''\cf4 \strokec4 ;\
\}\
\
\cf2 \strokec2 function\cf4 \strokec4  \cf5 \strokec5 setHeaders\cf4 \strokec4 (\cf5 \strokec5 sheet\cf4 \strokec4 ) \{\
  \cf6 \strokec6 // This function sets our headers.\cf4 \strokec4 \
    \
  \cf6 \strokec6 // Define your header titles in the exact order as they should appear in your sheet\cf4 \strokec4 \
  \cf2 \strokec2 const\cf4 \strokec4  \cf5 \strokec5 headers\cf4 \strokec4  = [\cf10 \strokec10 'Job Title'\cf4 \strokec4 , \cf10 \strokec10 'Job Description'\cf4 \strokec4 , \cf10 \strokec10 'Skills'\cf4 \strokec4 , \cf10 \strokec10 'Category'\cf4 \strokec4 , \cf10 \strokec10 'Country'\cf4 \strokec4 ];\
\
  \cf6 \strokec6 // Get the range for the header row (1st row) and set the values\cf4 \strokec4 \
  \cf5 \strokec5 sheet\cf4 \strokec4 .\cf5 \strokec5 getRange\cf4 \strokec4 (\cf8 \strokec8 1\cf4 \strokec4 , \cf8 \strokec8 1\cf4 \strokec4 , \cf8 \strokec8 1\cf4 \strokec4 , \cf5 \strokec5 headers\cf4 \strokec4 .\cf5 \strokec5 length\cf4 \strokec4 ).\cf5 \strokec5 setValues\cf4 \strokec4 ([\cf5 \strokec5 headers\cf4 \strokec4 ]);\
\}\
\
\cf2 \strokec2 function\cf4 \strokec4  \cf5 \strokec5 importRssFeed72\cf4 \strokec4 () \{\
  \cf6 \strokec6 // This function imports our RSS feed & writes to our desired sheet.\cf4 \strokec4 \
\
  \cf2 \strokec2 const\cf4 \strokec4  \cf5 \strokec5 sheet\cf4 \strokec4  = \cf9 \strokec9 SpreadsheetApp\cf4 \strokec4 .\cf5 \strokec5 getActiveSpreadsheet\cf4 \strokec4 ().\cf5 \strokec5 getSheetByName\cf4 \strokec4 (\cf10 \strokec10 '72 Hours'\cf4 \strokec4 );\
  \cf2 \strokec2 const\cf4 \strokec4  \cf5 \strokec5 feedUrl\cf4 \strokec4  = \cf10 \strokec10 \'91<YOUR_FEED_URL_GOES_HERE>\'92\cf4 \strokec4 ; \cf11 \cb12 \strokec13 // Input your RSS feed URL here\cf4 \cb3 \strokec4 \
  \cf2 \strokec2 const\cf4 \strokec4  \cf5 \strokec5 rss\cf4 \strokec4  = \cf9 \strokec9 UrlFetchApp\cf4 \strokec4 .\cf5 \strokec5 fetch\cf4 \strokec4 (\cf5 \strokec5 feedUrl\cf4 \strokec4 ).\cf5 \strokec5 getContentText\cf4 \strokec4 ();\
  \cf2 \strokec2 const\cf4 \strokec4  \cf5 \strokec5 doc\cf4 \strokec4  = \cf9 \strokec9 XmlService\cf4 \strokec4 .\cf5 \strokec5 parse\cf4 \strokec4 (\cf5 \strokec5 rss\cf4 \strokec4 );\
  \cf2 \strokec2 const\cf4 \strokec4  \cf5 \strokec5 entries\cf4 \strokec4  = \cf5 \strokec5 doc\cf4 \strokec4 .\cf5 \strokec5 getRootElement\cf4 \strokec4 ().\cf5 \strokec5 getChild\cf4 \strokec4 (\cf10 \strokec10 'channel'\cf4 \strokec4 ).\cf5 \strokec5 getChildren\cf4 \strokec4 (\cf10 \strokec10 'item'\cf4 \strokec4 );\
  \
  \cf5 \strokec5 sheet\cf4 \strokec4 .\cf5 \strokec5 clear\cf4 \strokec4 (); \cf6 \strokec6 // Clears the existing sheet before adding new data.\cf4 \strokec4 \
  \cf5 \strokec5 setHeaders\cf4 \strokec4 (\cf5 \strokec5 sheet\cf4 \strokec4 ); \cf6 \strokec6 // Sets the headers in the first row after clearing the sheet\cf4 \strokec4 \
\
  \cf6 \strokec6 // Create an array to store data for all entries\cf4 \strokec4 \
  \cf2 \strokec2 let\cf4 \strokec4  \cf5 \strokec5 data\cf4 \strokec4  = [];\
\
  \cf5 \strokec5 entries\cf4 \strokec4 .\cf5 \strokec5 forEach\cf4 \strokec4 (\cf5 \strokec5 entry\cf4 \strokec4  => \{ \cf6 \strokec6 //"entry => \{" is the same as "function(entry, index) \{" if you're not familiar with arrow functions\cf4 \strokec4 \
    \cf6 \strokec6 // Check each job post & push data into the data array.\cf4 \strokec4 \
\
    \cf6 \strokec6 // Logs job titles of processed jobs to the console\cf4 \strokec4 \
    \cf2 \strokec2 var\cf4 \strokec4  \cf5 \strokec5 title\cf4 \strokec4  = \cf5 \strokec5 entry\cf4 \strokec4 .\cf5 \strokec5 getChild\cf4 \strokec4 (\cf10 \strokec10 'title'\cf4 \strokec4 ).\cf5 \strokec5 getText\cf4 \strokec4 ();\
    \cf9 \strokec9 Logger\cf4 \strokec4 .\cf5 \strokec5 log\cf4 \strokec4 (\cf10 \strokec10 'Processing entry: '\cf4 \strokec4  + \cf5 \strokec5 title\cf4 \strokec4 );\
\
    \cf2 \strokec2 const\cf4 \strokec4  \cf5 \strokec5 descriptionHtml\cf4 \strokec4  = \cf5 \strokec5 entry\cf4 \strokec4 .\cf5 \strokec5 getChild\cf4 \strokec4 (\cf10 \strokec10 'description'\cf4 \strokec4 ).\cf5 \strokec5 getText\cf4 \strokec4 ();\
    \cf2 \strokec2 const\cf4 \strokec4  \cf5 \strokec5 postedDate\cf4 \strokec4  = \cf5 \strokec5 extractPostedDate\cf4 \strokec4 (\cf5 \strokec5 descriptionHtml\cf4 \strokec4 );\
\
    \cf6 \strokec6 // Logs time the job was posted to the console\cf4 \strokec4 \
    \cf9 \strokec9 Logger\cf4 \strokec4 .\cf5 \strokec5 log\cf4 \strokec4 (\cf10 \strokec10 'Posted Time Extracted: '\cf4 \strokec4  + \cf5 \strokec5 postedDate\cf4 \strokec4 );\
\
    \cf2 \strokec2 if\cf4 \strokec4  (\cf5 \strokec5 postedDate\cf4 \strokec4  && \cf5 \strokec5 isPostedInLast72Hours\cf4 \strokec4 (\cf5 \strokec5 postedDate\cf4 \strokec4 ))\{\
      \cf6 \strokec6 // Checks if the job was posted within last 72 hours & pushes desired values to the data array\cf4 \strokec4 \
\
      \cf2 \strokec2 const\cf4 \strokec4  \cf5 \strokec5 jobTitle\cf4 \strokec4  = \cf5 \strokec5 entry\cf4 \strokec4 .\cf5 \strokec5 getChild\cf4 \strokec4 (\cf10 \strokec10 'title'\cf4 \strokec4 ).\cf5 \strokec5 getText\cf4 \strokec4 ();\
\
      \cf6 \strokec6 // OLD APPROACH TO THIS: Get the substring of the description up to the "Posted On" tag\cf4 \strokec4 \
      \cf6 \strokec6 //let jobDescriptionIndex = descriptionHtml.indexOf('<b>Posted On</b>');\cf4 \strokec4 \
      \cf6 \strokec6 //let jobDescription = jobDescriptionIndex > -1 ? descriptionHtml.substring(0, jobDescriptionIndex) : descriptionHtml;\cf4 \strokec4 \
\
      \cf6 \strokec6 // Now replace all <br/> tags with a space to remove excessive whitespace\cf4 \strokec4 \
      \cf6 \strokec6 //jobDescription = jobDescription.replace(/<br\\s*[\\/]?>/gi, ' ').trim();\cf4 \strokec4 \
\
      \cf6 \strokec6 //A MORE OPTIMIZED APPROACH BELOW:\cf4 \strokec4 \
      \cf2 \strokec2 let\cf4 \strokec4  \cf5 \strokec5 jobDescription\cf4 \strokec4  = \cf5 \strokec5 descriptionHtml\cf4 \strokec4 .\cf5 \strokec5 split\cf4 \strokec4 (\cf10 \strokec10 '<b>Posted On</b>:'\cf4 \strokec4 )[\cf8 \strokec8 0\cf4 \strokec4 ].\cf5 \strokec5 replace\cf4 \strokec4 (\cf7 \strokec7 /<br\\s*[\\/]?>/\cf2 \strokec2 gi\cf4 \strokec4 , \cf10 \strokec10 ' '\cf4 \strokec4 ).\cf5 \strokec5 trim\cf4 \strokec4 ();\
\
      \cf2 \strokec2 const\cf4 \strokec4  \cf5 \strokec5 skills\cf4 \strokec4  = \cf5 \strokec5 extractSkills\cf4 \strokec4 (\cf5 \strokec5 descriptionHtml\cf4 \strokec4 );\
      \cf2 \strokec2 const\cf4 \strokec4  \cf5 \strokec5 category\cf4 \strokec4  = \cf5 \strokec5 extractInformationByLabel\cf4 \strokec4 (\cf5 \strokec5 descriptionHtml\cf4 \strokec4 , \cf10 \strokec10 'Category'\cf4 \strokec4 );\
      \cf2 \strokec2 const\cf4 \strokec4  \cf5 \strokec5 country\cf4 \strokec4  = \cf5 \strokec5 extractInformationByLabel\cf4 \strokec4 (\cf5 \strokec5 descriptionHtml\cf4 \strokec4 , \cf10 \strokec10 'Country'\cf4 \strokec4 );\
\
      \cf6 \strokec6 // Add Logger to check if this section is reached\cf4 \strokec4 \
      \cf9 \strokec9 Logger\cf4 \strokec4 .\cf5 \strokec5 log\cf4 \strokec4 (\cf10 \strokec10 'Attempting to append row to sheet for: '\cf4 \strokec4  + \cf5 \strokec5 title\cf4 \strokec4 );\
\
      \cf5 \strokec5 data\cf4 \strokec4 .\cf5 \strokec5 push\cf4 \strokec4 ([\cf5 \strokec5 jobTitle\cf4 \strokec4 , \cf5 \strokec5 jobDescription\cf4 \strokec4 , \cf5 \strokec5 skills\cf4 \strokec4 , \cf5 \strokec5 category\cf4 \strokec4 , \cf5 \strokec5 country\cf4 \strokec4 ]);\
    \}\
  \});\
  \
  \cf6 \strokec6 // If we have data, bulk set it in the sheet\cf4 \strokec4 \
  \cf2 \strokec2 if\cf4 \strokec4  (\cf5 \strokec5 data\cf4 \strokec4 .\cf5 \strokec5 length\cf4 \strokec4  > \cf8 \strokec8 0\cf4 \strokec4 ) \{\
    \cf2 \strokec2 const\cf4 \strokec4  \cf5 \strokec5 startRow\cf4 \strokec4  = \cf8 \strokec8 2\cf4 \strokec4 ; \cf6 \strokec6 // Assuming headers are always on the first row\cf4 \strokec4 \
    \cf2 \strokec2 const\cf4 \strokec4  \cf5 \strokec5 startColumn\cf4 \strokec4  = \cf8 \strokec8 1\cf4 \strokec4 ;\
    \cf2 \strokec2 const\cf4 \strokec4  \cf5 \strokec5 numRows\cf4 \strokec4  = \cf5 \strokec5 data\cf4 \strokec4 .\cf5 \strokec5 length\cf4 \strokec4 ;\
    \cf2 \strokec2 const\cf4 \strokec4  \cf5 \strokec5 numColumns\cf4 \strokec4  = \cf5 \strokec5 data\cf4 \strokec4 [\cf8 \strokec8 0\cf4 \strokec4 ].\cf5 \strokec5 length\cf4 \strokec4 ;\
    \
    \cf6 \strokec6 // Get the range that will fit all of the new data\cf4 \strokec4 \
    \cf2 \strokec2 const\cf4 \strokec4  \cf5 \strokec5 range\cf4 \strokec4  = \cf5 \strokec5 sheet\cf4 \strokec4 .\cf5 \strokec5 getRange\cf4 \strokec4 (\cf5 \strokec5 startRow\cf4 \strokec4 , \cf5 \strokec5 startColumn\cf4 \strokec4 , \cf5 \strokec5 numRows\cf4 \strokec4 , \cf5 \strokec5 numColumns\cf4 \strokec4 );\
    \cf6 \strokec6 // Set all of the new data at once\cf4 \strokec4 \
    \cf5 \strokec5 range\cf4 \strokec4 .\cf5 \strokec5 setValues\cf4 \strokec4 (\cf5 \strokec5 data\cf4 \strokec4 );\
  \}\
\}\
}