import Typography from 'typography'

const fontFamilies = [
  "Raleway",
  "Roboto",
  "Ubuntu",
  "Helvetica",
  "Arial",
  "sans-serif"
]; 

const typography = new Typography({
  baseFontSize: "18px",
  baseLineHeight: 1.666,
  headerFontFamily: fontFamilies,
  bodyFontFamily: fontFamilies
})

export default typography;