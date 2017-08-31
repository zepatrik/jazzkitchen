// @flow
import React from 'react'

const Main = ({ Editable, light = true }: { Editable: any, light: boolean }) => (
  <div className="jazzkitchen-main">
    <div className="jazzkitchen-main-inner">
      <Editable id="main" className={`editable-area jazzkitchen-${light ? 'light' : 'dark'}`} />
    </div>
  </div>
)

export default Main
