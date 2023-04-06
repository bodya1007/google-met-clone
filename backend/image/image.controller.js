const imageService = require('./image.service')

class imageController {
    async getRandomImage(req, res) {
        const imageStream = imageService.getRandomImage();
        res.setHeader('Content-Type', 'image/png');
        imageStream.pipe(res);
    }

}

module.exports = new imageController