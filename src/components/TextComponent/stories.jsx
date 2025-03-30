import { TextComponent } from '.'

export default {
  title: 'TextComponent',
  component: TextComponent,
  args: {
    children: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit ut porro molestias rem illum nulla quisquam voluptates, facere architecto autem pariatur libero accusamus tempora perspiciatis adipisci veniam nihil provident illo.`,
  },
  argTypes: {
    children: { type: 'string' },
  },
}

export const Template = (args) => {
  return (
    <div>
      <TextComponent {...args} />
    </div>
  )
}
