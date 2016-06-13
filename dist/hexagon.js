'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _three = require('three');

var _three2 = _interopRequireDefault(_three);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
  Hexagon geometry
  @author Drahomír Hanák
*/

var HexagonGeometry = function (_THREE$Geometry) {
  _inherits(HexagonGeometry, _THREE$Geometry);

  /**
    @constructor
    @param {Number} [radius]
    @param {Number} [depth]
  */

  function HexagonGeometry() {
    var radius = arguments.length <= 0 || arguments[0] === undefined ? 1 : arguments[0];
    var depth = arguments.length <= 1 || arguments[1] === undefined ? 1 : arguments[1];
    var faces = arguments.length <= 2 || arguments[2] === undefined ? true : arguments[2];

    _classCallCheck(this, HexagonGeometry);

    // tg 60

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(HexagonGeometry).call(this));

    var angle = 1.7320508075688767;
    var h = angle * 0.5; // height of a triangle

    _this.vertices.push(new _three2.default.Vector3(0, 0, 1));
    _this.vertices.push(new _three2.default.Vector3(0, 1, 1));
    _this.vertices.push(new _three2.default.Vector3(h, 0.5, 1));
    _this.vertices.push(new _three2.default.Vector3(h, -0.5, 1));
    _this.vertices.push(new _three2.default.Vector3(0, -1, 1));
    _this.vertices.push(new _three2.default.Vector3(-h, -0.5, 1));
    _this.vertices.push(new _three2.default.Vector3(-h, 0.5, 1));

    _this.vertices.map(function (vertex) {
      return vertex.multiply(new _three2.default.Vector3(radius, radius, radius * depth));
    });

    if (faces) {
      _this.faces.push(new _three2.default.Face3(0, 1, 2));
      _this.faces.push(new _three2.default.Face3(0, 2, 3));
      _this.faces.push(new _three2.default.Face3(0, 3, 4));
      _this.faces.push(new _three2.default.Face3(0, 4, 5));
      _this.faces.push(new _three2.default.Face3(0, 5, 6));
      _this.faces.push(new _three2.default.Face3(0, 6, 1));
    }

    return _this;
  }

  return HexagonGeometry;
}(_three2.default.Geometry);

exports.default = HexagonGeometry;