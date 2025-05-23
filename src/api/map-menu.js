export const mapMenu = (menu = {}) => {
  const {
    open_in_new_tab: newTab = false,
    logo_text: text = '',
    logo_link: link = '',
    menu_links: links = [],
    background_menu: background = '',
    color_text: color = '',
  } = menu

  const srcImg = menu.logo && menu.logo.url ? menu.logo.url : ''

  return {
    newTab,
    text,
    link,
    srcImg,
    links: mapMenuLinks(links),
    background,
    color,
  }
}

export const mapMenuLinks = (links = []) => {
  return links.map((item) => {
    const {
      open_in_new_tab: newTab = false,
      link_text: children = '',
      url: link = '',
    } = item

    return {
      newTab,
      children,
      link,
    }
  })
}
