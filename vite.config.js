import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'

const cherryPickedKeys = [
  "FIREBASE_APIKEY",
  "FIREBASE_AUTHDOMAIN",
  "FIREBASE_PROJECTID",
  "FIREBASE_STORAGEBUCKET",
  "FIREBASE_MESSAGINGSENDERID",
  "FIREBASE_APPID",
  "FIREBASE_MEASUREMENTID"
];

// https://vitejs.dev/config/
export default defineConfig(({ mode }) =>{
  const env = loadEnv(mode, process.cwd(), '');
  const processEnv = {};
  cherryPickedKeys.forEach(key => processEnv[key] = env[key]);
  return {
    define: {
      'process.env': env
    },
  plugins: [react()],
  }
})
