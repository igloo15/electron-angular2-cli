const {gitDescribe, gitDescribeSync} = require('git-describe');
var hasbin = require('hasbin');

// Target working directory

var gitExists = hasbin.sync('git');

if(gitExists){
  const rootDir = __dirname + "\\..\\";

  const gitInfo = gitDescribeSync(rootDir);

  console.log(gitInfo);
}else{
  console.error("No GIT Found!");
}


