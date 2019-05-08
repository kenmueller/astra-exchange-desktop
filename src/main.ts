import { app, BrowserWindow } from 'electron'
import * as path from 'path'

let window: Electron.BrowserWindow | null

function createWindow() {
	window = new BrowserWindow({ title: 'Astra Exchange', height: 800, width: 1300 })
	window.loadFile(path.join(__dirname, '../index.html'))
	window.on('closed', () => window = null)
}

app.on('ready', createWindow)

app.on('window-all-closed', () =>
	process.platform === 'darwin' ? null : app.quit()
)

app.on('activate', () =>
	window === null ? createWindow() : null
)