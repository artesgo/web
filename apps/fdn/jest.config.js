module.exports = {
  name: "fdn",
  preset: "../../jest.config.js",
  coverageDirectory: "../../coverage/apps/fdn/",
  snapshotSerializers: [
    "jest-preset-angular/AngularSnapshotSerializer.js",
    "jest-preset-angular/HTMLCommentSerializer.js"
  ]
};
