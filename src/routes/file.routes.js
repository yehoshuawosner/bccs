const router = require('express').Router()

const controller = require('../controllers/file.controller')

router.get('/', controller.file_list)
router.get('/:fileName', controller.file_content)
router.get('/:fileName/tables/:tableTitle', controller.file_table_detail)

module.exports = router