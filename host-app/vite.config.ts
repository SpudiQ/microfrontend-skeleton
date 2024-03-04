import vue from '@vitejs/plugin-vue'
import { defineConfig, loadEnv } from 'vite'
import federation from "@originjs/vite-plugin-federation";

import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd());
 
  return {
    target: 'esnext',
     server: {
       port: env.VITE_HOST_PORT ? Number(env.VITE_HOST_PORT) : 5100
     },
     plugins: [
      vue(),
      AutoImport({
        resolvers: [ElementPlusResolver()],
      }),
      Components({
        resolvers: [ElementPlusResolver()],
      }),
      federation({
        name: 'host-app',
        filename: 'remoteEntry.js',
        remotes: {
          usersApp: 'http://localhost:5101/assets/remoteEntry.js',
        },
        shared: ['vue', 'pinia']
      })
    ],
    build:{
      minify:false,
      target: ["chrome89", "edge89", "firefox89", "safari15"]
    }
  }
 })