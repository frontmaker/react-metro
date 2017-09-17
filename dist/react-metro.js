"use strict";function _interopDefault(e){return e&&"object"==typeof e&&"default"in e?e.default:e}Object.defineProperty(exports,"__esModule",{value:!0});var React=_interopDefault(require("react")),gsap=require("gsap"),classCallCheck=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},createClass=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),_extends=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},inherits=function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)},possibleConstructorReturn=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t},toConsumableArray=function(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)},MetroHoc=function(e){return function(t){function n(){return classCallCheck(this,n),possibleConstructorReturn(this,(n.__proto__||Object.getPrototypeOf(n)).apply(this,arguments))}return inherits(n,t),createClass(n,[{key:"getLongestAnimationInSequence",value:function(e){return Math.max.apply(Math,toConsumableArray(this.props.sequence.map(function(t){return t.props.animation[e].time+t.props.animation[e].delay})))}},{key:"isThisTheLongestAnimation",value:function(e,t){var n=this.getLongestAnimationInSequence(t);return e[t].time+e[t].delay>=n}},{key:"applySequenceEndIfLastInSequence",value:function(e,t,n){var o=this.getLongestAnimationInSequence(n),r=!0;return t.forEach(function(t,i){t.props.animation[n].time+t.props.animation[n].delay===o&&i>e&&(r=!1)}),r}},{key:"componentWillEnter",value:function(e){var t=this,n=this.container;gsap.TweenMax.fromTo(n,this.props.animation.in.time,this.props.animation.willEnter.from,_extends({},this.props.animation.willEnter.to,{delay:this.props.animation.in.delay,onComplete:function(){t.isThisTheLongestAnimation(t.props.animation,"in")&&t.applySequenceEndIfLastInSequence(t.props.index,t.props.sequence,"in")&&t.props.mountSequenceComplete&&t.props.mountSequenceComplete(),e()}}))}},{key:"componentWillLeave",value:function(e){var t=this,n=this.container,o=this.getLongestAnimationInSequence("out")-(this.props.animation.out.time+this.props.animation.out.delay);gsap.TweenMax.fromTo(n,this.props.animation.out.time,this.props.animation.willLeave.from,_extends({},this.props.animation.willLeave.to,{delay:this.props.animation.out.delay,onComplete:function(){setTimeout(function(){t.isThisTheLongestAnimation(t.props.animation,"out")&&t.applySequenceEndIfLastInSequence(t.props.index,t.props.sequence,"out")&&t.props.unmountSequenceComplete&&t.props.unmountSequenceComplete(),e()},1e3*o)}}))}},{key:"render",value:function(){var t=this;return this.props.wrapperType?React.createElement(this.props.wrapperType,{ref:function(e){return t.container=e}},React.createElement(e,this.props)):React.createElement("div",{ref:function(e){return t.container=e}},React.createElement(e,this.props))}}]),n}(React.Component)},defaultAnimation={animation:{out:{time:.4,delay:0},in:{time:.4,delay:0},willEnter:{from:{opacity:0},to:{opacity:1,ease:"easeInOut"}},willLeave:{from:{opacity:1},to:{opacity:0}}}},metroSequence=function(e,t){var n=(arguments.length>2&&void 0!==arguments[2]?arguments[2]:null)||defaultAnimation,o=e.map(function(e,o){var r=_extends({},n,{animation:_extends({},n.animation,t[o])});return{props:_extends({},r,{content:e})}});return o.map(function(e){return _extends({},e,{sequence:o})})},metroAnimation=MetroHoc(function(){return function(e){var t=e.content,n=e.index,o=e.children,r=e.clickHandler;return React.createElement("div",{role:"presentation",onClick:function(){return r(t,n)}},o)}}),Metro={sequence:metroSequence,animation:metroAnimation};exports.default=Metro;
