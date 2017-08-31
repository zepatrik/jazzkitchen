// @flow
import React from 'react'
import Panorama from 'material-ui/svg-icons/image/panorama'
import uuid from 'uuid'
import slateFactory from 'ory-editor-plugins-slate'

const box = ({ children }: { children: any }) => (
  <div className="heading-box">
    <div className="heading-box-heading">
      {children[0]}
    </div>
    <div className="heading-box-content">
      {children.slice(1)}
    </div>
  </div>
)

const slate = slateFactory()

const plugin = {
  Component: box,
  name: 'ory/editor/additional/layout/box',
  version: '0.0.1',
  IconComponent: <Panorama />,
  text: 'Box',

  createInitialChildren: () => ({
    id: uuid(),
    rows: [{
      id: uuid(),
      cells: [{
        content: { plugin: slate, state: slate.createInitialState() },
        id: uuid(),
      }]
    },
    {
      id: uuid(),
      cells: [{
        content: { plugin: slate, state: slate.createInitialState() },
        id: uuid(),
      }]
    }]
  })
}

export default {
  id: 'ory-editor-plugins-heading-box',
  layout: [plugin],
  stylesheets: ['./index.css'],
  title: 'Box with heading',
  description: 'A box with a heading.',
  type: 'layout',
  availableInPlans: ['ory-sites-anonymous']
}
