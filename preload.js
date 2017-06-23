const { ipcRenderer } = require('electron');

global.sendVideoRatio = (ratio) => {
  ipcRenderer.sendToHost({
    event: 'videoRatio',
    data: ratio
  });
}