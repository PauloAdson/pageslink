import PropTypes from 'prop-types'
import * as Styled from './styles'
import { Menu } from '../../components/Menu/Menu'
import { GoTop } from '../../components/GoTop/GoTop'
import { Copyright } from '../../components/Copyright/Copyright'

export const Base = ({ links, background, color, logoData, children }) => {
  return (
    <>
      <Menu
        links={links}
        logoData={logoData}
        background={background}
        color={color}
      />
      <Styled.Container>
        {children}
        <Copyright />
      </Styled.Container>
      <GoTop />
    </>
  )
}

Base.propTypes = {
  children: PropTypes.node.isRequired,
  ...Menu.propTypes,
  background: PropTypes.string,
  color: PropTypes.string,
}
