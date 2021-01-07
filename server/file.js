const fs = require('fs')

const readItems = (callback = () =>{}) =>{
    fs.readFile('../estate-app/server/items.json','utf-8',(error,content)=>{
        if (error) throw error

        callback(JSON.parse(content));
    });
};

module.exports = { readItems }
