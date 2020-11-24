/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 214:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

!function(e,t){ true?module.exports=t(__webpack_require__(294),__webpack_require__(323),__webpack_require__(949)):0}(this,function(e,t,n){return function(e){var t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}return n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(o,r,function(t){return e[t]}.bind(null,r));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=9)}([function(t,n){t.exports=e},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t._handleClick=t._handleMouseMove=t.restoreLogFromLocalstorage=t.restoreUpdatesFromLocalstorage=t.getGlobalState=t.setGlobalState=t.eventEmitter=void 0;var o=n(4),r=n(3),i=u(n(13)),a=u(n(14)),l=u(n(15));function u(e){return e&&e.__esModule?e:{default:e}}var s="mobx-react-devtool__updatesEnabled",c="mobx-react-devtool__logEnabled",d={updatesEnabled:!1,graphEnabled:!1,logEnabled:!1,hoverBoxes:[],renderingBoxes:[],logFilter:function(){return!0}},f=t.eventEmitter=new i.default;f.setMaxListeners(1/0);var p=void 0,g=t.setGlobalState=function(e){d.logEnabled!==e.logEnabled&&(!0===e.logEnabled?(p&&p(),p=(0,o.spy)(function(e){return(0,l.default)(e,d.logFilter)})):!1===e.logEnabled&&p&&p()),"undefined"!=typeof window&&window.localStorage&&(!0===e.updatesEnabled?window.localStorage.setItem(s,"YES"):!1===e.updatesEnabled&&window.localStorage.removeItem(s),!0===e.logEnabled?window.localStorage.setItem(c,"YES"):!1===e.logEnabled&&window.localStorage.removeItem(c)),!1===e.graphEnabled&&(e.hoverBoxes=[]),d=Object.assign({},d,e),f.emit("update")},h=(t.getGlobalState=function(){return d},t.restoreUpdatesFromLocalstorage=function(){if("undefined"!=typeof window&&window.localStorage){var e="YES"===window.localStorage.getItem(s);g({updatesEnabled:e})}},t.restoreLogFromLocalstorage=function(){if("undefined"!=typeof window&&window.localStorage){var e="YES"===window.localStorage.getItem(c);g({logEnabled:e})}},function(e){for(var t=e,n=void 0;t;){if(n=r.componentByNodeRegistery.get(t))return{component:n,node:t};t=t.parentNode}return{component:void 0,node:void 0}});t._handleMouseMove=function(e){if(d.graphEnabled){var t=e.target,n=h(t).node;if(n&&n.getBoundingClientRect){var o=n.getBoundingClientRect();g({hoverBoxes:[{id:"the hovered node",type:"hover",x:o.left,y:o.top,width:o.width,height:o.height,lifeTime:1/0}]})}}},t._handleClick=function(e){if(d.graphEnabled){var t=e.target,n=h(t).component;if(n){e.stopPropagation(),e.preventDefault();var r=(0,o.getDependencyTree)(n.render[o.$mobx]);(0,a.default)(r),g({dependencyTree:r,hoverBoxes:[],graphEnabled:!1})}}}},function(e,t,n){e.exports=n(11)()},function(e,n){e.exports=t},function(e,t){e.exports=n},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),r=n(0),i=function(e){return e&&e.__esModule?e:{default:e}}(r),a=n(3),l=n(1);function u(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}var s=function(e){function t(){var e,n,o;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var r=arguments.length,i=Array(r),a=0;a<r;a++)i[a]=arguments[a];return n=o=u(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(i))),o.handleUpdate=function(){return o.setState({})},o.handleToggleGraph=function(){var e=(0,l.getGlobalState)().graphEnabled;(0,l.setGlobalState)({hoverBoxes:[],graphEnabled:!e})},u(o,n)}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,r.Component),o(t,[{key:"componentWillMount",value:function(){this.setState({})}},{key:"componentDidMount",value:function(){(0,a.trackComponents)(),l.eventEmitter.on("update",this.handleUpdate),"undefined"!=typeof window&&"undefined"!=typeof document&&(document.body.addEventListener("mousemove",l._handleMouseMove,!0),document.body.addEventListener("click",l._handleClick,!0))}},{key:"componentWillUnmount",value:function(){l.eventEmitter.removeListener("update",this.handleUpdate),"undefined"!=typeof document&&(document.body.removeEventListener("mousemove",l._handleMouseMove,!0),document.body.removeEventListener("click",l._handleMouseMove,!0))}},{key:"render",value:function(){var e=(0,l.getGlobalState)().graphEnabled,t=this.props.children;return i.default.cloneElement(t,{onToggle:this.handleToggleGraph,active:e})}}]),t}();t.default=s},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),r=n(0),i=function(e){return e&&e.__esModule?e:{default:e}}(r),a=n(1);function l(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}var u=function(e){function t(){var e,n,o;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var r=arguments.length,i=Array(r),u=0;u<r;u++)i[u]=arguments[u];return n=o=l(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(i))),o.handleUpdate=function(){o.setState({})},o.handleToggleLog=function(){var e=(0,a.getGlobalState)().logEnabled;(0,a.setGlobalState)({logEnabled:!e})},l(o,n)}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,r.Component),o(t,[{key:"componentDidMount",value:function(){a.eventEmitter.on("update",this.handleUpdate),(0,a.restoreLogFromLocalstorage)()}},{key:"componentWillUnmount",value:function(){a.eventEmitter.removeListener("update",this.handleUpdate)}},{key:"render",value:function(){var e=(0,a.getGlobalState)().logEnabled,t=this.props.children;return i.default.cloneElement(t,{onToggle:this.handleToggleLog,active:e})}}]),t}();t.default=u},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),r=n(0),i=s(r),a=s(n(2)),l=s(n(17)),u=n(1);function s(e){return e&&e.__esModule?e:{default:e}}function c(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}var d=function(e){function t(){var e,n,o;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var r=arguments.length,i=Array(r),a=0;a<r;a++)i[a]=arguments[a];return n=o=c(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(i))),o.handleUpdate=function(){return o.setState({})},o.handleToggleUpdates=function(){var e=(0,u.getGlobalState)().updatesEnabled;(0,u.setGlobalState)({updatesEnabled:!e})},c(o,n)}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,r.Component),o(t,[{key:"componentDidMount",value:function(){u.eventEmitter.on("update",this.handleUpdate);var e=this.props.highlightTimeout;this.renderingMonitor=new l.default({highlightTimeout:e}),(0,u.restoreUpdatesFromLocalstorage)()}},{key:"componentWillUnmount",value:function(){u.eventEmitter.removeListener("update",this.handleUpdate),this.renderingMonitor.dispose()}},{key:"render",value:function(){var e=(0,u.getGlobalState)().updatesEnabled,t=this.props.children;return i.default.cloneElement(t,{onToggle:this.handleToggleUpdates,active:e})}}]),t}();d.propTypes={highlightTimeout:a.default.number},d.defaultProps={highlightTimeout:1500},t.default=d},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.panel={position:"fixed",height:"26px",backgroundColor:"#fff",color:"rgba(0, 0, 0, 0.8)",borderRadius:"2px",borderStyle:"solid",borderWidth:"1px",borderColor:"rgba(0, 0, 0, 0.1)",zIndex:"65000",fontFamily:"Helvetica, sans-serif",display:"flex",padding:"0 5px"},t.button={opacity:.45,background:"transparent none center / 16px 16px no-repeat",width:"26px",margin:"0 10px",cursor:"pointer",border:"none",hover:{opacity:.7},active:{opacity:1,":hover":{opacity:1}}},t.buttonLog={backgroundImage:"url("+n(19)+")"},t.buttonLogActive={backgroundImage:"url("+n(20)+")"},t.buttonUpdates={backgroundImage:"url("+n(21)+")"},t.buttonUpdatesActive={backgroundImage:"url("+n(22)+")"},t.buttonGraph={backgroundImage:"url("+n(23)+")"},t.buttonGraphActive={backgroundImage:"url("+n(24)+")"}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.setLogEnabled=t.setGraphEnabled=t.setUpdatesEnabled=t.configureDevtool=t.UpdatesControl=t.LogControl=t.GraphControl=t.default=void 0;var o=n(10);Object.defineProperty(t,"default",{enumerable:!0,get:function(){return u(o).default}});var r=n(5);Object.defineProperty(t,"GraphControl",{enumerable:!0,get:function(){return u(r).default}});var i=n(6);Object.defineProperty(t,"LogControl",{enumerable:!0,get:function(){return u(i).default}});var a=n(7);Object.defineProperty(t,"UpdatesControl",{enumerable:!0,get:function(){return u(a).default}});var l=n(1);function u(e){return e&&e.__esModule?e:{default:e}}var s=t.configureDevtool=function(e){var t=e.logEnabled,n=e.updatesEnabled,o=e.graphEnabled,r=e.logFilter,i={};void 0!==t&&(i.logEnabled=Boolean(t)),void 0!==n&&(i.updatesEnabled=Boolean(n)),void 0!==o&&(i.graphEnabled=Boolean(o)),"function"==typeof r&&(i.logFilter=r),(0,l.setGlobalState)(i)};t.setUpdatesEnabled=function(e){return s({updatesEnabled:e})},t.setGraphEnabled=function(e){return s({graphEnabled:e})},t.setLogEnabled=function(e){return s({logEnabled:e})}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),r=n(0),i=d(r),a=d(n(2)),l=n(1),u=d(n(16)),s=d(n(25)),c=d(n(27));function d(e){return e&&e.__esModule?e:{default:e}}function f(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}var p=function(e){function t(){var e,n,o;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var r=arguments.length,i=Array(r),a=0;a<r;a++)i[a]=arguments[a];return n=o=f(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(i))),o.handleUpdate=function(){return o.setState((0,l.getGlobalState)())},o.handleToggleGraph=function(){o.setState({hoverBoxes:[],graphEnabled:!o.state.graphEnabled})},f(o,n)}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,r.Component),o(t,[{key:"componentWillMount",value:function(){this.setState((0,l.getGlobalState)())}},{key:"componentDidMount",value:function(){l.eventEmitter.on("update",this.handleUpdate)}},{key:"componentWillUnmount",value:function(){l.eventEmitter.removeListener("update",this.handleUpdate)}},{key:"render",value:function(){var e=this.props,t=e.noPanel,n=e.highlightTimeout,o=e.className,r=e.style,a=this.state,l=a.renderingBoxes,d=a.hoverBoxes;return i.default.createElement("div",null,!0!==t&&i.default.createElement(u.default,{position:this.props.position,highlightTimeout:n,className:o,style:r}),i.default.createElement(s.default,{boxes:l.concat(d)}),i.default.createElement(c.default,null))}}]),t}();p.propTypes={highlightTimeout:a.default.number,noPanel:a.default.bool,className:a.default.string,style:a.default.object,position:a.default.oneOfType(a.default.oneOf(["topRight","bottomRight","bottomLeft","topLeft"]),a.default.shape({top:a.default.string,right:a.default.string,bottom:a.default.string,left:a.default.string}))},p.defaultProps={noPanel:!1,className:""},t.default=p},function(e,t,n){"use strict";var o=n(12);function r(){}e.exports=function(){function e(e,t,n,r,i,a){if(a!==o){var l=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw l.name="Invariant Violation",l}}function t(){return e}e.isRequired=e;var n={array:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t};return n.checkPropTypes=r,n.PropTypes=n,n}},function(e,t,n){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},function(e,t){function n(){this._events=this._events||{},this._maxListeners=this._maxListeners||void 0}function o(e){return"function"==typeof e}function r(e){return"object"==typeof e&&null!==e}function i(e){return void 0===e}e.exports=n,n.EventEmitter=n,n.prototype._events=void 0,n.prototype._maxListeners=void 0,n.defaultMaxListeners=10,n.prototype.setMaxListeners=function(e){if(!function(e){return"number"==typeof e}(e)||e<0||isNaN(e))throw TypeError("n must be a positive number");return this._maxListeners=e,this},n.prototype.emit=function(e){var t,n,a,l,u,s;if(this._events||(this._events={}),"error"===e&&(!this._events.error||r(this._events.error)&&!this._events.error.length)){if((t=arguments[1])instanceof Error)throw t;var c=new Error('Uncaught, unspecified "error" event. ('+t+")");throw c.context=t,c}if(i(n=this._events[e]))return!1;if(o(n))switch(arguments.length){case 1:n.call(this);break;case 2:n.call(this,arguments[1]);break;case 3:n.call(this,arguments[1],arguments[2]);break;default:l=Array.prototype.slice.call(arguments,1),n.apply(this,l)}else if(r(n))for(l=Array.prototype.slice.call(arguments,1),a=(s=n.slice()).length,u=0;u<a;u++)s[u].apply(this,l);return!0},n.prototype.addListener=function(e,t){var a;if(!o(t))throw TypeError("listener must be a function");return this._events||(this._events={}),this._events.newListener&&this.emit("newListener",e,o(t.listener)?t.listener:t),this._events[e]?r(this._events[e])?this._events[e].push(t):this._events[e]=[this._events[e],t]:this._events[e]=t,r(this._events[e])&&!this._events[e].warned&&(a=i(this._maxListeners)?n.defaultMaxListeners:this._maxListeners)&&a>0&&this._events[e].length>a&&(this._events[e].warned=!0,console.error("(node) warning: possible EventEmitter memory leak detected. %d listeners added. Use emitter.setMaxListeners() to increase limit.",this._events[e].length),"function"==typeof console.trace&&console.trace()),this},n.prototype.on=n.prototype.addListener,n.prototype.once=function(e,t){if(!o(t))throw TypeError("listener must be a function");var n=!1;function r(){this.removeListener(e,r),n||(n=!0,t.apply(this,arguments))}return r.listener=t,this.on(e,r),this},n.prototype.removeListener=function(e,t){var n,i,a,l;if(!o(t))throw TypeError("listener must be a function");if(!this._events||!this._events[e])return this;if(a=(n=this._events[e]).length,i=-1,n===t||o(n.listener)&&n.listener===t)delete this._events[e],this._events.removeListener&&this.emit("removeListener",e,t);else if(r(n)){for(l=a;l-- >0;)if(n[l]===t||n[l].listener&&n[l].listener===t){i=l;break}if(i<0)return this;1===n.length?(n.length=0,delete this._events[e]):n.splice(i,1),this._events.removeListener&&this.emit("removeListener",e,t)}return this},n.prototype.removeAllListeners=function(e){var t,n;if(!this._events)return this;if(!this._events.removeListener)return 0===arguments.length?this._events={}:this._events[e]&&delete this._events[e],this;if(0===arguments.length){for(t in this._events)"removeListener"!==t&&this.removeAllListeners(t);return this.removeAllListeners("removeListener"),this._events={},this}if(o(n=this._events[e]))this.removeListener(e,n);else if(n)for(;n.length;)this.removeListener(e,n[n.length-1]);return delete this._events[e],this},n.prototype.listeners=function(e){return this._events&&this._events[e]?o(this._events[e])?[this._events[e]]:this._events[e].slice():[]},n.prototype.listenerCount=function(e){if(this._events){var t=this._events[e];if(o(t))return 1;if(t)return t.length}return 0},n.listenerCount=function(e,t){return e.listenerCount(t)}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.default=function e(t){if(t.dependencies){for(var n=t.dependencies.length-1;n>=0;n--)for(var o=t.dependencies[n].name,r=n-1;r>=0;r--)if(t.dependencies[r].name===o){t.dependencies[r].dependencies=[].concat(t.dependencies[r].dependencies||[],t.dependencies[n].dependencies||[]),t.dependencies.splice(n,1);break}t.dependencies.forEach(e)}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};t.default=function(e,t){!1===i&&"undefined"!=typeof navigator&&-1===navigator.userAgent.indexOf("Chrome")&&-1===navigator.userAgent.indexOf("Firefox")&&(console.warn("The output of the MobX logger is optimized for browsers with a modern console API like Chrome and Firefox"),i=!0);var n=!0===e.spyReportStart,o=!0===e.spyReportEnd,u=void 0;0===a?(u=t(e),n&&!u&&(l=!0)):o&&l&&1===a?(u=!1,l=!1):u=!0!==l;if(u&&o)d(e.time);else if(u){var h=n?c:f;switch(e.type){case"action":h("%caction '%s' %s","color:dodgerblue",e.name,b("(",m(e.target))),f(e.arguments),g();break;case"transaction":h("%ctransaction '%s' %s","color:gray",e.name,b("(",m(e.target)));break;case"scheduled-reaction":h("%cscheduled async reaction '%s'","color:#10a210",e.name);break;case"reaction":h("%creaction '%s'","color:#10a210",e.name),g();break;case"compute":c("%ccomputed '%s' %s","color:#10a210",e.name,b("(",m(e.target))),d();break;case"error":h("%cerror: %s","color:tomato",e.message),g(),function(){for(var e=0,t=s;e<t;e++)d()}();break;case"update":(0,r.isObservableArray)(e.object)?h("updated '%s[%s]': %s (was: %s)",y(e.object),e.index,v(e.newValue),v(e.oldValue)):(0,r.isObservableObject)(e.object)||(0,r.isObservableMap)(e.object)?h("updated '%s.%s': %s (was: %s)",e.name,e.key,v(e.newValue),v(e.oldValue)):h("updated '%s': %s (was: %s)",e.name,v(e.newValue),v(e.oldValue)),p({newValue:e.newValue,oldValue:e.oldValue}),g();break;case"splice":h("spliced '%s': index %d, added %d, removed %d",y(e.object),e.index,e.addedCount,e.removedCount),p({added:e.added,removed:e.removed}),g();break;case"add":h("set '%s.%s': %s",e.name,e.key,v(e.newValue)),p({newValue:e.newValue}),g();break;case"delete":case"remove":h("removed '%s.%s' (was %s)",e.name,e.key,v(e.oldValue)),p({oldValue:e.oldValue}),g();break;case"create":h("set '%s': %s",e.name,v(e.newValue)),p({newValue:e.newValue}),g();break;default:h(e.type),p(e)}}n&&a++;o&&a--};var r=n(4),i=!1,a=0,l=!1;var u="function"==typeof console.groupCollapsed,s=0;function c(){console[u?"groupCollapsed":"log"].apply(console,arguments),s++}function d(e){s--,"number"==typeof e&&f("%ctotal time: %sms","color:gray",e),u&&console.groupEnd()}function f(){console.log.apply(console,arguments)}function p(){console.dir.apply(console,arguments)}function g(){u&&console.groupCollapsed("stack"),console.trace("stack"),u&&console.groupEnd()}var h={'"':'"',"'":"'","(":")","[":"]","<":"]","#":""};function b(e,t){return t?(e||"")+t+(h[e]||""):""}function y(e){return e?(0,r.getDebugName)(e):String(e)}function v(e){return function(e){return null===e||void 0===e||"string"==typeof e||"number"==typeof e||"boolean"==typeof e}(e)?"string"==typeof e&&e.length>100?e.substr(0,97)+"...":e:b("(",m(e))}function m(e){if(null===e||void 0===e)return"";if(e&&"object"===(void 0===e?"undefined":o(e))){if(e&&e[r.$mobx])return e[r.$mobx].name;if(e.constructor)return e.constructor.name||"object"}return""+(void 0===e?"undefined":o(e))}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),r=n(0),i=p(r),a=p(n(2)),l=n(1),u=p(n(5)),s=p(n(6)),c=p(n(7)),d=p(n(18)),f=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}(n(8));function p(e){return e&&e.__esModule?e:{default:e}}function g(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}var h=function(e){function t(){var e,n,o;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var r=arguments.length,i=Array(r),a=0;a<r;a++)i[a]=arguments[a];return n=o=g(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(i))),o.handleUpdate=function(){return o.setState({})},g(o,n)}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,r.Component),o(t,[{key:"componentDidMount",value:function(){l.eventEmitter.on("update",this.handleUpdate)}},{key:"componentWillUnmount",value:function(){l.eventEmitter.removeListener("update",this.handleUpdate)}},{key:"render",value:function(){var e=this.props,t=e.position,n=e.highlightTimeout,o=e.className,r=e.style,a={};if("string"==typeof t)switch(t){case"topRight":a.top="-2px",a.right="20px";break;case"bottomRight":a.bottom="-2px",a.right="20px";break;case"bottomLeft":a.bottom="-2px",a.left="20px";break;case"topLeft":a.top="-2px",a.left="20px"}else Object.assign(a,t);return i.default.createElement("div",null,i.default.createElement("div",{className:o,style:Object.assign({},f.panel,a,r)},i.default.createElement(c.default,{highlightTimeout:n},i.default.createElement(d.default,{id:"buttonUpdates"})),i.default.createElement(u.default,null,i.default.createElement(d.default,{id:"buttonGraph"})),i.default.createElement(s.default,null,i.default.createElement(d.default,{id:"buttonLog"}))))}}]),t}();h.propTypes={highlightTimeout:a.default.number,className:a.default.string,style:a.default.object},h.defaultProps={className:"",position:"bottomRight"},t.default=h},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),r=n(3),i=n(1);var a=function(e){switch(!0){case e<25:return"cheap";case e<100:return"acceptable";default:return"expensive"}},l=function(){function e(t){var n=this,o=t.highlightTimeout;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._boxesRegistry="undefined"!=typeof WeakMap?new WeakMap:new Map,this._renderReporterDisposer=r.renderReporter.on(function(e){if(!0===(0,i.getGlobalState)().updatesEnabled)switch(e.event){case"render":if(!e.node||!e.node.getBoundingClientRect||isNaN(e.renderTime))return;var t=e.node.getBoundingClientRect(),r=n.getBoxForNode(e.node);r.type="rendering",r.y=t.top,r.x=t.left,r.width=t.width,r.height=t.height,r.renderInfo={count:r.renderInfo&&++r.renderInfo.count||1,renderTime:e.renderTime,totalTime:e.totalTime,cost:a(e.renderTime)},r.lifeTime=o;var l=(0,i.getGlobalState)().renderingBoxes;return-1===l.indexOf(r)&&(l=l.concat([r])),(0,i.setGlobalState)({renderingBoxes:l}),r._timeout&&clearTimeout(r._timeout),void(r._timeout=setTimeout(function(){return n.removeBox(e.node,!0)},o));case"destroy":return n.removeBox(e.node),void n._boxesRegistry.delete(e.node);default:return}})}return o(e,[{key:"getBoxForNode",value:function(e){if(this._boxesRegistry.has(e))return this._boxesRegistry.get(e);var t={id:Math.random().toString(32).substr(2)};return this._boxesRegistry.set(e,t),t}},{key:"dispose",value:function(){this._renderReporterDisposer()}},{key:"removeBox",value:function(e){if(!1!==this._boxesRegistry.has(e)){var t=(0,i.getGlobalState)().renderingBoxes,n=t.indexOf(this._boxesRegistry.get(e));-1!==n&&(t=t.slice(0,n).concat(t.slice(n+1)),(0,i.setGlobalState)({renderingBoxes:t}))}}}]),e}();t.default=l},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),r=n(0),i=u(r),a=u(n(2)),l=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}(n(8));function u(e){return e&&e.__esModule?e:{default:e}}function s(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}var c=function(e){function t(){var e,n,o;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var r=arguments.length,i=Array(r),a=0;a<r;a++)i[a]=arguments[a];return n=o=s(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(i))),o.state={hovered:!1},o.handleMouseOver=function(){return o.setState({hovered:!0})},o.handleMouseOut=function(){return o.setState({hovered:!1})},s(o,n)}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,r.Component),o(t,[{key:"render",value:function(){var e=this.props,t=e.active,n=e.id,o=e.onToggle,r=this.state.hovered,a=function(){switch(n){case"buttonUpdates":return t?l.buttonUpdatesActive:l.buttonUpdates;case"buttonGraph":return t?l.buttonGraphActive:l.buttonGraph;case"buttonLog":return t?l.buttonLogActive:l.buttonLog}}(),u=function(){switch(n){case"buttonUpdates":return"Visualize component re-renders";case"buttonGraph":return"Select a component and show its dependency tree";case"buttonLog":return"Log all MobX state changes and reactions to the browser console (use F12 to show / hide the console). Use Chrome / Chromium for an optimal experience"}}(),s=Object.assign({},l.button,a,t&&l.button.active,r&&l.button.hover);return i.default.createElement("button",{type:"button",onClick:o,title:u,style:s,onMouseOver:this.handleMouseOver,onMouseOut:this.handleMouseOut})}}]),t}();c.props={onToggle:a.default.bool.isRequired,active:a.default.bool.isRequired,name:a.default.oneOf(["buttonUpdates","buttonGraph","buttonLog"]).isRequired},t.default=c},function(e,t){e.exports="data:image/svg+xml;base64,PHN2ZyBiYXNlUHJvZmlsZT0iYmFzaWMiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdmlld0JveD0iMCAwIDE2IDE2IiBoZWlnaHQ9IjE2IiB3aWR0aD0iMTYiPgogICAgPGcgc3Ryb2tlPSIjMDAwIiBmaWxsPSJub25lIiBzdHJva2Utd2lkdGg9IjEiPgogICAgICAgIDxwYXRoIGQ9Ik0xMi41IDMuNWgtOGMtMS4xIDAtMiAuOS0yIDJ2NWMwIDEuMS45IDIgMiAyaDF2Mmw1LTJoMmMxLjEgMCAyLS45IDItMnYtNWMwLTEuMS0uOS0yLTItMnoiLz4KICAgICAgICA8cGF0aCBkPSJNNSA2LjVoNyIvPgogICAgICAgIDxwYXRoIGQ9Ik01IDkuNWg3Ii8+CiAgICA8L2c+Cjwvc3ZnPgo="},function(e,t){e.exports="data:image/svg+xml;base64,PHN2ZyBiYXNlUHJvZmlsZT0iYmFzaWMiIGlkPSJMYXllcl8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxNiAxNiIgaGVpZ2h0PSIxNiIgd2lkdGg9IjE2Ij4KICAgIDxnIHN0cm9rZT0iIzE3ODBmYSIgZmlsbD0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxLjI1Ij4KICAgICAgICA8cGF0aCBkPSJNMTIuNSAzLjVoLThjLTEuMSAwLTIgLjktMiAydjVjMCAxLjEuOSAyIDIgMmgxdjJsNS0yaDJjMS4xIDAgMi0uOSAyLTJ2LTVjMC0xLjEtLjktMi0yLTJ6Ii8+CiAgICAgICAgPHBhdGggZD0iTTUgNi41aDciLz4KICAgICAgICA8cGF0aCBkPSJNNSA5LjVoNyIvPgogICAgPC9nPgo8L3N2Zz4K"},function(e,t){e.exports="data:image/svg+xml;base64,PHN2ZyBiYXNlUHJvZmlsZT0iYmFzaWMiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdmlld0JveD0iMCAwIDE2IDE2IiBoZWlnaHQ9IjE2IiB3aWR0aD0iMTYiPgogICAgPGcgc3Ryb2tlPSIjMDAwIiBmaWxsPSJub25lIiBzdHJva2Utd2lkdGg9IjEiPgogICAgICAgIDxjaXJjbGUgY3g9IjguNSIgY3k9IjguNSIgcj0iNiIvPgogICAgICAgIDxwYXRoIGQ9Ik04LjUgMTBWNCIvPgogICAgPC9nPgogICAgPGcgc3Ryb2tlPSJub25lIiBmaWxsPSIjMDAwIj4KICAgICAgICA8Y2lyY2xlIGN4PSI4LjUiIGN5PSI4LjUiIHI9IjEiLz4KICAgICAgICA8cGF0aCBkPSJNNy41IDFoMnYxLjVoLTJ6Ii8+CiAgICAgICAgPHBhdGggZD0iTTE0IDEuNmwtLjcuNy4zLjMtLjcuOC43LjcuOC0uNy4zLjMuNy0uN3oiLz4KICAgIDwvZz4KPC9zdmc+Cg=="},function(e,t){e.exports="data:image/svg+xml;base64,PHN2ZyBiYXNlUHJvZmlsZT0iYmFzaWMiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdmlld0JveD0iMCAwIDE2IDE2IiBoZWlnaHQ9IjE2IiB3aWR0aD0iMTYiPgogICAgPGcgc3Ryb2tlPSIjMTc4MGZhIiBmaWxsPSJub25lIiBzdHJva2Utd2lkdGg9IjEuMjUiPgogICAgICAgIDxjaXJjbGUgY3g9IjguNSIgY3k9IjguNSIgcj0iNiIvPgogICAgICAgIDxwYXRoIGQ9Ik04LjUgMTBWNCIvPgogICAgPC9nPgogICAgPGcgc3Ryb2tlPSJub25lIiBmaWxsPSIjMTc4MGZhIj4KICAgICAgICA8Y2lyY2xlIGN4PSI4LjUiIGN5PSI4LjUiIHI9IjEiLz4KICAgICAgICA8cGF0aCBkPSJNNy41IDFoMnYxLjVoLTJ6Ii8+CiAgICAgICAgPHBhdGggZD0iTTE0IDEuNmwtLjcuNy4zLjMtLjcuOC43LjcuOC0uNy4zLjMuNy0uN3oiLz4KICAgIDwvZz4KPC9zdmc+Cg=="},function(e,t){e.exports="data:image/svg+xml;base64,PHN2ZyBiYXNlUHJvZmlsZT0iYmFzaWMiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdmlld0JveD0iMCAwIDE2IDE2IiBoZWlnaHQ9IjE2IiB3aWR0aD0iMTYiPgogICAgPGcgc3Ryb2tlPSIjMDAwIiBmaWxsPSJub25lIiBzdHJva2Utd2lkdGg9IjEiPgogICAgICAgIDxwYXRoIGQ9Ik0yLjUgMi41aDl2MmgtOXoiLz4KICAgICAgICA8cGF0aCBkPSJNNy41IDcuNWg3djJoLTd6Ii8+CiAgICAgICAgPHBhdGggZD0iTTcuNSAxMi41aDd2MmgtN3oiLz4KICAgICAgICA8cGF0aCBkPSJNNC41IDQuNXY5aDMiLz4KICAgICAgICA8cGF0aCBkPSJNNy41IDguNWgtMyIvPgogICAgPC9nPgo8L3N2Zz4K"},function(e,t){e.exports="data:image/svg+xml;base64,PHN2ZyBiYXNlUHJvZmlsZT0iYmFzaWMiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdmlld0JveD0iMCAwIDE2IDE2IiBoZWlnaHQ9IjE2IiB3aWR0aD0iMTYiPgogICAgPGcgc3Ryb2tlPSIjMTc4MGZhIiBmaWxsPSJub25lIiBzdHJva2Utd2lkdGg9IjEuMjUiPgogICAgICAgIDxwYXRoIGQ9Ik0yLjUgMi41aDl2MmgtOXoiLz4KICAgICAgICA8cGF0aCBkPSJNNy41IDcuNWg3djJoLTd6Ii8+CiAgICAgICAgPHBhdGggZD0iTTcuNSAxMi41aDd2MmgtN3oiLz4KICAgICAgICA8cGF0aCBkPSJNNC41IDQuNXY5aDMiLz4KICAgICAgICA8cGF0aCBkPSJNNy41IDguNWgtMyIvPgogICAgPC9nPgo8L3N2Zz4K"},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),r=n(0),i=u(r),a=u(n(2)),l=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}(n(26));function u(e){return e&&e.__esModule?e:{default:e}}var s=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,r.Component),o(t,[{key:"renderBox",value:function(e){switch(e.type){case"rendering":var t=l.rendering[e.renderInfo.cost]||{};return i.default.createElement("div",{key:e.id,ref:function(t){return setTimeout(function(){t&&(t.style.opacity=0)},e.lifeTime-500)},style:Object.assign({},l.box,l.rendering,t,{left:e.x,top:e.y,width:e.width,height:e.height})},i.default.createElement("span",{style:Object.assign({},l.text,t.text)},e.renderInfo.count,"x | ",e.renderInfo.renderTime," /"," ",e.renderInfo.totalTime," ms"));case"hover":return i.default.createElement("div",{key:e.id,style:Object.assign({},l.box,l.hover,{left:e.x,top:e.y,width:e.width,height:e.height})});default:throw new Error}}},{key:"render",value:function(){var e=this,t=this.props.boxes;return i.default.createElement("div",null,t.map(function(t){return e.renderBox(t)}))}}]),t}();s.propTypes={boxes:a.default.arrayOf(a.default.shape({type:a.default.oneOf(["rendering","hover"]).isRequired,x:a.default.number.isRequired,y:a.default.number.isRequired,width:a.default.number.isRequired,height:a.default.number.isRequired,renderInfo:a.default.shape({count:a.default.number.isRequired,renderTime:a.default.number.isRequired,totalTime:a.default.number.isRequired,cost:a.default.oneOf(["cheap","acceptable","expensive"]).isRequired}),lifeTime:a.default.number.isRequired})).isRequired},t.default=s},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.box={display:"block",position:"fixed",zIndex:"64998",minWidth:"60px",outline:"3px solid",pointerEvents:"none",transition:"opacity 500ms ease-in"},t.text={fontFamily:"verdana, sans-serif",padding:"0 4px 2px",color:"rgba(0, 0, 0, 0.6)",fontSize:"10px",lineHeight:"12px",pointerEvents:"none",float:"right",borderBottomRightRadius:"2px",maxWidth:"100%",maxHeight:"100%",overflow:"hidden",whiteSpace:"nowrap",textOverflow:"ellipsis"},t.rendering={cheap:{outlineColor:"rgba(182, 218, 146, 0.75)",text:{backgroundColor:"rgba(182, 218, 146, 0.75)"}},acceptable:{outlineColor:"rgba(228, 195, 66, 0.85)",text:{backgroundColor:"rgba(228, 195, 66, 0.85)"}},expensive:{outlineColor:"rgba(228, 171, 171, 0.95)",text:{backgroundColor:"rgba(228, 171, 171, 0.95)"}}},t.hover={outlineColor:"rgba(128, 128, 255, 0.5)"}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),r=n(0),i=s(r),a=s(n(28)),l=n(1),u=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}(n(30));function s(e){return e&&e.__esModule?e:{default:e}}function c(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}var d=function(e){function t(){var e,n,o;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var r=arguments.length,i=Array(r),a=0;a<r;a++)i[a]=arguments[a];return n=o=c(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(i))),o.handleUpdate=function(){return o.setState({})},o.handleClose=function(){return(0,l.setGlobalState)({dependencyTree:void 0})},c(o,n)}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,r.Component),o(t,[{key:"componentDidMount",value:function(){l.eventEmitter.on("update",this.handleUpdate)}},{key:"componentWillUnmount",value:function(){l.eventEmitter.removeListener("update",this.handleUpdate)}},{key:"renderTreeItem",value:function(e,t,n){var o=e.name,r=e.dependencies,a=this;return i.default.createElement("div",{style:u.item,key:o},i.default.createElement("span",{style:Object.assign({},u.box,n&&u.box.root)},o),r&&i.default.createElement("div",{style:u.tree},r.map(function(e,t){return a.renderTreeItem(e,t==r.length-1)})),!n&&i.default.createElement("span",{style:u.itemHorisontalDash}),!n&&i.default.createElement("span",{style:Object.assign({},u.itemVericalStick,t&&u.itemVericalStick.short)}))}},{key:"render",value:function(){var e=(0,l.getGlobalState)().dependencyTree;return i.default.createElement(a.default,{onOverlayClick:this.handleClose},e&&i.default.createElement("div",{style:u.graph},i.default.createElement("span",{style:u.close,onClick:this.handleClose},"×"),i.default.createElement("div",{style:u.tree},this.renderTreeItem(e,!0,!0))))}}]),t}();t.default=d},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),r=u(n(2)),i=n(0),a=u(i),l=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}(n(29));function u(e){return e&&e.__esModule?e:{default:e}}function s(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}var c=function(e){function t(){var e,n,o;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var r=arguments.length,i=Array(r),a=0;a<r;a++)i[a]=arguments[a];return n=o=s(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(i))),o.stopPropagation=function(e){return e.stopPropagation()},s(o,n)}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,i.Component),o(t,[{key:"componentDidUpdate",value:function(e){var t=document.body.parentNode;if(e.children&&!this.props.children)t.style.borderRight=null,t.style.overflow=null;else if(!e.children&&this.props.children){var n=t.offsetWidth;t.style.overflow="hidden";var o=t.offsetWidth,r=Math.max(0,o-n);t.style.borderRight=r+"px solid transparent"}}},{key:"render",value:function(){var e=this.props,t=e.children,n=e.onOverlayClick;return t?a.default.createElement("div",{style:l.overlay,onClick:n},a.default.createElement("div",{key:"content",style:l.modal,onClick:this.stopPropagation},t)):null}}]),t}();c.propTypes={children:r.default.node,onOverlayClick:r.default.func.isRequired},t.default=c},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.overlay={position:"fixed",top:0,right:0,bottom:0,left:0,zIndex:66e3,overflow:"auto",WebkitOverflowScrolling:"touch",outline:0,backgroundColor:"rgba(40, 40, 50, 0.5)",transformOrigin:"50% 25%"},t.modal={position:"relative",width:"auto",margin:"5% 10%",zIndex:1060}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.graph={background:"white",padding:"40px"},t.close={color:"rgba(0, 0, 0, 0.2)",fontSize:"36px",position:"absolute",top:"5px",right:"5px",width:"40px",height:"40px",lineHeight:"34px",textAlign:"center",cursor:"pointer",":hover":{color:"rgba(0, 0, 0, 0.5)"}},t.tree={position:"relative",paddingLeft:"25px"},t.item={position:"relative"},t.box={padding:"4px 10px",background:"rgba(0, 0, 0, 0.05)",display:"inline-block",marginBottom:"8px",color:"#000",root:{fontSize:"15px",fontWeight:"bold",padding:"6px 13px"}},t.itemHorisontalDash={position:"absolute",left:"-12px",borderTop:"1px solid rgba(0, 0, 0, 0.2)",top:"14px",width:"12px",height:"0"},t.itemVericalStick={position:"absolute",left:"-12px",borderLeft:"1px solid rgba(0, 0, 0, 0.2)",height:"100%",width:0,top:"-8px",short:{height:"23px"}}}])});

/***/ }),

/***/ 743:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Q": () => /* binding */ ObserverComponent
/* harmony export */ });
/* harmony import */ var _useObserver__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(672);

function ObserverComponent(_a) {
    var children = _a.children, render = _a.render;
    var component = children || render;
    if (typeof component !== "function") {
        return null;
    }
    return (0,_useObserver__WEBPACK_IMPORTED_MODULE_0__/* .useObserver */ .S)(component);
}
if (false) {}
ObserverComponent.displayName = "Observer";

function ObserverPropsCheck(props, key, componentName, location, propFullName) {
    var extraKey = key === "children" ? "render" : "children";
    var hasProp = typeof props[key] === "function";
    var hasExtraProp = typeof props[extraKey] === "function";
    if (hasProp && hasExtraProp) {
        return new Error("MobX Observer: Do not use children and render in the same time in`" + componentName);
    }
    if (hasProp || hasExtraProp) {
        return null;
    }
    return new Error("Invalid prop `" +
        propFullName +
        "` of type `" +
        typeof props[key] +
        "` supplied to" +
        " `" +
        componentName +
        "`, expected `function`.");
}
//# sourceMappingURL=ObserverComponent.js.map

/***/ }),

/***/ 581:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SZ": () => /* binding */ useObserver,
/* harmony export */   "Ot": () => /* binding */ useStaticRendering
/* harmony export */ });
/* harmony import */ var _utils_reactBatchedUpdates__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(935);
/* harmony import */ var _utils_observerBatching__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(158);
/* harmony import */ var _useObserver__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(672);
/* harmony import */ var _staticRendering__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(367);






(0,_utils_observerBatching__WEBPACK_IMPORTED_MODULE_0__/* .observerBatching */ .z0)(_utils_reactBatchedUpdates__WEBPACK_IMPORTED_MODULE_1__.unstable_batchedUpdates);







function useObserver(fn, baseComponentName) {
    if (baseComponentName === void 0) { baseComponentName = "observed"; }
    if (false) {}
    return (0,_useObserver__WEBPACK_IMPORTED_MODULE_2__/* .useObserver */ .S)(fn, baseComponentName);
}

function useStaticRendering(enable) {
    if (false) {}
    (0,_staticRendering__WEBPACK_IMPORTED_MODULE_3__/* .enableStaticRendering */ .D)(enable);
}
//# sourceMappingURL=index.js.map

/***/ }),

/***/ 983:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "P": () => /* binding */ observer
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(294);
/* harmony import */ var _staticRendering__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(367);
/* harmony import */ var _useObserver__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(672);
var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};



// n.b. base case is not used for actual typings or exported in the typing files
function observer(baseComponent, options) {
    // The working of observer is explained step by step in this talk: https://www.youtube.com/watch?v=cPF4iBedoF0&feature=youtu.be&t=1307
    if ((0,_staticRendering__WEBPACK_IMPORTED_MODULE_1__/* .isUsingStaticRendering */ .F)()) {
        return baseComponent;
    }
    var realOptions = __assign({ forwardRef: false }, options);
    var baseComponentName = baseComponent.displayName || baseComponent.name;
    var wrappedComponent = function (props, ref) {
        return (0,_useObserver__WEBPACK_IMPORTED_MODULE_2__/* .useObserver */ .S)(function () { return baseComponent(props, ref); }, baseComponentName);
    };
    wrappedComponent.displayName = baseComponentName;
    // memo; we are not interested in deep updates
    // in props; we assume that if deep objects are changed,
    // this is in observables, which would have been tracked anyway
    var memoComponent;
    if (realOptions.forwardRef) {
        // we have to use forwardRef here because:
        // 1. it cannot go before memo, only after it
        // 2. forwardRef converts the function into an actual component, so we can't let the baseComponent do it
        //    since it wouldn't be a callable function anymore
        memoComponent = (0,react__WEBPACK_IMPORTED_MODULE_0__.memo)((0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(wrappedComponent));
    }
    else {
        memoComponent = (0,react__WEBPACK_IMPORTED_MODULE_0__.memo)(wrappedComponent);
    }
    copyStaticProperties(baseComponent, memoComponent);
    memoComponent.displayName = baseComponentName;
    return memoComponent;
}
// based on https://github.com/mridgway/hoist-non-react-statics/blob/master/src/index.js
var hoistBlackList = {
    $$typeof: true,
    render: true,
    compare: true,
    type: true
};
function copyStaticProperties(base, target) {
    Object.keys(base).forEach(function (key) {
        if (!hoistBlackList[key]) {
            Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(base, key));
        }
    });
}
//# sourceMappingURL=observer.js.map

/***/ }),

/***/ 367:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "D": () => /* binding */ enableStaticRendering,
/* harmony export */   "F": () => /* binding */ isUsingStaticRendering
/* harmony export */ });
var globalIsUsingStaticRendering = false;
function enableStaticRendering(enable) {
    globalIsUsingStaticRendering = enable;
}
function isUsingStaticRendering() {
    return globalIsUsingStaticRendering;
}
//# sourceMappingURL=staticRendering.js.map

/***/ }),

/***/ 495:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "A": () => /* binding */ useAsObservableSource
/* harmony export */ });
/* harmony import */ var mobx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(949);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(294);
var __read = (undefined && undefined.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};



function useAsObservableSource(current) {
    if (false)
        {}
    var _a = __read((0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(function () { return (0,mobx__WEBPACK_IMPORTED_MODULE_1__.observable)(current, {}, { deep: false }); }), 1), res = _a[0];
    (0,mobx__WEBPACK_IMPORTED_MODULE_1__.runInAction)(function () {
        Object.assign(res, current);
    });
    return res;
}
//# sourceMappingURL=useAsObservableSource.js.map

/***/ }),

/***/ 947:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "f": () => /* binding */ useLocalObservable
/* harmony export */ });
/* harmony import */ var mobx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(949);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(294);


function useLocalObservable(initializer, annotations) {
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(function () { return (0,mobx__WEBPACK_IMPORTED_MODULE_1__.observable)(initializer(), annotations, { autoBind: true }); })[0];
}
//# sourceMappingURL=useLocalObservable.js.map

/***/ }),

/***/ 579:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "h": () => /* binding */ useLocalStore
/* harmony export */ });
/* harmony import */ var mobx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(949);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(294);
/* harmony import */ var _useAsObservableSource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(495);




function useLocalStore(initializer, current) {
    if (false)
        {}
    var source = current && (0,_useAsObservableSource__WEBPACK_IMPORTED_MODULE_1__/* .useAsObservableSource */ .A)(current);
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(function () { return (0,mobx__WEBPACK_IMPORTED_MODULE_2__.observable)(initializer(source), undefined, { autoBind: true }); })[0];
}
//# sourceMappingURL=useLocalStore.js.map

/***/ }),

/***/ 672:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "S": () => /* binding */ useObserver
/* harmony export */ });
/* harmony import */ var mobx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(949);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(294);
/* harmony import */ var _utils_printDebugValue__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(821);
/* harmony import */ var _utils_reactionCleanupTracking__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(735);
/* harmony import */ var _staticRendering__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(367);
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(202);
var __read = (undefined && undefined.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};






function observerComponentNameFor(baseComponentName) {
    return "observer" + baseComponentName;
}
/**
 * We use class to make it easier to detect in heap snapshots by name
 */
var ObjectToBeRetainedByReact = /** @class */ (function () {
    function ObjectToBeRetainedByReact() {
    }
    return ObjectToBeRetainedByReact;
}());
function useObserver(fn, baseComponentName) {
    if (baseComponentName === void 0) { baseComponentName = "observed"; }
    if ((0,_staticRendering__WEBPACK_IMPORTED_MODULE_1__/* .isUsingStaticRendering */ .F)()) {
        return fn();
    }
    var _a = __read(react__WEBPACK_IMPORTED_MODULE_0__.useState(new ObjectToBeRetainedByReact()), 1), objectRetainedByReact = _a[0];
    var forceUpdate = (0,_utils_utils__WEBPACK_IMPORTED_MODULE_2__/* .useForceUpdate */ .N)();
    // StrictMode/ConcurrentMode/Suspense may mean that our component is
    // rendered and abandoned multiple times, so we need to track leaked
    // Reactions.
    var reactionTrackingRef = react__WEBPACK_IMPORTED_MODULE_0__.useRef(null);
    if (!reactionTrackingRef.current) {
        // First render for this component (or first time since a previous
        // reaction from an abandoned render was disposed).
        var newReaction = new mobx__WEBPACK_IMPORTED_MODULE_3__.Reaction(observerComponentNameFor(baseComponentName), function () {
            // Observable has changed, meaning we want to re-render
            // BUT if we're a component that hasn't yet got to the useEffect()
            // stage, we might be a component that _started_ to render, but
            // got dropped, and we don't want to make state changes then.
            // (It triggers warnings in StrictMode, for a start.)
            if (trackingData_1.mounted) {
                // We have reached useEffect(), so we're mounted, and can trigger an update
                forceUpdate();
            }
            else {
                // We haven't yet reached useEffect(), so we'll need to trigger a re-render
                // when (and if) useEffect() arrives.
                trackingData_1.changedBeforeMount = true;
            }
        });
        var trackingData_1 = (0,_utils_reactionCleanupTracking__WEBPACK_IMPORTED_MODULE_4__/* .addReactionToTrack */ .bb)(reactionTrackingRef, newReaction, objectRetainedByReact);
    }
    var reaction = reactionTrackingRef.current.reaction;
    react__WEBPACK_IMPORTED_MODULE_0__.useDebugValue(reaction, _utils_printDebugValue__WEBPACK_IMPORTED_MODULE_5__/* .printDebugValue */ .e);
    react__WEBPACK_IMPORTED_MODULE_0__.useEffect(function () {
        // Called on first mount only
        (0,_utils_reactionCleanupTracking__WEBPACK_IMPORTED_MODULE_4__/* .recordReactionAsCommitted */ .GZ)(reactionTrackingRef);
        if (reactionTrackingRef.current) {
            // Great. We've already got our reaction from our render;
            // all we need to do is to record that it's now mounted,
            // to allow future observable changes to trigger re-renders
            reactionTrackingRef.current.mounted = true;
            // Got a change before first mount, force an update
            if (reactionTrackingRef.current.changedBeforeMount) {
                reactionTrackingRef.current.changedBeforeMount = false;
                forceUpdate();
            }
        }
        else {
            // The reaction we set up in our render has been disposed.
            // This can be due to bad timings of renderings, e.g. our
            // component was paused for a _very_ long time, and our
            // reaction got cleaned up
            // Re-create the reaction
            reactionTrackingRef.current = {
                reaction: new mobx__WEBPACK_IMPORTED_MODULE_3__.Reaction(observerComponentNameFor(baseComponentName), function () {
                    // We've definitely already been mounted at this point
                    forceUpdate();
                }),
                mounted: true,
                changedBeforeMount: false,
                cleanAt: Infinity
            };
            forceUpdate();
        }
        return function () {
            reactionTrackingRef.current.reaction.dispose();
            reactionTrackingRef.current = null;
        };
    }, []);
    // render the original component, but have the
    // reaction track the observables, so that rendering
    // can be invalidated (see above) once a dependency changes
    var rendering;
    var exception;
    reaction.track(function () {
        try {
            rendering = fn();
        }
        catch (e) {
            exception = e;
        }
    });
    if (exception) {
        throw exception; // re-throw any exceptions caught during rendering
    }
    return rendering;
}
//# sourceMappingURL=useObserver.js.map

/***/ }),

/***/ 639:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "H": () => /* binding */ FinalizationRegistryLocal
/* harmony export */ });
var FinalizationRegistryLocal = typeof FinalizationRegistry === "undefined" ? undefined : FinalizationRegistry;

//# sourceMappingURL=FinalizationRegistryWrapper.js.map

/***/ }),

/***/ 811:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "G": () => /* binding */ createReactionCleanupTrackingUsingFinalizationRegister
/* harmony export */ });
/* harmony import */ var _reactionCleanupTrackingCommon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(933);

/**
 * FinalizationRegistry-based uncommitted reaction cleanup
 */
function createReactionCleanupTrackingUsingFinalizationRegister(FinalizationRegistry) {
    var cleanupTokenToReactionTrackingMap = new Map();
    var globalCleanupTokensCounter = 1;
    var registry = new FinalizationRegistry(function cleanupFunction(token) {
        var trackedReaction = cleanupTokenToReactionTrackingMap.get(token);
        if (trackedReaction) {
            trackedReaction.reaction.dispose();
            cleanupTokenToReactionTrackingMap.delete(token);
        }
    });
    return {
        addReactionToTrack: function (reactionTrackingRef, reaction, objectRetainedByReact) {
            var token = globalCleanupTokensCounter++;
            registry.register(objectRetainedByReact, token, reactionTrackingRef);
            reactionTrackingRef.current = (0,_reactionCleanupTrackingCommon__WEBPACK_IMPORTED_MODULE_0__/* .createTrackingData */ .Uy)(reaction);
            reactionTrackingRef.current.finalizationRegistryCleanupToken = token;
            cleanupTokenToReactionTrackingMap.set(token, reactionTrackingRef.current);
            return reactionTrackingRef.current;
        },
        recordReactionAsCommitted: function (reactionRef) {
            registry.unregister(reactionRef);
            if (reactionRef.current && reactionRef.current.finalizationRegistryCleanupToken) {
                cleanupTokenToReactionTrackingMap.delete(reactionRef.current.finalizationRegistryCleanupToken);
            }
        },
        forceCleanupTimerToRunNowForTests: function () {
            // When FinalizationRegistry in use, this this is no-op
        },
        resetCleanupScheduleForTests: function () {
            // When FinalizationRegistry in use, this this is no-op
        }
    };
}
//# sourceMappingURL=createReactionCleanupTrackingUsingFinalizationRegister.js.map

/***/ }),

/***/ 82:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "V": () => /* binding */ createTimerBasedReactionCleanupTracking
/* harmony export */ });
/* harmony import */ var _reactionCleanupTrackingCommon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(933);
var __values = (undefined && undefined.__values) || function(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};

/**
 * timers, gc-style, uncommitted reaction cleanup
 */
function createTimerBasedReactionCleanupTracking() {
    /**
     * Reactions created by components that have yet to be fully mounted.
     */
    var uncommittedReactionRefs = new Set();
    /**
     * Latest 'uncommitted reactions' cleanup timer handle.
     */
    var reactionCleanupHandle;
    /* istanbul ignore next */
    /**
     * Only to be used by test functions; do not export outside of mobx-react-lite
     */
    function forceCleanupTimerToRunNowForTests() {
        // This allows us to control the execution of the cleanup timer
        // to force it to run at awkward times in unit tests.
        if (reactionCleanupHandle) {
            clearTimeout(reactionCleanupHandle);
            cleanUncommittedReactions();
        }
    }
    /* istanbul ignore next */
    function resetCleanupScheduleForTests() {
        var e_1, _a;
        if (uncommittedReactionRefs.size > 0) {
            try {
                for (var uncommittedReactionRefs_1 = __values(uncommittedReactionRefs), uncommittedReactionRefs_1_1 = uncommittedReactionRefs_1.next(); !uncommittedReactionRefs_1_1.done; uncommittedReactionRefs_1_1 = uncommittedReactionRefs_1.next()) {
                    var ref = uncommittedReactionRefs_1_1.value;
                    var tracking = ref.current;
                    if (tracking) {
                        tracking.reaction.dispose();
                        ref.current = null;
                    }
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (uncommittedReactionRefs_1_1 && !uncommittedReactionRefs_1_1.done && (_a = uncommittedReactionRefs_1.return)) _a.call(uncommittedReactionRefs_1);
                }
                finally { if (e_1) throw e_1.error; }
            }
            uncommittedReactionRefs.clear();
        }
        if (reactionCleanupHandle) {
            clearTimeout(reactionCleanupHandle);
            reactionCleanupHandle = undefined;
        }
    }
    function ensureCleanupTimerRunning() {
        if (reactionCleanupHandle === undefined) {
            reactionCleanupHandle = setTimeout(cleanUncommittedReactions, _reactionCleanupTrackingCommon__WEBPACK_IMPORTED_MODULE_0__/* .CLEANUP_TIMER_LOOP_MILLIS */ .Qs);
        }
    }
    function scheduleCleanupOfReactionIfLeaked(ref) {
        uncommittedReactionRefs.add(ref);
        ensureCleanupTimerRunning();
    }
    function recordReactionAsCommitted(reactionRef) {
        uncommittedReactionRefs.delete(reactionRef);
    }
    /**
     * Run by the cleanup timer to dispose any outstanding reactions
     */
    function cleanUncommittedReactions() {
        reactionCleanupHandle = undefined;
        // Loop through all the candidate leaked reactions; those older
        // than CLEANUP_LEAKED_REACTIONS_AFTER_MILLIS get tidied.
        var now = Date.now();
        uncommittedReactionRefs.forEach(function (ref) {
            var tracking = ref.current;
            if (tracking) {
                if (now >= tracking.cleanAt) {
                    // It's time to tidy up this leaked reaction.
                    tracking.reaction.dispose();
                    ref.current = null;
                    uncommittedReactionRefs.delete(ref);
                }
            }
        });
        if (uncommittedReactionRefs.size > 0) {
            // We've just finished a round of cleanups but there are still
            // some leak candidates outstanding.
            ensureCleanupTimerRunning();
        }
    }
    return {
        addReactionToTrack: function (reactionTrackingRef, reaction, 
        /**
         * On timer based implementation we don't really need this object,
         * but we keep the same api
         */
        objectRetainedByReact) {
            reactionTrackingRef.current = (0,_reactionCleanupTrackingCommon__WEBPACK_IMPORTED_MODULE_0__/* .createTrackingData */ .Uy)(reaction);
            scheduleCleanupOfReactionIfLeaked(reactionTrackingRef);
            return reactionTrackingRef.current;
        },
        recordReactionAsCommitted: recordReactionAsCommitted,
        forceCleanupTimerToRunNowForTests: forceCleanupTimerToRunNowForTests,
        resetCleanupScheduleForTests: resetCleanupScheduleForTests
    };
}
//# sourceMappingURL=createTimerBasedReactionCleanupTracking.js.map

/***/ }),

/***/ 158:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "z0": () => /* binding */ observerBatching
/* harmony export */ });
/* unused harmony exports defaultNoopBatch, isObserverBatched */
/* harmony import */ var mobx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(949);

function defaultNoopBatch(callback) {
    callback();
}
function observerBatching(reactionScheduler) {
    if (!reactionScheduler) {
        reactionScheduler = defaultNoopBatch;
        if (false) {}
    }
    (0,mobx__WEBPACK_IMPORTED_MODULE_0__.configure)({ reactionScheduler: reactionScheduler });
}
var isObserverBatched = function () {
    if (false) {}
    return true;
};
//# sourceMappingURL=observerBatching.js.map

/***/ }),

/***/ 821:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "e": () => /* binding */ printDebugValue
/* harmony export */ });
/* harmony import */ var mobx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(949);

function printDebugValue(v) {
    return (0,mobx__WEBPACK_IMPORTED_MODULE_0__.getDependencyTree)(v);
}
//# sourceMappingURL=printDebugValue.js.map

/***/ }),

/***/ 735:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "bb": () => /* binding */ addReactionToTrack,
/* harmony export */   "GZ": () => /* binding */ recordReactionAsCommitted
/* harmony export */ });
/* unused harmony exports resetCleanupScheduleForTests, forceCleanupTimerToRunNowForTests */
/* harmony import */ var _FinalizationRegistryWrapper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(639);
/* harmony import */ var _createReactionCleanupTrackingUsingFinalizationRegister__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(811);
/* harmony import */ var _createTimerBasedReactionCleanupTracking__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(82);



var _a = _FinalizationRegistryWrapper__WEBPACK_IMPORTED_MODULE_0__/* .FinalizationRegistry */ .H
    ? (0,_createReactionCleanupTrackingUsingFinalizationRegister__WEBPACK_IMPORTED_MODULE_1__/* .createReactionCleanupTrackingUsingFinalizationRegister */ .G)(_FinalizationRegistryWrapper__WEBPACK_IMPORTED_MODULE_0__/* .FinalizationRegistry */ .H)
    : (0,_createTimerBasedReactionCleanupTracking__WEBPACK_IMPORTED_MODULE_2__/* .createTimerBasedReactionCleanupTracking */ .V)(), addReactionToTrack = _a.addReactionToTrack, recordReactionAsCommitted = _a.recordReactionAsCommitted, resetCleanupScheduleForTests = _a.resetCleanupScheduleForTests, forceCleanupTimerToRunNowForTests = _a.forceCleanupTimerToRunNowForTests;

//# sourceMappingURL=reactionCleanupTracking.js.map

/***/ }),

/***/ 933:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Uy": () => /* binding */ createTrackingData,
/* harmony export */   "Qs": () => /* binding */ CLEANUP_TIMER_LOOP_MILLIS
/* harmony export */ });
/* unused harmony export CLEANUP_LEAKED_REACTIONS_AFTER_MILLIS */
function createTrackingData(reaction) {
    var trackingData = {
        reaction: reaction,
        mounted: false,
        changedBeforeMount: false,
        cleanAt: Date.now() + CLEANUP_LEAKED_REACTIONS_AFTER_MILLIS
    };
    return trackingData;
}
/**
 * The minimum time before we'll clean up a Reaction created in a render
 * for a component that hasn't managed to run its effects. This needs to
 * be big enough to ensure that a component won't turn up and have its
 * effects run without being re-rendered.
 */
var CLEANUP_LEAKED_REACTIONS_AFTER_MILLIS = 10000;
/**
 * The frequency with which we'll check for leaked reactions.
 */
var CLEANUP_TIMER_LOOP_MILLIS = 10000;
//# sourceMappingURL=reactionCleanupTrackingCommon.js.map

/***/ }),

/***/ 202:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "N": () => /* binding */ useForceUpdate
/* harmony export */ });
/* unused harmony export useDeprecated */
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(294);
var __read = (undefined && undefined.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};

var EMPTY_ARRAY = [];
function useForceUpdate() {
    var _a = __read((0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0), 2), setTick = _a[1];
    var update = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function () {
        setTick(function (tick) { return tick + 1; });
    }, EMPTY_ARRAY);
    return update;
}
var deprecatedMessages = (/* unused pure expression or super */ null && ([]));
function useDeprecated(msg) {
    if (!deprecatedMessages.includes(msg)) {
        deprecatedMessages.push(msg);
        console.warn(msg);
    }
}
//# sourceMappingURL=utils.js.map

/***/ }),

/***/ 323:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Observer": () => /* reexport safe */ mobx_react_lite__WEBPACK_IMPORTED_MODULE_1__.Q,
/* harmony export */   "enableStaticRendering": () => /* reexport safe */ mobx_react_lite__WEBPACK_IMPORTED_MODULE_2__.D,
/* harmony export */   "isUsingStaticRendering": () => /* reexport safe */ mobx_react_lite__WEBPACK_IMPORTED_MODULE_2__.F,
/* harmony export */   "observerBatching": () => /* reexport safe */ mobx_react_lite__WEBPACK_IMPORTED_MODULE_3__.z0,
/* harmony export */   "useAsObservableSource": () => /* reexport safe */ mobx_react_lite__WEBPACK_IMPORTED_MODULE_4__.A,
/* harmony export */   "useLocalObservable": () => /* reexport safe */ mobx_react_lite__WEBPACK_IMPORTED_MODULE_5__.f,
/* harmony export */   "useLocalStore": () => /* reexport safe */ mobx_react_lite__WEBPACK_IMPORTED_MODULE_6__.h,
/* harmony export */   "useObserver": () => /* reexport safe */ mobx_react_lite__WEBPACK_IMPORTED_MODULE_7__.SZ,
/* harmony export */   "useStaticRendering": () => /* reexport safe */ mobx_react_lite__WEBPACK_IMPORTED_MODULE_7__.Ot,
/* harmony export */   "MobXProviderContext": () => /* binding */ MobXProviderContext,
/* harmony export */   "PropTypes": () => /* binding */ PropTypes,
/* harmony export */   "Provider": () => /* binding */ Provider,
/* harmony export */   "disposeOnUnmount": () => /* binding */ disposeOnUnmount,
/* harmony export */   "inject": () => /* binding */ inject,
/* harmony export */   "observer": () => /* binding */ observer
/* harmony export */ });
/* harmony import */ var mobx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(949);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(294);
/* harmony import */ var mobx_react_lite__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(367);
/* harmony import */ var mobx_react_lite__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(743);
/* harmony import */ var mobx_react_lite__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(983);
/* harmony import */ var mobx_react_lite__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(158);
/* harmony import */ var mobx_react_lite__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(495);
/* harmony import */ var mobx_react_lite__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(947);
/* harmony import */ var mobx_react_lite__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(579);
/* harmony import */ var mobx_react_lite__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(581);





var symbolId = 0;

function createSymbol(name) {
  if (typeof Symbol === "function") {
    return Symbol(name);
  }

  var symbol = "__$mobx-react " + name + " (" + symbolId + ")";
  symbolId++;
  return symbol;
}

var createdSymbols = {};
function newSymbol(name) {
  if (!createdSymbols[name]) {
    createdSymbols[name] = createSymbol(name);
  }

  return createdSymbols[name];
}
function shallowEqual(objA, objB) {
  //From: https://github.com/facebook/fbjs/blob/c69904a511b900266935168223063dd8772dfc40/packages/fbjs/src/core/shallowEqual.js
  if (is(objA, objB)) return true;

  if (typeof objA !== "object" || objA === null || typeof objB !== "object" || objB === null) {
    return false;
  }

  var keysA = Object.keys(objA);
  var keysB = Object.keys(objB);
  if (keysA.length !== keysB.length) return false;

  for (var i = 0; i < keysA.length; i++) {
    if (!Object.hasOwnProperty.call(objB, keysA[i]) || !is(objA[keysA[i]], objB[keysA[i]])) {
      return false;
    }
  }

  return true;
}

function is(x, y) {
  // From: https://github.com/facebook/fbjs/blob/c69904a511b900266935168223063dd8772dfc40/packages/fbjs/src/core/shallowEqual.js
  if (x === y) {
    return x !== 0 || 1 / x === 1 / y;
  } else {
    return x !== x && y !== y;
  }
} // based on https://github.com/mridgway/hoist-non-react-statics/blob/master/src/index.js


var hoistBlackList = {
  $$typeof: 1,
  render: 1,
  compare: 1,
  type: 1,
  childContextTypes: 1,
  contextType: 1,
  contextTypes: 1,
  defaultProps: 1,
  getDefaultProps: 1,
  getDerivedStateFromError: 1,
  getDerivedStateFromProps: 1,
  mixins: 1,
  propTypes: 1
};
function copyStaticProperties(base, target) {
  var protoProps = Object.getOwnPropertyNames(Object.getPrototypeOf(base));
  Object.getOwnPropertyNames(base).forEach(function (key) {
    if (!hoistBlackList[key] && protoProps.indexOf(key) === -1) {
      Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(base, key));
    }
  });
}
/**
 * Helper to set `prop` to `this` as non-enumerable (hidden prop)
 * @param target
 * @param prop
 * @param value
 */

function setHiddenProp(target, prop, value) {
  if (!Object.hasOwnProperty.call(target, prop)) {
    Object.defineProperty(target, prop, {
      enumerable: false,
      configurable: true,
      writable: true,
      value: value
    });
  } else {
    target[prop] = value;
  }
}
/**
 * Utilities for patching componentWillUnmount, to make sure @disposeOnUnmount works correctly icm with user defined hooks
 * and the handler provided by mobx-react
 */

var mobxMixins = /*#__PURE__*/newSymbol("patchMixins");
var mobxPatchedDefinition = /*#__PURE__*/newSymbol("patchedDefinition");

function getMixins(target, methodName) {
  var mixins = target[mobxMixins] = target[mobxMixins] || {};
  var methodMixins = mixins[methodName] = mixins[methodName] || {};
  methodMixins.locks = methodMixins.locks || 0;
  methodMixins.methods = methodMixins.methods || [];
  return methodMixins;
}

function wrapper(realMethod, mixins) {
  var _this = this;

  for (var _len = arguments.length, args = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
    args[_key - 2] = arguments[_key];
  }

  // locks are used to ensure that mixins are invoked only once per invocation, even on recursive calls
  mixins.locks++;

  try {
    var retVal;

    if (realMethod !== undefined && realMethod !== null) {
      retVal = realMethod.apply(this, args);
    }

    return retVal;
  } finally {
    mixins.locks--;

    if (mixins.locks === 0) {
      mixins.methods.forEach(function (mx) {
        mx.apply(_this, args);
      });
    }
  }
}

function wrapFunction(realMethod, mixins) {
  var fn = function fn() {
    for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }

    wrapper.call.apply(wrapper, [this, realMethod, mixins].concat(args));
  };

  return fn;
}

function patch(target, methodName, mixinMethod) {
  var mixins = getMixins(target, methodName);

  if (mixins.methods.indexOf(mixinMethod) < 0) {
    mixins.methods.push(mixinMethod);
  }

  var oldDefinition = Object.getOwnPropertyDescriptor(target, methodName);

  if (oldDefinition && oldDefinition[mobxPatchedDefinition]) {
    // already patched definition, do not repatch
    return;
  }

  var originalMethod = target[methodName];
  var newDefinition = createDefinition(target, methodName, oldDefinition ? oldDefinition.enumerable : undefined, mixins, originalMethod);
  Object.defineProperty(target, methodName, newDefinition);
}

function createDefinition(target, methodName, enumerable, mixins, originalMethod) {
  var _ref;

  var wrappedFunc = wrapFunction(originalMethod, mixins);
  return _ref = {}, _ref[mobxPatchedDefinition] = true, _ref.get = function get() {
    return wrappedFunc;
  }, _ref.set = function set(value) {
    if (this === target) {
      wrappedFunc = wrapFunction(value, mixins);
    } else {
      // when it is an instance of the prototype/a child prototype patch that particular case again separately
      // since we need to store separate values depending on wether it is the actual instance, the prototype, etc
      // e.g. the method for super might not be the same as the method for the prototype which might be not the same
      // as the method for the instance
      var newDefinition = createDefinition(this, methodName, enumerable, mixins, value);
      Object.defineProperty(this, methodName, newDefinition);
    }
  }, _ref.configurable = true, _ref.enumerable = enumerable, _ref;
}

var mobxAdminProperty = mobx__WEBPACK_IMPORTED_MODULE_8__.$mobx || "$mobx";
var mobxObserverProperty = /*#__PURE__*/newSymbol("isMobXReactObserver");
var mobxIsUnmounted = /*#__PURE__*/newSymbol("isUnmounted");
var skipRenderKey = /*#__PURE__*/newSymbol("skipRender");
var isForcingUpdateKey = /*#__PURE__*/newSymbol("isForcingUpdate");
function makeClassComponentObserver(componentClass) {
  var target = componentClass.prototype;

  if (componentClass[mobxObserverProperty]) {
    var displayName = getDisplayName(target);
    console.warn("The provided component class (" + displayName + ") \n                has already been declared as an observer component.");
  } else {
    componentClass[mobxObserverProperty] = true;
  }

  if (target.componentWillReact) throw new Error("The componentWillReact life-cycle event is no longer supported");

  if (componentClass["__proto__"] !== react__WEBPACK_IMPORTED_MODULE_0__.PureComponent) {
    if (!target.shouldComponentUpdate) target.shouldComponentUpdate = observerSCU;else if (target.shouldComponentUpdate !== observerSCU) // n.b. unequal check, instead of existence check, as @observer might be on superclass as well
      throw new Error("It is not allowed to use shouldComponentUpdate in observer based components.");
  } // this.props and this.state are made observable, just to make sure @computed fields that
  // are defined inside the component, and which rely on state or props, re-compute if state or props change
  // (otherwise the computed wouldn't update and become stale on props change, since props are not observable)
  // However, this solution is not without it's own problems: https://github.com/mobxjs/mobx-react/issues?utf8=%E2%9C%93&q=is%3Aissue+label%3Aobservable-props-or-not+


  makeObservableProp(target, "props");
  makeObservableProp(target, "state");
  var baseRender = target.render;

  target.render = function () {
    return makeComponentReactive.call(this, baseRender);
  };

  patch(target, "componentWillUnmount", function () {
    var _this$render$mobxAdmi;

    if ((0,mobx_react_lite__WEBPACK_IMPORTED_MODULE_2__/* .isUsingStaticRendering */ .F)() === true) return;
    (_this$render$mobxAdmi = this.render[mobxAdminProperty]) == null ? void 0 : _this$render$mobxAdmi.dispose();
    this[mobxIsUnmounted] = true;

    if (!this.render[mobxAdminProperty]) {
      // Render may have been hot-swapped and/or overriden by a subclass.
      var _displayName = getDisplayName(this);

      console.warn("The reactive render of an observer class component (" + _displayName + ") \n                was overriden after MobX attached. This may result in a memory leak if the \n                overriden reactive render was not properly disposed.");
    }
  });
  return componentClass;
} // Generates a friendly name for debugging

function getDisplayName(comp) {
  return comp.displayName || comp.name || comp.constructor && (comp.constructor.displayName || comp.constructor.name) || "<component>";
}

function makeComponentReactive(render) {
  var _this = this;

  if ((0,mobx_react_lite__WEBPACK_IMPORTED_MODULE_2__/* .isUsingStaticRendering */ .F)() === true) return render.call(this);
  /**
   * If props are shallowly modified, react will render anyway,
   * so atom.reportChanged() should not result in yet another re-render
   */

  setHiddenProp(this, skipRenderKey, false);
  /**
   * forceUpdate will re-assign this.props. We don't want that to cause a loop,
   * so detect these changes
   */

  setHiddenProp(this, isForcingUpdateKey, false);
  var initialName = getDisplayName(this);
  var baseRender = render.bind(this);
  var isRenderingPending = false;
  var reaction = new mobx__WEBPACK_IMPORTED_MODULE_8__.Reaction(initialName + ".render()", function () {
    if (!isRenderingPending) {
      // N.B. Getting here *before mounting* means that a component constructor has side effects (see the relevant test in misc.js)
      // This unidiomatic React usage but React will correctly warn about this so we continue as usual
      // See #85 / Pull #44
      isRenderingPending = true;

      if (_this[mobxIsUnmounted] !== true) {
        var hasError = true;

        try {
          setHiddenProp(_this, isForcingUpdateKey, true);
          if (!_this[skipRenderKey]) react__WEBPACK_IMPORTED_MODULE_0__.Component.prototype.forceUpdate.call(_this);
          hasError = false;
        } finally {
          setHiddenProp(_this, isForcingUpdateKey, false);
          if (hasError) reaction.dispose();
        }
      }
    }
  });
  reaction["reactComponent"] = this;
  reactiveRender[mobxAdminProperty] = reaction;
  this.render = reactiveRender;

  function reactiveRender() {
    isRenderingPending = false;
    var exception = undefined;
    var rendering = undefined;
    reaction.track(function () {
      try {
        rendering = (0,mobx__WEBPACK_IMPORTED_MODULE_8__._allowStateChanges)(false, baseRender);
      } catch (e) {
        exception = e;
      }
    });

    if (exception) {
      throw exception;
    }

    return rendering;
  }

  return reactiveRender.call(this);
}

function observerSCU(nextProps, nextState) {
  if ((0,mobx_react_lite__WEBPACK_IMPORTED_MODULE_2__/* .isUsingStaticRendering */ .F)()) {
    console.warn("[mobx-react] It seems that a re-rendering of a React component is triggered while in static (server-side) mode. Please make sure components are rendered only once server-side.");
  } // update on any state changes (as is the default)


  if (this.state !== nextState) {
    return true;
  } // update if props are shallowly not equal, inspired by PureRenderMixin
  // we could return just 'false' here, and avoid the `skipRender` checks etc
  // however, it is nicer if lifecycle events are triggered like usually,
  // so we return true here if props are shallowly modified.


  return !shallowEqual(this.props, nextProps);
}

function makeObservableProp(target, propName) {
  var valueHolderKey = newSymbol("reactProp_" + propName + "_valueHolder");
  var atomHolderKey = newSymbol("reactProp_" + propName + "_atomHolder");

  function getAtom() {
    if (!this[atomHolderKey]) {
      setHiddenProp(this, atomHolderKey, (0,mobx__WEBPACK_IMPORTED_MODULE_8__.createAtom)("reactive " + propName));
    }

    return this[atomHolderKey];
  }

  Object.defineProperty(target, propName, {
    configurable: true,
    enumerable: true,
    get: function get() {
      var prevReadState = false;

      if (mobx__WEBPACK_IMPORTED_MODULE_8__._allowStateReadsStart && mobx__WEBPACK_IMPORTED_MODULE_8__._allowStateReadsEnd) {
        prevReadState = (0,mobx__WEBPACK_IMPORTED_MODULE_8__._allowStateReadsStart)(true);
      }

      getAtom.call(this).reportObserved();

      if (mobx__WEBPACK_IMPORTED_MODULE_8__._allowStateReadsStart && mobx__WEBPACK_IMPORTED_MODULE_8__._allowStateReadsEnd) {
        (0,mobx__WEBPACK_IMPORTED_MODULE_8__._allowStateReadsEnd)(prevReadState);
      }

      return this[valueHolderKey];
    },
    set: function set(v) {
      if (!this[isForcingUpdateKey] && !shallowEqual(this[valueHolderKey], v)) {
        setHiddenProp(this, valueHolderKey, v);
        setHiddenProp(this, skipRenderKey, true);
        getAtom.call(this).reportChanged();
        setHiddenProp(this, skipRenderKey, false);
      } else {
        setHiddenProp(this, valueHolderKey, v);
      }
    }
  });
}

var hasSymbol = typeof Symbol === "function" && Symbol["for"]; // Using react-is had some issues (and operates on elements, not on types), see #608 / #609

var ReactForwardRefSymbol = hasSymbol ? /*#__PURE__*/Symbol["for"]("react.forward_ref") : typeof react__WEBPACK_IMPORTED_MODULE_0__.forwardRef === "function" && /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(function (props) {
  return null;
})["$$typeof"];
var ReactMemoSymbol = hasSymbol ? /*#__PURE__*/Symbol["for"]("react.memo") : typeof react__WEBPACK_IMPORTED_MODULE_0__.memo === "function" && /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.memo)(function (props) {
  return null;
})["$$typeof"];
/**
 * Observer function / decorator
 */

function observer(component) {
  if (component["isMobxInjector"] === true) {
    console.warn("Mobx observer: You are trying to use 'observer' on a component that already has 'inject'. Please apply 'observer' before applying 'inject'");
  }

  if (ReactMemoSymbol && component["$$typeof"] === ReactMemoSymbol) {
    throw new Error("Mobx observer: You are trying to use 'observer' on a function component wrapped in either another observer or 'React.memo'. The observer already applies 'React.memo' for you.");
  } // Unwrap forward refs into `<Observer>` component
  // we need to unwrap the render, because it is the inner render that needs to be tracked,
  // not the ForwardRef HoC


  if (ReactForwardRefSymbol && component["$$typeof"] === ReactForwardRefSymbol) {
    var baseRender = component["render"];
    if (typeof baseRender !== "function") throw new Error("render property of ForwardRef was not a function");
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(function ObserverForwardRef() {
      var args = arguments;
      return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(mobx_react_lite__WEBPACK_IMPORTED_MODULE_1__/* .Observer */ .Q, null, function () {
        return baseRender.apply(undefined, args);
      });
    });
  } // Function component


  if (typeof component === "function" && (!component.prototype || !component.prototype.render) && !component["isReactClass"] && !Object.prototype.isPrototypeOf.call(react__WEBPACK_IMPORTED_MODULE_0__.Component, component)) {
    return (0,mobx_react_lite__WEBPACK_IMPORTED_MODULE_9__/* .observer */ .P)(component);
  }

  return makeClassComponentObserver(component);
}

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

var MobXProviderContext = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createContext({});
function Provider(props) {
  var children = props.children,
      stores = _objectWithoutPropertiesLoose(props, ["children"]);

  var parentValue = react__WEBPACK_IMPORTED_MODULE_0__.useContext(MobXProviderContext);
  var mutableProviderRef = react__WEBPACK_IMPORTED_MODULE_0__.useRef(_extends({}, parentValue, stores));
  var value = mutableProviderRef.current;

  if (false) { var newValue; }

  return react__WEBPACK_IMPORTED_MODULE_0__.createElement(MobXProviderContext.Provider, {
    value: value
  }, children);
}
Provider.displayName = "MobXProvider";

/**
 * Store Injection
 */

function createStoreInjector(grabStoresFn, component, injectNames, makeReactive) {
  // Support forward refs
  var Injector = react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(function (props, ref) {
    var newProps = _extends({}, props);

    var context = react__WEBPACK_IMPORTED_MODULE_0__.useContext(MobXProviderContext);
    Object.assign(newProps, grabStoresFn(context || {}, newProps) || {});

    if (ref) {
      newProps.ref = ref;
    }

    return react__WEBPACK_IMPORTED_MODULE_0__.createElement(component, newProps);
  });
  if (makeReactive) Injector = observer(Injector);
  Injector["isMobxInjector"] = true; // assigned late to suppress observer warning
  // Static fields from component should be visible on the generated Injector

  copyStaticProperties(component, Injector);
  Injector["wrappedComponent"] = component;
  Injector.displayName = getInjectName(component, injectNames);
  return Injector;
}

function getInjectName(component, injectNames) {
  var displayName;
  var componentName = component.displayName || component.name || component.constructor && component.constructor.name || "Component";
  if (injectNames) displayName = "inject-with-" + injectNames + "(" + componentName + ")";else displayName = "inject(" + componentName + ")";
  return displayName;
}

function grabStoresByName(storeNames) {
  return function (baseStores, nextProps) {
    storeNames.forEach(function (storeName) {
      if (storeName in nextProps // prefer props over stores
      ) return;
      if (!(storeName in baseStores)) throw new Error("MobX injector: Store '" + storeName + "' is not available! Make sure it is provided by some Provider");
      nextProps[storeName] = baseStores[storeName];
    });
    return nextProps;
  };
}
/**
 * higher order component that injects stores to a child.
 * takes either a varargs list of strings, which are stores read from the context,
 * or a function that manually maps the available stores from the context to props:
 * storesToProps(mobxStores, props, context) => newProps
 */


function inject() {
  for (var _len = arguments.length, storeNames = new Array(_len), _key = 0; _key < _len; _key++) {
    storeNames[_key] = arguments[_key];
  }

  if (typeof arguments[0] === "function") {
    var grabStoresFn = arguments[0];
    return function (componentClass) {
      return createStoreInjector(grabStoresFn, componentClass, grabStoresFn.name, true);
    };
  } else {
    return function (componentClass) {
      return createStoreInjector(grabStoresByName(storeNames), componentClass, storeNames.join("-"), false);
    };
  }
}

var protoStoreKey = /*#__PURE__*/newSymbol("disposeOnUnmountProto");
var instStoreKey = /*#__PURE__*/newSymbol("disposeOnUnmountInst");

function runDisposersOnWillUnmount() {
  var _this = this;
  [].concat(this[protoStoreKey] || [], this[instStoreKey] || []).forEach(function (propKeyOrFunction) {
    var prop = typeof propKeyOrFunction === "string" ? _this[propKeyOrFunction] : propKeyOrFunction;

    if (prop !== undefined && prop !== null) {
      if (Array.isArray(prop)) prop.map(function (f) {
        return f();
      });else prop();
    }
  });
}

function disposeOnUnmount(target, propertyKeyOrFunction) {
  if (Array.isArray(propertyKeyOrFunction)) {
    return propertyKeyOrFunction.map(function (fn) {
      return disposeOnUnmount(target, fn);
    });
  }

  var c = Object.getPrototypeOf(target).constructor;
  var c2 = Object.getPrototypeOf(target.constructor); // Special case for react-hot-loader

  var c3 = Object.getPrototypeOf(Object.getPrototypeOf(target));

  if (!(c === react__WEBPACK_IMPORTED_MODULE_0__.Component || c === react__WEBPACK_IMPORTED_MODULE_0__.PureComponent || c2 === react__WEBPACK_IMPORTED_MODULE_0__.Component || c2 === react__WEBPACK_IMPORTED_MODULE_0__.PureComponent || c3 === react__WEBPACK_IMPORTED_MODULE_0__.Component || c3 === react__WEBPACK_IMPORTED_MODULE_0__.PureComponent)) {
    throw new Error("[mobx-react] disposeOnUnmount only supports direct subclasses of React.Component or React.PureComponent.");
  }

  if (typeof propertyKeyOrFunction !== "string" && typeof propertyKeyOrFunction !== "function" && !Array.isArray(propertyKeyOrFunction)) {
    throw new Error("[mobx-react] disposeOnUnmount only works if the parameter is either a property key or a function.");
  } // decorator's target is the prototype, so it doesn't have any instance properties like props


  var isDecorator = typeof propertyKeyOrFunction === "string"; // add property key / function we want run (disposed) to the store

  var componentWasAlreadyModified = !!target[protoStoreKey] || !!target[instStoreKey];
  var store = isDecorator ? // decorators are added to the prototype store
  target[protoStoreKey] || (target[protoStoreKey] = []) : // functions are added to the instance store
  target[instStoreKey] || (target[instStoreKey] = []);
  store.push(propertyKeyOrFunction); // tweak the component class componentWillUnmount if not done already

  if (!componentWasAlreadyModified) {
    patch(target, "componentWillUnmount", runDisposersOnWillUnmount);
  } // return the disposer as is if invoked as a non decorator


  if (typeof propertyKeyOrFunction !== "string") {
    return propertyKeyOrFunction;
  }
}

function createChainableTypeChecker(validator) {
  function checkType(isRequired, props, propName, componentName, location, propFullName) {
    for (var _len = arguments.length, rest = new Array(_len > 6 ? _len - 6 : 0), _key = 6; _key < _len; _key++) {
      rest[_key - 6] = arguments[_key];
    }

    return (0,mobx__WEBPACK_IMPORTED_MODULE_8__.untracked)(function () {
      componentName = componentName || "<<anonymous>>";
      propFullName = propFullName || propName;

      if (props[propName] == null) {
        if (isRequired) {
          var actual = props[propName] === null ? "null" : "undefined";
          return new Error("The " + location + " `" + propFullName + "` is marked as required " + "in `" + componentName + "`, but its value is `" + actual + "`.");
        }

        return null;
      } else {
        // @ts-ignore rest arg is necessary for some React internals - fails tests otherwise
        return validator.apply(void 0, [props, propName, componentName, location, propFullName].concat(rest));
      }
    });
  }

  var chainedCheckType = checkType.bind(null, false); // Add isRequired to satisfy Requirable

  chainedCheckType.isRequired = checkType.bind(null, true);
  return chainedCheckType;
} // Copied from React.PropTypes


function isSymbol(propType, propValue) {
  // Native Symbol.
  if (propType === "symbol") {
    return true;
  } // 19.4.3.5 Symbol.prototype[@@toStringTag] === 'Symbol'


  if (propValue["@@toStringTag"] === "Symbol") {
    return true;
  } // Fallback for non-spec compliant Symbols which are polyfilled.


  if (typeof Symbol === "function" && propValue instanceof Symbol) {
    return true;
  }

  return false;
} // Copied from React.PropTypes


function getPropType(propValue) {
  var propType = typeof propValue;

  if (Array.isArray(propValue)) {
    return "array";
  }

  if (propValue instanceof RegExp) {
    // Old webkits (at least until Android 4.0) return 'function' rather than
    // 'object' for typeof a RegExp. We'll normalize this here so that /bla/
    // passes PropTypes.object.
    return "object";
  }

  if (isSymbol(propType, propValue)) {
    return "symbol";
  }

  return propType;
} // This handles more types than `getPropType`. Only used for error messages.
// Copied from React.PropTypes


function getPreciseType(propValue) {
  var propType = getPropType(propValue);

  if (propType === "object") {
    if (propValue instanceof Date) {
      return "date";
    } else if (propValue instanceof RegExp) {
      return "regexp";
    }
  }

  return propType;
}

function createObservableTypeCheckerCreator(allowNativeType, mobxType) {
  return createChainableTypeChecker(function (props, propName, componentName, location, propFullName) {
    return (0,mobx__WEBPACK_IMPORTED_MODULE_8__.untracked)(function () {
      if (allowNativeType) {
        if (getPropType(props[propName]) === mobxType.toLowerCase()) return null;
      }

      var mobxChecker;

      switch (mobxType) {
        case "Array":
          mobxChecker = mobx__WEBPACK_IMPORTED_MODULE_8__.isObservableArray;
          break;

        case "Object":
          mobxChecker = mobx__WEBPACK_IMPORTED_MODULE_8__.isObservableObject;
          break;

        case "Map":
          mobxChecker = mobx__WEBPACK_IMPORTED_MODULE_8__.isObservableMap;
          break;

        default:
          throw new Error("Unexpected mobxType: " + mobxType);
      }

      var propValue = props[propName];

      if (!mobxChecker(propValue)) {
        var preciseType = getPreciseType(propValue);
        var nativeTypeExpectationMessage = allowNativeType ? " or javascript `" + mobxType.toLowerCase() + "`" : "";
        return new Error("Invalid prop `" + propFullName + "` of type `" + preciseType + "` supplied to" + " `" + componentName + "`, expected `mobx.Observable" + mobxType + "`" + nativeTypeExpectationMessage + ".");
      }

      return null;
    });
  });
}

function createObservableArrayOfTypeChecker(allowNativeType, typeChecker) {
  return createChainableTypeChecker(function (props, propName, componentName, location, propFullName) {
    for (var _len2 = arguments.length, rest = new Array(_len2 > 5 ? _len2 - 5 : 0), _key2 = 5; _key2 < _len2; _key2++) {
      rest[_key2 - 5] = arguments[_key2];
    }

    return (0,mobx__WEBPACK_IMPORTED_MODULE_8__.untracked)(function () {
      if (typeof typeChecker !== "function") {
        return new Error("Property `" + propFullName + "` of component `" + componentName + "` has " + "invalid PropType notation.");
      } else {
        var error = createObservableTypeCheckerCreator(allowNativeType, "Array")(props, propName, componentName, location, propFullName);
        if (error instanceof Error) return error;
        var propValue = props[propName];

        for (var i = 0; i < propValue.length; i++) {
          error = typeChecker.apply(void 0, [propValue, i, componentName, location, propFullName + "[" + i + "]"].concat(rest));
          if (error instanceof Error) return error;
        }

        return null;
      }
    });
  });
}

var observableArray = /*#__PURE__*/createObservableTypeCheckerCreator(false, "Array");
var observableArrayOf = /*#__PURE__*/createObservableArrayOfTypeChecker.bind(null, false);
var observableMap = /*#__PURE__*/createObservableTypeCheckerCreator(false, "Map");
var observableObject = /*#__PURE__*/createObservableTypeCheckerCreator(false, "Object");
var arrayOrObservableArray = /*#__PURE__*/createObservableTypeCheckerCreator(true, "Array");
var arrayOrObservableArrayOf = /*#__PURE__*/createObservableArrayOfTypeChecker.bind(null, true);
var objectOrObservableObject = /*#__PURE__*/createObservableTypeCheckerCreator(true, "Object");
var PropTypes = {
  observableArray: observableArray,
  observableArrayOf: observableArrayOf,
  observableMap: observableMap,
  observableObject: observableObject,
  arrayOrObservableArray: arrayOrObservableArray,
  arrayOrObservableArrayOf: arrayOrObservableArrayOf,
  objectOrObservableObject: objectOrObservableObject
};

if (!react__WEBPACK_IMPORTED_MODULE_0__.Component) throw new Error("mobx-react requires React to be available");
if (!mobx__WEBPACK_IMPORTED_MODULE_8__.observable) throw new Error("mobx-react requires mobx to be available");


//# sourceMappingURL=mobxreact.esm.js.map


/***/ }),

/***/ 949:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "$mobx": () => /* binding */ $mobx,
/* harmony export */   "FlowCancellationError": () => /* binding */ FlowCancellationError,
/* harmony export */   "ObservableMap": () => /* binding */ ObservableMap,
/* harmony export */   "ObservableSet": () => /* binding */ ObservableSet,
/* harmony export */   "Reaction": () => /* binding */ Reaction,
/* harmony export */   "_allowStateChanges": () => /* binding */ allowStateChanges,
/* harmony export */   "_allowStateChangesInsideComputed": () => /* binding */ runInAction,
/* harmony export */   "_allowStateReadsEnd": () => /* binding */ allowStateReadsEnd,
/* harmony export */   "_allowStateReadsStart": () => /* binding */ allowStateReadsStart,
/* harmony export */   "_autoAction": () => /* binding */ autoAction,
/* harmony export */   "_endAction": () => /* binding */ _endAction,
/* harmony export */   "_getAdministration": () => /* binding */ getAdministration,
/* harmony export */   "_getGlobalState": () => /* binding */ getGlobalState,
/* harmony export */   "_interceptReads": () => /* binding */ interceptReads,
/* harmony export */   "_isComputingDerivation": () => /* binding */ isComputingDerivation,
/* harmony export */   "_resetGlobalState": () => /* binding */ resetGlobalState,
/* harmony export */   "_startAction": () => /* binding */ _startAction,
/* harmony export */   "action": () => /* binding */ action,
/* harmony export */   "autorun": () => /* binding */ autorun,
/* harmony export */   "comparer": () => /* binding */ comparer,
/* harmony export */   "computed": () => /* binding */ computed,
/* harmony export */   "configure": () => /* binding */ configure,
/* harmony export */   "createAtom": () => /* binding */ createAtom,
/* harmony export */   "entries": () => /* binding */ entries,
/* harmony export */   "extendObservable": () => /* binding */ extendObservable,
/* harmony export */   "flow": () => /* binding */ flow,
/* harmony export */   "flowResult": () => /* binding */ flowResult,
/* harmony export */   "get": () => /* binding */ get,
/* harmony export */   "getAtom": () => /* binding */ getAtom,
/* harmony export */   "getDebugName": () => /* binding */ getDebugName,
/* harmony export */   "getDependencyTree": () => /* binding */ getDependencyTree,
/* harmony export */   "getObserverTree": () => /* binding */ getObserverTree,
/* harmony export */   "has": () => /* binding */ has,
/* harmony export */   "intercept": () => /* binding */ intercept,
/* harmony export */   "isAction": () => /* binding */ isAction,
/* harmony export */   "isBoxedObservable": () => /* binding */ isObservableValue,
/* harmony export */   "isComputed": () => /* binding */ isComputed,
/* harmony export */   "isComputedProp": () => /* binding */ isComputedProp,
/* harmony export */   "isFlowCancellationError": () => /* binding */ isFlowCancellationError,
/* harmony export */   "isObservable": () => /* binding */ isObservable,
/* harmony export */   "isObservableArray": () => /* binding */ isObservableArray,
/* harmony export */   "isObservableMap": () => /* binding */ isObservableMap,
/* harmony export */   "isObservableObject": () => /* binding */ isObservableObject,
/* harmony export */   "isObservableProp": () => /* binding */ isObservableProp,
/* harmony export */   "isObservableSet": () => /* binding */ isObservableSet,
/* harmony export */   "keys": () => /* binding */ keys,
/* harmony export */   "makeAutoObservable": () => /* binding */ makeAutoObservable,
/* harmony export */   "makeObservable": () => /* binding */ makeObservable,
/* harmony export */   "observable": () => /* binding */ observable,
/* harmony export */   "observe": () => /* binding */ observe,
/* harmony export */   "onBecomeObserved": () => /* binding */ onBecomeObserved,
/* harmony export */   "onBecomeUnobserved": () => /* binding */ onBecomeUnobserved,
/* harmony export */   "onReactionError": () => /* binding */ onReactionError,
/* harmony export */   "reaction": () => /* binding */ reaction,
/* harmony export */   "remove": () => /* binding */ remove,
/* harmony export */   "runInAction": () => /* binding */ runInAction,
/* harmony export */   "set": () => /* binding */ set,
/* harmony export */   "spy": () => /* binding */ spy,
/* harmony export */   "toJS": () => /* binding */ toJS,
/* harmony export */   "trace": () => /* binding */ trace,
/* harmony export */   "transaction": () => /* binding */ transaction,
/* harmony export */   "untracked": () => /* binding */ untracked,
/* harmony export */   "values": () => /* binding */ values,
/* harmony export */   "when": () => /* binding */ when
/* harmony export */ });
var niceErrors = {
  0: "Invalid value for configuration 'enforceActions', expected 'never', 'always' or 'observed'",
  1: function _(prop) {
    return "Cannot decorate undefined property: '" + prop.toString() + "'";
  },
  2: function _(prop) {
    return "invalid decorator for '" + prop.toString() + "'";
  },
  3: function _(prop) {
    return "Cannot decorate '" + prop.toString() + "': action can only be used on properties with a function value.";
  },
  4: function _(prop) {
    return "Cannot decorate '" + prop.toString() + "': computed can only be used on getter properties.";
  },
  5: "'keys()' can only be used on observable objects, arrays, sets and maps",
  6: "'values()' can only be used on observable objects, arrays, sets and maps",
  7: "'entries()' can only be used on observable objects, arrays and maps",
  8: "'set()' can only be used on observable objects, arrays and maps",
  9: "'remove()' can only be used on observable objects, arrays and maps",
  10: "'has()' can only be used on observable objects, arrays and maps",
  11: "'get()' can only be used on observable objects, arrays and maps",
  12: "Invalid annotation",
  13: "Dynamic observable objects cannot be frozen",
  14: "Intercept handlers should return nothing or a change object",
  15: "Observable arrays cannot be frozen",
  16: "Modification exception: the internal structure of an observable array was changed.",
  17: function _(index, length) {
    return "[mobx.array] Index out of bounds, " + index + " is larger than " + length;
  },
  18: "mobx.map requires Map polyfill for the current browser. Check babel-polyfill or core-js/es6/map.js",
  19: function _(other) {
    return "Cannot initialize from classes that inherit from Map: " + other.constructor.name;
  },
  20: function _(other) {
    return "Cannot initialize map from " + other;
  },
  21: function _(dataStructure) {
    return "Cannot convert to map from '" + dataStructure + "'";
  },
  22: "mobx.set requires Set polyfill for the current browser. Check babel-polyfill or core-js/es6/set.js",
  23: "It is not possible to get index atoms from arrays",
  24: function _(thing) {
    return "Cannot obtain administration from " + thing;
  },
  25: function _(property, name) {
    return "the entry '" + property + "' does not exist in the observable map '" + name + "'";
  },
  26: "please specify a property",
  27: function _(property, name) {
    return "no observable property '" + property.toString() + "' found on the observable object '" + name + "'";
  },
  28: function _(thing) {
    return "Cannot obtain atom from " + thing;
  },
  29: "Expecting some object",
  30: "invalid action stack. did you forget to finish an action?",
  31: "missing option for computed: get",
  32: function _(name, derivation) {
    return "Cycle detected in computation " + name + ": " + derivation;
  },
  33: function _(name) {
    return "The setter of computed value '" + name + "' is trying to update itself. Did you intend to update an _observable_ value, instead of the computed property?";
  },
  34: function _(name) {
    return "[ComputedValue '" + name + "'] It is not possible to assign a new value to a computed value.";
  },
  35: "There are multiple, different versions of MobX active. Make sure MobX is loaded only once or use `configure({ isolateGlobalState: true })`",
  36: "isolateGlobalState should be called before MobX is running any reactions",
  37: function _(method) {
    return "[mobx] `observableArray." + method + "()` mutates the array in-place, which is not allowed inside a derivation. Use `array.slice()." + method + "()` instead";
  }
};
var errors =  false ? 0 : {};
function die(error) {
  for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    args[_key - 1] = arguments[_key];
  }

  if (false) { var e; }

  throw new Error(typeof error === "number" ? "[MobX] minified error nr: " + error + (args.length ? " " + args.join(",") : "") + ". Find the full error at: https://github.com/mobxjs/mobx/blob/mobx6/src/errors.ts" : "[MobX] " + error);
}

var mockGlobal = {};
function getGlobal() {
  if (typeof window !== "undefined") {
    return window;
  }

  if (typeof global !== "undefined") {
    return global;
  }

  if (typeof self !== "undefined") {
    return self;
  }

  return mockGlobal;
}

var assign = Object.assign;
var getDescriptor = Object.getOwnPropertyDescriptor;
var defineProperty = Object.defineProperty;
var objectPrototype = Object.prototype;
var EMPTY_ARRAY = [];
Object.freeze(EMPTY_ARRAY);
var EMPTY_OBJECT = {};
Object.freeze(EMPTY_OBJECT);
var hasProxy = typeof Proxy !== "undefined";
var plainObjectString = /*#__PURE__*/Object.toString();
function assertProxies() {
  if (!hasProxy) {
    die( false ? 0 : "Proxy not available");
  }
}
function warnAboutProxyRequirement(msg) {
  if (false) {}
}
function getNextId() {
  return ++globalState.mobxGuid;
}
/**
 * Makes sure that the provided function is invoked at most once.
 */

function once(func) {
  var invoked = false;
  return function () {
    if (invoked) return;
    invoked = true;
    return func.apply(this, arguments);
  };
}
var noop = function noop() {};
function isFunction(fn) {
  return typeof fn === "function";
}
function isStringish(value) {
  var t = typeof value;

  switch (t) {
    case "string":
    case "symbol":
    case "number":
      return true;
  }

  return false;
}
function isObject(value) {
  return value !== null && typeof value === "object";
}
function isPlainObject(value) {
  var _proto$constructor;

  if (!isObject(value)) return false;
  var proto = Object.getPrototypeOf(value);
  if (proto == null) return true;
  return ((_proto$constructor = proto.constructor) == null ? void 0 : _proto$constructor.toString()) === plainObjectString;
} // https://stackoverflow.com/a/37865170

function isGenerator(obj) {
  var constructor = obj == null ? void 0 : obj.constructor;
  if (!constructor) return false;
  if ("GeneratorFunction" === constructor.name || "GeneratorFunction" === constructor.displayName) return true;
  return false;
}
function addHiddenProp(object, propName, value) {
  defineProperty(object, propName, {
    enumerable: false,
    writable: true,
    configurable: true,
    value: value
  });
}
function addHiddenFinalProp(object, propName, value) {
  defineProperty(object, propName, {
    enumerable: false,
    writable: false,
    configurable: true,
    value: value
  });
}
function assertPropertyConfigurable(object, prop) {
  if (false) { var descriptor; }
}
function createInstanceofPredicate(name, theClass) {
  var propName = "isMobX" + name;
  theClass.prototype[propName] = true;
  return function (x) {
    return isObject(x) && x[propName] === true;
  };
}
function isES6Map(thing) {
  return thing instanceof Map;
}
function isES6Set(thing) {
  return thing instanceof Set;
}
var hasGetOwnPropertySymbols = typeof Object.getOwnPropertySymbols !== "undefined";
/**
 * Returns the following: own keys, prototype keys & own symbol keys, if they are enumerable.
 */

function getPlainObjectKeys(object) {
  var keys = Object.keys(object); // Not supported in IE, so there are not going to be symbol props anyway...

  if (!hasGetOwnPropertySymbols) return keys;
  var symbols = Object.getOwnPropertySymbols(object);
  if (!symbols.length) return keys;
  return [].concat(keys, symbols.filter(function (s) {
    return objectPrototype.propertyIsEnumerable.call(object, s);
  }));
} // From Immer utils
// Returns all own keys, including non-enumerable and symbolic

var ownKeys = typeof Reflect !== "undefined" && Reflect.ownKeys ? Reflect.ownKeys : hasGetOwnPropertySymbols ? function (obj) {
  return Object.getOwnPropertyNames(obj).concat(Object.getOwnPropertySymbols(obj));
} :
/* istanbul ignore next */
Object.getOwnPropertyNames;
function stringifyKey(key) {
  if (typeof key === "string") return key;
  if (typeof key === "symbol") return key.toString();
  return new String(key).toString();
}
function toPrimitive(value) {
  return value === null ? null : typeof value === "object" ? "" + value : value;
}
function hasProp(target, prop) {
  return objectPrototype.hasOwnProperty.call(target, prop);
} // From Immer utils

var getOwnPropertyDescriptors = Object.getOwnPropertyDescriptors || function getOwnPropertyDescriptors(target) {
  // Polyfill needed for Hermes and IE, see https://github.com/facebook/hermes/issues/274
  var res = {}; // Note: without polyfill for ownKeys, symbols won't be picked up

  ownKeys(target).forEach(function (key) {
    res[key] = getDescriptor(target, key);
  });
  return res;
};

var mobxDecoratorsSymbol = /*#__PURE__*/Symbol("mobx-decorators");
var mobxAppliedDecoratorsSymbol = /*#__PURE__*/Symbol("mobx-applied-decorators");
function createDecorator(type) {
  return assign(function (target, property) {
    if (property === undefined) {
      // @decorator(arg) member
      createDecoratorAndAnnotation(type, target);
    } else {
      // @decorator member
      storeDecorator(target, property, type);
    }
  }, {
    annotationType_: type
  });
}
function createDecoratorAndAnnotation(type, arg_) {
  return assign(function (target, property) {
    storeDecorator(target, property, type, arg_);
  }, {
    annotationType_: type,
    arg_: arg_
  });
}
function storeDecorator(target, property, type, arg_) {
  var desc = getDescriptor(target, mobxDecoratorsSymbol);
  var map;

  if (desc) {
    map = desc.value;
  } else {
    map = {};
    addHiddenProp(target, mobxDecoratorsSymbol, map);
  }

  map[property] = {
    annotationType_: type,
    arg_: arg_
  };
}
function applyDecorators(target) {
  if (target[mobxAppliedDecoratorsSymbol]) return true;
  var current = target; // optimization: this could be cached per prototype!
  // (then we can remove the weird short circuiting as well..)

  var annotations = [];

  while (current && current !== objectPrototype) {
    var desc = getDescriptor(current, mobxDecoratorsSymbol);

    if (desc) {
      if (!annotations.length) {
        for (var key in desc.value) {
          // second conditions is to recognize actions
          if (!hasProp(target, key) && !hasProp(current, key)) {
            // not all fields are defined yet, so we are in the makeObservable call of some super class,
            // short circuit, here, we will do this again in a later makeObservable call
            return true;
          }
        }
      }

      annotations.unshift(desc.value);
    }

    current = Object.getPrototypeOf(current);
  }

  annotations.forEach(function (a) {
    makeObservable(target, a);
  });
  addHiddenProp(target, mobxAppliedDecoratorsSymbol, true);
  return annotations.length > 0;
}

var $mobx = /*#__PURE__*/Symbol("mobx administration");
var Atom = /*#__PURE__*/function () {
  // for effective unobserving. BaseAtom has true, for extra optimization, so its onBecomeUnobserved never gets called, because it's not needed

  /**
   * Create a new atom. For debugging purposes it is recommended to give it a name.
   * The onBecomeObserved and onBecomeUnobserved callbacks can be used for resource management.
   */
  function Atom(name_) {
    if (name_ === void 0) {
      name_ = "Atom@" + getNextId();
    }

    this.name_ = void 0;
    this.isPendingUnobservation_ = false;
    this.isBeingObserved_ = false;
    this.observers_ = new Set();
    this.diffValue_ = 0;
    this.lastAccessedBy_ = 0;
    this.lowestObserverState_ = IDerivationState_.NOT_TRACKING_;
    this.onBOL = void 0;
    this.onBUOL = void 0;
    this.name_ = name_;
  } // onBecomeObservedListeners


  var _proto = Atom.prototype;

  _proto.onBO = function onBO() {
    if (this.onBOL) {
      this.onBOL.forEach(function (listener) {
        return listener();
      });
    }
  };

  _proto.onBUO = function onBUO() {
    if (this.onBUOL) {
      this.onBUOL.forEach(function (listener) {
        return listener();
      });
    }
  }
  /**
   * Invoke this method to notify mobx that your atom has been used somehow.
   * Returns true if there is currently a reactive context.
   */
  ;

  _proto.reportObserved = function reportObserved$1() {
    return reportObserved(this);
  }
  /**
   * Invoke this method _after_ this method has changed to signal mobx that all its observers should invalidate.
   */
  ;

  _proto.reportChanged = function reportChanged() {
    startBatch();
    propagateChanged(this);
    endBatch();
  };

  _proto.toString = function toString() {
    return this.name_;
  };

  return Atom;
}();
var isAtom = /*#__PURE__*/createInstanceofPredicate("Atom", Atom);
function createAtom(name, onBecomeObservedHandler, onBecomeUnobservedHandler) {
  if (onBecomeObservedHandler === void 0) {
    onBecomeObservedHandler = noop;
  }

  if (onBecomeUnobservedHandler === void 0) {
    onBecomeUnobservedHandler = noop;
  }

  var atom = new Atom(name); // default `noop` listener will not initialize the hook Set

  if (onBecomeObservedHandler !== noop) {
    onBecomeObserved(atom, onBecomeObservedHandler);
  }

  if (onBecomeUnobservedHandler !== noop) {
    onBecomeUnobserved(atom, onBecomeUnobservedHandler);
  }

  return atom;
}

function identityComparer(a, b) {
  return a === b;
}

function structuralComparer(a, b) {
  return deepEqual(a, b);
}

function shallowComparer(a, b) {
  return deepEqual(a, b, 1);
}

function defaultComparer(a, b) {
  return Object.is(a, b);
}

var comparer = {
  identity: identityComparer,
  structural: structuralComparer,
  "default": defaultComparer,
  shallow: shallowComparer
};

function deepEnhancer(v, _, name) {
  // it is an observable already, done
  if (isObservable(v)) return v; // something that can be converted and mutated?

  if (Array.isArray(v)) return observable.array(v, {
    name: name
  });
  if (isPlainObject(v)) return observable.object(v, undefined, {
    name: name
  });
  if (isES6Map(v)) return observable.map(v, {
    name: name
  });
  if (isES6Set(v)) return observable.set(v, {
    name: name
  });
  return v;
}
function shallowEnhancer(v, _, name) {
  if (v === undefined || v === null) return v;
  if (isObservableObject(v) || isObservableArray(v) || isObservableMap(v) || isObservableSet(v)) return v;
  if (Array.isArray(v)) return observable.array(v, {
    name: name,
    deep: false
  });
  if (isPlainObject(v)) return observable.object(v, undefined, {
    name: name,
    deep: false
  });
  if (isES6Map(v)) return observable.map(v, {
    name: name,
    deep: false
  });
  if (isES6Set(v)) return observable.set(v, {
    name: name,
    deep: false
  });
  if (false) {}
}
function referenceEnhancer(newValue) {
  // never turn into an observable
  return newValue;
}
function refStructEnhancer(v, oldValue) {
  if (false) {}
  if (deepEqual(v, oldValue)) return oldValue;
  return v;
}

var _annotationToEnhancer;
var OBSERVABLE = "observable";
var OBSERVABLE_REF = "observable.ref";
var OBSERVABLE_SHALLOW = "observable.shallow";
var OBSERVABLE_STRUCT = "observable.struct"; // Predefined bags of create observable options, to avoid allocating temporarily option objects
// in the majority of cases

var defaultCreateObservableOptions = {
  deep: true,
  name: undefined,
  defaultDecorator: undefined,
  proxy: true
};
Object.freeze(defaultCreateObservableOptions);
function asCreateObservableOptions(thing) {
  return thing || defaultCreateObservableOptions;
}
function getEnhancerFromOption(options) {
  return options.deep === true ? deepEnhancer : options.deep === false ? referenceEnhancer : getEnhancerFromAnnotation(options.defaultDecorator);
}
var annotationToEnhancer = (_annotationToEnhancer = {}, _annotationToEnhancer[OBSERVABLE] = deepEnhancer, _annotationToEnhancer[OBSERVABLE_REF] = referenceEnhancer, _annotationToEnhancer[OBSERVABLE_SHALLOW] = shallowEnhancer, _annotationToEnhancer[OBSERVABLE_STRUCT] = refStructEnhancer, _annotationToEnhancer);
function getEnhancerFromAnnotation(annotation) {
  var _annotationToEnhancer2;

  return !annotation ? deepEnhancer : (_annotationToEnhancer2 = annotationToEnhancer[annotation.annotationType_]) != null ? _annotationToEnhancer2 : die(12);
}
/**
 * Turns an object, array or function into a reactive structure.
 * @param v the value which should become observable.
 */

function createObservable(v, arg2, arg3) {
  // @observable someProp;
  if (isStringish(arg2)) {
    storeDecorator(v, arg2, OBSERVABLE);
    return;
  } // it is an observable already, done


  if (isObservable(v)) return v; // something that can be converted and mutated?

  var res = isPlainObject(v) ? observable.object(v, arg2, arg3) : Array.isArray(v) ? observable.array(v, arg2) : isES6Map(v) ? observable.map(v, arg2) : isES6Set(v) ? observable.set(v, arg2) : v; // this value could be converted to a new observable data structure, return it

  if (res !== v) return res;
  return observable.box(v);
}

createObservable.annotationType_ = OBSERVABLE;
var observableFactories = {
  box: function box(value, options) {
    var o = asCreateObservableOptions(options);
    return new ObservableValue(value, getEnhancerFromOption(o), o.name, true, o.equals);
  },
  array: function array(initialValues, options) {
    var o = asCreateObservableOptions(options);
    return (globalState.useProxies === false || o.proxy === false ? createLegacyArray : createObservableArray)(initialValues, getEnhancerFromOption(o), o.name);
  },
  map: function map(initialValues, options) {
    var o = asCreateObservableOptions(options);
    return new ObservableMap(initialValues, getEnhancerFromOption(o), o.name);
  },
  set: function set(initialValues, options) {
    var o = asCreateObservableOptions(options);
    return new ObservableSet(initialValues, getEnhancerFromOption(o), o.name);
  },
  object: function object(props, decorators, options) {
    var o = asCreateObservableOptions(options);
    var base = {};
    asObservableObject(base, options == null ? void 0 : options.name, getEnhancerFromOption(o));
    return extendObservable(globalState.useProxies === false || o.proxy === false ? base : createDynamicObservableObject(base), props, decorators, options);
  },
  ref: /*#__PURE__*/createDecorator(OBSERVABLE_REF),
  shallow: /*#__PURE__*/createDecorator(OBSERVABLE_SHALLOW),
  deep: /*#__PURE__*/createDecorator(OBSERVABLE),
  struct: /*#__PURE__*/createDecorator(OBSERVABLE_STRUCT)
}; // eslint-disable-next-line

var observable = /*#__PURE__*/assign(createObservable, observableFactories);

var COMPUTED = "computed";
var COMPUTED_STRUCT = "computed.struct";
/**
 * Decorator for class properties: @computed get value() { return expr; }.
 * For legacy purposes also invokable as ES5 observable created: `computed(() => expr)`;
 */

var computed = function computed(arg1, arg2, arg3) {
  if (isStringish(arg2)) {
    // @computed
    return storeDecorator(arg1, arg2, COMPUTED);
  }

  if (isPlainObject(arg1)) {
    // @computed({ options })
    return createDecoratorAndAnnotation(COMPUTED, arg1);
  } // computed(expr, options?)


  if (false) {}

  var opts = isPlainObject(arg2) ? arg2 : {};
  opts.get = arg1;
  opts.name = opts.name || arg1.name || "";
  /* for generated name */

  return new ComputedValue(opts);
};
computed.annotationType_ = COMPUTED;
computed.struct = /*#__PURE__*/assign(function (target, property) {
  storeDecorator(target, property, COMPUTED_STRUCT);
}, {
  annotationType_: COMPUTED_STRUCT
});

var _getDescriptor$config, _getDescriptor;
// mobx versions

var currentActionId = 0;
var nextActionId = 1;
var isFunctionNameConfigurable = (_getDescriptor$config = (_getDescriptor = /*#__PURE__*/getDescriptor(function () {}, "name")) == null ? void 0 : _getDescriptor.configurable) != null ? _getDescriptor$config : false; // we can safely recycle this object

var tmpNameDescriptor = {
  value: "action",
  configurable: true,
  writable: false,
  enumerable: false
};
function createAction(actionName, fn, autoAction, ref) {
  if (autoAction === void 0) {
    autoAction = false;
  }

  if (false) {}

  function res() {
    return executeAction(actionName, autoAction, fn, ref || this, arguments);
  }

  res.isMobxAction = true;

  if (isFunctionNameConfigurable) {
    tmpNameDescriptor.value = actionName;
    Object.defineProperty(res, "name", tmpNameDescriptor);
  }

  return res;
}
function executeAction(actionName, canRunAsDerivation, fn, scope, args) {
  var runInfo = _startAction(actionName, canRunAsDerivation, scope, args);

  try {
    return fn.apply(scope, args);
  } catch (err) {
    runInfo.error_ = err;
    throw err;
  } finally {
    _endAction(runInfo);
  }
}
function _startAction(actionName, canRunAsDerivation, // true for autoAction
scope, args) {
  var notifySpy_ =  false && 0;
  var startTime_ = 0;

  if (false) { var flattenedArgs; }

  var prevDerivation_ = globalState.trackingDerivation;
  var runAsAction = !canRunAsDerivation || !prevDerivation_;
  startBatch();
  var prevAllowStateChanges_ = globalState.allowStateChanges; // by default preserve previous allow

  if (runAsAction) {
    untrackedStart();
    prevAllowStateChanges_ = allowStateChangesStart(true);
  }

  var prevAllowStateReads_ = allowStateReadsStart(true);
  var runInfo = {
    runAsAction_: runAsAction,
    prevDerivation_: prevDerivation_,
    prevAllowStateChanges_: prevAllowStateChanges_,
    prevAllowStateReads_: prevAllowStateReads_,
    notifySpy_: notifySpy_,
    startTime_: startTime_,
    actionId_: nextActionId++,
    parentActionId_: currentActionId
  };
  currentActionId = runInfo.actionId_;
  return runInfo;
}
function _endAction(runInfo) {
  if (currentActionId !== runInfo.actionId_) {
    die(30);
  }

  currentActionId = runInfo.parentActionId_;

  if (runInfo.error_ !== undefined) {
    globalState.suppressReactionErrors = true;
  }

  allowStateChangesEnd(runInfo.prevAllowStateChanges_);
  allowStateReadsEnd(runInfo.prevAllowStateReads_);
  endBatch();
  if (runInfo.runAsAction_) untrackedEnd(runInfo.prevDerivation_);

  if (false) {}

  globalState.suppressReactionErrors = false;
}
function allowStateChanges(allowStateChanges, func) {
  var prev = allowStateChangesStart(allowStateChanges);

  try {
    return func();
  } finally {
    allowStateChangesEnd(prev);
  }
}
function allowStateChangesStart(allowStateChanges) {
  var prev = globalState.allowStateChanges;
  globalState.allowStateChanges = allowStateChanges;
  return prev;
}
function allowStateChangesEnd(prev) {
  globalState.allowStateChanges = prev;
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  subClass.__proto__ = superClass;
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];

  return arr2;
}

function _createForOfIteratorHelperLoose(o, allowArrayLike) {
  var it;

  if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) {
    if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
      if (it) o = it;
      var i = 0;
      return function () {
        if (i >= o.length) return {
          done: true
        };
        return {
          done: false,
          value: o[i++]
        };
      };
    }

    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }

  it = o[Symbol.iterator]();
  return it.next.bind(it);
}

var _Symbol$toPrimitive;
var CREATE = "create";
_Symbol$toPrimitive = Symbol.toPrimitive;
var ObservableValue = /*#__PURE__*/function (_Atom) {
  _inheritsLoose(ObservableValue, _Atom);

  function ObservableValue(value, enhancer, name_, notifySpy, equals) {
    var _this;

    if (name_ === void 0) {
      name_ = "ObservableValue@" + getNextId();
    }

    if (notifySpy === void 0) {
      notifySpy = true;
    }

    if (equals === void 0) {
      equals = comparer["default"];
    }

    _this = _Atom.call(this, name_) || this;
    _this.enhancer = void 0;
    _this.name_ = void 0;
    _this.equals = void 0;
    _this.hasUnreportedChange_ = false;
    _this.interceptors_ = void 0;
    _this.changeListeners_ = void 0;
    _this.value_ = void 0;
    _this.dehancer = void 0;
    _this.enhancer = enhancer;
    _this.name_ = name_;
    _this.equals = equals;
    _this.value_ = enhancer(value, undefined, name_);

    if (false) {}

    return _this;
  }

  var _proto = ObservableValue.prototype;

  _proto.dehanceValue = function dehanceValue(value) {
    if (this.dehancer !== undefined) return this.dehancer(value);
    return value;
  };

  _proto.set = function set(newValue) {
    var oldValue = this.value_;
    newValue = this.prepareNewValue_(newValue);

    if (newValue !== globalState.UNCHANGED) {
      var notifySpy = isSpyEnabled();

      if (false) {}

      this.setNewValue_(newValue);
      if (false) {}
    }
  };

  _proto.prepareNewValue_ = function prepareNewValue_(newValue) {
    checkIfStateModificationsAreAllowed(this);

    if (hasInterceptors(this)) {
      var change = interceptChange(this, {
        object: this,
        type: UPDATE,
        newValue: newValue
      });
      if (!change) return globalState.UNCHANGED;
      newValue = change.newValue;
    } // apply modifier


    newValue = this.enhancer(newValue, this.value_, this.name_);
    return this.equals(this.value_, newValue) ? globalState.UNCHANGED : newValue;
  };

  _proto.setNewValue_ = function setNewValue_(newValue) {
    var oldValue = this.value_;
    this.value_ = newValue;
    this.reportChanged();

    if (hasListeners(this)) {
      notifyListeners(this, {
        type: UPDATE,
        object: this,
        newValue: newValue,
        oldValue: oldValue
      });
    }
  };

  _proto.get = function get() {
    this.reportObserved();
    return this.dehanceValue(this.value_);
  };

  _proto.intercept_ = function intercept_(handler) {
    return registerInterceptor(this, handler);
  };

  _proto.observe_ = function observe_(listener, fireImmediately) {
    if (fireImmediately) listener({
      observableKind: "value",
      debugObjectName: this.name_,
      object: this,
      type: UPDATE,
      newValue: this.value_,
      oldValue: undefined
    });
    return registerListener(this, listener);
  };

  _proto.raw = function raw() {
    // used by MST ot get undehanced value
    return this.value_;
  };

  _proto.toJSON = function toJSON() {
    return this.get();
  };

  _proto.toString = function toString() {
    return this.name_ + "[" + this.value_ + "]";
  };

  _proto.valueOf = function valueOf() {
    return toPrimitive(this.get());
  };

  _proto[_Symbol$toPrimitive] = function () {
    return this.valueOf();
  };

  return ObservableValue;
}(Atom);
var isObservableValue = /*#__PURE__*/createInstanceofPredicate("ObservableValue", ObservableValue);

var _Symbol$toPrimitive$1;
/**
 * A node in the state dependency root that observes other nodes, and can be observed itself.
 *
 * ComputedValue will remember the result of the computation for the duration of the batch, or
 * while being observed.
 *
 * During this time it will recompute only when one of its direct dependencies changed,
 * but only when it is being accessed with `ComputedValue.get()`.
 *
 * Implementation description:
 * 1. First time it's being accessed it will compute and remember result
 *    give back remembered result until 2. happens
 * 2. First time any deep dependency change, propagate POSSIBLY_STALE to all observers, wait for 3.
 * 3. When it's being accessed, recompute if any shallow dependency changed.
 *    if result changed: propagate STALE to all observers, that were POSSIBLY_STALE from the last step.
 *    go to step 2. either way
 *
 * If at any point it's outside batch and it isn't observed: reset everything and go to 1.
 */

_Symbol$toPrimitive$1 = Symbol.toPrimitive;
var ComputedValue = /*#__PURE__*/function () {
  // nodes we are looking at. Our value depends on these nodes
  // during tracking it's an array with new observed observers
  // to check for cycles
  // N.B: unminified as it is used by MST

  /**
   * Create a new computed value based on a function expression.
   *
   * The `name` property is for debug purposes only.
   *
   * The `equals` property specifies the comparer function to use to determine if a newly produced
   * value differs from the previous value. Two comparers are provided in the library; `defaultComparer`
   * compares based on identity comparison (===), and `structuralComparer` deeply compares the structure.
   * Structural comparison can be convenient if you always produce a new aggregated object and
   * don't want to notify observers if it is structurally the same.
   * This is useful for working with vectors, mouse coordinates etc.
   */
  function ComputedValue(options) {
    this.dependenciesState_ = IDerivationState_.NOT_TRACKING_;
    this.observing_ = [];
    this.newObserving_ = null;
    this.isBeingObserved_ = false;
    this.isPendingUnobservation_ = false;
    this.observers_ = new Set();
    this.diffValue_ = 0;
    this.runId_ = 0;
    this.lastAccessedBy_ = 0;
    this.lowestObserverState_ = IDerivationState_.UP_TO_DATE_;
    this.unboundDepsCount_ = 0;
    this.mapid_ = "#" + getNextId();
    this.value_ = new CaughtException(null);
    this.name_ = void 0;
    this.triggeredBy_ = void 0;
    this.isComputing_ = false;
    this.isRunningSetter_ = false;
    this.derivation = void 0;
    this.setter_ = void 0;
    this.isTracing_ = TraceMode.NONE;
    this.scope_ = void 0;
    this.equals_ = void 0;
    this.requiresReaction_ = void 0;
    this.keepAlive_ = void 0;
    this.onBOL = void 0;
    this.onBUOL = void 0;
    if (!options.get) die(31);
    this.derivation = options.get;
    this.name_ = options.name || "ComputedValue@" + getNextId();
    if (options.set) this.setter_ = createAction(this.name_ + "-setter", options.set);
    this.equals_ = options.equals || (options.compareStructural || options.struct ? comparer.structural : comparer["default"]);
    this.scope_ = options.context;
    this.requiresReaction_ = !!options.requiresReaction;
    this.keepAlive_ = !!options.keepAlive;
  }

  var _proto = ComputedValue.prototype;

  _proto.onBecomeStale_ = function onBecomeStale_() {
    propagateMaybeChanged(this);
  };

  _proto.onBO = function onBO() {
    if (this.onBOL) {
      this.onBOL.forEach(function (listener) {
        return listener();
      });
    }
  };

  _proto.onBUO = function onBUO() {
    if (this.onBUOL) {
      this.onBUOL.forEach(function (listener) {
        return listener();
      });
    }
  }
  /**
   * Returns the current value of this computed value.
   * Will evaluate its computation first if needed.
   */
  ;

  _proto.get = function get() {
    if (this.isComputing_) die(32, this.name_, this.derivation);

    if (globalState.inBatch === 0 && // !globalState.trackingDerivatpion &&
    this.observers_.size === 0 && !this.keepAlive_) {
      if (shouldCompute(this)) {
        this.warnAboutUntrackedRead_();
        startBatch(); // See perf test 'computed memoization'

        this.value_ = this.computeValue_(false);
        endBatch();
      }
    } else {
      reportObserved(this);

      if (shouldCompute(this)) {
        var prevTrackingContext = globalState.trackingContext;
        if (this.keepAlive_ && !prevTrackingContext) globalState.trackingContext = this;
        if (this.trackAndCompute()) propagateChangeConfirmed(this);
        globalState.trackingContext = prevTrackingContext;
      }
    }

    var result = this.value_;
    if (isCaughtException(result)) throw result.cause;
    return result;
  };

  _proto.set = function set(value) {
    if (this.setter_) {
      if (this.isRunningSetter_) die(33, this.name_);
      this.isRunningSetter_ = true;

      try {
        this.setter_.call(this.scope_, value);
      } finally {
        this.isRunningSetter_ = false;
      }
    } else die(34, this.name_);
  };

  _proto.trackAndCompute = function trackAndCompute() {
    // N.B: unminified as it is used by MST
    var oldValue = this.value_;
    var wasSuspended =
    /* see #1208 */
    this.dependenciesState_ === IDerivationState_.NOT_TRACKING_;
    var newValue = this.computeValue_(true);

    if (false) {}

    var changed = wasSuspended || isCaughtException(oldValue) || isCaughtException(newValue) || !this.equals_(oldValue, newValue);

    if (changed) {
      this.value_ = newValue;
    }

    return changed;
  };

  _proto.computeValue_ = function computeValue_(track) {
    this.isComputing_ = true; // don't allow state changes during computation

    var prev = allowStateChangesStart(false);
    var res;

    if (track) {
      res = trackDerivedFunction(this, this.derivation, this.scope_);
    } else {
      if (globalState.disableErrorBoundaries === true) {
        res = this.derivation.call(this.scope_);
      } else {
        try {
          res = this.derivation.call(this.scope_);
        } catch (e) {
          res = new CaughtException(e);
        }
      }
    }

    allowStateChangesEnd(prev);
    this.isComputing_ = false;
    return res;
  };

  _proto.suspend_ = function suspend_() {
    if (!this.keepAlive_) {
      clearObserving(this);
      this.value_ = undefined; // don't hold on to computed value!
    }
  };

  _proto.observe_ = function observe_(listener, fireImmediately) {
    var _this = this;

    var firstTime = true;
    var prevValue = undefined;
    return autorun(function () {
      // TODO: why is this in a different place than the spyReport() function? in all other observables it's called in the same place
      var newValue = _this.get();

      if (!firstTime || fireImmediately) {
        var prevU = untrackedStart();
        listener({
          observableKind: "computed",
          debugObjectName: _this.name_,
          type: UPDATE,
          object: _this,
          newValue: newValue,
          oldValue: prevValue
        });
        untrackedEnd(prevU);
      }

      firstTime = false;
      prevValue = newValue;
    });
  };

  _proto.warnAboutUntrackedRead_ = function warnAboutUntrackedRead_() {
    if (true) return;

    if (this.requiresReaction_ === true) {
      die("[mobx] Computed value " + this.name_ + " is read outside a reactive context");
    }

    if (this.isTracing_ !== TraceMode.NONE) {
      console.log("[mobx.trace] '" + this.name_ + "' is being read outside a reactive context. Doing a full recompute");
    }

    if (globalState.computedRequiresReaction) {
      console.warn("[mobx] Computed value " + this.name_ + " is being read outside a reactive context. Doing a full recompute");
    }
  };

  _proto.toString = function toString() {
    return this.name_ + "[" + this.derivation.toString() + "]";
  };

  _proto.valueOf = function valueOf() {
    return toPrimitive(this.get());
  };

  _proto[_Symbol$toPrimitive$1] = function () {
    return this.valueOf();
  };

  return ComputedValue;
}();
var isComputedValue = /*#__PURE__*/createInstanceofPredicate("ComputedValue", ComputedValue);

var IDerivationState_;

(function (IDerivationState_) {
  // before being run or (outside batch and not being observed)
  // at this point derivation is not holding any data about dependency tree
  IDerivationState_[IDerivationState_["NOT_TRACKING_"] = -1] = "NOT_TRACKING_"; // no shallow dependency changed since last computation
  // won't recalculate derivation
  // this is what makes mobx fast

  IDerivationState_[IDerivationState_["UP_TO_DATE_"] = 0] = "UP_TO_DATE_"; // some deep dependency changed, but don't know if shallow dependency changed
  // will require to check first if UP_TO_DATE or POSSIBLY_STALE
  // currently only ComputedValue will propagate POSSIBLY_STALE
  //
  // having this state is second big optimization:
  // don't have to recompute on every dependency change, but only when it's needed

  IDerivationState_[IDerivationState_["POSSIBLY_STALE_"] = 1] = "POSSIBLY_STALE_"; // A shallow dependency has changed since last computation and the derivation
  // will need to recompute when it's needed next.

  IDerivationState_[IDerivationState_["STALE_"] = 2] = "STALE_";
})(IDerivationState_ || (IDerivationState_ = {}));

var TraceMode;

(function (TraceMode) {
  TraceMode[TraceMode["NONE"] = 0] = "NONE";
  TraceMode[TraceMode["LOG"] = 1] = "LOG";
  TraceMode[TraceMode["BREAK"] = 2] = "BREAK";
})(TraceMode || (TraceMode = {}));

var CaughtException = function CaughtException(cause) {
  this.cause = void 0;
  this.cause = cause; // Empty
};
function isCaughtException(e) {
  return e instanceof CaughtException;
}
/**
 * Finds out whether any dependency of the derivation has actually changed.
 * If dependenciesState is 1 then it will recalculate dependencies,
 * if any dependency changed it will propagate it by changing dependenciesState to 2.
 *
 * By iterating over the dependencies in the same order that they were reported and
 * stopping on the first change, all the recalculations are only called for ComputedValues
 * that will be tracked by derivation. That is because we assume that if the first x
 * dependencies of the derivation doesn't change then the derivation should run the same way
 * up until accessing x-th dependency.
 */

function shouldCompute(derivation) {
  switch (derivation.dependenciesState_) {
    case IDerivationState_.UP_TO_DATE_:
      return false;

    case IDerivationState_.NOT_TRACKING_:
    case IDerivationState_.STALE_:
      return true;

    case IDerivationState_.POSSIBLY_STALE_:
      {
        // state propagation can occur outside of action/reactive context #2195
        var prevAllowStateReads = allowStateReadsStart(true);
        var prevUntracked = untrackedStart(); // no need for those computeds to be reported, they will be picked up in trackDerivedFunction.

        var obs = derivation.observing_,
            l = obs.length;

        for (var i = 0; i < l; i++) {
          var obj = obs[i];

          if (isComputedValue(obj)) {
            if (globalState.disableErrorBoundaries) {
              obj.get();
            } else {
              try {
                obj.get();
              } catch (e) {
                // we are not interested in the value *or* exception at this moment, but if there is one, notify all
                untrackedEnd(prevUntracked);
                allowStateReadsEnd(prevAllowStateReads);
                return true;
              }
            } // if ComputedValue `obj` actually changed it will be computed and propagated to its observers.
            // and `derivation` is an observer of `obj`
            // invariantShouldCompute(derivation)


            if (derivation.dependenciesState_ === IDerivationState_.STALE_) {
              untrackedEnd(prevUntracked);
              allowStateReadsEnd(prevAllowStateReads);
              return true;
            }
          }
        }

        changeDependenciesStateTo0(derivation);
        untrackedEnd(prevUntracked);
        allowStateReadsEnd(prevAllowStateReads);
        return false;
      }
  }
}
function isComputingDerivation() {
  return globalState.trackingDerivation !== null; // filter out actions inside computations
}
function checkIfStateModificationsAreAllowed(atom) {
  if (true) {
    return;
  }

  var hasObservers = atom.observers_.size > 0; // Should not be possible to change observed state outside strict mode, except during initialization, see #563

  if (!globalState.allowStateChanges && (hasObservers || globalState.enforceActions === "always")) console.warn("[MobX] " + (globalState.enforceActions ? "Since strict-mode is enabled, changing (observed) observable values without using an action is not allowed. Tried to modify: " : "Side effects like changing state are not allowed at this point. Are you trying to modify state from, for example, a computed value or the render function of a React component? You can wrap side effects in 'runInAction' (or decorate functions with 'action') if needed. Tried to modify: ") + atom.name_);
}
function checkIfStateReadsAreAllowed(observable) {
  if (false) {}
}
/**
 * Executes the provided function `f` and tracks which observables are being accessed.
 * The tracking information is stored on the `derivation` object and the derivation is registered
 * as observer of any of the accessed observables.
 */

function trackDerivedFunction(derivation, f, context) {
  var prevAllowStateReads = allowStateReadsStart(true); // pre allocate array allocation + room for variation in deps
  // array will be trimmed by bindDependencies

  changeDependenciesStateTo0(derivation);
  derivation.newObserving_ = new Array(derivation.observing_.length + 100);
  derivation.unboundDepsCount_ = 0;
  derivation.runId_ = ++globalState.runId;
  var prevTracking = globalState.trackingDerivation;
  globalState.trackingDerivation = derivation;
  globalState.inBatch++;
  var result;

  if (globalState.disableErrorBoundaries === true) {
    result = f.call(context);
  } else {
    try {
      result = f.call(context);
    } catch (e) {
      result = new CaughtException(e);
    }
  }

  globalState.inBatch--;
  globalState.trackingDerivation = prevTracking;
  bindDependencies(derivation);
  warnAboutDerivationWithoutDependencies(derivation);
  allowStateReadsEnd(prevAllowStateReads);
  return result;
}

function warnAboutDerivationWithoutDependencies(derivation) {
  if (true) return;
  if (derivation.observing_.length !== 0) return;

  if (globalState.reactionRequiresObservable || derivation.requiresObservable_) {
    console.warn("[mobx] Derivation " + derivation.name_ + " is created/updated without reading any observable value");
  }
}
/**
 * diffs newObserving with observing.
 * update observing to be newObserving with unique observables
 * notify observers that become observed/unobserved
 */


function bindDependencies(derivation) {
  // invariant(derivation.dependenciesState !== IDerivationState.NOT_TRACKING, "INTERNAL ERROR bindDependencies expects derivation.dependenciesState !== -1");
  var prevObserving = derivation.observing_;
  var observing = derivation.observing_ = derivation.newObserving_;
  var lowestNewObservingDerivationState = IDerivationState_.UP_TO_DATE_; // Go through all new observables and check diffValue: (this list can contain duplicates):
  //   0: first occurrence, change to 1 and keep it
  //   1: extra occurrence, drop it

  var i0 = 0,
      l = derivation.unboundDepsCount_;

  for (var i = 0; i < l; i++) {
    var dep = observing[i];

    if (dep.diffValue_ === 0) {
      dep.diffValue_ = 1;
      if (i0 !== i) observing[i0] = dep;
      i0++;
    } // Upcast is 'safe' here, because if dep is IObservable, `dependenciesState` will be undefined,
    // not hitting the condition


    if (dep.dependenciesState_ > lowestNewObservingDerivationState) {
      lowestNewObservingDerivationState = dep.dependenciesState_;
    }
  }

  observing.length = i0;
  derivation.newObserving_ = null; // newObserving shouldn't be needed outside tracking (statement moved down to work around FF bug, see #614)
  // Go through all old observables and check diffValue: (it is unique after last bindDependencies)
  //   0: it's not in new observables, unobserve it
  //   1: it keeps being observed, don't want to notify it. change to 0

  l = prevObserving.length;

  while (l--) {
    var _dep = prevObserving[l];

    if (_dep.diffValue_ === 0) {
      removeObserver(_dep, derivation);
    }

    _dep.diffValue_ = 0;
  } // Go through all new observables and check diffValue: (now it should be unique)
  //   0: it was set to 0 in last loop. don't need to do anything.
  //   1: it wasn't observed, let's observe it. set back to 0


  while (i0--) {
    var _dep2 = observing[i0];

    if (_dep2.diffValue_ === 1) {
      _dep2.diffValue_ = 0;
      addObserver(_dep2, derivation);
    }
  } // Some new observed derivations may become stale during this derivation computation
  // so they have had no chance to propagate staleness (#916)


  if (lowestNewObservingDerivationState !== IDerivationState_.UP_TO_DATE_) {
    derivation.dependenciesState_ = lowestNewObservingDerivationState;
    derivation.onBecomeStale_();
  }
}

function clearObserving(derivation) {
  // invariant(globalState.inBatch > 0, "INTERNAL ERROR clearObserving should be called only inside batch");
  var obs = derivation.observing_;
  derivation.observing_ = [];
  var i = obs.length;

  while (i--) {
    removeObserver(obs[i], derivation);
  }

  derivation.dependenciesState_ = IDerivationState_.NOT_TRACKING_;
}
function untracked(action) {
  var prev = untrackedStart();

  try {
    return action();
  } finally {
    untrackedEnd(prev);
  }
}
function untrackedStart() {
  var prev = globalState.trackingDerivation;
  globalState.trackingDerivation = null;
  return prev;
}
function untrackedEnd(prev) {
  globalState.trackingDerivation = prev;
}
function allowStateReadsStart(allowStateReads) {
  var prev = globalState.allowStateReads;
  globalState.allowStateReads = allowStateReads;
  return prev;
}
function allowStateReadsEnd(prev) {
  globalState.allowStateReads = prev;
}
/**
 * needed to keep `lowestObserverState` correct. when changing from (2 or 1) to 0
 *
 */

function changeDependenciesStateTo0(derivation) {
  if (derivation.dependenciesState_ === IDerivationState_.UP_TO_DATE_) return;
  derivation.dependenciesState_ = IDerivationState_.UP_TO_DATE_;
  var obs = derivation.observing_;
  var i = obs.length;

  while (i--) {
    obs[i].lowestObserverState_ = IDerivationState_.UP_TO_DATE_;
  }
}

/**
 * These values will persist if global state is reset
 */

var persistentKeys = ["mobxGuid", "spyListeners", "enforceActions", "computedRequiresReaction", "reactionRequiresObservable", "observableRequiresReaction", "allowStateReads", "disableErrorBoundaries", "runId", "UNCHANGED", "useProxies"];
var MobXGlobals = function MobXGlobals() {
  this.version = 6;
  this.UNCHANGED = {};
  this.trackingDerivation = null;
  this.trackingContext = null;
  this.runId = 0;
  this.mobxGuid = 0;
  this.inBatch = 0;
  this.pendingUnobservations = [];
  this.pendingReactions = [];
  this.isRunningReactions = false;
  this.allowStateChanges = false;
  this.allowStateReads = true;
  this.enforceActions = true;
  this.spyListeners = [];
  this.globalReactionErrorHandlers = [];
  this.computedRequiresReaction = false;
  this.reactionRequiresObservable = false;
  this.observableRequiresReaction = false;
  this.disableErrorBoundaries = false;
  this.suppressReactionErrors = false;
  this.useProxies = true;
  this.verifyProxies = false;
};
var canMergeGlobalState = true;
var isolateCalled = false;
var globalState = /*#__PURE__*/function () {
  var global = /*#__PURE__*/getGlobal();
  if (global.__mobxInstanceCount > 0 && !global.__mobxGlobals) canMergeGlobalState = false;
  if (global.__mobxGlobals && global.__mobxGlobals.version !== new MobXGlobals().version) canMergeGlobalState = false;

  if (!canMergeGlobalState) {
    setTimeout(function () {
      if (!isolateCalled) {
        die(35);
      }
    }, 1);
    return new MobXGlobals();
  } else if (global.__mobxGlobals) {
    global.__mobxInstanceCount += 1;
    if (!global.__mobxGlobals.UNCHANGED) global.__mobxGlobals.UNCHANGED = {}; // make merge backward compatible

    return global.__mobxGlobals;
  } else {
    global.__mobxInstanceCount = 1;
    return global.__mobxGlobals = /*#__PURE__*/new MobXGlobals();
  }
}();
function isolateGlobalState() {
  if (globalState.pendingReactions.length || globalState.inBatch || globalState.isRunningReactions) die(36);
  isolateCalled = true;

  if (canMergeGlobalState) {
    var global = getGlobal();
    if (--global.__mobxInstanceCount === 0) global.__mobxGlobals = undefined;
    globalState = new MobXGlobals();
  }
}
function getGlobalState() {
  return globalState;
}
/**
 * For testing purposes only; this will break the internal state of existing observables,
 * but can be used to get back at a stable state after throwing errors
 */

function resetGlobalState() {
  var defaultGlobals = new MobXGlobals();

  for (var key in defaultGlobals) {
    if (persistentKeys.indexOf(key) === -1) globalState[key] = defaultGlobals[key];
  }

  globalState.allowStateChanges = !globalState.enforceActions;
}

function hasObservers(observable) {
  return observable.observers_ && observable.observers_.size > 0;
}
function getObservers(observable) {
  return observable.observers_;
} // function invariantObservers(observable: IObservable) {
//     const list = observable.observers
//     const map = observable.observersIndexes
//     const l = list.length
//     for (let i = 0; i < l; i++) {
//         const id = list[i].__mapid
//         if (i) {
//             invariant(map[id] === i, "INTERNAL ERROR maps derivation.__mapid to index in list") // for performance
//         } else {
//             invariant(!(id in map), "INTERNAL ERROR observer on index 0 shouldn't be held in map.") // for performance
//         }
//     }
//     invariant(
//         list.length === 0 || Object.keys(map).length === list.length - 1,
//         "INTERNAL ERROR there is no junk in map"
//     )
// }

function addObserver(observable, node) {
  // invariant(node.dependenciesState !== -1, "INTERNAL ERROR, can add only dependenciesState !== -1");
  // invariant(observable._observers.indexOf(node) === -1, "INTERNAL ERROR add already added node");
  // invariantObservers(observable);
  observable.observers_.add(node);
  if (observable.lowestObserverState_ > node.dependenciesState_) observable.lowestObserverState_ = node.dependenciesState_; // invariantObservers(observable);
  // invariant(observable._observers.indexOf(node) !== -1, "INTERNAL ERROR didn't add node");
}
function removeObserver(observable, node) {
  // invariant(globalState.inBatch > 0, "INTERNAL ERROR, remove should be called only inside batch");
  // invariant(observable._observers.indexOf(node) !== -1, "INTERNAL ERROR remove already removed node");
  // invariantObservers(observable);
  observable.observers_["delete"](node);

  if (observable.observers_.size === 0) {
    // deleting last observer
    queueForUnobservation(observable);
  } // invariantObservers(observable);
  // invariant(observable._observers.indexOf(node) === -1, "INTERNAL ERROR remove already removed node2");

}
function queueForUnobservation(observable) {
  if (observable.isPendingUnobservation_ === false) {
    // invariant(observable._observers.length === 0, "INTERNAL ERROR, should only queue for unobservation unobserved observables");
    observable.isPendingUnobservation_ = true;
    globalState.pendingUnobservations.push(observable);
  }
}
/**
 * Batch starts a transaction, at least for purposes of memoizing ComputedValues when nothing else does.
 * During a batch `onBecomeUnobserved` will be called at most once per observable.
 * Avoids unnecessary recalculations.
 */

function startBatch() {
  globalState.inBatch++;
}
function endBatch() {
  if (--globalState.inBatch === 0) {
    runReactions(); // the batch is actually about to finish, all unobserving should happen here.

    var list = globalState.pendingUnobservations;

    for (var i = 0; i < list.length; i++) {
      var observable = list[i];
      observable.isPendingUnobservation_ = false;

      if (observable.observers_.size === 0) {
        if (observable.isBeingObserved_) {
          // if this observable had reactive observers, trigger the hooks
          observable.isBeingObserved_ = false;
          observable.onBUO();
        }

        if (observable instanceof ComputedValue) {
          // computed values are automatically teared down when the last observer leaves
          // this process happens recursively, this computed might be the last observabe of another, etc..
          observable.suspend_();
        }
      }
    }

    globalState.pendingUnobservations = [];
  }
}
function reportObserved(observable) {
  checkIfStateReadsAreAllowed(observable);
  var derivation = globalState.trackingDerivation;

  if (derivation !== null) {
    /**
     * Simple optimization, give each derivation run an unique id (runId)
     * Check if last time this observable was accessed the same runId is used
     * if this is the case, the relation is already known
     */
    if (derivation.runId_ !== observable.lastAccessedBy_) {
      observable.lastAccessedBy_ = derivation.runId_; // Tried storing newObserving, or observing, or both as Set, but performance didn't come close...

      derivation.newObserving_[derivation.unboundDepsCount_++] = observable;

      if (!observable.isBeingObserved_ && globalState.trackingContext) {
        observable.isBeingObserved_ = true;
        observable.onBO();
      }
    }

    return true;
  } else if (observable.observers_.size === 0 && globalState.inBatch > 0) {
    queueForUnobservation(observable);
  }

  return false;
} // function invariantLOS(observable: IObservable, msg: string) {
//     // it's expensive so better not run it in produciton. but temporarily helpful for testing
//     const min = getObservers(observable).reduce((a, b) => Math.min(a, b.dependenciesState), 2)
//     if (min >= observable.lowestObserverState) return // <- the only assumption about `lowestObserverState`
//     throw new Error(
//         "lowestObserverState is wrong for " +
//             msg +
//             " because " +
//             min +
//             " < " +
//             observable.lowestObserverState
//     )
// }

/**
 * NOTE: current propagation mechanism will in case of self reruning autoruns behave unexpectedly
 * It will propagate changes to observers from previous run
 * It's hard or maybe impossible (with reasonable perf) to get it right with current approach
 * Hopefully self reruning autoruns aren't a feature people should depend on
 * Also most basic use cases should be ok
 */
// Called by Atom when its value changes

function propagateChanged(observable) {
  // invariantLOS(observable, "changed start");
  if (observable.lowestObserverState_ === IDerivationState_.STALE_) return;
  observable.lowestObserverState_ = IDerivationState_.STALE_; // Ideally we use for..of here, but the downcompiled version is really slow...

  observable.observers_.forEach(function (d) {
    if (d.dependenciesState_ === IDerivationState_.UP_TO_DATE_) {
      if (false) {}

      d.onBecomeStale_();
    }

    d.dependenciesState_ = IDerivationState_.STALE_;
  }); // invariantLOS(observable, "changed end");
} // Called by ComputedValue when it recalculate and its value changed

function propagateChangeConfirmed(observable) {
  // invariantLOS(observable, "confirmed start");
  if (observable.lowestObserverState_ === IDerivationState_.STALE_) return;
  observable.lowestObserverState_ = IDerivationState_.STALE_;
  observable.observers_.forEach(function (d) {
    if (d.dependenciesState_ === IDerivationState_.POSSIBLY_STALE_) d.dependenciesState_ = IDerivationState_.STALE_;else if (d.dependenciesState_ === IDerivationState_.UP_TO_DATE_ // this happens during computing of `d`, just keep lowestObserverState up to date.
    ) observable.lowestObserverState_ = IDerivationState_.UP_TO_DATE_;
  }); // invariantLOS(observable, "confirmed end");
} // Used by computed when its dependency changed, but we don't wan't to immediately recompute.

function propagateMaybeChanged(observable) {
  // invariantLOS(observable, "maybe start");
  if (observable.lowestObserverState_ !== IDerivationState_.UP_TO_DATE_) return;
  observable.lowestObserverState_ = IDerivationState_.POSSIBLY_STALE_;
  observable.observers_.forEach(function (d) {
    if (d.dependenciesState_ === IDerivationState_.UP_TO_DATE_) {
      d.dependenciesState_ = IDerivationState_.POSSIBLY_STALE_;

      if (false) {}

      d.onBecomeStale_();
    }
  }); // invariantLOS(observable, "maybe end");
}

function logTraceInfo(derivation, observable) {
  console.log("[mobx.trace] '" + derivation.name_ + "' is invalidated due to a change in: '" + observable.name_ + "'");

  if (derivation.isTracing_ === TraceMode.BREAK) {
    var lines = [];
    printDepTree(getDependencyTree(derivation), lines, 1); // prettier-ignore

    new Function("debugger;\n/*\nTracing '" + derivation.name_ + "'\n\nYou are entering this break point because derivation '" + derivation.name_ + "' is being traced and '" + observable.name_ + "' is now forcing it to update.\nJust follow the stacktrace you should now see in the devtools to see precisely what piece of your code is causing this update\nThe stackframe you are looking for is at least ~6-8 stack-frames up.\n\n" + (derivation instanceof ComputedValue ? derivation.derivation.toString().replace(/[*]\//g, "/") : "") + "\n\nThe dependencies for this derivation are:\n\n" + lines.join("\n") + "\n*/\n    ")();
  }
}

function printDepTree(tree, lines, depth) {
  if (lines.length >= 1000) {
    lines.push("(and many more)");
    return;
  }

  lines.push("" + new Array(depth).join("\t") + tree.name); // MWE: not the fastest, but the easiest way :)

  if (tree.dependencies) tree.dependencies.forEach(function (child) {
    return printDepTree(child, lines, depth + 1);
  });
}

var Reaction = /*#__PURE__*/function () {
  // nodes we are looking at. Our value depends on these nodes
  function Reaction(name_, onInvalidate_, errorHandler_, requiresObservable_) {
    if (name_ === void 0) {
      name_ = "Reaction@" + getNextId();
    }

    if (requiresObservable_ === void 0) {
      requiresObservable_ = false;
    }

    this.name_ = void 0;
    this.onInvalidate_ = void 0;
    this.errorHandler_ = void 0;
    this.requiresObservable_ = void 0;
    this.observing_ = [];
    this.newObserving_ = [];
    this.dependenciesState_ = IDerivationState_.NOT_TRACKING_;
    this.diffValue_ = 0;
    this.runId_ = 0;
    this.unboundDepsCount_ = 0;
    this.mapid_ = "#" + getNextId();
    this.isDisposed_ = false;
    this.isScheduled_ = false;
    this.isTrackPending_ = false;
    this.isRunning_ = false;
    this.isTracing_ = TraceMode.NONE;
    this.name_ = name_;
    this.onInvalidate_ = onInvalidate_;
    this.errorHandler_ = errorHandler_;
    this.requiresObservable_ = requiresObservable_;
  }

  var _proto = Reaction.prototype;

  _proto.onBecomeStale_ = function onBecomeStale_() {
    this.schedule_();
  };

  _proto.schedule_ = function schedule_() {
    if (!this.isScheduled_) {
      this.isScheduled_ = true;
      globalState.pendingReactions.push(this);
      runReactions();
    }
  };

  _proto.isScheduled = function isScheduled() {
    return this.isScheduled_;
  }
  /**
   * internal, use schedule() if you intend to kick off a reaction
   */
  ;

  _proto.runReaction_ = function runReaction_() {
    if (!this.isDisposed_) {
      startBatch();
      this.isScheduled_ = false;

      if (shouldCompute(this)) {
        this.isTrackPending_ = true;

        try {
          this.onInvalidate_();

          if (false) {}
        } catch (e) {
          this.reportExceptionInDerivation_(e);
        }
      }

      endBatch();
    }
  };

  _proto.track = function track(fn) {
    if (this.isDisposed_) {
      return; // console.warn("Reaction already disposed") // Note: Not a warning / error in mobx 4 either
    }

    startBatch();
    var notify = isSpyEnabled();
    var startTime;

    if (false) {}

    this.isRunning_ = true;
    var prevReaction = globalState.trackingContext; // reactions could create reactions...

    globalState.trackingContext = this;
    var result = trackDerivedFunction(this, fn, undefined);
    globalState.trackingContext = prevReaction;
    this.isRunning_ = false;
    this.isTrackPending_ = false;

    if (this.isDisposed_) {
      // disposed during last run. Clean up everything that was bound after the dispose call.
      clearObserving(this);
    }

    if (isCaughtException(result)) this.reportExceptionInDerivation_(result.cause);

    if (false) {}

    endBatch();
  };

  _proto.reportExceptionInDerivation_ = function reportExceptionInDerivation_(error) {
    var _this = this;

    if (this.errorHandler_) {
      this.errorHandler_(error, this);
      return;
    }

    if (globalState.disableErrorBoundaries) throw error;
    var message =  false ? 0 : "[mobx] uncaught error in '" + this + "'";

    if (!globalState.suppressReactionErrors) {
      console.error(message, error);
      /** If debugging brought you here, please, read the above message :-). Tnx! */
    } else if (false) {} // prettier-ignore


    if (false) {}

    globalState.globalReactionErrorHandlers.forEach(function (f) {
      return f(error, _this);
    });
  };

  _proto.dispose = function dispose() {
    if (!this.isDisposed_) {
      this.isDisposed_ = true;

      if (!this.isRunning_) {
        // if disposed while running, clean up later. Maybe not optimal, but rare case
        startBatch();
        clearObserving(this);
        endBatch();
      }
    }
  };

  _proto.getDisposer_ = function getDisposer_() {
    var r = this.dispose.bind(this);
    r[$mobx] = this;
    return r;
  };

  _proto.toString = function toString() {
    return "Reaction[" + this.name_ + "]";
  };

  _proto.trace = function trace$1(enterBreakPoint) {
    if (enterBreakPoint === void 0) {
      enterBreakPoint = false;
    }

    trace(this, enterBreakPoint);
  };

  return Reaction;
}();
function onReactionError(handler) {
  globalState.globalReactionErrorHandlers.push(handler);
  return function () {
    var idx = globalState.globalReactionErrorHandlers.indexOf(handler);
    if (idx >= 0) globalState.globalReactionErrorHandlers.splice(idx, 1);
  };
}
/**
 * Magic number alert!
 * Defines within how many times a reaction is allowed to re-trigger itself
 * until it is assumed that this is gonna be a never ending loop...
 */

var MAX_REACTION_ITERATIONS = 100;

var reactionScheduler = function reactionScheduler(f) {
  return f();
};

function runReactions() {
  // Trampolining, if runReactions are already running, new reactions will be picked up
  if (globalState.inBatch > 0 || globalState.isRunningReactions) return;
  reactionScheduler(runReactionsHelper);
}

function runReactionsHelper() {
  globalState.isRunningReactions = true;
  var allReactions = globalState.pendingReactions;
  var iterations = 0; // While running reactions, new reactions might be triggered.
  // Hence we work with two variables and check whether
  // we converge to no remaining reactions after a while.

  while (allReactions.length > 0) {
    if (++iterations === MAX_REACTION_ITERATIONS) {
      console.error( false ? 0 : "[mobx] cycle in reaction: " + allReactions[0]);
      allReactions.splice(0); // clear reactions
    }

    var remainingReactions = allReactions.splice(0);

    for (var i = 0, l = remainingReactions.length; i < l; i++) {
      remainingReactions[i].runReaction_();
    }
  }

  globalState.isRunningReactions = false;
}

var isReaction = /*#__PURE__*/createInstanceofPredicate("Reaction", Reaction);
function setReactionScheduler(fn) {
  var baseScheduler = reactionScheduler;

  reactionScheduler = function reactionScheduler(f) {
    return fn(function () {
      return baseScheduler(f);
    });
  };
}

function isSpyEnabled() {
  return  false && 0;
}
function spyReport(event) {
  if (true) return; // dead code elimination can do the rest

  if (!globalState.spyListeners.length) return;
  var listeners = globalState.spyListeners;

  for (var i = 0, l = listeners.length; i < l; i++) {
    listeners[i](event);
  }
}
function spyReportStart(event) {
  if (true) return;

  var change = _extends({}, event, {
    spyReportStart: true
  });

  spyReport(change);
}
var END_EVENT = {
  type: "report-end",
  spyReportEnd: true
};
function spyReportEnd(change) {
  if (true) return;
  if (change) spyReport(_extends({}, change, {
    type: "report-end",
    spyReportEnd: true
  }));else spyReport(END_EVENT);
}
function spy(listener) {
  if (true) {
    console.warn("[mobx.spy] Is a no-op in production builds");
    return function () {};
  } else {}
}

var ACTION = "action";
var ACTION_BOUND = "action.bound";
var AUTOACTION = "autoAction";
var AUTOACTION_BOUND = "autoAction.bound";
var ACTION_UNNAMED = "<unnamed action>";

function createActionFactory(autoAction, annotation) {
  var res = function action(arg1, arg2) {
    // action(fn() {})
    if (isFunction(arg1)) return createAction(arg1.name || ACTION_UNNAMED, arg1, autoAction); // action("name", fn() {})

    if (isFunction(arg2)) return createAction(arg1, arg2, autoAction); // @action

    if (isStringish(arg2)) {
      return storeDecorator(arg1, arg2, annotation);
    } // Annation: action("name") & @action("name")


    if (isStringish(arg1)) {
      return createDecoratorAndAnnotation(annotation, arg1);
    }

    if (false) {}
  };

  res.annotationType_ = annotation;
  return res;
}

var action = /*#__PURE__*/createActionFactory(false, ACTION);
var autoAction = /*#__PURE__*/createActionFactory(true, AUTOACTION);
action.bound = /*#__PURE__*/createDecorator(ACTION_BOUND);
autoAction.bound = /*#__PURE__*/createDecorator(AUTOACTION_BOUND);
function runInAction(fn) {
  return executeAction(fn.name || ACTION_UNNAMED, false, fn, this, undefined);
}
function isAction(thing) {
  return isFunction(thing) && thing.isMobxAction === true;
}

/**
 * Creates a named reactive view and keeps it alive, so that the view is always
 * updated if one of the dependencies changes, even when the view is not further used by something else.
 * @param view The reactive view
 * @returns disposer function, which can be used to stop the view from being updated in the future.
 */

function autorun(view, opts) {
  if (opts === void 0) {
    opts = EMPTY_OBJECT;
  }

  if (false) {}

  var name = opts && opts.name || view.name || "Autorun@" + getNextId();
  var runSync = !opts.scheduler && !opts.delay;
  var reaction;

  if (runSync) {
    // normal autorun
    reaction = new Reaction(name, function () {
      this.track(reactionRunner);
    }, opts.onError, opts.requiresObservable);
  } else {
    var scheduler = createSchedulerFromOptions(opts); // debounced autorun

    var isScheduled = false;
    reaction = new Reaction(name, function () {
      if (!isScheduled) {
        isScheduled = true;
        scheduler(function () {
          isScheduled = false;
          if (!reaction.isDisposed_) reaction.track(reactionRunner);
        });
      }
    }, opts.onError, opts.requiresObservable);
  }

  function reactionRunner() {
    view(reaction);
  }

  reaction.schedule_();
  return reaction.getDisposer_();
}

var run = function run(f) {
  return f();
};

function createSchedulerFromOptions(opts) {
  return opts.scheduler ? opts.scheduler : opts.delay ? function (f) {
    return setTimeout(f, opts.delay);
  } : run;
}

function reaction(expression, effect, opts) {
  if (opts === void 0) {
    opts = EMPTY_OBJECT;
  }

  if (false) {}

  var name = opts.name || "Reaction@" + getNextId();
  var effectAction = action(name, opts.onError ? wrapErrorHandler(opts.onError, effect) : effect);
  var runSync = !opts.scheduler && !opts.delay;
  var scheduler = createSchedulerFromOptions(opts);
  var firstTime = true;
  var isScheduled = false;
  var value;
  var oldValue = undefined; // only an issue with fireImmediately

  var equals = opts.compareStructural ? comparer.structural : opts.equals || comparer["default"];
  var r = new Reaction(name, function () {
    if (firstTime || runSync) {
      reactionRunner();
    } else if (!isScheduled) {
      isScheduled = true;
      scheduler(reactionRunner);
    }
  }, opts.onError, opts.requiresObservable);

  function reactionRunner() {
    isScheduled = false;
    if (r.isDisposed_) return;
    var changed = false;
    r.track(function () {
      var nextValue = allowStateChanges(false, function () {
        return expression(r);
      });
      changed = firstTime || !equals(value, nextValue);
      oldValue = value;
      value = nextValue;
    });
    if (firstTime && opts.fireImmediately) effectAction(value, oldValue, r);else if (!firstTime && changed) effectAction(value, oldValue, r);
    firstTime = false;
  }

  r.schedule_();
  return r.getDisposer_();
}

function wrapErrorHandler(errorHandler, baseFn) {
  return function () {
    try {
      return baseFn.apply(this, arguments);
    } catch (e) {
      errorHandler.call(this, e);
    }
  };
}

var ON_BECOME_OBSERVED = "onBO";
var ON_BECOME_UNOBSERVED = "onBUO";
function onBecomeObserved(thing, arg2, arg3) {
  return interceptHook(ON_BECOME_OBSERVED, thing, arg2, arg3);
}
function onBecomeUnobserved(thing, arg2, arg3) {
  return interceptHook(ON_BECOME_UNOBSERVED, thing, arg2, arg3);
}

function interceptHook(hook, thing, arg2, arg3) {
  var atom = typeof arg3 === "function" ? getAtom(thing, arg2) : getAtom(thing);
  var cb = isFunction(arg3) ? arg3 : arg2;
  var listenersKey = hook + "L";

  if (atom[listenersKey]) {
    atom[listenersKey].add(cb);
  } else {
    atom[listenersKey] = new Set([cb]);
  }

  return function () {
    var hookListeners = atom[listenersKey];

    if (hookListeners) {
      hookListeners["delete"](cb);

      if (hookListeners.size === 0) {
        delete atom[listenersKey];
      }
    }
  };
}

var NEVER = "never";
var ALWAYS = "always";
var OBSERVED = "observed"; // const IF_AVAILABLE = "ifavailable"

function configure(options) {
  if (options.isolateGlobalState === true) {
    isolateGlobalState();
  }

  var useProxies = options.useProxies,
      enforceActions = options.enforceActions;

  if (useProxies !== undefined) {
    globalState.useProxies = useProxies === ALWAYS ? true : useProxies === NEVER ? false : typeof Proxy !== "undefined";
  }

  if (useProxies === "ifavailable") globalState.verifyProxies = true;

  if (enforceActions !== undefined) {
    var ea = enforceActions === ALWAYS ? ALWAYS : enforceActions === OBSERVED;
    globalState.enforceActions = ea;
    globalState.allowStateChanges = ea === true || ea === ALWAYS ? false : true;
  }
  ["computedRequiresReaction", "reactionRequiresObservable", "observableRequiresReaction", "disableErrorBoundaries"].forEach(function (key) {
    if (key in options) globalState[key] = !!options[key];
  });
  globalState.allowStateReads = !globalState.observableRequiresReaction;

  if (false) {}

  if (options.reactionScheduler) {
    setReactionScheduler(options.reactionScheduler);
  }
}

function extendObservable(target, properties, annotations, options) {
  if (false) {}

  var o = asCreateObservableOptions(options);
  var adm = asObservableObject(target, o.name, getEnhancerFromOption(o));
  startBatch();

  try {
    var descs = getOwnPropertyDescriptors(properties);
    getPlainObjectKeys(descs).forEach(function (key) {
      makeProperty(adm, target, key, descs[key], !annotations ? true : key in annotations ? annotations[key] : true, true, !!(options == null ? void 0 : options.autoBind));
    });
  } finally {
    endBatch();
  }

  return target;
}

function getDependencyTree(thing, property) {
  return nodeToDependencyTree(getAtom(thing, property));
}

function nodeToDependencyTree(node) {
  var result = {
    name: node.name_
  };
  if (node.observing_ && node.observing_.length > 0) result.dependencies = unique(node.observing_).map(nodeToDependencyTree);
  return result;
}

function getObserverTree(thing, property) {
  return nodeToObserverTree(getAtom(thing, property));
}

function nodeToObserverTree(node) {
  var result = {
    name: node.name_
  };
  if (hasObservers(node)) result.observers = Array.from(getObservers(node)).map(nodeToObserverTree);
  return result;
}

function unique(list) {
  return Array.from(new Set(list));
}

var FLOW = "flow";
var generatorId = 0;
function FlowCancellationError() {
  this.message = "FLOW_CANCELLED";
}
FlowCancellationError.prototype = /*#__PURE__*/Object.create(Error.prototype);
function isFlowCancellationError(error) {
  return error instanceof FlowCancellationError;
}
var flow = /*#__PURE__*/Object.assign(function flow(arg1, arg2) {
  // @flow
  if (isStringish(arg2)) {
    return storeDecorator(arg1, arg2, "flow");
  } // flow(fn)


  if (false) {}
  var generator = arg1;
  var name = generator.name || "<unnamed flow>"; // Implementation based on https://github.com/tj/co/blob/master/index.js

  var res = function res() {
    var ctx = this;
    var args = arguments;
    var runId = ++generatorId;
    var gen = action(name + " - runid: " + runId + " - init", generator).apply(ctx, args);
    var rejector;
    var pendingPromise = undefined;
    var promise = new Promise(function (resolve, reject) {
      var stepId = 0;
      rejector = reject;

      function onFulfilled(res) {
        pendingPromise = undefined;
        var ret;

        try {
          ret = action(name + " - runid: " + runId + " - yield " + stepId++, gen.next).call(gen, res);
        } catch (e) {
          return reject(e);
        }

        next(ret);
      }

      function onRejected(err) {
        pendingPromise = undefined;
        var ret;

        try {
          ret = action(name + " - runid: " + runId + " - yield " + stepId++, gen["throw"]).call(gen, err);
        } catch (e) {
          return reject(e);
        }

        next(ret);
      }

      function next(ret) {
        if (isFunction(ret == null ? void 0 : ret.then)) {
          // an async iterator
          ret.then(next, reject);
          return;
        }

        if (ret.done) return resolve(ret.value);
        pendingPromise = Promise.resolve(ret.value);
        return pendingPromise.then(onFulfilled, onRejected);
      }

      onFulfilled(undefined); // kick off the process
    });
    promise.cancel = action(name + " - runid: " + runId + " - cancel", function () {
      try {
        if (pendingPromise) cancelPromise(pendingPromise); // Finally block can return (or yield) stuff..

        var _res = gen["return"](undefined); // eat anything that promise would do, it's cancelled!


        var yieldedPromise = Promise.resolve(_res.value);
        yieldedPromise.then(noop, noop);
        cancelPromise(yieldedPromise); // maybe it can be cancelled :)
        // reject our original promise

        rejector(new FlowCancellationError());
      } catch (e) {
        rejector(e); // there could be a throwing finally block
      }
    });
    return promise;
  };

  res.isMobXFlow = true;
  return res;
}, {
  annotationType_: "flow"
});

function cancelPromise(promise) {
  if (isFunction(promise.cancel)) promise.cancel();
}

function flowResult(result) {
  return result; // just tricking TypeScript :)
}
function isFlow(fn) {
  return (fn == null ? void 0 : fn.isMobXFlow) === true;
}

function interceptReads(thing, propOrHandler, handler) {
  var target;

  if (isObservableMap(thing) || isObservableArray(thing) || isObservableValue(thing)) {
    target = getAdministration(thing);
  } else if (isObservableObject(thing)) {
    if (false) {}
    target = getAdministration(thing, propOrHandler);
  } else if (false) {}

  if (false) {}
  target.dehancer = typeof propOrHandler === "function" ? propOrHandler : handler;
  return function () {
    target.dehancer = undefined;
  };
}

function intercept(thing, propOrHandler, handler) {
  if (isFunction(handler)) return interceptProperty(thing, propOrHandler, handler);else return interceptInterceptable(thing, propOrHandler);
}

function interceptInterceptable(thing, handler) {
  return getAdministration(thing).intercept_(handler);
}

function interceptProperty(thing, property, handler) {
  return getAdministration(thing, property).intercept_(handler);
}

function _isComputed(value, property) {
  if (property !== undefined) {
    if (isObservableObject(value) === false) return false;
    if (!value[$mobx].values_.has(property)) return false;
    var atom = getAtom(value, property);
    return isComputedValue(atom);
  }

  return isComputedValue(value);
}
function isComputed(value) {
  if (false) {}
  return _isComputed(value);
}
function isComputedProp(value, propName) {
  if (false) {}
  return _isComputed(value, propName);
}

function _isObservable(value, property) {
  if (!value) return false;

  if (property !== undefined) {
    if (false) {}

    if (isObservableObject(value)) {
      return value[$mobx].values_.has(property);
    }

    return false;
  } // For first check, see #701


  return isObservableObject(value) || !!value[$mobx] || isAtom(value) || isReaction(value) || isComputedValue(value);
}

function isObservable(value) {
  if (false) {}
  return _isObservable(value);
}
function isObservableProp(value, propName) {
  if (false) {}
  return _isObservable(value, propName);
}

function keys(obj) {
  if (isObservableObject(obj)) {
    return obj[$mobx].getKeys_();
  }

  if (isObservableMap(obj) || isObservableSet(obj)) {
    return Array.from(obj.keys());
  }

  if (isObservableArray(obj)) {
    return obj.map(function (_, index) {
      return index;
    });
  }

  die(5);
}
function values(obj) {
  if (isObservableObject(obj)) {
    return keys(obj).map(function (key) {
      return obj[key];
    });
  }

  if (isObservableMap(obj)) {
    return keys(obj).map(function (key) {
      return obj.get(key);
    });
  }

  if (isObservableSet(obj)) {
    return Array.from(obj.values());
  }

  if (isObservableArray(obj)) {
    return obj.slice();
  }

  die(6);
}
function entries(obj) {
  if (isObservableObject(obj)) {
    return keys(obj).map(function (key) {
      return [key, obj[key]];
    });
  }

  if (isObservableMap(obj)) {
    return keys(obj).map(function (key) {
      return [key, obj.get(key)];
    });
  }

  if (isObservableSet(obj)) {
    return Array.from(obj.entries());
  }

  if (isObservableArray(obj)) {
    return obj.map(function (key, index) {
      return [index, key];
    });
  }

  die(7);
}
function set(obj, key, value) {
  if (arguments.length === 2 && !isObservableSet(obj)) {
    startBatch();
    var _values = key;

    try {
      for (var _key in _values) {
        set(obj, _key, _values[_key]);
      }
    } finally {
      endBatch();
    }

    return;
  }

  if (isObservableObject(obj)) {
    var adm = obj[$mobx];
    var existingObservable = adm.values_.get(key);

    if (existingObservable) {
      adm.write_(key, value);
    } else {
      adm.addObservableProp_(key, value, adm.defaultEnhancer_);
    }
  } else if (isObservableMap(obj)) {
    obj.set(key, value);
  } else if (isObservableSet(obj)) {
    obj.add(key);
  } else if (isObservableArray(obj)) {
    if (typeof key !== "number") key = parseInt(key, 10);
    if (key < 0) die("Invalid index: '" + key + "'");
    startBatch();
    if (key >= obj.length) obj.length = key + 1;
    obj[key] = value;
    endBatch();
  } else die(8);
}
function remove(obj, key) {
  if (isObservableObject(obj)) {
    obj[$mobx].remove_(key);
  } else if (isObservableMap(obj)) {
    obj["delete"](key);
  } else if (isObservableSet(obj)) {
    obj["delete"](key);
  } else if (isObservableArray(obj)) {
    if (typeof key !== "number") key = parseInt(key, 10);
    obj.splice(key, 1);
  } else {
    die(9);
  }
}
function has(obj, key) {
  if (isObservableObject(obj)) {
    // return keys(obj).indexOf(key) >= 0
    return getAdministration(obj).has_(key);
  } else if (isObservableMap(obj)) {
    return obj.has(key);
  } else if (isObservableSet(obj)) {
    return obj.has(key);
  } else if (isObservableArray(obj)) {
    return key >= 0 && key < obj.length;
  }

  die(10);
}
function get(obj, key) {
  if (!has(obj, key)) return undefined;

  if (isObservableObject(obj)) {
    return obj[key];
  } else if (isObservableMap(obj)) {
    return obj.get(key);
  } else if (isObservableArray(obj)) {
    return obj[key];
  }

  die(11);
}

function observe(thing, propOrCb, cbOrFire, fireImmediately) {
  if (isFunction(cbOrFire)) return observeObservableProperty(thing, propOrCb, cbOrFire, fireImmediately);else return observeObservable(thing, propOrCb, cbOrFire);
}

function observeObservable(thing, listener, fireImmediately) {
  return getAdministration(thing).observe_(listener, fireImmediately);
}

function observeObservableProperty(thing, property, listener, fireImmediately) {
  return getAdministration(thing, property).observe_(listener, fireImmediately);
}

function cache(map, key, value) {
  map.set(key, value);
  return value;
}

function toJSHelper(source, __alreadySeen) {
  if (source == null || typeof source !== "object" || source instanceof Date || !isObservable(source)) return source;
  if (isObservableValue(source)) return toJSHelper(source.get(), __alreadySeen);

  if (__alreadySeen.has(source)) {
    return __alreadySeen.get(source);
  }

  if (isObservableArray(source)) {
    var res = cache(__alreadySeen, source, new Array(source.length));
    source.forEach(function (value, idx) {
      res[idx] = toJSHelper(value, __alreadySeen);
    });
    return res;
  }

  if (isObservableSet(source)) {
    var _res = cache(__alreadySeen, source, new Set());

    source.forEach(function (value) {
      _res.add(toJSHelper(value, __alreadySeen));
    });
    return _res;
  }

  if (isObservableMap(source)) {
    var _res2 = cache(__alreadySeen, source, new Map());

    source.forEach(function (value, key) {
      _res2.set(key, toJSHelper(value, __alreadySeen));
    });
    return _res2;
  } else {
    // must be observable object
    keys(source); // make sure keys are observed

    var _res3 = cache(__alreadySeen, source, {});

    getPlainObjectKeys(source).forEach(function (key) {
      _res3[key] = toJSHelper(source[key], __alreadySeen);
    });
    return _res3;
  }
}
/**
 * Basically, a deep clone, so that no reactive property will exist anymore.
 */


function toJS(source, options) {
  if (false) {}
  return toJSHelper(source, new Map());
}

function trace() {
  if (true) die("trace() is not available in production builds");
  var enterBreakPoint = false;

  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  if (typeof args[args.length - 1] === "boolean") enterBreakPoint = args.pop();
  var derivation = getAtomFromArgs(args);

  if (!derivation) {
    return die("'trace(break?)' can only be used inside a tracked computed value or a Reaction. Consider passing in the computed value or reaction explicitly");
  }

  if (derivation.isTracing_ === TraceMode.NONE) {
    console.log("[mobx.trace] '" + derivation.name_ + "' tracing enabled");
  }

  derivation.isTracing_ = enterBreakPoint ? TraceMode.BREAK : TraceMode.LOG;
}

function getAtomFromArgs(args) {
  switch (args.length) {
    case 0:
      return globalState.trackingDerivation;

    case 1:
      return getAtom(args[0]);

    case 2:
      return getAtom(args[0], args[1]);
  }
}

/**
 * During a transaction no views are updated until the end of the transaction.
 * The transaction will be run synchronously nonetheless.
 *
 * @param action a function that updates some reactive state
 * @returns any value that was returned by the 'action' parameter.
 */

function transaction(action, thisArg) {
  if (thisArg === void 0) {
    thisArg = undefined;
  }

  startBatch();

  try {
    return action.apply(thisArg);
  } finally {
    endBatch();
  }
}

function when(predicate, arg1, arg2) {
  if (arguments.length === 1 || arg1 && typeof arg1 === "object") return whenPromise(predicate, arg1);
  return _when(predicate, arg1, arg2 || {});
}

function _when(predicate, effect, opts) {
  var timeoutHandle;

  if (typeof opts.timeout === "number") {
    timeoutHandle = setTimeout(function () {
      if (!disposer[$mobx].isDisposed_) {
        disposer();
        var error = new Error("WHEN_TIMEOUT");
        if (opts.onError) opts.onError(error);else throw error;
      }
    }, opts.timeout);
  }

  opts.name = opts.name || "When@" + getNextId();
  var effectAction = createAction(opts.name + "-effect", effect); // eslint-disable-next-line

  var disposer = autorun(function (r) {
    // predicate should not change state
    var cond = allowStateChanges(false, predicate);

    if (cond) {
      r.dispose();
      if (timeoutHandle) clearTimeout(timeoutHandle);
      effectAction();
    }
  }, opts);
  return disposer;
}

function whenPromise(predicate, opts) {
  if (false) {}
  var cancel;
  var res = new Promise(function (resolve, reject) {
    var disposer = _when(predicate, resolve, _extends({}, opts, {
      onError: reject
    }));

    cancel = function cancel() {
      disposer();
      reject("WHEN_CANCELLED");
    };
  });
  res.cancel = cancel;
  return res;
}

function getAdm(target) {
  return target[$mobx];
} // Optimization: we don't need the intermediate objects and could have a completely custom administration for DynamicObjects,
// and skip either the internal values map, or the base object with its property descriptors!


var objectProxyTraps = {
  has: function has(target, name) {
    if (name === $mobx || name === "constructor") return true;
    if (false) {}
    var adm = getAdm(target); // MWE: should `in` operator be reactive? If not, below code path will be faster / more memory efficient
    // check performance stats!
    // if (adm.values.get(name as string)) return true

    if (isStringish(name)) return adm.has_(name);
    return name in target;
  },
  get: function get(target, name) {
    if (name === $mobx || name === "constructor") return target[name];
    var adm = getAdm(target);
    var observable = adm.values_.get(name);

    if (observable instanceof Atom) {
      var result = observable.get();

      if (result === undefined) {
        // This fixes #1796, because deleting a prop that has an
        // undefined value won't retrigger a observer (no visible effect),
        // the autorun wouldn't subscribe to future key changes (see also next comment)
        adm.has_(name);
      }

      return result;
    } // make sure we start listening to future keys
    // note that we only do this here for optimization


    if (isStringish(name)) adm.has_(name);
    return target[name];
  },
  set: function set$1(target, name, value) {
    if (!isStringish(name)) return false;

    if (false) {}

    set(target, name, value);

    return true;
  },
  deleteProperty: function deleteProperty(target, name) {
    if (false) {}
    if (!isStringish(name)) return false;
    var adm = getAdm(target);
    adm.remove_(name);
    return true;
  },
  ownKeys: function ownKeys(target) {
    if (false) {}
    var adm = getAdm(target);
    adm.keysAtom_.reportObserved();
    return Reflect.ownKeys(target);
  },
  preventExtensions: function preventExtensions(target) {
    die(13);
  }
};
function createDynamicObservableObject(base) {
  assertProxies();
  var proxy = new Proxy(base, objectProxyTraps);
  base[$mobx].proxy_ = proxy;
  return proxy;
}

function hasInterceptors(interceptable) {
  return interceptable.interceptors_ !== undefined && interceptable.interceptors_.length > 0;
}
function registerInterceptor(interceptable, handler) {
  var interceptors = interceptable.interceptors_ || (interceptable.interceptors_ = []);
  interceptors.push(handler);
  return once(function () {
    var idx = interceptors.indexOf(handler);
    if (idx !== -1) interceptors.splice(idx, 1);
  });
}
function interceptChange(interceptable, change) {
  var prevU = untrackedStart();

  try {
    // Interceptor can modify the array, copy it to avoid concurrent modification, see #1950
    var interceptors = [].concat(interceptable.interceptors_ || []);

    for (var i = 0, l = interceptors.length; i < l; i++) {
      change = interceptors[i](change);
      if (change && !change.type) die(14);
      if (!change) break;
    }

    return change;
  } finally {
    untrackedEnd(prevU);
  }
}

function hasListeners(listenable) {
  return listenable.changeListeners_ !== undefined && listenable.changeListeners_.length > 0;
}
function registerListener(listenable, handler) {
  var listeners = listenable.changeListeners_ || (listenable.changeListeners_ = []);
  listeners.push(handler);
  return once(function () {
    var idx = listeners.indexOf(handler);
    if (idx !== -1) listeners.splice(idx, 1);
  });
}
function notifyListeners(listenable, change) {
  var prevU = untrackedStart();
  var listeners = listenable.changeListeners_;
  if (!listeners) return;
  listeners = listeners.slice();

  for (var i = 0, l = listeners.length; i < l; i++) {
    listeners[i](change);
  }

  untrackedEnd(prevU);
}

var CACHED_ANNOTATIONS = /*#__PURE__*/Symbol("mobx-cached-annotations");

function makeAction(target, key, name, fn, asAutoAction) {
  addHiddenProp(target, key, asAutoAction ? autoAction(name || key, fn) : action(name || key, fn));
}

function getInferredAnnotation(desc, defaultAnnotation, autoBind) {
  if (desc.get) return computed;
  if (desc.set) return false; // ignore pure setters
  // if already wrapped in action, don't do that another time, but assume it is already set up properly

  if (isFunction(desc.value)) return isGenerator(desc.value) ? flow : isAction(desc.value) ? false : autoBind ? autoAction.bound : autoAction; // if (!desc.configurable || !desc.writable) return false

  return defaultAnnotation != null ? defaultAnnotation : observable.deep;
}

function getDescriptorInChain(target, prop) {
  var current = target;

  while (current && current !== objectPrototype) {
    // Optimization: cache meta data, especially for members from prototypes?
    var desc = getDescriptor(current, prop);

    if (desc) {
      return [desc, current];
    }

    current = Object.getPrototypeOf(current);
  }

  die(1, prop);
}

function makeProperty(adm, owner, key, descriptor, annotation, forceCopy, // extend observable will copy even unannotated properties
autoBind) {
  var _annotation$annotatio;

  var target = adm.target_;
  var defaultAnnotation = observable; // ideally grap this from adm's defaultEnahncer instead!

  var originAnnotation = annotation;

  if (annotation === true) {
    annotation = getInferredAnnotation(descriptor, defaultAnnotation, autoBind);
  }

  if (annotation === false) {
    if (forceCopy) {
      defineProperty(target, key, descriptor);
    }

    return;
  }

  if (!annotation || annotation === true || !annotation.annotationType_) {
    return die(2, key);
  }

  var type = annotation.annotationType_;

  switch (type) {
    case AUTOACTION:
    case ACTION:
      {
        var fn = descriptor.value;
        if (!isFunction(fn)) die(3, key);

        if (owner !== target && !forceCopy) {
          if (!isAction(owner[key])) makeAction(owner, key, annotation.arg_, fn, type === AUTOACTION);
        } else {
          makeAction(target, key, annotation.arg_, fn, type === AUTOACTION);
        }

        break;
      }

    case AUTOACTION_BOUND:
    case ACTION_BOUND:
      {
        var _fn = descriptor.value;
        if (!isFunction(_fn)) die(3, key);
        makeAction(target, key, annotation.arg_, _fn.bind(adm.proxy_ || target), type === AUTOACTION_BOUND);
        break;
      }

    case FLOW:
      {
        if (owner !== target && !forceCopy) {
          if (!isFlow(owner[key])) addHiddenProp(owner, key, flow(descriptor.value));
        } else {
          addHiddenProp(target, key, flow(descriptor.value));
        }

        break;
      }

    case COMPUTED:
    case COMPUTED_STRUCT:
      {
        if (!descriptor.get) die(4, key);
        adm.addComputedProp_(target, key, _extends({
          get: descriptor.get,
          set: descriptor.set,
          compareStructural: annotation.annotationType_ === COMPUTED_STRUCT
        }, annotation.arg_));
        break;
      }

    case OBSERVABLE:
    case OBSERVABLE_REF:
    case OBSERVABLE_SHALLOW:
    case OBSERVABLE_STRUCT:
      {
        if (false) {}
        if (false) {} // if the originAnnotation was true, preferred the adm's default enhancer over the inferred one

        var enhancer = originAnnotation === true ? adm.defaultEnhancer_ : getEnhancerFromAnnotation(annotation);
        adm.addObservableProp_(key, descriptor.value, enhancer);
        break;
      }

    default:
      if (false) {}
  }
}
function makeObservable(target, annotations, options) {
  var autoBind = !!(options == null ? void 0 : options.autoBind);
  var adm = asObservableObject(target, options == null ? void 0 : options.name, getEnhancerFromAnnotation(options == null ? void 0 : options.defaultDecorator));
  startBatch();

  try {
    if (!annotations) {
      var didDecorate = applyDecorators(target);
      if (false) {}
      return target;
    }

    var make = function make(key) {
      var annotation = annotations[key];

      var _getDescriptorInChain = getDescriptorInChain(target, key),
          desc = _getDescriptorInChain[0],
          owner = _getDescriptorInChain[1];

      makeProperty(adm, owner, key, desc, annotation, false, autoBind);
    };

    ownKeys(annotations).forEach(make);
  } finally {
    endBatch();
  }

  return target;
}
function makeAutoObservable(target, overrides, options) {
  var proto = Object.getPrototypeOf(target);
  var isPlain = proto == null || proto === objectPrototype;

  if (false) {}

  var annotations;

  if (!isPlain && hasProp(proto, CACHED_ANNOTATIONS)) {
    // shortcut, reuse inferred annotations for this type from the previous time
    annotations = proto[CACHED_ANNOTATIONS];
  } else {
    annotations = _extends({}, overrides);
    extractAnnotationsFromObject(target, annotations, options);

    if (!isPlain) {
      extractAnnotationsFromProto(proto, annotations, options);
      addHiddenProp(proto, CACHED_ANNOTATIONS, annotations);
    }
  }

  makeObservable(target, annotations, options);
  return target;
}

function extractAnnotationsFromObject(target, collector, options) {
  var _options$defaultDecor;

  var autoBind = !!(options == null ? void 0 : options.autoBind);
  var defaultAnnotation = (options == null ? void 0 : options.deep) === undefined ? (_options$defaultDecor = options == null ? void 0 : options.defaultDecorator) != null ? _options$defaultDecor : observable.deep : (options == null ? void 0 : options.deep) ? observable.deep : observable.ref;
  Object.entries(getOwnPropertyDescriptors(target)).forEach(function (_ref) {
    var key = _ref[0],
        descriptor = _ref[1];
    if (key in collector || key === "constructor") return;
    collector[key] = getInferredAnnotation(descriptor, defaultAnnotation, autoBind);
  });
}

function extractAnnotationsFromProto(proto, collector, options) {
  Object.entries(getOwnPropertyDescriptors(proto)).forEach(function (_ref2) {
    var key = _ref2[0],
        prop = _ref2[1];
    if (key in collector || key === "constructor") return;

    if (prop.get) {
      collector[key] = computed;
    } else if (isFunction(prop.value)) {
      collector[key] = isGenerator(prop.value) ? flow : (options == null ? void 0 : options.autoBind) ? autoAction.bound : autoAction;
    }
  });
}

var SPLICE = "splice";
var UPDATE = "update";
var MAX_SPLICE_SIZE = 10000; // See e.g. https://github.com/mobxjs/mobx/issues/859

var arrayTraps = {
  get: function get(target, name) {
    var adm = target[$mobx];
    if (name === $mobx) return adm;
    if (name === "length") return adm.getArrayLength_();

    if (typeof name === "string" && !isNaN(name)) {
      return adm.get_(parseInt(name));
    }

    if (hasProp(arrayExtensions, name)) {
      return arrayExtensions[name];
    }

    return target[name];
  },
  set: function set(target, name, value) {
    var adm = target[$mobx];

    if (name === "length") {
      adm.setArrayLength_(value);
    }

    if (typeof name === "symbol" || isNaN(name)) {
      target[name] = value;
    } else {
      // numeric string
      adm.set_(parseInt(name), value);
    }

    return true;
  },
  preventExtensions: function preventExtensions() {
    die(15);
  }
};
var ObservableArrayAdministration = /*#__PURE__*/function () {
  // this is the prop that gets proxied, so can't replace it!
  function ObservableArrayAdministration(name, enhancer, owned_, legacyMode_) {
    this.owned_ = void 0;
    this.legacyMode_ = void 0;
    this.atom_ = void 0;
    this.values_ = [];
    this.interceptors_ = void 0;
    this.changeListeners_ = void 0;
    this.enhancer_ = void 0;
    this.dehancer = void 0;
    this.proxy_ = void 0;
    this.lastKnownLength_ = 0;
    this.owned_ = owned_;
    this.legacyMode_ = legacyMode_;
    this.atom_ = new Atom(name || "ObservableArray@" + getNextId());

    this.enhancer_ = function (newV, oldV) {
      return enhancer(newV, oldV, name + "[..]");
    };
  }

  var _proto = ObservableArrayAdministration.prototype;

  _proto.dehanceValue_ = function dehanceValue_(value) {
    if (this.dehancer !== undefined) return this.dehancer(value);
    return value;
  };

  _proto.dehanceValues_ = function dehanceValues_(values) {
    if (this.dehancer !== undefined && values.length > 0) return values.map(this.dehancer);
    return values;
  };

  _proto.intercept_ = function intercept_(handler) {
    return registerInterceptor(this, handler);
  };

  _proto.observe_ = function observe_(listener, fireImmediately) {
    if (fireImmediately === void 0) {
      fireImmediately = false;
    }

    if (fireImmediately) {
      listener({
        observableKind: "array",
        object: this.proxy_,
        debugObjectName: this.atom_.name_,
        type: "splice",
        index: 0,
        added: this.values_.slice(),
        addedCount: this.values_.length,
        removed: [],
        removedCount: 0
      });
    }

    return registerListener(this, listener);
  };

  _proto.getArrayLength_ = function getArrayLength_() {
    this.atom_.reportObserved();
    return this.values_.length;
  };

  _proto.setArrayLength_ = function setArrayLength_(newLength) {
    if (typeof newLength !== "number" || newLength < 0) die("Out of range: " + newLength);
    var currentLength = this.values_.length;
    if (newLength === currentLength) return;else if (newLength > currentLength) {
      var newItems = new Array(newLength - currentLength);

      for (var i = 0; i < newLength - currentLength; i++) {
        newItems[i] = undefined;
      } // No Array.fill everywhere...


      this.spliceWithArray_(currentLength, 0, newItems);
    } else this.spliceWithArray_(newLength, currentLength - newLength);
  };

  _proto.updateArrayLength_ = function updateArrayLength_(oldLength, delta) {
    if (oldLength !== this.lastKnownLength_) die(16);
    this.lastKnownLength_ += delta;
    if (this.legacyMode_ && delta > 0) reserveArrayBuffer(oldLength + delta + 1);
  };

  _proto.spliceWithArray_ = function spliceWithArray_(index, deleteCount, newItems) {
    var _this = this;

    checkIfStateModificationsAreAllowed(this.atom_);
    var length = this.values_.length;
    if (index === undefined) index = 0;else if (index > length) index = length;else if (index < 0) index = Math.max(0, length + index);
    if (arguments.length === 1) deleteCount = length - index;else if (deleteCount === undefined || deleteCount === null) deleteCount = 0;else deleteCount = Math.max(0, Math.min(deleteCount, length - index));
    if (newItems === undefined) newItems = EMPTY_ARRAY;

    if (hasInterceptors(this)) {
      var change = interceptChange(this, {
        object: this.proxy_,
        type: SPLICE,
        index: index,
        removedCount: deleteCount,
        added: newItems
      });
      if (!change) return EMPTY_ARRAY;
      deleteCount = change.removedCount;
      newItems = change.added;
    }

    newItems = newItems.length === 0 ? newItems : newItems.map(function (v) {
      return _this.enhancer_(v, undefined);
    });

    if (this.legacyMode_ || "production" !== "production") {
      var lengthDelta = newItems.length - deleteCount;
      this.updateArrayLength_(length, lengthDelta); // checks if internal array wasn't modified
    }

    var res = this.spliceItemsIntoValues_(index, deleteCount, newItems);
    if (deleteCount !== 0 || newItems.length !== 0) this.notifyArraySplice_(index, newItems, res);
    return this.dehanceValues_(res);
  };

  _proto.spliceItemsIntoValues_ = function spliceItemsIntoValues_(index, deleteCount, newItems) {
    if (newItems.length < MAX_SPLICE_SIZE) {
      var _this$values_;

      return (_this$values_ = this.values_).splice.apply(_this$values_, [index, deleteCount].concat(newItems));
    } else {
      var res = this.values_.slice(index, index + deleteCount);
      var oldItems = this.values_.slice(index + deleteCount);
      this.values_.length = index + newItems.length - deleteCount;

      for (var i = 0; i < newItems.length; i++) {
        this.values_[index + i] = newItems[i];
      }

      for (var _i = 0; _i < oldItems.length; _i++) {
        this.values_[index + newItems.length + _i] = oldItems[_i];
      }

      return res;
    }
  };

  _proto.notifyArrayChildUpdate_ = function notifyArrayChildUpdate_(index, newValue, oldValue) {
    var notifySpy = !this.owned_ && isSpyEnabled();
    var notify = hasListeners(this);
    var change = notify || notifySpy ? {
      observableKind: "array",
      object: this.proxy_,
      type: UPDATE,
      debugObjectName: this.atom_.name_,
      index: index,
      newValue: newValue,
      oldValue: oldValue
    } : null; // The reason why this is on right hand side here (and not above), is this way the uglifier will drop it, but it won't
    // cause any runtime overhead in development mode without NODE_ENV set, unless spying is enabled

    if (false) {}
    this.atom_.reportChanged();
    if (notify) notifyListeners(this, change);
    if (false) {}
  };

  _proto.notifyArraySplice_ = function notifyArraySplice_(index, added, removed) {
    var notifySpy = !this.owned_ && isSpyEnabled();
    var notify = hasListeners(this);
    var change = notify || notifySpy ? {
      observableKind: "array",
      object: this.proxy_,
      debugObjectName: this.atom_.name_,
      type: SPLICE,
      index: index,
      removed: removed,
      added: added,
      removedCount: removed.length,
      addedCount: added.length
    } : null;
    if (false) {}
    this.atom_.reportChanged(); // conform: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/observe

    if (notify) notifyListeners(this, change);
    if (false) {}
  };

  _proto.get_ = function get_(index) {
    if (index < this.values_.length) {
      this.atom_.reportObserved();
      return this.dehanceValue_(this.values_[index]);
    }

    console.warn( false ? 0 : "[mobx.array] Attempt to read an array index (" + index + ") that is out of bounds (" + this.values_.length + "). Please check length first. Out of bound indices will not be tracked by MobX");
  };

  _proto.set_ = function set_(index, newValue) {
    var values = this.values_;

    if (index < values.length) {
      // update at index in range
      checkIfStateModificationsAreAllowed(this.atom_);
      var oldValue = values[index];

      if (hasInterceptors(this)) {
        var change = interceptChange(this, {
          type: UPDATE,
          object: this.proxy_,
          index: index,
          newValue: newValue
        });
        if (!change) return;
        newValue = change.newValue;
      }

      newValue = this.enhancer_(newValue, oldValue);
      var changed = newValue !== oldValue;

      if (changed) {
        values[index] = newValue;
        this.notifyArrayChildUpdate_(index, newValue, oldValue);
      }
    } else if (index === values.length) {
      // add a new item
      this.spliceWithArray_(index, 0, [newValue]);
    } else {
      // out of bounds
      die(17, index, values.length);
    }
  };

  return ObservableArrayAdministration;
}();
function createObservableArray(initialValues, enhancer, name, owned) {
  if (name === void 0) {
    name = "ObservableArray@" + getNextId();
  }

  if (owned === void 0) {
    owned = false;
  }

  assertProxies();
  var adm = new ObservableArrayAdministration(name, enhancer, owned, false);
  addHiddenFinalProp(adm.values_, $mobx, adm);
  var proxy = new Proxy(adm.values_, arrayTraps);
  adm.proxy_ = proxy;

  if (initialValues && initialValues.length) {
    var prev = allowStateChangesStart(true);
    adm.spliceWithArray_(0, 0, initialValues);
    allowStateChangesEnd(prev);
  }

  return proxy;
} // eslint-disable-next-line

var arrayExtensions = {
  clear: function clear() {
    return this.splice(0);
  },
  replace: function replace(newItems) {
    var adm = this[$mobx];
    return adm.spliceWithArray_(0, adm.values_.length, newItems);
  },
  // Used by JSON.stringify
  toJSON: function toJSON() {
    return this.slice();
  },

  /*
   * functions that do alter the internal structure of the array, (based on lib.es6.d.ts)
   * since these functions alter the inner structure of the array, the have side effects.
   * Because the have side effects, they should not be used in computed function,
   * and for that reason the do not call dependencyState.notifyObserved
   */
  splice: function splice(index, deleteCount) {
    for (var _len = arguments.length, newItems = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
      newItems[_key - 2] = arguments[_key];
    }

    var adm = this[$mobx];

    switch (arguments.length) {
      case 0:
        return [];

      case 1:
        return adm.spliceWithArray_(index);

      case 2:
        return adm.spliceWithArray_(index, deleteCount);
    }

    return adm.spliceWithArray_(index, deleteCount, newItems);
  },
  spliceWithArray: function spliceWithArray(index, deleteCount, newItems) {
    return this[$mobx].spliceWithArray_(index, deleteCount, newItems);
  },
  push: function push() {
    var adm = this[$mobx];

    for (var _len2 = arguments.length, items = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      items[_key2] = arguments[_key2];
    }

    adm.spliceWithArray_(adm.values_.length, 0, items);
    return adm.values_.length;
  },
  pop: function pop() {
    return this.splice(Math.max(this[$mobx].values_.length - 1, 0), 1)[0];
  },
  shift: function shift() {
    return this.splice(0, 1)[0];
  },
  unshift: function unshift() {
    var adm = this[$mobx];

    for (var _len3 = arguments.length, items = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
      items[_key3] = arguments[_key3];
    }

    adm.spliceWithArray_(0, 0, items);
    return adm.values_.length;
  },
  reverse: function reverse() {
    // reverse by default mutates in place before returning the result
    // which makes it both a 'derivation' and a 'mutation'.
    if (globalState.trackingDerivation) {
      die(37, "reverse");
    }

    this.replace(this.slice().reverse());
    return this;
  },
  sort: function sort() {
    // sort by default mutates in place before returning the result
    // which goes against all good practices. Let's not change the array in place!
    if (globalState.trackingDerivation) {
      die(37, "sort");
    }

    var copy = this.slice();
    copy.sort.apply(copy, arguments);
    this.replace(copy);
    return this;
  },
  remove: function remove(value) {
    var adm = this[$mobx];
    var idx = adm.dehanceValues_(adm.values_).indexOf(value);

    if (idx > -1) {
      this.splice(idx, 1);
      return true;
    }

    return false;
  }
};
/**
 * Wrap function from prototype
 * Without this, everything works as well, but this works
 * faster as everything works on unproxied values
 */

addArrayExtension("concat", simpleFunc);
addArrayExtension("flat", simpleFunc);
addArrayExtension("includes", simpleFunc);
addArrayExtension("indexOf", simpleFunc);
addArrayExtension("join", simpleFunc);
addArrayExtension("lastIndexOf", simpleFunc);
addArrayExtension("slice", simpleFunc);
addArrayExtension("toString", simpleFunc);
addArrayExtension("toLocaleString", simpleFunc); // map

addArrayExtension("every", mapLikeFunc);
addArrayExtension("filter", mapLikeFunc);
addArrayExtension("find", mapLikeFunc);
addArrayExtension("findIndex", mapLikeFunc);
addArrayExtension("flatMap", mapLikeFunc);
addArrayExtension("forEach", mapLikeFunc);
addArrayExtension("map", mapLikeFunc);
addArrayExtension("some", mapLikeFunc); // reduce

addArrayExtension("reduce", reduceLikeFunc);
addArrayExtension("reduceRight", reduceLikeFunc);

function addArrayExtension(funcName, funcFactory) {
  if (typeof Array.prototype[funcName] === "function") {
    arrayExtensions[funcName] = funcFactory(funcName);
  }
} // Report and delegate to dehanced array


function simpleFunc(funcName) {
  return function () {
    var adm = this[$mobx];
    adm.atom_.reportObserved();
    var dehancedValues = adm.dehanceValues_(adm.values_);
    return dehancedValues[funcName].apply(dehancedValues, arguments);
  };
} // Make sure callbacks recieve correct array arg #2326


function mapLikeFunc(funcName) {
  return function (callback, thisArg) {
    var _this2 = this;

    var adm = this[$mobx];
    adm.atom_.reportObserved();
    var dehancedValues = adm.dehanceValues_(adm.values_);
    return dehancedValues[funcName](function (element, index) {
      return callback.call(thisArg, element, index, _this2);
    });
  };
} // Make sure callbacks recieve correct array arg #2326


function reduceLikeFunc(funcName) {
  return function () {
    var _this3 = this;

    var adm = this[$mobx];
    adm.atom_.reportObserved();
    var dehancedValues = adm.dehanceValues_(adm.values_); // #2432 - reduce behavior depends on arguments.length

    var callback = arguments[0];

    arguments[0] = function (accumulator, currentValue, index) {
      return callback(accumulator, currentValue, index, _this3);
    };

    return dehancedValues[funcName].apply(dehancedValues, arguments);
  };
}

var isObservableArrayAdministration = /*#__PURE__*/createInstanceofPredicate("ObservableArrayAdministration", ObservableArrayAdministration);
function isObservableArray(thing) {
  return isObject(thing) && isObservableArrayAdministration(thing[$mobx]);
}

var _Symbol$iterator, _Symbol$toStringTag;
var ObservableMapMarker = {};
var ADD = "add";
var DELETE = "delete"; // just extend Map? See also https://gist.github.com/nestharus/13b4d74f2ef4a2f4357dbd3fc23c1e54
// But: https://github.com/mobxjs/mobx/issues/1556

_Symbol$iterator = Symbol.iterator;
_Symbol$toStringTag = Symbol.toStringTag;
var ObservableMap = /*#__PURE__*/function () {
  // hasMap, not hashMap >-).
  function ObservableMap(initialData, enhancer_, name_) {
    if (enhancer_ === void 0) {
      enhancer_ = deepEnhancer;
    }

    if (name_ === void 0) {
      name_ = "ObservableMap@" + getNextId();
    }

    this.enhancer_ = void 0;
    this.name_ = void 0;
    this[$mobx] = ObservableMapMarker;
    this.data_ = void 0;
    this.hasMap_ = void 0;
    this.keysAtom_ = void 0;
    this.interceptors_ = void 0;
    this.changeListeners_ = void 0;
    this.dehancer = void 0;
    this.enhancer_ = enhancer_;
    this.name_ = name_;

    if (!isFunction(Map)) {
      die(18);
    }

    this.keysAtom_ = createAtom(this.name_ + ".keys()");
    this.data_ = new Map();
    this.hasMap_ = new Map();
    this.merge(initialData);
  }

  var _proto = ObservableMap.prototype;

  _proto.has_ = function has_(key) {
    return this.data_.has(key);
  };

  _proto.has = function has(key) {
    var _this = this;

    if (!globalState.trackingDerivation) return this.has_(key);
    var entry = this.hasMap_.get(key);

    if (!entry) {
      var newEntry = entry = new ObservableValue(this.has_(key), referenceEnhancer, this.name_ + "." + stringifyKey(key) + "?", false);
      this.hasMap_.set(key, newEntry);
      onBecomeUnobserved(newEntry, function () {
        return _this.hasMap_["delete"](key);
      });
    }

    return entry.get();
  };

  _proto.set = function set(key, value) {
    var hasKey = this.has_(key);

    if (hasInterceptors(this)) {
      var change = interceptChange(this, {
        type: hasKey ? UPDATE : ADD,
        object: this,
        newValue: value,
        name: key
      });
      if (!change) return this;
      value = change.newValue;
    }

    if (hasKey) {
      this.updateValue_(key, value);
    } else {
      this.addValue_(key, value);
    }

    return this;
  };

  _proto["delete"] = function _delete(key) {
    var _this2 = this;

    checkIfStateModificationsAreAllowed(this.keysAtom_);

    if (hasInterceptors(this)) {
      var change = interceptChange(this, {
        type: DELETE,
        object: this,
        name: key
      });
      if (!change) return false;
    }

    if (this.has_(key)) {
      var notifySpy = isSpyEnabled();
      var notify = hasListeners(this);

      var _change = notify || notifySpy ? {
        observableKind: "map",
        debugObjectName: this.name_,
        type: DELETE,
        object: this,
        oldValue: this.data_.get(key).value_,
        name: key
      } : null;

      if (false) {}
      transaction(function () {
        _this2.keysAtom_.reportChanged();

        _this2.updateHasMapEntry_(key, false);

        var observable = _this2.data_.get(key);

        observable.setNewValue_(undefined);

        _this2.data_["delete"](key);
      });
      if (notify) notifyListeners(this, _change);
      if (false) {}
      return true;
    }

    return false;
  };

  _proto.updateHasMapEntry_ = function updateHasMapEntry_(key, value) {
    var entry = this.hasMap_.get(key);

    if (entry) {
      entry.setNewValue_(value);
    }
  };

  _proto.updateValue_ = function updateValue_(key, newValue) {
    var observable = this.data_.get(key);
    newValue = observable.prepareNewValue_(newValue);

    if (newValue !== globalState.UNCHANGED) {
      var notifySpy = isSpyEnabled();
      var notify = hasListeners(this);
      var change = notify || notifySpy ? {
        observableKind: "map",
        debugObjectName: this.name_,
        type: UPDATE,
        object: this,
        oldValue: observable.value_,
        name: key,
        newValue: newValue
      } : null;
      if (false) {}
      observable.setNewValue_(newValue);
      if (notify) notifyListeners(this, change);
      if (false) {}
    }
  };

  _proto.addValue_ = function addValue_(key, newValue) {
    var _this3 = this;

    checkIfStateModificationsAreAllowed(this.keysAtom_);
    transaction(function () {
      var observable = new ObservableValue(newValue, _this3.enhancer_, _this3.name_ + "." + stringifyKey(key), false);

      _this3.data_.set(key, observable);

      newValue = observable.value_; // value might have been changed

      _this3.updateHasMapEntry_(key, true);

      _this3.keysAtom_.reportChanged();
    });
    var notifySpy = isSpyEnabled();
    var notify = hasListeners(this);
    var change = notify || notifySpy ? {
      observableKind: "map",
      debugObjectName: this.name_,
      type: ADD,
      object: this,
      name: key,
      newValue: newValue
    } : null;
    if (false) {}
    if (notify) notifyListeners(this, change);
    if (false) {}
  };

  _proto.get = function get(key) {
    if (this.has(key)) return this.dehanceValue_(this.data_.get(key).get());
    return this.dehanceValue_(undefined);
  };

  _proto.dehanceValue_ = function dehanceValue_(value) {
    if (this.dehancer !== undefined) {
      return this.dehancer(value);
    }

    return value;
  };

  _proto.keys = function keys() {
    this.keysAtom_.reportObserved();
    return this.data_.keys();
  };

  _proto.values = function values() {
    var self = this;
    var keys = this.keys();
    return makeIterable({
      next: function next() {
        var _keys$next = keys.next(),
            done = _keys$next.done,
            value = _keys$next.value;

        return {
          done: done,
          value: done ? undefined : self.get(value)
        };
      }
    });
  };

  _proto.entries = function entries() {
    var self = this;
    var keys = this.keys();
    return makeIterable({
      next: function next() {
        var _keys$next2 = keys.next(),
            done = _keys$next2.done,
            value = _keys$next2.value;

        return {
          done: done,
          value: done ? undefined : [value, self.get(value)]
        };
      }
    });
  };

  _proto[_Symbol$iterator] = function () {
    return this.entries();
  };

  _proto.forEach = function forEach(callback, thisArg) {
    for (var _iterator = _createForOfIteratorHelperLoose(this), _step; !(_step = _iterator()).done;) {
      var _step$value = _step.value,
          key = _step$value[0],
          value = _step$value[1];
      callback.call(thisArg, value, key, this);
    }
  }
  /** Merge another object into this object, returns this. */
  ;

  _proto.merge = function merge(other) {
    var _this4 = this;

    if (isObservableMap(other)) {
      other = new Map(other);
    }

    transaction(function () {
      if (isPlainObject(other)) getPlainObjectKeys(other).forEach(function (key) {
        return _this4.set(key, other[key]);
      });else if (Array.isArray(other)) other.forEach(function (_ref) {
        var key = _ref[0],
            value = _ref[1];
        return _this4.set(key, value);
      });else if (isES6Map(other)) {
        if (other.constructor !== Map) die(19, other);
        other.forEach(function (value, key) {
          return _this4.set(key, value);
        });
      } else if (other !== null && other !== undefined) die(20, other);
    });
    return this;
  };

  _proto.clear = function clear() {
    var _this5 = this;

    transaction(function () {
      untracked(function () {
        for (var _iterator2 = _createForOfIteratorHelperLoose(_this5.keys()), _step2; !(_step2 = _iterator2()).done;) {
          var key = _step2.value;

          _this5["delete"](key);
        }
      });
    });
  };

  _proto.replace = function replace(values) {
    var _this6 = this;

    // Implementation requirements:
    // - respect ordering of replacement map
    // - allow interceptors to run and potentially prevent individual operations
    // - don't recreate observables that already exist in original map (so we don't destroy existing subscriptions)
    // - don't _keysAtom.reportChanged if the keys of resulting map are indentical (order matters!)
    // - note that result map may differ from replacement map due to the interceptors
    transaction(function () {
      // Convert to map so we can do quick key lookups
      var replacementMap = convertToMap(values);
      var orderedData = new Map(); // Used for optimization

      var keysReportChangedCalled = false; // Delete keys that don't exist in replacement map
      // if the key deletion is prevented by interceptor
      // add entry at the beginning of the result map

      for (var _iterator3 = _createForOfIteratorHelperLoose(_this6.data_.keys()), _step3; !(_step3 = _iterator3()).done;) {
        var key = _step3.value;

        // Concurrently iterating/deleting keys
        // iterator should handle this correctly
        if (!replacementMap.has(key)) {
          var deleted = _this6["delete"](key); // Was the key removed?


          if (deleted) {
            // _keysAtom.reportChanged() was already called
            keysReportChangedCalled = true;
          } else {
            // Delete prevented by interceptor
            var value = _this6.data_.get(key);

            orderedData.set(key, value);
          }
        }
      } // Merge entries


      for (var _iterator4 = _createForOfIteratorHelperLoose(replacementMap.entries()), _step4; !(_step4 = _iterator4()).done;) {
        var _step4$value = _step4.value,
            _key = _step4$value[0],
            _value = _step4$value[1];

        // We will want to know whether a new key is added
        var keyExisted = _this6.data_.has(_key); // Add or update value


        _this6.set(_key, _value); // The addition could have been prevent by interceptor


        if (_this6.data_.has(_key)) {
          // The update could have been prevented by interceptor
          // and also we want to preserve existing values
          // so use value from _data map (instead of replacement map)
          var _value2 = _this6.data_.get(_key);

          orderedData.set(_key, _value2); // Was a new key added?

          if (!keyExisted) {
            // _keysAtom.reportChanged() was already called
            keysReportChangedCalled = true;
          }
        }
      } // Check for possible key order change


      if (!keysReportChangedCalled) {
        if (_this6.data_.size !== orderedData.size) {
          // If size differs, keys are definitely modified
          _this6.keysAtom_.reportChanged();
        } else {
          var iter1 = _this6.data_.keys();

          var iter2 = orderedData.keys();
          var next1 = iter1.next();
          var next2 = iter2.next();

          while (!next1.done) {
            if (next1.value !== next2.value) {
              _this6.keysAtom_.reportChanged();

              break;
            }

            next1 = iter1.next();
            next2 = iter2.next();
          }
        }
      } // Use correctly ordered map


      _this6.data_ = orderedData;
    });
    return this;
  };

  _proto.toString = function toString() {
    return "[object ObservableMap]";
  };

  _proto.toJSON = function toJSON() {
    return Array.from(this);
  };

  /**
   * Observes this object. Triggers for the events 'add', 'update' and 'delete'.
   * See: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/observe
   * for callback details
   */
  _proto.observe_ = function observe_(listener, fireImmediately) {
    if (false) {}
    return registerListener(this, listener);
  };

  _proto.intercept_ = function intercept_(handler) {
    return registerInterceptor(this, handler);
  };

  _createClass(ObservableMap, [{
    key: "size",
    get: function get() {
      this.keysAtom_.reportObserved();
      return this.data_.size;
    }
  }, {
    key: _Symbol$toStringTag,
    get: function get() {
      return "Map";
    }
  }]);

  return ObservableMap;
}(); // eslint-disable-next-line

var isObservableMap = /*#__PURE__*/createInstanceofPredicate("ObservableMap", ObservableMap);

function convertToMap(dataStructure) {
  if (isES6Map(dataStructure) || isObservableMap(dataStructure)) {
    return dataStructure;
  } else if (Array.isArray(dataStructure)) {
    return new Map(dataStructure);
  } else if (isPlainObject(dataStructure)) {
    var map = new Map();

    for (var key in dataStructure) {
      map.set(key, dataStructure[key]);
    }

    return map;
  } else {
    return die(21, dataStructure);
  }
}

var _Symbol$iterator$1, _Symbol$toStringTag$1;
var ObservableSetMarker = {};
_Symbol$iterator$1 = Symbol.iterator;
_Symbol$toStringTag$1 = Symbol.toStringTag;
var ObservableSet = /*#__PURE__*/function () {
  function ObservableSet(initialData, enhancer, name_) {
    if (enhancer === void 0) {
      enhancer = deepEnhancer;
    }

    if (name_ === void 0) {
      name_ = "ObservableSet@" + getNextId();
    }

    this.name_ = void 0;
    this[$mobx] = ObservableSetMarker;
    this.data_ = new Set();
    this.atom_ = void 0;
    this.changeListeners_ = void 0;
    this.interceptors_ = void 0;
    this.dehancer = void 0;
    this.enhancer_ = void 0;
    this.name_ = name_;

    if (!isFunction(Set)) {
      die(22);
    }

    this.atom_ = createAtom(this.name_);

    this.enhancer_ = function (newV, oldV) {
      return enhancer(newV, oldV, name_);
    };

    if (initialData) {
      this.replace(initialData);
    }
  }

  var _proto = ObservableSet.prototype;

  _proto.dehanceValue_ = function dehanceValue_(value) {
    if (this.dehancer !== undefined) {
      return this.dehancer(value);
    }

    return value;
  };

  _proto.clear = function clear() {
    var _this = this;

    transaction(function () {
      untracked(function () {
        for (var _iterator = _createForOfIteratorHelperLoose(_this.data_.values()), _step; !(_step = _iterator()).done;) {
          var value = _step.value;

          _this["delete"](value);
        }
      });
    });
  };

  _proto.forEach = function forEach(callbackFn, thisArg) {
    for (var _iterator2 = _createForOfIteratorHelperLoose(this), _step2; !(_step2 = _iterator2()).done;) {
      var value = _step2.value;
      callbackFn.call(thisArg, value, value, this);
    }
  };

  _proto.add = function add(value) {
    var _this2 = this;

    checkIfStateModificationsAreAllowed(this.atom_);

    if (hasInterceptors(this)) {
      var change = interceptChange(this, {
        type: ADD,
        object: this,
        newValue: value
      });
      if (!change) return this; // ideally, value = change.value would be done here, so that values can be
      // changed by interceptor. Same applies for other Set and Map api's.
    }

    if (!this.has(value)) {
      transaction(function () {
        _this2.data_.add(_this2.enhancer_(value, undefined));

        _this2.atom_.reportChanged();
      });
      var notifySpy =  false && 0;
      var notify = hasListeners(this);

      var _change = notify || notifySpy ? {
        observableKind: "set",
        debugObjectName: this.name_,
        type: ADD,
        object: this,
        newValue: value
      } : null;

      if (notifySpy && "production" !== "production") spyReportStart(_change);
      if (notify) notifyListeners(this, _change);
      if (notifySpy && "production" !== "production") spyReportEnd();
    }

    return this;
  };

  _proto["delete"] = function _delete(value) {
    var _this3 = this;

    if (hasInterceptors(this)) {
      var change = interceptChange(this, {
        type: DELETE,
        object: this,
        oldValue: value
      });
      if (!change) return false;
    }

    if (this.has(value)) {
      var notifySpy =  false && 0;
      var notify = hasListeners(this);

      var _change2 = notify || notifySpy ? {
        observableKind: "set",
        debugObjectName: this.name_,
        type: DELETE,
        object: this,
        oldValue: value
      } : null;

      if (notifySpy && "production" !== "production") spyReportStart(_change2);
      transaction(function () {
        _this3.atom_.reportChanged();

        _this3.data_["delete"](value);
      });
      if (notify) notifyListeners(this, _change2);
      if (notifySpy && "production" !== "production") spyReportEnd();
      return true;
    }

    return false;
  };

  _proto.has = function has(value) {
    this.atom_.reportObserved();
    return this.data_.has(this.dehanceValue_(value));
  };

  _proto.entries = function entries() {
    var nextIndex = 0;
    var keys = Array.from(this.keys());
    var values = Array.from(this.values());
    return makeIterable({
      next: function next() {
        var index = nextIndex;
        nextIndex += 1;
        return index < values.length ? {
          value: [keys[index], values[index]],
          done: false
        } : {
          done: true
        };
      }
    });
  };

  _proto.keys = function keys() {
    return this.values();
  };

  _proto.values = function values() {
    this.atom_.reportObserved();
    var self = this;
    var nextIndex = 0;
    var observableValues = Array.from(this.data_.values());
    return makeIterable({
      next: function next() {
        return nextIndex < observableValues.length ? {
          value: self.dehanceValue_(observableValues[nextIndex++]),
          done: false
        } : {
          done: true
        };
      }
    });
  };

  _proto.replace = function replace(other) {
    var _this4 = this;

    if (isObservableSet(other)) {
      other = new Set(other);
    }

    transaction(function () {
      if (Array.isArray(other)) {
        _this4.clear();

        other.forEach(function (value) {
          return _this4.add(value);
        });
      } else if (isES6Set(other)) {
        _this4.clear();

        other.forEach(function (value) {
          return _this4.add(value);
        });
      } else if (other !== null && other !== undefined) {
        die("Cannot initialize set from " + other);
      }
    });
    return this;
  };

  _proto.observe_ = function observe_(listener, fireImmediately) {
    // ... 'fireImmediately' could also be true?
    if (false) {}
    return registerListener(this, listener);
  };

  _proto.intercept_ = function intercept_(handler) {
    return registerInterceptor(this, handler);
  };

  _proto.toJSON = function toJSON() {
    return Array.from(this);
  };

  _proto.toString = function toString() {
    return "[object ObservableSet]";
  };

  _proto[_Symbol$iterator$1] = function () {
    return this.values();
  };

  _createClass(ObservableSet, [{
    key: "size",
    get: function get() {
      this.atom_.reportObserved();
      return this.data_.size;
    }
  }, {
    key: _Symbol$toStringTag$1,
    get: function get() {
      return "Set";
    }
  }]);

  return ObservableSet;
}(); // eslint-disable-next-line

var isObservableSet = /*#__PURE__*/createInstanceofPredicate("ObservableSet", ObservableSet);

var REMOVE = "remove";
var ObservableObjectAdministration = /*#__PURE__*/function () {
  function ObservableObjectAdministration(target_, values_, name_, defaultEnhancer_) {
    if (values_ === void 0) {
      values_ = new Map();
    }

    this.target_ = void 0;
    this.values_ = void 0;
    this.name_ = void 0;
    this.defaultEnhancer_ = void 0;
    this.keysAtom_ = void 0;
    this.changeListeners_ = void 0;
    this.interceptors_ = void 0;
    this.proxy_ = void 0;
    this.pendingKeys_ = void 0;
    this.keysValue_ = [];
    this.isStaledKeysValue_ = true;
    this.target_ = target_;
    this.values_ = values_;
    this.name_ = name_;
    this.defaultEnhancer_ = defaultEnhancer_;
    this.keysAtom_ = new Atom(name_ + ".keys");
  }

  var _proto = ObservableObjectAdministration.prototype;

  _proto.read_ = function read_(key) {
    return this.values_.get(key).get();
  };

  _proto.write_ = function write_(key, newValue) {
    var instance = this.target_;
    var observable = this.values_.get(key);

    if (observable instanceof ComputedValue) {
      observable.set(newValue);
      return;
    } // intercept


    if (hasInterceptors(this)) {
      var change = interceptChange(this, {
        type: UPDATE,
        object: this.proxy_ || instance,
        name: key,
        newValue: newValue
      });
      if (!change) return;
      newValue = change.newValue;
    }

    newValue = observable.prepareNewValue_(newValue); // notify spy & observers

    if (newValue !== globalState.UNCHANGED) {
      var notify = hasListeners(this);
      var notifySpy =  false && 0;

      var _change = notify || notifySpy ? {
        type: UPDATE,
        observableKind: "object",
        debugObjectName: this.name_,
        object: this.proxy_ || instance,
        oldValue: observable.value_,
        name: key,
        newValue: newValue
      } : null;

      if (false) {}
      observable.setNewValue_(newValue);
      if (notify) notifyListeners(this, _change);
      if (false) {}
    }
  };

  _proto.has_ = function has_(key) {
    var map = this.pendingKeys_ || (this.pendingKeys_ = new Map());
    var entry = map.get(key);
    if (entry) return entry.get();else {
      var exists = !!this.values_.get(key); // Possible optimization: Don't have a separate map for non existing keys,
      // but store them in the values map instead, using a special symbol to denote "not existing"

      entry = new ObservableValue(exists, referenceEnhancer, this.name_ + "." + stringifyKey(key) + "?", false);
      map.set(key, entry);
      return entry.get(); // read to subscribe
    }
  };

  _proto.addObservableProp_ = function addObservableProp_(propName, newValue, enhancer) {
    if (enhancer === void 0) {
      enhancer = this.defaultEnhancer_;
    }

    var target = this.target_;
    if (false) {}

    if (hasInterceptors(this)) {
      var change = interceptChange(this, {
        object: this.proxy_ || target,
        name: propName,
        type: ADD,
        newValue: newValue
      });
      if (!change) return;
      newValue = change.newValue;
    }

    var observable = new ObservableValue(newValue, enhancer, this.name_ + "." + stringifyKey(propName), false);
    this.values_.set(propName, observable);
    newValue = observable.value_; // observableValue might have changed it

    defineProperty(target, propName, generateObservablePropConfig(propName));
    this.notifyPropertyAddition_(propName, newValue);
  };

  _proto.addComputedProp_ = function addComputedProp_(propertyOwner, // where is the property declared?
  propName, options) {
    var target = this.target_;
    options.name = options.name || this.name_ + "." + stringifyKey(propName);
    options.context = this.proxy_ || target;
    this.values_.set(propName, new ComputedValue(options)); // Doesn't seem we need this condition:
    // if (propertyOwner === target || isPropertyConfigurable(propertyOwner, propName))

    defineProperty(propertyOwner, propName, generateComputedPropConfig(propName));
  };

  _proto.remove_ = function remove_(key) {
    if (!this.values_.has(key)) return;
    var target = this.target_;

    if (hasInterceptors(this)) {
      var change = interceptChange(this, {
        object: this.proxy_ || target,
        name: key,
        type: REMOVE
      });
      if (!change) return;
    }

    try {
      startBatch();
      var notify = hasListeners(this);
      var notifySpy =  false && 0;
      var oldObservable = this.values_.get(key);
      var oldValue = oldObservable && oldObservable.get();
      oldObservable && oldObservable.set(undefined); // notify key and keyset listeners

      this.reportKeysChanged();
      this.values_["delete"](key);

      if (this.pendingKeys_) {
        var entry = this.pendingKeys_.get(key);
        if (entry) entry.set(false);
      } // delete the prop


      delete this.target_[key];

      var _change2 = notify || notifySpy ? {
        type: REMOVE,
        observableKind: "object",
        object: this.proxy_ || target,
        debugObjectName: this.name_,
        oldValue: oldValue,
        name: key
      } : null;

      if (false) {}
      if (notify) notifyListeners(this, _change2);
      if (false) {}
    } finally {
      endBatch();
    }
  }
  /**
   * Observes this object. Triggers for the events 'add', 'update' and 'delete'.
   * See: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/observe
   * for callback details
   */
  ;

  _proto.observe_ = function observe_(callback, fireImmediately) {
    if (false) {}
    return registerListener(this, callback);
  };

  _proto.intercept_ = function intercept_(handler) {
    return registerInterceptor(this, handler);
  };

  _proto.notifyPropertyAddition_ = function notifyPropertyAddition_(key, newValue) {
    var notify = hasListeners(this);
    var notifySpy =  false && 0;
    var change = notify || notifySpy ? {
      type: ADD,
      observableKind: "object",
      debugObjectName: this.name_,
      object: this.proxy_ || this.target_,
      name: key,
      newValue: newValue
    } : null;
    if (false) {}
    if (notify) notifyListeners(this, change);
    if (false) {}

    if (this.pendingKeys_) {
      var entry = this.pendingKeys_.get(key);
      if (entry) entry.set(true);
    }

    this.reportKeysChanged();
  };

  _proto.getKeys_ = function getKeys_() {
    this.keysAtom_.reportObserved();

    if (!this.isStaledKeysValue_) {
      return this.keysValue_;
    } // return Reflect.ownKeys(this.values) as any


    this.keysValue_ = [];

    for (var _iterator = _createForOfIteratorHelperLoose(this.values_), _step; !(_step = _iterator()).done;) {
      var _step$value = _step.value,
          key = _step$value[0],
          value = _step$value[1];
      if (value instanceof ObservableValue) this.keysValue_.push(key);
    }

    if (false) {}
    this.isStaledKeysValue_ = false;
    return this.keysValue_;
  };

  _proto.reportKeysChanged = function reportKeysChanged() {
    this.isStaledKeysValue_ = true;
    this.keysAtom_.reportChanged();
  };

  return ObservableObjectAdministration;
}();
function asObservableObject(target, name, defaultEnhancer) {
  if (name === void 0) {
    name = "";
  }

  if (defaultEnhancer === void 0) {
    defaultEnhancer = deepEnhancer;
  }

  if (hasProp(target, $mobx)) return target[$mobx];
  if (false) {}

  if (!name) {
    if (isPlainObject(target)) {
      name = "ObservableObject@" + getNextId();
    } else {
      name = (target.constructor.name || "ObservableObject") + "@" + getNextId();
    }
  }

  var adm = new ObservableObjectAdministration(target, new Map(), stringifyKey(name), defaultEnhancer);
  addHiddenProp(target, $mobx, adm);
  return adm;
}
var observablePropertyConfigs = /*#__PURE__*/Object.create(null);
var computedPropertyConfigs = /*#__PURE__*/Object.create(null);
function generateObservablePropConfig(propName) {
  return observablePropertyConfigs[propName] || (observablePropertyConfigs[propName] = {
    configurable: true,
    enumerable: true,
    get: function get() {
      return this[$mobx].read_(propName);
    },
    set: function set(v) {
      this[$mobx].write_(propName, v);
    }
  });
}
function generateComputedPropConfig(propName) {
  return computedPropertyConfigs[propName] || (computedPropertyConfigs[propName] = {
    configurable: true,
    enumerable: false,
    get: function get() {
      return this[$mobx].read_(propName);
    },
    set: function set(v) {
      this[$mobx].write_(propName, v);
    }
  });
}
var isObservableObjectAdministration = /*#__PURE__*/createInstanceofPredicate("ObservableObjectAdministration", ObservableObjectAdministration);
function isObservableObject(thing) {
  if (isObject(thing)) {
    return isObservableObjectAdministration(thing[$mobx]);
  }

  return false;
}

/**
 * This array buffer contains two lists of properties, so that all arrays
 * can recycle their property definitions, which significantly improves performance of creating
 * properties on the fly.
 */

var OBSERVABLE_ARRAY_BUFFER_SIZE = 0; // Typescript workaround to make sure ObservableArray extends Array

var StubArray = function StubArray() {};

function inherit(ctor, proto) {
  if (Object.setPrototypeOf) {
    Object.setPrototypeOf(ctor.prototype, proto);
  } else if (ctor.prototype.__proto__ !== undefined) {
    ctor.prototype.__proto__ = proto;
  } else {
    ctor.prototype = proto;
  }
}

inherit(StubArray, Array.prototype); // Weex proto freeze protection was here,
// but it is unclear why the hack is need as MobX never changed the prototype
// anyway, so removed it in V6

var LegacyObservableArray = /*#__PURE__*/function (_StubArray) {
  _inheritsLoose(LegacyObservableArray, _StubArray);

  function LegacyObservableArray(initialValues, enhancer, name, owned) {
    var _this;

    if (name === void 0) {
      name = "ObservableArray@" + getNextId();
    }

    if (owned === void 0) {
      owned = false;
    }

    _this = _StubArray.call(this) || this;
    var adm = new ObservableArrayAdministration(name, enhancer, owned, true);
    adm.proxy_ = _assertThisInitialized(_this);
    addHiddenFinalProp(_assertThisInitialized(_this), $mobx, adm);

    if (initialValues && initialValues.length) {
      var prev = allowStateChangesStart(true); // @ts-ignore

      _this.spliceWithArray(0, 0, initialValues);

      allowStateChangesEnd(prev);
    }

    return _this;
  }

  var _proto = LegacyObservableArray.prototype;

  _proto.concat = function concat() {
    this[$mobx].atom_.reportObserved();

    for (var _len = arguments.length, arrays = new Array(_len), _key = 0; _key < _len; _key++) {
      arrays[_key] = arguments[_key];
    }

    return Array.prototype.concat.apply(this.slice(), //@ts-ignore
    arrays.map(function (a) {
      return isObservableArray(a) ? a.slice() : a;
    }));
  };

  _proto[Symbol.iterator] = function () {
    var self = this;
    var nextIndex = 0;
    return makeIterable({
      next: function next() {
        // @ts-ignore
        return nextIndex < self.length ? {
          value: self[nextIndex++],
          done: false
        } : {
          done: true,
          value: undefined
        };
      }
    });
  };

  _createClass(LegacyObservableArray, [{
    key: "length",
    get: function get() {
      return this[$mobx].getArrayLength_();
    },
    set: function set(newLength) {
      this[$mobx].setArrayLength_(newLength);
    }
  }, {
    key: Symbol.toStringTag,
    get: function get() {
      return "Array";
    }
  }]);

  return LegacyObservableArray;
}(StubArray);

Object.entries(arrayExtensions).forEach(function (_ref) {
  var prop = _ref[0],
      fn = _ref[1];
  if (prop !== "concat") addHiddenProp(LegacyObservableArray.prototype, prop, fn);
});

function createArrayEntryDescriptor(index) {
  return {
    enumerable: false,
    configurable: true,
    get: function get() {
      return this[$mobx].get_(index);
    },
    set: function set(value) {
      this[$mobx].set_(index, value);
    }
  };
}

function createArrayBufferItem(index) {
  defineProperty(LegacyObservableArray.prototype, "" + index, createArrayEntryDescriptor(index));
}

function reserveArrayBuffer(max) {
  if (max > OBSERVABLE_ARRAY_BUFFER_SIZE) {
    for (var index = OBSERVABLE_ARRAY_BUFFER_SIZE; index < max + 100; index++) {
      createArrayBufferItem(index);
    }

    OBSERVABLE_ARRAY_BUFFER_SIZE = max;
  }
}
reserveArrayBuffer(1000);
function createLegacyArray(initialValues, enhancer, name) {
  return new LegacyObservableArray(initialValues, enhancer, name);
}

function getAtom(thing, property) {
  if (typeof thing === "object" && thing !== null) {
    if (isObservableArray(thing)) {
      if (property !== undefined) die(23);
      return thing[$mobx].atom_;
    }

    if (isObservableSet(thing)) {
      return thing[$mobx];
    }

    if (isObservableMap(thing)) {
      if (property === undefined) return thing.keysAtom_;
      var observable = thing.data_.get(property) || thing.hasMap_.get(property);
      if (!observable) die(25, property, getDebugName(thing));
      return observable;
    }

    if (isObservableObject(thing)) {
      if (!property) return die(26);

      var _observable = thing[$mobx].values_.get(property);

      if (!_observable) die(27, property, getDebugName(thing));
      return _observable;
    }

    if (isAtom(thing) || isComputedValue(thing) || isReaction(thing)) {
      return thing;
    }
  } else if (isFunction(thing)) {
    if (isReaction(thing[$mobx])) {
      // disposer function
      return thing[$mobx];
    }
  }

  die(28);
}
function getAdministration(thing, property) {
  if (!thing) die(29);
  if (property !== undefined) return getAdministration(getAtom(thing, property));
  if (isAtom(thing) || isComputedValue(thing) || isReaction(thing)) return thing;
  if (isObservableMap(thing) || isObservableSet(thing)) return thing;
  if (thing[$mobx]) return thing[$mobx];
  die(24, thing);
}
function getDebugName(thing, property) {
  var named;
  if (property !== undefined) named = getAtom(thing, property);else if (isObservableObject(thing) || isObservableMap(thing) || isObservableSet(thing)) named = getAdministration(thing);else named = getAtom(thing); // valid for arrays as well

  return named.name_;
}

var toString = objectPrototype.toString;
function deepEqual(a, b, depth) {
  if (depth === void 0) {
    depth = -1;
  }

  return eq(a, b, depth);
} // Copied from https://github.com/jashkenas/underscore/blob/5c237a7c682fb68fd5378203f0bf22dce1624854/underscore.js#L1186-L1289
// Internal recursive comparison function for `isEqual`.

function eq(a, b, depth, aStack, bStack) {
  // Identical objects are equal. `0 === -0`, but they aren't identical.
  // See the [Harmony `egal` proposal](http://wiki.ecmascript.org/doku.php?id=harmony:egal).
  if (a === b) return a !== 0 || 1 / a === 1 / b; // `null` or `undefined` only equal to itself (strict comparison).

  if (a == null || b == null) return false; // `NaN`s are equivalent, but non-reflexive.

  if (a !== a) return b !== b; // Exhaust primitive checks

  var type = typeof a;
  if (!isFunction(type) && type !== "object" && typeof b != "object") return false; // Compare `[[Class]]` names.

  var className = toString.call(a);
  if (className !== toString.call(b)) return false;

  switch (className) {
    // Strings, numbers, regular expressions, dates, and booleans are compared by value.
    case "[object RegExp]": // RegExps are coerced to strings for comparison (Note: '' + /a/i === '/a/i')

    case "[object String]":
      // Primitives and their corresponding object wrappers are equivalent; thus, `"5"` is
      // equivalent to `new String("5")`.
      return "" + a === "" + b;

    case "[object Number]":
      // `NaN`s are equivalent, but non-reflexive.
      // Object(NaN) is equivalent to NaN.
      if (+a !== +a) return +b !== +b; // An `egal` comparison is performed for other numeric values.

      return +a === 0 ? 1 / +a === 1 / b : +a === +b;

    case "[object Date]":
    case "[object Boolean]":
      // Coerce dates and booleans to numeric primitive values. Dates are compared by their
      // millisecond representations. Note that invalid dates with millisecond representations
      // of `NaN` are not equivalent.
      return +a === +b;

    case "[object Symbol]":
      return typeof Symbol !== "undefined" && Symbol.valueOf.call(a) === Symbol.valueOf.call(b);

    case "[object Map]":
    case "[object Set]":
      // Maps and Sets are unwrapped to arrays of entry-pairs, adding an incidental level.
      // Hide this extra level by increasing the depth.
      if (depth >= 0) {
        depth++;
      }

      break;
  } // Unwrap any wrapped objects.


  a = unwrap(a);
  b = unwrap(b);
  var areArrays = className === "[object Array]";

  if (!areArrays) {
    if (typeof a != "object" || typeof b != "object") return false; // Objects with different constructors are not equivalent, but `Object`s or `Array`s
    // from different frames are.

    var aCtor = a.constructor,
        bCtor = b.constructor;

    if (aCtor !== bCtor && !(isFunction(aCtor) && aCtor instanceof aCtor && isFunction(bCtor) && bCtor instanceof bCtor) && "constructor" in a && "constructor" in b) {
      return false;
    }
  }

  if (depth === 0) {
    return false;
  } else if (depth < 0) {
    depth = -1;
  } // Assume equality for cyclic structures. The algorithm for detecting cyclic
  // structures is adapted from ES 5.1 section 15.12.3, abstract operation `JO`.
  // Initializing stack of traversed objects.
  // It's done here since we only need them for objects and arrays comparison.


  aStack = aStack || [];
  bStack = bStack || [];
  var length = aStack.length;

  while (length--) {
    // Linear search. Performance is inversely proportional to the number of
    // unique nested structures.
    if (aStack[length] === a) return bStack[length] === b;
  } // Add the first object to the stack of traversed objects.


  aStack.push(a);
  bStack.push(b); // Recursively compare objects and arrays.

  if (areArrays) {
    // Compare array lengths to determine if a deep comparison is necessary.
    length = a.length;
    if (length !== b.length) return false; // Deep compare the contents, ignoring non-numeric properties.

    while (length--) {
      if (!eq(a[length], b[length], depth - 1, aStack, bStack)) return false;
    }
  } else {
    // Deep compare objects.
    var keys = Object.keys(a);
    var key;
    length = keys.length; // Ensure that both objects contain the same number of properties before comparing deep equality.

    if (Object.keys(b).length !== length) return false;

    while (length--) {
      // Deep compare each member
      key = keys[length];
      if (!(hasProp(b, key) && eq(a[key], b[key], depth - 1, aStack, bStack))) return false;
    }
  } // Remove the first object from the stack of traversed objects.


  aStack.pop();
  bStack.pop();
  return true;
}

function unwrap(a) {
  if (isObservableArray(a)) return a.slice();
  if (isES6Map(a) || isObservableMap(a)) return Array.from(a.entries());
  if (isES6Set(a) || isObservableSet(a)) return Array.from(a.entries());
  return a;
}

function makeIterable(iterator) {
  iterator[Symbol.iterator] = getSelf;
  return iterator;
}

function getSelf() {
  return this;
}

/**
 * (c) Michel Weststrate 2015 - 2020
 * MIT Licensed
 *
 * Welcome to the mobx sources! To get an global overview of how MobX internally works,
 * this is a good place to start:
 * https://medium.com/@mweststrate/becoming-fully-reactive-an-in-depth-explanation-of-mobservable-55995262a254#.xvbh6qd74
 *
 * Source folders:
 * ===============
 *
 * - api/     Most of the public static methods exposed by the module can be found here.
 * - core/    Implementation of the MobX algorithm; atoms, derivations, reactions, dependency trees, optimizations. Cool stuff can be found here.
 * - types/   All the magic that is need to have observable objects, arrays and values is in this folder. Including the modifiers like `asFlat`.
 * - utils/   Utility stuff.
 *
 */
["Symbol", "Map", "Set", "Symbol"].forEach(function (m) {
  var g = getGlobal();

  if (typeof g[m] === "undefined") {
    die("MobX requires global '" + m + "' to be available or polyfilled");
  }
});

if (typeof __MOBX_DEVTOOLS_GLOBAL_HOOK__ === "object") {
  // See: https://github.com/andykog/mobx-devtools/
  __MOBX_DEVTOOLS_GLOBAL_HOOK__.injectMobx({
    spy: spy,
    extras: {
      getDebugName: getDebugName
    },
    $mobx: $mobx
  });
}


//# sourceMappingURL=mobx.esm.js.map


/***/ }),

/***/ 418:
/***/ ((module) => {

"use strict";
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/


/* eslint-disable no-unused-vars */
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var propIsEnumerable = Object.prototype.propertyIsEnumerable;

function toObject(val) {
	if (val === null || val === undefined) {
		throw new TypeError('Object.assign cannot be called with null or undefined');
	}

	return Object(val);
}

function shouldUseNative() {
	try {
		if (!Object.assign) {
			return false;
		}

		// Detect buggy property enumeration order in older V8 versions.

		// https://bugs.chromium.org/p/v8/issues/detail?id=4118
		var test1 = new String('abc');  // eslint-disable-line no-new-wrappers
		test1[5] = 'de';
		if (Object.getOwnPropertyNames(test1)[0] === '5') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test2 = {};
		for (var i = 0; i < 10; i++) {
			test2['_' + String.fromCharCode(i)] = i;
		}
		var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
			return test2[n];
		});
		if (order2.join('') !== '0123456789') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test3 = {};
		'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
			test3[letter] = letter;
		});
		if (Object.keys(Object.assign({}, test3)).join('') !==
				'abcdefghijklmnopqrst') {
			return false;
		}

		return true;
	} catch (err) {
		// We don't expect any of the above to throw, but better to be safe.
		return false;
	}
}

module.exports = shouldUseNative() ? Object.assign : function (target, source) {
	var from;
	var to = toObject(target);
	var symbols;

	for (var s = 1; s < arguments.length; s++) {
		from = Object(arguments[s]);

		for (var key in from) {
			if (hasOwnProperty.call(from, key)) {
				to[key] = from[key];
			}
		}

		if (getOwnPropertySymbols) {
			symbols = getOwnPropertySymbols(from);
			for (var i = 0; i < symbols.length; i++) {
				if (propIsEnumerable.call(from, symbols[i])) {
					to[symbols[i]] = from[symbols[i]];
				}
			}
		}
	}

	return to;
};


/***/ }),

/***/ 448:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
var __webpack_unused_export__;
/** @license React v17.0.1
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
/*
 Modernizr 3.0.0pre (Custom Build) | MIT
*/
var aa=__webpack_require__(294),m=__webpack_require__(418),r=__webpack_require__(840);function y(a){for(var b="https://reactjs.org/docs/error-decoder.html?invariant="+a,c=1;c<arguments.length;c++)b+="&args[]="+encodeURIComponent(arguments[c]);return"Minified React error #"+a+"; visit "+b+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}if(!aa)throw Error(y(227));var ba=new Set,ca={};function da(a,b){ea(a,b);ea(a+"Capture",b)}
function ea(a,b){ca[a]=b;for(a=0;a<b.length;a++)ba.add(b[a])}
var fa=!("undefined"===typeof window||"undefined"===typeof window.document||"undefined"===typeof window.document.createElement),ha=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,ia=Object.prototype.hasOwnProperty,
ja={},ka={};function la(a){if(ia.call(ka,a))return!0;if(ia.call(ja,a))return!1;if(ha.test(a))return ka[a]=!0;ja[a]=!0;return!1}function ma(a,b,c,d){if(null!==c&&0===c.type)return!1;switch(typeof b){case "function":case "symbol":return!0;case "boolean":if(d)return!1;if(null!==c)return!c.acceptsBooleans;a=a.toLowerCase().slice(0,5);return"data-"!==a&&"aria-"!==a;default:return!1}}
function na(a,b,c,d){if(null===b||"undefined"===typeof b||ma(a,b,c,d))return!0;if(d)return!1;if(null!==c)switch(c.type){case 3:return!b;case 4:return!1===b;case 5:return isNaN(b);case 6:return isNaN(b)||1>b}return!1}function B(a,b,c,d,e,f,g){this.acceptsBooleans=2===b||3===b||4===b;this.attributeName=d;this.attributeNamespace=e;this.mustUseProperty=c;this.propertyName=a;this.type=b;this.sanitizeURL=f;this.removeEmptyString=g}var D={};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(a){D[a]=new B(a,0,!1,a,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(a){var b=a[0];D[b]=new B(b,1,!1,a[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(a){D[a]=new B(a,2,!1,a.toLowerCase(),null,!1,!1)});
["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(a){D[a]=new B(a,2,!1,a,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(a){D[a]=new B(a,3,!1,a.toLowerCase(),null,!1,!1)});
["checked","multiple","muted","selected"].forEach(function(a){D[a]=new B(a,3,!0,a,null,!1,!1)});["capture","download"].forEach(function(a){D[a]=new B(a,4,!1,a,null,!1,!1)});["cols","rows","size","span"].forEach(function(a){D[a]=new B(a,6,!1,a,null,!1,!1)});["rowSpan","start"].forEach(function(a){D[a]=new B(a,5,!1,a.toLowerCase(),null,!1,!1)});var oa=/[\-:]([a-z])/g;function pa(a){return a[1].toUpperCase()}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(a){var b=a.replace(oa,
pa);D[b]=new B(b,1,!1,a,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(a){var b=a.replace(oa,pa);D[b]=new B(b,1,!1,a,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(a){var b=a.replace(oa,pa);D[b]=new B(b,1,!1,a,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(a){D[a]=new B(a,1,!1,a.toLowerCase(),null,!1,!1)});
D.xlinkHref=new B("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(a){D[a]=new B(a,1,!1,a.toLowerCase(),null,!0,!0)});
function qa(a,b,c,d){var e=D.hasOwnProperty(b)?D[b]:null;var f=null!==e?0===e.type:d?!1:!(2<b.length)||"o"!==b[0]&&"O"!==b[0]||"n"!==b[1]&&"N"!==b[1]?!1:!0;f||(na(b,c,e,d)&&(c=null),d||null===e?la(b)&&(null===c?a.removeAttribute(b):a.setAttribute(b,""+c)):e.mustUseProperty?a[e.propertyName]=null===c?3===e.type?!1:"":c:(b=e.attributeName,d=e.attributeNamespace,null===c?a.removeAttribute(b):(e=e.type,c=3===e||4===e&&!0===c?"":""+c,d?a.setAttributeNS(d,b,c):a.setAttribute(b,c))))}
var ra=aa.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,sa=60103,ta=60106,ua=60107,wa=60108,xa=60114,ya=60109,za=60110,Aa=60112,Ba=60113,Ca=60120,Da=60115,Ea=60116,Fa=60121,Ga=60128,Ha=60129,Ia=60130,Ja=60131;
if("function"===typeof Symbol&&Symbol.for){var E=Symbol.for;sa=E("react.element");ta=E("react.portal");ua=E("react.fragment");wa=E("react.strict_mode");xa=E("react.profiler");ya=E("react.provider");za=E("react.context");Aa=E("react.forward_ref");Ba=E("react.suspense");Ca=E("react.suspense_list");Da=E("react.memo");Ea=E("react.lazy");Fa=E("react.block");E("react.scope");Ga=E("react.opaque.id");Ha=E("react.debug_trace_mode");Ia=E("react.offscreen");Ja=E("react.legacy_hidden")}
var Ka="function"===typeof Symbol&&Symbol.iterator;function La(a){if(null===a||"object"!==typeof a)return null;a=Ka&&a[Ka]||a["@@iterator"];return"function"===typeof a?a:null}var Ma;function Na(a){if(void 0===Ma)try{throw Error();}catch(c){var b=c.stack.trim().match(/\n( *(at )?)/);Ma=b&&b[1]||""}return"\n"+Ma+a}var Oa=!1;
function Pa(a,b){if(!a||Oa)return"";Oa=!0;var c=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(b)if(b=function(){throw Error();},Object.defineProperty(b.prototype,"props",{set:function(){throw Error();}}),"object"===typeof Reflect&&Reflect.construct){try{Reflect.construct(b,[])}catch(k){var d=k}Reflect.construct(a,[],b)}else{try{b.call()}catch(k){d=k}a.call(b.prototype)}else{try{throw Error();}catch(k){d=k}a()}}catch(k){if(k&&d&&"string"===typeof k.stack){for(var e=k.stack.split("\n"),
f=d.stack.split("\n"),g=e.length-1,h=f.length-1;1<=g&&0<=h&&e[g]!==f[h];)h--;for(;1<=g&&0<=h;g--,h--)if(e[g]!==f[h]){if(1!==g||1!==h){do if(g--,h--,0>h||e[g]!==f[h])return"\n"+e[g].replace(" at new "," at ");while(1<=g&&0<=h)}break}}}finally{Oa=!1,Error.prepareStackTrace=c}return(a=a?a.displayName||a.name:"")?Na(a):""}
function Qa(a){switch(a.tag){case 5:return Na(a.type);case 16:return Na("Lazy");case 13:return Na("Suspense");case 19:return Na("SuspenseList");case 0:case 2:case 15:return a=Pa(a.type,!1),a;case 11:return a=Pa(a.type.render,!1),a;case 22:return a=Pa(a.type._render,!1),a;case 1:return a=Pa(a.type,!0),a;default:return""}}
function Ra(a){if(null==a)return null;if("function"===typeof a)return a.displayName||a.name||null;if("string"===typeof a)return a;switch(a){case ua:return"Fragment";case ta:return"Portal";case xa:return"Profiler";case wa:return"StrictMode";case Ba:return"Suspense";case Ca:return"SuspenseList"}if("object"===typeof a)switch(a.$$typeof){case za:return(a.displayName||"Context")+".Consumer";case ya:return(a._context.displayName||"Context")+".Provider";case Aa:var b=a.render;b=b.displayName||b.name||"";
return a.displayName||(""!==b?"ForwardRef("+b+")":"ForwardRef");case Da:return Ra(a.type);case Fa:return Ra(a._render);case Ea:b=a._payload;a=a._init;try{return Ra(a(b))}catch(c){}}return null}function Sa(a){switch(typeof a){case "boolean":case "number":case "object":case "string":case "undefined":return a;default:return""}}function Ta(a){var b=a.type;return(a=a.nodeName)&&"input"===a.toLowerCase()&&("checkbox"===b||"radio"===b)}
function Ua(a){var b=Ta(a)?"checked":"value",c=Object.getOwnPropertyDescriptor(a.constructor.prototype,b),d=""+a[b];if(!a.hasOwnProperty(b)&&"undefined"!==typeof c&&"function"===typeof c.get&&"function"===typeof c.set){var e=c.get,f=c.set;Object.defineProperty(a,b,{configurable:!0,get:function(){return e.call(this)},set:function(a){d=""+a;f.call(this,a)}});Object.defineProperty(a,b,{enumerable:c.enumerable});return{getValue:function(){return d},setValue:function(a){d=""+a},stopTracking:function(){a._valueTracker=
null;delete a[b]}}}}function Va(a){a._valueTracker||(a._valueTracker=Ua(a))}function Wa(a){if(!a)return!1;var b=a._valueTracker;if(!b)return!0;var c=b.getValue();var d="";a&&(d=Ta(a)?a.checked?"true":"false":a.value);a=d;return a!==c?(b.setValue(a),!0):!1}function Xa(a){a=a||("undefined"!==typeof document?document:void 0);if("undefined"===typeof a)return null;try{return a.activeElement||a.body}catch(b){return a.body}}
function Ya(a,b){var c=b.checked;return m({},b,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:null!=c?c:a._wrapperState.initialChecked})}function Za(a,b){var c=null==b.defaultValue?"":b.defaultValue,d=null!=b.checked?b.checked:b.defaultChecked;c=Sa(null!=b.value?b.value:c);a._wrapperState={initialChecked:d,initialValue:c,controlled:"checkbox"===b.type||"radio"===b.type?null!=b.checked:null!=b.value}}function $a(a,b){b=b.checked;null!=b&&qa(a,"checked",b,!1)}
function ab(a,b){$a(a,b);var c=Sa(b.value),d=b.type;if(null!=c)if("number"===d){if(0===c&&""===a.value||a.value!=c)a.value=""+c}else a.value!==""+c&&(a.value=""+c);else if("submit"===d||"reset"===d){a.removeAttribute("value");return}b.hasOwnProperty("value")?bb(a,b.type,c):b.hasOwnProperty("defaultValue")&&bb(a,b.type,Sa(b.defaultValue));null==b.checked&&null!=b.defaultChecked&&(a.defaultChecked=!!b.defaultChecked)}
function cb(a,b,c){if(b.hasOwnProperty("value")||b.hasOwnProperty("defaultValue")){var d=b.type;if(!("submit"!==d&&"reset"!==d||void 0!==b.value&&null!==b.value))return;b=""+a._wrapperState.initialValue;c||b===a.value||(a.value=b);a.defaultValue=b}c=a.name;""!==c&&(a.name="");a.defaultChecked=!!a._wrapperState.initialChecked;""!==c&&(a.name=c)}
function bb(a,b,c){if("number"!==b||Xa(a.ownerDocument)!==a)null==c?a.defaultValue=""+a._wrapperState.initialValue:a.defaultValue!==""+c&&(a.defaultValue=""+c)}function db(a){var b="";aa.Children.forEach(a,function(a){null!=a&&(b+=a)});return b}function eb(a,b){a=m({children:void 0},b);if(b=db(b.children))a.children=b;return a}
function fb(a,b,c,d){a=a.options;if(b){b={};for(var e=0;e<c.length;e++)b["$"+c[e]]=!0;for(c=0;c<a.length;c++)e=b.hasOwnProperty("$"+a[c].value),a[c].selected!==e&&(a[c].selected=e),e&&d&&(a[c].defaultSelected=!0)}else{c=""+Sa(c);b=null;for(e=0;e<a.length;e++){if(a[e].value===c){a[e].selected=!0;d&&(a[e].defaultSelected=!0);return}null!==b||a[e].disabled||(b=a[e])}null!==b&&(b.selected=!0)}}
function gb(a,b){if(null!=b.dangerouslySetInnerHTML)throw Error(y(91));return m({},b,{value:void 0,defaultValue:void 0,children:""+a._wrapperState.initialValue})}function hb(a,b){var c=b.value;if(null==c){c=b.children;b=b.defaultValue;if(null!=c){if(null!=b)throw Error(y(92));if(Array.isArray(c)){if(!(1>=c.length))throw Error(y(93));c=c[0]}b=c}null==b&&(b="");c=b}a._wrapperState={initialValue:Sa(c)}}
function ib(a,b){var c=Sa(b.value),d=Sa(b.defaultValue);null!=c&&(c=""+c,c!==a.value&&(a.value=c),null==b.defaultValue&&a.defaultValue!==c&&(a.defaultValue=c));null!=d&&(a.defaultValue=""+d)}function jb(a){var b=a.textContent;b===a._wrapperState.initialValue&&""!==b&&null!==b&&(a.value=b)}var kb={html:"http://www.w3.org/1999/xhtml",mathml:"http://www.w3.org/1998/Math/MathML",svg:"http://www.w3.org/2000/svg"};
function lb(a){switch(a){case "svg":return"http://www.w3.org/2000/svg";case "math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function mb(a,b){return null==a||"http://www.w3.org/1999/xhtml"===a?lb(b):"http://www.w3.org/2000/svg"===a&&"foreignObject"===b?"http://www.w3.org/1999/xhtml":a}
var nb,ob=function(a){return"undefined"!==typeof MSApp&&MSApp.execUnsafeLocalFunction?function(b,c,d,e){MSApp.execUnsafeLocalFunction(function(){return a(b,c,d,e)})}:a}(function(a,b){if(a.namespaceURI!==kb.svg||"innerHTML"in a)a.innerHTML=b;else{nb=nb||document.createElement("div");nb.innerHTML="<svg>"+b.valueOf().toString()+"</svg>";for(b=nb.firstChild;a.firstChild;)a.removeChild(a.firstChild);for(;b.firstChild;)a.appendChild(b.firstChild)}});
function pb(a,b){if(b){var c=a.firstChild;if(c&&c===a.lastChild&&3===c.nodeType){c.nodeValue=b;return}}a.textContent=b}
var qb={animationIterationCount:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,
floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},rb=["Webkit","ms","Moz","O"];Object.keys(qb).forEach(function(a){rb.forEach(function(b){b=b+a.charAt(0).toUpperCase()+a.substring(1);qb[b]=qb[a]})});function sb(a,b,c){return null==b||"boolean"===typeof b||""===b?"":c||"number"!==typeof b||0===b||qb.hasOwnProperty(a)&&qb[a]?(""+b).trim():b+"px"}
function tb(a,b){a=a.style;for(var c in b)if(b.hasOwnProperty(c)){var d=0===c.indexOf("--"),e=sb(c,b[c],d);"float"===c&&(c="cssFloat");d?a.setProperty(c,e):a[c]=e}}var ub=m({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});
function vb(a,b){if(b){if(ub[a]&&(null!=b.children||null!=b.dangerouslySetInnerHTML))throw Error(y(137,a));if(null!=b.dangerouslySetInnerHTML){if(null!=b.children)throw Error(y(60));if(!("object"===typeof b.dangerouslySetInnerHTML&&"__html"in b.dangerouslySetInnerHTML))throw Error(y(61));}if(null!=b.style&&"object"!==typeof b.style)throw Error(y(62));}}
function wb(a,b){if(-1===a.indexOf("-"))return"string"===typeof b.is;switch(a){case "annotation-xml":case "color-profile":case "font-face":case "font-face-src":case "font-face-uri":case "font-face-format":case "font-face-name":case "missing-glyph":return!1;default:return!0}}function xb(a){a=a.target||a.srcElement||window;a.correspondingUseElement&&(a=a.correspondingUseElement);return 3===a.nodeType?a.parentNode:a}var yb=null,zb=null,Ab=null;
function Bb(a){if(a=Cb(a)){if("function"!==typeof yb)throw Error(y(280));var b=a.stateNode;b&&(b=Db(b),yb(a.stateNode,a.type,b))}}function Eb(a){zb?Ab?Ab.push(a):Ab=[a]:zb=a}function Fb(){if(zb){var a=zb,b=Ab;Ab=zb=null;Bb(a);if(b)for(a=0;a<b.length;a++)Bb(b[a])}}function Gb(a,b){return a(b)}function Hb(a,b,c,d,e){return a(b,c,d,e)}function Ib(){}var Jb=Gb,Kb=!1,Lb=!1;function Mb(){if(null!==zb||null!==Ab)Ib(),Fb()}
function Nb(a,b,c){if(Lb)return a(b,c);Lb=!0;try{return Jb(a,b,c)}finally{Lb=!1,Mb()}}
function Ob(a,b){var c=a.stateNode;if(null===c)return null;var d=Db(c);if(null===d)return null;c=d[b];a:switch(b){case "onClick":case "onClickCapture":case "onDoubleClick":case "onDoubleClickCapture":case "onMouseDown":case "onMouseDownCapture":case "onMouseMove":case "onMouseMoveCapture":case "onMouseUp":case "onMouseUpCapture":case "onMouseEnter":(d=!d.disabled)||(a=a.type,d=!("button"===a||"input"===a||"select"===a||"textarea"===a));a=!d;break a;default:a=!1}if(a)return null;if(c&&"function"!==
typeof c)throw Error(y(231,b,typeof c));return c}var Pb=!1;if(fa)try{var Qb={};Object.defineProperty(Qb,"passive",{get:function(){Pb=!0}});window.addEventListener("test",Qb,Qb);window.removeEventListener("test",Qb,Qb)}catch(a){Pb=!1}function Rb(a,b,c,d,e,f,g,h,k){var l=Array.prototype.slice.call(arguments,3);try{b.apply(c,l)}catch(n){this.onError(n)}}var Sb=!1,Tb=null,Ub=!1,Vb=null,Wb={onError:function(a){Sb=!0;Tb=a}};function Xb(a,b,c,d,e,f,g,h,k){Sb=!1;Tb=null;Rb.apply(Wb,arguments)}
function Yb(a,b,c,d,e,f,g,h,k){Xb.apply(this,arguments);if(Sb){if(Sb){var l=Tb;Sb=!1;Tb=null}else throw Error(y(198));Ub||(Ub=!0,Vb=l)}}function Zb(a){var b=a,c=a;if(a.alternate)for(;b.return;)b=b.return;else{a=b;do b=a,0!==(b.flags&1026)&&(c=b.return),a=b.return;while(a)}return 3===b.tag?c:null}function $b(a){if(13===a.tag){var b=a.memoizedState;null===b&&(a=a.alternate,null!==a&&(b=a.memoizedState));if(null!==b)return b.dehydrated}return null}function ac(a){if(Zb(a)!==a)throw Error(y(188));}
function bc(a){var b=a.alternate;if(!b){b=Zb(a);if(null===b)throw Error(y(188));return b!==a?null:a}for(var c=a,d=b;;){var e=c.return;if(null===e)break;var f=e.alternate;if(null===f){d=e.return;if(null!==d){c=d;continue}break}if(e.child===f.child){for(f=e.child;f;){if(f===c)return ac(e),a;if(f===d)return ac(e),b;f=f.sibling}throw Error(y(188));}if(c.return!==d.return)c=e,d=f;else{for(var g=!1,h=e.child;h;){if(h===c){g=!0;c=e;d=f;break}if(h===d){g=!0;d=e;c=f;break}h=h.sibling}if(!g){for(h=f.child;h;){if(h===
c){g=!0;c=f;d=e;break}if(h===d){g=!0;d=f;c=e;break}h=h.sibling}if(!g)throw Error(y(189));}}if(c.alternate!==d)throw Error(y(190));}if(3!==c.tag)throw Error(y(188));return c.stateNode.current===c?a:b}function cc(a){a=bc(a);if(!a)return null;for(var b=a;;){if(5===b.tag||6===b.tag)return b;if(b.child)b.child.return=b,b=b.child;else{if(b===a)break;for(;!b.sibling;){if(!b.return||b.return===a)return null;b=b.return}b.sibling.return=b.return;b=b.sibling}}return null}
function dc(a,b){for(var c=a.alternate;null!==b;){if(b===a||b===c)return!0;b=b.return}return!1}var ec,fc,gc,hc,ic=!1,jc=[],kc=null,lc=null,mc=null,nc=new Map,oc=new Map,pc=[],qc="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
function rc(a,b,c,d,e){return{blockedOn:a,domEventName:b,eventSystemFlags:c|16,nativeEvent:e,targetContainers:[d]}}function sc(a,b){switch(a){case "focusin":case "focusout":kc=null;break;case "dragenter":case "dragleave":lc=null;break;case "mouseover":case "mouseout":mc=null;break;case "pointerover":case "pointerout":nc.delete(b.pointerId);break;case "gotpointercapture":case "lostpointercapture":oc.delete(b.pointerId)}}
function tc(a,b,c,d,e,f){if(null===a||a.nativeEvent!==f)return a=rc(b,c,d,e,f),null!==b&&(b=Cb(b),null!==b&&fc(b)),a;a.eventSystemFlags|=d;b=a.targetContainers;null!==e&&-1===b.indexOf(e)&&b.push(e);return a}
function uc(a,b,c,d,e){switch(b){case "focusin":return kc=tc(kc,a,b,c,d,e),!0;case "dragenter":return lc=tc(lc,a,b,c,d,e),!0;case "mouseover":return mc=tc(mc,a,b,c,d,e),!0;case "pointerover":var f=e.pointerId;nc.set(f,tc(nc.get(f)||null,a,b,c,d,e));return!0;case "gotpointercapture":return f=e.pointerId,oc.set(f,tc(oc.get(f)||null,a,b,c,d,e)),!0}return!1}
function vc(a){var b=wc(a.target);if(null!==b){var c=Zb(b);if(null!==c)if(b=c.tag,13===b){if(b=$b(c),null!==b){a.blockedOn=b;hc(a.lanePriority,function(){r.unstable_runWithPriority(a.priority,function(){gc(c)})});return}}else if(3===b&&c.stateNode.hydrate){a.blockedOn=3===c.tag?c.stateNode.containerInfo:null;return}}a.blockedOn=null}
function xc(a){if(null!==a.blockedOn)return!1;for(var b=a.targetContainers;0<b.length;){var c=yc(a.domEventName,a.eventSystemFlags,b[0],a.nativeEvent);if(null!==c)return b=Cb(c),null!==b&&fc(b),a.blockedOn=c,!1;b.shift()}return!0}function zc(a,b,c){xc(a)&&c.delete(b)}
function Ac(){for(ic=!1;0<jc.length;){var a=jc[0];if(null!==a.blockedOn){a=Cb(a.blockedOn);null!==a&&ec(a);break}for(var b=a.targetContainers;0<b.length;){var c=yc(a.domEventName,a.eventSystemFlags,b[0],a.nativeEvent);if(null!==c){a.blockedOn=c;break}b.shift()}null===a.blockedOn&&jc.shift()}null!==kc&&xc(kc)&&(kc=null);null!==lc&&xc(lc)&&(lc=null);null!==mc&&xc(mc)&&(mc=null);nc.forEach(zc);oc.forEach(zc)}
function Bc(a,b){a.blockedOn===b&&(a.blockedOn=null,ic||(ic=!0,r.unstable_scheduleCallback(r.unstable_NormalPriority,Ac)))}
function Cc(a){function b(b){return Bc(b,a)}if(0<jc.length){Bc(jc[0],a);for(var c=1;c<jc.length;c++){var d=jc[c];d.blockedOn===a&&(d.blockedOn=null)}}null!==kc&&Bc(kc,a);null!==lc&&Bc(lc,a);null!==mc&&Bc(mc,a);nc.forEach(b);oc.forEach(b);for(c=0;c<pc.length;c++)d=pc[c],d.blockedOn===a&&(d.blockedOn=null);for(;0<pc.length&&(c=pc[0],null===c.blockedOn);)vc(c),null===c.blockedOn&&pc.shift()}
function Dc(a,b){var c={};c[a.toLowerCase()]=b.toLowerCase();c["Webkit"+a]="webkit"+b;c["Moz"+a]="moz"+b;return c}var Ec={animationend:Dc("Animation","AnimationEnd"),animationiteration:Dc("Animation","AnimationIteration"),animationstart:Dc("Animation","AnimationStart"),transitionend:Dc("Transition","TransitionEnd")},Fc={},Gc={};
fa&&(Gc=document.createElement("div").style,"AnimationEvent"in window||(delete Ec.animationend.animation,delete Ec.animationiteration.animation,delete Ec.animationstart.animation),"TransitionEvent"in window||delete Ec.transitionend.transition);function Hc(a){if(Fc[a])return Fc[a];if(!Ec[a])return a;var b=Ec[a],c;for(c in b)if(b.hasOwnProperty(c)&&c in Gc)return Fc[a]=b[c];return a}
var Ic=Hc("animationend"),Jc=Hc("animationiteration"),Kc=Hc("animationstart"),Lc=Hc("transitionend"),Mc=new Map,Nc=new Map,Oc=["abort","abort",Ic,"animationEnd",Jc,"animationIteration",Kc,"animationStart","canplay","canPlay","canplaythrough","canPlayThrough","durationchange","durationChange","emptied","emptied","encrypted","encrypted","ended","ended","error","error","gotpointercapture","gotPointerCapture","load","load","loadeddata","loadedData","loadedmetadata","loadedMetadata","loadstart","loadStart",
"lostpointercapture","lostPointerCapture","playing","playing","progress","progress","seeking","seeking","stalled","stalled","suspend","suspend","timeupdate","timeUpdate",Lc,"transitionEnd","waiting","waiting"];function Pc(a,b){for(var c=0;c<a.length;c+=2){var d=a[c],e=a[c+1];e="on"+(e[0].toUpperCase()+e.slice(1));Nc.set(d,b);Mc.set(d,e);da(e,[d])}}var Qc=r.unstable_now;Qc();var F=8;
function Rc(a){if(0!==(1&a))return F=15,1;if(0!==(2&a))return F=14,2;if(0!==(4&a))return F=13,4;var b=24&a;if(0!==b)return F=12,b;if(0!==(a&32))return F=11,32;b=192&a;if(0!==b)return F=10,b;if(0!==(a&256))return F=9,256;b=3584&a;if(0!==b)return F=8,b;if(0!==(a&4096))return F=7,4096;b=4186112&a;if(0!==b)return F=6,b;b=62914560&a;if(0!==b)return F=5,b;if(a&67108864)return F=4,67108864;if(0!==(a&134217728))return F=3,134217728;b=805306368&a;if(0!==b)return F=2,b;if(0!==(1073741824&a))return F=1,1073741824;
F=8;return a}function Sc(a){switch(a){case 99:return 15;case 98:return 10;case 97:case 96:return 8;case 95:return 2;default:return 0}}function Tc(a){switch(a){case 15:case 14:return 99;case 13:case 12:case 11:case 10:return 98;case 9:case 8:case 7:case 6:case 4:case 5:return 97;case 3:case 2:case 1:return 95;case 0:return 90;default:throw Error(y(358,a));}}
function Uc(a,b){var c=a.pendingLanes;if(0===c)return F=0;var d=0,e=0,f=a.expiredLanes,g=a.suspendedLanes,h=a.pingedLanes;if(0!==f)d=f,e=F=15;else if(f=c&134217727,0!==f){var k=f&~g;0!==k?(d=Rc(k),e=F):(h&=f,0!==h&&(d=Rc(h),e=F))}else f=c&~g,0!==f?(d=Rc(f),e=F):0!==h&&(d=Rc(h),e=F);if(0===d)return 0;d=31-Vc(d);d=c&((0>d?0:1<<d)<<1)-1;if(0!==b&&b!==d&&0===(b&g)){Rc(b);if(e<=F)return b;F=e}b=a.entangledLanes;if(0!==b)for(a=a.entanglements,b&=d;0<b;)c=31-Vc(b),e=1<<c,d|=a[c],b&=~e;return d}
function Wc(a){a=a.pendingLanes&-1073741825;return 0!==a?a:a&1073741824?1073741824:0}function Xc(a,b){switch(a){case 15:return 1;case 14:return 2;case 12:return a=Yc(24&~b),0===a?Xc(10,b):a;case 10:return a=Yc(192&~b),0===a?Xc(8,b):a;case 8:return a=Yc(3584&~b),0===a&&(a=Yc(4186112&~b),0===a&&(a=512)),a;case 2:return b=Yc(805306368&~b),0===b&&(b=268435456),b}throw Error(y(358,a));}function Yc(a){return a&-a}function Zc(a){for(var b=[],c=0;31>c;c++)b.push(a);return b}
function $c(a,b,c){a.pendingLanes|=b;var d=b-1;a.suspendedLanes&=d;a.pingedLanes&=d;a=a.eventTimes;b=31-Vc(b);a[b]=c}var Vc=Math.clz32?Math.clz32:ad,bd=Math.log,cd=Math.LN2;function ad(a){return 0===a?32:31-(bd(a)/cd|0)|0}var dd=r.unstable_UserBlockingPriority,ed=r.unstable_runWithPriority,fd=!0;function gd(a,b,c,d){Kb||Ib();var e=hd,f=Kb;Kb=!0;try{Hb(e,a,b,c,d)}finally{(Kb=f)||Mb()}}function id(a,b,c,d){ed(dd,hd.bind(null,a,b,c,d))}
function hd(a,b,c,d){if(fd){var e;if((e=0===(b&4))&&0<jc.length&&-1<qc.indexOf(a))a=rc(null,a,b,c,d),jc.push(a);else{var f=yc(a,b,c,d);if(null===f)e&&sc(a,d);else{if(e){if(-1<qc.indexOf(a)){a=rc(f,a,b,c,d);jc.push(a);return}if(uc(f,a,b,c,d))return;sc(a,d)}jd(a,b,d,null,c)}}}}
function yc(a,b,c,d){var e=xb(d);e=wc(e);if(null!==e){var f=Zb(e);if(null===f)e=null;else{var g=f.tag;if(13===g){e=$b(f);if(null!==e)return e;e=null}else if(3===g){if(f.stateNode.hydrate)return 3===f.tag?f.stateNode.containerInfo:null;e=null}else f!==e&&(e=null)}}jd(a,b,d,e,c);return null}var kd=null,ld=null,md=null;
function nd(){if(md)return md;var a,b=ld,c=b.length,d,e="value"in kd?kd.value:kd.textContent,f=e.length;for(a=0;a<c&&b[a]===e[a];a++);var g=c-a;for(d=1;d<=g&&b[c-d]===e[f-d];d++);return md=e.slice(a,1<d?1-d:void 0)}function od(a){var b=a.keyCode;"charCode"in a?(a=a.charCode,0===a&&13===b&&(a=13)):a=b;10===a&&(a=13);return 32<=a||13===a?a:0}function pd(){return!0}function qd(){return!1}
function rd(a){function b(b,d,e,f,g){this._reactName=b;this._targetInst=e;this.type=d;this.nativeEvent=f;this.target=g;this.currentTarget=null;for(var c in a)a.hasOwnProperty(c)&&(b=a[c],this[c]=b?b(f):f[c]);this.isDefaultPrevented=(null!=f.defaultPrevented?f.defaultPrevented:!1===f.returnValue)?pd:qd;this.isPropagationStopped=qd;return this}m(b.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():"unknown"!==typeof a.returnValue&&
(a.returnValue=!1),this.isDefaultPrevented=pd)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():"unknown"!==typeof a.cancelBubble&&(a.cancelBubble=!0),this.isPropagationStopped=pd)},persist:function(){},isPersistent:pd});return b}
var sd={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(a){return a.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},td=rd(sd),ud=m({},sd,{view:0,detail:0}),vd=rd(ud),wd,xd,yd,Ad=m({},ud,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:zd,button:0,buttons:0,relatedTarget:function(a){return void 0===a.relatedTarget?a.fromElement===a.srcElement?a.toElement:a.fromElement:a.relatedTarget},movementX:function(a){if("movementX"in
a)return a.movementX;a!==yd&&(yd&&"mousemove"===a.type?(wd=a.screenX-yd.screenX,xd=a.screenY-yd.screenY):xd=wd=0,yd=a);return wd},movementY:function(a){return"movementY"in a?a.movementY:xd}}),Bd=rd(Ad),Cd=m({},Ad,{dataTransfer:0}),Dd=rd(Cd),Ed=m({},ud,{relatedTarget:0}),Fd=rd(Ed),Gd=m({},sd,{animationName:0,elapsedTime:0,pseudoElement:0}),Hd=rd(Gd),Id=m({},sd,{clipboardData:function(a){return"clipboardData"in a?a.clipboardData:window.clipboardData}}),Jd=rd(Id),Kd=m({},sd,{data:0}),Ld=rd(Kd),Md={Esc:"Escape",
Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Nd={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",
119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Od={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Pd(a){var b=this.nativeEvent;return b.getModifierState?b.getModifierState(a):(a=Od[a])?!!b[a]:!1}function zd(){return Pd}
var Qd=m({},ud,{key:function(a){if(a.key){var b=Md[a.key]||a.key;if("Unidentified"!==b)return b}return"keypress"===a.type?(a=od(a),13===a?"Enter":String.fromCharCode(a)):"keydown"===a.type||"keyup"===a.type?Nd[a.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:zd,charCode:function(a){return"keypress"===a.type?od(a):0},keyCode:function(a){return"keydown"===a.type||"keyup"===a.type?a.keyCode:0},which:function(a){return"keypress"===
a.type?od(a):"keydown"===a.type||"keyup"===a.type?a.keyCode:0}}),Rd=rd(Qd),Sd=m({},Ad,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Td=rd(Sd),Ud=m({},ud,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:zd}),Vd=rd(Ud),Wd=m({},sd,{propertyName:0,elapsedTime:0,pseudoElement:0}),Xd=rd(Wd),Yd=m({},Ad,{deltaX:function(a){return"deltaX"in a?a.deltaX:"wheelDeltaX"in a?-a.wheelDeltaX:0},
deltaY:function(a){return"deltaY"in a?a.deltaY:"wheelDeltaY"in a?-a.wheelDeltaY:"wheelDelta"in a?-a.wheelDelta:0},deltaZ:0,deltaMode:0}),Zd=rd(Yd),$d=[9,13,27,32],ae=fa&&"CompositionEvent"in window,be=null;fa&&"documentMode"in document&&(be=document.documentMode);var ce=fa&&"TextEvent"in window&&!be,de=fa&&(!ae||be&&8<be&&11>=be),ee=String.fromCharCode(32),fe=!1;
function ge(a,b){switch(a){case "keyup":return-1!==$d.indexOf(b.keyCode);case "keydown":return 229!==b.keyCode;case "keypress":case "mousedown":case "focusout":return!0;default:return!1}}function he(a){a=a.detail;return"object"===typeof a&&"data"in a?a.data:null}var ie=!1;function je(a,b){switch(a){case "compositionend":return he(b);case "keypress":if(32!==b.which)return null;fe=!0;return ee;case "textInput":return a=b.data,a===ee&&fe?null:a;default:return null}}
function ke(a,b){if(ie)return"compositionend"===a||!ae&&ge(a,b)?(a=nd(),md=ld=kd=null,ie=!1,a):null;switch(a){case "paste":return null;case "keypress":if(!(b.ctrlKey||b.altKey||b.metaKey)||b.ctrlKey&&b.altKey){if(b.char&&1<b.char.length)return b.char;if(b.which)return String.fromCharCode(b.which)}return null;case "compositionend":return de&&"ko"!==b.locale?null:b.data;default:return null}}
var le={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function me(a){var b=a&&a.nodeName&&a.nodeName.toLowerCase();return"input"===b?!!le[a.type]:"textarea"===b?!0:!1}function ne(a,b,c,d){Eb(d);b=oe(b,"onChange");0<b.length&&(c=new td("onChange","change",null,c,d),a.push({event:c,listeners:b}))}var pe=null,qe=null;function re(a){se(a,0)}function te(a){var b=ue(a);if(Wa(b))return a}
function ve(a,b){if("change"===a)return b}var we=!1;if(fa){var xe;if(fa){var ye="oninput"in document;if(!ye){var ze=document.createElement("div");ze.setAttribute("oninput","return;");ye="function"===typeof ze.oninput}xe=ye}else xe=!1;we=xe&&(!document.documentMode||9<document.documentMode)}function Ae(){pe&&(pe.detachEvent("onpropertychange",Be),qe=pe=null)}function Be(a){if("value"===a.propertyName&&te(qe)){var b=[];ne(b,qe,a,xb(a));a=re;if(Kb)a(b);else{Kb=!0;try{Gb(a,b)}finally{Kb=!1,Mb()}}}}
function Ce(a,b,c){"focusin"===a?(Ae(),pe=b,qe=c,pe.attachEvent("onpropertychange",Be)):"focusout"===a&&Ae()}function De(a){if("selectionchange"===a||"keyup"===a||"keydown"===a)return te(qe)}function Ee(a,b){if("click"===a)return te(b)}function Fe(a,b){if("input"===a||"change"===a)return te(b)}function Ge(a,b){return a===b&&(0!==a||1/a===1/b)||a!==a&&b!==b}var He="function"===typeof Object.is?Object.is:Ge,Ie=Object.prototype.hasOwnProperty;
function Je(a,b){if(He(a,b))return!0;if("object"!==typeof a||null===a||"object"!==typeof b||null===b)return!1;var c=Object.keys(a),d=Object.keys(b);if(c.length!==d.length)return!1;for(d=0;d<c.length;d++)if(!Ie.call(b,c[d])||!He(a[c[d]],b[c[d]]))return!1;return!0}function Ke(a){for(;a&&a.firstChild;)a=a.firstChild;return a}
function Le(a,b){var c=Ke(a);a=0;for(var d;c;){if(3===c.nodeType){d=a+c.textContent.length;if(a<=b&&d>=b)return{node:c,offset:b-a};a=d}a:{for(;c;){if(c.nextSibling){c=c.nextSibling;break a}c=c.parentNode}c=void 0}c=Ke(c)}}function Me(a,b){return a&&b?a===b?!0:a&&3===a.nodeType?!1:b&&3===b.nodeType?Me(a,b.parentNode):"contains"in a?a.contains(b):a.compareDocumentPosition?!!(a.compareDocumentPosition(b)&16):!1:!1}
function Ne(){for(var a=window,b=Xa();b instanceof a.HTMLIFrameElement;){try{var c="string"===typeof b.contentWindow.location.href}catch(d){c=!1}if(c)a=b.contentWindow;else break;b=Xa(a.document)}return b}function Oe(a){var b=a&&a.nodeName&&a.nodeName.toLowerCase();return b&&("input"===b&&("text"===a.type||"search"===a.type||"tel"===a.type||"url"===a.type||"password"===a.type)||"textarea"===b||"true"===a.contentEditable)}
var Pe=fa&&"documentMode"in document&&11>=document.documentMode,Qe=null,Re=null,Se=null,Te=!1;
function Ue(a,b,c){var d=c.window===c?c.document:9===c.nodeType?c:c.ownerDocument;Te||null==Qe||Qe!==Xa(d)||(d=Qe,"selectionStart"in d&&Oe(d)?d={start:d.selectionStart,end:d.selectionEnd}:(d=(d.ownerDocument&&d.ownerDocument.defaultView||window).getSelection(),d={anchorNode:d.anchorNode,anchorOffset:d.anchorOffset,focusNode:d.focusNode,focusOffset:d.focusOffset}),Se&&Je(Se,d)||(Se=d,d=oe(Re,"onSelect"),0<d.length&&(b=new td("onSelect","select",null,b,c),a.push({event:b,listeners:d}),b.target=Qe)))}
Pc("cancel cancel click click close close contextmenu contextMenu copy copy cut cut auxclick auxClick dblclick doubleClick dragend dragEnd dragstart dragStart drop drop focusin focus focusout blur input input invalid invalid keydown keyDown keypress keyPress keyup keyUp mousedown mouseDown mouseup mouseUp paste paste pause pause play play pointercancel pointerCancel pointerdown pointerDown pointerup pointerUp ratechange rateChange reset reset seeked seeked submit submit touchcancel touchCancel touchend touchEnd touchstart touchStart volumechange volumeChange".split(" "),
0);Pc("drag drag dragenter dragEnter dragexit dragExit dragleave dragLeave dragover dragOver mousemove mouseMove mouseout mouseOut mouseover mouseOver pointermove pointerMove pointerout pointerOut pointerover pointerOver scroll scroll toggle toggle touchmove touchMove wheel wheel".split(" "),1);Pc(Oc,2);for(var Ve="change selectionchange textInput compositionstart compositionend compositionupdate".split(" "),We=0;We<Ve.length;We++)Nc.set(Ve[We],0);ea("onMouseEnter",["mouseout","mouseover"]);
ea("onMouseLeave",["mouseout","mouseover"]);ea("onPointerEnter",["pointerout","pointerover"]);ea("onPointerLeave",["pointerout","pointerover"]);da("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));da("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));da("onBeforeInput",["compositionend","keypress","textInput","paste"]);da("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));
da("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));da("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Xe="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Ye=new Set("cancel close invalid load scroll toggle".split(" ").concat(Xe));
function Ze(a,b,c){var d=a.type||"unknown-event";a.currentTarget=c;Yb(d,b,void 0,a);a.currentTarget=null}
function se(a,b){b=0!==(b&4);for(var c=0;c<a.length;c++){var d=a[c],e=d.event;d=d.listeners;a:{var f=void 0;if(b)for(var g=d.length-1;0<=g;g--){var h=d[g],k=h.instance,l=h.currentTarget;h=h.listener;if(k!==f&&e.isPropagationStopped())break a;Ze(e,h,l);f=k}else for(g=0;g<d.length;g++){h=d[g];k=h.instance;l=h.currentTarget;h=h.listener;if(k!==f&&e.isPropagationStopped())break a;Ze(e,h,l);f=k}}}if(Ub)throw a=Vb,Ub=!1,Vb=null,a;}
function G(a,b){var c=$e(b),d=a+"__bubble";c.has(d)||(af(b,a,2,!1),c.add(d))}var bf="_reactListening"+Math.random().toString(36).slice(2);function cf(a){a[bf]||(a[bf]=!0,ba.forEach(function(b){Ye.has(b)||df(b,!1,a,null);df(b,!0,a,null)}))}
function df(a,b,c,d){var e=4<arguments.length&&void 0!==arguments[4]?arguments[4]:0,f=c;"selectionchange"===a&&9!==c.nodeType&&(f=c.ownerDocument);if(null!==d&&!b&&Ye.has(a)){if("scroll"!==a)return;e|=2;f=d}var g=$e(f),h=a+"__"+(b?"capture":"bubble");g.has(h)||(b&&(e|=4),af(f,a,e,b),g.add(h))}
function af(a,b,c,d){var e=Nc.get(b);switch(void 0===e?2:e){case 0:e=gd;break;case 1:e=id;break;default:e=hd}c=e.bind(null,b,c,a);e=void 0;!Pb||"touchstart"!==b&&"touchmove"!==b&&"wheel"!==b||(e=!0);d?void 0!==e?a.addEventListener(b,c,{capture:!0,passive:e}):a.addEventListener(b,c,!0):void 0!==e?a.addEventListener(b,c,{passive:e}):a.addEventListener(b,c,!1)}
function jd(a,b,c,d,e){var f=d;if(0===(b&1)&&0===(b&2)&&null!==d)a:for(;;){if(null===d)return;var g=d.tag;if(3===g||4===g){var h=d.stateNode.containerInfo;if(h===e||8===h.nodeType&&h.parentNode===e)break;if(4===g)for(g=d.return;null!==g;){var k=g.tag;if(3===k||4===k)if(k=g.stateNode.containerInfo,k===e||8===k.nodeType&&k.parentNode===e)return;g=g.return}for(;null!==h;){g=wc(h);if(null===g)return;k=g.tag;if(5===k||6===k){d=f=g;continue a}h=h.parentNode}}d=d.return}Nb(function(){var d=f,e=xb(c),g=[];
a:{var h=Mc.get(a);if(void 0!==h){var k=td,x=a;switch(a){case "keypress":if(0===od(c))break a;case "keydown":case "keyup":k=Rd;break;case "focusin":x="focus";k=Fd;break;case "focusout":x="blur";k=Fd;break;case "beforeblur":case "afterblur":k=Fd;break;case "click":if(2===c.button)break a;case "auxclick":case "dblclick":case "mousedown":case "mousemove":case "mouseup":case "mouseout":case "mouseover":case "contextmenu":k=Bd;break;case "drag":case "dragend":case "dragenter":case "dragexit":case "dragleave":case "dragover":case "dragstart":case "drop":k=
Dd;break;case "touchcancel":case "touchend":case "touchmove":case "touchstart":k=Vd;break;case Ic:case Jc:case Kc:k=Hd;break;case Lc:k=Xd;break;case "scroll":k=vd;break;case "wheel":k=Zd;break;case "copy":case "cut":case "paste":k=Jd;break;case "gotpointercapture":case "lostpointercapture":case "pointercancel":case "pointerdown":case "pointermove":case "pointerout":case "pointerover":case "pointerup":k=Td}var w=0!==(b&4),z=!w&&"scroll"===a,u=w?null!==h?h+"Capture":null:h;w=[];for(var t=d,q;null!==
t;){q=t;var v=q.stateNode;5===q.tag&&null!==v&&(q=v,null!==u&&(v=Ob(t,u),null!=v&&w.push(ef(t,v,q))));if(z)break;t=t.return}0<w.length&&(h=new k(h,x,null,c,e),g.push({event:h,listeners:w}))}}if(0===(b&7)){a:{h="mouseover"===a||"pointerover"===a;k="mouseout"===a||"pointerout"===a;if(h&&0===(b&16)&&(x=c.relatedTarget||c.fromElement)&&(wc(x)||x[ff]))break a;if(k||h){h=e.window===e?e:(h=e.ownerDocument)?h.defaultView||h.parentWindow:window;if(k){if(x=c.relatedTarget||c.toElement,k=d,x=x?wc(x):null,null!==
x&&(z=Zb(x),x!==z||5!==x.tag&&6!==x.tag))x=null}else k=null,x=d;if(k!==x){w=Bd;v="onMouseLeave";u="onMouseEnter";t="mouse";if("pointerout"===a||"pointerover"===a)w=Td,v="onPointerLeave",u="onPointerEnter",t="pointer";z=null==k?h:ue(k);q=null==x?h:ue(x);h=new w(v,t+"leave",k,c,e);h.target=z;h.relatedTarget=q;v=null;wc(e)===d&&(w=new w(u,t+"enter",x,c,e),w.target=q,w.relatedTarget=z,v=w);z=v;if(k&&x)b:{w=k;u=x;t=0;for(q=w;q;q=gf(q))t++;q=0;for(v=u;v;v=gf(v))q++;for(;0<t-q;)w=gf(w),t--;for(;0<q-t;)u=
gf(u),q--;for(;t--;){if(w===u||null!==u&&w===u.alternate)break b;w=gf(w);u=gf(u)}w=null}else w=null;null!==k&&hf(g,h,k,w,!1);null!==x&&null!==z&&hf(g,z,x,w,!0)}}}a:{h=d?ue(d):window;k=h.nodeName&&h.nodeName.toLowerCase();if("select"===k||"input"===k&&"file"===h.type)var J=ve;else if(me(h))if(we)J=Fe;else{J=De;var K=Ce}else(k=h.nodeName)&&"input"===k.toLowerCase()&&("checkbox"===h.type||"radio"===h.type)&&(J=Ee);if(J&&(J=J(a,d))){ne(g,J,c,e);break a}K&&K(a,h,d);"focusout"===a&&(K=h._wrapperState)&&
K.controlled&&"number"===h.type&&bb(h,"number",h.value)}K=d?ue(d):window;switch(a){case "focusin":if(me(K)||"true"===K.contentEditable)Qe=K,Re=d,Se=null;break;case "focusout":Se=Re=Qe=null;break;case "mousedown":Te=!0;break;case "contextmenu":case "mouseup":case "dragend":Te=!1;Ue(g,c,e);break;case "selectionchange":if(Pe)break;case "keydown":case "keyup":Ue(g,c,e)}var Q;if(ae)b:{switch(a){case "compositionstart":var L="onCompositionStart";break b;case "compositionend":L="onCompositionEnd";break b;
case "compositionupdate":L="onCompositionUpdate";break b}L=void 0}else ie?ge(a,c)&&(L="onCompositionEnd"):"keydown"===a&&229===c.keyCode&&(L="onCompositionStart");L&&(de&&"ko"!==c.locale&&(ie||"onCompositionStart"!==L?"onCompositionEnd"===L&&ie&&(Q=nd()):(kd=e,ld="value"in kd?kd.value:kd.textContent,ie=!0)),K=oe(d,L),0<K.length&&(L=new Ld(L,a,null,c,e),g.push({event:L,listeners:K}),Q?L.data=Q:(Q=he(c),null!==Q&&(L.data=Q))));if(Q=ce?je(a,c):ke(a,c))d=oe(d,"onBeforeInput"),0<d.length&&(e=new Ld("onBeforeInput",
"beforeinput",null,c,e),g.push({event:e,listeners:d}),e.data=Q)}se(g,b)})}function ef(a,b,c){return{instance:a,listener:b,currentTarget:c}}function oe(a,b){for(var c=b+"Capture",d=[];null!==a;){var e=a,f=e.stateNode;5===e.tag&&null!==f&&(e=f,f=Ob(a,c),null!=f&&d.unshift(ef(a,f,e)),f=Ob(a,b),null!=f&&d.push(ef(a,f,e)));a=a.return}return d}function gf(a){if(null===a)return null;do a=a.return;while(a&&5!==a.tag);return a?a:null}
function hf(a,b,c,d,e){for(var f=b._reactName,g=[];null!==c&&c!==d;){var h=c,k=h.alternate,l=h.stateNode;if(null!==k&&k===d)break;5===h.tag&&null!==l&&(h=l,e?(k=Ob(c,f),null!=k&&g.unshift(ef(c,k,h))):e||(k=Ob(c,f),null!=k&&g.push(ef(c,k,h))));c=c.return}0!==g.length&&a.push({event:b,listeners:g})}function jf(){}var kf=null,lf=null;function mf(a,b){switch(a){case "button":case "input":case "select":case "textarea":return!!b.autoFocus}return!1}
function nf(a,b){return"textarea"===a||"option"===a||"noscript"===a||"string"===typeof b.children||"number"===typeof b.children||"object"===typeof b.dangerouslySetInnerHTML&&null!==b.dangerouslySetInnerHTML&&null!=b.dangerouslySetInnerHTML.__html}var of="function"===typeof setTimeout?setTimeout:void 0,pf="function"===typeof clearTimeout?clearTimeout:void 0;function qf(a){1===a.nodeType?a.textContent="":9===a.nodeType&&(a=a.body,null!=a&&(a.textContent=""))}
function rf(a){for(;null!=a;a=a.nextSibling){var b=a.nodeType;if(1===b||3===b)break}return a}function sf(a){a=a.previousSibling;for(var b=0;a;){if(8===a.nodeType){var c=a.data;if("$"===c||"$!"===c||"$?"===c){if(0===b)return a;b--}else"/$"===c&&b++}a=a.previousSibling}return null}var tf=0;function uf(a){return{$$typeof:Ga,toString:a,valueOf:a}}var vf=Math.random().toString(36).slice(2),wf="__reactFiber$"+vf,xf="__reactProps$"+vf,ff="__reactContainer$"+vf,yf="__reactEvents$"+vf;
function wc(a){var b=a[wf];if(b)return b;for(var c=a.parentNode;c;){if(b=c[ff]||c[wf]){c=b.alternate;if(null!==b.child||null!==c&&null!==c.child)for(a=sf(a);null!==a;){if(c=a[wf])return c;a=sf(a)}return b}a=c;c=a.parentNode}return null}function Cb(a){a=a[wf]||a[ff];return!a||5!==a.tag&&6!==a.tag&&13!==a.tag&&3!==a.tag?null:a}function ue(a){if(5===a.tag||6===a.tag)return a.stateNode;throw Error(y(33));}function Db(a){return a[xf]||null}
function $e(a){var b=a[yf];void 0===b&&(b=a[yf]=new Set);return b}var zf=[],Af=-1;function Bf(a){return{current:a}}function H(a){0>Af||(a.current=zf[Af],zf[Af]=null,Af--)}function I(a,b){Af++;zf[Af]=a.current;a.current=b}var Cf={},M=Bf(Cf),N=Bf(!1),Df=Cf;
function Ef(a,b){var c=a.type.contextTypes;if(!c)return Cf;var d=a.stateNode;if(d&&d.__reactInternalMemoizedUnmaskedChildContext===b)return d.__reactInternalMemoizedMaskedChildContext;var e={},f;for(f in c)e[f]=b[f];d&&(a=a.stateNode,a.__reactInternalMemoizedUnmaskedChildContext=b,a.__reactInternalMemoizedMaskedChildContext=e);return e}function Ff(a){a=a.childContextTypes;return null!==a&&void 0!==a}function Gf(){H(N);H(M)}function Hf(a,b,c){if(M.current!==Cf)throw Error(y(168));I(M,b);I(N,c)}
function If(a,b,c){var d=a.stateNode;a=b.childContextTypes;if("function"!==typeof d.getChildContext)return c;d=d.getChildContext();for(var e in d)if(!(e in a))throw Error(y(108,Ra(b)||"Unknown",e));return m({},c,d)}function Jf(a){a=(a=a.stateNode)&&a.__reactInternalMemoizedMergedChildContext||Cf;Df=M.current;I(M,a);I(N,N.current);return!0}function Kf(a,b,c){var d=a.stateNode;if(!d)throw Error(y(169));c?(a=If(a,b,Df),d.__reactInternalMemoizedMergedChildContext=a,H(N),H(M),I(M,a)):H(N);I(N,c)}
var Lf=null,Mf=null,Nf=r.unstable_runWithPriority,Of=r.unstable_scheduleCallback,Pf=r.unstable_cancelCallback,Qf=r.unstable_shouldYield,Rf=r.unstable_requestPaint,Sf=r.unstable_now,Tf=r.unstable_getCurrentPriorityLevel,Uf=r.unstable_ImmediatePriority,Vf=r.unstable_UserBlockingPriority,Wf=r.unstable_NormalPriority,Xf=r.unstable_LowPriority,Yf=r.unstable_IdlePriority,Zf={},$f=void 0!==Rf?Rf:function(){},ag=null,bg=null,cg=!1,dg=Sf(),O=1E4>dg?Sf:function(){return Sf()-dg};
function eg(){switch(Tf()){case Uf:return 99;case Vf:return 98;case Wf:return 97;case Xf:return 96;case Yf:return 95;default:throw Error(y(332));}}function fg(a){switch(a){case 99:return Uf;case 98:return Vf;case 97:return Wf;case 96:return Xf;case 95:return Yf;default:throw Error(y(332));}}function gg(a,b){a=fg(a);return Nf(a,b)}function hg(a,b,c){a=fg(a);return Of(a,b,c)}function ig(){if(null!==bg){var a=bg;bg=null;Pf(a)}jg()}
function jg(){if(!cg&&null!==ag){cg=!0;var a=0;try{var b=ag;gg(99,function(){for(;a<b.length;a++){var c=b[a];do c=c(!0);while(null!==c)}});ag=null}catch(c){throw null!==ag&&(ag=ag.slice(a+1)),Of(Uf,ig),c;}finally{cg=!1}}}var kg=ra.ReactCurrentBatchConfig;function lg(a,b){if(a&&a.defaultProps){b=m({},b);a=a.defaultProps;for(var c in a)void 0===b[c]&&(b[c]=a[c]);return b}return b}var mg=Bf(null),ng=null,og=null,pg=null;function qg(){pg=og=ng=null}
function rg(a){var b=mg.current;H(mg);a.type._context._currentValue=b}function sg(a,b){for(;null!==a;){var c=a.alternate;if((a.childLanes&b)===b)if(null===c||(c.childLanes&b)===b)break;else c.childLanes|=b;else a.childLanes|=b,null!==c&&(c.childLanes|=b);a=a.return}}function tg(a,b){ng=a;pg=og=null;a=a.dependencies;null!==a&&null!==a.firstContext&&(0!==(a.lanes&b)&&(ug=!0),a.firstContext=null)}
function vg(a,b){if(pg!==a&&!1!==b&&0!==b){if("number"!==typeof b||1073741823===b)pg=a,b=1073741823;b={context:a,observedBits:b,next:null};if(null===og){if(null===ng)throw Error(y(308));og=b;ng.dependencies={lanes:0,firstContext:b,responders:null}}else og=og.next=b}return a._currentValue}var wg=!1;function xg(a){a.updateQueue={baseState:a.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null},effects:null}}
function yg(a,b){a=a.updateQueue;b.updateQueue===a&&(b.updateQueue={baseState:a.baseState,firstBaseUpdate:a.firstBaseUpdate,lastBaseUpdate:a.lastBaseUpdate,shared:a.shared,effects:a.effects})}function zg(a,b){return{eventTime:a,lane:b,tag:0,payload:null,callback:null,next:null}}function Ag(a,b){a=a.updateQueue;if(null!==a){a=a.shared;var c=a.pending;null===c?b.next=b:(b.next=c.next,c.next=b);a.pending=b}}
function Bg(a,b){var c=a.updateQueue,d=a.alternate;if(null!==d&&(d=d.updateQueue,c===d)){var e=null,f=null;c=c.firstBaseUpdate;if(null!==c){do{var g={eventTime:c.eventTime,lane:c.lane,tag:c.tag,payload:c.payload,callback:c.callback,next:null};null===f?e=f=g:f=f.next=g;c=c.next}while(null!==c);null===f?e=f=b:f=f.next=b}else e=f=b;c={baseState:d.baseState,firstBaseUpdate:e,lastBaseUpdate:f,shared:d.shared,effects:d.effects};a.updateQueue=c;return}a=c.lastBaseUpdate;null===a?c.firstBaseUpdate=b:a.next=
b;c.lastBaseUpdate=b}
function Cg(a,b,c,d){var e=a.updateQueue;wg=!1;var f=e.firstBaseUpdate,g=e.lastBaseUpdate,h=e.shared.pending;if(null!==h){e.shared.pending=null;var k=h,l=k.next;k.next=null;null===g?f=l:g.next=l;g=k;var n=a.alternate;if(null!==n){n=n.updateQueue;var A=n.lastBaseUpdate;A!==g&&(null===A?n.firstBaseUpdate=l:A.next=l,n.lastBaseUpdate=k)}}if(null!==f){A=e.baseState;g=0;n=l=k=null;do{h=f.lane;var p=f.eventTime;if((d&h)===h){null!==n&&(n=n.next={eventTime:p,lane:0,tag:f.tag,payload:f.payload,callback:f.callback,
next:null});a:{var C=a,x=f;h=b;p=c;switch(x.tag){case 1:C=x.payload;if("function"===typeof C){A=C.call(p,A,h);break a}A=C;break a;case 3:C.flags=C.flags&-4097|64;case 0:C=x.payload;h="function"===typeof C?C.call(p,A,h):C;if(null===h||void 0===h)break a;A=m({},A,h);break a;case 2:wg=!0}}null!==f.callback&&(a.flags|=32,h=e.effects,null===h?e.effects=[f]:h.push(f))}else p={eventTime:p,lane:h,tag:f.tag,payload:f.payload,callback:f.callback,next:null},null===n?(l=n=p,k=A):n=n.next=p,g|=h;f=f.next;if(null===
f)if(h=e.shared.pending,null===h)break;else f=h.next,h.next=null,e.lastBaseUpdate=h,e.shared.pending=null}while(1);null===n&&(k=A);e.baseState=k;e.firstBaseUpdate=l;e.lastBaseUpdate=n;Dg|=g;a.lanes=g;a.memoizedState=A}}function Eg(a,b,c){a=b.effects;b.effects=null;if(null!==a)for(b=0;b<a.length;b++){var d=a[b],e=d.callback;if(null!==e){d.callback=null;d=c;if("function"!==typeof e)throw Error(y(191,e));e.call(d)}}}var Fg=(new aa.Component).refs;
function Gg(a,b,c,d){b=a.memoizedState;c=c(d,b);c=null===c||void 0===c?b:m({},b,c);a.memoizedState=c;0===a.lanes&&(a.updateQueue.baseState=c)}
var Kg={isMounted:function(a){return(a=a._reactInternals)?Zb(a)===a:!1},enqueueSetState:function(a,b,c){a=a._reactInternals;var d=Hg(),e=Ig(a),f=zg(d,e);f.payload=b;void 0!==c&&null!==c&&(f.callback=c);Ag(a,f);Jg(a,e,d)},enqueueReplaceState:function(a,b,c){a=a._reactInternals;var d=Hg(),e=Ig(a),f=zg(d,e);f.tag=1;f.payload=b;void 0!==c&&null!==c&&(f.callback=c);Ag(a,f);Jg(a,e,d)},enqueueForceUpdate:function(a,b){a=a._reactInternals;var c=Hg(),d=Ig(a),e=zg(c,d);e.tag=2;void 0!==b&&null!==b&&(e.callback=
b);Ag(a,e);Jg(a,d,c)}};function Lg(a,b,c,d,e,f,g){a=a.stateNode;return"function"===typeof a.shouldComponentUpdate?a.shouldComponentUpdate(d,f,g):b.prototype&&b.prototype.isPureReactComponent?!Je(c,d)||!Je(e,f):!0}
function Mg(a,b,c){var d=!1,e=Cf;var f=b.contextType;"object"===typeof f&&null!==f?f=vg(f):(e=Ff(b)?Df:M.current,d=b.contextTypes,f=(d=null!==d&&void 0!==d)?Ef(a,e):Cf);b=new b(c,f);a.memoizedState=null!==b.state&&void 0!==b.state?b.state:null;b.updater=Kg;a.stateNode=b;b._reactInternals=a;d&&(a=a.stateNode,a.__reactInternalMemoizedUnmaskedChildContext=e,a.__reactInternalMemoizedMaskedChildContext=f);return b}
function Ng(a,b,c,d){a=b.state;"function"===typeof b.componentWillReceiveProps&&b.componentWillReceiveProps(c,d);"function"===typeof b.UNSAFE_componentWillReceiveProps&&b.UNSAFE_componentWillReceiveProps(c,d);b.state!==a&&Kg.enqueueReplaceState(b,b.state,null)}
function Og(a,b,c,d){var e=a.stateNode;e.props=c;e.state=a.memoizedState;e.refs=Fg;xg(a);var f=b.contextType;"object"===typeof f&&null!==f?e.context=vg(f):(f=Ff(b)?Df:M.current,e.context=Ef(a,f));Cg(a,c,e,d);e.state=a.memoizedState;f=b.getDerivedStateFromProps;"function"===typeof f&&(Gg(a,b,f,c),e.state=a.memoizedState);"function"===typeof b.getDerivedStateFromProps||"function"===typeof e.getSnapshotBeforeUpdate||"function"!==typeof e.UNSAFE_componentWillMount&&"function"!==typeof e.componentWillMount||
(b=e.state,"function"===typeof e.componentWillMount&&e.componentWillMount(),"function"===typeof e.UNSAFE_componentWillMount&&e.UNSAFE_componentWillMount(),b!==e.state&&Kg.enqueueReplaceState(e,e.state,null),Cg(a,c,e,d),e.state=a.memoizedState);"function"===typeof e.componentDidMount&&(a.flags|=4)}var Pg=Array.isArray;
function Qg(a,b,c){a=c.ref;if(null!==a&&"function"!==typeof a&&"object"!==typeof a){if(c._owner){c=c._owner;if(c){if(1!==c.tag)throw Error(y(309));var d=c.stateNode}if(!d)throw Error(y(147,a));var e=""+a;if(null!==b&&null!==b.ref&&"function"===typeof b.ref&&b.ref._stringRef===e)return b.ref;b=function(a){var b=d.refs;b===Fg&&(b=d.refs={});null===a?delete b[e]:b[e]=a};b._stringRef=e;return b}if("string"!==typeof a)throw Error(y(284));if(!c._owner)throw Error(y(290,a));}return a}
function Rg(a,b){if("textarea"!==a.type)throw Error(y(31,"[object Object]"===Object.prototype.toString.call(b)?"object with keys {"+Object.keys(b).join(", ")+"}":b));}
function Sg(a){function b(b,c){if(a){var d=b.lastEffect;null!==d?(d.nextEffect=c,b.lastEffect=c):b.firstEffect=b.lastEffect=c;c.nextEffect=null;c.flags=8}}function c(c,d){if(!a)return null;for(;null!==d;)b(c,d),d=d.sibling;return null}function d(a,b){for(a=new Map;null!==b;)null!==b.key?a.set(b.key,b):a.set(b.index,b),b=b.sibling;return a}function e(a,b){a=Tg(a,b);a.index=0;a.sibling=null;return a}function f(b,c,d){b.index=d;if(!a)return c;d=b.alternate;if(null!==d)return d=d.index,d<c?(b.flags=2,
c):d;b.flags=2;return c}function g(b){a&&null===b.alternate&&(b.flags=2);return b}function h(a,b,c,d){if(null===b||6!==b.tag)return b=Ug(c,a.mode,d),b.return=a,b;b=e(b,c);b.return=a;return b}function k(a,b,c,d){if(null!==b&&b.elementType===c.type)return d=e(b,c.props),d.ref=Qg(a,b,c),d.return=a,d;d=Vg(c.type,c.key,c.props,null,a.mode,d);d.ref=Qg(a,b,c);d.return=a;return d}function l(a,b,c,d){if(null===b||4!==b.tag||b.stateNode.containerInfo!==c.containerInfo||b.stateNode.implementation!==c.implementation)return b=
Wg(c,a.mode,d),b.return=a,b;b=e(b,c.children||[]);b.return=a;return b}function n(a,b,c,d,f){if(null===b||7!==b.tag)return b=Xg(c,a.mode,d,f),b.return=a,b;b=e(b,c);b.return=a;return b}function A(a,b,c){if("string"===typeof b||"number"===typeof b)return b=Ug(""+b,a.mode,c),b.return=a,b;if("object"===typeof b&&null!==b){switch(b.$$typeof){case sa:return c=Vg(b.type,b.key,b.props,null,a.mode,c),c.ref=Qg(a,null,b),c.return=a,c;case ta:return b=Wg(b,a.mode,c),b.return=a,b}if(Pg(b)||La(b))return b=Xg(b,
a.mode,c,null),b.return=a,b;Rg(a,b)}return null}function p(a,b,c,d){var e=null!==b?b.key:null;if("string"===typeof c||"number"===typeof c)return null!==e?null:h(a,b,""+c,d);if("object"===typeof c&&null!==c){switch(c.$$typeof){case sa:return c.key===e?c.type===ua?n(a,b,c.props.children,d,e):k(a,b,c,d):null;case ta:return c.key===e?l(a,b,c,d):null}if(Pg(c)||La(c))return null!==e?null:n(a,b,c,d,null);Rg(a,c)}return null}function C(a,b,c,d,e){if("string"===typeof d||"number"===typeof d)return a=a.get(c)||
null,h(b,a,""+d,e);if("object"===typeof d&&null!==d){switch(d.$$typeof){case sa:return a=a.get(null===d.key?c:d.key)||null,d.type===ua?n(b,a,d.props.children,e,d.key):k(b,a,d,e);case ta:return a=a.get(null===d.key?c:d.key)||null,l(b,a,d,e)}if(Pg(d)||La(d))return a=a.get(c)||null,n(b,a,d,e,null);Rg(b,d)}return null}function x(e,g,h,k){for(var l=null,t=null,u=g,z=g=0,q=null;null!==u&&z<h.length;z++){u.index>z?(q=u,u=null):q=u.sibling;var n=p(e,u,h[z],k);if(null===n){null===u&&(u=q);break}a&&u&&null===
n.alternate&&b(e,u);g=f(n,g,z);null===t?l=n:t.sibling=n;t=n;u=q}if(z===h.length)return c(e,u),l;if(null===u){for(;z<h.length;z++)u=A(e,h[z],k),null!==u&&(g=f(u,g,z),null===t?l=u:t.sibling=u,t=u);return l}for(u=d(e,u);z<h.length;z++)q=C(u,e,z,h[z],k),null!==q&&(a&&null!==q.alternate&&u.delete(null===q.key?z:q.key),g=f(q,g,z),null===t?l=q:t.sibling=q,t=q);a&&u.forEach(function(a){return b(e,a)});return l}function w(e,g,h,k){var l=La(h);if("function"!==typeof l)throw Error(y(150));h=l.call(h);if(null==
h)throw Error(y(151));for(var t=l=null,u=g,z=g=0,q=null,n=h.next();null!==u&&!n.done;z++,n=h.next()){u.index>z?(q=u,u=null):q=u.sibling;var w=p(e,u,n.value,k);if(null===w){null===u&&(u=q);break}a&&u&&null===w.alternate&&b(e,u);g=f(w,g,z);null===t?l=w:t.sibling=w;t=w;u=q}if(n.done)return c(e,u),l;if(null===u){for(;!n.done;z++,n=h.next())n=A(e,n.value,k),null!==n&&(g=f(n,g,z),null===t?l=n:t.sibling=n,t=n);return l}for(u=d(e,u);!n.done;z++,n=h.next())n=C(u,e,z,n.value,k),null!==n&&(a&&null!==n.alternate&&
u.delete(null===n.key?z:n.key),g=f(n,g,z),null===t?l=n:t.sibling=n,t=n);a&&u.forEach(function(a){return b(e,a)});return l}return function(a,d,f,h){var k="object"===typeof f&&null!==f&&f.type===ua&&null===f.key;k&&(f=f.props.children);var l="object"===typeof f&&null!==f;if(l)switch(f.$$typeof){case sa:a:{l=f.key;for(k=d;null!==k;){if(k.key===l){switch(k.tag){case 7:if(f.type===ua){c(a,k.sibling);d=e(k,f.props.children);d.return=a;a=d;break a}break;default:if(k.elementType===f.type){c(a,k.sibling);
d=e(k,f.props);d.ref=Qg(a,k,f);d.return=a;a=d;break a}}c(a,k);break}else b(a,k);k=k.sibling}f.type===ua?(d=Xg(f.props.children,a.mode,h,f.key),d.return=a,a=d):(h=Vg(f.type,f.key,f.props,null,a.mode,h),h.ref=Qg(a,d,f),h.return=a,a=h)}return g(a);case ta:a:{for(k=f.key;null!==d;){if(d.key===k)if(4===d.tag&&d.stateNode.containerInfo===f.containerInfo&&d.stateNode.implementation===f.implementation){c(a,d.sibling);d=e(d,f.children||[]);d.return=a;a=d;break a}else{c(a,d);break}else b(a,d);d=d.sibling}d=
Wg(f,a.mode,h);d.return=a;a=d}return g(a)}if("string"===typeof f||"number"===typeof f)return f=""+f,null!==d&&6===d.tag?(c(a,d.sibling),d=e(d,f),d.return=a,a=d):(c(a,d),d=Ug(f,a.mode,h),d.return=a,a=d),g(a);if(Pg(f))return x(a,d,f,h);if(La(f))return w(a,d,f,h);l&&Rg(a,f);if("undefined"===typeof f&&!k)switch(a.tag){case 1:case 22:case 0:case 11:case 15:throw Error(y(152,Ra(a.type)||"Component"));}return c(a,d)}}var Yg=Sg(!0),Zg=Sg(!1),$g={},ah=Bf($g),bh=Bf($g),ch=Bf($g);
function dh(a){if(a===$g)throw Error(y(174));return a}function eh(a,b){I(ch,b);I(bh,a);I(ah,$g);a=b.nodeType;switch(a){case 9:case 11:b=(b=b.documentElement)?b.namespaceURI:mb(null,"");break;default:a=8===a?b.parentNode:b,b=a.namespaceURI||null,a=a.tagName,b=mb(b,a)}H(ah);I(ah,b)}function fh(){H(ah);H(bh);H(ch)}function gh(a){dh(ch.current);var b=dh(ah.current);var c=mb(b,a.type);b!==c&&(I(bh,a),I(ah,c))}function hh(a){bh.current===a&&(H(ah),H(bh))}var P=Bf(0);
function ih(a){for(var b=a;null!==b;){if(13===b.tag){var c=b.memoizedState;if(null!==c&&(c=c.dehydrated,null===c||"$?"===c.data||"$!"===c.data))return b}else if(19===b.tag&&void 0!==b.memoizedProps.revealOrder){if(0!==(b.flags&64))return b}else if(null!==b.child){b.child.return=b;b=b.child;continue}if(b===a)break;for(;null===b.sibling;){if(null===b.return||b.return===a)return null;b=b.return}b.sibling.return=b.return;b=b.sibling}return null}var jh=null,kh=null,lh=!1;
function mh(a,b){var c=nh(5,null,null,0);c.elementType="DELETED";c.type="DELETED";c.stateNode=b;c.return=a;c.flags=8;null!==a.lastEffect?(a.lastEffect.nextEffect=c,a.lastEffect=c):a.firstEffect=a.lastEffect=c}function oh(a,b){switch(a.tag){case 5:var c=a.type;b=1!==b.nodeType||c.toLowerCase()!==b.nodeName.toLowerCase()?null:b;return null!==b?(a.stateNode=b,!0):!1;case 6:return b=""===a.pendingProps||3!==b.nodeType?null:b,null!==b?(a.stateNode=b,!0):!1;case 13:return!1;default:return!1}}
function ph(a){if(lh){var b=kh;if(b){var c=b;if(!oh(a,b)){b=rf(c.nextSibling);if(!b||!oh(a,b)){a.flags=a.flags&-1025|2;lh=!1;jh=a;return}mh(jh,c)}jh=a;kh=rf(b.firstChild)}else a.flags=a.flags&-1025|2,lh=!1,jh=a}}function qh(a){for(a=a.return;null!==a&&5!==a.tag&&3!==a.tag&&13!==a.tag;)a=a.return;jh=a}
function rh(a){if(a!==jh)return!1;if(!lh)return qh(a),lh=!0,!1;var b=a.type;if(5!==a.tag||"head"!==b&&"body"!==b&&!nf(b,a.memoizedProps))for(b=kh;b;)mh(a,b),b=rf(b.nextSibling);qh(a);if(13===a.tag){a=a.memoizedState;a=null!==a?a.dehydrated:null;if(!a)throw Error(y(317));a:{a=a.nextSibling;for(b=0;a;){if(8===a.nodeType){var c=a.data;if("/$"===c){if(0===b){kh=rf(a.nextSibling);break a}b--}else"$"!==c&&"$!"!==c&&"$?"!==c||b++}a=a.nextSibling}kh=null}}else kh=jh?rf(a.stateNode.nextSibling):null;return!0}
function sh(){kh=jh=null;lh=!1}var th=[];function uh(){for(var a=0;a<th.length;a++)th[a]._workInProgressVersionPrimary=null;th.length=0}var vh=ra.ReactCurrentDispatcher,wh=ra.ReactCurrentBatchConfig,xh=0,R=null,S=null,T=null,yh=!1,zh=!1;function Ah(){throw Error(y(321));}function Bh(a,b){if(null===b)return!1;for(var c=0;c<b.length&&c<a.length;c++)if(!He(a[c],b[c]))return!1;return!0}
function Ch(a,b,c,d,e,f){xh=f;R=b;b.memoizedState=null;b.updateQueue=null;b.lanes=0;vh.current=null===a||null===a.memoizedState?Dh:Eh;a=c(d,e);if(zh){f=0;do{zh=!1;if(!(25>f))throw Error(y(301));f+=1;T=S=null;b.updateQueue=null;vh.current=Fh;a=c(d,e)}while(zh)}vh.current=Gh;b=null!==S&&null!==S.next;xh=0;T=S=R=null;yh=!1;if(b)throw Error(y(300));return a}function Hh(){var a={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};null===T?R.memoizedState=T=a:T=T.next=a;return T}
function Ih(){if(null===S){var a=R.alternate;a=null!==a?a.memoizedState:null}else a=S.next;var b=null===T?R.memoizedState:T.next;if(null!==b)T=b,S=a;else{if(null===a)throw Error(y(310));S=a;a={memoizedState:S.memoizedState,baseState:S.baseState,baseQueue:S.baseQueue,queue:S.queue,next:null};null===T?R.memoizedState=T=a:T=T.next=a}return T}function Jh(a,b){return"function"===typeof b?b(a):b}
function Kh(a){var b=Ih(),c=b.queue;if(null===c)throw Error(y(311));c.lastRenderedReducer=a;var d=S,e=d.baseQueue,f=c.pending;if(null!==f){if(null!==e){var g=e.next;e.next=f.next;f.next=g}d.baseQueue=e=f;c.pending=null}if(null!==e){e=e.next;d=d.baseState;var h=g=f=null,k=e;do{var l=k.lane;if((xh&l)===l)null!==h&&(h=h.next={lane:0,action:k.action,eagerReducer:k.eagerReducer,eagerState:k.eagerState,next:null}),d=k.eagerReducer===a?k.eagerState:a(d,k.action);else{var n={lane:l,action:k.action,eagerReducer:k.eagerReducer,
eagerState:k.eagerState,next:null};null===h?(g=h=n,f=d):h=h.next=n;R.lanes|=l;Dg|=l}k=k.next}while(null!==k&&k!==e);null===h?f=d:h.next=g;He(d,b.memoizedState)||(ug=!0);b.memoizedState=d;b.baseState=f;b.baseQueue=h;c.lastRenderedState=d}return[b.memoizedState,c.dispatch]}
function Lh(a){var b=Ih(),c=b.queue;if(null===c)throw Error(y(311));c.lastRenderedReducer=a;var d=c.dispatch,e=c.pending,f=b.memoizedState;if(null!==e){c.pending=null;var g=e=e.next;do f=a(f,g.action),g=g.next;while(g!==e);He(f,b.memoizedState)||(ug=!0);b.memoizedState=f;null===b.baseQueue&&(b.baseState=f);c.lastRenderedState=f}return[f,d]}
function Mh(a,b,c){var d=b._getVersion;d=d(b._source);var e=b._workInProgressVersionPrimary;if(null!==e)a=e===d;else if(a=a.mutableReadLanes,a=(xh&a)===a)b._workInProgressVersionPrimary=d,th.push(b);if(a)return c(b._source);th.push(b);throw Error(y(350));}
function Nh(a,b,c,d){var e=U;if(null===e)throw Error(y(349));var f=b._getVersion,g=f(b._source),h=vh.current,k=h.useState(function(){return Mh(e,b,c)}),l=k[1],n=k[0];k=T;var A=a.memoizedState,p=A.refs,C=p.getSnapshot,x=A.source;A=A.subscribe;var w=R;a.memoizedState={refs:p,source:b,subscribe:d};h.useEffect(function(){p.getSnapshot=c;p.setSnapshot=l;var a=f(b._source);if(!He(g,a)){a=c(b._source);He(n,a)||(l(a),a=Ig(w),e.mutableReadLanes|=a&e.pendingLanes);a=e.mutableReadLanes;e.entangledLanes|=a;for(var d=
e.entanglements,h=a;0<h;){var k=31-Vc(h),v=1<<k;d[k]|=a;h&=~v}}},[c,b,d]);h.useEffect(function(){return d(b._source,function(){var a=p.getSnapshot,c=p.setSnapshot;try{c(a(b._source));var d=Ig(w);e.mutableReadLanes|=d&e.pendingLanes}catch(q){c(function(){throw q;})}})},[b,d]);He(C,c)&&He(x,b)&&He(A,d)||(a={pending:null,dispatch:null,lastRenderedReducer:Jh,lastRenderedState:n},a.dispatch=l=Oh.bind(null,R,a),k.queue=a,k.baseQueue=null,n=Mh(e,b,c),k.memoizedState=k.baseState=n);return n}
function Ph(a,b,c){var d=Ih();return Nh(d,a,b,c)}function Qh(a){var b=Hh();"function"===typeof a&&(a=a());b.memoizedState=b.baseState=a;a=b.queue={pending:null,dispatch:null,lastRenderedReducer:Jh,lastRenderedState:a};a=a.dispatch=Oh.bind(null,R,a);return[b.memoizedState,a]}
function Rh(a,b,c,d){a={tag:a,create:b,destroy:c,deps:d,next:null};b=R.updateQueue;null===b?(b={lastEffect:null},R.updateQueue=b,b.lastEffect=a.next=a):(c=b.lastEffect,null===c?b.lastEffect=a.next=a:(d=c.next,c.next=a,a.next=d,b.lastEffect=a));return a}function Sh(a){var b=Hh();a={current:a};return b.memoizedState=a}function Th(){return Ih().memoizedState}function Uh(a,b,c,d){var e=Hh();R.flags|=a;e.memoizedState=Rh(1|b,c,void 0,void 0===d?null:d)}
function Vh(a,b,c,d){var e=Ih();d=void 0===d?null:d;var f=void 0;if(null!==S){var g=S.memoizedState;f=g.destroy;if(null!==d&&Bh(d,g.deps)){Rh(b,c,f,d);return}}R.flags|=a;e.memoizedState=Rh(1|b,c,f,d)}function Wh(a,b){return Uh(516,4,a,b)}function Xh(a,b){return Vh(516,4,a,b)}function Yh(a,b){return Vh(4,2,a,b)}function Zh(a,b){if("function"===typeof b)return a=a(),b(a),function(){b(null)};if(null!==b&&void 0!==b)return a=a(),b.current=a,function(){b.current=null}}
function $h(a,b,c){c=null!==c&&void 0!==c?c.concat([a]):null;return Vh(4,2,Zh.bind(null,b,a),c)}function ai(){}function bi(a,b){var c=Ih();b=void 0===b?null:b;var d=c.memoizedState;if(null!==d&&null!==b&&Bh(b,d[1]))return d[0];c.memoizedState=[a,b];return a}function ci(a,b){var c=Ih();b=void 0===b?null:b;var d=c.memoizedState;if(null!==d&&null!==b&&Bh(b,d[1]))return d[0];a=a();c.memoizedState=[a,b];return a}
function di(a,b){var c=eg();gg(98>c?98:c,function(){a(!0)});gg(97<c?97:c,function(){var c=wh.transition;wh.transition=1;try{a(!1),b()}finally{wh.transition=c}})}
function Oh(a,b,c){var d=Hg(),e=Ig(a),f={lane:e,action:c,eagerReducer:null,eagerState:null,next:null},g=b.pending;null===g?f.next=f:(f.next=g.next,g.next=f);b.pending=f;g=a.alternate;if(a===R||null!==g&&g===R)zh=yh=!0;else{if(0===a.lanes&&(null===g||0===g.lanes)&&(g=b.lastRenderedReducer,null!==g))try{var h=b.lastRenderedState,k=g(h,c);f.eagerReducer=g;f.eagerState=k;if(He(k,h))return}catch(l){}finally{}Jg(a,e,d)}}
var Gh={readContext:vg,useCallback:Ah,useContext:Ah,useEffect:Ah,useImperativeHandle:Ah,useLayoutEffect:Ah,useMemo:Ah,useReducer:Ah,useRef:Ah,useState:Ah,useDebugValue:Ah,useDeferredValue:Ah,useTransition:Ah,useMutableSource:Ah,useOpaqueIdentifier:Ah,unstable_isNewReconciler:!1},Dh={readContext:vg,useCallback:function(a,b){Hh().memoizedState=[a,void 0===b?null:b];return a},useContext:vg,useEffect:Wh,useImperativeHandle:function(a,b,c){c=null!==c&&void 0!==c?c.concat([a]):null;return Uh(4,2,Zh.bind(null,
b,a),c)},useLayoutEffect:function(a,b){return Uh(4,2,a,b)},useMemo:function(a,b){var c=Hh();b=void 0===b?null:b;a=a();c.memoizedState=[a,b];return a},useReducer:function(a,b,c){var d=Hh();b=void 0!==c?c(b):b;d.memoizedState=d.baseState=b;a=d.queue={pending:null,dispatch:null,lastRenderedReducer:a,lastRenderedState:b};a=a.dispatch=Oh.bind(null,R,a);return[d.memoizedState,a]},useRef:Sh,useState:Qh,useDebugValue:ai,useDeferredValue:function(a){var b=Qh(a),c=b[0],d=b[1];Wh(function(){var b=wh.transition;
wh.transition=1;try{d(a)}finally{wh.transition=b}},[a]);return c},useTransition:function(){var a=Qh(!1),b=a[0];a=di.bind(null,a[1]);Sh(a);return[a,b]},useMutableSource:function(a,b,c){var d=Hh();d.memoizedState={refs:{getSnapshot:b,setSnapshot:null},source:a,subscribe:c};return Nh(d,a,b,c)},useOpaqueIdentifier:function(){if(lh){var a=!1,b=uf(function(){a||(a=!0,c("r:"+(tf++).toString(36)));throw Error(y(355));}),c=Qh(b)[1];0===(R.mode&2)&&(R.flags|=516,Rh(5,function(){c("r:"+(tf++).toString(36))},
void 0,null));return b}b="r:"+(tf++).toString(36);Qh(b);return b},unstable_isNewReconciler:!1},Eh={readContext:vg,useCallback:bi,useContext:vg,useEffect:Xh,useImperativeHandle:$h,useLayoutEffect:Yh,useMemo:ci,useReducer:Kh,useRef:Th,useState:function(){return Kh(Jh)},useDebugValue:ai,useDeferredValue:function(a){var b=Kh(Jh),c=b[0],d=b[1];Xh(function(){var b=wh.transition;wh.transition=1;try{d(a)}finally{wh.transition=b}},[a]);return c},useTransition:function(){var a=Kh(Jh)[0];return[Th().current,
a]},useMutableSource:Ph,useOpaqueIdentifier:function(){return Kh(Jh)[0]},unstable_isNewReconciler:!1},Fh={readContext:vg,useCallback:bi,useContext:vg,useEffect:Xh,useImperativeHandle:$h,useLayoutEffect:Yh,useMemo:ci,useReducer:Lh,useRef:Th,useState:function(){return Lh(Jh)},useDebugValue:ai,useDeferredValue:function(a){var b=Lh(Jh),c=b[0],d=b[1];Xh(function(){var b=wh.transition;wh.transition=1;try{d(a)}finally{wh.transition=b}},[a]);return c},useTransition:function(){var a=Lh(Jh)[0];return[Th().current,
a]},useMutableSource:Ph,useOpaqueIdentifier:function(){return Lh(Jh)[0]},unstable_isNewReconciler:!1},ei=ra.ReactCurrentOwner,ug=!1;function fi(a,b,c,d){b.child=null===a?Zg(b,null,c,d):Yg(b,a.child,c,d)}function gi(a,b,c,d,e){c=c.render;var f=b.ref;tg(b,e);d=Ch(a,b,c,d,f,e);if(null!==a&&!ug)return b.updateQueue=a.updateQueue,b.flags&=-517,a.lanes&=~e,hi(a,b,e);b.flags|=1;fi(a,b,d,e);return b.child}
function ii(a,b,c,d,e,f){if(null===a){var g=c.type;if("function"===typeof g&&!ji(g)&&void 0===g.defaultProps&&null===c.compare&&void 0===c.defaultProps)return b.tag=15,b.type=g,ki(a,b,g,d,e,f);a=Vg(c.type,null,d,b,b.mode,f);a.ref=b.ref;a.return=b;return b.child=a}g=a.child;if(0===(e&f)&&(e=g.memoizedProps,c=c.compare,c=null!==c?c:Je,c(e,d)&&a.ref===b.ref))return hi(a,b,f);b.flags|=1;a=Tg(g,d);a.ref=b.ref;a.return=b;return b.child=a}
function ki(a,b,c,d,e,f){if(null!==a&&Je(a.memoizedProps,d)&&a.ref===b.ref)if(ug=!1,0!==(f&e))0!==(a.flags&16384)&&(ug=!0);else return b.lanes=a.lanes,hi(a,b,f);return li(a,b,c,d,f)}
function mi(a,b,c){var d=b.pendingProps,e=d.children,f=null!==a?a.memoizedState:null;if("hidden"===d.mode||"unstable-defer-without-hiding"===d.mode)if(0===(b.mode&4))b.memoizedState={baseLanes:0},ni(b,c);else if(0!==(c&1073741824))b.memoizedState={baseLanes:0},ni(b,null!==f?f.baseLanes:c);else return a=null!==f?f.baseLanes|c:c,b.lanes=b.childLanes=1073741824,b.memoizedState={baseLanes:a},ni(b,a),null;else null!==f?(d=f.baseLanes|c,b.memoizedState=null):d=c,ni(b,d);fi(a,b,e,c);return b.child}
function oi(a,b){var c=b.ref;if(null===a&&null!==c||null!==a&&a.ref!==c)b.flags|=128}function li(a,b,c,d,e){var f=Ff(c)?Df:M.current;f=Ef(b,f);tg(b,e);c=Ch(a,b,c,d,f,e);if(null!==a&&!ug)return b.updateQueue=a.updateQueue,b.flags&=-517,a.lanes&=~e,hi(a,b,e);b.flags|=1;fi(a,b,c,e);return b.child}
function pi(a,b,c,d,e){if(Ff(c)){var f=!0;Jf(b)}else f=!1;tg(b,e);if(null===b.stateNode)null!==a&&(a.alternate=null,b.alternate=null,b.flags|=2),Mg(b,c,d),Og(b,c,d,e),d=!0;else if(null===a){var g=b.stateNode,h=b.memoizedProps;g.props=h;var k=g.context,l=c.contextType;"object"===typeof l&&null!==l?l=vg(l):(l=Ff(c)?Df:M.current,l=Ef(b,l));var n=c.getDerivedStateFromProps,A="function"===typeof n||"function"===typeof g.getSnapshotBeforeUpdate;A||"function"!==typeof g.UNSAFE_componentWillReceiveProps&&
"function"!==typeof g.componentWillReceiveProps||(h!==d||k!==l)&&Ng(b,g,d,l);wg=!1;var p=b.memoizedState;g.state=p;Cg(b,d,g,e);k=b.memoizedState;h!==d||p!==k||N.current||wg?("function"===typeof n&&(Gg(b,c,n,d),k=b.memoizedState),(h=wg||Lg(b,c,h,d,p,k,l))?(A||"function"!==typeof g.UNSAFE_componentWillMount&&"function"!==typeof g.componentWillMount||("function"===typeof g.componentWillMount&&g.componentWillMount(),"function"===typeof g.UNSAFE_componentWillMount&&g.UNSAFE_componentWillMount()),"function"===
typeof g.componentDidMount&&(b.flags|=4)):("function"===typeof g.componentDidMount&&(b.flags|=4),b.memoizedProps=d,b.memoizedState=k),g.props=d,g.state=k,g.context=l,d=h):("function"===typeof g.componentDidMount&&(b.flags|=4),d=!1)}else{g=b.stateNode;yg(a,b);h=b.memoizedProps;l=b.type===b.elementType?h:lg(b.type,h);g.props=l;A=b.pendingProps;p=g.context;k=c.contextType;"object"===typeof k&&null!==k?k=vg(k):(k=Ff(c)?Df:M.current,k=Ef(b,k));var C=c.getDerivedStateFromProps;(n="function"===typeof C||
"function"===typeof g.getSnapshotBeforeUpdate)||"function"!==typeof g.UNSAFE_componentWillReceiveProps&&"function"!==typeof g.componentWillReceiveProps||(h!==A||p!==k)&&Ng(b,g,d,k);wg=!1;p=b.memoizedState;g.state=p;Cg(b,d,g,e);var x=b.memoizedState;h!==A||p!==x||N.current||wg?("function"===typeof C&&(Gg(b,c,C,d),x=b.memoizedState),(l=wg||Lg(b,c,l,d,p,x,k))?(n||"function"!==typeof g.UNSAFE_componentWillUpdate&&"function"!==typeof g.componentWillUpdate||("function"===typeof g.componentWillUpdate&&g.componentWillUpdate(d,
x,k),"function"===typeof g.UNSAFE_componentWillUpdate&&g.UNSAFE_componentWillUpdate(d,x,k)),"function"===typeof g.componentDidUpdate&&(b.flags|=4),"function"===typeof g.getSnapshotBeforeUpdate&&(b.flags|=256)):("function"!==typeof g.componentDidUpdate||h===a.memoizedProps&&p===a.memoizedState||(b.flags|=4),"function"!==typeof g.getSnapshotBeforeUpdate||h===a.memoizedProps&&p===a.memoizedState||(b.flags|=256),b.memoizedProps=d,b.memoizedState=x),g.props=d,g.state=x,g.context=k,d=l):("function"!==typeof g.componentDidUpdate||
h===a.memoizedProps&&p===a.memoizedState||(b.flags|=4),"function"!==typeof g.getSnapshotBeforeUpdate||h===a.memoizedProps&&p===a.memoizedState||(b.flags|=256),d=!1)}return qi(a,b,c,d,f,e)}
function qi(a,b,c,d,e,f){oi(a,b);var g=0!==(b.flags&64);if(!d&&!g)return e&&Kf(b,c,!1),hi(a,b,f);d=b.stateNode;ei.current=b;var h=g&&"function"!==typeof c.getDerivedStateFromError?null:d.render();b.flags|=1;null!==a&&g?(b.child=Yg(b,a.child,null,f),b.child=Yg(b,null,h,f)):fi(a,b,h,f);b.memoizedState=d.state;e&&Kf(b,c,!0);return b.child}function ri(a){var b=a.stateNode;b.pendingContext?Hf(a,b.pendingContext,b.pendingContext!==b.context):b.context&&Hf(a,b.context,!1);eh(a,b.containerInfo)}
var si={dehydrated:null,retryLane:0};
function ti(a,b,c){var d=b.pendingProps,e=P.current,f=!1,g;(g=0!==(b.flags&64))||(g=null!==a&&null===a.memoizedState?!1:0!==(e&2));g?(f=!0,b.flags&=-65):null!==a&&null===a.memoizedState||void 0===d.fallback||!0===d.unstable_avoidThisFallback||(e|=1);I(P,e&1);if(null===a){void 0!==d.fallback&&ph(b);a=d.children;e=d.fallback;if(f)return a=ui(b,a,e,c),b.child.memoizedState={baseLanes:c},b.memoizedState=si,a;if("number"===typeof d.unstable_expectedLoadTime)return a=ui(b,a,e,c),b.child.memoizedState={baseLanes:c},
b.memoizedState=si,b.lanes=33554432,a;c=vi({mode:"visible",children:a},b.mode,c,null);c.return=b;return b.child=c}if(null!==a.memoizedState){if(f)return d=wi(a,b,d.children,d.fallback,c),f=b.child,e=a.child.memoizedState,f.memoizedState=null===e?{baseLanes:c}:{baseLanes:e.baseLanes|c},f.childLanes=a.childLanes&~c,b.memoizedState=si,d;c=xi(a,b,d.children,c);b.memoizedState=null;return c}if(f)return d=wi(a,b,d.children,d.fallback,c),f=b.child,e=a.child.memoizedState,f.memoizedState=null===e?{baseLanes:c}:
{baseLanes:e.baseLanes|c},f.childLanes=a.childLanes&~c,b.memoizedState=si,d;c=xi(a,b,d.children,c);b.memoizedState=null;return c}function ui(a,b,c,d){var e=a.mode,f=a.child;b={mode:"hidden",children:b};0===(e&2)&&null!==f?(f.childLanes=0,f.pendingProps=b):f=vi(b,e,0,null);c=Xg(c,e,d,null);f.return=a;c.return=a;f.sibling=c;a.child=f;return c}
function xi(a,b,c,d){var e=a.child;a=e.sibling;c=Tg(e,{mode:"visible",children:c});0===(b.mode&2)&&(c.lanes=d);c.return=b;c.sibling=null;null!==a&&(a.nextEffect=null,a.flags=8,b.firstEffect=b.lastEffect=a);return b.child=c}
function wi(a,b,c,d,e){var f=b.mode,g=a.child;a=g.sibling;var h={mode:"hidden",children:c};0===(f&2)&&b.child!==g?(c=b.child,c.childLanes=0,c.pendingProps=h,g=c.lastEffect,null!==g?(b.firstEffect=c.firstEffect,b.lastEffect=g,g.nextEffect=null):b.firstEffect=b.lastEffect=null):c=Tg(g,h);null!==a?d=Tg(a,d):(d=Xg(d,f,e,null),d.flags|=2);d.return=b;c.return=b;c.sibling=d;b.child=c;return d}function yi(a,b){a.lanes|=b;var c=a.alternate;null!==c&&(c.lanes|=b);sg(a.return,b)}
function zi(a,b,c,d,e,f){var g=a.memoizedState;null===g?a.memoizedState={isBackwards:b,rendering:null,renderingStartTime:0,last:d,tail:c,tailMode:e,lastEffect:f}:(g.isBackwards=b,g.rendering=null,g.renderingStartTime=0,g.last=d,g.tail=c,g.tailMode=e,g.lastEffect=f)}
function Ai(a,b,c){var d=b.pendingProps,e=d.revealOrder,f=d.tail;fi(a,b,d.children,c);d=P.current;if(0!==(d&2))d=d&1|2,b.flags|=64;else{if(null!==a&&0!==(a.flags&64))a:for(a=b.child;null!==a;){if(13===a.tag)null!==a.memoizedState&&yi(a,c);else if(19===a.tag)yi(a,c);else if(null!==a.child){a.child.return=a;a=a.child;continue}if(a===b)break a;for(;null===a.sibling;){if(null===a.return||a.return===b)break a;a=a.return}a.sibling.return=a.return;a=a.sibling}d&=1}I(P,d);if(0===(b.mode&2))b.memoizedState=
null;else switch(e){case "forwards":c=b.child;for(e=null;null!==c;)a=c.alternate,null!==a&&null===ih(a)&&(e=c),c=c.sibling;c=e;null===c?(e=b.child,b.child=null):(e=c.sibling,c.sibling=null);zi(b,!1,e,c,f,b.lastEffect);break;case "backwards":c=null;e=b.child;for(b.child=null;null!==e;){a=e.alternate;if(null!==a&&null===ih(a)){b.child=e;break}a=e.sibling;e.sibling=c;c=e;e=a}zi(b,!0,c,null,f,b.lastEffect);break;case "together":zi(b,!1,null,null,void 0,b.lastEffect);break;default:b.memoizedState=null}return b.child}
function hi(a,b,c){null!==a&&(b.dependencies=a.dependencies);Dg|=b.lanes;if(0!==(c&b.childLanes)){if(null!==a&&b.child!==a.child)throw Error(y(153));if(null!==b.child){a=b.child;c=Tg(a,a.pendingProps);b.child=c;for(c.return=b;null!==a.sibling;)a=a.sibling,c=c.sibling=Tg(a,a.pendingProps),c.return=b;c.sibling=null}return b.child}return null}var Bi,Ci,Di,Ei;
Bi=function(a,b){for(var c=b.child;null!==c;){if(5===c.tag||6===c.tag)a.appendChild(c.stateNode);else if(4!==c.tag&&null!==c.child){c.child.return=c;c=c.child;continue}if(c===b)break;for(;null===c.sibling;){if(null===c.return||c.return===b)return;c=c.return}c.sibling.return=c.return;c=c.sibling}};Ci=function(){};
Di=function(a,b,c,d){var e=a.memoizedProps;if(e!==d){a=b.stateNode;dh(ah.current);var f=null;switch(c){case "input":e=Ya(a,e);d=Ya(a,d);f=[];break;case "option":e=eb(a,e);d=eb(a,d);f=[];break;case "select":e=m({},e,{value:void 0});d=m({},d,{value:void 0});f=[];break;case "textarea":e=gb(a,e);d=gb(a,d);f=[];break;default:"function"!==typeof e.onClick&&"function"===typeof d.onClick&&(a.onclick=jf)}vb(c,d);var g;c=null;for(l in e)if(!d.hasOwnProperty(l)&&e.hasOwnProperty(l)&&null!=e[l])if("style"===
l){var h=e[l];for(g in h)h.hasOwnProperty(g)&&(c||(c={}),c[g]="")}else"dangerouslySetInnerHTML"!==l&&"children"!==l&&"suppressContentEditableWarning"!==l&&"suppressHydrationWarning"!==l&&"autoFocus"!==l&&(ca.hasOwnProperty(l)?f||(f=[]):(f=f||[]).push(l,null));for(l in d){var k=d[l];h=null!=e?e[l]:void 0;if(d.hasOwnProperty(l)&&k!==h&&(null!=k||null!=h))if("style"===l)if(h){for(g in h)!h.hasOwnProperty(g)||k&&k.hasOwnProperty(g)||(c||(c={}),c[g]="");for(g in k)k.hasOwnProperty(g)&&h[g]!==k[g]&&(c||
(c={}),c[g]=k[g])}else c||(f||(f=[]),f.push(l,c)),c=k;else"dangerouslySetInnerHTML"===l?(k=k?k.__html:void 0,h=h?h.__html:void 0,null!=k&&h!==k&&(f=f||[]).push(l,k)):"children"===l?"string"!==typeof k&&"number"!==typeof k||(f=f||[]).push(l,""+k):"suppressContentEditableWarning"!==l&&"suppressHydrationWarning"!==l&&(ca.hasOwnProperty(l)?(null!=k&&"onScroll"===l&&G("scroll",a),f||h===k||(f=[])):"object"===typeof k&&null!==k&&k.$$typeof===Ga?k.toString():(f=f||[]).push(l,k))}c&&(f=f||[]).push("style",
c);var l=f;if(b.updateQueue=l)b.flags|=4}};Ei=function(a,b,c,d){c!==d&&(b.flags|=4)};function Fi(a,b){if(!lh)switch(a.tailMode){case "hidden":b=a.tail;for(var c=null;null!==b;)null!==b.alternate&&(c=b),b=b.sibling;null===c?a.tail=null:c.sibling=null;break;case "collapsed":c=a.tail;for(var d=null;null!==c;)null!==c.alternate&&(d=c),c=c.sibling;null===d?b||null===a.tail?a.tail=null:a.tail.sibling=null:d.sibling=null}}
function Gi(a,b,c){var d=b.pendingProps;switch(b.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return null;case 1:return Ff(b.type)&&Gf(),null;case 3:fh();H(N);H(M);uh();d=b.stateNode;d.pendingContext&&(d.context=d.pendingContext,d.pendingContext=null);if(null===a||null===a.child)rh(b)?b.flags|=4:d.hydrate||(b.flags|=256);Ci(b);return null;case 5:hh(b);var e=dh(ch.current);c=b.type;if(null!==a&&null!=b.stateNode)Di(a,b,c,d,e),a.ref!==b.ref&&(b.flags|=128);else{if(!d){if(null===
b.stateNode)throw Error(y(166));return null}a=dh(ah.current);if(rh(b)){d=b.stateNode;c=b.type;var f=b.memoizedProps;d[wf]=b;d[xf]=f;switch(c){case "dialog":G("cancel",d);G("close",d);break;case "iframe":case "object":case "embed":G("load",d);break;case "video":case "audio":for(a=0;a<Xe.length;a++)G(Xe[a],d);break;case "source":G("error",d);break;case "img":case "image":case "link":G("error",d);G("load",d);break;case "details":G("toggle",d);break;case "input":Za(d,f);G("invalid",d);break;case "select":d._wrapperState=
{wasMultiple:!!f.multiple};G("invalid",d);break;case "textarea":hb(d,f),G("invalid",d)}vb(c,f);a=null;for(var g in f)f.hasOwnProperty(g)&&(e=f[g],"children"===g?"string"===typeof e?d.textContent!==e&&(a=["children",e]):"number"===typeof e&&d.textContent!==""+e&&(a=["children",""+e]):ca.hasOwnProperty(g)&&null!=e&&"onScroll"===g&&G("scroll",d));switch(c){case "input":Va(d);cb(d,f,!0);break;case "textarea":Va(d);jb(d);break;case "select":case "option":break;default:"function"===typeof f.onClick&&(d.onclick=
jf)}d=a;b.updateQueue=d;null!==d&&(b.flags|=4)}else{g=9===e.nodeType?e:e.ownerDocument;a===kb.html&&(a=lb(c));a===kb.html?"script"===c?(a=g.createElement("div"),a.innerHTML="<script>\x3c/script>",a=a.removeChild(a.firstChild)):"string"===typeof d.is?a=g.createElement(c,{is:d.is}):(a=g.createElement(c),"select"===c&&(g=a,d.multiple?g.multiple=!0:d.size&&(g.size=d.size))):a=g.createElementNS(a,c);a[wf]=b;a[xf]=d;Bi(a,b,!1,!1);b.stateNode=a;g=wb(c,d);switch(c){case "dialog":G("cancel",a);G("close",a);
e=d;break;case "iframe":case "object":case "embed":G("load",a);e=d;break;case "video":case "audio":for(e=0;e<Xe.length;e++)G(Xe[e],a);e=d;break;case "source":G("error",a);e=d;break;case "img":case "image":case "link":G("error",a);G("load",a);e=d;break;case "details":G("toggle",a);e=d;break;case "input":Za(a,d);e=Ya(a,d);G("invalid",a);break;case "option":e=eb(a,d);break;case "select":a._wrapperState={wasMultiple:!!d.multiple};e=m({},d,{value:void 0});G("invalid",a);break;case "textarea":hb(a,d);e=
gb(a,d);G("invalid",a);break;default:e=d}vb(c,e);var h=e;for(f in h)if(h.hasOwnProperty(f)){var k=h[f];"style"===f?tb(a,k):"dangerouslySetInnerHTML"===f?(k=k?k.__html:void 0,null!=k&&ob(a,k)):"children"===f?"string"===typeof k?("textarea"!==c||""!==k)&&pb(a,k):"number"===typeof k&&pb(a,""+k):"suppressContentEditableWarning"!==f&&"suppressHydrationWarning"!==f&&"autoFocus"!==f&&(ca.hasOwnProperty(f)?null!=k&&"onScroll"===f&&G("scroll",a):null!=k&&qa(a,f,k,g))}switch(c){case "input":Va(a);cb(a,d,!1);
break;case "textarea":Va(a);jb(a);break;case "option":null!=d.value&&a.setAttribute("value",""+Sa(d.value));break;case "select":a.multiple=!!d.multiple;f=d.value;null!=f?fb(a,!!d.multiple,f,!1):null!=d.defaultValue&&fb(a,!!d.multiple,d.defaultValue,!0);break;default:"function"===typeof e.onClick&&(a.onclick=jf)}mf(c,d)&&(b.flags|=4)}null!==b.ref&&(b.flags|=128)}return null;case 6:if(a&&null!=b.stateNode)Ei(a,b,a.memoizedProps,d);else{if("string"!==typeof d&&null===b.stateNode)throw Error(y(166));
c=dh(ch.current);dh(ah.current);rh(b)?(d=b.stateNode,c=b.memoizedProps,d[wf]=b,d.nodeValue!==c&&(b.flags|=4)):(d=(9===c.nodeType?c:c.ownerDocument).createTextNode(d),d[wf]=b,b.stateNode=d)}return null;case 13:H(P);d=b.memoizedState;if(0!==(b.flags&64))return b.lanes=c,b;d=null!==d;c=!1;null===a?void 0!==b.memoizedProps.fallback&&rh(b):c=null!==a.memoizedState;if(d&&!c&&0!==(b.mode&2))if(null===a&&!0!==b.memoizedProps.unstable_avoidThisFallback||0!==(P.current&1))0===V&&(V=3);else{if(0===V||3===V)V=
4;null===U||0===(Dg&134217727)&&0===(Hi&134217727)||Ii(U,W)}if(d||c)b.flags|=4;return null;case 4:return fh(),Ci(b),null===a&&cf(b.stateNode.containerInfo),null;case 10:return rg(b),null;case 17:return Ff(b.type)&&Gf(),null;case 19:H(P);d=b.memoizedState;if(null===d)return null;f=0!==(b.flags&64);g=d.rendering;if(null===g)if(f)Fi(d,!1);else{if(0!==V||null!==a&&0!==(a.flags&64))for(a=b.child;null!==a;){g=ih(a);if(null!==g){b.flags|=64;Fi(d,!1);f=g.updateQueue;null!==f&&(b.updateQueue=f,b.flags|=4);
null===d.lastEffect&&(b.firstEffect=null);b.lastEffect=d.lastEffect;d=c;for(c=b.child;null!==c;)f=c,a=d,f.flags&=2,f.nextEffect=null,f.firstEffect=null,f.lastEffect=null,g=f.alternate,null===g?(f.childLanes=0,f.lanes=a,f.child=null,f.memoizedProps=null,f.memoizedState=null,f.updateQueue=null,f.dependencies=null,f.stateNode=null):(f.childLanes=g.childLanes,f.lanes=g.lanes,f.child=g.child,f.memoizedProps=g.memoizedProps,f.memoizedState=g.memoizedState,f.updateQueue=g.updateQueue,f.type=g.type,a=g.dependencies,
f.dependencies=null===a?null:{lanes:a.lanes,firstContext:a.firstContext}),c=c.sibling;I(P,P.current&1|2);return b.child}a=a.sibling}null!==d.tail&&O()>Ji&&(b.flags|=64,f=!0,Fi(d,!1),b.lanes=33554432)}else{if(!f)if(a=ih(g),null!==a){if(b.flags|=64,f=!0,c=a.updateQueue,null!==c&&(b.updateQueue=c,b.flags|=4),Fi(d,!0),null===d.tail&&"hidden"===d.tailMode&&!g.alternate&&!lh)return b=b.lastEffect=d.lastEffect,null!==b&&(b.nextEffect=null),null}else 2*O()-d.renderingStartTime>Ji&&1073741824!==c&&(b.flags|=
64,f=!0,Fi(d,!1),b.lanes=33554432);d.isBackwards?(g.sibling=b.child,b.child=g):(c=d.last,null!==c?c.sibling=g:b.child=g,d.last=g)}return null!==d.tail?(c=d.tail,d.rendering=c,d.tail=c.sibling,d.lastEffect=b.lastEffect,d.renderingStartTime=O(),c.sibling=null,b=P.current,I(P,f?b&1|2:b&1),c):null;case 23:case 24:return Ki(),null!==a&&null!==a.memoizedState!==(null!==b.memoizedState)&&"unstable-defer-without-hiding"!==d.mode&&(b.flags|=4),null}throw Error(y(156,b.tag));}
function Li(a){switch(a.tag){case 1:Ff(a.type)&&Gf();var b=a.flags;return b&4096?(a.flags=b&-4097|64,a):null;case 3:fh();H(N);H(M);uh();b=a.flags;if(0!==(b&64))throw Error(y(285));a.flags=b&-4097|64;return a;case 5:return hh(a),null;case 13:return H(P),b=a.flags,b&4096?(a.flags=b&-4097|64,a):null;case 19:return H(P),null;case 4:return fh(),null;case 10:return rg(a),null;case 23:case 24:return Ki(),null;default:return null}}
function Mi(a,b){try{var c="",d=b;do c+=Qa(d),d=d.return;while(d);var e=c}catch(f){e="\nError generating stack: "+f.message+"\n"+f.stack}return{value:a,source:b,stack:e}}function Ni(a,b){try{console.error(b.value)}catch(c){setTimeout(function(){throw c;})}}var Oi="function"===typeof WeakMap?WeakMap:Map;function Pi(a,b,c){c=zg(-1,c);c.tag=3;c.payload={element:null};var d=b.value;c.callback=function(){Qi||(Qi=!0,Ri=d);Ni(a,b)};return c}
function Si(a,b,c){c=zg(-1,c);c.tag=3;var d=a.type.getDerivedStateFromError;if("function"===typeof d){var e=b.value;c.payload=function(){Ni(a,b);return d(e)}}var f=a.stateNode;null!==f&&"function"===typeof f.componentDidCatch&&(c.callback=function(){"function"!==typeof d&&(null===Ti?Ti=new Set([this]):Ti.add(this),Ni(a,b));var c=b.stack;this.componentDidCatch(b.value,{componentStack:null!==c?c:""})});return c}var Ui="function"===typeof WeakSet?WeakSet:Set;
function Vi(a){var b=a.ref;if(null!==b)if("function"===typeof b)try{b(null)}catch(c){Wi(a,c)}else b.current=null}function Xi(a,b){switch(b.tag){case 0:case 11:case 15:case 22:return;case 1:if(b.flags&256&&null!==a){var c=a.memoizedProps,d=a.memoizedState;a=b.stateNode;b=a.getSnapshotBeforeUpdate(b.elementType===b.type?c:lg(b.type,c),d);a.__reactInternalSnapshotBeforeUpdate=b}return;case 3:b.flags&256&&qf(b.stateNode.containerInfo);return;case 5:case 6:case 4:case 17:return}throw Error(y(163));}
function Yi(a,b,c){switch(c.tag){case 0:case 11:case 15:case 22:b=c.updateQueue;b=null!==b?b.lastEffect:null;if(null!==b){a=b=b.next;do{if(3===(a.tag&3)){var d=a.create;a.destroy=d()}a=a.next}while(a!==b)}b=c.updateQueue;b=null!==b?b.lastEffect:null;if(null!==b){a=b=b.next;do{var e=a;d=e.next;e=e.tag;0!==(e&4)&&0!==(e&1)&&(Zi(c,a),$i(c,a));a=d}while(a!==b)}return;case 1:a=c.stateNode;c.flags&4&&(null===b?a.componentDidMount():(d=c.elementType===c.type?b.memoizedProps:lg(c.type,b.memoizedProps),a.componentDidUpdate(d,
b.memoizedState,a.__reactInternalSnapshotBeforeUpdate)));b=c.updateQueue;null!==b&&Eg(c,b,a);return;case 3:b=c.updateQueue;if(null!==b){a=null;if(null!==c.child)switch(c.child.tag){case 5:a=c.child.stateNode;break;case 1:a=c.child.stateNode}Eg(c,b,a)}return;case 5:a=c.stateNode;null===b&&c.flags&4&&mf(c.type,c.memoizedProps)&&a.focus();return;case 6:return;case 4:return;case 12:return;case 13:null===c.memoizedState&&(c=c.alternate,null!==c&&(c=c.memoizedState,null!==c&&(c=c.dehydrated,null!==c&&Cc(c))));
return;case 19:case 17:case 20:case 21:case 23:case 24:return}throw Error(y(163));}
function aj(a,b){for(var c=a;;){if(5===c.tag){var d=c.stateNode;if(b)d=d.style,"function"===typeof d.setProperty?d.setProperty("display","none","important"):d.display="none";else{d=c.stateNode;var e=c.memoizedProps.style;e=void 0!==e&&null!==e&&e.hasOwnProperty("display")?e.display:null;d.style.display=sb("display",e)}}else if(6===c.tag)c.stateNode.nodeValue=b?"":c.memoizedProps;else if((23!==c.tag&&24!==c.tag||null===c.memoizedState||c===a)&&null!==c.child){c.child.return=c;c=c.child;continue}if(c===
a)break;for(;null===c.sibling;){if(null===c.return||c.return===a)return;c=c.return}c.sibling.return=c.return;c=c.sibling}}
function bj(a,b){if(Mf&&"function"===typeof Mf.onCommitFiberUnmount)try{Mf.onCommitFiberUnmount(Lf,b)}catch(f){}switch(b.tag){case 0:case 11:case 14:case 15:case 22:a=b.updateQueue;if(null!==a&&(a=a.lastEffect,null!==a)){var c=a=a.next;do{var d=c,e=d.destroy;d=d.tag;if(void 0!==e)if(0!==(d&4))Zi(b,c);else{d=b;try{e()}catch(f){Wi(d,f)}}c=c.next}while(c!==a)}break;case 1:Vi(b);a=b.stateNode;if("function"===typeof a.componentWillUnmount)try{a.props=b.memoizedProps,a.state=b.memoizedState,a.componentWillUnmount()}catch(f){Wi(b,
f)}break;case 5:Vi(b);break;case 4:cj(a,b)}}function dj(a){a.alternate=null;a.child=null;a.dependencies=null;a.firstEffect=null;a.lastEffect=null;a.memoizedProps=null;a.memoizedState=null;a.pendingProps=null;a.return=null;a.updateQueue=null}function ej(a){return 5===a.tag||3===a.tag||4===a.tag}
function fj(a){a:{for(var b=a.return;null!==b;){if(ej(b))break a;b=b.return}throw Error(y(160));}var c=b;b=c.stateNode;switch(c.tag){case 5:var d=!1;break;case 3:b=b.containerInfo;d=!0;break;case 4:b=b.containerInfo;d=!0;break;default:throw Error(y(161));}c.flags&16&&(pb(b,""),c.flags&=-17);a:b:for(c=a;;){for(;null===c.sibling;){if(null===c.return||ej(c.return)){c=null;break a}c=c.return}c.sibling.return=c.return;for(c=c.sibling;5!==c.tag&&6!==c.tag&&18!==c.tag;){if(c.flags&2)continue b;if(null===
c.child||4===c.tag)continue b;else c.child.return=c,c=c.child}if(!(c.flags&2)){c=c.stateNode;break a}}d?gj(a,c,b):hj(a,c,b)}
function gj(a,b,c){var d=a.tag,e=5===d||6===d;if(e)a=e?a.stateNode:a.stateNode.instance,b?8===c.nodeType?c.parentNode.insertBefore(a,b):c.insertBefore(a,b):(8===c.nodeType?(b=c.parentNode,b.insertBefore(a,c)):(b=c,b.appendChild(a)),c=c._reactRootContainer,null!==c&&void 0!==c||null!==b.onclick||(b.onclick=jf));else if(4!==d&&(a=a.child,null!==a))for(gj(a,b,c),a=a.sibling;null!==a;)gj(a,b,c),a=a.sibling}
function hj(a,b,c){var d=a.tag,e=5===d||6===d;if(e)a=e?a.stateNode:a.stateNode.instance,b?c.insertBefore(a,b):c.appendChild(a);else if(4!==d&&(a=a.child,null!==a))for(hj(a,b,c),a=a.sibling;null!==a;)hj(a,b,c),a=a.sibling}
function cj(a,b){for(var c=b,d=!1,e,f;;){if(!d){d=c.return;a:for(;;){if(null===d)throw Error(y(160));e=d.stateNode;switch(d.tag){case 5:f=!1;break a;case 3:e=e.containerInfo;f=!0;break a;case 4:e=e.containerInfo;f=!0;break a}d=d.return}d=!0}if(5===c.tag||6===c.tag){a:for(var g=a,h=c,k=h;;)if(bj(g,k),null!==k.child&&4!==k.tag)k.child.return=k,k=k.child;else{if(k===h)break a;for(;null===k.sibling;){if(null===k.return||k.return===h)break a;k=k.return}k.sibling.return=k.return;k=k.sibling}f?(g=e,h=c.stateNode,
8===g.nodeType?g.parentNode.removeChild(h):g.removeChild(h)):e.removeChild(c.stateNode)}else if(4===c.tag){if(null!==c.child){e=c.stateNode.containerInfo;f=!0;c.child.return=c;c=c.child;continue}}else if(bj(a,c),null!==c.child){c.child.return=c;c=c.child;continue}if(c===b)break;for(;null===c.sibling;){if(null===c.return||c.return===b)return;c=c.return;4===c.tag&&(d=!1)}c.sibling.return=c.return;c=c.sibling}}
function ij(a,b){switch(b.tag){case 0:case 11:case 14:case 15:case 22:var c=b.updateQueue;c=null!==c?c.lastEffect:null;if(null!==c){var d=c=c.next;do 3===(d.tag&3)&&(a=d.destroy,d.destroy=void 0,void 0!==a&&a()),d=d.next;while(d!==c)}return;case 1:return;case 5:c=b.stateNode;if(null!=c){d=b.memoizedProps;var e=null!==a?a.memoizedProps:d;a=b.type;var f=b.updateQueue;b.updateQueue=null;if(null!==f){c[xf]=d;"input"===a&&"radio"===d.type&&null!=d.name&&$a(c,d);wb(a,e);b=wb(a,d);for(e=0;e<f.length;e+=
2){var g=f[e],h=f[e+1];"style"===g?tb(c,h):"dangerouslySetInnerHTML"===g?ob(c,h):"children"===g?pb(c,h):qa(c,g,h,b)}switch(a){case "input":ab(c,d);break;case "textarea":ib(c,d);break;case "select":a=c._wrapperState.wasMultiple,c._wrapperState.wasMultiple=!!d.multiple,f=d.value,null!=f?fb(c,!!d.multiple,f,!1):a!==!!d.multiple&&(null!=d.defaultValue?fb(c,!!d.multiple,d.defaultValue,!0):fb(c,!!d.multiple,d.multiple?[]:"",!1))}}}return;case 6:if(null===b.stateNode)throw Error(y(162));b.stateNode.nodeValue=
b.memoizedProps;return;case 3:c=b.stateNode;c.hydrate&&(c.hydrate=!1,Cc(c.containerInfo));return;case 12:return;case 13:null!==b.memoizedState&&(jj=O(),aj(b.child,!0));kj(b);return;case 19:kj(b);return;case 17:return;case 23:case 24:aj(b,null!==b.memoizedState);return}throw Error(y(163));}function kj(a){var b=a.updateQueue;if(null!==b){a.updateQueue=null;var c=a.stateNode;null===c&&(c=a.stateNode=new Ui);b.forEach(function(b){var d=lj.bind(null,a,b);c.has(b)||(c.add(b),b.then(d,d))})}}
function mj(a,b){return null!==a&&(a=a.memoizedState,null===a||null!==a.dehydrated)?(b=b.memoizedState,null!==b&&null===b.dehydrated):!1}var nj=Math.ceil,oj=ra.ReactCurrentDispatcher,pj=ra.ReactCurrentOwner,X=0,U=null,Y=null,W=0,qj=0,rj=Bf(0),V=0,sj=null,tj=0,Dg=0,Hi=0,uj=0,vj=null,jj=0,Ji=Infinity;function wj(){Ji=O()+500}var Z=null,Qi=!1,Ri=null,Ti=null,xj=!1,yj=null,zj=90,Aj=[],Bj=[],Cj=null,Dj=0,Ej=null,Fj=-1,Gj=0,Hj=0,Ij=null,Jj=!1;function Hg(){return 0!==(X&48)?O():-1!==Fj?Fj:Fj=O()}
function Ig(a){a=a.mode;if(0===(a&2))return 1;if(0===(a&4))return 99===eg()?1:2;0===Gj&&(Gj=tj);if(0!==kg.transition){0!==Hj&&(Hj=null!==vj?vj.pendingLanes:0);a=Gj;var b=4186112&~Hj;b&=-b;0===b&&(a=4186112&~a,b=a&-a,0===b&&(b=8192));return b}a=eg();0!==(X&4)&&98===a?a=Xc(12,Gj):(a=Sc(a),a=Xc(a,Gj));return a}
function Jg(a,b,c){if(50<Dj)throw Dj=0,Ej=null,Error(y(185));a=Kj(a,b);if(null===a)return null;$c(a,b,c);a===U&&(Hi|=b,4===V&&Ii(a,W));var d=eg();1===b?0!==(X&8)&&0===(X&48)?Lj(a):(Mj(a,c),0===X&&(wj(),ig())):(0===(X&4)||98!==d&&99!==d||(null===Cj?Cj=new Set([a]):Cj.add(a)),Mj(a,c));vj=a}function Kj(a,b){a.lanes|=b;var c=a.alternate;null!==c&&(c.lanes|=b);c=a;for(a=a.return;null!==a;)a.childLanes|=b,c=a.alternate,null!==c&&(c.childLanes|=b),c=a,a=a.return;return 3===c.tag?c.stateNode:null}
function Mj(a,b){for(var c=a.callbackNode,d=a.suspendedLanes,e=a.pingedLanes,f=a.expirationTimes,g=a.pendingLanes;0<g;){var h=31-Vc(g),k=1<<h,l=f[h];if(-1===l){if(0===(k&d)||0!==(k&e)){l=b;Rc(k);var n=F;f[h]=10<=n?l+250:6<=n?l+5E3:-1}}else l<=b&&(a.expiredLanes|=k);g&=~k}d=Uc(a,a===U?W:0);b=F;if(0===d)null!==c&&(c!==Zf&&Pf(c),a.callbackNode=null,a.callbackPriority=0);else{if(null!==c){if(a.callbackPriority===b)return;c!==Zf&&Pf(c)}15===b?(c=Lj.bind(null,a),null===ag?(ag=[c],bg=Of(Uf,jg)):ag.push(c),
c=Zf):14===b?c=hg(99,Lj.bind(null,a)):(c=Tc(b),c=hg(c,Nj.bind(null,a)));a.callbackPriority=b;a.callbackNode=c}}
function Nj(a){Fj=-1;Hj=Gj=0;if(0!==(X&48))throw Error(y(327));var b=a.callbackNode;if(Oj()&&a.callbackNode!==b)return null;var c=Uc(a,a===U?W:0);if(0===c)return null;var d=c;var e=X;X|=16;var f=Pj();if(U!==a||W!==d)wj(),Qj(a,d);do try{Rj();break}catch(h){Sj(a,h)}while(1);qg();oj.current=f;X=e;null!==Y?d=0:(U=null,W=0,d=V);if(0!==(tj&Hi))Qj(a,0);else if(0!==d){2===d&&(X|=64,a.hydrate&&(a.hydrate=!1,qf(a.containerInfo)),c=Wc(a),0!==c&&(d=Tj(a,c)));if(1===d)throw b=sj,Qj(a,0),Ii(a,c),Mj(a,O()),b;a.finishedWork=
a.current.alternate;a.finishedLanes=c;switch(d){case 0:case 1:throw Error(y(345));case 2:Uj(a);break;case 3:Ii(a,c);if((c&62914560)===c&&(d=jj+500-O(),10<d)){if(0!==Uc(a,0))break;e=a.suspendedLanes;if((e&c)!==c){Hg();a.pingedLanes|=a.suspendedLanes&e;break}a.timeoutHandle=of(Uj.bind(null,a),d);break}Uj(a);break;case 4:Ii(a,c);if((c&4186112)===c)break;d=a.eventTimes;for(e=-1;0<c;){var g=31-Vc(c);f=1<<g;g=d[g];g>e&&(e=g);c&=~f}c=e;c=O()-c;c=(120>c?120:480>c?480:1080>c?1080:1920>c?1920:3E3>c?3E3:4320>
c?4320:1960*nj(c/1960))-c;if(10<c){a.timeoutHandle=of(Uj.bind(null,a),c);break}Uj(a);break;case 5:Uj(a);break;default:throw Error(y(329));}}Mj(a,O());return a.callbackNode===b?Nj.bind(null,a):null}function Ii(a,b){b&=~uj;b&=~Hi;a.suspendedLanes|=b;a.pingedLanes&=~b;for(a=a.expirationTimes;0<b;){var c=31-Vc(b),d=1<<c;a[c]=-1;b&=~d}}
function Lj(a){if(0!==(X&48))throw Error(y(327));Oj();if(a===U&&0!==(a.expiredLanes&W)){var b=W;var c=Tj(a,b);0!==(tj&Hi)&&(b=Uc(a,b),c=Tj(a,b))}else b=Uc(a,0),c=Tj(a,b);0!==a.tag&&2===c&&(X|=64,a.hydrate&&(a.hydrate=!1,qf(a.containerInfo)),b=Wc(a),0!==b&&(c=Tj(a,b)));if(1===c)throw c=sj,Qj(a,0),Ii(a,b),Mj(a,O()),c;a.finishedWork=a.current.alternate;a.finishedLanes=b;Uj(a);Mj(a,O());return null}
function Vj(){if(null!==Cj){var a=Cj;Cj=null;a.forEach(function(a){a.expiredLanes|=24&a.pendingLanes;Mj(a,O())})}ig()}function Wj(a,b){var c=X;X|=1;try{return a(b)}finally{X=c,0===X&&(wj(),ig())}}function Xj(a,b){var c=X;X&=-2;X|=8;try{return a(b)}finally{X=c,0===X&&(wj(),ig())}}function ni(a,b){I(rj,qj);qj|=b;tj|=b}function Ki(){qj=rj.current;H(rj)}
function Qj(a,b){a.finishedWork=null;a.finishedLanes=0;var c=a.timeoutHandle;-1!==c&&(a.timeoutHandle=-1,pf(c));if(null!==Y)for(c=Y.return;null!==c;){var d=c;switch(d.tag){case 1:d=d.type.childContextTypes;null!==d&&void 0!==d&&Gf();break;case 3:fh();H(N);H(M);uh();break;case 5:hh(d);break;case 4:fh();break;case 13:H(P);break;case 19:H(P);break;case 10:rg(d);break;case 23:case 24:Ki()}c=c.return}U=a;Y=Tg(a.current,null);W=qj=tj=b;V=0;sj=null;uj=Hi=Dg=0}
function Sj(a,b){do{var c=Y;try{qg();vh.current=Gh;if(yh){for(var d=R.memoizedState;null!==d;){var e=d.queue;null!==e&&(e.pending=null);d=d.next}yh=!1}xh=0;T=S=R=null;zh=!1;pj.current=null;if(null===c||null===c.return){V=1;sj=b;Y=null;break}a:{var f=a,g=c.return,h=c,k=b;b=W;h.flags|=2048;h.firstEffect=h.lastEffect=null;if(null!==k&&"object"===typeof k&&"function"===typeof k.then){var l=k;if(0===(h.mode&2)){var n=h.alternate;n?(h.updateQueue=n.updateQueue,h.memoizedState=n.memoizedState,h.lanes=n.lanes):
(h.updateQueue=null,h.memoizedState=null)}var A=0!==(P.current&1),p=g;do{var C;if(C=13===p.tag){var x=p.memoizedState;if(null!==x)C=null!==x.dehydrated?!0:!1;else{var w=p.memoizedProps;C=void 0===w.fallback?!1:!0!==w.unstable_avoidThisFallback?!0:A?!1:!0}}if(C){var z=p.updateQueue;if(null===z){var u=new Set;u.add(l);p.updateQueue=u}else z.add(l);if(0===(p.mode&2)){p.flags|=64;h.flags|=16384;h.flags&=-2981;if(1===h.tag)if(null===h.alternate)h.tag=17;else{var t=zg(-1,1);t.tag=2;Ag(h,t)}h.lanes|=1;break a}k=
void 0;h=b;var q=f.pingCache;null===q?(q=f.pingCache=new Oi,k=new Set,q.set(l,k)):(k=q.get(l),void 0===k&&(k=new Set,q.set(l,k)));if(!k.has(h)){k.add(h);var v=Yj.bind(null,f,l,h);l.then(v,v)}p.flags|=4096;p.lanes=b;break a}p=p.return}while(null!==p);k=Error((Ra(h.type)||"A React component")+" suspended while rendering, but no fallback UI was specified.\n\nAdd a <Suspense fallback=...> component higher in the tree to provide a loading indicator or placeholder to display.")}5!==V&&(V=2);k=Mi(k,h);p=
g;do{switch(p.tag){case 3:f=k;p.flags|=4096;b&=-b;p.lanes|=b;var J=Pi(p,f,b);Bg(p,J);break a;case 1:f=k;var K=p.type,Q=p.stateNode;if(0===(p.flags&64)&&("function"===typeof K.getDerivedStateFromError||null!==Q&&"function"===typeof Q.componentDidCatch&&(null===Ti||!Ti.has(Q)))){p.flags|=4096;b&=-b;p.lanes|=b;var L=Si(p,f,b);Bg(p,L);break a}}p=p.return}while(null!==p)}Zj(c)}catch(va){b=va;Y===c&&null!==c&&(Y=c=c.return);continue}break}while(1)}
function Pj(){var a=oj.current;oj.current=Gh;return null===a?Gh:a}function Tj(a,b){var c=X;X|=16;var d=Pj();U===a&&W===b||Qj(a,b);do try{ak();break}catch(e){Sj(a,e)}while(1);qg();X=c;oj.current=d;if(null!==Y)throw Error(y(261));U=null;W=0;return V}function ak(){for(;null!==Y;)bk(Y)}function Rj(){for(;null!==Y&&!Qf();)bk(Y)}function bk(a){var b=ck(a.alternate,a,qj);a.memoizedProps=a.pendingProps;null===b?Zj(a):Y=b;pj.current=null}
function Zj(a){var b=a;do{var c=b.alternate;a=b.return;if(0===(b.flags&2048)){c=Gi(c,b,qj);if(null!==c){Y=c;return}c=b;if(24!==c.tag&&23!==c.tag||null===c.memoizedState||0!==(qj&1073741824)||0===(c.mode&4)){for(var d=0,e=c.child;null!==e;)d|=e.lanes|e.childLanes,e=e.sibling;c.childLanes=d}null!==a&&0===(a.flags&2048)&&(null===a.firstEffect&&(a.firstEffect=b.firstEffect),null!==b.lastEffect&&(null!==a.lastEffect&&(a.lastEffect.nextEffect=b.firstEffect),a.lastEffect=b.lastEffect),1<b.flags&&(null!==
a.lastEffect?a.lastEffect.nextEffect=b:a.firstEffect=b,a.lastEffect=b))}else{c=Li(b);if(null!==c){c.flags&=2047;Y=c;return}null!==a&&(a.firstEffect=a.lastEffect=null,a.flags|=2048)}b=b.sibling;if(null!==b){Y=b;return}Y=b=a}while(null!==b);0===V&&(V=5)}function Uj(a){var b=eg();gg(99,dk.bind(null,a,b));return null}
function dk(a,b){do Oj();while(null!==yj);if(0!==(X&48))throw Error(y(327));var c=a.finishedWork;if(null===c)return null;a.finishedWork=null;a.finishedLanes=0;if(c===a.current)throw Error(y(177));a.callbackNode=null;var d=c.lanes|c.childLanes,e=d,f=a.pendingLanes&~e;a.pendingLanes=e;a.suspendedLanes=0;a.pingedLanes=0;a.expiredLanes&=e;a.mutableReadLanes&=e;a.entangledLanes&=e;e=a.entanglements;for(var g=a.eventTimes,h=a.expirationTimes;0<f;){var k=31-Vc(f),l=1<<k;e[k]=0;g[k]=-1;h[k]=-1;f&=~l}null!==
Cj&&0===(d&24)&&Cj.has(a)&&Cj.delete(a);a===U&&(Y=U=null,W=0);1<c.flags?null!==c.lastEffect?(c.lastEffect.nextEffect=c,d=c.firstEffect):d=c:d=c.firstEffect;if(null!==d){e=X;X|=32;pj.current=null;kf=fd;g=Ne();if(Oe(g)){if("selectionStart"in g)h={start:g.selectionStart,end:g.selectionEnd};else a:if(h=(h=g.ownerDocument)&&h.defaultView||window,(l=h.getSelection&&h.getSelection())&&0!==l.rangeCount){h=l.anchorNode;f=l.anchorOffset;k=l.focusNode;l=l.focusOffset;try{h.nodeType,k.nodeType}catch(va){h=null;
break a}var n=0,A=-1,p=-1,C=0,x=0,w=g,z=null;b:for(;;){for(var u;;){w!==h||0!==f&&3!==w.nodeType||(A=n+f);w!==k||0!==l&&3!==w.nodeType||(p=n+l);3===w.nodeType&&(n+=w.nodeValue.length);if(null===(u=w.firstChild))break;z=w;w=u}for(;;){if(w===g)break b;z===h&&++C===f&&(A=n);z===k&&++x===l&&(p=n);if(null!==(u=w.nextSibling))break;w=z;z=w.parentNode}w=u}h=-1===A||-1===p?null:{start:A,end:p}}else h=null;h=h||{start:0,end:0}}else h=null;lf={focusedElem:g,selectionRange:h};fd=!1;Ij=null;Jj=!1;Z=d;do try{ek()}catch(va){if(null===
Z)throw Error(y(330));Wi(Z,va);Z=Z.nextEffect}while(null!==Z);Ij=null;Z=d;do try{for(g=a;null!==Z;){var t=Z.flags;t&16&&pb(Z.stateNode,"");if(t&128){var q=Z.alternate;if(null!==q){var v=q.ref;null!==v&&("function"===typeof v?v(null):v.current=null)}}switch(t&1038){case 2:fj(Z);Z.flags&=-3;break;case 6:fj(Z);Z.flags&=-3;ij(Z.alternate,Z);break;case 1024:Z.flags&=-1025;break;case 1028:Z.flags&=-1025;ij(Z.alternate,Z);break;case 4:ij(Z.alternate,Z);break;case 8:h=Z;cj(g,h);var J=h.alternate;dj(h);null!==
J&&dj(J)}Z=Z.nextEffect}}catch(va){if(null===Z)throw Error(y(330));Wi(Z,va);Z=Z.nextEffect}while(null!==Z);v=lf;q=Ne();t=v.focusedElem;g=v.selectionRange;if(q!==t&&t&&t.ownerDocument&&Me(t.ownerDocument.documentElement,t)){null!==g&&Oe(t)&&(q=g.start,v=g.end,void 0===v&&(v=q),"selectionStart"in t?(t.selectionStart=q,t.selectionEnd=Math.min(v,t.value.length)):(v=(q=t.ownerDocument||document)&&q.defaultView||window,v.getSelection&&(v=v.getSelection(),h=t.textContent.length,J=Math.min(g.start,h),g=void 0===
g.end?J:Math.min(g.end,h),!v.extend&&J>g&&(h=g,g=J,J=h),h=Le(t,J),f=Le(t,g),h&&f&&(1!==v.rangeCount||v.anchorNode!==h.node||v.anchorOffset!==h.offset||v.focusNode!==f.node||v.focusOffset!==f.offset)&&(q=q.createRange(),q.setStart(h.node,h.offset),v.removeAllRanges(),J>g?(v.addRange(q),v.extend(f.node,f.offset)):(q.setEnd(f.node,f.offset),v.addRange(q))))));q=[];for(v=t;v=v.parentNode;)1===v.nodeType&&q.push({element:v,left:v.scrollLeft,top:v.scrollTop});"function"===typeof t.focus&&t.focus();for(t=
0;t<q.length;t++)v=q[t],v.element.scrollLeft=v.left,v.element.scrollTop=v.top}fd=!!kf;lf=kf=null;a.current=c;Z=d;do try{for(t=a;null!==Z;){var K=Z.flags;K&36&&Yi(t,Z.alternate,Z);if(K&128){q=void 0;var Q=Z.ref;if(null!==Q){var L=Z.stateNode;switch(Z.tag){case 5:q=L;break;default:q=L}"function"===typeof Q?Q(q):Q.current=q}}Z=Z.nextEffect}}catch(va){if(null===Z)throw Error(y(330));Wi(Z,va);Z=Z.nextEffect}while(null!==Z);Z=null;$f();X=e}else a.current=c;if(xj)xj=!1,yj=a,zj=b;else for(Z=d;null!==Z;)b=
Z.nextEffect,Z.nextEffect=null,Z.flags&8&&(K=Z,K.sibling=null,K.stateNode=null),Z=b;d=a.pendingLanes;0===d&&(Ti=null);1===d?a===Ej?Dj++:(Dj=0,Ej=a):Dj=0;c=c.stateNode;if(Mf&&"function"===typeof Mf.onCommitFiberRoot)try{Mf.onCommitFiberRoot(Lf,c,void 0,64===(c.current.flags&64))}catch(va){}Mj(a,O());if(Qi)throw Qi=!1,a=Ri,Ri=null,a;if(0!==(X&8))return null;ig();return null}
function ek(){for(;null!==Z;){var a=Z.alternate;Jj||null===Ij||(0!==(Z.flags&8)?dc(Z,Ij)&&(Jj=!0):13===Z.tag&&mj(a,Z)&&dc(Z,Ij)&&(Jj=!0));var b=Z.flags;0!==(b&256)&&Xi(a,Z);0===(b&512)||xj||(xj=!0,hg(97,function(){Oj();return null}));Z=Z.nextEffect}}function Oj(){if(90!==zj){var a=97<zj?97:zj;zj=90;return gg(a,fk)}return!1}function $i(a,b){Aj.push(b,a);xj||(xj=!0,hg(97,function(){Oj();return null}))}function Zi(a,b){Bj.push(b,a);xj||(xj=!0,hg(97,function(){Oj();return null}))}
function fk(){if(null===yj)return!1;var a=yj;yj=null;if(0!==(X&48))throw Error(y(331));var b=X;X|=32;var c=Bj;Bj=[];for(var d=0;d<c.length;d+=2){var e=c[d],f=c[d+1],g=e.destroy;e.destroy=void 0;if("function"===typeof g)try{g()}catch(k){if(null===f)throw Error(y(330));Wi(f,k)}}c=Aj;Aj=[];for(d=0;d<c.length;d+=2){e=c[d];f=c[d+1];try{var h=e.create;e.destroy=h()}catch(k){if(null===f)throw Error(y(330));Wi(f,k)}}for(h=a.current.firstEffect;null!==h;)a=h.nextEffect,h.nextEffect=null,h.flags&8&&(h.sibling=
null,h.stateNode=null),h=a;X=b;ig();return!0}function gk(a,b,c){b=Mi(c,b);b=Pi(a,b,1);Ag(a,b);b=Hg();a=Kj(a,1);null!==a&&($c(a,1,b),Mj(a,b))}
function Wi(a,b){if(3===a.tag)gk(a,a,b);else for(var c=a.return;null!==c;){if(3===c.tag){gk(c,a,b);break}else if(1===c.tag){var d=c.stateNode;if("function"===typeof c.type.getDerivedStateFromError||"function"===typeof d.componentDidCatch&&(null===Ti||!Ti.has(d))){a=Mi(b,a);var e=Si(c,a,1);Ag(c,e);e=Hg();c=Kj(c,1);if(null!==c)$c(c,1,e),Mj(c,e);else if("function"===typeof d.componentDidCatch&&(null===Ti||!Ti.has(d)))try{d.componentDidCatch(b,a)}catch(f){}break}}c=c.return}}
function Yj(a,b,c){var d=a.pingCache;null!==d&&d.delete(b);b=Hg();a.pingedLanes|=a.suspendedLanes&c;U===a&&(W&c)===c&&(4===V||3===V&&(W&62914560)===W&&500>O()-jj?Qj(a,0):uj|=c);Mj(a,b)}function lj(a,b){var c=a.stateNode;null!==c&&c.delete(b);b=0;0===b&&(b=a.mode,0===(b&2)?b=1:0===(b&4)?b=99===eg()?1:2:(0===Gj&&(Gj=tj),b=Yc(62914560&~Gj),0===b&&(b=4194304)));c=Hg();a=Kj(a,b);null!==a&&($c(a,b,c),Mj(a,c))}var ck;
ck=function(a,b,c){var d=b.lanes;if(null!==a)if(a.memoizedProps!==b.pendingProps||N.current)ug=!0;else if(0!==(c&d))ug=0!==(a.flags&16384)?!0:!1;else{ug=!1;switch(b.tag){case 3:ri(b);sh();break;case 5:gh(b);break;case 1:Ff(b.type)&&Jf(b);break;case 4:eh(b,b.stateNode.containerInfo);break;case 10:d=b.memoizedProps.value;var e=b.type._context;I(mg,e._currentValue);e._currentValue=d;break;case 13:if(null!==b.memoizedState){if(0!==(c&b.child.childLanes))return ti(a,b,c);I(P,P.current&1);b=hi(a,b,c);return null!==
b?b.sibling:null}I(P,P.current&1);break;case 19:d=0!==(c&b.childLanes);if(0!==(a.flags&64)){if(d)return Ai(a,b,c);b.flags|=64}e=b.memoizedState;null!==e&&(e.rendering=null,e.tail=null,e.lastEffect=null);I(P,P.current);if(d)break;else return null;case 23:case 24:return b.lanes=0,mi(a,b,c)}return hi(a,b,c)}else ug=!1;b.lanes=0;switch(b.tag){case 2:d=b.type;null!==a&&(a.alternate=null,b.alternate=null,b.flags|=2);a=b.pendingProps;e=Ef(b,M.current);tg(b,c);e=Ch(null,b,d,a,e,c);b.flags|=1;if("object"===
typeof e&&null!==e&&"function"===typeof e.render&&void 0===e.$$typeof){b.tag=1;b.memoizedState=null;b.updateQueue=null;if(Ff(d)){var f=!0;Jf(b)}else f=!1;b.memoizedState=null!==e.state&&void 0!==e.state?e.state:null;xg(b);var g=d.getDerivedStateFromProps;"function"===typeof g&&Gg(b,d,g,a);e.updater=Kg;b.stateNode=e;e._reactInternals=b;Og(b,d,a,c);b=qi(null,b,d,!0,f,c)}else b.tag=0,fi(null,b,e,c),b=b.child;return b;case 16:e=b.elementType;a:{null!==a&&(a.alternate=null,b.alternate=null,b.flags|=2);
a=b.pendingProps;f=e._init;e=f(e._payload);b.type=e;f=b.tag=hk(e);a=lg(e,a);switch(f){case 0:b=li(null,b,e,a,c);break a;case 1:b=pi(null,b,e,a,c);break a;case 11:b=gi(null,b,e,a,c);break a;case 14:b=ii(null,b,e,lg(e.type,a),d,c);break a}throw Error(y(306,e,""));}return b;case 0:return d=b.type,e=b.pendingProps,e=b.elementType===d?e:lg(d,e),li(a,b,d,e,c);case 1:return d=b.type,e=b.pendingProps,e=b.elementType===d?e:lg(d,e),pi(a,b,d,e,c);case 3:ri(b);d=b.updateQueue;if(null===a||null===d)throw Error(y(282));
d=b.pendingProps;e=b.memoizedState;e=null!==e?e.element:null;yg(a,b);Cg(b,d,null,c);d=b.memoizedState.element;if(d===e)sh(),b=hi(a,b,c);else{e=b.stateNode;if(f=e.hydrate)kh=rf(b.stateNode.containerInfo.firstChild),jh=b,f=lh=!0;if(f){a=e.mutableSourceEagerHydrationData;if(null!=a)for(e=0;e<a.length;e+=2)f=a[e],f._workInProgressVersionPrimary=a[e+1],th.push(f);c=Zg(b,null,d,c);for(b.child=c;c;)c.flags=c.flags&-3|1024,c=c.sibling}else fi(a,b,d,c),sh();b=b.child}return b;case 5:return gh(b),null===a&&
ph(b),d=b.type,e=b.pendingProps,f=null!==a?a.memoizedProps:null,g=e.children,nf(d,e)?g=null:null!==f&&nf(d,f)&&(b.flags|=16),oi(a,b),fi(a,b,g,c),b.child;case 6:return null===a&&ph(b),null;case 13:return ti(a,b,c);case 4:return eh(b,b.stateNode.containerInfo),d=b.pendingProps,null===a?b.child=Yg(b,null,d,c):fi(a,b,d,c),b.child;case 11:return d=b.type,e=b.pendingProps,e=b.elementType===d?e:lg(d,e),gi(a,b,d,e,c);case 7:return fi(a,b,b.pendingProps,c),b.child;case 8:return fi(a,b,b.pendingProps.children,
c),b.child;case 12:return fi(a,b,b.pendingProps.children,c),b.child;case 10:a:{d=b.type._context;e=b.pendingProps;g=b.memoizedProps;f=e.value;var h=b.type._context;I(mg,h._currentValue);h._currentValue=f;if(null!==g)if(h=g.value,f=He(h,f)?0:("function"===typeof d._calculateChangedBits?d._calculateChangedBits(h,f):1073741823)|0,0===f){if(g.children===e.children&&!N.current){b=hi(a,b,c);break a}}else for(h=b.child,null!==h&&(h.return=b);null!==h;){var k=h.dependencies;if(null!==k){g=h.child;for(var l=
k.firstContext;null!==l;){if(l.context===d&&0!==(l.observedBits&f)){1===h.tag&&(l=zg(-1,c&-c),l.tag=2,Ag(h,l));h.lanes|=c;l=h.alternate;null!==l&&(l.lanes|=c);sg(h.return,c);k.lanes|=c;break}l=l.next}}else g=10===h.tag?h.type===b.type?null:h.child:h.child;if(null!==g)g.return=h;else for(g=h;null!==g;){if(g===b){g=null;break}h=g.sibling;if(null!==h){h.return=g.return;g=h;break}g=g.return}h=g}fi(a,b,e.children,c);b=b.child}return b;case 9:return e=b.type,f=b.pendingProps,d=f.children,tg(b,c),e=vg(e,
f.unstable_observedBits),d=d(e),b.flags|=1,fi(a,b,d,c),b.child;case 14:return e=b.type,f=lg(e,b.pendingProps),f=lg(e.type,f),ii(a,b,e,f,d,c);case 15:return ki(a,b,b.type,b.pendingProps,d,c);case 17:return d=b.type,e=b.pendingProps,e=b.elementType===d?e:lg(d,e),null!==a&&(a.alternate=null,b.alternate=null,b.flags|=2),b.tag=1,Ff(d)?(a=!0,Jf(b)):a=!1,tg(b,c),Mg(b,d,e),Og(b,d,e,c),qi(null,b,d,!0,a,c);case 19:return Ai(a,b,c);case 23:return mi(a,b,c);case 24:return mi(a,b,c)}throw Error(y(156,b.tag));
};function ik(a,b,c,d){this.tag=a;this.key=c;this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null;this.index=0;this.ref=null;this.pendingProps=b;this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null;this.mode=d;this.flags=0;this.lastEffect=this.firstEffect=this.nextEffect=null;this.childLanes=this.lanes=0;this.alternate=null}function nh(a,b,c,d){return new ik(a,b,c,d)}function ji(a){a=a.prototype;return!(!a||!a.isReactComponent)}
function hk(a){if("function"===typeof a)return ji(a)?1:0;if(void 0!==a&&null!==a){a=a.$$typeof;if(a===Aa)return 11;if(a===Da)return 14}return 2}
function Tg(a,b){var c=a.alternate;null===c?(c=nh(a.tag,b,a.key,a.mode),c.elementType=a.elementType,c.type=a.type,c.stateNode=a.stateNode,c.alternate=a,a.alternate=c):(c.pendingProps=b,c.type=a.type,c.flags=0,c.nextEffect=null,c.firstEffect=null,c.lastEffect=null);c.childLanes=a.childLanes;c.lanes=a.lanes;c.child=a.child;c.memoizedProps=a.memoizedProps;c.memoizedState=a.memoizedState;c.updateQueue=a.updateQueue;b=a.dependencies;c.dependencies=null===b?null:{lanes:b.lanes,firstContext:b.firstContext};
c.sibling=a.sibling;c.index=a.index;c.ref=a.ref;return c}
function Vg(a,b,c,d,e,f){var g=2;d=a;if("function"===typeof a)ji(a)&&(g=1);else if("string"===typeof a)g=5;else a:switch(a){case ua:return Xg(c.children,e,f,b);case Ha:g=8;e|=16;break;case wa:g=8;e|=1;break;case xa:return a=nh(12,c,b,e|8),a.elementType=xa,a.type=xa,a.lanes=f,a;case Ba:return a=nh(13,c,b,e),a.type=Ba,a.elementType=Ba,a.lanes=f,a;case Ca:return a=nh(19,c,b,e),a.elementType=Ca,a.lanes=f,a;case Ia:return vi(c,e,f,b);case Ja:return a=nh(24,c,b,e),a.elementType=Ja,a.lanes=f,a;default:if("object"===
typeof a&&null!==a)switch(a.$$typeof){case ya:g=10;break a;case za:g=9;break a;case Aa:g=11;break a;case Da:g=14;break a;case Ea:g=16;d=null;break a;case Fa:g=22;break a}throw Error(y(130,null==a?a:typeof a,""));}b=nh(g,c,b,e);b.elementType=a;b.type=d;b.lanes=f;return b}function Xg(a,b,c,d){a=nh(7,a,d,b);a.lanes=c;return a}function vi(a,b,c,d){a=nh(23,a,d,b);a.elementType=Ia;a.lanes=c;return a}function Ug(a,b,c){a=nh(6,a,null,b);a.lanes=c;return a}
function Wg(a,b,c){b=nh(4,null!==a.children?a.children:[],a.key,b);b.lanes=c;b.stateNode={containerInfo:a.containerInfo,pendingChildren:null,implementation:a.implementation};return b}
function jk(a,b,c){this.tag=b;this.containerInfo=a;this.finishedWork=this.pingCache=this.current=this.pendingChildren=null;this.timeoutHandle=-1;this.pendingContext=this.context=null;this.hydrate=c;this.callbackNode=null;this.callbackPriority=0;this.eventTimes=Zc(0);this.expirationTimes=Zc(-1);this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0;this.entanglements=Zc(0);this.mutableSourceEagerHydrationData=null}
function kk(a,b,c){var d=3<arguments.length&&void 0!==arguments[3]?arguments[3]:null;return{$$typeof:ta,key:null==d?null:""+d,children:a,containerInfo:b,implementation:c}}
function lk(a,b,c,d){var e=b.current,f=Hg(),g=Ig(e);a:if(c){c=c._reactInternals;b:{if(Zb(c)!==c||1!==c.tag)throw Error(y(170));var h=c;do{switch(h.tag){case 3:h=h.stateNode.context;break b;case 1:if(Ff(h.type)){h=h.stateNode.__reactInternalMemoizedMergedChildContext;break b}}h=h.return}while(null!==h);throw Error(y(171));}if(1===c.tag){var k=c.type;if(Ff(k)){c=If(c,k,h);break a}}c=h}else c=Cf;null===b.context?b.context=c:b.pendingContext=c;b=zg(f,g);b.payload={element:a};d=void 0===d?null:d;null!==
d&&(b.callback=d);Ag(e,b);Jg(e,g,f);return g}function mk(a){a=a.current;if(!a.child)return null;switch(a.child.tag){case 5:return a.child.stateNode;default:return a.child.stateNode}}function nk(a,b){a=a.memoizedState;if(null!==a&&null!==a.dehydrated){var c=a.retryLane;a.retryLane=0!==c&&c<b?c:b}}function ok(a,b){nk(a,b);(a=a.alternate)&&nk(a,b)}function pk(){return null}
function qk(a,b,c){var d=null!=c&&null!=c.hydrationOptions&&c.hydrationOptions.mutableSources||null;c=new jk(a,b,null!=c&&!0===c.hydrate);b=nh(3,null,null,2===b?7:1===b?3:0);c.current=b;b.stateNode=c;xg(b);a[ff]=c.current;cf(8===a.nodeType?a.parentNode:a);if(d)for(a=0;a<d.length;a++){b=d[a];var e=b._getVersion;e=e(b._source);null==c.mutableSourceEagerHydrationData?c.mutableSourceEagerHydrationData=[b,e]:c.mutableSourceEagerHydrationData.push(b,e)}this._internalRoot=c}
qk.prototype.render=function(a){lk(a,this._internalRoot,null,null)};qk.prototype.unmount=function(){var a=this._internalRoot,b=a.containerInfo;lk(null,a,null,function(){b[ff]=null})};function rk(a){return!(!a||1!==a.nodeType&&9!==a.nodeType&&11!==a.nodeType&&(8!==a.nodeType||" react-mount-point-unstable "!==a.nodeValue))}
function sk(a,b){b||(b=a?9===a.nodeType?a.documentElement:a.firstChild:null,b=!(!b||1!==b.nodeType||!b.hasAttribute("data-reactroot")));if(!b)for(var c;c=a.lastChild;)a.removeChild(c);return new qk(a,0,b?{hydrate:!0}:void 0)}
function tk(a,b,c,d,e){var f=c._reactRootContainer;if(f){var g=f._internalRoot;if("function"===typeof e){var h=e;e=function(){var a=mk(g);h.call(a)}}lk(b,g,a,e)}else{f=c._reactRootContainer=sk(c,d);g=f._internalRoot;if("function"===typeof e){var k=e;e=function(){var a=mk(g);k.call(a)}}Xj(function(){lk(b,g,a,e)})}return mk(g)}ec=function(a){if(13===a.tag){var b=Hg();Jg(a,4,b);ok(a,4)}};fc=function(a){if(13===a.tag){var b=Hg();Jg(a,67108864,b);ok(a,67108864)}};
gc=function(a){if(13===a.tag){var b=Hg(),c=Ig(a);Jg(a,c,b);ok(a,c)}};hc=function(a,b){return b()};
yb=function(a,b,c){switch(b){case "input":ab(a,c);b=c.name;if("radio"===c.type&&null!=b){for(c=a;c.parentNode;)c=c.parentNode;c=c.querySelectorAll("input[name="+JSON.stringify(""+b)+'][type="radio"]');for(b=0;b<c.length;b++){var d=c[b];if(d!==a&&d.form===a.form){var e=Db(d);if(!e)throw Error(y(90));Wa(d);ab(d,e)}}}break;case "textarea":ib(a,c);break;case "select":b=c.value,null!=b&&fb(a,!!c.multiple,b,!1)}};Gb=Wj;
Hb=function(a,b,c,d,e){var f=X;X|=4;try{return gg(98,a.bind(null,b,c,d,e))}finally{X=f,0===X&&(wj(),ig())}};Ib=function(){0===(X&49)&&(Vj(),Oj())};Jb=function(a,b){var c=X;X|=2;try{return a(b)}finally{X=c,0===X&&(wj(),ig())}};function uk(a,b){var c=2<arguments.length&&void 0!==arguments[2]?arguments[2]:null;if(!rk(b))throw Error(y(200));return kk(a,b,null,c)}var vk={Events:[Cb,ue,Db,Eb,Fb,Oj,{current:!1}]},wk={findFiberByHostInstance:wc,bundleType:0,version:"17.0.1",rendererPackageName:"react-dom"};
var xk={bundleType:wk.bundleType,version:wk.version,rendererPackageName:wk.rendererPackageName,rendererConfig:wk.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:ra.ReactCurrentDispatcher,findHostInstanceByFiber:function(a){a=cc(a);return null===a?null:a.stateNode},findFiberByHostInstance:wk.findFiberByHostInstance||
pk,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null};if("undefined"!==typeof __REACT_DEVTOOLS_GLOBAL_HOOK__){var yk=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!yk.isDisabled&&yk.supportsFiber)try{Lf=yk.inject(xk),Mf=yk}catch(a){}}__webpack_unused_export__=vk;__webpack_unused_export__=uk;
__webpack_unused_export__=function(a){if(null==a)return null;if(1===a.nodeType)return a;var b=a._reactInternals;if(void 0===b){if("function"===typeof a.render)throw Error(y(188));throw Error(y(268,Object.keys(a)));}a=cc(b);a=null===a?null:a.stateNode;return a};__webpack_unused_export__=function(a,b){var c=X;if(0!==(c&48))return a(b);X|=1;try{if(a)return gg(99,a.bind(null,b))}finally{X=c,ig()}};__webpack_unused_export__=function(a,b,c){if(!rk(b))throw Error(y(200));return tk(null,a,b,!0,c)};
exports.render=function(a,b,c){if(!rk(b))throw Error(y(200));return tk(null,a,b,!1,c)};__webpack_unused_export__=function(a){if(!rk(a))throw Error(y(40));return a._reactRootContainer?(Xj(function(){tk(null,null,a,!1,function(){a._reactRootContainer=null;a[ff]=null})}),!0):!1};exports.unstable_batchedUpdates=Wj;__webpack_unused_export__=function(a,b){return uk(a,b,2<arguments.length&&void 0!==arguments[2]?arguments[2]:null)};
__webpack_unused_export__=function(a,b,c,d){if(!rk(c))throw Error(y(200));if(null==a||void 0===a._reactInternals)throw Error(y(38));return tk(a,b,c,!1,d)};__webpack_unused_export__="17.0.1";


/***/ }),

/***/ 935:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


function checkDCE() {
  /* global __REACT_DEVTOOLS_GLOBAL_HOOK__ */
  if (
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ === 'undefined' ||
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE !== 'function'
  ) {
    return;
  }
  if (false) {}
  try {
    // Verify that the code above has been dead code eliminated (DCE'd).
    __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(checkDCE);
  } catch (err) {
    // DevTools shouldn't crash React, no matter what.
    // We should still report in case we break this code.
    console.error(err);
  }
}

if (true) {
  // DCE check should happen before ReactDOM bundle executes so that
  // DevTools can report bad minification during injection.
  checkDCE();
  module.exports = __webpack_require__(448);
} else {}


/***/ }),

/***/ 408:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
/** @license React v17.0.1
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var l=__webpack_require__(418),n=60103,p=60106;exports.Fragment=60107;exports.StrictMode=60108;exports.Profiler=60114;var q=60109,r=60110,t=60112;exports.Suspense=60113;var u=60115,v=60116;
if("function"===typeof Symbol&&Symbol.for){var w=Symbol.for;n=w("react.element");p=w("react.portal");exports.Fragment=w("react.fragment");exports.StrictMode=w("react.strict_mode");exports.Profiler=w("react.profiler");q=w("react.provider");r=w("react.context");t=w("react.forward_ref");exports.Suspense=w("react.suspense");u=w("react.memo");v=w("react.lazy")}var x="function"===typeof Symbol&&Symbol.iterator;
function y(a){if(null===a||"object"!==typeof a)return null;a=x&&a[x]||a["@@iterator"];return"function"===typeof a?a:null}function z(a){for(var b="https://reactjs.org/docs/error-decoder.html?invariant="+a,c=1;c<arguments.length;c++)b+="&args[]="+encodeURIComponent(arguments[c]);return"Minified React error #"+a+"; visit "+b+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}
var A={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},B={};function C(a,b,c){this.props=a;this.context=b;this.refs=B;this.updater=c||A}C.prototype.isReactComponent={};C.prototype.setState=function(a,b){if("object"!==typeof a&&"function"!==typeof a&&null!=a)throw Error(z(85));this.updater.enqueueSetState(this,a,b,"setState")};C.prototype.forceUpdate=function(a){this.updater.enqueueForceUpdate(this,a,"forceUpdate")};
function D(){}D.prototype=C.prototype;function E(a,b,c){this.props=a;this.context=b;this.refs=B;this.updater=c||A}var F=E.prototype=new D;F.constructor=E;l(F,C.prototype);F.isPureReactComponent=!0;var G={current:null},H=Object.prototype.hasOwnProperty,I={key:!0,ref:!0,__self:!0,__source:!0};
function J(a,b,c){var e,d={},k=null,h=null;if(null!=b)for(e in void 0!==b.ref&&(h=b.ref),void 0!==b.key&&(k=""+b.key),b)H.call(b,e)&&!I.hasOwnProperty(e)&&(d[e]=b[e]);var g=arguments.length-2;if(1===g)d.children=c;else if(1<g){for(var f=Array(g),m=0;m<g;m++)f[m]=arguments[m+2];d.children=f}if(a&&a.defaultProps)for(e in g=a.defaultProps,g)void 0===d[e]&&(d[e]=g[e]);return{$$typeof:n,type:a,key:k,ref:h,props:d,_owner:G.current}}
function K(a,b){return{$$typeof:n,type:a.type,key:b,ref:a.ref,props:a.props,_owner:a._owner}}function L(a){return"object"===typeof a&&null!==a&&a.$$typeof===n}function escape(a){var b={"=":"=0",":":"=2"};return"$"+a.replace(/[=:]/g,function(a){return b[a]})}var M=/\/+/g;function N(a,b){return"object"===typeof a&&null!==a&&null!=a.key?escape(""+a.key):b.toString(36)}
function O(a,b,c,e,d){var k=typeof a;if("undefined"===k||"boolean"===k)a=null;var h=!1;if(null===a)h=!0;else switch(k){case "string":case "number":h=!0;break;case "object":switch(a.$$typeof){case n:case p:h=!0}}if(h)return h=a,d=d(h),a=""===e?"."+N(h,0):e,Array.isArray(d)?(c="",null!=a&&(c=a.replace(M,"$&/")+"/"),O(d,b,c,"",function(a){return a})):null!=d&&(L(d)&&(d=K(d,c+(!d.key||h&&h.key===d.key?"":(""+d.key).replace(M,"$&/")+"/")+a)),b.push(d)),1;h=0;e=""===e?".":e+":";if(Array.isArray(a))for(var g=
0;g<a.length;g++){k=a[g];var f=e+N(k,g);h+=O(k,b,c,f,d)}else if(f=y(a),"function"===typeof f)for(a=f.call(a),g=0;!(k=a.next()).done;)k=k.value,f=e+N(k,g++),h+=O(k,b,c,f,d);else if("object"===k)throw b=""+a,Error(z(31,"[object Object]"===b?"object with keys {"+Object.keys(a).join(", ")+"}":b));return h}function P(a,b,c){if(null==a)return a;var e=[],d=0;O(a,e,"","",function(a){return b.call(c,a,d++)});return e}
function Q(a){if(-1===a._status){var b=a._result;b=b();a._status=0;a._result=b;b.then(function(b){0===a._status&&(b=b.default,a._status=1,a._result=b)},function(b){0===a._status&&(a._status=2,a._result=b)})}if(1===a._status)return a._result;throw a._result;}var R={current:null};function S(){var a=R.current;if(null===a)throw Error(z(321));return a}var T={ReactCurrentDispatcher:R,ReactCurrentBatchConfig:{transition:0},ReactCurrentOwner:G,IsSomeRendererActing:{current:!1},assign:l};
exports.Children={map:P,forEach:function(a,b,c){P(a,function(){b.apply(this,arguments)},c)},count:function(a){var b=0;P(a,function(){b++});return b},toArray:function(a){return P(a,function(a){return a})||[]},only:function(a){if(!L(a))throw Error(z(143));return a}};exports.Component=C;exports.PureComponent=E;exports.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=T;
exports.cloneElement=function(a,b,c){if(null===a||void 0===a)throw Error(z(267,a));var e=l({},a.props),d=a.key,k=a.ref,h=a._owner;if(null!=b){void 0!==b.ref&&(k=b.ref,h=G.current);void 0!==b.key&&(d=""+b.key);if(a.type&&a.type.defaultProps)var g=a.type.defaultProps;for(f in b)H.call(b,f)&&!I.hasOwnProperty(f)&&(e[f]=void 0===b[f]&&void 0!==g?g[f]:b[f])}var f=arguments.length-2;if(1===f)e.children=c;else if(1<f){g=Array(f);for(var m=0;m<f;m++)g[m]=arguments[m+2];e.children=g}return{$$typeof:n,type:a.type,
key:d,ref:k,props:e,_owner:h}};exports.createContext=function(a,b){void 0===b&&(b=null);a={$$typeof:r,_calculateChangedBits:b,_currentValue:a,_currentValue2:a,_threadCount:0,Provider:null,Consumer:null};a.Provider={$$typeof:q,_context:a};return a.Consumer=a};exports.createElement=J;exports.createFactory=function(a){var b=J.bind(null,a);b.type=a;return b};exports.createRef=function(){return{current:null}};exports.forwardRef=function(a){return{$$typeof:t,render:a}};exports.isValidElement=L;
exports.lazy=function(a){return{$$typeof:v,_payload:{_status:-1,_result:a},_init:Q}};exports.memo=function(a,b){return{$$typeof:u,type:a,compare:void 0===b?null:b}};exports.useCallback=function(a,b){return S().useCallback(a,b)};exports.useContext=function(a,b){return S().useContext(a,b)};exports.useDebugValue=function(){};exports.useEffect=function(a,b){return S().useEffect(a,b)};exports.useImperativeHandle=function(a,b,c){return S().useImperativeHandle(a,b,c)};
exports.useLayoutEffect=function(a,b){return S().useLayoutEffect(a,b)};exports.useMemo=function(a,b){return S().useMemo(a,b)};exports.useReducer=function(a,b,c){return S().useReducer(a,b,c)};exports.useRef=function(a){return S().useRef(a)};exports.useState=function(a){return S().useState(a)};exports.version="17.0.1";


/***/ }),

/***/ 294:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


if (true) {
  module.exports = __webpack_require__(408);
} else {}


/***/ }),

/***/ 53:
/***/ ((__unused_webpack_module, exports) => {

"use strict";
/** @license React v0.20.1
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var f,g,h,k;if("object"===typeof performance&&"function"===typeof performance.now){var l=performance;exports.unstable_now=function(){return l.now()}}else{var p=Date,q=p.now();exports.unstable_now=function(){return p.now()-q}}
if("undefined"===typeof window||"function"!==typeof MessageChannel){var t=null,u=null,w=function(){if(null!==t)try{var a=exports.unstable_now();t(!0,a);t=null}catch(b){throw setTimeout(w,0),b;}};f=function(a){null!==t?setTimeout(f,0,a):(t=a,setTimeout(w,0))};g=function(a,b){u=setTimeout(a,b)};h=function(){clearTimeout(u)};exports.unstable_shouldYield=function(){return!1};k=exports.unstable_forceFrameRate=function(){}}else{var x=window.setTimeout,y=window.clearTimeout;if("undefined"!==typeof console){var z=
window.cancelAnimationFrame;"function"!==typeof window.requestAnimationFrame&&console.error("This browser doesn't support requestAnimationFrame. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills");"function"!==typeof z&&console.error("This browser doesn't support cancelAnimationFrame. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills")}var A=!1,B=null,C=-1,D=5,E=0;exports.unstable_shouldYield=function(){return exports.unstable_now()>=
E};k=function(){};exports.unstable_forceFrameRate=function(a){0>a||125<a?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):D=0<a?Math.floor(1E3/a):5};var F=new MessageChannel,G=F.port2;F.port1.onmessage=function(){if(null!==B){var a=exports.unstable_now();E=a+D;try{B(!0,a)?G.postMessage(null):(A=!1,B=null)}catch(b){throw G.postMessage(null),b;}}else A=!1};f=function(a){B=a;A||(A=!0,G.postMessage(null))};g=function(a,b){C=
x(function(){a(exports.unstable_now())},b)};h=function(){y(C);C=-1}}function H(a,b){var c=a.length;a.push(b);a:for(;;){var d=c-1>>>1,e=a[d];if(void 0!==e&&0<I(e,b))a[d]=b,a[c]=e,c=d;else break a}}function J(a){a=a[0];return void 0===a?null:a}
function K(a){var b=a[0];if(void 0!==b){var c=a.pop();if(c!==b){a[0]=c;a:for(var d=0,e=a.length;d<e;){var m=2*(d+1)-1,n=a[m],v=m+1,r=a[v];if(void 0!==n&&0>I(n,c))void 0!==r&&0>I(r,n)?(a[d]=r,a[v]=c,d=v):(a[d]=n,a[m]=c,d=m);else if(void 0!==r&&0>I(r,c))a[d]=r,a[v]=c,d=v;else break a}}return b}return null}function I(a,b){var c=a.sortIndex-b.sortIndex;return 0!==c?c:a.id-b.id}var L=[],M=[],N=1,O=null,P=3,Q=!1,R=!1,S=!1;
function T(a){for(var b=J(M);null!==b;){if(null===b.callback)K(M);else if(b.startTime<=a)K(M),b.sortIndex=b.expirationTime,H(L,b);else break;b=J(M)}}function U(a){S=!1;T(a);if(!R)if(null!==J(L))R=!0,f(V);else{var b=J(M);null!==b&&g(U,b.startTime-a)}}
function V(a,b){R=!1;S&&(S=!1,h());Q=!0;var c=P;try{T(b);for(O=J(L);null!==O&&(!(O.expirationTime>b)||a&&!exports.unstable_shouldYield());){var d=O.callback;if("function"===typeof d){O.callback=null;P=O.priorityLevel;var e=d(O.expirationTime<=b);b=exports.unstable_now();"function"===typeof e?O.callback=e:O===J(L)&&K(L);T(b)}else K(L);O=J(L)}if(null!==O)var m=!0;else{var n=J(M);null!==n&&g(U,n.startTime-b);m=!1}return m}finally{O=null,P=c,Q=!1}}var W=k;exports.unstable_IdlePriority=5;
exports.unstable_ImmediatePriority=1;exports.unstable_LowPriority=4;exports.unstable_NormalPriority=3;exports.unstable_Profiling=null;exports.unstable_UserBlockingPriority=2;exports.unstable_cancelCallback=function(a){a.callback=null};exports.unstable_continueExecution=function(){R||Q||(R=!0,f(V))};exports.unstable_getCurrentPriorityLevel=function(){return P};exports.unstable_getFirstCallbackNode=function(){return J(L)};
exports.unstable_next=function(a){switch(P){case 1:case 2:case 3:var b=3;break;default:b=P}var c=P;P=b;try{return a()}finally{P=c}};exports.unstable_pauseExecution=function(){};exports.unstable_requestPaint=W;exports.unstable_runWithPriority=function(a,b){switch(a){case 1:case 2:case 3:case 4:case 5:break;default:a=3}var c=P;P=a;try{return b()}finally{P=c}};
exports.unstable_scheduleCallback=function(a,b,c){var d=exports.unstable_now();"object"===typeof c&&null!==c?(c=c.delay,c="number"===typeof c&&0<c?d+c:d):c=d;switch(a){case 1:var e=-1;break;case 2:e=250;break;case 5:e=1073741823;break;case 4:e=1E4;break;default:e=5E3}e=c+e;a={id:N++,callback:b,priorityLevel:a,startTime:c,expirationTime:e,sortIndex:-1};c>d?(a.sortIndex=c,H(M,a),null===J(L)&&a===J(M)&&(S?h():S=!0,g(U,c-d))):(a.sortIndex=e,H(L,a),R||Q||(R=!0,f(V)));return a};
exports.unstable_wrapCallback=function(a){var b=P;return function(){var c=P;P=b;try{return a.apply(this,arguments)}finally{P=c}}};


/***/ }),

/***/ 840:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


if (true) {
  module.exports = __webpack_require__(53);
} else {}


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => module['default'] :
/******/ 				() => module;
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop)
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
(() => {
"use strict";

;// CONCATENATED MODULE: ./units-2.12/definitions.units
/* harmony default export */ const definitions_units = ("#\n# This file is the units database for use with GNU units, a units conversion\n# program by Adrian Mariano adrianm@gnu.org\n#\n# August 2015 Version 2.13\n#\n# Copyright (C) 1996, 1997, 1998, 1999, 2000, 2001, 2002, 2004, 2005, 2006\n#               2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015\n# Free Software Foundation, Inc\n#\n# This program is free software; you can redistribute it and/or modify\n# it under the terms of the GNU General Public License as published by\n# the Free Software Foundation; either version 3 of the License, or\n# (at your option) any later version.\n#\n# This program is distributed in the hope that it will be useful,\n# but WITHOUT ANY WARRANTY; without even the implied warranty of\n# MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the\n# GNU General Public License for more details.\n#\n# You should have received a copy of the GNU General Public License\n# along with this program; if not, write to the Free Software\n# Foundation, Inc., 51 Franklin Street, Fifth Floor,\n# Boston, MA  02110-1301  USA\n#\n############################################################################\n#\n# Improvements and corrections are welcome.\n#\n# Fundamental constants in this file are the 2014 CODATA recommended values.\n#\n# Most units data was drawn from\n#            1. NIST Special Publication 811, Guide for the\n#                 Use of the International System of Units (SI).\n#                 Barry N. Taylor. 1995\n#            2. CRC Handbook of Chemistry and Physics 70th edition\n#            3. Oxford English Dictionary\n#            4. Websters New Universal Unabridged Dictionary\n#            5. Units of Measure by Stephen Dresner\n#            6. A Dictionary of English Weights and Measures by Ronald Zupko\n#            7. British Weights and Measures by Ronald Zupko\n#            8. Realm of Measure by Isaac Asimov\n#            9. United States standards of weights and measures, their\n#                   creation and creators by Arthur H. Frazier.\n#           10. French weights and measures before the Revolution: a\n#                   dictionary of provincial and local units by Ronald Zupko\n#           11. Weights and Measures: their ancient origins and their\n#                   development in Great Britain up to AD 1855 by FG Skinner\n#           12. The World of Measurements by H. Arthur Klein\n#           13. For Good Measure by William Johnstone\n#           14. NTC's Encyclopedia of International Weights and Measures\n#                   by William Johnstone\n#           15. Sizes by John Lord\n#           16. Sizesaurus by Stephen Strauss\n#           17. CODATA Recommended Values of Physical Constants available at\n#                   http://physics.nist.gov/cuu/Constants/index.html\n#           18. How Many?  A Dictionary of Units of Measurement.  Available at\n#                   http://www.unc.edu/~rowlett/units/index.html\n#           19. Numericana.  http://www.numericana.com\n#           20. UK history of measurement\n#                   http://www.ukmetrication.com/history.htm\n#           21. NIST Handbook 44, Specifications, Tolerances, and\n#                 Other Technical Requirements for Weighing and Measuring\n#                 Devices. 2011\n#           22. NIST Special Publication 447, Weights and Measures Standards\n#                 of the the United States: a brief history. Lewis V. Judson.\n#                 1963; rev. 1976\n#\n# Thanks to Jeff Conrad for assistance in ferreting out unit definitions.\n#\n###########################################################################\n#\n# If units you use are missing or defined incorrectly, please contact me.\n# If your country's local units are missing and you are willing to supply\n# them, please send me a list.\n#\n# I added shoe size information but I'm not convinced that it's correct.\n# If you know anything about shoe sizes please contact me.\n#\n###########################################################################\n\n###########################################################################\n#\n# Brief Philosophy of this file\n#\n# Most unit definitions are made in terms of integers or simple fractions of\n# other definitions.  The typical exceptions are when converting between two\n# different unit systems, or the values of measured physical constants.  In\n# this file definitions are given in the most natural and revealing way in\n# terms of integer factors.\n#\n# If you make changes be sure to run 'units --check' to check your work.\n#\n# The file is USA-centric, but there is some modest effort to support other\n# countries.  This file is now coded in UTF-8.  To support environments where\n# UTF-8 is not available, definitions that require this character set are\n# wrapped in !utf8 directives.\n#\n# When a unit name is used in different countries with the different meanings\n# the system should be as follows:\n#\n# Suppose countries ABC and XYZ both use the \"foo\".  Then globally define\n#\n#   ABCfoo  <some value>\n#   XYZfoo  <different value>\n#\n# Then, using the !locale directive, define the \"foo\" appropriately for each of\n# the two countries with a definition like\n#\n# !locale ABC\n#    foo  ABCfoo\n# !endlocale\n#\n###########################################################################\n\n!locale en_US\n!  set UNITS_ENGLISH US\n!endlocale\n\n!locale en_GB\n!  set UNITS_ENGLISH GB\n!endlocale\n\n!set UNITS_ENGLISH US   # Default setting for English units\n\n###########################################################################\n#                                                                         #\n# Primitive units.  Any unit defined to contain a '!' character is a      #\n# primitive unit which will not be reduced any further.  All units should #\n# reduce to primitive units.                                              #\n#                                                                         #\n###########################################################################\n\n#\n# SI units\n#\n\nkg        !      # Mass of the international prototype\nkilogram  kg\n\ns         !      # Duration of 9192631770 periods of the radiation\nsecond    s      #   corresponding to the transition between the two hyperfine\n                 #   levels of the ground state of the cesium-133 atom\n\nm         !      # Length of the path traveled by light in a vacuum\nmeter     m      #   during 1|299792458 seconds.  Originally meant to be\n                 #   1e-7 of the length along a meridian from the equator\n                 #   to a pole.\n\nA         !      # The current which produces a force of 2e-7 N/m between two\nampere    A      #   infinitely long wires that are 1 meter apart\namp       ampere\n\ncd        !      # Luminous intensity in a given direction of a source which\ncandela   cd     #   emits monochromatic radiation at 540e12 Hz with radiant\n                 #   intensity 1|683 W/steradian.  (This differs from radiant\n                 #   intensity (W/sr) in that it is adjusted for human\n                 #   perceptual dependence on wavelength.  The frequency of\n                 #   540e12 Hz (yellow) is where human perception is most\n                 #   efficient.)\n\nmol       !      # The amount of substance of a system which contains as many\nmole      mol    #   elementary entities as there are atoms in 0.012 kg of\n                 #   carbon 12.  The elementary entities must be specified and\n                 #   may be atoms, molecules, ions, electrons, or other\n                 #   particles or groups of particles.  It is understood that\n                 #   unbound atoms of carbon 12, at rest and in the ground\n                 #   state, are referred to.\n\nK         !      # 1|273.16 of the thermodynamic temperature of the triple\nkelvin    K      #   point of water\n\n#\n# The radian and steradian are defined as dimensionless primitive units.\n# The radian is equal to m/m and the steradian to m^2/m^2 so these units are\n# dimensionless.  Retaining them as named units is useful because it allows\n# clarity in expressions and makes the meaning of unit definitions more clear.\n# These units will reduce to 1 in conversions but not for sums of units or for\n# arguments to functions.\n#\n\nradian    !dimensionless   # The angle subtended at the center of a circle by\n                           #   an arc equal in length to the radius of the\n                           #   circle\nsr        !dimensionless   # Solid angle which cuts off an area of the surface\nsteradian sr               #   of the sphere equal to that of a square with\n                           #   sides of length equal to the radius of the\n                           #   sphere\n\n#\n# Some primitive non-SI units\n#\n\nUS$       !      # The US dollar is chosen arbitrarily to be the primitive\n                 #   unit of money.\n\nbit       !      # Basic unit of information (entropy).  The entropy in bits\n                 #   of a random variable over a finite alphabet is defined\n                 #   to be the sum of -p(i)*log2(p(i)) over the alphabet where\n                 #   p(i) is the probability that the random variable takes\n                 #   on the value i.\n\n###########################################################################\n#                                                                         #\n# Prefixes (longer names must come first)                                 #\n#                                                                         #\n###########################################################################\n\nyotta-                  1e24     # Greek or Latin octo, \"eight\"\nzetta-                  1e21     # Latin septem, \"seven\"\nexa-                    1e18     # Greek hex, \"six\"\npeta-                   1e15     # Greek pente, \"five\"\ntera-                   1e12     # Greek teras, \"monster\"\ngiga-                   1e9      # Greek gigas, \"giant\"\nmega-                   1e6      # Greek megas, \"large\"\nmyria-                  1e4      # Not an official SI prefix\nkilo-                   1e3      # Greek chilioi, \"thousand\"\nhecto-                  1e2      # Greek hekaton, \"hundred\"\ndeca-                   1e1      # Greek deka, \"ten\"\ndeka-                   deca\ndeci-                   1e-1     # Latin decimus, \"tenth\"\ncenti-                  1e-2     # Latin centum, \"hundred\"\nmilli-                  1e-3     # Latin mille, \"thousand\"\nmicro-                  1e-6     # Latin micro or Greek mikros, \"small\"\nnano-                   1e-9     # Latin nanus or Greek nanos, \"dwarf\"\npico-                   1e-12    # Spanish pico, \"a bit\"\nfemto-                  1e-15    # Danish-Norwegian femten, \"fifteen\"\natto-                   1e-18    # Danish-Norwegian atten, \"eighteen\"\nzepto-                  1e-21    # Latin septem, \"seven\"\nyocto-                  1e-24    # Greek or Latin octo, \"eight\"\n\nquarter-                1|4\nsemi-                   0.5\ndemi-                   0.5\nhemi-                   0.5\nhalf-                   0.5\ndouble-                 2\ntriple-                 3\ntreble-                 3\n\nkibi-                   2^10     # In response to the convention of illegally\nmebi-                   2^20     # and confusingly using metric prefixes for\ngibi-                   2^30     # powers of two, the International\ntebi-                   2^40     # Electrotechnical Commission aproved these\npebi-                   2^50     # binary prefixes for use in 1998.  If you\nexbi-                   2^60     # want to refer to \"megabytes\" using the\nKi-                     kibi     # binary definition, use these prefixes.\nMi-                     mebi\nGi-                     gibi\nTi-                     tebi\nPi-                     pebi\nEi-                     exbi\n\nY-                      yotta\nZ-                      zetta\nE-                      exa\nP-                      peta\nT-                      tera\nG-                      giga\nM-                      mega\nk-                      kilo\nh-                      hecto\nda-                     deka\nd-                      deci\nc-                      centi\nm-                      milli\nu-                      micro   # it should be a mu but u is easy to type\nn-                      nano\np-                      pico\nf-                      femto\na-                      atto\nz-                      zepto\ny-                      yocto\n\n#\n# Names of some numbers\n#\n\none                     1\ntwo                     2\ndouble                  2\ncouple                  2\nthree                   3\ntriple                  3\nfour                    4\nquadruple               4\nfive                    5\nquintuple               5\nsix                     6\nseven                   7\neight                   8\nnine                    9\nten                     10\neleven                  11\ntwelve                  12\nthirteen                13\nfourteen                14\nfifteen                 15\nsixteen                 16\nseventeen               17\neighteen                18\nnineteen                19\ntwenty                  20\nthirty                  30\nforty                   40\nfifty                   50\nsixty                   60\nseventy                 70\neighty                  80\nninety                  90\nhundred                 100\nthousand                1000\nmillion                 1e6\n\n# These number terms were described by N. Chuquet and De la Roche in the 16th\n# century as being successive powers of a million.  These definitions are still\n# used in most European countries.  The current US definitions for these\n# numbers arose in the 17th century and don't make nearly as much sense.  These\n# numbers are listed in the CRC Concise Encyclopedia of Mathematics by Eric\n# W. Weisstein.\n\nshortbillion               1e9\nshorttrillion              1e12\nshortquadrillion           1e15\nshortquintillion           1e18\nshortsextillion            1e21\nshortseptillion            1e24\nshortoctillion             1e27\nshortnonillion             1e30\nshortnoventillion          shortnonillion\nshortdecillion             1e33\nshortundecillion           1e36\nshortduodecillion          1e39\nshorttredecillion          1e42\nshortquattuordecillion     1e45\nshortquindecillion         1e48\nshortsexdecillion          1e51\nshortseptendecillion       1e54\nshortoctodecillion         1e57\nshortnovemdecillion        1e60\nshortvigintillion          1e63\n\ncentillion              1e303\ngoogol                  1e100\n\nlongbillion               million^2\nlongtrillion              million^3\nlongquadrillion           million^4\nlongquintillion           million^5\nlongsextillion            million^6\nlongseptillion            million^7\nlongoctillion             million^8\nlongnonillion             million^9\nlongnoventillion          longnonillion\nlongdecillion             million^10\nlongundecillion           million^11\nlongduodecillion          million^12\nlongtredecillion          million^13\nlongquattuordecillion     million^14\nlongquindecillion         million^15\nlongsexdecillion          million^16\nlongseptdecillion         million^17\nlongoctodecillion         million^18\nlongnovemdecillion        million^19\nlongvigintillion          million^20\n\n# These numbers fill the gaps left by the long system above.\n\nmilliard                1000 million\nbilliard                1000 million^2\ntrilliard               1000 million^3\nquadrilliard            1000 million^4\nquintilliard            1000 million^5\nsextilliard             1000 million^6\nseptilliard             1000 million^7\noctilliard              1000 million^8\nnonilliard              1000 million^9\nnoventilliard           nonilliard\ndecilliard              1000 million^10\n\n# For consistency\n\nlongmilliard              milliard\nlongbilliard              billiard\nlongtrilliard             trilliard\nlongquadrilliard          quadrilliard\nlongquintilliard          quintilliard\nlongsextilliard           sextilliard\nlongseptilliard           septilliard\nlongoctilliard            octilliard\nlongnonilliard            nonilliard\nlongnoventilliard         noventilliard\nlongdecilliard            decilliard\n\n# The long centillion would be 1e600.  The googolplex is another\n# familiar large number equal to 10^googol.  These numbers give overflows.\n\n#\n# The short system prevails in English speaking countries\n#\n\nbillion                 shortbillion\ntrillion                shorttrillion\nquadrillion             shortquadrillion\nquintillion             shortquintillion\nsextillion              shortsextillion\nseptillion              shortseptillion\noctillion               shortoctillion\nnonillion               shortnonillion\nnoventillion            shortnoventillion\ndecillion               shortdecillion\nundecillion             shortundecillion\nduodecillion            shortduodecillion\ntredecillion            shorttredecillion\nquattuordecillion       shortquattuordecillion\nquindecillion           shortquindecillion\nsexdecillion            shortsexdecillion\nseptendecillion         shortseptendecillion\noctodecillion           shortoctodecillion\nnovemdecillion          shortnovemdecillion\nvigintillion            shortvigintillion\n\n#\n# Numbers used in India \n#\n\nlakh                    1e5\ncrore                   1e7\narab                    1e9\nkharab                  1e11\nneel                    1e13\npadm                    1e15\nshankh                  1e17\n\n#############################################################################\n#                                                                           #\n# Derived units which can be reduced to the primitive units                 #\n#                                                                           #\n#############################################################################\n\n\n\n#\n# Named SI derived units (officially accepted)\n#\n\nnewton                  kg m / s^2   # force\nN                       newton\npascal                  N/m^2        # pressure or stress\nPa                      pascal\njoule                   N m          # energy\nJ                       joule\nwatt                    J/s          # power\nW                       watt\ncoulomb                 A s          # charge\nC                       coulomb\nvolt                    W/A          # potential difference\nV                       volt\nohm                     V/A          # electrical resistance\nsiemens                 A/V          # electrical conductance\nS                       siemens\nfarad                   C/V          # capacitance\nF                       farad\nweber                   V s          # magnetic flux\nWb                      weber\nhenry                   Wb/A         # inductance\nH                       henry\ntesla                   Wb/m^2       # magnetic flux density\nT                       tesla\nhertz                   /s           # frequency\nHz                      hertz\n\n#\n# Dimensions.  These are here to help with dimensional analysis and\n# because they will appear in the list produced by hitting '?' at the\n# \"You want:\" prompt to tell the user the dimension of the unit.\n#\n\nLENGTH                  meter\nAREA                    LENGTH^2\nVOLUME                  LENGTH^3\nMASS                    kilogram\nCURRENT                 ampere\nAMOUNT                  mole\nANGLE                   radian\nSOLID_ANGLE             steradian\nMONEY                   US$\nFORCE                   newton\nPRESSURE                FORCE / AREA\nSTRESS                  FORCE / AREA\nCHARGE                  coulomb\nCAPACITANCE             farad\nRESISTANCE              ohm\nCONDUCTANCE             siemens\nINDUCTANCE              henry\nFREQUENCY               hertz\nVELOCITY                LENGTH / TIME\nACCELERATION            VELOCITY / TIME\nDENSITY                 MASS / VOLUME\nLINEAR_DENSITY          MASS / LENGTH\nVISCOSITY               FORCE TIME / AREA\nKINEMATIC_VISCOSITY     VISCOSITY / DENSITY\n\n\n#\n# units derived easily from SI units\n#\n\ngram                    millikg\ngm                      gram\ng                       gram\ntonne                   1000 kg\nt                       tonne\nmetricton               tonne\nsthene                  tonne m / s^2\nfunal                   sthene\npieze                   sthene / m^2\nquintal                 100 kg\nbar                     1e5 Pa     # About 1 atm\nb                       bar\nvac                     millibar\nmicron                  micrometer # One millionth of a meter\nbicron                  picometer  # One brbillionth of a meter\ncc                      cm^3\nare                     100 m^2\na                       are\nliter                   1000 cc       # The liter was defined in 1901 as the\noldliter                1.000028 dm^3 # space occupied by 1 kg of pure water at\nL                       liter         # the temperature of its maximum density\nl                       liter         # under a pressure of 1 atm.  This was\n                                      # supposed to be 1000 cubic cm, but it\n                                      # was discovered that the original\n                                      # measurement was off.  In 1964, the\n                                      # liter was redefined to be exactly 1000\n                                      # cubic centimeters.\nmho                     siemens    # Inverse of ohm, hence ohm spelled backward\ngalvat                  ampere     # Named after Luigi Galvani\nangstrom                1e-10 m    # Convenient for describing molecular sizes\nxunit                   xunit_cu      # Used for measuring x-ray wavelengths.\nsiegbahn                xunit         # Originally defined to be 1|3029.45 of\nxunit_cu             1.00207697e-13 m # the spacing of calcite planes at 18\nxunit_mo             1.00209952e-13 m # degC.  It was intended to be exactly\n                                      # 1e-13 m, but was later found to be\n                                      # slightly off.  Current usage is with\n                                      # reference to common x-ray lines, either\n                                      # the K-alpha 1 line of copper or the\n                                      # same line of molybdenum.\nangstromstar            1.00001495 angstrom # Defined by JA Bearden in 1965\nfermi                   1e-15 m    # Convenient for describing nuclear sizes\n                                   #   Nuclear radius is from 1 to 10 fermis\nbarn                    1e-28 m^2  # Used to measure cross section for\n                                   #   particle physics collision, said to\n                                   #   have originated in the phrase \"big as\n                                   #   a barn\".\nshed                    1e-24 barn # Defined to be a smaller companion to the\n                                   #   barn, but it's too small to be of\n                                   #   much use.\nbrewster                micron^2/N # measures stress-optical coef\ndiopter                 /m         # measures reciprocal of lens focal length\nfresnel                 1e12 Hz    # occasionally used in spectroscopy\nshake                   1e-8 sec\nsvedberg                1e-13 s    # Used for measuring the sedimentation\n                                   # coefficient for centrifuging.\ngamma                   microgram  # Also used for 1e-9 tesla\nlambda                  microliter\nspat                    1e12 m     # Rarely used for astronomical measurements\npreece                  1e13 ohm m # resistivity\nplanck                  J s        # action of one joule over one second\nsturgeon                /henry     # magnetic reluctance\ndaraf                   1/farad    # elastance (farad spelled backwards)\nleo                     10 m/s^2\npoiseuille              N s / m^2  # viscosity\nmayer                   J/g K      # specific heat\nmired                   / microK   # reciprocal color temperature.  The name\n                                   #   abbreviates micro reciprocal degree.\ncrocodile               megavolt   # used informally in UK physics labs\nmetricounce             25 g\nmounce                  metricounce\nfinsenunit              1e5 W/m^2  # Measures intensity of ultraviolet light\n                                   # with wavelength 296.7 nm.\nfluxunit                1e-26 W/m^2 Hz # Used in radio astronomy to measure\n                                       #   the energy incident on the receiving\n                                       #   body across a specified frequency\n                                       #   bandwidth.  [12]\njansky                  fluxunit   # K. G. Jansky identified radio waves coming\nJy                      jansky     # from outer space in 1931.\nflick       W / cm^2 sr micrometer # Spectral radiance or irradiance\npfu                    / cm^2 sr s # particle flux unit -- Used to measure\n                                   #   rate at which particles are received by\n                                   #   a spacecraft as particles per solid\n                                   #   angle per detector area per second. [18]\npyron            cal_IT / cm^2 min # Measures heat flow from solar radiation,\n                                   #   from Greek work \"pyr\" for fire.\nkatal                   mol/sec    # Measure of the amount of a catalyst.  One\nkat                     katal      #   katal of catalyst enables the reaction\n                                   #   to consume or produce on mol/sec.\nsolarluminosity         384.6e24 W # A common yardstick for comparing the\n                                   #   output of different stars.\n                # http://nssdc.gsfc.nasa.gov/planetary/factsheet/sunfact.html\n\n#\n# time\n#\n\nsec                     s\nminute                  60 s\nmin                     minute\nhour                    60 min\nhr                      hour\nday                     24 hr\nd                       day\nda                      day\nweek                    7 day\nwk                      week\nsennight                7 day\nfortnight               14 day\nblink                   1e-5 day   # Actual human blink takes 1|3 second\nce                      1e-2 day\ncron                    1e6 years\nwatch                   4 hours    # time a sentry stands watch or a ship's\n                                   # crew is on duty.\nbell                    1|8 watch  # Bell would be sounded every 30 minutes.\n\n# French Revolutionary Time or Decimal Time.  It was Proposed during\n# the French Revolution.  A few clocks were made, but it never caught\n# on.  In 1998 Swatch defined a time measurement called \".beat\" and\n# sold some watches that displayed time in this unit.\n\ndecimalhour             1|10 day            \ndecimalminute           1|100 decimalhour   \ndecimalsecond           1|100 decimalminute \nbeat                    decimalminute          # Swatch Internet Time\n\n#\n# angular measure\n#\n\ncircle                  2 pi radian\ndegree                  1|360 circle\ndeg                     degree\narcdeg                  degree\narcmin                  1|60 degree\narcminute               arcmin\n'                       arcmin\narcsec                  1|60 arcmin\narcsecond               arcsec\n\"                       arcsec\n''                      \"\nrightangle              90 degrees\nquadrant                1|4 circle\nquintant                1|5 circle\nsextant                 1|6 circle\n\nsign                    1|12 circle # Angular extent of one sign of the zodiac\nturn                    circle\nrevolution              turn\nrev                     turn\npulsatance              radian / sec\ngon                     1|100 rightangle  # measure of grade\ngrade                   gon\ncentesimalminute        1|100 grade\ncentesimalsecond        1|100 centesimalminute\nmilangle                1|6400 circle     # Official NIST definition.\n                                          # Another choice is 1e-3 radian.\npointangle              1|32 circle  # Used for reporting compass readings\ncentrad                 0.01 radian  # Used for angular deviation of light\n                                     # through a prism.\nmas                     milli arcsec # Used by astronomers\nseclongitude            circle (seconds/day) # Astronomers measure longitude\n                                     # (which they call right ascension) in\n                                     # time units by dividing the equator into\n                                     # 24 hours instead of 360 degrees.\n#\n# Some geometric formulas\n#\n\ncirclearea(r)   units=[m;m^2] range=[0,) pi r^2 ; sqrt(circlearea/pi)\nspherevolume(r) units=[m;m^3] range=[0,) 4|3 pi r^3 ; \\\n                                         cuberoot(spherevolume/4|3 pi)\nspherevol()     spherevolume\nsquare(x)       range=[0,)          x^2 ; sqrt(square)\n\n#\n# Solid angle measure\n#\n\nsphere                  4 pi sr\nsquaredegree            1|180^2 pi^2 sr\nsquareminute            1|60^2 squaredegree\nsquaresecond            1|60^2 squareminute\nsquarearcmin            squareminute\nsquarearcsec            squaresecond\nsphericalrightangle     0.5 pi sr\noctant                  0.5 pi sr\n\n#\n# Concentration measures\n#\n\npercent                 0.01\n%                       percent\nmill                    0.001     # Originally established by Congress in 1791\n                                  # as a unit of money equal to 0.001 dollars,\n                                  # it has come to refer to 0.001 in general.\n                                  # Used by some towns to set their property\n                                  # tax rate, and written with a symbol similar\n                                  # to the % symbol but with two 0's in the\n                                  # denominator.  [18]\nproof                   1|200     # Alcohol content measured by volume at\n                                  # 60 degrees Fahrenheit.  This is a USA\n                                  # measure.  In Europe proof=percent.\nppm                     1e-6\npartspermillion         ppm\nppb                     1e-9\npartsperbillion         ppb       # USA billion\nppt                     1e-12\npartspertrillion        ppt       # USA trillion\nkarat                   1|24      # measure of gold purity\ncaratgold               karat\ngammil                  mg/l\nbasispoint              0.01 %    # Used in finance\nfine                    1|1000    # Measure of gold purity\n\n# The pH scale is used to measure the concentration of hydronium (H3O+) ions in\n# a solution.  A neutral solution has a pH of 7 as a result of dissociated\n# water molecules.\n\npH(x) units=[1;mol/liter] range=(0,) 10^(-x) mol/liter ; (-log(pH liters/mol))\n\n\n#\n# Temperature\n#\n# Two types of units are defined: units for converting temperature differences\n# and functions for converting absolute temperatures.  Conversions for\n# differences start with \"deg\" and conversions for absolute temperature start\n# with \"temp\".\n#\n\nTEMPERATURE             kelvin\nTEMPERATURE_DIFFERENCE  kelvin\n\n# In 1741 Anders Celsius introduced a temperature scale with water boiling at\n# 0 degrees and freezing at 100 degrees at standard pressure. After his death\n# the fixed points were reversed and the scale was called the centigrade\n# scale.  Due to the difficulty of accurately measuring the temperature of\n# melting ice at standard pressure, the centigrade scale was replaced in 1954\n# by the Celsius scale which is defined by subtracting 273.15 from the\n# temperature in Kelvins.  This definition differed slightly from the old\n# centigrade definition, but the Kelvin scale depends on the triple point of\n# water rather than a melting point, so it can be measured accurately.\n\ntempC(x) units=[1;K] domain=[-273.15,) range=[0,) \\\n                             x K + stdtemp ; (tempC +(-stdtemp))/K\ntempcelsius() tempC\ndegcelsius              K\ndegC                    K\n\n# Fahrenheit defined his temperature scale by setting 0 to the coldest\n# temperature he could produce in his lab with a salt water solution and by\n# setting 96 degrees to body heat.  In Fahrenheit's words:\n#\n#    Placing the thermometer in a mixture of sal ammoniac or sea\n#    salt, ice, and water a point on the scale will be found which\n#    is denoted as zero. A second point is obtained if the same\n#    mixture is used without salt. Denote this position as 30. A\n#    third point, designated as 96, is obtained if the thermometer\n#    is placed in the mouth so as to acquire the heat of a healthy\n#    man.\"  (D. G. Fahrenheit, Phil. Trans. (London) 33, 78, 1724)\n\ntempF(x) units=[1;K] domain=[-459.67,) range=[0,) \\\n                (x+(-32)) degF + stdtemp ; (tempF+(-stdtemp))/degF + 32\ntempfahrenheit() tempF\ndegfahrenheit           5|9 degC\ndegF                    5|9 degC\n\n\ndegreesrankine          degF              # The Rankine scale has the\ndegrankine              degreesrankine    # Fahrenheit degree, but its zero\ndegreerankine           degF              # is at absolute zero.\ndegR                    degrankine\ntempR                   degrankine\ntemprankine             degrankine\n\ntempreaumur(x)    units=[1;K] domain=[-218.52,) range=[0,) \\\n                  x degreaumur+stdtemp ; (tempreaumur+(-stdtemp))/degreaumur\ndegreaumur              10|8 degC # The Reaumur scale was used in Europe and\n                                  # particularly in France.  It is defined\n                                  # to be 0 at the freezing point of water\n                                  # and 80 at the boiling point.  Reaumur\n                                  # apparently selected 80 because it is\n                                  # divisible by many numbers.\n\ndegK                    K         # \"Degrees Kelvin\" is forbidden usage.\ntempK                   K         # For consistency\n\n# Gas mark is implemented below but in a terribly ugly way.  There is\n# a simple formula, but it requires a conditional which is not\n# presently supported.\n#\n# The formula to convert to degrees Fahrenheit is:\n#\n# 25 log2(gasmark) + k_f   gasmark<=1\n# 25 (gasmark-1) + k_f     gasmark>=1\n#\n# k_f = 275\n#\ngasmark[degR] \\\n  .0625    634.67 \\\n  .125     659.67 \\\n  .25      684.67 \\\n  .5       709.67 \\\n  1        734.67 \\\n  2        759.67 \\\n  3        784.67 \\\n  4        809.67 \\\n  5        834.67 \\\n  6        859.67 \\\n  7        884.67 \\\n  8        909.67 \\\n  9        934.67 \\\n  10       959.67\n\n# Units cannot handle wind chill or heat index because they are two variable\n# functions, but they are included here for your edification.  Clearly these\n# equations are the result of a model fitting operation.\n#\n# wind chill index (WCI) a measurement of the combined cooling effect of low\n#      air temperature and wind on the human body. The index was first defined\n#      by the American Antarctic explorer Paul Siple in 1939. As currently used\n#      by U.S. meteorologists, the wind chill index is computed from the\n#      temperature T (in °F) and wind speed V (in mi/hr) using the formula:\n#          WCI = 0.0817(3.71 sqrt(V) + 5.81 - 0.25V)(T - 91.4) + 91.4.\n#      For very low wind speeds, below 4 mi/hr, the WCI is actually higher than\n#      the air temperature, but for higher wind speeds it is lower than the air\n#      temperature.\n#\n# heat index (HI or HX) a measure of the combined effect of heat and\n#      humidity on the human body. U.S. meteorologists compute the index\n#      from the temperature T (in °F) and the relative humidity H (as a\n#      value from 0 to 1).\n#        HI = -42.379 + 2.04901523 T + 1014.333127 H - 22.475541 TH\n#             - .00683783 T^2 - 548.1717 H^2 + 0.122874 T^2 H + 8.5282 T H^2\n#             - 0.0199 T^2 H^2.\n\n#\n# Physical constants\n#\n\n# Basic constants\n\npi                      3.14159265358979323846\nc                       2.99792458e8 m/s # speed of light in vacuum (exact)\nlight                   c\nmu0                     4 pi 1e-7 H/m    # permeability of vacuum (exact)\nepsilon0                1/mu0 c^2        # permittivity of vacuum (exact)\nenergy                  c^2              # convert mass to energy\ne                     1.6021766208e-19 C # electron charge\nh                   4.135667662e-15 eV s # Planck constant\nhbar                    h / 2 pi\nspin                    hbar\nG               6.67408e-11 N m^2 / kg^2 # Newtonian gravitational constant\n                                         #    This is the NIST 2006 value.\n                                         #    The relative uncertainty on this\n                                         #    is 1e-4.\ncoulombconst            1/4 pi epsilon0  # listed as \"k\" sometimes\n\n# Physico-chemical constants\n\natomicmassunit        1.660539040e-27 kg # atomic mass unit (defined to be\nu                       atomicmassunit   #   1|12 of the mass of carbon 12)\namu                     atomicmassunit\namu_chem                1.66026e-27 kg   # 1|16 of the weighted average mass of\n                                         #   the 3 naturally occuring neutral\n                                         #   isotopes of oxygen\namu_phys                1.65981e-27 kg   # 1|16 of the mass of a neutral\n                                         #   oxygen 16 atom\ndalton                  u                # Maybe this should be amu_chem?\navogadro                grams/amu mol    # size of a mole\nN_A                     avogadro\ngasconstant             k N_A            # molar gas constant\nR                       gasconstant\nboltzmann             1.38064852e-23 J/K # Boltzmann constant\nk                       boltzmann\nkboltzmann              boltzmann\nmolarvolume         mol R stdtemp / atm  # Volume occupied by one mole of an\n                                         #   ideal gas at STP.\nloschmidt     avogadro mol / molarvolume # Molecules per cubic meter of an\n                                         #   ideal gas at STP.  Loschmidt did\n                                         #   work similar to Avogadro.\nstefanboltzmann pi^2 k^4 / 60 hbar^3 c^2 # The power per area radiated by a\nsigma                   stefanboltzmann  #   blackbody at temperature T is\n                                         #   given by sigma T^4.\nwiendisplacement        2.8977729e-3 m K # Wien's Displacement Law gives the\n                                         #   frequency at which the the Planck\n                                         #   spectrum has maximum intensity.\n                                         #   The relation is lambda T = b where\n                                         #   lambda is wavelength, T is\n                                         #   temperature and b is the Wien\n                                         #   displacement.  This relation is\n                                         #   used to determine the temperature\n                                         #   of stars.\nK_J90 483597.9 GHz/V    # Direct measurement of the volt is difficult.  Until\nK_J   483597.8525 GHz/V #   recently, laboratories kept Weston cadmium cells as\n                        #   a reference, but they could drift.  In 1987 the\n                        #   CGPM officially recommended the use of the\n                        #   Josephson effect as a laboratory representation of\n                        #   the volt.  The Josephson effect occurs when two\n                        #   superconductors are separated by a thin insulating\n                        #   layer.  A \"supercurrent\" flows across the insulator\n                        #   with a frequency that depends on the potential\n                        #   applied across the superconductors.  This frequency\n                        #   can be very accurately measured.  The Josephson\n                        #   constant K_J, which is equal to 2e/h, relates the\n                        #   measured frequency to the potential.  Two values\n                        #   given, the conventional (exact) value from 1990 and\n                        #   the current CODATA measured value.  \nR_K90 25812.807 ohm     # Measurement of the ohm also presents difficulties.\nR_K   25812.8074555 ohm #   The old approach involved maintaining resistances\n                        #   that were subject to drift.  The new standard is\n                        #   based on the Hall effect.  When a current carrying\n                        #   ribbon is placed in a magnetic field, a potential\n                        #   difference develops across the ribbon.  The ratio\n                        #   of the potential difference to the current is\n                        #   called the Hall resistance.  Klaus von Klitzing\n                        #   discovered in 1980 that the Hall resistance varies\n                        #   in discrete jumps when the magnetic field is very\n                        #   large and the temperature very low.  This enables\n                        #   accurate realization of the resistance h/e^2 in the\n                        #   lab.  Two values given, the conventional (exact)\n                        #   value from 1990 and the current CODATA measured\n                        #   value.\n\n# Various conventional values\n\ngravity                 9.80665 m/s^2    # std acceleration of gravity (exact)\nforce                   gravity          # use to turn masses into forces\natm                     101325 Pa        # Standard atmospheric pressure\natmosphere              atm\nHg             13.5951 gram force / cm^3 # Standard weight of mercury (exact)\nwater                   gram force/cm^3  # Standard weight of water (exact)\nwaterdensity            gram / cm^3      # Density of water\nH2O                     water\nwc                      water            # water column\nmach                    331.46 m/s       # speed of sound in dry air at STP\nstandardtemp            273.15 K         # standard temperature\nstdtemp                 standardtemp\nnormaltemp              tempF(70)        # for gas density, from NIST\nnormtemp                normaltemp       # Handbook 44\n\n# Weight of mercury and water at different temperatures using the standard\n# force of gravity.\n\nHg10C         13.5708 force gram / cm^3  # These units, when used to form\nHg20C         13.5462 force gram / cm^3  # pressure measures, are not accurate\nHg23C         13.5386 force gram / cm^3  # because of considerations of the\nHg30C         13.5217 force gram / cm^3  # revised practical temperature scale.\nHg40C         13.4973 force gram / cm^3\nHg60F         13.5574 force gram / cm^3\nH2O0C         0.99987 force gram / cm^3\nH2O5C         0.99999 force gram / cm^3\nH2O10C        0.99973 force gram / cm^3\nH2O15C        0.99913 force gram / cm^3\nH2O18C        0.99862 force gram / cm^3\nH2O20C        0.99823 force gram / cm^3\nH2O25C        0.99707 force gram / cm^3\nH2O50C        0.98807 force gram / cm^3\nH2O100C       0.95838 force gram / cm^3\n\n# Atomic constants\n\nRinfinity            10973731.568539 /m  # The wavelengths of a spectral series\nR_H                     10967760 /m      #   can be expressed as\n                                         #     1/lambda = R (1/m^2 - 1/n^2).\n                                         #   where R is a number that various\n                                         #   slightly from element to element.\n                                         #   For hydrogen, R_H is the value,\n                                         #   and for heavy elements, the value\n                                         #   approaches Rinfinity, which can be\n                                         #   computed from\n                                         #        m_e c alpha^2 / 2 h\n                                         #   with a loss of 4 digits\n                                         #   of precision.\nalpha                   7.2973525664e-3  # The fine structure constant was\n                                         #   introduced to explain fine\n                                         #   structure visible in spectral\n                                         #   lines.  It can be computed from\n                                         #         mu0 c e^2 / 2 h\n                                         #   with a loss of 3 digits precision\n                                         #   and loss of precision in derived\n                                         #   values which use alpha.\nbohrradius              alpha / 4 pi Rinfinity\nprout                   185.5 keV        # nuclear binding energy equal to 1|12\n                                         #   binding energy of the deuteron\n# Planck constants\n\nplanckmass              2.17651e-8 kg     # sqrt(hbar c / G)\nm_P                     planckmass\nplancktime              hbar / planckmass c^2\nt_P                     plancktime\nplancklength            plancktime c\nl_P                     plancklength\n\n# Particle radius\n\nelectronradius    (1/4 pi epsilon0) e^2 / electronmass c^2   # Classical\ndeuteronchargeradius    2.1413e-15 m\nprotonchargeradius      0.8751e-15 m\n\n# Masses of elementary particles\n\nelectronmass            5.48579909070e-4 u\nm_e                     electronmass\nprotonmass              1.007276466879 u\nm_p                     protonmass\nneutronmass             1.00866491588 u\nm_n                     neutronmass\nmuonmass                0.1134289257 u\nm_mu                    muonmass\ndeuteronmass            2.013553212745 u\nm_d                     deuteronmass\nalphaparticlemass       4.001506179127 u\nm_alpha                 alphaparticlemass\ntaumass                 1.90749 u\nm_tau                   taumass\ntritonmass              3.01550071632 u\nm_t                     tritonmass\nhelionmass              3.01493224673 u\nm_h                     helionmass\n\n\n\n# particle wavelengths: the compton wavelength of a particle is\n# defined as h / m c where m is the mass of the particle.\n\nelectronwavelength      h / m_e c\nlambda_C                electronwavelength\nprotonwavelength        h / m_p c\nlambda_C,p              protonwavelength\nneutronwavelength       h / m_n c\nlambda_C,n              neutronwavelength\n\n# Magnetic moments\n\nbohrmagneton            e hbar / 2 electronmass\nmu_B                    bohrmagneton\nnuclearmagneton         e hbar /  2 protonmass\nmu_N                    nuclearmagneton\nmu_mu                  -4.49044826e-26 J/T   # Muon magnetic moment\nmu_p                    1.4106067873e-26 J/T # Proton magnetic moment\nmu_e                   -928.4764620e-26 J/T  # Electron magnetic moment\nmu_n                   -0.96623650e-26 J/T   # Neutron magnetic moment\nmu_d                    0.4330735040e-26 J/T # Deuteron magnetic moment\nmu_t                    1.504609503e-26 J/T  # Triton magnetic moment\nmu_h                   -1.074617522e-26 J/T  # Helion magnetic moment\n\n\n#\n# Units derived from physical constants\n#\n\nkgf                     kg force\ntechnicalatmosphere     kgf / cm^2\nat                      technicalatmosphere\nhyl                     kgf s^2 / m   # Also gram-force s^2/m according to [15]\nmmHg                    mm Hg\ntorr                    atm / 760  # These units, both named after Evangelista\ntor                     Pa         # Torricelli, should not be confused.  The\ninHg                    inch Hg    # torr is very close to the mm Hg. \ninH2O                   inch water\nmmH2O                   mm water\neV                      e V      # Energy acquired by a particle with charge e\nelectronvolt            eV       #   when it is accelerated through 1 V\nlightyear               c julianyear # The 365.25 day year is specified in\nly                      lightyear    # NIST publication 811\nlightsecond             c s\nlightminute             c min\nparsec                  au / tan(arcsec)    # Unit of length equal to distance\npc                      parsec              #   from the sun to a point having\n                                            #   heliocentric parallax of 1\n                                            #   arcsec (derived from parallax\n                                            #   second).  A distant object with\n                                            #   paralax theta will be about\n                                            #   (arcsec/theta) parsecs from the\n                                            #   sun (using the approximation\n                                            #   that tan(theta) = theta).\nrydberg                 h c Rinfinity       # Rydberg energy\ncrith                   0.089885 gram       # The crith is the mass of one\n                                            #   liter of hydrogen at standard\n                                            #   temperature and pressure.\namagatvolume            molarvolume\namagat                  mol/amagatvolume    # Used to measure gas densities\nlorentz                 bohrmagneton / h c  # Used to measure the extent\n                                            #   that the frequency of light\n                                            #   is shifted by a magnetic field.\ncminv                   h c / cm            # Unit of energy used in infrared\ninvcm                   cminv               #   spectroscopy.\nwavenumber              cminv\nkcal_mol                kcal_th / mol N_A   # kcal/mol is used as a unit of\n                                            #   energy by physical chemists.\n#\n# CGS system based on centimeter, gram and second\n#\n\ndyne                    cm gram / s^2   # force\ndyn                     dyne\nerg                     cm dyne         # energy\npoise                   gram / cm s     # viscosity, honors Jean Poiseuille\nP                       poise\nrhe                     /poise          # reciprocal viscosity\nstokes                  cm^2 / s        # kinematic viscosity\nSt                      stokes\nstoke                   stokes\nlentor                  stokes          # old name\nGal                     cm / s^2        # acceleration, used in geophysics\ngalileo                 Gal             # for earth's gravitational field\n                                        # (note that \"gal\" is for gallon\n                                        # but \"Gal\" is the standard symbol\n                                        # for the gal which is evidently a\n                                        # shortened form of \"galileo\".)\nbarye                   dyne/cm^2       # pressure\nbarad                   barye           # old name\nkayser                  1/cm            # Proposed as a unit for wavenumber\nbalmer                  kayser          # Even less common name than \"kayser\"\nkine                    cm/s            # velocity\nbole                    g cm / s        # momentum\npond                    gram force\nglug                gram force s^2 / cm # Mass which is accelerated at\n                                        #   1 cm/s^2 by 1 gram force\ndarcy           centipoise cm^2 / s atm # Measures permeability to fluid flow.\n\n                                        #   One darcy is the permeability of a\n                                        #   medium that allows a flow of cc/s\n                                        #   of a liquid of centipoise viscosity\n                                        #   under a pressure gradient of\n                                        #   atm/cm.  Named for H. Darcy.\n\nmobileohm               cm / dyn s      # mobile ohm, measure of mechanical\n                                        #   mobility\nmechanicalohm           dyn s / cm      # mechanical resistance\nacousticalohm           dyn s / cm^5    # ratio of the sound pressure of\n                                        #   1 dyn/cm^2 to a source of strength\n                                        #   1 cm^3/s\nray                     acousticalohm\nrayl                    dyn s / cm^3    # Specific acoustical resistance\neotvos                  1e-9 Gal/cm     # Change in gravitational acceleration\n                                        #   over horizontal distance\n\n# Electromagnetic units derived from the abampere\n\nabampere                10 A            # Current which produces a force of\nabamp                   abampere        #   2 dyne/cm between two infinitely\naA                      abampere        #   long wires that are 1 cm apart\nbiot                    aA              # alternative name for abamp\nBi                      biot\nabcoulomb               abamp sec\nabcoul                  abcoulomb\nabfarad                 abampere sec / abvolt\nabhenry                 abvolt sec / abamp\nabvolt                  dyne cm  / abamp sec\nabohm                   abvolt / abamp\nabmho                   /abohm\ngauss                   abvolt sec / cm^2\nGs                      gauss\nmaxwell                 abvolt sec      # Also called the \"line\"\nMx                      maxwell\noersted                 gauss / mu0\nOe                      oersted\ngilbert                 gauss cm / mu0\nGb                      gilbert\nGi                      gilbert\nunitpole                4 pi maxwell\nemu                     erg/gauss  # \"electro-magnetic unit\", a measure of\n                                   # magnetic moment, often used as emu/cm^3\n                                   # to specify magnetic moment density.\n\n# Gaussian system: electromagnetic units derived from statampere.\n#\n# Note that the Gaussian units are often used in such a way that Coulomb's law\n# has the form F= q1 * q2 / r^2.  The constant 1|4*pi*epsilon0 is incorporated\n# into the units.  From this, we can get the relation force=charge^2/dist^2.\n# This means that the simplification esu^2 = dyne cm^2 can be used to simplify\n# units in the Gaussian system, with the curious result that capacitance can be\n# measured in cm, resistance in sec/cm, and inductance in sec^2/cm.  These\n# units are given the names statfarad, statohm and stathenry below.\n\nstatampere              10 A cm / s c\nstatamp                 statampere\nstatvolt                dyne cm / statamp sec\nstatcoulomb             statamp s\nesu                     statcoulomb\nstatcoul                statcoulomb\nstatfarad               statamp sec / statvolt\ncmcapacitance           statfarad\nstathenry               statvolt sec / statamp\nstatohm                 statvolt / statamp\nstatmho                 /statohm\nstatmaxwell             statvolt sec\nfranklin                statcoulomb\ndebye                   1e-18 statcoul cm # unit of electrical dipole moment\nhelmholtz               debye/angstrom^2  # Dipole moment per area\njar                     1000 statfarad    # approx capacitance of Leyden jar\n\n#\n# Some historical electromagnetic units\n#\n\nintampere               0.999835 A    # Defined as the current which in one\nintamp                  intampere     #   second deposits .001118 gram of\n                                      #   silver from an aqueous solution of\n                                      #   silver nitrate.\nintfarad                0.999505 F\nintvolt                 1.00033 V\nintohm                  1.000495 ohm  # Defined as the resistance of a\n                                      #   uniform column of mercury containing\n                                      #   14.4521 gram in a column 1.063 m\n                                      #   long and maintained at 0 degC.\ndaniell                 1.042 V       # Meant to be electromotive force of a\n                                      #   Daniell cell, but in error by .04 V\nfaraday                 N_A e mol     # Charge that must flow to deposit or\nfaraday_phys            96521.9 C     #   liberate one gram equivalent of any\nfaraday_chem            96495.7 C     #   element.  (The chemical and physical\n                                      #   values are off slightly from what is\n                                      #   obtained by multiplying by amu_chem\n                                      #   or amu_phys.  These values are from\n                                      #   a 1991 NIST publication.)  Note that\n                                      #   there is a Faraday constant which is\n                                      #   equal to N_A e and hence has units of\n                                      #   C/mol.\nkappline                6000 maxwell  # Named by and for Gisbert Kapp\nsiemensunit             0.9534 ohm    # Resistance of a meter long column of\n                                      #   mercury with a 1 mm cross section.\n#\n# Printed circuit board units.  \n#\n# http://www.ndt-ed.org/GeneralResources/IACS/IACS.htm.  \n#\n# Conductivity is often expressed as a percentage of IACS.  A copper wire a\n# meter long with a 1 mm^2 cross section has a resistance of 1|58 ohm at \n# 20 deg C.  Copper density is also standarized at that temperature. \n#\n\ncopperconductivity      58 siemens m / mm^2     # A wire a meter long with\nIACS                    copperconductivity      #   a 1 mm^2 cross section\ncopperdensity           8.89 g/cm^3             # The \"ounce\" measures the     \nouncecopper             oz / ft^2 copperdensity #   thickness of copper used   \nozcu                    ouncecopper             #   in circuitboard fabrication\n                                                \n#\n# Photometric units\n#\n\nLUMINOUS_INTENSITY      candela\nLUMINOUS_FLUX           lumen\nLUMINOUS_ENERGY         talbot\nILLUMINANCE             lux\nEXITANCE                lux\n\ncandle                  1.02 candela  # Standard unit for luminous intensity\nhefnerunit              0.9 candle    #   in use before candela\nhefnercandle            hefnerunit    #\nviolle                  20.17 cd      # luminous intensity of 1 cm^2 of\n                                      #   platinum at its temperature of\n                                      #   solidification (2045 K)\n\nlumen                   cd sr         # Luminous flux (luminous energy per\nlm                      lumen         #    time unit)\n\ntalbot                  lumen s       # Luminous energy\nlumberg                 talbot        # References give these values for\nlumerg                  talbot        #    lumerg and lumberg both.  Note that\n                                      #    a paper from 1948 suggests that\n                                      #    lumerg should be 1e-7 talbots so\n                                      #    that lumergs/erg = talbots/joule.\n                                      #    lumerg = luminous erg\nlux                     lm/m^2        # Illuminance or exitance (luminous\nlx                      lux           #   flux incident on or coming from\nphot                    lumen / cm^2  #   a surface)\nph                      phot          #\nfootcandle              lumen/ft^2    # Illuminance from a 1 candela source\n                                      #    at a distance of one foot\nmetercandle             lumen/m^2     # Illuminance from a 1 candela source\n                                      #    at a distance of one meter\n\nmcs                     metercandle s # luminous energy per area, used to\n                                      #    measure photographic exposure\n\nnox                     1e-3 lux      # These two units were proposed for\nskot                    1e-3 apostilb # measurements relating to dark adapted\n                                      # eyes.\n# Luminance measures\n\nLUMINANCE               nit\n\nnit                     cd/m^2        # Luminance: the intensity per projected\nstilb                   cd / cm^2     # area of an extended luminous source.\nsb                      stilb         # (nit is from latin nitere = to shine.)\n\napostilb                cd/pi m^2\nasb                     apostilb\nblondel                 apostilb      # Named after a French scientist.\n\n# Equivalent luminance measures.  These units are units which measure\n# the luminance of a surface with a specified exitance which obeys\n# Lambert's law.  (Lambert's law specifies that luminous intensity of\n# a perfectly diffuse luminous surface is proportional to the cosine\n# of the angle at which you view the luminous surface.)\n\nequivalentlux           cd / pi m^2   # luminance of a 1 lux surface\nequivalentphot          cd / pi cm^2  # luminance of a 1 phot surface\nlambert                 cd / pi cm^2\nfootlambert             cd / pi ft^2\n\n# The bril is used to express \"brilliance\" of a source of light on a\n# logarithmic scale to correspond to subjective perception.  An increase of 1\n# bril means doubling the luminance.  A luminance of 1 lambert is defined to\n# have a brilliance of 1 bril.\n\nbril(x) units=[1;lambert]  2^(x+-100) lamberts ;log2(bril/lambert)+100\n\n# Some luminance data from the IES Lighting Handbook, 8th ed, 1993\n\nsunlum                  1.6e9 cd/m^2  # at zenith\nsunillum                100e3 lux     # clear sky\nsunillum_o              10e3 lux      # overcast sky\nsunlum_h                6e6 cd/m^2    # value at horizon\nskylum                  8000 cd/m^2   # average, clear sky\nskylum_o                2000 cd/m^2   # average, overcast sky\nmoonlum                 2500 cd/m^2\n\n#\n# Photographic Exposure Value\n# This section by Jeff Conrad (jeff_conrad@msn.com)\n#\n# The Additive system of Photographic EXposure (APEX) proposed in ASA\n# PH2.5-1960 was an attempt to simplify exposure determination for people who\n# relied on exposure tables rather than exposure meters.  Shortly thereafter,\n# nearly all cameras incorporated exposure meters, so the APEX system never\n# caught on, but the concept of exposure value remains in use.  Though given as\n# 'Ev' in ASA PH2.5-1960, it is now more commonly indicated by 'EV'.  EV is\n# related to exposure parameters by\n#\n#            A^2   LS   ES\n#     2^EV = --- = -- = --\n#             t    K    C\n#\n# Where\n#     A = Relative aperture (f-number)\n#     t = Exposure time in seconds\n#     L = Scene luminance in cd/m2\n#     E = Scene illuminance in lux\n#     S = Arithmetic ISO speed\n#     K = Reflected-light meter calibration constant\n#     C = Incident-light meter calibration constant\n#\n# Strictly, an exposure value is a combination of aperture and exposure time,\n# but it's also commonly used to indicate luminance (or illuminance).\n# Conversion to luminance or illuminance units depends on the ISO speed and the\n# meter calibration constant.  Common practice is to use an ISO speed of 100.\n# Calibration constants vary among camera and meter manufacturers: Canon,\n# Nikon, and Sekonic use a value of 12.5 for reflected-light meters, while\n# Kenko (formerly Minolta) and Pentax use a value of 14.  Kenko and Sekonic use\n# a value of 250 for incident-light meters with flat receptors.\n#\n# The values for in-camera meters apply only averaging, weighted-averaging, or\n# spot metering--the multi-segment metering incorporated in most current\n# cameras uses proprietary algorithms that evaluate many factors related to the\n# luminance distribution of what is being metered; they are not amenable to\n# simple conversions, and are usually not disclosed by the manufacturers.\n\ns100                    100 / lx s            # ISO 100 speed\niso100                  s100\n\n# Reflected-light meter calibration constant with ISO 100 speed\n\nk1250                   12.5 (cd/m2) / lx s   # For Canon, Nikon, and Sekonic\nk1400                   14   (cd/m2) / lx s   # For Kenko (Minolta) and Pentax\n\n# Incident-light meter calibration constant with ISO 100 film\n\nc250                    250 lx / lx s         # flat-disc receptor\n\n# Exposure value to scene luminance with ISO 100 imaging media\n\n# For Kenko (Minolta) or Pentax\n#ev100(x) units=[;cd/m^2] range=(0,) 2^x k1400 / s100; log2(ev100 s100/k1400)\n# For Canon, Nikon, or Sekonic\nev100(x) units=[1;cd/m^2] range=(0,) 2^x k1250 / s100; log2(ev100 s100/k1250)\nEV100()  ev100\n\n# Exposure value to scene illuminance with ISO 100 imaging media\n\niv100(x) units=[1;lx] range=(0,) 2^x c250 / s100; log2(iv100 s100 / c250)\n\n# Other Photographic Exposure Conversions\n# \n# As part of APEX, ASA PH2.5-1960 proposed several logarithmic quantities\n# related by\n#\n#    Ev = Av + Tv = Bv + Sv\n#\n# where\n#  Av = log2(A^2)       Aperture value\n#  Tv = log2(1/t)       Time value\n#  Sv = log2(N Sx)      Speed value\n#  Bv = log2(B S / K)   Luminance (\"brightness\") value\n#  Iv = log2(I S / C)   Illuminance value\n#\n# and\n#  A  = Relative aperture (f-number)\n#  t  = Exposure time in seconds\n#  Sx = Arithmetic ISO speed in 1/lux s\n#  B  = luminance in cd/m2\n#  I  = luminance in lux\n\n# The constant N derives from the arcane relationship between arithmetic\n# and logarithmic speed given in ASA PH2.5-1960.  That relationship\n# apparently was not obvious--so much so that it was thought necessary\n# to explain it in PH2.12-1961.  The constant has had several values\n# over the years, usually without explanation for the changes.  Although\n# APEX had little impact on consumer cameras, it has seen a partial\n# resurrection in the Exif standards published by the Camera & Imaging\n# Products Association of Japan.\n\n#N_apex         2^-1.75 lx s    # precise value implied in ASA PH2.12-1961,\n                                # derived from ASA PH2.5-1960.\n#N_apex         0.30 lx s       # rounded value in ASA PH2.5-1960, \n                                # ASA PH2.12-1961, and ANSI PH2.7-1986\n#N_apex         0.3162 lx s     # value in ANSI PH2.7-1973\nN_exif          1|3.125 lx s    # value in Exif 2.3 (2010), making Sv(5) = 100\nK_apex1961      11.4 (cd/m2) / lx s    # value in ASA PH2.12-1961\nK_apex1971      12.5 (cd/m2) / lx s    # value in ANSI PH3.49-1971; more common\nC_apex1961      224 lx / lx s   # value in PH2.12-1961 (20.83 for I in \n                                #   footcandles; flat sensor?)\nC_apex1971      322 lx / lx s   # mean value in PH3.49-1971 (30 +/- 5 for I in\n                                # footcandles; hemispherical sensor?)\nN_speed         N_exif\nK_lum           K_apex1971\nC_illum         C_apex1961\n\n# Units for Photographic Exposure Variables\n#\n# Practical photography sometimes pays scant attention to units for exposure\n# variables.  In particular, the \"speed\" of the imaging medium is treated as if\n# it were dimensionless when it should have units of reciprocal lux seconds;\n# this practice works only because \"speed\" is almost invariably given in\n# accordance with international standards (or similar ones used by camera\n# manufacturers)--so the assumed units are invariant.  In calculating\n# logarithmic quantities--especially the time value Tv and the exposure value\n# EV--the units for exposure time (\"shutter speed\") are often ignored; this\n# practice works only because the units of exposure time are assumed to be in\n# seconds, and the missing units that make the argument to the logarithmic\n# function dimensionless are silently provided.\n#\n# In keeping with common practice, the definitions that follow treat \"speeds\"\n# as dimensionless, so ISO 100 speed is given simply as '100'.  When\n# calculating the logarithmic APEX quantities Av and Tv, the definitions\n# provide the missing units, so the times can be given with any appropriate\n# units.  For example, giving an exposure time of 1 minute as either '1 min' or\n# '60 s' will result in Tv of -5.9068906.\n#\n# Exposure Value from f-number and Exposure Time\n# \n# Because nonlinear unit conversions only accept a single quantity,\n# there is no direct conversion from f-number and exposure time to\n# exposure value EV.  But the EV can be obtained from a combination of\n# Av and Tv.  For example, the \"sunny 16\" rule states that correct\n# exposure for a sunlit scene can achieved by using f/16 and an exposure\n# time equal to the reciprocal of the ISO speed in seconds; this can be\n# calculated as\n#\n#    ~Av(16) + ~Tv(1|100 s),\n#\n# which gives 14.643856.  These conversions may be combined with the\n# ev100 conversion:\n#\n#    ev100(~Av(16) + ~Tv(1|100 s))\n#\n# to yield the assumed average scene luminance of 3200 cd/m^2.\n\n# convert relative aperture (f-number) to aperture value\nAv(A)           units=[1;1] domain=[-2,) range=[0.5,)  2^(A/2); 2 log2(Av)\n# convert exposure time to time value\nTv(t)           units=[1;s] range=(0,)  2^(-t) s; log2(s / Tv)\n# convert logarithmic speed Sv in ASA PH2.5-1960 to ASA/ISO arithmetic speed;\n# make arithmetic speed dimensionless\n# 'Sv' conflicts with the symbol for sievert; you can uncomment this function\n# definition if you don't need that symbol\n#Sv(S)    units=[1;1] range=(0,) 2^S / (N_speed/lx s); log2((N_speed/lx s) Sv)\nSval(S)   units=[1;1] range=(0,) 2^S / (N_speed/lx s); log2((N_speed/lx s) Sval)\n\n# convert luminance value Bv in ASA PH2.12-1961 to luminance\nBv(x)           units=[1;cd/m^2] range=(0,) \\\n                2^x K_lum N_speed ; log2(Bv / (K_lum N_speed))\n\n# convert illuminance value Iv in ASA PH2.12-1961 to illuminance\nIv(x)           units=[1;lx] range=(0,) \\\n                2^x C_illum N_speed ; log2(Iv / (C_illum N_speed))\n\n# convert ASA/ISO arithmetic speed Sx to ASA logarithmic speed in \n# ASA PH2.5-1960; make arithmetic speed dimensionless\nSx(S)           units=[1;1] domain=(0,) \\\n                log2((N_speed/lx s) S); 2^Sx / (N_speed/lx s)\n\n# convert DIN speed/ISO logarithmic speed in ISO 6:1993 to arithmetic speed\n# for convenience, speed is treated here as if it were dimensionless\nSdeg(S)         units=[1;1] range=(0,) 10^((S - 1) / 10) ; (1 + 10 log(Sdeg))\nSdin()          Sdeg\n\n# Numerical Aperture and f-Number of a Lens\n#\n# The numerical aperture (NA) is given by\n#\n#   NA = n sin(theta)\n#\n# where n is the index of refraction of the medium and theta is half\n# of the angle subtended by the aperture stop from a point in the image\n# or object plane. For a lens in air, n = 1, and\n#\n#   NA = 0.5 / f-number\n#\n# convert NA to f-number\nnumericalaperture(x) units=[1;1] domain=(0,1] range=[0.5,) \\\n                     0.5 / x ; 0.5 / numericalaperture\nNA()            numericalaperture\n#\n# convert f-number to itself; restrict values to those possible\nfnumber(x)      units=[1;1] domain=[0.5,) range=[0.5,) x ; fnumber\n\n# Referenced Photographic Standards\n#\n# ASA PH-2.5-1960. USA Standard, Method for Determining (Monochrome,\n#    Continuous-Tone) Speed of Photographic Negative Materials.\n# ASA PH2.12-1961. American Standard, General-Purpose Photographic\n#    Exposure Meters (photoelectric type).\n# ANSI PH3.49-1971. American National Standard for general-purpose\n#    photographic exposure meters (photoelectric type).\n# ANSI PH2.7-1973. American National Standard Photographic Exposure Guide.\n# ANSI PH2.7-1986. American National Standard for Photography --\n#    Photographic Exposure Guide.\n# CIPA DC-008-2010. Exchangeable image file format for digital still\n#    cameras: Exif Version 2.3\n# ISO 6:1993.  International Standard, Photography -- Black-and-white\n#    pictorial still camera negative film/process systems --\n#    Determination of ISO Speed.\n\n\n#\n# Astronomical time measurements\n#\n# Astronomical time measurement is a complicated matter.  The length of the\n# true day at a given place can be 21 seconds less than 24 hours or 30 seconds\n# over 24 hours.  The two main reasons for this are the varying speed of the\n# earth in its elliptical orbit and the fact that the sun moves on the ecliptic\n# instead of along the celestial equator.  To devise a workable system for time\n# measurement, Simon Newcomb (1835-1909) used a fictitious \"mean sun\".\n# Consider a first fictitious sun traveling along the ecliptic at a constant\n# speed and coinciding with the true sun at perigee and apogee.  Then\n# considering a second fictitious sun traveling along the celestial equator at\n# a constant speed and coinciding with the first fictitious sun at the\n# equinoxes.  The second fictitious sun is the \"mean sun\".  From this equations\n# can be written out to determine the length of the mean day, and the tropical\n# year.  The length of the second was determined based on the tropical year\n# from such a calculation and was officially used from 1960-1967 until atomic\n# clocks replaced astronomical measurements for a standard of time.  All of the\n# values below give the mean time for the specified interval.\n#\n# See \"Mathematical Astronomy Morsels\" by Jean Meeus for more details\n# and a description of how to compute the correction to mean time.\n#\n\nTIME                    second\n\nanomalisticyear         365.2596 days       # The time between successive\n                                            #   perihelion passages of the\n                                            #   earth.\nsiderealyear            365.256360417 day   # The time for the earth to make\n                                            #   one revolution around the sun\n                                            #   relative to the stars.\ntropicalyear            365.242198781 day   # The time needed for the mean sun\n                                            #   as defined above to increase\n                                            #   its longitude by 360 degrees.\n                                            #   Most references defined the\n                                            #   tropical year as the interval\n                                            #   between vernal equinoxes, but\n                                            #   this is misleading.  The length\n                                            #   of the season changes over time\n                                            #   because of the eccentricity of\n                                            #   the earth's orbit.  The time\n                                            #   between vernal equinoxes is\n                                            #   approximately 365.24237 days\n                                            #   around the year 2000.  See\n                                            #   \"Mathematical Astronomy\n                                            #   Morsels\" for more details.\neclipseyear             346.62 days         # The line of nodes is the\n                                            #   intersection of the plane of\n                                            #   Earth's orbit around the sun\n                                            #   with the plane of the moon's\n                                            #   orbit around earth.  Eclipses\n                                            #   can only occur when the moon\n                                            #   and sun are close to this\n                                            #   line.  The line rotates and\n                                            #   appearances of the sun on the\n                                            #   line of nodes occur every\n                                            #   eclipse year.\nsaros                   223 synodicmonth    # The earth, moon and sun appear in\n                                            #   the same arrangement every\n                                            #   saros, so if an eclipse occurs,\n                                            #   then one saros later, a similar\n                                            #   eclipse will occur.  (The saros\n                                            #   is close to 19 eclipse years.)\n                                            #   The eclipse will occur about\n                                            #   120 degrees west of the\n                                            #   preceeding one because the\n                                            #   saros is not an even number of\n                                            #   days.  After 3 saros, an\n                                            #   eclipse will occur at\n                                            #   approximately the same place.\nsiderealday             86164.09054 s       # The sidereal day is the interval\nsiderealhour            1|24 siderealday    #   between two successive transits\nsiderealminute          1|60 siderealhour   #   of a star over the meridian,\nsiderealsecond          1|60 siderealminute #   or the time required  for the\n                                            #   earth to make one rotation\n                                            #   relative to the stars.  The\n                                            #   more usual solar day is the\n                                            #   time required to make a\n                                            #   rotation relative to the sun.\n                                            #   Because the earth moves in its\n                                            #   orbit, it has to turn a bit\n                                            #   extra to face the sun again,\n                                            #   hence the solar day is slightly\n                                            #   longer.\nanomalisticmonth        27.55454977 day     # Time for the moon to travel from\n                                            #   perigee to perigee\nnodicalmonth            27.2122199 day      # The nodes are the points where\ndraconicmonth           nodicalmonth        #   an orbit crosses the ecliptic.\ndraconiticmonth         nodicalmonth        #   This is the time required to\n                                            #   travel from the ascending node\n                                            #   to the next ascending node.\nsiderealmonth           27.321661 day       # Time required for the moon to\n                                            #   orbit the earth\nlunarmonth              29 days + 12 hours + 44 minutes + 2.8 seconds\n                                            # Mean time between full moons.\nsynodicmonth            lunarmonth          #   Full moons occur when the sun\nlunation                synodicmonth        #   and moon are on opposite sides\nlune                    1|30 lunation       #   of the earth.  Since the earth\nlunour                  1|24 lune           #   moves around the sun, the moon\n                                            #   has to revolve a bit extra to\n                                            #   get into the full moon\n                                            #   configuration.\nyear                    tropicalyear\nyr                      year\nmonth                   1|12 year\nmo                      month\nlustrum                 5 years             # The Lustrum was a Roman\n                                            #   purification ceremony that took\n                                            #   place every five years.\n                                            #   Classically educated Englishmen\n                                            #   used this term.\ndecade                  10 years\ncentury                 100 years\nmillennium              1000 years\nmillennia               millennium\nsolaryear               year\nlunaryear               12 lunarmonth\ncalendaryear            365 day\ncommonyear              365 day\nleapyear                366 day\njulianyear              365.25 day\ngregorianyear           365.2425 day\nislamicyear             354 day          # A year of 12 lunar months. They\nislamicleapyear         355 day          # began counting on July 16, AD 622\n                                         # when Muhammad emigrated to Medina\n                                         # (the year of the Hegira).  They need\n                                         # 11 leap days in 30 years to stay in\n                                         # sync with the lunar year which is a\n                                         # bit longer than the 29.5 days of the\n                                         # average month.  The months do not\n                                         # keep to the same seasons, but\n                                         # regress through the seasons every\n                                         # 32.5 years.\nislamicmonth            1|12 islamicyear # They have 29 day and 30 day months.\n\n# The Hewbrew year is also based on lunar months, but synchronized to the solar\n# calendar.  The months vary irregularly between 29 and 30 days in length, and\n# the years likewise vary.  The regular year is 353, 354, or 355 days long.  To\n# keep up with the solar calendar, a leap month of 30 days is inserted every\n# 3rd, 6th, 8th, 11th, 14th, 17th, and 19th years of a 19 year cycle.  This\n# gives leap years that last 383, 384, or 385 days.\n\n\n# Sidereal days\n\nmercuryday              58.6462 day\nvenusday                243.01 day        # retrograde\nearthday                siderealday\nmarsday                 1.02595675 day\njupiterday              0.41354 day\nsaturnday               0.4375 day\nuranusday               0.65 day          # retrograde\nneptuneday              0.768 day\nplutoday                6.3867 day\n\n# Sidereal years from http://ssd.jpl.nasa.gov/phys_props_planets.html.  Data\n# was updated in May 2001 based on the 1992 Explanatory Supplement to the\n# Astronomical Almanac and the mean longitude rates.  Apparently the table of\n# years in that reference is incorrect.\n\nmercuryyear             0.2408467 julianyear\nvenusyear               0.61519726 julianyear\nearthyear               siderealyear\nmarsyear                1.8808476 julianyear\njupiteryear             11.862615 julianyear\nsaturnyear              29.447498 julianyear\nuranusyear              84.016846 julianyear\nneptuneyear             164.79132 julianyear\nplutoyear               247.92065 julianyear\n\n# Objects on the earth are charted relative to a perfect ellipsoid whose\n# dimensions are specified by different organizations.  The ellipsoid is\n# specified by an equatorial radius and a flattening value which defines the\n# polar radius.  These values are the 1996 values given by the International\n# Earth Rotation Service (IERS) whose reference documents can be found at\n# http://maia.usno.navy.mil/\n\nearthflattening         1|298.25642\nearthradius_equatorial  6378136.49 m\nearthradius_polar       (-earthflattening+1) earthradius_equatorial\n\nlandarea                148.847e6 km^2\noceanarea               361.254e6 km^2\n\nmoonradius              1738 km         # mean value\nsunradius               6.96e8 m\n\n# Many astronomical values can be measured most accurately in a system of units\n# using the astronomical unit and the mass of the sun as base units.  The\n# uncertainty in the gravitational constant makes conversion to SI units\n# significantly less accurate.\n\n# The astronomical unit was defined to be the length of the of the semimajor\n# axis of a massless object with the same year as the earth.  With such a\n# definition in force, and with the mass of the sun set equal to one, Kepler's\n# third law can be used to solve for the value of the gravitational constant.\n\n# Kepler's third law says that (2 pi / T)^2 a^3 = G M where T is the orbital\n# period, a is the size of the semimajor axis, G is the gravitational constant\n# and M is the mass.  With M = 1 and T and a chosen for the earth's orbit, we\n# find sqrt(G) = (2 pi / T) sqrt(AU^3).  This constant is called the Gaussian\n# gravitational constant, apparently because Gauss originally did the\n# calculations.  However, when the original calculation was done, the value\n# for the length of the earth's year was inaccurate.  The value used is called\n# the Gaussian year.  Changing the astronomical unit to bring it into\n# agreement with more accurate values for the year would have invalidated a\n# lot of previous work, so instead the astronomical unit has been kept equal\n# to this original value.  This is accomplished by using a standard value for\n# the Gaussian gravitational constant.  This constant is called k.\n# Many values below are from http://ssd.jpl.nasa.gov/?constants\n\ngauss_k                 0.01720209895   # This beast has dimensions of\n                                        # au^(3|2) / day and is exact.\ngaussianyear      (2 pi / gauss_k) days # Year that corresponds to the Gaussian\n                                        # gravitational constant. This is a\n                                        # fictional year, and doesn't\n                                        # correspond to any celestial event.\nastronomicalunit         149597870700 m # IAU definition from 2012, exact\nau                     astronomicalunit # ephemeris for the above described\n                                        # astronomical unit.  (See the NASA\n                                        # site listed above.)\nsolarmass                  1.9891e30 kg\nsunmass                       solarmass\n\n\nsundist                 1.0000010178 au # mean earth-sun distance\nmoondist                3.844e8 m       # mean earth-moon distance\nsundist_near            1.471e11 m      # earth-sun distance at perihelion\nsundist_far             1.521e11 m      # earth-sun distance at aphelion\n\n# The following are masses for planetary systems, not just the planet itself.\n# The comments give the uncertainty in the denominators.  As noted above,\n# masses are given relative to the solarmass because this is more accurate.\n# The conversion to SI is uncertain because of uncertainty in G, the\n# gravitational constant.\n#\n# Values are from http://ssd.jpl.nasa.gov/astro_constants.html\n\nmercurymass             solarmass / 6023600   # 250\nvenusmass               solarmass / 408523.71 # 0.06\nearthmoonmass           solarmass / 328900.56 # 0.02\nmarsmass                solarmass / 3098708   # 9\njupitermass             solarmass / 1047.3486 # 0.0008\nsaturnmass              solarmass / 3497.898  # 0.018\nuranusmass              solarmass / 22902.98  # 0.03\nneptunemass             solarmass / 19412.24  # 0.04\nplutomass               solarmass / 1.35e8    # 0.07e8\n\nmoonearthmassratio      0.012300034 # uncertainty 3 x 10-9\nearthmass               earthmoonmass / ( 1 + moonearthmassratio)\nmoonmass                moonearthmassratio earthmass\n\n# These are the old values for the planetary masses.  They may give\n# the masses of the planets alone.\n\noldmercurymass             0.33022e24 kg\noldvenusmass               4.8690e24 kg\noldmarsmass                0.64191e24 kg\noldjupitermass             1898.8e24 kg\noldsaturnmass              568.5e24 kg\nolduranusmass              86.625e24 kg\noldneptunemass             102.78e24 kg\noldplutomass               0.015e24 kg\n\n# Mean radius from http://ssd.jpl.nsaa.gov/phys_props_planets.html which in\n# turn cites Global Earth Physics by CF Yoder, 1995.\n\nmercuryradius           2440 km\nvenusradius             6051.84 km\nearthradius             6371.01 km\nmarsradius              3389.92 km\njupiterradius           69911 km\nsaturnradius            58232 km\nuranusradius            25362 km\nneptuneradius           24624 km\nplutoradius             1151 km\n\nmoongravity             1.62 m/s^2\n\n#\n# The Hartree system of atomic units, derived from fundamental units\n# of mass (of electron), action (planck's constant), charge, and\n# the coulomb constant.\n\n# Fundamental units\n\natomicmass              electronmass\natomiccharge            e\natomicaction            hbar\n\n# derived units (Warning: accuracy is lost from deriving them this way)\n\natomiclength            bohrradius\natomictime              hbar^3/coulombconst^2 atomicmass e^4 # Period of first\n                                                             # bohr orbit\natomicvelocity          atomiclength / atomictime\natomicenergy            hbar / atomictime\nhartree                 atomicenergy\n\n#\n# These thermal units treat entropy as charge, from [5]\n#\n\nthermalcoulomb          J/K        # entropy\nthermalampere           W/K        # entropy flow\nthermalfarad            J/K^2\nthermalohm              K^2/W      # thermal resistance\nfourier                 thermalohm\nthermalhenry            J K^2/W^2  # thermal inductance\nthermalvolt             K          # thermal potential difference\n\n\n#\n# United States units\n#\n\n# linear measure\n\n# The US Metric Law of 1866 legalized the metric system in the USA and\n# defined the meter in terms of the British system with the exact\n# 1 meter = 39.37 inches.  On April 5, 1893 Thomas Corwin Mendenhall,\n# Superintendent of Weights and Measures, decided, in what has become\n# known as the \"Mendenhall Order\" that the meter and kilogram would be the\n# fundamental standards in the USA.  The definition from 1866 was turned\n# around to give an exact definition of the yard as 3600|3937 meters This\n# definition was used until July of 1959 when the definition was changed\n# to bring the US and other English-speaking countries into agreement; the\n# Canadian value of 1 yard = 0.9144 meter (exactly) was chosen because it\n# was approximately halfway between the British and US values; it had the\n# added advantage of making 1 inch = 25.4 mm (exactly).  Since 1959, the\n# \"international\" foot has been exactly 0.3048 meters.  At the same time,\n# it was decided that any data expressed in feet derived from geodetic\n# surveys within the US would continue to use the old definition and call\n# the old unit the \"survey foot.\" The US continues to define the statute\n# mile, furlong, chain, rod, link, and fathom in terms of the US survey\n# foot.\n# Sources:\n# NIST Special Publication 447, Sects. 5, 7, and 8.\n# NIST Handbook 44, 2011 ed., Appendix C.\n# Canadian Journal of Physics, 1959, 37:(1) 84, 10.1139/p59-014.\n\nUS                      1200|3937 m/ft   # These four values will convert\nUS-                     US               #   international measures to\nsurvey-                 US               #   US Survey measures\ngeodetic-               US\nint                     3937|1200 ft/m   # Convert US Survey measures to\nint-                    int              #   international measures\n\ninch                    2.54 cm\nin                      inch\nfoot                    12 inch\nfeet                    foot\nft                      foot\nyard                    3 ft\nyd                      yard\nmile                    5280 ft          # The mile was enlarged from 5000 ft\n                                         # to this number in order to make\n                                         # it an even number of furlongs.\n                                         # (The Roman mile is 5000 romanfeet.)\nline                    1|12 inch  # Also defined as '.1 in' or as '1e-8 Wb'\nrod                     5.5 yard\nperch                   rod\nfurlong                 40 rod           # From \"furrow long\"\nstatutemile             mile\nleague                  3 mile           # Intended to be an an hour's walk\n\n# surveyor's measure\n\nsurveyorschain          66 surveyft\nsurveychain             surveyorschain\nsurveyorspole           1|4 surveyorschain\nsurveyorslink           1|100 surveyorschain\nchain                   66 ft\nlink                    1|100 chain\nch                      chain\nUSacre                  10 surveychain^2\nintacre                 10 chain^2       # Acre based on international ft\nintacrefoot             acre foot\nUSacrefoot              USacre surveyfoot\nacrefoot                intacrefoot\nacre                    intacre\nsection                 mile^2\ntownship                36 section\nhomestead               160 acre # Area of land granted by the 1862 Homestead\n                                 # Act of the United States Congress\ngunterschain            surveyorschain\n\nengineerschain          100 ft\nengineerslink           1|100 engineerschain\nramsdenschain           engineerschain\nramsdenslink            engineerslink\n\ngurleychain             33 feet           # Andrew Ellicott chain is the\ngurleylink              1|50 gurleychain  # same length\n\nwingchain               66 feet           # Chain from 1664, introduced by\nwinglink                1|80 wingchain    # Vincent Wing, also found in a\n                                          # 33 foot length with 40 links.\n# early US length standards\n\n# The US has had four standards for the yard: one by Troughton of London\n# (1815); bronze yard #11 (1856); the Mendhall yard (1893), consistent\n# with the definition of the meter in the metric joint resolution of\n# Congress in 1866, but defining the yard in terms of the meter; and the\n# international yard (1959), which standardized definitions for Australia,\n# Canada, New Zealand, South Africa, the UK, and the US.\n# Sources: Pat Naughtin (2009), Which Inch?, www.metricationmatters.com;\n# Lewis E.  Barbrow and Lewis V.  Judson (1976).  NBS Special Publication\n# 447, Weights and Measures Standards of the United States: A Brief\n# History.\n\ntroughtonyard           914.42190 mm\nbronzeyard11            914.39980 mm\nmendenhallyard          surveyyard\ninternationalyard       yard\n\n# nautical measure\n\nfathom                  6 ft     # Originally defined as the distance from\n                                 #   fingertip to fingertip with arms fully\n                                 #   extended.\nnauticalmile            1852 m   # Supposed to be one minute of latitude at\n                                 # the equator.  That value is about 1855 m.\n                                 # Early estimates of the earth's circumference\n                                 # were a bit off.  The value of 1852 m was\n                                 # made the international standard in 1929.\n                                 # The US did not accept this value until\n                                 # 1954.  The UK switched in 1970.\n\ncable                   1|10 nauticalmile\nintcable                cable              # international cable\ncablelength             cable\nUScable                 100 USfathom\nnavycablelength         720 USft           # used for depth in water\nmarineleague            3 nauticalmile\ngeographicalmile        brnauticalmile\nknot                    nauticalmile / hr\nclick                   km       # US military slang\nklick                   click\n\n# Avoirdupois weight\n\npound                   0.45359237 kg   # The one normally used\nlb                      pound           # From the latin libra\ngrain                   1|7000 pound    # The grain is the same in all three\n                                        # weight systems.  It was originally\n                                        # defined as the weight of a barley\n                                        # corn taken from the middle of the\n                                        # ear.\nounce                   1|16 pound\noz                      ounce\ndram                    1|16 ounce\ndr                      dram\nushundredweight         100 pounds\ncwt                     hundredweight\nshorthundredweight      ushundredweight\nuston                   shortton\nshortton                2000 lb\nquarterweight           1|4 uston\nshortquarterweight      1|4 shortton\nshortquarter            shortquarterweight\n\n# Troy Weight.  In 1828 the troy pound was made the first United States\n# standard weight.  It was to be used to regulate coinage.\n\ntroypound               5760 grain\ntroyounce               1|12 troypound\nozt                     troyounce\npennyweight             1|20 troyounce  # Abbreviated \"d\" in reference to a\ndwt                     pennyweight     #   Frankish coin called the \"denier\"\n                                        #   minted in the late 700's.  There\n                                        #   were 240 deniers to the pound.\nassayton                mg ton / troyounce  # mg / assayton = troyounce / ton\nusassayton              mg uston / troyounce\nbrassayton              mg brton / troyounce\nfineounce               troyounce       # A troy ounce of 99.5% pure gold\n\n# Some other jewelers units\n\nmetriccarat             0.2 gram        # Defined in 1907\nmetricgrain             50 mg\ncarat                   metriccarat\nct                      carat\njewelerspoint           1|100 carat\nsilversmithpoint        1|4000 inch\nmomme                   3.75 grams      # Traditional Japanese unit based\n                                        # on the chinese mace.  It is used for\n                                        # pearls in modern times and also for\n                                        # silk density.  The definition here\n                                        # was adopted in 1891.\n# Apothecaries' weight\n\nappound                 troypound\napounce                 troyounce\napdram                  1|8 apounce\napscruple               1|3 apdram\n\n# Liquid measure\n\nusgallon                231 in^3        # US liquid measure is derived from\ngal                     gallon          # the British wine gallon of 1707.\nquart                   1|4 gallon      # See the \"winegallon\" entry below\npint                    1|2 quart       # more historical information.\ngill                    1|4 pint\nusquart                 1|4 usgallon\nuspint                  1|2 usquart\nusgill                  1|4 uspint\nusfluidounce            1|16 uspint\nfluiddram               1|8 usfloz\nminimvolume             1|60 fluiddram\nqt                      quart\npt                      pint\nfloz                    fluidounce\nusfloz                  usfluidounce\nfldr                    fluiddram\nliquidbarrel            31.5 usgallon\nusbeerbarrel            2 beerkegs\nbeerkeg                 15.5 usgallon   # Various among brewers\nponykeg                 1|2 beerkeg\nwinekeg                 12 usgallon\npetroleumbarrel         42 usgallon     # Originated in Pennsylvania oil\nbarrel                  petroleumbarrel # fields, from the winetierce\nbbl                     barrel\nushogshead              2 liquidbarrel\nusfirkin                9 usgallon\n\n# Dry measures: The Winchester Bushel was defined by William III in 1702 and\n# legally adopted in the US in 1836.\n\nusbushel                2150.42 in^3  # Volume of 8 inch cylinder with 18.5\nbu                      bushel        # inch diameter (rounded)\npeck                    1|4 bushel\nuspeck                  1|4 usbushel\nbrpeck                  1|4 brbushel\npk                      peck\ndrygallon               1|2 uspeck\ndryquart                1|4 drygallon\ndrypint                 1|2 dryquart\ndrybarrel               7056 in^3     # Used in US for fruits, vegetables,\n                                      #   and other dry commodities except for\n                                      #   cranberries.\ncranberrybarrel         5826 in^3     # US cranberry barrel\nheapedbushel            1.278 usbushel# The following explanation for this\n                                      #   value was provided by Wendy Krieger\n                                      #   <os2fan2@yahoo.com> based on\n                                      #   guesswork.  The cylindrical vessel is\n                                      #   18.5 inches in diameter and 1|2 inch\n                                      #   thick.  A heaped bushel includes the\n                                      #   contents of this cylinder plus a heap\n                                      #   on top.  The heap is a cone 19.5\n                                      #   inches in diameter and 6 inches\n                                      #   high.  With these values, the volume\n                                      #   of the bushel is 684.5 pi in^3 and\n                                      #   the heap occupies 190.125 pi in^3.\n                                      #   Therefore, the heaped bushel is\n                                      #   874.625|684.5 bushels.  This value is\n                                      #   approximately 1.2777575 and it rounds\n                                      #   to the value listed for the size of\n                                      #   the heaped bushel.  Sometimes the\n                                      #   heaped bushel is reported as 1.25\n                                      #   bushels.  This same explanation gives\n                                      #   that value if the heap is taken to\n                                      #   have an 18.5 inch diameter.\n\n# Grain measures.  The bushel as it is used by farmers in the USA is actually\n# a measure of mass which varies for different commodities.  Canada uses the\n# same bushel masses for most commodities, but not for oats.\n\nwheatbushel             60 lb\nsoybeanbushel           60 lb\ncornbushel              56 lb\nryebushel               56 lb\nbarleybushel            48 lb\noatbushel               32 lb\nricebushel              45 lb\ncanada_oatbushel        34 lb\n\n# Wine and Spirits measure\n\nponyvolume              1 usfloz\njigger                  1.5 usfloz   # Can vary between 1 and 2 usfloz\nshot                    jigger     # Sometimes 1 usfloz\neushot                  25 ml      # EU standard spirits measure\nfifth                   1|5 usgallon\nwinebottle              750 ml     # US industry standard, 1979\nwinesplit               1|4 winebottle\nwineglass               4 usfloz\nmagnum                  1.5 liter  # Standardized in 1979, but given\n                                   # as 2 qt in some references\nmetrictenth             375 ml\nmetricfifth             750 ml\nmetricquart             1 liter\n\n# Old British bottle size\n\nreputedquart            1|6 brgallon\nreputedpint             1|2 reputedquart\nbrwinebottle            reputedquart       # Very close to 1|5 winegallon\n\n# French champagne bottle sizes\n\nsplit                   200 ml\njeroboam                2 magnum\nrehoboam                3 magnum\nmethuselah              4 magnum\nsalmanazar              6 magnum\nbalthazar               8 magnum\nnebuchadnezzar          10 magnum\n\n#\n# Water is \"hard\" if it contains various minerals, expecially calcium\n# carbonate.\n#\n\nclarkdegree     grains/brgallon # Content by weigh of calcium carbonate\ngpg             grains/usgallon # Divide by water's density to convert to\n                                #   a dimensionless concentration measure\n#\n# Shoe measures\n#\n\nshoeiron                1|48 inch    # Used to measure leather in soles\nshoeounce               1|64 inch    # Used to measure non-sole shoe leather\n\n# USA shoe sizes.  These express the length of the shoe or the length\n# of the \"last\", the form that the shoe is made on.  But note that\n# this only captures the length.  It appears that widths change 1/4\n# inch for each letter within the same size, and if you change the\n# length by half a size then the width changes between 1/8 inch and\n# 1/4 inch.  But this may not be standard.  If you know better, please\n# contact me.\n\nshoesize_delta          1|3 inch     # USA shoe sizes differ by this amount\nshoe_men0               8.25 inch\nshoe_women0             (7+11|12) inch\nshoe_boys0              (3+11|12) inch\nshoe_girls0             (3+7|12) inch\n\nshoesize_men(n) units=[1;inch]   shoe_men0 + n shoesize_delta ; \\\n                                (shoesize_men+(-shoe_men0))/shoesize_delta\nshoesize_women(n) units=[1;inch] shoe_women0 + n shoesize_delta ; \\\n                                (shoesize_women+(-shoe_women0))/shoesize_delta\nshoesize_boys(n) units=[1;inch]  shoe_boys0 + n shoesize_delta ; \\\n                                (shoesize_boys+(-shoe_boys0))/shoesize_delta\nshoesize_girls(n) units=[1;inch] shoe_girls0 + n shoesize_delta ; \\\n                                (shoesize_girls+(-shoe_girls0))/shoesize_delta\n\n# European shoe size.  According to\n#      http://www.shoeline.com/footnotes/shoeterm.shtml\n# shoe sizes in Europe are measured with Paris points which simply measure\n# the length of the shoe.\n\neuropeshoesize          2|3 cm\n\n#\n# USA slang units\n#\n\nbuck                    US$\nfin                     5 US$\nsawbuck                 10 US$\nusgrand                 1000 US$\ngreenback               US$\nkey                     kg           # usually of marijuana, 60's\nlid                     1 oz         # Another 60's weed unit\nfootballfield           usfootballfield\nusfootballfield         100 yards\ncanadafootballfield     110 yards    # And 65 yards wide\nmarathon                26 miles + 385 yards\n\n#\n# British\n#\n\n# The length measure in the UK was defined by a bronze bar manufactured in\n# 1844.  Various conversions were sanctioned for convenience at different\n# times, which makes conversions before 1963 a confusing matter.  Apparently\n# previous conversions were never explicitly revoked.  Four different\n# conversion factors appear below.  Multiply them times an imperial length\n# units as desired.  The Weights and Measures Act of 1963 switched the UK away\n# from their bronze standard and onto a definition of the yard in terms of the\n# meter.  This happened after an international agreement in 1959 to align the\n# world's measurement systems.\n\nUK                      UKlength_SJJ\nUK-                     UK\nbritish-                UK\n\nUKlength_B            0.9143992 meter / yard  # Benoit found the yard to be\n                                              #   0.9143992 m at a weights and\n                                              #   measures conference around\n                                              #   1896.   Legally sanctioned\n                                              #   in 1898.\nUKlength_SJJ          0.91439841 meter / yard # In 1922, Seers, Jolly and\n                                              #   Johnson found the yard to be\n                                              #   0.91439841 meters.\n                                              #   Used starting in the 1930's.\nUKlength_K              meter / 39.37079 inch # In 1816 Kater found this ratio\n                                              #   for the meter and inch.  This\n                                              #   value was used as the legal\n                                              #   conversion ratio when the\n                                              #   metric system was legalized\n                                              #   for contract in 1864.\nUKlength_C            meter / 1.09362311 yard # In 1866 Clarke found the meter\n                                              #   to be 1.09362311 yards.  This\n                                              #   conversion was legalized\n                                              #   around 1878.\nbrnauticalmile          6080 ft               # Used until 1970 when the UK\nbrknot                  brnauticalmile / hr   #   switched to the international\nbrcable                 1|10 brnauticalmile   #   nautical mile.\nadmiraltymile           brnauticalmile\nadmiraltyknot           brknot\nadmiraltycable          brcable\nseamile                 6000 ft\nshackle                 15 fathoms            # Adopted 1949 by British navy\n\n# British Imperial weight is mostly the same as US weight.  A few extra\n# units are added here.\n\nclove                   7 lb\nstone                   14 lb\ntod                     28 lb\nbrquarterweight         1|4 brhundredweight\nbrhundredweight         8 stone\nlonghundredweight       brhundredweight\nlongton                 20 brhundredweight\nbrton                   longton\n\n# British Imperial volume measures\n\nbrminim                 1|60 brdram\nbrscruple               1|3 brdram\nfluidscruple            brscruple\nbrdram                  1|8 brfloz\nbrfluidounce            1|20 brpint\nbrfloz                  brfluidounce\nbrgill                  1|4 brpint\nbrpint                  1|2 brquart\nbrquart                 1|4 brgallon\nbrgallon                4.54609 l      # The British Imperial gallon was\n                                       # defined in 1824 to be the volume of\n                                       # water which weighed 10 pounds at 62\n                                       # deg F with a pressure of 30 inHg.\n                                       # It was also defined as 277.274 in^3,\n                                       # Which is slightly in error.  In\n                                       # 1963 it was defined to be the volume\n                                       # occupied by 10 pounds of distilled\n                                       # water of density 0.998859 g/ml weighed\n                                       # in air of density 0.001217 g/ml\n                                       # against weights of density 8.136 g/ml.\n                                       # This gives a value of approximately\n                                       # 4.5459645 liters, but the old liter\n                                       # was in force at this time.  In 1976\n                                       # the definition was changed to exactly\n                                       # 4.54609 liters using the new\n                                       # definition of the liter (1 dm^3).\nbrbarrel                36 brgallon    # Used for beer\nbrbushel                8 brgallon\nbrheapedbushel          1.278 brbushel\nbrquarter               8 brbushel\nbrchaldron              36 brbushel\n\n# Obscure British volume measures.  These units are generally traditional\n# measures whose definitions have fluctuated over the years.  Often they\n# depended on the quantity being measured.  They are given here in terms of\n# British Imperial measures.  For example, the puncheon may have historically\n# been defined relative to the wine gallon or beer gallon or ale gallon\n# rather than the British Imperial gallon.\n\nbag                     4 brbushel\nbucket                  4 brgallon\nkilderkin               2 brfirkin\nlast                    40 brbushel\nnoggin                  brgill\npottle                  0.5 brgallon\npin                     4.5 brgallon\npuncheon                72 brgallon\nseam                    8 brbushel\ncoomb                   4 brbushel\nboll                    6 brbushel\nfirlot                  1|4 boll\nbrfirkin                9 brgallon     # Used for ale and beer\ncran                    37.5 brgallon  # measures herring, about 750 fish\nbrwinehogshead          52.5 brgallon  # This value is approximately equal\nbrhogshead              brwinehogshead #   to the old wine hogshead of 63\n                                       #   wine gallons.  This adjustment\n                                       #   is listed in the OED and in\n                                       #   \"The Weights and Measures of\n                                       #   England\" by R. D. Connor\nbrbeerhogshead          54 brgallon\nbrbeerbutt              2 brbeerhogshead\nregisterton             100 ft^3  # Used for internal capacity of ships\nshippington             40 ft^3   # Used for ship's cargo freight or timber\nbrshippington           42 ft^3   #\nfreightton            shippington # Both register ton and shipping ton derive\n                                  # from the \"tun cask\" of wine.\ndisplacementton         35 ft^3   # Approximate volume of a longton weight of\n                                  # sea water.  Measures water displaced by\n                                  # ships.\nwaterton                224 brgallon\nstrike                  70.5 l    # 16th century unit, sometimes\n                                  #   defined as .5, 2, or 4 bushels\n                                  #   depending on the location.  It\n                                  #   probably doesn't make a lot of\n                                  #   sense to define in terms of imperial\n                                  #   bushels.  Zupko gives a value of\n                                  #   2 Winchester grain bushels or about\n                                  #   70.5 liters.\namber                   4 brbushel# Used for dry and liquid capacity [18]\n\n# British volume measures with \"imperial\"\n\nimperialminim           brminim\nimperialscruple         brscruple\nimperialdram            brdram\nimperialfluidounce      brfluidounce\nimperialfloz            brfloz\nimperialgill            brgill\nimperialpint            brpint\nimperialquart           brquart\nimperialgallon          brgallon\nimperialbarrel          brbarrel\nimperialbushel          brbushel\nimperialheapedbushel    brheapedbushel\nimperialquarter         brquarter\nimperialchaldron        brchaldron\nimperialwinehogshead    brwinehogshead\nimperialhogshead        brhogshead\nimperialbeerhogshead    brbeerhogshead\nimperialbeerbutt        brbeerbutt\nimperialfirkin          brfirkin\n\n# obscure British lengths\n\nbarleycorn              1|3 UKinch   # Given in Realm of Measure as the\n                                     # difference between successive shoe sizes\nnail                    1|16 UKyard  # Originally the width of the thumbnail,\n                                     #   or 1|16 ft.  This took on the general\n                                     #   meaning of 1|16 and settled on the\n                                     #   nail of a yard or 1|16 yards as its\n                                     #   final value.  [12]\npole                    16.5 UKft    # This was 15 Saxon feet, the Saxon\nrope                    20 UKft      #   foot (aka northern foot) being longer\nenglishell              45 UKinch\nflemishell              27 UKinch\nell                     englishell   # supposed to be measure from elbow to\n                                     #   fingertips\nspan                    9 UKinch     # supposed to be distance from thumb\n                                     #   to pinky with full hand extension\ngoad                    4.5 UKft     # used for cloth, possibly named after the\n                                     #   stick used for prodding animals.\n\n# misc obscure British units\n\nhide                    120 acre  # English unit of land area dating to the 7th\n                                  #   century, originally the amount of land\n                                  #   that a single plowman could cultivate,\n                                  #   which varied from 60-180 acres regionally.\n                                  #   Standardized at Normon conquest.\nvirgate                 1|4 hide\nnook                    1|2 virgate\nrood                    furlong rod  # Area of a strip a rod by a furlong\nenglishcarat            troyounce/151.5 # Originally intended to be 4 grain\n                                        #   but this value ended up being\n                                        #   used in the London diamond market\nmancus                  2 oz\nmast                    2.5 lb\nnailkeg                 100 lbs\nbasebox                 31360 in^2      # Used in metal plating\n\n# alternate spellings\n\nmetre                   meter\ngramme                  gram\nlitre                   liter\ndioptre                 diopter\naluminium               aluminum\nsulphur                 sulfur\n\n#\n# Units derived the human body (may not be very accurate)\n#\n\ngeometricpace           5 ft   # distance between points where the same\n                               # foot hits the ground\npace                    2.5 ft # distance between points where alternate\n                               # feet touch the ground\nUSmilitarypace          30 in  # United States official military pace\nUSdoubletimepace        36 in  # United States official doubletime pace\nfingerbreadth           7|8 in # The finger is defined as either the width\nfingerlength            4.5 in #   or length of the finger\nfinger                  fingerbreadth\npalmwidth               hand   # The palm is a unit defined as either the width\npalmlength              8 in   #   or the length of the hand\nhand                    4 inch # width of hand\nshaftment               6 inch # Distance from tip of outstretched thumb to the\n                               #   opposite side of the palm of the hand.  The\n                               #   ending -ment is from the old English word\n                               #   for hand. [18]\nsmoot              5 ft + 7 in # Created as part of an MIT fraternity prank.\n                               #   In 1958 Oliver Smoot was used to measure\n                               #   the length of the Harvard Bridge, which was\n                               #   marked off in smooth lengths.  These\n                               #   markings have been maintained on the bridge\n                               #   since then and repainted by subsequent\n                               #   incoming fraternity members.  During a\n                               #   bridge rennovation the new sidewalk was\n                               #   scored every smooth rather than at the\n                               #   customary 6 ft spacing.\n#\n# Cooking measures\n#\n\n# Common abbreviations\n\ntbl                     tablespoon\ntbsp                    tablespoon\ntblsp                   tablespoon\nTb                      tablespoon\ntsp                     teaspoon\nsaltspoon               1|4 tsp\n\n# US measures\n\nuscup                   8 usfloz\nustablespoon            1|16 uscup\nusteaspoon              1|3 ustablespoon\nustbl                   ustablespoon\nustbsp                  ustablespoon\nustblsp                 ustablespoon\nustsp                   usteaspoon\nmetriccup               250 ml\nstickbutter             1|4 lb            # Butter in the USA is sold in one\n                                          # pound packages that contain four\n                                          # individually wrapped pieces.  The\n                                          # pieces are marked into tablespoons,\n                                          # making it possible to measure out\n                                          # butter by volume by slicing the\n                                          # butter.\n\nlegalcup                240 ml            # The cup used on nutrition labeling\nlegaltablespoon         1|16 legalcup\nlegaltbsp               legaltablespoon\n\n# Scoop size.  Ice cream scoops in the US are marked with numbers\n# indicating the number of scoops requird to fill a US quart.\n\nscoop(n)  units=[1;cup] domain=[4,100] range=[0.04,1] \\\n           32 usfloz / n ; 32 usfloz / scoop\n\n\n# US can sizes.\n\nnumber1can              10 usfloz\nnumber2can              19 usfloz\nnumber2.5can            3.5 uscups\nnumber3can              4 uscups\nnumber5can              7 uscups\nnumber10can             105 usfloz\n\n# British measures\n\nbrcup                   1|2 brpint\nbrteacup                1|3 brpint\nbrtablespoon            15 ml             # Also 5|8 brfloz, approx 17.7 ml\nbrteaspoon              1|3 brtablespoon  # Also 1|4 brtablespoon\nbrdessertspoon          2 brteaspoon\ndessertspoon            brdessertspoon\ndsp                     dessertspoon\nbrtsp                   brteaspoon\nbrtbl                   brtablespoon\nbrtbsp                  brtablespoon\nbrtblsp                 brtablespoon\n\n# Australian\n\naustraliatablespoon     20 ml\naustbl                  australiatablespoon\naustbsp                 australiatablespoon\naustblsp                australiatablespoon\naustraliateaspoon       1|4 australiatablespoon\naustsp                  australiateaspoon\n\n# Italian\n\netto                    100 g          # Used for buying items like meat and\netti                    etto           #   cheese.\n\n# Chinese\n\ncatty                   0.5 kg\noldcatty                4|3 lbs        # Before metric conversion.\ntael                    1|16 oldcatty  # Should the tael be defined both ways?\nmace                    0.1 tael\noldpicul                100 oldcatty\npicul                   100 catty      # Chinese usage\n\n# Indian\n\nseer                    14400 grain    # British Colonial standard\nser                     seer\nmaund                   40 seer\npakistanseer            1 kg\npakistanmaund           40 pakistanseer\nchittak                 1|16 seer\ntola                    1|5 chittak\nollock                  1|4 liter      # Is this right?\n\n# Japanese\n\njapancup                200 ml\n\n# densities of cooking ingredients from The Cake Bible by Rose Levy Beranbaum\n# so you can convert '2 cups sugar' to grams, for example, or in the other\n# direction grams could be converted to 'cup flour_scooped'.\n\nbutter                  8 oz/uscup\nbutter_clarified        6.8 oz/uscup\ncocoa_butter            9 oz/uscup\nshortening              6.75 oz/uscup   # vegetable shortening\noil                     7.5 oz/uscup\ncakeflour_sifted        3.5 oz/uscup    # The density of flour depends on the\ncakeflour_spooned       4 oz/uscup      # measuring method.  \"Scooped\",  or\ncakeflour_scooped       4.5 oz/uscup    # \"dip and sweep\" refers to dipping a\nflour_sifted            4 oz/uscup      # measure into a bin, and then sweeping\nflour_spooned           4.25 oz/uscup   # the excess off the top.  \"Spooned\"\nflour_scooped           5 oz/uscup      # means to lightly spoon into a measure\nbreadflour_sifted       4.25 oz/uscup   # and then sweep the top.  Sifted means\nbreadflour_spooned      4.5 oz/uscup    # sifting the flour directly into a\nbreadflour_scooped      5.5 oz/uscup    # measure and then sweeping the top.\ncornstarch              120 grams/uscup\ndutchcocoa_sifted       75 g/uscup      # These are for Dutch processed cocoa\ndutchcocoa_spooned      92 g/uscup\ndutchcocoa_scooped      95 g/uscup\ncocoa_sifted            75 g/uscup      # These are for nonalkalized cocoa\ncocoa_spooned           82 g/uscup\ncocoa_scooped           95 g/uscup\nheavycream              232 g/uscup\nmilk                    242 g/uscup\nsourcream               242 g/uscup\nmolasses                11.25 oz/uscup\ncornsyrup               11.5 oz/uscup\nhoney                   11.75 oz/uscup\nsugar                   200 g/uscup\npowdered_sugar          4 oz/uscup\nbrownsugar_light        217 g/uscup     # packed\nbrownsugar_dark         239 g/uscup\n\nbaking_powder           4.6 grams / ustsp\nsalt                    6 g / ustsp\nkoshersalt              2.8 g / ustsp   # Diamond Crystal kosher salt\nkoshersalt_morton       4.8 g / ustsp   # Morton kosher salt\n                                        # Values are from the nutrition info\n                                        # on the packages\n\n\n# Egg weights and volumes for a USA large egg\n\negg                     50 grams        # without shell\neggwhite                30 grams\neggyolk                 18.6 grams\neggvolume               3 ustablespoons + 1|2 ustsp\neggwhitevolume          2 ustablespoons\neggyolkvolume           3.5 ustsp\n\n#\n# Density measures.  Density has traditionally been measured on a variety of\n# bizarre nonlinear scales.\n#\n\n# Density of a sugar syrup is frequently measured in candy making procedures.\n# In the USA the boiling point of the syrup is measured.  Some recipes instead\n# specify the density using degrees Baume.  Conversion between degrees Baume\n# and the boiling point measure has proved elusive.  This table appeared in one\n# text, and provides a fragmentary relationship to the concentration.\n#\n# temp(C)  conc (%)\n#   100      30\n#   101      40\n#   102      50\n#   103      60\n#   106      70\n#   112      80\n#   123      90\n#   140      95\n#   151      97\n#   160      98.2\n#   166      99.5\n#   171      99.6\n#\n# The best source identified to date came from \"Boiling point elevation of\n# technical sugarcane solutions and its use in automatic pan boiling\" by\n# Michael Saska.  International Sugar Journal, 2002, 104, 1247, pp 500-507.\n#\n# But I'm using equation (3) which is credited to Starzak and Peacock,\n# \"Water activity coefficient in aqueous solutions of sucrose--A comprehensive\n# data analyzis.  Zuckerindustrie, 122, 380-387.  (I couldn't find this\n# document.)\n#\n# Note that the range of validity is uncertain, but answers are in agreement\n# with the above table all the way to 99.6.\n#\n# The original equation has a parameter for the boiling point of water, which\n# of course varies with altitude.  It also includes various other model\n# parameters.  The input is the molar concentration of sucrose in the solution,\n# (moles sucrose) / (total moles).\n#\n# Bsp 3797.06 degC\n# Csp 226.28 degC\n# QQ -17638 J/mol\n# asp -1.0038\n# bsp -0.24653\n# tbw 100 degC     # boiling point of water\n# sugar_bpe_orig(x) ((1-QQ/R Bsp * x^2 (1+asp x + bsp x^2) (tbw + Csp) \\\n#           /(tbw+stdtemp)) /  (1+(tbw + Csp)/Bsp *ln(1-x))-1) * (tbw + Csp)\n#\n# To convert mass concentration (brix) to molar concentration\n#\n# sc(x)  (x / 342.3) / (( x/342.3) + (100-x)/18.02); \\\n#        100 sc 342.3|18.02 / (sc (342.3|18.02-1)+1)\n#\n# Here is a simplfied version of this equation where the temperature of boiling\n# water has been fixed at 100 degrees Celcius and the argument is now the\n# concentration (brix).\n#\n# sugar_bpe(x) ((1+ 0.48851085 * sc(x)^2 (1+ -1.0038 sc(x) + -0.24653 sc(x)^2)) \\\n#                   / (1+0.08592964 ln(1-sc(x)))-1) 326.28 K\n#\n#\n# The formula is not invertible, so to implement it in units we unfortunately\n# must turn it into a table.\n\n# This table gives the boiling point elevation as a function of the sugar syrup\n# concentration expressed as a percentage.\n\nsugar_conc_bpe[K] \\\n 0 0.0000   5 0.0788  10 0.1690  15 0.2729  20 0.3936  25 0.5351  \\\n30 0.7027  35 0.9036  40 1.1475  42 1.2599  44 1.3825  46 1.5165  \\\n48 1.6634  50 1.8249  52 2.0031  54 2.2005  56 2.4200  58 2.6651  \\\n60 2.9400  61 3.0902  62 3.2499  63 3.4198  64 3.6010  65 3.7944  \\\n66 4.0012  67 4.2227  68 4.4603  69 4.7156  70 4.9905  71 5.2870  \\\n72 5.6075  73 5.9546  74 6.3316  75 6.7417  76 7.1892  77 7.6786  \\\n78.0  8.2155  79.0  8.8061  80.0  9.4578  80.5  9.8092  81.0 10.1793  \\\n81.5 10.5693  82.0 10.9807  82.5 11.4152  83.0 11.8743  83.5 12.3601  \\\n84.0 12.8744  84.5 13.4197  85.0 13.9982  85.5 14.6128  86.0 15.2663  \\\n86.5 15.9620  87.0 16.7033  87.5 17.4943  88.0 18.3391  88.5 19.2424  \\\n89.0 20.2092  89.5 21.2452  90.0 22.3564  90.5 23.5493  91.0 24.8309  \\\n91.5 26.2086  92.0 27.6903  92.5 29.2839  93.0 30.9972  93.5 32.8374  \\\n94.0 34.8104  94.5 36.9195  95.0 39.1636  95.5 41.5348  96.0 44.0142  \\\n96.5 46.5668  97.0 49.1350  97.5 51.6347  98.0 53.9681  98.1 54.4091  \\\n98.2 54.8423  98.3 55.2692  98.4 55.6928  98.5 56.1174  98.6 56.5497  \\\n98.7 56.9999  98.8 57.4828  98.9 58.0206  99.0 58.6455  99.1 59.4062  \\\n99.2 60.3763  99.3 61.6706  99.4 63.4751  99.5 66.1062  99.6 70.1448  \\\n99.7 76.7867\n\n# Using the brix table we can use this to produce a mapping from boiling point\n# to density which makes all of the units interconvertible.  Because the brix\n# table stops at 95 this approach works up to a boiling point elevation of 39 K\n# or a boiling point of 139 C / 282 F, which is the \"soft crack\" stage in candy\n# making.  The \"hard crack\" stage continues up to 310 F.\n\n# Boiling point elevation\nsugar_bpe(T) units=[K;g/cm^3] domain=[0,39.1636] range=[0.99717,1.5144619] \\\n               brix(~sugar_conc_bpe(T)); sugar_conc_bpe(~brix(sugar_bpe))\n# Absolute boiling point (produces an absolute temperature)\nsugar_bp(T) units=[K;g/cm^3] domain=[373.15,412.3136] \\\n                                         range=[0.99717,1.5144619] \\\n                        brix(~sugar_conc_bpe(T-tempC(100))) ;\\\n                        sugar_conc_bpe(~brix(sugar_bp))+tempC(100)\n\n# In practice dealing with the absolute temperature is annoying because it is\n# not possible to convert to a nested function, so you're stuck retyping the\n# absolute temperature in Kelvins to convert to celsius or Fahrenheit.  To\n# prevent this we supply definitions that build in the temperature conversion\n# and produce results in the Fahrenheit and Celcius scales.  So using these\n# measures, to convert 46 degrees Baume to a Fahrenheit boiling point:\n#\n#      You have: baume(45)\n#      You want: sugar_bpF\n#              239.05647\n#\nsugar_bpF(T) units=[1;g/cm^3] domain=[212,282.49448] range=[0.99717,1.5144619]\\\n                        brix(~sugar_conc_bpe(tempF(T)+-tempC(100))) ;\\\n                        ~tempF(sugar_conc_bpe(~brix(sugar_bpF))+tempC(100))\nsugar_bpC(T) units=[1;g/cm^3] domain=[100,139.1636] range=[0.99717,1.5144619]\\\n                        brix(~sugar_conc_bpe(tempC(T)+-tempC(100))) ;\\\n                        ~tempC(sugar_conc_bpe(~brix(sugar_bpC))+tempC(100))\n\n# Degrees Baume is used in European recipes to specify the density of a sugar\n# syrup.  An entirely different definition is used for densities below\n# 1 g/cm^3.  An arbitrary constant appears in the definition.  This value is\n# equal to 145 in the US, but was according to [], the old scale used in\n# Holland had a value of 144, and the new scale or Gerlach scale used 146.78.\n\nbaumeconst 145      # US value\nbaume(d) units=[1;g/cm^3] domain=[0,145) range=[1,) \\\n                          (baumeconst/(baumeconst+-d)) g/cm^3 ; \\\n                          (baume+((-g)/cm^3)) baumeconst / baume\n\n# It's not clear if this value was ever used with negative degrees.\ntwaddell(x) units=[1;g/cm^3] domain=[-200,) range=[0,) \\\n                             (1 + 0.005 x) g / cm^3 ; \\\n                             200 (twaddell / (g/cm^3) +- 1)\n\n# The degree quevenne is a unit for measuring the density of milk.\n# Similarly it's unclear if negative values were allowed here.\nquevenne(x) units=[1;g/cm^3] domain=[-1000,) range=[0,) \\\n                             (1 + 0.001 x) g / cm^3 ; \\\n                             1000 (quevenne / (g/cm^3) +- 1)\n\n# Degrees brix measures sugar concentration by weigh as a percentage, so a\n# solution that is 3 degrees brix is 3% sugar by weight.  This unit was named\n# after Adolf Brix who invented a hydrometer that read this percentage\n# directly.  This data is from Table 114 of NIST Circular 440, \"Polarimetry,\n# Saccharimetry and the Sugars\".  It gives apparent specific gravity at 20\n# degrees Celsius of various sugar concentrations.  As rendered below this\n# data is converted to apparent density at 20 degrees Celsius using the\n# density figure for water given in the same NIST reference.  They use the\n# word \"apparent\" to refer to measurements being made in air with brass\n# weights rather than vacuum.\n\nbrix[0.99717g/cm^3]\\\n    0 1.00000  1 1.00390  2 1.00780  3 1.01173  4 1.01569  5 1.01968 \\\n    6 1.02369  7 1.02773  8 1.03180  9 1.03590 10 1.04003 11 1.04418 \\\n   12 1.04837 13 1.05259 14 1.05683 15 1.06111 16 1.06542 17 1.06976 \\\n   18 1.07413 19 1.07853 20 1.08297 21 1.08744 22 1.09194 23 1.09647 \\\n   24 1.10104 25 1.10564 26 1.11027 27 1.11493 28 1.11963 29 1.12436 \\\n   30 1.12913 31 1.13394 32 1.13877 33 1.14364 34 1.14855 35 1.15350 \\\n   36 1.15847 37 1.16349 38 1.16853 39 1.17362 40 1.17874 41 1.18390 \\\n   42 1.18910 43 1.19434 44 1.19961 45 1.20491 46 1.21026 47 1.21564 \\\n   48 1.22106 49 1.22652 50 1.23202 51 1.23756 52 1.24313 53 1.24874 \\\n   54 1.25439 55 1.26007 56 1.26580 57 1.27156 58 1.27736 59 1.28320 \\\n   60 1.28909 61 1.29498 62 1.30093 63 1.30694 64 1.31297 65 1.31905 \\\n   66 1.32516 67 1.33129 68 1.33748 69 1.34371 70 1.34997 71 1.35627 \\\n   72 1.36261 73 1.36900 74 1.37541 75 1.38187 76 1.38835 77 1.39489 \\\n   78 1.40146 79 1.40806 80 1.41471 81 1.42138 82 1.42810 83 1.43486 \\\n   84 1.44165 85 1.44848 86 1.45535 87 1.46225 88 1.46919 89 1.47616 \\\n   90 1.48317 91 1.49022 92 1.49730 93 1.50442 94 1.51157 95 1.51876\n\n# Density measure invented by the American Petroleum Institute.  Lighter\n# petroleum products are more valuable, and they get a higher API degree.\n#\n# The intervals of range and domain should be open rather than closed.\n#\napidegree(x) units=[1;g/cm^3] domain=[-131.5,) range=[0,) \\\n                              141.5 g/cm^3 / (x+131.5) ; \\\n                              141.5 (g/cm^3) / apidegree + (-131.5)\n\n#\n# Units derived from imperial system\n#\n\nouncedal                oz ft / s^2     # force which accelerates an ounce\n                                        #    at 1 ft/s^2\npoundal                 lb ft / s^2     # same thing for a pound\ntondal                  longton ft / s^2    # and for a ton\npdl                     poundal\nosi                     ounce force / inch^2   # used in aviation\npsi                     pound force / inch^2\npsia                    psi             # absolute pressure\n\t\t\t\t\t#   Note that gauge pressure can be given\n\t\t\t\t\t#   using the gaugepressure() and\n\t\t\t\t\t#   psig() nonlinear unit definitions\ntsi                     ton force / inch^2\nreyn                    psi sec\nslug                    lbf s^2 / ft\nslugf                   slug force\nslinch                  lbf s^2 / inch  # Mass unit derived from inch second\nslinchf                 slinch force    #   pound-force system.  Used in space\n                                        #   applications where in/sec^2 was a\n                                        #   natural acceleration measure.\ngeepound                slug\nlbf                     lb force\ntonf                    ton force\nlbm                     lb\nkip                     1000 lbf     # from kilopound\nksi                     kip / in^2\nmil                     0.001 inch\nthou                    0.001 inch\ntenth                   0.0001 inch  # one tenth of one thousandth of an inch\nmillionth               1e-6 inch    # one millionth of an inch\ncircularinch            1|4 pi in^2  # area of a one-inch diameter circle\ncircleinch              circularinch #    A circle with diameter d inches has\n                                     #    an area of d^2 circularinches\ncylinderinch         circleinch inch # Cylinder h inch tall, d inches diameter\n                                     #    has volume d^2 h cylinder inches\ncircularmil             1|4 pi mil^2 # area of one-mil diameter circle\ncmil                    circularmil\n\ncental                  100 pound\ncentner                 cental\ncaliber                 0.01 inch    # for measuring bullets\nduty                    ft lbf\ncelo                    ft / s^2\njerk                    ft / s^3\naustraliapoint          0.01 inch    # The \"point\" is used to measure rainfall\n                                     #   in Australia\nsabin                   ft^2         # Measure of sound absorption equal to the\n                                     #   absorbing power of one square foot of\n                                     #   a perfectly absorbing material.  The\n                                     #   sound absorptivity of an object is the\n                                     #   area times a dimensionless\n                                     #   absorptivity coefficient.\nstandardgauge          4 ft + 8.5 in # Standard width between railroad track\nflag                   5 ft^2        # Construction term referring to sidewalk.\nrollwallpaper          30 ft^2       # Area of roll of wall paper\nfillpower              in^3 / ounce  # Density of down at standard pressure.\n                                     #   The best down has 750-800 fillpower.\npinlength              1|16 inch     # A #17 pin is 17/16 in long in the USA.\nbuttonline             1|40 inch     # The line was used in 19th century USA\n                                     #   to measure width of buttons.\nbeespace               1|4 inch      # Bees will fill any space that is smaller\n                                     #   than the bee space and leave open\n                                     #   spaces that are larger.  The size of\n                                     #   the space varies with species.\ndiamond                8|5 ft        # Marking on US tape measures that is\n                                     #   useful to carpenters who wish to place\n                                     #   five studs in an 8 ft distance.  Note\n                                     #   that the numbers appear in red every\n                                     #   16 inches as well, giving six\n                                     #   divisions in 8 feet.\nretmaunit              1.75 in       # Height of rack mountable equipment.\nU                      retmaunit     #   Equipment should be 1|32 inch narrower\nRU                     U             #   than its U measurement indicates to\n                                     #   allow for clearance, so 4U=(6+31|32)in\n                                     #   RETMA stands for the former name of\n                                     #   the standardizing organization, Radio\n                                     #   Electronics Television Manufacturers\n                                     #   Association.  This organization is now\n                                     #   called the Electronic Industries\n                                     #   Alliance (EIA) and the rack standard\n                                     #   is specified in EIA RS-310-D.\ncount                  per pound     # For measuring the size of shrimp\n\n#\n# Other units of work, energy, power, etc\n#\n\nENERGY                  joule\nWORK                    joule\n\n# Calories: energy to raise a gram of water one degree celsius\n\ncal_IT                  4.1868 J     # International Table calorie\ncal_th                  4.184 J      # Thermochemical calorie\ncal_fifteen             4.18580 J    # Energy to go from 14.5 to 15.5 degC\ncal_twenty              4.18190 J    # Energy to go from 19.5 to 20.5 degC\ncal_mean                4.19002 J    # 1|100 energy to go from 0 to 100 degC\ncalorie                 cal_IT\ncal                     calorie\ncalorie_IT              cal_IT\nthermcalorie            cal_th\ncalorie_th              thermcalorie\nCalorie                 kilocalorie  # the food Calorie\nthermie              1e6 cal_fifteen # Heat required to raise the\n                                     # temperature of a tonne of\n                                     # water from 14.5 to 15.5 degC.\n\n# btu definitions: energy to raise a pound of water 1 degF\n\nbtu                     cal lb degF / gram K # international table BTU\nbritishthermalunit      btu\nbtu_IT                  btu\nbtu_th                  cal_th lb degF / gram K\nbtu_mean                cal_mean lb degF / gram K\nquad                    quadrillion btu\n\nECtherm                 1.05506e8 J    # Exact definition, close to 1e5 btu\nUStherm                 1.054804e8 J   # Exact definition\ntherm                   UStherm\n\n# Water latent heat (from Wikipedia)\n\nwater_fusion_heat       79.8 calorie/g\nwater_vaporization_heat 1160 J/g\n\n# Specific heat capacities of various substances\n\nspecificheat_water      calorie / g K\nwater_specificheat      specificheat_water\n     # Values from www.engineeringtoolbox.com/specific-heat-metals-d_152.html\nspecificheat_aluminum   0.91 J/g K\nspecificheat_antimony   0.21 J/g K\nspecificheat_barium     0.20 J/g K\nspecificheat_beryllium  1.83 J/g K\nspecificheat_bismuth    0.13 J/g K\nspecificheat_cadmium    0.23 J/g K\nspecificheat_cesium     0.24 J/g K\nspecificheat_chromium   0.46 J/g K\nspecificheat_cobalt     0.42 J/g K\nspecificheat_copper     0.39 J/g K\nspecificheat_gallium    0.37 J/g K\nspecificheat_germanium  0.32 J/g K\nspecificheat_gold       0.13 J/g K\nspecificheat_hafnium    0.14 J/g K\nspecificheat_indium     0.24 J/g K\nspecificheat_iridium    0.13 J/g K\nspecificheat_iron       0.45 J/g K\nspecificheat_lanthanum  0.195 J/g K\nspecificheat_lead       0.13 J/g K\nspecificheat_lithium    3.57 J/g K\nspecificheat_lutetium   0.15 J/g K\nspecificheat_magnesium  1.05 J/g K\nspecificheat_manganese  0.48 J/g K\nspecificheat_mercury    0.14 J/g K\nspecificheat_molybdenum 0.25 J/g K\nspecificheat_nickel     0.44 J/g K\nspecificheat_osmium     0.13 J/g K\nspecificheat_palladium  0.24 J/g K\nspecificheat_platinum   0.13 J/g K\nspecificheat_plutonum   0.13 J/g K\nspecificheat_potassium  0.75 J/g K\nspecificheat_rhenium    0.14 J/g K\nspecificheat_rhodium    0.24 J/g K\nspecificheat_rubidium   0.36 J/g K\nspecificheat_ruthenium  0.24 J/g K\nspecificheat_scandium   0.57  J/g K\nspecificheat_selenium   0.32 J/g K\nspecificheat_silicon    0.71 J/g K\nspecificheat_silver     0.23 J/g K\nspecificheat_sodium     1.21 J/g K\nspecificheat_strontium  0.30 J/g K\nspecificheat_tantalum   0.14 J/g K\nspecificheat_thallium   0.13 J/g K\nspecificheat_thorium    0.13 J/g K\nspecificheat_tin        0.21 J/g K\nspecificheat_titanium   0.54 J/g K\nspecificheat_tungsten   0.13 J/g K\nspecificheat_uranium    0.12 J/g K\nspecificheat_vanadium   0.39 J/g K\nspecificheat_yttrium    0.30 J/g K\nspecificheat_zinc       0.39 J/g K\nspecificheat_zirconium  0.27 J/g K\nspecificheat_ethanol    2.3  J/g K\nspecificheat_ammonia    4.6 J/g K\nspecificheat_freon      0.91 J/g K   # R-12 at 0 degrees Fahrenheit\nspecificheat_gasoline   2.22 J/g K\nspecificheat_iodine     2.15 J/g K\nspecificheat_oliveoil   1.97 J/g K\n\n#  en.wikipedia.org/wiki/Heat_capacity#Table_of_specific_heat_capacities\nspecificheat_hydrogen   14.3 J/g K\nspecificheat_helium     5.1932 J/g K\nspecificheat_argon      0.5203 J/g K\nspecificheat_tissue     3.5 J/g K\nspecificheat_diamond    0.5091 J/g K\nspecificheat_granite    0.79 J/g K\nspecificheat_graphite   0.71 J/g K\nspecificheat_ice        2.11 J/g K\nspecificheat_asphalt    0.92 J/g K\nspecificheat_brick      0.84 J/g K\nspecificheat_concrete   0.88 J/g K\nspecificheat_glass_silica 0.84 J/g K\nspecificheat_glass_flint  0.503 J/g K\nspecificheat_glass_pyrex  0.753 J/g K\nspecificheat_gypsum     1.09 J/g K\nspecificheat_marble     0.88 J/g K\nspecificheat_sand       0.835 J/g K\nspecificheat_soil       0.835 J/g K\nspecificheat_wood       1.7 J/g K\n\nspecificheat_sucrose    1.244 J/g K #www.sugartech.co.za/heatcapacity/index.php\n\n\n# Energy densities of various fuels\n#\n# Most of these fuels have varying compositions or qualities and hence their\n# actual energy densities vary.  These numbers are hence only approximate.\n#\n# E1. http://bioenergy.ornl.gov/papers/misc/energy_conv.html\n# E2. http://www.aps.org/policy/reports/popa-reports/energy/units.cfm\n# E3. http://www.ior.com.au/ecflist.html\n\ntonoil                  1e10 cal_IT    # Ton oil equivalent.  A conventional\n                                       # value for the energy released by\ntoe                     tonoil         # burning one metric ton of oil. [18,E2]\n                                       # Note that energy per mass of petroleum\n                                       # products is fairly constant.\n                                       # Variations in volumetric energy\n                                       # density result from variations in the\n                                       # density (kg/m^3) of different fuels.\n                                       # This definition is given by the\n                                       # IEA/OECD.\ntoncoal                 7e9 cal_IT     # Energy in metric ton coal from [18].\n                                       # This is a nominal value which\n                                       # is close to the heat content\n                                       # of coal used in the 1950's\nbarreloil               5.8 Mbtu       # Conventional value for barrel of crude\n                                       # oil [E2].  Actual range is 5.6 - 6.3.\nnaturalgas_HHV          1027 btu/ft3   # Energy content of natural gas.  HHV\nnaturalgas_LHV          930 btu/ft3    # is for Higher Heating Value and\nnaturalgas              naturalgas_HHV # includes energy from condensation\n                                       # combustion products.  LHV is for Lower\n                                       # Heating Value and excludes these.\n                                       # American publications typically report\n                                       # HHV whereas European ones report LHV.\ncharcoal                30 GJ/tonne\nwoodenergy_dry          20 GJ/tonne    # HHV, a cord weights about a tonne\nwoodenergy_airdry       15 GJ/tonne    # 20% moisture content\ncoal_bituminous         27 GJ / tonne\ncoal_lignite            15 GJ / tonne\ncoal_US                 22 GJ / uston  # Average for US coal (short ton), 1995\nethanol_HHV         84000 btu/usgallon\nethanol_LHV         75700 btu/usgallon\ndiesel             130500 btu/usgallon\ngasoline_LHV       115000 btu/usgallon\ngasoline_HHV       125000 btu/usgallon\ngasoline                gasoline_HHV\nheating                 37.3 MJ/liter\nfueloil                 39.7 MJ/liter  # low sulphur\npropane                 93.3 MJ/m^3\nbutane                  124 MJ/m^3\n\n# These values give total energy from uranium fission.  Actual efficiency\n# of nuclear power plants is around 30%-40%.  Note also that some reactors\n# use enriched uranium around 3% U-235.  Uranium during processing or use\n# may be in a compound of uranium oxide or uranium hexafluoride, in which\n# case the energy density would be lower depending on how much uranium is\n# in the compound.\n\nuranium_pure     200 MeV avogadro / (235.0439299 g/mol)  # Pure U-235\nuranium_natural         0.7% uranium_pure        # Natural uranium: 0.7% U-235\n\n# Celsius heat unit: energy to raise a pound of water 1 degC\n\ncelsiusheatunit         cal lb degC / gram K\nchu                     celsiusheatunit\n\nPOWER                   watt\n\n# \"Apparent\" average power in an AC circuit, the product of rms voltage\n# and rms current, equal to the true power in watts when voltage and\n# current are in phase.  In a DC circuit, always equal to the true power.\n\nVA                      volt ampere\n\nkWh                     kilowatt hour\n\n# The horsepower is supposedly the power of one horse pulling.   Obviously\n# different people had different horses.\n\nhorsepower              550 foot pound force / sec    # Invented by James Watt\nmechanicalhorsepower    horsepower\nhp                      horsepower\nmetrichorsepower        75 kilogram force meter / sec # PS=Pferdestaerke in\nelectrichorsepower      746 W                         # Germany\nboilerhorsepower        9809.50 W\nwaterhorsepower         746.043 W\nbrhorsepower            745.70 W\ndonkeypower             250 W\nchevalvapeur            metrichorsepower\n\n#\n# Heat Transfer\n#\n# Thermal conductivity, K, measures the rate of heat transfer across\n# a material.  The heat transfered is\n#     Q = K dT A t / L\n# where dT is the temperature difference across the material, A is the\n# cross sectional area, t is the time, and L is the length (thickness).\n# Thermal conductivity is a material property.\n\nTHERMAL_CONDUCTIVITY    POWER / AREA (TEMPERATURE_DIFFERENCE/LENGTH)\nTHERMAL_RESISTIVITY     1/THERMAL_CONDUCTIVITY\n\n# Thermal conductance is the rate at which heat flows across a given\n# object, so the area and thickness have been fixed.  It depends on\n# the size of the object and is hence not a material property.\n\nTHERMAL_CONDUCTANCE     POWER / TEMPERATURE_DIFFERENCE\nTHERMAL_RESISTANCE      1/THERMAL_CONDUCTANCE\n\n# Thermal admittance is the rate of heat flow per area across an\n# object whose thickness has been fixed.  Its reciprocal, thermal\n# insulation, is used to for measuring the heat transfer per area\n# of sheets of insulation or cloth that are of specified thickness.\n\nTHERMAL_ADMITTANCE      THERMAL_CONDUCTIVITY / LENGTH\nTHERMAL_INSULANCE       THERMAL_RESISTIVITY LENGTH\nTHERMAL_INSULATION      THERMAL_RESISTIVITY LENGTH\n\nRvalue                  degF ft^2 hr / btu\nUvalue                  1/Rvalue\neuropeanUvalue          watt / m^2 K\nRSI                     degC m^2 / W\nclo                     0.155 degC m^2 / W # Supposed to be the insulance\n                                           # required to keep a resting person\n                                           # comfortable indoors.  The value\n                                           # given is from NIST and the CRC,\n                                           # but [5] gives a slightly different\n                                           # value of 0.875 ft^2 degF hr / btu.\ntog                     0.1 degC m^2 / W   # Also used for clothing.\n\n\n# The bel was defined by engineers of Bell Laboratories to describe the\n# reduction in audio level over a length of one mile. It was originally\n# called the transmission unit (TU) but was renamed around 1923 to honor\n# Alexander Graham Bell. The bel proved inconveniently large so the decibel\n# has become more common.  The decibel is dimensionless since it reports a\n# ratio, but it is used in various contexts to report a signal's power\n# relative to some reference level.\n\nbel(x)     units=[1;1] range=(0,) 10^(x);    log(bel)    # Basic bel definition\ndecibel(x) units=[1;1] range=(0,) 10^(x/10); 10 log(decibel) # Basic decibel\ndB()       decibel                                           # Abbreviation\ndBW(x)     units=[1;W] range=(0,) dB(x) W ;  ~dB(dBW/W)      # Reference = 1 W\ndBk(x)     units=[1;W] range=(0,) dB(x) kW ; ~dB(dBk/kW)     # Reference = 1 kW\ndBf(x)     units=[1;W] range=(0,) dB(x) fW ; ~dB(dBf/fW)     # Reference = 1 fW\ndBm(x)     units=[1;W] range=(0,) dB(x) mW ; ~dB(dBm/mW)     # Reference = 1 mW\ndBmW(x)    units=[1;W] range=(0,) dBm(x) ;   ~dBm(dBmW)      # Reference = 1 mW\ndBJ(x)     units=[1;J] range=(0,) dB(x) J; ~dB(dBJ/J)        # Energy relative\n                                     # to 1 joule.  Used for power spectral\n                                     # density since W/Hz = J\n\n# When used to measure amplitude, voltage, or current the signal is squared\n# because power is proportional to the square of these measures.  The root\n# mean square (RMS) voltage is typically used with these units.\n\ndBV(x)  units=[1;V] range=(0,) dB(0.5 x) V;~dB(dBV^2 / V^2) # Reference = 1 V\ndBmV(x) units=[1;V] range=(0,) dB(0.5 x) mV;~dB(dBmV^2/mV^2)# Reference = 1 mV\ndBuV(x) units=[1;V] range=(0,) dB(0.5 x) microV ; ~dB(dBuV^2 / microV^2)\n                                   # Reference = 1 microvolt\n\n# Referenced to the voltage that causes 1 mW dissipation in a 600 ohm load.\n# Originally defined as dBv but changed to prevent confusion with dBV.\n# The \"u\" is for unloaded.\ndBu(x) units=[1;V] range=(0,) dB(0.5 x) sqrt(mW 600 ohm) ; \\\n                              ~dB(dBu^2 / mW 600 ohm)\ndBv(x) units=[1;V] range=(0,) dBu(x) ; ~dBu(dBv)  # Synonym for dBu\n\n\n# Measurements for sound in air, referenced to the threshold of human hearing\n# Note that sound in other media typically uses 1 micropascal as a reference\n# for sound pressure.  Units dBA, dBB, dBC, refer to different frequency\n# weightings meant to approximate the human ear's response.\n\ndBSPL(x) units=[1;Pa] range=(0,) dB(0.5 x) 20 microPa ;  \\\n                                 ~dB(dBSPL^2 / (20 microPa)^2) # pressure\ndBSIL(x) units=[1;W/m^2] range=(0,) dB(x) 1e-12 W/m^2; \\\n                                    ~dB(dBSIL / (1e-12 W/m^2)) # intensity\ndBSWL(x) units=[1;W] range=(0,) dB(x) 1e-12 W; ~dB(dBSWL/1e-12 W)\n\n\n# Misc other measures\n\nENTROPY                 ENERGY / TEMPERATURE\nclausius                1e3 cal/K       # A unit of physical entropy\nlangley                 thermcalorie/cm^2    # Used in radiation theory\nponcelet                100 kg force m / s\ntonrefrigeration        uston 144 btu / lb day # One ton refrigeration is\n                                        # the rate of heat extraction required\n                                        # turn one ton of water to ice in\n                                        # a day.  Ice is defined to have a\n                                        # latent heat of 144 btu/lb.\ntonref                  tonrefrigeration\nrefrigeration           tonref / ton\nfrigorie                1000 cal_fifteen# Used in refrigeration engineering.\ntnt                     1e9 cal_th / ton# So you can write tons tnt. This\n                                        # is a defined, not measured, value.\nairwatt                 8.5 (ft^3/min) inH2O # Measure of vacuum power as\n                                             # pressure times air flow.\n\n#\n# Permeability: The permeability or permeance, n, of a substance determines\n# how fast vapor flows through the substance.  The formula W = n A dP\n# holds where W is the rate of flow (in mass/time), n is the permeability,\n# A is the area of the flow path, and dP is the vapor pressure difference.\n#\n\nperm_0C                 grain / hr ft^2 inHg\nperm_zero               perm_0C\nperm_0                  perm_0C\nperm                    perm_0C\nperm_23C                grain / hr ft^2 in Hg23C\nperm_twentythree        perm_23C\n\n#\n# Counting measures\n#\n\npair                    2\nbrace                   2\nnest                    3     # often used for items like bowls that\n                              #   nest together\nhattrick                3     # Used in sports, especially cricket and ice\n                              #   hockey to report the number of goals.\ndicker                  10\ndozen                   12\nbakersdozen             13\nscore                   20\nflock                   40\ntimer                   40\nshock                   60\ntoncount                100   # Used in sports in the UK\nlonghundred             120   # From a germanic counting system\ngross                   144\ngreatgross              12 gross\ntithe                   1|10  # From Anglo-Saxon word for tenth\n\n# Paper counting measure\n\nshortquire              24\nquire                   25\nshortream               480\nream                    500\nperfectream             516\nbundle                  2 reams\nbale                    5 bundles\n\n#\n# Paper measures\n#\n\n# USA paper sizes\n\nlettersize              8.5 inch 11 inch\nlegalsize               8.5 inch 14 inch\nledgersize              11 inch 17 inch\nexecutivesize           7.25 inch 10.5 inch\nApaper                  8.5 inch 11 inch\nBpaper                  11 inch 17 inch\nCpaper                  17 inch 22 inch\nDpaper                  22 inch 34 inch\nEpaper                  34 inch 44 inch\n\n# Correspondence envelope sizes.  #10 is the standard business\n# envelope in the USA. \n\nenvelope6_25size        3.5 inch 6 inch\nenvelope6_75size        3.625 inch 6.5 inch\nenvelope7size           3.75 inch 6.75 inch\nenvelope7_75size        3.875 inch 7.5 inch\nenvelope8_625size       3.625 inch 8.625 inch\nenvelope9size           3.875 inch 8.875 inch\nenvelope10size          4.125 inch 9.5 inch\nenvelope11size          4.5 inch 10.375 inch\nenvelope12size          4.75 inch 11 inch\nenvelope14size          5 inch 11.5 inch\nenvelope16size          6 inch 12 inch\n\n# Announcement envelope sizes (no relation to metric paper sizes like A4)\n\nenvelopeA1size          3.625 inch 5.125 inch  # same as 4bar\nenvelopeA2size          4.375 inch 5.75 inch\nenvelopeA6size          4.75 inch 6.5 inch\nenvelopeA7size          5.25 inch 7.25 inch\nenvelopeA8size          5.5 inch 8.125 inch   \nenvelopeA9size          5.75 inch 8.75 inch\nenvelopeA10size         6 inch 9.5 inch\n\n# Baronial envelopes\n\nenvelope4bar            3.625 inch 5.125 inch  # same as A1\nenvelope5_5bar          4.375 inch 5.75 inch\nenvelope6bar            4.75 inch 6.5 inch\n\n# Coin envelopes\n\nenvelope1baby           2.25 inch 3.5 inch     # same as #1 coin\nenvelope00coin          1.6875 inch 2.75 inch\nenvelope1coin           2.25 inch 3.5 inch\nenvelope3coin           2.5 inch 4.25 inch\nenvelope4coin           3 inch 4.5 inch\nenvelope4_5coin         3 inch 4.875 inch\nenvelope5coin           2.875 inch 5.25 inch\nenvelope5_5coin         3.125 inch 5.5 inch\nenvelope6coin           3.375 inch 6 inch\nenvelope7coin           3.5 inch 6.5 inch\n\n# The metric paper sizes are defined so that if a sheet is cut in half\n# along the short direction, the result is two sheets which are\n# similar to the original sheet.  This means that for any metric size,\n# the long side is close to sqrt(2) times the length of the short\n# side.  Each series of sizes is generated by repeated cuts in half,\n# with the values rounded down to the nearest millimeter.\n\nA0paper                 841 mm 1189 mm   # The basic size in the A series\nA1paper                 594 mm  841 mm   # is defined to have an area of\nA2paper                 420 mm  594 mm   # one square meter.\nA3paper                 297 mm  420 mm\nA4paper                 210 mm  297 mm\nA5paper                 148 mm  210 mm\nA6paper                 105 mm  148 mm\nA7paper                  74 mm  105 mm\nA8paper                  52 mm   74 mm\nA9paper                  37 mm   52 mm\nA10paper                 26 mm   37 mm\n\nB0paper                1000 mm 1414 mm   # The basic B size has an area\nB1paper                 707 mm 1000 mm   # of sqrt(2) square meters.\nB2paper                 500 mm  707 mm\nB3paper                 353 mm  500 mm\nB4paper                 250 mm  353 mm\nB5paper                 176 mm  250 mm\nB6paper                 125 mm  176 mm\nB7paper                  88 mm  125 mm\nB8paper                  62 mm   88 mm\nB9paper                  44 mm   62 mm\nB10paper                 31 mm   44 mm\n\nC0paper                 917 mm 1297 mm   # The basic C size has an area\nC1paper                 648 mm  917 mm   # of sqrt(sqrt(2)) square meters.\nC2paper                 458 mm  648 mm\nC3paper                 324 mm  458 mm   # Intended for envelope sizes\nC4paper                 229 mm  324 mm\nC5paper                 162 mm  229 mm\nC6paper                 114 mm  162 mm\nC7paper                  81 mm  114 mm\nC8paper                  57 mm   81 mm\nC9paper                  40 mm   57 mm\nC10paper                 28 mm   40 mm\n\n# gsm (Grams per Square Meter), a sane, metric paper weight measure\n\ngsm                     grams / meter^2\n\n# In the USA, a collection of crazy historical paper measures are used.  Paper\n# is measured as a weight of a ream of that particular type of paper.  This is\n# sometimes called the \"substance\" or \"basis\" (as in \"substance 20\" paper).\n# The standard sheet size or \"basis size\" varies depending on the type of\n# paper.  As a result, 20 pound bond paper and 50 pound text paper are actually\n# about the same weight.  The different sheet sizes were historically the most\n# convenient for printing or folding in the different applications.  These\n# different basis weights are standards maintained by American Society for\n# Testing Materials (ASTM) and the American Forest and Paper Association\n# (AF&PA).\n\npoundbookpaper          lb / 25 inch 38 inch ream\nlbbook                  poundbookpaper\npoundtextpaper          poundbookpaper\nlbtext                  poundtextpaper\npoundoffsetpaper        poundbookpaper    # For offset printing\nlboffset                poundoffsetpaper\npoundbiblepaper         poundbookpaper    # Designed to be lightweight, thin,\nlbbible                 poundbiblepaper   # strong and opaque.\npoundtagpaper           lb / 24 inch 36 inch ream\nlbtag                   poundtagpaper\npoundbagpaper           poundtagpaper\nlbbag                   poundbagpaper\npoundnewsprintpaper     poundtagpaper\nlbnewsprint             poundnewsprintpaper\npoundposterpaper        poundtagpaper\nlbposter                poundposterpaper\npoundtissuepaper        poundtagpaper\nlbtissue                poundtissuepaper\npoundwrappingpaper      poundtagpaper\nlbwrapping              poundwrappingpaper\npoundwaxingpaper        poundtagpaper\nlbwaxing                poundwaxingpaper\npoundglassinepaper      poundtagpaper\nlbglassine              poundglassinepaper\npoundcoverpaper         lb / 20 inch 26 inch ream\nlbcover                 poundcoverpaper\npoundindexpaper         lb / 25.5 inch 30.5 inch ream\nlbindex                 poundindexpaper\npoundindexbristolpaper  poundindexpaper\nlbindexbristol          poundindexpaper\npoundbondpaper          lb / 17 inch 22 inch ream  # Bond paper is stiff and\nlbbond                  poundbondpaper             # durable for repeated\npoundwritingpaper       poundbondpaper             # filing, and it resists\nlbwriting               poundwritingpaper          # ink penetration.\npoundledgerpaper        poundbondpaper\nlbledger                poundledgerpaper\npoundcopypaper          poundbondpaper\nlbcopy                  poundcopypaper\npoundblottingpaper      lb / 19 inch 24 inch ream\nlbblotting              poundblottingpaper\npoundblankspaper        lb / 22 inch 28 inch ream\nlbblanks                poundblankspaper\npoundpostcardpaper      lb / 22.5 inch 28.5 inch ream\nlbpostcard              poundpostcardpaper\npoundweddingbristol     poundpostcardpaper\nlbweddingbristol        poundweddingbristol\npoundbristolpaper       poundweddingbristol\nlbbristol               poundbristolpaper\npoundboxboard           lb / 1000 ft^2\nlbboxboard              poundboxboard\npoundpaperboard         poundboxboard\nlbpaperboard            poundpaperboard\n\n# When paper is marked in units of M, it means the weight of 1000 sheets of the\n# given size of paper.  To convert this to paper weight, divide by the size of\n# the paper in question.\n\npaperM                  lb / 1000\n\n# In addition paper weight is reported in \"caliper\" which is simply the\n# thickness of one sheet, typically in inches.  Thickness is also reported in\n# \"points\" where a point is 1|1000 inch.  These conversions are supplied to\n# convert these units roughly (using an approximate density) into the standard\n# paper weight values.\n\npointthickness          0.001 in\npaperdensity            0.8 g/cm^3        # approximate--paper densities vary!\npapercaliper            in paperdensity\npaperpoint              pointthickness paperdensity\n\n#\n# Printing\n#\n\nfournierpoint           0.1648 inch / 12  # First definition of the printers\n                                          # point made by Pierre Fournier who\n                                          # defined it in 1737 as 1|12 of a\n                                          # cicero which was 0.1648 inches.\nolddidotpoint           1|72 frenchinch   # François Ambroise Didot, one of\n                                          # a family of printers, changed\n                                          # Fournier's definition around 1770\n                                          # to fit to the French units then in\n                                          # use.\nbertholdpoint           1|2660 m          # H. Berthold tried to create a\n                                          # metric version of the didot point\n                                          # in 1878.\nINpoint                 0.4 mm            # This point was created by a\n                                          # group directed by Fermin Didot in\n                                          # 1881 and is associated with the\n                                          # imprimerie nationale.  It doesn't\n                                          # seem to have been used much.\ngermandidotpoint        0.376065 mm       # Exact definition appears in DIN\n                                          # 16507, a German standards document\n                                          # of 1954.  Adopted more broadly  in\n                                          # 1966 by ???\nmetricpoint             3|8 mm            # Proposed in 1977 by Eurograf\noldpoint                1|72.27 inch      # The American point was invented\nprinterspoint           oldpoint          # by Nelson Hawks in 1879 and\ntexpoint                oldpoint          # dominates USA publishing.\n                                          # It was standardized by the American\n                                          # Typefounders Association at the\n                                          # value of 0.013837 inches exactly.\n                                          # Knuth uses the approximation given\n                                          # here (which is very close).  The\n                                          # comp.fonts FAQ claims that this\n                                          # value is supposed to be 1|12 of a\n                                          # pica where 83 picas is equal to 35\n                                          # cm.  But this value differs from\n                                          # the standard.\ntexscaledpoint          1|65536 texpoint  # The TeX typesetting system uses\ntexsp                   texscaledpoint    # this for all computations.\ncomputerpoint           1|72 inch         # The American point was rounded\npoint                   computerpoint\ncomputerpica            12 computerpoint  # to an even 1|72 inch by computer\npostscriptpoint         computerpoint     # people at some point.\npspoint                 postscriptpoint\ntwip                    1|20 point        # TWentieth of an Imperial Point\nQ                       1|4 mm            # Used in Japanese phototypesetting\n                                          # Q is for quarter\nfrenchprinterspoint     olddidotpoint\ndidotpoint              germandidotpoint  # This seems to be the dominant value\neuropeanpoint           didotpoint        # for the point used in Europe\ncicero                  12 didotpoint\n\nstick                   2 inches\n\n# Type sizes\n\nexcelsior               3 oldpoint\nbrilliant               3.5 oldpoint\ndiamondtype             4 oldpoint\npearl                   5 oldpoint\nagate                   5.5 oldpoint  # Originally agate type was 14 lines per\n                                      #   inch, giving a value of 1|14 in.\nruby                    agate         # British\nnonpareil               6 oldpoint\nmignonette              6.5 oldpoint\nemerald                 mignonette    # British\nminion                  7 oldpoint\nbrevier                 8 oldpoint\nbourgeois               9 oldpoint\nlongprimer              10 oldpoint\nsmallpica               11 oldpoint\npica                    12 oldpoint\nenglish                 14 oldpoint\ncolumbian               16 oldpoint\ngreatprimer             18 oldpoint\nparagon                 20 oldpoint\nmeridian                44 oldpoint\ncanon                   48 oldpoint\n\n# German type sizes\n\nnonplusultra            2 didotpoint\nbrillant                3 didotpoint\ndiamant                 4 didotpoint\nperl                    5 didotpoint\nnonpareille             6 didotpoint\nkolonel                 7 didotpoint\npetit                   8 didotpoint\nborgis                  9 didotpoint\nkorpus                  10 didotpoint\ncorpus                  korpus\ngaramond                korpus\nmittel                  14 didotpoint\ntertia                  16 didotpoint\ntext                    18 didotpoint\nkleine_kanon            32 didotpoint\nkanon                   36 didotpoint\ngrobe_kanon             42 didotpoint\nmissal                  48 didotpoint\nkleine_sabon            72 didotpoint\ngrobe_sabon             84 didotpoint\n\n#\n# Information theory units.  Note that the name \"entropy\" is used both\n# to measure information and as a physical quantity.\n#\n\nINFORMATION             bit\n\nnat                     (1/ln(2)) bits       # Entropy measured base e\nhartley                 log2(10) bits        # Entropy of a uniformly\nban                     hartley              #   distributed random variable\n                                             #   over 10 symbols.\ndit                     hartley              # from Decimal digIT\n\n#\n# Computer\n#\n\nbps                     bit/sec              # Sometimes the term \"baud\" is\n                                             #   incorrectly used to refer to\n                                             #   bits per second.  Baud refers\n                                             #   to symbols per second.  Modern\n                                             #   modems transmit several bits\n                                             #   per symbol.\nbyte                    8 bit                # Not all machines had 8 bit\nB                       byte                 #   bytes, but these days most of\n                                             #   them do.  But beware: for\n                                             #   transmission over modems, a\n                                             #   few extra bits are used so\n                                             #   there are actually 10 bits per\n                                             #   byte.\noctet                   8 bits               # The octet is always 8 bits\nnybble                  4 bits               # Half of a byte. Sometimes\n                                             #   equal to different lengths\n                                             #   such as 3 bits.\nnibble                  nybble\nnyp                     2 bits               # Donald Knuth asks in an exercise\n                                             #   for a name for a 2 bit\n                                             #   quantity and gives the \"nyp\"\n                                             #   as a solution due to Gregor\n                                             #   Purdy.  Not in common use.\nmeg                     megabyte             # Some people consider these\n                                             # units along with the kilobyte\ngig                     gigabyte             # to be defined according to\n                                             # powers of 2 with the kilobyte\n                                             # equal to 2^10 bytes, the\n                                             # megabyte equal to 2^20 bytes and\n                                             # the gigabyte equal to 2^30 bytes\n                                             # but these usages are forbidden\n                                             # by SI.  Binary prefixes have\n                                             # been defined by IEC to replace\n                                             # the SI prefixes.  Use them to\n                                             # get the binary values: KiB, MiB,\n                                             # and GiB.\njiffy                   0.01 sec     # This is defined in the Jargon File\njiffies                 jiffy        # (http://www.jargon.org) as being the\n                                     # duration of a clock tick for measuring\n                                     # wall-clock time.  Supposedly the value\n                                     # used to be 1|60 sec or 1|50 sec\n                                     # depending on the frequency of AC power,\n                                     # but then 1|100 sec became more common.\n                                     # On linux systems, this term is used and\n                                     # for the Intel based chips, it does have\n                                     # the value of .01 sec.  The Jargon File\n                                     # also lists two other definitions:\n                                     # millisecond, and the time taken for\n                                     # light to travel one foot.\ncdaudiospeed      44.1 kHz 2*16 bits # CD audio data rate at 44.1 kHz with 2\n                                     # samples of sixteen bits each.\ncdromspeed       75 2048 bytes / sec # For data CDs (mode1) 75 sectors are read\n                                     # each second with 2048 bytes per sector.\n                                     # Audio CDs do not have sectors, but\n                                     # people sometimes divide the bit rate by\n                                     # 75 and claim a sector length of 2352.\n                                     # Data CDs have a lower rate due to\n                                     # increased error correction overhead.\n                                     # There is a rarely used mode (mode2) with\n                                     # 2336 bytes per sector that has fewer\n                                     # error correction bits than mode1.\ndvdspeed                 1385 kB/s   # This is the \"1x\" speed of a DVD using\n                                     # constant linear velocity (CLV) mode.\n                                     # Modern DVDs may vary the linear velocity\n                                     # as they go from the inside to the\n                                     # outside of the disc.\n                       # See http://www.osta.org/technology/dvdqa/dvdqa4.htm\n\n\n#\n# Musical measures.  Musical intervals expressed as ratios.  Multiply\n# two intervals together to get the sum of the interval.  The function\n# musicalcent can be used to convert ratios to cents.\n#\n\n# Perfect intervals\n\noctave                  2\nmajorsecond             musicalfifth^2 / octave\nmajorthird              5|4\nminorthird              6|5\nmusicalfourth           4|3\nmusicalfifth            3|2\nmajorsixth              musicalfourth majorthird\nminorsixth              musicalfourth minorthird\nmajorseventh            musicalfifth majorthird\nminorseventh            musicalfifth minorthird\n\npythagoreanthird        majorsecond musicalfifth^2 / octave\nsyntoniccomma           pythagoreanthird / majorthird\npythagoreancomma        musicalfifth^12 / octave^7\n\n# Equal tempered definitions\n\nsemitone                octave^(1|12)\nmusicalcent(x) units=[1;1] range=(0,) semitone^(x/100) ; \\\n                                      100 log(musicalcent)/log(semitone)\n\n#\n# Musical note lengths.\n#\n\nwholenote               !\nMUSICAL_NOTE_LENGTH     wholenote\nhalfnote                1|2 wholenote\nquarternote             1|4 wholenote\neighthnote              1|8 wholenote\nsixteenthnote           1|16 wholenote\nthirtysecondnote        1|32 wholenote\nsixtyfourthnote         1|64 wholenote\ndotted                  3|2\ndoubledotted            7|4\nbreve                   doublewholenote\nsemibreve               wholenote\nminimnote               halfnote\ncrotchet                quarternote\nquaver                  eighthnote\nsemiquaver              sixteenthnote\ndemisemiquaver          thirtysecondnote\nhemidemisemiquaver      sixtyfourthnote\nsemidemisemiquaver      hemidemisemiquaver\n\n#\n# yarn and cloth measures\n#\n\n# yarn linear density\n\nwoolyarnrun             1600 yard/pound # 1600 yds of \"number 1 yarn\" weighs\n                                        # a pound.\nyarncut                 300 yard/pound  # Less common system used in\n                                        # Pennsylvania for wool yarn\ncottonyarncount         840 yard/pound\nlinenyarncount          300 yard/pound  # Also used for hemp and ramie\nworstedyarncount        1680 ft/pound\nmetricyarncount         meter/gram\ndenier                  1|9 tex            # used for silk and rayon\nmanchesteryarnnumber    drams/1000 yards   # old system used for silk\npli                     lb/in\ntypp                    1000 yd/lb   # abbreviation for Thousand Yard Per Pound\nasbestoscut             100 yd/lb    # used for glass and asbestos yarn\n\ntex                     gram / km    # rational metric yarn measure, meant\ndrex                    0.1 tex      # to be used for any kind of yarn\npoumar                  lb / 1e6 yard\n\n# yarn and cloth length\n\nskeincotton             80*54 inch   # 80 turns of thread on a reel with a\n                                     #  54 in circumference (varies for other\n                                     #  kinds of thread)\ncottonbolt              120 ft       # cloth measurement\nwoolbolt                210 ft\nbolt                    cottonbolt\nheer                    600 yards\ncut                     300 yards    # used for wet-spun linen yarn\nlea                     300 yards\n\nsailmakersyard          28.5 in\nsailmakersounce         oz / sailmakersyard 36 inch\n\nsilkmomme               momme / 25 yards 1.49 inch  # Traditional silk weight\nsilkmm                  silkmomme        # But it is also defined as\n                                         # lb/100 yd 45 inch.  The two\n                                         # definitions are slightly different\n                                         # and neither one seems likely to be\n                                         # the true source definition.\n\n#\n# drug dosage\n#\n\nmcg                     microgram        # Frequently used for vitamins\niudiptheria             62.8 microgram   # IU is for international unit\niupenicillin            0.6 microgram\niuinsulin               41.67 microgram\ndrop                    1|20 ml          # The drop was an old \"unit\" that was\n                                         # replaced by the minim.  But I was\n                                         # told by a pharmacist that in his\n                                         # profession, the conversion of 20\n                                         # drops per ml is actually used.\nbloodunit               450 ml           # For whole blood.  For blood\n                                         # components, a blood unit is the\n                                         # quanity of the component found in a\n                                         # blood unit of whole blood.  The\n                                         # human body contains about 12 blood\n                                         # units of whole blood.\n\n#\n# misc medical measure\n#\n\nfrenchcathetersize      1|3 mm           # measure used for the outer diameter\n                                         # of a catheter\ncharriere               frenchcathetersize\n\n\n#\n# fixup units for times when prefix handling doesn't do the job\n#\n\nhectare                 hectoare\nmegohm                  megaohm\nkilohm                  kiloohm\nmicrohm                 microohm\nmegalerg                megaerg    # 'L' added to make it pronounceable [18].\n\n#\n# Money\n#\n# Note that US$ is the primitive unit so other currencies are\n# generally given in US$.\n#\n\nunitedstatesdollar      US$\nusdollar                US$\n$                       dollar\nmark                    germanymark\nbolivar                 venezuelabolivar\nvenezuelanbolivarfuerte venezuelabolivar\nbolivarfuerte           bolivar        # The currency was revalued by\noldbolivar              1|1000 bolivar # a factor of 1000.\npeseta                  spainpeseta\nrand                    southafricarand\nescudo                  portugalescudo\nguilder                 netherlandsguilder\nhollandguilder          netherlandsguilder\npeso                    mexicopeso\nyen                     japanyen\nlira                    italylira\nrupee                   indiarupee\ndrachma                 greecedrachma\nfranc                   francefranc\nmarkka                  finlandmarkka\nbritainpound            unitedkingdompound\ngreatbritainpound       unitedkingdompound\nunitedkingdompound      ukpound\npoundsterling           britainpound\nyuan                    chinayuan\n\n# Some European currencies have permanent fixed exchange rates with\n# the Euro.  These rates were taken from the EC's web site:\n# http://ec.europa.eu/economy_finance/euro/adoption/conversion/index_en.htm\n\naustriaschilling        1|13.7603 euro\nbelgiumfranc            1|40.3399 euro\nestoniakroon            1|15.6466 euro # Equal to 1|8 germanymark\nfinlandmarkka           1|5.94573 euro\nfrancefranc             1|6.55957 euro\ngermanymark             1|1.95583 euro\ngreecedrachma           1|340.75 euro\nirelandpunt             1|0.787564 euro\nitalylira               1|1936.27 euro\nluxembourgfranc         1|40.3399 euro\nnetherlandsguilder      1|2.20371 euro\nportugalescudo          1|200.482 euro\nspainpeseta             1|166.386 euro\ncypruspound             1|0.585274 euro\nmaltalira               1|0.429300 euro\nsloveniatolar           1|239.640 euro\nslovakiakoruna          1|30.1260 euro\n\nUKP                     GBP        # Not an ISO code, but looks like one, and\n                                   # sometimes used on usenet.\nVEB                     1|1000 VEF # old venezuelan bolivar\n\n!include currency.units\n\n# Money on the gold standard, used in the late 19th century and early\n# 20th century.\n\nolddollargold           23.22 grains goldprice  # Used until 1934\nnewdollargold           96|7 grains goldprice   # After Jan 31, 1934\ndollargold              newdollargold\npoundgold               113 grains goldprice\ngoldounce               goldprice troyounce\nsilverounce             silverprice troyounce\nplatinumounce\t\tplatinumprice troyounce\nXAU                     goldounce\nXPT                     platinumounce\nXAG                     silverounce\n\n# Nominal masses of US coins.  Note that dimes, quarters and half dollars\n# have weight proportional to value.  Before 1965 it was $40 / kg.\n\nUSpennyweight           2.5 grams         # Since 1982, 48 grains before\nUSnickelweight          5 grams\nUSdimeweight            US$ 0.10 / (20 US$ / lb)   # Since 1965\nUSquarterweight         US$ 0.25 / (20 US$ / lb)   # Since 1965\nUShalfdollarweight      US$ 0.50 / (20 US$ / lb)   # Since 1971\nUSdollarmass            8.1 grams\n\n# British currency\n\nquid                    britainpound        # Slang names\nfiver                   5 quid\ntenner                  10 quid\nmonkey                  500 quid\nbrgrand                 1000 quid\nbob                     shilling\n\nshilling                1|20 britainpound   # Before decimalisation, there\noldpence                1|12 shilling       # were 20 shillings to a pound,\nfarthing                1|4 oldpence        # each of twelve old pence\nguinea                  21 shilling         # Still used in horse racing\ncrown                   5 shilling\nflorin                  2 shilling\ngroat                   4 oldpence\ntanner                  6 oldpence\nbrpenny                 0.01 britainpound\npence                   brpenny\ntuppence                2 pence\ntuppenny                tuppence\nha'penny                halfbrpenny\nhapenny                 ha'penny\noldpenny                oldpence\noldtuppence             2 oldpence\noldtuppenny             oldtuppence\nthreepence              3 oldpence    # threepence never refers to new money\nthreepenny              threepence\noldthreepence           threepence\noldthreepenny           threepence\noldhalfpenny            halfoldpenny\noldha'penny             oldhalfpenny\noldhapenny              oldha'penny\nbrpony                  25 britainpound\n\n# Canadian currency\n\nloony                   1 canadadollar    # This coin depicts a loon\ntoony                   2 canadadollar\n\n#\n# Units used for measuring volume of wood\n#\n\ncord                    4*4*8 ft^3   # 4 ft by 4 ft by 8 ft bundle of wood\nfacecord                1|2 cord\ncordfoot                1|8 cord     # One foot long section of a cord\ncordfeet                cordfoot\nhousecord               1|3 cord     # Used to sell firewood for residences,\n                                     #   often confusingly called a \"cord\"\nboardfoot               ft^2 inch    # Usually 1 inch thick wood\nboardfeet               boardfoot\nfbm                     boardfoot    # feet board measure\nstack                   4 yard^3     # British, used for firewood and coal [18]\nrick                    4 ft 8 ft 16 inches # Stack of firewood, supposedly\n                                     #   sometimes called a face cord, but this\n                                     #   value is equal to 1|3 cord.  Name\n                                     #   comes from an old Norse word for a\n                                     #   stack of wood.\nstere                   m^3\ntimberfoot              ft^3         # Used for measuring solid blocks of wood\nstandard                120 12 ft 11 in 1.5 in  # This is the St Petersburg or\n                                     #   Pittsburg standard.  Apparently the\n                                     #   term is short for \"standard hundred\"\n                                     #   which was meant to refer to 100 pieces\n                                     #   of wood (deals).  However, this\n                                     #   particular standard is equal to 120\n                                     #   deals which are 12 ft by 11 in by 1.5\n                                     #   inches (not the standard deal).\nhoppusfoot               (4/pi) ft^3 # Volume calculation suggested in 1736\nhoppusboardfoot      1|12 hoppusfoot #   forestry manual by Edward Hoppus, for\nhoppuston              50 hoppusfoot #   estimating the usable volume of a log.\n                                     #   It results from computing the volume\n                                     #   of a cylindrical log of length, L, and\n                                     #   girth (circumference), G, by V=L(G/4)^2.\n                                     #   The hoppus ton is apparently still in\n                                     #   use for shipments from Southeast Asia.\n\n# In Britain, the deal is apparently any piece of wood over 6 feet long, over\n# 7 wide and 2.5 inches thick.  The OED doesn't give a standard size.  A piece\n# of wood less than 7 inches wide is called a \"batten\".  This unit is now used\n# exclusively for fir and pine.\n\ndeal              12 ft 11 in 2.5 in # The standard North American deal [OED]\nwholedeal        12 ft 11 in 1.25 in # If it's half as thick as the standard\n                                     #   deal it's called a \"whole deal\"!\nsplitdeal         12 ft 11 in 5|8 in # And half again as thick is a split deal.\n\n\n# Used for shellac mixing rate\n\npoundcut            pound / gallon\nlbcut               poundcut\n\n#\n# Gas and Liquid flow units\n#\n\nFLUID_FLOW              VOLUME / TIME\n\n# Some obvious volumetric gas flow units (cu is short for cubic)\n\ncumec                   m^3/s\ncusec                   ft^3/s\n\n# Conventional abbreviations for fluid flow units\n\ngph                     gal/hr\ngpm                     gal/min\nmgd                     megagal/day\ncfs                     ft^3/s\ncfh                     ft^3/hour\ncfm                     ft^3/min\nlpm                     liter/min\nlfm                     ft/min     # Used to report air flow produced by fans.\n                                   # Multiply by cross sectional area to get a\n                                   # flow in cfm.\n\npru                     mmHg / (ml/min)  # peripheral resistance unit, used in\n                                         # medicine to assess blood flow in\n                                         # the capillaries.\n\n# Miner's inch:  This is an old historic unit used in the Western  United\n# States.  It is generally defined as the rate of flow through a one square\n# inch hole at a specified depth such as 4 inches.  In the late 19th century,\n# volume of water was sometimes measured in the \"24 hour inch\".  Values for the\n# miner's inch were fixed by state statues.  (This information is from a web\n# site operated by the Nevada Division of Water Planning:  The Water Words\n# Dictionary at http://www.state.nv.us/cnr/ndwp/dict-1/waterwds.htm.)\n\nminersinchAZ            1.5 ft^3/min\nminersinchCA            1.5 ft^3/min\nminersinchMT            1.5 ft^3/min\nminersinchNV            1.5 ft^3/min\nminersinchOR            1.5 ft^3/min\nminersinchID            1.2 ft^3/min\nminersinchKS            1.2 ft^3/min\nminersinchNE            1.2 ft^3/min\nminersinchNM            1.2 ft^3/min\nminersinchND            1.2 ft^3/min\nminersinchSD            1.2 ft^3/min\nminersinchUT            1.2 ft^3/min\nminersinchCO            1 ft^3/sec / 38.4  # 38.4 miner's inches = 1 ft^3/sec\nminersinchBC            1.68 ft^3/min      # British Columbia\n\n# Oceanographic flow\n\nsverdrup                1e6 m^3 / sec   # Used to express flow of ocean\n                                        # currents.  Named after Norwegian\n                                        # oceanographer H. Sverdrup.\n\n# In vacuum science and some other applications, gas flow is measured\n# as the product of volumetric flow and pressure.  This is useful\n# because it makes it easy to compare with the flow at standard\n# pressure (one atmosphere).  It also directly relates to the number\n# of gas molecules per unit time, and hence to the mass flow if the\n# molecular mass is known.\n\nGAS_FLOW                PRESSURE FLUID_FLOW\n\nsccm                    atm cc/min     # 's' is for \"standard\" to indicate\nsccs                    atm cc/sec     # flow at standard pressure\nscfh                    atm ft^3/hour  #\nscfm                    atm ft^3/min\nslpm                    atm liter/min\nslph                    atm liter/hour\nlusec                   liter micron Hg / s  # Used in vacuum science\n\n# US Standard Atmosphere (1976)\n# Atmospheric temperature and pressure vs. geometric height above sea level\n# This definition covers only the troposphere (the lowest atmospheric\n# layer, up to 11 km), and assumes the layer is polytropic.\n# A polytropic process is one for which PV^k = const, where P is the\n# pressure, V is the volume, and k is the polytropic exponent.  The\n# polytropic index is n = 1 / (k - 1).  As noted in the Wikipedia article\n# https://en.wikipedia.org/wiki/Polytropic_process, some authors reverse\n# the definitions of \"exponent\" and \"index.\"  The functions below assume\n# the following parameters:\n\n# temperature lapse rate, -dT/dz, in troposphere\n\nlapserate\t6.5 K/km\t# US Std Atm (1976)\n\n# air molecular weight, including constituent mol wt, given\n# in Table 3, p. 3\n\nair_1976\t78.084   %    28.0134 \\\n\t      + 20.9476  %    31.9988 \\\n\t      + 9340     ppm  39.948 \\\n\t      +  314     ppm  44.00995 \\\n\t      +   18.18  ppm  20.183 \\\n\t      +    5.24  ppm   4.0026 \\\n\t      +    2     ppm  16.04303 \\\n\t      +    1.14  ppm  83.80 \\\n\t      +    0.55  ppm   2.01594 \\\n\t      +    0.087 ppm 131.30\n\n# universal gas constant\nR_1976\t\t8.31432e3 N m/(kmol K)\n\n# polytropic index n\npolyndx_1976\tair_1976 (kg/kmol) gravity/(R_1976 lapserate) - 1\n\n# If desired, redefine using current values for air mol wt and R\n\npolyndx\t\tpolyndx_1976\n# polyndx\tair (kg/kmol) gravity/(R lapserate) - 1\n\n# for comparison with various references\n\npolyexpnt\t(polyndx + 1) / polyndx\n\n# The model assumes the following reference values:\n# sea-level temperature and pressure\n\nstdatmT0\t288.15 K\nstdatmP0\tatm\n\n# \"effective radius\" for relation of geometric to geopotential height,\n# at a latitude at which g = 9.80665 m/s (approximately 45.543 deg); no\n# relation to actual radius\n\nearthradUSAtm\t6356766 m\n\n# Temperature vs. geopotential height h\n# Assumes 15 degC at sea level\n# Based on approx 45 deg latitude\n# Lower limits of domain and upper limits of range are those of the\n# tables in US Standard Atmosphere (NASA 1976)\n\nstdatmTH(h) units=[m;K] domain=[-5000,11e3] range=[217,321] \\\n    stdatmT0+(-lapserate h) ; (stdatmT0+(-stdatmTH))/lapserate\n\n# Temperature vs. geometric height z; based on approx 45 deg latitude\nstdatmT(z) units=[m;K] domain=[-5000,11e3] range=[217,321] \\\n    stdatmTH(geop_ht(z)) ; ~geop_ht(~stdatmTH(stdatmT))\n\n# Pressure vs. geopotential height h\n# Assumes 15 degC and 101325 Pa at sea level\n# Based on approx 45 deg latitude\n# Lower limits of domain and upper limits of range are those of the\n# tables in US Standard Atmosphere (NASA 1976)\n\nstdatmPH(h) units=[m;Pa] domain=[-5000,11e3] range=[22877,177764] \\\n    atm (1 - (lapserate/stdatmT0) h)^(polyndx + 1) ; \\\n    (stdatmT0/lapserate) (1+(-(stdatmPH/stdatmP0)^(1/(polyndx + 1))))\n\n# Pressure vs. geometric height z; based on approx 45 deg latitude\nstdatmP(z) units=[m;Pa] domain=[-5000,11e3] range=[22877,177764] \\\n   stdatmPH(geop_ht(z)); ~geop_ht(~stdatmPH(stdatmP))\n\n# Geopotential height from geometric height\n# Based on approx 45 deg latitude\n# Lower limits of domain and range are somewhat arbitrary; they\n# correspond to the limits in the US Std Atm tables\n\ngeop_ht(z) units=[m;m] domain=[-5000,) range=[-5004,) \\\n    (earthradUSAtm z) / (earthradUSAtm + z) ; \\\n    (earthradUSAtm geop_ht) / (earthradUSAtm + (-geop_ht))\n\n# The standard value for the sea-level acceleration due to gravity is\n# 9.80665 m/s^2, but the actual value varies with latitude (Harrison 1949)\n# R_eff = 2 g_phi / denom\n# g_phi = 978.0356e-2 (1+0.0052885 sin(lat)^2+(-0.0000059) sin(2 lat)^2)\n#   or\n# g_phi = 980.6160e-2 (1+(-0.0026373) cos(2 lat)+0.0000059 cos(2 lat)^2)\n# denom = 3.085462e-6+2.27e-9 cos(2 lat)+(-2e-12) cos(4 lat) (minutes?)\n# There is no inverse function; the standard value applies at a latitude\n# of about 45.543 deg\n\ng_phi(lat) units=[deg;m/s2] domain=[0,90] noerror  \\\n    980.6160e-2 (1+(-0.0026373) cos(2 lat)+0.0000059 cos(2 lat)^2) m/s2\n\n# effective Earth radius for relation of geometric height to\n# geopotential height, as function of latitude (Harrison 1949)\n\nearthradius_eff(lat) units=[deg;m] domain=[0,90] noerror \\\n    m 2 9.780356 (1+0.0052885 sin(lat)^2+(-0.0000059) sin(2 lat)^2) / \\\n    (3.085462e-6 + 2.27e-9 cos(2 lat) + (-2e-12) cos(4 lat))\n\n# References\n# Harrison, L.P. 1949.  Relation Between Geopotential and Geometric\n#   Height.  In Smithsonian Meteorological Tables. List, Robert J., ed.\n#   6th ed., 4th reprint, 1968.  Washington, DC: Smithsonian Institution.\n# NASA.  US National Aeronautics and Space Administration. 1976.\n#   US Standard Atmosphere 1976.  Washington, DC: US Government Printing Office.\n\n# Gauge pressure functions\n#\n# Gauge pressure is measured relative to atmospheric pressure.  In the English\n# system, where pressure is often given in pounds per square inch, gauge\n# pressure is often indicated by 'psig' to distinguish it from absolute\n# pressure, often indicated by 'psia'.  At the standard atmospheric pressure\n# of 14.696 psia, a gauge pressure of 0 psig is an absolute pressure of 14.696\n# psia; an automobile tire inflated to 31 psig has an absolute pressure of\n# 45.696 psia.\n#\n# With gaugepressure(), the units must be specified (e.g., gaugepressure(1.5\n# bar)); with psig(), the units are taken as psi, so the example above of tire\n# pressure could be given as psig(31).\n#\n# If the normal elevation is significantly different from sea level, change\n# Patm appropriately, and adjust the lower domain limit on the gaugepressure\n# definition.\n\nPatm\tatm\n\ngaugepressure(x) units=[Pa;Pa] domain=[-101325,) range=[0,) \\\n                x + Patm ; gaugepressure+(-Patm)\n\npsig(x) units=[1;Pa] domain=[-14.6959487755135,) range=[0,) \\\n    gaugepressure(x psi) ; ~gaugepressure(psig) / psi\n\n#\n# Wire Gauge\n#\n# This area is a nightmare with huge charts of wire gauge diameters\n# that usually have no clear origin.  There are at least 5 competing wire gauge\n# systems to add to the confusion.  The use of wire gauge is related to the\n# manufacturing method: a metal rod is heated and drawn through a hole.  The\n# size change can't be too big.  To get smaller wires, the process is repeated\n# with a series of smaller holes.  Generally larger gauges mean smaller wires.\n# The gauges often have values such as \"00\" and \"000\" which are larger sizes\n# than simply \"0\" gauge.  In the tables that appear below, these gauges must be\n# specified as negative numbers (e.g. \"00\" is -1, \"000\" is -2, etc).\n# Alternatively, you can use the following units:\n#\n\ng00                      (-1)\ng000                     (-2)\ng0000                    (-3)\ng00000                   (-4)\ng000000                  (-5)\ng0000000                 (-6)\n\n# American Wire Gauge (AWG) or Brown & Sharpe Gauge appears to be the most\n# important gauge. ASTM B-258 specifies that this gauge is based on geometric\n# interpolation between gauge 0000, which is 0.46 inches exactly, and gauge 36\n# which is 0.005 inches exactly.  Therefore, the diameter in inches of a wire\n# is given by the formula 1|200 92^((36-g)/39).  Note that 92^(1/39) is close\n# to 2^(1/6), so diameter is approximately halved for every 6 gauges.  For the\n# repeated zero values, use negative numbers in the formula.  The same document\n# also specifies rounding rules which seem to be ignored by makers of tables.\n# Gauges up to 44 are to be specified with up to 4 significant figures, but no\n# closer than 0.0001 inch.  Gauges from 44 to 56 are to be rounded to the\n# nearest 0.00001 inch.\n#\n# In addition to being used to measure wire thickness, this gauge is used to\n# measure the thickness of sheets of aluminum, copper, and most metals other\n# than steel, iron and zinc.\n\nwiregauge(g) units=[1;m] range=(0,) \\\n             1|200 92^((36+(-g))/39) in; 36+(-39)ln(200 wiregauge/in)/ln(92)\nawg()        wiregauge\n\n# Next we have the SWG, the Imperial or British Standard Wire Gauge.  This one\n# is piecewise linear.  It was used for aluminum sheets.\n\nbrwiregauge[in]  \\\n       -6 0.5    \\\n       -5 0.464  \\\n       -3 0.4    \\\n       -2 0.372  \\\n        3 0.252  \\\n        6 0.192  \\\n       10 0.128  \\\n       14 0.08   \\\n       19 0.04   \\\n       23 0.024  \\\n       26 0.018  \\\n       28 0.0148 \\\n       30 0.0124 \\\n       39 0.0052 \\\n       49 0.0012 \\\n       50 0.001\n\n# The following is from the Appendix to ASTM B 258\n#\n#    For example, in U.S. gage, the standard for sheet metal is based on the\n#    weight of the metal, not on the thickness. 16-gage is listed as\n#    approximately .0625 inch thick and 40 ounces per square foot (the original\n#    standard was based on wrought iron at .2778 pounds per cubic inch; steel\n#    has almost entirely superseded wrought iron for sheet use, at .2833 pounds\n#    per cubic inch). Smaller numbers refer to greater thickness. There is no\n#    formula for converting gage to thickness or weight.\n#\n# It's rather unclear from the passage above whether the plate gauge values are\n# therefore wrong if steel is being used.  Reference [15] states that steel is\n# in fact measured using this gauge (under the name Manufacturers' Standard\n# Gauge) with a density of 501.84 lb/ft3 = 0.2904 lb/in3 used for steel.\n# But this doesn't seem to be the correct density of steel (.2833 lb/in3 is\n# closer).\n#\n# This gauge was established in 1893 for purposes of taxation.\n\n# Old plate gauge for iron\n\nplategauge[(oz/ft^2)/(480*lb/ft^3)] \\\n      -5 300   \\\n       1 180   \\\n      14  50   \\\n      16  40   \\\n      17  36   \\\n      20  24   \\\n      26  12   \\\n      31   7   \\\n      36   4.5 \\\n      38   4\n\n# Manufacturers Standard Gage\n\nstdgauge[(oz/ft^2)/(501.84*lb/ft^3)] \\\n      -5 300   \\\n       1 180   \\\n      14  50   \\\n      16  40   \\\n      17  36   \\\n      20  24   \\\n      26  12   \\\n      31   7   \\\n      36   4.5 \\\n      38   4\n\n# A special gauge is used for zinc sheet metal.  Notice that larger gauges\n# indicate thicker sheets.\n\nzincgauge[in]    \\\n        1 0.002  \\\n       10 0.02   \\\n       15 0.04   \\\n       19 0.06   \\\n       23 0.1    \\\n       24 0.125  \\\n       27 0.5    \\\n       28 1\n\n#\n# Screw sizes\n#\n# In the USA, screw diameters are reported using a gauge number.\n# Metric screws are reported as Mxx where xx is the diameter in mm.\n#\n\nscrewgauge(g) units=[1;m] range=[0,) \\\n              (.06 + .013 g) in ; (screwgauge/in + (-.06)) / .013\n\n#\n# Abrasive grit size\n#\n# Standards governing abrasive grit sizes are complicated, specifying\n# fractions of particles that are passed or retained by different mesh\n# sizes.  As a result, it is not possible to make precise comparisons\n# of different grit standards.  The tables below allow the\n# determination of rough equivlants by using median particle size.\n#\n# Standards in the USA are determined by the Unified Abrasives\n# Manufacturers' Association (UAMA), which resulted from the merger of\n# several previous organizations.  One of the old organizations was\n# CAMI (Coated Abrasives Manufacturers' Institute).\n#\n# UAMA has a web page with plots showing abrasive particle ranges for\n# various different grits and comparisons between standards.\n#\n# http://www.uama.org/Abrasives101/101Standards.html\n#\n# Abrasives are grouped into \"bonded\" abrasives for use with grinding\n# wheels and \"coated\" abrasives for sandpapers and abrasive films.\n# The industry uses different grit standards for these two\n# categories.\n#\n# Another division is between \"macrogrits\", grits below 240 and\n# \"microgrits\", which are above 240.  Standards differ, as do methods\n# for determining particle size.  In the USA, ANSI B74.12 is the\n# standard governing macrogrits.  ANSI B74.10 covers bonded microgrit\n# abrasives, and ANSI B74.18 covers coated microgrit abrasives.  It\n# appears that the coated standard is identical to the bonded standard\n# for grits up through 600 but then diverges significantly.\n#\n# European grit sizes are determined by the Federation of European\n# Producers of Abrasives.  http://www.fepa-abrasives.org\n#\n# They give two standards, the \"F\" grit for bonded abrasives and the\n# \"P\" grit for coated abrasives.  This data is taken directly from\n# their web page.\n\n# FEPA P grit for coated abrasives is commonly seen on sandpaper in\n# the USA where the paper will be marked P600, for example.  FEPA P\n# grits are said to be more tightly constrained than comparable ANSI\n# grits so that the particles are more uniform in size and hence give\n# a better finish.\n\ngrit_P[micron] \\\n        12 1815 \\\n        16 1324 \\\n        20 1000 \\\n        24 764 \\\n        30 642 \\\n        36 538 \\\n        40 425 \\\n        50 336 \\\n        60 269 \\\n        80 201 \\\n        100 162 \\\n        120 125 \\\n        150 100 \\\n        180 82 \\\n        220 68 \\\n        240 58.5 \\\n        280 52.2 \\\n        320 46.2 \\\n        360 40.5 \\\n        400 35 \\\n        500 30.2 \\\n        600 25.8 \\\n        800 21.8 \\\n        1000 18.3 \\\n        1200 15.3 \\\n        1500 12.6 \\\n        2000 10.3 \\\n        2500 8.4\n\n# The F grit is the European standard for bonded abrasives such as\n# grinding wheels\n\ngrit_F[micron] \\\n        4 4890 \\\n        5 4125 \\\n        6 3460 \\\n        7 2900 \\\n        8 2460 \\\n        10 2085 \\\n        12 1765 \\\n        14 1470 \\\n        16 1230 \\\n        20 1040 \\\n        22 885 \\\n        24 745 \\\n        30 625 \\\n        36 525 \\\n        40 438 \\\n        46 370 \\\n        54 310 \\\n        60 260 \\\n        70 218 \\\n        80 185 \\\n        90 154 \\\n        100 129 \\\n        120 109 \\\n        150 82 \\\n        180 69 \\\n        220 58 \\\n        230 53 \\\n        240 44.5 \\\n        280 36.5 \\\n        320 29.2 \\\n        360 22.8 \\\n        400 17.3 \\\n        500 12.8 \\\n        600 9.3 \\\n        800 6.5 \\\n        1000 4.5 \\\n        1200 3 \\\n        1500 2.0 \\\n        2000 1.2\n\n# According to the UAMA web page, the ANSI bonded and ANSI coated standards\n# are identical to FEPA F in the macrogrit range (under 240 grit), so these\n# values are taken from the FEPA F table.  The values for 240 and above are\n# from the UAMA web site and represent the average of the \"d50\" range\n# endpoints listed there.\n\nansibonded[micron] \\\n    4 4890 \\\n    5 4125 \\\n    6 3460 \\\n    7 2900 \\\n    8 2460 \\\n    10 2085 \\\n    12 1765 \\\n    14 1470 \\\n    16 1230 \\\n    20 1040 \\\n    22 885 \\\n    24 745 \\\n    30 625 \\\n    36 525 \\\n    40 438 \\\n    46 370 \\\n    54 310 \\\n    60 260 \\\n    70 218 \\\n    80 185 \\\n    90 154 \\\n    100 129 \\\n    120 109 \\\n    150 82 \\\n    180 69 \\\n    220 58 \\\n    240 50 \\\n    280 39.5 \\\n    320 29.5 \\\n    360 23 \\\n    400 18.25 \\\n    500 13.9 \\\n    600 10.55 \\\n    800 7.65 \\\n    1000 5.8 \\\n    1200 3.8\n\ngrit_ansibonded() ansibonded\n\n# Like the bonded grit, the coated macrogrits below 240 are taken from the\n# FEPA F table.  Data above this is from the UAMA site.  Note that the coated\n# and bonded standards are evidently the same from 240 up to 600 grit, but\n# starting at 800 grit, the coated standard diverges.  The data from UAMA show\n# that 800 grit coated has an average size slightly larger than the average\n# size of 600 grit coated/bonded.  However, the 800 grit has a significantly\n# smaller particle size variation.\n#\n# Because of this non-monotonicity from 600 grit to 800 grit this definition\n# produces a warning about the lack of a unique inverse.\n\nansicoated[micron] noerror \\\n    4 4890 \\\n    5 4125 \\\n    6 3460 \\\n    7 2900 \\\n    8 2460 \\\n    10 2085 \\\n    12 1765 \\\n    14 1470 \\\n    16 1230 \\\n    20 1040 \\\n    22 885 \\\n    24 745 \\\n    30 625 \\\n    36 525 \\\n    40 438 \\\n    46 370 \\\n    54 310 \\\n    60 260 \\\n    70 218 \\\n    80 185 \\\n    90 154 \\\n    100 129 \\\n    120 109 \\\n    150 82 \\\n    180 69 \\\n    220 58 \\\n    240 50 \\\n    280 39.5 \\\n    320 29.5 \\\n    360 23 \\\n    400 18.25 \\\n    500 13.9 \\\n    600 10.55 \\\n    800 11.5 \\\n    1000 9.5 \\\n    2000 7.2 \\\n    2500 5.5 \\\n    3000 4 \\\n    4000 3 \\\n    6000 2 \\\n    8000 1.2\n\ngrit_ansicoated()  ansicoated\n\n\n#\n# Is this correct?  This is the JIS Japanese standard used on waterstones\n#\njisgrit[micron] \\\n     150 75 \\\n     180 63 \\\n     220 53 \\\n     280 48 \\\n     320 40 \\\n     360 35 \\\n     400 30 \\\n     600 20 \\\n     700 17 \\\n     800 14 \\\n     1000 11.5 \\\n     1200 9.5 \\\n     1500 8 \\\n     2000 6.7 \\\n     2500 5.5 \\\n     3000 4 \\\n     4000 3 \\\n     6000 2 \\\n     8000 1.2\n\n# The \"Finishing Scale\" marked with an A (e.g. A75).  This information\n# is from the web page of the sand paper manufacturer Klingspor\n# http://www.klingspor.com/gritgradingsystems.htm\n#\n# I have no information about what this scale is used for.\n\ngrit_A[micron]\\\n     16 15.3 \\\n     25 21.8 \\\n     30 23.6 \\\n     35 25.75 \\\n     45 35 \\\n     60 46.2 \\\n     65 53.5 \\\n     75 58.5 \\\n     90 65 \\\n     110 78 \\\n     130 93 \\\n     160 127 \\\n     200 156\n#\n# Grits for DMT brand diamond sharpening stones from\n# http://dmtsharp.com/products/colorcode.htm\n#\n\ndmtxxcoarse  120 micron    # 120 mesh\ndmtsilver    dmtxxcoarse\ndmtxx        dmtxxcoarse\ndmtxcoarse   60 micron     # 220 mesh\ndmtx         dmtxcoarse\ndmtblack     dmtxcoarse\ndmtcoarse    45 micron     # 325 mesh\ndmtc         dmtcoarse\ndmtblue      dmtcoarse\ndmtfine      25 micron     # 600 mesh\ndmtred       dmtfine\ndmtf         dmtfine\ndmtefine     9 micron      # 1200 mesh\ndmte         dmtefine\ndmtgreen     dmtefine\ndmtceramic   7 micron      # 2200 mesh\ndmtcer       dmtceramic\ndmtwhite     dmtceramic\ndmteefine    3 micron      # 8000 mesh\ndmttan       dmteefine\ndmtee        dmteefine\n\n#\n# The following values come from a page in the Norton Stones catalog,\n# available at their web page, http://www.nortonstones.com.\n#\n\nhardtranslucentarkansas  6 micron     # Natural novaculite (silicon quartz)\nsoftarkansas             22 micron    #   stones\n\nextrafineindia           22 micron    # India stones are Norton's manufactured\nfineindia                35 micron    #   aluminum oxide product\nmediumindia              53.5 micron\ncoarseindia              97 micron\n\nfinecrystolon            45 micron    # Crystolon stones are Norton's\nmediumcrystalon          78 micron    #   manufactured silicon carbide product\ncoarsecrystalon          127 micron\n\n# The following are not from the Norton catalog\nhardblackarkansas        6 micron\nhardwhitearkansas        11 micron\nwashita                  35 micron\n\n#\n# Ring size. All ring sizes are given as the circumference of the ring.\n#\n\n# USA ring sizes.  Several slightly different definitions seem to be in\n# circulation.  According to [15], the interior diameter of size n ring in\n# inches is 0.32 n + 0.458 for n ranging from 3 to 13.5 by steps of 0.5.  The\n# size 2 ring is inconsistently 0.538in and no 2.5 size is listed.\n#\n# However, other sources list 0.455 + 0.0326 n and 0.4525 + 0.0324 n as the\n# diameter and list no special case for size 2.  (Or alternatively they are\n# 1.43 + .102 n and 1.4216+.1018 n for measuring circumference in inches.)  One\n# reference claimed that the original system was that each size was 1|10 inch\n# circumference, but that source doesn't have an explanation for the modern\n# system which is somewhat different.\n\nringsize(n) units=[1;in] domain=[2,) range=[1.6252,) \\\n            (1.4216+.1018 n) in ; (ringsize/in + (-1.4216))/.1018\n\n# Old practice in the UK measured rings using the \"Wheatsheaf gauge\" with sizes\n# specified alphabetically and based on the ring inside diameter in steps of\n# 1|64 inch.  This system was replaced in 1987 by British Standard 6820 which\n# specifies sizes based on circumference.  Each size is 1.25 mm different from\n# the preceding size.  The baseline is size C which is 40 mm circumference.\n# The new sizes are close to the old ones.  Sometimes it's necessary to go\n# beyond size Z to Z+1, Z+2, etc.\n\nsizeAring               37.50 mm\nsizeBring               38.75 mm\nsizeCring               40.00 mm\nsizeDring               41.25 mm\nsizeEring               42.50 mm\nsizeFring               43.75 mm\nsizeGring               45.00 mm\nsizeHring               46.25 mm\nsizeIring               47.50 mm\nsizeJring               48.75 mm\nsizeKring               50.00 mm\nsizeLring               51.25 mm\nsizeMring               52.50 mm\nsizeNring               53.75 mm\nsizeOring               55.00 mm\nsizePring               56.25 mm\nsizeQring               57.50 mm\nsizeRring               58.75 mm\nsizeSring               60.00 mm\nsizeTring               61.25 mm\nsizeUring               62.50 mm\nsizeVring               63.75 mm\nsizeWring               65.00 mm\nsizeXring               66.25 mm\nsizeYring               67.50 mm\nsizeZring               68.75 mm\n\n# Japanese sizes start with size 1 at a 13mm inside diameter and each size is\n# 1|3 mm larger in diameter than the previous one.  They are multiplied by pi\n# to give circumference.\n\njpringsize(n)  units=[1;mm] domain=[1,) range=[0.040840704,) \\\n               (38|3 + n/3) pi mm ; 3 jpringsize/ pi mm + (-38)\n\n# The European ring sizes are the length of the circumference in mm minus 40.\n\neuringsize(n)  units=[1;mm] (n+40) mm ; euringsize/mm + (-40)\n\n#\n# Abbreviations\n#\n\nmph                     mile/hr\nmpg                     mile/gal\nkph                     km/hr\nfL                      footlambert\nfpm                     ft/min\nfps                     ft/s\nrpm                     rev/min\nrps                     rev/sec\nmi                      mile\nsmi                     mile\nnmi                     nauticalmile\nmbh                     1e3 btu/hour\nmcm                     1e3 circularmil\nipy                     inch/year    # used for corrosion rates\nccf                     100 ft^3     # used for selling water [18]\nMcf                     1000 ft^3    # not million cubic feet [18]\nkp                      kilopond\nkpm                     kp meter\nWh                      W hour\nhph                     hp hour\nplf                     lb / foot    # pounds per linear foot\n\n#\n# Compatibility units with unix version\n#\n\npa                      Pa\nev                      eV\nhg                      Hg\noe                      Oe\nmh                      mH\nrd                      rod\npf                      pF\ngr                      grain\nnt                      N\nhz                      Hz\nhd                      hogshead\ndry                     drygallon/gallon\nnmile                   nauticalmile\nbeV                     GeV\nbev                     beV\ncoul                    C\n\n#\n# Radioactivity units\n#\n\nbecquerel               /s           # Activity of radioactive source\nBq                      becquerel    #\ncurie                   3.7e10 Bq    # Defined in 1910 as the radioactivity\nCi                      curie        # emitted by the amount of radon that is\n                                     # in equilibrium with 1 gram of radium.\nrutherford              1e6 Bq       #\n\nRADIATION_DOSE          gray\ngray                    J/kg         # Absorbed dose of radiation\nGy                      gray         #\nrad                     1e-2 Gy      # From Radiation Absorbed Dose\nrep                     8.38 mGy     # Roentgen Equivalent Physical, the amount\n                                     #   of radiation which , absorbed in the\n                                     #   body, would liberate the same amount\n                                     #   of energy as 1 roentgen of X rays\n                                     #   would, or 97 ergs.\n\nsievert                 J/kg         # Dose equivalent:  dosage that has the\nSv                      sievert      #   same effect on human tissues as 200\nrem                     1e-2 Sv      #   keV X-rays.  Different types of\n                                     #   radiation are weighted by the\n                                     #   Relative Biological Effectiveness\n                                     #   (RBE).\n                                     #\n                                     #      Radiation type       RBE\n                                     #       X-ray, gamma ray     1\n                                     #       beta rays, > 1 MeV   1\n                                     #       beta rays, < 1 MeV  1.08\n                                     #       neutrons, < 1 MeV   4-5\n                                     #       neutrons, 1-10 MeV   10\n                                     #       protons, 1 MeV      8.5\n                                     #       protons, .1 MeV      10\n                                     #       alpha, 5 MeV         15\n                                     #       alpha, 1 MeV         20\n                                     #\n                                     #   The energies are the kinetic energy\n                                     #   of the particles.  Slower particles\n                                     #   interact more, so they are more\n                                     #   effective ionizers, and hence have\n                                     #   higher RBE values.\n                                     #\n                                     # rem stands for Roentgen Equivalent\n                                     # Mammal\n\nroentgen              2.58e-4 C / kg # Ionizing radiation that produces\n                                     #   1 statcoulomb of charge in 1 cc of\n                                     #   dry air at stp.\nrontgen                 roentgen     # Sometimes it appears spelled this way\nsievertunit             8.38 rontgen # Unit of gamma ray dose delivered in one\n                                     #   hour at a distance of 1 cm from a\n                                     #   point source of 1 mg of radium\n                                     #   enclosed in platinum .5 mm thick.\n\neman                    1e-7 Ci/m^3  # radioactive concentration\nmache                   3.7e-7 Ci/m^3\n\n#\n# Atomic weights.  The atomic weight of an element is the ratio of the mass of\n# a mole of the element to 1|12 of a mole of Carbon 12.  The Standard Atomic\n# Weights apply to the elements as they occur naturally on earth.  Elements\n# which do not occur naturally or which occur with wide isotopic variability do\n# not have Standard Atomic Weights.  For these elements, the atomic weight is\n# based on the longest lived isotope, as marked in the comments.  In some\n# cases, the comment for these entries also gives a number which is an atomic\n# weight for a different isotope that may be of more interest than the longest\n# lived isotope.\n#\n\nactinium                227.0278\naluminum                26.981539\namericium               243.0614     # Longest lived. 241.06\nantimony                121.760\nargon                   39.948\narsenic                 74.92159\nastatine                209.9871     # Longest lived\nbarium                  137.327\nberkelium               247.0703     # Longest lived. 249.08\nberyllium               9.012182\nbismuth                 208.98037\nboron                   10.811\nbromine                 79.904\ncadmium                 112.411\ncalcium                 40.078\ncalifornium             251.0796     # Longest lived.  252.08\ncarbon                  12.011\ncerium                  140.115\ncesium                  132.90543\nchlorine                35.4527\nchromium                51.9961\ncobalt                  58.93320\ncopper                  63.546\ncurium                  247.0703\ndeuterium               2.0141017778\ndysprosium              162.50\neinsteinium             252.083      # Longest lived\nerbium                  167.26\neuropium                151.965\nfermium                 257.0951     # Longest lived\nfluorine                18.9984032\nfrancium                223.0197     # Longest lived\ngadolinium              157.25\ngallium                 69.723\ngermanium               72.61\ngold                    196.96654\nhafnium                 178.49\nhelium                  4.002602\nholmium                 164.93032\nhydrogen                1.00794\nindium                  114.818\niodine                  126.90447\niridium                 192.217\niron                    55.845\nkrypton                 83.80\nlanthanum               138.9055\nlawrencium              262.11       # Longest lived\nlead                    207.2\nlithium                 6.941\nlutetium                174.967\nmagnesium               24.3050\nmanganese               54.93805\nmendelevium             258.10       # Longest lived\nmercury                 200.59\nmolybdenum              95.94\nneodymium               144.24\nneon                    20.1797\nneptunium               237.0482\nnickel                  58.6934\nniobium                 92.90638\nnitrogen                14.00674\nnobelium                259.1009     # Longest lived\nosmium                  190.23\noxygen                  15.9994\npalladium               106.42\nphosphorus              30.973762\nplatinum                195.08\nplutonium               244.0642     # Longest lived.  239.05\npolonium                208.9824     # Longest lived.  209.98\npotassium               39.0983\npraseodymium            140.90765\npromethium              144.9127     # Longest lived.  146.92\nprotactinium            231.03588\nradium                  226.0254\nradon                   222.0176     # Longest lived\nrhenium                 186.207\nrhodium                 102.90550\nrubidium                85.4678\nruthenium               101.07\nsamarium                150.36\nscandium                44.955910\nselenium                78.96\nsilicon                 28.0855\nsilver                  107.8682\nsodium                  22.989768\nstrontium               87.62\nsulfur                  32.066\ntantalum                180.9479\ntechnetium              97.9072      # Longest lived.  98.906\ntellurium               127.60\nterbium                 158.92534\nthallium                204.3833\nthorium                 232.0381\nthullium                168.93421\ntin                     118.710\ntitanium                47.867\ntungsten                183.84\nuranium                 238.0289\nvanadium                50.9415\nxenon                   131.29\nytterbium               173.04\nyttrium                 88.90585\nzinc                    65.39\nzirconium               91.224\n\n# Average molecular weight of air\n#\n# The atmospheric composition listed is from NASA Earth Fact Sheet (accessed\n# 28 August 2015)\n# http://nssdc.gsfc.nasa.gov/planetary/factsheet/earthfact.html\n# Numbers do not add up to exactly 100% due to roundoff and uncertainty Water\n# is highly variable, typically makes up about 1%\n\nair            78.08% nitrogen 2 \\\n              + 20.95% oxygen 2 \\\n              + 9340 ppm argon \\\n              +  400 ppm (carbon + oxygen 2) \\\n              +   18.18 ppm neon \\\n              +    5.24 ppm helium \\\n              +    1.7  ppm (carbon + 4 hydrogen) \\\n              +    1.14 ppm krypton \\\n              +    0.55 ppm hydrogen 2\n#\n# population units\n#\n\npeople                  1\nperson                  people\ndeath                   people\ncapita                  people\npercapita               per capita\n\n# TGM dozen based unit system listed on the \"dozenal\" forum\n# http://www.dozenalsociety.org.uk/apps/tgm.htm.  These units are\n# proposed as an allegedly more rational alternative to the SI system.\n\nTim                     12^-4 hour         # Time \nGrafut                  gravity Tim^2      # Length based on gravity\nSurf                    Grafut^2           # area\nVolm                    Grafut^3           # volume\nVlos                    Grafut/Tim         # speed\nDenz                    Maz/Volm           # density\nMag                     Maz gravity        # force\nMaz                     Volm kg / oldliter # mass based on water\n\nTm                      Tim                # Abbreviations\nGf                      Grafut\nSf                      Surf\nVm                      Volm\nVl                      Vlos\nMz                      Maz\nDz                      Denz\n\n# Dozen based unit prefixes\n\nZena-                   12\nDuna-                   12^2\nTrina-                  12^3\nQuedra-                 12^4\nQuena-                  12^5\nHesa-                   12^6\nSeva-                   12^7\nAka-                    12^8\nNeena-                  12^9\nDexa-                   12^10\nLefa-                   12^11\nZennila-                12^12\n\nZeni-                   12^-1\nDuni-                   12^-2\nTrini-                  12^-3\nQuedri-                 12^-4\nQueni-                  12^-5\nHesi-                   12^-6\nSevi-                   12^-7\nAki-                    12^-8\nNeeni-                  12^-9\nDexi-                   12^-10\nLefi-                   12^-11\nZennili-                12^-12\n\n#\n# Traditional Japanese units (shakkanhou)\n#\n# The traditional system of weights and measures is called shakkanhou from the\n# shaku and the ken.  Japan accepted SI units in 1891 and legalized conversions\n# to the traditional system.  In 1909 the inch-pound system was also legalized,\n# so Japan had three legally approved systems.  A change to the metric system\n# started in 1921 but there was a lot of resistance.  The Measurement Law of\n# October 1999 prohibits sales in anything but SI units.  However, the old\n# units still live on in construction and as the basis for paper sizes of books\n# and tools used for handicrafts.\n#\n# Note that units below use the Hepburn romanization system.  Some other\n# systems would render \"mou\", \"jou\", and \"chou\" as \"mo\", \"jo\" and \"cho\".\n#\n#\n# http://hiramatu-hifuka.com/onyak/onyindx.html\n\n# Japanese Proportions.  These are still in everyday use.  They also\n# get used as units to represent the proportion of the standard unit.\n\nwari_proportion      1|10\nwari                 wari_proportion\nbu_proportion        1|100    # The character bu can also be read fun or bun\n                              # but usually \"bu\" is used for units.\nrin_proportion       1|1000\nmou_proportion       1|10000\n\n\n# Japanese Length Measures\n#\n# The length system is called kanejaku or\n# square and originated in China.  It was\n# adopted as Japan's official measure in 701\n# by the Taiho Code.  This system is still in\n# common use in architecture and clothing.\n\nshaku              1|3.3 m\nmou                1|10000 shaku\nrin                1|1000 shaku\nbu_distance        1|100 shaku\nsun                1|10 shaku\njou_distance       10 shaku\njou                jou_distance\n\nkanejakusun        sun      # Alias to emphasize architectural name\nkanejaku           shaku\nkanejakujou        jou\n\n# http://en.wikipedia.org/wiki/Taiwanese_units_of_measurement\ntaichi             shaku   # http://zh.wikipedia.org/wiki/台尺\ntaicun             sun     # http://zh.wikipedia.org/wiki/台制\n!utf8\n台尺               taichi  # via Hanyu Pinyin romanizations\n台寸               taicun\n!endutf8\n\n# In context of clothing, shaku is different from architecture\n# http://www.scinet.co.jp/sci/sanwa/kakizaki-essay54.html\n\nkujirajaku         10|8 shaku\nkujirajakusun      1|10 kujirajaku\nkujirajakubu       1|100 kujirajaku\nkujirajakujou      10 kujirajaku\ntan_distance       3 kujirajakujou\n\nken                6 shaku  # Also sometimes 6.3, 6.5, or 6.6\n                            # http://www.homarewood.co.jp/syakusun.htm\n\n# mostly unused\nchou_distance      60 ken\nchou               chou_distance\nri                 36 chou\n\n# Japanese Area Measures\n\n# Tsubo is still used for land size, though the others are more\n# recognized by their homonyms in the other measurements.\n\ngou_area             1|10 tsubo\ntsubo                36 shaku^2    # Size of two tatami = ken^2 ??\nse                   30 tsubo\ntan_area             10 se\nchou_area            10 tan_area\n\n# http://en.wikipedia.org/wiki/Taiwanese_units_of_measurement\nping                 tsubo     # http://zh.wikipedia.org/wiki/坪\njia                  2934 ping # http://zh.wikipedia.org/wiki/甲_(单位)\nfen                  1|10 jia  # http://zh.wikipedia.org/wiki/分\nfen_area             1|10 jia  # Protection against future collisions\n!utf8\n坪                   ping      # via Hanyu Pinyin romanizations\n甲                   jia\n分                   fen\n分地                 fen_area  # Protection against future collisions\n!endutf8\n\n# Japanese architecture is based on a \"standard\" size of tatami mat.\n# Room sizes today are given in number of tatami, and this number\n# determines the spacing between colums and hence sizes of sliding\n# doors and paper screens.  However, every region has its own slightly\n# different tatami size.  Edoma, used in and around Tokyo and\n# Hokkaido, is becoming a nationwide standard.  Kyouma is used around\n# Kyoto, Osaka and Kyuushu, and Chuukyouma is used around Nagoya.\n# Note that the tatami all have the aspect ratio 2:1 so that the mats\n# can tile the room with some of them turned 90 degrees.\n#\n# http://www.moon2.net/tatami/infotatami/structure.html\n\nedoma                (5.8*2.9) shaku^2\nkyouma               (6.3*3.15) shaku^2\nchuukyouma           (6*3) shaku^2\njou_area             edoma\ntatami               jou_area\n\n# Japanese Volume Measures\n\n# The \"shou\" is still used for such things as alcohol and seasonings.\n# Large quantities of paint are still purchased in terms of \"to\".\n\nshaku_volume         1|10 gou_volume\ngou_volume           1|10 shou\ngou                  gou_volume\nshou                 (4.9*4.9*2.7) sun^3   # The character shou which is\n                                           # the same as masu refers to a\n                                           # rectangular wooden cup used to\n                                           # measure liquids and cereal.\n                                           # Sake is sometimes served in a masu\n                                           # Note that it happens to be\n                                           # EXACTLY 7^4/11^3 liters.\nto                   10 shou\nkoku                 10 to  # No longer used; historically a measure of rice\n\n# Japanese Weight Measures\n#\n# http://wyoming.hp.infoseek.co.jp/zatugaku/zamoney.html\n\n# Not really used anymore.\n\nrin_weight           1|10 bu_weight\nbu_weight            1|10 monme\nfun                  1|10 monme\nmonme                momme\nkin                  160 monme\nkan                  1000 monme\nkwan                 kan         # This was the old pronounciation of the unit.\n                                 # The old spelling persisted a few centuries\n                                 # longer and was not changed until around\n                                 # 1950.\n\n# http://en.wikipedia.org/wiki/Taiwanese_units_of_measurement\n# says: \"Volume measure in Taiwan is largely metric\".\ntaijin               kin      # http://zh.wikipedia.org/wiki/台斤\ntailiang             10 monme # http://zh.wikipedia.org/wiki/台斤\ntaiqian              monme    # http://zh.wikipedia.org/wiki/台制\n!utf8\n台斤                 taijin # via Hanyu Pinyin romanizations\n台兩                 tailiang\n台錢                 taiqian\n!endutf8\n\n#\n# Australian unit\n#\n\naustraliasquare         (10 ft)^2   # Used for house area\n\n\n#\n# A few German units as currently in use.\n#\n\nzentner                 50 kg\ndoppelzentner           2 zentner\npfund                   500 g\n\n#\n# Some traditional Russian measures\n#\n# If you would like to help expand this section and understand\n# cyrillic transliteration, let me know.  These measures are meant to\n# reflect common usage, e.g. in translated literature.  \n#\n\ndessiatine              2400 sazhen^2    # Land measure\ndessjatine              dessiatine\n\nfunt                    409.51718 grams  # similar to pound\nzolotnik                1|96 funt        # used for precious metal measure\npood                    40 funt          # common in agricultural measure\n\narshin                  (2 + 1|3) feet\nsazhen                  3 arshin         # analogous to fathom\nverst                   500 sazhen       # of similar use to mile\nversta                  verst\nborderverst             1000 sazhen\nrussianmile             7 verst\n\n\n\n\n#\n# Old French distance measures, from French Weights and Measures\n# Before the Revolution by Zupko\n#\n\nfrenchfoot              144|443.296 m     # pied de roi, the standard of Paris.\npied                    frenchfoot        #   Half of the hashimicubit,\nfrenchfeet              frenchfoot        #   instituted by Charlemagne.\nfrenchinch              1|12 frenchfoot   #   This exact definition comes from\nfrenchthumb             frenchinch        #   a law passed on 10 Dec 1799 which\npouce                   frenchthumb       #   fixed the meter at\n                                          #   3 frenchfeet + 11.296 lignes.\nfrenchline              1|12 frenchinch   # This is supposed to be the size\nligne                   frenchline        #   of the average barleycorn\nfrenchpoint             1|12 frenchline\ntoise                   6 frenchfeet\narpent                  180^2 pied^2      # The arpent is 100 square perches,\n                                          # but the perche seems to vary a lot\n                                          # and can be 18 feet, 20 feet, or 22\n                                          # feet.  This measure was described\n                                          # as being in common use in Canada in\n                                          # 1934 (Websters 2nd).  The value\n                                          # given here is the Paris standard\n                                          # arpent.\nfrenchgrain             1|18827.15 kg     # Weight of a wheat grain, hence\n                                          # smaller than the British grain.\nfrenchpound             9216 frenchgrain\n\n#\n# Before the Imperial Weights and Measures Act of 1824, various different\n# weights and measures were in use in different places.\n#\n\n# Scots linear measure\n\nscotsinch        1.00540054 UKinch\nscotslink        1|100 scotschain\nscotsfoot        12 scotsinch\nscotsfeet        scotsfoot\nscotsell         37 scotsinch\nscotsfall        6 scotsell\nscotschain       4 scotsfall\nscotsfurlong     10 scotschain\nscotsmile        8 scotsfurlong\n\n# Scots area measure\n\nscotsrood        40 scotsfall^2\nscotsacre        4 scotsrood\n\n# Irish linear measure\n\nirishinch       UKinch\nirishpalm       3 irishinch\nirishspan       3 irishpalm\nirishfoot       12 irishinch\nirishfeet       irishfoot\nirishcubit      18 irishinch\nirishyard       3 irishfeet\nirishpace       5 irishfeet\nirishfathom     6 irishfeet\nirishpole       7 irishyard      # Only these values\nirishperch      irishpole        # are different from\nirishchain      4 irishperch     # the British Imperial\nirishlink       1|100 irishchain # or English values for\nirishfurlong    10 irishchain    # these lengths.\nirishmile       8 irishfurlong   #\n\n#  Irish area measure\n\nirishrood       40 irishpole^2\nirishacre       4 irishrood\n\n# English wine capacity measures (Winchester measures)\n\nwinepint       1|2 winequart\nwinequart      1|4 winegallon\nwinegallon     231 UKinch^3   # Sometimes called the Winchester Wine Gallon,\n                              # it was legalized in 1707 by Queen Anne, and\n                              # given the definition of 231 cubic inches.  It\n                              # had been in use for a while as 8 pounds of wine\n                              # using a merchant's pound, but the definition of\n                              # the merchant's pound had become uncertain.  A\n                              # pound of 15 tower ounces (6750 grains) had been\n                              # common, but then a pound of 15 troy ounces\n                              # (7200 grains) gained popularity.  Because of\n                              # the switch in the value of the merchants pound,\n                              # the size of the wine gallon was uncertain in\n                              # the market, hence the official act in 1707.\n                              # The act allowed that a six inch tall cylinder\n                              # with a 7 inch diameter was a lawful wine\n                              # gallon.  (This comes out to 230.9 in^3.)\n                              # Note also that in Britain a legal conversion\n                              # was established to the 1824 Imperial gallon\n                              # then taken as 277.274 in^3 so that the wine\n                              # gallon was 0.8331 imperial gallons.  This is\n                              # 231.1 cubic inches (using the international\n                              # inch).\nwinerundlet    18 winegallon\nwinebarrel     31.5 winegallon\nwinetierce     42 winegallon\nwinehogshead   2 winebarrel\nwinepuncheon   2 winetierce\nwinebutt       2 winehogshead\nwinepipe       winebutt\nwinetun        2 winebutt\n\n# English beer and ale measures used 1803-1824 and used for beer before 1688\n\nbeerpint       1|2 beerquart\nbeerquart      1|4 beergallon\nbeergallon     282 UKinch^3\nbeerbarrel     36 beergallon\nbeerhogshead   1.5 beerbarrel\n\n# English ale measures used from 1688-1803 for both ale and beer\n\nalepint        1|2 alequart\nalequart       1|4 alegallon\nalegallon      beergallon\nalebarrel      34 alegallon\nalehogshead    1.5 alebarrel\n\n# Scots capacity measure\n\nscotsgill      1|4 mutchkin\nmutchkin       1|2 choppin\nchoppin        1|2 scotspint\nscotspint      1|2 scotsquart\nscotsquart     1|4 scotsgallon\nscotsgallon    827.232 UKinch^3\nscotsbarrel    8 scotsgallon\njug            scotspint\n\n# Scots dry capacity measure\n\nscotswheatlippy   137.333 UKinch^3    # Also used for peas, beans, rye, salt\nscotswheatlippies scotswheatlippy\nscotswheatpeck    4 scotswheatlippy\nscotswheatfirlot  4 scotswheatpeck\nscotswheatboll    4 scotswheatfirlot\nscotswheatchalder 16 scotswheatboll\n\nscotsoatlippy     200.345 UKinch^3    # Also used for barley and malt\nscotsoatlippies   scotsoatlippy\nscotsoatpeck      4 scotsoatlippy\nscotsoatfirlot    4 scotsoatpeck\nscotsoatboll      4 scotsoatfirlot\nscotsoatchalder   16 scotsoatboll\n\n# Scots Tron weight\n\ntrondrop       1|16 tronounce\ntronounce      1|20 tronpound\ntronpound      9520 grain\ntronstone      16 tronpound\n\n# Irish liquid capacity measure\n\nirishnoggin    1|4 irishpint\nirishpint      1|2 irishquart\nirishquart     1|2 irishpottle\nirishpottle    1|2 irishgallon\nirishgallon    217.6 UKinch^3\nirishrundlet   18 irishgallon\nirishbarrel    31.5 irishgallon\nirishtierce    42 irishgallon\nirishhogshead  2 irishbarrel\nirishpuncheon  2 irishtierce\nirishpipe      2 irishhogshead\nirishtun       2 irishpipe\n\n# Irish dry capacity measure\n\nirishpeck      2 irishgallon\nirishbushel    4 irishpeck\nirishstrike    2 irishbushel\nirishdrybarrel 2 irishstrike\nirishquarter   2 irishbarrel\n\n# English Tower weights, abolished in 1528\n\ntowerpound       5400 grain\ntowerounce       1|12 towerpound\ntowerpennyweight 1|20 towerounce\ntowergrain       1|32 towerpennyweight\n\n# English Mercantile weights, used since the late 12th century\n\nmercpound      6750 grain\nmercounce      1|15 mercpound\nmercpennyweight 1|20 mercounce\n\n# English weights for lead\n\nleadstone     12.5 lb\nfotmal        70 lb\nleadwey       14 leadstone\nfothers       12 leadwey\n\n# English Hay measure\n\nnewhaytruss 60 lb             # New and old here seem to refer to \"new\"\nnewhayload  36 newhaytruss    # hay and \"old\" hay rather than a new unit\noldhaytruss 56 lb             # and an old unit.\noldhayload  36 oldhaytruss\n\n# English wool measure\n\nwoolclove   7 lb\nwoolstone   2 woolclove\nwooltod     2 woolstone\nwoolwey     13 woolstone\nwoolsack    2 woolwey\nwoolsarpler 2 woolsack\nwoollast    6 woolsarpler\n\n#\n# Ancient history units:  There tends to be uncertainty in the definitions\n#                         of the units in this section\n# These units are from [11]\n\n# Roman measure.  The Romans had a well defined distance measure, but their\n# measures of weight were poor.  They adopted local weights in different\n# regions without distinguishing among them so that there are half a dozen\n# different Roman \"standard\" weight systems.\n\nromanfoot    296 mm          # There is some uncertainty in this definition\nromanfeet    romanfoot       # from which all the other units are derived.\npes          romanfoot       # This value appears in numerous sources. In \"The\npedes        romanfoot       # Roman Land Surveyors\", Dilke gives 295.7 mm.\nromaninch    1|12 romanfoot  # The subdivisions of the Roman foot have the\nromandigit   1|16 romanfoot  #   same names as the subdivisions of the pound,\nromanpalm    1|4 romanfoot   #   but we can't have the names for different\nromancubit   18 romaninch    #   units.\nromanpace    5 romanfeet     # Roman double pace (basic military unit)\npassus       romanpace\nromanperch   10 romanfeet\nstade        125 romanpaces\nstadia       stade\nstadium      stade\nromanmile    8 stadia        # 1000 paces\nromanleague  1.5 romanmile\nschoenus     4 romanmile\n\n# Other values for the Roman foot (from Dilke)\n\nearlyromanfoot    29.73 cm\npesdrusianus      33.3 cm    # or 33.35 cm, used in Gaul & Germany in 1st c BC\nlateromanfoot     29.42 cm\n\n# Roman areas\n\nactuslength  120 romanfeet     # length of a Roman furrow\nactus        120*4 romanfeet^2 # area of the furrow\nsquareactus  120^2 romanfeet^2 # actus quadratus\nacnua        squareactus\niugerum      2 squareactus\niugera       iugerum\njugerum      iugerum\njugera       iugerum\nheredium     2 iugera          # heritable plot\nheredia      heredium\ncenturia     100 heredia\ncenturium    centuria\n\n# Roman volumes\n\nsextarius       35.4 in^3      # Basic unit of Roman volume.  As always,\nsextarii        sextarius      # there is uncertainty.  Six large Roman\n                               # measures survive with volumes ranging from\n                               # 34.4 in^3 to 39.55 in^3.  Three of them\n                               # cluster around the size given here.\n                               #\n                               # But the values for this unit vary wildly\n                               # in other sources.  One reference  gives 0.547\n                               # liters, but then says the amphora is a\n                               # cubic Roman foot.  This gives a value for the\n                               # sextarius of 0.540 liters.  And the\n                               # encyclopedia Brittanica lists 0.53 liters for\n                               # this unit.  Both [7] and [11], which were\n                               # written by scholars of weights and measures,\n                               # give the value of 35.4 cubic inches.\ncochlearia      1|48 sextarius\ncyathi          1|12 sextarius\nacetabula       1|8 sextarius\nquartaria       1|4 sextarius\nquartarius      quartaria\nheminae         1|2 sextarius\nhemina          heminae\ncheonix         1.5 sextarii\n\n# Dry volume measures (usually)\n\nsemodius        8 sextarius\nsemodii         semodius\nmodius          16 sextarius\nmodii           modius\n\n# Liquid volume measures (usually)\n\ncongius         12 heminae\ncongii          congius\namphora         8 congii\namphorae        amphora      # Also a dry volume measure\nculleus         20 amphorae\nquadrantal      amphora\n\n# Roman weights\n\nlibra           5052 grain   # The Roman pound varied significantly\nlibrae          libra        # from 4210 grains to 5232 grains.  Most of\nromanpound      libra        # the standards were obtained from the weight\nuncia           1|12 libra   # of particular coins.  The one given here is\nunciae          uncia        # based on the Gold Aureus of Augustus which\nromanounce      uncia        # was in use from BC 27 to AD 296.\ndeunx           11 uncia\ndextans         10 uncia\ndodrans         9 uncia\nbes             8 uncia\nseprunx         7 uncia\nsemis           6 uncia\nquincunx        5 uncia\ntriens          4 uncia\nquadrans        3 uncia\nsextans         2 uncia\nsescuncia       1.5 uncia\nsemuncia        1|2 uncia\nsiscilius       1|4 uncia\nsextula         1|6 uncia\nsemisextula     1|12 uncia\nscriptulum      1|24 uncia\nscrupula        scriptulum\nromanobol       1|2 scrupula\n\nromanaspound    4210 grain    # Old pound based on bronze coinage, the\n                              # earliest money of Rome BC 338 to BC 268.\n\n# Egyptian length measure\n\negyptianroyalcubit      20.63 in    # plus or minus .2 in\negyptianpalm            1|7 egyptianroyalcubit\negyptiandigit           1|4 egyptianpalm\negyptianshortcubit      6 egyptianpalm\n\ndoubleremen             29.16 in  # Length of the diagonal of a square with\nremendigit       1|40 doubleremen # side length of 1 royal egyptian cubit.\n                                  # This is divided into 40 digits which are\n                                  # not the same size as the digits based on\n                                  # the royal cubit.\n\n# Greek length measures\n\ngreekfoot               12.45 in      # Listed as being derived from the\ngreekfeet               greekfoot     # Egyptian Royal cubit in [11].  It is\ngreekcubit              1.5 greekfoot # said to be 3|5 of a 20.75 in cubit.\npous                    greekfoot\npodes                   greekfoot\norguia                  6 greekfoot\ngreekfathom             orguia\nstadion                 100 orguia\nakaina                  10 greekfeet\nplethron                10 akaina\ngreekfinger             1|16 greekfoot\nhomericcubit            20 greekfingers  # Elbow to end of knuckles.\nshortgreekcubit         18 greekfingers  # Elbow to start of fingers.\n\nionicfoot               296 mm\ndoricfoot               326 mm\n\nolympiccubit            25 remendigit    # These olympic measures were not as\nolympicfoot             2|3 olympiccubit # common as the other greek measures.\nolympicfinger           1|16 olympicfoot # They were used in agriculture.\nolympicfeet             olympicfoot\nolympicdakylos          olympicfinger\nolympicpalm             1|4 olympicfoot\nolympicpalestra         olympicpalm\nolympicspithame         3|4 foot\nolympicspan             olympicspithame\nolympicbema             2.5 olympicfeet\nolympicpace             olympicbema\nolympicorguia           6 olympicfeet\nolympicfathom           olympicorguia\nolympiccord             60 olympicfeet\nolympicamma             olympiccord\nolympicplethron         100 olympicfeet\nolympicstadion          600 olympicfeet\n\n# Greek capacity measure\n\ngreekkotyle             270 ml           # This approximate value is obtained\nxestes                  2 greekkotyle    # from two earthenware vessels that\nkhous                   12 greekkotyle   # were reconstructed from fragments.\nmetretes                12 khous         # The kotyle is a day's corn ration\nchoinix                 4 greekkotyle    # for one man.\nhekteos                 8 choinix\nmedimnos                6 hekteos\n\n# Greek weight.  Two weight standards were used, an Aegina standard based\n# on the Beqa shekel and an Athens (attic) standard.\n\naeginastater            192 grain        # Varies up to 199 grain\naeginadrachmae          1|2 aeginastater\naeginaobol              1|6 aeginadrachmae\naeginamina              50 aeginastaters\naeginatalent            60 aeginamina    # Supposedly the mass of a cubic foot\n                                         # of water (whichever foot was in use)\n\natticstater             135 grain        # Varies 134-138 grain\natticdrachmae           1|2 atticstater\natticobol               1|6 atticdrachmae\natticmina               50 atticstaters\nattictalent             60 atticmina     # Supposedly the mass of a cubic foot\n                                         # of water (whichever foot was in use)\n\n# \"Northern\" cubit and foot.  This was used by the pre-Aryan civilization in\n# the Indus valley.  It was used in Mesopotamia, Egypt, North Africa, China,\n# central and Western Europe until modern times when it was displaced by\n# the metric system.\n\nnortherncubit           26.6 in           # plus/minus .2 in\nnorthernfoot            1|2 northerncubit\n\nsumeriancubit           495 mm\nkus                     sumeriancubit\nsumerianfoot            2|3 sumeriancubit\n\nassyriancubit           21.6 in\nassyrianfoot            1|2 assyriancubit\nassyrianpalm            1|3 assyrianfoot\nassyriansusi            1|20 assyrianpalm\nsusi                    assyriansusi\npersianroyalcubit       7 assyrianpalm\n\n\n# Arabic measures.  The arabic standards were meticulously kept.  Glass weights\n# accurate to .2 grains were made during AD 714-900.\n\nhashimicubit            25.56 in          # Standard of linear measure used\n                                          # in Persian dominions of the Arabic\n                                          # empire 7-8th cent.  Is equal to two\n                                          # French feet.\n\nblackcubit              21.28 in\narabicfeet              1|2 blackcubit\narabicfoot              arabicfeet\narabicinch              1|12 arabicfoot\narabicmile              4000 blackcubit\n\nsilverdirhem            45 grain  # The weights were derived from these two\ntradedirhem             48 grain  # units with two identically named systems\n                                  # used for silver and used for trade purposes\n\nsilverkirat             1|16 silverdirhem\nsilverwukiyeh           10 silverdirhem\nsilverrotl              12 silverwukiyeh\narabicsilverpound       silverrotl\n\ntradekirat              1|16 tradedirhem\ntradewukiyeh            10 tradedirhem\ntraderotl               12 tradewukiyeh\narabictradepound        traderotl\n\n# Miscellaneous ancient units\n\nparasang                3.5 mile # Persian unit of length usually thought\n                                 # to be between 3 and 3.5 miles\nbiblicalcubit           21.8 in\nhebrewcubit             17.58 in\nli                      10|27.8 mile  # Chinese unit of length\n                                      #   100 li is considered a day's march\nliang                   11|3 oz       # Chinese weight unit\n\n\n# Medieval time units.  According to the OED, these appear in Du Cange\n# by Papias.\n\ntimepoint               1|5 hour  # also given as 1|4\ntimeminute              1|10 hour\ntimeostent              1|60 hour\ntimeounce               1|8 timeostent\ntimeatom                1|47 timeounce\n\n# Given in [15], these subdivisions of the grain were supposedly used\n# by jewelers.  The mite may have been used but the blanc could not\n# have been accurately measured.\n\nmite                    1|20 grain\ndroit                   1|24 mite\nperiot                  1|20 droit\nblanc                   1|24 periot\n\n#\n# Localization\n#\n\n!var UNITS_ENGLISH US\nhundredweight           ushundredweight\nton                     uston\nscruple                 apscruple\nfluidounce              usfluidounce\ngallon                  usgallon\nbushel                  usbushel\nquarter                 quarterweight\ncup                     uscup\ntablespoon              ustablespoon\nteaspoon                usteaspoon\ndollar                  US$\ncent                    $ 0.01\npenny                   cent\nminim                   minimvolume\npony                    ponyvolume\ngrand                   usgrand\nfirkin                  usfirkin\nhogshead                ushogshead\n!endvar\n\n!var UNITS_ENGLISH GB\nhundredweight           brhundredweight\nton                     brton\nscruple                 brscruple\nfluidounce              brfluidounce\ngallon                  brgallon\nbushel                  brbushel\nquarter                 brquarter\nchaldron                brchaldron\ncup                     brcup\nteacup                  brteacup\ntablespoon              brtablespoon\nteaspoon                brteaspoon\ndollar                  US$\ncent                    $ 0.01\npenny                   brpenny\nminim                   minimnote\npony                    brpony\ngrand                   brgrand\nfirkin                  brfirkin\nhogshead                brhogshead\n!endvar\n\n!varnot UNITS_ENGLISH GB US\n!message Unknown value for environment variable UNITS_ENGLISH.  Should be GB or US.\n!endvar\n\n\n!utf8\n⅛-                      1|8\n¼-                      1|4\n⅜-                      3|8\n½-                      1|2\n⅝-                      5|8\n¾-                      3|4\n⅞-                      7|8\n⅙-                      1|6\n⅓-                      1|3\n⅔-                      2|3\n⅚-                      5|6\n⅕-                      1|5\n⅖-                      2|5\n⅗-                      3|5\n⅘-                      4|5\n# U+2150-               1|7  For some reason these characters are getting\n# U+2151-               1|9  flagged as invalid UTF8.\n# U+2152-               1|10\nℯ                       exp(1)      # U+212F, base of natural log\n\nµ-                      micro       # micro sign U+00B5\nμ-                      micro       # small mu U+03BC\nångström                angstrom\nÅ                       angstrom    # angstrom symbol U+212B\nÅ                       angstrom    # A with ring U+00C5\nröntgen                 roentgen\n°C                      degC\n°F                      degF\n°K                      K           # °K is incorrect notation\n°R                      degR\n°                       degree\n℃                       degC\n℉                       degF\nK                       K          # Kelvin symbol, U+212A\nℓ                       liter      # unofficial abbreviation used in some places\n¢                       cent\n£                       britainpound\n¥                       japanyen\n€                       euro\n₩                       southkoreawon\n₪                       israelnewshekel\n₤                       lira\n₨                       rupee\n\nΩ                       ohm       # Ohm symbol U+2126\nΩ                       ohm       # Greek capital omega U+03A9\n℧                       mho\nʒ                        dram     # U+0292\n℈                       scruple\n℥                       ounce\n℔                       lb\nℎ                       h\nℏ                       hbar\n‰                       1|1000\n‱                       1|10000\n′                       '        # U+2032\n″                       \"        # U+2033\n\n#\n# Square unicode symbols starting at U+3371\n#\n\n㍱                      hPa\n㍲                      da\n㍳                      au\n㍴                      bar\n# ㍵                          oV???\n㍶                      pc\n#㍷                      dm      invalid on Mac\n#㍸                      dm^2    invalid on Mac\n#㍹                      dm^3    invalid on Mac\n㎀                      pA\n㎁                      nA\n㎂                      µA\n㎃                      mA\n㎄                      kA\n㎅                      kB\n㎆                      MB\n㎇                      GB\n㎈                      cal\n㎉                      kcal\n㎊                      pF\n㎋                      nF\n㎌                      µF\n㎍                      µg\n㎎                      mg\n㎏                      kg\n㎐                      Hz\n㎑                      kHz\n㎒                      MHz\n㎓                      GHz\n㎔                      THz\n㎕                      µL\n㎖                      mL\n㎗                      dL\n㎘                      kL\n㎙                      fm\n㎚                      nm\n㎛                      µm\n㎜                      mm\n㎝                      cm\n㎞                      km\n㎟                      mm^2\n㎠                      cm^2\n㎡                      m^2\n㎢                      km^2\n㎣                      mm^3\n㎤                      cm^3\n㎥                      m^3\n㎦                      km^3\n㎧                      m/s\n㎨                      m/s^2\n㎩                      Pa\n㎪                      kPa\n㎫                      MPa\n㎬                      GPa\n㎭                      rad\n㎮                      rad/s\n㎯                      rad/s^2\n㎰                      ps\n㎱                      ns\n㎲                      µs\n㎳                      ms\n㎴                      pV\n㎵                      nV\n㎶                      µV\n㎷                      mV\n㎸                      kV\n㎹                      MV\n㎺                      pW\n㎻                      nW\n㎼                      µW\n㎽                      mW\n㎾                      kW\n㎿                      MW\n㏀                      kΩ\n㏁                      MΩ\n㏃                      Bq\n㏄                      cc\n㏅                      cd\n㏆                      C/kg\n㏈()                    dB\n㏉                      Gy\n㏊                      ha\n# ㏋  HP??\n㏌                      in\n# ㏍                      KK??\n# ㏎                      KM???\n㏏                      kt\n㏐                      lm\n# ㏑                      ln\n# ㏒                      log\n㏓                      lx\n㏔                      mb\n㏕                      mil\n㏖                      mol\n㏗()                    pH\n㏙                      ppm\n#   ㏚     PR???\n㏛                      sr\n㏜                      Sv\n㏝                      Wb\n#㏞                      V/m     Invalid on Mac\n#㏟                      A/m     Invalid on Mac\n#㏿                      gal     Invalid on Mac\n\n!endutf8\n\n############################################################################\n#\n# Unit list aliases\n#\n# These provide a shorthand for conversions to unit lists.\n#\n############################################################################\n\n!unitlist hms hr;min;sec\n!unitlist time year;day;hr;min;sec\n!unitlist dms deg;arcmin;arcsec\n!unitlist ftin ft;in;1|8 in\n!unitlist inchfine in;1|8 in;1|16 in;1|32 in;1|64 in\n!unitlist usvol cup;3|4 cup;2|3 cup;1|2 cup;1|3 cup;1|4 cup;\\\n                tbsp;tsp;1|2 tsp;1|4 tsp;1|8 tsp\n\n############################################################################\n#\n# The following units were in the unix units database but do not appear in\n# this file:\n#\n#      wey        used for cheese, salt and other goods.  Measured mass or\n#      waymass    volume depending on what was measured and where the measuring\n#                 took place.  A wey of cheese ranged from 200 to 324 pounds.\n#\n#      sack       No precise definition\n#\n#      spindle    The length depends on the type of yarn\n#\n#      block      Defined variously on different computer systems\n#\n#      erlang     A unit of telephone traffic defined variously.\n#                 Omitted because there are no other units for this\n#                 dimension.  Is this true?  What about CCS = 1/36 erlang?\n#                 Erlang is supposed to be dimensionless.  One erlang means\n#                 a single channel occupied for one hour.\n#\n############################################################################\n\n");
// EXTERNAL MODULE: ./node_modules/mobx/dist/mobx.esm.js
var mobx_esm = __webpack_require__(949);
// EXTERNAL MODULE: ./node_modules/mobx-react/dist/mobxreact.esm.js
var mobxreact_esm = __webpack_require__(323);
// EXTERNAL MODULE: ./node_modules/mobx-react-devtools/index.js
var mobx_react_devtools = __webpack_require__(214);
var mobx_react_devtools_default = /*#__PURE__*/__webpack_require__.n(mobx_react_devtools);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(294);
// EXTERNAL MODULE: ./node_modules/react-dom/index.js
var react_dom = __webpack_require__(935);
;// CONCATENATED MODULE: ./node_modules/whatwg-fetch/fetch.js
var global =
  (typeof globalThis !== 'undefined' && globalThis) ||
  (typeof self !== 'undefined' && self) ||
  (typeof global !== 'undefined' && global)

var support = {
  searchParams: 'URLSearchParams' in global,
  iterable: 'Symbol' in global && 'iterator' in Symbol,
  blob:
    'FileReader' in global &&
    'Blob' in global &&
    (function() {
      try {
        new Blob()
        return true
      } catch (e) {
        return false
      }
    })(),
  formData: 'FormData' in global,
  arrayBuffer: 'ArrayBuffer' in global
}

function isDataView(obj) {
  return obj && DataView.prototype.isPrototypeOf(obj)
}

if (support.arrayBuffer) {
  var viewClasses = [
    '[object Int8Array]',
    '[object Uint8Array]',
    '[object Uint8ClampedArray]',
    '[object Int16Array]',
    '[object Uint16Array]',
    '[object Int32Array]',
    '[object Uint32Array]',
    '[object Float32Array]',
    '[object Float64Array]'
  ]

  var isArrayBufferView =
    ArrayBuffer.isView ||
    function(obj) {
      return obj && viewClasses.indexOf(Object.prototype.toString.call(obj)) > -1
    }
}

function normalizeName(name) {
  if (typeof name !== 'string') {
    name = String(name)
  }
  if (/[^a-z0-9\-#$%&'*+.^_`|~!]/i.test(name) || name === '') {
    throw new TypeError('Invalid character in header field name')
  }
  return name.toLowerCase()
}

function normalizeValue(value) {
  if (typeof value !== 'string') {
    value = String(value)
  }
  return value
}

// Build a destructive iterator for the value list
function iteratorFor(items) {
  var iterator = {
    next: function() {
      var value = items.shift()
      return {done: value === undefined, value: value}
    }
  }

  if (support.iterable) {
    iterator[Symbol.iterator] = function() {
      return iterator
    }
  }

  return iterator
}

function Headers(headers) {
  this.map = {}

  if (headers instanceof Headers) {
    headers.forEach(function(value, name) {
      this.append(name, value)
    }, this)
  } else if (Array.isArray(headers)) {
    headers.forEach(function(header) {
      this.append(header[0], header[1])
    }, this)
  } else if (headers) {
    Object.getOwnPropertyNames(headers).forEach(function(name) {
      this.append(name, headers[name])
    }, this)
  }
}

Headers.prototype.append = function(name, value) {
  name = normalizeName(name)
  value = normalizeValue(value)
  var oldValue = this.map[name]
  this.map[name] = oldValue ? oldValue + ', ' + value : value
}

Headers.prototype['delete'] = function(name) {
  delete this.map[normalizeName(name)]
}

Headers.prototype.get = function(name) {
  name = normalizeName(name)
  return this.has(name) ? this.map[name] : null
}

Headers.prototype.has = function(name) {
  return this.map.hasOwnProperty(normalizeName(name))
}

Headers.prototype.set = function(name, value) {
  this.map[normalizeName(name)] = normalizeValue(value)
}

Headers.prototype.forEach = function(callback, thisArg) {
  for (var name in this.map) {
    if (this.map.hasOwnProperty(name)) {
      callback.call(thisArg, this.map[name], name, this)
    }
  }
}

Headers.prototype.keys = function() {
  var items = []
  this.forEach(function(value, name) {
    items.push(name)
  })
  return iteratorFor(items)
}

Headers.prototype.values = function() {
  var items = []
  this.forEach(function(value) {
    items.push(value)
  })
  return iteratorFor(items)
}

Headers.prototype.entries = function() {
  var items = []
  this.forEach(function(value, name) {
    items.push([name, value])
  })
  return iteratorFor(items)
}

if (support.iterable) {
  Headers.prototype[Symbol.iterator] = Headers.prototype.entries
}

function consumed(body) {
  if (body.bodyUsed) {
    return Promise.reject(new TypeError('Already read'))
  }
  body.bodyUsed = true
}

function fileReaderReady(reader) {
  return new Promise(function(resolve, reject) {
    reader.onload = function() {
      resolve(reader.result)
    }
    reader.onerror = function() {
      reject(reader.error)
    }
  })
}

function readBlobAsArrayBuffer(blob) {
  var reader = new FileReader()
  var promise = fileReaderReady(reader)
  reader.readAsArrayBuffer(blob)
  return promise
}

function readBlobAsText(blob) {
  var reader = new FileReader()
  var promise = fileReaderReady(reader)
  reader.readAsText(blob)
  return promise
}

function readArrayBufferAsText(buf) {
  var view = new Uint8Array(buf)
  var chars = new Array(view.length)

  for (var i = 0; i < view.length; i++) {
    chars[i] = String.fromCharCode(view[i])
  }
  return chars.join('')
}

function bufferClone(buf) {
  if (buf.slice) {
    return buf.slice(0)
  } else {
    var view = new Uint8Array(buf.byteLength)
    view.set(new Uint8Array(buf))
    return view.buffer
  }
}

function Body() {
  this.bodyUsed = false

  this._initBody = function(body) {
    /*
      fetch-mock wraps the Response object in an ES6 Proxy to
      provide useful test harness features such as flush. However, on
      ES5 browsers without fetch or Proxy support pollyfills must be used;
      the proxy-pollyfill is unable to proxy an attribute unless it exists
      on the object before the Proxy is created. This change ensures
      Response.bodyUsed exists on the instance, while maintaining the
      semantic of setting Request.bodyUsed in the constructor before
      _initBody is called.
    */
    this.bodyUsed = this.bodyUsed
    this._bodyInit = body
    if (!body) {
      this._bodyText = ''
    } else if (typeof body === 'string') {
      this._bodyText = body
    } else if (support.blob && Blob.prototype.isPrototypeOf(body)) {
      this._bodyBlob = body
    } else if (support.formData && FormData.prototype.isPrototypeOf(body)) {
      this._bodyFormData = body
    } else if (support.searchParams && URLSearchParams.prototype.isPrototypeOf(body)) {
      this._bodyText = body.toString()
    } else if (support.arrayBuffer && support.blob && isDataView(body)) {
      this._bodyArrayBuffer = bufferClone(body.buffer)
      // IE 10-11 can't handle a DataView body.
      this._bodyInit = new Blob([this._bodyArrayBuffer])
    } else if (support.arrayBuffer && (ArrayBuffer.prototype.isPrototypeOf(body) || isArrayBufferView(body))) {
      this._bodyArrayBuffer = bufferClone(body)
    } else {
      this._bodyText = body = Object.prototype.toString.call(body)
    }

    if (!this.headers.get('content-type')) {
      if (typeof body === 'string') {
        this.headers.set('content-type', 'text/plain;charset=UTF-8')
      } else if (this._bodyBlob && this._bodyBlob.type) {
        this.headers.set('content-type', this._bodyBlob.type)
      } else if (support.searchParams && URLSearchParams.prototype.isPrototypeOf(body)) {
        this.headers.set('content-type', 'application/x-www-form-urlencoded;charset=UTF-8')
      }
    }
  }

  if (support.blob) {
    this.blob = function() {
      var rejected = consumed(this)
      if (rejected) {
        return rejected
      }

      if (this._bodyBlob) {
        return Promise.resolve(this._bodyBlob)
      } else if (this._bodyArrayBuffer) {
        return Promise.resolve(new Blob([this._bodyArrayBuffer]))
      } else if (this._bodyFormData) {
        throw new Error('could not read FormData body as blob')
      } else {
        return Promise.resolve(new Blob([this._bodyText]))
      }
    }

    this.arrayBuffer = function() {
      if (this._bodyArrayBuffer) {
        var isConsumed = consumed(this)
        if (isConsumed) {
          return isConsumed
        }
        if (ArrayBuffer.isView(this._bodyArrayBuffer)) {
          return Promise.resolve(
            this._bodyArrayBuffer.buffer.slice(
              this._bodyArrayBuffer.byteOffset,
              this._bodyArrayBuffer.byteOffset + this._bodyArrayBuffer.byteLength
            )
          )
        } else {
          return Promise.resolve(this._bodyArrayBuffer)
        }
      } else {
        return this.blob().then(readBlobAsArrayBuffer)
      }
    }
  }

  this.text = function() {
    var rejected = consumed(this)
    if (rejected) {
      return rejected
    }

    if (this._bodyBlob) {
      return readBlobAsText(this._bodyBlob)
    } else if (this._bodyArrayBuffer) {
      return Promise.resolve(readArrayBufferAsText(this._bodyArrayBuffer))
    } else if (this._bodyFormData) {
      throw new Error('could not read FormData body as text')
    } else {
      return Promise.resolve(this._bodyText)
    }
  }

  if (support.formData) {
    this.formData = function() {
      return this.text().then(decode)
    }
  }

  this.json = function() {
    return this.text().then(JSON.parse)
  }

  return this
}

// HTTP methods whose capitalization should be normalized
var methods = ['DELETE', 'GET', 'HEAD', 'OPTIONS', 'POST', 'PUT']

function normalizeMethod(method) {
  var upcased = method.toUpperCase()
  return methods.indexOf(upcased) > -1 ? upcased : method
}

function Request(input, options) {
  if (!(this instanceof Request)) {
    throw new TypeError('Please use the "new" operator, this DOM object constructor cannot be called as a function.')
  }

  options = options || {}
  var body = options.body

  if (input instanceof Request) {
    if (input.bodyUsed) {
      throw new TypeError('Already read')
    }
    this.url = input.url
    this.credentials = input.credentials
    if (!options.headers) {
      this.headers = new Headers(input.headers)
    }
    this.method = input.method
    this.mode = input.mode
    this.signal = input.signal
    if (!body && input._bodyInit != null) {
      body = input._bodyInit
      input.bodyUsed = true
    }
  } else {
    this.url = String(input)
  }

  this.credentials = options.credentials || this.credentials || 'same-origin'
  if (options.headers || !this.headers) {
    this.headers = new Headers(options.headers)
  }
  this.method = normalizeMethod(options.method || this.method || 'GET')
  this.mode = options.mode || this.mode || null
  this.signal = options.signal || this.signal
  this.referrer = null

  if ((this.method === 'GET' || this.method === 'HEAD') && body) {
    throw new TypeError('Body not allowed for GET or HEAD requests')
  }
  this._initBody(body)

  if (this.method === 'GET' || this.method === 'HEAD') {
    if (options.cache === 'no-store' || options.cache === 'no-cache') {
      // Search for a '_' parameter in the query string
      var reParamSearch = /([?&])_=[^&]*/
      if (reParamSearch.test(this.url)) {
        // If it already exists then set the value with the current time
        this.url = this.url.replace(reParamSearch, '$1_=' + new Date().getTime())
      } else {
        // Otherwise add a new '_' parameter to the end with the current time
        var reQueryString = /\?/
        this.url += (reQueryString.test(this.url) ? '&' : '?') + '_=' + new Date().getTime()
      }
    }
  }
}

Request.prototype.clone = function() {
  return new Request(this, {body: this._bodyInit})
}

function decode(body) {
  var form = new FormData()
  body
    .trim()
    .split('&')
    .forEach(function(bytes) {
      if (bytes) {
        var split = bytes.split('=')
        var name = split.shift().replace(/\+/g, ' ')
        var value = split.join('=').replace(/\+/g, ' ')
        form.append(decodeURIComponent(name), decodeURIComponent(value))
      }
    })
  return form
}

function parseHeaders(rawHeaders) {
  var headers = new Headers()
  // Replace instances of \r\n and \n followed by at least one space or horizontal tab with a space
  // https://tools.ietf.org/html/rfc7230#section-3.2
  var preProcessedHeaders = rawHeaders.replace(/\r?\n[\t ]+/g, ' ')
  // Avoiding split via regex to work around a common IE11 bug with the core-js 3.6.0 regex polyfill
  // https://github.com/github/fetch/issues/748
  // https://github.com/zloirock/core-js/issues/751
  preProcessedHeaders
    .split('\r')
    .map(function(header) {
      return header.indexOf('\n') === 0 ? header.substr(1, header.length) : header
    })
    .forEach(function(line) {
      var parts = line.split(':')
      var key = parts.shift().trim()
      if (key) {
        var value = parts.join(':').trim()
        headers.append(key, value)
      }
    })
  return headers
}

Body.call(Request.prototype)

function Response(bodyInit, options) {
  if (!(this instanceof Response)) {
    throw new TypeError('Please use the "new" operator, this DOM object constructor cannot be called as a function.')
  }
  if (!options) {
    options = {}
  }

  this.type = 'default'
  this.status = options.status === undefined ? 200 : options.status
  this.ok = this.status >= 200 && this.status < 300
  this.statusText = 'statusText' in options ? options.statusText : ''
  this.headers = new Headers(options.headers)
  this.url = options.url || ''
  this._initBody(bodyInit)
}

Body.call(Response.prototype)

Response.prototype.clone = function() {
  return new Response(this._bodyInit, {
    status: this.status,
    statusText: this.statusText,
    headers: new Headers(this.headers),
    url: this.url
  })
}

Response.error = function() {
  var response = new Response(null, {status: 0, statusText: ''})
  response.type = 'error'
  return response
}

var redirectStatuses = [301, 302, 303, 307, 308]

Response.redirect = function(url, status) {
  if (redirectStatuses.indexOf(status) === -1) {
    throw new RangeError('Invalid status code')
  }

  return new Response(null, {status: status, headers: {location: url}})
}

var DOMException = global.DOMException
try {
  new DOMException()
} catch (err) {
  DOMException = function(message, name) {
    this.message = message
    this.name = name
    var error = Error(message)
    this.stack = error.stack
  }
  DOMException.prototype = Object.create(Error.prototype)
  DOMException.prototype.constructor = DOMException
}

function fetch(input, init) {
  return new Promise(function(resolve, reject) {
    var request = new Request(input, init)

    if (request.signal && request.signal.aborted) {
      return reject(new DOMException('Aborted', 'AbortError'))
    }

    var xhr = new XMLHttpRequest()

    function abortXhr() {
      xhr.abort()
    }

    xhr.onload = function() {
      var options = {
        status: xhr.status,
        statusText: xhr.statusText,
        headers: parseHeaders(xhr.getAllResponseHeaders() || '')
      }
      options.url = 'responseURL' in xhr ? xhr.responseURL : options.headers.get('X-Request-URL')
      var body = 'response' in xhr ? xhr.response : xhr.responseText
      setTimeout(function() {
        resolve(new Response(body, options))
      }, 0)
    }

    xhr.onerror = function() {
      setTimeout(function() {
        reject(new TypeError('Network request failed'))
      }, 0)
    }

    xhr.ontimeout = function() {
      setTimeout(function() {
        reject(new TypeError('Network request failed'))
      }, 0)
    }

    xhr.onabort = function() {
      setTimeout(function() {
        reject(new DOMException('Aborted', 'AbortError'))
      }, 0)
    }

    function fixUrl(url) {
      try {
        return url === '' && global.location.href ? global.location.href : url
      } catch (e) {
        return url
      }
    }

    xhr.open(request.method, fixUrl(request.url), true)

    if (request.credentials === 'include') {
      xhr.withCredentials = true
    } else if (request.credentials === 'omit') {
      xhr.withCredentials = false
    }

    if ('responseType' in xhr) {
      if (support.blob) {
        xhr.responseType = 'blob'
      } else if (
        support.arrayBuffer &&
        request.headers.get('Content-Type') &&
        request.headers.get('Content-Type').indexOf('application/octet-stream') !== -1
      ) {
        xhr.responseType = 'arraybuffer'
      }
    }

    if (init && typeof init.headers === 'object' && !(init.headers instanceof Headers)) {
      Object.getOwnPropertyNames(init.headers).forEach(function(name) {
        xhr.setRequestHeader(name, normalizeValue(init.headers[name]))
      })
    } else {
      request.headers.forEach(function(value, name) {
        xhr.setRequestHeader(name, value)
      })
    }

    if (request.signal) {
      request.signal.addEventListener('abort', abortXhr)

      xhr.onreadystatechange = function() {
        // DONE (success or failure)
        if (xhr.readyState === 4) {
          request.signal.removeEventListener('abort', abortXhr)
        }
      }
    }

    xhr.send(typeof request._bodyInit === 'undefined' ? null : request._bodyInit)
  })
}

fetch.polyfill = true

if (!global.fetch) {
  global.fetch = fetch
  global.Headers = Headers
  global.Request = Request
  global.Response = Response
}

;// CONCATENATED MODULE: ./src/units-importer/CategorizeStore.ts
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var Type;
(function (Type) {
    Type[Type["Deleted"] = 0] = "Deleted";
    Type[Type["Normal"] = 1] = "Normal";
    Type[Type["Heading"] = 2] = "Heading";
})(Type || (Type = {}));
class CategorizeStore {
    constructor(data, changes = []) {
        Object.defineProperty(this, "executed", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: []
        });
        Object.defineProperty(this, "boxes", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: []
        });
        Object.defineProperty(this, "selectionStart", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: -1
        });
        Object.defineProperty(this, "selectionEnd", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: -1
        });
        Object.defineProperty(this, "lines", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.lines = data.split("\n");
        this.lines.unshift(""); // pretend it's one indexed
        this.boxes = autoparseText(this.lines);
        this.executeAll(changes);
    }
    executeAll(changes) {
        for (const change of changes)
            this.execute(change);
    }
    execute(cmd) {
        console.log("run: ", ...cmd);
        this.executed.push(cmd);
        const [command, ...args] = cmd;
        this[command](...args);
    }
    markSelection(a, b, type) {
        const [startI, endI] = this.findBounds(this.boxes, a, b);
        for (let i = startI; i <= endI; i++)
            this.boxes[i].type = type;
    }
    unifySelection(a, b) {
        const [startI, endI] = this.findBounds(this.boxes, a, b);
        const type = this.boxes[startI].type;
        this.boxes.splice(startI, endI - startI + 1, {
            start: a,
            end: b,
            type,
        });
        this.selectionStart = -1;
        this.selectionEnd = -1;
    }
    splitSelection(a, b) {
        const [startI, endI] = this.findBounds(this.boxes, a, b);
        const newBs = [];
        const type = this.boxes[startI].type;
        for (let i = a; i <= b; i++) {
            newBs.push({ start: i, end: i, type });
        }
        this.boxes.splice(startI, endI - startI + 1, ...newBs);
        this.selectionStart = -1;
        this.selectionEnd = -1;
    }
    setHeadingDepth(a, b, headingLevel) {
        const [startI, endI] = this.findBounds(this.boxes, a, b);
        for (let i = startI; i <= endI; i++)
            if (this.boxes[i].type === Type.Heading)
                this.boxes[i].headingLevel = headingLevel;
    }
    findBounds(boxes, l, r) {
        return [
            binarySearchIndex(boxes, (x) => x.start, l),
            binarySearchIndex(boxes, (x) => x.end, r),
        ];
    }
    getTableOfContents() {
        const root = {
            name: "",
            path: [],
            children: [],
            catChildren: [],
        };
        const catTree = [{ str: "", num: 0 }];
        function addToRoot([first, ...rest], child, target) {
            if (typeof first !== "number") {
                target.children.push(child);
                return;
            }
            if (rest.length === 0) {
                if (child.type === "category") {
                    if (target.catChildren[first]) {
                        throw Error("already exists");
                    }
                    target.catChildren[first] = child.category;
                    target.children.push(child);
                }
                else {
                    if (!target.catChildren[first])
                        console.log("no place", target, first);
                    else
                        target.catChildren[first].children.push(child);
                }
            }
            else {
                addToRoot(rest, child, target.catChildren[first]);
                return;
            }
        }
        for (let i = 0; i < this.boxes.length; i++) {
            const box = this.boxes[i];
            const level = box.headingLevel || catTree.length - 1;
            if (box.type === Type.Heading && level <= catTree.length) {
                const [old = { str: "", num: -1 }] = catTree.splice(level);
                const heading = this.getUncommentedText(box);
                catTree.push({
                    num: old.num + 1,
                    str: heading,
                });
                const path = catTree.map((x) => x.num).slice(1);
                addToRoot(path, {
                    type: "category",
                    category: {
                        name: heading,
                        path: path,
                        children: [],
                        catChildren: [],
                    },
                }, root);
            }
            else {
                const path = catTree.map((x) => x.num).slice(1);
                addToRoot(path, { type: "box", box }, root);
            }
        }
        console.log(root);
        return root.children;
    }
    categoryTreeOf(line) {
        const boxI = Math.min(binarySearchIndex(this.boxes, (x) => x.start, line, false), binarySearchIndex(this.boxes, (x) => x.end, line, false));
        const catTree = [{ str: "", num: 0 }];
        for (let i = 0; i <= boxI; i++) {
            const box = this.boxes[i];
            const level = box.headingLevel || catTree.length - 1;
            if (box.type === Type.Heading && level <= catTree.length) {
                const [old = { str: "", num: 0 }] = catTree.splice(level);
                catTree.push({
                    num: old.num + 1,
                    str: this.getUncommentedText(box),
                });
            }
        }
        catTree.shift();
        const box = this.boxes[boxI];
        const comment = this.getRawLines(box)
            .map((line) => (line.split("#")[1] || "").trim())
            .join("\n")
            .trim();
        return {
            headingsIndex: catTree.map((x) => x.num),
            headingLevel: catTree.length,
            headings: catTree.map((x, i) => catTree
                .slice(0, i + 1)
                .reduce((cum, n) => `${cum}${n.num}.`, "") +
                " " +
                x.str),
            comment,
        };
    }
    getBoxContent(box) {
        if (box.type === Type.Heading)
            throw Error("is heading");
        const split = this.getRawLines(box).map((line) => {
            const [content, comment] = splitOnce(/#/, line, true);
            return {
                content,
                comment: comment.substring(1).trim(),
            };
        });
        const comment = split
            .map(({ comment }) => comment)
            .join("\n")
            .trim();
        const content = split
            .map(({ content }) => content)
            .join("\n")
            .trim();
        return { content, comment };
    }
    getRawLines(box) {
        return this.lines.slice(box.start, box.end + 1);
    }
    getRawText(box) {
        return this.getRawLines(box).join("\n");
    }
    getUncommentedText(box) {
        return this.getRawLines(box)
            .map((line) => line.replace(/\s+/g, " ").replace(/#/g, "").trim())
            .join("\n")
            .trim();
    }
}
__decorate([
    mobx_esm.observable
], CategorizeStore.prototype, "executed", void 0);
__decorate([
    mobx_esm.observable
], CategorizeStore.prototype, "boxes", void 0);
__decorate([
    mobx_esm.observable
], CategorizeStore.prototype, "selectionStart", void 0);
__decorate([
    mobx_esm.observable
], CategorizeStore.prototype, "selectionEnd", void 0);
__decorate([
    mobx_esm.action
], CategorizeStore.prototype, "executeAll", null);
__decorate([
    mobx_esm.action
], CategorizeStore.prototype, "execute", null);
__decorate([
    mobx_esm.action
], CategorizeStore.prototype, "markSelection", null);
__decorate([
    mobx_esm.action
], CategorizeStore.prototype, "unifySelection", null);
__decorate([
    mobx_esm.action
], CategorizeStore.prototype, "splitSelection", null);
__decorate([
    mobx_esm.action
], CategorizeStore.prototype, "setHeadingDepth", null);
function autoparseText(lines) {
    const boxes = [];
    let boxStart = 0;
    let currentAliases = [];
    let lastHadBackslash = false;
    for (let i = 0; i < lines.length; i++) {
        const [line, comment] = splitOnce(/#/, lines[i], true);
        const [variable, value] = splitOnce(/\s/, line, true);
        if (lastHadBackslash) {
            lastHadBackslash = line.endsWith("\\");
            continue;
        }
        lastHadBackslash = line.endsWith("\\");
        if (line.length > 0) {
            if (!line.startsWith("!")) {
                //console.log(currentAliases, value);
                if (currentAliases.indexOf(value) >= 0) {
                    currentAliases.push(variable);
                    continue;
                }
            }
        }
        else if (comment.length > 0)
            continue;
        // end box
        if (i > 0)
            boxes.push({
                start: boxStart,
                end: i - 1,
                type: currentAliases.length > 0
                    ? Type.Normal
                    : i - 1 - boxStart == 0
                        ? Type.Deleted
                        : Type.Heading,
            });
        boxStart = i;
        currentAliases = [variable, value].filter((x) => x.length > 0);
    }
    if (boxStart < lines.length)
        boxes.push({
            start: boxStart,
            end: lines.length - 1,
            type: Type.Deleted,
        });
    return boxes;
}
function binarySearchIndex(array, accessor, search, exact = true, min = 0, max = array.length - 1) {
    if (min === max)
        if (exact && accessor(array[min]) !== search)
            throw Error("can't find element" + search);
        else
            return min;
    const mid = ((min + max) / 2) | 0;
    if (accessor(array[mid]) < search)
        return binarySearchIndex(array, accessor, search, exact, mid + 1, max);
    else
        return binarySearchIndex(array, accessor, search, exact, min, mid);
}
function splitOnce(x, str, trim = false) {
    const i = str.search(x);
    if (i < 0)
        return [str, ""];
    const [a, b] = [str.substr(0, i), str.substr(i)];
    if (trim)
        return [a.trim(), b.trim()];
    else
        return [a, b];
}

;// CONCATENATED MODULE: ./src/units-importer/GnuUnitsCategorizeHelper.tsx
var GnuUnitsCategorizeHelper_decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







function download(content, filename) {
    const a = window.document.createElement("a");
    a.href = window.URL.createObjectURL(new Blob([content], { type: "text/plain" }));
    a.download = filename;
    // Append anchor to body.
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
}
let HelperGui = class HelperGui extends react.Component {
    constructor(props) {
        super(props);
        Object.defineProperty(this, "pres", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: new Map()
        });
        Object.defineProperty(this, "store", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.store = this.props.store;
        document.addEventListener("selectionchange", (_) => this.getSelection(document.getSelection()), false);
        document.addEventListener("keyup", (e) => this.commandKey(e, String.fromCharCode(e.keyCode)));
        mobx_esm.autorun(() => this.checkConsistency(), {
            name: "consistency check",
        });
        mobx_esm.reaction(() => JSON.stringify(this.store.executed), (data) => {
            console.log("set localStorage");
            localStorage.setItem("executed", data);
        }, {
            name: "save to localStorage",
            fireImmediately: false,
            delay: 500,
        });
    }
    commandKey(e, key) {
        if (e.shiftKey || e.altKey || e.metaKey || e.ctrlKey)
            return;
        const sel = [this.store.selectionStart, this.store.selectionEnd];
        if (sel[0] == -1 || sel[1] == -1) {
            console.log("no selection");
            return;
        }
        if (key == "T") {
            console.log(this.store.categoryTreeOf(sel[0]));
            return;
        }
        else if (key == "C") {
            console.log(this.store.lines
                .slice(sel[0], sel[1] + 1)
                .map((x) => x.replace(/^\s*#/g, ""))
                .join("\n"));
        }
        const cmds = {
            J: ["unifySelection", ...sel],
            S: ["splitSelection", ...sel],
            D: ["markSelection", ...sel, Type.Deleted],
            H: ["markSelection", ...sel, Type.Heading],
            N: ["markSelection", ...sel, Type.Normal],
        };
        let cmd = cmds[key];
        if (/[0-9]/.test(key))
            cmd = ["setHeadingDepth", ...sel, +key];
        else if (!cmds[key]) {
            console.log("unknown command: " + key);
            return;
        }
        this.store.execute(cmd);
    }
    getSelection(s) {
        // const [boxes, lines] = [this.store.boxes, this.store.lines];
        let boxStartI = s.anchorNode
            ? this.pres.get(s.anchorNode) ||
                this.pres.get(s.anchorNode.parentElement)
            : undefined;
        let boxEndI = s.focusNode
            ? this.pres.get(s.focusNode) ||
                this.pres.get(s.focusNode.parentNode)
            : undefined;
        if (boxStartI === undefined || boxEndI === undefined) {
            boxStartI = -1;
            boxEndI = -1;
        }
        if (boxEndI < boxStartI)
            [boxStartI, boxEndI] = [boxEndI, boxStartI];
        const [a, b] = [
            this.store.boxes[boxStartI].start,
            this.store.boxes[boxEndI].end,
        ];
        this.store.selectionStart = a;
        this.store.selectionEnd = b;
    }
    render() {
        const { boxes } = this.store;
        let currentIndent = 0;
        return (react.createElement("div", { className: "container gnu-units-categorize" },
            react.createElement("div", { className: "page-header" },
                react.createElement("p", null,
                    "Select boxes with the mouse. ",
                    react.createElement("br", null),
                    "Then press J to join boxes, S to split them, ",
                    react.createElement("br", null),
                    "H to mark them as a heading ",
                    react.createElement("br", null),
                    "N to mark them as normal ",
                    react.createElement("br", null),
                    "D to mark them as deleted ",
                    react.createElement("br", null),
                    "T to print the category tree of the first box to the console. ",
                    react.createElement("br", null),
                    "Use 1-9 to set the level of the heading, 0 to set it to the level of the previous heading ",
                    react.createElement("br", null)),
                react.createElement("p", null,
                    "The data is saved to localStorage.executed as a list of the executed commands.",
                    " ",
                    react.createElement("button", { onClick: () => {
                            localStorage.clear();
                            location.reload();
                        } }, "Clear"),
                    react.createElement("button", { onClick: () => download(JSON.stringify(this.store.executed, null, "\t"), "executed.json") }, "Download"))),
            boxes.map((box, i) => {
                if (box.headingLevel)
                    currentIndent = box.headingLevel;
                const thisIndent = currentIndent + (box.type == Type.Heading ? 0 : 1);
                return (react.createElement("pre", { style: Object.assign({}, typeStyles[box.type], {
                        marginLeft: (thisIndent - 1) * 70 + "px",
                    }), className: box.start >= this.store.selectionStart &&
                        box.end <= this.store.selectionEnd
                        ? "alert alert-info"
                        : "", key: box.start + "," + box.end, ref: (e) => this.pres.set(e, i) }, this.store.getRawText(box)));
            })));
    }
    checkConsistency() {
        let i = 0;
        for (const box of this.store.boxes) {
            if (box.start !== i)
                console.error("inconsistency: end=", i, "!=", box.start, "=start");
            if (box.end < box.start)
                console.error("inconsistency box < 0", box);
            i = box.end + 1;
        }
    }
};
GnuUnitsCategorizeHelper_decorate([
    mobx_esm.action
], HelperGui.prototype, "getSelection", null);
HelperGui = GnuUnitsCategorizeHelper_decorate([
    mobxreact_esm.observer
], HelperGui);
const styles = {
    box: {
        borderBottom: "1px solid black",
        borderRadius: "0px",
        padding: "2px",
        margin: 0,
        maxHeight: "300px",
    },
};
const typeStyles = {
    [Type.Deleted]: Object.assign({}, styles.box, {
        color: "lightgray",
    }),
    [Type.Normal]: Object.assign({}, styles.box, {}),
    [Type.Heading]: Object.assign({}, styles.box, {
        fontWeight: "bold",
        fontSize: "120%",
    }),
};
function init(str, preloadSteps) {
    const actions = JSON.parse(localStorage.getItem("executed") || "null") || preloadSteps;
    react_dom.render(react.createElement("div", null,
        react.createElement(HelperGui, { store: new CategorizeStore(str, actions), ref: (guiInst) => Object.assign(window, { guiInst }) }),
        react.createElement((mobx_react_devtools_default()), null)), document.getElementById("app"));
}

;// CONCATENATED MODULE: ./data/gnu-units-categorize-steps.json
const gnu_units_categorize_steps_namespaceObject = JSON.parse("[[\"unifySelection\",241,252],[\"unifySelection\",527,535],[\"unifySelection\",539,547],[\"markSelection\",394,396,0],[\"markSelection\",0,80,0],[\"markSelection\",81,114,0],[\"markSelection\",116,124,0],[\"splitSelection\",669,675],[\"unifySelection\",669,672],[\"markSelection\",673,675,2],[\"unifySelection\",673,675],[\"markSelection\",723,728,1],[\"unifySelection\",723,728],[\"unifySelection\",742,757],[\"markSelection\",742,757,1],[\"unifySelection\",785,792],[\"markSelection\",823,844,0],[\"unifySelection\",903,917],[\"unifySelection\",918,932],[\"unifySelection\",954,968],[\"unifySelection\",972,983],[\"splitSelection\",993,995],[\"unifySelection\",993,994],[\"markSelection\",995,995,2],[\"unifySelection\",1067,1069],[\"splitSelection\",1099,1103],[\"unifySelection\",1101,1103],[\"unifySelection\",1099,1100],[\"splitSelection\",1111,1114],[\"unifySelection\",1111,1113],[\"markSelection\",1114,1114,0],[\"splitSelection\",1121,1122],[\"markSelection\",1122,1122,0],[\"unifySelection\",1130,1136],[\"unifySelection\",1220,1229],[\"splitSelection\",1231,1241],[\"unifySelection\",1231,1232],[\"unifySelection\",1233,1241],[\"unifySelection\",1245,1247],[\"unifySelection\",1259,1261],[\"unifySelection\",1276,1279],[\"unifySelection\",1288,1291],[\"splitSelection\",1288,1291],[\"unifySelection\",1288,1290],[\"markSelection\",1291,1291,2],[\"unifySelection\",1295,1297],[\"splitSelection\",1299,1301],[\"markSelection\",1313,1319,1],[\"unifySelection\",1313,1319],[\"unifySelection\",1394,1429],[\"splitSelection\",1480,1490],[\"markSelection\",1481,1482,1],[\"unifySelection\",1481,1482],[\"markSelection\",1483,1484,1],[\"unifySelection\",1483,1484],[\"markSelection\",1485,1490,1],[\"unifySelection\",1485,1490],[\"markSelection\",1491,1494,1],[\"unifySelection\",1491,1494],[\"markSelection\",1495,1498,1],[\"unifySelection\",1495,1498],[\"markSelection\",1499,1503,1],[\"unifySelection\",1499,1503],[\"markSelection\",1504,1508,1],[\"unifySelection\",1504,1508],[\"markSelection\",1509,1524,1],[\"unifySelection\",1509,1524],[\"markSelection\",1529,1545,0],[\"unifySelection\",1619,1632],[\"splitSelection\",1642,1645],[\"unifySelection\",1643,1650],[\"unifySelection\",1642,1650],[\"unifySelection\",1671,1681],[\"markSelection\",1683,1689,0],[\"unifySelection\",1735,1758],[\"unifySelection\",1941,1947],[\"splitSelection\",1941,1947],[\"unifySelection\",1941,1946],[\"markSelection\",1947,1947,2],[\"unifySelection\",1947,1958],[\"splitSelection\",2034,2039],[\"unifySelection\",2034,2038],[\"markSelection\",2039,2039,2],[\"unifySelection\",2048,2065],[\"unifySelection\",2078,2079],[\"splitSelection\",2164,2168],[\"unifySelection\",2164,2165],[\"unifySelection\",2166,2168],[\"markSelection\",2166,2168,2],[\"unifySelection\",2390,2391],[\"unifySelection\",2438,2439],[\"unifySelection\",2438,2440],[\"unifySelection\",2441,2442],[\"splitSelection\",2448,2460],[\"unifySelection\",2458,2460],[\"markSelection\",2458,2460,2],[\"unifySelection\",2448,2457],[\"unifySelection\",2570,2578],[\"splitSelection\",2711,2713],[\"unifySelection\",2711,2712],[\"markSelection\",2713,2713,2],[\"unifySelection\",2816,2819],[\"unifySelection\",2801,2804],[\"splitSelection\",2927,2929],[\"unifySelection\",2927,2928],[\"markSelection\",2929,2929,2],[\"unifySelection\",3038,3044],[\"unifySelection\",3093,3094],[\"unifySelection\",3325,3335],[\"unifySelection\",3337,3347],[\"unifySelection\",3349,3359],[\"unifySelection\",3487,3491],[\"unifySelection\",3590,3602],[\"unifySelection\",3709,3710],[\"unifySelection\",3785,3788],[\"unifySelection\",3868,3870],[\"unifySelection\",3928,3935],[\"splitSelection\",3909,3911],[\"unifySelection\",3942,3945],[\"unifySelection\",4019,4024],[\"unifySelection\",4606,4607],[\"unifySelection\",4606,4609],[\"unifySelection\",4603,4604],[\"unifySelection\",4611,4613],[\"unifySelection\",4753,4778],[\"splitSelection\",4917,4928],[\"unifySelection\",4917,4925],[\"unifySelection\",4926,4928],[\"markSelection\",4926,4928,2],[\"unifySelection\",4949,4955],[\"unifySelection\",5191,5197],[\"unifySelection\",5247,5252],[\"unifySelection\",5388,5391],[\"unifySelection\",5417,5420],[\"unifySelection\",5496,5501],[\"unifySelection\",5531,5535],[\"unifySelection\",5539,5541],[\"unifySelection\",5556,5572],[\"unifySelection\",5576,5582],[\"unifySelection\",5635,5637],[\"splitSelection\",5877,5879],[\"markSelection\",5878,5879,0],[\"splitSelection\",5881,5883],[\"markSelection\",5882,5883,0],[\"splitSelection\",5889,5890],[\"markSelection\",5890,5890,0],[\"splitSelection\",5797,5798],[\"markSelection\",5798,5798,0],[\"unifySelection\",219,220],[\"setHeadingDepth\",125,132,1],[\"setHeadingDepth\",133,136,2],[\"setHeadingDepth\",202,207,1],[\"setHeadingDepth\",274,277,1],[\"setHeadingDepth\",274,277,2],[\"setHeadingDepth\",274,277,0],[\"setHeadingDepth\",274,277,0],[\"setHeadingDepth\",274,277,1],[\"setHeadingDepth\",274,277,1],[\"setHeadingDepth\",274,277,2],[\"setHeadingDepth\",366,367,3],[\"setHeadingDepth\",314,320,3],[\"setHeadingDepth\",366,367,4],[\"setHeadingDepth\",434,439,1],[\"setHeadingDepth\",442,445,2],[\"setHeadingDepth\",623,627,3],[\"setHeadingDepth\",633,636,2],[\"setHeadingDepth\",673,675,2],[\"setHeadingDepth\",758,769,3],[\"setHeadingDepth\",796,807,3],[\"setHeadingDepth\",845,848,1],[\"setHeadingDepth\",849,850,2],[\"setHeadingDepth\",1057,1060,1],[\"setHeadingDepth\",1148,1149,2],[\"setHeadingDepth\",1302,1307,2],[\"setHeadingDepth\",1302,1307,3],[\"setHeadingDepth\",1330,1369,2],[\"setHeadingDepth\",1176,1185,3],[\"setHeadingDepth\",1248,1251,2],[\"setHeadingDepth\",1291,1291,3],[\"setHeadingDepth\",1302,1307,4],[\"setHeadingDepth\",1330,1369,3],[\"setHeadingDepth\",1373,1374,4],[\"splitSelection\",1384,1387],[\"markSelection\",1386,1386,1],[\"setHeadingDepth\",1385,1385,5],[\"setHeadingDepth\",1394,1429,4],[\"setHeadingDepth\",1390,1391,4],[\"splitSelection\",1509,1524],[\"unifySelection\",1510,1522],[\"markSelection\",1510,1522,2],[\"setHeadingDepth\",1547,1570,3],[\"setHeadingDepth\",1547,1570,2],[\"setHeadingDepth\",1691,1692,3],[\"setHeadingDepth\",125,132,1],[\"setHeadingDepth\",1718,1724,3],[\"setHeadingDepth\",1718,1724,2],[\"setHeadingDepth\",1778,1785,3],[\"setHeadingDepth\",1827,1831,2],[\"setHeadingDepth\",1832,1833,3],[\"setHeadingDepth\",1860,1863,1],[\"setHeadingDepth\",1864,1865,2],[\"setHeadingDepth\",1914,1915,3],[\"setHeadingDepth\",2202,2205,2],[\"setHeadingDepth\",2218,2221,1],[\"unifySelection\",1864,1888],[\"setHeadingDepth\",1864,1888,2],[\"setHeadingDepth\",1947,1958,2],[\"setHeadingDepth\",2025,2026,3],[\"setHeadingDepth\",2039,2039,2],[\"setHeadingDepth\",2172,2179,3],[\"setHeadingDepth\",2222,2231,2],[\"setHeadingDepth\",2310,2316,3],[\"setHeadingDepth\",2380,2381,2],[\"setHeadingDepth\",2427,2430,1],[\"setHeadingDepth\",2461,2462,2],[\"setHeadingDepth\",2492,2494,3],[\"setHeadingDepth\",2508,2509,2],[\"setHeadingDepth\",2618,2679,2],[\"setHeadingDepth\",2618,2679,3],[\"markSelection\",2680,2702,1],[\"unifySelection\",2680,2702],[\"unifySelection\",2580,2582],[\"unifySelection\",2583,2585],[\"setHeadingDepth\",2709,2710,3],[\"setHeadingDepth\",2709,2710,4],[\"setHeadingDepth\",2718,2729,3],[\"markSelection\",2709,2712,1],[\"unifySelection\",2709,2712],[\"markSelection\",2713,2717,1],[\"unifySelection\",2713,2717],[\"unifySelection\",2718,2735],[\"markSelection\",2718,2735,1],[\"setHeadingDepth\",2703,2708,3],[\"setHeadingDepth\",2703,2708,4],[\"markSelection\",2736,2746,1],[\"unifySelection\",2736,2746],[\"markSelection\",2747,2751,1],[\"unifySelection\",2747,2751],[\"markSelection\",2752,2757,1],[\"unifySelection\",2752,2757],[\"setHeadingDepth\",2752,2757,3],[\"setHeadingDepth\",2752,2757,3],[\"setHeadingDepth\",2752,2757,2],[\"setHeadingDepth\",2752,2757,0],[\"setHeadingDepth\",2787,2792,3],[\"setHeadingDepth\",2796,2799,1],[\"setHeadingDepth\",2889,2890,2],[\"unifySelection\",2929,2983],[\"markSelection\",2929,2983,1],[\"markSelection\",2988,3010,1],[\"unifySelection\",2988,3010],[\"splitSelection\",2988,3010],[\"unifySelection\",2989,3008],[\"setHeadingDepth\",3061,3067,3],[\"setHeadingDepth\",3071,3072,2],[\"unifySelection\",3086,3088],[\"markSelection\",3113,3118,1],[\"unifySelection\",3113,3118],[\"splitSelection\",3100,3109],[\"unifySelection\",3101,3103],[\"unifySelection\",3104,3109],[\"unifySelection\",3104,3111],[\"markSelection\",3104,3111,1],[\"setHeadingDepth\",3120,3124,3],[\"setHeadingDepth\",3142,3149,3],[\"setHeadingDepth\",3142,3149,2],[\"setHeadingDepth\",3162,3165,3],[\"setHeadingDepth\",3191,3192,1],[\"setHeadingDepth\",3773,3779,1],[\"setHeadingDepth\",3806,3809,2],[\"setHeadingDepth\",3898,3901,1],[\"setHeadingDepth\",3936,3940,2],[\"setHeadingDepth\",3947,3948,1],[\"setHeadingDepth\",3958,3959,2],[\"setHeadingDepth\",3980,3987,1],[\"markSelection\",4041,4054,1],[\"unifySelection\",4041,4054],[\"markSelection\",4037,4040,1],[\"unifySelection\",4037,4040],[\"markSelection\",4055,4057,1],[\"unifySelection\",4055,4057],[\"markSelection\",4058,4060,1],[\"unifySelection\",4058,4060],[\"markSelection\",4058,4062,1],[\"unifySelection\",4058,4062],[\"markSelection\",4066,4069,1],[\"unifySelection\",4066,4069],[\"splitSelection\",4064,4065],[\"markSelection\",4065,4065,0],[\"setHeadingDepth\",4070,4072,2],[\"markSelection\",4076,4081,1],[\"unifySelection\",4076,4081],[\"markSelection\",4070,4075,1],[\"unifySelection\",4070,4075],[\"markSelection\",4082,4090,1],[\"unifySelection\",4082,4090],[\"markSelection\",4091,4094,1],[\"unifySelection\",4091,4094],[\"markSelection\",4095,4104,1],[\"unifySelection\",4095,4104],[\"markSelection\",4105,4108,1],[\"unifySelection\",4105,4108],[\"markSelection\",4109,4117,1],[\"unifySelection\",4109,4117],[\"markSelection\",4118,4130,1],[\"unifySelection\",4118,4130],[\"markSelection\",4131,4137,1],[\"unifySelection\",4131,4137],[\"markSelection\",4138,4144,1],[\"markSelection\",4138,4144,0],[\"setHeadingDepth\",4193,4208,2],[\"setHeadingDepth\",4253,4254,3],[\"setHeadingDepth\",4294,4300,1],[\"markSelection\",4343,4378,1],[\"unifySelection\",4343,4378],[\"unifySelection\",4379,4422],[\"markSelection\",4379,4422,1],[\"markSelection\",4423,4466,1],[\"unifySelection\",4423,4466],[\"markSelection\",4469,4522,1],[\"unifySelection\",4469,4522],[\"setHeadingDepth\",4526,4529,2],[\"markSelection\",4526,4549,1],[\"unifySelection\",4526,4549],[\"markSelection\",4550,4574,1],[\"unifySelection\",4550,4574],[\"splitSelection\",4550,4574],[\"unifySelection\",4551,4570],[\"unifySelection\",4571,4596],[\"setHeadingDepth\",4614,4615,2],[\"setHeadingDepth\",4619,4622,1],[\"setHeadingDepth\",4623,4634,2],[\"markSelection\",4623,4637,1],[\"unifySelection\",4623,4637],[\"markSelection\",4638,4672,1],[\"unifySelection\",4638,4672],[\"markSelection\",4673,4679,1],[\"unifySelection\",4673,4679],[\"markSelection\",4680,4683,1],[\"unifySelection\",4680,4683],[\"setHeadingDepth\",4684,4687,1],[\"setHeadingDepth\",4731,4734,1],[\"setHeadingDepth\",4908,4915,1],[\"markSelection\",4908,4925,1],[\"unifySelection\",4908,4925],[\"setHeadingDepth\",4908,4925,0],[\"splitSelection\",4908,4925],[\"markSelection\",4910,4925,1],[\"unifySelection\",4910,4925],[\"setHeadingDepth\",4909,4909,1],[\"setHeadingDepth\",4909,4909,1],[\"markSelection\",4909,4909,2],[\"setHeadingDepth\",4956,4957,2],[\"setHeadingDepth\",4984,5001,1],[\"setHeadingDepth\",5002,5004,2],[\"setHeadingDepth\",5033,5034,1],[\"setHeadingDepth\",5033,5034,3],[\"markSelection\",5053,5054,0],[\"setHeadingDepth\",5058,5059,2],[\"setHeadingDepth\",5060,5062,3],[\"setHeadingDepth\",5099,5100,2],[\"unifySelection\",5099,5103],[\"setHeadingDepth\",5099,5103,2],[\"unifySelection\",5117,5122],[\"setHeadingDepth\",5145,5148,1],[\"setHeadingDepth\",5218,5219,2],[\"setHeadingDepth\",5402,5406,1],[\"setHeadingDepth\",5407,5411,2],[\"setHeadingDepth\",5430,5431,3],[\"setHeadingDepth\",5523,5524,2],[\"setHeadingDepth\",5573,5574,3],[\"setHeadingDepth\",5600,5604,2],[\"setHeadingDepth\",5677,5680,1],[\"setHeadingDepth\",5668,5671,1],[\"setHeadingDepth\",3247,3248,2],[\"setHeadingDepth\",3257,3260,1],[\"setHeadingDepth\",3261,3262,2],[\"setHeadingDepth\",3273,3275,3],[\"setHeadingDepth\",3317,3323,2],[\"setHeadingDepth\",3549,3553,1],[\"setHeadingDepth\",3562,3565,2],[\"setHeadingDepth\",3635,3640,1],[\"setHeadingDepth\",3641,3642,2],[\"setHeadingDepth\",3688,3691,1],[\"setHeadingDepth\",3692,3693,2],[\"setHeadingDepth\",3734,3737,1]]");
;// CONCATENATED MODULE: ./src/units-importer/GnuUnitsCategorizeHelperMain.ts




if (typeof window !== "undefined")
    init(definitions_units, gnu_units_categorize_steps_namespaceObject);

})();

/******/ })()
;
//# sourceMappingURL=categorizeHelper.3b27e6b358934a6d40bb.js.map