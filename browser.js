(function (React, ReactDOM, Inputmask) {
    'use strict';

    function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

    var React__default = /*#__PURE__*/_interopDefaultLegacy(React);
    var Inputmask__default = /*#__PURE__*/_interopDefaultLegacy(Inputmask);

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation.

    Permission to use, copy, modify, and/or distribute this software for any
    purpose with or without fee is hereby granted.

    THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
    REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
    AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
    INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
    LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
    OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
    PERFORMANCE OF THIS SOFTWARE.
    ***************************************************************************** */

    /* global Reflect, Promise */
    var _extendStatics = function extendStatics(d, b) {
      _extendStatics = Object.setPrototypeOf || {
        __proto__: []
      } instanceof Array && function (d, b) {
        d.__proto__ = b;
      } || function (d, b) {
        for (var p in b) {
          if (b.hasOwnProperty(p)) d[p] = b[p];
        }
      };

      return _extendStatics(d, b);
    };

    function __extends(d, b) {
      _extendStatics(d, b);

      function __() {
        this.constructor = d;
      }

      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var _assign = function __assign() {
      _assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];

          for (var p in s) {
            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
          }
        }

        return t;
      };

      return _assign.apply(this, arguments);
    };
    function __awaiter(thisArg, _arguments, P, generator) {
      function adopt(value) {
        return value instanceof P ? value : new P(function (resolve) {
          resolve(value);
        });
      }

      return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }

        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }

        function step(result) {
          result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }

        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    }
    function __generator(thisArg, body) {
      var _ = {
        label: 0,
        sent: function sent() {
          if (t[0] & 1) throw t[1];
          return t[1];
        },
        trys: [],
        ops: []
      },
          f,
          y,
          t,
          g;
      return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
      }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
        return this;
      }), g;

      function verb(n) {
        return function (v) {
          return step([n, v]);
        };
      }

      function step(op) {
        if (f) throw new TypeError("Generator is already executing.");

        while (_) {
          try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];

            switch (op[0]) {
              case 0:
              case 1:
                t = op;
                break;

              case 4:
                _.label++;
                return {
                  value: op[1],
                  done: false
                };

              case 5:
                _.label++;
                y = op[1];
                op = [0];
                continue;

              case 7:
                op = _.ops.pop();

                _.trys.pop();

                continue;

              default:
                if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                  _ = 0;
                  continue;
                }

                if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                  _.label = op[1];
                  break;
                }

                if (op[0] === 6 && _.label < t[1]) {
                  _.label = t[1];
                  t = op;
                  break;
                }

                if (t && _.label < t[2]) {
                  _.label = t[2];

                  _.ops.push(op);

                  break;
                }

                if (t[2]) _.ops.pop();

                _.trys.pop();

                continue;
            }

            op = body.call(thisArg, _);
          } catch (e) {
            op = [6, e];
            y = 0;
          } finally {
            f = t = 0;
          }
        }

        if (op[0] & 5) throw op[1];
        return {
          value: op[0] ? op[1] : void 0,
          done: true
        };
      }
    }

    function styleInject(css, ref) {
      if (ref === void 0) ref = {};
      var insertAt = ref.insertAt;

      if (!css || typeof document === 'undefined') {
        return;
      }

      var head = document.head || document.getElementsByTagName('head')[0];
      var style = document.createElement('style');
      style.type = 'text/css';

      if (insertAt === 'top') {
        if (head.firstChild) {
          head.insertBefore(style, head.firstChild);
        } else {
          head.appendChild(style);
        }
      } else {
        head.appendChild(style);
      }

      if (style.styleSheet) {
        style.styleSheet.cssText = css;
      } else {
        style.appendChild(document.createTextNode(css));
      }
    }

    var css_248z = ".font-size-150{font-size:12px !important;line-height:16px !important}.font-size-175{font-size:14px !important;line-height:20px !important}.font-size-200{font-size:16px !important;line-height:24px !important}.font-size-225,.button-t15{font-size:18px !important;line-height:24px !important}.font-size-250{font-size:20px !important;line-height:28px !important}.font-size-300{font-size:24px !important;line-height:32px !important}.font-size-400{font-size:32px !important;line-height:40px !important}.font-size-500{font-size:40px !important;line-height:48px !important}.font-size-700{font-size:56px !important;line-height:64px !important}.font-size-800{font-size:64px !important;line-height:72px !important}h1,.h1{font-size:64px !important;line-height:72px !important}h2,.h2{font-size:56px !important;line-height:64px !important}h3,.h3{font-size:40px !important;line-height:48px !important}h4,.h4{font-size:32px !important;line-height:40px !important}h5,.h5{font-size:24px !important;line-height:32px !important}h6,.h6{font-size:20px !important;line-height:28px !important}@media (max-width: 1199.98px), (max-width: 1366px) and (max-height: 768px){.font-size-150{font-size:12px !important;line-height:16px !important}.font-size-175{font-size:14px !important;line-height:20px !important}.font-size-200{font-size:14px !important;line-height:20px !important}.font-size-225,.button-t15{font-size:16px !important;line-height:24px !important}.font-size-250{font-size:18px !important;line-height:24px !important}.font-size-300{font-size:20px !important;line-height:28px !important}.font-size-400{font-size:24px !important;line-height:32px !important}.font-size-500{font-size:28px !important;line-height:36px !important}.font-size-700{font-size:40px !important;line-height:48px !important}.font-size-800{font-size:48px !important;line-height:56px !important}h1,.h1{font-size:48px !important;line-height:56px !important}h2,.h2{font-size:40px !important;line-height:48px !important}h3,.h3{font-size:28px !important;line-height:36px !important}h4,.h4{font-size:24px !important;line-height:32px !important}h5,.h5{font-size:20px !important;line-height:28px !important}h6,.h6{font-size:18px !important;line-height:24px !important}}@media (max-width: 991.98px){.font-size-150{font-size:12px !important;line-height:16px !important}.font-size-175{font-size:14px !important;line-height:20px !important}.font-size-200{font-size:14px !important;line-height:20px !important}.font-size-225,.button-t15{font-size:16px !important;line-height:24px !important}.font-size-250{font-size:18px !important;line-height:24px !important}.font-size-300{font-size:20px !important;line-height:28px !important}.font-size-400{font-size:24px !important;line-height:32px !important}.font-size-500{font-size:28px !important;line-height:36px !important}.font-size-700{font-size:40px !important;line-height:48px !important}.font-size-800{font-size:48px !important;line-height:56px !important}h1,.h1{font-size:48px !important;line-height:56px !important}h2,.h2{font-size:40px !important;line-height:48px !important}h3,.h3{font-size:28px !important;line-height:36px !important}h4,.h4{font-size:24px !important;line-height:32px !important}h5,.h5{font-size:20px !important;line-height:28px !important}h6,.h6{font-size:18px !important;line-height:24px !important}}@media (max-width: 767.98px){.font-size-150{font-size:12px !important;line-height:16px !important}.font-size-175{font-size:12px !important;line-height:20px !important}.font-size-200{font-size:14px !important;line-height:20px !important}.font-size-225,.button-t15{font-size:14px !important;line-height:20px !important}.font-size-250{font-size:16px !important;line-height:24px !important}.font-size-300{font-size:18px !important;line-height:24px !important}.font-size-400{font-size:20px !important;line-height:28px !important}.font-size-500{font-size:24px !important;line-height:32px !important}.font-size-700{font-size:28px !important;line-height:36px !important}.font-size-800{font-size:32px !important;line-height:40px !important}h1,.h1{font-size:32px !important;line-height:40px !important}h2,.h2{font-size:28px !important;line-height:36px !important}h3,.h3{font-size:24px !important;line-height:32px !important}h4,.h4{font-size:20px !important;line-height:28px !important}h5,.h5{font-size:18px !important;line-height:24px !important}h6,.h6{font-size:16px !important;line-height:24px !important}}@media (max-width: 575.98px){.font-size-150{font-size:12px !important;line-height:16px !important}.font-size-175{font-size:12px !important;line-height:20px !important}.font-size-200{font-size:14px !important;line-height:20px !important}.font-size-225,.button-t15{font-size:14px !important;line-height:20px !important}.font-size-250{font-size:16px !important;line-height:24px !important}.font-size-300{font-size:18px !important;line-height:24px !important}.font-size-400{font-size:20px !important;line-height:28px !important}.font-size-500{font-size:24px !important;line-height:32px !important}.font-size-700{font-size:28px !important;line-height:36px !important}.font-size-800{font-size:32px !important;line-height:40px !important}h1,.h1{font-size:32px !important;line-height:40px !important}h2,.h2{font-size:28px !important;line-height:36px !important}h3,.h3{font-size:24px !important;line-height:32px !important}h4,.h4{font-size:20px !important;line-height:28px !important}h5,.h5{font-size:18px !important;line-height:24px !important}h6,.h6{font-size:16px !important;line-height:24px !important}}.button-t15{display:inline-block;padding:12px 24px;font-family:TochkaSans,Avenir,Source Sans Pro,Helvetica,Segoe UI,Nimbus Sans No5 T CY,sans-serif;font-weight:500;color:#333;text-align:center;white-space:null;vertical-align:middle;user-select:none;background-color:transparent;border:none;border-radius:3px;transition:color 0.15s ease-in-out,background-color 0.15s ease-in-out}.button-t15:hover{text-decoration:none}.button-t15:focus,.button-t15.focus{outline:0;text-decoration:none}.button-t15.disabled,.button-t15:disabled{pointer-events:none;opacity:.8}.button-t15:not(:disabled):not(.disabled){cursor:pointer}a.button-t15.disabled,fieldset:disabled a.button-t15{pointer-events:none}.button-t15_primary{color:#fff;background-color:#7658e0}.button-t15_primary.disabled,.button-t15_primary:disabled{cursor:not-allowed}.button-t15_primary:not(:disabled):not(.disabled).active,.button-t15_primary:not(:disabled):not(.disabled):active,.button-t15_primary:not(:disabled):not(.disabled):hover,.button-t15_primary:not(:disabled):not(.disabled):focus{background-color:#6b4bde}.button-t15_secondary{color:#7658e0;background-color:#e9e7f8}.button-t15_secondary.disabled,.button-t15_secondary:disabled{cursor:not-allowed}.button-t15_secondary:not(:disabled):not(.disabled).active,.button-t15_secondary:not(:disabled):not(.disabled):active,.button-t15_secondary:not(:disabled):not(.disabled):hover,.button-t15_secondary:not(:disabled):not(.disabled):focus{background-color:#dedbf5}.button-t15_outline-primary{color:#7658e0;border:#7658e0 1px solid}.button-t15_outline-primary.disabled,.button-t15_outline-primary:disabled{cursor:not-allowed}.button-t15_outline-primary:not(:disabled):not(.disabled).active,.button-t15_outline-primary:not(:disabled):not(.disabled):active,.button-t15_outline-primary:not(:disabled):not(.disabled):hover,.button-t15_outline-primary:not(:disabled):not(.disabled):focus{color:#fff;background-color:#6b4bde;border-color:#7658e0}.button-t15_outline-secondary{color:#e9e7f8;border:#e9e7f8 1px solid}.button-t15_outline-secondary.disabled,.button-t15_outline-secondary:disabled{cursor:not-allowed}.button-t15_outline-secondary:not(:disabled):not(.disabled).active,.button-t15_outline-secondary:not(:disabled):not(.disabled):active,.button-t15_outline-secondary:not(:disabled):not(.disabled):hover,.button-t15_outline-secondary:not(:disabled):not(.disabled):focus{color:#7658e0;background-color:#dedbf5;border-color:#e9e7f8}.button-t15_block{display:block;padding:12px 0;width:100%}.button-t15_link{color:#7658e0;background-color:transparent;border:transparent;border-radius:0}.button-t15_link.disabled,.button-t15_link:disabled{cursor:not-allowed}.button-t15_link:not(:disabled):not(.disabled).active,.button-t15_link:not(:disabled):not(.disabled):active,.button-t15_link:not(:disabled):not(.disabled):hover,.button-t15_link:not(:disabled):not(.disabled):focus{color:#6b4bde;background-color:transparent;border:none}input[type='submit'].button-t15_block,input[type='reset'].button-t15_block,input[type='button'].button-t15_block{width:100%}\n";
    styleInject(css_248z);

    var __extends$1 = undefined && undefined.__extends || function () {
      var _extendStatics = function extendStatics(d, b) {
        _extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function (d, b) {
          d.__proto__ = b;
        } || function (d, b) {
          for (var p in b) {
            if (b.hasOwnProperty(p)) d[p] = b[p];
          }
        };

        return _extendStatics(d, b);
      };

      return function (d, b) {
        _extendStatics(d, b);

        function __() {
          this.constructor = d;
        }

        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();

    var ButtonT15 =
    /** @class */
    function (_super) {
      __extends$1(ButtonT15, _super);

      function ButtonT15() {
        return _super !== null && _super.apply(this, arguments) || this;
      }

      ButtonT15.prototype.render = function () {
        var _a = this.props,
            text = _a.text,
            active = _a.active,
            disabled = _a.disabled,
            block = _a.block,
            color = _a.color,
            outline = _a.outline,
            link = _a.link;
        var children = this.props.children || text;
        var classNames = [];
        classNames.push('button-t15');

        if (active) {
          classNames.push('active');
        }

        if (disabled) {
          classNames.push('disabled');
        }

        if (block) {
          classNames.push('button-t15_block');
        }

        classNames.push("button-t15_" + (outline ? 'outline-' : '') + (color || 'primary'));

        if (link) {
          classNames.push('button-t15_link');
        }

        return React__default['default'].createElement("button", {
          className: classNames.join(' '),
          onClick: this.props.onClick
        }, children);
      };

      ButtonT15.defaultProps = {
        text: '',
        active: false,
        disabled: false,
        block: false,
        color: 'primary',
        outline: false,
        link: false
      };
      return ButtonT15;
    }(React__default['default'].Component);

    var css_248z$1 = ".font-size-150{font-size:12px !important;line-height:16px !important}.font-size-175,.button-chip{font-size:14px !important;line-height:20px !important}.font-size-200{font-size:16px !important;line-height:24px !important}.font-size-225{font-size:18px !important;line-height:24px !important}.font-size-250{font-size:20px !important;line-height:28px !important}.font-size-300{font-size:24px !important;line-height:32px !important}.font-size-400{font-size:32px !important;line-height:40px !important}.font-size-500{font-size:40px !important;line-height:48px !important}.font-size-700{font-size:56px !important;line-height:64px !important}.font-size-800{font-size:64px !important;line-height:72px !important}h1,.h1{font-size:64px !important;line-height:72px !important}h2,.h2{font-size:56px !important;line-height:64px !important}h3,.h3{font-size:40px !important;line-height:48px !important}h4,.h4{font-size:32px !important;line-height:40px !important}h5,.h5{font-size:24px !important;line-height:32px !important}h6,.h6{font-size:20px !important;line-height:28px !important}@media (max-width: 1199.98px), (max-width: 1366px) and (max-height: 768px){.font-size-150{font-size:12px !important;line-height:16px !important}.font-size-175,.button-chip{font-size:14px !important;line-height:20px !important}.font-size-200{font-size:14px !important;line-height:20px !important}.font-size-225{font-size:16px !important;line-height:24px !important}.font-size-250{font-size:18px !important;line-height:24px !important}.font-size-300{font-size:20px !important;line-height:28px !important}.font-size-400{font-size:24px !important;line-height:32px !important}.font-size-500{font-size:28px !important;line-height:36px !important}.font-size-700{font-size:40px !important;line-height:48px !important}.font-size-800{font-size:48px !important;line-height:56px !important}h1,.h1{font-size:48px !important;line-height:56px !important}h2,.h2{font-size:40px !important;line-height:48px !important}h3,.h3{font-size:28px !important;line-height:36px !important}h4,.h4{font-size:24px !important;line-height:32px !important}h5,.h5{font-size:20px !important;line-height:28px !important}h6,.h6{font-size:18px !important;line-height:24px !important}}@media (max-width: 991.98px){.font-size-150{font-size:12px !important;line-height:16px !important}.font-size-175,.button-chip{font-size:14px !important;line-height:20px !important}.font-size-200{font-size:14px !important;line-height:20px !important}.font-size-225{font-size:16px !important;line-height:24px !important}.font-size-250{font-size:18px !important;line-height:24px !important}.font-size-300{font-size:20px !important;line-height:28px !important}.font-size-400{font-size:24px !important;line-height:32px !important}.font-size-500{font-size:28px !important;line-height:36px !important}.font-size-700{font-size:40px !important;line-height:48px !important}.font-size-800{font-size:48px !important;line-height:56px !important}h1,.h1{font-size:48px !important;line-height:56px !important}h2,.h2{font-size:40px !important;line-height:48px !important}h3,.h3{font-size:28px !important;line-height:36px !important}h4,.h4{font-size:24px !important;line-height:32px !important}h5,.h5{font-size:20px !important;line-height:28px !important}h6,.h6{font-size:18px !important;line-height:24px !important}}@media (max-width: 767.98px){.font-size-150{font-size:12px !important;line-height:16px !important}.font-size-175,.button-chip{font-size:12px !important;line-height:20px !important}.font-size-200{font-size:14px !important;line-height:20px !important}.font-size-225{font-size:14px !important;line-height:20px !important}.font-size-250{font-size:16px !important;line-height:24px !important}.font-size-300{font-size:18px !important;line-height:24px !important}.font-size-400{font-size:20px !important;line-height:28px !important}.font-size-500{font-size:24px !important;line-height:32px !important}.font-size-700{font-size:28px !important;line-height:36px !important}.font-size-800{font-size:32px !important;line-height:40px !important}h1,.h1{font-size:32px !important;line-height:40px !important}h2,.h2{font-size:28px !important;line-height:36px !important}h3,.h3{font-size:24px !important;line-height:32px !important}h4,.h4{font-size:20px !important;line-height:28px !important}h5,.h5{font-size:18px !important;line-height:24px !important}h6,.h6{font-size:16px !important;line-height:24px !important}}@media (max-width: 575.98px){.font-size-150{font-size:12px !important;line-height:16px !important}.font-size-175,.button-chip{font-size:12px !important;line-height:20px !important}.font-size-200{font-size:14px !important;line-height:20px !important}.font-size-225{font-size:14px !important;line-height:20px !important}.font-size-250{font-size:16px !important;line-height:24px !important}.font-size-300{font-size:18px !important;line-height:24px !important}.font-size-400{font-size:20px !important;line-height:28px !important}.font-size-500{font-size:24px !important;line-height:32px !important}.font-size-700{font-size:28px !important;line-height:36px !important}.font-size-800{font-size:32px !important;line-height:40px !important}h1,.h1{font-size:32px !important;line-height:40px !important}h2,.h2{font-size:28px !important;line-height:36px !important}h3,.h3{font-size:24px !important;line-height:32px !important}h4,.h4{font-size:20px !important;line-height:28px !important}h5,.h5{font-size:18px !important;line-height:24px !important}h6,.h6{font-size:16px !important;line-height:24px !important}}.button-chip{display:inline-block;padding:8px 16px;font-family:TochkaSans,Avenir,Source Sans Pro,Helvetica,Segoe UI,Nimbus Sans No5 T CY,sans-serif;font-weight:400;color:#333;text-align:center;white-space:null;vertical-align:middle;user-select:none;background-color:transparent;border:1px solid #eee;border-radius:6px;transition:color 0.15s ease-in-out,background-color 0.15s ease-in-out}.button-chip:hover{text-decoration:none}.button-chip:focus,.button-chip.focus{outline:0;text-decoration:none}.button-chip.disabled,.button-chip:disabled{cursor:not-allowed;pointer-events:none;color:#333;background-color:#eee;border-color:#eee;opacity:.8}.button-chip.active{color:#fff;background-color:#7658e0;border-color:#7658e0}.button-chip:not(:disabled):not(.disabled){cursor:pointer}.button-chip:not(:disabled):not(.disabled):hover{color:#333;background-color:#eee;border-color:#eee}.button-chip:not(:disabled):not(.disabled).active:hover,.button-chip:not(:disabled):not(.disabled).active:focus{color:#fff;background-color:#6b4bde;border-color:#6b4bde}a.button-chip.disabled,fieldset:disabled a.button-chip{pointer-events:none}.button-chip_block{display:block;padding:8px 0;width:100%}input[type='submit'].button-chip_block,input[type='reset'].button-chip_block,input[type='button'].button-chip_block{width:100%}\n";
    styleInject(css_248z$1);

    var __extends$2 = undefined && undefined.__extends || function () {
      var _extendStatics = function extendStatics(d, b) {
        _extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function (d, b) {
          d.__proto__ = b;
        } || function (d, b) {
          for (var p in b) {
            if (b.hasOwnProperty(p)) d[p] = b[p];
          }
        };

        return _extendStatics(d, b);
      };

      return function (d, b) {
        _extendStatics(d, b);

        function __() {
          this.constructor = d;
        }

        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();

    var ButtonChip =
    /** @class */
    function (_super) {
      __extends$2(ButtonChip, _super);

      function ButtonChip() {
        return _super !== null && _super.apply(this, arguments) || this;
      }

      ButtonChip.prototype.render = function () {
        var _a = this.props,
            text = _a.text,
            active = _a.active,
            disabled = _a.disabled,
            block = _a.block;
        var children = this.props.children || text;
        var classNames = [];
        classNames.push('button-chip');

        if (active) {
          classNames.push('active');
        }

        if (disabled) {
          classNames.push('disabled');
        }

        if (block) {
          classNames.push('button-chip_block');
        }

        return React__default['default'].createElement("button", {
          className: classNames.join(' '),
          onClick: this.props.onClick
        }, children);
      };

      ButtonChip.defaultProps = {
        text: '',
        active: false,
        disabled: false,
        block: false
      };
      return ButtonChip;
    }(React__default['default'].Component);

    var css_248z$2 = ".font-size-150{font-size:12px !important;line-height:16px !important}.font-size-175,.input_wrap-row.row>.col.input__label_col,.input_wrap-row.row>.col>.input__label_col,.input_wrap-row.row>.input__label_col[class*='col-'],.input_wrap-row.row>[class*='col-']>.input__label_col,.input_wrap .input__label{font-size:14px !important;line-height:20px !important}.font-size-200{font-size:16px !important;line-height:24px !important}.font-size-225,.input__label,.input__label_col,.input__form-control__append-text{font-size:18px !important;line-height:24px !important}.font-size-250{font-size:20px !important;line-height:28px !important}.font-size-300{font-size:24px !important;line-height:32px !important}.font-size-400{font-size:32px !important;line-height:40px !important}.font-size-500{font-size:40px !important;line-height:48px !important}.font-size-700{font-size:56px !important;line-height:64px !important}.font-size-800{font-size:64px !important;line-height:72px !important}h1,.h1{font-size:64px !important;line-height:72px !important}h2,.h2{font-size:56px !important;line-height:64px !important}h3,.h3{font-size:40px !important;line-height:48px !important}h4,.h4{font-size:32px !important;line-height:40px !important}h5,.h5{font-size:24px !important;line-height:32px !important}h6,.h6{font-size:20px !important;line-height:28px !important}@media (max-width: 1199.98px), (max-width: 1366px) and (max-height: 768px){.font-size-150{font-size:12px !important;line-height:16px !important}.font-size-175,.input_wrap-row.row>.col.input__label_col,.input_wrap-row.row>.col>.input__label_col,.input_wrap-row.row>.input__label_col[class*='col-'],.input_wrap-row.row>[class*='col-']>.input__label_col,.input_wrap .input__label{font-size:14px !important;line-height:20px !important}.font-size-200{font-size:14px !important;line-height:20px !important}.font-size-225,.input__label,.input__label_col,.input__form-control__append-text{font-size:16px !important;line-height:24px !important}.font-size-250{font-size:18px !important;line-height:24px !important}.font-size-300{font-size:20px !important;line-height:28px !important}.font-size-400{font-size:24px !important;line-height:32px !important}.font-size-500{font-size:28px !important;line-height:36px !important}.font-size-700{font-size:40px !important;line-height:48px !important}.font-size-800{font-size:48px !important;line-height:56px !important}h1,.h1{font-size:48px !important;line-height:56px !important}h2,.h2{font-size:40px !important;line-height:48px !important}h3,.h3{font-size:28px !important;line-height:36px !important}h4,.h4{font-size:24px !important;line-height:32px !important}h5,.h5{font-size:20px !important;line-height:28px !important}h6,.h6{font-size:18px !important;line-height:24px !important}}@media (max-width: 991.98px){.font-size-150{font-size:12px !important;line-height:16px !important}.font-size-175,.input_wrap-row.row>.col.input__label_col,.input_wrap-row.row>.col>.input__label_col,.input_wrap-row.row>.input__label_col[class*='col-'],.input_wrap-row.row>[class*='col-']>.input__label_col,.input_wrap .input__label{font-size:14px !important;line-height:20px !important}.font-size-200{font-size:14px !important;line-height:20px !important}.font-size-225,.input__label,.input__label_col,.input__form-control__append-text{font-size:16px !important;line-height:24px !important}.font-size-250{font-size:18px !important;line-height:24px !important}.font-size-300{font-size:20px !important;line-height:28px !important}.font-size-400{font-size:24px !important;line-height:32px !important}.font-size-500{font-size:28px !important;line-height:36px !important}.font-size-700{font-size:40px !important;line-height:48px !important}.font-size-800{font-size:48px !important;line-height:56px !important}h1,.h1{font-size:48px !important;line-height:56px !important}h2,.h2{font-size:40px !important;line-height:48px !important}h3,.h3{font-size:28px !important;line-height:36px !important}h4,.h4{font-size:24px !important;line-height:32px !important}h5,.h5{font-size:20px !important;line-height:28px !important}h6,.h6{font-size:18px !important;line-height:24px !important}}@media (max-width: 767.98px){.font-size-150{font-size:12px !important;line-height:16px !important}.font-size-175,.input_wrap-row.row>.col.input__label_col,.input_wrap-row.row>.col>.input__label_col,.input_wrap-row.row>.input__label_col[class*='col-'],.input_wrap-row.row>[class*='col-']>.input__label_col,.input_wrap .input__label{font-size:12px !important;line-height:20px !important}.font-size-200{font-size:14px !important;line-height:20px !important}.font-size-225,.input__label,.input__label_col,.input__form-control__append-text{font-size:14px !important;line-height:20px !important}.font-size-250{font-size:16px !important;line-height:24px !important}.font-size-300{font-size:18px !important;line-height:24px !important}.font-size-400{font-size:20px !important;line-height:28px !important}.font-size-500{font-size:24px !important;line-height:32px !important}.font-size-700{font-size:28px !important;line-height:36px !important}.font-size-800{font-size:32px !important;line-height:40px !important}h1,.h1{font-size:32px !important;line-height:40px !important}h2,.h2{font-size:28px !important;line-height:36px !important}h3,.h3{font-size:24px !important;line-height:32px !important}h4,.h4{font-size:20px !important;line-height:28px !important}h5,.h5{font-size:18px !important;line-height:24px !important}h6,.h6{font-size:16px !important;line-height:24px !important}}@media (max-width: 575.98px){.font-size-150{font-size:12px !important;line-height:16px !important}.font-size-175,.input_wrap-row.row>.col.input__label_col,.input_wrap-row.row>.col>.input__label_col,.input_wrap-row.row>.input__label_col[class*='col-'],.input_wrap-row.row>[class*='col-']>.input__label_col,.input_wrap .input__label{font-size:12px !important;line-height:20px !important}.font-size-200{font-size:14px !important;line-height:20px !important}.font-size-225,.input__label,.input__label_col,.input__form-control__append-text{font-size:14px !important;line-height:20px !important}.font-size-250{font-size:16px !important;line-height:24px !important}.font-size-300{font-size:18px !important;line-height:24px !important}.font-size-400{font-size:20px !important;line-height:28px !important}.font-size-500{font-size:24px !important;line-height:32px !important}.font-size-700{font-size:28px !important;line-height:36px !important}.font-size-800{font-size:32px !important;line-height:40px !important}h1,.h1{font-size:32px !important;line-height:40px !important}h2,.h2{font-size:28px !important;line-height:36px !important}h3,.h3{font-size:24px !important;line-height:32px !important}h4,.h4{font-size:20px !important;line-height:28px !important}h5,.h5{font-size:18px !important;line-height:24px !important}h6,.h6{font-size:16px !important;line-height:24px !important}}.input__form-control{display:block;width:100%;height:56px;padding:16px 20px;font-family:TochkaSans,Avenir,Source Sans Pro,Helvetica,Segoe UI,Nimbus Sans No5 T CY,sans-serif;font-weight:400;font-size:16px !important;line-height:24px !important;color:#333;background-color:#fff;background-clip:padding-box;border:1px solid #e1e1e1;border-radius:6px;transition:border-color 0.15s ease-in-out}@media (max-width: 1199.98px), (max-width: 1366px) and (max-height: 768px){.input__form-control{height:52px}}@media (max-width: 767.98px){.input__form-control{height:44px;padding:12px 16px}}.input__form-control::-ms-expand{background-color:transparent;border:0}.input__form-control:-moz-focusring{color:transparent;text-shadow:0 0 0 #333}.input__form-control:focus{color:#333;background-color:#fff;border-color:#333;outline:0}.input__form-control::placeholder{color:#b2b2b2;opacity:1}.input__form-control:disabled,.input__form-control[readonly]{background-color:#f6f6f6;opacity:1}input[type='date'].input__form-control,input[type='time'].input__form-control,input[type='datetime-local'].input__form-control,input[type='month'].input__form-control{appearance:none}select.input__form-control:focus::-ms-value{color:#333;background-color:#fff}.input__form-control-file,.input__form-control-range{display:block;width:100%}.input__form-control.is-valid{border-color:#25d22d}.input__form-control.is-valid:focus{border-color:#25d22d}.input__form-control.is-invalid{color:#d22d25;border-color:#d22d25}.input__form-control.is-invalid:focus{color:#d22d25;border-color:#d22d25}.input__form-control.is-invalid::placeholder{color:#d22d25}.input__label{display:block;margin-bottom:8px;font-family:TochkaSans,Avenir,Source Sans Pro,Helvetica,Segoe UI,Nimbus Sans No5 T CY,sans-serif;font-weight:500}.input__label_col{margin-bottom:0;padding-top:16px;padding-bottom:16px;font-family:TochkaSans,Avenir,Source Sans Pro,Helvetica,Segoe UI,Nimbus Sans No5 T CY,sans-serif;font-weight:500}@media (max-width: 1199.98px), (max-width: 1366px) and (max-height: 768px){.input__label_col{padding-top:14px;padding-bottom:14px}}@media (max-width: 767.98px){.input__label_col{padding-top:10px;padding-bottom:10px}}select.input__form-control[size],select.input__form-control[multiple]{height:auto}textarea.input__form-control{height:auto}.input__wrapper{position:relative;display:flex;flex-wrap:wrap;align-items:stretch;width:100%}.input__wrapper>.input__form-control{position:relative;flex:1 1 auto;width:1%;min-width:0;margin-bottom:0}.input__wrapper>.input__form-control+.input__form-control{margin-left:-1px}.input__wrapper>.input__form-control:not(:last-child){border-right:0;border-top-right-radius:0;border-bottom-right-radius:0}.input__wrapper>.input__form-control:not(:first-child){border-left:0;border-top-left-radius:0;border-bottom-left-radius:0}.input__form-control__append{display:flex;margin-left:-1px}.input__form-control:focus+.input__form-control__append .input__form-control__append-text{color:#333;background-color:#fff;border-color:#333}.input__form-control:disabled+.input__form-control__append .input__form-control__append-text,.input__form-control[readonly]+.input__form-control__append .input__form-control__append-text{background-color:#f6f6f6}.input__form-control.is-valid+.input__form-control__append .input__form-control__append-text{border-color:#25d22d}.input__form-control.is-invalid+.input__form-control__append .input__form-control__append-text{color:#d22d25;border-color:#d22d25}.input__form-control__append-text{display:flex;align-items:center;padding:15px 20px;margin-bottom:0;height:56px;font-family:TochkaSans,Avenir,Source Sans Pro,Helvetica,Segoe UI,Nimbus Sans No5 T CY,sans-serif;font-weight:500;color:#333;text-align:center;white-space:nowrap;background-color:#fff;border:1px solid #e1e1e1;border-radius:6px;transition:border-color 0.15s ease-in-out}@media (max-width: 1199.98px), (max-width: 1366px) and (max-height: 768px){.input__form-control__append-text{height:52px;padding:13px 20px}}@media (max-width: 767.98px){.input__form-control__append-text{height:44px;padding:9px 16px}}.input__wrapper>.input__form-control__append:not(:last-child)>.input__form-control__append-text,.input__wrapper>.input__form-control__append:last-child>.input__form-control__append-text:not(:last-child){border-right:0;border-top-right-radius:0;border-bottom-right-radius:0}.input__wrapper>.input__form-control__append>.input__form-control__append-text{border-left:0;border-top-left-radius:0;border-bottom-left-radius:0}.input_wrap-row.row{display:flex;flex-wrap:wrap;margin-right:0;margin-left:0}.input_wrap-row.row>.col,.input_wrap-row.row>[class*='col-']{padding-right:0;padding-left:0}.input_wrap-row.row>.col.input__label_col,.input_wrap-row.row>.col>.input__label_col,.input_wrap-row.row>[class*='col-'].input__label_col,.input_wrap-row.row>[class*='col-']>.input__label_col{color:#747474;border:1px solid #e1e1e1;border-radius:6px;font-weight:400;padding:17px 20px}@media (max-width: 1199.98px), (max-width: 1366px) and (max-height: 768px){.input_wrap-row.row>.col.input__label_col,.input_wrap-row.row>.col>.input__label_col,.input_wrap-row.row>[class*='col-'].input__label_col,.input_wrap-row.row>[class*='col-']>.input__label_col{padding:15px 16px}}@media (max-width: 767.98px){.input_wrap-row.row>.col.input__label_col,.input_wrap-row.row>.col>.input__label_col,.input_wrap-row.row>[class*='col-'].input__label_col,.input_wrap-row.row>[class*='col-']>.input__label_col{padding:11px 16px}}.input_wrap-row.row>.col.input__label_col.disabled,.input_wrap-row.row>.col>.input__label_col.disabled,.input_wrap-row.row>[class*='col-'].input__label_col.disabled,.input_wrap-row.row>[class*='col-']>.input__label_col.disabled{background-color:#f6f6f6}.input_wrap-row.row>.col>.input__form-control,.input_wrap-row.row>[class*='col-']>.input__form-control{font-weight:500}.input_wrap .input__label{position:absolute;z-index:1;color:#747474;margin-top:16px;margin-right:20px;margin-left:20px;margin-bottom:0;font-weight:400}@media (max-width: 767.98px){.input_wrap .input__label{margin-top:12px;margin-right:16px;margin-left:16px;margin-bottom:0}}.input_wrap .input__wrapper{height:76px}@media (max-width: 1199.98px), (max-width: 1366px) and (max-height: 768px){.input_wrap .input__wrapper{height:72px}}@media (max-width: 767.98px){.input_wrap .input__wrapper{height:64px}}.input_wrap .input__wrapper .input__form-control__append-text{height:76px;padding-top:25px;padding-bottom:25px}@media (max-width: 1199.98px), (max-width: 1366px) and (max-height: 768px){.input_wrap .input__wrapper .input__form-control__append-text{height:72px;padding-top:23px;padding-bottom:23px}}@media (max-width: 767.98px){.input_wrap .input__wrapper .input__form-control__append-text{height:64px;padding-top:19px;padding-bottom:19px}}.input_wrap .input__wrapper .input__form-control{height:76px;padding-top:36px;font-weight:500}@media (max-width: 1199.98px), (max-width: 1366px) and (max-height: 768px){.input_wrap .input__wrapper .input__form-control{height:72px}}@media (max-width: 767.98px){.input_wrap .input__wrapper .input__form-control{height:64px;padding-top:32px}}.input-group>.input_wrap:not(:first-child) .input__label_col,.input-group>.input_wrap-row:not(:first-child) .input__label_col{border-top-right-radius:0;border-top-left-radius:0}.input-group>.input_wrap:not(:first-child) .input__form-control,.input-group>.input_wrap-row:not(:first-child) .input__form-control{border-top-right-radius:0;border-top-left-radius:0}.input-group>.input_wrap:not(:first-child) .input__form-control__append .input__form-control__append-text:last-child,.input-group>.input_wrap-row:not(:first-child) .input__form-control__append .input__form-control__append-text:last-child{border-top-right-radius:0;border-top-left-radius:0}.input-group>.input_wrap:not(:last-child) .input__label_col,.input-group>.input_wrap-row:not(:last-child) .input__label_col{border-bottom-right-radius:0;border-bottom-left-radius:0}.input-group>.input_wrap:not(:last-child) .input__form-control,.input-group>.input_wrap-row:not(:last-child) .input__form-control{border-bottom-right-radius:0;border-bottom-left-radius:0}.input-group>.input_wrap:not(:last-child) .input__form-control__append .input__form-control__append-text:last-child,.input-group>.input_wrap-row:not(:last-child) .input__form-control__append .input__form-control__append-text:last-child{border-bottom-right-radius:0;border-bottom-left-radius:0}\n";
    styleInject(css_248z$2);

    var __extends$3 = undefined && undefined.__extends || function () {
      var _extendStatics = function extendStatics(d, b) {
        _extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function (d, b) {
          d.__proto__ = b;
        } || function (d, b) {
          for (var p in b) {
            if (b.hasOwnProperty(p)) d[p] = b[p];
          }
        };

        return _extendStatics(d, b);
      };

      return function (d, b) {
        _extendStatics(d, b);

        function __() {
          this.constructor = d;
        }

        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();

    var __assign = undefined && undefined.__assign || function () {
      __assign = Object.assign || function (t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];

          for (var p in s) {
            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
          }
        }

        return t;
      };

      return __assign.apply(this, arguments);
    };

    var Input =
    /** @class */
    function (_super) {
      __extends$3(Input, _super);

      function Input(props) {
        var _this = _super.call(this, props) || this;

        _this.handleChange = function (event) {
          var value = event.target.value;

          _this.setState({
            value: value
          });

          _this.props.vModal(value);
        };

        _this.input = React__default['default'].createRef();
        _this.state = {
          value: _this.props.value
        };
        return _this;
      }

      Input.prototype.componentDidMount = function () {
        if (this.props.mask && this.input) {
          Inputmask__default['default'](__assign({
            showMaskOnHover: false
          }, this.props.mask)).mask(this.input.current);
        }
      };

      Input.prototype.shouldComponentUpdate = function (nextProps, nextState) {
        if (nextProps.value !== undefined) {
          if (this.state.value !== nextProps.value) {
            this.setState({
              value: nextProps.value
            });
          }
        }

        return true;
      };

      Input.prototype.render = function () {
        var _a = this.props,
            id = _a.id,
            disabled = _a.disabled,
            label = _a.label,
            placeholder = _a.placeholder,
            inline = _a.inline,
            inlineProportion = _a.inlineProportion,
            wrap = _a.wrap,
            invalid = _a.invalid,
            valid = _a.valid;
        var inputValidClass = ' ' + (invalid && !valid ? 'is-invalid' : valid && !invalid ? 'is-valid' : '');
        var inputStyle = inline && wrap ? {
          borderTopLeftRadius: 0,
          borderBottomLeftRadius: 0
        } : {};
        var input = React__default['default'].createElement("input", {
          id: id,
          type: "text",
          disabled: disabled,
          placeholder: placeholder,
          value: this.state.value,
          onChange: this.handleChange,
          ref: this.input,
          className: 'input__form-control' + inputValidClass,
          style: __assign({}, inputStyle)
        });
        var append = this.props.append ? React__default['default'].createElement("div", {
          className: "input__form-control__append"
        }, this.props.append.map(function (item, key) {
          return React__default['default'].createElement("span", {
            className: "input__form-control__append-text",
            key: key
          }, item);
        })) : React__default['default'].createElement(React__default['default'].Fragment, null);
        var inputWrapperWidth = inline && inlineProportion > 0 && inlineProportion <= 1 ? {
          maxWidth: (1 - inlineProportion) * 100 + "%"
        } : {};
        var inputWrapper = React__default['default'].createElement("div", {
          className: 'input__wrapper' + (inline ? ' col' : ''),
          style: __assign({}, inputWrapperWidth)
        }, input, append);
        var labelWidth = inline && inlineProportion > 0 && inlineProportion <= 1 ? {
          maxWidth: inlineProportion * 100 + "%"
        } : {};
        var labelBorderStyle = inline && wrap ? {
          marginRight: '-1px',
          borderTopRightRadius: 0,
          borderBottomRightRadius: 0
        } : {};
        var labelElement = label ? React__default['default'].createElement("label", {
          htmlFor: id,
          className: (inline ? ' col input__label_col' : ' input__label') + (disabled ? ' disabled' : ''),
          style: __assign(__assign({}, labelWidth), labelBorderStyle)
        }, label) : React__default['default'].createElement(React__default['default'].Fragment, null);
        var baseClass = wrap ? inline ? ' row input_wrap-row' : ' input_wrap' : inline ? ' row' : '';
        return React__default['default'].createElement("div", {
          className: baseClass
        }, labelElement, inputWrapper);
      };

      Input.defaultProps = {
        disabled: false,
        label: '',
        mask: undefined,
        placeholder: '',
        value: undefined,
        append: undefined,
        inline: false,
        inlineProportion: 0.25,
        wrap: false,
        invalid: false,
        valid: false
      };
      return Input;
    }(React__default['default'].Component);

    var css_248z$3 = ".modal-open{overflow:hidden}.modal-open .modal{overflow-x:hidden;overflow-y:auto}.modal{position:fixed;top:0;left:0;z-index:1050;display:none;width:100%;height:100%;background:rgba(0,0,0,0.4);overflow:hidden;outline:0}.modal__dialog{position:relative;max-width:100%;height:100%;margin:0;pointer-events:none}.modal.fade .modal__dialog{transition:transform 0.3s ease-out;transform:translate(0, -1200px)}.modal.show .modal__dialog{transform:none}.modal__dialog_scrollable{display:flex;max-height:100%}.modal__dialog_scrollable .modal__content{max-height:100vh;overflow:hidden}.modal__dialog_scrollable .modal__content-header,.modal__dialog_scrollable .modal__content-footer{flex-shrink:0}.modal__dialog_scrollable .modal__content-body{overflow-y:auto}.modal__dialog_centered{display:flex;align-items:center;min-height:100%}.modal__dialog_centered::before{display:block;height:100vh;height:min-content;content:''}.modal__dialog_centered.modal__dialog_scrollable{flex-direction:column;justify-content:center;height:100%}.modal__dialog_centered.modal__dialog_scrollable .modal__content{max-height:none}.modal__dialog_centered.modal__dialog_scrollable::before{content:none}.modal__content{position:relative;display:flex;flex-direction:column;width:100%;height:100%;color:null;pointer-events:auto;background-color:#fff;background-clip:padding-box;outline:0}.modal__content-header{display:flex;align-items:center;justify-content:center;border-bottom:1px solid #eee;padding:16px 32px}@media (max-width: 1199.98px), (max-width: 1366px) and (max-height: 768px){.modal__content-header{padding:16px 24px}}@media (max-width: 767.98px){.modal__content-header{padding:16px}}.modal__content-close{background-image:url(\"data:image/svg+xml,%3csvg width='24' height='24' fill='none' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' clip-rule='evenodd' d='M4.293 19.707a1 1 0 001.414 0L12 13.414l6.293 6.293a1 1 0 001.414-1.414L13.414 12l6.293-6.293a1 1 0 00-1.414-1.414L12 10.586 5.707 4.293a1 1 0 00-1.414 1.414L10.586 12l-6.293 6.293a1 1 0 000 1.414z' fill='%23333'/%3e%3c/svg%3e\");background-position:center;background-repeat:no-repeat;display:inline-block;height:24px;width:24px;position:absolute;right:0;z-index:1;cursor:pointer;margin:16px 32px;transition:transform 0.3s ease-out}@media (max-width: 1199.98px), (max-width: 1366px) and (max-height: 768px){.modal__content-close{margin:16px 24px}}@media (max-width: 767.98px){.modal__content-close{margin:0;padding:24px}}.modal__content-close:hover{transform:rotate(90deg)}.modal__content-body{position:relative;flex:1 1 auto;padding-right:32px;padding-left:32px}@media (max-width: 1199.98px), (max-width: 1366px) and (max-height: 768px){.modal__content-body{padding-right:24px;padding-left:24px}}@media (max-width: 767.98px){.modal__content-body{padding-right:16px;padding-left:16px}}.modal__content-footer{display:flex;flex-wrap:wrap;align-items:center;justify-content:center;border-top:1px solid #eee}.modal__content-footer>*{flex-grow:1}@media (min-width: 576px){.modal:not([class*='modal-']) .modal__dialog,.modal-s .modal__dialog{margin:48px auto;height:auto;max-width:540px}.modal:not([class*='modal-']) .modal__dialog_scrollable,.modal:not([class*='modal-']) .modal__dialog_centered.modal__dialog_scrollable,.modal-s .modal__dialog_scrollable,.modal-s .modal__dialog_centered.modal__dialog_scrollable{max-height:calc(100vh - 96px)}.modal:not([class*='modal-']) .modal__dialog_centered,.modal-s .modal__dialog_centered{margin:auto auto}.modal:not([class*='modal-']) .modal__dialog_centered .modal__content,.modal-s .modal__dialog_centered .modal__content{margin:48px auto}.modal:not([class*='modal-']) .modal__content,.modal-s .modal__content{height:auto;border-radius:15px;box-shadow:0px 20px 40px rgba(0,0,0,0.1)}.modal:not([class*='modal-']) .modal__content-header,.modal-s .modal__content-header{border-top-right-radius:15px;border-top-left-radius:15px}.modal:not([class*='modal-']) .modal__content-footer,.modal-s .modal__content-footer{border-bottom-right-radius:15px;border-bottom-left-radius:15px}.modal:not([class*='modal-']) .modal__content-footer>*,.modal-s .modal__content-footer>*{border-radius:0}.modal:not([class*='modal-']) .modal__content-footer>*:first-child,.modal-s .modal__content-footer>*:first-child{border-bottom-left-radius:15px}.modal:not([class*='modal-']) .modal__content-footer>*:last-child,.modal-s .modal__content-footer>*:last-child{border-bottom-right-radius:15px}}@media (min-width: 768px){.modal:not([class*='modal-']) .modal__dialog,.modal-m .modal__dialog{margin:64px auto;height:auto;max-width:720px}.modal:not([class*='modal-']) .modal__dialog_scrollable,.modal:not([class*='modal-']) .modal__dialog_centered.modal__dialog_scrollable,.modal-m .modal__dialog_scrollable,.modal-m .modal__dialog_centered.modal__dialog_scrollable{max-height:calc(100vh - 128px)}.modal:not([class*='modal-']) .modal__dialog_centered,.modal-m .modal__dialog_centered{margin:auto auto}.modal:not([class*='modal-']) .modal__dialog_centered .modal__content,.modal-m .modal__dialog_centered .modal__content{margin:64px auto}.modal:not([class*='modal-']) .modal__content,.modal-m .modal__content{height:auto;border-radius:15px;box-shadow:0px 20px 40px rgba(0,0,0,0.1)}.modal:not([class*='modal-']) .modal__content-header,.modal-m .modal__content-header{border-top-right-radius:15px;border-top-left-radius:15px}.modal:not([class*='modal-']) .modal__content-footer,.modal-m .modal__content-footer{border-bottom-right-radius:15px;border-bottom-left-radius:15px}.modal:not([class*='modal-']) .modal__content-footer>*,.modal-m .modal__content-footer>*{border-radius:0}.modal:not([class*='modal-']) .modal__content-footer>*:first-child,.modal-m .modal__content-footer>*:first-child{border-bottom-left-radius:15px}.modal:not([class*='modal-']) .modal__content-footer>*:last-child,.modal-m .modal__content-footer>*:last-child{border-bottom-right-radius:15px}}@media (min-width: 992px){.modal:not([class*='modal-']) .modal__dialog,.modal-l .modal__dialog{margin:64px auto;height:auto;max-width:960px}.modal:not([class*='modal-']) .modal__dialog_scrollable,.modal:not([class*='modal-']) .modal__dialog_centered.modal__dialog_scrollable,.modal-l .modal__dialog_scrollable,.modal-l .modal__dialog_centered.modal__dialog_scrollable{max-height:calc(100vh - 128px)}.modal:not([class*='modal-']) .modal__dialog_centered,.modal-l .modal__dialog_centered{margin:auto auto}.modal:not([class*='modal-']) .modal__dialog_centered .modal__content,.modal-l .modal__dialog_centered .modal__content{margin:64px auto}.modal:not([class*='modal-']) .modal__content,.modal-l .modal__content{height:auto;border-radius:15px;box-shadow:0px 20px 40px rgba(0,0,0,0.1)}.modal:not([class*='modal-']) .modal__content-header,.modal-l .modal__content-header{border-top-right-radius:15px;border-top-left-radius:15px}.modal:not([class*='modal-']) .modal__content-footer,.modal-l .modal__content-footer{border-bottom-right-radius:15px;border-bottom-left-radius:15px}.modal:not([class*='modal-']) .modal__content-footer>*,.modal-l .modal__content-footer>*{border-radius:0}.modal:not([class*='modal-']) .modal__content-footer>*:first-child,.modal-l .modal__content-footer>*:first-child{border-bottom-left-radius:15px}.modal:not([class*='modal-']) .modal__content-footer>*:last-child,.modal-l .modal__content-footer>*:last-child{border-bottom-right-radius:15px}}@media (min-width: 1200px) and (min-width: 1366.02px), (min-width: 1200px) and (min-height: 768.02px){.modal:not([class*='modal-']) .modal__dialog,.modal-xl .modal__dialog{margin:80px auto;height:auto;max-width:1140px}.modal:not([class*='modal-']) .modal__dialog_scrollable,.modal:not([class*='modal-']) .modal__dialog_centered.modal__dialog_scrollable,.modal-xl .modal__dialog_scrollable,.modal-xl .modal__dialog_centered.modal__dialog_scrollable{max-height:calc(100vh - 160px)}.modal:not([class*='modal-']) .modal__dialog_centered,.modal-xl .modal__dialog_centered{margin:auto auto}.modal:not([class*='modal-']) .modal__dialog_centered .modal__content,.modal-xl .modal__dialog_centered .modal__content{margin:80px auto}.modal:not([class*='modal-']) .modal__content,.modal-xl .modal__content{height:auto;border-radius:15px;box-shadow:0px 20px 40px rgba(0,0,0,0.1)}.modal:not([class*='modal-']) .modal__content-header,.modal-xl .modal__content-header{border-top-right-radius:15px;border-top-left-radius:15px}.modal:not([class*='modal-']) .modal__content-footer,.modal-xl .modal__content-footer{border-bottom-right-radius:15px;border-bottom-left-radius:15px}.modal:not([class*='modal-']) .modal__content-footer>*,.modal-xl .modal__content-footer>*{border-radius:0}.modal:not([class*='modal-']) .modal__content-footer>*:first-child,.modal-xl .modal__content-footer>*:first-child{border-bottom-left-radius:15px}.modal:not([class*='modal-']) .modal__content-footer>*:last-child,.modal-xl .modal__content-footer>*:last-child{border-bottom-right-radius:15px}}@media (max-width: 1199.98px), (max-width: 1366px) and (max-height: 768px){.modal-xl .modal__dialog{display:flex;max-height:100%}.modal-xl .modal__dialog .modal__content{max-height:100vh;overflow:hidden}.modal-xl .modal__dialog .modal__content-header,.modal-xl .modal__dialog .modal__content-footer{flex-shrink:0}.modal-xl .modal__dialog .modal__content-body{overflow-y:auto}}@media (max-width: 991.98px){.modal-l .modal__dialog{display:flex;max-height:100%}.modal-l .modal__dialog .modal__content{max-height:100vh;overflow:hidden}.modal-l .modal__dialog .modal__content-header,.modal-l .modal__dialog .modal__content-footer{flex-shrink:0}.modal-l .modal__dialog .modal__content-body{overflow-y:auto}}@media (max-width: 767.98px){.modal-m .modal__dialog{display:flex;max-height:100%}.modal-m .modal__dialog .modal__content{max-height:100vh;overflow:hidden}.modal-m .modal__dialog .modal__content-header,.modal-m .modal__dialog .modal__content-footer{flex-shrink:0}.modal-m .modal__dialog .modal__content-body{overflow-y:auto}}@media (max-width: 575.98px){.modal .modal__dialog,.modal-s .modal__dialog{display:flex;max-height:100%}.modal .modal__dialog .modal__content,.modal-s .modal__dialog .modal__content{max-height:100vh;overflow:hidden}.modal .modal__dialog .modal__content-header,.modal .modal__dialog .modal__content-footer,.modal-s .modal__dialog .modal__content-header,.modal-s .modal__dialog .modal__content-footer{flex-shrink:0}.modal .modal__dialog .modal__content-body,.modal-s .modal__dialog .modal__content-body{overflow-y:auto}}\n";
    styleInject(css_248z$3);

    var __extends$4 = undefined && undefined.__extends || function () {
      var _extendStatics = function extendStatics(d, b) {
        _extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function (d, b) {
          d.__proto__ = b;
        } || function (d, b) {
          for (var p in b) {
            if (b.hasOwnProperty(p)) d[p] = b[p];
          }
        };

        return _extendStatics(d, b);
      };

      return function (d, b) {
        _extendStatics(d, b);

        function __() {
          this.constructor = d;
        }

        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();

    var Modal =
    /** @class */
    function (_super) {
      __extends$4(Modal, _super);

      function Modal(props) {
        var _this = _super.call(this, props) || this;

        _this.handleClickClose = function (event) {
          _this.props.onClose();

          event.preventDefault();
          event.stopPropagation();
        };

        _this.state = {
          display: 'none',
          showEffect: false
        };
        return _this;
      }

      Modal.prototype.setShowState = function () {
        var _this = this;

        if (this.props.show) {
          if (this.state.display === 'none') {
            this.setState({
              display: 'block'
            });
          }

          if (!this.state.showEffect) {
            setTimeout(function () {
              _this.setState({
                showEffect: true
              });
            }, 300);
          }
        } else {
          if (this.state.display === 'block') {
            setTimeout(function () {
              _this.setState({
                display: 'none'
              });
            }, 300);
          }

          if (this.state.showEffect) {
            this.setState({
              showEffect: false
            });
          }
        }
      };

      Modal.prototype.render = function () {
        var _a = this.props,
            centered = _a.centered,
            scrollable = _a.scrollable,
            size = _a.size;
        this.setShowState();
        var modalClasses = [];
        modalClasses.push('modal');
        modalClasses.push('fade');

        if (size) {
          modalClasses.push("modal-" + size);
        }

        var dialogClasses = [];
        dialogClasses.push('modal__dialog');

        if (centered) {
          dialogClasses.push('modal__dialog_centered');
        }

        if (scrollable) {
          dialogClasses.push('modal__dialog_scrollable');
        }

        var content = React__default['default'].createElement("div", {
          className: "modal__content"
        }, this.props.header && React__default['default'].createElement("div", {
          className: "modal__content-header"
        }, this.props.header, React__default['default'].createElement("div", {
          className: "modal__content-close",
          onClick: this.handleClickClose
        })), React__default['default'].createElement("div", {
          className: "modal__content-body"
        }, !this.props.header && React__default['default'].createElement("div", {
          className: "modal__content-close",
          onClick: this.handleClickClose
        }), this.props.children), this.props.footer && React__default['default'].createElement("div", {
          className: "modal__content-footer"
        }, this.props.footer));
        return React__default['default'].createElement("div", {
          className: modalClasses.join(' ') + (this.state.showEffect ? ' show' : ''),
          style: {
            display: this.state.display
          },
          onClick: this.handleClickClose
        }, React__default['default'].createElement("div", {
          className: dialogClasses.join(' '),
          onClick: function onClick(event) {
            return event.stopPropagation();
          }
        }, content));
      };

      Modal.defaultProps = {
        show: false,
        header: undefined,
        footer: undefined,
        scrollable: false,
        centered: false,
        size: ''
      };
      return Modal;
    }(React__default['default'].Component);

    var css_248z$4 = ".digital-form__icon-base{background-image:url(\"data:image/svg+xml,%3csvg width='24' height='24' fill='none' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' clip-rule='evenodd' d='M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm0-2a8 8 0 100-16 8 8 0 000 16z' fill='%23333'/%3e%3c/svg%3e\");background-position:center;background-repeat:no-repeat;display:inline-block;height:24px;width:24px}.digital-form__icon-camera{background-image:url(\"data:image/svg+xml,%3csvg width='24' height='24' fill='none' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' clip-rule='evenodd' d='M1 9.5V18a4 4 0 004 4h14a4 4 0 004-4V9.5A3.5 3.5 0 0019.5 6h-1.264a1 1 0 01-.894-.553l-.895-1.789A3 3 0 0013.764 2h-3.528a3 3 0 00-2.683 1.658l-.895 1.79A1 1 0 015.764 6H4.5A3.5 3.5 0 001 9.5zM5 20a2 2 0 01-2-2V9.5A1.5 1.5 0 014.5 8h1.264a3 3 0 002.683-1.658l.895-1.79A1 1 0 0110.236 4h3.528a1 1 0 01.894.553l.895 1.789A3 3 0 0018.236 8H19.5A1.5 1.5 0 0121 9.5V18a2 2 0 01-2 2H5zm7-3a4.001 4.001 0 010-8 4.001 4.001 0 010 8zm2-4a2.001 2.001 0 01-4 0 2.001 2.001 0 014 0z' fill='%23e9e7f8'/%3e%3c/svg%3e\");background-position:center;background-repeat:no-repeat;display:inline-block;height:24px;width:24px}.digital-form__icon-check{background-image:url(\"data:image/svg+xml,%3csvg width='24' height='24' fill='none' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' clip-rule='evenodd' d='M8.971 16.557L20.265 4.322a1 1 0 011.47 1.356l-12 13a1 1 0 01-1.442.03l-4-4a1 1 0 111.414-1.415l3.264 3.264z' fill='%23333'/%3e%3c/svg%3e\");background-position:center;background-repeat:no-repeat;display:inline-block;height:24px;width:24px}.digital-form__icon-cross_red{cursor:pointer;background-image:url(\"data:image/svg+xml,%3csvg width='24' height='24' fill='none' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' clip-rule='evenodd' d='M4.293 19.707a1 1 0 001.414 0L12 13.414l6.293 6.293a1 1 0 001.414-1.414L13.414 12l6.293-6.293a1 1 0 00-1.414-1.414L12 10.586 5.707 4.293a1 1 0 00-1.414 1.414L10.586 12l-6.293 6.293a1 1 0 000 1.414z' fill='%23d22d25'/%3e%3c/svg%3e\");background-position:center;background-repeat:no-repeat;display:inline-block;height:24px;width:24px}.digital-form__agreement-link{color:#7658e0;cursor:pointer}.digital-form__agreement-link:hover{color:#6b4bde}.digital-form__link-button{display:inline-block;padding:10px 24px;font-family:TochkaSans,Avenir,Source Sans Pro,Helvetica,Segoe UI,Nimbus Sans No5 T CY,sans-serif;font-weight:500;font-size:18px;line-height:24px;color:#fff;text-align:center;text-decoration:none;white-space:null;vertical-align:middle;user-select:none;background-color:#7658e0;border:none;border-radius:3px;transition:color 0.15s ease-in-out,background-color 0.15s ease-in-out}@media (max-width: 1199.98px), (max-width: 1366px) and (max-height: 768px){.digital-form__link-button{font-size:16px;line-height:24px}}@media (max-width: 767.98px){.digital-form__link-button{font-size:14px;line-height:20px}}.digital-form__link-button:hover{text-decoration:none;background-color:#6b4bde}.digital-form__ownership-type{display:flex;justify-content:center}.digital-form__ownership-type>*{flex-grow:1;margin:0 8px}.digital-form__ownership-type>*:first-child{margin-left:0}.digital-form__ownership-type>*:last-child{margin-right:0}@media (max-width: 767.98px){.digital-form__ownership-type{display:block}.digital-form__ownership-type>*{margin:8px 0;width:calc(50% - 8px)}.digital-form__ownership-type>*:nth-child(odd){margin-right:8px}.digital-form__ownership-type>*:nth-child(odd):last-child{width:100%}.digital-form__ownership-type>*:nth-child(even){margin-left:8px}}.digital-form__choice-elements-centered{display:flex;flex-direction:column;align-items:center;justify-content:center}.digital-form__choice-elements-centered>*{display:block;margin:4px 0}.digital-form__choice-elements-centered>*:first-child{margin-top:0}.digital-form__choice-elements-centered>*:last-child{margin-bottom:0}.digital-form__description-width-agreement{margin:0 auto;width:40%}@media (max-width: 991.98px){.digital-form__description-width-agreement{width:70%}}@media (max-width: 575.98px){.digital-form__description-width-agreement{width:100%}}.digital-form__description-width-choice{margin:0 auto;width:40%}@media (max-width: 991.98px){.digital-form__description-width-choice{width:55%}}@media (max-width: 767.98px){.digital-form__description-width-choice{width:75%}}.digital-form__description-width-finish-meeting{margin:0 auto;width:50%}@media (max-width: 991.98px){.digital-form__description-width-finish-meeting{width:70%}}@media (max-width: 767.98px){.digital-form__description-width-finish-meeting{width:90%}}@media (max-width: 575.98px){.digital-form__description-width-finish-meeting{width:100%}}.digital-form__remove-button-padding button{padding:0}\n";
    styleInject(css_248z$4);

    var ScreenType;
    (function (ScreenType) {
        ScreenType[ScreenType["MAIN"] = 10] = "MAIN";
        ScreenType[ScreenType["CHOICE_OA"] = 11] = "CHOICE_OA";
        ScreenType[ScreenType["DIGITAL_DATA"] = 20] = "DIGITAL_DATA";
        ScreenType[ScreenType["REDIRECT_TO_IB"] = 29] = "REDIRECT_TO_IB";
        ScreenType[ScreenType["FINISH_OCA"] = 39] = "FINISH_OCA";
        ScreenType[ScreenType["FINISH_REGISTRATION"] = 49] = "FINISH_REGISTRATION";
    })(ScreenType || (ScreenType = {}));
    var OwnershipType;
    (function (OwnershipType) {
        OwnershipType["SP"] = "\u0418\u041F";
        OwnershipType["LLC"] = "\u041E\u041E\u041E";
        OwnershipType["REGISTRATION"] = "\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044F";
    })(OwnershipType || (OwnershipType = {}));
    var DIGITAL_URI = 'https://z.tochka.com/static/v1/lk/digital';
    var IB_URI = 'https://z.tochka.com';
    var SITE_URI = 'https://tochka.com';
    var DigitalForm = /** @class */ (function (_super) {
        __extends(DigitalForm, _super);
        function DigitalForm(props) {
            var _this = _super.call(this, props) || this;
            // TODO Чтение user из кук.
            _this.user = {
                leadId: '',
                phone: ''
            };
            _this.state = {
                screen: ScreenType.MAIN,
                thereAreData: false,
                disabled: false,
                phone: '',
                phoneInvalid: false,
                type: undefined,
                typeInvalid: false,
                tin: '',
                tinOwner: '',
                tinInvalid: false,
                agreementAccountShowModal: false,
                agreementPersonalDataShowModal: false,
                findTinShowModal: false,
                birthDate: '',
                birthDateInvalid: false,
                fullName: '',
                fullNameInvalid: false,
                passportDate: '',
                passportDateInvalid: false,
                passportId: '',
                passportIdInvalid: false
            };
            return _this;
        }
        /**
         * @description Проверяет строку с датой на корректность.
         * Также проверяет на вхождение в диапазон 'век назад' <= date <= 'текущий день'.
         * @param date Строка в формате 'dd.mm.YYYY'.
         * @return boolean
         */
        DigitalForm.prototype.checkDate = function (date) {
            try {
                var checkedDate = this.convertStringToDate(date);
                var lower = new Date(new Date().getFullYear() - 100, new Date().getMonth(), new Date().getDate());
                var upper = new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate());
                if (checkedDate.valueOf() < lower.valueOf() ||
                    checkedDate.valueOf() > upper.valueOf()) {
                    return false;
                }
            }
            catch (e) {
                return false;
            }
            return true;
        };
        /**
         * @description Проверяет корректность ИНН по контрольной сумме.
         * @param value Строка для проверки.
         * @param type Сфера деятельности.
         * Для ИП проверят 12 чисел, для ООО – 10. Если параметр не передан контрольная сумма ИНН проверяется для всех.
         * @return boolean
         */
        DigitalForm.prototype.checkTinChecksum = function (value, type) {
            var onlyNumbers = value.replace(/\D+/g, '');
            var s, s2;
            if (type === undefined &&
                onlyNumbers.length !== 10 &&
                onlyNumbers.length !== 12) {
                return false;
            }
            if ((type === undefined && onlyNumbers.length === 10) ||
                type === OwnershipType.LLC) {
                if (onlyNumbers.length === 10) {
                    s =
                        (2 * Number(onlyNumbers[0]) +
                            4 * Number(onlyNumbers[1]) +
                            10 * Number(onlyNumbers[2]) +
                            3 * Number(onlyNumbers[3]) +
                            5 * Number(onlyNumbers[4]) +
                            9 * Number(onlyNumbers[5]) +
                            4 * Number(onlyNumbers[6]) +
                            6 * Number(onlyNumbers[7]) +
                            8 * Number(onlyNumbers[8])) %
                            11;
                    if (s == 10) {
                        s = 0;
                    }
                    if (s !== Number(onlyNumbers[9])) {
                        return false;
                    }
                }
                else {
                    return false;
                }
            }
            if ((type === undefined && onlyNumbers.length === 12) ||
                type === OwnershipType.SP ||
                type === OwnershipType.REGISTRATION) {
                if (onlyNumbers.length === 12) {
                    s =
                        (7 * Number(onlyNumbers[0]) +
                            2 * Number(onlyNumbers[1]) +
                            4 * Number(onlyNumbers[2]) +
                            10 * Number(onlyNumbers[3]) +
                            3 * Number(onlyNumbers[4]) +
                            5 * Number(onlyNumbers[5]) +
                            9 * Number(onlyNumbers[6]) +
                            4 * Number(onlyNumbers[7]) +
                            6 * Number(onlyNumbers[8]) +
                            8 * Number(onlyNumbers[9])) %
                            11;
                    if (s === 10) {
                        s = 0;
                    }
                    s2 =
                        (3 * Number(onlyNumbers[0]) +
                            7 * Number(onlyNumbers[1]) +
                            2 * Number(onlyNumbers[2]) +
                            4 * Number(onlyNumbers[3]) +
                            10 * Number(onlyNumbers[4]) +
                            3 * Number(onlyNumbers[5]) +
                            5 * Number(onlyNumbers[6]) +
                            9 * Number(onlyNumbers[7]) +
                            4 * Number(onlyNumbers[8]) +
                            6 * Number(onlyNumbers[9]) +
                            8 * Number(onlyNumbers[10])) %
                            11;
                    if (s2 == 10) {
                        s2 = 0;
                    }
                    if (s !== Number(onlyNumbers[10]) || s2 !== Number(onlyNumbers[11])) {
                        return false;
                    }
                }
                else {
                    return false;
                }
            }
            return true;
        };
        /**
         * @description Узнать владельца ИНН. Если удалось найти, то помещает информацию в 'state.tinOwner'.
         * @param tin ИНН.
         */
        DigitalForm.prototype.findTinOwner = function (tin) {
            var _this = this;
            if (this.checkTinChecksum(tin)) {
                this.sendRequestFindTinOwner()
                    .then(function (response) {
                    // TODO Сообщение об ошибке при неудаче на сервере.
                    // TODO Сохранить владельца ИНН в state.
                    if (response) {
                        _this.setState({
                            tinOwner: 'Иванов Иван Иванович'
                        });
                    }
                })
                    .catch(function (error) {
                    // TODO Сообщение об ошибке при неудаче на сервере.
                });
            }
        };
        /**
         * @description Возвращает true если пользователь ранее не оставлял заявку на открытие счета, иначе false.
         * Информация о том, что пользователь оставлял заявку сохранено на клиенте в куках.
         * @param phone Номер телефона, по которому идентифицируется клиент
         * @return boolean
         */
        DigitalForm.prototype.isNewUser = function (phone) {
            if (this.user.leadId.length === 0) {
                return true;
            }
            var userPhone = this.user.phone.replace(/\D+/g, '');
            if (userPhone) {
                return userPhone !== phone.replace(/\D+/g, '');
            }
            else {
                return true;
            }
        };
        /**
         * @description Проверят номер телефона на валидность.
         * @param value Строка для проверки.
         * @return boolean
         */
        DigitalForm.prototype.isValidPhone = function (value) {
            var onlyNumbers = value.replace(/\D+/g, '');
            if (onlyNumbers.length > 1) {
                if (onlyNumbers[1] === '7' ||
                    (onlyNumbers[1] === '8' && onlyNumbers[2] === '9')) {
                    return false;
                }
            }
            if (onlyNumbers.length !== 11) {
                return false;
            }
            return true;
        };
        /**
         * @description Очищает поле с датой рождения.
         */
        DigitalForm.prototype.onClickClearBirthDate = function (event) {
            this.setState({
                birthDate: '',
                birthDateInvalid: false
            });
        };
        /**
         * @description Очищает поле с ФИО.
         */
        DigitalForm.prototype.onClickClearFullName = function (event) {
            this.setState({
                fullName: '',
                fullNameInvalid: false
            });
        };
        /**
         * @description Очищает поле с датой выдачи паспорта.
         */
        DigitalForm.prototype.onClickClearPassportDate = function (event) {
            this.setState({
                passportDate: '',
                passportDateInvalid: false
            });
        };
        /**
         * @description Очищает поле с серией и номером паспорта.
         */
        DigitalForm.prototype.onClickClearPassportId = function (event) {
            this.setState({
                passportId: '',
                passportIdInvalid: false
            });
        };
        /**
         * @description Очищает поле с номером телефона.
         */
        DigitalForm.prototype.onClickClearPhone = function (event) {
            this.setState({
                phone: '',
                phoneInvalid: false
            });
        };
        /**
         * @description Очищает поле ИНН.
         */
        DigitalForm.prototype.onClickClearTin = function (event) {
            this.setState({
                tin: '',
                tinOwner: '',
                tinInvalid: false
            });
        };
        /**
         * @description Клик на экране ввода данных Digital.
         * Проверяет еще раз валидность всех введенных данных и подготавливает запрос к серверу.
         */
        DigitalForm.prototype.onClickDigitalData = function (event) {
            var _this = this;
            if (this.isValidPhone(this.state.phone)) {
                if (this.checkTinChecksum(this.state.tin, OwnershipType.SP)) {
                    this.sendRequestAdditionalDataDigital()
                        .then(function (response) {
                        // TODO Сообщение об ошибке при неудаче на сервере.
                        if (response) {
                            _this.setState({ screen: ScreenType.REDIRECT_TO_IB });
                            setTimeout(function () {
                                window.location.href = IB_URI + "/login/#/register/full?to=" + DIGITAL_URI + "/&changePhone=false&phoneNumber=" + _this.state.phone;
                            }, 2000);
                        }
                    })
                        .catch(function (error) {
                        // TODO Сообщение об ошибке при неудаче на сервере.
                    });
                }
                else {
                    this.setState({ tinInvalid: true });
                }
            }
            else {
                // Отсутствует номер телефона - вернуть на главную.
                this.setState({
                    screen: ScreenType.MAIN,
                    phoneInvalid: true
                });
            }
        };
        /**
         * @description Клик по кнопке «Узнать ИНН».
         * Проверяет корректность введенных персональных данных по которым определяется ИНН, подготавливает запрос на сервер.
         */
        DigitalForm.prototype.onClickFindTin = function (event) {
            var _this = this;
            // Валидация полей.
            var valid = true;
            if (!this.checkDate(this.state.birthDate)) {
                this.setState({ birthDateInvalid: true });
                valid = false;
            }
            if (this.state.fullName.split(' ').length !== 3) {
                this.setState({ fullNameInvalid: true });
                valid = false;
            }
            if (!this.checkDate(this.state.passportDate)) {
                this.setState({ passportDateInvalid: true });
                valid = false;
            }
            if (this.state.passportId.length !== 10) {
                this.setState({ passportIdInvalid: true });
                valid = false;
            }
            if (!valid) {
                return;
            }
            // Отправка запроса
            this.sendRequestFindTin()
                .then(function (response) {
                // TODO Сообщение об ошибке при неудаче на сервере.
                // TODO Сохранить полученный ИНН в state.
                if (response) {
                    _this.setState({
                        tin: '230816188344',
                        tinOwner: '',
                        tinInvalid: false,
                        findTinShowModal: false
                    });
                }
            })
                .catch(function (error) {
                // TODO Сообщение об ошибке при неудаче на сервере.
            });
        };
        /**
         * @description Клик по кнопке «Открыть счет на встрече».
         */
        DigitalForm.prototype.onClickOpenInMeeting = function (event) {
            var _this = this;
            if (this.isValidPhone(this.state.phone)) {
                this.sendRequestOpeningOfCurrentAccount(OwnershipType.SP)
                    .then(function (response) {
                    // TODO Сообщение об ошибке при неудаче на сервере.
                    if (response) {
                        _this.setState({ screen: ScreenType.FINISH_OCA });
                    }
                })
                    .catch(function (error) {
                    // TODO Сообщение об ошибке при неудаче на сервере.
                });
            }
            else {
                // Отсутствует номер телефона - вернуть на главную.
                this.setState({
                    screen: ScreenType.MAIN,
                    phoneInvalid: true
                });
            }
        };
        /**
         * @description Клик по кнопке «Открыть счет онлайн».
         */
        DigitalForm.prototype.onClickOpeningOnline = function (event) {
            var _this = this;
            if (this.isValidPhone(this.state.phone)) {
                this.sendRequestRemoteOpeningOfCurrentAccount()
                    .then(function (response) {
                    // TODO Сообщение об ошибке при неудаче на сервере.
                    if (response) {
                        if (_this.state.tin.length === 0) {
                            _this.setState({ screen: ScreenType.DIGITAL_DATA });
                        }
                        else {
                            _this.setState({ screen: ScreenType.REDIRECT_TO_IB });
                            setTimeout(function () {
                                window.location.href = IB_URI + "/login/#/register/full?to=" + DIGITAL_URI + "/&changePhone=false&phoneNumber=" + _this.state.phone;
                            }, 2000);
                        }
                    }
                })
                    .catch(function (error) {
                    // TODO Сообщение об ошибке при неудаче на сервере.
                });
            }
            else {
                // Отсутствует номер телефона - вернуть на главную.
                this.setState({
                    screen: ScreenType.MAIN,
                    phoneInvalid: true
                });
            }
        };
        /**
         * @description Клик по сфере деятельности.
         * @param event
         * @param type Сфера деятельности.
         */
        DigitalForm.prototype.onClickOwnershipType = function (event, type) {
            this.setState({
                type: type,
                typeInvalid: false,
                // Заново проверить инвалидацию для ИНН, так как для каждой сферы деятельности (ИП/ООО) свои правила
                tinInvalid: this.state.tin.length === 0
                    ? false
                    : !this.checkTinChecksum(this.state.tin, type)
            });
        };
        /**
         * @description Клик по кнопке «Отправить заявку» на экране 'main'.
         * Проверяет еще раз валидность всех введенных данных и подготавливает запрос к серверу.
         */
        DigitalForm.prototype.onClickSend = function (event) {
            var _this = this;
            if (this.isValidPhone(this.state.phone)) {
                // Ситуация когда номер телефона не «спилился» при его вводе.
                if (this.isNewUser(this.state.phone)) {
                    this.sendRequestPhone(this.state.phone)
                        .then(function (response) {
                    })
                        .catch(function (error) {
                        // TODO Сообщение об ошибке при неудаче на сервере.
                    });
                    return;
                }
                // ИНН необязательный, но если был введен, то проверяем.
                if (this.state.tin.length !== 0 &&
                    !this.checkTinChecksum(this.state.tin, this.state.type)) {
                    this.setState({ tinInvalid: true });
                    return;
                }
                switch (this.state.type) {
                    case OwnershipType.LLC:
                        this.sendRequestOpeningOfCurrentAccount(OwnershipType.LLC)
                            .then(function (response) {
                            // TODO Сообщение об ошибке при неудаче на сервере.
                            if (response) {
                                _this.setState({ screen: ScreenType.FINISH_OCA });
                            }
                        })
                            .catch(function (error) {
                            // TODO Сообщение об ошибке при неудаче на сервере.
                        });
                        break;
                    case OwnershipType.SP:
                        this.sendRequestOpeningOfCurrentAccount(OwnershipType.SP)
                            .then(function (response) {
                            // TODO Сообщение об ошибке при неудаче на сервере.
                            if (response) {
                                _this.setState({ screen: ScreenType.CHOICE_OA });
                            }
                        })
                            .catch(function (error) {
                            // TODO Сообщение об ошибке при неудаче на сервере.
                        });
                        break;
                    case OwnershipType.REGISTRATION:
                        this.sendRequestRegistration()
                            .then(function (response) {
                            // TODO Сообщение об ошибке при неудаче на сервере.
                            if (response) {
                                _this.setState({ screen: ScreenType.FINISH_REGISTRATION });
                            }
                        })
                            .catch(function (error) {
                            // TODO Сообщение об ошибке при неудаче на сервере.
                        });
                        break;
                    default:
                        // Если не выбрана форма деятельности.
                        this.setState({ typeInvalid: true });
                }
            }
            else {
                this.setState({ phoneInvalid: true });
            }
        };
        /**
         * @description Производит инвалидацию номера телефона и определяет отправить ли запрос с номером телефона.
         * Если валидация была не пройдена возвращает false. Если ранее запрос с таким номера уже был, то возвращает true.
         * В другом случае возвращает успех/неудачу серверного запроса.
         * @param phone Номер телефона.
         * @return Promise<boolean>
         */
        DigitalForm.prototype.preparingRequestToSendPhone = function (phone) {
            return __awaiter(this, void 0, void 0, function () {
                var phoneNumber, response;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            phoneNumber = phone.replace(/\D+/g, '');
                            if (!(phoneNumber.length === 11 && this.isValidPhone(phone))) return [3 /*break*/, 4];
                            if (!this.isNewUser(phone)) return [3 /*break*/, 2];
                            return [4 /*yield*/, this.sendRequestPhone(phone)];
                        case 1:
                            response = _a.sent();
                            return [2 /*return*/, response];
                        case 2:
                            // Пометить что пользователь нам известен.
                            // state нужен чтобы показать шаги с выбором сферы деятельности и вводом ИНН.
                            this.setState({ thereAreData: true });
                            return [2 /*return*/, true];
                        case 3: return [3 /*break*/, 5];
                        case 4: return [2 /*return*/, false];
                        case 5: return [2 /*return*/];
                    }
                });
            });
        };
        /**
         * @description Сохраняет дату рождения в state и производит его инвалидацию.
         * Диапазон дат: 'век назад' <= date <= 'текущий день'.
         * @param birthDate Дата рождения в формате 'dd.mm.YYYY'.
         */
        DigitalForm.prototype.setStatesForBirthDate = function (birthDate) {
            var valid = true;
            if (birthDate.replace(/\D+/g, '').length === 8) {
                valid = this.checkDate(birthDate);
            }
            this.setState({
                birthDate: birthDate,
                birthDateInvalid: !valid
            });
        };
        /**
         * @description Сохраняет ФИО в state. НЕ производит его инвалидацию.
         * @param fullName ФИО.
         */
        DigitalForm.prototype.setStatesForFullName = function (fullName) {
            this.setState({
                fullName: fullName,
                fullNameInvalid: false
            });
        };
        /**
         * @description Сохраняет дату выдачи паспорта в state и производит его инвалидацию.
         * Диапазон дат: 'век назад' <= date <= 'текущий день'.
         * @param passportDate Дата выдачи паспорта в формате 'dd.mm.YYYY'.
         */
        DigitalForm.prototype.setStatesForPassportDate = function (passportDate) {
            var valid = true;
            if (passportDate.replace(/\D+/g, '').length === 8) {
                valid = this.checkDate(passportDate);
            }
            this.setState({
                passportDate: passportDate,
                passportDateInvalid: !valid
            });
        };
        /**
         * @description Сохраняет серия и номер паспорта в state.
         * В state попадает строка с содержанием чисел.
         * @param passport Серия и номер паспорта.
         */
        DigitalForm.prototype.setStatesForPassportId = function (passport) {
            var passportId = passport.replace(/\D+/g, '');
            this.setState({
                passportId: passportId,
                passportIdInvalid: false
            });
        };
        /**
         * @description Сохраняет номер телефона в state и производит его инвалидацию.
         * В state номер телефона попадает с маской (например, '+7 (000) 000-__-__').
         * Учитывайте это при сравнений номера из state и из cookie.
         * @param phone Номер телефона.
         */
        DigitalForm.prototype.setStatesForPhone = function (phone) {
            var phoneNumber = phone.replace(/\D+/g, '');
            var valid = true;
            // Дублирование правил валидаций для того, чтобы выводить ошибку ввода с 7 или 89 в моменте.
            if (phoneNumber.length > 1) {
                // Из-за маски первый символ всегда 7. Игнорируем его.
                if (phoneNumber[1] === '7' ||
                    (phoneNumber[1] === '8' && phoneNumber[2] === '9')) {
                    valid = false;
                }
            }
            this.setState({
                phone: phone,
                phoneInvalid: !valid
            });
        };
        /**
         * @description Сохраняет ИНН в state и производит его инвалидацию.
         * В state попадает строка с содержанием чисел.
         * @param tin ИНН
         */
        DigitalForm.prototype.setStatesForTin = function (tin) {
            tin = tin.replace(/\D+/g, '');
            if (tin.length < 10) {
                this.setState({ tinInvalid: false });
            }
            if (tin.length >= 10) {
                this.setState({
                    tinInvalid: !this.checkTinChecksum(tin, this.state.type)
                });
            }
            // Сохранить ИНН в state для передачи ее в API при нажатии на кнопку.
            this.setState({ tin: tin });
        };
        /**
         * @description Конвертирует строку с датой в объект Date.
         * @param string Строка с датой в формате 'dd.mm.YYYY'.
         * @throws Error Исключение в случае некорректного параметра.
         * @return Date
         */
        DigitalForm.prototype.convertStringToDate = function (string) {
            if (!/^\d\d\.\d\d\.\d{4}$/.test(string)) {
                throw Error;
            }
            var dates = [];
            var stringsWithDates = string.split('.');
            for (var i = 0; i < stringsWithDates.length; i++) {
                dates.push(Number(stringsWithDates[i]));
            }
            dates[1] -= 1;
            var d = new Date(dates[2], dates[1], dates[0]);
            if (d.getFullYear() == dates[2] &&
                d.getMonth() == dates[1] &&
                d.getDate() == dates[0]) {
                return d;
            }
            else {
                throw Error;
            }
        };
        /**
         * @description Отправка дополнительных данных в Digital.
         * На данный момент это только ИНН. Если он не был введен на экране 'main'.
         * @return Promise<boolean>
         */
        DigitalForm.prototype.sendRequestAdditionalDataDigital = function () {
            // TODO loader
            var _this = this;
            this.setState({ disabled: true });
            // TODO Заменить на запрос сервера.
            return new Promise(function (resolve, reject) {
                setTimeout(function () {
                    resolve('response');
                }, 2000);
            })
                .then(function (response) {
                _this.setState({
                    disabled: false
                });
                return true;
            })
                .catch(function (error) {
                _this.setState({ disabled: false });
                return false;
            });
        };
        /**
         * @description Запрос к серверу чтобы узнать ИНН по персональным данным.
         * @return Promise<boolean>
         */
        DigitalForm.prototype.sendRequestFindTin = function () {
            // TODO loader
            var _this = this;
            this.setState({ disabled: true });
            // TODO Заменить на запрос сервера.
            return new Promise(function (resolve, reject) {
                setTimeout(function () {
                    resolve('response');
                }, 2000);
            })
                .then(function (response) {
                _this.setState({
                    disabled: false
                });
                return true;
            })
                .catch(function (error) {
                _this.setState({ disabled: false });
                return false;
            });
        };
        /**
         * @description Запрос к серверу чтобы узнать владельца ИНН.
         * @return Promise<boolean>
         */
        DigitalForm.prototype.sendRequestFindTinOwner = function () {
            // TODO Заменить на запрос сервера.
            return new Promise(function (resolve, reject) {
                setTimeout(function () {
                    resolve('response');
                }, 2000);
            })
                .then(function (response) {
                return true;
            })
                .catch(function (error) {
                return false;
            });
        };
        /**
         * @description Формирует запрос на открытие расчетного счета (через встречу с менеджером).
         * @param type Форма деятельности: ООО или ИП.
         * @return Promise<boolean>
         */
        DigitalForm.prototype.sendRequestOpeningOfCurrentAccount = function (type) {
            // TODO loader
            var _this = this;
            this.setState({ disabled: true });
            // TODO Заменить на запрос сервера.
            return new Promise(function (resolve, reject) {
                setTimeout(function () {
                    resolve('response');
                }, 2000);
            })
                .then(function (response) {
                _this.setState({
                    disabled: false
                });
                return true;
            })
                .catch(function (error) {
                _this.setState({ disabled: false });
                return false;
            });
        };
        /**
         * @description Формирует запрос для «спиливания» номера телефона.
         * Генерирует leadId и сохраняет его в куки клиента вместе с номером телефона.
         * @param phone Номер телефона.
         * @return Promise<boolean>
         */
        DigitalForm.prototype.sendRequestPhone = function (phone) {
            // TODO loader
            var _this = this;
            this.setState({ disabled: true });
            return new Promise(function (resolve, reject) {
                setTimeout(function () {
                    resolve('response');
                }, 2000);
            })
                .then(function (response) {
                var leadId = _this.isNewUser(phone) ? 'test' : _this.user.leadId;
                // TODO Сгененрировать ('test') и сохранить leadId в куки.
                // TODO Сохранить phone в куки.
                _this.user = {
                    leadId: leadId,
                    phone: phone.replace(/\D+/g, '')
                };
                _this.setState({
                    thereAreData: true,
                    disabled: false,
                    phone: phone
                });
                return true;
            })
                .catch(function (error) {
                _this.setState({ disabled: false });
                return false;
            });
        };
        /**
         * @description Формирует запрос на регистрацию ООО/ИП.
         * @return Promise<boolean>
         */
        DigitalForm.prototype.sendRequestRegistration = function () {
            // TODO loader
            var _this = this;
            this.setState({ disabled: true });
            // TODO Заменить на запрос сервера.
            return new Promise(function (resolve, reject) {
                setTimeout(function () {
                    resolve('response');
                }, 2000);
            })
                .then(function (response) {
                _this.setState({
                    disabled: false
                });
                return true;
            })
                .catch(function (error) {
                _this.setState({ disabled: false });
                return false;
            });
        };
        /**
         * @description Формирует запрос на дистанционное открытие расчетного счета (онлайн).
         * Пока доступен только для ИП.
         * @return Promise<boolean>
         */
        DigitalForm.prototype.sendRequestRemoteOpeningOfCurrentAccount = function () {
            // TODO loader
            var _this = this;
            this.setState({ disabled: true });
            // TODO Заменить на запрос сервера.
            return new Promise(function (resolve, reject) {
                setTimeout(function () {
                    resolve('response');
                }, 2000);
            })
                .then(function (response) {
                _this.setState({
                    disabled: false
                });
                return true;
            })
                .catch(function (error) {
                _this.setState({ disabled: false });
                return false;
            });
        };
        DigitalForm.prototype.render = function () {
            var _this = this;
            // <editor-fold desc="inputPhone">
            var phone = this.state.phone.replace(/\D+/g, '');
            var inputPhoneAppend;
            if (phone.length === 11) {
                // Если номер телефона не совпадает с тем что в куках, то, вероятно, идет обработка запроса.
                inputPhoneAppend =
                    phone === this.user.phone.replace(/\D+/g, '')
                        ? [React__default['default'].createElement("span", { className: "digital-form__icon-check" })]
                        : [React__default['default'].createElement("span", { className: "digital-form__icon-base" })];
            }
            if (this.state.phoneInvalid && phone.length > 1) {
                inputPhoneAppend = [
                    React__default['default'].createElement("span", { className: "digital-form__icon-cross_red", onClick: function (event) {
                            if (!_this.state.disabled) {
                                _this.onClickClearPhone(event);
                            }
                        } })
                ];
            }
            var inputPhoneProperties = {
                vModal: function (value) {
                    _this.setStatesForPhone(value);
                    // Как только телефон введен полностью «спилить» его.
                    if (value.replace(/\D+/g, '').length === 11) {
                        _this.preparingRequestToSendPhone(value);
                    }
                },
                disabled: this.state.disabled,
                label: 'Контактный телефон',
                mask: { mask: '+7 (999) 999-99-99' },
                placeholder: '+7 (___) ___-__-__',
                value: this.state.phone,
                append: inputPhoneAppend,
                wrap: true,
                invalid: this.state.phoneInvalid
            };
            var inputPhone = (React__default['default'].createElement(React__default['default'].Fragment, null,
                React__default['default'].createElement("div", { className: "d-block d-s-none" },
                    React__default['default'].createElement(Input, _assign({}, inputPhoneProperties, { id: 'phone', inline: true, inlineProportion: 0.4 }))),
                React__default['default'].createElement("div", { className: "d-none d-s-block" },
                    React__default['default'].createElement(Input, _assign({}, inputPhoneProperties, { id: 'phone-mobile', inline: false })))));
            // </editor-fold>
            // <editor-fold desc="ownershipType">
            var ownershipType = (React__default['default'].createElement(React__default['default'].Fragment, null,
                React__default['default'].createElement("div", { className: "digital-form__ownership-type" },
                    React__default['default'].createElement(ButtonChip, { active: this.state.type === OwnershipType.SP, disabled: this.state.disabled, onClick: function (event) {
                            if (!_this.state.disabled) {
                                _this.onClickOwnershipType(event, OwnershipType.SP);
                            }
                        } },
                        "\u041D\u0443\u0436\u0435\u043D \u0441\u0447\u0451\u0442",
                        React__default['default'].createElement("br", null),
                        "\u0434\u043B\u044F\u00A0\u0418\u041F"),
                    React__default['default'].createElement(ButtonChip, { active: this.state.type === OwnershipType.LLC, disabled: this.state.disabled, onClick: function (event) {
                            if (!_this.state.disabled) {
                                _this.onClickOwnershipType(event, OwnershipType.LLC);
                            }
                        } },
                        "\u041D\u0443\u0436\u0435\u043D \u0441\u0447\u0451\u0442",
                        React__default['default'].createElement("br", null),
                        "\u0434\u043B\u044F \u041E\u041E\u041E"),
                    React__default['default'].createElement(ButtonChip, { active: this.state.type === OwnershipType.REGISTRATION, disabled: this.state.disabled, onClick: function (event) {
                            if (!_this.state.disabled) {
                                _this.onClickOwnershipType(event, OwnershipType.REGISTRATION);
                            }
                        } },
                        "\u0417\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043E\u0432\u0430\u0442\u044C \u0418\u041F\u00A0\u0438\u043B\u0438",
                        React__default['default'].createElement("br", null),
                        "\u041E\u041E\u041E \u0438\u00A0\u043E\u0442\u043A\u0440\u044B\u0442\u044C \u0441\u0447\u0451\u0442")),
                this.state.typeInvalid && (React__default['default'].createElement("p", { className: "tochkasans-regular font-size-150 text-red text-center mb-0 mt-1" }, "\u0412\u044B\u0431\u0435\u0440\u0438\u0442\u0435 \u0444\u043E\u0440\u043C\u0443 \u0434\u0435\u044F\u0442\u0435\u043B\u044C\u043D\u043E\u0441\u0442\u0438 \u0438\u043B\u0438 \u043E\u0441\u0442\u0430\u0432\u044C\u0442\u0435 \u0437\u0430\u044F\u0432\u043A\u0443 \u043D\u0430\u00A0\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044E."))));
            // </editor-fold>
            // <editor-fold desc="inputTinGroup">
            var inputTinPlaceholder = '';
            var inputTinAppend;
            var inputTinAppendOwner = (React__default['default'].createElement("div", { className: "digital-form__remove-button-padding" },
                React__default['default'].createElement(ButtonT15, { disabled: this.state.disabled, link: true, onClick: function (event) {
                        if (!_this.state.disabled) {
                            _this.setState({ findTinShowModal: true });
                        }
                    } }, "\u0423\u0437\u043D\u0430\u0442\u044C \u0418\u041D\u041D")));
            switch (this.state.type) {
                case OwnershipType.LLC:
                    inputTinPlaceholder = '10 цифр';
                    if (this.state.tin.length === 10) {
                        inputTinAppend = [React__default['default'].createElement("span", { className: "digital-form__icon-check" })];
                    }
                    else {
                        inputTinAppend = [inputTinAppendOwner];
                    }
                    break;
                case OwnershipType.SP:
                case OwnershipType.REGISTRATION:
                    inputTinPlaceholder = '12 цифр';
                    if (this.state.tin.length === 12) {
                        inputTinAppend = [React__default['default'].createElement("span", { className: "digital-form__icon-check" })];
                    }
                    else {
                        inputTinAppend = [inputTinAppendOwner];
                    }
                    break;
            }
            if (this.state.tinInvalid && this.state.tin) {
                inputTinAppend = [
                    React__default['default'].createElement("span", { className: "digital-form__icon-cross_red", onClick: function (event) {
                            if (!_this.state.disabled) {
                                _this.onClickClearTin(event);
                            }
                        } })
                ];
            }
            var inputTinProperties = {
                vModal: function (value) {
                    _this.setStatesForTin(value);
                    var tin = value.replace(/\D+/g, '');
                    if (tin.length >= 10 && _this.checkTinChecksum(tin)) {
                        // Пытаемся узнать кому принадлежит ИНН.
                        _this.findTinOwner(tin);
                    }
                },
                disabled: this.state.disabled,
                label: 'Введите ИНН',
                mask: { mask: '999999999999', placeholder: ' ' },
                placeholder: inputTinPlaceholder,
                value: this.state.tin,
                append: inputTinAppend,
                wrap: true,
                invalid: this.state.tinInvalid
            };
            var inputTinOwnerProperties = {
                vModal: function (value) { return console.log(value); },
                disabled: true,
                label: 'Название компании',
                value: this.state.tinOwner,
                wrap: true
            };
            var inputTinGroup = this.state.type === undefined ? (React__default['default'].createElement(React__default['default'].Fragment, null)) : (React__default['default'].createElement("div", { className: this.state.tinOwner ? ' input-group ' : '' },
                React__default['default'].createElement("div", { className: "d-block d-s-none" },
                    React__default['default'].createElement(Input, _assign({}, inputTinProperties, { id: 'tin', inline: true, inlineProportion: 0.4 })),
                    this.state.tinOwner && (React__default['default'].createElement(Input, _assign({}, inputTinOwnerProperties, { id: 'tin-owner', inline: true, inlineProportion: 0.4 })))),
                React__default['default'].createElement("div", { className: "d-none d-s-block" },
                    React__default['default'].createElement(Input, _assign({}, inputTinProperties, { id: 'tin-mobile', inline: false })),
                    this.state.tinOwner && (React__default['default'].createElement(Input, _assign({}, inputTinOwnerProperties, { id: 'tin-owner-mobile', inline: false }))))));
            // </editor-fold>
            // <editor-fold desc="inputPersonalData">
            var inputBirthDateAppend;
            var inputFullNameAppend;
            var inputPassportDateAppend;
            var inputPassportIdAppend;
            if (this.state.birthDateInvalid &&
                this.state.birthDate.replace(/\D+/g, '')) {
                inputBirthDateAppend = [
                    React__default['default'].createElement("span", { className: "digital-form__icon-cross_red", onClick: function (event) {
                            if (!_this.state.disabled) {
                                _this.onClickClearBirthDate(event);
                            }
                        } })
                ];
            }
            if (this.state.fullNameInvalid && this.state.fullName.length) {
                inputFullNameAppend = [
                    React__default['default'].createElement("span", { className: "digital-form__icon-cross_red", onClick: function (event) {
                            if (!_this.state.disabled) {
                                _this.onClickClearFullName(event);
                            }
                        } })
                ];
            }
            if (this.state.passportDateInvalid &&
                this.state.passportDate.replace(/\D+/g, '')) {
                inputPassportDateAppend = [
                    React__default['default'].createElement("span", { className: "digital-form__icon-cross_red", onClick: function (event) {
                            if (!_this.state.disabled) {
                                _this.onClickClearPassportDate(event);
                            }
                        } })
                ];
            }
            if (this.state.passportIdInvalid && this.state.passportId) {
                inputPassportIdAppend = [
                    React__default['default'].createElement("span", { className: "digital-form__icon-cross_red", onClick: function (event) {
                            if (!_this.state.disabled) {
                                _this.onClickClearPassportId(event);
                            }
                        } })
                ];
            }
            var inputPersonalData = (React__default['default'].createElement(React__default['default'].Fragment, null,
                React__default['default'].createElement(Input, { vModal: function (value) { return _this.setStatesForFullName(value); }, id: 'full-name', disabled: this.state.disabled, label: 'Ф.И.О.', placeholder: 'Иванов Иван Иванович', value: this.state.fullName, append: inputFullNameAppend, invalid: this.state.fullNameInvalid }),
                React__default['default'].createElement("div", { style: { height: '16px' } }),
                React__default['default'].createElement(Input, { vModal: function (value) { return _this.setStatesForPassportId(value); }, id: 'passport', disabled: this.state.disabled, label: 'Серия и номер паспорта', mask: { mask: '9999 999999' }, placeholder: '0000 000000', value: this.state.passportId, append: inputPassportIdAppend, invalid: this.state.passportIdInvalid }),
                React__default['default'].createElement("div", { style: { height: '16px' } }),
                React__default['default'].createElement(Input, { vModal: function (value) { return _this.setStatesForPassportDate(value); }, id: 'passport-date', disabled: this.state.disabled, label: 'Дата выдачи паспорта', mask: { mask: '99.99.9999' }, placeholder: '01.01.2000', value: this.state.passportDate, append: inputPassportDateAppend, invalid: this.state.passportDateInvalid }),
                React__default['default'].createElement("div", { style: { height: '16px' } }),
                React__default['default'].createElement(Input, { vModal: function (value) { return _this.setStatesForBirthDate(value); }, id: 'birth-date', disabled: this.state.disabled, label: 'Дата рождения', mask: { mask: '99.99.9999' }, placeholder: '01.01.2000', value: this.state.birthDate, append: inputBirthDateAppend, invalid: this.state.birthDateInvalid })));
            // </editor-fold>
            // <editor-fold desc="sendRequestButton">
            var sendRequestButtonProperties = {
                disabled: this.state.disabled,
                onClick: function (event) {
                    if (!_this.state.disabled) {
                        _this.onClickSend(event);
                    }
                }
            };
            var sendRequestButton = (React__default['default'].createElement(React__default['default'].Fragment, null,
                React__default['default'].createElement("div", { className: "d-block d-s-none" },
                    React__default['default'].createElement(ButtonT15, _assign({}, sendRequestButtonProperties), "\u041E\u0441\u0442\u0430\u0432\u0438\u0442\u044C \u0437\u0430\u044F\u0432\u043A\u0443")),
                React__default['default'].createElement("div", { className: "d-none d-s-block" },
                    React__default['default'].createElement(ButtonT15, _assign({}, sendRequestButtonProperties, { block: true }), "\u041E\u0441\u0442\u0430\u0432\u0438\u0442\u044C \u0437\u0430\u044F\u0432\u043A\u0443"))));
            // </editor-fold>
            // <editor-fold desc="sendDigitalDataButton">
            var sendDigitalDataButtonProperties = {
                disabled: this.state.disabled,
                onClick: function (event) {
                    if (!_this.state.disabled) {
                        _this.onClickDigitalData(event);
                    }
                }
            };
            var sendDigitalDataButton = (React__default['default'].createElement(React__default['default'].Fragment, null,
                React__default['default'].createElement("div", { className: "d-block d-s-none" },
                    React__default['default'].createElement(ButtonT15, _assign({}, sendDigitalDataButtonProperties), "\u041F\u0440\u043E\u0434\u043E\u043B\u0436\u0438\u0442\u044C")),
                React__default['default'].createElement("div", { className: "d-none d-s-block" },
                    React__default['default'].createElement(ButtonT15, _assign({}, sendDigitalDataButtonProperties, { block: true }), "\u041F\u0440\u043E\u0434\u043E\u043B\u0436\u0438\u0442\u044C"))));
            // </editor-fold>
            // <editor-fold desc="choiceButtons">
            var choiceButtons = (React__default['default'].createElement("div", { className: "digital-form__choice-elements-centered" },
                React__default['default'].createElement(ButtonT15, { disabled: this.state.disabled, color: 'primary', onClick: function (event) {
                        if (!_this.state.disabled) {
                            _this.onClickOpeningOnline(event);
                        }
                    } },
                    React__default['default'].createElement("div", { className: "d-flex align-items-center" },
                        React__default['default'].createElement("span", { className: "digital-form__icon-camera mr-1" }),
                        "\u041E\u0442\u043A\u0440\u044B\u0442\u044C \u0441\u0447\u0451\u0442 \u043E\u043D\u043B\u0430\u0439\u043D")),
                React__default['default'].createElement(ButtonT15, { disabled: this.state.disabled, link: true, onClick: function (event) {
                        if (!_this.state.disabled) {
                            _this.onClickOpenInMeeting(event);
                        }
                    } }, "\u0414\u043E\u0436\u0434\u0430\u0442\u044C\u0441\u044F \u0437\u0432\u043E\u043D\u043A\u0430")));
            // </editor-fold>
            return (React__default['default'].createElement(React__default['default'].Fragment, null,
                this.state.screen === ScreenType.MAIN && (React__default['default'].createElement("div", { className: "container" },
                    React__default['default'].createElement("div", { className: "h2 text-center mb-6 mb-l-5 mb-s-4" }, "\u0421\u0442\u0430\u0442\u044C \u043A\u043B\u0438\u0435\u043D\u0442\u043E\u043C"),
                    React__default['default'].createElement("div", { className: "row justify-content-center" },
                        React__default['default'].createElement("div", { className: "col-xl-6 col-m-6 col-xs-4" },
                            inputPhone,
                            this.state.thereAreData && (React__default['default'].createElement(React__default['default'].Fragment, null,
                                React__default['default'].createElement("div", { className: "mt-4 mt-l-3 mt-s-2" }, ownershipType),
                                React__default['default'].createElement("div", { className: "mt-4 mt-l-3 mt-s-2" }, inputTinGroup))),
                            React__default['default'].createElement("div", { className: "text-center mt-6 mt-l-5 mt-s-4" }, sendRequestButton))),
                    React__default['default'].createElement("p", { className: "digital-form__description-width-agreement font-size-150 text-center mb-0 mt-3 mt-s-2" },
                        "\u041E\u0441\u0442\u0430\u0432\u043B\u044F\u044F \u0437\u0430\u044F\u0432\u043A\u0443, \u0432\u044B\u00A0\u0441\u043E\u0433\u043B\u0430\u0448\u0430\u0435\u0442\u0435\u0441\u044C \u043D\u0430\u00A0",
                        React__default['default'].createElement("span", { className: "digital-form__agreement-link", onClick: function () {
                                return _this.setState({ agreementPersonalDataShowModal: true });
                            } }, "\u043E\u0431\u0440\u0430\u0431\u043E\u0442\u043A\u0443 \u043F\u0435\u0440\u0441\u043E\u043D\u0430\u043B\u044C\u043D\u044B\u0445 \u0434\u0430\u043D\u043D\u044B\u0445"),
                        ' ',
                        "\u0438\u00A0\u0441\u00A0",
                        React__default['default'].createElement("span", { className: "digital-form__agreement-link", onClick: function () {
                                return _this.setState({ agreementAccountShowModal: true });
                            } }, "\u0443\u0441\u043B\u043E\u0432\u0438\u044F\u043C\u0438 \u0431\u0440\u043E\u043D\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u044F \u0441\u0447\u0451\u0442\u0430"),
                        "."))),
                this.state.screen === ScreenType.CHOICE_OA && (
                // TODO Заменть кнопку «Дождаться звонка» на ButtonLink.
                React__default['default'].createElement("div", { className: "container" },
                    React__default['default'].createElement("p", { className: "tochkasans-bold font-size-300 text-center" }, "\u0412\u0430\u0448\u0430 \u0437\u0430\u044F\u0432\u043A\u0430 \u0443\u00A0\u043D\u0430\u0441, \u0441\u043A\u043E\u0440\u043E \u0432\u0430\u043C \u043F\u0435\u0440\u0435\u0437\u0432\u043E\u043D\u0438\u043C."),
                    React__default['default'].createElement("p", { className: "digital-form__description-width-choice font-size-200 text-center mt-3 mt-s-2" }, "\u0412\u044B\u00A0\u043C\u043E\u0436\u0435\u0442\u0435 \u043D\u0435\u00A0\u043F\u043B\u0430\u0442\u0438\u0442\u044C \u0437\u0430\u00A0\u043E\u0431\u0441\u043B\u0443\u0436\u0438\u0432\u0430\u043D\u0438\u0435 \u043F\u0435\u0440\u0432\u044B\u0439 \u043C\u0435\u0441\u044F\u0446, \u0435\u0441\u043B\u0438 \u043E\u0442\u043A\u0440\u043E\u0435\u0442\u0435 \u0441\u0447\u0451\u0442 \u0441\u0430\u043C\u043E\u0441\u0442\u043E\u044F\u0442\u0435\u043B\u044C\u043D\u043E \u0432\u00A0\u043E\u043D\u043B\u0430\u0439\u043D-\u0440\u0435\u0436\u0438\u043C\u0435. \u0414\u043B\u044F \u044D\u0442\u043E\u0433\u043E \u043F\u043E\u043D\u0430\u0434\u043E\u0431\u0438\u0442\u0441\u044F \u043F\u0430\u0441\u043F\u043E\u0440\u0442 \u0438\u00A0\u0432\u0435\u0431-\u043A\u0430\u043C\u0435\u0440\u0430."),
                    React__default['default'].createElement("div", { className: "text-center mt-6 mt-l-5 mt-s-4" }, choiceButtons))),
                this.state.screen === ScreenType.DIGITAL_DATA && (
                // TODO
                React__default['default'].createElement("div", { className: "container" },
                    React__default['default'].createElement("p", { className: "tochkasans-bold font-size-300 text-center" }, "\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0418\u041D\u041D."),
                    React__default['default'].createElement("p", { className: "font-size-200 text-center mt-3 mt-s-2" }, "12 \u0446\u0438\u0444\u0440."),
                    React__default['default'].createElement("div", { className: "row justify-content-center" },
                        React__default['default'].createElement("div", { className: "col-xl-6 col-m-6 col-xs-4" },
                            React__default['default'].createElement("div", { className: "mt-4 mt-l-3 mt-s-2" }, inputTinGroup))),
                    React__default['default'].createElement("div", { className: "text-center mt-6 mt-l-5 mt-s-4" }, sendDigitalDataButton))),
                this.state.screen === ScreenType.REDIRECT_TO_IB && (React__default['default'].createElement("div", { className: "container" },
                    React__default['default'].createElement("p", { className: "tochkasans-bold font-size-300 text-center" }, "\u041F\u0435\u0440\u0435\u0445\u043E\u0434 \u0432\u00A0\u0418\u0411"),
                    React__default['default'].createElement("p", { className: "font-size-200 text-center mt-3 mt-s-2" },
                        React__default['default'].createElement("a", { href: IB_URI + "/login/#/register/full?to=" + DIGITAL_URI + "/&changePhone=false&phoneNumber=" + this.state.phone }, "\u041D\u0430\u0436\u043C\u0438\u0442\u0435 \u043D\u0430\u00A0\u0441\u0441\u044B\u043B\u043A\u0443"),
                        ' ',
                        "\u0435\u0441\u043B\u0438 \u0432\u044B\u00A0\u043D\u0435\u00A0\u043F\u0435\u0440\u0435\u0448\u043B\u0438 \u0430\u0432\u0442\u043E\u043C\u0430\u0442\u0438\u0447\u0435\u0441\u043A\u0438\u0439."))),
                this.state.screen === ScreenType.FINISH_OCA && (React__default['default'].createElement("div", { className: "container" },
                    React__default['default'].createElement("p", { className: "tochkasans-bold font-size-300 text-center" }, "\u041C\u044B\u00A0\u0441\u0432\u044F\u0436\u0435\u043C\u0441\u044F \u0441\u00A0\u0432\u0430\u043C\u0438 \u0441\u0435\u0433\u043E\u0434\u043D\u044F"),
                    React__default['default'].createElement("p", { className: "digital-form__description-width-finish-meeting font-size-200 text-center mt-3 mt-s-2" },
                        "\u041F\u043E\u0434\u0433\u043E\u0442\u043E\u0432\u044C\u0442\u0435 \u0434\u0430\u043D\u043D\u044B\u0435 \u0432\u0430\u0448\u0435\u0433\u043E \u043F\u0430\u0441\u043F\u043E\u0440\u0442\u0430 \u0432\u043C\u0435\u0441\u0442\u0435 \u0441\u00A0\u0418\u041D\u041D \u044E\u0440\u043B\u0438\u0446\u0430 \u0438\u043B\u0438\u00A0\u0418\u041F.",
                        React__default['default'].createElement("br", null),
                        React__default['default'].createElement("br", null),
                        "\u0412\u044B\u00A0\u0442\u0430\u043A\u0436\u0435 \u043C\u043E\u0436\u0435\u0442\u0435 \u0437\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044C \u0434\u043E\u043A\u0443\u043C\u0435\u043D\u0442\u044B \u0434\u043B\u044F \u0432\u0441\u0442\u0440\u0435\u0447\u0438 \u0441\u00A0\u043D\u0430\u0448\u0438\u043C \u0441\u043F\u0435\u0446\u0438\u0430\u043B\u0438\u0441\u0442\u043E\u043C. \u042D\u0442\u043E \u043D\u0435\u043E\u0431\u044F\u0437\u0430\u0442\u0435\u043B\u044C\u043D\u043E, \u043D\u043E\u00A0\u0437\u043D\u0430\u0447\u0438\u0442\u0435\u043B\u044C\u043D\u043E \u0443\u0441\u043A\u043E\u0440\u0438\u0442 \u043F\u0440\u043E\u0446\u0435\u0441\u0441 \u043E\u0442\u043A\u0440\u044B\u0442\u0438\u044F \u0441\u0447\u0451\u0442\u0430."),
                    React__default['default'].createElement("div", { className: "text-center mt-6 mt-l-5 mt-s-4" },
                        React__default['default'].createElement("a", { href: SITE_URI + "/doc/?phone=" + this.state.phone, className: "digital-form__link-button" }, "\u041F\u043E\u0434\u0433\u043E\u0442\u043E\u0432\u0438\u0442\u044C \u0434\u043E\u043A\u0443\u043C\u0435\u043D\u0442\u044B")))),
                this.state.screen === ScreenType.FINISH_REGISTRATION && (React__default['default'].createElement("div", { className: "container" },
                    React__default['default'].createElement("p", { className: "tochkasans-bold font-size-300 text-center" }, "\u041C\u044B\u00A0\u0441\u0432\u044F\u0436\u0435\u043C\u0441\u044F \u0441\u00A0\u0432\u0430\u043C\u0438 \u0441\u0435\u0433\u043E\u0434\u043D\u044F"),
                    React__default['default'].createElement("p", { className: "digital-form__description-width-finish-meeting font-size-200 text-center mt-3 mt-s-2" }, "\u0412\u044B\u00A0\u0442\u0430\u043A\u0436\u0435 \u043C\u043E\u0436\u0435\u0442\u0435 \u0437\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044C \u0434\u043E\u043A\u0443\u043C\u0435\u043D\u0442\u044B \u0434\u043B\u044F \u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u0438 \u0431\u0438\u0437\u043D\u0435\u0441\u0430."),
                    React__default['default'].createElement("div", { className: "text-center mt-6 mt-l-5 mt-s-4" },
                        React__default['default'].createElement("a", { href: SITE_URI + "/qes/doc/?phone=" + this.state.phone, className: "digital-form__link-button" }, "\u041F\u043E\u0434\u0433\u043E\u0442\u043E\u0432\u0438\u0442\u044C \u0434\u043E\u043A\u0443\u043C\u0435\u043D\u0442\u044B")))),
                React__default['default'].createElement(React__default['default'].Fragment, null,
                    React__default['default'].createElement(Modal, { onClose: function () {
                            _this.setState({ agreementAccountShowModal: false });
                        }, show: this.state.agreementAccountShowModal, children: React__default['default'].createElement(React__default['default'].Fragment, null,
                            React__default['default'].createElement("p", null, "\u0423\u0441\u043B\u0443\u0433\u0430 \u043F\u043E\u00A0\u0440\u0435\u0437\u0435\u0440\u0432\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u044E \u043D\u043E\u043C\u0435\u0440\u0430 \u0440\u0430\u0441\u0447\u0451\u0442\u043D\u043E\u0433\u043E \u0441\u0447\u0451\u0442\u0430 \u043E\u043A\u0430\u0437\u044B\u0432\u0430\u0435\u0442\u0441\u044F \u044E\u0440\u0438\u0434\u0438\u0447\u0435\u0441\u043A\u0438\u043C \u043B\u0438\u0446\u0430\u043C \u0438\u00A0\u0438\u043D\u0434\u0438\u0432\u0438\u0434\u0443\u0430\u043B\u044C\u043D\u044B\u043C \u043F\u0440\u0435\u0434\u043F\u0440\u0438\u043D\u0438\u043C\u0430\u0442\u0435\u043B\u044F\u043C (\u0434\u0430\u043B\u0435\u0435\u00A0\u2014 \u043A\u043B\u0438\u0435\u043D\u0442\u044B), \u0437\u0430\u043F\u043E\u043B\u043D\u0438\u0432\u0448\u0438\u043C \u0437\u0430\u044F\u0432\u043A\u0443 \u043D\u0430\u00A0\u0441\u0430\u0439\u0442\u0435 \u0438\u043B\u0438 \u043F\u043E\u0437\u0432\u043E\u043D\u0438\u0432\u0448\u0438\u043C \u0432\u00A0\u0431\u0430\u043D\u043A \u043F\u043E\u00A0\u043D\u043E\u043C\u0435\u0440\u0443 \u0442\u0435\u043B\u0435\u0444\u043E\u043D\u0430 8\u00A0800 2000\u00A0024."),
                            React__default['default'].createElement("p", null, "\u041F\u043B\u0430\u0442\u0435\u0436\u0438 \u043F\u043E\u00A0\u0437\u0430\u0440\u0435\u0437\u0435\u0440\u0432\u0438\u0440\u043E\u0432\u0430\u043D\u043D\u043E\u043C\u0443 \u0441\u0447\u0451\u0442\u0443 \u0431\u0430\u043D\u043A \u043D\u0435\u00A0\u043F\u0440\u043E\u0432\u043E\u0434\u0438\u0442. \u0414\u0435\u043D\u044C\u0433\u0438, \u043F\u0435\u0440\u0435\u0447\u0438\u0441\u043B\u0435\u043D\u043D\u044B\u0435 \u043A\u043B\u0438\u0435\u043D\u0442\u0443 \u043F\u043E\u00A0\u0440\u0435\u043A\u0432\u0438\u0437\u0438\u0442\u0430\u043C \u0437\u0430\u0440\u0435\u0437\u0435\u0440\u0432\u0438\u0440\u043E\u0432\u0430\u043D\u043D\u043E\u0433\u043E \u0441\u0447\u0451\u0442\u0430, \u0445\u0440\u0430\u043D\u044F\u0442\u0441\u044F \u0432\u00A0\u0431\u0430\u043D\u043A\u0435 \u0432\u00A0\u0442\u0435\u0447\u0435\u043D\u0438\u0435 5\u00A0\u0440\u0430\u0431\u043E\u0447\u0438\u0445 \u0434\u043D\u0435\u0439. \u0415\u0441\u043B\u0438 \u0441\u0447\u0451\u0442 \u043D\u0435\u00A0\u0431\u0443\u0434\u0435\u0442 \u043E\u0442\u043A\u0440\u044B\u0442, \u0447\u0435\u0440\u0435\u0437 5\u00A0\u0440\u0430\u0431\u043E\u0447\u0438\u0445 \u0434\u043D\u0435\u0439 \u0434\u0435\u043D\u044C\u0433\u0438 \u0432\u0435\u0440\u043D\u0443\u0442\u0441\u044F \u0438\u0445\u00A0\u043E\u0442\u043F\u0440\u0430\u0432\u0438\u0442\u0435\u043B\u044E. \u0411\u0430\u043D\u043A \u043D\u0435\u00A0\u043D\u0435\u0441\u0435\u0442 \u043E\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0435\u043D\u043D\u043E\u0441\u0442\u0438 \u0437\u0430\u00A0\u0443\u0431\u044B\u0442\u043A\u0438, \u0432\u043E\u0437\u043D\u0438\u043A\u0448\u0438\u0435 \u0443\u00A0\u043A\u043B\u0438\u0435\u043D\u0442\u0430, \u0435\u0441\u043B\u0438 \u043D\u0430\u00A0\u0434\u0430\u0442\u0443 \u0432\u043E\u0437\u0432\u0440\u0430\u0442\u0430 \u0434\u0435\u043D\u0435\u0433 \u043E\u0442\u043F\u0440\u0430\u0432\u0438\u0442\u0435\u043B\u044E, \u0441\u0447\u0451\u0442 \u043E\u0442\u043F\u0440\u0430\u0432\u0438\u0442\u0435\u043B\u044F \u0437\u0430\u043A\u0440\u044B\u0442 \u0438\u043B\u0438 \u0443\u00A0\u043D\u0435\u0433\u043E \u043F\u043E\u043C\u0435\u043D\u044F\u043B\u0438\u0441\u044C \u0440\u0435\u043A\u0432\u0438\u0437\u0438\u0442\u044B. \u0415\u0441\u043B\u0438 \u0432\u00A0\u0442\u0435\u0447\u0435\u043D\u0438\u0435 5\u00A0\u0440\u0430\u0431\u043E\u0447\u0438\u0445 \u0434\u043D\u0435\u0439 \u0441\u00A0\u043C\u043E\u043C\u0435\u043D\u0442\u0430 \u043F\u043E\u0441\u0442\u0443\u043F\u043B\u0435\u043D\u0438\u044F \u0434\u0435\u043D\u0435\u0433 \u043D\u0430\u00A0\u0437\u0430\u0440\u0435\u0437\u0435\u0440\u0432\u0438\u0440\u043E\u0432\u0430\u043D\u043D\u044B\u0439 \u0441\u0447\u0451\u0442 \u043E\u043D\u00A0\u0431\u0443\u0434\u0435\u0442 \u043E\u0442\u043A\u0440\u044B\u0442, \u0434\u0435\u043D\u044C\u0433\u0438 \u043F\u0435\u0440\u0435\u0432\u0435\u0434\u0443\u0442\u0441\u044F \u043D\u0430\u00A0\u043E\u0442\u043A\u0440\u044B\u0442\u044B\u0439 \u0441\u0447\u0451\u0442 \u0432\u00A0\u0441\u0440\u043E\u043A\u0438, \u0443\u0441\u0442\u0430\u043D\u043E\u0432\u043B\u0435\u043D\u043D\u044B\u0435 \u0434\u0435\u0439\u0441\u0442\u0432\u0443\u044E\u0449\u0438\u043C \u0437\u0430\u043A\u043E\u043D\u043E\u0434\u0430\u0442\u0435\u043B\u044C\u0441\u0442\u0432\u043E\u043C \u0420\u0424."),
                            React__default['default'].createElement("p", null, "\u0411\u0430\u043D\u043A \u043C\u043E\u0436\u0435\u0442 \u043E\u0442\u043A\u0430\u0437\u0430\u0442\u044C \u0432\u00A0\u0440\u0435\u0437\u0435\u0440\u0432\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u0438 \u043D\u043E\u043C\u0435\u0440\u0430 \u0441\u0447\u0451\u0442\u0430 \u0432\u00A0\u043E\u0434\u043D\u043E\u0441\u0442\u043E\u0440\u043E\u043D\u043D\u0435\u043C \u043F\u043E\u0440\u044F\u0434\u043A\u0435 \u0431\u0435\u0437 \u043E\u0431\u044A\u044F\u0441\u043D\u0435\u043D\u0438\u044F \u043F\u0440\u0438\u0447\u0438\u043D\u044B. \u0411\u0430\u043D\u043A \u043C\u043E\u0436\u0435\u0442 \u043E\u0442\u043A\u0430\u0437\u0430\u0442\u044C \u0432\u00A0\u043E\u0442\u043A\u0440\u044B\u0442\u0438\u0438 \u0437\u0430\u0440\u0435\u0437\u0435\u0440\u0432\u0438\u0440\u043E\u0432\u0430\u043D\u043D\u043E\u0433\u043E \u0441\u0447\u0451\u0442\u0430 \u0432\u00A0\u0441\u043B\u0443\u0447\u0430\u044F\u0445, \u0443\u0441\u0442\u0430\u043D\u043E\u0432\u043B\u0435\u043D\u043D\u044B\u0445 \u0432\u043D\u0443\u0442\u0440\u0435\u043D\u043D\u0438\u043C\u0438 \u0434\u043E\u043A\u0443\u043C\u0435\u043D\u0442\u0430\u043C\u0438 \u0431\u0430\u043D\u043A\u0430 \u0432\u00A0\u0441\u043E\u043E\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0438\u0438 \u0441\u00A0\u0434\u0435\u0439\u0441\u0442\u0432\u0443\u044E\u0449\u0438\u043C \u0437\u0430\u043A\u043E\u043D\u043E\u0434\u0430\u0442\u0435\u043B\u044C\u0441\u0442\u0432\u043E\u043C\u00A0\u0420\u0424.")), header: React__default['default'].createElement("div", { className: "tochkasans-medium" }, "\u0423\u0441\u043B\u043E\u0432\u0438\u044F \u0431\u0440\u043E\u043D\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u044F \u0441\u0447\u0451\u0442\u0430"), scrollable: true, centered: true, size: 's' }),
                    React__default['default'].createElement(Modal, { onClose: function () {
                            _this.setState({ agreementPersonalDataShowModal: false });
                        }, show: this.state.agreementPersonalDataShowModal, children: React__default['default'].createElement(React__default['default'].Fragment, null,
                            React__default['default'].createElement("p", null, "\u0412\u00A0\u0441\u043E\u043E\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0438\u0438 \u0441\u00A0\u0442\u0440\u0435\u0431\u043E\u0432\u0430\u043D\u0438\u044F\u043C\u0438 \u0424\u0435\u0434\u0435\u0440\u0430\u043B\u044C\u043D\u043E\u0433\u043E \u0437\u0430\u043A\u043E\u043D\u0430 \u043E\u0442\u00A027.07.2006\u00A0\u0433. \u2116\u00A0152-\u0424\u0417 \u00AB\u041E\u00A0\u043F\u0435\u0440\u0441\u043E\u043D\u0430\u043B\u044C\u043D\u044B\u0445 \u0434\u0430\u043D\u043D\u044B\u0445\u00BB \u044F\u00A0\u0434\u0430\u044E \u0441\u0432\u043E\u0451 \u0441\u043E\u0433\u043B\u0430\u0441\u0438\u0435 \u041F\u0443\u0431\u043B\u0438\u0447\u043D\u043E\u043C\u0443 \u0430\u043A\u0446\u0438\u043E\u043D\u0435\u0440\u043D\u043E\u043C\u0443 \u043E\u0431\u0449\u0435\u0441\u0442\u0432\u0443 \u0411\u0430\u043D\u043A \u00AB\u0424\u0438\u043D\u0430\u043D\u0441\u043E\u0432\u0430\u044F \u041A\u043E\u0440\u043F\u043E\u0440\u0430\u0446\u0438\u044F \u041E\u0442\u043A\u0440\u044B\u0442\u0438\u0435\u00BB (\u0413\u0435\u043D\u0435\u0440\u0430\u043B\u044C\u043D\u0430\u044F \u043B\u0438\u0446\u0435\u043D\u0437\u0438\u044F \u043D\u0430\u00A0\u043E\u0441\u0443\u0449\u0435\u0441\u0442\u0432\u043B\u0435\u043D\u0438\u0435 \u0431\u0430\u043D\u043A\u043E\u0432\u0441\u043A\u0438\u0445 \u043E\u043F\u0435\u0440\u0430\u0446\u0438\u0439 \u2116\u00A02209, \u0432\u044B\u0434\u0430\u043D\u0430 \u0411\u0430\u043D\u043A\u043E\u043C \u0420\u043E\u0441\u0441\u0438\u0438\u00A024.11.2014\u00A0\u0433., \u043C\u0435\u0441\u0442\u043E \u043D\u0430\u0445\u043E\u0436\u0434\u0435\u043D\u0438\u044F: 115114, \u0433. \u041C\u043E\u0441\u043A\u0432\u0430, \u0443\u043B. \u041B\u0435\u0442\u043D\u0438\u043A\u043E\u0432\u0441\u043A\u0430\u044F, \u0434.\u00A02, \u0441\u0442\u0440.\u00A04), \u041A\u0418\u0412\u0418 \u0411\u0430\u043D\u043A (\u0430\u043A\u0446\u0438\u043E\u043D\u0435\u0440\u043D\u043E\u0435 \u043E\u0431\u0449\u0435\u0441\u0442\u0432\u043E) (\u0413\u0435\u043D\u0435\u0440\u0430\u043B\u044C\u043D\u0430\u044F \u043B\u0438\u0446\u0435\u043D\u0437\u0438\u044F \u0411\u0430\u043D\u043A\u0430 \u0420\u043E\u0441\u0441\u0438\u0438 \u2116\u00A02241, \u0432\u044B\u0434\u0430\u043D\u0430 \u0411\u0430\u043D\u043A\u043E\u043C \u0420\u043E\u0441\u0441\u0438\u0438 \u043E\u0442\u00A022.01.2015\u00A0\u0433., \u043C\u0435\u0441\u0442\u043E \u043D\u0430\u0445\u043E\u0436\u0434\u0435\u043D\u0438\u044F: 117648, \u0433. \u041C\u043E\u0441\u043A\u0432\u0430, \u043C\u043A\u0440. \u0427\u0435\u0440\u0442\u0430\u043D\u043E\u0432\u043E \u0421\u0435\u0432\u0435\u0440\u043D\u043E\u0435, \u0434. 1\u0410, \u043A\u043E\u0440\u043F.\u00A01), \u0410\u041E\u00A0\u00AB\u0422\u043E\u0447\u043A\u0430\u00BB (\u043C\u0435\u0441\u0442\u043E \u043D\u0430\u0445\u043E\u0436\u0434\u0435\u043D\u0438\u044F: 109240, \u0433.\u041C\u043E\u0441\u043A\u0432\u0430, \u0443\u043B.\u0420\u0430\u0434\u0438\u0449\u0435\u0432\u0441\u043A\u0430\u044F \u0432\u0435\u0440\u0445\u043D., \u0434.2/1, \u0441\u0442\u0440\u043E\u0435\u043D\u0438\u0435\u00A05, \u043F\u043E\u043C.1, \u044D\u0442.3, \u043A\u043E\u043C.4) (\u0434\u0430\u043B\u0435\u0435\u00A0\u2014 \u041E\u043F\u0435\u0440\u0430\u0442\u043E\u0440\u044B) \u043D\u0430\u00A0\u043E\u0431\u0440\u0430\u0431\u043E\u0442\u043A\u0443, \u0441\u0431\u043E\u0440, \u0437\u0430\u043F\u0438\u0441\u044C, \u0441\u0438\u0441\u0442\u0435\u043C\u0430\u0442\u0438\u0437\u0430\u0446\u0438\u044E, \u043D\u0430\u043A\u043E\u043F\u043B\u0435\u043D\u0438\u0435, \u0445\u0440\u0430\u043D\u0435\u043D\u0438\u0435, \u0443\u0442\u043E\u0447\u043D\u0435\u043D\u0438\u0435, \u043E\u0431\u043D\u043E\u0432\u043B\u0435\u043D\u0438\u0435, \u0438\u0437\u043C\u0435\u043D\u0435\u043D\u0438\u0435, \u0438\u0437\u0432\u043B\u0435\u0447\u0435\u043D\u0438\u0435, \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u043D\u0438\u0435, \u0440\u0430\u0441\u043F\u0440\u043E\u0441\u0442\u0440\u0430\u043D\u0435\u043D\u0438\u0435, \u043F\u0435\u0440\u0435\u0434\u0430\u0447\u0443, \u043E\u0431\u0435\u0437\u043B\u0438\u0447\u0438\u0432\u0430\u043D\u0438\u0435, \u0431\u043B\u043E\u043A\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u0435 \u0438\u00A0\u0443\u0434\u0430\u043B\u0435\u043D\u0438\u0435 \u043C\u043E\u0438\u0445 \u043F\u0435\u0440\u0441\u043E\u043D\u0430\u043B\u044C\u043D\u044B\u0445 \u0434\u0430\u043D\u043D\u044B\u0445, \u0441\u043E\u0432\u0435\u0440\u0448\u0430\u0435\u043C\u0443\u044E c\u00A0\u0438\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u043D\u0438\u0435\u043C \u0441\u0440\u0435\u0434\u0441\u0442\u0432 \u0430\u0432\u0442\u043E\u043C\u0430\u0442\u0438\u0437\u0430\u0446\u0438\u0438 \u0438\u043B\u0438 \u0431\u0435\u0437 \u043D\u0438\u0445."),
                            React__default['default'].createElement("p", null, "\u0412\u00A0\u0441\u043E\u043E\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0438\u0438 \u0441\u00A0\u0424\u0435\u0434\u0435\u0440\u0430\u043B\u044C\u043D\u044B\u043C \u0437\u0430\u043A\u043E\u043D\u043E\u043C \u043E\u0442\u00A007.07.2003 \u2116\u00A0126-\u0424\u0417 \u00AB\u041E\u00A0\u0441\u0432\u044F\u0437\u0438\u00BB \u0434\u0430\u044E \u0441\u0432\u043E\u0435 \u0441\u043E\u0433\u043B\u0430\u0441\u0438\u0435 \u043E\u043F\u0435\u0440\u0430\u0442\u043E\u0440\u0443 \u0441\u0432\u044F\u0437\u0438, \u0441\u00A0\u043A\u043E\u0442\u043E\u0440\u044B\u043C \u0443\u00A0\u043C\u0435\u043D\u044F \u0437\u0430\u043A\u043B\u044E\u0447\u0435\u043D \u0434\u043E\u0433\u043E\u0432\u043E\u0440 \u043E\u0431\u00A0\u043E\u043A\u0430\u0437\u0430\u043D\u0438\u0438 \u0443\u0441\u043B\u0443\u0433 \u0441\u0432\u044F\u0437\u0438 \u0432\u00A0\u043E\u0442\u043D\u043E\u0448\u0435\u043D\u0438\u0438 \u043C\u043E\u0431\u0438\u043B\u044C\u043D\u043E\u0433\u043E \u043D\u043E\u043C\u0435\u0440\u0430, \u0443\u043A\u0430\u0437\u0430\u043D\u043D\u043E\u0433\u043E \u043C\u043D\u043E\u0439, \u043D\u0430\u00A0\u043F\u0440\u0435\u0434\u043E\u0441\u0442\u0430\u0432\u043B\u0435\u043D\u0438\u0435 \u041E\u043F\u0435\u0440\u0430\u0442\u043E\u0440\u0430\u043C \u0441\u0432\u0435\u0434\u0435\u043D\u0438\u0439 \u043E\u0431\u00A0\u0430\u0431\u043E\u043D\u0435\u043D\u0442\u0435 \u0438\u00A0\u043E\u043A\u0430\u0437\u044B\u0432\u0430\u0435\u043C\u044B\u0445 \u043C\u043D\u0435 \u0443\u0441\u043B\u0443\u0433\u0430\u0445 \u0441\u0432\u044F\u0437\u0438 \u043F\u043E\u00A0\u0434\u043E\u0433\u043E\u0432\u043E\u0440\u0443 \u043E\u0431\u00A0\u043E\u043A\u0430\u0437\u0430\u043D\u0438\u0438 \u0443\u0441\u043B\u0443\u0433 \u0441\u0432\u044F\u0437\u0438, \u0437\u0430\u043A\u043B\u044E\u0447\u0435\u043D\u043D\u043E\u043C\u0443 \u0441\u00A0\u0442\u0430\u043A\u0438\u043C \u043E\u043F\u0435\u0440\u0430\u0442\u043E\u0440\u043E\u043C \u0441\u0432\u044F\u0437\u0438."),
                            React__default['default'].createElement("p", null, "\u0414\u0430\u044E \u0441\u043E\u0433\u043B\u0430\u0441\u0438\u0435 \u043D\u0430\u00A0\u043E\u0431\u0440\u0430\u0431\u043E\u0442\u043A\u0443 \u043C\u043E\u0438\u0445 \u043F\u0435\u0440\u0441\u043E\u043D\u0430\u043B\u044C\u043D\u044B\u0445 \u0434\u0430\u043D\u043D\u044B\u0445, \u0432\u043A\u043B\u044E\u0447\u0430\u044F \u0444\u0430\u043C\u0438\u043B\u0438\u044E, \u0438\u043C\u044F, \u043E\u0442\u0447\u0435\u0441\u0442\u0432\u043E, \u0434\u0430\u0442\u0443 \u0438\u00A0\u043C\u0435\u0441\u0442\u043E \u0440\u043E\u0436\u0434\u0435\u043D\u0438\u044F, \u0434\u0430\u043D\u043D\u044B\u0435 \u0434\u043E\u043A\u0443\u043C\u0435\u043D\u0442\u0430, \u0443\u0434\u043E\u0441\u0442\u043E\u0432\u0435\u0440\u044F\u044E\u0449\u0435\u0433\u043E \u043B\u0438\u0447\u043D\u043E\u0441\u0442\u044C, \u0434\u0430\u043D\u043D\u044B\u0435 \u043E\u00A0\u0433\u0440\u0430\u0436\u0434\u0430\u043D\u0441\u0442\u0432\u0435, \u0430\u0434\u0440\u0435\u0441\u0435, \u0441\u0435\u043C\u0435\u0439\u043D\u043E\u043C, \u0441\u043E\u0446\u0438\u0430\u043B\u044C\u043D\u043E\u043C, \u0438\u043C\u0443\u0449\u0435\u0441\u0442\u0432\u0435\u043D\u043D\u043E\u043C \u043F\u043E\u043B\u043E\u0436\u0435\u043D\u0438\u0438, \u043E\u0431\u0440\u0430\u0437\u043E\u0432\u0430\u043D\u0438\u0438, \u043F\u0440\u043E\u0444\u0435\u0441\u0441\u0438\u0438, \u0434\u043E\u0445\u043E\u0434\u0430\u0445, \u043C\u0435\u0441\u0442\u0435 \u0440\u0430\u0431\u043E\u0442\u044B, \u043A\u043E\u043D\u0442\u0430\u043A\u0442\u043D\u044B\u0445 \u0434\u0430\u043D\u043D\u044B\u0445 \u0442\u0435\u043B\u0435\u0444\u043E\u043D\u0430 \u0438\u00A0\u0434\u0440\u0443\u0433\u043E\u0439 \u0438\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u0438 \u043B\u0438\u0447\u043D\u043E\u0433\u043E \u0445\u0430\u0440\u0430\u043A\u0442\u0435\u0440\u0430, \u043A\u043E\u0442\u043E\u0440\u0430\u044F \u043C\u043E\u0436\u0435\u0442 \u0431\u044B\u0442\u044C \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u043D\u0430 \u0434\u043B\u044F \u0446\u0435\u043B\u0435\u0439 \u043F\u0440\u043E\u0434\u0432\u0438\u0436\u0435\u043D\u0438\u044F \u0443\u0441\u043B\u0443\u0433 \u041E\u043F\u0435\u0440\u0430\u0442\u043E\u0440\u043E\u0432, \u0441\u043E\u0432\u043C\u0435\u0441\u0442\u043D\u044B\u0445 \u0443\u0441\u043B\u0443\u0433 \u041E\u043F\u0435\u0440\u0430\u0442\u043E\u0440\u043E\u0432 \u0438\u00A0\u0442\u0440\u0435\u0442\u044C\u0438\u0445 \u043B\u0438\u0446."),
                            React__default['default'].createElement("p", null, "\u0414\u0430\u043D\u043D\u043E\u0435 \u0441\u043E\u0433\u043B\u0430\u0441\u0438\u0435 \u0434\u0435\u0439\u0441\u0442\u0432\u0443\u0435\u0442 \u0441\u00A0\u043C\u043E\u043C\u0435\u043D\u0442\u0430 \u043E\u0442\u043F\u0440\u0430\u0432\u043A\u0438 \u0437\u0430\u044F\u0432\u043A\u0438 \u0434\u043E\u00A0\u043C\u043E\u043C\u0435\u043D\u0442\u0430 \u043F\u043E\u043B\u0443\u0447\u0435\u043D\u0438\u044F \u041E\u043F\u0435\u0440\u0430\u0442\u043E\u0440\u0430\u043C\u0438 \u043F\u0438\u0441\u044C\u043C\u0435\u043D\u043D\u043E\u0433\u043E \u0437\u0430\u044F\u0432\u043B\u0435\u043D\u0438\u044F \u043E\u0431\u00A0\u043E\u0442\u0437\u044B\u0432\u0435 \u043D\u0430\u0441\u0442\u043E\u044F\u0449\u0435\u0433\u043E \u0441\u043E\u0433\u043B\u0430\u0441\u0438\u044F \u043D\u0430\u00A0\u043E\u0431\u0440\u0430\u0431\u043E\u0442\u043A\u0443 \u043F\u0435\u0440\u0441\u043E\u043D\u0430\u043B\u044C\u043D\u044B\u0445 \u0434\u0430\u043D\u043D\u044B\u0445."),
                            React__default['default'].createElement("p", null, "\u041E\u0441\u0442\u0430\u0432\u043B\u044F\u044F \u0441\u0432\u043E\u0438 \u0434\u0430\u043D\u043D\u044B\u0435 \u0432\u00A0\u043E\u0442\u043F\u0440\u0430\u0432\u043B\u044F\u0435\u043C\u043E\u0439 \u043C\u043D\u043E\u0439 \u0437\u0430\u044F\u0432\u043A\u0435 \u0438\u00A0\u043F\u0440\u0435\u0434\u043E\u0441\u0442\u0430\u0432\u043B\u044F\u044F \u0434\u043E\u043F\u043E\u043B\u043D\u0438\u0442\u0435\u043B\u044C\u043D\u044B\u0435 \u0434\u0430\u043D\u043D\u044B\u0435 \u0438\u00A0\u0434\u043E\u043A\u0443\u043C\u0435\u043D\u0442\u044B \u043F\u043E\u00A0\u0442\u0435\u043B\u0435\u0444\u043E\u043D\u0443, \u0444\u0430\u043A\u0441\u0443 \u0438\u043B\u0438 \u044D\u043B\u0435\u043A\u0442\u0440\u043E\u043D\u043D\u043E\u0439 \u043F\u043E\u0447\u0442\u0435, \u044F\u00A0\u043F\u043E\u0434\u0442\u0432\u0435\u0440\u0436\u0434\u0430\u044E \u0438\u00A0\u043F\u0440\u0438\u0437\u043D\u0430\u044E, \u0447\u0442\u043E \u044F\u00A0\u043F\u0440\u043E\u0447\u0438\u0442\u0430\u043B \u0438\u0437\u043B\u043E\u0436\u0435\u043D\u043D\u043E\u0435 \u0441\u043E\u0433\u043B\u0430\u0448\u0435\u043D\u0438\u0435, \u0438\u00A0\u0434\u0430\u044E \u0441\u0432\u043E\u0451 \u0431\u0435\u0437\u0443\u0441\u043B\u043E\u0432\u043D\u043E\u0435 \u0441\u043E\u0433\u043B\u0430\u0441\u0438\u0435 \u0431\u0435\u0437 \u043E\u0433\u043E\u0432\u043E\u0440\u043E\u043A \u0438\u00A0\u043E\u0433\u0440\u0430\u043D\u0438\u0447\u0435\u043D\u0438\u0439.")), header: React__default['default'].createElement("div", { className: "tochkasans-medium" }, "\u0421\u043E\u0433\u043B\u0430\u0448\u0435\u043D\u0438\u0435"), scrollable: true, centered: true, size: 's' }),
                    React__default['default'].createElement(Modal, { onClose: function () {
                            if (!_this.state.disabled) {
                                _this.setState({ findTinShowModal: false });
                            }
                        }, show: this.state.findTinShowModal, children: React__default['default'].createElement(React__default['default'].Fragment, null,
                            React__default['default'].createElement("p", { className: "tochkasans-medium font-size-225 mt-4 mt-l-3 mt-s-2" }, "\u0427\u0442\u043E\u0431\u044B \u0443\u0437\u043D\u0430\u0442\u044C \u0441\u0432\u043E\u0439 \u0418\u041D\u041D, \u043D\u0435\u043E\u0431\u0445\u043E\u0434\u0438\u043C\u043E \u0432\u0432\u0435\u0441\u0442\u0438 \u0441\u043B\u0435\u0434\u0443\u044E\u0449\u0438\u0435 \u043F\u0435\u0440\u0441\u043E\u043D\u0430\u043B\u044C\u043D\u044B\u0435 \u0434\u0430\u043D\u043D\u044B\u0435."),
                            React__default['default'].createElement("div", { className: "mt-4 mt-l-3 mt-s-2 mb-8 mb-l-7 mb-s-5" }, inputPersonalData)), header: React__default['default'].createElement("div", { className: "tochkasans-medium" }, "\u0423\u0437\u043D\u0430\u0442\u044C \u0441\u0432\u043E\u0439 \u0418\u041D\u041D"), footer: React__default['default'].createElement(React__default['default'].Fragment, null,
                            React__default['default'].createElement(ButtonT15, { disabled: this.state.disabled, link: true, onClick: function (event) {
                                    if (!_this.state.disabled) {
                                        _this.onClickFindTin(event);
                                    }
                                } }, "\u041E\u043F\u0440\u0435\u0434\u0435\u043B\u0438\u0442\u044C \u0418\u041D\u041D")), centered: true, size: 's' }))));
        };
        return DigitalForm;
    }(React__default['default'].Component));

    ReactDOM.render(React.createElement(React.StrictMode, null,
        React.createElement(DigitalForm, null)), document.getElementById('digital-form'));

}(React, ReactDOM, Inputmask));
//# sourceMappingURL=browser.js.map
