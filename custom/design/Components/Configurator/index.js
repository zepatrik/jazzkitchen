// @flow
import React from 'react'
import TextField from 'material-ui/TextField'

const onInputChange = (key: string, onChange: any) => (e: Event) => {
  const target = e.target
  if (target instanceof HTMLInputElement) {
    onChange(key)(target.value)
  }
}

const Configurator = ({
  state: {
    backgroundUrl = ''
  },
  onChange
}: { onChange: any, state: {backgroundUrl: string} } = {}) => (
  <div>
    <TextField
      floatingLabelText="Background URL"
      hintText="http://acme.com/image.png"
      value={backgroundUrl || ''}
      fullWidth
      onChange={onInputChange('backgroundUrl', onChange)}
    />
  </div>
)

export default Configurator
