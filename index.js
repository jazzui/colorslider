
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
  this.colorpicker.on('slide', function (color) {
    self.emit('slide', color)
  })
  this.colorpicker.on('change', function (color) {
    self.emit('change', color)
  })
  this.inner.appendChild(this.colorpicker.el)
}

Slider.prototype = new Tip()

_.extend(Slider.prototype, {
  set: function (value, silent) {
    this.colorpicker.set(value)
    if (!silent) this.emit('change', this.colorpicker.color)
  }
})

