(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[2],{

/***/ 2040:
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(2052)["default"];

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

/***/ 2041:
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

/***/ 2042:
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

/***/ 2043:
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

/***/ 2044:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(370);

exports.__esModule = true;
exports.NO_COIN_INFO = exports.BACKEND_NO_URL = exports.WEBUSB_ERROR_MESSAGE = exports.INVALID_PIN_ERROR_MESSAGE = exports.WRONG_PREVIOUS_SESSION_ERROR_MESSAGE = exports.INVALID_STATE = exports.CALL_OVERRIDE = exports.INITIALIZATION_FAILED = exports.DEVICE_USED_ELSEWHERE = exports.PERMISSIONS_NOT_GRANTED = exports.POPUP_CLOSED = exports.INVALID_PARAMETERS = exports.DEVICE_CALL_IN_PROGRESS = exports.DEVICE_NOT_FOUND = exports.WRONG_TRANSPORT_CONFIG = exports.NO_TRANSPORT = exports.MANAGEMENT_NOT_ALLOWED = exports.MANIFEST_NOT_SET = exports.BROWSER_NOT_SUPPORTED = exports.POPUP_TIMEOUT = exports.IFRAME_TIMEOUT = exports.IFRAME_INITIALIZED = exports.IFRAME_BLOCKED = exports.NO_IFRAME = exports.invalidParameter = exports.TrezorError = void 0;

var _inheritsLoose2 = _interopRequireDefault(__webpack_require__(2050));

var _wrapNativeSuper2 = _interopRequireDefault(__webpack_require__(2054));

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

/***/ 2045:
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

/***/ 2046:
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

/***/ 2047:
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

/***/ 2048:
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

/***/ 2049:
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

/***/ 2050:
/***/ (function(module, exports, __webpack_require__) {

var setPrototypeOf = __webpack_require__(2045);

function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  setPrototypeOf(subClass, superClass);
}

module.exports = _inheritsLoose;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ 2051:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(370);

exports.__esModule = true;
exports.create = create;
exports.createAsync = createAsync;
exports.resolveTimeoutPromise = resolveTimeoutPromise;
exports.rejectTimeoutPromise = rejectTimeoutPromise;

var _regenerator = _interopRequireDefault(__webpack_require__(569));

var _asyncToGenerator2 = _interopRequireDefault(__webpack_require__(570));

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

/***/ 2052:
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

/***/ 2053:
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

/***/ 2054:
/***/ (function(module, exports, __webpack_require__) {

var getPrototypeOf = __webpack_require__(2055);

var setPrototypeOf = __webpack_require__(2045);

var isNativeFunction = __webpack_require__(2056);

var construct = __webpack_require__(2057);

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

/***/ 2055:
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

/***/ 2056:
/***/ (function(module, exports) {

function _isNativeFunction(fn) {
  return Function.toString.call(fn).indexOf("[native code]") !== -1;
}

module.exports = _isNativeFunction;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ 2057:
/***/ (function(module, exports, __webpack_require__) {

var setPrototypeOf = __webpack_require__(2045);

var isNativeReflectConstruct = __webpack_require__(2058);

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

/***/ 2058:
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

/***/ 2059:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(2040);

var _interopRequireDefault = __webpack_require__(370);

exports.__esModule = true;
exports["default"] = void 0;

var _regenerator = _interopRequireDefault(__webpack_require__(569));

var _asyncToGenerator2 = _interopRequireDefault(__webpack_require__(570));

var _assertThisInitialized2 = _interopRequireDefault(__webpack_require__(2060));

var _inheritsLoose2 = _interopRequireDefault(__webpack_require__(2050));

var _defineProperty2 = _interopRequireDefault(__webpack_require__(2041));

var _events = _interopRequireDefault(__webpack_require__(49));

var POPUP = _interopRequireWildcard(__webpack_require__(2042));

var ERROR = _interopRequireWildcard(__webpack_require__(2044));

var _showPopupRequest = __webpack_require__(2061);

var _networkUtils = __webpack_require__(2062);

var _deferred = __webpack_require__(2051);

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

/***/ 2060:
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

/***/ 2061:
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

/***/ 2062:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(370);

exports.__esModule = true;
exports.getOrigin = exports.httpRequest = void 0;

var _regenerator = _interopRequireDefault(__webpack_require__(569));

var _asyncToGenerator2 = _interopRequireDefault(__webpack_require__(570));

__webpack_require__(2063);

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

/***/ 2063:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Headers", function() { return Headers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Request", function() { return Request; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Response", function() { return Response; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DOMException", function() { return DOMException; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetch", function() { return fetch; });
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
    throw new TypeError('Invalid character in header field name: "' + name + '"')
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
  this.statusText = options.statusText === undefined ? '' : '' + options.statusText
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


/***/ }),

/***/ 2064:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(370);

exports.__esModule = true;
exports.clearTimeout = exports.dispose = exports.postMessage = exports.init = exports.messagePromises = exports.error = exports.timeout = exports.initPromise = exports.origin = exports.instance = void 0;

var _regenerator = _interopRequireDefault(__webpack_require__(569));

var _asyncToGenerator2 = _interopRequireDefault(__webpack_require__(570));

var _deferred = __webpack_require__(2051);

var _ui = __webpack_require__(2043);

var _errors = __webpack_require__(2044);

var _inlineStyles = _interopRequireDefault(__webpack_require__(2065));

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

/***/ 2065:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports["default"] = void 0;
var css = '.trezorconnect-container{position:fixed!important;display:-webkit-box!important;display:-webkit-flex!important;display:-ms-flexbox!important;display:flex!important;-webkit-box-orient:vertical!important;-webkit-box-direction:normal!important;-webkit-flex-direction:column!important;-ms-flex-direction:column!important;flex-direction:column!important;-webkit-box-align:center!important;-webkit-align-items:center!important;-ms-flex-align:center!important;align-items:center!important;z-index:10000!important;width:100%!important;height:100%!important;top:0!important;left:0!important;background:rgba(0,0,0,.35)!important;overflow:auto!important;padding:20px!important;margin:0!important}.trezorconnect-container .trezorconnect-window{position:relative!important;display:block!important;width:370px!important;font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif!important;margin:auto!important;border-radius:3px!important;background-color:#fff!important;text-align:center!important;overflow:hidden!important}.trezorconnect-container .trezorconnect-window .trezorconnect-head{text-align:left;padding:12px 24px!important;display:-webkit-box!important;display:-webkit-flex!important;display:-ms-flexbox!important;display:flex!important;-webkit-box-align:center!important;-webkit-align-items:center!important;-ms-flex-align:center!important;align-items:center!important}.trezorconnect-container .trezorconnect-window .trezorconnect-head .trezorconnect-logo{-webkit-box-flex:1;-webkit-flex:1;-ms-flex:1;flex:1}.trezorconnect-container .trezorconnect-window .trezorconnect-head .trezorconnect-close{cursor:pointer!important;height:24px!important}.trezorconnect-container .trezorconnect-window .trezorconnect-head .trezorconnect-close svg{fill:#757575;-webkit-transition:fill .3s ease-in-out!important;transition:fill .3s ease-in-out!important}.trezorconnect-container .trezorconnect-window .trezorconnect-head .trezorconnect-close:hover svg{fill:#494949}.trezorconnect-container .trezorconnect-window .trezorconnect-body{padding:24px 24px 32px!important;background:#FBFBFB!important;border-top:1px solid #EBEBEB}.trezorconnect-container .trezorconnect-window .trezorconnect-body h3{color:#505050!important;font-size:16px!important;font-weight:500!important}.trezorconnect-container .trezorconnect-window .trezorconnect-body p{margin:8px 0 24px!important;font-weight:400!important;color:#A9A9A9!important;font-size:12px!important}.trezorconnect-container .trezorconnect-window .trezorconnect-body button{width:100%!important;padding:12px 24px!important;margin:0!important;border-radius:3px!important;font-size:14px!important;font-weight:300!important;cursor:pointer!important;background:#01B757!important;color:#fff!important;border:0!important;-webkit-transition:background-color .3s ease-in-out!important;transition:background-color .3s ease-in-out!important}.trezorconnect-container .trezorconnect-window .trezorconnect-body button:hover{background-color:#00AB51!important}.trezorconnect-container .trezorconnect-window .trezorconnect-body button:active{background-color:#009546!important}/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImlucHV0IiwiJHN0ZGluIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWNBLHlCQUNJLFNBQUEsZ0JBQ0EsUUFBQSxzQkFDQSxRQUFBLHVCQUNBLFFBQUEsc0JBRUEsUUFBQSxlQUNBLG1CQUFBLG1CQUNBLHNCQUFBLGlCQUNBLHVCQUFBLGlCQUNBLG1CQUFBLGlCQUNBLGVBQUEsaUJBRUEsa0JBQUEsaUJBQ0Esb0JBQUEsaUJBQ0EsZUFBQSxpQkNmTSxZQUFhLGlCREFyQixRQUFTLGdCQWtCSCxNQUFBLGVBQ0EsT0FBQSxlQUNBLElBQUEsWUFDQSxLQUFBLFlBQ0EsV0FBQSwwQkFDQSxTQUFBLGVBQ0EsUUFBQSxlQUNBLE9BQUEsWUNkUiwrQ0RYRSxTQUFVLG1CQTZCQSxRQUFBLGdCQUNBLE1BQUEsZ0JBQ0EsWUFBQSxjQUFBLG1CQUFBLFdBQUEsT0FBQSxpQkFBQSxNQUFBLHFCQUNBLE9BQUEsZUNmVixjQUFlLGNEakJmLGlCQWlCRSxlQWtCWSxXQUFBLGlCQ2ZkLFNBQVUsaUJEbUJJLG1FQUNBLFdBQUEsS0NoQmQsUUFBUyxLQUFLLGVEeEJkLFFBQVMsc0JBMENTLFFBQUEsdUJBQ0EsUUFBQSxzQkNmbEIsUUFBUyxlRGlCSyxrQkE1QlosaUJBOEJvQixvQkFBQSxpQkNoQmxCLGVBQWdCLGlCRC9CWixZQWlCTixpQkFzQ1EsdUZBQ0EsaUJBQUEsRUNwQlYsYUFBYyxFRHBDVixTQUFVLEVBMkRBLEtBQUEsRUFFQSx3RkNwQmQsT0FBUSxrQkR6Q1IsT0FBUSxlQWlFTSw0RkFDQSxLQUFBLFFBQ0EsbUJBQUEsS0FBQSxJQUFBLHNCQ3BCZCxXQUFZLEtBQUssSUFBSyxzQkR3QlIsa0dBQ0EsS0FBQSxRQUVBLG1FQUNBLFFBQUEsS0FBQSxLQUFBLGVBQ0EsV0FBQSxrQkFDQSxXQUFBLElBQUEsTUFBQSxRQUVBLHNFQUNBLE1BQUEsa0JBQ0EsVUFBQSxlQ3JCZCxZQUFhLGNEd0JLLHFFQ3JCbEIsT0FBUSxJQUFJLEVBQUksZUR3QkYsWUFBQSxjQUNJLE1BQUEsa0JDdEJsQixVQUFXLGVBRWIsMEVBQ0UsTUFBTyxlQUNQLFFBQVMsS0FBSyxlQUNkLE9BQVEsWUFDUixjQUFlLGNBQ2YsVUFBVyxlQUNYLFlBQWEsY0FDYixPQUFRLGtCQUNSLFdBQVksa0JBQ1osTUFBTyxlQUNQLE9BQVEsWUFDUixtQkFBb0IsaUJBQWlCLElBQUssc0JBQzFDLFdBQVksaUJBQWlCLElBQUssc0JBRXBDLGdGQUNFLGlCQUFrQixrQkFFcEIsaUZBQ0UsaUJBQWtCIn0= */';
var _default = css;
exports["default"] = _default;

/***/ }),

/***/ 2066:
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

/***/ 2067:
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
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(18)))

/***/ }),

/***/ 2068:
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

/***/ 2069:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(370);

exports.__esModule = true;
exports.parse = exports.DEFAULT_PRIORITY = void 0;

var _defineProperty2 = _interopRequireDefault(__webpack_require__(2041));

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

/***/ 2070:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(2040);

exports.__esModule = true;

var _constants = __webpack_require__(2046);

var TRANSPORT = _interopRequireWildcard(__webpack_require__(2047));

var POPUP = _interopRequireWildcard(__webpack_require__(2042));

var UI = _interopRequireWildcard(__webpack_require__(2043));

var DEVICE = _interopRequireWildcard(__webpack_require__(2048));

var P = _interopRequireWildcard(__webpack_require__(2071));

var R = _interopRequireWildcard(__webpack_require__(2072));

Object.keys(R).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  exports[key] = R[key];
});

var CARDANO = _interopRequireWildcard(__webpack_require__(2073));

var RIPPLE = _interopRequireWildcard(__webpack_require__(2074));

var ETHEREUM = _interopRequireWildcard(__webpack_require__(2075));

var NEM = _interopRequireWildcard(__webpack_require__(2076));

var STELLAR = _interopRequireWildcard(__webpack_require__(2077));

var LISK = _interopRequireWildcard(__webpack_require__(2078));

var TEZOS = _interopRequireWildcard(__webpack_require__(2079));

var EOS = _interopRequireWildcard(__webpack_require__(2080));

var _coinInfo = __webpack_require__(2081);

Object.keys(_coinInfo).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  exports[key] = _coinInfo[key];
});

/***/ }),

/***/ 2071:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/***/ }),

/***/ 2072:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/***/ }),

/***/ 2073:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/***/ }),

/***/ 2074:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/***/ }),

/***/ 2075:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/***/ }),

/***/ 2076:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/***/ }),

/***/ 2077:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/***/ }),

/***/ 2078:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/***/ }),

/***/ 2079:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/***/ }),

/***/ 2080:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/***/ }),

/***/ 2081:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/***/ }),

/***/ 2082:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(2040);

var BLOCKCHAIN = _interopRequireWildcard(__webpack_require__(2049));

/***/ }),

/***/ 2083:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/***/ }),

/***/ 2084:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(2040);

var _interopRequireDefault = __webpack_require__(370);

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

var _defineProperty2 = _interopRequireDefault(__webpack_require__(2041));

var _regenerator = _interopRequireDefault(__webpack_require__(569));

var _asyncToGenerator2 = _interopRequireDefault(__webpack_require__(570));

var _events = _interopRequireDefault(__webpack_require__(49));

var _constants = __webpack_require__(2046);

exports.UI_EVENT = _constants.UI_EVENT;
exports.DEVICE_EVENT = _constants.DEVICE_EVENT;
exports.RESPONSE_EVENT = _constants.RESPONSE_EVENT;
exports.TRANSPORT_EVENT = _constants.TRANSPORT_EVENT;
exports.BLOCKCHAIN_EVENT = _constants.BLOCKCHAIN_EVENT;

var TRANSPORT = _interopRequireWildcard(__webpack_require__(2047));

exports.TRANSPORT = TRANSPORT;

var POPUP = _interopRequireWildcard(__webpack_require__(2042));

var IFRAME = _interopRequireWildcard(__webpack_require__(2053));

var UI = _interopRequireWildcard(__webpack_require__(2043));

exports.UI = UI;

var DEVICE = _interopRequireWildcard(__webpack_require__(2048));

exports.DEVICE = DEVICE;

var BLOCKCHAIN = _interopRequireWildcard(__webpack_require__(2049));

exports.BLOCKCHAIN = BLOCKCHAIN;

var ERROR = _interopRequireWildcard(__webpack_require__(2044));

var _PopupManager = _interopRequireDefault(__webpack_require__(2059));

var iframe = _interopRequireWildcard(__webpack_require__(2064));

var _button = _interopRequireDefault(__webpack_require__(2066));

var _debug = _interopRequireWildcard(__webpack_require__(2067));

var _message = __webpack_require__(2068);

var _ConnectSettings = __webpack_require__(2069);

var $T = _interopRequireWildcard(__webpack_require__(2070));

var _blockchainEvent = __webpack_require__(2082);

Object.keys(_blockchainEvent).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  exports[key] = _blockchainEvent[key];
});

var _account = __webpack_require__(2083);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2RlZmluZVByb3BlcnR5LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy90cmV6b3ItY29ubmVjdC9saWIvY29uc3RhbnRzL3BvcHVwLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy90cmV6b3ItY29ubmVjdC9saWIvY29uc3RhbnRzL3VpLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy90cmV6b3ItY29ubmVjdC9saWIvY29uc3RhbnRzL2Vycm9ycy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9zZXRQcm90b3R5cGVPZi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdHJlem9yLWNvbm5lY3QvbGliL2NvbnN0YW50cy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdHJlem9yLWNvbm5lY3QvbGliL2NvbnN0YW50cy90cmFuc3BvcnQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3RyZXpvci1jb25uZWN0L2xpYi9jb25zdGFudHMvZGV2aWNlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy90cmV6b3ItY29ubmVjdC9saWIvY29uc3RhbnRzL2Jsb2NrY2hhaW4uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW5oZXJpdHNMb29zZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdHJlem9yLWNvbm5lY3QvbGliL3V0aWxzL2RlZmVycmVkLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL3R5cGVvZi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdHJlem9yLWNvbm5lY3QvbGliL2NvbnN0YW50cy9pZnJhbWUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvd3JhcE5hdGl2ZVN1cGVyLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2dldFByb3RvdHlwZU9mLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2lzTmF0aXZlRnVuY3Rpb24uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvY29uc3RydWN0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2lzTmF0aXZlUmVmbGVjdENvbnN0cnVjdC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdHJlem9yLWNvbm5lY3QvbGliL3BvcHVwL1BvcHVwTWFuYWdlci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3RyZXpvci1jb25uZWN0L2xpYi9wb3B1cC9zaG93UG9wdXBSZXF1ZXN0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy90cmV6b3ItY29ubmVjdC9saWIvdXRpbHMvbmV0d29ya1V0aWxzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy93aGF0d2ctZmV0Y2gvZmV0Y2guanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3RyZXpvci1jb25uZWN0L2xpYi9pZnJhbWUvYnVpbGRlci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdHJlem9yLWNvbm5lY3QvbGliL2lmcmFtZS9pbmxpbmUtc3R5bGVzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy90cmV6b3ItY29ubmVjdC9saWIvd2VidXNiL2J1dHRvbi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdHJlem9yLWNvbm5lY3QvbGliL3V0aWxzL2RlYnVnLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy90cmV6b3ItY29ubmVjdC9saWIvbWVzc2FnZS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdHJlem9yLWNvbm5lY3QvbGliL2RhdGEvQ29ubmVjdFNldHRpbmdzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy90cmV6b3ItY29ubmVjdC9saWIvdHlwZXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3RyZXpvci1jb25uZWN0L2xpYi90eXBlcy9ibG9ja2NoYWluRXZlbnQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3RyZXpvci1jb25uZWN0L2xpYi9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLGNBQWMsbUJBQU8sQ0FBQyxJQUErQjs7QUFFckQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSw2RTs7Ozs7OztBQ3JEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxHQUFHO0FBQ0g7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsNkU7Ozs7Ozs7O0FDaEJhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7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QUVIO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSw4Qjs7Ozs7Ozs7QUNwR0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYztBQUNkO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVPO0FBQ1A7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLEdBQUc7QUFDSDtBQUNBO0FBQ0EsS0FBSztBQUNMLEdBQUc7QUFDSDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxpQkFBaUIsaUJBQWlCO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsS0FBSztBQUNMO0FBQ0EsS0FBSztBQUNMO0FBQ0EsS0FBSztBQUNMO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQSxxREFBcUQ7QUFDckQsT0FBTztBQUNQO0FBQ0EsT0FBTztBQUNQLDRFQUE0RTtBQUM1RTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQSxPQUFPO0FBQ1A7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsS0FBSztBQUNMO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7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QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVzs7QUFFWDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7O0FBRVg7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNILENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0gsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSCxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhOztBQUViO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7O0FBRWI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTs7QUFFYjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsR0FBRzs7QUFFSDtBQUNB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YjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhOztBQUViO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7O0FBRWI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTs7QUFFYjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhOztBQUViO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7O0FBRWI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBLGFBQWE7O0FBRWI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTs7QUFFYjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhOztBQUViO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7O0FBRWI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTs7QUFFYjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhOztBQUViO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQSxhQUFhOztBQUViO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7O0FBRWI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTs7QUFFYjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhOztBQUViO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQSxhQUFhOztBQUViO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7O0FBRWI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTs7QUFFYjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhOztBQUViO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7O0FBRWI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBLGFBQWE7O0FBRWI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTs7QUFFYjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhOztBQUViO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7O0FBRWI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBLGFBQWE7O0FBRWI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTs7QUFFYjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhOztBQUViO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7O0FBRWI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBLGFBQWE7O0FBRWI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTs7QUFFYjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0EsYUFBYTs7QUFFYjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhOztBQUViO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7O0FBRWI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTs7QUFFYjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhOztBQUViO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7O0FBRWI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTs7QUFFYjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhOztBQUViO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7O0FBRWI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7O0FBRVg7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNILENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7O0FBRWI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTs7QUFFYjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhOztBQUViO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7O0FBRWI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTs7QUFFYjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBLDhCIiwiZmlsZSI6IjIuNjE5MjE4ZGM1MDFiNjk3OTRmYzUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgX3R5cGVvZiA9IHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL3R5cGVvZlwiKVtcImRlZmF1bHRcIl07XG5cbmZ1bmN0aW9uIF9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZShub2RlSW50ZXJvcCkge1xuICBpZiAodHlwZW9mIFdlYWtNYXAgIT09IFwiZnVuY3Rpb25cIikgcmV0dXJuIG51bGw7XG4gIHZhciBjYWNoZUJhYmVsSW50ZXJvcCA9IG5ldyBXZWFrTWFwKCk7XG4gIHZhciBjYWNoZU5vZGVJbnRlcm9wID0gbmV3IFdlYWtNYXAoKTtcbiAgcmV0dXJuIChfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUgPSBmdW5jdGlvbiBfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUobm9kZUludGVyb3ApIHtcbiAgICByZXR1cm4gbm9kZUludGVyb3AgPyBjYWNoZU5vZGVJbnRlcm9wIDogY2FjaGVCYWJlbEludGVyb3A7XG4gIH0pKG5vZGVJbnRlcm9wKTtcbn1cblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQob2JqLCBub2RlSW50ZXJvcCkge1xuICBpZiAoIW5vZGVJbnRlcm9wICYmIG9iaiAmJiBvYmouX19lc01vZHVsZSkge1xuICAgIHJldHVybiBvYmo7XG4gIH1cblxuICBpZiAob2JqID09PSBudWxsIHx8IF90eXBlb2Yob2JqKSAhPT0gXCJvYmplY3RcIiAmJiB0eXBlb2Ygb2JqICE9PSBcImZ1bmN0aW9uXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgXCJkZWZhdWx0XCI6IG9ialxuICAgIH07XG4gIH1cblxuICB2YXIgY2FjaGUgPSBfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUobm9kZUludGVyb3ApO1xuXG4gIGlmIChjYWNoZSAmJiBjYWNoZS5oYXMob2JqKSkge1xuICAgIHJldHVybiBjYWNoZS5nZXQob2JqKTtcbiAgfVxuXG4gIHZhciBuZXdPYmogPSB7fTtcbiAgdmFyIGhhc1Byb3BlcnR5RGVzY3JpcHRvciA9IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSAmJiBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yO1xuXG4gIGZvciAodmFyIGtleSBpbiBvYmopIHtcbiAgICBpZiAoa2V5ICE9PSBcImRlZmF1bHRcIiAmJiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBrZXkpKSB7XG4gICAgICB2YXIgZGVzYyA9IGhhc1Byb3BlcnR5RGVzY3JpcHRvciA/IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Iob2JqLCBrZXkpIDogbnVsbDtcblxuICAgICAgaWYgKGRlc2MgJiYgKGRlc2MuZ2V0IHx8IGRlc2Muc2V0KSkge1xuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkobmV3T2JqLCBrZXksIGRlc2MpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbmV3T2JqW2tleV0gPSBvYmpba2V5XTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBuZXdPYmpbXCJkZWZhdWx0XCJdID0gb2JqO1xuXG4gIGlmIChjYWNoZSkge1xuICAgIGNhY2hlLnNldChvYmosIG5ld09iaik7XG4gIH1cblxuICByZXR1cm4gbmV3T2JqO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkO1xubW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHMsIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlOyIsImZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgdmFsdWUpIHtcbiAgaWYgKGtleSBpbiBvYmopIHtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHtcbiAgICAgIHZhbHVlOiB2YWx1ZSxcbiAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICB3cml0YWJsZTogdHJ1ZVxuICAgIH0pO1xuICB9IGVsc2Uge1xuICAgIG9ialtrZXldID0gdmFsdWU7XG4gIH1cblxuICByZXR1cm4gb2JqO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9kZWZpbmVQcm9wZXJ0eTtcbm1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzLCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTsiLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5leHBvcnRzLkNMT1NFX1dJTkRPVyA9IGV4cG9ydHMuQ0FOQ0VMX1BPUFVQX1JFUVVFU1QgPSBleHBvcnRzLkNMT1NFRCA9IGV4cG9ydHMuQ0xPU0UgPSBleHBvcnRzLkhBTkRTSEFLRSA9IGV4cG9ydHMuT1BFTl9USU1FT1VUID0gZXhwb3J0cy5PUEVORUQgPSBleHBvcnRzLkxPRyA9IGV4cG9ydHMuRVhURU5TSU9OX1VTQl9QRVJNSVNTSU9OUyA9IGV4cG9ydHMuRVhURU5TSU9OX1JFUVVFU1QgPSBleHBvcnRzLkJPT1RTVFJBUCA9IGV4cG9ydHMuSU5JVCA9IHZvaWQgMDtcbnZhciBJTklUID0gJ3BvcHVwLWluaXQnO1xuZXhwb3J0cy5JTklUID0gSU5JVDtcbnZhciBCT09UU1RSQVAgPSAncG9wdXAtYm9vdHN0cmFwJztcbmV4cG9ydHMuQk9PVFNUUkFQID0gQk9PVFNUUkFQO1xudmFyIEVYVEVOU0lPTl9SRVFVRVNUID0gJ3BvcHVwLWV4dGVuc2lvbl9yZXF1ZXN0JztcbmV4cG9ydHMuRVhURU5TSU9OX1JFUVVFU1QgPSBFWFRFTlNJT05fUkVRVUVTVDtcbnZhciBFWFRFTlNJT05fVVNCX1BFUk1JU1NJT05TID0gJ29wZW4tdXNiLXBlcm1pc3Npb25zJztcbmV4cG9ydHMuRVhURU5TSU9OX1VTQl9QRVJNSVNTSU9OUyA9IEVYVEVOU0lPTl9VU0JfUEVSTUlTU0lPTlM7XG52YXIgTE9HID0gJ3BvcHVwLWxvZyc7XG5leHBvcnRzLkxPRyA9IExPRztcbnZhciBPUEVORUQgPSAncG9wdXAtb3BlbmVkJztcbmV4cG9ydHMuT1BFTkVEID0gT1BFTkVEO1xudmFyIE9QRU5fVElNRU9VVCA9ICdwb3B1cC1vcGVuX3RpbWVvdXQnO1xuZXhwb3J0cy5PUEVOX1RJTUVPVVQgPSBPUEVOX1RJTUVPVVQ7XG52YXIgSEFORFNIQUtFID0gJ3BvcHVwLWhhbmRzaGFrZSc7XG5leHBvcnRzLkhBTkRTSEFLRSA9IEhBTkRTSEFLRTtcbnZhciBDTE9TRSA9ICdwb3B1cC1jbG9zZSc7XG5leHBvcnRzLkNMT1NFID0gQ0xPU0U7XG52YXIgQ0xPU0VEID0gJ3BvcHVwLWNsb3NlZCc7XG5leHBvcnRzLkNMT1NFRCA9IENMT1NFRDtcbnZhciBDQU5DRUxfUE9QVVBfUkVRVUVTVCA9ICd1aS1jYW5jZWwtcG9wdXAtcmVxdWVzdCc7XG5leHBvcnRzLkNBTkNFTF9QT1BVUF9SRVFVRVNUID0gQ0FOQ0VMX1BPUFVQX1JFUVVFU1Q7XG52YXIgQ0xPU0VfV0lORE9XID0gJ3dpbmRvdy5jbG9zZSc7XG5leHBvcnRzLkNMT1NFX1dJTkRPVyA9IENMT1NFX1dJTkRPVzsiLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5leHBvcnRzLkFERFJFU1NfVkFMSURBVElPTiA9IGV4cG9ydHMuQlVORExFX1BST0dSRVNTID0gZXhwb3J0cy5MT0dJTl9DSEFMTEVOR0VfUkVTUE9OU0UgPSBleHBvcnRzLkxPR0lOX0NIQUxMRU5HRV9SRVFVRVNUID0gZXhwb3J0cy5DVVNUT01fTUVTU0FHRV9SRVNQT05TRSA9IGV4cG9ydHMuQ1VTVE9NX01FU1NBR0VfUkVRVUVTVCA9IGV4cG9ydHMuQ0hBTkdFX1NFVFRJTkdTID0gZXhwb3J0cy5SRUNFSVZFX1dPUkQgPSBleHBvcnRzLlJFQ0VJVkVfRkVFID0gZXhwb3J0cy5SRUNFSVZFX0FDQ09VTlQgPSBleHBvcnRzLkNIQU5HRV9BQ0NPVU5UID0gZXhwb3J0cy5SRUNFSVZFX0RFVklDRSA9IGV4cG9ydHMuUkVDRUlWRV9QQVNTUEhSQVNFID0gZXhwb3J0cy5SRUNFSVZFX1BJTiA9IGV4cG9ydHMuUkVDRUlWRV9DT05GSVJNQVRJT04gPSBleHBvcnRzLlJFQ0VJVkVfUEVSTUlTU0lPTiA9IGV4cG9ydHMuUkVRVUVTVF9XT1JEID0gZXhwb3J0cy5SRVFVRVNUX0JVVFRPTiA9IGV4cG9ydHMuSU5TVUZGSUNJRU5UX0ZVTkRTID0gZXhwb3J0cy5VUERBVEVfQ1VTVE9NX0ZFRSA9IGV4cG9ydHMuU0VMRUNUX0ZFRSA9IGV4cG9ydHMuU0VMRUNUX0FDQ09VTlQgPSBleHBvcnRzLlNFTEVDVF9ERVZJQ0UgPSBleHBvcnRzLlNFVF9PUEVSQVRJT04gPSBleHBvcnRzLkxPQURJTkcgPSBleHBvcnRzLkNPTk5FQ1QgPSBleHBvcnRzLklOVkFMSURfUEFTU1BIUkFTRV9BQ1RJT04gPSBleHBvcnRzLklOVkFMSURfUEFTU1BIUkFTRSA9IGV4cG9ydHMuUkVRVUVTVF9QQVNTUEhSQVNFX09OX0RFVklDRSA9IGV4cG9ydHMuUkVRVUVTVF9QQVNTUEhSQVNFID0gZXhwb3J0cy5JTlZBTElEX1BJTiA9IGV4cG9ydHMuUkVRVUVTVF9QSU4gPSBleHBvcnRzLlJFUVVFU1RfQ09ORklSTUFUSU9OID0gZXhwb3J0cy5SRVFVRVNUX1BFUk1JU1NJT04gPSBleHBvcnRzLkNMT1NFX1VJX1dJTkRPVyA9IGV4cG9ydHMuUkVRVUVTVF9VSV9XSU5ET1cgPSBleHBvcnRzLlJFQ0VJVkVfQlJPV1NFUiA9IGV4cG9ydHMuQlJPV1NFUl9PVVREQVRFRCA9IGV4cG9ydHMuQlJPV1NFUl9OT1RfU1VQUE9SVEVEID0gZXhwb3J0cy5ERVZJQ0VfTkVFRFNfQkFDS1VQID0gZXhwb3J0cy5GSVJNV0FSRV9OT1RfSU5TVEFMTEVEID0gZXhwb3J0cy5GSVJNV0FSRV9OT1RfQ09NUEFUSUJMRSA9IGV4cG9ydHMuRklSTVdBUkVfTk9UX1NVUFBPUlRFRCA9IGV4cG9ydHMuRklSTVdBUkVfT1VUREFURUQgPSBleHBvcnRzLkZJUk1XQVJFX09MRCA9IGV4cG9ydHMuU0VFRExFU1MgPSBleHBvcnRzLklOSVRJQUxJWkUgPSBleHBvcnRzLlJFUVVJUkVfTU9ERSA9IGV4cG9ydHMuTk9UX0lOX0JPT1RMT0FERVIgPSBleHBvcnRzLkJPT1RMT0FERVIgPSBleHBvcnRzLlRSQU5TUE9SVCA9IGV4cG9ydHMuSUZSQU1FX0hBTkRTSEFLRSA9IHZvaWQgMDtcbnZhciBJRlJBTUVfSEFORFNIQUtFID0gJ2lmcmFtZS1oYW5kc2hha2UnO1xuZXhwb3J0cy5JRlJBTUVfSEFORFNIQUtFID0gSUZSQU1FX0hBTkRTSEFLRTtcbnZhciBUUkFOU1BPUlQgPSAndWktbm9fdHJhbnNwb3J0JztcbmV4cG9ydHMuVFJBTlNQT1JUID0gVFJBTlNQT1JUO1xudmFyIEJPT1RMT0FERVIgPSAndWktZGV2aWNlX2Jvb3Rsb2FkZXJfbW9kZSc7XG5leHBvcnRzLkJPT1RMT0FERVIgPSBCT09UTE9BREVSO1xudmFyIE5PVF9JTl9CT09UTE9BREVSID0gJ3VpLWRldmljZV9ub3RfaW5fYm9vdGxvYWRlcl9tb2RlJztcbmV4cG9ydHMuTk9UX0lOX0JPT1RMT0FERVIgPSBOT1RfSU5fQk9PVExPQURFUjtcbnZhciBSRVFVSVJFX01PREUgPSAndWktZGV2aWNlX3JlcXVpcmVfbW9kZSc7XG5leHBvcnRzLlJFUVVJUkVfTU9ERSA9IFJFUVVJUkVfTU9ERTtcbnZhciBJTklUSUFMSVpFID0gJ3VpLWRldmljZV9ub3RfaW5pdGlhbGl6ZWQnO1xuZXhwb3J0cy5JTklUSUFMSVpFID0gSU5JVElBTElaRTtcbnZhciBTRUVETEVTUyA9ICd1aS1kZXZpY2Vfc2VlZGxlc3MnO1xuZXhwb3J0cy5TRUVETEVTUyA9IFNFRURMRVNTO1xudmFyIEZJUk1XQVJFX09MRCA9ICd1aS1kZXZpY2VfZmlybXdhcmVfb2xkJztcbmV4cG9ydHMuRklSTVdBUkVfT0xEID0gRklSTVdBUkVfT0xEO1xudmFyIEZJUk1XQVJFX09VVERBVEVEID0gJ3VpLWRldmljZV9maXJtd2FyZV9vdXRkYXRlZCc7XG5leHBvcnRzLkZJUk1XQVJFX09VVERBVEVEID0gRklSTVdBUkVfT1VUREFURUQ7XG52YXIgRklSTVdBUkVfTk9UX1NVUFBPUlRFRCA9ICd1aS1kZXZpY2VfZmlybXdhcmVfdW5zdXBwb3J0ZWQnO1xuZXhwb3J0cy5GSVJNV0FSRV9OT1RfU1VQUE9SVEVEID0gRklSTVdBUkVfTk9UX1NVUFBPUlRFRDtcbnZhciBGSVJNV0FSRV9OT1RfQ09NUEFUSUJMRSA9ICd1aS1kZXZpY2VfZmlybXdhcmVfbm90X2NvbXBhdGlibGUnO1xuZXhwb3J0cy5GSVJNV0FSRV9OT1RfQ09NUEFUSUJMRSA9IEZJUk1XQVJFX05PVF9DT01QQVRJQkxFO1xudmFyIEZJUk1XQVJFX05PVF9JTlNUQUxMRUQgPSAndWktZGV2aWNlX2Zpcm13YXJlX25vdF9pbnN0YWxsZWQnO1xuZXhwb3J0cy5GSVJNV0FSRV9OT1RfSU5TVEFMTEVEID0gRklSTVdBUkVfTk9UX0lOU1RBTExFRDtcbnZhciBERVZJQ0VfTkVFRFNfQkFDS1VQID0gJ3VpLWRldmljZV9uZWVkc19iYWNrdXAnO1xuZXhwb3J0cy5ERVZJQ0VfTkVFRFNfQkFDS1VQID0gREVWSUNFX05FRURTX0JBQ0tVUDtcbnZhciBCUk9XU0VSX05PVF9TVVBQT1JURUQgPSAndWktYnJvd3Nlcl9ub3Rfc3VwcG9ydGVkJztcbmV4cG9ydHMuQlJPV1NFUl9OT1RfU1VQUE9SVEVEID0gQlJPV1NFUl9OT1RfU1VQUE9SVEVEO1xudmFyIEJST1dTRVJfT1VUREFURUQgPSAndWktYnJvd3Nlcl9vdXRkYXRlZCc7XG5leHBvcnRzLkJST1dTRVJfT1VUREFURUQgPSBCUk9XU0VSX09VVERBVEVEO1xudmFyIFJFQ0VJVkVfQlJPV1NFUiA9ICd1aS1yZWNlaXZlX2Jyb3dzZXInO1xuZXhwb3J0cy5SRUNFSVZFX0JST1dTRVIgPSBSRUNFSVZFX0JST1dTRVI7XG52YXIgUkVRVUVTVF9VSV9XSU5ET1cgPSAndWktcmVxdWVzdF93aW5kb3cnO1xuZXhwb3J0cy5SRVFVRVNUX1VJX1dJTkRPVyA9IFJFUVVFU1RfVUlfV0lORE9XO1xudmFyIENMT1NFX1VJX1dJTkRPVyA9ICd1aS1jbG9zZV93aW5kb3cnO1xuZXhwb3J0cy5DTE9TRV9VSV9XSU5ET1cgPSBDTE9TRV9VSV9XSU5ET1c7XG52YXIgUkVRVUVTVF9QRVJNSVNTSU9OID0gJ3VpLXJlcXVlc3RfcGVybWlzc2lvbic7XG5leHBvcnRzLlJFUVVFU1RfUEVSTUlTU0lPTiA9IFJFUVVFU1RfUEVSTUlTU0lPTjtcbnZhciBSRVFVRVNUX0NPTkZJUk1BVElPTiA9ICd1aS1yZXF1ZXN0X2NvbmZpcm1hdGlvbic7XG5leHBvcnRzLlJFUVVFU1RfQ09ORklSTUFUSU9OID0gUkVRVUVTVF9DT05GSVJNQVRJT047XG52YXIgUkVRVUVTVF9QSU4gPSAndWktcmVxdWVzdF9waW4nO1xuZXhwb3J0cy5SRVFVRVNUX1BJTiA9IFJFUVVFU1RfUElOO1xudmFyIElOVkFMSURfUElOID0gJ3VpLWludmFsaWRfcGluJztcbmV4cG9ydHMuSU5WQUxJRF9QSU4gPSBJTlZBTElEX1BJTjtcbnZhciBSRVFVRVNUX1BBU1NQSFJBU0UgPSAndWktcmVxdWVzdF9wYXNzcGhyYXNlJztcbmV4cG9ydHMuUkVRVUVTVF9QQVNTUEhSQVNFID0gUkVRVUVTVF9QQVNTUEhSQVNFO1xudmFyIFJFUVVFU1RfUEFTU1BIUkFTRV9PTl9ERVZJQ0UgPSAndWktcmVxdWVzdF9wYXNzcGhyYXNlX29uX2RldmljZSc7XG5leHBvcnRzLlJFUVVFU1RfUEFTU1BIUkFTRV9PTl9ERVZJQ0UgPSBSRVFVRVNUX1BBU1NQSFJBU0VfT05fREVWSUNFO1xudmFyIElOVkFMSURfUEFTU1BIUkFTRSA9ICd1aS1pbnZhbGlkX3Bhc3NwaHJhc2UnO1xuZXhwb3J0cy5JTlZBTElEX1BBU1NQSFJBU0UgPSBJTlZBTElEX1BBU1NQSFJBU0U7XG52YXIgSU5WQUxJRF9QQVNTUEhSQVNFX0FDVElPTiA9ICd1aS1pbnZhbGlkX3Bhc3NwaHJhc2VfYWN0aW9uJztcbmV4cG9ydHMuSU5WQUxJRF9QQVNTUEhSQVNFX0FDVElPTiA9IElOVkFMSURfUEFTU1BIUkFTRV9BQ1RJT047XG52YXIgQ09OTkVDVCA9ICd1aS1jb25uZWN0JztcbmV4cG9ydHMuQ09OTkVDVCA9IENPTk5FQ1Q7XG52YXIgTE9BRElORyA9ICd1aS1sb2FkaW5nJztcbmV4cG9ydHMuTE9BRElORyA9IExPQURJTkc7XG52YXIgU0VUX09QRVJBVElPTiA9ICd1aS1zZXRfb3BlcmF0aW9uJztcbmV4cG9ydHMuU0VUX09QRVJBVElPTiA9IFNFVF9PUEVSQVRJT047XG52YXIgU0VMRUNUX0RFVklDRSA9ICd1aS1zZWxlY3RfZGV2aWNlJztcbmV4cG9ydHMuU0VMRUNUX0RFVklDRSA9IFNFTEVDVF9ERVZJQ0U7XG52YXIgU0VMRUNUX0FDQ09VTlQgPSAndWktc2VsZWN0X2FjY291bnQnO1xuZXhwb3J0cy5TRUxFQ1RfQUNDT1VOVCA9IFNFTEVDVF9BQ0NPVU5UO1xudmFyIFNFTEVDVF9GRUUgPSAndWktc2VsZWN0X2ZlZSc7XG5leHBvcnRzLlNFTEVDVF9GRUUgPSBTRUxFQ1RfRkVFO1xudmFyIFVQREFURV9DVVNUT01fRkVFID0gJ3VpLXVwZGF0ZV9jdXN0b21fZmVlJztcbmV4cG9ydHMuVVBEQVRFX0NVU1RPTV9GRUUgPSBVUERBVEVfQ1VTVE9NX0ZFRTtcbnZhciBJTlNVRkZJQ0lFTlRfRlVORFMgPSAndWktaW5zdWZmaWNpZW50X2Z1bmRzJztcbmV4cG9ydHMuSU5TVUZGSUNJRU5UX0ZVTkRTID0gSU5TVUZGSUNJRU5UX0ZVTkRTO1xudmFyIFJFUVVFU1RfQlVUVE9OID0gJ3VpLWJ1dHRvbic7XG5leHBvcnRzLlJFUVVFU1RfQlVUVE9OID0gUkVRVUVTVF9CVVRUT047XG52YXIgUkVRVUVTVF9XT1JEID0gJ3VpLXJlcXVlc3Rfd29yZCc7XG5leHBvcnRzLlJFUVVFU1RfV09SRCA9IFJFUVVFU1RfV09SRDtcbnZhciBSRUNFSVZFX1BFUk1JU1NJT04gPSAndWktcmVjZWl2ZV9wZXJtaXNzaW9uJztcbmV4cG9ydHMuUkVDRUlWRV9QRVJNSVNTSU9OID0gUkVDRUlWRV9QRVJNSVNTSU9OO1xudmFyIFJFQ0VJVkVfQ09ORklSTUFUSU9OID0gJ3VpLXJlY2VpdmVfY29uZmlybWF0aW9uJztcbmV4cG9ydHMuUkVDRUlWRV9DT05GSVJNQVRJT04gPSBSRUNFSVZFX0NPTkZJUk1BVElPTjtcbnZhciBSRUNFSVZFX1BJTiA9ICd1aS1yZWNlaXZlX3Bpbic7XG5leHBvcnRzLlJFQ0VJVkVfUElOID0gUkVDRUlWRV9QSU47XG52YXIgUkVDRUlWRV9QQVNTUEhSQVNFID0gJ3VpLXJlY2VpdmVfcGFzc3BocmFzZSc7XG5leHBvcnRzLlJFQ0VJVkVfUEFTU1BIUkFTRSA9IFJFQ0VJVkVfUEFTU1BIUkFTRTtcbnZhciBSRUNFSVZFX0RFVklDRSA9ICd1aS1yZWNlaXZlX2RldmljZSc7XG5leHBvcnRzLlJFQ0VJVkVfREVWSUNFID0gUkVDRUlWRV9ERVZJQ0U7XG52YXIgQ0hBTkdFX0FDQ09VTlQgPSAndWktY2hhbmdlX2FjY291bnQnO1xuZXhwb3J0cy5DSEFOR0VfQUNDT1VOVCA9IENIQU5HRV9BQ0NPVU5UO1xudmFyIFJFQ0VJVkVfQUNDT1VOVCA9ICd1aS1yZWNlaXZlX2FjY291bnQnO1xuZXhwb3J0cy5SRUNFSVZFX0FDQ09VTlQgPSBSRUNFSVZFX0FDQ09VTlQ7XG52YXIgUkVDRUlWRV9GRUUgPSAndWktcmVjZWl2ZV9mZWUnO1xuZXhwb3J0cy5SRUNFSVZFX0ZFRSA9IFJFQ0VJVkVfRkVFO1xudmFyIFJFQ0VJVkVfV09SRCA9ICd1aS1yZWNlaXZlX3dvcmQnO1xuZXhwb3J0cy5SRUNFSVZFX1dPUkQgPSBSRUNFSVZFX1dPUkQ7XG52YXIgQ0hBTkdFX1NFVFRJTkdTID0gJ3VpLWNoYW5nZV9zZXR0aW5ncyc7XG5leHBvcnRzLkNIQU5HRV9TRVRUSU5HUyA9IENIQU5HRV9TRVRUSU5HUztcbnZhciBDVVNUT01fTUVTU0FHRV9SRVFVRVNUID0gJ3VpLWN1c3RvbV9yZXF1ZXN0JztcbmV4cG9ydHMuQ1VTVE9NX01FU1NBR0VfUkVRVUVTVCA9IENVU1RPTV9NRVNTQUdFX1JFUVVFU1Q7XG52YXIgQ1VTVE9NX01FU1NBR0VfUkVTUE9OU0UgPSAndWktY3VzdG9tX3Jlc3BvbnNlJztcbmV4cG9ydHMuQ1VTVE9NX01FU1NBR0VfUkVTUE9OU0UgPSBDVVNUT01fTUVTU0FHRV9SRVNQT05TRTtcbnZhciBMT0dJTl9DSEFMTEVOR0VfUkVRVUVTVCA9ICd1aS1sb2dpbl9jaGFsbGVuZ2VfcmVxdWVzdCc7XG5leHBvcnRzLkxPR0lOX0NIQUxMRU5HRV9SRVFVRVNUID0gTE9HSU5fQ0hBTExFTkdFX1JFUVVFU1Q7XG52YXIgTE9HSU5fQ0hBTExFTkdFX1JFU1BPTlNFID0gJ3VpLWxvZ2luX2NoYWxsZW5nZV9yZXNwb25zZSc7XG5leHBvcnRzLkxPR0lOX0NIQUxMRU5HRV9SRVNQT05TRSA9IExPR0lOX0NIQUxMRU5HRV9SRVNQT05TRTtcbnZhciBCVU5ETEVfUFJPR1JFU1MgPSAndWktYnVuZGxlX3Byb2dyZXNzJztcbmV4cG9ydHMuQlVORExFX1BST0dSRVNTID0gQlVORExFX1BST0dSRVNTO1xudmFyIEFERFJFU1NfVkFMSURBVElPTiA9ICd1aS1hZGRyZXNzX3ZhbGlkYXRpb24nO1xuZXhwb3J0cy5BRERSRVNTX1ZBTElEQVRJT04gPSBBRERSRVNTX1ZBTElEQVRJT047IiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgX2ludGVyb3BSZXF1aXJlRGVmYXVsdCA9IHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlRGVmYXVsdFwiKTtcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbmV4cG9ydHMuTk9fQ09JTl9JTkZPID0gZXhwb3J0cy5CQUNLRU5EX05PX1VSTCA9IGV4cG9ydHMuV0VCVVNCX0VSUk9SX01FU1NBR0UgPSBleHBvcnRzLklOVkFMSURfUElOX0VSUk9SX01FU1NBR0UgPSBleHBvcnRzLldST05HX1BSRVZJT1VTX1NFU1NJT05fRVJST1JfTUVTU0FHRSA9IGV4cG9ydHMuSU5WQUxJRF9TVEFURSA9IGV4cG9ydHMuQ0FMTF9PVkVSUklERSA9IGV4cG9ydHMuSU5JVElBTElaQVRJT05fRkFJTEVEID0gZXhwb3J0cy5ERVZJQ0VfVVNFRF9FTFNFV0hFUkUgPSBleHBvcnRzLlBFUk1JU1NJT05TX05PVF9HUkFOVEVEID0gZXhwb3J0cy5QT1BVUF9DTE9TRUQgPSBleHBvcnRzLklOVkFMSURfUEFSQU1FVEVSUyA9IGV4cG9ydHMuREVWSUNFX0NBTExfSU5fUFJPR1JFU1MgPSBleHBvcnRzLkRFVklDRV9OT1RfRk9VTkQgPSBleHBvcnRzLldST05HX1RSQU5TUE9SVF9DT05GSUcgPSBleHBvcnRzLk5PX1RSQU5TUE9SVCA9IGV4cG9ydHMuTUFOQUdFTUVOVF9OT1RfQUxMT1dFRCA9IGV4cG9ydHMuTUFOSUZFU1RfTk9UX1NFVCA9IGV4cG9ydHMuQlJPV1NFUl9OT1RfU1VQUE9SVEVEID0gZXhwb3J0cy5QT1BVUF9USU1FT1VUID0gZXhwb3J0cy5JRlJBTUVfVElNRU9VVCA9IGV4cG9ydHMuSUZSQU1FX0lOSVRJQUxJWkVEID0gZXhwb3J0cy5JRlJBTUVfQkxPQ0tFRCA9IGV4cG9ydHMuTk9fSUZSQU1FID0gZXhwb3J0cy5pbnZhbGlkUGFyYW1ldGVyID0gZXhwb3J0cy5UcmV6b3JFcnJvciA9IHZvaWQgMDtcblxudmFyIF9pbmhlcml0c0xvb3NlMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW5oZXJpdHNMb29zZVwiKSk7XG5cbnZhciBfd3JhcE5hdGl2ZVN1cGVyMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvd3JhcE5hdGl2ZVN1cGVyXCIpKTtcblxudmFyIFRyZXpvckVycm9yID1cbi8qI19fUFVSRV9fKi9cbmZ1bmN0aW9uIChfRXJyb3IpIHtcbiAgKDAsIF9pbmhlcml0c0xvb3NlMltcImRlZmF1bHRcIl0pKFRyZXpvckVycm9yLCBfRXJyb3IpO1xuXG4gIGZ1bmN0aW9uIFRyZXpvckVycm9yKGNvZGUsIG1lc3NhZ2UpIHtcbiAgICB2YXIgX3RoaXM7XG5cbiAgICBfdGhpcyA9IF9FcnJvci5jYWxsKHRoaXMsIG1lc3NhZ2UpIHx8IHRoaXM7XG4gICAgX3RoaXMuY29kZSA9IGNvZGU7XG4gICAgX3RoaXMubWVzc2FnZSA9IG1lc3NhZ2U7XG4gICAgcmV0dXJuIF90aGlzO1xuICB9XG5cbiAgcmV0dXJuIFRyZXpvckVycm9yO1xufSgoMCwgX3dyYXBOYXRpdmVTdXBlcjJbXCJkZWZhdWx0XCJdKShFcnJvcikpO1xuXG5leHBvcnRzLlRyZXpvckVycm9yID0gVHJlem9yRXJyb3I7XG5cbnZhciBpbnZhbGlkUGFyYW1ldGVyID0gZnVuY3Rpb24gaW52YWxpZFBhcmFtZXRlcihtZXNzYWdlKSB7XG4gIHJldHVybiBuZXcgVHJlem9yRXJyb3IoJ0Nvbm5lY3RfSW52YWxpZFBhcmFtZXRlcicsIG1lc3NhZ2UpO1xufTsgLy8gbGV2ZWwgMTAwIGVycm9yIGR1cmluZyBpbml0aWFsaXphdGlvblxuXG5cbmV4cG9ydHMuaW52YWxpZFBhcmFtZXRlciA9IGludmFsaWRQYXJhbWV0ZXI7XG52YXIgTk9fSUZSQU1FID0gbmV3IFRyZXpvckVycm9yKDEwMCwgJ1RyZXpvckNvbm5lY3Qgbm90IHlldCBpbml0aWFsaXplZCcpO1xuZXhwb3J0cy5OT19JRlJBTUUgPSBOT19JRlJBTUU7XG52YXIgSUZSQU1FX0JMT0NLRUQgPSBuZXcgVHJlem9yRXJyb3IoJ2lmcmFtZV9ibG9ja2VkJywgJ1RyZXpvckNvbm5lY3QgaWZyYW1lIHdhcyBibG9ja2VkJyk7XG5leHBvcnRzLklGUkFNRV9CTE9DS0VEID0gSUZSQU1FX0JMT0NLRUQ7XG52YXIgSUZSQU1FX0lOSVRJQUxJWkVEID0gbmV3IFRyZXpvckVycm9yKDEwMSwgJ1RyZXpvckNvbm5lY3QgaGFzIGJlZW4gYWxyZWFkeSBpbml0aWFsaXplZCcpO1xuZXhwb3J0cy5JRlJBTUVfSU5JVElBTElaRUQgPSBJRlJBTUVfSU5JVElBTElaRUQ7XG52YXIgSUZSQU1FX1RJTUVPVVQgPSBuZXcgVHJlem9yRXJyb3IoMTAyLCAnSWZyYW1lIHRpbWVvdXQnKTtcbmV4cG9ydHMuSUZSQU1FX1RJTUVPVVQgPSBJRlJBTUVfVElNRU9VVDtcbnZhciBQT1BVUF9USU1FT1VUID0gbmV3IFRyZXpvckVycm9yKDEwMywgJ1BvcHVwIHRpbWVvdXQnKTtcbmV4cG9ydHMuUE9QVVBfVElNRU9VVCA9IFBPUFVQX1RJTUVPVVQ7XG52YXIgQlJPV1NFUl9OT1RfU1VQUE9SVEVEID0gbmV3IFRyZXpvckVycm9yKDEwNCwgJ0Jyb3dzZXIgbm90IHN1cHBvcnRlZCcpO1xuZXhwb3J0cy5CUk9XU0VSX05PVF9TVVBQT1JURUQgPSBCUk9XU0VSX05PVF9TVVBQT1JURUQ7XG52YXIgTUFOSUZFU1RfTk9UX1NFVCA9IG5ldyBUcmV6b3JFcnJvcigxMDUsICdNYW5pZmVzdCBub3Qgc2V0LiBSZWFkIG1vcmUgYXQgaHR0cHM6Ly9naXRodWIuY29tL3RyZXpvci9jb25uZWN0L2Jsb2IvZGV2ZWxvcC9kb2NzL2luZGV4Lm1kJyk7XG5leHBvcnRzLk1BTklGRVNUX05PVF9TRVQgPSBNQU5JRkVTVF9OT1RfU0VUO1xudmFyIE1BTkFHRU1FTlRfTk9UX0FMTE9XRUQgPSBuZXcgVHJlem9yRXJyb3IoMTA1LCAnTWFuYWdlbWVudCBtZXRob2Qgbm90IGFsbG93ZWQgZm9yIHRoaXMgY29uZmlndXJhdGlvbicpO1xuZXhwb3J0cy5NQU5BR0VNRU5UX05PVF9BTExPV0VEID0gTUFOQUdFTUVOVF9OT1RfQUxMT1dFRDtcbnZhciBOT19UUkFOU1BPUlQgPSBuZXcgVHJlem9yRXJyb3IoNTAwLCAnVHJhbnNwb3J0IGlzIG1pc3NpbmcnKTtcbmV4cG9ydHMuTk9fVFJBTlNQT1JUID0gTk9fVFJBTlNQT1JUO1xudmFyIFdST05HX1RSQU5TUE9SVF9DT05GSUcgPSBuZXcgVHJlem9yRXJyb3IoNTAwMiwgJ1dyb25nIGNvbmZpZyByZXNwb25zZScpOyAvLyBjb25maWdfc2lnbmVkXG5cbmV4cG9ydHMuV1JPTkdfVFJBTlNQT1JUX0NPTkZJRyA9IFdST05HX1RSQU5TUE9SVF9DT05GSUc7XG52YXIgREVWSUNFX05PVF9GT1VORCA9IG5ldyBUcmV6b3JFcnJvcig1MDEsICdEZXZpY2Ugbm90IGZvdW5kJyk7IC8vIGV4cG9ydCBjb25zdCBERVZJQ0VfQ0FMTF9JTl9QUk9HUkVTUzogVHJlem9yRXJyb3IgPSBuZXcgVHJlem9yRXJyb3IoNTAyLCBcIkRldmljZSBjYWxsIGluIHByb2dyZXNzLlwiKTtcblxuZXhwb3J0cy5ERVZJQ0VfTk9UX0ZPVU5EID0gREVWSUNFX05PVF9GT1VORDtcbnZhciBERVZJQ0VfQ0FMTF9JTl9QUk9HUkVTUyA9IG5ldyBUcmV6b3JFcnJvcig1MDMsICdEZXZpY2UgY2FsbCBpbiBwcm9ncmVzcycpO1xuZXhwb3J0cy5ERVZJQ0VfQ0FMTF9JTl9QUk9HUkVTUyA9IERFVklDRV9DQUxMX0lOX1BST0dSRVNTO1xudmFyIElOVkFMSURfUEFSQU1FVEVSUyA9IG5ldyBUcmV6b3JFcnJvcig1MDQsICdJbnZhbGlkIHBhcmFtZXRlcnMnKTtcbmV4cG9ydHMuSU5WQUxJRF9QQVJBTUVURVJTID0gSU5WQUxJRF9QQVJBTUVURVJTO1xudmFyIFBPUFVQX0NMT1NFRCA9IG5ldyBFcnJvcignUG9wdXAgY2xvc2VkJyk7XG5leHBvcnRzLlBPUFVQX0NMT1NFRCA9IFBPUFVQX0NMT1NFRDtcbnZhciBQRVJNSVNTSU9OU19OT1RfR1JBTlRFRCA9IG5ldyBUcmV6b3JFcnJvcig0MDMsICdQZXJtaXNzaW9ucyBub3QgZ3JhbnRlZCcpO1xuZXhwb3J0cy5QRVJNSVNTSU9OU19OT1RfR1JBTlRFRCA9IFBFUk1JU1NJT05TX05PVF9HUkFOVEVEO1xudmFyIERFVklDRV9VU0VEX0VMU0VXSEVSRSA9IG5ldyBUcmV6b3JFcnJvcig3MDAsICdEZXZpY2UgaXMgdXNlZCBpbiBhbm90aGVyIHdpbmRvdycpO1xuZXhwb3J0cy5ERVZJQ0VfVVNFRF9FTFNFV0hFUkUgPSBERVZJQ0VfVVNFRF9FTFNFV0hFUkU7XG52YXIgSU5JVElBTElaQVRJT05fRkFJTEVEID0gbmV3IFRyZXpvckVycm9yKCdGYWlsdXJlX0luaXRpYWxpemUnLCAnSW5pdGlhbGl6YXRpb24gZmFpbGVkJyk7XG5leHBvcnRzLklOSVRJQUxJWkFUSU9OX0ZBSUxFRCA9IElOSVRJQUxJWkFUSU9OX0ZBSUxFRDtcbnZhciBDQUxMX09WRVJSSURFID0gbmV3IFRyZXpvckVycm9yKCdGYWlsdXJlX0FjdGlvbk92ZXJyaWRlJywgJ292ZXJyaWRlJyk7XG5leHBvcnRzLkNBTExfT1ZFUlJJREUgPSBDQUxMX09WRVJSSURFO1xudmFyIElOVkFMSURfU1RBVEUgPSBuZXcgVHJlem9yRXJyb3IoJ0ZhaWx1cmVfUGFzc3BocmFzZVN0YXRlJywgJ1Bhc3NwaHJhc2UgaXMgaW5jb3JyZWN0Jyk7IC8vIGEgc2xpZ2h0IGhhY2tcbi8vIHRoaXMgZXJyb3Igc3RyaW5nIGlzIGhhcmQtY29kZWRcbi8vIGluIGJvdGggYnJpZGdlIGFuZCBleHRlbnNpb25cblxuZXhwb3J0cy5JTlZBTElEX1NUQVRFID0gSU5WQUxJRF9TVEFURTtcbnZhciBXUk9OR19QUkVWSU9VU19TRVNTSU9OX0VSUk9SX01FU1NBR0UgPSAnd3JvbmcgcHJldmlvdXMgc2Vzc2lvbic7XG5leHBvcnRzLldST05HX1BSRVZJT1VTX1NFU1NJT05fRVJST1JfTUVTU0FHRSA9IFdST05HX1BSRVZJT1VTX1NFU1NJT05fRVJST1JfTUVTU0FHRTtcbnZhciBJTlZBTElEX1BJTl9FUlJPUl9NRVNTQUdFID0gJ1BJTiBpbnZhbGlkJztcbmV4cG9ydHMuSU5WQUxJRF9QSU5fRVJST1JfTUVTU0FHRSA9IElOVkFMSURfUElOX0VSUk9SX01FU1NBR0U7XG52YXIgV0VCVVNCX0VSUk9SX01FU1NBR0UgPSAnTmV0d29ya0Vycm9yOiBVbmFibGUgdG8gY2xhaW0gaW50ZXJmYWNlLic7IC8vIEJsb2NrQm9va1xuXG5leHBvcnRzLldFQlVTQl9FUlJPUl9NRVNTQUdFID0gV0VCVVNCX0VSUk9SX01FU1NBR0U7XG52YXIgQkFDS0VORF9OT19VUkwgPSBuZXcgVHJlem9yRXJyb3IoJ0JhY2tlbmRfaW5pdCcsICdVcmwgbm90IGZvdW5kJyk7XG5leHBvcnRzLkJBQ0tFTkRfTk9fVVJMID0gQkFDS0VORF9OT19VUkw7XG52YXIgTk9fQ09JTl9JTkZPID0gaW52YWxpZFBhcmFtZXRlcignQ29pbiBub3QgZm91bmQuJyk7XG5leHBvcnRzLk5PX0NPSU5fSU5GTyA9IE5PX0NPSU5fSU5GTzsiLCJmdW5jdGlvbiBfc2V0UHJvdG90eXBlT2YobywgcCkge1xuICBtb2R1bGUuZXhwb3J0cyA9IF9zZXRQcm90b3R5cGVPZiA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fCBmdW5jdGlvbiBfc2V0UHJvdG90eXBlT2YobywgcCkge1xuICAgIG8uX19wcm90b19fID0gcDtcbiAgICByZXR1cm4gbztcbiAgfTtcblxuICBtb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0cywgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG4gIHJldHVybiBfc2V0UHJvdG90eXBlT2YobywgcCk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX3NldFByb3RvdHlwZU9mO1xubW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHMsIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlOyIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbmV4cG9ydHMuQkxPQ0tDSEFJTl9FVkVOVCA9IGV4cG9ydHMuUkVTUE9OU0VfRVZFTlQgPSBleHBvcnRzLlRSQU5TUE9SVF9FVkVOVCA9IGV4cG9ydHMuREVWSUNFX0VWRU5UID0gZXhwb3J0cy5VSV9FVkVOVCA9IGV4cG9ydHMuQ09SRV9FVkVOVCA9IHZvaWQgMDtcbnZhciBDT1JFX0VWRU5UID0gJ0NPUkVfRVZFTlQnO1xuZXhwb3J0cy5DT1JFX0VWRU5UID0gQ09SRV9FVkVOVDtcbnZhciBVSV9FVkVOVCA9ICdVSV9FVkVOVCc7XG5leHBvcnRzLlVJX0VWRU5UID0gVUlfRVZFTlQ7XG52YXIgREVWSUNFX0VWRU5UID0gJ0RFVklDRV9FVkVOVCc7XG5leHBvcnRzLkRFVklDRV9FVkVOVCA9IERFVklDRV9FVkVOVDtcbnZhciBUUkFOU1BPUlRfRVZFTlQgPSAnVFJBTlNQT1JUX0VWRU5UJztcbmV4cG9ydHMuVFJBTlNQT1JUX0VWRU5UID0gVFJBTlNQT1JUX0VWRU5UO1xudmFyIFJFU1BPTlNFX0VWRU5UID0gJ1JFU1BPTlNFX0VWRU5UJztcbmV4cG9ydHMuUkVTUE9OU0VfRVZFTlQgPSBSRVNQT05TRV9FVkVOVDtcbnZhciBCTE9DS0NIQUlOX0VWRU5UID0gJ0JMT0NLQ0hBSU5fRVZFTlQnO1xuZXhwb3J0cy5CTE9DS0NIQUlOX0VWRU5UID0gQkxPQ0tDSEFJTl9FVkVOVDsiLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5leHBvcnRzLlNUQVJUX1BFTkRJTkcgPSBleHBvcnRzLlJFQ09OTkVDVCA9IGV4cG9ydHMuUkVRVUVTVCA9IGV4cG9ydHMuU1RSRUFNID0gZXhwb3J0cy5VUERBVEUgPSBleHBvcnRzLkVSUk9SID0gZXhwb3J0cy5TVEFSVCA9IHZvaWQgMDtcbnZhciBTVEFSVCA9ICd0cmFuc3BvcnQtc3RhcnQnO1xuZXhwb3J0cy5TVEFSVCA9IFNUQVJUO1xudmFyIEVSUk9SID0gJ3RyYW5zcG9ydC1lcnJvcic7XG5leHBvcnRzLkVSUk9SID0gRVJST1I7XG52YXIgVVBEQVRFID0gJ3RyYW5zcG9ydC11cGRhdGUnO1xuZXhwb3J0cy5VUERBVEUgPSBVUERBVEU7XG52YXIgU1RSRUFNID0gJ3RyYW5zcG9ydC1zdHJlYW0nO1xuZXhwb3J0cy5TVFJFQU0gPSBTVFJFQU07XG52YXIgUkVRVUVTVCA9ICd0cmFuc3BvcnQtcmVxdWVzdF9kZXZpY2UnO1xuZXhwb3J0cy5SRVFVRVNUID0gUkVRVUVTVDtcbnZhciBSRUNPTk5FQ1QgPSAndHJhbnNwb3J0LXJlY29ubmVjdCc7XG5leHBvcnRzLlJFQ09OTkVDVCA9IFJFQ09OTkVDVDtcbnZhciBTVEFSVF9QRU5ESU5HID0gJ3RyYW5zcG9ydC1zdGFydF9wZW5kaW5nJztcbmV4cG9ydHMuU1RBUlRfUEVORElORyA9IFNUQVJUX1BFTkRJTkc7IiwiJ3VzZSBzdHJpY3QnOyAvLyBkZXZpY2UgbGlzdCBldmVudHNcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbmV4cG9ydHMuVU5SRUFEQUJMRSA9IGV4cG9ydHMuV0FJVF9GT1JfU0VMRUNUSU9OID0gZXhwb3J0cy5XT1JEID0gZXhwb3J0cy5QQVNTUEhSQVNFX09OX0RFVklDRSA9IGV4cG9ydHMuUEFTU1BIUkFTRSA9IGV4cG9ydHMuUElOID0gZXhwb3J0cy5CVVRUT04gPSBleHBvcnRzLkxPQURJTkcgPSBleHBvcnRzLlVTRURfRUxTRVdIRVJFID0gZXhwb3J0cy5SRUxFQVNFRCA9IGV4cG9ydHMuQUNRVUlSRUQgPSBleHBvcnRzLlJFTEVBU0UgPSBleHBvcnRzLkFDUVVJUkUgPSBleHBvcnRzLkNIQU5HRUQgPSBleHBvcnRzLkRJU0NPTk5FQ1QgPSBleHBvcnRzLkNPTk5FQ1RfVU5BQ1FVSVJFRCA9IGV4cG9ydHMuQ09OTkVDVCA9IHZvaWQgMDtcbnZhciBDT05ORUNUID0gJ2RldmljZS1jb25uZWN0JztcbmV4cG9ydHMuQ09OTkVDVCA9IENPTk5FQ1Q7XG52YXIgQ09OTkVDVF9VTkFDUVVJUkVEID0gJ2RldmljZS1jb25uZWN0X3VuYWNxdWlyZWQnO1xuZXhwb3J0cy5DT05ORUNUX1VOQUNRVUlSRUQgPSBDT05ORUNUX1VOQUNRVUlSRUQ7XG52YXIgRElTQ09OTkVDVCA9ICdkZXZpY2UtZGlzY29ubmVjdCc7XG5leHBvcnRzLkRJU0NPTk5FQ1QgPSBESVNDT05ORUNUO1xudmFyIENIQU5HRUQgPSAnZGV2aWNlLWNoYW5nZWQnO1xuZXhwb3J0cy5DSEFOR0VEID0gQ0hBTkdFRDtcbnZhciBBQ1FVSVJFID0gJ2RldmljZS1hY3F1aXJlJztcbmV4cG9ydHMuQUNRVUlSRSA9IEFDUVVJUkU7XG52YXIgUkVMRUFTRSA9ICdkZXZpY2UtcmVsZWFzZSc7XG5leHBvcnRzLlJFTEVBU0UgPSBSRUxFQVNFO1xudmFyIEFDUVVJUkVEID0gJ2RldmljZS1hY3F1aXJlZCc7XG5leHBvcnRzLkFDUVVJUkVEID0gQUNRVUlSRUQ7XG52YXIgUkVMRUFTRUQgPSAnZGV2aWNlLXJlbGVhc2VkJztcbmV4cG9ydHMuUkVMRUFTRUQgPSBSRUxFQVNFRDtcbnZhciBVU0VEX0VMU0VXSEVSRSA9ICdkZXZpY2UtdXNlZF9lbHNld2hlcmUnO1xuZXhwb3J0cy5VU0VEX0VMU0VXSEVSRSA9IFVTRURfRUxTRVdIRVJFO1xudmFyIExPQURJTkcgPSAnZGV2aWNlLWxvYWRpbmcnOyAvLyB0cmV6b3ItbGluayBldmVudHMgaW4gcHJvdG9idWYgZm9ybWF0XG5cbmV4cG9ydHMuTE9BRElORyA9IExPQURJTkc7XG52YXIgQlVUVE9OID0gJ2J1dHRvbic7XG5leHBvcnRzLkJVVFRPTiA9IEJVVFRPTjtcbnZhciBQSU4gPSAncGluJztcbmV4cG9ydHMuUElOID0gUElOO1xudmFyIFBBU1NQSFJBU0UgPSAncGFzc3BocmFzZSc7XG5leHBvcnRzLlBBU1NQSFJBU0UgPSBQQVNTUEhSQVNFO1xudmFyIFBBU1NQSFJBU0VfT05fREVWSUNFID0gJ3Bhc3NwaHJhc2Vfb25fZGV2aWNlJztcbmV4cG9ydHMuUEFTU1BIUkFTRV9PTl9ERVZJQ0UgPSBQQVNTUEhSQVNFX09OX0RFVklDRTtcbnZhciBXT1JEID0gJ3dvcmQnOyAvLyBjdXN0b21cblxuZXhwb3J0cy5XT1JEID0gV09SRDtcbnZhciBXQUlUX0ZPUl9TRUxFQ1RJT04gPSAnZGV2aWNlLXdhaXRfZm9yX3NlbGVjdGlvbic7IC8vIHRoaXMgc3RyaW5nIGhhcyBkaWZmZXJlbnQgcHJlZml4IHRoYW4gb3RoZXIgY29uc3RhbnRzIGFuZCBpdCdzIHVzZWQgYXMgZGV2aWNlIHBhdGhcblxuZXhwb3J0cy5XQUlUX0ZPUl9TRUxFQ1RJT04gPSBXQUlUX0ZPUl9TRUxFQ1RJT047XG52YXIgVU5SRUFEQUJMRSA9ICd1bnJlYWRhYmxlLWRldmljZSc7XG5leHBvcnRzLlVOUkVBREFCTEUgPSBVTlJFQURBQkxFOyIsIid1c2Ugc3RyaWN0JzsgLy8gYmxvY2tjaGFpbiBldmVudHNcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbmV4cG9ydHMuTk9USUZJQ0FUSU9OID0gZXhwb3J0cy5CTE9DSyA9IGV4cG9ydHMuQ09OTkVDVCA9IGV4cG9ydHMuRVJST1IgPSB2b2lkIDA7XG52YXIgRVJST1IgPSAnYmxvY2tjaGFpbi1lcnJvcic7XG5leHBvcnRzLkVSUk9SID0gRVJST1I7XG52YXIgQ09OTkVDVCA9ICdibG9ja2NoYWluLWNvbm5lY3QnO1xuZXhwb3J0cy5DT05ORUNUID0gQ09OTkVDVDtcbnZhciBCTE9DSyA9ICdibG9ja2NoYWluLWJsb2NrJztcbmV4cG9ydHMuQkxPQ0sgPSBCTE9DSztcbnZhciBOT1RJRklDQVRJT04gPSAnYmxvY2tjaGFpbi1ub3RpZmljYXRpb24nO1xuZXhwb3J0cy5OT1RJRklDQVRJT04gPSBOT1RJRklDQVRJT047IiwidmFyIHNldFByb3RvdHlwZU9mID0gcmVxdWlyZShcIi4vc2V0UHJvdG90eXBlT2YuanNcIik7XG5cbmZ1bmN0aW9uIF9pbmhlcml0c0xvb3NlKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7XG4gIHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcy5wcm90b3R5cGUpO1xuICBzdWJDbGFzcy5wcm90b3R5cGUuY29uc3RydWN0b3IgPSBzdWJDbGFzcztcbiAgc2V0UHJvdG90eXBlT2Yoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9pbmhlcml0c0xvb3NlO1xubW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHMsIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlOyIsIid1c2Ugc3RyaWN0JztcblxudmFyIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQgPSByZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZURlZmF1bHRcIik7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5leHBvcnRzLmNyZWF0ZSA9IGNyZWF0ZTtcbmV4cG9ydHMuY3JlYXRlQXN5bmMgPSBjcmVhdGVBc3luYztcbmV4cG9ydHMucmVzb2x2ZVRpbWVvdXRQcm9taXNlID0gcmVzb2x2ZVRpbWVvdXRQcm9taXNlO1xuZXhwb3J0cy5yZWplY3RUaW1lb3V0UHJvbWlzZSA9IHJlamVjdFRpbWVvdXRQcm9taXNlO1xuXG52YXIgX3JlZ2VuZXJhdG9yID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvcmVnZW5lcmF0b3JcIikpO1xuXG52YXIgX2FzeW5jVG9HZW5lcmF0b3IyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9hc3luY1RvR2VuZXJhdG9yXCIpKTtcblxuZnVuY3Rpb24gY3JlYXRlKGFyZywgZGV2aWNlKSB7XG4gIHZhciBsb2NhbFJlc29sdmUgPSBmdW5jdGlvbiBsb2NhbFJlc29sdmUodCkge307XG5cbiAgdmFyIGxvY2FsUmVqZWN0ID0gZnVuY3Rpb24gbG9jYWxSZWplY3QoZSkge307XG5cbiAgdmFyIGlkO1xuICB2YXIgcHJvbWlzZSA9IG5ldyBQcm9taXNlKFxuICAvKiNfX1BVUkVfXyovXG4gIGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgX3JlZiA9ICgwLCBfYXN5bmNUb0dlbmVyYXRvcjJbXCJkZWZhdWx0XCJdKShcbiAgICAvKiNfX1BVUkVfXyovXG4gICAgX3JlZ2VuZXJhdG9yW1wiZGVmYXVsdFwiXS5tYXJrKGZ1bmN0aW9uIF9jYWxsZWUocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICByZXR1cm4gX3JlZ2VuZXJhdG9yW1wiZGVmYXVsdFwiXS53cmFwKGZ1bmN0aW9uIF9jYWxsZWUkKF9jb250ZXh0KSB7XG4gICAgICAgIHdoaWxlICgxKSB7XG4gICAgICAgICAgc3dpdGNoIChfY29udGV4dC5wcmV2ID0gX2NvbnRleHQubmV4dCkge1xuICAgICAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgICBsb2NhbFJlc29sdmUgPSByZXNvbHZlO1xuICAgICAgICAgICAgICBsb2NhbFJlamVjdCA9IHJlamVjdDtcblxuICAgICAgICAgICAgICBpZiAoISh0eXBlb2YgYXJnID09PSAnZnVuY3Rpb24nKSkge1xuICAgICAgICAgICAgICAgIF9jb250ZXh0Lm5leHQgPSAxMTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIF9jb250ZXh0LnByZXYgPSAzO1xuICAgICAgICAgICAgICBfY29udGV4dC5uZXh0ID0gNjtcbiAgICAgICAgICAgICAgcmV0dXJuIGFyZygpO1xuXG4gICAgICAgICAgICBjYXNlIDY6XG4gICAgICAgICAgICAgIF9jb250ZXh0Lm5leHQgPSAxMTtcbiAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgIGNhc2UgODpcbiAgICAgICAgICAgICAgX2NvbnRleHQucHJldiA9IDg7XG4gICAgICAgICAgICAgIF9jb250ZXh0LnQwID0gX2NvbnRleHRbXCJjYXRjaFwiXSgzKTtcbiAgICAgICAgICAgICAgcmVqZWN0KF9jb250ZXh0LnQwKTtcblxuICAgICAgICAgICAgY2FzZSAxMTpcbiAgICAgICAgICAgICAgaWYgKHR5cGVvZiBhcmcgPT09ICdzdHJpbmcnKSBpZCA9IGFyZztcblxuICAgICAgICAgICAgY2FzZSAxMjpcbiAgICAgICAgICAgIGNhc2UgXCJlbmRcIjpcbiAgICAgICAgICAgICAgcmV0dXJuIF9jb250ZXh0LnN0b3AoKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0sIF9jYWxsZWUsIG51bGwsIFtbMywgOF1dKTtcbiAgICB9KSk7XG5cbiAgICByZXR1cm4gZnVuY3Rpb24gKF94LCBfeDIpIHtcbiAgICAgIHJldHVybiBfcmVmLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgfTtcbiAgfSgpKTtcbiAgcmV0dXJuIHtcbiAgICBpZDogaWQsXG4gICAgZGV2aWNlOiBkZXZpY2UsXG4gICAgcmVzb2x2ZTogbG9jYWxSZXNvbHZlLFxuICAgIHJlamVjdDogbG9jYWxSZWplY3QsXG4gICAgcHJvbWlzZTogcHJvbWlzZVxuICB9O1xufVxuXG5mdW5jdGlvbiBjcmVhdGVBc3luYyhpbm5lckZuKSB7XG4gIHZhciBsb2NhbFJlc29sdmUgPSBmdW5jdGlvbiBsb2NhbFJlc29sdmUodCkge307XG5cbiAgdmFyIGxvY2FsUmVqZWN0ID0gZnVuY3Rpb24gbG9jYWxSZWplY3QoZSkge307XG5cbiAgdmFyIHByb21pc2UgPSBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgbG9jYWxSZXNvbHZlID0gcmVzb2x2ZTtcbiAgICBsb2NhbFJlamVjdCA9IHJlamVjdDtcbiAgfSk7XG5cbiAgdmFyIGlubmVyID1cbiAgLyojX19QVVJFX18qL1xuICBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIF9yZWYyID0gKDAsIF9hc3luY1RvR2VuZXJhdG9yMltcImRlZmF1bHRcIl0pKFxuICAgIC8qI19fUFVSRV9fKi9cbiAgICBfcmVnZW5lcmF0b3JbXCJkZWZhdWx0XCJdLm1hcmsoZnVuY3Rpb24gX2NhbGxlZTIoKSB7XG4gICAgICByZXR1cm4gX3JlZ2VuZXJhdG9yW1wiZGVmYXVsdFwiXS53cmFwKGZ1bmN0aW9uIF9jYWxsZWUyJChfY29udGV4dDIpIHtcbiAgICAgICAgd2hpbGUgKDEpIHtcbiAgICAgICAgICBzd2l0Y2ggKF9jb250ZXh0Mi5wcmV2ID0gX2NvbnRleHQyLm5leHQpIHtcbiAgICAgICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgICAgX2NvbnRleHQyLm5leHQgPSAyO1xuICAgICAgICAgICAgICByZXR1cm4gaW5uZXJGbigpO1xuXG4gICAgICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgICBjYXNlIFwiZW5kXCI6XG4gICAgICAgICAgICAgIHJldHVybiBfY29udGV4dDIuc3RvcCgpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSwgX2NhbGxlZTIpO1xuICAgIH0pKTtcblxuICAgIHJldHVybiBmdW5jdGlvbiBpbm5lcigpIHtcbiAgICAgIHJldHVybiBfcmVmMi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgIH07XG4gIH0oKTtcblxuICByZXR1cm4ge1xuICAgIHJlc29sdmU6IGxvY2FsUmVzb2x2ZSxcbiAgICByZWplY3Q6IGxvY2FsUmVqZWN0LFxuICAgIHByb21pc2U6IHByb21pc2UsXG4gICAgcnVuOiBmdW5jdGlvbiBydW4oKSB7XG4gICAgICBpbm5lcigpO1xuICAgICAgcmV0dXJuIHByb21pc2U7XG4gICAgfVxuICB9O1xufVxuXG5mdW5jdGlvbiByZXNvbHZlVGltZW91dFByb21pc2UoZGVsYXksIHJlc3VsdCkge1xuICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUpIHtcbiAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgIHJlc29sdmUocmVzdWx0KTtcbiAgICB9LCBkZWxheSk7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiByZWplY3RUaW1lb3V0UHJvbWlzZShkZWxheSwgZXJyb3IpIHtcbiAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgIHJlamVjdChlcnJvcik7XG4gICAgfSwgZGVsYXkpO1xuICB9KTtcbn0iLCJmdW5jdGlvbiBfdHlwZW9mKG9iaikge1xuICBcIkBiYWJlbC9oZWxwZXJzIC0gdHlwZW9mXCI7XG5cbiAgaWYgKHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID09PSBcInN5bWJvbFwiKSB7XG4gICAgbW9kdWxlLmV4cG9ydHMgPSBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHtcbiAgICAgIHJldHVybiB0eXBlb2Ygb2JqO1xuICAgIH07XG5cbiAgICBtb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0cywgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG4gIH0gZWxzZSB7XG4gICAgbW9kdWxlLmV4cG9ydHMgPSBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHtcbiAgICAgIHJldHVybiBvYmogJiYgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqO1xuICAgIH07XG5cbiAgICBtb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0cywgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG4gIH1cblxuICByZXR1cm4gX3R5cGVvZihvYmopO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF90eXBlb2Y7XG5tb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0cywgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7IiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuZXhwb3J0cy5SRVNQT05TRSA9IGV4cG9ydHMuQ0FMTCA9IGV4cG9ydHMuRVJST1IgPSBleHBvcnRzLkJPT1RTVFJBUCA9IHZvaWQgMDtcbnZhciBCT09UU1RSQVAgPSAnaWZyYW1lLWJvb3RzdHJhcCc7XG5leHBvcnRzLkJPT1RTVFJBUCA9IEJPT1RTVFJBUDtcbnZhciBFUlJPUiA9ICdpZnJhbWUtZXJyb3InO1xuZXhwb3J0cy5FUlJPUiA9IEVSUk9SO1xudmFyIENBTEwgPSAnaWZyYW1lLWNhbGwnO1xuZXhwb3J0cy5DQUxMID0gQ0FMTDtcbnZhciBSRVNQT05TRSA9ICdpZnJhbWUtcmVzcG9uc2UnO1xuZXhwb3J0cy5SRVNQT05TRSA9IFJFU1BPTlNFOyIsInZhciBnZXRQcm90b3R5cGVPZiA9IHJlcXVpcmUoXCIuL2dldFByb3RvdHlwZU9mLmpzXCIpO1xuXG52YXIgc2V0UHJvdG90eXBlT2YgPSByZXF1aXJlKFwiLi9zZXRQcm90b3R5cGVPZi5qc1wiKTtcblxudmFyIGlzTmF0aXZlRnVuY3Rpb24gPSByZXF1aXJlKFwiLi9pc05hdGl2ZUZ1bmN0aW9uLmpzXCIpO1xuXG52YXIgY29uc3RydWN0ID0gcmVxdWlyZShcIi4vY29uc3RydWN0LmpzXCIpO1xuXG5mdW5jdGlvbiBfd3JhcE5hdGl2ZVN1cGVyKENsYXNzKSB7XG4gIHZhciBfY2FjaGUgPSB0eXBlb2YgTWFwID09PSBcImZ1bmN0aW9uXCIgPyBuZXcgTWFwKCkgOiB1bmRlZmluZWQ7XG5cbiAgbW9kdWxlLmV4cG9ydHMgPSBfd3JhcE5hdGl2ZVN1cGVyID0gZnVuY3Rpb24gX3dyYXBOYXRpdmVTdXBlcihDbGFzcykge1xuICAgIGlmIChDbGFzcyA9PT0gbnVsbCB8fCAhaXNOYXRpdmVGdW5jdGlvbihDbGFzcykpIHJldHVybiBDbGFzcztcblxuICAgIGlmICh0eXBlb2YgQ2xhc3MgIT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uXCIpO1xuICAgIH1cblxuICAgIGlmICh0eXBlb2YgX2NhY2hlICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICBpZiAoX2NhY2hlLmhhcyhDbGFzcykpIHJldHVybiBfY2FjaGUuZ2V0KENsYXNzKTtcblxuICAgICAgX2NhY2hlLnNldChDbGFzcywgV3JhcHBlcik7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gV3JhcHBlcigpIHtcbiAgICAgIHJldHVybiBjb25zdHJ1Y3QoQ2xhc3MsIGFyZ3VtZW50cywgZ2V0UHJvdG90eXBlT2YodGhpcykuY29uc3RydWN0b3IpO1xuICAgIH1cblxuICAgIFdyYXBwZXIucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShDbGFzcy5wcm90b3R5cGUsIHtcbiAgICAgIGNvbnN0cnVjdG9yOiB7XG4gICAgICAgIHZhbHVlOiBXcmFwcGVyLFxuICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICAgICAgd3JpdGFibGU6IHRydWUsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgICAgfVxuICAgIH0pO1xuICAgIHJldHVybiBzZXRQcm90b3R5cGVPZihXcmFwcGVyLCBDbGFzcyk7XG4gIH07XG5cbiAgbW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHMsIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuICByZXR1cm4gX3dyYXBOYXRpdmVTdXBlcihDbGFzcyk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX3dyYXBOYXRpdmVTdXBlcjtcbm1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzLCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTsiLCJmdW5jdGlvbiBfZ2V0UHJvdG90eXBlT2Yobykge1xuICBtb2R1bGUuZXhwb3J0cyA9IF9nZXRQcm90b3R5cGVPZiA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5nZXRQcm90b3R5cGVPZiA6IGZ1bmN0aW9uIF9nZXRQcm90b3R5cGVPZihvKSB7XG4gICAgcmV0dXJuIG8uX19wcm90b19fIHx8IE9iamVjdC5nZXRQcm90b3R5cGVPZihvKTtcbiAgfTtcbiAgbW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHMsIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuICByZXR1cm4gX2dldFByb3RvdHlwZU9mKG8pO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9nZXRQcm90b3R5cGVPZjtcbm1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzLCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTsiLCJmdW5jdGlvbiBfaXNOYXRpdmVGdW5jdGlvbihmbikge1xuICByZXR1cm4gRnVuY3Rpb24udG9TdHJpbmcuY2FsbChmbikuaW5kZXhPZihcIltuYXRpdmUgY29kZV1cIikgIT09IC0xO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9pc05hdGl2ZUZ1bmN0aW9uO1xubW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHMsIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlOyIsInZhciBzZXRQcm90b3R5cGVPZiA9IHJlcXVpcmUoXCIuL3NldFByb3RvdHlwZU9mLmpzXCIpO1xuXG52YXIgaXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0ID0gcmVxdWlyZShcIi4vaXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0LmpzXCIpO1xuXG5mdW5jdGlvbiBfY29uc3RydWN0KFBhcmVudCwgYXJncywgQ2xhc3MpIHtcbiAgaWYgKGlzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCgpKSB7XG4gICAgbW9kdWxlLmV4cG9ydHMgPSBfY29uc3RydWN0ID0gUmVmbGVjdC5jb25zdHJ1Y3Q7XG4gICAgbW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHMsIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuICB9IGVsc2Uge1xuICAgIG1vZHVsZS5leHBvcnRzID0gX2NvbnN0cnVjdCA9IGZ1bmN0aW9uIF9jb25zdHJ1Y3QoUGFyZW50LCBhcmdzLCBDbGFzcykge1xuICAgICAgdmFyIGEgPSBbbnVsbF07XG4gICAgICBhLnB1c2guYXBwbHkoYSwgYXJncyk7XG4gICAgICB2YXIgQ29uc3RydWN0b3IgPSBGdW5jdGlvbi5iaW5kLmFwcGx5KFBhcmVudCwgYSk7XG4gICAgICB2YXIgaW5zdGFuY2UgPSBuZXcgQ29uc3RydWN0b3IoKTtcbiAgICAgIGlmIChDbGFzcykgc2V0UHJvdG90eXBlT2YoaW5zdGFuY2UsIENsYXNzLnByb3RvdHlwZSk7XG4gICAgICByZXR1cm4gaW5zdGFuY2U7XG4gICAgfTtcblxuICAgIG1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzLCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbiAgfVxuXG4gIHJldHVybiBfY29uc3RydWN0LmFwcGx5KG51bGwsIGFyZ3VtZW50cyk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2NvbnN0cnVjdDtcbm1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzLCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTsiLCJmdW5jdGlvbiBfaXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0KCkge1xuICBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwidW5kZWZpbmVkXCIgfHwgIVJlZmxlY3QuY29uc3RydWN0KSByZXR1cm4gZmFsc2U7XG4gIGlmIChSZWZsZWN0LmNvbnN0cnVjdC5zaGFtKSByZXR1cm4gZmFsc2U7XG4gIGlmICh0eXBlb2YgUHJveHkgPT09IFwiZnVuY3Rpb25cIikgcmV0dXJuIHRydWU7XG5cbiAgdHJ5IHtcbiAgICBCb29sZWFuLnByb3RvdHlwZS52YWx1ZU9mLmNhbGwoUmVmbGVjdC5jb25zdHJ1Y3QoQm9vbGVhbiwgW10sIGZ1bmN0aW9uICgpIHt9KSk7XG4gICAgcmV0dXJuIHRydWU7XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfaXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0O1xubW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHMsIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlOyIsIid1c2Ugc3RyaWN0JztcblxudmFyIF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkID0gcmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVXaWxkY2FyZFwiKTtcblxudmFyIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQgPSByZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZURlZmF1bHRcIik7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IHZvaWQgMDtcblxudmFyIF9yZWdlbmVyYXRvciA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL3JlZ2VuZXJhdG9yXCIpKTtcblxudmFyIF9hc3luY1RvR2VuZXJhdG9yMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvYXN5bmNUb0dlbmVyYXRvclwiKSk7XG5cbnZhciBfYXNzZXJ0VGhpc0luaXRpYWxpemVkMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvYXNzZXJ0VGhpc0luaXRpYWxpemVkXCIpKTtcblxudmFyIF9pbmhlcml0c0xvb3NlMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW5oZXJpdHNMb29zZVwiKSk7XG5cbnZhciBfZGVmaW5lUHJvcGVydHkyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9kZWZpbmVQcm9wZXJ0eVwiKSk7XG5cbnZhciBfZXZlbnRzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiZXZlbnRzXCIpKTtcblxudmFyIFBPUFVQID0gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQocmVxdWlyZShcIi4uL2NvbnN0YW50cy9wb3B1cFwiKSk7XG5cbnZhciBFUlJPUiA9IF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKHJlcXVpcmUoXCIuLi9jb25zdGFudHMvZXJyb3JzXCIpKTtcblxudmFyIF9zaG93UG9wdXBSZXF1ZXN0ID0gcmVxdWlyZShcIi4vc2hvd1BvcHVwUmVxdWVzdFwiKTtcblxudmFyIF9uZXR3b3JrVXRpbHMgPSByZXF1aXJlKFwiLi4vdXRpbHMvbmV0d29ya1V0aWxzXCIpO1xuXG52YXIgX2RlZmVycmVkID0gcmVxdWlyZShcIi4uL3V0aWxzL2RlZmVycmVkXCIpO1xuXG4vLyBjb25zdCBQT1BVUF9SRVFVRVNUX1RJTUVPVVQ6IG51bWJlciA9IDYwMjtcbnZhciBQT1BVUF9SRVFVRVNUX1RJTUVPVVQgPSA4NTA7XG52YXIgUE9QVVBfQ0xPU0VfSU5URVJWQUwgPSA1MDA7XG52YXIgUE9QVVBfT1BFTl9USU1FT1VUID0gMjAwMDtcblxudmFyIFBvcHVwTWFuYWdlciA9XG4vKiNfX1BVUkVfXyovXG5mdW5jdGlvbiAoX0V2ZW50RW1pdHRlcikge1xuICAoMCwgX2luaGVyaXRzTG9vc2UyW1wiZGVmYXVsdFwiXSkoUG9wdXBNYW5hZ2VyLCBfRXZlbnRFbWl0dGVyKTtcblxuICAvLyBXaW5kb3dcbiAgZnVuY3Rpb24gUG9wdXBNYW5hZ2VyKHNldHRpbmdzKSB7XG4gICAgdmFyIF90aGlzO1xuXG4gICAgX3RoaXMgPSBfRXZlbnRFbWl0dGVyLmNhbGwodGhpcykgfHwgdGhpcztcbiAgICAoMCwgX2RlZmluZVByb3BlcnR5MltcImRlZmF1bHRcIl0pKCgwLCBfYXNzZXJ0VGhpc0luaXRpYWxpemVkMltcImRlZmF1bHRcIl0pKF90aGlzKSwgXCJyZXF1ZXN0VGltZW91dFwiLCAwKTtcbiAgICAoMCwgX2RlZmluZVByb3BlcnR5MltcImRlZmF1bHRcIl0pKCgwLCBfYXNzZXJ0VGhpc0luaXRpYWxpemVkMltcImRlZmF1bHRcIl0pKF90aGlzKSwgXCJjbG9zZUludGVydmFsXCIsIDApO1xuICAgICgwLCBfZGVmaW5lUHJvcGVydHkyW1wiZGVmYXVsdFwiXSkoKDAsIF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQyW1wiZGVmYXVsdFwiXSkoX3RoaXMpLCBcImV4dGVuc2lvblwiLCBmYWxzZSk7XG4gICAgKDAsIF9kZWZpbmVQcm9wZXJ0eTJbXCJkZWZhdWx0XCJdKSgoMCwgX2Fzc2VydFRoaXNJbml0aWFsaXplZDJbXCJkZWZhdWx0XCJdKShfdGhpcyksIFwiZXh0ZW5zaW9uVGFiSWRcIiwgMCk7XG4gICAgX3RoaXMuc2V0dGluZ3MgPSBzZXR0aW5ncztcbiAgICBfdGhpcy5zcmMgPSBzZXR0aW5ncy5wb3B1cFNyYztcbiAgICBfdGhpcy5vcmlnaW4gPSAoMCwgX25ldHdvcmtVdGlscy5nZXRPcmlnaW4pKHNldHRpbmdzLnBvcHVwU3JjKTtcbiAgICBfdGhpcy5oYW5kbGVMYXp5TG9hZGluZyA9IF90aGlzLmhhbmRsZUxhenlMb2FkaW5nLmJpbmQoKDAsIF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQyW1wiZGVmYXVsdFwiXSkoX3RoaXMpKTsgLy8gJEZsb3dJc3N1ZSBjaHJvbWUgbm90IGRlY2xhcmVkIG91dHNpZGVcblxuICAgIF90aGlzLmV4dGVuc2lvbiA9IHR5cGVvZiBjaHJvbWUgIT09ICd1bmRlZmluZWQnICYmIGNocm9tZS5ydW50aW1lICYmIHR5cGVvZiBjaHJvbWUucnVudGltZS5vbkNvbm5lY3QgIT09ICd1bmRlZmluZWQnO1xuXG4gICAgaWYgKF90aGlzLmV4dGVuc2lvbikge1xuICAgICAgX3RoaXMuaGFuZGxlRXh0ZW5zaW9uQ29ubmVjdCA9IF90aGlzLmhhbmRsZUV4dGVuc2lvbkNvbm5lY3QuYmluZCgoMCwgX2Fzc2VydFRoaXNJbml0aWFsaXplZDJbXCJkZWZhdWx0XCJdKShfdGhpcykpO1xuICAgICAgX3RoaXMuaGFuZGxlRXh0ZW5zaW9uTWVzc2FnZSA9IF90aGlzLmhhbmRsZUV4dGVuc2lvbk1lc3NhZ2UuYmluZCgoMCwgX2Fzc2VydFRoaXNJbml0aWFsaXplZDJbXCJkZWZhdWx0XCJdKShfdGhpcykpOyAvLyAkRmxvd0lzc3VlIGNocm9tZSBub3QgZGVjbGFyZWQgb3V0c2lkZVxuXG4gICAgICBjaHJvbWUucnVudGltZS5vbkNvbm5lY3QuYWRkTGlzdGVuZXIoX3RoaXMuaGFuZGxlRXh0ZW5zaW9uQ29ubmVjdCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIF90aGlzO1xuICB9XG5cbiAgdmFyIF9wcm90byA9IFBvcHVwTWFuYWdlci5wcm90b3R5cGU7XG5cbiAgX3Byb3RvLnJlcXVlc3QgPSBmdW5jdGlvbiByZXF1ZXN0KGxhenlMb2FkKSB7XG4gICAgdmFyIF90aGlzMiA9IHRoaXM7XG5cbiAgICBpZiAobGF6eUxvYWQgPT09IHZvaWQgMCkge1xuICAgICAgbGF6eUxvYWQgPSBmYWxzZTtcbiAgICB9XG5cbiAgICAvLyBwb3B1cCByZXF1ZXN0XG4gICAgLy8gVE9ETzogaWUgLSBvcGVuIGltZWRpYXRlbHkgYW5kIGhpZGUgaXQgYnV0IHBvc3QgaGFuZHNoYWtlIGFmdGVyIHRpbWVvdXRcbiAgICAvLyBicmluZyBwb3B1cCB3aW5kb3cgdG8gZnJvbnRcbiAgICBpZiAodGhpcy5sb2NrZWQpIHtcbiAgICAgIGlmICh0aGlzLl93aW5kb3cpIHtcbiAgICAgICAgaWYgKHRoaXMuZXh0ZW5zaW9uKSB7XG4gICAgICAgICAgLy8gJEZsb3dJc3N1ZSBjaHJvbWUgbm90IGRlY2xhcmVkIG91dHNpZGVcbiAgICAgICAgICBjaHJvbWUudGFicy51cGRhdGUodGhpcy5fd2luZG93LmlkLCB7XG4gICAgICAgICAgICBhY3RpdmU6IHRydWVcbiAgICAgICAgICB9KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGlzLl93aW5kb3cuZm9jdXMoKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy5sYXp5TG9hZCA9IGxhenlMb2FkID8gKDAsIF9kZWZlcnJlZC5jcmVhdGUpKFBPUFVQLklOSVQpIDogbnVsbDtcblxuICAgIGlmICh0aGlzLmxhenlMb2FkKSB7XG4gICAgICBpZiAoIXRoaXMuZXh0ZW5zaW9uKSB7XG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdtZXNzYWdlJywgdGhpcy5oYW5kbGVMYXp5TG9hZGluZywgZmFsc2UpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHZhciBvcGVuRm4gPSB0aGlzLm9wZW4uYmluZCh0aGlzKTtcbiAgICB0aGlzLmxvY2tlZCA9IHRydWU7XG5cbiAgICBpZiAoIXRoaXMuc2V0dGluZ3Muc3VwcG9ydGVkQnJvd3Nlcikge1xuICAgICAgb3BlbkZuKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMucmVxdWVzdFRpbWVvdXQgPSB3aW5kb3cuc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgIF90aGlzMi5yZXF1ZXN0VGltZW91dCA9IDA7XG4gICAgICAgIG9wZW5GbigpO1xuICAgICAgfSwgbGF6eUxvYWQgfHwgdGhpcy5leHRlbnNpb24gPyAxIDogUE9QVVBfUkVRVUVTVF9USU1FT1VUKTtcbiAgICB9XG4gIH07XG5cbiAgX3Byb3RvLmNhbmNlbCA9IGZ1bmN0aW9uIGNhbmNlbCgpIHtcbiAgICB0aGlzLmNsb3NlKCk7XG4gIH07XG5cbiAgX3Byb3RvLnVubG9jayA9IGZ1bmN0aW9uIHVubG9jaygpIHtcbiAgICB0aGlzLmxvY2tlZCA9IGZhbHNlO1xuICB9O1xuXG4gIF9wcm90by5vcGVuID0gZnVuY3Rpb24gb3BlbigpIHtcbiAgICB2YXIgX3RoaXMzID0gdGhpcztcblxuICAgIGlmICghdGhpcy5zZXR0aW5ncy5zdXBwb3J0ZWRCcm93c2VyKSB7XG4gICAgICB0aGlzLm9wZW5XcmFwcGVyKHRoaXMuc3JjICsgJyN1bnN1cHBvcnRlZCcpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMub3BlbldyYXBwZXIodGhpcy5sYXp5TG9hZCA/IHRoaXMuc3JjICsgJyNsb2FkaW5nJyA6IHRoaXMuc3JjKTtcbiAgICB0aGlzLmNsb3NlSW50ZXJ2YWwgPSB3aW5kb3cuc2V0SW50ZXJ2YWwoZnVuY3Rpb24gKCkge1xuICAgICAgaWYgKF90aGlzMy5fd2luZG93KSB7XG4gICAgICAgIGlmIChfdGhpczMuZXh0ZW5zaW9uKSB7XG4gICAgICAgICAgLy8gJEZsb3dJc3N1ZSBjaHJvbWUgbm90IGRlY2xhcmVkIG91dHNpZGVcbiAgICAgICAgICBjaHJvbWUudGFicy5nZXQoX3RoaXMzLl93aW5kb3cuaWQsIGZ1bmN0aW9uICh0YWIpIHtcbiAgICAgICAgICAgIGlmICghdGFiKSB7XG4gICAgICAgICAgICAgIF90aGlzMy5jbG9zZSgpO1xuXG4gICAgICAgICAgICAgIF90aGlzMy5lbWl0KFBPUFVQLkNMT1NFRCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSk7XG4gICAgICAgIH0gZWxzZSBpZiAoX3RoaXMzLl93aW5kb3cuY2xvc2VkKSB7XG4gICAgICAgICAgX3RoaXMzLmNsb3NlKCk7XG5cbiAgICAgICAgICBfdGhpczMuZW1pdChQT1BVUC5DTE9TRUQpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSwgUE9QVVBfQ0xPU0VfSU5URVJWQUwpO1xuICAgIHRoaXMub3BlblRpbWVvdXQgPSB3aW5kb3cuc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICBpZiAoIShfdGhpczMuX3dpbmRvdyAmJiAhX3RoaXMzLl93aW5kb3cuY2xvc2VkKSkge1xuICAgICAgICBfdGhpczMuY2xvc2UoKTtcblxuICAgICAgICAoMCwgX3Nob3dQb3B1cFJlcXVlc3Quc2hvd1BvcHVwUmVxdWVzdCkoX3RoaXMzLm9wZW4uYmluZChfdGhpczMpLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgX3RoaXMzLmVtaXQoUE9QVVAuQ0xPU0VEKTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfSwgUE9QVVBfT1BFTl9USU1FT1VUKTtcbiAgfTtcblxuICBfcHJvdG8ub3BlbldyYXBwZXIgPSBmdW5jdGlvbiBvcGVuV3JhcHBlcih1cmwpIHtcbiAgICB2YXIgX3RoaXM0ID0gdGhpcztcblxuICAgIGlmICh0aGlzLmV4dGVuc2lvbikge1xuICAgICAgLy8gJEZsb3dJc3N1ZSBjaHJvbWUgbm90IGRlY2xhcmVkIG91dHNpZGVcbiAgICAgIGNocm9tZS53aW5kb3dzLmdldEN1cnJlbnQobnVsbCwgZnVuY3Rpb24gKGN1cnJlbnRXaW5kb3cpIHtcbiAgICAgICAgLy8gUmVxdWVzdCBjb21pbmcgZnJvbSBleHRlbnNpb24gcG9wdXAsXG4gICAgICAgIC8vIGNyZWF0ZSBuZXcgd2luZG93IGFib3ZlIGluc3RlYWQgb2Ygb3BlbmluZyBuZXcgdGFiXG4gICAgICAgIGlmIChjdXJyZW50V2luZG93LnR5cGUgIT09ICdub3JtYWwnKSB7XG4gICAgICAgICAgLy8gJEZsb3dJc3N1ZSBjaHJvbWUgbm90IGRlY2xhcmVkIG91dHNpZGVcbiAgICAgICAgICBjaHJvbWUud2luZG93cy5jcmVhdGUoe1xuICAgICAgICAgICAgdXJsOiB1cmxcbiAgICAgICAgICB9LCBmdW5jdGlvbiAobmV3V2luZG93KSB7XG4gICAgICAgICAgICAvLyAkRmxvd0lzc3VlIGNocm9tZSBub3QgZGVjbGFyZWQgb3V0c2lkZVxuICAgICAgICAgICAgY2hyb21lLnRhYnMucXVlcnkoe1xuICAgICAgICAgICAgICB3aW5kb3dJZDogbmV3V2luZG93LmlkLFxuICAgICAgICAgICAgICBhY3RpdmU6IHRydWVcbiAgICAgICAgICAgIH0sIGZ1bmN0aW9uICh0YWJzKSB7XG4gICAgICAgICAgICAgIF90aGlzNC5fd2luZG93ID0gdGFic1swXTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIC8vICRGbG93SXNzdWUgY2hyb21lIG5vdCBkZWNsYXJlZCBvdXRzaWRlXG4gICAgICAgICAgY2hyb21lLnRhYnMucXVlcnkoe1xuICAgICAgICAgICAgY3VycmVudFdpbmRvdzogdHJ1ZSxcbiAgICAgICAgICAgIGFjdGl2ZTogdHJ1ZVxuICAgICAgICAgIH0sIGZ1bmN0aW9uICh0YWJzKSB7XG4gICAgICAgICAgICBfdGhpczQuZXh0ZW5zaW9uVGFiSWQgPSB0YWJzWzBdLmlkOyAvLyAkRmxvd0lzc3VlIGNocm9tZSBub3QgZGVjbGFyZWQgb3V0c2lkZVxuXG4gICAgICAgICAgICBjaHJvbWUudGFicy5jcmVhdGUoe1xuICAgICAgICAgICAgICB1cmw6IHVybCxcbiAgICAgICAgICAgICAgaW5kZXg6IHRhYnNbMF0uaW5kZXggKyAxXG4gICAgICAgICAgICB9LCBmdW5jdGlvbiAodGFiKSB7XG4gICAgICAgICAgICAgIF90aGlzNC5fd2luZG93ID0gdGFiO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLl93aW5kb3cgPSB3aW5kb3cub3BlbignJywgJ19ibGFuaycpO1xuXG4gICAgICBpZiAodGhpcy5fd2luZG93KSB7XG4gICAgICAgIHRoaXMuX3dpbmRvdy5sb2NhdGlvbi5ocmVmID0gdXJsOyAvLyBvdGhlcndpc2UgYW5kcm9pZC9jaHJvbWUgbG9vc2Ugd2luZG93Lm9wZW5lciByZWZlcmVuY2VcbiAgICAgIH1cbiAgICB9XG4gIH07XG5cbiAgX3Byb3RvLmhhbmRsZUV4dGVuc2lvbkNvbm5lY3QgPSBmdW5jdGlvbiBoYW5kbGVFeHRlbnNpb25Db25uZWN0KHBvcnQpIHtcbiAgICBpZiAocG9ydC5uYW1lID09PSAndHJlem9yLWNvbm5lY3QnKSB7XG4gICAgICBpZiAoIXRoaXMuX3dpbmRvdyB8fCB0aGlzLl93aW5kb3cgJiYgdGhpcy5fd2luZG93LmlkICE9PSBwb3J0LnNlbmRlci50YWIuaWQpIHtcbiAgICAgICAgcG9ydC5kaXNjb25uZWN0KCk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgdGhpcy5leHRlbnNpb25Qb3J0ID0gcG9ydDsgLy8gJEZsb3dJc3N1ZSBuZWVkIHRvIHVwZGF0ZSBDaHJvbWVQb3J0IGRlZmluaXRpb25cblxuICAgICAgdGhpcy5leHRlbnNpb25Qb3J0Lm9uTWVzc2FnZS5hZGRMaXN0ZW5lcih0aGlzLmhhbmRsZUV4dGVuc2lvbk1lc3NhZ2UpO1xuICAgIH0gZWxzZSBpZiAocG9ydC5uYW1lID09PSAndHJlem9yLXVzYi1wZXJtaXNzaW9ucycpIHtcbiAgICAgIHBvcnQucG9zdE1lc3NhZ2Uoe1xuICAgICAgICBicm9hZGNhc3Q6IHRoaXMuYnJvYWRjYXN0XG4gICAgICB9KTtcbiAgICB9XG4gIH07XG5cbiAgX3Byb3RvLmhhbmRsZUV4dGVuc2lvbk1lc3NhZ2UgPSBmdW5jdGlvbiBoYW5kbGVFeHRlbnNpb25NZXNzYWdlKG1lc3NhZ2UpIHtcbiAgICBpZiAoIXRoaXMuZXh0ZW5zaW9uUG9ydCkgcmV0dXJuO1xuXG4gICAgaWYgKG1lc3NhZ2UgPT09IFBPUFVQLkVYVEVOU0lPTl9SRVFVRVNUKSB7XG4gICAgICB0aGlzLmV4dGVuc2lvblBvcnQucG9zdE1lc3NhZ2Uoe1xuICAgICAgICB0eXBlOiBQT1BVUC5FWFRFTlNJT05fUkVRVUVTVCxcbiAgICAgICAgYnJvYWRjYXN0OiB0aGlzLmJyb2FkY2FzdFxuICAgICAgfSk7XG4gICAgfSBlbHNlIGlmIChtZXNzYWdlID09PSBQT1BVUC5JTklUICYmIHRoaXMubGF6eUxvYWQpIHtcbiAgICAgIHRoaXMubGF6eUxvYWQucmVzb2x2ZSh0cnVlKTtcbiAgICB9IGVsc2UgaWYgKG1lc3NhZ2UgPT09IFBPUFVQLkVYVEVOU0lPTl9VU0JfUEVSTUlTU0lPTlMpIHtcbiAgICAgIC8vICRGbG93SXNzdWUgY2hyb21lIG5vdCBkZWNsYXJlZCBvdXRzaWRlXG4gICAgICBjaHJvbWUudGFicy5xdWVyeSh7XG4gICAgICAgIGN1cnJlbnRXaW5kb3c6IHRydWUsXG4gICAgICAgIGFjdGl2ZTogdHJ1ZVxuICAgICAgfSwgZnVuY3Rpb24gKHRhYnMpIHtcbiAgICAgICAgLy8gJEZsb3dJc3N1ZSBjaHJvbWUgbm90IGRlY2xhcmVkIG91dHNpZGVcbiAgICAgICAgY2hyb21lLnRhYnMuY3JlYXRlKHtcbiAgICAgICAgICB1cmw6ICd0cmV6b3ItdXNiLXBlcm1pc3Npb25zLmh0bWwnLFxuICAgICAgICAgIGluZGV4OiB0YWJzWzBdLmluZGV4ICsgMVxuICAgICAgICB9LCBmdW5jdGlvbiAodGFiKSB7Ly8gZG8gbm90aGluZ1xuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICAgIH0gZWxzZSBpZiAobWVzc2FnZSA9PT0gUE9QVVAuQ0xPU0VfV0lORE9XKSB7XG4gICAgICB0aGlzLmVtaXQoUE9QVVAuQ0xPU0VEKTtcbiAgICAgIHRoaXMuY2xvc2UoKTtcbiAgICB9XG4gIH07XG5cbiAgX3Byb3RvLnNldEJyb2FkY2FzdCA9IGZ1bmN0aW9uIHNldEJyb2FkY2FzdChicm9hZGNhc3QpIHtcbiAgICB0aGlzLmJyb2FkY2FzdCA9IGJyb2FkY2FzdDtcbiAgfTtcblxuICBfcHJvdG8uaGFuZGxlTGF6eUxvYWRpbmcgPSBmdW5jdGlvbiBoYW5kbGVMYXp5TG9hZGluZyhldmVudCkge1xuICAgIGlmICh0aGlzLmxhenlMb2FkICYmIGV2ZW50LmRhdGEgJiYgZXZlbnQuZGF0YSA9PT0gUE9QVVAuSU5JVCkge1xuICAgICAgdGhpcy5sYXp5TG9hZC5yZXNvbHZlKHRydWUpO1xuICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21lc3NhZ2UnLCB0aGlzLmhhbmRsZUxhenlMb2FkaW5nLCBmYWxzZSk7XG4gICAgfVxuICB9O1xuXG4gIF9wcm90by5yZXNvbHZlTGF6eUxvYWQgPVxuICAvKiNfX1BVUkVfXyovXG4gIGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgX3Jlc29sdmVMYXp5TG9hZCA9ICgwLCBfYXN5bmNUb0dlbmVyYXRvcjJbXCJkZWZhdWx0XCJdKShcbiAgICAvKiNfX1BVUkVfXyovXG4gICAgX3JlZ2VuZXJhdG9yW1wiZGVmYXVsdFwiXS5tYXJrKGZ1bmN0aW9uIF9jYWxsZWUoKSB7XG4gICAgICByZXR1cm4gX3JlZ2VuZXJhdG9yW1wiZGVmYXVsdFwiXS53cmFwKGZ1bmN0aW9uIF9jYWxsZWUkKF9jb250ZXh0KSB7XG4gICAgICAgIHdoaWxlICgxKSB7XG4gICAgICAgICAgc3dpdGNoIChfY29udGV4dC5wcmV2ID0gX2NvbnRleHQubmV4dCkge1xuICAgICAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgICBpZiAoIXRoaXMubGF6eUxvYWQpIHtcbiAgICAgICAgICAgICAgICBfY29udGV4dC5uZXh0ID0gNTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIF9jb250ZXh0Lm5leHQgPSAzO1xuICAgICAgICAgICAgICByZXR1cm4gdGhpcy5sYXp5TG9hZC5wcm9taXNlO1xuXG4gICAgICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgICAgIF9jb250ZXh0Lm5leHQgPSA2O1xuICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgY2FzZSA1OlxuICAgICAgICAgICAgICB0aHJvdyBFUlJPUi5QT1BVUF9DTE9TRUQubWVzc2FnZTtcblxuICAgICAgICAgICAgY2FzZSA2OlxuICAgICAgICAgICAgICBpZiAodGhpcy5leHRlbnNpb24pIHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5leHRlbnNpb25Qb3J0KSB7XG4gICAgICAgICAgICAgICAgICB0aGlzLmV4dGVuc2lvblBvcnQucG9zdE1lc3NhZ2Uoe1xuICAgICAgICAgICAgICAgICAgICB0eXBlOiBQT1BVUC5JTklUXG4gICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy5fd2luZG93KSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fd2luZG93LnBvc3RNZXNzYWdlKHtcbiAgICAgICAgICAgICAgICAgIHR5cGU6IFBPUFVQLklOSVRcbiAgICAgICAgICAgICAgICB9LCB0aGlzLm9yaWdpbik7XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgY2FzZSA3OlxuICAgICAgICAgICAgY2FzZSBcImVuZFwiOlxuICAgICAgICAgICAgICByZXR1cm4gX2NvbnRleHQuc3RvcCgpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSwgX2NhbGxlZSwgdGhpcyk7XG4gICAgfSkpO1xuXG4gICAgZnVuY3Rpb24gcmVzb2x2ZUxhenlMb2FkKCkge1xuICAgICAgcmV0dXJuIF9yZXNvbHZlTGF6eUxvYWQuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICB9XG5cbiAgICByZXR1cm4gcmVzb2x2ZUxhenlMb2FkO1xuICB9KCk7XG5cbiAgX3Byb3RvLmNsb3NlID0gZnVuY3Rpb24gY2xvc2UoKSB7XG4gICAgdGhpcy5sb2NrZWQgPSBmYWxzZTtcblxuICAgIGlmICh0aGlzLnJlcXVlc3RUaW1lb3V0KSB7XG4gICAgICB3aW5kb3cuY2xlYXJUaW1lb3V0KHRoaXMucmVxdWVzdFRpbWVvdXQpO1xuICAgICAgdGhpcy5yZXF1ZXN0VGltZW91dCA9IDA7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMub3BlblRpbWVvdXQpIHtcbiAgICAgIHdpbmRvdy5jbGVhclRpbWVvdXQodGhpcy5vcGVuVGltZW91dCk7XG4gICAgICB0aGlzLm9wZW5UaW1lb3V0ID0gMDtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5jbG9zZUludGVydmFsKSB7XG4gICAgICB3aW5kb3cuY2xlYXJJbnRlcnZhbCh0aGlzLmNsb3NlSW50ZXJ2YWwpO1xuICAgICAgdGhpcy5jbG9zZUludGVydmFsID0gMDtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5leHRlbnNpb25Qb3J0KSB7XG4gICAgICB0aGlzLmV4dGVuc2lvblBvcnQuZGlzY29ubmVjdCgpO1xuICAgICAgdGhpcy5leHRlbnNpb25Qb3J0ID0gbnVsbDtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5leHRlbnNpb25UYWJJZCkge1xuICAgICAgLy8gJEZsb3dJc3N1ZSBjaHJvbWUgbm90IGRlY2xhcmVkIG91dHNpZGVcbiAgICAgIGNocm9tZS50YWJzLnVwZGF0ZSh0aGlzLmV4dGVuc2lvblRhYklkLCB7XG4gICAgICAgIGFjdGl2ZTogdHJ1ZVxuICAgICAgfSk7XG4gICAgICB0aGlzLmV4dGVuc2lvblRhYklkID0gMDtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5sYXp5TG9hZCkge1xuICAgICAgdGhpcy5sYXp5TG9hZCA9IG51bGw7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuX3dpbmRvdykge1xuICAgICAgaWYgKHRoaXMuZXh0ZW5zaW9uKSB7XG4gICAgICAgIC8vICRGbG93SXNzdWUgY2hyb21lIG5vdCBkZWNsYXJlZCBvdXRzaWRlXG4gICAgICAgIGNocm9tZS50YWJzLnJlbW92ZSh0aGlzLl93aW5kb3cuaWQpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5fd2luZG93LmNsb3NlKCk7XG4gICAgICB9XG5cbiAgICAgIHRoaXMuX3dpbmRvdyA9IG51bGw7XG4gICAgfVxuICB9O1xuXG4gIF9wcm90by5wb3N0TWVzc2FnZSA9IGZ1bmN0aW9uIHBvc3RNZXNzYWdlKG1lc3NhZ2UpIHtcbiAgICB2YXIgX3RoaXM1ID0gdGhpcztcblxuICAgIC8vIHBvc3QgbWVzc2FnZSBiZWZvcmUgcG9wdXAgcmVxdWVzdCBmaW5hbGl6ZWRcbiAgICBpZiAodGhpcy5yZXF1ZXN0VGltZW91dCkge1xuICAgICAgcmV0dXJuO1xuICAgIH0gLy8gZGV2aWNlIG5lZWRzIGludGVyYWN0aW9uIGJ1dCB0aGVyZSBpcyBubyBwb3B1cC91aVxuICAgIC8vIG1heWJlIHBvcHVwIHJlcXVlc3Qgd2Fzbid0IGhhbmRsZWRcbiAgICAvLyBpZ25vcmUgXCJ1aV9yZXF1ZXN0X3dpbmRvd1wiIHR5cGVcblxuXG4gICAgaWYgKCF0aGlzLl93aW5kb3cgJiYgbWVzc2FnZS50eXBlICE9PSAndWlfcmVxdWVzdF93aW5kb3cnICYmIHRoaXMub3BlblRpbWVvdXQpIHtcbiAgICAgIHRoaXMuY2xvc2UoKTtcbiAgICAgICgwLCBfc2hvd1BvcHVwUmVxdWVzdC5zaG93UG9wdXBSZXF1ZXN0KSh0aGlzLm9wZW4uYmluZCh0aGlzKSwgZnVuY3Rpb24gKCkge1xuICAgICAgICBfdGhpczUuZW1pdChQT1BVUC5DTE9TRUQpO1xuICAgICAgfSk7XG4gICAgICByZXR1cm47XG4gICAgfSAvLyBwb3N0IG1lc3NhZ2UgdG8gcG9wdXAgd2luZG93XG5cblxuICAgIGlmICh0aGlzLl93aW5kb3cpIHtcbiAgICAgIHRoaXMuX3dpbmRvdy5wb3N0TWVzc2FnZShtZXNzYWdlLCB0aGlzLm9yaWdpbik7XG4gICAgfVxuICB9O1xuXG4gIF9wcm90by5vbkJlZm9yZVVubG9hZCA9IGZ1bmN0aW9uIG9uQmVmb3JlVW5sb2FkKCkge1xuICAgIHRoaXMuY2xvc2UoKTtcbiAgfTtcblxuICBfcHJvdG8uY2FuY2VsT3BlblRpbWVvdXQgPSBmdW5jdGlvbiBjYW5jZWxPcGVuVGltZW91dCgpIHtcbiAgICB3aW5kb3cuY2xlYXJUaW1lb3V0KHRoaXMub3BlblRpbWVvdXQpO1xuICB9O1xuXG4gIHJldHVybiBQb3B1cE1hbmFnZXI7XG59KF9ldmVudHNbXCJkZWZhdWx0XCJdKTtcblxuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBQb3B1cE1hbmFnZXI7IiwiZnVuY3Rpb24gX2Fzc2VydFRoaXNJbml0aWFsaXplZChzZWxmKSB7XG4gIGlmIChzZWxmID09PSB2b2lkIDApIHtcbiAgICB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7XG4gIH1cblxuICByZXR1cm4gc2VsZjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfYXNzZXJ0VGhpc0luaXRpYWxpemVkO1xubW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHMsIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlOyIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbmV4cG9ydHMuc2hvd1BvcHVwUmVxdWVzdCA9IHZvaWQgMDtcbnZhciBsYXllcklEID0gJ1RyZXpvckNvbm5lY3RJbnRlcmFjdGlvbkxheWVyJztcbnZhciBsYXllcklubmVySHRtbCA9IFwiXFxuICAgIDxkaXYgY2xhc3M9XFxcInRyZXpvcmNvbm5lY3QtY29udGFpbmVyXFxcIiBpZD1cXFwiXCIgKyBsYXllcklEICsgXCJcXFwiPlxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwidHJlem9yY29ubmVjdC13aW5kb3dcXFwiPlxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcInRyZXpvcmNvbm5lY3QtaGVhZFxcXCI+XFxuICAgICAgICAgICAgICAgIDxzdmcgY2xhc3M9XFxcInRyZXpvcmNvbm5lY3QtbG9nb1xcXCIgeD1cXFwiMHB4XFxcIiB5PVxcXCIwcHhcXFwiIHZpZXdCb3g9XFxcIjAgMCAxNjMuNyA0MS45XFxcIiB3aWR0aD1cXFwiNzhweFxcXCIgaGVpZ2h0PVxcXCIyMHB4XFxcIiBwcmVzZXJ2ZUFzcGVjdFJhdGlvPVxcXCJ4TWluWU1pbiBtZWV0XFxcIj5cXG4gICAgICAgICAgICAgICAgICAgIDxwb2x5Z29uIHBvaW50cz1cXFwiMTAxLjEsMTIuOCAxMTguMiwxMi44IDExOC4yLDE3LjMgMTA4LjksMjkuOSAxMTguMiwyOS45IDExOC4yLDM1LjIgMTAxLjEsMzUuMiAxMDEuMSwzMC43IDExMC40LDE4LjEgMTAxLjEsMTguMVxcXCIvPlxcbiAgICAgICAgICAgICAgICAgICAgPHBhdGggZD1cXFwiTTE1OC44LDI2LjljMi4xLTAuOCw0LjMtMi45LDQuMy02LjZjMC00LjUtMy4xLTcuNC03LjctNy40aC0xMC41djIyLjNoNS44di03LjVoMi4ybDQuMSw3LjVoNi43TDE1OC44LDI2Ljl6IE0xNTQuNywyMi41IGgtNFYxOGg0YzEuNSwwLDIuNSwwLjksMi41LDIuMkMxNTcuMiwyMS42LDE1Ni4yLDIyLjUsMTU0LjcsMjIuNXpcXFwiLz5cXG4gICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9XFxcIk0xMzAuOCwxMi41Yy02LjgsMC0xMS42LDQuOS0xMS42LDExLjVzNC45LDExLjUsMTEuNiwxMS41czExLjctNC45LDExLjctMTEuNVMxMzcuNiwxMi41LDEzMC44LDEyLjV6IE0xMzAuOCwzMC4zIGMtMy40LDAtNS43LTIuNi01LjctNi4zYzAtMy44LDIuMy02LjMsNS43LTYuM2MzLjQsMCw1LjgsMi42LDUuOCw2LjNDMTM2LjYsMjcuNywxMzQuMiwzMC4zLDEzMC44LDMwLjN6XFxcIi8+XFxuICAgICAgICAgICAgICAgICAgICA8cG9seWdvbiBwb2ludHM9XFxcIjgyLjEsMTIuOCA5OC4zLDEyLjggOTguMywxOCA4Ny45LDE4IDg3LjksMjEuMyA5OCwyMS4zIDk4LDI2LjQgODcuOSwyNi40IDg3LjksMzAgOTguMywzMCA5OC4zLDM1LjIgODIuMSwzNS4yIFxcXCIvPlxcbiAgICAgICAgICAgICAgICAgICAgPHBhdGggZD1cXFwiTTI0LjYsOS43QzI0LjYsNC40LDIwLDAsMTQuNCwwUzQuMiw0LjQsNC4yLDkuN3YzLjFIMHYyMi4zaDBsMTQuNCw2LjdsMTQuNC02LjdoMFYxMi45aC00LjJWOS43eiBNOS40LDkuNyBjMC0yLjUsMi4yLTQuNSw1LTQuNXM1LDIsNSw0LjV2My4xSDkuNFY5Ljd6IE0yMywzMS41bC04LjYsNGwtOC42LTRWMTguMUgyM1YzMS41elxcXCIvPlxcbiAgICAgICAgICAgICAgICAgICAgPHBhdGggZD1cXFwiTTc5LjQsMjAuM2MwLTQuNS0zLjEtNy40LTcuNy03LjRINjEuMnYyMi4zSDY3di03LjVoMi4ybDQuMSw3LjVIODBsLTQuOS04LjNDNzcuMiwyNi4xLDc5LjQsMjQsNzkuNCwyMC4zeiBNNzEsMjIuNWgtNFYxOCBoNGMxLjUsMCwyLjUsMC45LDIuNSwyLjJDNzMuNSwyMS42LDcyLjUsMjIuNSw3MSwyMi41elxcXCIvPlxcbiAgICAgICAgICAgICAgICAgICAgPHBvbHlnb24gcG9pbnRzPVxcXCI0MC41LDEyLjggNTguNiwxMi44IDU4LjYsMTguMSA1Mi40LDE4LjEgNTIuNCwzNS4yIDQ2LjYsMzUuMiA0Ni42LDE4LjEgNDAuNSwxOC4xIFxcXCIvPlxcbiAgICAgICAgICAgICAgICA8L3N2Zz5cXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwidHJlem9yY29ubmVjdC1jbG9zZVxcXCI+XFxuICAgICAgICAgICAgICAgICAgICA8c3ZnIHg9XFxcIjBweFxcXCIgeT1cXFwiMHB4XFxcIiB2aWV3Qm94PVxcXCIyNCAyNCA2MCA2MFxcXCIgd2lkdGg9XFxcIjI0cHhcXFwiIGhlaWdodD1cXFwiMjRweFxcXCIgcHJlc2VydmVBc3BlY3RSYXRpbz1cXFwieE1pbllNaW4gbWVldFxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPHBvbHlnb24gY2xhc3M9XFxcInN0MFxcXCIgcG9pbnRzPVxcXCI0MCw2Ny45IDQyLjEsNzAgNTUsNTcuMSA2Ny45LDcwIDcwLDY3LjkgNTcuMSw1NSA3MCw0Mi4xIDY3LjksNDAgNTUsNTIuOSA0Mi4xLDQwIDQwLDQyLjEgNTIuOSw1NSBcXFwiLz5cXG4gICAgICAgICAgICAgICAgICAgIDwvc3ZnPlxcbiAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJ0cmV6b3Jjb25uZWN0LWJvZHlcXFwiPlxcbiAgICAgICAgICAgICAgICA8aDM+UG9wdXAgd2FzIGJsb2NrZWQ8L2gzPlxcbiAgICAgICAgICAgICAgICA8cD5QbGVhc2UgY2xpY2sgdG8gXFx1MjAxQ0NvbnRpbnVlXFx1MjAxRCB0byBvcGVuIHBvcHVwIG1hbnVhbGx5PC9wPlxcbiAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVxcXCJ0cmV6b3Jjb25uZWN0LW9wZW5cXFwiPkNvbnRpbnVlPC9idXR0b24+XFxuICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICA8L2Rpdj5cXG4gICAgPC9kaXY+XFxuXCI7XG5cbnZhciBzaG93UG9wdXBSZXF1ZXN0ID0gZnVuY3Rpb24gc2hvd1BvcHVwUmVxdWVzdChvcGVuLCBjYW5jZWwpIHtcbiAgaWYgKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGxheWVySUQpKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgdmFyIGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBkaXYuaWQgPSBsYXllcklEO1xuICBkaXYuY2xhc3NOYW1lID0gJ3RyZXpvcmNvbm5lY3QtY29udGFpbmVyJztcbiAgZGl2LmlubmVySFRNTCA9IGxheWVySW5uZXJIdG1sO1xuXG4gIGlmIChkb2N1bWVudC5ib2R5KSB7XG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChkaXYpO1xuICB9XG5cbiAgdmFyIGJ1dHRvbiA9IGRpdi5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCd0cmV6b3Jjb25uZWN0LW9wZW4nKVswXTtcblxuICBidXR0b24ub25jbGljayA9IGZ1bmN0aW9uICgpIHtcbiAgICBvcGVuKCk7XG5cbiAgICBpZiAoZG9jdW1lbnQuYm9keSkge1xuICAgICAgZG9jdW1lbnQuYm9keS5yZW1vdmVDaGlsZChkaXYpO1xuICAgIH1cbiAgfTtcblxuICB2YXIgY2xvc2UgPSBkaXYuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgndHJlem9yY29ubmVjdC1jbG9zZScpWzBdO1xuXG4gIGNsb3NlLm9uY2xpY2sgPSBmdW5jdGlvbiAoKSB7XG4gICAgY2FuY2VsKCk7XG5cbiAgICBpZiAoZG9jdW1lbnQuYm9keSkge1xuICAgICAgZG9jdW1lbnQuYm9keS5yZW1vdmVDaGlsZChkaXYpO1xuICAgIH1cbiAgfTtcbn07XG5cbmV4cG9ydHMuc2hvd1BvcHVwUmVxdWVzdCA9IHNob3dQb3B1cFJlcXVlc3Q7IiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgX2ludGVyb3BSZXF1aXJlRGVmYXVsdCA9IHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlRGVmYXVsdFwiKTtcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbmV4cG9ydHMuZ2V0T3JpZ2luID0gZXhwb3J0cy5odHRwUmVxdWVzdCA9IHZvaWQgMDtcblxudmFyIF9yZWdlbmVyYXRvciA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL3JlZ2VuZXJhdG9yXCIpKTtcblxudmFyIF9hc3luY1RvR2VuZXJhdG9yMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvYXN5bmNUb0dlbmVyYXRvclwiKSk7XG5cbnJlcXVpcmUoXCJ3aGF0d2ctZmV0Y2hcIik7XG5cbnZhciBodHRwUmVxdWVzdCA9XG4vKiNfX1BVUkVfXyovXG5mdW5jdGlvbiAoKSB7XG4gIHZhciBfcmVmID0gKDAsIF9hc3luY1RvR2VuZXJhdG9yMltcImRlZmF1bHRcIl0pKFxuICAvKiNfX1BVUkVfXyovXG4gIF9yZWdlbmVyYXRvcltcImRlZmF1bHRcIl0ubWFyayhmdW5jdGlvbiBfY2FsbGVlKHVybCwgdHlwZSkge1xuICAgIHZhciByZXNwb25zZSwgdHh0O1xuICAgIHJldHVybiBfcmVnZW5lcmF0b3JbXCJkZWZhdWx0XCJdLndyYXAoZnVuY3Rpb24gX2NhbGxlZSQoX2NvbnRleHQpIHtcbiAgICAgIHdoaWxlICgxKSB7XG4gICAgICAgIHN3aXRjaCAoX2NvbnRleHQucHJldiA9IF9jb250ZXh0Lm5leHQpIHtcbiAgICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICBpZiAodHlwZSA9PT0gdm9pZCAwKSB7XG4gICAgICAgICAgICAgIHR5cGUgPSAndGV4dCc7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIF9jb250ZXh0Lm5leHQgPSAzO1xuICAgICAgICAgICAgcmV0dXJuIGZldGNoKHVybCwge1xuICAgICAgICAgICAgICBjcmVkZW50aWFsczogJ3NhbWUtb3JpZ2luJ1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgICByZXNwb25zZSA9IF9jb250ZXh0LnNlbnQ7XG5cbiAgICAgICAgICAgIGlmICghcmVzcG9uc2Uub2spIHtcbiAgICAgICAgICAgICAgX2NvbnRleHQubmV4dCA9IDIzO1xuICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKCEodHlwZSA9PT0gJ2pzb24nKSkge1xuICAgICAgICAgICAgICBfY29udGV4dC5uZXh0ID0gMTI7XG4gICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBfY29udGV4dC5uZXh0ID0gODtcbiAgICAgICAgICAgIHJldHVybiByZXNwb25zZS50ZXh0KCk7XG5cbiAgICAgICAgICBjYXNlIDg6XG4gICAgICAgICAgICB0eHQgPSBfY29udGV4dC5zZW50O1xuICAgICAgICAgICAgcmV0dXJuIF9jb250ZXh0LmFicnVwdChcInJldHVyblwiLCBKU09OLnBhcnNlKHR4dCkpO1xuXG4gICAgICAgICAgY2FzZSAxMjpcbiAgICAgICAgICAgIGlmICghKHR5cGUgPT09ICdiaW5hcnknKSkge1xuICAgICAgICAgICAgICBfY29udGV4dC5uZXh0ID0gMTg7XG4gICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBfY29udGV4dC5uZXh0ID0gMTU7XG4gICAgICAgICAgICByZXR1cm4gcmVzcG9uc2UuYXJyYXlCdWZmZXIoKTtcblxuICAgICAgICAgIGNhc2UgMTU6XG4gICAgICAgICAgICByZXR1cm4gX2NvbnRleHQuYWJydXB0KFwicmV0dXJuXCIsIF9jb250ZXh0LnNlbnQpO1xuXG4gICAgICAgICAgY2FzZSAxODpcbiAgICAgICAgICAgIF9jb250ZXh0Lm5leHQgPSAyMDtcbiAgICAgICAgICAgIHJldHVybiByZXNwb25zZS50ZXh0KCk7XG5cbiAgICAgICAgICBjYXNlIDIwOlxuICAgICAgICAgICAgcmV0dXJuIF9jb250ZXh0LmFicnVwdChcInJldHVyblwiLCBfY29udGV4dC5zZW50KTtcblxuICAgICAgICAgIGNhc2UgMjE6XG4gICAgICAgICAgICBfY29udGV4dC5uZXh0ID0gMjQ7XG4gICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgIGNhc2UgMjM6XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJodHRwUmVxdWVzdCBlcnJvcjogXCIgKyB1cmwgKyBcIiBcIiArIHJlc3BvbnNlLnN0YXR1c1RleHQpO1xuXG4gICAgICAgICAgY2FzZSAyNDpcbiAgICAgICAgICBjYXNlIFwiZW5kXCI6XG4gICAgICAgICAgICByZXR1cm4gX2NvbnRleHQuc3RvcCgpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSwgX2NhbGxlZSk7XG4gIH0pKTtcblxuICByZXR1cm4gZnVuY3Rpb24gaHR0cFJlcXVlc3QoX3gsIF94Mikge1xuICAgIHJldHVybiBfcmVmLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gIH07XG59KCk7XG5cbmV4cG9ydHMuaHR0cFJlcXVlc3QgPSBodHRwUmVxdWVzdDtcblxudmFyIGdldE9yaWdpbiA9IGZ1bmN0aW9uIGdldE9yaWdpbih1cmwpIHtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWlycmVndWxhci13aGl0ZXNwYWNlLCBuby11c2VsZXNzLWVzY2FwZVxuICB2YXIgcGFydHMgPSB1cmwubWF0Y2goL14uK1xcOlxcL1xcL1teXFwvXSsvKTtcbiAgcmV0dXJuIEFycmF5LmlzQXJyYXkocGFydHMpICYmIHBhcnRzLmxlbmd0aCA+IDAgPyBwYXJ0c1swXSA6ICd1bmtub3duJztcbn07XG5cbmV4cG9ydHMuZ2V0T3JpZ2luID0gZ2V0T3JpZ2luOyIsInZhciBnbG9iYWwgPVxuICAodHlwZW9mIGdsb2JhbFRoaXMgIT09ICd1bmRlZmluZWQnICYmIGdsb2JhbFRoaXMpIHx8XG4gICh0eXBlb2Ygc2VsZiAhPT0gJ3VuZGVmaW5lZCcgJiYgc2VsZikgfHxcbiAgKHR5cGVvZiBnbG9iYWwgIT09ICd1bmRlZmluZWQnICYmIGdsb2JhbClcblxudmFyIHN1cHBvcnQgPSB7XG4gIHNlYXJjaFBhcmFtczogJ1VSTFNlYXJjaFBhcmFtcycgaW4gZ2xvYmFsLFxuICBpdGVyYWJsZTogJ1N5bWJvbCcgaW4gZ2xvYmFsICYmICdpdGVyYXRvcicgaW4gU3ltYm9sLFxuICBibG9iOlxuICAgICdGaWxlUmVhZGVyJyBpbiBnbG9iYWwgJiZcbiAgICAnQmxvYicgaW4gZ2xvYmFsICYmXG4gICAgKGZ1bmN0aW9uKCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgbmV3IEJsb2IoKVxuICAgICAgICByZXR1cm4gdHJ1ZVxuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICByZXR1cm4gZmFsc2VcbiAgICAgIH1cbiAgICB9KSgpLFxuICBmb3JtRGF0YTogJ0Zvcm1EYXRhJyBpbiBnbG9iYWwsXG4gIGFycmF5QnVmZmVyOiAnQXJyYXlCdWZmZXInIGluIGdsb2JhbFxufVxuXG5mdW5jdGlvbiBpc0RhdGFWaWV3KG9iaikge1xuICByZXR1cm4gb2JqICYmIERhdGFWaWV3LnByb3RvdHlwZS5pc1Byb3RvdHlwZU9mKG9iailcbn1cblxuaWYgKHN1cHBvcnQuYXJyYXlCdWZmZXIpIHtcbiAgdmFyIHZpZXdDbGFzc2VzID0gW1xuICAgICdbb2JqZWN0IEludDhBcnJheV0nLFxuICAgICdbb2JqZWN0IFVpbnQ4QXJyYXldJyxcbiAgICAnW29iamVjdCBVaW50OENsYW1wZWRBcnJheV0nLFxuICAgICdbb2JqZWN0IEludDE2QXJyYXldJyxcbiAgICAnW29iamVjdCBVaW50MTZBcnJheV0nLFxuICAgICdbb2JqZWN0IEludDMyQXJyYXldJyxcbiAgICAnW29iamVjdCBVaW50MzJBcnJheV0nLFxuICAgICdbb2JqZWN0IEZsb2F0MzJBcnJheV0nLFxuICAgICdbb2JqZWN0IEZsb2F0NjRBcnJheV0nXG4gIF1cblxuICB2YXIgaXNBcnJheUJ1ZmZlclZpZXcgPVxuICAgIEFycmF5QnVmZmVyLmlzVmlldyB8fFxuICAgIGZ1bmN0aW9uKG9iaikge1xuICAgICAgcmV0dXJuIG9iaiAmJiB2aWV3Q2xhc3Nlcy5pbmRleE9mKE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChvYmopKSA+IC0xXG4gICAgfVxufVxuXG5mdW5jdGlvbiBub3JtYWxpemVOYW1lKG5hbWUpIHtcbiAgaWYgKHR5cGVvZiBuYW1lICE9PSAnc3RyaW5nJykge1xuICAgIG5hbWUgPSBTdHJpbmcobmFtZSlcbiAgfVxuICBpZiAoL1teYS16MC05XFwtIyQlJicqKy5eX2B8fiFdL2kudGVzdChuYW1lKSB8fCBuYW1lID09PSAnJykge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ0ludmFsaWQgY2hhcmFjdGVyIGluIGhlYWRlciBmaWVsZCBuYW1lOiBcIicgKyBuYW1lICsgJ1wiJylcbiAgfVxuICByZXR1cm4gbmFtZS50b0xvd2VyQ2FzZSgpXG59XG5cbmZ1bmN0aW9uIG5vcm1hbGl6ZVZhbHVlKHZhbHVlKSB7XG4gIGlmICh0eXBlb2YgdmFsdWUgIT09ICdzdHJpbmcnKSB7XG4gICAgdmFsdWUgPSBTdHJpbmcodmFsdWUpXG4gIH1cbiAgcmV0dXJuIHZhbHVlXG59XG5cbi8vIEJ1aWxkIGEgZGVzdHJ1Y3RpdmUgaXRlcmF0b3IgZm9yIHRoZSB2YWx1ZSBsaXN0XG5mdW5jdGlvbiBpdGVyYXRvckZvcihpdGVtcykge1xuICB2YXIgaXRlcmF0b3IgPSB7XG4gICAgbmV4dDogZnVuY3Rpb24oKSB7XG4gICAgICB2YXIgdmFsdWUgPSBpdGVtcy5zaGlmdCgpXG4gICAgICByZXR1cm4ge2RvbmU6IHZhbHVlID09PSB1bmRlZmluZWQsIHZhbHVlOiB2YWx1ZX1cbiAgICB9XG4gIH1cblxuICBpZiAoc3VwcG9ydC5pdGVyYWJsZSkge1xuICAgIGl0ZXJhdG9yW1N5bWJvbC5pdGVyYXRvcl0gPSBmdW5jdGlvbigpIHtcbiAgICAgIHJldHVybiBpdGVyYXRvclxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBpdGVyYXRvclxufVxuXG5leHBvcnQgZnVuY3Rpb24gSGVhZGVycyhoZWFkZXJzKSB7XG4gIHRoaXMubWFwID0ge31cblxuICBpZiAoaGVhZGVycyBpbnN0YW5jZW9mIEhlYWRlcnMpIHtcbiAgICBoZWFkZXJzLmZvckVhY2goZnVuY3Rpb24odmFsdWUsIG5hbWUpIHtcbiAgICAgIHRoaXMuYXBwZW5kKG5hbWUsIHZhbHVlKVxuICAgIH0sIHRoaXMpXG4gIH0gZWxzZSBpZiAoQXJyYXkuaXNBcnJheShoZWFkZXJzKSkge1xuICAgIGhlYWRlcnMuZm9yRWFjaChmdW5jdGlvbihoZWFkZXIpIHtcbiAgICAgIHRoaXMuYXBwZW5kKGhlYWRlclswXSwgaGVhZGVyWzFdKVxuICAgIH0sIHRoaXMpXG4gIH0gZWxzZSBpZiAoaGVhZGVycykge1xuICAgIE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKGhlYWRlcnMpLmZvckVhY2goZnVuY3Rpb24obmFtZSkge1xuICAgICAgdGhpcy5hcHBlbmQobmFtZSwgaGVhZGVyc1tuYW1lXSlcbiAgICB9LCB0aGlzKVxuICB9XG59XG5cbkhlYWRlcnMucHJvdG90eXBlLmFwcGVuZCA9IGZ1bmN0aW9uKG5hbWUsIHZhbHVlKSB7XG4gIG5hbWUgPSBub3JtYWxpemVOYW1lKG5hbWUpXG4gIHZhbHVlID0gbm9ybWFsaXplVmFsdWUodmFsdWUpXG4gIHZhciBvbGRWYWx1ZSA9IHRoaXMubWFwW25hbWVdXG4gIHRoaXMubWFwW25hbWVdID0gb2xkVmFsdWUgPyBvbGRWYWx1ZSArICcsICcgKyB2YWx1ZSA6IHZhbHVlXG59XG5cbkhlYWRlcnMucHJvdG90eXBlWydkZWxldGUnXSA9IGZ1bmN0aW9uKG5hbWUpIHtcbiAgZGVsZXRlIHRoaXMubWFwW25vcm1hbGl6ZU5hbWUobmFtZSldXG59XG5cbkhlYWRlcnMucHJvdG90eXBlLmdldCA9IGZ1bmN0aW9uKG5hbWUpIHtcbiAgbmFtZSA9IG5vcm1hbGl6ZU5hbWUobmFtZSlcbiAgcmV0dXJuIHRoaXMuaGFzKG5hbWUpID8gdGhpcy5tYXBbbmFtZV0gOiBudWxsXG59XG5cbkhlYWRlcnMucHJvdG90eXBlLmhhcyA9IGZ1bmN0aW9uKG5hbWUpIHtcbiAgcmV0dXJuIHRoaXMubWFwLmhhc093blByb3BlcnR5KG5vcm1hbGl6ZU5hbWUobmFtZSkpXG59XG5cbkhlYWRlcnMucHJvdG90eXBlLnNldCA9IGZ1bmN0aW9uKG5hbWUsIHZhbHVlKSB7XG4gIHRoaXMubWFwW25vcm1hbGl6ZU5hbWUobmFtZSldID0gbm9ybWFsaXplVmFsdWUodmFsdWUpXG59XG5cbkhlYWRlcnMucHJvdG90eXBlLmZvckVhY2ggPSBmdW5jdGlvbihjYWxsYmFjaywgdGhpc0FyZykge1xuICBmb3IgKHZhciBuYW1lIGluIHRoaXMubWFwKSB7XG4gICAgaWYgKHRoaXMubWFwLmhhc093blByb3BlcnR5KG5hbWUpKSB7XG4gICAgICBjYWxsYmFjay5jYWxsKHRoaXNBcmcsIHRoaXMubWFwW25hbWVdLCBuYW1lLCB0aGlzKVxuICAgIH1cbiAgfVxufVxuXG5IZWFkZXJzLnByb3RvdHlwZS5rZXlzID0gZnVuY3Rpb24oKSB7XG4gIHZhciBpdGVtcyA9IFtdXG4gIHRoaXMuZm9yRWFjaChmdW5jdGlvbih2YWx1ZSwgbmFtZSkge1xuICAgIGl0ZW1zLnB1c2gobmFtZSlcbiAgfSlcbiAgcmV0dXJuIGl0ZXJhdG9yRm9yKGl0ZW1zKVxufVxuXG5IZWFkZXJzLnByb3RvdHlwZS52YWx1ZXMgPSBmdW5jdGlvbigpIHtcbiAgdmFyIGl0ZW1zID0gW11cbiAgdGhpcy5mb3JFYWNoKGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgaXRlbXMucHVzaCh2YWx1ZSlcbiAgfSlcbiAgcmV0dXJuIGl0ZXJhdG9yRm9yKGl0ZW1zKVxufVxuXG5IZWFkZXJzLnByb3RvdHlwZS5lbnRyaWVzID0gZnVuY3Rpb24oKSB7XG4gIHZhciBpdGVtcyA9IFtdXG4gIHRoaXMuZm9yRWFjaChmdW5jdGlvbih2YWx1ZSwgbmFtZSkge1xuICAgIGl0ZW1zLnB1c2goW25hbWUsIHZhbHVlXSlcbiAgfSlcbiAgcmV0dXJuIGl0ZXJhdG9yRm9yKGl0ZW1zKVxufVxuXG5pZiAoc3VwcG9ydC5pdGVyYWJsZSkge1xuICBIZWFkZXJzLnByb3RvdHlwZVtTeW1ib2wuaXRlcmF0b3JdID0gSGVhZGVycy5wcm90b3R5cGUuZW50cmllc1xufVxuXG5mdW5jdGlvbiBjb25zdW1lZChib2R5KSB7XG4gIGlmIChib2R5LmJvZHlVc2VkKSB7XG4gICAgcmV0dXJuIFByb21pc2UucmVqZWN0KG5ldyBUeXBlRXJyb3IoJ0FscmVhZHkgcmVhZCcpKVxuICB9XG4gIGJvZHkuYm9keVVzZWQgPSB0cnVlXG59XG5cbmZ1bmN0aW9uIGZpbGVSZWFkZXJSZWFkeShyZWFkZXIpIHtcbiAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uKHJlc29sdmUsIHJlamVjdCkge1xuICAgIHJlYWRlci5vbmxvYWQgPSBmdW5jdGlvbigpIHtcbiAgICAgIHJlc29sdmUocmVhZGVyLnJlc3VsdClcbiAgICB9XG4gICAgcmVhZGVyLm9uZXJyb3IgPSBmdW5jdGlvbigpIHtcbiAgICAgIHJlamVjdChyZWFkZXIuZXJyb3IpXG4gICAgfVxuICB9KVxufVxuXG5mdW5jdGlvbiByZWFkQmxvYkFzQXJyYXlCdWZmZXIoYmxvYikge1xuICB2YXIgcmVhZGVyID0gbmV3IEZpbGVSZWFkZXIoKVxuICB2YXIgcHJvbWlzZSA9IGZpbGVSZWFkZXJSZWFkeShyZWFkZXIpXG4gIHJlYWRlci5yZWFkQXNBcnJheUJ1ZmZlcihibG9iKVxuICByZXR1cm4gcHJvbWlzZVxufVxuXG5mdW5jdGlvbiByZWFkQmxvYkFzVGV4dChibG9iKSB7XG4gIHZhciByZWFkZXIgPSBuZXcgRmlsZVJlYWRlcigpXG4gIHZhciBwcm9taXNlID0gZmlsZVJlYWRlclJlYWR5KHJlYWRlcilcbiAgcmVhZGVyLnJlYWRBc1RleHQoYmxvYilcbiAgcmV0dXJuIHByb21pc2Vcbn1cblxuZnVuY3Rpb24gcmVhZEFycmF5QnVmZmVyQXNUZXh0KGJ1Zikge1xuICB2YXIgdmlldyA9IG5ldyBVaW50OEFycmF5KGJ1ZilcbiAgdmFyIGNoYXJzID0gbmV3IEFycmF5KHZpZXcubGVuZ3RoKVxuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgdmlldy5sZW5ndGg7IGkrKykge1xuICAgIGNoYXJzW2ldID0gU3RyaW5nLmZyb21DaGFyQ29kZSh2aWV3W2ldKVxuICB9XG4gIHJldHVybiBjaGFycy5qb2luKCcnKVxufVxuXG5mdW5jdGlvbiBidWZmZXJDbG9uZShidWYpIHtcbiAgaWYgKGJ1Zi5zbGljZSkge1xuICAgIHJldHVybiBidWYuc2xpY2UoMClcbiAgfSBlbHNlIHtcbiAgICB2YXIgdmlldyA9IG5ldyBVaW50OEFycmF5KGJ1Zi5ieXRlTGVuZ3RoKVxuICAgIHZpZXcuc2V0KG5ldyBVaW50OEFycmF5KGJ1ZikpXG4gICAgcmV0dXJuIHZpZXcuYnVmZmVyXG4gIH1cbn1cblxuZnVuY3Rpb24gQm9keSgpIHtcbiAgdGhpcy5ib2R5VXNlZCA9IGZhbHNlXG5cbiAgdGhpcy5faW5pdEJvZHkgPSBmdW5jdGlvbihib2R5KSB7XG4gICAgLypcbiAgICAgIGZldGNoLW1vY2sgd3JhcHMgdGhlIFJlc3BvbnNlIG9iamVjdCBpbiBhbiBFUzYgUHJveHkgdG9cbiAgICAgIHByb3ZpZGUgdXNlZnVsIHRlc3QgaGFybmVzcyBmZWF0dXJlcyBzdWNoIGFzIGZsdXNoLiBIb3dldmVyLCBvblxuICAgICAgRVM1IGJyb3dzZXJzIHdpdGhvdXQgZmV0Y2ggb3IgUHJveHkgc3VwcG9ydCBwb2xseWZpbGxzIG11c3QgYmUgdXNlZDtcbiAgICAgIHRoZSBwcm94eS1wb2xseWZpbGwgaXMgdW5hYmxlIHRvIHByb3h5IGFuIGF0dHJpYnV0ZSB1bmxlc3MgaXQgZXhpc3RzXG4gICAgICBvbiB0aGUgb2JqZWN0IGJlZm9yZSB0aGUgUHJveHkgaXMgY3JlYXRlZC4gVGhpcyBjaGFuZ2UgZW5zdXJlc1xuICAgICAgUmVzcG9uc2UuYm9keVVzZWQgZXhpc3RzIG9uIHRoZSBpbnN0YW5jZSwgd2hpbGUgbWFpbnRhaW5pbmcgdGhlXG4gICAgICBzZW1hbnRpYyBvZiBzZXR0aW5nIFJlcXVlc3QuYm9keVVzZWQgaW4gdGhlIGNvbnN0cnVjdG9yIGJlZm9yZVxuICAgICAgX2luaXRCb2R5IGlzIGNhbGxlZC5cbiAgICAqL1xuICAgIHRoaXMuYm9keVVzZWQgPSB0aGlzLmJvZHlVc2VkXG4gICAgdGhpcy5fYm9keUluaXQgPSBib2R5XG4gICAgaWYgKCFib2R5KSB7XG4gICAgICB0aGlzLl9ib2R5VGV4dCA9ICcnXG4gICAgfSBlbHNlIGlmICh0eXBlb2YgYm9keSA9PT0gJ3N0cmluZycpIHtcbiAgICAgIHRoaXMuX2JvZHlUZXh0ID0gYm9keVxuICAgIH0gZWxzZSBpZiAoc3VwcG9ydC5ibG9iICYmIEJsb2IucHJvdG90eXBlLmlzUHJvdG90eXBlT2YoYm9keSkpIHtcbiAgICAgIHRoaXMuX2JvZHlCbG9iID0gYm9keVxuICAgIH0gZWxzZSBpZiAoc3VwcG9ydC5mb3JtRGF0YSAmJiBGb3JtRGF0YS5wcm90b3R5cGUuaXNQcm90b3R5cGVPZihib2R5KSkge1xuICAgICAgdGhpcy5fYm9keUZvcm1EYXRhID0gYm9keVxuICAgIH0gZWxzZSBpZiAoc3VwcG9ydC5zZWFyY2hQYXJhbXMgJiYgVVJMU2VhcmNoUGFyYW1zLnByb3RvdHlwZS5pc1Byb3RvdHlwZU9mKGJvZHkpKSB7XG4gICAgICB0aGlzLl9ib2R5VGV4dCA9IGJvZHkudG9TdHJpbmcoKVxuICAgIH0gZWxzZSBpZiAoc3VwcG9ydC5hcnJheUJ1ZmZlciAmJiBzdXBwb3J0LmJsb2IgJiYgaXNEYXRhVmlldyhib2R5KSkge1xuICAgICAgdGhpcy5fYm9keUFycmF5QnVmZmVyID0gYnVmZmVyQ2xvbmUoYm9keS5idWZmZXIpXG4gICAgICAvLyBJRSAxMC0xMSBjYW4ndCBoYW5kbGUgYSBEYXRhVmlldyBib2R5LlxuICAgICAgdGhpcy5fYm9keUluaXQgPSBuZXcgQmxvYihbdGhpcy5fYm9keUFycmF5QnVmZmVyXSlcbiAgICB9IGVsc2UgaWYgKHN1cHBvcnQuYXJyYXlCdWZmZXIgJiYgKEFycmF5QnVmZmVyLnByb3RvdHlwZS5pc1Byb3RvdHlwZU9mKGJvZHkpIHx8IGlzQXJyYXlCdWZmZXJWaWV3KGJvZHkpKSkge1xuICAgICAgdGhpcy5fYm9keUFycmF5QnVmZmVyID0gYnVmZmVyQ2xvbmUoYm9keSlcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5fYm9keVRleHQgPSBib2R5ID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKGJvZHkpXG4gICAgfVxuXG4gICAgaWYgKCF0aGlzLmhlYWRlcnMuZ2V0KCdjb250ZW50LXR5cGUnKSkge1xuICAgICAgaWYgKHR5cGVvZiBib2R5ID09PSAnc3RyaW5nJykge1xuICAgICAgICB0aGlzLmhlYWRlcnMuc2V0KCdjb250ZW50LXR5cGUnLCAndGV4dC9wbGFpbjtjaGFyc2V0PVVURi04JylcbiAgICAgIH0gZWxzZSBpZiAodGhpcy5fYm9keUJsb2IgJiYgdGhpcy5fYm9keUJsb2IudHlwZSkge1xuICAgICAgICB0aGlzLmhlYWRlcnMuc2V0KCdjb250ZW50LXR5cGUnLCB0aGlzLl9ib2R5QmxvYi50eXBlKVxuICAgICAgfSBlbHNlIGlmIChzdXBwb3J0LnNlYXJjaFBhcmFtcyAmJiBVUkxTZWFyY2hQYXJhbXMucHJvdG90eXBlLmlzUHJvdG90eXBlT2YoYm9keSkpIHtcbiAgICAgICAgdGhpcy5oZWFkZXJzLnNldCgnY29udGVudC10eXBlJywgJ2FwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZDtjaGFyc2V0PVVURi04JylcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBpZiAoc3VwcG9ydC5ibG9iKSB7XG4gICAgdGhpcy5ibG9iID0gZnVuY3Rpb24oKSB7XG4gICAgICB2YXIgcmVqZWN0ZWQgPSBjb25zdW1lZCh0aGlzKVxuICAgICAgaWYgKHJlamVjdGVkKSB7XG4gICAgICAgIHJldHVybiByZWplY3RlZFxuICAgICAgfVxuXG4gICAgICBpZiAodGhpcy5fYm9keUJsb2IpIHtcbiAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSh0aGlzLl9ib2R5QmxvYilcbiAgICAgIH0gZWxzZSBpZiAodGhpcy5fYm9keUFycmF5QnVmZmVyKSB7XG4gICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUobmV3IEJsb2IoW3RoaXMuX2JvZHlBcnJheUJ1ZmZlcl0pKVxuICAgICAgfSBlbHNlIGlmICh0aGlzLl9ib2R5Rm9ybURhdGEpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdjb3VsZCBub3QgcmVhZCBGb3JtRGF0YSBib2R5IGFzIGJsb2InKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShuZXcgQmxvYihbdGhpcy5fYm9keVRleHRdKSlcbiAgICAgIH1cbiAgICB9XG5cbiAgICB0aGlzLmFycmF5QnVmZmVyID0gZnVuY3Rpb24oKSB7XG4gICAgICBpZiAodGhpcy5fYm9keUFycmF5QnVmZmVyKSB7XG4gICAgICAgIHZhciBpc0NvbnN1bWVkID0gY29uc3VtZWQodGhpcylcbiAgICAgICAgaWYgKGlzQ29uc3VtZWQpIHtcbiAgICAgICAgICByZXR1cm4gaXNDb25zdW1lZFxuICAgICAgICB9XG4gICAgICAgIGlmIChBcnJheUJ1ZmZlci5pc1ZpZXcodGhpcy5fYm9keUFycmF5QnVmZmVyKSkge1xuICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoXG4gICAgICAgICAgICB0aGlzLl9ib2R5QXJyYXlCdWZmZXIuYnVmZmVyLnNsaWNlKFxuICAgICAgICAgICAgICB0aGlzLl9ib2R5QXJyYXlCdWZmZXIuYnl0ZU9mZnNldCxcbiAgICAgICAgICAgICAgdGhpcy5fYm9keUFycmF5QnVmZmVyLmJ5dGVPZmZzZXQgKyB0aGlzLl9ib2R5QXJyYXlCdWZmZXIuYnl0ZUxlbmd0aFxuICAgICAgICAgICAgKVxuICAgICAgICAgIClcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHRoaXMuX2JvZHlBcnJheUJ1ZmZlcilcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuYmxvYigpLnRoZW4ocmVhZEJsb2JBc0FycmF5QnVmZmVyKVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHRoaXMudGV4dCA9IGZ1bmN0aW9uKCkge1xuICAgIHZhciByZWplY3RlZCA9IGNvbnN1bWVkKHRoaXMpXG4gICAgaWYgKHJlamVjdGVkKSB7XG4gICAgICByZXR1cm4gcmVqZWN0ZWRcbiAgICB9XG5cbiAgICBpZiAodGhpcy5fYm9keUJsb2IpIHtcbiAgICAgIHJldHVybiByZWFkQmxvYkFzVGV4dCh0aGlzLl9ib2R5QmxvYilcbiAgICB9IGVsc2UgaWYgKHRoaXMuX2JvZHlBcnJheUJ1ZmZlcikge1xuICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShyZWFkQXJyYXlCdWZmZXJBc1RleHQodGhpcy5fYm9keUFycmF5QnVmZmVyKSlcbiAgICB9IGVsc2UgaWYgKHRoaXMuX2JvZHlGb3JtRGF0YSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdjb3VsZCBub3QgcmVhZCBGb3JtRGF0YSBib2R5IGFzIHRleHQnKVxuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHRoaXMuX2JvZHlUZXh0KVxuICAgIH1cbiAgfVxuXG4gIGlmIChzdXBwb3J0LmZvcm1EYXRhKSB7XG4gICAgdGhpcy5mb3JtRGF0YSA9IGZ1bmN0aW9uKCkge1xuICAgICAgcmV0dXJuIHRoaXMudGV4dCgpLnRoZW4oZGVjb2RlKVxuICAgIH1cbiAgfVxuXG4gIHRoaXMuanNvbiA9IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLnRleHQoKS50aGVuKEpTT04ucGFyc2UpXG4gIH1cblxuICByZXR1cm4gdGhpc1xufVxuXG4vLyBIVFRQIG1ldGhvZHMgd2hvc2UgY2FwaXRhbGl6YXRpb24gc2hvdWxkIGJlIG5vcm1hbGl6ZWRcbnZhciBtZXRob2RzID0gWydERUxFVEUnLCAnR0VUJywgJ0hFQUQnLCAnT1BUSU9OUycsICdQT1NUJywgJ1BVVCddXG5cbmZ1bmN0aW9uIG5vcm1hbGl6ZU1ldGhvZChtZXRob2QpIHtcbiAgdmFyIHVwY2FzZWQgPSBtZXRob2QudG9VcHBlckNhc2UoKVxuICByZXR1cm4gbWV0aG9kcy5pbmRleE9mKHVwY2FzZWQpID4gLTEgPyB1cGNhc2VkIDogbWV0aG9kXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBSZXF1ZXN0KGlucHV0LCBvcHRpb25zKSB7XG4gIGlmICghKHRoaXMgaW5zdGFuY2VvZiBSZXF1ZXN0KSkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ1BsZWFzZSB1c2UgdGhlIFwibmV3XCIgb3BlcmF0b3IsIHRoaXMgRE9NIG9iamVjdCBjb25zdHJ1Y3RvciBjYW5ub3QgYmUgY2FsbGVkIGFzIGEgZnVuY3Rpb24uJylcbiAgfVxuXG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9XG4gIHZhciBib2R5ID0gb3B0aW9ucy5ib2R5XG5cbiAgaWYgKGlucHV0IGluc3RhbmNlb2YgUmVxdWVzdCkge1xuICAgIGlmIChpbnB1dC5ib2R5VXNlZCkge1xuICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignQWxyZWFkeSByZWFkJylcbiAgICB9XG4gICAgdGhpcy51cmwgPSBpbnB1dC51cmxcbiAgICB0aGlzLmNyZWRlbnRpYWxzID0gaW5wdXQuY3JlZGVudGlhbHNcbiAgICBpZiAoIW9wdGlvbnMuaGVhZGVycykge1xuICAgICAgdGhpcy5oZWFkZXJzID0gbmV3IEhlYWRlcnMoaW5wdXQuaGVhZGVycylcbiAgICB9XG4gICAgdGhpcy5tZXRob2QgPSBpbnB1dC5tZXRob2RcbiAgICB0aGlzLm1vZGUgPSBpbnB1dC5tb2RlXG4gICAgdGhpcy5zaWduYWwgPSBpbnB1dC5zaWduYWxcbiAgICBpZiAoIWJvZHkgJiYgaW5wdXQuX2JvZHlJbml0ICE9IG51bGwpIHtcbiAgICAgIGJvZHkgPSBpbnB1dC5fYm9keUluaXRcbiAgICAgIGlucHV0LmJvZHlVc2VkID0gdHJ1ZVxuICAgIH1cbiAgfSBlbHNlIHtcbiAgICB0aGlzLnVybCA9IFN0cmluZyhpbnB1dClcbiAgfVxuXG4gIHRoaXMuY3JlZGVudGlhbHMgPSBvcHRpb25zLmNyZWRlbnRpYWxzIHx8IHRoaXMuY3JlZGVudGlhbHMgfHwgJ3NhbWUtb3JpZ2luJ1xuICBpZiAob3B0aW9ucy5oZWFkZXJzIHx8ICF0aGlzLmhlYWRlcnMpIHtcbiAgICB0aGlzLmhlYWRlcnMgPSBuZXcgSGVhZGVycyhvcHRpb25zLmhlYWRlcnMpXG4gIH1cbiAgdGhpcy5tZXRob2QgPSBub3JtYWxpemVNZXRob2Qob3B0aW9ucy5tZXRob2QgfHwgdGhpcy5tZXRob2QgfHwgJ0dFVCcpXG4gIHRoaXMubW9kZSA9IG9wdGlvbnMubW9kZSB8fCB0aGlzLm1vZGUgfHwgbnVsbFxuICB0aGlzLnNpZ25hbCA9IG9wdGlvbnMuc2lnbmFsIHx8IHRoaXMuc2lnbmFsXG4gIHRoaXMucmVmZXJyZXIgPSBudWxsXG5cbiAgaWYgKCh0aGlzLm1ldGhvZCA9PT0gJ0dFVCcgfHwgdGhpcy5tZXRob2QgPT09ICdIRUFEJykgJiYgYm9keSkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ0JvZHkgbm90IGFsbG93ZWQgZm9yIEdFVCBvciBIRUFEIHJlcXVlc3RzJylcbiAgfVxuICB0aGlzLl9pbml0Qm9keShib2R5KVxuXG4gIGlmICh0aGlzLm1ldGhvZCA9PT0gJ0dFVCcgfHwgdGhpcy5tZXRob2QgPT09ICdIRUFEJykge1xuICAgIGlmIChvcHRpb25zLmNhY2hlID09PSAnbm8tc3RvcmUnIHx8IG9wdGlvbnMuY2FjaGUgPT09ICduby1jYWNoZScpIHtcbiAgICAgIC8vIFNlYXJjaCBmb3IgYSAnXycgcGFyYW1ldGVyIGluIHRoZSBxdWVyeSBzdHJpbmdcbiAgICAgIHZhciByZVBhcmFtU2VhcmNoID0gLyhbPyZdKV89W14mXSovXG4gICAgICBpZiAocmVQYXJhbVNlYXJjaC50ZXN0KHRoaXMudXJsKSkge1xuICAgICAgICAvLyBJZiBpdCBhbHJlYWR5IGV4aXN0cyB0aGVuIHNldCB0aGUgdmFsdWUgd2l0aCB0aGUgY3VycmVudCB0aW1lXG4gICAgICAgIHRoaXMudXJsID0gdGhpcy51cmwucmVwbGFjZShyZVBhcmFtU2VhcmNoLCAnJDFfPScgKyBuZXcgRGF0ZSgpLmdldFRpbWUoKSlcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIE90aGVyd2lzZSBhZGQgYSBuZXcgJ18nIHBhcmFtZXRlciB0byB0aGUgZW5kIHdpdGggdGhlIGN1cnJlbnQgdGltZVxuICAgICAgICB2YXIgcmVRdWVyeVN0cmluZyA9IC9cXD8vXG4gICAgICAgIHRoaXMudXJsICs9IChyZVF1ZXJ5U3RyaW5nLnRlc3QodGhpcy51cmwpID8gJyYnIDogJz8nKSArICdfPScgKyBuZXcgRGF0ZSgpLmdldFRpbWUoKVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG5SZXF1ZXN0LnByb3RvdHlwZS5jbG9uZSA9IGZ1bmN0aW9uKCkge1xuICByZXR1cm4gbmV3IFJlcXVlc3QodGhpcywge2JvZHk6IHRoaXMuX2JvZHlJbml0fSlcbn1cblxuZnVuY3Rpb24gZGVjb2RlKGJvZHkpIHtcbiAgdmFyIGZvcm0gPSBuZXcgRm9ybURhdGEoKVxuICBib2R5XG4gICAgLnRyaW0oKVxuICAgIC5zcGxpdCgnJicpXG4gICAgLmZvckVhY2goZnVuY3Rpb24oYnl0ZXMpIHtcbiAgICAgIGlmIChieXRlcykge1xuICAgICAgICB2YXIgc3BsaXQgPSBieXRlcy5zcGxpdCgnPScpXG4gICAgICAgIHZhciBuYW1lID0gc3BsaXQuc2hpZnQoKS5yZXBsYWNlKC9cXCsvZywgJyAnKVxuICAgICAgICB2YXIgdmFsdWUgPSBzcGxpdC5qb2luKCc9JykucmVwbGFjZSgvXFwrL2csICcgJylcbiAgICAgICAgZm9ybS5hcHBlbmQoZGVjb2RlVVJJQ29tcG9uZW50KG5hbWUpLCBkZWNvZGVVUklDb21wb25lbnQodmFsdWUpKVxuICAgICAgfVxuICAgIH0pXG4gIHJldHVybiBmb3JtXG59XG5cbmZ1bmN0aW9uIHBhcnNlSGVhZGVycyhyYXdIZWFkZXJzKSB7XG4gIHZhciBoZWFkZXJzID0gbmV3IEhlYWRlcnMoKVxuICAvLyBSZXBsYWNlIGluc3RhbmNlcyBvZiBcXHJcXG4gYW5kIFxcbiBmb2xsb3dlZCBieSBhdCBsZWFzdCBvbmUgc3BhY2Ugb3IgaG9yaXpvbnRhbCB0YWIgd2l0aCBhIHNwYWNlXG4gIC8vIGh0dHBzOi8vdG9vbHMuaWV0Zi5vcmcvaHRtbC9yZmM3MjMwI3NlY3Rpb24tMy4yXG4gIHZhciBwcmVQcm9jZXNzZWRIZWFkZXJzID0gcmF3SGVhZGVycy5yZXBsYWNlKC9cXHI/XFxuW1xcdCBdKy9nLCAnICcpXG4gIC8vIEF2b2lkaW5nIHNwbGl0IHZpYSByZWdleCB0byB3b3JrIGFyb3VuZCBhIGNvbW1vbiBJRTExIGJ1ZyB3aXRoIHRoZSBjb3JlLWpzIDMuNi4wIHJlZ2V4IHBvbHlmaWxsXG4gIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9naXRodWIvZmV0Y2gvaXNzdWVzLzc0OFxuICAvLyBodHRwczovL2dpdGh1Yi5jb20vemxvaXJvY2svY29yZS1qcy9pc3N1ZXMvNzUxXG4gIHByZVByb2Nlc3NlZEhlYWRlcnNcbiAgICAuc3BsaXQoJ1xccicpXG4gICAgLm1hcChmdW5jdGlvbihoZWFkZXIpIHtcbiAgICAgIHJldHVybiBoZWFkZXIuaW5kZXhPZignXFxuJykgPT09IDAgPyBoZWFkZXIuc3Vic3RyKDEsIGhlYWRlci5sZW5ndGgpIDogaGVhZGVyXG4gICAgfSlcbiAgICAuZm9yRWFjaChmdW5jdGlvbihsaW5lKSB7XG4gICAgICB2YXIgcGFydHMgPSBsaW5lLnNwbGl0KCc6JylcbiAgICAgIHZhciBrZXkgPSBwYXJ0cy5zaGlmdCgpLnRyaW0oKVxuICAgICAgaWYgKGtleSkge1xuICAgICAgICB2YXIgdmFsdWUgPSBwYXJ0cy5qb2luKCc6JykudHJpbSgpXG4gICAgICAgIGhlYWRlcnMuYXBwZW5kKGtleSwgdmFsdWUpXG4gICAgICB9XG4gICAgfSlcbiAgcmV0dXJuIGhlYWRlcnNcbn1cblxuQm9keS5jYWxsKFJlcXVlc3QucHJvdG90eXBlKVxuXG5leHBvcnQgZnVuY3Rpb24gUmVzcG9uc2UoYm9keUluaXQsIG9wdGlvbnMpIHtcbiAgaWYgKCEodGhpcyBpbnN0YW5jZW9mIFJlc3BvbnNlKSkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ1BsZWFzZSB1c2UgdGhlIFwibmV3XCIgb3BlcmF0b3IsIHRoaXMgRE9NIG9iamVjdCBjb25zdHJ1Y3RvciBjYW5ub3QgYmUgY2FsbGVkIGFzIGEgZnVuY3Rpb24uJylcbiAgfVxuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge31cbiAgfVxuXG4gIHRoaXMudHlwZSA9ICdkZWZhdWx0J1xuICB0aGlzLnN0YXR1cyA9IG9wdGlvbnMuc3RhdHVzID09PSB1bmRlZmluZWQgPyAyMDAgOiBvcHRpb25zLnN0YXR1c1xuICB0aGlzLm9rID0gdGhpcy5zdGF0dXMgPj0gMjAwICYmIHRoaXMuc3RhdHVzIDwgMzAwXG4gIHRoaXMuc3RhdHVzVGV4dCA9IG9wdGlvbnMuc3RhdHVzVGV4dCA9PT0gdW5kZWZpbmVkID8gJycgOiAnJyArIG9wdGlvbnMuc3RhdHVzVGV4dFxuICB0aGlzLmhlYWRlcnMgPSBuZXcgSGVhZGVycyhvcHRpb25zLmhlYWRlcnMpXG4gIHRoaXMudXJsID0gb3B0aW9ucy51cmwgfHwgJydcbiAgdGhpcy5faW5pdEJvZHkoYm9keUluaXQpXG59XG5cbkJvZHkuY2FsbChSZXNwb25zZS5wcm90b3R5cGUpXG5cblJlc3BvbnNlLnByb3RvdHlwZS5jbG9uZSA9IGZ1bmN0aW9uKCkge1xuICByZXR1cm4gbmV3IFJlc3BvbnNlKHRoaXMuX2JvZHlJbml0LCB7XG4gICAgc3RhdHVzOiB0aGlzLnN0YXR1cyxcbiAgICBzdGF0dXNUZXh0OiB0aGlzLnN0YXR1c1RleHQsXG4gICAgaGVhZGVyczogbmV3IEhlYWRlcnModGhpcy5oZWFkZXJzKSxcbiAgICB1cmw6IHRoaXMudXJsXG4gIH0pXG59XG5cblJlc3BvbnNlLmVycm9yID0gZnVuY3Rpb24oKSB7XG4gIHZhciByZXNwb25zZSA9IG5ldyBSZXNwb25zZShudWxsLCB7c3RhdHVzOiAwLCBzdGF0dXNUZXh0OiAnJ30pXG4gIHJlc3BvbnNlLnR5cGUgPSAnZXJyb3InXG4gIHJldHVybiByZXNwb25zZVxufVxuXG52YXIgcmVkaXJlY3RTdGF0dXNlcyA9IFszMDEsIDMwMiwgMzAzLCAzMDcsIDMwOF1cblxuUmVzcG9uc2UucmVkaXJlY3QgPSBmdW5jdGlvbih1cmwsIHN0YXR1cykge1xuICBpZiAocmVkaXJlY3RTdGF0dXNlcy5pbmRleE9mKHN0YXR1cykgPT09IC0xKSB7XG4gICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ0ludmFsaWQgc3RhdHVzIGNvZGUnKVxuICB9XG5cbiAgcmV0dXJuIG5ldyBSZXNwb25zZShudWxsLCB7c3RhdHVzOiBzdGF0dXMsIGhlYWRlcnM6IHtsb2NhdGlvbjogdXJsfX0pXG59XG5cbmV4cG9ydCB2YXIgRE9NRXhjZXB0aW9uID0gZ2xvYmFsLkRPTUV4Y2VwdGlvblxudHJ5IHtcbiAgbmV3IERPTUV4Y2VwdGlvbigpXG59IGNhdGNoIChlcnIpIHtcbiAgRE9NRXhjZXB0aW9uID0gZnVuY3Rpb24obWVzc2FnZSwgbmFtZSkge1xuICAgIHRoaXMubWVzc2FnZSA9IG1lc3NhZ2VcbiAgICB0aGlzLm5hbWUgPSBuYW1lXG4gICAgdmFyIGVycm9yID0gRXJyb3IobWVzc2FnZSlcbiAgICB0aGlzLnN0YWNrID0gZXJyb3Iuc3RhY2tcbiAgfVxuICBET01FeGNlcHRpb24ucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShFcnJvci5wcm90b3R5cGUpXG4gIERPTUV4Y2VwdGlvbi5wcm90b3R5cGUuY29uc3RydWN0b3IgPSBET01FeGNlcHRpb25cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGZldGNoKGlucHV0LCBpbml0KSB7XG4gIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbihyZXNvbHZlLCByZWplY3QpIHtcbiAgICB2YXIgcmVxdWVzdCA9IG5ldyBSZXF1ZXN0KGlucHV0LCBpbml0KVxuXG4gICAgaWYgKHJlcXVlc3Quc2lnbmFsICYmIHJlcXVlc3Quc2lnbmFsLmFib3J0ZWQpIHtcbiAgICAgIHJldHVybiByZWplY3QobmV3IERPTUV4Y2VwdGlvbignQWJvcnRlZCcsICdBYm9ydEVycm9yJykpXG4gICAgfVxuXG4gICAgdmFyIHhociA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpXG5cbiAgICBmdW5jdGlvbiBhYm9ydFhocigpIHtcbiAgICAgIHhoci5hYm9ydCgpXG4gICAgfVxuXG4gICAgeGhyLm9ubG9hZCA9IGZ1bmN0aW9uKCkge1xuICAgICAgdmFyIG9wdGlvbnMgPSB7XG4gICAgICAgIHN0YXR1czogeGhyLnN0YXR1cyxcbiAgICAgICAgc3RhdHVzVGV4dDogeGhyLnN0YXR1c1RleHQsXG4gICAgICAgIGhlYWRlcnM6IHBhcnNlSGVhZGVycyh4aHIuZ2V0QWxsUmVzcG9uc2VIZWFkZXJzKCkgfHwgJycpXG4gICAgICB9XG4gICAgICBvcHRpb25zLnVybCA9ICdyZXNwb25zZVVSTCcgaW4geGhyID8geGhyLnJlc3BvbnNlVVJMIDogb3B0aW9ucy5oZWFkZXJzLmdldCgnWC1SZXF1ZXN0LVVSTCcpXG4gICAgICB2YXIgYm9keSA9ICdyZXNwb25zZScgaW4geGhyID8geGhyLnJlc3BvbnNlIDogeGhyLnJlc3BvbnNlVGV4dFxuICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpIHtcbiAgICAgICAgcmVzb2x2ZShuZXcgUmVzcG9uc2UoYm9keSwgb3B0aW9ucykpXG4gICAgICB9LCAwKVxuICAgIH1cblxuICAgIHhoci5vbmVycm9yID0gZnVuY3Rpb24oKSB7XG4gICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuICAgICAgICByZWplY3QobmV3IFR5cGVFcnJvcignTmV0d29yayByZXF1ZXN0IGZhaWxlZCcpKVxuICAgICAgfSwgMClcbiAgICB9XG5cbiAgICB4aHIub250aW1lb3V0ID0gZnVuY3Rpb24oKSB7XG4gICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuICAgICAgICByZWplY3QobmV3IFR5cGVFcnJvcignTmV0d29yayByZXF1ZXN0IGZhaWxlZCcpKVxuICAgICAgfSwgMClcbiAgICB9XG5cbiAgICB4aHIub25hYm9ydCA9IGZ1bmN0aW9uKCkge1xuICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpIHtcbiAgICAgICAgcmVqZWN0KG5ldyBET01FeGNlcHRpb24oJ0Fib3J0ZWQnLCAnQWJvcnRFcnJvcicpKVxuICAgICAgfSwgMClcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBmaXhVcmwodXJsKSB7XG4gICAgICB0cnkge1xuICAgICAgICByZXR1cm4gdXJsID09PSAnJyAmJiBnbG9iYWwubG9jYXRpb24uaHJlZiA/IGdsb2JhbC5sb2NhdGlvbi5ocmVmIDogdXJsXG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIHJldHVybiB1cmxcbiAgICAgIH1cbiAgICB9XG5cbiAgICB4aHIub3BlbihyZXF1ZXN0Lm1ldGhvZCwgZml4VXJsKHJlcXVlc3QudXJsKSwgdHJ1ZSlcblxuICAgIGlmIChyZXF1ZXN0LmNyZWRlbnRpYWxzID09PSAnaW5jbHVkZScpIHtcbiAgICAgIHhoci53aXRoQ3JlZGVudGlhbHMgPSB0cnVlXG4gICAgfSBlbHNlIGlmIChyZXF1ZXN0LmNyZWRlbnRpYWxzID09PSAnb21pdCcpIHtcbiAgICAgIHhoci53aXRoQ3JlZGVudGlhbHMgPSBmYWxzZVxuICAgIH1cblxuICAgIGlmICgncmVzcG9uc2VUeXBlJyBpbiB4aHIpIHtcbiAgICAgIGlmIChzdXBwb3J0LmJsb2IpIHtcbiAgICAgICAgeGhyLnJlc3BvbnNlVHlwZSA9ICdibG9iJ1xuICAgICAgfSBlbHNlIGlmIChcbiAgICAgICAgc3VwcG9ydC5hcnJheUJ1ZmZlciAmJlxuICAgICAgICByZXF1ZXN0LmhlYWRlcnMuZ2V0KCdDb250ZW50LVR5cGUnKSAmJlxuICAgICAgICByZXF1ZXN0LmhlYWRlcnMuZ2V0KCdDb250ZW50LVR5cGUnKS5pbmRleE9mKCdhcHBsaWNhdGlvbi9vY3RldC1zdHJlYW0nKSAhPT0gLTFcbiAgICAgICkge1xuICAgICAgICB4aHIucmVzcG9uc2VUeXBlID0gJ2FycmF5YnVmZmVyJ1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChpbml0ICYmIHR5cGVvZiBpbml0LmhlYWRlcnMgPT09ICdvYmplY3QnICYmICEoaW5pdC5oZWFkZXJzIGluc3RhbmNlb2YgSGVhZGVycykpIHtcbiAgICAgIE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKGluaXQuaGVhZGVycykuZm9yRWFjaChmdW5jdGlvbihuYW1lKSB7XG4gICAgICAgIHhoci5zZXRSZXF1ZXN0SGVhZGVyKG5hbWUsIG5vcm1hbGl6ZVZhbHVlKGluaXQuaGVhZGVyc1tuYW1lXSkpXG4gICAgICB9KVxuICAgIH0gZWxzZSB7XG4gICAgICByZXF1ZXN0LmhlYWRlcnMuZm9yRWFjaChmdW5jdGlvbih2YWx1ZSwgbmFtZSkge1xuICAgICAgICB4aHIuc2V0UmVxdWVzdEhlYWRlcihuYW1lLCB2YWx1ZSlcbiAgICAgIH0pXG4gICAgfVxuXG4gICAgaWYgKHJlcXVlc3Quc2lnbmFsKSB7XG4gICAgICByZXF1ZXN0LnNpZ25hbC5hZGRFdmVudExpc3RlbmVyKCdhYm9ydCcsIGFib3J0WGhyKVxuXG4gICAgICB4aHIub25yZWFkeXN0YXRlY2hhbmdlID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIC8vIERPTkUgKHN1Y2Nlc3Mgb3IgZmFpbHVyZSlcbiAgICAgICAgaWYgKHhoci5yZWFkeVN0YXRlID09PSA0KSB7XG4gICAgICAgICAgcmVxdWVzdC5zaWduYWwucmVtb3ZlRXZlbnRMaXN0ZW5lcignYWJvcnQnLCBhYm9ydFhocilcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIHhoci5zZW5kKHR5cGVvZiByZXF1ZXN0Ll9ib2R5SW5pdCA9PT0gJ3VuZGVmaW5lZCcgPyBudWxsIDogcmVxdWVzdC5fYm9keUluaXQpXG4gIH0pXG59XG5cbmZldGNoLnBvbHlmaWxsID0gdHJ1ZVxuXG5pZiAoIWdsb2JhbC5mZXRjaCkge1xuICBnbG9iYWwuZmV0Y2ggPSBmZXRjaFxuICBnbG9iYWwuSGVhZGVycyA9IEhlYWRlcnNcbiAgZ2xvYmFsLlJlcXVlc3QgPSBSZXF1ZXN0XG4gIGdsb2JhbC5SZXNwb25zZSA9IFJlc3BvbnNlXG59XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0ID0gcmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVEZWZhdWx0XCIpO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuZXhwb3J0cy5jbGVhclRpbWVvdXQgPSBleHBvcnRzLmRpc3Bvc2UgPSBleHBvcnRzLnBvc3RNZXNzYWdlID0gZXhwb3J0cy5pbml0ID0gZXhwb3J0cy5tZXNzYWdlUHJvbWlzZXMgPSBleHBvcnRzLmVycm9yID0gZXhwb3J0cy50aW1lb3V0ID0gZXhwb3J0cy5pbml0UHJvbWlzZSA9IGV4cG9ydHMub3JpZ2luID0gZXhwb3J0cy5pbnN0YW5jZSA9IHZvaWQgMDtcblxudmFyIF9yZWdlbmVyYXRvciA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL3JlZ2VuZXJhdG9yXCIpKTtcblxudmFyIF9hc3luY1RvR2VuZXJhdG9yMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvYXN5bmNUb0dlbmVyYXRvclwiKSk7XG5cbnZhciBfZGVmZXJyZWQgPSByZXF1aXJlKFwiLi4vdXRpbHMvZGVmZXJyZWRcIik7XG5cbnZhciBfdWkgPSByZXF1aXJlKFwiLi4vY29uc3RhbnRzL3VpXCIpO1xuXG52YXIgX2Vycm9ycyA9IHJlcXVpcmUoXCIuLi9jb25zdGFudHMvZXJyb3JzXCIpO1xuXG52YXIgX2lubGluZVN0eWxlcyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vaW5saW5lLXN0eWxlc1wiKSk7XG5cbnZhciBpbnN0YW5jZTtcbmV4cG9ydHMuaW5zdGFuY2UgPSBpbnN0YW5jZTtcbnZhciBvcmlnaW47XG5leHBvcnRzLm9yaWdpbiA9IG9yaWdpbjtcbnZhciBpbml0UHJvbWlzZSA9ICgwLCBfZGVmZXJyZWQuY3JlYXRlKSgpO1xuZXhwb3J0cy5pbml0UHJvbWlzZSA9IGluaXRQcm9taXNlO1xudmFyIHRpbWVvdXQgPSAwO1xuZXhwb3J0cy50aW1lb3V0ID0gdGltZW91dDtcbnZhciBlcnJvcjtcbmV4cG9ydHMuZXJyb3IgPSBlcnJvcjtcbnZhciBfbWVzc2FnZUlEID0gMDsgLy8gZXZlcnkgcG9zdE1lc3NhZ2UgdG8gaWZyYW1lIGhhcyBpdHMgb3duIHByb21pc2UgdG8gcmVzb2x2ZVxuXG52YXIgbWVzc2FnZVByb21pc2VzID0ge307XG5leHBvcnRzLm1lc3NhZ2VQcm9taXNlcyA9IG1lc3NhZ2VQcm9taXNlcztcblxudmFyIGluaXQgPVxuLyojX19QVVJFX18qL1xuZnVuY3Rpb24gKCkge1xuICB2YXIgX3JlZiA9ICgwLCBfYXN5bmNUb0dlbmVyYXRvcjJbXCJkZWZhdWx0XCJdKShcbiAgLyojX19QVVJFX18qL1xuICBfcmVnZW5lcmF0b3JbXCJkZWZhdWx0XCJdLm1hcmsoZnVuY3Rpb24gX2NhbGxlZShzZXR0aW5ncykge1xuICAgIHZhciBleGlzdGVkRnJhbWUsIG1hbmlmZXN0U3RyaW5nLCBtYW5pZmVzdCwgc3JjLCBpZnJhbWVTcmNIb3N0LCBvbkxvYWQ7XG4gICAgcmV0dXJuIF9yZWdlbmVyYXRvcltcImRlZmF1bHRcIl0ud3JhcChmdW5jdGlvbiBfY2FsbGVlJChfY29udGV4dCkge1xuICAgICAgd2hpbGUgKDEpIHtcbiAgICAgICAgc3dpdGNoIChfY29udGV4dC5wcmV2ID0gX2NvbnRleHQubmV4dCkge1xuICAgICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgIGV4aXN0ZWRGcmFtZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0cmV6b3Jjb25uZWN0Jyk7XG5cbiAgICAgICAgICAgIGlmIChleGlzdGVkRnJhbWUpIHtcbiAgICAgICAgICAgICAgZXhwb3J0cy5pbnN0YW5jZSA9IGluc3RhbmNlID0gZXhpc3RlZEZyYW1lO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgZXhwb3J0cy5pbnN0YW5jZSA9IGluc3RhbmNlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaWZyYW1lJyk7XG4gICAgICAgICAgICAgIGluc3RhbmNlLmZyYW1lQm9yZGVyID0gJzAnO1xuICAgICAgICAgICAgICBpbnN0YW5jZS53aWR0aCA9ICcwcHgnO1xuICAgICAgICAgICAgICBpbnN0YW5jZS5oZWlnaHQgPSAnMHB4JztcbiAgICAgICAgICAgICAgaW5zdGFuY2Uuc3R5bGUucG9zaXRpb24gPSAnYWJzb2x1dGUnO1xuICAgICAgICAgICAgICBpbnN0YW5jZS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgICAgICAgICBpbnN0YW5jZS5zdHlsZS5ib3JkZXIgPSAnMHB4JztcbiAgICAgICAgICAgICAgaW5zdGFuY2Uuc3R5bGUud2lkdGggPSAnMHB4JztcbiAgICAgICAgICAgICAgaW5zdGFuY2Uuc3R5bGUuaGVpZ2h0ID0gJzBweCc7XG4gICAgICAgICAgICAgIGluc3RhbmNlLmlkID0gJ3RyZXpvcmNvbm5lY3QnO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBtYW5pZmVzdFN0cmluZyA9IHNldHRpbmdzLm1hbmlmZXN0ID8gSlNPTi5zdHJpbmdpZnkoc2V0dGluZ3MubWFuaWZlc3QpIDogJ3VuZGVmaW5lZCc7IC8vIG5vdGU6IGJ0b2EodW5kZWZpbmVkKSA9PT0gYnRvYSgndW5kZWZpbmVkJykgPT09IFwiZFc1a1pXWnBibVZrXCJcblxuICAgICAgICAgICAgbWFuaWZlc3QgPSBcIiZ2ZXJzaW9uPVwiICsgc2V0dGluZ3MudmVyc2lvbiArIFwiJm1hbmlmZXN0PVwiICsgZW5jb2RlVVJJQ29tcG9uZW50KGJ0b2EoSlNPTi5zdHJpbmdpZnkobWFuaWZlc3RTdHJpbmcpKSk7XG4gICAgICAgICAgICBzcmMgPSBzZXR0aW5ncy5pZnJhbWVTcmMgKyBcIj9cIiArIERhdGUubm93KCkgKyBtYW5pZmVzdDtcbiAgICAgICAgICAgIGluc3RhbmNlLnNldEF0dHJpYnV0ZSgnc3JjJywgc3JjKTtcblxuICAgICAgICAgICAgaWYgKHNldHRpbmdzLndlYnVzYikge1xuICAgICAgICAgICAgICBpbnN0YW5jZS5zZXRBdHRyaWJ1dGUoJ2FsbG93JywgJ3VzYicpO1xuICAgICAgICAgICAgfSAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8taXJyZWd1bGFyLXdoaXRlc3BhY2UsIG5vLXVzZWxlc3MtZXNjYXBlXG5cblxuICAgICAgICAgICAgaWZyYW1lU3JjSG9zdCA9IGluc3RhbmNlLnNyYy5tYXRjaCgvXi4rXFw6XFwvXFwvW15cXC9dKy8pO1xuXG4gICAgICAgICAgICBpZiAoaWZyYW1lU3JjSG9zdCAmJiBpZnJhbWVTcmNIb3N0Lmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgZXhwb3J0cy5vcmlnaW4gPSBvcmlnaW4gPSBpZnJhbWVTcmNIb3N0WzBdO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBleHBvcnRzLnRpbWVvdXQgPSB0aW1lb3V0ID0gd2luZG93LnNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICBpbml0UHJvbWlzZS5yZWplY3QoX2Vycm9ycy5JRlJBTUVfVElNRU9VVCk7XG4gICAgICAgICAgICB9LCAxMDAwMCk7XG5cbiAgICAgICAgICAgIG9uTG9hZCA9IGZ1bmN0aW9uIG9uTG9hZCgpIHtcbiAgICAgICAgICAgICAgaWYgKCFpbnN0YW5jZSkge1xuICAgICAgICAgICAgICAgIGluaXRQcm9taXNlLnJlamVjdChfZXJyb3JzLklGUkFNRV9CTE9DS0VEKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIC8vIGlmIGhvc3RpbmcgcGFnZSBpcyBhYmxlIHRvIGFjY2VzcyBjcm9zcy1vcmlnaW4gbG9jYXRpb24gaXQgbWVhbnMgdGhhdCB0aGUgaWZyYW1lIGlzIG5vdCBsb2FkZWRcbiAgICAgICAgICAgICAgICB2YXIgaWZyYW1lT3JpZ2luID0gaW5zdGFuY2UuY29udGVudFdpbmRvdy5sb2NhdGlvbi5vcmlnaW47XG5cbiAgICAgICAgICAgICAgICBpZiAoIWlmcmFtZU9yaWdpbiB8fCBpZnJhbWVPcmlnaW4gPT09ICdudWxsJykge1xuICAgICAgICAgICAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVzZS1iZWZvcmUtZGVmaW5lXG4gICAgICAgICAgICAgICAgICBoYW5kbGVJZnJhbWVCbG9ja2VkKCk7XG4gICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9IGNhdGNoIChlKSB7Ly8gZW1wdHlcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIHZhciBleHRlbnNpb247IC8vICRGbG93SXNzdWUgY2hyb21lIGlzIG5vdCBkZWNsYXJlZCBvdXRzaWRlXG5cbiAgICAgICAgICAgICAgaWYgKHR5cGVvZiBjaHJvbWUgIT09ICd1bmRlZmluZWQnICYmIGNocm9tZS5ydW50aW1lICYmIHR5cGVvZiBjaHJvbWUucnVudGltZS5vbkNvbm5lY3QgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICAgICAgY2hyb21lLnJ1bnRpbWUub25Db25uZWN0LmFkZExpc3RlbmVyKGZ1bmN0aW9uICgpIHt9KTtcbiAgICAgICAgICAgICAgICBleHRlbnNpb24gPSBjaHJvbWUucnVudGltZS5pZDtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIGluc3RhbmNlLmNvbnRlbnRXaW5kb3cucG9zdE1lc3NhZ2Uoe1xuICAgICAgICAgICAgICAgIHR5cGU6IF91aS5JRlJBTUVfSEFORFNIQUtFLFxuICAgICAgICAgICAgICAgIHBheWxvYWQ6IHtcbiAgICAgICAgICAgICAgICAgIHNldHRpbmdzOiBzZXR0aW5ncyxcbiAgICAgICAgICAgICAgICAgIGV4dGVuc2lvbjogZXh0ZW5zaW9uXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9LCBvcmlnaW4pO1xuICAgICAgICAgICAgICBpbnN0YW5jZS5vbmxvYWQgPSB1bmRlZmluZWQ7XG4gICAgICAgICAgICB9OyAvLyBJRSBoYWNrXG5cblxuICAgICAgICAgICAgaWYgKGluc3RhbmNlLmF0dGFjaEV2ZW50KSB7XG4gICAgICAgICAgICAgIGluc3RhbmNlLmF0dGFjaEV2ZW50KCdvbmxvYWQnLCBvbkxvYWQpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgaW5zdGFuY2Uub25sb2FkID0gb25Mb2FkO1xuICAgICAgICAgICAgfSAvLyBpbmplY3QgaWZyYW1lIGludG8gaG9zdCBkb2N1bWVudCBib2R5XG5cblxuICAgICAgICAgICAgaWYgKGRvY3VtZW50LmJvZHkpIHtcbiAgICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChpbnN0YW5jZSk7IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11c2UtYmVmb3JlLWRlZmluZVxuXG4gICAgICAgICAgICAgIGluamVjdFN0eWxlU2hlZXQoKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgX2NvbnRleHQucHJldiA9IDEzO1xuICAgICAgICAgICAgX2NvbnRleHQubmV4dCA9IDE2O1xuICAgICAgICAgICAgcmV0dXJuIGluaXRQcm9taXNlLnByb21pc2U7XG5cbiAgICAgICAgICBjYXNlIDE2OlxuICAgICAgICAgICAgX2NvbnRleHQubmV4dCA9IDIxO1xuICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICBjYXNlIDE4OlxuICAgICAgICAgICAgX2NvbnRleHQucHJldiA9IDE4O1xuICAgICAgICAgICAgX2NvbnRleHQudDAgPSBfY29udGV4dFtcImNhdGNoXCJdKDEzKTtcbiAgICAgICAgICAgIHRocm93IF9jb250ZXh0LnQwLm1lc3NhZ2UgfHwgX2NvbnRleHQudDA7XG5cbiAgICAgICAgICBjYXNlIDIxOlxuICAgICAgICAgICAgX2NvbnRleHQucHJldiA9IDIxO1xuICAgICAgICAgICAgd2luZG93LmNsZWFyVGltZW91dCh0aW1lb3V0KTtcbiAgICAgICAgICAgIGV4cG9ydHMudGltZW91dCA9IHRpbWVvdXQgPSAwO1xuICAgICAgICAgICAgcmV0dXJuIF9jb250ZXh0LmZpbmlzaCgyMSk7XG5cbiAgICAgICAgICBjYXNlIDI1OlxuICAgICAgICAgIGNhc2UgXCJlbmRcIjpcbiAgICAgICAgICAgIHJldHVybiBfY29udGV4dC5zdG9wKCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LCBfY2FsbGVlLCBudWxsLCBbWzEzLCAxOCwgMjEsIDI1XV0pO1xuICB9KSk7XG5cbiAgcmV0dXJuIGZ1bmN0aW9uIGluaXQoX3gpIHtcbiAgICByZXR1cm4gX3JlZi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICB9O1xufSgpO1xuXG5leHBvcnRzLmluaXQgPSBpbml0O1xuXG52YXIgaW5qZWN0U3R5bGVTaGVldCA9IGZ1bmN0aW9uIGluamVjdFN0eWxlU2hlZXQoKSB7XG4gIGlmICghaW5zdGFuY2UpIHtcbiAgICB0aHJvdyBfZXJyb3JzLklGUkFNRV9CTE9DS0VEO1xuICB9XG5cbiAgdmFyIGRvYyA9IGluc3RhbmNlLm93bmVyRG9jdW1lbnQ7XG4gIHZhciBoZWFkID0gZG9jLmhlYWQgfHwgZG9jLmdldEVsZW1lbnRzQnlUYWdOYW1lKCdoZWFkJylbMF07XG4gIHZhciBzdHlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3N0eWxlJyk7XG4gIHN0eWxlLnNldEF0dHJpYnV0ZSgndHlwZScsICd0ZXh0L2NzcycpO1xuICBzdHlsZS5zZXRBdHRyaWJ1dGUoJ2lkJywgJ1RyZXpvckNvbm5lY3RTdHlsZXNoZWV0Jyk7IC8vICRGbG93SXNzdWVcblxuICBpZiAoc3R5bGUuc3R5bGVTaGVldCkge1xuICAgIC8vIElFXG4gICAgLy8gJEZsb3dJc3N1ZVxuICAgIHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IF9pbmxpbmVTdHlsZXNbXCJkZWZhdWx0XCJdO1xuICB9IGVsc2Uge1xuICAgIHN0eWxlLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKF9pbmxpbmVTdHlsZXNbXCJkZWZhdWx0XCJdKSk7XG4gIH1cblxuICBoZWFkLmFwcGVuZChzdHlsZSk7XG59O1xuXG52YXIgaGFuZGxlSWZyYW1lQmxvY2tlZCA9IGZ1bmN0aW9uIGhhbmRsZUlmcmFtZUJsb2NrZWQoKSB7XG4gIHdpbmRvdy5jbGVhclRpbWVvdXQodGltZW91dCk7XG4gIGV4cG9ydHMuZXJyb3IgPSBlcnJvciA9IF9lcnJvcnMuSUZSQU1FX0JMT0NLRUQubWVzc2FnZTsgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVzZS1iZWZvcmUtZGVmaW5lXG5cbiAgZGlzcG9zZSgpO1xuICBpbml0UHJvbWlzZS5yZWplY3QoX2Vycm9ycy5JRlJBTUVfQkxPQ0tFRCk7XG59OyAvLyBwb3N0IG1lc3NhZ2VzIHRvIGlmcmFtZVxuXG5cbnZhciBwb3N0TWVzc2FnZSA9IGZ1bmN0aW9uIHBvc3RNZXNzYWdlKG1lc3NhZ2UsIHVzZVByb21pc2UpIHtcbiAgaWYgKHVzZVByb21pc2UgPT09IHZvaWQgMCkge1xuICAgIHVzZVByb21pc2UgPSB0cnVlO1xuICB9XG5cbiAgaWYgKCFpbnN0YW5jZSkge1xuICAgIHRocm93IF9lcnJvcnMuSUZSQU1FX0JMT0NLRUQ7XG4gIH1cblxuICBpZiAodXNlUHJvbWlzZSkge1xuICAgIF9tZXNzYWdlSUQrKztcbiAgICBtZXNzYWdlLmlkID0gX21lc3NhZ2VJRDtcbiAgICBtZXNzYWdlUHJvbWlzZXNbX21lc3NhZ2VJRF0gPSAoMCwgX2RlZmVycmVkLmNyZWF0ZSkoKTtcbiAgICBpbnN0YW5jZS5jb250ZW50V2luZG93LnBvc3RNZXNzYWdlKG1lc3NhZ2UsIG9yaWdpbik7XG4gICAgcmV0dXJuIG1lc3NhZ2VQcm9taXNlc1tfbWVzc2FnZUlEXS5wcm9taXNlO1xuICB9XG5cbiAgaW5zdGFuY2UuY29udGVudFdpbmRvdy5wb3N0TWVzc2FnZShtZXNzYWdlLCBvcmlnaW4pO1xuICByZXR1cm4gbnVsbDtcbn07XG5cbmV4cG9ydHMucG9zdE1lc3NhZ2UgPSBwb3N0TWVzc2FnZTtcblxudmFyIGRpc3Bvc2UgPSBmdW5jdGlvbiBkaXNwb3NlKCkge1xuICBpZiAoaW5zdGFuY2UgJiYgaW5zdGFuY2UucGFyZW50Tm9kZSkge1xuICAgIHRyeSB7XG4gICAgICBpbnN0YW5jZS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKGluc3RhbmNlKTtcbiAgICB9IGNhdGNoIChlcnJvcikgey8vIGRvIG5vdGhpbmdcbiAgICB9XG4gIH1cblxuICBleHBvcnRzLmluc3RhbmNlID0gaW5zdGFuY2UgPSBudWxsO1xuICBleHBvcnRzLnRpbWVvdXQgPSB0aW1lb3V0ID0gMDtcbn07XG5cbmV4cG9ydHMuZGlzcG9zZSA9IGRpc3Bvc2U7XG5cbnZhciBjbGVhclRpbWVvdXQgPSBmdW5jdGlvbiBjbGVhclRpbWVvdXQoKSB7XG4gIHdpbmRvdy5jbGVhclRpbWVvdXQodGltZW91dCk7XG59O1xuXG5leHBvcnRzLmNsZWFyVGltZW91dCA9IGNsZWFyVGltZW91dDsiLCJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gdm9pZCAwO1xudmFyIGNzcyA9ICcudHJlem9yY29ubmVjdC1jb250YWluZXJ7cG9zaXRpb246Zml4ZWQhaW1wb3J0YW50O2Rpc3BsYXk6LXdlYmtpdC1ib3ghaW1wb3J0YW50O2Rpc3BsYXk6LXdlYmtpdC1mbGV4IWltcG9ydGFudDtkaXNwbGF5Oi1tcy1mbGV4Ym94IWltcG9ydGFudDtkaXNwbGF5OmZsZXghaW1wb3J0YW50Oy13ZWJraXQtYm94LW9yaWVudDp2ZXJ0aWNhbCFpbXBvcnRhbnQ7LXdlYmtpdC1ib3gtZGlyZWN0aW9uOm5vcm1hbCFpbXBvcnRhbnQ7LXdlYmtpdC1mbGV4LWRpcmVjdGlvbjpjb2x1bW4haW1wb3J0YW50Oy1tcy1mbGV4LWRpcmVjdGlvbjpjb2x1bW4haW1wb3J0YW50O2ZsZXgtZGlyZWN0aW9uOmNvbHVtbiFpbXBvcnRhbnQ7LXdlYmtpdC1ib3gtYWxpZ246Y2VudGVyIWltcG9ydGFudDstd2Via2l0LWFsaWduLWl0ZW1zOmNlbnRlciFpbXBvcnRhbnQ7LW1zLWZsZXgtYWxpZ246Y2VudGVyIWltcG9ydGFudDthbGlnbi1pdGVtczpjZW50ZXIhaW1wb3J0YW50O3otaW5kZXg6MTAwMDAhaW1wb3J0YW50O3dpZHRoOjEwMCUhaW1wb3J0YW50O2hlaWdodDoxMDAlIWltcG9ydGFudDt0b3A6MCFpbXBvcnRhbnQ7bGVmdDowIWltcG9ydGFudDtiYWNrZ3JvdW5kOnJnYmEoMCwwLDAsLjM1KSFpbXBvcnRhbnQ7b3ZlcmZsb3c6YXV0byFpbXBvcnRhbnQ7cGFkZGluZzoyMHB4IWltcG9ydGFudDttYXJnaW46MCFpbXBvcnRhbnR9LnRyZXpvcmNvbm5lY3QtY29udGFpbmVyIC50cmV6b3Jjb25uZWN0LXdpbmRvd3twb3NpdGlvbjpyZWxhdGl2ZSFpbXBvcnRhbnQ7ZGlzcGxheTpibG9jayFpbXBvcnRhbnQ7d2lkdGg6MzcwcHghaW1wb3J0YW50O2ZvbnQtZmFtaWx5Oi1hcHBsZS1zeXN0ZW0sQmxpbmtNYWNTeXN0ZW1Gb250LFwiU2Vnb2UgVUlcIixSb2JvdG8sXCJIZWx2ZXRpY2EgTmV1ZVwiLEFyaWFsLHNhbnMtc2VyaWYhaW1wb3J0YW50O21hcmdpbjphdXRvIWltcG9ydGFudDtib3JkZXItcmFkaXVzOjNweCFpbXBvcnRhbnQ7YmFja2dyb3VuZC1jb2xvcjojZmZmIWltcG9ydGFudDt0ZXh0LWFsaWduOmNlbnRlciFpbXBvcnRhbnQ7b3ZlcmZsb3c6aGlkZGVuIWltcG9ydGFudH0udHJlem9yY29ubmVjdC1jb250YWluZXIgLnRyZXpvcmNvbm5lY3Qtd2luZG93IC50cmV6b3Jjb25uZWN0LWhlYWR7dGV4dC1hbGlnbjpsZWZ0O3BhZGRpbmc6MTJweCAyNHB4IWltcG9ydGFudDtkaXNwbGF5Oi13ZWJraXQtYm94IWltcG9ydGFudDtkaXNwbGF5Oi13ZWJraXQtZmxleCFpbXBvcnRhbnQ7ZGlzcGxheTotbXMtZmxleGJveCFpbXBvcnRhbnQ7ZGlzcGxheTpmbGV4IWltcG9ydGFudDstd2Via2l0LWJveC1hbGlnbjpjZW50ZXIhaW1wb3J0YW50Oy13ZWJraXQtYWxpZ24taXRlbXM6Y2VudGVyIWltcG9ydGFudDstbXMtZmxleC1hbGlnbjpjZW50ZXIhaW1wb3J0YW50O2FsaWduLWl0ZW1zOmNlbnRlciFpbXBvcnRhbnR9LnRyZXpvcmNvbm5lY3QtY29udGFpbmVyIC50cmV6b3Jjb25uZWN0LXdpbmRvdyAudHJlem9yY29ubmVjdC1oZWFkIC50cmV6b3Jjb25uZWN0LWxvZ297LXdlYmtpdC1ib3gtZmxleDoxOy13ZWJraXQtZmxleDoxOy1tcy1mbGV4OjE7ZmxleDoxfS50cmV6b3Jjb25uZWN0LWNvbnRhaW5lciAudHJlem9yY29ubmVjdC13aW5kb3cgLnRyZXpvcmNvbm5lY3QtaGVhZCAudHJlem9yY29ubmVjdC1jbG9zZXtjdXJzb3I6cG9pbnRlciFpbXBvcnRhbnQ7aGVpZ2h0OjI0cHghaW1wb3J0YW50fS50cmV6b3Jjb25uZWN0LWNvbnRhaW5lciAudHJlem9yY29ubmVjdC13aW5kb3cgLnRyZXpvcmNvbm5lY3QtaGVhZCAudHJlem9yY29ubmVjdC1jbG9zZSBzdmd7ZmlsbDojNzU3NTc1Oy13ZWJraXQtdHJhbnNpdGlvbjpmaWxsIC4zcyBlYXNlLWluLW91dCFpbXBvcnRhbnQ7dHJhbnNpdGlvbjpmaWxsIC4zcyBlYXNlLWluLW91dCFpbXBvcnRhbnR9LnRyZXpvcmNvbm5lY3QtY29udGFpbmVyIC50cmV6b3Jjb25uZWN0LXdpbmRvdyAudHJlem9yY29ubmVjdC1oZWFkIC50cmV6b3Jjb25uZWN0LWNsb3NlOmhvdmVyIHN2Z3tmaWxsOiM0OTQ5NDl9LnRyZXpvcmNvbm5lY3QtY29udGFpbmVyIC50cmV6b3Jjb25uZWN0LXdpbmRvdyAudHJlem9yY29ubmVjdC1ib2R5e3BhZGRpbmc6MjRweCAyNHB4IDMycHghaW1wb3J0YW50O2JhY2tncm91bmQ6I0ZCRkJGQiFpbXBvcnRhbnQ7Ym9yZGVyLXRvcDoxcHggc29saWQgI0VCRUJFQn0udHJlem9yY29ubmVjdC1jb250YWluZXIgLnRyZXpvcmNvbm5lY3Qtd2luZG93IC50cmV6b3Jjb25uZWN0LWJvZHkgaDN7Y29sb3I6IzUwNTA1MCFpbXBvcnRhbnQ7Zm9udC1zaXplOjE2cHghaW1wb3J0YW50O2ZvbnQtd2VpZ2h0OjUwMCFpbXBvcnRhbnR9LnRyZXpvcmNvbm5lY3QtY29udGFpbmVyIC50cmV6b3Jjb25uZWN0LXdpbmRvdyAudHJlem9yY29ubmVjdC1ib2R5IHB7bWFyZ2luOjhweCAwIDI0cHghaW1wb3J0YW50O2ZvbnQtd2VpZ2h0OjQwMCFpbXBvcnRhbnQ7Y29sb3I6I0E5QTlBOSFpbXBvcnRhbnQ7Zm9udC1zaXplOjEycHghaW1wb3J0YW50fS50cmV6b3Jjb25uZWN0LWNvbnRhaW5lciAudHJlem9yY29ubmVjdC13aW5kb3cgLnRyZXpvcmNvbm5lY3QtYm9keSBidXR0b257d2lkdGg6MTAwJSFpbXBvcnRhbnQ7cGFkZGluZzoxMnB4IDI0cHghaW1wb3J0YW50O21hcmdpbjowIWltcG9ydGFudDtib3JkZXItcmFkaXVzOjNweCFpbXBvcnRhbnQ7Zm9udC1zaXplOjE0cHghaW1wb3J0YW50O2ZvbnQtd2VpZ2h0OjMwMCFpbXBvcnRhbnQ7Y3Vyc29yOnBvaW50ZXIhaW1wb3J0YW50O2JhY2tncm91bmQ6IzAxQjc1NyFpbXBvcnRhbnQ7Y29sb3I6I2ZmZiFpbXBvcnRhbnQ7Ym9yZGVyOjAhaW1wb3J0YW50Oy13ZWJraXQtdHJhbnNpdGlvbjpiYWNrZ3JvdW5kLWNvbG9yIC4zcyBlYXNlLWluLW91dCFpbXBvcnRhbnQ7dHJhbnNpdGlvbjpiYWNrZ3JvdW5kLWNvbG9yIC4zcyBlYXNlLWluLW91dCFpbXBvcnRhbnR9LnRyZXpvcmNvbm5lY3QtY29udGFpbmVyIC50cmV6b3Jjb25uZWN0LXdpbmRvdyAudHJlem9yY29ubmVjdC1ib2R5IGJ1dHRvbjpob3ZlcntiYWNrZ3JvdW5kLWNvbG9yOiMwMEFCNTEhaW1wb3J0YW50fS50cmV6b3Jjb25uZWN0LWNvbnRhaW5lciAudHJlem9yY29ubmVjdC13aW5kb3cgLnRyZXpvcmNvbm5lY3QtYm9keSBidXR0b246YWN0aXZle2JhY2tncm91bmQtY29sb3I6IzAwOTU0NiFpbXBvcnRhbnR9LyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYkltbHVjSFYwSWl3aUpITjBaR2x1SWwwc0ltNWhiV1Z6SWpwYlhTd2liV0Z3Y0dsdVozTWlPaUpCUVdOQkxIbENRVU5KTEZOQlFVRXNaMEpCUTBFc1VVRkJRU3h6UWtGRFFTeFJRVUZCTEhWQ1FVTkJMRkZCUVVFc2MwSkJSVUVzVVVGQlFTeGxRVU5CTEcxQ1FVRkJMRzFDUVVOQkxITkNRVUZCTEdsQ1FVTkJMSFZDUVVGQkxHbENRVU5CTEcxQ1FVRkJMR2xDUVVOQkxHVkJRVUVzYVVKQlJVRXNhMEpCUVVFc2FVSkJRMEVzYjBKQlFVRXNhVUpCUTBFc1pVRkJRU3hwUWtObVRTeFpRVUZoTEdsQ1JFRnlRaXhSUVVGVExHZENRV3RDU0N4TlFVRkJMR1ZCUTBFc1QwRkJRU3hsUVVOQkxFbEJRVUVzV1VGRFFTeExRVUZCTEZsQlEwRXNWMEZCUVN3d1FrRkRRU3hUUVVGQkxHVkJRMEVzVVVGQlFTeGxRVU5CTEU5QlFVRXNXVU5rVWl3clEwUllSU3hUUVVGVkxHMUNRVFpDUVN4UlFVRkJMR2RDUVVOQkxFMUJRVUVzWjBKQlEwRXNXVUZCUVN4alFVRkJMRzFDUVVGQkxGZEJRVUVzVDBGQlFTeHBRa0ZCUVN4TlFVRkJMSEZDUVVOQkxFOUJRVUVzWlVObVZpeGpRVUZsTEdORWFrSm1MR2xDUVdsQ1JTeGxRV3RDV1N4WFFVRkJMR2xDUTJaa0xGTkJRVlVzYVVKRWJVSkpMRzFGUVVOQkxGZEJRVUVzUzBOb1FtUXNVVUZCVXl4TFFVRkxMR1ZFZUVKa0xGRkJRVk1zYzBKQk1FTlRMRkZCUVVFc2RVSkJRMEVzVVVGQlFTeHpRa05tYkVJc1VVRkJVeXhsUkdsQ1N5eHJRa0UxUWxvc2FVSkJPRUp2UWl4dlFrRkJRU3hwUWtOb1FteENMR1ZCUVdkQ0xHbENSQzlDV2l4WlFXbENUaXhwUWtGelExRXNkVVpCUTBFc2FVSkJRVUVzUlVOd1FsWXNZVUZCWXl4RlJIQkRWaXhUUVVGVkxFVkJNa1JCTEV0QlFVRXNSVUZGUVN4M1JrTndRbVFzVDBGQlVTeHJRa1I2UTFJc1QwRkJVU3hsUVdsRlRTdzBSa0ZEUVN4TFFVRkJMRkZCUTBFc2JVSkJRVUVzUzBGQlFTeEpRVUZCTEhOQ1EzQkNaQ3hYUVVGWkxFdEJRVXNzU1VGQlN5eHpRa1IzUWxJc2EwZEJRMEVzUzBGQlFTeFJRVVZCTEcxRlFVTkJMRkZCUVVFc1MwRkJRU3hMUVVGQkxHVkJRMEVzVjBGQlFTeHJRa0ZEUVN4WFFVRkJMRWxCUVVFc1RVRkJRU3hSUVVWQkxITkZRVU5CTEUxQlFVRXNhMEpCUTBFc1ZVRkJRU3hsUTNKQ1pDeFpRVUZoTEdORWQwSkxMSEZGUTNKQ2JFSXNUMEZCVVN4SlFVRkpMRVZCUVVrc1pVUjNRa1lzV1VGQlFTeGpRVU5KTEUxQlFVRXNhMEpEZEVKc1FpeFZRVUZYTEdWQlJXSXNNRVZCUTBVc1RVRkJUeXhsUVVOUUxGRkJRVk1zUzBGQlN5eGxRVU5rTEU5QlFWRXNXVUZEVWl4alFVRmxMR05CUTJZc1ZVRkJWeXhsUVVOWUxGbEJRV0VzWTBGRFlpeFBRVUZSTEd0Q1FVTlNMRmRCUVZrc2EwSkJRMW9zVFVGQlR5eGxRVU5RTEU5QlFWRXNXVUZEVWl4dFFrRkJiMElzYVVKQlFXbENMRWxCUVVzc2MwSkJRekZETEZkQlFWa3NhVUpCUVdsQ0xFbEJRVXNzYzBKQlJYQkRMR2RHUVVORkxHbENRVUZyUWl4clFrRkZjRUlzYVVaQlEwVXNhVUpCUVd0Q0luMD0gKi8nO1xudmFyIF9kZWZhdWx0ID0gY3NzO1xuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBfZGVmYXVsdDsiLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IHZvaWQgMDtcblxudmFyIHJlbmRlciA9IGZ1bmN0aW9uIHJlbmRlcihjbGFzc05hbWUsIHVybCwgb3JpZ2luKSB7XG4gIHZhciBxdWVyeSA9IGNsYXNzTmFtZSB8fCAnLnRyZXpvci13ZWJ1c2ItYnV0dG9uJztcbiAgdmFyIGJ1dHRvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKHF1ZXJ5KTtcbiAgdmFyIHNyYyA9IHVybCArIFwiP1wiICsgRGF0ZS5ub3coKTtcbiAgYnV0dG9ucy5mb3JFYWNoKGZ1bmN0aW9uIChiKSB7XG4gICAgaWYgKGIuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2lmcmFtZScpLmxlbmd0aCA8IDEpIHtcbiAgICAgIHZhciBib3VuZHMgPSBiLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgICAgdmFyIGJ0bklmcmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lmcmFtZScpO1xuICAgICAgYnRuSWZyYW1lLmZyYW1lQm9yZGVyID0gJzAnO1xuICAgICAgYnRuSWZyYW1lLndpZHRoID0gTWF0aC5yb3VuZChib3VuZHMud2lkdGgpICsgJ3B4JztcbiAgICAgIGJ0bklmcmFtZS5oZWlnaHQgPSBNYXRoLnJvdW5kKGJvdW5kcy5oZWlnaHQpICsgJ3B4JztcbiAgICAgIGJ0bklmcmFtZS5zdHlsZS5wb3NpdGlvbiA9ICdhYnNvbHV0ZSc7XG4gICAgICBidG5JZnJhbWUuc3R5bGUudG9wID0gJzBweCc7XG4gICAgICBidG5JZnJhbWUuc3R5bGUubGVmdCA9ICcwcHgnO1xuICAgICAgYnRuSWZyYW1lLnN0eWxlLnpJbmRleCA9ICcxJzsgLy8gYnRuSWZyYW1lLnN0eWxlLm9wYWNpdHkgPSAnMCc7IC8vIHRoaXMgbWFrZXMgY2xpY2sgaW1wb3NzaWJsZSBvbiBjcm9zcy1vcmlnaW5cblxuICAgICAgYnRuSWZyYW1lLnNldEF0dHJpYnV0ZSgnYWxsb3cnLCAndXNiJyk7XG4gICAgICBidG5JZnJhbWUuc2V0QXR0cmlidXRlKCdzY3JvbGxpbmcnLCAnbm8nKTtcblxuICAgICAgYnRuSWZyYW1lLm9ubG9hZCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgYnRuSWZyYW1lLmNvbnRlbnRXaW5kb3cucG9zdE1lc3NhZ2Uoey8vIHN0eWxlOiBKU09OLnN0cmluZ2lmeSggd2luZG93LmdldENvbXB1dGVkU3R5bGUoYikgKSxcbiAgICAgICAgICAvLyBvdXRlcjogYi5vdXRlckhUTUwsXG4gICAgICAgICAgLy8gaW5uZXI6IGIuaW5uZXJIVE1MXG4gICAgICAgIH0sIG9yaWdpbik7XG4gICAgICB9O1xuXG4gICAgICBidG5JZnJhbWUuc3JjID0gc3JjOyAvLyBpbmplY3QgaWZyYW1lIGludG8gYnV0dG9uXG5cbiAgICAgIGIuYXBwZW5kKGJ0bklmcmFtZSk7XG4gICAgfVxuICB9KTtcbn07XG5cbnZhciBfZGVmYXVsdCA9IHJlbmRlcjtcbmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gX2RlZmF1bHQ7IiwiJ3VzZSBzdHJpY3QnOyAvLyBodHRwczovL3N0YWNrb3ZlcmZsb3cuY29tL3F1ZXN0aW9ucy83NTA1NjIzL2NvbG9ycy1pbi1qYXZhc2NyaXB0LWNvbnNvbGVcbi8vIGh0dHBzOi8vZ2l0aHViLmNvbS9waW10ZXJyeS9sb2dsZXZlbC9ibG9iL21hc3Rlci9saWIvbG9nbGV2ZWwuanNcbi8vIGh0dHA6Ly93d3cuY29sb3ItaGV4LmNvbS9jb2xvci1wYWxldHRlLzUwMTZcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbmV4cG9ydHMucG9wdXBDb25zb2xlID0gZXhwb3J0cy5lbmFibGVCeVByZWZpeCA9IGV4cG9ydHMuZ2V0TG9nID0gZXhwb3J0cy5lbmFibGUgPSBleHBvcnRzLmluaXQgPSBleHBvcnRzW1wiZGVmYXVsdFwiXSA9IHZvaWQgMDtcblxudmFyIF90aGlzID0gdm9pZCAwO1xuXG52YXIgY29sb3JzID0ge1xuICAvLyBncmVlblxuICAnRGVzY3JpcHRvclN0cmVhbSc6ICdjb2xvcjogIzc3YWI1OScsXG4gICdEZXZpY2VMaXN0JzogJ2NvbG9yOiAjMzY4MDJkJyxcbiAgJ0RldmljZSc6ICdjb2xvcjogI2JhZGE1NScsXG4gICdDb3JlJzogJ2NvbG9yOiAjYzlkZjhhJyxcbiAgJ0lGcmFtZSc6ICdjb2xvcjogI0ZGRkZGRjsgYmFja2dyb3VuZDogI2Y0YTc0MjsnLFxuICAnUG9wdXAnOiAnY29sb3I6ICNmNDhhMDAnXG59O1xuXG52YXIgTG9nID1cbi8qI19fUFVSRV9fKi9cbmZ1bmN0aW9uICgpIHtcbiAgZnVuY3Rpb24gTG9nKHByZWZpeCwgZW5hYmxlZCkge1xuICAgIGlmIChlbmFibGVkID09PSB2b2lkIDApIHtcbiAgICAgIGVuYWJsZWQgPSBmYWxzZTtcbiAgICB9XG5cbiAgICB0aGlzLnByZWZpeCA9IHByZWZpeDtcbiAgICB0aGlzLmVuYWJsZWQgPSBlbmFibGVkO1xuICAgIHRoaXMubWVzc2FnZXMgPSBbXTtcbiAgICB0aGlzLmNzcyA9IGNvbG9yc1twcmVmaXhdIHx8ICdjb2xvcjogIzAwMDAwMDsgYmFja2dyb3VuZDogI0ZGRkZGRjsnO1xuICB9XG5cbiAgdmFyIF9wcm90byA9IExvZy5wcm90b3R5cGU7XG5cbiAgX3Byb3RvLmFkZE1lc3NhZ2UgPSBmdW5jdGlvbiBhZGRNZXNzYWdlKGxldmVsLCBwcmVmaXgpIHtcbiAgICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IG5ldyBBcnJheShfbGVuID4gMiA/IF9sZW4gLSAyIDogMCksIF9rZXkgPSAyOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgICBhcmdzW19rZXkgLSAyXSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgICB9XG5cbiAgICB0aGlzLm1lc3NhZ2VzLnB1c2goe1xuICAgICAgbGV2ZWw6IGxldmVsLFxuICAgICAgcHJlZml4OiBwcmVmaXgsXG4gICAgICBtZXNzYWdlOiBhcmdzLFxuICAgICAgdGltZXN0YW1wOiBuZXcgRGF0ZSgpLmdldFRpbWUoKVxuICAgIH0pO1xuICB9O1xuXG4gIF9wcm90by5sb2cgPSBmdW5jdGlvbiBsb2coKSB7XG4gICAgZm9yICh2YXIgX2xlbjIgPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gbmV3IEFycmF5KF9sZW4yKSwgX2tleTIgPSAwOyBfa2V5MiA8IF9sZW4yOyBfa2V5MisrKSB7XG4gICAgICBhcmdzW19rZXkyXSA9IGFyZ3VtZW50c1tfa2V5Ml07XG4gICAgfVxuXG4gICAgdGhpcy5hZGRNZXNzYWdlLmFwcGx5KHRoaXMsIFsnbG9nJywgdGhpcy5wcmVmaXhdLmNvbmNhdChhcmdzKSk7XG5cbiAgICBpZiAodGhpcy5lbmFibGVkKSB7XG4gICAgICB2YXIgX2NvbnNvbGU7XG5cbiAgICAgIChfY29uc29sZSA9IGNvbnNvbGUpLmxvZy5hcHBseShfY29uc29sZSwgW3RoaXMucHJlZml4XS5jb25jYXQoYXJncykpO1xuICAgIH1cbiAgfTtcblxuICBfcHJvdG8uZXJyb3IgPSBmdW5jdGlvbiBlcnJvcigpIHtcbiAgICBmb3IgKHZhciBfbGVuMyA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBuZXcgQXJyYXkoX2xlbjMpLCBfa2V5MyA9IDA7IF9rZXkzIDwgX2xlbjM7IF9rZXkzKyspIHtcbiAgICAgIGFyZ3NbX2tleTNdID0gYXJndW1lbnRzW19rZXkzXTtcbiAgICB9XG5cbiAgICB0aGlzLmFkZE1lc3NhZ2UuYXBwbHkodGhpcywgWydlcnJvcicsIHRoaXMucHJlZml4XS5jb25jYXQoYXJncykpO1xuXG4gICAgaWYgKHRoaXMuZW5hYmxlZCkge1xuICAgICAgdmFyIF9jb25zb2xlMjtcblxuICAgICAgKF9jb25zb2xlMiA9IGNvbnNvbGUpLmVycm9yLmFwcGx5KF9jb25zb2xlMiwgW3RoaXMucHJlZml4XS5jb25jYXQoYXJncykpO1xuICAgIH1cbiAgfTtcblxuICBfcHJvdG8ud2FybiA9IGZ1bmN0aW9uIHdhcm4oKSB7XG4gICAgZm9yICh2YXIgX2xlbjQgPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gbmV3IEFycmF5KF9sZW40KSwgX2tleTQgPSAwOyBfa2V5NCA8IF9sZW40OyBfa2V5NCsrKSB7XG4gICAgICBhcmdzW19rZXk0XSA9IGFyZ3VtZW50c1tfa2V5NF07XG4gICAgfVxuXG4gICAgdGhpcy5hZGRNZXNzYWdlLmFwcGx5KHRoaXMsIFsnd2FybicsIHRoaXMucHJlZml4XS5jb25jYXQoYXJncykpO1xuXG4gICAgaWYgKHRoaXMuZW5hYmxlZCkge1xuICAgICAgdmFyIF9jb25zb2xlMztcblxuICAgICAgKF9jb25zb2xlMyA9IGNvbnNvbGUpLndhcm4uYXBwbHkoX2NvbnNvbGUzLCBbdGhpcy5wcmVmaXhdLmNvbmNhdChhcmdzKSk7XG4gICAgfVxuICB9O1xuXG4gIF9wcm90by5kZWJ1ZyA9IGZ1bmN0aW9uIGRlYnVnKCkge1xuICAgIGZvciAodmFyIF9sZW41ID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IG5ldyBBcnJheShfbGVuNSksIF9rZXk1ID0gMDsgX2tleTUgPCBfbGVuNTsgX2tleTUrKykge1xuICAgICAgYXJnc1tfa2V5NV0gPSBhcmd1bWVudHNbX2tleTVdO1xuICAgIH1cblxuICAgIHRoaXMuYWRkTWVzc2FnZS5hcHBseSh0aGlzLCBbJ2RlYnVnJywgdGhpcy5wcmVmaXhdLmNvbmNhdChhcmdzKSk7XG5cbiAgICBpZiAodGhpcy5lbmFibGVkKSB7XG4gICAgICB2YXIgX2NvbnNvbGU0O1xuXG4gICAgICAoX2NvbnNvbGU0ID0gY29uc29sZSkubG9nLmFwcGx5KF9jb25zb2xlNCwgWyclYycgKyB0aGlzLnByZWZpeCwgdGhpcy5jc3NdLmNvbmNhdChhcmdzKSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBMb2c7XG59KCk7XG5cbmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gTG9nO1xudmFyIF9sb2dzID0ge307XG5cbnZhciBpbml0ID0gZnVuY3Rpb24gaW5pdChwcmVmaXgsIGVuYWJsZWQpIHtcbiAgdmFyIGVuYWIgPSB0eXBlb2YgZW5hYmxlZCA9PT0gJ2Jvb2xlYW4nID8gZW5hYmxlZCA6IGZhbHNlO1xuICB2YXIgaW5zdGFuY2UgPSBuZXcgTG9nKHByZWZpeCwgZW5hYik7XG4gIF9sb2dzW3ByZWZpeF0gPSBpbnN0YW5jZTtcbiAgcmV0dXJuIGluc3RhbmNlO1xufTtcblxuZXhwb3J0cy5pbml0ID0gaW5pdDtcblxudmFyIGVuYWJsZSA9IGZ1bmN0aW9uIGVuYWJsZShlbmFibGVkKSB7XG4gIGZvciAodmFyIF9pID0gMCwgX09iamVjdCRrZXlzID0gT2JqZWN0LmtleXMoX2xvZ3MpOyBfaSA8IF9PYmplY3Qka2V5cy5sZW5ndGg7IF9pKyspIHtcbiAgICB2YXIgbCA9IF9PYmplY3Qka2V5c1tfaV07XG4gICAgX2xvZ3NbbF0uZW5hYmxlZCA9IGVuYWJsZWQ7XG4gIH1cbn07XG5cbmV4cG9ydHMuZW5hYmxlID0gZW5hYmxlO1xuXG52YXIgZ2V0TG9nID0gZnVuY3Rpb24gZ2V0TG9nKGFyZ3MpIHtcbiAgLy8gaWZcbiAgdmFyIGxvZ3MgPSBbXTtcblxuICBmb3IgKHZhciBfaTIgPSAwLCBfT2JqZWN0JGtleXMyID0gT2JqZWN0LmtleXMoX2xvZ3MpOyBfaTIgPCBfT2JqZWN0JGtleXMyLmxlbmd0aDsgX2kyKyspIHtcbiAgICB2YXIgbCA9IF9PYmplY3Qka2V5czJbX2kyXTtcbiAgICBsb2dzID0gbG9ncy5jb25jYXQoX2xvZ3NbbF0ubWVzc2FnZXMpO1xuICB9XG5cbiAgbG9ncy5zb3J0KGZ1bmN0aW9uIChhLCBiKSB7XG4gICAgcmV0dXJuIGEudGltZXN0YW1wIC0gYi50aW1lc3RhbXA7XG4gIH0pO1xuICByZXR1cm4gbG9ncztcbn07XG5cbmV4cG9ydHMuZ2V0TG9nID0gZ2V0TG9nO1xuXG52YXIgZW5hYmxlQnlQcmVmaXggPSBmdW5jdGlvbiBlbmFibGVCeVByZWZpeChwcmVmaXgsIGVuYWJsZWQpIHtcbiAgaWYgKF9sb2dzW3ByZWZpeF0pIHtcbiAgICBfbG9nc1twcmVmaXhdLmVuYWJsZWQgPSBlbmFibGVkO1xuICB9XG59OyAvLyBUT0RPOiBlbmFibGUvZGlzYWJsZSBsb2cgYXQgcnVudGltZVxuXG5cbmV4cG9ydHMuZW5hYmxlQnlQcmVmaXggPSBlbmFibGVCeVByZWZpeDtcblxudmFyIHBvcHVwQ29uc29sZSA9IGZ1bmN0aW9uIHBvcHVwQ29uc29sZSh0YWcsIHBvc3RNZXNzYWdlKSB7XG4gIHZhciBjID0gZ2xvYmFsLmNvbnNvbGU7XG4gIHZhciBvcmlnID0ge1xuICAgIGVycm9yOiBjLmVycm9yLFxuICAgIC8vIHdhcm46IGMud2FybixcbiAgICBpbmZvOiBjLmluZm8sXG4gICAgZGVidWc6IGMuZGVidWcsXG4gICAgbG9nOiBjLmxvZ1xuICB9O1xuICB2YXIgbG9nID0gW107XG5cbiAgdmFyIGluamVjdCA9IGZ1bmN0aW9uIGluamVjdChtZXRob2QsIGxldmVsKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAgIC8vIGFyZ3MudW5zaGlmdCgnW3BvcHVwLmpzXScpO1xuICAgICAgdmFyIHRpbWUgPSBuZXcgRGF0ZSgpLnRvVVRDU3RyaW5nKCk7XG5cbiAgICAgIGZvciAodmFyIF9sZW42ID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IG5ldyBBcnJheShfbGVuNiksIF9rZXk2ID0gMDsgX2tleTYgPCBfbGVuNjsgX2tleTYrKykge1xuICAgICAgICBhcmdzW19rZXk2XSA9IGFyZ3VtZW50c1tfa2V5Nl07XG4gICAgICB9XG5cbiAgICAgIGxvZy5wdXNoKFtsZXZlbCwgdGltZV0uY29uY2F0KGFyZ3MpKTtcbiAgICAgIHBvc3RNZXNzYWdlLmFwcGx5KF90aGlzLCBbe1xuICAgICAgICB0eXBlOiB0YWcsXG4gICAgICAgIGxldmVsOiBsZXZlbCxcbiAgICAgICAgdGltZTogdGltZSxcbiAgICAgICAgYXJnczogSlNPTi5zdHJpbmdpZnkoYXJncylcbiAgICAgIH1dKTtcbiAgICAgIHJldHVybiBtZXRob2QuYXBwbHkoYywgYXJncyk7XG4gICAgfTtcbiAgfTtcblxuICBmb3IgKHZhciBsZXZlbCBpbiBvcmlnKSB7XG4gICAgY1tsZXZlbF0gPSBpbmplY3Qob3JpZ1tsZXZlbF0sIGxldmVsKTtcbiAgfVxufTtcblxuZXhwb3J0cy5wb3B1cENvbnNvbGUgPSBwb3B1cENvbnNvbGU7IiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuZXhwb3J0cy5wYXJzZU1lc3NhZ2UgPSB2b2lkIDA7XG5cbi8vIHBhcnNlIE1lc3NhZ2VFdmVudCAuZGF0YSBpbnRvIENvcmVNZXNzYWdlXG52YXIgcGFyc2VNZXNzYWdlID0gZnVuY3Rpb24gcGFyc2VNZXNzYWdlKG1lc3NhZ2VEYXRhKSB7XG4gIHZhciBtZXNzYWdlID0ge1xuICAgIGV2ZW50OiBtZXNzYWdlRGF0YS5ldmVudCxcbiAgICB0eXBlOiBtZXNzYWdlRGF0YS50eXBlLFxuICAgIHBheWxvYWQ6IG1lc3NhZ2VEYXRhLnBheWxvYWRcbiAgfTtcblxuICBpZiAodHlwZW9mIG1lc3NhZ2VEYXRhLmlkID09PSAnbnVtYmVyJykge1xuICAgIG1lc3NhZ2UuaWQgPSBtZXNzYWdlRGF0YS5pZDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgbWVzc2FnZURhdGEuc3VjY2VzcyA9PT0gJ2Jvb2xlYW4nKSB7XG4gICAgbWVzc2FnZS5zdWNjZXNzID0gbWVzc2FnZURhdGEuc3VjY2VzcztcbiAgfVxuXG4gIHJldHVybiBtZXNzYWdlO1xufTtcblxuZXhwb3J0cy5wYXJzZU1lc3NhZ2UgPSBwYXJzZU1lc3NhZ2U7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0ID0gcmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVEZWZhdWx0XCIpO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuZXhwb3J0cy5wYXJzZSA9IGV4cG9ydHMuREVGQVVMVF9QUklPUklUWSA9IHZvaWQgMDtcblxudmFyIF9kZWZpbmVQcm9wZXJ0eTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2RlZmluZVByb3BlcnR5XCIpKTtcblxuZnVuY3Rpb24gb3duS2V5cyhvYmplY3QsIGVudW1lcmFibGVPbmx5KSB7IHZhciBrZXlzID0gT2JqZWN0LmtleXMob2JqZWN0KTsgaWYgKE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMpIHsgdmFyIHN5bWJvbHMgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKG9iamVjdCk7IGlmIChlbnVtZXJhYmxlT25seSkgc3ltYm9scyA9IHN5bWJvbHMuZmlsdGVyKGZ1bmN0aW9uIChzeW0pIHsgcmV0dXJuIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Iob2JqZWN0LCBzeW0pLmVudW1lcmFibGU7IH0pOyBrZXlzLnB1c2guYXBwbHkoa2V5cywgc3ltYm9scyk7IH0gcmV0dXJuIGtleXM7IH1cblxuZnVuY3Rpb24gX29iamVjdFNwcmVhZCh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXSAhPSBudWxsID8gYXJndW1lbnRzW2ldIDoge307IGlmIChpICUgMikgeyBvd25LZXlzKHNvdXJjZSwgdHJ1ZSkuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7ICgwLCBfZGVmaW5lUHJvcGVydHkyW1wiZGVmYXVsdFwiXSkodGFyZ2V0LCBrZXksIHNvdXJjZVtrZXldKTsgfSk7IH0gZWxzZSBpZiAoT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcnMpIHsgT2JqZWN0LmRlZmluZVByb3BlcnRpZXModGFyZ2V0LCBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9ycyhzb3VyY2UpKTsgfSBlbHNlIHsgb3duS2V5cyhzb3VyY2UpLmZvckVhY2goZnVuY3Rpb24gKGtleSkgeyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Ioc291cmNlLCBrZXkpKTsgfSk7IH0gfSByZXR1cm4gdGFyZ2V0OyB9XG5cbi8qXG4gKiBJbml0aWFsIHNldHRpbmdzIGZvciBjb25uZWN0LlxuICogSXQgY291bGQgYmUgY2hhbmdlZCBieSBwYXNzaW5nIHZhbHVlcyBpbnRvIFRyZXpvckNvbm5lY3QuaW5pdCguLi4pIG1ldGhvZFxuICovXG52YXIgVkVSU0lPTiA9ICc3LjAuNSc7XG52YXIgdmVyc2lvbk4gPSBWRVJTSU9OLnNwbGl0KCcuJykubWFwKGZ1bmN0aW9uIChzKSB7XG4gIHJldHVybiBwYXJzZUludChzKTtcbn0pO1xudmFyIERJUkVDVE9SWSA9IFwiXCIgKyB2ZXJzaW9uTlswXSArICh2ZXJzaW9uTlsxXSA+IDAgPyBcIi5cIiArIHZlcnNpb25OWzFdIDogJycpICsgXCIvXCI7XG52YXIgREVGQVVMVF9ET01BSU4gPSBcImh0dHBzOi8vY29ubmVjdC50cmV6b3IuaW8vXCIgKyBESVJFQ1RPUlk7XG52YXIgREVGQVVMVF9QUklPUklUWSA9IDI7XG5leHBvcnRzLkRFRkFVTFRfUFJJT1JJVFkgPSBERUZBVUxUX1BSSU9SSVRZO1xudmFyIGluaXRpYWxTZXR0aW5ncyA9IHtcbiAgY29uZmlnU3JjOiAnZGF0YS9jb25maWcuanNvbicsXG4gIC8vIGNvbnN0YW50XG4gIHZlcnNpb246IFZFUlNJT04sXG4gIC8vIGNvbnN0YW50XG4gIGRlYnVnOiBmYWxzZSxcbiAgb3JpZ2luOiBudWxsLFxuICBwcmlvcml0eTogREVGQVVMVF9QUklPUklUWSxcbiAgdHJ1c3RlZEhvc3Q6IGZhbHNlLFxuICBjb25uZWN0U3JjOiBERUZBVUxUX0RPTUFJTixcbiAgaWZyYW1lU3JjOiBERUZBVUxUX0RPTUFJTiArIFwiaWZyYW1lLmh0bWxcIixcbiAgcG9wdXA6IHRydWUsXG4gIHBvcHVwU3JjOiBERUZBVUxUX0RPTUFJTiArIFwicG9wdXAuaHRtbFwiLFxuICB3ZWJ1c2JTcmM6IERFRkFVTFRfRE9NQUlOICsgXCJ3ZWJ1c2IuaHRtbFwiLFxuICB0cmFuc3BvcnRSZWNvbm5lY3Q6IGZhbHNlLFxuICB3ZWJ1c2I6IHRydWUsXG4gIHBlbmRpbmdUcmFuc3BvcnRFdmVudDogdHJ1ZSxcbiAgc3VwcG9ydGVkQnJvd3NlcjogdHlwZW9mIG5hdmlnYXRvciAhPT0gJ3VuZGVmaW5lZCcgPyAhL1RyaWRlbnR8TVNJRS8udGVzdChuYXZpZ2F0b3IudXNlckFnZW50KSA6IHRydWUsXG4gIGV4dGVuc2lvbjogbnVsbCxcbiAgbWFuaWZlc3Q6IG51bGxcbn07XG52YXIgY3VycmVudFNldHRpbmdzID0gaW5pdGlhbFNldHRpbmdzO1xuXG52YXIgcGFyc2VNYW5pZmVzdCA9IGZ1bmN0aW9uIHBhcnNlTWFuaWZlc3QobWFuaWZlc3QpIHtcbiAgaWYgKHR5cGVvZiBtYW5pZmVzdC5lbWFpbCAhPT0gJ3N0cmluZycpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgbWFuaWZlc3QuYXBwVXJsICE9PSAnc3RyaW5nJykge1xuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBlbWFpbDogbWFuaWZlc3QuZW1haWwsXG4gICAgYXBwVXJsOiBtYW5pZmVzdC5hcHBVcmxcbiAgfTtcbn07XG5cbnZhciBwYXJzZSA9IGZ1bmN0aW9uIHBhcnNlKGlucHV0KSB7XG4gIGlmICghaW5wdXQpIHJldHVybiBjdXJyZW50U2V0dGluZ3M7XG5cbiAgdmFyIHNldHRpbmdzID0gX29iamVjdFNwcmVhZCh7fSwgY3VycmVudFNldHRpbmdzKTtcblxuICBpZiAoaW5wdXQuaGFzT3duUHJvcGVydHkoJ2RlYnVnJykpIHtcbiAgICBpZiAoQXJyYXkuaXNBcnJheShpbnB1dCkpIHsvLyBlbmFibGUgbG9nIHdpdGggcHJlZml4XG4gICAgfVxuXG4gICAgaWYgKHR5cGVvZiBpbnB1dC5kZWJ1ZyA9PT0gJ2Jvb2xlYW4nKSB7XG4gICAgICBzZXR0aW5ncy5kZWJ1ZyA9IGlucHV0LmRlYnVnO1xuICAgIH0gZWxzZSBpZiAodHlwZW9mIGlucHV0LmRlYnVnID09PSAnc3RyaW5nJykge1xuICAgICAgc2V0dGluZ3MuZGVidWcgPSBpbnB1dC5kZWJ1ZyA9PT0gJ3RydWUnO1xuICAgIH1cbiAgfVxuXG4gIGlmICh0eXBlb2YgaW5wdXQuY29ubmVjdFNyYyA9PT0gJ3N0cmluZycpIHtcbiAgICAvLyBUT0RPOiBlc2NhcGUgc3RyaW5nLCB2YWxpZGF0ZSB1cmxcbiAgICBzZXR0aW5ncy5jb25uZWN0U3JjID0gaW5wdXQuY29ubmVjdFNyYztcbiAgfSBlbHNlIGlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJiB0eXBlb2Ygd2luZG93Ll9fVFJFWk9SX0NPTk5FQ1RfU1JDID09PSAnc3RyaW5nJykge1xuICAgIHNldHRpbmdzLmNvbm5lY3RTcmMgPSB3aW5kb3cuX19UUkVaT1JfQ09OTkVDVF9TUkM7XG4gIH1cblxuICBzZXR0aW5ncy5pZnJhbWVTcmMgPSBzZXR0aW5ncy5jb25uZWN0U3JjICsgXCJpZnJhbWUuaHRtbFwiO1xuICBzZXR0aW5ncy5wb3B1cFNyYyA9IHNldHRpbmdzLmNvbm5lY3RTcmMgKyBcInBvcHVwLmh0bWxcIjtcbiAgc2V0dGluZ3Mud2VidXNiU3JjID0gc2V0dGluZ3MuY29ubmVjdFNyYyArIFwid2VidXNiLmh0bWxcIjtcblxuICBpZiAodHlwZW9mIGlucHV0LnRyYW5zcG9ydFJlY29ubmVjdCA9PT0gJ2Jvb2xlYW4nKSB7XG4gICAgc2V0dGluZ3MudHJhbnNwb3J0UmVjb25uZWN0ID0gaW5wdXQudHJhbnNwb3J0UmVjb25uZWN0O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBpbnB1dC53ZWJ1c2IgPT09ICdib29sZWFuJykge1xuICAgIHNldHRpbmdzLndlYnVzYiA9IGlucHV0LndlYnVzYjtcbiAgfVxuXG4gIGlmICh0eXBlb2YgaW5wdXQucG9wdXAgPT09ICdib29sZWFuJykge1xuICAgIHNldHRpbmdzLnBvcHVwID0gaW5wdXQucG9wdXA7XG4gIH1cblxuICBpZiAodHlwZW9mIGlucHV0LnBlbmRpbmdUcmFuc3BvcnRFdmVudCA9PT0gJ2Jvb2xlYW4nKSB7XG4gICAgc2V0dGluZ3MucGVuZGluZ1RyYW5zcG9ydEV2ZW50ID0gaW5wdXQucGVuZGluZ1RyYW5zcG9ydEV2ZW50O1xuICB9IC8vIGxvY2FsIGZpbGVzXG5cblxuICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiYgd2luZG93LmxvY2F0aW9uLnByb3RvY29sID09PSAnZmlsZTonKSB7XG4gICAgc2V0dGluZ3Mub3JpZ2luID0gXCJmaWxlOi8vXCIgKyB3aW5kb3cubG9jYXRpb24ucGF0aG5hbWU7XG4gICAgc2V0dGluZ3Mud2VidXNiID0gZmFsc2U7XG4gIH1cblxuICBpZiAodHlwZW9mIGlucHV0LmV4dGVuc2lvbiA9PT0gJ3N0cmluZycpIHtcbiAgICBzZXR0aW5ncy5leHRlbnNpb24gPSBpbnB1dC5leHRlbnNpb247XG4gIH1cblxuICBpZiAodHlwZW9mIGlucHV0Lm1hbmlmZXN0ID09PSAnb2JqZWN0Jykge1xuICAgIHNldHRpbmdzLm1hbmlmZXN0ID0gcGFyc2VNYW5pZmVzdChpbnB1dC5tYW5pZmVzdCk7XG4gIH1cblxuICBjdXJyZW50U2V0dGluZ3MgPSBzZXR0aW5ncztcbiAgcmV0dXJuIGN1cnJlbnRTZXR0aW5ncztcbn07XG5cbmV4cG9ydHMucGFyc2UgPSBwYXJzZTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkID0gcmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVXaWxkY2FyZFwiKTtcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxudmFyIF9jb25zdGFudHMgPSByZXF1aXJlKFwiLi4vY29uc3RhbnRzXCIpO1xuXG52YXIgVFJBTlNQT1JUID0gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQocmVxdWlyZShcIi4uL2NvbnN0YW50cy90cmFuc3BvcnRcIikpO1xuXG52YXIgUE9QVVAgPSBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChyZXF1aXJlKFwiLi4vY29uc3RhbnRzL3BvcHVwXCIpKTtcblxudmFyIFVJID0gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQocmVxdWlyZShcIi4uL2NvbnN0YW50cy91aVwiKSk7XG5cbnZhciBERVZJQ0UgPSBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChyZXF1aXJlKFwiLi4vY29uc3RhbnRzL2RldmljZVwiKSk7XG5cbnZhciBQID0gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQocmVxdWlyZShcIi4vcGFyYW1zXCIpKTtcblxudmFyIFIgPSBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChyZXF1aXJlKFwiLi9yZXNwb25zZVwiKSk7XG5cbk9iamVjdC5rZXlzKFIpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICBpZiAoa2V5ID09PSBcImRlZmF1bHRcIiB8fCBrZXkgPT09IFwiX19lc01vZHVsZVwiKSByZXR1cm47XG4gIGV4cG9ydHNba2V5XSA9IFJba2V5XTtcbn0pO1xuXG52YXIgQ0FSREFOTyA9IF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKHJlcXVpcmUoXCIuL2NhcmRhbm9cIikpO1xuXG52YXIgUklQUExFID0gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQocmVxdWlyZShcIi4vcmlwcGxlXCIpKTtcblxudmFyIEVUSEVSRVVNID0gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQocmVxdWlyZShcIi4vZXRoZXJldW1cIikpO1xuXG52YXIgTkVNID0gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQocmVxdWlyZShcIi4vbmVtXCIpKTtcblxudmFyIFNURUxMQVIgPSBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChyZXF1aXJlKFwiLi9zdGVsbGFyXCIpKTtcblxudmFyIExJU0sgPSBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChyZXF1aXJlKFwiLi9saXNrXCIpKTtcblxudmFyIFRFWk9TID0gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQocmVxdWlyZShcIi4vdGV6b3NcIikpO1xuXG52YXIgRU9TID0gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQocmVxdWlyZShcIi4vZW9zXCIpKTtcblxudmFyIF9jb2luSW5mbyA9IHJlcXVpcmUoXCIuL2NvaW5JbmZvXCIpO1xuXG5PYmplY3Qua2V5cyhfY29pbkluZm8pLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICBpZiAoa2V5ID09PSBcImRlZmF1bHRcIiB8fCBrZXkgPT09IFwiX19lc01vZHVsZVwiKSByZXR1cm47XG4gIGV4cG9ydHNba2V5XSA9IF9jb2luSW5mb1trZXldO1xufSk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZCA9IHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlV2lsZGNhcmRcIik7XG5cbnZhciBCTE9DS0NIQUlOID0gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQocmVxdWlyZShcIi4uL2NvbnN0YW50cy9ibG9ja2NoYWluXCIpKTsiLCIndXNlIHN0cmljdCc7XG5cbnZhciBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZCA9IHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlV2lsZGNhcmRcIik7XG5cbnZhciBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0ID0gcmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVEZWZhdWx0XCIpO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xudmFyIF9leHBvcnROYW1lcyA9IHtcbiAgVUlfRVZFTlQ6IHRydWUsXG4gIERFVklDRV9FVkVOVDogdHJ1ZSxcbiAgUkVTUE9OU0VfRVZFTlQ6IHRydWUsXG4gIFRSQU5TUE9SVF9FVkVOVDogdHJ1ZSxcbiAgQkxPQ0tDSEFJTl9FVkVOVDogdHJ1ZSxcbiAgVFJBTlNQT1JUOiB0cnVlLFxuICBVSTogdHJ1ZSxcbiAgREVWSUNFOiB0cnVlLFxuICBCTE9DS0NIQUlOOiB0cnVlXG59O1xuZXhwb3J0cy5CTE9DS0NIQUlOID0gZXhwb3J0cy5ERVZJQ0UgPSBleHBvcnRzLlVJID0gZXhwb3J0cy5UUkFOU1BPUlQgPSBleHBvcnRzW1wiZGVmYXVsdFwiXSA9IHZvaWQgMDtcblxudmFyIF9kZWZpbmVQcm9wZXJ0eTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2RlZmluZVByb3BlcnR5XCIpKTtcblxudmFyIF9yZWdlbmVyYXRvciA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL3JlZ2VuZXJhdG9yXCIpKTtcblxudmFyIF9hc3luY1RvR2VuZXJhdG9yMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvYXN5bmNUb0dlbmVyYXRvclwiKSk7XG5cbnZhciBfZXZlbnRzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiZXZlbnRzXCIpKTtcblxudmFyIF9jb25zdGFudHMgPSByZXF1aXJlKFwiLi9jb25zdGFudHNcIik7XG5cbmV4cG9ydHMuVUlfRVZFTlQgPSBfY29uc3RhbnRzLlVJX0VWRU5UO1xuZXhwb3J0cy5ERVZJQ0VfRVZFTlQgPSBfY29uc3RhbnRzLkRFVklDRV9FVkVOVDtcbmV4cG9ydHMuUkVTUE9OU0VfRVZFTlQgPSBfY29uc3RhbnRzLlJFU1BPTlNFX0VWRU5UO1xuZXhwb3J0cy5UUkFOU1BPUlRfRVZFTlQgPSBfY29uc3RhbnRzLlRSQU5TUE9SVF9FVkVOVDtcbmV4cG9ydHMuQkxPQ0tDSEFJTl9FVkVOVCA9IF9jb25zdGFudHMuQkxPQ0tDSEFJTl9FVkVOVDtcblxudmFyIFRSQU5TUE9SVCA9IF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKHJlcXVpcmUoXCIuL2NvbnN0YW50cy90cmFuc3BvcnRcIikpO1xuXG5leHBvcnRzLlRSQU5TUE9SVCA9IFRSQU5TUE9SVDtcblxudmFyIFBPUFVQID0gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQocmVxdWlyZShcIi4vY29uc3RhbnRzL3BvcHVwXCIpKTtcblxudmFyIElGUkFNRSA9IF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKHJlcXVpcmUoXCIuL2NvbnN0YW50cy9pZnJhbWVcIikpO1xuXG52YXIgVUkgPSBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChyZXF1aXJlKFwiLi9jb25zdGFudHMvdWlcIikpO1xuXG5leHBvcnRzLlVJID0gVUk7XG5cbnZhciBERVZJQ0UgPSBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChyZXF1aXJlKFwiLi9jb25zdGFudHMvZGV2aWNlXCIpKTtcblxuZXhwb3J0cy5ERVZJQ0UgPSBERVZJQ0U7XG5cbnZhciBCTE9DS0NIQUlOID0gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQocmVxdWlyZShcIi4vY29uc3RhbnRzL2Jsb2NrY2hhaW5cIikpO1xuXG5leHBvcnRzLkJMT0NLQ0hBSU4gPSBCTE9DS0NIQUlOO1xuXG52YXIgRVJST1IgPSBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChyZXF1aXJlKFwiLi9jb25zdGFudHMvZXJyb3JzXCIpKTtcblxudmFyIF9Qb3B1cE1hbmFnZXIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL3BvcHVwL1BvcHVwTWFuYWdlclwiKSk7XG5cbnZhciBpZnJhbWUgPSBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChyZXF1aXJlKFwiLi9pZnJhbWUvYnVpbGRlclwiKSk7XG5cbnZhciBfYnV0dG9uID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi93ZWJ1c2IvYnV0dG9uXCIpKTtcblxudmFyIF9kZWJ1ZyA9IF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKHJlcXVpcmUoXCIuL3V0aWxzL2RlYnVnXCIpKTtcblxudmFyIF9tZXNzYWdlID0gcmVxdWlyZShcIi4vbWVzc2FnZVwiKTtcblxudmFyIF9Db25uZWN0U2V0dGluZ3MgPSByZXF1aXJlKFwiLi9kYXRhL0Nvbm5lY3RTZXR0aW5nc1wiKTtcblxudmFyICRUID0gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQocmVxdWlyZShcIi4vdHlwZXNcIikpO1xuXG52YXIgX2Jsb2NrY2hhaW5FdmVudCA9IHJlcXVpcmUoXCIuL3R5cGVzL2Jsb2NrY2hhaW5FdmVudFwiKTtcblxuT2JqZWN0LmtleXMoX2Jsb2NrY2hhaW5FdmVudCkuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gIGlmIChrZXkgPT09IFwiZGVmYXVsdFwiIHx8IGtleSA9PT0gXCJfX2VzTW9kdWxlXCIpIHJldHVybjtcbiAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChfZXhwb3J0TmFtZXMsIGtleSkpIHJldHVybjtcbiAgZXhwb3J0c1trZXldID0gX2Jsb2NrY2hhaW5FdmVudFtrZXldO1xufSk7XG5cbnZhciBfYWNjb3VudCA9IHJlcXVpcmUoXCIuL3R5cGVzL2FjY291bnRcIik7XG5cbk9iamVjdC5rZXlzKF9hY2NvdW50KS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgaWYgKGtleSA9PT0gXCJkZWZhdWx0XCIgfHwga2V5ID09PSBcIl9fZXNNb2R1bGVcIikgcmV0dXJuO1xuICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKF9leHBvcnROYW1lcywga2V5KSkgcmV0dXJuO1xuICBleHBvcnRzW2tleV0gPSBfYWNjb3VudFtrZXldO1xufSk7XG5cbmZ1bmN0aW9uIG93bktleXMob2JqZWN0LCBlbnVtZXJhYmxlT25seSkgeyB2YXIga2V5cyA9IE9iamVjdC5rZXlzKG9iamVjdCk7IGlmIChPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKSB7IHZhciBzeW1ib2xzID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhvYmplY3QpOyBpZiAoZW51bWVyYWJsZU9ubHkpIHN5bWJvbHMgPSBzeW1ib2xzLmZpbHRlcihmdW5jdGlvbiAoc3ltKSB7IHJldHVybiBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKG9iamVjdCwgc3ltKS5lbnVtZXJhYmxlOyB9KTsga2V5cy5wdXNoLmFwcGx5KGtleXMsIHN5bWJvbHMpOyB9IHJldHVybiBrZXlzOyB9XG5cbmZ1bmN0aW9uIF9vYmplY3RTcHJlYWQodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV0gIT0gbnVsbCA/IGFyZ3VtZW50c1tpXSA6IHt9OyBpZiAoaSAlIDIpIHsgb3duS2V5cyhzb3VyY2UsIHRydWUpLmZvckVhY2goZnVuY3Rpb24gKGtleSkgeyAoMCwgX2RlZmluZVByb3BlcnR5MltcImRlZmF1bHRcIl0pKHRhcmdldCwga2V5LCBzb3VyY2Vba2V5XSk7IH0pOyB9IGVsc2UgaWYgKE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JzKSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcnMoc291cmNlKSk7IH0gZWxzZSB7IG93bktleXMoc291cmNlKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHNvdXJjZSwga2V5KSk7IH0pOyB9IH0gcmV0dXJuIHRhcmdldDsgfVxuXG52YXIgZXZlbnRFbWl0dGVyID0gbmV3IF9ldmVudHNbXCJkZWZhdWx0XCJdKCk7XG5cbnZhciBfbG9nID0gKDAsIF9kZWJ1Zy5pbml0KSgnW3RyZXpvci1jb25uZWN0LmpzXScpO1xuXG52YXIgX3NldHRpbmdzO1xuXG52YXIgX3BvcHVwTWFuYWdlcjtcblxudmFyIGluaXRQb3B1cE1hbmFnZXIgPSBmdW5jdGlvbiBpbml0UG9wdXBNYW5hZ2VyKCkge1xuICB2YXIgcG0gPSBuZXcgX1BvcHVwTWFuYWdlcltcImRlZmF1bHRcIl0oX3NldHRpbmdzKTtcbiAgcG0ub24oUE9QVVAuQ0xPU0VELCBmdW5jdGlvbiAoKSB7XG4gICAgaWZyYW1lLnBvc3RNZXNzYWdlKHtcbiAgICAgIHR5cGU6IFBPUFVQLkNMT1NFRFxuICAgIH0sIGZhbHNlKTtcbiAgfSk7XG4gIHJldHVybiBwbTtcbn07IC8vIGhhbmRsZSBtZXNzYWdlIHJlY2VpdmVkIGZyb20gaWZyYW1lXG5cblxudmFyIGhhbmRsZU1lc3NhZ2UgPSBmdW5jdGlvbiBoYW5kbGVNZXNzYWdlKG1lc3NhZ2VFdmVudCkge1xuICAvLyBpZ25vcmUgbWVzc2FnZXMgZnJvbSBkb21haW4gb3RoZXIgdGhlbiBpZnJhbWUgb3JpZ2luXG4gIGlmIChtZXNzYWdlRXZlbnQub3JpZ2luICE9PSBpZnJhbWUub3JpZ2luKSByZXR1cm47XG4gIHZhciBtZXNzYWdlID0gKDAsIF9tZXNzYWdlLnBhcnNlTWVzc2FnZSkobWVzc2FnZUV2ZW50LmRhdGEpOyAvLyBUT0RPOiBkZXN0cnVjdHVyaW5nIHdpdGggdHlwZVxuICAvLyBodHRwczovL2dpdGh1Yi5jb20vTWljcm9zb2Z0L1R5cGVTY3JpcHQvaXNzdWVzLzI0MFxuICAvLyBjb25zdCB7IGlkLCBldmVudCwgdHlwZSwgZGF0YSwgZXJyb3IgfTogQ29yZU1lc3NhZ2UgPSBtZXNzYWdlO1xuXG4gIHZhciBpZCA9IG1lc3NhZ2UuaWQgfHwgMDtcbiAgdmFyIGV2ZW50ID0gbWVzc2FnZS5ldmVudDtcbiAgdmFyIHR5cGUgPSBtZXNzYWdlLnR5cGU7XG4gIHZhciBwYXlsb2FkID0gbWVzc2FnZS5wYXlsb2FkO1xuXG4gIF9sb2cubG9nKCdoYW5kbGVNZXNzYWdlJywgbWVzc2FnZSk7XG5cbiAgc3dpdGNoIChldmVudCkge1xuICAgIGNhc2UgX2NvbnN0YW50cy5SRVNQT05TRV9FVkVOVDpcbiAgICAgIGlmIChpZnJhbWUubWVzc2FnZVByb21pc2VzW2lkXSkge1xuICAgICAgICAvLyBjbGVhciB1bm5lY2Vzc2FyeSBmaWVsZHMgZnJvbSBtZXNzYWdlIG9iamVjdFxuICAgICAgICBkZWxldGUgbWVzc2FnZS50eXBlO1xuICAgICAgICBkZWxldGUgbWVzc2FnZS5ldmVudDsgLy8gZGVsZXRlIG1lc3NhZ2UuaWQ7XG4gICAgICAgIC8vIG1lc3NhZ2UuX19pZCA9IGlkO1xuICAgICAgICAvLyByZXNvbHZlIG1lc3NhZ2UgcHJvbWlzZSAoc2VuZCByZXN1bHQgb2YgY2FsbCBtZXRob2QpXG5cbiAgICAgICAgaWZyYW1lLm1lc3NhZ2VQcm9taXNlc1tpZF0ucmVzb2x2ZShtZXNzYWdlKTtcbiAgICAgICAgZGVsZXRlIGlmcmFtZS5tZXNzYWdlUHJvbWlzZXNbaWRdO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgX2xvZy53YXJuKFwiVW5rbm93biBtZXNzYWdlIGlkIFwiICsgaWQpO1xuICAgICAgfVxuXG4gICAgICBicmVhaztcblxuICAgIGNhc2UgX2NvbnN0YW50cy5ERVZJQ0VfRVZFTlQ6XG4gICAgICAvLyBwYXNzIERFVklDRSBldmVudCB1cCB0byBodG1sXG4gICAgICBldmVudEVtaXR0ZXIuZW1pdChldmVudCwgbWVzc2FnZSk7XG4gICAgICBldmVudEVtaXR0ZXIuZW1pdCh0eXBlLCBwYXlsb2FkKTsgLy8gREVWSUNFX0VWRU5UIGFsc28gZW1pdCBzaW5nbGUgZXZlbnRzIChjb25uZWN0L2Rpc2Nvbm5lY3QuLi4pXG5cbiAgICAgIGJyZWFrO1xuXG4gICAgY2FzZSBfY29uc3RhbnRzLlRSQU5TUE9SVF9FVkVOVDpcbiAgICAgIGV2ZW50RW1pdHRlci5lbWl0KGV2ZW50LCBtZXNzYWdlKTtcbiAgICAgIGV2ZW50RW1pdHRlci5lbWl0KHR5cGUsIHBheWxvYWQpO1xuICAgICAgYnJlYWs7XG5cbiAgICBjYXNlIF9jb25zdGFudHMuQkxPQ0tDSEFJTl9FVkVOVDpcbiAgICAgIGV2ZW50RW1pdHRlci5lbWl0KGV2ZW50LCBtZXNzYWdlKTtcbiAgICAgIGV2ZW50RW1pdHRlci5lbWl0KHR5cGUsIHBheWxvYWQpO1xuICAgICAgYnJlYWs7XG5cbiAgICBjYXNlIF9jb25zdGFudHMuVUlfRVZFTlQ6XG4gICAgICBpZiAodHlwZSA9PT0gSUZSQU1FLkJPT1RTVFJBUCkge1xuICAgICAgICBpZnJhbWUuY2xlYXJUaW1lb3V0KCk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfSBlbHNlIGlmICh0eXBlID09PSBQT1BVUC5CT09UU1RSQVApIHtcbiAgICAgICAgLy8gUG9wdXAgZGlkIG9wZW4gYnV0IGlzIHN0aWxsIGxvYWRpbmcgSlNcbiAgICAgICAgX3BvcHVwTWFuYWdlci5jYW5jZWxPcGVuVGltZW91dCgpO1xuXG4gICAgICAgIGJyZWFrO1xuICAgICAgfSAvLyBwYXNzIFVJIGV2ZW50IHVwXG5cblxuICAgICAgZXZlbnRFbWl0dGVyLmVtaXQoZXZlbnQsIG1lc3NhZ2UpO1xuICAgICAgZXZlbnRFbWl0dGVyLmVtaXQodHlwZSwgcGF5bG9hZCk7XG5cbiAgICAgIGlmICh0eXBlID09PSBVSS5JRlJBTUVfSEFORFNIQUtFKSB7XG4gICAgICAgIGlmIChwYXlsb2FkLmVycm9yKSB7XG4gICAgICAgICAgaWZyYW1lLmluaXRQcm9taXNlLnJlamVjdChuZXcgRXJyb3IocGF5bG9hZC5lcnJvcikpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIF9wb3B1cE1hbmFnZXIuc2V0QnJvYWRjYXN0KHBheWxvYWQuYnJvYWRjYXN0KTtcblxuICAgICAgICAgIGlmcmFtZS5pbml0UHJvbWlzZS5yZXNvbHZlKCk7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAodHlwZSA9PT0gUE9QVVAuQ0FOQ0VMX1BPUFVQX1JFUVVFU1QpIHtcbiAgICAgICAgX3BvcHVwTWFuYWdlci5jYW5jZWwoKTtcbiAgICAgIH0gZWxzZSBpZiAodHlwZSA9PT0gVUkuQ0xPU0VfVUlfV0lORE9XKSB7XG4gICAgICAgIF9wb3B1cE1hbmFnZXIuY2xvc2UoKTtcbiAgICAgIH1cblxuICAgICAgYnJlYWs7XG5cbiAgICBkZWZhdWx0OlxuICAgICAgX2xvZy5sb2coJ1VuZGVmaW5lZCBtZXNzYWdlJywgZXZlbnQsIG1lc3NhZ2VFdmVudCk7XG5cbiAgfVxufTtcblxudmFyIGluaXQgPVxuLyojX19QVVJFX18qL1xuZnVuY3Rpb24gKCkge1xuICB2YXIgX3JlZiA9ICgwLCBfYXN5bmNUb0dlbmVyYXRvcjJbXCJkZWZhdWx0XCJdKShcbiAgLyojX19QVVJFX18qL1xuICBfcmVnZW5lcmF0b3JbXCJkZWZhdWx0XCJdLm1hcmsoZnVuY3Rpb24gX2NhbGxlZShzZXR0aW5ncykge1xuICAgIHJldHVybiBfcmVnZW5lcmF0b3JbXCJkZWZhdWx0XCJdLndyYXAoZnVuY3Rpb24gX2NhbGxlZSQoX2NvbnRleHQpIHtcbiAgICAgIHdoaWxlICgxKSB7XG4gICAgICAgIHN3aXRjaCAoX2NvbnRleHQucHJldiA9IF9jb250ZXh0Lm5leHQpIHtcbiAgICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICBpZiAoc2V0dGluZ3MgPT09IHZvaWQgMCkge1xuICAgICAgICAgICAgICBzZXR0aW5ncyA9IHt9O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoIWlmcmFtZS5pbnN0YW5jZSkge1xuICAgICAgICAgICAgICBfY29udGV4dC5uZXh0ID0gMztcbiAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHRocm93IEVSUk9SLklGUkFNRV9JTklUSUFMSVpFRDtcblxuICAgICAgICAgIGNhc2UgMzpcbiAgICAgICAgICAgIGlmICghX3NldHRpbmdzKSB7XG4gICAgICAgICAgICAgIF9zZXR0aW5ncyA9ICgwLCBfQ29ubmVjdFNldHRpbmdzLnBhcnNlKShzZXR0aW5ncyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChfc2V0dGluZ3MubWFuaWZlc3QpIHtcbiAgICAgICAgICAgICAgX2NvbnRleHQubmV4dCA9IDY7XG4gICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB0aHJvdyBFUlJPUi5NQU5JRkVTVF9OT1RfU0VUO1xuXG4gICAgICAgICAgY2FzZSA2OlxuICAgICAgICAgICAgaWYgKF9zZXR0aW5ncy5zdXBwb3J0ZWRCcm93c2VyKSB7XG4gICAgICAgICAgICAgIF9jb250ZXh0Lm5leHQgPSA4O1xuICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdGhyb3cgRVJST1IuQlJPV1NFUl9OT1RfU1VQUE9SVEVEO1xuXG4gICAgICAgICAgY2FzZSA4OlxuICAgICAgICAgICAgaWYgKCFfcG9wdXBNYW5hZ2VyKSB7XG4gICAgICAgICAgICAgIF9wb3B1cE1hbmFnZXIgPSBpbml0UG9wdXBNYW5hZ2VyKCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIF9sb2cuZW5hYmxlZCA9IF9zZXR0aW5ncy5kZWJ1ZztcbiAgICAgICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdtZXNzYWdlJywgaGFuZGxlTWVzc2FnZSk7XG4gICAgICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignYmVmb3JldW5sb2FkJywgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICBpZiAoX3BvcHVwTWFuYWdlcikge1xuICAgICAgICAgICAgICAgIF9wb3B1cE1hbmFnZXIub25CZWZvcmVVbmxvYWQoKTtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIGlmcmFtZS5kaXNwb3NlKCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIF9jb250ZXh0Lm5leHQgPSAxNDtcbiAgICAgICAgICAgIHJldHVybiBpZnJhbWUuaW5pdChfc2V0dGluZ3MpO1xuXG4gICAgICAgICAgY2FzZSAxNDpcbiAgICAgICAgICBjYXNlIFwiZW5kXCI6XG4gICAgICAgICAgICByZXR1cm4gX2NvbnRleHQuc3RvcCgpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSwgX2NhbGxlZSk7XG4gIH0pKTtcblxuICByZXR1cm4gZnVuY3Rpb24gaW5pdChfeCkge1xuICAgIHJldHVybiBfcmVmLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gIH07XG59KCk7XG5cbnZhciBjYWxsID1cbi8qI19fUFVSRV9fKi9cbmZ1bmN0aW9uICgpIHtcbiAgdmFyIF9yZWYyID0gKDAsIF9hc3luY1RvR2VuZXJhdG9yMltcImRlZmF1bHRcIl0pKFxuICAvKiNfX1BVUkVfXyovXG4gIF9yZWdlbmVyYXRvcltcImRlZmF1bHRcIl0ubWFyayhmdW5jdGlvbiBfY2FsbGVlMihwYXJhbXMpIHtcbiAgICB2YXIgcmVzcG9uc2U7XG4gICAgcmV0dXJuIF9yZWdlbmVyYXRvcltcImRlZmF1bHRcIl0ud3JhcChmdW5jdGlvbiBfY2FsbGVlMiQoX2NvbnRleHQyKSB7XG4gICAgICB3aGlsZSAoMSkge1xuICAgICAgICBzd2l0Y2ggKF9jb250ZXh0Mi5wcmV2ID0gX2NvbnRleHQyLm5leHQpIHtcbiAgICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICBpZiAoISghaWZyYW1lLmluc3RhbmNlICYmICFpZnJhbWUudGltZW91dCkpIHtcbiAgICAgICAgICAgICAgX2NvbnRleHQyLm5leHQgPSAxOTtcbiAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIGluaXQgcG9wdXAgd2l0aCBsYXp5IGxvYWRpbmcgYmVmb3JlIGlmcmFtZSBpbml0aWFsaXphdGlvblxuICAgICAgICAgICAgX3NldHRpbmdzID0gKDAsIF9Db25uZWN0U2V0dGluZ3MucGFyc2UpKF9zZXR0aW5ncyk7XG5cbiAgICAgICAgICAgIGlmIChfc2V0dGluZ3MubWFuaWZlc3QpIHtcbiAgICAgICAgICAgICAgX2NvbnRleHQyLm5leHQgPSA0O1xuICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIF9jb250ZXh0Mi5hYnJ1cHQoXCJyZXR1cm5cIiwge1xuICAgICAgICAgICAgICBzdWNjZXNzOiBmYWxzZSxcbiAgICAgICAgICAgICAgcGF5bG9hZDoge1xuICAgICAgICAgICAgICAgIGVycm9yOiBFUlJPUi5NQU5JRkVTVF9OT1RfU0VULm1lc3NhZ2VcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICBjYXNlIDQ6XG4gICAgICAgICAgICBpZiAoX3NldHRpbmdzLnN1cHBvcnRlZEJyb3dzZXIpIHtcbiAgICAgICAgICAgICAgX2NvbnRleHQyLm5leHQgPSA2O1xuICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIF9jb250ZXh0Mi5hYnJ1cHQoXCJyZXR1cm5cIiwge1xuICAgICAgICAgICAgICBzdWNjZXNzOiBmYWxzZSxcbiAgICAgICAgICAgICAgcGF5bG9hZDoge1xuICAgICAgICAgICAgICAgIGVycm9yOiBFUlJPUi5CUk9XU0VSX05PVF9TVVBQT1JURUQubWVzc2FnZVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgIGNhc2UgNjpcbiAgICAgICAgICAgIF9wb3B1cE1hbmFnZXIgPSBpbml0UG9wdXBNYW5hZ2VyKCk7XG5cbiAgICAgICAgICAgIF9wb3B1cE1hbmFnZXIucmVxdWVzdCh0cnVlKTsgLy8gYXV0byBpbml0IHdpdGggZGVmYXVsdCBzZXR0aW5nc1xuXG5cbiAgICAgICAgICAgIF9jb250ZXh0Mi5wcmV2ID0gODtcbiAgICAgICAgICAgIF9jb250ZXh0Mi5uZXh0ID0gMTE7XG4gICAgICAgICAgICByZXR1cm4gaW5pdChfc2V0dGluZ3MpO1xuXG4gICAgICAgICAgY2FzZSAxMTpcbiAgICAgICAgICAgIF9jb250ZXh0Mi5uZXh0ID0gMTM7XG4gICAgICAgICAgICByZXR1cm4gX3BvcHVwTWFuYWdlci5yZXNvbHZlTGF6eUxvYWQoKTtcblxuICAgICAgICAgIGNhc2UgMTM6XG4gICAgICAgICAgICBfY29udGV4dDIubmV4dCA9IDE5O1xuICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICBjYXNlIDE1OlxuICAgICAgICAgICAgX2NvbnRleHQyLnByZXYgPSAxNTtcbiAgICAgICAgICAgIF9jb250ZXh0Mi50MCA9IF9jb250ZXh0MltcImNhdGNoXCJdKDgpO1xuXG4gICAgICAgICAgICBfcG9wdXBNYW5hZ2VyLmNsb3NlKCk7XG5cbiAgICAgICAgICAgIHJldHVybiBfY29udGV4dDIuYWJydXB0KFwicmV0dXJuXCIsIHtcbiAgICAgICAgICAgICAgc3VjY2VzczogZmFsc2UsXG4gICAgICAgICAgICAgIHBheWxvYWQ6IHtcbiAgICAgICAgICAgICAgICBlcnJvcjogX2NvbnRleHQyLnQwXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgY2FzZSAxOTpcbiAgICAgICAgICAgIGlmICghaWZyYW1lLnRpbWVvdXQpIHtcbiAgICAgICAgICAgICAgX2NvbnRleHQyLm5leHQgPSAyMztcbiAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiBfY29udGV4dDIuYWJydXB0KFwicmV0dXJuXCIsIHtcbiAgICAgICAgICAgICAgc3VjY2VzczogZmFsc2UsXG4gICAgICAgICAgICAgIHBheWxvYWQ6IHtcbiAgICAgICAgICAgICAgICBlcnJvcjogRVJST1IuTk9fSUZSQU1FLm1lc3NhZ2VcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICBjYXNlIDIzOlxuICAgICAgICAgICAgaWYgKCFpZnJhbWUuZXJyb3IpIHtcbiAgICAgICAgICAgICAgX2NvbnRleHQyLm5leHQgPSAyNTtcbiAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiBfY29udGV4dDIuYWJydXB0KFwicmV0dXJuXCIsIHtcbiAgICAgICAgICAgICAgc3VjY2VzczogZmFsc2UsXG4gICAgICAgICAgICAgIHBheWxvYWQ6IHtcbiAgICAgICAgICAgICAgICBlcnJvcjogaWZyYW1lLmVycm9yXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgY2FzZSAyNTpcbiAgICAgICAgICAgIC8vIHJlcXVlc3QgcG9wdXAgd2luZG93IGl0IG1pZ2h0IGJlIHVzZWQgaW4gdGhlIGZ1dHVyZVxuICAgICAgICAgICAgLy8gaWYgKGV2ZW50RW1pdHRlci5saXN0ZW5lcnMoVUlfRVZFTlQpLmxlbmd0aCA8IDEpIHsgX3BvcHVwTWFuYWdlci5yZXF1ZXN0KHBhcmFtcyk7IH1cbiAgICAgICAgICAgIGlmIChfc2V0dGluZ3MucG9wdXApIHtcbiAgICAgICAgICAgICAgX3BvcHVwTWFuYWdlci5yZXF1ZXN0KCk7XG4gICAgICAgICAgICB9IC8vIHBvc3QgbWVzc2FnZSB0byBpZnJhbWVcblxuXG4gICAgICAgICAgICBfY29udGV4dDIucHJldiA9IDI2O1xuICAgICAgICAgICAgX2NvbnRleHQyLm5leHQgPSAyOTtcbiAgICAgICAgICAgIHJldHVybiBpZnJhbWUucG9zdE1lc3NhZ2Uoe1xuICAgICAgICAgICAgICB0eXBlOiBJRlJBTUUuQ0FMTCxcbiAgICAgICAgICAgICAgcGF5bG9hZDogcGFyYW1zXG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgIGNhc2UgMjk6XG4gICAgICAgICAgICByZXNwb25zZSA9IF9jb250ZXh0Mi5zZW50O1xuXG4gICAgICAgICAgICBpZiAoIXJlc3BvbnNlKSB7XG4gICAgICAgICAgICAgIF9jb250ZXh0Mi5uZXh0ID0gMzU7XG4gICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBUT0RPOiB1bmxvY2sgcG9wdXBNYW5hZ2VyIHJlcXVlc3Qgb25seSBpZiB0aGVyZSB3YXNuJ3QgZXJyb3IgXCJpbiBwcm9ncmVzc1wiXG4gICAgICAgICAgICBpZiAocmVzcG9uc2UucGF5bG9hZC5lcnJvciAhPT0gRVJST1IuREVWSUNFX0NBTExfSU5fUFJPR1JFU1MubWVzc2FnZSkge1xuICAgICAgICAgICAgICBfcG9wdXBNYW5hZ2VyLnVubG9jaygpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gX2NvbnRleHQyLmFicnVwdChcInJldHVyblwiLCByZXNwb25zZSk7XG5cbiAgICAgICAgICBjYXNlIDM1OlxuICAgICAgICAgICAgX3BvcHVwTWFuYWdlci51bmxvY2soKTsgLy8gVE9ET1xuXG5cbiAgICAgICAgICAgIHJldHVybiBfY29udGV4dDIuYWJydXB0KFwicmV0dXJuXCIsIHtcbiAgICAgICAgICAgICAgc3VjY2VzczogZmFsc2UsXG4gICAgICAgICAgICAgIHBheWxvYWQ6IHtcbiAgICAgICAgICAgICAgICBlcnJvcjogJ05vIHJlc3BvbnNlIGZyb20gaWZyYW1lJ1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgIGNhc2UgMzc6XG4gICAgICAgICAgICBfY29udGV4dDIubmV4dCA9IDQzO1xuICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICBjYXNlIDM5OlxuICAgICAgICAgICAgX2NvbnRleHQyLnByZXYgPSAzOTtcbiAgICAgICAgICAgIF9jb250ZXh0Mi50MSA9IF9jb250ZXh0MltcImNhdGNoXCJdKDI2KTtcblxuICAgICAgICAgICAgX2xvZy5lcnJvcignX19jYWxsIGVycm9yJywgX2NvbnRleHQyLnQxKTtcblxuICAgICAgICAgICAgcmV0dXJuIF9jb250ZXh0Mi5hYnJ1cHQoXCJyZXR1cm5cIiwgX2NvbnRleHQyLnQxKTtcblxuICAgICAgICAgIGNhc2UgNDM6XG4gICAgICAgICAgY2FzZSBcImVuZFwiOlxuICAgICAgICAgICAgcmV0dXJuIF9jb250ZXh0Mi5zdG9wKCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LCBfY2FsbGVlMiwgbnVsbCwgW1s4LCAxNV0sIFsyNiwgMzldXSk7XG4gIH0pKTtcblxuICByZXR1cm4gZnVuY3Rpb24gY2FsbChfeDIpIHtcbiAgICByZXR1cm4gX3JlZjIuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgfTtcbn0oKTtcblxudmFyIGN1c3RvbU1lc3NhZ2VSZXNwb25zZSA9IGZ1bmN0aW9uIGN1c3RvbU1lc3NhZ2VSZXNwb25zZShwYXlsb2FkKSB7XG4gIGlmcmFtZS5wb3N0TWVzc2FnZSh7XG4gICAgZXZlbnQ6IF9jb25zdGFudHMuVUlfRVZFTlQsXG4gICAgdHlwZTogVUkuQ1VTVE9NX01FU1NBR0VfUkVTUE9OU0UsXG4gICAgcGF5bG9hZDogcGF5bG9hZFxuICB9KTtcbn07XG5cbnZhciBUcmV6b3JDb25uZWN0ID0gZnVuY3Rpb24gVHJlem9yQ29ubmVjdCgpIHt9O1xuXG4oMCwgX2RlZmluZVByb3BlcnR5MltcImRlZmF1bHRcIl0pKFRyZXpvckNvbm5lY3QsIFwibWFuaWZlc3RcIiwgZnVuY3Rpb24gKGRhdGEpIHtcbiAgX3NldHRpbmdzID0gKDAsIF9Db25uZWN0U2V0dGluZ3MucGFyc2UpKHtcbiAgICBtYW5pZmVzdDogZGF0YVxuICB9KTtcbn0pO1xuKDAsIF9kZWZpbmVQcm9wZXJ0eTJbXCJkZWZhdWx0XCJdKShUcmV6b3JDb25uZWN0LCBcImdldFNldHRpbmdzXCIsXG4vKiNfX1BVUkVfXyovXG4oMCwgX2FzeW5jVG9HZW5lcmF0b3IyW1wiZGVmYXVsdFwiXSkoXG4vKiNfX1BVUkVfXyovXG5fcmVnZW5lcmF0b3JbXCJkZWZhdWx0XCJdLm1hcmsoZnVuY3Rpb24gX2NhbGxlZTMoKSB7XG4gIHJldHVybiBfcmVnZW5lcmF0b3JbXCJkZWZhdWx0XCJdLndyYXAoZnVuY3Rpb24gX2NhbGxlZTMkKF9jb250ZXh0Mykge1xuICAgIHdoaWxlICgxKSB7XG4gICAgICBzd2l0Y2ggKF9jb250ZXh0My5wcmV2ID0gX2NvbnRleHQzLm5leHQpIHtcbiAgICAgICAgY2FzZSAwOlxuICAgICAgICAgIGlmIChpZnJhbWUuaW5zdGFuY2UpIHtcbiAgICAgICAgICAgIF9jb250ZXh0My5uZXh0ID0gMjtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHJldHVybiBfY29udGV4dDMuYWJydXB0KFwicmV0dXJuXCIsIHtcbiAgICAgICAgICAgIHN1Y2Nlc3M6IGZhbHNlLFxuICAgICAgICAgICAgcGF5bG9hZDoge1xuICAgICAgICAgICAgICBlcnJvcjogJ0lmcmFtZSBub3QgaW5pdGlhbGl6ZWQgeWV0LCB5b3UgbmVlZCB0byBjYWxsIFRyZXpvckNvbm5lY3QuaW5pdCBvciBhbnkgb3RoZXIgbWV0aG9kIGZpcnN0LidcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KTtcblxuICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgX2NvbnRleHQzLm5leHQgPSA0O1xuICAgICAgICAgIHJldHVybiBjYWxsKHtcbiAgICAgICAgICAgIG1ldGhvZDogJ2dldFNldHRpbmdzJ1xuICAgICAgICAgIH0pO1xuXG4gICAgICAgIGNhc2UgNDpcbiAgICAgICAgICByZXR1cm4gX2NvbnRleHQzLmFicnVwdChcInJldHVyblwiLCBfY29udGV4dDMuc2VudCk7XG5cbiAgICAgICAgY2FzZSA1OlxuICAgICAgICBjYXNlIFwiZW5kXCI6XG4gICAgICAgICAgcmV0dXJuIF9jb250ZXh0My5zdG9wKCk7XG4gICAgICB9XG4gICAgfVxuICB9LCBfY2FsbGVlMyk7XG59KSkpO1xuKDAsIF9kZWZpbmVQcm9wZXJ0eTJbXCJkZWZhdWx0XCJdKShUcmV6b3JDb25uZWN0LCBcImluaXRcIixcbi8qI19fUFVSRV9fKi9cbmZ1bmN0aW9uICgpIHtcbiAgdmFyIF9yZWY0ID0gKDAsIF9hc3luY1RvR2VuZXJhdG9yMltcImRlZmF1bHRcIl0pKFxuICAvKiNfX1BVUkVfXyovXG4gIF9yZWdlbmVyYXRvcltcImRlZmF1bHRcIl0ubWFyayhmdW5jdGlvbiBfY2FsbGVlNChzZXR0aW5ncykge1xuICAgIHJldHVybiBfcmVnZW5lcmF0b3JbXCJkZWZhdWx0XCJdLndyYXAoZnVuY3Rpb24gX2NhbGxlZTQkKF9jb250ZXh0NCkge1xuICAgICAgd2hpbGUgKDEpIHtcbiAgICAgICAgc3dpdGNoIChfY29udGV4dDQucHJldiA9IF9jb250ZXh0NC5uZXh0KSB7XG4gICAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgX2NvbnRleHQ0Lm5leHQgPSAyO1xuICAgICAgICAgICAgcmV0dXJuIGluaXQoc2V0dGluZ3MpO1xuXG4gICAgICAgICAgY2FzZSAyOlxuICAgICAgICAgICAgcmV0dXJuIF9jb250ZXh0NC5hYnJ1cHQoXCJyZXR1cm5cIiwgX2NvbnRleHQ0LnNlbnQpO1xuXG4gICAgICAgICAgY2FzZSAzOlxuICAgICAgICAgIGNhc2UgXCJlbmRcIjpcbiAgICAgICAgICAgIHJldHVybiBfY29udGV4dDQuc3RvcCgpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSwgX2NhbGxlZTQpO1xuICB9KSk7XG5cbiAgcmV0dXJuIGZ1bmN0aW9uIChfeDMpIHtcbiAgICByZXR1cm4gX3JlZjQuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgfTtcbn0oKSk7XG4oMCwgX2RlZmluZVByb3BlcnR5MltcImRlZmF1bHRcIl0pKFRyZXpvckNvbm5lY3QsIFwib25cIiwgZnVuY3Rpb24gKHR5cGUsIGZuKSB7XG4gIGV2ZW50RW1pdHRlci5vbih0eXBlLCBmbik7XG59KTtcbigwLCBfZGVmaW5lUHJvcGVydHkyW1wiZGVmYXVsdFwiXSkoVHJlem9yQ29ubmVjdCwgXCJvZmZcIiwgZnVuY3Rpb24gKHR5cGUsIGZuKSB7XG4gIGV2ZW50RW1pdHRlci5yZW1vdmVMaXN0ZW5lcih0eXBlLCBmbik7XG59KTtcbigwLCBfZGVmaW5lUHJvcGVydHkyW1wiZGVmYXVsdFwiXSkoVHJlem9yQ29ubmVjdCwgXCJ1aVJlc3BvbnNlXCIsIGZ1bmN0aW9uIChyZXNwb25zZSkge1xuICBpZnJhbWUucG9zdE1lc3NhZ2UoX29iamVjdFNwcmVhZCh7XG4gICAgZXZlbnQ6IF9jb25zdGFudHMuVUlfRVZFTlRcbiAgfSwgcmVzcG9uc2UpKTtcbn0pO1xuKDAsIF9kZWZpbmVQcm9wZXJ0eTJbXCJkZWZhdWx0XCJdKShUcmV6b3JDb25uZWN0LCBcImNoYW5nZVNldHRpbmdzXCIsIGZ1bmN0aW9uIChzZXR0aW5ncykge1xuICB2YXIgcGFyc2VkU2V0dGluZ3MgPSAoMCwgX0Nvbm5lY3RTZXR0aW5ncy5wYXJzZSkoc2V0dGluZ3MpO1xuICBfbG9nLmVuYWJsZWQgPSBwYXJzZWRTZXR0aW5ncy5kZWJ1ZztcbiAgaWZyYW1lLnBvc3RNZXNzYWdlKHtcbiAgICB0eXBlOiBVSS5DSEFOR0VfU0VUVElOR1MsXG4gICAgcGF5bG9hZDogcGFyc2VkU2V0dGluZ3NcbiAgfSwgZmFsc2UpO1xufSk7XG4oMCwgX2RlZmluZVByb3BlcnR5MltcImRlZmF1bHRcIl0pKFRyZXpvckNvbm5lY3QsIFwiYmxvY2tjaGFpbkRpc2Nvbm5lY3RcIixcbi8qI19fUFVSRV9fKi9cbmZ1bmN0aW9uICgpIHtcbiAgdmFyIF9yZWY1ID0gKDAsIF9hc3luY1RvR2VuZXJhdG9yMltcImRlZmF1bHRcIl0pKFxuICAvKiNfX1BVUkVfXyovXG4gIF9yZWdlbmVyYXRvcltcImRlZmF1bHRcIl0ubWFyayhmdW5jdGlvbiBfY2FsbGVlNShwYXJhbXMpIHtcbiAgICByZXR1cm4gX3JlZ2VuZXJhdG9yW1wiZGVmYXVsdFwiXS53cmFwKGZ1bmN0aW9uIF9jYWxsZWU1JChfY29udGV4dDUpIHtcbiAgICAgIHdoaWxlICgxKSB7XG4gICAgICAgIHN3aXRjaCAoX2NvbnRleHQ1LnByZXYgPSBfY29udGV4dDUubmV4dCkge1xuICAgICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgIF9jb250ZXh0NS5uZXh0ID0gMjtcbiAgICAgICAgICAgIHJldHVybiBjYWxsKF9vYmplY3RTcHJlYWQoe1xuICAgICAgICAgICAgICBtZXRob2Q6ICdibG9ja2NoYWluRGlzY29ubmVjdCdcbiAgICAgICAgICAgIH0sIHBhcmFtcykpO1xuXG4gICAgICAgICAgY2FzZSAyOlxuICAgICAgICAgICAgcmV0dXJuIF9jb250ZXh0NS5hYnJ1cHQoXCJyZXR1cm5cIiwgX2NvbnRleHQ1LnNlbnQpO1xuXG4gICAgICAgICAgY2FzZSAzOlxuICAgICAgICAgIGNhc2UgXCJlbmRcIjpcbiAgICAgICAgICAgIHJldHVybiBfY29udGV4dDUuc3RvcCgpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSwgX2NhbGxlZTUpO1xuICB9KSk7XG5cbiAgcmV0dXJuIGZ1bmN0aW9uIChfeDQpIHtcbiAgICByZXR1cm4gX3JlZjUuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgfTtcbn0oKSk7XG4oMCwgX2RlZmluZVByb3BlcnR5MltcImRlZmF1bHRcIl0pKFRyZXpvckNvbm5lY3QsIFwiYmxvY2tjaGFpbkVzdGltYXRlRmVlXCIsXG4vKiNfX1BVUkVfXyovXG5mdW5jdGlvbiAoKSB7XG4gIHZhciBfcmVmNiA9ICgwLCBfYXN5bmNUb0dlbmVyYXRvcjJbXCJkZWZhdWx0XCJdKShcbiAgLyojX19QVVJFX18qL1xuICBfcmVnZW5lcmF0b3JbXCJkZWZhdWx0XCJdLm1hcmsoZnVuY3Rpb24gX2NhbGxlZTYocGFyYW1zKSB7XG4gICAgcmV0dXJuIF9yZWdlbmVyYXRvcltcImRlZmF1bHRcIl0ud3JhcChmdW5jdGlvbiBfY2FsbGVlNiQoX2NvbnRleHQ2KSB7XG4gICAgICB3aGlsZSAoMSkge1xuICAgICAgICBzd2l0Y2ggKF9jb250ZXh0Ni5wcmV2ID0gX2NvbnRleHQ2Lm5leHQpIHtcbiAgICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICBfY29udGV4dDYubmV4dCA9IDI7XG4gICAgICAgICAgICByZXR1cm4gY2FsbChfb2JqZWN0U3ByZWFkKHtcbiAgICAgICAgICAgICAgbWV0aG9kOiAnYmxvY2tjaGFpbkVzdGltYXRlRmVlJ1xuICAgICAgICAgICAgfSwgcGFyYW1zKSk7XG5cbiAgICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgICByZXR1cm4gX2NvbnRleHQ2LmFicnVwdChcInJldHVyblwiLCBfY29udGV4dDYuc2VudCk7XG5cbiAgICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgY2FzZSBcImVuZFwiOlxuICAgICAgICAgICAgcmV0dXJuIF9jb250ZXh0Ni5zdG9wKCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LCBfY2FsbGVlNik7XG4gIH0pKTtcblxuICByZXR1cm4gZnVuY3Rpb24gKF94NSkge1xuICAgIHJldHVybiBfcmVmNi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICB9O1xufSgpKTtcbigwLCBfZGVmaW5lUHJvcGVydHkyW1wiZGVmYXVsdFwiXSkoVHJlem9yQ29ubmVjdCwgXCJibG9ja2NoYWluU3Vic2NyaWJlXCIsXG4vKiNfX1BVUkVfXyovXG5mdW5jdGlvbiAoKSB7XG4gIHZhciBfcmVmNyA9ICgwLCBfYXN5bmNUb0dlbmVyYXRvcjJbXCJkZWZhdWx0XCJdKShcbiAgLyojX19QVVJFX18qL1xuICBfcmVnZW5lcmF0b3JbXCJkZWZhdWx0XCJdLm1hcmsoZnVuY3Rpb24gX2NhbGxlZTcocGFyYW1zKSB7XG4gICAgcmV0dXJuIF9yZWdlbmVyYXRvcltcImRlZmF1bHRcIl0ud3JhcChmdW5jdGlvbiBfY2FsbGVlNyQoX2NvbnRleHQ3KSB7XG4gICAgICB3aGlsZSAoMSkge1xuICAgICAgICBzd2l0Y2ggKF9jb250ZXh0Ny5wcmV2ID0gX2NvbnRleHQ3Lm5leHQpIHtcbiAgICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICBfY29udGV4dDcubmV4dCA9IDI7XG4gICAgICAgICAgICByZXR1cm4gY2FsbChfb2JqZWN0U3ByZWFkKHtcbiAgICAgICAgICAgICAgbWV0aG9kOiAnYmxvY2tjaGFpblN1YnNjcmliZSdcbiAgICAgICAgICAgIH0sIHBhcmFtcykpO1xuXG4gICAgICAgICAgY2FzZSAyOlxuICAgICAgICAgICAgcmV0dXJuIF9jb250ZXh0Ny5hYnJ1cHQoXCJyZXR1cm5cIiwgX2NvbnRleHQ3LnNlbnQpO1xuXG4gICAgICAgICAgY2FzZSAzOlxuICAgICAgICAgIGNhc2UgXCJlbmRcIjpcbiAgICAgICAgICAgIHJldHVybiBfY29udGV4dDcuc3RvcCgpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSwgX2NhbGxlZTcpO1xuICB9KSk7XG5cbiAgcmV0dXJuIGZ1bmN0aW9uIChfeDYpIHtcbiAgICByZXR1cm4gX3JlZjcuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgfTtcbn0oKSk7XG4oMCwgX2RlZmluZVByb3BlcnR5MltcImRlZmF1bHRcIl0pKFRyZXpvckNvbm5lY3QsIFwiYmxvY2tjaGFpblVuc3Vic2NyaWJlXCIsXG4vKiNfX1BVUkVfXyovXG5mdW5jdGlvbiAoKSB7XG4gIHZhciBfcmVmOCA9ICgwLCBfYXN5bmNUb0dlbmVyYXRvcjJbXCJkZWZhdWx0XCJdKShcbiAgLyojX19QVVJFX18qL1xuICBfcmVnZW5lcmF0b3JbXCJkZWZhdWx0XCJdLm1hcmsoZnVuY3Rpb24gX2NhbGxlZTgocGFyYW1zKSB7XG4gICAgcmV0dXJuIF9yZWdlbmVyYXRvcltcImRlZmF1bHRcIl0ud3JhcChmdW5jdGlvbiBfY2FsbGVlOCQoX2NvbnRleHQ4KSB7XG4gICAgICB3aGlsZSAoMSkge1xuICAgICAgICBzd2l0Y2ggKF9jb250ZXh0OC5wcmV2ID0gX2NvbnRleHQ4Lm5leHQpIHtcbiAgICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICBfY29udGV4dDgubmV4dCA9IDI7XG4gICAgICAgICAgICByZXR1cm4gY2FsbChfb2JqZWN0U3ByZWFkKHtcbiAgICAgICAgICAgICAgbWV0aG9kOiAnYmxvY2tjaGFpblVuc3Vic2NyaWJlJ1xuICAgICAgICAgICAgfSwgcGFyYW1zKSk7XG5cbiAgICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgICByZXR1cm4gX2NvbnRleHQ4LmFicnVwdChcInJldHVyblwiLCBfY29udGV4dDguc2VudCk7XG5cbiAgICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgY2FzZSBcImVuZFwiOlxuICAgICAgICAgICAgcmV0dXJuIF9jb250ZXh0OC5zdG9wKCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LCBfY2FsbGVlOCk7XG4gIH0pKTtcblxuICByZXR1cm4gZnVuY3Rpb24gKF94Nykge1xuICAgIHJldHVybiBfcmVmOC5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICB9O1xufSgpKTtcbigwLCBfZGVmaW5lUHJvcGVydHkyW1wiZGVmYXVsdFwiXSkoVHJlem9yQ29ubmVjdCwgXCJjdXN0b21NZXNzYWdlXCIsXG4vKiNfX1BVUkVfXyovXG5mdW5jdGlvbiAoKSB7XG4gIHZhciBfcmVmOSA9ICgwLCBfYXN5bmNUb0dlbmVyYXRvcjJbXCJkZWZhdWx0XCJdKShcbiAgLyojX19QVVJFX18qL1xuICBfcmVnZW5lcmF0b3JbXCJkZWZhdWx0XCJdLm1hcmsoZnVuY3Rpb24gX2NhbGxlZTEwKHBhcmFtcykge1xuICAgIHZhciBjYWxsYmFjaywgY3VzdG9tTWVzc2FnZUxpc3RlbmVyLCByZXNwb25zZTtcbiAgICByZXR1cm4gX3JlZ2VuZXJhdG9yW1wiZGVmYXVsdFwiXS53cmFwKGZ1bmN0aW9uIF9jYWxsZWUxMCQoX2NvbnRleHQxMCkge1xuICAgICAgd2hpbGUgKDEpIHtcbiAgICAgICAgc3dpdGNoIChfY29udGV4dDEwLnByZXYgPSBfY29udGV4dDEwLm5leHQpIHtcbiAgICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICBpZiAoISh0eXBlb2YgcGFyYW1zLmNhbGxiYWNrICE9PSAnZnVuY3Rpb24nKSkge1xuICAgICAgICAgICAgICBfY29udGV4dDEwLm5leHQgPSAyO1xuICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIF9jb250ZXh0MTAuYWJydXB0KFwicmV0dXJuXCIsIHtcbiAgICAgICAgICAgICAgc3VjY2VzczogZmFsc2UsXG4gICAgICAgICAgICAgIHBheWxvYWQ6IHtcbiAgICAgICAgICAgICAgICBlcnJvcjogJ1BhcmFtZXRlciBcImNhbGxiYWNrXCIgaXMgbm90IGEgZnVuY3Rpb24nXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgY2FzZSAyOlxuICAgICAgICAgICAgLy8gVE9ETzogc2V0IG1lc3NhZ2UgbGlzdGVuZXIgb25seSBpZiBpZnJhbWUgaXMgbG9hZGVkIGNvcnJlY3RseVxuICAgICAgICAgICAgY2FsbGJhY2sgPSBwYXJhbXMuY2FsbGJhY2s7XG4gICAgICAgICAgICBkZWxldGUgcGFyYW1zLmNhbGxiYWNrO1xuXG4gICAgICAgICAgICBjdXN0b21NZXNzYWdlTGlzdGVuZXIgPVxuICAgICAgICAgICAgLyojX19QVVJFX18qL1xuICAgICAgICAgICAgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICB2YXIgX3JlZjEwID0gKDAsIF9hc3luY1RvR2VuZXJhdG9yMltcImRlZmF1bHRcIl0pKFxuICAgICAgICAgICAgICAvKiNfX1BVUkVfXyovXG4gICAgICAgICAgICAgIF9yZWdlbmVyYXRvcltcImRlZmF1bHRcIl0ubWFyayhmdW5jdGlvbiBfY2FsbGVlOShldmVudCkge1xuICAgICAgICAgICAgICAgIHZhciBkYXRhLCBwYXlsb2FkO1xuICAgICAgICAgICAgICAgIHJldHVybiBfcmVnZW5lcmF0b3JbXCJkZWZhdWx0XCJdLndyYXAoZnVuY3Rpb24gX2NhbGxlZTkkKF9jb250ZXh0OSkge1xuICAgICAgICAgICAgICAgICAgd2hpbGUgKDEpIHtcbiAgICAgICAgICAgICAgICAgICAgc3dpdGNoIChfY29udGV4dDkucHJldiA9IF9jb250ZXh0OS5uZXh0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YSA9IGV2ZW50LmRhdGE7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghKGRhdGEgJiYgZGF0YS50eXBlID09PSBVSS5DVVNUT01fTUVTU0FHRV9SRVFVRVNUKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfY29udGV4dDkubmV4dCA9IDY7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICBfY29udGV4dDkubmV4dCA9IDQ7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gY2FsbGJhY2soZGF0YS5wYXlsb2FkKTtcblxuICAgICAgICAgICAgICAgICAgICAgIGNhc2UgNDpcbiAgICAgICAgICAgICAgICAgICAgICAgIHBheWxvYWQgPSBfY29udGV4dDkuc2VudDtcblxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHBheWxvYWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY3VzdG9tTWVzc2FnZVJlc3BvbnNlKHBheWxvYWQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY3VzdG9tTWVzc2FnZVJlc3BvbnNlKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiAncmVsZWFzZSdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICBjYXNlIDY6XG4gICAgICAgICAgICAgICAgICAgICAgY2FzZSBcImVuZFwiOlxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF9jb250ZXh0OS5zdG9wKCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LCBfY2FsbGVlOSk7XG4gICAgICAgICAgICAgIH0pKTtcblxuICAgICAgICAgICAgICByZXR1cm4gZnVuY3Rpb24gY3VzdG9tTWVzc2FnZUxpc3RlbmVyKF94OSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBfcmVmMTAuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIH0oKTtcblxuICAgICAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ21lc3NhZ2UnLCBjdXN0b21NZXNzYWdlTGlzdGVuZXIsIGZhbHNlKTtcbiAgICAgICAgICAgIF9jb250ZXh0MTAubmV4dCA9IDg7XG4gICAgICAgICAgICByZXR1cm4gY2FsbChfb2JqZWN0U3ByZWFkKHtcbiAgICAgICAgICAgICAgbWV0aG9kOiAnY3VzdG9tTWVzc2FnZSdcbiAgICAgICAgICAgIH0sIHBhcmFtcykpO1xuXG4gICAgICAgICAgY2FzZSA4OlxuICAgICAgICAgICAgcmVzcG9uc2UgPSBfY29udGV4dDEwLnNlbnQ7XG4gICAgICAgICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcignbWVzc2FnZScsIGN1c3RvbU1lc3NhZ2VMaXN0ZW5lcik7XG4gICAgICAgICAgICByZXR1cm4gX2NvbnRleHQxMC5hYnJ1cHQoXCJyZXR1cm5cIiwgcmVzcG9uc2UpO1xuXG4gICAgICAgICAgY2FzZSAxMTpcbiAgICAgICAgICBjYXNlIFwiZW5kXCI6XG4gICAgICAgICAgICByZXR1cm4gX2NvbnRleHQxMC5zdG9wKCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LCBfY2FsbGVlMTApO1xuICB9KSk7XG5cbiAgcmV0dXJuIGZ1bmN0aW9uIChfeDgpIHtcbiAgICByZXR1cm4gX3JlZjkuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgfTtcbn0oKSk7XG4oMCwgX2RlZmluZVByb3BlcnR5MltcImRlZmF1bHRcIl0pKFRyZXpvckNvbm5lY3QsIFwicmVxdWVzdExvZ2luXCIsXG4vKiNfX1BVUkVfXyovXG5mdW5jdGlvbiAoKSB7XG4gIHZhciBfcmVmMTEgPSAoMCwgX2FzeW5jVG9HZW5lcmF0b3IyW1wiZGVmYXVsdFwiXSkoXG4gIC8qI19fUFVSRV9fKi9cbiAgX3JlZ2VuZXJhdG9yW1wiZGVmYXVsdFwiXS5tYXJrKGZ1bmN0aW9uIF9jYWxsZWUxMihwYXJhbXMpIHtcbiAgICB2YXIgY2FsbGJhY2ssIGxvZ2luQ2hhbGxlbmdlTGlzdGVuZXIsIHJlc3BvbnNlO1xuICAgIHJldHVybiBfcmVnZW5lcmF0b3JbXCJkZWZhdWx0XCJdLndyYXAoZnVuY3Rpb24gX2NhbGxlZTEyJChfY29udGV4dDEyKSB7XG4gICAgICB3aGlsZSAoMSkge1xuICAgICAgICBzd2l0Y2ggKF9jb250ZXh0MTIucHJldiA9IF9jb250ZXh0MTIubmV4dCkge1xuICAgICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgIGlmICghKHR5cGVvZiBwYXJhbXMuY2FsbGJhY2sgPT09ICdmdW5jdGlvbicpKSB7XG4gICAgICAgICAgICAgIF9jb250ZXh0MTIubmV4dCA9IDEyO1xuICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgY2FsbGJhY2sgPSBwYXJhbXMuY2FsbGJhY2s7XG4gICAgICAgICAgICBkZWxldGUgcGFyYW1zLmNhbGxiYWNrOyAvLyBkZWxldGUgY2FsbGJhY2sgdmFsdWUuIHRoaXMgZmllbGQgY2Fubm90IGJlIHNlbnQgdXNpbmcgcG9zdE1lc3NhZ2UgZnVuY3Rpb25cbiAgICAgICAgICAgIC8vIFRPRE86IHNldCBtZXNzYWdlIGxpc3RlbmVyIG9ubHkgaWYgaWZyYW1lIGlzIGxvYWRlZCBjb3JyZWN0bHlcblxuICAgICAgICAgICAgbG9naW5DaGFsbGVuZ2VMaXN0ZW5lciA9XG4gICAgICAgICAgICAvKiNfX1BVUkVfXyovXG4gICAgICAgICAgICBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgIHZhciBfcmVmMTIgPSAoMCwgX2FzeW5jVG9HZW5lcmF0b3IyW1wiZGVmYXVsdFwiXSkoXG4gICAgICAgICAgICAgIC8qI19fUFVSRV9fKi9cbiAgICAgICAgICAgICAgX3JlZ2VuZXJhdG9yW1wiZGVmYXVsdFwiXS5tYXJrKGZ1bmN0aW9uIF9jYWxsZWUxMShldmVudCkge1xuICAgICAgICAgICAgICAgIHZhciBkYXRhLCBwYXlsb2FkO1xuICAgICAgICAgICAgICAgIHJldHVybiBfcmVnZW5lcmF0b3JbXCJkZWZhdWx0XCJdLndyYXAoZnVuY3Rpb24gX2NhbGxlZTExJChfY29udGV4dDExKSB7XG4gICAgICAgICAgICAgICAgICB3aGlsZSAoMSkge1xuICAgICAgICAgICAgICAgICAgICBzd2l0Y2ggKF9jb250ZXh0MTEucHJldiA9IF9jb250ZXh0MTEubmV4dCkge1xuICAgICAgICAgICAgICAgICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEgPSBldmVudC5kYXRhO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIShkYXRhICYmIGRhdGEudHlwZSA9PT0gVUkuTE9HSU5fQ0hBTExFTkdFX1JFUVVFU1QpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jb250ZXh0MTEubmV4dCA9IDEzO1xuICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgX2NvbnRleHQxMS5wcmV2ID0gMjtcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jb250ZXh0MTEubmV4dCA9IDU7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gY2FsbGJhY2soKTtcblxuICAgICAgICAgICAgICAgICAgICAgIGNhc2UgNTpcbiAgICAgICAgICAgICAgICAgICAgICAgIHBheWxvYWQgPSBfY29udGV4dDExLnNlbnQ7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZnJhbWUucG9zdE1lc3NhZ2Uoe1xuICAgICAgICAgICAgICAgICAgICAgICAgICBldmVudDogX2NvbnN0YW50cy5VSV9FVkVOVCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogVUkuTE9HSU5fQ0hBTExFTkdFX1JFU1BPTlNFLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBwYXlsb2FkOiBwYXlsb2FkXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jb250ZXh0MTEubmV4dCA9IDEzO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgICAgICAgICAgICBjYXNlIDk6XG4gICAgICAgICAgICAgICAgICAgICAgICBfY29udGV4dDExLnByZXYgPSA5O1xuICAgICAgICAgICAgICAgICAgICAgICAgX2NvbnRleHQxMS50MCA9IF9jb250ZXh0MTFbXCJjYXRjaFwiXSgyKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUud2FybignVHJlem9yQ29ubmVjdC5yZXF1ZXN0TG9naW46IGNhbGxiYWNrIGVycm9yJywgX2NvbnRleHQxMS50MCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZnJhbWUucG9zdE1lc3NhZ2Uoe1xuICAgICAgICAgICAgICAgICAgICAgICAgICBldmVudDogX2NvbnN0YW50cy5VSV9FVkVOVCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogVUkuTE9HSU5fQ0hBTExFTkdFX1JFU1BPTlNFLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBwYXlsb2FkOiBfY29udGV4dDExLnQwLm1lc3NhZ2VcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgICAgICAgY2FzZSAxMzpcbiAgICAgICAgICAgICAgICAgICAgICBjYXNlIFwiZW5kXCI6XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX2NvbnRleHQxMS5zdG9wKCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LCBfY2FsbGVlMTEsIG51bGwsIFtbMiwgOV1dKTtcbiAgICAgICAgICAgICAgfSkpO1xuXG4gICAgICAgICAgICAgIHJldHVybiBmdW5jdGlvbiBsb2dpbkNoYWxsZW5nZUxpc3RlbmVyKF94MTEpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gX3JlZjEyLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgICAgICAgICAgIH07XG4gICAgICAgICAgICB9KCk7XG5cbiAgICAgICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdtZXNzYWdlJywgbG9naW5DaGFsbGVuZ2VMaXN0ZW5lciwgZmFsc2UpO1xuICAgICAgICAgICAgX2NvbnRleHQxMi5uZXh0ID0gNztcbiAgICAgICAgICAgIHJldHVybiBjYWxsKF9vYmplY3RTcHJlYWQoe1xuICAgICAgICAgICAgICBtZXRob2Q6ICdyZXF1ZXN0TG9naW4nXG4gICAgICAgICAgICB9LCBwYXJhbXMsIHtcbiAgICAgICAgICAgICAgYXN5bmNDaGFsbGVuZ2U6IHRydWVcbiAgICAgICAgICAgIH0pKTtcblxuICAgICAgICAgIGNhc2UgNzpcbiAgICAgICAgICAgIHJlc3BvbnNlID0gX2NvbnRleHQxMi5zZW50O1xuICAgICAgICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21lc3NhZ2UnLCBsb2dpbkNoYWxsZW5nZUxpc3RlbmVyKTtcbiAgICAgICAgICAgIHJldHVybiBfY29udGV4dDEyLmFicnVwdChcInJldHVyblwiLCByZXNwb25zZSk7XG5cbiAgICAgICAgICBjYXNlIDEyOlxuICAgICAgICAgICAgX2NvbnRleHQxMi5uZXh0ID0gMTQ7XG4gICAgICAgICAgICByZXR1cm4gY2FsbChfb2JqZWN0U3ByZWFkKHtcbiAgICAgICAgICAgICAgbWV0aG9kOiAncmVxdWVzdExvZ2luJ1xuICAgICAgICAgICAgfSwgcGFyYW1zKSk7XG5cbiAgICAgICAgICBjYXNlIDE0OlxuICAgICAgICAgICAgcmV0dXJuIF9jb250ZXh0MTIuYWJydXB0KFwicmV0dXJuXCIsIF9jb250ZXh0MTIuc2VudCk7XG5cbiAgICAgICAgICBjYXNlIDE1OlxuICAgICAgICAgIGNhc2UgXCJlbmRcIjpcbiAgICAgICAgICAgIHJldHVybiBfY29udGV4dDEyLnN0b3AoKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sIF9jYWxsZWUxMik7XG4gIH0pKTtcblxuICByZXR1cm4gZnVuY3Rpb24gKF94MTApIHtcbiAgICByZXR1cm4gX3JlZjExLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gIH07XG59KCkpO1xuKDAsIF9kZWZpbmVQcm9wZXJ0eTJbXCJkZWZhdWx0XCJdKShUcmV6b3JDb25uZWN0LCBcInJlc2V0RGV2aWNlXCIsXG4vKiNfX1BVUkVfXyovXG5mdW5jdGlvbiAoKSB7XG4gIHZhciBfcmVmMTMgPSAoMCwgX2FzeW5jVG9HZW5lcmF0b3IyW1wiZGVmYXVsdFwiXSkoXG4gIC8qI19fUFVSRV9fKi9cbiAgX3JlZ2VuZXJhdG9yW1wiZGVmYXVsdFwiXS5tYXJrKGZ1bmN0aW9uIF9jYWxsZWUxMyhwYXJhbXMpIHtcbiAgICByZXR1cm4gX3JlZ2VuZXJhdG9yW1wiZGVmYXVsdFwiXS53cmFwKGZ1bmN0aW9uIF9jYWxsZWUxMyQoX2NvbnRleHQxMykge1xuICAgICAgd2hpbGUgKDEpIHtcbiAgICAgICAgc3dpdGNoIChfY29udGV4dDEzLnByZXYgPSBfY29udGV4dDEzLm5leHQpIHtcbiAgICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICBfY29udGV4dDEzLm5leHQgPSAyO1xuICAgICAgICAgICAgcmV0dXJuIGNhbGwoX29iamVjdFNwcmVhZCh7XG4gICAgICAgICAgICAgIG1ldGhvZDogJ3Jlc2V0RGV2aWNlJ1xuICAgICAgICAgICAgfSwgcGFyYW1zKSk7XG5cbiAgICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgICByZXR1cm4gX2NvbnRleHQxMy5hYnJ1cHQoXCJyZXR1cm5cIiwgX2NvbnRleHQxMy5zZW50KTtcblxuICAgICAgICAgIGNhc2UgMzpcbiAgICAgICAgICBjYXNlIFwiZW5kXCI6XG4gICAgICAgICAgICByZXR1cm4gX2NvbnRleHQxMy5zdG9wKCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LCBfY2FsbGVlMTMpO1xuICB9KSk7XG5cbiAgcmV0dXJuIGZ1bmN0aW9uIChfeDEyKSB7XG4gICAgcmV0dXJuIF9yZWYxMy5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICB9O1xufSgpKTtcbigwLCBfZGVmaW5lUHJvcGVydHkyW1wiZGVmYXVsdFwiXSkoVHJlem9yQ29ubmVjdCwgXCJjYXJkYW5vR2V0QWRkcmVzc1wiLFxuLyojX19QVVJFX18qL1xuZnVuY3Rpb24gKCkge1xuICB2YXIgX3JlZjE0ID0gKDAsIF9hc3luY1RvR2VuZXJhdG9yMltcImRlZmF1bHRcIl0pKFxuICAvKiNfX1BVUkVfXyovXG4gIF9yZWdlbmVyYXRvcltcImRlZmF1bHRcIl0ubWFyayhmdW5jdGlvbiBfY2FsbGVlMTQocGFyYW1zKSB7XG4gICAgdmFyIHVzZUV2ZW50TGlzdGVuZXI7XG4gICAgcmV0dXJuIF9yZWdlbmVyYXRvcltcImRlZmF1bHRcIl0ud3JhcChmdW5jdGlvbiBfY2FsbGVlMTQkKF9jb250ZXh0MTQpIHtcbiAgICAgIHdoaWxlICgxKSB7XG4gICAgICAgIHN3aXRjaCAoX2NvbnRleHQxNC5wcmV2ID0gX2NvbnRleHQxNC5uZXh0KSB7XG4gICAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgdXNlRXZlbnRMaXN0ZW5lciA9IGV2ZW50RW1pdHRlci5saXN0ZW5lckNvdW50KFVJLkFERFJFU1NfVkFMSURBVElPTikgPiAwO1xuICAgICAgICAgICAgX2NvbnRleHQxNC5uZXh0ID0gMztcbiAgICAgICAgICAgIHJldHVybiBjYWxsKF9vYmplY3RTcHJlYWQoe1xuICAgICAgICAgICAgICBtZXRob2Q6ICdjYXJkYW5vR2V0QWRkcmVzcydcbiAgICAgICAgICAgIH0sIHBhcmFtcywge1xuICAgICAgICAgICAgICB1c2VFdmVudExpc3RlbmVyOiB1c2VFdmVudExpc3RlbmVyXG4gICAgICAgICAgICB9KSk7XG5cbiAgICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgICByZXR1cm4gX2NvbnRleHQxNC5hYnJ1cHQoXCJyZXR1cm5cIiwgX2NvbnRleHQxNC5zZW50KTtcblxuICAgICAgICAgIGNhc2UgNDpcbiAgICAgICAgICBjYXNlIFwiZW5kXCI6XG4gICAgICAgICAgICByZXR1cm4gX2NvbnRleHQxNC5zdG9wKCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LCBfY2FsbGVlMTQpO1xuICB9KSk7XG5cbiAgcmV0dXJuIGZ1bmN0aW9uIChfeDEzKSB7XG4gICAgcmV0dXJuIF9yZWYxNC5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICB9O1xufSgpKTtcbigwLCBfZGVmaW5lUHJvcGVydHkyW1wiZGVmYXVsdFwiXSkoVHJlem9yQ29ubmVjdCwgXCJjYXJkYW5vR2V0UHVibGljS2V5XCIsXG4vKiNfX1BVUkVfXyovXG5mdW5jdGlvbiAoKSB7XG4gIHZhciBfcmVmMTUgPSAoMCwgX2FzeW5jVG9HZW5lcmF0b3IyW1wiZGVmYXVsdFwiXSkoXG4gIC8qI19fUFVSRV9fKi9cbiAgX3JlZ2VuZXJhdG9yW1wiZGVmYXVsdFwiXS5tYXJrKGZ1bmN0aW9uIF9jYWxsZWUxNShwYXJhbXMpIHtcbiAgICByZXR1cm4gX3JlZ2VuZXJhdG9yW1wiZGVmYXVsdFwiXS53cmFwKGZ1bmN0aW9uIF9jYWxsZWUxNSQoX2NvbnRleHQxNSkge1xuICAgICAgd2hpbGUgKDEpIHtcbiAgICAgICAgc3dpdGNoIChfY29udGV4dDE1LnByZXYgPSBfY29udGV4dDE1Lm5leHQpIHtcbiAgICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICBfY29udGV4dDE1Lm5leHQgPSAyO1xuICAgICAgICAgICAgcmV0dXJuIGNhbGwoX29iamVjdFNwcmVhZCh7XG4gICAgICAgICAgICAgIG1ldGhvZDogJ2NhcmRhbm9HZXRQdWJsaWNLZXknXG4gICAgICAgICAgICB9LCBwYXJhbXMpKTtcblxuICAgICAgICAgIGNhc2UgMjpcbiAgICAgICAgICAgIHJldHVybiBfY29udGV4dDE1LmFicnVwdChcInJldHVyblwiLCBfY29udGV4dDE1LnNlbnQpO1xuXG4gICAgICAgICAgY2FzZSAzOlxuICAgICAgICAgIGNhc2UgXCJlbmRcIjpcbiAgICAgICAgICAgIHJldHVybiBfY29udGV4dDE1LnN0b3AoKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sIF9jYWxsZWUxNSk7XG4gIH0pKTtcblxuICByZXR1cm4gZnVuY3Rpb24gKF94MTQpIHtcbiAgICByZXR1cm4gX3JlZjE1LmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gIH07XG59KCkpO1xuKDAsIF9kZWZpbmVQcm9wZXJ0eTJbXCJkZWZhdWx0XCJdKShUcmV6b3JDb25uZWN0LCBcImNhcmRhbm9TaWduVHJhbnNhY3Rpb25cIixcbi8qI19fUFVSRV9fKi9cbmZ1bmN0aW9uICgpIHtcbiAgdmFyIF9yZWYxNiA9ICgwLCBfYXN5bmNUb0dlbmVyYXRvcjJbXCJkZWZhdWx0XCJdKShcbiAgLyojX19QVVJFX18qL1xuICBfcmVnZW5lcmF0b3JbXCJkZWZhdWx0XCJdLm1hcmsoZnVuY3Rpb24gX2NhbGxlZTE2KHBhcmFtcykge1xuICAgIHJldHVybiBfcmVnZW5lcmF0b3JbXCJkZWZhdWx0XCJdLndyYXAoZnVuY3Rpb24gX2NhbGxlZTE2JChfY29udGV4dDE2KSB7XG4gICAgICB3aGlsZSAoMSkge1xuICAgICAgICBzd2l0Y2ggKF9jb250ZXh0MTYucHJldiA9IF9jb250ZXh0MTYubmV4dCkge1xuICAgICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgIF9jb250ZXh0MTYubmV4dCA9IDI7XG4gICAgICAgICAgICByZXR1cm4gY2FsbChfb2JqZWN0U3ByZWFkKHtcbiAgICAgICAgICAgICAgbWV0aG9kOiAnY2FyZGFub1NpZ25UcmFuc2FjdGlvbidcbiAgICAgICAgICAgIH0sIHBhcmFtcykpO1xuXG4gICAgICAgICAgY2FzZSAyOlxuICAgICAgICAgICAgcmV0dXJuIF9jb250ZXh0MTYuYWJydXB0KFwicmV0dXJuXCIsIF9jb250ZXh0MTYuc2VudCk7XG5cbiAgICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgY2FzZSBcImVuZFwiOlxuICAgICAgICAgICAgcmV0dXJuIF9jb250ZXh0MTYuc3RvcCgpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSwgX2NhbGxlZTE2KTtcbiAgfSkpO1xuXG4gIHJldHVybiBmdW5jdGlvbiAoX3gxNSkge1xuICAgIHJldHVybiBfcmVmMTYuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgfTtcbn0oKSk7XG4oMCwgX2RlZmluZVByb3BlcnR5MltcImRlZmF1bHRcIl0pKFRyZXpvckNvbm5lY3QsIFwiY2lwaGVyS2V5VmFsdWVcIixcbi8qI19fUFVSRV9fKi9cbmZ1bmN0aW9uICgpIHtcbiAgdmFyIF9yZWYxNyA9ICgwLCBfYXN5bmNUb0dlbmVyYXRvcjJbXCJkZWZhdWx0XCJdKShcbiAgLyojX19QVVJFX18qL1xuICBfcmVnZW5lcmF0b3JbXCJkZWZhdWx0XCJdLm1hcmsoZnVuY3Rpb24gX2NhbGxlZTE3KHBhcmFtcykge1xuICAgIHJldHVybiBfcmVnZW5lcmF0b3JbXCJkZWZhdWx0XCJdLndyYXAoZnVuY3Rpb24gX2NhbGxlZTE3JChfY29udGV4dDE3KSB7XG4gICAgICB3aGlsZSAoMSkge1xuICAgICAgICBzd2l0Y2ggKF9jb250ZXh0MTcucHJldiA9IF9jb250ZXh0MTcubmV4dCkge1xuICAgICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgIF9jb250ZXh0MTcubmV4dCA9IDI7XG4gICAgICAgICAgICByZXR1cm4gY2FsbChfb2JqZWN0U3ByZWFkKHtcbiAgICAgICAgICAgICAgbWV0aG9kOiAnY2lwaGVyS2V5VmFsdWUnXG4gICAgICAgICAgICB9LCBwYXJhbXMpKTtcblxuICAgICAgICAgIGNhc2UgMjpcbiAgICAgICAgICAgIHJldHVybiBfY29udGV4dDE3LmFicnVwdChcInJldHVyblwiLCBfY29udGV4dDE3LnNlbnQpO1xuXG4gICAgICAgICAgY2FzZSAzOlxuICAgICAgICAgIGNhc2UgXCJlbmRcIjpcbiAgICAgICAgICAgIHJldHVybiBfY29udGV4dDE3LnN0b3AoKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sIF9jYWxsZWUxNyk7XG4gIH0pKTtcblxuICByZXR1cm4gZnVuY3Rpb24gKF94MTYpIHtcbiAgICByZXR1cm4gX3JlZjE3LmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gIH07XG59KCkpO1xuKDAsIF9kZWZpbmVQcm9wZXJ0eTJbXCJkZWZhdWx0XCJdKShUcmV6b3JDb25uZWN0LCBcImNvbXBvc2VUcmFuc2FjdGlvblwiLFxuLyojX19QVVJFX18qL1xuZnVuY3Rpb24gKCkge1xuICB2YXIgX3JlZjE4ID0gKDAsIF9hc3luY1RvR2VuZXJhdG9yMltcImRlZmF1bHRcIl0pKFxuICAvKiNfX1BVUkVfXyovXG4gIF9yZWdlbmVyYXRvcltcImRlZmF1bHRcIl0ubWFyayhmdW5jdGlvbiBfY2FsbGVlMTgocGFyYW1zKSB7XG4gICAgcmV0dXJuIF9yZWdlbmVyYXRvcltcImRlZmF1bHRcIl0ud3JhcChmdW5jdGlvbiBfY2FsbGVlMTgkKF9jb250ZXh0MTgpIHtcbiAgICAgIHdoaWxlICgxKSB7XG4gICAgICAgIHN3aXRjaCAoX2NvbnRleHQxOC5wcmV2ID0gX2NvbnRleHQxOC5uZXh0KSB7XG4gICAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgX2NvbnRleHQxOC5uZXh0ID0gMjtcbiAgICAgICAgICAgIHJldHVybiBjYWxsKF9vYmplY3RTcHJlYWQoe1xuICAgICAgICAgICAgICBtZXRob2Q6ICdjb21wb3NlVHJhbnNhY3Rpb24nXG4gICAgICAgICAgICB9LCBwYXJhbXMpKTtcblxuICAgICAgICAgIGNhc2UgMjpcbiAgICAgICAgICAgIHJldHVybiBfY29udGV4dDE4LmFicnVwdChcInJldHVyblwiLCBfY29udGV4dDE4LnNlbnQpO1xuXG4gICAgICAgICAgY2FzZSAzOlxuICAgICAgICAgIGNhc2UgXCJlbmRcIjpcbiAgICAgICAgICAgIHJldHVybiBfY29udGV4dDE4LnN0b3AoKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sIF9jYWxsZWUxOCk7XG4gIH0pKTtcblxuICByZXR1cm4gZnVuY3Rpb24gKF94MTcpIHtcbiAgICByZXR1cm4gX3JlZjE4LmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gIH07XG59KCkpO1xuKDAsIF9kZWZpbmVQcm9wZXJ0eTJbXCJkZWZhdWx0XCJdKShUcmV6b3JDb25uZWN0LCBcImRlYnVnTGlua0RlY2lzaW9uXCIsXG4vKiNfX1BVUkVfXyovXG5mdW5jdGlvbiAoKSB7XG4gIHZhciBfcmVmMTkgPSAoMCwgX2FzeW5jVG9HZW5lcmF0b3IyW1wiZGVmYXVsdFwiXSkoXG4gIC8qI19fUFVSRV9fKi9cbiAgX3JlZ2VuZXJhdG9yW1wiZGVmYXVsdFwiXS5tYXJrKGZ1bmN0aW9uIF9jYWxsZWUxOShwYXJhbXMpIHtcbiAgICByZXR1cm4gX3JlZ2VuZXJhdG9yW1wiZGVmYXVsdFwiXS53cmFwKGZ1bmN0aW9uIF9jYWxsZWUxOSQoX2NvbnRleHQxOSkge1xuICAgICAgd2hpbGUgKDEpIHtcbiAgICAgICAgc3dpdGNoIChfY29udGV4dDE5LnByZXYgPSBfY29udGV4dDE5Lm5leHQpIHtcbiAgICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICBfY29udGV4dDE5Lm5leHQgPSAyO1xuICAgICAgICAgICAgcmV0dXJuIGNhbGwoX29iamVjdFNwcmVhZCh7XG4gICAgICAgICAgICAgIG1ldGhvZDogJ2RlYnVnTGlua0RlY2lzaW9uJ1xuICAgICAgICAgICAgfSwgcGFyYW1zKSk7XG5cbiAgICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgICByZXR1cm4gX2NvbnRleHQxOS5hYnJ1cHQoXCJyZXR1cm5cIiwgX2NvbnRleHQxOS5zZW50KTtcblxuICAgICAgICAgIGNhc2UgMzpcbiAgICAgICAgICBjYXNlIFwiZW5kXCI6XG4gICAgICAgICAgICByZXR1cm4gX2NvbnRleHQxOS5zdG9wKCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LCBfY2FsbGVlMTkpO1xuICB9KSk7XG5cbiAgcmV0dXJuIGZ1bmN0aW9uIChfeDE4KSB7XG4gICAgcmV0dXJuIF9yZWYxOS5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICB9O1xufSgpKTtcbigwLCBfZGVmaW5lUHJvcGVydHkyW1wiZGVmYXVsdFwiXSkoVHJlem9yQ29ubmVjdCwgXCJkZWJ1Z0xpbmtHZXRTdGF0ZVwiLFxuLyojX19QVVJFX18qL1xuZnVuY3Rpb24gKCkge1xuICB2YXIgX3JlZjIwID0gKDAsIF9hc3luY1RvR2VuZXJhdG9yMltcImRlZmF1bHRcIl0pKFxuICAvKiNfX1BVUkVfXyovXG4gIF9yZWdlbmVyYXRvcltcImRlZmF1bHRcIl0ubWFyayhmdW5jdGlvbiBfY2FsbGVlMjAocGFyYW1zKSB7XG4gICAgcmV0dXJuIF9yZWdlbmVyYXRvcltcImRlZmF1bHRcIl0ud3JhcChmdW5jdGlvbiBfY2FsbGVlMjAkKF9jb250ZXh0MjApIHtcbiAgICAgIHdoaWxlICgxKSB7XG4gICAgICAgIHN3aXRjaCAoX2NvbnRleHQyMC5wcmV2ID0gX2NvbnRleHQyMC5uZXh0KSB7XG4gICAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgX2NvbnRleHQyMC5uZXh0ID0gMjtcbiAgICAgICAgICAgIHJldHVybiBjYWxsKF9vYmplY3RTcHJlYWQoe1xuICAgICAgICAgICAgICBtZXRob2Q6ICdkZWJ1Z0xpbmtHZXRTdGF0ZSdcbiAgICAgICAgICAgIH0sIHBhcmFtcykpO1xuXG4gICAgICAgICAgY2FzZSAyOlxuICAgICAgICAgICAgcmV0dXJuIF9jb250ZXh0MjAuYWJydXB0KFwicmV0dXJuXCIsIF9jb250ZXh0MjAuc2VudCk7XG5cbiAgICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgY2FzZSBcImVuZFwiOlxuICAgICAgICAgICAgcmV0dXJuIF9jb250ZXh0MjAuc3RvcCgpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSwgX2NhbGxlZTIwKTtcbiAgfSkpO1xuXG4gIHJldHVybiBmdW5jdGlvbiAoX3gxOSkge1xuICAgIHJldHVybiBfcmVmMjAuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgfTtcbn0oKSk7XG4oMCwgX2RlZmluZVByb3BlcnR5MltcImRlZmF1bHRcIl0pKFRyZXpvckNvbm5lY3QsIFwiZXRoZXJldW1HZXRBY2NvdW50SW5mb1wiLFxuLyojX19QVVJFX18qL1xuZnVuY3Rpb24gKCkge1xuICB2YXIgX3JlZjIxID0gKDAsIF9hc3luY1RvR2VuZXJhdG9yMltcImRlZmF1bHRcIl0pKFxuICAvKiNfX1BVUkVfXyovXG4gIF9yZWdlbmVyYXRvcltcImRlZmF1bHRcIl0ubWFyayhmdW5jdGlvbiBfY2FsbGVlMjEocGFyYW1zKSB7XG4gICAgcmV0dXJuIF9yZWdlbmVyYXRvcltcImRlZmF1bHRcIl0ud3JhcChmdW5jdGlvbiBfY2FsbGVlMjEkKF9jb250ZXh0MjEpIHtcbiAgICAgIHdoaWxlICgxKSB7XG4gICAgICAgIHN3aXRjaCAoX2NvbnRleHQyMS5wcmV2ID0gX2NvbnRleHQyMS5uZXh0KSB7XG4gICAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgX2NvbnRleHQyMS5uZXh0ID0gMjtcbiAgICAgICAgICAgIHJldHVybiBjYWxsKF9vYmplY3RTcHJlYWQoe1xuICAgICAgICAgICAgICBtZXRob2Q6ICdldGhlcmV1bUdldEFjY291bnRJbmZvJ1xuICAgICAgICAgICAgfSwgcGFyYW1zKSk7XG5cbiAgICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgICByZXR1cm4gX2NvbnRleHQyMS5hYnJ1cHQoXCJyZXR1cm5cIiwgX2NvbnRleHQyMS5zZW50KTtcblxuICAgICAgICAgIGNhc2UgMzpcbiAgICAgICAgICBjYXNlIFwiZW5kXCI6XG4gICAgICAgICAgICByZXR1cm4gX2NvbnRleHQyMS5zdG9wKCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LCBfY2FsbGVlMjEpO1xuICB9KSk7XG5cbiAgcmV0dXJuIGZ1bmN0aW9uIChfeDIwKSB7XG4gICAgcmV0dXJuIF9yZWYyMS5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICB9O1xufSgpKTtcbigwLCBfZGVmaW5lUHJvcGVydHkyW1wiZGVmYXVsdFwiXSkoVHJlem9yQ29ubmVjdCwgXCJldGhlcmV1bUdldEFkZHJlc3NcIixcbi8qI19fUFVSRV9fKi9cbmZ1bmN0aW9uICgpIHtcbiAgdmFyIF9yZWYyMiA9ICgwLCBfYXN5bmNUb0dlbmVyYXRvcjJbXCJkZWZhdWx0XCJdKShcbiAgLyojX19QVVJFX18qL1xuICBfcmVnZW5lcmF0b3JbXCJkZWZhdWx0XCJdLm1hcmsoZnVuY3Rpb24gX2NhbGxlZTIyKHBhcmFtcykge1xuICAgIHZhciB1c2VFdmVudExpc3RlbmVyO1xuICAgIHJldHVybiBfcmVnZW5lcmF0b3JbXCJkZWZhdWx0XCJdLndyYXAoZnVuY3Rpb24gX2NhbGxlZTIyJChfY29udGV4dDIyKSB7XG4gICAgICB3aGlsZSAoMSkge1xuICAgICAgICBzd2l0Y2ggKF9jb250ZXh0MjIucHJldiA9IF9jb250ZXh0MjIubmV4dCkge1xuICAgICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgIHVzZUV2ZW50TGlzdGVuZXIgPSBldmVudEVtaXR0ZXIubGlzdGVuZXJDb3VudChVSS5BRERSRVNTX1ZBTElEQVRJT04pID4gMDtcbiAgICAgICAgICAgIF9jb250ZXh0MjIubmV4dCA9IDM7XG4gICAgICAgICAgICByZXR1cm4gY2FsbChfb2JqZWN0U3ByZWFkKHtcbiAgICAgICAgICAgICAgbWV0aG9kOiAnZXRoZXJldW1HZXRBZGRyZXNzJ1xuICAgICAgICAgICAgfSwgcGFyYW1zLCB7XG4gICAgICAgICAgICAgIHVzZUV2ZW50TGlzdGVuZXI6IHVzZUV2ZW50TGlzdGVuZXJcbiAgICAgICAgICAgIH0pKTtcblxuICAgICAgICAgIGNhc2UgMzpcbiAgICAgICAgICAgIHJldHVybiBfY29udGV4dDIyLmFicnVwdChcInJldHVyblwiLCBfY29udGV4dDIyLnNlbnQpO1xuXG4gICAgICAgICAgY2FzZSA0OlxuICAgICAgICAgIGNhc2UgXCJlbmRcIjpcbiAgICAgICAgICAgIHJldHVybiBfY29udGV4dDIyLnN0b3AoKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sIF9jYWxsZWUyMik7XG4gIH0pKTtcblxuICByZXR1cm4gZnVuY3Rpb24gKF94MjEpIHtcbiAgICByZXR1cm4gX3JlZjIyLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gIH07XG59KCkpO1xuKDAsIF9kZWZpbmVQcm9wZXJ0eTJbXCJkZWZhdWx0XCJdKShUcmV6b3JDb25uZWN0LCBcImV0aGVyZXVtR2V0UHVibGljS2V5XCIsXG4vKiNfX1BVUkVfXyovXG5mdW5jdGlvbiAoKSB7XG4gIHZhciBfcmVmMjMgPSAoMCwgX2FzeW5jVG9HZW5lcmF0b3IyW1wiZGVmYXVsdFwiXSkoXG4gIC8qI19fUFVSRV9fKi9cbiAgX3JlZ2VuZXJhdG9yW1wiZGVmYXVsdFwiXS5tYXJrKGZ1bmN0aW9uIF9jYWxsZWUyMyhwYXJhbXMpIHtcbiAgICByZXR1cm4gX3JlZ2VuZXJhdG9yW1wiZGVmYXVsdFwiXS53cmFwKGZ1bmN0aW9uIF9jYWxsZWUyMyQoX2NvbnRleHQyMykge1xuICAgICAgd2hpbGUgKDEpIHtcbiAgICAgICAgc3dpdGNoIChfY29udGV4dDIzLnByZXYgPSBfY29udGV4dDIzLm5leHQpIHtcbiAgICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICBfY29udGV4dDIzLm5leHQgPSAyO1xuICAgICAgICAgICAgcmV0dXJuIGNhbGwoX29iamVjdFNwcmVhZCh7XG4gICAgICAgICAgICAgIG1ldGhvZDogJ2V0aGVyZXVtR2V0UHVibGljS2V5J1xuICAgICAgICAgICAgfSwgcGFyYW1zKSk7XG5cbiAgICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgICByZXR1cm4gX2NvbnRleHQyMy5hYnJ1cHQoXCJyZXR1cm5cIiwgX2NvbnRleHQyMy5zZW50KTtcblxuICAgICAgICAgIGNhc2UgMzpcbiAgICAgICAgICBjYXNlIFwiZW5kXCI6XG4gICAgICAgICAgICByZXR1cm4gX2NvbnRleHQyMy5zdG9wKCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LCBfY2FsbGVlMjMpO1xuICB9KSk7XG5cbiAgcmV0dXJuIGZ1bmN0aW9uIChfeDIyKSB7XG4gICAgcmV0dXJuIF9yZWYyMy5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICB9O1xufSgpKTtcbigwLCBfZGVmaW5lUHJvcGVydHkyW1wiZGVmYXVsdFwiXSkoVHJlem9yQ29ubmVjdCwgXCJldGhlcmV1bVNpZ25NZXNzYWdlXCIsXG4vKiNfX1BVUkVfXyovXG5mdW5jdGlvbiAoKSB7XG4gIHZhciBfcmVmMjQgPSAoMCwgX2FzeW5jVG9HZW5lcmF0b3IyW1wiZGVmYXVsdFwiXSkoXG4gIC8qI19fUFVSRV9fKi9cbiAgX3JlZ2VuZXJhdG9yW1wiZGVmYXVsdFwiXS5tYXJrKGZ1bmN0aW9uIF9jYWxsZWUyNChwYXJhbXMpIHtcbiAgICByZXR1cm4gX3JlZ2VuZXJhdG9yW1wiZGVmYXVsdFwiXS53cmFwKGZ1bmN0aW9uIF9jYWxsZWUyNCQoX2NvbnRleHQyNCkge1xuICAgICAgd2hpbGUgKDEpIHtcbiAgICAgICAgc3dpdGNoIChfY29udGV4dDI0LnByZXYgPSBfY29udGV4dDI0Lm5leHQpIHtcbiAgICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICBfY29udGV4dDI0Lm5leHQgPSAyO1xuICAgICAgICAgICAgcmV0dXJuIGNhbGwoX29iamVjdFNwcmVhZCh7XG4gICAgICAgICAgICAgIG1ldGhvZDogJ2V0aGVyZXVtU2lnbk1lc3NhZ2UnXG4gICAgICAgICAgICB9LCBwYXJhbXMpKTtcblxuICAgICAgICAgIGNhc2UgMjpcbiAgICAgICAgICAgIHJldHVybiBfY29udGV4dDI0LmFicnVwdChcInJldHVyblwiLCBfY29udGV4dDI0LnNlbnQpO1xuXG4gICAgICAgICAgY2FzZSAzOlxuICAgICAgICAgIGNhc2UgXCJlbmRcIjpcbiAgICAgICAgICAgIHJldHVybiBfY29udGV4dDI0LnN0b3AoKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sIF9jYWxsZWUyNCk7XG4gIH0pKTtcblxuICByZXR1cm4gZnVuY3Rpb24gKF94MjMpIHtcbiAgICByZXR1cm4gX3JlZjI0LmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gIH07XG59KCkpO1xuKDAsIF9kZWZpbmVQcm9wZXJ0eTJbXCJkZWZhdWx0XCJdKShUcmV6b3JDb25uZWN0LCBcImV0aGVyZXVtU2lnblRyYW5zYWN0aW9uXCIsXG4vKiNfX1BVUkVfXyovXG5mdW5jdGlvbiAoKSB7XG4gIHZhciBfcmVmMjUgPSAoMCwgX2FzeW5jVG9HZW5lcmF0b3IyW1wiZGVmYXVsdFwiXSkoXG4gIC8qI19fUFVSRV9fKi9cbiAgX3JlZ2VuZXJhdG9yW1wiZGVmYXVsdFwiXS5tYXJrKGZ1bmN0aW9uIF9jYWxsZWUyNShwYXJhbXMpIHtcbiAgICByZXR1cm4gX3JlZ2VuZXJhdG9yW1wiZGVmYXVsdFwiXS53cmFwKGZ1bmN0aW9uIF9jYWxsZWUyNSQoX2NvbnRleHQyNSkge1xuICAgICAgd2hpbGUgKDEpIHtcbiAgICAgICAgc3dpdGNoIChfY29udGV4dDI1LnByZXYgPSBfY29udGV4dDI1Lm5leHQpIHtcbiAgICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICBfY29udGV4dDI1Lm5leHQgPSAyO1xuICAgICAgICAgICAgcmV0dXJuIGNhbGwoX29iamVjdFNwcmVhZCh7XG4gICAgICAgICAgICAgIG1ldGhvZDogJ2V0aGVyZXVtU2lnblRyYW5zYWN0aW9uJ1xuICAgICAgICAgICAgfSwgcGFyYW1zKSk7XG5cbiAgICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgICByZXR1cm4gX2NvbnRleHQyNS5hYnJ1cHQoXCJyZXR1cm5cIiwgX2NvbnRleHQyNS5zZW50KTtcblxuICAgICAgICAgIGNhc2UgMzpcbiAgICAgICAgICBjYXNlIFwiZW5kXCI6XG4gICAgICAgICAgICByZXR1cm4gX2NvbnRleHQyNS5zdG9wKCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LCBfY2FsbGVlMjUpO1xuICB9KSk7XG5cbiAgcmV0dXJuIGZ1bmN0aW9uIChfeDI0KSB7XG4gICAgcmV0dXJuIF9yZWYyNS5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICB9O1xufSgpKTtcbigwLCBfZGVmaW5lUHJvcGVydHkyW1wiZGVmYXVsdFwiXSkoVHJlem9yQ29ubmVjdCwgXCJldGhlcmV1bVZlcmlmeU1lc3NhZ2VcIixcbi8qI19fUFVSRV9fKi9cbmZ1bmN0aW9uICgpIHtcbiAgdmFyIF9yZWYyNiA9ICgwLCBfYXN5bmNUb0dlbmVyYXRvcjJbXCJkZWZhdWx0XCJdKShcbiAgLyojX19QVVJFX18qL1xuICBfcmVnZW5lcmF0b3JbXCJkZWZhdWx0XCJdLm1hcmsoZnVuY3Rpb24gX2NhbGxlZTI2KHBhcmFtcykge1xuICAgIHJldHVybiBfcmVnZW5lcmF0b3JbXCJkZWZhdWx0XCJdLndyYXAoZnVuY3Rpb24gX2NhbGxlZTI2JChfY29udGV4dDI2KSB7XG4gICAgICB3aGlsZSAoMSkge1xuICAgICAgICBzd2l0Y2ggKF9jb250ZXh0MjYucHJldiA9IF9jb250ZXh0MjYubmV4dCkge1xuICAgICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgIF9jb250ZXh0MjYubmV4dCA9IDI7XG4gICAgICAgICAgICByZXR1cm4gY2FsbChfb2JqZWN0U3ByZWFkKHtcbiAgICAgICAgICAgICAgbWV0aG9kOiAnZXRoZXJldW1WZXJpZnlNZXNzYWdlJ1xuICAgICAgICAgICAgfSwgcGFyYW1zKSk7XG5cbiAgICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgICByZXR1cm4gX2NvbnRleHQyNi5hYnJ1cHQoXCJyZXR1cm5cIiwgX2NvbnRleHQyNi5zZW50KTtcblxuICAgICAgICAgIGNhc2UgMzpcbiAgICAgICAgICBjYXNlIFwiZW5kXCI6XG4gICAgICAgICAgICByZXR1cm4gX2NvbnRleHQyNi5zdG9wKCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LCBfY2FsbGVlMjYpO1xuICB9KSk7XG5cbiAgcmV0dXJuIGZ1bmN0aW9uIChfeDI1KSB7XG4gICAgcmV0dXJuIF9yZWYyNi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICB9O1xufSgpKTtcbigwLCBfZGVmaW5lUHJvcGVydHkyW1wiZGVmYXVsdFwiXSkoVHJlem9yQ29ubmVjdCwgXCJnZXRBY2NvdW50SW5mb1wiLFxuLyojX19QVVJFX18qL1xuZnVuY3Rpb24gKCkge1xuICB2YXIgX3JlZjI3ID0gKDAsIF9hc3luY1RvR2VuZXJhdG9yMltcImRlZmF1bHRcIl0pKFxuICAvKiNfX1BVUkVfXyovXG4gIF9yZWdlbmVyYXRvcltcImRlZmF1bHRcIl0ubWFyayhmdW5jdGlvbiBfY2FsbGVlMjcocGFyYW1zKSB7XG4gICAgcmV0dXJuIF9yZWdlbmVyYXRvcltcImRlZmF1bHRcIl0ud3JhcChmdW5jdGlvbiBfY2FsbGVlMjckKF9jb250ZXh0MjcpIHtcbiAgICAgIHdoaWxlICgxKSB7XG4gICAgICAgIHN3aXRjaCAoX2NvbnRleHQyNy5wcmV2ID0gX2NvbnRleHQyNy5uZXh0KSB7XG4gICAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgX2NvbnRleHQyNy5uZXh0ID0gMjtcbiAgICAgICAgICAgIHJldHVybiBjYWxsKF9vYmplY3RTcHJlYWQoe1xuICAgICAgICAgICAgICBtZXRob2Q6ICdnZXRBY2NvdW50SW5mbydcbiAgICAgICAgICAgIH0sIHBhcmFtcykpO1xuXG4gICAgICAgICAgY2FzZSAyOlxuICAgICAgICAgICAgcmV0dXJuIF9jb250ZXh0MjcuYWJydXB0KFwicmV0dXJuXCIsIF9jb250ZXh0Mjcuc2VudCk7XG5cbiAgICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgY2FzZSBcImVuZFwiOlxuICAgICAgICAgICAgcmV0dXJuIF9jb250ZXh0Mjcuc3RvcCgpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSwgX2NhbGxlZTI3KTtcbiAgfSkpO1xuXG4gIHJldHVybiBmdW5jdGlvbiAoX3gyNikge1xuICAgIHJldHVybiBfcmVmMjcuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgfTtcbn0oKSk7XG4oMCwgX2RlZmluZVByb3BlcnR5MltcImRlZmF1bHRcIl0pKFRyZXpvckNvbm5lY3QsIFwiZ2V0QWRkcmVzc1wiLFxuLyojX19QVVJFX18qL1xuZnVuY3Rpb24gKCkge1xuICB2YXIgX3JlZjI4ID0gKDAsIF9hc3luY1RvR2VuZXJhdG9yMltcImRlZmF1bHRcIl0pKFxuICAvKiNfX1BVUkVfXyovXG4gIF9yZWdlbmVyYXRvcltcImRlZmF1bHRcIl0ubWFyayhmdW5jdGlvbiBfY2FsbGVlMjgocGFyYW1zKSB7XG4gICAgdmFyIHVzZUV2ZW50TGlzdGVuZXI7XG4gICAgcmV0dXJuIF9yZWdlbmVyYXRvcltcImRlZmF1bHRcIl0ud3JhcChmdW5jdGlvbiBfY2FsbGVlMjgkKF9jb250ZXh0MjgpIHtcbiAgICAgIHdoaWxlICgxKSB7XG4gICAgICAgIHN3aXRjaCAoX2NvbnRleHQyOC5wcmV2ID0gX2NvbnRleHQyOC5uZXh0KSB7XG4gICAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgdXNlRXZlbnRMaXN0ZW5lciA9IGV2ZW50RW1pdHRlci5saXN0ZW5lckNvdW50KFVJLkFERFJFU1NfVkFMSURBVElPTikgPiAwO1xuICAgICAgICAgICAgX2NvbnRleHQyOC5uZXh0ID0gMztcbiAgICAgICAgICAgIHJldHVybiBjYWxsKF9vYmplY3RTcHJlYWQoe1xuICAgICAgICAgICAgICBtZXRob2Q6ICdnZXRBZGRyZXNzJ1xuICAgICAgICAgICAgfSwgcGFyYW1zLCB7XG4gICAgICAgICAgICAgIHVzZUV2ZW50TGlzdGVuZXI6IHVzZUV2ZW50TGlzdGVuZXJcbiAgICAgICAgICAgIH0pKTtcblxuICAgICAgICAgIGNhc2UgMzpcbiAgICAgICAgICAgIHJldHVybiBfY29udGV4dDI4LmFicnVwdChcInJldHVyblwiLCBfY29udGV4dDI4LnNlbnQpO1xuXG4gICAgICAgICAgY2FzZSA0OlxuICAgICAgICAgIGNhc2UgXCJlbmRcIjpcbiAgICAgICAgICAgIHJldHVybiBfY29udGV4dDI4LnN0b3AoKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sIF9jYWxsZWUyOCk7XG4gIH0pKTtcblxuICByZXR1cm4gZnVuY3Rpb24gKF94MjcpIHtcbiAgICByZXR1cm4gX3JlZjI4LmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gIH07XG59KCkpO1xuKDAsIF9kZWZpbmVQcm9wZXJ0eTJbXCJkZWZhdWx0XCJdKShUcmV6b3JDb25uZWN0LCBcImdldERldmljZVN0YXRlXCIsXG4vKiNfX1BVUkVfXyovXG5mdW5jdGlvbiAoKSB7XG4gIHZhciBfcmVmMjkgPSAoMCwgX2FzeW5jVG9HZW5lcmF0b3IyW1wiZGVmYXVsdFwiXSkoXG4gIC8qI19fUFVSRV9fKi9cbiAgX3JlZ2VuZXJhdG9yW1wiZGVmYXVsdFwiXS5tYXJrKGZ1bmN0aW9uIF9jYWxsZWUyOShwYXJhbXMpIHtcbiAgICByZXR1cm4gX3JlZ2VuZXJhdG9yW1wiZGVmYXVsdFwiXS53cmFwKGZ1bmN0aW9uIF9jYWxsZWUyOSQoX2NvbnRleHQyOSkge1xuICAgICAgd2hpbGUgKDEpIHtcbiAgICAgICAgc3dpdGNoIChfY29udGV4dDI5LnByZXYgPSBfY29udGV4dDI5Lm5leHQpIHtcbiAgICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICBfY29udGV4dDI5Lm5leHQgPSAyO1xuICAgICAgICAgICAgcmV0dXJuIGNhbGwoX29iamVjdFNwcmVhZCh7XG4gICAgICAgICAgICAgIG1ldGhvZDogJ2dldERldmljZVN0YXRlJ1xuICAgICAgICAgICAgfSwgcGFyYW1zKSk7XG5cbiAgICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgICByZXR1cm4gX2NvbnRleHQyOS5hYnJ1cHQoXCJyZXR1cm5cIiwgX2NvbnRleHQyOS5zZW50KTtcblxuICAgICAgICAgIGNhc2UgMzpcbiAgICAgICAgICBjYXNlIFwiZW5kXCI6XG4gICAgICAgICAgICByZXR1cm4gX2NvbnRleHQyOS5zdG9wKCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LCBfY2FsbGVlMjkpO1xuICB9KSk7XG5cbiAgcmV0dXJuIGZ1bmN0aW9uIChfeDI4KSB7XG4gICAgcmV0dXJuIF9yZWYyOS5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICB9O1xufSgpKTtcbigwLCBfZGVmaW5lUHJvcGVydHkyW1wiZGVmYXVsdFwiXSkoVHJlem9yQ29ubmVjdCwgXCJnZXRGZWF0dXJlc1wiLFxuLyojX19QVVJFX18qL1xuZnVuY3Rpb24gKCkge1xuICB2YXIgX3JlZjMwID0gKDAsIF9hc3luY1RvR2VuZXJhdG9yMltcImRlZmF1bHRcIl0pKFxuICAvKiNfX1BVUkVfXyovXG4gIF9yZWdlbmVyYXRvcltcImRlZmF1bHRcIl0ubWFyayhmdW5jdGlvbiBfY2FsbGVlMzAocGFyYW1zKSB7XG4gICAgcmV0dXJuIF9yZWdlbmVyYXRvcltcImRlZmF1bHRcIl0ud3JhcChmdW5jdGlvbiBfY2FsbGVlMzAkKF9jb250ZXh0MzApIHtcbiAgICAgIHdoaWxlICgxKSB7XG4gICAgICAgIHN3aXRjaCAoX2NvbnRleHQzMC5wcmV2ID0gX2NvbnRleHQzMC5uZXh0KSB7XG4gICAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgX2NvbnRleHQzMC5uZXh0ID0gMjtcbiAgICAgICAgICAgIHJldHVybiBjYWxsKF9vYmplY3RTcHJlYWQoe1xuICAgICAgICAgICAgICBtZXRob2Q6ICdnZXRGZWF0dXJlcydcbiAgICAgICAgICAgIH0sIHBhcmFtcykpO1xuXG4gICAgICAgICAgY2FzZSAyOlxuICAgICAgICAgICAgcmV0dXJuIF9jb250ZXh0MzAuYWJydXB0KFwicmV0dXJuXCIsIF9jb250ZXh0MzAuc2VudCk7XG5cbiAgICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgY2FzZSBcImVuZFwiOlxuICAgICAgICAgICAgcmV0dXJuIF9jb250ZXh0MzAuc3RvcCgpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSwgX2NhbGxlZTMwKTtcbiAgfSkpO1xuXG4gIHJldHVybiBmdW5jdGlvbiAoX3gyOSkge1xuICAgIHJldHVybiBfcmVmMzAuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgfTtcbn0oKSk7XG4oMCwgX2RlZmluZVByb3BlcnR5MltcImRlZmF1bHRcIl0pKFRyZXpvckNvbm5lY3QsIFwiZ2V0UHVibGljS2V5XCIsXG4vKiNfX1BVUkVfXyovXG5mdW5jdGlvbiAoKSB7XG4gIHZhciBfcmVmMzEgPSAoMCwgX2FzeW5jVG9HZW5lcmF0b3IyW1wiZGVmYXVsdFwiXSkoXG4gIC8qI19fUFVSRV9fKi9cbiAgX3JlZ2VuZXJhdG9yW1wiZGVmYXVsdFwiXS5tYXJrKGZ1bmN0aW9uIF9jYWxsZWUzMShwYXJhbXMpIHtcbiAgICByZXR1cm4gX3JlZ2VuZXJhdG9yW1wiZGVmYXVsdFwiXS53cmFwKGZ1bmN0aW9uIF9jYWxsZWUzMSQoX2NvbnRleHQzMSkge1xuICAgICAgd2hpbGUgKDEpIHtcbiAgICAgICAgc3dpdGNoIChfY29udGV4dDMxLnByZXYgPSBfY29udGV4dDMxLm5leHQpIHtcbiAgICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICBfY29udGV4dDMxLm5leHQgPSAyO1xuICAgICAgICAgICAgcmV0dXJuIGNhbGwoX29iamVjdFNwcmVhZCh7XG4gICAgICAgICAgICAgIG1ldGhvZDogJ2dldFB1YmxpY0tleSdcbiAgICAgICAgICAgIH0sIHBhcmFtcykpO1xuXG4gICAgICAgICAgY2FzZSAyOlxuICAgICAgICAgICAgcmV0dXJuIF9jb250ZXh0MzEuYWJydXB0KFwicmV0dXJuXCIsIF9jb250ZXh0MzEuc2VudCk7XG5cbiAgICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgY2FzZSBcImVuZFwiOlxuICAgICAgICAgICAgcmV0dXJuIF9jb250ZXh0MzEuc3RvcCgpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSwgX2NhbGxlZTMxKTtcbiAgfSkpO1xuXG4gIHJldHVybiBmdW5jdGlvbiAoX3gzMCkge1xuICAgIHJldHVybiBfcmVmMzEuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgfTtcbn0oKSk7XG4oMCwgX2RlZmluZVByb3BlcnR5MltcImRlZmF1bHRcIl0pKFRyZXpvckNvbm5lY3QsIFwibGlza0dldEFkZHJlc3NcIixcbi8qI19fUFVSRV9fKi9cbmZ1bmN0aW9uICgpIHtcbiAgdmFyIF9yZWYzMiA9ICgwLCBfYXN5bmNUb0dlbmVyYXRvcjJbXCJkZWZhdWx0XCJdKShcbiAgLyojX19QVVJFX18qL1xuICBfcmVnZW5lcmF0b3JbXCJkZWZhdWx0XCJdLm1hcmsoZnVuY3Rpb24gX2NhbGxlZTMyKHBhcmFtcykge1xuICAgIHZhciB1c2VFdmVudExpc3RlbmVyO1xuICAgIHJldHVybiBfcmVnZW5lcmF0b3JbXCJkZWZhdWx0XCJdLndyYXAoZnVuY3Rpb24gX2NhbGxlZTMyJChfY29udGV4dDMyKSB7XG4gICAgICB3aGlsZSAoMSkge1xuICAgICAgICBzd2l0Y2ggKF9jb250ZXh0MzIucHJldiA9IF9jb250ZXh0MzIubmV4dCkge1xuICAgICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgIHVzZUV2ZW50TGlzdGVuZXIgPSBldmVudEVtaXR0ZXIubGlzdGVuZXJDb3VudChVSS5BRERSRVNTX1ZBTElEQVRJT04pID4gMDtcbiAgICAgICAgICAgIF9jb250ZXh0MzIubmV4dCA9IDM7XG4gICAgICAgICAgICByZXR1cm4gY2FsbChfb2JqZWN0U3ByZWFkKHtcbiAgICAgICAgICAgICAgbWV0aG9kOiAnbGlza0dldEFkZHJlc3MnXG4gICAgICAgICAgICB9LCBwYXJhbXMsIHtcbiAgICAgICAgICAgICAgdXNlRXZlbnRMaXN0ZW5lcjogdXNlRXZlbnRMaXN0ZW5lclxuICAgICAgICAgICAgfSkpO1xuXG4gICAgICAgICAgY2FzZSAzOlxuICAgICAgICAgICAgcmV0dXJuIF9jb250ZXh0MzIuYWJydXB0KFwicmV0dXJuXCIsIF9jb250ZXh0MzIuc2VudCk7XG5cbiAgICAgICAgICBjYXNlIDQ6XG4gICAgICAgICAgY2FzZSBcImVuZFwiOlxuICAgICAgICAgICAgcmV0dXJuIF9jb250ZXh0MzIuc3RvcCgpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSwgX2NhbGxlZTMyKTtcbiAgfSkpO1xuXG4gIHJldHVybiBmdW5jdGlvbiAoX3gzMSkge1xuICAgIHJldHVybiBfcmVmMzIuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgfTtcbn0oKSk7XG4oMCwgX2RlZmluZVByb3BlcnR5MltcImRlZmF1bHRcIl0pKFRyZXpvckNvbm5lY3QsIFwibGlza0dldFB1YmxpY0tleVwiLFxuLyojX19QVVJFX18qL1xuZnVuY3Rpb24gKCkge1xuICB2YXIgX3JlZjMzID0gKDAsIF9hc3luY1RvR2VuZXJhdG9yMltcImRlZmF1bHRcIl0pKFxuICAvKiNfX1BVUkVfXyovXG4gIF9yZWdlbmVyYXRvcltcImRlZmF1bHRcIl0ubWFyayhmdW5jdGlvbiBfY2FsbGVlMzMocGFyYW1zKSB7XG4gICAgcmV0dXJuIF9yZWdlbmVyYXRvcltcImRlZmF1bHRcIl0ud3JhcChmdW5jdGlvbiBfY2FsbGVlMzMkKF9jb250ZXh0MzMpIHtcbiAgICAgIHdoaWxlICgxKSB7XG4gICAgICAgIHN3aXRjaCAoX2NvbnRleHQzMy5wcmV2ID0gX2NvbnRleHQzMy5uZXh0KSB7XG4gICAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgX2NvbnRleHQzMy5uZXh0ID0gMjtcbiAgICAgICAgICAgIHJldHVybiBjYWxsKF9vYmplY3RTcHJlYWQoe1xuICAgICAgICAgICAgICBtZXRob2Q6ICdsaXNrR2V0UHVibGljS2V5J1xuICAgICAgICAgICAgfSwgcGFyYW1zKSk7XG5cbiAgICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgICByZXR1cm4gX2NvbnRleHQzMy5hYnJ1cHQoXCJyZXR1cm5cIiwgX2NvbnRleHQzMy5zZW50KTtcblxuICAgICAgICAgIGNhc2UgMzpcbiAgICAgICAgICBjYXNlIFwiZW5kXCI6XG4gICAgICAgICAgICByZXR1cm4gX2NvbnRleHQzMy5zdG9wKCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LCBfY2FsbGVlMzMpO1xuICB9KSk7XG5cbiAgcmV0dXJuIGZ1bmN0aW9uIChfeDMyKSB7XG4gICAgcmV0dXJuIF9yZWYzMy5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICB9O1xufSgpKTtcbigwLCBfZGVmaW5lUHJvcGVydHkyW1wiZGVmYXVsdFwiXSkoVHJlem9yQ29ubmVjdCwgXCJsaXNrU2lnbk1lc3NhZ2VcIixcbi8qI19fUFVSRV9fKi9cbmZ1bmN0aW9uICgpIHtcbiAgdmFyIF9yZWYzNCA9ICgwLCBfYXN5bmNUb0dlbmVyYXRvcjJbXCJkZWZhdWx0XCJdKShcbiAgLyojX19QVVJFX18qL1xuICBfcmVnZW5lcmF0b3JbXCJkZWZhdWx0XCJdLm1hcmsoZnVuY3Rpb24gX2NhbGxlZTM0KHBhcmFtcykge1xuICAgIHJldHVybiBfcmVnZW5lcmF0b3JbXCJkZWZhdWx0XCJdLndyYXAoZnVuY3Rpb24gX2NhbGxlZTM0JChfY29udGV4dDM0KSB7XG4gICAgICB3aGlsZSAoMSkge1xuICAgICAgICBzd2l0Y2ggKF9jb250ZXh0MzQucHJldiA9IF9jb250ZXh0MzQubmV4dCkge1xuICAgICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgIF9jb250ZXh0MzQubmV4dCA9IDI7XG4gICAgICAgICAgICByZXR1cm4gY2FsbChfb2JqZWN0U3ByZWFkKHtcbiAgICAgICAgICAgICAgbWV0aG9kOiAnbGlza1NpZ25NZXNzYWdlJ1xuICAgICAgICAgICAgfSwgcGFyYW1zKSk7XG5cbiAgICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgICByZXR1cm4gX2NvbnRleHQzNC5hYnJ1cHQoXCJyZXR1cm5cIiwgX2NvbnRleHQzNC5zZW50KTtcblxuICAgICAgICAgIGNhc2UgMzpcbiAgICAgICAgICBjYXNlIFwiZW5kXCI6XG4gICAgICAgICAgICByZXR1cm4gX2NvbnRleHQzNC5zdG9wKCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LCBfY2FsbGVlMzQpO1xuICB9KSk7XG5cbiAgcmV0dXJuIGZ1bmN0aW9uIChfeDMzKSB7XG4gICAgcmV0dXJuIF9yZWYzNC5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICB9O1xufSgpKTtcbigwLCBfZGVmaW5lUHJvcGVydHkyW1wiZGVmYXVsdFwiXSkoVHJlem9yQ29ubmVjdCwgXCJsaXNrU2lnblRyYW5zYWN0aW9uXCIsXG4vKiNfX1BVUkVfXyovXG5mdW5jdGlvbiAoKSB7XG4gIHZhciBfcmVmMzUgPSAoMCwgX2FzeW5jVG9HZW5lcmF0b3IyW1wiZGVmYXVsdFwiXSkoXG4gIC8qI19fUFVSRV9fKi9cbiAgX3JlZ2VuZXJhdG9yW1wiZGVmYXVsdFwiXS5tYXJrKGZ1bmN0aW9uIF9jYWxsZWUzNShwYXJhbXMpIHtcbiAgICByZXR1cm4gX3JlZ2VuZXJhdG9yW1wiZGVmYXVsdFwiXS53cmFwKGZ1bmN0aW9uIF9jYWxsZWUzNSQoX2NvbnRleHQzNSkge1xuICAgICAgd2hpbGUgKDEpIHtcbiAgICAgICAgc3dpdGNoIChfY29udGV4dDM1LnByZXYgPSBfY29udGV4dDM1Lm5leHQpIHtcbiAgICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICBfY29udGV4dDM1Lm5leHQgPSAyO1xuICAgICAgICAgICAgcmV0dXJuIGNhbGwoX29iamVjdFNwcmVhZCh7XG4gICAgICAgICAgICAgIG1ldGhvZDogJ2xpc2tTaWduVHJhbnNhY3Rpb24nXG4gICAgICAgICAgICB9LCBwYXJhbXMpKTtcblxuICAgICAgICAgIGNhc2UgMjpcbiAgICAgICAgICAgIHJldHVybiBfY29udGV4dDM1LmFicnVwdChcInJldHVyblwiLCBfY29udGV4dDM1LnNlbnQpO1xuXG4gICAgICAgICAgY2FzZSAzOlxuICAgICAgICAgIGNhc2UgXCJlbmRcIjpcbiAgICAgICAgICAgIHJldHVybiBfY29udGV4dDM1LnN0b3AoKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sIF9jYWxsZWUzNSk7XG4gIH0pKTtcblxuICByZXR1cm4gZnVuY3Rpb24gKF94MzQpIHtcbiAgICByZXR1cm4gX3JlZjM1LmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gIH07XG59KCkpO1xuKDAsIF9kZWZpbmVQcm9wZXJ0eTJbXCJkZWZhdWx0XCJdKShUcmV6b3JDb25uZWN0LCBcImxpc2tWZXJpZnlNZXNzYWdlXCIsXG4vKiNfX1BVUkVfXyovXG5mdW5jdGlvbiAoKSB7XG4gIHZhciBfcmVmMzYgPSAoMCwgX2FzeW5jVG9HZW5lcmF0b3IyW1wiZGVmYXVsdFwiXSkoXG4gIC8qI19fUFVSRV9fKi9cbiAgX3JlZ2VuZXJhdG9yW1wiZGVmYXVsdFwiXS5tYXJrKGZ1bmN0aW9uIF9jYWxsZWUzNihwYXJhbXMpIHtcbiAgICByZXR1cm4gX3JlZ2VuZXJhdG9yW1wiZGVmYXVsdFwiXS53cmFwKGZ1bmN0aW9uIF9jYWxsZWUzNiQoX2NvbnRleHQzNikge1xuICAgICAgd2hpbGUgKDEpIHtcbiAgICAgICAgc3dpdGNoIChfY29udGV4dDM2LnByZXYgPSBfY29udGV4dDM2Lm5leHQpIHtcbiAgICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICBfY29udGV4dDM2Lm5leHQgPSAyO1xuICAgICAgICAgICAgcmV0dXJuIGNhbGwoX29iamVjdFNwcmVhZCh7XG4gICAgICAgICAgICAgIG1ldGhvZDogJ2xpc2tWZXJpZnlNZXNzYWdlJ1xuICAgICAgICAgICAgfSwgcGFyYW1zKSk7XG5cbiAgICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgICByZXR1cm4gX2NvbnRleHQzNi5hYnJ1cHQoXCJyZXR1cm5cIiwgX2NvbnRleHQzNi5zZW50KTtcblxuICAgICAgICAgIGNhc2UgMzpcbiAgICAgICAgICBjYXNlIFwiZW5kXCI6XG4gICAgICAgICAgICByZXR1cm4gX2NvbnRleHQzNi5zdG9wKCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LCBfY2FsbGVlMzYpO1xuICB9KSk7XG5cbiAgcmV0dXJuIGZ1bmN0aW9uIChfeDM1KSB7XG4gICAgcmV0dXJuIF9yZWYzNi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICB9O1xufSgpKTtcbigwLCBfZGVmaW5lUHJvcGVydHkyW1wiZGVmYXVsdFwiXSkoVHJlem9yQ29ubmVjdCwgXCJuZW1HZXRBZGRyZXNzXCIsXG4vKiNfX1BVUkVfXyovXG5mdW5jdGlvbiAoKSB7XG4gIHZhciBfcmVmMzcgPSAoMCwgX2FzeW5jVG9HZW5lcmF0b3IyW1wiZGVmYXVsdFwiXSkoXG4gIC8qI19fUFVSRV9fKi9cbiAgX3JlZ2VuZXJhdG9yW1wiZGVmYXVsdFwiXS5tYXJrKGZ1bmN0aW9uIF9jYWxsZWUzNyhwYXJhbXMpIHtcbiAgICB2YXIgdXNlRXZlbnRMaXN0ZW5lcjtcbiAgICByZXR1cm4gX3JlZ2VuZXJhdG9yW1wiZGVmYXVsdFwiXS53cmFwKGZ1bmN0aW9uIF9jYWxsZWUzNyQoX2NvbnRleHQzNykge1xuICAgICAgd2hpbGUgKDEpIHtcbiAgICAgICAgc3dpdGNoIChfY29udGV4dDM3LnByZXYgPSBfY29udGV4dDM3Lm5leHQpIHtcbiAgICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICB1c2VFdmVudExpc3RlbmVyID0gZXZlbnRFbWl0dGVyLmxpc3RlbmVyQ291bnQoVUkuQUREUkVTU19WQUxJREFUSU9OKSA+IDA7XG4gICAgICAgICAgICBfY29udGV4dDM3Lm5leHQgPSAzO1xuICAgICAgICAgICAgcmV0dXJuIGNhbGwoX29iamVjdFNwcmVhZCh7XG4gICAgICAgICAgICAgIG1ldGhvZDogJ25lbUdldEFkZHJlc3MnXG4gICAgICAgICAgICB9LCBwYXJhbXMsIHtcbiAgICAgICAgICAgICAgdXNlRXZlbnRMaXN0ZW5lcjogdXNlRXZlbnRMaXN0ZW5lclxuICAgICAgICAgICAgfSkpO1xuXG4gICAgICAgICAgY2FzZSAzOlxuICAgICAgICAgICAgcmV0dXJuIF9jb250ZXh0MzcuYWJydXB0KFwicmV0dXJuXCIsIF9jb250ZXh0Mzcuc2VudCk7XG5cbiAgICAgICAgICBjYXNlIDQ6XG4gICAgICAgICAgY2FzZSBcImVuZFwiOlxuICAgICAgICAgICAgcmV0dXJuIF9jb250ZXh0Mzcuc3RvcCgpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSwgX2NhbGxlZTM3KTtcbiAgfSkpO1xuXG4gIHJldHVybiBmdW5jdGlvbiAoX3gzNikge1xuICAgIHJldHVybiBfcmVmMzcuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgfTtcbn0oKSk7XG4oMCwgX2RlZmluZVByb3BlcnR5MltcImRlZmF1bHRcIl0pKFRyZXpvckNvbm5lY3QsIFwibmVtU2lnblRyYW5zYWN0aW9uXCIsXG4vKiNfX1BVUkVfXyovXG5mdW5jdGlvbiAoKSB7XG4gIHZhciBfcmVmMzggPSAoMCwgX2FzeW5jVG9HZW5lcmF0b3IyW1wiZGVmYXVsdFwiXSkoXG4gIC8qI19fUFVSRV9fKi9cbiAgX3JlZ2VuZXJhdG9yW1wiZGVmYXVsdFwiXS5tYXJrKGZ1bmN0aW9uIF9jYWxsZWUzOChwYXJhbXMpIHtcbiAgICByZXR1cm4gX3JlZ2VuZXJhdG9yW1wiZGVmYXVsdFwiXS53cmFwKGZ1bmN0aW9uIF9jYWxsZWUzOCQoX2NvbnRleHQzOCkge1xuICAgICAgd2hpbGUgKDEpIHtcbiAgICAgICAgc3dpdGNoIChfY29udGV4dDM4LnByZXYgPSBfY29udGV4dDM4Lm5leHQpIHtcbiAgICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICBfY29udGV4dDM4Lm5leHQgPSAyO1xuICAgICAgICAgICAgcmV0dXJuIGNhbGwoX29iamVjdFNwcmVhZCh7XG4gICAgICAgICAgICAgIG1ldGhvZDogJ25lbVNpZ25UcmFuc2FjdGlvbidcbiAgICAgICAgICAgIH0sIHBhcmFtcykpO1xuXG4gICAgICAgICAgY2FzZSAyOlxuICAgICAgICAgICAgcmV0dXJuIF9jb250ZXh0MzguYWJydXB0KFwicmV0dXJuXCIsIF9jb250ZXh0Mzguc2VudCk7XG5cbiAgICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgY2FzZSBcImVuZFwiOlxuICAgICAgICAgICAgcmV0dXJuIF9jb250ZXh0Mzguc3RvcCgpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSwgX2NhbGxlZTM4KTtcbiAgfSkpO1xuXG4gIHJldHVybiBmdW5jdGlvbiAoX3gzNykge1xuICAgIHJldHVybiBfcmVmMzguYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgfTtcbn0oKSk7XG4oMCwgX2RlZmluZVByb3BlcnR5MltcImRlZmF1bHRcIl0pKFRyZXpvckNvbm5lY3QsIFwicHVzaFRyYW5zYWN0aW9uXCIsXG4vKiNfX1BVUkVfXyovXG5mdW5jdGlvbiAoKSB7XG4gIHZhciBfcmVmMzkgPSAoMCwgX2FzeW5jVG9HZW5lcmF0b3IyW1wiZGVmYXVsdFwiXSkoXG4gIC8qI19fUFVSRV9fKi9cbiAgX3JlZ2VuZXJhdG9yW1wiZGVmYXVsdFwiXS5tYXJrKGZ1bmN0aW9uIF9jYWxsZWUzOShwYXJhbXMpIHtcbiAgICByZXR1cm4gX3JlZ2VuZXJhdG9yW1wiZGVmYXVsdFwiXS53cmFwKGZ1bmN0aW9uIF9jYWxsZWUzOSQoX2NvbnRleHQzOSkge1xuICAgICAgd2hpbGUgKDEpIHtcbiAgICAgICAgc3dpdGNoIChfY29udGV4dDM5LnByZXYgPSBfY29udGV4dDM5Lm5leHQpIHtcbiAgICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICBfY29udGV4dDM5Lm5leHQgPSAyO1xuICAgICAgICAgICAgcmV0dXJuIGNhbGwoX29iamVjdFNwcmVhZCh7XG4gICAgICAgICAgICAgIG1ldGhvZDogJ3B1c2hUcmFuc2FjdGlvbidcbiAgICAgICAgICAgIH0sIHBhcmFtcykpO1xuXG4gICAgICAgICAgY2FzZSAyOlxuICAgICAgICAgICAgcmV0dXJuIF9jb250ZXh0MzkuYWJydXB0KFwicmV0dXJuXCIsIF9jb250ZXh0Mzkuc2VudCk7XG5cbiAgICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgY2FzZSBcImVuZFwiOlxuICAgICAgICAgICAgcmV0dXJuIF9jb250ZXh0Mzkuc3RvcCgpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSwgX2NhbGxlZTM5KTtcbiAgfSkpO1xuXG4gIHJldHVybiBmdW5jdGlvbiAoX3gzOCkge1xuICAgIHJldHVybiBfcmVmMzkuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgfTtcbn0oKSk7XG4oMCwgX2RlZmluZVByb3BlcnR5MltcImRlZmF1bHRcIl0pKFRyZXpvckNvbm5lY3QsIFwicmlwcGxlR2V0QWNjb3VudEluZm9cIixcbi8qI19fUFVSRV9fKi9cbmZ1bmN0aW9uICgpIHtcbiAgdmFyIF9yZWY0MCA9ICgwLCBfYXN5bmNUb0dlbmVyYXRvcjJbXCJkZWZhdWx0XCJdKShcbiAgLyojX19QVVJFX18qL1xuICBfcmVnZW5lcmF0b3JbXCJkZWZhdWx0XCJdLm1hcmsoZnVuY3Rpb24gX2NhbGxlZTQwKHBhcmFtcykge1xuICAgIHJldHVybiBfcmVnZW5lcmF0b3JbXCJkZWZhdWx0XCJdLndyYXAoZnVuY3Rpb24gX2NhbGxlZTQwJChfY29udGV4dDQwKSB7XG4gICAgICB3aGlsZSAoMSkge1xuICAgICAgICBzd2l0Y2ggKF9jb250ZXh0NDAucHJldiA9IF9jb250ZXh0NDAubmV4dCkge1xuICAgICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgIF9jb250ZXh0NDAubmV4dCA9IDI7XG4gICAgICAgICAgICByZXR1cm4gY2FsbChfb2JqZWN0U3ByZWFkKHtcbiAgICAgICAgICAgICAgbWV0aG9kOiAncmlwcGxlR2V0QWNjb3VudEluZm8nXG4gICAgICAgICAgICB9LCBwYXJhbXMpKTtcblxuICAgICAgICAgIGNhc2UgMjpcbiAgICAgICAgICAgIHJldHVybiBfY29udGV4dDQwLmFicnVwdChcInJldHVyblwiLCBfY29udGV4dDQwLnNlbnQpO1xuXG4gICAgICAgICAgY2FzZSAzOlxuICAgICAgICAgIGNhc2UgXCJlbmRcIjpcbiAgICAgICAgICAgIHJldHVybiBfY29udGV4dDQwLnN0b3AoKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sIF9jYWxsZWU0MCk7XG4gIH0pKTtcblxuICByZXR1cm4gZnVuY3Rpb24gKF94MzkpIHtcbiAgICByZXR1cm4gX3JlZjQwLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gIH07XG59KCkpO1xuKDAsIF9kZWZpbmVQcm9wZXJ0eTJbXCJkZWZhdWx0XCJdKShUcmV6b3JDb25uZWN0LCBcInJpcHBsZUdldEFkZHJlc3NcIixcbi8qI19fUFVSRV9fKi9cbmZ1bmN0aW9uICgpIHtcbiAgdmFyIF9yZWY0MSA9ICgwLCBfYXN5bmNUb0dlbmVyYXRvcjJbXCJkZWZhdWx0XCJdKShcbiAgLyojX19QVVJFX18qL1xuICBfcmVnZW5lcmF0b3JbXCJkZWZhdWx0XCJdLm1hcmsoZnVuY3Rpb24gX2NhbGxlZTQxKHBhcmFtcykge1xuICAgIHZhciB1c2VFdmVudExpc3RlbmVyO1xuICAgIHJldHVybiBfcmVnZW5lcmF0b3JbXCJkZWZhdWx0XCJdLndyYXAoZnVuY3Rpb24gX2NhbGxlZTQxJChfY29udGV4dDQxKSB7XG4gICAgICB3aGlsZSAoMSkge1xuICAgICAgICBzd2l0Y2ggKF9jb250ZXh0NDEucHJldiA9IF9jb250ZXh0NDEubmV4dCkge1xuICAgICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgIHVzZUV2ZW50TGlzdGVuZXIgPSBldmVudEVtaXR0ZXIubGlzdGVuZXJDb3VudChVSS5BRERSRVNTX1ZBTElEQVRJT04pID4gMDtcbiAgICAgICAgICAgIF9jb250ZXh0NDEubmV4dCA9IDM7XG4gICAgICAgICAgICByZXR1cm4gY2FsbChfb2JqZWN0U3ByZWFkKHtcbiAgICAgICAgICAgICAgbWV0aG9kOiAncmlwcGxlR2V0QWRkcmVzcydcbiAgICAgICAgICAgIH0sIHBhcmFtcywge1xuICAgICAgICAgICAgICB1c2VFdmVudExpc3RlbmVyOiB1c2VFdmVudExpc3RlbmVyXG4gICAgICAgICAgICB9KSk7XG5cbiAgICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgICByZXR1cm4gX2NvbnRleHQ0MS5hYnJ1cHQoXCJyZXR1cm5cIiwgX2NvbnRleHQ0MS5zZW50KTtcblxuICAgICAgICAgIGNhc2UgNDpcbiAgICAgICAgICBjYXNlIFwiZW5kXCI6XG4gICAgICAgICAgICByZXR1cm4gX2NvbnRleHQ0MS5zdG9wKCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LCBfY2FsbGVlNDEpO1xuICB9KSk7XG5cbiAgcmV0dXJuIGZ1bmN0aW9uIChfeDQwKSB7XG4gICAgcmV0dXJuIF9yZWY0MS5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICB9O1xufSgpKTtcbigwLCBfZGVmaW5lUHJvcGVydHkyW1wiZGVmYXVsdFwiXSkoVHJlem9yQ29ubmVjdCwgXCJyaXBwbGVTaWduVHJhbnNhY3Rpb25cIixcbi8qI19fUFVSRV9fKi9cbmZ1bmN0aW9uICgpIHtcbiAgdmFyIF9yZWY0MiA9ICgwLCBfYXN5bmNUb0dlbmVyYXRvcjJbXCJkZWZhdWx0XCJdKShcbiAgLyojX19QVVJFX18qL1xuICBfcmVnZW5lcmF0b3JbXCJkZWZhdWx0XCJdLm1hcmsoZnVuY3Rpb24gX2NhbGxlZTQyKHBhcmFtcykge1xuICAgIHJldHVybiBfcmVnZW5lcmF0b3JbXCJkZWZhdWx0XCJdLndyYXAoZnVuY3Rpb24gX2NhbGxlZTQyJChfY29udGV4dDQyKSB7XG4gICAgICB3aGlsZSAoMSkge1xuICAgICAgICBzd2l0Y2ggKF9jb250ZXh0NDIucHJldiA9IF9jb250ZXh0NDIubmV4dCkge1xuICAgICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgIF9jb250ZXh0NDIubmV4dCA9IDI7XG4gICAgICAgICAgICByZXR1cm4gY2FsbChfb2JqZWN0U3ByZWFkKHtcbiAgICAgICAgICAgICAgbWV0aG9kOiAncmlwcGxlU2lnblRyYW5zYWN0aW9uJ1xuICAgICAgICAgICAgfSwgcGFyYW1zKSk7XG5cbiAgICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgICByZXR1cm4gX2NvbnRleHQ0Mi5hYnJ1cHQoXCJyZXR1cm5cIiwgX2NvbnRleHQ0Mi5zZW50KTtcblxuICAgICAgICAgIGNhc2UgMzpcbiAgICAgICAgICBjYXNlIFwiZW5kXCI6XG4gICAgICAgICAgICByZXR1cm4gX2NvbnRleHQ0Mi5zdG9wKCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LCBfY2FsbGVlNDIpO1xuICB9KSk7XG5cbiAgcmV0dXJuIGZ1bmN0aW9uIChfeDQxKSB7XG4gICAgcmV0dXJuIF9yZWY0Mi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICB9O1xufSgpKTtcbigwLCBfZGVmaW5lUHJvcGVydHkyW1wiZGVmYXVsdFwiXSkoVHJlem9yQ29ubmVjdCwgXCJzaWduTWVzc2FnZVwiLFxuLyojX19QVVJFX18qL1xuZnVuY3Rpb24gKCkge1xuICB2YXIgX3JlZjQzID0gKDAsIF9hc3luY1RvR2VuZXJhdG9yMltcImRlZmF1bHRcIl0pKFxuICAvKiNfX1BVUkVfXyovXG4gIF9yZWdlbmVyYXRvcltcImRlZmF1bHRcIl0ubWFyayhmdW5jdGlvbiBfY2FsbGVlNDMocGFyYW1zKSB7XG4gICAgcmV0dXJuIF9yZWdlbmVyYXRvcltcImRlZmF1bHRcIl0ud3JhcChmdW5jdGlvbiBfY2FsbGVlNDMkKF9jb250ZXh0NDMpIHtcbiAgICAgIHdoaWxlICgxKSB7XG4gICAgICAgIHN3aXRjaCAoX2NvbnRleHQ0My5wcmV2ID0gX2NvbnRleHQ0My5uZXh0KSB7XG4gICAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgX2NvbnRleHQ0My5uZXh0ID0gMjtcbiAgICAgICAgICAgIHJldHVybiBjYWxsKF9vYmplY3RTcHJlYWQoe1xuICAgICAgICAgICAgICBtZXRob2Q6ICdzaWduTWVzc2FnZSdcbiAgICAgICAgICAgIH0sIHBhcmFtcykpO1xuXG4gICAgICAgICAgY2FzZSAyOlxuICAgICAgICAgICAgcmV0dXJuIF9jb250ZXh0NDMuYWJydXB0KFwicmV0dXJuXCIsIF9jb250ZXh0NDMuc2VudCk7XG5cbiAgICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgY2FzZSBcImVuZFwiOlxuICAgICAgICAgICAgcmV0dXJuIF9jb250ZXh0NDMuc3RvcCgpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSwgX2NhbGxlZTQzKTtcbiAgfSkpO1xuXG4gIHJldHVybiBmdW5jdGlvbiAoX3g0Mikge1xuICAgIHJldHVybiBfcmVmNDMuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgfTtcbn0oKSk7XG4oMCwgX2RlZmluZVByb3BlcnR5MltcImRlZmF1bHRcIl0pKFRyZXpvckNvbm5lY3QsIFwic2lnblRyYW5zYWN0aW9uXCIsXG4vKiNfX1BVUkVfXyovXG5mdW5jdGlvbiAoKSB7XG4gIHZhciBfcmVmNDQgPSAoMCwgX2FzeW5jVG9HZW5lcmF0b3IyW1wiZGVmYXVsdFwiXSkoXG4gIC8qI19fUFVSRV9fKi9cbiAgX3JlZ2VuZXJhdG9yW1wiZGVmYXVsdFwiXS5tYXJrKGZ1bmN0aW9uIF9jYWxsZWU0NChwYXJhbXMpIHtcbiAgICByZXR1cm4gX3JlZ2VuZXJhdG9yW1wiZGVmYXVsdFwiXS53cmFwKGZ1bmN0aW9uIF9jYWxsZWU0NCQoX2NvbnRleHQ0NCkge1xuICAgICAgd2hpbGUgKDEpIHtcbiAgICAgICAgc3dpdGNoIChfY29udGV4dDQ0LnByZXYgPSBfY29udGV4dDQ0Lm5leHQpIHtcbiAgICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICBfY29udGV4dDQ0Lm5leHQgPSAyO1xuICAgICAgICAgICAgcmV0dXJuIGNhbGwoX29iamVjdFNwcmVhZCh7XG4gICAgICAgICAgICAgIG1ldGhvZDogJ3NpZ25UcmFuc2FjdGlvbidcbiAgICAgICAgICAgIH0sIHBhcmFtcykpO1xuXG4gICAgICAgICAgY2FzZSAyOlxuICAgICAgICAgICAgcmV0dXJuIF9jb250ZXh0NDQuYWJydXB0KFwicmV0dXJuXCIsIF9jb250ZXh0NDQuc2VudCk7XG5cbiAgICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgY2FzZSBcImVuZFwiOlxuICAgICAgICAgICAgcmV0dXJuIF9jb250ZXh0NDQuc3RvcCgpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSwgX2NhbGxlZTQ0KTtcbiAgfSkpO1xuXG4gIHJldHVybiBmdW5jdGlvbiAoX3g0Mykge1xuICAgIHJldHVybiBfcmVmNDQuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgfTtcbn0oKSk7XG4oMCwgX2RlZmluZVByb3BlcnR5MltcImRlZmF1bHRcIl0pKFRyZXpvckNvbm5lY3QsIFwic3RlbGxhckdldEFkZHJlc3NcIixcbi8qI19fUFVSRV9fKi9cbmZ1bmN0aW9uICgpIHtcbiAgdmFyIF9yZWY0NSA9ICgwLCBfYXN5bmNUb0dlbmVyYXRvcjJbXCJkZWZhdWx0XCJdKShcbiAgLyojX19QVVJFX18qL1xuICBfcmVnZW5lcmF0b3JbXCJkZWZhdWx0XCJdLm1hcmsoZnVuY3Rpb24gX2NhbGxlZTQ1KHBhcmFtcykge1xuICAgIHZhciB1c2VFdmVudExpc3RlbmVyO1xuICAgIHJldHVybiBfcmVnZW5lcmF0b3JbXCJkZWZhdWx0XCJdLndyYXAoZnVuY3Rpb24gX2NhbGxlZTQ1JChfY29udGV4dDQ1KSB7XG4gICAgICB3aGlsZSAoMSkge1xuICAgICAgICBzd2l0Y2ggKF9jb250ZXh0NDUucHJldiA9IF9jb250ZXh0NDUubmV4dCkge1xuICAgICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgIHVzZUV2ZW50TGlzdGVuZXIgPSBldmVudEVtaXR0ZXIubGlzdGVuZXJDb3VudChVSS5BRERSRVNTX1ZBTElEQVRJT04pID4gMDtcbiAgICAgICAgICAgIF9jb250ZXh0NDUubmV4dCA9IDM7XG4gICAgICAgICAgICByZXR1cm4gY2FsbChfb2JqZWN0U3ByZWFkKHtcbiAgICAgICAgICAgICAgbWV0aG9kOiAnc3RlbGxhckdldEFkZHJlc3MnXG4gICAgICAgICAgICB9LCBwYXJhbXMsIHtcbiAgICAgICAgICAgICAgdXNlRXZlbnRMaXN0ZW5lcjogdXNlRXZlbnRMaXN0ZW5lclxuICAgICAgICAgICAgfSkpO1xuXG4gICAgICAgICAgY2FzZSAzOlxuICAgICAgICAgICAgcmV0dXJuIF9jb250ZXh0NDUuYWJydXB0KFwicmV0dXJuXCIsIF9jb250ZXh0NDUuc2VudCk7XG5cbiAgICAgICAgICBjYXNlIDQ6XG4gICAgICAgICAgY2FzZSBcImVuZFwiOlxuICAgICAgICAgICAgcmV0dXJuIF9jb250ZXh0NDUuc3RvcCgpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSwgX2NhbGxlZTQ1KTtcbiAgfSkpO1xuXG4gIHJldHVybiBmdW5jdGlvbiAoX3g0NCkge1xuICAgIHJldHVybiBfcmVmNDUuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgfTtcbn0oKSk7XG4oMCwgX2RlZmluZVByb3BlcnR5MltcImRlZmF1bHRcIl0pKFRyZXpvckNvbm5lY3QsIFwic3RlbGxhclNpZ25UcmFuc2FjdGlvblwiLFxuLyojX19QVVJFX18qL1xuZnVuY3Rpb24gKCkge1xuICB2YXIgX3JlZjQ2ID0gKDAsIF9hc3luY1RvR2VuZXJhdG9yMltcImRlZmF1bHRcIl0pKFxuICAvKiNfX1BVUkVfXyovXG4gIF9yZWdlbmVyYXRvcltcImRlZmF1bHRcIl0ubWFyayhmdW5jdGlvbiBfY2FsbGVlNDYocGFyYW1zKSB7XG4gICAgcmV0dXJuIF9yZWdlbmVyYXRvcltcImRlZmF1bHRcIl0ud3JhcChmdW5jdGlvbiBfY2FsbGVlNDYkKF9jb250ZXh0NDYpIHtcbiAgICAgIHdoaWxlICgxKSB7XG4gICAgICAgIHN3aXRjaCAoX2NvbnRleHQ0Ni5wcmV2ID0gX2NvbnRleHQ0Ni5uZXh0KSB7XG4gICAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgX2NvbnRleHQ0Ni5uZXh0ID0gMjtcbiAgICAgICAgICAgIHJldHVybiBjYWxsKF9vYmplY3RTcHJlYWQoe1xuICAgICAgICAgICAgICBtZXRob2Q6ICdzdGVsbGFyU2lnblRyYW5zYWN0aW9uJ1xuICAgICAgICAgICAgfSwgcGFyYW1zKSk7XG5cbiAgICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgICByZXR1cm4gX2NvbnRleHQ0Ni5hYnJ1cHQoXCJyZXR1cm5cIiwgX2NvbnRleHQ0Ni5zZW50KTtcblxuICAgICAgICAgIGNhc2UgMzpcbiAgICAgICAgICBjYXNlIFwiZW5kXCI6XG4gICAgICAgICAgICByZXR1cm4gX2NvbnRleHQ0Ni5zdG9wKCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LCBfY2FsbGVlNDYpO1xuICB9KSk7XG5cbiAgcmV0dXJuIGZ1bmN0aW9uIChfeDQ1KSB7XG4gICAgcmV0dXJuIF9yZWY0Ni5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICB9O1xufSgpKTtcbigwLCBfZGVmaW5lUHJvcGVydHkyW1wiZGVmYXVsdFwiXSkoVHJlem9yQ29ubmVjdCwgXCJ0ZXpvc0dldEFkZHJlc3NcIixcbi8qI19fUFVSRV9fKi9cbmZ1bmN0aW9uICgpIHtcbiAgdmFyIF9yZWY0NyA9ICgwLCBfYXN5bmNUb0dlbmVyYXRvcjJbXCJkZWZhdWx0XCJdKShcbiAgLyojX19QVVJFX18qL1xuICBfcmVnZW5lcmF0b3JbXCJkZWZhdWx0XCJdLm1hcmsoZnVuY3Rpb24gX2NhbGxlZTQ3KHBhcmFtcykge1xuICAgIHZhciB1c2VFdmVudExpc3RlbmVyO1xuICAgIHJldHVybiBfcmVnZW5lcmF0b3JbXCJkZWZhdWx0XCJdLndyYXAoZnVuY3Rpb24gX2NhbGxlZTQ3JChfY29udGV4dDQ3KSB7XG4gICAgICB3aGlsZSAoMSkge1xuICAgICAgICBzd2l0Y2ggKF9jb250ZXh0NDcucHJldiA9IF9jb250ZXh0NDcubmV4dCkge1xuICAgICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgIHVzZUV2ZW50TGlzdGVuZXIgPSBldmVudEVtaXR0ZXIubGlzdGVuZXJDb3VudChVSS5BRERSRVNTX1ZBTElEQVRJT04pID4gMDtcbiAgICAgICAgICAgIF9jb250ZXh0NDcubmV4dCA9IDM7XG4gICAgICAgICAgICByZXR1cm4gY2FsbChfb2JqZWN0U3ByZWFkKHtcbiAgICAgICAgICAgICAgbWV0aG9kOiAndGV6b3NHZXRBZGRyZXNzJ1xuICAgICAgICAgICAgfSwgcGFyYW1zLCB7XG4gICAgICAgICAgICAgIHVzZUV2ZW50TGlzdGVuZXI6IHVzZUV2ZW50TGlzdGVuZXJcbiAgICAgICAgICAgIH0pKTtcblxuICAgICAgICAgIGNhc2UgMzpcbiAgICAgICAgICAgIHJldHVybiBfY29udGV4dDQ3LmFicnVwdChcInJldHVyblwiLCBfY29udGV4dDQ3LnNlbnQpO1xuXG4gICAgICAgICAgY2FzZSA0OlxuICAgICAgICAgIGNhc2UgXCJlbmRcIjpcbiAgICAgICAgICAgIHJldHVybiBfY29udGV4dDQ3LnN0b3AoKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sIF9jYWxsZWU0Nyk7XG4gIH0pKTtcblxuICByZXR1cm4gZnVuY3Rpb24gKF94NDYpIHtcbiAgICByZXR1cm4gX3JlZjQ3LmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gIH07XG59KCkpO1xuKDAsIF9kZWZpbmVQcm9wZXJ0eTJbXCJkZWZhdWx0XCJdKShUcmV6b3JDb25uZWN0LCBcInRlem9zR2V0UHVibGljS2V5XCIsXG4vKiNfX1BVUkVfXyovXG5mdW5jdGlvbiAoKSB7XG4gIHZhciBfcmVmNDggPSAoMCwgX2FzeW5jVG9HZW5lcmF0b3IyW1wiZGVmYXVsdFwiXSkoXG4gIC8qI19fUFVSRV9fKi9cbiAgX3JlZ2VuZXJhdG9yW1wiZGVmYXVsdFwiXS5tYXJrKGZ1bmN0aW9uIF9jYWxsZWU0OChwYXJhbXMpIHtcbiAgICByZXR1cm4gX3JlZ2VuZXJhdG9yW1wiZGVmYXVsdFwiXS53cmFwKGZ1bmN0aW9uIF9jYWxsZWU0OCQoX2NvbnRleHQ0OCkge1xuICAgICAgd2hpbGUgKDEpIHtcbiAgICAgICAgc3dpdGNoIChfY29udGV4dDQ4LnByZXYgPSBfY29udGV4dDQ4Lm5leHQpIHtcbiAgICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICBfY29udGV4dDQ4Lm5leHQgPSAyO1xuICAgICAgICAgICAgcmV0dXJuIGNhbGwoX29iamVjdFNwcmVhZCh7XG4gICAgICAgICAgICAgIG1ldGhvZDogJ3Rlem9zR2V0UHVibGljS2V5J1xuICAgICAgICAgICAgfSwgcGFyYW1zKSk7XG5cbiAgICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgICByZXR1cm4gX2NvbnRleHQ0OC5hYnJ1cHQoXCJyZXR1cm5cIiwgX2NvbnRleHQ0OC5zZW50KTtcblxuICAgICAgICAgIGNhc2UgMzpcbiAgICAgICAgICBjYXNlIFwiZW5kXCI6XG4gICAgICAgICAgICByZXR1cm4gX2NvbnRleHQ0OC5zdG9wKCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LCBfY2FsbGVlNDgpO1xuICB9KSk7XG5cbiAgcmV0dXJuIGZ1bmN0aW9uIChfeDQ3KSB7XG4gICAgcmV0dXJuIF9yZWY0OC5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICB9O1xufSgpKTtcbigwLCBfZGVmaW5lUHJvcGVydHkyW1wiZGVmYXVsdFwiXSkoVHJlem9yQ29ubmVjdCwgXCJ0ZXpvc1NpZ25UcmFuc2FjdGlvblwiLFxuLyojX19QVVJFX18qL1xuZnVuY3Rpb24gKCkge1xuICB2YXIgX3JlZjQ5ID0gKDAsIF9hc3luY1RvR2VuZXJhdG9yMltcImRlZmF1bHRcIl0pKFxuICAvKiNfX1BVUkVfXyovXG4gIF9yZWdlbmVyYXRvcltcImRlZmF1bHRcIl0ubWFyayhmdW5jdGlvbiBfY2FsbGVlNDkocGFyYW1zKSB7XG4gICAgcmV0dXJuIF9yZWdlbmVyYXRvcltcImRlZmF1bHRcIl0ud3JhcChmdW5jdGlvbiBfY2FsbGVlNDkkKF9jb250ZXh0NDkpIHtcbiAgICAgIHdoaWxlICgxKSB7XG4gICAgICAgIHN3aXRjaCAoX2NvbnRleHQ0OS5wcmV2ID0gX2NvbnRleHQ0OS5uZXh0KSB7XG4gICAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgX2NvbnRleHQ0OS5uZXh0ID0gMjtcbiAgICAgICAgICAgIHJldHVybiBjYWxsKF9vYmplY3RTcHJlYWQoe1xuICAgICAgICAgICAgICBtZXRob2Q6ICd0ZXpvc1NpZ25UcmFuc2FjdGlvbidcbiAgICAgICAgICAgIH0sIHBhcmFtcykpO1xuXG4gICAgICAgICAgY2FzZSAyOlxuICAgICAgICAgICAgcmV0dXJuIF9jb250ZXh0NDkuYWJydXB0KFwicmV0dXJuXCIsIF9jb250ZXh0NDkuc2VudCk7XG5cbiAgICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgY2FzZSBcImVuZFwiOlxuICAgICAgICAgICAgcmV0dXJuIF9jb250ZXh0NDkuc3RvcCgpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSwgX2NhbGxlZTQ5KTtcbiAgfSkpO1xuXG4gIHJldHVybiBmdW5jdGlvbiAoX3g0OCkge1xuICAgIHJldHVybiBfcmVmNDkuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgfTtcbn0oKSk7XG4oMCwgX2RlZmluZVByb3BlcnR5MltcImRlZmF1bHRcIl0pKFRyZXpvckNvbm5lY3QsIFwiZW9zR2V0UHVibGljS2V5XCIsXG4vKiNfX1BVUkVfXyovXG5mdW5jdGlvbiAoKSB7XG4gIHZhciBfcmVmNTAgPSAoMCwgX2FzeW5jVG9HZW5lcmF0b3IyW1wiZGVmYXVsdFwiXSkoXG4gIC8qI19fUFVSRV9fKi9cbiAgX3JlZ2VuZXJhdG9yW1wiZGVmYXVsdFwiXS5tYXJrKGZ1bmN0aW9uIF9jYWxsZWU1MChwYXJhbXMpIHtcbiAgICByZXR1cm4gX3JlZ2VuZXJhdG9yW1wiZGVmYXVsdFwiXS53cmFwKGZ1bmN0aW9uIF9jYWxsZWU1MCQoX2NvbnRleHQ1MCkge1xuICAgICAgd2hpbGUgKDEpIHtcbiAgICAgICAgc3dpdGNoIChfY29udGV4dDUwLnByZXYgPSBfY29udGV4dDUwLm5leHQpIHtcbiAgICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICBfY29udGV4dDUwLm5leHQgPSAyO1xuICAgICAgICAgICAgcmV0dXJuIGNhbGwoX29iamVjdFNwcmVhZCh7XG4gICAgICAgICAgICAgIG1ldGhvZDogJ2Vvc0dldFB1YmxpY0tleSdcbiAgICAgICAgICAgIH0sIHBhcmFtcykpO1xuXG4gICAgICAgICAgY2FzZSAyOlxuICAgICAgICAgICAgcmV0dXJuIF9jb250ZXh0NTAuYWJydXB0KFwicmV0dXJuXCIsIF9jb250ZXh0NTAuc2VudCk7XG5cbiAgICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgY2FzZSBcImVuZFwiOlxuICAgICAgICAgICAgcmV0dXJuIF9jb250ZXh0NTAuc3RvcCgpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSwgX2NhbGxlZTUwKTtcbiAgfSkpO1xuXG4gIHJldHVybiBmdW5jdGlvbiAoX3g0OSkge1xuICAgIHJldHVybiBfcmVmNTAuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgfTtcbn0oKSk7XG4oMCwgX2RlZmluZVByb3BlcnR5MltcImRlZmF1bHRcIl0pKFRyZXpvckNvbm5lY3QsIFwiZW9zU2lnblRyYW5zYWN0aW9uXCIsXG4vKiNfX1BVUkVfXyovXG5mdW5jdGlvbiAoKSB7XG4gIHZhciBfcmVmNTEgPSAoMCwgX2FzeW5jVG9HZW5lcmF0b3IyW1wiZGVmYXVsdFwiXSkoXG4gIC8qI19fUFVSRV9fKi9cbiAgX3JlZ2VuZXJhdG9yW1wiZGVmYXVsdFwiXS5tYXJrKGZ1bmN0aW9uIF9jYWxsZWU1MShwYXJhbXMpIHtcbiAgICByZXR1cm4gX3JlZ2VuZXJhdG9yW1wiZGVmYXVsdFwiXS53cmFwKGZ1bmN0aW9uIF9jYWxsZWU1MSQoX2NvbnRleHQ1MSkge1xuICAgICAgd2hpbGUgKDEpIHtcbiAgICAgICAgc3dpdGNoIChfY29udGV4dDUxLnByZXYgPSBfY29udGV4dDUxLm5leHQpIHtcbiAgICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICBfY29udGV4dDUxLm5leHQgPSAyO1xuICAgICAgICAgICAgcmV0dXJuIGNhbGwoX29iamVjdFNwcmVhZCh7XG4gICAgICAgICAgICAgIG1ldGhvZDogJ2Vvc1NpZ25UcmFuc2FjdGlvbidcbiAgICAgICAgICAgIH0sIHBhcmFtcykpO1xuXG4gICAgICAgICAgY2FzZSAyOlxuICAgICAgICAgICAgcmV0dXJuIF9jb250ZXh0NTEuYWJydXB0KFwicmV0dXJuXCIsIF9jb250ZXh0NTEuc2VudCk7XG5cbiAgICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgY2FzZSBcImVuZFwiOlxuICAgICAgICAgICAgcmV0dXJuIF9jb250ZXh0NTEuc3RvcCgpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSwgX2NhbGxlZTUxKTtcbiAgfSkpO1xuXG4gIHJldHVybiBmdW5jdGlvbiAoX3g1MCkge1xuICAgIHJldHVybiBfcmVmNTEuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgfTtcbn0oKSk7XG4oMCwgX2RlZmluZVByb3BlcnR5MltcImRlZmF1bHRcIl0pKFRyZXpvckNvbm5lY3QsIFwidmVyaWZ5TWVzc2FnZVwiLFxuLyojX19QVVJFX18qL1xuZnVuY3Rpb24gKCkge1xuICB2YXIgX3JlZjUyID0gKDAsIF9hc3luY1RvR2VuZXJhdG9yMltcImRlZmF1bHRcIl0pKFxuICAvKiNfX1BVUkVfXyovXG4gIF9yZWdlbmVyYXRvcltcImRlZmF1bHRcIl0ubWFyayhmdW5jdGlvbiBfY2FsbGVlNTIocGFyYW1zKSB7XG4gICAgcmV0dXJuIF9yZWdlbmVyYXRvcltcImRlZmF1bHRcIl0ud3JhcChmdW5jdGlvbiBfY2FsbGVlNTIkKF9jb250ZXh0NTIpIHtcbiAgICAgIHdoaWxlICgxKSB7XG4gICAgICAgIHN3aXRjaCAoX2NvbnRleHQ1Mi5wcmV2ID0gX2NvbnRleHQ1Mi5uZXh0KSB7XG4gICAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgX2NvbnRleHQ1Mi5uZXh0ID0gMjtcbiAgICAgICAgICAgIHJldHVybiBjYWxsKF9vYmplY3RTcHJlYWQoe1xuICAgICAgICAgICAgICBtZXRob2Q6ICd2ZXJpZnlNZXNzYWdlJ1xuICAgICAgICAgICAgfSwgcGFyYW1zKSk7XG5cbiAgICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgICByZXR1cm4gX2NvbnRleHQ1Mi5hYnJ1cHQoXCJyZXR1cm5cIiwgX2NvbnRleHQ1Mi5zZW50KTtcblxuICAgICAgICAgIGNhc2UgMzpcbiAgICAgICAgICBjYXNlIFwiZW5kXCI6XG4gICAgICAgICAgICByZXR1cm4gX2NvbnRleHQ1Mi5zdG9wKCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LCBfY2FsbGVlNTIpO1xuICB9KSk7XG5cbiAgcmV0dXJuIGZ1bmN0aW9uIChfeDUxKSB7XG4gICAgcmV0dXJuIF9yZWY1Mi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICB9O1xufSgpKTtcbigwLCBfZGVmaW5lUHJvcGVydHkyW1wiZGVmYXVsdFwiXSkoVHJlem9yQ29ubmVjdCwgXCJ3aXBlRGV2aWNlXCIsXG4vKiNfX1BVUkVfXyovXG5mdW5jdGlvbiAoKSB7XG4gIHZhciBfcmVmNTMgPSAoMCwgX2FzeW5jVG9HZW5lcmF0b3IyW1wiZGVmYXVsdFwiXSkoXG4gIC8qI19fUFVSRV9fKi9cbiAgX3JlZ2VuZXJhdG9yW1wiZGVmYXVsdFwiXS5tYXJrKGZ1bmN0aW9uIF9jYWxsZWU1MyhwYXJhbXMpIHtcbiAgICByZXR1cm4gX3JlZ2VuZXJhdG9yW1wiZGVmYXVsdFwiXS53cmFwKGZ1bmN0aW9uIF9jYWxsZWU1MyQoX2NvbnRleHQ1Mykge1xuICAgICAgd2hpbGUgKDEpIHtcbiAgICAgICAgc3dpdGNoIChfY29udGV4dDUzLnByZXYgPSBfY29udGV4dDUzLm5leHQpIHtcbiAgICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICBfY29udGV4dDUzLm5leHQgPSAyO1xuICAgICAgICAgICAgcmV0dXJuIGNhbGwoX29iamVjdFNwcmVhZCh7XG4gICAgICAgICAgICAgIG1ldGhvZDogJ3dpcGVEZXZpY2UnXG4gICAgICAgICAgICB9LCBwYXJhbXMpKTtcblxuICAgICAgICAgIGNhc2UgMjpcbiAgICAgICAgICAgIHJldHVybiBfY29udGV4dDUzLmFicnVwdChcInJldHVyblwiLCBfY29udGV4dDUzLnNlbnQpO1xuXG4gICAgICAgICAgY2FzZSAzOlxuICAgICAgICAgIGNhc2UgXCJlbmRcIjpcbiAgICAgICAgICAgIHJldHVybiBfY29udGV4dDUzLnN0b3AoKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sIF9jYWxsZWU1Myk7XG4gIH0pKTtcblxuICByZXR1cm4gZnVuY3Rpb24gKF94NTIpIHtcbiAgICByZXR1cm4gX3JlZjUzLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gIH07XG59KCkpO1xuKDAsIF9kZWZpbmVQcm9wZXJ0eTJbXCJkZWZhdWx0XCJdKShUcmV6b3JDb25uZWN0LCBcImFwcGx5RmxhZ3NcIixcbi8qI19fUFVSRV9fKi9cbmZ1bmN0aW9uICgpIHtcbiAgdmFyIF9yZWY1NCA9ICgwLCBfYXN5bmNUb0dlbmVyYXRvcjJbXCJkZWZhdWx0XCJdKShcbiAgLyojX19QVVJFX18qL1xuICBfcmVnZW5lcmF0b3JbXCJkZWZhdWx0XCJdLm1hcmsoZnVuY3Rpb24gX2NhbGxlZTU0KHBhcmFtcykge1xuICAgIHJldHVybiBfcmVnZW5lcmF0b3JbXCJkZWZhdWx0XCJdLndyYXAoZnVuY3Rpb24gX2NhbGxlZTU0JChfY29udGV4dDU0KSB7XG4gICAgICB3aGlsZSAoMSkge1xuICAgICAgICBzd2l0Y2ggKF9jb250ZXh0NTQucHJldiA9IF9jb250ZXh0NTQubmV4dCkge1xuICAgICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgIF9jb250ZXh0NTQubmV4dCA9IDI7XG4gICAgICAgICAgICByZXR1cm4gY2FsbChfb2JqZWN0U3ByZWFkKHtcbiAgICAgICAgICAgICAgbWV0aG9kOiAnYXBwbHlGbGFncydcbiAgICAgICAgICAgIH0sIHBhcmFtcykpO1xuXG4gICAgICAgICAgY2FzZSAyOlxuICAgICAgICAgICAgcmV0dXJuIF9jb250ZXh0NTQuYWJydXB0KFwicmV0dXJuXCIsIF9jb250ZXh0NTQuc2VudCk7XG5cbiAgICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgY2FzZSBcImVuZFwiOlxuICAgICAgICAgICAgcmV0dXJuIF9jb250ZXh0NTQuc3RvcCgpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSwgX2NhbGxlZTU0KTtcbiAgfSkpO1xuXG4gIHJldHVybiBmdW5jdGlvbiAoX3g1Mykge1xuICAgIHJldHVybiBfcmVmNTQuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgfTtcbn0oKSk7XG4oMCwgX2RlZmluZVByb3BlcnR5MltcImRlZmF1bHRcIl0pKFRyZXpvckNvbm5lY3QsIFwiYXBwbHlTZXR0aW5nc1wiLFxuLyojX19QVVJFX18qL1xuZnVuY3Rpb24gKCkge1xuICB2YXIgX3JlZjU1ID0gKDAsIF9hc3luY1RvR2VuZXJhdG9yMltcImRlZmF1bHRcIl0pKFxuICAvKiNfX1BVUkVfXyovXG4gIF9yZWdlbmVyYXRvcltcImRlZmF1bHRcIl0ubWFyayhmdW5jdGlvbiBfY2FsbGVlNTUocGFyYW1zKSB7XG4gICAgcmV0dXJuIF9yZWdlbmVyYXRvcltcImRlZmF1bHRcIl0ud3JhcChmdW5jdGlvbiBfY2FsbGVlNTUkKF9jb250ZXh0NTUpIHtcbiAgICAgIHdoaWxlICgxKSB7XG4gICAgICAgIHN3aXRjaCAoX2NvbnRleHQ1NS5wcmV2ID0gX2NvbnRleHQ1NS5uZXh0KSB7XG4gICAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgX2NvbnRleHQ1NS5uZXh0ID0gMjtcbiAgICAgICAgICAgIHJldHVybiBjYWxsKF9vYmplY3RTcHJlYWQoe1xuICAgICAgICAgICAgICBtZXRob2Q6ICdhcHBseVNldHRpbmdzJ1xuICAgICAgICAgICAgfSwgcGFyYW1zKSk7XG5cbiAgICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgICByZXR1cm4gX2NvbnRleHQ1NS5hYnJ1cHQoXCJyZXR1cm5cIiwgX2NvbnRleHQ1NS5zZW50KTtcblxuICAgICAgICAgIGNhc2UgMzpcbiAgICAgICAgICBjYXNlIFwiZW5kXCI6XG4gICAgICAgICAgICByZXR1cm4gX2NvbnRleHQ1NS5zdG9wKCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LCBfY2FsbGVlNTUpO1xuICB9KSk7XG5cbiAgcmV0dXJuIGZ1bmN0aW9uIChfeDU0KSB7XG4gICAgcmV0dXJuIF9yZWY1NS5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICB9O1xufSgpKTtcbigwLCBfZGVmaW5lUHJvcGVydHkyW1wiZGVmYXVsdFwiXSkoVHJlem9yQ29ubmVjdCwgXCJiYWNrdXBEZXZpY2VcIixcbi8qI19fUFVSRV9fKi9cbigwLCBfYXN5bmNUb0dlbmVyYXRvcjJbXCJkZWZhdWx0XCJdKShcbi8qI19fUFVSRV9fKi9cbl9yZWdlbmVyYXRvcltcImRlZmF1bHRcIl0ubWFyayhmdW5jdGlvbiBfY2FsbGVlNTYoKSB7XG4gIHJldHVybiBfcmVnZW5lcmF0b3JbXCJkZWZhdWx0XCJdLndyYXAoZnVuY3Rpb24gX2NhbGxlZTU2JChfY29udGV4dDU2KSB7XG4gICAgd2hpbGUgKDEpIHtcbiAgICAgIHN3aXRjaCAoX2NvbnRleHQ1Ni5wcmV2ID0gX2NvbnRleHQ1Ni5uZXh0KSB7XG4gICAgICAgIGNhc2UgMDpcbiAgICAgICAgICBfY29udGV4dDU2Lm5leHQgPSAyO1xuICAgICAgICAgIHJldHVybiBjYWxsKHtcbiAgICAgICAgICAgIG1ldGhvZDogJ2JhY2t1cERldmljZSdcbiAgICAgICAgICB9KTtcblxuICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgcmV0dXJuIF9jb250ZXh0NTYuYWJydXB0KFwicmV0dXJuXCIsIF9jb250ZXh0NTYuc2VudCk7XG5cbiAgICAgICAgY2FzZSAzOlxuICAgICAgICBjYXNlIFwiZW5kXCI6XG4gICAgICAgICAgcmV0dXJuIF9jb250ZXh0NTYuc3RvcCgpO1xuICAgICAgfVxuICAgIH1cbiAgfSwgX2NhbGxlZTU2KTtcbn0pKSk7XG4oMCwgX2RlZmluZVByb3BlcnR5MltcImRlZmF1bHRcIl0pKFRyZXpvckNvbm5lY3QsIFwiY2hhbmdlUGluXCIsXG4vKiNfX1BVUkVfXyovXG5mdW5jdGlvbiAoKSB7XG4gIHZhciBfcmVmNTcgPSAoMCwgX2FzeW5jVG9HZW5lcmF0b3IyW1wiZGVmYXVsdFwiXSkoXG4gIC8qI19fUFVSRV9fKi9cbiAgX3JlZ2VuZXJhdG9yW1wiZGVmYXVsdFwiXS5tYXJrKGZ1bmN0aW9uIF9jYWxsZWU1NyhwYXJhbXMpIHtcbiAgICByZXR1cm4gX3JlZ2VuZXJhdG9yW1wiZGVmYXVsdFwiXS53cmFwKGZ1bmN0aW9uIF9jYWxsZWU1NyQoX2NvbnRleHQ1Nykge1xuICAgICAgd2hpbGUgKDEpIHtcbiAgICAgICAgc3dpdGNoIChfY29udGV4dDU3LnByZXYgPSBfY29udGV4dDU3Lm5leHQpIHtcbiAgICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICBfY29udGV4dDU3Lm5leHQgPSAyO1xuICAgICAgICAgICAgcmV0dXJuIGNhbGwoX29iamVjdFNwcmVhZCh7XG4gICAgICAgICAgICAgIG1ldGhvZDogJ2NoYW5nZVBpbidcbiAgICAgICAgICAgIH0sIHBhcmFtcykpO1xuXG4gICAgICAgICAgY2FzZSAyOlxuICAgICAgICAgICAgcmV0dXJuIF9jb250ZXh0NTcuYWJydXB0KFwicmV0dXJuXCIsIF9jb250ZXh0NTcuc2VudCk7XG5cbiAgICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgY2FzZSBcImVuZFwiOlxuICAgICAgICAgICAgcmV0dXJuIF9jb250ZXh0NTcuc3RvcCgpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSwgX2NhbGxlZTU3KTtcbiAgfSkpO1xuXG4gIHJldHVybiBmdW5jdGlvbiAoX3g1NSkge1xuICAgIHJldHVybiBfcmVmNTcuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgfTtcbn0oKSk7XG4oMCwgX2RlZmluZVByb3BlcnR5MltcImRlZmF1bHRcIl0pKFRyZXpvckNvbm5lY3QsIFwiZmlybXdhcmVFcmFzZVwiLFxuLyojX19QVVJFX18qL1xuZnVuY3Rpb24gKCkge1xuICB2YXIgX3JlZjU4ID0gKDAsIF9hc3luY1RvR2VuZXJhdG9yMltcImRlZmF1bHRcIl0pKFxuICAvKiNfX1BVUkVfXyovXG4gIF9yZWdlbmVyYXRvcltcImRlZmF1bHRcIl0ubWFyayhmdW5jdGlvbiBfY2FsbGVlNTgocGFyYW1zKSB7XG4gICAgcmV0dXJuIF9yZWdlbmVyYXRvcltcImRlZmF1bHRcIl0ud3JhcChmdW5jdGlvbiBfY2FsbGVlNTgkKF9jb250ZXh0NTgpIHtcbiAgICAgIHdoaWxlICgxKSB7XG4gICAgICAgIHN3aXRjaCAoX2NvbnRleHQ1OC5wcmV2ID0gX2NvbnRleHQ1OC5uZXh0KSB7XG4gICAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgX2NvbnRleHQ1OC5uZXh0ID0gMjtcbiAgICAgICAgICAgIHJldHVybiBjYWxsKF9vYmplY3RTcHJlYWQoe1xuICAgICAgICAgICAgICBtZXRob2Q6ICdmaXJtd2FyZUVyYXNlJ1xuICAgICAgICAgICAgfSwgcGFyYW1zKSk7XG5cbiAgICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgICByZXR1cm4gX2NvbnRleHQ1OC5hYnJ1cHQoXCJyZXR1cm5cIiwgX2NvbnRleHQ1OC5zZW50KTtcblxuICAgICAgICAgIGNhc2UgMzpcbiAgICAgICAgICBjYXNlIFwiZW5kXCI6XG4gICAgICAgICAgICByZXR1cm4gX2NvbnRleHQ1OC5zdG9wKCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LCBfY2FsbGVlNTgpO1xuICB9KSk7XG5cbiAgcmV0dXJuIGZ1bmN0aW9uIChfeDU2KSB7XG4gICAgcmV0dXJuIF9yZWY1OC5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICB9O1xufSgpKTtcbigwLCBfZGVmaW5lUHJvcGVydHkyW1wiZGVmYXVsdFwiXSkoVHJlem9yQ29ubmVjdCwgXCJmaXJtd2FyZVVwbG9hZFwiLFxuLyojX19QVVJFX18qL1xuZnVuY3Rpb24gKCkge1xuICB2YXIgX3JlZjU5ID0gKDAsIF9hc3luY1RvR2VuZXJhdG9yMltcImRlZmF1bHRcIl0pKFxuICAvKiNfX1BVUkVfXyovXG4gIF9yZWdlbmVyYXRvcltcImRlZmF1bHRcIl0ubWFyayhmdW5jdGlvbiBfY2FsbGVlNTkocGFyYW1zKSB7XG4gICAgcmV0dXJuIF9yZWdlbmVyYXRvcltcImRlZmF1bHRcIl0ud3JhcChmdW5jdGlvbiBfY2FsbGVlNTkkKF9jb250ZXh0NTkpIHtcbiAgICAgIHdoaWxlICgxKSB7XG4gICAgICAgIHN3aXRjaCAoX2NvbnRleHQ1OS5wcmV2ID0gX2NvbnRleHQ1OS5uZXh0KSB7XG4gICAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgX2NvbnRleHQ1OS5uZXh0ID0gMjtcbiAgICAgICAgICAgIHJldHVybiBjYWxsKF9vYmplY3RTcHJlYWQoe1xuICAgICAgICAgICAgICBtZXRob2Q6ICdmaXJtd2FyZVVwbG9hZCdcbiAgICAgICAgICAgIH0sIHBhcmFtcykpO1xuXG4gICAgICAgICAgY2FzZSAyOlxuICAgICAgICAgICAgcmV0dXJuIF9jb250ZXh0NTkuYWJydXB0KFwicmV0dXJuXCIsIF9jb250ZXh0NTkuc2VudCk7XG5cbiAgICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgY2FzZSBcImVuZFwiOlxuICAgICAgICAgICAgcmV0dXJuIF9jb250ZXh0NTkuc3RvcCgpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSwgX2NhbGxlZTU5KTtcbiAgfSkpO1xuXG4gIHJldHVybiBmdW5jdGlvbiAoX3g1Nykge1xuICAgIHJldHVybiBfcmVmNTkuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgfTtcbn0oKSk7XG4oMCwgX2RlZmluZVByb3BlcnR5MltcImRlZmF1bHRcIl0pKFRyZXpvckNvbm5lY3QsIFwiZmlybXdhcmVVcGRhdGVcIixcbi8qI19fUFVSRV9fKi9cbmZ1bmN0aW9uICgpIHtcbiAgdmFyIF9yZWY2MCA9ICgwLCBfYXN5bmNUb0dlbmVyYXRvcjJbXCJkZWZhdWx0XCJdKShcbiAgLyojX19QVVJFX18qL1xuICBfcmVnZW5lcmF0b3JbXCJkZWZhdWx0XCJdLm1hcmsoZnVuY3Rpb24gX2NhbGxlZTYwKHBhcmFtcykge1xuICAgIHJldHVybiBfcmVnZW5lcmF0b3JbXCJkZWZhdWx0XCJdLndyYXAoZnVuY3Rpb24gX2NhbGxlZTYwJChfY29udGV4dDYwKSB7XG4gICAgICB3aGlsZSAoMSkge1xuICAgICAgICBzd2l0Y2ggKF9jb250ZXh0NjAucHJldiA9IF9jb250ZXh0NjAubmV4dCkge1xuICAgICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgIF9jb250ZXh0NjAubmV4dCA9IDI7XG4gICAgICAgICAgICByZXR1cm4gY2FsbChfb2JqZWN0U3ByZWFkKHtcbiAgICAgICAgICAgICAgbWV0aG9kOiAnZmlybXdhcmVVcGRhdGUnXG4gICAgICAgICAgICB9LCBwYXJhbXMpKTtcblxuICAgICAgICAgIGNhc2UgMjpcbiAgICAgICAgICAgIHJldHVybiBfY29udGV4dDYwLmFicnVwdChcInJldHVyblwiLCBfY29udGV4dDYwLnNlbnQpO1xuXG4gICAgICAgICAgY2FzZSAzOlxuICAgICAgICAgIGNhc2UgXCJlbmRcIjpcbiAgICAgICAgICAgIHJldHVybiBfY29udGV4dDYwLnN0b3AoKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sIF9jYWxsZWU2MCk7XG4gIH0pKTtcblxuICByZXR1cm4gZnVuY3Rpb24gKF94NTgpIHtcbiAgICByZXR1cm4gX3JlZjYwLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gIH07XG59KCkpO1xuKDAsIF9kZWZpbmVQcm9wZXJ0eTJbXCJkZWZhdWx0XCJdKShUcmV6b3JDb25uZWN0LCBcInJlY292ZXJ5RGV2aWNlXCIsXG4vKiNfX1BVUkVfXyovXG5mdW5jdGlvbiAoKSB7XG4gIHZhciBfcmVmNjEgPSAoMCwgX2FzeW5jVG9HZW5lcmF0b3IyW1wiZGVmYXVsdFwiXSkoXG4gIC8qI19fUFVSRV9fKi9cbiAgX3JlZ2VuZXJhdG9yW1wiZGVmYXVsdFwiXS5tYXJrKGZ1bmN0aW9uIF9jYWxsZWU2MShwYXJhbXMpIHtcbiAgICByZXR1cm4gX3JlZ2VuZXJhdG9yW1wiZGVmYXVsdFwiXS53cmFwKGZ1bmN0aW9uIF9jYWxsZWU2MSQoX2NvbnRleHQ2MSkge1xuICAgICAgd2hpbGUgKDEpIHtcbiAgICAgICAgc3dpdGNoIChfY29udGV4dDYxLnByZXYgPSBfY29udGV4dDYxLm5leHQpIHtcbiAgICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICBfY29udGV4dDYxLm5leHQgPSAyO1xuICAgICAgICAgICAgcmV0dXJuIGNhbGwoX29iamVjdFNwcmVhZCh7XG4gICAgICAgICAgICAgIG1ldGhvZDogJ3JlY292ZXJ5RGV2aWNlJ1xuICAgICAgICAgICAgfSwgcGFyYW1zKSk7XG5cbiAgICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgICByZXR1cm4gX2NvbnRleHQ2MS5hYnJ1cHQoXCJyZXR1cm5cIiwgX2NvbnRleHQ2MS5zZW50KTtcblxuICAgICAgICAgIGNhc2UgMzpcbiAgICAgICAgICBjYXNlIFwiZW5kXCI6XG4gICAgICAgICAgICByZXR1cm4gX2NvbnRleHQ2MS5zdG9wKCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LCBfY2FsbGVlNjEpO1xuICB9KSk7XG5cbiAgcmV0dXJuIGZ1bmN0aW9uIChfeDU5KSB7XG4gICAgcmV0dXJuIF9yZWY2MS5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICB9O1xufSgpKTtcbigwLCBfZGVmaW5lUHJvcGVydHkyW1wiZGVmYXVsdFwiXSkoVHJlem9yQ29ubmVjdCwgXCJkaXNwb3NlXCIsIGZ1bmN0aW9uICgpIHtcbiAgaWZyYW1lLmRpc3Bvc2UoKTtcblxuICBpZiAoX3BvcHVwTWFuYWdlcikge1xuICAgIF9wb3B1cE1hbmFnZXIuY2xvc2UoKTtcbiAgfVxufSk7XG4oMCwgX2RlZmluZVByb3BlcnR5MltcImRlZmF1bHRcIl0pKFRyZXpvckNvbm5lY3QsIFwiY2FuY2VsXCIsIGZ1bmN0aW9uICgpIHtcbiAgaWYgKF9wb3B1cE1hbmFnZXIpIHtcbiAgICBfcG9wdXBNYW5hZ2VyLmVtaXQoUE9QVVAuQ0xPU0VEKTtcbiAgfVxufSk7XG4oMCwgX2RlZmluZVByb3BlcnR5MltcImRlZmF1bHRcIl0pKFRyZXpvckNvbm5lY3QsIFwicmVuZGVyV2ViVVNCQnV0dG9uXCIsIGZ1bmN0aW9uIChjbGFzc05hbWUpIHtcbiAgKDAsIF9idXR0b25bXCJkZWZhdWx0XCJdKShjbGFzc05hbWUsIF9zZXR0aW5ncy53ZWJ1c2JTcmMsIGlmcmFtZS5vcmlnaW4pO1xufSk7XG52YXIgX2RlZmF1bHQgPSBUcmV6b3JDb25uZWN0O1xuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBfZGVmYXVsdDsiXSwic291cmNlUm9vdCI6IiJ9