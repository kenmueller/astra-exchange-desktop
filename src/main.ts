import { app, BrowserWindow } from 'electron'
import * as path from 'path'

let window: Electron.BrowserWindow | null

function createWindow() {
	window = new BrowserWindow({ height: 600, width: 800 })
	window.loadFile(path.join(__dirname, '../index.html'))
	window.on('closed', () => window = null)
}

app.on('ready', createWindow)

app.on('window-all-closed', () =>
	process.platform === 'darwin' ? app.quit() : null
)

app.on('activate', () =>
	window === null ? createWindow() : null
)