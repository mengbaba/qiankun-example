import { StrictMode } from 'react'
import { createRoot,type Root } from 'react-dom/client'
import { renderWithQiankun, qiankunWindow } from 'vite-plugin-qiankun/dist/helper';
import App from './App.tsx'

let instance: Root | null = null

function render(props: any) {
   if(instance){
      instance?.unmount()
    }
    const container = props.container || document;
     createRoot(container?.querySelector('#root')).render(
      <StrictMode>
        <App />
      </StrictMode>,
    )

}

renderWithQiankun({
  bootstrap: () => { },
  mount: (props:unknown) => {
    console.log('init react app')
      render(props)
  },
  unmount: () => {
      console.log('子应用1的 unmount');
      instance?.unmount();
      instance = null;
  },
  update: () => { },
});

if (!qiankunWindow.__POWERED_BY_QIANKUN__) {
  render({})
}


