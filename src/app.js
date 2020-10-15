const app = require('electron').remote.app
const path = require('path')
const fs = require('fs')
const rootPath = app.getPath('documents')

const WORKING_DIR = 'evaluation'

const file = document.querySelector('#file')
file.addEventListener('change',(e) => {
    const {name, path:filePath} = e.target.files[0]
    fs.copyFileSync(filePath, path.join(rootPath, name))
})

const download = document.querySelector('#download')
download.addEventListener('click', async() => {
    const fileName = 'example.txt'
    const file = await fs.readFileSync(path.join(rootPath,fileName))
    var blob  = new Blob(file);
    const aLink  = document.createElement('a');
    aLink.download = fileName;
    aLink.href = window.URL.createObjectURL(blob);
    aLink.click()
})