!function(e){function r(e,r,o){return 4===arguments.length?t.apply(this,arguments):void n(e,{declarative:!0,deps:r,declare:o})}function t(e,r,t,o){n(e,{declarative:!1,deps:r,executingRequire:t,execute:o})}function n(e,r){r.name=e,e in p||(p[e]=r),r.normalizedDeps=r.deps}function o(e,r){if(r[e.groupIndex]=r[e.groupIndex]||[],-1==v.call(r[e.groupIndex],e)){r[e.groupIndex].push(e);for(var t=0,n=e.normalizedDeps.length;n>t;t++){var a=e.normalizedDeps[t],u=p[a];if(u&&!u.evaluated){var d=e.groupIndex+(u.declarative!=e.declarative);if(void 0===u.groupIndex||u.groupIndex<d){if(void 0!==u.groupIndex&&(r[u.groupIndex].splice(v.call(r[u.groupIndex],u),1),0==r[u.groupIndex].length))throw new TypeError("Mixed dependency cycle detected");u.groupIndex=d}o(u,r)}}}}function a(e){var r=p[e];r.groupIndex=0;var t=[];o(r,t);for(var n=!!r.declarative==t.length%2,a=t.length-1;a>=0;a--){for(var u=t[a],i=0;i<u.length;i++){var s=u[i];n?d(s):l(s)}n=!n}}function u(e){return x[e]||(x[e]={name:e,dependencies:[],exports:{},importers:[]})}function d(r){if(!r.module){var t=r.module=u(r.name),n=r.module.exports,o=r.declare.call(e,function(e,r){if(t.locked=!0,"object"==typeof e)for(var o in e)n[o]=e[o];else n[e]=r;for(var a=0,u=t.importers.length;u>a;a++){var d=t.importers[a];if(!d.locked)for(var i=0;i<d.dependencies.length;++i)d.dependencies[i]===t&&d.setters[i](n)}return t.locked=!1,r},r.name);t.setters=o.setters,t.execute=o.execute;for(var a=0,i=r.normalizedDeps.length;i>a;a++){var l,s=r.normalizedDeps[a],c=p[s],v=x[s];v?l=v.exports:c&&!c.declarative?l=c.esModule:c?(d(c),v=c.module,l=v.exports):l=f(s),v&&v.importers?(v.importers.push(t),t.dependencies.push(v)):t.dependencies.push(null),t.setters[a]&&t.setters[a](l)}}}function i(e){var r,t=p[e];if(t)t.declarative?c(e,[]):t.evaluated||l(t),r=t.module.exports;else if(r=f(e),!r)throw new Error("Unable to load dependency "+e+".");return(!t||t.declarative)&&r&&r.__useDefault?r["default"]:r}function l(r){if(!r.module){var t={},n=r.module={exports:t,id:r.name};if(!r.executingRequire)for(var o=0,a=r.normalizedDeps.length;a>o;o++){var u=r.normalizedDeps[o],d=p[u];d&&l(d)}r.evaluated=!0;var c=r.execute.call(e,function(e){for(var t=0,n=r.deps.length;n>t;t++)if(r.deps[t]==e)return i(r.normalizedDeps[t]);throw new TypeError("Module "+e+" not declared as a dependency.")},t,n);c&&(n.exports=c),t=n.exports,t&&t.__esModule?r.esModule=t:r.esModule=s(t)}}function s(r){if(r===e)return r;var t={};if("object"==typeof r||"function"==typeof r)if(g){var n;for(var o in r)(n=Object.getOwnPropertyDescriptor(r,o))&&h(t,o,n)}else{var a=r&&r.hasOwnProperty;for(var o in r)(!a||r.hasOwnProperty(o))&&(t[o]=r[o])}return t["default"]=r,h(t,"__useDefault",{value:!0}),t}function c(r,t){var n=p[r];if(n&&!n.evaluated&&n.declarative){t.push(r);for(var o=0,a=n.normalizedDeps.length;a>o;o++){var u=n.normalizedDeps[o];-1==v.call(t,u)&&(p[u]?c(u,t):f(u))}n.evaluated||(n.evaluated=!0,n.module.execute.call(e))}}function f(e){if(D[e])return D[e];if("@node/"==e.substr(0,6))return y(e.substr(6));var r=p[e];if(!r)throw"Module "+e+" not present.";return a(e),c(e,[]),p[e]=void 0,r.declarative&&h(r.module.exports,"__esModule",{value:!0}),D[e]=r.declarative?r.module.exports:r.esModule}var p={},v=Array.prototype.indexOf||function(e){for(var r=0,t=this.length;t>r;r++)if(this[r]===e)return r;return-1},g=!0;try{Object.getOwnPropertyDescriptor({a:0},"a")}catch(m){g=!1}var h;!function(){try{Object.defineProperty({},"a",{})&&(h=Object.defineProperty)}catch(e){h=function(e,r,t){try{e[r]=t.value||t.get.call(e)}catch(n){}}}}();var x={},y="undefined"!=typeof System&&System._nodeRequire||"undefined"!=typeof require&&require.resolve&&"undefined"!=typeof process&&require,D={"@empty":{}};return function(e,n,o){return function(a){a(function(a){for(var u={_nodeRequire:y,register:r,registerDynamic:t,get:f,set:function(e,r){D[e]=r},newModule:function(e){return e}},d=0;d<n.length;d++)(function(e,r){r&&r.__esModule?D[e]=r:D[e]=s(r)})(n[d],arguments[d]);o(u);var i=f(e[0]);if(e.length>1)for(var d=1;d<e.length;d++)f(e[d]);return i.__useDefault?i["default"]:i})}}}("undefined"!=typeof self?self:global)

(["1","1"], [], function($__System) {

!function(e){function n(e,n){e=e.replace(l,"");var r=e.match(u),t=(r[1].split(",")[n]||"require").replace(s,""),i=p[t]||(p[t]=new RegExp(a+t+f,"g"));i.lastIndex=0;for(var o,c=[];o=i.exec(e);)c.push(o[2]||o[3]);return c}function r(e,n,t,o){if("object"==typeof e&&!(e instanceof Array))return r.apply(null,Array.prototype.splice.call(arguments,1,arguments.length-1));if("string"==typeof e&&"function"==typeof n&&(e=[e]),!(e instanceof Array)){if("string"==typeof e){var l=i.get(e);return l.__useDefault?l["default"]:l}throw new TypeError("Invalid require")}for(var a=[],f=0;f<e.length;f++)a.push(i["import"](e[f],o));Promise.all(a).then(function(e){n&&n.apply(null,e)},t)}function t(t,l,a){"string"!=typeof t&&(a=l,l=t,t=null),l instanceof Array||(a=l,l=["require","exports","module"].splice(0,a.length)),"function"!=typeof a&&(a=function(e){return function(){return e}}(a)),void 0===l[l.length-1]&&l.pop();var f,u,s;-1!=(f=o.call(l,"require"))&&(l.splice(f,1),t||(l=l.concat(n(a.toString(),f)))),-1!=(u=o.call(l,"exports"))&&l.splice(u,1),-1!=(s=o.call(l,"module"))&&l.splice(s,1);var p={name:t,deps:l,execute:function(n,t,o){for(var p=[],c=0;c<l.length;c++)p.push(n(l[c]));o.uri=o.id,o.config=function(){},-1!=s&&p.splice(s,0,o),-1!=u&&p.splice(u,0,t),-1!=f&&p.splice(f,0,function(e,t,l){return"string"==typeof e&&"function"!=typeof t?n(e):r.call(i,e,t,l,o.id)});var d=a.apply(-1==u?e:t,p);return"undefined"==typeof d&&o&&(d=o.exports),"undefined"!=typeof d?d:void 0}};if(t)c.anonDefine||c.isBundle?c.anonDefine&&c.anonDefine.name&&(c.anonDefine=null):c.anonDefine=p,c.isBundle=!0,i.registerDynamic(p.name,p.deps,!1,p.execute);else{if(c.anonDefine&&!c.anonDefine.name)throw new Error("Multiple anonymous defines in module "+t);c.anonDefine=p}}var i=$__System,o=Array.prototype.indexOf||function(e){for(var n=0,r=this.length;r>n;n++)if(this[n]===e)return n;return-1},l=/(\/\*([\s\S]*?)\*\/|([^:]|^)\/\/(.*)$)/gm,a="(?:^|[^$_a-zA-Z\\xA0-\\uFFFF.])",f="\\s*\\(\\s*(\"([^\"]+)\"|'([^']+)')\\s*\\)",u=/\(([^\)]*)\)/,s=/^\s+|\s+$/g,p={};t.amd={};var c={isBundle:!1,anonDefine:null};i.amdDefine=t,i.amdRequire=r}("undefined"!=typeof self?self:global);
$__System.registerDynamic("2", ["3"], true, function($__require, exports, module) {
  "use strict";
  var process = $__require("3");
  var define,
      global = this,
      GLOBAL = this;
  var ReactServerBatchingStrategy = {
    isBatchingUpdates: false,
    batchedUpdates: function(callback) {}
  };
  module.exports = ReactServerBatchingStrategy;
  return module.exports;
});

$__System.registerDynamic("4", ["5", "6", "7", "8", "9", "3"], true, function($__require, exports, module) {
  "use strict";
  var process = $__require("3");
  var define,
      global = this,
      GLOBAL = this;
  var PooledClass = $__require('5');
  var CallbackQueue = $__require('6');
  var Transaction = $__require('7');
  var assign = $__require('8');
  var emptyFunction = $__require('9');
  var ON_DOM_READY_QUEUEING = {
    initialize: function() {
      this.reactMountReady.reset();
    },
    close: emptyFunction
  };
  var TRANSACTION_WRAPPERS = [ON_DOM_READY_QUEUEING];
  function ReactServerRenderingTransaction(renderToStaticMarkup) {
    this.reinitializeTransaction();
    this.renderToStaticMarkup = renderToStaticMarkup;
    this.reactMountReady = CallbackQueue.getPooled(null);
    this.useCreateElement = false;
  }
  var Mixin = {
    getTransactionWrappers: function() {
      return TRANSACTION_WRAPPERS;
    },
    getReactMountReady: function() {
      return this.reactMountReady;
    },
    destructor: function() {
      CallbackQueue.release(this.reactMountReady);
      this.reactMountReady = null;
    }
  };
  assign(ReactServerRenderingTransaction.prototype, Transaction.Mixin, Mixin);
  PooledClass.addPoolingTo(ReactServerRenderingTransaction);
  module.exports = ReactServerRenderingTransaction;
  return module.exports;
});

$__System.registerDynamic("a", ["b", "c", "d", "e", "2", "4", "f", "11", "10", "12", "3"], true, function($__require, exports, module) {
  "use strict";
  var process = $__require("3");
  var define,
      global = this,
      GLOBAL = this;
  var ReactDefaultBatchingStrategy = $__require('b');
  var ReactElement = $__require('c');
  var ReactInstanceHandles = $__require('d');
  var ReactMarkupChecksum = $__require('e');
  var ReactServerBatchingStrategy = $__require('2');
  var ReactServerRenderingTransaction = $__require('4');
  var ReactUpdates = $__require('f');
  var emptyObject = $__require('11');
  var instantiateReactComponent = $__require('10');
  var invariant = $__require('12');
  function renderToString(element) {
    !ReactElement.isValidElement(element) ? process.env.NODE_ENV !== 'production' ? invariant(false, 'renderToString(): You must pass a valid ReactElement.') : invariant(false) : undefined;
    var transaction;
    try {
      ReactUpdates.injection.injectBatchingStrategy(ReactServerBatchingStrategy);
      var id = ReactInstanceHandles.createReactRootID();
      transaction = ReactServerRenderingTransaction.getPooled(false);
      return transaction.perform(function() {
        var componentInstance = instantiateReactComponent(element, null);
        var markup = componentInstance.mountComponent(id, transaction, emptyObject);
        return ReactMarkupChecksum.addChecksumToMarkup(markup);
      }, null);
    } finally {
      ReactServerRenderingTransaction.release(transaction);
      ReactUpdates.injection.injectBatchingStrategy(ReactDefaultBatchingStrategy);
    }
  }
  function renderToStaticMarkup(element) {
    !ReactElement.isValidElement(element) ? process.env.NODE_ENV !== 'production' ? invariant(false, 'renderToStaticMarkup(): You must pass a valid ReactElement.') : invariant(false) : undefined;
    var transaction;
    try {
      ReactUpdates.injection.injectBatchingStrategy(ReactServerBatchingStrategy);
      var id = ReactInstanceHandles.createReactRootID();
      transaction = ReactServerRenderingTransaction.getPooled(true);
      return transaction.perform(function() {
        var componentInstance = instantiateReactComponent(element, null);
        return componentInstance.mountComponent(id, transaction, emptyObject);
      }, null);
    } finally {
      ReactServerRenderingTransaction.release(transaction);
      ReactUpdates.injection.injectBatchingStrategy(ReactDefaultBatchingStrategy);
    }
  }
  module.exports = {
    renderToString: renderToString,
    renderToStaticMarkup: renderToStaticMarkup
  };
  return module.exports;
});

$__System.registerDynamic("13", ["14", "a", "15", "3"], true, function($__require, exports, module) {
  "use strict";
  var process = $__require("3");
  var define,
      global = this,
      GLOBAL = this;
  var ReactDefaultInjection = $__require('14');
  var ReactServerRendering = $__require('a');
  var ReactVersion = $__require('15');
  ReactDefaultInjection.inject();
  var ReactDOMServer = {
    renderToString: ReactServerRendering.renderToString,
    renderToStaticMarkup: ReactServerRendering.renderToStaticMarkup,
    version: ReactVersion
  };
  module.exports = ReactDOMServer;
  return module.exports;
});

$__System.registerDynamic("16", ["3"], true, function($__require, exports, module) {
  "use strict";
  var process = $__require("3");
  var define,
      global = this,
      GLOBAL = this;
  var hasOwnProperty = Object.prototype.hasOwnProperty;
  function mapObject(object, callback, context) {
    if (!object) {
      return null;
    }
    var result = {};
    for (var name in object) {
      if (hasOwnProperty.call(object, name)) {
        result[name] = callback.call(context, object[name], name, object);
      }
    }
    return result;
  }
  module.exports = mapObject;
  return module.exports;
});

$__System.registerDynamic("17", ["c", "18", "16", "3"], true, function($__require, exports, module) {
  "use strict";
  var process = $__require("3");
  var define,
      global = this,
      GLOBAL = this;
  var ReactElement = $__require('c');
  var ReactElementValidator = $__require('18');
  var mapObject = $__require('16');
  function createDOMFactory(tag) {
    if (process.env.NODE_ENV !== 'production') {
      return ReactElementValidator.createFactory(tag);
    }
    return ReactElement.createFactory(tag);
  }
  var ReactDOMFactories = mapObject({
    a: 'a',
    abbr: 'abbr',
    address: 'address',
    area: 'area',
    article: 'article',
    aside: 'aside',
    audio: 'audio',
    b: 'b',
    base: 'base',
    bdi: 'bdi',
    bdo: 'bdo',
    big: 'big',
    blockquote: 'blockquote',
    body: 'body',
    br: 'br',
    button: 'button',
    canvas: 'canvas',
    caption: 'caption',
    cite: 'cite',
    code: 'code',
    col: 'col',
    colgroup: 'colgroup',
    data: 'data',
    datalist: 'datalist',
    dd: 'dd',
    del: 'del',
    details: 'details',
    dfn: 'dfn',
    dialog: 'dialog',
    div: 'div',
    dl: 'dl',
    dt: 'dt',
    em: 'em',
    embed: 'embed',
    fieldset: 'fieldset',
    figcaption: 'figcaption',
    figure: 'figure',
    footer: 'footer',
    form: 'form',
    h1: 'h1',
    h2: 'h2',
    h3: 'h3',
    h4: 'h4',
    h5: 'h5',
    h6: 'h6',
    head: 'head',
    header: 'header',
    hgroup: 'hgroup',
    hr: 'hr',
    html: 'html',
    i: 'i',
    iframe: 'iframe',
    img: 'img',
    input: 'input',
    ins: 'ins',
    kbd: 'kbd',
    keygen: 'keygen',
    label: 'label',
    legend: 'legend',
    li: 'li',
    link: 'link',
    main: 'main',
    map: 'map',
    mark: 'mark',
    menu: 'menu',
    menuitem: 'menuitem',
    meta: 'meta',
    meter: 'meter',
    nav: 'nav',
    noscript: 'noscript',
    object: 'object',
    ol: 'ol',
    optgroup: 'optgroup',
    option: 'option',
    output: 'output',
    p: 'p',
    param: 'param',
    picture: 'picture',
    pre: 'pre',
    progress: 'progress',
    q: 'q',
    rp: 'rp',
    rt: 'rt',
    ruby: 'ruby',
    s: 's',
    samp: 'samp',
    script: 'script',
    section: 'section',
    select: 'select',
    small: 'small',
    source: 'source',
    span: 'span',
    strong: 'strong',
    style: 'style',
    sub: 'sub',
    summary: 'summary',
    sup: 'sup',
    table: 'table',
    tbody: 'tbody',
    td: 'td',
    textarea: 'textarea',
    tfoot: 'tfoot',
    th: 'th',
    thead: 'thead',
    time: 'time',
    title: 'title',
    tr: 'tr',
    track: 'track',
    u: 'u',
    ul: 'ul',
    'var': 'var',
    video: 'video',
    wbr: 'wbr',
    circle: 'circle',
    clipPath: 'clipPath',
    defs: 'defs',
    ellipse: 'ellipse',
    g: 'g',
    image: 'image',
    line: 'line',
    linearGradient: 'linearGradient',
    mask: 'mask',
    path: 'path',
    pattern: 'pattern',
    polygon: 'polygon',
    polyline: 'polyline',
    radialGradient: 'radialGradient',
    rect: 'rect',
    stop: 'stop',
    svg: 'svg',
    text: 'text',
    tspan: 'tspan'
  }, createDOMFactory);
  module.exports = ReactDOMFactories;
  return module.exports;
});

$__System.registerDynamic("18", ["c", "19", "1a", "1b", "1c", "1d", "12", "1e", "3"], true, function($__require, exports, module) {
  "use strict";
  var process = $__require("3");
  var define,
      global = this,
      GLOBAL = this;
  var ReactElement = $__require('c');
  var ReactPropTypeLocations = $__require('19');
  var ReactPropTypeLocationNames = $__require('1a');
  var ReactCurrentOwner = $__require('1b');
  var canDefineProperty = $__require('1c');
  var getIteratorFn = $__require('1d');
  var invariant = $__require('12');
  var warning = $__require('1e');
  function getDeclarationErrorAddendum() {
    if (ReactCurrentOwner.current) {
      var name = ReactCurrentOwner.current.getName();
      if (name) {
        return ' Check the render method of `' + name + '`.';
      }
    }
    return '';
  }
  var ownerHasKeyUseWarning = {};
  var loggedTypeFailures = {};
  function validateExplicitKey(element, parentType) {
    if (!element._store || element._store.validated || element.key != null) {
      return;
    }
    element._store.validated = true;
    var addenda = getAddendaForKeyUse('uniqueKey', element, parentType);
    if (addenda === null) {
      return;
    }
    process.env.NODE_ENV !== 'production' ? warning(false, 'Each child in an array or iterator should have a unique "key" prop.' + '%s%s%s', addenda.parentOrOwner || '', addenda.childOwner || '', addenda.url || '') : undefined;
  }
  function getAddendaForKeyUse(messageType, element, parentType) {
    var addendum = getDeclarationErrorAddendum();
    if (!addendum) {
      var parentName = typeof parentType === 'string' ? parentType : parentType.displayName || parentType.name;
      if (parentName) {
        addendum = ' Check the top-level render call using <' + parentName + '>.';
      }
    }
    var memoizer = ownerHasKeyUseWarning[messageType] || (ownerHasKeyUseWarning[messageType] = {});
    if (memoizer[addendum]) {
      return null;
    }
    memoizer[addendum] = true;
    var addenda = {
      parentOrOwner: addendum,
      url: ' See https://fb.me/react-warning-keys for more information.',
      childOwner: null
    };
    if (element && element._owner && element._owner !== ReactCurrentOwner.current) {
      addenda.childOwner = ' It was passed a child from ' + element._owner.getName() + '.';
    }
    return addenda;
  }
  function validateChildKeys(node, parentType) {
    if (typeof node !== 'object') {
      return;
    }
    if (Array.isArray(node)) {
      for (var i = 0; i < node.length; i++) {
        var child = node[i];
        if (ReactElement.isValidElement(child)) {
          validateExplicitKey(child, parentType);
        }
      }
    } else if (ReactElement.isValidElement(node)) {
      if (node._store) {
        node._store.validated = true;
      }
    } else if (node) {
      var iteratorFn = getIteratorFn(node);
      if (iteratorFn) {
        if (iteratorFn !== node.entries) {
          var iterator = iteratorFn.call(node);
          var step;
          while (!(step = iterator.next()).done) {
            if (ReactElement.isValidElement(step.value)) {
              validateExplicitKey(step.value, parentType);
            }
          }
        }
      }
    }
  }
  function checkPropTypes(componentName, propTypes, props, location) {
    for (var propName in propTypes) {
      if (propTypes.hasOwnProperty(propName)) {
        var error;
        try {
          !(typeof propTypes[propName] === 'function') ? process.env.NODE_ENV !== 'production' ? invariant(false, '%s: %s type `%s` is invalid; it must be a function, usually from ' + 'React.PropTypes.', componentName || 'React class', ReactPropTypeLocationNames[location], propName) : invariant(false) : undefined;
          error = propTypes[propName](props, propName, componentName, location);
        } catch (ex) {
          error = ex;
        }
        process.env.NODE_ENV !== 'production' ? warning(!error || error instanceof Error, '%s: type specification of %s `%s` is invalid; the type checker ' + 'function must return `null` or an `Error` but returned a %s. ' + 'You may have forgotten to pass an argument to the type checker ' + 'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' + 'shape all require an argument).', componentName || 'React class', ReactPropTypeLocationNames[location], propName, typeof error) : undefined;
        if (error instanceof Error && !(error.message in loggedTypeFailures)) {
          loggedTypeFailures[error.message] = true;
          var addendum = getDeclarationErrorAddendum();
          process.env.NODE_ENV !== 'production' ? warning(false, 'Failed propType: %s%s', error.message, addendum) : undefined;
        }
      }
    }
  }
  function validatePropTypes(element) {
    var componentClass = element.type;
    if (typeof componentClass !== 'function') {
      return;
    }
    var name = componentClass.displayName || componentClass.name;
    if (componentClass.propTypes) {
      checkPropTypes(name, componentClass.propTypes, element.props, ReactPropTypeLocations.prop);
    }
    if (typeof componentClass.getDefaultProps === 'function') {
      process.env.NODE_ENV !== 'production' ? warning(componentClass.getDefaultProps.isReactClassApproved, 'getDefaultProps is only used on classic React.createClass ' + 'definitions. Use a static property named `defaultProps` instead.') : undefined;
    }
  }
  var ReactElementValidator = {
    createElement: function(type, props, children) {
      var validType = typeof type === 'string' || typeof type === 'function';
      process.env.NODE_ENV !== 'production' ? warning(validType, 'React.createElement: type should not be null, undefined, boolean, or ' + 'number. It should be a string (for DOM elements) or a ReactClass ' + '(for composite components).%s', getDeclarationErrorAddendum()) : undefined;
      var element = ReactElement.createElement.apply(this, arguments);
      if (element == null) {
        return element;
      }
      if (validType) {
        for (var i = 2; i < arguments.length; i++) {
          validateChildKeys(arguments[i], type);
        }
      }
      validatePropTypes(element);
      return element;
    },
    createFactory: function(type) {
      var validatedFactory = ReactElementValidator.createElement.bind(null, type);
      validatedFactory.type = type;
      if (process.env.NODE_ENV !== 'production') {
        if (canDefineProperty) {
          Object.defineProperty(validatedFactory, 'type', {
            enumerable: false,
            get: function() {
              process.env.NODE_ENV !== 'production' ? warning(false, 'Factory.type is deprecated. Access the class directly ' + 'before passing it to createFactory.') : undefined;
              Object.defineProperty(this, 'type', {value: type});
              return type;
            }
          });
        }
      }
      return validatedFactory;
    },
    cloneElement: function(element, props, children) {
      var newElement = ReactElement.cloneElement.apply(this, arguments);
      for (var i = 2; i < arguments.length; i++) {
        validateChildKeys(arguments[i], newElement.type);
      }
      validatePropTypes(newElement);
      return newElement;
    }
  };
  module.exports = ReactElementValidator;
  return module.exports;
});

$__System.registerDynamic("1f", ["c", "12", "3"], true, function($__require, exports, module) {
  "use strict";
  var process = $__require("3");
  var define,
      global = this,
      GLOBAL = this;
  var ReactElement = $__require('c');
  var invariant = $__require('12');
  function onlyChild(children) {
    !ReactElement.isValidElement(children) ? process.env.NODE_ENV !== 'production' ? invariant(false, 'onlyChild must be passed a children with exactly one child.') : invariant(false) : undefined;
    return children;
  }
  module.exports = onlyChild;
  return module.exports;
});

$__System.registerDynamic("20", ["21", "22", "23", "17", "c", "18", "24", "15", "8", "1f", "3"], true, function($__require, exports, module) {
  "use strict";
  var process = $__require("3");
  var define,
      global = this,
      GLOBAL = this;
  var ReactChildren = $__require('21');
  var ReactComponent = $__require('22');
  var ReactClass = $__require('23');
  var ReactDOMFactories = $__require('17');
  var ReactElement = $__require('c');
  var ReactElementValidator = $__require('18');
  var ReactPropTypes = $__require('24');
  var ReactVersion = $__require('15');
  var assign = $__require('8');
  var onlyChild = $__require('1f');
  var createElement = ReactElement.createElement;
  var createFactory = ReactElement.createFactory;
  var cloneElement = ReactElement.cloneElement;
  if (process.env.NODE_ENV !== 'production') {
    createElement = ReactElementValidator.createElement;
    createFactory = ReactElementValidator.createFactory;
    cloneElement = ReactElementValidator.cloneElement;
  }
  var React = {
    Children: {
      map: ReactChildren.map,
      forEach: ReactChildren.forEach,
      count: ReactChildren.count,
      toArray: ReactChildren.toArray,
      only: onlyChild
    },
    Component: ReactComponent,
    createElement: createElement,
    cloneElement: cloneElement,
    isValidElement: ReactElement.isValidElement,
    PropTypes: ReactPropTypes,
    createClass: ReactClass.createClass,
    createFactory: createFactory,
    createMixin: function(mixin) {
      return mixin;
    },
    DOM: ReactDOMFactories,
    version: ReactVersion,
    __spread: assign
  };
  module.exports = React;
  return module.exports;
});

$__System.registerDynamic("25", ["8", "1e", "3"], true, function($__require, exports, module) {
  "use strict";
  var process = $__require("3");
  var define,
      global = this,
      GLOBAL = this;
  var assign = $__require('8');
  var warning = $__require('1e');
  function deprecated(fnName, newModule, newPackage, ctx, fn) {
    var warned = false;
    if (process.env.NODE_ENV !== 'production') {
      var newFn = function() {
        process.env.NODE_ENV !== 'production' ? warning(warned, 'React.%s is deprecated. Please use %s.%s from require' + '(\'%s\') ' + 'instead.', fnName, newModule, fnName, newPackage) : undefined;
        warned = true;
        return fn.apply(ctx, arguments);
      };
      return assign(newFn, fn);
    }
    return fn;
  }
  module.exports = deprecated;
  return module.exports;
});

$__System.registerDynamic("26", ["27", "13", "20", "8", "25", "3"], true, function($__require, exports, module) {
  "use strict";
  var process = $__require("3");
  var define,
      global = this,
      GLOBAL = this;
  var ReactDOM = $__require('27');
  var ReactDOMServer = $__require('13');
  var ReactIsomorphic = $__require('20');
  var assign = $__require('8');
  var deprecated = $__require('25');
  var React = {};
  assign(React, ReactIsomorphic);
  assign(React, {
    findDOMNode: deprecated('findDOMNode', 'ReactDOM', 'react-dom', ReactDOM, ReactDOM.findDOMNode),
    render: deprecated('render', 'ReactDOM', 'react-dom', ReactDOM, ReactDOM.render),
    unmountComponentAtNode: deprecated('unmountComponentAtNode', 'ReactDOM', 'react-dom', ReactDOM, ReactDOM.unmountComponentAtNode),
    renderToString: deprecated('renderToString', 'ReactDOMServer', 'react-dom/server', ReactDOMServer, ReactDOMServer.renderToString),
    renderToStaticMarkup: deprecated('renderToStaticMarkup', 'ReactDOMServer', 'react-dom/server', ReactDOMServer, ReactDOMServer.renderToStaticMarkup)
  });
  React.__SECRET_DOM_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = ReactDOM;
  React.__SECRET_DOM_SERVER_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = ReactDOMServer;
  module.exports = React;
  return module.exports;
});

$__System.registerDynamic("28", ["26", "3"], true, function($__require, exports, module) {
  "use strict";
  var process = $__require("3");
  var define,
      global = this,
      GLOBAL = this;
  module.exports = $__require('26');
  return module.exports;
});

$__System.registerDynamic("29", ["3"], true, function($__require, exports, module) {
  var process = $__require("3");
  var define,
      global = this,
      GLOBAL = this;
  var LZString = (function() {
    var f = String.fromCharCode;
    var keyStrBase64 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
    var keyStrUriSafe = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+-$";
    var baseReverseDic = {};
    function getBaseValue(alphabet, character) {
      if (!baseReverseDic[alphabet]) {
        baseReverseDic[alphabet] = {};
        for (var i = 0; i < alphabet.length; i++) {
          baseReverseDic[alphabet][alphabet.charAt(i)] = i;
        }
      }
      return baseReverseDic[alphabet][character];
    }
    var LZString = {
      compressToBase64: function(input) {
        if (input == null)
          return "";
        var res = LZString._compress(input, 6, function(a) {
          return keyStrBase64.charAt(a);
        });
        switch (res.length % 4) {
          default:
          case 0:
            return res;
          case 1:
            return res + "===";
          case 2:
            return res + "==";
          case 3:
            return res + "=";
        }
      },
      decompressFromBase64: function(input) {
        if (input == null)
          return "";
        if (input == "")
          return null;
        return LZString._decompress(input.length, 32, function(index) {
          return getBaseValue(keyStrBase64, input.charAt(index));
        });
      },
      compressToUTF16: function(input) {
        if (input == null)
          return "";
        return LZString._compress(input, 15, function(a) {
          return f(a + 32);
        }) + " ";
      },
      decompressFromUTF16: function(compressed) {
        if (compressed == null)
          return "";
        if (compressed == "")
          return null;
        return LZString._decompress(compressed.length, 16384, function(index) {
          return compressed.charCodeAt(index) - 32;
        });
      },
      compressToUint8Array: function(uncompressed) {
        var compressed = LZString.compress(uncompressed);
        var buf = new Uint8Array(compressed.length * 2);
        for (var i = 0,
            TotalLen = compressed.length; i < TotalLen; i++) {
          var current_value = compressed.charCodeAt(i);
          buf[i * 2] = current_value >>> 8;
          buf[i * 2 + 1] = current_value % 256;
        }
        return buf;
      },
      decompressFromUint8Array: function(compressed) {
        if (compressed === null || compressed === undefined) {
          return LZString.decompress(compressed);
        } else {
          var buf = new Array(compressed.length / 2);
          for (var i = 0,
              TotalLen = buf.length; i < TotalLen; i++) {
            buf[i] = compressed[i * 2] * 256 + compressed[i * 2 + 1];
          }
          var result = [];
          buf.forEach(function(c) {
            result.push(f(c));
          });
          return LZString.decompress(result.join(''));
        }
      },
      compressToEncodedURIComponent: function(input) {
        if (input == null)
          return "";
        return LZString._compress(input, 6, function(a) {
          return keyStrUriSafe.charAt(a);
        });
      },
      decompressFromEncodedURIComponent: function(input) {
        if (input == null)
          return "";
        if (input == "")
          return null;
        input = input.replace(/ /g, "+");
        return LZString._decompress(input.length, 32, function(index) {
          return getBaseValue(keyStrUriSafe, input.charAt(index));
        });
      },
      compress: function(uncompressed) {
        return LZString._compress(uncompressed, 16, function(a) {
          return f(a);
        });
      },
      _compress: function(uncompressed, bitsPerChar, getCharFromInt) {
        if (uncompressed == null)
          return "";
        var i,
            value,
            context_dictionary = {},
            context_dictionaryToCreate = {},
            context_c = "",
            context_wc = "",
            context_w = "",
            context_enlargeIn = 2,
            context_dictSize = 3,
            context_numBits = 2,
            context_data = [],
            context_data_val = 0,
            context_data_position = 0,
            ii;
        for (ii = 0; ii < uncompressed.length; ii += 1) {
          context_c = uncompressed.charAt(ii);
          if (!Object.prototype.hasOwnProperty.call(context_dictionary, context_c)) {
            context_dictionary[context_c] = context_dictSize++;
            context_dictionaryToCreate[context_c] = true;
          }
          context_wc = context_w + context_c;
          if (Object.prototype.hasOwnProperty.call(context_dictionary, context_wc)) {
            context_w = context_wc;
          } else {
            if (Object.prototype.hasOwnProperty.call(context_dictionaryToCreate, context_w)) {
              if (context_w.charCodeAt(0) < 256) {
                for (i = 0; i < context_numBits; i++) {
                  context_data_val = (context_data_val << 1);
                  if (context_data_position == bitsPerChar - 1) {
                    context_data_position = 0;
                    context_data.push(getCharFromInt(context_data_val));
                    context_data_val = 0;
                  } else {
                    context_data_position++;
                  }
                }
                value = context_w.charCodeAt(0);
                for (i = 0; i < 8; i++) {
                  context_data_val = (context_data_val << 1) | (value & 1);
                  if (context_data_position == bitsPerChar - 1) {
                    context_data_position = 0;
                    context_data.push(getCharFromInt(context_data_val));
                    context_data_val = 0;
                  } else {
                    context_data_position++;
                  }
                  value = value >> 1;
                }
              } else {
                value = 1;
                for (i = 0; i < context_numBits; i++) {
                  context_data_val = (context_data_val << 1) | value;
                  if (context_data_position == bitsPerChar - 1) {
                    context_data_position = 0;
                    context_data.push(getCharFromInt(context_data_val));
                    context_data_val = 0;
                  } else {
                    context_data_position++;
                  }
                  value = 0;
                }
                value = context_w.charCodeAt(0);
                for (i = 0; i < 16; i++) {
                  context_data_val = (context_data_val << 1) | (value & 1);
                  if (context_data_position == bitsPerChar - 1) {
                    context_data_position = 0;
                    context_data.push(getCharFromInt(context_data_val));
                    context_data_val = 0;
                  } else {
                    context_data_position++;
                  }
                  value = value >> 1;
                }
              }
              context_enlargeIn--;
              if (context_enlargeIn == 0) {
                context_enlargeIn = Math.pow(2, context_numBits);
                context_numBits++;
              }
              delete context_dictionaryToCreate[context_w];
            } else {
              value = context_dictionary[context_w];
              for (i = 0; i < context_numBits; i++) {
                context_data_val = (context_data_val << 1) | (value & 1);
                if (context_data_position == bitsPerChar - 1) {
                  context_data_position = 0;
                  context_data.push(getCharFromInt(context_data_val));
                  context_data_val = 0;
                } else {
                  context_data_position++;
                }
                value = value >> 1;
              }
            }
            context_enlargeIn--;
            if (context_enlargeIn == 0) {
              context_enlargeIn = Math.pow(2, context_numBits);
              context_numBits++;
            }
            context_dictionary[context_wc] = context_dictSize++;
            context_w = String(context_c);
          }
        }
        if (context_w !== "") {
          if (Object.prototype.hasOwnProperty.call(context_dictionaryToCreate, context_w)) {
            if (context_w.charCodeAt(0) < 256) {
              for (i = 0; i < context_numBits; i++) {
                context_data_val = (context_data_val << 1);
                if (context_data_position == bitsPerChar - 1) {
                  context_data_position = 0;
                  context_data.push(getCharFromInt(context_data_val));
                  context_data_val = 0;
                } else {
                  context_data_position++;
                }
              }
              value = context_w.charCodeAt(0);
              for (i = 0; i < 8; i++) {
                context_data_val = (context_data_val << 1) | (value & 1);
                if (context_data_position == bitsPerChar - 1) {
                  context_data_position = 0;
                  context_data.push(getCharFromInt(context_data_val));
                  context_data_val = 0;
                } else {
                  context_data_position++;
                }
                value = value >> 1;
              }
            } else {
              value = 1;
              for (i = 0; i < context_numBits; i++) {
                context_data_val = (context_data_val << 1) | value;
                if (context_data_position == bitsPerChar - 1) {
                  context_data_position = 0;
                  context_data.push(getCharFromInt(context_data_val));
                  context_data_val = 0;
                } else {
                  context_data_position++;
                }
                value = 0;
              }
              value = context_w.charCodeAt(0);
              for (i = 0; i < 16; i++) {
                context_data_val = (context_data_val << 1) | (value & 1);
                if (context_data_position == bitsPerChar - 1) {
                  context_data_position = 0;
                  context_data.push(getCharFromInt(context_data_val));
                  context_data_val = 0;
                } else {
                  context_data_position++;
                }
                value = value >> 1;
              }
            }
            context_enlargeIn--;
            if (context_enlargeIn == 0) {
              context_enlargeIn = Math.pow(2, context_numBits);
              context_numBits++;
            }
            delete context_dictionaryToCreate[context_w];
          } else {
            value = context_dictionary[context_w];
            for (i = 0; i < context_numBits; i++) {
              context_data_val = (context_data_val << 1) | (value & 1);
              if (context_data_position == bitsPerChar - 1) {
                context_data_position = 0;
                context_data.push(getCharFromInt(context_data_val));
                context_data_val = 0;
              } else {
                context_data_position++;
              }
              value = value >> 1;
            }
          }
          context_enlargeIn--;
          if (context_enlargeIn == 0) {
            context_enlargeIn = Math.pow(2, context_numBits);
            context_numBits++;
          }
        }
        value = 2;
        for (i = 0; i < context_numBits; i++) {
          context_data_val = (context_data_val << 1) | (value & 1);
          if (context_data_position == bitsPerChar - 1) {
            context_data_position = 0;
            context_data.push(getCharFromInt(context_data_val));
            context_data_val = 0;
          } else {
            context_data_position++;
          }
          value = value >> 1;
        }
        while (true) {
          context_data_val = (context_data_val << 1);
          if (context_data_position == bitsPerChar - 1) {
            context_data.push(getCharFromInt(context_data_val));
            break;
          } else
            context_data_position++;
        }
        return context_data.join('');
      },
      decompress: function(compressed) {
        if (compressed == null)
          return "";
        if (compressed == "")
          return null;
        return LZString._decompress(compressed.length, 32768, function(index) {
          return compressed.charCodeAt(index);
        });
      },
      _decompress: function(length, resetValue, getNextValue) {
        var dictionary = [],
            next,
            enlargeIn = 4,
            dictSize = 4,
            numBits = 3,
            entry = "",
            result = [],
            i,
            w,
            bits,
            resb,
            maxpower,
            power,
            c,
            data = {
              val: getNextValue(0),
              position: resetValue,
              index: 1
            };
        for (i = 0; i < 3; i += 1) {
          dictionary[i] = i;
        }
        bits = 0;
        maxpower = Math.pow(2, 2);
        power = 1;
        while (power != maxpower) {
          resb = data.val & data.position;
          data.position >>= 1;
          if (data.position == 0) {
            data.position = resetValue;
            data.val = getNextValue(data.index++);
          }
          bits |= (resb > 0 ? 1 : 0) * power;
          power <<= 1;
        }
        switch (next = bits) {
          case 0:
            bits = 0;
            maxpower = Math.pow(2, 8);
            power = 1;
            while (power != maxpower) {
              resb = data.val & data.position;
              data.position >>= 1;
              if (data.position == 0) {
                data.position = resetValue;
                data.val = getNextValue(data.index++);
              }
              bits |= (resb > 0 ? 1 : 0) * power;
              power <<= 1;
            }
            c = f(bits);
            break;
          case 1:
            bits = 0;
            maxpower = Math.pow(2, 16);
            power = 1;
            while (power != maxpower) {
              resb = data.val & data.position;
              data.position >>= 1;
              if (data.position == 0) {
                data.position = resetValue;
                data.val = getNextValue(data.index++);
              }
              bits |= (resb > 0 ? 1 : 0) * power;
              power <<= 1;
            }
            c = f(bits);
            break;
          case 2:
            return "";
        }
        dictionary[3] = c;
        w = c;
        result.push(c);
        while (true) {
          if (data.index > length) {
            return "";
          }
          bits = 0;
          maxpower = Math.pow(2, numBits);
          power = 1;
          while (power != maxpower) {
            resb = data.val & data.position;
            data.position >>= 1;
            if (data.position == 0) {
              data.position = resetValue;
              data.val = getNextValue(data.index++);
            }
            bits |= (resb > 0 ? 1 : 0) * power;
            power <<= 1;
          }
          switch (c = bits) {
            case 0:
              bits = 0;
              maxpower = Math.pow(2, 8);
              power = 1;
              while (power != maxpower) {
                resb = data.val & data.position;
                data.position >>= 1;
                if (data.position == 0) {
                  data.position = resetValue;
                  data.val = getNextValue(data.index++);
                }
                bits |= (resb > 0 ? 1 : 0) * power;
                power <<= 1;
              }
              dictionary[dictSize++] = f(bits);
              c = dictSize - 1;
              enlargeIn--;
              break;
            case 1:
              bits = 0;
              maxpower = Math.pow(2, 16);
              power = 1;
              while (power != maxpower) {
                resb = data.val & data.position;
                data.position >>= 1;
                if (data.position == 0) {
                  data.position = resetValue;
                  data.val = getNextValue(data.index++);
                }
                bits |= (resb > 0 ? 1 : 0) * power;
                power <<= 1;
              }
              dictionary[dictSize++] = f(bits);
              c = dictSize - 1;
              enlargeIn--;
              break;
            case 2:
              return result.join('');
          }
          if (enlargeIn == 0) {
            enlargeIn = Math.pow(2, numBits);
            numBits++;
          }
          if (dictionary[c]) {
            entry = dictionary[c];
          } else {
            if (c === dictSize) {
              entry = w + w.charAt(0);
            } else {
              return null;
            }
          }
          result.push(entry);
          dictionary[dictSize++] = w + entry.charAt(0);
          enlargeIn--;
          w = entry;
          if (enlargeIn == 0) {
            enlargeIn = Math.pow(2, numBits);
            numBits++;
          }
        }
      }
    };
    return LZString;
  })();
  if (typeof define === 'function' && define.amd) {
    define(function() {
      return LZString;
    });
  } else if (typeof module !== 'undefined' && module != null) {
    module.exports = LZString;
  }
  return module.exports;
});

$__System.registerDynamic("2a", ["5", "8", "2b", "3"], true, function($__require, exports, module) {
  "use strict";
  var process = $__require("3");
  var define,
      global = this,
      GLOBAL = this;
  var PooledClass = $__require('5');
  var assign = $__require('8');
  var getTextContentAccessor = $__require('2b');
  function FallbackCompositionState(root) {
    this._root = root;
    this._startText = this.getText();
    this._fallbackText = null;
  }
  assign(FallbackCompositionState.prototype, {
    destructor: function() {
      this._root = null;
      this._startText = null;
      this._fallbackText = null;
    },
    getText: function() {
      if ('value' in this._root) {
        return this._root.value;
      }
      return this._root[getTextContentAccessor()];
    },
    getData: function() {
      if (this._fallbackText) {
        return this._fallbackText;
      }
      var start;
      var startValue = this._startText;
      var startLength = startValue.length;
      var end;
      var endValue = this.getText();
      var endLength = endValue.length;
      for (start = 0; start < startLength; start++) {
        if (startValue[start] !== endValue[start]) {
          break;
        }
      }
      var minEnd = startLength - start;
      for (end = 1; end <= minEnd; end++) {
        if (startValue[startLength - end] !== endValue[endLength - end]) {
          break;
        }
      }
      var sliceTail = end > 1 ? 1 - end : undefined;
      this._fallbackText = endValue.slice(start, sliceTail);
      return this._fallbackText;
    }
  });
  PooledClass.addPoolingTo(FallbackCompositionState);
  module.exports = FallbackCompositionState;
  return module.exports;
});

$__System.registerDynamic("2c", ["2d", "3"], true, function($__require, exports, module) {
  "use strict";
  var process = $__require("3");
  var define,
      global = this,
      GLOBAL = this;
  var SyntheticEvent = $__require('2d');
  var CompositionEventInterface = {data: null};
  function SyntheticCompositionEvent(dispatchConfig, dispatchMarker, nativeEvent, nativeEventTarget) {
    SyntheticEvent.call(this, dispatchConfig, dispatchMarker, nativeEvent, nativeEventTarget);
  }
  SyntheticEvent.augmentClass(SyntheticCompositionEvent, CompositionEventInterface);
  module.exports = SyntheticCompositionEvent;
  return module.exports;
});

$__System.registerDynamic("2e", ["2d", "3"], true, function($__require, exports, module) {
  "use strict";
  var process = $__require("3");
  var define,
      global = this,
      GLOBAL = this;
  var SyntheticEvent = $__require('2d');
  var InputEventInterface = {data: null};
  function SyntheticInputEvent(dispatchConfig, dispatchMarker, nativeEvent, nativeEventTarget) {
    SyntheticEvent.call(this, dispatchConfig, dispatchMarker, nativeEvent, nativeEventTarget);
  }
  SyntheticEvent.augmentClass(SyntheticInputEvent, InputEventInterface);
  module.exports = SyntheticInputEvent;
  return module.exports;
});

$__System.registerDynamic("2f", ["30", "31", "32", "2a", "2c", "2e", "33", "3"], true, function($__require, exports, module) {
  "use strict";
  var process = $__require("3");
  var define,
      global = this,
      GLOBAL = this;
  var EventConstants = $__require('30');
  var EventPropagators = $__require('31');
  var ExecutionEnvironment = $__require('32');
  var FallbackCompositionState = $__require('2a');
  var SyntheticCompositionEvent = $__require('2c');
  var SyntheticInputEvent = $__require('2e');
  var keyOf = $__require('33');
  var END_KEYCODES = [9, 13, 27, 32];
  var START_KEYCODE = 229;
  var canUseCompositionEvent = ExecutionEnvironment.canUseDOM && 'CompositionEvent' in window;
  var documentMode = null;
  if (ExecutionEnvironment.canUseDOM && 'documentMode' in document) {
    documentMode = document.documentMode;
  }
  var canUseTextInputEvent = ExecutionEnvironment.canUseDOM && 'TextEvent' in window && !documentMode && !isPresto();
  var useFallbackCompositionData = ExecutionEnvironment.canUseDOM && (!canUseCompositionEvent || documentMode && documentMode > 8 && documentMode <= 11);
  function isPresto() {
    var opera = window.opera;
    return typeof opera === 'object' && typeof opera.version === 'function' && parseInt(opera.version(), 10) <= 12;
  }
  var SPACEBAR_CODE = 32;
  var SPACEBAR_CHAR = String.fromCharCode(SPACEBAR_CODE);
  var topLevelTypes = EventConstants.topLevelTypes;
  var eventTypes = {
    beforeInput: {
      phasedRegistrationNames: {
        bubbled: keyOf({onBeforeInput: null}),
        captured: keyOf({onBeforeInputCapture: null})
      },
      dependencies: [topLevelTypes.topCompositionEnd, topLevelTypes.topKeyPress, topLevelTypes.topTextInput, topLevelTypes.topPaste]
    },
    compositionEnd: {
      phasedRegistrationNames: {
        bubbled: keyOf({onCompositionEnd: null}),
        captured: keyOf({onCompositionEndCapture: null})
      },
      dependencies: [topLevelTypes.topBlur, topLevelTypes.topCompositionEnd, topLevelTypes.topKeyDown, topLevelTypes.topKeyPress, topLevelTypes.topKeyUp, topLevelTypes.topMouseDown]
    },
    compositionStart: {
      phasedRegistrationNames: {
        bubbled: keyOf({onCompositionStart: null}),
        captured: keyOf({onCompositionStartCapture: null})
      },
      dependencies: [topLevelTypes.topBlur, topLevelTypes.topCompositionStart, topLevelTypes.topKeyDown, topLevelTypes.topKeyPress, topLevelTypes.topKeyUp, topLevelTypes.topMouseDown]
    },
    compositionUpdate: {
      phasedRegistrationNames: {
        bubbled: keyOf({onCompositionUpdate: null}),
        captured: keyOf({onCompositionUpdateCapture: null})
      },
      dependencies: [topLevelTypes.topBlur, topLevelTypes.topCompositionUpdate, topLevelTypes.topKeyDown, topLevelTypes.topKeyPress, topLevelTypes.topKeyUp, topLevelTypes.topMouseDown]
    }
  };
  var hasSpaceKeypress = false;
  function isKeypressCommand(nativeEvent) {
    return (nativeEvent.ctrlKey || nativeEvent.altKey || nativeEvent.metaKey) && !(nativeEvent.ctrlKey && nativeEvent.altKey);
  }
  function getCompositionEventType(topLevelType) {
    switch (topLevelType) {
      case topLevelTypes.topCompositionStart:
        return eventTypes.compositionStart;
      case topLevelTypes.topCompositionEnd:
        return eventTypes.compositionEnd;
      case topLevelTypes.topCompositionUpdate:
        return eventTypes.compositionUpdate;
    }
  }
  function isFallbackCompositionStart(topLevelType, nativeEvent) {
    return topLevelType === topLevelTypes.topKeyDown && nativeEvent.keyCode === START_KEYCODE;
  }
  function isFallbackCompositionEnd(topLevelType, nativeEvent) {
    switch (topLevelType) {
      case topLevelTypes.topKeyUp:
        return END_KEYCODES.indexOf(nativeEvent.keyCode) !== -1;
      case topLevelTypes.topKeyDown:
        return nativeEvent.keyCode !== START_KEYCODE;
      case topLevelTypes.topKeyPress:
      case topLevelTypes.topMouseDown:
      case topLevelTypes.topBlur:
        return true;
      default:
        return false;
    }
  }
  function getDataFromCustomEvent(nativeEvent) {
    var detail = nativeEvent.detail;
    if (typeof detail === 'object' && 'data' in detail) {
      return detail.data;
    }
    return null;
  }
  var currentComposition = null;
  function extractCompositionEvent(topLevelType, topLevelTarget, topLevelTargetID, nativeEvent, nativeEventTarget) {
    var eventType;
    var fallbackData;
    if (canUseCompositionEvent) {
      eventType = getCompositionEventType(topLevelType);
    } else if (!currentComposition) {
      if (isFallbackCompositionStart(topLevelType, nativeEvent)) {
        eventType = eventTypes.compositionStart;
      }
    } else if (isFallbackCompositionEnd(topLevelType, nativeEvent)) {
      eventType = eventTypes.compositionEnd;
    }
    if (!eventType) {
      return null;
    }
    if (useFallbackCompositionData) {
      if (!currentComposition && eventType === eventTypes.compositionStart) {
        currentComposition = FallbackCompositionState.getPooled(topLevelTarget);
      } else if (eventType === eventTypes.compositionEnd) {
        if (currentComposition) {
          fallbackData = currentComposition.getData();
        }
      }
    }
    var event = SyntheticCompositionEvent.getPooled(eventType, topLevelTargetID, nativeEvent, nativeEventTarget);
    if (fallbackData) {
      event.data = fallbackData;
    } else {
      var customData = getDataFromCustomEvent(nativeEvent);
      if (customData !== null) {
        event.data = customData;
      }
    }
    EventPropagators.accumulateTwoPhaseDispatches(event);
    return event;
  }
  function getNativeBeforeInputChars(topLevelType, nativeEvent) {
    switch (topLevelType) {
      case topLevelTypes.topCompositionEnd:
        return getDataFromCustomEvent(nativeEvent);
      case topLevelTypes.topKeyPress:
        var which = nativeEvent.which;
        if (which !== SPACEBAR_CODE) {
          return null;
        }
        hasSpaceKeypress = true;
        return SPACEBAR_CHAR;
      case topLevelTypes.topTextInput:
        var chars = nativeEvent.data;
        if (chars === SPACEBAR_CHAR && hasSpaceKeypress) {
          return null;
        }
        return chars;
      default:
        return null;
    }
  }
  function getFallbackBeforeInputChars(topLevelType, nativeEvent) {
    if (currentComposition) {
      if (topLevelType === topLevelTypes.topCompositionEnd || isFallbackCompositionEnd(topLevelType, nativeEvent)) {
        var chars = currentComposition.getData();
        FallbackCompositionState.release(currentComposition);
        currentComposition = null;
        return chars;
      }
      return null;
    }
    switch (topLevelType) {
      case topLevelTypes.topPaste:
        return null;
      case topLevelTypes.topKeyPress:
        if (nativeEvent.which && !isKeypressCommand(nativeEvent)) {
          return String.fromCharCode(nativeEvent.which);
        }
        return null;
      case topLevelTypes.topCompositionEnd:
        return useFallbackCompositionData ? null : nativeEvent.data;
      default:
        return null;
    }
  }
  function extractBeforeInputEvent(topLevelType, topLevelTarget, topLevelTargetID, nativeEvent, nativeEventTarget) {
    var chars;
    if (canUseTextInputEvent) {
      chars = getNativeBeforeInputChars(topLevelType, nativeEvent);
    } else {
      chars = getFallbackBeforeInputChars(topLevelType, nativeEvent);
    }
    if (!chars) {
      return null;
    }
    var event = SyntheticInputEvent.getPooled(eventTypes.beforeInput, topLevelTargetID, nativeEvent, nativeEventTarget);
    event.data = chars;
    EventPropagators.accumulateTwoPhaseDispatches(event);
    return event;
  }
  var BeforeInputEventPlugin = {
    eventTypes: eventTypes,
    extractEvents: function(topLevelType, topLevelTarget, topLevelTargetID, nativeEvent, nativeEventTarget) {
      return [extractCompositionEvent(topLevelType, topLevelTarget, topLevelTargetID, nativeEvent, nativeEventTarget), extractBeforeInputEvent(topLevelType, topLevelTarget, topLevelTargetID, nativeEvent, nativeEventTarget)];
    }
  };
  module.exports = BeforeInputEventPlugin;
  return module.exports;
});

$__System.registerDynamic("34", ["30", "35", "31", "32", "f", "2d", "36", "37", "38", "33", "3"], true, function($__require, exports, module) {
  "use strict";
  var process = $__require("3");
  var define,
      global = this,
      GLOBAL = this;
  var EventConstants = $__require('30');
  var EventPluginHub = $__require('35');
  var EventPropagators = $__require('31');
  var ExecutionEnvironment = $__require('32');
  var ReactUpdates = $__require('f');
  var SyntheticEvent = $__require('2d');
  var getEventTarget = $__require('36');
  var isEventSupported = $__require('37');
  var isTextInputElement = $__require('38');
  var keyOf = $__require('33');
  var topLevelTypes = EventConstants.topLevelTypes;
  var eventTypes = {change: {
      phasedRegistrationNames: {
        bubbled: keyOf({onChange: null}),
        captured: keyOf({onChangeCapture: null})
      },
      dependencies: [topLevelTypes.topBlur, topLevelTypes.topChange, topLevelTypes.topClick, topLevelTypes.topFocus, topLevelTypes.topInput, topLevelTypes.topKeyDown, topLevelTypes.topKeyUp, topLevelTypes.topSelectionChange]
    }};
  var activeElement = null;
  var activeElementID = null;
  var activeElementValue = null;
  var activeElementValueProp = null;
  function shouldUseChangeEvent(elem) {
    var nodeName = elem.nodeName && elem.nodeName.toLowerCase();
    return nodeName === 'select' || nodeName === 'input' && elem.type === 'file';
  }
  var doesChangeEventBubble = false;
  if (ExecutionEnvironment.canUseDOM) {
    doesChangeEventBubble = isEventSupported('change') && (!('documentMode' in document) || document.documentMode > 8);
  }
  function manualDispatchChangeEvent(nativeEvent) {
    var event = SyntheticEvent.getPooled(eventTypes.change, activeElementID, nativeEvent, getEventTarget(nativeEvent));
    EventPropagators.accumulateTwoPhaseDispatches(event);
    ReactUpdates.batchedUpdates(runEventInBatch, event);
  }
  function runEventInBatch(event) {
    EventPluginHub.enqueueEvents(event);
    EventPluginHub.processEventQueue(false);
  }
  function startWatchingForChangeEventIE8(target, targetID) {
    activeElement = target;
    activeElementID = targetID;
    activeElement.attachEvent('onchange', manualDispatchChangeEvent);
  }
  function stopWatchingForChangeEventIE8() {
    if (!activeElement) {
      return;
    }
    activeElement.detachEvent('onchange', manualDispatchChangeEvent);
    activeElement = null;
    activeElementID = null;
  }
  function getTargetIDForChangeEvent(topLevelType, topLevelTarget, topLevelTargetID) {
    if (topLevelType === topLevelTypes.topChange) {
      return topLevelTargetID;
    }
  }
  function handleEventsForChangeEventIE8(topLevelType, topLevelTarget, topLevelTargetID) {
    if (topLevelType === topLevelTypes.topFocus) {
      stopWatchingForChangeEventIE8();
      startWatchingForChangeEventIE8(topLevelTarget, topLevelTargetID);
    } else if (topLevelType === topLevelTypes.topBlur) {
      stopWatchingForChangeEventIE8();
    }
  }
  var isInputEventSupported = false;
  if (ExecutionEnvironment.canUseDOM) {
    isInputEventSupported = isEventSupported('input') && (!('documentMode' in document) || document.documentMode > 9);
  }
  var newValueProp = {
    get: function() {
      return activeElementValueProp.get.call(this);
    },
    set: function(val) {
      activeElementValue = '' + val;
      activeElementValueProp.set.call(this, val);
    }
  };
  function startWatchingForValueChange(target, targetID) {
    activeElement = target;
    activeElementID = targetID;
    activeElementValue = target.value;
    activeElementValueProp = Object.getOwnPropertyDescriptor(target.constructor.prototype, 'value');
    Object.defineProperty(activeElement, 'value', newValueProp);
    activeElement.attachEvent('onpropertychange', handlePropertyChange);
  }
  function stopWatchingForValueChange() {
    if (!activeElement) {
      return;
    }
    delete activeElement.value;
    activeElement.detachEvent('onpropertychange', handlePropertyChange);
    activeElement = null;
    activeElementID = null;
    activeElementValue = null;
    activeElementValueProp = null;
  }
  function handlePropertyChange(nativeEvent) {
    if (nativeEvent.propertyName !== 'value') {
      return;
    }
    var value = nativeEvent.srcElement.value;
    if (value === activeElementValue) {
      return;
    }
    activeElementValue = value;
    manualDispatchChangeEvent(nativeEvent);
  }
  function getTargetIDForInputEvent(topLevelType, topLevelTarget, topLevelTargetID) {
    if (topLevelType === topLevelTypes.topInput) {
      return topLevelTargetID;
    }
  }
  function handleEventsForInputEventIE(topLevelType, topLevelTarget, topLevelTargetID) {
    if (topLevelType === topLevelTypes.topFocus) {
      stopWatchingForValueChange();
      startWatchingForValueChange(topLevelTarget, topLevelTargetID);
    } else if (topLevelType === topLevelTypes.topBlur) {
      stopWatchingForValueChange();
    }
  }
  function getTargetIDForInputEventIE(topLevelType, topLevelTarget, topLevelTargetID) {
    if (topLevelType === topLevelTypes.topSelectionChange || topLevelType === topLevelTypes.topKeyUp || topLevelType === topLevelTypes.topKeyDown) {
      if (activeElement && activeElement.value !== activeElementValue) {
        activeElementValue = activeElement.value;
        return activeElementID;
      }
    }
  }
  function shouldUseClickEvent(elem) {
    return elem.nodeName && elem.nodeName.toLowerCase() === 'input' && (elem.type === 'checkbox' || elem.type === 'radio');
  }
  function getTargetIDForClickEvent(topLevelType, topLevelTarget, topLevelTargetID) {
    if (topLevelType === topLevelTypes.topClick) {
      return topLevelTargetID;
    }
  }
  var ChangeEventPlugin = {
    eventTypes: eventTypes,
    extractEvents: function(topLevelType, topLevelTarget, topLevelTargetID, nativeEvent, nativeEventTarget) {
      var getTargetIDFunc,
          handleEventFunc;
      if (shouldUseChangeEvent(topLevelTarget)) {
        if (doesChangeEventBubble) {
          getTargetIDFunc = getTargetIDForChangeEvent;
        } else {
          handleEventFunc = handleEventsForChangeEventIE8;
        }
      } else if (isTextInputElement(topLevelTarget)) {
        if (isInputEventSupported) {
          getTargetIDFunc = getTargetIDForInputEvent;
        } else {
          getTargetIDFunc = getTargetIDForInputEventIE;
          handleEventFunc = handleEventsForInputEventIE;
        }
      } else if (shouldUseClickEvent(topLevelTarget)) {
        getTargetIDFunc = getTargetIDForClickEvent;
      }
      if (getTargetIDFunc) {
        var targetID = getTargetIDFunc(topLevelType, topLevelTarget, topLevelTargetID);
        if (targetID) {
          var event = SyntheticEvent.getPooled(eventTypes.change, targetID, nativeEvent, nativeEventTarget);
          event.type = 'change';
          EventPropagators.accumulateTwoPhaseDispatches(event);
          return event;
        }
      }
      if (handleEventFunc) {
        handleEventFunc(topLevelType, topLevelTarget, topLevelTargetID);
      }
    }
  };
  module.exports = ChangeEventPlugin;
  return module.exports;
});

$__System.registerDynamic("39", ["3"], true, function($__require, exports, module) {
  "use strict";
  var process = $__require("3");
  var define,
      global = this,
      GLOBAL = this;
  var nextReactRootIndex = 0;
  var ClientReactRootIndex = {createReactRootIndex: function() {
      return nextReactRootIndex++;
    }};
  module.exports = ClientReactRootIndex;
  return module.exports;
});

$__System.registerDynamic("3a", ["33", "3"], true, function($__require, exports, module) {
  "use strict";
  var process = $__require("3");
  var define,
      global = this,
      GLOBAL = this;
  var keyOf = $__require('33');
  var DefaultEventPluginOrder = [keyOf({ResponderEventPlugin: null}), keyOf({SimpleEventPlugin: null}), keyOf({TapEventPlugin: null}), keyOf({EnterLeaveEventPlugin: null}), keyOf({ChangeEventPlugin: null}), keyOf({SelectEventPlugin: null}), keyOf({BeforeInputEventPlugin: null})];
  module.exports = DefaultEventPluginOrder;
  return module.exports;
});

$__System.registerDynamic("3b", ["30", "31", "3c", "3d", "33", "3"], true, function($__require, exports, module) {
  "use strict";
  var process = $__require("3");
  var define,
      global = this,
      GLOBAL = this;
  var EventConstants = $__require('30');
  var EventPropagators = $__require('31');
  var SyntheticMouseEvent = $__require('3c');
  var ReactMount = $__require('3d');
  var keyOf = $__require('33');
  var topLevelTypes = EventConstants.topLevelTypes;
  var getFirstReactDOM = ReactMount.getFirstReactDOM;
  var eventTypes = {
    mouseEnter: {
      registrationName: keyOf({onMouseEnter: null}),
      dependencies: [topLevelTypes.topMouseOut, topLevelTypes.topMouseOver]
    },
    mouseLeave: {
      registrationName: keyOf({onMouseLeave: null}),
      dependencies: [topLevelTypes.topMouseOut, topLevelTypes.topMouseOver]
    }
  };
  var extractedEvents = [null, null];
  var EnterLeaveEventPlugin = {
    eventTypes: eventTypes,
    extractEvents: function(topLevelType, topLevelTarget, topLevelTargetID, nativeEvent, nativeEventTarget) {
      if (topLevelType === topLevelTypes.topMouseOver && (nativeEvent.relatedTarget || nativeEvent.fromElement)) {
        return null;
      }
      if (topLevelType !== topLevelTypes.topMouseOut && topLevelType !== topLevelTypes.topMouseOver) {
        return null;
      }
      var win;
      if (topLevelTarget.window === topLevelTarget) {
        win = topLevelTarget;
      } else {
        var doc = topLevelTarget.ownerDocument;
        if (doc) {
          win = doc.defaultView || doc.parentWindow;
        } else {
          win = window;
        }
      }
      var from;
      var to;
      var fromID = '';
      var toID = '';
      if (topLevelType === topLevelTypes.topMouseOut) {
        from = topLevelTarget;
        fromID = topLevelTargetID;
        to = getFirstReactDOM(nativeEvent.relatedTarget || nativeEvent.toElement);
        if (to) {
          toID = ReactMount.getID(to);
        } else {
          to = win;
        }
        to = to || win;
      } else {
        from = win;
        to = topLevelTarget;
        toID = topLevelTargetID;
      }
      if (from === to) {
        return null;
      }
      var leave = SyntheticMouseEvent.getPooled(eventTypes.mouseLeave, fromID, nativeEvent, nativeEventTarget);
      leave.type = 'mouseleave';
      leave.target = from;
      leave.relatedTarget = to;
      var enter = SyntheticMouseEvent.getPooled(eventTypes.mouseEnter, toID, nativeEvent, nativeEventTarget);
      enter.type = 'mouseenter';
      enter.target = to;
      enter.relatedTarget = from;
      EventPropagators.accumulateEnterLeaveDispatches(leave, enter, fromID, toID);
      extractedEvents[0] = leave;
      extractedEvents[1] = enter;
      return extractedEvents;
    }
  };
  module.exports = EnterLeaveEventPlugin;
  return module.exports;
});

$__System.registerDynamic("3e", ["3f", "32", "3"], true, function($__require, exports, module) {
  "use strict";
  var process = $__require("3");
  var define,
      global = this,
      GLOBAL = this;
  var DOMProperty = $__require('3f');
  var ExecutionEnvironment = $__require('32');
  var MUST_USE_ATTRIBUTE = DOMProperty.injection.MUST_USE_ATTRIBUTE;
  var MUST_USE_PROPERTY = DOMProperty.injection.MUST_USE_PROPERTY;
  var HAS_BOOLEAN_VALUE = DOMProperty.injection.HAS_BOOLEAN_VALUE;
  var HAS_SIDE_EFFECTS = DOMProperty.injection.HAS_SIDE_EFFECTS;
  var HAS_NUMERIC_VALUE = DOMProperty.injection.HAS_NUMERIC_VALUE;
  var HAS_POSITIVE_NUMERIC_VALUE = DOMProperty.injection.HAS_POSITIVE_NUMERIC_VALUE;
  var HAS_OVERLOADED_BOOLEAN_VALUE = DOMProperty.injection.HAS_OVERLOADED_BOOLEAN_VALUE;
  var hasSVG;
  if (ExecutionEnvironment.canUseDOM) {
    var implementation = document.implementation;
    hasSVG = implementation && implementation.hasFeature && implementation.hasFeature('http://www.w3.org/TR/SVG11/feature#BasicStructure', '1.1');
  }
  var HTMLDOMPropertyConfig = {
    isCustomAttribute: RegExp.prototype.test.bind(/^(data|aria)-[a-z_][a-z\d_.\-]*$/),
    Properties: {
      accept: null,
      acceptCharset: null,
      accessKey: null,
      action: null,
      allowFullScreen: MUST_USE_ATTRIBUTE | HAS_BOOLEAN_VALUE,
      allowTransparency: MUST_USE_ATTRIBUTE,
      alt: null,
      async: HAS_BOOLEAN_VALUE,
      autoComplete: null,
      autoPlay: HAS_BOOLEAN_VALUE,
      capture: MUST_USE_ATTRIBUTE | HAS_BOOLEAN_VALUE,
      cellPadding: null,
      cellSpacing: null,
      charSet: MUST_USE_ATTRIBUTE,
      challenge: MUST_USE_ATTRIBUTE,
      checked: MUST_USE_PROPERTY | HAS_BOOLEAN_VALUE,
      classID: MUST_USE_ATTRIBUTE,
      className: hasSVG ? MUST_USE_ATTRIBUTE : MUST_USE_PROPERTY,
      cols: MUST_USE_ATTRIBUTE | HAS_POSITIVE_NUMERIC_VALUE,
      colSpan: null,
      content: null,
      contentEditable: null,
      contextMenu: MUST_USE_ATTRIBUTE,
      controls: MUST_USE_PROPERTY | HAS_BOOLEAN_VALUE,
      coords: null,
      crossOrigin: null,
      data: null,
      dateTime: MUST_USE_ATTRIBUTE,
      'default': HAS_BOOLEAN_VALUE,
      defer: HAS_BOOLEAN_VALUE,
      dir: null,
      disabled: MUST_USE_ATTRIBUTE | HAS_BOOLEAN_VALUE,
      download: HAS_OVERLOADED_BOOLEAN_VALUE,
      draggable: null,
      encType: null,
      form: MUST_USE_ATTRIBUTE,
      formAction: MUST_USE_ATTRIBUTE,
      formEncType: MUST_USE_ATTRIBUTE,
      formMethod: MUST_USE_ATTRIBUTE,
      formNoValidate: HAS_BOOLEAN_VALUE,
      formTarget: MUST_USE_ATTRIBUTE,
      frameBorder: MUST_USE_ATTRIBUTE,
      headers: null,
      height: MUST_USE_ATTRIBUTE,
      hidden: MUST_USE_ATTRIBUTE | HAS_BOOLEAN_VALUE,
      high: null,
      href: null,
      hrefLang: null,
      htmlFor: null,
      httpEquiv: null,
      icon: null,
      id: MUST_USE_PROPERTY,
      inputMode: MUST_USE_ATTRIBUTE,
      integrity: null,
      is: MUST_USE_ATTRIBUTE,
      keyParams: MUST_USE_ATTRIBUTE,
      keyType: MUST_USE_ATTRIBUTE,
      kind: null,
      label: null,
      lang: null,
      list: MUST_USE_ATTRIBUTE,
      loop: MUST_USE_PROPERTY | HAS_BOOLEAN_VALUE,
      low: null,
      manifest: MUST_USE_ATTRIBUTE,
      marginHeight: null,
      marginWidth: null,
      max: null,
      maxLength: MUST_USE_ATTRIBUTE,
      media: MUST_USE_ATTRIBUTE,
      mediaGroup: null,
      method: null,
      min: null,
      minLength: MUST_USE_ATTRIBUTE,
      multiple: MUST_USE_PROPERTY | HAS_BOOLEAN_VALUE,
      muted: MUST_USE_PROPERTY | HAS_BOOLEAN_VALUE,
      name: null,
      nonce: MUST_USE_ATTRIBUTE,
      noValidate: HAS_BOOLEAN_VALUE,
      open: HAS_BOOLEAN_VALUE,
      optimum: null,
      pattern: null,
      placeholder: null,
      poster: null,
      preload: null,
      radioGroup: null,
      readOnly: MUST_USE_PROPERTY | HAS_BOOLEAN_VALUE,
      rel: null,
      required: HAS_BOOLEAN_VALUE,
      reversed: HAS_BOOLEAN_VALUE,
      role: MUST_USE_ATTRIBUTE,
      rows: MUST_USE_ATTRIBUTE | HAS_POSITIVE_NUMERIC_VALUE,
      rowSpan: null,
      sandbox: null,
      scope: null,
      scoped: HAS_BOOLEAN_VALUE,
      scrolling: null,
      seamless: MUST_USE_ATTRIBUTE | HAS_BOOLEAN_VALUE,
      selected: MUST_USE_PROPERTY | HAS_BOOLEAN_VALUE,
      shape: null,
      size: MUST_USE_ATTRIBUTE | HAS_POSITIVE_NUMERIC_VALUE,
      sizes: MUST_USE_ATTRIBUTE,
      span: HAS_POSITIVE_NUMERIC_VALUE,
      spellCheck: null,
      src: null,
      srcDoc: MUST_USE_PROPERTY,
      srcLang: null,
      srcSet: MUST_USE_ATTRIBUTE,
      start: HAS_NUMERIC_VALUE,
      step: null,
      style: null,
      summary: null,
      tabIndex: null,
      target: null,
      title: null,
      type: null,
      useMap: null,
      value: MUST_USE_PROPERTY | HAS_SIDE_EFFECTS,
      width: MUST_USE_ATTRIBUTE,
      wmode: MUST_USE_ATTRIBUTE,
      wrap: null,
      about: MUST_USE_ATTRIBUTE,
      datatype: MUST_USE_ATTRIBUTE,
      inlist: MUST_USE_ATTRIBUTE,
      prefix: MUST_USE_ATTRIBUTE,
      property: MUST_USE_ATTRIBUTE,
      resource: MUST_USE_ATTRIBUTE,
      'typeof': MUST_USE_ATTRIBUTE,
      vocab: MUST_USE_ATTRIBUTE,
      autoCapitalize: MUST_USE_ATTRIBUTE,
      autoCorrect: MUST_USE_ATTRIBUTE,
      autoSave: null,
      color: null,
      itemProp: MUST_USE_ATTRIBUTE,
      itemScope: MUST_USE_ATTRIBUTE | HAS_BOOLEAN_VALUE,
      itemType: MUST_USE_ATTRIBUTE,
      itemID: MUST_USE_ATTRIBUTE,
      itemRef: MUST_USE_ATTRIBUTE,
      results: null,
      security: MUST_USE_ATTRIBUTE,
      unselectable: MUST_USE_ATTRIBUTE
    },
    DOMAttributeNames: {
      acceptCharset: 'accept-charset',
      className: 'class',
      htmlFor: 'for',
      httpEquiv: 'http-equiv'
    },
    DOMPropertyNames: {
      autoComplete: 'autocomplete',
      autoFocus: 'autofocus',
      autoPlay: 'autoplay',
      autoSave: 'autosave',
      encType: 'encoding',
      hrefLang: 'hreflang',
      radioGroup: 'radiogroup',
      spellCheck: 'spellcheck',
      srcDoc: 'srcdoc',
      srcSet: 'srcset'
    }
  };
  module.exports = HTMLDOMPropertyConfig;
  return module.exports;
});

$__System.registerDynamic("40", ["41", "42", "1e", "3"], true, function($__require, exports, module) {
  "use strict";
  var process = $__require("3");
  var define,
      global = this,
      GLOBAL = this;
  var ReactInstanceMap = $__require('41');
  var findDOMNode = $__require('42');
  var warning = $__require('1e');
  var didWarnKey = '_getDOMNodeDidWarn';
  var ReactBrowserComponentMixin = {getDOMNode: function() {
      process.env.NODE_ENV !== 'production' ? warning(this.constructor[didWarnKey], '%s.getDOMNode(...) is deprecated. Please use ' + 'ReactDOM.findDOMNode(instance) instead.', ReactInstanceMap.get(this).getName() || this.tagName || 'Unknown') : undefined;
      this.constructor[didWarnKey] = true;
      return findDOMNode(this);
    }};
  module.exports = ReactBrowserComponentMixin;
  return module.exports;
});

$__System.registerDynamic("b", ["f", "7", "8", "9", "3"], true, function($__require, exports, module) {
  "use strict";
  var process = $__require("3");
  var define,
      global = this,
      GLOBAL = this;
  var ReactUpdates = $__require('f');
  var Transaction = $__require('7');
  var assign = $__require('8');
  var emptyFunction = $__require('9');
  var RESET_BATCHED_UPDATES = {
    initialize: emptyFunction,
    close: function() {
      ReactDefaultBatchingStrategy.isBatchingUpdates = false;
    }
  };
  var FLUSH_BATCHED_UPDATES = {
    initialize: emptyFunction,
    close: ReactUpdates.flushBatchedUpdates.bind(ReactUpdates)
  };
  var TRANSACTION_WRAPPERS = [FLUSH_BATCHED_UPDATES, RESET_BATCHED_UPDATES];
  function ReactDefaultBatchingStrategyTransaction() {
    this.reinitializeTransaction();
  }
  assign(ReactDefaultBatchingStrategyTransaction.prototype, Transaction.Mixin, {getTransactionWrappers: function() {
      return TRANSACTION_WRAPPERS;
    }});
  var transaction = new ReactDefaultBatchingStrategyTransaction();
  var ReactDefaultBatchingStrategy = {
    isBatchingUpdates: false,
    batchedUpdates: function(callback, a, b, c, d, e) {
      var alreadyBatchingUpdates = ReactDefaultBatchingStrategy.isBatchingUpdates;
      ReactDefaultBatchingStrategy.isBatchingUpdates = true;
      if (alreadyBatchingUpdates) {
        callback(a, b, c, d, e);
      } else {
        transaction.perform(callback, null, a, b, c, d, e);
      }
    }
  };
  module.exports = ReactDefaultBatchingStrategy;
  return module.exports;
});

$__System.registerDynamic("43", ["3d", "42", "44", "3"], true, function($__require, exports, module) {
  "use strict";
  var process = $__require("3");
  var define,
      global = this,
      GLOBAL = this;
  var ReactMount = $__require('3d');
  var findDOMNode = $__require('42');
  var focusNode = $__require('44');
  var Mixin = {componentDidMount: function() {
      if (this.props.autoFocus) {
        focusNode(findDOMNode(this));
      }
    }};
  var AutoFocusUtils = {
    Mixin: Mixin,
    focusDOMComponent: function() {
      focusNode(ReactMount.getNode(this._rootNodeID));
    }
  };
  module.exports = AutoFocusUtils;
  return module.exports;
});

$__System.registerDynamic("45", ["3"], true, function($__require, exports, module) {
  "use strict";
  var process = $__require("3");
  var define,
      global = this,
      GLOBAL = this;
  var _hyphenPattern = /-(.)/g;
  function camelize(string) {
    return string.replace(_hyphenPattern, function(_, character) {
      return character.toUpperCase();
    });
  }
  module.exports = camelize;
  return module.exports;
});

$__System.registerDynamic("46", ["45", "3"], true, function($__require, exports, module) {
  "use strict";
  var process = $__require("3");
  var define,
      global = this,
      GLOBAL = this;
  var camelize = $__require('45');
  var msPattern = /^-ms-/;
  function camelizeStyleName(string) {
    return camelize(string.replace(msPattern, 'ms-'));
  }
  module.exports = camelizeStyleName;
  return module.exports;
});

$__System.registerDynamic("47", ["3"], true, function($__require, exports, module) {
  "use strict";
  var process = $__require("3");
  var define,
      global = this,
      GLOBAL = this;
  var isUnitlessNumber = {
    animationIterationCount: true,
    boxFlex: true,
    boxFlexGroup: true,
    boxOrdinalGroup: true,
    columnCount: true,
    flex: true,
    flexGrow: true,
    flexPositive: true,
    flexShrink: true,
    flexNegative: true,
    flexOrder: true,
    fontWeight: true,
    lineClamp: true,
    lineHeight: true,
    opacity: true,
    order: true,
    orphans: true,
    tabSize: true,
    widows: true,
    zIndex: true,
    zoom: true,
    fillOpacity: true,
    stopOpacity: true,
    strokeDashoffset: true,
    strokeOpacity: true,
    strokeWidth: true
  };
  function prefixKey(prefix, key) {
    return prefix + key.charAt(0).toUpperCase() + key.substring(1);
  }
  var prefixes = ['Webkit', 'ms', 'Moz', 'O'];
  Object.keys(isUnitlessNumber).forEach(function(prop) {
    prefixes.forEach(function(prefix) {
      isUnitlessNumber[prefixKey(prefix, prop)] = isUnitlessNumber[prop];
    });
  });
  var shorthandPropertyExpansions = {
    background: {
      backgroundAttachment: true,
      backgroundColor: true,
      backgroundImage: true,
      backgroundPositionX: true,
      backgroundPositionY: true,
      backgroundRepeat: true
    },
    backgroundPosition: {
      backgroundPositionX: true,
      backgroundPositionY: true
    },
    border: {
      borderWidth: true,
      borderStyle: true,
      borderColor: true
    },
    borderBottom: {
      borderBottomWidth: true,
      borderBottomStyle: true,
      borderBottomColor: true
    },
    borderLeft: {
      borderLeftWidth: true,
      borderLeftStyle: true,
      borderLeftColor: true
    },
    borderRight: {
      borderRightWidth: true,
      borderRightStyle: true,
      borderRightColor: true
    },
    borderTop: {
      borderTopWidth: true,
      borderTopStyle: true,
      borderTopColor: true
    },
    font: {
      fontStyle: true,
      fontVariant: true,
      fontWeight: true,
      fontSize: true,
      lineHeight: true,
      fontFamily: true
    },
    outline: {
      outlineWidth: true,
      outlineStyle: true,
      outlineColor: true
    }
  };
  var CSSProperty = {
    isUnitlessNumber: isUnitlessNumber,
    shorthandPropertyExpansions: shorthandPropertyExpansions
  };
  module.exports = CSSProperty;
  return module.exports;
});

$__System.registerDynamic("48", ["47", "3"], true, function($__require, exports, module) {
  "use strict";
  var process = $__require("3");
  var define,
      global = this,
      GLOBAL = this;
  var CSSProperty = $__require('47');
  var isUnitlessNumber = CSSProperty.isUnitlessNumber;
  function dangerousStyleValue(name, value) {
    var isEmpty = value == null || typeof value === 'boolean' || value === '';
    if (isEmpty) {
      return '';
    }
    var isNonNumeric = isNaN(value);
    if (isNonNumeric || value === 0 || isUnitlessNumber.hasOwnProperty(name) && isUnitlessNumber[name]) {
      return '' + value;
    }
    if (typeof value === 'string') {
      value = value.trim();
    }
    return value + 'px';
  }
  module.exports = dangerousStyleValue;
  return module.exports;
});

$__System.registerDynamic("49", ["3"], true, function($__require, exports, module) {
  "use strict";
  var process = $__require("3");
  var define,
      global = this,
      GLOBAL = this;
  var _uppercasePattern = /([A-Z])/g;
  function hyphenate(string) {
    return string.replace(_uppercasePattern, '-$1').toLowerCase();
  }
  module.exports = hyphenate;
  return module.exports;
});

$__System.registerDynamic("4a", ["49", "3"], true, function($__require, exports, module) {
  "use strict";
  var process = $__require("3");
  var define,
      global = this,
      GLOBAL = this;
  var hyphenate = $__require('49');
  var msPattern = /^ms-/;
  function hyphenateStyleName(string) {
    return hyphenate(string).replace(msPattern, '-ms-');
  }
  module.exports = hyphenateStyleName;
  return module.exports;
});

$__System.registerDynamic("4b", ["3"], true, function($__require, exports, module) {
  "use strict";
  var process = $__require("3");
  var define,
      global = this,
      GLOBAL = this;
  function memoizeStringOnly(callback) {
    var cache = {};
    return function(string) {
      if (!cache.hasOwnProperty(string)) {
        cache[string] = callback.call(this, string);
      }
      return cache[string];
    };
  }
  module.exports = memoizeStringOnly;
  return module.exports;
});

$__System.registerDynamic("4c", ["47", "32", "4d", "46", "48", "4a", "4b", "1e", "3"], true, function($__require, exports, module) {
  "use strict";
  var process = $__require("3");
  var define,
      global = this,
      GLOBAL = this;
  var CSSProperty = $__require('47');
  var ExecutionEnvironment = $__require('32');
  var ReactPerf = $__require('4d');
  var camelizeStyleName = $__require('46');
  var dangerousStyleValue = $__require('48');
  var hyphenateStyleName = $__require('4a');
  var memoizeStringOnly = $__require('4b');
  var warning = $__require('1e');
  var processStyleName = memoizeStringOnly(function(styleName) {
    return hyphenateStyleName(styleName);
  });
  var hasShorthandPropertyBug = false;
  var styleFloatAccessor = 'cssFloat';
  if (ExecutionEnvironment.canUseDOM) {
    var tempStyle = document.createElement('div').style;
    try {
      tempStyle.font = '';
    } catch (e) {
      hasShorthandPropertyBug = true;
    }
    if (document.documentElement.style.cssFloat === undefined) {
      styleFloatAccessor = 'styleFloat';
    }
  }
  if (process.env.NODE_ENV !== 'production') {
    var badVendoredStyleNamePattern = /^(?:webkit|moz|o)[A-Z]/;
    var badStyleValueWithSemicolonPattern = /;\s*$/;
    var warnedStyleNames = {};
    var warnedStyleValues = {};
    var warnHyphenatedStyleName = function(name) {
      if (warnedStyleNames.hasOwnProperty(name) && warnedStyleNames[name]) {
        return;
      }
      warnedStyleNames[name] = true;
      process.env.NODE_ENV !== 'production' ? warning(false, 'Unsupported style property %s. Did you mean %s?', name, camelizeStyleName(name)) : undefined;
    };
    var warnBadVendoredStyleName = function(name) {
      if (warnedStyleNames.hasOwnProperty(name) && warnedStyleNames[name]) {
        return;
      }
      warnedStyleNames[name] = true;
      process.env.NODE_ENV !== 'production' ? warning(false, 'Unsupported vendor-prefixed style property %s. Did you mean %s?', name, name.charAt(0).toUpperCase() + name.slice(1)) : undefined;
    };
    var warnStyleValueWithSemicolon = function(name, value) {
      if (warnedStyleValues.hasOwnProperty(value) && warnedStyleValues[value]) {
        return;
      }
      warnedStyleValues[value] = true;
      process.env.NODE_ENV !== 'production' ? warning(false, 'Style property values shouldn\'t contain a semicolon. ' + 'Try "%s: %s" instead.', name, value.replace(badStyleValueWithSemicolonPattern, '')) : undefined;
    };
    var warnValidStyle = function(name, value) {
      if (name.indexOf('-') > -1) {
        warnHyphenatedStyleName(name);
      } else if (badVendoredStyleNamePattern.test(name)) {
        warnBadVendoredStyleName(name);
      } else if (badStyleValueWithSemicolonPattern.test(value)) {
        warnStyleValueWithSemicolon(name, value);
      }
    };
  }
  var CSSPropertyOperations = {
    createMarkupForStyles: function(styles) {
      var serialized = '';
      for (var styleName in styles) {
        if (!styles.hasOwnProperty(styleName)) {
          continue;
        }
        var styleValue = styles[styleName];
        if (process.env.NODE_ENV !== 'production') {
          warnValidStyle(styleName, styleValue);
        }
        if (styleValue != null) {
          serialized += processStyleName(styleName) + ':';
          serialized += dangerousStyleValue(styleName, styleValue) + ';';
        }
      }
      return serialized || null;
    },
    setValueForStyles: function(node, styles) {
      var style = node.style;
      for (var styleName in styles) {
        if (!styles.hasOwnProperty(styleName)) {
          continue;
        }
        if (process.env.NODE_ENV !== 'production') {
          warnValidStyle(styleName, styles[styleName]);
        }
        var styleValue = dangerousStyleValue(styleName, styles[styleName]);
        if (styleName === 'float') {
          styleName = styleFloatAccessor;
        }
        if (styleValue) {
          style[styleName] = styleValue;
        } else {
          var expansion = hasShorthandPropertyBug && CSSProperty.shorthandPropertyExpansions[styleName];
          if (expansion) {
            for (var individualStyleName in expansion) {
              style[individualStyleName] = '';
            }
          } else {
            style[styleName] = '';
          }
        }
      }
    }
  };
  ReactPerf.measureMethods(CSSPropertyOperations, 'CSSPropertyOperations', {setValueForStyles: 'setValueForStyles'});
  module.exports = CSSPropertyOperations;
  return module.exports;
});

$__System.registerDynamic("4e", ["3"], true, function($__require, exports, module) {
  "use strict";
  var process = $__require("3");
  var define,
      global = this,
      GLOBAL = this;
  var mouseListenerNames = {
    onClick: true,
    onDoubleClick: true,
    onMouseDown: true,
    onMouseMove: true,
    onMouseUp: true,
    onClickCapture: true,
    onDoubleClickCapture: true,
    onMouseDownCapture: true,
    onMouseMoveCapture: true,
    onMouseUpCapture: true
  };
  var ReactDOMButton = {getNativeProps: function(inst, props, context) {
      if (!props.disabled) {
        return props;
      }
      var nativeProps = {};
      for (var key in props) {
        if (props.hasOwnProperty(key) && !mouseListenerNames[key]) {
          nativeProps[key] = props[key];
        }
      }
      return nativeProps;
    }};
  module.exports = ReactDOMButton;
  return module.exports;
});

$__System.registerDynamic("4f", ["50", "51", "3d", "f", "8", "12", "3"], true, function($__require, exports, module) {
  "use strict";
  var process = $__require("3");
  var define,
      global = this,
      GLOBAL = this;
  var ReactDOMIDOperations = $__require('50');
  var LinkedValueUtils = $__require('51');
  var ReactMount = $__require('3d');
  var ReactUpdates = $__require('f');
  var assign = $__require('8');
  var invariant = $__require('12');
  var instancesByReactID = {};
  function forceUpdateIfMounted() {
    if (this._rootNodeID) {
      ReactDOMInput.updateWrapper(this);
    }
  }
  var ReactDOMInput = {
    getNativeProps: function(inst, props, context) {
      var value = LinkedValueUtils.getValue(props);
      var checked = LinkedValueUtils.getChecked(props);
      var nativeProps = assign({}, props, {
        defaultChecked: undefined,
        defaultValue: undefined,
        value: value != null ? value : inst._wrapperState.initialValue,
        checked: checked != null ? checked : inst._wrapperState.initialChecked,
        onChange: inst._wrapperState.onChange
      });
      return nativeProps;
    },
    mountWrapper: function(inst, props) {
      if (process.env.NODE_ENV !== 'production') {
        LinkedValueUtils.checkPropTypes('input', props, inst._currentElement._owner);
      }
      var defaultValue = props.defaultValue;
      inst._wrapperState = {
        initialChecked: props.defaultChecked || false,
        initialValue: defaultValue != null ? defaultValue : null,
        onChange: _handleChange.bind(inst)
      };
    },
    mountReadyWrapper: function(inst) {
      instancesByReactID[inst._rootNodeID] = inst;
    },
    unmountWrapper: function(inst) {
      delete instancesByReactID[inst._rootNodeID];
    },
    updateWrapper: function(inst) {
      var props = inst._currentElement.props;
      var checked = props.checked;
      if (checked != null) {
        ReactDOMIDOperations.updatePropertyByID(inst._rootNodeID, 'checked', checked || false);
      }
      var value = LinkedValueUtils.getValue(props);
      if (value != null) {
        ReactDOMIDOperations.updatePropertyByID(inst._rootNodeID, 'value', '' + value);
      }
    }
  };
  function _handleChange(event) {
    var props = this._currentElement.props;
    var returnValue = LinkedValueUtils.executeOnChange(props, event);
    ReactUpdates.asap(forceUpdateIfMounted, this);
    var name = props.name;
    if (props.type === 'radio' && name != null) {
      var rootNode = ReactMount.getNode(this._rootNodeID);
      var queryRoot = rootNode;
      while (queryRoot.parentNode) {
        queryRoot = queryRoot.parentNode;
      }
      var group = queryRoot.querySelectorAll('input[name=' + JSON.stringify('' + name) + '][type="radio"]');
      for (var i = 0; i < group.length; i++) {
        var otherNode = group[i];
        if (otherNode === rootNode || otherNode.form !== rootNode.form) {
          continue;
        }
        var otherID = ReactMount.getID(otherNode);
        !otherID ? process.env.NODE_ENV !== 'production' ? invariant(false, 'ReactDOMInput: Mixing React and non-React radio inputs with the ' + 'same `name` is not supported.') : invariant(false) : undefined;
        var otherInstance = instancesByReactID[otherID];
        !otherInstance ? process.env.NODE_ENV !== 'production' ? invariant(false, 'ReactDOMInput: Unknown radio button ID %s.', otherID) : invariant(false) : undefined;
        ReactUpdates.asap(forceUpdateIfMounted, otherInstance);
      }
    }
    return returnValue;
  }
  module.exports = ReactDOMInput;
  return module.exports;
});

$__System.registerDynamic("21", ["5", "c", "9", "52", "3"], true, function($__require, exports, module) {
  "use strict";
  var process = $__require("3");
  var define,
      global = this,
      GLOBAL = this;
  var PooledClass = $__require('5');
  var ReactElement = $__require('c');
  var emptyFunction = $__require('9');
  var traverseAllChildren = $__require('52');
  var twoArgumentPooler = PooledClass.twoArgumentPooler;
  var fourArgumentPooler = PooledClass.fourArgumentPooler;
  var userProvidedKeyEscapeRegex = /\/(?!\/)/g;
  function escapeUserProvidedKey(text) {
    return ('' + text).replace(userProvidedKeyEscapeRegex, '//');
  }
  function ForEachBookKeeping(forEachFunction, forEachContext) {
    this.func = forEachFunction;
    this.context = forEachContext;
    this.count = 0;
  }
  ForEachBookKeeping.prototype.destructor = function() {
    this.func = null;
    this.context = null;
    this.count = 0;
  };
  PooledClass.addPoolingTo(ForEachBookKeeping, twoArgumentPooler);
  function forEachSingleChild(bookKeeping, child, name) {
    var func = bookKeeping.func;
    var context = bookKeeping.context;
    func.call(context, child, bookKeeping.count++);
  }
  function forEachChildren(children, forEachFunc, forEachContext) {
    if (children == null) {
      return children;
    }
    var traverseContext = ForEachBookKeeping.getPooled(forEachFunc, forEachContext);
    traverseAllChildren(children, forEachSingleChild, traverseContext);
    ForEachBookKeeping.release(traverseContext);
  }
  function MapBookKeeping(mapResult, keyPrefix, mapFunction, mapContext) {
    this.result = mapResult;
    this.keyPrefix = keyPrefix;
    this.func = mapFunction;
    this.context = mapContext;
    this.count = 0;
  }
  MapBookKeeping.prototype.destructor = function() {
    this.result = null;
    this.keyPrefix = null;
    this.func = null;
    this.context = null;
    this.count = 0;
  };
  PooledClass.addPoolingTo(MapBookKeeping, fourArgumentPooler);
  function mapSingleChildIntoContext(bookKeeping, child, childKey) {
    var result = bookKeeping.result;
    var keyPrefix = bookKeeping.keyPrefix;
    var func = bookKeeping.func;
    var context = bookKeeping.context;
    var mappedChild = func.call(context, child, bookKeeping.count++);
    if (Array.isArray(mappedChild)) {
      mapIntoWithKeyPrefixInternal(mappedChild, result, childKey, emptyFunction.thatReturnsArgument);
    } else if (mappedChild != null) {
      if (ReactElement.isValidElement(mappedChild)) {
        mappedChild = ReactElement.cloneAndReplaceKey(mappedChild, keyPrefix + (mappedChild !== child ? escapeUserProvidedKey(mappedChild.key || '') + '/' : '') + childKey);
      }
      result.push(mappedChild);
    }
  }
  function mapIntoWithKeyPrefixInternal(children, array, prefix, func, context) {
    var escapedPrefix = '';
    if (prefix != null) {
      escapedPrefix = escapeUserProvidedKey(prefix) + '/';
    }
    var traverseContext = MapBookKeeping.getPooled(array, escapedPrefix, func, context);
    traverseAllChildren(children, mapSingleChildIntoContext, traverseContext);
    MapBookKeeping.release(traverseContext);
  }
  function mapChildren(children, func, context) {
    if (children == null) {
      return children;
    }
    var result = [];
    mapIntoWithKeyPrefixInternal(children, result, null, func, context);
    return result;
  }
  function forEachSingleChildDummy(traverseContext, child, name) {
    return null;
  }
  function countChildren(children, context) {
    return traverseAllChildren(children, forEachSingleChildDummy, null);
  }
  function toArray(children) {
    var result = [];
    mapIntoWithKeyPrefixInternal(children, result, null, emptyFunction.thatReturnsArgument);
    return result;
  }
  var ReactChildren = {
    forEach: forEachChildren,
    map: mapChildren,
    mapIntoWithKeyPrefixInternal: mapIntoWithKeyPrefixInternal,
    count: countChildren,
    toArray: toArray
  };
  module.exports = ReactChildren;
  return module.exports;
});

$__System.registerDynamic("53", ["21", "54", "8", "1e", "3"], true, function($__require, exports, module) {
  "use strict";
  var process = $__require("3");
  var define,
      global = this,
      GLOBAL = this;
  var ReactChildren = $__require('21');
  var ReactDOMSelect = $__require('54');
  var assign = $__require('8');
  var warning = $__require('1e');
  var valueContextKey = ReactDOMSelect.valueContextKey;
  var ReactDOMOption = {
    mountWrapper: function(inst, props, context) {
      if (process.env.NODE_ENV !== 'production') {
        process.env.NODE_ENV !== 'production' ? warning(props.selected == null, 'Use the `defaultValue` or `value` props on <select> instead of ' + 'setting `selected` on <option>.') : undefined;
      }
      var selectValue = context[valueContextKey];
      var selected = null;
      if (selectValue != null) {
        selected = false;
        if (Array.isArray(selectValue)) {
          for (var i = 0; i < selectValue.length; i++) {
            if ('' + selectValue[i] === '' + props.value) {
              selected = true;
              break;
            }
          }
        } else {
          selected = '' + selectValue === '' + props.value;
        }
      }
      inst._wrapperState = {selected: selected};
    },
    getNativeProps: function(inst, props, context) {
      var nativeProps = assign({
        selected: undefined,
        children: undefined
      }, props);
      if (inst._wrapperState.selected != null) {
        nativeProps.selected = inst._wrapperState.selected;
      }
      var content = '';
      ReactChildren.forEach(props.children, function(child) {
        if (child == null) {
          return;
        }
        if (typeof child === 'string' || typeof child === 'number') {
          content += child;
        } else {
          process.env.NODE_ENV !== 'production' ? warning(false, 'Only strings and numbers are supported as <option> children.') : undefined;
        }
      });
      if (content) {
        nativeProps.children = content;
      }
      return nativeProps;
    }
  };
  module.exports = ReactDOMOption;
  return module.exports;
});

$__System.registerDynamic("54", ["51", "3d", "f", "8", "1e", "3"], true, function($__require, exports, module) {
  "use strict";
  var process = $__require("3");
  var define,
      global = this,
      GLOBAL = this;
  var LinkedValueUtils = $__require('51');
  var ReactMount = $__require('3d');
  var ReactUpdates = $__require('f');
  var assign = $__require('8');
  var warning = $__require('1e');
  var valueContextKey = '__ReactDOMSelect_value$' + Math.random().toString(36).slice(2);
  function updateOptionsIfPendingUpdateAndMounted() {
    if (this._rootNodeID && this._wrapperState.pendingUpdate) {
      this._wrapperState.pendingUpdate = false;
      var props = this._currentElement.props;
      var value = LinkedValueUtils.getValue(props);
      if (value != null) {
        updateOptions(this, Boolean(props.multiple), value);
      }
    }
  }
  function getDeclarationErrorAddendum(owner) {
    if (owner) {
      var name = owner.getName();
      if (name) {
        return ' Check the render method of `' + name + '`.';
      }
    }
    return '';
  }
  var valuePropNames = ['value', 'defaultValue'];
  function checkSelectPropTypes(inst, props) {
    var owner = inst._currentElement._owner;
    LinkedValueUtils.checkPropTypes('select', props, owner);
    for (var i = 0; i < valuePropNames.length; i++) {
      var propName = valuePropNames[i];
      if (props[propName] == null) {
        continue;
      }
      if (props.multiple) {
        process.env.NODE_ENV !== 'production' ? warning(Array.isArray(props[propName]), 'The `%s` prop supplied to <select> must be an array if ' + '`multiple` is true.%s', propName, getDeclarationErrorAddendum(owner)) : undefined;
      } else {
        process.env.NODE_ENV !== 'production' ? warning(!Array.isArray(props[propName]), 'The `%s` prop supplied to <select> must be a scalar ' + 'value if `multiple` is false.%s', propName, getDeclarationErrorAddendum(owner)) : undefined;
      }
    }
  }
  function updateOptions(inst, multiple, propValue) {
    var selectedValue,
        i;
    var options = ReactMount.getNode(inst._rootNodeID).options;
    if (multiple) {
      selectedValue = {};
      for (i = 0; i < propValue.length; i++) {
        selectedValue['' + propValue[i]] = true;
      }
      for (i = 0; i < options.length; i++) {
        var selected = selectedValue.hasOwnProperty(options[i].value);
        if (options[i].selected !== selected) {
          options[i].selected = selected;
        }
      }
    } else {
      selectedValue = '' + propValue;
      for (i = 0; i < options.length; i++) {
        if (options[i].value === selectedValue) {
          options[i].selected = true;
          return;
        }
      }
      if (options.length) {
        options[0].selected = true;
      }
    }
  }
  var ReactDOMSelect = {
    valueContextKey: valueContextKey,
    getNativeProps: function(inst, props, context) {
      return assign({}, props, {
        onChange: inst._wrapperState.onChange,
        value: undefined
      });
    },
    mountWrapper: function(inst, props) {
      if (process.env.NODE_ENV !== 'production') {
        checkSelectPropTypes(inst, props);
      }
      var value = LinkedValueUtils.getValue(props);
      inst._wrapperState = {
        pendingUpdate: false,
        initialValue: value != null ? value : props.defaultValue,
        onChange: _handleChange.bind(inst),
        wasMultiple: Boolean(props.multiple)
      };
    },
    processChildContext: function(inst, props, context) {
      var childContext = assign({}, context);
      childContext[valueContextKey] = inst._wrapperState.initialValue;
      return childContext;
    },
    postUpdateWrapper: function(inst) {
      var props = inst._currentElement.props;
      inst._wrapperState.initialValue = undefined;
      var wasMultiple = inst._wrapperState.wasMultiple;
      inst._wrapperState.wasMultiple = Boolean(props.multiple);
      var value = LinkedValueUtils.getValue(props);
      if (value != null) {
        inst._wrapperState.pendingUpdate = false;
        updateOptions(inst, Boolean(props.multiple), value);
      } else if (wasMultiple !== Boolean(props.multiple)) {
        if (props.defaultValue != null) {
          updateOptions(inst, Boolean(props.multiple), props.defaultValue);
        } else {
          updateOptions(inst, Boolean(props.multiple), props.multiple ? [] : '');
        }
      }
    }
  };
  function _handleChange(event) {
    var props = this._currentElement.props;
    var returnValue = LinkedValueUtils.executeOnChange(props, event);
    this._wrapperState.pendingUpdate = true;
    ReactUpdates.asap(updateOptionsIfPendingUpdateAndMounted, this);
    return returnValue;
  }
  module.exports = ReactDOMSelect;
  return module.exports;
});

$__System.registerDynamic("24", ["c", "1a", "9", "1d", "3"], true, function($__require, exports, module) {
  "use strict";
  var process = $__require("3");
  var define,
      global = this,
      GLOBAL = this;
  var ReactElement = $__require('c');
  var ReactPropTypeLocationNames = $__require('1a');
  var emptyFunction = $__require('9');
  var getIteratorFn = $__require('1d');
  var ANONYMOUS = '<<anonymous>>';
  var ReactPropTypes = {
    array: createPrimitiveTypeChecker('array'),
    bool: createPrimitiveTypeChecker('boolean'),
    func: createPrimitiveTypeChecker('function'),
    number: createPrimitiveTypeChecker('number'),
    object: createPrimitiveTypeChecker('object'),
    string: createPrimitiveTypeChecker('string'),
    any: createAnyTypeChecker(),
    arrayOf: createArrayOfTypeChecker,
    element: createElementTypeChecker(),
    instanceOf: createInstanceTypeChecker,
    node: createNodeChecker(),
    objectOf: createObjectOfTypeChecker,
    oneOf: createEnumTypeChecker,
    oneOfType: createUnionTypeChecker,
    shape: createShapeTypeChecker
  };
  function createChainableTypeChecker(validate) {
    function checkType(isRequired, props, propName, componentName, location, propFullName) {
      componentName = componentName || ANONYMOUS;
      propFullName = propFullName || propName;
      if (props[propName] == null) {
        var locationName = ReactPropTypeLocationNames[location];
        if (isRequired) {
          return new Error('Required ' + locationName + ' `' + propFullName + '` was not specified in ' + ('`' + componentName + '`.'));
        }
        return null;
      } else {
        return validate(props, propName, componentName, location, propFullName);
      }
    }
    var chainedCheckType = checkType.bind(null, false);
    chainedCheckType.isRequired = checkType.bind(null, true);
    return chainedCheckType;
  }
  function createPrimitiveTypeChecker(expectedType) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== expectedType) {
        var locationName = ReactPropTypeLocationNames[location];
        var preciseType = getPreciseType(propValue);
        return new Error('Invalid ' + locationName + ' `' + propFullName + '` of type ' + ('`' + preciseType + '` supplied to `' + componentName + '`, expected ') + ('`' + expectedType + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }
  function createAnyTypeChecker() {
    return createChainableTypeChecker(emptyFunction.thatReturns(null));
  }
  function createArrayOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      if (!Array.isArray(propValue)) {
        var locationName = ReactPropTypeLocationNames[location];
        var propType = getPropType(propValue);
        return new Error('Invalid ' + locationName + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an array.'));
      }
      for (var i = 0; i < propValue.length; i++) {
        var error = typeChecker(propValue, i, componentName, location, propFullName + '[' + i + ']');
        if (error instanceof Error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }
  function createElementTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      if (!ReactElement.isValidElement(props[propName])) {
        var locationName = ReactPropTypeLocationNames[location];
        return new Error('Invalid ' + locationName + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`, expected a single ReactElement.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }
  function createInstanceTypeChecker(expectedClass) {
    function validate(props, propName, componentName, location, propFullName) {
      if (!(props[propName] instanceof expectedClass)) {
        var locationName = ReactPropTypeLocationNames[location];
        var expectedClassName = expectedClass.name || ANONYMOUS;
        var actualClassName = getClassName(props[propName]);
        return new Error('Invalid ' + locationName + ' `' + propFullName + '` of type ' + ('`' + actualClassName + '` supplied to `' + componentName + '`, expected ') + ('instance of `' + expectedClassName + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }
  function createEnumTypeChecker(expectedValues) {
    if (!Array.isArray(expectedValues)) {
      return createChainableTypeChecker(function() {
        return new Error('Invalid argument supplied to oneOf, expected an instance of array.');
      });
    }
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      for (var i = 0; i < expectedValues.length; i++) {
        if (propValue === expectedValues[i]) {
          return null;
        }
      }
      var locationName = ReactPropTypeLocationNames[location];
      var valuesString = JSON.stringify(expectedValues);
      return new Error('Invalid ' + locationName + ' `' + propFullName + '` of value `' + propValue + '` ' + ('supplied to `' + componentName + '`, expected one of ' + valuesString + '.'));
    }
    return createChainableTypeChecker(validate);
  }
  function createObjectOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        var locationName = ReactPropTypeLocationNames[location];
        return new Error('Invalid ' + locationName + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an object.'));
      }
      for (var key in propValue) {
        if (propValue.hasOwnProperty(key)) {
          var error = typeChecker(propValue, key, componentName, location, propFullName + '.' + key);
          if (error instanceof Error) {
            return error;
          }
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }
  function createUnionTypeChecker(arrayOfTypeCheckers) {
    if (!Array.isArray(arrayOfTypeCheckers)) {
      return createChainableTypeChecker(function() {
        return new Error('Invalid argument supplied to oneOfType, expected an instance of array.');
      });
    }
    function validate(props, propName, componentName, location, propFullName) {
      for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
        var checker = arrayOfTypeCheckers[i];
        if (checker(props, propName, componentName, location, propFullName) == null) {
          return null;
        }
      }
      var locationName = ReactPropTypeLocationNames[location];
      return new Error('Invalid ' + locationName + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`.'));
    }
    return createChainableTypeChecker(validate);
  }
  function createNodeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      if (!isNode(props[propName])) {
        var locationName = ReactPropTypeLocationNames[location];
        return new Error('Invalid ' + locationName + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`, expected a ReactNode.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }
  function createShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        var locationName = ReactPropTypeLocationNames[location];
        return new Error('Invalid ' + locationName + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      for (var key in shapeTypes) {
        var checker = shapeTypes[key];
        if (!checker) {
          continue;
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key);
        if (error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }
  function isNode(propValue) {
    switch (typeof propValue) {
      case 'number':
      case 'string':
      case 'undefined':
        return true;
      case 'boolean':
        return !propValue;
      case 'object':
        if (Array.isArray(propValue)) {
          return propValue.every(isNode);
        }
        if (propValue === null || ReactElement.isValidElement(propValue)) {
          return true;
        }
        var iteratorFn = getIteratorFn(propValue);
        if (iteratorFn) {
          var iterator = iteratorFn.call(propValue);
          var step;
          if (iteratorFn !== propValue.entries) {
            while (!(step = iterator.next()).done) {
              if (!isNode(step.value)) {
                return false;
              }
            }
          } else {
            while (!(step = iterator.next()).done) {
              var entry = step.value;
              if (entry) {
                if (!isNode(entry[1])) {
                  return false;
                }
              }
            }
          }
        } else {
          return false;
        }
        return true;
      default:
        return false;
    }
  }
  function getPropType(propValue) {
    var propType = typeof propValue;
    if (Array.isArray(propValue)) {
      return 'array';
    }
    if (propValue instanceof RegExp) {
      return 'object';
    }
    return propType;
  }
  function getPreciseType(propValue) {
    var propType = getPropType(propValue);
    if (propType === 'object') {
      if (propValue instanceof Date) {
        return 'date';
      } else if (propValue instanceof RegExp) {
        return 'regexp';
      }
    }
    return propType;
  }
  function getClassName(propValue) {
    if (!propValue.constructor || !propValue.constructor.name) {
      return '<<anonymous>>';
    }
    return propValue.constructor.name;
  }
  module.exports = ReactPropTypes;
  return module.exports;
});

$__System.registerDynamic("51", ["24", "19", "12", "1e", "3"], true, function($__require, exports, module) {
  "use strict";
  var process = $__require("3");
  var define,
      global = this,
      GLOBAL = this;
  var ReactPropTypes = $__require('24');
  var ReactPropTypeLocations = $__require('19');
  var invariant = $__require('12');
  var warning = $__require('1e');
  var hasReadOnlyValue = {
    'button': true,
    'checkbox': true,
    'image': true,
    'hidden': true,
    'radio': true,
    'reset': true,
    'submit': true
  };
  function _assertSingleLink(inputProps) {
    !(inputProps.checkedLink == null || inputProps.valueLink == null) ? process.env.NODE_ENV !== 'production' ? invariant(false, 'Cannot provide a checkedLink and a valueLink. If you want to use ' + 'checkedLink, you probably don\'t want to use valueLink and vice versa.') : invariant(false) : undefined;
  }
  function _assertValueLink(inputProps) {
    _assertSingleLink(inputProps);
    !(inputProps.value == null && inputProps.onChange == null) ? process.env.NODE_ENV !== 'production' ? invariant(false, 'Cannot provide a valueLink and a value or onChange event. If you want ' + 'to use value or onChange, you probably don\'t want to use valueLink.') : invariant(false) : undefined;
  }
  function _assertCheckedLink(inputProps) {
    _assertSingleLink(inputProps);
    !(inputProps.checked == null && inputProps.onChange == null) ? process.env.NODE_ENV !== 'production' ? invariant(false, 'Cannot provide a checkedLink and a checked property or onChange event. ' + 'If you want to use checked or onChange, you probably don\'t want to ' + 'use checkedLink') : invariant(false) : undefined;
  }
  var propTypes = {
    value: function(props, propName, componentName) {
      if (!props[propName] || hasReadOnlyValue[props.type] || props.onChange || props.readOnly || props.disabled) {
        return null;
      }
      return new Error('You provided a `value` prop to a form field without an ' + '`onChange` handler. This will render a read-only field. If ' + 'the field should be mutable use `defaultValue`. Otherwise, ' + 'set either `onChange` or `readOnly`.');
    },
    checked: function(props, propName, componentName) {
      if (!props[propName] || props.onChange || props.readOnly || props.disabled) {
        return null;
      }
      return new Error('You provided a `checked` prop to a form field without an ' + '`onChange` handler. This will render a read-only field. If ' + 'the field should be mutable use `defaultChecked`. Otherwise, ' + 'set either `onChange` or `readOnly`.');
    },
    onChange: ReactPropTypes.func
  };
  var loggedTypeFailures = {};
  function getDeclarationErrorAddendum(owner) {
    if (owner) {
      var name = owner.getName();
      if (name) {
        return ' Check the render method of `' + name + '`.';
      }
    }
    return '';
  }
  var LinkedValueUtils = {
    checkPropTypes: function(tagName, props, owner) {
      for (var propName in propTypes) {
        if (propTypes.hasOwnProperty(propName)) {
          var error = propTypes[propName](props, propName, tagName, ReactPropTypeLocations.prop);
        }
        if (error instanceof Error && !(error.message in loggedTypeFailures)) {
          loggedTypeFailures[error.message] = true;
          var addendum = getDeclarationErrorAddendum(owner);
          process.env.NODE_ENV !== 'production' ? warning(false, 'Failed form propType: %s%s', error.message, addendum) : undefined;
        }
      }
    },
    getValue: function(inputProps) {
      if (inputProps.valueLink) {
        _assertValueLink(inputProps);
        return inputProps.valueLink.value;
      }
      return inputProps.value;
    },
    getChecked: function(inputProps) {
      if (inputProps.checkedLink) {
        _assertCheckedLink(inputProps);
        return inputProps.checkedLink.value;
      }
      return inputProps.checked;
    },
    executeOnChange: function(inputProps, event) {
      if (inputProps.valueLink) {
        _assertValueLink(inputProps);
        return inputProps.valueLink.requestChange(event.target.value);
      } else if (inputProps.checkedLink) {
        _assertCheckedLink(inputProps);
        return inputProps.checkedLink.requestChange(event.target.checked);
      } else if (inputProps.onChange) {
        return inputProps.onChange.call(undefined, event);
      }
    }
  };
  module.exports = LinkedValueUtils;
  return module.exports;
});

$__System.registerDynamic("55", ["51", "50", "f", "8", "12", "1e", "3"], true, function($__require, exports, module) {
  "use strict";
  var process = $__require("3");
  var define,
      global = this,
      GLOBAL = this;
  var LinkedValueUtils = $__require('51');
  var ReactDOMIDOperations = $__require('50');
  var ReactUpdates = $__require('f');
  var assign = $__require('8');
  var invariant = $__require('12');
  var warning = $__require('1e');
  function forceUpdateIfMounted() {
    if (this._rootNodeID) {
      ReactDOMTextarea.updateWrapper(this);
    }
  }
  var ReactDOMTextarea = {
    getNativeProps: function(inst, props, context) {
      !(props.dangerouslySetInnerHTML == null) ? process.env.NODE_ENV !== 'production' ? invariant(false, '`dangerouslySetInnerHTML` does not make sense on <textarea>.') : invariant(false) : undefined;
      var nativeProps = assign({}, props, {
        defaultValue: undefined,
        value: undefined,
        children: inst._wrapperState.initialValue,
        onChange: inst._wrapperState.onChange
      });
      return nativeProps;
    },
    mountWrapper: function(inst, props) {
      if (process.env.NODE_ENV !== 'production') {
        LinkedValueUtils.checkPropTypes('textarea', props, inst._currentElement._owner);
      }
      var defaultValue = props.defaultValue;
      var children = props.children;
      if (children != null) {
        if (process.env.NODE_ENV !== 'production') {
          process.env.NODE_ENV !== 'production' ? warning(false, 'Use the `defaultValue` or `value` props instead of setting ' + 'children on <textarea>.') : undefined;
        }
        !(defaultValue == null) ? process.env.NODE_ENV !== 'production' ? invariant(false, 'If you supply `defaultValue` on a <textarea>, do not pass children.') : invariant(false) : undefined;
        if (Array.isArray(children)) {
          !(children.length <= 1) ? process.env.NODE_ENV !== 'production' ? invariant(false, '<textarea> can only have at most one child.') : invariant(false) : undefined;
          children = children[0];
        }
        defaultValue = '' + children;
      }
      if (defaultValue == null) {
        defaultValue = '';
      }
      var value = LinkedValueUtils.getValue(props);
      inst._wrapperState = {
        initialValue: '' + (value != null ? value : defaultValue),
        onChange: _handleChange.bind(inst)
      };
    },
    updateWrapper: function(inst) {
      var props = inst._currentElement.props;
      var value = LinkedValueUtils.getValue(props);
      if (value != null) {
        ReactDOMIDOperations.updatePropertyByID(inst._rootNodeID, 'value', '' + value);
      }
    }
  };
  function _handleChange(event) {
    var props = this._currentElement.props;
    var returnValue = LinkedValueUtils.executeOnChange(props, event);
    ReactUpdates.asap(forceUpdateIfMounted, this);
    return returnValue;
  }
  module.exports = ReactDOMTextarea;
  return module.exports;
});

$__System.registerDynamic("56", ["57", "10", "58", "52", "1e", "3"], true, function($__require, exports, module) {
  "use strict";
  var process = $__require("3");
  var define,
      global = this,
      GLOBAL = this;
  var ReactReconciler = $__require('57');
  var instantiateReactComponent = $__require('10');
  var shouldUpdateReactComponent = $__require('58');
  var traverseAllChildren = $__require('52');
  var warning = $__require('1e');
  function instantiateChild(childInstances, child, name) {
    var keyUnique = childInstances[name] === undefined;
    if (process.env.NODE_ENV !== 'production') {
      process.env.NODE_ENV !== 'production' ? warning(keyUnique, 'flattenChildren(...): Encountered two children with the same key, ' + '`%s`. Child keys must be unique; when two children share a key, only ' + 'the first child will be used.', name) : undefined;
    }
    if (child != null && keyUnique) {
      childInstances[name] = instantiateReactComponent(child, null);
    }
  }
  var ReactChildReconciler = {
    instantiateChildren: function(nestedChildNodes, transaction, context) {
      if (nestedChildNodes == null) {
        return null;
      }
      var childInstances = {};
      traverseAllChildren(nestedChildNodes, instantiateChild, childInstances);
      return childInstances;
    },
    updateChildren: function(prevChildren, nextChildren, transaction, context) {
      if (!nextChildren && !prevChildren) {
        return null;
      }
      var name;
      for (name in nextChildren) {
        if (!nextChildren.hasOwnProperty(name)) {
          continue;
        }
        var prevChild = prevChildren && prevChildren[name];
        var prevElement = prevChild && prevChild._currentElement;
        var nextElement = nextChildren[name];
        if (prevChild != null && shouldUpdateReactComponent(prevElement, nextElement)) {
          ReactReconciler.receiveComponent(prevChild, nextElement, transaction, context);
          nextChildren[name] = prevChild;
        } else {
          if (prevChild) {
            ReactReconciler.unmountComponent(prevChild, name);
          }
          var nextChildInstance = instantiateReactComponent(nextElement, null);
          nextChildren[name] = nextChildInstance;
        }
      }
      for (name in prevChildren) {
        if (prevChildren.hasOwnProperty(name) && !(nextChildren && nextChildren.hasOwnProperty(name))) {
          ReactReconciler.unmountComponent(prevChildren[name]);
        }
      }
      return nextChildren;
    },
    unmountChildren: function(renderedChildren) {
      for (var name in renderedChildren) {
        if (renderedChildren.hasOwnProperty(name)) {
          var renderedChild = renderedChildren[name];
          ReactReconciler.unmountComponent(renderedChild);
        }
      }
    }
  };
  module.exports = ReactChildReconciler;
  return module.exports;
});

$__System.registerDynamic("1d", ["3"], true, function($__require, exports, module) {
  "use strict";
  var process = $__require("3");
  var define,
      global = this,
      GLOBAL = this;
  var ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
  var FAUX_ITERATOR_SYMBOL = '@@iterator';
  function getIteratorFn(maybeIterable) {
    var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);
    if (typeof iteratorFn === 'function') {
      return iteratorFn;
    }
  }
  module.exports = getIteratorFn;
  return module.exports;
});

$__System.registerDynamic("52", ["1b", "c", "d", "1d", "12", "1e", "3"], true, function($__require, exports, module) {
  "use strict";
  var process = $__require("3");
  var define,
      global = this,
      GLOBAL = this;
  var ReactCurrentOwner = $__require('1b');
  var ReactElement = $__require('c');
  var ReactInstanceHandles = $__require('d');
  var getIteratorFn = $__require('1d');
  var invariant = $__require('12');
  var warning = $__require('1e');
  var SEPARATOR = ReactInstanceHandles.SEPARATOR;
  var SUBSEPARATOR = ':';
  var userProvidedKeyEscaperLookup = {
    '=': '=0',
    '.': '=1',
    ':': '=2'
  };
  var userProvidedKeyEscapeRegex = /[=.:]/g;
  var didWarnAboutMaps = false;
  function userProvidedKeyEscaper(match) {
    return userProvidedKeyEscaperLookup[match];
  }
  function getComponentKey(component, index) {
    if (component && component.key != null) {
      return wrapUserProvidedKey(component.key);
    }
    return index.toString(36);
  }
  function escapeUserProvidedKey(text) {
    return ('' + text).replace(userProvidedKeyEscapeRegex, userProvidedKeyEscaper);
  }
  function wrapUserProvidedKey(key) {
    return '$' + escapeUserProvidedKey(key);
  }
  function traverseAllChildrenImpl(children, nameSoFar, callback, traverseContext) {
    var type = typeof children;
    if (type === 'undefined' || type === 'boolean') {
      children = null;
    }
    if (children === null || type === 'string' || type === 'number' || ReactElement.isValidElement(children)) {
      callback(traverseContext, children, nameSoFar === '' ? SEPARATOR + getComponentKey(children, 0) : nameSoFar);
      return 1;
    }
    var child;
    var nextName;
    var subtreeCount = 0;
    var nextNamePrefix = nameSoFar === '' ? SEPARATOR : nameSoFar + SUBSEPARATOR;
    if (Array.isArray(children)) {
      for (var i = 0; i < children.length; i++) {
        child = children[i];
        nextName = nextNamePrefix + getComponentKey(child, i);
        subtreeCount += traverseAllChildrenImpl(child, nextName, callback, traverseContext);
      }
    } else {
      var iteratorFn = getIteratorFn(children);
      if (iteratorFn) {
        var iterator = iteratorFn.call(children);
        var step;
        if (iteratorFn !== children.entries) {
          var ii = 0;
          while (!(step = iterator.next()).done) {
            child = step.value;
            nextName = nextNamePrefix + getComponentKey(child, ii++);
            subtreeCount += traverseAllChildrenImpl(child, nextName, callback, traverseContext);
          }
        } else {
          if (process.env.NODE_ENV !== 'production') {
            process.env.NODE_ENV !== 'production' ? warning(didWarnAboutMaps, 'Using Maps as children is not yet fully supported. It is an ' + 'experimental feature that might be removed. Convert it to a ' + 'sequence / iterable of keyed ReactElements instead.') : undefined;
            didWarnAboutMaps = true;
          }
          while (!(step = iterator.next()).done) {
            var entry = step.value;
            if (entry) {
              child = entry[1];
              nextName = nextNamePrefix + wrapUserProvidedKey(entry[0]) + SUBSEPARATOR + getComponentKey(child, 0);
              subtreeCount += traverseAllChildrenImpl(child, nextName, callback, traverseContext);
            }
          }
        }
      } else if (type === 'object') {
        var addendum = '';
        if (process.env.NODE_ENV !== 'production') {
          addendum = ' If you meant to render a collection of children, use an array ' + 'instead or wrap the object using createFragment(object) from the ' + 'React add-ons.';
          if (children._isReactElement) {
            addendum = ' It looks like you\'re using an element created by a different ' + 'version of React. Make sure to use only one copy of React.';
          }
          if (ReactCurrentOwner.current) {
            var name = ReactCurrentOwner.current.getName();
            if (name) {
              addendum += ' Check the render method of `' + name + '`.';
            }
          }
        }
        var childrenString = String(children);
        !false ? process.env.NODE_ENV !== 'production' ? invariant(false, 'Objects are not valid as a React child (found: %s).%s', childrenString === '[object Object]' ? 'object with keys {' + Object.keys(children).join(', ') + '}' : childrenString, addendum) : invariant(false) : undefined;
      }
    }
    return subtreeCount;
  }
  function traverseAllChildren(children, callback, traverseContext) {
    if (children == null) {
      return 0;
    }
    return traverseAllChildrenImpl(children, '', callback, traverseContext);
  }
  module.exports = traverseAllChildren;
  return module.exports;
});

$__System.registerDynamic("59", ["52", "1e", "3"], true, function($__require, exports, module) {
  "use strict";
  var process = $__require("3");
  var define,
      global = this,
      GLOBAL = this;
  var traverseAllChildren = $__require('52');
  var warning = $__require('1e');
  function flattenSingleChildIntoContext(traverseContext, child, name) {
    var result = traverseContext;
    var keyUnique = result[name] === undefined;
    if (process.env.NODE_ENV !== 'production') {
      process.env.NODE_ENV !== 'production' ? warning(keyUnique, 'flattenChildren(...): Encountered two children with the same key, ' + '`%s`. Child keys must be unique; when two children share a key, only ' + 'the first child will be used.', name) : undefined;
    }
    if (keyUnique && child != null) {
      result[name] = child;
    }
  }
  function flattenChildren(children) {
    if (children == null) {
      return children;
    }
    var result = {};
    traverseAllChildren(children, flattenSingleChildIntoContext, result);
    return result;
  }
  module.exports = flattenChildren;
  return module.exports;
});

$__System.registerDynamic("5a", ["5b", "5c", "1b", "57", "56", "59", "3"], true, function($__require, exports, module) {
  "use strict";
  var process = $__require("3");
  var define,
      global = this,
      GLOBAL = this;
  var ReactComponentEnvironment = $__require('5b');
  var ReactMultiChildUpdateTypes = $__require('5c');
  var ReactCurrentOwner = $__require('1b');
  var ReactReconciler = $__require('57');
  var ReactChildReconciler = $__require('56');
  var flattenChildren = $__require('59');
  var updateDepth = 0;
  var updateQueue = [];
  var markupQueue = [];
  function enqueueInsertMarkup(parentID, markup, toIndex) {
    updateQueue.push({
      parentID: parentID,
      parentNode: null,
      type: ReactMultiChildUpdateTypes.INSERT_MARKUP,
      markupIndex: markupQueue.push(markup) - 1,
      content: null,
      fromIndex: null,
      toIndex: toIndex
    });
  }
  function enqueueMove(parentID, fromIndex, toIndex) {
    updateQueue.push({
      parentID: parentID,
      parentNode: null,
      type: ReactMultiChildUpdateTypes.MOVE_EXISTING,
      markupIndex: null,
      content: null,
      fromIndex: fromIndex,
      toIndex: toIndex
    });
  }
  function enqueueRemove(parentID, fromIndex) {
    updateQueue.push({
      parentID: parentID,
      parentNode: null,
      type: ReactMultiChildUpdateTypes.REMOVE_NODE,
      markupIndex: null,
      content: null,
      fromIndex: fromIndex,
      toIndex: null
    });
  }
  function enqueueSetMarkup(parentID, markup) {
    updateQueue.push({
      parentID: parentID,
      parentNode: null,
      type: ReactMultiChildUpdateTypes.SET_MARKUP,
      markupIndex: null,
      content: markup,
      fromIndex: null,
      toIndex: null
    });
  }
  function enqueueTextContent(parentID, textContent) {
    updateQueue.push({
      parentID: parentID,
      parentNode: null,
      type: ReactMultiChildUpdateTypes.TEXT_CONTENT,
      markupIndex: null,
      content: textContent,
      fromIndex: null,
      toIndex: null
    });
  }
  function processQueue() {
    if (updateQueue.length) {
      ReactComponentEnvironment.processChildrenUpdates(updateQueue, markupQueue);
      clearQueue();
    }
  }
  function clearQueue() {
    updateQueue.length = 0;
    markupQueue.length = 0;
  }
  var ReactMultiChild = {Mixin: {
      _reconcilerInstantiateChildren: function(nestedChildren, transaction, context) {
        if (process.env.NODE_ENV !== 'production') {
          if (this._currentElement) {
            try {
              ReactCurrentOwner.current = this._currentElement._owner;
              return ReactChildReconciler.instantiateChildren(nestedChildren, transaction, context);
            } finally {
              ReactCurrentOwner.current = null;
            }
          }
        }
        return ReactChildReconciler.instantiateChildren(nestedChildren, transaction, context);
      },
      _reconcilerUpdateChildren: function(prevChildren, nextNestedChildrenElements, transaction, context) {
        var nextChildren;
        if (process.env.NODE_ENV !== 'production') {
          if (this._currentElement) {
            try {
              ReactCurrentOwner.current = this._currentElement._owner;
              nextChildren = flattenChildren(nextNestedChildrenElements);
            } finally {
              ReactCurrentOwner.current = null;
            }
            return ReactChildReconciler.updateChildren(prevChildren, nextChildren, transaction, context);
          }
        }
        nextChildren = flattenChildren(nextNestedChildrenElements);
        return ReactChildReconciler.updateChildren(prevChildren, nextChildren, transaction, context);
      },
      mountChildren: function(nestedChildren, transaction, context) {
        var children = this._reconcilerInstantiateChildren(nestedChildren, transaction, context);
        this._renderedChildren = children;
        var mountImages = [];
        var index = 0;
        for (var name in children) {
          if (children.hasOwnProperty(name)) {
            var child = children[name];
            var rootID = this._rootNodeID + name;
            var mountImage = ReactReconciler.mountComponent(child, rootID, transaction, context);
            child._mountIndex = index++;
            mountImages.push(mountImage);
          }
        }
        return mountImages;
      },
      updateTextContent: function(nextContent) {
        updateDepth++;
        var errorThrown = true;
        try {
          var prevChildren = this._renderedChildren;
          ReactChildReconciler.unmountChildren(prevChildren);
          for (var name in prevChildren) {
            if (prevChildren.hasOwnProperty(name)) {
              this._unmountChild(prevChildren[name]);
            }
          }
          this.setTextContent(nextContent);
          errorThrown = false;
        } finally {
          updateDepth--;
          if (!updateDepth) {
            if (errorThrown) {
              clearQueue();
            } else {
              processQueue();
            }
          }
        }
      },
      updateMarkup: function(nextMarkup) {
        updateDepth++;
        var errorThrown = true;
        try {
          var prevChildren = this._renderedChildren;
          ReactChildReconciler.unmountChildren(prevChildren);
          for (var name in prevChildren) {
            if (prevChildren.hasOwnProperty(name)) {
              this._unmountChildByName(prevChildren[name], name);
            }
          }
          this.setMarkup(nextMarkup);
          errorThrown = false;
        } finally {
          updateDepth--;
          if (!updateDepth) {
            if (errorThrown) {
              clearQueue();
            } else {
              processQueue();
            }
          }
        }
      },
      updateChildren: function(nextNestedChildrenElements, transaction, context) {
        updateDepth++;
        var errorThrown = true;
        try {
          this._updateChildren(nextNestedChildrenElements, transaction, context);
          errorThrown = false;
        } finally {
          updateDepth--;
          if (!updateDepth) {
            if (errorThrown) {
              clearQueue();
            } else {
              processQueue();
            }
          }
        }
      },
      _updateChildren: function(nextNestedChildrenElements, transaction, context) {
        var prevChildren = this._renderedChildren;
        var nextChildren = this._reconcilerUpdateChildren(prevChildren, nextNestedChildrenElements, transaction, context);
        this._renderedChildren = nextChildren;
        if (!nextChildren && !prevChildren) {
          return;
        }
        var name;
        var lastIndex = 0;
        var nextIndex = 0;
        for (name in nextChildren) {
          if (!nextChildren.hasOwnProperty(name)) {
            continue;
          }
          var prevChild = prevChildren && prevChildren[name];
          var nextChild = nextChildren[name];
          if (prevChild === nextChild) {
            this.moveChild(prevChild, nextIndex, lastIndex);
            lastIndex = Math.max(prevChild._mountIndex, lastIndex);
            prevChild._mountIndex = nextIndex;
          } else {
            if (prevChild) {
              lastIndex = Math.max(prevChild._mountIndex, lastIndex);
              this._unmountChild(prevChild);
            }
            this._mountChildByNameAtIndex(nextChild, name, nextIndex, transaction, context);
          }
          nextIndex++;
        }
        for (name in prevChildren) {
          if (prevChildren.hasOwnProperty(name) && !(nextChildren && nextChildren.hasOwnProperty(name))) {
            this._unmountChild(prevChildren[name]);
          }
        }
      },
      unmountChildren: function() {
        var renderedChildren = this._renderedChildren;
        ReactChildReconciler.unmountChildren(renderedChildren);
        this._renderedChildren = null;
      },
      moveChild: function(child, toIndex, lastIndex) {
        if (child._mountIndex < lastIndex) {
          enqueueMove(this._rootNodeID, child._mountIndex, toIndex);
        }
      },
      createChild: function(child, mountImage) {
        enqueueInsertMarkup(this._rootNodeID, mountImage, child._mountIndex);
      },
      removeChild: function(child) {
        enqueueRemove(this._rootNodeID, child._mountIndex);
      },
      setTextContent: function(textContent) {
        enqueueTextContent(this._rootNodeID, textContent);
      },
      setMarkup: function(markup) {
        enqueueSetMarkup(this._rootNodeID, markup);
      },
      _mountChildByNameAtIndex: function(child, name, index, transaction, context) {
        var rootID = this._rootNodeID + name;
        var mountImage = ReactReconciler.mountComponent(child, rootID, transaction, context);
        child._mountIndex = index;
        this.createChild(child, mountImage);
      },
      _unmountChild: function(child) {
        this.removeChild(child);
        child._mountIndex = null;
      }
    }};
  module.exports = ReactMultiChild;
  return module.exports;
});

$__System.registerDynamic("5d", ["43", "4c", "3f", "5e", "30", "5f", "60", "4e", "4f", "53", "54", "55", "3d", "5a", "4d", "61", "8", "1c", "62", "12", "37", "33", "63", "64", "66", "65", "1e", "3"], true, function($__require, exports, module) {
  "use strict";
  var process = $__require("3");
  var define,
      global = this,
      GLOBAL = this;
  var AutoFocusUtils = $__require('43');
  var CSSPropertyOperations = $__require('4c');
  var DOMProperty = $__require('3f');
  var DOMPropertyOperations = $__require('5e');
  var EventConstants = $__require('30');
  var ReactBrowserEventEmitter = $__require('5f');
  var ReactComponentBrowserEnvironment = $__require('60');
  var ReactDOMButton = $__require('4e');
  var ReactDOMInput = $__require('4f');
  var ReactDOMOption = $__require('53');
  var ReactDOMSelect = $__require('54');
  var ReactDOMTextarea = $__require('55');
  var ReactMount = $__require('3d');
  var ReactMultiChild = $__require('5a');
  var ReactPerf = $__require('4d');
  var ReactUpdateQueue = $__require('61');
  var assign = $__require('8');
  var canDefineProperty = $__require('1c');
  var escapeTextContentForBrowser = $__require('62');
  var invariant = $__require('12');
  var isEventSupported = $__require('37');
  var keyOf = $__require('33');
  var setInnerHTML = $__require('63');
  var setTextContent = $__require('64');
  var shallowEqual = $__require('66');
  var validateDOMNesting = $__require('65');
  var warning = $__require('1e');
  var deleteListener = ReactBrowserEventEmitter.deleteListener;
  var listenTo = ReactBrowserEventEmitter.listenTo;
  var registrationNameModules = ReactBrowserEventEmitter.registrationNameModules;
  var CONTENT_TYPES = {
    'string': true,
    'number': true
  };
  var CHILDREN = keyOf({children: null});
  var STYLE = keyOf({style: null});
  var HTML = keyOf({__html: null});
  var ELEMENT_NODE_TYPE = 1;
  function getDeclarationErrorAddendum(internalInstance) {
    if (internalInstance) {
      var owner = internalInstance._currentElement._owner || null;
      if (owner) {
        var name = owner.getName();
        if (name) {
          return ' This DOM node was rendered by `' + name + '`.';
        }
      }
    }
    return '';
  }
  var legacyPropsDescriptor;
  if (process.env.NODE_ENV !== 'production') {
    legacyPropsDescriptor = {props: {
        enumerable: false,
        get: function() {
          var component = this._reactInternalComponent;
          process.env.NODE_ENV !== 'production' ? warning(false, 'ReactDOMComponent: Do not access .props of a DOM node; instead, ' + 'recreate the props as `render` did originally or read the DOM ' + 'properties/attributes directly from this node (e.g., ' + 'this.refs.box.className).%s', getDeclarationErrorAddendum(component)) : undefined;
          return component._currentElement.props;
        }
      }};
  }
  function legacyGetDOMNode() {
    if (process.env.NODE_ENV !== 'production') {
      var component = this._reactInternalComponent;
      process.env.NODE_ENV !== 'production' ? warning(false, 'ReactDOMComponent: Do not access .getDOMNode() of a DOM node; ' + 'instead, use the node directly.%s', getDeclarationErrorAddendum(component)) : undefined;
    }
    return this;
  }
  function legacyIsMounted() {
    var component = this._reactInternalComponent;
    if (process.env.NODE_ENV !== 'production') {
      process.env.NODE_ENV !== 'production' ? warning(false, 'ReactDOMComponent: Do not access .isMounted() of a DOM node.%s', getDeclarationErrorAddendum(component)) : undefined;
    }
    return !!component;
  }
  function legacySetStateEtc() {
    if (process.env.NODE_ENV !== 'production') {
      var component = this._reactInternalComponent;
      process.env.NODE_ENV !== 'production' ? warning(false, 'ReactDOMComponent: Do not access .setState(), .replaceState(), or ' + '.forceUpdate() of a DOM node. This is a no-op.%s', getDeclarationErrorAddendum(component)) : undefined;
    }
  }
  function legacySetProps(partialProps, callback) {
    var component = this._reactInternalComponent;
    if (process.env.NODE_ENV !== 'production') {
      process.env.NODE_ENV !== 'production' ? warning(false, 'ReactDOMComponent: Do not access .setProps() of a DOM node. ' + 'Instead, call ReactDOM.render again at the top level.%s', getDeclarationErrorAddendum(component)) : undefined;
    }
    if (!component) {
      return;
    }
    ReactUpdateQueue.enqueueSetPropsInternal(component, partialProps);
    if (callback) {
      ReactUpdateQueue.enqueueCallbackInternal(component, callback);
    }
  }
  function legacyReplaceProps(partialProps, callback) {
    var component = this._reactInternalComponent;
    if (process.env.NODE_ENV !== 'production') {
      process.env.NODE_ENV !== 'production' ? warning(false, 'ReactDOMComponent: Do not access .replaceProps() of a DOM node. ' + 'Instead, call ReactDOM.render again at the top level.%s', getDeclarationErrorAddendum(component)) : undefined;
    }
    if (!component) {
      return;
    }
    ReactUpdateQueue.enqueueReplacePropsInternal(component, partialProps);
    if (callback) {
      ReactUpdateQueue.enqueueCallbackInternal(component, callback);
    }
  }
  function friendlyStringify(obj) {
    if (typeof obj === 'object') {
      if (Array.isArray(obj)) {
        return '[' + obj.map(friendlyStringify).join(', ') + ']';
      } else {
        var pairs = [];
        for (var key in obj) {
          if (Object.prototype.hasOwnProperty.call(obj, key)) {
            var keyEscaped = /^[a-z$_][\w$_]*$/i.test(key) ? key : JSON.stringify(key);
            pairs.push(keyEscaped + ': ' + friendlyStringify(obj[key]));
          }
        }
        return '{' + pairs.join(', ') + '}';
      }
    } else if (typeof obj === 'string') {
      return JSON.stringify(obj);
    } else if (typeof obj === 'function') {
      return '[function object]';
    }
    return String(obj);
  }
  var styleMutationWarning = {};
  function checkAndWarnForMutatedStyle(style1, style2, component) {
    if (style1 == null || style2 == null) {
      return;
    }
    if (shallowEqual(style1, style2)) {
      return;
    }
    var componentName = component._tag;
    var owner = component._currentElement._owner;
    var ownerName;
    if (owner) {
      ownerName = owner.getName();
    }
    var hash = ownerName + '|' + componentName;
    if (styleMutationWarning.hasOwnProperty(hash)) {
      return;
    }
    styleMutationWarning[hash] = true;
    process.env.NODE_ENV !== 'production' ? warning(false, '`%s` was passed a style object that has previously been mutated. ' + 'Mutating `style` is deprecated. Consider cloning it beforehand. Check ' + 'the `render` %s. Previous style: %s. Mutated style: %s.', componentName, owner ? 'of `' + ownerName + '`' : 'using <' + componentName + '>', friendlyStringify(style1), friendlyStringify(style2)) : undefined;
  }
  function assertValidProps(component, props) {
    if (!props) {
      return;
    }
    if (process.env.NODE_ENV !== 'production') {
      if (voidElementTags[component._tag]) {
        process.env.NODE_ENV !== 'production' ? warning(props.children == null && props.dangerouslySetInnerHTML == null, '%s is a void element tag and must not have `children` or ' + 'use `props.dangerouslySetInnerHTML`.%s', component._tag, component._currentElement._owner ? ' Check the render method of ' + component._currentElement._owner.getName() + '.' : '') : undefined;
      }
    }
    if (props.dangerouslySetInnerHTML != null) {
      !(props.children == null) ? process.env.NODE_ENV !== 'production' ? invariant(false, 'Can only set one of `children` or `props.dangerouslySetInnerHTML`.') : invariant(false) : undefined;
      !(typeof props.dangerouslySetInnerHTML === 'object' && HTML in props.dangerouslySetInnerHTML) ? process.env.NODE_ENV !== 'production' ? invariant(false, '`props.dangerouslySetInnerHTML` must be in the form `{__html: ...}`. ' + 'Please visit https://fb.me/react-invariant-dangerously-set-inner-html ' + 'for more information.') : invariant(false) : undefined;
    }
    if (process.env.NODE_ENV !== 'production') {
      process.env.NODE_ENV !== 'production' ? warning(props.innerHTML == null, 'Directly setting property `innerHTML` is not permitted. ' + 'For more information, lookup documentation on `dangerouslySetInnerHTML`.') : undefined;
      process.env.NODE_ENV !== 'production' ? warning(!props.contentEditable || props.children == null, 'A component is `contentEditable` and contains `children` managed by ' + 'React. It is now your responsibility to guarantee that none of ' + 'those nodes are unexpectedly modified or duplicated. This is ' + 'probably not intentional.') : undefined;
    }
    !(props.style == null || typeof props.style === 'object') ? process.env.NODE_ENV !== 'production' ? invariant(false, 'The `style` prop expects a mapping from style properties to values, ' + 'not a string. For example, style={{marginRight: spacing + \'em\'}} when ' + 'using JSX.%s', getDeclarationErrorAddendum(component)) : invariant(false) : undefined;
  }
  function enqueuePutListener(id, registrationName, listener, transaction) {
    if (process.env.NODE_ENV !== 'production') {
      process.env.NODE_ENV !== 'production' ? warning(registrationName !== 'onScroll' || isEventSupported('scroll', true), 'This browser doesn\'t support the `onScroll` event') : undefined;
    }
    var container = ReactMount.findReactContainerForID(id);
    if (container) {
      var doc = container.nodeType === ELEMENT_NODE_TYPE ? container.ownerDocument : container;
      listenTo(registrationName, doc);
    }
    transaction.getReactMountReady().enqueue(putListener, {
      id: id,
      registrationName: registrationName,
      listener: listener
    });
  }
  function putListener() {
    var listenerToPut = this;
    ReactBrowserEventEmitter.putListener(listenerToPut.id, listenerToPut.registrationName, listenerToPut.listener);
  }
  var mediaEvents = {
    topAbort: 'abort',
    topCanPlay: 'canplay',
    topCanPlayThrough: 'canplaythrough',
    topDurationChange: 'durationchange',
    topEmptied: 'emptied',
    topEncrypted: 'encrypted',
    topEnded: 'ended',
    topError: 'error',
    topLoadedData: 'loadeddata',
    topLoadedMetadata: 'loadedmetadata',
    topLoadStart: 'loadstart',
    topPause: 'pause',
    topPlay: 'play',
    topPlaying: 'playing',
    topProgress: 'progress',
    topRateChange: 'ratechange',
    topSeeked: 'seeked',
    topSeeking: 'seeking',
    topStalled: 'stalled',
    topSuspend: 'suspend',
    topTimeUpdate: 'timeupdate',
    topVolumeChange: 'volumechange',
    topWaiting: 'waiting'
  };
  function trapBubbledEventsLocal() {
    var inst = this;
    !inst._rootNodeID ? process.env.NODE_ENV !== 'production' ? invariant(false, 'Must be mounted to trap events') : invariant(false) : undefined;
    var node = ReactMount.getNode(inst._rootNodeID);
    !node ? process.env.NODE_ENV !== 'production' ? invariant(false, 'trapBubbledEvent(...): Requires node to be rendered.') : invariant(false) : undefined;
    switch (inst._tag) {
      case 'iframe':
        inst._wrapperState.listeners = [ReactBrowserEventEmitter.trapBubbledEvent(EventConstants.topLevelTypes.topLoad, 'load', node)];
        break;
      case 'video':
      case 'audio':
        inst._wrapperState.listeners = [];
        for (var event in mediaEvents) {
          if (mediaEvents.hasOwnProperty(event)) {
            inst._wrapperState.listeners.push(ReactBrowserEventEmitter.trapBubbledEvent(EventConstants.topLevelTypes[event], mediaEvents[event], node));
          }
        }
        break;
      case 'img':
        inst._wrapperState.listeners = [ReactBrowserEventEmitter.trapBubbledEvent(EventConstants.topLevelTypes.topError, 'error', node), ReactBrowserEventEmitter.trapBubbledEvent(EventConstants.topLevelTypes.topLoad, 'load', node)];
        break;
      case 'form':
        inst._wrapperState.listeners = [ReactBrowserEventEmitter.trapBubbledEvent(EventConstants.topLevelTypes.topReset, 'reset', node), ReactBrowserEventEmitter.trapBubbledEvent(EventConstants.topLevelTypes.topSubmit, 'submit', node)];
        break;
    }
  }
  function mountReadyInputWrapper() {
    ReactDOMInput.mountReadyWrapper(this);
  }
  function postUpdateSelectWrapper() {
    ReactDOMSelect.postUpdateWrapper(this);
  }
  var omittedCloseTags = {
    'area': true,
    'base': true,
    'br': true,
    'col': true,
    'embed': true,
    'hr': true,
    'img': true,
    'input': true,
    'keygen': true,
    'link': true,
    'meta': true,
    'param': true,
    'source': true,
    'track': true,
    'wbr': true
  };
  var newlineEatingTags = {
    'listing': true,
    'pre': true,
    'textarea': true
  };
  var voidElementTags = assign({'menuitem': true}, omittedCloseTags);
  var VALID_TAG_REGEX = /^[a-zA-Z][a-zA-Z:_\.\-\d]*$/;
  var validatedTagCache = {};
  var hasOwnProperty = ({}).hasOwnProperty;
  function validateDangerousTag(tag) {
    if (!hasOwnProperty.call(validatedTagCache, tag)) {
      !VALID_TAG_REGEX.test(tag) ? process.env.NODE_ENV !== 'production' ? invariant(false, 'Invalid tag: %s', tag) : invariant(false) : undefined;
      validatedTagCache[tag] = true;
    }
  }
  function processChildContextDev(context, inst) {
    context = assign({}, context);
    var info = context[validateDOMNesting.ancestorInfoContextKey];
    context[validateDOMNesting.ancestorInfoContextKey] = validateDOMNesting.updatedAncestorInfo(info, inst._tag, inst);
    return context;
  }
  function isCustomComponent(tagName, props) {
    return tagName.indexOf('-') >= 0 || props.is != null;
  }
  function ReactDOMComponent(tag) {
    validateDangerousTag(tag);
    this._tag = tag.toLowerCase();
    this._renderedChildren = null;
    this._previousStyle = null;
    this._previousStyleCopy = null;
    this._rootNodeID = null;
    this._wrapperState = null;
    this._topLevelWrapper = null;
    this._nodeWithLegacyProperties = null;
    if (process.env.NODE_ENV !== 'production') {
      this._unprocessedContextDev = null;
      this._processedContextDev = null;
    }
  }
  ReactDOMComponent.displayName = 'ReactDOMComponent';
  ReactDOMComponent.Mixin = {
    construct: function(element) {
      this._currentElement = element;
    },
    mountComponent: function(rootID, transaction, context) {
      this._rootNodeID = rootID;
      var props = this._currentElement.props;
      switch (this._tag) {
        case 'iframe':
        case 'img':
        case 'form':
        case 'video':
        case 'audio':
          this._wrapperState = {listeners: null};
          transaction.getReactMountReady().enqueue(trapBubbledEventsLocal, this);
          break;
        case 'button':
          props = ReactDOMButton.getNativeProps(this, props, context);
          break;
        case 'input':
          ReactDOMInput.mountWrapper(this, props, context);
          props = ReactDOMInput.getNativeProps(this, props, context);
          break;
        case 'option':
          ReactDOMOption.mountWrapper(this, props, context);
          props = ReactDOMOption.getNativeProps(this, props, context);
          break;
        case 'select':
          ReactDOMSelect.mountWrapper(this, props, context);
          props = ReactDOMSelect.getNativeProps(this, props, context);
          context = ReactDOMSelect.processChildContext(this, props, context);
          break;
        case 'textarea':
          ReactDOMTextarea.mountWrapper(this, props, context);
          props = ReactDOMTextarea.getNativeProps(this, props, context);
          break;
      }
      assertValidProps(this, props);
      if (process.env.NODE_ENV !== 'production') {
        if (context[validateDOMNesting.ancestorInfoContextKey]) {
          validateDOMNesting(this._tag, this, context[validateDOMNesting.ancestorInfoContextKey]);
        }
      }
      if (process.env.NODE_ENV !== 'production') {
        this._unprocessedContextDev = context;
        this._processedContextDev = processChildContextDev(context, this);
        context = this._processedContextDev;
      }
      var mountImage;
      if (transaction.useCreateElement) {
        var ownerDocument = context[ReactMount.ownerDocumentContextKey];
        var el = ownerDocument.createElement(this._currentElement.type);
        DOMPropertyOperations.setAttributeForID(el, this._rootNodeID);
        ReactMount.getID(el);
        this._updateDOMProperties({}, props, transaction, el);
        this._createInitialChildren(transaction, props, context, el);
        mountImage = el;
      } else {
        var tagOpen = this._createOpenTagMarkupAndPutListeners(transaction, props);
        var tagContent = this._createContentMarkup(transaction, props, context);
        if (!tagContent && omittedCloseTags[this._tag]) {
          mountImage = tagOpen + '/>';
        } else {
          mountImage = tagOpen + '>' + tagContent + '</' + this._currentElement.type + '>';
        }
      }
      switch (this._tag) {
        case 'input':
          transaction.getReactMountReady().enqueue(mountReadyInputWrapper, this);
        case 'button':
        case 'select':
        case 'textarea':
          if (props.autoFocus) {
            transaction.getReactMountReady().enqueue(AutoFocusUtils.focusDOMComponent, this);
          }
          break;
      }
      return mountImage;
    },
    _createOpenTagMarkupAndPutListeners: function(transaction, props) {
      var ret = '<' + this._currentElement.type;
      for (var propKey in props) {
        if (!props.hasOwnProperty(propKey)) {
          continue;
        }
        var propValue = props[propKey];
        if (propValue == null) {
          continue;
        }
        if (registrationNameModules.hasOwnProperty(propKey)) {
          if (propValue) {
            enqueuePutListener(this._rootNodeID, propKey, propValue, transaction);
          }
        } else {
          if (propKey === STYLE) {
            if (propValue) {
              if (process.env.NODE_ENV !== 'production') {
                this._previousStyle = propValue;
              }
              propValue = this._previousStyleCopy = assign({}, props.style);
            }
            propValue = CSSPropertyOperations.createMarkupForStyles(propValue);
          }
          var markup = null;
          if (this._tag != null && isCustomComponent(this._tag, props)) {
            if (propKey !== CHILDREN) {
              markup = DOMPropertyOperations.createMarkupForCustomAttribute(propKey, propValue);
            }
          } else {
            markup = DOMPropertyOperations.createMarkupForProperty(propKey, propValue);
          }
          if (markup) {
            ret += ' ' + markup;
          }
        }
      }
      if (transaction.renderToStaticMarkup) {
        return ret;
      }
      var markupForID = DOMPropertyOperations.createMarkupForID(this._rootNodeID);
      return ret + ' ' + markupForID;
    },
    _createContentMarkup: function(transaction, props, context) {
      var ret = '';
      var innerHTML = props.dangerouslySetInnerHTML;
      if (innerHTML != null) {
        if (innerHTML.__html != null) {
          ret = innerHTML.__html;
        }
      } else {
        var contentToUse = CONTENT_TYPES[typeof props.children] ? props.children : null;
        var childrenToUse = contentToUse != null ? null : props.children;
        if (contentToUse != null) {
          ret = escapeTextContentForBrowser(contentToUse);
        } else if (childrenToUse != null) {
          var mountImages = this.mountChildren(childrenToUse, transaction, context);
          ret = mountImages.join('');
        }
      }
      if (newlineEatingTags[this._tag] && ret.charAt(0) === '\n') {
        return '\n' + ret;
      } else {
        return ret;
      }
    },
    _createInitialChildren: function(transaction, props, context, el) {
      var innerHTML = props.dangerouslySetInnerHTML;
      if (innerHTML != null) {
        if (innerHTML.__html != null) {
          setInnerHTML(el, innerHTML.__html);
        }
      } else {
        var contentToUse = CONTENT_TYPES[typeof props.children] ? props.children : null;
        var childrenToUse = contentToUse != null ? null : props.children;
        if (contentToUse != null) {
          setTextContent(el, contentToUse);
        } else if (childrenToUse != null) {
          var mountImages = this.mountChildren(childrenToUse, transaction, context);
          for (var i = 0; i < mountImages.length; i++) {
            el.appendChild(mountImages[i]);
          }
        }
      }
    },
    receiveComponent: function(nextElement, transaction, context) {
      var prevElement = this._currentElement;
      this._currentElement = nextElement;
      this.updateComponent(transaction, prevElement, nextElement, context);
    },
    updateComponent: function(transaction, prevElement, nextElement, context) {
      var lastProps = prevElement.props;
      var nextProps = this._currentElement.props;
      switch (this._tag) {
        case 'button':
          lastProps = ReactDOMButton.getNativeProps(this, lastProps);
          nextProps = ReactDOMButton.getNativeProps(this, nextProps);
          break;
        case 'input':
          ReactDOMInput.updateWrapper(this);
          lastProps = ReactDOMInput.getNativeProps(this, lastProps);
          nextProps = ReactDOMInput.getNativeProps(this, nextProps);
          break;
        case 'option':
          lastProps = ReactDOMOption.getNativeProps(this, lastProps);
          nextProps = ReactDOMOption.getNativeProps(this, nextProps);
          break;
        case 'select':
          lastProps = ReactDOMSelect.getNativeProps(this, lastProps);
          nextProps = ReactDOMSelect.getNativeProps(this, nextProps);
          break;
        case 'textarea':
          ReactDOMTextarea.updateWrapper(this);
          lastProps = ReactDOMTextarea.getNativeProps(this, lastProps);
          nextProps = ReactDOMTextarea.getNativeProps(this, nextProps);
          break;
      }
      if (process.env.NODE_ENV !== 'production') {
        if (this._unprocessedContextDev !== context) {
          this._unprocessedContextDev = context;
          this._processedContextDev = processChildContextDev(context, this);
        }
        context = this._processedContextDev;
      }
      assertValidProps(this, nextProps);
      this._updateDOMProperties(lastProps, nextProps, transaction, null);
      this._updateDOMChildren(lastProps, nextProps, transaction, context);
      if (!canDefineProperty && this._nodeWithLegacyProperties) {
        this._nodeWithLegacyProperties.props = nextProps;
      }
      if (this._tag === 'select') {
        transaction.getReactMountReady().enqueue(postUpdateSelectWrapper, this);
      }
    },
    _updateDOMProperties: function(lastProps, nextProps, transaction, node) {
      var propKey;
      var styleName;
      var styleUpdates;
      for (propKey in lastProps) {
        if (nextProps.hasOwnProperty(propKey) || !lastProps.hasOwnProperty(propKey)) {
          continue;
        }
        if (propKey === STYLE) {
          var lastStyle = this._previousStyleCopy;
          for (styleName in lastStyle) {
            if (lastStyle.hasOwnProperty(styleName)) {
              styleUpdates = styleUpdates || {};
              styleUpdates[styleName] = '';
            }
          }
          this._previousStyleCopy = null;
        } else if (registrationNameModules.hasOwnProperty(propKey)) {
          if (lastProps[propKey]) {
            deleteListener(this._rootNodeID, propKey);
          }
        } else if (DOMProperty.properties[propKey] || DOMProperty.isCustomAttribute(propKey)) {
          if (!node) {
            node = ReactMount.getNode(this._rootNodeID);
          }
          DOMPropertyOperations.deleteValueForProperty(node, propKey);
        }
      }
      for (propKey in nextProps) {
        var nextProp = nextProps[propKey];
        var lastProp = propKey === STYLE ? this._previousStyleCopy : lastProps[propKey];
        if (!nextProps.hasOwnProperty(propKey) || nextProp === lastProp) {
          continue;
        }
        if (propKey === STYLE) {
          if (nextProp) {
            if (process.env.NODE_ENV !== 'production') {
              checkAndWarnForMutatedStyle(this._previousStyleCopy, this._previousStyle, this);
              this._previousStyle = nextProp;
            }
            nextProp = this._previousStyleCopy = assign({}, nextProp);
          } else {
            this._previousStyleCopy = null;
          }
          if (lastProp) {
            for (styleName in lastProp) {
              if (lastProp.hasOwnProperty(styleName) && (!nextProp || !nextProp.hasOwnProperty(styleName))) {
                styleUpdates = styleUpdates || {};
                styleUpdates[styleName] = '';
              }
            }
            for (styleName in nextProp) {
              if (nextProp.hasOwnProperty(styleName) && lastProp[styleName] !== nextProp[styleName]) {
                styleUpdates = styleUpdates || {};
                styleUpdates[styleName] = nextProp[styleName];
              }
            }
          } else {
            styleUpdates = nextProp;
          }
        } else if (registrationNameModules.hasOwnProperty(propKey)) {
          if (nextProp) {
            enqueuePutListener(this._rootNodeID, propKey, nextProp, transaction);
          } else if (lastProp) {
            deleteListener(this._rootNodeID, propKey);
          }
        } else if (isCustomComponent(this._tag, nextProps)) {
          if (!node) {
            node = ReactMount.getNode(this._rootNodeID);
          }
          if (propKey === CHILDREN) {
            nextProp = null;
          }
          DOMPropertyOperations.setValueForAttribute(node, propKey, nextProp);
        } else if (DOMProperty.properties[propKey] || DOMProperty.isCustomAttribute(propKey)) {
          if (!node) {
            node = ReactMount.getNode(this._rootNodeID);
          }
          if (nextProp != null) {
            DOMPropertyOperations.setValueForProperty(node, propKey, nextProp);
          } else {
            DOMPropertyOperations.deleteValueForProperty(node, propKey);
          }
        }
      }
      if (styleUpdates) {
        if (!node) {
          node = ReactMount.getNode(this._rootNodeID);
        }
        CSSPropertyOperations.setValueForStyles(node, styleUpdates);
      }
    },
    _updateDOMChildren: function(lastProps, nextProps, transaction, context) {
      var lastContent = CONTENT_TYPES[typeof lastProps.children] ? lastProps.children : null;
      var nextContent = CONTENT_TYPES[typeof nextProps.children] ? nextProps.children : null;
      var lastHtml = lastProps.dangerouslySetInnerHTML && lastProps.dangerouslySetInnerHTML.__html;
      var nextHtml = nextProps.dangerouslySetInnerHTML && nextProps.dangerouslySetInnerHTML.__html;
      var lastChildren = lastContent != null ? null : lastProps.children;
      var nextChildren = nextContent != null ? null : nextProps.children;
      var lastHasContentOrHtml = lastContent != null || lastHtml != null;
      var nextHasContentOrHtml = nextContent != null || nextHtml != null;
      if (lastChildren != null && nextChildren == null) {
        this.updateChildren(null, transaction, context);
      } else if (lastHasContentOrHtml && !nextHasContentOrHtml) {
        this.updateTextContent('');
      }
      if (nextContent != null) {
        if (lastContent !== nextContent) {
          this.updateTextContent('' + nextContent);
        }
      } else if (nextHtml != null) {
        if (lastHtml !== nextHtml) {
          this.updateMarkup('' + nextHtml);
        }
      } else if (nextChildren != null) {
        this.updateChildren(nextChildren, transaction, context);
      }
    },
    unmountComponent: function() {
      switch (this._tag) {
        case 'iframe':
        case 'img':
        case 'form':
        case 'video':
        case 'audio':
          var listeners = this._wrapperState.listeners;
          if (listeners) {
            for (var i = 0; i < listeners.length; i++) {
              listeners[i].remove();
            }
          }
          break;
        case 'input':
          ReactDOMInput.unmountWrapper(this);
          break;
        case 'html':
        case 'head':
        case 'body':
          !false ? process.env.NODE_ENV !== 'production' ? invariant(false, '<%s> tried to unmount. Because of cross-browser quirks it is ' + 'impossible to unmount some top-level components (eg <html>, ' + '<head>, and <body>) reliably and efficiently. To fix this, have a ' + 'single top-level component that never unmounts render these ' + 'elements.', this._tag) : invariant(false) : undefined;
          break;
      }
      this.unmountChildren();
      ReactBrowserEventEmitter.deleteAllListeners(this._rootNodeID);
      ReactComponentBrowserEnvironment.unmountIDFromEnvironment(this._rootNodeID);
      this._rootNodeID = null;
      this._wrapperState = null;
      if (this._nodeWithLegacyProperties) {
        var node = this._nodeWithLegacyProperties;
        node._reactInternalComponent = null;
        this._nodeWithLegacyProperties = null;
      }
    },
    getPublicInstance: function() {
      if (!this._nodeWithLegacyProperties) {
        var node = ReactMount.getNode(this._rootNodeID);
        node._reactInternalComponent = this;
        node.getDOMNode = legacyGetDOMNode;
        node.isMounted = legacyIsMounted;
        node.setState = legacySetStateEtc;
        node.replaceState = legacySetStateEtc;
        node.forceUpdate = legacySetStateEtc;
        node.setProps = legacySetProps;
        node.replaceProps = legacyReplaceProps;
        if (process.env.NODE_ENV !== 'production') {
          if (canDefineProperty) {
            Object.defineProperties(node, legacyPropsDescriptor);
          } else {
            node.props = this._currentElement.props;
          }
        } else {
          node.props = this._currentElement.props;
        }
        this._nodeWithLegacyProperties = node;
      }
      return this._nodeWithLegacyProperties;
    }
  };
  ReactPerf.measureMethods(ReactDOMComponent, 'ReactDOMComponent', {
    mountComponent: 'mountComponent',
    updateComponent: 'updateComponent'
  });
  assign(ReactDOMComponent.prototype, ReactDOMComponent.Mixin, ReactMultiChild.Mixin);
  module.exports = ReactDOMComponent;
  return module.exports;
});

$__System.registerDynamic("67", ["12", "3"], true, function($__require, exports, module) {
  "use strict";
  var process = $__require("3");
  var define,
      global = this,
      GLOBAL = this;
  var invariant = $__require('12');
  function toArray(obj) {
    var length = obj.length;
    !(!Array.isArray(obj) && (typeof obj === 'object' || typeof obj === 'function')) ? process.env.NODE_ENV !== 'production' ? invariant(false, 'toArray: Array-like object expected') : invariant(false) : undefined;
    !(typeof length === 'number') ? process.env.NODE_ENV !== 'production' ? invariant(false, 'toArray: Object needs a length property') : invariant(false) : undefined;
    !(length === 0 || length - 1 in obj) ? process.env.NODE_ENV !== 'production' ? invariant(false, 'toArray: Object should have keys for indices') : invariant(false) : undefined;
    if (obj.hasOwnProperty) {
      try {
        return Array.prototype.slice.call(obj);
      } catch (e) {}
    }
    var ret = Array(length);
    for (var ii = 0; ii < length; ii++) {
      ret[ii] = obj[ii];
    }
    return ret;
  }
  module.exports = toArray;
  return module.exports;
});

$__System.registerDynamic("68", ["67", "3"], true, function($__require, exports, module) {
  "use strict";
  var process = $__require("3");
  var define,
      global = this,
      GLOBAL = this;
  var toArray = $__require('67');
  function hasArrayNature(obj) {
    return (!!obj && (typeof obj == 'object' || typeof obj == 'function') && 'length' in obj && !('setInterval' in obj) && typeof obj.nodeType != 'number' && (Array.isArray(obj) || 'callee' in obj || 'item' in obj));
  }
  function createArrayFromMixed(obj) {
    if (!hasArrayNature(obj)) {
      return [obj];
    } else if (Array.isArray(obj)) {
      return obj.slice();
    } else {
      return toArray(obj);
    }
  }
  module.exports = createArrayFromMixed;
  return module.exports;
});

$__System.registerDynamic("69", ["32", "68", "6a", "12", "3"], true, function($__require, exports, module) {
  "use strict";
  var process = $__require("3");
  var define,
      global = this,
      GLOBAL = this;
  var ExecutionEnvironment = $__require('32');
  var createArrayFromMixed = $__require('68');
  var getMarkupWrap = $__require('6a');
  var invariant = $__require('12');
  var dummyNode = ExecutionEnvironment.canUseDOM ? document.createElement('div') : null;
  var nodeNamePattern = /^\s*<(\w+)/;
  function getNodeName(markup) {
    var nodeNameMatch = markup.match(nodeNamePattern);
    return nodeNameMatch && nodeNameMatch[1].toLowerCase();
  }
  function createNodesFromMarkup(markup, handleScript) {
    var node = dummyNode;
    !!!dummyNode ? process.env.NODE_ENV !== 'production' ? invariant(false, 'createNodesFromMarkup dummy not initialized') : invariant(false) : undefined;
    var nodeName = getNodeName(markup);
    var wrap = nodeName && getMarkupWrap(nodeName);
    if (wrap) {
      node.innerHTML = wrap[1] + markup + wrap[2];
      var wrapDepth = wrap[0];
      while (wrapDepth--) {
        node = node.lastChild;
      }
    } else {
      node.innerHTML = markup;
    }
    var scripts = node.getElementsByTagName('script');
    if (scripts.length) {
      !handleScript ? process.env.NODE_ENV !== 'production' ? invariant(false, 'createNodesFromMarkup(...): Unexpected <script> element rendered.') : invariant(false) : undefined;
      createArrayFromMixed(scripts).forEach(handleScript);
    }
    var nodes = createArrayFromMixed(node.childNodes);
    while (node.lastChild) {
      node.removeChild(node.lastChild);
    }
    return nodes;
  }
  module.exports = createNodesFromMarkup;
  return module.exports;
});

$__System.registerDynamic("6a", ["32", "12", "3"], true, function($__require, exports, module) {
  "use strict";
  var process = $__require("3");
  var define,
      global = this,
      GLOBAL = this;
  var ExecutionEnvironment = $__require('32');
  var invariant = $__require('12');
  var dummyNode = ExecutionEnvironment.canUseDOM ? document.createElement('div') : null;
  var shouldWrap = {};
  var selectWrap = [1, '<select multiple="true">', '</select>'];
  var tableWrap = [1, '<table>', '</table>'];
  var trWrap = [3, '<table><tbody><tr>', '</tr></tbody></table>'];
  var svgWrap = [1, '<svg xmlns="http://www.w3.org/2000/svg">', '</svg>'];
  var markupWrap = {
    '*': [1, '?<div>', '</div>'],
    'area': [1, '<map>', '</map>'],
    'col': [2, '<table><tbody></tbody><colgroup>', '</colgroup></table>'],
    'legend': [1, '<fieldset>', '</fieldset>'],
    'param': [1, '<object>', '</object>'],
    'tr': [2, '<table><tbody>', '</tbody></table>'],
    'optgroup': selectWrap,
    'option': selectWrap,
    'caption': tableWrap,
    'colgroup': tableWrap,
    'tbody': tableWrap,
    'tfoot': tableWrap,
    'thead': tableWrap,
    'td': trWrap,
    'th': trWrap
  };
  var svgElements = ['circle', 'clipPath', 'defs', 'ellipse', 'g', 'image', 'line', 'linearGradient', 'mask', 'path', 'pattern', 'polygon', 'polyline', 'radialGradient', 'rect', 'stop', 'text', 'tspan'];
  svgElements.forEach(function(nodeName) {
    markupWrap[nodeName] = svgWrap;
    shouldWrap[nodeName] = true;
  });
  function getMarkupWrap(nodeName) {
    !!!dummyNode ? process.env.NODE_ENV !== 'production' ? invariant(false, 'Markup wrapping node not initialized') : invariant(false) : undefined;
    if (!markupWrap.hasOwnProperty(nodeName)) {
      nodeName = '*';
    }
    if (!shouldWrap.hasOwnProperty(nodeName)) {
      if (nodeName === '*') {
        dummyNode.innerHTML = '<link />';
      } else {
        dummyNode.innerHTML = '<' + nodeName + '></' + nodeName + '>';
      }
      shouldWrap[nodeName] = !dummyNode.firstChild;
    }
    return shouldWrap[nodeName] ? markupWrap[nodeName] : null;
  }
  module.exports = getMarkupWrap;
  return module.exports;
});

$__System.registerDynamic("6b", ["32", "69", "9", "6a", "12", "3"], true, function($__require, exports, module) {
  "use strict";
  var process = $__require("3");
  var define,
      global = this,
      GLOBAL = this;
  var ExecutionEnvironment = $__require('32');
  var createNodesFromMarkup = $__require('69');
  var emptyFunction = $__require('9');
  var getMarkupWrap = $__require('6a');
  var invariant = $__require('12');
  var OPEN_TAG_NAME_EXP = /^(<[^ \/>]+)/;
  var RESULT_INDEX_ATTR = 'data-danger-index';
  function getNodeName(markup) {
    return markup.substring(1, markup.indexOf(' '));
  }
  var Danger = {
    dangerouslyRenderMarkup: function(markupList) {
      !ExecutionEnvironment.canUseDOM ? process.env.NODE_ENV !== 'production' ? invariant(false, 'dangerouslyRenderMarkup(...): Cannot render markup in a worker ' + 'thread. Make sure `window` and `document` are available globally ' + 'before requiring React when unit testing or use ' + 'ReactDOMServer.renderToString for server rendering.') : invariant(false) : undefined;
      var nodeName;
      var markupByNodeName = {};
      for (var i = 0; i < markupList.length; i++) {
        !markupList[i] ? process.env.NODE_ENV !== 'production' ? invariant(false, 'dangerouslyRenderMarkup(...): Missing markup.') : invariant(false) : undefined;
        nodeName = getNodeName(markupList[i]);
        nodeName = getMarkupWrap(nodeName) ? nodeName : '*';
        markupByNodeName[nodeName] = markupByNodeName[nodeName] || [];
        markupByNodeName[nodeName][i] = markupList[i];
      }
      var resultList = [];
      var resultListAssignmentCount = 0;
      for (nodeName in markupByNodeName) {
        if (!markupByNodeName.hasOwnProperty(nodeName)) {
          continue;
        }
        var markupListByNodeName = markupByNodeName[nodeName];
        var resultIndex;
        for (resultIndex in markupListByNodeName) {
          if (markupListByNodeName.hasOwnProperty(resultIndex)) {
            var markup = markupListByNodeName[resultIndex];
            markupListByNodeName[resultIndex] = markup.replace(OPEN_TAG_NAME_EXP, '$1 ' + RESULT_INDEX_ATTR + '="' + resultIndex + '" ');
          }
        }
        var renderNodes = createNodesFromMarkup(markupListByNodeName.join(''), emptyFunction);
        for (var j = 0; j < renderNodes.length; ++j) {
          var renderNode = renderNodes[j];
          if (renderNode.hasAttribute && renderNode.hasAttribute(RESULT_INDEX_ATTR)) {
            resultIndex = +renderNode.getAttribute(RESULT_INDEX_ATTR);
            renderNode.removeAttribute(RESULT_INDEX_ATTR);
            !!resultList.hasOwnProperty(resultIndex) ? process.env.NODE_ENV !== 'production' ? invariant(false, 'Danger: Assigning to an already-occupied result index.') : invariant(false) : undefined;
            resultList[resultIndex] = renderNode;
            resultListAssignmentCount += 1;
          } else if (process.env.NODE_ENV !== 'production') {
            console.error('Danger: Discarding unexpected node:', renderNode);
          }
        }
      }
      !(resultListAssignmentCount === resultList.length) ? process.env.NODE_ENV !== 'production' ? invariant(false, 'Danger: Did not assign to every index of resultList.') : invariant(false) : undefined;
      !(resultList.length === markupList.length) ? process.env.NODE_ENV !== 'production' ? invariant(false, 'Danger: Expected markup to render %s nodes, but rendered %s.', markupList.length, resultList.length) : invariant(false) : undefined;
      return resultList;
    },
    dangerouslyReplaceNodeWithMarkup: function(oldChild, markup) {
      !ExecutionEnvironment.canUseDOM ? process.env.NODE_ENV !== 'production' ? invariant(false, 'dangerouslyReplaceNodeWithMarkup(...): Cannot render markup in a ' + 'worker thread. Make sure `window` and `document` are available ' + 'globally before requiring React when unit testing or use ' + 'ReactDOMServer.renderToString() for server rendering.') : invariant(false) : undefined;
      !markup ? process.env.NODE_ENV !== 'production' ? invariant(false, 'dangerouslyReplaceNodeWithMarkup(...): Missing markup.') : invariant(false) : undefined;
      !(oldChild.tagName.toLowerCase() !== 'html') ? process.env.NODE_ENV !== 'production' ? invariant(false, 'dangerouslyReplaceNodeWithMarkup(...): Cannot replace markup of the ' + '<html> node. This is because browser quirks make this unreliable ' + 'and/or slow. If you want to render to the root you must use ' + 'server rendering. See ReactDOMServer.renderToString().') : invariant(false) : undefined;
      var newChild;
      if (typeof markup === 'string') {
        newChild = createNodesFromMarkup(markup, emptyFunction)[0];
      } else {
        newChild = markup;
      }
      oldChild.parentNode.replaceChild(newChild, oldChild);
    }
  };
  module.exports = Danger;
  return module.exports;
});

$__System.registerDynamic("5c", ["6c", "3"], true, function($__require, exports, module) {
  "use strict";
  var process = $__require("3");
  var define,
      global = this,
      GLOBAL = this;
  var keyMirror = $__require('6c');
  var ReactMultiChildUpdateTypes = keyMirror({
    INSERT_MARKUP: null,
    MOVE_EXISTING: null,
    REMOVE_NODE: null,
    SET_MARKUP: null,
    TEXT_CONTENT: null
  });
  module.exports = ReactMultiChildUpdateTypes;
  return module.exports;
});

$__System.registerDynamic("6d", ["6b", "5c", "4d", "63", "64", "12", "3"], true, function($__require, exports, module) {
  "use strict";
  var process = $__require("3");
  var define,
      global = this,
      GLOBAL = this;
  var Danger = $__require('6b');
  var ReactMultiChildUpdateTypes = $__require('5c');
  var ReactPerf = $__require('4d');
  var setInnerHTML = $__require('63');
  var setTextContent = $__require('64');
  var invariant = $__require('12');
  function insertChildAt(parentNode, childNode, index) {
    var beforeChild = index >= parentNode.childNodes.length ? null : parentNode.childNodes.item(index);
    parentNode.insertBefore(childNode, beforeChild);
  }
  var DOMChildrenOperations = {
    dangerouslyReplaceNodeWithMarkup: Danger.dangerouslyReplaceNodeWithMarkup,
    updateTextContent: setTextContent,
    processUpdates: function(updates, markupList) {
      var update;
      var initialChildren = null;
      var updatedChildren = null;
      for (var i = 0; i < updates.length; i++) {
        update = updates[i];
        if (update.type === ReactMultiChildUpdateTypes.MOVE_EXISTING || update.type === ReactMultiChildUpdateTypes.REMOVE_NODE) {
          var updatedIndex = update.fromIndex;
          var updatedChild = update.parentNode.childNodes[updatedIndex];
          var parentID = update.parentID;
          !updatedChild ? process.env.NODE_ENV !== 'production' ? invariant(false, 'processUpdates(): Unable to find child %s of element. This ' + 'probably means the DOM was unexpectedly mutated (e.g., by the ' + 'browser), usually due to forgetting a <tbody> when using tables, ' + 'nesting tags like <form>, <p>, or <a>, or using non-SVG elements ' + 'in an <svg> parent. Try inspecting the child nodes of the element ' + 'with React ID `%s`.', updatedIndex, parentID) : invariant(false) : undefined;
          initialChildren = initialChildren || {};
          initialChildren[parentID] = initialChildren[parentID] || [];
          initialChildren[parentID][updatedIndex] = updatedChild;
          updatedChildren = updatedChildren || [];
          updatedChildren.push(updatedChild);
        }
      }
      var renderedMarkup;
      if (markupList.length && typeof markupList[0] === 'string') {
        renderedMarkup = Danger.dangerouslyRenderMarkup(markupList);
      } else {
        renderedMarkup = markupList;
      }
      if (updatedChildren) {
        for (var j = 0; j < updatedChildren.length; j++) {
          updatedChildren[j].parentNode.removeChild(updatedChildren[j]);
        }
      }
      for (var k = 0; k < updates.length; k++) {
        update = updates[k];
        switch (update.type) {
          case ReactMultiChildUpdateTypes.INSERT_MARKUP:
            insertChildAt(update.parentNode, renderedMarkup[update.markupIndex], update.toIndex);
            break;
          case ReactMultiChildUpdateTypes.MOVE_EXISTING:
            insertChildAt(update.parentNode, initialChildren[update.parentID][update.fromIndex], update.toIndex);
            break;
          case ReactMultiChildUpdateTypes.SET_MARKUP:
            setInnerHTML(update.parentNode, update.content);
            break;
          case ReactMultiChildUpdateTypes.TEXT_CONTENT:
            setTextContent(update.parentNode, update.content);
            break;
          case ReactMultiChildUpdateTypes.REMOVE_NODE:
            break;
        }
      }
    }
  };
  ReactPerf.measureMethods(DOMChildrenOperations, 'DOMChildrenOperations', {updateTextContent: 'updateTextContent'});
  module.exports = DOMChildrenOperations;
  return module.exports;
});

$__System.registerDynamic("6e", ["62", "3"], true, function($__require, exports, module) {
  "use strict";
  var process = $__require("3");
  var define,
      global = this,
      GLOBAL = this;
  var escapeTextContentForBrowser = $__require('62');
  function quoteAttributeValueForBrowser(value) {
    return '"' + escapeTextContentForBrowser(value) + '"';
  }
  module.exports = quoteAttributeValueForBrowser;
  return module.exports;
});

$__System.registerDynamic("5e", ["3f", "4d", "6e", "1e", "3"], true, function($__require, exports, module) {
  "use strict";
  var process = $__require("3");
  var define,
      global = this,
      GLOBAL = this;
  var DOMProperty = $__require('3f');
  var ReactPerf = $__require('4d');
  var quoteAttributeValueForBrowser = $__require('6e');
  var warning = $__require('1e');
  var VALID_ATTRIBUTE_NAME_REGEX = /^[a-zA-Z_][\w\.\-]*$/;
  var illegalAttributeNameCache = {};
  var validatedAttributeNameCache = {};
  function isAttributeNameSafe(attributeName) {
    if (validatedAttributeNameCache.hasOwnProperty(attributeName)) {
      return true;
    }
    if (illegalAttributeNameCache.hasOwnProperty(attributeName)) {
      return false;
    }
    if (VALID_ATTRIBUTE_NAME_REGEX.test(attributeName)) {
      validatedAttributeNameCache[attributeName] = true;
      return true;
    }
    illegalAttributeNameCache[attributeName] = true;
    process.env.NODE_ENV !== 'production' ? warning(false, 'Invalid attribute name: `%s`', attributeName) : undefined;
    return false;
  }
  function shouldIgnoreValue(propertyInfo, value) {
    return value == null || propertyInfo.hasBooleanValue && !value || propertyInfo.hasNumericValue && isNaN(value) || propertyInfo.hasPositiveNumericValue && value < 1 || propertyInfo.hasOverloadedBooleanValue && value === false;
  }
  if (process.env.NODE_ENV !== 'production') {
    var reactProps = {
      children: true,
      dangerouslySetInnerHTML: true,
      key: true,
      ref: true
    };
    var warnedProperties = {};
    var warnUnknownProperty = function(name) {
      if (reactProps.hasOwnProperty(name) && reactProps[name] || warnedProperties.hasOwnProperty(name) && warnedProperties[name]) {
        return;
      }
      warnedProperties[name] = true;
      var lowerCasedName = name.toLowerCase();
      var standardName = DOMProperty.isCustomAttribute(lowerCasedName) ? lowerCasedName : DOMProperty.getPossibleStandardName.hasOwnProperty(lowerCasedName) ? DOMProperty.getPossibleStandardName[lowerCasedName] : null;
      process.env.NODE_ENV !== 'production' ? warning(standardName == null, 'Unknown DOM property %s. Did you mean %s?', name, standardName) : undefined;
    };
  }
  var DOMPropertyOperations = {
    createMarkupForID: function(id) {
      return DOMProperty.ID_ATTRIBUTE_NAME + '=' + quoteAttributeValueForBrowser(id);
    },
    setAttributeForID: function(node, id) {
      node.setAttribute(DOMProperty.ID_ATTRIBUTE_NAME, id);
    },
    createMarkupForProperty: function(name, value) {
      var propertyInfo = DOMProperty.properties.hasOwnProperty(name) ? DOMProperty.properties[name] : null;
      if (propertyInfo) {
        if (shouldIgnoreValue(propertyInfo, value)) {
          return '';
        }
        var attributeName = propertyInfo.attributeName;
        if (propertyInfo.hasBooleanValue || propertyInfo.hasOverloadedBooleanValue && value === true) {
          return attributeName + '=""';
        }
        return attributeName + '=' + quoteAttributeValueForBrowser(value);
      } else if (DOMProperty.isCustomAttribute(name)) {
        if (value == null) {
          return '';
        }
        return name + '=' + quoteAttributeValueForBrowser(value);
      } else if (process.env.NODE_ENV !== 'production') {
        warnUnknownProperty(name);
      }
      return null;
    },
    createMarkupForCustomAttribute: function(name, value) {
      if (!isAttributeNameSafe(name) || value == null) {
        return '';
      }
      return name + '=' + quoteAttributeValueForBrowser(value);
    },
    setValueForProperty: function(node, name, value) {
      var propertyInfo = DOMProperty.properties.hasOwnProperty(name) ? DOMProperty.properties[name] : null;
      if (propertyInfo) {
        var mutationMethod = propertyInfo.mutationMethod;
        if (mutationMethod) {
          mutationMethod(node, value);
        } else if (shouldIgnoreValue(propertyInfo, value)) {
          this.deleteValueForProperty(node, name);
        } else if (propertyInfo.mustUseAttribute) {
          var attributeName = propertyInfo.attributeName;
          var namespace = propertyInfo.attributeNamespace;
          if (namespace) {
            node.setAttributeNS(namespace, attributeName, '' + value);
          } else if (propertyInfo.hasBooleanValue || propertyInfo.hasOverloadedBooleanValue && value === true) {
            node.setAttribute(attributeName, '');
          } else {
            node.setAttribute(attributeName, '' + value);
          }
        } else {
          var propName = propertyInfo.propertyName;
          if (!propertyInfo.hasSideEffects || '' + node[propName] !== '' + value) {
            node[propName] = value;
          }
        }
      } else if (DOMProperty.isCustomAttribute(name)) {
        DOMPropertyOperations.setValueForAttribute(node, name, value);
      } else if (process.env.NODE_ENV !== 'production') {
        warnUnknownProperty(name);
      }
    },
    setValueForAttribute: function(node, name, value) {
      if (!isAttributeNameSafe(name)) {
        return;
      }
      if (value == null) {
        node.removeAttribute(name);
      } else {
        node.setAttribute(name, '' + value);
      }
    },
    deleteValueForProperty: function(node, name) {
      var propertyInfo = DOMProperty.properties.hasOwnProperty(name) ? DOMProperty.properties[name] : null;
      if (propertyInfo) {
        var mutationMethod = propertyInfo.mutationMethod;
        if (mutationMethod) {
          mutationMethod(node, undefined);
        } else if (propertyInfo.mustUseAttribute) {
          node.removeAttribute(propertyInfo.attributeName);
        } else {
          var propName = propertyInfo.propertyName;
          var defaultValue = DOMProperty.getDefaultValueForProperty(node.nodeName, propName);
          if (!propertyInfo.hasSideEffects || '' + node[propName] !== defaultValue) {
            node[propName] = defaultValue;
          }
        }
      } else if (DOMProperty.isCustomAttribute(name)) {
        node.removeAttribute(name);
      } else if (process.env.NODE_ENV !== 'production') {
        warnUnknownProperty(name);
      }
    }
  };
  ReactPerf.measureMethods(DOMPropertyOperations, 'DOMPropertyOperations', {
    setValueForProperty: 'setValueForProperty',
    setValueForAttribute: 'setValueForAttribute',
    deleteValueForProperty: 'deleteValueForProperty'
  });
  module.exports = DOMPropertyOperations;
  return module.exports;
});

$__System.registerDynamic("50", ["6d", "5e", "3d", "4d", "12", "3"], true, function($__require, exports, module) {
  "use strict";
  var process = $__require("3");
  var define,
      global = this,
      GLOBAL = this;
  var DOMChildrenOperations = $__require('6d');
  var DOMPropertyOperations = $__require('5e');
  var ReactMount = $__require('3d');
  var ReactPerf = $__require('4d');
  var invariant = $__require('12');
  var INVALID_PROPERTY_ERRORS = {
    dangerouslySetInnerHTML: '`dangerouslySetInnerHTML` must be set using `updateInnerHTMLByID()`.',
    style: '`style` must be set using `updateStylesByID()`.'
  };
  var ReactDOMIDOperations = {
    updatePropertyByID: function(id, name, value) {
      var node = ReactMount.getNode(id);
      !!INVALID_PROPERTY_ERRORS.hasOwnProperty(name) ? process.env.NODE_ENV !== 'production' ? invariant(false, 'updatePropertyByID(...): %s', INVALID_PROPERTY_ERRORS[name]) : invariant(false) : undefined;
      if (value != null) {
        DOMPropertyOperations.setValueForProperty(node, name, value);
      } else {
        DOMPropertyOperations.deleteValueForProperty(node, name);
      }
    },
    dangerouslyReplaceNodeWithMarkupByID: function(id, markup) {
      var node = ReactMount.getNode(id);
      DOMChildrenOperations.dangerouslyReplaceNodeWithMarkup(node, markup);
    },
    dangerouslyProcessChildrenUpdates: function(updates, markup) {
      for (var i = 0; i < updates.length; i++) {
        updates[i].parentNode = ReactMount.getNode(updates[i].parentID);
      }
      DOMChildrenOperations.processUpdates(updates, markup);
    }
  };
  ReactPerf.measureMethods(ReactDOMIDOperations, 'ReactDOMIDOperations', {
    dangerouslyReplaceNodeWithMarkupByID: 'dangerouslyReplaceNodeWithMarkupByID',
    dangerouslyProcessChildrenUpdates: 'dangerouslyProcessChildrenUpdates'
  });
  module.exports = ReactDOMIDOperations;
  return module.exports;
});

$__System.registerDynamic("60", ["50", "3d", "3"], true, function($__require, exports, module) {
  "use strict";
  var process = $__require("3");
  var define,
      global = this,
      GLOBAL = this;
  var ReactDOMIDOperations = $__require('50');
  var ReactMount = $__require('3d');
  var ReactComponentBrowserEnvironment = {
    processChildrenUpdates: ReactDOMIDOperations.dangerouslyProcessChildrenUpdates,
    replaceNodeWithMarkupByID: ReactDOMIDOperations.dangerouslyReplaceNodeWithMarkupByID,
    unmountIDFromEnvironment: function(rootNodeID) {
      ReactMount.purgeID(rootNodeID);
    }
  };
  module.exports = ReactComponentBrowserEnvironment;
  return module.exports;
});

$__System.registerDynamic("62", ["3"], true, function($__require, exports, module) {
  "use strict";
  var process = $__require("3");
  var define,
      global = this,
      GLOBAL = this;
  var ESCAPE_LOOKUP = {
    '&': '&amp;',
    '>': '&gt;',
    '<': '&lt;',
    '"': '&quot;',
    '\'': '&#x27;'
  };
  var ESCAPE_REGEX = /[&><"']/g;
  function escaper(match) {
    return ESCAPE_LOOKUP[match];
  }
  function escapeTextContentForBrowser(text) {
    return ('' + text).replace(ESCAPE_REGEX, escaper);
  }
  module.exports = escapeTextContentForBrowser;
  return module.exports;
});

$__System.registerDynamic("64", ["32", "62", "63", "3"], true, function($__require, exports, module) {
  "use strict";
  var process = $__require("3");
  var define,
      global = this,
      GLOBAL = this;
  var ExecutionEnvironment = $__require('32');
  var escapeTextContentForBrowser = $__require('62');
  var setInnerHTML = $__require('63');
  var setTextContent = function(node, text) {
    node.textContent = text;
  };
  if (ExecutionEnvironment.canUseDOM) {
    if (!('textContent' in document.documentElement)) {
      setTextContent = function(node, text) {
        setInnerHTML(node, escapeTextContentForBrowser(text));
      };
    }
  }
  module.exports = setTextContent;
  return module.exports;
});

$__System.registerDynamic("6f", ["6d", "5e", "60", "3d", "8", "62", "64", "65", "3"], true, function($__require, exports, module) {
  "use strict";
  var process = $__require("3");
  var define,
      global = this,
      GLOBAL = this;
  var DOMChildrenOperations = $__require('6d');
  var DOMPropertyOperations = $__require('5e');
  var ReactComponentBrowserEnvironment = $__require('60');
  var ReactMount = $__require('3d');
  var assign = $__require('8');
  var escapeTextContentForBrowser = $__require('62');
  var setTextContent = $__require('64');
  var validateDOMNesting = $__require('65');
  var ReactDOMTextComponent = function(props) {};
  assign(ReactDOMTextComponent.prototype, {
    construct: function(text) {
      this._currentElement = text;
      this._stringText = '' + text;
      this._rootNodeID = null;
      this._mountIndex = 0;
    },
    mountComponent: function(rootID, transaction, context) {
      if (process.env.NODE_ENV !== 'production') {
        if (context[validateDOMNesting.ancestorInfoContextKey]) {
          validateDOMNesting('span', null, context[validateDOMNesting.ancestorInfoContextKey]);
        }
      }
      this._rootNodeID = rootID;
      if (transaction.useCreateElement) {
        var ownerDocument = context[ReactMount.ownerDocumentContextKey];
        var el = ownerDocument.createElement('span');
        DOMPropertyOperations.setAttributeForID(el, rootID);
        ReactMount.getID(el);
        setTextContent(el, this._stringText);
        return el;
      } else {
        var escapedText = escapeTextContentForBrowser(this._stringText);
        if (transaction.renderToStaticMarkup) {
          return escapedText;
        }
        return '<span ' + DOMPropertyOperations.createMarkupForID(rootID) + '>' + escapedText + '</span>';
      }
    },
    receiveComponent: function(nextText, transaction) {
      if (nextText !== this._currentElement) {
        this._currentElement = nextText;
        var nextStringText = '' + nextText;
        if (nextStringText !== this._stringText) {
          this._stringText = nextStringText;
          var node = ReactMount.getNode(this._rootNodeID);
          DOMChildrenOperations.updateTextContent(node, nextStringText);
        }
      }
    },
    unmountComponent: function() {
      ReactComponentBrowserEnvironment.unmountIDFromEnvironment(this._rootNodeID);
    }
  });
  module.exports = ReactDOMTextComponent;
  return module.exports;
});

$__System.registerDynamic("70", ["3"], true, function($__require, exports, module) {
  "use strict";
  var process = $__require("3");
  var define,
      global = this,
      GLOBAL = this;
  function getUnboundedScrollPosition(scrollable) {
    if (scrollable === window) {
      return {
        x: window.pageXOffset || document.documentElement.scrollLeft,
        y: window.pageYOffset || document.documentElement.scrollTop
      };
    }
    return {
      x: scrollable.scrollLeft,
      y: scrollable.scrollTop
    };
  }
  module.exports = getUnboundedScrollPosition;
  return module.exports;
});

$__System.registerDynamic("71", ["72", "32", "5", "d", "3d", "f", "8", "36", "70", "3"], true, function($__require, exports, module) {
  "use strict";
  var process = $__require("3");
  var define,
      global = this,
      GLOBAL = this;
  var EventListener = $__require('72');
  var ExecutionEnvironment = $__require('32');
  var PooledClass = $__require('5');
  var ReactInstanceHandles = $__require('d');
  var ReactMount = $__require('3d');
  var ReactUpdates = $__require('f');
  var assign = $__require('8');
  var getEventTarget = $__require('36');
  var getUnboundedScrollPosition = $__require('70');
  var DOCUMENT_FRAGMENT_NODE_TYPE = 11;
  function findParent(node) {
    var nodeID = ReactMount.getID(node);
    var rootID = ReactInstanceHandles.getReactRootIDFromNodeID(nodeID);
    var container = ReactMount.findReactContainerForID(rootID);
    var parent = ReactMount.getFirstReactDOM(container);
    return parent;
  }
  function TopLevelCallbackBookKeeping(topLevelType, nativeEvent) {
    this.topLevelType = topLevelType;
    this.nativeEvent = nativeEvent;
    this.ancestors = [];
  }
  assign(TopLevelCallbackBookKeeping.prototype, {destructor: function() {
      this.topLevelType = null;
      this.nativeEvent = null;
      this.ancestors.length = 0;
    }});
  PooledClass.addPoolingTo(TopLevelCallbackBookKeeping, PooledClass.twoArgumentPooler);
  function handleTopLevelImpl(bookKeeping) {
    void handleTopLevelWithPath;
    handleTopLevelWithoutPath(bookKeeping);
  }
  function handleTopLevelWithoutPath(bookKeeping) {
    var topLevelTarget = ReactMount.getFirstReactDOM(getEventTarget(bookKeeping.nativeEvent)) || window;
    var ancestor = topLevelTarget;
    while (ancestor) {
      bookKeeping.ancestors.push(ancestor);
      ancestor = findParent(ancestor);
    }
    for (var i = 0; i < bookKeeping.ancestors.length; i++) {
      topLevelTarget = bookKeeping.ancestors[i];
      var topLevelTargetID = ReactMount.getID(topLevelTarget) || '';
      ReactEventListener._handleTopLevel(bookKeeping.topLevelType, topLevelTarget, topLevelTargetID, bookKeeping.nativeEvent, getEventTarget(bookKeeping.nativeEvent));
    }
  }
  function handleTopLevelWithPath(bookKeeping) {
    var path = bookKeeping.nativeEvent.path;
    var currentNativeTarget = path[0];
    var eventsFired = 0;
    for (var i = 0; i < path.length; i++) {
      var currentPathElement = path[i];
      if (currentPathElement.nodeType === DOCUMENT_FRAGMENT_NODE_TYPE) {
        currentNativeTarget = path[i + 1];
      }
      var reactParent = ReactMount.getFirstReactDOM(currentPathElement);
      if (reactParent === currentPathElement) {
        var currentPathElementID = ReactMount.getID(currentPathElement);
        var newRootID = ReactInstanceHandles.getReactRootIDFromNodeID(currentPathElementID);
        bookKeeping.ancestors.push(currentPathElement);
        var topLevelTargetID = ReactMount.getID(currentPathElement) || '';
        eventsFired++;
        ReactEventListener._handleTopLevel(bookKeeping.topLevelType, currentPathElement, topLevelTargetID, bookKeeping.nativeEvent, currentNativeTarget);
        while (currentPathElementID !== newRootID) {
          i++;
          currentPathElement = path[i];
          currentPathElementID = ReactMount.getID(currentPathElement);
        }
      }
    }
    if (eventsFired === 0) {
      ReactEventListener._handleTopLevel(bookKeeping.topLevelType, window, '', bookKeeping.nativeEvent, getEventTarget(bookKeeping.nativeEvent));
    }
  }
  function scrollValueMonitor(cb) {
    var scrollPosition = getUnboundedScrollPosition(window);
    cb(scrollPosition);
  }
  var ReactEventListener = {
    _enabled: true,
    _handleTopLevel: null,
    WINDOW_HANDLE: ExecutionEnvironment.canUseDOM ? window : null,
    setHandleTopLevel: function(handleTopLevel) {
      ReactEventListener._handleTopLevel = handleTopLevel;
    },
    setEnabled: function(enabled) {
      ReactEventListener._enabled = !!enabled;
    },
    isEnabled: function() {
      return ReactEventListener._enabled;
    },
    trapBubbledEvent: function(topLevelType, handlerBaseName, handle) {
      var element = handle;
      if (!element) {
        return null;
      }
      return EventListener.listen(element, handlerBaseName, ReactEventListener.dispatchEvent.bind(null, topLevelType));
    },
    trapCapturedEvent: function(topLevelType, handlerBaseName, handle) {
      var element = handle;
      if (!element) {
        return null;
      }
      return EventListener.capture(element, handlerBaseName, ReactEventListener.dispatchEvent.bind(null, topLevelType));
    },
    monitorScrollValue: function(refresh) {
      var callback = scrollValueMonitor.bind(null, refresh);
      EventListener.listen(window, 'scroll', callback);
    },
    dispatchEvent: function(topLevelType, nativeEvent) {
      if (!ReactEventListener._enabled) {
        return;
      }
      var bookKeeping = TopLevelCallbackBookKeeping.getPooled(topLevelType, nativeEvent);
      try {
        ReactUpdates.batchedUpdates(handleTopLevelImpl, bookKeeping);
      } finally {
        TopLevelCallbackBookKeeping.release(bookKeeping);
      }
    }
  };
  module.exports = ReactEventListener;
  return module.exports;
});

$__System.registerDynamic("22", ["73", "1c", "11", "12", "1e", "3"], true, function($__require, exports, module) {
  "use strict";
  var process = $__require("3");
  var define,
      global = this,
      GLOBAL = this;
  var ReactNoopUpdateQueue = $__require('73');
  var canDefineProperty = $__require('1c');
  var emptyObject = $__require('11');
  var invariant = $__require('12');
  var warning = $__require('1e');
  function ReactComponent(props, context, updater) {
    this.props = props;
    this.context = context;
    this.refs = emptyObject;
    this.updater = updater || ReactNoopUpdateQueue;
  }
  ReactComponent.prototype.isReactComponent = {};
  ReactComponent.prototype.setState = function(partialState, callback) {
    !(typeof partialState === 'object' || typeof partialState === 'function' || partialState == null) ? process.env.NODE_ENV !== 'production' ? invariant(false, 'setState(...): takes an object of state variables to update or a ' + 'function which returns an object of state variables.') : invariant(false) : undefined;
    if (process.env.NODE_ENV !== 'production') {
      process.env.NODE_ENV !== 'production' ? warning(partialState != null, 'setState(...): You passed an undefined or null state object; ' + 'instead, use forceUpdate().') : undefined;
    }
    this.updater.enqueueSetState(this, partialState);
    if (callback) {
      this.updater.enqueueCallback(this, callback);
    }
  };
  ReactComponent.prototype.forceUpdate = function(callback) {
    this.updater.enqueueForceUpdate(this);
    if (callback) {
      this.updater.enqueueCallback(this, callback);
    }
  };
  if (process.env.NODE_ENV !== 'production') {
    var deprecatedAPIs = {
      getDOMNode: ['getDOMNode', 'Use ReactDOM.findDOMNode(component) instead.'],
      isMounted: ['isMounted', 'Instead, make sure to clean up subscriptions and pending requests in ' + 'componentWillUnmount to prevent memory leaks.'],
      replaceProps: ['replaceProps', 'Instead, call render again at the top level.'],
      replaceState: ['replaceState', 'Refactor your code to use setState instead (see ' + 'https://github.com/facebook/react/issues/3236).'],
      setProps: ['setProps', 'Instead, call render again at the top level.']
    };
    var defineDeprecationWarning = function(methodName, info) {
      if (canDefineProperty) {
        Object.defineProperty(ReactComponent.prototype, methodName, {get: function() {
            process.env.NODE_ENV !== 'production' ? warning(false, '%s(...) is deprecated in plain JavaScript React classes. %s', info[0], info[1]) : undefined;
            return undefined;
          }});
      }
    };
    for (var fnName in deprecatedAPIs) {
      if (deprecatedAPIs.hasOwnProperty(fnName)) {
        defineDeprecationWarning(fnName, deprecatedAPIs[fnName]);
      }
    }
  }
  module.exports = ReactComponent;
  return module.exports;
});

$__System.registerDynamic("73", ["1e", "3"], true, function($__require, exports, module) {
  "use strict";
  var process = $__require("3");
  var define,
      global = this,
      GLOBAL = this;
  var warning = $__require('1e');
  function warnTDZ(publicInstance, callerName) {
    if (process.env.NODE_ENV !== 'production') {
      process.env.NODE_ENV !== 'production' ? warning(false, '%s(...): Can only update a mounted or mounting component. ' + 'This usually means you called %s() on an unmounted component. ' + 'This is a no-op. Please check the code for the %s component.', callerName, callerName, publicInstance.constructor && publicInstance.constructor.displayName || '') : undefined;
    }
  }
  var ReactNoopUpdateQueue = {
    isMounted: function(publicInstance) {
      return false;
    },
    enqueueCallback: function(publicInstance, callback) {},
    enqueueForceUpdate: function(publicInstance) {
      warnTDZ(publicInstance, 'forceUpdate');
    },
    enqueueReplaceState: function(publicInstance, completeState) {
      warnTDZ(publicInstance, 'replaceState');
    },
    enqueueSetState: function(publicInstance, partialState) {
      warnTDZ(publicInstance, 'setState');
    },
    enqueueSetProps: function(publicInstance, partialProps) {
      warnTDZ(publicInstance, 'setProps');
    },
    enqueueReplaceProps: function(publicInstance, props) {
      warnTDZ(publicInstance, 'replaceProps');
    }
  };
  module.exports = ReactNoopUpdateQueue;
  return module.exports;
});

$__System.registerDynamic("23", ["22", "c", "19", "1a", "73", "8", "11", "12", "6c", "33", "1e", "3"], true, function($__require, exports, module) {
  "use strict";
  var process = $__require("3");
  var define,
      global = this,
      GLOBAL = this;
  var ReactComponent = $__require('22');
  var ReactElement = $__require('c');
  var ReactPropTypeLocations = $__require('19');
  var ReactPropTypeLocationNames = $__require('1a');
  var ReactNoopUpdateQueue = $__require('73');
  var assign = $__require('8');
  var emptyObject = $__require('11');
  var invariant = $__require('12');
  var keyMirror = $__require('6c');
  var keyOf = $__require('33');
  var warning = $__require('1e');
  var MIXINS_KEY = keyOf({mixins: null});
  var SpecPolicy = keyMirror({
    DEFINE_ONCE: null,
    DEFINE_MANY: null,
    OVERRIDE_BASE: null,
    DEFINE_MANY_MERGED: null
  });
  var injectedMixins = [];
  var warnedSetProps = false;
  function warnSetProps() {
    if (!warnedSetProps) {
      warnedSetProps = true;
      process.env.NODE_ENV !== 'production' ? warning(false, 'setProps(...) and replaceProps(...) are deprecated. ' + 'Instead, call render again at the top level.') : undefined;
    }
  }
  var ReactClassInterface = {
    mixins: SpecPolicy.DEFINE_MANY,
    statics: SpecPolicy.DEFINE_MANY,
    propTypes: SpecPolicy.DEFINE_MANY,
    contextTypes: SpecPolicy.DEFINE_MANY,
    childContextTypes: SpecPolicy.DEFINE_MANY,
    getDefaultProps: SpecPolicy.DEFINE_MANY_MERGED,
    getInitialState: SpecPolicy.DEFINE_MANY_MERGED,
    getChildContext: SpecPolicy.DEFINE_MANY_MERGED,
    render: SpecPolicy.DEFINE_ONCE,
    componentWillMount: SpecPolicy.DEFINE_MANY,
    componentDidMount: SpecPolicy.DEFINE_MANY,
    componentWillReceiveProps: SpecPolicy.DEFINE_MANY,
    shouldComponentUpdate: SpecPolicy.DEFINE_ONCE,
    componentWillUpdate: SpecPolicy.DEFINE_MANY,
    componentDidUpdate: SpecPolicy.DEFINE_MANY,
    componentWillUnmount: SpecPolicy.DEFINE_MANY,
    updateComponent: SpecPolicy.OVERRIDE_BASE
  };
  var RESERVED_SPEC_KEYS = {
    displayName: function(Constructor, displayName) {
      Constructor.displayName = displayName;
    },
    mixins: function(Constructor, mixins) {
      if (mixins) {
        for (var i = 0; i < mixins.length; i++) {
          mixSpecIntoComponent(Constructor, mixins[i]);
        }
      }
    },
    childContextTypes: function(Constructor, childContextTypes) {
      if (process.env.NODE_ENV !== 'production') {
        validateTypeDef(Constructor, childContextTypes, ReactPropTypeLocations.childContext);
      }
      Constructor.childContextTypes = assign({}, Constructor.childContextTypes, childContextTypes);
    },
    contextTypes: function(Constructor, contextTypes) {
      if (process.env.NODE_ENV !== 'production') {
        validateTypeDef(Constructor, contextTypes, ReactPropTypeLocations.context);
      }
      Constructor.contextTypes = assign({}, Constructor.contextTypes, contextTypes);
    },
    getDefaultProps: function(Constructor, getDefaultProps) {
      if (Constructor.getDefaultProps) {
        Constructor.getDefaultProps = createMergedResultFunction(Constructor.getDefaultProps, getDefaultProps);
      } else {
        Constructor.getDefaultProps = getDefaultProps;
      }
    },
    propTypes: function(Constructor, propTypes) {
      if (process.env.NODE_ENV !== 'production') {
        validateTypeDef(Constructor, propTypes, ReactPropTypeLocations.prop);
      }
      Constructor.propTypes = assign({}, Constructor.propTypes, propTypes);
    },
    statics: function(Constructor, statics) {
      mixStaticSpecIntoComponent(Constructor, statics);
    },
    autobind: function() {}
  };
  function validateTypeDef(Constructor, typeDef, location) {
    for (var propName in typeDef) {
      if (typeDef.hasOwnProperty(propName)) {
        process.env.NODE_ENV !== 'production' ? warning(typeof typeDef[propName] === 'function', '%s: %s type `%s` is invalid; it must be a function, usually from ' + 'React.PropTypes.', Constructor.displayName || 'ReactClass', ReactPropTypeLocationNames[location], propName) : undefined;
      }
    }
  }
  function validateMethodOverride(proto, name) {
    var specPolicy = ReactClassInterface.hasOwnProperty(name) ? ReactClassInterface[name] : null;
    if (ReactClassMixin.hasOwnProperty(name)) {
      !(specPolicy === SpecPolicy.OVERRIDE_BASE) ? process.env.NODE_ENV !== 'production' ? invariant(false, 'ReactClassInterface: You are attempting to override ' + '`%s` from your class specification. Ensure that your method names ' + 'do not overlap with React methods.', name) : invariant(false) : undefined;
    }
    if (proto.hasOwnProperty(name)) {
      !(specPolicy === SpecPolicy.DEFINE_MANY || specPolicy === SpecPolicy.DEFINE_MANY_MERGED) ? process.env.NODE_ENV !== 'production' ? invariant(false, 'ReactClassInterface: You are attempting to define ' + '`%s` on your component more than once. This conflict may be due ' + 'to a mixin.', name) : invariant(false) : undefined;
    }
  }
  function mixSpecIntoComponent(Constructor, spec) {
    if (!spec) {
      return;
    }
    !(typeof spec !== 'function') ? process.env.NODE_ENV !== 'production' ? invariant(false, 'ReactClass: You\'re attempting to ' + 'use a component class as a mixin. Instead, just use a regular object.') : invariant(false) : undefined;
    !!ReactElement.isValidElement(spec) ? process.env.NODE_ENV !== 'production' ? invariant(false, 'ReactClass: You\'re attempting to ' + 'use a component as a mixin. Instead, just use a regular object.') : invariant(false) : undefined;
    var proto = Constructor.prototype;
    if (spec.hasOwnProperty(MIXINS_KEY)) {
      RESERVED_SPEC_KEYS.mixins(Constructor, spec.mixins);
    }
    for (var name in spec) {
      if (!spec.hasOwnProperty(name)) {
        continue;
      }
      if (name === MIXINS_KEY) {
        continue;
      }
      var property = spec[name];
      validateMethodOverride(proto, name);
      if (RESERVED_SPEC_KEYS.hasOwnProperty(name)) {
        RESERVED_SPEC_KEYS[name](Constructor, property);
      } else {
        var isReactClassMethod = ReactClassInterface.hasOwnProperty(name);
        var isAlreadyDefined = proto.hasOwnProperty(name);
        var isFunction = typeof property === 'function';
        var shouldAutoBind = isFunction && !isReactClassMethod && !isAlreadyDefined && spec.autobind !== false;
        if (shouldAutoBind) {
          if (!proto.__reactAutoBindMap) {
            proto.__reactAutoBindMap = {};
          }
          proto.__reactAutoBindMap[name] = property;
          proto[name] = property;
        } else {
          if (isAlreadyDefined) {
            var specPolicy = ReactClassInterface[name];
            !(isReactClassMethod && (specPolicy === SpecPolicy.DEFINE_MANY_MERGED || specPolicy === SpecPolicy.DEFINE_MANY)) ? process.env.NODE_ENV !== 'production' ? invariant(false, 'ReactClass: Unexpected spec policy %s for key %s ' + 'when mixing in component specs.', specPolicy, name) : invariant(false) : undefined;
            if (specPolicy === SpecPolicy.DEFINE_MANY_MERGED) {
              proto[name] = createMergedResultFunction(proto[name], property);
            } else if (specPolicy === SpecPolicy.DEFINE_MANY) {
              proto[name] = createChainedFunction(proto[name], property);
            }
          } else {
            proto[name] = property;
            if (process.env.NODE_ENV !== 'production') {
              if (typeof property === 'function' && spec.displayName) {
                proto[name].displayName = spec.displayName + '_' + name;
              }
            }
          }
        }
      }
    }
  }
  function mixStaticSpecIntoComponent(Constructor, statics) {
    if (!statics) {
      return;
    }
    for (var name in statics) {
      var property = statics[name];
      if (!statics.hasOwnProperty(name)) {
        continue;
      }
      var isReserved = (name in RESERVED_SPEC_KEYS);
      !!isReserved ? process.env.NODE_ENV !== 'production' ? invariant(false, 'ReactClass: You are attempting to define a reserved ' + 'property, `%s`, that shouldn\'t be on the "statics" key. Define it ' + 'as an instance property instead; it will still be accessible on the ' + 'constructor.', name) : invariant(false) : undefined;
      var isInherited = (name in Constructor);
      !!isInherited ? process.env.NODE_ENV !== 'production' ? invariant(false, 'ReactClass: You are attempting to define ' + '`%s` on your component more than once. This conflict may be ' + 'due to a mixin.', name) : invariant(false) : undefined;
      Constructor[name] = property;
    }
  }
  function mergeIntoWithNoDuplicateKeys(one, two) {
    !(one && two && typeof one === 'object' && typeof two === 'object') ? process.env.NODE_ENV !== 'production' ? invariant(false, 'mergeIntoWithNoDuplicateKeys(): Cannot merge non-objects.') : invariant(false) : undefined;
    for (var key in two) {
      if (two.hasOwnProperty(key)) {
        !(one[key] === undefined) ? process.env.NODE_ENV !== 'production' ? invariant(false, 'mergeIntoWithNoDuplicateKeys(): ' + 'Tried to merge two objects with the same key: `%s`. This conflict ' + 'may be due to a mixin; in particular, this may be caused by two ' + 'getInitialState() or getDefaultProps() methods returning objects ' + 'with clashing keys.', key) : invariant(false) : undefined;
        one[key] = two[key];
      }
    }
    return one;
  }
  function createMergedResultFunction(one, two) {
    return function mergedResult() {
      var a = one.apply(this, arguments);
      var b = two.apply(this, arguments);
      if (a == null) {
        return b;
      } else if (b == null) {
        return a;
      }
      var c = {};
      mergeIntoWithNoDuplicateKeys(c, a);
      mergeIntoWithNoDuplicateKeys(c, b);
      return c;
    };
  }
  function createChainedFunction(one, two) {
    return function chainedFunction() {
      one.apply(this, arguments);
      two.apply(this, arguments);
    };
  }
  function bindAutoBindMethod(component, method) {
    var boundMethod = method.bind(component);
    if (process.env.NODE_ENV !== 'production') {
      boundMethod.__reactBoundContext = component;
      boundMethod.__reactBoundMethod = method;
      boundMethod.__reactBoundArguments = null;
      var componentName = component.constructor.displayName;
      var _bind = boundMethod.bind;
      boundMethod.bind = function(newThis) {
        for (var _len = arguments.length,
            args = Array(_len > 1 ? _len - 1 : 0),
            _key = 1; _key < _len; _key++) {
          args[_key - 1] = arguments[_key];
        }
        if (newThis !== component && newThis !== null) {
          process.env.NODE_ENV !== 'production' ? warning(false, 'bind(): React component methods may only be bound to the ' + 'component instance. See %s', componentName) : undefined;
        } else if (!args.length) {
          process.env.NODE_ENV !== 'production' ? warning(false, 'bind(): You are binding a component method to the component. ' + 'React does this for you automatically in a high-performance ' + 'way, so you can safely remove this call. See %s', componentName) : undefined;
          return boundMethod;
        }
        var reboundMethod = _bind.apply(boundMethod, arguments);
        reboundMethod.__reactBoundContext = component;
        reboundMethod.__reactBoundMethod = method;
        reboundMethod.__reactBoundArguments = args;
        return reboundMethod;
      };
    }
    return boundMethod;
  }
  function bindAutoBindMethods(component) {
    for (var autoBindKey in component.__reactAutoBindMap) {
      if (component.__reactAutoBindMap.hasOwnProperty(autoBindKey)) {
        var method = component.__reactAutoBindMap[autoBindKey];
        component[autoBindKey] = bindAutoBindMethod(component, method);
      }
    }
  }
  var ReactClassMixin = {
    replaceState: function(newState, callback) {
      this.updater.enqueueReplaceState(this, newState);
      if (callback) {
        this.updater.enqueueCallback(this, callback);
      }
    },
    isMounted: function() {
      return this.updater.isMounted(this);
    },
    setProps: function(partialProps, callback) {
      if (process.env.NODE_ENV !== 'production') {
        warnSetProps();
      }
      this.updater.enqueueSetProps(this, partialProps);
      if (callback) {
        this.updater.enqueueCallback(this, callback);
      }
    },
    replaceProps: function(newProps, callback) {
      if (process.env.NODE_ENV !== 'production') {
        warnSetProps();
      }
      this.updater.enqueueReplaceProps(this, newProps);
      if (callback) {
        this.updater.enqueueCallback(this, callback);
      }
    }
  };
  var ReactClassComponent = function() {};
  assign(ReactClassComponent.prototype, ReactComponent.prototype, ReactClassMixin);
  var ReactClass = {
    createClass: function(spec) {
      var Constructor = function(props, context, updater) {
        if (process.env.NODE_ENV !== 'production') {
          process.env.NODE_ENV !== 'production' ? warning(this instanceof Constructor, 'Something is calling a React component directly. Use a factory or ' + 'JSX instead. See: https://fb.me/react-legacyfactory') : undefined;
        }
        if (this.__reactAutoBindMap) {
          bindAutoBindMethods(this);
        }
        this.props = props;
        this.context = context;
        this.refs = emptyObject;
        this.updater = updater || ReactNoopUpdateQueue;
        this.state = null;
        var initialState = this.getInitialState ? this.getInitialState() : null;
        if (process.env.NODE_ENV !== 'production') {
          if (typeof initialState === 'undefined' && this.getInitialState._isMockFunction) {
            initialState = null;
          }
        }
        !(typeof initialState === 'object' && !Array.isArray(initialState)) ? process.env.NODE_ENV !== 'production' ? invariant(false, '%s.getInitialState(): must return an object or null', Constructor.displayName || 'ReactCompositeComponent') : invariant(false) : undefined;
        this.state = initialState;
      };
      Constructor.prototype = new ReactClassComponent();
      Constructor.prototype.constructor = Constructor;
      injectedMixins.forEach(mixSpecIntoComponent.bind(null, Constructor));
      mixSpecIntoComponent(Constructor, spec);
      if (Constructor.getDefaultProps) {
        Constructor.defaultProps = Constructor.getDefaultProps();
      }
      if (process.env.NODE_ENV !== 'production') {
        if (Constructor.getDefaultProps) {
          Constructor.getDefaultProps.isReactClassApproved = {};
        }
        if (Constructor.prototype.getInitialState) {
          Constructor.prototype.getInitialState.isReactClassApproved = {};
        }
      }
      !Constructor.prototype.render ? process.env.NODE_ENV !== 'production' ? invariant(false, 'createClass(...): Class specification must implement a `render` method.') : invariant(false) : undefined;
      if (process.env.NODE_ENV !== 'production') {
        process.env.NODE_ENV !== 'production' ? warning(!Constructor.prototype.componentShouldUpdate, '%s has a method called ' + 'componentShouldUpdate(). Did you mean shouldComponentUpdate()? ' + 'The name is phrased as a question because the function is ' + 'expected to return a value.', spec.displayName || 'A component') : undefined;
        process.env.NODE_ENV !== 'production' ? warning(!Constructor.prototype.componentWillRecieveProps, '%s has a method called ' + 'componentWillRecieveProps(). Did you mean componentWillReceiveProps()?', spec.displayName || 'A component') : undefined;
      }
      for (var methodName in ReactClassInterface) {
        if (!Constructor.prototype[methodName]) {
          Constructor.prototype[methodName] = null;
        }
      }
      return Constructor;
    },
    injection: {injectMixin: function(mixin) {
        injectedMixins.push(mixin);
      }}
  };
  module.exports = ReactClass;
  return module.exports;
});

$__System.registerDynamic("74", ["3f", "35", "5b", "23", "75", "5f", "76", "4d", "77", "f", "3"], true, function($__require, exports, module) {
  "use strict";
  var process = $__require("3");
  var define,
      global = this,
      GLOBAL = this;
  var DOMProperty = $__require('3f');
  var EventPluginHub = $__require('35');
  var ReactComponentEnvironment = $__require('5b');
  var ReactClass = $__require('23');
  var ReactEmptyComponent = $__require('75');
  var ReactBrowserEventEmitter = $__require('5f');
  var ReactNativeComponent = $__require('76');
  var ReactPerf = $__require('4d');
  var ReactRootIndex = $__require('77');
  var ReactUpdates = $__require('f');
  var ReactInjection = {
    Component: ReactComponentEnvironment.injection,
    Class: ReactClass.injection,
    DOMProperty: DOMProperty.injection,
    EmptyComponent: ReactEmptyComponent.injection,
    EventPluginHub: EventPluginHub.injection,
    EventEmitter: ReactBrowserEventEmitter.injection,
    NativeComponent: ReactNativeComponent.injection,
    Perf: ReactPerf.injection,
    RootIndex: ReactRootIndex.injection,
    Updates: ReactUpdates.injection
  };
  module.exports = ReactInjection;
  return module.exports;
});

$__System.registerDynamic("78", ["6", "5", "5f", "79", "7a", "7", "8", "3"], true, function($__require, exports, module) {
  "use strict";
  var process = $__require("3");
  var define,
      global = this,
      GLOBAL = this;
  var CallbackQueue = $__require('6');
  var PooledClass = $__require('5');
  var ReactBrowserEventEmitter = $__require('5f');
  var ReactDOMFeatureFlags = $__require('79');
  var ReactInputSelection = $__require('7a');
  var Transaction = $__require('7');
  var assign = $__require('8');
  var SELECTION_RESTORATION = {
    initialize: ReactInputSelection.getSelectionInformation,
    close: ReactInputSelection.restoreSelection
  };
  var EVENT_SUPPRESSION = {
    initialize: function() {
      var currentlyEnabled = ReactBrowserEventEmitter.isEnabled();
      ReactBrowserEventEmitter.setEnabled(false);
      return currentlyEnabled;
    },
    close: function(previouslyEnabled) {
      ReactBrowserEventEmitter.setEnabled(previouslyEnabled);
    }
  };
  var ON_DOM_READY_QUEUEING = {
    initialize: function() {
      this.reactMountReady.reset();
    },
    close: function() {
      this.reactMountReady.notifyAll();
    }
  };
  var TRANSACTION_WRAPPERS = [SELECTION_RESTORATION, EVENT_SUPPRESSION, ON_DOM_READY_QUEUEING];
  function ReactReconcileTransaction(forceHTML) {
    this.reinitializeTransaction();
    this.renderToStaticMarkup = false;
    this.reactMountReady = CallbackQueue.getPooled(null);
    this.useCreateElement = !forceHTML && ReactDOMFeatureFlags.useCreateElement;
  }
  var Mixin = {
    getTransactionWrappers: function() {
      return TRANSACTION_WRAPPERS;
    },
    getReactMountReady: function() {
      return this.reactMountReady;
    },
    destructor: function() {
      CallbackQueue.release(this.reactMountReady);
      this.reactMountReady = null;
    }
  };
  assign(ReactReconcileTransaction.prototype, Transaction.Mixin, Mixin);
  PooledClass.addPoolingTo(ReactReconcileTransaction);
  module.exports = ReactReconcileTransaction;
  return module.exports;
});

$__System.registerDynamic("7b", ["3"], true, function($__require, exports, module) {
  "use strict";
  var process = $__require("3");
  var define,
      global = this,
      GLOBAL = this;
  function getLeafNode(node) {
    while (node && node.firstChild) {
      node = node.firstChild;
    }
    return node;
  }
  function getSiblingNode(node) {
    while (node) {
      if (node.nextSibling) {
        return node.nextSibling;
      }
      node = node.parentNode;
    }
  }
  function getNodeForCharacterOffset(root, offset) {
    var node = getLeafNode(root);
    var nodeStart = 0;
    var nodeEnd = 0;
    while (node) {
      if (node.nodeType === 3) {
        nodeEnd = nodeStart + node.textContent.length;
        if (nodeStart <= offset && nodeEnd >= offset) {
          return {
            node: node,
            offset: offset - nodeStart
          };
        }
        nodeStart = nodeEnd;
      }
      node = getLeafNode(getSiblingNode(node));
    }
  }
  module.exports = getNodeForCharacterOffset;
  return module.exports;
});

$__System.registerDynamic("2b", ["32", "3"], true, function($__require, exports, module) {
  "use strict";
  var process = $__require("3");
  var define,
      global = this,
      GLOBAL = this;
  var ExecutionEnvironment = $__require('32');
  var contentKey = null;
  function getTextContentAccessor() {
    if (!contentKey && ExecutionEnvironment.canUseDOM) {
      contentKey = 'textContent' in document.documentElement ? 'textContent' : 'innerText';
    }
    return contentKey;
  }
  module.exports = getTextContentAccessor;
  return module.exports;
});

$__System.registerDynamic("7c", ["32", "7b", "2b", "3"], true, function($__require, exports, module) {
  "use strict";
  var process = $__require("3");
  var define,
      global = this,
      GLOBAL = this;
  var ExecutionEnvironment = $__require('32');
  var getNodeForCharacterOffset = $__require('7b');
  var getTextContentAccessor = $__require('2b');
  function isCollapsed(anchorNode, anchorOffset, focusNode, focusOffset) {
    return anchorNode === focusNode && anchorOffset === focusOffset;
  }
  function getIEOffsets(node) {
    var selection = document.selection;
    var selectedRange = selection.createRange();
    var selectedLength = selectedRange.text.length;
    var fromStart = selectedRange.duplicate();
    fromStart.moveToElementText(node);
    fromStart.setEndPoint('EndToStart', selectedRange);
    var startOffset = fromStart.text.length;
    var endOffset = startOffset + selectedLength;
    return {
      start: startOffset,
      end: endOffset
    };
  }
  function getModernOffsets(node) {
    var selection = window.getSelection && window.getSelection();
    if (!selection || selection.rangeCount === 0) {
      return null;
    }
    var anchorNode = selection.anchorNode;
    var anchorOffset = selection.anchorOffset;
    var focusNode = selection.focusNode;
    var focusOffset = selection.focusOffset;
    var currentRange = selection.getRangeAt(0);
    try {
      currentRange.startContainer.nodeType;
      currentRange.endContainer.nodeType;
    } catch (e) {
      return null;
    }
    var isSelectionCollapsed = isCollapsed(selection.anchorNode, selection.anchorOffset, selection.focusNode, selection.focusOffset);
    var rangeLength = isSelectionCollapsed ? 0 : currentRange.toString().length;
    var tempRange = currentRange.cloneRange();
    tempRange.selectNodeContents(node);
    tempRange.setEnd(currentRange.startContainer, currentRange.startOffset);
    var isTempRangeCollapsed = isCollapsed(tempRange.startContainer, tempRange.startOffset, tempRange.endContainer, tempRange.endOffset);
    var start = isTempRangeCollapsed ? 0 : tempRange.toString().length;
    var end = start + rangeLength;
    var detectionRange = document.createRange();
    detectionRange.setStart(anchorNode, anchorOffset);
    detectionRange.setEnd(focusNode, focusOffset);
    var isBackward = detectionRange.collapsed;
    return {
      start: isBackward ? end : start,
      end: isBackward ? start : end
    };
  }
  function setIEOffsets(node, offsets) {
    var range = document.selection.createRange().duplicate();
    var start,
        end;
    if (typeof offsets.end === 'undefined') {
      start = offsets.start;
      end = start;
    } else if (offsets.start > offsets.end) {
      start = offsets.end;
      end = offsets.start;
    } else {
      start = offsets.start;
      end = offsets.end;
    }
    range.moveToElementText(node);
    range.moveStart('character', start);
    range.setEndPoint('EndToStart', range);
    range.moveEnd('character', end - start);
    range.select();
  }
  function setModernOffsets(node, offsets) {
    if (!window.getSelection) {
      return;
    }
    var selection = window.getSelection();
    var length = node[getTextContentAccessor()].length;
    var start = Math.min(offsets.start, length);
    var end = typeof offsets.end === 'undefined' ? start : Math.min(offsets.end, length);
    if (!selection.extend && start > end) {
      var temp = end;
      end = start;
      start = temp;
    }
    var startMarker = getNodeForCharacterOffset(node, start);
    var endMarker = getNodeForCharacterOffset(node, end);
    if (startMarker && endMarker) {
      var range = document.createRange();
      range.setStart(startMarker.node, startMarker.offset);
      selection.removeAllRanges();
      if (start > end) {
        selection.addRange(range);
        selection.extend(endMarker.node, endMarker.offset);
      } else {
        range.setEnd(endMarker.node, endMarker.offset);
        selection.addRange(range);
      }
    }
  }
  var useIEOffsets = ExecutionEnvironment.canUseDOM && 'selection' in document && !('getSelection' in window);
  var ReactDOMSelection = {
    getOffsets: useIEOffsets ? getIEOffsets : getModernOffsets,
    setOffsets: useIEOffsets ? setIEOffsets : setModernOffsets
  };
  module.exports = ReactDOMSelection;
  return module.exports;
});

$__System.registerDynamic("44", ["3"], true, function($__require, exports, module) {
  "use strict";
  var process = $__require("3");
  var define,
      global = this,
      GLOBAL = this;
  function focusNode(node) {
    try {
      node.focus();
    } catch (e) {}
  }
  module.exports = focusNode;
  return module.exports;
});

$__System.registerDynamic("7a", ["7c", "7d", "44", "7e", "3"], true, function($__require, exports, module) {
  "use strict";
  var process = $__require("3");
  var define,
      global = this,
      GLOBAL = this;
  var ReactDOMSelection = $__require('7c');
  var containsNode = $__require('7d');
  var focusNode = $__require('44');
  var getActiveElement = $__require('7e');
  function isInDocument(node) {
    return containsNode(document.documentElement, node);
  }
  var ReactInputSelection = {
    hasSelectionCapabilities: function(elem) {
      var nodeName = elem && elem.nodeName && elem.nodeName.toLowerCase();
      return nodeName && (nodeName === 'input' && elem.type === 'text' || nodeName === 'textarea' || elem.contentEditable === 'true');
    },
    getSelectionInformation: function() {
      var focusedElem = getActiveElement();
      return {
        focusedElem: focusedElem,
        selectionRange: ReactInputSelection.hasSelectionCapabilities(focusedElem) ? ReactInputSelection.getSelection(focusedElem) : null
      };
    },
    restoreSelection: function(priorSelectionInformation) {
      var curFocusedElem = getActiveElement();
      var priorFocusedElem = priorSelectionInformation.focusedElem;
      var priorSelectionRange = priorSelectionInformation.selectionRange;
      if (curFocusedElem !== priorFocusedElem && isInDocument(priorFocusedElem)) {
        if (ReactInputSelection.hasSelectionCapabilities(priorFocusedElem)) {
          ReactInputSelection.setSelection(priorFocusedElem, priorSelectionRange);
        }
        focusNode(priorFocusedElem);
      }
    },
    getSelection: function(input) {
      var selection;
      if ('selectionStart' in input) {
        selection = {
          start: input.selectionStart,
          end: input.selectionEnd
        };
      } else if (document.selection && (input.nodeName && input.nodeName.toLowerCase() === 'input')) {
        var range = document.selection.createRange();
        if (range.parentElement() === input) {
          selection = {
            start: -range.moveStart('character', -input.value.length),
            end: -range.moveEnd('character', -input.value.length)
          };
        }
      } else {
        selection = ReactDOMSelection.getOffsets(input);
      }
      return selection || {
        start: 0,
        end: 0
      };
    },
    setSelection: function(input, offsets) {
      var start = offsets.start;
      var end = offsets.end;
      if (typeof end === 'undefined') {
        end = start;
      }
      if ('selectionStart' in input) {
        input.selectionStart = start;
        input.selectionEnd = Math.min(end, input.value.length);
      } else if (document.selection && (input.nodeName && input.nodeName.toLowerCase() === 'input')) {
        var range = input.createTextRange();
        range.collapse(true);
        range.moveStart('character', start);
        range.moveEnd('character', end - start);
        range.select();
      } else {
        ReactDOMSelection.setOffsets(input, offsets);
      }
    }
  };
  module.exports = ReactInputSelection;
  return module.exports;
});

$__System.registerDynamic("7e", ["3"], true, function($__require, exports, module) {
  "use strict";
  var process = $__require("3");
  var define,
      global = this,
      GLOBAL = this;
  function getActiveElement() {
    if (typeof document === 'undefined') {
      return null;
    }
    try {
      return document.activeElement || document.body;
    } catch (e) {
      return document.body;
    }
  }
  module.exports = getActiveElement;
  return module.exports;
});

$__System.registerDynamic("38", ["3"], true, function($__require, exports, module) {
  "use strict";
  var process = $__require("3");
  var define,
      global = this,
      GLOBAL = this;
  var supportedInputTypes = {
    'color': true,
    'date': true,
    'datetime': true,
    'datetime-local': true,
    'email': true,
    'month': true,
    'number': true,
    'password': true,
    'range': true,
    'search': true,
    'tel': true,
    'text': true,
    'time': true,
    'url': true,
    'week': true
  };
  function isTextInputElement(elem) {
    var nodeName = elem && elem.nodeName && elem.nodeName.toLowerCase();
    return nodeName && (nodeName === 'input' && supportedInputTypes[elem.type] || nodeName === 'textarea');
  }
  module.exports = isTextInputElement;
  return module.exports;
});

$__System.registerDynamic("66", ["3"], true, function($__require, exports, module) {
  "use strict";
  var process = $__require("3");
  var define,
      global = this,
      GLOBAL = this;
  var hasOwnProperty = Object.prototype.hasOwnProperty;
  function shallowEqual(objA, objB) {
    if (objA === objB) {
      return true;
    }
    if (typeof objA !== 'object' || objA === null || typeof objB !== 'object' || objB === null) {
      return false;
    }
    var keysA = Object.keys(objA);
    var keysB = Object.keys(objB);
    if (keysA.length !== keysB.length) {
      return false;
    }
    var bHasOwnProperty = hasOwnProperty.bind(objB);
    for (var i = 0; i < keysA.length; i++) {
      if (!bHasOwnProperty(keysA[i]) || objA[keysA[i]] !== objB[keysA[i]]) {
        return false;
      }
    }
    return true;
  }
  module.exports = shallowEqual;
  return module.exports;
});

$__System.registerDynamic("7f", ["30", "31", "32", "7a", "2d", "7e", "38", "33", "66", "3"], true, function($__require, exports, module) {
  "use strict";
  var process = $__require("3");
  var define,
      global = this,
      GLOBAL = this;
  var EventConstants = $__require('30');
  var EventPropagators = $__require('31');
  var ExecutionEnvironment = $__require('32');
  var ReactInputSelection = $__require('7a');
  var SyntheticEvent = $__require('2d');
  var getActiveElement = $__require('7e');
  var isTextInputElement = $__require('38');
  var keyOf = $__require('33');
  var shallowEqual = $__require('66');
  var topLevelTypes = EventConstants.topLevelTypes;
  var skipSelectionChangeEvent = ExecutionEnvironment.canUseDOM && 'documentMode' in document && document.documentMode <= 11;
  var eventTypes = {select: {
      phasedRegistrationNames: {
        bubbled: keyOf({onSelect: null}),
        captured: keyOf({onSelectCapture: null})
      },
      dependencies: [topLevelTypes.topBlur, topLevelTypes.topContextMenu, topLevelTypes.topFocus, topLevelTypes.topKeyDown, topLevelTypes.topMouseDown, topLevelTypes.topMouseUp, topLevelTypes.topSelectionChange]
    }};
  var activeElement = null;
  var activeElementID = null;
  var lastSelection = null;
  var mouseDown = false;
  var hasListener = false;
  var ON_SELECT_KEY = keyOf({onSelect: null});
  function getSelection(node) {
    if ('selectionStart' in node && ReactInputSelection.hasSelectionCapabilities(node)) {
      return {
        start: node.selectionStart,
        end: node.selectionEnd
      };
    } else if (window.getSelection) {
      var selection = window.getSelection();
      return {
        anchorNode: selection.anchorNode,
        anchorOffset: selection.anchorOffset,
        focusNode: selection.focusNode,
        focusOffset: selection.focusOffset
      };
    } else if (document.selection) {
      var range = document.selection.createRange();
      return {
        parentElement: range.parentElement(),
        text: range.text,
        top: range.boundingTop,
        left: range.boundingLeft
      };
    }
  }
  function constructSelectEvent(nativeEvent, nativeEventTarget) {
    if (mouseDown || activeElement == null || activeElement !== getActiveElement()) {
      return null;
    }
    var currentSelection = getSelection(activeElement);
    if (!lastSelection || !shallowEqual(lastSelection, currentSelection)) {
      lastSelection = currentSelection;
      var syntheticEvent = SyntheticEvent.getPooled(eventTypes.select, activeElementID, nativeEvent, nativeEventTarget);
      syntheticEvent.type = 'select';
      syntheticEvent.target = activeElement;
      EventPropagators.accumulateTwoPhaseDispatches(syntheticEvent);
      return syntheticEvent;
    }
    return null;
  }
  var SelectEventPlugin = {
    eventTypes: eventTypes,
    extractEvents: function(topLevelType, topLevelTarget, topLevelTargetID, nativeEvent, nativeEventTarget) {
      if (!hasListener) {
        return null;
      }
      switch (topLevelType) {
        case topLevelTypes.topFocus:
          if (isTextInputElement(topLevelTarget) || topLevelTarget.contentEditable === 'true') {
            activeElement = topLevelTarget;
            activeElementID = topLevelTargetID;
            lastSelection = null;
          }
          break;
        case topLevelTypes.topBlur:
          activeElement = null;
          activeElementID = null;
          lastSelection = null;
          break;
        case topLevelTypes.topMouseDown:
          mouseDown = true;
          break;
        case topLevelTypes.topContextMenu:
        case topLevelTypes.topMouseUp:
          mouseDown = false;
          return constructSelectEvent(nativeEvent, nativeEventTarget);
        case topLevelTypes.topSelectionChange:
          if (skipSelectionChangeEvent) {
            break;
          }
        case topLevelTypes.topKeyDown:
        case topLevelTypes.topKeyUp:
          return constructSelectEvent(nativeEvent, nativeEventTarget);
      }
      return null;
    },
    didPutListener: function(id, registrationName, listener) {
      if (registrationName === ON_SELECT_KEY) {
        hasListener = true;
      }
    }
  };
  module.exports = SelectEventPlugin;
  return module.exports;
});

$__System.registerDynamic("80", ["3"], true, function($__require, exports, module) {
  "use strict";
  var process = $__require("3");
  var define,
      global = this,
      GLOBAL = this;
  var GLOBAL_MOUNT_POINT_MAX = Math.pow(2, 53);
  var ServerReactRootIndex = {createReactRootIndex: function() {
      return Math.ceil(Math.random() * GLOBAL_MOUNT_POINT_MAX);
    }};
  module.exports = ServerReactRootIndex;
  return module.exports;
});

$__System.registerDynamic("72", ["9", "3"], true, function($__require, exports, module) {
  "use strict";
  var process = $__require("3");
  var define,
      global = this,
      GLOBAL = this;
  var emptyFunction = $__require('9');
  var EventListener = {
    listen: function(target, eventType, callback) {
      if (target.addEventListener) {
        target.addEventListener(eventType, callback, false);
        return {remove: function() {
            target.removeEventListener(eventType, callback, false);
          }};
      } else if (target.attachEvent) {
        target.attachEvent('on' + eventType, callback);
        return {remove: function() {
            target.detachEvent('on' + eventType, callback);
          }};
      }
    },
    capture: function(target, eventType, callback) {
      if (target.addEventListener) {
        target.addEventListener(eventType, callback, true);
        return {remove: function() {
            target.removeEventListener(eventType, callback, true);
          }};
      } else {
        if (process.env.NODE_ENV !== 'production') {
          console.error('Attempted to listen to events during the capture phase on a ' + 'browser that does not support the capture phase. Your application ' + 'will not receive some events.');
        }
        return {remove: emptyFunction};
      }
    },
    registerDefault: function() {}
  };
  module.exports = EventListener;
  return module.exports;
});

$__System.registerDynamic("31", ["30", "35", "1e", "81", "82", "3"], true, function($__require, exports, module) {
  "use strict";
  var process = $__require("3");
  var define,
      global = this,
      GLOBAL = this;
  var EventConstants = $__require('30');
  var EventPluginHub = $__require('35');
  var warning = $__require('1e');
  var accumulateInto = $__require('81');
  var forEachAccumulated = $__require('82');
  var PropagationPhases = EventConstants.PropagationPhases;
  var getListener = EventPluginHub.getListener;
  function listenerAtPhase(id, event, propagationPhase) {
    var registrationName = event.dispatchConfig.phasedRegistrationNames[propagationPhase];
    return getListener(id, registrationName);
  }
  function accumulateDirectionalDispatches(domID, upwards, event) {
    if (process.env.NODE_ENV !== 'production') {
      process.env.NODE_ENV !== 'production' ? warning(domID, 'Dispatching id must not be null') : undefined;
    }
    var phase = upwards ? PropagationPhases.bubbled : PropagationPhases.captured;
    var listener = listenerAtPhase(domID, event, phase);
    if (listener) {
      event._dispatchListeners = accumulateInto(event._dispatchListeners, listener);
      event._dispatchIDs = accumulateInto(event._dispatchIDs, domID);
    }
  }
  function accumulateTwoPhaseDispatchesSingle(event) {
    if (event && event.dispatchConfig.phasedRegistrationNames) {
      EventPluginHub.injection.getInstanceHandle().traverseTwoPhase(event.dispatchMarker, accumulateDirectionalDispatches, event);
    }
  }
  function accumulateTwoPhaseDispatchesSingleSkipTarget(event) {
    if (event && event.dispatchConfig.phasedRegistrationNames) {
      EventPluginHub.injection.getInstanceHandle().traverseTwoPhaseSkipTarget(event.dispatchMarker, accumulateDirectionalDispatches, event);
    }
  }
  function accumulateDispatches(id, ignoredDirection, event) {
    if (event && event.dispatchConfig.registrationName) {
      var registrationName = event.dispatchConfig.registrationName;
      var listener = getListener(id, registrationName);
      if (listener) {
        event._dispatchListeners = accumulateInto(event._dispatchListeners, listener);
        event._dispatchIDs = accumulateInto(event._dispatchIDs, id);
      }
    }
  }
  function accumulateDirectDispatchesSingle(event) {
    if (event && event.dispatchConfig.registrationName) {
      accumulateDispatches(event.dispatchMarker, null, event);
    }
  }
  function accumulateTwoPhaseDispatches(events) {
    forEachAccumulated(events, accumulateTwoPhaseDispatchesSingle);
  }
  function accumulateTwoPhaseDispatchesSkipTarget(events) {
    forEachAccumulated(events, accumulateTwoPhaseDispatchesSingleSkipTarget);
  }
  function accumulateEnterLeaveDispatches(leave, enter, fromID, toID) {
    EventPluginHub.injection.getInstanceHandle().traverseEnterLeave(fromID, toID, accumulateDispatches, leave, enter);
  }
  function accumulateDirectDispatches(events) {
    forEachAccumulated(events, accumulateDirectDispatchesSingle);
  }
  var EventPropagators = {
    accumulateTwoPhaseDispatches: accumulateTwoPhaseDispatches,
    accumulateTwoPhaseDispatchesSkipTarget: accumulateTwoPhaseDispatchesSkipTarget,
    accumulateDirectDispatches: accumulateDirectDispatches,
    accumulateEnterLeaveDispatches: accumulateEnterLeaveDispatches
  };
  module.exports = EventPropagators;
  return module.exports;
});

$__System.registerDynamic("83", ["2d", "3"], true, function($__require, exports, module) {
  "use strict";
  var process = $__require("3");
  var define,
      global = this,
      GLOBAL = this;
  var SyntheticEvent = $__require('2d');
  var ClipboardEventInterface = {clipboardData: function(event) {
      return 'clipboardData' in event ? event.clipboardData : window.clipboardData;
    }};
  function SyntheticClipboardEvent(dispatchConfig, dispatchMarker, nativeEvent, nativeEventTarget) {
    SyntheticEvent.call(this, dispatchConfig, dispatchMarker, nativeEvent, nativeEventTarget);
  }
  SyntheticEvent.augmentClass(SyntheticClipboardEvent, ClipboardEventInterface);
  module.exports = SyntheticClipboardEvent;
  return module.exports;
});

$__System.registerDynamic("84", ["85", "3"], true, function($__require, exports, module) {
  "use strict";
  var process = $__require("3");
  var define,
      global = this,
      GLOBAL = this;
  var SyntheticUIEvent = $__require('85');
  var FocusEventInterface = {relatedTarget: null};
  function SyntheticFocusEvent(dispatchConfig, dispatchMarker, nativeEvent, nativeEventTarget) {
    SyntheticUIEvent.call(this, dispatchConfig, dispatchMarker, nativeEvent, nativeEventTarget);
  }
  SyntheticUIEvent.augmentClass(SyntheticFocusEvent, FocusEventInterface);
  module.exports = SyntheticFocusEvent;
  return module.exports;
});

$__System.registerDynamic("86", ["87", "3"], true, function($__require, exports, module) {
  "use strict";
  var process = $__require("3");
  var define,
      global = this,
      GLOBAL = this;
  var getEventCharCode = $__require('87');
  var normalizeKey = {
    'Esc': 'Escape',
    'Spacebar': ' ',
    'Left': 'ArrowLeft',
    'Up': 'ArrowUp',
    'Right': 'ArrowRight',
    'Down': 'ArrowDown',
    'Del': 'Delete',
    'Win': 'OS',
    'Menu': 'ContextMenu',
    'Apps': 'ContextMenu',
    'Scroll': 'ScrollLock',
    'MozPrintableKey': 'Unidentified'
  };
  var translateToKey = {
    8: 'Backspace',
    9: 'Tab',
    12: 'Clear',
    13: 'Enter',
    16: 'Shift',
    17: 'Control',
    18: 'Alt',
    19: 'Pause',
    20: 'CapsLock',
    27: 'Escape',
    32: ' ',
    33: 'PageUp',
    34: 'PageDown',
    35: 'End',
    36: 'Home',
    37: 'ArrowLeft',
    38: 'ArrowUp',
    39: 'ArrowRight',
    40: 'ArrowDown',
    45: 'Insert',
    46: 'Delete',
    112: 'F1',
    113: 'F2',
    114: 'F3',
    115: 'F4',
    116: 'F5',
    117: 'F6',
    118: 'F7',
    119: 'F8',
    120: 'F9',
    121: 'F10',
    122: 'F11',
    123: 'F12',
    144: 'NumLock',
    145: 'ScrollLock',
    224: 'Meta'
  };
  function getEventKey(nativeEvent) {
    if (nativeEvent.key) {
      var key = normalizeKey[nativeEvent.key] || nativeEvent.key;
      if (key !== 'Unidentified') {
        return key;
      }
    }
    if (nativeEvent.type === 'keypress') {
      var charCode = getEventCharCode(nativeEvent);
      return charCode === 13 ? 'Enter' : String.fromCharCode(charCode);
    }
    if (nativeEvent.type === 'keydown' || nativeEvent.type === 'keyup') {
      return translateToKey[nativeEvent.keyCode] || 'Unidentified';
    }
    return '';
  }
  module.exports = getEventKey;
  return module.exports;
});

$__System.registerDynamic("88", ["85", "87", "86", "89", "3"], true, function($__require, exports, module) {
  "use strict";
  var process = $__require("3");
  var define,
      global = this,
      GLOBAL = this;
  var SyntheticUIEvent = $__require('85');
  var getEventCharCode = $__require('87');
  var getEventKey = $__require('86');
  var getEventModifierState = $__require('89');
  var KeyboardEventInterface = {
    key: getEventKey,
    location: null,
    ctrlKey: null,
    shiftKey: null,
    altKey: null,
    metaKey: null,
    repeat: null,
    locale: null,
    getModifierState: getEventModifierState,
    charCode: function(event) {
      if (event.type === 'keypress') {
        return getEventCharCode(event);
      }
      return 0;
    },
    keyCode: function(event) {
      if (event.type === 'keydown' || event.type === 'keyup') {
        return event.keyCode;
      }
      return 0;
    },
    which: function(event) {
      if (event.type === 'keypress') {
        return getEventCharCode(event);
      }
      if (event.type === 'keydown' || event.type === 'keyup') {
        return event.keyCode;
      }
      return 0;
    }
  };
  function SyntheticKeyboardEvent(dispatchConfig, dispatchMarker, nativeEvent, nativeEventTarget) {
    SyntheticUIEvent.call(this, dispatchConfig, dispatchMarker, nativeEvent, nativeEventTarget);
  }
  SyntheticUIEvent.augmentClass(SyntheticKeyboardEvent, KeyboardEventInterface);
  module.exports = SyntheticKeyboardEvent;
  return module.exports;
});

$__System.registerDynamic("8a", ["3c", "3"], true, function($__require, exports, module) {
  "use strict";
  var process = $__require("3");
  var define,
      global = this,
      GLOBAL = this;
  var SyntheticMouseEvent = $__require('3c');
  var DragEventInterface = {dataTransfer: null};
  function SyntheticDragEvent(dispatchConfig, dispatchMarker, nativeEvent, nativeEventTarget) {
    SyntheticMouseEvent.call(this, dispatchConfig, dispatchMarker, nativeEvent, nativeEventTarget);
  }
  SyntheticMouseEvent.augmentClass(SyntheticDragEvent, DragEventInterface);
  module.exports = SyntheticDragEvent;
  return module.exports;
});

$__System.registerDynamic("8b", ["85", "89", "3"], true, function($__require, exports, module) {
  "use strict";
  var process = $__require("3");
  var define,
      global = this,
      GLOBAL = this;
  var SyntheticUIEvent = $__require('85');
  var getEventModifierState = $__require('89');
  var TouchEventInterface = {
    touches: null,
    targetTouches: null,
    changedTouches: null,
    altKey: null,
    metaKey: null,
    ctrlKey: null,
    shiftKey: null,
    getModifierState: getEventModifierState
  };
  function SyntheticTouchEvent(dispatchConfig, dispatchMarker, nativeEvent, nativeEventTarget) {
    SyntheticUIEvent.call(this, dispatchConfig, dispatchMarker, nativeEvent, nativeEventTarget);
  }
  SyntheticUIEvent.augmentClass(SyntheticTouchEvent, TouchEventInterface);
  module.exports = SyntheticTouchEvent;
  return module.exports;
});

$__System.registerDynamic("2d", ["5", "8", "9", "1e", "3"], true, function($__require, exports, module) {
  "use strict";
  var process = $__require("3");
  var define,
      global = this,
      GLOBAL = this;
  var PooledClass = $__require('5');
  var assign = $__require('8');
  var emptyFunction = $__require('9');
  var warning = $__require('1e');
  var EventInterface = {
    type: null,
    target: null,
    currentTarget: emptyFunction.thatReturnsNull,
    eventPhase: null,
    bubbles: null,
    cancelable: null,
    timeStamp: function(event) {
      return event.timeStamp || Date.now();
    },
    defaultPrevented: null,
    isTrusted: null
  };
  function SyntheticEvent(dispatchConfig, dispatchMarker, nativeEvent, nativeEventTarget) {
    this.dispatchConfig = dispatchConfig;
    this.dispatchMarker = dispatchMarker;
    this.nativeEvent = nativeEvent;
    var Interface = this.constructor.Interface;
    for (var propName in Interface) {
      if (!Interface.hasOwnProperty(propName)) {
        continue;
      }
      var normalize = Interface[propName];
      if (normalize) {
        this[propName] = normalize(nativeEvent);
      } else {
        if (propName === 'target') {
          this.target = nativeEventTarget;
        } else {
          this[propName] = nativeEvent[propName];
        }
      }
    }
    var defaultPrevented = nativeEvent.defaultPrevented != null ? nativeEvent.defaultPrevented : nativeEvent.returnValue === false;
    if (defaultPrevented) {
      this.isDefaultPrevented = emptyFunction.thatReturnsTrue;
    } else {
      this.isDefaultPrevented = emptyFunction.thatReturnsFalse;
    }
    this.isPropagationStopped = emptyFunction.thatReturnsFalse;
  }
  assign(SyntheticEvent.prototype, {
    preventDefault: function() {
      this.defaultPrevented = true;
      var event = this.nativeEvent;
      if (process.env.NODE_ENV !== 'production') {
        process.env.NODE_ENV !== 'production' ? warning(event, 'This synthetic event is reused for performance reasons. If you\'re ' + 'seeing this, you\'re calling `preventDefault` on a ' + 'released/nullified synthetic event. This is a no-op. See ' + 'https://fb.me/react-event-pooling for more information.') : undefined;
      }
      if (!event) {
        return;
      }
      if (event.preventDefault) {
        event.preventDefault();
      } else {
        event.returnValue = false;
      }
      this.isDefaultPrevented = emptyFunction.thatReturnsTrue;
    },
    stopPropagation: function() {
      var event = this.nativeEvent;
      if (process.env.NODE_ENV !== 'production') {
        process.env.NODE_ENV !== 'production' ? warning(event, 'This synthetic event is reused for performance reasons. If you\'re ' + 'seeing this, you\'re calling `stopPropagation` on a ' + 'released/nullified synthetic event. This is a no-op. See ' + 'https://fb.me/react-event-pooling for more information.') : undefined;
      }
      if (!event) {
        return;
      }
      if (event.stopPropagation) {
        event.stopPropagation();
      } else {
        event.cancelBubble = true;
      }
      this.isPropagationStopped = emptyFunction.thatReturnsTrue;
    },
    persist: function() {
      this.isPersistent = emptyFunction.thatReturnsTrue;
    },
    isPersistent: emptyFunction.thatReturnsFalse,
    destructor: function() {
      var Interface = this.constructor.Interface;
      for (var propName in Interface) {
        this[propName] = null;
      }
      this.dispatchConfig = null;
      this.dispatchMarker = null;
      this.nativeEvent = null;
    }
  });
  SyntheticEvent.Interface = EventInterface;
  SyntheticEvent.augmentClass = function(Class, Interface) {
    var Super = this;
    var prototype = Object.create(Super.prototype);
    assign(prototype, Class.prototype);
    Class.prototype = prototype;
    Class.prototype.constructor = Class;
    Class.Interface = assign({}, Super.Interface, Interface);
    Class.augmentClass = Super.augmentClass;
    PooledClass.addPoolingTo(Class, PooledClass.fourArgumentPooler);
  };
  PooledClass.addPoolingTo(SyntheticEvent, PooledClass.fourArgumentPooler);
  module.exports = SyntheticEvent;
  return module.exports;
});

$__System.registerDynamic("36", ["3"], true, function($__require, exports, module) {
  "use strict";
  var process = $__require("3");
  var define,
      global = this,
      GLOBAL = this;
  function getEventTarget(nativeEvent) {
    var target = nativeEvent.target || nativeEvent.srcElement || window;
    return target.nodeType === 3 ? target.parentNode : target;
  }
  module.exports = getEventTarget;
  return module.exports;
});

$__System.registerDynamic("85", ["2d", "36", "3"], true, function($__require, exports, module) {
  "use strict";
  var process = $__require("3");
  var define,
      global = this,
      GLOBAL = this;
  var SyntheticEvent = $__require('2d');
  var getEventTarget = $__require('36');
  var UIEventInterface = {
    view: function(event) {
      if (event.view) {
        return event.view;
      }
      var target = getEventTarget(event);
      if (target != null && target.window === target) {
        return target;
      }
      var doc = target.ownerDocument;
      if (doc) {
        return doc.defaultView || doc.parentWindow;
      } else {
        return window;
      }
    },
    detail: function(event) {
      return event.detail || 0;
    }
  };
  function SyntheticUIEvent(dispatchConfig, dispatchMarker, nativeEvent, nativeEventTarget) {
    SyntheticEvent.call(this, dispatchConfig, dispatchMarker, nativeEvent, nativeEventTarget);
  }
  SyntheticEvent.augmentClass(SyntheticUIEvent, UIEventInterface);
  module.exports = SyntheticUIEvent;
  return module.exports;
});

$__System.registerDynamic("89", ["3"], true, function($__require, exports, module) {
  "use strict";
  var process = $__require("3");
  var define,
      global = this,
      GLOBAL = this;
  var modifierKeyToProp = {
    'Alt': 'altKey',
    'Control': 'ctrlKey',
    'Meta': 'metaKey',
    'Shift': 'shiftKey'
  };
  function modifierStateGetter(keyArg) {
    var syntheticEvent = this;
    var nativeEvent = syntheticEvent.nativeEvent;
    if (nativeEvent.getModifierState) {
      return nativeEvent.getModifierState(keyArg);
    }
    var keyProp = modifierKeyToProp[keyArg];
    return keyProp ? !!nativeEvent[keyProp] : false;
  }
  function getEventModifierState(nativeEvent) {
    return modifierStateGetter;
  }
  module.exports = getEventModifierState;
  return module.exports;
});

$__System.registerDynamic("3c", ["85", "8c", "89", "3"], true, function($__require, exports, module) {
  "use strict";
  var process = $__require("3");
  var define,
      global = this,
      GLOBAL = this;
  var SyntheticUIEvent = $__require('85');
  var ViewportMetrics = $__require('8c');
  var getEventModifierState = $__require('89');
  var MouseEventInterface = {
    screenX: null,
    screenY: null,
    clientX: null,
    clientY: null,
    ctrlKey: null,
    shiftKey: null,
    altKey: null,
    metaKey: null,
    getModifierState: getEventModifierState,
    button: function(event) {
      var button = event.button;
      if ('which' in event) {
        return button;
      }
      return button === 2 ? 2 : button === 4 ? 1 : 0;
    },
    buttons: null,
    relatedTarget: function(event) {
      return event.relatedTarget || (event.fromElement === event.srcElement ? event.toElement : event.fromElement);
    },
    pageX: function(event) {
      return 'pageX' in event ? event.pageX : event.clientX + ViewportMetrics.currentScrollLeft;
    },
    pageY: function(event) {
      return 'pageY' in event ? event.pageY : event.clientY + ViewportMetrics.currentScrollTop;
    }
  };
  function SyntheticMouseEvent(dispatchConfig, dispatchMarker, nativeEvent, nativeEventTarget) {
    SyntheticUIEvent.call(this, dispatchConfig, dispatchMarker, nativeEvent, nativeEventTarget);
  }
  SyntheticUIEvent.augmentClass(SyntheticMouseEvent, MouseEventInterface);
  module.exports = SyntheticMouseEvent;
  return module.exports;
});

$__System.registerDynamic("8d", ["3c", "3"], true, function($__require, exports, module) {
  "use strict";
  var process = $__require("3");
  var define,
      global = this,
      GLOBAL = this;
  var SyntheticMouseEvent = $__require('3c');
  var WheelEventInterface = {
    deltaX: function(event) {
      return 'deltaX' in event ? event.deltaX : 'wheelDeltaX' in event ? -event.wheelDeltaX : 0;
    },
    deltaY: function(event) {
      return 'deltaY' in event ? event.deltaY : 'wheelDeltaY' in event ? -event.wheelDeltaY : 'wheelDelta' in event ? -event.wheelDelta : 0;
    },
    deltaZ: null,
    deltaMode: null
  };
  function SyntheticWheelEvent(dispatchConfig, dispatchMarker, nativeEvent, nativeEventTarget) {
    SyntheticMouseEvent.call(this, dispatchConfig, dispatchMarker, nativeEvent, nativeEventTarget);
  }
  SyntheticMouseEvent.augmentClass(SyntheticWheelEvent, WheelEventInterface);
  module.exports = SyntheticWheelEvent;
  return module.exports;
});

$__System.registerDynamic("87", ["3"], true, function($__require, exports, module) {
  "use strict";
  var process = $__require("3");
  var define,
      global = this,
      GLOBAL = this;
  function getEventCharCode(nativeEvent) {
    var charCode;
    var keyCode = nativeEvent.keyCode;
    if ('charCode' in nativeEvent) {
      charCode = nativeEvent.charCode;
      if (charCode === 0 && keyCode === 13) {
        charCode = 13;
      }
    } else {
      charCode = keyCode;
    }
    if (charCode >= 32 || charCode === 13) {
      return charCode;
    }
    return 0;
  }
  module.exports = getEventCharCode;
  return module.exports;
});

$__System.registerDynamic("33", ["3"], true, function($__require, exports, module) {
  "use strict";
  var process = $__require("3");
  var define,
      global = this,
      GLOBAL = this;
  var keyOf = function(oneKeyObj) {
    var key;
    for (key in oneKeyObj) {
      if (!oneKeyObj.hasOwnProperty(key)) {
        continue;
      }
      return key;
    }
    return null;
  };
  module.exports = keyOf;
  return module.exports;
});

$__System.registerDynamic("8e", ["30", "72", "31", "3d", "83", "2d", "84", "88", "3c", "8a", "8b", "85", "8d", "9", "87", "12", "33", "3"], true, function($__require, exports, module) {
  "use strict";
  var process = $__require("3");
  var define,
      global = this,
      GLOBAL = this;
  var EventConstants = $__require('30');
  var EventListener = $__require('72');
  var EventPropagators = $__require('31');
  var ReactMount = $__require('3d');
  var SyntheticClipboardEvent = $__require('83');
  var SyntheticEvent = $__require('2d');
  var SyntheticFocusEvent = $__require('84');
  var SyntheticKeyboardEvent = $__require('88');
  var SyntheticMouseEvent = $__require('3c');
  var SyntheticDragEvent = $__require('8a');
  var SyntheticTouchEvent = $__require('8b');
  var SyntheticUIEvent = $__require('85');
  var SyntheticWheelEvent = $__require('8d');
  var emptyFunction = $__require('9');
  var getEventCharCode = $__require('87');
  var invariant = $__require('12');
  var keyOf = $__require('33');
  var topLevelTypes = EventConstants.topLevelTypes;
  var eventTypes = {
    abort: {phasedRegistrationNames: {
        bubbled: keyOf({onAbort: true}),
        captured: keyOf({onAbortCapture: true})
      }},
    blur: {phasedRegistrationNames: {
        bubbled: keyOf({onBlur: true}),
        captured: keyOf({onBlurCapture: true})
      }},
    canPlay: {phasedRegistrationNames: {
        bubbled: keyOf({onCanPlay: true}),
        captured: keyOf({onCanPlayCapture: true})
      }},
    canPlayThrough: {phasedRegistrationNames: {
        bubbled: keyOf({onCanPlayThrough: true}),
        captured: keyOf({onCanPlayThroughCapture: true})
      }},
    click: {phasedRegistrationNames: {
        bubbled: keyOf({onClick: true}),
        captured: keyOf({onClickCapture: true})
      }},
    contextMenu: {phasedRegistrationNames: {
        bubbled: keyOf({onContextMenu: true}),
        captured: keyOf({onContextMenuCapture: true})
      }},
    copy: {phasedRegistrationNames: {
        bubbled: keyOf({onCopy: true}),
        captured: keyOf({onCopyCapture: true})
      }},
    cut: {phasedRegistrationNames: {
        bubbled: keyOf({onCut: true}),
        captured: keyOf({onCutCapture: true})
      }},
    doubleClick: {phasedRegistrationNames: {
        bubbled: keyOf({onDoubleClick: true}),
        captured: keyOf({onDoubleClickCapture: true})
      }},
    drag: {phasedRegistrationNames: {
        bubbled: keyOf({onDrag: true}),
        captured: keyOf({onDragCapture: true})
      }},
    dragEnd: {phasedRegistrationNames: {
        bubbled: keyOf({onDragEnd: true}),
        captured: keyOf({onDragEndCapture: true})
      }},
    dragEnter: {phasedRegistrationNames: {
        bubbled: keyOf({onDragEnter: true}),
        captured: keyOf({onDragEnterCapture: true})
      }},
    dragExit: {phasedRegistrationNames: {
        bubbled: keyOf({onDragExit: true}),
        captured: keyOf({onDragExitCapture: true})
      }},
    dragLeave: {phasedRegistrationNames: {
        bubbled: keyOf({onDragLeave: true}),
        captured: keyOf({onDragLeaveCapture: true})
      }},
    dragOver: {phasedRegistrationNames: {
        bubbled: keyOf({onDragOver: true}),
        captured: keyOf({onDragOverCapture: true})
      }},
    dragStart: {phasedRegistrationNames: {
        bubbled: keyOf({onDragStart: true}),
        captured: keyOf({onDragStartCapture: true})
      }},
    drop: {phasedRegistrationNames: {
        bubbled: keyOf({onDrop: true}),
        captured: keyOf({onDropCapture: true})
      }},
    durationChange: {phasedRegistrationNames: {
        bubbled: keyOf({onDurationChange: true}),
        captured: keyOf({onDurationChangeCapture: true})
      }},
    emptied: {phasedRegistrationNames: {
        bubbled: keyOf({onEmptied: true}),
        captured: keyOf({onEmptiedCapture: true})
      }},
    encrypted: {phasedRegistrationNames: {
        bubbled: keyOf({onEncrypted: true}),
        captured: keyOf({onEncryptedCapture: true})
      }},
    ended: {phasedRegistrationNames: {
        bubbled: keyOf({onEnded: true}),
        captured: keyOf({onEndedCapture: true})
      }},
    error: {phasedRegistrationNames: {
        bubbled: keyOf({onError: true}),
        captured: keyOf({onErrorCapture: true})
      }},
    focus: {phasedRegistrationNames: {
        bubbled: keyOf({onFocus: true}),
        captured: keyOf({onFocusCapture: true})
      }},
    input: {phasedRegistrationNames: {
        bubbled: keyOf({onInput: true}),
        captured: keyOf({onInputCapture: true})
      }},
    keyDown: {phasedRegistrationNames: {
        bubbled: keyOf({onKeyDown: true}),
        captured: keyOf({onKeyDownCapture: true})
      }},
    keyPress: {phasedRegistrationNames: {
        bubbled: keyOf({onKeyPress: true}),
        captured: keyOf({onKeyPressCapture: true})
      }},
    keyUp: {phasedRegistrationNames: {
        bubbled: keyOf({onKeyUp: true}),
        captured: keyOf({onKeyUpCapture: true})
      }},
    load: {phasedRegistrationNames: {
        bubbled: keyOf({onLoad: true}),
        captured: keyOf({onLoadCapture: true})
      }},
    loadedData: {phasedRegistrationNames: {
        bubbled: keyOf({onLoadedData: true}),
        captured: keyOf({onLoadedDataCapture: true})
      }},
    loadedMetadata: {phasedRegistrationNames: {
        bubbled: keyOf({onLoadedMetadata: true}),
        captured: keyOf({onLoadedMetadataCapture: true})
      }},
    loadStart: {phasedRegistrationNames: {
        bubbled: keyOf({onLoadStart: true}),
        captured: keyOf({onLoadStartCapture: true})
      }},
    mouseDown: {phasedRegistrationNames: {
        bubbled: keyOf({onMouseDown: true}),
        captured: keyOf({onMouseDownCapture: true})
      }},
    mouseMove: {phasedRegistrationNames: {
        bubbled: keyOf({onMouseMove: true}),
        captured: keyOf({onMouseMoveCapture: true})
      }},
    mouseOut: {phasedRegistrationNames: {
        bubbled: keyOf({onMouseOut: true}),
        captured: keyOf({onMouseOutCapture: true})
      }},
    mouseOver: {phasedRegistrationNames: {
        bubbled: keyOf({onMouseOver: true}),
        captured: keyOf({onMouseOverCapture: true})
      }},
    mouseUp: {phasedRegistrationNames: {
        bubbled: keyOf({onMouseUp: true}),
        captured: keyOf({onMouseUpCapture: true})
      }},
    paste: {phasedRegistrationNames: {
        bubbled: keyOf({onPaste: true}),
        captured: keyOf({onPasteCapture: true})
      }},
    pause: {phasedRegistrationNames: {
        bubbled: keyOf({onPause: true}),
        captured: keyOf({onPauseCapture: true})
      }},
    play: {phasedRegistrationNames: {
        bubbled: keyOf({onPlay: true}),
        captured: keyOf({onPlayCapture: true})
      }},
    playing: {phasedRegistrationNames: {
        bubbled: keyOf({onPlaying: true}),
        captured: keyOf({onPlayingCapture: true})
      }},
    progress: {phasedRegistrationNames: {
        bubbled: keyOf({onProgress: true}),
        captured: keyOf({onProgressCapture: true})
      }},
    rateChange: {phasedRegistrationNames: {
        bubbled: keyOf({onRateChange: true}),
        captured: keyOf({onRateChangeCapture: true})
      }},
    reset: {phasedRegistrationNames: {
        bubbled: keyOf({onReset: true}),
        captured: keyOf({onResetCapture: true})
      }},
    scroll: {phasedRegistrationNames: {
        bubbled: keyOf({onScroll: true}),
        captured: keyOf({onScrollCapture: true})
      }},
    seeked: {phasedRegistrationNames: {
        bubbled: keyOf({onSeeked: true}),
        captured: keyOf({onSeekedCapture: true})
      }},
    seeking: {phasedRegistrationNames: {
        bubbled: keyOf({onSeeking: true}),
        captured: keyOf({onSeekingCapture: true})
      }},
    stalled: {phasedRegistrationNames: {
        bubbled: keyOf({onStalled: true}),
        captured: keyOf({onStalledCapture: true})
      }},
    submit: {phasedRegistrationNames: {
        bubbled: keyOf({onSubmit: true}),
        captured: keyOf({onSubmitCapture: true})
      }},
    suspend: {phasedRegistrationNames: {
        bubbled: keyOf({onSuspend: true}),
        captured: keyOf({onSuspendCapture: true})
      }},
    timeUpdate: {phasedRegistrationNames: {
        bubbled: keyOf({onTimeUpdate: true}),
        captured: keyOf({onTimeUpdateCapture: true})
      }},
    touchCancel: {phasedRegistrationNames: {
        bubbled: keyOf({onTouchCancel: true}),
        captured: keyOf({onTouchCancelCapture: true})
      }},
    touchEnd: {phasedRegistrationNames: {
        bubbled: keyOf({onTouchEnd: true}),
        captured: keyOf({onTouchEndCapture: true})
      }},
    touchMove: {phasedRegistrationNames: {
        bubbled: keyOf({onTouchMove: true}),
        captured: keyOf({onTouchMoveCapture: true})
      }},
    touchStart: {phasedRegistrationNames: {
        bubbled: keyOf({onTouchStart: true}),
        captured: keyOf({onTouchStartCapture: true})
      }},
    volumeChange: {phasedRegistrationNames: {
        bubbled: keyOf({onVolumeChange: true}),
        captured: keyOf({onVolumeChangeCapture: true})
      }},
    waiting: {phasedRegistrationNames: {
        bubbled: keyOf({onWaiting: true}),
        captured: keyOf({onWaitingCapture: true})
      }},
    wheel: {phasedRegistrationNames: {
        bubbled: keyOf({onWheel: true}),
        captured: keyOf({onWheelCapture: true})
      }}
  };
  var topLevelEventsToDispatchConfig = {
    topAbort: eventTypes.abort,
    topBlur: eventTypes.blur,
    topCanPlay: eventTypes.canPlay,
    topCanPlayThrough: eventTypes.canPlayThrough,
    topClick: eventTypes.click,
    topContextMenu: eventTypes.contextMenu,
    topCopy: eventTypes.copy,
    topCut: eventTypes.cut,
    topDoubleClick: eventTypes.doubleClick,
    topDrag: eventTypes.drag,
    topDragEnd: eventTypes.dragEnd,
    topDragEnter: eventTypes.dragEnter,
    topDragExit: eventTypes.dragExit,
    topDragLeave: eventTypes.dragLeave,
    topDragOver: eventTypes.dragOver,
    topDragStart: eventTypes.dragStart,
    topDrop: eventTypes.drop,
    topDurationChange: eventTypes.durationChange,
    topEmptied: eventTypes.emptied,
    topEncrypted: eventTypes.encrypted,
    topEnded: eventTypes.ended,
    topError: eventTypes.error,
    topFocus: eventTypes.focus,
    topInput: eventTypes.input,
    topKeyDown: eventTypes.keyDown,
    topKeyPress: eventTypes.keyPress,
    topKeyUp: eventTypes.keyUp,
    topLoad: eventTypes.load,
    topLoadedData: eventTypes.loadedData,
    topLoadedMetadata: eventTypes.loadedMetadata,
    topLoadStart: eventTypes.loadStart,
    topMouseDown: eventTypes.mouseDown,
    topMouseMove: eventTypes.mouseMove,
    topMouseOut: eventTypes.mouseOut,
    topMouseOver: eventTypes.mouseOver,
    topMouseUp: eventTypes.mouseUp,
    topPaste: eventTypes.paste,
    topPause: eventTypes.pause,
    topPlay: eventTypes.play,
    topPlaying: eventTypes.playing,
    topProgress: eventTypes.progress,
    topRateChange: eventTypes.rateChange,
    topReset: eventTypes.reset,
    topScroll: eventTypes.scroll,
    topSeeked: eventTypes.seeked,
    topSeeking: eventTypes.seeking,
    topStalled: eventTypes.stalled,
    topSubmit: eventTypes.submit,
    topSuspend: eventTypes.suspend,
    topTimeUpdate: eventTypes.timeUpdate,
    topTouchCancel: eventTypes.touchCancel,
    topTouchEnd: eventTypes.touchEnd,
    topTouchMove: eventTypes.touchMove,
    topTouchStart: eventTypes.touchStart,
    topVolumeChange: eventTypes.volumeChange,
    topWaiting: eventTypes.waiting,
    topWheel: eventTypes.wheel
  };
  for (var type in topLevelEventsToDispatchConfig) {
    topLevelEventsToDispatchConfig[type].dependencies = [type];
  }
  var ON_CLICK_KEY = keyOf({onClick: null});
  var onClickListeners = {};
  var SimpleEventPlugin = {
    eventTypes: eventTypes,
    extractEvents: function(topLevelType, topLevelTarget, topLevelTargetID, nativeEvent, nativeEventTarget) {
      var dispatchConfig = topLevelEventsToDispatchConfig[topLevelType];
      if (!dispatchConfig) {
        return null;
      }
      var EventConstructor;
      switch (topLevelType) {
        case topLevelTypes.topAbort:
        case topLevelTypes.topCanPlay:
        case topLevelTypes.topCanPlayThrough:
        case topLevelTypes.topDurationChange:
        case topLevelTypes.topEmptied:
        case topLevelTypes.topEncrypted:
        case topLevelTypes.topEnded:
        case topLevelTypes.topError:
        case topLevelTypes.topInput:
        case topLevelTypes.topLoad:
        case topLevelTypes.topLoadedData:
        case topLevelTypes.topLoadedMetadata:
        case topLevelTypes.topLoadStart:
        case topLevelTypes.topPause:
        case topLevelTypes.topPlay:
        case topLevelTypes.topPlaying:
        case topLevelTypes.topProgress:
        case topLevelTypes.topRateChange:
        case topLevelTypes.topReset:
        case topLevelTypes.topSeeked:
        case topLevelTypes.topSeeking:
        case topLevelTypes.topStalled:
        case topLevelTypes.topSubmit:
        case topLevelTypes.topSuspend:
        case topLevelTypes.topTimeUpdate:
        case topLevelTypes.topVolumeChange:
        case topLevelTypes.topWaiting:
          EventConstructor = SyntheticEvent;
          break;
        case topLevelTypes.topKeyPress:
          if (getEventCharCode(nativeEvent) === 0) {
            return null;
          }
        case topLevelTypes.topKeyDown:
        case topLevelTypes.topKeyUp:
          EventConstructor = SyntheticKeyboardEvent;
          break;
        case topLevelTypes.topBlur:
        case topLevelTypes.topFocus:
          EventConstructor = SyntheticFocusEvent;
          break;
        case topLevelTypes.topClick:
          if (nativeEvent.button === 2) {
            return null;
          }
        case topLevelTypes.topContextMenu:
        case topLevelTypes.topDoubleClick:
        case topLevelTypes.topMouseDown:
        case topLevelTypes.topMouseMove:
        case topLevelTypes.topMouseOut:
        case topLevelTypes.topMouseOver:
        case topLevelTypes.topMouseUp:
          EventConstructor = SyntheticMouseEvent;
          break;
        case topLevelTypes.topDrag:
        case topLevelTypes.topDragEnd:
        case topLevelTypes.topDragEnter:
        case topLevelTypes.topDragExit:
        case topLevelTypes.topDragLeave:
        case topLevelTypes.topDragOver:
        case topLevelTypes.topDragStart:
        case topLevelTypes.topDrop:
          EventConstructor = SyntheticDragEvent;
          break;
        case topLevelTypes.topTouchCancel:
        case topLevelTypes.topTouchEnd:
        case topLevelTypes.topTouchMove:
        case topLevelTypes.topTouchStart:
          EventConstructor = SyntheticTouchEvent;
          break;
        case topLevelTypes.topScroll:
          EventConstructor = SyntheticUIEvent;
          break;
        case topLevelTypes.topWheel:
          EventConstructor = SyntheticWheelEvent;
          break;
        case topLevelTypes.topCopy:
        case topLevelTypes.topCut:
        case topLevelTypes.topPaste:
          EventConstructor = SyntheticClipboardEvent;
          break;
      }
      !EventConstructor ? process.env.NODE_ENV !== 'production' ? invariant(false, 'SimpleEventPlugin: Unhandled event type, `%s`.', topLevelType) : invariant(false) : undefined;
      var event = EventConstructor.getPooled(dispatchConfig, topLevelTargetID, nativeEvent, nativeEventTarget);
      EventPropagators.accumulateTwoPhaseDispatches(event);
      return event;
    },
    didPutListener: function(id, registrationName, listener) {
      if (registrationName === ON_CLICK_KEY) {
        var node = ReactMount.getNode(id);
        if (!onClickListeners[id]) {
          onClickListeners[id] = EventListener.listen(node, 'click', emptyFunction);
        }
      }
    },
    willDeleteListener: function(id, registrationName) {
      if (registrationName === ON_CLICK_KEY) {
        onClickListeners[id].remove();
        delete onClickListeners[id];
      }
    }
  };
  module.exports = SimpleEventPlugin;
  return module.exports;
});

$__System.registerDynamic("8f", ["3f", "3"], true, function($__require, exports, module) {
  "use strict";
  var process = $__require("3");
  var define,
      global = this,
      GLOBAL = this;
  var DOMProperty = $__require('3f');
  var MUST_USE_ATTRIBUTE = DOMProperty.injection.MUST_USE_ATTRIBUTE;
  var NS = {
    xlink: 'http://www.w3.org/1999/xlink',
    xml: 'http://www.w3.org/XML/1998/namespace'
  };
  var SVGDOMPropertyConfig = {
    Properties: {
      clipPath: MUST_USE_ATTRIBUTE,
      cx: MUST_USE_ATTRIBUTE,
      cy: MUST_USE_ATTRIBUTE,
      d: MUST_USE_ATTRIBUTE,
      dx: MUST_USE_ATTRIBUTE,
      dy: MUST_USE_ATTRIBUTE,
      fill: MUST_USE_ATTRIBUTE,
      fillOpacity: MUST_USE_ATTRIBUTE,
      fontFamily: MUST_USE_ATTRIBUTE,
      fontSize: MUST_USE_ATTRIBUTE,
      fx: MUST_USE_ATTRIBUTE,
      fy: MUST_USE_ATTRIBUTE,
      gradientTransform: MUST_USE_ATTRIBUTE,
      gradientUnits: MUST_USE_ATTRIBUTE,
      markerEnd: MUST_USE_ATTRIBUTE,
      markerMid: MUST_USE_ATTRIBUTE,
      markerStart: MUST_USE_ATTRIBUTE,
      offset: MUST_USE_ATTRIBUTE,
      opacity: MUST_USE_ATTRIBUTE,
      patternContentUnits: MUST_USE_ATTRIBUTE,
      patternUnits: MUST_USE_ATTRIBUTE,
      points: MUST_USE_ATTRIBUTE,
      preserveAspectRatio: MUST_USE_ATTRIBUTE,
      r: MUST_USE_ATTRIBUTE,
      rx: MUST_USE_ATTRIBUTE,
      ry: MUST_USE_ATTRIBUTE,
      spreadMethod: MUST_USE_ATTRIBUTE,
      stopColor: MUST_USE_ATTRIBUTE,
      stopOpacity: MUST_USE_ATTRIBUTE,
      stroke: MUST_USE_ATTRIBUTE,
      strokeDasharray: MUST_USE_ATTRIBUTE,
      strokeLinecap: MUST_USE_ATTRIBUTE,
      strokeOpacity: MUST_USE_ATTRIBUTE,
      strokeWidth: MUST_USE_ATTRIBUTE,
      textAnchor: MUST_USE_ATTRIBUTE,
      transform: MUST_USE_ATTRIBUTE,
      version: MUST_USE_ATTRIBUTE,
      viewBox: MUST_USE_ATTRIBUTE,
      x1: MUST_USE_ATTRIBUTE,
      x2: MUST_USE_ATTRIBUTE,
      x: MUST_USE_ATTRIBUTE,
      xlinkActuate: MUST_USE_ATTRIBUTE,
      xlinkArcrole: MUST_USE_ATTRIBUTE,
      xlinkHref: MUST_USE_ATTRIBUTE,
      xlinkRole: MUST_USE_ATTRIBUTE,
      xlinkShow: MUST_USE_ATTRIBUTE,
      xlinkTitle: MUST_USE_ATTRIBUTE,
      xlinkType: MUST_USE_ATTRIBUTE,
      xmlBase: MUST_USE_ATTRIBUTE,
      xmlLang: MUST_USE_ATTRIBUTE,
      xmlSpace: MUST_USE_ATTRIBUTE,
      y1: MUST_USE_ATTRIBUTE,
      y2: MUST_USE_ATTRIBUTE,
      y: MUST_USE_ATTRIBUTE
    },
    DOMAttributeNamespaces: {
      xlinkActuate: NS.xlink,
      xlinkArcrole: NS.xlink,
      xlinkHref: NS.xlink,
      xlinkRole: NS.xlink,
      xlinkShow: NS.xlink,
      xlinkTitle: NS.xlink,
      xlinkType: NS.xlink,
      xmlBase: NS.xml,
      xmlLang: NS.xml,
      xmlSpace: NS.xml
    },
    DOMAttributeNames: {
      clipPath: 'clip-path',
      fillOpacity: 'fill-opacity',
      fontFamily: 'font-family',
      fontSize: 'font-size',
      gradientTransform: 'gradientTransform',
      gradientUnits: 'gradientUnits',
      markerEnd: 'marker-end',
      markerMid: 'marker-mid',
      markerStart: 'marker-start',
      patternContentUnits: 'patternContentUnits',
      patternUnits: 'patternUnits',
      preserveAspectRatio: 'preserveAspectRatio',
      spreadMethod: 'spreadMethod',
      stopColor: 'stop-color',
      stopOpacity: 'stop-opacity',
      strokeDasharray: 'stroke-dasharray',
      strokeLinecap: 'stroke-linecap',
      strokeOpacity: 'stroke-opacity',
      strokeWidth: 'stroke-width',
      textAnchor: 'text-anchor',
      viewBox: 'viewBox',
      xlinkActuate: 'xlink:actuate',
      xlinkArcrole: 'xlink:arcrole',
      xlinkHref: 'xlink:href',
      xlinkRole: 'xlink:role',
      xlinkShow: 'xlink:show',
      xlinkTitle: 'xlink:title',
      xlinkType: 'xlink:type',
      xmlBase: 'xml:base',
      xmlLang: 'xml:lang',
      xmlSpace: 'xml:space'
    }
  };
  module.exports = SVGDOMPropertyConfig;
  return module.exports;
});

$__System.registerDynamic("90", ["8", "3"], true, function($__require, exports, module) {
  "use strict";
  var process = $__require("3");
  var define,
      global = this,
      GLOBAL = this;
  var assign = $__require('8');
  var DONT_CARE_THRESHOLD = 1.2;
  var DOM_OPERATION_TYPES = {
    '_mountImageIntoNode': 'set innerHTML',
    INSERT_MARKUP: 'set innerHTML',
    MOVE_EXISTING: 'move',
    REMOVE_NODE: 'remove',
    SET_MARKUP: 'set innerHTML',
    TEXT_CONTENT: 'set textContent',
    'setValueForProperty': 'update attribute',
    'setValueForAttribute': 'update attribute',
    'deleteValueForProperty': 'remove attribute',
    'setValueForStyles': 'update styles',
    'replaceNodeWithMarkup': 'replace',
    'updateTextContent': 'set textContent'
  };
  function getTotalTime(measurements) {
    var totalTime = 0;
    for (var i = 0; i < measurements.length; i++) {
      var measurement = measurements[i];
      totalTime += measurement.totalTime;
    }
    return totalTime;
  }
  function getDOMSummary(measurements) {
    var items = [];
    measurements.forEach(function(measurement) {
      Object.keys(measurement.writes).forEach(function(id) {
        measurement.writes[id].forEach(function(write) {
          items.push({
            id: id,
            type: DOM_OPERATION_TYPES[write.type] || write.type,
            args: write.args
          });
        });
      });
    });
    return items;
  }
  function getExclusiveSummary(measurements) {
    var candidates = {};
    var displayName;
    for (var i = 0; i < measurements.length; i++) {
      var measurement = measurements[i];
      var allIDs = assign({}, measurement.exclusive, measurement.inclusive);
      for (var id in allIDs) {
        displayName = measurement.displayNames[id].current;
        candidates[displayName] = candidates[displayName] || {
          componentName: displayName,
          inclusive: 0,
          exclusive: 0,
          render: 0,
          count: 0
        };
        if (measurement.render[id]) {
          candidates[displayName].render += measurement.render[id];
        }
        if (measurement.exclusive[id]) {
          candidates[displayName].exclusive += measurement.exclusive[id];
        }
        if (measurement.inclusive[id]) {
          candidates[displayName].inclusive += measurement.inclusive[id];
        }
        if (measurement.counts[id]) {
          candidates[displayName].count += measurement.counts[id];
        }
      }
    }
    var arr = [];
    for (displayName in candidates) {
      if (candidates[displayName].exclusive >= DONT_CARE_THRESHOLD) {
        arr.push(candidates[displayName]);
      }
    }
    arr.sort(function(a, b) {
      return b.exclusive - a.exclusive;
    });
    return arr;
  }
  function getInclusiveSummary(measurements, onlyClean) {
    var candidates = {};
    var inclusiveKey;
    for (var i = 0; i < measurements.length; i++) {
      var measurement = measurements[i];
      var allIDs = assign({}, measurement.exclusive, measurement.inclusive);
      var cleanComponents;
      if (onlyClean) {
        cleanComponents = getUnchangedComponents(measurement);
      }
      for (var id in allIDs) {
        if (onlyClean && !cleanComponents[id]) {
          continue;
        }
        var displayName = measurement.displayNames[id];
        inclusiveKey = displayName.owner + ' > ' + displayName.current;
        candidates[inclusiveKey] = candidates[inclusiveKey] || {
          componentName: inclusiveKey,
          time: 0,
          count: 0
        };
        if (measurement.inclusive[id]) {
          candidates[inclusiveKey].time += measurement.inclusive[id];
        }
        if (measurement.counts[id]) {
          candidates[inclusiveKey].count += measurement.counts[id];
        }
      }
    }
    var arr = [];
    for (inclusiveKey in candidates) {
      if (candidates[inclusiveKey].time >= DONT_CARE_THRESHOLD) {
        arr.push(candidates[inclusiveKey]);
      }
    }
    arr.sort(function(a, b) {
      return b.time - a.time;
    });
    return arr;
  }
  function getUnchangedComponents(measurement) {
    var cleanComponents = {};
    var dirtyLeafIDs = Object.keys(measurement.writes);
    var allIDs = assign({}, measurement.exclusive, measurement.inclusive);
    for (var id in allIDs) {
      var isDirty = false;
      for (var i = 0; i < dirtyLeafIDs.length; i++) {
        if (dirtyLeafIDs[i].indexOf(id) === 0) {
          isDirty = true;
          break;
        }
      }
      if (measurement.created[id]) {
        isDirty = true;
      }
      if (!isDirty && measurement.counts[id] > 0) {
        cleanComponents[id] = true;
      }
    }
    return cleanComponents;
  }
  var ReactDefaultPerfAnalysis = {
    getExclusiveSummary: getExclusiveSummary,
    getInclusiveSummary: getInclusiveSummary,
    getDOMSummary: getDOMSummary,
    getTotalTime: getTotalTime
  };
  module.exports = ReactDefaultPerfAnalysis;
  return module.exports;
});

$__System.registerDynamic("91", ["32", "3"], true, function($__require, exports, module) {
  "use strict";
  var process = $__require("3");
  var define,
      global = this,
      GLOBAL = this;
  var ExecutionEnvironment = $__require('32');
  var performance;
  if (ExecutionEnvironment.canUseDOM) {
    performance = window.performance || window.msPerformance || window.webkitPerformance;
  }
  module.exports = performance || {};
  return module.exports;
});

$__System.registerDynamic("92", ["91", "3"], true, function($__require, exports, module) {
  "use strict";
  var process = $__require("3");
  var define,
      global = this,
      GLOBAL = this;
  var performance = $__require('91');
  var performanceNow;
  if (performance.now) {
    performanceNow = function() {
      return performance.now();
    };
  } else {
    performanceNow = function() {
      return Date.now();
    };
  }
  module.exports = performanceNow;
  return module.exports;
});

$__System.registerDynamic("93", ["3f", "90", "3d", "4d", "92", "3"], true, function($__require, exports, module) {
  "use strict";
  var process = $__require("3");
  var define,
      global = this,
      GLOBAL = this;
  var DOMProperty = $__require('3f');
  var ReactDefaultPerfAnalysis = $__require('90');
  var ReactMount = $__require('3d');
  var ReactPerf = $__require('4d');
  var performanceNow = $__require('92');
  function roundFloat(val) {
    return Math.floor(val * 100) / 100;
  }
  function addValue(obj, key, val) {
    obj[key] = (obj[key] || 0) + val;
  }
  var ReactDefaultPerf = {
    _allMeasurements: [],
    _mountStack: [0],
    _injected: false,
    start: function() {
      if (!ReactDefaultPerf._injected) {
        ReactPerf.injection.injectMeasure(ReactDefaultPerf.measure);
      }
      ReactDefaultPerf._allMeasurements.length = 0;
      ReactPerf.enableMeasure = true;
    },
    stop: function() {
      ReactPerf.enableMeasure = false;
    },
    getLastMeasurements: function() {
      return ReactDefaultPerf._allMeasurements;
    },
    printExclusive: function(measurements) {
      measurements = measurements || ReactDefaultPerf._allMeasurements;
      var summary = ReactDefaultPerfAnalysis.getExclusiveSummary(measurements);
      console.table(summary.map(function(item) {
        return {
          'Component class name': item.componentName,
          'Total inclusive time (ms)': roundFloat(item.inclusive),
          'Exclusive mount time (ms)': roundFloat(item.exclusive),
          'Exclusive render time (ms)': roundFloat(item.render),
          'Mount time per instance (ms)': roundFloat(item.exclusive / item.count),
          'Render time per instance (ms)': roundFloat(item.render / item.count),
          'Instances': item.count
        };
      }));
    },
    printInclusive: function(measurements) {
      measurements = measurements || ReactDefaultPerf._allMeasurements;
      var summary = ReactDefaultPerfAnalysis.getInclusiveSummary(measurements);
      console.table(summary.map(function(item) {
        return {
          'Owner > component': item.componentName,
          'Inclusive time (ms)': roundFloat(item.time),
          'Instances': item.count
        };
      }));
      console.log('Total time:', ReactDefaultPerfAnalysis.getTotalTime(measurements).toFixed(2) + ' ms');
    },
    getMeasurementsSummaryMap: function(measurements) {
      var summary = ReactDefaultPerfAnalysis.getInclusiveSummary(measurements, true);
      return summary.map(function(item) {
        return {
          'Owner > component': item.componentName,
          'Wasted time (ms)': item.time,
          'Instances': item.count
        };
      });
    },
    printWasted: function(measurements) {
      measurements = measurements || ReactDefaultPerf._allMeasurements;
      console.table(ReactDefaultPerf.getMeasurementsSummaryMap(measurements));
      console.log('Total time:', ReactDefaultPerfAnalysis.getTotalTime(measurements).toFixed(2) + ' ms');
    },
    printDOM: function(measurements) {
      measurements = measurements || ReactDefaultPerf._allMeasurements;
      var summary = ReactDefaultPerfAnalysis.getDOMSummary(measurements);
      console.table(summary.map(function(item) {
        var result = {};
        result[DOMProperty.ID_ATTRIBUTE_NAME] = item.id;
        result.type = item.type;
        result.args = JSON.stringify(item.args);
        return result;
      }));
      console.log('Total time:', ReactDefaultPerfAnalysis.getTotalTime(measurements).toFixed(2) + ' ms');
    },
    _recordWrite: function(id, fnName, totalTime, args) {
      var writes = ReactDefaultPerf._allMeasurements[ReactDefaultPerf._allMeasurements.length - 1].writes;
      writes[id] = writes[id] || [];
      writes[id].push({
        type: fnName,
        time: totalTime,
        args: args
      });
    },
    measure: function(moduleName, fnName, func) {
      return function() {
        for (var _len = arguments.length,
            args = Array(_len),
            _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }
        var totalTime;
        var rv;
        var start;
        if (fnName === '_renderNewRootComponent' || fnName === 'flushBatchedUpdates') {
          ReactDefaultPerf._allMeasurements.push({
            exclusive: {},
            inclusive: {},
            render: {},
            counts: {},
            writes: {},
            displayNames: {},
            totalTime: 0,
            created: {}
          });
          start = performanceNow();
          rv = func.apply(this, args);
          ReactDefaultPerf._allMeasurements[ReactDefaultPerf._allMeasurements.length - 1].totalTime = performanceNow() - start;
          return rv;
        } else if (fnName === '_mountImageIntoNode' || moduleName === 'ReactBrowserEventEmitter' || moduleName === 'ReactDOMIDOperations' || moduleName === 'CSSPropertyOperations' || moduleName === 'DOMChildrenOperations' || moduleName === 'DOMPropertyOperations') {
          start = performanceNow();
          rv = func.apply(this, args);
          totalTime = performanceNow() - start;
          if (fnName === '_mountImageIntoNode') {
            var mountID = ReactMount.getID(args[1]);
            ReactDefaultPerf._recordWrite(mountID, fnName, totalTime, args[0]);
          } else if (fnName === 'dangerouslyProcessChildrenUpdates') {
            args[0].forEach(function(update) {
              var writeArgs = {};
              if (update.fromIndex !== null) {
                writeArgs.fromIndex = update.fromIndex;
              }
              if (update.toIndex !== null) {
                writeArgs.toIndex = update.toIndex;
              }
              if (update.textContent !== null) {
                writeArgs.textContent = update.textContent;
              }
              if (update.markupIndex !== null) {
                writeArgs.markup = args[1][update.markupIndex];
              }
              ReactDefaultPerf._recordWrite(update.parentID, update.type, totalTime, writeArgs);
            });
          } else {
            var id = args[0];
            if (typeof id === 'object') {
              id = ReactMount.getID(args[0]);
            }
            ReactDefaultPerf._recordWrite(id, fnName, totalTime, Array.prototype.slice.call(args, 1));
          }
          return rv;
        } else if (moduleName === 'ReactCompositeComponent' && (fnName === 'mountComponent' || fnName === 'updateComponent' || fnName === '_renderValidatedComponent')) {
          if (this._currentElement.type === ReactMount.TopLevelWrapper) {
            return func.apply(this, args);
          }
          var rootNodeID = fnName === 'mountComponent' ? args[0] : this._rootNodeID;
          var isRender = fnName === '_renderValidatedComponent';
          var isMount = fnName === 'mountComponent';
          var mountStack = ReactDefaultPerf._mountStack;
          var entry = ReactDefaultPerf._allMeasurements[ReactDefaultPerf._allMeasurements.length - 1];
          if (isRender) {
            addValue(entry.counts, rootNodeID, 1);
          } else if (isMount) {
            entry.created[rootNodeID] = true;
            mountStack.push(0);
          }
          start = performanceNow();
          rv = func.apply(this, args);
          totalTime = performanceNow() - start;
          if (isRender) {
            addValue(entry.render, rootNodeID, totalTime);
          } else if (isMount) {
            var subMountTime = mountStack.pop();
            mountStack[mountStack.length - 1] += totalTime;
            addValue(entry.exclusive, rootNodeID, totalTime - subMountTime);
            addValue(entry.inclusive, rootNodeID, totalTime);
          } else {
            addValue(entry.inclusive, rootNodeID, totalTime);
          }
          entry.displayNames[rootNodeID] = {
            current: this.getName(),
            owner: this._currentElement._owner ? this._currentElement._owner.getName() : '<root>'
          };
          return rv;
        } else {
          return func.apply(this, args);
        }
      };
    }
  };
  module.exports = ReactDefaultPerf;
  return module.exports;
});

$__System.registerDynamic("14", ["2f", "34", "39", "3a", "3b", "32", "3e", "40", "60", "b", "5d", "6f", "71", "74", "d", "3d", "78", "7f", "80", "8e", "8f", "93", "3"], true, function($__require, exports, module) {
  "use strict";
  var process = $__require("3");
  var define,
      global = this,
      GLOBAL = this;
  var BeforeInputEventPlugin = $__require('2f');
  var ChangeEventPlugin = $__require('34');
  var ClientReactRootIndex = $__require('39');
  var DefaultEventPluginOrder = $__require('3a');
  var EnterLeaveEventPlugin = $__require('3b');
  var ExecutionEnvironment = $__require('32');
  var HTMLDOMPropertyConfig = $__require('3e');
  var ReactBrowserComponentMixin = $__require('40');
  var ReactComponentBrowserEnvironment = $__require('60');
  var ReactDefaultBatchingStrategy = $__require('b');
  var ReactDOMComponent = $__require('5d');
  var ReactDOMTextComponent = $__require('6f');
  var ReactEventListener = $__require('71');
  var ReactInjection = $__require('74');
  var ReactInstanceHandles = $__require('d');
  var ReactMount = $__require('3d');
  var ReactReconcileTransaction = $__require('78');
  var SelectEventPlugin = $__require('7f');
  var ServerReactRootIndex = $__require('80');
  var SimpleEventPlugin = $__require('8e');
  var SVGDOMPropertyConfig = $__require('8f');
  var alreadyInjected = false;
  function inject() {
    if (alreadyInjected) {
      return;
    }
    alreadyInjected = true;
    ReactInjection.EventEmitter.injectReactEventListener(ReactEventListener);
    ReactInjection.EventPluginHub.injectEventPluginOrder(DefaultEventPluginOrder);
    ReactInjection.EventPluginHub.injectInstanceHandle(ReactInstanceHandles);
    ReactInjection.EventPluginHub.injectMount(ReactMount);
    ReactInjection.EventPluginHub.injectEventPluginsByName({
      SimpleEventPlugin: SimpleEventPlugin,
      EnterLeaveEventPlugin: EnterLeaveEventPlugin,
      ChangeEventPlugin: ChangeEventPlugin,
      SelectEventPlugin: SelectEventPlugin,
      BeforeInputEventPlugin: BeforeInputEventPlugin
    });
    ReactInjection.NativeComponent.injectGenericComponentClass(ReactDOMComponent);
    ReactInjection.NativeComponent.injectTextComponentClass(ReactDOMTextComponent);
    ReactInjection.Class.injectMixin(ReactBrowserComponentMixin);
    ReactInjection.DOMProperty.injectDOMPropertyConfig(HTMLDOMPropertyConfig);
    ReactInjection.DOMProperty.injectDOMPropertyConfig(SVGDOMPropertyConfig);
    ReactInjection.EmptyComponent.injectEmptyComponent('noscript');
    ReactInjection.Updates.injectReconcileTransaction(ReactReconcileTransaction);
    ReactInjection.Updates.injectBatchingStrategy(ReactDefaultBatchingStrategy);
    ReactInjection.RootIndex.injectCreateReactRootIndex(ExecutionEnvironment.canUseDOM ? ClientReactRootIndex.createReactRootIndex : ServerReactRootIndex.createReactRootIndex);
    ReactInjection.Component.injectEnvironment(ReactComponentBrowserEnvironment);
    if (process.env.NODE_ENV !== 'production') {
      var url = ExecutionEnvironment.canUseDOM && window.location.href || '';
      if (/[?&]react_perf\b/.test(url)) {
        var ReactDefaultPerf = $__require('93');
        ReactDefaultPerf.start();
      }
    }
  }
  module.exports = {inject: inject};
  return module.exports;
});

$__System.registerDynamic("15", ["3"], true, function($__require, exports, module) {
  "use strict";
  var process = $__require("3");
  var define,
      global = this,
      GLOBAL = this;
  module.exports = '0.14.7';
  return module.exports;
});

$__System.registerDynamic("42", ["1b", "41", "3d", "12", "1e", "3"], true, function($__require, exports, module) {
  "use strict";
  var process = $__require("3");
  var define,
      global = this,
      GLOBAL = this;
  var ReactCurrentOwner = $__require('1b');
  var ReactInstanceMap = $__require('41');
  var ReactMount = $__require('3d');
  var invariant = $__require('12');
  var warning = $__require('1e');
  function findDOMNode(componentOrElement) {
    if (process.env.NODE_ENV !== 'production') {
      var owner = ReactCurrentOwner.current;
      if (owner !== null) {
        process.env.NODE_ENV !== 'production' ? warning(owner._warnedAboutRefsInRender, '%s is accessing getDOMNode or findDOMNode inside its render(). ' + 'render() should be a pure function of props and state. It should ' + 'never access something that requires stale data from the previous ' + 'render, such as refs. Move this logic to componentDidMount and ' + 'componentDidUpdate instead.', owner.getName() || 'A component') : undefined;
        owner._warnedAboutRefsInRender = true;
      }
    }
    if (componentOrElement == null) {
      return null;
    }
    if (componentOrElement.nodeType === 1) {
      return componentOrElement;
    }
    if (ReactInstanceMap.has(componentOrElement)) {
      return ReactMount.getNodeFromInstance(componentOrElement);
    }
    !(componentOrElement.render == null || typeof componentOrElement.render !== 'function') ? process.env.NODE_ENV !== 'production' ? invariant(false, 'findDOMNode was called on an unmounted component.') : invariant(false) : undefined;
    !false ? process.env.NODE_ENV !== 'production' ? invariant(false, 'Element appears to be neither ReactComponent nor DOMNode (keys: %s)', Object.keys(componentOrElement)) : invariant(false) : undefined;
  }
  module.exports = findDOMNode;
  return module.exports;
});

$__System.registerDynamic("3f", ["12", "3"], true, function($__require, exports, module) {
  "use strict";
  var process = $__require("3");
  var define,
      global = this,
      GLOBAL = this;
  var invariant = $__require('12');
  function checkMask(value, bitmask) {
    return (value & bitmask) === bitmask;
  }
  var DOMPropertyInjection = {
    MUST_USE_ATTRIBUTE: 0x1,
    MUST_USE_PROPERTY: 0x2,
    HAS_SIDE_EFFECTS: 0x4,
    HAS_BOOLEAN_VALUE: 0x8,
    HAS_NUMERIC_VALUE: 0x10,
    HAS_POSITIVE_NUMERIC_VALUE: 0x20 | 0x10,
    HAS_OVERLOADED_BOOLEAN_VALUE: 0x40,
    injectDOMPropertyConfig: function(domPropertyConfig) {
      var Injection = DOMPropertyInjection;
      var Properties = domPropertyConfig.Properties || {};
      var DOMAttributeNamespaces = domPropertyConfig.DOMAttributeNamespaces || {};
      var DOMAttributeNames = domPropertyConfig.DOMAttributeNames || {};
      var DOMPropertyNames = domPropertyConfig.DOMPropertyNames || {};
      var DOMMutationMethods = domPropertyConfig.DOMMutationMethods || {};
      if (domPropertyConfig.isCustomAttribute) {
        DOMProperty._isCustomAttributeFunctions.push(domPropertyConfig.isCustomAttribute);
      }
      for (var propName in Properties) {
        !!DOMProperty.properties.hasOwnProperty(propName) ? process.env.NODE_ENV !== 'production' ? invariant(false, 'injectDOMPropertyConfig(...): You\'re trying to inject DOM property ' + '\'%s\' which has already been injected. You may be accidentally ' + 'injecting the same DOM property config twice, or you may be ' + 'injecting two configs that have conflicting property names.', propName) : invariant(false) : undefined;
        var lowerCased = propName.toLowerCase();
        var propConfig = Properties[propName];
        var propertyInfo = {
          attributeName: lowerCased,
          attributeNamespace: null,
          propertyName: propName,
          mutationMethod: null,
          mustUseAttribute: checkMask(propConfig, Injection.MUST_USE_ATTRIBUTE),
          mustUseProperty: checkMask(propConfig, Injection.MUST_USE_PROPERTY),
          hasSideEffects: checkMask(propConfig, Injection.HAS_SIDE_EFFECTS),
          hasBooleanValue: checkMask(propConfig, Injection.HAS_BOOLEAN_VALUE),
          hasNumericValue: checkMask(propConfig, Injection.HAS_NUMERIC_VALUE),
          hasPositiveNumericValue: checkMask(propConfig, Injection.HAS_POSITIVE_NUMERIC_VALUE),
          hasOverloadedBooleanValue: checkMask(propConfig, Injection.HAS_OVERLOADED_BOOLEAN_VALUE)
        };
        !(!propertyInfo.mustUseAttribute || !propertyInfo.mustUseProperty) ? process.env.NODE_ENV !== 'production' ? invariant(false, 'DOMProperty: Cannot require using both attribute and property: %s', propName) : invariant(false) : undefined;
        !(propertyInfo.mustUseProperty || !propertyInfo.hasSideEffects) ? process.env.NODE_ENV !== 'production' ? invariant(false, 'DOMProperty: Properties that have side effects must use property: %s', propName) : invariant(false) : undefined;
        !(propertyInfo.hasBooleanValue + propertyInfo.hasNumericValue + propertyInfo.hasOverloadedBooleanValue <= 1) ? process.env.NODE_ENV !== 'production' ? invariant(false, 'DOMProperty: Value can be one of boolean, overloaded boolean, or ' + 'numeric value, but not a combination: %s', propName) : invariant(false) : undefined;
        if (process.env.NODE_ENV !== 'production') {
          DOMProperty.getPossibleStandardName[lowerCased] = propName;
        }
        if (DOMAttributeNames.hasOwnProperty(propName)) {
          var attributeName = DOMAttributeNames[propName];
          propertyInfo.attributeName = attributeName;
          if (process.env.NODE_ENV !== 'production') {
            DOMProperty.getPossibleStandardName[attributeName] = propName;
          }
        }
        if (DOMAttributeNamespaces.hasOwnProperty(propName)) {
          propertyInfo.attributeNamespace = DOMAttributeNamespaces[propName];
        }
        if (DOMPropertyNames.hasOwnProperty(propName)) {
          propertyInfo.propertyName = DOMPropertyNames[propName];
        }
        if (DOMMutationMethods.hasOwnProperty(propName)) {
          propertyInfo.mutationMethod = DOMMutationMethods[propName];
        }
        DOMProperty.properties[propName] = propertyInfo;
      }
    }
  };
  var defaultValueCache = {};
  var DOMProperty = {
    ID_ATTRIBUTE_NAME: 'data-reactid',
    properties: {},
    getPossibleStandardName: process.env.NODE_ENV !== 'production' ? {} : null,
    _isCustomAttributeFunctions: [],
    isCustomAttribute: function(attributeName) {
      for (var i = 0; i < DOMProperty._isCustomAttributeFunctions.length; i++) {
        var isCustomAttributeFn = DOMProperty._isCustomAttributeFunctions[i];
        if (isCustomAttributeFn(attributeName)) {
          return true;
        }
      }
      return false;
    },
    getDefaultValueForProperty: function(nodeName, prop) {
      var nodeDefaults = defaultValueCache[nodeName];
      var testElement;
      if (!nodeDefaults) {
        defaultValueCache[nodeName] = nodeDefaults = {};
      }
      if (!(prop in nodeDefaults)) {
        testElement = document.createElement(nodeName);
        nodeDefaults[prop] = testElement[prop];
      }
      return nodeDefaults[prop];
    },
    injection: DOMPropertyInjection
  };
  module.exports = DOMProperty;
  return module.exports;
});

$__System.registerDynamic("94", ["12", "3"], true, function($__require, exports, module) {
  "use strict";
  var process = $__require("3");
  var define,
      global = this,
      GLOBAL = this;
  var invariant = $__require('12');
  var EventPluginOrder = null;
  var namesToPlugins = {};
  function recomputePluginOrdering() {
    if (!EventPluginOrder) {
      return;
    }
    for (var pluginName in namesToPlugins) {
      var PluginModule = namesToPlugins[pluginName];
      var pluginIndex = EventPluginOrder.indexOf(pluginName);
      !(pluginIndex > -1) ? process.env.NODE_ENV !== 'production' ? invariant(false, 'EventPluginRegistry: Cannot inject event plugins that do not exist in ' + 'the plugin ordering, `%s`.', pluginName) : invariant(false) : undefined;
      if (EventPluginRegistry.plugins[pluginIndex]) {
        continue;
      }
      !PluginModule.extractEvents ? process.env.NODE_ENV !== 'production' ? invariant(false, 'EventPluginRegistry: Event plugins must implement an `extractEvents` ' + 'method, but `%s` does not.', pluginName) : invariant(false) : undefined;
      EventPluginRegistry.plugins[pluginIndex] = PluginModule;
      var publishedEvents = PluginModule.eventTypes;
      for (var eventName in publishedEvents) {
        !publishEventForPlugin(publishedEvents[eventName], PluginModule, eventName) ? process.env.NODE_ENV !== 'production' ? invariant(false, 'EventPluginRegistry: Failed to publish event `%s` for plugin `%s`.', eventName, pluginName) : invariant(false) : undefined;
      }
    }
  }
  function publishEventForPlugin(dispatchConfig, PluginModule, eventName) {
    !!EventPluginRegistry.eventNameDispatchConfigs.hasOwnProperty(eventName) ? process.env.NODE_ENV !== 'production' ? invariant(false, 'EventPluginHub: More than one plugin attempted to publish the same ' + 'event name, `%s`.', eventName) : invariant(false) : undefined;
    EventPluginRegistry.eventNameDispatchConfigs[eventName] = dispatchConfig;
    var phasedRegistrationNames = dispatchConfig.phasedRegistrationNames;
    if (phasedRegistrationNames) {
      for (var phaseName in phasedRegistrationNames) {
        if (phasedRegistrationNames.hasOwnProperty(phaseName)) {
          var phasedRegistrationName = phasedRegistrationNames[phaseName];
          publishRegistrationName(phasedRegistrationName, PluginModule, eventName);
        }
      }
      return true;
    } else if (dispatchConfig.registrationName) {
      publishRegistrationName(dispatchConfig.registrationName, PluginModule, eventName);
      return true;
    }
    return false;
  }
  function publishRegistrationName(registrationName, PluginModule, eventName) {
    !!EventPluginRegistry.registrationNameModules[registrationName] ? process.env.NODE_ENV !== 'production' ? invariant(false, 'EventPluginHub: More than one plugin attempted to publish the same ' + 'registration name, `%s`.', registrationName) : invariant(false) : undefined;
    EventPluginRegistry.registrationNameModules[registrationName] = PluginModule;
    EventPluginRegistry.registrationNameDependencies[registrationName] = PluginModule.eventTypes[eventName].dependencies;
  }
  var EventPluginRegistry = {
    plugins: [],
    eventNameDispatchConfigs: {},
    registrationNameModules: {},
    registrationNameDependencies: {},
    injectEventPluginOrder: function(InjectedEventPluginOrder) {
      !!EventPluginOrder ? process.env.NODE_ENV !== 'production' ? invariant(false, 'EventPluginRegistry: Cannot inject event plugin ordering more than ' + 'once. You are likely trying to load more than one copy of React.') : invariant(false) : undefined;
      EventPluginOrder = Array.prototype.slice.call(InjectedEventPluginOrder);
      recomputePluginOrdering();
    },
    injectEventPluginsByName: function(injectedNamesToPlugins) {
      var isOrderingDirty = false;
      for (var pluginName in injectedNamesToPlugins) {
        if (!injectedNamesToPlugins.hasOwnProperty(pluginName)) {
          continue;
        }
        var PluginModule = injectedNamesToPlugins[pluginName];
        if (!namesToPlugins.hasOwnProperty(pluginName) || namesToPlugins[pluginName] !== PluginModule) {
          !!namesToPlugins[pluginName] ? process.env.NODE_ENV !== 'production' ? invariant(false, 'EventPluginRegistry: Cannot inject two different event plugins ' + 'using the same name, `%s`.', pluginName) : invariant(false) : undefined;
          namesToPlugins[pluginName] = PluginModule;
          isOrderingDirty = true;
        }
      }
      if (isOrderingDirty) {
        recomputePluginOrdering();
      }
    },
    getPluginModuleForEvent: function(event) {
      var dispatchConfig = event.dispatchConfig;
      if (dispatchConfig.registrationName) {
        return EventPluginRegistry.registrationNameModules[dispatchConfig.registrationName] || null;
      }
      for (var phase in dispatchConfig.phasedRegistrationNames) {
        if (!dispatchConfig.phasedRegistrationNames.hasOwnProperty(phase)) {
          continue;
        }
        var PluginModule = EventPluginRegistry.registrationNameModules[dispatchConfig.phasedRegistrationNames[phase]];
        if (PluginModule) {
          return PluginModule;
        }
      }
      return null;
    },
    _resetEventPlugins: function() {
      EventPluginOrder = null;
      for (var pluginName in namesToPlugins) {
        if (namesToPlugins.hasOwnProperty(pluginName)) {
          delete namesToPlugins[pluginName];
        }
      }
      EventPluginRegistry.plugins.length = 0;
      var eventNameDispatchConfigs = EventPluginRegistry.eventNameDispatchConfigs;
      for (var eventName in eventNameDispatchConfigs) {
        if (eventNameDispatchConfigs.hasOwnProperty(eventName)) {
          delete eventNameDispatchConfigs[eventName];
        }
      }
      var registrationNameModules = EventPluginRegistry.registrationNameModules;
      for (var registrationName in registrationNameModules) {
        if (registrationNameModules.hasOwnProperty(registrationName)) {
          delete registrationNameModules[registrationName];
        }
      }
    }
  };
  module.exports = EventPluginRegistry;
  return module.exports;
});

$__System.registerDynamic("30", ["6c", "3"], true, function($__require, exports, module) {
  "use strict";
  var process = $__require("3");
  var define,
      global = this,
      GLOBAL = this;
  var keyMirror = $__require('6c');
  var PropagationPhases = keyMirror({
    bubbled: null,
    captured: null
  });
  var topLevelTypes = keyMirror({
    topAbort: null,
    topBlur: null,
    topCanPlay: null,
    topCanPlayThrough: null,
    topChange: null,
    topClick: null,
    topCompositionEnd: null,
    topCompositionStart: null,
    topCompositionUpdate: null,
    topContextMenu: null,
    topCopy: null,
    topCut: null,
    topDoubleClick: null,
    topDrag: null,
    topDragEnd: null,
    topDragEnter: null,
    topDragExit: null,
    topDragLeave: null,
    topDragOver: null,
    topDragStart: null,
    topDrop: null,
    topDurationChange: null,
    topEmptied: null,
    topEncrypted: null,
    topEnded: null,
    topError: null,
    topFocus: null,
    topInput: null,
    topKeyDown: null,
    topKeyPress: null,
    topKeyUp: null,
    topLoad: null,
    topLoadedData: null,
    topLoadedMetadata: null,
    topLoadStart: null,
    topMouseDown: null,
    topMouseMove: null,
    topMouseOut: null,
    topMouseOver: null,
    topMouseUp: null,
    topPaste: null,
    topPause: null,
    topPlay: null,
    topPlaying: null,
    topProgress: null,
    topRateChange: null,
    topReset: null,
    topScroll: null,
    topSeeked: null,
    topSeeking: null,
    topSelectionChange: null,
    topStalled: null,
    topSubmit: null,
    topSuspend: null,
    topTextInput: null,
    topTimeUpdate: null,
    topTouchCancel: null,
    topTouchEnd: null,
    topTouchMove: null,
    topTouchStart: null,
    topVolumeChange: null,
    topWaiting: null,
    topWheel: null
  });
  var EventConstants = {
    topLevelTypes: topLevelTypes,
    PropagationPhases: PropagationPhases
  };
  module.exports = EventConstants;
  return module.exports;
});

$__System.registerDynamic("95", ["30", "96", "12", "1e", "3"], true, function($__require, exports, module) {
  "use strict";
  var process = $__require("3");
  var define,
      global = this,
      GLOBAL = this;
  var EventConstants = $__require('30');
  var ReactErrorUtils = $__require('96');
  var invariant = $__require('12');
  var warning = $__require('1e');
  var injection = {
    Mount: null,
    injectMount: function(InjectedMount) {
      injection.Mount = InjectedMount;
      if (process.env.NODE_ENV !== 'production') {
        process.env.NODE_ENV !== 'production' ? warning(InjectedMount && InjectedMount.getNode && InjectedMount.getID, 'EventPluginUtils.injection.injectMount(...): Injected Mount ' + 'module is missing getNode or getID.') : undefined;
      }
    }
  };
  var topLevelTypes = EventConstants.topLevelTypes;
  function isEndish(topLevelType) {
    return topLevelType === topLevelTypes.topMouseUp || topLevelType === topLevelTypes.topTouchEnd || topLevelType === topLevelTypes.topTouchCancel;
  }
  function isMoveish(topLevelType) {
    return topLevelType === topLevelTypes.topMouseMove || topLevelType === topLevelTypes.topTouchMove;
  }
  function isStartish(topLevelType) {
    return topLevelType === topLevelTypes.topMouseDown || topLevelType === topLevelTypes.topTouchStart;
  }
  var validateEventDispatches;
  if (process.env.NODE_ENV !== 'production') {
    validateEventDispatches = function(event) {
      var dispatchListeners = event._dispatchListeners;
      var dispatchIDs = event._dispatchIDs;
      var listenersIsArr = Array.isArray(dispatchListeners);
      var idsIsArr = Array.isArray(dispatchIDs);
      var IDsLen = idsIsArr ? dispatchIDs.length : dispatchIDs ? 1 : 0;
      var listenersLen = listenersIsArr ? dispatchListeners.length : dispatchListeners ? 1 : 0;
      process.env.NODE_ENV !== 'production' ? warning(idsIsArr === listenersIsArr && IDsLen === listenersLen, 'EventPluginUtils: Invalid `event`.') : undefined;
    };
  }
  function executeDispatch(event, simulated, listener, domID) {
    var type = event.type || 'unknown-event';
    event.currentTarget = injection.Mount.getNode(domID);
    if (simulated) {
      ReactErrorUtils.invokeGuardedCallbackWithCatch(type, listener, event, domID);
    } else {
      ReactErrorUtils.invokeGuardedCallback(type, listener, event, domID);
    }
    event.currentTarget = null;
  }
  function executeDispatchesInOrder(event, simulated) {
    var dispatchListeners = event._dispatchListeners;
    var dispatchIDs = event._dispatchIDs;
    if (process.env.NODE_ENV !== 'production') {
      validateEventDispatches(event);
    }
    if (Array.isArray(dispatchListeners)) {
      for (var i = 0; i < dispatchListeners.length; i++) {
        if (event.isPropagationStopped()) {
          break;
        }
        executeDispatch(event, simulated, dispatchListeners[i], dispatchIDs[i]);
      }
    } else if (dispatchListeners) {
      executeDispatch(event, simulated, dispatchListeners, dispatchIDs);
    }
    event._dispatchListeners = null;
    event._dispatchIDs = null;
  }
  function executeDispatchesInOrderStopAtTrueImpl(event) {
    var dispatchListeners = event._dispatchListeners;
    var dispatchIDs = event._dispatchIDs;
    if (process.env.NODE_ENV !== 'production') {
      validateEventDispatches(event);
    }
    if (Array.isArray(dispatchListeners)) {
      for (var i = 0; i < dispatchListeners.length; i++) {
        if (event.isPropagationStopped()) {
          break;
        }
        if (dispatchListeners[i](event, dispatchIDs[i])) {
          return dispatchIDs[i];
        }
      }
    } else if (dispatchListeners) {
      if (dispatchListeners(event, dispatchIDs)) {
        return dispatchIDs;
      }
    }
    return null;
  }
  function executeDispatchesInOrderStopAtTrue(event) {
    var ret = executeDispatchesInOrderStopAtTrueImpl(event);
    event._dispatchIDs = null;
    event._dispatchListeners = null;
    return ret;
  }
  function executeDirectDispatch(event) {
    if (process.env.NODE_ENV !== 'production') {
      validateEventDispatches(event);
    }
    var dispatchListener = event._dispatchListeners;
    var dispatchID = event._dispatchIDs;
    !!Array.isArray(dispatchListener) ? process.env.NODE_ENV !== 'production' ? invariant(false, 'executeDirectDispatch(...): Invalid `event`.') : invariant(false) : undefined;
    var res = dispatchListener ? dispatchListener(event, dispatchID) : null;
    event._dispatchListeners = null;
    event._dispatchIDs = null;
    return res;
  }
  function hasDispatches(event) {
    return !!event._dispatchListeners;
  }
  var EventPluginUtils = {
    isEndish: isEndish,
    isMoveish: isMoveish,
    isStartish: isStartish,
    executeDirectDispatch: executeDirectDispatch,
    executeDispatchesInOrder: executeDispatchesInOrder,
    executeDispatchesInOrderStopAtTrue: executeDispatchesInOrderStopAtTrue,
    hasDispatches: hasDispatches,
    getNode: function(id) {
      return injection.Mount.getNode(id);
    },
    getID: function(node) {
      return injection.Mount.getID(node);
    },
    injection: injection
  };
  module.exports = EventPluginUtils;
  return module.exports;
});

$__System.registerDynamic("96", ["3"], true, function($__require, exports, module) {
  "use strict";
  var process = $__require("3");
  var define,
      global = this,
      GLOBAL = this;
  var caughtError = null;
  function invokeGuardedCallback(name, func, a, b) {
    try {
      return func(a, b);
    } catch (x) {
      if (caughtError === null) {
        caughtError = x;
      }
      return undefined;
    }
  }
  var ReactErrorUtils = {
    invokeGuardedCallback: invokeGuardedCallback,
    invokeGuardedCallbackWithCatch: invokeGuardedCallback,
    rethrowCaughtError: function() {
      if (caughtError) {
        var error = caughtError;
        caughtError = null;
        throw error;
      }
    }
  };
  if (process.env.NODE_ENV !== 'production') {
    if (typeof window !== 'undefined' && typeof window.dispatchEvent === 'function' && typeof document !== 'undefined' && typeof document.createEvent === 'function') {
      var fakeNode = document.createElement('react');
      ReactErrorUtils.invokeGuardedCallback = function(name, func, a, b) {
        var boundFunc = func.bind(null, a, b);
        var evtType = 'react-' + name;
        fakeNode.addEventListener(evtType, boundFunc, false);
        var evt = document.createEvent('Event');
        evt.initEvent(evtType, false, false);
        fakeNode.dispatchEvent(evt);
        fakeNode.removeEventListener(evtType, boundFunc, false);
      };
    }
  }
  module.exports = ReactErrorUtils;
  return module.exports;
});

$__System.registerDynamic("81", ["12", "3"], true, function($__require, exports, module) {
  "use strict";
  var process = $__require("3");
  var define,
      global = this,
      GLOBAL = this;
  var invariant = $__require('12');
  function accumulateInto(current, next) {
    !(next != null) ? process.env.NODE_ENV !== 'production' ? invariant(false, 'accumulateInto(...): Accumulated items must not be null or undefined.') : invariant(false) : undefined;
    if (current == null) {
      return next;
    }
    var currentIsArray = Array.isArray(current);
    var nextIsArray = Array.isArray(next);
    if (currentIsArray && nextIsArray) {
      current.push.apply(current, next);
      return current;
    }
    if (currentIsArray) {
      current.push(next);
      return current;
    }
    if (nextIsArray) {
      return [current].concat(next);
    }
    return [current, next];
  }
  module.exports = accumulateInto;
  return module.exports;
});

$__System.registerDynamic("82", ["3"], true, function($__require, exports, module) {
  "use strict";
  var process = $__require("3");
  var define,
      global = this,
      GLOBAL = this;
  var forEachAccumulated = function(arr, cb, scope) {
    if (Array.isArray(arr)) {
      arr.forEach(cb, scope);
    } else if (arr) {
      cb.call(scope, arr);
    }
  };
  module.exports = forEachAccumulated;
  return module.exports;
});

$__System.registerDynamic("35", ["94", "95", "96", "81", "82", "12", "1e", "3"], true, function($__require, exports, module) {
  "use strict";
  var process = $__require("3");
  var define,
      global = this,
      GLOBAL = this;
  var EventPluginRegistry = $__require('94');
  var EventPluginUtils = $__require('95');
  var ReactErrorUtils = $__require('96');
  var accumulateInto = $__require('81');
  var forEachAccumulated = $__require('82');
  var invariant = $__require('12');
  var warning = $__require('1e');
  var listenerBank = {};
  var eventQueue = null;
  var executeDispatchesAndRelease = function(event, simulated) {
    if (event) {
      EventPluginUtils.executeDispatchesInOrder(event, simulated);
      if (!event.isPersistent()) {
        event.constructor.release(event);
      }
    }
  };
  var executeDispatchesAndReleaseSimulated = function(e) {
    return executeDispatchesAndRelease(e, true);
  };
  var executeDispatchesAndReleaseTopLevel = function(e) {
    return executeDispatchesAndRelease(e, false);
  };
  var InstanceHandle = null;
  function validateInstanceHandle() {
    var valid = InstanceHandle && InstanceHandle.traverseTwoPhase && InstanceHandle.traverseEnterLeave;
    process.env.NODE_ENV !== 'production' ? warning(valid, 'InstanceHandle not injected before use!') : undefined;
  }
  var EventPluginHub = {
    injection: {
      injectMount: EventPluginUtils.injection.injectMount,
      injectInstanceHandle: function(InjectedInstanceHandle) {
        InstanceHandle = InjectedInstanceHandle;
        if (process.env.NODE_ENV !== 'production') {
          validateInstanceHandle();
        }
      },
      getInstanceHandle: function() {
        if (process.env.NODE_ENV !== 'production') {
          validateInstanceHandle();
        }
        return InstanceHandle;
      },
      injectEventPluginOrder: EventPluginRegistry.injectEventPluginOrder,
      injectEventPluginsByName: EventPluginRegistry.injectEventPluginsByName
    },
    eventNameDispatchConfigs: EventPluginRegistry.eventNameDispatchConfigs,
    registrationNameModules: EventPluginRegistry.registrationNameModules,
    putListener: function(id, registrationName, listener) {
      !(typeof listener === 'function') ? process.env.NODE_ENV !== 'production' ? invariant(false, 'Expected %s listener to be a function, instead got type %s', registrationName, typeof listener) : invariant(false) : undefined;
      var bankForRegistrationName = listenerBank[registrationName] || (listenerBank[registrationName] = {});
      bankForRegistrationName[id] = listener;
      var PluginModule = EventPluginRegistry.registrationNameModules[registrationName];
      if (PluginModule && PluginModule.didPutListener) {
        PluginModule.didPutListener(id, registrationName, listener);
      }
    },
    getListener: function(id, registrationName) {
      var bankForRegistrationName = listenerBank[registrationName];
      return bankForRegistrationName && bankForRegistrationName[id];
    },
    deleteListener: function(id, registrationName) {
      var PluginModule = EventPluginRegistry.registrationNameModules[registrationName];
      if (PluginModule && PluginModule.willDeleteListener) {
        PluginModule.willDeleteListener(id, registrationName);
      }
      var bankForRegistrationName = listenerBank[registrationName];
      if (bankForRegistrationName) {
        delete bankForRegistrationName[id];
      }
    },
    deleteAllListeners: function(id) {
      for (var registrationName in listenerBank) {
        if (!listenerBank[registrationName][id]) {
          continue;
        }
        var PluginModule = EventPluginRegistry.registrationNameModules[registrationName];
        if (PluginModule && PluginModule.willDeleteListener) {
          PluginModule.willDeleteListener(id, registrationName);
        }
        delete listenerBank[registrationName][id];
      }
    },
    extractEvents: function(topLevelType, topLevelTarget, topLevelTargetID, nativeEvent, nativeEventTarget) {
      var events;
      var plugins = EventPluginRegistry.plugins;
      for (var i = 0; i < plugins.length; i++) {
        var possiblePlugin = plugins[i];
        if (possiblePlugin) {
          var extractedEvents = possiblePlugin.extractEvents(topLevelType, topLevelTarget, topLevelTargetID, nativeEvent, nativeEventTarget);
          if (extractedEvents) {
            events = accumulateInto(events, extractedEvents);
          }
        }
      }
      return events;
    },
    enqueueEvents: function(events) {
      if (events) {
        eventQueue = accumulateInto(eventQueue, events);
      }
    },
    processEventQueue: function(simulated) {
      var processingEventQueue = eventQueue;
      eventQueue = null;
      if (simulated) {
        forEachAccumulated(processingEventQueue, executeDispatchesAndReleaseSimulated);
      } else {
        forEachAccumulated(processingEventQueue, executeDispatchesAndReleaseTopLevel);
      }
      !!eventQueue ? process.env.NODE_ENV !== 'production' ? invariant(false, 'processEventQueue(): Additional events were enqueued while processing ' + 'an event queue. Support for this has not yet been implemented.') : invariant(false) : undefined;
      ReactErrorUtils.rethrowCaughtError();
    },
    __purge: function() {
      listenerBank = {};
    },
    __getListenerBank: function() {
      return listenerBank;
    }
  };
  module.exports = EventPluginHub;
  return module.exports;
});

$__System.registerDynamic("97", ["35", "3"], true, function($__require, exports, module) {
  "use strict";
  var process = $__require("3");
  var define,
      global = this,
      GLOBAL = this;
  var EventPluginHub = $__require('35');
  function runEventQueueInBatch(events) {
    EventPluginHub.enqueueEvents(events);
    EventPluginHub.processEventQueue(false);
  }
  var ReactEventEmitterMixin = {handleTopLevel: function(topLevelType, topLevelTarget, topLevelTargetID, nativeEvent, nativeEventTarget) {
      var events = EventPluginHub.extractEvents(topLevelType, topLevelTarget, topLevelTargetID, nativeEvent, nativeEventTarget);
      runEventQueueInBatch(events);
    }};
  module.exports = ReactEventEmitterMixin;
  return module.exports;
});

$__System.registerDynamic("8c", ["3"], true, function($__require, exports, module) {
  "use strict";
  var process = $__require("3");
  var define,
      global = this,
      GLOBAL = this;
  var ViewportMetrics = {
    currentScrollLeft: 0,
    currentScrollTop: 0,
    refreshScrollValues: function(scrollPosition) {
      ViewportMetrics.currentScrollLeft = scrollPosition.x;
      ViewportMetrics.currentScrollTop = scrollPosition.y;
    }
  };
  module.exports = ViewportMetrics;
  return module.exports;
});

$__System.registerDynamic("37", ["32", "3"], true, function($__require, exports, module) {
  "use strict";
  var process = $__require("3");
  var define,
      global = this,
      GLOBAL = this;
  var ExecutionEnvironment = $__require('32');
  var useHasFeature;
  if (ExecutionEnvironment.canUseDOM) {
    useHasFeature = document.implementation && document.implementation.hasFeature && document.implementation.hasFeature('', '') !== true;
  }
  function isEventSupported(eventNameSuffix, capture) {
    if (!ExecutionEnvironment.canUseDOM || capture && !('addEventListener' in document)) {
      return false;
    }
    var eventName = 'on' + eventNameSuffix;
    var isSupported = (eventName in document);
    if (!isSupported) {
      var element = document.createElement('div');
      element.setAttribute(eventName, 'return;');
      isSupported = typeof element[eventName] === 'function';
    }
    if (!isSupported && useHasFeature && eventNameSuffix === 'wheel') {
      isSupported = document.implementation.hasFeature('Events.wheel', '3.0');
    }
    return isSupported;
  }
  module.exports = isEventSupported;
  return module.exports;
});

$__System.registerDynamic("5f", ["30", "35", "94", "97", "4d", "8c", "8", "37", "3"], true, function($__require, exports, module) {
  "use strict";
  var process = $__require("3");
  var define,
      global = this,
      GLOBAL = this;
  var EventConstants = $__require('30');
  var EventPluginHub = $__require('35');
  var EventPluginRegistry = $__require('94');
  var ReactEventEmitterMixin = $__require('97');
  var ReactPerf = $__require('4d');
  var ViewportMetrics = $__require('8c');
  var assign = $__require('8');
  var isEventSupported = $__require('37');
  var alreadyListeningTo = {};
  var isMonitoringScrollValue = false;
  var reactTopListenersCounter = 0;
  var topEventMapping = {
    topAbort: 'abort',
    topBlur: 'blur',
    topCanPlay: 'canplay',
    topCanPlayThrough: 'canplaythrough',
    topChange: 'change',
    topClick: 'click',
    topCompositionEnd: 'compositionend',
    topCompositionStart: 'compositionstart',
    topCompositionUpdate: 'compositionupdate',
    topContextMenu: 'contextmenu',
    topCopy: 'copy',
    topCut: 'cut',
    topDoubleClick: 'dblclick',
    topDrag: 'drag',
    topDragEnd: 'dragend',
    topDragEnter: 'dragenter',
    topDragExit: 'dragexit',
    topDragLeave: 'dragleave',
    topDragOver: 'dragover',
    topDragStart: 'dragstart',
    topDrop: 'drop',
    topDurationChange: 'durationchange',
    topEmptied: 'emptied',
    topEncrypted: 'encrypted',
    topEnded: 'ended',
    topError: 'error',
    topFocus: 'focus',
    topInput: 'input',
    topKeyDown: 'keydown',
    topKeyPress: 'keypress',
    topKeyUp: 'keyup',
    topLoadedData: 'loadeddata',
    topLoadedMetadata: 'loadedmetadata',
    topLoadStart: 'loadstart',
    topMouseDown: 'mousedown',
    topMouseMove: 'mousemove',
    topMouseOut: 'mouseout',
    topMouseOver: 'mouseover',
    topMouseUp: 'mouseup',
    topPaste: 'paste',
    topPause: 'pause',
    topPlay: 'play',
    topPlaying: 'playing',
    topProgress: 'progress',
    topRateChange: 'ratechange',
    topScroll: 'scroll',
    topSeeked: 'seeked',
    topSeeking: 'seeking',
    topSelectionChange: 'selectionchange',
    topStalled: 'stalled',
    topSuspend: 'suspend',
    topTextInput: 'textInput',
    topTimeUpdate: 'timeupdate',
    topTouchCancel: 'touchcancel',
    topTouchEnd: 'touchend',
    topTouchMove: 'touchmove',
    topTouchStart: 'touchstart',
    topVolumeChange: 'volumechange',
    topWaiting: 'waiting',
    topWheel: 'wheel'
  };
  var topListenersIDKey = '_reactListenersID' + String(Math.random()).slice(2);
  function getListeningForDocument(mountAt) {
    if (!Object.prototype.hasOwnProperty.call(mountAt, topListenersIDKey)) {
      mountAt[topListenersIDKey] = reactTopListenersCounter++;
      alreadyListeningTo[mountAt[topListenersIDKey]] = {};
    }
    return alreadyListeningTo[mountAt[topListenersIDKey]];
  }
  var ReactBrowserEventEmitter = assign({}, ReactEventEmitterMixin, {
    ReactEventListener: null,
    injection: {injectReactEventListener: function(ReactEventListener) {
        ReactEventListener.setHandleTopLevel(ReactBrowserEventEmitter.handleTopLevel);
        ReactBrowserEventEmitter.ReactEventListener = ReactEventListener;
      }},
    setEnabled: function(enabled) {
      if (ReactBrowserEventEmitter.ReactEventListener) {
        ReactBrowserEventEmitter.ReactEventListener.setEnabled(enabled);
      }
    },
    isEnabled: function() {
      return !!(ReactBrowserEventEmitter.ReactEventListener && ReactBrowserEventEmitter.ReactEventListener.isEnabled());
    },
    listenTo: function(registrationName, contentDocumentHandle) {
      var mountAt = contentDocumentHandle;
      var isListening = getListeningForDocument(mountAt);
      var dependencies = EventPluginRegistry.registrationNameDependencies[registrationName];
      var topLevelTypes = EventConstants.topLevelTypes;
      for (var i = 0; i < dependencies.length; i++) {
        var dependency = dependencies[i];
        if (!(isListening.hasOwnProperty(dependency) && isListening[dependency])) {
          if (dependency === topLevelTypes.topWheel) {
            if (isEventSupported('wheel')) {
              ReactBrowserEventEmitter.ReactEventListener.trapBubbledEvent(topLevelTypes.topWheel, 'wheel', mountAt);
            } else if (isEventSupported('mousewheel')) {
              ReactBrowserEventEmitter.ReactEventListener.trapBubbledEvent(topLevelTypes.topWheel, 'mousewheel', mountAt);
            } else {
              ReactBrowserEventEmitter.ReactEventListener.trapBubbledEvent(topLevelTypes.topWheel, 'DOMMouseScroll', mountAt);
            }
          } else if (dependency === topLevelTypes.topScroll) {
            if (isEventSupported('scroll', true)) {
              ReactBrowserEventEmitter.ReactEventListener.trapCapturedEvent(topLevelTypes.topScroll, 'scroll', mountAt);
            } else {
              ReactBrowserEventEmitter.ReactEventListener.trapBubbledEvent(topLevelTypes.topScroll, 'scroll', ReactBrowserEventEmitter.ReactEventListener.WINDOW_HANDLE);
            }
          } else if (dependency === topLevelTypes.topFocus || dependency === topLevelTypes.topBlur) {
            if (isEventSupported('focus', true)) {
              ReactBrowserEventEmitter.ReactEventListener.trapCapturedEvent(topLevelTypes.topFocus, 'focus', mountAt);
              ReactBrowserEventEmitter.ReactEventListener.trapCapturedEvent(topLevelTypes.topBlur, 'blur', mountAt);
            } else if (isEventSupported('focusin')) {
              ReactBrowserEventEmitter.ReactEventListener.trapBubbledEvent(topLevelTypes.topFocus, 'focusin', mountAt);
              ReactBrowserEventEmitter.ReactEventListener.trapBubbledEvent(topLevelTypes.topBlur, 'focusout', mountAt);
            }
            isListening[topLevelTypes.topBlur] = true;
            isListening[topLevelTypes.topFocus] = true;
          } else if (topEventMapping.hasOwnProperty(dependency)) {
            ReactBrowserEventEmitter.ReactEventListener.trapBubbledEvent(dependency, topEventMapping[dependency], mountAt);
          }
          isListening[dependency] = true;
        }
      }
    },
    trapBubbledEvent: function(topLevelType, handlerBaseName, handle) {
      return ReactBrowserEventEmitter.ReactEventListener.trapBubbledEvent(topLevelType, handlerBaseName, handle);
    },
    trapCapturedEvent: function(topLevelType, handlerBaseName, handle) {
      return ReactBrowserEventEmitter.ReactEventListener.trapCapturedEvent(topLevelType, handlerBaseName, handle);
    },
    ensureScrollValueMonitoring: function() {
      if (!isMonitoringScrollValue) {
        var refresh = ViewportMetrics.refreshScrollValues;
        ReactBrowserEventEmitter.ReactEventListener.monitorScrollValue(refresh);
        isMonitoringScrollValue = true;
      }
    },
    eventNameDispatchConfigs: EventPluginHub.eventNameDispatchConfigs,
    registrationNameModules: EventPluginHub.registrationNameModules,
    putListener: EventPluginHub.putListener,
    getListener: EventPluginHub.getListener,
    deleteListener: EventPluginHub.deleteListener,
    deleteAllListeners: EventPluginHub.deleteAllListeners
  });
  ReactPerf.measureMethods(ReactBrowserEventEmitter, 'ReactBrowserEventEmitter', {
    putListener: 'putListener',
    deleteListener: 'deleteListener'
  });
  module.exports = ReactBrowserEventEmitter;
  return module.exports;
});

$__System.registerDynamic("79", ["3"], true, function($__require, exports, module) {
  "use strict";
  var process = $__require("3");
  var define,
      global = this,
      GLOBAL = this;
  var ReactDOMFeatureFlags = {useCreateElement: false};
  module.exports = ReactDOMFeatureFlags;
  return module.exports;
});

$__System.registerDynamic("77", ["3"], true, function($__require, exports, module) {
  "use strict";
  var process = $__require("3");
  var define,
      global = this,
      GLOBAL = this;
  var ReactRootIndexInjection = {injectCreateReactRootIndex: function(_createReactRootIndex) {
      ReactRootIndex.createReactRootIndex = _createReactRootIndex;
    }};
  var ReactRootIndex = {
    createReactRootIndex: null,
    injection: ReactRootIndexInjection
  };
  module.exports = ReactRootIndex;
  return module.exports;
});

$__System.registerDynamic("d", ["77", "12", "3"], true, function($__require, exports, module) {
  "use strict";
  var process = $__require("3");
  var define,
      global = this,
      GLOBAL = this;
  var ReactRootIndex = $__require('77');
  var invariant = $__require('12');
  var SEPARATOR = '.';
  var SEPARATOR_LENGTH = SEPARATOR.length;
  var MAX_TREE_DEPTH = 10000;
  function getReactRootIDString(index) {
    return SEPARATOR + index.toString(36);
  }
  function isBoundary(id, index) {
    return id.charAt(index) === SEPARATOR || index === id.length;
  }
  function isValidID(id) {
    return id === '' || id.charAt(0) === SEPARATOR && id.charAt(id.length - 1) !== SEPARATOR;
  }
  function isAncestorIDOf(ancestorID, descendantID) {
    return descendantID.indexOf(ancestorID) === 0 && isBoundary(descendantID, ancestorID.length);
  }
  function getParentID(id) {
    return id ? id.substr(0, id.lastIndexOf(SEPARATOR)) : '';
  }
  function getNextDescendantID(ancestorID, destinationID) {
    !(isValidID(ancestorID) && isValidID(destinationID)) ? process.env.NODE_ENV !== 'production' ? invariant(false, 'getNextDescendantID(%s, %s): Received an invalid React DOM ID.', ancestorID, destinationID) : invariant(false) : undefined;
    !isAncestorIDOf(ancestorID, destinationID) ? process.env.NODE_ENV !== 'production' ? invariant(false, 'getNextDescendantID(...): React has made an invalid assumption about ' + 'the DOM hierarchy. Expected `%s` to be an ancestor of `%s`.', ancestorID, destinationID) : invariant(false) : undefined;
    if (ancestorID === destinationID) {
      return ancestorID;
    }
    var start = ancestorID.length + SEPARATOR_LENGTH;
    var i;
    for (i = start; i < destinationID.length; i++) {
      if (isBoundary(destinationID, i)) {
        break;
      }
    }
    return destinationID.substr(0, i);
  }
  function getFirstCommonAncestorID(oneID, twoID) {
    var minLength = Math.min(oneID.length, twoID.length);
    if (minLength === 0) {
      return '';
    }
    var lastCommonMarkerIndex = 0;
    for (var i = 0; i <= minLength; i++) {
      if (isBoundary(oneID, i) && isBoundary(twoID, i)) {
        lastCommonMarkerIndex = i;
      } else if (oneID.charAt(i) !== twoID.charAt(i)) {
        break;
      }
    }
    var longestCommonID = oneID.substr(0, lastCommonMarkerIndex);
    !isValidID(longestCommonID) ? process.env.NODE_ENV !== 'production' ? invariant(false, 'getFirstCommonAncestorID(%s, %s): Expected a valid React DOM ID: %s', oneID, twoID, longestCommonID) : invariant(false) : undefined;
    return longestCommonID;
  }
  function traverseParentPath(start, stop, cb, arg, skipFirst, skipLast) {
    start = start || '';
    stop = stop || '';
    !(start !== stop) ? process.env.NODE_ENV !== 'production' ? invariant(false, 'traverseParentPath(...): Cannot traverse from and to the same ID, `%s`.', start) : invariant(false) : undefined;
    var traverseUp = isAncestorIDOf(stop, start);
    !(traverseUp || isAncestorIDOf(start, stop)) ? process.env.NODE_ENV !== 'production' ? invariant(false, 'traverseParentPath(%s, %s, ...): Cannot traverse from two IDs that do ' + 'not have a parent path.', start, stop) : invariant(false) : undefined;
    var depth = 0;
    var traverse = traverseUp ? getParentID : getNextDescendantID;
    for (var id = start; ; id = traverse(id, stop)) {
      var ret;
      if ((!skipFirst || id !== start) && (!skipLast || id !== stop)) {
        ret = cb(id, traverseUp, arg);
      }
      if (ret === false || id === stop) {
        break;
      }
      !(depth++ < MAX_TREE_DEPTH) ? process.env.NODE_ENV !== 'production' ? invariant(false, 'traverseParentPath(%s, %s, ...): Detected an infinite loop while ' + 'traversing the React DOM ID tree. This may be due to malformed IDs: %s', start, stop, id) : invariant(false) : undefined;
    }
  }
  var ReactInstanceHandles = {
    createReactRootID: function() {
      return getReactRootIDString(ReactRootIndex.createReactRootIndex());
    },
    createReactID: function(rootID, name) {
      return rootID + name;
    },
    getReactRootIDFromNodeID: function(id) {
      if (id && id.charAt(0) === SEPARATOR && id.length > 1) {
        var index = id.indexOf(SEPARATOR, 1);
        return index > -1 ? id.substr(0, index) : id;
      }
      return null;
    },
    traverseEnterLeave: function(leaveID, enterID, cb, upArg, downArg) {
      var ancestorID = getFirstCommonAncestorID(leaveID, enterID);
      if (ancestorID !== leaveID) {
        traverseParentPath(leaveID, ancestorID, cb, upArg, false, true);
      }
      if (ancestorID !== enterID) {
        traverseParentPath(ancestorID, enterID, cb, downArg, true, false);
      }
    },
    traverseTwoPhase: function(targetID, cb, arg) {
      if (targetID) {
        traverseParentPath('', targetID, cb, arg, true, false);
        traverseParentPath(targetID, '', cb, arg, false, true);
      }
    },
    traverseTwoPhaseSkipTarget: function(targetID, cb, arg) {
      if (targetID) {
        traverseParentPath('', targetID, cb, arg, true, true);
        traverseParentPath(targetID, '', cb, arg, true, true);
      }
    },
    traverseAncestors: function(targetID, cb, arg) {
      traverseParentPath('', targetID, cb, arg, true, false);
    },
    getFirstCommonAncestorID: getFirstCommonAncestorID,
    _getNextDescendantID: getNextDescendantID,
    isAncestorIDOf: isAncestorIDOf,
    SEPARATOR: SEPARATOR
  };
  module.exports = ReactInstanceHandles;
  return module.exports;
});

$__System.registerDynamic("98", ["3"], true, function($__require, exports, module) {
  "use strict";
  var process = $__require("3");
  var define,
      global = this,
      GLOBAL = this;
  var MOD = 65521;
  function adler32(data) {
    var a = 1;
    var b = 0;
    var i = 0;
    var l = data.length;
    var m = l & ~0x3;
    while (i < m) {
      for (; i < Math.min(i + 4096, m); i += 4) {
        b += (a += data.charCodeAt(i)) + (a += data.charCodeAt(i + 1)) + (a += data.charCodeAt(i + 2)) + (a += data.charCodeAt(i + 3));
      }
      a %= MOD;
      b %= MOD;
    }
    for (; i < l; i++) {
      b += a += data.charCodeAt(i);
    }
    a %= MOD;
    b %= MOD;
    return a | b << 16;
  }
  module.exports = adler32;
  return module.exports;
});

$__System.registerDynamic("e", ["98", "3"], true, function($__require, exports, module) {
  "use strict";
  var process = $__require("3");
  var define,
      global = this,
      GLOBAL = this;
  var adler32 = $__require('98');
  var TAG_END = /\/?>/;
  var ReactMarkupChecksum = {
    CHECKSUM_ATTR_NAME: 'data-react-checksum',
    addChecksumToMarkup: function(markup) {
      var checksum = adler32(markup);
      return markup.replace(TAG_END, ' ' + ReactMarkupChecksum.CHECKSUM_ATTR_NAME + '="' + checksum + '"$&');
    },
    canReuseMarkup: function(markup, element) {
      var existingChecksum = element.getAttribute(ReactMarkupChecksum.CHECKSUM_ATTR_NAME);
      existingChecksum = existingChecksum && parseInt(existingChecksum, 10);
      var markupChecksum = adler32(markup);
      return markupChecksum === existingChecksum;
    }
  };
  module.exports = ReactMarkupChecksum;
  return module.exports;
});

$__System.registerDynamic("99", ["3"], true, function($__require, exports, module) {
  "use strict";
  var process = $__require("3");
  var define,
      global = this,
      GLOBAL = this;
  function isNode(object) {
    return !!(object && (typeof Node === 'function' ? object instanceof Node : typeof object === 'object' && typeof object.nodeType === 'number' && typeof object.nodeName === 'string'));
  }
  module.exports = isNode;
  return module.exports;
});

$__System.registerDynamic("9a", ["99", "3"], true, function($__require, exports, module) {
  "use strict";
  var process = $__require("3");
  var define,
      global = this,
      GLOBAL = this;
  var isNode = $__require('99');
  function isTextNode(object) {
    return isNode(object) && object.nodeType == 3;
  }
  module.exports = isTextNode;
  return module.exports;
});

$__System.registerDynamic("7d", ["9a", "3"], true, function($__require, exports, module) {
  "use strict";
  var process = $__require("3");
  var define,
      global = this,
      GLOBAL = this;
  var isTextNode = $__require('9a');
  function containsNode(_x, _x2) {
    var _again = true;
    _function: while (_again) {
      var outerNode = _x,
          innerNode = _x2;
      _again = false;
      if (!outerNode || !innerNode) {
        return false;
      } else if (outerNode === innerNode) {
        return true;
      } else if (isTextNode(outerNode)) {
        return false;
      } else if (isTextNode(innerNode)) {
        _x = outerNode;
        _x2 = innerNode.parentNode;
        _again = true;
        continue _function;
      } else if (outerNode.contains) {
        return outerNode.contains(innerNode);
      } else if (outerNode.compareDocumentPosition) {
        return !!(outerNode.compareDocumentPosition(innerNode) & 16);
      } else {
        return false;
      }
    }
  }
  module.exports = containsNode;
  return module.exports;
});

$__System.registerDynamic("5b", ["12", "3"], true, function($__require, exports, module) {
  "use strict";
  var process = $__require("3");
  var define,
      global = this,
      GLOBAL = this;
  var invariant = $__require('12');
  var injected = false;
  var ReactComponentEnvironment = {
    unmountIDFromEnvironment: null,
    replaceNodeWithMarkupByID: null,
    processChildrenUpdates: null,
    injection: {injectEnvironment: function(environment) {
        !!injected ? process.env.NODE_ENV !== 'production' ? invariant(false, 'ReactCompositeComponent: injectEnvironment() can only be called once.') : invariant(false) : undefined;
        ReactComponentEnvironment.unmountIDFromEnvironment = environment.unmountIDFromEnvironment;
        ReactComponentEnvironment.replaceNodeWithMarkupByID = environment.replaceNodeWithMarkupByID;
        ReactComponentEnvironment.processChildrenUpdates = environment.processChildrenUpdates;
        injected = true;
      }}
  };
  module.exports = ReactComponentEnvironment;
  return module.exports;
});

$__System.registerDynamic("6c", ["12", "3"], true, function($__require, exports, module) {
  "use strict";
  var process = $__require("3");
  var define,
      global = this,
      GLOBAL = this;
  var invariant = $__require('12');
  var keyMirror = function(obj) {
    var ret = {};
    var key;
    !(obj instanceof Object && !Array.isArray(obj)) ? process.env.NODE_ENV !== 'production' ? invariant(false, 'keyMirror(...): Argument must be an object.') : invariant(false) : undefined;
    for (key in obj) {
      if (!obj.hasOwnProperty(key)) {
        continue;
      }
      ret[key] = key;
    }
    return ret;
  };
  module.exports = keyMirror;
  return module.exports;
});

$__System.registerDynamic("19", ["6c", "3"], true, function($__require, exports, module) {
  "use strict";
  var process = $__require("3");
  var define,
      global = this,
      GLOBAL = this;
  var keyMirror = $__require('6c');
  var ReactPropTypeLocations = keyMirror({
    prop: null,
    context: null,
    childContext: null
  });
  module.exports = ReactPropTypeLocations;
  return module.exports;
});

$__System.registerDynamic("1a", ["3"], true, function($__require, exports, module) {
  "use strict";
  var process = $__require("3");
  var define,
      global = this,
      GLOBAL = this;
  var ReactPropTypeLocationNames = {};
  if (process.env.NODE_ENV !== 'production') {
    ReactPropTypeLocationNames = {
      prop: 'prop',
      context: 'context',
      childContext: 'child context'
    };
  }
  module.exports = ReactPropTypeLocationNames;
  return module.exports;
});

$__System.registerDynamic("41", ["3"], true, function($__require, exports, module) {
  "use strict";
  var process = $__require("3");
  var define,
      global = this,
      GLOBAL = this;
  var ReactInstanceMap = {
    remove: function(key) {
      key._reactInternalInstance = undefined;
    },
    get: function(key) {
      return key._reactInternalInstance;
    },
    has: function(key) {
      return key._reactInternalInstance !== undefined;
    },
    set: function(key, value) {
      key._reactInternalInstance = value;
    }
  };
  module.exports = ReactInstanceMap;
  return module.exports;
});

$__System.registerDynamic("6", ["5", "8", "12", "3"], true, function($__require, exports, module) {
  "use strict";
  var process = $__require("3");
  var define,
      global = this,
      GLOBAL = this;
  var PooledClass = $__require('5');
  var assign = $__require('8');
  var invariant = $__require('12');
  function CallbackQueue() {
    this._callbacks = null;
    this._contexts = null;
  }
  assign(CallbackQueue.prototype, {
    enqueue: function(callback, context) {
      this._callbacks = this._callbacks || [];
      this._contexts = this._contexts || [];
      this._callbacks.push(callback);
      this._contexts.push(context);
    },
    notifyAll: function() {
      var callbacks = this._callbacks;
      var contexts = this._contexts;
      if (callbacks) {
        !(callbacks.length === contexts.length) ? process.env.NODE_ENV !== 'production' ? invariant(false, 'Mismatched list of contexts in callback queue') : invariant(false) : undefined;
        this._callbacks = null;
        this._contexts = null;
        for (var i = 0; i < callbacks.length; i++) {
          callbacks[i].call(contexts[i]);
        }
        callbacks.length = 0;
        contexts.length = 0;
      }
    },
    reset: function() {
      this._callbacks = null;
      this._contexts = null;
    },
    destructor: function() {
      this.reset();
    }
  });
  PooledClass.addPoolingTo(CallbackQueue);
  module.exports = CallbackQueue;
  return module.exports;
});

$__System.registerDynamic("5", ["12", "3"], true, function($__require, exports, module) {
  "use strict";
  var process = $__require("3");
  var define,
      global = this,
      GLOBAL = this;
  var invariant = $__require('12');
  var oneArgumentPooler = function(copyFieldsFrom) {
    var Klass = this;
    if (Klass.instancePool.length) {
      var instance = Klass.instancePool.pop();
      Klass.call(instance, copyFieldsFrom);
      return instance;
    } else {
      return new Klass(copyFieldsFrom);
    }
  };
  var twoArgumentPooler = function(a1, a2) {
    var Klass = this;
    if (Klass.instancePool.length) {
      var instance = Klass.instancePool.pop();
      Klass.call(instance, a1, a2);
      return instance;
    } else {
      return new Klass(a1, a2);
    }
  };
  var threeArgumentPooler = function(a1, a2, a3) {
    var Klass = this;
    if (Klass.instancePool.length) {
      var instance = Klass.instancePool.pop();
      Klass.call(instance, a1, a2, a3);
      return instance;
    } else {
      return new Klass(a1, a2, a3);
    }
  };
  var fourArgumentPooler = function(a1, a2, a3, a4) {
    var Klass = this;
    if (Klass.instancePool.length) {
      var instance = Klass.instancePool.pop();
      Klass.call(instance, a1, a2, a3, a4);
      return instance;
    } else {
      return new Klass(a1, a2, a3, a4);
    }
  };
  var fiveArgumentPooler = function(a1, a2, a3, a4, a5) {
    var Klass = this;
    if (Klass.instancePool.length) {
      var instance = Klass.instancePool.pop();
      Klass.call(instance, a1, a2, a3, a4, a5);
      return instance;
    } else {
      return new Klass(a1, a2, a3, a4, a5);
    }
  };
  var standardReleaser = function(instance) {
    var Klass = this;
    !(instance instanceof Klass) ? process.env.NODE_ENV !== 'production' ? invariant(false, 'Trying to release an instance into a pool of a different type.') : invariant(false) : undefined;
    instance.destructor();
    if (Klass.instancePool.length < Klass.poolSize) {
      Klass.instancePool.push(instance);
    }
  };
  var DEFAULT_POOL_SIZE = 10;
  var DEFAULT_POOLER = oneArgumentPooler;
  var addPoolingTo = function(CopyConstructor, pooler) {
    var NewKlass = CopyConstructor;
    NewKlass.instancePool = [];
    NewKlass.getPooled = pooler || DEFAULT_POOLER;
    if (!NewKlass.poolSize) {
      NewKlass.poolSize = DEFAULT_POOL_SIZE;
    }
    NewKlass.release = standardReleaser;
    return NewKlass;
  };
  var PooledClass = {
    addPoolingTo: addPoolingTo,
    oneArgumentPooler: oneArgumentPooler,
    twoArgumentPooler: twoArgumentPooler,
    threeArgumentPooler: threeArgumentPooler,
    fourArgumentPooler: fourArgumentPooler,
    fiveArgumentPooler: fiveArgumentPooler
  };
  module.exports = PooledClass;
  return module.exports;
});

$__System.registerDynamic("4d", ["3"], true, function($__require, exports, module) {
  "use strict";
  var process = $__require("3");
  var define,
      global = this,
      GLOBAL = this;
  var ReactPerf = {
    enableMeasure: false,
    storedMeasure: _noMeasure,
    measureMethods: function(object, objectName, methodNames) {
      if (process.env.NODE_ENV !== 'production') {
        for (var key in methodNames) {
          if (!methodNames.hasOwnProperty(key)) {
            continue;
          }
          object[key] = ReactPerf.measure(objectName, methodNames[key], object[key]);
        }
      }
    },
    measure: function(objName, fnName, func) {
      if (process.env.NODE_ENV !== 'production') {
        var measuredFunc = null;
        var wrapper = function() {
          if (ReactPerf.enableMeasure) {
            if (!measuredFunc) {
              measuredFunc = ReactPerf.storedMeasure(objName, fnName, func);
            }
            return measuredFunc.apply(this, arguments);
          }
          return func.apply(this, arguments);
        };
        wrapper.displayName = objName + '_' + fnName;
        return wrapper;
      }
      return func;
    },
    injection: {injectMeasure: function(measure) {
        ReactPerf.storedMeasure = measure;
      }}
  };
  function _noMeasure(objName, fnName, func) {
    return func;
  }
  module.exports = ReactPerf;
  return module.exports;
});

$__System.registerDynamic("7", ["12", "3"], true, function($__require, exports, module) {
  "use strict";
  var process = $__require("3");
  var define,
      global = this,
      GLOBAL = this;
  var invariant = $__require('12');
  var Mixin = {
    reinitializeTransaction: function() {
      this.transactionWrappers = this.getTransactionWrappers();
      if (this.wrapperInitData) {
        this.wrapperInitData.length = 0;
      } else {
        this.wrapperInitData = [];
      }
      this._isInTransaction = false;
    },
    _isInTransaction: false,
    getTransactionWrappers: null,
    isInTransaction: function() {
      return !!this._isInTransaction;
    },
    perform: function(method, scope, a, b, c, d, e, f) {
      !!this.isInTransaction() ? process.env.NODE_ENV !== 'production' ? invariant(false, 'Transaction.perform(...): Cannot initialize a transaction when there ' + 'is already an outstanding transaction.') : invariant(false) : undefined;
      var errorThrown;
      var ret;
      try {
        this._isInTransaction = true;
        errorThrown = true;
        this.initializeAll(0);
        ret = method.call(scope, a, b, c, d, e, f);
        errorThrown = false;
      } finally {
        try {
          if (errorThrown) {
            try {
              this.closeAll(0);
            } catch (err) {}
          } else {
            this.closeAll(0);
          }
        } finally {
          this._isInTransaction = false;
        }
      }
      return ret;
    },
    initializeAll: function(startIndex) {
      var transactionWrappers = this.transactionWrappers;
      for (var i = startIndex; i < transactionWrappers.length; i++) {
        var wrapper = transactionWrappers[i];
        try {
          this.wrapperInitData[i] = Transaction.OBSERVED_ERROR;
          this.wrapperInitData[i] = wrapper.initialize ? wrapper.initialize.call(this) : null;
        } finally {
          if (this.wrapperInitData[i] === Transaction.OBSERVED_ERROR) {
            try {
              this.initializeAll(i + 1);
            } catch (err) {}
          }
        }
      }
    },
    closeAll: function(startIndex) {
      !this.isInTransaction() ? process.env.NODE_ENV !== 'production' ? invariant(false, 'Transaction.closeAll(): Cannot close transaction when none are open.') : invariant(false) : undefined;
      var transactionWrappers = this.transactionWrappers;
      for (var i = startIndex; i < transactionWrappers.length; i++) {
        var wrapper = transactionWrappers[i];
        var initData = this.wrapperInitData[i];
        var errorThrown;
        try {
          errorThrown = true;
          if (initData !== Transaction.OBSERVED_ERROR && wrapper.close) {
            wrapper.close.call(this, initData);
          }
          errorThrown = false;
        } finally {
          if (errorThrown) {
            try {
              this.closeAll(i + 1);
            } catch (e) {}
          }
        }
      }
      this.wrapperInitData.length = 0;
    }
  };
  var Transaction = {
    Mixin: Mixin,
    OBSERVED_ERROR: {}
  };
  module.exports = Transaction;
  return module.exports;
});

$__System.registerDynamic("f", ["6", "5", "4d", "57", "7", "8", "12", "3"], true, function($__require, exports, module) {
  "use strict";
  var process = $__require("3");
  var define,
      global = this,
      GLOBAL = this;
  var CallbackQueue = $__require('6');
  var PooledClass = $__require('5');
  var ReactPerf = $__require('4d');
  var ReactReconciler = $__require('57');
  var Transaction = $__require('7');
  var assign = $__require('8');
  var invariant = $__require('12');
  var dirtyComponents = [];
  var asapCallbackQueue = CallbackQueue.getPooled();
  var asapEnqueued = false;
  var batchingStrategy = null;
  function ensureInjected() {
    !(ReactUpdates.ReactReconcileTransaction && batchingStrategy) ? process.env.NODE_ENV !== 'production' ? invariant(false, 'ReactUpdates: must inject a reconcile transaction class and batching ' + 'strategy') : invariant(false) : undefined;
  }
  var NESTED_UPDATES = {
    initialize: function() {
      this.dirtyComponentsLength = dirtyComponents.length;
    },
    close: function() {
      if (this.dirtyComponentsLength !== dirtyComponents.length) {
        dirtyComponents.splice(0, this.dirtyComponentsLength);
        flushBatchedUpdates();
      } else {
        dirtyComponents.length = 0;
      }
    }
  };
  var UPDATE_QUEUEING = {
    initialize: function() {
      this.callbackQueue.reset();
    },
    close: function() {
      this.callbackQueue.notifyAll();
    }
  };
  var TRANSACTION_WRAPPERS = [NESTED_UPDATES, UPDATE_QUEUEING];
  function ReactUpdatesFlushTransaction() {
    this.reinitializeTransaction();
    this.dirtyComponentsLength = null;
    this.callbackQueue = CallbackQueue.getPooled();
    this.reconcileTransaction = ReactUpdates.ReactReconcileTransaction.getPooled(false);
  }
  assign(ReactUpdatesFlushTransaction.prototype, Transaction.Mixin, {
    getTransactionWrappers: function() {
      return TRANSACTION_WRAPPERS;
    },
    destructor: function() {
      this.dirtyComponentsLength = null;
      CallbackQueue.release(this.callbackQueue);
      this.callbackQueue = null;
      ReactUpdates.ReactReconcileTransaction.release(this.reconcileTransaction);
      this.reconcileTransaction = null;
    },
    perform: function(method, scope, a) {
      return Transaction.Mixin.perform.call(this, this.reconcileTransaction.perform, this.reconcileTransaction, method, scope, a);
    }
  });
  PooledClass.addPoolingTo(ReactUpdatesFlushTransaction);
  function batchedUpdates(callback, a, b, c, d, e) {
    ensureInjected();
    batchingStrategy.batchedUpdates(callback, a, b, c, d, e);
  }
  function mountOrderComparator(c1, c2) {
    return c1._mountOrder - c2._mountOrder;
  }
  function runBatchedUpdates(transaction) {
    var len = transaction.dirtyComponentsLength;
    !(len === dirtyComponents.length) ? process.env.NODE_ENV !== 'production' ? invariant(false, 'Expected flush transaction\'s stored dirty-components length (%s) to ' + 'match dirty-components array length (%s).', len, dirtyComponents.length) : invariant(false) : undefined;
    dirtyComponents.sort(mountOrderComparator);
    for (var i = 0; i < len; i++) {
      var component = dirtyComponents[i];
      var callbacks = component._pendingCallbacks;
      component._pendingCallbacks = null;
      ReactReconciler.performUpdateIfNecessary(component, transaction.reconcileTransaction);
      if (callbacks) {
        for (var j = 0; j < callbacks.length; j++) {
          transaction.callbackQueue.enqueue(callbacks[j], component.getPublicInstance());
        }
      }
    }
  }
  var flushBatchedUpdates = function() {
    while (dirtyComponents.length || asapEnqueued) {
      if (dirtyComponents.length) {
        var transaction = ReactUpdatesFlushTransaction.getPooled();
        transaction.perform(runBatchedUpdates, null, transaction);
        ReactUpdatesFlushTransaction.release(transaction);
      }
      if (asapEnqueued) {
        asapEnqueued = false;
        var queue = asapCallbackQueue;
        asapCallbackQueue = CallbackQueue.getPooled();
        queue.notifyAll();
        CallbackQueue.release(queue);
      }
    }
  };
  flushBatchedUpdates = ReactPerf.measure('ReactUpdates', 'flushBatchedUpdates', flushBatchedUpdates);
  function enqueueUpdate(component) {
    ensureInjected();
    if (!batchingStrategy.isBatchingUpdates) {
      batchingStrategy.batchedUpdates(enqueueUpdate, component);
      return;
    }
    dirtyComponents.push(component);
  }
  function asap(callback, context) {
    !batchingStrategy.isBatchingUpdates ? process.env.NODE_ENV !== 'production' ? invariant(false, 'ReactUpdates.asap: Can\'t enqueue an asap callback in a context where' + 'updates are not being batched.') : invariant(false) : undefined;
    asapCallbackQueue.enqueue(callback, context);
    asapEnqueued = true;
  }
  var ReactUpdatesInjection = {
    injectReconcileTransaction: function(ReconcileTransaction) {
      !ReconcileTransaction ? process.env.NODE_ENV !== 'production' ? invariant(false, 'ReactUpdates: must provide a reconcile transaction class') : invariant(false) : undefined;
      ReactUpdates.ReactReconcileTransaction = ReconcileTransaction;
    },
    injectBatchingStrategy: function(_batchingStrategy) {
      !_batchingStrategy ? process.env.NODE_ENV !== 'production' ? invariant(false, 'ReactUpdates: must provide a batching strategy') : invariant(false) : undefined;
      !(typeof _batchingStrategy.batchedUpdates === 'function') ? process.env.NODE_ENV !== 'production' ? invariant(false, 'ReactUpdates: must provide a batchedUpdates() function') : invariant(false) : undefined;
      !(typeof _batchingStrategy.isBatchingUpdates === 'boolean') ? process.env.NODE_ENV !== 'production' ? invariant(false, 'ReactUpdates: must provide an isBatchingUpdates boolean attribute') : invariant(false) : undefined;
      batchingStrategy = _batchingStrategy;
    }
  };
  var ReactUpdates = {
    ReactReconcileTransaction: null,
    batchedUpdates: batchedUpdates,
    enqueueUpdate: enqueueUpdate,
    flushBatchedUpdates: flushBatchedUpdates,
    injection: ReactUpdatesInjection,
    asap: asap
  };
  module.exports = ReactUpdates;
  return module.exports;
});

$__System.registerDynamic("61", ["1b", "c", "41", "f", "8", "12", "1e", "3"], true, function($__require, exports, module) {
  "use strict";
  var process = $__require("3");
  var define,
      global = this,
      GLOBAL = this;
  var ReactCurrentOwner = $__require('1b');
  var ReactElement = $__require('c');
  var ReactInstanceMap = $__require('41');
  var ReactUpdates = $__require('f');
  var assign = $__require('8');
  var invariant = $__require('12');
  var warning = $__require('1e');
  function enqueueUpdate(internalInstance) {
    ReactUpdates.enqueueUpdate(internalInstance);
  }
  function getInternalInstanceReadyForUpdate(publicInstance, callerName) {
    var internalInstance = ReactInstanceMap.get(publicInstance);
    if (!internalInstance) {
      if (process.env.NODE_ENV !== 'production') {
        process.env.NODE_ENV !== 'production' ? warning(!callerName, '%s(...): Can only update a mounted or mounting component. ' + 'This usually means you called %s() on an unmounted component. ' + 'This is a no-op. Please check the code for the %s component.', callerName, callerName, publicInstance.constructor.displayName) : undefined;
      }
      return null;
    }
    if (process.env.NODE_ENV !== 'production') {
      process.env.NODE_ENV !== 'production' ? warning(ReactCurrentOwner.current == null, '%s(...): Cannot update during an existing state transition ' + '(such as within `render`). Render methods should be a pure function ' + 'of props and state.', callerName) : undefined;
    }
    return internalInstance;
  }
  var ReactUpdateQueue = {
    isMounted: function(publicInstance) {
      if (process.env.NODE_ENV !== 'production') {
        var owner = ReactCurrentOwner.current;
        if (owner !== null) {
          process.env.NODE_ENV !== 'production' ? warning(owner._warnedAboutRefsInRender, '%s is accessing isMounted inside its render() function. ' + 'render() should be a pure function of props and state. It should ' + 'never access something that requires stale data from the previous ' + 'render, such as refs. Move this logic to componentDidMount and ' + 'componentDidUpdate instead.', owner.getName() || 'A component') : undefined;
          owner._warnedAboutRefsInRender = true;
        }
      }
      var internalInstance = ReactInstanceMap.get(publicInstance);
      if (internalInstance) {
        return !!internalInstance._renderedComponent;
      } else {
        return false;
      }
    },
    enqueueCallback: function(publicInstance, callback) {
      !(typeof callback === 'function') ? process.env.NODE_ENV !== 'production' ? invariant(false, 'enqueueCallback(...): You called `setProps`, `replaceProps`, ' + '`setState`, `replaceState`, or `forceUpdate` with a callback that ' + 'isn\'t callable.') : invariant(false) : undefined;
      var internalInstance = getInternalInstanceReadyForUpdate(publicInstance);
      if (!internalInstance) {
        return null;
      }
      if (internalInstance._pendingCallbacks) {
        internalInstance._pendingCallbacks.push(callback);
      } else {
        internalInstance._pendingCallbacks = [callback];
      }
      enqueueUpdate(internalInstance);
    },
    enqueueCallbackInternal: function(internalInstance, callback) {
      !(typeof callback === 'function') ? process.env.NODE_ENV !== 'production' ? invariant(false, 'enqueueCallback(...): You called `setProps`, `replaceProps`, ' + '`setState`, `replaceState`, or `forceUpdate` with a callback that ' + 'isn\'t callable.') : invariant(false) : undefined;
      if (internalInstance._pendingCallbacks) {
        internalInstance._pendingCallbacks.push(callback);
      } else {
        internalInstance._pendingCallbacks = [callback];
      }
      enqueueUpdate(internalInstance);
    },
    enqueueForceUpdate: function(publicInstance) {
      var internalInstance = getInternalInstanceReadyForUpdate(publicInstance, 'forceUpdate');
      if (!internalInstance) {
        return;
      }
      internalInstance._pendingForceUpdate = true;
      enqueueUpdate(internalInstance);
    },
    enqueueReplaceState: function(publicInstance, completeState) {
      var internalInstance = getInternalInstanceReadyForUpdate(publicInstance, 'replaceState');
      if (!internalInstance) {
        return;
      }
      internalInstance._pendingStateQueue = [completeState];
      internalInstance._pendingReplaceState = true;
      enqueueUpdate(internalInstance);
    },
    enqueueSetState: function(publicInstance, partialState) {
      var internalInstance = getInternalInstanceReadyForUpdate(publicInstance, 'setState');
      if (!internalInstance) {
        return;
      }
      var queue = internalInstance._pendingStateQueue || (internalInstance._pendingStateQueue = []);
      queue.push(partialState);
      enqueueUpdate(internalInstance);
    },
    enqueueSetProps: function(publicInstance, partialProps) {
      var internalInstance = getInternalInstanceReadyForUpdate(publicInstance, 'setProps');
      if (!internalInstance) {
        return;
      }
      ReactUpdateQueue.enqueueSetPropsInternal(internalInstance, partialProps);
    },
    enqueueSetPropsInternal: function(internalInstance, partialProps) {
      var topLevelWrapper = internalInstance._topLevelWrapper;
      !topLevelWrapper ? process.env.NODE_ENV !== 'production' ? invariant(false, 'setProps(...): You called `setProps` on a ' + 'component with a parent. This is an anti-pattern since props will ' + 'get reactively updated when rendered. Instead, change the owner\'s ' + '`render` method to pass the correct value as props to the component ' + 'where it is created.') : invariant(false) : undefined;
      var wrapElement = topLevelWrapper._pendingElement || topLevelWrapper._currentElement;
      var element = wrapElement.props;
      var props = assign({}, element.props, partialProps);
      topLevelWrapper._pendingElement = ReactElement.cloneAndReplaceProps(wrapElement, ReactElement.cloneAndReplaceProps(element, props));
      enqueueUpdate(topLevelWrapper);
    },
    enqueueReplaceProps: function(publicInstance, props) {
      var internalInstance = getInternalInstanceReadyForUpdate(publicInstance, 'replaceProps');
      if (!internalInstance) {
        return;
      }
      ReactUpdateQueue.enqueueReplacePropsInternal(internalInstance, props);
    },
    enqueueReplacePropsInternal: function(internalInstance, props) {
      var topLevelWrapper = internalInstance._topLevelWrapper;
      !topLevelWrapper ? process.env.NODE_ENV !== 'production' ? invariant(false, 'replaceProps(...): You called `replaceProps` on a ' + 'component with a parent. This is an anti-pattern since props will ' + 'get reactively updated when rendered. Instead, change the owner\'s ' + '`render` method to pass the correct value as props to the component ' + 'where it is created.') : invariant(false) : undefined;
      var wrapElement = topLevelWrapper._pendingElement || topLevelWrapper._currentElement;
      var element = wrapElement.props;
      topLevelWrapper._pendingElement = ReactElement.cloneAndReplaceProps(wrapElement, ReactElement.cloneAndReplaceProps(element, props));
      enqueueUpdate(topLevelWrapper);
    },
    enqueueElementInternal: function(internalInstance, newElement) {
      internalInstance._pendingElement = newElement;
      enqueueUpdate(internalInstance);
    }
  };
  module.exports = ReactUpdateQueue;
  return module.exports;
});

$__System.registerDynamic("11", ["3"], true, function($__require, exports, module) {
  "use strict";
  var process = $__require("3");
  var define,
      global = this,
      GLOBAL = this;
  var emptyObject = {};
  if (process.env.NODE_ENV !== 'production') {
    Object.freeze(emptyObject);
  }
  module.exports = emptyObject;
  return module.exports;
});

$__System.registerDynamic("9b", ["5b", "1b", "c", "41", "4d", "19", "1a", "57", "61", "8", "11", "12", "58", "1e", "3"], true, function($__require, exports, module) {
  "use strict";
  var process = $__require("3");
  var define,
      global = this,
      GLOBAL = this;
  var ReactComponentEnvironment = $__require('5b');
  var ReactCurrentOwner = $__require('1b');
  var ReactElement = $__require('c');
  var ReactInstanceMap = $__require('41');
  var ReactPerf = $__require('4d');
  var ReactPropTypeLocations = $__require('19');
  var ReactPropTypeLocationNames = $__require('1a');
  var ReactReconciler = $__require('57');
  var ReactUpdateQueue = $__require('61');
  var assign = $__require('8');
  var emptyObject = $__require('11');
  var invariant = $__require('12');
  var shouldUpdateReactComponent = $__require('58');
  var warning = $__require('1e');
  function getDeclarationErrorAddendum(component) {
    var owner = component._currentElement._owner || null;
    if (owner) {
      var name = owner.getName();
      if (name) {
        return ' Check the render method of `' + name + '`.';
      }
    }
    return '';
  }
  function StatelessComponent(Component) {}
  StatelessComponent.prototype.render = function() {
    var Component = ReactInstanceMap.get(this)._currentElement.type;
    return Component(this.props, this.context, this.updater);
  };
  var nextMountID = 1;
  var ReactCompositeComponentMixin = {
    construct: function(element) {
      this._currentElement = element;
      this._rootNodeID = null;
      this._instance = null;
      this._pendingElement = null;
      this._pendingStateQueue = null;
      this._pendingReplaceState = false;
      this._pendingForceUpdate = false;
      this._renderedComponent = null;
      this._context = null;
      this._mountOrder = 0;
      this._topLevelWrapper = null;
      this._pendingCallbacks = null;
    },
    mountComponent: function(rootID, transaction, context) {
      this._context = context;
      this._mountOrder = nextMountID++;
      this._rootNodeID = rootID;
      var publicProps = this._processProps(this._currentElement.props);
      var publicContext = this._processContext(context);
      var Component = this._currentElement.type;
      var inst;
      var renderedElement;
      var canInstantiate = ('prototype' in Component);
      if (canInstantiate) {
        if (process.env.NODE_ENV !== 'production') {
          ReactCurrentOwner.current = this;
          try {
            inst = new Component(publicProps, publicContext, ReactUpdateQueue);
          } finally {
            ReactCurrentOwner.current = null;
          }
        } else {
          inst = new Component(publicProps, publicContext, ReactUpdateQueue);
        }
      }
      if (!canInstantiate || inst === null || inst === false || ReactElement.isValidElement(inst)) {
        renderedElement = inst;
        inst = new StatelessComponent(Component);
      }
      if (process.env.NODE_ENV !== 'production') {
        if (inst.render == null) {
          process.env.NODE_ENV !== 'production' ? warning(false, '%s(...): No `render` method found on the returned component ' + 'instance: you may have forgotten to define `render`, returned ' + 'null/false from a stateless component, or tried to render an ' + 'element whose type is a function that isn\'t a React component.', Component.displayName || Component.name || 'Component') : undefined;
        } else {
          process.env.NODE_ENV !== 'production' ? warning(Component.prototype && Component.prototype.isReactComponent || !canInstantiate || !(inst instanceof Component), '%s(...): React component classes must extend React.Component.', Component.displayName || Component.name || 'Component') : undefined;
        }
      }
      inst.props = publicProps;
      inst.context = publicContext;
      inst.refs = emptyObject;
      inst.updater = ReactUpdateQueue;
      this._instance = inst;
      ReactInstanceMap.set(inst, this);
      if (process.env.NODE_ENV !== 'production') {
        process.env.NODE_ENV !== 'production' ? warning(!inst.getInitialState || inst.getInitialState.isReactClassApproved, 'getInitialState was defined on %s, a plain JavaScript class. ' + 'This is only supported for classes created using React.createClass. ' + 'Did you mean to define a state property instead?', this.getName() || 'a component') : undefined;
        process.env.NODE_ENV !== 'production' ? warning(!inst.getDefaultProps || inst.getDefaultProps.isReactClassApproved, 'getDefaultProps was defined on %s, a plain JavaScript class. ' + 'This is only supported for classes created using React.createClass. ' + 'Use a static property to define defaultProps instead.', this.getName() || 'a component') : undefined;
        process.env.NODE_ENV !== 'production' ? warning(!inst.propTypes, 'propTypes was defined as an instance property on %s. Use a static ' + 'property to define propTypes instead.', this.getName() || 'a component') : undefined;
        process.env.NODE_ENV !== 'production' ? warning(!inst.contextTypes, 'contextTypes was defined as an instance property on %s. Use a ' + 'static property to define contextTypes instead.', this.getName() || 'a component') : undefined;
        process.env.NODE_ENV !== 'production' ? warning(typeof inst.componentShouldUpdate !== 'function', '%s has a method called ' + 'componentShouldUpdate(). Did you mean shouldComponentUpdate()? ' + 'The name is phrased as a question because the function is ' + 'expected to return a value.', this.getName() || 'A component') : undefined;
        process.env.NODE_ENV !== 'production' ? warning(typeof inst.componentDidUnmount !== 'function', '%s has a method called ' + 'componentDidUnmount(). But there is no such lifecycle method. ' + 'Did you mean componentWillUnmount()?', this.getName() || 'A component') : undefined;
        process.env.NODE_ENV !== 'production' ? warning(typeof inst.componentWillRecieveProps !== 'function', '%s has a method called ' + 'componentWillRecieveProps(). Did you mean componentWillReceiveProps()?', this.getName() || 'A component') : undefined;
      }
      var initialState = inst.state;
      if (initialState === undefined) {
        inst.state = initialState = null;
      }
      !(typeof initialState === 'object' && !Array.isArray(initialState)) ? process.env.NODE_ENV !== 'production' ? invariant(false, '%s.state: must be set to an object or null', this.getName() || 'ReactCompositeComponent') : invariant(false) : undefined;
      this._pendingStateQueue = null;
      this._pendingReplaceState = false;
      this._pendingForceUpdate = false;
      if (inst.componentWillMount) {
        inst.componentWillMount();
        if (this._pendingStateQueue) {
          inst.state = this._processPendingState(inst.props, inst.context);
        }
      }
      if (renderedElement === undefined) {
        renderedElement = this._renderValidatedComponent();
      }
      this._renderedComponent = this._instantiateReactComponent(renderedElement);
      var markup = ReactReconciler.mountComponent(this._renderedComponent, rootID, transaction, this._processChildContext(context));
      if (inst.componentDidMount) {
        transaction.getReactMountReady().enqueue(inst.componentDidMount, inst);
      }
      return markup;
    },
    unmountComponent: function() {
      var inst = this._instance;
      if (inst.componentWillUnmount) {
        inst.componentWillUnmount();
      }
      ReactReconciler.unmountComponent(this._renderedComponent);
      this._renderedComponent = null;
      this._instance = null;
      this._pendingStateQueue = null;
      this._pendingReplaceState = false;
      this._pendingForceUpdate = false;
      this._pendingCallbacks = null;
      this._pendingElement = null;
      this._context = null;
      this._rootNodeID = null;
      this._topLevelWrapper = null;
      ReactInstanceMap.remove(inst);
    },
    _maskContext: function(context) {
      var maskedContext = null;
      var Component = this._currentElement.type;
      var contextTypes = Component.contextTypes;
      if (!contextTypes) {
        return emptyObject;
      }
      maskedContext = {};
      for (var contextName in contextTypes) {
        maskedContext[contextName] = context[contextName];
      }
      return maskedContext;
    },
    _processContext: function(context) {
      var maskedContext = this._maskContext(context);
      if (process.env.NODE_ENV !== 'production') {
        var Component = this._currentElement.type;
        if (Component.contextTypes) {
          this._checkPropTypes(Component.contextTypes, maskedContext, ReactPropTypeLocations.context);
        }
      }
      return maskedContext;
    },
    _processChildContext: function(currentContext) {
      var Component = this._currentElement.type;
      var inst = this._instance;
      var childContext = inst.getChildContext && inst.getChildContext();
      if (childContext) {
        !(typeof Component.childContextTypes === 'object') ? process.env.NODE_ENV !== 'production' ? invariant(false, '%s.getChildContext(): childContextTypes must be defined in order to ' + 'use getChildContext().', this.getName() || 'ReactCompositeComponent') : invariant(false) : undefined;
        if (process.env.NODE_ENV !== 'production') {
          this._checkPropTypes(Component.childContextTypes, childContext, ReactPropTypeLocations.childContext);
        }
        for (var name in childContext) {
          !(name in Component.childContextTypes) ? process.env.NODE_ENV !== 'production' ? invariant(false, '%s.getChildContext(): key "%s" is not defined in childContextTypes.', this.getName() || 'ReactCompositeComponent', name) : invariant(false) : undefined;
        }
        return assign({}, currentContext, childContext);
      }
      return currentContext;
    },
    _processProps: function(newProps) {
      if (process.env.NODE_ENV !== 'production') {
        var Component = this._currentElement.type;
        if (Component.propTypes) {
          this._checkPropTypes(Component.propTypes, newProps, ReactPropTypeLocations.prop);
        }
      }
      return newProps;
    },
    _checkPropTypes: function(propTypes, props, location) {
      var componentName = this.getName();
      for (var propName in propTypes) {
        if (propTypes.hasOwnProperty(propName)) {
          var error;
          try {
            !(typeof propTypes[propName] === 'function') ? process.env.NODE_ENV !== 'production' ? invariant(false, '%s: %s type `%s` is invalid; it must be a function, usually ' + 'from React.PropTypes.', componentName || 'React class', ReactPropTypeLocationNames[location], propName) : invariant(false) : undefined;
            error = propTypes[propName](props, propName, componentName, location);
          } catch (ex) {
            error = ex;
          }
          if (error instanceof Error) {
            var addendum = getDeclarationErrorAddendum(this);
            if (location === ReactPropTypeLocations.prop) {
              process.env.NODE_ENV !== 'production' ? warning(false, 'Failed Composite propType: %s%s', error.message, addendum) : undefined;
            } else {
              process.env.NODE_ENV !== 'production' ? warning(false, 'Failed Context Types: %s%s', error.message, addendum) : undefined;
            }
          }
        }
      }
    },
    receiveComponent: function(nextElement, transaction, nextContext) {
      var prevElement = this._currentElement;
      var prevContext = this._context;
      this._pendingElement = null;
      this.updateComponent(transaction, prevElement, nextElement, prevContext, nextContext);
    },
    performUpdateIfNecessary: function(transaction) {
      if (this._pendingElement != null) {
        ReactReconciler.receiveComponent(this, this._pendingElement || this._currentElement, transaction, this._context);
      }
      if (this._pendingStateQueue !== null || this._pendingForceUpdate) {
        this.updateComponent(transaction, this._currentElement, this._currentElement, this._context, this._context);
      }
    },
    updateComponent: function(transaction, prevParentElement, nextParentElement, prevUnmaskedContext, nextUnmaskedContext) {
      var inst = this._instance;
      var nextContext = this._context === nextUnmaskedContext ? inst.context : this._processContext(nextUnmaskedContext);
      var nextProps;
      if (prevParentElement === nextParentElement) {
        nextProps = nextParentElement.props;
      } else {
        nextProps = this._processProps(nextParentElement.props);
        if (inst.componentWillReceiveProps) {
          inst.componentWillReceiveProps(nextProps, nextContext);
        }
      }
      var nextState = this._processPendingState(nextProps, nextContext);
      var shouldUpdate = this._pendingForceUpdate || !inst.shouldComponentUpdate || inst.shouldComponentUpdate(nextProps, nextState, nextContext);
      if (process.env.NODE_ENV !== 'production') {
        process.env.NODE_ENV !== 'production' ? warning(typeof shouldUpdate !== 'undefined', '%s.shouldComponentUpdate(): Returned undefined instead of a ' + 'boolean value. Make sure to return true or false.', this.getName() || 'ReactCompositeComponent') : undefined;
      }
      if (shouldUpdate) {
        this._pendingForceUpdate = false;
        this._performComponentUpdate(nextParentElement, nextProps, nextState, nextContext, transaction, nextUnmaskedContext);
      } else {
        this._currentElement = nextParentElement;
        this._context = nextUnmaskedContext;
        inst.props = nextProps;
        inst.state = nextState;
        inst.context = nextContext;
      }
    },
    _processPendingState: function(props, context) {
      var inst = this._instance;
      var queue = this._pendingStateQueue;
      var replace = this._pendingReplaceState;
      this._pendingReplaceState = false;
      this._pendingStateQueue = null;
      if (!queue) {
        return inst.state;
      }
      if (replace && queue.length === 1) {
        return queue[0];
      }
      var nextState = assign({}, replace ? queue[0] : inst.state);
      for (var i = replace ? 1 : 0; i < queue.length; i++) {
        var partial = queue[i];
        assign(nextState, typeof partial === 'function' ? partial.call(inst, nextState, props, context) : partial);
      }
      return nextState;
    },
    _performComponentUpdate: function(nextElement, nextProps, nextState, nextContext, transaction, unmaskedContext) {
      var inst = this._instance;
      var hasComponentDidUpdate = Boolean(inst.componentDidUpdate);
      var prevProps;
      var prevState;
      var prevContext;
      if (hasComponentDidUpdate) {
        prevProps = inst.props;
        prevState = inst.state;
        prevContext = inst.context;
      }
      if (inst.componentWillUpdate) {
        inst.componentWillUpdate(nextProps, nextState, nextContext);
      }
      this._currentElement = nextElement;
      this._context = unmaskedContext;
      inst.props = nextProps;
      inst.state = nextState;
      inst.context = nextContext;
      this._updateRenderedComponent(transaction, unmaskedContext);
      if (hasComponentDidUpdate) {
        transaction.getReactMountReady().enqueue(inst.componentDidUpdate.bind(inst, prevProps, prevState, prevContext), inst);
      }
    },
    _updateRenderedComponent: function(transaction, context) {
      var prevComponentInstance = this._renderedComponent;
      var prevRenderedElement = prevComponentInstance._currentElement;
      var nextRenderedElement = this._renderValidatedComponent();
      if (shouldUpdateReactComponent(prevRenderedElement, nextRenderedElement)) {
        ReactReconciler.receiveComponent(prevComponentInstance, nextRenderedElement, transaction, this._processChildContext(context));
      } else {
        var thisID = this._rootNodeID;
        var prevComponentID = prevComponentInstance._rootNodeID;
        ReactReconciler.unmountComponent(prevComponentInstance);
        this._renderedComponent = this._instantiateReactComponent(nextRenderedElement);
        var nextMarkup = ReactReconciler.mountComponent(this._renderedComponent, thisID, transaction, this._processChildContext(context));
        this._replaceNodeWithMarkupByID(prevComponentID, nextMarkup);
      }
    },
    _replaceNodeWithMarkupByID: function(prevComponentID, nextMarkup) {
      ReactComponentEnvironment.replaceNodeWithMarkupByID(prevComponentID, nextMarkup);
    },
    _renderValidatedComponentWithoutOwnerOrContext: function() {
      var inst = this._instance;
      var renderedComponent = inst.render();
      if (process.env.NODE_ENV !== 'production') {
        if (typeof renderedComponent === 'undefined' && inst.render._isMockFunction) {
          renderedComponent = null;
        }
      }
      return renderedComponent;
    },
    _renderValidatedComponent: function() {
      var renderedComponent;
      ReactCurrentOwner.current = this;
      try {
        renderedComponent = this._renderValidatedComponentWithoutOwnerOrContext();
      } finally {
        ReactCurrentOwner.current = null;
      }
      !(renderedComponent === null || renderedComponent === false || ReactElement.isValidElement(renderedComponent)) ? process.env.NODE_ENV !== 'production' ? invariant(false, '%s.render(): A valid ReactComponent must be returned. You may have ' + 'returned undefined, an array or some other invalid object.', this.getName() || 'ReactCompositeComponent') : invariant(false) : undefined;
      return renderedComponent;
    },
    attachRef: function(ref, component) {
      var inst = this.getPublicInstance();
      !(inst != null) ? process.env.NODE_ENV !== 'production' ? invariant(false, 'Stateless function components cannot have refs.') : invariant(false) : undefined;
      var publicComponentInstance = component.getPublicInstance();
      if (process.env.NODE_ENV !== 'production') {
        var componentName = component && component.getName ? component.getName() : 'a component';
        process.env.NODE_ENV !== 'production' ? warning(publicComponentInstance != null, 'Stateless function components cannot be given refs ' + '(See ref "%s" in %s created by %s). ' + 'Attempts to access this ref will fail.', ref, componentName, this.getName()) : undefined;
      }
      var refs = inst.refs === emptyObject ? inst.refs = {} : inst.refs;
      refs[ref] = publicComponentInstance;
    },
    detachRef: function(ref) {
      var refs = this.getPublicInstance().refs;
      delete refs[ref];
    },
    getName: function() {
      var type = this._currentElement.type;
      var constructor = this._instance && this._instance.constructor;
      return type.displayName || constructor && constructor.displayName || type.name || constructor && constructor.name || null;
    },
    getPublicInstance: function() {
      var inst = this._instance;
      if (inst instanceof StatelessComponent) {
        return null;
      }
      return inst;
    },
    _instantiateReactComponent: null
  };
  ReactPerf.measureMethods(ReactCompositeComponentMixin, 'ReactCompositeComponent', {
    mountComponent: 'mountComponent',
    updateComponent: 'updateComponent',
    _renderValidatedComponent: '_renderValidatedComponent'
  });
  var ReactCompositeComponent = {Mixin: ReactCompositeComponentMixin};
  module.exports = ReactCompositeComponent;
  return module.exports;
});

$__System.registerDynamic("1b", ["3"], true, function($__require, exports, module) {
  "use strict";
  var process = $__require("3");
  var define,
      global = this,
      GLOBAL = this;
  var ReactCurrentOwner = {current: null};
  module.exports = ReactCurrentOwner;
  return module.exports;
});

$__System.registerDynamic("1c", ["3"], true, function($__require, exports, module) {
  "use strict";
  var process = $__require("3");
  var define,
      global = this,
      GLOBAL = this;
  var canDefineProperty = false;
  if (process.env.NODE_ENV !== 'production') {
    try {
      Object.defineProperty({}, 'x', {get: function() {}});
      canDefineProperty = true;
    } catch (x) {}
  }
  module.exports = canDefineProperty;
  return module.exports;
});

$__System.registerDynamic("c", ["1b", "8", "1c", "3"], true, function($__require, exports, module) {
  "use strict";
  var process = $__require("3");
  var define,
      global = this,
      GLOBAL = this;
  var ReactCurrentOwner = $__require('1b');
  var assign = $__require('8');
  var canDefineProperty = $__require('1c');
  var REACT_ELEMENT_TYPE = typeof Symbol === 'function' && Symbol['for'] && Symbol['for']('react.element') || 0xeac7;
  var RESERVED_PROPS = {
    key: true,
    ref: true,
    __self: true,
    __source: true
  };
  var ReactElement = function(type, key, ref, self, source, owner, props) {
    var element = {
      $$typeof: REACT_ELEMENT_TYPE,
      type: type,
      key: key,
      ref: ref,
      props: props,
      _owner: owner
    };
    if (process.env.NODE_ENV !== 'production') {
      element._store = {};
      if (canDefineProperty) {
        Object.defineProperty(element._store, 'validated', {
          configurable: false,
          enumerable: false,
          writable: true,
          value: false
        });
        Object.defineProperty(element, '_self', {
          configurable: false,
          enumerable: false,
          writable: false,
          value: self
        });
        Object.defineProperty(element, '_source', {
          configurable: false,
          enumerable: false,
          writable: false,
          value: source
        });
      } else {
        element._store.validated = false;
        element._self = self;
        element._source = source;
      }
      Object.freeze(element.props);
      Object.freeze(element);
    }
    return element;
  };
  ReactElement.createElement = function(type, config, children) {
    var propName;
    var props = {};
    var key = null;
    var ref = null;
    var self = null;
    var source = null;
    if (config != null) {
      ref = config.ref === undefined ? null : config.ref;
      key = config.key === undefined ? null : '' + config.key;
      self = config.__self === undefined ? null : config.__self;
      source = config.__source === undefined ? null : config.__source;
      for (propName in config) {
        if (config.hasOwnProperty(propName) && !RESERVED_PROPS.hasOwnProperty(propName)) {
          props[propName] = config[propName];
        }
      }
    }
    var childrenLength = arguments.length - 2;
    if (childrenLength === 1) {
      props.children = children;
    } else if (childrenLength > 1) {
      var childArray = Array(childrenLength);
      for (var i = 0; i < childrenLength; i++) {
        childArray[i] = arguments[i + 2];
      }
      props.children = childArray;
    }
    if (type && type.defaultProps) {
      var defaultProps = type.defaultProps;
      for (propName in defaultProps) {
        if (typeof props[propName] === 'undefined') {
          props[propName] = defaultProps[propName];
        }
      }
    }
    return ReactElement(type, key, ref, self, source, ReactCurrentOwner.current, props);
  };
  ReactElement.createFactory = function(type) {
    var factory = ReactElement.createElement.bind(null, type);
    factory.type = type;
    return factory;
  };
  ReactElement.cloneAndReplaceKey = function(oldElement, newKey) {
    var newElement = ReactElement(oldElement.type, newKey, oldElement.ref, oldElement._self, oldElement._source, oldElement._owner, oldElement.props);
    return newElement;
  };
  ReactElement.cloneAndReplaceProps = function(oldElement, newProps) {
    var newElement = ReactElement(oldElement.type, oldElement.key, oldElement.ref, oldElement._self, oldElement._source, oldElement._owner, newProps);
    if (process.env.NODE_ENV !== 'production') {
      newElement._store.validated = oldElement._store.validated;
    }
    return newElement;
  };
  ReactElement.cloneElement = function(element, config, children) {
    var propName;
    var props = assign({}, element.props);
    var key = element.key;
    var ref = element.ref;
    var self = element._self;
    var source = element._source;
    var owner = element._owner;
    if (config != null) {
      if (config.ref !== undefined) {
        ref = config.ref;
        owner = ReactCurrentOwner.current;
      }
      if (config.key !== undefined) {
        key = '' + config.key;
      }
      for (propName in config) {
        if (config.hasOwnProperty(propName) && !RESERVED_PROPS.hasOwnProperty(propName)) {
          props[propName] = config[propName];
        }
      }
    }
    var childrenLength = arguments.length - 2;
    if (childrenLength === 1) {
      props.children = children;
    } else if (childrenLength > 1) {
      var childArray = Array(childrenLength);
      for (var i = 0; i < childrenLength; i++) {
        childArray[i] = arguments[i + 2];
      }
      props.children = childArray;
    }
    return ReactElement(element.type, key, ref, self, source, owner, props);
  };
  ReactElement.isValidElement = function(object) {
    return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
  };
  module.exports = ReactElement;
  return module.exports;
});

$__System.registerDynamic("9c", ["3"], true, function($__require, exports, module) {
  "use strict";
  var process = $__require("3");
  var define,
      global = this,
      GLOBAL = this;
  var nullComponentIDsRegistry = {};
  function isNullComponentID(id) {
    return !!nullComponentIDsRegistry[id];
  }
  function registerNullComponentID(id) {
    nullComponentIDsRegistry[id] = true;
  }
  function deregisterNullComponentID(id) {
    delete nullComponentIDsRegistry[id];
  }
  var ReactEmptyComponentRegistry = {
    isNullComponentID: isNullComponentID,
    registerNullComponentID: registerNullComponentID,
    deregisterNullComponentID: deregisterNullComponentID
  };
  module.exports = ReactEmptyComponentRegistry;
  return module.exports;
});

$__System.registerDynamic("9d", ["12", "3"], true, function($__require, exports, module) {
  "use strict";
  var process = $__require("3");
  var define,
      global = this,
      GLOBAL = this;
  var invariant = $__require('12');
  var ReactOwner = {
    isValidOwner: function(object) {
      return !!(object && typeof object.attachRef === 'function' && typeof object.detachRef === 'function');
    },
    addComponentAsRefTo: function(component, ref, owner) {
      !ReactOwner.isValidOwner(owner) ? process.env.NODE_ENV !== 'production' ? invariant(false, 'addComponentAsRefTo(...): Only a ReactOwner can have refs. You might ' + 'be adding a ref to a component that was not created inside a component\'s ' + '`render` method, or you have multiple copies of React loaded ' + '(details: https://fb.me/react-refs-must-have-owner).') : invariant(false) : undefined;
      owner.attachRef(ref, component);
    },
    removeComponentAsRefFrom: function(component, ref, owner) {
      !ReactOwner.isValidOwner(owner) ? process.env.NODE_ENV !== 'production' ? invariant(false, 'removeComponentAsRefFrom(...): Only a ReactOwner can have refs. You might ' + 'be removing a ref to a component that was not created inside a component\'s ' + '`render` method, or you have multiple copies of React loaded ' + '(details: https://fb.me/react-refs-must-have-owner).') : invariant(false) : undefined;
      if (owner.getPublicInstance().refs[ref] === component.getPublicInstance()) {
        owner.detachRef(ref);
      }
    }
  };
  module.exports = ReactOwner;
  return module.exports;
});

$__System.registerDynamic("9e", ["9d", "3"], true, function($__require, exports, module) {
  "use strict";
  var process = $__require("3");
  var define,
      global = this,
      GLOBAL = this;
  var ReactOwner = $__require('9d');
  var ReactRef = {};
  function attachRef(ref, component, owner) {
    if (typeof ref === 'function') {
      ref(component.getPublicInstance());
    } else {
      ReactOwner.addComponentAsRefTo(component, ref, owner);
    }
  }
  function detachRef(ref, component, owner) {
    if (typeof ref === 'function') {
      ref(null);
    } else {
      ReactOwner.removeComponentAsRefFrom(component, ref, owner);
    }
  }
  ReactRef.attachRefs = function(instance, element) {
    if (element === null || element === false) {
      return;
    }
    var ref = element.ref;
    if (ref != null) {
      attachRef(ref, instance, element._owner);
    }
  };
  ReactRef.shouldUpdateRefs = function(prevElement, nextElement) {
    var prevEmpty = prevElement === null || prevElement === false;
    var nextEmpty = nextElement === null || nextElement === false;
    return (prevEmpty || nextEmpty || nextElement._owner !== prevElement._owner || nextElement.ref !== prevElement.ref);
  };
  ReactRef.detachRefs = function(instance, element) {
    if (element === null || element === false) {
      return;
    }
    var ref = element.ref;
    if (ref != null) {
      detachRef(ref, instance, element._owner);
    }
  };
  module.exports = ReactRef;
  return module.exports;
});

$__System.registerDynamic("57", ["9e", "3"], true, function($__require, exports, module) {
  "use strict";
  var process = $__require("3");
  var define,
      global = this,
      GLOBAL = this;
  var ReactRef = $__require('9e');
  function attachRefs() {
    ReactRef.attachRefs(this, this._currentElement);
  }
  var ReactReconciler = {
    mountComponent: function(internalInstance, rootID, transaction, context) {
      var markup = internalInstance.mountComponent(rootID, transaction, context);
      if (internalInstance._currentElement && internalInstance._currentElement.ref != null) {
        transaction.getReactMountReady().enqueue(attachRefs, internalInstance);
      }
      return markup;
    },
    unmountComponent: function(internalInstance) {
      ReactRef.detachRefs(internalInstance, internalInstance._currentElement);
      internalInstance.unmountComponent();
    },
    receiveComponent: function(internalInstance, nextElement, transaction, context) {
      var prevElement = internalInstance._currentElement;
      if (nextElement === prevElement && context === internalInstance._context) {
        return;
      }
      var refsChanged = ReactRef.shouldUpdateRefs(prevElement, nextElement);
      if (refsChanged) {
        ReactRef.detachRefs(internalInstance, prevElement);
      }
      internalInstance.receiveComponent(nextElement, transaction, context);
      if (refsChanged && internalInstance._currentElement && internalInstance._currentElement.ref != null) {
        transaction.getReactMountReady().enqueue(attachRefs, internalInstance);
      }
    },
    performUpdateIfNecessary: function(internalInstance, transaction) {
      internalInstance.performUpdateIfNecessary(transaction);
    }
  };
  module.exports = ReactReconciler;
  return module.exports;
});

$__System.registerDynamic("75", ["c", "9c", "57", "8", "3"], true, function($__require, exports, module) {
  "use strict";
  var process = $__require("3");
  var define,
      global = this,
      GLOBAL = this;
  var ReactElement = $__require('c');
  var ReactEmptyComponentRegistry = $__require('9c');
  var ReactReconciler = $__require('57');
  var assign = $__require('8');
  var placeholderElement;
  var ReactEmptyComponentInjection = {injectEmptyComponent: function(component) {
      placeholderElement = ReactElement.createElement(component);
    }};
  var ReactEmptyComponent = function(instantiate) {
    this._currentElement = null;
    this._rootNodeID = null;
    this._renderedComponent = instantiate(placeholderElement);
  };
  assign(ReactEmptyComponent.prototype, {
    construct: function(element) {},
    mountComponent: function(rootID, transaction, context) {
      ReactEmptyComponentRegistry.registerNullComponentID(rootID);
      this._rootNodeID = rootID;
      return ReactReconciler.mountComponent(this._renderedComponent, rootID, transaction, context);
    },
    receiveComponent: function() {},
    unmountComponent: function(rootID, transaction, context) {
      ReactReconciler.unmountComponent(this._renderedComponent);
      ReactEmptyComponentRegistry.deregisterNullComponentID(this._rootNodeID);
      this._rootNodeID = null;
      this._renderedComponent = null;
    }
  });
  ReactEmptyComponent.injection = ReactEmptyComponentInjection;
  module.exports = ReactEmptyComponent;
  return module.exports;
});

$__System.registerDynamic("76", ["8", "12", "3"], true, function($__require, exports, module) {
  "use strict";
  var process = $__require("3");
  var define,
      global = this,
      GLOBAL = this;
  var assign = $__require('8');
  var invariant = $__require('12');
  var autoGenerateWrapperClass = null;
  var genericComponentClass = null;
  var tagToComponentClass = {};
  var textComponentClass = null;
  var ReactNativeComponentInjection = {
    injectGenericComponentClass: function(componentClass) {
      genericComponentClass = componentClass;
    },
    injectTextComponentClass: function(componentClass) {
      textComponentClass = componentClass;
    },
    injectComponentClasses: function(componentClasses) {
      assign(tagToComponentClass, componentClasses);
    }
  };
  function getComponentClassForElement(element) {
    if (typeof element.type === 'function') {
      return element.type;
    }
    var tag = element.type;
    var componentClass = tagToComponentClass[tag];
    if (componentClass == null) {
      tagToComponentClass[tag] = componentClass = autoGenerateWrapperClass(tag);
    }
    return componentClass;
  }
  function createInternalComponent(element) {
    !genericComponentClass ? process.env.NODE_ENV !== 'production' ? invariant(false, 'There is no registered component for the tag %s', element.type) : invariant(false) : undefined;
    return new genericComponentClass(element.type, element.props);
  }
  function createInstanceForText(text) {
    return new textComponentClass(text);
  }
  function isTextComponent(component) {
    return component instanceof textComponentClass;
  }
  var ReactNativeComponent = {
    getComponentClassForElement: getComponentClassForElement,
    createInternalComponent: createInternalComponent,
    createInstanceForText: createInstanceForText,
    isTextComponent: isTextComponent,
    injection: ReactNativeComponentInjection
  };
  module.exports = ReactNativeComponent;
  return module.exports;
});

$__System.registerDynamic("10", ["9b", "75", "76", "8", "12", "1e", "3"], true, function($__require, exports, module) {
  "use strict";
  var process = $__require("3");
  var define,
      global = this,
      GLOBAL = this;
  var ReactCompositeComponent = $__require('9b');
  var ReactEmptyComponent = $__require('75');
  var ReactNativeComponent = $__require('76');
  var assign = $__require('8');
  var invariant = $__require('12');
  var warning = $__require('1e');
  var ReactCompositeComponentWrapper = function() {};
  assign(ReactCompositeComponentWrapper.prototype, ReactCompositeComponent.Mixin, {_instantiateReactComponent: instantiateReactComponent});
  function getDeclarationErrorAddendum(owner) {
    if (owner) {
      var name = owner.getName();
      if (name) {
        return ' Check the render method of `' + name + '`.';
      }
    }
    return '';
  }
  function isInternalComponentType(type) {
    return typeof type === 'function' && typeof type.prototype !== 'undefined' && typeof type.prototype.mountComponent === 'function' && typeof type.prototype.receiveComponent === 'function';
  }
  function instantiateReactComponent(node) {
    var instance;
    if (node === null || node === false) {
      instance = new ReactEmptyComponent(instantiateReactComponent);
    } else if (typeof node === 'object') {
      var element = node;
      !(element && (typeof element.type === 'function' || typeof element.type === 'string')) ? process.env.NODE_ENV !== 'production' ? invariant(false, 'Element type is invalid: expected a string (for built-in components) ' + 'or a class/function (for composite components) but got: %s.%s', element.type == null ? element.type : typeof element.type, getDeclarationErrorAddendum(element._owner)) : invariant(false) : undefined;
      if (typeof element.type === 'string') {
        instance = ReactNativeComponent.createInternalComponent(element);
      } else if (isInternalComponentType(element.type)) {
        instance = new element.type(element);
      } else {
        instance = new ReactCompositeComponentWrapper();
      }
    } else if (typeof node === 'string' || typeof node === 'number') {
      instance = ReactNativeComponent.createInstanceForText(node);
    } else {
      !false ? process.env.NODE_ENV !== 'production' ? invariant(false, 'Encountered invalid React node of type %s', typeof node) : invariant(false) : undefined;
    }
    if (process.env.NODE_ENV !== 'production') {
      process.env.NODE_ENV !== 'production' ? warning(typeof instance.construct === 'function' && typeof instance.mountComponent === 'function' && typeof instance.receiveComponent === 'function' && typeof instance.unmountComponent === 'function', 'Only React Components can be mounted.') : undefined;
    }
    instance.construct(node);
    instance._mountIndex = 0;
    instance._mountImage = null;
    if (process.env.NODE_ENV !== 'production') {
      instance._isOwnerNecessary = false;
      instance._warnedAboutRefsInRender = false;
    }
    if (process.env.NODE_ENV !== 'production') {
      if (Object.preventExtensions) {
        Object.preventExtensions(instance);
      }
    }
    return instance;
  }
  module.exports = instantiateReactComponent;
  return module.exports;
});

$__System.registerDynamic("12", ["3"], true, function($__require, exports, module) {
  "use strict";
  var process = $__require("3");
  var define,
      global = this,
      GLOBAL = this;
  function invariant(condition, format, a, b, c, d, e, f) {
    if (process.env.NODE_ENV !== 'production') {
      if (format === undefined) {
        throw new Error('invariant requires an error message argument');
      }
    }
    if (!condition) {
      var error;
      if (format === undefined) {
        error = new Error('Minified exception occurred; use the non-minified dev environment ' + 'for the full error message and additional helpful warnings.');
      } else {
        var args = [a, b, c, d, e, f];
        var argIndex = 0;
        error = new Error(format.replace(/%s/g, function() {
          return args[argIndex++];
        }));
        error.name = 'Invariant Violation';
      }
      error.framesToPop = 1;
      throw error;
    }
  }
  module.exports = invariant;
  return module.exports;
});

$__System.registerDynamic("63", ["32", "3"], true, function($__require, exports, module) {
  "use strict";
  var process = $__require("3");
  var define,
      global = this,
      GLOBAL = this;
  var ExecutionEnvironment = $__require('32');
  var WHITESPACE_TEST = /^[ \r\n\t\f]/;
  var NONVISIBLE_TEST = /<(!--|link|noscript|meta|script|style)[ \r\n\t\f\/>]/;
  var setInnerHTML = function(node, html) {
    node.innerHTML = html;
  };
  if (typeof MSApp !== 'undefined' && MSApp.execUnsafeLocalFunction) {
    setInnerHTML = function(node, html) {
      MSApp.execUnsafeLocalFunction(function() {
        node.innerHTML = html;
      });
    };
  }
  if (ExecutionEnvironment.canUseDOM) {
    var testElement = document.createElement('div');
    testElement.innerHTML = ' ';
    if (testElement.innerHTML === '') {
      setInnerHTML = function(node, html) {
        if (node.parentNode) {
          node.parentNode.replaceChild(node, node);
        }
        if (WHITESPACE_TEST.test(html) || html[0] === '<' && NONVISIBLE_TEST.test(html)) {
          node.innerHTML = String.fromCharCode(0xFEFF) + html;
          var textNode = node.firstChild;
          if (textNode.data.length === 1) {
            node.removeChild(textNode);
          } else {
            textNode.deleteData(0, 1);
          }
        } else {
          node.innerHTML = html;
        }
      };
    }
  }
  module.exports = setInnerHTML;
  return module.exports;
});

$__System.registerDynamic("58", ["3"], true, function($__require, exports, module) {
  "use strict";
  var process = $__require("3");
  var define,
      global = this,
      GLOBAL = this;
  function shouldUpdateReactComponent(prevElement, nextElement) {
    var prevEmpty = prevElement === null || prevElement === false;
    var nextEmpty = nextElement === null || nextElement === false;
    if (prevEmpty || nextEmpty) {
      return prevEmpty === nextEmpty;
    }
    var prevType = typeof prevElement;
    var nextType = typeof nextElement;
    if (prevType === 'string' || prevType === 'number') {
      return nextType === 'string' || nextType === 'number';
    } else {
      return nextType === 'object' && prevElement.type === nextElement.type && prevElement.key === nextElement.key;
    }
    return false;
  }
  module.exports = shouldUpdateReactComponent;
  return module.exports;
});

$__System.registerDynamic("8", ["3"], true, function($__require, exports, module) {
  "use strict";
  var process = $__require("3");
  var define,
      global = this,
      GLOBAL = this;
  function assign(target, sources) {
    if (target == null) {
      throw new TypeError('Object.assign target cannot be null or undefined');
    }
    var to = Object(target);
    var hasOwnProperty = Object.prototype.hasOwnProperty;
    for (var nextIndex = 1; nextIndex < arguments.length; nextIndex++) {
      var nextSource = arguments[nextIndex];
      if (nextSource == null) {
        continue;
      }
      var from = Object(nextSource);
      for (var key in from) {
        if (hasOwnProperty.call(from, key)) {
          to[key] = from[key];
        }
      }
    }
    return to;
  }
  module.exports = assign;
  return module.exports;
});

$__System.registerDynamic("65", ["8", "9", "1e", "3"], true, function($__require, exports, module) {
  "use strict";
  var process = $__require("3");
  var define,
      global = this,
      GLOBAL = this;
  var assign = $__require('8');
  var emptyFunction = $__require('9');
  var warning = $__require('1e');
  var validateDOMNesting = emptyFunction;
  if (process.env.NODE_ENV !== 'production') {
    var specialTags = ['address', 'applet', 'area', 'article', 'aside', 'base', 'basefont', 'bgsound', 'blockquote', 'body', 'br', 'button', 'caption', 'center', 'col', 'colgroup', 'dd', 'details', 'dir', 'div', 'dl', 'dt', 'embed', 'fieldset', 'figcaption', 'figure', 'footer', 'form', 'frame', 'frameset', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'head', 'header', 'hgroup', 'hr', 'html', 'iframe', 'img', 'input', 'isindex', 'li', 'link', 'listing', 'main', 'marquee', 'menu', 'menuitem', 'meta', 'nav', 'noembed', 'noframes', 'noscript', 'object', 'ol', 'p', 'param', 'plaintext', 'pre', 'script', 'section', 'select', 'source', 'style', 'summary', 'table', 'tbody', 'td', 'template', 'textarea', 'tfoot', 'th', 'thead', 'title', 'tr', 'track', 'ul', 'wbr', 'xmp'];
    var inScopeTags = ['applet', 'caption', 'html', 'table', 'td', 'th', 'marquee', 'object', 'template', 'foreignObject', 'desc', 'title'];
    var buttonScopeTags = inScopeTags.concat(['button']);
    var impliedEndTags = ['dd', 'dt', 'li', 'option', 'optgroup', 'p', 'rp', 'rt'];
    var emptyAncestorInfo = {
      parentTag: null,
      formTag: null,
      aTagInScope: null,
      buttonTagInScope: null,
      nobrTagInScope: null,
      pTagInButtonScope: null,
      listItemTagAutoclosing: null,
      dlItemTagAutoclosing: null
    };
    var updatedAncestorInfo = function(oldInfo, tag, instance) {
      var ancestorInfo = assign({}, oldInfo || emptyAncestorInfo);
      var info = {
        tag: tag,
        instance: instance
      };
      if (inScopeTags.indexOf(tag) !== -1) {
        ancestorInfo.aTagInScope = null;
        ancestorInfo.buttonTagInScope = null;
        ancestorInfo.nobrTagInScope = null;
      }
      if (buttonScopeTags.indexOf(tag) !== -1) {
        ancestorInfo.pTagInButtonScope = null;
      }
      if (specialTags.indexOf(tag) !== -1 && tag !== 'address' && tag !== 'div' && tag !== 'p') {
        ancestorInfo.listItemTagAutoclosing = null;
        ancestorInfo.dlItemTagAutoclosing = null;
      }
      ancestorInfo.parentTag = info;
      if (tag === 'form') {
        ancestorInfo.formTag = info;
      }
      if (tag === 'a') {
        ancestorInfo.aTagInScope = info;
      }
      if (tag === 'button') {
        ancestorInfo.buttonTagInScope = info;
      }
      if (tag === 'nobr') {
        ancestorInfo.nobrTagInScope = info;
      }
      if (tag === 'p') {
        ancestorInfo.pTagInButtonScope = info;
      }
      if (tag === 'li') {
        ancestorInfo.listItemTagAutoclosing = info;
      }
      if (tag === 'dd' || tag === 'dt') {
        ancestorInfo.dlItemTagAutoclosing = info;
      }
      return ancestorInfo;
    };
    var isTagValidWithParent = function(tag, parentTag) {
      switch (parentTag) {
        case 'select':
          return tag === 'option' || tag === 'optgroup' || tag === '#text';
        case 'optgroup':
          return tag === 'option' || tag === '#text';
        case 'option':
          return tag === '#text';
        case 'tr':
          return tag === 'th' || tag === 'td' || tag === 'style' || tag === 'script' || tag === 'template';
        case 'tbody':
        case 'thead':
        case 'tfoot':
          return tag === 'tr' || tag === 'style' || tag === 'script' || tag === 'template';
        case 'colgroup':
          return tag === 'col' || tag === 'template';
        case 'table':
          return tag === 'caption' || tag === 'colgroup' || tag === 'tbody' || tag === 'tfoot' || tag === 'thead' || tag === 'style' || tag === 'script' || tag === 'template';
        case 'head':
          return tag === 'base' || tag === 'basefont' || tag === 'bgsound' || tag === 'link' || tag === 'meta' || tag === 'title' || tag === 'noscript' || tag === 'noframes' || tag === 'style' || tag === 'script' || tag === 'template';
        case 'html':
          return tag === 'head' || tag === 'body';
      }
      switch (tag) {
        case 'h1':
        case 'h2':
        case 'h3':
        case 'h4':
        case 'h5':
        case 'h6':
          return parentTag !== 'h1' && parentTag !== 'h2' && parentTag !== 'h3' && parentTag !== 'h4' && parentTag !== 'h5' && parentTag !== 'h6';
        case 'rp':
        case 'rt':
          return impliedEndTags.indexOf(parentTag) === -1;
        case 'caption':
        case 'col':
        case 'colgroup':
        case 'frame':
        case 'head':
        case 'tbody':
        case 'td':
        case 'tfoot':
        case 'th':
        case 'thead':
        case 'tr':
          return parentTag == null;
      }
      return true;
    };
    var findInvalidAncestorForTag = function(tag, ancestorInfo) {
      switch (tag) {
        case 'address':
        case 'article':
        case 'aside':
        case 'blockquote':
        case 'center':
        case 'details':
        case 'dialog':
        case 'dir':
        case 'div':
        case 'dl':
        case 'fieldset':
        case 'figcaption':
        case 'figure':
        case 'footer':
        case 'header':
        case 'hgroup':
        case 'main':
        case 'menu':
        case 'nav':
        case 'ol':
        case 'p':
        case 'section':
        case 'summary':
        case 'ul':
        case 'pre':
        case 'listing':
        case 'table':
        case 'hr':
        case 'xmp':
        case 'h1':
        case 'h2':
        case 'h3':
        case 'h4':
        case 'h5':
        case 'h6':
          return ancestorInfo.pTagInButtonScope;
        case 'form':
          return ancestorInfo.formTag || ancestorInfo.pTagInButtonScope;
        case 'li':
          return ancestorInfo.listItemTagAutoclosing;
        case 'dd':
        case 'dt':
          return ancestorInfo.dlItemTagAutoclosing;
        case 'button':
          return ancestorInfo.buttonTagInScope;
        case 'a':
          return ancestorInfo.aTagInScope;
        case 'nobr':
          return ancestorInfo.nobrTagInScope;
      }
      return null;
    };
    var findOwnerStack = function(instance) {
      if (!instance) {
        return [];
      }
      var stack = [];
      do {
        stack.push(instance);
      } while (instance = instance._currentElement._owner);
      stack.reverse();
      return stack;
    };
    var didWarn = {};
    validateDOMNesting = function(childTag, childInstance, ancestorInfo) {
      ancestorInfo = ancestorInfo || emptyAncestorInfo;
      var parentInfo = ancestorInfo.parentTag;
      var parentTag = parentInfo && parentInfo.tag;
      var invalidParent = isTagValidWithParent(childTag, parentTag) ? null : parentInfo;
      var invalidAncestor = invalidParent ? null : findInvalidAncestorForTag(childTag, ancestorInfo);
      var problematic = invalidParent || invalidAncestor;
      if (problematic) {
        var ancestorTag = problematic.tag;
        var ancestorInstance = problematic.instance;
        var childOwner = childInstance && childInstance._currentElement._owner;
        var ancestorOwner = ancestorInstance && ancestorInstance._currentElement._owner;
        var childOwners = findOwnerStack(childOwner);
        var ancestorOwners = findOwnerStack(ancestorOwner);
        var minStackLen = Math.min(childOwners.length, ancestorOwners.length);
        var i;
        var deepestCommon = -1;
        for (i = 0; i < minStackLen; i++) {
          if (childOwners[i] === ancestorOwners[i]) {
            deepestCommon = i;
          } else {
            break;
          }
        }
        var UNKNOWN = '(unknown)';
        var childOwnerNames = childOwners.slice(deepestCommon + 1).map(function(inst) {
          return inst.getName() || UNKNOWN;
        });
        var ancestorOwnerNames = ancestorOwners.slice(deepestCommon + 1).map(function(inst) {
          return inst.getName() || UNKNOWN;
        });
        var ownerInfo = [].concat(deepestCommon !== -1 ? childOwners[deepestCommon].getName() || UNKNOWN : [], ancestorOwnerNames, ancestorTag, invalidAncestor ? ['...'] : [], childOwnerNames, childTag).join(' > ');
        var warnKey = !!invalidParent + '|' + childTag + '|' + ancestorTag + '|' + ownerInfo;
        if (didWarn[warnKey]) {
          return;
        }
        didWarn[warnKey] = true;
        if (invalidParent) {
          var info = '';
          if (ancestorTag === 'table' && childTag === 'tr') {
            info += ' Add a <tbody> to your code to match the DOM tree generated by ' + 'the browser.';
          }
          process.env.NODE_ENV !== 'production' ? warning(false, 'validateDOMNesting(...): <%s> cannot appear as a child of <%s>. ' + 'See %s.%s', childTag, ancestorTag, ownerInfo, info) : undefined;
        } else {
          process.env.NODE_ENV !== 'production' ? warning(false, 'validateDOMNesting(...): <%s> cannot appear as a descendant of ' + '<%s>. See %s.', childTag, ancestorTag, ownerInfo) : undefined;
        }
      }
    };
    validateDOMNesting.ancestorInfoContextKey = '__validateDOMNesting_ancestorInfo$' + Math.random().toString(36).slice(2);
    validateDOMNesting.updatedAncestorInfo = updatedAncestorInfo;
    validateDOMNesting.isTagValidInContext = function(tag, ancestorInfo) {
      ancestorInfo = ancestorInfo || emptyAncestorInfo;
      var parentInfo = ancestorInfo.parentTag;
      var parentTag = parentInfo && parentInfo.tag;
      return isTagValidWithParent(tag, parentTag) && !findInvalidAncestorForTag(tag, ancestorInfo);
    };
  }
  module.exports = validateDOMNesting;
  return module.exports;
});

$__System.registerDynamic("3d", ["3f", "5f", "1b", "79", "c", "9c", "d", "41", "e", "4d", "57", "61", "f", "8", "11", "7d", "10", "12", "63", "58", "65", "1e", "3"], true, function($__require, exports, module) {
  "use strict";
  var process = $__require("3");
  var define,
      global = this,
      GLOBAL = this;
  var DOMProperty = $__require('3f');
  var ReactBrowserEventEmitter = $__require('5f');
  var ReactCurrentOwner = $__require('1b');
  var ReactDOMFeatureFlags = $__require('79');
  var ReactElement = $__require('c');
  var ReactEmptyComponentRegistry = $__require('9c');
  var ReactInstanceHandles = $__require('d');
  var ReactInstanceMap = $__require('41');
  var ReactMarkupChecksum = $__require('e');
  var ReactPerf = $__require('4d');
  var ReactReconciler = $__require('57');
  var ReactUpdateQueue = $__require('61');
  var ReactUpdates = $__require('f');
  var assign = $__require('8');
  var emptyObject = $__require('11');
  var containsNode = $__require('7d');
  var instantiateReactComponent = $__require('10');
  var invariant = $__require('12');
  var setInnerHTML = $__require('63');
  var shouldUpdateReactComponent = $__require('58');
  var validateDOMNesting = $__require('65');
  var warning = $__require('1e');
  var ATTR_NAME = DOMProperty.ID_ATTRIBUTE_NAME;
  var nodeCache = {};
  var ELEMENT_NODE_TYPE = 1;
  var DOC_NODE_TYPE = 9;
  var DOCUMENT_FRAGMENT_NODE_TYPE = 11;
  var ownerDocumentContextKey = '__ReactMount_ownerDocument$' + Math.random().toString(36).slice(2);
  var instancesByReactRootID = {};
  var containersByReactRootID = {};
  if (process.env.NODE_ENV !== 'production') {
    var rootElementsByReactRootID = {};
  }
  var findComponentRootReusableArray = [];
  function firstDifferenceIndex(string1, string2) {
    var minLen = Math.min(string1.length, string2.length);
    for (var i = 0; i < minLen; i++) {
      if (string1.charAt(i) !== string2.charAt(i)) {
        return i;
      }
    }
    return string1.length === string2.length ? -1 : minLen;
  }
  function getReactRootElementInContainer(container) {
    if (!container) {
      return null;
    }
    if (container.nodeType === DOC_NODE_TYPE) {
      return container.documentElement;
    } else {
      return container.firstChild;
    }
  }
  function getReactRootID(container) {
    var rootElement = getReactRootElementInContainer(container);
    return rootElement && ReactMount.getID(rootElement);
  }
  function getID(node) {
    var id = internalGetID(node);
    if (id) {
      if (nodeCache.hasOwnProperty(id)) {
        var cached = nodeCache[id];
        if (cached !== node) {
          !!isValid(cached, id) ? process.env.NODE_ENV !== 'production' ? invariant(false, 'ReactMount: Two valid but unequal nodes with the same `%s`: %s', ATTR_NAME, id) : invariant(false) : undefined;
          nodeCache[id] = node;
        }
      } else {
        nodeCache[id] = node;
      }
    }
    return id;
  }
  function internalGetID(node) {
    return node && node.getAttribute && node.getAttribute(ATTR_NAME) || '';
  }
  function setID(node, id) {
    var oldID = internalGetID(node);
    if (oldID !== id) {
      delete nodeCache[oldID];
    }
    node.setAttribute(ATTR_NAME, id);
    nodeCache[id] = node;
  }
  function getNode(id) {
    if (!nodeCache.hasOwnProperty(id) || !isValid(nodeCache[id], id)) {
      nodeCache[id] = ReactMount.findReactNodeByID(id);
    }
    return nodeCache[id];
  }
  function getNodeFromInstance(instance) {
    var id = ReactInstanceMap.get(instance)._rootNodeID;
    if (ReactEmptyComponentRegistry.isNullComponentID(id)) {
      return null;
    }
    if (!nodeCache.hasOwnProperty(id) || !isValid(nodeCache[id], id)) {
      nodeCache[id] = ReactMount.findReactNodeByID(id);
    }
    return nodeCache[id];
  }
  function isValid(node, id) {
    if (node) {
      !(internalGetID(node) === id) ? process.env.NODE_ENV !== 'production' ? invariant(false, 'ReactMount: Unexpected modification of `%s`', ATTR_NAME) : invariant(false) : undefined;
      var container = ReactMount.findReactContainerForID(id);
      if (container && containsNode(container, node)) {
        return true;
      }
    }
    return false;
  }
  function purgeID(id) {
    delete nodeCache[id];
  }
  var deepestNodeSoFar = null;
  function findDeepestCachedAncestorImpl(ancestorID) {
    var ancestor = nodeCache[ancestorID];
    if (ancestor && isValid(ancestor, ancestorID)) {
      deepestNodeSoFar = ancestor;
    } else {
      return false;
    }
  }
  function findDeepestCachedAncestor(targetID) {
    deepestNodeSoFar = null;
    ReactInstanceHandles.traverseAncestors(targetID, findDeepestCachedAncestorImpl);
    var foundNode = deepestNodeSoFar;
    deepestNodeSoFar = null;
    return foundNode;
  }
  function mountComponentIntoNode(componentInstance, rootID, container, transaction, shouldReuseMarkup, context) {
    if (ReactDOMFeatureFlags.useCreateElement) {
      context = assign({}, context);
      if (container.nodeType === DOC_NODE_TYPE) {
        context[ownerDocumentContextKey] = container;
      } else {
        context[ownerDocumentContextKey] = container.ownerDocument;
      }
    }
    if (process.env.NODE_ENV !== 'production') {
      if (context === emptyObject) {
        context = {};
      }
      var tag = container.nodeName.toLowerCase();
      context[validateDOMNesting.ancestorInfoContextKey] = validateDOMNesting.updatedAncestorInfo(null, tag, null);
    }
    var markup = ReactReconciler.mountComponent(componentInstance, rootID, transaction, context);
    componentInstance._renderedComponent._topLevelWrapper = componentInstance;
    ReactMount._mountImageIntoNode(markup, container, shouldReuseMarkup, transaction);
  }
  function batchedMountComponentIntoNode(componentInstance, rootID, container, shouldReuseMarkup, context) {
    var transaction = ReactUpdates.ReactReconcileTransaction.getPooled(shouldReuseMarkup);
    transaction.perform(mountComponentIntoNode, null, componentInstance, rootID, container, transaction, shouldReuseMarkup, context);
    ReactUpdates.ReactReconcileTransaction.release(transaction);
  }
  function unmountComponentFromNode(instance, container) {
    ReactReconciler.unmountComponent(instance);
    if (container.nodeType === DOC_NODE_TYPE) {
      container = container.documentElement;
    }
    while (container.lastChild) {
      container.removeChild(container.lastChild);
    }
  }
  function hasNonRootReactChild(node) {
    var reactRootID = getReactRootID(node);
    return reactRootID ? reactRootID !== ReactInstanceHandles.getReactRootIDFromNodeID(reactRootID) : false;
  }
  function findFirstReactDOMImpl(node) {
    for (; node && node.parentNode !== node; node = node.parentNode) {
      if (node.nodeType !== 1) {
        continue;
      }
      var nodeID = internalGetID(node);
      if (!nodeID) {
        continue;
      }
      var reactRootID = ReactInstanceHandles.getReactRootIDFromNodeID(nodeID);
      var current = node;
      var lastID;
      do {
        lastID = internalGetID(current);
        current = current.parentNode;
        if (current == null) {
          return null;
        }
      } while (lastID !== reactRootID);
      if (current === containersByReactRootID[reactRootID]) {
        return node;
      }
    }
    return null;
  }
  var TopLevelWrapper = function() {};
  TopLevelWrapper.prototype.isReactComponent = {};
  if (process.env.NODE_ENV !== 'production') {
    TopLevelWrapper.displayName = 'TopLevelWrapper';
  }
  TopLevelWrapper.prototype.render = function() {
    return this.props;
  };
  var ReactMount = {
    TopLevelWrapper: TopLevelWrapper,
    _instancesByReactRootID: instancesByReactRootID,
    scrollMonitor: function(container, renderCallback) {
      renderCallback();
    },
    _updateRootComponent: function(prevComponent, nextElement, container, callback) {
      ReactMount.scrollMonitor(container, function() {
        ReactUpdateQueue.enqueueElementInternal(prevComponent, nextElement);
        if (callback) {
          ReactUpdateQueue.enqueueCallbackInternal(prevComponent, callback);
        }
      });
      if (process.env.NODE_ENV !== 'production') {
        rootElementsByReactRootID[getReactRootID(container)] = getReactRootElementInContainer(container);
      }
      return prevComponent;
    },
    _registerComponent: function(nextComponent, container) {
      !(container && (container.nodeType === ELEMENT_NODE_TYPE || container.nodeType === DOC_NODE_TYPE || container.nodeType === DOCUMENT_FRAGMENT_NODE_TYPE)) ? process.env.NODE_ENV !== 'production' ? invariant(false, '_registerComponent(...): Target container is not a DOM element.') : invariant(false) : undefined;
      ReactBrowserEventEmitter.ensureScrollValueMonitoring();
      var reactRootID = ReactMount.registerContainer(container);
      instancesByReactRootID[reactRootID] = nextComponent;
      return reactRootID;
    },
    _renderNewRootComponent: function(nextElement, container, shouldReuseMarkup, context) {
      process.env.NODE_ENV !== 'production' ? warning(ReactCurrentOwner.current == null, '_renderNewRootComponent(): Render methods should be a pure function ' + 'of props and state; triggering nested component updates from ' + 'render is not allowed. If necessary, trigger nested updates in ' + 'componentDidUpdate. Check the render method of %s.', ReactCurrentOwner.current && ReactCurrentOwner.current.getName() || 'ReactCompositeComponent') : undefined;
      var componentInstance = instantiateReactComponent(nextElement, null);
      var reactRootID = ReactMount._registerComponent(componentInstance, container);
      ReactUpdates.batchedUpdates(batchedMountComponentIntoNode, componentInstance, reactRootID, container, shouldReuseMarkup, context);
      if (process.env.NODE_ENV !== 'production') {
        rootElementsByReactRootID[reactRootID] = getReactRootElementInContainer(container);
      }
      return componentInstance;
    },
    renderSubtreeIntoContainer: function(parentComponent, nextElement, container, callback) {
      !(parentComponent != null && parentComponent._reactInternalInstance != null) ? process.env.NODE_ENV !== 'production' ? invariant(false, 'parentComponent must be a valid React Component') : invariant(false) : undefined;
      return ReactMount._renderSubtreeIntoContainer(parentComponent, nextElement, container, callback);
    },
    _renderSubtreeIntoContainer: function(parentComponent, nextElement, container, callback) {
      !ReactElement.isValidElement(nextElement) ? process.env.NODE_ENV !== 'production' ? invariant(false, 'ReactDOM.render(): Invalid component element.%s', typeof nextElement === 'string' ? ' Instead of passing an element string, make sure to instantiate ' + 'it by passing it to React.createElement.' : typeof nextElement === 'function' ? ' Instead of passing a component class, make sure to instantiate ' + 'it by passing it to React.createElement.' : nextElement != null && nextElement.props !== undefined ? ' This may be caused by unintentionally loading two independent ' + 'copies of React.' : '') : invariant(false) : undefined;
      process.env.NODE_ENV !== 'production' ? warning(!container || !container.tagName || container.tagName.toUpperCase() !== 'BODY', 'render(): Rendering components directly into document.body is ' + 'discouraged, since its children are often manipulated by third-party ' + 'scripts and browser extensions. This may lead to subtle ' + 'reconciliation issues. Try rendering into a container element created ' + 'for your app.') : undefined;
      var nextWrappedElement = new ReactElement(TopLevelWrapper, null, null, null, null, null, nextElement);
      var prevComponent = instancesByReactRootID[getReactRootID(container)];
      if (prevComponent) {
        var prevWrappedElement = prevComponent._currentElement;
        var prevElement = prevWrappedElement.props;
        if (shouldUpdateReactComponent(prevElement, nextElement)) {
          var publicInst = prevComponent._renderedComponent.getPublicInstance();
          var updatedCallback = callback && function() {
            callback.call(publicInst);
          };
          ReactMount._updateRootComponent(prevComponent, nextWrappedElement, container, updatedCallback);
          return publicInst;
        } else {
          ReactMount.unmountComponentAtNode(container);
        }
      }
      var reactRootElement = getReactRootElementInContainer(container);
      var containerHasReactMarkup = reactRootElement && !!internalGetID(reactRootElement);
      var containerHasNonRootReactChild = hasNonRootReactChild(container);
      if (process.env.NODE_ENV !== 'production') {
        process.env.NODE_ENV !== 'production' ? warning(!containerHasNonRootReactChild, 'render(...): Replacing React-rendered children with a new root ' + 'component. If you intended to update the children of this node, ' + 'you should instead have the existing children update their state ' + 'and render the new components instead of calling ReactDOM.render.') : undefined;
        if (!containerHasReactMarkup || reactRootElement.nextSibling) {
          var rootElementSibling = reactRootElement;
          while (rootElementSibling) {
            if (internalGetID(rootElementSibling)) {
              process.env.NODE_ENV !== 'production' ? warning(false, 'render(): Target node has markup rendered by React, but there ' + 'are unrelated nodes as well. This is most commonly caused by ' + 'white-space inserted around server-rendered markup.') : undefined;
              break;
            }
            rootElementSibling = rootElementSibling.nextSibling;
          }
        }
      }
      var shouldReuseMarkup = containerHasReactMarkup && !prevComponent && !containerHasNonRootReactChild;
      var component = ReactMount._renderNewRootComponent(nextWrappedElement, container, shouldReuseMarkup, parentComponent != null ? parentComponent._reactInternalInstance._processChildContext(parentComponent._reactInternalInstance._context) : emptyObject)._renderedComponent.getPublicInstance();
      if (callback) {
        callback.call(component);
      }
      return component;
    },
    render: function(nextElement, container, callback) {
      return ReactMount._renderSubtreeIntoContainer(null, nextElement, container, callback);
    },
    registerContainer: function(container) {
      var reactRootID = getReactRootID(container);
      if (reactRootID) {
        reactRootID = ReactInstanceHandles.getReactRootIDFromNodeID(reactRootID);
      }
      if (!reactRootID) {
        reactRootID = ReactInstanceHandles.createReactRootID();
      }
      containersByReactRootID[reactRootID] = container;
      return reactRootID;
    },
    unmountComponentAtNode: function(container) {
      process.env.NODE_ENV !== 'production' ? warning(ReactCurrentOwner.current == null, 'unmountComponentAtNode(): Render methods should be a pure function ' + 'of props and state; triggering nested component updates from render ' + 'is not allowed. If necessary, trigger nested updates in ' + 'componentDidUpdate. Check the render method of %s.', ReactCurrentOwner.current && ReactCurrentOwner.current.getName() || 'ReactCompositeComponent') : undefined;
      !(container && (container.nodeType === ELEMENT_NODE_TYPE || container.nodeType === DOC_NODE_TYPE || container.nodeType === DOCUMENT_FRAGMENT_NODE_TYPE)) ? process.env.NODE_ENV !== 'production' ? invariant(false, 'unmountComponentAtNode(...): Target container is not a DOM element.') : invariant(false) : undefined;
      var reactRootID = getReactRootID(container);
      var component = instancesByReactRootID[reactRootID];
      if (!component) {
        var containerHasNonRootReactChild = hasNonRootReactChild(container);
        var containerID = internalGetID(container);
        var isContainerReactRoot = containerID && containerID === ReactInstanceHandles.getReactRootIDFromNodeID(containerID);
        if (process.env.NODE_ENV !== 'production') {
          process.env.NODE_ENV !== 'production' ? warning(!containerHasNonRootReactChild, 'unmountComponentAtNode(): The node you\'re attempting to unmount ' + 'was rendered by React and is not a top-level container. %s', isContainerReactRoot ? 'You may have accidentally passed in a React root node instead ' + 'of its container.' : 'Instead, have the parent component update its state and ' + 'rerender in order to remove this component.') : undefined;
        }
        return false;
      }
      ReactUpdates.batchedUpdates(unmountComponentFromNode, component, container);
      delete instancesByReactRootID[reactRootID];
      delete containersByReactRootID[reactRootID];
      if (process.env.NODE_ENV !== 'production') {
        delete rootElementsByReactRootID[reactRootID];
      }
      return true;
    },
    findReactContainerForID: function(id) {
      var reactRootID = ReactInstanceHandles.getReactRootIDFromNodeID(id);
      var container = containersByReactRootID[reactRootID];
      if (process.env.NODE_ENV !== 'production') {
        var rootElement = rootElementsByReactRootID[reactRootID];
        if (rootElement && rootElement.parentNode !== container) {
          process.env.NODE_ENV !== 'production' ? warning(internalGetID(rootElement) === reactRootID, 'ReactMount: Root element ID differed from reactRootID.') : undefined;
          var containerChild = container.firstChild;
          if (containerChild && reactRootID === internalGetID(containerChild)) {
            rootElementsByReactRootID[reactRootID] = containerChild;
          } else {
            process.env.NODE_ENV !== 'production' ? warning(false, 'ReactMount: Root element has been removed from its original ' + 'container. New container: %s', rootElement.parentNode) : undefined;
          }
        }
      }
      return container;
    },
    findReactNodeByID: function(id) {
      var reactRoot = ReactMount.findReactContainerForID(id);
      return ReactMount.findComponentRoot(reactRoot, id);
    },
    getFirstReactDOM: function(node) {
      return findFirstReactDOMImpl(node);
    },
    findComponentRoot: function(ancestorNode, targetID) {
      var firstChildren = findComponentRootReusableArray;
      var childIndex = 0;
      var deepestAncestor = findDeepestCachedAncestor(targetID) || ancestorNode;
      if (process.env.NODE_ENV !== 'production') {
        process.env.NODE_ENV !== 'production' ? warning(deepestAncestor != null, 'React can\'t find the root component node for data-reactid value ' + '`%s`. If you\'re seeing this message, it probably means that ' + 'you\'ve loaded two copies of React on the page. At this time, only ' + 'a single copy of React can be loaded at a time.', targetID) : undefined;
      }
      firstChildren[0] = deepestAncestor.firstChild;
      firstChildren.length = 1;
      while (childIndex < firstChildren.length) {
        var child = firstChildren[childIndex++];
        var targetChild;
        while (child) {
          var childID = ReactMount.getID(child);
          if (childID) {
            if (targetID === childID) {
              targetChild = child;
            } else if (ReactInstanceHandles.isAncestorIDOf(childID, targetID)) {
              firstChildren.length = childIndex = 0;
              firstChildren.push(child.firstChild);
            }
          } else {
            firstChildren.push(child.firstChild);
          }
          child = child.nextSibling;
        }
        if (targetChild) {
          firstChildren.length = 0;
          return targetChild;
        }
      }
      firstChildren.length = 0;
      !false ? process.env.NODE_ENV !== 'production' ? invariant(false, 'findComponentRoot(..., %s): Unable to find element. This probably ' + 'means the DOM was unexpectedly mutated (e.g., by the browser), ' + 'usually due to forgetting a <tbody> when using tables, nesting tags ' + 'like <form>, <p>, or <a>, or using non-SVG elements in an <svg> ' + 'parent. ' + 'Try inspecting the child nodes of the element with React ID `%s`.', targetID, ReactMount.getID(ancestorNode)) : invariant(false) : undefined;
    },
    _mountImageIntoNode: function(markup, container, shouldReuseMarkup, transaction) {
      !(container && (container.nodeType === ELEMENT_NODE_TYPE || container.nodeType === DOC_NODE_TYPE || container.nodeType === DOCUMENT_FRAGMENT_NODE_TYPE)) ? process.env.NODE_ENV !== 'production' ? invariant(false, 'mountComponentIntoNode(...): Target container is not valid.') : invariant(false) : undefined;
      if (shouldReuseMarkup) {
        var rootElement = getReactRootElementInContainer(container);
        if (ReactMarkupChecksum.canReuseMarkup(markup, rootElement)) {
          return;
        } else {
          var checksum = rootElement.getAttribute(ReactMarkupChecksum.CHECKSUM_ATTR_NAME);
          rootElement.removeAttribute(ReactMarkupChecksum.CHECKSUM_ATTR_NAME);
          var rootMarkup = rootElement.outerHTML;
          rootElement.setAttribute(ReactMarkupChecksum.CHECKSUM_ATTR_NAME, checksum);
          var normalizedMarkup = markup;
          if (process.env.NODE_ENV !== 'production') {
            var normalizer;
            if (container.nodeType === ELEMENT_NODE_TYPE) {
              normalizer = document.createElement('div');
              normalizer.innerHTML = markup;
              normalizedMarkup = normalizer.innerHTML;
            } else {
              normalizer = document.createElement('iframe');
              document.body.appendChild(normalizer);
              normalizer.contentDocument.write(markup);
              normalizedMarkup = normalizer.contentDocument.documentElement.outerHTML;
              document.body.removeChild(normalizer);
            }
          }
          var diffIndex = firstDifferenceIndex(normalizedMarkup, rootMarkup);
          var difference = ' (client) ' + normalizedMarkup.substring(diffIndex - 20, diffIndex + 20) + '\n (server) ' + rootMarkup.substring(diffIndex - 20, diffIndex + 20);
          !(container.nodeType !== DOC_NODE_TYPE) ? process.env.NODE_ENV !== 'production' ? invariant(false, 'You\'re trying to render a component to the document using ' + 'server rendering but the checksum was invalid. This usually ' + 'means you rendered a different component type or props on ' + 'the client from the one on the server, or your render() ' + 'methods are impure. React cannot handle this case due to ' + 'cross-browser quirks by rendering at the document root. You ' + 'should look for environment dependent code in your components ' + 'and ensure the props are the same client and server side:\n%s', difference) : invariant(false) : undefined;
          if (process.env.NODE_ENV !== 'production') {
            process.env.NODE_ENV !== 'production' ? warning(false, 'React attempted to reuse markup in a container but the ' + 'checksum was invalid. This generally means that you are ' + 'using server rendering and the markup generated on the ' + 'server was not what the client was expecting. React injected ' + 'new markup to compensate which works but you have lost many ' + 'of the benefits of server rendering. Instead, figure out ' + 'why the markup being generated is different on the client ' + 'or server:\n%s', difference) : undefined;
          }
        }
      }
      !(container.nodeType !== DOC_NODE_TYPE) ? process.env.NODE_ENV !== 'production' ? invariant(false, 'You\'re trying to render a component to the document but ' + 'you didn\'t use server rendering. We can\'t do this ' + 'without using server rendering due to cross-browser quirks. ' + 'See ReactDOMServer.renderToString() for server rendering.') : invariant(false) : undefined;
      if (transaction.useCreateElement) {
        while (container.lastChild) {
          container.removeChild(container.lastChild);
        }
        container.appendChild(markup);
      } else {
        setInnerHTML(container, markup);
      }
    },
    ownerDocumentContextKey: ownerDocumentContextKey,
    getReactRootID: getReactRootID,
    getID: getID,
    setID: setID,
    getNode: getNode,
    getNodeFromInstance: getNodeFromInstance,
    isValid: isValid,
    purgeID: purgeID
  };
  ReactPerf.measureMethods(ReactMount, 'ReactMount', {
    _renderNewRootComponent: '_renderNewRootComponent',
    _mountImageIntoNode: '_mountImageIntoNode'
  });
  module.exports = ReactMount;
  return module.exports;
});

$__System.registerDynamic("9f", ["3d", "3"], true, function($__require, exports, module) {
  "use strict";
  var process = $__require("3");
  var define,
      global = this,
      GLOBAL = this;
  var ReactMount = $__require('3d');
  module.exports = ReactMount.renderSubtreeIntoContainer;
  return module.exports;
});

$__System.registerDynamic("9", ["3"], true, function($__require, exports, module) {
  "use strict";
  var process = $__require("3");
  var define,
      global = this,
      GLOBAL = this;
  function makeEmptyFunction(arg) {
    return function() {
      return arg;
    };
  }
  function emptyFunction() {}
  emptyFunction.thatReturns = makeEmptyFunction;
  emptyFunction.thatReturnsFalse = makeEmptyFunction(false);
  emptyFunction.thatReturnsTrue = makeEmptyFunction(true);
  emptyFunction.thatReturnsNull = makeEmptyFunction(null);
  emptyFunction.thatReturnsThis = function() {
    return this;
  };
  emptyFunction.thatReturnsArgument = function(arg) {
    return arg;
  };
  module.exports = emptyFunction;
  return module.exports;
});

$__System.registerDynamic("1e", ["9", "3"], true, function($__require, exports, module) {
  "use strict";
  var process = $__require("3");
  var define,
      global = this,
      GLOBAL = this;
  var emptyFunction = $__require('9');
  var warning = emptyFunction;
  if (process.env.NODE_ENV !== 'production') {
    warning = function(condition, format) {
      for (var _len = arguments.length,
          args = Array(_len > 2 ? _len - 2 : 0),
          _key = 2; _key < _len; _key++) {
        args[_key - 2] = arguments[_key];
      }
      if (format === undefined) {
        throw new Error('`warning(condition, format, ...args)` requires a warning ' + 'message argument');
      }
      if (format.indexOf('Failed Composite propType: ') === 0) {
        return;
      }
      if (!condition) {
        var argIndex = 0;
        var message = 'Warning: ' + format.replace(/%s/g, function() {
          return args[argIndex++];
        });
        if (typeof console !== 'undefined') {
          console.error(message);
        }
        try {
          throw new Error(message);
        } catch (x) {}
      }
    };
  }
  module.exports = warning;
  return module.exports;
});

$__System.registerDynamic("32", ["3"], true, function($__require, exports, module) {
  "use strict";
  var process = $__require("3");
  var define,
      global = this,
      GLOBAL = this;
  var canUseDOM = !!(typeof window !== 'undefined' && window.document && window.document.createElement);
  var ExecutionEnvironment = {
    canUseDOM: canUseDOM,
    canUseWorkers: typeof Worker !== 'undefined',
    canUseEventListeners: canUseDOM && !!(window.addEventListener || window.attachEvent),
    canUseViewport: canUseDOM && !!window.screen,
    isInWorker: !canUseDOM
  };
  module.exports = ExecutionEnvironment;
  return module.exports;
});

$__System.registerDynamic("27", ["1b", "6f", "14", "d", "3d", "4d", "57", "f", "15", "42", "9f", "1e", "32", "3"], true, function($__require, exports, module) {
  "use strict";
  var process = $__require("3");
  var define,
      global = this,
      GLOBAL = this;
  var ReactCurrentOwner = $__require('1b');
  var ReactDOMTextComponent = $__require('6f');
  var ReactDefaultInjection = $__require('14');
  var ReactInstanceHandles = $__require('d');
  var ReactMount = $__require('3d');
  var ReactPerf = $__require('4d');
  var ReactReconciler = $__require('57');
  var ReactUpdates = $__require('f');
  var ReactVersion = $__require('15');
  var findDOMNode = $__require('42');
  var renderSubtreeIntoContainer = $__require('9f');
  var warning = $__require('1e');
  ReactDefaultInjection.inject();
  var render = ReactPerf.measure('React', 'render', ReactMount.render);
  var React = {
    findDOMNode: findDOMNode,
    render: render,
    unmountComponentAtNode: ReactMount.unmountComponentAtNode,
    version: ReactVersion,
    unstable_batchedUpdates: ReactUpdates.batchedUpdates,
    unstable_renderSubtreeIntoContainer: renderSubtreeIntoContainer
  };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ !== 'undefined' && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.inject === 'function') {
    __REACT_DEVTOOLS_GLOBAL_HOOK__.inject({
      CurrentOwner: ReactCurrentOwner,
      InstanceHandles: ReactInstanceHandles,
      Mount: ReactMount,
      Reconciler: ReactReconciler,
      TextComponent: ReactDOMTextComponent
    });
  }
  if (process.env.NODE_ENV !== 'production') {
    var ExecutionEnvironment = $__require('32');
    if (ExecutionEnvironment.canUseDOM && window.top === window.self) {
      if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ === 'undefined') {
        if (navigator.userAgent.indexOf('Chrome') > -1 && navigator.userAgent.indexOf('Edge') === -1 || navigator.userAgent.indexOf('Firefox') > -1) {
          console.debug('Download the React DevTools for a better development experience: ' + 'https://fb.me/react-devtools');
        }
      }
      var ieCompatibilityMode = document.documentMode && document.documentMode < 8;
      process.env.NODE_ENV !== 'production' ? warning(!ieCompatibilityMode, 'Internet Explorer is running in compatibility mode; please add the ' + 'following tag to your HTML to prevent this from happening: ' + '<meta http-equiv="X-UA-Compatible" content="IE=edge" />') : undefined;
      var expectedFeatures = [Array.isArray, Array.prototype.every, Array.prototype.forEach, Array.prototype.indexOf, Array.prototype.map, Date.now, Function.prototype.bind, Object.keys, String.prototype.split, String.prototype.trim, Object.create, Object.freeze];
      for (var i = 0; i < expectedFeatures.length; i++) {
        if (!expectedFeatures[i]) {
          console.error('One or more ES5 shim/shams expected by React are not available: ' + 'https://fb.me/react-warning-polyfills');
          break;
        }
      }
    }
  }
  module.exports = React;
  return module.exports;
});

$__System.registerDynamic("a0", ["27", "3"], true, function($__require, exports, module) {
  "use strict";
  var process = $__require("3");
  var define,
      global = this,
      GLOBAL = this;
  module.exports = $__require('27');
  return module.exports;
});

$__System.registerDynamic("a1", ["3"], true, function($__require, exports, module) {
  "use strict";
  var process = $__require("3");
  var define,
      global = this,
      GLOBAL = this;
  module.exports = function(str) {
    return encodeURIComponent(str).replace(/[!'()*]/g, function(c) {
      return '%' + c.charCodeAt(0).toString(16).toUpperCase();
    });
  };
  return module.exports;
});

$__System.registerDynamic("a2", ["a1", "3"], true, function($__require, exports, module) {
  "use strict";
  var process = $__require("3");
  var define,
      global = this,
      GLOBAL = this;
  var strictUriEncode = $__require('a1');
  function encode(value, strict) {
    return strict ? strictUriEncode(value) : encodeURIComponent(value);
  }
  exports.extract = function(str) {
    return str.split('?')[1] || '';
  };
  exports.parse = function(str) {
    var ret = Object.create(null);
    if (typeof str !== 'string') {
      return ret;
    }
    str = str.trim().replace(/^(\?|#|&)/, '');
    if (!str) {
      return ret;
    }
    str.split('&').forEach(function(param) {
      var parts = param.replace(/\+/g, ' ').split('=');
      var key = parts.shift();
      var val = parts.length > 0 ? parts.join('=') : undefined;
      key = decodeURIComponent(key);
      val = val === undefined ? null : decodeURIComponent(val);
      if (ret[key] === undefined) {
        ret[key] = val;
      } else if (Array.isArray(ret[key])) {
        ret[key].push(val);
      } else {
        ret[key] = [ret[key], val];
      }
    });
    return ret;
  };
  exports.stringify = function(obj, opts) {
    opts = opts || {};
    var strict = opts.strict !== false;
    return obj ? Object.keys(obj).sort().map(function(key) {
      var val = obj[key];
      if (val === undefined) {
        return '';
      }
      if (val === null) {
        return key;
      }
      if (Array.isArray(val)) {
        var result = [];
        val.slice().sort().forEach(function(val2) {
          if (val2 === undefined) {
            return;
          }
          if (val2 === null) {
            result.push(encode(key, strict));
          } else {
            result.push(encode(key, strict) + '=' + encode(val2, strict));
          }
        });
        return result.join('&');
      }
      return encode(key, strict) + '=' + encode(val, strict);
    }).filter(function(x) {
      return x.length > 0;
    }).join('&') : '';
  };
  return module.exports;
});

(function() {
var define = $__System.amdDefine;
define("a3", [], function() {
  return "# source: GNU Units\nkg!\nkilogram = kg\ns!\nsecond = s\nm!\nmeter = m\nA!\nampere = A\namp = ampere\ncd!\ncandela = cd\nmol!\nmole = mol\nK!\nkelvin = K\nradian = 1\nsr = 1\nsteradian = sr\nUS$!\nbit!\nyotta_ = 1e24\nzetta_ = 1e21\nexa_ = 1e18\npeta_ = 1e15\ntera_ = 1e12\ngiga_ = 1e9\nmega_ = 1e6\nmyria_ = 1e4\nkilo_ = 1e3\nhecto_ = 1e2\ndeca_ = 1e1\ndeka_ = deca\ndeci_ = 1e-1\ncenti_ = 1e-2\nmilli_ = 1e-3\nmicro_ = 1e-6\nnano_ = 1e-9\npico_ = 1e-12\nfemto_ = 1e-15\natto_ = 1e-18\nzepto_ = 1e-21\nyocto_ = 1e-24\nquarter_ = 1|4\nsemi_ = 0.5\ndemi_ = 0.5\nhemi_ = 0.5\nhalf_ = 0.5\ndouble_ = 2\ntriple_ = 3\ntreble_ = 3\nkibi_ = 2^10\nmebi_ = 2^20\ngibi_ = 2^30\ntebi_ = 2^40\npebi_ = 2^50\nexbi_ = 2^60\nKi_ = kibi\nMi_ = mebi\nGi_ = gibi\nTi_ = tebi\nPi_ = pebi\nEi_ = exbi\nY_ = yotta\nZ_ = zetta\nE_ = exa\nP_ = peta\nT_ = tera\nG_ = giga\nM_ = mega\nk_ = kilo\nh_ = hecto\nda_ = deka\nd_ = deci\nc_ = centi\nm_ = milli\nu_ = micro\nn_ = nano\np_ = pico\nf_ = femto\na_ = atto\nz_ = zepto\ny_ = yocto\none = 1\ntwo = 2\ndouble = 2\ncouple = 2\nthree = 3\ntriple = 3\nfour = 4\nquadruple = 4\nfive = 5\nquintuple = 5\nsix = 6\nseven = 7\neight = 8\nnine = 9\nten = 10\neleven = 11\ntwelve = 12\nthirteen = 13\nfourteen = 14\nfifteen = 15\nsixteen = 16\nseventeen = 17\neighteen = 18\nnineteen = 19\ntwenty = 20\nthirty = 30\nforty = 40\nfifty = 50\nsixty = 60\nseventy = 70\neighty = 80\nninety = 90\nhundred = 100\nthousand = 1000\nmillion = 1e6\nshortbillion = 1e9\nshorttrillion = 1e12\nshortquadrillion = 1e15\nshortquintillion = 1e18\nshortsextillion = 1e21\nshortseptillion = 1e24\nshortoctillion = 1e27\nshortnonillion = 1e30\nshortnoventillion = shortnonillion\nshortdecillion = 1e33\nshortundecillion = 1e36\nshortduodecillion = 1e39\nshorttredecillion = 1e42\nshortquattuordecillion = 1e45\nshortquindecillion = 1e48\nshortsexdecillion = 1e51\nshortseptendecillion = 1e54\nshortoctodecillion = 1e57\nshortnovemdecillion = 1e60\nshortvigintillion = 1e63\ncentillion = 1e303\ngoogol = 1e100\nlongbillion = million^2\nlongtrillion = million^3\nlongquadrillion = million^4\nlongquintillion = million^5\nlongsextillion = million^6\nlongseptillion = million^7\nlongoctillion = million^8\nlongnonillion = million^9\nlongnoventillion = longnonillion\nlongdecillion = million^10\nlongundecillion = million^11\nlongduodecillion = million^12\nlongtredecillion = million^13\nlongquattuordecillion = million^14\nlongquindecillion = million^15\nlongsexdecillion = million^16\nlongseptdecillion = million^17\nlongoctodecillion = million^18\nlongnovemdecillion = million^19\nlongvigintillion = million^20\nmilliard = 1000 million\nbilliard = 1000 million^2\ntrilliard = 1000 million^3\nquadrilliard = 1000 million^4\nquintilliard = 1000 million^5\nsextilliard = 1000 million^6\nseptilliard = 1000 million^7\noctilliard = 1000 million^8\nnonilliard = 1000 million^9\nnoventilliard = nonilliard\ndecilliard = 1000 million^10\nlongmilliard = milliard\nlongbilliard = billiard\nlongtrilliard = trilliard\nlongquadrilliard = quadrilliard\nlongquintilliard = quintilliard\nlongsextilliard = sextilliard\nlongseptilliard = septilliard\nlongoctilliard = octilliard\nlongnonilliard = nonilliard\nlongnoventilliard = noventilliard\nlongdecilliard = decilliard\nbillion = shortbillion\ntrillion = shorttrillion\nquadrillion = shortquadrillion\nquintillion = shortquintillion\nsextillion = shortsextillion\nseptillion = shortseptillion\noctillion = shortoctillion\nnonillion = shortnonillion\nnoventillion = shortnoventillion\ndecillion = shortdecillion\nundecillion = shortundecillion\nduodecillion = shortduodecillion\ntredecillion = shorttredecillion\nquattuordecillion = shortquattuordecillion\nquindecillion = shortquindecillion\nsexdecillion = shortsexdecillion\nseptendecillion = shortseptendecillion\noctodecillion = shortoctodecillion\nnovemdecillion = shortnovemdecillion\nvigintillion = shortvigintillion\nnewton = kg m / s^2\nN = newton\npascal = N/m^2\nPa = pascal\njoule = N m\nJ = joule\nwatt = J/s\nW = watt\ncoulomb = A s\nC = coulomb\nvolt = W/A\nV = volt\nohm = V/A\nsiemens = A/V\nS = siemens\nfarad = C/V\nF = farad\nweber = V s\nWb = weber\nhenry = Wb/A\nH = henry\ntesla = Wb/m^2\nT = tesla\nhertz = /s\nHz = hertz\nLENGTH = meter\nAREA = LENGTH^2\nVOLUME = LENGTH^3\nMASS = kilogram\nCURRENT = ampere\nAMOUNT = mole\nANGLE = radian\nSOLID_ANGLE = steradian\nMONEY = US$\nFORCE = newton\nPRESSURE = FORCE / AREA\nSTRESS = FORCE / AREA\nCHARGE = coulomb\nCAPACITANCE = farad\nRESISTANCE = ohm\nCONDUCTANCE = siemens\nINDUCTANCE = henry\nFREQUENCY = hertz\nVELOCITY = LENGTH / TIME\nACCELERATION = VELOCITY / TIME\nDENSITY = MASS / VOLUME\nLINEAR_DENSITY = MASS / LENGTH\nVISCOSITY = FORCE TIME / AREA\nKINEMATIC_VISCOSITY = VISCOSITY / DENSITY\ngram = millikg\ngm = gram\ng = gram\ntonne = 1000 kg\nt = tonne\nmetricton = tonne\nsthene = tonne m / s^2\nfunal = sthene\npieze = sthene / m^2\nquintal = 100 kg\nbar = 1e5 Pa\nb = bar\nvac = millibar\nmicron = micrometer\nbicron = picometer\ncc = cm^3\nare = 100 m^2\na = are\nliter = 1000 cc\noldliter = 1.000028 dm^3\nL = liter\nl = liter\nmho = siemens\ngalvat = ampere\nangstrom = 1e-10 m\nxunit = xunit_cu\nsiegbahn = xunit\nxunit_cu = 1.00207697e-13 m\nxunit_mo = 1.00209952e-13 m\nangstromstar = 1.00001495 angstrom\nfermi = 1e-15 m\nbarn = 1e-28 m^2\nshed = 1e-24 barn\nbrewster = micron^2/N\ndiopter = /m\nfresnel = 1e12 Hz\nshake = 1e-8 sec\nsvedberg = 1e-13 s\ngamma = microgram\nlambda = microliter\nspat = 1e12 m\npreece = 1e13 ohm m\nplanck = J s\nsturgeon = /henry\ndaraf = 1/farad\nleo = 10 m/s^2\npoiseuille = N s / m^2\nmayer = J/g K\nmired = / microK\ncrocodile = megavolt\nmetricounce = 25 g\nmounce = metricounce\nfinsenunit = 1e5 W/m^2\nfluxunit = 1e-26 W/m^2 Hz\njansky = fluxunit\nJy = jansky\nflick = W / cm^2 sr micrometer\npfu = / cm^2 sr s\npyron = cal_IT / cm^2 min\nkatal = mol/sec\nkat = katal\nsolarluminosity = 384.6e24 W\nsec = s\nminute = 60 s\nmin = minute\nhour = 60 min\nhr = hour\nday = 24 hr\nd = day\nda = day\nweek = 7 day\nwk = week\nsennight = 7 day\nfortnight = 14 day\nblink = 1e-5 day\nce = 1e-2 day\ncron = 1e6 years\nwatch = 4 hours\nbell = 1|8 watch\ncircle = 2 pi radian\ndegree = 1|360 circle\ndeg = degree\narcdeg = degree\narcmin = 1|60 degree\narcminute = arcmin\n' = arcmin\narcsec = 1|60 arcmin\narcsecond = arcsec\n\" = arcsec\n'' = \"\nrightangle = 90 degrees\nquadrant = 1|4 circle\nquintant = 1|5 circle\nsextant = 1|6 circle\nsign = 1|12 circle\nturn = circle\nrevolution = turn\nrev = turn\npulsatance = radian / sec\ngon = 1|100 rightangle\ngrade = gon\ncentesimalminute = 1|100 grade\ncentesimalsecond = 1|100 centesimalminute\nmilangle = 1|6400 circle\npointangle = 1|32 circle\ncentrad = 0.01 radian\nmas = milli arcsec\nseclongitude = circle (seconds/day)\ncirclearea = r => pi r^2 \ncirclearea^-1 = circlearea => sqrt(circlearea/pi)\nspherevolume = r => 4|3 pi r^3 \nspherevolume^-1 = spherevolume => cuberoot(spherevolume/4|3 pi)\nspherevol = spherevolume\nsquare = x => x^2 \nsquare^-1 = square => sqrt(square)\nsphere = 4 pi sr\nsquaredegree = 1|180^2 pi^2 sr\nsquareminute = 1|60^2 squaredegree\nsquaresecond = 1|60^2 squareminute\nsquarearcmin = squareminute\nsquarearcsec = squaresecond\nsphericalrightangle = 0.5 pi sr\noctant = 0.5 pi sr\npercent = 0.01\n% = percent\nmill = 0.001\nproof = 1|200\nppm = 1e-6\npartspermillion = ppm\nppb = 1e-9\npartsperbillion = ppb\nppt = 1e-12\npartspertrillion = ppt\nkarat = 1|24\ncaratgold = karat\ngammil = mg/l\nbasispoint = 0.01 %\nfine = 1|1000\npH = x => 10^(-x) mol/liter \npH^-1 = pH => (-log(pH liters/mol))\nTEMPERATURE = kelvin\nTEMPERATURE_DIFFERENCE = kelvin\ntempC = x => x K + stdtemp \ntempC^-1 = tempC => (tempC +(-stdtemp))/K\ntempcelsius = tempC\ndegcelsius = K\ndegC = K\ntempF = x => (x+(-32)) degF + stdtemp \ntempF^-1 = tempF => (tempF+(-stdtemp))/degF + 32\ntempfahrenheit = tempF\ndegfahrenheit = 5|9 degC\ndegF = 5|9 degC\ndegreesrankine = degF\ndegrankine = degreesrankine\ndegreerankine = degF\ndegR = degrankine\ntempR = degrankine\ntemprankine = degrankine\ntempreaumur = x => x degreaumur+stdtemp \ntempreaumur^-1 = tempreaumur => (tempreaumur+(-stdtemp))/degreaumur\ndegreaumur = 10|8 degC\ndegK = K\ntempK = K\ngasmark[degR] = .0625    634.67   .125     659.67   .25      684.67   .5       709.67   1        734.67   2        759.67   3        784.67   4        809.67   5        834.67   6        859.67   7        884.67   8        909.67   9        934.67   10       959.67\npi = 3.14159265358979323846\nc = 2.99792458e8 m/s\nlight = c\nmu0 = 4 pi 1e-7 H/m\nepsilon0 = 1/mu0 c^2\nenergy = c^2\ne = 1.602176565e-19 C\nh = 4.135667516e-15 eV s\nhbar = h / 2 pi\nspin = hbar\nG = 6.67384e-11 N m^2 / kg^2\ncoulombconst = 1/4 pi epsilon0\natomicmassunit = 1.660538921e-27 kg\nu = atomicmassunit\namu = atomicmassunit\namu_chem = 1.66026e-27 kg\namu_phys = 1.65981e-27 kg\ndalton = u\navogadro = grams/amu mol\nN_A = avogadro\ngasconstant = 8.3144621 J / mol K\nR = gasconstant\nboltzmann = R / N_A\nk = boltzmann\nkboltzmann = boltzmann\nmolarvolume = mol R stdtemp / atm\nloschmidt = avogadro mol / molarvolume\nstefanboltzmann = pi^2 k^4 / 60 hbar^3 c^2\nsigma = stefanboltzmann\nwiendisplacement = 2.8977721e-3 m K\nK_J90 = 483597.9 GHz/V\nK_J = 483597.870 GHz/V\nR_K90 = 25812.807 ohm\nR_K = 25812.8074434 ohm\ngravity = 9.80665 m/s^2\nforce = gravity\natm = 101325 Pa\natmosphere = atm\nHg = 13.5951 gram force / cm^3\nwater = gram force/cm^3\nwaterdensity = gram / cm^3\nH2O = water\nwc = water\nmach = 331.46 m/s\nstandardtemp = 273.15 K\nstdtemp = standardtemp\nnormaltemp = tempF(70)\nnormtemp = normaltemp\nHg10C = 13.5708 force gram / cm^3\nHg20C = 13.5462 force gram / cm^3\nHg23C = 13.5386 force gram / cm^3\nHg30C = 13.5217 force gram / cm^3\nHg40C = 13.4973 force gram / cm^3\nHg60F = 13.5574 force gram / cm^3\nH2O0C = 0.99987 force gram / cm^3\nH2O5C = 0.99999 force gram / cm^3\nH2O10C = 0.99973 force gram / cm^3\nH2O15C = 0.99913 force gram / cm^3\nH2O18C = 0.99862 force gram / cm^3\nH2O20C = 0.99823 force gram / cm^3\nH2O25C = 0.99707 force gram / cm^3\nH2O50C = 0.98807 force gram / cm^3\nH2O100C = 0.95838 force gram / cm^3\nRinfinity = 10973731.568539 /m\nR_H = 10967760 /m\nalpha = 7.2973525698e-3\nbohrradius = alpha / 4 pi Rinfinity\nprout = 185.5 keV\nplanckmass = 2.17651e-8 kg\nm_P = planckmass\nplancktime = hbar / planckmass c^2\nt_P = plancktime\nplancklength = plancktime c\nl_P = plancklength\nelectronradius = (1/4 pi epsilon0) e^2 / electronmass c^2\ndeuteronchargeradius = 2.1424e-15 m\nprotonchargeradius = 0.8775e-15\nelectronmass = 5.4857990946e-4 u\nm_e = electronmass\nprotonmass = 1.007276466812 u\nm_p = protonmass\nneutronmass = 1.00866491600 u\nm_n = neutronmass\nmuonmass = 0.1134289267 u\nm_mu = muonmass\ndeuteronmass = 2.013553212712 u\nm_d = deuteronmass\nalphaparticlemass = 4.001506179125 u\nm_alpha = alphaparticlemass\ntaumass = 1.90749 u\nm_tau = taumass\ntritonmass = 3.0155007134 u\nm_t = tritonmass\nhelionmass = 3.0149322468 u\nm_h = helionmass\nelectronwavelength = h / m_e c\nlambda_C = electronwavelength\nprotonwavelength = h / m_p c\nlambda_C,p = protonwavelength\nneutronwavelength = h / m_n c\nlambda_C,n = neutronwavelength\nbohrmagneton = e hbar / 2 electronmass\nmu_B = bohrmagneton\nnuclearmagneton = e hbar /  2 protonmass\nmu_N = nuclearmagneton\nmu_mu = -4.49044807e-26 J/T\nmu_p = 1.410606743e-26 J/T\nmu_e = -928.476430e-26 J/T\nmu_n = -0.96623647e-26\nmu_d = 0.433073489e-26 J/T\nmu_t = 1.504609447e-26 J/T\nmu_h = -1.074617486e-26 J/T\nkgf = kg force\ntechnicalatmosphere = kgf / cm^2\nat = technicalatmosphere\nhyl = kgf s^2 / m\nmmHg = mm Hg\ntorr = mmHg\ntor = Pa\ninHg = inch Hg\ninH2O = inch water\nmmH2O = mm water\neV = e V\nelectronvolt = eV\nlightyear = c julianyear\nly = lightyear\nlightsecond = c s\nlightminute = c min\nparsec = au / tan(arcsec)\npc = parsec\nrydberg = h c Rinfinity\ncrith = 0.089885 gram\namagatvolume = molarvolume\namagat = mol/amagatvolume\nlorentz = bohrmagneton / h c\ncminv = h c / cm\ninvcm = cminv\nwavenumber = cminv\nkcal_mol = kcal_th / mol N_A\ndyne = cm gram / s^2\ndyn = dyne\nerg = cm dyne\npoise = gram / cm s\nP = poise\nrhe = /poise\nstokes = cm^2 / s\nSt = stokes\nstoke = stokes\nlentor = stokes\nGal = cm / s^2\ngalileo = Gal\nbarye = dyne/cm^2\nbarad = barye\nkayser = 1/cm\nbalmer = kayser\nkine = cm/s\nbole = g cm / s\npond = gram force\nglug = gram force s^2 / cm\ndarcy = centipoise cm^2 / s atm\nmobileohm = cm / dyn s\nmechanicalohm = dyn s / cm\nacousticalohm = dyn s / cm^5\nray = acousticalohm\nrayl = dyn s / cm^3\neotvos = 1e-9 Gal/cm\nabampere = 10 A\nabamp = abampere\naA = abampere\nbiot = aA\nBi = biot\nabcoulomb = abamp sec\nabcoul = abcoulomb\nabfarad = abampere sec / abvolt\nabhenry = abvolt sec / abamp\nabvolt = dyne cm  / abamp sec\nabohm = abvolt / abamp\nabmho = /abohm\ngauss = abvolt sec / cm^2\nGs = gauss\nmaxwell = abvolt sec\nMx = maxwell\noersted = gauss / mu0\nOe = oersted\ngilbert = gauss cm / mu0\nGb = gilbert\nGi = gilbert\nunitpole = 4 pi maxwell\nemu = erg/gauss\nstatampere = 10 A cm / s c\nstatamp = statampere\nstatvolt = dyne cm / statamp sec\nstatcoulomb = statamp s\nesu = statcoulomb\nstatcoul = statcoulomb\nstatfarad = statamp sec / statvolt\ncmcapacitance = statfarad\nstathenry = statvolt sec / statamp\nstatohm = statvolt / statamp\nstatmho = /statohm\nstatmaxwell = statvolt sec\nfranklin = statcoulomb\ndebye = 1e-18 statcoul cm\nhelmholtz = debye/angstrom^2\njar = 1000 statfarad\nintampere = 0.999835 A\nintamp = intampere\nintfarad = 0.999505 F\nintvolt = 1.00033 V\nintohm = 1.000495 ohm\ndaniell = 1.042 V\nfaraday = N_A e mol\nfaraday_phys = 96521.9 C\nfaraday_chem = 96495.7 C\nkappline = 6000 maxwell\nsiemensunit = 0.9534 ohm\ncopperconductivity = 58 siemens m / mm^2\nIACS = copperconductivity\ncopperdensity = 8.89 g/cm^3\nouncecopper = oz / ft^2 copperdensity\nozcu = ouncecopper\nLUMINOUS_INTENSITY = candela\nLUMINOUS_FLUX = lumen\nLUMINOUS_ENERGY = talbot\nILLUMINANCE = lux\nEXITANCE = lux\ncandle = 1.02 candela\nhefnerunit = 0.9 candle\nhefnercandle = hefnerunit\nviolle = 20.17 cd\nlumen = cd sr\nlm = lumen\ntalbot = lumen s\nlumberg = talbot\nlumerg = talbot\nlux = lm/m^2\nlx = lux\nphot = lumen / cm^2\nph = phot\nfootcandle = lumen/ft^2\nmetercandle = lumen/m^2\nmcs = metercandle s\nnox = 1e-3 lux\nskot = 1e-3 apostilb\nLUMINANCE = nit\nnit = cd/m^2\nstilb = cd / cm^2\nsb = stilb\napostilb = cd/pi m^2\nasb = apostilb\nblondel = apostilb\nequivalentlux = cd / pi m^2\nequivalentphot = cd / pi cm^2\nlambert = cd / pi cm^2\nfootlambert = cd / pi ft^2\nbril = x => 2^(x+-100) lamberts \nbril^-1 = bril => log2(bril/lambert)+100\nsunlum = 1.6e9 cd/m^2\nsunillum = 100e3 lux\nsunillum_o = 10e3 lux\nsunlum_h = 6e6 cd/m^2\nskylum = 8000 cd/m^2\nskylum_o = 2000 cd/m^2\nmoonlum = 2500 cd/m^2\ns100 = 100 / lx s\niso100 = s100\nk1250 = 12.5 (cd/m^2) / lx s\nk1400 = 14   (cd/m^2) / lx s\nc250 = 250 lx / lx s\nev100 = x => 2^x k1250 / s100\nev100^-1 = ev100 => log2(ev100 s100/k1250)\nEV100 = ev100\niv100 = x => 2^x c250 / s100\niv100^-1 = iv100 => log2(iv100 s100 / c250)\nN_exif = 1|3.125 lx s\nK_apex1961 = 11.4 (cd/m^2) / lx s\nK_apex1971 = 12.5 (cd/m^2) / lx s\nC_apex1961 = 224 lx / lx s\nC_apex1971 = 322 lx / lx s\nN_speed = N_exif\nK_lum = K_apex1971\nC_illum = C_apex1961\nAv = A => 2^(A/2)\nAv^-1 = Av => 2 log2(Av)\nTv = t => 2^(-t) s\nTv^-1 = Tv => log2(s / Tv)\nSval = S => 2^S / (N_speed/lx s)\nSval^-1 = Sval => log2((N_speed/lx s) Sval)\nBv = x => 2^x K_lum N_speed \nBv^-1 = Bv => log2(Bv / (K_lum N_speed))\nIv = x => 2^x C_illum N_speed \nIv^-1 = Iv => log2(Iv / (C_illum N_speed))\nSx = S => log2((N_speed/lx s) S)\nSx^-1 = Sx => 2^Sx / (N_speed/lx s)\nSdeg = S => 10^((S - 1) / 10) \nSdeg^-1 = Sdeg => (1 + 10 log(Sdeg))\nSdin = Sdeg\nnumericalaperture = x => 0.5 / x \nnumericalaperture^-1 = numericalaperture => 0.5 / numericalaperture\nNA = numericalaperture\nfnumber = x => x \nfnumber^-1 = fnumber => fnumber\nTIME = second\nanomalisticyear = 365.2596 days\nsiderealyear = 365.256360417 day\ntropicalyear = 365.242198781 day\neclipseyear = 346.62 days\nsaros = 223 synodicmonth\nsiderealday = 86164.09054 s\nsiderealhour = 1|24 siderealday\nsiderealminute = 1|60 siderealhour\nsiderealsecond = 1|60 siderealminute\nanomalisticmonth = 27.55454977 day\nnodicalmonth = 27.2122199 day\ndraconicmonth = nodicalmonth\ndraconiticmonth = nodicalmonth\nsiderealmonth = 27.321661 day\nlunarmonth = 29 days + 12 hours + 44 minutes + 2.8 seconds\nsynodicmonth = lunarmonth\nlunation = synodicmonth\nlune = 1|30 lunation\nlunour = 1|24 lune\nyear = tropicalyear\nyr = year\nmonth = 1|12 year\nmo = month\nlustrum = 5 years\ndecade = 10 years\ncentury = 100 years\nmillennium = 1000 years\nmillennia = millennium\nsolaryear = year\nlunaryear = 12 lunarmonth\ncalendaryear = 365 day\ncommonyear = 365 day\nleapyear = 366 day\njulianyear = 365.25 day\ngregorianyear = 365.2425 day\nislamicyear = 354 day\nislamicleapyear = 355 day\nislamicmonth = 1|12 islamicyear\nmercuryday = 58.6462 day\nvenusday = 243.01 day\nearthday = siderealday\nmarsday = 1.02595675 day\njupiterday = 0.41354 day\nsaturnday = 0.4375 day\nuranusday = 0.65 day\nneptuneday = 0.768 day\nplutoday = 6.3867 day\nmercuryyear = 0.2408467 julianyear\nvenusyear = 0.61519726 julianyear\nearthyear = siderealyear\nmarsyear = 1.8808476 julianyear\njupiteryear = 11.862615 julianyear\nsaturnyear = 29.447498 julianyear\nuranusyear = 84.016846 julianyear\nneptuneyear = 164.79132 julianyear\nplutoyear = 247.92065 julianyear\nearthflattening = 1|298.25642\nearthradius_equatorial = 6378136.49 m\nearthradius_polar = (-earthflattening+1) earthradius_equatorial\nlandarea = 148.847e6 km^2\noceanarea = 361.254e6 km^2\nmoonradius = 1738 km\nsunradius = 6.96e8 m\ngauss_k = 0.01720209895\ngaussianyear = (2 pi / gauss_k) days\nastronomicalunit = 149597870700 m\nau = astronomicalunit\nsolarmass = 1.9891e30 kg\nsunmass = solarmass\nsundist = 1.0000010178 au\nmoondist = 3.844e8 m\nsundist_near = 1.471e11 m\nsundist_far = 1.521e11 m\nmercurymass = solarmass / 6023600\nvenusmass = solarmass / 408523.71\nearthmoonmass = solarmass / 328900.56\nmarsmass = solarmass / 3098708\njupitermass = solarmass / 1047.3486\nsaturnmass = solarmass / 3497.898\nuranusmass = solarmass / 22902.98\nneptunemass = solarmass / 19412.24\nplutomass = solarmass / 1.35e8\nmoonearthmassratio = 0.012300034\nearthmass = earthmoonmass / ( 1 + moonearthmassratio)\nmoonmass = moonearthmassratio earthmass\noldmercurymass = 0.33022e24 kg\noldvenusmass = 4.8690e24 kg\noldmarsmass = 0.64191e24 kg\noldjupitermass = 1898.8e24 kg\noldsaturnmass = 568.5e24 kg\nolduranusmass = 86.625e24 kg\noldneptunemass = 102.78e24 kg\noldplutomass = 0.015e24 kg\nmercuryradius = 2440 km\nvenusradius = 6051.84 km\nearthradius = 6371.01 km\nmarsradius = 3389.92 km\njupiterradius = 69911 km\nsaturnradius = 58232 km\nuranusradius = 25362 km\nneptuneradius = 24624 km\nplutoradius = 1151 km\nmoongravity = 1.62 m/s^2\natomicmass = electronmass\natomiccharge = e\natomicaction = hbar\natomiclength = bohrradius\natomictime = hbar^3/coulombconst^2 atomicmass e^4\natomicvelocity = atomiclength / atomictime\natomicenergy = hbar / atomictime\nhartree = atomicenergy\nthermalcoulomb = J/K\nthermalampere = W/K\nthermalfarad = J/K^2\nthermalohm = K^2/W\nfourier = thermalohm\nthermalhenry = J K^2/W^2\nthermalvolt = K\nUS = 1200|3937 m/ft\nUS_ = US\nsurvey_ = US\ngeodetic_ = US\nint = 3937|1200 ft/m\nint_ = int\ninch = 2.54 cm\nin = inch\nfoot = 12 inch\nfeet = foot\nft = foot\nyard = 3 ft\nyd = yard\nmile = 5280 ft\nline = 1|12 inch\nrod = 5.5 yard\nperch = rod\nfurlong = 40 rod\nstatutemile = mile\nleague = 3 mile\nsurveyorschain = 66 surveyft\nsurveychain = surveyorschain\nsurveyorspole = 1|4 surveyorschain\nsurveyorslink = 1|100 surveyorschain\nchain = 66 ft\nlink = 1|100 chain\nch = chain\nUSacre = 10 surveychain^2\nintacre = 10 chain^2\nintacrefoot = acre foot\nUSacrefoot = USacre surveyfoot\nacrefoot = intacrefoot\nacre = intacre\nsection = mile^2\ntownship = 36 section\nhomestead = 160 acre\ngunterschain = surveyorschain\nengineerschain = 100 ft\nengineerslink = 1|100 engineerschain\nramsdenschain = engineerschain\nramsdenslink = engineerslink\ngurleychain = 33 feet\ngurleylink = 1|50 gurleychain\nwingchain = 66 feet\nwinglink = 1|80 wingchain\ntroughtonyard = 914.42190 mm\nbronzeyard11 = 914.39980 mm\nmendenhallyard = surveyyard\ninternationalyard = yard\nfathom = 6 ft\nnauticalmile = 1852 m\ncable = 1|10 nauticalmile\nintcable = cable\ncablelength = cable\nUScable = 100 USfathom\nnavycablelength = 720 USft\nmarineleague = 3 nauticalmile\ngeographicalmile = brnauticalmile\nknot = nauticalmile / hr\nclick = km\nklick = click\npound = 0.45359237 kg\nlb = pound\ngrain = 1|7000 pound\nounce = 1|16 pound\noz = ounce\ndram = 1|16 ounce\ndr = dram\nushundredweight = 100 pounds\ncwt = hundredweight\nshorthundredweight = ushundredweight\nuston = shortton\nshortton = 2000 lb\nquarterweight = 1|4 uston\nshortquarterweight = 1|4 shortton\nshortquarter = shortquarterweight\ntroypound = 5760 grain\ntroyounce = 1|12 troypound\nozt = troyounce\npennyweight = 1|20 troyounce\ndwt = pennyweight\nassayton = mg ton / troyounce\nusassayton = mg uston / troyounce\nbrassayton = mg brton / troyounce\nfineounce = troyounce\nmetriccarat = 0.2 gram\nmetricgrain = 50 mg\ncarat = metriccarat\nct = carat\njewelerspoint = 1|100 carat\nsilversmithpoint = 1|4000 inch\nmomme = 3.75 grams\nappound = troypound\napounce = troyounce\napdram = 1|8 apounce\napscruple = 1|3 apdram\nusgallon = 231 in^3\ngal = gallon\nquart = 1|4 gallon\npint = 1|2 quart\ngill = 1|4 pint\nusquart = 1|4 usgallon\nuspint = 1|2 usquart\nusgill = 1|4 uspint\nusfluidounce = 1|16 uspint\nfluiddram = 1|8 usfloz\nminimvolume = 1|60 fluiddram\nqt = quart\npt = pint\nfloz = fluidounce\nusfloz = usfluidounce\nfldr = fluiddram\nliquidbarrel = 31.5 usgallon\nusbeerbarrel = 2 beerkegs\nbeerkeg = 15.5 usgallon\nponykeg = 1|2 beerkeg\nwinekeg = 12 usgallon\npetroleumbarrel = 42 usgallon\nbarrel = petroleumbarrel\nbbl = barrel\nushogshead = 2 liquidbarrel\nusfirkin = 9 usgallon\nusbushel = 2150.42 in^3\nbu = bushel\npeck = 1|4 bushel\nuspeck = 1|4 usbushel\nbrpeck = 1|4 brbushel\npk = peck\ndrygallon = 1|2 uspeck\ndryquart = 1|4 drygallon\ndrypint = 1|2 dryquart\ndrybarrel = 7056 in^3\ncranberrybarrel = 5826 in^3\nheapedbushel = 1.278 usbushel\nwheatbushel = 60 lb\nsoybeanbushel = 60 lb\ncornbushel = 56 lb\nryebushel = 56 lb\nbarleybushel = 48 lb\noatbushel = 32 lb\nricebushel = 45 lb\ncanada_oatbushel = 34 lb\nponyvolume = 1 usfloz\njigger = 1.5 usfloz\nshot = jigger\neushot = 25 ml\nfifth = 1|5 usgallon\nwinebottle = 750 ml\nwinesplit = 1|4 winebottle\nwineglass = 4 usfloz\nmagnum = 1.5 liter\nmetrictenth = 375 ml\nmetricfifth = 750 ml\nmetricquart = 1 liter\nreputedquart = 1|6 brgallon\nreputedpint = 1|2 reputedquart\nbrwinebottle = reputedquart\nsplit = 200 ml\njeroboam = 2 magnum\nrehoboam = 3 magnum\nmethuselah = 4 magnum\nsalmanazar = 6 magnum\nbalthazar = 8 magnum\nnebuchadnezzar = 10 magnum\nclarkdegree = grains/brgallon\ngpg = grains/usgallon\nshoeiron = 1|48 inch\nshoeounce = 1|64 inch\nshoesize_delta = 1|3 inch\nshoe_men0 = 8.25 inch\nshoe_women0 = (7+11|12) inch\nshoe_boys0 = (3+11|12) inch\nshoe_girls0 = (3+7|12) inch\nshoesize_men = n => shoe_men0 + n shoesize_delta \nshoesize_men^-1 = shoesize_men => (shoesize_men+(-shoe_men0))/shoesize_delta\nshoesize_women = n => shoe_women0 + n shoesize_delta \nshoesize_women^-1 = shoesize_women => (shoesize_women+(-shoe_women0))/shoesize_delta\nshoesize_boys = n => shoe_boys0 + n shoesize_delta \nshoesize_boys^-1 = shoesize_boys => (shoesize_boys+(-shoe_boys0))/shoesize_delta\nshoesize_girls = n => shoe_girls0 + n shoesize_delta \nshoesize_girls^-1 = shoesize_girls => (shoesize_girls+(-shoe_girls0))/shoesize_delta\neuropeshoesize = 2|3 cm\nbuck = US$\nfin = 5 US$\nsawbuck = 10 US$\nusgrand = 1000 US$\ngreenback = US$\nkey = kg\nlid = 1 oz\nfootballfield = usfootballfield\nusfootballfield = 100 yards\ncanadafootballfield = 110 yards\nmarathon = 26 miles + 385 yards\nUK = UKlength_SJJ\nUK_ = UK\nbritish_ = UK\nUKlength_B = 0.9143992 meter / yard\nUKlength_SJJ = 0.91439841 meter / yard\nUKlength_K = meter / 39.37079 inch\nUKlength_C = meter / 1.09362311 yard\nbrnauticalmile = 6080 ft\nbrknot = brnauticalmile / hr\nbrcable = 1|10 brnauticalmile\nadmiraltymile = brnauticalmile\nadmiraltyknot = brknot\nadmiraltycable = brcable\nseamile = 6000 ft\nshackle = 15 fathoms\nclove = 7 lb\nstone = 14 lb\ntod = 28 lb\nbrquarterweight = 1|4 brhundredweight\nbrhundredweight = 8 stone\nlonghundredweight = brhundredweight\nlongton = 20 brhundredweight\nbrton = longton\nbrminim = 1|60 brdram\nbrscruple = 1|3 brdram\nfluidscruple = brscruple\nbrdram = 1|8 brfloz\nbrfluidounce = 1|20 brpint\nbrfloz = brfluidounce\nbrgill = 1|4 brpint\nbrpint = 1|2 brquart\nbrquart = 1|4 brgallon\nbrgallon = 4.54609 l\nbrbarrel = 36 brgallon\nbrbushel = 8 brgallon\nbrheapedbushel = 1.278 brbushel\nbrquarter = 8 brbushel\nbrchaldron = 36 brbushel\nbag = 4 brbushel\nbucket = 4 brgallon\nkilderkin = 2 brfirkin\nlast = 40 brbushel\nnoggin = brgill\npottle = 0.5 brgallon\npin = 4.5 brgallon\npuncheon = 72 brgallon\nseam = 8 brbushel\ncoomb = 4 brbushel\nboll = 6 brbushel\nfirlot = 1|4 boll\nbrfirkin = 9 brgallon\ncran = 37.5 brgallon\nbrwinehogshead = 52.5 brgallon\nbrhogshead = brwinehogshead\nbrbeerhogshead = 54 brgallon\nbrbeerbutt = 2 brbeerhogshead\nregisterton = 100 ft^3\nshippington = 40 ft^3\nbrshippington = 42 ft^3\nfreightton = shippington\ndisplacementton = 35 ft^3\nwaterton = 224 brgallon\nstrike = 70.5 l\namber = 4 brbushel\nimperialminim = brminim\nimperialscruple = brscruple\nimperialdram = brdram\nimperialfluidounce = brfluidounce\nimperialfloz = brfloz\nimperialgill = brgill\nimperialpint = brpint\nimperialquart = brquart\nimperialgallon = brgallon\nimperialbarrel = brbarrel\nimperialbushel = brbushel\nimperialheapedbushel = brheapedbushel\nimperialquarter = brquarter\nimperialchaldron = brchaldron\nimperialwinehogshead = brwinehogshead\nimperialhogshead = brhogshead\nimperialbeerhogshead = brbeerhogshead\nimperialbeerbutt = brbeerbutt\nimperialfirkin = brfirkin\nbarleycorn = 1|3 UKinch\nnail = 1|16 UKyard\npole = 16.5 UKft\nrope = 20 UKft\nenglishell = 45 UKinch\nflemishell = 27 UKinch\nell = englishell\nspan = 9 UKinch\ngoad = 4.5 UKft\nhide = 120 acre\nvirgate = 1|4 hide\nnook = 1|2 virgate\nrood = furlong rod\nenglishcarat = troyounce/151.5\nmancus = 2 oz\nmast = 2.5 lb\nnailkeg = 100 lbs\nbasebox = 31360 in^2\nmetre = meter\ngramme = gram\nlitre = liter\ndioptre = diopter\naluminium = aluminum\nsulphur = sulfur\ngeometricpace = 5 ft\npace = 2.5 ft\nUSmilitarypace = 30 in\nUSdoubletimepace = 36 in\nfingerbreadth = 7|8 in\nfingerlength = 4.5 in\nfinger = fingerbreadth\npalmwidth = hand\npalmlength = 8 in\nhand = 4 inch\nshaftment = 6 inch\nsmoot = 5 ft + 7 in\ntbl = tablespoon\ntbsp = tablespoon\ntblsp = tablespoon\nTb = tablespoon\ntsp = teaspoon\nsaltspoon = 1|4 tsp\nuscup = 8 usfloz\nustablespoon = 1|16 uscup\nusteaspoon = 1|3 ustablespoon\nustbl = ustablespoon\nustbsp = ustablespoon\nustblsp = ustablespoon\nustsp = usteaspoon\nmetriccup = 250 ml\nstickbutter = 1|4 lb\nlegalcup = 240 ml\nlegaltablespoon = 1|16 legalcup\nlegaltbsp = legaltablespoon\nscoop = n => 32 usfloz / n \nscoop^-1 = scoop => 32 usfloz / scoop\nnumber1can = 10 usfloz\nnumber2can = 19 usfloz\nnumber2.5can = 3.5 uscups\nnumber3can = 4 uscups\nnumber5can = 7 uscups\nnumber10can = 105 usfloz\nbrcup = 1|2 brpint\nbrteacup = 1|3 brpint\nbrtablespoon = 15 ml\nbrteaspoon = 1|3 brtablespoon\nbrdessertspoon = 2 brteaspoon\ndessertspoon = brdessertspoon\ndsp = dessertspoon\nbrtsp = brteaspoon\nbrtbl = brtablespoon\nbrtbsp = brtablespoon\nbrtblsp = brtablespoon\naustraliatablespoon = 20 ml\naustbl = australiatablespoon\naustbsp = australiatablespoon\naustblsp = australiatablespoon\naustraliateaspoon = 1|4 australiatablespoon\naustsp = australiateaspoon\netto = 100 g\netti = etto\ncatty = 0.5 kg\noldcatty = 4|3 lbs\ntael = 1|16 oldcatty\nmace = 0.1 tael\noldpicul = 100 oldcatty\npicul = 100 catty\nseer = 14400 grain\nser = seer\nmaund = 40 seer\npakistanseer = 1 kg\npakistanmaund = 40 pakistanseer\nchittak = 1|16 seer\ntola = 1|5 chittak\nollock = 1|4 liter\njapancup = 200 ml\nbutter = 8 oz/uscup\nbutter_clarified = 6.8 oz/uscup\ncocoa_butter = 9 oz/uscup\nshortening = 6.75 oz/uscup\noil = 7.5 oz/uscup\ncakeflour_sifted = 3.5 oz/uscup\ncakeflour_spooned = 4 oz/uscup\ncakeflour_scooped = 4.5 oz/uscup\nflour_sifted = 4 oz/uscup\nflour_spooned = 4.25 oz/uscup\nflour_scooped = 5 oz/uscup\nbreadflour_sifted = 4.25 oz/uscup\nbreadflour_spooned = 4.5 oz/uscup\nbreadflour_scooped = 5.5 oz/uscup\ncornstarch = 120 grams/uscup\ndutchcocoa_sifted = 75 g/uscup\ndutchcocoa_spooned = 92 g/uscup\ndutchcocoa_scooped = 95 g/uscup\ncocoa_sifted = 75 g/uscup\ncocoa_spooned = 82 g/uscup\ncocoa_scooped = 95 g/uscup\nheavycream = 232 g/uscup\nmilk = 242 g/uscup\nsourcream = 242 g/uscup\nmolasses = 11.25 oz/uscup\ncornsyrup = 11.5 oz/uscup\nhoney = 11.75 oz/uscup\nsugar = 200 g/uscup\npowdered_sugar = 4 oz/uscup\nbrownsugar_light = 217 g/uscup\nbrownsugar_dark = 239 g/uscup\nbaking_powder = 4.6 grams / ustsp\nsalt = 6 g / ustsp\nkoshersalt = 2.8 g / ustsp\nkoshersalt_morton = 4.8 g / ustsp\negg = 50 grams\neggwhite = 30 grams\neggyolk = 18.6 grams\neggvolume = 3 ustablespoons + 1|2 ustsp\neggwhitevolume = 2 ustablespoons\neggyolkvolume = 3.5 ustsp\nsugar_conc_bpe[K] = 0 0.0000   5 0.0788  10 0.1690  15 0.2729  20 0.3936  25 0.5351  30 0.7027  35 0.9036  40 1.1475  42 1.2599  44 1.3825  46 1.5165  48 1.6634  50 1.8249  52 2.0031  54 2.2005  56 2.4200  58 2.6651  60 2.9400  61 3.0902  62 3.2499  63 3.4198  64 3.6010  65 3.7944  66 4.0012  67 4.2227  68 4.4603  69 4.7156  70 4.9905  71 5.2870  72 5.6075  73 5.9546  74 6.3316  75 6.7417  76 7.1892  77 7.6786  78.0  8.2155  79.0  8.8061  80.0  9.4578  80.5  9.8092  81.0 10.1793  81.5 10.5693  82.0 10.9807  82.5 11.4152  83.0 11.8743  83.5 12.3601  84.0 12.8744  84.5 13.4197  85.0 13.9982  85.5 14.6128  86.0 15.2663  86.5 15.9620  87.0 16.7033  87.5 17.4943  88.0 18.3391  88.5 19.2424  89.0 20.2092  89.5 21.2452  90.0 22.3564  90.5 23.5493  91.0 24.8309  91.5 26.2086  92.0 27.6903  92.5 29.2839  93.0 30.9972  93.5 32.8374  94.0 34.8104  94.5 36.9195  95.0 39.1636  95.5 41.5348  96.0 44.0142  96.5 46.5668  97.0 49.1350  97.5 51.6347  98.0 53.9681  98.1 54.4091  98.2 54.8423  98.3 55.2692  98.4 55.6928  98.5 56.1174  98.6 56.5497  98.7 56.9999  98.8 57.4828  98.9 58.0206  99.0 58.6455  99.1 59.4062  99.2 60.3763  99.3 61.6706  99.4 63.4751  99.5 66.1062  99.6 70.1448  99.7 76.7867\nsugar_bpe = T => brix(~sugar_conc_bpe(T))\nsugar_bpe^-1 = sugar_bpe => sugar_conc_bpe(~brix(sugar_bpe))\nsugar_bp = T => brix(~sugar_conc_bpe(T-tempC(100))) \nsugar_bp^-1 = sugar_bp => sugar_conc_bpe(~brix(sugar_bp))+tempC(100)\nsugar_bpF = T => brix(~sugar_conc_bpe(tempF(T)+-tempC(100))) \nsugar_bpF^-1 = sugar_bpF => ~tempF(sugar_conc_bpe(~brix(sugar_bpF))+tempC(100))\nsugar_bpC = T => brix(~sugar_conc_bpe(tempC(T)+-tempC(100))) \nsugar_bpC^-1 = sugar_bpC => ~tempC(sugar_conc_bpe(~brix(sugar_bpC))+tempC(100))\nbaumeconst = 145\nbaume = d => (baumeconst/(baumeconst+-d)) g/cm^3 \nbaume^-1 = baume => (baume+((-g)/cm^3)) baumeconst / baume\ntwaddell = x => (1 + 0.005 x) g / cm^3 \ntwaddell^-1 = twaddell => 200 (twaddell / (g/cm^3) +- 1)\nquevenne = x => (1 + 0.001 x) g / cm^3 \nquevenne^-1 = quevenne => 1000 (quevenne / (g/cm^3) +- 1)\nbrix[0.99717g/cm^3] = 0 1.00000  1 1.00390  2 1.00780  3 1.01173  4 1.01569  5 1.01968     6 1.02369  7 1.02773  8 1.03180  9 1.03590 10 1.04003 11 1.04418    12 1.04837 13 1.05259 14 1.05683 15 1.06111 16 1.06542 17 1.06976    18 1.07413 19 1.07853 20 1.08297 21 1.08744 22 1.09194 23 1.09647    24 1.10104 25 1.10564 26 1.11027 27 1.11493 28 1.11963 29 1.12436    30 1.12913 31 1.13394 32 1.13877 33 1.14364 34 1.14855 35 1.15350    36 1.15847 37 1.16349 38 1.16853 39 1.17362 40 1.17874 41 1.18390    42 1.18910 43 1.19434 44 1.19961 45 1.20491 46 1.21026 47 1.21564    48 1.22106 49 1.22652 50 1.23202 51 1.23756 52 1.24313 53 1.24874    54 1.25439 55 1.26007 56 1.26580 57 1.27156 58 1.27736 59 1.28320    60 1.28909 61 1.29498 62 1.30093 63 1.30694 64 1.31297 65 1.31905    66 1.32516 67 1.33129 68 1.33748 69 1.34371 70 1.34997 71 1.35627    72 1.36261 73 1.36900 74 1.37541 75 1.38187 76 1.38835 77 1.39489    78 1.40146 79 1.40806 80 1.41471 81 1.42138 82 1.42810 83 1.43486    84 1.44165 85 1.44848 86 1.45535 87 1.46225 88 1.46919 89 1.47616    90 1.48317 91 1.49022 92 1.49730 93 1.50442 94 1.51157 95 1.51876\napidegree = x => 141.5 g/cm^3 / (x+131.5) \napidegree^-1 = apidegree => 141.5 (g/cm^3) / apidegree + (-131.5)\nouncedal = oz ft / s^2\npoundal = lb ft / s^2\ntondal = longton ft / s^2\npdl = poundal\nosi = ounce force / inch^2\npsi = pound force / inch^2\npsia = psi\ntsi = ton force / inch^2\nreyn = psi sec\nslug = lbf s^2 / ft\nslugf = slug force\nslinch = lbf s^2 / inch\nslinchf = slinch force\ngeepound = slug\nlbf = lb force\ntonf = ton force\nlbm = lb\nkip = 1000 lbf\nksi = kip / in^2\nmil = 0.001 inch\nthou = 0.001 inch\ntenth = 0.0001 inch\nmillionth = 1e-6 inch\ncircularinch = 1|4 pi in^2\ncircleinch = circularinch\ncylinderinch = circleinch inch\ncircularmil = 1|4 pi mil^2\ncmil = circularmil\ncental = 100 pound\ncentner = cental\ncaliber = 0.01 inch\nduty = ft lbf\ncelo = ft / s^2\njerk = ft / s^3\naustraliapoint = 0.01 inch\nsabin = ft^2\nstandardgauge = 4 ft + 8.5 in\nflag = 5 ft^2\nrollwallpaper = 30 ft^2\nfillpower = in^3 / ounce\npinlength = 1|16 inch\nbuttonline = 1|40 inch\nbeespace = 1|4 inch\ndiamond = 8|5 ft\nretmaunit = 1.75 in\nU = retmaunit\nRU = U\ncount = / pound\nENERGY = joule\nWORK = joule\ncal_IT = 4.1868 J\ncal_th = 4.184 J\ncal_fifteen = 4.18580 J\ncal_twenty = 4.18190 J\ncal_mean = 4.19002 J\ncalorie = cal_IT\ncal = calorie\ncalorie_IT = cal_IT\nthermcalorie = cal_th\ncalorie_th = thermcalorie\nCalorie = kilocalorie\nthermie = 1e6 cal_fifteen\nbtu = cal lb degF / gram K\nbritishthermalunit = btu\nbtu_IT = btu\nbtu_th = cal_th lb degF / gram K\nbtu_mean = cal_mean lb degF / gram K\nquad = quadrillion btu\nECtherm = 1.05506e8 J\nUStherm = 1.054804e8 J\ntherm = UStherm\nwater_fusion_heat = 79.8 calorie/g\nwater_vaporization_heat = 1160 J/g\nspecificheat_water = calorie / g K\nwater_specificheat = specificheat_water\nspecificheat_aluminum = 0.91 J/g K\nspecificheat_antimony = 0.21 J/g K\nspecificheat_barium = 0.20 J/g K\nspecificheat_beryllium = 1.83 J/g K\nspecificheat_bismuth = 0.13 J/g K\nspecificheat_cadmium = 0.23 J/g K\nspecificheat_cesium = 0.24 J/g K\nspecificheat_chromium = 0.46 J/g K\nspecificheat_cobalt = 0.42 J/g K\nspecificheat_copper = 0.39 J/g K\nspecificheat_gallium = 0.37 J/g K\nspecificheat_germanium = 0.32 J/g K\nspecificheat_gold = 0.13 J/g K\nspecificheat_hafnium = 0.14 J/g K\nspecificheat_indium = 0.24 J/g K\nspecificheat_iridium = 0.13 J/g K\nspecificheat_iron = 0.45 J/g K\nspecificheat_lanthanum = 0.195 J/g K\nspecificheat_lead = 0.13 J/g K\nspecificheat_lithium = 3.57 J/g K\nspecificheat_lutetium = 0.15 J/g K\nspecificheat_magnesium = 1.05 J/g K\nspecificheat_manganese = 0.48 J/g K\nspecificheat_mercury = 0.14 J/g K\nspecificheat_molybdenum = 0.25 J/g K\nspecificheat_nickel = 0.44 J/g K\nspecificheat_osmium = 0.13 J/g K\nspecificheat_palladium = 0.24 J/g K\nspecificheat_platinum = 0.13 J/g K\nspecificheat_plutonum = 0.13 J/g K\nspecificheat_potassium = 0.75 J/g K\nspecificheat_rhenium = 0.14 J/g K\nspecificheat_rhodium = 0.24 J/g K\nspecificheat_rubidium = 0.36 J/g K\nspecificheat_ruthenium = 0.24 J/g K\nspecificheat_scandium = 0.57  J/g K\nspecificheat_selenium = 0.32 J/g K\nspecificheat_silicon = 0.71 J/g K\nspecificheat_silver = 0.23 J/g K\nspecificheat_sodium = 1.21 J/g K\nspecificheat_strontium = 0.30 J/g K\nspecificheat_tantalum = 0.14 J/g K\nspecificheat_thallium = 0.13 J/g K\nspecificheat_thorium = 0.13 J/g K\nspecificheat_tin = 0.21 J/g K\nspecificheat_titanium = 0.54 J/g K\nspecificheat_tungsten = 0.13 J/g K\nspecificheat_uranium = 0.12 J/g K\nspecificheat_vanadium = 0.39 J/g K\nspecificheat_yttrium = 0.30 J/g K\nspecificheat_zinc = 0.39 J/g K\nspecificheat_zirconium = 0.27 J/g K\nspecificheat_ethanol = 2.3  J/g K\nspecificheat_ammonia = 4.6 J/g K\nspecificheat_freon = 0.91 J/g K\nspecificheat_gasoline = 2.22 J/g K\nspecificheat_iodine = 2.15 J/g K\nspecificheat_oliveoil = 1.97 J/g K\nspecificheat_hydrogen = 14.3 J/g K\nspecificheat_helium = 5.1932 J/g K\nspecificheat_argon = 0.5203 J/g K\nspecificheat_tissue = 3.5 J/g K\nspecificheat_diamond = 0.5091 J/g K\nspecificheat_granite = 0.79 J/g K\nspecificheat_graphite = 0.71 J/g K\nspecificheat_ice = 2.11 J/g K\nspecificheat_asphalt = 0.92 J/g K\nspecificheat_brick = 0.84 J/g K\nspecificheat_concrete = 0.88 J/g K\nspecificheat_glass_silica = 0.84 J/g K\nspecificheat_glass_flint = 0.503 J/g K\nspecificheat_glass_pyrex = 0.753 J/g K\nspecificheat_gypsum = 1.09 J/g K\nspecificheat_marble = 0.88 J/g K\nspecificheat_sand = 0.835 J/g K\nspecificheat_soil = 0.835 J/g K\nspecificheat_wood = 1.7 J/g K\nspecificheat_sucrose = 1.244 J/g K\ntonoil = 1e10 cal_IT\ntoe = tonoil\ntoncoal = 7e9 cal_IT\nbarreloil = 5.8 Mbtu\nnaturalgas_HHV = 1027 btu/ft^3\nnaturalgas_LHV = 930 btu/ft^3\nnaturalgas = naturalgas_HHV\ncharcoal = 30 GJ/tonne\nwoodenergy_dry = 20 GJ/tonne\nwoodenergy_airdry = 15 GJ/tonne\ncoal_bituminous = 27 GJ / tonne\ncoal_lignite = 15 GJ / tonne\ncoal_US = 22 GJ / uston\nethanol_HHV = 84000 btu/usgallon\nethanol_LHV = 75700 btu/usgallon\ndiesel = 130500 btu/usgallon\ngasoline_LHV = 115000 btu/usgallon\ngasoline_HHV = 125000 btu/usgallon\ngasoline = gasoline_HHV\nheating = 37.3 MJ/liter\nfueloil = 39.7 MJ/liter\npropane = 93.3 MJ/m^3\nbutane = 124 MJ/m^3\nuranium_pure = 200 MeV avogadro / (235.0439299 g/mol)\nuranium_natural = 0.7% uranium_pure\ncelsiusheatunit = cal lb degC / gram K\nchu = celsiusheatunit\nPOWER = watt\nhorsepower = 550 foot pound force / sec\nmechanicalhorsepower = horsepower\nhp = horsepower\nmetrichorsepower = 75 kilogram force meter / sec\nelectrichorsepower = 746 W\nboilerhorsepower = 9809.50 W\nwaterhorsepower = 746.043 W\nbrhorsepower = 745.70 W\ndonkeypower = 250 W\nchevalvapeur = metrichorsepower\nTHERMAL_CONDUCTIVITY = POWER / AREA (TEMPERATURE_DIFFERENCE/LENGTH)\nTHERMAL_RESISTIVITY = 1/THERMAL_CONDUCTIVITY\nTHERMAL_CONDUCTANCE = POWER / TEMPERATURE_DIFFERENCE\nTHERMAL_RESISTANCE = 1/THERMAL_CONDUCTANCE\nTHERMAL_ADMITTANCE = THERMAL_CONDUCTIVITY / LENGTH\nTHERMAL_INSULANCE = THERMAL_RESISTIVITY LENGTH\nTHERMAL_INSULATION = THERMAL_RESISTIVITY LENGTH\nRvalue = degF ft^2 hr / btu\nUvalue = 1/Rvalue\neuropeanUvalue = watt / m^2 K\nRSI = degC m^2 / W\nclo = 0.155 degC m^2 / W\ntog = 0.1 degC m^2 / W\nbel = x => 10^(x)\nbel^-1 = bel => log(bel)\ndecibel = x => 10^(x/10)\ndecibel^-1 = decibel => 10 log(decibel)\ndB = decibel\ndBW = x => dB(x) W \ndBW^-1 = dBW => ~dB(dBW/W)\ndBk = x => dB(x) kW \ndBk^-1 = dBk => ~dB(dBk/kW)\ndBf = x => dB(x) fW \ndBf^-1 = dBf => ~dB(dBf/fW)\ndBm = x => dB(x) mW \ndBm^-1 = dBm => ~dB(dBm/mW)\ndBmW = x => dBm(x) \ndBmW^-1 = dBmW => ~dBm(dBmW)\ndBJ = x => dB(x) J\ndBJ^-1 = dBJ => ~dB(dBJ/J)\ndBV = x => dB(0.5 x) V\ndBV^-1 = dBV => ~dB(dBV^2 / V^2)\ndBmV = x => dB(0.5 x) mV\ndBmV^-1 = dBmV => ~dB(dBmV^2/mV^2)\ndBuV = x => dB(0.5 x) microV \ndBuV^-1 = dBuV => ~dB(dBuV^2 / microV^2)\ndBu = x => dB(0.5 x) sqrt(mW 600 ohm) \ndBu^-1 = dBu => ~dB(dBu^2 / mW 600 ohm)\ndBv = x => dBu(x) \ndBv^-1 = dBv => ~dBu(dBv)\ndBSPL = x => dB(0.5 x) 20 microPa \ndBSPL^-1 = dBSPL => ~dB(dBSPL^2 / (20 microPa)^2)\ndBSIL = x => dB(x) 1e-12 W/m^2\ndBSIL^-1 = dBSIL => ~dB(dBSIL / (1e-12 W/m^2))\ndBSWL = x => dB(x) 1e-12 W\ndBSWL^-1 = dBSWL => ~dB(dBSWL/1e-12 W)\nENTROPY = ENERGY / TEMPERATURE\nclausius = 1e3 cal/K\nlangley = thermcalorie/cm^2\nponcelet = 100 kg force m / s\ntonrefrigeration = uston 144 btu / lb day\ntonref = tonrefrigeration\nrefrigeration = tonref / ton\nfrigorie = 1000 cal_fifteen\ntnt = 1e9 cal_th / ton\nairwatt = 8.5 (ft^3/min) inH2O\nperm_0C = grain / hr ft^2 inHg\nperm_zero = perm_0C\nperm_0 = perm_0C\nperm = perm_0C\nperm_23C = grain / hr ft^2 in Hg23C\nperm_twentythree = perm_23C\npair = 2\nbrace = 2\nnest = 3\nhattrick = 3\ndicker = 10\ndozen = 12\nbakersdozen = 13\nscore = 20\nflock = 40\ntimer = 40\nshock = 60\ntoncount = 100\nlonghundred = 120\ngross = 144\ngreatgross = 12 gross\ntithe = 1|10\nshortquire = 24\nquire = 25\nshortream = 480\nream = 500\nperfectream = 516\nbundle = 2 reams\nbale = 5 bundles\nlettersize = 8.5 inch 11 inch\nlegalsize = 8.5 inch 14 inch\nledgersize = 11 inch 17 inch\nexecutivesize = 7.25 inch 10.5 inch\nApaper = 8.5 inch 11 inch\nBpaper = 11 inch 17 inch\nCpaper = 17 inch 22 inch\nDpaper = 22 inch 34 inch\nEpaper = 34 inch 44 inch\npointthickness = mil\nA0paper = 841 mm 1189 mm\nA1paper = 594 mm  841 mm\nA2paper = 420 mm  594 mm\nA3paper = 297 mm  420 mm\nA4paper = 210 mm  297 mm\nA5paper = 148 mm  210 mm\nA6paper = 105 mm  148 mm\nA7paper = 74 mm  105 mm\nA8paper = 52 mm   74 mm\nA9paper = 37 mm   52 mm\nA10paper = 26 mm   37 mm\nB0paper = 1000 mm 1414 mm\nB1paper = 707 mm 1000 mm\nB2paper = 500 mm  707 mm\nB3paper = 353 mm  500 mm\nB4paper = 250 mm  353 mm\nB5paper = 176 mm  250 mm\nB6paper = 125 mm  176 mm\nB7paper = 88 mm  125 mm\nB8paper = 62 mm   88 mm\nB9paper = 44 mm   62 mm\nB10paper = 31 mm   44 mm\nC0paper = 917 mm 1297 mm\nC1paper = 648 mm  917 mm\nC2paper = 458 mm  648 mm\nC3paper = 324 mm  458 mm\nC4paper = 229 mm  324 mm\nC5paper = 162 mm  229 mm\nC6paper = 114 mm  162 mm\nC7paper = 81 mm  114 mm\nC8paper = 57 mm   81 mm\nC9paper = 40 mm   57 mm\nC10paper = 28 mm   40 mm\ngsm = grams / meter^2\npoundbookpaper = lb / 25 inch 38 inch ream\nlbbook = poundbookpaper\npoundtextpaper = poundbookpaper\nlbtext = poundtextpaper\npoundoffsetpaper = poundbookpaper\nlboffset = poundoffsetpaper\npoundbiblepaper = poundbookpaper\nlbbible = poundbiblepaper\npoundtagpaper = lb / 24 inch 36 inch ream\nlbtag = poundtagpaper\npoundbagpaper = poundtagpaper\nlbbag = poundbagpaper\npoundnewsprintpaper = poundtagpaper\nlbnewsprint = poundnewsprintpaper\npoundposterpaper = poundtagpaper\nlbposter = poundposterpaper\npoundtissuepaper = poundtagpaper\nlbtissue = poundtissuepaper\npoundwrappingpaper = poundtagpaper\nlbwrapping = poundwrappingpaper\npoundwaxingpaper = poundtagpaper\nlbwaxing = poundwaxingpaper\npoundglassinepaper = poundtagpaper\nlbglassine = poundglassinepaper\npoundcoverpaper = lb / 20 inch 26 inch ream\nlbcover = poundcoverpaper\npoundindexpaper = lb / 25.5 inch 30.5 inch ream\nlbindex = poundindexpaper\npoundindexbristolpaper = poundindexpaper\nlbindexbristol = poundindexpaper\npoundbondpaper = lb / 17 inch 22 inch ream\nlbbond = poundbondpaper\npoundwritingpaper = poundbondpaper\nlbwriting = poundwritingpaper\npoundledgerpaper = poundbondpaper\nlbledger = poundledgerpaper\npoundcopypaper = poundbondpaper\nlbcopy = poundcopypaper\npoundblottingpaper = lb / 19 inch 24 inch ream\nlbblotting = poundblottingpaper\npoundblankspaper = lb / 22 inch 28 inch ream\nlbblanks = poundblankspaper\npoundpostcardpaper = lb / 22.5 inch 28.5 inch ream\nlbpostcard = poundpostcardpaper\npoundweddingbristol = poundpostcardpaper\nlbweddingbristol = poundweddingbristol\npoundbristolpaper = poundweddingbristol\nlbbristol = poundbristolpaper\npoundboxboard = lb / 1000 ft^2\nlbboxboard = poundboxboard\npoundpaperboard = poundboxboard\nlbpaperboard = poundpaperboard\npaperM = lb / 1000\npaperdensity = 0.8 g/cm^3\npapercaliper = in paperdensity\npaperpoint = 0.001 in paperdensity\nfournierpoint = 0.1648 inch / 12\nolddidotpoint = 1|72 frenchinch\nbertholdpoint = 1|2660 m\nINpoint = 0.4 mm\ngermandidotpoint = 0.376065 mm\nmetricpoint = 3|8 mm\noldpoint = 1|72.27 inch\nprinterspoint = oldpoint\ntexpoint = oldpoint\ntexscaledpoint = 1|65536 texpoint\ntexsp = texscaledpoint\ncomputerpoint = 1|72 inch\npoint = computerpoint\ncomputerpica = 12 computerpoint\npostscriptpoint = computerpoint\npspoint = postscriptpoint\ntwip = 1|20 point\nQ = 1|4 mm\nfrenchprinterspoint = olddidotpoint\ndidotpoint = germandidotpoint\neuropeanpoint = didotpoint\ncicero = 12 didotpoint\nstick = 2 inches\nexcelsior = 3 oldpoint\nbrilliant = 3.5 oldpoint\ndiamondtype = 4 oldpoint\npearl = 5 oldpoint\nagate = 5.5 oldpoint\nruby = agate\nnonpareil = 6 oldpoint\nmignonette = 6.5 oldpoint\nemerald = mignonette\nminion = 7 oldpoint\nbrevier = 8 oldpoint\nbourgeois = 9 oldpoint\nlongprimer = 10 oldpoint\nsmallpica = 11 oldpoint\npica = 12 oldpoint\nenglish = 14 oldpoint\ncolumbian = 16 oldpoint\ngreatprimer = 18 oldpoint\nparagon = 20 oldpoint\nmeridian = 44 oldpoint\ncanon = 48 oldpoint\nnonplusultra = 2 didotpoint\nbrillant = 3 didotpoint\ndiamant = 4 didotpoint\nperl = 5 didotpoint\nnonpareille = 6 didotpoint\nkolonel = 7 didotpoint\npetit = 8 didotpoint\nborgis = 9 didotpoint\nkorpus = 10 didotpoint\ncorpus = korpus\ngaramond = korpus\nmittel = 14 didotpoint\ntertia = 16 didotpoint\ntext = 18 didotpoint\nkleine_kanon = 32 didotpoint\nkanon = 36 didotpoint\ngrobe_kanon = 42 didotpoint\nmissal = 48 didotpoint\nkleine_sabon = 72 didotpoint\ngrobe_sabon = 84 didotpoint\nINFORMATION = bit\nnat = (1/ln(2)) bits\nhartley = log2(10) bits\nban = hartley\ndit = hartley\nbps = bit/sec\nbyte = 8 bit\nB = byte\noctet = 8 bits\nnybble = 4 bits\nnibble = nybble\nnyp = 2 bits\nmeg = megabyte\ngig = gigabyte\njiffy = 0.01 sec\njiffies = jiffy\ncdaudiospeed = 44.1 kHz 2*16 bits\ncdromspeed = 75 2048 bytes / sec\ndvdspeed = 1385 kB/s\noctave = 2\nmajorsecond = musicalfifth^2 / octave\nmajorthird = 5|4\nminorthird = 6|5\nmusicalfourth = 4|3\nmusicalfifth = 3|2\nmajorsixth = musicalfourth majorthird\nminorsixth = musicalfourth minorthird\nmajorseventh = musicalfifth majorthird\nminorseventh = musicalfifth minorthird\npythagoreanthird = majorsecond musicalfifth^2 / octave\nsyntoniccomma = pythagoreanthird / majorthird\npythagoreancomma = musicalfifth^12 / octave^7\nsemitone = octave^(1|12)\nmusicalcent = x => semitone^(x/100) \nmusicalcent^-1 = musicalcent => 100 log(musicalcent)/log(semitone)\nwholenote!\nMUSICAL_NOTE_LENGTH = wholenote\nhalfnote = 1|2 wholenote\nquarternote = 1|4 wholenote\neighthnote = 1|8 wholenote\nsixteenthnote = 1|16 wholenote\nthirtysecondnote = 1|32 wholenote\nsixtyfourthnote = 1|64 wholenote\ndotted = 3|2\ndoubledotted = 7|4\nbreve = doublewholenote\nsemibreve = wholenote\nminimnote = halfnote\ncrotchet = quarternote\nquaver = eighthnote\nsemiquaver = sixteenthnote\ndemisemiquaver = thirtysecondnote\nhemidemisemiquaver = sixtyfourthnote\nsemidemisemiquaver = hemidemisemiquaver\nwoolyarnrun = 1600 yard/pound\nyarncut = 300 yard/pound\ncottonyarncount = 840 yard/pound\nlinenyarncount = 300 yard/pound\nworstedyarncount = 1680 ft/pound\nmetricyarncount = meter/gram\ndenier = 1|9 tex\nmanchesteryarnnumber = drams/1000 yards\npli = lb/in\ntypp = 1000 yd/lb\nasbestoscut = 100 yd/lb\ntex = gram / km\ndrex = 0.1 tex\npoumar = lb / 1e6 yard\nskeincotton = 80*54 inch\ncottonbolt = 120 ft\nwoolbolt = 210 ft\nbolt = cottonbolt\nheer = 600 yards\ncut = 300 yards\nlea = 300 yards\nsailmakersyard = 28.5 in\nsailmakersounce = oz / sailmakersyard 36 inch\nsilkmomme = momme / 25 yards 1.49 inch\nsilkmm = silkmomme\nmcg = microgram\niudiptheria = 62.8 microgram\niupenicillin = 0.6 microgram\niuinsulin = 41.67 microgram\ndrop = 1|20 ml\nbloodunit = 450 ml\nfrenchcathetersize = 1|3 mm\ncharriere = frenchcathetersize\nhectare = hectoare\nmegohm = megaohm\nkilohm = kiloohm\nmicrohm = microohm\nmegalerg = megaerg\nunitedstatesdollar = US$\nusdollar = US$\n$ = dollar\nmark = germanymark\nbolivar = venezuelabolivar\nvenezuelanbolivarfuerte = venezuelabolivar\nbolivarfuerte = bolivar\noldbolivar = 1|1000 bolivar\npeseta = spainpeseta\nrand = southafricarand\nescudo = portugalescudo\nguilder = netherlandsguilder\nhollandguilder = netherlandsguilder\npeso = mexicopeso\nyen = japanyen\nlira = italylira\nrupee = indiarupee\ndrachma = greecedrachma\nfranc = francefranc\nmarkka = finlandmarkka\nbritainpound = unitedkingdompound\ngreatbritainpound = unitedkingdompound\nunitedkingdompound = ukpound\npoundsterling = britainpound\nyuan = chinayuan\naustriaschilling = 1|13.7603 euro\nbelgiumfranc = 1|40.3399 euro\nestoniakroon = 1|15.6466 euro\nfinlandmarkka = 1|5.94573 euro\nfrancefranc = 1|6.55957 euro\ngermanymark = 1|1.95583 euro\ngreecedrachma = 1|340.75 euro\nirelandpunt = 1|0.787564 euro\nitalylira = 1|1936.27 euro\nluxembourgfranc = 1|40.3399 euro\nnetherlandsguilder = 1|2.20371 euro\nportugalescudo = 1|200.482 euro\nspainpeseta = 1|166.386 euro\ncypruspound = 1|0.585274 euro\nmaltalira = 1|0.429300 euro\nsloveniatolar = 1|239.640 euro\nslovakiakoruna = 1|30.1260 euro\nUKP = GBP\nVEB = 1|1000 VEF\nicelandkróna = icelandkrona\npolandzłoty = polandzloty\ntongapa’anga = tongapa'anga\nvenezuelabolívar = venezuelabolivar\nvietnamđồng = vietnamdong\nAED = uaedirham\nAFN = afghanafghani\nALL = albanialek\nAMD = armeniadram\nAOA = angolakwanza\nARS = argentinapeso\nAUD = australiadollar\nAWG = arubaflorin\nAZN = azerbaijanmanat\nBAM = bosniaconvertiblemark\nBBD = barbadosdollar\nBDT = bangladeshtaka\nBGN = bulgarialev\nBHD = bahraindinar\nBIF = burundifranc\nBMD = bermudadollar\nBND = bruneidollar\nBOB = boliviaboliviano\nBRL = brazilreal\nBSD = bahamasdollar\nBTN = bhutanngultrum\nBWP = botswanapula\nBYR = belarusruble\nBZD = belizedollar\nCAD = canadadollar\nCDF = drcfranccongolais\nCHF = swissfranc\nCLP = chilepeso\nCMG = sintmaartencaribbeanguilder\nCNY = chinayuan\nCOP = colombiapeso\nCRC = costaricacolon\nCUP = cubapeso\nCVE = capeverdeescudo\nCZK = czechkoruna\nDJF = djiboutifranc\nDKK = denmarkkrona\nDOP = dominicanrepublicpeso\nDZD = algeriadinar\nEGP = egyptpound\nERN = eritreanakfa\nETB = ethiopianbirr\nEUR = euro\nFJD = fijidollar\nFKP = falklandislandspound\nGBP = ukpound\nGEL = georgialari\nGGP = guernseypound\nGHS = ghanacedi\nGIP = gibraltarpound\nGMD = gambiadalasi\nGNF = guineafranc\nGTQ = guatemalaquetzal\nGYD = guyanadollar\nHKD = hongkongdollar\nHNL = honduraslempira\nHRK = croatiakuna\nHTG = haitigourde\nHUF = hungariaforint\nIDR = indonesiarupiah\nILS = israelnewshekel\nIMP = manxpound\nINR = indiarupee\nIQD = iraqdinar\nIRR = iranrial\nISK = icelandkrona\nJEP = jerseypound\nJMD = jamaicadollar\nJOD = jordandinar\nJPY = japanyen\nKES = kenyaschilling\nKGS = kyrgyzstansom\nKHR = cambodiariel\nKMF = comorosfranc\nKPW = northkoreawon\nKRW = southkoreawon\nKWD = kuwaitdinar\nKYD = caymanislandsdollar\nKZT = kazakhstantenge\nLAK = laokip\nLBP = lebanonpound\nLKR = srilankanrupee\nLRD = liberiadollar\nLTL = lithuanialita\nLVL = latvialat\nLYD = libyadinar\nMAD = moroccodirham\nMDL = moldovaleu\nMGA = madagascarariary\nMKD = macedoniadenar\nMMK = myanmarkyat\nMNT = mongoliatugrik\nMOP = macaupataca\nMRO = mauritaniaouguiya\nMUR = mauritiusrupee\nMVR = maldiverufiyaa\nMWK = malawikwacha\nMXN = mexicopeso\nMYR = malaysiaringgit\nMZN = mozambicanmetical\nNAD = namibiadollar\nNGN = nigerianaira\nNIO = nicaraguacordobaoro\nNOK = norwaykrone\nNPR = nepalrupee\nNZD = newzealanddollar\nOMR = omanrial\nPAB = panamabalboa\nPEN = perunuevosol\nPGK = papuanewguineakina\nPHP = philippinepeso\nPKR = pakistanrupee\nPLN = polandzloty\nPYG = paraguayguarani\nQAR = qatarrial\nRON = romanianewlei\nRSD = serbiadinar\nRUB = russiarouble\nRWF = rwandafranc\nSAR = saudiarabiariyal\nSBD = solomonislandsdollar\nSCR = seychellesrupee\nSDG = sudanpound\nSEK = swedenkrona\nSGD = singaporedollar\nSHP = sainthelenapound\nSLL = sierraleoneleone\nSOS = somaliaschilling\nSRD = surinamedollar\nSTD = saotome&principedobra\nSVC = elsalvadorcolon\nSYP = syriapound\nSZL = swazilandlilangeni\nTHB = thailandbaht\nTJS = tajikistansomoni\nTMT = turkmenistanmanat\nTND = tunisiadinar\nTOP = tongapa'anga\nTRY = turkeylira\nTTD = trinidadandtobagodollar\nTVD = tuvaludollar\nTWD = taiwandollar\nTZS = tanzaniashilling\nUAH = ukrainehryvnia\nUGX = ugandaschilling\nUSD = usdollar\nUYU = uruguaypeso\nUZS = uzbekistansum\nVEF = venezuelabolivar\nVND = vietnamdong\nVUV = vanuatuvatu\nWST = samoatala\nXAF = centralafricancfafranc\nXAG = silverounce\nXAU = goldounce\nXCD = eastcaribbeandollar\nXDR = specialdrawingrights\nXOF = westafricanfranc\nXPD = palladiumounce\nXPF = cfpfranc\nXPT = platinumounce\nYER = yemenrial\nZAR = southafricarand\nZMW = zambiakwacha\nZWL = zimbabwedollar\nuaedirham = 1|4.1151878572098 euro\nafghanafghani = 1|74.724 euro\nalbanialek = 1|138.17 euro\narmeniadram = 1|539.30992141454 euro\nangolakwanza = 1|176.53 euro\nargentinapeso = 1|16.514112223097 euro\naustraliadollar = 1|1.4766 euro\narubaflorin = 1|2.026996 euro\nazerbaijanmanat = 1|1.7540635308589 euro\nbosniaconvertiblemark = 1|1.95583 euro\nbarbadosdollar = 1|2.2648 euro\nbangladeshtaka = 1|85.405 euro\nbulgarialev = 1|1.9558 euro\nbahraindinar = 1|0.4257824 euro\nburundifranc = 1|1724.1 euro\nbermudadollar = 1|1.1324 euro\nbruneidollar = 1|1.5327 euro\nboliviaboliviano = 1|7.4762 euro\nbrazilreal = 1|4.1275 euro\nbahamasdollar = 1|1.1324 euro\nbhutanngultrum = 1|75.1760 euro\nbotswanapula = 1|12.415 euro\nbelarusruble = 1|22663.261093911 euro\nbelizedollar = 1|2.2648 euro\ncanadadollar = 1|1.4755 euro\ndrcfranccongolais = 1|998.43 euro\nswissfranc = 1|1.0913 euro\nchilepeso = 1|764.09989594173 euro\nsintmaartencaribbeanguilder = 1|2.026996 euro\nchinayuan = 1|7.3366 euro\ncolombiapeso = 1|3431.308411215 euro\ncostaricacolon = 1|583.52 euro\ncubapeso = 1|1.0888 euro\ncapeverdeescudo = 1|110.265 euro\nczechkoruna = 1|27.075 euro\ndjiboutifranc = 1|201.2512604 euro\ndenmarkkrona = 1|7.4531 euro\ndominicanrepublicpeso = 1|49.448 euro\nalgeriadinar = 1|118.21 euro\negyptpound = 1|10.058147713951 euro\neritreanakfa = 1|16.986 euro\nethiopianbirr = 1|23.239 euro\neuro = 1.1324 US$\nfijidollar = 1|0.42647981593809 euro\nfalklandislandspound = 1|0.78580 euro\nukpound = 1|0.78580 euro\ngeorgialari = 1|2.6498582202112 euro\nguernseypound = 1|0.78580 euro\nghanacedi = 1|4.3449704142012 euro\ngibraltarpound = 1|0.78580 euro\ngambiadalasi = 1|43.002 euro\nguineafranc = 1|8337 euro\nguatemalaquetzal = 1|8.9168184578021 euro\nguyanadollar = 1|225.6 euro\nhongkongdollar = 1|8.7810 euro\nhonduraslempira = 1|25.607672188317 euro\ncroatiakuna = 1|7.5168 euro\nhaitigourde = 1|66.19 euro\nhungariaforint = 1|314.29 euro\nindonesiarupiah = 1|15004.12 euro\nisraelnewshekel = 1|4.2899 euro\nmanxpound = 1|0.78580 euro\nindiarupee = 1|75.1760 euro\niraqdinar = 1|1300.2 euro\niranrial = 1|0.0234 euro\nicelandkrona = 1|140.59346991037 euro\njerseypound = 1|0.78580 euro\njamaicadollar = 1|137.76735459662 euro\njordandinar = 1|0.8028716 euro\njapanyen = 1|127.37 euro\nkenyaschilling = 1|110.67 euro\nkyrgyzstansom = 1|79.380806072655 euro\ncambodiariel = 1|4399 euro\ncomorosfranc = 1|491.96775 euro\nnorthkoreawon = 1|141.45 euro\nsouthkoreawon = 1|1293.67 euro\nkuwaitdinar = 1|0.33855486695649 euro\ncaymanislandsdollar = 1|0.94366666666667 euro\nkazakhstantenge = 1|385.68141903758 euro\nlaokip = 1|8853.6 euro\nlebanonpound = 1|1707.093 euro\nsrilankanrupee = 1|0.0059397518646082 euro\nliberiadollar = 1|100.71 euro\nlithuanialita = 1|3.45280 euro\nlatvialat = 1|0.702804 euro\nlibyadinar = 1|1.4994 euro\nmoroccodirham = 1|10.951528709918 euro\nmoldovaleu = 1|10.98035 euro\nmadagascarariary = 1|3534.2 euro\nmacedoniadenar = 1|61.682 euro\nmyanmarkyat = 1|1372.523364486 euro\nmongoliatugrik = 1|0.0346 euro\nmacaupataca = 1|9.04443 euro\nmauritaniaouguiya = 1|376.77 euro\nmauritiusrupee = 1|39.121 euro\nmaldiverufiyaa = 1|15.845 euro\nmalawikwacha = 1|823.89 euro\nmexicopeso = 1|19.5281 euro\nmalaysiaringgit = 1|4.4502 euro\nmozambicanmetical = 1|53.035 euro\nnamibiadollar = 1|16.9129 euro\nnigerianaira = 1|216.89 euro\nnicaraguacordobaoro = 1|30.609 euro\nnorwaykrone = 1|9.4300 euro\nnepalrupee = 1|120.2816 euro\nnewzealanddollar = 1|1.6356 euro\nomanrial = 1|0.43540449092587 euro\npanamabalboa = 1|1.1324 euro\nperunuevosol = 1|3.8086099585062 euro\npapuanewguineakina = 1|0.28833372613717 euro\nphilippinepeso = 1|52.056 euro\npakistanrupee = 1|0.0084298928382431 euro\npolandzloty = 1|4.2538 euro\nparaguayguarani = 1|6230.7 euro\nqatarrial = 1|4.121936 euro\nromanianewlei = 1|4.4623 euro\nserbiadinar = 1|122.74444705277 euro\nrussiarouble = 1|76.7842 euro\nrwandafranc = 1|832.56 euro\nsaudiarabiariyal = 1|4.2465 euro\nsolomonislandsdollar = 1|0.11175460391698 euro\nseychellesrupee = 1|15.763 euro\nsudanpound = 1|7.0184 euro\nswedenkrona = 1|9.2420 euro\nsingaporedollar = 1|1.5311 euro\nsainthelenapound = 1|0.78580 euro\nsierraleoneleone = 1|4386.6 euro\nsomaliaschilling = 1|669.07 euro\nsurinamedollar = 1|4.3541 euro\nsaotome&principedobra = 1|24496 euro\nelsalvadorcolon = 1|9.5222 euro\nsyriapound = 1|239.51 euro\nswazilandlilangeni = 1|16.9129 euro\nthailandbaht = 1|39.894 euro\ntajikistansomoni = 1|8.8128335808018 euro\nturkmenistanmanat = 1|3.9215535714286 euro\ntunisiadinar = 1|2.2854030501089 euro\ntongapa'anga = 1|0.40472409686383 euro\nturkeylira = 1|3.2140 euro\ntrinidadandtobagodollar = 1|7.0780662 euro\ntuvaludollar = 1|1.4766 euro\ntaiwandollar = 1|36.468835361311 euro\ntanzaniashilling = 1|2383.4 euro\nukrainehryvnia = 1|19.241014210086 euro\nugandaschilling = 1|3717.2 euro\nuruguaypeso = 1|35.016 euro\nuzbekistansum = 1|3200.8016324151 euro\nvenezuelabolivar = 1|11.331790123457 euro\nvietnamdong = 1|25320.689655172 euro\nvanuatuvatu = 1|0.0081395364309789 euro\nsamoatala = 1|0.34916376505508 euro\ncentralafricancfafranc = 1|655.957 euro\nsilverounce = 1|0.43459 euro\ngoldounce = 1|36.225 euro\neastcaribbeandollar = 1|3.05748 euro\nspecialdrawingrights = 1|1.9241014210086 euro\nwestafricanfranc = 1|655.957 euro\npalladiumounce = 1|14.595 euro\ncfpfranc = 1|119.33 euro\nplatinumounce = 1|27.144 euro\nyemenrial = 1|234.13 euro\nsouthafricarand = 1|16.9129 euro\nzambiakwacha = 1|12.396 euro\nzimbabwedollar = 1|353.62 euro\ngoldprice = 1225.90 US$/troyounce\nplatinumprice = 968.50 US$/troyounce\nsilverprice = 15.29 US$/troyounce\nolddollargold = 23.22 grains goldprice\nnewdollargold = 96|7 grains goldprice\ndollargold = newdollargold\npoundgold = 113 grains goldprice\nUSpennyweight = 2.5 grams\nUSnickelweight = 5 grams\nUSdimeweight = US$ 0.10 / (20 US$ / lb)\nUSquarterweight = US$ 0.25 / (20 US$ / lb)\nUShalfdollarweight = US$ 0.50 / (20 US$ / lb)\nUSdollarmass = 8.1 grams\nquid = britainpound\nfiver = 5 quid\ntenner = 10 quid\nmonkey = 500 quid\nbrgrand = 1000 quid\nbob = shilling\nshilling = 1|20 britainpound\noldpence = 1|12 shilling\nfarthing = 1|4 oldpence\nguinea = 21 shilling\ncrown = 5 shilling\nflorin = 2 shilling\ngroat = 4 oldpence\ntanner = 6 oldpence\nbrpenny = 0.01 britainpound\npence = brpenny\ntuppence = 2 pence\ntuppenny = tuppence\nha'penny = halfbrpenny\nhapenny = ha'penny\noldpenny = oldpence\noldtuppence = 2 oldpence\noldtuppenny = oldtuppence\nthreepence = 3 oldpence\nthreepenny = threepence\noldthreepence = threepence\noldthreepenny = threepence\noldhalfpenny = halfoldpenny\noldha'penny = oldhalfpenny\noldhapenny = oldha'penny\nbrpony = 25 britainpound\nloony = 1 canadadollar\ntoony = 2 canadadollar\ncord = 4*4*8 ft^3\nfacecord = 1|2 cord\ncordfoot = 1|8 cord\ncordfeet = cordfoot\nhousecord = 1|3 cord\nboardfoot = ft^2 inch\nboardfeet = boardfoot\nfbm = boardfoot\nstack = 4 yard^3\nrick = 4 ft 8 ft 16 inches\nstere = m^3\ntimberfoot = ft^3\nstandard = 120 12 ft 11 in 1.5 in\nhoppusfoot = (4/pi) ft^3\nhoppusboardfoot = 1|12 hoppusfoot\nhoppuston = 50 hoppusfoot\ndeal = 12 ft 11 in 2.5 in\nwholedeal = 12 ft 11 in 1.25 in\nsplitdeal = 12 ft 11 in 5|8 in\npoundcut = pound / gallon\nlbcut = poundcut\nFLUID_FLOW = VOLUME / TIME\ncumec = m^3/s\ncusec = ft^3/s\ngph = gal/hr\ngpm = gal/min\nmgd = megagal/day\ncfs = ft^3/s\ncfh = ft^3/hour\ncfm = ft^3/min\nlpm = liter/min\nlfm = ft/min\npru = mmHg / (ml/min)\nminersinchAZ = 1.5 ft^3/min\nminersinchCA = 1.5 ft^3/min\nminersinchMT = 1.5 ft^3/min\nminersinchNV = 1.5 ft^3/min\nminersinchOR = 1.5 ft^3/min\nminersinchID = 1.2 ft^3/min\nminersinchKS = 1.2 ft^3/min\nminersinchNE = 1.2 ft^3/min\nminersinchNM = 1.2 ft^3/min\nminersinchND = 1.2 ft^3/min\nminersinchSD = 1.2 ft^3/min\nminersinchUT = 1.2 ft^3/min\nminersinchCO = 1 ft^3/sec / 38.4\nminersinchBC = 1.68 ft^3/min\nsverdrup = 1e6 m^3 / sec\nGAS_FLOW = PRESSURE FLUID_FLOW\nsccm = atm cc/min\nsccs = atm cc/sec\nscfh = atm ft^3/hour\nscfm = atm ft^3/min\nslpm = atm liter/min\nslph = atm liter/hour\nlusec = liter micron Hg / s\ng00 = (-1)\ng000 = (-2)\ng0000 = (-3)\ng00000 = (-4)\ng000000 = (-5)\ng0000000 = (-6)\nwiregauge = g => 1|200 92^((36+(-g))/39) in\nwiregauge^-1 = wiregauge => 36+(-39)ln(200 wiregauge/in)/ln(92)\nawg = wiregauge\nbrwiregauge[in] = -6 0.5           -5 0.464         -3 0.4           -2 0.372          3 0.252          6 0.192         10 0.128         14 0.08          19 0.04          23 0.024         26 0.018         28 0.0148        30 0.0124        39 0.0052        49 0.0012        50 0.001\nplategauge[(oz/ft^2)/ = 480*lb/ft^3 => -5 300          1 180         14  50         16  40         17  36         20  24         26  12         31   7         36   4.5       38   4\nstdgauge[(oz/ft^2)/ = 501.84*lb/ft^3 => -5 300          1 180         14  50         16  40         17  36         20  24         26  12         31   7         36   4.5       38   4\nzincgauge[in] = 1 0.002         10 0.02          15 0.04          19 0.06          23 0.1           24 0.125         27 0.5           28 1\nscrewgauge = g => (.06 + .013 g) in \nscrewgauge^-1 = screwgauge => (screwgauge/in + (-.06)) / .013\ngrit_P[micron] = 12 1815         16 1324         20 1000         24 764         30 642         36 538         40 425         50 336         60 269         80 201         100 162         120 125         150 100         180 82         220 68         240 58.5         280 52.2         320 46.2         360 40.5         400 35         500 30.2         600 25.8         800 21.8         1000 18.3         1200 15.3         1500 12.6         2000 10.3         2500 8.4\ngrit_F[micron] = 4 4890         5 4125         6 3460         7 2900         8 2460         10 2085         12 1765         14 1470         16 1230         20 1040         22 885         24 745         30 625         36 525         40 438         46 370         54 310         60 260         70 218         80 185         90 154         100 129         120 109         150 82         180 69         220 58         230 53         240 44.5         280 36.5         320 29.2         360 22.8         400 17.3         500 12.8         600 9.3         800 6.5         1000 4.5         1200 3         1500 2.0         2000 1.2\nansibonded[micron] = 4 4890     5 4125     6 3460     7 2900     8 2460     10 2085     12 1765     14 1470     16 1230     20 1040     22 885     24 745     30 625     36 525     40 438     46 370     54 310     60 260     70 218     80 185     90 154     100 129     120 109     150 82     180 69     220 58     240 50     280 39.5     320 29.5     360 23     400 18.25     500 13.9     600 10.55     800 7.65     1000 5.8     1200 3.8\ngrit_ansibonded = ansibonded\nansicoated[micron] = noerror     4 4890     5 4125     6 3460     7 2900     8 2460     10 2085     12 1765     14 1470     16 1230     20 1040     22 885     24 745     30 625     36 525     40 438     46 370     54 310     60 260     70 218     80 185     90 154     100 129     120 109     150 82     180 69     220 58     240 50     280 39.5     320 29.5     360 23     400 18.25     500 13.9     600 10.55     800 11.5     1000 9.5     2000 7.2     2500 5.5     3000 4     4000 3     6000 2     8000 1.2\ngrit_ansicoated = ansicoated\njisgrit[micron] = 150 75      180 63      220 53      280 48      320 40      360 35      400 30      600 20      700 17      800 14      1000 11.5      1200 9.5      1500 8      2000 6.7      2500 5.5      3000 4      4000 3      6000 2      8000 1.2\ngrit_A[micron] = 16 15.3      25 21.8      30 23.6      35 25.75      45 35      60 46.2      65 53.5      75 58.5      90 65      110 78      130 93      160 127      200 156\ndmtxxcoarse = 120 micron\ndmtsilver = dmtxxcoarse\ndmtxx = dmtxxcoarse\ndmtxcoarse = 60 micron\ndmtx = dmtxcoarse\ndmtblack = dmtxcoarse\ndmtcoarse = 45 micron\ndmtc = dmtcoarse\ndmtblue = dmtcoarse\ndmtfine = 25 micron\ndmtred = dmtfine\ndmtf = dmtfine\ndmtefine = 9 micron\ndmte = dmtefine\ndmtgreen = dmtefine\ndmtceramic = 7 micron\ndmtcer = dmtceramic\ndmtwhite = dmtceramic\ndmteefine = 3 micron\ndmttan = dmteefine\ndmtee = dmteefine\nhardtranslucentarkansas = 6 micron\nsoftarkansas = 22 micron\nextrafineindia = 22 micron\nfineindia = 35 micron\nmediumindia = 53.5 micron\ncoarseindia = 97 micron\nfinecrystolon = 45 micron\nmediumcrystalon = 78 micron\ncoarsecrystalon = 127 micron\nhardblackarkansas = 6 micron\nhardwhitearkansas = 11 micron\nwashita = 35 micron\nringsize = n => (1.4216+.1018 n) in \nringsize^-1 = ringsize => (ringsize/in + (-1.4216))/.1018\nsizeAring = 37.50 mm\nsizeBring = 38.75 mm\nsizeCring = 40.00 mm\nsizeDring = 41.25 mm\nsizeEring = 42.50 mm\nsizeFring = 43.75 mm\nsizeGring = 45.00 mm\nsizeHring = 46.25 mm\nsizeIring = 47.50 mm\nsizeJring = 48.75 mm\nsizeKring = 50.00 mm\nsizeLring = 51.25 mm\nsizeMring = 52.50 mm\nsizeNring = 53.75 mm\nsizeOring = 55.00 mm\nsizePring = 56.25 mm\nsizeQring = 57.50 mm\nsizeRring = 58.75 mm\nsizeSring = 60.00 mm\nsizeTring = 61.25 mm\nsizeUring = 62.50 mm\nsizeVring = 63.75 mm\nsizeWring = 65.00 mm\nsizeXring = 66.25 mm\nsizeYring = 67.50 mm\nsizeZring = 68.75 mm\njpringsize = n => (38|3 + n/3) pi mm \njpringsize^-1 = jpringsize => 3 jpringsize/ pi mm + (-38)\neuringsize = n => (n+40) mm \neuringsize^-1 = euringsize => euringsize/mm + (-40)\nmph = mile/hr\nmpg = mile/gal\nkph = km/hr\nfL = footlambert\nfpm = ft/min\nfps = ft/s\nrpm = rev/min\nrps = rev/sec\nmi = mile\nsmi = mile\nnmi = nauticalmile\nmbh = 1e3 btu/hour\nmcm = 1e3 circularmil\nipy = inch/year\nccf = 100 ft^3\nMcf = 1000 ft^3\nkp = kilopond\nkpm = kp meter\nWh = W hour\nhph = hp hour\nplf = lb / foot\npa = Pa\nev = eV\nhg = Hg\noe = Oe\nmh = mH\nrd = rod\npf = pF\ngr = grain\nnt = N\nhz = Hz\nhd = hogshead\ndry = drygallon/gallon\nnmile = nauticalmile\nbeV = GeV\nbev = beV\ncoul = C\nbecquerel = /s\nBq = becquerel\ncurie = 3.7e10 Bq\nCi = curie\nrutherford = 1e6 Bq\nRADIATION_DOSE = gray\ngray = J/kg\nGy = gray\nrad = 1e-2 Gy\nrep = 8.38 mGy\nsievert = J/kg\nSv = sievert\nrem = 1e-2 Sv\nroentgen = 2.58e-4 C / kg\nrontgen = roentgen\nsievertunit = 8.38 rontgen\neman = 1e-7 Ci/m^3\nmache = 3.7e-7 Ci/m^3\nactinium = 227.0278\naluminum = 26.981539\namericium = 243.0614\nantimony = 121.760\nargon = 39.948\narsenic = 74.92159\nastatine = 209.9871\nbarium = 137.327\nberkelium = 247.0703\nberyllium = 9.012182\nbismuth = 208.98037\nboron = 10.811\nbromine = 79.904\ncadmium = 112.411\ncalcium = 40.078\ncalifornium = 251.0796\ncarbon = 12.011\ncerium = 140.115\ncesium = 132.90543\nchlorine = 35.4527\nchromium = 51.9961\ncobalt = 58.93320\ncopper = 63.546\ncurium = 247.0703\ndysprosium = 162.50\neinsteinium = 252.083\nerbium = 167.26\neuropium = 151.965\nfermium = 257.0951\nfluorine = 18.9984032\nfrancium = 223.0197\ngadolinium = 157.25\ngallium = 69.723\ngermanium = 72.61\ngold = 196.96654\nhafnium = 178.49\nhelium = 4.002602\nholmium = 164.93032\nhydrogen = 1.00794\nindium = 114.818\niodine = 126.90447\niridium = 192.217\niron = 55.845\nkrypton = 83.80\nlanthanum = 138.9055\nlawrencium = 262.11\nlead = 207.2\nlithium = 6.941\nlutetium = 174.967\nmagnesium = 24.3050\nmanganese = 54.93805\nmendelevium = 258.10\nmercury = 200.59\nmolybdenum = 95.94\nneodymium = 144.24\nneon = 20.1797\nneptunium = 237.0482\nnickel = 58.6934\nniobium = 92.90638\nnitrogen = 14.00674\nnobelium = 259.1009\nosmium = 190.23\noxygen = 15.9994\npalladium = 106.42\nphosphorus = 30.973762\nplatinum = 195.08\nplutonium = 244.0642\npolonium = 208.9824\npotassium = 39.0983\npraseodymium = 140.90765\npromethium = 144.9127\nprotactinium = 231.03588\nradium = 226.0254\nradon = 222.0176\nrhenium = 186.207\nrhodium = 102.90550\nrubidium = 85.4678\nruthenium = 101.07\nsamarium = 150.36\nscandium = 44.955910\nselenium = 78.96\nsilicon = 28.0855\nsilver = 107.8682\nsodium = 22.989768\nstrontium = 87.62\nsulfur = 32.066\ntantalum = 180.9479\ntechnetium = 97.9072\ntellurium = 127.60\nterbium = 158.92534\nthallium = 204.3833\nthorium = 232.0381\nthullium = 168.93421\ntin = 118.710\ntitanium = 47.867\ntungsten = 183.84\nuranium = 238.0289\nvanadium = 50.9415\nxenon = 131.29\nytterbium = 173.04\nyttrium = 88.90585\nzinc = 65.39\nzirconium = 91.224\nair = 28.967\npeople = 1\nperson = people\ndeath = people\ncapita = people\npercapita = / capita\nTim = 12^-4 hour\nGrafut = gravity Tim^2\nSurf = Grafut^2\nVolm = Grafut^3\nVlos = Grafut/Tim\nDenz = Maz/Volm\nMag = Maz gravity\nMaz = Volm kg / oldliter\nTm = Tim\nGf = Grafut\nSf = Surf\nVm = Volm\nVl = Vlos\nMz = Maz\nDz = Denz\nZena_ = 12\nDuna_ = 12^2\nTrina_ = 12^3\nQuedra_ = 12^4\nQuena_ = 12^5\nHesa_ = 12^6\nSeva_ = 12^7\nAka_ = 12^8\nNeena_ = 12^9\nDexa_ = 12^10\nLefa_ = 12^11\nZennila_ = 12^12\nZeni_ = 12^-1\nDuni_ = 12^-2\nTrini_ = 12^-3\nQuedri_ = 12^-4\nQueni_ = 12^-5\nHesi_ = 12^-6\nSevi_ = 12^-7\nAki_ = 12^-8\nNeeni_ = 12^-9\nDexi_ = 12^-10\nLefi_ = 12^-11\nZennili_ = 12^-12\nwari_proportion = 1|10\nwari = wari_proportion\nbu_proportion = 1|100\nrin_proportion = 1|1000\nmou_proportion = 1|10000\nshaku = 1|3.3 m\nmou = 1|10000 shaku\nrin = 1|1000 shaku\nbu_distance = 1|100 shaku\nsun = 1|10 shaku\njou_distance = 10 shaku\njou = jou_distance\nkanejakusun = sun\nkanejaku = shaku\nkanejakujou = jou\ntaichi = shaku\ntaicun = sun\n台尺 = taichi\n台寸 = taicun\nkujirajaku = 10|8 shaku\nkujirajakusun = 1|10 kujirajaku\nkujirajakubu = 1|100 kujirajaku\nkujirajakujou = 10 kujirajaku\ntan_distance = 3 kujirajakujou\nken = 6 shaku\nchou_distance = 60 ken\nchou = chou_distance\nri = 36 chou\ngou_area = 1|10 tsubo\ntsubo = 36 shaku^2\nse = 30 tsubo\ntan_area = 10 se\nchou_area = 10 tan_area\nping = tsubo\njia = 2934 ping\nfen = 1|10 jia\nfen_area = 1|10 jia\n坪 = ping\n甲 = jia\n分 = fen\n分地 = fen_area\nedoma = (5.8*2.9) shaku^2\nkyouma = (6.3*3.15) shaku^2\nchuukyouma = (6*3) shaku^2\njou_area = edoma\ntatami = jou_area\nshaku_volume = 1|10 gou_volume\ngou_volume = 1|10 shou\ngou = gou_volume\nshou = (4.9*4.9*2.7) sun^3\nkoku = 10 to\nrin_weight = 1|10 bu_weight\nbu_weight = 1|10 monme\nfun = 1|10 monme\nmonme = momme\nkin = 160 monme\nkan = 1000 monme\nkwan = kan\ntaijin = kin\ntailiang = 10 monme\ntaiqian = monme\n台斤 = taijin\n台兩 = tailiang\n台錢 = taiqian\naustraliasquare = (10 ft)^2\nzentner = 50 kg\ndoppelzentner = 2 zentner\npfund = 500 g\ndessiatine = 2400 sazhen^2\ndessjatine = dessiatine\nfunt = 409.51718 grams\nzolotnik = 1|96 funt\npood = 40 funt\narshin = (2 + 1|3) feet\nsazhen = 3 arshin\nverst = 500 sazhen\nversta = verst\nborderverst = 1000 sazhen\nrussianmile = 7 verst\nfrenchfoot = 144|443.296 m\npied = frenchfoot\nfrenchfeet = frenchfoot\nfrenchinch = 1|12 frenchfoot\nfrenchthumb = frenchinch\npouce = frenchthumb\nfrenchline = 1|12 frenchinch\nligne = frenchline\nfrenchpoint = 1|12 frenchline\ntoise = 6 frenchfeet\narpent = 180^2 pied^2\nfrenchgrain = 1|18827.15 kg\nfrenchpound = 9216 frenchgrain\nscotsinch = 1.00540054 UKinch\nscotslink = 1|100 scotschain\nscotsfoot = 12 scotsinch\nscotsfeet = scotsfoot\nscotsell = 37 scotsinch\nscotsfall = 6 scotsell\nscotschain = 4 scotsfall\nscotsfurlong = 10 scotschain\nscotsmile = 8 scotsfurlong\nscotsrood = 40 scotsfall^2\nscotsacre = 4 scotsrood\nirishinch = UKinch\nirishpalm = 3 irishinch\nirishspan = 3 irishpalm\nirishfoot = 12 irishinch\nirishfeet = irishfoot\nirishcubit = 18 irishinch\nirishyard = 3 irishfeet\nirishpace = 5 irishfeet\nirishfathom = 6 irishfeet\nirishpole = 7 irishyard\nirishperch = irishpole\nirishchain = 4 irishperch\nirishlink = 1|100 irishchain\nirishfurlong = 10 irishchain\nirishmile = 8 irishfurlong\nirishrood = 40 irishpole^2\nirishacre = 4 irishrood\nwinepint = 1|2 winequart\nwinequart = 1|4 winegallon\nwinegallon = 231 UKinch^3\nwinerundlet = 18 winegallon\nwinebarrel = 31.5 winegallon\nwinetierce = 42 winegallon\nwinehogshead = 2 winebarrel\nwinepuncheon = 2 winetierce\nwinebutt = 2 winehogshead\nwinepipe = winebutt\nwinetun = 2 winebutt\nbeerpint = 1|2 beerquart\nbeerquart = 1|4 beergallon\nbeergallon = 282 UKinch^3\nbeerbarrel = 36 beergallon\nbeerhogshead = 1.5 beerbarrel\nalepint = 1|2 alequart\nalequart = 1|4 alegallon\nalegallon = beergallon\nalebarrel = 34 alegallon\nalehogshead = 1.5 alebarrel\nscotsgill = 1|4 mutchkin\nmutchkin = 1|2 choppin\nchoppin = 1|2 scotspint\nscotspint = 1|2 scotsquart\nscotsquart = 1|4 scotsgallon\nscotsgallon = 827.232 UKinch^3\nscotsbarrel = 8 scotsgallon\njug = scotspint\nscotswheatlippy = 137.333 UKinch^3\nscotswheatlippies = scotswheatlippy\nscotswheatpeck = 4 scotswheatlippy\nscotswheatfirlot = 4 scotswheatpeck\nscotswheatboll = 4 scotswheatfirlot\nscotswheatchalder = 16 scotswheatboll\nscotsoatlippy = 200.345 UKinch^3\nscotsoatlippies = scotsoatlippy\nscotsoatpeck = 4 scotsoatlippy\nscotsoatfirlot = 4 scotsoatpeck\nscotsoatboll = 4 scotsoatfirlot\nscotsoatchalder = 16 scotsoatboll\ntrondrop = 1|16 tronounce\ntronounce = 1|20 tronpound\ntronpound = 9520 grain\ntronstone = 16 tronpound\nirishnoggin = 1|4 irishpint\nirishpint = 1|2 irishquart\nirishquart = 1|2 irishpottle\nirishpottle = 1|2 irishgallon\nirishgallon = 217.6 UKinch^3\nirishrundlet = 18 irishgallon\nirishbarrel = 31.5 irishgallon\nirishtierce = 42 irishgallon\nirishhogshead = 2 irishbarrel\nirishpuncheon = 2 irishtierce\nirishpipe = 2 irishhogshead\nirishtun = 2 irishpipe\nirishpeck = 2 irishgallon\nirishbushel = 4 irishpeck\nirishstrike = 2 irishbushel\nirishdrybarrel = 2 irishstrike\nirishquarter = 2 irishbarrel\ntowerpound = 5400 grain\ntowerounce = 1|12 towerpound\ntowerpennyweight = 1|20 towerounce\ntowergrain = 1|32 towerpennyweight\nmercpound = 6750 grain\nmercounce = 1|15 mercpound\nmercpennyweight = 1|20 mercounce\nleadstone = 12.5 lb\nfotmal = 70 lb\nleadwey = 14 leadstone\nfothers = 12 leadwey\nnewhaytruss = 60 lb\nnewhayload = 36 newhaytruss\noldhaytruss = 56 lb\noldhayload = 36 oldhaytruss\nwoolclove = 7 lb\nwoolstone = 2 woolclove\nwooltod = 2 woolstone\nwoolwey = 13 woolstone\nwoolsack = 2 woolwey\nwoolsarpler = 2 woolsack\nwoollast = 6 woolsarpler\nromanfoot = 296 mm\nromanfeet = romanfoot\npes = romanfoot\npedes = romanfoot\nromaninch = 1|12 romanfoot\nromandigit = 1|16 romanfoot\nromanpalm = 1|4 romanfoot\nromancubit = 18 romaninch\nromanpace = 5 romanfeet\npassus = romanpace\nromanperch = 10 romanfeet\nstade = 125 romanpaces\nstadia = stade\nstadium = stade\nromanmile = 8 stadia\nromanleague = 1.5 romanmile\nschoenus = 4 romanmile\nearlyromanfoot = 29.73 cm\npesdrusianus = 33.3 cm\nlateromanfoot = 29.42 cm\nactuslength = 120 romanfeet\nactus = 120*4 romanfeet^2\nsquareactus = 120^2 romanfeet^2\nacnua = squareactus\niugerum = 2 squareactus\niugera = iugerum\njugerum = iugerum\njugera = iugerum\nheredium = 2 iugera\nheredia = heredium\ncenturia = 100 heredia\ncenturium = centuria\nsextarius = 35.4 in^3\nsextarii = sextarius\ncochlearia = 1|48 sextarius\ncyathi = 1|12 sextarius\nacetabula = 1|8 sextarius\nquartaria = 1|4 sextarius\nquartarius = quartaria\nheminae = 1|2 sextarius\nhemina = heminae\ncheonix = 1.5 sextarii\nsemodius = 8 sextarius\nsemodii = semodius\nmodius = 16 sextarius\nmodii = modius\ncongius = 12 heminae\ncongii = congius\namphora = 8 congii\namphorae = amphora\nculleus = 20 amphorae\nquadrantal = amphora\nlibra = 5052 grain\nlibrae = libra\nromanpound = libra\nuncia = 1|12 libra\nunciae = uncia\nromanounce = uncia\ndeunx = 11 uncia\ndextans = 10 uncia\ndodrans = 9 uncia\nbes = 8 uncia\nseprunx = 7 uncia\nsemis = 6 uncia\nquincunx = 5 uncia\ntriens = 4 uncia\nquadrans = 3 uncia\nsextans = 2 uncia\nsescuncia = 1.5 uncia\nsemuncia = 1|2 uncia\nsiscilius = 1|4 uncia\nsextula = 1|6 uncia\nsemisextula = 1|12 uncia\nscriptulum = 1|24 uncia\nscrupula = scriptulum\nromanobol = 1|2 scrupula\nromanaspound = 4210 grain\negyptianroyalcubit = 20.63 in\negyptianpalm = 1|7 egyptianroyalcubit\negyptiandigit = 1|4 egyptianpalm\negyptianshortcubit = 6 egyptianpalm\ndoubleremen = 29.16 in\nremendigit = 1|40 doubleremen\ngreekfoot = 12.45 in\ngreekfeet = greekfoot\ngreekcubit = 1.5 greekfoot\npous = greekfoot\npodes = greekfoot\norguia = 6 greekfoot\ngreekfathom = orguia\nstadion = 100 orguia\nakaina = 10 greekfeet\nplethron = 10 akaina\ngreekfinger = 1|16 greekfoot\nhomericcubit = 20 greekfingers\nshortgreekcubit = 18 greekfingers\nionicfoot = 296 mm\ndoricfoot = 326 mm\nolympiccubit = 25 remendigit\nolympicfoot = 2|3 olympiccubit\nolympicfinger = 1|16 olympicfoot\nolympicfeet = olympicfoot\nolympicdakylos = olympicfinger\nolympicpalm = 1|4 olympicfoot\nolympicpalestra = olympicpalm\nolympicspithame = 3|4 foot\nolympicspan = olympicspithame\nolympicbema = 2.5 olympicfeet\nolympicpace = olympicbema\nolympicorguia = 6 olympicfeet\nolympicfathom = olympicorguia\nolympiccord = 60 olympicfeet\nolympicamma = olympiccord\nolympicplethron = 100 olympicfeet\nolympicstadion = 600 olympicfeet\ngreekkotyle = 270 ml\nxestes = 2 greekkotyle\nkhous = 12 greekkotyle\nmetretes = 12 khous\nchoinix = 4 greekkotyle\nhekteos = 8 choinix\nmedimnos = 6 hekteos\naeginastater = 192 grain\naeginadrachmae = 1|2 aeginastater\naeginaobol = 1|6 aeginadrachmae\naeginamina = 50 aeginastaters\naeginatalent = 60 aeginamina\natticstater = 135 grain\natticdrachmae = 1|2 atticstater\natticobol = 1|6 atticdrachmae\natticmina = 50 atticstaters\nattictalent = 60 atticmina\nnortherncubit = 26.6 in\nnorthernfoot = 1|2 northerncubit\nsumeriancubit = 495 mm\nkus = sumeriancubit\nsumerianfoot = 2|3 sumeriancubit\nassyriancubit = 21.6 in\nassyrianfoot = 1|2 assyriancubit\nassyrianpalm = 1|3 assyrianfoot\nassyriansusi = 1|20 assyrianpalm\nsusi = assyriansusi\npersianroyalcubit = 7 assyrianpalm\nhashimicubit = 25.56 in\nblackcubit = 21.28 in\narabicfeet = 1|2 blackcubit\narabicfoot = arabicfeet\narabicinch = 1|12 arabicfoot\narabicmile = 4000 blackcubit\nsilverdirhem = 45 grain\ntradedirhem = 48 grain\nsilverkirat = 1|16 silverdirhem\nsilverwukiyeh = 10 silverdirhem\nsilverrotl = 12 silverwukiyeh\narabicsilverpound = silverrotl\ntradekirat = 1|16 tradedirhem\ntradewukiyeh = 10 tradedirhem\ntraderotl = 12 tradewukiyeh\narabictradepound = traderotl\nparasang = 3.5 mile\nbiblicalcubit = 21.8 in\nhebrewcubit = 17.58 in\nli = 10|27.8 mile\nliang = 11|3 oz\ntimepoint = 1|5 hour\ntimeminute = 1|10 hour\ntimeostent = 1|60 hour\ntimeounce = 1|8 timeostent\ntimeatom = 1|47 timeounce\nmite = 1|20 grain\ndroit = 1|24 mite\nperiot = 1|20 droit\nblanc = 1|24 periot\nhundredweight = ushundredweight\nton = uston\nscruple = apscruple\nfluidounce = usfluidounce\ngallon = usgallon\nbushel = usbushel\nquarter = quarterweight\ncup = uscup\ntablespoon = ustablespoon\nteaspoon = usteaspoon\ndollar = US$\ncent = $ 0.01\npenny = cent\nminim = minimvolume\npony = ponyvolume\ngrand = usgrand\nfirkin = usfirkin\nhogshead = ushogshead\n⅛_ = 1|8\n¼_ = 1|4\n⅜_ = 3|8\n½_ = 1|2\n⅝_ = 5|8\n¾_ = 3|4\n⅞_ = 7|8\n⅙_ = 1|6\n⅓_ = 1|3\n⅔_ = 2|3\n⅚_ = 5|6\n⅕_ = 1|5\n⅖_ = 2|5\n⅗_ = 3|5\n⅘_ = 4|5\nℯ = exp(1)\nµ_ = micro\nμ_ = micro\nångström = angstrom\nÅ = angstrom\nÅ = angstrom\nröntgen = roentgen\n°C = degC\n°F = degF\n°K = K\n°R = degR\n° = degree\n℃ = degC\n℉ = degF\nK = K\nℓ = liter\n¢ = cent\n£ = britainpound\n¥ = japanyen\n€ = euro\n₩ = southkoreawon\n₪ = israelnewshekel\n₤ = lira\n₨ = rupee\nΩ = ohm\nΩ = ohm\n℧ = mho\nʒ = dram\n℈ = scruple\n℥ = ounce\n℔ = lb\nℎ = h\nℏ = hbar\n‰ = 1|1000\n‱ = 1|10000\n′ = '\n″ = \"\n㍱ = hPa\n㍲ = da\n㍳ = au\n㍴ = bar\n㍶ = pc\n㎀ = pA\n㎁ = nA\n㎂ = µA\n㎃ = mA\n㎄ = kA\n㎅ = kB\n㎆ = MB\n㎇ = GB\n㎈ = cal\n㎉ = kcal\n㎊ = pF\n㎋ = nF\n㎌ = µF\n㎍ = µg\n㎎ = mg\n㎏ = kg\n㎐ = Hz\n㎑ = kHz\n㎒ = MHz\n㎓ = GHz\n㎔ = THz\n㎕ = µL\n㎖ = mL\n㎗ = dL\n㎘ = kL\n㎙ = fm\n㎚ = nm\n㎛ = µm\n㎜ = mm\n㎝ = cm\n㎞ = km\n㎟ = mm^2\n㎠ = cm^2\n㎡ = m^2\n㎢ = km^2\n㎣ = mm^3\n㎤ = cm^3\n㎥ = m^3\n㎦ = km^3\n㎧ = m/s\n㎨ = m/s^2\n㎩ = Pa\n㎪ = kPa\n㎫ = MPa\n㎬ = GPa\n㎭ = rad\n㎮ = rad/s\n㎯ = rad/s^2\n㎰ = ps\n㎱ = ns\n㎲ = µs\n㎳ = ms\n㎴ = pV\n㎵ = nV\n㎶ = µV\n㎷ = mV\n㎸ = kV\n㎹ = MV\n㎺ = pW\n㎻ = nW\n㎼ = µW\n㎽ = mW\n㎾ = kW\n㎿ = MW\n㏀ = kΩ\n㏁ = MΩ\n㏃ = Bq\n㏄ = cc\n㏅ = cd\n㏆ = C/kg\n㏈ = dB\n㏉ = Gy\n㏊ = ha\n㏌ = in\n㏏ = kt\n㏐ = lm\n㏓ = lx\n㏔ = mb\n㏕ = mil\n㏖ = mol\n㏗ = pH\n㏙ = ppm\n㏛ = sr\n㏜ = Sv\n㏝ = Wb\n";
});

})();
(function() {
var define = $__System.amdDefine;
define("a4", [], function() {
  return "planck_constant = h\nh = hour \n\nAh = A h\n\nE = energy\n\n°C = tempC\n°F = tempF\n\nfibonacci = x => x >= 2 && fibonacci(x-1) + fibonacci(x-2) || x\n\nspheresurface = r => 4 pi r^2\n\ndelete(in) # to avoid confusion\n\n#\n# computing power\n#\n\nflo! # one floating point operation\n\nfloating_point_operation = flo\n\nflops = flo/s\n";
});

})();
$__System.registerDynamic("@system-env", [], false, function() {
  return {
    "production": false,
    "browser": true,
    "node": false
  };
});

$__System.registerDynamic("3", ["@system-env"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  var productionEnv = $__require('@system-env').production;
  var process = module.exports = {};
  var queue = [];
  var draining = false;
  var currentQueue;
  var queueIndex = -1;
  function cleanUpNextTick() {
    draining = false;
    if (currentQueue.length) {
      queue = currentQueue.concat(queue);
    } else {
      queueIndex = -1;
    }
    if (queue.length) {
      drainQueue();
    }
  }
  function drainQueue() {
    if (draining) {
      return;
    }
    var timeout = setTimeout(cleanUpNextTick);
    draining = true;
    var len = queue.length;
    while (len) {
      currentQueue = queue;
      queue = [];
      while (++queueIndex < len) {
        if (currentQueue) {
          currentQueue[queueIndex].run();
        }
      }
      queueIndex = -1;
      len = queue.length;
    }
    currentQueue = null;
    draining = false;
    clearTimeout(timeout);
  }
  process.nextTick = function(fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
      for (var i = 1; i < arguments.length; i++) {
        args[i - 1] = arguments[i];
      }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
      setTimeout(drainQueue, 0);
    }
  };
  function Item(fun, array) {
    this.fun = fun;
    this.array = array;
  }
  Item.prototype.run = function() {
    this.fun.apply(null, this.array);
  };
  process.title = 'browser';
  process.browser = true;
  process.env = {NODE_ENV: productionEnv ? 'production' : 'development'};
  process.argv = [];
  process.version = '';
  process.versions = {};
  function noop() {}
  process.on = noop;
  process.addListener = noop;
  process.once = noop;
  process.off = noop;
  process.removeListener = noop;
  process.removeAllListeners = noop;
  process.emit = noop;
  process.binding = function(name) {
    throw new Error('process.binding is not supported');
  };
  process.cwd = function() {
    return '/';
  };
  process.chdir = function(dir) {
    throw new Error('process.chdir is not supported');
  };
  process.umask = function() {
    return 0;
  };
  return module.exports;
});

$__System.registerDynamic("a5", ["3"], true, function($__require, exports, module) {
  var process = $__require("3");
  var define,
      global = this,
      GLOBAL = this;
  ;
  (function(globalScope) {
    'use strict';
    var EXP_LIMIT = 9e15,
        MAX_DIGITS = 1e9,
        NUMERALS = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ!#$%()*+,-./:;=?@[]^_`{|}~',
        LN10 = '2.3025850929940456840179914546843642076011014886287729760333279009675726096773524802359972050895982983419677840422862486334095254650828067566662873690987816894829072083255546808437998948262331985283935053089653777326288461633662222876982198867465436674744042432743651550489343149393914796194044002221051017141748003688084012647080685567743216228355220114804663715659121373450747856947683463616792101806445070648000277502684916746550586856935673420670581136429224554405758925724208241314695689016758940256776311356919292033376587141660230105703089634572075440370847469940168269282808481184289314848524948644871927809676271275775397027668605952496716674183485704422507197965004714951050492214776567636938662976979522110718264549734772662425709429322582798502585509785265383207606726317164309505995087807523710333101197857547331541421808427543863591778117054309827482385045648019095610299291824318237525357709750539565187697510374970888692180205189339507238539205144634197265287286965110862571492198849978748873771345686209167058',
        PI = '3.1415926535897932384626433832795028841971693993751058209749445923078164062862089986280348253421170679821480865132823066470938446095505822317253594081284811174502841027019385211055596446229489549303819644288109756659334461284756482337867831652712019091456485669234603486104543266482133936072602491412737245870066063155881748815209209628292540917153643678925903600113305305488204665213841469519415116094330572703657595919530921861173819326117931051185480744623799627495673518857527248912279381830119491298336733624406566430860213949463952247371907021798609437027705392171762931767523846748184676694051320005681271452635608277857713427577896091736371787214684409012249534301465495853710507922796892589235420199561121290219608640344181598136297747713099605187072113499999983729780499510597317328160963185950244594553469083026425223082533446850352619311881710100031378387528865875332083814206171776691473035982534904287554687311595628638823537875937519577818577805321712268066130019278766111959092164201989380952572010654858632789',
        Decimal = {
          precision: 20,
          rounding: 4,
          modulo: 1,
          toExpNeg: -7,
          toExpPos: 21,
          minE: -EXP_LIMIT,
          maxE: EXP_LIMIT,
          crypto: void 0
        },
        inexact,
        noConflict,
        quadrant,
        cryptoObject = typeof crypto != 'undefined' ? crypto : null,
        external = true,
        decimalError = '[DecimalError] ',
        invalidArgument = decimalError + 'Invalid argument: ',
        precisionLimitExceeded = decimalError + 'Precision limit exceeded',
        mathfloor = Math.floor,
        mathpow = Math.pow,
        isBinary = /^0b([01]+(\.[01]*)?|\.[01]+)(p[+-]?\d+)?$/i,
        isHex = /^0x([0-9a-f]+(\.[0-9a-f]*)?|\.[0-9a-f]+)(p[+-]?\d+)?$/i,
        isOctal = /^0o([0-7]+(\.[0-7]*)?|\.[0-7]+)(p[+-]?\d+)?$/i,
        isDecimal = /^(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i,
        BASE = 1e7,
        LOG_BASE = 7,
        MAX_SAFE_INTEGER = 9007199254740991,
        LN10_PRECISION = LN10.length - 1,
        PI_PRECISION = PI.length - 1,
        P = {};
    P.absoluteValue = P.abs = function() {
      var x = new this.constructor(this);
      if (x.s < 0)
        x.s = 1;
      return finalise(x);
    };
    P.ceil = function() {
      return finalise(new this.constructor(this), this.e + 1, 2);
    };
    P.comparedTo = P.cmp = function(y) {
      var i,
          j,
          xdL,
          ydL,
          x = this,
          xd = x.d,
          yd = (y = new x.constructor(y)).d,
          xs = x.s,
          ys = y.s;
      if (!xd || !yd) {
        return !xs || !ys ? NaN : xs !== ys ? xs : xd === yd ? 0 : !xd ^ xs < 0 ? 1 : -1;
      }
      if (!xd[0] || !yd[0])
        return xd[0] ? xs : yd[0] ? -ys : 0;
      if (xs !== ys)
        return xs;
      if (x.e !== y.e)
        return x.e > y.e ^ xs < 0 ? 1 : -1;
      xdL = xd.length;
      ydL = yd.length;
      for (i = 0, j = xdL < ydL ? xdL : ydL; i < j; ++i) {
        if (xd[i] !== yd[i])
          return xd[i] > yd[i] ^ xs < 0 ? 1 : -1;
      }
      return xdL === ydL ? 0 : xdL > ydL ^ xs < 0 ? 1 : -1;
    };
    P.cosine = P.cos = function() {
      var pr,
          rm,
          x = this,
          Ctor = x.constructor;
      if (!x.d)
        return new Ctor(NaN);
      if (!x.d[0])
        return new Ctor(1);
      pr = Ctor.precision;
      rm = Ctor.rounding;
      Ctor.precision = pr + Math.max(x.e, x.sd()) + LOG_BASE;
      Ctor.rounding = 1;
      x = cosine(Ctor, toLessThanHalfPi(Ctor, x));
      Ctor.precision = pr;
      Ctor.rounding = rm;
      return finalise(quadrant == 2 || quadrant == 3 ? x.neg() : x, pr, rm, true);
    };
    P.cubeRoot = P.cbrt = function() {
      var e,
          m,
          n,
          r,
          rep,
          s,
          sd,
          t,
          t3,
          t3plusx,
          x = this,
          Ctor = x.constructor;
      if (!x.isFinite() || x.isZero())
        return new Ctor(x);
      external = false;
      s = x.s * Math.pow(x.s * x, 1 / 3);
      if (!s || Math.abs(s) == 1 / 0) {
        n = digitsToString(x.d);
        e = x.e;
        if (s = (e - n.length + 1) % 3)
          n += (s == 1 || s == -2 ? '0' : '00');
        s = Math.pow(n, 1 / 3);
        e = mathfloor((e + 1) / 3) - (e % 3 == (e < 0 ? -1 : 2));
        if (s == 1 / 0) {
          n = '5e' + e;
        } else {
          n = s.toExponential();
          n = n.slice(0, n.indexOf('e') + 1) + e;
        }
        r = new Ctor(n);
        r.s = x.s;
      } else {
        r = new Ctor(s.toString());
      }
      sd = (e = Ctor.precision) + 3;
      for (; ; ) {
        t = r;
        t3 = t.times(t).times(t);
        t3plusx = t3.plus(x);
        r = divide(t3plusx.plus(x).times(t), t3plusx.plus(t3), sd + 2, 1);
        if (digitsToString(t.d).slice(0, sd) === (n = digitsToString(r.d)).slice(0, sd)) {
          n = n.slice(sd - 3, sd + 1);
          if (n == '9999' || !rep && n == '4999') {
            if (!rep) {
              finalise(t, e + 1, 0);
              if (t.times(t).times(t).eq(x)) {
                r = t;
                break;
              }
            }
            sd += 4;
            rep = 1;
          } else {
            if (!+n || !+n.slice(1) && n.charAt(0) == '5') {
              finalise(r, e + 1, 1);
              m = !r.times(r).times(r).eq(x);
            }
            break;
          }
        }
      }
      external = true;
      return finalise(r, e, Ctor.rounding, m);
    };
    P.decimalPlaces = P.dp = function() {
      var w,
          d = this.d,
          n = NaN;
      if (d) {
        w = d.length - 1;
        n = (w - mathfloor(this.e / LOG_BASE)) * LOG_BASE;
        w = d[w];
        if (w)
          for (; w % 10 == 0; w /= 10)
            n--;
        if (n < 0)
          n = 0;
      }
      return n;
    };
    P.dividedBy = P.div = function(y) {
      return divide(this, new this.constructor(y));
    };
    P.dividedToIntegerBy = P.divToInt = function(y) {
      var x = this,
          Ctor = x.constructor;
      return finalise(divide(x, new Ctor(y), 0, 1, 1), Ctor.precision, Ctor.rounding);
    };
    P.equals = P.eq = function(y) {
      return this.cmp(y) === 0;
    };
    P.floor = function() {
      return finalise(new this.constructor(this), this.e + 1, 3);
    };
    P.greaterThan = P.gt = function(y) {
      return this.cmp(y) > 0;
    };
    P.greaterThanOrEqualTo = P.gte = function(y) {
      var k = this.cmp(y);
      return k == 1 || k === 0;
    };
    P.hyperbolicCosine = P.cosh = function() {
      var k,
          n,
          pr,
          rm,
          len,
          x = this,
          Ctor = x.constructor,
          one = new Ctor(1);
      if (!x.isFinite())
        return new Ctor(x.s ? 1 / 0 : NaN);
      if (x.isZero())
        return one;
      pr = Ctor.precision;
      rm = Ctor.rounding;
      Ctor.precision = pr + Math.max(x.e, x.sd()) + 4;
      Ctor.rounding = 1;
      len = x.d.length;
      if (len < 32) {
        k = Math.ceil(len / 3);
        n = Math.pow(4, -k).toString();
      } else {
        k = 16;
        n = '2.3283064365386962890625e-10';
      }
      x = taylorSeries(Ctor, 1, x.times(n), new Ctor(1), true);
      var cosh2_x,
          i = k,
          d8 = new Ctor(8);
      for (; i--; ) {
        cosh2_x = x.times(x);
        x = one.minus(cosh2_x.times(d8.minus(cosh2_x.times(d8))));
      }
      return finalise(x, Ctor.precision = pr, Ctor.rounding = rm, true);
    };
    P.hyperbolicSine = P.sinh = function() {
      var k,
          pr,
          rm,
          len,
          x = this,
          Ctor = x.constructor;
      if (!x.isFinite() || x.isZero())
        return new Ctor(x);
      pr = Ctor.precision;
      rm = Ctor.rounding;
      Ctor.precision = pr + Math.max(x.e, x.sd()) + 4;
      Ctor.rounding = 1;
      len = x.d.length;
      if (len < 3) {
        x = taylorSeries(Ctor, 2, x, x, true);
      } else {
        k = 1.4 * Math.sqrt(len);
        k = k > 16 ? 16 : k | 0;
        x = x.times(Math.pow(5, -k));
        x = taylorSeries(Ctor, 2, x, x, true);
        var sinh2_x,
            d5 = new Ctor(5),
            d16 = new Ctor(16),
            d20 = new Ctor(20);
        for (; k--; ) {
          sinh2_x = x.times(x);
          x = x.times(d5.plus(sinh2_x.times(d16.times(sinh2_x).plus(d20))));
        }
      }
      Ctor.precision = pr;
      Ctor.rounding = rm;
      return finalise(x, pr, rm, true);
    };
    P.hyperbolicTangent = P.tanh = function() {
      var pr,
          rm,
          x = this,
          Ctor = x.constructor;
      if (!x.isFinite())
        return new Ctor(x.s);
      if (x.isZero())
        return new Ctor(x);
      pr = Ctor.precision;
      rm = Ctor.rounding;
      Ctor.precision = pr + 7;
      Ctor.rounding = 1;
      return divide(x.sinh(), x.cosh(), Ctor.precision = pr, Ctor.rounding = rm);
    };
    P.inverseCosine = P.acos = function() {
      var halfPi,
          x = this,
          Ctor = x.constructor,
          k = x.abs().cmp(1),
          pr = Ctor.precision,
          rm = Ctor.rounding;
      if (k !== -1) {
        return k === 0 ? x.isNeg() ? getPi(Ctor, pr, rm) : new Ctor(0) : new Ctor(NaN);
      }
      if (x.isZero())
        return getPi(Ctor, pr + 4, rm).times(0.5);
      Ctor.precision = pr + 6;
      Ctor.rounding = 1;
      x = x.asin();
      halfPi = getPi(Ctor, pr + 4, rm).times(0.5);
      Ctor.precision = pr;
      Ctor.rounding = rm;
      return halfPi.minus(x);
    };
    P.inverseHyperbolicCosine = P.acosh = function() {
      var pr,
          rm,
          x = this,
          Ctor = x.constructor;
      if (x.lte(1))
        return new Ctor(x.eq(1) ? 0 : NaN);
      if (!x.isFinite())
        return new Ctor(x);
      pr = Ctor.precision;
      rm = Ctor.rounding;
      Ctor.precision = pr + Math.max(Math.abs(x.e), x.sd()) + 4;
      Ctor.rounding = 1;
      external = false;
      x = x.times(x).minus(1).sqrt().plus(x);
      external = true;
      Ctor.precision = pr;
      Ctor.rounding = rm;
      return x.ln();
    };
    P.inverseHyperbolicSine = P.asinh = function() {
      var pr,
          rm,
          x = this,
          Ctor = x.constructor;
      if (!x.isFinite() || x.isZero())
        return new Ctor(x);
      pr = Ctor.precision;
      rm = Ctor.rounding;
      Ctor.precision = pr + 2 * Math.max(Math.abs(x.e), x.sd()) + 6;
      Ctor.rounding = 1;
      external = false;
      x = x.times(x).plus(1).sqrt().plus(x);
      external = true;
      Ctor.precision = pr;
      Ctor.rounding = rm;
      return x.ln();
    };
    P.inverseHyperbolicTangent = P.atanh = function() {
      var pr,
          rm,
          wpr,
          xsd,
          x = this,
          Ctor = x.constructor;
      if (!x.isFinite())
        return new Ctor(NaN);
      if (x.e >= 0)
        return new Ctor(x.abs().eq(1) ? x.s / 0 : x.isZero() ? x : NaN);
      pr = Ctor.precision;
      rm = Ctor.rounding;
      xsd = x.sd();
      if (Math.max(xsd, pr) < 2 * -x.e - 1)
        return finalise(new Ctor(x), pr, rm, true);
      Ctor.precision = wpr = xsd - x.e;
      x = divide(x.plus(1), new Ctor(1).minus(x), wpr + pr, 1);
      Ctor.precision = pr + 4;
      Ctor.rounding = 1;
      x = x.ln();
      Ctor.precision = pr;
      Ctor.rounding = rm;
      return x.times(0.5);
    };
    P.inverseSine = P.asin = function() {
      var halfPi,
          k,
          pr,
          rm,
          x = this,
          Ctor = x.constructor;
      if (x.isZero())
        return new Ctor(x);
      k = x.abs().cmp(1);
      pr = Ctor.precision;
      rm = Ctor.rounding;
      if (k !== -1) {
        if (k === 0) {
          halfPi = getPi(Ctor, pr + 4, rm).times(0.5);
          halfPi.s = x.s;
          return halfPi;
        }
        return new Ctor(NaN);
      }
      Ctor.precision = pr + 6;
      Ctor.rounding = 1;
      x = x.div(new Ctor(1).minus(x.times(x)).sqrt().plus(1)).atan();
      Ctor.precision = pr;
      Ctor.rounding = rm;
      return x.times(2);
    };
    P.inverseTangent = P.atan = function() {
      var i,
          j,
          k,
          n,
          px,
          t,
          r,
          wpr,
          x2,
          x = this,
          Ctor = x.constructor,
          pr = Ctor.precision,
          rm = Ctor.rounding;
      if (!x.isFinite()) {
        if (!x.s)
          return new Ctor(NaN);
        if (pr + 4 <= PI_PRECISION) {
          r = getPi(Ctor, pr + 4, rm).times(0.5);
          r.s = x.s;
          return r;
        }
      } else if (x.isZero()) {
        return new Ctor(x);
      } else if (x.abs().eq(1) && pr + 4 <= PI_PRECISION) {
        r = getPi(Ctor, pr + 4, rm).times(0.25);
        r.s = x.s;
        return r;
      }
      Ctor.precision = wpr = pr + 10;
      Ctor.rounding = 1;
      k = Math.min(28, wpr / LOG_BASE + 2 | 0);
      for (i = k; i; --i)
        x = x.div(x.times(x).plus(1).sqrt().plus(1));
      external = false;
      j = Math.ceil(wpr / LOG_BASE);
      n = 1;
      x2 = x.times(x);
      r = new Ctor(x);
      px = x;
      for (; i !== -1; ) {
        px = px.times(x2);
        t = r.minus(px.div(n += 2));
        px = px.times(x2);
        r = t.plus(px.div(n += 2));
        if (r.d[j] !== void 0)
          for (i = j; r.d[i] === t.d[i] && i--; )
            ;
      }
      if (k)
        r = r.times(2 << (k - 1));
      external = true;
      return finalise(r, Ctor.precision = pr, Ctor.rounding = rm, true);
    };
    P.isFinite = function() {
      return !!this.d;
    };
    P.isInteger = P.isInt = function() {
      return !!this.d && mathfloor(this.e / LOG_BASE) > this.d.length - 2;
    };
    P.isNaN = function() {
      return !this.s;
    };
    P.isNegative = P.isNeg = function() {
      return this.s < 0;
    };
    P.isPositive = P.isPos = function() {
      return this.s > 0;
    };
    P.isZero = function() {
      return !!this.d && this.d[0] === 0;
    };
    P.lessThan = P.lt = function(y) {
      return this.cmp(y) < 0;
    };
    P.lessThanOrEqualTo = P.lte = function(y) {
      return this.cmp(y) < 1;
    };
    P.logarithm = P.log = function(base) {
      var isBase10,
          d,
          denominator,
          k,
          inf,
          num,
          sd,
          r,
          arg = this,
          Ctor = arg.constructor,
          pr = Ctor.precision,
          rm = Ctor.rounding,
          guard = 5;
      if (base == null) {
        base = new Ctor(10);
        isBase10 = true;
      } else {
        base = new Ctor(base);
        d = base.d;
        if (base.s < 0 || !d || !d[0] || base.eq(1))
          return new Ctor(NaN);
        isBase10 = base.eq(10);
      }
      d = arg.d;
      if (arg.s < 0 || !d || !d[0] || arg.eq(1)) {
        return new Ctor(d && !d[0] ? -1 / 0 : arg.s != 1 ? NaN : d ? 0 : 1 / 0);
      }
      if (isBase10) {
        if (d.length > 1) {
          inf = true;
        } else {
          for (k = d[0]; k % 10 === 0; )
            k /= 10;
          inf = k !== 1;
        }
      }
      external = false;
      sd = pr + guard;
      num = naturalLogarithm(arg, sd);
      denominator = isBase10 ? getLn10(Ctor, sd + 10) : naturalLogarithm(base, sd);
      r = divide(num, denominator, sd, 1);
      if (checkRoundingDigits(r.d, k = pr, rm)) {
        do {
          sd += 10;
          num = naturalLogarithm(arg, sd);
          denominator = isBase10 ? getLn10(Ctor, sd + 10) : naturalLogarithm(base, sd);
          r = divide(num, denominator, sd, 1);
          if (!inf) {
            if (+digitsToString(r.d).slice(k + 1, k + 15) + 1 == 1e14) {
              r = finalise(r, pr + 1, 0);
            }
            break;
          }
        } while (checkRoundingDigits(r.d, k += 10, rm));
      }
      external = true;
      return finalise(r, pr, rm);
    };
    P.minus = P.sub = function(y) {
      var d,
          e,
          i,
          j,
          k,
          len,
          pr,
          rm,
          xd,
          xe,
          xLTy,
          yd,
          x = this,
          Ctor = x.constructor;
      y = new Ctor(y);
      if (!x.d || !y.d) {
        if (!x.s || !y.s)
          y = new Ctor(NaN);
        else if (x.d)
          y.s = -y.s;
        else
          y = new Ctor(y.d || x.s !== y.s ? x : NaN);
        return y;
      }
      if (x.s != y.s) {
        y.s = -y.s;
        return x.plus(y);
      }
      xd = x.d;
      yd = y.d;
      pr = Ctor.precision;
      rm = Ctor.rounding;
      if (!xd[0] || !yd[0]) {
        if (yd[0])
          y.s = -y.s;
        else if (xd[0])
          y = new Ctor(x);
        else
          return new Ctor(rm === 3 ? -0 : 0);
        return external ? finalise(y, pr, rm) : y;
      }
      e = mathfloor(y.e / LOG_BASE);
      xe = mathfloor(x.e / LOG_BASE);
      xd = xd.slice();
      k = xe - e;
      if (k) {
        xLTy = k < 0;
        if (xLTy) {
          d = xd;
          k = -k;
          len = yd.length;
        } else {
          d = yd;
          e = xe;
          len = xd.length;
        }
        i = Math.max(Math.ceil(pr / LOG_BASE), len) + 2;
        if (k > i) {
          k = i;
          d.length = 1;
        }
        d.reverse();
        for (i = k; i--; )
          d.push(0);
        d.reverse();
      } else {
        i = xd.length;
        len = yd.length;
        xLTy = i < len;
        if (xLTy)
          len = i;
        for (i = 0; i < len; i++) {
          if (xd[i] != yd[i]) {
            xLTy = xd[i] < yd[i];
            break;
          }
        }
        k = 0;
      }
      if (xLTy) {
        d = xd;
        xd = yd;
        yd = d;
        y.s = -y.s;
      }
      len = xd.length;
      for (i = yd.length - len; i > 0; --i)
        xd[len++] = 0;
      for (i = yd.length; i > k; ) {
        if (xd[--i] < yd[i]) {
          for (j = i; j && xd[--j] === 0; )
            xd[j] = BASE - 1;
          --xd[j];
          xd[i] += BASE;
        }
        xd[i] -= yd[i];
      }
      for (; xd[--len] === 0; )
        xd.pop();
      for (; xd[0] === 0; xd.shift())
        --e;
      if (!xd[0])
        return new Ctor(rm === 3 ? -0 : 0);
      y.d = xd;
      y.e = getBase10Exponent(xd, e);
      return external ? finalise(y, pr, rm) : y;
    };
    P.modulo = P.mod = function(y) {
      var q,
          x = this,
          Ctor = x.constructor;
      y = new Ctor(y);
      if (!x.d || !y.s || y.d && !y.d[0])
        return new Ctor(NaN);
      if (!y.d || x.d && !x.d[0]) {
        return finalise(new Ctor(x), Ctor.precision, Ctor.rounding);
      }
      external = false;
      if (Ctor.modulo == 9) {
        q = divide(x, y.abs(), 0, 3, 1);
        q.s *= y.s;
      } else {
        q = divide(x, y, 0, Ctor.modulo, 1);
      }
      q = q.times(y);
      external = true;
      return x.minus(q);
    };
    P.naturalExponential = P.exp = function() {
      return naturalExponential(this);
    };
    P.naturalLogarithm = P.ln = function() {
      return naturalLogarithm(this);
    };
    P.negated = P.neg = function() {
      var x = new this.constructor(this);
      x.s = -x.s;
      return finalise(x);
    };
    P.plus = P.add = function(y) {
      var carry,
          d,
          e,
          i,
          k,
          len,
          pr,
          rm,
          xd,
          yd,
          x = this,
          Ctor = x.constructor;
      y = new Ctor(y);
      if (!x.d || !y.d) {
        if (!x.s || !y.s)
          y = new Ctor(NaN);
        else if (!x.d)
          y = new Ctor(y.d || x.s === y.s ? x : NaN);
        return y;
      }
      if (x.s != y.s) {
        y.s = -y.s;
        return x.minus(y);
      }
      xd = x.d;
      yd = y.d;
      pr = Ctor.precision;
      rm = Ctor.rounding;
      if (!xd[0] || !yd[0]) {
        if (!yd[0])
          y = new Ctor(x);
        return external ? finalise(y, pr, rm) : y;
      }
      k = mathfloor(x.e / LOG_BASE);
      e = mathfloor(y.e / LOG_BASE);
      xd = xd.slice();
      i = k - e;
      if (i) {
        if (i < 0) {
          d = xd;
          i = -i;
          len = yd.length;
        } else {
          d = yd;
          e = k;
          len = xd.length;
        }
        k = Math.ceil(pr / LOG_BASE);
        len = k > len ? k + 1 : len + 1;
        if (i > len) {
          i = len;
          d.length = 1;
        }
        d.reverse();
        for (; i--; )
          d.push(0);
        d.reverse();
      }
      len = xd.length;
      i = yd.length;
      if (len - i < 0) {
        i = len;
        d = yd;
        yd = xd;
        xd = d;
      }
      for (carry = 0; i; ) {
        carry = (xd[--i] = xd[i] + yd[i] + carry) / BASE | 0;
        xd[i] %= BASE;
      }
      if (carry) {
        xd.unshift(carry);
        ++e;
      }
      for (len = xd.length; xd[--len] == 0; )
        xd.pop();
      y.d = xd;
      y.e = getBase10Exponent(xd, e);
      return external ? finalise(y, pr, rm) : y;
    };
    P.precision = P.sd = function(z) {
      var k,
          x = this;
      if (z !== void 0 && z !== !!z && z !== 1 && z !== 0)
        throw Error(invalidArgument + z);
      if (x.d) {
        k = getPrecision(x.d);
        if (z && x.e + 1 > k)
          k = x.e + 1;
      } else {
        k = NaN;
      }
      return k;
    };
    P.round = function() {
      var x = this,
          Ctor = x.constructor;
      return finalise(new Ctor(x), x.e + 1, Ctor.rounding);
    };
    P.sine = P.sin = function() {
      var pr,
          rm,
          x = this,
          Ctor = x.constructor;
      if (!x.isFinite())
        return new Ctor(NaN);
      if (x.isZero())
        return new Ctor(x);
      pr = Ctor.precision;
      rm = Ctor.rounding;
      Ctor.precision = pr + Math.max(x.e, x.sd()) + LOG_BASE;
      Ctor.rounding = 1;
      x = sine(Ctor, toLessThanHalfPi(Ctor, x));
      Ctor.precision = pr;
      Ctor.rounding = rm;
      return finalise(quadrant > 2 ? x.neg() : x, pr, rm, true);
    };
    P.squareRoot = P.sqrt = function() {
      var m,
          n,
          sd,
          r,
          rep,
          t,
          x = this,
          d = x.d,
          e = x.e,
          s = x.s,
          Ctor = x.constructor;
      if (s !== 1 || !d || !d[0]) {
        return new Ctor(!s || s < 0 && (!d || d[0]) ? NaN : d ? x : 1 / 0);
      }
      external = false;
      s = Math.sqrt(+x);
      if (s == 0 || s == 1 / 0) {
        n = digitsToString(d);
        if ((n.length + e) % 2 == 0)
          n += '0';
        s = Math.sqrt(n);
        e = mathfloor((e + 1) / 2) - (e < 0 || e % 2);
        if (s == 1 / 0) {
          n = '1e' + e;
        } else {
          n = s.toExponential();
          n = n.slice(0, n.indexOf('e') + 1) + e;
        }
        r = new Ctor(n);
      } else {
        r = new Ctor(s.toString());
      }
      sd = (e = Ctor.precision) + 3;
      for (; ; ) {
        t = r;
        r = t.plus(divide(x, t, sd + 2, 1)).times(0.5);
        if (digitsToString(t.d).slice(0, sd) === (n = digitsToString(r.d)).slice(0, sd)) {
          n = n.slice(sd - 3, sd + 1);
          if (n == '9999' || !rep && n == '4999') {
            if (!rep) {
              finalise(t, e + 1, 0);
              if (t.times(t).eq(x)) {
                r = t;
                break;
              }
            }
            sd += 4;
            rep = 1;
          } else {
            if (!+n || !+n.slice(1) && n.charAt(0) == '5') {
              finalise(r, e + 1, 1);
              m = !r.times(r).eq(x);
            }
            break;
          }
        }
      }
      external = true;
      return finalise(r, e, Ctor.rounding, m);
    };
    P.tangent = P.tan = function() {
      var pr,
          rm,
          x = this,
          Ctor = x.constructor;
      if (!x.isFinite())
        return new Ctor(NaN);
      if (x.isZero())
        return new Ctor(x);
      pr = Ctor.precision;
      rm = Ctor.rounding;
      Ctor.precision = pr + 10;
      Ctor.rounding = 1;
      x = x.sin();
      x.s = 1;
      x = divide(x, new Ctor(1).minus(x.times(x)).sqrt(), pr + 10, 0);
      Ctor.precision = pr;
      Ctor.rounding = rm;
      return finalise(quadrant == 2 || quadrant == 4 ? x.neg() : x, pr, rm, true);
    };
    P.times = P.mul = function(y) {
      var carry,
          e,
          i,
          k,
          r,
          rL,
          t,
          xdL,
          ydL,
          x = this,
          Ctor = x.constructor,
          xd = x.d,
          yd = (y = new Ctor(y)).d;
      y.s *= x.s;
      if (!xd || !xd[0] || !yd || !yd[0]) {
        return new Ctor(!y.s || xd && !xd[0] && !yd || yd && !yd[0] && !xd ? NaN : !xd || !yd ? y.s / 0 : y.s * 0);
      }
      e = mathfloor(x.e / LOG_BASE) + mathfloor(y.e / LOG_BASE);
      xdL = xd.length;
      ydL = yd.length;
      if (xdL < ydL) {
        r = xd;
        xd = yd;
        yd = r;
        rL = xdL;
        xdL = ydL;
        ydL = rL;
      }
      r = [];
      rL = xdL + ydL;
      for (i = rL; i--; )
        r.push(0);
      for (i = ydL; --i >= 0; ) {
        carry = 0;
        for (k = xdL + i; k > i; ) {
          t = r[k] + yd[i] * xd[k - i - 1] + carry;
          r[k--] = t % BASE | 0;
          carry = t / BASE | 0;
        }
        r[k] = (r[k] + carry) % BASE | 0;
      }
      for (; !r[--rL]; )
        r.pop();
      if (carry)
        ++e;
      else
        r.shift();
      for (i = r.length; !r[--i]; )
        r.pop();
      y.d = r;
      y.e = getBase10Exponent(r, e);
      return external ? finalise(y, Ctor.precision, Ctor.rounding) : y;
    };
    P.toBinary = function(sd, rm) {
      return toStringBinary(this, 2, sd, rm);
    };
    P.toDecimalPlaces = P.toDP = function(dp, rm) {
      var x = this,
          Ctor = x.constructor;
      x = new Ctor(x);
      if (dp === void 0)
        return x;
      checkInt32(dp, 0, MAX_DIGITS);
      if (rm === void 0)
        rm = Ctor.rounding;
      else
        checkInt32(rm, 0, 8);
      return finalise(x, dp + x.e + 1, rm);
    };
    P.toExponential = function(dp, rm) {
      var str,
          x = this,
          Ctor = x.constructor;
      if (dp === void 0) {
        str = finiteToString(x, true);
      } else {
        checkInt32(dp, 0, MAX_DIGITS);
        if (rm === void 0)
          rm = Ctor.rounding;
        else
          checkInt32(rm, 0, 8);
        x = finalise(new Ctor(x), dp + 1, rm);
        str = finiteToString(x, true, dp + 1);
      }
      return x.isNeg() && !x.isZero() ? '-' + str : str;
    };
    P.toFixed = function(dp, rm) {
      var str,
          y,
          x = this,
          Ctor = x.constructor;
      if (dp === void 0) {
        str = finiteToString(x);
      } else {
        checkInt32(dp, 0, MAX_DIGITS);
        if (rm === void 0)
          rm = Ctor.rounding;
        else
          checkInt32(rm, 0, 8);
        y = finalise(new Ctor(x), dp + x.e + 1, rm);
        str = finiteToString(y, false, dp + y.e + 1);
      }
      return x.isNeg() && !x.isZero() ? '-' + str : str;
    };
    P.toFraction = function(maxD) {
      var d,
          d0,
          d1,
          d2,
          e,
          k,
          n,
          n0,
          n1,
          pr,
          q,
          r,
          x = this,
          xd = x.d,
          Ctor = x.constructor;
      if (!xd)
        return new Ctor(x);
      n1 = d0 = new Ctor(1);
      d1 = n0 = new Ctor(0);
      d = new Ctor(d1);
      e = d.e = getPrecision(xd) - x.e - 1;
      k = e % LOG_BASE;
      d.d[0] = mathpow(10, k < 0 ? LOG_BASE + k : k);
      if (maxD == null) {
        maxD = e > 0 ? d : n1;
      } else {
        n = new Ctor(maxD);
        if (!n.isInt() || n.lt(n1))
          throw Error(invalidArgument + n);
        maxD = n.gt(d) ? (e > 0 ? d : n1) : n;
      }
      external = false;
      n = new Ctor(digitsToString(xd));
      pr = Ctor.precision;
      Ctor.precision = e = xd.length * LOG_BASE * 2;
      for (; ; ) {
        q = divide(n, d, 0, 1, 1);
        d2 = d0.plus(q.times(d1));
        if (d2.cmp(maxD) == 1)
          break;
        d0 = d1;
        d1 = d2;
        d2 = n1;
        n1 = n0.plus(q.times(d2));
        n0 = d2;
        d2 = d;
        d = n.minus(q.times(d2));
        n = d2;
      }
      d2 = divide(maxD.minus(d0), d1, 0, 1, 1);
      n0 = n0.plus(d2.times(n1));
      d0 = d0.plus(d2.times(d1));
      n0.s = n1.s = x.s;
      r = divide(n1, d1, e, 1).minus(x).abs().cmp(divide(n0, d0, e, 1).minus(x).abs()) < 1 ? [n1, d1] : [n0, d0];
      Ctor.precision = pr;
      external = true;
      return r;
    };
    P.toHexadecimal = P.toHex = function(sd, rm) {
      return toStringBinary(this, 16, sd, rm);
    };
    P.toJSON = function() {
      var arr,
          e,
          i,
          k,
          len,
          n,
          r,
          str,
          x = this,
          isNeg = x.s < 0;
      if (!x.d)
        return NUMERALS.charAt(x.s ? isNeg ? 82 : 83 : 84);
      e = x.e;
      if (x.d.length === 1 && e < 4 && e >= 0) {
        n = x.d[0];
        if (n < 2857) {
          if (n < 41)
            return NUMERALS.charAt(isNeg ? n + 41 : n);
          n -= 41;
          if (isNeg)
            n += 2816;
          k = n / 88 | 0;
          return NUMERALS.charAt(k) + NUMERALS.charAt(n - k * 88);
        }
      }
      str = digitsToString(x.d);
      r = '';
      if (!isNeg && e <= 8 && e >= -7) {
        k = 64 + e + 7;
      } else if (isNeg && e <= 4 && e >= -3) {
        k = 64 + 16 + e + 3;
      } else if (str.length === e + 1) {
        k = 32 * isNeg;
      } else {
        k = 32 * isNeg + 16 * (e < 0);
        e = Math.abs(e);
        if (e < 88) {
          k += 1;
          r = NUMERALS.charAt(e);
        } else if (e < 7744) {
          k += 2;
          n = e / 88 | 0;
          r = NUMERALS.charAt(n) + NUMERALS.charAt(e - n * 88);
        } else {
          arr = convertBase(String(e), 10, 88);
          len = arr.length;
          k += len;
          for (i = 0; i < len; i++)
            r += NUMERALS.charAt(arr[i]);
        }
      }
      r = NUMERALS.charAt(k) + r;
      arr = convertBase(str, 10, 88);
      len = arr.length;
      for (i = 0; i < len; i++)
        r += NUMERALS.charAt(arr[i]);
      return r;
    };
    P.toNearest = function(y, rm) {
      var x = this,
          Ctor = x.constructor;
      x = new Ctor(x);
      if (y == null) {
        if (!x.d)
          return x;
        y = new Ctor(1);
        rm = Ctor.rounding;
      } else {
        y = new Ctor(y);
        if (rm !== void 0)
          checkInt32(rm, 0, 8);
        if (!x.d)
          return y.s ? x : y;
        if (!y.d) {
          if (y.s)
            y.s = x.s;
          return y;
        }
      }
      if (y.d[0]) {
        external = false;
        if (rm < 4)
          rm = [4, 5, 7, 8][rm];
        x = divide(x, y, 0, rm, 1).times(y);
        external = true;
        finalise(x);
      } else {
        y.s = x.s;
        x = y;
      }
      return x;
    };
    P.toNumber = function() {
      return +this;
    };
    P.toOctal = function(sd, rm) {
      return toStringBinary(this, 8, sd, rm);
    };
    P.toPower = P.pow = function(y) {
      var e,
          k,
          pr,
          r,
          rm,
          sign,
          yIsInt,
          x = this,
          Ctor = x.constructor,
          yn = +(y = new Ctor(y));
      if (!x.d || !y.d || !x.d[0] || !y.d[0])
        return new Ctor(mathpow(+x, yn));
      x = new Ctor(x);
      if (x.eq(1))
        return x;
      pr = Ctor.precision;
      rm = Ctor.rounding;
      if (y.eq(1))
        return finalise(x, pr, rm);
      e = mathfloor(y.e / LOG_BASE);
      k = y.d.length - 1;
      yIsInt = e >= k;
      sign = x.s;
      if (!yIsInt) {
        if (sign < 0)
          return new Ctor(NaN);
      } else if ((k = yn < 0 ? -yn : yn) <= MAX_SAFE_INTEGER) {
        r = intPow(Ctor, x, k, pr);
        return y.s < 0 ? new Ctor(1).div(r) : finalise(r, pr, rm);
      }
      sign = sign < 0 && y.d[Math.max(e, k)] & 1 ? -1 : 1;
      k = mathpow(+x, yn);
      e = k == 0 || !isFinite(k) ? mathfloor(yn * (Math.log('0.' + digitsToString(x.d)) / Math.LN10 + x.e + 1)) : new Ctor(k + '').e;
      if (e > Ctor.maxE + 1 || e < Ctor.minE - 1)
        return new Ctor(e > 0 ? sign / 0 : 0);
      external = false;
      Ctor.rounding = x.s = 1;
      k = Math.min(12, (e + '').length);
      r = naturalExponential(y.times(naturalLogarithm(x, pr + k)), pr);
      r = finalise(r, pr + 5, 1);
      if (checkRoundingDigits(r.d, pr, rm)) {
        e = pr + 10;
        r = finalise(naturalExponential(y.times(naturalLogarithm(x, e + k)), e), e + 5, 1);
        if (+digitsToString(r.d).slice(pr + 1, pr + 15) + 1 == 1e14) {
          r = finalise(r, pr + 1, 0);
        }
      }
      r.s = sign;
      external = true;
      Ctor.rounding = rm;
      return finalise(r, pr, rm);
    };
    P.toPrecision = function(sd, rm) {
      var str,
          x = this,
          Ctor = x.constructor;
      if (sd === void 0) {
        str = finiteToString(x, x.e <= Ctor.toExpNeg || x.e >= Ctor.toExpPos);
      } else {
        checkInt32(sd, 1, MAX_DIGITS);
        if (rm === void 0)
          rm = Ctor.rounding;
        else
          checkInt32(rm, 0, 8);
        x = finalise(new Ctor(x), sd, rm);
        str = finiteToString(x, sd <= x.e || x.e <= Ctor.toExpNeg, sd);
      }
      return x.isNeg() && !x.isZero() ? '-' + str : str;
    };
    P.toSignificantDigits = P.toSD = function(sd, rm) {
      var x = this,
          Ctor = x.constructor;
      if (sd === void 0) {
        sd = Ctor.precision;
        rm = Ctor.rounding;
      } else {
        checkInt32(sd, 1, MAX_DIGITS);
        if (rm === void 0)
          rm = Ctor.rounding;
        else
          checkInt32(rm, 0, 8);
      }
      return finalise(new Ctor(x), sd, rm);
    };
    P.toString = function() {
      var x = this,
          Ctor = x.constructor,
          str = finiteToString(x, x.e <= Ctor.toExpNeg || x.e >= Ctor.toExpPos);
      return x.isNeg() && !x.isZero() ? '-' + str : str;
    };
    P.truncated = P.trunc = function() {
      return finalise(new this.constructor(this), this.e + 1, 1);
    };
    P.valueOf = function() {
      var x = this,
          Ctor = x.constructor,
          str = finiteToString(x, x.e <= Ctor.toExpNeg || x.e >= Ctor.toExpPos);
      return x.isNeg() ? '-' + str : str;
    };
    function digitsToString(d) {
      var i,
          k,
          ws,
          indexOfLastWord = d.length - 1,
          str = '',
          w = d[0];
      if (indexOfLastWord > 0) {
        str += w;
        for (i = 1; i < indexOfLastWord; i++) {
          ws = d[i] + '';
          k = LOG_BASE - ws.length;
          if (k)
            str += getZeroString(k);
          str += ws;
        }
        w = d[i];
        ws = w + '';
        k = LOG_BASE - ws.length;
        if (k)
          str += getZeroString(k);
      } else if (w === 0) {
        return '0';
      }
      for (; w % 10 === 0; )
        w /= 10;
      return str + w;
    }
    function checkInt32(i, min, max) {
      if (i !== ~~i || i < min || i > max) {
        throw Error(invalidArgument + i);
      }
    }
    function checkRoundingDigits(d, i, rm, repeating) {
      var di,
          k,
          r,
          rd;
      for (k = d[0]; k >= 10; k /= 10)
        --i;
      if (--i < 0) {
        i += LOG_BASE;
        di = 0;
      } else {
        di = Math.ceil((i + 1) / LOG_BASE);
        i %= LOG_BASE;
      }
      k = mathpow(10, LOG_BASE - i);
      rd = d[di] % k | 0;
      if (repeating == null) {
        if (i < 3) {
          if (i == 0)
            rd = rd / 100 | 0;
          else if (i == 1)
            rd = rd / 10 | 0;
          r = rm < 4 && rd == 99999 || rm > 3 && rd == 49999 || rd == 50000 || rd == 0;
        } else {
          r = (rm < 4 && rd + 1 == k || rm > 3 && rd + 1 == k / 2) && (d[di + 1] / k / 100 | 0) == mathpow(10, i - 2) - 1 || (rd == k / 2 || rd == 0) && (d[di + 1] / k / 100 | 0) == 0;
        }
      } else {
        if (i < 4) {
          if (i == 0)
            rd = rd / 1000 | 0;
          else if (i == 1)
            rd = rd / 100 | 0;
          else if (i == 2)
            rd = rd / 10 | 0;
          r = (repeating || rm < 4) && rd == 9999 || !repeating && rm > 3 && rd == 4999;
        } else {
          r = ((repeating || rm < 4) && rd + 1 == k || (!repeating && rm > 3) && rd + 1 == k / 2) && (d[di + 1] / k / 1000 | 0) == mathpow(10, i - 3) - 1;
        }
      }
      return r;
    }
    function convertBase(str, baseIn, baseOut) {
      var j,
          arr = [0],
          arrL,
          i = 0,
          strL = str.length;
      for (; i < strL; ) {
        for (arrL = arr.length; arrL--; )
          arr[arrL] *= baseIn;
        arr[0] += NUMERALS.indexOf(str.charAt(i++));
        for (j = 0; j < arr.length; j++) {
          if (arr[j] > baseOut - 1) {
            if (arr[j + 1] === void 0)
              arr[j + 1] = 0;
            arr[j + 1] += arr[j] / baseOut | 0;
            arr[j] %= baseOut;
          }
        }
      }
      return arr.reverse();
    }
    function cosine(Ctor, x) {
      var k,
          y,
          len = x.d.length;
      if (len < 32) {
        k = Math.ceil(len / 3);
        y = Math.pow(4, -k).toString();
      } else {
        k = 16;
        y = '2.3283064365386962890625e-10';
      }
      Ctor.precision += k;
      x = taylorSeries(Ctor, 1, x.times(y), new Ctor(1));
      for (var i = k; i--; ) {
        var cos2x = x.times(x);
        x = cos2x.times(cos2x).minus(cos2x).times(8).plus(1);
      }
      Ctor.precision -= k;
      return x;
    }
    var divide = (function() {
      function multiplyInteger(x, k, base) {
        var temp,
            carry = 0,
            i = x.length;
        for (x = x.slice(); i--; ) {
          temp = x[i] * k + carry;
          x[i] = temp % base | 0;
          carry = temp / base | 0;
        }
        if (carry)
          x.unshift(carry);
        return x;
      }
      function compare(a, b, aL, bL) {
        var i,
            r;
        if (aL != bL) {
          r = aL > bL ? 1 : -1;
        } else {
          for (i = r = 0; i < aL; i++) {
            if (a[i] != b[i]) {
              r = a[i] > b[i] ? 1 : -1;
              break;
            }
          }
        }
        return r;
      }
      function subtract(a, b, aL, base) {
        var i = 0;
        for (; aL--; ) {
          a[aL] -= i;
          i = a[aL] < b[aL] ? 1 : 0;
          a[aL] = i * base + a[aL] - b[aL];
        }
        for (; !a[0] && a.length > 1; )
          a.shift();
      }
      return function(x, y, pr, rm, dp, base) {
        var cmp,
            e,
            i,
            k,
            logBase,
            more,
            prod,
            prodL,
            q,
            qd,
            rem,
            remL,
            rem0,
            sd,
            t,
            xi,
            xL,
            yd0,
            yL,
            yz,
            Ctor = x.constructor,
            sign = x.s == y.s ? 1 : -1,
            xd = x.d,
            yd = y.d;
        if (!xd || !xd[0] || !yd || !yd[0]) {
          return new Ctor(!x.s || !y.s || (xd ? yd && xd[0] == yd[0] : !yd) ? NaN : xd && xd[0] == 0 || !yd ? sign * 0 : sign / 0);
        }
        if (base) {
          logBase = 1;
          e = x.e - y.e;
        } else {
          base = BASE;
          logBase = LOG_BASE;
          e = mathfloor(x.e / logBase) - mathfloor(y.e / logBase);
        }
        yL = yd.length;
        xL = xd.length;
        q = new Ctor(sign);
        qd = q.d = [];
        for (i = 0; yd[i] == (xd[i] || 0); i++)
          ;
        if (yd[i] > (xd[i] || 0))
          e--;
        if (pr == null) {
          sd = pr = Ctor.precision;
          rm = Ctor.rounding;
        } else if (dp) {
          sd = pr + (x.e - y.e) + 1;
        } else {
          sd = pr;
        }
        if (sd < 0) {
          qd.push(1);
          more = true;
        } else {
          sd = sd / logBase + 2 | 0;
          i = 0;
          if (yL == 1) {
            k = 0;
            yd = yd[0];
            sd++;
            for (; (i < xL || k) && sd--; i++) {
              t = k * base + (xd[i] || 0);
              qd[i] = t / yd | 0;
              k = t % yd | 0;
            }
            more = k || i < xL;
          } else {
            k = base / (yd[0] + 1) | 0;
            if (k > 1) {
              yd = multiplyInteger(yd, k, base);
              xd = multiplyInteger(xd, k, base);
              yL = yd.length;
              xL = xd.length;
            }
            xi = yL;
            rem = xd.slice(0, yL);
            remL = rem.length;
            for (; remL < yL; )
              rem[remL++] = 0;
            yz = yd.slice();
            yz.unshift(0);
            yd0 = yd[0];
            if (yd[1] >= base / 2)
              ++yd0;
            do {
              k = 0;
              cmp = compare(yd, rem, yL, remL);
              if (cmp < 0) {
                rem0 = rem[0];
                if (yL != remL)
                  rem0 = rem0 * base + (rem[1] || 0);
                k = rem0 / yd0 | 0;
                if (k > 1) {
                  if (k >= base)
                    k = base - 1;
                  prod = multiplyInteger(yd, k, base);
                  prodL = prod.length;
                  remL = rem.length;
                  cmp = compare(prod, rem, prodL, remL);
                  if (cmp == 1) {
                    k--;
                    subtract(prod, yL < prodL ? yz : yd, prodL, base);
                  }
                } else {
                  if (k == 0)
                    cmp = k = 1;
                  prod = yd.slice();
                }
                prodL = prod.length;
                if (prodL < remL)
                  prod.unshift(0);
                subtract(rem, prod, remL, base);
                if (cmp == -1) {
                  remL = rem.length;
                  cmp = compare(yd, rem, yL, remL);
                  if (cmp < 1) {
                    k++;
                    subtract(rem, yL < remL ? yz : yd, remL, base);
                  }
                }
                remL = rem.length;
              } else if (cmp === 0) {
                k++;
                rem = [0];
              }
              qd[i++] = k;
              if (cmp && rem[0]) {
                rem[remL++] = xd[xi] || 0;
              } else {
                rem = [xd[xi]];
                remL = 1;
              }
            } while ((xi++ < xL || rem[0] !== void 0) && sd--);
            more = rem[0] !== void 0;
          }
          if (!qd[0])
            qd.shift();
        }
        if (logBase == 1) {
          q.e = e;
          inexact = more;
        } else {
          for (i = 1, k = qd[0]; k >= 10; k /= 10)
            i++;
          q.e = i + e * logBase - 1;
          finalise(q, dp ? pr + q.e + 1 : pr, rm, more);
        }
        return q;
      };
    })();
    function finalise(x, sd, rm, isTruncated) {
      var digits,
          i,
          j,
          k,
          rd,
          roundUp,
          w,
          xd,
          xdi,
          Ctor = x.constructor;
      out: if (sd != null) {
        xd = x.d;
        if (!xd)
          return x;
        for (digits = 1, k = xd[0]; k >= 10; k /= 10)
          digits++;
        i = sd - digits;
        if (i < 0) {
          i += LOG_BASE;
          j = sd;
          w = xd[xdi = 0];
          rd = w / mathpow(10, digits - j - 1) % 10 | 0;
        } else {
          xdi = Math.ceil((i + 1) / LOG_BASE);
          k = xd.length;
          if (xdi >= k) {
            if (isTruncated) {
              for (; k++ <= xdi; )
                xd.push(0);
              w = rd = 0;
              digits = 1;
              i %= LOG_BASE;
              j = i - LOG_BASE + 1;
            } else {
              break out;
            }
          } else {
            w = k = xd[xdi];
            for (digits = 1; k >= 10; k /= 10)
              digits++;
            i %= LOG_BASE;
            j = i - LOG_BASE + digits;
            rd = j < 0 ? 0 : w / mathpow(10, digits - j - 1) % 10 | 0;
          }
        }
        isTruncated = isTruncated || sd < 0 || xd[xdi + 1] !== void 0 || (j < 0 ? w : w % mathpow(10, digits - j - 1));
        roundUp = rm < 4 ? (rd || isTruncated) && (rm == 0 || rm == (x.s < 0 ? 3 : 2)) : rd > 5 || rd == 5 && (rm == 4 || isTruncated || rm == 6 && ((i > 0 ? j > 0 ? w / mathpow(10, digits - j) : 0 : xd[xdi - 1]) % 10) & 1 || rm == (x.s < 0 ? 8 : 7));
        if (sd < 1 || !xd[0]) {
          xd.length = 0;
          if (roundUp) {
            sd -= x.e + 1;
            xd[0] = mathpow(10, (LOG_BASE - sd % LOG_BASE) % LOG_BASE);
            x.e = -sd || 0;
          } else {
            xd[0] = x.e = 0;
          }
          return x;
        }
        if (i == 0) {
          xd.length = xdi;
          k = 1;
          xdi--;
        } else {
          xd.length = xdi + 1;
          k = mathpow(10, LOG_BASE - i);
          xd[xdi] = j > 0 ? (w / mathpow(10, digits - j) % mathpow(10, j) | 0) * k : 0;
        }
        if (roundUp) {
          for (; ; ) {
            if (xdi == 0) {
              for (i = 1, j = xd[0]; j >= 10; j /= 10)
                i++;
              j = xd[0] += k;
              for (k = 1; j >= 10; j /= 10)
                k++;
              if (i != k) {
                x.e++;
                if (xd[0] == BASE)
                  xd[0] = 1;
              }
              break;
            } else {
              xd[xdi] += k;
              if (xd[xdi] != BASE)
                break;
              xd[xdi--] = 0;
              k = 1;
            }
          }
        }
        for (i = xd.length; xd[--i] === 0; )
          xd.pop();
      }
      if (external) {
        if (x.e > Ctor.maxE) {
          x.d = null;
          x.e = NaN;
        } else if (x.e < Ctor.minE) {
          x.e = 0;
          x.d = [0];
        }
      }
      return x;
    }
    function finiteToString(x, isExp, sd) {
      if (!x.isFinite())
        return nonFiniteToString(x);
      var k,
          e = x.e,
          str = digitsToString(x.d),
          len = str.length;
      if (isExp) {
        if (sd && (k = sd - len) > 0) {
          str = str.charAt(0) + '.' + str.slice(1) + getZeroString(k);
        } else if (len > 1) {
          str = str.charAt(0) + '.' + str.slice(1);
        }
        str = str + (x.e < 0 ? 'e' : 'e+') + x.e;
      } else if (e < 0) {
        str = '0.' + getZeroString(-e - 1) + str;
        if (sd && (k = sd - len) > 0)
          str += getZeroString(k);
      } else if (e >= len) {
        str += getZeroString(e + 1 - len);
        if (sd && (k = sd - e - 1) > 0)
          str = str + '.' + getZeroString(k);
      } else {
        if ((k = e + 1) < len)
          str = str.slice(0, k) + '.' + str.slice(k);
        if (sd && (k = sd - len) > 0) {
          if (e + 1 === len)
            str += '.';
          str += getZeroString(k);
        }
      }
      return str;
    }
    function getBase10Exponent(digits, e) {
      for (var i = 1,
          w = digits[0]; w >= 10; w /= 10)
        i++;
      return i + e * LOG_BASE - 1;
    }
    function getLn10(Ctor, sd, pr) {
      if (sd > LN10_PRECISION) {
        external = true;
        if (pr)
          Ctor.precision = pr;
        throw Error(precisionLimitExceeded);
      }
      return finalise(new Ctor(LN10), sd, 1, true);
    }
    function getPi(Ctor, sd, rm) {
      if (sd > PI_PRECISION)
        throw Error(precisionLimitExceeded);
      return finalise(new Ctor(PI), sd, rm, true);
    }
    function getPrecision(digits) {
      var w = digits.length - 1,
          len = w * LOG_BASE + 1;
      w = digits[w];
      if (w) {
        for (; w % 10 == 0; w /= 10)
          len--;
        for (w = digits[0]; w >= 10; w /= 10)
          len++;
      }
      return len;
    }
    function getZeroString(k) {
      var zs = '';
      for (; k--; )
        zs += '0';
      return zs;
    }
    function intPow(Ctor, x, n, pr) {
      var isTruncated,
          r = new Ctor(1),
          k = Math.ceil(pr / LOG_BASE + 4);
      external = false;
      for (; ; ) {
        if (n % 2) {
          r = r.times(x);
          if (truncate(r.d, k))
            isTruncated = true;
        }
        n = mathfloor(n / 2);
        if (n === 0) {
          n = r.d.length - 1;
          if (isTruncated && r.d[n] === 0)
            ++r.d[n];
          break;
        }
        x = x.times(x);
        truncate(x.d, k);
      }
      external = true;
      return r;
    }
    function isOdd(n) {
      return n.d[n.d.length - 1] & 1;
    }
    function maxOrMin(Ctor, args, ltgt) {
      var y,
          x = new Ctor(args[0]),
          i = 0;
      for (; ++i < args.length; ) {
        y = new Ctor(args[i]);
        if (!y.s) {
          x = y;
          break;
        } else if (x[ltgt](y)) {
          x = y;
        }
      }
      return x;
    }
    function naturalExponential(x, sd) {
      var denominator,
          guard,
          j,
          pow,
          sum,
          t,
          wpr,
          rep = 0,
          i = 0,
          k = 0,
          Ctor = x.constructor,
          rm = Ctor.rounding,
          pr = Ctor.precision;
      if (!x.d || !x.d[0] || x.e > 17) {
        return new Ctor(x.d ? !x.d[0] ? 1 : x.s < 0 ? 0 : 1 / 0 : x.s ? x.s < 0 ? 0 : x : 0 / 0);
      }
      if (sd == null) {
        external = false;
        wpr = pr;
      } else {
        wpr = sd;
      }
      t = new Ctor(0.03125);
      while (x.e > -2) {
        x = x.times(t);
        k += 5;
      }
      guard = Math.log(mathpow(2, k)) / Math.LN10 * 2 + 5 | 0;
      wpr += guard;
      denominator = pow = sum = new Ctor(1);
      Ctor.precision = wpr;
      for (; ; ) {
        pow = finalise(pow.times(x), wpr, 1);
        denominator = denominator.times(++i);
        t = sum.plus(divide(pow, denominator, wpr, 1));
        if (digitsToString(t.d).slice(0, wpr) === digitsToString(sum.d).slice(0, wpr)) {
          j = k;
          while (j--)
            sum = finalise(sum.times(sum), wpr, 1);
          if (sd == null) {
            if (rep < 3 && checkRoundingDigits(sum.d, wpr - guard, rm, rep)) {
              Ctor.precision = wpr += 10;
              denominator = pow = t = new Ctor(1);
              i = 0;
              rep++;
            } else {
              return finalise(sum, Ctor.precision = pr, rm, external = true);
            }
          } else {
            Ctor.precision = pr;
            return sum;
          }
        }
        sum = t;
      }
    }
    function naturalLogarithm(y, sd) {
      var c,
          c0,
          denominator,
          e,
          numerator,
          rep,
          sum,
          t,
          wpr,
          x1,
          x2,
          n = 1,
          guard = 10,
          x = y,
          xd = x.d,
          Ctor = x.constructor,
          rm = Ctor.rounding,
          pr = Ctor.precision;
      if (x.s < 0 || !xd || !xd[0] || !x.e && xd[0] == 1 && xd.length == 1) {
        return new Ctor(xd && !xd[0] ? -1 / 0 : x.s != 1 ? NaN : xd ? 0 : x);
      }
      if (sd == null) {
        external = false;
        wpr = pr;
      } else {
        wpr = sd;
      }
      Ctor.precision = wpr += guard;
      c = digitsToString(xd);
      c0 = c.charAt(0);
      if (Math.abs(e = x.e) < 1.5e15) {
        while (c0 < 7 && c0 != 1 || c0 == 1 && c.charAt(1) > 3) {
          x = x.times(y);
          c = digitsToString(x.d);
          c0 = c.charAt(0);
          n++;
        }
        e = x.e;
        if (c0 > 1) {
          x = new Ctor('0.' + c);
          e++;
        } else {
          x = new Ctor(c0 + '.' + c.slice(1));
        }
      } else {
        t = getLn10(Ctor, wpr + 2, pr).times(e + '');
        x = naturalLogarithm(new Ctor(c0 + '.' + c.slice(1)), wpr - guard).plus(t);
        Ctor.precision = pr;
        return sd == null ? finalise(x, pr, rm, external = true) : x;
      }
      x1 = x;
      sum = numerator = x = divide(x.minus(1), x.plus(1), wpr, 1);
      x2 = finalise(x.times(x), wpr, 1);
      denominator = 3;
      for (; ; ) {
        numerator = finalise(numerator.times(x2), wpr, 1);
        t = sum.plus(divide(numerator, new Ctor(denominator), wpr, 1));
        if (digitsToString(t.d).slice(0, wpr) === digitsToString(sum.d).slice(0, wpr)) {
          sum = sum.times(2);
          if (e !== 0)
            sum = sum.plus(getLn10(Ctor, wpr + 2, pr).times(e + ''));
          sum = divide(sum, new Ctor(n), wpr, 1);
          if (sd == null) {
            if (checkRoundingDigits(sum.d, wpr - guard, rm, rep)) {
              Ctor.precision = wpr += guard;
              t = numerator = x = divide(x1.minus(1), x1.plus(1), wpr, 1);
              x2 = finalise(x.times(x), wpr, 1);
              denominator = rep = 1;
            } else {
              return finalise(sum, Ctor.precision = pr, rm, external = true);
            }
          } else {
            Ctor.precision = pr;
            return sum;
          }
        }
        sum = t;
        denominator += 2;
      }
    }
    function nonFiniteToString(x) {
      return String(x.s * x.s / 0);
    }
    function parseDecimal(x, str) {
      var e,
          i,
          len;
      if ((e = str.indexOf('.')) > -1)
        str = str.replace('.', '');
      if ((i = str.search(/e/i)) > 0) {
        if (e < 0)
          e = i;
        e += +str.slice(i + 1);
        str = str.substring(0, i);
      } else if (e < 0) {
        e = str.length;
      }
      for (i = 0; str.charCodeAt(i) === 48; i++)
        ;
      for (len = str.length; str.charCodeAt(len - 1) === 48; --len)
        ;
      str = str.slice(i, len);
      if (str) {
        len -= i;
        x.e = e = e - i - 1;
        x.d = [];
        i = (e + 1) % LOG_BASE;
        if (e < 0)
          i += LOG_BASE;
        if (i < len) {
          if (i)
            x.d.push(+str.slice(0, i));
          for (len -= LOG_BASE; i < len; )
            x.d.push(+str.slice(i, i += LOG_BASE));
          str = str.slice(i);
          i = LOG_BASE - str.length;
        } else {
          i -= len;
        }
        for (; i--; )
          str += '0';
        x.d.push(+str);
        if (external) {
          if (x.e > x.constructor.maxE) {
            x.d = null;
            x.e = NaN;
          } else if (x.e < x.constructor.minE) {
            x.e = 0;
            x.d = [0];
          }
        }
      } else {
        x.e = 0;
        x.d = [0];
      }
      return x;
    }
    function parseOther(x, str) {
      var base,
          Ctor,
          divisor,
          i,
          isFloat,
          len,
          p,
          xd,
          xe;
      if (str === 'Infinity' || str === 'NaN') {
        if (!+str)
          x.s = NaN;
        x.e = NaN;
        x.d = null;
        return x;
      }
      if (isHex.test(str)) {
        base = 16;
        str = str.toLowerCase();
      } else if (isBinary.test(str)) {
        base = 2;
      } else if (isOctal.test(str)) {
        base = 8;
      } else {
        throw Error(invalidArgument + str);
      }
      i = str.search(/p/i);
      if (i > 0) {
        p = +str.slice(i + 1);
        str = str.substring(2, i);
      } else {
        str = str.slice(2);
      }
      i = str.indexOf('.');
      isFloat = i >= 0;
      Ctor = x.constructor;
      if (isFloat) {
        str = str.replace('.', '');
        len = str.length;
        i = len - i;
        divisor = intPow(Ctor, new Ctor(base), i, i * 2);
      }
      xd = convertBase(str, base, BASE);
      xe = xd.length - 1;
      for (i = xe; xd[i] === 0; --i)
        xd.pop();
      if (i < 0)
        return new Ctor(x.s * 0);
      x.e = getBase10Exponent(xd, xe);
      x.d = xd;
      external = false;
      if (isFloat)
        x = divide(x, divisor, len * 4);
      if (p)
        x = x.times(Math.abs(p) < 54 ? Math.pow(2, p) : Decimal.pow(2, p));
      external = true;
      return x;
    }
    function sine(Ctor, x) {
      var k,
          len = x.d.length;
      if (len < 3)
        return taylorSeries(Ctor, 2, x, x);
      k = 1.4 * Math.sqrt(len);
      k = k > 16 ? 16 : k | 0;
      x = x.times(Math.pow(5, -k));
      x = taylorSeries(Ctor, 2, x, x);
      var sin2_x,
          d5 = new Ctor(5),
          d16 = new Ctor(16),
          d20 = new Ctor(20);
      for (; k--; ) {
        sin2_x = x.times(x);
        x = x.times(d5.plus(sin2_x.times(d16.times(sin2_x).minus(d20))));
      }
      return x;
    }
    function taylorSeries(Ctor, n, x, y, isHyperbolic) {
      var j,
          t,
          u,
          x2,
          i = 1,
          pr = Ctor.precision,
          k = Math.ceil(pr / LOG_BASE);
      external = false;
      x2 = x.times(x);
      u = new Ctor(y);
      for (; ; ) {
        t = divide(u.times(x2), new Ctor(n++ * n++), pr, 1);
        u = isHyperbolic ? y.plus(t) : y.minus(t);
        y = divide(t.times(x2), new Ctor(n++ * n++), pr, 1);
        t = u.plus(y);
        if (t.d[k] !== void 0) {
          for (j = k; t.d[j] === u.d[j] && j--; )
            ;
          if (j == -1)
            break;
        }
        j = u;
        u = y;
        y = t;
        t = j;
        i++;
      }
      external = true;
      t.d.length = k + 1;
      return t;
    }
    function toLessThanHalfPi(Ctor, x) {
      var t,
          isNeg = x.s < 0,
          pi = getPi(Ctor, Ctor.precision, 1),
          halfPi = pi.times(0.5);
      x = x.abs();
      if (x.lte(halfPi)) {
        quadrant = isNeg ? 4 : 1;
        return x;
      }
      t = x.divToInt(pi);
      if (t.isZero()) {
        quadrant = isNeg ? 3 : 2;
      } else {
        x = x.minus(t.times(pi));
        if (x.lte(halfPi)) {
          quadrant = isOdd(t) ? (isNeg ? 2 : 3) : (isNeg ? 4 : 1);
          return x;
        }
        quadrant = isOdd(t) ? (isNeg ? 1 : 4) : (isNeg ? 3 : 2);
      }
      return x.minus(pi).abs();
    }
    function toStringBinary(x, baseOut, sd, rm) {
      var base,
          e,
          i,
          k,
          len,
          roundUp,
          str,
          xd,
          y,
          Ctor = x.constructor,
          isExp = sd !== void 0;
      if (isExp) {
        checkInt32(sd, 1, MAX_DIGITS);
        if (rm === void 0)
          rm = Ctor.rounding;
        else
          checkInt32(rm, 0, 8);
      } else {
        sd = Ctor.precision;
        rm = Ctor.rounding;
      }
      if (!x.isFinite()) {
        str = nonFiniteToString(x);
      } else {
        str = finiteToString(x);
        i = str.indexOf('.');
        if (isExp) {
          base = 2;
          if (baseOut == 16) {
            sd = sd * 4 - 3;
          } else if (baseOut == 8) {
            sd = sd * 3 - 2;
          }
        } else {
          base = baseOut;
        }
        if (i >= 0) {
          str = str.replace('.', '');
          y = new Ctor(1);
          y.e = str.length - i;
          y.d = convertBase(finiteToString(y), 10, base);
          y.e = y.d.length;
        }
        xd = convertBase(str, 10, base);
        e = len = xd.length;
        for (; xd[--len] == 0; )
          xd.pop();
        if (!xd[0]) {
          str = isExp ? '0p+0' : '0';
        } else {
          if (i < 0) {
            e--;
          } else {
            x = new Ctor(x);
            x.d = xd;
            x.e = e;
            x = divide(x, y, sd, rm, 0, base);
            xd = x.d;
            e = x.e;
            roundUp = inexact;
          }
          i = xd[sd];
          k = base / 2;
          roundUp = roundUp || xd[sd + 1] !== void 0;
          roundUp = rm < 4 ? (i !== void 0 || roundUp) && (rm === 0 || rm === (x.s < 0 ? 3 : 2)) : i > k || i === k && (rm === 4 || roundUp || rm === 6 && xd[sd - 1] & 1 || rm === (x.s < 0 ? 8 : 7));
          xd.length = sd;
          if (roundUp) {
            for (; ++xd[--sd] > base - 1; ) {
              xd[sd] = 0;
              if (!sd) {
                ++e;
                xd.unshift(1);
              }
            }
          }
          for (len = xd.length; !xd[len - 1]; --len)
            ;
          for (i = 0, str = ''; i < len; i++)
            str += NUMERALS.charAt(xd[i]);
          if (isExp) {
            if (len > 1) {
              if (baseOut == 16 || baseOut == 8) {
                i = baseOut == 16 ? 4 : 3;
                for (--len; len % i; len++)
                  str += '0';
                xd = convertBase(str, base, baseOut);
                for (len = xd.length; !xd[len - 1]; --len)
                  ;
                for (i = 1, str = '1.'; i < len; i++)
                  str += NUMERALS.charAt(xd[i]);
              } else {
                str = str.charAt(0) + '.' + str.slice(1);
              }
            }
            str = str + (e < 0 ? 'p' : 'p+') + e;
          } else if (e < 0) {
            for (; ++e; )
              str = '0' + str;
            str = '0.' + str;
          } else {
            if (++e > len)
              for (e -= len; e--; )
                str += '0';
            else if (e < len)
              str = str.slice(0, e) + '.' + str.slice(e);
          }
        }
        str = (baseOut == 16 ? '0x' : baseOut == 2 ? '0b' : baseOut == 8 ? '0o' : '') + str;
      }
      return x.s < 0 ? '-' + str : str;
    }
    function truncate(arr, len) {
      if (arr.length > len) {
        arr.length = len;
        return true;
      }
    }
    function abs(x) {
      return new this(x).abs();
    }
    function acos(x) {
      return new this(x).acos();
    }
    function acosh(x) {
      return new this(x).acosh();
    }
    function add(x, y) {
      return new this(x).plus(y);
    }
    function asin(x) {
      return new this(x).asin();
    }
    function asinh(x) {
      return new this(x).asinh();
    }
    function atan(x) {
      return new this(x).atan();
    }
    function atanh(x) {
      return new this(x).atanh();
    }
    function atan2(y, x) {
      y = new this(y);
      x = new this(x);
      var r,
          pr = this.precision,
          rm = this.rounding,
          wpr = pr + 4;
      if (!y.s || !x.s) {
        r = new this(NaN);
      } else if (!y.d && !x.d) {
        r = getPi(this, wpr, 1).times(x.s > 0 ? 0.25 : 0.75);
        r.s = y.s;
      } else if (!x.d || y.isZero()) {
        r = x.s < 0 ? getPi(this, pr, rm) : new this(0);
        r.s = y.s;
      } else if (!y.d || x.isZero()) {
        r = getPi(this, wpr, 1).times(0.5);
        r.s = y.s;
      } else if (x.s < 0) {
        this.precision = wpr;
        this.rounding = 1;
        r = this.atan(divide(y, x, wpr, 1));
        x = getPi(this, wpr, 1);
        this.precision = pr;
        this.rounding = rm;
        r = y.s < 0 ? r.minus(x) : r.plus(x);
      } else {
        r = this.atan(divide(y, x, wpr, 1));
      }
      return r;
    }
    function cbrt(x) {
      return new this(x).cbrt();
    }
    function ceil(x) {
      return finalise(x = new this(x), x.e + 1, 2);
    }
    function config(obj) {
      if (!obj || typeof obj !== 'object')
        throw Error(decimalError + 'Object expected');
      var i,
          p,
          v,
          ps = ['precision', 1, MAX_DIGITS, 'rounding', 0, 8, 'toExpNeg', -EXP_LIMIT, 0, 'toExpPos', 0, EXP_LIMIT, 'maxE', 0, EXP_LIMIT, 'minE', -EXP_LIMIT, 0, 'modulo', 0, 9];
      for (i = 0; i < ps.length; i += 3) {
        if ((v = obj[p = ps[i]]) !== void 0) {
          if (mathfloor(v) === v && v >= ps[i + 1] && v <= ps[i + 2])
            this[p] = v;
          else
            throw Error(invalidArgument + p + ': ' + v);
        }
      }
      if (obj.hasOwnProperty(p = 'crypto')) {
        if ((v = obj[p]) === void 0) {
          this[p] = v;
        } else if (v === true || v === false || v === 0 || v === 1) {
          this[p] = !!(v && cryptoObject && (cryptoObject.getRandomValues || cryptoObject.randomBytes));
        } else {
          throw Error(invalidArgument + p + ': ' + v);
        }
      }
      return this;
    }
    function cos(x) {
      return new this(x).cos();
    }
    function cosh(x) {
      return new this(x).cosh();
    }
    function clone(obj) {
      var i,
          p,
          ps;
      function Decimal(v) {
        var e,
            i,
            t,
            x = this;
        if (!(x instanceof Decimal))
          return new Decimal(v);
        x.constructor = Decimal;
        if (v instanceof Decimal) {
          x.s = v.s;
          x.e = v.e;
          x.d = (v = v.d) ? v.slice() : v;
          return;
        }
        t = typeof v;
        if (t === 'number') {
          if (v === 0) {
            x.s = 1 / v < 0 ? -1 : 1;
            x.e = 0;
            x.d = [0];
            return;
          }
          if (v < 0) {
            v = -v;
            x.s = -1;
          } else {
            x.s = 1;
          }
          if (v === ~~v && v < 1e7) {
            for (e = 0, i = v; i >= 10; i /= 10)
              e++;
            x.e = e;
            x.d = [v];
            return;
          } else if (v * 0 !== 0) {
            if (!v)
              x.s = NaN;
            x.e = NaN;
            x.d = null;
            return;
          }
          return parseDecimal(x, v.toString());
        } else if (t !== 'string') {
          throw Error(invalidArgument + v);
        }
        if (v.charCodeAt(0) === 45) {
          v = v.slice(1);
          x.s = -1;
        } else {
          x.s = 1;
        }
        return isDecimal.test(v) ? parseDecimal(x, v) : parseOther(x, v);
      }
      Decimal.prototype = P;
      Decimal.ROUND_UP = 0;
      Decimal.ROUND_DOWN = 1;
      Decimal.ROUND_CEIL = 2;
      Decimal.ROUND_FLOOR = 3;
      Decimal.ROUND_HALF_UP = 4;
      Decimal.ROUND_HALF_DOWN = 5;
      Decimal.ROUND_HALF_EVEN = 6;
      Decimal.ROUND_HALF_CEIL = 7;
      Decimal.ROUND_HALF_FLOOR = 8;
      Decimal.EUCLID = 9;
      Decimal.config = config;
      Decimal.clone = clone;
      Decimal.abs = abs;
      Decimal.acos = acos;
      Decimal.acosh = acosh;
      Decimal.add = add;
      Decimal.asin = asin;
      Decimal.asinh = asinh;
      Decimal.atan = atan;
      Decimal.atanh = atanh;
      Decimal.atan2 = atan2;
      Decimal.cbrt = cbrt;
      Decimal.ceil = ceil;
      Decimal.cos = cos;
      Decimal.cosh = cosh;
      Decimal.div = div;
      Decimal.exp = exp;
      Decimal.floor = floor;
      Decimal.fromJSON = fromJSON;
      Decimal.hypot = hypot;
      Decimal.ln = ln;
      Decimal.log = log;
      Decimal.log10 = log10;
      Decimal.log2 = log2;
      Decimal.max = max;
      Decimal.min = min;
      Decimal.mod = mod;
      Decimal.mul = mul;
      Decimal.pow = pow;
      Decimal.random = random;
      Decimal.round = round;
      Decimal.sign = sign;
      Decimal.sin = sin;
      Decimal.sinh = sinh;
      Decimal.sqrt = sqrt;
      Decimal.sub = sub;
      Decimal.tan = tan;
      Decimal.tanh = tanh;
      Decimal.trunc = trunc;
      if (obj === void 0)
        obj = {};
      if (obj) {
        ps = ['precision', 'rounding', 'toExpNeg', 'toExpPos', 'maxE', 'minE', 'modulo', 'crypto'];
        for (i = 0; i < ps.length; )
          if (!obj.hasOwnProperty(p = ps[i++]))
            obj[p] = this[p];
      }
      Decimal.config(obj);
      return Decimal;
    }
    function div(x, y) {
      return new this(x).div(y);
    }
    function exp(x) {
      return new this(x).exp();
    }
    function floor(x) {
      return finalise(x = new this(x), x.e + 1, 3);
    }
    function fromJSON(str) {
      var e,
          isNeg,
          k,
          n;
      if (typeof str !== 'string' || !str)
        throw Error(invalidArgument + str);
      k = str.length;
      n = NUMERALS.indexOf(str.charAt(0));
      if (k === 1) {
        return new this(n > 81 ? [-1 / 0, 1 / 0, 0 / 0][n - 82] : n > 40 ? -(n - 41) : n);
      } else if (n & 64) {
        isNeg = n & 16;
        e = isNeg ? (n & 7) - 3 : (n & 15) - 7;
        k = 1;
      } else if (k === 2) {
        n = n * 88 + NUMERALS.indexOf(str.charAt(1));
        return new this(n >= 2816 ? -(n - 2816) - 41 : n + 41);
      } else {
        isNeg = n & 32;
        if (n & 31) {
          e = n & 15;
          k = e + 1;
          if (e === 1) {
            e = NUMERALS.indexOf(str.charAt(1));
          } else if (e === 2) {
            e = NUMERALS.indexOf(str.charAt(1)) * 88 + NUMERALS.indexOf(str.charAt(2));
          } else {
            e = +convertBase(str.slice(1, k), 88, 10).join('');
          }
          if (n & 16)
            e = -e;
        } else {
          str = convertBase(str.slice(1), 88, 10).join('');
          return new this(isNeg ? '-' + str : str);
        }
      }
      str = convertBase(str.slice(k), 88, 10).join('');
      e = e - str.length + 1;
      str = str + 'e' + e;
      return new this(isNeg ? '-' + str : str);
    }
    function hypot() {
      var i,
          n,
          t = new this(0);
      external = false;
      for (i = 0; i < arguments.length; ) {
        n = new this(arguments[i++]);
        if (!n.d) {
          if (n.s) {
            external = true;
            return new this(1 / 0);
          }
          t = n;
        } else if (t.d) {
          t = t.plus(n.times(n));
        }
      }
      external = true;
      return t.sqrt();
    }
    function ln(x) {
      return new this(x).ln();
    }
    function log(x, y) {
      return new this(x).log(y);
    }
    function log2(x) {
      return new this(x).log(2);
    }
    function log10(x) {
      return new this(x).log(10);
    }
    function max() {
      return maxOrMin(this, arguments, 'lt');
    }
    function min() {
      return maxOrMin(this, arguments, 'gt');
    }
    function mod(x, y) {
      return new this(x).mod(y);
    }
    function mul(x, y) {
      return new this(x).mul(y);
    }
    function pow(x, y) {
      return new this(x).pow(y);
    }
    function random(sd) {
      var d,
          e,
          k,
          n,
          i = 0,
          r = new this(1),
          rd = [];
      if (sd === void 0)
        sd = this.precision;
      else
        checkInt32(sd, 1, MAX_DIGITS);
      k = Math.ceil(sd / LOG_BASE);
      if (this.crypto === false) {
        for (; i < k; )
          rd[i++] = Math.random() * 1e7 | 0;
      } else if (cryptoObject && cryptoObject.getRandomValues) {
        d = cryptoObject.getRandomValues(new Uint32Array(k));
        for (; i < k; ) {
          n = d[i];
          if (n >= 4.29e9) {
            d[i] = cryptoObject.getRandomValues(new Uint32Array(1))[0];
          } else {
            rd[i++] = n % 1e7;
          }
        }
      } else if (cryptoObject && cryptoObject.randomBytes) {
        d = cryptoObject.randomBytes(k *= 4);
        for (; i < k; ) {
          n = d[i] + (d[i + 1] << 8) + (d[i + 2] << 16) + ((d[i + 3] & 0x7f) << 24);
          if (n >= 2.14e9) {
            cryptoObject.randomBytes(4).copy(d, i);
          } else {
            rd.push(n % 1e7);
            i += 4;
          }
        }
        i = k / 4;
      } else if (this.crypto) {
        throw Error(decimalError + 'crypto unavailable');
      } else {
        for (; i < k; )
          rd[i++] = Math.random() * 1e7 | 0;
      }
      k = rd[--i];
      sd %= LOG_BASE;
      if (k && sd) {
        n = mathpow(10, LOG_BASE - sd);
        rd[i] = (k / n | 0) * n;
      }
      for (; rd[i] === 0; i--)
        rd.pop();
      if (i < 0) {
        e = 0;
        rd = [0];
      } else {
        e = -1;
        for (; rd[0] === 0; e -= LOG_BASE)
          rd.shift();
        for (k = 1, n = rd[0]; n >= 10; n /= 10)
          k++;
        if (k < LOG_BASE)
          e -= LOG_BASE - k;
      }
      r.e = e;
      r.d = rd;
      return r;
    }
    function round(x) {
      return finalise(x = new this(x), x.e + 1, this.rounding);
    }
    function sign(x) {
      x = new this(x);
      return x.d ? (x.d[0] ? x.s : 0 * x.s) : x.s || NaN;
    }
    function sin(x) {
      return new this(x).sin();
    }
    function sinh(x) {
      return new this(x).sinh();
    }
    function sqrt(x) {
      return new this(x).sqrt();
    }
    function sub(x, y) {
      return new this(x).sub(y);
    }
    function tan(x) {
      return new this(x).tan();
    }
    function tanh(x) {
      return new this(x).tanh();
    }
    function trunc(x) {
      return finalise(x = new this(x), x.e + 1, 1);
    }
    Decimal = clone(Decimal);
    LN10 = new Decimal(LN10);
    PI = new Decimal(PI);
    if (typeof define == 'function' && define.amd) {
      define(function() {
        return Decimal;
      });
    } else if (typeof module != 'undefined' && module.exports) {
      module.exports = Decimal;
      if (!cryptoObject) {
        try {
          cryptoObject = $__require('cry' + 'pto');
        } catch (e) {}
      }
    } else {
      if (!globalScope) {
        globalScope = typeof self != 'undefined' && self && self.self == self ? self : Function('return this')();
      }
      noConflict = globalScope.Decimal;
      Decimal.noConflict = function() {
        globalScope.Decimal = noConflict;
        return Decimal;
      };
      globalScope.Decimal = Decimal;
    }
  })(this);
  return module.exports;
});

$__System.register("1", ["28", "29", "a0", "a5", "a3", "a4", "a2"], function($__export) {
  "use strict";
  var React,
      lzString,
      ReactDOM,
      Decimal,
      gnuUnitsData,
      customData,
      queryString,
      TaggedString,
      DimensionMap,
      UnitNumber,
      SpecialUnitNumber,
      Dimension,
      TokenType,
      TokenTypeRegex,
      Associativity,
      operators,
      Tree,
      __awaiter,
      loadUnits,
      unitMap,
      prefixMap,
      canonicalMap,
      aliasMap,
      UnitNumberDisplay,
      GuiLineElement,
      GUILine,
      guiInst,
      presetLines,
      UnitCompleteInput,
      GUI;
  function* tokenize(str) {
    let i = 0;
    let it = 0;
    while (i < str.length) {
      it++;
      for (const [regex, type] of TokenTypeRegex) {
        const match = regex.exec(str.substr(i));
        if (match) {
          let str = match[0];
          yield {
            type,
            str,
            start: i
          };
          i += str.length;
          break;
        }
      }
      if (it > 1000)
        throw Error("wtf");
    }
  }
  function* preprocess(tokens) {
    let lastToken = null;
    for (const token of tokens) {
      if (token.type === TokenType.Whitespace)
        continue;
      if (lastToken)
        yield lastToken;
      if (lastToken && [TokenType.Identifier, TokenType.Number, TokenType.LParen].indexOf(token.type) >= 0 && [TokenType.Identifier, TokenType.Number, TokenType.RParen].indexOf(lastToken.type) >= 0)
        yield {
          type: TokenType.Operator,
          str: "",
          start: token.start
        };
      if (token.type === TokenType.Operator) {
        if (token.str === '*')
          token.str = '·';
        if (token.str === 'in')
          token.str = 'to';
        if (!lastToken || [TokenType.LParen, TokenType.Operator].indexOf(lastToken.type) >= 0) {
          if (token.str === '-')
            token.str = token.str.replace('-', '#');
          else if (token.str === '/')
            yield {
              type: TokenType.Number,
              str: '1',
              start: token.start
            };
          else
            throw Error("Unary " + token.str + " not allowed");
        }
      }
      lastToken = token;
    }
    if (lastToken)
      yield lastToken;
  }
  function operator(token) {
    const op = token.str.trim();
    const c = operators[op];
    if (!c)
      throw Error("unknown operator: '" + op + "'");
    return c;
  }
  function* toRPN(tokens) {
    const stack = [];
    function top(stack) {
      return stack[stack.length - 1];
    }
    ;
    for (const token of tokens) {
      switch (token.type) {
        case TokenType.Number:
        case TokenType.Identifier:
          yield token;
          break;
        case TokenType.Operator:
          const o1 = operator(token);
          let token2,
              o2;
          while ((token2 = top(stack)) && token2.type === TokenType.Operator && (o2 = operator(token2)) && (((o1.associativity == Associativity.left || o1.associativity == Associativity.both) && o1.precedence >= o2.precedence) || (o1.associativity == Associativity.right && o1.precedence > o2.precedence))) {
            yield stack.pop();
          }
          stack.push(token);
          break;
        case TokenType.LParen:
          stack.push(token);
          break;
        case TokenType.RParen:
          while (top(stack) && top(stack).type !== TokenType.LParen)
            yield stack.pop();
          if (stack.length === 0)
            throw Error(token.start + ": missing opening paren");
          stack.pop();
          break;
        default:
          throw Error('what is ' + token);
      }
    }
    while (stack.length > 0) {
      if (top(stack).type === TokenType.Operator)
        yield stack.pop();
      else
        throw Error(top(stack).start + ":missing closing parens");
    }
  }
  function parse(str) {
    return Tree.rpnToTree(toRPN(preprocess(tokenize(str))));
  }
  function isEvaluated(node) {
    return !!node.value;
  }
  function addFunctions(...fns) {
    for (const [name, fn] of fns) {
      const builtin = new Tree.IdentifierNode("[builtin]");
      builtin.value = new SpecialUnitNumber(new Tree.NumberNode("[built in]"), fn, null, null);
      evaluate(new Tree.InfixFunctionCallNode("=", [new Tree.IdentifierNode(name), builtin]), [unitMap]);
    }
  }
  function getFunction({name,
    throwOnError = true}) {
    const memberAliases = {
      '·': 'mul',
      '': 'mul',
      '/': 'div',
      '|': 'div',
      '^': 'pow',
      '+': 'plus',
      '-': 'minus',
      'to': 'convertTo'
    };
    const yes = new UnitNumber(1);
    const no = new UnitNumber(0);
    const staticAliases = {
      '>': (a, b) => (a.dimensions.assertEqual(b.dimensions), a.value.greaterThan(b.value) ? yes : no),
      '<': (a, b) => (a.dimensions.assertEqual(b.dimensions), a.value.lessThan(b.value) ? yes : no),
      '>=': (a, b) => (a.dimensions.assertEqual(b.dimensions), a.value.greaterThanOrEqualTo(b.value) ? yes : no),
      '<=': (a, b) => (a.dimensions.assertEqual(b.dimensions), a.value.lessThanOrEqualTo(b.value) ? yes : no),
      '==': (a, b) => (a.value.equals(b.value) && a.dimensions.equals(b.dimensions) ? yes : no),
      '!=': (a, b) => (a.dimensions.assertEqual(b.dimensions), a.value.equals(b.value) ? no : yes)
    };
    if (name === '#')
      return (l) => l.mul(new UnitNumber(-1));
    else if (name in memberAliases) {
      return (l, r) => l[memberAliases[name]](r);
    } else if (name in staticAliases)
      return staticAliases[name];
    else if (throwOnError)
      throw Error("unknown function: " + name);
    else
      return null;
  }
  function setUnit(name, val) {
    if (unitMap.has(name))
      throw Error(`Unit ${name} already exists.\nUse delete(${name}) to remove it.`);
    unitMap.set(name, val);
  }
  function setUnitOrPrefix(name, node, unit) {
    node.value = unit.value.withIdentifier(name);
    if (name.endsWith("_")) {
      const prefixName = name.substr(0, name.length - 1);
      prefixMap.set(prefixName, node);
    } else {
      setUnit(name, node);
    }
    unifyAliases(node, unit);
  }
  function unifyAliases(unit1, unit2) {
    const can1 = getCanonical(unit1.value),
        can2 = getCanonical(unit2.value);
    if (!can1 && !can2) {
      const canonical = unit2.value.isSpecial() || unit2.value.dimensions.size > 0 ? unit2.value : unit1.value;
      canonicalMap.set(unit1.value, canonical);
      canonicalMap.set(unit2.value, canonical);
      aliasMap.set(canonical, new Set([unit1, unit2]));
      return;
    }
    if (!can2) {
      canonicalMap.set(unit2.value, can1);
      aliasMap.get(can1).add(unit2);
      return;
    }
    if (!can1) {
      canonicalMap.set(unit1.value, can2);
      aliasMap.get(can2).add(unit1);
      return;
    }
    throw Error("unity error, can. form ex. for both " + unit1 + " and " + unit2 + ":" + can1 + " and " + can2);
  }
  function getCanonical(u) {
    while (true) {
      let u2 = canonicalMap.get(u);
      if (!u2)
        return u2;
      if (u2 === u)
        return u;
      u = u2;
    }
  }
  function getAliases(u) {
    return [...(aliasMap.get(getCanonical(u)) || [])].filter((x) => !!x.value.id);
  }
  function getPrefix(name) {
    let res = prefixMap.get(name);
    if (!res)
      throw Error("unknown prefix: " + name);
    if (!isEvaluated(res)) {
      prefixMap.delete(name);
      return evaluate(res, [unitMap]);
    } else
      return res;
  }
  function getUnit(name, scope = [unitMap], {withPrefix = true,
    withPluralSuffix = true,
    throwOnError = true} = {}) {
    if (name.endsWith("_"))
      return getPrefix(name.substr(0, name.length - 1));
    const foundScope = scope.find((map) => map.has(name));
    if (!foundScope) {
      if (withPrefix)
        for (const prefix of prefixMap.keys()) {
          if (name.startsWith(prefix)) {
            let unit = getPrefix(prefix);
            if (prefix.length < name.length) {
              const suffix = getUnit(name.substr(prefix.length), scope, {
                withPrefix: false,
                throwOnError: false
              });
              if (suffix === null)
                continue;
              const unitValue = evaluate(new Tree.InfixFunctionCallNode("·", [unit, suffix]), scope);
              if (unitValue.value.isSpecial())
                continue;
              unit = new Tree.InfixFunctionCallNode("=", [new Tree.IdentifierNode(name), unitValue]);
              unit.value = unitValue.value.withIdentifier(name);
            }
            return unit;
          }
        }
      if (withPluralSuffix && name[name.length - 1] === 's')
        return getUnit(name.substr(0, name.length - 1), scope, {
          withPrefix,
          withPluralSuffix: false,
          throwOnError
        });
      if (throwOnError)
        throw Error("unknown unit: " + name);
      else
        return null;
    }
    let res = foundScope.get(name);
    if (!isEvaluated(res)) {
      foundScope.delete(name);
      return evaluate(res, scope);
    } else
      return res;
  }
  function stripCommentsTrim(str) {
    const commentStart = str.indexOf("#");
    if (commentStart >= 0)
      str = str.substr(0, commentStart);
    return str.trim();
  }
  function parseEvaluate(str) {
    return evaluate(parse(stripCommentsTrim(str)), [unitMap]);
  }
  function evaluate(node, scope) {
    if (isEvaluated(node))
      return node;
    const evNode = node;
    if (node instanceof Tree.NumberNode) {
      evNode.value = new UnitNumber(node.number);
    } else if (node instanceof Tree.IdentifierNode) {
      evNode.value = getUnit(node.identifier, scope).value;
      if (!evNode.value)
        throw Error("can't resolve " + node.identifier);
    } else if (node instanceof Tree.FunctionCallNode) {
      const op = node.fnname;
      if (op === '!') {
        const name = node.operands[0];
        if (name instanceof Tree.IdentifierNode) {
          evNode.value = UnitNumber.createBaseUnit(name.identifier);
          setUnit(name.identifier, evNode);
        } else
          throw Error("invalid definition");
      } else if (op === '=' || op === '≈') {
        const [name, val] = node.operands;
        if (name instanceof Tree.IdentifierNode)
          setUnitOrPrefix(name.identifier, evNode, evaluate(val, scope));
        else {
          const leftVal = evaluate(name, scope);
          if (leftVal.value.id)
            leftVal.value.assign(evaluate(val, scope).value);
          else
            throw Error("invalid left hand side of assignment");
          evNode.value = leftVal.value;
        }
      } else if (op === '=>') {
        const [argNameNode, val] = node.operands;
        if (argNameNode instanceof Tree.IdentifierNode) {
          const argName = argNameNode.identifier;
          evNode.value = new SpecialUnitNumber(val, (arg) => {
            const argval = new Tree.IdentifierNode(argName);
            argval.value = arg;
            const newScope = new Map();
            newScope.set(argName, argval);
            return evaluate(val.clone(), [newScope, ...scope]).value;
          }, undefined, undefined);
        } else
          throw Error('invalid lambda definition');
      } else if (op === '||' || op === '&&') {
        const [a, b] = node.operands;
        const aEv = evaluate(a, scope).value;
        if (op === '||')
          evNode.value = aEv.value.isZero() ? evaluate(b, scope).value : aEv;
        else if (op === '&&')
          evNode.value = !aEv.value.isZero() ? evaluate(b, scope).value : aEv;
      } else
        evNode.value = getFunction({name: op})(...node.operands.map((x) => evaluate(x, scope)).map((x) => x.value));
    } else
      throw Error("what is " + node);
    return evNode;
  }
  function define(unit) {
    if (unit instanceof Tree.IdentifierNode)
      unit = getUnit(unit.value.id);
    const t = TaggedString.t;
    const canonical = getCanonical(unit.value);
    const aliases = getAliases(unit.value);
    unit = [...aliases, unit].find((alternative) => alternative.value.id === unit.value.id);
    const inverse = unit.value instanceof SpecialUnitNumber && unit.value.inverse.fnTree;
    return (t `Definition: ${unit.toTaggedString()}.
${inverse ? t `Inverse:    ${inverse.toTaggedString()}` : ""}
${canonical ? canonical == unit.value ? "(Canonical form)" : t `Canonical Form: ${canonical.toTaggedString()}` : ""}

${aliases && aliases.length > 0 ? TaggedString.t `Aliases: ${TaggedString.join(aliases.map((a) => a.value), ", ")}` : ""}`);
  }
  function unitConvertedTaggedString(node) {
    if (node instanceof Tree.FunctionCallNode && node.fnname === 'to') {
      const unit = evaluate(node.operands[1], [unitMap]);
      const numericValue = evaluate(node.operands[0], [unitMap]).value.div(unit.value);
      return TaggedString.t `${numericValue.toString()} ${unit.toTaggedString()}`;
    } else
      return evaluate(node, [unitMap]).value.toTaggedString();
  }
  function qalculate(input) {
    return __awaiter(this, void 0, void 0, function*() {
      if (input.trim().length === 0)
        return new TaggedString();
      const ret = parseEvaluate(input);
      if (ret.value.id)
        return define(ret);
      return TaggedString.t `${ret.toTaggedString()} = ${unitConvertedTaggedString(ret)}`;
    });
  }
  function loadPresetLines() {
    let presets = presetLines;
    let {state} = queryString.parse(location.hash);
    if (state)
      presets = JSON.parse(lzString.decompressFromEncodedURIComponent(state));
    presets.map((input) => qalculate(input).then((output) => guiInst.addLine(new GuiLineElement(input, output))).catch((error) => guiInst.addLine(new GuiLineElement(input, new TaggedString("" + error)))));
  }
  return {
    setters: [function($__m) {
      React = $__m;
    }, function($__m) {
      lzString = $__m.default;
    }, function($__m) {
      ReactDOM = $__m;
    }, function($__m) {
      Decimal = $__m.default;
    }, function($__m) {
      gnuUnitsData = $__m.default;
    }, function($__m) {
      customData = $__m.default;
    }, function($__m) {
      queryString = $__m.default;
    }],
    execute: function() {
      TaggedString = class TaggedString {
        constructor(...vals) {
          this.vals = vals;
        }
        append(t) {
          if (t instanceof TaggedString)
            this.vals.push(...t.vals);
          else
            this.vals.push(t);
          return this;
        }
        toString() {
          return this.vals.join("");
        }
        flatten() {
          for (let i = 0; i < this.vals.length; i++) {
            const v = this.vals[i];
            if (v instanceof TaggedString) {
              v.flatten();
              this.vals.splice(i, 1, ...this.vals[i].vals);
            }
          }
        }
        static t(literals, ...placeholders) {
          let result = [];
          for (let i = 0; i < placeholders.length; i++) {
            if (literals[i].length > 0)
              result.push(literals[i]);
            result.push(placeholders[i]);
          }
          const last = literals[literals.length - 1];
          if (last.length > 0)
            result.push(last);
          return new TaggedString(...result);
        }
        static join(str, joinEle) {
          if (str.length === 0)
            return new TaggedString();
          const out = [str[0]];
          for (let i = 1; i < str.length; i++) {
            out.push(joinEle, str[i]);
          }
          return new TaggedString(...out);
        }
      };
      DimensionMap = class DimensionMap extends Map {
        static toUnicodePow(x) {
          if (x === 1)
            return "";
          return x.toString().split("").map((x) => DimensionMap.unicodePow[+x]).join("");
        }
        static listToUnicodePow(entries) {
          return TaggedString.join(entries.map(([id, exp]) => TaggedString.t `${Dimension.get(id).baseUnit}${DimensionMap.toUnicodePow(exp)}`), " ");
        }
        toString() {
          return this.toTaggedString() + "";
        }
        toTaggedString() {
          const {pos,
            neg} = this.splitPosNeg();
          let str = DimensionMap.listToUnicodePow(pos);
          if (neg.length > 0) {
            str.vals.push(" / ");
            str.append(DimensionMap.listToUnicodePow(neg));
          }
          return str;
        }
        splitPosNeg() {
          const pos = [...this].filter(([id, exp]) => exp > 0);
          const neg = [...this].filter(([id, exp]) => exp < 0);
          neg.forEach((x) => x[1] *= -1);
          return {
            pos,
            neg
          };
        }
        static join(...list) {
          const map = new DimensionMap();
          for (const {dimensions,
            factor} of list) {
            for (const [dimension, exponent] of dimensions) {
              const newFactor = (map.get(dimension) || 0) + exponent * factor;
              if (newFactor === 0)
                map.delete(dimension);
              else
                map.set(dimension, newFactor);
            }
          }
          return map;
        }
        assertEmpty(str = "") {
          if (this.size > 0)
            throw Error(str + " must be dimensionless");
        }
        equals(d) {
          const diff = DimensionMap.join({
            dimensions: this,
            factor: 1
          }, {
            dimensions: d,
            factor: -1
          });
          return diff.size === 0;
        }
        assertEqual(d) {
          if (!this.equals(d))
            throw Error("dimensions must be the same");
        }
        toMismatchString() {
          const {pos: tooMuch,
            neg: notEnough} = this.splitPosNeg();
          if (tooMuch.length === 0)
            return "missing " + new DimensionMap(notEnough);
          if (notEnough.length === 0)
            return "don't want " + new DimensionMap(tooMuch);
          return `have ${new DimensionMap(tooMuch)}, want ${new DimensionMap(notEnough)}`;
        }
      };
      DimensionMap.unicodePow = '⁰¹²³⁴⁵⁶⁷⁸⁹';
      UnitNumber = class UnitNumber {
        constructor(value, dimensions = new DimensionMap(), id = undefined) {
          if (value !== null)
            this.value = Decimal(value);
          if (dimensions !== null)
            this.dimensions = dimensions;
          this.id = id;
        }
        mul(other) {
          if (other.isSpecial())
            return other.mul(this, true);
          return new UnitNumber(this.value.times(other.value), DimensionMap.join({
            dimensions: this.dimensions,
            factor: 1
          }, {
            dimensions: other.dimensions,
            factor: 1
          }));
        }
        div(other) {
          if (other.isSpecial())
            return other.div(this, true);
          let name = undefined;
          if (this.dimensions.size == 0 && other.dimensions.size == 0)
            name = this.value.toString() + "|" + other.value.toString();
          return new UnitNumber(this.value.div(other.value), DimensionMap.join({
            dimensions: this.dimensions,
            factor: 1
          }, {
            dimensions: other.dimensions,
            factor: -1
          }), name);
        }
        plus(other, factor = 1) {
          if (other.isSpecial())
            return other.plus(this, factor, true);
          const dimensionDifference = this.div(other).dimensions;
          if (dimensionDifference.size > 0)
            throw Error("Dimensions don't match: " + dimensionDifference.toMismatchString());
          return new UnitNumber(this.value.plus(other.value.times(factor)), this.dimensions);
        }
        minus(other) {
          return this.plus(other, -1);
        }
        withIdentifier(id) {
          return new UnitNumber(this.value, this.dimensions, id);
        }
        isSpecial() {
          return false;
        }
        assign(unit) {
          throw Error("Can't assign value to " + this);
        }
        toString() {
          if (this.id)
            return this.id;
          else
            return this.toTaggedString().toString();
        }
        toTaggedString() {
          if (this.id)
            return new TaggedString(this);
          else {
            if (this.value.equals(1) && this.dimensions.size == 0)
              return new TaggedString("1");
            const v = this.value.equals(1) ? "" : this.value.toPrecision(10);
            return TaggedString.t `${v}${v && this.dimensions.size > 0 ? " " : ""}${this.dimensions.toTaggedString()}`;
          }
        }
        pow(factor) {
          if (typeof factor === 'number' || factor instanceof Decimal)
            return new UnitNumber(this.value.pow(factor), DimensionMap.join({
              dimensions: this.dimensions,
              factor: typeof factor === 'number' ? factor : factor.toNumber()
            }));
          else if (factor.isSpecial())
            return factor.pow(this, true);
          else if (factor.dimensions.size > 0)
            throw Error("power must be dimensionless");
          else
            return this.pow(factor.value);
        }
        convertTo(unit) {
          const d = this.div(unit);
          if (d.dimensions.size > 0)
            throw Error("Dimensions don't match: " + d.dimensions.toMismatchString());
          return d.mul(unit);
        }
        static createBaseUnit(dimensionName) {
          return new Dimension(dimensionName).baseUnit;
        }
      };
      SpecialUnitNumber = class SpecialUnitNumber extends UnitNumber {
        constructor(fnTree, fn, inverse, id, inverseFnTree = null, inverseFn = null) {
          super(null, null, id);
          this.fnTree = fnTree;
          this.fn = fn;
          this.inverse = inverse || new SpecialUnitNumber(inverseFnTree, inverseFn, this, id + "^-1");
        }
        get value() {
          throw Error("can't get function.value");
        }
        get dimensions() {
          throw Error("can't get function.dimensions");
        }
        withIdentifier(id, alsoInverseId = true) {
          return new SpecialUnitNumber(this.fnTree, this.fn, null, id, this.inverse.fnTree, this.inverse.fn);
        }
        mul(other, reversed = false) {
          if (this.fn)
            return this.fn(other);
          throw Error(`function not defined: ${this}`);
        }
        div(other, reversed = false) {
          if (reversed)
            return this.inverse.mul(other);
          else
            throw Error(`can't divide function ${this} with ${other}`);
        }
        plus(other, factor = 1, reversed = false) {
          throw Error(`can't add ${this} and ${other}`);
        }
        pow(other, reversed = false) {
          other.dimensions.assertEmpty();
          if (other.value.equals(-1))
            return this.inverse;
          throw Error(`can't pow ${this} with ${other}`);
        }
        assign(other) {
          if (other.isSpecial()) {
            this.fn = other.fn;
            this.fnTree = other.fnTree;
          } else
            throw Error("can't assign non-function to function");
        }
        isSpecial() {
          return true;
        }
        toString() {
          if (this.id)
            return this.id;
          else
            return this.toTaggedString().toString();
        }
        toTaggedString() {
          if (this.id)
            return new TaggedString(this);
          else
            return this.fnTree.toTaggedString();
        }
      };
      Dimension = class Dimension {
        constructor(name) {
          this.id = Dimension.dimensions.size;
          this.name = name;
          Dimension.dimensions.set(this.id, this);
          this.baseUnit = new UnitNumber(1, new DimensionMap([[this.id, 1]]), this.name);
        }
        static get(id) {
          return Dimension.dimensions.get(id);
        }
      };
      Dimension.dimensions = new Map();
      (function(TokenType) {
        TokenType[TokenType["Identifier"] = 0] = "Identifier";
        TokenType[TokenType["Number"] = 1] = "Number";
        TokenType[TokenType["LParen"] = 2] = "LParen";
        TokenType[TokenType["RParen"] = 3] = "RParen";
        TokenType[TokenType["Operator"] = 4] = "Operator";
        TokenType[TokenType["Whitespace"] = 5] = "Whitespace";
        TokenType[TokenType["Unknown"] = 6] = "Unknown";
      })(TokenType || (TokenType = {}));
      TokenTypeRegex = [[/^\s+/, TokenType.Whitespace], [/^\(/, TokenType.LParen], [/^\)/, TokenType.RParen], [/^(=>|<=|>=|\|\||&&|==|!=|[ =≈+*/^|·!<>-]|to )/, TokenType.Operator], [/^[-+]?(([0-9]*\.?[0-9]+([eE][-+]?[0-9]+)?)|NaN|Infinity)/, TokenType.Number], [/^[^() =<>≈+*/^&|·!>-]+/i, TokenType.Identifier], [/^./, TokenType.Unknown]];
      ;
      (function(Associativity) {
        Associativity[Associativity["left"] = 0] = "left";
        Associativity[Associativity["right"] = 1] = "right";
        Associativity[Associativity["both"] = 2] = "both";
      })(Associativity || (Associativity = {}));
      ;
      operators = {
        '!': {
          precedence: 0.5,
          associativity: Associativity.left,
          arity: 1
        },
        '#': {
          precedence: 0.5,
          associativity: Associativity.right,
          arity: 1,
          displayString: '-'
        },
        '^': {
          precedence: 1,
          associativity: Associativity.right,
          arity: 2
        },
        '|': {
          precedence: 1.5,
          associativity: Associativity.left,
          arity: 2
        },
        '': {
          precedence: 1.8,
          associativity: Associativity.left,
          arity: 2
        },
        '·': {
          precedence: 2,
          associativity: Associativity.both,
          arity: 2
        },
        '/': {
          precedence: 2,
          associativity: Associativity.left,
          arity: 2
        },
        '+': {
          precedence: 4,
          associativity: Associativity.both,
          arity: 2
        },
        '-': {
          precedence: 4,
          associativity: Associativity.left,
          arity: 2
        },
        '<': {
          precedence: 5,
          associativity: Associativity.left,
          arity: 2
        },
        '<=': {
          precedence: 5,
          associativity: Associativity.left,
          arity: 2
        },
        '>': {
          precedence: 5,
          associativity: Associativity.left,
          arity: 2
        },
        '>=': {
          precedence: 5,
          associativity: Associativity.left,
          arity: 2
        },
        '==': {
          precedence: 6,
          associativity: Associativity.left,
          arity: 2
        },
        '!=': {
          precedence: 6,
          associativity: Associativity.left,
          arity: 2
        },
        '&&': {
          precedence: 7.3,
          associativity: Associativity.left,
          arity: 2
        },
        '||': {
          precedence: 7.4,
          associativity: Associativity.left,
          arity: 2
        },
        '=>': {
          precedence: 8,
          associativity: Associativity.right,
          arity: 2
        },
        '=': {
          precedence: 10,
          associativity: Associativity.right,
          arity: 2
        },
        '≈': {
          precedence: 10,
          associativity: Associativity.right,
          arity: 2
        },
        'to': {
          precedence: 12,
          associativity: Associativity.left,
          arity: 2
        }
      };
      (function(Tree) {
        class NumberNode {
          constructor(number) {
            this.number = number;
          }
          toTaggedString(parentPrecedence = Infinity) {
            return new TaggedString(this.number);
          }
          clone() {
            return new NumberNode(this.number);
          }
        }
        Tree.NumberNode = NumberNode;
        class IdentifierNode {
          constructor(identifier) {
            this.identifier = identifier;
          }
          toTaggedString(parentPrecedence = Infinity) {
            if (isEvaluated(this))
              return this.value.toTaggedString();
            return new TaggedString(this.identifier);
          }
          clone() {
            return new IdentifierNode(this.identifier);
          }
        }
        Tree.IdentifierNode = IdentifierNode;
        class FunctionCallNode {
          constructor(fnname, operands) {
            this.fnname = fnname;
            this.operands = operands;
          }
          toTaggedString(parentPrecedence = Infinity) {
            return TaggedString.t `${this.fnname}(${TaggedString.join(this.operands.map((x) => x.toTaggedString(parentPrecedence)), ", ")})`;
          }
          clone() {
            return new FunctionCallNode(this.fnname, this.operands.map((x) => x.clone()));
          }
        }
        Tree.FunctionCallNode = FunctionCallNode;
        class InfixFunctionCallNode extends FunctionCallNode {
          toTaggedString(parentPrecedence = Infinity) {
            const op = operators[this.fnname];
            const disp = op.displayString || this.fnname;
            const leftAdd = op.associativity === Associativity.right ? -0.01 : 0;
            const rightAdd = op.associativity === Associativity.left ? -0.01 : 0;
            let result;
            if (this.operands.length === 1)
              result = TaggedString.t `${leftAdd ? disp : ""}${this.operands[0].toTaggedString(op.precedence + leftAdd + rightAdd)}${rightAdd ? disp : ""}`;
            else if (this.operands.length === 2)
              result = TaggedString.t `${this.operands[0].toTaggedString(op.precedence + leftAdd)} `.append(disp === "" ? "" : disp + " ").append(this.operands[1].toTaggedString(op.precedence + rightAdd));
            else
              throw Error("invalid operand count");
            if (parentPrecedence < op.precedence)
              return TaggedString.t `(${result})`;
            else
              return result;
          }
        }
        Tree.InfixFunctionCallNode = InfixFunctionCallNode;
        function rpnToTree(tokens) {
          const stack = [];
          for (const token of tokens) {
            if (token.type === TokenType.Operator) {
              const op = operators[token.str.trim()];
              if (stack.length < op.arity)
                throw Error(`Operator '${token.str.trim()}' needs ${op.arity} arguments, only got ${stack.length}`);
              const args = stack.splice(stack.length - op.arity);
              stack.push(new InfixFunctionCallNode(token.str.trim(), args));
            } else if (token.type === TokenType.Identifier) {
              stack.push(new IdentifierNode(token.str));
            } else if (token.type === TokenType.Number) {
              stack.push(new NumberNode(token.str));
            } else
              throw Error("to tree: don't know token type " + token.type);
          }
          if (stack.length !== 1)
            throw Error("stack error " + stack);
          return stack[0];
        }
        Tree.rpnToTree = rpnToTree;
      })(Tree || (Tree = {}));
      __awaiter = (this && this.__awaiter) || function(thisArg, _arguments, P, generator) {
        return new (P || (P = Promise))(function(resolve, reject) {
          function fulfilled(value) {
            try {
              step(generator.next(value));
            } catch (e) {
              reject(e);
            }
          }
          function rejected(value) {
            try {
              step(generator.throw(value));
            } catch (e) {
              reject(e);
            }
          }
          function step(result) {
            result.done ? resolve(result.value) : new P(function(resolve) {
              resolve(result.value);
            }).then(fulfilled, rejected);
          }
          step((generator = generator.apply(thisArg, _arguments)).next());
        });
      };
      loadUnits = (filename, data) => {
        const lines = data.split("\n");
        const postEvaluate = [];
        for (let i = 0; i < lines.length; i++) {
          try {
            const line = stripCommentsTrim(lines[i]);
            if (line.length === 0)
              continue;
            if (line.indexOf("=") >= 0 && line.split("=")[0].search(/[\(\[]/) >= 0)
              continue;
            const tree = parse(line);
            if (tree instanceof Tree.FunctionCallNode && tree.fnname === '=') {
              const nameNode = tree.operands[0];
              const name = nameNode instanceof Tree.IdentifierNode && nameNode.identifier;
              if (!name) {
                postEvaluate.push({evaluateNode: tree});
                continue;
              }
              if (name.endsWith("_")) {
                const prefixName = name.substr(0, name.length - 1);
                prefixMap.set(prefixName, tree);
              } else {
                unitMap.set(name, tree);
              }
              postEvaluate.push({reevaluateUnit: name});
            } else
              postEvaluate.push({evaluateNode: tree});
          } catch (e) {
            console.error(filename + ":" + (i + 1), lines[i], e);
          }
        }
        for (const {reevaluateUnit,
          evaluateNode} of postEvaluate) {
          try {
            if (reevaluateUnit)
              getUnit(reevaluateUnit, [unitMap]);
            if (evaluateNode)
              evaluate(evaluateNode, [unitMap]);
          } catch (e) {
            console.error("force-evaluate unit", reevaluateUnit || evaluateNode, e);
          }
        }
      };
      unitMap = new Map();
      prefixMap = new Map();
      canonicalMap = new Map();
      aliasMap = new Map();
      addFunctions(["sqrt", (num) => num.pow(0.5)], ["ln", (num) => {
        num.dimensions.assertEmpty("argument of ln()");
        return new UnitNumber(num.value.ln());
      }], ["delete", (num) => {
        return unitMap.delete(num.id) ? new UnitNumber(1) : new UnitNumber(0);
      }], ["log2", (num) => (num.dimensions.assertEmpty(), new UnitNumber(num.value.logarithm(2)))], ["exp", (num) => (num.dimensions.assertEmpty(), new UnitNumber(num.value.exp()))], ["tan", (num) => (num.dimensions.assertEmpty(), new UnitNumber(Math.tan(num.value.toNumber())))], ["log", (num) => (num.dimensions.assertEmpty(), new UnitNumber(num.value.logarithm(10)))]);
      loadUnits("units_data.txt", gnuUnitsData);
      loadUnits("custom_data.txt", customData);
      UnitNumberDisplay = class UnitNumberDisplay extends React.Component {
        constructor(props) {
          super(props);
        }
        taggedStringToHtml(str) {
          return str.vals.map((x, i) => {
            if (typeof x === 'string')
              return React.createElement("span", {key: i}, x);
            else if (x instanceof UnitNumber)
              return React.createElement("a", {
                key: i,
                href: "#",
                onClick: (e) => {
                  this.props.onClickUnit(x);
                  e.preventDefault();
                }
              }, x.toString());
            else if (x instanceof TaggedString)
              return this.taggedStringToHtml(x);
          });
        }
        render() {
          return React.createElement("pre", {style: {whiteSpace: "pre-wrap"}}, this.taggedStringToHtml(this.props.text));
        }
      };
      GuiLineElement = class GuiLineElement {
        constructor(input, output) {
          this.input = input;
          this.output = output;
          this.id = GuiLineElement.idCounter++;
        }
      };
      GuiLineElement.idCounter = 0;
      GUILine = class GUILine extends React.Component {
        constructor(props) {
          super(props);
          this.state = {displayDepth: 0};
        }
        render() {
          const [inp, comment] = this.props.line.input.split("#");
          return React.createElement("div", {className: "gui-line"}, comment ? React.createElement("h4", null, comment) : "", React.createElement("button", {
            className: "btn pull-right close",
            onClick: () => this.props.onClickRemove()
          }, "×"), React.createElement("p", {
            style: {cursor: "pointer"},
            onClick: () => this.props.onClickInput(this.props.line)
          }, "> ", inp), React.createElement(UnitNumberDisplay, {
            text: this.props.line.output,
            onClickUnit: this.props.onClickUnit
          }), React.createElement("hr", null));
        }
      };
      presetLines = `
sqrt(2 * (6 million tons * uranium_natural) / (100000 pounds + 0.7% * 6 million tons)) to c  # speed a rocket could get with all the uranium on earth (E=1/2 mv^2)
1 kg charcoal to liter gasoline
solarluminosity / spheresurface(astronomicalunit) to kW/m^2 # maximum amount of energy a square meter on earth can get from the sun
5600 mAh * 11.7 V to Wh
100W * 10 days * 0.25€/kWh to €
7Mbit/s * 2h to Gbyte
32bit/(0.2bit/s) to s
88 mph to km/h|88 * mph = 0.03933952(km / s)
100°F to °C
`.split("\n").map((line) => line.trim()).filter((line) => line.length > 0).map((line) => line.split("|")[0]);
      UnitCompleteInput = class UnitCompleteInput extends React.Component {
        constructor(props) {
          super(props);
          this.state = {};
        }
        setUnit(unit) {
          const val = this.props.value.split(" ");
          val.pop();
          val.push(unit, "");
          this.refs["inp"].value = val.join(" ");
          this.props.onChange({target: this.refs["inp"]});
        }
        render() {
          const tokens = this.props.value.split(" ");
          const last = tokens.pop();
          const poss = [];
          if (tokens.pop() === "to") {
            try {
              const val = parseEvaluate(tokens.join(" ")).value;
              for (const name of unitMap.keys()) {
                const unit = getUnit(name).value;
                if (!unit.isSpecial() && unit.dimensions.equals(val.dimensions))
                  poss.push(name);
              }
            } catch (e) {
              console.log(e);
            }
          }
          if (/[a-z]/i.test(last)) {
            const units = poss.length > 0 ? poss.splice(0) : unitMap.keys();
            for (const unitName of units) {
              if (unitName.indexOf(last) >= 0)
                poss.push(unitName);
              if (poss.length > 30)
                break;
            }
          }
          return React.createElement("div", {className: "dropdown"}, React.createElement("input", React.__spread({}, this.props, {
            ref: "inp",
            autoCorrect: "off",
            autoComplete: "off",
            autoCapitalize: "none",
            className: "form-control",
            placeholder: "enter formula"
          })), poss.length > 0 ? React.createElement("ul", {
            className: "dropdown-menu",
            style: {
              display: "block",
              maxHeight: "200px",
              overflowX: "hidden"
            }
          }, poss.map((unit) => React.createElement("li", {key: unit}, React.createElement("a", {
            href: "#",
            onClick: () => this.setUnit(unit)
          }, unit)))) : "");
        }
      };
      GUI = class GUI extends React.Component {
        constructor(props) {
          super(props);
          guiInst = this;
          this.state = {
            lines: [],
            currentInput: "",
            currentOutput: new TaggedString()
          };
          loadPresetLines();
        }
        addLine(line) {
          const lines = this.state.lines.slice();
          lines.unshift(line);
          this.setState({lines});
        }
        removeLine(index) {
          const lines = this.state.lines.slice();
          lines.splice(index, 1);
          this.setState({lines: lines});
        }
        onSubmit(evt) {
          evt.preventDefault();
          const input = this.state.currentInput;
          if (input.trim().length > 0)
            qalculate(input).then((output) => this.addLine(new GuiLineElement(input, output))).catch((reason) => this.addLine(new GuiLineElement(input, new TaggedString("" + reason))));
          this.setState({
            currentInput: "",
            currentOutput: new TaggedString()
          });
        }
        setInput(input) {
          this.setState({currentInput: input});
          if (/[=≈]/.test(input))
            this.setState({currentOutput: new TaggedString("press enter to execute")});
          else
            qalculate(input).then((output) => this.setState({currentOutput: output})).catch((reason) => this.setState({currentOutput: new TaggedString("" + reason)}));
        }
        onChange(evt) {
          const target = evt.target;
          this.setInput(target.value);
        }
        showUnit(unit) {
          console.log("showing", unit);
          this.setInput(unit.toString());
        }
        render() {
          return (React.createElement("div", {className: "container"}, React.createElement("div", {className: "page-header"}, React.createElement("h1", null, "Qalc")), React.createElement("div", {className: "gui-line"}, React.createElement("form", {
            className: "form",
            onSubmit: this.onSubmit.bind(this)
          }, React.createElement(UnitCompleteInput, {
            onChange: this.onChange.bind(this),
            value: this.state.currentInput
          })), this.state.currentOutput.vals.length > 0 ? React.createElement(UnitNumberDisplay, {
            text: this.state.currentOutput,
            onClickUnit: (unit) => this.showUnit(unit)
          }) : "", React.createElement("hr", null)), this.state.lines.map((line, i) => React.createElement(GUILine, {
            key: line.id,
            line: line,
            onClickInput: () => this.setInput(line.input),
            onClickUnit: (unit) => this.showUnit(unit),
            onClickRemove: () => this.removeLine(i)
          })), React.createElement("footer", null, React.createElement("small", null, React.createElement("a", {
            href: "#",
            onClick: (e) => {
              e.preventDefault();
              this.exportToUrl();
            }
          }, "Export to URL"), " | ", React.createElement("a", {href: "https://github.com/phiresky/qalc-react"}, "Source code on GitHub")))));
        }
        componentDidUpdate(prevProps, prevState) {
          if (prevState.lines !== this.state.lines) {
            history.replaceState({}, "", window.location.pathname + window.location.search);
          }
        }
        exportToUrl() {
          history.replaceState({}, "", "#" + queryString.stringify({state: this.serialize()}));
        }
        serialize() {
          return lzString.compressToEncodedURIComponent(JSON.stringify(this.state.lines.map((line) => line.input)));
        }
      };
      ReactDOM.render(React.createElement(GUI, null), document.getElementById("root"));
      $__export("GUILine", GUILine), $__export("GUI", GUI);
    }
  };
});

})
(function(factory) {
  if (typeof define == 'function' && define.amd)
    define([], factory);
  else if (typeof module == 'object' && module.exports && typeof require == 'function')
    module.exports = factory();
  else
    factory();
});
//# sourceMappingURL=bundle.js.map