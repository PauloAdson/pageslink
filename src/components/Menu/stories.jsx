import { Menu } from '.'
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
    background: false,
  },
}

export const Template = (args) => {
  return (
    <div>
      <Menu {...args} />
    </div>
  )
}
