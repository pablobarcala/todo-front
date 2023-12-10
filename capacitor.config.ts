import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.taskon.app',
  appName: 'todo-front',
  webDir: 'dist/todo-front/browser',
  server: {
    androidScheme: 'https'
  }
};

export default config;
