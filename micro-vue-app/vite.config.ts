import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import qiankun from 'vite-plugin-qiankun';
// https://vite.dev/config/
export default defineConfig({
  base: './',
  server: {
    port: 7101,
    cors: true
  },
  build: {
    lib: {
      entry: './src/main.ts', // 入口文件
      name: 'micro-vue', // 子应用名称
      fileName: 'micro-vue', // 打包后的文件名
      formats: ['umd'], // 打包为 UMD 格式
    },
  },
  plugins: [vue(), qiankun('micro-vue', {
    useDevMode: true
  })],
})
