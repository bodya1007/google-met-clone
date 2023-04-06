const { Router } = require('express')
const imageController = require('./image.controller')
const router = new Router()

router
    .get('/api/randomimage',
        imageController.getRandomImage
    )
module.exports = router