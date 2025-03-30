import { LogoLink } from '.'

export default {
  title: 'LogoLink',
  component: LogoLink,
  args: {
    text: 'LogoLink',
    srcImg: 'assets/images/logo.svg',
    link: 'https://www.linkedin.com/in/paulo-adson/',
  },
}

export const ImageOnly = (args) => {
  return (
    <div>
      <LogoLink {...args} />
    </div>
  )
}

export const TextOnly = (args) => {
  return (
    <div>
      <LogoLink {...args} />
    </div>
  )
}

TextOnly.args = {
  srcImg: '',
}
