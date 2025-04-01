import { fileURLToPath } from 'node:url'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import qiankun from 'vite-plugin-qiankun'
export default defineConfig({
  base: './',
  server: {
    hmr:false, // 关闭热更新
    port: 7102,
    cors: true
  },
  build: {
    lib: {
      entry: './src/main.tsx', // 入口文件
      name: 'micro-react', // 子应用名称
      fileName: 'micro-react', // 打包后的文件名
      formats: ['umd'], // 打包为 UMD 格式
    },
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    }
  },
  plugins: [
    react(),
    qiankun('micro-react',{
      useDevMode:true
    })
],
})
