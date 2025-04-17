import { color } from 'storybook/internal/theming'
import { SectionBackground } from '.'

export default {
  title: 'SectionBackground',
  component: SectionBackground,
  args: {
    children: (
      <div>
        <h1>SectionBackground</h1>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Amet error
          eum impedit, corporis quibusdam aut voluptas natus modi suscipit
          provident minima, praesentium incidunt perspiciatis explicabo veniam
          nulla nostrum a dignissimos?
        </p>
      </div>
    ),
  },
  argTypes: {
    children: { type: '' },
    background: { control: color },
  },
}

export const Template = (args) => {
  return (
    <div>
      <SectionBackground {...args} />
    </div>
  )
}
