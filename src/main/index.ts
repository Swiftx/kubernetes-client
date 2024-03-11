import { app, windows } from './component';
import { ipcLoader } from './loader';

// IPC加载
ipcLoader();

// 主函数
(async () => {
  await app.whenReady();
  await windows.main.whenReady();
  windows.main.show();
})();
