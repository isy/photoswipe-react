import React, { useRef, useEffect, useCallback } from 'react'
import PhotoSwipe, { Options as PhotoSwipeOptions, Item } from 'photoswipe'
import PhotoswipeUIDefault from 'photoswipe/dist/photoswipe-ui-default'

export type PhotoSwipeProps = {
  isOpen: boolean
  items: Item[]
  closeHandler: () => void
  options?: PhotoSwipeOptions
}

const PhotoSwiper: React.FC<PhotoSwipeProps> = ({
  isOpen,
  items,
  closeHandler,
  options,
}) => {
  const pswp = useRef<PhotoSwipe<PhotoSwipeOptions>>()
  const pswpElement = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!pswpElement.current) {
      return console.error('Failed to initialize the PhotoSwipe Element')
    }
    pswp.current = new PhotoSwipe(
      pswpElement.current,
      PhotoswipeUIDefault,
      items,
      options ?? {}
    )
    pswp.current.listen('destroy', onClose)
    isOpen ? openPhotoSwipe() : closePhotoSwipe()
  }, [isOpen, items, options])

  const openPhotoSwipe = useCallback(() => {
    if (!pswp.current) {
      return console.error('Failed to initialize the PhotoSwipe')
    }
    pswp.current.init()
  }, [])

  const closePhotoSwipe = useCallback(() => {
    if (!pswp.current) {
      return console.error(
        "Can't close the PhotoSwipe instance because it doesn't exist"
      )
    }
    pswp.current.close()
  }, [])

  const onClose = () => {
    closeHandler()
  }

  return (
    <div
      ref={pswpElement}
      className="pswp"
      tabIndex={-1}
      role="dialog"
      aria-hidden="true"
    >
      <div className="pswp__bg"></div>

      <div className="pswp__scroll-wrap">
        <div className="pswp__container">
          <div className="pswp__item"></div>
          <div className="pswp__item"></div>
          <div className="pswp__item"></div>
        </div>

        <div className="pswp__ui pswp__ui--hidden">
          <div className="pswp__top-bar">
            <div className="pswp__counter"></div>
            <button
              className="pswp__button pswp__button--close"
              title="Close (Esc)"
            ></button>
            <button
              className="pswp__button pswp__button--share"
              title="Share"
            ></button>
            <button
              className="pswp__button pswp__button--fs"
              title="Toggle fullscreen"
            ></button>
            <button
              className="pswp__button pswp__button--zoom"
              title="Zoom in/out"
            ></button>
            <div className="pswp__preloader">
              <div className="pswp__preloader__icn">
                <div className="pswp__preloader__cut">
                  <div className="pswp__preloader__donut"></div>
                </div>
              </div>
            </div>
          </div>

          <div className="pswp__share-modal pswp__share-modal--hidden pswp__single-tap">
            <div className="pswp__share-tooltip"></div>
          </div>

          <button
            className="pswp__button pswp__button--arrow--left"
            title="Previous (arrow left)"
          ></button>

          <button
            className="pswp__button pswp__button--arrow--right"
            title="Next (arrow right)"
          ></button>

          <div className="pswp__caption">
            <div className="pswp__caption__center"></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default React.memo(PhotoSwiper)
