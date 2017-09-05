// @flow
import React from 'react'
import classNames from 'classnames'
import { ItemType } from '../type'

const Item = ({ children = [], id, title = 'Without title', active, url }: ItemType) => {
  if (children.length > 0) {
    return (
      <li>
        <input type="checkbox" id={id} />
        <label htmlFor={id}>
          <a className={classNames({ active })} href={url}>{title}</a>
        </label>
        <ul>
          {children.map((child: ItemType) => <Item key={child.id} {...child} />)}
        </ul>
      </li>
    )
  }

  return (
    <li>
      <a className={classNames({ active })} href={url}>{title}</a>
    </li>
  )
}


// The header should include `fixed` in the background definition, but using cover and fixed is buggy in
// electron currently, so it's disabled...
// See issue https://github.com/ory/sites-themes/issues/24
const Header = ({
  Editable,
  menus = { main: [] },
  light = true
}: { Editable: any, menus: { main: Array<ItemType> }, light: boolean }) => (
  <div className="jazzkitchen-header">
    <div className="jazzkitchen-header-brand">
      <Editable id="brand" className={`editable-area jazzkitchen-${light ? 'light' : 'dark'}`} global />
    </div>
    <nav>
      <div className="jazzkitchen-nav-inner">
        <ul>
          {menus.main.map((item: ItemType) => <Item key={item.id} {...item} />)}
        </ul>
      </div>
    </nav>
    <div className="jazzkitchen-header-content">
      <Editable id="header" className={`editable-area jazzkitchen-${light ? 'light' : 'dark'}`} />
    </div>
  </div>
)

export default Header
