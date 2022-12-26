const { Client } = require("@notionhq/client") 
const getchildren = require("./retrievetoggle")
const dotenv = require('dotenv').config()
const notion_key = process.env.NOTION_TOKEN
const databaseId = process.env.NOTION_DATABASE_ID
const ids = []
const fs = require('fs');

const notion = new Client({ 
    auth: notion_key,
    notionVersion:'2022-06-28',
})

//getdbs
const getdbs = async () => {
  const response = await notion.databases.query({
    database_id: databaseId,
    sorts: [
      {
        property: 'Last Edited',
        direction: 'ascending',
      },
    ],
  });
}
//getpage
const getpage = async (pageId) => {
    const response = await notion.blocks.children.list({
      block_id: pageId,
      page_size: 50,
    });
    console.log(response);
    // if(response.results[0].has_children=='true'){
    //     getchildren(response.results[0].id)
    // }
    // else{
    //     if(response.results[0].type=='code'){
    //         getcode()
    //     }
    // }
}
const pageId = "d3333a0d-0724-4e2a-abb2-ba6b72438e06"
// getpage(pageId)
//getchildren
const retrievechildren = async (blockId) => {
    //use this if we have has_children:true --- toggle block
    const response = await notion.blocks.children.list({
        block_id: blockId,
        page_size: 50,
      });
      console.log("starts")
      console.log(response);
  }
//retrive child
//use when has children is false and type is code only
const retrievechild = async(id)=>{
    // const blockId = 'c02fc1d3-db8b-45c5-a222-27595b15aea7';
    const response = await notion.blocks.retrieve({
    block_id: id,
  });
  const res = response.code.rich_text[0].text.content
  fs.appendFileSync('./content.cpp', res)
  //check here
}
// const Id='d291eee7-4cfd-4387-aeda-fe7cd7715705'//contains duplicate//find dupes in an array
// retrievechildren(Id)


//getblock of code
const codeId = '0847b380-dd6f-49c5-b410-f0148c7c3441'
retrievechild(codeId)
