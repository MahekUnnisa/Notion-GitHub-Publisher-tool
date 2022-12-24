const { Client } = require("@notionhq/client") 
const dotenv = require('dotenv').config()
const notion_key = process.env.NOTION_TOKEN
const databaseId = process.env.NOTION_DATABASE_ID
const fs = require('fs');
const notion = new Client({ 
    auth: notion_key,
    notionVersion:'2022-06-28',
})

const getpagedetails = async (id) => {
    //instead of block id you can use page id to retrieve the llist of children
    const blockId = id;
    const response = await notion.blocks.children.list({
      block_id: blockId,
      page_size: 100,
    });
    const resSize = response.results.length
    for(k=0;k<resSize;k++){
      const data = response.results[k].code
      const res = JSON.stringify(data)
      // fs.appendFileSync('./test2.json', data+'\n\n')
      console.log(res)
      //if else blocks lagane ki zaroorat hai
    }
    
    
}

module.exports = getpagedetails;




