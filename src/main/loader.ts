import { ipcMain } from 'electron';

export const ipcLoader = () => {
  ipcMain.handle('hello', () => '');
};
