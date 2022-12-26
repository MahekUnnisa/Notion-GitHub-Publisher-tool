const { Client } = require("@notionhq/client") 
const dotenv = require('dotenv').config()
const notion_key = process.env.NOTION_TOKEN

const fs = require('fs');

const retrieveToggle = require("./retrievetoggle");
const retrieveCode = require("./retrievecode")

//to stor all 
const notion = new Client({ 
    auth: notion_key,
    notionVersion:'2022-06-28',
})

const getPageContent = async (id) => {
    //instead of block id you can use page id to retrieve the list of children inside the page
    const blockId = id;
    const response = await notion.blocks.children.list({
      block_id: blockId,
      page_size: 100,
    });
    //response- list of blocks inside the page wrt id

    const res = JSON.stringify(response.results)
    fs.appendFileSync("./JSON/getblocks.json", res)
    const hasChild = response.results[0].has_children
    const blockType = response.results[0].type
    if(hasChild=='true'){
      //do getchildren
      //stor ids but how you cant with arrays it willa round 450 arrays
    }
    else if(hasChild=='false' && blockType=='code'){
      //do get code
    }
}

module.exports = getPageContent;




