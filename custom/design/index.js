// @flow
import './index.css'
import Template from './Components/Template'
const corePlugins = require('ory-sites-plugins')
//const gallery = require('ory-sites-plugins/gallery')
import headingBox from './plugins/headingBox'

const menus = ['main', 'footer']

const plugins = [
  ...corePlugins.all(),
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
