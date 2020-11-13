// /* eslint  no-process-exit:"off"  */

process.on("unhandledRejection", (err) => {
  throw err;
});
