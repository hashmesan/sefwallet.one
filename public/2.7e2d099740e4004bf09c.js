(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[2],{

/***/ 1630:
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(1642)["default"];

function _getRequireWildcardCache(nodeInterop) {
  if (typeof WeakMap !== "function") return null;
  var cacheBabelInterop = new WeakMap();
  var cacheNodeInterop = new WeakMap();
  return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) {
    return nodeInterop ? cacheNodeInterop : cacheBabelInterop;
  })(nodeInterop);
}

function _interopRequireWildcard(obj, nodeInterop) {
  if (!nodeInterop && obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") {
    return {
      "default": obj
    };
  }

  var cache = _getRequireWildcardCache(nodeInterop);

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj["default"] = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

module.exports = _interopRequireWildcard;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ 1631:
/***/ (function(module, exports) {

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

module.exports = _defineProperty;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ 1632:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.CLOSE_WINDOW = exports.CANCEL_POPUP_REQUEST = exports.CLOSED = exports.CLOSE = exports.HANDSHAKE = exports.OPEN_TIMEOUT = exports.OPENED = exports.LOG = exports.EXTENSION_USB_PERMISSIONS = exports.EXTENSION_REQUEST = exports.BOOTSTRAP = exports.INIT = void 0;
var INIT = 'popup-init';
exports.INIT = INIT;
var BOOTSTRAP = 'popup-bootstrap';
exports.BOOTSTRAP = BOOTSTRAP;
var EXTENSION_REQUEST = 'popup-extension_request';
exports.EXTENSION_REQUEST = EXTENSION_REQUEST;
var EXTENSION_USB_PERMISSIONS = 'open-usb-permissions';
exports.EXTENSION_USB_PERMISSIONS = EXTENSION_USB_PERMISSIONS;
var LOG = 'popup-log';
exports.LOG = LOG;
var OPENED = 'popup-opened';
exports.OPENED = OPENED;
var OPEN_TIMEOUT = 'popup-open_timeout';
exports.OPEN_TIMEOUT = OPEN_TIMEOUT;
var HANDSHAKE = 'popup-handshake';
exports.HANDSHAKE = HANDSHAKE;
var CLOSE = 'popup-close';
exports.CLOSE = CLOSE;
var CLOSED = 'popup-closed';
exports.CLOSED = CLOSED;
var CANCEL_POPUP_REQUEST = 'ui-cancel-popup-request';
exports.CANCEL_POPUP_REQUEST = CANCEL_POPUP_REQUEST;
var CLOSE_WINDOW = 'window.close';
exports.CLOSE_WINDOW = CLOSE_WINDOW;

/***/ }),

/***/ 1633:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.ADDRESS_VALIDATION = exports.BUNDLE_PROGRESS = exports.LOGIN_CHALLENGE_RESPONSE = exports.LOGIN_CHALLENGE_REQUEST = exports.CUSTOM_MESSAGE_RESPONSE = exports.CUSTOM_MESSAGE_REQUEST = exports.CHANGE_SETTINGS = exports.RECEIVE_WORD = exports.RECEIVE_FEE = exports.RECEIVE_ACCOUNT = exports.CHANGE_ACCOUNT = exports.RECEIVE_DEVICE = exports.RECEIVE_PASSPHRASE = exports.RECEIVE_PIN = exports.RECEIVE_CONFIRMATION = exports.RECEIVE_PERMISSION = exports.REQUEST_WORD = exports.REQUEST_BUTTON = exports.INSUFFICIENT_FUNDS = exports.UPDATE_CUSTOM_FEE = exports.SELECT_FEE = exports.SELECT_ACCOUNT = exports.SELECT_DEVICE = exports.SET_OPERATION = exports.LOADING = exports.CONNECT = exports.INVALID_PASSPHRASE_ACTION = exports.INVALID_PASSPHRASE = exports.REQUEST_PASSPHRASE_ON_DEVICE = exports.REQUEST_PASSPHRASE = exports.INVALID_PIN = exports.REQUEST_PIN = exports.REQUEST_CONFIRMATION = exports.REQUEST_PERMISSION = exports.CLOSE_UI_WINDOW = exports.REQUEST_UI_WINDOW = exports.RECEIVE_BROWSER = exports.BROWSER_OUTDATED = exports.BROWSER_NOT_SUPPORTED = exports.DEVICE_NEEDS_BACKUP = exports.FIRMWARE_NOT_INSTALLED = exports.FIRMWARE_NOT_COMPATIBLE = exports.FIRMWARE_NOT_SUPPORTED = exports.FIRMWARE_OUTDATED = exports.FIRMWARE_OLD = exports.SEEDLESS = exports.INITIALIZE = exports.REQUIRE_MODE = exports.NOT_IN_BOOTLOADER = exports.BOOTLOADER = exports.TRANSPORT = exports.IFRAME_HANDSHAKE = void 0;
var IFRAME_HANDSHAKE = 'iframe-handshake';
exports.IFRAME_HANDSHAKE = IFRAME_HANDSHAKE;
var TRANSPORT = 'ui-no_transport';
exports.TRANSPORT = TRANSPORT;
var BOOTLOADER = 'ui-device_bootloader_mode';
exports.BOOTLOADER = BOOTLOADER;
var NOT_IN_BOOTLOADER = 'ui-device_not_in_bootloader_mode';
exports.NOT_IN_BOOTLOADER = NOT_IN_BOOTLOADER;
var REQUIRE_MODE = 'ui-device_require_mode';
exports.REQUIRE_MODE = REQUIRE_MODE;
var INITIALIZE = 'ui-device_not_initialized';
exports.INITIALIZE = INITIALIZE;
var SEEDLESS = 'ui-device_seedless';
exports.SEEDLESS = SEEDLESS;
var FIRMWARE_OLD = 'ui-device_firmware_old';
exports.FIRMWARE_OLD = FIRMWARE_OLD;
var FIRMWARE_OUTDATED = 'ui-device_firmware_outdated';
exports.FIRMWARE_OUTDATED = FIRMWARE_OUTDATED;
var FIRMWARE_NOT_SUPPORTED = 'ui-device_firmware_unsupported';
exports.FIRMWARE_NOT_SUPPORTED = FIRMWARE_NOT_SUPPORTED;
var FIRMWARE_NOT_COMPATIBLE = 'ui-device_firmware_not_compatible';
exports.FIRMWARE_NOT_COMPATIBLE = FIRMWARE_NOT_COMPATIBLE;
var FIRMWARE_NOT_INSTALLED = 'ui-device_firmware_not_installed';
exports.FIRMWARE_NOT_INSTALLED = FIRMWARE_NOT_INSTALLED;
var DEVICE_NEEDS_BACKUP = 'ui-device_needs_backup';
exports.DEVICE_NEEDS_BACKUP = DEVICE_NEEDS_BACKUP;
var BROWSER_NOT_SUPPORTED = 'ui-browser_not_supported';
exports.BROWSER_NOT_SUPPORTED = BROWSER_NOT_SUPPORTED;
var BROWSER_OUTDATED = 'ui-browser_outdated';
exports.BROWSER_OUTDATED = BROWSER_OUTDATED;
var RECEIVE_BROWSER = 'ui-receive_browser';
exports.RECEIVE_BROWSER = RECEIVE_BROWSER;
var REQUEST_UI_WINDOW = 'ui-request_window';
exports.REQUEST_UI_WINDOW = REQUEST_UI_WINDOW;
var CLOSE_UI_WINDOW = 'ui-close_window';
exports.CLOSE_UI_WINDOW = CLOSE_UI_WINDOW;
var REQUEST_PERMISSION = 'ui-request_permission';
exports.REQUEST_PERMISSION = REQUEST_PERMISSION;
var REQUEST_CONFIRMATION = 'ui-request_confirmation';
exports.REQUEST_CONFIRMATION = REQUEST_CONFIRMATION;
var REQUEST_PIN = 'ui-request_pin';
exports.REQUEST_PIN = REQUEST_PIN;
var INVALID_PIN = 'ui-invalid_pin';
exports.INVALID_PIN = INVALID_PIN;
var REQUEST_PASSPHRASE = 'ui-request_passphrase';
exports.REQUEST_PASSPHRASE = REQUEST_PASSPHRASE;
var REQUEST_PASSPHRASE_ON_DEVICE = 'ui-request_passphrase_on_device';
exports.REQUEST_PASSPHRASE_ON_DEVICE = REQUEST_PASSPHRASE_ON_DEVICE;
var INVALID_PASSPHRASE = 'ui-invalid_passphrase';
exports.INVALID_PASSPHRASE = INVALID_PASSPHRASE;
var INVALID_PASSPHRASE_ACTION = 'ui-invalid_passphrase_action';
exports.INVALID_PASSPHRASE_ACTION = INVALID_PASSPHRASE_ACTION;
var CONNECT = 'ui-connect';
exports.CONNECT = CONNECT;
var LOADING = 'ui-loading';
exports.LOADING = LOADING;
var SET_OPERATION = 'ui-set_operation';
exports.SET_OPERATION = SET_OPERATION;
var SELECT_DEVICE = 'ui-select_device';
exports.SELECT_DEVICE = SELECT_DEVICE;
var SELECT_ACCOUNT = 'ui-select_account';
exports.SELECT_ACCOUNT = SELECT_ACCOUNT;
var SELECT_FEE = 'ui-select_fee';
exports.SELECT_FEE = SELECT_FEE;
var UPDATE_CUSTOM_FEE = 'ui-update_custom_fee';
exports.UPDATE_CUSTOM_FEE = UPDATE_CUSTOM_FEE;
var INSUFFICIENT_FUNDS = 'ui-insufficient_funds';
exports.INSUFFICIENT_FUNDS = INSUFFICIENT_FUNDS;
var REQUEST_BUTTON = 'ui-button';
exports.REQUEST_BUTTON = REQUEST_BUTTON;
var REQUEST_WORD = 'ui-request_word';
exports.REQUEST_WORD = REQUEST_WORD;
var RECEIVE_PERMISSION = 'ui-receive_permission';
exports.RECEIVE_PERMISSION = RECEIVE_PERMISSION;
var RECEIVE_CONFIRMATION = 'ui-receive_confirmation';
exports.RECEIVE_CONFIRMATION = RECEIVE_CONFIRMATION;
var RECEIVE_PIN = 'ui-receive_pin';
exports.RECEIVE_PIN = RECEIVE_PIN;
var RECEIVE_PASSPHRASE = 'ui-receive_passphrase';
exports.RECEIVE_PASSPHRASE = RECEIVE_PASSPHRASE;
var RECEIVE_DEVICE = 'ui-receive_device';
exports.RECEIVE_DEVICE = RECEIVE_DEVICE;
var CHANGE_ACCOUNT = 'ui-change_account';
exports.CHANGE_ACCOUNT = CHANGE_ACCOUNT;
var RECEIVE_ACCOUNT = 'ui-receive_account';
exports.RECEIVE_ACCOUNT = RECEIVE_ACCOUNT;
var RECEIVE_FEE = 'ui-receive_fee';
exports.RECEIVE_FEE = RECEIVE_FEE;
var RECEIVE_WORD = 'ui-receive_word';
exports.RECEIVE_WORD = RECEIVE_WORD;
var CHANGE_SETTINGS = 'ui-change_settings';
exports.CHANGE_SETTINGS = CHANGE_SETTINGS;
var CUSTOM_MESSAGE_REQUEST = 'ui-custom_request';
exports.CUSTOM_MESSAGE_REQUEST = CUSTOM_MESSAGE_REQUEST;
var CUSTOM_MESSAGE_RESPONSE = 'ui-custom_response';
exports.CUSTOM_MESSAGE_RESPONSE = CUSTOM_MESSAGE_RESPONSE;
var LOGIN_CHALLENGE_REQUEST = 'ui-login_challenge_request';
exports.LOGIN_CHALLENGE_REQUEST = LOGIN_CHALLENGE_REQUEST;
var LOGIN_CHALLENGE_RESPONSE = 'ui-login_challenge_response';
exports.LOGIN_CHALLENGE_RESPONSE = LOGIN_CHALLENGE_RESPONSE;
var BUNDLE_PROGRESS = 'ui-bundle_progress';
exports.BUNDLE_PROGRESS = BUNDLE_PROGRESS;
var ADDRESS_VALIDATION = 'ui-address_validation';
exports.ADDRESS_VALIDATION = ADDRESS_VALIDATION;

/***/ }),

/***/ 1634:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(334);

exports.__esModule = true;
exports.NO_COIN_INFO = exports.BACKEND_NO_URL = exports.WEBUSB_ERROR_MESSAGE = exports.INVALID_PIN_ERROR_MESSAGE = exports.WRONG_PREVIOUS_SESSION_ERROR_MESSAGE = exports.INVALID_STATE = exports.CALL_OVERRIDE = exports.INITIALIZATION_FAILED = exports.DEVICE_USED_ELSEWHERE = exports.PERMISSIONS_NOT_GRANTED = exports.POPUP_CLOSED = exports.INVALID_PARAMETERS = exports.DEVICE_CALL_IN_PROGRESS = exports.DEVICE_NOT_FOUND = exports.WRONG_TRANSPORT_CONFIG = exports.NO_TRANSPORT = exports.MANAGEMENT_NOT_ALLOWED = exports.MANIFEST_NOT_SET = exports.BROWSER_NOT_SUPPORTED = exports.POPUP_TIMEOUT = exports.IFRAME_TIMEOUT = exports.IFRAME_INITIALIZED = exports.IFRAME_BLOCKED = exports.NO_IFRAME = exports.invalidParameter = exports.TrezorError = void 0;

var _inheritsLoose2 = _interopRequireDefault(__webpack_require__(1640));

var _wrapNativeSuper2 = _interopRequireDefault(__webpack_require__(1644));

var TrezorError =
/*#__PURE__*/
function (_Error) {
  (0, _inheritsLoose2["default"])(TrezorError, _Error);

  function TrezorError(code, message) {
    var _this;

    _this = _Error.call(this, message) || this;
    _this.code = code;
    _this.message = message;
    return _this;
  }

  return TrezorError;
}((0, _wrapNativeSuper2["default"])(Error));

exports.TrezorError = TrezorError;

var invalidParameter = function invalidParameter(message) {
  return new TrezorError('Connect_InvalidParameter', message);
}; // level 100 error during initialization


exports.invalidParameter = invalidParameter;
var NO_IFRAME = new TrezorError(100, 'TrezorConnect not yet initialized');
exports.NO_IFRAME = NO_IFRAME;
var IFRAME_BLOCKED = new TrezorError('iframe_blocked', 'TrezorConnect iframe was blocked');
exports.IFRAME_BLOCKED = IFRAME_BLOCKED;
var IFRAME_INITIALIZED = new TrezorError(101, 'TrezorConnect has been already initialized');
exports.IFRAME_INITIALIZED = IFRAME_INITIALIZED;
var IFRAME_TIMEOUT = new TrezorError(102, 'Iframe timeout');
exports.IFRAME_TIMEOUT = IFRAME_TIMEOUT;
var POPUP_TIMEOUT = new TrezorError(103, 'Popup timeout');
exports.POPUP_TIMEOUT = POPUP_TIMEOUT;
var BROWSER_NOT_SUPPORTED = new TrezorError(104, 'Browser not supported');
exports.BROWSER_NOT_SUPPORTED = BROWSER_NOT_SUPPORTED;
var MANIFEST_NOT_SET = new TrezorError(105, 'Manifest not set. Read more at https://github.com/trezor/connect/blob/develop/docs/index.md');
exports.MANIFEST_NOT_SET = MANIFEST_NOT_SET;
var MANAGEMENT_NOT_ALLOWED = new TrezorError(105, 'Management method not allowed for this configuration');
exports.MANAGEMENT_NOT_ALLOWED = MANAGEMENT_NOT_ALLOWED;
var NO_TRANSPORT = new TrezorError(500, 'Transport is missing');
exports.NO_TRANSPORT = NO_TRANSPORT;
var WRONG_TRANSPORT_CONFIG = new TrezorError(5002, 'Wrong config response'); // config_signed

exports.WRONG_TRANSPORT_CONFIG = WRONG_TRANSPORT_CONFIG;
var DEVICE_NOT_FOUND = new TrezorError(501, 'Device not found'); // export const DEVICE_CALL_IN_PROGRESS: TrezorError = new TrezorError(502, "Device call in progress.");

exports.DEVICE_NOT_FOUND = DEVICE_NOT_FOUND;
var DEVICE_CALL_IN_PROGRESS = new TrezorError(503, 'Device call in progress');
exports.DEVICE_CALL_IN_PROGRESS = DEVICE_CALL_IN_PROGRESS;
var INVALID_PARAMETERS = new TrezorError(504, 'Invalid parameters');
exports.INVALID_PARAMETERS = INVALID_PARAMETERS;
var POPUP_CLOSED = new Error('Popup closed');
exports.POPUP_CLOSED = POPUP_CLOSED;
var PERMISSIONS_NOT_GRANTED = new TrezorError(403, 'Permissions not granted');
exports.PERMISSIONS_NOT_GRANTED = PERMISSIONS_NOT_GRANTED;
var DEVICE_USED_ELSEWHERE = new TrezorError(700, 'Device is used in another window');
exports.DEVICE_USED_ELSEWHERE = DEVICE_USED_ELSEWHERE;
var INITIALIZATION_FAILED = new TrezorError('Failure_Initialize', 'Initialization failed');
exports.INITIALIZATION_FAILED = INITIALIZATION_FAILED;
var CALL_OVERRIDE = new TrezorError('Failure_ActionOverride', 'override');
exports.CALL_OVERRIDE = CALL_OVERRIDE;
var INVALID_STATE = new TrezorError('Failure_PassphraseState', 'Passphrase is incorrect'); // a slight hack
// this error string is hard-coded
// in both bridge and extension

exports.INVALID_STATE = INVALID_STATE;
var WRONG_PREVIOUS_SESSION_ERROR_MESSAGE = 'wrong previous session';
exports.WRONG_PREVIOUS_SESSION_ERROR_MESSAGE = WRONG_PREVIOUS_SESSION_ERROR_MESSAGE;
var INVALID_PIN_ERROR_MESSAGE = 'PIN invalid';
exports.INVALID_PIN_ERROR_MESSAGE = INVALID_PIN_ERROR_MESSAGE;
var WEBUSB_ERROR_MESSAGE = 'NetworkError: Unable to claim interface.'; // BlockBook

exports.WEBUSB_ERROR_MESSAGE = WEBUSB_ERROR_MESSAGE;
var BACKEND_NO_URL = new TrezorError('Backend_init', 'Url not found');
exports.BACKEND_NO_URL = BACKEND_NO_URL;
var NO_COIN_INFO = invalidParameter('Coin not found.');
exports.NO_COIN_INFO = NO_COIN_INFO;

/***/ }),

/***/ 1635:
/***/ (function(module, exports) {

function _setPrototypeOf(o, p) {
  module.exports = _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  module.exports["default"] = module.exports, module.exports.__esModule = true;
  return _setPrototypeOf(o, p);
}

module.exports = _setPrototypeOf;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ 1636:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.BLOCKCHAIN_EVENT = exports.RESPONSE_EVENT = exports.TRANSPORT_EVENT = exports.DEVICE_EVENT = exports.UI_EVENT = exports.CORE_EVENT = void 0;
var CORE_EVENT = 'CORE_EVENT';
exports.CORE_EVENT = CORE_EVENT;
var UI_EVENT = 'UI_EVENT';
exports.UI_EVENT = UI_EVENT;
var DEVICE_EVENT = 'DEVICE_EVENT';
exports.DEVICE_EVENT = DEVICE_EVENT;
var TRANSPORT_EVENT = 'TRANSPORT_EVENT';
exports.TRANSPORT_EVENT = TRANSPORT_EVENT;
var RESPONSE_EVENT = 'RESPONSE_EVENT';
exports.RESPONSE_EVENT = RESPONSE_EVENT;
var BLOCKCHAIN_EVENT = 'BLOCKCHAIN_EVENT';
exports.BLOCKCHAIN_EVENT = BLOCKCHAIN_EVENT;

/***/ }),

/***/ 1637:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.START_PENDING = exports.RECONNECT = exports.REQUEST = exports.STREAM = exports.UPDATE = exports.ERROR = exports.START = void 0;
var START = 'transport-start';
exports.START = START;
var ERROR = 'transport-error';
exports.ERROR = ERROR;
var UPDATE = 'transport-update';
exports.UPDATE = UPDATE;
var STREAM = 'transport-stream';
exports.STREAM = STREAM;
var REQUEST = 'transport-request_device';
exports.REQUEST = REQUEST;
var RECONNECT = 'transport-reconnect';
exports.RECONNECT = RECONNECT;
var START_PENDING = 'transport-start_pending';
exports.START_PENDING = START_PENDING;

/***/ }),

/***/ 1638:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
 // device list events

exports.__esModule = true;
exports.UNREADABLE = exports.WAIT_FOR_SELECTION = exports.WORD = exports.PASSPHRASE_ON_DEVICE = exports.PASSPHRASE = exports.PIN = exports.BUTTON = exports.LOADING = exports.USED_ELSEWHERE = exports.RELEASED = exports.ACQUIRED = exports.RELEASE = exports.ACQUIRE = exports.CHANGED = exports.DISCONNECT = exports.CONNECT_UNACQUIRED = exports.CONNECT = void 0;
var CONNECT = 'device-connect';
exports.CONNECT = CONNECT;
var CONNECT_UNACQUIRED = 'device-connect_unacquired';
exports.CONNECT_UNACQUIRED = CONNECT_UNACQUIRED;
var DISCONNECT = 'device-disconnect';
exports.DISCONNECT = DISCONNECT;
var CHANGED = 'device-changed';
exports.CHANGED = CHANGED;
var ACQUIRE = 'device-acquire';
exports.ACQUIRE = ACQUIRE;
var RELEASE = 'device-release';
exports.RELEASE = RELEASE;
var ACQUIRED = 'device-acquired';
exports.ACQUIRED = ACQUIRED;
var RELEASED = 'device-released';
exports.RELEASED = RELEASED;
var USED_ELSEWHERE = 'device-used_elsewhere';
exports.USED_ELSEWHERE = USED_ELSEWHERE;
var LOADING = 'device-loading'; // trezor-link events in protobuf format

exports.LOADING = LOADING;
var BUTTON = 'button';
exports.BUTTON = BUTTON;
var PIN = 'pin';
exports.PIN = PIN;
var PASSPHRASE = 'passphrase';
exports.PASSPHRASE = PASSPHRASE;
var PASSPHRASE_ON_DEVICE = 'passphrase_on_device';
exports.PASSPHRASE_ON_DEVICE = PASSPHRASE_ON_DEVICE;
var WORD = 'word'; // custom

exports.WORD = WORD;
var WAIT_FOR_SELECTION = 'device-wait_for_selection'; // this string has different prefix than other constants and it's used as device path

exports.WAIT_FOR_SELECTION = WAIT_FOR_SELECTION;
var UNREADABLE = 'unreadable-device';
exports.UNREADABLE = UNREADABLE;

/***/ }),

/***/ 1639:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
 // blockchain events

exports.__esModule = true;
exports.NOTIFICATION = exports.BLOCK = exports.CONNECT = exports.ERROR = void 0;
var ERROR = 'blockchain-error';
exports.ERROR = ERROR;
var CONNECT = 'blockchain-connect';
exports.CONNECT = CONNECT;
var BLOCK = 'blockchain-block';
exports.BLOCK = BLOCK;
var NOTIFICATION = 'blockchain-notification';
exports.NOTIFICATION = NOTIFICATION;

/***/ }),

/***/ 1640:
/***/ (function(module, exports, __webpack_require__) {

var setPrototypeOf = __webpack_require__(1635);

function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  setPrototypeOf(subClass, superClass);
}

module.exports = _inheritsLoose;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ 1641:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(334);

exports.__esModule = true;
exports.create = create;
exports.createAsync = createAsync;
exports.resolveTimeoutPromise = resolveTimeoutPromise;
exports.rejectTimeoutPromise = rejectTimeoutPromise;

var _regenerator = _interopRequireDefault(__webpack_require__(513));

var _asyncToGenerator2 = _interopRequireDefault(__webpack_require__(514));

function create(arg, device) {
  var localResolve = function localResolve(t) {};

  var localReject = function localReject(e) {};

  var id;
  var promise = new Promise(
  /*#__PURE__*/
  function () {
    var _ref = (0, _asyncToGenerator2["default"])(
    /*#__PURE__*/
    _regenerator["default"].mark(function _callee(resolve, reject) {
      return _regenerator["default"].wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              localResolve = resolve;
              localReject = reject;

              if (!(typeof arg === 'function')) {
                _context.next = 11;
                break;
              }

              _context.prev = 3;
              _context.next = 6;
              return arg();

            case 6:
              _context.next = 11;
              break;

            case 8:
              _context.prev = 8;
              _context.t0 = _context["catch"](3);
              reject(_context.t0);

            case 11:
              if (typeof arg === 'string') id = arg;

            case 12:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[3, 8]]);
    }));

    return function (_x, _x2) {
      return _ref.apply(this, arguments);
    };
  }());
  return {
    id: id,
    device: device,
    resolve: localResolve,
    reject: localReject,
    promise: promise
  };
}

function createAsync(innerFn) {
  var localResolve = function localResolve(t) {};

  var localReject = function localReject(e) {};

  var promise = new Promise(function (resolve, reject) {
    localResolve = resolve;
    localReject = reject;
  });

  var inner =
  /*#__PURE__*/
  function () {
    var _ref2 = (0, _asyncToGenerator2["default"])(
    /*#__PURE__*/
    _regenerator["default"].mark(function _callee2() {
      return _regenerator["default"].wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return innerFn();

            case 2:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }));

    return function inner() {
      return _ref2.apply(this, arguments);
    };
  }();

  return {
    resolve: localResolve,
    reject: localReject,
    promise: promise,
    run: function run() {
      inner();
      return promise;
    }
  };
}

function resolveTimeoutPromise(delay, result) {
  return new Promise(function (resolve) {
    setTimeout(function () {
      resolve(result);
    }, delay);
  });
}

function rejectTimeoutPromise(delay, error) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      reject(error);
    }, delay);
  });
}

/***/ }),

/***/ 1642:
/***/ (function(module, exports) {

function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return typeof obj;
    };

    module.exports["default"] = module.exports, module.exports.__esModule = true;
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };

    module.exports["default"] = module.exports, module.exports.__esModule = true;
  }

  return _typeof(obj);
}

module.exports = _typeof;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ 1643:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.RESPONSE = exports.CALL = exports.ERROR = exports.BOOTSTRAP = void 0;
var BOOTSTRAP = 'iframe-bootstrap';
exports.BOOTSTRAP = BOOTSTRAP;
var ERROR = 'iframe-error';
exports.ERROR = ERROR;
var CALL = 'iframe-call';
exports.CALL = CALL;
var RESPONSE = 'iframe-response';
exports.RESPONSE = RESPONSE;

/***/ }),

/***/ 1644:
/***/ (function(module, exports, __webpack_require__) {

var getPrototypeOf = __webpack_require__(1645);

var setPrototypeOf = __webpack_require__(1635);

var isNativeFunction = __webpack_require__(1646);

var construct = __webpack_require__(1647);

function _wrapNativeSuper(Class) {
  var _cache = typeof Map === "function" ? new Map() : undefined;

  module.exports = _wrapNativeSuper = function _wrapNativeSuper(Class) {
    if (Class === null || !isNativeFunction(Class)) return Class;

    if (typeof Class !== "function") {
      throw new TypeError("Super expression must either be null or a function");
    }

    if (typeof _cache !== "undefined") {
      if (_cache.has(Class)) return _cache.get(Class);

      _cache.set(Class, Wrapper);
    }

    function Wrapper() {
      return construct(Class, arguments, getPrototypeOf(this).constructor);
    }

    Wrapper.prototype = Object.create(Class.prototype, {
      constructor: {
        value: Wrapper,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
    return setPrototypeOf(Wrapper, Class);
  };

  module.exports["default"] = module.exports, module.exports.__esModule = true;
  return _wrapNativeSuper(Class);
}

module.exports = _wrapNativeSuper;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ 1645:
/***/ (function(module, exports) {

function _getPrototypeOf(o) {
  module.exports = _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  module.exports["default"] = module.exports, module.exports.__esModule = true;
  return _getPrototypeOf(o);
}

module.exports = _getPrototypeOf;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ 1646:
/***/ (function(module, exports) {

function _isNativeFunction(fn) {
  return Function.toString.call(fn).indexOf("[native code]") !== -1;
}

module.exports = _isNativeFunction;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ 1647:
/***/ (function(module, exports, __webpack_require__) {

var setPrototypeOf = __webpack_require__(1635);

var isNativeReflectConstruct = __webpack_require__(1648);

function _construct(Parent, args, Class) {
  if (isNativeReflectConstruct()) {
    module.exports = _construct = Reflect.construct;
    module.exports["default"] = module.exports, module.exports.__esModule = true;
  } else {
    module.exports = _construct = function _construct(Parent, args, Class) {
      var a = [null];
      a.push.apply(a, args);
      var Constructor = Function.bind.apply(Parent, a);
      var instance = new Constructor();
      if (Class) setPrototypeOf(instance, Class.prototype);
      return instance;
    };

    module.exports["default"] = module.exports, module.exports.__esModule = true;
  }

  return _construct.apply(null, arguments);
}

module.exports = _construct;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ 1648:
/***/ (function(module, exports) {

function _isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;

  try {
    Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}

module.exports = _isNativeReflectConstruct;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ 1649:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(1630);

var _interopRequireDefault = __webpack_require__(334);

exports.__esModule = true;
exports["default"] = void 0;

var _regenerator = _interopRequireDefault(__webpack_require__(513));

var _asyncToGenerator2 = _interopRequireDefault(__webpack_require__(514));

var _assertThisInitialized2 = _interopRequireDefault(__webpack_require__(1650));

var _inheritsLoose2 = _interopRequireDefault(__webpack_require__(1640));

var _defineProperty2 = _interopRequireDefault(__webpack_require__(1631));

var _events = _interopRequireDefault(__webpack_require__(50));

var POPUP = _interopRequireWildcard(__webpack_require__(1632));

var ERROR = _interopRequireWildcard(__webpack_require__(1634));

var _showPopupRequest = __webpack_require__(1651);

var _networkUtils = __webpack_require__(1652);

var _deferred = __webpack_require__(1641);

// const POPUP_REQUEST_TIMEOUT: number = 602;
var POPUP_REQUEST_TIMEOUT = 850;
var POPUP_CLOSE_INTERVAL = 500;
var POPUP_OPEN_TIMEOUT = 2000;

var PopupManager =
/*#__PURE__*/
function (_EventEmitter) {
  (0, _inheritsLoose2["default"])(PopupManager, _EventEmitter);

  // Window
  function PopupManager(settings) {
    var _this;

    _this = _EventEmitter.call(this) || this;
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "requestTimeout", 0);
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "closeInterval", 0);
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "extension", false);
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "extensionTabId", 0);
    _this.settings = settings;
    _this.src = settings.popupSrc;
    _this.origin = (0, _networkUtils.getOrigin)(settings.popupSrc);
    _this.handleLazyLoading = _this.handleLazyLoading.bind((0, _assertThisInitialized2["default"])(_this)); // $FlowIssue chrome not declared outside

    _this.extension = typeof chrome !== 'undefined' && chrome.runtime && typeof chrome.runtime.onConnect !== 'undefined';

    if (_this.extension) {
      _this.handleExtensionConnect = _this.handleExtensionConnect.bind((0, _assertThisInitialized2["default"])(_this));
      _this.handleExtensionMessage = _this.handleExtensionMessage.bind((0, _assertThisInitialized2["default"])(_this)); // $FlowIssue chrome not declared outside

      chrome.runtime.onConnect.addListener(_this.handleExtensionConnect);
    }

    return _this;
  }

  var _proto = PopupManager.prototype;

  _proto.request = function request(lazyLoad) {
    var _this2 = this;

    if (lazyLoad === void 0) {
      lazyLoad = false;
    }

    // popup request
    // TODO: ie - open imediately and hide it but post handshake after timeout
    // bring popup window to front
    if (this.locked) {
      if (this._window) {
        if (this.extension) {
          // $FlowIssue chrome not declared outside
          chrome.tabs.update(this._window.id, {
            active: true
          });
        } else {
          this._window.focus();
        }
      }

      return;
    }

    this.lazyLoad = lazyLoad ? (0, _deferred.create)(POPUP.INIT) : null;

    if (this.lazyLoad) {
      if (!this.extension) {
        window.addEventListener('message', this.handleLazyLoading, false);
      }
    }

    var openFn = this.open.bind(this);
    this.locked = true;

    if (!this.settings.supportedBrowser) {
      openFn();
    } else {
      this.requestTimeout = window.setTimeout(function () {
        _this2.requestTimeout = 0;
        openFn();
      }, lazyLoad || this.extension ? 1 : POPUP_REQUEST_TIMEOUT);
    }
  };

  _proto.cancel = function cancel() {
    this.close();
  };

  _proto.unlock = function unlock() {
    this.locked = false;
  };

  _proto.open = function open() {
    var _this3 = this;

    if (!this.settings.supportedBrowser) {
      this.openWrapper(this.src + '#unsupported');
      return;
    }

    this.openWrapper(this.lazyLoad ? this.src + '#loading' : this.src);
    this.closeInterval = window.setInterval(function () {
      if (_this3._window) {
        if (_this3.extension) {
          // $FlowIssue chrome not declared outside
          chrome.tabs.get(_this3._window.id, function (tab) {
            if (!tab) {
              _this3.close();

              _this3.emit(POPUP.CLOSED);
            }
          });
        } else if (_this3._window.closed) {
          _this3.close();

          _this3.emit(POPUP.CLOSED);
        }
      }
    }, POPUP_CLOSE_INTERVAL);
    this.openTimeout = window.setTimeout(function () {
      if (!(_this3._window && !_this3._window.closed)) {
        _this3.close();

        (0, _showPopupRequest.showPopupRequest)(_this3.open.bind(_this3), function () {
          _this3.emit(POPUP.CLOSED);
        });
      }
    }, POPUP_OPEN_TIMEOUT);
  };

  _proto.openWrapper = function openWrapper(url) {
    var _this4 = this;

    if (this.extension) {
      // $FlowIssue chrome not declared outside
      chrome.windows.getCurrent(null, function (currentWindow) {
        // Request coming from extension popup,
        // create new window above instead of opening new tab
        if (currentWindow.type !== 'normal') {
          // $FlowIssue chrome not declared outside
          chrome.windows.create({
            url: url
          }, function (newWindow) {
            // $FlowIssue chrome not declared outside
            chrome.tabs.query({
              windowId: newWindow.id,
              active: true
            }, function (tabs) {
              _this4._window = tabs[0];
            });
          });
        } else {
          // $FlowIssue chrome not declared outside
          chrome.tabs.query({
            currentWindow: true,
            active: true
          }, function (tabs) {
            _this4.extensionTabId = tabs[0].id; // $FlowIssue chrome not declared outside

            chrome.tabs.create({
              url: url,
              index: tabs[0].index + 1
            }, function (tab) {
              _this4._window = tab;
            });
          });
        }
      });
    } else {
      this._window = window.open('', '_blank');

      if (this._window) {
        this._window.location.href = url; // otherwise android/chrome loose window.opener reference
      }
    }
  };

  _proto.handleExtensionConnect = function handleExtensionConnect(port) {
    if (port.name === 'trezor-connect') {
      if (!this._window || this._window && this._window.id !== port.sender.tab.id) {
        port.disconnect();
        return;
      }

      this.extensionPort = port; // $FlowIssue need to update ChromePort definition

      this.extensionPort.onMessage.addListener(this.handleExtensionMessage);
    } else if (port.name === 'trezor-usb-permissions') {
      port.postMessage({
        broadcast: this.broadcast
      });
    }
  };

  _proto.handleExtensionMessage = function handleExtensionMessage(message) {
    if (!this.extensionPort) return;

    if (message === POPUP.EXTENSION_REQUEST) {
      this.extensionPort.postMessage({
        type: POPUP.EXTENSION_REQUEST,
        broadcast: this.broadcast
      });
    } else if (message === POPUP.INIT && this.lazyLoad) {
      this.lazyLoad.resolve(true);
    } else if (message === POPUP.EXTENSION_USB_PERMISSIONS) {
      // $FlowIssue chrome not declared outside
      chrome.tabs.query({
        currentWindow: true,
        active: true
      }, function (tabs) {
        // $FlowIssue chrome not declared outside
        chrome.tabs.create({
          url: 'trezor-usb-permissions.html',
          index: tabs[0].index + 1
        }, function (tab) {// do nothing
        });
      });
    } else if (message === POPUP.CLOSE_WINDOW) {
      this.emit(POPUP.CLOSED);
      this.close();
    }
  };

  _proto.setBroadcast = function setBroadcast(broadcast) {
    this.broadcast = broadcast;
  };

  _proto.handleLazyLoading = function handleLazyLoading(event) {
    if (this.lazyLoad && event.data && event.data === POPUP.INIT) {
      this.lazyLoad.resolve(true);
      window.removeEventListener('message', this.handleLazyLoading, false);
    }
  };

  _proto.resolveLazyLoad =
  /*#__PURE__*/
  function () {
    var _resolveLazyLoad = (0, _asyncToGenerator2["default"])(
    /*#__PURE__*/
    _regenerator["default"].mark(function _callee() {
      return _regenerator["default"].wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              if (!this.lazyLoad) {
                _context.next = 5;
                break;
              }

              _context.next = 3;
              return this.lazyLoad.promise;

            case 3:
              _context.next = 6;
              break;

            case 5:
              throw ERROR.POPUP_CLOSED.message;

            case 6:
              if (this.extension) {
                if (this.extensionPort) {
                  this.extensionPort.postMessage({
                    type: POPUP.INIT
                  });
                }
              } else if (this._window) {
                this._window.postMessage({
                  type: POPUP.INIT
                }, this.origin);
              }

            case 7:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, this);
    }));

    function resolveLazyLoad() {
      return _resolveLazyLoad.apply(this, arguments);
    }

    return resolveLazyLoad;
  }();

  _proto.close = function close() {
    this.locked = false;

    if (this.requestTimeout) {
      window.clearTimeout(this.requestTimeout);
      this.requestTimeout = 0;
    }

    if (this.openTimeout) {
      window.clearTimeout(this.openTimeout);
      this.openTimeout = 0;
    }

    if (this.closeInterval) {
      window.clearInterval(this.closeInterval);
      this.closeInterval = 0;
    }

    if (this.extensionPort) {
      this.extensionPort.disconnect();
      this.extensionPort = null;
    }

    if (this.extensionTabId) {
      // $FlowIssue chrome not declared outside
      chrome.tabs.update(this.extensionTabId, {
        active: true
      });
      this.extensionTabId = 0;
    }

    if (this.lazyLoad) {
      this.lazyLoad = null;
    }

    if (this._window) {
      if (this.extension) {
        // $FlowIssue chrome not declared outside
        chrome.tabs.remove(this._window.id);
      } else {
        this._window.close();
      }

      this._window = null;
    }
  };

  _proto.postMessage = function postMessage(message) {
    var _this5 = this;

    // post message before popup request finalized
    if (this.requestTimeout) {
      return;
    } // device needs interaction but there is no popup/ui
    // maybe popup request wasn't handled
    // ignore "ui_request_window" type


    if (!this._window && message.type !== 'ui_request_window' && this.openTimeout) {
      this.close();
      (0, _showPopupRequest.showPopupRequest)(this.open.bind(this), function () {
        _this5.emit(POPUP.CLOSED);
      });
      return;
    } // post message to popup window


    if (this._window) {
      this._window.postMessage(message, this.origin);
    }
  };

  _proto.onBeforeUnload = function onBeforeUnload() {
    this.close();
  };

  _proto.cancelOpenTimeout = function cancelOpenTimeout() {
    window.clearTimeout(this.openTimeout);
  };

  return PopupManager;
}(_events["default"]);

exports["default"] = PopupManager;

/***/ }),

/***/ 1650:
/***/ (function(module, exports) {

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

module.exports = _assertThisInitialized;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ 1651:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.showPopupRequest = void 0;
var layerID = 'TrezorConnectInteractionLayer';
var layerInnerHtml = "\n    <div class=\"trezorconnect-container\" id=\"" + layerID + "\">\n        <div class=\"trezorconnect-window\">\n            <div class=\"trezorconnect-head\">\n                <svg class=\"trezorconnect-logo\" x=\"0px\" y=\"0px\" viewBox=\"0 0 163.7 41.9\" width=\"78px\" height=\"20px\" preserveAspectRatio=\"xMinYMin meet\">\n                    <polygon points=\"101.1,12.8 118.2,12.8 118.2,17.3 108.9,29.9 118.2,29.9 118.2,35.2 101.1,35.2 101.1,30.7 110.4,18.1 101.1,18.1\"/>\n                    <path d=\"M158.8,26.9c2.1-0.8,4.3-2.9,4.3-6.6c0-4.5-3.1-7.4-7.7-7.4h-10.5v22.3h5.8v-7.5h2.2l4.1,7.5h6.7L158.8,26.9z M154.7,22.5 h-4V18h4c1.5,0,2.5,0.9,2.5,2.2C157.2,21.6,156.2,22.5,154.7,22.5z\"/>\n                    <path d=\"M130.8,12.5c-6.8,0-11.6,4.9-11.6,11.5s4.9,11.5,11.6,11.5s11.7-4.9,11.7-11.5S137.6,12.5,130.8,12.5z M130.8,30.3 c-3.4,0-5.7-2.6-5.7-6.3c0-3.8,2.3-6.3,5.7-6.3c3.4,0,5.8,2.6,5.8,6.3C136.6,27.7,134.2,30.3,130.8,30.3z\"/>\n                    <polygon points=\"82.1,12.8 98.3,12.8 98.3,18 87.9,18 87.9,21.3 98,21.3 98,26.4 87.9,26.4 87.9,30 98.3,30 98.3,35.2 82.1,35.2 \"/>\n                    <path d=\"M24.6,9.7C24.6,4.4,20,0,14.4,0S4.2,4.4,4.2,9.7v3.1H0v22.3h0l14.4,6.7l14.4-6.7h0V12.9h-4.2V9.7z M9.4,9.7 c0-2.5,2.2-4.5,5-4.5s5,2,5,4.5v3.1H9.4V9.7z M23,31.5l-8.6,4l-8.6-4V18.1H23V31.5z\"/>\n                    <path d=\"M79.4,20.3c0-4.5-3.1-7.4-7.7-7.4H61.2v22.3H67v-7.5h2.2l4.1,7.5H80l-4.9-8.3C77.2,26.1,79.4,24,79.4,20.3z M71,22.5h-4V18 h4c1.5,0,2.5,0.9,2.5,2.2C73.5,21.6,72.5,22.5,71,22.5z\"/>\n                    <polygon points=\"40.5,12.8 58.6,12.8 58.6,18.1 52.4,18.1 52.4,35.2 46.6,35.2 46.6,18.1 40.5,18.1 \"/>\n                </svg>\n                <div class=\"trezorconnect-close\">\n                    <svg x=\"0px\" y=\"0px\" viewBox=\"24 24 60 60\" width=\"24px\" height=\"24px\" preserveAspectRatio=\"xMinYMin meet\">\n                        <polygon class=\"st0\" points=\"40,67.9 42.1,70 55,57.1 67.9,70 70,67.9 57.1,55 70,42.1 67.9,40 55,52.9 42.1,40 40,42.1 52.9,55 \"/>\n                    </svg>\n                </div>\n            </div>\n            <div class=\"trezorconnect-body\">\n                <h3>Popup was blocked</h3>\n                <p>Please click to \u201CContinue\u201D to open popup manually</p>\n                <button class=\"trezorconnect-open\">Continue</button>\n            </div>\n        </div>\n    </div>\n";

var showPopupRequest = function showPopupRequest(open, cancel) {
  if (document.getElementById(layerID)) {
    return;
  }

  var div = document.createElement('div');
  div.id = layerID;
  div.className = 'trezorconnect-container';
  div.innerHTML = layerInnerHtml;

  if (document.body) {
    document.body.appendChild(div);
  }

  var button = div.getElementsByClassName('trezorconnect-open')[0];

  button.onclick = function () {
    open();

    if (document.body) {
      document.body.removeChild(div);
    }
  };

  var close = div.getElementsByClassName('trezorconnect-close')[0];

  close.onclick = function () {
    cancel();

    if (document.body) {
      document.body.removeChild(div);
    }
  };
};

exports.showPopupRequest = showPopupRequest;

/***/ }),

/***/ 1652:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(334);

exports.__esModule = true;
exports.getOrigin = exports.httpRequest = void 0;

var _regenerator = _interopRequireDefault(__webpack_require__(513));

var _asyncToGenerator2 = _interopRequireDefault(__webpack_require__(514));

__webpack_require__(1236);

var httpRequest =
/*#__PURE__*/
function () {
  var _ref = (0, _asyncToGenerator2["default"])(
  /*#__PURE__*/
  _regenerator["default"].mark(function _callee(url, type) {
    var response, txt;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            if (type === void 0) {
              type = 'text';
            }

            _context.next = 3;
            return fetch(url, {
              credentials: 'same-origin'
            });

          case 3:
            response = _context.sent;

            if (!response.ok) {
              _context.next = 23;
              break;
            }

            if (!(type === 'json')) {
              _context.next = 12;
              break;
            }

            _context.next = 8;
            return response.text();

          case 8:
            txt = _context.sent;
            return _context.abrupt("return", JSON.parse(txt));

          case 12:
            if (!(type === 'binary')) {
              _context.next = 18;
              break;
            }

            _context.next = 15;
            return response.arrayBuffer();

          case 15:
            return _context.abrupt("return", _context.sent);

          case 18:
            _context.next = 20;
            return response.text();

          case 20:
            return _context.abrupt("return", _context.sent);

          case 21:
            _context.next = 24;
            break;

          case 23:
            throw new Error("httpRequest error: " + url + " " + response.statusText);

          case 24:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function httpRequest(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

exports.httpRequest = httpRequest;

var getOrigin = function getOrigin(url) {
  // eslint-disable-next-line no-irregular-whitespace, no-useless-escape
  var parts = url.match(/^.+\:\/\/[^\/]+/);
  return Array.isArray(parts) && parts.length > 0 ? parts[0] : 'unknown';
};

exports.getOrigin = getOrigin;

/***/ }),

/***/ 1653:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(334);

exports.__esModule = true;
exports.clearTimeout = exports.dispose = exports.postMessage = exports.init = exports.messagePromises = exports.error = exports.timeout = exports.initPromise = exports.origin = exports.instance = void 0;

var _regenerator = _interopRequireDefault(__webpack_require__(513));

var _asyncToGenerator2 = _interopRequireDefault(__webpack_require__(514));

var _deferred = __webpack_require__(1641);

var _ui = __webpack_require__(1633);

var _errors = __webpack_require__(1634);

var _inlineStyles = _interopRequireDefault(__webpack_require__(1654));

var instance;
exports.instance = instance;
var origin;
exports.origin = origin;
var initPromise = (0, _deferred.create)();
exports.initPromise = initPromise;
var timeout = 0;
exports.timeout = timeout;
var error;
exports.error = error;
var _messageID = 0; // every postMessage to iframe has its own promise to resolve

var messagePromises = {};
exports.messagePromises = messagePromises;

var init =
/*#__PURE__*/
function () {
  var _ref = (0, _asyncToGenerator2["default"])(
  /*#__PURE__*/
  _regenerator["default"].mark(function _callee(settings) {
    var existedFrame, manifestString, manifest, src, iframeSrcHost, onLoad;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            existedFrame = document.getElementById('trezorconnect');

            if (existedFrame) {
              exports.instance = instance = existedFrame;
            } else {
              exports.instance = instance = document.createElement('iframe');
              instance.frameBorder = '0';
              instance.width = '0px';
              instance.height = '0px';
              instance.style.position = 'absolute';
              instance.style.display = 'none';
              instance.style.border = '0px';
              instance.style.width = '0px';
              instance.style.height = '0px';
              instance.id = 'trezorconnect';
            }

            manifestString = settings.manifest ? JSON.stringify(settings.manifest) : 'undefined'; // note: btoa(undefined) === btoa('undefined') === "dW5kZWZpbmVk"

            manifest = "&version=" + settings.version + "&manifest=" + encodeURIComponent(btoa(JSON.stringify(manifestString)));
            src = settings.iframeSrc + "?" + Date.now() + manifest;
            instance.setAttribute('src', src);

            if (settings.webusb) {
              instance.setAttribute('allow', 'usb');
            } // eslint-disable-next-line no-irregular-whitespace, no-useless-escape


            iframeSrcHost = instance.src.match(/^.+\:\/\/[^\/]+/);

            if (iframeSrcHost && iframeSrcHost.length > 0) {
              exports.origin = origin = iframeSrcHost[0];
            }

            exports.timeout = timeout = window.setTimeout(function () {
              initPromise.reject(_errors.IFRAME_TIMEOUT);
            }, 10000);

            onLoad = function onLoad() {
              if (!instance) {
                initPromise.reject(_errors.IFRAME_BLOCKED);
                return;
              }

              try {
                // if hosting page is able to access cross-origin location it means that the iframe is not loaded
                var iframeOrigin = instance.contentWindow.location.origin;

                if (!iframeOrigin || iframeOrigin === 'null') {
                  // eslint-disable-next-line no-use-before-define
                  handleIframeBlocked();
                  return;
                }
              } catch (e) {// empty
              }

              var extension; // $FlowIssue chrome is not declared outside

              if (typeof chrome !== 'undefined' && chrome.runtime && typeof chrome.runtime.onConnect !== 'undefined') {
                chrome.runtime.onConnect.addListener(function () {});
                extension = chrome.runtime.id;
              }

              instance.contentWindow.postMessage({
                type: _ui.IFRAME_HANDSHAKE,
                payload: {
                  settings: settings,
                  extension: extension
                }
              }, origin);
              instance.onload = undefined;
            }; // IE hack


            if (instance.attachEvent) {
              instance.attachEvent('onload', onLoad);
            } else {
              instance.onload = onLoad;
            } // inject iframe into host document body


            if (document.body) {
              document.body.appendChild(instance); // eslint-disable-next-line no-use-before-define

              injectStyleSheet();
            }

            _context.prev = 13;
            _context.next = 16;
            return initPromise.promise;

          case 16:
            _context.next = 21;
            break;

          case 18:
            _context.prev = 18;
            _context.t0 = _context["catch"](13);
            throw _context.t0.message || _context.t0;

          case 21:
            _context.prev = 21;
            window.clearTimeout(timeout);
            exports.timeout = timeout = 0;
            return _context.finish(21);

          case 25:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[13, 18, 21, 25]]);
  }));

  return function init(_x) {
    return _ref.apply(this, arguments);
  };
}();

exports.init = init;

var injectStyleSheet = function injectStyleSheet() {
  if (!instance) {
    throw _errors.IFRAME_BLOCKED;
  }

  var doc = instance.ownerDocument;
  var head = doc.head || doc.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.setAttribute('type', 'text/css');
  style.setAttribute('id', 'TrezorConnectStylesheet'); // $FlowIssue

  if (style.styleSheet) {
    // IE
    // $FlowIssue
    style.styleSheet.cssText = _inlineStyles["default"];
  } else {
    style.appendChild(document.createTextNode(_inlineStyles["default"]));
  }

  head.append(style);
};

var handleIframeBlocked = function handleIframeBlocked() {
  window.clearTimeout(timeout);
  exports.error = error = _errors.IFRAME_BLOCKED.message; // eslint-disable-next-line no-use-before-define

  dispose();
  initPromise.reject(_errors.IFRAME_BLOCKED);
}; // post messages to iframe


var postMessage = function postMessage(message, usePromise) {
  if (usePromise === void 0) {
    usePromise = true;
  }

  if (!instance) {
    throw _errors.IFRAME_BLOCKED;
  }

  if (usePromise) {
    _messageID++;
    message.id = _messageID;
    messagePromises[_messageID] = (0, _deferred.create)();
    instance.contentWindow.postMessage(message, origin);
    return messagePromises[_messageID].promise;
  }

  instance.contentWindow.postMessage(message, origin);
  return null;
};

exports.postMessage = postMessage;

var dispose = function dispose() {
  if (instance && instance.parentNode) {
    try {
      instance.parentNode.removeChild(instance);
    } catch (error) {// do nothing
    }
  }

  exports.instance = instance = null;
  exports.timeout = timeout = 0;
};

exports.dispose = dispose;

var clearTimeout = function clearTimeout() {
  window.clearTimeout(timeout);
};

exports.clearTimeout = clearTimeout;

/***/ }),

/***/ 1654:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports["default"] = void 0;
var css = '.trezorconnect-container{position:fixed!important;display:-webkit-box!important;display:-webkit-flex!important;display:-ms-flexbox!important;display:flex!important;-webkit-box-orient:vertical!important;-webkit-box-direction:normal!important;-webkit-flex-direction:column!important;-ms-flex-direction:column!important;flex-direction:column!important;-webkit-box-align:center!important;-webkit-align-items:center!important;-ms-flex-align:center!important;align-items:center!important;z-index:10000!important;width:100%!important;height:100%!important;top:0!important;left:0!important;background:rgba(0,0,0,.35)!important;overflow:auto!important;padding:20px!important;margin:0!important}.trezorconnect-container .trezorconnect-window{position:relative!important;display:block!important;width:370px!important;font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif!important;margin:auto!important;border-radius:3px!important;background-color:#fff!important;text-align:center!important;overflow:hidden!important}.trezorconnect-container .trezorconnect-window .trezorconnect-head{text-align:left;padding:12px 24px!important;display:-webkit-box!important;display:-webkit-flex!important;display:-ms-flexbox!important;display:flex!important;-webkit-box-align:center!important;-webkit-align-items:center!important;-ms-flex-align:center!important;align-items:center!important}.trezorconnect-container .trezorconnect-window .trezorconnect-head .trezorconnect-logo{-webkit-box-flex:1;-webkit-flex:1;-ms-flex:1;flex:1}.trezorconnect-container .trezorconnect-window .trezorconnect-head .trezorconnect-close{cursor:pointer!important;height:24px!important}.trezorconnect-container .trezorconnect-window .trezorconnect-head .trezorconnect-close svg{fill:#757575;-webkit-transition:fill .3s ease-in-out!important;transition:fill .3s ease-in-out!important}.trezorconnect-container .trezorconnect-window .trezorconnect-head .trezorconnect-close:hover svg{fill:#494949}.trezorconnect-container .trezorconnect-window .trezorconnect-body{padding:24px 24px 32px!important;background:#FBFBFB!important;border-top:1px solid #EBEBEB}.trezorconnect-container .trezorconnect-window .trezorconnect-body h3{color:#505050!important;font-size:16px!important;font-weight:500!important}.trezorconnect-container .trezorconnect-window .trezorconnect-body p{margin:8px 0 24px!important;font-weight:400!important;color:#A9A9A9!important;font-size:12px!important}.trezorconnect-container .trezorconnect-window .trezorconnect-body button{width:100%!important;padding:12px 24px!important;margin:0!important;border-radius:3px!important;font-size:14px!important;font-weight:300!important;cursor:pointer!important;background:#01B757!important;color:#fff!important;border:0!important;-webkit-transition:background-color .3s ease-in-out!important;transition:background-color .3s ease-in-out!important}.trezorconnect-container .trezorconnect-window .trezorconnect-body button:hover{background-color:#00AB51!important}.trezorconnect-container .trezorconnect-window .trezorconnect-body button:active{background-color:#009546!important}/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImlucHV0IiwiJHN0ZGluIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWNBLHlCQUNJLFNBQUEsZ0JBQ0EsUUFBQSxzQkFDQSxRQUFBLHVCQUNBLFFBQUEsc0JBRUEsUUFBQSxlQUNBLG1CQUFBLG1CQUNBLHNCQUFBLGlCQUNBLHVCQUFBLGlCQUNBLG1CQUFBLGlCQUNBLGVBQUEsaUJBRUEsa0JBQUEsaUJBQ0Esb0JBQUEsaUJBQ0EsZUFBQSxpQkNmTSxZQUFhLGlCREFyQixRQUFTLGdCQWtCSCxNQUFBLGVBQ0EsT0FBQSxlQUNBLElBQUEsWUFDQSxLQUFBLFlBQ0EsV0FBQSwwQkFDQSxTQUFBLGVBQ0EsUUFBQSxlQUNBLE9BQUEsWUNkUiwrQ0RYRSxTQUFVLG1CQTZCQSxRQUFBLGdCQUNBLE1BQUEsZ0JBQ0EsWUFBQSxjQUFBLG1CQUFBLFdBQUEsT0FBQSxpQkFBQSxNQUFBLHFCQUNBLE9BQUEsZUNmVixjQUFlLGNEakJmLGlCQWlCRSxlQWtCWSxXQUFBLGlCQ2ZkLFNBQVUsaUJEbUJJLG1FQUNBLFdBQUEsS0NoQmQsUUFBUyxLQUFLLGVEeEJkLFFBQVMsc0JBMENTLFFBQUEsdUJBQ0EsUUFBQSxzQkNmbEIsUUFBUyxlRGlCSyxrQkE1QlosaUJBOEJvQixvQkFBQSxpQkNoQmxCLGVBQWdCLGlCRC9CWixZQWlCTixpQkFzQ1EsdUZBQ0EsaUJBQUEsRUNwQlYsYUFBYyxFRHBDVixTQUFVLEVBMkRBLEtBQUEsRUFFQSx3RkNwQmQsT0FBUSxrQkR6Q1IsT0FBUSxlQWlFTSw0RkFDQSxLQUFBLFFBQ0EsbUJBQUEsS0FBQSxJQUFBLHNCQ3BCZCxXQUFZLEtBQUssSUFBSyxzQkR3QlIsa0dBQ0EsS0FBQSxRQUVBLG1FQUNBLFFBQUEsS0FBQSxLQUFBLGVBQ0EsV0FBQSxrQkFDQSxXQUFBLElBQUEsTUFBQSxRQUVBLHNFQUNBLE1BQUEsa0JBQ0EsVUFBQSxlQ3JCZCxZQUFhLGNEd0JLLHFFQ3JCbEIsT0FBUSxJQUFJLEVBQUksZUR3QkYsWUFBQSxjQUNJLE1BQUEsa0JDdEJsQixVQUFXLGVBRWIsMEVBQ0UsTUFBTyxlQUNQLFFBQVMsS0FBSyxlQUNkLE9BQVEsWUFDUixjQUFlLGNBQ2YsVUFBVyxlQUNYLFlBQWEsY0FDYixPQUFRLGtCQUNSLFdBQVksa0JBQ1osTUFBTyxlQUNQLE9BQVEsWUFDUixtQkFBb0IsaUJBQWlCLElBQUssc0JBQzFDLFdBQVksaUJBQWlCLElBQUssc0JBRXBDLGdGQUNFLGlCQUFrQixrQkFFcEIsaUZBQ0UsaUJBQWtCIn0= */';
var _default = css;
exports["default"] = _default;

/***/ }),

/***/ 1655:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports["default"] = void 0;

var render = function render(className, url, origin) {
  var query = className || '.trezor-webusb-button';
  var buttons = document.querySelectorAll(query);
  var src = url + "?" + Date.now();
  buttons.forEach(function (b) {
    if (b.getElementsByTagName('iframe').length < 1) {
      var bounds = b.getBoundingClientRect();
      var btnIframe = document.createElement('iframe');
      btnIframe.frameBorder = '0';
      btnIframe.width = Math.round(bounds.width) + 'px';
      btnIframe.height = Math.round(bounds.height) + 'px';
      btnIframe.style.position = 'absolute';
      btnIframe.style.top = '0px';
      btnIframe.style.left = '0px';
      btnIframe.style.zIndex = '1'; // btnIframe.style.opacity = '0'; // this makes click impossible on cross-origin

      btnIframe.setAttribute('allow', 'usb');
      btnIframe.setAttribute('scrolling', 'no');

      btnIframe.onload = function () {
        btnIframe.contentWindow.postMessage({// style: JSON.stringify( window.getComputedStyle(b) ),
          // outer: b.outerHTML,
          // inner: b.innerHTML
        }, origin);
      };

      btnIframe.src = src; // inject iframe into button

      b.append(btnIframe);
    }
  });
};

var _default = render;
exports["default"] = _default;

/***/ }),

/***/ 1656:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) { // https://stackoverflow.com/questions/7505623/colors-in-javascript-console
// https://github.com/pimterry/loglevel/blob/master/lib/loglevel.js
// http://www.color-hex.com/color-palette/5016

exports.__esModule = true;
exports.popupConsole = exports.enableByPrefix = exports.getLog = exports.enable = exports.init = exports["default"] = void 0;

var _this = void 0;

var colors = {
  // green
  'DescriptorStream': 'color: #77ab59',
  'DeviceList': 'color: #36802d',
  'Device': 'color: #bada55',
  'Core': 'color: #c9df8a',
  'IFrame': 'color: #FFFFFF; background: #f4a742;',
  'Popup': 'color: #f48a00'
};

var Log =
/*#__PURE__*/
function () {
  function Log(prefix, enabled) {
    if (enabled === void 0) {
      enabled = false;
    }

    this.prefix = prefix;
    this.enabled = enabled;
    this.messages = [];
    this.css = colors[prefix] || 'color: #000000; background: #FFFFFF;';
  }

  var _proto = Log.prototype;

  _proto.addMessage = function addMessage(level, prefix) {
    for (var _len = arguments.length, args = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
      args[_key - 2] = arguments[_key];
    }

    this.messages.push({
      level: level,
      prefix: prefix,
      message: args,
      timestamp: new Date().getTime()
    });
  };

  _proto.log = function log() {
    for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }

    this.addMessage.apply(this, ['log', this.prefix].concat(args));

    if (this.enabled) {
      var _console;

      (_console = console).log.apply(_console, [this.prefix].concat(args));
    }
  };

  _proto.error = function error() {
    for (var _len3 = arguments.length, args = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
      args[_key3] = arguments[_key3];
    }

    this.addMessage.apply(this, ['error', this.prefix].concat(args));

    if (this.enabled) {
      var _console2;

      (_console2 = console).error.apply(_console2, [this.prefix].concat(args));
    }
  };

  _proto.warn = function warn() {
    for (var _len4 = arguments.length, args = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
      args[_key4] = arguments[_key4];
    }

    this.addMessage.apply(this, ['warn', this.prefix].concat(args));

    if (this.enabled) {
      var _console3;

      (_console3 = console).warn.apply(_console3, [this.prefix].concat(args));
    }
  };

  _proto.debug = function debug() {
    for (var _len5 = arguments.length, args = new Array(_len5), _key5 = 0; _key5 < _len5; _key5++) {
      args[_key5] = arguments[_key5];
    }

    this.addMessage.apply(this, ['debug', this.prefix].concat(args));

    if (this.enabled) {
      var _console4;

      (_console4 = console).log.apply(_console4, ['%c' + this.prefix, this.css].concat(args));
    }
  };

  return Log;
}();

exports["default"] = Log;
var _logs = {};

var init = function init(prefix, enabled) {
  var enab = typeof enabled === 'boolean' ? enabled : false;
  var instance = new Log(prefix, enab);
  _logs[prefix] = instance;
  return instance;
};

exports.init = init;

var enable = function enable(enabled) {
  for (var _i = 0, _Object$keys = Object.keys(_logs); _i < _Object$keys.length; _i++) {
    var l = _Object$keys[_i];
    _logs[l].enabled = enabled;
  }
};

exports.enable = enable;

var getLog = function getLog(args) {
  // if
  var logs = [];

  for (var _i2 = 0, _Object$keys2 = Object.keys(_logs); _i2 < _Object$keys2.length; _i2++) {
    var l = _Object$keys2[_i2];
    logs = logs.concat(_logs[l].messages);
  }

  logs.sort(function (a, b) {
    return a.timestamp - b.timestamp;
  });
  return logs;
};

exports.getLog = getLog;

var enableByPrefix = function enableByPrefix(prefix, enabled) {
  if (_logs[prefix]) {
    _logs[prefix].enabled = enabled;
  }
}; // TODO: enable/disable log at runtime


exports.enableByPrefix = enableByPrefix;

var popupConsole = function popupConsole(tag, postMessage) {
  var c = global.console;
  var orig = {
    error: c.error,
    // warn: c.warn,
    info: c.info,
    debug: c.debug,
    log: c.log
  };
  var log = [];

  var inject = function inject(method, level) {
    return function () {
      // args.unshift('[popup.js]');
      var time = new Date().toUTCString();

      for (var _len6 = arguments.length, args = new Array(_len6), _key6 = 0; _key6 < _len6; _key6++) {
        args[_key6] = arguments[_key6];
      }

      log.push([level, time].concat(args));
      postMessage.apply(_this, [{
        type: tag,
        level: level,
        time: time,
        args: JSON.stringify(args)
      }]);
      return method.apply(c, args);
    };
  };

  for (var level in orig) {
    c[level] = inject(orig[level], level);
  }
};

exports.popupConsole = popupConsole;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(17)))

/***/ }),

/***/ 1657:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.parseMessage = void 0;

// parse MessageEvent .data into CoreMessage
var parseMessage = function parseMessage(messageData) {
  var message = {
    event: messageData.event,
    type: messageData.type,
    payload: messageData.payload
  };

  if (typeof messageData.id === 'number') {
    message.id = messageData.id;
  }

  if (typeof messageData.success === 'boolean') {
    message.success = messageData.success;
  }

  return message;
};

exports.parseMessage = parseMessage;

/***/ }),

/***/ 1658:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(334);

exports.__esModule = true;
exports.parse = exports.DEFAULT_PRIORITY = void 0;

var _defineProperty2 = _interopRequireDefault(__webpack_require__(1631));

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

/*
 * Initial settings for connect.
 * It could be changed by passing values into TrezorConnect.init(...) method
 */
var VERSION = '7.0.5';
var versionN = VERSION.split('.').map(function (s) {
  return parseInt(s);
});
var DIRECTORY = "" + versionN[0] + (versionN[1] > 0 ? "." + versionN[1] : '') + "/";
var DEFAULT_DOMAIN = "https://connect.trezor.io/" + DIRECTORY;
var DEFAULT_PRIORITY = 2;
exports.DEFAULT_PRIORITY = DEFAULT_PRIORITY;
var initialSettings = {
  configSrc: 'data/config.json',
  // constant
  version: VERSION,
  // constant
  debug: false,
  origin: null,
  priority: DEFAULT_PRIORITY,
  trustedHost: false,
  connectSrc: DEFAULT_DOMAIN,
  iframeSrc: DEFAULT_DOMAIN + "iframe.html",
  popup: true,
  popupSrc: DEFAULT_DOMAIN + "popup.html",
  webusbSrc: DEFAULT_DOMAIN + "webusb.html",
  transportReconnect: false,
  webusb: true,
  pendingTransportEvent: true,
  supportedBrowser: typeof navigator !== 'undefined' ? !/Trident|MSIE/.test(navigator.userAgent) : true,
  extension: null,
  manifest: null
};
var currentSettings = initialSettings;

var parseManifest = function parseManifest(manifest) {
  if (typeof manifest.email !== 'string') {
    return null;
  }

  if (typeof manifest.appUrl !== 'string') {
    return null;
  }

  return {
    email: manifest.email,
    appUrl: manifest.appUrl
  };
};

var parse = function parse(input) {
  if (!input) return currentSettings;

  var settings = _objectSpread({}, currentSettings);

  if (input.hasOwnProperty('debug')) {
    if (Array.isArray(input)) {// enable log with prefix
    }

    if (typeof input.debug === 'boolean') {
      settings.debug = input.debug;
    } else if (typeof input.debug === 'string') {
      settings.debug = input.debug === 'true';
    }
  }

  if (typeof input.connectSrc === 'string') {
    // TODO: escape string, validate url
    settings.connectSrc = input.connectSrc;
  } else if (typeof window !== 'undefined' && typeof window.__TREZOR_CONNECT_SRC === 'string') {
    settings.connectSrc = window.__TREZOR_CONNECT_SRC;
  }

  settings.iframeSrc = settings.connectSrc + "iframe.html";
  settings.popupSrc = settings.connectSrc + "popup.html";
  settings.webusbSrc = settings.connectSrc + "webusb.html";

  if (typeof input.transportReconnect === 'boolean') {
    settings.transportReconnect = input.transportReconnect;
  }

  if (typeof input.webusb === 'boolean') {
    settings.webusb = input.webusb;
  }

  if (typeof input.popup === 'boolean') {
    settings.popup = input.popup;
  }

  if (typeof input.pendingTransportEvent === 'boolean') {
    settings.pendingTransportEvent = input.pendingTransportEvent;
  } // local files


  if (typeof window !== 'undefined' && window.location.protocol === 'file:') {
    settings.origin = "file://" + window.location.pathname;
    settings.webusb = false;
  }

  if (typeof input.extension === 'string') {
    settings.extension = input.extension;
  }

  if (typeof input.manifest === 'object') {
    settings.manifest = parseManifest(input.manifest);
  }

  currentSettings = settings;
  return currentSettings;
};

exports.parse = parse;

/***/ }),

/***/ 1659:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(1630);

exports.__esModule = true;

var _constants = __webpack_require__(1636);

var TRANSPORT = _interopRequireWildcard(__webpack_require__(1637));

var POPUP = _interopRequireWildcard(__webpack_require__(1632));

var UI = _interopRequireWildcard(__webpack_require__(1633));

var DEVICE = _interopRequireWildcard(__webpack_require__(1638));

var P = _interopRequireWildcard(__webpack_require__(1660));

var R = _interopRequireWildcard(__webpack_require__(1661));

Object.keys(R).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  exports[key] = R[key];
});

var CARDANO = _interopRequireWildcard(__webpack_require__(1662));

var RIPPLE = _interopRequireWildcard(__webpack_require__(1663));

var ETHEREUM = _interopRequireWildcard(__webpack_require__(1664));

var NEM = _interopRequireWildcard(__webpack_require__(1665));

var STELLAR = _interopRequireWildcard(__webpack_require__(1666));

var LISK = _interopRequireWildcard(__webpack_require__(1667));

var TEZOS = _interopRequireWildcard(__webpack_require__(1668));

var EOS = _interopRequireWildcard(__webpack_require__(1669));

var _coinInfo = __webpack_require__(1670);

Object.keys(_coinInfo).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  exports[key] = _coinInfo[key];
});

/***/ }),

/***/ 1660:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/***/ }),

/***/ 1661:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/***/ }),

/***/ 1662:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/***/ }),

/***/ 1663:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/***/ }),

/***/ 1664:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/***/ }),

/***/ 1665:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/***/ }),

/***/ 1666:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/***/ }),

/***/ 1667:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/***/ }),

/***/ 1668:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/***/ }),

/***/ 1669:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/***/ }),

/***/ 1670:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/***/ }),

/***/ 1671:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(1630);

var BLOCKCHAIN = _interopRequireWildcard(__webpack_require__(1639));

/***/ }),

/***/ 1672:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/***/ }),

/***/ 1673:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(1630);

var _interopRequireDefault = __webpack_require__(334);

exports.__esModule = true;
var _exportNames = {
  UI_EVENT: true,
  DEVICE_EVENT: true,
  RESPONSE_EVENT: true,
  TRANSPORT_EVENT: true,
  BLOCKCHAIN_EVENT: true,
  TRANSPORT: true,
  UI: true,
  DEVICE: true,
  BLOCKCHAIN: true
};
exports.BLOCKCHAIN = exports.DEVICE = exports.UI = exports.TRANSPORT = exports["default"] = void 0;

var _defineProperty2 = _interopRequireDefault(__webpack_require__(1631));

var _regenerator = _interopRequireDefault(__webpack_require__(513));

var _asyncToGenerator2 = _interopRequireDefault(__webpack_require__(514));

var _events = _interopRequireDefault(__webpack_require__(50));

var _constants = __webpack_require__(1636);

exports.UI_EVENT = _constants.UI_EVENT;
exports.DEVICE_EVENT = _constants.DEVICE_EVENT;
exports.RESPONSE_EVENT = _constants.RESPONSE_EVENT;
exports.TRANSPORT_EVENT = _constants.TRANSPORT_EVENT;
exports.BLOCKCHAIN_EVENT = _constants.BLOCKCHAIN_EVENT;

var TRANSPORT = _interopRequireWildcard(__webpack_require__(1637));

exports.TRANSPORT = TRANSPORT;

var POPUP = _interopRequireWildcard(__webpack_require__(1632));

var IFRAME = _interopRequireWildcard(__webpack_require__(1643));

var UI = _interopRequireWildcard(__webpack_require__(1633));

exports.UI = UI;

var DEVICE = _interopRequireWildcard(__webpack_require__(1638));

exports.DEVICE = DEVICE;

var BLOCKCHAIN = _interopRequireWildcard(__webpack_require__(1639));

exports.BLOCKCHAIN = BLOCKCHAIN;

var ERROR = _interopRequireWildcard(__webpack_require__(1634));

var _PopupManager = _interopRequireDefault(__webpack_require__(1649));

var iframe = _interopRequireWildcard(__webpack_require__(1653));

var _button = _interopRequireDefault(__webpack_require__(1655));

var _debug = _interopRequireWildcard(__webpack_require__(1656));

var _message = __webpack_require__(1657);

var _ConnectSettings = __webpack_require__(1658);

var $T = _interopRequireWildcard(__webpack_require__(1659));

var _blockchainEvent = __webpack_require__(1671);

Object.keys(_blockchainEvent).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  exports[key] = _blockchainEvent[key];
});

var _account = __webpack_require__(1672);

Object.keys(_account).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  exports[key] = _account[key];
});

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var eventEmitter = new _events["default"]();

var _log = (0, _debug.init)('[trezor-connect.js]');

var _settings;

var _popupManager;

var initPopupManager = function initPopupManager() {
  var pm = new _PopupManager["default"](_settings);
  pm.on(POPUP.CLOSED, function () {
    iframe.postMessage({
      type: POPUP.CLOSED
    }, false);
  });
  return pm;
}; // handle message received from iframe


var handleMessage = function handleMessage(messageEvent) {
  // ignore messages from domain other then iframe origin
  if (messageEvent.origin !== iframe.origin) return;
  var message = (0, _message.parseMessage)(messageEvent.data); // TODO: destructuring with type
  // https://github.com/Microsoft/TypeScript/issues/240
  // const { id, event, type, data, error }: CoreMessage = message;

  var id = message.id || 0;
  var event = message.event;
  var type = message.type;
  var payload = message.payload;

  _log.log('handleMessage', message);

  switch (event) {
    case _constants.RESPONSE_EVENT:
      if (iframe.messagePromises[id]) {
        // clear unnecessary fields from message object
        delete message.type;
        delete message.event; // delete message.id;
        // message.__id = id;
        // resolve message promise (send result of call method)

        iframe.messagePromises[id].resolve(message);
        delete iframe.messagePromises[id];
      } else {
        _log.warn("Unknown message id " + id);
      }

      break;

    case _constants.DEVICE_EVENT:
      // pass DEVICE event up to html
      eventEmitter.emit(event, message);
      eventEmitter.emit(type, payload); // DEVICE_EVENT also emit single events (connect/disconnect...)

      break;

    case _constants.TRANSPORT_EVENT:
      eventEmitter.emit(event, message);
      eventEmitter.emit(type, payload);
      break;

    case _constants.BLOCKCHAIN_EVENT:
      eventEmitter.emit(event, message);
      eventEmitter.emit(type, payload);
      break;

    case _constants.UI_EVENT:
      if (type === IFRAME.BOOTSTRAP) {
        iframe.clearTimeout();
        break;
      } else if (type === POPUP.BOOTSTRAP) {
        // Popup did open but is still loading JS
        _popupManager.cancelOpenTimeout();

        break;
      } // pass UI event up


      eventEmitter.emit(event, message);
      eventEmitter.emit(type, payload);

      if (type === UI.IFRAME_HANDSHAKE) {
        if (payload.error) {
          iframe.initPromise.reject(new Error(payload.error));
        } else {
          _popupManager.setBroadcast(payload.broadcast);

          iframe.initPromise.resolve();
        }
      } else if (type === POPUP.CANCEL_POPUP_REQUEST) {
        _popupManager.cancel();
      } else if (type === UI.CLOSE_UI_WINDOW) {
        _popupManager.close();
      }

      break;

    default:
      _log.log('Undefined message', event, messageEvent);

  }
};

var init =
/*#__PURE__*/
function () {
  var _ref = (0, _asyncToGenerator2["default"])(
  /*#__PURE__*/
  _regenerator["default"].mark(function _callee(settings) {
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            if (settings === void 0) {
              settings = {};
            }

            if (!iframe.instance) {
              _context.next = 3;
              break;
            }

            throw ERROR.IFRAME_INITIALIZED;

          case 3:
            if (!_settings) {
              _settings = (0, _ConnectSettings.parse)(settings);
            }

            if (_settings.manifest) {
              _context.next = 6;
              break;
            }

            throw ERROR.MANIFEST_NOT_SET;

          case 6:
            if (_settings.supportedBrowser) {
              _context.next = 8;
              break;
            }

            throw ERROR.BROWSER_NOT_SUPPORTED;

          case 8:
            if (!_popupManager) {
              _popupManager = initPopupManager();
            }

            _log.enabled = _settings.debug;
            window.addEventListener('message', handleMessage);
            window.addEventListener('beforeunload', function () {
              if (_popupManager) {
                _popupManager.onBeforeUnload();
              }

              iframe.dispose();
            });
            _context.next = 14;
            return iframe.init(_settings);

          case 14:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function init(_x) {
    return _ref.apply(this, arguments);
  };
}();

var call =
/*#__PURE__*/
function () {
  var _ref2 = (0, _asyncToGenerator2["default"])(
  /*#__PURE__*/
  _regenerator["default"].mark(function _callee2(params) {
    var response;
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            if (!(!iframe.instance && !iframe.timeout)) {
              _context2.next = 19;
              break;
            }

            // init popup with lazy loading before iframe initialization
            _settings = (0, _ConnectSettings.parse)(_settings);

            if (_settings.manifest) {
              _context2.next = 4;
              break;
            }

            return _context2.abrupt("return", {
              success: false,
              payload: {
                error: ERROR.MANIFEST_NOT_SET.message
              }
            });

          case 4:
            if (_settings.supportedBrowser) {
              _context2.next = 6;
              break;
            }

            return _context2.abrupt("return", {
              success: false,
              payload: {
                error: ERROR.BROWSER_NOT_SUPPORTED.message
              }
            });

          case 6:
            _popupManager = initPopupManager();

            _popupManager.request(true); // auto init with default settings


            _context2.prev = 8;
            _context2.next = 11;
            return init(_settings);

          case 11:
            _context2.next = 13;
            return _popupManager.resolveLazyLoad();

          case 13:
            _context2.next = 19;
            break;

          case 15:
            _context2.prev = 15;
            _context2.t0 = _context2["catch"](8);

            _popupManager.close();

            return _context2.abrupt("return", {
              success: false,
              payload: {
                error: _context2.t0
              }
            });

          case 19:
            if (!iframe.timeout) {
              _context2.next = 23;
              break;
            }

            return _context2.abrupt("return", {
              success: false,
              payload: {
                error: ERROR.NO_IFRAME.message
              }
            });

          case 23:
            if (!iframe.error) {
              _context2.next = 25;
              break;
            }

            return _context2.abrupt("return", {
              success: false,
              payload: {
                error: iframe.error
              }
            });

          case 25:
            // request popup window it might be used in the future
            // if (eventEmitter.listeners(UI_EVENT).length < 1) { _popupManager.request(params); }
            if (_settings.popup) {
              _popupManager.request();
            } // post message to iframe


            _context2.prev = 26;
            _context2.next = 29;
            return iframe.postMessage({
              type: IFRAME.CALL,
              payload: params
            });

          case 29:
            response = _context2.sent;

            if (!response) {
              _context2.next = 35;
              break;
            }

            // TODO: unlock popupManager request only if there wasn't error "in progress"
            if (response.payload.error !== ERROR.DEVICE_CALL_IN_PROGRESS.message) {
              _popupManager.unlock();
            }

            return _context2.abrupt("return", response);

          case 35:
            _popupManager.unlock(); // TODO


            return _context2.abrupt("return", {
              success: false,
              payload: {
                error: 'No response from iframe'
              }
            });

          case 37:
            _context2.next = 43;
            break;

          case 39:
            _context2.prev = 39;
            _context2.t1 = _context2["catch"](26);

            _log.error('__call error', _context2.t1);

            return _context2.abrupt("return", _context2.t1);

          case 43:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[8, 15], [26, 39]]);
  }));

  return function call(_x2) {
    return _ref2.apply(this, arguments);
  };
}();

var customMessageResponse = function customMessageResponse(payload) {
  iframe.postMessage({
    event: _constants.UI_EVENT,
    type: UI.CUSTOM_MESSAGE_RESPONSE,
    payload: payload
  });
};

var TrezorConnect = function TrezorConnect() {};

(0, _defineProperty2["default"])(TrezorConnect, "manifest", function (data) {
  _settings = (0, _ConnectSettings.parse)({
    manifest: data
  });
});
(0, _defineProperty2["default"])(TrezorConnect, "getSettings",
/*#__PURE__*/
(0, _asyncToGenerator2["default"])(
/*#__PURE__*/
_regenerator["default"].mark(function _callee3() {
  return _regenerator["default"].wrap(function _callee3$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          if (iframe.instance) {
            _context3.next = 2;
            break;
          }

          return _context3.abrupt("return", {
            success: false,
            payload: {
              error: 'Iframe not initialized yet, you need to call TrezorConnect.init or any other method first.'
            }
          });

        case 2:
          _context3.next = 4;
          return call({
            method: 'getSettings'
          });

        case 4:
          return _context3.abrupt("return", _context3.sent);

        case 5:
        case "end":
          return _context3.stop();
      }
    }
  }, _callee3);
})));
(0, _defineProperty2["default"])(TrezorConnect, "init",
/*#__PURE__*/
function () {
  var _ref4 = (0, _asyncToGenerator2["default"])(
  /*#__PURE__*/
  _regenerator["default"].mark(function _callee4(settings) {
    return _regenerator["default"].wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _context4.next = 2;
            return init(settings);

          case 2:
            return _context4.abrupt("return", _context4.sent);

          case 3:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4);
  }));

  return function (_x3) {
    return _ref4.apply(this, arguments);
  };
}());
(0, _defineProperty2["default"])(TrezorConnect, "on", function (type, fn) {
  eventEmitter.on(type, fn);
});
(0, _defineProperty2["default"])(TrezorConnect, "off", function (type, fn) {
  eventEmitter.removeListener(type, fn);
});
(0, _defineProperty2["default"])(TrezorConnect, "uiResponse", function (response) {
  iframe.postMessage(_objectSpread({
    event: _constants.UI_EVENT
  }, response));
});
(0, _defineProperty2["default"])(TrezorConnect, "changeSettings", function (settings) {
  var parsedSettings = (0, _ConnectSettings.parse)(settings);
  _log.enabled = parsedSettings.debug;
  iframe.postMessage({
    type: UI.CHANGE_SETTINGS,
    payload: parsedSettings
  }, false);
});
(0, _defineProperty2["default"])(TrezorConnect, "blockchainDisconnect",
/*#__PURE__*/
function () {
  var _ref5 = (0, _asyncToGenerator2["default"])(
  /*#__PURE__*/
  _regenerator["default"].mark(function _callee5(params) {
    return _regenerator["default"].wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            _context5.next = 2;
            return call(_objectSpread({
              method: 'blockchainDisconnect'
            }, params));

          case 2:
            return _context5.abrupt("return", _context5.sent);

          case 3:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5);
  }));

  return function (_x4) {
    return _ref5.apply(this, arguments);
  };
}());
(0, _defineProperty2["default"])(TrezorConnect, "blockchainEstimateFee",
/*#__PURE__*/
function () {
  var _ref6 = (0, _asyncToGenerator2["default"])(
  /*#__PURE__*/
  _regenerator["default"].mark(function _callee6(params) {
    return _regenerator["default"].wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            _context6.next = 2;
            return call(_objectSpread({
              method: 'blockchainEstimateFee'
            }, params));

          case 2:
            return _context6.abrupt("return", _context6.sent);

          case 3:
          case "end":
            return _context6.stop();
        }
      }
    }, _callee6);
  }));

  return function (_x5) {
    return _ref6.apply(this, arguments);
  };
}());
(0, _defineProperty2["default"])(TrezorConnect, "blockchainSubscribe",
/*#__PURE__*/
function () {
  var _ref7 = (0, _asyncToGenerator2["default"])(
  /*#__PURE__*/
  _regenerator["default"].mark(function _callee7(params) {
    return _regenerator["default"].wrap(function _callee7$(_context7) {
      while (1) {
        switch (_context7.prev = _context7.next) {
          case 0:
            _context7.next = 2;
            return call(_objectSpread({
              method: 'blockchainSubscribe'
            }, params));

          case 2:
            return _context7.abrupt("return", _context7.sent);

          case 3:
          case "end":
            return _context7.stop();
        }
      }
    }, _callee7);
  }));

  return function (_x6) {
    return _ref7.apply(this, arguments);
  };
}());
(0, _defineProperty2["default"])(TrezorConnect, "blockchainUnsubscribe",
/*#__PURE__*/
function () {
  var _ref8 = (0, _asyncToGenerator2["default"])(
  /*#__PURE__*/
  _regenerator["default"].mark(function _callee8(params) {
    return _regenerator["default"].wrap(function _callee8$(_context8) {
      while (1) {
        switch (_context8.prev = _context8.next) {
          case 0:
            _context8.next = 2;
            return call(_objectSpread({
              method: 'blockchainUnsubscribe'
            }, params));

          case 2:
            return _context8.abrupt("return", _context8.sent);

          case 3:
          case "end":
            return _context8.stop();
        }
      }
    }, _callee8);
  }));

  return function (_x7) {
    return _ref8.apply(this, arguments);
  };
}());
(0, _defineProperty2["default"])(TrezorConnect, "customMessage",
/*#__PURE__*/
function () {
  var _ref9 = (0, _asyncToGenerator2["default"])(
  /*#__PURE__*/
  _regenerator["default"].mark(function _callee10(params) {
    var callback, customMessageListener, response;
    return _regenerator["default"].wrap(function _callee10$(_context10) {
      while (1) {
        switch (_context10.prev = _context10.next) {
          case 0:
            if (!(typeof params.callback !== 'function')) {
              _context10.next = 2;
              break;
            }

            return _context10.abrupt("return", {
              success: false,
              payload: {
                error: 'Parameter "callback" is not a function'
              }
            });

          case 2:
            // TODO: set message listener only if iframe is loaded correctly
            callback = params.callback;
            delete params.callback;

            customMessageListener =
            /*#__PURE__*/
            function () {
              var _ref10 = (0, _asyncToGenerator2["default"])(
              /*#__PURE__*/
              _regenerator["default"].mark(function _callee9(event) {
                var data, payload;
                return _regenerator["default"].wrap(function _callee9$(_context9) {
                  while (1) {
                    switch (_context9.prev = _context9.next) {
                      case 0:
                        data = event.data;

                        if (!(data && data.type === UI.CUSTOM_MESSAGE_REQUEST)) {
                          _context9.next = 6;
                          break;
                        }

                        _context9.next = 4;
                        return callback(data.payload);

                      case 4:
                        payload = _context9.sent;

                        if (payload) {
                          customMessageResponse(payload);
                        } else {
                          customMessageResponse({
                            message: 'release'
                          });
                        }

                      case 6:
                      case "end":
                        return _context9.stop();
                    }
                  }
                }, _callee9);
              }));

              return function customMessageListener(_x9) {
                return _ref10.apply(this, arguments);
              };
            }();

            window.addEventListener('message', customMessageListener, false);
            _context10.next = 8;
            return call(_objectSpread({
              method: 'customMessage'
            }, params));

          case 8:
            response = _context10.sent;
            window.removeEventListener('message', customMessageListener);
            return _context10.abrupt("return", response);

          case 11:
          case "end":
            return _context10.stop();
        }
      }
    }, _callee10);
  }));

  return function (_x8) {
    return _ref9.apply(this, arguments);
  };
}());
(0, _defineProperty2["default"])(TrezorConnect, "requestLogin",
/*#__PURE__*/
function () {
  var _ref11 = (0, _asyncToGenerator2["default"])(
  /*#__PURE__*/
  _regenerator["default"].mark(function _callee12(params) {
    var callback, loginChallengeListener, response;
    return _regenerator["default"].wrap(function _callee12$(_context12) {
      while (1) {
        switch (_context12.prev = _context12.next) {
          case 0:
            if (!(typeof params.callback === 'function')) {
              _context12.next = 12;
              break;
            }

            callback = params.callback;
            delete params.callback; // delete callback value. this field cannot be sent using postMessage function
            // TODO: set message listener only if iframe is loaded correctly

            loginChallengeListener =
            /*#__PURE__*/
            function () {
              var _ref12 = (0, _asyncToGenerator2["default"])(
              /*#__PURE__*/
              _regenerator["default"].mark(function _callee11(event) {
                var data, payload;
                return _regenerator["default"].wrap(function _callee11$(_context11) {
                  while (1) {
                    switch (_context11.prev = _context11.next) {
                      case 0:
                        data = event.data;

                        if (!(data && data.type === UI.LOGIN_CHALLENGE_REQUEST)) {
                          _context11.next = 13;
                          break;
                        }

                        _context11.prev = 2;
                        _context11.next = 5;
                        return callback();

                      case 5:
                        payload = _context11.sent;
                        iframe.postMessage({
                          event: _constants.UI_EVENT,
                          type: UI.LOGIN_CHALLENGE_RESPONSE,
                          payload: payload
                        });
                        _context11.next = 13;
                        break;

                      case 9:
                        _context11.prev = 9;
                        _context11.t0 = _context11["catch"](2);
                        console.warn('TrezorConnect.requestLogin: callback error', _context11.t0);
                        iframe.postMessage({
                          event: _constants.UI_EVENT,
                          type: UI.LOGIN_CHALLENGE_RESPONSE,
                          payload: _context11.t0.message
                        });

                      case 13:
                      case "end":
                        return _context11.stop();
                    }
                  }
                }, _callee11, null, [[2, 9]]);
              }));

              return function loginChallengeListener(_x11) {
                return _ref12.apply(this, arguments);
              };
            }();

            window.addEventListener('message', loginChallengeListener, false);
            _context12.next = 7;
            return call(_objectSpread({
              method: 'requestLogin'
            }, params, {
              asyncChallenge: true
            }));

          case 7:
            response = _context12.sent;
            window.removeEventListener('message', loginChallengeListener);
            return _context12.abrupt("return", response);

          case 12:
            _context12.next = 14;
            return call(_objectSpread({
              method: 'requestLogin'
            }, params));

          case 14:
            return _context12.abrupt("return", _context12.sent);

          case 15:
          case "end":
            return _context12.stop();
        }
      }
    }, _callee12);
  }));

  return function (_x10) {
    return _ref11.apply(this, arguments);
  };
}());
(0, _defineProperty2["default"])(TrezorConnect, "resetDevice",
/*#__PURE__*/
function () {
  var _ref13 = (0, _asyncToGenerator2["default"])(
  /*#__PURE__*/
  _regenerator["default"].mark(function _callee13(params) {
    return _regenerator["default"].wrap(function _callee13$(_context13) {
      while (1) {
        switch (_context13.prev = _context13.next) {
          case 0:
            _context13.next = 2;
            return call(_objectSpread({
              method: 'resetDevice'
            }, params));

          case 2:
            return _context13.abrupt("return", _context13.sent);

          case 3:
          case "end":
            return _context13.stop();
        }
      }
    }, _callee13);
  }));

  return function (_x12) {
    return _ref13.apply(this, arguments);
  };
}());
(0, _defineProperty2["default"])(TrezorConnect, "cardanoGetAddress",
/*#__PURE__*/
function () {
  var _ref14 = (0, _asyncToGenerator2["default"])(
  /*#__PURE__*/
  _regenerator["default"].mark(function _callee14(params) {
    var useEventListener;
    return _regenerator["default"].wrap(function _callee14$(_context14) {
      while (1) {
        switch (_context14.prev = _context14.next) {
          case 0:
            useEventListener = eventEmitter.listenerCount(UI.ADDRESS_VALIDATION) > 0;
            _context14.next = 3;
            return call(_objectSpread({
              method: 'cardanoGetAddress'
            }, params, {
              useEventListener: useEventListener
            }));

          case 3:
            return _context14.abrupt("return", _context14.sent);

          case 4:
          case "end":
            return _context14.stop();
        }
      }
    }, _callee14);
  }));

  return function (_x13) {
    return _ref14.apply(this, arguments);
  };
}());
(0, _defineProperty2["default"])(TrezorConnect, "cardanoGetPublicKey",
/*#__PURE__*/
function () {
  var _ref15 = (0, _asyncToGenerator2["default"])(
  /*#__PURE__*/
  _regenerator["default"].mark(function _callee15(params) {
    return _regenerator["default"].wrap(function _callee15$(_context15) {
      while (1) {
        switch (_context15.prev = _context15.next) {
          case 0:
            _context15.next = 2;
            return call(_objectSpread({
              method: 'cardanoGetPublicKey'
            }, params));

          case 2:
            return _context15.abrupt("return", _context15.sent);

          case 3:
          case "end":
            return _context15.stop();
        }
      }
    }, _callee15);
  }));

  return function (_x14) {
    return _ref15.apply(this, arguments);
  };
}());
(0, _defineProperty2["default"])(TrezorConnect, "cardanoSignTransaction",
/*#__PURE__*/
function () {
  var _ref16 = (0, _asyncToGenerator2["default"])(
  /*#__PURE__*/
  _regenerator["default"].mark(function _callee16(params) {
    return _regenerator["default"].wrap(function _callee16$(_context16) {
      while (1) {
        switch (_context16.prev = _context16.next) {
          case 0:
            _context16.next = 2;
            return call(_objectSpread({
              method: 'cardanoSignTransaction'
            }, params));

          case 2:
            return _context16.abrupt("return", _context16.sent);

          case 3:
          case "end":
            return _context16.stop();
        }
      }
    }, _callee16);
  }));

  return function (_x15) {
    return _ref16.apply(this, arguments);
  };
}());
(0, _defineProperty2["default"])(TrezorConnect, "cipherKeyValue",
/*#__PURE__*/
function () {
  var _ref17 = (0, _asyncToGenerator2["default"])(
  /*#__PURE__*/
  _regenerator["default"].mark(function _callee17(params) {
    return _regenerator["default"].wrap(function _callee17$(_context17) {
      while (1) {
        switch (_context17.prev = _context17.next) {
          case 0:
            _context17.next = 2;
            return call(_objectSpread({
              method: 'cipherKeyValue'
            }, params));

          case 2:
            return _context17.abrupt("return", _context17.sent);

          case 3:
          case "end":
            return _context17.stop();
        }
      }
    }, _callee17);
  }));

  return function (_x16) {
    return _ref17.apply(this, arguments);
  };
}());
(0, _defineProperty2["default"])(TrezorConnect, "composeTransaction",
/*#__PURE__*/
function () {
  var _ref18 = (0, _asyncToGenerator2["default"])(
  /*#__PURE__*/
  _regenerator["default"].mark(function _callee18(params) {
    return _regenerator["default"].wrap(function _callee18$(_context18) {
      while (1) {
        switch (_context18.prev = _context18.next) {
          case 0:
            _context18.next = 2;
            return call(_objectSpread({
              method: 'composeTransaction'
            }, params));

          case 2:
            return _context18.abrupt("return", _context18.sent);

          case 3:
          case "end":
            return _context18.stop();
        }
      }
    }, _callee18);
  }));

  return function (_x17) {
    return _ref18.apply(this, arguments);
  };
}());
(0, _defineProperty2["default"])(TrezorConnect, "debugLinkDecision",
/*#__PURE__*/
function () {
  var _ref19 = (0, _asyncToGenerator2["default"])(
  /*#__PURE__*/
  _regenerator["default"].mark(function _callee19(params) {
    return _regenerator["default"].wrap(function _callee19$(_context19) {
      while (1) {
        switch (_context19.prev = _context19.next) {
          case 0:
            _context19.next = 2;
            return call(_objectSpread({
              method: 'debugLinkDecision'
            }, params));

          case 2:
            return _context19.abrupt("return", _context19.sent);

          case 3:
          case "end":
            return _context19.stop();
        }
      }
    }, _callee19);
  }));

  return function (_x18) {
    return _ref19.apply(this, arguments);
  };
}());
(0, _defineProperty2["default"])(TrezorConnect, "debugLinkGetState",
/*#__PURE__*/
function () {
  var _ref20 = (0, _asyncToGenerator2["default"])(
  /*#__PURE__*/
  _regenerator["default"].mark(function _callee20(params) {
    return _regenerator["default"].wrap(function _callee20$(_context20) {
      while (1) {
        switch (_context20.prev = _context20.next) {
          case 0:
            _context20.next = 2;
            return call(_objectSpread({
              method: 'debugLinkGetState'
            }, params));

          case 2:
            return _context20.abrupt("return", _context20.sent);

          case 3:
          case "end":
            return _context20.stop();
        }
      }
    }, _callee20);
  }));

  return function (_x19) {
    return _ref20.apply(this, arguments);
  };
}());
(0, _defineProperty2["default"])(TrezorConnect, "ethereumGetAccountInfo",
/*#__PURE__*/
function () {
  var _ref21 = (0, _asyncToGenerator2["default"])(
  /*#__PURE__*/
  _regenerator["default"].mark(function _callee21(params) {
    return _regenerator["default"].wrap(function _callee21$(_context21) {
      while (1) {
        switch (_context21.prev = _context21.next) {
          case 0:
            _context21.next = 2;
            return call(_objectSpread({
              method: 'ethereumGetAccountInfo'
            }, params));

          case 2:
            return _context21.abrupt("return", _context21.sent);

          case 3:
          case "end":
            return _context21.stop();
        }
      }
    }, _callee21);
  }));

  return function (_x20) {
    return _ref21.apply(this, arguments);
  };
}());
(0, _defineProperty2["default"])(TrezorConnect, "ethereumGetAddress",
/*#__PURE__*/
function () {
  var _ref22 = (0, _asyncToGenerator2["default"])(
  /*#__PURE__*/
  _regenerator["default"].mark(function _callee22(params) {
    var useEventListener;
    return _regenerator["default"].wrap(function _callee22$(_context22) {
      while (1) {
        switch (_context22.prev = _context22.next) {
          case 0:
            useEventListener = eventEmitter.listenerCount(UI.ADDRESS_VALIDATION) > 0;
            _context22.next = 3;
            return call(_objectSpread({
              method: 'ethereumGetAddress'
            }, params, {
              useEventListener: useEventListener
            }));

          case 3:
            return _context22.abrupt("return", _context22.sent);

          case 4:
          case "end":
            return _context22.stop();
        }
      }
    }, _callee22);
  }));

  return function (_x21) {
    return _ref22.apply(this, arguments);
  };
}());
(0, _defineProperty2["default"])(TrezorConnect, "ethereumGetPublicKey",
/*#__PURE__*/
function () {
  var _ref23 = (0, _asyncToGenerator2["default"])(
  /*#__PURE__*/
  _regenerator["default"].mark(function _callee23(params) {
    return _regenerator["default"].wrap(function _callee23$(_context23) {
      while (1) {
        switch (_context23.prev = _context23.next) {
          case 0:
            _context23.next = 2;
            return call(_objectSpread({
              method: 'ethereumGetPublicKey'
            }, params));

          case 2:
            return _context23.abrupt("return", _context23.sent);

          case 3:
          case "end":
            return _context23.stop();
        }
      }
    }, _callee23);
  }));

  return function (_x22) {
    return _ref23.apply(this, arguments);
  };
}());
(0, _defineProperty2["default"])(TrezorConnect, "ethereumSignMessage",
/*#__PURE__*/
function () {
  var _ref24 = (0, _asyncToGenerator2["default"])(
  /*#__PURE__*/
  _regenerator["default"].mark(function _callee24(params) {
    return _regenerator["default"].wrap(function _callee24$(_context24) {
      while (1) {
        switch (_context24.prev = _context24.next) {
          case 0:
            _context24.next = 2;
            return call(_objectSpread({
              method: 'ethereumSignMessage'
            }, params));

          case 2:
            return _context24.abrupt("return", _context24.sent);

          case 3:
          case "end":
            return _context24.stop();
        }
      }
    }, _callee24);
  }));

  return function (_x23) {
    return _ref24.apply(this, arguments);
  };
}());
(0, _defineProperty2["default"])(TrezorConnect, "ethereumSignTransaction",
/*#__PURE__*/
function () {
  var _ref25 = (0, _asyncToGenerator2["default"])(
  /*#__PURE__*/
  _regenerator["default"].mark(function _callee25(params) {
    return _regenerator["default"].wrap(function _callee25$(_context25) {
      while (1) {
        switch (_context25.prev = _context25.next) {
          case 0:
            _context25.next = 2;
            return call(_objectSpread({
              method: 'ethereumSignTransaction'
            }, params));

          case 2:
            return _context25.abrupt("return", _context25.sent);

          case 3:
          case "end":
            return _context25.stop();
        }
      }
    }, _callee25);
  }));

  return function (_x24) {
    return _ref25.apply(this, arguments);
  };
}());
(0, _defineProperty2["default"])(TrezorConnect, "ethereumVerifyMessage",
/*#__PURE__*/
function () {
  var _ref26 = (0, _asyncToGenerator2["default"])(
  /*#__PURE__*/
  _regenerator["default"].mark(function _callee26(params) {
    return _regenerator["default"].wrap(function _callee26$(_context26) {
      while (1) {
        switch (_context26.prev = _context26.next) {
          case 0:
            _context26.next = 2;
            return call(_objectSpread({
              method: 'ethereumVerifyMessage'
            }, params));

          case 2:
            return _context26.abrupt("return", _context26.sent);

          case 3:
          case "end":
            return _context26.stop();
        }
      }
    }, _callee26);
  }));

  return function (_x25) {
    return _ref26.apply(this, arguments);
  };
}());
(0, _defineProperty2["default"])(TrezorConnect, "getAccountInfo",
/*#__PURE__*/
function () {
  var _ref27 = (0, _asyncToGenerator2["default"])(
  /*#__PURE__*/
  _regenerator["default"].mark(function _callee27(params) {
    return _regenerator["default"].wrap(function _callee27$(_context27) {
      while (1) {
        switch (_context27.prev = _context27.next) {
          case 0:
            _context27.next = 2;
            return call(_objectSpread({
              method: 'getAccountInfo'
            }, params));

          case 2:
            return _context27.abrupt("return", _context27.sent);

          case 3:
          case "end":
            return _context27.stop();
        }
      }
    }, _callee27);
  }));

  return function (_x26) {
    return _ref27.apply(this, arguments);
  };
}());
(0, _defineProperty2["default"])(TrezorConnect, "getAddress",
/*#__PURE__*/
function () {
  var _ref28 = (0, _asyncToGenerator2["default"])(
  /*#__PURE__*/
  _regenerator["default"].mark(function _callee28(params) {
    var useEventListener;
    return _regenerator["default"].wrap(function _callee28$(_context28) {
      while (1) {
        switch (_context28.prev = _context28.next) {
          case 0:
            useEventListener = eventEmitter.listenerCount(UI.ADDRESS_VALIDATION) > 0;
            _context28.next = 3;
            return call(_objectSpread({
              method: 'getAddress'
            }, params, {
              useEventListener: useEventListener
            }));

          case 3:
            return _context28.abrupt("return", _context28.sent);

          case 4:
          case "end":
            return _context28.stop();
        }
      }
    }, _callee28);
  }));

  return function (_x27) {
    return _ref28.apply(this, arguments);
  };
}());
(0, _defineProperty2["default"])(TrezorConnect, "getDeviceState",
/*#__PURE__*/
function () {
  var _ref29 = (0, _asyncToGenerator2["default"])(
  /*#__PURE__*/
  _regenerator["default"].mark(function _callee29(params) {
    return _regenerator["default"].wrap(function _callee29$(_context29) {
      while (1) {
        switch (_context29.prev = _context29.next) {
          case 0:
            _context29.next = 2;
            return call(_objectSpread({
              method: 'getDeviceState'
            }, params));

          case 2:
            return _context29.abrupt("return", _context29.sent);

          case 3:
          case "end":
            return _context29.stop();
        }
      }
    }, _callee29);
  }));

  return function (_x28) {
    return _ref29.apply(this, arguments);
  };
}());
(0, _defineProperty2["default"])(TrezorConnect, "getFeatures",
/*#__PURE__*/
function () {
  var _ref30 = (0, _asyncToGenerator2["default"])(
  /*#__PURE__*/
  _regenerator["default"].mark(function _callee30(params) {
    return _regenerator["default"].wrap(function _callee30$(_context30) {
      while (1) {
        switch (_context30.prev = _context30.next) {
          case 0:
            _context30.next = 2;
            return call(_objectSpread({
              method: 'getFeatures'
            }, params));

          case 2:
            return _context30.abrupt("return", _context30.sent);

          case 3:
          case "end":
            return _context30.stop();
        }
      }
    }, _callee30);
  }));

  return function (_x29) {
    return _ref30.apply(this, arguments);
  };
}());
(0, _defineProperty2["default"])(TrezorConnect, "getPublicKey",
/*#__PURE__*/
function () {
  var _ref31 = (0, _asyncToGenerator2["default"])(
  /*#__PURE__*/
  _regenerator["default"].mark(function _callee31(params) {
    return _regenerator["default"].wrap(function _callee31$(_context31) {
      while (1) {
        switch (_context31.prev = _context31.next) {
          case 0:
            _context31.next = 2;
            return call(_objectSpread({
              method: 'getPublicKey'
            }, params));

          case 2:
            return _context31.abrupt("return", _context31.sent);

          case 3:
          case "end":
            return _context31.stop();
        }
      }
    }, _callee31);
  }));

  return function (_x30) {
    return _ref31.apply(this, arguments);
  };
}());
(0, _defineProperty2["default"])(TrezorConnect, "liskGetAddress",
/*#__PURE__*/
function () {
  var _ref32 = (0, _asyncToGenerator2["default"])(
  /*#__PURE__*/
  _regenerator["default"].mark(function _callee32(params) {
    var useEventListener;
    return _regenerator["default"].wrap(function _callee32$(_context32) {
      while (1) {
        switch (_context32.prev = _context32.next) {
          case 0:
            useEventListener = eventEmitter.listenerCount(UI.ADDRESS_VALIDATION) > 0;
            _context32.next = 3;
            return call(_objectSpread({
              method: 'liskGetAddress'
            }, params, {
              useEventListener: useEventListener
            }));

          case 3:
            return _context32.abrupt("return", _context32.sent);

          case 4:
          case "end":
            return _context32.stop();
        }
      }
    }, _callee32);
  }));

  return function (_x31) {
    return _ref32.apply(this, arguments);
  };
}());
(0, _defineProperty2["default"])(TrezorConnect, "liskGetPublicKey",
/*#__PURE__*/
function () {
  var _ref33 = (0, _asyncToGenerator2["default"])(
  /*#__PURE__*/
  _regenerator["default"].mark(function _callee33(params) {
    return _regenerator["default"].wrap(function _callee33$(_context33) {
      while (1) {
        switch (_context33.prev = _context33.next) {
          case 0:
            _context33.next = 2;
            return call(_objectSpread({
              method: 'liskGetPublicKey'
            }, params));

          case 2:
            return _context33.abrupt("return", _context33.sent);

          case 3:
          case "end":
            return _context33.stop();
        }
      }
    }, _callee33);
  }));

  return function (_x32) {
    return _ref33.apply(this, arguments);
  };
}());
(0, _defineProperty2["default"])(TrezorConnect, "liskSignMessage",
/*#__PURE__*/
function () {
  var _ref34 = (0, _asyncToGenerator2["default"])(
  /*#__PURE__*/
  _regenerator["default"].mark(function _callee34(params) {
    return _regenerator["default"].wrap(function _callee34$(_context34) {
      while (1) {
        switch (_context34.prev = _context34.next) {
          case 0:
            _context34.next = 2;
            return call(_objectSpread({
              method: 'liskSignMessage'
            }, params));

          case 2:
            return _context34.abrupt("return", _context34.sent);

          case 3:
          case "end":
            return _context34.stop();
        }
      }
    }, _callee34);
  }));

  return function (_x33) {
    return _ref34.apply(this, arguments);
  };
}());
(0, _defineProperty2["default"])(TrezorConnect, "liskSignTransaction",
/*#__PURE__*/
function () {
  var _ref35 = (0, _asyncToGenerator2["default"])(
  /*#__PURE__*/
  _regenerator["default"].mark(function _callee35(params) {
    return _regenerator["default"].wrap(function _callee35$(_context35) {
      while (1) {
        switch (_context35.prev = _context35.next) {
          case 0:
            _context35.next = 2;
            return call(_objectSpread({
              method: 'liskSignTransaction'
            }, params));

          case 2:
            return _context35.abrupt("return", _context35.sent);

          case 3:
          case "end":
            return _context35.stop();
        }
      }
    }, _callee35);
  }));

  return function (_x34) {
    return _ref35.apply(this, arguments);
  };
}());
(0, _defineProperty2["default"])(TrezorConnect, "liskVerifyMessage",
/*#__PURE__*/
function () {
  var _ref36 = (0, _asyncToGenerator2["default"])(
  /*#__PURE__*/
  _regenerator["default"].mark(function _callee36(params) {
    return _regenerator["default"].wrap(function _callee36$(_context36) {
      while (1) {
        switch (_context36.prev = _context36.next) {
          case 0:
            _context36.next = 2;
            return call(_objectSpread({
              method: 'liskVerifyMessage'
            }, params));

          case 2:
            return _context36.abrupt("return", _context36.sent);

          case 3:
          case "end":
            return _context36.stop();
        }
      }
    }, _callee36);
  }));

  return function (_x35) {
    return _ref36.apply(this, arguments);
  };
}());
(0, _defineProperty2["default"])(TrezorConnect, "nemGetAddress",
/*#__PURE__*/
function () {
  var _ref37 = (0, _asyncToGenerator2["default"])(
  /*#__PURE__*/
  _regenerator["default"].mark(function _callee37(params) {
    var useEventListener;
    return _regenerator["default"].wrap(function _callee37$(_context37) {
      while (1) {
        switch (_context37.prev = _context37.next) {
          case 0:
            useEventListener = eventEmitter.listenerCount(UI.ADDRESS_VALIDATION) > 0;
            _context37.next = 3;
            return call(_objectSpread({
              method: 'nemGetAddress'
            }, params, {
              useEventListener: useEventListener
            }));

          case 3:
            return _context37.abrupt("return", _context37.sent);

          case 4:
          case "end":
            return _context37.stop();
        }
      }
    }, _callee37);
  }));

  return function (_x36) {
    return _ref37.apply(this, arguments);
  };
}());
(0, _defineProperty2["default"])(TrezorConnect, "nemSignTransaction",
/*#__PURE__*/
function () {
  var _ref38 = (0, _asyncToGenerator2["default"])(
  /*#__PURE__*/
  _regenerator["default"].mark(function _callee38(params) {
    return _regenerator["default"].wrap(function _callee38$(_context38) {
      while (1) {
        switch (_context38.prev = _context38.next) {
          case 0:
            _context38.next = 2;
            return call(_objectSpread({
              method: 'nemSignTransaction'
            }, params));

          case 2:
            return _context38.abrupt("return", _context38.sent);

          case 3:
          case "end":
            return _context38.stop();
        }
      }
    }, _callee38);
  }));

  return function (_x37) {
    return _ref38.apply(this, arguments);
  };
}());
(0, _defineProperty2["default"])(TrezorConnect, "pushTransaction",
/*#__PURE__*/
function () {
  var _ref39 = (0, _asyncToGenerator2["default"])(
  /*#__PURE__*/
  _regenerator["default"].mark(function _callee39(params) {
    return _regenerator["default"].wrap(function _callee39$(_context39) {
      while (1) {
        switch (_context39.prev = _context39.next) {
          case 0:
            _context39.next = 2;
            return call(_objectSpread({
              method: 'pushTransaction'
            }, params));

          case 2:
            return _context39.abrupt("return", _context39.sent);

          case 3:
          case "end":
            return _context39.stop();
        }
      }
    }, _callee39);
  }));

  return function (_x38) {
    return _ref39.apply(this, arguments);
  };
}());
(0, _defineProperty2["default"])(TrezorConnect, "rippleGetAccountInfo",
/*#__PURE__*/
function () {
  var _ref40 = (0, _asyncToGenerator2["default"])(
  /*#__PURE__*/
  _regenerator["default"].mark(function _callee40(params) {
    return _regenerator["default"].wrap(function _callee40$(_context40) {
      while (1) {
        switch (_context40.prev = _context40.next) {
          case 0:
            _context40.next = 2;
            return call(_objectSpread({
              method: 'rippleGetAccountInfo'
            }, params));

          case 2:
            return _context40.abrupt("return", _context40.sent);

          case 3:
          case "end":
            return _context40.stop();
        }
      }
    }, _callee40);
  }));

  return function (_x39) {
    return _ref40.apply(this, arguments);
  };
}());
(0, _defineProperty2["default"])(TrezorConnect, "rippleGetAddress",
/*#__PURE__*/
function () {
  var _ref41 = (0, _asyncToGenerator2["default"])(
  /*#__PURE__*/
  _regenerator["default"].mark(function _callee41(params) {
    var useEventListener;
    return _regenerator["default"].wrap(function _callee41$(_context41) {
      while (1) {
        switch (_context41.prev = _context41.next) {
          case 0:
            useEventListener = eventEmitter.listenerCount(UI.ADDRESS_VALIDATION) > 0;
            _context41.next = 3;
            return call(_objectSpread({
              method: 'rippleGetAddress'
            }, params, {
              useEventListener: useEventListener
            }));

          case 3:
            return _context41.abrupt("return", _context41.sent);

          case 4:
          case "end":
            return _context41.stop();
        }
      }
    }, _callee41);
  }));

  return function (_x40) {
    return _ref41.apply(this, arguments);
  };
}());
(0, _defineProperty2["default"])(TrezorConnect, "rippleSignTransaction",
/*#__PURE__*/
function () {
  var _ref42 = (0, _asyncToGenerator2["default"])(
  /*#__PURE__*/
  _regenerator["default"].mark(function _callee42(params) {
    return _regenerator["default"].wrap(function _callee42$(_context42) {
      while (1) {
        switch (_context42.prev = _context42.next) {
          case 0:
            _context42.next = 2;
            return call(_objectSpread({
              method: 'rippleSignTransaction'
            }, params));

          case 2:
            return _context42.abrupt("return", _context42.sent);

          case 3:
          case "end":
            return _context42.stop();
        }
      }
    }, _callee42);
  }));

  return function (_x41) {
    return _ref42.apply(this, arguments);
  };
}());
(0, _defineProperty2["default"])(TrezorConnect, "signMessage",
/*#__PURE__*/
function () {
  var _ref43 = (0, _asyncToGenerator2["default"])(
  /*#__PURE__*/
  _regenerator["default"].mark(function _callee43(params) {
    return _regenerator["default"].wrap(function _callee43$(_context43) {
      while (1) {
        switch (_context43.prev = _context43.next) {
          case 0:
            _context43.next = 2;
            return call(_objectSpread({
              method: 'signMessage'
            }, params));

          case 2:
            return _context43.abrupt("return", _context43.sent);

          case 3:
          case "end":
            return _context43.stop();
        }
      }
    }, _callee43);
  }));

  return function (_x42) {
    return _ref43.apply(this, arguments);
  };
}());
(0, _defineProperty2["default"])(TrezorConnect, "signTransaction",
/*#__PURE__*/
function () {
  var _ref44 = (0, _asyncToGenerator2["default"])(
  /*#__PURE__*/
  _regenerator["default"].mark(function _callee44(params) {
    return _regenerator["default"].wrap(function _callee44$(_context44) {
      while (1) {
        switch (_context44.prev = _context44.next) {
          case 0:
            _context44.next = 2;
            return call(_objectSpread({
              method: 'signTransaction'
            }, params));

          case 2:
            return _context44.abrupt("return", _context44.sent);

          case 3:
          case "end":
            return _context44.stop();
        }
      }
    }, _callee44);
  }));

  return function (_x43) {
    return _ref44.apply(this, arguments);
  };
}());
(0, _defineProperty2["default"])(TrezorConnect, "stellarGetAddress",
/*#__PURE__*/
function () {
  var _ref45 = (0, _asyncToGenerator2["default"])(
  /*#__PURE__*/
  _regenerator["default"].mark(function _callee45(params) {
    var useEventListener;
    return _regenerator["default"].wrap(function _callee45$(_context45) {
      while (1) {
        switch (_context45.prev = _context45.next) {
          case 0:
            useEventListener = eventEmitter.listenerCount(UI.ADDRESS_VALIDATION) > 0;
            _context45.next = 3;
            return call(_objectSpread({
              method: 'stellarGetAddress'
            }, params, {
              useEventListener: useEventListener
            }));

          case 3:
            return _context45.abrupt("return", _context45.sent);

          case 4:
          case "end":
            return _context45.stop();
        }
      }
    }, _callee45);
  }));

  return function (_x44) {
    return _ref45.apply(this, arguments);
  };
}());
(0, _defineProperty2["default"])(TrezorConnect, "stellarSignTransaction",
/*#__PURE__*/
function () {
  var _ref46 = (0, _asyncToGenerator2["default"])(
  /*#__PURE__*/
  _regenerator["default"].mark(function _callee46(params) {
    return _regenerator["default"].wrap(function _callee46$(_context46) {
      while (1) {
        switch (_context46.prev = _context46.next) {
          case 0:
            _context46.next = 2;
            return call(_objectSpread({
              method: 'stellarSignTransaction'
            }, params));

          case 2:
            return _context46.abrupt("return", _context46.sent);

          case 3:
          case "end":
            return _context46.stop();
        }
      }
    }, _callee46);
  }));

  return function (_x45) {
    return _ref46.apply(this, arguments);
  };
}());
(0, _defineProperty2["default"])(TrezorConnect, "tezosGetAddress",
/*#__PURE__*/
function () {
  var _ref47 = (0, _asyncToGenerator2["default"])(
  /*#__PURE__*/
  _regenerator["default"].mark(function _callee47(params) {
    var useEventListener;
    return _regenerator["default"].wrap(function _callee47$(_context47) {
      while (1) {
        switch (_context47.prev = _context47.next) {
          case 0:
            useEventListener = eventEmitter.listenerCount(UI.ADDRESS_VALIDATION) > 0;
            _context47.next = 3;
            return call(_objectSpread({
              method: 'tezosGetAddress'
            }, params, {
              useEventListener: useEventListener
            }));

          case 3:
            return _context47.abrupt("return", _context47.sent);

          case 4:
          case "end":
            return _context47.stop();
        }
      }
    }, _callee47);
  }));

  return function (_x46) {
    return _ref47.apply(this, arguments);
  };
}());
(0, _defineProperty2["default"])(TrezorConnect, "tezosGetPublicKey",
/*#__PURE__*/
function () {
  var _ref48 = (0, _asyncToGenerator2["default"])(
  /*#__PURE__*/
  _regenerator["default"].mark(function _callee48(params) {
    return _regenerator["default"].wrap(function _callee48$(_context48) {
      while (1) {
        switch (_context48.prev = _context48.next) {
          case 0:
            _context48.next = 2;
            return call(_objectSpread({
              method: 'tezosGetPublicKey'
            }, params));

          case 2:
            return _context48.abrupt("return", _context48.sent);

          case 3:
          case "end":
            return _context48.stop();
        }
      }
    }, _callee48);
  }));

  return function (_x47) {
    return _ref48.apply(this, arguments);
  };
}());
(0, _defineProperty2["default"])(TrezorConnect, "tezosSignTransaction",
/*#__PURE__*/
function () {
  var _ref49 = (0, _asyncToGenerator2["default"])(
  /*#__PURE__*/
  _regenerator["default"].mark(function _callee49(params) {
    return _regenerator["default"].wrap(function _callee49$(_context49) {
      while (1) {
        switch (_context49.prev = _context49.next) {
          case 0:
            _context49.next = 2;
            return call(_objectSpread({
              method: 'tezosSignTransaction'
            }, params));

          case 2:
            return _context49.abrupt("return", _context49.sent);

          case 3:
          case "end":
            return _context49.stop();
        }
      }
    }, _callee49);
  }));

  return function (_x48) {
    return _ref49.apply(this, arguments);
  };
}());
(0, _defineProperty2["default"])(TrezorConnect, "eosGetPublicKey",
/*#__PURE__*/
function () {
  var _ref50 = (0, _asyncToGenerator2["default"])(
  /*#__PURE__*/
  _regenerator["default"].mark(function _callee50(params) {
    return _regenerator["default"].wrap(function _callee50$(_context50) {
      while (1) {
        switch (_context50.prev = _context50.next) {
          case 0:
            _context50.next = 2;
            return call(_objectSpread({
              method: 'eosGetPublicKey'
            }, params));

          case 2:
            return _context50.abrupt("return", _context50.sent);

          case 3:
          case "end":
            return _context50.stop();
        }
      }
    }, _callee50);
  }));

  return function (_x49) {
    return _ref50.apply(this, arguments);
  };
}());
(0, _defineProperty2["default"])(TrezorConnect, "eosSignTransaction",
/*#__PURE__*/
function () {
  var _ref51 = (0, _asyncToGenerator2["default"])(
  /*#__PURE__*/
  _regenerator["default"].mark(function _callee51(params) {
    return _regenerator["default"].wrap(function _callee51$(_context51) {
      while (1) {
        switch (_context51.prev = _context51.next) {
          case 0:
            _context51.next = 2;
            return call(_objectSpread({
              method: 'eosSignTransaction'
            }, params));

          case 2:
            return _context51.abrupt("return", _context51.sent);

          case 3:
          case "end":
            return _context51.stop();
        }
      }
    }, _callee51);
  }));

  return function (_x50) {
    return _ref51.apply(this, arguments);
  };
}());
(0, _defineProperty2["default"])(TrezorConnect, "verifyMessage",
/*#__PURE__*/
function () {
  var _ref52 = (0, _asyncToGenerator2["default"])(
  /*#__PURE__*/
  _regenerator["default"].mark(function _callee52(params) {
    return _regenerator["default"].wrap(function _callee52$(_context52) {
      while (1) {
        switch (_context52.prev = _context52.next) {
          case 0:
            _context52.next = 2;
            return call(_objectSpread({
              method: 'verifyMessage'
            }, params));

          case 2:
            return _context52.abrupt("return", _context52.sent);

          case 3:
          case "end":
            return _context52.stop();
        }
      }
    }, _callee52);
  }));

  return function (_x51) {
    return _ref52.apply(this, arguments);
  };
}());
(0, _defineProperty2["default"])(TrezorConnect, "wipeDevice",
/*#__PURE__*/
function () {
  var _ref53 = (0, _asyncToGenerator2["default"])(
  /*#__PURE__*/
  _regenerator["default"].mark(function _callee53(params) {
    return _regenerator["default"].wrap(function _callee53$(_context53) {
      while (1) {
        switch (_context53.prev = _context53.next) {
          case 0:
            _context53.next = 2;
            return call(_objectSpread({
              method: 'wipeDevice'
            }, params));

          case 2:
            return _context53.abrupt("return", _context53.sent);

          case 3:
          case "end":
            return _context53.stop();
        }
      }
    }, _callee53);
  }));

  return function (_x52) {
    return _ref53.apply(this, arguments);
  };
}());
(0, _defineProperty2["default"])(TrezorConnect, "applyFlags",
/*#__PURE__*/
function () {
  var _ref54 = (0, _asyncToGenerator2["default"])(
  /*#__PURE__*/
  _regenerator["default"].mark(function _callee54(params) {
    return _regenerator["default"].wrap(function _callee54$(_context54) {
      while (1) {
        switch (_context54.prev = _context54.next) {
          case 0:
            _context54.next = 2;
            return call(_objectSpread({
              method: 'applyFlags'
            }, params));

          case 2:
            return _context54.abrupt("return", _context54.sent);

          case 3:
          case "end":
            return _context54.stop();
        }
      }
    }, _callee54);
  }));

  return function (_x53) {
    return _ref54.apply(this, arguments);
  };
}());
(0, _defineProperty2["default"])(TrezorConnect, "applySettings",
/*#__PURE__*/
function () {
  var _ref55 = (0, _asyncToGenerator2["default"])(
  /*#__PURE__*/
  _regenerator["default"].mark(function _callee55(params) {
    return _regenerator["default"].wrap(function _callee55$(_context55) {
      while (1) {
        switch (_context55.prev = _context55.next) {
          case 0:
            _context55.next = 2;
            return call(_objectSpread({
              method: 'applySettings'
            }, params));

          case 2:
            return _context55.abrupt("return", _context55.sent);

          case 3:
          case "end":
            return _context55.stop();
        }
      }
    }, _callee55);
  }));

  return function (_x54) {
    return _ref55.apply(this, arguments);
  };
}());
(0, _defineProperty2["default"])(TrezorConnect, "backupDevice",
/*#__PURE__*/
(0, _asyncToGenerator2["default"])(
/*#__PURE__*/
_regenerator["default"].mark(function _callee56() {
  return _regenerator["default"].wrap(function _callee56$(_context56) {
    while (1) {
      switch (_context56.prev = _context56.next) {
        case 0:
          _context56.next = 2;
          return call({
            method: 'backupDevice'
          });

        case 2:
          return _context56.abrupt("return", _context56.sent);

        case 3:
        case "end":
          return _context56.stop();
      }
    }
  }, _callee56);
})));
(0, _defineProperty2["default"])(TrezorConnect, "changePin",
/*#__PURE__*/
function () {
  var _ref57 = (0, _asyncToGenerator2["default"])(
  /*#__PURE__*/
  _regenerator["default"].mark(function _callee57(params) {
    return _regenerator["default"].wrap(function _callee57$(_context57) {
      while (1) {
        switch (_context57.prev = _context57.next) {
          case 0:
            _context57.next = 2;
            return call(_objectSpread({
              method: 'changePin'
            }, params));

          case 2:
            return _context57.abrupt("return", _context57.sent);

          case 3:
          case "end":
            return _context57.stop();
        }
      }
    }, _callee57);
  }));

  return function (_x55) {
    return _ref57.apply(this, arguments);
  };
}());
(0, _defineProperty2["default"])(TrezorConnect, "firmwareErase",
/*#__PURE__*/
function () {
  var _ref58 = (0, _asyncToGenerator2["default"])(
  /*#__PURE__*/
  _regenerator["default"].mark(function _callee58(params) {
    return _regenerator["default"].wrap(function _callee58$(_context58) {
      while (1) {
        switch (_context58.prev = _context58.next) {
          case 0:
            _context58.next = 2;
            return call(_objectSpread({
              method: 'firmwareErase'
            }, params));

          case 2:
            return _context58.abrupt("return", _context58.sent);

          case 3:
          case "end":
            return _context58.stop();
        }
      }
    }, _callee58);
  }));

  return function (_x56) {
    return _ref58.apply(this, arguments);
  };
}());
(0, _defineProperty2["default"])(TrezorConnect, "firmwareUpload",
/*#__PURE__*/
function () {
  var _ref59 = (0, _asyncToGenerator2["default"])(
  /*#__PURE__*/
  _regenerator["default"].mark(function _callee59(params) {
    return _regenerator["default"].wrap(function _callee59$(_context59) {
      while (1) {
        switch (_context59.prev = _context59.next) {
          case 0:
            _context59.next = 2;
            return call(_objectSpread({
              method: 'firmwareUpload'
            }, params));

          case 2:
            return _context59.abrupt("return", _context59.sent);

          case 3:
          case "end":
            return _context59.stop();
        }
      }
    }, _callee59);
  }));

  return function (_x57) {
    return _ref59.apply(this, arguments);
  };
}());
(0, _defineProperty2["default"])(TrezorConnect, "firmwareUpdate",
/*#__PURE__*/
function () {
  var _ref60 = (0, _asyncToGenerator2["default"])(
  /*#__PURE__*/
  _regenerator["default"].mark(function _callee60(params) {
    return _regenerator["default"].wrap(function _callee60$(_context60) {
      while (1) {
        switch (_context60.prev = _context60.next) {
          case 0:
            _context60.next = 2;
            return call(_objectSpread({
              method: 'firmwareUpdate'
            }, params));

          case 2:
            return _context60.abrupt("return", _context60.sent);

          case 3:
          case "end":
            return _context60.stop();
        }
      }
    }, _callee60);
  }));

  return function (_x58) {
    return _ref60.apply(this, arguments);
  };
}());
(0, _defineProperty2["default"])(TrezorConnect, "recoveryDevice",
/*#__PURE__*/
function () {
  var _ref61 = (0, _asyncToGenerator2["default"])(
  /*#__PURE__*/
  _regenerator["default"].mark(function _callee61(params) {
    return _regenerator["default"].wrap(function _callee61$(_context61) {
      while (1) {
        switch (_context61.prev = _context61.next) {
          case 0:
            _context61.next = 2;
            return call(_objectSpread({
              method: 'recoveryDevice'
            }, params));

          case 2:
            return _context61.abrupt("return", _context61.sent);

          case 3:
          case "end":
            return _context61.stop();
        }
      }
    }, _callee61);
  }));

  return function (_x59) {
    return _ref61.apply(this, arguments);
  };
}());
(0, _defineProperty2["default"])(TrezorConnect, "dispose", function () {
  iframe.dispose();

  if (_popupManager) {
    _popupManager.close();
  }
});
(0, _defineProperty2["default"])(TrezorConnect, "cancel", function () {
  if (_popupManager) {
    _popupManager.emit(POPUP.CLOSED);
  }
});
(0, _defineProperty2["default"])(TrezorConnect, "renderWebUSBButton", function (className) {
  (0, _button["default"])(className, _settings.webusbSrc, iframe.origin);
});
var _default = TrezorConnect;
exports["default"] = _default;

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2RlZmluZVByb3BlcnR5LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy90cmV6b3ItY29ubmVjdC9saWIvY29uc3RhbnRzL3BvcHVwLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy90cmV6b3ItY29ubmVjdC9saWIvY29uc3RhbnRzL3VpLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy90cmV6b3ItY29ubmVjdC9saWIvY29uc3RhbnRzL2Vycm9ycy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9zZXRQcm90b3R5cGVPZi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdHJlem9yLWNvbm5lY3QvbGliL2NvbnN0YW50cy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdHJlem9yLWNvbm5lY3QvbGliL2NvbnN0YW50cy90cmFuc3BvcnQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3RyZXpvci1jb25uZWN0L2xpYi9jb25zdGFudHMvZGV2aWNlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy90cmV6b3ItY29ubmVjdC9saWIvY29uc3RhbnRzL2Jsb2NrY2hhaW4uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW5oZXJpdHNMb29zZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdHJlem9yLWNvbm5lY3QvbGliL3V0aWxzL2RlZmVycmVkLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL3R5cGVvZi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdHJlem9yLWNvbm5lY3QvbGliL2NvbnN0YW50cy9pZnJhbWUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvd3JhcE5hdGl2ZVN1cGVyLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2dldFByb3RvdHlwZU9mLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2lzTmF0aXZlRnVuY3Rpb24uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvY29uc3RydWN0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2lzTmF0aXZlUmVmbGVjdENvbnN0cnVjdC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdHJlem9yLWNvbm5lY3QvbGliL3BvcHVwL1BvcHVwTWFuYWdlci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3RyZXpvci1jb25uZWN0L2xpYi9wb3B1cC9zaG93UG9wdXBSZXF1ZXN0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy90cmV6b3ItY29ubmVjdC9saWIvdXRpbHMvbmV0d29ya1V0aWxzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy90cmV6b3ItY29ubmVjdC9saWIvaWZyYW1lL2J1aWxkZXIuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3RyZXpvci1jb25uZWN0L2xpYi9pZnJhbWUvaW5saW5lLXN0eWxlcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdHJlem9yLWNvbm5lY3QvbGliL3dlYnVzYi9idXR0b24uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3RyZXpvci1jb25uZWN0L2xpYi91dGlscy9kZWJ1Zy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdHJlem9yLWNvbm5lY3QvbGliL21lc3NhZ2UvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3RyZXpvci1jb25uZWN0L2xpYi9kYXRhL0Nvbm5lY3RTZXR0aW5ncy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdHJlem9yLWNvbm5lY3QvbGliL3R5cGVzL2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy90cmV6b3ItY29ubmVjdC9saWIvdHlwZXMvYmxvY2tjaGFpbkV2ZW50LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy90cmV6b3ItY29ubmVjdC9saWIvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxjQUFjLG1CQUFPLENBQUMsSUFBK0I7O0FBRXJEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsNkU7Ozs7Ozs7QUNyREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsR0FBRztBQUNIO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLDZFOzs7Ozs7OztBQ2hCYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9DOzs7Ozs7OztBQzNCYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnRDs7Ozs7Ozs7QUMzR2E7O0FBRWIsNkJBQTZCLG1CQUFPLENBQUMsR0FBOEM7O0FBRW5GO0FBQ0E7O0FBRUEsNkNBQTZDLG1CQUFPLENBQUMsSUFBc0M7O0FBRTNGLCtDQUErQyxtQkFBTyxDQUFDLElBQXdDOztBQUUvRjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxDQUFDOztBQUVEOztBQUVBO0FBQ0E7QUFDQSxFQUFFOzs7QUFHRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRFQUE0RTs7QUFFNUU7QUFDQSxnRUFBZ0U7O0FBRWhFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBGQUEwRjtBQUMxRjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzRUFBc0U7O0FBRXRFO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0M7Ozs7Ozs7QUN6RkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw2RTs7Ozs7Ozs7QUNYYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRDOzs7Ozs7OztBQ2ZhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNDOzs7Ozs7OztBQ2pCYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0JBQStCOztBQUUvQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0I7O0FBRWxCO0FBQ0EscURBQXFEOztBQUVyRDtBQUNBO0FBQ0EsZ0M7Ozs7Ozs7O0FDeENhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9DOzs7Ozs7O0FDWEEscUJBQXFCLG1CQUFPLENBQUMsSUFBcUI7O0FBRWxEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw2RTs7Ozs7Ozs7QUNUYTs7QUFFYiw2QkFBNkIsbUJBQU8sQ0FBQyxHQUE4Qzs7QUFFbkY7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSwwQ0FBMEMsbUJBQU8sQ0FBQyxHQUE0Qjs7QUFFOUUsZ0RBQWdELG1CQUFPLENBQUMsR0FBeUM7O0FBRWpHO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1AsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1AsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxHQUFHO0FBQ0gsQzs7Ozs7OztBQ3hJQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSw2RTs7Ozs7Ozs7QUNyQmE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNEI7Ozs7Ozs7QUNYQSxxQkFBcUIsbUJBQU8sQ0FBQyxJQUFxQjs7QUFFbEQscUJBQXFCLG1CQUFPLENBQUMsSUFBcUI7O0FBRWxELHVCQUF1QixtQkFBTyxDQUFDLElBQXVCOztBQUV0RCxnQkFBZ0IsbUJBQU8sQ0FBQyxJQUFnQjs7QUFFeEM7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsNkU7Ozs7Ozs7QUM1Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw2RTs7Ozs7OztBQ1RBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDZFOzs7Ozs7O0FDTEEscUJBQXFCLG1CQUFPLENBQUMsSUFBcUI7O0FBRWxELCtCQUErQixtQkFBTyxDQUFDLElBQStCOztBQUV0RTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLDZFOzs7Ozs7O0FDekJBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsZ0ZBQWdGO0FBQ2hGO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDZFOzs7Ozs7OztBQ2RhOztBQUViLDhCQUE4QixtQkFBTyxDQUFDLElBQStDOztBQUVyRiw2QkFBNkIsbUJBQU8sQ0FBQyxHQUE4Qzs7QUFFbkY7QUFDQTs7QUFFQSwwQ0FBMEMsbUJBQU8sQ0FBQyxHQUE0Qjs7QUFFOUUsZ0RBQWdELG1CQUFPLENBQUMsR0FBeUM7O0FBRWpHLHFEQUFxRCxtQkFBTyxDQUFDLElBQThDOztBQUUzRyw2Q0FBNkMsbUJBQU8sQ0FBQyxJQUFzQzs7QUFFM0YsOENBQThDLG1CQUFPLENBQUMsSUFBdUM7O0FBRTdGLHFDQUFxQyxtQkFBTyxDQUFDLEVBQVE7O0FBRXJELG9DQUFvQyxtQkFBTyxDQUFDLElBQW9COztBQUVoRSxvQ0FBb0MsbUJBQU8sQ0FBQyxJQUFxQjs7QUFFakUsd0JBQXdCLG1CQUFPLENBQUMsSUFBb0I7O0FBRXBELG9CQUFvQixtQkFBTyxDQUFDLElBQXVCOztBQUVuRCxnQkFBZ0IsbUJBQU8sQ0FBQyxJQUFtQjs7QUFFM0M7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyR0FBMkc7O0FBRTNHOztBQUVBO0FBQ0E7QUFDQSx1SEFBdUg7O0FBRXZIO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1gsU0FBUztBQUNUO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxXQUFXO0FBQ1gsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBLGFBQWE7QUFDYixXQUFXO0FBQ1gsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYLCtDQUErQzs7QUFFL0M7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0EsYUFBYTtBQUNiLFdBQVc7QUFDWDtBQUNBLE9BQU87QUFDUCxLQUFLO0FBQ0w7O0FBRUE7QUFDQSx5Q0FBeUM7QUFDekM7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxnQ0FBZ0M7O0FBRWhDO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQLEtBQUs7QUFDTDtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVMsa0JBQWtCO0FBQzNCLFNBQVM7QUFDVCxPQUFPO0FBQ1AsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUI7QUFDbkI7QUFDQSxlQUFlO0FBQ2Y7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQLEtBQUs7O0FBRUw7QUFDQTtBQUNBOztBQUVBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0EsS0FBSzs7O0FBR0w7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLENBQUM7O0FBRUQsa0M7Ozs7Ozs7QUNqWkE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLDZFOzs7Ozs7OztBQ1RhOztBQUViO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSw0Qzs7Ozs7Ozs7QUMxQ2E7O0FBRWIsNkJBQTZCLG1CQUFPLENBQUMsR0FBOEM7O0FBRW5GO0FBQ0E7O0FBRUEsMENBQTBDLG1CQUFPLENBQUMsR0FBNEI7O0FBRTlFLGdEQUFnRCxtQkFBTyxDQUFDLEdBQXlDOztBQUVqRyxtQkFBTyxDQUFDLElBQWM7O0FBRXRCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsYUFBYTs7QUFFYjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsOEI7Ozs7Ozs7O0FDcEdhOztBQUViLDZCQUE2QixtQkFBTyxDQUFDLEdBQThDOztBQUVuRjtBQUNBOztBQUVBLDBDQUEwQyxtQkFBTyxDQUFDLEdBQTRCOztBQUU5RSxnREFBZ0QsbUJBQU8sQ0FBQyxHQUF5Qzs7QUFFakcsZ0JBQWdCLG1CQUFPLENBQUMsSUFBbUI7O0FBRTNDLFVBQVUsbUJBQU8sQ0FBQyxJQUFpQjs7QUFFbkMsY0FBYyxtQkFBTyxDQUFDLElBQXFCOztBQUUzQywyQ0FBMkMsbUJBQU8sQ0FBQyxJQUFpQjs7QUFFcEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUI7O0FBRW5CO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxpR0FBaUc7O0FBRWpHO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsYUFBYTs7O0FBR2I7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxhQUFhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLFlBQVk7QUFDM0I7O0FBRUEsNEJBQTRCOztBQUU1QjtBQUNBLG1FQUFtRTtBQUNuRTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWU7QUFDZjtBQUNBLGNBQWM7OztBQUdkO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQSxhQUFhOzs7QUFHYjtBQUNBLGtEQUFrRDs7QUFFbEQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzREFBc0Q7O0FBRXREO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EseURBQXlEOztBQUV6RDtBQUNBO0FBQ0EsRUFBRTs7O0FBR0Y7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUssZ0JBQWdCO0FBQ3JCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxvQzs7Ozs7Ozs7QUM5T2E7O0FBRWI7QUFDQTtBQUNBLG9DQUFvQyx5QkFBeUIsOEJBQThCLCtCQUErQiw4QkFBOEIsdUJBQXVCLHNDQUFzQyx1Q0FBdUMsd0NBQXdDLG9DQUFvQyxnQ0FBZ0MsbUNBQW1DLHFDQUFxQyxnQ0FBZ0MsNkJBQTZCLHdCQUF3QixxQkFBcUIsc0JBQXNCLGdCQUFnQixpQkFBaUIscUNBQXFDLHdCQUF3Qix1QkFBdUIsbUJBQW1CLCtDQUErQyw0QkFBNEIsd0JBQXdCLHNCQUFzQiwyR0FBMkcsc0JBQXNCLDRCQUE0QixnQ0FBZ0MsNEJBQTRCLDBCQUEwQixtRUFBbUUsZ0JBQWdCLDRCQUE0Qiw4QkFBOEIsK0JBQStCLDhCQUE4Qix1QkFBdUIsbUNBQW1DLHFDQUFxQyxnQ0FBZ0MsNkJBQTZCLHVGQUF1RixtQkFBbUIsZUFBZSxXQUFXLE9BQU8sd0ZBQXdGLHlCQUF5QixzQkFBc0IsNEZBQTRGLGFBQWEsa0RBQWtELDBDQUEwQyxrR0FBa0csYUFBYSxtRUFBbUUsaUNBQWlDLDZCQUE2Qiw2QkFBNkIsc0VBQXNFLHdCQUF3Qix5QkFBeUIsMEJBQTBCLHFFQUFxRSw0QkFBNEIsMEJBQTBCLHdCQUF3Qix5QkFBeUIsMEVBQTBFLHFCQUFxQiw0QkFBNEIsbUJBQW1CLDRCQUE0Qix5QkFBeUIsMEJBQTBCLHlCQUF5Qiw2QkFBNkIscUJBQXFCLG1CQUFtQiw4REFBOEQsc0RBQXNELGdGQUFnRixtQ0FBbUMsaUZBQWlGLG1DQUFtQywyQ0FBMkM7QUFDNW1HO0FBQ0EsOEI7Ozs7Ozs7O0FDTmE7O0FBRWI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUNBQW1DLGtDQUFrQzs7QUFFckU7QUFDQTs7QUFFQTtBQUNBLDZDQUE2QztBQUM3QztBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBLDBCQUEwQjs7QUFFMUI7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBLDhCOzs7Ozs7OztBQ3ZDQSw4Q0FBYTtBQUNiO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0QkFBNEIscUJBQXFCO0FBQ2pEO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsaURBQWlELHFCQUFxQjtBQUN0RTs7QUFFQTs7QUFFQTtBQUNBLDBGQUEwRixhQUFhO0FBQ3ZHO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBLDBFQUEwRSxlQUFlO0FBQ3pGO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSwwRUFBMEUsZUFBZTtBQUN6RjtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsMEVBQTBFLGVBQWU7QUFDekY7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDBFQUEwRSxlQUFlO0FBQ3pGO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxDQUFDOztBQUVEO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0EscURBQXFELDBCQUEwQjtBQUMvRTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsdURBQXVELDRCQUE0QjtBQUNuRjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTs7O0FBR0Y7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsNEVBQTRFLGVBQWU7QUFDM0Y7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLG9DOzs7Ozs7Ozs7QUM5TGE7O0FBRWI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsb0M7Ozs7Ozs7O0FDeEJhOztBQUViLDZCQUE2QixtQkFBTyxDQUFDLEdBQThDOztBQUVuRjtBQUNBOztBQUVBLDhDQUE4QyxtQkFBTyxDQUFDLElBQXVDOztBQUU3RiwwQ0FBMEMsZ0NBQWdDLG9DQUFvQyxvREFBb0QsOERBQThELGdFQUFnRSxFQUFFLEVBQUUsZ0NBQWdDLEVBQUUsYUFBYTs7QUFFblYsZ0NBQWdDLGdCQUFnQixzQkFBc0IsT0FBTyx1REFBdUQsYUFBYSwrQ0FBK0MsNERBQTRELEVBQUUsRUFBRSxFQUFFLDZDQUE2QywyRUFBMkUsRUFBRSxPQUFPLHlDQUF5QyxrRkFBa0YsRUFBRSxFQUFFLEVBQUUsRUFBRSxlQUFlOztBQUVyaEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBLGlDQUFpQzs7QUFFakM7QUFDQSwrQkFBK0I7QUFDL0I7O0FBRUE7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHQUFHOzs7QUFHSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxzQjs7Ozs7Ozs7QUM1SGE7O0FBRWIsOEJBQThCLG1CQUFPLENBQUMsSUFBK0M7O0FBRXJGOztBQUVBLGlCQUFpQixtQkFBTyxDQUFDLElBQWM7O0FBRXZDLHdDQUF3QyxtQkFBTyxDQUFDLElBQXdCOztBQUV4RSxvQ0FBb0MsbUJBQU8sQ0FBQyxJQUFvQjs7QUFFaEUsaUNBQWlDLG1CQUFPLENBQUMsSUFBaUI7O0FBRTFELHFDQUFxQyxtQkFBTyxDQUFDLElBQXFCOztBQUVsRSxnQ0FBZ0MsbUJBQU8sQ0FBQyxJQUFVOztBQUVsRCxnQ0FBZ0MsbUJBQU8sQ0FBQyxJQUFZOztBQUVwRDtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVELHNDQUFzQyxtQkFBTyxDQUFDLElBQVc7O0FBRXpELHFDQUFxQyxtQkFBTyxDQUFDLElBQVU7O0FBRXZELHVDQUF1QyxtQkFBTyxDQUFDLElBQVk7O0FBRTNELGtDQUFrQyxtQkFBTyxDQUFDLElBQU87O0FBRWpELHNDQUFzQyxtQkFBTyxDQUFDLElBQVc7O0FBRXpELG1DQUFtQyxtQkFBTyxDQUFDLElBQVE7O0FBRW5ELG9DQUFvQyxtQkFBTyxDQUFDLElBQVM7O0FBRXJELGtDQUFrQyxtQkFBTyxDQUFDLElBQU87O0FBRWpELGdCQUFnQixtQkFBTyxDQUFDLElBQVk7O0FBRXBDO0FBQ0E7QUFDQTtBQUNBLENBQUMsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDOUNZOztBQUViLDhCQUE4QixtQkFBTyxDQUFDLElBQStDOztBQUVyRix5Q0FBeUMsbUJBQU8sQ0FBQyxJQUF5QixHOzs7Ozs7Ozs7Ozs7Ozs7O0FDSjdEOztBQUViLDhCQUE4QixtQkFBTyxDQUFDLElBQStDOztBQUVyRiw2QkFBNkIsbUJBQU8sQ0FBQyxHQUE4Qzs7QUFFbkY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsOENBQThDLG1CQUFPLENBQUMsSUFBdUM7O0FBRTdGLDBDQUEwQyxtQkFBTyxDQUFDLEdBQTRCOztBQUU5RSxnREFBZ0QsbUJBQU8sQ0FBQyxHQUF5Qzs7QUFFakcscUNBQXFDLG1CQUFPLENBQUMsRUFBUTs7QUFFckQsaUJBQWlCLG1CQUFPLENBQUMsSUFBYTs7QUFFdEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSx3Q0FBd0MsbUJBQU8sQ0FBQyxJQUF1Qjs7QUFFdkU7O0FBRUEsb0NBQW9DLG1CQUFPLENBQUMsSUFBbUI7O0FBRS9ELHFDQUFxQyxtQkFBTyxDQUFDLElBQW9COztBQUVqRSxpQ0FBaUMsbUJBQU8sQ0FBQyxJQUFnQjs7QUFFekQ7O0FBRUEscUNBQXFDLG1CQUFPLENBQUMsSUFBb0I7O0FBRWpFOztBQUVBLHlDQUF5QyxtQkFBTyxDQUFDLElBQXdCOztBQUV6RTs7QUFFQSxvQ0FBb0MsbUJBQU8sQ0FBQyxJQUFvQjs7QUFFaEUsMkNBQTJDLG1CQUFPLENBQUMsSUFBc0I7O0FBRXpFLHFDQUFxQyxtQkFBTyxDQUFDLElBQWtCOztBQUUvRCxxQ0FBcUMsbUJBQU8sQ0FBQyxJQUFpQjs7QUFFOUQscUNBQXFDLG1CQUFPLENBQUMsSUFBZTs7QUFFNUQsZUFBZSxtQkFBTyxDQUFDLElBQVc7O0FBRWxDLHVCQUF1QixtQkFBTyxDQUFDLElBQXdCOztBQUV2RCxpQ0FBaUMsbUJBQU8sQ0FBQyxJQUFTOztBQUVsRCx1QkFBdUIsbUJBQU8sQ0FBQyxJQUF5Qjs7QUFFeEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVELGVBQWUsbUJBQU8sQ0FBQyxJQUFpQjs7QUFFeEM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVELDBDQUEwQyxnQ0FBZ0Msb0NBQW9DLG9EQUFvRCw4REFBOEQsZ0VBQWdFLEVBQUUsRUFBRSxnQ0FBZ0MsRUFBRSxhQUFhOztBQUVuVixnQ0FBZ0MsZ0JBQWdCLHNCQUFzQixPQUFPLHVEQUF1RCxhQUFhLCtDQUErQyw0REFBNEQsRUFBRSxFQUFFLEVBQUUsNkNBQTZDLDJFQUEyRSxFQUFFLE9BQU8seUNBQXlDLGtGQUFrRixFQUFFLEVBQUUsRUFBRSxFQUFFLGVBQWU7O0FBRXJoQjs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLEdBQUc7QUFDSDtBQUNBLEVBQUU7OztBQUdGO0FBQ0E7QUFDQTtBQUNBLDhEQUE4RDtBQUM5RDtBQUNBLFlBQVksK0JBQStCOztBQUUzQztBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkJBQTZCO0FBQzdCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLHVDQUF1Qzs7QUFFdkM7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTs7QUFFQTtBQUNBLE9BQU87OztBQUdQO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQSxPQUFPO0FBQ1A7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxhQUFhO0FBQ2I7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhOztBQUViO0FBQ0E7O0FBRUEsd0NBQXdDOzs7QUFHeEM7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTs7QUFFYjtBQUNBO0FBQ0EsaUVBQWlFLCtCQUErQjtBQUNoRztBQUNBO0FBQ0EsYUFBYTs7O0FBR2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7O0FBRWI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLG1DQUFtQzs7O0FBR25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhOztBQUViO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0gsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXOztBQUVYO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVzs7QUFFWDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0gsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSCxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNILENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7O0FBRWI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTs7QUFFYjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhOztBQUViO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7O0FBRWI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx5QkFBeUI7QUFDekI7QUFDQTtBQUNBLDJCQUEyQjtBQUMzQjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCLGVBQWU7O0FBRWY7QUFDQTtBQUNBO0FBQ0EsYUFBYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxtQ0FBbUM7QUFDbkM7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUI7QUFDekI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCOztBQUV6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCLGVBQWU7O0FBRWY7QUFDQTtBQUNBO0FBQ0EsYUFBYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBLGFBQWE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhOztBQUViO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7O0FBRWI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBLGFBQWE7O0FBRWI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTs7QUFFYjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhOztBQUViO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7O0FBRWI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTs7QUFFYjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhOztBQUViO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7O0FBRWI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTs7QUFFYjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0EsYUFBYTs7QUFFYjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhOztBQUViO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7O0FBRWI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTs7QUFFYjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhOztBQUViO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7O0FBRWI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBLGFBQWE7O0FBRWI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTs7QUFFYjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhOztBQUViO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7O0FBRWI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBLGFBQWE7O0FBRWI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTs7QUFFYjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhOztBQUViO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7O0FBRWI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTs7QUFFYjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0EsYUFBYTs7QUFFYjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhOztBQUViO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7O0FBRWI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTs7QUFFYjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0EsYUFBYTs7QUFFYjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhOztBQUViO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7O0FBRWI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTs7QUFFYjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0EsYUFBYTs7QUFFYjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhOztBQUViO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQSxhQUFhOztBQUViO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7O0FBRWI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTs7QUFFYjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhOztBQUViO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7O0FBRWI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTs7QUFFYjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhOztBQUViO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7O0FBRWI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTs7QUFFYjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVzs7QUFFWDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0gsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTs7QUFFYjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhOztBQUViO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7O0FBRWI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTs7QUFFYjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhOztBQUViO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0EsOEIiLCJmaWxlIjoiMi43ZTJkMDk5NzQwZTQwMDRiZjA5Yy5qcyIsInNvdXJjZXNDb250ZW50IjpbInZhciBfdHlwZW9mID0gcmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvdHlwZW9mXCIpW1wiZGVmYXVsdFwiXTtcblxuZnVuY3Rpb24gX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlKG5vZGVJbnRlcm9wKSB7XG4gIGlmICh0eXBlb2YgV2Vha01hcCAhPT0gXCJmdW5jdGlvblwiKSByZXR1cm4gbnVsbDtcbiAgdmFyIGNhY2hlQmFiZWxJbnRlcm9wID0gbmV3IFdlYWtNYXAoKTtcbiAgdmFyIGNhY2hlTm9kZUludGVyb3AgPSBuZXcgV2Vha01hcCgpO1xuICByZXR1cm4gKF9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSA9IGZ1bmN0aW9uIF9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZShub2RlSW50ZXJvcCkge1xuICAgIHJldHVybiBub2RlSW50ZXJvcCA/IGNhY2hlTm9kZUludGVyb3AgOiBjYWNoZUJhYmVsSW50ZXJvcDtcbiAgfSkobm9kZUludGVyb3ApO1xufVxuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChvYmosIG5vZGVJbnRlcm9wKSB7XG4gIGlmICghbm9kZUludGVyb3AgJiYgb2JqICYmIG9iai5fX2VzTW9kdWxlKSB7XG4gICAgcmV0dXJuIG9iajtcbiAgfVxuXG4gIGlmIChvYmogPT09IG51bGwgfHwgX3R5cGVvZihvYmopICE9PSBcIm9iamVjdFwiICYmIHR5cGVvZiBvYmogIT09IFwiZnVuY3Rpb25cIikge1xuICAgIHJldHVybiB7XG4gICAgICBcImRlZmF1bHRcIjogb2JqXG4gICAgfTtcbiAgfVxuXG4gIHZhciBjYWNoZSA9IF9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZShub2RlSW50ZXJvcCk7XG5cbiAgaWYgKGNhY2hlICYmIGNhY2hlLmhhcyhvYmopKSB7XG4gICAgcmV0dXJuIGNhY2hlLmdldChvYmopO1xuICB9XG5cbiAgdmFyIG5ld09iaiA9IHt9O1xuICB2YXIgaGFzUHJvcGVydHlEZXNjcmlwdG9yID0gT2JqZWN0LmRlZmluZVByb3BlcnR5ICYmIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3I7XG5cbiAgZm9yICh2YXIga2V5IGluIG9iaikge1xuICAgIGlmIChrZXkgIT09IFwiZGVmYXVsdFwiICYmIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIGtleSkpIHtcbiAgICAgIHZhciBkZXNjID0gaGFzUHJvcGVydHlEZXNjcmlwdG9yID8gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihvYmosIGtleSkgOiBudWxsO1xuXG4gICAgICBpZiAoZGVzYyAmJiAoZGVzYy5nZXQgfHwgZGVzYy5zZXQpKSB7XG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShuZXdPYmosIGtleSwgZGVzYyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBuZXdPYmpba2V5XSA9IG9ialtrZXldO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIG5ld09ialtcImRlZmF1bHRcIl0gPSBvYmo7XG5cbiAgaWYgKGNhY2hlKSB7XG4gICAgY2FjaGUuc2V0KG9iaiwgbmV3T2JqKTtcbiAgfVxuXG4gIHJldHVybiBuZXdPYmo7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQ7XG5tb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0cywgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7IiwiZnVuY3Rpb24gX2RlZmluZVByb3BlcnR5KG9iaiwga2V5LCB2YWx1ZSkge1xuICBpZiAoa2V5IGluIG9iaikge1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwge1xuICAgICAgdmFsdWU6IHZhbHVlLFxuICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgIHdyaXRhYmxlOiB0cnVlXG4gICAgfSk7XG4gIH0gZWxzZSB7XG4gICAgb2JqW2tleV0gPSB2YWx1ZTtcbiAgfVxuXG4gIHJldHVybiBvYmo7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2RlZmluZVByb3BlcnR5O1xubW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHMsIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlOyIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbmV4cG9ydHMuQ0xPU0VfV0lORE9XID0gZXhwb3J0cy5DQU5DRUxfUE9QVVBfUkVRVUVTVCA9IGV4cG9ydHMuQ0xPU0VEID0gZXhwb3J0cy5DTE9TRSA9IGV4cG9ydHMuSEFORFNIQUtFID0gZXhwb3J0cy5PUEVOX1RJTUVPVVQgPSBleHBvcnRzLk9QRU5FRCA9IGV4cG9ydHMuTE9HID0gZXhwb3J0cy5FWFRFTlNJT05fVVNCX1BFUk1JU1NJT05TID0gZXhwb3J0cy5FWFRFTlNJT05fUkVRVUVTVCA9IGV4cG9ydHMuQk9PVFNUUkFQID0gZXhwb3J0cy5JTklUID0gdm9pZCAwO1xudmFyIElOSVQgPSAncG9wdXAtaW5pdCc7XG5leHBvcnRzLklOSVQgPSBJTklUO1xudmFyIEJPT1RTVFJBUCA9ICdwb3B1cC1ib290c3RyYXAnO1xuZXhwb3J0cy5CT09UU1RSQVAgPSBCT09UU1RSQVA7XG52YXIgRVhURU5TSU9OX1JFUVVFU1QgPSAncG9wdXAtZXh0ZW5zaW9uX3JlcXVlc3QnO1xuZXhwb3J0cy5FWFRFTlNJT05fUkVRVUVTVCA9IEVYVEVOU0lPTl9SRVFVRVNUO1xudmFyIEVYVEVOU0lPTl9VU0JfUEVSTUlTU0lPTlMgPSAnb3Blbi11c2ItcGVybWlzc2lvbnMnO1xuZXhwb3J0cy5FWFRFTlNJT05fVVNCX1BFUk1JU1NJT05TID0gRVhURU5TSU9OX1VTQl9QRVJNSVNTSU9OUztcbnZhciBMT0cgPSAncG9wdXAtbG9nJztcbmV4cG9ydHMuTE9HID0gTE9HO1xudmFyIE9QRU5FRCA9ICdwb3B1cC1vcGVuZWQnO1xuZXhwb3J0cy5PUEVORUQgPSBPUEVORUQ7XG52YXIgT1BFTl9USU1FT1VUID0gJ3BvcHVwLW9wZW5fdGltZW91dCc7XG5leHBvcnRzLk9QRU5fVElNRU9VVCA9IE9QRU5fVElNRU9VVDtcbnZhciBIQU5EU0hBS0UgPSAncG9wdXAtaGFuZHNoYWtlJztcbmV4cG9ydHMuSEFORFNIQUtFID0gSEFORFNIQUtFO1xudmFyIENMT1NFID0gJ3BvcHVwLWNsb3NlJztcbmV4cG9ydHMuQ0xPU0UgPSBDTE9TRTtcbnZhciBDTE9TRUQgPSAncG9wdXAtY2xvc2VkJztcbmV4cG9ydHMuQ0xPU0VEID0gQ0xPU0VEO1xudmFyIENBTkNFTF9QT1BVUF9SRVFVRVNUID0gJ3VpLWNhbmNlbC1wb3B1cC1yZXF1ZXN0JztcbmV4cG9ydHMuQ0FOQ0VMX1BPUFVQX1JFUVVFU1QgPSBDQU5DRUxfUE9QVVBfUkVRVUVTVDtcbnZhciBDTE9TRV9XSU5ET1cgPSAnd2luZG93LmNsb3NlJztcbmV4cG9ydHMuQ0xPU0VfV0lORE9XID0gQ0xPU0VfV0lORE9XOyIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbmV4cG9ydHMuQUREUkVTU19WQUxJREFUSU9OID0gZXhwb3J0cy5CVU5ETEVfUFJPR1JFU1MgPSBleHBvcnRzLkxPR0lOX0NIQUxMRU5HRV9SRVNQT05TRSA9IGV4cG9ydHMuTE9HSU5fQ0hBTExFTkdFX1JFUVVFU1QgPSBleHBvcnRzLkNVU1RPTV9NRVNTQUdFX1JFU1BPTlNFID0gZXhwb3J0cy5DVVNUT01fTUVTU0FHRV9SRVFVRVNUID0gZXhwb3J0cy5DSEFOR0VfU0VUVElOR1MgPSBleHBvcnRzLlJFQ0VJVkVfV09SRCA9IGV4cG9ydHMuUkVDRUlWRV9GRUUgPSBleHBvcnRzLlJFQ0VJVkVfQUNDT1VOVCA9IGV4cG9ydHMuQ0hBTkdFX0FDQ09VTlQgPSBleHBvcnRzLlJFQ0VJVkVfREVWSUNFID0gZXhwb3J0cy5SRUNFSVZFX1BBU1NQSFJBU0UgPSBleHBvcnRzLlJFQ0VJVkVfUElOID0gZXhwb3J0cy5SRUNFSVZFX0NPTkZJUk1BVElPTiA9IGV4cG9ydHMuUkVDRUlWRV9QRVJNSVNTSU9OID0gZXhwb3J0cy5SRVFVRVNUX1dPUkQgPSBleHBvcnRzLlJFUVVFU1RfQlVUVE9OID0gZXhwb3J0cy5JTlNVRkZJQ0lFTlRfRlVORFMgPSBleHBvcnRzLlVQREFURV9DVVNUT01fRkVFID0gZXhwb3J0cy5TRUxFQ1RfRkVFID0gZXhwb3J0cy5TRUxFQ1RfQUNDT1VOVCA9IGV4cG9ydHMuU0VMRUNUX0RFVklDRSA9IGV4cG9ydHMuU0VUX09QRVJBVElPTiA9IGV4cG9ydHMuTE9BRElORyA9IGV4cG9ydHMuQ09OTkVDVCA9IGV4cG9ydHMuSU5WQUxJRF9QQVNTUEhSQVNFX0FDVElPTiA9IGV4cG9ydHMuSU5WQUxJRF9QQVNTUEhSQVNFID0gZXhwb3J0cy5SRVFVRVNUX1BBU1NQSFJBU0VfT05fREVWSUNFID0gZXhwb3J0cy5SRVFVRVNUX1BBU1NQSFJBU0UgPSBleHBvcnRzLklOVkFMSURfUElOID0gZXhwb3J0cy5SRVFVRVNUX1BJTiA9IGV4cG9ydHMuUkVRVUVTVF9DT05GSVJNQVRJT04gPSBleHBvcnRzLlJFUVVFU1RfUEVSTUlTU0lPTiA9IGV4cG9ydHMuQ0xPU0VfVUlfV0lORE9XID0gZXhwb3J0cy5SRVFVRVNUX1VJX1dJTkRPVyA9IGV4cG9ydHMuUkVDRUlWRV9CUk9XU0VSID0gZXhwb3J0cy5CUk9XU0VSX09VVERBVEVEID0gZXhwb3J0cy5CUk9XU0VSX05PVF9TVVBQT1JURUQgPSBleHBvcnRzLkRFVklDRV9ORUVEU19CQUNLVVAgPSBleHBvcnRzLkZJUk1XQVJFX05PVF9JTlNUQUxMRUQgPSBleHBvcnRzLkZJUk1XQVJFX05PVF9DT01QQVRJQkxFID0gZXhwb3J0cy5GSVJNV0FSRV9OT1RfU1VQUE9SVEVEID0gZXhwb3J0cy5GSVJNV0FSRV9PVVREQVRFRCA9IGV4cG9ydHMuRklSTVdBUkVfT0xEID0gZXhwb3J0cy5TRUVETEVTUyA9IGV4cG9ydHMuSU5JVElBTElaRSA9IGV4cG9ydHMuUkVRVUlSRV9NT0RFID0gZXhwb3J0cy5OT1RfSU5fQk9PVExPQURFUiA9IGV4cG9ydHMuQk9PVExPQURFUiA9IGV4cG9ydHMuVFJBTlNQT1JUID0gZXhwb3J0cy5JRlJBTUVfSEFORFNIQUtFID0gdm9pZCAwO1xudmFyIElGUkFNRV9IQU5EU0hBS0UgPSAnaWZyYW1lLWhhbmRzaGFrZSc7XG5leHBvcnRzLklGUkFNRV9IQU5EU0hBS0UgPSBJRlJBTUVfSEFORFNIQUtFO1xudmFyIFRSQU5TUE9SVCA9ICd1aS1ub190cmFuc3BvcnQnO1xuZXhwb3J0cy5UUkFOU1BPUlQgPSBUUkFOU1BPUlQ7XG52YXIgQk9PVExPQURFUiA9ICd1aS1kZXZpY2VfYm9vdGxvYWRlcl9tb2RlJztcbmV4cG9ydHMuQk9PVExPQURFUiA9IEJPT1RMT0FERVI7XG52YXIgTk9UX0lOX0JPT1RMT0FERVIgPSAndWktZGV2aWNlX25vdF9pbl9ib290bG9hZGVyX21vZGUnO1xuZXhwb3J0cy5OT1RfSU5fQk9PVExPQURFUiA9IE5PVF9JTl9CT09UTE9BREVSO1xudmFyIFJFUVVJUkVfTU9ERSA9ICd1aS1kZXZpY2VfcmVxdWlyZV9tb2RlJztcbmV4cG9ydHMuUkVRVUlSRV9NT0RFID0gUkVRVUlSRV9NT0RFO1xudmFyIElOSVRJQUxJWkUgPSAndWktZGV2aWNlX25vdF9pbml0aWFsaXplZCc7XG5leHBvcnRzLklOSVRJQUxJWkUgPSBJTklUSUFMSVpFO1xudmFyIFNFRURMRVNTID0gJ3VpLWRldmljZV9zZWVkbGVzcyc7XG5leHBvcnRzLlNFRURMRVNTID0gU0VFRExFU1M7XG52YXIgRklSTVdBUkVfT0xEID0gJ3VpLWRldmljZV9maXJtd2FyZV9vbGQnO1xuZXhwb3J0cy5GSVJNV0FSRV9PTEQgPSBGSVJNV0FSRV9PTEQ7XG52YXIgRklSTVdBUkVfT1VUREFURUQgPSAndWktZGV2aWNlX2Zpcm13YXJlX291dGRhdGVkJztcbmV4cG9ydHMuRklSTVdBUkVfT1VUREFURUQgPSBGSVJNV0FSRV9PVVREQVRFRDtcbnZhciBGSVJNV0FSRV9OT1RfU1VQUE9SVEVEID0gJ3VpLWRldmljZV9maXJtd2FyZV91bnN1cHBvcnRlZCc7XG5leHBvcnRzLkZJUk1XQVJFX05PVF9TVVBQT1JURUQgPSBGSVJNV0FSRV9OT1RfU1VQUE9SVEVEO1xudmFyIEZJUk1XQVJFX05PVF9DT01QQVRJQkxFID0gJ3VpLWRldmljZV9maXJtd2FyZV9ub3RfY29tcGF0aWJsZSc7XG5leHBvcnRzLkZJUk1XQVJFX05PVF9DT01QQVRJQkxFID0gRklSTVdBUkVfTk9UX0NPTVBBVElCTEU7XG52YXIgRklSTVdBUkVfTk9UX0lOU1RBTExFRCA9ICd1aS1kZXZpY2VfZmlybXdhcmVfbm90X2luc3RhbGxlZCc7XG5leHBvcnRzLkZJUk1XQVJFX05PVF9JTlNUQUxMRUQgPSBGSVJNV0FSRV9OT1RfSU5TVEFMTEVEO1xudmFyIERFVklDRV9ORUVEU19CQUNLVVAgPSAndWktZGV2aWNlX25lZWRzX2JhY2t1cCc7XG5leHBvcnRzLkRFVklDRV9ORUVEU19CQUNLVVAgPSBERVZJQ0VfTkVFRFNfQkFDS1VQO1xudmFyIEJST1dTRVJfTk9UX1NVUFBPUlRFRCA9ICd1aS1icm93c2VyX25vdF9zdXBwb3J0ZWQnO1xuZXhwb3J0cy5CUk9XU0VSX05PVF9TVVBQT1JURUQgPSBCUk9XU0VSX05PVF9TVVBQT1JURUQ7XG52YXIgQlJPV1NFUl9PVVREQVRFRCA9ICd1aS1icm93c2VyX291dGRhdGVkJztcbmV4cG9ydHMuQlJPV1NFUl9PVVREQVRFRCA9IEJST1dTRVJfT1VUREFURUQ7XG52YXIgUkVDRUlWRV9CUk9XU0VSID0gJ3VpLXJlY2VpdmVfYnJvd3Nlcic7XG5leHBvcnRzLlJFQ0VJVkVfQlJPV1NFUiA9IFJFQ0VJVkVfQlJPV1NFUjtcbnZhciBSRVFVRVNUX1VJX1dJTkRPVyA9ICd1aS1yZXF1ZXN0X3dpbmRvdyc7XG5leHBvcnRzLlJFUVVFU1RfVUlfV0lORE9XID0gUkVRVUVTVF9VSV9XSU5ET1c7XG52YXIgQ0xPU0VfVUlfV0lORE9XID0gJ3VpLWNsb3NlX3dpbmRvdyc7XG5leHBvcnRzLkNMT1NFX1VJX1dJTkRPVyA9IENMT1NFX1VJX1dJTkRPVztcbnZhciBSRVFVRVNUX1BFUk1JU1NJT04gPSAndWktcmVxdWVzdF9wZXJtaXNzaW9uJztcbmV4cG9ydHMuUkVRVUVTVF9QRVJNSVNTSU9OID0gUkVRVUVTVF9QRVJNSVNTSU9OO1xudmFyIFJFUVVFU1RfQ09ORklSTUFUSU9OID0gJ3VpLXJlcXVlc3RfY29uZmlybWF0aW9uJztcbmV4cG9ydHMuUkVRVUVTVF9DT05GSVJNQVRJT04gPSBSRVFVRVNUX0NPTkZJUk1BVElPTjtcbnZhciBSRVFVRVNUX1BJTiA9ICd1aS1yZXF1ZXN0X3Bpbic7XG5leHBvcnRzLlJFUVVFU1RfUElOID0gUkVRVUVTVF9QSU47XG52YXIgSU5WQUxJRF9QSU4gPSAndWktaW52YWxpZF9waW4nO1xuZXhwb3J0cy5JTlZBTElEX1BJTiA9IElOVkFMSURfUElOO1xudmFyIFJFUVVFU1RfUEFTU1BIUkFTRSA9ICd1aS1yZXF1ZXN0X3Bhc3NwaHJhc2UnO1xuZXhwb3J0cy5SRVFVRVNUX1BBU1NQSFJBU0UgPSBSRVFVRVNUX1BBU1NQSFJBU0U7XG52YXIgUkVRVUVTVF9QQVNTUEhSQVNFX09OX0RFVklDRSA9ICd1aS1yZXF1ZXN0X3Bhc3NwaHJhc2Vfb25fZGV2aWNlJztcbmV4cG9ydHMuUkVRVUVTVF9QQVNTUEhSQVNFX09OX0RFVklDRSA9IFJFUVVFU1RfUEFTU1BIUkFTRV9PTl9ERVZJQ0U7XG52YXIgSU5WQUxJRF9QQVNTUEhSQVNFID0gJ3VpLWludmFsaWRfcGFzc3BocmFzZSc7XG5leHBvcnRzLklOVkFMSURfUEFTU1BIUkFTRSA9IElOVkFMSURfUEFTU1BIUkFTRTtcbnZhciBJTlZBTElEX1BBU1NQSFJBU0VfQUNUSU9OID0gJ3VpLWludmFsaWRfcGFzc3BocmFzZV9hY3Rpb24nO1xuZXhwb3J0cy5JTlZBTElEX1BBU1NQSFJBU0VfQUNUSU9OID0gSU5WQUxJRF9QQVNTUEhSQVNFX0FDVElPTjtcbnZhciBDT05ORUNUID0gJ3VpLWNvbm5lY3QnO1xuZXhwb3J0cy5DT05ORUNUID0gQ09OTkVDVDtcbnZhciBMT0FESU5HID0gJ3VpLWxvYWRpbmcnO1xuZXhwb3J0cy5MT0FESU5HID0gTE9BRElORztcbnZhciBTRVRfT1BFUkFUSU9OID0gJ3VpLXNldF9vcGVyYXRpb24nO1xuZXhwb3J0cy5TRVRfT1BFUkFUSU9OID0gU0VUX09QRVJBVElPTjtcbnZhciBTRUxFQ1RfREVWSUNFID0gJ3VpLXNlbGVjdF9kZXZpY2UnO1xuZXhwb3J0cy5TRUxFQ1RfREVWSUNFID0gU0VMRUNUX0RFVklDRTtcbnZhciBTRUxFQ1RfQUNDT1VOVCA9ICd1aS1zZWxlY3RfYWNjb3VudCc7XG5leHBvcnRzLlNFTEVDVF9BQ0NPVU5UID0gU0VMRUNUX0FDQ09VTlQ7XG52YXIgU0VMRUNUX0ZFRSA9ICd1aS1zZWxlY3RfZmVlJztcbmV4cG9ydHMuU0VMRUNUX0ZFRSA9IFNFTEVDVF9GRUU7XG52YXIgVVBEQVRFX0NVU1RPTV9GRUUgPSAndWktdXBkYXRlX2N1c3RvbV9mZWUnO1xuZXhwb3J0cy5VUERBVEVfQ1VTVE9NX0ZFRSA9IFVQREFURV9DVVNUT01fRkVFO1xudmFyIElOU1VGRklDSUVOVF9GVU5EUyA9ICd1aS1pbnN1ZmZpY2llbnRfZnVuZHMnO1xuZXhwb3J0cy5JTlNVRkZJQ0lFTlRfRlVORFMgPSBJTlNVRkZJQ0lFTlRfRlVORFM7XG52YXIgUkVRVUVTVF9CVVRUT04gPSAndWktYnV0dG9uJztcbmV4cG9ydHMuUkVRVUVTVF9CVVRUT04gPSBSRVFVRVNUX0JVVFRPTjtcbnZhciBSRVFVRVNUX1dPUkQgPSAndWktcmVxdWVzdF93b3JkJztcbmV4cG9ydHMuUkVRVUVTVF9XT1JEID0gUkVRVUVTVF9XT1JEO1xudmFyIFJFQ0VJVkVfUEVSTUlTU0lPTiA9ICd1aS1yZWNlaXZlX3Blcm1pc3Npb24nO1xuZXhwb3J0cy5SRUNFSVZFX1BFUk1JU1NJT04gPSBSRUNFSVZFX1BFUk1JU1NJT047XG52YXIgUkVDRUlWRV9DT05GSVJNQVRJT04gPSAndWktcmVjZWl2ZV9jb25maXJtYXRpb24nO1xuZXhwb3J0cy5SRUNFSVZFX0NPTkZJUk1BVElPTiA9IFJFQ0VJVkVfQ09ORklSTUFUSU9OO1xudmFyIFJFQ0VJVkVfUElOID0gJ3VpLXJlY2VpdmVfcGluJztcbmV4cG9ydHMuUkVDRUlWRV9QSU4gPSBSRUNFSVZFX1BJTjtcbnZhciBSRUNFSVZFX1BBU1NQSFJBU0UgPSAndWktcmVjZWl2ZV9wYXNzcGhyYXNlJztcbmV4cG9ydHMuUkVDRUlWRV9QQVNTUEhSQVNFID0gUkVDRUlWRV9QQVNTUEhSQVNFO1xudmFyIFJFQ0VJVkVfREVWSUNFID0gJ3VpLXJlY2VpdmVfZGV2aWNlJztcbmV4cG9ydHMuUkVDRUlWRV9ERVZJQ0UgPSBSRUNFSVZFX0RFVklDRTtcbnZhciBDSEFOR0VfQUNDT1VOVCA9ICd1aS1jaGFuZ2VfYWNjb3VudCc7XG5leHBvcnRzLkNIQU5HRV9BQ0NPVU5UID0gQ0hBTkdFX0FDQ09VTlQ7XG52YXIgUkVDRUlWRV9BQ0NPVU5UID0gJ3VpLXJlY2VpdmVfYWNjb3VudCc7XG5leHBvcnRzLlJFQ0VJVkVfQUNDT1VOVCA9IFJFQ0VJVkVfQUNDT1VOVDtcbnZhciBSRUNFSVZFX0ZFRSA9ICd1aS1yZWNlaXZlX2ZlZSc7XG5leHBvcnRzLlJFQ0VJVkVfRkVFID0gUkVDRUlWRV9GRUU7XG52YXIgUkVDRUlWRV9XT1JEID0gJ3VpLXJlY2VpdmVfd29yZCc7XG5leHBvcnRzLlJFQ0VJVkVfV09SRCA9IFJFQ0VJVkVfV09SRDtcbnZhciBDSEFOR0VfU0VUVElOR1MgPSAndWktY2hhbmdlX3NldHRpbmdzJztcbmV4cG9ydHMuQ0hBTkdFX1NFVFRJTkdTID0gQ0hBTkdFX1NFVFRJTkdTO1xudmFyIENVU1RPTV9NRVNTQUdFX1JFUVVFU1QgPSAndWktY3VzdG9tX3JlcXVlc3QnO1xuZXhwb3J0cy5DVVNUT01fTUVTU0FHRV9SRVFVRVNUID0gQ1VTVE9NX01FU1NBR0VfUkVRVUVTVDtcbnZhciBDVVNUT01fTUVTU0FHRV9SRVNQT05TRSA9ICd1aS1jdXN0b21fcmVzcG9uc2UnO1xuZXhwb3J0cy5DVVNUT01fTUVTU0FHRV9SRVNQT05TRSA9IENVU1RPTV9NRVNTQUdFX1JFU1BPTlNFO1xudmFyIExPR0lOX0NIQUxMRU5HRV9SRVFVRVNUID0gJ3VpLWxvZ2luX2NoYWxsZW5nZV9yZXF1ZXN0JztcbmV4cG9ydHMuTE9HSU5fQ0hBTExFTkdFX1JFUVVFU1QgPSBMT0dJTl9DSEFMTEVOR0VfUkVRVUVTVDtcbnZhciBMT0dJTl9DSEFMTEVOR0VfUkVTUE9OU0UgPSAndWktbG9naW5fY2hhbGxlbmdlX3Jlc3BvbnNlJztcbmV4cG9ydHMuTE9HSU5fQ0hBTExFTkdFX1JFU1BPTlNFID0gTE9HSU5fQ0hBTExFTkdFX1JFU1BPTlNFO1xudmFyIEJVTkRMRV9QUk9HUkVTUyA9ICd1aS1idW5kbGVfcHJvZ3Jlc3MnO1xuZXhwb3J0cy5CVU5ETEVfUFJPR1JFU1MgPSBCVU5ETEVfUFJPR1JFU1M7XG52YXIgQUREUkVTU19WQUxJREFUSU9OID0gJ3VpLWFkZHJlc3NfdmFsaWRhdGlvbic7XG5leHBvcnRzLkFERFJFU1NfVkFMSURBVElPTiA9IEFERFJFU1NfVkFMSURBVElPTjsiLCIndXNlIHN0cmljdCc7XG5cbnZhciBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0ID0gcmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVEZWZhdWx0XCIpO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuZXhwb3J0cy5OT19DT0lOX0lORk8gPSBleHBvcnRzLkJBQ0tFTkRfTk9fVVJMID0gZXhwb3J0cy5XRUJVU0JfRVJST1JfTUVTU0FHRSA9IGV4cG9ydHMuSU5WQUxJRF9QSU5fRVJST1JfTUVTU0FHRSA9IGV4cG9ydHMuV1JPTkdfUFJFVklPVVNfU0VTU0lPTl9FUlJPUl9NRVNTQUdFID0gZXhwb3J0cy5JTlZBTElEX1NUQVRFID0gZXhwb3J0cy5DQUxMX09WRVJSSURFID0gZXhwb3J0cy5JTklUSUFMSVpBVElPTl9GQUlMRUQgPSBleHBvcnRzLkRFVklDRV9VU0VEX0VMU0VXSEVSRSA9IGV4cG9ydHMuUEVSTUlTU0lPTlNfTk9UX0dSQU5URUQgPSBleHBvcnRzLlBPUFVQX0NMT1NFRCA9IGV4cG9ydHMuSU5WQUxJRF9QQVJBTUVURVJTID0gZXhwb3J0cy5ERVZJQ0VfQ0FMTF9JTl9QUk9HUkVTUyA9IGV4cG9ydHMuREVWSUNFX05PVF9GT1VORCA9IGV4cG9ydHMuV1JPTkdfVFJBTlNQT1JUX0NPTkZJRyA9IGV4cG9ydHMuTk9fVFJBTlNQT1JUID0gZXhwb3J0cy5NQU5BR0VNRU5UX05PVF9BTExPV0VEID0gZXhwb3J0cy5NQU5JRkVTVF9OT1RfU0VUID0gZXhwb3J0cy5CUk9XU0VSX05PVF9TVVBQT1JURUQgPSBleHBvcnRzLlBPUFVQX1RJTUVPVVQgPSBleHBvcnRzLklGUkFNRV9USU1FT1VUID0gZXhwb3J0cy5JRlJBTUVfSU5JVElBTElaRUQgPSBleHBvcnRzLklGUkFNRV9CTE9DS0VEID0gZXhwb3J0cy5OT19JRlJBTUUgPSBleHBvcnRzLmludmFsaWRQYXJhbWV0ZXIgPSBleHBvcnRzLlRyZXpvckVycm9yID0gdm9pZCAwO1xuXG52YXIgX2luaGVyaXRzTG9vc2UyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbmhlcml0c0xvb3NlXCIpKTtcblxudmFyIF93cmFwTmF0aXZlU3VwZXIyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy93cmFwTmF0aXZlU3VwZXJcIikpO1xuXG52YXIgVHJlem9yRXJyb3IgPVxuLyojX19QVVJFX18qL1xuZnVuY3Rpb24gKF9FcnJvcikge1xuICAoMCwgX2luaGVyaXRzTG9vc2UyW1wiZGVmYXVsdFwiXSkoVHJlem9yRXJyb3IsIF9FcnJvcik7XG5cbiAgZnVuY3Rpb24gVHJlem9yRXJyb3IoY29kZSwgbWVzc2FnZSkge1xuICAgIHZhciBfdGhpcztcblxuICAgIF90aGlzID0gX0Vycm9yLmNhbGwodGhpcywgbWVzc2FnZSkgfHwgdGhpcztcbiAgICBfdGhpcy5jb2RlID0gY29kZTtcbiAgICBfdGhpcy5tZXNzYWdlID0gbWVzc2FnZTtcbiAgICByZXR1cm4gX3RoaXM7XG4gIH1cblxuICByZXR1cm4gVHJlem9yRXJyb3I7XG59KCgwLCBfd3JhcE5hdGl2ZVN1cGVyMltcImRlZmF1bHRcIl0pKEVycm9yKSk7XG5cbmV4cG9ydHMuVHJlem9yRXJyb3IgPSBUcmV6b3JFcnJvcjtcblxudmFyIGludmFsaWRQYXJhbWV0ZXIgPSBmdW5jdGlvbiBpbnZhbGlkUGFyYW1ldGVyKG1lc3NhZ2UpIHtcbiAgcmV0dXJuIG5ldyBUcmV6b3JFcnJvcignQ29ubmVjdF9JbnZhbGlkUGFyYW1ldGVyJywgbWVzc2FnZSk7XG59OyAvLyBsZXZlbCAxMDAgZXJyb3IgZHVyaW5nIGluaXRpYWxpemF0aW9uXG5cblxuZXhwb3J0cy5pbnZhbGlkUGFyYW1ldGVyID0gaW52YWxpZFBhcmFtZXRlcjtcbnZhciBOT19JRlJBTUUgPSBuZXcgVHJlem9yRXJyb3IoMTAwLCAnVHJlem9yQ29ubmVjdCBub3QgeWV0IGluaXRpYWxpemVkJyk7XG5leHBvcnRzLk5PX0lGUkFNRSA9IE5PX0lGUkFNRTtcbnZhciBJRlJBTUVfQkxPQ0tFRCA9IG5ldyBUcmV6b3JFcnJvcignaWZyYW1lX2Jsb2NrZWQnLCAnVHJlem9yQ29ubmVjdCBpZnJhbWUgd2FzIGJsb2NrZWQnKTtcbmV4cG9ydHMuSUZSQU1FX0JMT0NLRUQgPSBJRlJBTUVfQkxPQ0tFRDtcbnZhciBJRlJBTUVfSU5JVElBTElaRUQgPSBuZXcgVHJlem9yRXJyb3IoMTAxLCAnVHJlem9yQ29ubmVjdCBoYXMgYmVlbiBhbHJlYWR5IGluaXRpYWxpemVkJyk7XG5leHBvcnRzLklGUkFNRV9JTklUSUFMSVpFRCA9IElGUkFNRV9JTklUSUFMSVpFRDtcbnZhciBJRlJBTUVfVElNRU9VVCA9IG5ldyBUcmV6b3JFcnJvcigxMDIsICdJZnJhbWUgdGltZW91dCcpO1xuZXhwb3J0cy5JRlJBTUVfVElNRU9VVCA9IElGUkFNRV9USU1FT1VUO1xudmFyIFBPUFVQX1RJTUVPVVQgPSBuZXcgVHJlem9yRXJyb3IoMTAzLCAnUG9wdXAgdGltZW91dCcpO1xuZXhwb3J0cy5QT1BVUF9USU1FT1VUID0gUE9QVVBfVElNRU9VVDtcbnZhciBCUk9XU0VSX05PVF9TVVBQT1JURUQgPSBuZXcgVHJlem9yRXJyb3IoMTA0LCAnQnJvd3NlciBub3Qgc3VwcG9ydGVkJyk7XG5leHBvcnRzLkJST1dTRVJfTk9UX1NVUFBPUlRFRCA9IEJST1dTRVJfTk9UX1NVUFBPUlRFRDtcbnZhciBNQU5JRkVTVF9OT1RfU0VUID0gbmV3IFRyZXpvckVycm9yKDEwNSwgJ01hbmlmZXN0IG5vdCBzZXQuIFJlYWQgbW9yZSBhdCBodHRwczovL2dpdGh1Yi5jb20vdHJlem9yL2Nvbm5lY3QvYmxvYi9kZXZlbG9wL2RvY3MvaW5kZXgubWQnKTtcbmV4cG9ydHMuTUFOSUZFU1RfTk9UX1NFVCA9IE1BTklGRVNUX05PVF9TRVQ7XG52YXIgTUFOQUdFTUVOVF9OT1RfQUxMT1dFRCA9IG5ldyBUcmV6b3JFcnJvcigxMDUsICdNYW5hZ2VtZW50IG1ldGhvZCBub3QgYWxsb3dlZCBmb3IgdGhpcyBjb25maWd1cmF0aW9uJyk7XG5leHBvcnRzLk1BTkFHRU1FTlRfTk9UX0FMTE9XRUQgPSBNQU5BR0VNRU5UX05PVF9BTExPV0VEO1xudmFyIE5PX1RSQU5TUE9SVCA9IG5ldyBUcmV6b3JFcnJvcig1MDAsICdUcmFuc3BvcnQgaXMgbWlzc2luZycpO1xuZXhwb3J0cy5OT19UUkFOU1BPUlQgPSBOT19UUkFOU1BPUlQ7XG52YXIgV1JPTkdfVFJBTlNQT1JUX0NPTkZJRyA9IG5ldyBUcmV6b3JFcnJvcig1MDAyLCAnV3JvbmcgY29uZmlnIHJlc3BvbnNlJyk7IC8vIGNvbmZpZ19zaWduZWRcblxuZXhwb3J0cy5XUk9OR19UUkFOU1BPUlRfQ09ORklHID0gV1JPTkdfVFJBTlNQT1JUX0NPTkZJRztcbnZhciBERVZJQ0VfTk9UX0ZPVU5EID0gbmV3IFRyZXpvckVycm9yKDUwMSwgJ0RldmljZSBub3QgZm91bmQnKTsgLy8gZXhwb3J0IGNvbnN0IERFVklDRV9DQUxMX0lOX1BST0dSRVNTOiBUcmV6b3JFcnJvciA9IG5ldyBUcmV6b3JFcnJvcig1MDIsIFwiRGV2aWNlIGNhbGwgaW4gcHJvZ3Jlc3MuXCIpO1xuXG5leHBvcnRzLkRFVklDRV9OT1RfRk9VTkQgPSBERVZJQ0VfTk9UX0ZPVU5EO1xudmFyIERFVklDRV9DQUxMX0lOX1BST0dSRVNTID0gbmV3IFRyZXpvckVycm9yKDUwMywgJ0RldmljZSBjYWxsIGluIHByb2dyZXNzJyk7XG5leHBvcnRzLkRFVklDRV9DQUxMX0lOX1BST0dSRVNTID0gREVWSUNFX0NBTExfSU5fUFJPR1JFU1M7XG52YXIgSU5WQUxJRF9QQVJBTUVURVJTID0gbmV3IFRyZXpvckVycm9yKDUwNCwgJ0ludmFsaWQgcGFyYW1ldGVycycpO1xuZXhwb3J0cy5JTlZBTElEX1BBUkFNRVRFUlMgPSBJTlZBTElEX1BBUkFNRVRFUlM7XG52YXIgUE9QVVBfQ0xPU0VEID0gbmV3IEVycm9yKCdQb3B1cCBjbG9zZWQnKTtcbmV4cG9ydHMuUE9QVVBfQ0xPU0VEID0gUE9QVVBfQ0xPU0VEO1xudmFyIFBFUk1JU1NJT05TX05PVF9HUkFOVEVEID0gbmV3IFRyZXpvckVycm9yKDQwMywgJ1Blcm1pc3Npb25zIG5vdCBncmFudGVkJyk7XG5leHBvcnRzLlBFUk1JU1NJT05TX05PVF9HUkFOVEVEID0gUEVSTUlTU0lPTlNfTk9UX0dSQU5URUQ7XG52YXIgREVWSUNFX1VTRURfRUxTRVdIRVJFID0gbmV3IFRyZXpvckVycm9yKDcwMCwgJ0RldmljZSBpcyB1c2VkIGluIGFub3RoZXIgd2luZG93Jyk7XG5leHBvcnRzLkRFVklDRV9VU0VEX0VMU0VXSEVSRSA9IERFVklDRV9VU0VEX0VMU0VXSEVSRTtcbnZhciBJTklUSUFMSVpBVElPTl9GQUlMRUQgPSBuZXcgVHJlem9yRXJyb3IoJ0ZhaWx1cmVfSW5pdGlhbGl6ZScsICdJbml0aWFsaXphdGlvbiBmYWlsZWQnKTtcbmV4cG9ydHMuSU5JVElBTElaQVRJT05fRkFJTEVEID0gSU5JVElBTElaQVRJT05fRkFJTEVEO1xudmFyIENBTExfT1ZFUlJJREUgPSBuZXcgVHJlem9yRXJyb3IoJ0ZhaWx1cmVfQWN0aW9uT3ZlcnJpZGUnLCAnb3ZlcnJpZGUnKTtcbmV4cG9ydHMuQ0FMTF9PVkVSUklERSA9IENBTExfT1ZFUlJJREU7XG52YXIgSU5WQUxJRF9TVEFURSA9IG5ldyBUcmV6b3JFcnJvcignRmFpbHVyZV9QYXNzcGhyYXNlU3RhdGUnLCAnUGFzc3BocmFzZSBpcyBpbmNvcnJlY3QnKTsgLy8gYSBzbGlnaHQgaGFja1xuLy8gdGhpcyBlcnJvciBzdHJpbmcgaXMgaGFyZC1jb2RlZFxuLy8gaW4gYm90aCBicmlkZ2UgYW5kIGV4dGVuc2lvblxuXG5leHBvcnRzLklOVkFMSURfU1RBVEUgPSBJTlZBTElEX1NUQVRFO1xudmFyIFdST05HX1BSRVZJT1VTX1NFU1NJT05fRVJST1JfTUVTU0FHRSA9ICd3cm9uZyBwcmV2aW91cyBzZXNzaW9uJztcbmV4cG9ydHMuV1JPTkdfUFJFVklPVVNfU0VTU0lPTl9FUlJPUl9NRVNTQUdFID0gV1JPTkdfUFJFVklPVVNfU0VTU0lPTl9FUlJPUl9NRVNTQUdFO1xudmFyIElOVkFMSURfUElOX0VSUk9SX01FU1NBR0UgPSAnUElOIGludmFsaWQnO1xuZXhwb3J0cy5JTlZBTElEX1BJTl9FUlJPUl9NRVNTQUdFID0gSU5WQUxJRF9QSU5fRVJST1JfTUVTU0FHRTtcbnZhciBXRUJVU0JfRVJST1JfTUVTU0FHRSA9ICdOZXR3b3JrRXJyb3I6IFVuYWJsZSB0byBjbGFpbSBpbnRlcmZhY2UuJzsgLy8gQmxvY2tCb29rXG5cbmV4cG9ydHMuV0VCVVNCX0VSUk9SX01FU1NBR0UgPSBXRUJVU0JfRVJST1JfTUVTU0FHRTtcbnZhciBCQUNLRU5EX05PX1VSTCA9IG5ldyBUcmV6b3JFcnJvcignQmFja2VuZF9pbml0JywgJ1VybCBub3QgZm91bmQnKTtcbmV4cG9ydHMuQkFDS0VORF9OT19VUkwgPSBCQUNLRU5EX05PX1VSTDtcbnZhciBOT19DT0lOX0lORk8gPSBpbnZhbGlkUGFyYW1ldGVyKCdDb2luIG5vdCBmb3VuZC4nKTtcbmV4cG9ydHMuTk9fQ09JTl9JTkZPID0gTk9fQ09JTl9JTkZPOyIsImZ1bmN0aW9uIF9zZXRQcm90b3R5cGVPZihvLCBwKSB7XG4gIG1vZHVsZS5leHBvcnRzID0gX3NldFByb3RvdHlwZU9mID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8IGZ1bmN0aW9uIF9zZXRQcm90b3R5cGVPZihvLCBwKSB7XG4gICAgby5fX3Byb3RvX18gPSBwO1xuICAgIHJldHVybiBvO1xuICB9O1xuXG4gIG1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzLCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbiAgcmV0dXJuIF9zZXRQcm90b3R5cGVPZihvLCBwKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfc2V0UHJvdG90eXBlT2Y7XG5tb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0cywgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7IiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuZXhwb3J0cy5CTE9DS0NIQUlOX0VWRU5UID0gZXhwb3J0cy5SRVNQT05TRV9FVkVOVCA9IGV4cG9ydHMuVFJBTlNQT1JUX0VWRU5UID0gZXhwb3J0cy5ERVZJQ0VfRVZFTlQgPSBleHBvcnRzLlVJX0VWRU5UID0gZXhwb3J0cy5DT1JFX0VWRU5UID0gdm9pZCAwO1xudmFyIENPUkVfRVZFTlQgPSAnQ09SRV9FVkVOVCc7XG5leHBvcnRzLkNPUkVfRVZFTlQgPSBDT1JFX0VWRU5UO1xudmFyIFVJX0VWRU5UID0gJ1VJX0VWRU5UJztcbmV4cG9ydHMuVUlfRVZFTlQgPSBVSV9FVkVOVDtcbnZhciBERVZJQ0VfRVZFTlQgPSAnREVWSUNFX0VWRU5UJztcbmV4cG9ydHMuREVWSUNFX0VWRU5UID0gREVWSUNFX0VWRU5UO1xudmFyIFRSQU5TUE9SVF9FVkVOVCA9ICdUUkFOU1BPUlRfRVZFTlQnO1xuZXhwb3J0cy5UUkFOU1BPUlRfRVZFTlQgPSBUUkFOU1BPUlRfRVZFTlQ7XG52YXIgUkVTUE9OU0VfRVZFTlQgPSAnUkVTUE9OU0VfRVZFTlQnO1xuZXhwb3J0cy5SRVNQT05TRV9FVkVOVCA9IFJFU1BPTlNFX0VWRU5UO1xudmFyIEJMT0NLQ0hBSU5fRVZFTlQgPSAnQkxPQ0tDSEFJTl9FVkVOVCc7XG5leHBvcnRzLkJMT0NLQ0hBSU5fRVZFTlQgPSBCTE9DS0NIQUlOX0VWRU5UOyIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbmV4cG9ydHMuU1RBUlRfUEVORElORyA9IGV4cG9ydHMuUkVDT05ORUNUID0gZXhwb3J0cy5SRVFVRVNUID0gZXhwb3J0cy5TVFJFQU0gPSBleHBvcnRzLlVQREFURSA9IGV4cG9ydHMuRVJST1IgPSBleHBvcnRzLlNUQVJUID0gdm9pZCAwO1xudmFyIFNUQVJUID0gJ3RyYW5zcG9ydC1zdGFydCc7XG5leHBvcnRzLlNUQVJUID0gU1RBUlQ7XG52YXIgRVJST1IgPSAndHJhbnNwb3J0LWVycm9yJztcbmV4cG9ydHMuRVJST1IgPSBFUlJPUjtcbnZhciBVUERBVEUgPSAndHJhbnNwb3J0LXVwZGF0ZSc7XG5leHBvcnRzLlVQREFURSA9IFVQREFURTtcbnZhciBTVFJFQU0gPSAndHJhbnNwb3J0LXN0cmVhbSc7XG5leHBvcnRzLlNUUkVBTSA9IFNUUkVBTTtcbnZhciBSRVFVRVNUID0gJ3RyYW5zcG9ydC1yZXF1ZXN0X2RldmljZSc7XG5leHBvcnRzLlJFUVVFU1QgPSBSRVFVRVNUO1xudmFyIFJFQ09OTkVDVCA9ICd0cmFuc3BvcnQtcmVjb25uZWN0JztcbmV4cG9ydHMuUkVDT05ORUNUID0gUkVDT05ORUNUO1xudmFyIFNUQVJUX1BFTkRJTkcgPSAndHJhbnNwb3J0LXN0YXJ0X3BlbmRpbmcnO1xuZXhwb3J0cy5TVEFSVF9QRU5ESU5HID0gU1RBUlRfUEVORElORzsiLCIndXNlIHN0cmljdCc7IC8vIGRldmljZSBsaXN0IGV2ZW50c1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuZXhwb3J0cy5VTlJFQURBQkxFID0gZXhwb3J0cy5XQUlUX0ZPUl9TRUxFQ1RJT04gPSBleHBvcnRzLldPUkQgPSBleHBvcnRzLlBBU1NQSFJBU0VfT05fREVWSUNFID0gZXhwb3J0cy5QQVNTUEhSQVNFID0gZXhwb3J0cy5QSU4gPSBleHBvcnRzLkJVVFRPTiA9IGV4cG9ydHMuTE9BRElORyA9IGV4cG9ydHMuVVNFRF9FTFNFV0hFUkUgPSBleHBvcnRzLlJFTEVBU0VEID0gZXhwb3J0cy5BQ1FVSVJFRCA9IGV4cG9ydHMuUkVMRUFTRSA9IGV4cG9ydHMuQUNRVUlSRSA9IGV4cG9ydHMuQ0hBTkdFRCA9IGV4cG9ydHMuRElTQ09OTkVDVCA9IGV4cG9ydHMuQ09OTkVDVF9VTkFDUVVJUkVEID0gZXhwb3J0cy5DT05ORUNUID0gdm9pZCAwO1xudmFyIENPTk5FQ1QgPSAnZGV2aWNlLWNvbm5lY3QnO1xuZXhwb3J0cy5DT05ORUNUID0gQ09OTkVDVDtcbnZhciBDT05ORUNUX1VOQUNRVUlSRUQgPSAnZGV2aWNlLWNvbm5lY3RfdW5hY3F1aXJlZCc7XG5leHBvcnRzLkNPTk5FQ1RfVU5BQ1FVSVJFRCA9IENPTk5FQ1RfVU5BQ1FVSVJFRDtcbnZhciBESVNDT05ORUNUID0gJ2RldmljZS1kaXNjb25uZWN0JztcbmV4cG9ydHMuRElTQ09OTkVDVCA9IERJU0NPTk5FQ1Q7XG52YXIgQ0hBTkdFRCA9ICdkZXZpY2UtY2hhbmdlZCc7XG5leHBvcnRzLkNIQU5HRUQgPSBDSEFOR0VEO1xudmFyIEFDUVVJUkUgPSAnZGV2aWNlLWFjcXVpcmUnO1xuZXhwb3J0cy5BQ1FVSVJFID0gQUNRVUlSRTtcbnZhciBSRUxFQVNFID0gJ2RldmljZS1yZWxlYXNlJztcbmV4cG9ydHMuUkVMRUFTRSA9IFJFTEVBU0U7XG52YXIgQUNRVUlSRUQgPSAnZGV2aWNlLWFjcXVpcmVkJztcbmV4cG9ydHMuQUNRVUlSRUQgPSBBQ1FVSVJFRDtcbnZhciBSRUxFQVNFRCA9ICdkZXZpY2UtcmVsZWFzZWQnO1xuZXhwb3J0cy5SRUxFQVNFRCA9IFJFTEVBU0VEO1xudmFyIFVTRURfRUxTRVdIRVJFID0gJ2RldmljZS11c2VkX2Vsc2V3aGVyZSc7XG5leHBvcnRzLlVTRURfRUxTRVdIRVJFID0gVVNFRF9FTFNFV0hFUkU7XG52YXIgTE9BRElORyA9ICdkZXZpY2UtbG9hZGluZyc7IC8vIHRyZXpvci1saW5rIGV2ZW50cyBpbiBwcm90b2J1ZiBmb3JtYXRcblxuZXhwb3J0cy5MT0FESU5HID0gTE9BRElORztcbnZhciBCVVRUT04gPSAnYnV0dG9uJztcbmV4cG9ydHMuQlVUVE9OID0gQlVUVE9OO1xudmFyIFBJTiA9ICdwaW4nO1xuZXhwb3J0cy5QSU4gPSBQSU47XG52YXIgUEFTU1BIUkFTRSA9ICdwYXNzcGhyYXNlJztcbmV4cG9ydHMuUEFTU1BIUkFTRSA9IFBBU1NQSFJBU0U7XG52YXIgUEFTU1BIUkFTRV9PTl9ERVZJQ0UgPSAncGFzc3BocmFzZV9vbl9kZXZpY2UnO1xuZXhwb3J0cy5QQVNTUEhSQVNFX09OX0RFVklDRSA9IFBBU1NQSFJBU0VfT05fREVWSUNFO1xudmFyIFdPUkQgPSAnd29yZCc7IC8vIGN1c3RvbVxuXG5leHBvcnRzLldPUkQgPSBXT1JEO1xudmFyIFdBSVRfRk9SX1NFTEVDVElPTiA9ICdkZXZpY2Utd2FpdF9mb3Jfc2VsZWN0aW9uJzsgLy8gdGhpcyBzdHJpbmcgaGFzIGRpZmZlcmVudCBwcmVmaXggdGhhbiBvdGhlciBjb25zdGFudHMgYW5kIGl0J3MgdXNlZCBhcyBkZXZpY2UgcGF0aFxuXG5leHBvcnRzLldBSVRfRk9SX1NFTEVDVElPTiA9IFdBSVRfRk9SX1NFTEVDVElPTjtcbnZhciBVTlJFQURBQkxFID0gJ3VucmVhZGFibGUtZGV2aWNlJztcbmV4cG9ydHMuVU5SRUFEQUJMRSA9IFVOUkVBREFCTEU7IiwiJ3VzZSBzdHJpY3QnOyAvLyBibG9ja2NoYWluIGV2ZW50c1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuZXhwb3J0cy5OT1RJRklDQVRJT04gPSBleHBvcnRzLkJMT0NLID0gZXhwb3J0cy5DT05ORUNUID0gZXhwb3J0cy5FUlJPUiA9IHZvaWQgMDtcbnZhciBFUlJPUiA9ICdibG9ja2NoYWluLWVycm9yJztcbmV4cG9ydHMuRVJST1IgPSBFUlJPUjtcbnZhciBDT05ORUNUID0gJ2Jsb2NrY2hhaW4tY29ubmVjdCc7XG5leHBvcnRzLkNPTk5FQ1QgPSBDT05ORUNUO1xudmFyIEJMT0NLID0gJ2Jsb2NrY2hhaW4tYmxvY2snO1xuZXhwb3J0cy5CTE9DSyA9IEJMT0NLO1xudmFyIE5PVElGSUNBVElPTiA9ICdibG9ja2NoYWluLW5vdGlmaWNhdGlvbic7XG5leHBvcnRzLk5PVElGSUNBVElPTiA9IE5PVElGSUNBVElPTjsiLCJ2YXIgc2V0UHJvdG90eXBlT2YgPSByZXF1aXJlKFwiLi9zZXRQcm90b3R5cGVPZi5qc1wiKTtcblxuZnVuY3Rpb24gX2luaGVyaXRzTG9vc2Uoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHtcbiAgc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzLnByb3RvdHlwZSk7XG4gIHN1YkNsYXNzLnByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IHN1YkNsYXNzO1xuICBzZXRQcm90b3R5cGVPZihzdWJDbGFzcywgc3VwZXJDbGFzcyk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2luaGVyaXRzTG9vc2U7XG5tb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0cywgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7IiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgX2ludGVyb3BSZXF1aXJlRGVmYXVsdCA9IHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlRGVmYXVsdFwiKTtcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbmV4cG9ydHMuY3JlYXRlID0gY3JlYXRlO1xuZXhwb3J0cy5jcmVhdGVBc3luYyA9IGNyZWF0ZUFzeW5jO1xuZXhwb3J0cy5yZXNvbHZlVGltZW91dFByb21pc2UgPSByZXNvbHZlVGltZW91dFByb21pc2U7XG5leHBvcnRzLnJlamVjdFRpbWVvdXRQcm9taXNlID0gcmVqZWN0VGltZW91dFByb21pc2U7XG5cbnZhciBfcmVnZW5lcmF0b3IgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9yZWdlbmVyYXRvclwiKSk7XG5cbnZhciBfYXN5bmNUb0dlbmVyYXRvcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2FzeW5jVG9HZW5lcmF0b3JcIikpO1xuXG5mdW5jdGlvbiBjcmVhdGUoYXJnLCBkZXZpY2UpIHtcbiAgdmFyIGxvY2FsUmVzb2x2ZSA9IGZ1bmN0aW9uIGxvY2FsUmVzb2x2ZSh0KSB7fTtcblxuICB2YXIgbG9jYWxSZWplY3QgPSBmdW5jdGlvbiBsb2NhbFJlamVjdChlKSB7fTtcblxuICB2YXIgaWQ7XG4gIHZhciBwcm9taXNlID0gbmV3IFByb21pc2UoXG4gIC8qI19fUFVSRV9fKi9cbiAgZnVuY3Rpb24gKCkge1xuICAgIHZhciBfcmVmID0gKDAsIF9hc3luY1RvR2VuZXJhdG9yMltcImRlZmF1bHRcIl0pKFxuICAgIC8qI19fUFVSRV9fKi9cbiAgICBfcmVnZW5lcmF0b3JbXCJkZWZhdWx0XCJdLm1hcmsoZnVuY3Rpb24gX2NhbGxlZShyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgIHJldHVybiBfcmVnZW5lcmF0b3JbXCJkZWZhdWx0XCJdLndyYXAoZnVuY3Rpb24gX2NhbGxlZSQoX2NvbnRleHQpIHtcbiAgICAgICAgd2hpbGUgKDEpIHtcbiAgICAgICAgICBzd2l0Y2ggKF9jb250ZXh0LnByZXYgPSBfY29udGV4dC5uZXh0KSB7XG4gICAgICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICAgIGxvY2FsUmVzb2x2ZSA9IHJlc29sdmU7XG4gICAgICAgICAgICAgIGxvY2FsUmVqZWN0ID0gcmVqZWN0O1xuXG4gICAgICAgICAgICAgIGlmICghKHR5cGVvZiBhcmcgPT09ICdmdW5jdGlvbicpKSB7XG4gICAgICAgICAgICAgICAgX2NvbnRleHQubmV4dCA9IDExO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgX2NvbnRleHQucHJldiA9IDM7XG4gICAgICAgICAgICAgIF9jb250ZXh0Lm5leHQgPSA2O1xuICAgICAgICAgICAgICByZXR1cm4gYXJnKCk7XG5cbiAgICAgICAgICAgIGNhc2UgNjpcbiAgICAgICAgICAgICAgX2NvbnRleHQubmV4dCA9IDExO1xuICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgY2FzZSA4OlxuICAgICAgICAgICAgICBfY29udGV4dC5wcmV2ID0gODtcbiAgICAgICAgICAgICAgX2NvbnRleHQudDAgPSBfY29udGV4dFtcImNhdGNoXCJdKDMpO1xuICAgICAgICAgICAgICByZWplY3QoX2NvbnRleHQudDApO1xuXG4gICAgICAgICAgICBjYXNlIDExOlxuICAgICAgICAgICAgICBpZiAodHlwZW9mIGFyZyA9PT0gJ3N0cmluZycpIGlkID0gYXJnO1xuXG4gICAgICAgICAgICBjYXNlIDEyOlxuICAgICAgICAgICAgY2FzZSBcImVuZFwiOlxuICAgICAgICAgICAgICByZXR1cm4gX2NvbnRleHQuc3RvcCgpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSwgX2NhbGxlZSwgbnVsbCwgW1szLCA4XV0pO1xuICAgIH0pKTtcblxuICAgIHJldHVybiBmdW5jdGlvbiAoX3gsIF94Mikge1xuICAgICAgcmV0dXJuIF9yZWYuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICB9O1xuICB9KCkpO1xuICByZXR1cm4ge1xuICAgIGlkOiBpZCxcbiAgICBkZXZpY2U6IGRldmljZSxcbiAgICByZXNvbHZlOiBsb2NhbFJlc29sdmUsXG4gICAgcmVqZWN0OiBsb2NhbFJlamVjdCxcbiAgICBwcm9taXNlOiBwcm9taXNlXG4gIH07XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUFzeW5jKGlubmVyRm4pIHtcbiAgdmFyIGxvY2FsUmVzb2x2ZSA9IGZ1bmN0aW9uIGxvY2FsUmVzb2x2ZSh0KSB7fTtcblxuICB2YXIgbG9jYWxSZWplY3QgPSBmdW5jdGlvbiBsb2NhbFJlamVjdChlKSB7fTtcblxuICB2YXIgcHJvbWlzZSA9IG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICBsb2NhbFJlc29sdmUgPSByZXNvbHZlO1xuICAgIGxvY2FsUmVqZWN0ID0gcmVqZWN0O1xuICB9KTtcblxuICB2YXIgaW5uZXIgPVxuICAvKiNfX1BVUkVfXyovXG4gIGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgX3JlZjIgPSAoMCwgX2FzeW5jVG9HZW5lcmF0b3IyW1wiZGVmYXVsdFwiXSkoXG4gICAgLyojX19QVVJFX18qL1xuICAgIF9yZWdlbmVyYXRvcltcImRlZmF1bHRcIl0ubWFyayhmdW5jdGlvbiBfY2FsbGVlMigpIHtcbiAgICAgIHJldHVybiBfcmVnZW5lcmF0b3JbXCJkZWZhdWx0XCJdLndyYXAoZnVuY3Rpb24gX2NhbGxlZTIkKF9jb250ZXh0Mikge1xuICAgICAgICB3aGlsZSAoMSkge1xuICAgICAgICAgIHN3aXRjaCAoX2NvbnRleHQyLnByZXYgPSBfY29udGV4dDIubmV4dCkge1xuICAgICAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgICBfY29udGV4dDIubmV4dCA9IDI7XG4gICAgICAgICAgICAgIHJldHVybiBpbm5lckZuKCk7XG5cbiAgICAgICAgICAgIGNhc2UgMjpcbiAgICAgICAgICAgIGNhc2UgXCJlbmRcIjpcbiAgICAgICAgICAgICAgcmV0dXJuIF9jb250ZXh0Mi5zdG9wKCk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9LCBfY2FsbGVlMik7XG4gICAgfSkpO1xuXG4gICAgcmV0dXJuIGZ1bmN0aW9uIGlubmVyKCkge1xuICAgICAgcmV0dXJuIF9yZWYyLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgfTtcbiAgfSgpO1xuXG4gIHJldHVybiB7XG4gICAgcmVzb2x2ZTogbG9jYWxSZXNvbHZlLFxuICAgIHJlamVjdDogbG9jYWxSZWplY3QsXG4gICAgcHJvbWlzZTogcHJvbWlzZSxcbiAgICBydW46IGZ1bmN0aW9uIHJ1bigpIHtcbiAgICAgIGlubmVyKCk7XG4gICAgICByZXR1cm4gcHJvbWlzZTtcbiAgICB9XG4gIH07XG59XG5cbmZ1bmN0aW9uIHJlc29sdmVUaW1lb3V0UHJvbWlzZShkZWxheSwgcmVzdWx0KSB7XG4gIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSkge1xuICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgcmVzb2x2ZShyZXN1bHQpO1xuICAgIH0sIGRlbGF5KTtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIHJlamVjdFRpbWVvdXRQcm9taXNlKGRlbGF5LCBlcnJvcikge1xuICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgcmVqZWN0KGVycm9yKTtcbiAgICB9LCBkZWxheSk7XG4gIH0pO1xufSIsImZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7XG4gIFwiQGJhYmVsL2hlbHBlcnMgLSB0eXBlb2ZcIjtcblxuICBpZiAodHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPT09IFwic3ltYm9sXCIpIHtcbiAgICBtb2R1bGUuZXhwb3J0cyA9IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikge1xuICAgICAgcmV0dXJuIHR5cGVvZiBvYmo7XG4gICAgfTtcblxuICAgIG1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzLCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbiAgfSBlbHNlIHtcbiAgICBtb2R1bGUuZXhwb3J0cyA9IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikge1xuICAgICAgcmV0dXJuIG9iaiAmJiB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7XG4gICAgfTtcblxuICAgIG1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzLCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbiAgfVxuXG4gIHJldHVybiBfdHlwZW9mKG9iaik7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX3R5cGVvZjtcbm1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzLCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTsiLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5leHBvcnRzLlJFU1BPTlNFID0gZXhwb3J0cy5DQUxMID0gZXhwb3J0cy5FUlJPUiA9IGV4cG9ydHMuQk9PVFNUUkFQID0gdm9pZCAwO1xudmFyIEJPT1RTVFJBUCA9ICdpZnJhbWUtYm9vdHN0cmFwJztcbmV4cG9ydHMuQk9PVFNUUkFQID0gQk9PVFNUUkFQO1xudmFyIEVSUk9SID0gJ2lmcmFtZS1lcnJvcic7XG5leHBvcnRzLkVSUk9SID0gRVJST1I7XG52YXIgQ0FMTCA9ICdpZnJhbWUtY2FsbCc7XG5leHBvcnRzLkNBTEwgPSBDQUxMO1xudmFyIFJFU1BPTlNFID0gJ2lmcmFtZS1yZXNwb25zZSc7XG5leHBvcnRzLlJFU1BPTlNFID0gUkVTUE9OU0U7IiwidmFyIGdldFByb3RvdHlwZU9mID0gcmVxdWlyZShcIi4vZ2V0UHJvdG90eXBlT2YuanNcIik7XG5cbnZhciBzZXRQcm90b3R5cGVPZiA9IHJlcXVpcmUoXCIuL3NldFByb3RvdHlwZU9mLmpzXCIpO1xuXG52YXIgaXNOYXRpdmVGdW5jdGlvbiA9IHJlcXVpcmUoXCIuL2lzTmF0aXZlRnVuY3Rpb24uanNcIik7XG5cbnZhciBjb25zdHJ1Y3QgPSByZXF1aXJlKFwiLi9jb25zdHJ1Y3QuanNcIik7XG5cbmZ1bmN0aW9uIF93cmFwTmF0aXZlU3VwZXIoQ2xhc3MpIHtcbiAgdmFyIF9jYWNoZSA9IHR5cGVvZiBNYXAgPT09IFwiZnVuY3Rpb25cIiA/IG5ldyBNYXAoKSA6IHVuZGVmaW5lZDtcblxuICBtb2R1bGUuZXhwb3J0cyA9IF93cmFwTmF0aXZlU3VwZXIgPSBmdW5jdGlvbiBfd3JhcE5hdGl2ZVN1cGVyKENsYXNzKSB7XG4gICAgaWYgKENsYXNzID09PSBudWxsIHx8ICFpc05hdGl2ZUZ1bmN0aW9uKENsYXNzKSkgcmV0dXJuIENsYXNzO1xuXG4gICAgaWYgKHR5cGVvZiBDbGFzcyAhPT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb25cIik7XG4gICAgfVxuXG4gICAgaWYgKHR5cGVvZiBfY2FjaGUgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgIGlmIChfY2FjaGUuaGFzKENsYXNzKSkgcmV0dXJuIF9jYWNoZS5nZXQoQ2xhc3MpO1xuXG4gICAgICBfY2FjaGUuc2V0KENsYXNzLCBXcmFwcGVyKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBXcmFwcGVyKCkge1xuICAgICAgcmV0dXJuIGNvbnN0cnVjdChDbGFzcywgYXJndW1lbnRzLCBnZXRQcm90b3R5cGVPZih0aGlzKS5jb25zdHJ1Y3Rvcik7XG4gICAgfVxuXG4gICAgV3JhcHBlci5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKENsYXNzLnByb3RvdHlwZSwge1xuICAgICAgY29uc3RydWN0b3I6IHtcbiAgICAgICAgdmFsdWU6IFdyYXBwZXIsXG4gICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgICAgICB3cml0YWJsZTogdHJ1ZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgICB9XG4gICAgfSk7XG4gICAgcmV0dXJuIHNldFByb3RvdHlwZU9mKFdyYXBwZXIsIENsYXNzKTtcbiAgfTtcblxuICBtb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0cywgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG4gIHJldHVybiBfd3JhcE5hdGl2ZVN1cGVyKENsYXNzKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfd3JhcE5hdGl2ZVN1cGVyO1xubW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHMsIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlOyIsImZ1bmN0aW9uIF9nZXRQcm90b3R5cGVPZihvKSB7XG4gIG1vZHVsZS5leHBvcnRzID0gX2dldFByb3RvdHlwZU9mID0gT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LmdldFByb3RvdHlwZU9mIDogZnVuY3Rpb24gX2dldFByb3RvdHlwZU9mKG8pIHtcbiAgICByZXR1cm4gby5fX3Byb3RvX18gfHwgT2JqZWN0LmdldFByb3RvdHlwZU9mKG8pO1xuICB9O1xuICBtb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0cywgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG4gIHJldHVybiBfZ2V0UHJvdG90eXBlT2Yobyk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2dldFByb3RvdHlwZU9mO1xubW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHMsIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlOyIsImZ1bmN0aW9uIF9pc05hdGl2ZUZ1bmN0aW9uKGZuKSB7XG4gIHJldHVybiBGdW5jdGlvbi50b1N0cmluZy5jYWxsKGZuKS5pbmRleE9mKFwiW25hdGl2ZSBjb2RlXVwiKSAhPT0gLTE7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2lzTmF0aXZlRnVuY3Rpb247XG5tb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0cywgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7IiwidmFyIHNldFByb3RvdHlwZU9mID0gcmVxdWlyZShcIi4vc2V0UHJvdG90eXBlT2YuanNcIik7XG5cbnZhciBpc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QgPSByZXF1aXJlKFwiLi9pc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QuanNcIik7XG5cbmZ1bmN0aW9uIF9jb25zdHJ1Y3QoUGFyZW50LCBhcmdzLCBDbGFzcykge1xuICBpZiAoaXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0KCkpIHtcbiAgICBtb2R1bGUuZXhwb3J0cyA9IF9jb25zdHJ1Y3QgPSBSZWZsZWN0LmNvbnN0cnVjdDtcbiAgICBtb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0cywgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG4gIH0gZWxzZSB7XG4gICAgbW9kdWxlLmV4cG9ydHMgPSBfY29uc3RydWN0ID0gZnVuY3Rpb24gX2NvbnN0cnVjdChQYXJlbnQsIGFyZ3MsIENsYXNzKSB7XG4gICAgICB2YXIgYSA9IFtudWxsXTtcbiAgICAgIGEucHVzaC5hcHBseShhLCBhcmdzKTtcbiAgICAgIHZhciBDb25zdHJ1Y3RvciA9IEZ1bmN0aW9uLmJpbmQuYXBwbHkoUGFyZW50LCBhKTtcbiAgICAgIHZhciBpbnN0YW5jZSA9IG5ldyBDb25zdHJ1Y3RvcigpO1xuICAgICAgaWYgKENsYXNzKSBzZXRQcm90b3R5cGVPZihpbnN0YW5jZSwgQ2xhc3MucHJvdG90eXBlKTtcbiAgICAgIHJldHVybiBpbnN0YW5jZTtcbiAgICB9O1xuXG4gICAgbW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHMsIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuICB9XG5cbiAgcmV0dXJuIF9jb25zdHJ1Y3QuYXBwbHkobnVsbCwgYXJndW1lbnRzKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfY29uc3RydWN0O1xubW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHMsIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlOyIsImZ1bmN0aW9uIF9pc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QoKSB7XG4gIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJ1bmRlZmluZWRcIiB8fCAhUmVmbGVjdC5jb25zdHJ1Y3QpIHJldHVybiBmYWxzZTtcbiAgaWYgKFJlZmxlY3QuY29uc3RydWN0LnNoYW0pIHJldHVybiBmYWxzZTtcbiAgaWYgKHR5cGVvZiBQcm94eSA9PT0gXCJmdW5jdGlvblwiKSByZXR1cm4gdHJ1ZTtcblxuICB0cnkge1xuICAgIEJvb2xlYW4ucHJvdG90eXBlLnZhbHVlT2YuY2FsbChSZWZsZWN0LmNvbnN0cnVjdChCb29sZWFuLCBbXSwgZnVuY3Rpb24gKCkge30pKTtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfSBjYXRjaCAoZSkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9pc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3Q7XG5tb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0cywgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7IiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQgPSByZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkXCIpO1xuXG52YXIgX2ludGVyb3BSZXF1aXJlRGVmYXVsdCA9IHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlRGVmYXVsdFwiKTtcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gdm9pZCAwO1xuXG52YXIgX3JlZ2VuZXJhdG9yID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvcmVnZW5lcmF0b3JcIikpO1xuXG52YXIgX2FzeW5jVG9HZW5lcmF0b3IyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9hc3luY1RvR2VuZXJhdG9yXCIpKTtcblxudmFyIF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9hc3NlcnRUaGlzSW5pdGlhbGl6ZWRcIikpO1xuXG52YXIgX2luaGVyaXRzTG9vc2UyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbmhlcml0c0xvb3NlXCIpKTtcblxudmFyIF9kZWZpbmVQcm9wZXJ0eTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2RlZmluZVByb3BlcnR5XCIpKTtcblxudmFyIF9ldmVudHMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJldmVudHNcIikpO1xuXG52YXIgUE9QVVAgPSBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChyZXF1aXJlKFwiLi4vY29uc3RhbnRzL3BvcHVwXCIpKTtcblxudmFyIEVSUk9SID0gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQocmVxdWlyZShcIi4uL2NvbnN0YW50cy9lcnJvcnNcIikpO1xuXG52YXIgX3Nob3dQb3B1cFJlcXVlc3QgPSByZXF1aXJlKFwiLi9zaG93UG9wdXBSZXF1ZXN0XCIpO1xuXG52YXIgX25ldHdvcmtVdGlscyA9IHJlcXVpcmUoXCIuLi91dGlscy9uZXR3b3JrVXRpbHNcIik7XG5cbnZhciBfZGVmZXJyZWQgPSByZXF1aXJlKFwiLi4vdXRpbHMvZGVmZXJyZWRcIik7XG5cbi8vIGNvbnN0IFBPUFVQX1JFUVVFU1RfVElNRU9VVDogbnVtYmVyID0gNjAyO1xudmFyIFBPUFVQX1JFUVVFU1RfVElNRU9VVCA9IDg1MDtcbnZhciBQT1BVUF9DTE9TRV9JTlRFUlZBTCA9IDUwMDtcbnZhciBQT1BVUF9PUEVOX1RJTUVPVVQgPSAyMDAwO1xuXG52YXIgUG9wdXBNYW5hZ2VyID1cbi8qI19fUFVSRV9fKi9cbmZ1bmN0aW9uIChfRXZlbnRFbWl0dGVyKSB7XG4gICgwLCBfaW5oZXJpdHNMb29zZTJbXCJkZWZhdWx0XCJdKShQb3B1cE1hbmFnZXIsIF9FdmVudEVtaXR0ZXIpO1xuXG4gIC8vIFdpbmRvd1xuICBmdW5jdGlvbiBQb3B1cE1hbmFnZXIoc2V0dGluZ3MpIHtcbiAgICB2YXIgX3RoaXM7XG5cbiAgICBfdGhpcyA9IF9FdmVudEVtaXR0ZXIuY2FsbCh0aGlzKSB8fCB0aGlzO1xuICAgICgwLCBfZGVmaW5lUHJvcGVydHkyW1wiZGVmYXVsdFwiXSkoKDAsIF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQyW1wiZGVmYXVsdFwiXSkoX3RoaXMpLCBcInJlcXVlc3RUaW1lb3V0XCIsIDApO1xuICAgICgwLCBfZGVmaW5lUHJvcGVydHkyW1wiZGVmYXVsdFwiXSkoKDAsIF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQyW1wiZGVmYXVsdFwiXSkoX3RoaXMpLCBcImNsb3NlSW50ZXJ2YWxcIiwgMCk7XG4gICAgKDAsIF9kZWZpbmVQcm9wZXJ0eTJbXCJkZWZhdWx0XCJdKSgoMCwgX2Fzc2VydFRoaXNJbml0aWFsaXplZDJbXCJkZWZhdWx0XCJdKShfdGhpcyksIFwiZXh0ZW5zaW9uXCIsIGZhbHNlKTtcbiAgICAoMCwgX2RlZmluZVByb3BlcnR5MltcImRlZmF1bHRcIl0pKCgwLCBfYXNzZXJ0VGhpc0luaXRpYWxpemVkMltcImRlZmF1bHRcIl0pKF90aGlzKSwgXCJleHRlbnNpb25UYWJJZFwiLCAwKTtcbiAgICBfdGhpcy5zZXR0aW5ncyA9IHNldHRpbmdzO1xuICAgIF90aGlzLnNyYyA9IHNldHRpbmdzLnBvcHVwU3JjO1xuICAgIF90aGlzLm9yaWdpbiA9ICgwLCBfbmV0d29ya1V0aWxzLmdldE9yaWdpbikoc2V0dGluZ3MucG9wdXBTcmMpO1xuICAgIF90aGlzLmhhbmRsZUxhenlMb2FkaW5nID0gX3RoaXMuaGFuZGxlTGF6eUxvYWRpbmcuYmluZCgoMCwgX2Fzc2VydFRoaXNJbml0aWFsaXplZDJbXCJkZWZhdWx0XCJdKShfdGhpcykpOyAvLyAkRmxvd0lzc3VlIGNocm9tZSBub3QgZGVjbGFyZWQgb3V0c2lkZVxuXG4gICAgX3RoaXMuZXh0ZW5zaW9uID0gdHlwZW9mIGNocm9tZSAhPT0gJ3VuZGVmaW5lZCcgJiYgY2hyb21lLnJ1bnRpbWUgJiYgdHlwZW9mIGNocm9tZS5ydW50aW1lLm9uQ29ubmVjdCAhPT0gJ3VuZGVmaW5lZCc7XG5cbiAgICBpZiAoX3RoaXMuZXh0ZW5zaW9uKSB7XG4gICAgICBfdGhpcy5oYW5kbGVFeHRlbnNpb25Db25uZWN0ID0gX3RoaXMuaGFuZGxlRXh0ZW5zaW9uQ29ubmVjdC5iaW5kKCgwLCBfYXNzZXJ0VGhpc0luaXRpYWxpemVkMltcImRlZmF1bHRcIl0pKF90aGlzKSk7XG4gICAgICBfdGhpcy5oYW5kbGVFeHRlbnNpb25NZXNzYWdlID0gX3RoaXMuaGFuZGxlRXh0ZW5zaW9uTWVzc2FnZS5iaW5kKCgwLCBfYXNzZXJ0VGhpc0luaXRpYWxpemVkMltcImRlZmF1bHRcIl0pKF90aGlzKSk7IC8vICRGbG93SXNzdWUgY2hyb21lIG5vdCBkZWNsYXJlZCBvdXRzaWRlXG5cbiAgICAgIGNocm9tZS5ydW50aW1lLm9uQ29ubmVjdC5hZGRMaXN0ZW5lcihfdGhpcy5oYW5kbGVFeHRlbnNpb25Db25uZWN0KTtcbiAgICB9XG5cbiAgICByZXR1cm4gX3RoaXM7XG4gIH1cblxuICB2YXIgX3Byb3RvID0gUG9wdXBNYW5hZ2VyLnByb3RvdHlwZTtcblxuICBfcHJvdG8ucmVxdWVzdCA9IGZ1bmN0aW9uIHJlcXVlc3QobGF6eUxvYWQpIHtcbiAgICB2YXIgX3RoaXMyID0gdGhpcztcblxuICAgIGlmIChsYXp5TG9hZCA9PT0gdm9pZCAwKSB7XG4gICAgICBsYXp5TG9hZCA9IGZhbHNlO1xuICAgIH1cblxuICAgIC8vIHBvcHVwIHJlcXVlc3RcbiAgICAvLyBUT0RPOiBpZSAtIG9wZW4gaW1lZGlhdGVseSBhbmQgaGlkZSBpdCBidXQgcG9zdCBoYW5kc2hha2UgYWZ0ZXIgdGltZW91dFxuICAgIC8vIGJyaW5nIHBvcHVwIHdpbmRvdyB0byBmcm9udFxuICAgIGlmICh0aGlzLmxvY2tlZCkge1xuICAgICAgaWYgKHRoaXMuX3dpbmRvdykge1xuICAgICAgICBpZiAodGhpcy5leHRlbnNpb24pIHtcbiAgICAgICAgICAvLyAkRmxvd0lzc3VlIGNocm9tZSBub3QgZGVjbGFyZWQgb3V0c2lkZVxuICAgICAgICAgIGNocm9tZS50YWJzLnVwZGF0ZSh0aGlzLl93aW5kb3cuaWQsIHtcbiAgICAgICAgICAgIGFjdGl2ZTogdHJ1ZVxuICAgICAgICAgIH0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoaXMuX3dpbmRvdy5mb2N1cygpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aGlzLmxhenlMb2FkID0gbGF6eUxvYWQgPyAoMCwgX2RlZmVycmVkLmNyZWF0ZSkoUE9QVVAuSU5JVCkgOiBudWxsO1xuXG4gICAgaWYgKHRoaXMubGF6eUxvYWQpIHtcbiAgICAgIGlmICghdGhpcy5leHRlbnNpb24pIHtcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ21lc3NhZ2UnLCB0aGlzLmhhbmRsZUxhenlMb2FkaW5nLCBmYWxzZSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgdmFyIG9wZW5GbiA9IHRoaXMub3Blbi5iaW5kKHRoaXMpO1xuICAgIHRoaXMubG9ja2VkID0gdHJ1ZTtcblxuICAgIGlmICghdGhpcy5zZXR0aW5ncy5zdXBwb3J0ZWRCcm93c2VyKSB7XG4gICAgICBvcGVuRm4oKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5yZXF1ZXN0VGltZW91dCA9IHdpbmRvdy5zZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgX3RoaXMyLnJlcXVlc3RUaW1lb3V0ID0gMDtcbiAgICAgICAgb3BlbkZuKCk7XG4gICAgICB9LCBsYXp5TG9hZCB8fCB0aGlzLmV4dGVuc2lvbiA/IDEgOiBQT1BVUF9SRVFVRVNUX1RJTUVPVVQpO1xuICAgIH1cbiAgfTtcblxuICBfcHJvdG8uY2FuY2VsID0gZnVuY3Rpb24gY2FuY2VsKCkge1xuICAgIHRoaXMuY2xvc2UoKTtcbiAgfTtcblxuICBfcHJvdG8udW5sb2NrID0gZnVuY3Rpb24gdW5sb2NrKCkge1xuICAgIHRoaXMubG9ja2VkID0gZmFsc2U7XG4gIH07XG5cbiAgX3Byb3RvLm9wZW4gPSBmdW5jdGlvbiBvcGVuKCkge1xuICAgIHZhciBfdGhpczMgPSB0aGlzO1xuXG4gICAgaWYgKCF0aGlzLnNldHRpbmdzLnN1cHBvcnRlZEJyb3dzZXIpIHtcbiAgICAgIHRoaXMub3BlbldyYXBwZXIodGhpcy5zcmMgKyAnI3Vuc3VwcG9ydGVkJyk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy5vcGVuV3JhcHBlcih0aGlzLmxhenlMb2FkID8gdGhpcy5zcmMgKyAnI2xvYWRpbmcnIDogdGhpcy5zcmMpO1xuICAgIHRoaXMuY2xvc2VJbnRlcnZhbCA9IHdpbmRvdy5zZXRJbnRlcnZhbChmdW5jdGlvbiAoKSB7XG4gICAgICBpZiAoX3RoaXMzLl93aW5kb3cpIHtcbiAgICAgICAgaWYgKF90aGlzMy5leHRlbnNpb24pIHtcbiAgICAgICAgICAvLyAkRmxvd0lzc3VlIGNocm9tZSBub3QgZGVjbGFyZWQgb3V0c2lkZVxuICAgICAgICAgIGNocm9tZS50YWJzLmdldChfdGhpczMuX3dpbmRvdy5pZCwgZnVuY3Rpb24gKHRhYikge1xuICAgICAgICAgICAgaWYgKCF0YWIpIHtcbiAgICAgICAgICAgICAgX3RoaXMzLmNsb3NlKCk7XG5cbiAgICAgICAgICAgICAgX3RoaXMzLmVtaXQoUE9QVVAuQ0xPU0VEKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KTtcbiAgICAgICAgfSBlbHNlIGlmIChfdGhpczMuX3dpbmRvdy5jbG9zZWQpIHtcbiAgICAgICAgICBfdGhpczMuY2xvc2UoKTtcblxuICAgICAgICAgIF90aGlzMy5lbWl0KFBPUFVQLkNMT1NFRCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LCBQT1BVUF9DTE9TRV9JTlRFUlZBTCk7XG4gICAgdGhpcy5vcGVuVGltZW91dCA9IHdpbmRvdy5zZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgIGlmICghKF90aGlzMy5fd2luZG93ICYmICFfdGhpczMuX3dpbmRvdy5jbG9zZWQpKSB7XG4gICAgICAgIF90aGlzMy5jbG9zZSgpO1xuXG4gICAgICAgICgwLCBfc2hvd1BvcHVwUmVxdWVzdC5zaG93UG9wdXBSZXF1ZXN0KShfdGhpczMub3Blbi5iaW5kKF90aGlzMyksIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICBfdGhpczMuZW1pdChQT1BVUC5DTE9TRUQpO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9LCBQT1BVUF9PUEVOX1RJTUVPVVQpO1xuICB9O1xuXG4gIF9wcm90by5vcGVuV3JhcHBlciA9IGZ1bmN0aW9uIG9wZW5XcmFwcGVyKHVybCkge1xuICAgIHZhciBfdGhpczQgPSB0aGlzO1xuXG4gICAgaWYgKHRoaXMuZXh0ZW5zaW9uKSB7XG4gICAgICAvLyAkRmxvd0lzc3VlIGNocm9tZSBub3QgZGVjbGFyZWQgb3V0c2lkZVxuICAgICAgY2hyb21lLndpbmRvd3MuZ2V0Q3VycmVudChudWxsLCBmdW5jdGlvbiAoY3VycmVudFdpbmRvdykge1xuICAgICAgICAvLyBSZXF1ZXN0IGNvbWluZyBmcm9tIGV4dGVuc2lvbiBwb3B1cCxcbiAgICAgICAgLy8gY3JlYXRlIG5ldyB3aW5kb3cgYWJvdmUgaW5zdGVhZCBvZiBvcGVuaW5nIG5ldyB0YWJcbiAgICAgICAgaWYgKGN1cnJlbnRXaW5kb3cudHlwZSAhPT0gJ25vcm1hbCcpIHtcbiAgICAgICAgICAvLyAkRmxvd0lzc3VlIGNocm9tZSBub3QgZGVjbGFyZWQgb3V0c2lkZVxuICAgICAgICAgIGNocm9tZS53aW5kb3dzLmNyZWF0ZSh7XG4gICAgICAgICAgICB1cmw6IHVybFxuICAgICAgICAgIH0sIGZ1bmN0aW9uIChuZXdXaW5kb3cpIHtcbiAgICAgICAgICAgIC8vICRGbG93SXNzdWUgY2hyb21lIG5vdCBkZWNsYXJlZCBvdXRzaWRlXG4gICAgICAgICAgICBjaHJvbWUudGFicy5xdWVyeSh7XG4gICAgICAgICAgICAgIHdpbmRvd0lkOiBuZXdXaW5kb3cuaWQsXG4gICAgICAgICAgICAgIGFjdGl2ZTogdHJ1ZVxuICAgICAgICAgICAgfSwgZnVuY3Rpb24gKHRhYnMpIHtcbiAgICAgICAgICAgICAgX3RoaXM0Ll93aW5kb3cgPSB0YWJzWzBdO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgLy8gJEZsb3dJc3N1ZSBjaHJvbWUgbm90IGRlY2xhcmVkIG91dHNpZGVcbiAgICAgICAgICBjaHJvbWUudGFicy5xdWVyeSh7XG4gICAgICAgICAgICBjdXJyZW50V2luZG93OiB0cnVlLFxuICAgICAgICAgICAgYWN0aXZlOiB0cnVlXG4gICAgICAgICAgfSwgZnVuY3Rpb24gKHRhYnMpIHtcbiAgICAgICAgICAgIF90aGlzNC5leHRlbnNpb25UYWJJZCA9IHRhYnNbMF0uaWQ7IC8vICRGbG93SXNzdWUgY2hyb21lIG5vdCBkZWNsYXJlZCBvdXRzaWRlXG5cbiAgICAgICAgICAgIGNocm9tZS50YWJzLmNyZWF0ZSh7XG4gICAgICAgICAgICAgIHVybDogdXJsLFxuICAgICAgICAgICAgICBpbmRleDogdGFic1swXS5pbmRleCArIDFcbiAgICAgICAgICAgIH0sIGZ1bmN0aW9uICh0YWIpIHtcbiAgICAgICAgICAgICAgX3RoaXM0Ll93aW5kb3cgPSB0YWI7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuX3dpbmRvdyA9IHdpbmRvdy5vcGVuKCcnLCAnX2JsYW5rJyk7XG5cbiAgICAgIGlmICh0aGlzLl93aW5kb3cpIHtcbiAgICAgICAgdGhpcy5fd2luZG93LmxvY2F0aW9uLmhyZWYgPSB1cmw7IC8vIG90aGVyd2lzZSBhbmRyb2lkL2Nocm9tZSBsb29zZSB3aW5kb3cub3BlbmVyIHJlZmVyZW5jZVxuICAgICAgfVxuICAgIH1cbiAgfTtcblxuICBfcHJvdG8uaGFuZGxlRXh0ZW5zaW9uQ29ubmVjdCA9IGZ1bmN0aW9uIGhhbmRsZUV4dGVuc2lvbkNvbm5lY3QocG9ydCkge1xuICAgIGlmIChwb3J0Lm5hbWUgPT09ICd0cmV6b3ItY29ubmVjdCcpIHtcbiAgICAgIGlmICghdGhpcy5fd2luZG93IHx8IHRoaXMuX3dpbmRvdyAmJiB0aGlzLl93aW5kb3cuaWQgIT09IHBvcnQuc2VuZGVyLnRhYi5pZCkge1xuICAgICAgICBwb3J0LmRpc2Nvbm5lY3QoKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICB0aGlzLmV4dGVuc2lvblBvcnQgPSBwb3J0OyAvLyAkRmxvd0lzc3VlIG5lZWQgdG8gdXBkYXRlIENocm9tZVBvcnQgZGVmaW5pdGlvblxuXG4gICAgICB0aGlzLmV4dGVuc2lvblBvcnQub25NZXNzYWdlLmFkZExpc3RlbmVyKHRoaXMuaGFuZGxlRXh0ZW5zaW9uTWVzc2FnZSk7XG4gICAgfSBlbHNlIGlmIChwb3J0Lm5hbWUgPT09ICd0cmV6b3ItdXNiLXBlcm1pc3Npb25zJykge1xuICAgICAgcG9ydC5wb3N0TWVzc2FnZSh7XG4gICAgICAgIGJyb2FkY2FzdDogdGhpcy5icm9hZGNhc3RcbiAgICAgIH0pO1xuICAgIH1cbiAgfTtcblxuICBfcHJvdG8uaGFuZGxlRXh0ZW5zaW9uTWVzc2FnZSA9IGZ1bmN0aW9uIGhhbmRsZUV4dGVuc2lvbk1lc3NhZ2UobWVzc2FnZSkge1xuICAgIGlmICghdGhpcy5leHRlbnNpb25Qb3J0KSByZXR1cm47XG5cbiAgICBpZiAobWVzc2FnZSA9PT0gUE9QVVAuRVhURU5TSU9OX1JFUVVFU1QpIHtcbiAgICAgIHRoaXMuZXh0ZW5zaW9uUG9ydC5wb3N0TWVzc2FnZSh7XG4gICAgICAgIHR5cGU6IFBPUFVQLkVYVEVOU0lPTl9SRVFVRVNULFxuICAgICAgICBicm9hZGNhc3Q6IHRoaXMuYnJvYWRjYXN0XG4gICAgICB9KTtcbiAgICB9IGVsc2UgaWYgKG1lc3NhZ2UgPT09IFBPUFVQLklOSVQgJiYgdGhpcy5sYXp5TG9hZCkge1xuICAgICAgdGhpcy5sYXp5TG9hZC5yZXNvbHZlKHRydWUpO1xuICAgIH0gZWxzZSBpZiAobWVzc2FnZSA9PT0gUE9QVVAuRVhURU5TSU9OX1VTQl9QRVJNSVNTSU9OUykge1xuICAgICAgLy8gJEZsb3dJc3N1ZSBjaHJvbWUgbm90IGRlY2xhcmVkIG91dHNpZGVcbiAgICAgIGNocm9tZS50YWJzLnF1ZXJ5KHtcbiAgICAgICAgY3VycmVudFdpbmRvdzogdHJ1ZSxcbiAgICAgICAgYWN0aXZlOiB0cnVlXG4gICAgICB9LCBmdW5jdGlvbiAodGFicykge1xuICAgICAgICAvLyAkRmxvd0lzc3VlIGNocm9tZSBub3QgZGVjbGFyZWQgb3V0c2lkZVxuICAgICAgICBjaHJvbWUudGFicy5jcmVhdGUoe1xuICAgICAgICAgIHVybDogJ3RyZXpvci11c2ItcGVybWlzc2lvbnMuaHRtbCcsXG4gICAgICAgICAgaW5kZXg6IHRhYnNbMF0uaW5kZXggKyAxXG4gICAgICAgIH0sIGZ1bmN0aW9uICh0YWIpIHsvLyBkbyBub3RoaW5nXG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gICAgfSBlbHNlIGlmIChtZXNzYWdlID09PSBQT1BVUC5DTE9TRV9XSU5ET1cpIHtcbiAgICAgIHRoaXMuZW1pdChQT1BVUC5DTE9TRUQpO1xuICAgICAgdGhpcy5jbG9zZSgpO1xuICAgIH1cbiAgfTtcblxuICBfcHJvdG8uc2V0QnJvYWRjYXN0ID0gZnVuY3Rpb24gc2V0QnJvYWRjYXN0KGJyb2FkY2FzdCkge1xuICAgIHRoaXMuYnJvYWRjYXN0ID0gYnJvYWRjYXN0O1xuICB9O1xuXG4gIF9wcm90by5oYW5kbGVMYXp5TG9hZGluZyA9IGZ1bmN0aW9uIGhhbmRsZUxhenlMb2FkaW5nKGV2ZW50KSB7XG4gICAgaWYgKHRoaXMubGF6eUxvYWQgJiYgZXZlbnQuZGF0YSAmJiBldmVudC5kYXRhID09PSBQT1BVUC5JTklUKSB7XG4gICAgICB0aGlzLmxhenlMb2FkLnJlc29sdmUodHJ1ZSk7XG4gICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcignbWVzc2FnZScsIHRoaXMuaGFuZGxlTGF6eUxvYWRpbmcsIGZhbHNlKTtcbiAgICB9XG4gIH07XG5cbiAgX3Byb3RvLnJlc29sdmVMYXp5TG9hZCA9XG4gIC8qI19fUFVSRV9fKi9cbiAgZnVuY3Rpb24gKCkge1xuICAgIHZhciBfcmVzb2x2ZUxhenlMb2FkID0gKDAsIF9hc3luY1RvR2VuZXJhdG9yMltcImRlZmF1bHRcIl0pKFxuICAgIC8qI19fUFVSRV9fKi9cbiAgICBfcmVnZW5lcmF0b3JbXCJkZWZhdWx0XCJdLm1hcmsoZnVuY3Rpb24gX2NhbGxlZSgpIHtcbiAgICAgIHJldHVybiBfcmVnZW5lcmF0b3JbXCJkZWZhdWx0XCJdLndyYXAoZnVuY3Rpb24gX2NhbGxlZSQoX2NvbnRleHQpIHtcbiAgICAgICAgd2hpbGUgKDEpIHtcbiAgICAgICAgICBzd2l0Y2ggKF9jb250ZXh0LnByZXYgPSBfY29udGV4dC5uZXh0KSB7XG4gICAgICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICAgIGlmICghdGhpcy5sYXp5TG9hZCkge1xuICAgICAgICAgICAgICAgIF9jb250ZXh0Lm5leHQgPSA1O1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgX2NvbnRleHQubmV4dCA9IDM7XG4gICAgICAgICAgICAgIHJldHVybiB0aGlzLmxhenlMb2FkLnByb21pc2U7XG5cbiAgICAgICAgICAgIGNhc2UgMzpcbiAgICAgICAgICAgICAgX2NvbnRleHQubmV4dCA9IDY7XG4gICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICBjYXNlIDU6XG4gICAgICAgICAgICAgIHRocm93IEVSUk9SLlBPUFVQX0NMT1NFRC5tZXNzYWdlO1xuXG4gICAgICAgICAgICBjYXNlIDY6XG4gICAgICAgICAgICAgIGlmICh0aGlzLmV4dGVuc2lvbikge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLmV4dGVuc2lvblBvcnQpIHtcbiAgICAgICAgICAgICAgICAgIHRoaXMuZXh0ZW5zaW9uUG9ydC5wb3N0TWVzc2FnZSh7XG4gICAgICAgICAgICAgICAgICAgIHR5cGU6IFBPUFVQLklOSVRcbiAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSBlbHNlIGlmICh0aGlzLl93aW5kb3cpIHtcbiAgICAgICAgICAgICAgICB0aGlzLl93aW5kb3cucG9zdE1lc3NhZ2Uoe1xuICAgICAgICAgICAgICAgICAgdHlwZTogUE9QVVAuSU5JVFxuICAgICAgICAgICAgICAgIH0sIHRoaXMub3JpZ2luKTtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBjYXNlIDc6XG4gICAgICAgICAgICBjYXNlIFwiZW5kXCI6XG4gICAgICAgICAgICAgIHJldHVybiBfY29udGV4dC5zdG9wKCk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9LCBfY2FsbGVlLCB0aGlzKTtcbiAgICB9KSk7XG5cbiAgICBmdW5jdGlvbiByZXNvbHZlTGF6eUxvYWQoKSB7XG4gICAgICByZXR1cm4gX3Jlc29sdmVMYXp5TG9hZC5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgIH1cblxuICAgIHJldHVybiByZXNvbHZlTGF6eUxvYWQ7XG4gIH0oKTtcblxuICBfcHJvdG8uY2xvc2UgPSBmdW5jdGlvbiBjbG9zZSgpIHtcbiAgICB0aGlzLmxvY2tlZCA9IGZhbHNlO1xuXG4gICAgaWYgKHRoaXMucmVxdWVzdFRpbWVvdXQpIHtcbiAgICAgIHdpbmRvdy5jbGVhclRpbWVvdXQodGhpcy5yZXF1ZXN0VGltZW91dCk7XG4gICAgICB0aGlzLnJlcXVlc3RUaW1lb3V0ID0gMDtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5vcGVuVGltZW91dCkge1xuICAgICAgd2luZG93LmNsZWFyVGltZW91dCh0aGlzLm9wZW5UaW1lb3V0KTtcbiAgICAgIHRoaXMub3BlblRpbWVvdXQgPSAwO1xuICAgIH1cblxuICAgIGlmICh0aGlzLmNsb3NlSW50ZXJ2YWwpIHtcbiAgICAgIHdpbmRvdy5jbGVhckludGVydmFsKHRoaXMuY2xvc2VJbnRlcnZhbCk7XG4gICAgICB0aGlzLmNsb3NlSW50ZXJ2YWwgPSAwO1xuICAgIH1cblxuICAgIGlmICh0aGlzLmV4dGVuc2lvblBvcnQpIHtcbiAgICAgIHRoaXMuZXh0ZW5zaW9uUG9ydC5kaXNjb25uZWN0KCk7XG4gICAgICB0aGlzLmV4dGVuc2lvblBvcnQgPSBudWxsO1xuICAgIH1cblxuICAgIGlmICh0aGlzLmV4dGVuc2lvblRhYklkKSB7XG4gICAgICAvLyAkRmxvd0lzc3VlIGNocm9tZSBub3QgZGVjbGFyZWQgb3V0c2lkZVxuICAgICAgY2hyb21lLnRhYnMudXBkYXRlKHRoaXMuZXh0ZW5zaW9uVGFiSWQsIHtcbiAgICAgICAgYWN0aXZlOiB0cnVlXG4gICAgICB9KTtcbiAgICAgIHRoaXMuZXh0ZW5zaW9uVGFiSWQgPSAwO1xuICAgIH1cblxuICAgIGlmICh0aGlzLmxhenlMb2FkKSB7XG4gICAgICB0aGlzLmxhenlMb2FkID0gbnVsbDtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5fd2luZG93KSB7XG4gICAgICBpZiAodGhpcy5leHRlbnNpb24pIHtcbiAgICAgICAgLy8gJEZsb3dJc3N1ZSBjaHJvbWUgbm90IGRlY2xhcmVkIG91dHNpZGVcbiAgICAgICAgY2hyb21lLnRhYnMucmVtb3ZlKHRoaXMuX3dpbmRvdy5pZCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLl93aW5kb3cuY2xvc2UoKTtcbiAgICAgIH1cblxuICAgICAgdGhpcy5fd2luZG93ID0gbnVsbDtcbiAgICB9XG4gIH07XG5cbiAgX3Byb3RvLnBvc3RNZXNzYWdlID0gZnVuY3Rpb24gcG9zdE1lc3NhZ2UobWVzc2FnZSkge1xuICAgIHZhciBfdGhpczUgPSB0aGlzO1xuXG4gICAgLy8gcG9zdCBtZXNzYWdlIGJlZm9yZSBwb3B1cCByZXF1ZXN0IGZpbmFsaXplZFxuICAgIGlmICh0aGlzLnJlcXVlc3RUaW1lb3V0KSB7XG4gICAgICByZXR1cm47XG4gICAgfSAvLyBkZXZpY2UgbmVlZHMgaW50ZXJhY3Rpb24gYnV0IHRoZXJlIGlzIG5vIHBvcHVwL3VpXG4gICAgLy8gbWF5YmUgcG9wdXAgcmVxdWVzdCB3YXNuJ3QgaGFuZGxlZFxuICAgIC8vIGlnbm9yZSBcInVpX3JlcXVlc3Rfd2luZG93XCIgdHlwZVxuXG5cbiAgICBpZiAoIXRoaXMuX3dpbmRvdyAmJiBtZXNzYWdlLnR5cGUgIT09ICd1aV9yZXF1ZXN0X3dpbmRvdycgJiYgdGhpcy5vcGVuVGltZW91dCkge1xuICAgICAgdGhpcy5jbG9zZSgpO1xuICAgICAgKDAsIF9zaG93UG9wdXBSZXF1ZXN0LnNob3dQb3B1cFJlcXVlc3QpKHRoaXMub3Blbi5iaW5kKHRoaXMpLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIF90aGlzNS5lbWl0KFBPUFVQLkNMT1NFRCk7XG4gICAgICB9KTtcbiAgICAgIHJldHVybjtcbiAgICB9IC8vIHBvc3QgbWVzc2FnZSB0byBwb3B1cCB3aW5kb3dcblxuXG4gICAgaWYgKHRoaXMuX3dpbmRvdykge1xuICAgICAgdGhpcy5fd2luZG93LnBvc3RNZXNzYWdlKG1lc3NhZ2UsIHRoaXMub3JpZ2luKTtcbiAgICB9XG4gIH07XG5cbiAgX3Byb3RvLm9uQmVmb3JlVW5sb2FkID0gZnVuY3Rpb24gb25CZWZvcmVVbmxvYWQoKSB7XG4gICAgdGhpcy5jbG9zZSgpO1xuICB9O1xuXG4gIF9wcm90by5jYW5jZWxPcGVuVGltZW91dCA9IGZ1bmN0aW9uIGNhbmNlbE9wZW5UaW1lb3V0KCkge1xuICAgIHdpbmRvdy5jbGVhclRpbWVvdXQodGhpcy5vcGVuVGltZW91dCk7XG4gIH07XG5cbiAgcmV0dXJuIFBvcHVwTWFuYWdlcjtcbn0oX2V2ZW50c1tcImRlZmF1bHRcIl0pO1xuXG5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IFBvcHVwTWFuYWdlcjsiLCJmdW5jdGlvbiBfYXNzZXJ0VGhpc0luaXRpYWxpemVkKHNlbGYpIHtcbiAgaWYgKHNlbGYgPT09IHZvaWQgMCkge1xuICAgIHRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihcInRoaXMgaGFzbid0IGJlZW4gaW5pdGlhbGlzZWQgLSBzdXBlcigpIGhhc24ndCBiZWVuIGNhbGxlZFwiKTtcbiAgfVxuXG4gIHJldHVybiBzZWxmO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQ7XG5tb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0cywgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7IiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuZXhwb3J0cy5zaG93UG9wdXBSZXF1ZXN0ID0gdm9pZCAwO1xudmFyIGxheWVySUQgPSAnVHJlem9yQ29ubmVjdEludGVyYWN0aW9uTGF5ZXInO1xudmFyIGxheWVySW5uZXJIdG1sID0gXCJcXG4gICAgPGRpdiBjbGFzcz1cXFwidHJlem9yY29ubmVjdC1jb250YWluZXJcXFwiIGlkPVxcXCJcIiArIGxheWVySUQgKyBcIlxcXCI+XFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJ0cmV6b3Jjb25uZWN0LXdpbmRvd1xcXCI+XFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwidHJlem9yY29ubmVjdC1oZWFkXFxcIj5cXG4gICAgICAgICAgICAgICAgPHN2ZyBjbGFzcz1cXFwidHJlem9yY29ubmVjdC1sb2dvXFxcIiB4PVxcXCIwcHhcXFwiIHk9XFxcIjBweFxcXCIgdmlld0JveD1cXFwiMCAwIDE2My43IDQxLjlcXFwiIHdpZHRoPVxcXCI3OHB4XFxcIiBoZWlnaHQ9XFxcIjIwcHhcXFwiIHByZXNlcnZlQXNwZWN0UmF0aW89XFxcInhNaW5ZTWluIG1lZXRcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgPHBvbHlnb24gcG9pbnRzPVxcXCIxMDEuMSwxMi44IDExOC4yLDEyLjggMTE4LjIsMTcuMyAxMDguOSwyOS45IDExOC4yLDI5LjkgMTE4LjIsMzUuMiAxMDEuMSwzNS4yIDEwMS4xLDMwLjcgMTEwLjQsMTguMSAxMDEuMSwxOC4xXFxcIi8+XFxuICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPVxcXCJNMTU4LjgsMjYuOWMyLjEtMC44LDQuMy0yLjksNC4zLTYuNmMwLTQuNS0zLjEtNy40LTcuNy03LjRoLTEwLjV2MjIuM2g1Ljh2LTcuNWgyLjJsNC4xLDcuNWg2LjdMMTU4LjgsMjYuOXogTTE1NC43LDIyLjUgaC00VjE4aDRjMS41LDAsMi41LDAuOSwyLjUsMi4yQzE1Ny4yLDIxLjYsMTU2LjIsMjIuNSwxNTQuNywyMi41elxcXCIvPlxcbiAgICAgICAgICAgICAgICAgICAgPHBhdGggZD1cXFwiTTEzMC44LDEyLjVjLTYuOCwwLTExLjYsNC45LTExLjYsMTEuNXM0LjksMTEuNSwxMS42LDExLjVzMTEuNy00LjksMTEuNy0xMS41UzEzNy42LDEyLjUsMTMwLjgsMTIuNXogTTEzMC44LDMwLjMgYy0zLjQsMC01LjctMi42LTUuNy02LjNjMC0zLjgsMi4zLTYuMyw1LjctNi4zYzMuNCwwLDUuOCwyLjYsNS44LDYuM0MxMzYuNiwyNy43LDEzNC4yLDMwLjMsMTMwLjgsMzAuM3pcXFwiLz5cXG4gICAgICAgICAgICAgICAgICAgIDxwb2x5Z29uIHBvaW50cz1cXFwiODIuMSwxMi44IDk4LjMsMTIuOCA5OC4zLDE4IDg3LjksMTggODcuOSwyMS4zIDk4LDIxLjMgOTgsMjYuNCA4Ny45LDI2LjQgODcuOSwzMCA5OC4zLDMwIDk4LjMsMzUuMiA4Mi4xLDM1LjIgXFxcIi8+XFxuICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPVxcXCJNMjQuNiw5LjdDMjQuNiw0LjQsMjAsMCwxNC40LDBTNC4yLDQuNCw0LjIsOS43djMuMUgwdjIyLjNoMGwxNC40LDYuN2wxNC40LTYuN2gwVjEyLjloLTQuMlY5Ljd6IE05LjQsOS43IGMwLTIuNSwyLjItNC41LDUtNC41czUsMiw1LDQuNXYzLjFIOS40VjkuN3ogTTIzLDMxLjVsLTguNiw0bC04LjYtNFYxOC4xSDIzVjMxLjV6XFxcIi8+XFxuICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPVxcXCJNNzkuNCwyMC4zYzAtNC41LTMuMS03LjQtNy43LTcuNEg2MS4ydjIyLjNINjd2LTcuNWgyLjJsNC4xLDcuNUg4MGwtNC45LTguM0M3Ny4yLDI2LjEsNzkuNCwyNCw3OS40LDIwLjN6IE03MSwyMi41aC00VjE4IGg0YzEuNSwwLDIuNSwwLjksMi41LDIuMkM3My41LDIxLjYsNzIuNSwyMi41LDcxLDIyLjV6XFxcIi8+XFxuICAgICAgICAgICAgICAgICAgICA8cG9seWdvbiBwb2ludHM9XFxcIjQwLjUsMTIuOCA1OC42LDEyLjggNTguNiwxOC4xIDUyLjQsMTguMSA1Mi40LDM1LjIgNDYuNiwzNS4yIDQ2LjYsMTguMSA0MC41LDE4LjEgXFxcIi8+XFxuICAgICAgICAgICAgICAgIDwvc3ZnPlxcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJ0cmV6b3Jjb25uZWN0LWNsb3NlXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgIDxzdmcgeD1cXFwiMHB4XFxcIiB5PVxcXCIwcHhcXFwiIHZpZXdCb3g9XFxcIjI0IDI0IDYwIDYwXFxcIiB3aWR0aD1cXFwiMjRweFxcXCIgaGVpZ2h0PVxcXCIyNHB4XFxcIiBwcmVzZXJ2ZUFzcGVjdFJhdGlvPVxcXCJ4TWluWU1pbiBtZWV0XFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8cG9seWdvbiBjbGFzcz1cXFwic3QwXFxcIiBwb2ludHM9XFxcIjQwLDY3LjkgNDIuMSw3MCA1NSw1Ny4xIDY3LjksNzAgNzAsNjcuOSA1Ny4xLDU1IDcwLDQyLjEgNjcuOSw0MCA1NSw1Mi45IDQyLjEsNDAgNDAsNDIuMSA1Mi45LDU1IFxcXCIvPlxcbiAgICAgICAgICAgICAgICAgICAgPC9zdmc+XFxuICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcInRyZXpvcmNvbm5lY3QtYm9keVxcXCI+XFxuICAgICAgICAgICAgICAgIDxoMz5Qb3B1cCB3YXMgYmxvY2tlZDwvaDM+XFxuICAgICAgICAgICAgICAgIDxwPlBsZWFzZSBjbGljayB0byBcXHUyMDFDQ29udGludWVcXHUyMDFEIHRvIG9wZW4gcG9wdXAgbWFudWFsbHk8L3A+XFxuICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XFxcInRyZXpvcmNvbm5lY3Qtb3BlblxcXCI+Q29udGludWU8L2J1dHRvbj5cXG4gICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgIDwvZGl2PlxcbiAgICA8L2Rpdj5cXG5cIjtcblxudmFyIHNob3dQb3B1cFJlcXVlc3QgPSBmdW5jdGlvbiBzaG93UG9wdXBSZXF1ZXN0KG9wZW4sIGNhbmNlbCkge1xuICBpZiAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQobGF5ZXJJRCkpIHtcbiAgICByZXR1cm47XG4gIH1cblxuICB2YXIgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGRpdi5pZCA9IGxheWVySUQ7XG4gIGRpdi5jbGFzc05hbWUgPSAndHJlem9yY29ubmVjdC1jb250YWluZXInO1xuICBkaXYuaW5uZXJIVE1MID0gbGF5ZXJJbm5lckh0bWw7XG5cbiAgaWYgKGRvY3VtZW50LmJvZHkpIHtcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGRpdik7XG4gIH1cblxuICB2YXIgYnV0dG9uID0gZGl2LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ3RyZXpvcmNvbm5lY3Qtb3BlbicpWzBdO1xuXG4gIGJ1dHRvbi5vbmNsaWNrID0gZnVuY3Rpb24gKCkge1xuICAgIG9wZW4oKTtcblxuICAgIGlmIChkb2N1bWVudC5ib2R5KSB7XG4gICAgICBkb2N1bWVudC5ib2R5LnJlbW92ZUNoaWxkKGRpdik7XG4gICAgfVxuICB9O1xuXG4gIHZhciBjbG9zZSA9IGRpdi5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCd0cmV6b3Jjb25uZWN0LWNsb3NlJylbMF07XG5cbiAgY2xvc2Uub25jbGljayA9IGZ1bmN0aW9uICgpIHtcbiAgICBjYW5jZWwoKTtcblxuICAgIGlmIChkb2N1bWVudC5ib2R5KSB7XG4gICAgICBkb2N1bWVudC5ib2R5LnJlbW92ZUNoaWxkKGRpdik7XG4gICAgfVxuICB9O1xufTtcblxuZXhwb3J0cy5zaG93UG9wdXBSZXF1ZXN0ID0gc2hvd1BvcHVwUmVxdWVzdDsiLCIndXNlIHN0cmljdCc7XG5cbnZhciBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0ID0gcmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVEZWZhdWx0XCIpO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuZXhwb3J0cy5nZXRPcmlnaW4gPSBleHBvcnRzLmh0dHBSZXF1ZXN0ID0gdm9pZCAwO1xuXG52YXIgX3JlZ2VuZXJhdG9yID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvcmVnZW5lcmF0b3JcIikpO1xuXG52YXIgX2FzeW5jVG9HZW5lcmF0b3IyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9hc3luY1RvR2VuZXJhdG9yXCIpKTtcblxucmVxdWlyZShcIndoYXR3Zy1mZXRjaFwiKTtcblxudmFyIGh0dHBSZXF1ZXN0ID1cbi8qI19fUFVSRV9fKi9cbmZ1bmN0aW9uICgpIHtcbiAgdmFyIF9yZWYgPSAoMCwgX2FzeW5jVG9HZW5lcmF0b3IyW1wiZGVmYXVsdFwiXSkoXG4gIC8qI19fUFVSRV9fKi9cbiAgX3JlZ2VuZXJhdG9yW1wiZGVmYXVsdFwiXS5tYXJrKGZ1bmN0aW9uIF9jYWxsZWUodXJsLCB0eXBlKSB7XG4gICAgdmFyIHJlc3BvbnNlLCB0eHQ7XG4gICAgcmV0dXJuIF9yZWdlbmVyYXRvcltcImRlZmF1bHRcIl0ud3JhcChmdW5jdGlvbiBfY2FsbGVlJChfY29udGV4dCkge1xuICAgICAgd2hpbGUgKDEpIHtcbiAgICAgICAgc3dpdGNoIChfY29udGV4dC5wcmV2ID0gX2NvbnRleHQubmV4dCkge1xuICAgICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgIGlmICh0eXBlID09PSB2b2lkIDApIHtcbiAgICAgICAgICAgICAgdHlwZSA9ICd0ZXh0JztcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgX2NvbnRleHQubmV4dCA9IDM7XG4gICAgICAgICAgICByZXR1cm4gZmV0Y2godXJsLCB7XG4gICAgICAgICAgICAgIGNyZWRlbnRpYWxzOiAnc2FtZS1vcmlnaW4nXG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgIGNhc2UgMzpcbiAgICAgICAgICAgIHJlc3BvbnNlID0gX2NvbnRleHQuc2VudDtcblxuICAgICAgICAgICAgaWYgKCFyZXNwb25zZS5vaykge1xuICAgICAgICAgICAgICBfY29udGV4dC5uZXh0ID0gMjM7XG4gICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoISh0eXBlID09PSAnanNvbicpKSB7XG4gICAgICAgICAgICAgIF9jb250ZXh0Lm5leHQgPSAxMjtcbiAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIF9jb250ZXh0Lm5leHQgPSA4O1xuICAgICAgICAgICAgcmV0dXJuIHJlc3BvbnNlLnRleHQoKTtcblxuICAgICAgICAgIGNhc2UgODpcbiAgICAgICAgICAgIHR4dCA9IF9jb250ZXh0LnNlbnQ7XG4gICAgICAgICAgICByZXR1cm4gX2NvbnRleHQuYWJydXB0KFwicmV0dXJuXCIsIEpTT04ucGFyc2UodHh0KSk7XG5cbiAgICAgICAgICBjYXNlIDEyOlxuICAgICAgICAgICAgaWYgKCEodHlwZSA9PT0gJ2JpbmFyeScpKSB7XG4gICAgICAgICAgICAgIF9jb250ZXh0Lm5leHQgPSAxODtcbiAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIF9jb250ZXh0Lm5leHQgPSAxNTtcbiAgICAgICAgICAgIHJldHVybiByZXNwb25zZS5hcnJheUJ1ZmZlcigpO1xuXG4gICAgICAgICAgY2FzZSAxNTpcbiAgICAgICAgICAgIHJldHVybiBfY29udGV4dC5hYnJ1cHQoXCJyZXR1cm5cIiwgX2NvbnRleHQuc2VudCk7XG5cbiAgICAgICAgICBjYXNlIDE4OlxuICAgICAgICAgICAgX2NvbnRleHQubmV4dCA9IDIwO1xuICAgICAgICAgICAgcmV0dXJuIHJlc3BvbnNlLnRleHQoKTtcblxuICAgICAgICAgIGNhc2UgMjA6XG4gICAgICAgICAgICByZXR1cm4gX2NvbnRleHQuYWJydXB0KFwicmV0dXJuXCIsIF9jb250ZXh0LnNlbnQpO1xuXG4gICAgICAgICAgY2FzZSAyMTpcbiAgICAgICAgICAgIF9jb250ZXh0Lm5leHQgPSAyNDtcbiAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgY2FzZSAyMzpcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcImh0dHBSZXF1ZXN0IGVycm9yOiBcIiArIHVybCArIFwiIFwiICsgcmVzcG9uc2Uuc3RhdHVzVGV4dCk7XG5cbiAgICAgICAgICBjYXNlIDI0OlxuICAgICAgICAgIGNhc2UgXCJlbmRcIjpcbiAgICAgICAgICAgIHJldHVybiBfY29udGV4dC5zdG9wKCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LCBfY2FsbGVlKTtcbiAgfSkpO1xuXG4gIHJldHVybiBmdW5jdGlvbiBodHRwUmVxdWVzdChfeCwgX3gyKSB7XG4gICAgcmV0dXJuIF9yZWYuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgfTtcbn0oKTtcblxuZXhwb3J0cy5odHRwUmVxdWVzdCA9IGh0dHBSZXF1ZXN0O1xuXG52YXIgZ2V0T3JpZ2luID0gZnVuY3Rpb24gZ2V0T3JpZ2luKHVybCkge1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8taXJyZWd1bGFyLXdoaXRlc3BhY2UsIG5vLXVzZWxlc3MtZXNjYXBlXG4gIHZhciBwYXJ0cyA9IHVybC5tYXRjaCgvXi4rXFw6XFwvXFwvW15cXC9dKy8pO1xuICByZXR1cm4gQXJyYXkuaXNBcnJheShwYXJ0cykgJiYgcGFydHMubGVuZ3RoID4gMCA/IHBhcnRzWzBdIDogJ3Vua25vd24nO1xufTtcblxuZXhwb3J0cy5nZXRPcmlnaW4gPSBnZXRPcmlnaW47IiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgX2ludGVyb3BSZXF1aXJlRGVmYXVsdCA9IHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlRGVmYXVsdFwiKTtcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbmV4cG9ydHMuY2xlYXJUaW1lb3V0ID0gZXhwb3J0cy5kaXNwb3NlID0gZXhwb3J0cy5wb3N0TWVzc2FnZSA9IGV4cG9ydHMuaW5pdCA9IGV4cG9ydHMubWVzc2FnZVByb21pc2VzID0gZXhwb3J0cy5lcnJvciA9IGV4cG9ydHMudGltZW91dCA9IGV4cG9ydHMuaW5pdFByb21pc2UgPSBleHBvcnRzLm9yaWdpbiA9IGV4cG9ydHMuaW5zdGFuY2UgPSB2b2lkIDA7XG5cbnZhciBfcmVnZW5lcmF0b3IgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9yZWdlbmVyYXRvclwiKSk7XG5cbnZhciBfYXN5bmNUb0dlbmVyYXRvcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2FzeW5jVG9HZW5lcmF0b3JcIikpO1xuXG52YXIgX2RlZmVycmVkID0gcmVxdWlyZShcIi4uL3V0aWxzL2RlZmVycmVkXCIpO1xuXG52YXIgX3VpID0gcmVxdWlyZShcIi4uL2NvbnN0YW50cy91aVwiKTtcblxudmFyIF9lcnJvcnMgPSByZXF1aXJlKFwiLi4vY29uc3RhbnRzL2Vycm9yc1wiKTtcblxudmFyIF9pbmxpbmVTdHlsZXMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL2lubGluZS1zdHlsZXNcIikpO1xuXG52YXIgaW5zdGFuY2U7XG5leHBvcnRzLmluc3RhbmNlID0gaW5zdGFuY2U7XG52YXIgb3JpZ2luO1xuZXhwb3J0cy5vcmlnaW4gPSBvcmlnaW47XG52YXIgaW5pdFByb21pc2UgPSAoMCwgX2RlZmVycmVkLmNyZWF0ZSkoKTtcbmV4cG9ydHMuaW5pdFByb21pc2UgPSBpbml0UHJvbWlzZTtcbnZhciB0aW1lb3V0ID0gMDtcbmV4cG9ydHMudGltZW91dCA9IHRpbWVvdXQ7XG52YXIgZXJyb3I7XG5leHBvcnRzLmVycm9yID0gZXJyb3I7XG52YXIgX21lc3NhZ2VJRCA9IDA7IC8vIGV2ZXJ5IHBvc3RNZXNzYWdlIHRvIGlmcmFtZSBoYXMgaXRzIG93biBwcm9taXNlIHRvIHJlc29sdmVcblxudmFyIG1lc3NhZ2VQcm9taXNlcyA9IHt9O1xuZXhwb3J0cy5tZXNzYWdlUHJvbWlzZXMgPSBtZXNzYWdlUHJvbWlzZXM7XG5cbnZhciBpbml0ID1cbi8qI19fUFVSRV9fKi9cbmZ1bmN0aW9uICgpIHtcbiAgdmFyIF9yZWYgPSAoMCwgX2FzeW5jVG9HZW5lcmF0b3IyW1wiZGVmYXVsdFwiXSkoXG4gIC8qI19fUFVSRV9fKi9cbiAgX3JlZ2VuZXJhdG9yW1wiZGVmYXVsdFwiXS5tYXJrKGZ1bmN0aW9uIF9jYWxsZWUoc2V0dGluZ3MpIHtcbiAgICB2YXIgZXhpc3RlZEZyYW1lLCBtYW5pZmVzdFN0cmluZywgbWFuaWZlc3QsIHNyYywgaWZyYW1lU3JjSG9zdCwgb25Mb2FkO1xuICAgIHJldHVybiBfcmVnZW5lcmF0b3JbXCJkZWZhdWx0XCJdLndyYXAoZnVuY3Rpb24gX2NhbGxlZSQoX2NvbnRleHQpIHtcbiAgICAgIHdoaWxlICgxKSB7XG4gICAgICAgIHN3aXRjaCAoX2NvbnRleHQucHJldiA9IF9jb250ZXh0Lm5leHQpIHtcbiAgICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICBleGlzdGVkRnJhbWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndHJlem9yY29ubmVjdCcpO1xuXG4gICAgICAgICAgICBpZiAoZXhpc3RlZEZyYW1lKSB7XG4gICAgICAgICAgICAgIGV4cG9ydHMuaW5zdGFuY2UgPSBpbnN0YW5jZSA9IGV4aXN0ZWRGcmFtZTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIGV4cG9ydHMuaW5zdGFuY2UgPSBpbnN0YW5jZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lmcmFtZScpO1xuICAgICAgICAgICAgICBpbnN0YW5jZS5mcmFtZUJvcmRlciA9ICcwJztcbiAgICAgICAgICAgICAgaW5zdGFuY2Uud2lkdGggPSAnMHB4JztcbiAgICAgICAgICAgICAgaW5zdGFuY2UuaGVpZ2h0ID0gJzBweCc7XG4gICAgICAgICAgICAgIGluc3RhbmNlLnN0eWxlLnBvc2l0aW9uID0gJ2Fic29sdXRlJztcbiAgICAgICAgICAgICAgaW5zdGFuY2Uuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgICAgICAgICAgaW5zdGFuY2Uuc3R5bGUuYm9yZGVyID0gJzBweCc7XG4gICAgICAgICAgICAgIGluc3RhbmNlLnN0eWxlLndpZHRoID0gJzBweCc7XG4gICAgICAgICAgICAgIGluc3RhbmNlLnN0eWxlLmhlaWdodCA9ICcwcHgnO1xuICAgICAgICAgICAgICBpbnN0YW5jZS5pZCA9ICd0cmV6b3Jjb25uZWN0JztcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgbWFuaWZlc3RTdHJpbmcgPSBzZXR0aW5ncy5tYW5pZmVzdCA/IEpTT04uc3RyaW5naWZ5KHNldHRpbmdzLm1hbmlmZXN0KSA6ICd1bmRlZmluZWQnOyAvLyBub3RlOiBidG9hKHVuZGVmaW5lZCkgPT09IGJ0b2EoJ3VuZGVmaW5lZCcpID09PSBcImRXNWtaV1pwYm1Wa1wiXG5cbiAgICAgICAgICAgIG1hbmlmZXN0ID0gXCImdmVyc2lvbj1cIiArIHNldHRpbmdzLnZlcnNpb24gKyBcIiZtYW5pZmVzdD1cIiArIGVuY29kZVVSSUNvbXBvbmVudChidG9hKEpTT04uc3RyaW5naWZ5KG1hbmlmZXN0U3RyaW5nKSkpO1xuICAgICAgICAgICAgc3JjID0gc2V0dGluZ3MuaWZyYW1lU3JjICsgXCI/XCIgKyBEYXRlLm5vdygpICsgbWFuaWZlc3Q7XG4gICAgICAgICAgICBpbnN0YW5jZS5zZXRBdHRyaWJ1dGUoJ3NyYycsIHNyYyk7XG5cbiAgICAgICAgICAgIGlmIChzZXR0aW5ncy53ZWJ1c2IpIHtcbiAgICAgICAgICAgICAgaW5zdGFuY2Uuc2V0QXR0cmlidXRlKCdhbGxvdycsICd1c2InKTtcbiAgICAgICAgICAgIH0gLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWlycmVndWxhci13aGl0ZXNwYWNlLCBuby11c2VsZXNzLWVzY2FwZVxuXG5cbiAgICAgICAgICAgIGlmcmFtZVNyY0hvc3QgPSBpbnN0YW5jZS5zcmMubWF0Y2goL14uK1xcOlxcL1xcL1teXFwvXSsvKTtcblxuICAgICAgICAgICAgaWYgKGlmcmFtZVNyY0hvc3QgJiYgaWZyYW1lU3JjSG9zdC5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgIGV4cG9ydHMub3JpZ2luID0gb3JpZ2luID0gaWZyYW1lU3JjSG9zdFswXTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgZXhwb3J0cy50aW1lb3V0ID0gdGltZW91dCA9IHdpbmRvdy5zZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgaW5pdFByb21pc2UucmVqZWN0KF9lcnJvcnMuSUZSQU1FX1RJTUVPVVQpO1xuICAgICAgICAgICAgfSwgMTAwMDApO1xuXG4gICAgICAgICAgICBvbkxvYWQgPSBmdW5jdGlvbiBvbkxvYWQoKSB7XG4gICAgICAgICAgICAgIGlmICghaW5zdGFuY2UpIHtcbiAgICAgICAgICAgICAgICBpbml0UHJvbWlzZS5yZWplY3QoX2Vycm9ycy5JRlJBTUVfQkxPQ0tFRCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAvLyBpZiBob3N0aW5nIHBhZ2UgaXMgYWJsZSB0byBhY2Nlc3MgY3Jvc3Mtb3JpZ2luIGxvY2F0aW9uIGl0IG1lYW5zIHRoYXQgdGhlIGlmcmFtZSBpcyBub3QgbG9hZGVkXG4gICAgICAgICAgICAgICAgdmFyIGlmcmFtZU9yaWdpbiA9IGluc3RhbmNlLmNvbnRlbnRXaW5kb3cubG9jYXRpb24ub3JpZ2luO1xuXG4gICAgICAgICAgICAgICAgaWYgKCFpZnJhbWVPcmlnaW4gfHwgaWZyYW1lT3JpZ2luID09PSAnbnVsbCcpIHtcbiAgICAgICAgICAgICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11c2UtYmVmb3JlLWRlZmluZVxuICAgICAgICAgICAgICAgICAgaGFuZGxlSWZyYW1lQmxvY2tlZCgpO1xuICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSBjYXRjaCAoZSkgey8vIGVtcHR5XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICB2YXIgZXh0ZW5zaW9uOyAvLyAkRmxvd0lzc3VlIGNocm9tZSBpcyBub3QgZGVjbGFyZWQgb3V0c2lkZVxuXG4gICAgICAgICAgICAgIGlmICh0eXBlb2YgY2hyb21lICE9PSAndW5kZWZpbmVkJyAmJiBjaHJvbWUucnVudGltZSAmJiB0eXBlb2YgY2hyb21lLnJ1bnRpbWUub25Db25uZWN0ICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgICAgIGNocm9tZS5ydW50aW1lLm9uQ29ubmVjdC5hZGRMaXN0ZW5lcihmdW5jdGlvbiAoKSB7fSk7XG4gICAgICAgICAgICAgICAgZXh0ZW5zaW9uID0gY2hyb21lLnJ1bnRpbWUuaWQ7XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICBpbnN0YW5jZS5jb250ZW50V2luZG93LnBvc3RNZXNzYWdlKHtcbiAgICAgICAgICAgICAgICB0eXBlOiBfdWkuSUZSQU1FX0hBTkRTSEFLRSxcbiAgICAgICAgICAgICAgICBwYXlsb2FkOiB7XG4gICAgICAgICAgICAgICAgICBzZXR0aW5nczogc2V0dGluZ3MsXG4gICAgICAgICAgICAgICAgICBleHRlbnNpb246IGV4dGVuc2lvblxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSwgb3JpZ2luKTtcbiAgICAgICAgICAgICAgaW5zdGFuY2Uub25sb2FkID0gdW5kZWZpbmVkO1xuICAgICAgICAgICAgfTsgLy8gSUUgaGFja1xuXG5cbiAgICAgICAgICAgIGlmIChpbnN0YW5jZS5hdHRhY2hFdmVudCkge1xuICAgICAgICAgICAgICBpbnN0YW5jZS5hdHRhY2hFdmVudCgnb25sb2FkJywgb25Mb2FkKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIGluc3RhbmNlLm9ubG9hZCA9IG9uTG9hZDtcbiAgICAgICAgICAgIH0gLy8gaW5qZWN0IGlmcmFtZSBpbnRvIGhvc3QgZG9jdW1lbnQgYm9keVxuXG5cbiAgICAgICAgICAgIGlmIChkb2N1bWVudC5ib2R5KSB7XG4gICAgICAgICAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoaW5zdGFuY2UpOyAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdXNlLWJlZm9yZS1kZWZpbmVcblxuICAgICAgICAgICAgICBpbmplY3RTdHlsZVNoZWV0KCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIF9jb250ZXh0LnByZXYgPSAxMztcbiAgICAgICAgICAgIF9jb250ZXh0Lm5leHQgPSAxNjtcbiAgICAgICAgICAgIHJldHVybiBpbml0UHJvbWlzZS5wcm9taXNlO1xuXG4gICAgICAgICAgY2FzZSAxNjpcbiAgICAgICAgICAgIF9jb250ZXh0Lm5leHQgPSAyMTtcbiAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgY2FzZSAxODpcbiAgICAgICAgICAgIF9jb250ZXh0LnByZXYgPSAxODtcbiAgICAgICAgICAgIF9jb250ZXh0LnQwID0gX2NvbnRleHRbXCJjYXRjaFwiXSgxMyk7XG4gICAgICAgICAgICB0aHJvdyBfY29udGV4dC50MC5tZXNzYWdlIHx8IF9jb250ZXh0LnQwO1xuXG4gICAgICAgICAgY2FzZSAyMTpcbiAgICAgICAgICAgIF9jb250ZXh0LnByZXYgPSAyMTtcbiAgICAgICAgICAgIHdpbmRvdy5jbGVhclRpbWVvdXQodGltZW91dCk7XG4gICAgICAgICAgICBleHBvcnRzLnRpbWVvdXQgPSB0aW1lb3V0ID0gMDtcbiAgICAgICAgICAgIHJldHVybiBfY29udGV4dC5maW5pc2goMjEpO1xuXG4gICAgICAgICAgY2FzZSAyNTpcbiAgICAgICAgICBjYXNlIFwiZW5kXCI6XG4gICAgICAgICAgICByZXR1cm4gX2NvbnRleHQuc3RvcCgpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSwgX2NhbGxlZSwgbnVsbCwgW1sxMywgMTgsIDIxLCAyNV1dKTtcbiAgfSkpO1xuXG4gIHJldHVybiBmdW5jdGlvbiBpbml0KF94KSB7XG4gICAgcmV0dXJuIF9yZWYuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgfTtcbn0oKTtcblxuZXhwb3J0cy5pbml0ID0gaW5pdDtcblxudmFyIGluamVjdFN0eWxlU2hlZXQgPSBmdW5jdGlvbiBpbmplY3RTdHlsZVNoZWV0KCkge1xuICBpZiAoIWluc3RhbmNlKSB7XG4gICAgdGhyb3cgX2Vycm9ycy5JRlJBTUVfQkxPQ0tFRDtcbiAgfVxuXG4gIHZhciBkb2MgPSBpbnN0YW5jZS5vd25lckRvY3VtZW50O1xuICB2YXIgaGVhZCA9IGRvYy5oZWFkIHx8IGRvYy5nZXRFbGVtZW50c0J5VGFnTmFtZSgnaGVhZCcpWzBdO1xuICB2YXIgc3R5bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzdHlsZScpO1xuICBzdHlsZS5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAndGV4dC9jc3MnKTtcbiAgc3R5bGUuc2V0QXR0cmlidXRlKCdpZCcsICdUcmV6b3JDb25uZWN0U3R5bGVzaGVldCcpOyAvLyAkRmxvd0lzc3VlXG5cbiAgaWYgKHN0eWxlLnN0eWxlU2hlZXQpIHtcbiAgICAvLyBJRVxuICAgIC8vICRGbG93SXNzdWVcbiAgICBzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSBfaW5saW5lU3R5bGVzW1wiZGVmYXVsdFwiXTtcbiAgfSBlbHNlIHtcbiAgICBzdHlsZS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShfaW5saW5lU3R5bGVzW1wiZGVmYXVsdFwiXSkpO1xuICB9XG5cbiAgaGVhZC5hcHBlbmQoc3R5bGUpO1xufTtcblxudmFyIGhhbmRsZUlmcmFtZUJsb2NrZWQgPSBmdW5jdGlvbiBoYW5kbGVJZnJhbWVCbG9ja2VkKCkge1xuICB3aW5kb3cuY2xlYXJUaW1lb3V0KHRpbWVvdXQpO1xuICBleHBvcnRzLmVycm9yID0gZXJyb3IgPSBfZXJyb3JzLklGUkFNRV9CTE9DS0VELm1lc3NhZ2U7IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11c2UtYmVmb3JlLWRlZmluZVxuXG4gIGRpc3Bvc2UoKTtcbiAgaW5pdFByb21pc2UucmVqZWN0KF9lcnJvcnMuSUZSQU1FX0JMT0NLRUQpO1xufTsgLy8gcG9zdCBtZXNzYWdlcyB0byBpZnJhbWVcblxuXG52YXIgcG9zdE1lc3NhZ2UgPSBmdW5jdGlvbiBwb3N0TWVzc2FnZShtZXNzYWdlLCB1c2VQcm9taXNlKSB7XG4gIGlmICh1c2VQcm9taXNlID09PSB2b2lkIDApIHtcbiAgICB1c2VQcm9taXNlID0gdHJ1ZTtcbiAgfVxuXG4gIGlmICghaW5zdGFuY2UpIHtcbiAgICB0aHJvdyBfZXJyb3JzLklGUkFNRV9CTE9DS0VEO1xuICB9XG5cbiAgaWYgKHVzZVByb21pc2UpIHtcbiAgICBfbWVzc2FnZUlEKys7XG4gICAgbWVzc2FnZS5pZCA9IF9tZXNzYWdlSUQ7XG4gICAgbWVzc2FnZVByb21pc2VzW19tZXNzYWdlSURdID0gKDAsIF9kZWZlcnJlZC5jcmVhdGUpKCk7XG4gICAgaW5zdGFuY2UuY29udGVudFdpbmRvdy5wb3N0TWVzc2FnZShtZXNzYWdlLCBvcmlnaW4pO1xuICAgIHJldHVybiBtZXNzYWdlUHJvbWlzZXNbX21lc3NhZ2VJRF0ucHJvbWlzZTtcbiAgfVxuXG4gIGluc3RhbmNlLmNvbnRlbnRXaW5kb3cucG9zdE1lc3NhZ2UobWVzc2FnZSwgb3JpZ2luKTtcbiAgcmV0dXJuIG51bGw7XG59O1xuXG5leHBvcnRzLnBvc3RNZXNzYWdlID0gcG9zdE1lc3NhZ2U7XG5cbnZhciBkaXNwb3NlID0gZnVuY3Rpb24gZGlzcG9zZSgpIHtcbiAgaWYgKGluc3RhbmNlICYmIGluc3RhbmNlLnBhcmVudE5vZGUpIHtcbiAgICB0cnkge1xuICAgICAgaW5zdGFuY2UucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChpbnN0YW5jZSk7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHsvLyBkbyBub3RoaW5nXG4gICAgfVxuICB9XG5cbiAgZXhwb3J0cy5pbnN0YW5jZSA9IGluc3RhbmNlID0gbnVsbDtcbiAgZXhwb3J0cy50aW1lb3V0ID0gdGltZW91dCA9IDA7XG59O1xuXG5leHBvcnRzLmRpc3Bvc2UgPSBkaXNwb3NlO1xuXG52YXIgY2xlYXJUaW1lb3V0ID0gZnVuY3Rpb24gY2xlYXJUaW1lb3V0KCkge1xuICB3aW5kb3cuY2xlYXJUaW1lb3V0KHRpbWVvdXQpO1xufTtcblxuZXhwb3J0cy5jbGVhclRpbWVvdXQgPSBjbGVhclRpbWVvdXQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IHZvaWQgMDtcbnZhciBjc3MgPSAnLnRyZXpvcmNvbm5lY3QtY29udGFpbmVye3Bvc2l0aW9uOmZpeGVkIWltcG9ydGFudDtkaXNwbGF5Oi13ZWJraXQtYm94IWltcG9ydGFudDtkaXNwbGF5Oi13ZWJraXQtZmxleCFpbXBvcnRhbnQ7ZGlzcGxheTotbXMtZmxleGJveCFpbXBvcnRhbnQ7ZGlzcGxheTpmbGV4IWltcG9ydGFudDstd2Via2l0LWJveC1vcmllbnQ6dmVydGljYWwhaW1wb3J0YW50Oy13ZWJraXQtYm94LWRpcmVjdGlvbjpub3JtYWwhaW1wb3J0YW50Oy13ZWJraXQtZmxleC1kaXJlY3Rpb246Y29sdW1uIWltcG9ydGFudDstbXMtZmxleC1kaXJlY3Rpb246Y29sdW1uIWltcG9ydGFudDtmbGV4LWRpcmVjdGlvbjpjb2x1bW4haW1wb3J0YW50Oy13ZWJraXQtYm94LWFsaWduOmNlbnRlciFpbXBvcnRhbnQ7LXdlYmtpdC1hbGlnbi1pdGVtczpjZW50ZXIhaW1wb3J0YW50Oy1tcy1mbGV4LWFsaWduOmNlbnRlciFpbXBvcnRhbnQ7YWxpZ24taXRlbXM6Y2VudGVyIWltcG9ydGFudDt6LWluZGV4OjEwMDAwIWltcG9ydGFudDt3aWR0aDoxMDAlIWltcG9ydGFudDtoZWlnaHQ6MTAwJSFpbXBvcnRhbnQ7dG9wOjAhaW1wb3J0YW50O2xlZnQ6MCFpbXBvcnRhbnQ7YmFja2dyb3VuZDpyZ2JhKDAsMCwwLC4zNSkhaW1wb3J0YW50O292ZXJmbG93OmF1dG8haW1wb3J0YW50O3BhZGRpbmc6MjBweCFpbXBvcnRhbnQ7bWFyZ2luOjAhaW1wb3J0YW50fS50cmV6b3Jjb25uZWN0LWNvbnRhaW5lciAudHJlem9yY29ubmVjdC13aW5kb3d7cG9zaXRpb246cmVsYXRpdmUhaW1wb3J0YW50O2Rpc3BsYXk6YmxvY2shaW1wb3J0YW50O3dpZHRoOjM3MHB4IWltcG9ydGFudDtmb250LWZhbWlseTotYXBwbGUtc3lzdGVtLEJsaW5rTWFjU3lzdGVtRm9udCxcIlNlZ29lIFVJXCIsUm9ib3RvLFwiSGVsdmV0aWNhIE5ldWVcIixBcmlhbCxzYW5zLXNlcmlmIWltcG9ydGFudDttYXJnaW46YXV0byFpbXBvcnRhbnQ7Ym9yZGVyLXJhZGl1czozcHghaW1wb3J0YW50O2JhY2tncm91bmQtY29sb3I6I2ZmZiFpbXBvcnRhbnQ7dGV4dC1hbGlnbjpjZW50ZXIhaW1wb3J0YW50O292ZXJmbG93OmhpZGRlbiFpbXBvcnRhbnR9LnRyZXpvcmNvbm5lY3QtY29udGFpbmVyIC50cmV6b3Jjb25uZWN0LXdpbmRvdyAudHJlem9yY29ubmVjdC1oZWFke3RleHQtYWxpZ246bGVmdDtwYWRkaW5nOjEycHggMjRweCFpbXBvcnRhbnQ7ZGlzcGxheTotd2Via2l0LWJveCFpbXBvcnRhbnQ7ZGlzcGxheTotd2Via2l0LWZsZXghaW1wb3J0YW50O2Rpc3BsYXk6LW1zLWZsZXhib3ghaW1wb3J0YW50O2Rpc3BsYXk6ZmxleCFpbXBvcnRhbnQ7LXdlYmtpdC1ib3gtYWxpZ246Y2VudGVyIWltcG9ydGFudDstd2Via2l0LWFsaWduLWl0ZW1zOmNlbnRlciFpbXBvcnRhbnQ7LW1zLWZsZXgtYWxpZ246Y2VudGVyIWltcG9ydGFudDthbGlnbi1pdGVtczpjZW50ZXIhaW1wb3J0YW50fS50cmV6b3Jjb25uZWN0LWNvbnRhaW5lciAudHJlem9yY29ubmVjdC13aW5kb3cgLnRyZXpvcmNvbm5lY3QtaGVhZCAudHJlem9yY29ubmVjdC1sb2dvey13ZWJraXQtYm94LWZsZXg6MTstd2Via2l0LWZsZXg6MTstbXMtZmxleDoxO2ZsZXg6MX0udHJlem9yY29ubmVjdC1jb250YWluZXIgLnRyZXpvcmNvbm5lY3Qtd2luZG93IC50cmV6b3Jjb25uZWN0LWhlYWQgLnRyZXpvcmNvbm5lY3QtY2xvc2V7Y3Vyc29yOnBvaW50ZXIhaW1wb3J0YW50O2hlaWdodDoyNHB4IWltcG9ydGFudH0udHJlem9yY29ubmVjdC1jb250YWluZXIgLnRyZXpvcmNvbm5lY3Qtd2luZG93IC50cmV6b3Jjb25uZWN0LWhlYWQgLnRyZXpvcmNvbm5lY3QtY2xvc2Ugc3Zne2ZpbGw6Izc1NzU3NTstd2Via2l0LXRyYW5zaXRpb246ZmlsbCAuM3MgZWFzZS1pbi1vdXQhaW1wb3J0YW50O3RyYW5zaXRpb246ZmlsbCAuM3MgZWFzZS1pbi1vdXQhaW1wb3J0YW50fS50cmV6b3Jjb25uZWN0LWNvbnRhaW5lciAudHJlem9yY29ubmVjdC13aW5kb3cgLnRyZXpvcmNvbm5lY3QtaGVhZCAudHJlem9yY29ubmVjdC1jbG9zZTpob3ZlciBzdmd7ZmlsbDojNDk0OTQ5fS50cmV6b3Jjb25uZWN0LWNvbnRhaW5lciAudHJlem9yY29ubmVjdC13aW5kb3cgLnRyZXpvcmNvbm5lY3QtYm9keXtwYWRkaW5nOjI0cHggMjRweCAzMnB4IWltcG9ydGFudDtiYWNrZ3JvdW5kOiNGQkZCRkIhaW1wb3J0YW50O2JvcmRlci10b3A6MXB4IHNvbGlkICNFQkVCRUJ9LnRyZXpvcmNvbm5lY3QtY29udGFpbmVyIC50cmV6b3Jjb25uZWN0LXdpbmRvdyAudHJlem9yY29ubmVjdC1ib2R5IGgze2NvbG9yOiM1MDUwNTAhaW1wb3J0YW50O2ZvbnQtc2l6ZToxNnB4IWltcG9ydGFudDtmb250LXdlaWdodDo1MDAhaW1wb3J0YW50fS50cmV6b3Jjb25uZWN0LWNvbnRhaW5lciAudHJlem9yY29ubmVjdC13aW5kb3cgLnRyZXpvcmNvbm5lY3QtYm9keSBwe21hcmdpbjo4cHggMCAyNHB4IWltcG9ydGFudDtmb250LXdlaWdodDo0MDAhaW1wb3J0YW50O2NvbG9yOiNBOUE5QTkhaW1wb3J0YW50O2ZvbnQtc2l6ZToxMnB4IWltcG9ydGFudH0udHJlem9yY29ubmVjdC1jb250YWluZXIgLnRyZXpvcmNvbm5lY3Qtd2luZG93IC50cmV6b3Jjb25uZWN0LWJvZHkgYnV0dG9ue3dpZHRoOjEwMCUhaW1wb3J0YW50O3BhZGRpbmc6MTJweCAyNHB4IWltcG9ydGFudDttYXJnaW46MCFpbXBvcnRhbnQ7Ym9yZGVyLXJhZGl1czozcHghaW1wb3J0YW50O2ZvbnQtc2l6ZToxNHB4IWltcG9ydGFudDtmb250LXdlaWdodDozMDAhaW1wb3J0YW50O2N1cnNvcjpwb2ludGVyIWltcG9ydGFudDtiYWNrZ3JvdW5kOiMwMUI3NTchaW1wb3J0YW50O2NvbG9yOiNmZmYhaW1wb3J0YW50O2JvcmRlcjowIWltcG9ydGFudDstd2Via2l0LXRyYW5zaXRpb246YmFja2dyb3VuZC1jb2xvciAuM3MgZWFzZS1pbi1vdXQhaW1wb3J0YW50O3RyYW5zaXRpb246YmFja2dyb3VuZC1jb2xvciAuM3MgZWFzZS1pbi1vdXQhaW1wb3J0YW50fS50cmV6b3Jjb25uZWN0LWNvbnRhaW5lciAudHJlem9yY29ubmVjdC13aW5kb3cgLnRyZXpvcmNvbm5lY3QtYm9keSBidXR0b246aG92ZXJ7YmFja2dyb3VuZC1jb2xvcjojMDBBQjUxIWltcG9ydGFudH0udHJlem9yY29ubmVjdC1jb250YWluZXIgLnRyZXpvcmNvbm5lY3Qtd2luZG93IC50cmV6b3Jjb25uZWN0LWJvZHkgYnV0dG9uOmFjdGl2ZXtiYWNrZ3JvdW5kLWNvbG9yOiMwMDk1NDYhaW1wb3J0YW50fS8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJJbWx1Y0hWMElpd2lKSE4wWkdsdUlsMHNJbTVoYldWeklqcGJYU3dpYldGd2NHbHVaM01pT2lKQlFXTkJMSGxDUVVOSkxGTkJRVUVzWjBKQlEwRXNVVUZCUVN4elFrRkRRU3hSUVVGQkxIVkNRVU5CTEZGQlFVRXNjMEpCUlVFc1VVRkJRU3hsUVVOQkxHMUNRVUZCTEcxQ1FVTkJMSE5DUVVGQkxHbENRVU5CTEhWQ1FVRkJMR2xDUVVOQkxHMUNRVUZCTEdsQ1FVTkJMR1ZCUVVFc2FVSkJSVUVzYTBKQlFVRXNhVUpCUTBFc2IwSkJRVUVzYVVKQlEwRXNaVUZCUVN4cFFrTm1UU3haUVVGaExHbENSRUZ5UWl4UlFVRlRMR2RDUVd0Q1NDeE5RVUZCTEdWQlEwRXNUMEZCUVN4bFFVTkJMRWxCUVVFc1dVRkRRU3hMUVVGQkxGbEJRMEVzVjBGQlFTd3dRa0ZEUVN4VFFVRkJMR1ZCUTBFc1VVRkJRU3hsUVVOQkxFOUJRVUVzV1VOa1Vpd3JRMFJZUlN4VFFVRlZMRzFDUVRaQ1FTeFJRVUZCTEdkQ1FVTkJMRTFCUVVFc1owSkJRMEVzV1VGQlFTeGpRVUZCTEcxQ1FVRkJMRmRCUVVFc1QwRkJRU3hwUWtGQlFTeE5RVUZCTEhGQ1FVTkJMRTlCUVVFc1pVTm1WaXhqUVVGbExHTkVha0ptTEdsQ1FXbENSU3hsUVd0Q1dTeFhRVUZCTEdsQ1EyWmtMRk5CUVZVc2FVSkViVUpKTEcxRlFVTkJMRmRCUVVFc1MwTm9RbVFzVVVGQlV5eExRVUZMTEdWRWVFSmtMRkZCUVZNc2MwSkJNRU5UTEZGQlFVRXNkVUpCUTBFc1VVRkJRU3h6UWtObWJFSXNVVUZCVXl4bFJHbENTeXhyUWtFMVFsb3NhVUpCT0VKdlFpeHZRa0ZCUVN4cFFrTm9RbXhDTEdWQlFXZENMR2xDUkM5Q1dpeFpRV2xDVGl4cFFrRnpRMUVzZFVaQlEwRXNhVUpCUVVFc1JVTndRbFlzWVVGQll5eEZSSEJEVml4VFFVRlZMRVZCTWtSQkxFdEJRVUVzUlVGRlFTeDNSa053UW1Rc1QwRkJVU3hyUWtSNlExSXNUMEZCVVN4bFFXbEZUU3cwUmtGRFFTeExRVUZCTEZGQlEwRXNiVUpCUVVFc1MwRkJRU3hKUVVGQkxITkNRM0JDWkN4WFFVRlpMRXRCUVVzc1NVRkJTeXh6UWtSM1FsSXNhMGRCUTBFc1MwRkJRU3hSUVVWQkxHMUZRVU5CTEZGQlFVRXNTMEZCUVN4TFFVRkJMR1ZCUTBFc1YwRkJRU3hyUWtGRFFTeFhRVUZCTEVsQlFVRXNUVUZCUVN4UlFVVkJMSE5GUVVOQkxFMUJRVUVzYTBKQlEwRXNWVUZCUVN4bFEzSkNaQ3haUVVGaExHTkVkMEpMTEhGRlEzSkNiRUlzVDBGQlVTeEpRVUZKTEVWQlFVa3NaVVIzUWtZc1dVRkJRU3hqUVVOSkxFMUJRVUVzYTBKRGRFSnNRaXhWUVVGWExHVkJSV0lzTUVWQlEwVXNUVUZCVHl4bFFVTlFMRkZCUVZNc1MwRkJTeXhsUVVOa0xFOUJRVkVzV1VGRFVpeGpRVUZsTEdOQlEyWXNWVUZCVnl4bFFVTllMRmxCUVdFc1kwRkRZaXhQUVVGUkxHdENRVU5TTEZkQlFWa3NhMEpCUTFvc1RVRkJUeXhsUVVOUUxFOUJRVkVzV1VGRFVpeHRRa0ZCYjBJc2FVSkJRV2xDTEVsQlFVc3NjMEpCUXpGRExGZEJRVmtzYVVKQlFXbENMRWxCUVVzc2MwSkJSWEJETEdkR1FVTkZMR2xDUVVGclFpeHJRa0ZGY0VJc2FVWkJRMFVzYVVKQlFXdENJbjA9ICovJztcbnZhciBfZGVmYXVsdCA9IGNzcztcbmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gX2RlZmF1bHQ7IiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSB2b2lkIDA7XG5cbnZhciByZW5kZXIgPSBmdW5jdGlvbiByZW5kZXIoY2xhc3NOYW1lLCB1cmwsIG9yaWdpbikge1xuICB2YXIgcXVlcnkgPSBjbGFzc05hbWUgfHwgJy50cmV6b3Itd2VidXNiLWJ1dHRvbic7XG4gIHZhciBidXR0b25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChxdWVyeSk7XG4gIHZhciBzcmMgPSB1cmwgKyBcIj9cIiArIERhdGUubm93KCk7XG4gIGJ1dHRvbnMuZm9yRWFjaChmdW5jdGlvbiAoYikge1xuICAgIGlmIChiLmdldEVsZW1lbnRzQnlUYWdOYW1lKCdpZnJhbWUnKS5sZW5ndGggPCAxKSB7XG4gICAgICB2YXIgYm91bmRzID0gYi5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICAgIHZhciBidG5JZnJhbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpZnJhbWUnKTtcbiAgICAgIGJ0bklmcmFtZS5mcmFtZUJvcmRlciA9ICcwJztcbiAgICAgIGJ0bklmcmFtZS53aWR0aCA9IE1hdGgucm91bmQoYm91bmRzLndpZHRoKSArICdweCc7XG4gICAgICBidG5JZnJhbWUuaGVpZ2h0ID0gTWF0aC5yb3VuZChib3VuZHMuaGVpZ2h0KSArICdweCc7XG4gICAgICBidG5JZnJhbWUuc3R5bGUucG9zaXRpb24gPSAnYWJzb2x1dGUnO1xuICAgICAgYnRuSWZyYW1lLnN0eWxlLnRvcCA9ICcwcHgnO1xuICAgICAgYnRuSWZyYW1lLnN0eWxlLmxlZnQgPSAnMHB4JztcbiAgICAgIGJ0bklmcmFtZS5zdHlsZS56SW5kZXggPSAnMSc7IC8vIGJ0bklmcmFtZS5zdHlsZS5vcGFjaXR5ID0gJzAnOyAvLyB0aGlzIG1ha2VzIGNsaWNrIGltcG9zc2libGUgb24gY3Jvc3Mtb3JpZ2luXG5cbiAgICAgIGJ0bklmcmFtZS5zZXRBdHRyaWJ1dGUoJ2FsbG93JywgJ3VzYicpO1xuICAgICAgYnRuSWZyYW1lLnNldEF0dHJpYnV0ZSgnc2Nyb2xsaW5nJywgJ25vJyk7XG5cbiAgICAgIGJ0bklmcmFtZS5vbmxvYWQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGJ0bklmcmFtZS5jb250ZW50V2luZG93LnBvc3RNZXNzYWdlKHsvLyBzdHlsZTogSlNPTi5zdHJpbmdpZnkoIHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKGIpICksXG4gICAgICAgICAgLy8gb3V0ZXI6IGIub3V0ZXJIVE1MLFxuICAgICAgICAgIC8vIGlubmVyOiBiLmlubmVySFRNTFxuICAgICAgICB9LCBvcmlnaW4pO1xuICAgICAgfTtcblxuICAgICAgYnRuSWZyYW1lLnNyYyA9IHNyYzsgLy8gaW5qZWN0IGlmcmFtZSBpbnRvIGJ1dHRvblxuXG4gICAgICBiLmFwcGVuZChidG5JZnJhbWUpO1xuICAgIH1cbiAgfSk7XG59O1xuXG52YXIgX2RlZmF1bHQgPSByZW5kZXI7XG5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IF9kZWZhdWx0OyIsIid1c2Ugc3RyaWN0JzsgLy8gaHR0cHM6Ly9zdGFja292ZXJmbG93LmNvbS9xdWVzdGlvbnMvNzUwNTYyMy9jb2xvcnMtaW4tamF2YXNjcmlwdC1jb25zb2xlXG4vLyBodHRwczovL2dpdGh1Yi5jb20vcGltdGVycnkvbG9nbGV2ZWwvYmxvYi9tYXN0ZXIvbGliL2xvZ2xldmVsLmpzXG4vLyBodHRwOi8vd3d3LmNvbG9yLWhleC5jb20vY29sb3ItcGFsZXR0ZS81MDE2XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5leHBvcnRzLnBvcHVwQ29uc29sZSA9IGV4cG9ydHMuZW5hYmxlQnlQcmVmaXggPSBleHBvcnRzLmdldExvZyA9IGV4cG9ydHMuZW5hYmxlID0gZXhwb3J0cy5pbml0ID0gZXhwb3J0c1tcImRlZmF1bHRcIl0gPSB2b2lkIDA7XG5cbnZhciBfdGhpcyA9IHZvaWQgMDtcblxudmFyIGNvbG9ycyA9IHtcbiAgLy8gZ3JlZW5cbiAgJ0Rlc2NyaXB0b3JTdHJlYW0nOiAnY29sb3I6ICM3N2FiNTknLFxuICAnRGV2aWNlTGlzdCc6ICdjb2xvcjogIzM2ODAyZCcsXG4gICdEZXZpY2UnOiAnY29sb3I6ICNiYWRhNTUnLFxuICAnQ29yZSc6ICdjb2xvcjogI2M5ZGY4YScsXG4gICdJRnJhbWUnOiAnY29sb3I6ICNGRkZGRkY7IGJhY2tncm91bmQ6ICNmNGE3NDI7JyxcbiAgJ1BvcHVwJzogJ2NvbG9yOiAjZjQ4YTAwJ1xufTtcblxudmFyIExvZyA9XG4vKiNfX1BVUkVfXyovXG5mdW5jdGlvbiAoKSB7XG4gIGZ1bmN0aW9uIExvZyhwcmVmaXgsIGVuYWJsZWQpIHtcbiAgICBpZiAoZW5hYmxlZCA9PT0gdm9pZCAwKSB7XG4gICAgICBlbmFibGVkID0gZmFsc2U7XG4gICAgfVxuXG4gICAgdGhpcy5wcmVmaXggPSBwcmVmaXg7XG4gICAgdGhpcy5lbmFibGVkID0gZW5hYmxlZDtcbiAgICB0aGlzLm1lc3NhZ2VzID0gW107XG4gICAgdGhpcy5jc3MgPSBjb2xvcnNbcHJlZml4XSB8fCAnY29sb3I6ICMwMDAwMDA7IGJhY2tncm91bmQ6ICNGRkZGRkY7JztcbiAgfVxuXG4gIHZhciBfcHJvdG8gPSBMb2cucHJvdG90eXBlO1xuXG4gIF9wcm90by5hZGRNZXNzYWdlID0gZnVuY3Rpb24gYWRkTWVzc2FnZShsZXZlbCwgcHJlZml4KSB7XG4gICAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBuZXcgQXJyYXkoX2xlbiA+IDIgPyBfbGVuIC0gMiA6IDApLCBfa2V5ID0gMjsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgICAgYXJnc1tfa2V5IC0gMl0gPSBhcmd1bWVudHNbX2tleV07XG4gICAgfVxuXG4gICAgdGhpcy5tZXNzYWdlcy5wdXNoKHtcbiAgICAgIGxldmVsOiBsZXZlbCxcbiAgICAgIHByZWZpeDogcHJlZml4LFxuICAgICAgbWVzc2FnZTogYXJncyxcbiAgICAgIHRpbWVzdGFtcDogbmV3IERhdGUoKS5nZXRUaW1lKClcbiAgICB9KTtcbiAgfTtcblxuICBfcHJvdG8ubG9nID0gZnVuY3Rpb24gbG9nKCkge1xuICAgIGZvciAodmFyIF9sZW4yID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IG5ldyBBcnJheShfbGVuMiksIF9rZXkyID0gMDsgX2tleTIgPCBfbGVuMjsgX2tleTIrKykge1xuICAgICAgYXJnc1tfa2V5Ml0gPSBhcmd1bWVudHNbX2tleTJdO1xuICAgIH1cblxuICAgIHRoaXMuYWRkTWVzc2FnZS5hcHBseSh0aGlzLCBbJ2xvZycsIHRoaXMucHJlZml4XS5jb25jYXQoYXJncykpO1xuXG4gICAgaWYgKHRoaXMuZW5hYmxlZCkge1xuICAgICAgdmFyIF9jb25zb2xlO1xuXG4gICAgICAoX2NvbnNvbGUgPSBjb25zb2xlKS5sb2cuYXBwbHkoX2NvbnNvbGUsIFt0aGlzLnByZWZpeF0uY29uY2F0KGFyZ3MpKTtcbiAgICB9XG4gIH07XG5cbiAgX3Byb3RvLmVycm9yID0gZnVuY3Rpb24gZXJyb3IoKSB7XG4gICAgZm9yICh2YXIgX2xlbjMgPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gbmV3IEFycmF5KF9sZW4zKSwgX2tleTMgPSAwOyBfa2V5MyA8IF9sZW4zOyBfa2V5MysrKSB7XG4gICAgICBhcmdzW19rZXkzXSA9IGFyZ3VtZW50c1tfa2V5M107XG4gICAgfVxuXG4gICAgdGhpcy5hZGRNZXNzYWdlLmFwcGx5KHRoaXMsIFsnZXJyb3InLCB0aGlzLnByZWZpeF0uY29uY2F0KGFyZ3MpKTtcblxuICAgIGlmICh0aGlzLmVuYWJsZWQpIHtcbiAgICAgIHZhciBfY29uc29sZTI7XG5cbiAgICAgIChfY29uc29sZTIgPSBjb25zb2xlKS5lcnJvci5hcHBseShfY29uc29sZTIsIFt0aGlzLnByZWZpeF0uY29uY2F0KGFyZ3MpKTtcbiAgICB9XG4gIH07XG5cbiAgX3Byb3RvLndhcm4gPSBmdW5jdGlvbiB3YXJuKCkge1xuICAgIGZvciAodmFyIF9sZW40ID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IG5ldyBBcnJheShfbGVuNCksIF9rZXk0ID0gMDsgX2tleTQgPCBfbGVuNDsgX2tleTQrKykge1xuICAgICAgYXJnc1tfa2V5NF0gPSBhcmd1bWVudHNbX2tleTRdO1xuICAgIH1cblxuICAgIHRoaXMuYWRkTWVzc2FnZS5hcHBseSh0aGlzLCBbJ3dhcm4nLCB0aGlzLnByZWZpeF0uY29uY2F0KGFyZ3MpKTtcblxuICAgIGlmICh0aGlzLmVuYWJsZWQpIHtcbiAgICAgIHZhciBfY29uc29sZTM7XG5cbiAgICAgIChfY29uc29sZTMgPSBjb25zb2xlKS53YXJuLmFwcGx5KF9jb25zb2xlMywgW3RoaXMucHJlZml4XS5jb25jYXQoYXJncykpO1xuICAgIH1cbiAgfTtcblxuICBfcHJvdG8uZGVidWcgPSBmdW5jdGlvbiBkZWJ1ZygpIHtcbiAgICBmb3IgKHZhciBfbGVuNSA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBuZXcgQXJyYXkoX2xlbjUpLCBfa2V5NSA9IDA7IF9rZXk1IDwgX2xlbjU7IF9rZXk1KyspIHtcbiAgICAgIGFyZ3NbX2tleTVdID0gYXJndW1lbnRzW19rZXk1XTtcbiAgICB9XG5cbiAgICB0aGlzLmFkZE1lc3NhZ2UuYXBwbHkodGhpcywgWydkZWJ1ZycsIHRoaXMucHJlZml4XS5jb25jYXQoYXJncykpO1xuXG4gICAgaWYgKHRoaXMuZW5hYmxlZCkge1xuICAgICAgdmFyIF9jb25zb2xlNDtcblxuICAgICAgKF9jb25zb2xlNCA9IGNvbnNvbGUpLmxvZy5hcHBseShfY29uc29sZTQsIFsnJWMnICsgdGhpcy5wcmVmaXgsIHRoaXMuY3NzXS5jb25jYXQoYXJncykpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gTG9nO1xufSgpO1xuXG5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IExvZztcbnZhciBfbG9ncyA9IHt9O1xuXG52YXIgaW5pdCA9IGZ1bmN0aW9uIGluaXQocHJlZml4LCBlbmFibGVkKSB7XG4gIHZhciBlbmFiID0gdHlwZW9mIGVuYWJsZWQgPT09ICdib29sZWFuJyA/IGVuYWJsZWQgOiBmYWxzZTtcbiAgdmFyIGluc3RhbmNlID0gbmV3IExvZyhwcmVmaXgsIGVuYWIpO1xuICBfbG9nc1twcmVmaXhdID0gaW5zdGFuY2U7XG4gIHJldHVybiBpbnN0YW5jZTtcbn07XG5cbmV4cG9ydHMuaW5pdCA9IGluaXQ7XG5cbnZhciBlbmFibGUgPSBmdW5jdGlvbiBlbmFibGUoZW5hYmxlZCkge1xuICBmb3IgKHZhciBfaSA9IDAsIF9PYmplY3Qka2V5cyA9IE9iamVjdC5rZXlzKF9sb2dzKTsgX2kgPCBfT2JqZWN0JGtleXMubGVuZ3RoOyBfaSsrKSB7XG4gICAgdmFyIGwgPSBfT2JqZWN0JGtleXNbX2ldO1xuICAgIF9sb2dzW2xdLmVuYWJsZWQgPSBlbmFibGVkO1xuICB9XG59O1xuXG5leHBvcnRzLmVuYWJsZSA9IGVuYWJsZTtcblxudmFyIGdldExvZyA9IGZ1bmN0aW9uIGdldExvZyhhcmdzKSB7XG4gIC8vIGlmXG4gIHZhciBsb2dzID0gW107XG5cbiAgZm9yICh2YXIgX2kyID0gMCwgX09iamVjdCRrZXlzMiA9IE9iamVjdC5rZXlzKF9sb2dzKTsgX2kyIDwgX09iamVjdCRrZXlzMi5sZW5ndGg7IF9pMisrKSB7XG4gICAgdmFyIGwgPSBfT2JqZWN0JGtleXMyW19pMl07XG4gICAgbG9ncyA9IGxvZ3MuY29uY2F0KF9sb2dzW2xdLm1lc3NhZ2VzKTtcbiAgfVxuXG4gIGxvZ3Muc29ydChmdW5jdGlvbiAoYSwgYikge1xuICAgIHJldHVybiBhLnRpbWVzdGFtcCAtIGIudGltZXN0YW1wO1xuICB9KTtcbiAgcmV0dXJuIGxvZ3M7XG59O1xuXG5leHBvcnRzLmdldExvZyA9IGdldExvZztcblxudmFyIGVuYWJsZUJ5UHJlZml4ID0gZnVuY3Rpb24gZW5hYmxlQnlQcmVmaXgocHJlZml4LCBlbmFibGVkKSB7XG4gIGlmIChfbG9nc1twcmVmaXhdKSB7XG4gICAgX2xvZ3NbcHJlZml4XS5lbmFibGVkID0gZW5hYmxlZDtcbiAgfVxufTsgLy8gVE9ETzogZW5hYmxlL2Rpc2FibGUgbG9nIGF0IHJ1bnRpbWVcblxuXG5leHBvcnRzLmVuYWJsZUJ5UHJlZml4ID0gZW5hYmxlQnlQcmVmaXg7XG5cbnZhciBwb3B1cENvbnNvbGUgPSBmdW5jdGlvbiBwb3B1cENvbnNvbGUodGFnLCBwb3N0TWVzc2FnZSkge1xuICB2YXIgYyA9IGdsb2JhbC5jb25zb2xlO1xuICB2YXIgb3JpZyA9IHtcbiAgICBlcnJvcjogYy5lcnJvcixcbiAgICAvLyB3YXJuOiBjLndhcm4sXG4gICAgaW5mbzogYy5pbmZvLFxuICAgIGRlYnVnOiBjLmRlYnVnLFxuICAgIGxvZzogYy5sb2dcbiAgfTtcbiAgdmFyIGxvZyA9IFtdO1xuXG4gIHZhciBpbmplY3QgPSBmdW5jdGlvbiBpbmplY3QobWV0aG9kLCBsZXZlbCkge1xuICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgICAvLyBhcmdzLnVuc2hpZnQoJ1twb3B1cC5qc10nKTtcbiAgICAgIHZhciB0aW1lID0gbmV3IERhdGUoKS50b1VUQ1N0cmluZygpO1xuXG4gICAgICBmb3IgKHZhciBfbGVuNiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBuZXcgQXJyYXkoX2xlbjYpLCBfa2V5NiA9IDA7IF9rZXk2IDwgX2xlbjY7IF9rZXk2KyspIHtcbiAgICAgICAgYXJnc1tfa2V5Nl0gPSBhcmd1bWVudHNbX2tleTZdO1xuICAgICAgfVxuXG4gICAgICBsb2cucHVzaChbbGV2ZWwsIHRpbWVdLmNvbmNhdChhcmdzKSk7XG4gICAgICBwb3N0TWVzc2FnZS5hcHBseShfdGhpcywgW3tcbiAgICAgICAgdHlwZTogdGFnLFxuICAgICAgICBsZXZlbDogbGV2ZWwsXG4gICAgICAgIHRpbWU6IHRpbWUsXG4gICAgICAgIGFyZ3M6IEpTT04uc3RyaW5naWZ5KGFyZ3MpXG4gICAgICB9XSk7XG4gICAgICByZXR1cm4gbWV0aG9kLmFwcGx5KGMsIGFyZ3MpO1xuICAgIH07XG4gIH07XG5cbiAgZm9yICh2YXIgbGV2ZWwgaW4gb3JpZykge1xuICAgIGNbbGV2ZWxdID0gaW5qZWN0KG9yaWdbbGV2ZWxdLCBsZXZlbCk7XG4gIH1cbn07XG5cbmV4cG9ydHMucG9wdXBDb25zb2xlID0gcG9wdXBDb25zb2xlOyIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbmV4cG9ydHMucGFyc2VNZXNzYWdlID0gdm9pZCAwO1xuXG4vLyBwYXJzZSBNZXNzYWdlRXZlbnQgLmRhdGEgaW50byBDb3JlTWVzc2FnZVxudmFyIHBhcnNlTWVzc2FnZSA9IGZ1bmN0aW9uIHBhcnNlTWVzc2FnZShtZXNzYWdlRGF0YSkge1xuICB2YXIgbWVzc2FnZSA9IHtcbiAgICBldmVudDogbWVzc2FnZURhdGEuZXZlbnQsXG4gICAgdHlwZTogbWVzc2FnZURhdGEudHlwZSxcbiAgICBwYXlsb2FkOiBtZXNzYWdlRGF0YS5wYXlsb2FkXG4gIH07XG5cbiAgaWYgKHR5cGVvZiBtZXNzYWdlRGF0YS5pZCA9PT0gJ251bWJlcicpIHtcbiAgICBtZXNzYWdlLmlkID0gbWVzc2FnZURhdGEuaWQ7XG4gIH1cblxuICBpZiAodHlwZW9mIG1lc3NhZ2VEYXRhLnN1Y2Nlc3MgPT09ICdib29sZWFuJykge1xuICAgIG1lc3NhZ2Uuc3VjY2VzcyA9IG1lc3NhZ2VEYXRhLnN1Y2Nlc3M7XG4gIH1cblxuICByZXR1cm4gbWVzc2FnZTtcbn07XG5cbmV4cG9ydHMucGFyc2VNZXNzYWdlID0gcGFyc2VNZXNzYWdlOyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgX2ludGVyb3BSZXF1aXJlRGVmYXVsdCA9IHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlRGVmYXVsdFwiKTtcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbmV4cG9ydHMucGFyc2UgPSBleHBvcnRzLkRFRkFVTFRfUFJJT1JJVFkgPSB2b2lkIDA7XG5cbnZhciBfZGVmaW5lUHJvcGVydHkyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9kZWZpbmVQcm9wZXJ0eVwiKSk7XG5cbmZ1bmN0aW9uIG93bktleXMob2JqZWN0LCBlbnVtZXJhYmxlT25seSkgeyB2YXIga2V5cyA9IE9iamVjdC5rZXlzKG9iamVjdCk7IGlmIChPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKSB7IHZhciBzeW1ib2xzID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhvYmplY3QpOyBpZiAoZW51bWVyYWJsZU9ubHkpIHN5bWJvbHMgPSBzeW1ib2xzLmZpbHRlcihmdW5jdGlvbiAoc3ltKSB7IHJldHVybiBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKG9iamVjdCwgc3ltKS5lbnVtZXJhYmxlOyB9KTsga2V5cy5wdXNoLmFwcGx5KGtleXMsIHN5bWJvbHMpOyB9IHJldHVybiBrZXlzOyB9XG5cbmZ1bmN0aW9uIF9vYmplY3RTcHJlYWQodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV0gIT0gbnVsbCA/IGFyZ3VtZW50c1tpXSA6IHt9OyBpZiAoaSAlIDIpIHsgb3duS2V5cyhzb3VyY2UsIHRydWUpLmZvckVhY2goZnVuY3Rpb24gKGtleSkgeyAoMCwgX2RlZmluZVByb3BlcnR5MltcImRlZmF1bHRcIl0pKHRhcmdldCwga2V5LCBzb3VyY2Vba2V5XSk7IH0pOyB9IGVsc2UgaWYgKE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JzKSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcnMoc291cmNlKSk7IH0gZWxzZSB7IG93bktleXMoc291cmNlKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHNvdXJjZSwga2V5KSk7IH0pOyB9IH0gcmV0dXJuIHRhcmdldDsgfVxuXG4vKlxuICogSW5pdGlhbCBzZXR0aW5ncyBmb3IgY29ubmVjdC5cbiAqIEl0IGNvdWxkIGJlIGNoYW5nZWQgYnkgcGFzc2luZyB2YWx1ZXMgaW50byBUcmV6b3JDb25uZWN0LmluaXQoLi4uKSBtZXRob2RcbiAqL1xudmFyIFZFUlNJT04gPSAnNy4wLjUnO1xudmFyIHZlcnNpb25OID0gVkVSU0lPTi5zcGxpdCgnLicpLm1hcChmdW5jdGlvbiAocykge1xuICByZXR1cm4gcGFyc2VJbnQocyk7XG59KTtcbnZhciBESVJFQ1RPUlkgPSBcIlwiICsgdmVyc2lvbk5bMF0gKyAodmVyc2lvbk5bMV0gPiAwID8gXCIuXCIgKyB2ZXJzaW9uTlsxXSA6ICcnKSArIFwiL1wiO1xudmFyIERFRkFVTFRfRE9NQUlOID0gXCJodHRwczovL2Nvbm5lY3QudHJlem9yLmlvL1wiICsgRElSRUNUT1JZO1xudmFyIERFRkFVTFRfUFJJT1JJVFkgPSAyO1xuZXhwb3J0cy5ERUZBVUxUX1BSSU9SSVRZID0gREVGQVVMVF9QUklPUklUWTtcbnZhciBpbml0aWFsU2V0dGluZ3MgPSB7XG4gIGNvbmZpZ1NyYzogJ2RhdGEvY29uZmlnLmpzb24nLFxuICAvLyBjb25zdGFudFxuICB2ZXJzaW9uOiBWRVJTSU9OLFxuICAvLyBjb25zdGFudFxuICBkZWJ1ZzogZmFsc2UsXG4gIG9yaWdpbjogbnVsbCxcbiAgcHJpb3JpdHk6IERFRkFVTFRfUFJJT1JJVFksXG4gIHRydXN0ZWRIb3N0OiBmYWxzZSxcbiAgY29ubmVjdFNyYzogREVGQVVMVF9ET01BSU4sXG4gIGlmcmFtZVNyYzogREVGQVVMVF9ET01BSU4gKyBcImlmcmFtZS5odG1sXCIsXG4gIHBvcHVwOiB0cnVlLFxuICBwb3B1cFNyYzogREVGQVVMVF9ET01BSU4gKyBcInBvcHVwLmh0bWxcIixcbiAgd2VidXNiU3JjOiBERUZBVUxUX0RPTUFJTiArIFwid2VidXNiLmh0bWxcIixcbiAgdHJhbnNwb3J0UmVjb25uZWN0OiBmYWxzZSxcbiAgd2VidXNiOiB0cnVlLFxuICBwZW5kaW5nVHJhbnNwb3J0RXZlbnQ6IHRydWUsXG4gIHN1cHBvcnRlZEJyb3dzZXI6IHR5cGVvZiBuYXZpZ2F0b3IgIT09ICd1bmRlZmluZWQnID8gIS9UcmlkZW50fE1TSUUvLnRlc3QobmF2aWdhdG9yLnVzZXJBZ2VudCkgOiB0cnVlLFxuICBleHRlbnNpb246IG51bGwsXG4gIG1hbmlmZXN0OiBudWxsXG59O1xudmFyIGN1cnJlbnRTZXR0aW5ncyA9IGluaXRpYWxTZXR0aW5ncztcblxudmFyIHBhcnNlTWFuaWZlc3QgPSBmdW5jdGlvbiBwYXJzZU1hbmlmZXN0KG1hbmlmZXN0KSB7XG4gIGlmICh0eXBlb2YgbWFuaWZlc3QuZW1haWwgIT09ICdzdHJpbmcnKSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICBpZiAodHlwZW9mIG1hbmlmZXN0LmFwcFVybCAhPT0gJ3N0cmluZycpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgZW1haWw6IG1hbmlmZXN0LmVtYWlsLFxuICAgIGFwcFVybDogbWFuaWZlc3QuYXBwVXJsXG4gIH07XG59O1xuXG52YXIgcGFyc2UgPSBmdW5jdGlvbiBwYXJzZShpbnB1dCkge1xuICBpZiAoIWlucHV0KSByZXR1cm4gY3VycmVudFNldHRpbmdzO1xuXG4gIHZhciBzZXR0aW5ncyA9IF9vYmplY3RTcHJlYWQoe30sIGN1cnJlbnRTZXR0aW5ncyk7XG5cbiAgaWYgKGlucHV0Lmhhc093blByb3BlcnR5KCdkZWJ1ZycpKSB7XG4gICAgaWYgKEFycmF5LmlzQXJyYXkoaW5wdXQpKSB7Ly8gZW5hYmxlIGxvZyB3aXRoIHByZWZpeFxuICAgIH1cblxuICAgIGlmICh0eXBlb2YgaW5wdXQuZGVidWcgPT09ICdib29sZWFuJykge1xuICAgICAgc2V0dGluZ3MuZGVidWcgPSBpbnB1dC5kZWJ1ZztcbiAgICB9IGVsc2UgaWYgKHR5cGVvZiBpbnB1dC5kZWJ1ZyA9PT0gJ3N0cmluZycpIHtcbiAgICAgIHNldHRpbmdzLmRlYnVnID0gaW5wdXQuZGVidWcgPT09ICd0cnVlJztcbiAgICB9XG4gIH1cblxuICBpZiAodHlwZW9mIGlucHV0LmNvbm5lY3RTcmMgPT09ICdzdHJpbmcnKSB7XG4gICAgLy8gVE9ETzogZXNjYXBlIHN0cmluZywgdmFsaWRhdGUgdXJsXG4gICAgc2V0dGluZ3MuY29ubmVjdFNyYyA9IGlucHV0LmNvbm5lY3RTcmM7XG4gIH0gZWxzZSBpZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiYgdHlwZW9mIHdpbmRvdy5fX1RSRVpPUl9DT05ORUNUX1NSQyA9PT0gJ3N0cmluZycpIHtcbiAgICBzZXR0aW5ncy5jb25uZWN0U3JjID0gd2luZG93Ll9fVFJFWk9SX0NPTk5FQ1RfU1JDO1xuICB9XG5cbiAgc2V0dGluZ3MuaWZyYW1lU3JjID0gc2V0dGluZ3MuY29ubmVjdFNyYyArIFwiaWZyYW1lLmh0bWxcIjtcbiAgc2V0dGluZ3MucG9wdXBTcmMgPSBzZXR0aW5ncy5jb25uZWN0U3JjICsgXCJwb3B1cC5odG1sXCI7XG4gIHNldHRpbmdzLndlYnVzYlNyYyA9IHNldHRpbmdzLmNvbm5lY3RTcmMgKyBcIndlYnVzYi5odG1sXCI7XG5cbiAgaWYgKHR5cGVvZiBpbnB1dC50cmFuc3BvcnRSZWNvbm5lY3QgPT09ICdib29sZWFuJykge1xuICAgIHNldHRpbmdzLnRyYW5zcG9ydFJlY29ubmVjdCA9IGlucHV0LnRyYW5zcG9ydFJlY29ubmVjdDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgaW5wdXQud2VidXNiID09PSAnYm9vbGVhbicpIHtcbiAgICBzZXR0aW5ncy53ZWJ1c2IgPSBpbnB1dC53ZWJ1c2I7XG4gIH1cblxuICBpZiAodHlwZW9mIGlucHV0LnBvcHVwID09PSAnYm9vbGVhbicpIHtcbiAgICBzZXR0aW5ncy5wb3B1cCA9IGlucHV0LnBvcHVwO1xuICB9XG5cbiAgaWYgKHR5cGVvZiBpbnB1dC5wZW5kaW5nVHJhbnNwb3J0RXZlbnQgPT09ICdib29sZWFuJykge1xuICAgIHNldHRpbmdzLnBlbmRpbmdUcmFuc3BvcnRFdmVudCA9IGlucHV0LnBlbmRpbmdUcmFuc3BvcnRFdmVudDtcbiAgfSAvLyBsb2NhbCBmaWxlc1xuXG5cbiAgaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmIHdpbmRvdy5sb2NhdGlvbi5wcm90b2NvbCA9PT0gJ2ZpbGU6Jykge1xuICAgIHNldHRpbmdzLm9yaWdpbiA9IFwiZmlsZTovL1wiICsgd2luZG93LmxvY2F0aW9uLnBhdGhuYW1lO1xuICAgIHNldHRpbmdzLndlYnVzYiA9IGZhbHNlO1xuICB9XG5cbiAgaWYgKHR5cGVvZiBpbnB1dC5leHRlbnNpb24gPT09ICdzdHJpbmcnKSB7XG4gICAgc2V0dGluZ3MuZXh0ZW5zaW9uID0gaW5wdXQuZXh0ZW5zaW9uO1xuICB9XG5cbiAgaWYgKHR5cGVvZiBpbnB1dC5tYW5pZmVzdCA9PT0gJ29iamVjdCcpIHtcbiAgICBzZXR0aW5ncy5tYW5pZmVzdCA9IHBhcnNlTWFuaWZlc3QoaW5wdXQubWFuaWZlc3QpO1xuICB9XG5cbiAgY3VycmVudFNldHRpbmdzID0gc2V0dGluZ3M7XG4gIHJldHVybiBjdXJyZW50U2V0dGluZ3M7XG59O1xuXG5leHBvcnRzLnBhcnNlID0gcGFyc2U7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZCA9IHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlV2lsZGNhcmRcIik7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbnZhciBfY29uc3RhbnRzID0gcmVxdWlyZShcIi4uL2NvbnN0YW50c1wiKTtcblxudmFyIFRSQU5TUE9SVCA9IF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKHJlcXVpcmUoXCIuLi9jb25zdGFudHMvdHJhbnNwb3J0XCIpKTtcblxudmFyIFBPUFVQID0gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQocmVxdWlyZShcIi4uL2NvbnN0YW50cy9wb3B1cFwiKSk7XG5cbnZhciBVSSA9IF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKHJlcXVpcmUoXCIuLi9jb25zdGFudHMvdWlcIikpO1xuXG52YXIgREVWSUNFID0gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQocmVxdWlyZShcIi4uL2NvbnN0YW50cy9kZXZpY2VcIikpO1xuXG52YXIgUCA9IF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKHJlcXVpcmUoXCIuL3BhcmFtc1wiKSk7XG5cbnZhciBSID0gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQocmVxdWlyZShcIi4vcmVzcG9uc2VcIikpO1xuXG5PYmplY3Qua2V5cyhSKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgaWYgKGtleSA9PT0gXCJkZWZhdWx0XCIgfHwga2V5ID09PSBcIl9fZXNNb2R1bGVcIikgcmV0dXJuO1xuICBleHBvcnRzW2tleV0gPSBSW2tleV07XG59KTtcblxudmFyIENBUkRBTk8gPSBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChyZXF1aXJlKFwiLi9jYXJkYW5vXCIpKTtcblxudmFyIFJJUFBMRSA9IF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKHJlcXVpcmUoXCIuL3JpcHBsZVwiKSk7XG5cbnZhciBFVEhFUkVVTSA9IF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKHJlcXVpcmUoXCIuL2V0aGVyZXVtXCIpKTtcblxudmFyIE5FTSA9IF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKHJlcXVpcmUoXCIuL25lbVwiKSk7XG5cbnZhciBTVEVMTEFSID0gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQocmVxdWlyZShcIi4vc3RlbGxhclwiKSk7XG5cbnZhciBMSVNLID0gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQocmVxdWlyZShcIi4vbGlza1wiKSk7XG5cbnZhciBURVpPUyA9IF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKHJlcXVpcmUoXCIuL3Rlem9zXCIpKTtcblxudmFyIEVPUyA9IF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKHJlcXVpcmUoXCIuL2Vvc1wiKSk7XG5cbnZhciBfY29pbkluZm8gPSByZXF1aXJlKFwiLi9jb2luSW5mb1wiKTtcblxuT2JqZWN0LmtleXMoX2NvaW5JbmZvKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgaWYgKGtleSA9PT0gXCJkZWZhdWx0XCIgfHwga2V5ID09PSBcIl9fZXNNb2R1bGVcIikgcmV0dXJuO1xuICBleHBvcnRzW2tleV0gPSBfY29pbkluZm9ba2V5XTtcbn0pOyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQgPSByZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkXCIpO1xuXG52YXIgQkxPQ0tDSEFJTiA9IF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKHJlcXVpcmUoXCIuLi9jb25zdGFudHMvYmxvY2tjaGFpblwiKSk7IiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQgPSByZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkXCIpO1xuXG52YXIgX2ludGVyb3BSZXF1aXJlRGVmYXVsdCA9IHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlRGVmYXVsdFwiKTtcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbnZhciBfZXhwb3J0TmFtZXMgPSB7XG4gIFVJX0VWRU5UOiB0cnVlLFxuICBERVZJQ0VfRVZFTlQ6IHRydWUsXG4gIFJFU1BPTlNFX0VWRU5UOiB0cnVlLFxuICBUUkFOU1BPUlRfRVZFTlQ6IHRydWUsXG4gIEJMT0NLQ0hBSU5fRVZFTlQ6IHRydWUsXG4gIFRSQU5TUE9SVDogdHJ1ZSxcbiAgVUk6IHRydWUsXG4gIERFVklDRTogdHJ1ZSxcbiAgQkxPQ0tDSEFJTjogdHJ1ZVxufTtcbmV4cG9ydHMuQkxPQ0tDSEFJTiA9IGV4cG9ydHMuREVWSUNFID0gZXhwb3J0cy5VSSA9IGV4cG9ydHMuVFJBTlNQT1JUID0gZXhwb3J0c1tcImRlZmF1bHRcIl0gPSB2b2lkIDA7XG5cbnZhciBfZGVmaW5lUHJvcGVydHkyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9kZWZpbmVQcm9wZXJ0eVwiKSk7XG5cbnZhciBfcmVnZW5lcmF0b3IgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9yZWdlbmVyYXRvclwiKSk7XG5cbnZhciBfYXN5bmNUb0dlbmVyYXRvcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2FzeW5jVG9HZW5lcmF0b3JcIikpO1xuXG52YXIgX2V2ZW50cyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcImV2ZW50c1wiKSk7XG5cbnZhciBfY29uc3RhbnRzID0gcmVxdWlyZShcIi4vY29uc3RhbnRzXCIpO1xuXG5leHBvcnRzLlVJX0VWRU5UID0gX2NvbnN0YW50cy5VSV9FVkVOVDtcbmV4cG9ydHMuREVWSUNFX0VWRU5UID0gX2NvbnN0YW50cy5ERVZJQ0VfRVZFTlQ7XG5leHBvcnRzLlJFU1BPTlNFX0VWRU5UID0gX2NvbnN0YW50cy5SRVNQT05TRV9FVkVOVDtcbmV4cG9ydHMuVFJBTlNQT1JUX0VWRU5UID0gX2NvbnN0YW50cy5UUkFOU1BPUlRfRVZFTlQ7XG5leHBvcnRzLkJMT0NLQ0hBSU5fRVZFTlQgPSBfY29uc3RhbnRzLkJMT0NLQ0hBSU5fRVZFTlQ7XG5cbnZhciBUUkFOU1BPUlQgPSBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChyZXF1aXJlKFwiLi9jb25zdGFudHMvdHJhbnNwb3J0XCIpKTtcblxuZXhwb3J0cy5UUkFOU1BPUlQgPSBUUkFOU1BPUlQ7XG5cbnZhciBQT1BVUCA9IF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKHJlcXVpcmUoXCIuL2NvbnN0YW50cy9wb3B1cFwiKSk7XG5cbnZhciBJRlJBTUUgPSBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChyZXF1aXJlKFwiLi9jb25zdGFudHMvaWZyYW1lXCIpKTtcblxudmFyIFVJID0gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQocmVxdWlyZShcIi4vY29uc3RhbnRzL3VpXCIpKTtcblxuZXhwb3J0cy5VSSA9IFVJO1xuXG52YXIgREVWSUNFID0gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQocmVxdWlyZShcIi4vY29uc3RhbnRzL2RldmljZVwiKSk7XG5cbmV4cG9ydHMuREVWSUNFID0gREVWSUNFO1xuXG52YXIgQkxPQ0tDSEFJTiA9IF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKHJlcXVpcmUoXCIuL2NvbnN0YW50cy9ibG9ja2NoYWluXCIpKTtcblxuZXhwb3J0cy5CTE9DS0NIQUlOID0gQkxPQ0tDSEFJTjtcblxudmFyIEVSUk9SID0gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQocmVxdWlyZShcIi4vY29uc3RhbnRzL2Vycm9yc1wiKSk7XG5cbnZhciBfUG9wdXBNYW5hZ2VyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi9wb3B1cC9Qb3B1cE1hbmFnZXJcIikpO1xuXG52YXIgaWZyYW1lID0gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQocmVxdWlyZShcIi4vaWZyYW1lL2J1aWxkZXJcIikpO1xuXG52YXIgX2J1dHRvbiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vd2VidXNiL2J1dHRvblwiKSk7XG5cbnZhciBfZGVidWcgPSBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChyZXF1aXJlKFwiLi91dGlscy9kZWJ1Z1wiKSk7XG5cbnZhciBfbWVzc2FnZSA9IHJlcXVpcmUoXCIuL21lc3NhZ2VcIik7XG5cbnZhciBfQ29ubmVjdFNldHRpbmdzID0gcmVxdWlyZShcIi4vZGF0YS9Db25uZWN0U2V0dGluZ3NcIik7XG5cbnZhciAkVCA9IF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKHJlcXVpcmUoXCIuL3R5cGVzXCIpKTtcblxudmFyIF9ibG9ja2NoYWluRXZlbnQgPSByZXF1aXJlKFwiLi90eXBlcy9ibG9ja2NoYWluRXZlbnRcIik7XG5cbk9iamVjdC5rZXlzKF9ibG9ja2NoYWluRXZlbnQpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICBpZiAoa2V5ID09PSBcImRlZmF1bHRcIiB8fCBrZXkgPT09IFwiX19lc01vZHVsZVwiKSByZXR1cm47XG4gIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoX2V4cG9ydE5hbWVzLCBrZXkpKSByZXR1cm47XG4gIGV4cG9ydHNba2V5XSA9IF9ibG9ja2NoYWluRXZlbnRba2V5XTtcbn0pO1xuXG52YXIgX2FjY291bnQgPSByZXF1aXJlKFwiLi90eXBlcy9hY2NvdW50XCIpO1xuXG5PYmplY3Qua2V5cyhfYWNjb3VudCkuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gIGlmIChrZXkgPT09IFwiZGVmYXVsdFwiIHx8IGtleSA9PT0gXCJfX2VzTW9kdWxlXCIpIHJldHVybjtcbiAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChfZXhwb3J0TmFtZXMsIGtleSkpIHJldHVybjtcbiAgZXhwb3J0c1trZXldID0gX2FjY291bnRba2V5XTtcbn0pO1xuXG5mdW5jdGlvbiBvd25LZXlzKG9iamVjdCwgZW51bWVyYWJsZU9ubHkpIHsgdmFyIGtleXMgPSBPYmplY3Qua2V5cyhvYmplY3QpOyBpZiAoT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scykgeyB2YXIgc3ltYm9scyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMob2JqZWN0KTsgaWYgKGVudW1lcmFibGVPbmx5KSBzeW1ib2xzID0gc3ltYm9scy5maWx0ZXIoZnVuY3Rpb24gKHN5bSkgeyByZXR1cm4gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihvYmplY3QsIHN5bSkuZW51bWVyYWJsZTsgfSk7IGtleXMucHVzaC5hcHBseShrZXlzLCBzeW1ib2xzKTsgfSByZXR1cm4ga2V5czsgfVxuXG5mdW5jdGlvbiBfb2JqZWN0U3ByZWFkKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldICE9IG51bGwgPyBhcmd1bWVudHNbaV0gOiB7fTsgaWYgKGkgJSAyKSB7IG93bktleXMoc291cmNlLCB0cnVlKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHsgKDAsIF9kZWZpbmVQcm9wZXJ0eTJbXCJkZWZhdWx0XCJdKSh0YXJnZXQsIGtleSwgc291cmNlW2tleV0pOyB9KTsgfSBlbHNlIGlmIChPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9ycykgeyBPYmplY3QuZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JzKHNvdXJjZSkpOyB9IGVsc2UgeyBvd25LZXlzKHNvdXJjZSkuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihzb3VyY2UsIGtleSkpOyB9KTsgfSB9IHJldHVybiB0YXJnZXQ7IH1cblxudmFyIGV2ZW50RW1pdHRlciA9IG5ldyBfZXZlbnRzW1wiZGVmYXVsdFwiXSgpO1xuXG52YXIgX2xvZyA9ICgwLCBfZGVidWcuaW5pdCkoJ1t0cmV6b3ItY29ubmVjdC5qc10nKTtcblxudmFyIF9zZXR0aW5ncztcblxudmFyIF9wb3B1cE1hbmFnZXI7XG5cbnZhciBpbml0UG9wdXBNYW5hZ2VyID0gZnVuY3Rpb24gaW5pdFBvcHVwTWFuYWdlcigpIHtcbiAgdmFyIHBtID0gbmV3IF9Qb3B1cE1hbmFnZXJbXCJkZWZhdWx0XCJdKF9zZXR0aW5ncyk7XG4gIHBtLm9uKFBPUFVQLkNMT1NFRCwgZnVuY3Rpb24gKCkge1xuICAgIGlmcmFtZS5wb3N0TWVzc2FnZSh7XG4gICAgICB0eXBlOiBQT1BVUC5DTE9TRURcbiAgICB9LCBmYWxzZSk7XG4gIH0pO1xuICByZXR1cm4gcG07XG59OyAvLyBoYW5kbGUgbWVzc2FnZSByZWNlaXZlZCBmcm9tIGlmcmFtZVxuXG5cbnZhciBoYW5kbGVNZXNzYWdlID0gZnVuY3Rpb24gaGFuZGxlTWVzc2FnZShtZXNzYWdlRXZlbnQpIHtcbiAgLy8gaWdub3JlIG1lc3NhZ2VzIGZyb20gZG9tYWluIG90aGVyIHRoZW4gaWZyYW1lIG9yaWdpblxuICBpZiAobWVzc2FnZUV2ZW50Lm9yaWdpbiAhPT0gaWZyYW1lLm9yaWdpbikgcmV0dXJuO1xuICB2YXIgbWVzc2FnZSA9ICgwLCBfbWVzc2FnZS5wYXJzZU1lc3NhZ2UpKG1lc3NhZ2VFdmVudC5kYXRhKTsgLy8gVE9ETzogZGVzdHJ1Y3R1cmluZyB3aXRoIHR5cGVcbiAgLy8gaHR0cHM6Ly9naXRodWIuY29tL01pY3Jvc29mdC9UeXBlU2NyaXB0L2lzc3Vlcy8yNDBcbiAgLy8gY29uc3QgeyBpZCwgZXZlbnQsIHR5cGUsIGRhdGEsIGVycm9yIH06IENvcmVNZXNzYWdlID0gbWVzc2FnZTtcblxuICB2YXIgaWQgPSBtZXNzYWdlLmlkIHx8IDA7XG4gIHZhciBldmVudCA9IG1lc3NhZ2UuZXZlbnQ7XG4gIHZhciB0eXBlID0gbWVzc2FnZS50eXBlO1xuICB2YXIgcGF5bG9hZCA9IG1lc3NhZ2UucGF5bG9hZDtcblxuICBfbG9nLmxvZygnaGFuZGxlTWVzc2FnZScsIG1lc3NhZ2UpO1xuXG4gIHN3aXRjaCAoZXZlbnQpIHtcbiAgICBjYXNlIF9jb25zdGFudHMuUkVTUE9OU0VfRVZFTlQ6XG4gICAgICBpZiAoaWZyYW1lLm1lc3NhZ2VQcm9taXNlc1tpZF0pIHtcbiAgICAgICAgLy8gY2xlYXIgdW5uZWNlc3NhcnkgZmllbGRzIGZyb20gbWVzc2FnZSBvYmplY3RcbiAgICAgICAgZGVsZXRlIG1lc3NhZ2UudHlwZTtcbiAgICAgICAgZGVsZXRlIG1lc3NhZ2UuZXZlbnQ7IC8vIGRlbGV0ZSBtZXNzYWdlLmlkO1xuICAgICAgICAvLyBtZXNzYWdlLl9faWQgPSBpZDtcbiAgICAgICAgLy8gcmVzb2x2ZSBtZXNzYWdlIHByb21pc2UgKHNlbmQgcmVzdWx0IG9mIGNhbGwgbWV0aG9kKVxuXG4gICAgICAgIGlmcmFtZS5tZXNzYWdlUHJvbWlzZXNbaWRdLnJlc29sdmUobWVzc2FnZSk7XG4gICAgICAgIGRlbGV0ZSBpZnJhbWUubWVzc2FnZVByb21pc2VzW2lkXTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIF9sb2cud2FybihcIlVua25vd24gbWVzc2FnZSBpZCBcIiArIGlkKTtcbiAgICAgIH1cblxuICAgICAgYnJlYWs7XG5cbiAgICBjYXNlIF9jb25zdGFudHMuREVWSUNFX0VWRU5UOlxuICAgICAgLy8gcGFzcyBERVZJQ0UgZXZlbnQgdXAgdG8gaHRtbFxuICAgICAgZXZlbnRFbWl0dGVyLmVtaXQoZXZlbnQsIG1lc3NhZ2UpO1xuICAgICAgZXZlbnRFbWl0dGVyLmVtaXQodHlwZSwgcGF5bG9hZCk7IC8vIERFVklDRV9FVkVOVCBhbHNvIGVtaXQgc2luZ2xlIGV2ZW50cyAoY29ubmVjdC9kaXNjb25uZWN0Li4uKVxuXG4gICAgICBicmVhaztcblxuICAgIGNhc2UgX2NvbnN0YW50cy5UUkFOU1BPUlRfRVZFTlQ6XG4gICAgICBldmVudEVtaXR0ZXIuZW1pdChldmVudCwgbWVzc2FnZSk7XG4gICAgICBldmVudEVtaXR0ZXIuZW1pdCh0eXBlLCBwYXlsb2FkKTtcbiAgICAgIGJyZWFrO1xuXG4gICAgY2FzZSBfY29uc3RhbnRzLkJMT0NLQ0hBSU5fRVZFTlQ6XG4gICAgICBldmVudEVtaXR0ZXIuZW1pdChldmVudCwgbWVzc2FnZSk7XG4gICAgICBldmVudEVtaXR0ZXIuZW1pdCh0eXBlLCBwYXlsb2FkKTtcbiAgICAgIGJyZWFrO1xuXG4gICAgY2FzZSBfY29uc3RhbnRzLlVJX0VWRU5UOlxuICAgICAgaWYgKHR5cGUgPT09IElGUkFNRS5CT09UU1RSQVApIHtcbiAgICAgICAgaWZyYW1lLmNsZWFyVGltZW91dCgpO1xuICAgICAgICBicmVhaztcbiAgICAgIH0gZWxzZSBpZiAodHlwZSA9PT0gUE9QVVAuQk9PVFNUUkFQKSB7XG4gICAgICAgIC8vIFBvcHVwIGRpZCBvcGVuIGJ1dCBpcyBzdGlsbCBsb2FkaW5nIEpTXG4gICAgICAgIF9wb3B1cE1hbmFnZXIuY2FuY2VsT3BlblRpbWVvdXQoKTtcblxuICAgICAgICBicmVhaztcbiAgICAgIH0gLy8gcGFzcyBVSSBldmVudCB1cFxuXG5cbiAgICAgIGV2ZW50RW1pdHRlci5lbWl0KGV2ZW50LCBtZXNzYWdlKTtcbiAgICAgIGV2ZW50RW1pdHRlci5lbWl0KHR5cGUsIHBheWxvYWQpO1xuXG4gICAgICBpZiAodHlwZSA9PT0gVUkuSUZSQU1FX0hBTkRTSEFLRSkge1xuICAgICAgICBpZiAocGF5bG9hZC5lcnJvcikge1xuICAgICAgICAgIGlmcmFtZS5pbml0UHJvbWlzZS5yZWplY3QobmV3IEVycm9yKHBheWxvYWQuZXJyb3IpKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBfcG9wdXBNYW5hZ2VyLnNldEJyb2FkY2FzdChwYXlsb2FkLmJyb2FkY2FzdCk7XG5cbiAgICAgICAgICBpZnJhbWUuaW5pdFByb21pc2UucmVzb2x2ZSgpO1xuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKHR5cGUgPT09IFBPUFVQLkNBTkNFTF9QT1BVUF9SRVFVRVNUKSB7XG4gICAgICAgIF9wb3B1cE1hbmFnZXIuY2FuY2VsKCk7XG4gICAgICB9IGVsc2UgaWYgKHR5cGUgPT09IFVJLkNMT1NFX1VJX1dJTkRPVykge1xuICAgICAgICBfcG9wdXBNYW5hZ2VyLmNsb3NlKCk7XG4gICAgICB9XG5cbiAgICAgIGJyZWFrO1xuXG4gICAgZGVmYXVsdDpcbiAgICAgIF9sb2cubG9nKCdVbmRlZmluZWQgbWVzc2FnZScsIGV2ZW50LCBtZXNzYWdlRXZlbnQpO1xuXG4gIH1cbn07XG5cbnZhciBpbml0ID1cbi8qI19fUFVSRV9fKi9cbmZ1bmN0aW9uICgpIHtcbiAgdmFyIF9yZWYgPSAoMCwgX2FzeW5jVG9HZW5lcmF0b3IyW1wiZGVmYXVsdFwiXSkoXG4gIC8qI19fUFVSRV9fKi9cbiAgX3JlZ2VuZXJhdG9yW1wiZGVmYXVsdFwiXS5tYXJrKGZ1bmN0aW9uIF9jYWxsZWUoc2V0dGluZ3MpIHtcbiAgICByZXR1cm4gX3JlZ2VuZXJhdG9yW1wiZGVmYXVsdFwiXS53cmFwKGZ1bmN0aW9uIF9jYWxsZWUkKF9jb250ZXh0KSB7XG4gICAgICB3aGlsZSAoMSkge1xuICAgICAgICBzd2l0Y2ggKF9jb250ZXh0LnByZXYgPSBfY29udGV4dC5uZXh0KSB7XG4gICAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgaWYgKHNldHRpbmdzID09PSB2b2lkIDApIHtcbiAgICAgICAgICAgICAgc2V0dGluZ3MgPSB7fTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKCFpZnJhbWUuaW5zdGFuY2UpIHtcbiAgICAgICAgICAgICAgX2NvbnRleHQubmV4dCA9IDM7XG4gICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB0aHJvdyBFUlJPUi5JRlJBTUVfSU5JVElBTElaRUQ7XG5cbiAgICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgICBpZiAoIV9zZXR0aW5ncykge1xuICAgICAgICAgICAgICBfc2V0dGluZ3MgPSAoMCwgX0Nvbm5lY3RTZXR0aW5ncy5wYXJzZSkoc2V0dGluZ3MpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoX3NldHRpbmdzLm1hbmlmZXN0KSB7XG4gICAgICAgICAgICAgIF9jb250ZXh0Lm5leHQgPSA2O1xuICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdGhyb3cgRVJST1IuTUFOSUZFU1RfTk9UX1NFVDtcblxuICAgICAgICAgIGNhc2UgNjpcbiAgICAgICAgICAgIGlmIChfc2V0dGluZ3Muc3VwcG9ydGVkQnJvd3Nlcikge1xuICAgICAgICAgICAgICBfY29udGV4dC5uZXh0ID0gODtcbiAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHRocm93IEVSUk9SLkJST1dTRVJfTk9UX1NVUFBPUlRFRDtcblxuICAgICAgICAgIGNhc2UgODpcbiAgICAgICAgICAgIGlmICghX3BvcHVwTWFuYWdlcikge1xuICAgICAgICAgICAgICBfcG9wdXBNYW5hZ2VyID0gaW5pdFBvcHVwTWFuYWdlcigpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBfbG9nLmVuYWJsZWQgPSBfc2V0dGluZ3MuZGVidWc7XG4gICAgICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbWVzc2FnZScsIGhhbmRsZU1lc3NhZ2UpO1xuICAgICAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2JlZm9yZXVubG9hZCcsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgaWYgKF9wb3B1cE1hbmFnZXIpIHtcbiAgICAgICAgICAgICAgICBfcG9wdXBNYW5hZ2VyLm9uQmVmb3JlVW5sb2FkKCk7XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICBpZnJhbWUuZGlzcG9zZSgpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBfY29udGV4dC5uZXh0ID0gMTQ7XG4gICAgICAgICAgICByZXR1cm4gaWZyYW1lLmluaXQoX3NldHRpbmdzKTtcblxuICAgICAgICAgIGNhc2UgMTQ6XG4gICAgICAgICAgY2FzZSBcImVuZFwiOlxuICAgICAgICAgICAgcmV0dXJuIF9jb250ZXh0LnN0b3AoKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sIF9jYWxsZWUpO1xuICB9KSk7XG5cbiAgcmV0dXJuIGZ1bmN0aW9uIGluaXQoX3gpIHtcbiAgICByZXR1cm4gX3JlZi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICB9O1xufSgpO1xuXG52YXIgY2FsbCA9XG4vKiNfX1BVUkVfXyovXG5mdW5jdGlvbiAoKSB7XG4gIHZhciBfcmVmMiA9ICgwLCBfYXN5bmNUb0dlbmVyYXRvcjJbXCJkZWZhdWx0XCJdKShcbiAgLyojX19QVVJFX18qL1xuICBfcmVnZW5lcmF0b3JbXCJkZWZhdWx0XCJdLm1hcmsoZnVuY3Rpb24gX2NhbGxlZTIocGFyYW1zKSB7XG4gICAgdmFyIHJlc3BvbnNlO1xuICAgIHJldHVybiBfcmVnZW5lcmF0b3JbXCJkZWZhdWx0XCJdLndyYXAoZnVuY3Rpb24gX2NhbGxlZTIkKF9jb250ZXh0Mikge1xuICAgICAgd2hpbGUgKDEpIHtcbiAgICAgICAgc3dpdGNoIChfY29udGV4dDIucHJldiA9IF9jb250ZXh0Mi5uZXh0KSB7XG4gICAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgaWYgKCEoIWlmcmFtZS5pbnN0YW5jZSAmJiAhaWZyYW1lLnRpbWVvdXQpKSB7XG4gICAgICAgICAgICAgIF9jb250ZXh0Mi5uZXh0ID0gMTk7XG4gICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBpbml0IHBvcHVwIHdpdGggbGF6eSBsb2FkaW5nIGJlZm9yZSBpZnJhbWUgaW5pdGlhbGl6YXRpb25cbiAgICAgICAgICAgIF9zZXR0aW5ncyA9ICgwLCBfQ29ubmVjdFNldHRpbmdzLnBhcnNlKShfc2V0dGluZ3MpO1xuXG4gICAgICAgICAgICBpZiAoX3NldHRpbmdzLm1hbmlmZXN0KSB7XG4gICAgICAgICAgICAgIF9jb250ZXh0Mi5uZXh0ID0gNDtcbiAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiBfY29udGV4dDIuYWJydXB0KFwicmV0dXJuXCIsIHtcbiAgICAgICAgICAgICAgc3VjY2VzczogZmFsc2UsXG4gICAgICAgICAgICAgIHBheWxvYWQ6IHtcbiAgICAgICAgICAgICAgICBlcnJvcjogRVJST1IuTUFOSUZFU1RfTk9UX1NFVC5tZXNzYWdlXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgY2FzZSA0OlxuICAgICAgICAgICAgaWYgKF9zZXR0aW5ncy5zdXBwb3J0ZWRCcm93c2VyKSB7XG4gICAgICAgICAgICAgIF9jb250ZXh0Mi5uZXh0ID0gNjtcbiAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiBfY29udGV4dDIuYWJydXB0KFwicmV0dXJuXCIsIHtcbiAgICAgICAgICAgICAgc3VjY2VzczogZmFsc2UsXG4gICAgICAgICAgICAgIHBheWxvYWQ6IHtcbiAgICAgICAgICAgICAgICBlcnJvcjogRVJST1IuQlJPV1NFUl9OT1RfU1VQUE9SVEVELm1lc3NhZ2VcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICBjYXNlIDY6XG4gICAgICAgICAgICBfcG9wdXBNYW5hZ2VyID0gaW5pdFBvcHVwTWFuYWdlcigpO1xuXG4gICAgICAgICAgICBfcG9wdXBNYW5hZ2VyLnJlcXVlc3QodHJ1ZSk7IC8vIGF1dG8gaW5pdCB3aXRoIGRlZmF1bHQgc2V0dGluZ3NcblxuXG4gICAgICAgICAgICBfY29udGV4dDIucHJldiA9IDg7XG4gICAgICAgICAgICBfY29udGV4dDIubmV4dCA9IDExO1xuICAgICAgICAgICAgcmV0dXJuIGluaXQoX3NldHRpbmdzKTtcblxuICAgICAgICAgIGNhc2UgMTE6XG4gICAgICAgICAgICBfY29udGV4dDIubmV4dCA9IDEzO1xuICAgICAgICAgICAgcmV0dXJuIF9wb3B1cE1hbmFnZXIucmVzb2x2ZUxhenlMb2FkKCk7XG5cbiAgICAgICAgICBjYXNlIDEzOlxuICAgICAgICAgICAgX2NvbnRleHQyLm5leHQgPSAxOTtcbiAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgY2FzZSAxNTpcbiAgICAgICAgICAgIF9jb250ZXh0Mi5wcmV2ID0gMTU7XG4gICAgICAgICAgICBfY29udGV4dDIudDAgPSBfY29udGV4dDJbXCJjYXRjaFwiXSg4KTtcblxuICAgICAgICAgICAgX3BvcHVwTWFuYWdlci5jbG9zZSgpO1xuXG4gICAgICAgICAgICByZXR1cm4gX2NvbnRleHQyLmFicnVwdChcInJldHVyblwiLCB7XG4gICAgICAgICAgICAgIHN1Y2Nlc3M6IGZhbHNlLFxuICAgICAgICAgICAgICBwYXlsb2FkOiB7XG4gICAgICAgICAgICAgICAgZXJyb3I6IF9jb250ZXh0Mi50MFxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgIGNhc2UgMTk6XG4gICAgICAgICAgICBpZiAoIWlmcmFtZS50aW1lb3V0KSB7XG4gICAgICAgICAgICAgIF9jb250ZXh0Mi5uZXh0ID0gMjM7XG4gICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gX2NvbnRleHQyLmFicnVwdChcInJldHVyblwiLCB7XG4gICAgICAgICAgICAgIHN1Y2Nlc3M6IGZhbHNlLFxuICAgICAgICAgICAgICBwYXlsb2FkOiB7XG4gICAgICAgICAgICAgICAgZXJyb3I6IEVSUk9SLk5PX0lGUkFNRS5tZXNzYWdlXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgY2FzZSAyMzpcbiAgICAgICAgICAgIGlmICghaWZyYW1lLmVycm9yKSB7XG4gICAgICAgICAgICAgIF9jb250ZXh0Mi5uZXh0ID0gMjU7XG4gICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gX2NvbnRleHQyLmFicnVwdChcInJldHVyblwiLCB7XG4gICAgICAgICAgICAgIHN1Y2Nlc3M6IGZhbHNlLFxuICAgICAgICAgICAgICBwYXlsb2FkOiB7XG4gICAgICAgICAgICAgICAgZXJyb3I6IGlmcmFtZS5lcnJvclxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgIGNhc2UgMjU6XG4gICAgICAgICAgICAvLyByZXF1ZXN0IHBvcHVwIHdpbmRvdyBpdCBtaWdodCBiZSB1c2VkIGluIHRoZSBmdXR1cmVcbiAgICAgICAgICAgIC8vIGlmIChldmVudEVtaXR0ZXIubGlzdGVuZXJzKFVJX0VWRU5UKS5sZW5ndGggPCAxKSB7IF9wb3B1cE1hbmFnZXIucmVxdWVzdChwYXJhbXMpOyB9XG4gICAgICAgICAgICBpZiAoX3NldHRpbmdzLnBvcHVwKSB7XG4gICAgICAgICAgICAgIF9wb3B1cE1hbmFnZXIucmVxdWVzdCgpO1xuICAgICAgICAgICAgfSAvLyBwb3N0IG1lc3NhZ2UgdG8gaWZyYW1lXG5cblxuICAgICAgICAgICAgX2NvbnRleHQyLnByZXYgPSAyNjtcbiAgICAgICAgICAgIF9jb250ZXh0Mi5uZXh0ID0gMjk7XG4gICAgICAgICAgICByZXR1cm4gaWZyYW1lLnBvc3RNZXNzYWdlKHtcbiAgICAgICAgICAgICAgdHlwZTogSUZSQU1FLkNBTEwsXG4gICAgICAgICAgICAgIHBheWxvYWQ6IHBhcmFtc1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICBjYXNlIDI5OlxuICAgICAgICAgICAgcmVzcG9uc2UgPSBfY29udGV4dDIuc2VudDtcblxuICAgICAgICAgICAgaWYgKCFyZXNwb25zZSkge1xuICAgICAgICAgICAgICBfY29udGV4dDIubmV4dCA9IDM1O1xuICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gVE9ETzogdW5sb2NrIHBvcHVwTWFuYWdlciByZXF1ZXN0IG9ubHkgaWYgdGhlcmUgd2Fzbid0IGVycm9yIFwiaW4gcHJvZ3Jlc3NcIlxuICAgICAgICAgICAgaWYgKHJlc3BvbnNlLnBheWxvYWQuZXJyb3IgIT09IEVSUk9SLkRFVklDRV9DQUxMX0lOX1BST0dSRVNTLm1lc3NhZ2UpIHtcbiAgICAgICAgICAgICAgX3BvcHVwTWFuYWdlci51bmxvY2soKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIF9jb250ZXh0Mi5hYnJ1cHQoXCJyZXR1cm5cIiwgcmVzcG9uc2UpO1xuXG4gICAgICAgICAgY2FzZSAzNTpcbiAgICAgICAgICAgIF9wb3B1cE1hbmFnZXIudW5sb2NrKCk7IC8vIFRPRE9cblxuXG4gICAgICAgICAgICByZXR1cm4gX2NvbnRleHQyLmFicnVwdChcInJldHVyblwiLCB7XG4gICAgICAgICAgICAgIHN1Y2Nlc3M6IGZhbHNlLFxuICAgICAgICAgICAgICBwYXlsb2FkOiB7XG4gICAgICAgICAgICAgICAgZXJyb3I6ICdObyByZXNwb25zZSBmcm9tIGlmcmFtZSdcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICBjYXNlIDM3OlxuICAgICAgICAgICAgX2NvbnRleHQyLm5leHQgPSA0MztcbiAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgY2FzZSAzOTpcbiAgICAgICAgICAgIF9jb250ZXh0Mi5wcmV2ID0gMzk7XG4gICAgICAgICAgICBfY29udGV4dDIudDEgPSBfY29udGV4dDJbXCJjYXRjaFwiXSgyNik7XG5cbiAgICAgICAgICAgIF9sb2cuZXJyb3IoJ19fY2FsbCBlcnJvcicsIF9jb250ZXh0Mi50MSk7XG5cbiAgICAgICAgICAgIHJldHVybiBfY29udGV4dDIuYWJydXB0KFwicmV0dXJuXCIsIF9jb250ZXh0Mi50MSk7XG5cbiAgICAgICAgICBjYXNlIDQzOlxuICAgICAgICAgIGNhc2UgXCJlbmRcIjpcbiAgICAgICAgICAgIHJldHVybiBfY29udGV4dDIuc3RvcCgpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSwgX2NhbGxlZTIsIG51bGwsIFtbOCwgMTVdLCBbMjYsIDM5XV0pO1xuICB9KSk7XG5cbiAgcmV0dXJuIGZ1bmN0aW9uIGNhbGwoX3gyKSB7XG4gICAgcmV0dXJuIF9yZWYyLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gIH07XG59KCk7XG5cbnZhciBjdXN0b21NZXNzYWdlUmVzcG9uc2UgPSBmdW5jdGlvbiBjdXN0b21NZXNzYWdlUmVzcG9uc2UocGF5bG9hZCkge1xuICBpZnJhbWUucG9zdE1lc3NhZ2Uoe1xuICAgIGV2ZW50OiBfY29uc3RhbnRzLlVJX0VWRU5ULFxuICAgIHR5cGU6IFVJLkNVU1RPTV9NRVNTQUdFX1JFU1BPTlNFLFxuICAgIHBheWxvYWQ6IHBheWxvYWRcbiAgfSk7XG59O1xuXG52YXIgVHJlem9yQ29ubmVjdCA9IGZ1bmN0aW9uIFRyZXpvckNvbm5lY3QoKSB7fTtcblxuKDAsIF9kZWZpbmVQcm9wZXJ0eTJbXCJkZWZhdWx0XCJdKShUcmV6b3JDb25uZWN0LCBcIm1hbmlmZXN0XCIsIGZ1bmN0aW9uIChkYXRhKSB7XG4gIF9zZXR0aW5ncyA9ICgwLCBfQ29ubmVjdFNldHRpbmdzLnBhcnNlKSh7XG4gICAgbWFuaWZlc3Q6IGRhdGFcbiAgfSk7XG59KTtcbigwLCBfZGVmaW5lUHJvcGVydHkyW1wiZGVmYXVsdFwiXSkoVHJlem9yQ29ubmVjdCwgXCJnZXRTZXR0aW5nc1wiLFxuLyojX19QVVJFX18qL1xuKDAsIF9hc3luY1RvR2VuZXJhdG9yMltcImRlZmF1bHRcIl0pKFxuLyojX19QVVJFX18qL1xuX3JlZ2VuZXJhdG9yW1wiZGVmYXVsdFwiXS5tYXJrKGZ1bmN0aW9uIF9jYWxsZWUzKCkge1xuICByZXR1cm4gX3JlZ2VuZXJhdG9yW1wiZGVmYXVsdFwiXS53cmFwKGZ1bmN0aW9uIF9jYWxsZWUzJChfY29udGV4dDMpIHtcbiAgICB3aGlsZSAoMSkge1xuICAgICAgc3dpdGNoIChfY29udGV4dDMucHJldiA9IF9jb250ZXh0My5uZXh0KSB7XG4gICAgICAgIGNhc2UgMDpcbiAgICAgICAgICBpZiAoaWZyYW1lLmluc3RhbmNlKSB7XG4gICAgICAgICAgICBfY29udGV4dDMubmV4dCA9IDI7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICB9XG5cbiAgICAgICAgICByZXR1cm4gX2NvbnRleHQzLmFicnVwdChcInJldHVyblwiLCB7XG4gICAgICAgICAgICBzdWNjZXNzOiBmYWxzZSxcbiAgICAgICAgICAgIHBheWxvYWQ6IHtcbiAgICAgICAgICAgICAgZXJyb3I6ICdJZnJhbWUgbm90IGluaXRpYWxpemVkIHlldCwgeW91IG5lZWQgdG8gY2FsbCBUcmV6b3JDb25uZWN0LmluaXQgb3IgYW55IG90aGVyIG1ldGhvZCBmaXJzdC4nXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSk7XG5cbiAgICAgICAgY2FzZSAyOlxuICAgICAgICAgIF9jb250ZXh0My5uZXh0ID0gNDtcbiAgICAgICAgICByZXR1cm4gY2FsbCh7XG4gICAgICAgICAgICBtZXRob2Q6ICdnZXRTZXR0aW5ncydcbiAgICAgICAgICB9KTtcblxuICAgICAgICBjYXNlIDQ6XG4gICAgICAgICAgcmV0dXJuIF9jb250ZXh0My5hYnJ1cHQoXCJyZXR1cm5cIiwgX2NvbnRleHQzLnNlbnQpO1xuXG4gICAgICAgIGNhc2UgNTpcbiAgICAgICAgY2FzZSBcImVuZFwiOlxuICAgICAgICAgIHJldHVybiBfY29udGV4dDMuc3RvcCgpO1xuICAgICAgfVxuICAgIH1cbiAgfSwgX2NhbGxlZTMpO1xufSkpKTtcbigwLCBfZGVmaW5lUHJvcGVydHkyW1wiZGVmYXVsdFwiXSkoVHJlem9yQ29ubmVjdCwgXCJpbml0XCIsXG4vKiNfX1BVUkVfXyovXG5mdW5jdGlvbiAoKSB7XG4gIHZhciBfcmVmNCA9ICgwLCBfYXN5bmNUb0dlbmVyYXRvcjJbXCJkZWZhdWx0XCJdKShcbiAgLyojX19QVVJFX18qL1xuICBfcmVnZW5lcmF0b3JbXCJkZWZhdWx0XCJdLm1hcmsoZnVuY3Rpb24gX2NhbGxlZTQoc2V0dGluZ3MpIHtcbiAgICByZXR1cm4gX3JlZ2VuZXJhdG9yW1wiZGVmYXVsdFwiXS53cmFwKGZ1bmN0aW9uIF9jYWxsZWU0JChfY29udGV4dDQpIHtcbiAgICAgIHdoaWxlICgxKSB7XG4gICAgICAgIHN3aXRjaCAoX2NvbnRleHQ0LnByZXYgPSBfY29udGV4dDQubmV4dCkge1xuICAgICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgIF9jb250ZXh0NC5uZXh0ID0gMjtcbiAgICAgICAgICAgIHJldHVybiBpbml0KHNldHRpbmdzKTtcblxuICAgICAgICAgIGNhc2UgMjpcbiAgICAgICAgICAgIHJldHVybiBfY29udGV4dDQuYWJydXB0KFwicmV0dXJuXCIsIF9jb250ZXh0NC5zZW50KTtcblxuICAgICAgICAgIGNhc2UgMzpcbiAgICAgICAgICBjYXNlIFwiZW5kXCI6XG4gICAgICAgICAgICByZXR1cm4gX2NvbnRleHQ0LnN0b3AoKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sIF9jYWxsZWU0KTtcbiAgfSkpO1xuXG4gIHJldHVybiBmdW5jdGlvbiAoX3gzKSB7XG4gICAgcmV0dXJuIF9yZWY0LmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gIH07XG59KCkpO1xuKDAsIF9kZWZpbmVQcm9wZXJ0eTJbXCJkZWZhdWx0XCJdKShUcmV6b3JDb25uZWN0LCBcIm9uXCIsIGZ1bmN0aW9uICh0eXBlLCBmbikge1xuICBldmVudEVtaXR0ZXIub24odHlwZSwgZm4pO1xufSk7XG4oMCwgX2RlZmluZVByb3BlcnR5MltcImRlZmF1bHRcIl0pKFRyZXpvckNvbm5lY3QsIFwib2ZmXCIsIGZ1bmN0aW9uICh0eXBlLCBmbikge1xuICBldmVudEVtaXR0ZXIucmVtb3ZlTGlzdGVuZXIodHlwZSwgZm4pO1xufSk7XG4oMCwgX2RlZmluZVByb3BlcnR5MltcImRlZmF1bHRcIl0pKFRyZXpvckNvbm5lY3QsIFwidWlSZXNwb25zZVwiLCBmdW5jdGlvbiAocmVzcG9uc2UpIHtcbiAgaWZyYW1lLnBvc3RNZXNzYWdlKF9vYmplY3RTcHJlYWQoe1xuICAgIGV2ZW50OiBfY29uc3RhbnRzLlVJX0VWRU5UXG4gIH0sIHJlc3BvbnNlKSk7XG59KTtcbigwLCBfZGVmaW5lUHJvcGVydHkyW1wiZGVmYXVsdFwiXSkoVHJlem9yQ29ubmVjdCwgXCJjaGFuZ2VTZXR0aW5nc1wiLCBmdW5jdGlvbiAoc2V0dGluZ3MpIHtcbiAgdmFyIHBhcnNlZFNldHRpbmdzID0gKDAsIF9Db25uZWN0U2V0dGluZ3MucGFyc2UpKHNldHRpbmdzKTtcbiAgX2xvZy5lbmFibGVkID0gcGFyc2VkU2V0dGluZ3MuZGVidWc7XG4gIGlmcmFtZS5wb3N0TWVzc2FnZSh7XG4gICAgdHlwZTogVUkuQ0hBTkdFX1NFVFRJTkdTLFxuICAgIHBheWxvYWQ6IHBhcnNlZFNldHRpbmdzXG4gIH0sIGZhbHNlKTtcbn0pO1xuKDAsIF9kZWZpbmVQcm9wZXJ0eTJbXCJkZWZhdWx0XCJdKShUcmV6b3JDb25uZWN0LCBcImJsb2NrY2hhaW5EaXNjb25uZWN0XCIsXG4vKiNfX1BVUkVfXyovXG5mdW5jdGlvbiAoKSB7XG4gIHZhciBfcmVmNSA9ICgwLCBfYXN5bmNUb0dlbmVyYXRvcjJbXCJkZWZhdWx0XCJdKShcbiAgLyojX19QVVJFX18qL1xuICBfcmVnZW5lcmF0b3JbXCJkZWZhdWx0XCJdLm1hcmsoZnVuY3Rpb24gX2NhbGxlZTUocGFyYW1zKSB7XG4gICAgcmV0dXJuIF9yZWdlbmVyYXRvcltcImRlZmF1bHRcIl0ud3JhcChmdW5jdGlvbiBfY2FsbGVlNSQoX2NvbnRleHQ1KSB7XG4gICAgICB3aGlsZSAoMSkge1xuICAgICAgICBzd2l0Y2ggKF9jb250ZXh0NS5wcmV2ID0gX2NvbnRleHQ1Lm5leHQpIHtcbiAgICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICBfY29udGV4dDUubmV4dCA9IDI7XG4gICAgICAgICAgICByZXR1cm4gY2FsbChfb2JqZWN0U3ByZWFkKHtcbiAgICAgICAgICAgICAgbWV0aG9kOiAnYmxvY2tjaGFpbkRpc2Nvbm5lY3QnXG4gICAgICAgICAgICB9LCBwYXJhbXMpKTtcblxuICAgICAgICAgIGNhc2UgMjpcbiAgICAgICAgICAgIHJldHVybiBfY29udGV4dDUuYWJydXB0KFwicmV0dXJuXCIsIF9jb250ZXh0NS5zZW50KTtcblxuICAgICAgICAgIGNhc2UgMzpcbiAgICAgICAgICBjYXNlIFwiZW5kXCI6XG4gICAgICAgICAgICByZXR1cm4gX2NvbnRleHQ1LnN0b3AoKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sIF9jYWxsZWU1KTtcbiAgfSkpO1xuXG4gIHJldHVybiBmdW5jdGlvbiAoX3g0KSB7XG4gICAgcmV0dXJuIF9yZWY1LmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gIH07XG59KCkpO1xuKDAsIF9kZWZpbmVQcm9wZXJ0eTJbXCJkZWZhdWx0XCJdKShUcmV6b3JDb25uZWN0LCBcImJsb2NrY2hhaW5Fc3RpbWF0ZUZlZVwiLFxuLyojX19QVVJFX18qL1xuZnVuY3Rpb24gKCkge1xuICB2YXIgX3JlZjYgPSAoMCwgX2FzeW5jVG9HZW5lcmF0b3IyW1wiZGVmYXVsdFwiXSkoXG4gIC8qI19fUFVSRV9fKi9cbiAgX3JlZ2VuZXJhdG9yW1wiZGVmYXVsdFwiXS5tYXJrKGZ1bmN0aW9uIF9jYWxsZWU2KHBhcmFtcykge1xuICAgIHJldHVybiBfcmVnZW5lcmF0b3JbXCJkZWZhdWx0XCJdLndyYXAoZnVuY3Rpb24gX2NhbGxlZTYkKF9jb250ZXh0Nikge1xuICAgICAgd2hpbGUgKDEpIHtcbiAgICAgICAgc3dpdGNoIChfY29udGV4dDYucHJldiA9IF9jb250ZXh0Ni5uZXh0KSB7XG4gICAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgX2NvbnRleHQ2Lm5leHQgPSAyO1xuICAgICAgICAgICAgcmV0dXJuIGNhbGwoX29iamVjdFNwcmVhZCh7XG4gICAgICAgICAgICAgIG1ldGhvZDogJ2Jsb2NrY2hhaW5Fc3RpbWF0ZUZlZSdcbiAgICAgICAgICAgIH0sIHBhcmFtcykpO1xuXG4gICAgICAgICAgY2FzZSAyOlxuICAgICAgICAgICAgcmV0dXJuIF9jb250ZXh0Ni5hYnJ1cHQoXCJyZXR1cm5cIiwgX2NvbnRleHQ2LnNlbnQpO1xuXG4gICAgICAgICAgY2FzZSAzOlxuICAgICAgICAgIGNhc2UgXCJlbmRcIjpcbiAgICAgICAgICAgIHJldHVybiBfY29udGV4dDYuc3RvcCgpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSwgX2NhbGxlZTYpO1xuICB9KSk7XG5cbiAgcmV0dXJuIGZ1bmN0aW9uIChfeDUpIHtcbiAgICByZXR1cm4gX3JlZjYuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgfTtcbn0oKSk7XG4oMCwgX2RlZmluZVByb3BlcnR5MltcImRlZmF1bHRcIl0pKFRyZXpvckNvbm5lY3QsIFwiYmxvY2tjaGFpblN1YnNjcmliZVwiLFxuLyojX19QVVJFX18qL1xuZnVuY3Rpb24gKCkge1xuICB2YXIgX3JlZjcgPSAoMCwgX2FzeW5jVG9HZW5lcmF0b3IyW1wiZGVmYXVsdFwiXSkoXG4gIC8qI19fUFVSRV9fKi9cbiAgX3JlZ2VuZXJhdG9yW1wiZGVmYXVsdFwiXS5tYXJrKGZ1bmN0aW9uIF9jYWxsZWU3KHBhcmFtcykge1xuICAgIHJldHVybiBfcmVnZW5lcmF0b3JbXCJkZWZhdWx0XCJdLndyYXAoZnVuY3Rpb24gX2NhbGxlZTckKF9jb250ZXh0Nykge1xuICAgICAgd2hpbGUgKDEpIHtcbiAgICAgICAgc3dpdGNoIChfY29udGV4dDcucHJldiA9IF9jb250ZXh0Ny5uZXh0KSB7XG4gICAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgX2NvbnRleHQ3Lm5leHQgPSAyO1xuICAgICAgICAgICAgcmV0dXJuIGNhbGwoX29iamVjdFNwcmVhZCh7XG4gICAgICAgICAgICAgIG1ldGhvZDogJ2Jsb2NrY2hhaW5TdWJzY3JpYmUnXG4gICAgICAgICAgICB9LCBwYXJhbXMpKTtcblxuICAgICAgICAgIGNhc2UgMjpcbiAgICAgICAgICAgIHJldHVybiBfY29udGV4dDcuYWJydXB0KFwicmV0dXJuXCIsIF9jb250ZXh0Ny5zZW50KTtcblxuICAgICAgICAgIGNhc2UgMzpcbiAgICAgICAgICBjYXNlIFwiZW5kXCI6XG4gICAgICAgICAgICByZXR1cm4gX2NvbnRleHQ3LnN0b3AoKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sIF9jYWxsZWU3KTtcbiAgfSkpO1xuXG4gIHJldHVybiBmdW5jdGlvbiAoX3g2KSB7XG4gICAgcmV0dXJuIF9yZWY3LmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gIH07XG59KCkpO1xuKDAsIF9kZWZpbmVQcm9wZXJ0eTJbXCJkZWZhdWx0XCJdKShUcmV6b3JDb25uZWN0LCBcImJsb2NrY2hhaW5VbnN1YnNjcmliZVwiLFxuLyojX19QVVJFX18qL1xuZnVuY3Rpb24gKCkge1xuICB2YXIgX3JlZjggPSAoMCwgX2FzeW5jVG9HZW5lcmF0b3IyW1wiZGVmYXVsdFwiXSkoXG4gIC8qI19fUFVSRV9fKi9cbiAgX3JlZ2VuZXJhdG9yW1wiZGVmYXVsdFwiXS5tYXJrKGZ1bmN0aW9uIF9jYWxsZWU4KHBhcmFtcykge1xuICAgIHJldHVybiBfcmVnZW5lcmF0b3JbXCJkZWZhdWx0XCJdLndyYXAoZnVuY3Rpb24gX2NhbGxlZTgkKF9jb250ZXh0OCkge1xuICAgICAgd2hpbGUgKDEpIHtcbiAgICAgICAgc3dpdGNoIChfY29udGV4dDgucHJldiA9IF9jb250ZXh0OC5uZXh0KSB7XG4gICAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgX2NvbnRleHQ4Lm5leHQgPSAyO1xuICAgICAgICAgICAgcmV0dXJuIGNhbGwoX29iamVjdFNwcmVhZCh7XG4gICAgICAgICAgICAgIG1ldGhvZDogJ2Jsb2NrY2hhaW5VbnN1YnNjcmliZSdcbiAgICAgICAgICAgIH0sIHBhcmFtcykpO1xuXG4gICAgICAgICAgY2FzZSAyOlxuICAgICAgICAgICAgcmV0dXJuIF9jb250ZXh0OC5hYnJ1cHQoXCJyZXR1cm5cIiwgX2NvbnRleHQ4LnNlbnQpO1xuXG4gICAgICAgICAgY2FzZSAzOlxuICAgICAgICAgIGNhc2UgXCJlbmRcIjpcbiAgICAgICAgICAgIHJldHVybiBfY29udGV4dDguc3RvcCgpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSwgX2NhbGxlZTgpO1xuICB9KSk7XG5cbiAgcmV0dXJuIGZ1bmN0aW9uIChfeDcpIHtcbiAgICByZXR1cm4gX3JlZjguYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgfTtcbn0oKSk7XG4oMCwgX2RlZmluZVByb3BlcnR5MltcImRlZmF1bHRcIl0pKFRyZXpvckNvbm5lY3QsIFwiY3VzdG9tTWVzc2FnZVwiLFxuLyojX19QVVJFX18qL1xuZnVuY3Rpb24gKCkge1xuICB2YXIgX3JlZjkgPSAoMCwgX2FzeW5jVG9HZW5lcmF0b3IyW1wiZGVmYXVsdFwiXSkoXG4gIC8qI19fUFVSRV9fKi9cbiAgX3JlZ2VuZXJhdG9yW1wiZGVmYXVsdFwiXS5tYXJrKGZ1bmN0aW9uIF9jYWxsZWUxMChwYXJhbXMpIHtcbiAgICB2YXIgY2FsbGJhY2ssIGN1c3RvbU1lc3NhZ2VMaXN0ZW5lciwgcmVzcG9uc2U7XG4gICAgcmV0dXJuIF9yZWdlbmVyYXRvcltcImRlZmF1bHRcIl0ud3JhcChmdW5jdGlvbiBfY2FsbGVlMTAkKF9jb250ZXh0MTApIHtcbiAgICAgIHdoaWxlICgxKSB7XG4gICAgICAgIHN3aXRjaCAoX2NvbnRleHQxMC5wcmV2ID0gX2NvbnRleHQxMC5uZXh0KSB7XG4gICAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgaWYgKCEodHlwZW9mIHBhcmFtcy5jYWxsYmFjayAhPT0gJ2Z1bmN0aW9uJykpIHtcbiAgICAgICAgICAgICAgX2NvbnRleHQxMC5uZXh0ID0gMjtcbiAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiBfY29udGV4dDEwLmFicnVwdChcInJldHVyblwiLCB7XG4gICAgICAgICAgICAgIHN1Y2Nlc3M6IGZhbHNlLFxuICAgICAgICAgICAgICBwYXlsb2FkOiB7XG4gICAgICAgICAgICAgICAgZXJyb3I6ICdQYXJhbWV0ZXIgXCJjYWxsYmFja1wiIGlzIG5vdCBhIGZ1bmN0aW9uJ1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgIGNhc2UgMjpcbiAgICAgICAgICAgIC8vIFRPRE86IHNldCBtZXNzYWdlIGxpc3RlbmVyIG9ubHkgaWYgaWZyYW1lIGlzIGxvYWRlZCBjb3JyZWN0bHlcbiAgICAgICAgICAgIGNhbGxiYWNrID0gcGFyYW1zLmNhbGxiYWNrO1xuICAgICAgICAgICAgZGVsZXRlIHBhcmFtcy5jYWxsYmFjaztcblxuICAgICAgICAgICAgY3VzdG9tTWVzc2FnZUxpc3RlbmVyID1cbiAgICAgICAgICAgIC8qI19fUFVSRV9fKi9cbiAgICAgICAgICAgIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgdmFyIF9yZWYxMCA9ICgwLCBfYXN5bmNUb0dlbmVyYXRvcjJbXCJkZWZhdWx0XCJdKShcbiAgICAgICAgICAgICAgLyojX19QVVJFX18qL1xuICAgICAgICAgICAgICBfcmVnZW5lcmF0b3JbXCJkZWZhdWx0XCJdLm1hcmsoZnVuY3Rpb24gX2NhbGxlZTkoZXZlbnQpIHtcbiAgICAgICAgICAgICAgICB2YXIgZGF0YSwgcGF5bG9hZDtcbiAgICAgICAgICAgICAgICByZXR1cm4gX3JlZ2VuZXJhdG9yW1wiZGVmYXVsdFwiXS53cmFwKGZ1bmN0aW9uIF9jYWxsZWU5JChfY29udGV4dDkpIHtcbiAgICAgICAgICAgICAgICAgIHdoaWxlICgxKSB7XG4gICAgICAgICAgICAgICAgICAgIHN3aXRjaCAoX2NvbnRleHQ5LnByZXYgPSBfY29udGV4dDkubmV4dCkge1xuICAgICAgICAgICAgICAgICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEgPSBldmVudC5kYXRhO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIShkYXRhICYmIGRhdGEudHlwZSA9PT0gVUkuQ1VTVE9NX01FU1NBR0VfUkVRVUVTVCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2NvbnRleHQ5Lm5leHQgPSA2O1xuICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgX2NvbnRleHQ5Lm5leHQgPSA0O1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGNhbGxiYWNrKGRhdGEucGF5bG9hZCk7XG5cbiAgICAgICAgICAgICAgICAgICAgICBjYXNlIDQ6XG4gICAgICAgICAgICAgICAgICAgICAgICBwYXlsb2FkID0gX2NvbnRleHQ5LnNlbnQ7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChwYXlsb2FkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGN1c3RvbU1lc3NhZ2VSZXNwb25zZShwYXlsb2FkKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGN1c3RvbU1lc3NhZ2VSZXNwb25zZSh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogJ3JlbGVhc2UnXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgY2FzZSA2OlxuICAgICAgICAgICAgICAgICAgICAgIGNhc2UgXCJlbmRcIjpcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfY29udGV4dDkuc3RvcCgpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSwgX2NhbGxlZTkpO1xuICAgICAgICAgICAgICB9KSk7XG5cbiAgICAgICAgICAgICAgcmV0dXJuIGZ1bmN0aW9uIGN1c3RvbU1lc3NhZ2VMaXN0ZW5lcihfeDkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gX3JlZjEwLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgICAgICAgICAgIH07XG4gICAgICAgICAgICB9KCk7XG5cbiAgICAgICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdtZXNzYWdlJywgY3VzdG9tTWVzc2FnZUxpc3RlbmVyLCBmYWxzZSk7XG4gICAgICAgICAgICBfY29udGV4dDEwLm5leHQgPSA4O1xuICAgICAgICAgICAgcmV0dXJuIGNhbGwoX29iamVjdFNwcmVhZCh7XG4gICAgICAgICAgICAgIG1ldGhvZDogJ2N1c3RvbU1lc3NhZ2UnXG4gICAgICAgICAgICB9LCBwYXJhbXMpKTtcblxuICAgICAgICAgIGNhc2UgODpcbiAgICAgICAgICAgIHJlc3BvbnNlID0gX2NvbnRleHQxMC5zZW50O1xuICAgICAgICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21lc3NhZ2UnLCBjdXN0b21NZXNzYWdlTGlzdGVuZXIpO1xuICAgICAgICAgICAgcmV0dXJuIF9jb250ZXh0MTAuYWJydXB0KFwicmV0dXJuXCIsIHJlc3BvbnNlKTtcblxuICAgICAgICAgIGNhc2UgMTE6XG4gICAgICAgICAgY2FzZSBcImVuZFwiOlxuICAgICAgICAgICAgcmV0dXJuIF9jb250ZXh0MTAuc3RvcCgpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSwgX2NhbGxlZTEwKTtcbiAgfSkpO1xuXG4gIHJldHVybiBmdW5jdGlvbiAoX3g4KSB7XG4gICAgcmV0dXJuIF9yZWY5LmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gIH07XG59KCkpO1xuKDAsIF9kZWZpbmVQcm9wZXJ0eTJbXCJkZWZhdWx0XCJdKShUcmV6b3JDb25uZWN0LCBcInJlcXVlc3RMb2dpblwiLFxuLyojX19QVVJFX18qL1xuZnVuY3Rpb24gKCkge1xuICB2YXIgX3JlZjExID0gKDAsIF9hc3luY1RvR2VuZXJhdG9yMltcImRlZmF1bHRcIl0pKFxuICAvKiNfX1BVUkVfXyovXG4gIF9yZWdlbmVyYXRvcltcImRlZmF1bHRcIl0ubWFyayhmdW5jdGlvbiBfY2FsbGVlMTIocGFyYW1zKSB7XG4gICAgdmFyIGNhbGxiYWNrLCBsb2dpbkNoYWxsZW5nZUxpc3RlbmVyLCByZXNwb25zZTtcbiAgICByZXR1cm4gX3JlZ2VuZXJhdG9yW1wiZGVmYXVsdFwiXS53cmFwKGZ1bmN0aW9uIF9jYWxsZWUxMiQoX2NvbnRleHQxMikge1xuICAgICAgd2hpbGUgKDEpIHtcbiAgICAgICAgc3dpdGNoIChfY29udGV4dDEyLnByZXYgPSBfY29udGV4dDEyLm5leHQpIHtcbiAgICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICBpZiAoISh0eXBlb2YgcGFyYW1zLmNhbGxiYWNrID09PSAnZnVuY3Rpb24nKSkge1xuICAgICAgICAgICAgICBfY29udGV4dDEyLm5leHQgPSAxMjtcbiAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGNhbGxiYWNrID0gcGFyYW1zLmNhbGxiYWNrO1xuICAgICAgICAgICAgZGVsZXRlIHBhcmFtcy5jYWxsYmFjazsgLy8gZGVsZXRlIGNhbGxiYWNrIHZhbHVlLiB0aGlzIGZpZWxkIGNhbm5vdCBiZSBzZW50IHVzaW5nIHBvc3RNZXNzYWdlIGZ1bmN0aW9uXG4gICAgICAgICAgICAvLyBUT0RPOiBzZXQgbWVzc2FnZSBsaXN0ZW5lciBvbmx5IGlmIGlmcmFtZSBpcyBsb2FkZWQgY29ycmVjdGx5XG5cbiAgICAgICAgICAgIGxvZ2luQ2hhbGxlbmdlTGlzdGVuZXIgPVxuICAgICAgICAgICAgLyojX19QVVJFX18qL1xuICAgICAgICAgICAgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICB2YXIgX3JlZjEyID0gKDAsIF9hc3luY1RvR2VuZXJhdG9yMltcImRlZmF1bHRcIl0pKFxuICAgICAgICAgICAgICAvKiNfX1BVUkVfXyovXG4gICAgICAgICAgICAgIF9yZWdlbmVyYXRvcltcImRlZmF1bHRcIl0ubWFyayhmdW5jdGlvbiBfY2FsbGVlMTEoZXZlbnQpIHtcbiAgICAgICAgICAgICAgICB2YXIgZGF0YSwgcGF5bG9hZDtcbiAgICAgICAgICAgICAgICByZXR1cm4gX3JlZ2VuZXJhdG9yW1wiZGVmYXVsdFwiXS53cmFwKGZ1bmN0aW9uIF9jYWxsZWUxMSQoX2NvbnRleHQxMSkge1xuICAgICAgICAgICAgICAgICAgd2hpbGUgKDEpIHtcbiAgICAgICAgICAgICAgICAgICAgc3dpdGNoIChfY29udGV4dDExLnByZXYgPSBfY29udGV4dDExLm5leHQpIHtcbiAgICAgICAgICAgICAgICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhID0gZXZlbnQuZGF0YTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCEoZGF0YSAmJiBkYXRhLnR5cGUgPT09IFVJLkxPR0lOX0NIQUxMRU5HRV9SRVFVRVNUKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfY29udGV4dDExLm5leHQgPSAxMztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIF9jb250ZXh0MTEucHJldiA9IDI7XG4gICAgICAgICAgICAgICAgICAgICAgICBfY29udGV4dDExLm5leHQgPSA1O1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGNhbGxiYWNrKCk7XG5cbiAgICAgICAgICAgICAgICAgICAgICBjYXNlIDU6XG4gICAgICAgICAgICAgICAgICAgICAgICBwYXlsb2FkID0gX2NvbnRleHQxMS5zZW50O1xuICAgICAgICAgICAgICAgICAgICAgICAgaWZyYW1lLnBvc3RNZXNzYWdlKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZXZlbnQ6IF9jb25zdGFudHMuVUlfRVZFTlQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IFVJLkxPR0lOX0NIQUxMRU5HRV9SRVNQT05TRSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcGF5bG9hZDogcGF5bG9hZFxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBfY29udGV4dDExLm5leHQgPSAxMztcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICAgICAgICAgICAgY2FzZSA5OlxuICAgICAgICAgICAgICAgICAgICAgICAgX2NvbnRleHQxMS5wcmV2ID0gOTtcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jb250ZXh0MTEudDAgPSBfY29udGV4dDExW1wiY2F0Y2hcIl0oMik7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLndhcm4oJ1RyZXpvckNvbm5lY3QucmVxdWVzdExvZ2luOiBjYWxsYmFjayBlcnJvcicsIF9jb250ZXh0MTEudDApO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWZyYW1lLnBvc3RNZXNzYWdlKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZXZlbnQ6IF9jb25zdGFudHMuVUlfRVZFTlQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IFVJLkxPR0lOX0NIQUxMRU5HRV9SRVNQT05TRSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcGF5bG9hZDogX2NvbnRleHQxMS50MC5tZXNzYWdlXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgICAgICAgIGNhc2UgMTM6XG4gICAgICAgICAgICAgICAgICAgICAgY2FzZSBcImVuZFwiOlxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF9jb250ZXh0MTEuc3RvcCgpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSwgX2NhbGxlZTExLCBudWxsLCBbWzIsIDldXSk7XG4gICAgICAgICAgICAgIH0pKTtcblxuICAgICAgICAgICAgICByZXR1cm4gZnVuY3Rpb24gbG9naW5DaGFsbGVuZ2VMaXN0ZW5lcihfeDExKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIF9yZWYxMi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgfSgpO1xuXG4gICAgICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbWVzc2FnZScsIGxvZ2luQ2hhbGxlbmdlTGlzdGVuZXIsIGZhbHNlKTtcbiAgICAgICAgICAgIF9jb250ZXh0MTIubmV4dCA9IDc7XG4gICAgICAgICAgICByZXR1cm4gY2FsbChfb2JqZWN0U3ByZWFkKHtcbiAgICAgICAgICAgICAgbWV0aG9kOiAncmVxdWVzdExvZ2luJ1xuICAgICAgICAgICAgfSwgcGFyYW1zLCB7XG4gICAgICAgICAgICAgIGFzeW5jQ2hhbGxlbmdlOiB0cnVlXG4gICAgICAgICAgICB9KSk7XG5cbiAgICAgICAgICBjYXNlIDc6XG4gICAgICAgICAgICByZXNwb25zZSA9IF9jb250ZXh0MTIuc2VudDtcbiAgICAgICAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdtZXNzYWdlJywgbG9naW5DaGFsbGVuZ2VMaXN0ZW5lcik7XG4gICAgICAgICAgICByZXR1cm4gX2NvbnRleHQxMi5hYnJ1cHQoXCJyZXR1cm5cIiwgcmVzcG9uc2UpO1xuXG4gICAgICAgICAgY2FzZSAxMjpcbiAgICAgICAgICAgIF9jb250ZXh0MTIubmV4dCA9IDE0O1xuICAgICAgICAgICAgcmV0dXJuIGNhbGwoX29iamVjdFNwcmVhZCh7XG4gICAgICAgICAgICAgIG1ldGhvZDogJ3JlcXVlc3RMb2dpbidcbiAgICAgICAgICAgIH0sIHBhcmFtcykpO1xuXG4gICAgICAgICAgY2FzZSAxNDpcbiAgICAgICAgICAgIHJldHVybiBfY29udGV4dDEyLmFicnVwdChcInJldHVyblwiLCBfY29udGV4dDEyLnNlbnQpO1xuXG4gICAgICAgICAgY2FzZSAxNTpcbiAgICAgICAgICBjYXNlIFwiZW5kXCI6XG4gICAgICAgICAgICByZXR1cm4gX2NvbnRleHQxMi5zdG9wKCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LCBfY2FsbGVlMTIpO1xuICB9KSk7XG5cbiAgcmV0dXJuIGZ1bmN0aW9uIChfeDEwKSB7XG4gICAgcmV0dXJuIF9yZWYxMS5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICB9O1xufSgpKTtcbigwLCBfZGVmaW5lUHJvcGVydHkyW1wiZGVmYXVsdFwiXSkoVHJlem9yQ29ubmVjdCwgXCJyZXNldERldmljZVwiLFxuLyojX19QVVJFX18qL1xuZnVuY3Rpb24gKCkge1xuICB2YXIgX3JlZjEzID0gKDAsIF9hc3luY1RvR2VuZXJhdG9yMltcImRlZmF1bHRcIl0pKFxuICAvKiNfX1BVUkVfXyovXG4gIF9yZWdlbmVyYXRvcltcImRlZmF1bHRcIl0ubWFyayhmdW5jdGlvbiBfY2FsbGVlMTMocGFyYW1zKSB7XG4gICAgcmV0dXJuIF9yZWdlbmVyYXRvcltcImRlZmF1bHRcIl0ud3JhcChmdW5jdGlvbiBfY2FsbGVlMTMkKF9jb250ZXh0MTMpIHtcbiAgICAgIHdoaWxlICgxKSB7XG4gICAgICAgIHN3aXRjaCAoX2NvbnRleHQxMy5wcmV2ID0gX2NvbnRleHQxMy5uZXh0KSB7XG4gICAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgX2NvbnRleHQxMy5uZXh0ID0gMjtcbiAgICAgICAgICAgIHJldHVybiBjYWxsKF9vYmplY3RTcHJlYWQoe1xuICAgICAgICAgICAgICBtZXRob2Q6ICdyZXNldERldmljZSdcbiAgICAgICAgICAgIH0sIHBhcmFtcykpO1xuXG4gICAgICAgICAgY2FzZSAyOlxuICAgICAgICAgICAgcmV0dXJuIF9jb250ZXh0MTMuYWJydXB0KFwicmV0dXJuXCIsIF9jb250ZXh0MTMuc2VudCk7XG5cbiAgICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgY2FzZSBcImVuZFwiOlxuICAgICAgICAgICAgcmV0dXJuIF9jb250ZXh0MTMuc3RvcCgpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSwgX2NhbGxlZTEzKTtcbiAgfSkpO1xuXG4gIHJldHVybiBmdW5jdGlvbiAoX3gxMikge1xuICAgIHJldHVybiBfcmVmMTMuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgfTtcbn0oKSk7XG4oMCwgX2RlZmluZVByb3BlcnR5MltcImRlZmF1bHRcIl0pKFRyZXpvckNvbm5lY3QsIFwiY2FyZGFub0dldEFkZHJlc3NcIixcbi8qI19fUFVSRV9fKi9cbmZ1bmN0aW9uICgpIHtcbiAgdmFyIF9yZWYxNCA9ICgwLCBfYXN5bmNUb0dlbmVyYXRvcjJbXCJkZWZhdWx0XCJdKShcbiAgLyojX19QVVJFX18qL1xuICBfcmVnZW5lcmF0b3JbXCJkZWZhdWx0XCJdLm1hcmsoZnVuY3Rpb24gX2NhbGxlZTE0KHBhcmFtcykge1xuICAgIHZhciB1c2VFdmVudExpc3RlbmVyO1xuICAgIHJldHVybiBfcmVnZW5lcmF0b3JbXCJkZWZhdWx0XCJdLndyYXAoZnVuY3Rpb24gX2NhbGxlZTE0JChfY29udGV4dDE0KSB7XG4gICAgICB3aGlsZSAoMSkge1xuICAgICAgICBzd2l0Y2ggKF9jb250ZXh0MTQucHJldiA9IF9jb250ZXh0MTQubmV4dCkge1xuICAgICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgIHVzZUV2ZW50TGlzdGVuZXIgPSBldmVudEVtaXR0ZXIubGlzdGVuZXJDb3VudChVSS5BRERSRVNTX1ZBTElEQVRJT04pID4gMDtcbiAgICAgICAgICAgIF9jb250ZXh0MTQubmV4dCA9IDM7XG4gICAgICAgICAgICByZXR1cm4gY2FsbChfb2JqZWN0U3ByZWFkKHtcbiAgICAgICAgICAgICAgbWV0aG9kOiAnY2FyZGFub0dldEFkZHJlc3MnXG4gICAgICAgICAgICB9LCBwYXJhbXMsIHtcbiAgICAgICAgICAgICAgdXNlRXZlbnRMaXN0ZW5lcjogdXNlRXZlbnRMaXN0ZW5lclxuICAgICAgICAgICAgfSkpO1xuXG4gICAgICAgICAgY2FzZSAzOlxuICAgICAgICAgICAgcmV0dXJuIF9jb250ZXh0MTQuYWJydXB0KFwicmV0dXJuXCIsIF9jb250ZXh0MTQuc2VudCk7XG5cbiAgICAgICAgICBjYXNlIDQ6XG4gICAgICAgICAgY2FzZSBcImVuZFwiOlxuICAgICAgICAgICAgcmV0dXJuIF9jb250ZXh0MTQuc3RvcCgpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSwgX2NhbGxlZTE0KTtcbiAgfSkpO1xuXG4gIHJldHVybiBmdW5jdGlvbiAoX3gxMykge1xuICAgIHJldHVybiBfcmVmMTQuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgfTtcbn0oKSk7XG4oMCwgX2RlZmluZVByb3BlcnR5MltcImRlZmF1bHRcIl0pKFRyZXpvckNvbm5lY3QsIFwiY2FyZGFub0dldFB1YmxpY0tleVwiLFxuLyojX19QVVJFX18qL1xuZnVuY3Rpb24gKCkge1xuICB2YXIgX3JlZjE1ID0gKDAsIF9hc3luY1RvR2VuZXJhdG9yMltcImRlZmF1bHRcIl0pKFxuICAvKiNfX1BVUkVfXyovXG4gIF9yZWdlbmVyYXRvcltcImRlZmF1bHRcIl0ubWFyayhmdW5jdGlvbiBfY2FsbGVlMTUocGFyYW1zKSB7XG4gICAgcmV0dXJuIF9yZWdlbmVyYXRvcltcImRlZmF1bHRcIl0ud3JhcChmdW5jdGlvbiBfY2FsbGVlMTUkKF9jb250ZXh0MTUpIHtcbiAgICAgIHdoaWxlICgxKSB7XG4gICAgICAgIHN3aXRjaCAoX2NvbnRleHQxNS5wcmV2ID0gX2NvbnRleHQxNS5uZXh0KSB7XG4gICAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgX2NvbnRleHQxNS5uZXh0ID0gMjtcbiAgICAgICAgICAgIHJldHVybiBjYWxsKF9vYmplY3RTcHJlYWQoe1xuICAgICAgICAgICAgICBtZXRob2Q6ICdjYXJkYW5vR2V0UHVibGljS2V5J1xuICAgICAgICAgICAgfSwgcGFyYW1zKSk7XG5cbiAgICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgICByZXR1cm4gX2NvbnRleHQxNS5hYnJ1cHQoXCJyZXR1cm5cIiwgX2NvbnRleHQxNS5zZW50KTtcblxuICAgICAgICAgIGNhc2UgMzpcbiAgICAgICAgICBjYXNlIFwiZW5kXCI6XG4gICAgICAgICAgICByZXR1cm4gX2NvbnRleHQxNS5zdG9wKCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LCBfY2FsbGVlMTUpO1xuICB9KSk7XG5cbiAgcmV0dXJuIGZ1bmN0aW9uIChfeDE0KSB7XG4gICAgcmV0dXJuIF9yZWYxNS5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICB9O1xufSgpKTtcbigwLCBfZGVmaW5lUHJvcGVydHkyW1wiZGVmYXVsdFwiXSkoVHJlem9yQ29ubmVjdCwgXCJjYXJkYW5vU2lnblRyYW5zYWN0aW9uXCIsXG4vKiNfX1BVUkVfXyovXG5mdW5jdGlvbiAoKSB7XG4gIHZhciBfcmVmMTYgPSAoMCwgX2FzeW5jVG9HZW5lcmF0b3IyW1wiZGVmYXVsdFwiXSkoXG4gIC8qI19fUFVSRV9fKi9cbiAgX3JlZ2VuZXJhdG9yW1wiZGVmYXVsdFwiXS5tYXJrKGZ1bmN0aW9uIF9jYWxsZWUxNihwYXJhbXMpIHtcbiAgICByZXR1cm4gX3JlZ2VuZXJhdG9yW1wiZGVmYXVsdFwiXS53cmFwKGZ1bmN0aW9uIF9jYWxsZWUxNiQoX2NvbnRleHQxNikge1xuICAgICAgd2hpbGUgKDEpIHtcbiAgICAgICAgc3dpdGNoIChfY29udGV4dDE2LnByZXYgPSBfY29udGV4dDE2Lm5leHQpIHtcbiAgICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICBfY29udGV4dDE2Lm5leHQgPSAyO1xuICAgICAgICAgICAgcmV0dXJuIGNhbGwoX29iamVjdFNwcmVhZCh7XG4gICAgICAgICAgICAgIG1ldGhvZDogJ2NhcmRhbm9TaWduVHJhbnNhY3Rpb24nXG4gICAgICAgICAgICB9LCBwYXJhbXMpKTtcblxuICAgICAgICAgIGNhc2UgMjpcbiAgICAgICAgICAgIHJldHVybiBfY29udGV4dDE2LmFicnVwdChcInJldHVyblwiLCBfY29udGV4dDE2LnNlbnQpO1xuXG4gICAgICAgICAgY2FzZSAzOlxuICAgICAgICAgIGNhc2UgXCJlbmRcIjpcbiAgICAgICAgICAgIHJldHVybiBfY29udGV4dDE2LnN0b3AoKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sIF9jYWxsZWUxNik7XG4gIH0pKTtcblxuICByZXR1cm4gZnVuY3Rpb24gKF94MTUpIHtcbiAgICByZXR1cm4gX3JlZjE2LmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gIH07XG59KCkpO1xuKDAsIF9kZWZpbmVQcm9wZXJ0eTJbXCJkZWZhdWx0XCJdKShUcmV6b3JDb25uZWN0LCBcImNpcGhlcktleVZhbHVlXCIsXG4vKiNfX1BVUkVfXyovXG5mdW5jdGlvbiAoKSB7XG4gIHZhciBfcmVmMTcgPSAoMCwgX2FzeW5jVG9HZW5lcmF0b3IyW1wiZGVmYXVsdFwiXSkoXG4gIC8qI19fUFVSRV9fKi9cbiAgX3JlZ2VuZXJhdG9yW1wiZGVmYXVsdFwiXS5tYXJrKGZ1bmN0aW9uIF9jYWxsZWUxNyhwYXJhbXMpIHtcbiAgICByZXR1cm4gX3JlZ2VuZXJhdG9yW1wiZGVmYXVsdFwiXS53cmFwKGZ1bmN0aW9uIF9jYWxsZWUxNyQoX2NvbnRleHQxNykge1xuICAgICAgd2hpbGUgKDEpIHtcbiAgICAgICAgc3dpdGNoIChfY29udGV4dDE3LnByZXYgPSBfY29udGV4dDE3Lm5leHQpIHtcbiAgICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICBfY29udGV4dDE3Lm5leHQgPSAyO1xuICAgICAgICAgICAgcmV0dXJuIGNhbGwoX29iamVjdFNwcmVhZCh7XG4gICAgICAgICAgICAgIG1ldGhvZDogJ2NpcGhlcktleVZhbHVlJ1xuICAgICAgICAgICAgfSwgcGFyYW1zKSk7XG5cbiAgICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgICByZXR1cm4gX2NvbnRleHQxNy5hYnJ1cHQoXCJyZXR1cm5cIiwgX2NvbnRleHQxNy5zZW50KTtcblxuICAgICAgICAgIGNhc2UgMzpcbiAgICAgICAgICBjYXNlIFwiZW5kXCI6XG4gICAgICAgICAgICByZXR1cm4gX2NvbnRleHQxNy5zdG9wKCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LCBfY2FsbGVlMTcpO1xuICB9KSk7XG5cbiAgcmV0dXJuIGZ1bmN0aW9uIChfeDE2KSB7XG4gICAgcmV0dXJuIF9yZWYxNy5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICB9O1xufSgpKTtcbigwLCBfZGVmaW5lUHJvcGVydHkyW1wiZGVmYXVsdFwiXSkoVHJlem9yQ29ubmVjdCwgXCJjb21wb3NlVHJhbnNhY3Rpb25cIixcbi8qI19fUFVSRV9fKi9cbmZ1bmN0aW9uICgpIHtcbiAgdmFyIF9yZWYxOCA9ICgwLCBfYXN5bmNUb0dlbmVyYXRvcjJbXCJkZWZhdWx0XCJdKShcbiAgLyojX19QVVJFX18qL1xuICBfcmVnZW5lcmF0b3JbXCJkZWZhdWx0XCJdLm1hcmsoZnVuY3Rpb24gX2NhbGxlZTE4KHBhcmFtcykge1xuICAgIHJldHVybiBfcmVnZW5lcmF0b3JbXCJkZWZhdWx0XCJdLndyYXAoZnVuY3Rpb24gX2NhbGxlZTE4JChfY29udGV4dDE4KSB7XG4gICAgICB3aGlsZSAoMSkge1xuICAgICAgICBzd2l0Y2ggKF9jb250ZXh0MTgucHJldiA9IF9jb250ZXh0MTgubmV4dCkge1xuICAgICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgIF9jb250ZXh0MTgubmV4dCA9IDI7XG4gICAgICAgICAgICByZXR1cm4gY2FsbChfb2JqZWN0U3ByZWFkKHtcbiAgICAgICAgICAgICAgbWV0aG9kOiAnY29tcG9zZVRyYW5zYWN0aW9uJ1xuICAgICAgICAgICAgfSwgcGFyYW1zKSk7XG5cbiAgICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgICByZXR1cm4gX2NvbnRleHQxOC5hYnJ1cHQoXCJyZXR1cm5cIiwgX2NvbnRleHQxOC5zZW50KTtcblxuICAgICAgICAgIGNhc2UgMzpcbiAgICAgICAgICBjYXNlIFwiZW5kXCI6XG4gICAgICAgICAgICByZXR1cm4gX2NvbnRleHQxOC5zdG9wKCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LCBfY2FsbGVlMTgpO1xuICB9KSk7XG5cbiAgcmV0dXJuIGZ1bmN0aW9uIChfeDE3KSB7XG4gICAgcmV0dXJuIF9yZWYxOC5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICB9O1xufSgpKTtcbigwLCBfZGVmaW5lUHJvcGVydHkyW1wiZGVmYXVsdFwiXSkoVHJlem9yQ29ubmVjdCwgXCJkZWJ1Z0xpbmtEZWNpc2lvblwiLFxuLyojX19QVVJFX18qL1xuZnVuY3Rpb24gKCkge1xuICB2YXIgX3JlZjE5ID0gKDAsIF9hc3luY1RvR2VuZXJhdG9yMltcImRlZmF1bHRcIl0pKFxuICAvKiNfX1BVUkVfXyovXG4gIF9yZWdlbmVyYXRvcltcImRlZmF1bHRcIl0ubWFyayhmdW5jdGlvbiBfY2FsbGVlMTkocGFyYW1zKSB7XG4gICAgcmV0dXJuIF9yZWdlbmVyYXRvcltcImRlZmF1bHRcIl0ud3JhcChmdW5jdGlvbiBfY2FsbGVlMTkkKF9jb250ZXh0MTkpIHtcbiAgICAgIHdoaWxlICgxKSB7XG4gICAgICAgIHN3aXRjaCAoX2NvbnRleHQxOS5wcmV2ID0gX2NvbnRleHQxOS5uZXh0KSB7XG4gICAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgX2NvbnRleHQxOS5uZXh0ID0gMjtcbiAgICAgICAgICAgIHJldHVybiBjYWxsKF9vYmplY3RTcHJlYWQoe1xuICAgICAgICAgICAgICBtZXRob2Q6ICdkZWJ1Z0xpbmtEZWNpc2lvbidcbiAgICAgICAgICAgIH0sIHBhcmFtcykpO1xuXG4gICAgICAgICAgY2FzZSAyOlxuICAgICAgICAgICAgcmV0dXJuIF9jb250ZXh0MTkuYWJydXB0KFwicmV0dXJuXCIsIF9jb250ZXh0MTkuc2VudCk7XG5cbiAgICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgY2FzZSBcImVuZFwiOlxuICAgICAgICAgICAgcmV0dXJuIF9jb250ZXh0MTkuc3RvcCgpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSwgX2NhbGxlZTE5KTtcbiAgfSkpO1xuXG4gIHJldHVybiBmdW5jdGlvbiAoX3gxOCkge1xuICAgIHJldHVybiBfcmVmMTkuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgfTtcbn0oKSk7XG4oMCwgX2RlZmluZVByb3BlcnR5MltcImRlZmF1bHRcIl0pKFRyZXpvckNvbm5lY3QsIFwiZGVidWdMaW5rR2V0U3RhdGVcIixcbi8qI19fUFVSRV9fKi9cbmZ1bmN0aW9uICgpIHtcbiAgdmFyIF9yZWYyMCA9ICgwLCBfYXN5bmNUb0dlbmVyYXRvcjJbXCJkZWZhdWx0XCJdKShcbiAgLyojX19QVVJFX18qL1xuICBfcmVnZW5lcmF0b3JbXCJkZWZhdWx0XCJdLm1hcmsoZnVuY3Rpb24gX2NhbGxlZTIwKHBhcmFtcykge1xuICAgIHJldHVybiBfcmVnZW5lcmF0b3JbXCJkZWZhdWx0XCJdLndyYXAoZnVuY3Rpb24gX2NhbGxlZTIwJChfY29udGV4dDIwKSB7XG4gICAgICB3aGlsZSAoMSkge1xuICAgICAgICBzd2l0Y2ggKF9jb250ZXh0MjAucHJldiA9IF9jb250ZXh0MjAubmV4dCkge1xuICAgICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgIF9jb250ZXh0MjAubmV4dCA9IDI7XG4gICAgICAgICAgICByZXR1cm4gY2FsbChfb2JqZWN0U3ByZWFkKHtcbiAgICAgICAgICAgICAgbWV0aG9kOiAnZGVidWdMaW5rR2V0U3RhdGUnXG4gICAgICAgICAgICB9LCBwYXJhbXMpKTtcblxuICAgICAgICAgIGNhc2UgMjpcbiAgICAgICAgICAgIHJldHVybiBfY29udGV4dDIwLmFicnVwdChcInJldHVyblwiLCBfY29udGV4dDIwLnNlbnQpO1xuXG4gICAgICAgICAgY2FzZSAzOlxuICAgICAgICAgIGNhc2UgXCJlbmRcIjpcbiAgICAgICAgICAgIHJldHVybiBfY29udGV4dDIwLnN0b3AoKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sIF9jYWxsZWUyMCk7XG4gIH0pKTtcblxuICByZXR1cm4gZnVuY3Rpb24gKF94MTkpIHtcbiAgICByZXR1cm4gX3JlZjIwLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gIH07XG59KCkpO1xuKDAsIF9kZWZpbmVQcm9wZXJ0eTJbXCJkZWZhdWx0XCJdKShUcmV6b3JDb25uZWN0LCBcImV0aGVyZXVtR2V0QWNjb3VudEluZm9cIixcbi8qI19fUFVSRV9fKi9cbmZ1bmN0aW9uICgpIHtcbiAgdmFyIF9yZWYyMSA9ICgwLCBfYXN5bmNUb0dlbmVyYXRvcjJbXCJkZWZhdWx0XCJdKShcbiAgLyojX19QVVJFX18qL1xuICBfcmVnZW5lcmF0b3JbXCJkZWZhdWx0XCJdLm1hcmsoZnVuY3Rpb24gX2NhbGxlZTIxKHBhcmFtcykge1xuICAgIHJldHVybiBfcmVnZW5lcmF0b3JbXCJkZWZhdWx0XCJdLndyYXAoZnVuY3Rpb24gX2NhbGxlZTIxJChfY29udGV4dDIxKSB7XG4gICAgICB3aGlsZSAoMSkge1xuICAgICAgICBzd2l0Y2ggKF9jb250ZXh0MjEucHJldiA9IF9jb250ZXh0MjEubmV4dCkge1xuICAgICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgIF9jb250ZXh0MjEubmV4dCA9IDI7XG4gICAgICAgICAgICByZXR1cm4gY2FsbChfb2JqZWN0U3ByZWFkKHtcbiAgICAgICAgICAgICAgbWV0aG9kOiAnZXRoZXJldW1HZXRBY2NvdW50SW5mbydcbiAgICAgICAgICAgIH0sIHBhcmFtcykpO1xuXG4gICAgICAgICAgY2FzZSAyOlxuICAgICAgICAgICAgcmV0dXJuIF9jb250ZXh0MjEuYWJydXB0KFwicmV0dXJuXCIsIF9jb250ZXh0MjEuc2VudCk7XG5cbiAgICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgY2FzZSBcImVuZFwiOlxuICAgICAgICAgICAgcmV0dXJuIF9jb250ZXh0MjEuc3RvcCgpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSwgX2NhbGxlZTIxKTtcbiAgfSkpO1xuXG4gIHJldHVybiBmdW5jdGlvbiAoX3gyMCkge1xuICAgIHJldHVybiBfcmVmMjEuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgfTtcbn0oKSk7XG4oMCwgX2RlZmluZVByb3BlcnR5MltcImRlZmF1bHRcIl0pKFRyZXpvckNvbm5lY3QsIFwiZXRoZXJldW1HZXRBZGRyZXNzXCIsXG4vKiNfX1BVUkVfXyovXG5mdW5jdGlvbiAoKSB7XG4gIHZhciBfcmVmMjIgPSAoMCwgX2FzeW5jVG9HZW5lcmF0b3IyW1wiZGVmYXVsdFwiXSkoXG4gIC8qI19fUFVSRV9fKi9cbiAgX3JlZ2VuZXJhdG9yW1wiZGVmYXVsdFwiXS5tYXJrKGZ1bmN0aW9uIF9jYWxsZWUyMihwYXJhbXMpIHtcbiAgICB2YXIgdXNlRXZlbnRMaXN0ZW5lcjtcbiAgICByZXR1cm4gX3JlZ2VuZXJhdG9yW1wiZGVmYXVsdFwiXS53cmFwKGZ1bmN0aW9uIF9jYWxsZWUyMiQoX2NvbnRleHQyMikge1xuICAgICAgd2hpbGUgKDEpIHtcbiAgICAgICAgc3dpdGNoIChfY29udGV4dDIyLnByZXYgPSBfY29udGV4dDIyLm5leHQpIHtcbiAgICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICB1c2VFdmVudExpc3RlbmVyID0gZXZlbnRFbWl0dGVyLmxpc3RlbmVyQ291bnQoVUkuQUREUkVTU19WQUxJREFUSU9OKSA+IDA7XG4gICAgICAgICAgICBfY29udGV4dDIyLm5leHQgPSAzO1xuICAgICAgICAgICAgcmV0dXJuIGNhbGwoX29iamVjdFNwcmVhZCh7XG4gICAgICAgICAgICAgIG1ldGhvZDogJ2V0aGVyZXVtR2V0QWRkcmVzcydcbiAgICAgICAgICAgIH0sIHBhcmFtcywge1xuICAgICAgICAgICAgICB1c2VFdmVudExpc3RlbmVyOiB1c2VFdmVudExpc3RlbmVyXG4gICAgICAgICAgICB9KSk7XG5cbiAgICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgICByZXR1cm4gX2NvbnRleHQyMi5hYnJ1cHQoXCJyZXR1cm5cIiwgX2NvbnRleHQyMi5zZW50KTtcblxuICAgICAgICAgIGNhc2UgNDpcbiAgICAgICAgICBjYXNlIFwiZW5kXCI6XG4gICAgICAgICAgICByZXR1cm4gX2NvbnRleHQyMi5zdG9wKCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LCBfY2FsbGVlMjIpO1xuICB9KSk7XG5cbiAgcmV0dXJuIGZ1bmN0aW9uIChfeDIxKSB7XG4gICAgcmV0dXJuIF9yZWYyMi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICB9O1xufSgpKTtcbigwLCBfZGVmaW5lUHJvcGVydHkyW1wiZGVmYXVsdFwiXSkoVHJlem9yQ29ubmVjdCwgXCJldGhlcmV1bUdldFB1YmxpY0tleVwiLFxuLyojX19QVVJFX18qL1xuZnVuY3Rpb24gKCkge1xuICB2YXIgX3JlZjIzID0gKDAsIF9hc3luY1RvR2VuZXJhdG9yMltcImRlZmF1bHRcIl0pKFxuICAvKiNfX1BVUkVfXyovXG4gIF9yZWdlbmVyYXRvcltcImRlZmF1bHRcIl0ubWFyayhmdW5jdGlvbiBfY2FsbGVlMjMocGFyYW1zKSB7XG4gICAgcmV0dXJuIF9yZWdlbmVyYXRvcltcImRlZmF1bHRcIl0ud3JhcChmdW5jdGlvbiBfY2FsbGVlMjMkKF9jb250ZXh0MjMpIHtcbiAgICAgIHdoaWxlICgxKSB7XG4gICAgICAgIHN3aXRjaCAoX2NvbnRleHQyMy5wcmV2ID0gX2NvbnRleHQyMy5uZXh0KSB7XG4gICAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgX2NvbnRleHQyMy5uZXh0ID0gMjtcbiAgICAgICAgICAgIHJldHVybiBjYWxsKF9vYmplY3RTcHJlYWQoe1xuICAgICAgICAgICAgICBtZXRob2Q6ICdldGhlcmV1bUdldFB1YmxpY0tleSdcbiAgICAgICAgICAgIH0sIHBhcmFtcykpO1xuXG4gICAgICAgICAgY2FzZSAyOlxuICAgICAgICAgICAgcmV0dXJuIF9jb250ZXh0MjMuYWJydXB0KFwicmV0dXJuXCIsIF9jb250ZXh0MjMuc2VudCk7XG5cbiAgICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgY2FzZSBcImVuZFwiOlxuICAgICAgICAgICAgcmV0dXJuIF9jb250ZXh0MjMuc3RvcCgpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSwgX2NhbGxlZTIzKTtcbiAgfSkpO1xuXG4gIHJldHVybiBmdW5jdGlvbiAoX3gyMikge1xuICAgIHJldHVybiBfcmVmMjMuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgfTtcbn0oKSk7XG4oMCwgX2RlZmluZVByb3BlcnR5MltcImRlZmF1bHRcIl0pKFRyZXpvckNvbm5lY3QsIFwiZXRoZXJldW1TaWduTWVzc2FnZVwiLFxuLyojX19QVVJFX18qL1xuZnVuY3Rpb24gKCkge1xuICB2YXIgX3JlZjI0ID0gKDAsIF9hc3luY1RvR2VuZXJhdG9yMltcImRlZmF1bHRcIl0pKFxuICAvKiNfX1BVUkVfXyovXG4gIF9yZWdlbmVyYXRvcltcImRlZmF1bHRcIl0ubWFyayhmdW5jdGlvbiBfY2FsbGVlMjQocGFyYW1zKSB7XG4gICAgcmV0dXJuIF9yZWdlbmVyYXRvcltcImRlZmF1bHRcIl0ud3JhcChmdW5jdGlvbiBfY2FsbGVlMjQkKF9jb250ZXh0MjQpIHtcbiAgICAgIHdoaWxlICgxKSB7XG4gICAgICAgIHN3aXRjaCAoX2NvbnRleHQyNC5wcmV2ID0gX2NvbnRleHQyNC5uZXh0KSB7XG4gICAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgX2NvbnRleHQyNC5uZXh0ID0gMjtcbiAgICAgICAgICAgIHJldHVybiBjYWxsKF9vYmplY3RTcHJlYWQoe1xuICAgICAgICAgICAgICBtZXRob2Q6ICdldGhlcmV1bVNpZ25NZXNzYWdlJ1xuICAgICAgICAgICAgfSwgcGFyYW1zKSk7XG5cbiAgICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgICByZXR1cm4gX2NvbnRleHQyNC5hYnJ1cHQoXCJyZXR1cm5cIiwgX2NvbnRleHQyNC5zZW50KTtcblxuICAgICAgICAgIGNhc2UgMzpcbiAgICAgICAgICBjYXNlIFwiZW5kXCI6XG4gICAgICAgICAgICByZXR1cm4gX2NvbnRleHQyNC5zdG9wKCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LCBfY2FsbGVlMjQpO1xuICB9KSk7XG5cbiAgcmV0dXJuIGZ1bmN0aW9uIChfeDIzKSB7XG4gICAgcmV0dXJuIF9yZWYyNC5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICB9O1xufSgpKTtcbigwLCBfZGVmaW5lUHJvcGVydHkyW1wiZGVmYXVsdFwiXSkoVHJlem9yQ29ubmVjdCwgXCJldGhlcmV1bVNpZ25UcmFuc2FjdGlvblwiLFxuLyojX19QVVJFX18qL1xuZnVuY3Rpb24gKCkge1xuICB2YXIgX3JlZjI1ID0gKDAsIF9hc3luY1RvR2VuZXJhdG9yMltcImRlZmF1bHRcIl0pKFxuICAvKiNfX1BVUkVfXyovXG4gIF9yZWdlbmVyYXRvcltcImRlZmF1bHRcIl0ubWFyayhmdW5jdGlvbiBfY2FsbGVlMjUocGFyYW1zKSB7XG4gICAgcmV0dXJuIF9yZWdlbmVyYXRvcltcImRlZmF1bHRcIl0ud3JhcChmdW5jdGlvbiBfY2FsbGVlMjUkKF9jb250ZXh0MjUpIHtcbiAgICAgIHdoaWxlICgxKSB7XG4gICAgICAgIHN3aXRjaCAoX2NvbnRleHQyNS5wcmV2ID0gX2NvbnRleHQyNS5uZXh0KSB7XG4gICAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgX2NvbnRleHQyNS5uZXh0ID0gMjtcbiAgICAgICAgICAgIHJldHVybiBjYWxsKF9vYmplY3RTcHJlYWQoe1xuICAgICAgICAgICAgICBtZXRob2Q6ICdldGhlcmV1bVNpZ25UcmFuc2FjdGlvbidcbiAgICAgICAgICAgIH0sIHBhcmFtcykpO1xuXG4gICAgICAgICAgY2FzZSAyOlxuICAgICAgICAgICAgcmV0dXJuIF9jb250ZXh0MjUuYWJydXB0KFwicmV0dXJuXCIsIF9jb250ZXh0MjUuc2VudCk7XG5cbiAgICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgY2FzZSBcImVuZFwiOlxuICAgICAgICAgICAgcmV0dXJuIF9jb250ZXh0MjUuc3RvcCgpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSwgX2NhbGxlZTI1KTtcbiAgfSkpO1xuXG4gIHJldHVybiBmdW5jdGlvbiAoX3gyNCkge1xuICAgIHJldHVybiBfcmVmMjUuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgfTtcbn0oKSk7XG4oMCwgX2RlZmluZVByb3BlcnR5MltcImRlZmF1bHRcIl0pKFRyZXpvckNvbm5lY3QsIFwiZXRoZXJldW1WZXJpZnlNZXNzYWdlXCIsXG4vKiNfX1BVUkVfXyovXG5mdW5jdGlvbiAoKSB7XG4gIHZhciBfcmVmMjYgPSAoMCwgX2FzeW5jVG9HZW5lcmF0b3IyW1wiZGVmYXVsdFwiXSkoXG4gIC8qI19fUFVSRV9fKi9cbiAgX3JlZ2VuZXJhdG9yW1wiZGVmYXVsdFwiXS5tYXJrKGZ1bmN0aW9uIF9jYWxsZWUyNihwYXJhbXMpIHtcbiAgICByZXR1cm4gX3JlZ2VuZXJhdG9yW1wiZGVmYXVsdFwiXS53cmFwKGZ1bmN0aW9uIF9jYWxsZWUyNiQoX2NvbnRleHQyNikge1xuICAgICAgd2hpbGUgKDEpIHtcbiAgICAgICAgc3dpdGNoIChfY29udGV4dDI2LnByZXYgPSBfY29udGV4dDI2Lm5leHQpIHtcbiAgICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICBfY29udGV4dDI2Lm5leHQgPSAyO1xuICAgICAgICAgICAgcmV0dXJuIGNhbGwoX29iamVjdFNwcmVhZCh7XG4gICAgICAgICAgICAgIG1ldGhvZDogJ2V0aGVyZXVtVmVyaWZ5TWVzc2FnZSdcbiAgICAgICAgICAgIH0sIHBhcmFtcykpO1xuXG4gICAgICAgICAgY2FzZSAyOlxuICAgICAgICAgICAgcmV0dXJuIF9jb250ZXh0MjYuYWJydXB0KFwicmV0dXJuXCIsIF9jb250ZXh0MjYuc2VudCk7XG5cbiAgICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgY2FzZSBcImVuZFwiOlxuICAgICAgICAgICAgcmV0dXJuIF9jb250ZXh0MjYuc3RvcCgpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSwgX2NhbGxlZTI2KTtcbiAgfSkpO1xuXG4gIHJldHVybiBmdW5jdGlvbiAoX3gyNSkge1xuICAgIHJldHVybiBfcmVmMjYuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgfTtcbn0oKSk7XG4oMCwgX2RlZmluZVByb3BlcnR5MltcImRlZmF1bHRcIl0pKFRyZXpvckNvbm5lY3QsIFwiZ2V0QWNjb3VudEluZm9cIixcbi8qI19fUFVSRV9fKi9cbmZ1bmN0aW9uICgpIHtcbiAgdmFyIF9yZWYyNyA9ICgwLCBfYXN5bmNUb0dlbmVyYXRvcjJbXCJkZWZhdWx0XCJdKShcbiAgLyojX19QVVJFX18qL1xuICBfcmVnZW5lcmF0b3JbXCJkZWZhdWx0XCJdLm1hcmsoZnVuY3Rpb24gX2NhbGxlZTI3KHBhcmFtcykge1xuICAgIHJldHVybiBfcmVnZW5lcmF0b3JbXCJkZWZhdWx0XCJdLndyYXAoZnVuY3Rpb24gX2NhbGxlZTI3JChfY29udGV4dDI3KSB7XG4gICAgICB3aGlsZSAoMSkge1xuICAgICAgICBzd2l0Y2ggKF9jb250ZXh0MjcucHJldiA9IF9jb250ZXh0MjcubmV4dCkge1xuICAgICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgIF9jb250ZXh0MjcubmV4dCA9IDI7XG4gICAgICAgICAgICByZXR1cm4gY2FsbChfb2JqZWN0U3ByZWFkKHtcbiAgICAgICAgICAgICAgbWV0aG9kOiAnZ2V0QWNjb3VudEluZm8nXG4gICAgICAgICAgICB9LCBwYXJhbXMpKTtcblxuICAgICAgICAgIGNhc2UgMjpcbiAgICAgICAgICAgIHJldHVybiBfY29udGV4dDI3LmFicnVwdChcInJldHVyblwiLCBfY29udGV4dDI3LnNlbnQpO1xuXG4gICAgICAgICAgY2FzZSAzOlxuICAgICAgICAgIGNhc2UgXCJlbmRcIjpcbiAgICAgICAgICAgIHJldHVybiBfY29udGV4dDI3LnN0b3AoKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sIF9jYWxsZWUyNyk7XG4gIH0pKTtcblxuICByZXR1cm4gZnVuY3Rpb24gKF94MjYpIHtcbiAgICByZXR1cm4gX3JlZjI3LmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gIH07XG59KCkpO1xuKDAsIF9kZWZpbmVQcm9wZXJ0eTJbXCJkZWZhdWx0XCJdKShUcmV6b3JDb25uZWN0LCBcImdldEFkZHJlc3NcIixcbi8qI19fUFVSRV9fKi9cbmZ1bmN0aW9uICgpIHtcbiAgdmFyIF9yZWYyOCA9ICgwLCBfYXN5bmNUb0dlbmVyYXRvcjJbXCJkZWZhdWx0XCJdKShcbiAgLyojX19QVVJFX18qL1xuICBfcmVnZW5lcmF0b3JbXCJkZWZhdWx0XCJdLm1hcmsoZnVuY3Rpb24gX2NhbGxlZTI4KHBhcmFtcykge1xuICAgIHZhciB1c2VFdmVudExpc3RlbmVyO1xuICAgIHJldHVybiBfcmVnZW5lcmF0b3JbXCJkZWZhdWx0XCJdLndyYXAoZnVuY3Rpb24gX2NhbGxlZTI4JChfY29udGV4dDI4KSB7XG4gICAgICB3aGlsZSAoMSkge1xuICAgICAgICBzd2l0Y2ggKF9jb250ZXh0MjgucHJldiA9IF9jb250ZXh0MjgubmV4dCkge1xuICAgICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgIHVzZUV2ZW50TGlzdGVuZXIgPSBldmVudEVtaXR0ZXIubGlzdGVuZXJDb3VudChVSS5BRERSRVNTX1ZBTElEQVRJT04pID4gMDtcbiAgICAgICAgICAgIF9jb250ZXh0MjgubmV4dCA9IDM7XG4gICAgICAgICAgICByZXR1cm4gY2FsbChfb2JqZWN0U3ByZWFkKHtcbiAgICAgICAgICAgICAgbWV0aG9kOiAnZ2V0QWRkcmVzcydcbiAgICAgICAgICAgIH0sIHBhcmFtcywge1xuICAgICAgICAgICAgICB1c2VFdmVudExpc3RlbmVyOiB1c2VFdmVudExpc3RlbmVyXG4gICAgICAgICAgICB9KSk7XG5cbiAgICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgICByZXR1cm4gX2NvbnRleHQyOC5hYnJ1cHQoXCJyZXR1cm5cIiwgX2NvbnRleHQyOC5zZW50KTtcblxuICAgICAgICAgIGNhc2UgNDpcbiAgICAgICAgICBjYXNlIFwiZW5kXCI6XG4gICAgICAgICAgICByZXR1cm4gX2NvbnRleHQyOC5zdG9wKCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LCBfY2FsbGVlMjgpO1xuICB9KSk7XG5cbiAgcmV0dXJuIGZ1bmN0aW9uIChfeDI3KSB7XG4gICAgcmV0dXJuIF9yZWYyOC5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICB9O1xufSgpKTtcbigwLCBfZGVmaW5lUHJvcGVydHkyW1wiZGVmYXVsdFwiXSkoVHJlem9yQ29ubmVjdCwgXCJnZXREZXZpY2VTdGF0ZVwiLFxuLyojX19QVVJFX18qL1xuZnVuY3Rpb24gKCkge1xuICB2YXIgX3JlZjI5ID0gKDAsIF9hc3luY1RvR2VuZXJhdG9yMltcImRlZmF1bHRcIl0pKFxuICAvKiNfX1BVUkVfXyovXG4gIF9yZWdlbmVyYXRvcltcImRlZmF1bHRcIl0ubWFyayhmdW5jdGlvbiBfY2FsbGVlMjkocGFyYW1zKSB7XG4gICAgcmV0dXJuIF9yZWdlbmVyYXRvcltcImRlZmF1bHRcIl0ud3JhcChmdW5jdGlvbiBfY2FsbGVlMjkkKF9jb250ZXh0MjkpIHtcbiAgICAgIHdoaWxlICgxKSB7XG4gICAgICAgIHN3aXRjaCAoX2NvbnRleHQyOS5wcmV2ID0gX2NvbnRleHQyOS5uZXh0KSB7XG4gICAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgX2NvbnRleHQyOS5uZXh0ID0gMjtcbiAgICAgICAgICAgIHJldHVybiBjYWxsKF9vYmplY3RTcHJlYWQoe1xuICAgICAgICAgICAgICBtZXRob2Q6ICdnZXREZXZpY2VTdGF0ZSdcbiAgICAgICAgICAgIH0sIHBhcmFtcykpO1xuXG4gICAgICAgICAgY2FzZSAyOlxuICAgICAgICAgICAgcmV0dXJuIF9jb250ZXh0MjkuYWJydXB0KFwicmV0dXJuXCIsIF9jb250ZXh0Mjkuc2VudCk7XG5cbiAgICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgY2FzZSBcImVuZFwiOlxuICAgICAgICAgICAgcmV0dXJuIF9jb250ZXh0Mjkuc3RvcCgpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSwgX2NhbGxlZTI5KTtcbiAgfSkpO1xuXG4gIHJldHVybiBmdW5jdGlvbiAoX3gyOCkge1xuICAgIHJldHVybiBfcmVmMjkuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgfTtcbn0oKSk7XG4oMCwgX2RlZmluZVByb3BlcnR5MltcImRlZmF1bHRcIl0pKFRyZXpvckNvbm5lY3QsIFwiZ2V0RmVhdHVyZXNcIixcbi8qI19fUFVSRV9fKi9cbmZ1bmN0aW9uICgpIHtcbiAgdmFyIF9yZWYzMCA9ICgwLCBfYXN5bmNUb0dlbmVyYXRvcjJbXCJkZWZhdWx0XCJdKShcbiAgLyojX19QVVJFX18qL1xuICBfcmVnZW5lcmF0b3JbXCJkZWZhdWx0XCJdLm1hcmsoZnVuY3Rpb24gX2NhbGxlZTMwKHBhcmFtcykge1xuICAgIHJldHVybiBfcmVnZW5lcmF0b3JbXCJkZWZhdWx0XCJdLndyYXAoZnVuY3Rpb24gX2NhbGxlZTMwJChfY29udGV4dDMwKSB7XG4gICAgICB3aGlsZSAoMSkge1xuICAgICAgICBzd2l0Y2ggKF9jb250ZXh0MzAucHJldiA9IF9jb250ZXh0MzAubmV4dCkge1xuICAgICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgIF9jb250ZXh0MzAubmV4dCA9IDI7XG4gICAgICAgICAgICByZXR1cm4gY2FsbChfb2JqZWN0U3ByZWFkKHtcbiAgICAgICAgICAgICAgbWV0aG9kOiAnZ2V0RmVhdHVyZXMnXG4gICAgICAgICAgICB9LCBwYXJhbXMpKTtcblxuICAgICAgICAgIGNhc2UgMjpcbiAgICAgICAgICAgIHJldHVybiBfY29udGV4dDMwLmFicnVwdChcInJldHVyblwiLCBfY29udGV4dDMwLnNlbnQpO1xuXG4gICAgICAgICAgY2FzZSAzOlxuICAgICAgICAgIGNhc2UgXCJlbmRcIjpcbiAgICAgICAgICAgIHJldHVybiBfY29udGV4dDMwLnN0b3AoKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sIF9jYWxsZWUzMCk7XG4gIH0pKTtcblxuICByZXR1cm4gZnVuY3Rpb24gKF94MjkpIHtcbiAgICByZXR1cm4gX3JlZjMwLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gIH07XG59KCkpO1xuKDAsIF9kZWZpbmVQcm9wZXJ0eTJbXCJkZWZhdWx0XCJdKShUcmV6b3JDb25uZWN0LCBcImdldFB1YmxpY0tleVwiLFxuLyojX19QVVJFX18qL1xuZnVuY3Rpb24gKCkge1xuICB2YXIgX3JlZjMxID0gKDAsIF9hc3luY1RvR2VuZXJhdG9yMltcImRlZmF1bHRcIl0pKFxuICAvKiNfX1BVUkVfXyovXG4gIF9yZWdlbmVyYXRvcltcImRlZmF1bHRcIl0ubWFyayhmdW5jdGlvbiBfY2FsbGVlMzEocGFyYW1zKSB7XG4gICAgcmV0dXJuIF9yZWdlbmVyYXRvcltcImRlZmF1bHRcIl0ud3JhcChmdW5jdGlvbiBfY2FsbGVlMzEkKF9jb250ZXh0MzEpIHtcbiAgICAgIHdoaWxlICgxKSB7XG4gICAgICAgIHN3aXRjaCAoX2NvbnRleHQzMS5wcmV2ID0gX2NvbnRleHQzMS5uZXh0KSB7XG4gICAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgX2NvbnRleHQzMS5uZXh0ID0gMjtcbiAgICAgICAgICAgIHJldHVybiBjYWxsKF9vYmplY3RTcHJlYWQoe1xuICAgICAgICAgICAgICBtZXRob2Q6ICdnZXRQdWJsaWNLZXknXG4gICAgICAgICAgICB9LCBwYXJhbXMpKTtcblxuICAgICAgICAgIGNhc2UgMjpcbiAgICAgICAgICAgIHJldHVybiBfY29udGV4dDMxLmFicnVwdChcInJldHVyblwiLCBfY29udGV4dDMxLnNlbnQpO1xuXG4gICAgICAgICAgY2FzZSAzOlxuICAgICAgICAgIGNhc2UgXCJlbmRcIjpcbiAgICAgICAgICAgIHJldHVybiBfY29udGV4dDMxLnN0b3AoKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sIF9jYWxsZWUzMSk7XG4gIH0pKTtcblxuICByZXR1cm4gZnVuY3Rpb24gKF94MzApIHtcbiAgICByZXR1cm4gX3JlZjMxLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gIH07XG59KCkpO1xuKDAsIF9kZWZpbmVQcm9wZXJ0eTJbXCJkZWZhdWx0XCJdKShUcmV6b3JDb25uZWN0LCBcImxpc2tHZXRBZGRyZXNzXCIsXG4vKiNfX1BVUkVfXyovXG5mdW5jdGlvbiAoKSB7XG4gIHZhciBfcmVmMzIgPSAoMCwgX2FzeW5jVG9HZW5lcmF0b3IyW1wiZGVmYXVsdFwiXSkoXG4gIC8qI19fUFVSRV9fKi9cbiAgX3JlZ2VuZXJhdG9yW1wiZGVmYXVsdFwiXS5tYXJrKGZ1bmN0aW9uIF9jYWxsZWUzMihwYXJhbXMpIHtcbiAgICB2YXIgdXNlRXZlbnRMaXN0ZW5lcjtcbiAgICByZXR1cm4gX3JlZ2VuZXJhdG9yW1wiZGVmYXVsdFwiXS53cmFwKGZ1bmN0aW9uIF9jYWxsZWUzMiQoX2NvbnRleHQzMikge1xuICAgICAgd2hpbGUgKDEpIHtcbiAgICAgICAgc3dpdGNoIChfY29udGV4dDMyLnByZXYgPSBfY29udGV4dDMyLm5leHQpIHtcbiAgICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICB1c2VFdmVudExpc3RlbmVyID0gZXZlbnRFbWl0dGVyLmxpc3RlbmVyQ291bnQoVUkuQUREUkVTU19WQUxJREFUSU9OKSA+IDA7XG4gICAgICAgICAgICBfY29udGV4dDMyLm5leHQgPSAzO1xuICAgICAgICAgICAgcmV0dXJuIGNhbGwoX29iamVjdFNwcmVhZCh7XG4gICAgICAgICAgICAgIG1ldGhvZDogJ2xpc2tHZXRBZGRyZXNzJ1xuICAgICAgICAgICAgfSwgcGFyYW1zLCB7XG4gICAgICAgICAgICAgIHVzZUV2ZW50TGlzdGVuZXI6IHVzZUV2ZW50TGlzdGVuZXJcbiAgICAgICAgICAgIH0pKTtcblxuICAgICAgICAgIGNhc2UgMzpcbiAgICAgICAgICAgIHJldHVybiBfY29udGV4dDMyLmFicnVwdChcInJldHVyblwiLCBfY29udGV4dDMyLnNlbnQpO1xuXG4gICAgICAgICAgY2FzZSA0OlxuICAgICAgICAgIGNhc2UgXCJlbmRcIjpcbiAgICAgICAgICAgIHJldHVybiBfY29udGV4dDMyLnN0b3AoKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sIF9jYWxsZWUzMik7XG4gIH0pKTtcblxuICByZXR1cm4gZnVuY3Rpb24gKF94MzEpIHtcbiAgICByZXR1cm4gX3JlZjMyLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gIH07XG59KCkpO1xuKDAsIF9kZWZpbmVQcm9wZXJ0eTJbXCJkZWZhdWx0XCJdKShUcmV6b3JDb25uZWN0LCBcImxpc2tHZXRQdWJsaWNLZXlcIixcbi8qI19fUFVSRV9fKi9cbmZ1bmN0aW9uICgpIHtcbiAgdmFyIF9yZWYzMyA9ICgwLCBfYXN5bmNUb0dlbmVyYXRvcjJbXCJkZWZhdWx0XCJdKShcbiAgLyojX19QVVJFX18qL1xuICBfcmVnZW5lcmF0b3JbXCJkZWZhdWx0XCJdLm1hcmsoZnVuY3Rpb24gX2NhbGxlZTMzKHBhcmFtcykge1xuICAgIHJldHVybiBfcmVnZW5lcmF0b3JbXCJkZWZhdWx0XCJdLndyYXAoZnVuY3Rpb24gX2NhbGxlZTMzJChfY29udGV4dDMzKSB7XG4gICAgICB3aGlsZSAoMSkge1xuICAgICAgICBzd2l0Y2ggKF9jb250ZXh0MzMucHJldiA9IF9jb250ZXh0MzMubmV4dCkge1xuICAgICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgIF9jb250ZXh0MzMubmV4dCA9IDI7XG4gICAgICAgICAgICByZXR1cm4gY2FsbChfb2JqZWN0U3ByZWFkKHtcbiAgICAgICAgICAgICAgbWV0aG9kOiAnbGlza0dldFB1YmxpY0tleSdcbiAgICAgICAgICAgIH0sIHBhcmFtcykpO1xuXG4gICAgICAgICAgY2FzZSAyOlxuICAgICAgICAgICAgcmV0dXJuIF9jb250ZXh0MzMuYWJydXB0KFwicmV0dXJuXCIsIF9jb250ZXh0MzMuc2VudCk7XG5cbiAgICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgY2FzZSBcImVuZFwiOlxuICAgICAgICAgICAgcmV0dXJuIF9jb250ZXh0MzMuc3RvcCgpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSwgX2NhbGxlZTMzKTtcbiAgfSkpO1xuXG4gIHJldHVybiBmdW5jdGlvbiAoX3gzMikge1xuICAgIHJldHVybiBfcmVmMzMuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgfTtcbn0oKSk7XG4oMCwgX2RlZmluZVByb3BlcnR5MltcImRlZmF1bHRcIl0pKFRyZXpvckNvbm5lY3QsIFwibGlza1NpZ25NZXNzYWdlXCIsXG4vKiNfX1BVUkVfXyovXG5mdW5jdGlvbiAoKSB7XG4gIHZhciBfcmVmMzQgPSAoMCwgX2FzeW5jVG9HZW5lcmF0b3IyW1wiZGVmYXVsdFwiXSkoXG4gIC8qI19fUFVSRV9fKi9cbiAgX3JlZ2VuZXJhdG9yW1wiZGVmYXVsdFwiXS5tYXJrKGZ1bmN0aW9uIF9jYWxsZWUzNChwYXJhbXMpIHtcbiAgICByZXR1cm4gX3JlZ2VuZXJhdG9yW1wiZGVmYXVsdFwiXS53cmFwKGZ1bmN0aW9uIF9jYWxsZWUzNCQoX2NvbnRleHQzNCkge1xuICAgICAgd2hpbGUgKDEpIHtcbiAgICAgICAgc3dpdGNoIChfY29udGV4dDM0LnByZXYgPSBfY29udGV4dDM0Lm5leHQpIHtcbiAgICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICBfY29udGV4dDM0Lm5leHQgPSAyO1xuICAgICAgICAgICAgcmV0dXJuIGNhbGwoX29iamVjdFNwcmVhZCh7XG4gICAgICAgICAgICAgIG1ldGhvZDogJ2xpc2tTaWduTWVzc2FnZSdcbiAgICAgICAgICAgIH0sIHBhcmFtcykpO1xuXG4gICAgICAgICAgY2FzZSAyOlxuICAgICAgICAgICAgcmV0dXJuIF9jb250ZXh0MzQuYWJydXB0KFwicmV0dXJuXCIsIF9jb250ZXh0MzQuc2VudCk7XG5cbiAgICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgY2FzZSBcImVuZFwiOlxuICAgICAgICAgICAgcmV0dXJuIF9jb250ZXh0MzQuc3RvcCgpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSwgX2NhbGxlZTM0KTtcbiAgfSkpO1xuXG4gIHJldHVybiBmdW5jdGlvbiAoX3gzMykge1xuICAgIHJldHVybiBfcmVmMzQuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgfTtcbn0oKSk7XG4oMCwgX2RlZmluZVByb3BlcnR5MltcImRlZmF1bHRcIl0pKFRyZXpvckNvbm5lY3QsIFwibGlza1NpZ25UcmFuc2FjdGlvblwiLFxuLyojX19QVVJFX18qL1xuZnVuY3Rpb24gKCkge1xuICB2YXIgX3JlZjM1ID0gKDAsIF9hc3luY1RvR2VuZXJhdG9yMltcImRlZmF1bHRcIl0pKFxuICAvKiNfX1BVUkVfXyovXG4gIF9yZWdlbmVyYXRvcltcImRlZmF1bHRcIl0ubWFyayhmdW5jdGlvbiBfY2FsbGVlMzUocGFyYW1zKSB7XG4gICAgcmV0dXJuIF9yZWdlbmVyYXRvcltcImRlZmF1bHRcIl0ud3JhcChmdW5jdGlvbiBfY2FsbGVlMzUkKF9jb250ZXh0MzUpIHtcbiAgICAgIHdoaWxlICgxKSB7XG4gICAgICAgIHN3aXRjaCAoX2NvbnRleHQzNS5wcmV2ID0gX2NvbnRleHQzNS5uZXh0KSB7XG4gICAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgX2NvbnRleHQzNS5uZXh0ID0gMjtcbiAgICAgICAgICAgIHJldHVybiBjYWxsKF9vYmplY3RTcHJlYWQoe1xuICAgICAgICAgICAgICBtZXRob2Q6ICdsaXNrU2lnblRyYW5zYWN0aW9uJ1xuICAgICAgICAgICAgfSwgcGFyYW1zKSk7XG5cbiAgICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgICByZXR1cm4gX2NvbnRleHQzNS5hYnJ1cHQoXCJyZXR1cm5cIiwgX2NvbnRleHQzNS5zZW50KTtcblxuICAgICAgICAgIGNhc2UgMzpcbiAgICAgICAgICBjYXNlIFwiZW5kXCI6XG4gICAgICAgICAgICByZXR1cm4gX2NvbnRleHQzNS5zdG9wKCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LCBfY2FsbGVlMzUpO1xuICB9KSk7XG5cbiAgcmV0dXJuIGZ1bmN0aW9uIChfeDM0KSB7XG4gICAgcmV0dXJuIF9yZWYzNS5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICB9O1xufSgpKTtcbigwLCBfZGVmaW5lUHJvcGVydHkyW1wiZGVmYXVsdFwiXSkoVHJlem9yQ29ubmVjdCwgXCJsaXNrVmVyaWZ5TWVzc2FnZVwiLFxuLyojX19QVVJFX18qL1xuZnVuY3Rpb24gKCkge1xuICB2YXIgX3JlZjM2ID0gKDAsIF9hc3luY1RvR2VuZXJhdG9yMltcImRlZmF1bHRcIl0pKFxuICAvKiNfX1BVUkVfXyovXG4gIF9yZWdlbmVyYXRvcltcImRlZmF1bHRcIl0ubWFyayhmdW5jdGlvbiBfY2FsbGVlMzYocGFyYW1zKSB7XG4gICAgcmV0dXJuIF9yZWdlbmVyYXRvcltcImRlZmF1bHRcIl0ud3JhcChmdW5jdGlvbiBfY2FsbGVlMzYkKF9jb250ZXh0MzYpIHtcbiAgICAgIHdoaWxlICgxKSB7XG4gICAgICAgIHN3aXRjaCAoX2NvbnRleHQzNi5wcmV2ID0gX2NvbnRleHQzNi5uZXh0KSB7XG4gICAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgX2NvbnRleHQzNi5uZXh0ID0gMjtcbiAgICAgICAgICAgIHJldHVybiBjYWxsKF9vYmplY3RTcHJlYWQoe1xuICAgICAgICAgICAgICBtZXRob2Q6ICdsaXNrVmVyaWZ5TWVzc2FnZSdcbiAgICAgICAgICAgIH0sIHBhcmFtcykpO1xuXG4gICAgICAgICAgY2FzZSAyOlxuICAgICAgICAgICAgcmV0dXJuIF9jb250ZXh0MzYuYWJydXB0KFwicmV0dXJuXCIsIF9jb250ZXh0MzYuc2VudCk7XG5cbiAgICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgY2FzZSBcImVuZFwiOlxuICAgICAgICAgICAgcmV0dXJuIF9jb250ZXh0MzYuc3RvcCgpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSwgX2NhbGxlZTM2KTtcbiAgfSkpO1xuXG4gIHJldHVybiBmdW5jdGlvbiAoX3gzNSkge1xuICAgIHJldHVybiBfcmVmMzYuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgfTtcbn0oKSk7XG4oMCwgX2RlZmluZVByb3BlcnR5MltcImRlZmF1bHRcIl0pKFRyZXpvckNvbm5lY3QsIFwibmVtR2V0QWRkcmVzc1wiLFxuLyojX19QVVJFX18qL1xuZnVuY3Rpb24gKCkge1xuICB2YXIgX3JlZjM3ID0gKDAsIF9hc3luY1RvR2VuZXJhdG9yMltcImRlZmF1bHRcIl0pKFxuICAvKiNfX1BVUkVfXyovXG4gIF9yZWdlbmVyYXRvcltcImRlZmF1bHRcIl0ubWFyayhmdW5jdGlvbiBfY2FsbGVlMzcocGFyYW1zKSB7XG4gICAgdmFyIHVzZUV2ZW50TGlzdGVuZXI7XG4gICAgcmV0dXJuIF9yZWdlbmVyYXRvcltcImRlZmF1bHRcIl0ud3JhcChmdW5jdGlvbiBfY2FsbGVlMzckKF9jb250ZXh0MzcpIHtcbiAgICAgIHdoaWxlICgxKSB7XG4gICAgICAgIHN3aXRjaCAoX2NvbnRleHQzNy5wcmV2ID0gX2NvbnRleHQzNy5uZXh0KSB7XG4gICAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgdXNlRXZlbnRMaXN0ZW5lciA9IGV2ZW50RW1pdHRlci5saXN0ZW5lckNvdW50KFVJLkFERFJFU1NfVkFMSURBVElPTikgPiAwO1xuICAgICAgICAgICAgX2NvbnRleHQzNy5uZXh0ID0gMztcbiAgICAgICAgICAgIHJldHVybiBjYWxsKF9vYmplY3RTcHJlYWQoe1xuICAgICAgICAgICAgICBtZXRob2Q6ICduZW1HZXRBZGRyZXNzJ1xuICAgICAgICAgICAgfSwgcGFyYW1zLCB7XG4gICAgICAgICAgICAgIHVzZUV2ZW50TGlzdGVuZXI6IHVzZUV2ZW50TGlzdGVuZXJcbiAgICAgICAgICAgIH0pKTtcblxuICAgICAgICAgIGNhc2UgMzpcbiAgICAgICAgICAgIHJldHVybiBfY29udGV4dDM3LmFicnVwdChcInJldHVyblwiLCBfY29udGV4dDM3LnNlbnQpO1xuXG4gICAgICAgICAgY2FzZSA0OlxuICAgICAgICAgIGNhc2UgXCJlbmRcIjpcbiAgICAgICAgICAgIHJldHVybiBfY29udGV4dDM3LnN0b3AoKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sIF9jYWxsZWUzNyk7XG4gIH0pKTtcblxuICByZXR1cm4gZnVuY3Rpb24gKF94MzYpIHtcbiAgICByZXR1cm4gX3JlZjM3LmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gIH07XG59KCkpO1xuKDAsIF9kZWZpbmVQcm9wZXJ0eTJbXCJkZWZhdWx0XCJdKShUcmV6b3JDb25uZWN0LCBcIm5lbVNpZ25UcmFuc2FjdGlvblwiLFxuLyojX19QVVJFX18qL1xuZnVuY3Rpb24gKCkge1xuICB2YXIgX3JlZjM4ID0gKDAsIF9hc3luY1RvR2VuZXJhdG9yMltcImRlZmF1bHRcIl0pKFxuICAvKiNfX1BVUkVfXyovXG4gIF9yZWdlbmVyYXRvcltcImRlZmF1bHRcIl0ubWFyayhmdW5jdGlvbiBfY2FsbGVlMzgocGFyYW1zKSB7XG4gICAgcmV0dXJuIF9yZWdlbmVyYXRvcltcImRlZmF1bHRcIl0ud3JhcChmdW5jdGlvbiBfY2FsbGVlMzgkKF9jb250ZXh0MzgpIHtcbiAgICAgIHdoaWxlICgxKSB7XG4gICAgICAgIHN3aXRjaCAoX2NvbnRleHQzOC5wcmV2ID0gX2NvbnRleHQzOC5uZXh0KSB7XG4gICAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgX2NvbnRleHQzOC5uZXh0ID0gMjtcbiAgICAgICAgICAgIHJldHVybiBjYWxsKF9vYmplY3RTcHJlYWQoe1xuICAgICAgICAgICAgICBtZXRob2Q6ICduZW1TaWduVHJhbnNhY3Rpb24nXG4gICAgICAgICAgICB9LCBwYXJhbXMpKTtcblxuICAgICAgICAgIGNhc2UgMjpcbiAgICAgICAgICAgIHJldHVybiBfY29udGV4dDM4LmFicnVwdChcInJldHVyblwiLCBfY29udGV4dDM4LnNlbnQpO1xuXG4gICAgICAgICAgY2FzZSAzOlxuICAgICAgICAgIGNhc2UgXCJlbmRcIjpcbiAgICAgICAgICAgIHJldHVybiBfY29udGV4dDM4LnN0b3AoKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sIF9jYWxsZWUzOCk7XG4gIH0pKTtcblxuICByZXR1cm4gZnVuY3Rpb24gKF94MzcpIHtcbiAgICByZXR1cm4gX3JlZjM4LmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gIH07XG59KCkpO1xuKDAsIF9kZWZpbmVQcm9wZXJ0eTJbXCJkZWZhdWx0XCJdKShUcmV6b3JDb25uZWN0LCBcInB1c2hUcmFuc2FjdGlvblwiLFxuLyojX19QVVJFX18qL1xuZnVuY3Rpb24gKCkge1xuICB2YXIgX3JlZjM5ID0gKDAsIF9hc3luY1RvR2VuZXJhdG9yMltcImRlZmF1bHRcIl0pKFxuICAvKiNfX1BVUkVfXyovXG4gIF9yZWdlbmVyYXRvcltcImRlZmF1bHRcIl0ubWFyayhmdW5jdGlvbiBfY2FsbGVlMzkocGFyYW1zKSB7XG4gICAgcmV0dXJuIF9yZWdlbmVyYXRvcltcImRlZmF1bHRcIl0ud3JhcChmdW5jdGlvbiBfY2FsbGVlMzkkKF9jb250ZXh0MzkpIHtcbiAgICAgIHdoaWxlICgxKSB7XG4gICAgICAgIHN3aXRjaCAoX2NvbnRleHQzOS5wcmV2ID0gX2NvbnRleHQzOS5uZXh0KSB7XG4gICAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgX2NvbnRleHQzOS5uZXh0ID0gMjtcbiAgICAgICAgICAgIHJldHVybiBjYWxsKF9vYmplY3RTcHJlYWQoe1xuICAgICAgICAgICAgICBtZXRob2Q6ICdwdXNoVHJhbnNhY3Rpb24nXG4gICAgICAgICAgICB9LCBwYXJhbXMpKTtcblxuICAgICAgICAgIGNhc2UgMjpcbiAgICAgICAgICAgIHJldHVybiBfY29udGV4dDM5LmFicnVwdChcInJldHVyblwiLCBfY29udGV4dDM5LnNlbnQpO1xuXG4gICAgICAgICAgY2FzZSAzOlxuICAgICAgICAgIGNhc2UgXCJlbmRcIjpcbiAgICAgICAgICAgIHJldHVybiBfY29udGV4dDM5LnN0b3AoKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sIF9jYWxsZWUzOSk7XG4gIH0pKTtcblxuICByZXR1cm4gZnVuY3Rpb24gKF94MzgpIHtcbiAgICByZXR1cm4gX3JlZjM5LmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gIH07XG59KCkpO1xuKDAsIF9kZWZpbmVQcm9wZXJ0eTJbXCJkZWZhdWx0XCJdKShUcmV6b3JDb25uZWN0LCBcInJpcHBsZUdldEFjY291bnRJbmZvXCIsXG4vKiNfX1BVUkVfXyovXG5mdW5jdGlvbiAoKSB7XG4gIHZhciBfcmVmNDAgPSAoMCwgX2FzeW5jVG9HZW5lcmF0b3IyW1wiZGVmYXVsdFwiXSkoXG4gIC8qI19fUFVSRV9fKi9cbiAgX3JlZ2VuZXJhdG9yW1wiZGVmYXVsdFwiXS5tYXJrKGZ1bmN0aW9uIF9jYWxsZWU0MChwYXJhbXMpIHtcbiAgICByZXR1cm4gX3JlZ2VuZXJhdG9yW1wiZGVmYXVsdFwiXS53cmFwKGZ1bmN0aW9uIF9jYWxsZWU0MCQoX2NvbnRleHQ0MCkge1xuICAgICAgd2hpbGUgKDEpIHtcbiAgICAgICAgc3dpdGNoIChfY29udGV4dDQwLnByZXYgPSBfY29udGV4dDQwLm5leHQpIHtcbiAgICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICBfY29udGV4dDQwLm5leHQgPSAyO1xuICAgICAgICAgICAgcmV0dXJuIGNhbGwoX29iamVjdFNwcmVhZCh7XG4gICAgICAgICAgICAgIG1ldGhvZDogJ3JpcHBsZUdldEFjY291bnRJbmZvJ1xuICAgICAgICAgICAgfSwgcGFyYW1zKSk7XG5cbiAgICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgICByZXR1cm4gX2NvbnRleHQ0MC5hYnJ1cHQoXCJyZXR1cm5cIiwgX2NvbnRleHQ0MC5zZW50KTtcblxuICAgICAgICAgIGNhc2UgMzpcbiAgICAgICAgICBjYXNlIFwiZW5kXCI6XG4gICAgICAgICAgICByZXR1cm4gX2NvbnRleHQ0MC5zdG9wKCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LCBfY2FsbGVlNDApO1xuICB9KSk7XG5cbiAgcmV0dXJuIGZ1bmN0aW9uIChfeDM5KSB7XG4gICAgcmV0dXJuIF9yZWY0MC5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICB9O1xufSgpKTtcbigwLCBfZGVmaW5lUHJvcGVydHkyW1wiZGVmYXVsdFwiXSkoVHJlem9yQ29ubmVjdCwgXCJyaXBwbGVHZXRBZGRyZXNzXCIsXG4vKiNfX1BVUkVfXyovXG5mdW5jdGlvbiAoKSB7XG4gIHZhciBfcmVmNDEgPSAoMCwgX2FzeW5jVG9HZW5lcmF0b3IyW1wiZGVmYXVsdFwiXSkoXG4gIC8qI19fUFVSRV9fKi9cbiAgX3JlZ2VuZXJhdG9yW1wiZGVmYXVsdFwiXS5tYXJrKGZ1bmN0aW9uIF9jYWxsZWU0MShwYXJhbXMpIHtcbiAgICB2YXIgdXNlRXZlbnRMaXN0ZW5lcjtcbiAgICByZXR1cm4gX3JlZ2VuZXJhdG9yW1wiZGVmYXVsdFwiXS53cmFwKGZ1bmN0aW9uIF9jYWxsZWU0MSQoX2NvbnRleHQ0MSkge1xuICAgICAgd2hpbGUgKDEpIHtcbiAgICAgICAgc3dpdGNoIChfY29udGV4dDQxLnByZXYgPSBfY29udGV4dDQxLm5leHQpIHtcbiAgICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICB1c2VFdmVudExpc3RlbmVyID0gZXZlbnRFbWl0dGVyLmxpc3RlbmVyQ291bnQoVUkuQUREUkVTU19WQUxJREFUSU9OKSA+IDA7XG4gICAgICAgICAgICBfY29udGV4dDQxLm5leHQgPSAzO1xuICAgICAgICAgICAgcmV0dXJuIGNhbGwoX29iamVjdFNwcmVhZCh7XG4gICAgICAgICAgICAgIG1ldGhvZDogJ3JpcHBsZUdldEFkZHJlc3MnXG4gICAgICAgICAgICB9LCBwYXJhbXMsIHtcbiAgICAgICAgICAgICAgdXNlRXZlbnRMaXN0ZW5lcjogdXNlRXZlbnRMaXN0ZW5lclxuICAgICAgICAgICAgfSkpO1xuXG4gICAgICAgICAgY2FzZSAzOlxuICAgICAgICAgICAgcmV0dXJuIF9jb250ZXh0NDEuYWJydXB0KFwicmV0dXJuXCIsIF9jb250ZXh0NDEuc2VudCk7XG5cbiAgICAgICAgICBjYXNlIDQ6XG4gICAgICAgICAgY2FzZSBcImVuZFwiOlxuICAgICAgICAgICAgcmV0dXJuIF9jb250ZXh0NDEuc3RvcCgpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSwgX2NhbGxlZTQxKTtcbiAgfSkpO1xuXG4gIHJldHVybiBmdW5jdGlvbiAoX3g0MCkge1xuICAgIHJldHVybiBfcmVmNDEuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgfTtcbn0oKSk7XG4oMCwgX2RlZmluZVByb3BlcnR5MltcImRlZmF1bHRcIl0pKFRyZXpvckNvbm5lY3QsIFwicmlwcGxlU2lnblRyYW5zYWN0aW9uXCIsXG4vKiNfX1BVUkVfXyovXG5mdW5jdGlvbiAoKSB7XG4gIHZhciBfcmVmNDIgPSAoMCwgX2FzeW5jVG9HZW5lcmF0b3IyW1wiZGVmYXVsdFwiXSkoXG4gIC8qI19fUFVSRV9fKi9cbiAgX3JlZ2VuZXJhdG9yW1wiZGVmYXVsdFwiXS5tYXJrKGZ1bmN0aW9uIF9jYWxsZWU0MihwYXJhbXMpIHtcbiAgICByZXR1cm4gX3JlZ2VuZXJhdG9yW1wiZGVmYXVsdFwiXS53cmFwKGZ1bmN0aW9uIF9jYWxsZWU0MiQoX2NvbnRleHQ0Mikge1xuICAgICAgd2hpbGUgKDEpIHtcbiAgICAgICAgc3dpdGNoIChfY29udGV4dDQyLnByZXYgPSBfY29udGV4dDQyLm5leHQpIHtcbiAgICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICBfY29udGV4dDQyLm5leHQgPSAyO1xuICAgICAgICAgICAgcmV0dXJuIGNhbGwoX29iamVjdFNwcmVhZCh7XG4gICAgICAgICAgICAgIG1ldGhvZDogJ3JpcHBsZVNpZ25UcmFuc2FjdGlvbidcbiAgICAgICAgICAgIH0sIHBhcmFtcykpO1xuXG4gICAgICAgICAgY2FzZSAyOlxuICAgICAgICAgICAgcmV0dXJuIF9jb250ZXh0NDIuYWJydXB0KFwicmV0dXJuXCIsIF9jb250ZXh0NDIuc2VudCk7XG5cbiAgICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgY2FzZSBcImVuZFwiOlxuICAgICAgICAgICAgcmV0dXJuIF9jb250ZXh0NDIuc3RvcCgpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSwgX2NhbGxlZTQyKTtcbiAgfSkpO1xuXG4gIHJldHVybiBmdW5jdGlvbiAoX3g0MSkge1xuICAgIHJldHVybiBfcmVmNDIuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgfTtcbn0oKSk7XG4oMCwgX2RlZmluZVByb3BlcnR5MltcImRlZmF1bHRcIl0pKFRyZXpvckNvbm5lY3QsIFwic2lnbk1lc3NhZ2VcIixcbi8qI19fUFVSRV9fKi9cbmZ1bmN0aW9uICgpIHtcbiAgdmFyIF9yZWY0MyA9ICgwLCBfYXN5bmNUb0dlbmVyYXRvcjJbXCJkZWZhdWx0XCJdKShcbiAgLyojX19QVVJFX18qL1xuICBfcmVnZW5lcmF0b3JbXCJkZWZhdWx0XCJdLm1hcmsoZnVuY3Rpb24gX2NhbGxlZTQzKHBhcmFtcykge1xuICAgIHJldHVybiBfcmVnZW5lcmF0b3JbXCJkZWZhdWx0XCJdLndyYXAoZnVuY3Rpb24gX2NhbGxlZTQzJChfY29udGV4dDQzKSB7XG4gICAgICB3aGlsZSAoMSkge1xuICAgICAgICBzd2l0Y2ggKF9jb250ZXh0NDMucHJldiA9IF9jb250ZXh0NDMubmV4dCkge1xuICAgICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgIF9jb250ZXh0NDMubmV4dCA9IDI7XG4gICAgICAgICAgICByZXR1cm4gY2FsbChfb2JqZWN0U3ByZWFkKHtcbiAgICAgICAgICAgICAgbWV0aG9kOiAnc2lnbk1lc3NhZ2UnXG4gICAgICAgICAgICB9LCBwYXJhbXMpKTtcblxuICAgICAgICAgIGNhc2UgMjpcbiAgICAgICAgICAgIHJldHVybiBfY29udGV4dDQzLmFicnVwdChcInJldHVyblwiLCBfY29udGV4dDQzLnNlbnQpO1xuXG4gICAgICAgICAgY2FzZSAzOlxuICAgICAgICAgIGNhc2UgXCJlbmRcIjpcbiAgICAgICAgICAgIHJldHVybiBfY29udGV4dDQzLnN0b3AoKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sIF9jYWxsZWU0Myk7XG4gIH0pKTtcblxuICByZXR1cm4gZnVuY3Rpb24gKF94NDIpIHtcbiAgICByZXR1cm4gX3JlZjQzLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gIH07XG59KCkpO1xuKDAsIF9kZWZpbmVQcm9wZXJ0eTJbXCJkZWZhdWx0XCJdKShUcmV6b3JDb25uZWN0LCBcInNpZ25UcmFuc2FjdGlvblwiLFxuLyojX19QVVJFX18qL1xuZnVuY3Rpb24gKCkge1xuICB2YXIgX3JlZjQ0ID0gKDAsIF9hc3luY1RvR2VuZXJhdG9yMltcImRlZmF1bHRcIl0pKFxuICAvKiNfX1BVUkVfXyovXG4gIF9yZWdlbmVyYXRvcltcImRlZmF1bHRcIl0ubWFyayhmdW5jdGlvbiBfY2FsbGVlNDQocGFyYW1zKSB7XG4gICAgcmV0dXJuIF9yZWdlbmVyYXRvcltcImRlZmF1bHRcIl0ud3JhcChmdW5jdGlvbiBfY2FsbGVlNDQkKF9jb250ZXh0NDQpIHtcbiAgICAgIHdoaWxlICgxKSB7XG4gICAgICAgIHN3aXRjaCAoX2NvbnRleHQ0NC5wcmV2ID0gX2NvbnRleHQ0NC5uZXh0KSB7XG4gICAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgX2NvbnRleHQ0NC5uZXh0ID0gMjtcbiAgICAgICAgICAgIHJldHVybiBjYWxsKF9vYmplY3RTcHJlYWQoe1xuICAgICAgICAgICAgICBtZXRob2Q6ICdzaWduVHJhbnNhY3Rpb24nXG4gICAgICAgICAgICB9LCBwYXJhbXMpKTtcblxuICAgICAgICAgIGNhc2UgMjpcbiAgICAgICAgICAgIHJldHVybiBfY29udGV4dDQ0LmFicnVwdChcInJldHVyblwiLCBfY29udGV4dDQ0LnNlbnQpO1xuXG4gICAgICAgICAgY2FzZSAzOlxuICAgICAgICAgIGNhc2UgXCJlbmRcIjpcbiAgICAgICAgICAgIHJldHVybiBfY29udGV4dDQ0LnN0b3AoKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sIF9jYWxsZWU0NCk7XG4gIH0pKTtcblxuICByZXR1cm4gZnVuY3Rpb24gKF94NDMpIHtcbiAgICByZXR1cm4gX3JlZjQ0LmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gIH07XG59KCkpO1xuKDAsIF9kZWZpbmVQcm9wZXJ0eTJbXCJkZWZhdWx0XCJdKShUcmV6b3JDb25uZWN0LCBcInN0ZWxsYXJHZXRBZGRyZXNzXCIsXG4vKiNfX1BVUkVfXyovXG5mdW5jdGlvbiAoKSB7XG4gIHZhciBfcmVmNDUgPSAoMCwgX2FzeW5jVG9HZW5lcmF0b3IyW1wiZGVmYXVsdFwiXSkoXG4gIC8qI19fUFVSRV9fKi9cbiAgX3JlZ2VuZXJhdG9yW1wiZGVmYXVsdFwiXS5tYXJrKGZ1bmN0aW9uIF9jYWxsZWU0NShwYXJhbXMpIHtcbiAgICB2YXIgdXNlRXZlbnRMaXN0ZW5lcjtcbiAgICByZXR1cm4gX3JlZ2VuZXJhdG9yW1wiZGVmYXVsdFwiXS53cmFwKGZ1bmN0aW9uIF9jYWxsZWU0NSQoX2NvbnRleHQ0NSkge1xuICAgICAgd2hpbGUgKDEpIHtcbiAgICAgICAgc3dpdGNoIChfY29udGV4dDQ1LnByZXYgPSBfY29udGV4dDQ1Lm5leHQpIHtcbiAgICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICB1c2VFdmVudExpc3RlbmVyID0gZXZlbnRFbWl0dGVyLmxpc3RlbmVyQ291bnQoVUkuQUREUkVTU19WQUxJREFUSU9OKSA+IDA7XG4gICAgICAgICAgICBfY29udGV4dDQ1Lm5leHQgPSAzO1xuICAgICAgICAgICAgcmV0dXJuIGNhbGwoX29iamVjdFNwcmVhZCh7XG4gICAgICAgICAgICAgIG1ldGhvZDogJ3N0ZWxsYXJHZXRBZGRyZXNzJ1xuICAgICAgICAgICAgfSwgcGFyYW1zLCB7XG4gICAgICAgICAgICAgIHVzZUV2ZW50TGlzdGVuZXI6IHVzZUV2ZW50TGlzdGVuZXJcbiAgICAgICAgICAgIH0pKTtcblxuICAgICAgICAgIGNhc2UgMzpcbiAgICAgICAgICAgIHJldHVybiBfY29udGV4dDQ1LmFicnVwdChcInJldHVyblwiLCBfY29udGV4dDQ1LnNlbnQpO1xuXG4gICAgICAgICAgY2FzZSA0OlxuICAgICAgICAgIGNhc2UgXCJlbmRcIjpcbiAgICAgICAgICAgIHJldHVybiBfY29udGV4dDQ1LnN0b3AoKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sIF9jYWxsZWU0NSk7XG4gIH0pKTtcblxuICByZXR1cm4gZnVuY3Rpb24gKF94NDQpIHtcbiAgICByZXR1cm4gX3JlZjQ1LmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gIH07XG59KCkpO1xuKDAsIF9kZWZpbmVQcm9wZXJ0eTJbXCJkZWZhdWx0XCJdKShUcmV6b3JDb25uZWN0LCBcInN0ZWxsYXJTaWduVHJhbnNhY3Rpb25cIixcbi8qI19fUFVSRV9fKi9cbmZ1bmN0aW9uICgpIHtcbiAgdmFyIF9yZWY0NiA9ICgwLCBfYXN5bmNUb0dlbmVyYXRvcjJbXCJkZWZhdWx0XCJdKShcbiAgLyojX19QVVJFX18qL1xuICBfcmVnZW5lcmF0b3JbXCJkZWZhdWx0XCJdLm1hcmsoZnVuY3Rpb24gX2NhbGxlZTQ2KHBhcmFtcykge1xuICAgIHJldHVybiBfcmVnZW5lcmF0b3JbXCJkZWZhdWx0XCJdLndyYXAoZnVuY3Rpb24gX2NhbGxlZTQ2JChfY29udGV4dDQ2KSB7XG4gICAgICB3aGlsZSAoMSkge1xuICAgICAgICBzd2l0Y2ggKF9jb250ZXh0NDYucHJldiA9IF9jb250ZXh0NDYubmV4dCkge1xuICAgICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgIF9jb250ZXh0NDYubmV4dCA9IDI7XG4gICAgICAgICAgICByZXR1cm4gY2FsbChfb2JqZWN0U3ByZWFkKHtcbiAgICAgICAgICAgICAgbWV0aG9kOiAnc3RlbGxhclNpZ25UcmFuc2FjdGlvbidcbiAgICAgICAgICAgIH0sIHBhcmFtcykpO1xuXG4gICAgICAgICAgY2FzZSAyOlxuICAgICAgICAgICAgcmV0dXJuIF9jb250ZXh0NDYuYWJydXB0KFwicmV0dXJuXCIsIF9jb250ZXh0NDYuc2VudCk7XG5cbiAgICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgY2FzZSBcImVuZFwiOlxuICAgICAgICAgICAgcmV0dXJuIF9jb250ZXh0NDYuc3RvcCgpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSwgX2NhbGxlZTQ2KTtcbiAgfSkpO1xuXG4gIHJldHVybiBmdW5jdGlvbiAoX3g0NSkge1xuICAgIHJldHVybiBfcmVmNDYuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgfTtcbn0oKSk7XG4oMCwgX2RlZmluZVByb3BlcnR5MltcImRlZmF1bHRcIl0pKFRyZXpvckNvbm5lY3QsIFwidGV6b3NHZXRBZGRyZXNzXCIsXG4vKiNfX1BVUkVfXyovXG5mdW5jdGlvbiAoKSB7XG4gIHZhciBfcmVmNDcgPSAoMCwgX2FzeW5jVG9HZW5lcmF0b3IyW1wiZGVmYXVsdFwiXSkoXG4gIC8qI19fUFVSRV9fKi9cbiAgX3JlZ2VuZXJhdG9yW1wiZGVmYXVsdFwiXS5tYXJrKGZ1bmN0aW9uIF9jYWxsZWU0NyhwYXJhbXMpIHtcbiAgICB2YXIgdXNlRXZlbnRMaXN0ZW5lcjtcbiAgICByZXR1cm4gX3JlZ2VuZXJhdG9yW1wiZGVmYXVsdFwiXS53cmFwKGZ1bmN0aW9uIF9jYWxsZWU0NyQoX2NvbnRleHQ0Nykge1xuICAgICAgd2hpbGUgKDEpIHtcbiAgICAgICAgc3dpdGNoIChfY29udGV4dDQ3LnByZXYgPSBfY29udGV4dDQ3Lm5leHQpIHtcbiAgICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICB1c2VFdmVudExpc3RlbmVyID0gZXZlbnRFbWl0dGVyLmxpc3RlbmVyQ291bnQoVUkuQUREUkVTU19WQUxJREFUSU9OKSA+IDA7XG4gICAgICAgICAgICBfY29udGV4dDQ3Lm5leHQgPSAzO1xuICAgICAgICAgICAgcmV0dXJuIGNhbGwoX29iamVjdFNwcmVhZCh7XG4gICAgICAgICAgICAgIG1ldGhvZDogJ3Rlem9zR2V0QWRkcmVzcydcbiAgICAgICAgICAgIH0sIHBhcmFtcywge1xuICAgICAgICAgICAgICB1c2VFdmVudExpc3RlbmVyOiB1c2VFdmVudExpc3RlbmVyXG4gICAgICAgICAgICB9KSk7XG5cbiAgICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgICByZXR1cm4gX2NvbnRleHQ0Ny5hYnJ1cHQoXCJyZXR1cm5cIiwgX2NvbnRleHQ0Ny5zZW50KTtcblxuICAgICAgICAgIGNhc2UgNDpcbiAgICAgICAgICBjYXNlIFwiZW5kXCI6XG4gICAgICAgICAgICByZXR1cm4gX2NvbnRleHQ0Ny5zdG9wKCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LCBfY2FsbGVlNDcpO1xuICB9KSk7XG5cbiAgcmV0dXJuIGZ1bmN0aW9uIChfeDQ2KSB7XG4gICAgcmV0dXJuIF9yZWY0Ny5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICB9O1xufSgpKTtcbigwLCBfZGVmaW5lUHJvcGVydHkyW1wiZGVmYXVsdFwiXSkoVHJlem9yQ29ubmVjdCwgXCJ0ZXpvc0dldFB1YmxpY0tleVwiLFxuLyojX19QVVJFX18qL1xuZnVuY3Rpb24gKCkge1xuICB2YXIgX3JlZjQ4ID0gKDAsIF9hc3luY1RvR2VuZXJhdG9yMltcImRlZmF1bHRcIl0pKFxuICAvKiNfX1BVUkVfXyovXG4gIF9yZWdlbmVyYXRvcltcImRlZmF1bHRcIl0ubWFyayhmdW5jdGlvbiBfY2FsbGVlNDgocGFyYW1zKSB7XG4gICAgcmV0dXJuIF9yZWdlbmVyYXRvcltcImRlZmF1bHRcIl0ud3JhcChmdW5jdGlvbiBfY2FsbGVlNDgkKF9jb250ZXh0NDgpIHtcbiAgICAgIHdoaWxlICgxKSB7XG4gICAgICAgIHN3aXRjaCAoX2NvbnRleHQ0OC5wcmV2ID0gX2NvbnRleHQ0OC5uZXh0KSB7XG4gICAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgX2NvbnRleHQ0OC5uZXh0ID0gMjtcbiAgICAgICAgICAgIHJldHVybiBjYWxsKF9vYmplY3RTcHJlYWQoe1xuICAgICAgICAgICAgICBtZXRob2Q6ICd0ZXpvc0dldFB1YmxpY0tleSdcbiAgICAgICAgICAgIH0sIHBhcmFtcykpO1xuXG4gICAgICAgICAgY2FzZSAyOlxuICAgICAgICAgICAgcmV0dXJuIF9jb250ZXh0NDguYWJydXB0KFwicmV0dXJuXCIsIF9jb250ZXh0NDguc2VudCk7XG5cbiAgICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgY2FzZSBcImVuZFwiOlxuICAgICAgICAgICAgcmV0dXJuIF9jb250ZXh0NDguc3RvcCgpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSwgX2NhbGxlZTQ4KTtcbiAgfSkpO1xuXG4gIHJldHVybiBmdW5jdGlvbiAoX3g0Nykge1xuICAgIHJldHVybiBfcmVmNDguYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgfTtcbn0oKSk7XG4oMCwgX2RlZmluZVByb3BlcnR5MltcImRlZmF1bHRcIl0pKFRyZXpvckNvbm5lY3QsIFwidGV6b3NTaWduVHJhbnNhY3Rpb25cIixcbi8qI19fUFVSRV9fKi9cbmZ1bmN0aW9uICgpIHtcbiAgdmFyIF9yZWY0OSA9ICgwLCBfYXN5bmNUb0dlbmVyYXRvcjJbXCJkZWZhdWx0XCJdKShcbiAgLyojX19QVVJFX18qL1xuICBfcmVnZW5lcmF0b3JbXCJkZWZhdWx0XCJdLm1hcmsoZnVuY3Rpb24gX2NhbGxlZTQ5KHBhcmFtcykge1xuICAgIHJldHVybiBfcmVnZW5lcmF0b3JbXCJkZWZhdWx0XCJdLndyYXAoZnVuY3Rpb24gX2NhbGxlZTQ5JChfY29udGV4dDQ5KSB7XG4gICAgICB3aGlsZSAoMSkge1xuICAgICAgICBzd2l0Y2ggKF9jb250ZXh0NDkucHJldiA9IF9jb250ZXh0NDkubmV4dCkge1xuICAgICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgIF9jb250ZXh0NDkubmV4dCA9IDI7XG4gICAgICAgICAgICByZXR1cm4gY2FsbChfb2JqZWN0U3ByZWFkKHtcbiAgICAgICAgICAgICAgbWV0aG9kOiAndGV6b3NTaWduVHJhbnNhY3Rpb24nXG4gICAgICAgICAgICB9LCBwYXJhbXMpKTtcblxuICAgICAgICAgIGNhc2UgMjpcbiAgICAgICAgICAgIHJldHVybiBfY29udGV4dDQ5LmFicnVwdChcInJldHVyblwiLCBfY29udGV4dDQ5LnNlbnQpO1xuXG4gICAgICAgICAgY2FzZSAzOlxuICAgICAgICAgIGNhc2UgXCJlbmRcIjpcbiAgICAgICAgICAgIHJldHVybiBfY29udGV4dDQ5LnN0b3AoKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sIF9jYWxsZWU0OSk7XG4gIH0pKTtcblxuICByZXR1cm4gZnVuY3Rpb24gKF94NDgpIHtcbiAgICByZXR1cm4gX3JlZjQ5LmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gIH07XG59KCkpO1xuKDAsIF9kZWZpbmVQcm9wZXJ0eTJbXCJkZWZhdWx0XCJdKShUcmV6b3JDb25uZWN0LCBcImVvc0dldFB1YmxpY0tleVwiLFxuLyojX19QVVJFX18qL1xuZnVuY3Rpb24gKCkge1xuICB2YXIgX3JlZjUwID0gKDAsIF9hc3luY1RvR2VuZXJhdG9yMltcImRlZmF1bHRcIl0pKFxuICAvKiNfX1BVUkVfXyovXG4gIF9yZWdlbmVyYXRvcltcImRlZmF1bHRcIl0ubWFyayhmdW5jdGlvbiBfY2FsbGVlNTAocGFyYW1zKSB7XG4gICAgcmV0dXJuIF9yZWdlbmVyYXRvcltcImRlZmF1bHRcIl0ud3JhcChmdW5jdGlvbiBfY2FsbGVlNTAkKF9jb250ZXh0NTApIHtcbiAgICAgIHdoaWxlICgxKSB7XG4gICAgICAgIHN3aXRjaCAoX2NvbnRleHQ1MC5wcmV2ID0gX2NvbnRleHQ1MC5uZXh0KSB7XG4gICAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgX2NvbnRleHQ1MC5uZXh0ID0gMjtcbiAgICAgICAgICAgIHJldHVybiBjYWxsKF9vYmplY3RTcHJlYWQoe1xuICAgICAgICAgICAgICBtZXRob2Q6ICdlb3NHZXRQdWJsaWNLZXknXG4gICAgICAgICAgICB9LCBwYXJhbXMpKTtcblxuICAgICAgICAgIGNhc2UgMjpcbiAgICAgICAgICAgIHJldHVybiBfY29udGV4dDUwLmFicnVwdChcInJldHVyblwiLCBfY29udGV4dDUwLnNlbnQpO1xuXG4gICAgICAgICAgY2FzZSAzOlxuICAgICAgICAgIGNhc2UgXCJlbmRcIjpcbiAgICAgICAgICAgIHJldHVybiBfY29udGV4dDUwLnN0b3AoKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sIF9jYWxsZWU1MCk7XG4gIH0pKTtcblxuICByZXR1cm4gZnVuY3Rpb24gKF94NDkpIHtcbiAgICByZXR1cm4gX3JlZjUwLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gIH07XG59KCkpO1xuKDAsIF9kZWZpbmVQcm9wZXJ0eTJbXCJkZWZhdWx0XCJdKShUcmV6b3JDb25uZWN0LCBcImVvc1NpZ25UcmFuc2FjdGlvblwiLFxuLyojX19QVVJFX18qL1xuZnVuY3Rpb24gKCkge1xuICB2YXIgX3JlZjUxID0gKDAsIF9hc3luY1RvR2VuZXJhdG9yMltcImRlZmF1bHRcIl0pKFxuICAvKiNfX1BVUkVfXyovXG4gIF9yZWdlbmVyYXRvcltcImRlZmF1bHRcIl0ubWFyayhmdW5jdGlvbiBfY2FsbGVlNTEocGFyYW1zKSB7XG4gICAgcmV0dXJuIF9yZWdlbmVyYXRvcltcImRlZmF1bHRcIl0ud3JhcChmdW5jdGlvbiBfY2FsbGVlNTEkKF9jb250ZXh0NTEpIHtcbiAgICAgIHdoaWxlICgxKSB7XG4gICAgICAgIHN3aXRjaCAoX2NvbnRleHQ1MS5wcmV2ID0gX2NvbnRleHQ1MS5uZXh0KSB7XG4gICAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgX2NvbnRleHQ1MS5uZXh0ID0gMjtcbiAgICAgICAgICAgIHJldHVybiBjYWxsKF9vYmplY3RTcHJlYWQoe1xuICAgICAgICAgICAgICBtZXRob2Q6ICdlb3NTaWduVHJhbnNhY3Rpb24nXG4gICAgICAgICAgICB9LCBwYXJhbXMpKTtcblxuICAgICAgICAgIGNhc2UgMjpcbiAgICAgICAgICAgIHJldHVybiBfY29udGV4dDUxLmFicnVwdChcInJldHVyblwiLCBfY29udGV4dDUxLnNlbnQpO1xuXG4gICAgICAgICAgY2FzZSAzOlxuICAgICAgICAgIGNhc2UgXCJlbmRcIjpcbiAgICAgICAgICAgIHJldHVybiBfY29udGV4dDUxLnN0b3AoKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sIF9jYWxsZWU1MSk7XG4gIH0pKTtcblxuICByZXR1cm4gZnVuY3Rpb24gKF94NTApIHtcbiAgICByZXR1cm4gX3JlZjUxLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gIH07XG59KCkpO1xuKDAsIF9kZWZpbmVQcm9wZXJ0eTJbXCJkZWZhdWx0XCJdKShUcmV6b3JDb25uZWN0LCBcInZlcmlmeU1lc3NhZ2VcIixcbi8qI19fUFVSRV9fKi9cbmZ1bmN0aW9uICgpIHtcbiAgdmFyIF9yZWY1MiA9ICgwLCBfYXN5bmNUb0dlbmVyYXRvcjJbXCJkZWZhdWx0XCJdKShcbiAgLyojX19QVVJFX18qL1xuICBfcmVnZW5lcmF0b3JbXCJkZWZhdWx0XCJdLm1hcmsoZnVuY3Rpb24gX2NhbGxlZTUyKHBhcmFtcykge1xuICAgIHJldHVybiBfcmVnZW5lcmF0b3JbXCJkZWZhdWx0XCJdLndyYXAoZnVuY3Rpb24gX2NhbGxlZTUyJChfY29udGV4dDUyKSB7XG4gICAgICB3aGlsZSAoMSkge1xuICAgICAgICBzd2l0Y2ggKF9jb250ZXh0NTIucHJldiA9IF9jb250ZXh0NTIubmV4dCkge1xuICAgICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgIF9jb250ZXh0NTIubmV4dCA9IDI7XG4gICAgICAgICAgICByZXR1cm4gY2FsbChfb2JqZWN0U3ByZWFkKHtcbiAgICAgICAgICAgICAgbWV0aG9kOiAndmVyaWZ5TWVzc2FnZSdcbiAgICAgICAgICAgIH0sIHBhcmFtcykpO1xuXG4gICAgICAgICAgY2FzZSAyOlxuICAgICAgICAgICAgcmV0dXJuIF9jb250ZXh0NTIuYWJydXB0KFwicmV0dXJuXCIsIF9jb250ZXh0NTIuc2VudCk7XG5cbiAgICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgY2FzZSBcImVuZFwiOlxuICAgICAgICAgICAgcmV0dXJuIF9jb250ZXh0NTIuc3RvcCgpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSwgX2NhbGxlZTUyKTtcbiAgfSkpO1xuXG4gIHJldHVybiBmdW5jdGlvbiAoX3g1MSkge1xuICAgIHJldHVybiBfcmVmNTIuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgfTtcbn0oKSk7XG4oMCwgX2RlZmluZVByb3BlcnR5MltcImRlZmF1bHRcIl0pKFRyZXpvckNvbm5lY3QsIFwid2lwZURldmljZVwiLFxuLyojX19QVVJFX18qL1xuZnVuY3Rpb24gKCkge1xuICB2YXIgX3JlZjUzID0gKDAsIF9hc3luY1RvR2VuZXJhdG9yMltcImRlZmF1bHRcIl0pKFxuICAvKiNfX1BVUkVfXyovXG4gIF9yZWdlbmVyYXRvcltcImRlZmF1bHRcIl0ubWFyayhmdW5jdGlvbiBfY2FsbGVlNTMocGFyYW1zKSB7XG4gICAgcmV0dXJuIF9yZWdlbmVyYXRvcltcImRlZmF1bHRcIl0ud3JhcChmdW5jdGlvbiBfY2FsbGVlNTMkKF9jb250ZXh0NTMpIHtcbiAgICAgIHdoaWxlICgxKSB7XG4gICAgICAgIHN3aXRjaCAoX2NvbnRleHQ1My5wcmV2ID0gX2NvbnRleHQ1My5uZXh0KSB7XG4gICAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgX2NvbnRleHQ1My5uZXh0ID0gMjtcbiAgICAgICAgICAgIHJldHVybiBjYWxsKF9vYmplY3RTcHJlYWQoe1xuICAgICAgICAgICAgICBtZXRob2Q6ICd3aXBlRGV2aWNlJ1xuICAgICAgICAgICAgfSwgcGFyYW1zKSk7XG5cbiAgICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgICByZXR1cm4gX2NvbnRleHQ1My5hYnJ1cHQoXCJyZXR1cm5cIiwgX2NvbnRleHQ1My5zZW50KTtcblxuICAgICAgICAgIGNhc2UgMzpcbiAgICAgICAgICBjYXNlIFwiZW5kXCI6XG4gICAgICAgICAgICByZXR1cm4gX2NvbnRleHQ1My5zdG9wKCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LCBfY2FsbGVlNTMpO1xuICB9KSk7XG5cbiAgcmV0dXJuIGZ1bmN0aW9uIChfeDUyKSB7XG4gICAgcmV0dXJuIF9yZWY1My5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICB9O1xufSgpKTtcbigwLCBfZGVmaW5lUHJvcGVydHkyW1wiZGVmYXVsdFwiXSkoVHJlem9yQ29ubmVjdCwgXCJhcHBseUZsYWdzXCIsXG4vKiNfX1BVUkVfXyovXG5mdW5jdGlvbiAoKSB7XG4gIHZhciBfcmVmNTQgPSAoMCwgX2FzeW5jVG9HZW5lcmF0b3IyW1wiZGVmYXVsdFwiXSkoXG4gIC8qI19fUFVSRV9fKi9cbiAgX3JlZ2VuZXJhdG9yW1wiZGVmYXVsdFwiXS5tYXJrKGZ1bmN0aW9uIF9jYWxsZWU1NChwYXJhbXMpIHtcbiAgICByZXR1cm4gX3JlZ2VuZXJhdG9yW1wiZGVmYXVsdFwiXS53cmFwKGZ1bmN0aW9uIF9jYWxsZWU1NCQoX2NvbnRleHQ1NCkge1xuICAgICAgd2hpbGUgKDEpIHtcbiAgICAgICAgc3dpdGNoIChfY29udGV4dDU0LnByZXYgPSBfY29udGV4dDU0Lm5leHQpIHtcbiAgICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICBfY29udGV4dDU0Lm5leHQgPSAyO1xuICAgICAgICAgICAgcmV0dXJuIGNhbGwoX29iamVjdFNwcmVhZCh7XG4gICAgICAgICAgICAgIG1ldGhvZDogJ2FwcGx5RmxhZ3MnXG4gICAgICAgICAgICB9LCBwYXJhbXMpKTtcblxuICAgICAgICAgIGNhc2UgMjpcbiAgICAgICAgICAgIHJldHVybiBfY29udGV4dDU0LmFicnVwdChcInJldHVyblwiLCBfY29udGV4dDU0LnNlbnQpO1xuXG4gICAgICAgICAgY2FzZSAzOlxuICAgICAgICAgIGNhc2UgXCJlbmRcIjpcbiAgICAgICAgICAgIHJldHVybiBfY29udGV4dDU0LnN0b3AoKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sIF9jYWxsZWU1NCk7XG4gIH0pKTtcblxuICByZXR1cm4gZnVuY3Rpb24gKF94NTMpIHtcbiAgICByZXR1cm4gX3JlZjU0LmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gIH07XG59KCkpO1xuKDAsIF9kZWZpbmVQcm9wZXJ0eTJbXCJkZWZhdWx0XCJdKShUcmV6b3JDb25uZWN0LCBcImFwcGx5U2V0dGluZ3NcIixcbi8qI19fUFVSRV9fKi9cbmZ1bmN0aW9uICgpIHtcbiAgdmFyIF9yZWY1NSA9ICgwLCBfYXN5bmNUb0dlbmVyYXRvcjJbXCJkZWZhdWx0XCJdKShcbiAgLyojX19QVVJFX18qL1xuICBfcmVnZW5lcmF0b3JbXCJkZWZhdWx0XCJdLm1hcmsoZnVuY3Rpb24gX2NhbGxlZTU1KHBhcmFtcykge1xuICAgIHJldHVybiBfcmVnZW5lcmF0b3JbXCJkZWZhdWx0XCJdLndyYXAoZnVuY3Rpb24gX2NhbGxlZTU1JChfY29udGV4dDU1KSB7XG4gICAgICB3aGlsZSAoMSkge1xuICAgICAgICBzd2l0Y2ggKF9jb250ZXh0NTUucHJldiA9IF9jb250ZXh0NTUubmV4dCkge1xuICAgICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgIF9jb250ZXh0NTUubmV4dCA9IDI7XG4gICAgICAgICAgICByZXR1cm4gY2FsbChfb2JqZWN0U3ByZWFkKHtcbiAgICAgICAgICAgICAgbWV0aG9kOiAnYXBwbHlTZXR0aW5ncydcbiAgICAgICAgICAgIH0sIHBhcmFtcykpO1xuXG4gICAgICAgICAgY2FzZSAyOlxuICAgICAgICAgICAgcmV0dXJuIF9jb250ZXh0NTUuYWJydXB0KFwicmV0dXJuXCIsIF9jb250ZXh0NTUuc2VudCk7XG5cbiAgICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgY2FzZSBcImVuZFwiOlxuICAgICAgICAgICAgcmV0dXJuIF9jb250ZXh0NTUuc3RvcCgpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSwgX2NhbGxlZTU1KTtcbiAgfSkpO1xuXG4gIHJldHVybiBmdW5jdGlvbiAoX3g1NCkge1xuICAgIHJldHVybiBfcmVmNTUuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgfTtcbn0oKSk7XG4oMCwgX2RlZmluZVByb3BlcnR5MltcImRlZmF1bHRcIl0pKFRyZXpvckNvbm5lY3QsIFwiYmFja3VwRGV2aWNlXCIsXG4vKiNfX1BVUkVfXyovXG4oMCwgX2FzeW5jVG9HZW5lcmF0b3IyW1wiZGVmYXVsdFwiXSkoXG4vKiNfX1BVUkVfXyovXG5fcmVnZW5lcmF0b3JbXCJkZWZhdWx0XCJdLm1hcmsoZnVuY3Rpb24gX2NhbGxlZTU2KCkge1xuICByZXR1cm4gX3JlZ2VuZXJhdG9yW1wiZGVmYXVsdFwiXS53cmFwKGZ1bmN0aW9uIF9jYWxsZWU1NiQoX2NvbnRleHQ1Nikge1xuICAgIHdoaWxlICgxKSB7XG4gICAgICBzd2l0Y2ggKF9jb250ZXh0NTYucHJldiA9IF9jb250ZXh0NTYubmV4dCkge1xuICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgX2NvbnRleHQ1Ni5uZXh0ID0gMjtcbiAgICAgICAgICByZXR1cm4gY2FsbCh7XG4gICAgICAgICAgICBtZXRob2Q6ICdiYWNrdXBEZXZpY2UnXG4gICAgICAgICAgfSk7XG5cbiAgICAgICAgY2FzZSAyOlxuICAgICAgICAgIHJldHVybiBfY29udGV4dDU2LmFicnVwdChcInJldHVyblwiLCBfY29udGV4dDU2LnNlbnQpO1xuXG4gICAgICAgIGNhc2UgMzpcbiAgICAgICAgY2FzZSBcImVuZFwiOlxuICAgICAgICAgIHJldHVybiBfY29udGV4dDU2LnN0b3AoKTtcbiAgICAgIH1cbiAgICB9XG4gIH0sIF9jYWxsZWU1Nik7XG59KSkpO1xuKDAsIF9kZWZpbmVQcm9wZXJ0eTJbXCJkZWZhdWx0XCJdKShUcmV6b3JDb25uZWN0LCBcImNoYW5nZVBpblwiLFxuLyojX19QVVJFX18qL1xuZnVuY3Rpb24gKCkge1xuICB2YXIgX3JlZjU3ID0gKDAsIF9hc3luY1RvR2VuZXJhdG9yMltcImRlZmF1bHRcIl0pKFxuICAvKiNfX1BVUkVfXyovXG4gIF9yZWdlbmVyYXRvcltcImRlZmF1bHRcIl0ubWFyayhmdW5jdGlvbiBfY2FsbGVlNTcocGFyYW1zKSB7XG4gICAgcmV0dXJuIF9yZWdlbmVyYXRvcltcImRlZmF1bHRcIl0ud3JhcChmdW5jdGlvbiBfY2FsbGVlNTckKF9jb250ZXh0NTcpIHtcbiAgICAgIHdoaWxlICgxKSB7XG4gICAgICAgIHN3aXRjaCAoX2NvbnRleHQ1Ny5wcmV2ID0gX2NvbnRleHQ1Ny5uZXh0KSB7XG4gICAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgX2NvbnRleHQ1Ny5uZXh0ID0gMjtcbiAgICAgICAgICAgIHJldHVybiBjYWxsKF9vYmplY3RTcHJlYWQoe1xuICAgICAgICAgICAgICBtZXRob2Q6ICdjaGFuZ2VQaW4nXG4gICAgICAgICAgICB9LCBwYXJhbXMpKTtcblxuICAgICAgICAgIGNhc2UgMjpcbiAgICAgICAgICAgIHJldHVybiBfY29udGV4dDU3LmFicnVwdChcInJldHVyblwiLCBfY29udGV4dDU3LnNlbnQpO1xuXG4gICAgICAgICAgY2FzZSAzOlxuICAgICAgICAgIGNhc2UgXCJlbmRcIjpcbiAgICAgICAgICAgIHJldHVybiBfY29udGV4dDU3LnN0b3AoKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sIF9jYWxsZWU1Nyk7XG4gIH0pKTtcblxuICByZXR1cm4gZnVuY3Rpb24gKF94NTUpIHtcbiAgICByZXR1cm4gX3JlZjU3LmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gIH07XG59KCkpO1xuKDAsIF9kZWZpbmVQcm9wZXJ0eTJbXCJkZWZhdWx0XCJdKShUcmV6b3JDb25uZWN0LCBcImZpcm13YXJlRXJhc2VcIixcbi8qI19fUFVSRV9fKi9cbmZ1bmN0aW9uICgpIHtcbiAgdmFyIF9yZWY1OCA9ICgwLCBfYXN5bmNUb0dlbmVyYXRvcjJbXCJkZWZhdWx0XCJdKShcbiAgLyojX19QVVJFX18qL1xuICBfcmVnZW5lcmF0b3JbXCJkZWZhdWx0XCJdLm1hcmsoZnVuY3Rpb24gX2NhbGxlZTU4KHBhcmFtcykge1xuICAgIHJldHVybiBfcmVnZW5lcmF0b3JbXCJkZWZhdWx0XCJdLndyYXAoZnVuY3Rpb24gX2NhbGxlZTU4JChfY29udGV4dDU4KSB7XG4gICAgICB3aGlsZSAoMSkge1xuICAgICAgICBzd2l0Y2ggKF9jb250ZXh0NTgucHJldiA9IF9jb250ZXh0NTgubmV4dCkge1xuICAgICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgIF9jb250ZXh0NTgubmV4dCA9IDI7XG4gICAgICAgICAgICByZXR1cm4gY2FsbChfb2JqZWN0U3ByZWFkKHtcbiAgICAgICAgICAgICAgbWV0aG9kOiAnZmlybXdhcmVFcmFzZSdcbiAgICAgICAgICAgIH0sIHBhcmFtcykpO1xuXG4gICAgICAgICAgY2FzZSAyOlxuICAgICAgICAgICAgcmV0dXJuIF9jb250ZXh0NTguYWJydXB0KFwicmV0dXJuXCIsIF9jb250ZXh0NTguc2VudCk7XG5cbiAgICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgY2FzZSBcImVuZFwiOlxuICAgICAgICAgICAgcmV0dXJuIF9jb250ZXh0NTguc3RvcCgpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSwgX2NhbGxlZTU4KTtcbiAgfSkpO1xuXG4gIHJldHVybiBmdW5jdGlvbiAoX3g1Nikge1xuICAgIHJldHVybiBfcmVmNTguYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgfTtcbn0oKSk7XG4oMCwgX2RlZmluZVByb3BlcnR5MltcImRlZmF1bHRcIl0pKFRyZXpvckNvbm5lY3QsIFwiZmlybXdhcmVVcGxvYWRcIixcbi8qI19fUFVSRV9fKi9cbmZ1bmN0aW9uICgpIHtcbiAgdmFyIF9yZWY1OSA9ICgwLCBfYXN5bmNUb0dlbmVyYXRvcjJbXCJkZWZhdWx0XCJdKShcbiAgLyojX19QVVJFX18qL1xuICBfcmVnZW5lcmF0b3JbXCJkZWZhdWx0XCJdLm1hcmsoZnVuY3Rpb24gX2NhbGxlZTU5KHBhcmFtcykge1xuICAgIHJldHVybiBfcmVnZW5lcmF0b3JbXCJkZWZhdWx0XCJdLndyYXAoZnVuY3Rpb24gX2NhbGxlZTU5JChfY29udGV4dDU5KSB7XG4gICAgICB3aGlsZSAoMSkge1xuICAgICAgICBzd2l0Y2ggKF9jb250ZXh0NTkucHJldiA9IF9jb250ZXh0NTkubmV4dCkge1xuICAgICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgIF9jb250ZXh0NTkubmV4dCA9IDI7XG4gICAgICAgICAgICByZXR1cm4gY2FsbChfb2JqZWN0U3ByZWFkKHtcbiAgICAgICAgICAgICAgbWV0aG9kOiAnZmlybXdhcmVVcGxvYWQnXG4gICAgICAgICAgICB9LCBwYXJhbXMpKTtcblxuICAgICAgICAgIGNhc2UgMjpcbiAgICAgICAgICAgIHJldHVybiBfY29udGV4dDU5LmFicnVwdChcInJldHVyblwiLCBfY29udGV4dDU5LnNlbnQpO1xuXG4gICAgICAgICAgY2FzZSAzOlxuICAgICAgICAgIGNhc2UgXCJlbmRcIjpcbiAgICAgICAgICAgIHJldHVybiBfY29udGV4dDU5LnN0b3AoKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sIF9jYWxsZWU1OSk7XG4gIH0pKTtcblxuICByZXR1cm4gZnVuY3Rpb24gKF94NTcpIHtcbiAgICByZXR1cm4gX3JlZjU5LmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gIH07XG59KCkpO1xuKDAsIF9kZWZpbmVQcm9wZXJ0eTJbXCJkZWZhdWx0XCJdKShUcmV6b3JDb25uZWN0LCBcImZpcm13YXJlVXBkYXRlXCIsXG4vKiNfX1BVUkVfXyovXG5mdW5jdGlvbiAoKSB7XG4gIHZhciBfcmVmNjAgPSAoMCwgX2FzeW5jVG9HZW5lcmF0b3IyW1wiZGVmYXVsdFwiXSkoXG4gIC8qI19fUFVSRV9fKi9cbiAgX3JlZ2VuZXJhdG9yW1wiZGVmYXVsdFwiXS5tYXJrKGZ1bmN0aW9uIF9jYWxsZWU2MChwYXJhbXMpIHtcbiAgICByZXR1cm4gX3JlZ2VuZXJhdG9yW1wiZGVmYXVsdFwiXS53cmFwKGZ1bmN0aW9uIF9jYWxsZWU2MCQoX2NvbnRleHQ2MCkge1xuICAgICAgd2hpbGUgKDEpIHtcbiAgICAgICAgc3dpdGNoIChfY29udGV4dDYwLnByZXYgPSBfY29udGV4dDYwLm5leHQpIHtcbiAgICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICBfY29udGV4dDYwLm5leHQgPSAyO1xuICAgICAgICAgICAgcmV0dXJuIGNhbGwoX29iamVjdFNwcmVhZCh7XG4gICAgICAgICAgICAgIG1ldGhvZDogJ2Zpcm13YXJlVXBkYXRlJ1xuICAgICAgICAgICAgfSwgcGFyYW1zKSk7XG5cbiAgICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgICByZXR1cm4gX2NvbnRleHQ2MC5hYnJ1cHQoXCJyZXR1cm5cIiwgX2NvbnRleHQ2MC5zZW50KTtcblxuICAgICAgICAgIGNhc2UgMzpcbiAgICAgICAgICBjYXNlIFwiZW5kXCI6XG4gICAgICAgICAgICByZXR1cm4gX2NvbnRleHQ2MC5zdG9wKCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LCBfY2FsbGVlNjApO1xuICB9KSk7XG5cbiAgcmV0dXJuIGZ1bmN0aW9uIChfeDU4KSB7XG4gICAgcmV0dXJuIF9yZWY2MC5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICB9O1xufSgpKTtcbigwLCBfZGVmaW5lUHJvcGVydHkyW1wiZGVmYXVsdFwiXSkoVHJlem9yQ29ubmVjdCwgXCJyZWNvdmVyeURldmljZVwiLFxuLyojX19QVVJFX18qL1xuZnVuY3Rpb24gKCkge1xuICB2YXIgX3JlZjYxID0gKDAsIF9hc3luY1RvR2VuZXJhdG9yMltcImRlZmF1bHRcIl0pKFxuICAvKiNfX1BVUkVfXyovXG4gIF9yZWdlbmVyYXRvcltcImRlZmF1bHRcIl0ubWFyayhmdW5jdGlvbiBfY2FsbGVlNjEocGFyYW1zKSB7XG4gICAgcmV0dXJuIF9yZWdlbmVyYXRvcltcImRlZmF1bHRcIl0ud3JhcChmdW5jdGlvbiBfY2FsbGVlNjEkKF9jb250ZXh0NjEpIHtcbiAgICAgIHdoaWxlICgxKSB7XG4gICAgICAgIHN3aXRjaCAoX2NvbnRleHQ2MS5wcmV2ID0gX2NvbnRleHQ2MS5uZXh0KSB7XG4gICAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgX2NvbnRleHQ2MS5uZXh0ID0gMjtcbiAgICAgICAgICAgIHJldHVybiBjYWxsKF9vYmplY3RTcHJlYWQoe1xuICAgICAgICAgICAgICBtZXRob2Q6ICdyZWNvdmVyeURldmljZSdcbiAgICAgICAgICAgIH0sIHBhcmFtcykpO1xuXG4gICAgICAgICAgY2FzZSAyOlxuICAgICAgICAgICAgcmV0dXJuIF9jb250ZXh0NjEuYWJydXB0KFwicmV0dXJuXCIsIF9jb250ZXh0NjEuc2VudCk7XG5cbiAgICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgY2FzZSBcImVuZFwiOlxuICAgICAgICAgICAgcmV0dXJuIF9jb250ZXh0NjEuc3RvcCgpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSwgX2NhbGxlZTYxKTtcbiAgfSkpO1xuXG4gIHJldHVybiBmdW5jdGlvbiAoX3g1OSkge1xuICAgIHJldHVybiBfcmVmNjEuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgfTtcbn0oKSk7XG4oMCwgX2RlZmluZVByb3BlcnR5MltcImRlZmF1bHRcIl0pKFRyZXpvckNvbm5lY3QsIFwiZGlzcG9zZVwiLCBmdW5jdGlvbiAoKSB7XG4gIGlmcmFtZS5kaXNwb3NlKCk7XG5cbiAgaWYgKF9wb3B1cE1hbmFnZXIpIHtcbiAgICBfcG9wdXBNYW5hZ2VyLmNsb3NlKCk7XG4gIH1cbn0pO1xuKDAsIF9kZWZpbmVQcm9wZXJ0eTJbXCJkZWZhdWx0XCJdKShUcmV6b3JDb25uZWN0LCBcImNhbmNlbFwiLCBmdW5jdGlvbiAoKSB7XG4gIGlmIChfcG9wdXBNYW5hZ2VyKSB7XG4gICAgX3BvcHVwTWFuYWdlci5lbWl0KFBPUFVQLkNMT1NFRCk7XG4gIH1cbn0pO1xuKDAsIF9kZWZpbmVQcm9wZXJ0eTJbXCJkZWZhdWx0XCJdKShUcmV6b3JDb25uZWN0LCBcInJlbmRlcldlYlVTQkJ1dHRvblwiLCBmdW5jdGlvbiAoY2xhc3NOYW1lKSB7XG4gICgwLCBfYnV0dG9uW1wiZGVmYXVsdFwiXSkoY2xhc3NOYW1lLCBfc2V0dGluZ3Mud2VidXNiU3JjLCBpZnJhbWUub3JpZ2luKTtcbn0pO1xudmFyIF9kZWZhdWx0ID0gVHJlem9yQ29ubmVjdDtcbmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gX2RlZmF1bHQ7Il0sInNvdXJjZVJvb3QiOiIifQ==