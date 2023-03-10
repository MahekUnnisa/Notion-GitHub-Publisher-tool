const getPageContent = require('./getpages.js');
// const getchildren = require('./getchildren');


const { Client } = require("@notionhq/client") 
const dotenv = require('dotenv').config()

const notion_key = process.env.NOTION_TOKEN
const databaseId = process.env.NOTION_DATABASE_ID

//array to store all the page ids
const pageIds = []

const notion = new Client({ 
    auth: notion_key,
    notionVersion:'2022-06-28',
})
//to get all the dbs
const getdbs = async (ids) => {
    const response = await notion.databases.query({
      database_id: databaseId,
      sorts: [
        {
          property: 'Last Edited',
          direction: 'ascending',
        },
      ],
    });
  //get the size of the results array
    const size = response.results.length
    
    //get all the ids in the array
    for (i = 0; i <= size-1; i++) {
        const s = response.results[i].id
        ids.push(s)
    }
   
    for(j = 0; j<= ids.length-1; j++){
        //it will return the blocks
        getPageContent(ids[j])
    }
}
getdbs(pageIds)





