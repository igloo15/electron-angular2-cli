const { spawn } = require('child_process');
var versiony = require('versiony');
var hasbin = require('hasbin');

// Target working directory

var gitExists = hasbin.sync('git');

if(gitExists){

  var describeProc = spawn('git', ['describe', '--tags']);

  describeProc.stdout.on('data', (data)=>{


    var versionArray = (data+'').split('-');
    var currentVersion;
    if(versionArray.length > 1){
      var pad = "0000"
      var versionNum = pad.substring(0, pad.length - versionArray[1].length) + versionArray[1];
      currentVersion = versionArray[0]+'-dev'+versionNum;
    }else{
      currentVersion = versionArray[0];
    }
    console.log(`version: ${currentVersion}`);

    versiony
      .version(currentVersion)
      .to(__dirname+'/../package.json')


  });
}else{
  console.error("No GIT Found!");
}


