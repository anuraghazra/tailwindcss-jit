const nameClass = require('tailwindcss/lib/util/nameClass').default
const transformThemeValue = require('tailwindcss/lib/util/transformThemeValue').default
const flattenColorPalette = require('tailwindcss/lib/util/flattenColorPalette').default
const withAlphaVariable = require('tailwindcss/lib/util/withAlphaVariable').default
const toColorValue = require('tailwindcss/lib/util/toColorValue').default

module.exports = function ({ jit: { theme, addUtilities, addVariant, e } }) {
  let colorPalette = flattenColorPalette(theme.textColor)

  addUtilities({
    text: [
      (modifier, { theme }) => {
        if (modifier === '' || colorPalette[modifier] === undefined) {
          return []
        }

        return [
          [
            nameClass('text', modifier),
            withAlphaVariable({
              color: colorPalette[modifier],
              property: 'color',
              variable: '--tw-text-opacity',
            }),
          ],
        ]
      },
    ],
  })
}
