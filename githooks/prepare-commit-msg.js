const fs = require('fs');

const commitFilePath = process.argv[2];

const CommitTypeEnum = {
  remove: ':fire:',
  fix: ':bug:',
  feat: ':sparkles:',
  refactor: ':recycle:',
  config: ':wrench:',
  packages: ':package:',
  chore: ':memo:',
  merge: ':twisted_rightwards_arrows:',
  ci: ":camera_flash:",
};

(async () => {
  const fileContent = await fs.promises.readFile(commitFilePath);
  const commitType = fileContent.toString().split(':')[0];
  let newCommitMessage = fileContent.toString();
  if (CommitTypeEnum[commitType]) {
    newCommitMessage = `${
      CommitTypeEnum[commitType]
    } ${fileContent.toString()}`;
  }
  await fs.promises.writeFile(commitFilePath, newCommitMessage);
})();
