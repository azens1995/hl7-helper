const SUCCESS_MESSAGE = `Deidentified files will be stored in deidentified-files directory.`;

const ERROR_MESSAGE = `Some Error occur. 
Might be you don't have any folders inside /originals directory or files that need to be deidentified. 
/originals/today_date(e.g. 20210312)/some_file.txt`;

module.exports = {
  ERROR_MESSAGE,
  SUCCESS_MESSAGE,
};
