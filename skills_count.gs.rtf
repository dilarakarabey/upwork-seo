{\rtf1\ansi\ansicpg1252\cocoartf2758
\cocoatextscaling0\cocoaplatform0{\fonttbl\f0\fnil\fcharset0 Menlo-Regular;}
{\colortbl;\red255\green255\blue255;\red21\green68\blue175;\red255\green255\blue255;\red46\green49\blue51;
\red24\green25\blue27;\red77\green80\blue85;\red187\green7\blue115;\red161\green0\blue16;\red18\green115\blue127;
\red98\green5\blue173;}
{\*\expandedcolortbl;;\cssrgb\c9679\c35613\c74033;\cssrgb\c100000\c100000\c100000\c0;\cssrgb\c23565\c25135\c26282;
\cssrgb\c12570\c12963\c14124;\cssrgb\c37310\c38881\c40795;\cssrgb\c78916\c15366\c52569;\cssrgb\c70163\c7760\c6888;\cssrgb\c3642\c52312\c57014;
\cssrgb\c46539\c15580\c73601;}
\paperw11900\paperh16840\margl1440\margr1440\vieww11520\viewh8400\viewkind0
\deftab720
\pard\pardeftab720\partightenfactor0

\f0\fs26 \cf2 \cb3 \expnd0\expndtw0\kerning0
\outl0\strokewidth0 \strokec2 function\cf4 \strokec4  \cf5 \strokec5 listUniqueSkillsWithCount72\cf4 \strokec4 () \{\
  \cf6 \strokec6 // Access the active spreadsheet and the two sheets\cf4 \strokec4 \
  \cf2 \strokec2 const\cf4 \strokec4  \cf5 \strokec5 spreadsheet\cf4 \strokec4  = \cf7 \strokec7 SpreadsheetApp\cf4 \strokec4 .\cf5 \strokec5 getActiveSpreadsheet\cf4 \strokec4 ();\
  \cf2 \strokec2 const\cf4 \strokec4  \cf5 \strokec5 sourceSheet\cf4 \strokec4  = \cf5 \strokec5 spreadsheet\cf4 \strokec4 .\cf5 \strokec5 getSheetByName\cf4 \strokec4 (\cf8 \strokec8 '72 Hours'\cf4 \strokec4 );\
  \cf2 \strokec2 const\cf4 \strokec4  \cf5 \strokec5 targetSheet\cf4 \strokec4  = \cf5 \strokec5 spreadsheet\cf4 \strokec4 .\cf5 \strokec5 getSheetByName\cf4 \strokec4 (\cf8 \strokec8 '72H Value Counts'\cf4 \strokec4 );\
\
  \cf6 \strokec6 // Get values from the source sheet\cf4 \strokec4 \
  \cf2 \strokec2 const\cf4 \strokec4  \cf5 \strokec5 data\cf4 \strokec4  = \cf5 \strokec5 sourceSheet\cf4 \strokec4 .\cf5 \strokec5 getDataRange\cf4 \strokec4 ().\cf5 \strokec5 getValues\cf4 \strokec4 ();\
  \cf2 \strokec2 const\cf4 \strokec4  \cf5 \strokec5 headerRow\cf4 \strokec4  = \cf9 \strokec9 1\cf4 \strokec4 ; \cf6 \strokec6 // assuming row 1 is your header\cf4 \strokec4 \
  \cf2 \strokec2 let\cf4 \strokec4  \cf5 \strokec5 skills\cf4 \strokec4  = \{\};\
\
  \cf6 \strokec6 // Process each row (skipping header row)\cf4 \strokec4 \
  \cf2 \strokec2 for\cf4 \strokec4  (\cf2 \strokec2 let\cf4 \strokec4  \cf5 \strokec5 i\cf4 \strokec4  = \cf5 \strokec5 headerRow\cf4 \strokec4 ; \cf5 \strokec5 i\cf4 \strokec4  < \cf5 \strokec5 data\cf4 \strokec4 .\cf5 \strokec5 length\cf4 \strokec4 ; \cf5 \strokec5 i\cf4 \strokec4 ++) \{\
    \cf6 \strokec6 // Concatenate the Job Title, Job Description, and Skills columns for skill matching\cf4 \strokec4 \
    \cf2 \strokec2 const\cf4 \strokec4  \cf5 \strokec5 rowData\cf4 \strokec4  = \cf5 \strokec5 data\cf4 \strokec4 [\cf5 \strokec5 i\cf4 \strokec4 ][\cf9 \strokec9 0\cf4 \strokec4 ] + \cf8 \strokec8 ' '\cf4 \strokec4  + \cf5 \strokec5 data\cf4 \strokec4 [\cf5 \strokec5 i\cf4 \strokec4 ][\cf9 \strokec9 1\cf4 \strokec4 ] + \cf8 \strokec8 ' '\cf4 \strokec4  + \cf5 \strokec5 data\cf4 \strokec4 [\cf5 \strokec5 i\cf4 \strokec4 ][\cf9 \strokec9 2\cf4 \strokec4 ];\
    \cf6 \strokec6 // Split the skills from the third column (Skills) and tally each occurrence\cf4 \strokec4 \
    \cf5 \strokec5 data\cf4 \strokec4 [\cf5 \strokec5 i\cf4 \strokec4 ][\cf9 \strokec9 2\cf4 \strokec4 ].\cf5 \strokec5 split\cf4 \strokec4 (\cf8 \strokec8 ','\cf4 \strokec4 ).\cf5 \strokec5 forEach\cf4 \strokec4 (\cf5 \strokec5 skillName\cf4 \strokec4  => \{\
      \cf2 \strokec2 const\cf4 \strokec4  \cf5 \strokec5 skill\cf4 \strokec4  = \cf5 \strokec5 skillName\cf4 \strokec4 .\cf5 \strokec5 trim\cf4 \strokec4 ();\
      \cf2 \strokec2 if\cf4 \strokec4  (!\cf5 \strokec5 skill\cf4 \strokec4 ) \cf2 \strokec2 return\cf4 \strokec4 ;\
\
      \cf6 \strokec6 // Create or increment the skill count in the object\cf4 \strokec4 \
      \cf5 \strokec5 skills\cf4 \strokec4 [\cf5 \strokec5 skill\cf4 \strokec4 ] = \cf5 \strokec5 skills\cf4 \strokec4 [\cf5 \strokec5 skill\cf4 \strokec4 ] ? \cf5 \strokec5 skills\cf4 \strokec4 [\cf5 \strokec5 skill\cf4 \strokec4 ] + \cf9 \strokec9 1\cf4 \strokec4  : \cf9 \strokec9 1\cf4 \strokec4 ;\
\
      \cf6 \strokec6 // Count skills within Job Title and Job Description also\cf4 \strokec4 \
      \cf2 \strokec2 const\cf4 \strokec4  \cf5 \strokec5 pattern\cf4 \strokec4  = \cf2 \strokec2 new\cf4 \strokec4  \cf7 \strokec7 RegExp\cf4 \strokec4 (\cf8 \strokec8 `\\\\b\cf4 \strokec4 $\{\cf5 \strokec5 escapeRegExp\cf4 \strokec4 (\cf5 \strokec5 skill\cf4 \strokec4 )\}\cf8 \strokec8 \\\\b`\cf4 \strokec4 , \cf8 \strokec8 'gi'\cf4 \strokec4 );\
      \cf2 \strokec2 const\cf4 \strokec4  \cf5 \strokec5 matchTitleDesc\cf4 \strokec4  = (\cf5 \strokec5 rowData\cf4 \strokec4 .\cf5 \strokec5 match\cf4 \strokec4 (\cf5 \strokec5 pattern\cf4 \strokec4 ) || []).\cf5 \strokec5 length\cf4 \strokec4 ;\
      \cf2 \strokec2 if\cf4 \strokec4  (\cf5 \strokec5 matchTitleDesc\cf4 \strokec4  > \cf9 \strokec9 1\cf4 \strokec4 ) \{ \cf6 \strokec6 // We already have one from the skills cell itself\cf4 \strokec4 \
        \cf5 \strokec5 skills\cf4 \strokec4 [\cf5 \strokec5 skill\cf4 \strokec4 ] += \cf5 \strokec5 matchTitleDesc\cf4 \strokec4  - \cf9 \strokec9 1\cf4 \strokec4 ;\
      \}\
    \});\
  \}\
\
  \cf6 \strokec6 // Clear any previous data in targetSheet\cf4 \strokec4 \
  \cf5 \strokec5 targetSheet\cf4 \strokec4 .\cf5 \strokec5 clear\cf4 \strokec4 ();\
  \
  \cf6 \strokec6 // Convert the skills object to an array of arrays suitable for spreadsheet output\cf4 \strokec4 \
  \cf2 \strokec2 const\cf4 \strokec4  \cf5 \strokec5 skillsArray\cf4 \strokec4  = \cf7 \strokec7 Object\cf4 \strokec4 .\cf5 \strokec5 keys\cf4 \strokec4 (\cf5 \strokec5 skills\cf4 \strokec4 ).\cf5 \strokec5 map\cf4 \strokec4 (\cf5 \strokec5 key\cf4 \strokec4  => [\cf5 \strokec5 key\cf4 \strokec4 , \cf5 \strokec5 skills\cf4 \strokec4 [\cf5 \strokec5 key\cf4 \strokec4 ]]);\
\
  \cf6 \strokec6 // Write unique skills and their counts to the target sheet\cf4 \strokec4 \
  \cf2 \strokec2 if\cf4 \strokec4  (\cf5 \strokec5 skillsArray\cf4 \strokec4 .\cf5 \strokec5 length\cf4 \strokec4  > \cf9 \strokec9 0\cf4 \strokec4 ) \{\
    \cf6 \strokec6 // Set Headers for Skill and Count\cf4 \strokec4 \
    \cf5 \strokec5 targetSheet\cf4 \strokec4 .\cf5 \strokec5 getRange\cf4 \strokec4 (\cf9 \strokec9 1\cf4 \strokec4 , \cf9 \strokec9 1\cf4 \strokec4 , \cf9 \strokec9 1\cf4 \strokec4 , \cf9 \strokec9 2\cf4 \strokec4 ).\cf5 \strokec5 setValues\cf4 \strokec4 ([[\cf8 \strokec8 'Skill'\cf4 \strokec4 , \cf8 \strokec8 'Count'\cf4 \strokec4 ]]);\
    \cf6 \strokec6 // Outputting to Spreadsheet\cf4 \strokec4 \
    \cf5 \strokec5 targetSheet\cf4 \strokec4 .\cf5 \strokec5 getRange\cf4 \strokec4 (\cf9 \strokec9 2\cf4 \strokec4 , \cf9 \strokec9 1\cf4 \strokec4 , \cf5 \strokec5 skillsArray\cf4 \strokec4 .\cf5 \strokec5 length\cf4 \strokec4 , \cf9 \strokec9 2\cf4 \strokec4 ).\cf5 \strokec5 setValues\cf4 \strokec4 (\cf5 \strokec5 skillsArray\cf4 \strokec4 );\
  \}\
\}\
\
\pard\pardeftab720\partightenfactor0
\cf6 \strokec6 // Utility function to make sure the RegExp handles special characters correctly\cf4 \strokec4 \
\pard\pardeftab720\partightenfactor0
\cf2 \strokec2 function\cf4 \strokec4  \cf5 \strokec5 escapeRegExp\cf4 \strokec4 (\cf5 \strokec5 string\cf4 \strokec4 ) \{\
  \cf2 \strokec2 return\cf4 \strokec4  \cf5 \strokec5 string\cf4 \strokec4 .\cf5 \strokec5 replace\cf4 \strokec4 (\cf10 \strokec10 /[.*+?^$\{\}()|[\\]\\\\]/\cf2 \strokec2 g\cf4 \strokec4 , \cf8 \strokec8 '\\\\$&'\cf4 \strokec4 );\
\}\
}