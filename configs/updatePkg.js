const {gitDescribe, gitDescribeSync} = require('git-describe');

// Target working directory

const rootDir = __dirname + "\\..\\";

const gitInfo = gitDescribe(rootDir)
                  .then((gitInfo) => console.log(gitInfo))
                  .catch((err) => console.error(err));

console.log(gitInfo);
