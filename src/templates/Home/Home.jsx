import { useEffect, useRef, useState } from 'react'

import { GridTwoColumns } from '../../components/GridTwoColumns/GridTwoColumns'
import { GridContent } from '../../components/GridContent/GridContent'
import { GridText } from '../../components/GridText/GridText'
import { GridImage } from '../../components/GridImage/GridImage'

import { PageNotFound } from '../PageNotFound/PageNotFound'
import { Base } from '../Base/Base'
import { Loading } from '../Loading/Loading'

import { mapData } from '../../api/map-data'

import { useLocation } from 'react-router-dom'
import { Footer } from '../../components/Footer/Footer'

function Home() {
  const [data, setData] = useState(null)
  const isMounted = useRef(true)
  const location = useLocation()

  useEffect(() => {
    const pathName = location.pathname.replace(/[^a-z0-9-_]/gi, '')
    const slug = pathName ? pathName : 'pageslink'

    const load = async () => {
      try {
        const baseUrl = import.meta.env.VITE_API_URL

        const respost = await fetch(
          `${baseUrl}/api/pages/?filters[slug]=${slug}&populate[menu][populate]=*&populate[sections][populate]=*&populate=logo_favicon`
        )
        const json = await respost.json()

        if (!json.data || json.data.length === 0) {
          throw new Error('Página não encontrada')
        }

        const mappedData = mapData([json.data[0]])

        if (!mappedData || mappedData.length === 0 || !mappedData[0].slug) {
          throw new Error('Slug não encontrado após mapData')
        }

        setData(mappedData[0])
      } catch (error) {
        console.error(error)
        setData(undefined)
      }
    }

    if (isMounted.current) {
      load()
    }

    return () => {
      isMounted.current = false
    }
  }, [location])

  // Alterando o título da página com base nos dados recebidos
  useEffect(() => {
    if (data === undefined) {
      document.title = 'Página não encontrada'
    }

    if (!data) {
      document.title = 'Carregando...'
    }

    if (data && data.title) {
      document.title = data.title
    }
  }, [data])

  // Alterando o favicon da página
  useEffect(() => {
    if (!data || !data.logo_favicon) return

    const faviconUrl = data.logo_favicon.url

    if (faviconUrl) {
      // Remove favicons antigos
      const existingIcons = document.querySelectorAll(
        "link[rel='icon'], link[rel='shortcut icon']"
      )
      existingIcons.forEach((el) => el.parentNode.removeChild(el))

      // Cria um novo favicon
      const link = document.createElement('link')
      link.rel = 'icon'
      link.type = 'image/x-icon'
      link.href = faviconUrl
      document.head.appendChild(link)
    }
  }, [data])

  if (data === undefined) {
    return <PageNotFound />
  }

  if (!data) {
    return <Loading />
  }

  const { menu, sections, footerHtml, slug } = data
  const { links, text, link, srcImg, background, color } = menu

  return (
    <>
      <Base
        links={links}
        footerHtml={footerHtml}
        background={background}
        color={color}
        logoData={{ text, link, srcImg }}
      >
        {sections.map((section, index) => {
          const { component, button = {} } = section

          const key = `${slug}-${index}`

          if (component === 'section.section-two-columns') {
            return <GridTwoColumns key={key} {...section} button={button} />
          }

          if (component === 'section.section-content') {
            return <GridContent key={key} {...section} button={button} />
          }

          if (component === 'section.section-grid-text') {
            return <GridText key={key} {...section} button={button} />
          }

          if (component === 'section.section-grid-gallery') {
            return <GridImage key={key} {...section} button={button} />
          }

          return null
        })}

        {footerHtml && <Footer footerHtml={footerHtml} />}
      </Base>
    </>
  )
}

export default Home
