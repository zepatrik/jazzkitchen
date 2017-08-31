// @flow
import React from 'react'
import Header from '../Header'
import Content from '../Main'
import Footer from '../Footer'

  const theme = (props: any = {}) => (
  <div className="jazzkitchen" style={{backgroundImage: `url(${props.config.backgroundUrl})`}}>
      <Header {...props} />
      <Content {...props} />
      <Footer {...props} />
    </div>
)

export default theme
