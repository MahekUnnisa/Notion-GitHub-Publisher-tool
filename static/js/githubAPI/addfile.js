var axios = require('axios');
var fs = require('fs');
var base64 = require('base-64');

const github_token = process.env.GITHUB_TOKEN
let file = fs.readFileSync("../githubAPI/abc.txt").toString();
console.log(file);
var content = base64.encode(file);
console.log(content);
uploadFileApi(github_token, content)

function uploadFileApi(token, content) {

    var data = JSON.stringify({
        "message": "txt file",
        "content": `${content}`
    });

    var config = {
        method: 'put',
        url: 'https://api.github.com/repos/mahekunnisa/DSAlgo-CPP/contents/abc.txt',
        headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json'
        },
        data: data
    };

    axios(config)
        .then(function (response) {
            console.log(JSON.stringify(response.data));
        })
        .catch(function (error) {
            console.log(error);
        });
}