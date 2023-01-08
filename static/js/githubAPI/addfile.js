var github = require('octonode');
const fs = require('fs');
const base64 = require('base-64');
let github_token = process.env.GITHUB_TOKEN;
let file = fs.readFileSync("abc.txt").toString();
var content = base64.encode(file);
function callback(error, result) {
    if (error) {
      console.error(error);
    } else {
      console.log(result);
    }
  }

var client = github.client(github_token);
// Then we instantiate a client with or without a token (as show in a later section)
var ghrepo = client.repo('MahekUnnisa/DSAlgo-CPP');
ghrepo.createContents('Arrays/abc', 'Added testfile', content, callback); //path

