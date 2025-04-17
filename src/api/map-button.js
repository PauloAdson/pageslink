export const mapButton = (button = {}) => {
  return {
    children: button?.text_button || '',
    href: button?.link_button || '#',
    target: button?.open_in_new_tab ? '_blank' : '_self',
    color: button?.color_text || '#FFFFFF',
    colorHover: button?.color_text_hover || '#e4e1e1',
    uppercase: button?.uppercase ?? true,
    bgColor: button?.color_button || '#37d145',
    bgHover: button?.color_button_hover || '#1f9228',
  }
}
