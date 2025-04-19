import { GridText } from './GridText'

import mock from './mock'

export default {
  title: 'GridText',
  component: GridText,
  args: mock,
  argTypes: {
    title: { control: 'text' },
    background: { control: 'color' },
    color: { control: 'color' },
    description: { control: 'text' },
  },
}

export const Template = (args) => {
  return (
    <div>
      <GridText {...args} />
    </div>
  )
}
