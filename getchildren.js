const { Client } = require("@notionhq/client") 
const dotenv = require('dotenv').config()
const notion_key = process.env.NOTION_TOKEN
const databaseId = process.env.NOTION_DATABASE_ID

const notion = new Client({ 
    auth: notion_key,
    notionVersion:'2022-06-28',
})

const getchildren = async () => {
    //ismstaed of block id you can use page id to retrieve the llist of children
      const blockId = '5dd7cc77-a640-47a2-8c2e-936c6c138ac6';
      const response = await notion.blocks.children.list({
        block_id: blockId,
        page_size: 50,
      });
      console.log(response);
}

module.exports = getchildren;