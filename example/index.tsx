import 'react-app-polyfill/ie11'
import * as React from 'react'
import * as ReactDOM from 'react-dom'
import PhotoSwipe from '../src/'
import '../dist/photoswipe.css'

const items = [
  {
    src: 'https://placekitten.com/600/400',
    w: 600,
    h: 400,
  },
  {
    src: 'https://placekitten.com/1200/900',
    w: 1200,
    h: 900,
  },
]

const App = () => {
  const [isOpen, setIsOpen] = React.useState(false)

  const onToggle = () => setIsOpen(isOpen => !isOpen)

  const onClose = () => setIsOpen(false)

  return (
    <div>
      <button onClick={onToggle}>toggle</button>
      <PhotoSwipe isOpen={isOpen} items={items} closeHandler={onClose} />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
