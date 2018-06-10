const colors = {
  white: '#fff',
  black: '#000',
  gray1: '#0E101C',
  gray2: '#141728',
  gray3: '#191d32',
  gray4: '#282f44',
  gray5: '#3D455E',
  gray6: '#535D7C',
  gray7: '#6F7895',
  gray8: '#8B93AE',
  gray9: '#B0B6CA',
  gray10: '#D2D6E2',
  grayBlue: '#5E6E9D',
  blue1: '#2A346B',
  blue2: '#2F42A4',
  blue3: '#3A57EE',
  aqua: '#2978a0',
  green: '#315659',
}

const appColors = {
  background: colors.black,
  primary: colors.blue3,
  secondary: colors.grayBlue,
}

export default {
  ...colors,
  ...appColors,
}
