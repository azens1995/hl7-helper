# Introduction

HL7-helper is a parsing and generator helper application that parses the HL7 messages and Generates the HL7 messages.

Currently, we do support the parsing of the ORM_O01 and ADT_A01 message types and generation for the same following the ER-7 standard of HL7.

## Tech Stack

For the purpose of creating an application that could parse and generate the HL7 message, we have used the following tech stack:

1. Javascript
2. NodeJS
3. redox-hl7
4. pdf-lib
5. xml-js
6. Node version 14+

## Commands

1. `npm run generate` to generate the result HL7.
2. `npm run parse` to parse the HL7 files provided in `orders` directory
3. `npm run parseXml` to parse the HL7 xml files provided in `orders` directory
4. `npm run deidentify` to deidentify the HL7 files provided in `originals` directory. <br>
   Note: Make sure you have hl7 files in the folder. Folder structure will be `/originals/today_date(e.g. 20210312)/some_file.txt`. You can have multiple hl7 files in the folder named as today_date. Only files that is inside folders of today date will be de-identified.

## Working

For the detailed information regarding the working of this application, please refer to this [document](https://docs.google.com/document/d/1VXymZ-7oscRI2KadyqDcqQnVTMKUs76xY4T9XZ4m9hw).

## Contributors

1. Eklak Dangaura
2. Ishwar Gautam
3. Sajid Ansari
