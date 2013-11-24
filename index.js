
var _ = require('lodash')
  , Tip = require('tip')
  , ColorPicker = require('color-picker')

  , template = require('./template')

module.exports = Slider

function Slider(opts) {
  Tip.call(this, template)
  this.message('')
  this.colorpicker = new ColorPicker()
  var self = this
  this.colorpicker.on('change', function (color) {
    self.emit('change', color)
  })
  this.inner.appendChild(this.colorpicker.el[0])
}

Slider.prototype = new Tip()

_.extend(Slider.prototype, {
  set: function (value, silent) {
    this.colorpicker.color(value)
    if (!silent) this.emit('change', this.colorpicker.color())
  }
})

