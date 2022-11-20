import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import Unocss from 'unocss/vite';
import { presetWind } from 'unocss';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [  Unocss({
    presets: [ presetWind()],
    shortcuts: {
      btn: 'inline-flex py-.5 px-2 font-semibold rounded bg-brand-primary text-white cursor-pointer hover:bg-brand-hover justify-center items-center',
      widgetBtn:
        'inline-block py-3 px-3	text-brand-primary font-semibold rounded-md text-brand-txt  cursor-pointer hover:bg-brand-grey hover:text-brand-primary text-left',
      'btn-block':
        'block py-1	 px-3	font-semibold rounded-md bg-brand-primary text-white cursor-pointer hover:bg-brand-hover text-center',
      'f-center': 'flex justify-center items-center',
    },
    rules: [
      [
        'editor-hover',
        {
          outline: '1.5px dotted #2558fb',
          'outline-offset': '1px',
        },
      ],
    ],
    theme: {
      colors: {
        brand: {
          radius: '4px',
          primary: '#2558fb',
          hover: '#507ff7',
          grey: '#eff0f3',
          line: '#e1e2e8',
          txt: '#1e2128',
          subTxt: '#505968',
        },
      },
    },
  }),react()]
})
