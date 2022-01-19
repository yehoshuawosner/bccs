require('dotenv').config()
const express = require('express')
const app = express()
const cors = require('cors')

const index_router = require('./routes/index.routes')
const file_router = require('./routes/file.routes')

app.set('port', process.env.PORT || process.env.DEV_PORT)

app.use(cors())
app.use(express.urlencoded({extended:true}))
app.use(index_router)
app.use('/files', file_router)

app.listen(app.get('port'), () => {
    console.log(`Listening in port :${app.get('port')}`)
})