module.exports = {
  name: 'growcery',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/growcery/',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ],
  bail: 1
};
