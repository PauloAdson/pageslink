import { mapMenu } from './map-menu'
import { mapSections } from './map-sections'

export const mapData = (pagesData = [{}]) => {
  return pagesData.map((data) => {
    const {
      footer_text: footerHtml = '',
      slug = '',
      title = '',
      logo_favicon = null,
      sections = [],
      menu = {},
    } = data.attributes || data

    return {
      footerHtml,
      slug,
      title,
      logo_favicon,
      sections: mapSections(sections),
      menu: mapMenu(menu),
    }
  })
}
