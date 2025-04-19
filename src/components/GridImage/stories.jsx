import { GridImage } from './GridImage'

import mock from './mock'

export default {
  title: 'GridImage',
  component: GridImage,
  args: mock,
  argType: {
    background: { control: 'color' },
  },
}

export const Template = (args) => {
  return (
    <div>
      <GridImage {...args} />
    </div>
  )
}
