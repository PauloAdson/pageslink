import PropTypes from 'prop-types'
import * as Styled from './styles'
import { Menu } from '../../components/Menu'
import { Footer } from '../../components/Footer'
import { GoTop } from '../../components/GoTop'

export const Base = ({ links, background, logoData, footerHtml, children }) => {
  return (
    <>
      <Menu links={links} logoData={logoData} background={background} />
      <Styled.Container>
        {children}
        <Footer footerHtml={footerHtml} />
      </Styled.Container>
      <GoTop />
    </>
  )
}

Base.propTypes = {
  children: PropTypes.node.isRequired,
  ...Menu.propTypes,
  footerHtml: PropTypes.string.isRequired,
  background: PropTypes.bool,
}
