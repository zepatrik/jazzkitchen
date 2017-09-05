// @flow
import './index.css'
import Template from './Components/Template'
const allPlugins = require('ory-sites-plugins')
import headingBox from './plugins/headingBox'

const menus = ['main', 'footer']

const plugins = [
  ...Object.values(allPlugins.plugins),
  headingBox
]

const design = {
  Template,
  id: 'ory-design-jazzkitchen',
  title: 'Jazzkitchen',
  menus,
  plugins
}

export default design
