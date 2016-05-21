'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FontAwesomeDirective = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _class;

var _core = require('@angular/core');

require('font-awesome/css/font-awesome.min.css');

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var FontAwesomeDirective = exports.FontAwesomeDirective = (_dec = (0, _core.Directive)({
  selector: '[fa]',
  inputs: ['icon', 'size', 'fw', 'spin', 'pulse', 'rotate', 'flip', 'extra']
}), _dec(_class = function () {
  _createClass(FontAwesomeDirective, null, [{
    key: 'parameters',
    get: function get() {
      return [[_core.ElementRef]];
    }
  }]);

  function FontAwesomeDirective(elementRef) {
    _classCallCheck(this, FontAwesomeDirective);

    this.el = elementRef.nativeElement;
  }

  _createClass(FontAwesomeDirective, [{
    key: 'ngOnChanges',
    value: function ngOnChanges() {
      var _el$classList;

      this.el.className = '';
      (_el$classList = this.el.classList).add.apply(_el$classList, _toConsumableArray(this.iconClass()));
    }
  }, {
    key: 'iconClass',
    value: function iconClass() {
      var classes = ['fa', 'fa-' + this.icon];
      if (this.fw) classes.push('fa-fw');
      if (this.size) classes.push('fa-' + this.size);
      if (this.spin) classes.push('fa-spin');
      if (this.pulse) classes.push('fa-pulse');
      if (this.rotate) classes.push('fa-rotate-' + this.rotate);
      if (this.flip) classes.push('fa-flip-' + this.flip);
      if (this.extra) classes.push(this.extra);
      return classes;
    }
  }]);

  return FontAwesomeDirective;
}()) || _class);
