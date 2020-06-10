# PhotoSwipe React

Typesafe [PhotoSwipe](https://github.com/dimsemenov/PhotoSwipe)-based React wrapper component.

This is inspired by [react-photoswipe](https://github.com/minhtranite/react-photoswipe) and reworked.

## Installation

```bash
# NPM
npm install photoswipe-react

# YARN
yarn add photoswipe-react
```

## Basic Usage

### Styles
Style file combining photoswipe's Core CSS file and Skin CSS file

```javascript
import 'photoswipe-react/dist/photoswipe.css'
```

### Quickstart
```tsx
import React, { useState } from 'react'
import PhotoSwipe, { PhotoSwipeOptions } from 'photoswipe-react'
import 'photoswipe-react/photoswipe.css'

const items = [
  {
      src: 'https://placekitten.com/600/400',
      w: 600,
      h: 400
  },
  {
      src: 'https://placekitten.com/1200/900',
      w: 1200,
      h: 900
  }
]

const options: PhotoSwipeOptions = {}

const App: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false)

  const onToggle = () => setIsOpen((isOpen) => !isOpen)

  const onClose = () => setIsOpen(false)

  return (
    <div>
      <button onClick={onToggle}>toggle</button>
      <PhotoSwipe isOpen={isOpen} items={items} closeHandler={onClose} options={options} />
    </div>
  )
}
```