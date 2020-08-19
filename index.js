const { app, BrowserWindow } = require('electron')

function createWindow() {
    const window = new BrowserWindow({
        webPreferences: {
            nodeIntegration: true
        }
    })

    window.maximize()
    window.loadFile('./index.html')
}

app.whenReady().then(createWindow)