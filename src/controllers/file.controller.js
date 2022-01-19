const fs = require('fs')
const controller = {}

controller.file_list = (req, res) => {
    
    let directory = require('path').join(__dirname, process.env.DATA_PATH)

    fs.readdir(directory, {withFileTypes:true}, (err, files) => {
        if (err){
            res.json({'error':err})
        } else {
            res.json(files)
        } 
    })

}

controller.file_content = (req, res) => {

    let filePath = require('path').join(__dirname, process.env.DATA_PATH, '/', req.params.fileName)

    fs.readFile(filePath, (err, data) => {
        if (err){
            res.json({'error':err})
        } else {
            let obj = JSON.parse(data)
            res.json(obj)
        } 
    })

}

controller.file_table_detail = (req, res) => {
    
    let filePath = require('path').join(__dirname, process.env.DATA_PATH, '/', req.params.fileName)

    fs.readFile(filePath, (err, data) => {
        if (err){
            res.json({'error':err})
        } else {
            let obj = JSON.parse(data);
            let selectedTable = obj.tables.filter(table => table.title === req.params.tableTitle);
            res.json(selectedTable)
        } 
    })

}

module.exports = controller