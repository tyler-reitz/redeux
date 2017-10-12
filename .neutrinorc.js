module.exports = {
  use: [
    ['neutrino-preset-react', {
      babel: {
        plugins: [
          'syntax-object-rest-spread',
          'transform-object-rest-spread'
        ]
      }
    }]
  ]
}
