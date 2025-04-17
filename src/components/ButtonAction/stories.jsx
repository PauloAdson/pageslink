import { bool } from 'prop-types'
import { ButtonAction } from './ButtonAction'

export default {
  title: 'ButtonAction',
  component: ButtonAction,
  args: {
    children: 'Button Action',
  },
  argTypes: {
    children: { type: 'string' },
    bgColor: { control: 'color' },
    color: { control: 'color' },
    colorHover: { control: 'color' },
    bgHover: { control: 'color' },
    uppercase: { control: 'boolean' },
    href: { control: 'text' },
    target: { bool },
  },
}

export const Template = (args) => {
  return (
    <div>
      <ButtonAction {...args} />
    </div>
  )
}
