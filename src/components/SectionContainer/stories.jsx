import { SectionContainer } from '.'

export default {
  title: 'SectionContainer',
  component: SectionContainer,
  args: {
    children: (
      <div>
        <h1>SectionContainer</h1>
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
    children: { type: 'string' },
  },
}

export const Template = (args) => {
  return (
    <div>
      <SectionContainer {...args} />
    </div>
  )
}
