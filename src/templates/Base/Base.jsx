import PropTypes from 'prop-types'
import * as Styled from './styles'
import { Menu } from '../../components/Menu/Menu'
import { GoTop } from '../../components/GoTop/GoTop'
import { Copyright } from '../../components/Copyright/Copyright'

export const Base = ({ links, background, logoData, children }) => {
  return (
    <>
      <Menu links={links} logoData={logoData} background={background} />
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
  background: PropTypes.bool,
}
