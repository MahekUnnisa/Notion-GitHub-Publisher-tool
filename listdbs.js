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
//gets list of all the databases which are shared by the integration
const getdbs = async () => {
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
// getdbs()
// getHeadPageId();
const getchildren = async () => {
  //ismstaed of block id you can use page id to retrieve the llist of children
    const blockId = '5dd7cc77-a640-47a2-8c2e-936c6c138ac6';
    const response = await notion.blocks.children.list({
      block_id: blockId,
      page_size: 50,
    });
    console.log(response);
  }
  //to get child blocks you can recursively use same api endpoint 
  const getmorechildren = async () => {
    const blockId = '4d31e70f-71dc-47d7-ab3e-1aee4305c35b';
    const response = await notion.blocks.children.list({
      block_id: blockId,
      page_size: 100,
    });
    const data = response.results[0].code
    console.log(data);
  }
  //2a2b7f09-eb51-4ee8-b9d0-8ad7b976f785 -code block id
  //should be used recursively
  const getmoreandmorechildren = async () => {
    const blockId = '2a2b7f09-eb51-4ee8-b9d0-8ad7b976f785';
    const response = await notion.blocks.children.list({
      block_id: blockId,
      page_size: 50,
    });
    console.log(response);
  }

  // getchildren()
  getmorechildren()
  // getmoreandmorechildren()