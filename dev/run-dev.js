require('dotenv').config()
const util = require('util');
const exec = util.promisify(require('child_process').exec);

async function launch() {
  const { stdout, stderr } = await exec('mongod --dbpath G:\\IA\\Data\\db');
  console.log("lancé")
}


launch();