function timeNormalize () {
  time.minutes+= Math.floor(time.seconds / 60); time.seconds%= 60;
  time.hours+= Math.floor(time.minutes / 60); time.minutes%= 60;
  time.hours%= 24;

  console.log(`На годиннику ${time.hours} год. ${time.minutes} хв. ${time.seconds} сек.`);
};