const { Client } = require("@notionhq/client") 
const dotenv = require('dotenv').config()
const notion_key = process.env.NOTION_TOKEN
const databaseId = process.env.NOTION_DATABASE_ID
const fs = require('fs');
const notion = new Client({ 
    auth: notion_key,
    notionVersion:'2022-06-28',
})
const getdata = async () => {
    const response = await notion.databases.retrieve({ database_id: databaseId });
    console.log(response);
}

//gets list of all the databases which are shared by the integration
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
    const size = response.results.length
    for (i = 0; i <= size-1; i++) {
        const date = JSON.stringify(response.results[i].id)
        fs.appendFileSync('./test2.txt', date)
    }
    // const data = response.results[0].id
    // console.log(data);
    

    // const date = JSON.stringify(response)
    // fs.writeFile('./test.json', date, (err) => {
          
    //     // In case of a error throw err.
    //     if (err) throw err;
    // })
    // // console.log(response);
}

getdbs()
