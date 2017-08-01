var packager = require('electron-packager');

//console.log(process.env);

var pkgOptions = {
  "dir":__dirname+"\\..\\",
  "ignore":[
    "src",
    "node_modules",
    "configs",
    ".vscode",
    "packages",
    ".editorconfig",
    ".angular-cli.json",
    ".gitignore",
    "package-lock.json",
    "tsconfig.json",
    "tslint.json"
  ],
  "out":"packages.local",
  "arch":"all",
  "name":process.env.npm_package_name+"-"+process.env.npm_package_version,
  "appVersion":process.env.npm_package_version,
  "platform":"linux",
  "overwrite":true
};

packager(pkgOptions, function(err, appPaths){
  if(!err){
    for(var i in appPaths){
      console.log(appPaths[i]);
    }
  }else{
    console.log(err);
  }

});
