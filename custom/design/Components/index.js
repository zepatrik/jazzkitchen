// @flow
import Template from './Template/index'
import Project from './Configurator/index'
import { all } from '../../../shared/plans'
import { plugins as corePlugins } from '../../plugins/core'
import headingBox from '../../plugins/headingBox'

const Configurator = { Project, Page: Project }

const menus = ['main', 'footer']

const plugins = [...corePlugins, headingBox]

const design = {
  Template,
  Configurator,
  id: 'ory-design-jazzkitchen',
  title: 'Jazzkitchen',
  stylesheets: ['add-ons/designs/jazzkitchen/index.css'],
  image: './assets/images/plugins/vipin.png',
  description: 'A beautiful theme suitable for business and personal pages.',
  type: 'theme',
  availableInPlans: [...all()],
  menus,
  plugins
}

export default design
