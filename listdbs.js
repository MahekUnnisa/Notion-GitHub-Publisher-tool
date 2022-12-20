const { Client } = require("@notionhq/client") 
const dotenv = require('dotenv').config()
const notion_key = process.env.NOTION_TOKEN
const databaseId = process.env.NOTION_DATABASE_ID

const notion = new Client({ 
    auth: notion_key,
    notionVersion:'2022-06-28',
})

const getHeadPageId = async () => {
    //fetch heading
        const response = await notion.databases.retrieve({ database_id: databaseId });
        const Heading  = response.title[0].text.content
        console.log(Heading)

        //fetch page id
        const pageID = response.parent.page_id
        console.log(pageID)
}

const getdata = async () => {
    const response = await notion.databases.query({
      database_id: databaseId,
      sorts: [
        {
          property: 'Last Edited',
          direction: 'descending',
        },
      ],
    });
    console.log(response);
}
// getdata()
// getHeadPageId();
const getchildren = async () => {
    const blockId = '5dd7cc77-a640-47a2-8c2e-936c6c138ac6';
    const response = await notion.blocks.children.list({
      block_id: blockId,
      page_size: 50,
    });
    console.log(response);
  }
  const getmorechildren = async () => {
    const blockId = '4d31e70f-71dc-47d7-ab3e-1aee4305c35b';
    const response = await notion.blocks.children.list({
      block_id: blockId,
      page_size: 50,
    });
    console.log(response);
  }
  getmorechildren()