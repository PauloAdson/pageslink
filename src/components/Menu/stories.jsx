import { color } from 'storybook/internal/theming'
import { Menu } from './Menu'
import linksMock from '../NavLinks/mock'

export default {
  title: 'Menu',
  component: Menu,
  args: {
    links: linksMock,
    logoData: {
      text: 'Logo',
      link: '#target',
      srcImg: '',
    },
  },
  argTypes: {
    background: { control: color },
    color: { control: color },
  },
}

export const Template = (args) => {
  return (
    <div>
      <Menu {...args} />
    </div>
  )
}
