export const mapSections = (sections = []) => {
  return sections.map((section) => {
    if (section.__component === 'section.section-two-columns') {
      return mapSectionTwoColumns(section)
    }
    if (section.__component === 'section.section-content') {
      return mapSectionContent(section)
    }
    if (section.__component === 'section.section-grid') {
      return mapTextGrid(section)
    }
    if (section.__component === 'section.section-grid-gallery') {
      return mapSectionGridGallery(section)
    }

    return section
  })
}

export const mapSectionTwoColumns = (section = {}) => {
  const {
    __component: component = '',
    title = '',
    description: text = '',
    image: { url: srcImg = '' } = '',
    metadata: { background = false, section_id: sectionId = '' } = false,
  } = section

  return {
    component,
    title,
    text,
    srcImg,
    background,
    sectionId,
  }
}

export const mapSectionContent = (section = {}) => {
  const {
    __component: component = '',
    title = '',
    content: html = '',
    metadata: { background = false, section_id: sectionId = '' } = false,
  } = section

  return {
    component,
    title,
    background,
    sectionId,
    html,
  }
}

export const mapTextGrid = (section = {}) => {
  const {
    __component: component = '',
    title = '',
    description = '',
    metadata: { background = false, section_id: sectionId = '' } = {},
    text_grid: grid = [],
  } = section

  return {
    component: 'section.section-grid-text',
    title,
    background,
    sectionId,
    description,
    grid: grid.map((text) => {
      const { title = '', description = '' } = text
      return { title, description }
    }),
  }
}

export const mapSectionGridGallery = (section = {}) => {
  const {
    __component: component = '',
    title = '',
    description = '',
    metadata: { background = false, section_id: sectionId = '' } = {},
    gallery: grid = [],
  } = section

  return {
    component: 'section.section-grid-gallery',
    title,
    description,
    background,
    sectionId,
    grid: grid.map((img) => ({
      srcImg: img.url || '',
      altText: img.alternativeText || '',
    })),
  }
}
