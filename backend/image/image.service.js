const path = require('path');
const fs = require('fs')

class imageService {
    getRandomImage() {
        const imageFolderPath = './images'; // Шлях до папки з зображеннями
        const allowedExtensions = ['.jpg', '.jpeg', '.png', '.gif']; // Дозволені розширення файлів зображень
        const files = fs.readdirSync(imageFolderPath); // Отримуємо список файлів у папці
        const imageFiles = files.filter(file => {
            const extension = path.extname(file).toLowerCase(); // Отримуємо розширення файлу
            return allowedExtensions.includes(extension); // Повертаємо лише файли з дозволеними розширеннями
        });
        const randomImage = imageFiles[Math.floor(Math.random() * imageFiles.length)]; // Вибираємо випадкове зображення зі списку
        const imagePath = path.join(imageFolderPath, randomImage); // Отримуємо повний шлях до випадкового зображення
        const imageStream = fs.createReadStream(imagePath); // Створюємо потік для зображення

        return imageStream;
    }
}

module.exports = new imageService 