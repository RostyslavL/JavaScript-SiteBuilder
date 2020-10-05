import image from './assets/image.png'
import {TextBlock, TitleBlock, ColumnsBlock, ImageBlock} from './classes/blocks'

const text = `TEST CONTEXT TO BE ADDED`

export const model = [
  new TitleBlock('Site constructor on JavaScript', {
    tag: 'h2',
    styles: {
      background: 'linear-gradient(to right, #20B2AA, #2F4F4F)',
      color: 'black',
      padding: '1.5rem',
      'text-align': 'center'
    }
  }),
  new ImageBlock(image, {
    styles: {
      padding: '2rem 0',
      display: 'flex',
      'justify-content': 'center'
    },
    imageStyles: {
      width: '500px',
      height: 'auto'
    },
    alt: 'This is image'
  }),
  new ColumnsBlock([
    'JavaScript Application, wich made without frameworks',
  ], {
    styles: {
      background: 'linear-gradient(to bottom, hsl(281, 84%, 24%),rgb(241, 11, 11))',   
      padding: '3rem',
      color: '#696969',
      'font-weight': 'bold'
    }
  }),
  new TextBlock(text, {
    styles: {
      background: 'linear-gradient(to left, #282c34, #f2c94c)',
      padding: '1rem',
      'font-weight': 'bold'
    }
  })
]