const controller = {}

controller.index = (req, res) => {
    res.redirect('/files')
}

module.exports = controller