const input=
{
  codeInpuTask1: 'Hello from WebDriver',
  codeInpuTask2: `git config --global user.name  "New Sheriff in Town"
git reset $(git commit-tree HEAD^{tree} -m "Legacy code")
git push origin master --force`,
  pasteNametask1: 'helloweb',
  pasteNametask2: 'how to gain dominance among developers',
};


const pasteExpiration = {
  tenMin: '10 MIN',
};

const syntaxHighlighting = {
  bash: 'Bash',
};

module.exports = {
  input: input,
  pasteExpiration: pasteExpiration,
  syntaxHighlighting: syntaxHighlighting,
};
