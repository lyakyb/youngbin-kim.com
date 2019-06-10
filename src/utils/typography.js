import Typography from "typography"

const fontFamilies = [
  "Raleway",
  "Roboto",
  "Helvetica",
  "Arial",
  "sans-serif",
  "Open Sans",
]

const typography = new Typography({
  baseFontSize: "18px",
  baseLineHeight: 1.666,
  headerFontFamily: fontFamilies,
  bodyFontFamily: fontFamilies,
  googleFonts: [
    {
      name: "Raleway",
      styles: ["300", "400", "500", "600", "700", "800"],
    },
  ],
})

export default typography
