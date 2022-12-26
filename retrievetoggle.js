const { Client } = require("@notionhq/client") 
const dotenv = require('dotenv').config()
const notion_key = process.env.NOTION_TOKEN
const databaseId = process.env.NOTION_DATABASE_ID

const notion = new Client({ 
    auth: notion_key,
    notionVersion:'2022-06-28',
})

const retrievechildren = async (blockId) => {
  //use this if we have has_children:true --- toggle block
  const response = await notion.blocks.children.list({
      block_id: blockId,
      page_size: 50,
    });
    console.log("starts")
    console.log(response);
}

module.exports = retrievechildren;