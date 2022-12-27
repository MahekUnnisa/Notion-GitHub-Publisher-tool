const { Octokit } = require("@octokit/core");
const dotenv = require('dotenv').config()
const github_token = process.env.GITHUB_TOKEN
//import { Octokit } from "@octokit/core";
const octokit = new Octokit({
    auth: github_token,
    // 'Content-Type': 'application/json'
})

const create_repo = async() => {
    const response = await octokit.request('POST /user/repos', {
        name: 'Hello-World',
        description: 'This is your first repo!',
        homepage: 'https://github.com',
        'private': false,
        is_template: true
      })
    console.log(response)
}
create_repo()
