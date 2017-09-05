// @flow
import React from 'react'
import Header from '../Header'
import Content from '../Main'
import Footer from '../Footer'
import Gallery from 'react-image-gallery'

const theme = (props: any = {}) => (
  <div className="jazzkitchen">
    <div className="jazzkitchen-bg">
      <Gallery items={[
        { original: 'bg1.jpg' },
        { original: 'bg2.jpg' },
        { original: 'bg3.jpg' },
        { original: 'bg4.jpg' }
      ]}
               showThumbnails={false} showFullscreenButton={false} showPlayButton={false} autoPlay={true}
               disableArrowKeys={true} disableSwipe={true} showNav={false}
               renderItem={(item) => (
                 <div className="image-gallery-image" style={{ backgroundImage: `url(${item.original})` }}/> )}
      />
    </div>
    <Header {...props} />
    <Content {...props} />
    <Footer {...props} />
  </div>
)

export default theme
