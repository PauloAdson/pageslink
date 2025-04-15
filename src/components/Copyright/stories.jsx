import { Copyright } from './Copyright'

export default {
  title: 'Copyright',
  component: Copyright,
  args: {
    children: 'Copyright',
  },
  argTypes: {
    children: { type: 'string' },
  },
}

export const Template = (args) => {
  return (
    <div>
      <Copyright {...args} />
    </div>
  )
}
