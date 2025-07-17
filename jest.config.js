module.exports = {
  reporters: [
    "default",
    [
      "jest-html-reporter",
      {
        pageTitle: "Sweet Shop Test Report",
        outputPath: "./reports/test-report.html",
        includeFailureMsg: true,
        includeConsoleLog: true,
      },
    ],
  ],
};
