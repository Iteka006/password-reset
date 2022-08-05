const getDurationInMilliseconds = start => {
  const NS_PER_SEC = 1e9; // convert to nanoseconds
  const NS_TO_MS = 1e6; // convert to milliseconds
  const diff = process.hrtime(start);
  return (diff[0] * NS_PER_SEC + diff[1]) / NS_TO_MS;
};



const getUrlWithDuration = ((req, res, next) => {
  const start = process.hrtime();
  //const url = process.url
  const durationInMilliseconds = getDurationInMilliseconds(start);
  console.log(`Duration:${durationInMilliseconds.toLocaleString()} ms`)
  next()
})

module.exports = getUrlWithDuration
