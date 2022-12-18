const { Client } = require("@notionhq/client") 
const dotenv = require('dotenv').config()
const databaseId = process.env.NOTION_DATABASE_ID
const notion_key = process.env.NOTION_TOKEN
const notion = new Client({ 
    auth: notion_key,
    notionVersion:'2022-06-28',
})
//retrieve the database
const getdata = async ()=> {
    const response = await notion.databases.retrieve({ database_id: databaseId });
    console.log(response);
}
getdata();
