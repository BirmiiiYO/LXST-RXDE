const sizes = {
  mobileS: '320px',
  mobileM: '375px',
  mobileL: '425px',
  tablet: '767px',
  laptop: '1024px',
  laptopL: '1440px',
  desktop: '2560px',
  content: '1110px',
}

export const devices = {
  mobileS: `(max-width: ${sizes.mobileS})`,
  mobileM: `(max-width: ${sizes.mobileM})`,
  mobileL: `(max-width: ${sizes.mobileL})`,
  tablet: `(max-width: ${sizes.tablet})`,
  laptop: `(max-width: ${sizes.laptop})`,
  content: `(max-width: ${sizes.content})`,
  laptopL: `(max-width: ${sizes.laptopL})`,
  desktop: `(max-width: ${sizes.desktop})`,
}
