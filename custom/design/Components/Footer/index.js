// @flow
import React from 'react'
import type { ItemType } from '../type'

const Footer = ({ menus = { footer: [] } }: { menus: { footer: ItemType[] }}) => (
  <div className="jazzkitchen-footer">
    <div className="jazzkitchen-footer-inner">
      {menus.footer.length > 0
        ? (
          <ul className="jazzkitchen-footer-nav">
            {menus.footer.map((item: ItemType) => <li key={item.id}><a href={item.url}>{item.title}</a></li>)}
          </ul>
        ) : null}
    </div>
  </div>
)

export default Footer
