const fs = require('fs')
var exec = require('child_process').exec, child;

// file stuff
let contentlist = new Map()
const dataFilePath = "data.json"
contentlist = readDataFromFile()
// require('./regcmd.js')

//saved data is restored
function readDataFromFile() {
    console.log('restoreing saved data...')
    mapData = new Map()
    let rawData = fs.readFileSync(dataFilePath);
    var jsonData = JSON.parse(rawData);
    for( key in jsonData ){
      mapData.set(key,jsonData[key])
    }
    return mapData
    console.log("done")
  }

//data is saved to json
function writeDataToFile(jsonData) {
    let data = JSON.stringify(jsonData);
    fs.writeFileSync(dataFilePath, data);
  }

function saveData() {
    console.log('saving...')
    let jsonObject = {};
    contentlist.forEach((value, key) => {
      jsonObject[key] = value
    });
    writeDataToFile(jsonObject)
    regcmd();
    console.log('saved')
  }

function regcmd() {
  child = exec('node regcmd.js {{args}}',
  function (error, stdout, stderr) {
    console.log('stdout: ' + stdout);
    console.log('stderr: ' + stderr);
    if (error !== null) {
      console.log('exec error: ' + error);
    }
});
}

this.add = function(key, value) {
  contentlist.set(key, value);
  saveData();
}

this.remove = function(key) {
  contentlist.delete(key);
  saveData();
}

this.get = function(key) {
  return contentlist.get(key);
}

this.getList = function() {
  var list = [];
  for (entry of contentlist.keys()) {
    list.push({name: entry, value: entry});
  }
  return list
}
