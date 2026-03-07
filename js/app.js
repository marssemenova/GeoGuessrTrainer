// global vars
let dataInfoPath = "/../data/data-info.json";
let imgsPath = "/../data/images/";
let dataset = null;
let imgsMap = new Map();

/**
 * Load data info from /data/data-info.json.
 */
function loadData() {
  return new Promise((resolve) => {
    d3.json(dataInfoPath).then(function (data) {
      dataset = data;
      console.log(dataset);
      createImagesMap();
      resolve("resolved");
    });
  });
}

/**
 * Create a map from countries to arrays of images from the dataset.
 */
function createImagesMap() {
  for (let x = 0; x < dataset.length; x++) {
    let currObj = dataset[x];
    imgsMap.set(currObj.country, currObj.entries);
  }
}

/**
 * Helper method to parse arguments passed through a link. From
 * https://stackoverflow.com/questions/46247336/how-can-i-pass-data-through-a-link-using-just-javascript-and-html.
 * @returns Object of pairs.
 */
function getUrlVars() {
  var vars = [], hash;
  var hashes = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');
  for(var i = 0; i < hashes.length; i++)
  {
    hash = hashes[i].split('=');
    vars.push(hash[0]);
    vars[hash[0]] = hash[1];
  }
  return vars;
}
