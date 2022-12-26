const { Client } = require("@notionhq/client") 
const dotenv = require('dotenv').config()
const notion_key = process.env.NOTION_TOKEN

const fs = require('fs');
const notion = new Client({ 
  auth: notion_key,
  notionVersion:'2022-06-28',
})


//retrive child
//use when has children is false and type is code only
const retrieveCode = async(id)=>{
    // const blockId = 'c02fc1d3-db8b-45c5-a222-27595b15aea7';
    const response = await notion.blocks.retrieve({
    block_id: id,
  });
  const res = response.code.rich_text[0].text.content
  fs.appendFileSync('./content.cpp', res)
  //check here
}


module.exports = retrieveCode