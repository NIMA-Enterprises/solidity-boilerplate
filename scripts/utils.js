const fs = require('fs');
const path = require('path');

const relativePath = '../deployments/';

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

const jsons = {
  addresses: 'addresses.json',
  config: 'config.json',
  abis: 'abis.json',
};

function getJson(file) {
  let json;
  try {
    json = fs.readFileSync(path.join(__dirname, relativePath + file));
  } catch (err) {
    json = '{}';
  }
  return JSON.parse(json);
}

function saveJson(file, network, key, value) {
  const json = getJson(file);
  json[network] = json[network] || {};
  json[network][key] = value;
  fs.writeFileSync(
    path.join(__dirname, relativePath + file),
    JSON.stringify(json, null, '  ')
  );
}

module.exports = {
  sleep,
  jsons,
  getJson,
  saveJson,
  relativePath,
};
