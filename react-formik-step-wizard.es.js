var v0 = (e, t) => () => (t || e((t = { exports: {} }).exports, t), t.exports);
var SO = v0((qe, Je) => {
  (function() {
    const t = document.createElement("link").relList;
    if (t && t.supports && t.supports("modulepreload"))
      return;
    for (const i of document.querySelectorAll('link[rel="modulepreload"]'))
      r(i);
    new MutationObserver((i) => {
      for (const o of i)
        if (o.type === "childList")
          for (const s of o.addedNodes)
            s.tagName === "LINK" && s.rel === "modulepreload" && r(s);
    }).observe(document, { childList: !0, subtree: !0 });
    function n(i) {
      const o = {};
      return i.integrity && (o.integrity = i.integrity), i.referrerPolicy && (o.referrerPolicy = i.referrerPolicy), i.crossOrigin === "use-credentials" ? o.credentials = "include" : i.crossOrigin === "anonymous" ? o.credentials = "omit" : o.credentials = "same-origin", o;
    }
    function r(i) {
      if (i.ep)
        return;
      i.ep = !0;
      const o = n(i);
      fetch(i.href, o);
    }
  })();
  var Mt = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
  function bs(e) {
    return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
  }
  var Ap = { exports: {} }, $s = {}, Op = { exports: {} }, B = {};
  /**
   * @license React
   * react.production.min.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */
  var to = Symbol.for("react.element"), x0 = Symbol.for("react.portal"), S0 = Symbol.for("react.fragment"), w0 = Symbol.for("react.strict_mode"), T0 = Symbol.for("react.profiler"), E0 = Symbol.for("react.provider"), C0 = Symbol.for("react.context"), P0 = Symbol.for("react.forward_ref"), k0 = Symbol.for("react.suspense"), _0 = Symbol.for("react.memo"), A0 = Symbol.for("react.lazy"), kf = Symbol.iterator;
  function O0(e) {
    return e === null || typeof e != "object" ? null : (e = kf && e[kf] || e["@@iterator"], typeof e == "function" ? e : null);
  }
  var Fp = { isMounted: function() {
    return !1;
  }, enqueueForceUpdate: function() {
  }, enqueueReplaceState: function() {
  }, enqueueSetState: function() {
  } }, jp = Object.assign, Dp = {};
  function Zr(e, t, n) {
    this.props = e, this.context = t, this.refs = Dp, this.updater = n || Fp;
  }
  Zr.prototype.isReactComponent = {};
  Zr.prototype.setState = function(e, t) {
    if (typeof e != "object" && typeof e != "function" && e != null)
      throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
    this.updater.enqueueSetState(this, e, t, "setState");
  };
  Zr.prototype.forceUpdate = function(e) {
    this.updater.enqueueForceUpdate(this, e, "forceUpdate");
  };
  function Mp() {
  }
  Mp.prototype = Zr.prototype;
  function $u(e, t, n) {
    this.props = e, this.context = t, this.refs = Dp, this.updater = n || Fp;
  }
  var Iu = $u.prototype = new Mp();
  Iu.constructor = $u;
  jp(Iu, Zr.prototype);
  Iu.isPureReactComponent = !0;
  var _f = Array.isArray, Rp = Object.prototype.hasOwnProperty, zu = { current: null }, Lp = { key: !0, ref: !0, __self: !0, __source: !0 };
  function Vp(e, t, n) {
    var r, i = {}, o = null, s = null;
    if (t != null)
      for (r in t.ref !== void 0 && (s = t.ref), t.key !== void 0 && (o = "" + t.key), t)
        Rp.call(t, r) && !Lp.hasOwnProperty(r) && (i[r] = t[r]);
    var a = arguments.length - 2;
    if (a === 1)
      i.children = n;
    else if (1 < a) {
      for (var l = Array(a), u = 0; u < a; u++)
        l[u] = arguments[u + 2];
      i.children = l;
    }
    if (e && e.defaultProps)
      for (r in a = e.defaultProps, a)
        i[r] === void 0 && (i[r] = a[r]);
    return { $$typeof: to, type: e, key: o, ref: s, props: i, _owner: zu.current };
  }
  function F0(e, t) {
    return { $$typeof: to, type: e.type, key: t, ref: e.ref, props: e.props, _owner: e._owner };
  }
  function Bu(e) {
    return typeof e == "object" && e !== null && e.$$typeof === to;
  }
  function j0(e) {
    var t = { "=": "=0", ":": "=2" };
    return "$" + e.replace(/[=:]/g, function(n) {
      return t[n];
    });
  }
  var Af = /\/+/g;
  function Fa(e, t) {
    return typeof e == "object" && e !== null && e.key != null ? j0("" + e.key) : t.toString(36);
  }
  function Io(e, t, n, r, i) {
    var o = typeof e;
    (o === "undefined" || o === "boolean") && (e = null);
    var s = !1;
    if (e === null)
      s = !0;
    else
      switch (o) {
        case "string":
        case "number":
          s = !0;
          break;
        case "object":
          switch (e.$$typeof) {
            case to:
            case x0:
              s = !0;
          }
      }
    if (s)
      return s = e, i = i(s), e = r === "" ? "." + Fa(s, 0) : r, _f(i) ? (n = "", e != null && (n = e.replace(Af, "$&/") + "/"), Io(i, t, n, "", function(u) {
        return u;
      })) : i != null && (Bu(i) && (i = F0(i, n + (!i.key || s && s.key === i.key ? "" : ("" + i.key).replace(Af, "$&/") + "/") + e)), t.push(i)), 1;
    if (s = 0, r = r === "" ? "." : r + ":", _f(e))
      for (var a = 0; a < e.length; a++) {
        o = e[a];
        var l = r + Fa(o, a);
        s += Io(o, t, n, l, i);
      }
    else if (l = O0(e), typeof l == "function")
      for (e = l.call(e), a = 0; !(o = e.next()).done; )
        o = o.value, l = r + Fa(o, a++), s += Io(o, t, n, l, i);
    else if (o === "object")
      throw t = String(e), Error("Objects are not valid as a React child (found: " + (t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t) + "). If you meant to render a collection of children, use an array instead.");
    return s;
  }
  function go(e, t, n) {
    if (e == null)
      return e;
    var r = [], i = 0;
    return Io(e, r, "", "", function(o) {
      return t.call(n, o, i++);
    }), r;
  }
  function D0(e) {
    if (e._status === -1) {
      var t = e._result;
      t = t(), t.then(function(n) {
        (e._status === 0 || e._status === -1) && (e._status = 1, e._result = n);
      }, function(n) {
        (e._status === 0 || e._status === -1) && (e._status = 2, e._result = n);
      }), e._status === -1 && (e._status = 0, e._result = t);
    }
    if (e._status === 1)
      return e._result.default;
    throw e._result;
  }
  var be = { current: null }, zo = { transition: null }, M0 = { ReactCurrentDispatcher: be, ReactCurrentBatchConfig: zo, ReactCurrentOwner: zu };
  B.Children = { map: go, forEach: function(e, t, n) {
    go(e, function() {
      t.apply(this, arguments);
    }, n);
  }, count: function(e) {
    var t = 0;
    return go(e, function() {
      t++;
    }), t;
  }, toArray: function(e) {
    return go(e, function(t) {
      return t;
    }) || [];
  }, only: function(e) {
    if (!Bu(e))
      throw Error("React.Children.only expected to receive a single React element child.");
    return e;
  } };
  B.Component = Zr;
  B.Fragment = S0;
  B.Profiler = T0;
  B.PureComponent = $u;
  B.StrictMode = w0;
  B.Suspense = k0;
  B.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = M0;
  B.cloneElement = function(e, t, n) {
    if (e == null)
      throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + e + ".");
    var r = jp({}, e.props), i = e.key, o = e.ref, s = e._owner;
    if (t != null) {
      if (t.ref !== void 0 && (o = t.ref, s = zu.current), t.key !== void 0 && (i = "" + t.key), e.type && e.type.defaultProps)
        var a = e.type.defaultProps;
      for (l in t)
        Rp.call(t, l) && !Lp.hasOwnProperty(l) && (r[l] = t[l] === void 0 && a !== void 0 ? a[l] : t[l]);
    }
    var l = arguments.length - 2;
    if (l === 1)
      r.children = n;
    else if (1 < l) {
      a = Array(l);
      for (var u = 0; u < l; u++)
        a[u] = arguments[u + 2];
      r.children = a;
    }
    return { $$typeof: to, type: e.type, key: i, ref: o, props: r, _owner: s };
  };
  B.createContext = function(e) {
    return e = { $$typeof: C0, _currentValue: e, _currentValue2: e, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, e.Provider = { $$typeof: E0, _context: e }, e.Consumer = e;
  };
  B.createElement = Vp;
  B.createFactory = function(e) {
    var t = Vp.bind(null, e);
    return t.type = e, t;
  };
  B.createRef = function() {
    return { current: null };
  };
  B.forwardRef = function(e) {
    return { $$typeof: P0, render: e };
  };
  B.isValidElement = Bu;
  B.lazy = function(e) {
    return { $$typeof: A0, _payload: { _status: -1, _result: e }, _init: D0 };
  };
  B.memo = function(e, t) {
    return { $$typeof: _0, type: e, compare: t === void 0 ? null : t };
  };
  B.startTransition = function(e) {
    var t = zo.transition;
    zo.transition = {};
    try {
      e();
    } finally {
      zo.transition = t;
    }
  };
  B.unstable_act = function() {
    throw Error("act(...) is not supported in production builds of React.");
  };
  B.useCallback = function(e, t) {
    return be.current.useCallback(e, t);
  };
  B.useContext = function(e) {
    return be.current.useContext(e);
  };
  B.useDebugValue = function() {
  };
  B.useDeferredValue = function(e) {
    return be.current.useDeferredValue(e);
  };
  B.useEffect = function(e, t) {
    return be.current.useEffect(e, t);
  };
  B.useId = function() {
    return be.current.useId();
  };
  B.useImperativeHandle = function(e, t, n) {
    return be.current.useImperativeHandle(e, t, n);
  };
  B.useInsertionEffect = function(e, t) {
    return be.current.useInsertionEffect(e, t);
  };
  B.useLayoutEffect = function(e, t) {
    return be.current.useLayoutEffect(e, t);
  };
  B.useMemo = function(e, t) {
    return be.current.useMemo(e, t);
  };
  B.useReducer = function(e, t, n) {
    return be.current.useReducer(e, t, n);
  };
  B.useRef = function(e) {
    return be.current.useRef(e);
  };
  B.useState = function(e) {
    return be.current.useState(e);
  };
  B.useSyncExternalStore = function(e, t, n) {
    return be.current.useSyncExternalStore(e, t, n);
  };
  B.useTransition = function() {
    return be.current.useTransition();
  };
  B.version = "18.2.0";
  Op.exports = B;
  var S = Op.exports;
  const Ut = /* @__PURE__ */ bs(S);
  /**
   * @license React
   * react-jsx-runtime.production.min.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */
  var R0 = S, L0 = Symbol.for("react.element"), V0 = Symbol.for("react.fragment"), N0 = Object.prototype.hasOwnProperty, b0 = R0.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, $0 = { key: !0, ref: !0, __self: !0, __source: !0 };
  function Np(e, t, n) {
    var r, i = {}, o = null, s = null;
    n !== void 0 && (o = "" + n), t.key !== void 0 && (o = "" + t.key), t.ref !== void 0 && (s = t.ref);
    for (r in t)
      N0.call(t, r) && !$0.hasOwnProperty(r) && (i[r] = t[r]);
    if (e && e.defaultProps)
      for (r in t = e.defaultProps, t)
        i[r] === void 0 && (i[r] = t[r]);
    return { $$typeof: L0, type: e, key: o, ref: s, props: i, _owner: b0.current };
  }
  $s.Fragment = V0;
  $s.jsx = Np;
  $s.jsxs = Np;
  Ap.exports = $s;
  var F = Ap.exports, Tl = {}, bp = { exports: {} }, rt = {}, $p = { exports: {} }, Ip = {};
  /**
   * @license React
   * scheduler.production.min.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */
  (function(e) {
    function t(P, O) {
      var j = P.length;
      P.push(O);
      e:
        for (; 0 < j; ) {
          var R = j - 1 >>> 1, U = P[R];
          if (0 < i(U, O))
            P[R] = O, P[j] = U, j = R;
          else
            break e;
        }
    }
    function n(P) {
      return P.length === 0 ? null : P[0];
    }
    function r(P) {
      if (P.length === 0)
        return null;
      var O = P[0], j = P.pop();
      if (j !== O) {
        P[0] = j;
        e:
          for (var R = 0, U = P.length, Me = U >>> 1; R < Me; ) {
            var Re = 2 * (R + 1) - 1, Ye = P[Re], _e = Re + 1, mt = P[_e];
            if (0 > i(Ye, j))
              _e < U && 0 > i(mt, Ye) ? (P[R] = mt, P[_e] = j, R = _e) : (P[R] = Ye, P[Re] = j, R = Re);
            else if (_e < U && 0 > i(mt, j))
              P[R] = mt, P[_e] = j, R = _e;
            else
              break e;
          }
      }
      return O;
    }
    function i(P, O) {
      var j = P.sortIndex - O.sortIndex;
      return j !== 0 ? j : P.id - O.id;
    }
    if (typeof performance == "object" && typeof performance.now == "function") {
      var o = performance;
      e.unstable_now = function() {
        return o.now();
      };
    } else {
      var s = Date, a = s.now();
      e.unstable_now = function() {
        return s.now() - a;
      };
    }
    var l = [], u = [], f = 1, c = null, d = 3, p = !1, g = !1, v = !1, T = typeof setTimeout == "function" ? setTimeout : null, y = typeof clearTimeout == "function" ? clearTimeout : null, h = typeof setImmediate < "u" ? setImmediate : null;
    typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
    function m(P) {
      for (var O = n(u); O !== null; ) {
        if (O.callback === null)
          r(u);
        else if (O.startTime <= P)
          r(u), O.sortIndex = O.expirationTime, t(l, O);
        else
          break;
        O = n(u);
      }
    }
    function x(P) {
      if (v = !1, m(P), !g)
        if (n(l) !== null)
          g = !0, q(k);
        else {
          var O = n(u);
          O !== null && ke(x, O.startTime - P);
        }
    }
    function k(P, O) {
      g = !1, v && (v = !1, y(_), _ = -1), p = !0;
      var j = d;
      try {
        for (m(O), c = n(l); c !== null && (!(c.expirationTime > O) || P && !I()); ) {
          var R = c.callback;
          if (typeof R == "function") {
            c.callback = null, d = c.priorityLevel;
            var U = R(c.expirationTime <= O);
            O = e.unstable_now(), typeof U == "function" ? c.callback = U : c === n(l) && r(l), m(O);
          } else
            r(l);
          c = n(l);
        }
        if (c !== null)
          var Me = !0;
        else {
          var Re = n(u);
          Re !== null && ke(x, Re.startTime - O), Me = !1;
        }
        return Me;
      } finally {
        c = null, d = j, p = !1;
      }
    }
    var E = !1, C = null, _ = -1, L = 5, V = -1;
    function I() {
      return !(e.unstable_now() - V < L);
    }
    function G() {
      if (C !== null) {
        var P = e.unstable_now();
        V = P;
        var O = !0;
        try {
          O = C(!0, P);
        } finally {
          O ? W() : (E = !1, C = null);
        }
      } else
        E = !1;
    }
    var W;
    if (typeof h == "function")
      W = function() {
        h(G);
      };
    else if (typeof MessageChannel < "u") {
      var K = new MessageChannel(), Qe = K.port2;
      K.port1.onmessage = G, W = function() {
        Qe.postMessage(null);
      };
    } else
      W = function() {
        T(G, 0);
      };
    function q(P) {
      C = P, E || (E = !0, W());
    }
    function ke(P, O) {
      _ = T(function() {
        P(e.unstable_now());
      }, O);
    }
    e.unstable_IdlePriority = 5, e.unstable_ImmediatePriority = 1, e.unstable_LowPriority = 4, e.unstable_NormalPriority = 3, e.unstable_Profiling = null, e.unstable_UserBlockingPriority = 2, e.unstable_cancelCallback = function(P) {
      P.callback = null;
    }, e.unstable_continueExecution = function() {
      g || p || (g = !0, q(k));
    }, e.unstable_forceFrameRate = function(P) {
      0 > P || 125 < P ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : L = 0 < P ? Math.floor(1e3 / P) : 5;
    }, e.unstable_getCurrentPriorityLevel = function() {
      return d;
    }, e.unstable_getFirstCallbackNode = function() {
      return n(l);
    }, e.unstable_next = function(P) {
      switch (d) {
        case 1:
        case 2:
        case 3:
          var O = 3;
          break;
        default:
          O = d;
      }
      var j = d;
      d = O;
      try {
        return P();
      } finally {
        d = j;
      }
    }, e.unstable_pauseExecution = function() {
    }, e.unstable_requestPaint = function() {
    }, e.unstable_runWithPriority = function(P, O) {
      switch (P) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          P = 3;
      }
      var j = d;
      d = P;
      try {
        return O();
      } finally {
        d = j;
      }
    }, e.unstable_scheduleCallback = function(P, O, j) {
      var R = e.unstable_now();
      switch (typeof j == "object" && j !== null ? (j = j.delay, j = typeof j == "number" && 0 < j ? R + j : R) : j = R, P) {
        case 1:
          var U = -1;
          break;
        case 2:
          U = 250;
          break;
        case 5:
          U = 1073741823;
          break;
        case 4:
          U = 1e4;
          break;
        default:
          U = 5e3;
      }
      return U = j + U, P = { id: f++, callback: O, priorityLevel: P, startTime: j, expirationTime: U, sortIndex: -1 }, j > R ? (P.sortIndex = j, t(u, P), n(l) === null && P === n(u) && (v ? (y(_), _ = -1) : v = !0, ke(x, j - R))) : (P.sortIndex = U, t(l, P), g || p || (g = !0, q(k))), P;
    }, e.unstable_shouldYield = I, e.unstable_wrapCallback = function(P) {
      var O = d;
      return function() {
        var j = d;
        d = O;
        try {
          return P.apply(this, arguments);
        } finally {
          d = j;
        }
      };
    };
  })(Ip);
  $p.exports = Ip;
  var I0 = $p.exports;
  /**
   * @license React
   * react-dom.production.min.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */
  var zp = S, tt = I0;
  function A(e) {
    for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++)
      t += "&args[]=" + encodeURIComponent(arguments[n]);
    return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  var Bp = /* @__PURE__ */ new Set(), Di = {};
  function ir(e, t) {
    Ir(e, t), Ir(e + "Capture", t);
  }
  function Ir(e, t) {
    for (Di[e] = t, e = 0; e < t.length; e++)
      Bp.add(t[e]);
  }
  var Kt = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), El = Object.prototype.hasOwnProperty, z0 = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, Of = {}, Ff = {};
  function B0(e) {
    return El.call(Ff, e) ? !0 : El.call(Of, e) ? !1 : z0.test(e) ? Ff[e] = !0 : (Of[e] = !0, !1);
  }
  function U0(e, t, n, r) {
    if (n !== null && n.type === 0)
      return !1;
    switch (typeof t) {
      case "function":
      case "symbol":
        return !0;
      case "boolean":
        return r ? !1 : n !== null ? !n.acceptsBooleans : (e = e.toLowerCase().slice(0, 5), e !== "data-" && e !== "aria-");
      default:
        return !1;
    }
  }
  function H0(e, t, n, r) {
    if (t === null || typeof t > "u" || U0(e, t, n, r))
      return !0;
    if (r)
      return !1;
    if (n !== null)
      switch (n.type) {
        case 3:
          return !t;
        case 4:
          return t === !1;
        case 5:
          return isNaN(t);
        case 6:
          return isNaN(t) || 1 > t;
      }
    return !1;
  }
  function $e(e, t, n, r, i, o, s) {
    this.acceptsBooleans = t === 2 || t === 3 || t === 4, this.attributeName = r, this.attributeNamespace = i, this.mustUseProperty = n, this.propertyName = e, this.type = t, this.sanitizeURL = o, this.removeEmptyString = s;
  }
  var Pe = {};
  "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e) {
    Pe[e] = new $e(e, 0, !1, e, null, !1, !1);
  });
  [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(e) {
    var t = e[0];
    Pe[t] = new $e(t, 1, !1, e[1], null, !1, !1);
  });
  ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
    Pe[e] = new $e(e, 2, !1, e.toLowerCase(), null, !1, !1);
  });
  ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) {
    Pe[e] = new $e(e, 2, !1, e, null, !1, !1);
  });
  "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e) {
    Pe[e] = new $e(e, 3, !1, e.toLowerCase(), null, !1, !1);
  });
  ["checked", "multiple", "muted", "selected"].forEach(function(e) {
    Pe[e] = new $e(e, 3, !0, e, null, !1, !1);
  });
  ["capture", "download"].forEach(function(e) {
    Pe[e] = new $e(e, 4, !1, e, null, !1, !1);
  });
  ["cols", "rows", "size", "span"].forEach(function(e) {
    Pe[e] = new $e(e, 6, !1, e, null, !1, !1);
  });
  ["rowSpan", "start"].forEach(function(e) {
    Pe[e] = new $e(e, 5, !1, e.toLowerCase(), null, !1, !1);
  });
  var Uu = /[\-:]([a-z])/g;
  function Hu(e) {
    return e[1].toUpperCase();
  }
  "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e) {
    var t = e.replace(
      Uu,
      Hu
    );
    Pe[t] = new $e(t, 1, !1, e, null, !1, !1);
  });
  "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e) {
    var t = e.replace(Uu, Hu);
    Pe[t] = new $e(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
  });
  ["xml:base", "xml:lang", "xml:space"].forEach(function(e) {
    var t = e.replace(Uu, Hu);
    Pe[t] = new $e(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
  });
  ["tabIndex", "crossOrigin"].forEach(function(e) {
    Pe[e] = new $e(e, 1, !1, e.toLowerCase(), null, !1, !1);
  });
  Pe.xlinkHref = new $e("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1);
  ["src", "href", "action", "formAction"].forEach(function(e) {
    Pe[e] = new $e(e, 1, !1, e.toLowerCase(), null, !0, !0);
  });
  function Wu(e, t, n, r) {
    var i = Pe.hasOwnProperty(t) ? Pe[t] : null;
    (i !== null ? i.type !== 0 : r || !(2 < t.length) || t[0] !== "o" && t[0] !== "O" || t[1] !== "n" && t[1] !== "N") && (H0(t, n, i, r) && (n = null), r || i === null ? B0(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n)) : i.mustUseProperty ? e[i.propertyName] = n === null ? i.type === 3 ? !1 : "" : n : (t = i.attributeName, r = i.attributeNamespace, n === null ? e.removeAttribute(t) : (i = i.type, n = i === 3 || i === 4 && n === !0 ? "" : "" + n, r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
  }
  var qt = zp.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, vo = Symbol.for("react.element"), gr = Symbol.for("react.portal"), vr = Symbol.for("react.fragment"), Gu = Symbol.for("react.strict_mode"), Cl = Symbol.for("react.profiler"), Up = Symbol.for("react.provider"), Hp = Symbol.for("react.context"), Ku = Symbol.for("react.forward_ref"), Pl = Symbol.for("react.suspense"), kl = Symbol.for("react.suspense_list"), Qu = Symbol.for("react.memo"), rn = Symbol.for("react.lazy"), Wp = Symbol.for("react.offscreen"), jf = Symbol.iterator;
  function ti(e) {
    return e === null || typeof e != "object" ? null : (e = jf && e[jf] || e["@@iterator"], typeof e == "function" ? e : null);
  }
  var ce = Object.assign, ja;
  function di(e) {
    if (ja === void 0)
      try {
        throw Error();
      } catch (n) {
        var t = n.stack.trim().match(/\n( *(at )?)/);
        ja = t && t[1] || "";
      }
    return `
` + ja + e;
  }
  var Da = !1;
  function Ma(e, t) {
    if (!e || Da)
      return "";
    Da = !0;
    var n = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      if (t)
        if (t = function() {
          throw Error();
        }, Object.defineProperty(t.prototype, "props", { set: function() {
          throw Error();
        } }), typeof Reflect == "object" && Reflect.construct) {
          try {
            Reflect.construct(t, []);
          } catch (u) {
            var r = u;
          }
          Reflect.construct(e, [], t);
        } else {
          try {
            t.call();
          } catch (u) {
            r = u;
          }
          e.call(t.prototype);
        }
      else {
        try {
          throw Error();
        } catch (u) {
          r = u;
        }
        e();
      }
    } catch (u) {
      if (u && r && typeof u.stack == "string") {
        for (var i = u.stack.split(`
`), o = r.stack.split(`
`), s = i.length - 1, a = o.length - 1; 1 <= s && 0 <= a && i[s] !== o[a]; )
          a--;
        for (; 1 <= s && 0 <= a; s--, a--)
          if (i[s] !== o[a]) {
            if (s !== 1 || a !== 1)
              do
                if (s--, a--, 0 > a || i[s] !== o[a]) {
                  var l = `
` + i[s].replace(" at new ", " at ");
                  return e.displayName && l.includes("<anonymous>") && (l = l.replace("<anonymous>", e.displayName)), l;
                }
              while (1 <= s && 0 <= a);
            break;
          }
      }
    } finally {
      Da = !1, Error.prepareStackTrace = n;
    }
    return (e = e ? e.displayName || e.name : "") ? di(e) : "";
  }
  function W0(e) {
    switch (e.tag) {
      case 5:
        return di(e.type);
      case 16:
        return di("Lazy");
      case 13:
        return di("Suspense");
      case 19:
        return di("SuspenseList");
      case 0:
      case 2:
      case 15:
        return e = Ma(e.type, !1), e;
      case 11:
        return e = Ma(e.type.render, !1), e;
      case 1:
        return e = Ma(e.type, !0), e;
      default:
        return "";
    }
  }
  function _l(e) {
    if (e == null)
      return null;
    if (typeof e == "function")
      return e.displayName || e.name || null;
    if (typeof e == "string")
      return e;
    switch (e) {
      case vr:
        return "Fragment";
      case gr:
        return "Portal";
      case Cl:
        return "Profiler";
      case Gu:
        return "StrictMode";
      case Pl:
        return "Suspense";
      case kl:
        return "SuspenseList";
    }
    if (typeof e == "object")
      switch (e.$$typeof) {
        case Hp:
          return (e.displayName || "Context") + ".Consumer";
        case Up:
          return (e._context.displayName || "Context") + ".Provider";
        case Ku:
          var t = e.render;
          return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
        case Qu:
          return t = e.displayName || null, t !== null ? t : _l(e.type) || "Memo";
        case rn:
          t = e._payload, e = e._init;
          try {
            return _l(e(t));
          } catch {
          }
      }
    return null;
  }
  function G0(e) {
    var t = e.type;
    switch (e.tag) {
      case 24:
        return "Cache";
      case 9:
        return (t.displayName || "Context") + ".Consumer";
      case 10:
        return (t._context.displayName || "Context") + ".Provider";
      case 18:
        return "DehydratedFragment";
      case 11:
        return e = t.render, e = e.displayName || e.name || "", t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef");
      case 7:
        return "Fragment";
      case 5:
        return t;
      case 4:
        return "Portal";
      case 3:
        return "Root";
      case 6:
        return "Text";
      case 16:
        return _l(t);
      case 8:
        return t === Gu ? "StrictMode" : "Mode";
      case 22:
        return "Offscreen";
      case 12:
        return "Profiler";
      case 21:
        return "Scope";
      case 13:
        return "Suspense";
      case 19:
        return "SuspenseList";
      case 25:
        return "TracingMarker";
      case 1:
      case 0:
      case 17:
      case 2:
      case 14:
      case 15:
        if (typeof t == "function")
          return t.displayName || t.name || null;
        if (typeof t == "string")
          return t;
    }
    return null;
  }
  function Cn(e) {
    switch (typeof e) {
      case "boolean":
      case "number":
      case "string":
      case "undefined":
        return e;
      case "object":
        return e;
      default:
        return "";
    }
  }
  function Gp(e) {
    var t = e.type;
    return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
  }
  function K0(e) {
    var t = Gp(e) ? "checked" : "value", n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t), r = "" + e[t];
    if (!e.hasOwnProperty(t) && typeof n < "u" && typeof n.get == "function" && typeof n.set == "function") {
      var i = n.get, o = n.set;
      return Object.defineProperty(e, t, { configurable: !0, get: function() {
        return i.call(this);
      }, set: function(s) {
        r = "" + s, o.call(this, s);
      } }), Object.defineProperty(e, t, { enumerable: n.enumerable }), { getValue: function() {
        return r;
      }, setValue: function(s) {
        r = "" + s;
      }, stopTracking: function() {
        e._valueTracker = null, delete e[t];
      } };
    }
  }
  function xo(e) {
    e._valueTracker || (e._valueTracker = K0(e));
  }
  function Kp(e) {
    if (!e)
      return !1;
    var t = e._valueTracker;
    if (!t)
      return !0;
    var n = t.getValue(), r = "";
    return e && (r = Gp(e) ? e.checked ? "true" : "false" : e.value), e = r, e !== n ? (t.setValue(e), !0) : !1;
  }
  function ns(e) {
    if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u")
      return null;
    try {
      return e.activeElement || e.body;
    } catch {
      return e.body;
    }
  }
  function Al(e, t) {
    var n = t.checked;
    return ce({}, t, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: n ?? e._wrapperState.initialChecked });
  }
  function Df(e, t) {
    var n = t.defaultValue == null ? "" : t.defaultValue, r = t.checked != null ? t.checked : t.defaultChecked;
    n = Cn(t.value != null ? t.value : n), e._wrapperState = { initialChecked: r, initialValue: n, controlled: t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null };
  }
  function Qp(e, t) {
    t = t.checked, t != null && Wu(e, "checked", t, !1);
  }
  function Ol(e, t) {
    Qp(e, t);
    var n = Cn(t.value), r = t.type;
    if (n != null)
      r === "number" ? (n === 0 && e.value === "" || e.value != n) && (e.value = "" + n) : e.value !== "" + n && (e.value = "" + n);
    else if (r === "submit" || r === "reset") {
      e.removeAttribute("value");
      return;
    }
    t.hasOwnProperty("value") ? Fl(e, t.type, n) : t.hasOwnProperty("defaultValue") && Fl(e, t.type, Cn(t.defaultValue)), t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked);
  }
  function Mf(e, t, n) {
    if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
      var r = t.type;
      if (!(r !== "submit" && r !== "reset" || t.value !== void 0 && t.value !== null))
        return;
      t = "" + e._wrapperState.initialValue, n || t === e.value || (e.value = t), e.defaultValue = t;
    }
    n = e.name, n !== "" && (e.name = ""), e.defaultChecked = !!e._wrapperState.initialChecked, n !== "" && (e.name = n);
  }
  function Fl(e, t, n) {
    (t !== "number" || ns(e.ownerDocument) !== e) && (n == null ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
  }
  var hi = Array.isArray;
  function Rr(e, t, n, r) {
    if (e = e.options, t) {
      t = {};
      for (var i = 0; i < n.length; i++)
        t["$" + n[i]] = !0;
      for (n = 0; n < e.length; n++)
        i = t.hasOwnProperty("$" + e[n].value), e[n].selected !== i && (e[n].selected = i), i && r && (e[n].defaultSelected = !0);
    } else {
      for (n = "" + Cn(n), t = null, i = 0; i < e.length; i++) {
        if (e[i].value === n) {
          e[i].selected = !0, r && (e[i].defaultSelected = !0);
          return;
        }
        t !== null || e[i].disabled || (t = e[i]);
      }
      t !== null && (t.selected = !0);
    }
  }
  function jl(e, t) {
    if (t.dangerouslySetInnerHTML != null)
      throw Error(A(91));
    return ce({}, t, { value: void 0, defaultValue: void 0, children: "" + e._wrapperState.initialValue });
  }
  function Rf(e, t) {
    var n = t.value;
    if (n == null) {
      if (n = t.children, t = t.defaultValue, n != null) {
        if (t != null)
          throw Error(A(92));
        if (hi(n)) {
          if (1 < n.length)
            throw Error(A(93));
          n = n[0];
        }
        t = n;
      }
      t == null && (t = ""), n = t;
    }
    e._wrapperState = { initialValue: Cn(n) };
  }
  function Yp(e, t) {
    var n = Cn(t.value), r = Cn(t.defaultValue);
    n != null && (n = "" + n, n !== e.value && (e.value = n), t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)), r != null && (e.defaultValue = "" + r);
  }
  function Lf(e) {
    var t = e.textContent;
    t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
  }
  function Xp(e) {
    switch (e) {
      case "svg":
        return "http://www.w3.org/2000/svg";
      case "math":
        return "http://www.w3.org/1998/Math/MathML";
      default:
        return "http://www.w3.org/1999/xhtml";
    }
  }
  function Dl(e, t) {
    return e == null || e === "http://www.w3.org/1999/xhtml" ? Xp(t) : e === "http://www.w3.org/2000/svg" && t === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e;
  }
  var So, Zp = function(e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, n, r, i) {
      MSApp.execUnsafeLocalFunction(function() {
        return e(t, n, r, i);
      });
    } : e;
  }(function(e, t) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e)
      e.innerHTML = t;
    else {
      for (So = So || document.createElement("div"), So.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>", t = So.firstChild; e.firstChild; )
        e.removeChild(e.firstChild);
      for (; t.firstChild; )
        e.appendChild(t.firstChild);
    }
  });
  function Mi(e, t) {
    if (t) {
      var n = e.firstChild;
      if (n && n === e.lastChild && n.nodeType === 3) {
        n.nodeValue = t;
        return;
      }
    }
    e.textContent = t;
  }
  var gi = {
    animationIterationCount: !0,
    aspectRatio: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0
  }, Q0 = ["Webkit", "ms", "Moz", "O"];
  Object.keys(gi).forEach(function(e) {
    Q0.forEach(function(t) {
      t = t + e.charAt(0).toUpperCase() + e.substring(1), gi[t] = gi[e];
    });
  });
  function qp(e, t, n) {
    return t == null || typeof t == "boolean" || t === "" ? "" : n || typeof t != "number" || t === 0 || gi.hasOwnProperty(e) && gi[e] ? ("" + t).trim() : t + "px";
  }
  function Jp(e, t) {
    e = e.style;
    for (var n in t)
      if (t.hasOwnProperty(n)) {
        var r = n.indexOf("--") === 0, i = qp(n, t[n], r);
        n === "float" && (n = "cssFloat"), r ? e.setProperty(n, i) : e[n] = i;
      }
  }
  var Y0 = ce({ menuitem: !0 }, { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 });
  function Ml(e, t) {
    if (t) {
      if (Y0[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
        throw Error(A(137, e));
      if (t.dangerouslySetInnerHTML != null) {
        if (t.children != null)
          throw Error(A(60));
        if (typeof t.dangerouslySetInnerHTML != "object" || !("__html" in t.dangerouslySetInnerHTML))
          throw Error(A(61));
      }
      if (t.style != null && typeof t.style != "object")
        throw Error(A(62));
    }
  }
  function Rl(e, t) {
    if (e.indexOf("-") === -1)
      return typeof t.is == "string";
    switch (e) {
      case "annotation-xml":
      case "color-profile":
      case "font-face":
      case "font-face-src":
      case "font-face-uri":
      case "font-face-format":
      case "font-face-name":
      case "missing-glyph":
        return !1;
      default:
        return !0;
    }
  }
  var Ll = null;
  function Yu(e) {
    return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
  }
  var Vl = null, Lr = null, Vr = null;
  function Vf(e) {
    if (e = io(e)) {
      if (typeof Vl != "function")
        throw Error(A(280));
      var t = e.stateNode;
      t && (t = Hs(t), Vl(e.stateNode, e.type, t));
    }
  }
  function em(e) {
    Lr ? Vr ? Vr.push(e) : Vr = [e] : Lr = e;
  }
  function tm() {
    if (Lr) {
      var e = Lr, t = Vr;
      if (Vr = Lr = null, Vf(e), t)
        for (e = 0; e < t.length; e++)
          Vf(t[e]);
    }
  }
  function nm(e, t) {
    return e(t);
  }
  function rm() {
  }
  var Ra = !1;
  function im(e, t, n) {
    if (Ra)
      return e(t, n);
    Ra = !0;
    try {
      return nm(e, t, n);
    } finally {
      Ra = !1, (Lr !== null || Vr !== null) && (rm(), tm());
    }
  }
  function Ri(e, t) {
    var n = e.stateNode;
    if (n === null)
      return null;
    var r = Hs(n);
    if (r === null)
      return null;
    n = r[t];
    e:
      switch (t) {
        case "onClick":
        case "onClickCapture":
        case "onDoubleClick":
        case "onDoubleClickCapture":
        case "onMouseDown":
        case "onMouseDownCapture":
        case "onMouseMove":
        case "onMouseMoveCapture":
        case "onMouseUp":
        case "onMouseUpCapture":
        case "onMouseEnter":
          (r = !r.disabled) || (e = e.type, r = !(e === "button" || e === "input" || e === "select" || e === "textarea")), e = !r;
          break e;
        default:
          e = !1;
      }
    if (e)
      return null;
    if (n && typeof n != "function")
      throw Error(A(231, t, typeof n));
    return n;
  }
  var Nl = !1;
  if (Kt)
    try {
      var ni = {};
      Object.defineProperty(ni, "passive", { get: function() {
        Nl = !0;
      } }), window.addEventListener("test", ni, ni), window.removeEventListener("test", ni, ni);
    } catch {
      Nl = !1;
    }
  function X0(e, t, n, r, i, o, s, a, l) {
    var u = Array.prototype.slice.call(arguments, 3);
    try {
      t.apply(n, u);
    } catch (f) {
      this.onError(f);
    }
  }
  var vi = !1, rs = null, is = !1, bl = null, Z0 = { onError: function(e) {
    vi = !0, rs = e;
  } };
  function q0(e, t, n, r, i, o, s, a, l) {
    vi = !1, rs = null, X0.apply(Z0, arguments);
  }
  function J0(e, t, n, r, i, o, s, a, l) {
    if (q0.apply(this, arguments), vi) {
      if (vi) {
        var u = rs;
        vi = !1, rs = null;
      } else
        throw Error(A(198));
      is || (is = !0, bl = u);
    }
  }
  function or(e) {
    var t = e, n = e;
    if (e.alternate)
      for (; t.return; )
        t = t.return;
    else {
      e = t;
      do
        t = e, t.flags & 4098 && (n = t.return), e = t.return;
      while (e);
    }
    return t.tag === 3 ? n : null;
  }
  function om(e) {
    if (e.tag === 13) {
      var t = e.memoizedState;
      if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null)
        return t.dehydrated;
    }
    return null;
  }
  function Nf(e) {
    if (or(e) !== e)
      throw Error(A(188));
  }
  function e1(e) {
    var t = e.alternate;
    if (!t) {
      if (t = or(e), t === null)
        throw Error(A(188));
      return t !== e ? null : e;
    }
    for (var n = e, r = t; ; ) {
      var i = n.return;
      if (i === null)
        break;
      var o = i.alternate;
      if (o === null) {
        if (r = i.return, r !== null) {
          n = r;
          continue;
        }
        break;
      }
      if (i.child === o.child) {
        for (o = i.child; o; ) {
          if (o === n)
            return Nf(i), e;
          if (o === r)
            return Nf(i), t;
          o = o.sibling;
        }
        throw Error(A(188));
      }
      if (n.return !== r.return)
        n = i, r = o;
      else {
        for (var s = !1, a = i.child; a; ) {
          if (a === n) {
            s = !0, n = i, r = o;
            break;
          }
          if (a === r) {
            s = !0, r = i, n = o;
            break;
          }
          a = a.sibling;
        }
        if (!s) {
          for (a = o.child; a; ) {
            if (a === n) {
              s = !0, n = o, r = i;
              break;
            }
            if (a === r) {
              s = !0, r = o, n = i;
              break;
            }
            a = a.sibling;
          }
          if (!s)
            throw Error(A(189));
        }
      }
      if (n.alternate !== r)
        throw Error(A(190));
    }
    if (n.tag !== 3)
      throw Error(A(188));
    return n.stateNode.current === n ? e : t;
  }
  function sm(e) {
    return e = e1(e), e !== null ? am(e) : null;
  }
  function am(e) {
    if (e.tag === 5 || e.tag === 6)
      return e;
    for (e = e.child; e !== null; ) {
      var t = am(e);
      if (t !== null)
        return t;
      e = e.sibling;
    }
    return null;
  }
  var lm = tt.unstable_scheduleCallback, bf = tt.unstable_cancelCallback, t1 = tt.unstable_shouldYield, n1 = tt.unstable_requestPaint, de = tt.unstable_now, r1 = tt.unstable_getCurrentPriorityLevel, Xu = tt.unstable_ImmediatePriority, um = tt.unstable_UserBlockingPriority, os = tt.unstable_NormalPriority, i1 = tt.unstable_LowPriority, cm = tt.unstable_IdlePriority, Is = null, Ot = null;
  function o1(e) {
    if (Ot && typeof Ot.onCommitFiberRoot == "function")
      try {
        Ot.onCommitFiberRoot(Is, e, void 0, (e.current.flags & 128) === 128);
      } catch {
      }
  }
  var wt = Math.clz32 ? Math.clz32 : l1, s1 = Math.log, a1 = Math.LN2;
  function l1(e) {
    return e >>>= 0, e === 0 ? 32 : 31 - (s1(e) / a1 | 0) | 0;
  }
  var wo = 64, To = 4194304;
  function pi(e) {
    switch (e & -e) {
      case 1:
        return 1;
      case 2:
        return 2;
      case 4:
        return 4;
      case 8:
        return 8;
      case 16:
        return 16;
      case 32:
        return 32;
      case 64:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return e & 4194240;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
      case 67108864:
        return e & 130023424;
      case 134217728:
        return 134217728;
      case 268435456:
        return 268435456;
      case 536870912:
        return 536870912;
      case 1073741824:
        return 1073741824;
      default:
        return e;
    }
  }
  function ss(e, t) {
    var n = e.pendingLanes;
    if (n === 0)
      return 0;
    var r = 0, i = e.suspendedLanes, o = e.pingedLanes, s = n & 268435455;
    if (s !== 0) {
      var a = s & ~i;
      a !== 0 ? r = pi(a) : (o &= s, o !== 0 && (r = pi(o)));
    } else
      s = n & ~i, s !== 0 ? r = pi(s) : o !== 0 && (r = pi(o));
    if (r === 0)
      return 0;
    if (t !== 0 && t !== r && !(t & i) && (i = r & -r, o = t & -t, i >= o || i === 16 && (o & 4194240) !== 0))
      return t;
    if (r & 4 && (r |= n & 16), t = e.entangledLanes, t !== 0)
      for (e = e.entanglements, t &= r; 0 < t; )
        n = 31 - wt(t), i = 1 << n, r |= e[n], t &= ~i;
    return r;
  }
  function u1(e, t) {
    switch (e) {
      case 1:
      case 2:
      case 4:
        return t + 250;
      case 8:
      case 16:
      case 32:
      case 64:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return t + 5e3;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
      case 67108864:
        return -1;
      case 134217728:
      case 268435456:
      case 536870912:
      case 1073741824:
        return -1;
      default:
        return -1;
    }
  }
  function c1(e, t) {
    for (var n = e.suspendedLanes, r = e.pingedLanes, i = e.expirationTimes, o = e.pendingLanes; 0 < o; ) {
      var s = 31 - wt(o), a = 1 << s, l = i[s];
      l === -1 ? (!(a & n) || a & r) && (i[s] = u1(a, t)) : l <= t && (e.expiredLanes |= a), o &= ~a;
    }
  }
  function $l(e) {
    return e = e.pendingLanes & -1073741825, e !== 0 ? e : e & 1073741824 ? 1073741824 : 0;
  }
  function fm() {
    var e = wo;
    return wo <<= 1, !(wo & 4194240) && (wo = 64), e;
  }
  function La(e) {
    for (var t = [], n = 0; 31 > n; n++)
      t.push(e);
    return t;
  }
  function no(e, t, n) {
    e.pendingLanes |= t, t !== 536870912 && (e.suspendedLanes = 0, e.pingedLanes = 0), e = e.eventTimes, t = 31 - wt(t), e[t] = n;
  }
  function f1(e, t) {
    var n = e.pendingLanes & ~t;
    e.pendingLanes = t, e.suspendedLanes = 0, e.pingedLanes = 0, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t, t = e.entanglements;
    var r = e.eventTimes;
    for (e = e.expirationTimes; 0 < n; ) {
      var i = 31 - wt(n), o = 1 << i;
      t[i] = 0, r[i] = -1, e[i] = -1, n &= ~o;
    }
  }
  function Zu(e, t) {
    var n = e.entangledLanes |= t;
    for (e = e.entanglements; n; ) {
      var r = 31 - wt(n), i = 1 << r;
      i & t | e[r] & t && (e[r] |= t), n &= ~i;
    }
  }
  var X = 0;
  function dm(e) {
    return e &= -e, 1 < e ? 4 < e ? e & 268435455 ? 16 : 536870912 : 4 : 1;
  }
  var hm, qu, pm, mm, ym, Il = !1, Eo = [], hn = null, pn = null, mn = null, Li = /* @__PURE__ */ new Map(), Vi = /* @__PURE__ */ new Map(), ln = [], d1 = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
  function $f(e, t) {
    switch (e) {
      case "focusin":
      case "focusout":
        hn = null;
        break;
      case "dragenter":
      case "dragleave":
        pn = null;
        break;
      case "mouseover":
      case "mouseout":
        mn = null;
        break;
      case "pointerover":
      case "pointerout":
        Li.delete(t.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        Vi.delete(t.pointerId);
    }
  }
  function ri(e, t, n, r, i, o) {
    return e === null || e.nativeEvent !== o ? (e = { blockedOn: t, domEventName: n, eventSystemFlags: r, nativeEvent: o, targetContainers: [i] }, t !== null && (t = io(t), t !== null && qu(t)), e) : (e.eventSystemFlags |= r, t = e.targetContainers, i !== null && t.indexOf(i) === -1 && t.push(i), e);
  }
  function h1(e, t, n, r, i) {
    switch (t) {
      case "focusin":
        return hn = ri(hn, e, t, n, r, i), !0;
      case "dragenter":
        return pn = ri(pn, e, t, n, r, i), !0;
      case "mouseover":
        return mn = ri(mn, e, t, n, r, i), !0;
      case "pointerover":
        var o = i.pointerId;
        return Li.set(o, ri(Li.get(o) || null, e, t, n, r, i)), !0;
      case "gotpointercapture":
        return o = i.pointerId, Vi.set(o, ri(Vi.get(o) || null, e, t, n, r, i)), !0;
    }
    return !1;
  }
  function gm(e) {
    var t = Un(e.target);
    if (t !== null) {
      var n = or(t);
      if (n !== null) {
        if (t = n.tag, t === 13) {
          if (t = om(n), t !== null) {
            e.blockedOn = t, ym(e.priority, function() {
              pm(n);
            });
            return;
          }
        } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
          e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
          return;
        }
      }
    }
    e.blockedOn = null;
  }
  function Bo(e) {
    if (e.blockedOn !== null)
      return !1;
    for (var t = e.targetContainers; 0 < t.length; ) {
      var n = zl(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
      if (n === null) {
        n = e.nativeEvent;
        var r = new n.constructor(n.type, n);
        Ll = r, n.target.dispatchEvent(r), Ll = null;
      } else
        return t = io(n), t !== null && qu(t), e.blockedOn = n, !1;
      t.shift();
    }
    return !0;
  }
  function If(e, t, n) {
    Bo(e) && n.delete(t);
  }
  function p1() {
    Il = !1, hn !== null && Bo(hn) && (hn = null), pn !== null && Bo(pn) && (pn = null), mn !== null && Bo(mn) && (mn = null), Li.forEach(If), Vi.forEach(If);
  }
  function ii(e, t) {
    e.blockedOn === t && (e.blockedOn = null, Il || (Il = !0, tt.unstable_scheduleCallback(tt.unstable_NormalPriority, p1)));
  }
  function Ni(e) {
    function t(i) {
      return ii(i, e);
    }
    if (0 < Eo.length) {
      ii(Eo[0], e);
      for (var n = 1; n < Eo.length; n++) {
        var r = Eo[n];
        r.blockedOn === e && (r.blockedOn = null);
      }
    }
    for (hn !== null && ii(hn, e), pn !== null && ii(pn, e), mn !== null && ii(mn, e), Li.forEach(t), Vi.forEach(t), n = 0; n < ln.length; n++)
      r = ln[n], r.blockedOn === e && (r.blockedOn = null);
    for (; 0 < ln.length && (n = ln[0], n.blockedOn === null); )
      gm(n), n.blockedOn === null && ln.shift();
  }
  var Nr = qt.ReactCurrentBatchConfig, as = !0;
  function m1(e, t, n, r) {
    var i = X, o = Nr.transition;
    Nr.transition = null;
    try {
      X = 1, Ju(e, t, n, r);
    } finally {
      X = i, Nr.transition = o;
    }
  }
  function y1(e, t, n, r) {
    var i = X, o = Nr.transition;
    Nr.transition = null;
    try {
      X = 4, Ju(e, t, n, r);
    } finally {
      X = i, Nr.transition = o;
    }
  }
  function Ju(e, t, n, r) {
    if (as) {
      var i = zl(e, t, n, r);
      if (i === null)
        Wa(e, t, r, ls, n), $f(e, r);
      else if (h1(i, e, t, n, r))
        r.stopPropagation();
      else if ($f(e, r), t & 4 && -1 < d1.indexOf(e)) {
        for (; i !== null; ) {
          var o = io(i);
          if (o !== null && hm(o), o = zl(e, t, n, r), o === null && Wa(e, t, r, ls, n), o === i)
            break;
          i = o;
        }
        i !== null && r.stopPropagation();
      } else
        Wa(e, t, r, null, n);
    }
  }
  var ls = null;
  function zl(e, t, n, r) {
    if (ls = null, e = Yu(r), e = Un(e), e !== null)
      if (t = or(e), t === null)
        e = null;
      else if (n = t.tag, n === 13) {
        if (e = om(t), e !== null)
          return e;
        e = null;
      } else if (n === 3) {
        if (t.stateNode.current.memoizedState.isDehydrated)
          return t.tag === 3 ? t.stateNode.containerInfo : null;
        e = null;
      } else
        t !== e && (e = null);
    return ls = e, null;
  }
  function vm(e) {
    switch (e) {
      case "cancel":
      case "click":
      case "close":
      case "contextmenu":
      case "copy":
      case "cut":
      case "auxclick":
      case "dblclick":
      case "dragend":
      case "dragstart":
      case "drop":
      case "focusin":
      case "focusout":
      case "input":
      case "invalid":
      case "keydown":
      case "keypress":
      case "keyup":
      case "mousedown":
      case "mouseup":
      case "paste":
      case "pause":
      case "play":
      case "pointercancel":
      case "pointerdown":
      case "pointerup":
      case "ratechange":
      case "reset":
      case "resize":
      case "seeked":
      case "submit":
      case "touchcancel":
      case "touchend":
      case "touchstart":
      case "volumechange":
      case "change":
      case "selectionchange":
      case "textInput":
      case "compositionstart":
      case "compositionend":
      case "compositionupdate":
      case "beforeblur":
      case "afterblur":
      case "beforeinput":
      case "blur":
      case "fullscreenchange":
      case "focus":
      case "hashchange":
      case "popstate":
      case "select":
      case "selectstart":
        return 1;
      case "drag":
      case "dragenter":
      case "dragexit":
      case "dragleave":
      case "dragover":
      case "mousemove":
      case "mouseout":
      case "mouseover":
      case "pointermove":
      case "pointerout":
      case "pointerover":
      case "scroll":
      case "toggle":
      case "touchmove":
      case "wheel":
      case "mouseenter":
      case "mouseleave":
      case "pointerenter":
      case "pointerleave":
        return 4;
      case "message":
        switch (r1()) {
          case Xu:
            return 1;
          case um:
            return 4;
          case os:
          case i1:
            return 16;
          case cm:
            return 536870912;
          default:
            return 16;
        }
      default:
        return 16;
    }
  }
  var cn = null, ec = null, Uo = null;
  function xm() {
    if (Uo)
      return Uo;
    var e, t = ec, n = t.length, r, i = "value" in cn ? cn.value : cn.textContent, o = i.length;
    for (e = 0; e < n && t[e] === i[e]; e++)
      ;
    var s = n - e;
    for (r = 1; r <= s && t[n - r] === i[o - r]; r++)
      ;
    return Uo = i.slice(e, 1 < r ? 1 - r : void 0);
  }
  function Ho(e) {
    var t = e.keyCode;
    return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0;
  }
  function Co() {
    return !0;
  }
  function zf() {
    return !1;
  }
  function it(e) {
    function t(n, r, i, o, s) {
      this._reactName = n, this._targetInst = i, this.type = r, this.nativeEvent = o, this.target = s, this.currentTarget = null;
      for (var a in e)
        e.hasOwnProperty(a) && (n = e[a], this[a] = n ? n(o) : o[a]);
      return this.isDefaultPrevented = (o.defaultPrevented != null ? o.defaultPrevented : o.returnValue === !1) ? Co : zf, this.isPropagationStopped = zf, this;
    }
    return ce(t.prototype, { preventDefault: function() {
      this.defaultPrevented = !0;
      var n = this.nativeEvent;
      n && (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = !1), this.isDefaultPrevented = Co);
    }, stopPropagation: function() {
      var n = this.nativeEvent;
      n && (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0), this.isPropagationStopped = Co);
    }, persist: function() {
    }, isPersistent: Co }), t;
  }
  var qr = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(e) {
    return e.timeStamp || Date.now();
  }, defaultPrevented: 0, isTrusted: 0 }, tc = it(qr), ro = ce({}, qr, { view: 0, detail: 0 }), g1 = it(ro), Va, Na, oi, zs = ce({}, ro, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: nc, button: 0, buttons: 0, relatedTarget: function(e) {
    return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
  }, movementX: function(e) {
    return "movementX" in e ? e.movementX : (e !== oi && (oi && e.type === "mousemove" ? (Va = e.screenX - oi.screenX, Na = e.screenY - oi.screenY) : Na = Va = 0, oi = e), Va);
  }, movementY: function(e) {
    return "movementY" in e ? e.movementY : Na;
  } }), Bf = it(zs), v1 = ce({}, zs, { dataTransfer: 0 }), x1 = it(v1), S1 = ce({}, ro, { relatedTarget: 0 }), ba = it(S1), w1 = ce({}, qr, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), T1 = it(w1), E1 = ce({}, qr, { clipboardData: function(e) {
    return "clipboardData" in e ? e.clipboardData : window.clipboardData;
  } }), C1 = it(E1), P1 = ce({}, qr, { data: 0 }), Uf = it(P1), k1 = {
    Esc: "Escape",
    Spacebar: " ",
    Left: "ArrowLeft",
    Up: "ArrowUp",
    Right: "ArrowRight",
    Down: "ArrowDown",
    Del: "Delete",
    Win: "OS",
    Menu: "ContextMenu",
    Apps: "ContextMenu",
    Scroll: "ScrollLock",
    MozPrintableKey: "Unidentified"
  }, _1 = {
    8: "Backspace",
    9: "Tab",
    12: "Clear",
    13: "Enter",
    16: "Shift",
    17: "Control",
    18: "Alt",
    19: "Pause",
    20: "CapsLock",
    27: "Escape",
    32: " ",
    33: "PageUp",
    34: "PageDown",
    35: "End",
    36: "Home",
    37: "ArrowLeft",
    38: "ArrowUp",
    39: "ArrowRight",
    40: "ArrowDown",
    45: "Insert",
    46: "Delete",
    112: "F1",
    113: "F2",
    114: "F3",
    115: "F4",
    116: "F5",
    117: "F6",
    118: "F7",
    119: "F8",
    120: "F9",
    121: "F10",
    122: "F11",
    123: "F12",
    144: "NumLock",
    145: "ScrollLock",
    224: "Meta"
  }, A1 = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
  function O1(e) {
    var t = this.nativeEvent;
    return t.getModifierState ? t.getModifierState(e) : (e = A1[e]) ? !!t[e] : !1;
  }
  function nc() {
    return O1;
  }
  var F1 = ce({}, ro, { key: function(e) {
    if (e.key) {
      var t = k1[e.key] || e.key;
      if (t !== "Unidentified")
        return t;
    }
    return e.type === "keypress" ? (e = Ho(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? _1[e.keyCode] || "Unidentified" : "";
  }, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: nc, charCode: function(e) {
    return e.type === "keypress" ? Ho(e) : 0;
  }, keyCode: function(e) {
    return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
  }, which: function(e) {
    return e.type === "keypress" ? Ho(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
  } }), j1 = it(F1), D1 = ce({}, zs, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), Hf = it(D1), M1 = ce({}, ro, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: nc }), R1 = it(M1), L1 = ce({}, qr, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), V1 = it(L1), N1 = ce({}, zs, {
    deltaX: function(e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function(e) {
      return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), b1 = it(N1), $1 = [9, 13, 27, 32], rc = Kt && "CompositionEvent" in window, xi = null;
  Kt && "documentMode" in document && (xi = document.documentMode);
  var I1 = Kt && "TextEvent" in window && !xi, Sm = Kt && (!rc || xi && 8 < xi && 11 >= xi), Wf = " ", Gf = !1;
  function wm(e, t) {
    switch (e) {
      case "keyup":
        return $1.indexOf(t.keyCode) !== -1;
      case "keydown":
        return t.keyCode !== 229;
      case "keypress":
      case "mousedown":
      case "focusout":
        return !0;
      default:
        return !1;
    }
  }
  function Tm(e) {
    return e = e.detail, typeof e == "object" && "data" in e ? e.data : null;
  }
  var xr = !1;
  function z1(e, t) {
    switch (e) {
      case "compositionend":
        return Tm(t);
      case "keypress":
        return t.which !== 32 ? null : (Gf = !0, Wf);
      case "textInput":
        return e = t.data, e === Wf && Gf ? null : e;
      default:
        return null;
    }
  }
  function B1(e, t) {
    if (xr)
      return e === "compositionend" || !rc && wm(e, t) ? (e = xm(), Uo = ec = cn = null, xr = !1, e) : null;
    switch (e) {
      case "paste":
        return null;
      case "keypress":
        if (!(t.ctrlKey || t.altKey || t.metaKey) || t.ctrlKey && t.altKey) {
          if (t.char && 1 < t.char.length)
            return t.char;
          if (t.which)
            return String.fromCharCode(t.which);
        }
        return null;
      case "compositionend":
        return Sm && t.locale !== "ko" ? null : t.data;
      default:
        return null;
    }
  }
  var U1 = { color: !0, date: !0, datetime: !0, "datetime-local": !0, email: !0, month: !0, number: !0, password: !0, range: !0, search: !0, tel: !0, text: !0, time: !0, url: !0, week: !0 };
  function Kf(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t === "input" ? !!U1[e.type] : t === "textarea";
  }
  function Em(e, t, n, r) {
    em(r), t = us(t, "onChange"), 0 < t.length && (n = new tc("onChange", "change", null, n, r), e.push({ event: n, listeners: t }));
  }
  var Si = null, bi = null;
  function H1(e) {
    Rm(e, 0);
  }
  function Bs(e) {
    var t = Tr(e);
    if (Kp(t))
      return e;
  }
  function W1(e, t) {
    if (e === "change")
      return t;
  }
  var Cm = !1;
  if (Kt) {
    var $a;
    if (Kt) {
      var Ia = "oninput" in document;
      if (!Ia) {
        var Qf = document.createElement("div");
        Qf.setAttribute("oninput", "return;"), Ia = typeof Qf.oninput == "function";
      }
      $a = Ia;
    } else
      $a = !1;
    Cm = $a && (!document.documentMode || 9 < document.documentMode);
  }
  function Yf() {
    Si && (Si.detachEvent("onpropertychange", Pm), bi = Si = null);
  }
  function Pm(e) {
    if (e.propertyName === "value" && Bs(bi)) {
      var t = [];
      Em(t, bi, e, Yu(e)), im(H1, t);
    }
  }
  function G1(e, t, n) {
    e === "focusin" ? (Yf(), Si = t, bi = n, Si.attachEvent("onpropertychange", Pm)) : e === "focusout" && Yf();
  }
  function K1(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown")
      return Bs(bi);
  }
  function Q1(e, t) {
    if (e === "click")
      return Bs(t);
  }
  function Y1(e, t) {
    if (e === "input" || e === "change")
      return Bs(t);
  }
  function X1(e, t) {
    return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
  }
  var Et = typeof Object.is == "function" ? Object.is : X1;
  function $i(e, t) {
    if (Et(e, t))
      return !0;
    if (typeof e != "object" || e === null || typeof t != "object" || t === null)
      return !1;
    var n = Object.keys(e), r = Object.keys(t);
    if (n.length !== r.length)
      return !1;
    for (r = 0; r < n.length; r++) {
      var i = n[r];
      if (!El.call(t, i) || !Et(e[i], t[i]))
        return !1;
    }
    return !0;
  }
  function Xf(e) {
    for (; e && e.firstChild; )
      e = e.firstChild;
    return e;
  }
  function Zf(e, t) {
    var n = Xf(e);
    e = 0;
    for (var r; n; ) {
      if (n.nodeType === 3) {
        if (r = e + n.textContent.length, e <= t && r >= t)
          return { node: n, offset: t - e };
        e = r;
      }
      e: {
        for (; n; ) {
          if (n.nextSibling) {
            n = n.nextSibling;
            break e;
          }
          n = n.parentNode;
        }
        n = void 0;
      }
      n = Xf(n);
    }
  }
  function km(e, t) {
    return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? km(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1;
  }
  function _m() {
    for (var e = window, t = ns(); t instanceof e.HTMLIFrameElement; ) {
      try {
        var n = typeof t.contentWindow.location.href == "string";
      } catch {
        n = !1;
      }
      if (n)
        e = t.contentWindow;
      else
        break;
      t = ns(e.document);
    }
    return t;
  }
  function ic(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
  }
  function Z1(e) {
    var t = _m(), n = e.focusedElem, r = e.selectionRange;
    if (t !== n && n && n.ownerDocument && km(n.ownerDocument.documentElement, n)) {
      if (r !== null && ic(n)) {
        if (t = r.start, e = r.end, e === void 0 && (e = t), "selectionStart" in n)
          n.selectionStart = t, n.selectionEnd = Math.min(e, n.value.length);
        else if (e = (t = n.ownerDocument || document) && t.defaultView || window, e.getSelection) {
          e = e.getSelection();
          var i = n.textContent.length, o = Math.min(r.start, i);
          r = r.end === void 0 ? o : Math.min(r.end, i), !e.extend && o > r && (i = r, r = o, o = i), i = Zf(n, o);
          var s = Zf(
            n,
            r
          );
          i && s && (e.rangeCount !== 1 || e.anchorNode !== i.node || e.anchorOffset !== i.offset || e.focusNode !== s.node || e.focusOffset !== s.offset) && (t = t.createRange(), t.setStart(i.node, i.offset), e.removeAllRanges(), o > r ? (e.addRange(t), e.extend(s.node, s.offset)) : (t.setEnd(s.node, s.offset), e.addRange(t)));
        }
      }
      for (t = [], e = n; e = e.parentNode; )
        e.nodeType === 1 && t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
      for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++)
        e = t[n], e.element.scrollLeft = e.left, e.element.scrollTop = e.top;
    }
  }
  var q1 = Kt && "documentMode" in document && 11 >= document.documentMode, Sr = null, Bl = null, wi = null, Ul = !1;
  function qf(e, t, n) {
    var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
    Ul || Sr == null || Sr !== ns(r) || (r = Sr, "selectionStart" in r && ic(r) ? r = { start: r.selectionStart, end: r.selectionEnd } : (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection(), r = { anchorNode: r.anchorNode, anchorOffset: r.anchorOffset, focusNode: r.focusNode, focusOffset: r.focusOffset }), wi && $i(wi, r) || (wi = r, r = us(Bl, "onSelect"), 0 < r.length && (t = new tc("onSelect", "select", null, t, n), e.push({ event: t, listeners: r }), t.target = Sr)));
  }
  function Po(e, t) {
    var n = {};
    return n[e.toLowerCase()] = t.toLowerCase(), n["Webkit" + e] = "webkit" + t, n["Moz" + e] = "moz" + t, n;
  }
  var wr = { animationend: Po("Animation", "AnimationEnd"), animationiteration: Po("Animation", "AnimationIteration"), animationstart: Po("Animation", "AnimationStart"), transitionend: Po("Transition", "TransitionEnd") }, za = {}, Am = {};
  Kt && (Am = document.createElement("div").style, "AnimationEvent" in window || (delete wr.animationend.animation, delete wr.animationiteration.animation, delete wr.animationstart.animation), "TransitionEvent" in window || delete wr.transitionend.transition);
  function Us(e) {
    if (za[e])
      return za[e];
    if (!wr[e])
      return e;
    var t = wr[e], n;
    for (n in t)
      if (t.hasOwnProperty(n) && n in Am)
        return za[e] = t[n];
    return e;
  }
  var Om = Us("animationend"), Fm = Us("animationiteration"), jm = Us("animationstart"), Dm = Us("transitionend"), Mm = /* @__PURE__ */ new Map(), Jf = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
  function On(e, t) {
    Mm.set(e, t), ir(t, [e]);
  }
  for (var Ba = 0; Ba < Jf.length; Ba++) {
    var Ua = Jf[Ba], J1 = Ua.toLowerCase(), ex = Ua[0].toUpperCase() + Ua.slice(1);
    On(J1, "on" + ex);
  }
  On(Om, "onAnimationEnd");
  On(Fm, "onAnimationIteration");
  On(jm, "onAnimationStart");
  On("dblclick", "onDoubleClick");
  On("focusin", "onFocus");
  On("focusout", "onBlur");
  On(Dm, "onTransitionEnd");
  Ir("onMouseEnter", ["mouseout", "mouseover"]);
  Ir("onMouseLeave", ["mouseout", "mouseover"]);
  Ir("onPointerEnter", ["pointerout", "pointerover"]);
  Ir("onPointerLeave", ["pointerout", "pointerover"]);
  ir("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
  ir("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
  ir("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
  ir("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
  ir("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
  ir("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
  var mi = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), tx = new Set("cancel close invalid load scroll toggle".split(" ").concat(mi));
  function ed(e, t, n) {
    var r = e.type || "unknown-event";
    e.currentTarget = n, J0(r, t, void 0, e), e.currentTarget = null;
  }
  function Rm(e, t) {
    t = (t & 4) !== 0;
    for (var n = 0; n < e.length; n++) {
      var r = e[n], i = r.event;
      r = r.listeners;
      e: {
        var o = void 0;
        if (t)
          for (var s = r.length - 1; 0 <= s; s--) {
            var a = r[s], l = a.instance, u = a.currentTarget;
            if (a = a.listener, l !== o && i.isPropagationStopped())
              break e;
            ed(i, a, u), o = l;
          }
        else
          for (s = 0; s < r.length; s++) {
            if (a = r[s], l = a.instance, u = a.currentTarget, a = a.listener, l !== o && i.isPropagationStopped())
              break e;
            ed(i, a, u), o = l;
          }
      }
    }
    if (is)
      throw e = bl, is = !1, bl = null, e;
  }
  function ne(e, t) {
    var n = t[Ql];
    n === void 0 && (n = t[Ql] = /* @__PURE__ */ new Set());
    var r = e + "__bubble";
    n.has(r) || (Lm(t, e, 2, !1), n.add(r));
  }
  function Ha(e, t, n) {
    var r = 0;
    t && (r |= 4), Lm(n, e, r, t);
  }
  var ko = "_reactListening" + Math.random().toString(36).slice(2);
  function Ii(e) {
    if (!e[ko]) {
      e[ko] = !0, Bp.forEach(function(n) {
        n !== "selectionchange" && (tx.has(n) || Ha(n, !1, e), Ha(n, !0, e));
      });
      var t = e.nodeType === 9 ? e : e.ownerDocument;
      t === null || t[ko] || (t[ko] = !0, Ha("selectionchange", !1, t));
    }
  }
  function Lm(e, t, n, r) {
    switch (vm(t)) {
      case 1:
        var i = m1;
        break;
      case 4:
        i = y1;
        break;
      default:
        i = Ju;
    }
    n = i.bind(null, t, n, e), i = void 0, !Nl || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (i = !0), r ? i !== void 0 ? e.addEventListener(t, n, { capture: !0, passive: i }) : e.addEventListener(t, n, !0) : i !== void 0 ? e.addEventListener(t, n, { passive: i }) : e.addEventListener(t, n, !1);
  }
  function Wa(e, t, n, r, i) {
    var o = r;
    if (!(t & 1) && !(t & 2) && r !== null)
      e:
        for (; ; ) {
          if (r === null)
            return;
          var s = r.tag;
          if (s === 3 || s === 4) {
            var a = r.stateNode.containerInfo;
            if (a === i || a.nodeType === 8 && a.parentNode === i)
              break;
            if (s === 4)
              for (s = r.return; s !== null; ) {
                var l = s.tag;
                if ((l === 3 || l === 4) && (l = s.stateNode.containerInfo, l === i || l.nodeType === 8 && l.parentNode === i))
                  return;
                s = s.return;
              }
            for (; a !== null; ) {
              if (s = Un(a), s === null)
                return;
              if (l = s.tag, l === 5 || l === 6) {
                r = o = s;
                continue e;
              }
              a = a.parentNode;
            }
          }
          r = r.return;
        }
    im(function() {
      var u = o, f = Yu(n), c = [];
      e: {
        var d = Mm.get(e);
        if (d !== void 0) {
          var p = tc, g = e;
          switch (e) {
            case "keypress":
              if (Ho(n) === 0)
                break e;
            case "keydown":
            case "keyup":
              p = j1;
              break;
            case "focusin":
              g = "focus", p = ba;
              break;
            case "focusout":
              g = "blur", p = ba;
              break;
            case "beforeblur":
            case "afterblur":
              p = ba;
              break;
            case "click":
              if (n.button === 2)
                break e;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              p = Bf;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              p = x1;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              p = R1;
              break;
            case Om:
            case Fm:
            case jm:
              p = T1;
              break;
            case Dm:
              p = V1;
              break;
            case "scroll":
              p = g1;
              break;
            case "wheel":
              p = b1;
              break;
            case "copy":
            case "cut":
            case "paste":
              p = C1;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              p = Hf;
          }
          var v = (t & 4) !== 0, T = !v && e === "scroll", y = v ? d !== null ? d + "Capture" : null : d;
          v = [];
          for (var h = u, m; h !== null; ) {
            m = h;
            var x = m.stateNode;
            if (m.tag === 5 && x !== null && (m = x, y !== null && (x = Ri(h, y), x != null && v.push(zi(h, x, m)))), T)
              break;
            h = h.return;
          }
          0 < v.length && (d = new p(d, g, null, n, f), c.push({ event: d, listeners: v }));
        }
      }
      if (!(t & 7)) {
        e: {
          if (d = e === "mouseover" || e === "pointerover", p = e === "mouseout" || e === "pointerout", d && n !== Ll && (g = n.relatedTarget || n.fromElement) && (Un(g) || g[Qt]))
            break e;
          if ((p || d) && (d = f.window === f ? f : (d = f.ownerDocument) ? d.defaultView || d.parentWindow : window, p ? (g = n.relatedTarget || n.toElement, p = u, g = g ? Un(g) : null, g !== null && (T = or(g), g !== T || g.tag !== 5 && g.tag !== 6) && (g = null)) : (p = null, g = u), p !== g)) {
            if (v = Bf, x = "onMouseLeave", y = "onMouseEnter", h = "mouse", (e === "pointerout" || e === "pointerover") && (v = Hf, x = "onPointerLeave", y = "onPointerEnter", h = "pointer"), T = p == null ? d : Tr(p), m = g == null ? d : Tr(g), d = new v(x, h + "leave", p, n, f), d.target = T, d.relatedTarget = m, x = null, Un(f) === u && (v = new v(y, h + "enter", g, n, f), v.target = m, v.relatedTarget = T, x = v), T = x, p && g)
              t: {
                for (v = p, y = g, h = 0, m = v; m; m = mr(m))
                  h++;
                for (m = 0, x = y; x; x = mr(x))
                  m++;
                for (; 0 < h - m; )
                  v = mr(v), h--;
                for (; 0 < m - h; )
                  y = mr(y), m--;
                for (; h--; ) {
                  if (v === y || y !== null && v === y.alternate)
                    break t;
                  v = mr(v), y = mr(y);
                }
                v = null;
              }
            else
              v = null;
            p !== null && td(c, d, p, v, !1), g !== null && T !== null && td(c, T, g, v, !0);
          }
        }
        e: {
          if (d = u ? Tr(u) : window, p = d.nodeName && d.nodeName.toLowerCase(), p === "select" || p === "input" && d.type === "file")
            var k = W1;
          else if (Kf(d))
            if (Cm)
              k = Y1;
            else {
              k = K1;
              var E = G1;
            }
          else
            (p = d.nodeName) && p.toLowerCase() === "input" && (d.type === "checkbox" || d.type === "radio") && (k = Q1);
          if (k && (k = k(e, u))) {
            Em(c, k, n, f);
            break e;
          }
          E && E(e, d, u), e === "focusout" && (E = d._wrapperState) && E.controlled && d.type === "number" && Fl(d, "number", d.value);
        }
        switch (E = u ? Tr(u) : window, e) {
          case "focusin":
            (Kf(E) || E.contentEditable === "true") && (Sr = E, Bl = u, wi = null);
            break;
          case "focusout":
            wi = Bl = Sr = null;
            break;
          case "mousedown":
            Ul = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            Ul = !1, qf(c, n, f);
            break;
          case "selectionchange":
            if (q1)
              break;
          case "keydown":
          case "keyup":
            qf(c, n, f);
        }
        var C;
        if (rc)
          e: {
            switch (e) {
              case "compositionstart":
                var _ = "onCompositionStart";
                break e;
              case "compositionend":
                _ = "onCompositionEnd";
                break e;
              case "compositionupdate":
                _ = "onCompositionUpdate";
                break e;
            }
            _ = void 0;
          }
        else
          xr ? wm(e, n) && (_ = "onCompositionEnd") : e === "keydown" && n.keyCode === 229 && (_ = "onCompositionStart");
        _ && (Sm && n.locale !== "ko" && (xr || _ !== "onCompositionStart" ? _ === "onCompositionEnd" && xr && (C = xm()) : (cn = f, ec = "value" in cn ? cn.value : cn.textContent, xr = !0)), E = us(u, _), 0 < E.length && (_ = new Uf(_, e, null, n, f), c.push({ event: _, listeners: E }), C ? _.data = C : (C = Tm(n), C !== null && (_.data = C)))), (C = I1 ? z1(e, n) : B1(e, n)) && (u = us(u, "onBeforeInput"), 0 < u.length && (f = new Uf("onBeforeInput", "beforeinput", null, n, f), c.push({ event: f, listeners: u }), f.data = C));
      }
      Rm(c, t);
    });
  }
  function zi(e, t, n) {
    return { instance: e, listener: t, currentTarget: n };
  }
  function us(e, t) {
    for (var n = t + "Capture", r = []; e !== null; ) {
      var i = e, o = i.stateNode;
      i.tag === 5 && o !== null && (i = o, o = Ri(e, n), o != null && r.unshift(zi(e, o, i)), o = Ri(e, t), o != null && r.push(zi(e, o, i))), e = e.return;
    }
    return r;
  }
  function mr(e) {
    if (e === null)
      return null;
    do
      e = e.return;
    while (e && e.tag !== 5);
    return e || null;
  }
  function td(e, t, n, r, i) {
    for (var o = t._reactName, s = []; n !== null && n !== r; ) {
      var a = n, l = a.alternate, u = a.stateNode;
      if (l !== null && l === r)
        break;
      a.tag === 5 && u !== null && (a = u, i ? (l = Ri(n, o), l != null && s.unshift(zi(n, l, a))) : i || (l = Ri(n, o), l != null && s.push(zi(n, l, a)))), n = n.return;
    }
    s.length !== 0 && e.push({ event: t, listeners: s });
  }
  var nx = /\r\n?/g, rx = /\u0000|\uFFFD/g;
  function nd(e) {
    return (typeof e == "string" ? e : "" + e).replace(nx, `
`).replace(rx, "");
  }
  function _o(e, t, n) {
    if (t = nd(t), nd(e) !== t && n)
      throw Error(A(425));
  }
  function cs() {
  }
  var Hl = null, Wl = null;
  function Gl(e, t) {
    return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
  }
  var Kl = typeof setTimeout == "function" ? setTimeout : void 0, ix = typeof clearTimeout == "function" ? clearTimeout : void 0, rd = typeof Promise == "function" ? Promise : void 0, ox = typeof queueMicrotask == "function" ? queueMicrotask : typeof rd < "u" ? function(e) {
    return rd.resolve(null).then(e).catch(sx);
  } : Kl;
  function sx(e) {
    setTimeout(function() {
      throw e;
    });
  }
  function Ga(e, t) {
    var n = t, r = 0;
    do {
      var i = n.nextSibling;
      if (e.removeChild(n), i && i.nodeType === 8)
        if (n = i.data, n === "/$") {
          if (r === 0) {
            e.removeChild(i), Ni(t);
            return;
          }
          r--;
        } else
          n !== "$" && n !== "$?" && n !== "$!" || r++;
      n = i;
    } while (n);
    Ni(t);
  }
  function yn(e) {
    for (; e != null; e = e.nextSibling) {
      var t = e.nodeType;
      if (t === 1 || t === 3)
        break;
      if (t === 8) {
        if (t = e.data, t === "$" || t === "$!" || t === "$?")
          break;
        if (t === "/$")
          return null;
      }
    }
    return e;
  }
  function id(e) {
    e = e.previousSibling;
    for (var t = 0; e; ) {
      if (e.nodeType === 8) {
        var n = e.data;
        if (n === "$" || n === "$!" || n === "$?") {
          if (t === 0)
            return e;
          t--;
        } else
          n === "/$" && t++;
      }
      e = e.previousSibling;
    }
    return null;
  }
  var Jr = Math.random().toString(36).slice(2), At = "__reactFiber$" + Jr, Bi = "__reactProps$" + Jr, Qt = "__reactContainer$" + Jr, Ql = "__reactEvents$" + Jr, ax = "__reactListeners$" + Jr, lx = "__reactHandles$" + Jr;
  function Un(e) {
    var t = e[At];
    if (t)
      return t;
    for (var n = e.parentNode; n; ) {
      if (t = n[Qt] || n[At]) {
        if (n = t.alternate, t.child !== null || n !== null && n.child !== null)
          for (e = id(e); e !== null; ) {
            if (n = e[At])
              return n;
            e = id(e);
          }
        return t;
      }
      e = n, n = e.parentNode;
    }
    return null;
  }
  function io(e) {
    return e = e[At] || e[Qt], !e || e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3 ? null : e;
  }
  function Tr(e) {
    if (e.tag === 5 || e.tag === 6)
      return e.stateNode;
    throw Error(A(33));
  }
  function Hs(e) {
    return e[Bi] || null;
  }
  var Yl = [], Er = -1;
  function Fn(e) {
    return { current: e };
  }
  function ie(e) {
    0 > Er || (e.current = Yl[Er], Yl[Er] = null, Er--);
  }
  function ee(e, t) {
    Er++, Yl[Er] = e.current, e.current = t;
  }
  var Pn = {}, De = Fn(Pn), He = Fn(!1), Zn = Pn;
  function zr(e, t) {
    var n = e.type.contextTypes;
    if (!n)
      return Pn;
    var r = e.stateNode;
    if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
      return r.__reactInternalMemoizedMaskedChildContext;
    var i = {}, o;
    for (o in n)
      i[o] = t[o];
    return r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = t, e.__reactInternalMemoizedMaskedChildContext = i), i;
  }
  function We(e) {
    return e = e.childContextTypes, e != null;
  }
  function fs() {
    ie(He), ie(De);
  }
  function od(e, t, n) {
    if (De.current !== Pn)
      throw Error(A(168));
    ee(De, t), ee(He, n);
  }
  function Vm(e, t, n) {
    var r = e.stateNode;
    if (t = t.childContextTypes, typeof r.getChildContext != "function")
      return n;
    r = r.getChildContext();
    for (var i in r)
      if (!(i in t))
        throw Error(A(108, G0(e) || "Unknown", i));
    return ce({}, n, r);
  }
  function ds(e) {
    return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || Pn, Zn = De.current, ee(De, e), ee(He, He.current), !0;
  }
  function sd(e, t, n) {
    var r = e.stateNode;
    if (!r)
      throw Error(A(169));
    n ? (e = Vm(e, t, Zn), r.__reactInternalMemoizedMergedChildContext = e, ie(He), ie(De), ee(De, e)) : ie(He), ee(He, n);
  }
  var bt = null, Ws = !1, Ka = !1;
  function Nm(e) {
    bt === null ? bt = [e] : bt.push(e);
  }
  function ux(e) {
    Ws = !0, Nm(e);
  }
  function jn() {
    if (!Ka && bt !== null) {
      Ka = !0;
      var e = 0, t = X;
      try {
        var n = bt;
        for (X = 1; e < n.length; e++) {
          var r = n[e];
          do
            r = r(!0);
          while (r !== null);
        }
        bt = null, Ws = !1;
      } catch (i) {
        throw bt !== null && (bt = bt.slice(e + 1)), lm(Xu, jn), i;
      } finally {
        X = t, Ka = !1;
      }
    }
    return null;
  }
  var Cr = [], Pr = 0, hs = null, ps = 0, ut = [], ct = 0, qn = null, $t = 1, It = "";
  function Nn(e, t) {
    Cr[Pr++] = ps, Cr[Pr++] = hs, hs = e, ps = t;
  }
  function bm(e, t, n) {
    ut[ct++] = $t, ut[ct++] = It, ut[ct++] = qn, qn = e;
    var r = $t;
    e = It;
    var i = 32 - wt(r) - 1;
    r &= ~(1 << i), n += 1;
    var o = 32 - wt(t) + i;
    if (30 < o) {
      var s = i - i % 5;
      o = (r & (1 << s) - 1).toString(32), r >>= s, i -= s, $t = 1 << 32 - wt(t) + i | n << i | r, It = o + e;
    } else
      $t = 1 << o | n << i | r, It = e;
  }
  function oc(e) {
    e.return !== null && (Nn(e, 1), bm(e, 1, 0));
  }
  function sc(e) {
    for (; e === hs; )
      hs = Cr[--Pr], Cr[Pr] = null, ps = Cr[--Pr], Cr[Pr] = null;
    for (; e === qn; )
      qn = ut[--ct], ut[ct] = null, It = ut[--ct], ut[ct] = null, $t = ut[--ct], ut[ct] = null;
  }
  var et = null, Ze = null, se = !1, St = null;
  function $m(e, t) {
    var n = ft(5, null, null, 0);
    n.elementType = "DELETED", n.stateNode = t, n.return = e, t = e.deletions, t === null ? (e.deletions = [n], e.flags |= 16) : t.push(n);
  }
  function ad(e, t) {
    switch (e.tag) {
      case 5:
        var n = e.type;
        return t = t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t, t !== null ? (e.stateNode = t, et = e, Ze = yn(t.firstChild), !0) : !1;
      case 6:
        return t = e.pendingProps === "" || t.nodeType !== 3 ? null : t, t !== null ? (e.stateNode = t, et = e, Ze = null, !0) : !1;
      case 13:
        return t = t.nodeType !== 8 ? null : t, t !== null ? (n = qn !== null ? { id: $t, overflow: It } : null, e.memoizedState = { dehydrated: t, treeContext: n, retryLane: 1073741824 }, n = ft(18, null, null, 0), n.stateNode = t, n.return = e, e.child = n, et = e, Ze = null, !0) : !1;
      default:
        return !1;
    }
  }
  function Xl(e) {
    return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
  }
  function Zl(e) {
    if (se) {
      var t = Ze;
      if (t) {
        var n = t;
        if (!ad(e, t)) {
          if (Xl(e))
            throw Error(A(418));
          t = yn(n.nextSibling);
          var r = et;
          t && ad(e, t) ? $m(r, n) : (e.flags = e.flags & -4097 | 2, se = !1, et = e);
        }
      } else {
        if (Xl(e))
          throw Error(A(418));
        e.flags = e.flags & -4097 | 2, se = !1, et = e;
      }
    }
  }
  function ld(e) {
    for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
      e = e.return;
    et = e;
  }
  function Ao(e) {
    if (e !== et)
      return !1;
    if (!se)
      return ld(e), se = !0, !1;
    var t;
    if ((t = e.tag !== 3) && !(t = e.tag !== 5) && (t = e.type, t = t !== "head" && t !== "body" && !Gl(e.type, e.memoizedProps)), t && (t = Ze)) {
      if (Xl(e))
        throw Im(), Error(A(418));
      for (; t; )
        $m(e, t), t = yn(t.nextSibling);
    }
    if (ld(e), e.tag === 13) {
      if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e)
        throw Error(A(317));
      e: {
        for (e = e.nextSibling, t = 0; e; ) {
          if (e.nodeType === 8) {
            var n = e.data;
            if (n === "/$") {
              if (t === 0) {
                Ze = yn(e.nextSibling);
                break e;
              }
              t--;
            } else
              n !== "$" && n !== "$!" && n !== "$?" || t++;
          }
          e = e.nextSibling;
        }
        Ze = null;
      }
    } else
      Ze = et ? yn(e.stateNode.nextSibling) : null;
    return !0;
  }
  function Im() {
    for (var e = Ze; e; )
      e = yn(e.nextSibling);
  }
  function Br() {
    Ze = et = null, se = !1;
  }
  function ac(e) {
    St === null ? St = [e] : St.push(e);
  }
  var cx = qt.ReactCurrentBatchConfig;
  function vt(e, t) {
    if (e && e.defaultProps) {
      t = ce({}, t), e = e.defaultProps;
      for (var n in e)
        t[n] === void 0 && (t[n] = e[n]);
      return t;
    }
    return t;
  }
  var ms = Fn(null), ys = null, kr = null, lc = null;
  function uc() {
    lc = kr = ys = null;
  }
  function cc(e) {
    var t = ms.current;
    ie(ms), e._currentValue = t;
  }
  function ql(e, t, n) {
    for (; e !== null; ) {
      var r = e.alternate;
      if ((e.childLanes & t) !== t ? (e.childLanes |= t, r !== null && (r.childLanes |= t)) : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t), e === n)
        break;
      e = e.return;
    }
  }
  function br(e, t) {
    ys = e, lc = kr = null, e = e.dependencies, e !== null && e.firstContext !== null && (e.lanes & t && (Ue = !0), e.firstContext = null);
  }
  function ht(e) {
    var t = e._currentValue;
    if (lc !== e)
      if (e = { context: e, memoizedValue: t, next: null }, kr === null) {
        if (ys === null)
          throw Error(A(308));
        kr = e, ys.dependencies = { lanes: 0, firstContext: e };
      } else
        kr = kr.next = e;
    return t;
  }
  var Hn = null;
  function fc(e) {
    Hn === null ? Hn = [e] : Hn.push(e);
  }
  function zm(e, t, n, r) {
    var i = t.interleaved;
    return i === null ? (n.next = n, fc(t)) : (n.next = i.next, i.next = n), t.interleaved = n, Yt(e, r);
  }
  function Yt(e, t) {
    e.lanes |= t;
    var n = e.alternate;
    for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; )
      e.childLanes |= t, n = e.alternate, n !== null && (n.childLanes |= t), n = e, e = e.return;
    return n.tag === 3 ? n.stateNode : null;
  }
  var on = !1;
  function dc(e) {
    e.updateQueue = { baseState: e.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
  }
  function Bm(e, t) {
    e = e.updateQueue, t.updateQueue === e && (t.updateQueue = { baseState: e.baseState, firstBaseUpdate: e.firstBaseUpdate, lastBaseUpdate: e.lastBaseUpdate, shared: e.shared, effects: e.effects });
  }
  function Ht(e, t) {
    return { eventTime: e, lane: t, tag: 0, payload: null, callback: null, next: null };
  }
  function gn(e, t, n) {
    var r = e.updateQueue;
    if (r === null)
      return null;
    if (r = r.shared, H & 2) {
      var i = r.pending;
      return i === null ? t.next = t : (t.next = i.next, i.next = t), r.pending = t, Yt(e, n);
    }
    return i = r.interleaved, i === null ? (t.next = t, fc(r)) : (t.next = i.next, i.next = t), r.interleaved = t, Yt(e, n);
  }
  function Wo(e, t, n) {
    if (t = t.updateQueue, t !== null && (t = t.shared, (n & 4194240) !== 0)) {
      var r = t.lanes;
      r &= e.pendingLanes, n |= r, t.lanes = n, Zu(e, n);
    }
  }
  function ud(e, t) {
    var n = e.updateQueue, r = e.alternate;
    if (r !== null && (r = r.updateQueue, n === r)) {
      var i = null, o = null;
      if (n = n.firstBaseUpdate, n !== null) {
        do {
          var s = { eventTime: n.eventTime, lane: n.lane, tag: n.tag, payload: n.payload, callback: n.callback, next: null };
          o === null ? i = o = s : o = o.next = s, n = n.next;
        } while (n !== null);
        o === null ? i = o = t : o = o.next = t;
      } else
        i = o = t;
      n = { baseState: r.baseState, firstBaseUpdate: i, lastBaseUpdate: o, shared: r.shared, effects: r.effects }, e.updateQueue = n;
      return;
    }
    e = n.lastBaseUpdate, e === null ? n.firstBaseUpdate = t : e.next = t, n.lastBaseUpdate = t;
  }
  function gs(e, t, n, r) {
    var i = e.updateQueue;
    on = !1;
    var o = i.firstBaseUpdate, s = i.lastBaseUpdate, a = i.shared.pending;
    if (a !== null) {
      i.shared.pending = null;
      var l = a, u = l.next;
      l.next = null, s === null ? o = u : s.next = u, s = l;
      var f = e.alternate;
      f !== null && (f = f.updateQueue, a = f.lastBaseUpdate, a !== s && (a === null ? f.firstBaseUpdate = u : a.next = u, f.lastBaseUpdate = l));
    }
    if (o !== null) {
      var c = i.baseState;
      s = 0, f = u = l = null, a = o;
      do {
        var d = a.lane, p = a.eventTime;
        if ((r & d) === d) {
          f !== null && (f = f.next = {
            eventTime: p,
            lane: 0,
            tag: a.tag,
            payload: a.payload,
            callback: a.callback,
            next: null
          });
          e: {
            var g = e, v = a;
            switch (d = t, p = n, v.tag) {
              case 1:
                if (g = v.payload, typeof g == "function") {
                  c = g.call(p, c, d);
                  break e;
                }
                c = g;
                break e;
              case 3:
                g.flags = g.flags & -65537 | 128;
              case 0:
                if (g = v.payload, d = typeof g == "function" ? g.call(p, c, d) : g, d == null)
                  break e;
                c = ce({}, c, d);
                break e;
              case 2:
                on = !0;
            }
          }
          a.callback !== null && a.lane !== 0 && (e.flags |= 64, d = i.effects, d === null ? i.effects = [a] : d.push(a));
        } else
          p = { eventTime: p, lane: d, tag: a.tag, payload: a.payload, callback: a.callback, next: null }, f === null ? (u = f = p, l = c) : f = f.next = p, s |= d;
        if (a = a.next, a === null) {
          if (a = i.shared.pending, a === null)
            break;
          d = a, a = d.next, d.next = null, i.lastBaseUpdate = d, i.shared.pending = null;
        }
      } while (!0);
      if (f === null && (l = c), i.baseState = l, i.firstBaseUpdate = u, i.lastBaseUpdate = f, t = i.shared.interleaved, t !== null) {
        i = t;
        do
          s |= i.lane, i = i.next;
        while (i !== t);
      } else
        o === null && (i.shared.lanes = 0);
      er |= s, e.lanes = s, e.memoizedState = c;
    }
  }
  function cd(e, t, n) {
    if (e = t.effects, t.effects = null, e !== null)
      for (t = 0; t < e.length; t++) {
        var r = e[t], i = r.callback;
        if (i !== null) {
          if (r.callback = null, r = n, typeof i != "function")
            throw Error(A(191, i));
          i.call(r);
        }
      }
  }
  var Um = new zp.Component().refs;
  function Jl(e, t, n, r) {
    t = e.memoizedState, n = n(r, t), n = n == null ? t : ce({}, t, n), e.memoizedState = n, e.lanes === 0 && (e.updateQueue.baseState = n);
  }
  var Gs = { isMounted: function(e) {
    return (e = e._reactInternals) ? or(e) === e : !1;
  }, enqueueSetState: function(e, t, n) {
    e = e._reactInternals;
    var r = Ne(), i = xn(e), o = Ht(r, i);
    o.payload = t, n != null && (o.callback = n), t = gn(e, o, i), t !== null && (Tt(t, e, i, r), Wo(t, e, i));
  }, enqueueReplaceState: function(e, t, n) {
    e = e._reactInternals;
    var r = Ne(), i = xn(e), o = Ht(r, i);
    o.tag = 1, o.payload = t, n != null && (o.callback = n), t = gn(e, o, i), t !== null && (Tt(t, e, i, r), Wo(t, e, i));
  }, enqueueForceUpdate: function(e, t) {
    e = e._reactInternals;
    var n = Ne(), r = xn(e), i = Ht(n, r);
    i.tag = 2, t != null && (i.callback = t), t = gn(e, i, r), t !== null && (Tt(t, e, r, n), Wo(t, e, r));
  } };
  function fd(e, t, n, r, i, o, s) {
    return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(r, o, s) : t.prototype && t.prototype.isPureReactComponent ? !$i(n, r) || !$i(i, o) : !0;
  }
  function Hm(e, t, n) {
    var r = !1, i = Pn, o = t.contextType;
    return typeof o == "object" && o !== null ? o = ht(o) : (i = We(t) ? Zn : De.current, r = t.contextTypes, o = (r = r != null) ? zr(e, i) : Pn), t = new t(n, o), e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null, t.updater = Gs, e.stateNode = t, t._reactInternals = e, r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = i, e.__reactInternalMemoizedMaskedChildContext = o), t;
  }
  function dd(e, t, n, r) {
    e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, r), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, r), t.state !== e && Gs.enqueueReplaceState(t, t.state, null);
  }
  function eu(e, t, n, r) {
    var i = e.stateNode;
    i.props = n, i.state = e.memoizedState, i.refs = Um, dc(e);
    var o = t.contextType;
    typeof o == "object" && o !== null ? i.context = ht(o) : (o = We(t) ? Zn : De.current, i.context = zr(e, o)), i.state = e.memoizedState, o = t.getDerivedStateFromProps, typeof o == "function" && (Jl(e, t, o, n), i.state = e.memoizedState), typeof t.getDerivedStateFromProps == "function" || typeof i.getSnapshotBeforeUpdate == "function" || typeof i.UNSAFE_componentWillMount != "function" && typeof i.componentWillMount != "function" || (t = i.state, typeof i.componentWillMount == "function" && i.componentWillMount(), typeof i.UNSAFE_componentWillMount == "function" && i.UNSAFE_componentWillMount(), t !== i.state && Gs.enqueueReplaceState(i, i.state, null), gs(e, n, i, r), i.state = e.memoizedState), typeof i.componentDidMount == "function" && (e.flags |= 4194308);
  }
  function si(e, t, n) {
    if (e = n.ref, e !== null && typeof e != "function" && typeof e != "object") {
      if (n._owner) {
        if (n = n._owner, n) {
          if (n.tag !== 1)
            throw Error(A(309));
          var r = n.stateNode;
        }
        if (!r)
          throw Error(A(147, e));
        var i = r, o = "" + e;
        return t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === o ? t.ref : (t = function(s) {
          var a = i.refs;
          a === Um && (a = i.refs = {}), s === null ? delete a[o] : a[o] = s;
        }, t._stringRef = o, t);
      }
      if (typeof e != "string")
        throw Error(A(284));
      if (!n._owner)
        throw Error(A(290, e));
    }
    return e;
  }
  function Oo(e, t) {
    throw e = Object.prototype.toString.call(t), Error(A(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e));
  }
  function hd(e) {
    var t = e._init;
    return t(e._payload);
  }
  function Wm(e) {
    function t(y, h) {
      if (e) {
        var m = y.deletions;
        m === null ? (y.deletions = [h], y.flags |= 16) : m.push(h);
      }
    }
    function n(y, h) {
      if (!e)
        return null;
      for (; h !== null; )
        t(y, h), h = h.sibling;
      return null;
    }
    function r(y, h) {
      for (y = /* @__PURE__ */ new Map(); h !== null; )
        h.key !== null ? y.set(h.key, h) : y.set(h.index, h), h = h.sibling;
      return y;
    }
    function i(y, h) {
      return y = Sn(y, h), y.index = 0, y.sibling = null, y;
    }
    function o(y, h, m) {
      return y.index = m, e ? (m = y.alternate, m !== null ? (m = m.index, m < h ? (y.flags |= 2, h) : m) : (y.flags |= 2, h)) : (y.flags |= 1048576, h);
    }
    function s(y) {
      return e && y.alternate === null && (y.flags |= 2), y;
    }
    function a(y, h, m, x) {
      return h === null || h.tag !== 6 ? (h = el(m, y.mode, x), h.return = y, h) : (h = i(h, m), h.return = y, h);
    }
    function l(y, h, m, x) {
      var k = m.type;
      return k === vr ? f(y, h, m.props.children, x, m.key) : h !== null && (h.elementType === k || typeof k == "object" && k !== null && k.$$typeof === rn && hd(k) === h.type) ? (x = i(h, m.props), x.ref = si(y, h, m), x.return = y, x) : (x = Zo(m.type, m.key, m.props, null, y.mode, x), x.ref = si(y, h, m), x.return = y, x);
    }
    function u(y, h, m, x) {
      return h === null || h.tag !== 4 || h.stateNode.containerInfo !== m.containerInfo || h.stateNode.implementation !== m.implementation ? (h = tl(m, y.mode, x), h.return = y, h) : (h = i(h, m.children || []), h.return = y, h);
    }
    function f(y, h, m, x, k) {
      return h === null || h.tag !== 7 ? (h = Qn(m, y.mode, x, k), h.return = y, h) : (h = i(h, m), h.return = y, h);
    }
    function c(y, h, m) {
      if (typeof h == "string" && h !== "" || typeof h == "number")
        return h = el("" + h, y.mode, m), h.return = y, h;
      if (typeof h == "object" && h !== null) {
        switch (h.$$typeof) {
          case vo:
            return m = Zo(h.type, h.key, h.props, null, y.mode, m), m.ref = si(y, null, h), m.return = y, m;
          case gr:
            return h = tl(h, y.mode, m), h.return = y, h;
          case rn:
            var x = h._init;
            return c(y, x(h._payload), m);
        }
        if (hi(h) || ti(h))
          return h = Qn(h, y.mode, m, null), h.return = y, h;
        Oo(y, h);
      }
      return null;
    }
    function d(y, h, m, x) {
      var k = h !== null ? h.key : null;
      if (typeof m == "string" && m !== "" || typeof m == "number")
        return k !== null ? null : a(y, h, "" + m, x);
      if (typeof m == "object" && m !== null) {
        switch (m.$$typeof) {
          case vo:
            return m.key === k ? l(y, h, m, x) : null;
          case gr:
            return m.key === k ? u(y, h, m, x) : null;
          case rn:
            return k = m._init, d(
              y,
              h,
              k(m._payload),
              x
            );
        }
        if (hi(m) || ti(m))
          return k !== null ? null : f(y, h, m, x, null);
        Oo(y, m);
      }
      return null;
    }
    function p(y, h, m, x, k) {
      if (typeof x == "string" && x !== "" || typeof x == "number")
        return y = y.get(m) || null, a(h, y, "" + x, k);
      if (typeof x == "object" && x !== null) {
        switch (x.$$typeof) {
          case vo:
            return y = y.get(x.key === null ? m : x.key) || null, l(h, y, x, k);
          case gr:
            return y = y.get(x.key === null ? m : x.key) || null, u(h, y, x, k);
          case rn:
            var E = x._init;
            return p(y, h, m, E(x._payload), k);
        }
        if (hi(x) || ti(x))
          return y = y.get(m) || null, f(h, y, x, k, null);
        Oo(h, x);
      }
      return null;
    }
    function g(y, h, m, x) {
      for (var k = null, E = null, C = h, _ = h = 0, L = null; C !== null && _ < m.length; _++) {
        C.index > _ ? (L = C, C = null) : L = C.sibling;
        var V = d(y, C, m[_], x);
        if (V === null) {
          C === null && (C = L);
          break;
        }
        e && C && V.alternate === null && t(y, C), h = o(V, h, _), E === null ? k = V : E.sibling = V, E = V, C = L;
      }
      if (_ === m.length)
        return n(y, C), se && Nn(y, _), k;
      if (C === null) {
        for (; _ < m.length; _++)
          C = c(y, m[_], x), C !== null && (h = o(C, h, _), E === null ? k = C : E.sibling = C, E = C);
        return se && Nn(y, _), k;
      }
      for (C = r(y, C); _ < m.length; _++)
        L = p(C, y, _, m[_], x), L !== null && (e && L.alternate !== null && C.delete(L.key === null ? _ : L.key), h = o(L, h, _), E === null ? k = L : E.sibling = L, E = L);
      return e && C.forEach(function(I) {
        return t(y, I);
      }), se && Nn(y, _), k;
    }
    function v(y, h, m, x) {
      var k = ti(m);
      if (typeof k != "function")
        throw Error(A(150));
      if (m = k.call(m), m == null)
        throw Error(A(151));
      for (var E = k = null, C = h, _ = h = 0, L = null, V = m.next(); C !== null && !V.done; _++, V = m.next()) {
        C.index > _ ? (L = C, C = null) : L = C.sibling;
        var I = d(y, C, V.value, x);
        if (I === null) {
          C === null && (C = L);
          break;
        }
        e && C && I.alternate === null && t(y, C), h = o(I, h, _), E === null ? k = I : E.sibling = I, E = I, C = L;
      }
      if (V.done)
        return n(
          y,
          C
        ), se && Nn(y, _), k;
      if (C === null) {
        for (; !V.done; _++, V = m.next())
          V = c(y, V.value, x), V !== null && (h = o(V, h, _), E === null ? k = V : E.sibling = V, E = V);
        return se && Nn(y, _), k;
      }
      for (C = r(y, C); !V.done; _++, V = m.next())
        V = p(C, y, _, V.value, x), V !== null && (e && V.alternate !== null && C.delete(V.key === null ? _ : V.key), h = o(V, h, _), E === null ? k = V : E.sibling = V, E = V);
      return e && C.forEach(function(G) {
        return t(y, G);
      }), se && Nn(y, _), k;
    }
    function T(y, h, m, x) {
      if (typeof m == "object" && m !== null && m.type === vr && m.key === null && (m = m.props.children), typeof m == "object" && m !== null) {
        switch (m.$$typeof) {
          case vo:
            e: {
              for (var k = m.key, E = h; E !== null; ) {
                if (E.key === k) {
                  if (k = m.type, k === vr) {
                    if (E.tag === 7) {
                      n(y, E.sibling), h = i(E, m.props.children), h.return = y, y = h;
                      break e;
                    }
                  } else if (E.elementType === k || typeof k == "object" && k !== null && k.$$typeof === rn && hd(k) === E.type) {
                    n(y, E.sibling), h = i(E, m.props), h.ref = si(y, E, m), h.return = y, y = h;
                    break e;
                  }
                  n(y, E);
                  break;
                } else
                  t(y, E);
                E = E.sibling;
              }
              m.type === vr ? (h = Qn(m.props.children, y.mode, x, m.key), h.return = y, y = h) : (x = Zo(m.type, m.key, m.props, null, y.mode, x), x.ref = si(y, h, m), x.return = y, y = x);
            }
            return s(y);
          case gr:
            e: {
              for (E = m.key; h !== null; ) {
                if (h.key === E)
                  if (h.tag === 4 && h.stateNode.containerInfo === m.containerInfo && h.stateNode.implementation === m.implementation) {
                    n(y, h.sibling), h = i(h, m.children || []), h.return = y, y = h;
                    break e;
                  } else {
                    n(y, h);
                    break;
                  }
                else
                  t(y, h);
                h = h.sibling;
              }
              h = tl(m, y.mode, x), h.return = y, y = h;
            }
            return s(y);
          case rn:
            return E = m._init, T(y, h, E(m._payload), x);
        }
        if (hi(m))
          return g(y, h, m, x);
        if (ti(m))
          return v(y, h, m, x);
        Oo(y, m);
      }
      return typeof m == "string" && m !== "" || typeof m == "number" ? (m = "" + m, h !== null && h.tag === 6 ? (n(y, h.sibling), h = i(h, m), h.return = y, y = h) : (n(y, h), h = el(m, y.mode, x), h.return = y, y = h), s(y)) : n(y, h);
    }
    return T;
  }
  var Ur = Wm(!0), Gm = Wm(!1), oo = {}, Ft = Fn(oo), Ui = Fn(oo), Hi = Fn(oo);
  function Wn(e) {
    if (e === oo)
      throw Error(A(174));
    return e;
  }
  function hc(e, t) {
    switch (ee(Hi, t), ee(Ui, e), ee(Ft, oo), e = t.nodeType, e) {
      case 9:
      case 11:
        t = (t = t.documentElement) ? t.namespaceURI : Dl(null, "");
        break;
      default:
        e = e === 8 ? t.parentNode : t, t = e.namespaceURI || null, e = e.tagName, t = Dl(t, e);
    }
    ie(Ft), ee(Ft, t);
  }
  function Hr() {
    ie(Ft), ie(Ui), ie(Hi);
  }
  function Km(e) {
    Wn(Hi.current);
    var t = Wn(Ft.current), n = Dl(t, e.type);
    t !== n && (ee(Ui, e), ee(Ft, n));
  }
  function pc(e) {
    Ui.current === e && (ie(Ft), ie(Ui));
  }
  var ae = Fn(0);
  function vs(e) {
    for (var t = e; t !== null; ) {
      if (t.tag === 13) {
        var n = t.memoizedState;
        if (n !== null && (n = n.dehydrated, n === null || n.data === "$?" || n.data === "$!"))
          return t;
      } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
        if (t.flags & 128)
          return t;
      } else if (t.child !== null) {
        t.child.return = t, t = t.child;
        continue;
      }
      if (t === e)
        break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e)
          return null;
        t = t.return;
      }
      t.sibling.return = t.return, t = t.sibling;
    }
    return null;
  }
  var Qa = [];
  function mc() {
    for (var e = 0; e < Qa.length; e++)
      Qa[e]._workInProgressVersionPrimary = null;
    Qa.length = 0;
  }
  var Go = qt.ReactCurrentDispatcher, Ya = qt.ReactCurrentBatchConfig, Jn = 0, ue = null, ye = null, xe = null, xs = !1, Ti = !1, Wi = 0, fx = 0;
  function Ae() {
    throw Error(A(321));
  }
  function yc(e, t) {
    if (t === null)
      return !1;
    for (var n = 0; n < t.length && n < e.length; n++)
      if (!Et(e[n], t[n]))
        return !1;
    return !0;
  }
  function gc(e, t, n, r, i, o) {
    if (Jn = o, ue = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, Go.current = e === null || e.memoizedState === null ? mx : yx, e = n(r, i), Ti) {
      o = 0;
      do {
        if (Ti = !1, Wi = 0, 25 <= o)
          throw Error(A(301));
        o += 1, xe = ye = null, t.updateQueue = null, Go.current = gx, e = n(r, i);
      } while (Ti);
    }
    if (Go.current = Ss, t = ye !== null && ye.next !== null, Jn = 0, xe = ye = ue = null, xs = !1, t)
      throw Error(A(300));
    return e;
  }
  function vc() {
    var e = Wi !== 0;
    return Wi = 0, e;
  }
  function kt() {
    var e = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
    return xe === null ? ue.memoizedState = xe = e : xe = xe.next = e, xe;
  }
  function pt() {
    if (ye === null) {
      var e = ue.alternate;
      e = e !== null ? e.memoizedState : null;
    } else
      e = ye.next;
    var t = xe === null ? ue.memoizedState : xe.next;
    if (t !== null)
      xe = t, ye = e;
    else {
      if (e === null)
        throw Error(A(310));
      ye = e, e = { memoizedState: ye.memoizedState, baseState: ye.baseState, baseQueue: ye.baseQueue, queue: ye.queue, next: null }, xe === null ? ue.memoizedState = xe = e : xe = xe.next = e;
    }
    return xe;
  }
  function Gi(e, t) {
    return typeof t == "function" ? t(e) : t;
  }
  function Xa(e) {
    var t = pt(), n = t.queue;
    if (n === null)
      throw Error(A(311));
    n.lastRenderedReducer = e;
    var r = ye, i = r.baseQueue, o = n.pending;
    if (o !== null) {
      if (i !== null) {
        var s = i.next;
        i.next = o.next, o.next = s;
      }
      r.baseQueue = i = o, n.pending = null;
    }
    if (i !== null) {
      o = i.next, r = r.baseState;
      var a = s = null, l = null, u = o;
      do {
        var f = u.lane;
        if ((Jn & f) === f)
          l !== null && (l = l.next = { lane: 0, action: u.action, hasEagerState: u.hasEagerState, eagerState: u.eagerState, next: null }), r = u.hasEagerState ? u.eagerState : e(r, u.action);
        else {
          var c = {
            lane: f,
            action: u.action,
            hasEagerState: u.hasEagerState,
            eagerState: u.eagerState,
            next: null
          };
          l === null ? (a = l = c, s = r) : l = l.next = c, ue.lanes |= f, er |= f;
        }
        u = u.next;
      } while (u !== null && u !== o);
      l === null ? s = r : l.next = a, Et(r, t.memoizedState) || (Ue = !0), t.memoizedState = r, t.baseState = s, t.baseQueue = l, n.lastRenderedState = r;
    }
    if (e = n.interleaved, e !== null) {
      i = e;
      do
        o = i.lane, ue.lanes |= o, er |= o, i = i.next;
      while (i !== e);
    } else
      i === null && (n.lanes = 0);
    return [t.memoizedState, n.dispatch];
  }
  function Za(e) {
    var t = pt(), n = t.queue;
    if (n === null)
      throw Error(A(311));
    n.lastRenderedReducer = e;
    var r = n.dispatch, i = n.pending, o = t.memoizedState;
    if (i !== null) {
      n.pending = null;
      var s = i = i.next;
      do
        o = e(o, s.action), s = s.next;
      while (s !== i);
      Et(o, t.memoizedState) || (Ue = !0), t.memoizedState = o, t.baseQueue === null && (t.baseState = o), n.lastRenderedState = o;
    }
    return [o, r];
  }
  function Qm() {
  }
  function Ym(e, t) {
    var n = ue, r = pt(), i = t(), o = !Et(r.memoizedState, i);
    if (o && (r.memoizedState = i, Ue = !0), r = r.queue, xc(qm.bind(null, n, r, e), [e]), r.getSnapshot !== t || o || xe !== null && xe.memoizedState.tag & 1) {
      if (n.flags |= 2048, Ki(9, Zm.bind(null, n, r, i, t), void 0, null), Se === null)
        throw Error(A(349));
      Jn & 30 || Xm(n, t, i);
    }
    return i;
  }
  function Xm(e, t, n) {
    e.flags |= 16384, e = { getSnapshot: t, value: n }, t = ue.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, ue.updateQueue = t, t.stores = [e]) : (n = t.stores, n === null ? t.stores = [e] : n.push(e));
  }
  function Zm(e, t, n, r) {
    t.value = n, t.getSnapshot = r, Jm(t) && ey(e);
  }
  function qm(e, t, n) {
    return n(function() {
      Jm(t) && ey(e);
    });
  }
  function Jm(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
      var n = t();
      return !Et(e, n);
    } catch {
      return !0;
    }
  }
  function ey(e) {
    var t = Yt(e, 1);
    t !== null && Tt(t, e, 1, -1);
  }
  function pd(e) {
    var t = kt();
    return typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: Gi, lastRenderedState: e }, t.queue = e, e = e.dispatch = px.bind(null, ue, e), [t.memoizedState, e];
  }
  function Ki(e, t, n, r) {
    return e = { tag: e, create: t, destroy: n, deps: r, next: null }, t = ue.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, ue.updateQueue = t, t.lastEffect = e.next = e) : (n = t.lastEffect, n === null ? t.lastEffect = e.next = e : (r = n.next, n.next = e, e.next = r, t.lastEffect = e)), e;
  }
  function ty() {
    return pt().memoizedState;
  }
  function Ko(e, t, n, r) {
    var i = kt();
    ue.flags |= e, i.memoizedState = Ki(1 | t, n, void 0, r === void 0 ? null : r);
  }
  function Ks(e, t, n, r) {
    var i = pt();
    r = r === void 0 ? null : r;
    var o = void 0;
    if (ye !== null) {
      var s = ye.memoizedState;
      if (o = s.destroy, r !== null && yc(r, s.deps)) {
        i.memoizedState = Ki(t, n, o, r);
        return;
      }
    }
    ue.flags |= e, i.memoizedState = Ki(1 | t, n, o, r);
  }
  function md(e, t) {
    return Ko(8390656, 8, e, t);
  }
  function xc(e, t) {
    return Ks(2048, 8, e, t);
  }
  function ny(e, t) {
    return Ks(4, 2, e, t);
  }
  function ry(e, t) {
    return Ks(4, 4, e, t);
  }
  function iy(e, t) {
    if (typeof t == "function")
      return e = e(), t(e), function() {
        t(null);
      };
    if (t != null)
      return e = e(), t.current = e, function() {
        t.current = null;
      };
  }
  function oy(e, t, n) {
    return n = n != null ? n.concat([e]) : null, Ks(4, 4, iy.bind(null, t, e), n);
  }
  function Sc() {
  }
  function sy(e, t) {
    var n = pt();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && yc(t, r[1]) ? r[0] : (n.memoizedState = [e, t], e);
  }
  function ay(e, t) {
    var n = pt();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && yc(t, r[1]) ? r[0] : (e = e(), n.memoizedState = [e, t], e);
  }
  function ly(e, t, n) {
    return Jn & 21 ? (Et(n, t) || (n = fm(), ue.lanes |= n, er |= n, e.baseState = !0), t) : (e.baseState && (e.baseState = !1, Ue = !0), e.memoizedState = n);
  }
  function dx(e, t) {
    var n = X;
    X = n !== 0 && 4 > n ? n : 4, e(!0);
    var r = Ya.transition;
    Ya.transition = {};
    try {
      e(!1), t();
    } finally {
      X = n, Ya.transition = r;
    }
  }
  function uy() {
    return pt().memoizedState;
  }
  function hx(e, t, n) {
    var r = xn(e);
    if (n = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null }, cy(e))
      fy(t, n);
    else if (n = zm(e, t, n, r), n !== null) {
      var i = Ne();
      Tt(n, e, r, i), dy(n, t, r);
    }
  }
  function px(e, t, n) {
    var r = xn(e), i = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
    if (cy(e))
      fy(t, i);
    else {
      var o = e.alternate;
      if (e.lanes === 0 && (o === null || o.lanes === 0) && (o = t.lastRenderedReducer, o !== null))
        try {
          var s = t.lastRenderedState, a = o(s, n);
          if (i.hasEagerState = !0, i.eagerState = a, Et(a, s)) {
            var l = t.interleaved;
            l === null ? (i.next = i, fc(t)) : (i.next = l.next, l.next = i), t.interleaved = i;
            return;
          }
        } catch {
        } finally {
        }
      n = zm(e, t, i, r), n !== null && (i = Ne(), Tt(n, e, r, i), dy(n, t, r));
    }
  }
  function cy(e) {
    var t = e.alternate;
    return e === ue || t !== null && t === ue;
  }
  function fy(e, t) {
    Ti = xs = !0;
    var n = e.pending;
    n === null ? t.next = t : (t.next = n.next, n.next = t), e.pending = t;
  }
  function dy(e, t, n) {
    if (n & 4194240) {
      var r = t.lanes;
      r &= e.pendingLanes, n |= r, t.lanes = n, Zu(e, n);
    }
  }
  var Ss = { readContext: ht, useCallback: Ae, useContext: Ae, useEffect: Ae, useImperativeHandle: Ae, useInsertionEffect: Ae, useLayoutEffect: Ae, useMemo: Ae, useReducer: Ae, useRef: Ae, useState: Ae, useDebugValue: Ae, useDeferredValue: Ae, useTransition: Ae, useMutableSource: Ae, useSyncExternalStore: Ae, useId: Ae, unstable_isNewReconciler: !1 }, mx = { readContext: ht, useCallback: function(e, t) {
    return kt().memoizedState = [e, t === void 0 ? null : t], e;
  }, useContext: ht, useEffect: md, useImperativeHandle: function(e, t, n) {
    return n = n != null ? n.concat([e]) : null, Ko(
      4194308,
      4,
      iy.bind(null, t, e),
      n
    );
  }, useLayoutEffect: function(e, t) {
    return Ko(4194308, 4, e, t);
  }, useInsertionEffect: function(e, t) {
    return Ko(4, 2, e, t);
  }, useMemo: function(e, t) {
    var n = kt();
    return t = t === void 0 ? null : t, e = e(), n.memoizedState = [e, t], e;
  }, useReducer: function(e, t, n) {
    var r = kt();
    return t = n !== void 0 ? n(t) : t, r.memoizedState = r.baseState = t, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: e, lastRenderedState: t }, r.queue = e, e = e.dispatch = hx.bind(null, ue, e), [r.memoizedState, e];
  }, useRef: function(e) {
    var t = kt();
    return e = { current: e }, t.memoizedState = e;
  }, useState: pd, useDebugValue: Sc, useDeferredValue: function(e) {
    return kt().memoizedState = e;
  }, useTransition: function() {
    var e = pd(!1), t = e[0];
    return e = dx.bind(null, e[1]), kt().memoizedState = e, [t, e];
  }, useMutableSource: function() {
  }, useSyncExternalStore: function(e, t, n) {
    var r = ue, i = kt();
    if (se) {
      if (n === void 0)
        throw Error(A(407));
      n = n();
    } else {
      if (n = t(), Se === null)
        throw Error(A(349));
      Jn & 30 || Xm(r, t, n);
    }
    i.memoizedState = n;
    var o = { value: n, getSnapshot: t };
    return i.queue = o, md(qm.bind(
      null,
      r,
      o,
      e
    ), [e]), r.flags |= 2048, Ki(9, Zm.bind(null, r, o, n, t), void 0, null), n;
  }, useId: function() {
    var e = kt(), t = Se.identifierPrefix;
    if (se) {
      var n = It, r = $t;
      n = (r & ~(1 << 32 - wt(r) - 1)).toString(32) + n, t = ":" + t + "R" + n, n = Wi++, 0 < n && (t += "H" + n.toString(32)), t += ":";
    } else
      n = fx++, t = ":" + t + "r" + n.toString(32) + ":";
    return e.memoizedState = t;
  }, unstable_isNewReconciler: !1 }, yx = {
    readContext: ht,
    useCallback: sy,
    useContext: ht,
    useEffect: xc,
    useImperativeHandle: oy,
    useInsertionEffect: ny,
    useLayoutEffect: ry,
    useMemo: ay,
    useReducer: Xa,
    useRef: ty,
    useState: function() {
      return Xa(Gi);
    },
    useDebugValue: Sc,
    useDeferredValue: function(e) {
      var t = pt();
      return ly(t, ye.memoizedState, e);
    },
    useTransition: function() {
      var e = Xa(Gi)[0], t = pt().memoizedState;
      return [e, t];
    },
    useMutableSource: Qm,
    useSyncExternalStore: Ym,
    useId: uy,
    unstable_isNewReconciler: !1
  }, gx = { readContext: ht, useCallback: sy, useContext: ht, useEffect: xc, useImperativeHandle: oy, useInsertionEffect: ny, useLayoutEffect: ry, useMemo: ay, useReducer: Za, useRef: ty, useState: function() {
    return Za(Gi);
  }, useDebugValue: Sc, useDeferredValue: function(e) {
    var t = pt();
    return ye === null ? t.memoizedState = e : ly(t, ye.memoizedState, e);
  }, useTransition: function() {
    var e = Za(Gi)[0], t = pt().memoizedState;
    return [e, t];
  }, useMutableSource: Qm, useSyncExternalStore: Ym, useId: uy, unstable_isNewReconciler: !1 };
  function Wr(e, t) {
    try {
      var n = "", r = t;
      do
        n += W0(r), r = r.return;
      while (r);
      var i = n;
    } catch (o) {
      i = `
Error generating stack: ` + o.message + `
` + o.stack;
    }
    return { value: e, source: t, stack: i, digest: null };
  }
  function qa(e, t, n) {
    return { value: e, source: null, stack: n ?? null, digest: t ?? null };
  }
  function tu(e, t) {
    try {
      console.error(t.value);
    } catch (n) {
      setTimeout(function() {
        throw n;
      });
    }
  }
  var vx = typeof WeakMap == "function" ? WeakMap : Map;
  function hy(e, t, n) {
    n = Ht(-1, n), n.tag = 3, n.payload = { element: null };
    var r = t.value;
    return n.callback = function() {
      Ts || (Ts = !0, fu = r), tu(e, t);
    }, n;
  }
  function py(e, t, n) {
    n = Ht(-1, n), n.tag = 3;
    var r = e.type.getDerivedStateFromError;
    if (typeof r == "function") {
      var i = t.value;
      n.payload = function() {
        return r(i);
      }, n.callback = function() {
        tu(e, t);
      };
    }
    var o = e.stateNode;
    return o !== null && typeof o.componentDidCatch == "function" && (n.callback = function() {
      tu(e, t), typeof r != "function" && (vn === null ? vn = /* @__PURE__ */ new Set([this]) : vn.add(this));
      var s = t.stack;
      this.componentDidCatch(t.value, { componentStack: s !== null ? s : "" });
    }), n;
  }
  function yd(e, t, n) {
    var r = e.pingCache;
    if (r === null) {
      r = e.pingCache = new vx();
      var i = /* @__PURE__ */ new Set();
      r.set(t, i);
    } else
      i = r.get(t), i === void 0 && (i = /* @__PURE__ */ new Set(), r.set(t, i));
    i.has(n) || (i.add(n), e = Dx.bind(null, e, t, n), t.then(e, e));
  }
  function gd(e) {
    do {
      var t;
      if ((t = e.tag === 13) && (t = e.memoizedState, t = t !== null ? t.dehydrated !== null : !0), t)
        return e;
      e = e.return;
    } while (e !== null);
    return null;
  }
  function vd(e, t, n, r, i) {
    return e.mode & 1 ? (e.flags |= 65536, e.lanes = i, e) : (e === t ? e.flags |= 65536 : (e.flags |= 128, n.flags |= 131072, n.flags &= -52805, n.tag === 1 && (n.alternate === null ? n.tag = 17 : (t = Ht(-1, 1), t.tag = 2, gn(n, t, 1))), n.lanes |= 1), e);
  }
  var xx = qt.ReactCurrentOwner, Ue = !1;
  function Ve(e, t, n, r) {
    t.child = e === null ? Gm(t, null, n, r) : Ur(t, e.child, n, r);
  }
  function xd(e, t, n, r, i) {
    n = n.render;
    var o = t.ref;
    return br(t, i), r = gc(e, t, n, r, o, i), n = vc(), e !== null && !Ue ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~i, Xt(e, t, i)) : (se && n && oc(t), t.flags |= 1, Ve(e, t, r, i), t.child);
  }
  function Sd(e, t, n, r, i) {
    if (e === null) {
      var o = n.type;
      return typeof o == "function" && !Ac(o) && o.defaultProps === void 0 && n.compare === null && n.defaultProps === void 0 ? (t.tag = 15, t.type = o, my(e, t, o, r, i)) : (e = Zo(n.type, null, r, t, t.mode, i), e.ref = t.ref, e.return = t, t.child = e);
    }
    if (o = e.child, !(e.lanes & i)) {
      var s = o.memoizedProps;
      if (n = n.compare, n = n !== null ? n : $i, n(s, r) && e.ref === t.ref)
        return Xt(e, t, i);
    }
    return t.flags |= 1, e = Sn(o, r), e.ref = t.ref, e.return = t, t.child = e;
  }
  function my(e, t, n, r, i) {
    if (e !== null) {
      var o = e.memoizedProps;
      if ($i(o, r) && e.ref === t.ref)
        if (Ue = !1, t.pendingProps = r = o, (e.lanes & i) !== 0)
          e.flags & 131072 && (Ue = !0);
        else
          return t.lanes = e.lanes, Xt(e, t, i);
    }
    return nu(e, t, n, r, i);
  }
  function yy(e, t, n) {
    var r = t.pendingProps, i = r.children, o = e !== null ? e.memoizedState : null;
    if (r.mode === "hidden")
      if (!(t.mode & 1))
        t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, ee(Ar, Xe), Xe |= n;
      else {
        if (!(n & 1073741824))
          return e = o !== null ? o.baseLanes | n : n, t.lanes = t.childLanes = 1073741824, t.memoizedState = { baseLanes: e, cachePool: null, transitions: null }, t.updateQueue = null, ee(Ar, Xe), Xe |= e, null;
        t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, r = o !== null ? o.baseLanes : n, ee(Ar, Xe), Xe |= r;
      }
    else
      o !== null ? (r = o.baseLanes | n, t.memoizedState = null) : r = n, ee(Ar, Xe), Xe |= r;
    return Ve(e, t, i, n), t.child;
  }
  function gy(e, t) {
    var n = t.ref;
    (e === null && n !== null || e !== null && e.ref !== n) && (t.flags |= 512, t.flags |= 2097152);
  }
  function nu(e, t, n, r, i) {
    var o = We(n) ? Zn : De.current;
    return o = zr(t, o), br(t, i), n = gc(e, t, n, r, o, i), r = vc(), e !== null && !Ue ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~i, Xt(e, t, i)) : (se && r && oc(t), t.flags |= 1, Ve(e, t, n, i), t.child);
  }
  function wd(e, t, n, r, i) {
    if (We(n)) {
      var o = !0;
      ds(t);
    } else
      o = !1;
    if (br(t, i), t.stateNode === null)
      Qo(e, t), Hm(t, n, r), eu(t, n, r, i), r = !0;
    else if (e === null) {
      var s = t.stateNode, a = t.memoizedProps;
      s.props = a;
      var l = s.context, u = n.contextType;
      typeof u == "object" && u !== null ? u = ht(u) : (u = We(n) ? Zn : De.current, u = zr(t, u));
      var f = n.getDerivedStateFromProps, c = typeof f == "function" || typeof s.getSnapshotBeforeUpdate == "function";
      c || typeof s.UNSAFE_componentWillReceiveProps != "function" && typeof s.componentWillReceiveProps != "function" || (a !== r || l !== u) && dd(t, s, r, u), on = !1;
      var d = t.memoizedState;
      s.state = d, gs(t, r, s, i), l = t.memoizedState, a !== r || d !== l || He.current || on ? (typeof f == "function" && (Jl(t, n, f, r), l = t.memoizedState), (a = on || fd(t, n, a, r, d, l, u)) ? (c || typeof s.UNSAFE_componentWillMount != "function" && typeof s.componentWillMount != "function" || (typeof s.componentWillMount == "function" && s.componentWillMount(), typeof s.UNSAFE_componentWillMount == "function" && s.UNSAFE_componentWillMount()), typeof s.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof s.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = r, t.memoizedState = l), s.props = r, s.state = l, s.context = u, r = a) : (typeof s.componentDidMount == "function" && (t.flags |= 4194308), r = !1);
    } else {
      s = t.stateNode, Bm(e, t), a = t.memoizedProps, u = t.type === t.elementType ? a : vt(t.type, a), s.props = u, c = t.pendingProps, d = s.context, l = n.contextType, typeof l == "object" && l !== null ? l = ht(l) : (l = We(n) ? Zn : De.current, l = zr(t, l));
      var p = n.getDerivedStateFromProps;
      (f = typeof p == "function" || typeof s.getSnapshotBeforeUpdate == "function") || typeof s.UNSAFE_componentWillReceiveProps != "function" && typeof s.componentWillReceiveProps != "function" || (a !== c || d !== l) && dd(t, s, r, l), on = !1, d = t.memoizedState, s.state = d, gs(t, r, s, i);
      var g = t.memoizedState;
      a !== c || d !== g || He.current || on ? (typeof p == "function" && (Jl(t, n, p, r), g = t.memoizedState), (u = on || fd(t, n, u, r, d, g, l) || !1) ? (f || typeof s.UNSAFE_componentWillUpdate != "function" && typeof s.componentWillUpdate != "function" || (typeof s.componentWillUpdate == "function" && s.componentWillUpdate(r, g, l), typeof s.UNSAFE_componentWillUpdate == "function" && s.UNSAFE_componentWillUpdate(r, g, l)), typeof s.componentDidUpdate == "function" && (t.flags |= 4), typeof s.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof s.componentDidUpdate != "function" || a === e.memoizedProps && d === e.memoizedState || (t.flags |= 4), typeof s.getSnapshotBeforeUpdate != "function" || a === e.memoizedProps && d === e.memoizedState || (t.flags |= 1024), t.memoizedProps = r, t.memoizedState = g), s.props = r, s.state = g, s.context = l, r = u) : (typeof s.componentDidUpdate != "function" || a === e.memoizedProps && d === e.memoizedState || (t.flags |= 4), typeof s.getSnapshotBeforeUpdate != "function" || a === e.memoizedProps && d === e.memoizedState || (t.flags |= 1024), r = !1);
    }
    return ru(e, t, n, r, o, i);
  }
  function ru(e, t, n, r, i, o) {
    gy(e, t);
    var s = (t.flags & 128) !== 0;
    if (!r && !s)
      return i && sd(t, n, !1), Xt(e, t, o);
    r = t.stateNode, xx.current = t;
    var a = s && typeof n.getDerivedStateFromError != "function" ? null : r.render();
    return t.flags |= 1, e !== null && s ? (t.child = Ur(t, e.child, null, o), t.child = Ur(t, null, a, o)) : Ve(e, t, a, o), t.memoizedState = r.state, i && sd(t, n, !0), t.child;
  }
  function vy(e) {
    var t = e.stateNode;
    t.pendingContext ? od(e, t.pendingContext, t.pendingContext !== t.context) : t.context && od(e, t.context, !1), hc(e, t.containerInfo);
  }
  function Td(e, t, n, r, i) {
    return Br(), ac(i), t.flags |= 256, Ve(e, t, n, r), t.child;
  }
  var iu = { dehydrated: null, treeContext: null, retryLane: 0 };
  function ou(e) {
    return { baseLanes: e, cachePool: null, transitions: null };
  }
  function xy(e, t, n) {
    var r = t.pendingProps, i = ae.current, o = !1, s = (t.flags & 128) !== 0, a;
    if ((a = s) || (a = e !== null && e.memoizedState === null ? !1 : (i & 2) !== 0), a ? (o = !0, t.flags &= -129) : (e === null || e.memoizedState !== null) && (i |= 1), ee(ae, i & 1), e === null)
      return Zl(t), e = t.memoizedState, e !== null && (e = e.dehydrated, e !== null) ? (t.mode & 1 ? e.data === "$!" ? t.lanes = 8 : t.lanes = 1073741824 : t.lanes = 1, null) : (s = r.children, e = r.fallback, o ? (r = t.mode, o = t.child, s = { mode: "hidden", children: s }, !(r & 1) && o !== null ? (o.childLanes = 0, o.pendingProps = s) : o = Xs(s, r, 0, null), e = Qn(e, r, n, null), o.return = t, e.return = t, o.sibling = e, t.child = o, t.child.memoizedState = ou(n), t.memoizedState = iu, e) : wc(t, s));
    if (i = e.memoizedState, i !== null && (a = i.dehydrated, a !== null))
      return Sx(e, t, s, r, a, i, n);
    if (o) {
      o = r.fallback, s = t.mode, i = e.child, a = i.sibling;
      var l = { mode: "hidden", children: r.children };
      return !(s & 1) && t.child !== i ? (r = t.child, r.childLanes = 0, r.pendingProps = l, t.deletions = null) : (r = Sn(i, l), r.subtreeFlags = i.subtreeFlags & 14680064), a !== null ? o = Sn(a, o) : (o = Qn(o, s, n, null), o.flags |= 2), o.return = t, r.return = t, r.sibling = o, t.child = r, r = o, o = t.child, s = e.child.memoizedState, s = s === null ? ou(n) : { baseLanes: s.baseLanes | n, cachePool: null, transitions: s.transitions }, o.memoizedState = s, o.childLanes = e.childLanes & ~n, t.memoizedState = iu, r;
    }
    return o = e.child, e = o.sibling, r = Sn(o, { mode: "visible", children: r.children }), !(t.mode & 1) && (r.lanes = n), r.return = t, r.sibling = null, e !== null && (n = t.deletions, n === null ? (t.deletions = [e], t.flags |= 16) : n.push(e)), t.child = r, t.memoizedState = null, r;
  }
  function wc(e, t) {
    return t = Xs({ mode: "visible", children: t }, e.mode, 0, null), t.return = e, e.child = t;
  }
  function Fo(e, t, n, r) {
    return r !== null && ac(r), Ur(t, e.child, null, n), e = wc(t, t.pendingProps.children), e.flags |= 2, t.memoizedState = null, e;
  }
  function Sx(e, t, n, r, i, o, s) {
    if (n)
      return t.flags & 256 ? (t.flags &= -257, r = qa(Error(A(422))), Fo(e, t, s, r)) : t.memoizedState !== null ? (t.child = e.child, t.flags |= 128, null) : (o = r.fallback, i = t.mode, r = Xs({ mode: "visible", children: r.children }, i, 0, null), o = Qn(o, i, s, null), o.flags |= 2, r.return = t, o.return = t, r.sibling = o, t.child = r, t.mode & 1 && Ur(t, e.child, null, s), t.child.memoizedState = ou(s), t.memoizedState = iu, o);
    if (!(t.mode & 1))
      return Fo(e, t, s, null);
    if (i.data === "$!") {
      if (r = i.nextSibling && i.nextSibling.dataset, r)
        var a = r.dgst;
      return r = a, o = Error(A(419)), r = qa(o, r, void 0), Fo(e, t, s, r);
    }
    if (a = (s & e.childLanes) !== 0, Ue || a) {
      if (r = Se, r !== null) {
        switch (s & -s) {
          case 4:
            i = 2;
            break;
          case 16:
            i = 8;
            break;
          case 64:
          case 128:
          case 256:
          case 512:
          case 1024:
          case 2048:
          case 4096:
          case 8192:
          case 16384:
          case 32768:
          case 65536:
          case 131072:
          case 262144:
          case 524288:
          case 1048576:
          case 2097152:
          case 4194304:
          case 8388608:
          case 16777216:
          case 33554432:
          case 67108864:
            i = 32;
            break;
          case 536870912:
            i = 268435456;
            break;
          default:
            i = 0;
        }
        i = i & (r.suspendedLanes | s) ? 0 : i, i !== 0 && i !== o.retryLane && (o.retryLane = i, Yt(e, i), Tt(r, e, i, -1));
      }
      return _c(), r = qa(Error(A(421))), Fo(e, t, s, r);
    }
    return i.data === "$?" ? (t.flags |= 128, t.child = e.child, t = Mx.bind(null, e), i._reactRetry = t, null) : (e = o.treeContext, Ze = yn(i.nextSibling), et = t, se = !0, St = null, e !== null && (ut[ct++] = $t, ut[ct++] = It, ut[ct++] = qn, $t = e.id, It = e.overflow, qn = t), t = wc(t, r.children), t.flags |= 4096, t);
  }
  function Ed(e, t, n) {
    e.lanes |= t;
    var r = e.alternate;
    r !== null && (r.lanes |= t), ql(e.return, t, n);
  }
  function Ja(e, t, n, r, i) {
    var o = e.memoizedState;
    o === null ? e.memoizedState = { isBackwards: t, rendering: null, renderingStartTime: 0, last: r, tail: n, tailMode: i } : (o.isBackwards = t, o.rendering = null, o.renderingStartTime = 0, o.last = r, o.tail = n, o.tailMode = i);
  }
  function Sy(e, t, n) {
    var r = t.pendingProps, i = r.revealOrder, o = r.tail;
    if (Ve(e, t, r.children, n), r = ae.current, r & 2)
      r = r & 1 | 2, t.flags |= 128;
    else {
      if (e !== null && e.flags & 128)
        e:
          for (e = t.child; e !== null; ) {
            if (e.tag === 13)
              e.memoizedState !== null && Ed(e, n, t);
            else if (e.tag === 19)
              Ed(e, n, t);
            else if (e.child !== null) {
              e.child.return = e, e = e.child;
              continue;
            }
            if (e === t)
              break e;
            for (; e.sibling === null; ) {
              if (e.return === null || e.return === t)
                break e;
              e = e.return;
            }
            e.sibling.return = e.return, e = e.sibling;
          }
      r &= 1;
    }
    if (ee(ae, r), !(t.mode & 1))
      t.memoizedState = null;
    else
      switch (i) {
        case "forwards":
          for (n = t.child, i = null; n !== null; )
            e = n.alternate, e !== null && vs(e) === null && (i = n), n = n.sibling;
          n = i, n === null ? (i = t.child, t.child = null) : (i = n.sibling, n.sibling = null), Ja(t, !1, i, n, o);
          break;
        case "backwards":
          for (n = null, i = t.child, t.child = null; i !== null; ) {
            if (e = i.alternate, e !== null && vs(e) === null) {
              t.child = i;
              break;
            }
            e = i.sibling, i.sibling = n, n = i, i = e;
          }
          Ja(t, !0, n, null, o);
          break;
        case "together":
          Ja(t, !1, null, null, void 0);
          break;
        default:
          t.memoizedState = null;
      }
    return t.child;
  }
  function Qo(e, t) {
    !(t.mode & 1) && e !== null && (e.alternate = null, t.alternate = null, t.flags |= 2);
  }
  function Xt(e, t, n) {
    if (e !== null && (t.dependencies = e.dependencies), er |= t.lanes, !(n & t.childLanes))
      return null;
    if (e !== null && t.child !== e.child)
      throw Error(A(153));
    if (t.child !== null) {
      for (e = t.child, n = Sn(e, e.pendingProps), t.child = n, n.return = t; e.sibling !== null; )
        e = e.sibling, n = n.sibling = Sn(e, e.pendingProps), n.return = t;
      n.sibling = null;
    }
    return t.child;
  }
  function wx(e, t, n) {
    switch (t.tag) {
      case 3:
        vy(t), Br();
        break;
      case 5:
        Km(t);
        break;
      case 1:
        We(t.type) && ds(t);
        break;
      case 4:
        hc(t, t.stateNode.containerInfo);
        break;
      case 10:
        var r = t.type._context, i = t.memoizedProps.value;
        ee(ms, r._currentValue), r._currentValue = i;
        break;
      case 13:
        if (r = t.memoizedState, r !== null)
          return r.dehydrated !== null ? (ee(ae, ae.current & 1), t.flags |= 128, null) : n & t.child.childLanes ? xy(e, t, n) : (ee(ae, ae.current & 1), e = Xt(e, t, n), e !== null ? e.sibling : null);
        ee(ae, ae.current & 1);
        break;
      case 19:
        if (r = (n & t.childLanes) !== 0, e.flags & 128) {
          if (r)
            return Sy(e, t, n);
          t.flags |= 128;
        }
        if (i = t.memoizedState, i !== null && (i.rendering = null, i.tail = null, i.lastEffect = null), ee(ae, ae.current), r)
          break;
        return null;
      case 22:
      case 23:
        return t.lanes = 0, yy(e, t, n);
    }
    return Xt(e, t, n);
  }
  var wy, su, Ty, Ey;
  wy = function(e, t) {
    for (var n = t.child; n !== null; ) {
      if (n.tag === 5 || n.tag === 6)
        e.appendChild(n.stateNode);
      else if (n.tag !== 4 && n.child !== null) {
        n.child.return = n, n = n.child;
        continue;
      }
      if (n === t)
        break;
      for (; n.sibling === null; ) {
        if (n.return === null || n.return === t)
          return;
        n = n.return;
      }
      n.sibling.return = n.return, n = n.sibling;
    }
  };
  su = function() {
  };
  Ty = function(e, t, n, r) {
    var i = e.memoizedProps;
    if (i !== r) {
      e = t.stateNode, Wn(Ft.current);
      var o = null;
      switch (n) {
        case "input":
          i = Al(e, i), r = Al(e, r), o = [];
          break;
        case "select":
          i = ce({}, i, { value: void 0 }), r = ce({}, r, { value: void 0 }), o = [];
          break;
        case "textarea":
          i = jl(e, i), r = jl(e, r), o = [];
          break;
        default:
          typeof i.onClick != "function" && typeof r.onClick == "function" && (e.onclick = cs);
      }
      Ml(n, r);
      var s;
      n = null;
      for (u in i)
        if (!r.hasOwnProperty(u) && i.hasOwnProperty(u) && i[u] != null)
          if (u === "style") {
            var a = i[u];
            for (s in a)
              a.hasOwnProperty(s) && (n || (n = {}), n[s] = "");
          } else
            u !== "dangerouslySetInnerHTML" && u !== "children" && u !== "suppressContentEditableWarning" && u !== "suppressHydrationWarning" && u !== "autoFocus" && (Di.hasOwnProperty(u) ? o || (o = []) : (o = o || []).push(u, null));
      for (u in r) {
        var l = r[u];
        if (a = i != null ? i[u] : void 0, r.hasOwnProperty(u) && l !== a && (l != null || a != null))
          if (u === "style")
            if (a) {
              for (s in a)
                !a.hasOwnProperty(s) || l && l.hasOwnProperty(s) || (n || (n = {}), n[s] = "");
              for (s in l)
                l.hasOwnProperty(s) && a[s] !== l[s] && (n || (n = {}), n[s] = l[s]);
            } else
              n || (o || (o = []), o.push(
                u,
                n
              )), n = l;
          else
            u === "dangerouslySetInnerHTML" ? (l = l ? l.__html : void 0, a = a ? a.__html : void 0, l != null && a !== l && (o = o || []).push(u, l)) : u === "children" ? typeof l != "string" && typeof l != "number" || (o = o || []).push(u, "" + l) : u !== "suppressContentEditableWarning" && u !== "suppressHydrationWarning" && (Di.hasOwnProperty(u) ? (l != null && u === "onScroll" && ne("scroll", e), o || a === l || (o = [])) : (o = o || []).push(u, l));
      }
      n && (o = o || []).push("style", n);
      var u = o;
      (t.updateQueue = u) && (t.flags |= 4);
    }
  };
  Ey = function(e, t, n, r) {
    n !== r && (t.flags |= 4);
  };
  function ai(e, t) {
    if (!se)
      switch (e.tailMode) {
        case "hidden":
          t = e.tail;
          for (var n = null; t !== null; )
            t.alternate !== null && (n = t), t = t.sibling;
          n === null ? e.tail = null : n.sibling = null;
          break;
        case "collapsed":
          n = e.tail;
          for (var r = null; n !== null; )
            n.alternate !== null && (r = n), n = n.sibling;
          r === null ? t || e.tail === null ? e.tail = null : e.tail.sibling = null : r.sibling = null;
      }
  }
  function Oe(e) {
    var t = e.alternate !== null && e.alternate.child === e.child, n = 0, r = 0;
    if (t)
      for (var i = e.child; i !== null; )
        n |= i.lanes | i.childLanes, r |= i.subtreeFlags & 14680064, r |= i.flags & 14680064, i.return = e, i = i.sibling;
    else
      for (i = e.child; i !== null; )
        n |= i.lanes | i.childLanes, r |= i.subtreeFlags, r |= i.flags, i.return = e, i = i.sibling;
    return e.subtreeFlags |= r, e.childLanes = n, t;
  }
  function Tx(e, t, n) {
    var r = t.pendingProps;
    switch (sc(t), t.tag) {
      case 2:
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return Oe(t), null;
      case 1:
        return We(t.type) && fs(), Oe(t), null;
      case 3:
        return r = t.stateNode, Hr(), ie(He), ie(De), mc(), r.pendingContext && (r.context = r.pendingContext, r.pendingContext = null), (e === null || e.child === null) && (Ao(t) ? t.flags |= 4 : e === null || e.memoizedState.isDehydrated && !(t.flags & 256) || (t.flags |= 1024, St !== null && (pu(St), St = null))), su(e, t), Oe(t), null;
      case 5:
        pc(t);
        var i = Wn(Hi.current);
        if (n = t.type, e !== null && t.stateNode != null)
          Ty(e, t, n, r, i), e.ref !== t.ref && (t.flags |= 512, t.flags |= 2097152);
        else {
          if (!r) {
            if (t.stateNode === null)
              throw Error(A(166));
            return Oe(t), null;
          }
          if (e = Wn(Ft.current), Ao(t)) {
            r = t.stateNode, n = t.type;
            var o = t.memoizedProps;
            switch (r[At] = t, r[Bi] = o, e = (t.mode & 1) !== 0, n) {
              case "dialog":
                ne("cancel", r), ne("close", r);
                break;
              case "iframe":
              case "object":
              case "embed":
                ne("load", r);
                break;
              case "video":
              case "audio":
                for (i = 0; i < mi.length; i++)
                  ne(mi[i], r);
                break;
              case "source":
                ne("error", r);
                break;
              case "img":
              case "image":
              case "link":
                ne(
                  "error",
                  r
                ), ne("load", r);
                break;
              case "details":
                ne("toggle", r);
                break;
              case "input":
                Df(r, o), ne("invalid", r);
                break;
              case "select":
                r._wrapperState = { wasMultiple: !!o.multiple }, ne("invalid", r);
                break;
              case "textarea":
                Rf(r, o), ne("invalid", r);
            }
            Ml(n, o), i = null;
            for (var s in o)
              if (o.hasOwnProperty(s)) {
                var a = o[s];
                s === "children" ? typeof a == "string" ? r.textContent !== a && (o.suppressHydrationWarning !== !0 && _o(r.textContent, a, e), i = ["children", a]) : typeof a == "number" && r.textContent !== "" + a && (o.suppressHydrationWarning !== !0 && _o(
                  r.textContent,
                  a,
                  e
                ), i = ["children", "" + a]) : Di.hasOwnProperty(s) && a != null && s === "onScroll" && ne("scroll", r);
              }
            switch (n) {
              case "input":
                xo(r), Mf(r, o, !0);
                break;
              case "textarea":
                xo(r), Lf(r);
                break;
              case "select":
              case "option":
                break;
              default:
                typeof o.onClick == "function" && (r.onclick = cs);
            }
            r = i, t.updateQueue = r, r !== null && (t.flags |= 4);
          } else {
            s = i.nodeType === 9 ? i : i.ownerDocument, e === "http://www.w3.org/1999/xhtml" && (e = Xp(n)), e === "http://www.w3.org/1999/xhtml" ? n === "script" ? (e = s.createElement("div"), e.innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild)) : typeof r.is == "string" ? e = s.createElement(n, { is: r.is }) : (e = s.createElement(n), n === "select" && (s = e, r.multiple ? s.multiple = !0 : r.size && (s.size = r.size))) : e = s.createElementNS(e, n), e[At] = t, e[Bi] = r, wy(e, t, !1, !1), t.stateNode = e;
            e: {
              switch (s = Rl(n, r), n) {
                case "dialog":
                  ne("cancel", e), ne("close", e), i = r;
                  break;
                case "iframe":
                case "object":
                case "embed":
                  ne("load", e), i = r;
                  break;
                case "video":
                case "audio":
                  for (i = 0; i < mi.length; i++)
                    ne(mi[i], e);
                  i = r;
                  break;
                case "source":
                  ne("error", e), i = r;
                  break;
                case "img":
                case "image":
                case "link":
                  ne(
                    "error",
                    e
                  ), ne("load", e), i = r;
                  break;
                case "details":
                  ne("toggle", e), i = r;
                  break;
                case "input":
                  Df(e, r), i = Al(e, r), ne("invalid", e);
                  break;
                case "option":
                  i = r;
                  break;
                case "select":
                  e._wrapperState = { wasMultiple: !!r.multiple }, i = ce({}, r, { value: void 0 }), ne("invalid", e);
                  break;
                case "textarea":
                  Rf(e, r), i = jl(e, r), ne("invalid", e);
                  break;
                default:
                  i = r;
              }
              Ml(n, i), a = i;
              for (o in a)
                if (a.hasOwnProperty(o)) {
                  var l = a[o];
                  o === "style" ? Jp(e, l) : o === "dangerouslySetInnerHTML" ? (l = l ? l.__html : void 0, l != null && Zp(e, l)) : o === "children" ? typeof l == "string" ? (n !== "textarea" || l !== "") && Mi(e, l) : typeof l == "number" && Mi(e, "" + l) : o !== "suppressContentEditableWarning" && o !== "suppressHydrationWarning" && o !== "autoFocus" && (Di.hasOwnProperty(o) ? l != null && o === "onScroll" && ne("scroll", e) : l != null && Wu(e, o, l, s));
                }
              switch (n) {
                case "input":
                  xo(e), Mf(e, r, !1);
                  break;
                case "textarea":
                  xo(e), Lf(e);
                  break;
                case "option":
                  r.value != null && e.setAttribute("value", "" + Cn(r.value));
                  break;
                case "select":
                  e.multiple = !!r.multiple, o = r.value, o != null ? Rr(e, !!r.multiple, o, !1) : r.defaultValue != null && Rr(
                    e,
                    !!r.multiple,
                    r.defaultValue,
                    !0
                  );
                  break;
                default:
                  typeof i.onClick == "function" && (e.onclick = cs);
              }
              switch (n) {
                case "button":
                case "input":
                case "select":
                case "textarea":
                  r = !!r.autoFocus;
                  break e;
                case "img":
                  r = !0;
                  break e;
                default:
                  r = !1;
              }
            }
            r && (t.flags |= 4);
          }
          t.ref !== null && (t.flags |= 512, t.flags |= 2097152);
        }
        return Oe(t), null;
      case 6:
        if (e && t.stateNode != null)
          Ey(e, t, e.memoizedProps, r);
        else {
          if (typeof r != "string" && t.stateNode === null)
            throw Error(A(166));
          if (n = Wn(Hi.current), Wn(Ft.current), Ao(t)) {
            if (r = t.stateNode, n = t.memoizedProps, r[At] = t, (o = r.nodeValue !== n) && (e = et, e !== null))
              switch (e.tag) {
                case 3:
                  _o(r.nodeValue, n, (e.mode & 1) !== 0);
                  break;
                case 5:
                  e.memoizedProps.suppressHydrationWarning !== !0 && _o(r.nodeValue, n, (e.mode & 1) !== 0);
              }
            o && (t.flags |= 4);
          } else
            r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r), r[At] = t, t.stateNode = r;
        }
        return Oe(t), null;
      case 13:
        if (ie(ae), r = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
          if (se && Ze !== null && t.mode & 1 && !(t.flags & 128))
            Im(), Br(), t.flags |= 98560, o = !1;
          else if (o = Ao(t), r !== null && r.dehydrated !== null) {
            if (e === null) {
              if (!o)
                throw Error(A(318));
              if (o = t.memoizedState, o = o !== null ? o.dehydrated : null, !o)
                throw Error(A(317));
              o[At] = t;
            } else
              Br(), !(t.flags & 128) && (t.memoizedState = null), t.flags |= 4;
            Oe(t), o = !1;
          } else
            St !== null && (pu(St), St = null), o = !0;
          if (!o)
            return t.flags & 65536 ? t : null;
        }
        return t.flags & 128 ? (t.lanes = n, t) : (r = r !== null, r !== (e !== null && e.memoizedState !== null) && r && (t.child.flags |= 8192, t.mode & 1 && (e === null || ae.current & 1 ? ge === 0 && (ge = 3) : _c())), t.updateQueue !== null && (t.flags |= 4), Oe(t), null);
      case 4:
        return Hr(), su(e, t), e === null && Ii(t.stateNode.containerInfo), Oe(t), null;
      case 10:
        return cc(t.type._context), Oe(t), null;
      case 17:
        return We(t.type) && fs(), Oe(t), null;
      case 19:
        if (ie(ae), o = t.memoizedState, o === null)
          return Oe(t), null;
        if (r = (t.flags & 128) !== 0, s = o.rendering, s === null)
          if (r)
            ai(o, !1);
          else {
            if (ge !== 0 || e !== null && e.flags & 128)
              for (e = t.child; e !== null; ) {
                if (s = vs(e), s !== null) {
                  for (t.flags |= 128, ai(o, !1), r = s.updateQueue, r !== null && (t.updateQueue = r, t.flags |= 4), t.subtreeFlags = 0, r = n, n = t.child; n !== null; )
                    o = n, e = r, o.flags &= 14680066, s = o.alternate, s === null ? (o.childLanes = 0, o.lanes = e, o.child = null, o.subtreeFlags = 0, o.memoizedProps = null, o.memoizedState = null, o.updateQueue = null, o.dependencies = null, o.stateNode = null) : (o.childLanes = s.childLanes, o.lanes = s.lanes, o.child = s.child, o.subtreeFlags = 0, o.deletions = null, o.memoizedProps = s.memoizedProps, o.memoizedState = s.memoizedState, o.updateQueue = s.updateQueue, o.type = s.type, e = s.dependencies, o.dependencies = e === null ? null : { lanes: e.lanes, firstContext: e.firstContext }), n = n.sibling;
                  return ee(ae, ae.current & 1 | 2), t.child;
                }
                e = e.sibling;
              }
            o.tail !== null && de() > Gr && (t.flags |= 128, r = !0, ai(o, !1), t.lanes = 4194304);
          }
        else {
          if (!r)
            if (e = vs(s), e !== null) {
              if (t.flags |= 128, r = !0, n = e.updateQueue, n !== null && (t.updateQueue = n, t.flags |= 4), ai(o, !0), o.tail === null && o.tailMode === "hidden" && !s.alternate && !se)
                return Oe(t), null;
            } else
              2 * de() - o.renderingStartTime > Gr && n !== 1073741824 && (t.flags |= 128, r = !0, ai(o, !1), t.lanes = 4194304);
          o.isBackwards ? (s.sibling = t.child, t.child = s) : (n = o.last, n !== null ? n.sibling = s : t.child = s, o.last = s);
        }
        return o.tail !== null ? (t = o.tail, o.rendering = t, o.tail = t.sibling, o.renderingStartTime = de(), t.sibling = null, n = ae.current, ee(ae, r ? n & 1 | 2 : n & 1), t) : (Oe(t), null);
      case 22:
      case 23:
        return kc(), r = t.memoizedState !== null, e !== null && e.memoizedState !== null !== r && (t.flags |= 8192), r && t.mode & 1 ? Xe & 1073741824 && (Oe(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : Oe(t), null;
      case 24:
        return null;
      case 25:
        return null;
    }
    throw Error(A(156, t.tag));
  }
  function Ex(e, t) {
    switch (sc(t), t.tag) {
      case 1:
        return We(t.type) && fs(), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 3:
        return Hr(), ie(He), ie(De), mc(), e = t.flags, e & 65536 && !(e & 128) ? (t.flags = e & -65537 | 128, t) : null;
      case 5:
        return pc(t), null;
      case 13:
        if (ie(ae), e = t.memoizedState, e !== null && e.dehydrated !== null) {
          if (t.alternate === null)
            throw Error(A(340));
          Br();
        }
        return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 19:
        return ie(ae), null;
      case 4:
        return Hr(), null;
      case 10:
        return cc(t.type._context), null;
      case 22:
      case 23:
        return kc(), null;
      case 24:
        return null;
      default:
        return null;
    }
  }
  var jo = !1, je = !1, Cx = typeof WeakSet == "function" ? WeakSet : Set, M = null;
  function _r(e, t) {
    var n = e.ref;
    if (n !== null)
      if (typeof n == "function")
        try {
          n(null);
        } catch (r) {
          fe(e, t, r);
        }
      else
        n.current = null;
  }
  function au(e, t, n) {
    try {
      n();
    } catch (r) {
      fe(e, t, r);
    }
  }
  var Cd = !1;
  function Px(e, t) {
    if (Hl = as, e = _m(), ic(e)) {
      if ("selectionStart" in e)
        var n = { start: e.selectionStart, end: e.selectionEnd };
      else
        e: {
          n = (n = e.ownerDocument) && n.defaultView || window;
          var r = n.getSelection && n.getSelection();
          if (r && r.rangeCount !== 0) {
            n = r.anchorNode;
            var i = r.anchorOffset, o = r.focusNode;
            r = r.focusOffset;
            try {
              n.nodeType, o.nodeType;
            } catch {
              n = null;
              break e;
            }
            var s = 0, a = -1, l = -1, u = 0, f = 0, c = e, d = null;
            t:
              for (; ; ) {
                for (var p; c !== n || i !== 0 && c.nodeType !== 3 || (a = s + i), c !== o || r !== 0 && c.nodeType !== 3 || (l = s + r), c.nodeType === 3 && (s += c.nodeValue.length), (p = c.firstChild) !== null; )
                  d = c, c = p;
                for (; ; ) {
                  if (c === e)
                    break t;
                  if (d === n && ++u === i && (a = s), d === o && ++f === r && (l = s), (p = c.nextSibling) !== null)
                    break;
                  c = d, d = c.parentNode;
                }
                c = p;
              }
            n = a === -1 || l === -1 ? null : { start: a, end: l };
          } else
            n = null;
        }
      n = n || { start: 0, end: 0 };
    } else
      n = null;
    for (Wl = { focusedElem: e, selectionRange: n }, as = !1, M = t; M !== null; )
      if (t = M, e = t.child, (t.subtreeFlags & 1028) !== 0 && e !== null)
        e.return = t, M = e;
      else
        for (; M !== null; ) {
          t = M;
          try {
            var g = t.alternate;
            if (t.flags & 1024)
              switch (t.tag) {
                case 0:
                case 11:
                case 15:
                  break;
                case 1:
                  if (g !== null) {
                    var v = g.memoizedProps, T = g.memoizedState, y = t.stateNode, h = y.getSnapshotBeforeUpdate(t.elementType === t.type ? v : vt(t.type, v), T);
                    y.__reactInternalSnapshotBeforeUpdate = h;
                  }
                  break;
                case 3:
                  var m = t.stateNode.containerInfo;
                  m.nodeType === 1 ? m.textContent = "" : m.nodeType === 9 && m.documentElement && m.removeChild(m.documentElement);
                  break;
                case 5:
                case 6:
                case 4:
                case 17:
                  break;
                default:
                  throw Error(A(163));
              }
          } catch (x) {
            fe(t, t.return, x);
          }
          if (e = t.sibling, e !== null) {
            e.return = t.return, M = e;
            break;
          }
          M = t.return;
        }
    return g = Cd, Cd = !1, g;
  }
  function Ei(e, t, n) {
    var r = t.updateQueue;
    if (r = r !== null ? r.lastEffect : null, r !== null) {
      var i = r = r.next;
      do {
        if ((i.tag & e) === e) {
          var o = i.destroy;
          i.destroy = void 0, o !== void 0 && au(t, n, o);
        }
        i = i.next;
      } while (i !== r);
    }
  }
  function Qs(e, t) {
    if (t = t.updateQueue, t = t !== null ? t.lastEffect : null, t !== null) {
      var n = t = t.next;
      do {
        if ((n.tag & e) === e) {
          var r = n.create;
          n.destroy = r();
        }
        n = n.next;
      } while (n !== t);
    }
  }
  function lu(e) {
    var t = e.ref;
    if (t !== null) {
      var n = e.stateNode;
      switch (e.tag) {
        case 5:
          e = n;
          break;
        default:
          e = n;
      }
      typeof t == "function" ? t(e) : t.current = e;
    }
  }
  function Cy(e) {
    var t = e.alternate;
    t !== null && (e.alternate = null, Cy(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && (delete t[At], delete t[Bi], delete t[Ql], delete t[ax], delete t[lx])), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
  }
  function Py(e) {
    return e.tag === 5 || e.tag === 3 || e.tag === 4;
  }
  function Pd(e) {
    e:
      for (; ; ) {
        for (; e.sibling === null; ) {
          if (e.return === null || Py(e.return))
            return null;
          e = e.return;
        }
        for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
          if (e.flags & 2 || e.child === null || e.tag === 4)
            continue e;
          e.child.return = e, e = e.child;
        }
        if (!(e.flags & 2))
          return e.stateNode;
      }
  }
  function uu(e, t, n) {
    var r = e.tag;
    if (r === 5 || r === 6)
      e = e.stateNode, t ? n.nodeType === 8 ? n.parentNode.insertBefore(e, t) : n.insertBefore(e, t) : (n.nodeType === 8 ? (t = n.parentNode, t.insertBefore(e, n)) : (t = n, t.appendChild(e)), n = n._reactRootContainer, n != null || t.onclick !== null || (t.onclick = cs));
    else if (r !== 4 && (e = e.child, e !== null))
      for (uu(e, t, n), e = e.sibling; e !== null; )
        uu(e, t, n), e = e.sibling;
  }
  function cu(e, t, n) {
    var r = e.tag;
    if (r === 5 || r === 6)
      e = e.stateNode, t ? n.insertBefore(e, t) : n.appendChild(e);
    else if (r !== 4 && (e = e.child, e !== null))
      for (cu(e, t, n), e = e.sibling; e !== null; )
        cu(e, t, n), e = e.sibling;
  }
  var Te = null, xt = !1;
  function en(e, t, n) {
    for (n = n.child; n !== null; )
      ky(e, t, n), n = n.sibling;
  }
  function ky(e, t, n) {
    if (Ot && typeof Ot.onCommitFiberUnmount == "function")
      try {
        Ot.onCommitFiberUnmount(Is, n);
      } catch {
      }
    switch (n.tag) {
      case 5:
        je || _r(n, t);
      case 6:
        var r = Te, i = xt;
        Te = null, en(e, t, n), Te = r, xt = i, Te !== null && (xt ? (e = Te, n = n.stateNode, e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n)) : Te.removeChild(n.stateNode));
        break;
      case 18:
        Te !== null && (xt ? (e = Te, n = n.stateNode, e.nodeType === 8 ? Ga(e.parentNode, n) : e.nodeType === 1 && Ga(e, n), Ni(e)) : Ga(Te, n.stateNode));
        break;
      case 4:
        r = Te, i = xt, Te = n.stateNode.containerInfo, xt = !0, en(e, t, n), Te = r, xt = i;
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        if (!je && (r = n.updateQueue, r !== null && (r = r.lastEffect, r !== null))) {
          i = r = r.next;
          do {
            var o = i, s = o.destroy;
            o = o.tag, s !== void 0 && (o & 2 || o & 4) && au(n, t, s), i = i.next;
          } while (i !== r);
        }
        en(e, t, n);
        break;
      case 1:
        if (!je && (_r(n, t), r = n.stateNode, typeof r.componentWillUnmount == "function"))
          try {
            r.props = n.memoizedProps, r.state = n.memoizedState, r.componentWillUnmount();
          } catch (a) {
            fe(n, t, a);
          }
        en(e, t, n);
        break;
      case 21:
        en(e, t, n);
        break;
      case 22:
        n.mode & 1 ? (je = (r = je) || n.memoizedState !== null, en(e, t, n), je = r) : en(e, t, n);
        break;
      default:
        en(e, t, n);
    }
  }
  function kd(e) {
    var t = e.updateQueue;
    if (t !== null) {
      e.updateQueue = null;
      var n = e.stateNode;
      n === null && (n = e.stateNode = new Cx()), t.forEach(function(r) {
        var i = Rx.bind(null, e, r);
        n.has(r) || (n.add(r), r.then(i, i));
      });
    }
  }
  function gt(e, t) {
    var n = t.deletions;
    if (n !== null)
      for (var r = 0; r < n.length; r++) {
        var i = n[r];
        try {
          var o = e, s = t, a = s;
          e:
            for (; a !== null; ) {
              switch (a.tag) {
                case 5:
                  Te = a.stateNode, xt = !1;
                  break e;
                case 3:
                  Te = a.stateNode.containerInfo, xt = !0;
                  break e;
                case 4:
                  Te = a.stateNode.containerInfo, xt = !0;
                  break e;
              }
              a = a.return;
            }
          if (Te === null)
            throw Error(A(160));
          ky(o, s, i), Te = null, xt = !1;
          var l = i.alternate;
          l !== null && (l.return = null), i.return = null;
        } catch (u) {
          fe(i, t, u);
        }
      }
    if (t.subtreeFlags & 12854)
      for (t = t.child; t !== null; )
        _y(t, e), t = t.sibling;
  }
  function _y(e, t) {
    var n = e.alternate, r = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        if (gt(t, e), Pt(e), r & 4) {
          try {
            Ei(3, e, e.return), Qs(3, e);
          } catch (v) {
            fe(e, e.return, v);
          }
          try {
            Ei(5, e, e.return);
          } catch (v) {
            fe(e, e.return, v);
          }
        }
        break;
      case 1:
        gt(t, e), Pt(e), r & 512 && n !== null && _r(n, n.return);
        break;
      case 5:
        if (gt(t, e), Pt(e), r & 512 && n !== null && _r(n, n.return), e.flags & 32) {
          var i = e.stateNode;
          try {
            Mi(i, "");
          } catch (v) {
            fe(e, e.return, v);
          }
        }
        if (r & 4 && (i = e.stateNode, i != null)) {
          var o = e.memoizedProps, s = n !== null ? n.memoizedProps : o, a = e.type, l = e.updateQueue;
          if (e.updateQueue = null, l !== null)
            try {
              a === "input" && o.type === "radio" && o.name != null && Qp(i, o), Rl(a, s);
              var u = Rl(a, o);
              for (s = 0; s < l.length; s += 2) {
                var f = l[s], c = l[s + 1];
                f === "style" ? Jp(i, c) : f === "dangerouslySetInnerHTML" ? Zp(i, c) : f === "children" ? Mi(i, c) : Wu(i, f, c, u);
              }
              switch (a) {
                case "input":
                  Ol(i, o);
                  break;
                case "textarea":
                  Yp(i, o);
                  break;
                case "select":
                  var d = i._wrapperState.wasMultiple;
                  i._wrapperState.wasMultiple = !!o.multiple;
                  var p = o.value;
                  p != null ? Rr(i, !!o.multiple, p, !1) : d !== !!o.multiple && (o.defaultValue != null ? Rr(
                    i,
                    !!o.multiple,
                    o.defaultValue,
                    !0
                  ) : Rr(i, !!o.multiple, o.multiple ? [] : "", !1));
              }
              i[Bi] = o;
            } catch (v) {
              fe(e, e.return, v);
            }
        }
        break;
      case 6:
        if (gt(t, e), Pt(e), r & 4) {
          if (e.stateNode === null)
            throw Error(A(162));
          i = e.stateNode, o = e.memoizedProps;
          try {
            i.nodeValue = o;
          } catch (v) {
            fe(e, e.return, v);
          }
        }
        break;
      case 3:
        if (gt(t, e), Pt(e), r & 4 && n !== null && n.memoizedState.isDehydrated)
          try {
            Ni(t.containerInfo);
          } catch (v) {
            fe(e, e.return, v);
          }
        break;
      case 4:
        gt(t, e), Pt(e);
        break;
      case 13:
        gt(t, e), Pt(e), i = e.child, i.flags & 8192 && (o = i.memoizedState !== null, i.stateNode.isHidden = o, !o || i.alternate !== null && i.alternate.memoizedState !== null || (Cc = de())), r & 4 && kd(e);
        break;
      case 22:
        if (f = n !== null && n.memoizedState !== null, e.mode & 1 ? (je = (u = je) || f, gt(t, e), je = u) : gt(t, e), Pt(e), r & 8192) {
          if (u = e.memoizedState !== null, (e.stateNode.isHidden = u) && !f && e.mode & 1)
            for (M = e, f = e.child; f !== null; ) {
              for (c = M = f; M !== null; ) {
                switch (d = M, p = d.child, d.tag) {
                  case 0:
                  case 11:
                  case 14:
                  case 15:
                    Ei(4, d, d.return);
                    break;
                  case 1:
                    _r(d, d.return);
                    var g = d.stateNode;
                    if (typeof g.componentWillUnmount == "function") {
                      r = d, n = d.return;
                      try {
                        t = r, g.props = t.memoizedProps, g.state = t.memoizedState, g.componentWillUnmount();
                      } catch (v) {
                        fe(r, n, v);
                      }
                    }
                    break;
                  case 5:
                    _r(d, d.return);
                    break;
                  case 22:
                    if (d.memoizedState !== null) {
                      Ad(c);
                      continue;
                    }
                }
                p !== null ? (p.return = d, M = p) : Ad(c);
              }
              f = f.sibling;
            }
          e:
            for (f = null, c = e; ; ) {
              if (c.tag === 5) {
                if (f === null) {
                  f = c;
                  try {
                    i = c.stateNode, u ? (o = i.style, typeof o.setProperty == "function" ? o.setProperty("display", "none", "important") : o.display = "none") : (a = c.stateNode, l = c.memoizedProps.style, s = l != null && l.hasOwnProperty("display") ? l.display : null, a.style.display = qp("display", s));
                  } catch (v) {
                    fe(e, e.return, v);
                  }
                }
              } else if (c.tag === 6) {
                if (f === null)
                  try {
                    c.stateNode.nodeValue = u ? "" : c.memoizedProps;
                  } catch (v) {
                    fe(e, e.return, v);
                  }
              } else if ((c.tag !== 22 && c.tag !== 23 || c.memoizedState === null || c === e) && c.child !== null) {
                c.child.return = c, c = c.child;
                continue;
              }
              if (c === e)
                break e;
              for (; c.sibling === null; ) {
                if (c.return === null || c.return === e)
                  break e;
                f === c && (f = null), c = c.return;
              }
              f === c && (f = null), c.sibling.return = c.return, c = c.sibling;
            }
        }
        break;
      case 19:
        gt(t, e), Pt(e), r & 4 && kd(e);
        break;
      case 21:
        break;
      default:
        gt(
          t,
          e
        ), Pt(e);
    }
  }
  function Pt(e) {
    var t = e.flags;
    if (t & 2) {
      try {
        e: {
          for (var n = e.return; n !== null; ) {
            if (Py(n)) {
              var r = n;
              break e;
            }
            n = n.return;
          }
          throw Error(A(160));
        }
        switch (r.tag) {
          case 5:
            var i = r.stateNode;
            r.flags & 32 && (Mi(i, ""), r.flags &= -33);
            var o = Pd(e);
            cu(e, o, i);
            break;
          case 3:
          case 4:
            var s = r.stateNode.containerInfo, a = Pd(e);
            uu(e, a, s);
            break;
          default:
            throw Error(A(161));
        }
      } catch (l) {
        fe(e, e.return, l);
      }
      e.flags &= -3;
    }
    t & 4096 && (e.flags &= -4097);
  }
  function kx(e, t, n) {
    M = e, Ay(e);
  }
  function Ay(e, t, n) {
    for (var r = (e.mode & 1) !== 0; M !== null; ) {
      var i = M, o = i.child;
      if (i.tag === 22 && r) {
        var s = i.memoizedState !== null || jo;
        if (!s) {
          var a = i.alternate, l = a !== null && a.memoizedState !== null || je;
          a = jo;
          var u = je;
          if (jo = s, (je = l) && !u)
            for (M = i; M !== null; )
              s = M, l = s.child, s.tag === 22 && s.memoizedState !== null ? Od(i) : l !== null ? (l.return = s, M = l) : Od(i);
          for (; o !== null; )
            M = o, Ay(o), o = o.sibling;
          M = i, jo = a, je = u;
        }
        _d(e);
      } else
        i.subtreeFlags & 8772 && o !== null ? (o.return = i, M = o) : _d(e);
    }
  }
  function _d(e) {
    for (; M !== null; ) {
      var t = M;
      if (t.flags & 8772) {
        var n = t.alternate;
        try {
          if (t.flags & 8772)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                je || Qs(5, t);
                break;
              case 1:
                var r = t.stateNode;
                if (t.flags & 4 && !je)
                  if (n === null)
                    r.componentDidMount();
                  else {
                    var i = t.elementType === t.type ? n.memoizedProps : vt(t.type, n.memoizedProps);
                    r.componentDidUpdate(i, n.memoizedState, r.__reactInternalSnapshotBeforeUpdate);
                  }
                var o = t.updateQueue;
                o !== null && cd(t, o, r);
                break;
              case 3:
                var s = t.updateQueue;
                if (s !== null) {
                  if (n = null, t.child !== null)
                    switch (t.child.tag) {
                      case 5:
                        n = t.child.stateNode;
                        break;
                      case 1:
                        n = t.child.stateNode;
                    }
                  cd(t, s, n);
                }
                break;
              case 5:
                var a = t.stateNode;
                if (n === null && t.flags & 4) {
                  n = a;
                  var l = t.memoizedProps;
                  switch (t.type) {
                    case "button":
                    case "input":
                    case "select":
                    case "textarea":
                      l.autoFocus && n.focus();
                      break;
                    case "img":
                      l.src && (n.src = l.src);
                  }
                }
                break;
              case 6:
                break;
              case 4:
                break;
              case 12:
                break;
              case 13:
                if (t.memoizedState === null) {
                  var u = t.alternate;
                  if (u !== null) {
                    var f = u.memoizedState;
                    if (f !== null) {
                      var c = f.dehydrated;
                      c !== null && Ni(c);
                    }
                  }
                }
                break;
              case 19:
              case 17:
              case 21:
              case 22:
              case 23:
              case 25:
                break;
              default:
                throw Error(A(163));
            }
          je || t.flags & 512 && lu(t);
        } catch (d) {
          fe(t, t.return, d);
        }
      }
      if (t === e) {
        M = null;
        break;
      }
      if (n = t.sibling, n !== null) {
        n.return = t.return, M = n;
        break;
      }
      M = t.return;
    }
  }
  function Ad(e) {
    for (; M !== null; ) {
      var t = M;
      if (t === e) {
        M = null;
        break;
      }
      var n = t.sibling;
      if (n !== null) {
        n.return = t.return, M = n;
        break;
      }
      M = t.return;
    }
  }
  function Od(e) {
    for (; M !== null; ) {
      var t = M;
      try {
        switch (t.tag) {
          case 0:
          case 11:
          case 15:
            var n = t.return;
            try {
              Qs(4, t);
            } catch (l) {
              fe(t, n, l);
            }
            break;
          case 1:
            var r = t.stateNode;
            if (typeof r.componentDidMount == "function") {
              var i = t.return;
              try {
                r.componentDidMount();
              } catch (l) {
                fe(t, i, l);
              }
            }
            var o = t.return;
            try {
              lu(t);
            } catch (l) {
              fe(t, o, l);
            }
            break;
          case 5:
            var s = t.return;
            try {
              lu(t);
            } catch (l) {
              fe(t, s, l);
            }
        }
      } catch (l) {
        fe(t, t.return, l);
      }
      if (t === e) {
        M = null;
        break;
      }
      var a = t.sibling;
      if (a !== null) {
        a.return = t.return, M = a;
        break;
      }
      M = t.return;
    }
  }
  var _x = Math.ceil, ws = qt.ReactCurrentDispatcher, Tc = qt.ReactCurrentOwner, dt = qt.ReactCurrentBatchConfig, H = 0, Se = null, me = null, Ce = 0, Xe = 0, Ar = Fn(0), ge = 0, Qi = null, er = 0, Ys = 0, Ec = 0, Ci = null, ze = null, Cc = 0, Gr = 1 / 0, Nt = null, Ts = !1, fu = null, vn = null, Do = !1, fn = null, Es = 0, Pi = 0, du = null, Yo = -1, Xo = 0;
  function Ne() {
    return H & 6 ? de() : Yo !== -1 ? Yo : Yo = de();
  }
  function xn(e) {
    return e.mode & 1 ? H & 2 && Ce !== 0 ? Ce & -Ce : cx.transition !== null ? (Xo === 0 && (Xo = fm()), Xo) : (e = X, e !== 0 || (e = window.event, e = e === void 0 ? 16 : vm(e.type)), e) : 1;
  }
  function Tt(e, t, n, r) {
    if (50 < Pi)
      throw Pi = 0, du = null, Error(A(185));
    no(e, n, r), (!(H & 2) || e !== Se) && (e === Se && (!(H & 2) && (Ys |= n), ge === 4 && un(e, Ce)), Ge(e, r), n === 1 && H === 0 && !(t.mode & 1) && (Gr = de() + 500, Ws && jn()));
  }
  function Ge(e, t) {
    var n = e.callbackNode;
    c1(e, t);
    var r = ss(e, e === Se ? Ce : 0);
    if (r === 0)
      n !== null && bf(n), e.callbackNode = null, e.callbackPriority = 0;
    else if (t = r & -r, e.callbackPriority !== t) {
      if (n != null && bf(n), t === 1)
        e.tag === 0 ? ux(Fd.bind(null, e)) : Nm(Fd.bind(null, e)), ox(function() {
          !(H & 6) && jn();
        }), n = null;
      else {
        switch (dm(r)) {
          case 1:
            n = Xu;
            break;
          case 4:
            n = um;
            break;
          case 16:
            n = os;
            break;
          case 536870912:
            n = cm;
            break;
          default:
            n = os;
        }
        n = Vy(n, Oy.bind(null, e));
      }
      e.callbackPriority = t, e.callbackNode = n;
    }
  }
  function Oy(e, t) {
    if (Yo = -1, Xo = 0, H & 6)
      throw Error(A(327));
    var n = e.callbackNode;
    if ($r() && e.callbackNode !== n)
      return null;
    var r = ss(e, e === Se ? Ce : 0);
    if (r === 0)
      return null;
    if (r & 30 || r & e.expiredLanes || t)
      t = Cs(e, r);
    else {
      t = r;
      var i = H;
      H |= 2;
      var o = jy();
      (Se !== e || Ce !== t) && (Nt = null, Gr = de() + 500, Kn(e, t));
      do
        try {
          Fx();
          break;
        } catch (a) {
          Fy(e, a);
        }
      while (!0);
      uc(), ws.current = o, H = i, me !== null ? t = 0 : (Se = null, Ce = 0, t = ge);
    }
    if (t !== 0) {
      if (t === 2 && (i = $l(e), i !== 0 && (r = i, t = hu(e, i))), t === 1)
        throw n = Qi, Kn(e, 0), un(e, r), Ge(e, de()), n;
      if (t === 6)
        un(e, r);
      else {
        if (i = e.current.alternate, !(r & 30) && !Ax(i) && (t = Cs(e, r), t === 2 && (o = $l(e), o !== 0 && (r = o, t = hu(e, o))), t === 1))
          throw n = Qi, Kn(e, 0), un(e, r), Ge(e, de()), n;
        switch (e.finishedWork = i, e.finishedLanes = r, t) {
          case 0:
          case 1:
            throw Error(A(345));
          case 2:
            bn(e, ze, Nt);
            break;
          case 3:
            if (un(e, r), (r & 130023424) === r && (t = Cc + 500 - de(), 10 < t)) {
              if (ss(e, 0) !== 0)
                break;
              if (i = e.suspendedLanes, (i & r) !== r) {
                Ne(), e.pingedLanes |= e.suspendedLanes & i;
                break;
              }
              e.timeoutHandle = Kl(bn.bind(null, e, ze, Nt), t);
              break;
            }
            bn(e, ze, Nt);
            break;
          case 4:
            if (un(e, r), (r & 4194240) === r)
              break;
            for (t = e.eventTimes, i = -1; 0 < r; ) {
              var s = 31 - wt(r);
              o = 1 << s, s = t[s], s > i && (i = s), r &= ~o;
            }
            if (r = i, r = de() - r, r = (120 > r ? 120 : 480 > r ? 480 : 1080 > r ? 1080 : 1920 > r ? 1920 : 3e3 > r ? 3e3 : 4320 > r ? 4320 : 1960 * _x(r / 1960)) - r, 10 < r) {
              e.timeoutHandle = Kl(bn.bind(null, e, ze, Nt), r);
              break;
            }
            bn(e, ze, Nt);
            break;
          case 5:
            bn(e, ze, Nt);
            break;
          default:
            throw Error(A(329));
        }
      }
    }
    return Ge(e, de()), e.callbackNode === n ? Oy.bind(null, e) : null;
  }
  function hu(e, t) {
    var n = Ci;
    return e.current.memoizedState.isDehydrated && (Kn(e, t).flags |= 256), e = Cs(e, t), e !== 2 && (t = ze, ze = n, t !== null && pu(t)), e;
  }
  function pu(e) {
    ze === null ? ze = e : ze.push.apply(ze, e);
  }
  function Ax(e) {
    for (var t = e; ; ) {
      if (t.flags & 16384) {
        var n = t.updateQueue;
        if (n !== null && (n = n.stores, n !== null))
          for (var r = 0; r < n.length; r++) {
            var i = n[r], o = i.getSnapshot;
            i = i.value;
            try {
              if (!Et(o(), i))
                return !1;
            } catch {
              return !1;
            }
          }
      }
      if (n = t.child, t.subtreeFlags & 16384 && n !== null)
        n.return = t, t = n;
      else {
        if (t === e)
          break;
        for (; t.sibling === null; ) {
          if (t.return === null || t.return === e)
            return !0;
          t = t.return;
        }
        t.sibling.return = t.return, t = t.sibling;
      }
    }
    return !0;
  }
  function un(e, t) {
    for (t &= ~Ec, t &= ~Ys, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes; 0 < t; ) {
      var n = 31 - wt(t), r = 1 << n;
      e[n] = -1, t &= ~r;
    }
  }
  function Fd(e) {
    if (H & 6)
      throw Error(A(327));
    $r();
    var t = ss(e, 0);
    if (!(t & 1))
      return Ge(e, de()), null;
    var n = Cs(e, t);
    if (e.tag !== 0 && n === 2) {
      var r = $l(e);
      r !== 0 && (t = r, n = hu(e, r));
    }
    if (n === 1)
      throw n = Qi, Kn(e, 0), un(e, t), Ge(e, de()), n;
    if (n === 6)
      throw Error(A(345));
    return e.finishedWork = e.current.alternate, e.finishedLanes = t, bn(e, ze, Nt), Ge(e, de()), null;
  }
  function Pc(e, t) {
    var n = H;
    H |= 1;
    try {
      return e(t);
    } finally {
      H = n, H === 0 && (Gr = de() + 500, Ws && jn());
    }
  }
  function tr(e) {
    fn !== null && fn.tag === 0 && !(H & 6) && $r();
    var t = H;
    H |= 1;
    var n = dt.transition, r = X;
    try {
      if (dt.transition = null, X = 1, e)
        return e();
    } finally {
      X = r, dt.transition = n, H = t, !(H & 6) && jn();
    }
  }
  function kc() {
    Xe = Ar.current, ie(Ar);
  }
  function Kn(e, t) {
    e.finishedWork = null, e.finishedLanes = 0;
    var n = e.timeoutHandle;
    if (n !== -1 && (e.timeoutHandle = -1, ix(n)), me !== null)
      for (n = me.return; n !== null; ) {
        var r = n;
        switch (sc(r), r.tag) {
          case 1:
            r = r.type.childContextTypes, r != null && fs();
            break;
          case 3:
            Hr(), ie(He), ie(De), mc();
            break;
          case 5:
            pc(r);
            break;
          case 4:
            Hr();
            break;
          case 13:
            ie(ae);
            break;
          case 19:
            ie(ae);
            break;
          case 10:
            cc(r.type._context);
            break;
          case 22:
          case 23:
            kc();
        }
        n = n.return;
      }
    if (Se = e, me = e = Sn(e.current, null), Ce = Xe = t, ge = 0, Qi = null, Ec = Ys = er = 0, ze = Ci = null, Hn !== null) {
      for (t = 0; t < Hn.length; t++)
        if (n = Hn[t], r = n.interleaved, r !== null) {
          n.interleaved = null;
          var i = r.next, o = n.pending;
          if (o !== null) {
            var s = o.next;
            o.next = i, r.next = s;
          }
          n.pending = r;
        }
      Hn = null;
    }
    return e;
  }
  function Fy(e, t) {
    do {
      var n = me;
      try {
        if (uc(), Go.current = Ss, xs) {
          for (var r = ue.memoizedState; r !== null; ) {
            var i = r.queue;
            i !== null && (i.pending = null), r = r.next;
          }
          xs = !1;
        }
        if (Jn = 0, xe = ye = ue = null, Ti = !1, Wi = 0, Tc.current = null, n === null || n.return === null) {
          ge = 1, Qi = t, me = null;
          break;
        }
        e: {
          var o = e, s = n.return, a = n, l = t;
          if (t = Ce, a.flags |= 32768, l !== null && typeof l == "object" && typeof l.then == "function") {
            var u = l, f = a, c = f.tag;
            if (!(f.mode & 1) && (c === 0 || c === 11 || c === 15)) {
              var d = f.alternate;
              d ? (f.updateQueue = d.updateQueue, f.memoizedState = d.memoizedState, f.lanes = d.lanes) : (f.updateQueue = null, f.memoizedState = null);
            }
            var p = gd(s);
            if (p !== null) {
              p.flags &= -257, vd(p, s, a, o, t), p.mode & 1 && yd(o, u, t), t = p, l = u;
              var g = t.updateQueue;
              if (g === null) {
                var v = /* @__PURE__ */ new Set();
                v.add(l), t.updateQueue = v;
              } else
                g.add(l);
              break e;
            } else {
              if (!(t & 1)) {
                yd(o, u, t), _c();
                break e;
              }
              l = Error(A(426));
            }
          } else if (se && a.mode & 1) {
            var T = gd(s);
            if (T !== null) {
              !(T.flags & 65536) && (T.flags |= 256), vd(T, s, a, o, t), ac(Wr(l, a));
              break e;
            }
          }
          o = l = Wr(l, a), ge !== 4 && (ge = 2), Ci === null ? Ci = [o] : Ci.push(o), o = s;
          do {
            switch (o.tag) {
              case 3:
                o.flags |= 65536, t &= -t, o.lanes |= t;
                var y = hy(o, l, t);
                ud(o, y);
                break e;
              case 1:
                a = l;
                var h = o.type, m = o.stateNode;
                if (!(o.flags & 128) && (typeof h.getDerivedStateFromError == "function" || m !== null && typeof m.componentDidCatch == "function" && (vn === null || !vn.has(m)))) {
                  o.flags |= 65536, t &= -t, o.lanes |= t;
                  var x = py(o, a, t);
                  ud(o, x);
                  break e;
                }
            }
            o = o.return;
          } while (o !== null);
        }
        My(n);
      } catch (k) {
        t = k, me === n && n !== null && (me = n = n.return);
        continue;
      }
      break;
    } while (!0);
  }
  function jy() {
    var e = ws.current;
    return ws.current = Ss, e === null ? Ss : e;
  }
  function _c() {
    (ge === 0 || ge === 3 || ge === 2) && (ge = 4), Se === null || !(er & 268435455) && !(Ys & 268435455) || un(Se, Ce);
  }
  function Cs(e, t) {
    var n = H;
    H |= 2;
    var r = jy();
    (Se !== e || Ce !== t) && (Nt = null, Kn(e, t));
    do
      try {
        Ox();
        break;
      } catch (i) {
        Fy(e, i);
      }
    while (!0);
    if (uc(), H = n, ws.current = r, me !== null)
      throw Error(A(261));
    return Se = null, Ce = 0, ge;
  }
  function Ox() {
    for (; me !== null; )
      Dy(me);
  }
  function Fx() {
    for (; me !== null && !t1(); )
      Dy(me);
  }
  function Dy(e) {
    var t = Ly(e.alternate, e, Xe);
    e.memoizedProps = e.pendingProps, t === null ? My(e) : me = t, Tc.current = null;
  }
  function My(e) {
    var t = e;
    do {
      var n = t.alternate;
      if (e = t.return, t.flags & 32768) {
        if (n = Ex(n, t), n !== null) {
          n.flags &= 32767, me = n;
          return;
        }
        if (e !== null)
          e.flags |= 32768, e.subtreeFlags = 0, e.deletions = null;
        else {
          ge = 6, me = null;
          return;
        }
      } else if (n = Tx(n, t, Xe), n !== null) {
        me = n;
        return;
      }
      if (t = t.sibling, t !== null) {
        me = t;
        return;
      }
      me = t = e;
    } while (t !== null);
    ge === 0 && (ge = 5);
  }
  function bn(e, t, n) {
    var r = X, i = dt.transition;
    try {
      dt.transition = null, X = 1, jx(e, t, n, r);
    } finally {
      dt.transition = i, X = r;
    }
    return null;
  }
  function jx(e, t, n, r) {
    do
      $r();
    while (fn !== null);
    if (H & 6)
      throw Error(A(327));
    n = e.finishedWork;
    var i = e.finishedLanes;
    if (n === null)
      return null;
    if (e.finishedWork = null, e.finishedLanes = 0, n === e.current)
      throw Error(A(177));
    e.callbackNode = null, e.callbackPriority = 0;
    var o = n.lanes | n.childLanes;
    if (f1(e, o), e === Se && (me = Se = null, Ce = 0), !(n.subtreeFlags & 2064) && !(n.flags & 2064) || Do || (Do = !0, Vy(os, function() {
      return $r(), null;
    })), o = (n.flags & 15990) !== 0, n.subtreeFlags & 15990 || o) {
      o = dt.transition, dt.transition = null;
      var s = X;
      X = 1;
      var a = H;
      H |= 4, Tc.current = null, Px(e, n), _y(n, e), Z1(Wl), as = !!Hl, Wl = Hl = null, e.current = n, kx(n), n1(), H = a, X = s, dt.transition = o;
    } else
      e.current = n;
    if (Do && (Do = !1, fn = e, Es = i), o = e.pendingLanes, o === 0 && (vn = null), o1(n.stateNode), Ge(e, de()), t !== null)
      for (r = e.onRecoverableError, n = 0; n < t.length; n++)
        i = t[n], r(i.value, { componentStack: i.stack, digest: i.digest });
    if (Ts)
      throw Ts = !1, e = fu, fu = null, e;
    return Es & 1 && e.tag !== 0 && $r(), o = e.pendingLanes, o & 1 ? e === du ? Pi++ : (Pi = 0, du = e) : Pi = 0, jn(), null;
  }
  function $r() {
    if (fn !== null) {
      var e = dm(Es), t = dt.transition, n = X;
      try {
        if (dt.transition = null, X = 16 > e ? 16 : e, fn === null)
          var r = !1;
        else {
          if (e = fn, fn = null, Es = 0, H & 6)
            throw Error(A(331));
          var i = H;
          for (H |= 4, M = e.current; M !== null; ) {
            var o = M, s = o.child;
            if (M.flags & 16) {
              var a = o.deletions;
              if (a !== null) {
                for (var l = 0; l < a.length; l++) {
                  var u = a[l];
                  for (M = u; M !== null; ) {
                    var f = M;
                    switch (f.tag) {
                      case 0:
                      case 11:
                      case 15:
                        Ei(8, f, o);
                    }
                    var c = f.child;
                    if (c !== null)
                      c.return = f, M = c;
                    else
                      for (; M !== null; ) {
                        f = M;
                        var d = f.sibling, p = f.return;
                        if (Cy(f), f === u) {
                          M = null;
                          break;
                        }
                        if (d !== null) {
                          d.return = p, M = d;
                          break;
                        }
                        M = p;
                      }
                  }
                }
                var g = o.alternate;
                if (g !== null) {
                  var v = g.child;
                  if (v !== null) {
                    g.child = null;
                    do {
                      var T = v.sibling;
                      v.sibling = null, v = T;
                    } while (v !== null);
                  }
                }
                M = o;
              }
            }
            if (o.subtreeFlags & 2064 && s !== null)
              s.return = o, M = s;
            else
              e:
                for (; M !== null; ) {
                  if (o = M, o.flags & 2048)
                    switch (o.tag) {
                      case 0:
                      case 11:
                      case 15:
                        Ei(9, o, o.return);
                    }
                  var y = o.sibling;
                  if (y !== null) {
                    y.return = o.return, M = y;
                    break e;
                  }
                  M = o.return;
                }
          }
          var h = e.current;
          for (M = h; M !== null; ) {
            s = M;
            var m = s.child;
            if (s.subtreeFlags & 2064 && m !== null)
              m.return = s, M = m;
            else
              e:
                for (s = h; M !== null; ) {
                  if (a = M, a.flags & 2048)
                    try {
                      switch (a.tag) {
                        case 0:
                        case 11:
                        case 15:
                          Qs(9, a);
                      }
                    } catch (k) {
                      fe(a, a.return, k);
                    }
                  if (a === s) {
                    M = null;
                    break e;
                  }
                  var x = a.sibling;
                  if (x !== null) {
                    x.return = a.return, M = x;
                    break e;
                  }
                  M = a.return;
                }
          }
          if (H = i, jn(), Ot && typeof Ot.onPostCommitFiberRoot == "function")
            try {
              Ot.onPostCommitFiberRoot(Is, e);
            } catch {
            }
          r = !0;
        }
        return r;
      } finally {
        X = n, dt.transition = t;
      }
    }
    return !1;
  }
  function jd(e, t, n) {
    t = Wr(n, t), t = hy(e, t, 1), e = gn(e, t, 1), t = Ne(), e !== null && (no(e, 1, t), Ge(e, t));
  }
  function fe(e, t, n) {
    if (e.tag === 3)
      jd(e, e, n);
    else
      for (; t !== null; ) {
        if (t.tag === 3) {
          jd(t, e, n);
          break;
        } else if (t.tag === 1) {
          var r = t.stateNode;
          if (typeof t.type.getDerivedStateFromError == "function" || typeof r.componentDidCatch == "function" && (vn === null || !vn.has(r))) {
            e = Wr(n, e), e = py(t, e, 1), t = gn(t, e, 1), e = Ne(), t !== null && (no(t, 1, e), Ge(t, e));
            break;
          }
        }
        t = t.return;
      }
  }
  function Dx(e, t, n) {
    var r = e.pingCache;
    r !== null && r.delete(t), t = Ne(), e.pingedLanes |= e.suspendedLanes & n, Se === e && (Ce & n) === n && (ge === 4 || ge === 3 && (Ce & 130023424) === Ce && 500 > de() - Cc ? Kn(e, 0) : Ec |= n), Ge(e, t);
  }
  function Ry(e, t) {
    t === 0 && (e.mode & 1 ? (t = To, To <<= 1, !(To & 130023424) && (To = 4194304)) : t = 1);
    var n = Ne();
    e = Yt(e, t), e !== null && (no(e, t, n), Ge(e, n));
  }
  function Mx(e) {
    var t = e.memoizedState, n = 0;
    t !== null && (n = t.retryLane), Ry(e, n);
  }
  function Rx(e, t) {
    var n = 0;
    switch (e.tag) {
      case 13:
        var r = e.stateNode, i = e.memoizedState;
        i !== null && (n = i.retryLane);
        break;
      case 19:
        r = e.stateNode;
        break;
      default:
        throw Error(A(314));
    }
    r !== null && r.delete(t), Ry(e, n);
  }
  var Ly;
  Ly = function(e, t, n) {
    if (e !== null)
      if (e.memoizedProps !== t.pendingProps || He.current)
        Ue = !0;
      else {
        if (!(e.lanes & n) && !(t.flags & 128))
          return Ue = !1, wx(e, t, n);
        Ue = !!(e.flags & 131072);
      }
    else
      Ue = !1, se && t.flags & 1048576 && bm(t, ps, t.index);
    switch (t.lanes = 0, t.tag) {
      case 2:
        var r = t.type;
        Qo(e, t), e = t.pendingProps;
        var i = zr(t, De.current);
        br(t, n), i = gc(null, t, r, e, i, n);
        var o = vc();
        return t.flags |= 1, typeof i == "object" && i !== null && typeof i.render == "function" && i.$$typeof === void 0 ? (t.tag = 1, t.memoizedState = null, t.updateQueue = null, We(r) ? (o = !0, ds(t)) : o = !1, t.memoizedState = i.state !== null && i.state !== void 0 ? i.state : null, dc(t), i.updater = Gs, t.stateNode = i, i._reactInternals = t, eu(t, r, e, n), t = ru(null, t, r, !0, o, n)) : (t.tag = 0, se && o && oc(t), Ve(null, t, i, n), t = t.child), t;
      case 16:
        r = t.elementType;
        e: {
          switch (Qo(e, t), e = t.pendingProps, i = r._init, r = i(r._payload), t.type = r, i = t.tag = Vx(r), e = vt(r, e), i) {
            case 0:
              t = nu(null, t, r, e, n);
              break e;
            case 1:
              t = wd(null, t, r, e, n);
              break e;
            case 11:
              t = xd(null, t, r, e, n);
              break e;
            case 14:
              t = Sd(null, t, r, vt(r.type, e), n);
              break e;
          }
          throw Error(A(
            306,
            r,
            ""
          ));
        }
        return t;
      case 0:
        return r = t.type, i = t.pendingProps, i = t.elementType === r ? i : vt(r, i), nu(e, t, r, i, n);
      case 1:
        return r = t.type, i = t.pendingProps, i = t.elementType === r ? i : vt(r, i), wd(e, t, r, i, n);
      case 3:
        e: {
          if (vy(t), e === null)
            throw Error(A(387));
          r = t.pendingProps, o = t.memoizedState, i = o.element, Bm(e, t), gs(t, r, null, n);
          var s = t.memoizedState;
          if (r = s.element, o.isDehydrated)
            if (o = { element: r, isDehydrated: !1, cache: s.cache, pendingSuspenseBoundaries: s.pendingSuspenseBoundaries, transitions: s.transitions }, t.updateQueue.baseState = o, t.memoizedState = o, t.flags & 256) {
              i = Wr(Error(A(423)), t), t = Td(e, t, r, n, i);
              break e;
            } else if (r !== i) {
              i = Wr(Error(A(424)), t), t = Td(e, t, r, n, i);
              break e;
            } else
              for (Ze = yn(t.stateNode.containerInfo.firstChild), et = t, se = !0, St = null, n = Gm(t, null, r, n), t.child = n; n; )
                n.flags = n.flags & -3 | 4096, n = n.sibling;
          else {
            if (Br(), r === i) {
              t = Xt(e, t, n);
              break e;
            }
            Ve(e, t, r, n);
          }
          t = t.child;
        }
        return t;
      case 5:
        return Km(t), e === null && Zl(t), r = t.type, i = t.pendingProps, o = e !== null ? e.memoizedProps : null, s = i.children, Gl(r, i) ? s = null : o !== null && Gl(r, o) && (t.flags |= 32), gy(e, t), Ve(e, t, s, n), t.child;
      case 6:
        return e === null && Zl(t), null;
      case 13:
        return xy(e, t, n);
      case 4:
        return hc(t, t.stateNode.containerInfo), r = t.pendingProps, e === null ? t.child = Ur(t, null, r, n) : Ve(e, t, r, n), t.child;
      case 11:
        return r = t.type, i = t.pendingProps, i = t.elementType === r ? i : vt(r, i), xd(e, t, r, i, n);
      case 7:
        return Ve(e, t, t.pendingProps, n), t.child;
      case 8:
        return Ve(e, t, t.pendingProps.children, n), t.child;
      case 12:
        return Ve(e, t, t.pendingProps.children, n), t.child;
      case 10:
        e: {
          if (r = t.type._context, i = t.pendingProps, o = t.memoizedProps, s = i.value, ee(ms, r._currentValue), r._currentValue = s, o !== null)
            if (Et(o.value, s)) {
              if (o.children === i.children && !He.current) {
                t = Xt(e, t, n);
                break e;
              }
            } else
              for (o = t.child, o !== null && (o.return = t); o !== null; ) {
                var a = o.dependencies;
                if (a !== null) {
                  s = o.child;
                  for (var l = a.firstContext; l !== null; ) {
                    if (l.context === r) {
                      if (o.tag === 1) {
                        l = Ht(-1, n & -n), l.tag = 2;
                        var u = o.updateQueue;
                        if (u !== null) {
                          u = u.shared;
                          var f = u.pending;
                          f === null ? l.next = l : (l.next = f.next, f.next = l), u.pending = l;
                        }
                      }
                      o.lanes |= n, l = o.alternate, l !== null && (l.lanes |= n), ql(
                        o.return,
                        n,
                        t
                      ), a.lanes |= n;
                      break;
                    }
                    l = l.next;
                  }
                } else if (o.tag === 10)
                  s = o.type === t.type ? null : o.child;
                else if (o.tag === 18) {
                  if (s = o.return, s === null)
                    throw Error(A(341));
                  s.lanes |= n, a = s.alternate, a !== null && (a.lanes |= n), ql(s, n, t), s = o.sibling;
                } else
                  s = o.child;
                if (s !== null)
                  s.return = o;
                else
                  for (s = o; s !== null; ) {
                    if (s === t) {
                      s = null;
                      break;
                    }
                    if (o = s.sibling, o !== null) {
                      o.return = s.return, s = o;
                      break;
                    }
                    s = s.return;
                  }
                o = s;
              }
          Ve(e, t, i.children, n), t = t.child;
        }
        return t;
      case 9:
        return i = t.type, r = t.pendingProps.children, br(t, n), i = ht(i), r = r(i), t.flags |= 1, Ve(e, t, r, n), t.child;
      case 14:
        return r = t.type, i = vt(r, t.pendingProps), i = vt(r.type, i), Sd(e, t, r, i, n);
      case 15:
        return my(e, t, t.type, t.pendingProps, n);
      case 17:
        return r = t.type, i = t.pendingProps, i = t.elementType === r ? i : vt(r, i), Qo(e, t), t.tag = 1, We(r) ? (e = !0, ds(t)) : e = !1, br(t, n), Hm(t, r, i), eu(t, r, i, n), ru(null, t, r, !0, e, n);
      case 19:
        return Sy(e, t, n);
      case 22:
        return yy(e, t, n);
    }
    throw Error(A(156, t.tag));
  };
  function Vy(e, t) {
    return lm(e, t);
  }
  function Lx(e, t, n, r) {
    this.tag = e, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = r, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function ft(e, t, n, r) {
    return new Lx(e, t, n, r);
  }
  function Ac(e) {
    return e = e.prototype, !(!e || !e.isReactComponent);
  }
  function Vx(e) {
    if (typeof e == "function")
      return Ac(e) ? 1 : 0;
    if (e != null) {
      if (e = e.$$typeof, e === Ku)
        return 11;
      if (e === Qu)
        return 14;
    }
    return 2;
  }
  function Sn(e, t) {
    var n = e.alternate;
    return n === null ? (n = ft(e.tag, t, e.key, e.mode), n.elementType = e.elementType, n.type = e.type, n.stateNode = e.stateNode, n.alternate = e, e.alternate = n) : (n.pendingProps = t, n.type = e.type, n.flags = 0, n.subtreeFlags = 0, n.deletions = null), n.flags = e.flags & 14680064, n.childLanes = e.childLanes, n.lanes = e.lanes, n.child = e.child, n.memoizedProps = e.memoizedProps, n.memoizedState = e.memoizedState, n.updateQueue = e.updateQueue, t = e.dependencies, n.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }, n.sibling = e.sibling, n.index = e.index, n.ref = e.ref, n;
  }
  function Zo(e, t, n, r, i, o) {
    var s = 2;
    if (r = e, typeof e == "function")
      Ac(e) && (s = 1);
    else if (typeof e == "string")
      s = 5;
    else
      e:
        switch (e) {
          case vr:
            return Qn(n.children, i, o, t);
          case Gu:
            s = 8, i |= 8;
            break;
          case Cl:
            return e = ft(12, n, t, i | 2), e.elementType = Cl, e.lanes = o, e;
          case Pl:
            return e = ft(13, n, t, i), e.elementType = Pl, e.lanes = o, e;
          case kl:
            return e = ft(19, n, t, i), e.elementType = kl, e.lanes = o, e;
          case Wp:
            return Xs(n, i, o, t);
          default:
            if (typeof e == "object" && e !== null)
              switch (e.$$typeof) {
                case Up:
                  s = 10;
                  break e;
                case Hp:
                  s = 9;
                  break e;
                case Ku:
                  s = 11;
                  break e;
                case Qu:
                  s = 14;
                  break e;
                case rn:
                  s = 16, r = null;
                  break e;
              }
            throw Error(A(130, e == null ? e : typeof e, ""));
        }
    return t = ft(s, n, t, i), t.elementType = e, t.type = r, t.lanes = o, t;
  }
  function Qn(e, t, n, r) {
    return e = ft(7, e, r, t), e.lanes = n, e;
  }
  function Xs(e, t, n, r) {
    return e = ft(22, e, r, t), e.elementType = Wp, e.lanes = n, e.stateNode = { isHidden: !1 }, e;
  }
  function el(e, t, n) {
    return e = ft(6, e, null, t), e.lanes = n, e;
  }
  function tl(e, t, n) {
    return t = ft(4, e.children !== null ? e.children : [], e.key, t), t.lanes = n, t.stateNode = { containerInfo: e.containerInfo, pendingChildren: null, implementation: e.implementation }, t;
  }
  function Nx(e, t, n, r, i) {
    this.tag = t, this.containerInfo = e, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = La(0), this.expirationTimes = La(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = La(0), this.identifierPrefix = r, this.onRecoverableError = i, this.mutableSourceEagerHydrationData = null;
  }
  function Oc(e, t, n, r, i, o, s, a, l) {
    return e = new Nx(e, t, n, a, l), t === 1 ? (t = 1, o === !0 && (t |= 8)) : t = 0, o = ft(3, null, null, t), e.current = o, o.stateNode = e, o.memoizedState = { element: r, isDehydrated: n, cache: null, transitions: null, pendingSuspenseBoundaries: null }, dc(o), e;
  }
  function bx(e, t, n) {
    var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return { $$typeof: gr, key: r == null ? null : "" + r, children: e, containerInfo: t, implementation: n };
  }
  function Ny(e) {
    if (!e)
      return Pn;
    e = e._reactInternals;
    e: {
      if (or(e) !== e || e.tag !== 1)
        throw Error(A(170));
      var t = e;
      do {
        switch (t.tag) {
          case 3:
            t = t.stateNode.context;
            break e;
          case 1:
            if (We(t.type)) {
              t = t.stateNode.__reactInternalMemoizedMergedChildContext;
              break e;
            }
        }
        t = t.return;
      } while (t !== null);
      throw Error(A(171));
    }
    if (e.tag === 1) {
      var n = e.type;
      if (We(n))
        return Vm(e, n, t);
    }
    return t;
  }
  function by(e, t, n, r, i, o, s, a, l) {
    return e = Oc(n, r, !0, e, i, o, s, a, l), e.context = Ny(null), n = e.current, r = Ne(), i = xn(n), o = Ht(r, i), o.callback = t ?? null, gn(n, o, i), e.current.lanes = i, no(e, i, r), Ge(e, r), e;
  }
  function Zs(e, t, n, r) {
    var i = t.current, o = Ne(), s = xn(i);
    return n = Ny(n), t.context === null ? t.context = n : t.pendingContext = n, t = Ht(o, s), t.payload = { element: e }, r = r === void 0 ? null : r, r !== null && (t.callback = r), e = gn(i, t, s), e !== null && (Tt(e, i, s, o), Wo(e, i, s)), s;
  }
  function Ps(e) {
    if (e = e.current, !e.child)
      return null;
    switch (e.child.tag) {
      case 5:
        return e.child.stateNode;
      default:
        return e.child.stateNode;
    }
  }
  function Dd(e, t) {
    if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
      var n = e.retryLane;
      e.retryLane = n !== 0 && n < t ? n : t;
    }
  }
  function Fc(e, t) {
    Dd(e, t), (e = e.alternate) && Dd(e, t);
  }
  function $x() {
    return null;
  }
  var $y = typeof reportError == "function" ? reportError : function(e) {
    console.error(e);
  };
  function jc(e) {
    this._internalRoot = e;
  }
  qs.prototype.render = jc.prototype.render = function(e) {
    var t = this._internalRoot;
    if (t === null)
      throw Error(A(409));
    Zs(e, t, null, null);
  };
  qs.prototype.unmount = jc.prototype.unmount = function() {
    var e = this._internalRoot;
    if (e !== null) {
      this._internalRoot = null;
      var t = e.containerInfo;
      tr(function() {
        Zs(null, e, null, null);
      }), t[Qt] = null;
    }
  };
  function qs(e) {
    this._internalRoot = e;
  }
  qs.prototype.unstable_scheduleHydration = function(e) {
    if (e) {
      var t = mm();
      e = { blockedOn: null, target: e, priority: t };
      for (var n = 0; n < ln.length && t !== 0 && t < ln[n].priority; n++)
        ;
      ln.splice(n, 0, e), n === 0 && gm(e);
    }
  };
  function Dc(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11);
  }
  function Js(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "));
  }
  function Md() {
  }
  function Ix(e, t, n, r, i) {
    if (i) {
      if (typeof r == "function") {
        var o = r;
        r = function() {
          var u = Ps(s);
          o.call(u);
        };
      }
      var s = by(t, r, e, 0, null, !1, !1, "", Md);
      return e._reactRootContainer = s, e[Qt] = s.current, Ii(e.nodeType === 8 ? e.parentNode : e), tr(), s;
    }
    for (; i = e.lastChild; )
      e.removeChild(i);
    if (typeof r == "function") {
      var a = r;
      r = function() {
        var u = Ps(l);
        a.call(u);
      };
    }
    var l = Oc(e, 0, !1, null, null, !1, !1, "", Md);
    return e._reactRootContainer = l, e[Qt] = l.current, Ii(e.nodeType === 8 ? e.parentNode : e), tr(function() {
      Zs(t, l, n, r);
    }), l;
  }
  function ea(e, t, n, r, i) {
    var o = n._reactRootContainer;
    if (o) {
      var s = o;
      if (typeof i == "function") {
        var a = i;
        i = function() {
          var l = Ps(s);
          a.call(l);
        };
      }
      Zs(t, s, e, i);
    } else
      s = Ix(n, t, e, i, r);
    return Ps(s);
  }
  hm = function(e) {
    switch (e.tag) {
      case 3:
        var t = e.stateNode;
        if (t.current.memoizedState.isDehydrated) {
          var n = pi(t.pendingLanes);
          n !== 0 && (Zu(t, n | 1), Ge(t, de()), !(H & 6) && (Gr = de() + 500, jn()));
        }
        break;
      case 13:
        tr(function() {
          var r = Yt(e, 1);
          if (r !== null) {
            var i = Ne();
            Tt(r, e, 1, i);
          }
        }), Fc(e, 1);
    }
  };
  qu = function(e) {
    if (e.tag === 13) {
      var t = Yt(e, 134217728);
      if (t !== null) {
        var n = Ne();
        Tt(t, e, 134217728, n);
      }
      Fc(e, 134217728);
    }
  };
  pm = function(e) {
    if (e.tag === 13) {
      var t = xn(e), n = Yt(e, t);
      if (n !== null) {
        var r = Ne();
        Tt(n, e, t, r);
      }
      Fc(e, t);
    }
  };
  mm = function() {
    return X;
  };
  ym = function(e, t) {
    var n = X;
    try {
      return X = e, t();
    } finally {
      X = n;
    }
  };
  Vl = function(e, t, n) {
    switch (t) {
      case "input":
        if (Ol(e, n), t = n.name, n.type === "radio" && t != null) {
          for (n = e; n.parentNode; )
            n = n.parentNode;
          for (n = n.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'), t = 0; t < n.length; t++) {
            var r = n[t];
            if (r !== e && r.form === e.form) {
              var i = Hs(r);
              if (!i)
                throw Error(A(90));
              Kp(r), Ol(r, i);
            }
          }
        }
        break;
      case "textarea":
        Yp(e, n);
        break;
      case "select":
        t = n.value, t != null && Rr(e, !!n.multiple, t, !1);
    }
  };
  nm = Pc;
  rm = tr;
  var zx = { usingClientEntryPoint: !1, Events: [io, Tr, Hs, em, tm, Pc] }, li = { findFiberByHostInstance: Un, bundleType: 0, version: "18.2.0", rendererPackageName: "react-dom" }, Bx = { bundleType: li.bundleType, version: li.version, rendererPackageName: li.rendererPackageName, rendererConfig: li.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: qt.ReactCurrentDispatcher, findHostInstanceByFiber: function(e) {
    return e = sm(e), e === null ? null : e.stateNode;
  }, findFiberByHostInstance: li.findFiberByHostInstance || $x, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.2.0-next-9e3b772b8-20220608" };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var Mo = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Mo.isDisabled && Mo.supportsFiber)
      try {
        Is = Mo.inject(Bx), Ot = Mo;
      } catch {
      }
  }
  rt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = zx;
  rt.createPortal = function(e, t) {
    var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!Dc(t))
      throw Error(A(200));
    return bx(e, t, null, n);
  };
  rt.createRoot = function(e, t) {
    if (!Dc(e))
      throw Error(A(299));
    var n = !1, r = "", i = $y;
    return t != null && (t.unstable_strictMode === !0 && (n = !0), t.identifierPrefix !== void 0 && (r = t.identifierPrefix), t.onRecoverableError !== void 0 && (i = t.onRecoverableError)), t = Oc(e, 1, !1, null, null, n, !1, r, i), e[Qt] = t.current, Ii(e.nodeType === 8 ? e.parentNode : e), new jc(t);
  };
  rt.findDOMNode = function(e) {
    if (e == null)
      return null;
    if (e.nodeType === 1)
      return e;
    var t = e._reactInternals;
    if (t === void 0)
      throw typeof e.render == "function" ? Error(A(188)) : (e = Object.keys(e).join(","), Error(A(268, e)));
    return e = sm(t), e = e === null ? null : e.stateNode, e;
  };
  rt.flushSync = function(e) {
    return tr(e);
  };
  rt.hydrate = function(e, t, n) {
    if (!Js(t))
      throw Error(A(200));
    return ea(null, e, t, !0, n);
  };
  rt.hydrateRoot = function(e, t, n) {
    if (!Dc(e))
      throw Error(A(405));
    var r = n != null && n.hydratedSources || null, i = !1, o = "", s = $y;
    if (n != null && (n.unstable_strictMode === !0 && (i = !0), n.identifierPrefix !== void 0 && (o = n.identifierPrefix), n.onRecoverableError !== void 0 && (s = n.onRecoverableError)), t = by(t, null, e, 1, n ?? null, i, !1, o, s), e[Qt] = t.current, Ii(e), r)
      for (e = 0; e < r.length; e++)
        n = r[e], i = n._getVersion, i = i(n._source), t.mutableSourceEagerHydrationData == null ? t.mutableSourceEagerHydrationData = [n, i] : t.mutableSourceEagerHydrationData.push(
          n,
          i
        );
    return new qs(t);
  };
  rt.render = function(e, t, n) {
    if (!Js(t))
      throw Error(A(200));
    return ea(null, e, t, !1, n);
  };
  rt.unmountComponentAtNode = function(e) {
    if (!Js(e))
      throw Error(A(40));
    return e._reactRootContainer ? (tr(function() {
      ea(null, null, e, !1, function() {
        e._reactRootContainer = null, e[Qt] = null;
      });
    }), !0) : !1;
  };
  rt.unstable_batchedUpdates = Pc;
  rt.unstable_renderSubtreeIntoContainer = function(e, t, n, r) {
    if (!Js(n))
      throw Error(A(200));
    if (e == null || e._reactInternals === void 0)
      throw Error(A(38));
    return ea(e, t, n, !1, r);
  };
  rt.version = "18.2.0-next-9e3b772b8-20220608";
  function Iy() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Iy);
      } catch (e) {
        console.error(e);
      }
  }
  Iy(), bp.exports = rt;
  var Ux = bp.exports, Rd = Ux;
  Tl.createRoot = Rd.createRoot, Tl.hydrateRoot = Rd.hydrateRoot;
  function sr(e) {
    this._maxSize = e, this.clear();
  }
  sr.prototype.clear = function() {
    this._size = 0, this._values = /* @__PURE__ */ Object.create(null);
  };
  sr.prototype.get = function(e) {
    return this._values[e];
  };
  sr.prototype.set = function(e, t) {
    return this._size >= this._maxSize && this.clear(), e in this._values || this._size++, this._values[e] = t;
  };
  var Hx = /[^.^\]^[]+|(?=\[\]|\.\.)/g, zy = /^\d+$/, Wx = /^\d/, Gx = /[~`!#$%\^&*+=\-\[\]\\';,/{}|\\":<>\?]/g, Kx = /^\s*(['"]?)(.*?)(\1)\s*$/, Mc = 512, Ld = new sr(Mc), Vd = new sr(Mc), Nd = new sr(Mc), Yn = {
    Cache: sr,
    split: mu,
    normalizePath: nl,
    setter: function(e) {
      var t = nl(e);
      return Vd.get(e) || Vd.set(e, function(r, i) {
        for (var o = 0, s = t.length, a = r; o < s - 1; ) {
          var l = t[o];
          if (l === "__proto__" || l === "constructor" || l === "prototype")
            return r;
          a = a[t[o++]];
        }
        a[t[o]] = i;
      });
    },
    getter: function(e, t) {
      var n = nl(e);
      return Nd.get(e) || Nd.set(e, function(i) {
        for (var o = 0, s = n.length; o < s; )
          if (i != null || !t)
            i = i[n[o++]];
          else
            return;
        return i;
      });
    },
    join: function(e) {
      return e.reduce(function(t, n) {
        return t + (Rc(n) || zy.test(n) ? "[" + n + "]" : (t ? "." : "") + n);
      }, "");
    },
    forEach: function(e, t, n) {
      Qx(Array.isArray(e) ? e : mu(e), t, n);
    }
  };
  function nl(e) {
    return Ld.get(e) || Ld.set(
      e,
      mu(e).map(function(t) {
        return t.replace(Kx, "$2");
      })
    );
  }
  function mu(e) {
    return e.match(Hx) || [""];
  }
  function Qx(e, t, n) {
    var r = e.length, i, o, s, a;
    for (o = 0; o < r; o++)
      i = e[o], i && (Zx(i) && (i = '"' + i + '"'), a = Rc(i), s = !a && /^\d+$/.test(i), t.call(n, i, a, s, o, e));
  }
  function Rc(e) {
    return typeof e == "string" && e && ["'", '"'].indexOf(e.charAt(0)) !== -1;
  }
  function Yx(e) {
    return e.match(Wx) && !e.match(zy);
  }
  function Xx(e) {
    return Gx.test(e);
  }
  function Zx(e) {
    return !Rc(e) && (Yx(e) || Xx(e));
  }
  const qx = /[A-Z\xc0-\xd6\xd8-\xde]?[a-z\xdf-\xf6\xf8-\xff]+(?:['’](?:d|ll|m|re|s|t|ve))?(?=[\xac\xb1\xd7\xf7\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\xbf\u2000-\u206f \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000]|[A-Z\xc0-\xd6\xd8-\xde]|$)|(?:[A-Z\xc0-\xd6\xd8-\xde]|[^\ud800-\udfff\xac\xb1\xd7\xf7\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\xbf\u2000-\u206f \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\d+\u2700-\u27bfa-z\xdf-\xf6\xf8-\xffA-Z\xc0-\xd6\xd8-\xde])+(?:['’](?:D|LL|M|RE|S|T|VE))?(?=[\xac\xb1\xd7\xf7\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\xbf\u2000-\u206f \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000]|[A-Z\xc0-\xd6\xd8-\xde](?:[a-z\xdf-\xf6\xf8-\xff]|[^\ud800-\udfff\xac\xb1\xd7\xf7\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\xbf\u2000-\u206f \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\d+\u2700-\u27bfa-z\xdf-\xf6\xf8-\xffA-Z\xc0-\xd6\xd8-\xde])|$)|[A-Z\xc0-\xd6\xd8-\xde]?(?:[a-z\xdf-\xf6\xf8-\xff]|[^\ud800-\udfff\xac\xb1\xd7\xf7\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\xbf\u2000-\u206f \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\d+\u2700-\u27bfa-z\xdf-\xf6\xf8-\xffA-Z\xc0-\xd6\xd8-\xde])+(?:['’](?:d|ll|m|re|s|t|ve))?|[A-Z\xc0-\xd6\xd8-\xde]+(?:['’](?:D|LL|M|RE|S|T|VE))?|\d*(?:1ST|2ND|3RD|(?![123])\dTH)(?=\b|[a-z_])|\d*(?:1st|2nd|3rd|(?![123])\dth)(?=\b|[A-Z_])|\d+|(?:[\u2700-\u27bf]|(?:\ud83c[\udde6-\uddff]){2}|[\ud800-\udbff][\udc00-\udfff])[\ufe0e\ufe0f]?(?:[\u0300-\u036f\ufe20-\ufe2f\u20d0-\u20ff]|\ud83c[\udffb-\udfff])?(?:\u200d(?:[^\ud800-\udfff]|(?:\ud83c[\udde6-\uddff]){2}|[\ud800-\udbff][\udc00-\udfff])[\ufe0e\ufe0f]?(?:[\u0300-\u036f\ufe20-\ufe2f\u20d0-\u20ff]|\ud83c[\udffb-\udfff])?)*/g, ta = (e) => e.match(qx) || [], na = (e) => e[0].toUpperCase() + e.slice(1), Lc = (e, t) => ta(e).join(t).toLowerCase(), By = (e) => ta(e).reduce(
    (t, n) => `${t}${t ? n[0].toUpperCase() + n.slice(1).toLowerCase() : n.toLowerCase()}`,
    ""
  ), Jx = (e) => na(By(e)), eS = (e) => Lc(e, "_"), tS = (e) => Lc(e, "-"), nS = (e) => na(Lc(e, " ")), rS = (e) => ta(e).map(na).join(" ");
  var rl = {
    words: ta,
    upperFirst: na,
    camelCase: By,
    pascalCase: Jx,
    snakeCase: eS,
    kebabCase: tS,
    sentenceCase: nS,
    titleCase: rS
  }, Vc = { exports: {} };
  Vc.exports = function(e) {
    return Uy(iS(e), e);
  };
  Vc.exports.array = Uy;
  function Uy(e, t) {
    var n = e.length, r = new Array(n), i = {}, o = n, s = oS(t), a = sS(e);
    for (t.forEach(function(u) {
      if (!a.has(u[0]) || !a.has(u[1]))
        throw new Error("Unknown node. There is an unknown node in the supplied edges.");
    }); o--; )
      i[o] || l(e[o], o, /* @__PURE__ */ new Set());
    return r;
    function l(u, f, c) {
      if (c.has(u)) {
        var d;
        try {
          d = ", node was:" + JSON.stringify(u);
        } catch {
          d = "";
        }
        throw new Error("Cyclic dependency" + d);
      }
      if (!a.has(u))
        throw new Error("Found unknown node. Make sure to provided all involved nodes. Unknown node: " + JSON.stringify(u));
      if (!i[f]) {
        i[f] = !0;
        var p = s.get(u) || /* @__PURE__ */ new Set();
        if (p = Array.from(p), f = p.length) {
          c.add(u);
          do {
            var g = p[--f];
            l(g, a.get(g), c);
          } while (f);
          c.delete(u);
        }
        r[--n] = u;
      }
    }
  }
  function iS(e) {
    for (var t = /* @__PURE__ */ new Set(), n = 0, r = e.length; n < r; n++) {
      var i = e[n];
      t.add(i[0]), t.add(i[1]);
    }
    return Array.from(t);
  }
  function oS(e) {
    for (var t = /* @__PURE__ */ new Map(), n = 0, r = e.length; n < r; n++) {
      var i = e[n];
      t.has(i[0]) || t.set(i[0], /* @__PURE__ */ new Set()), t.has(i[1]) || t.set(i[1], /* @__PURE__ */ new Set()), t.get(i[0]).add(i[1]);
    }
    return t;
  }
  function sS(e) {
    for (var t = /* @__PURE__ */ new Map(), n = 0, r = e.length; n < r; n++)
      t.set(e[n], n);
    return t;
  }
  var aS = Vc.exports;
  const lS = /* @__PURE__ */ bs(aS), uS = Object.prototype.toString, cS = Error.prototype.toString, fS = RegExp.prototype.toString, dS = typeof Symbol < "u" ? Symbol.prototype.toString : () => "", hS = /^Symbol\((.*)\)(.*)$/;
  function pS(e) {
    return e != +e ? "NaN" : e === 0 && 1 / e < 0 ? "-0" : "" + e;
  }
  function bd(e, t = !1) {
    if (e == null || e === !0 || e === !1)
      return "" + e;
    const n = typeof e;
    if (n === "number")
      return pS(e);
    if (n === "string")
      return t ? `"${e}"` : e;
    if (n === "function")
      return "[Function " + (e.name || "anonymous") + "]";
    if (n === "symbol")
      return dS.call(e).replace(hS, "Symbol($1)");
    const r = uS.call(e).slice(8, -1);
    return r === "Date" ? isNaN(e.getTime()) ? "" + e : e.toISOString(e) : r === "Error" || e instanceof Error ? "[" + cS.call(e) + "]" : r === "RegExp" ? fS.call(e) : null;
  }
  function wn(e, t) {
    let n = bd(e, t);
    return n !== null ? n : JSON.stringify(e, function(r, i) {
      let o = bd(this[r], t);
      return o !== null ? o : i;
    }, 2);
  }
  function Hy(e) {
    return e == null ? [] : [].concat(e);
  }
  let Wy, Gy, Ky, mS = /\$\{\s*(\w+)\s*\}/g;
  Wy = Symbol.toStringTag;
  class $d {
    constructor(t, n, r, i) {
      this.name = void 0, this.message = void 0, this.value = void 0, this.path = void 0, this.type = void 0, this.params = void 0, this.errors = void 0, this.inner = void 0, this[Wy] = "Error", this.name = "ValidationError", this.value = n, this.path = r, this.type = i, this.errors = [], this.inner = [], Hy(t).forEach((o) => {
        if (Be.isError(o)) {
          this.errors.push(...o.errors);
          const s = o.inner.length ? o.inner : [o];
          this.inner.push(...s);
        } else
          this.errors.push(o);
      }), this.message = this.errors.length > 1 ? `${this.errors.length} errors occurred` : this.errors[0];
    }
  }
  Gy = Symbol.hasInstance;
  Ky = Symbol.toStringTag;
  class Be extends Error {
    static formatError(t, n) {
      const r = n.label || n.path || "this";
      return r !== n.path && (n = Object.assign({}, n, {
        path: r
      })), typeof t == "string" ? t.replace(mS, (i, o) => wn(n[o])) : typeof t == "function" ? t(n) : t;
    }
    static isError(t) {
      return t && t.name === "ValidationError";
    }
    constructor(t, n, r, i, o) {
      const s = new $d(t, n, r, i);
      if (o)
        return s;
      super(), this.value = void 0, this.path = void 0, this.type = void 0, this.params = void 0, this.errors = [], this.inner = [], this[Ky] = "Error", this.name = s.name, this.message = s.message, this.type = s.type, this.value = s.value, this.path = s.path, this.errors = s.errors, this.inner = s.inner, Error.captureStackTrace && Error.captureStackTrace(this, Be);
    }
    static [Gy](t) {
      return $d[Symbol.hasInstance](t) || super[Symbol.hasInstance](t);
    }
  }
  let _t = {
    default: "${path} is invalid",
    required: "${path} is a required field",
    defined: "${path} must be defined",
    notNull: "${path} cannot be null",
    oneOf: "${path} must be one of the following values: ${values}",
    notOneOf: "${path} must not be one of the following values: ${values}",
    notType: ({
      path: e,
      type: t,
      value: n,
      originalValue: r
    }) => {
      const i = r != null && r !== n ? ` (cast from the value \`${wn(r, !0)}\`).` : ".";
      return t !== "mixed" ? `${e} must be a \`${t}\` type, but the final value was: \`${wn(n, !0)}\`` + i : `${e} must match the configured type. The validated value was: \`${wn(n, !0)}\`` + i;
    }
  }, Ie = {
    length: "${path} must be exactly ${length} characters",
    min: "${path} must be at least ${min} characters",
    max: "${path} must be at most ${max} characters",
    matches: '${path} must match the following: "${regex}"',
    email: "${path} must be a valid email",
    url: "${path} must be a valid URL",
    uuid: "${path} must be a valid UUID",
    datetime: "${path} must be a valid ISO date-time",
    datetime_precision: "${path} must be a valid ISO date-time with a sub-second precision of exactly ${precision} digits",
    datetime_offset: '${path} must be a valid ISO date-time with UTC "Z" timezone',
    trim: "${path} must be a trimmed string",
    lowercase: "${path} must be a lowercase string",
    uppercase: "${path} must be a upper case string"
  }, tn = {
    min: "${path} must be greater than or equal to ${min}",
    max: "${path} must be less than or equal to ${max}",
    lessThan: "${path} must be less than ${less}",
    moreThan: "${path} must be greater than ${more}",
    positive: "${path} must be a positive number",
    negative: "${path} must be a negative number",
    integer: "${path} must be an integer"
  }, yu = {
    min: "${path} field must be later than ${min}",
    max: "${path} field must be at earlier than ${max}"
  }, yS = {
    isValue: "${path} field must be ${value}"
  }, gu = {
    noUnknown: "${path} field has unspecified keys: ${unknown}"
  }, gS = {
    min: "${path} field must have at least ${min} items",
    max: "${path} field must have less than or equal to ${max} items",
    length: "${path} must have ${length} items"
  }, vS = {
    notType: (e) => {
      const {
        path: t,
        value: n,
        spec: r
      } = e, i = r.types.length;
      if (Array.isArray(n)) {
        if (n.length < i)
          return `${t} tuple value has too few items, expected a length of ${i} but got ${n.length} for value: \`${wn(n, !0)}\``;
        if (n.length > i)
          return `${t} tuple value has too many items, expected a length of ${i} but got ${n.length} for value: \`${wn(n, !0)}\``;
      }
      return Be.formatError(_t.notType, e);
    }
  };
  Object.assign(/* @__PURE__ */ Object.create(null), {
    mixed: _t,
    string: Ie,
    number: tn,
    date: yu,
    object: gu,
    array: gS,
    boolean: yS,
    tuple: vS
  });
  const Nc = (e) => e && e.__isYupSchema__;
  class ks {
    static fromOptions(t, n) {
      if (!n.then && !n.otherwise)
        throw new TypeError("either `then:` or `otherwise:` is required for `when()` conditions");
      let {
        is: r,
        then: i,
        otherwise: o
      } = n, s = typeof r == "function" ? r : (...a) => a.every((l) => l === r);
      return new ks(t, (a, l) => {
        var u;
        let f = s(...a) ? i : o;
        return (u = f == null ? void 0 : f(l)) != null ? u : l;
      });
    }
    constructor(t, n) {
      this.fn = void 0, this.refs = t, this.refs = t, this.fn = n;
    }
    resolve(t, n) {
      let r = this.refs.map((o) => (
        // TODO: ? operator here?
        o.getValue(n == null ? void 0 : n.value, n == null ? void 0 : n.parent, n == null ? void 0 : n.context)
      )), i = this.fn(r, t, n);
      if (i === void 0 || // @ts-ignore this can be base
      i === t)
        return t;
      if (!Nc(i))
        throw new TypeError("conditions must return a schema object");
      return i.resolve(n);
    }
  }
  const Ro = {
    context: "$",
    value: "."
  };
  class ar {
    constructor(t, n = {}) {
      if (this.key = void 0, this.isContext = void 0, this.isValue = void 0, this.isSibling = void 0, this.path = void 0, this.getter = void 0, this.map = void 0, typeof t != "string")
        throw new TypeError("ref must be a string, got: " + t);
      if (this.key = t.trim(), t === "")
        throw new TypeError("ref must be a non-empty string");
      this.isContext = this.key[0] === Ro.context, this.isValue = this.key[0] === Ro.value, this.isSibling = !this.isContext && !this.isValue;
      let r = this.isContext ? Ro.context : this.isValue ? Ro.value : "";
      this.path = this.key.slice(r.length), this.getter = this.path && Yn.getter(this.path, !0), this.map = n.map;
    }
    getValue(t, n, r) {
      let i = this.isContext ? r : this.isValue ? t : n;
      return this.getter && (i = this.getter(i || {})), this.map && (i = this.map(i)), i;
    }
    /**
     *
     * @param {*} value
     * @param {Object} options
     * @param {Object=} options.context
     * @param {Object=} options.parent
     */
    cast(t, n) {
      return this.getValue(t, n == null ? void 0 : n.parent, n == null ? void 0 : n.context);
    }
    resolve() {
      return this;
    }
    describe() {
      return {
        type: "ref",
        key: this.key
      };
    }
    toString() {
      return `Ref(${this.key})`;
    }
    static isRef(t) {
      return t && t.__isYupRef;
    }
  }
  ar.prototype.__isYupRef = !0;
  const zt = (e) => e == null;
  function yr(e) {
    function t({
      value: n,
      path: r = "",
      options: i,
      originalValue: o,
      schema: s
    }, a, l) {
      const {
        name: u,
        test: f,
        params: c,
        message: d,
        skipAbsent: p
      } = e;
      let {
        parent: g,
        context: v,
        abortEarly: T = s.spec.abortEarly,
        disableStackTrace: y = s.spec.disableStackTrace
      } = i;
      function h(I) {
        return ar.isRef(I) ? I.getValue(n, g, v) : I;
      }
      function m(I = {}) {
        const G = Object.assign({
          value: n,
          originalValue: o,
          label: s.spec.label,
          path: I.path || r,
          spec: s.spec,
          disableStackTrace: I.disableStackTrace || y
        }, c, I.params);
        for (const K of Object.keys(G))
          G[K] = h(G[K]);
        const W = new Be(Be.formatError(I.message || d, G), n, G.path, I.type || u, G.disableStackTrace);
        return W.params = G, W;
      }
      const x = T ? a : l;
      let k = {
        path: r,
        parent: g,
        type: u,
        from: i.from,
        createError: m,
        resolve: h,
        options: i,
        originalValue: o,
        schema: s
      };
      const E = (I) => {
        Be.isError(I) ? x(I) : I ? l(null) : x(m());
      }, C = (I) => {
        Be.isError(I) ? x(I) : a(I);
      };
      if (p && zt(n))
        return E(!0);
      let L;
      try {
        var V;
        if (L = f.call(k, n, k), typeof ((V = L) == null ? void 0 : V.then) == "function") {
          if (i.sync)
            throw new Error(`Validation test of type: "${k.type}" returned a Promise during a synchronous validate. This test will finish after the validate call has returned`);
          return Promise.resolve(L).then(E, C);
        }
      } catch (I) {
        C(I);
        return;
      }
      E(L);
    }
    return t.OPTIONS = e, t;
  }
  function xS(e, t, n, r = n) {
    let i, o, s;
    return t ? (Yn.forEach(t, (a, l, u) => {
      let f = l ? a.slice(1, a.length - 1) : a;
      e = e.resolve({
        context: r,
        parent: i,
        value: n
      });
      let c = e.type === "tuple", d = u ? parseInt(f, 10) : 0;
      if (e.innerType || c) {
        if (c && !u)
          throw new Error(`Yup.reach cannot implicitly index into a tuple type. the path part "${s}" must contain an index to the tuple element, e.g. "${s}[0]"`);
        if (n && d >= n.length)
          throw new Error(`Yup.reach cannot resolve an array item at index: ${a}, in the path: ${t}. because there is no value at that index. `);
        i = n, n = n && n[d], e = c ? e.spec.types[d] : e.innerType;
      }
      if (!u) {
        if (!e.fields || !e.fields[f])
          throw new Error(`The schema does not contain the path: ${t}. (failed at: ${s} which is a type: "${e.type}")`);
        i = n, n = n && n[f], e = e.fields[f];
      }
      o = f, s = l ? "[" + a + "]" : "." + a;
    }), {
      schema: e,
      parent: i,
      parentPath: o
    }) : {
      parent: i,
      parentPath: t,
      schema: e
    };
  }
  class _s extends Set {
    describe() {
      const t = [];
      for (const n of this.values())
        t.push(ar.isRef(n) ? n.describe() : n);
      return t;
    }
    resolveAll(t) {
      let n = [];
      for (const r of this.values())
        n.push(t(r));
      return n;
    }
    clone() {
      return new _s(this.values());
    }
    merge(t, n) {
      const r = this.clone();
      return t.forEach((i) => r.add(i)), n.forEach((i) => r.delete(i)), r;
    }
  }
  function Or(e, t = /* @__PURE__ */ new Map()) {
    if (Nc(e) || !e || typeof e != "object")
      return e;
    if (t.has(e))
      return t.get(e);
    let n;
    if (e instanceof Date)
      n = new Date(e.getTime()), t.set(e, n);
    else if (e instanceof RegExp)
      n = new RegExp(e), t.set(e, n);
    else if (Array.isArray(e)) {
      n = new Array(e.length), t.set(e, n);
      for (let r = 0; r < e.length; r++)
        n[r] = Or(e[r], t);
    } else if (e instanceof Map) {
      n = /* @__PURE__ */ new Map(), t.set(e, n);
      for (const [r, i] of e.entries())
        n.set(r, Or(i, t));
    } else if (e instanceof Set) {
      n = /* @__PURE__ */ new Set(), t.set(e, n);
      for (const r of e)
        n.add(Or(r, t));
    } else if (e instanceof Object) {
      n = {}, t.set(e, n);
      for (const [r, i] of Object.entries(e))
        n[r] = Or(i, t);
    } else
      throw Error(`Unable to clone ${e}`);
    return n;
  }
  class Ct {
    constructor(t) {
      this.type = void 0, this.deps = [], this.tests = void 0, this.transforms = void 0, this.conditions = [], this._mutate = void 0, this.internalTests = {}, this._whitelist = new _s(), this._blacklist = new _s(), this.exclusiveTests = /* @__PURE__ */ Object.create(null), this._typeCheck = void 0, this.spec = void 0, this.tests = [], this.transforms = [], this.withMutation(() => {
        this.typeError(_t.notType);
      }), this.type = t.type, this._typeCheck = t.check, this.spec = Object.assign({
        strip: !1,
        strict: !1,
        abortEarly: !0,
        recursive: !0,
        disableStackTrace: !1,
        nullable: !1,
        optional: !0,
        coerce: !0
      }, t == null ? void 0 : t.spec), this.withMutation((n) => {
        n.nonNullable();
      });
    }
    // TODO: remove
    get _type() {
      return this.type;
    }
    clone(t) {
      if (this._mutate)
        return t && Object.assign(this.spec, t), this;
      const n = Object.create(Object.getPrototypeOf(this));
      return n.type = this.type, n._typeCheck = this._typeCheck, n._whitelist = this._whitelist.clone(), n._blacklist = this._blacklist.clone(), n.internalTests = Object.assign({}, this.internalTests), n.exclusiveTests = Object.assign({}, this.exclusiveTests), n.deps = [...this.deps], n.conditions = [...this.conditions], n.tests = [...this.tests], n.transforms = [...this.transforms], n.spec = Or(Object.assign({}, this.spec, t)), n;
    }
    label(t) {
      let n = this.clone();
      return n.spec.label = t, n;
    }
    meta(...t) {
      if (t.length === 0)
        return this.spec.meta;
      let n = this.clone();
      return n.spec.meta = Object.assign(n.spec.meta || {}, t[0]), n;
    }
    withMutation(t) {
      let n = this._mutate;
      this._mutate = !0;
      let r = t(this);
      return this._mutate = n, r;
    }
    concat(t) {
      if (!t || t === this)
        return this;
      if (t.type !== this.type && this.type !== "mixed")
        throw new TypeError(`You cannot \`concat()\` schema's of different types: ${this.type} and ${t.type}`);
      let n = this, r = t.clone();
      const i = Object.assign({}, n.spec, r.spec);
      return r.spec = i, r.internalTests = Object.assign({}, n.internalTests, r.internalTests), r._whitelist = n._whitelist.merge(t._whitelist, t._blacklist), r._blacklist = n._blacklist.merge(t._blacklist, t._whitelist), r.tests = n.tests, r.exclusiveTests = n.exclusiveTests, r.withMutation((o) => {
        t.tests.forEach((s) => {
          o.test(s.OPTIONS);
        });
      }), r.transforms = [...n.transforms, ...r.transforms], r;
    }
    isType(t) {
      return t == null ? !!(this.spec.nullable && t === null || this.spec.optional && t === void 0) : this._typeCheck(t);
    }
    resolve(t) {
      let n = this;
      if (n.conditions.length) {
        let r = n.conditions;
        n = n.clone(), n.conditions = [], n = r.reduce((i, o) => o.resolve(i, t), n), n = n.resolve(t);
      }
      return n;
    }
    resolveOptions(t) {
      var n, r, i, o;
      return Object.assign({}, t, {
        from: t.from || [],
        strict: (n = t.strict) != null ? n : this.spec.strict,
        abortEarly: (r = t.abortEarly) != null ? r : this.spec.abortEarly,
        recursive: (i = t.recursive) != null ? i : this.spec.recursive,
        disableStackTrace: (o = t.disableStackTrace) != null ? o : this.spec.disableStackTrace
      });
    }
    /**
     * Run the configured transform pipeline over an input value.
     */
    cast(t, n = {}) {
      let r = this.resolve(Object.assign({
        value: t
      }, n)), i = n.assert === "ignore-optionality", o = r._cast(t, n);
      if (n.assert !== !1 && !r.isType(o)) {
        if (i && zt(o))
          return o;
        let s = wn(t), a = wn(o);
        throw new TypeError(`The value of ${n.path || "field"} could not be cast to a value that satisfies the schema type: "${r.type}". 

attempted value: ${s} 
` + (a !== s ? `result of cast: ${a}` : ""));
      }
      return o;
    }
    _cast(t, n) {
      let r = t === void 0 ? t : this.transforms.reduce((i, o) => o.call(this, i, t, this), t);
      return r === void 0 && (r = this.getDefault(n)), r;
    }
    _validate(t, n = {}, r, i) {
      let {
        path: o,
        originalValue: s = t,
        strict: a = this.spec.strict
      } = n, l = t;
      a || (l = this._cast(l, Object.assign({
        assert: !1
      }, n)));
      let u = [];
      for (let f of Object.values(this.internalTests))
        f && u.push(f);
      this.runTests({
        path: o,
        value: l,
        originalValue: s,
        options: n,
        tests: u
      }, r, (f) => {
        if (f.length)
          return i(f, l);
        this.runTests({
          path: o,
          value: l,
          originalValue: s,
          options: n,
          tests: this.tests
        }, r, i);
      });
    }
    /**
     * Executes a set of validations, either schema, produced Tests or a nested
     * schema validate result.
     */
    runTests(t, n, r) {
      let i = !1, {
        tests: o,
        value: s,
        originalValue: a,
        path: l,
        options: u
      } = t, f = (v) => {
        i || (i = !0, n(v, s));
      }, c = (v) => {
        i || (i = !0, r(v, s));
      }, d = o.length, p = [];
      if (!d)
        return c([]);
      let g = {
        value: s,
        originalValue: a,
        path: l,
        options: u,
        schema: this
      };
      for (let v = 0; v < o.length; v++) {
        const T = o[v];
        T(g, f, function(h) {
          h && (Array.isArray(h) ? p.push(...h) : p.push(h)), --d <= 0 && c(p);
        });
      }
    }
    asNestedTest({
      key: t,
      index: n,
      parent: r,
      parentPath: i,
      originalParent: o,
      options: s
    }) {
      const a = t ?? n;
      if (a == null)
        throw TypeError("Must include `key` or `index` for nested validations");
      const l = typeof a == "number";
      let u = r[a];
      const f = Object.assign({}, s, {
        // Nested validations fields are always strict:
        //    1. parent isn't strict so the casting will also have cast inner values
        //    2. parent is strict in which case the nested values weren't cast either
        strict: !0,
        parent: r,
        value: u,
        originalValue: o[a],
        // FIXME: tests depend on `index` being passed around deeply,
        //   we should not let the options.key/index bleed through
        key: void 0,
        // index: undefined,
        [l ? "index" : "key"]: a,
        path: l || a.includes(".") ? `${i || ""}[${l ? a : `"${a}"`}]` : (i ? `${i}.` : "") + t
      });
      return (c, d, p) => this.resolve(f)._validate(u, f, d, p);
    }
    validate(t, n) {
      var r;
      let i = this.resolve(Object.assign({}, n, {
        value: t
      })), o = (r = n == null ? void 0 : n.disableStackTrace) != null ? r : i.spec.disableStackTrace;
      return new Promise((s, a) => i._validate(t, n, (l, u) => {
        Be.isError(l) && (l.value = u), a(l);
      }, (l, u) => {
        l.length ? a(new Be(l, u, void 0, void 0, o)) : s(u);
      }));
    }
    validateSync(t, n) {
      var r;
      let i = this.resolve(Object.assign({}, n, {
        value: t
      })), o, s = (r = n == null ? void 0 : n.disableStackTrace) != null ? r : i.spec.disableStackTrace;
      return i._validate(t, Object.assign({}, n, {
        sync: !0
      }), (a, l) => {
        throw Be.isError(a) && (a.value = l), a;
      }, (a, l) => {
        if (a.length)
          throw new Be(a, t, void 0, void 0, s);
        o = l;
      }), o;
    }
    isValid(t, n) {
      return this.validate(t, n).then(() => !0, (r) => {
        if (Be.isError(r))
          return !1;
        throw r;
      });
    }
    isValidSync(t, n) {
      try {
        return this.validateSync(t, n), !0;
      } catch (r) {
        if (Be.isError(r))
          return !1;
        throw r;
      }
    }
    _getDefault(t) {
      let n = this.spec.default;
      return n == null ? n : typeof n == "function" ? n.call(this, t) : Or(n);
    }
    getDefault(t) {
      return this.resolve(t || {})._getDefault(t);
    }
    default(t) {
      return arguments.length === 0 ? this._getDefault() : this.clone({
        default: t
      });
    }
    strict(t = !0) {
      return this.clone({
        strict: t
      });
    }
    nullability(t, n) {
      const r = this.clone({
        nullable: t
      });
      return r.internalTests.nullable = yr({
        message: n,
        name: "nullable",
        test(i) {
          return i === null ? this.schema.spec.nullable : !0;
        }
      }), r;
    }
    optionality(t, n) {
      const r = this.clone({
        optional: t
      });
      return r.internalTests.optionality = yr({
        message: n,
        name: "optionality",
        test(i) {
          return i === void 0 ? this.schema.spec.optional : !0;
        }
      }), r;
    }
    optional() {
      return this.optionality(!0);
    }
    defined(t = _t.defined) {
      return this.optionality(!1, t);
    }
    nullable() {
      return this.nullability(!0);
    }
    nonNullable(t = _t.notNull) {
      return this.nullability(!1, t);
    }
    required(t = _t.required) {
      return this.clone().withMutation((n) => n.nonNullable(t).defined(t));
    }
    notRequired() {
      return this.clone().withMutation((t) => t.nullable().optional());
    }
    transform(t) {
      let n = this.clone();
      return n.transforms.push(t), n;
    }
    /**
     * Adds a test function to the schema's queue of tests.
     * tests can be exclusive or non-exclusive.
     *
     * - exclusive tests, will replace any existing tests of the same name.
     * - non-exclusive: can be stacked
     *
     * If a non-exclusive test is added to a schema with an exclusive test of the same name
     * the exclusive test is removed and further tests of the same name will be stacked.
     *
     * If an exclusive test is added to a schema with non-exclusive tests of the same name
     * the previous tests are removed and further tests of the same name will replace each other.
     */
    test(...t) {
      let n;
      if (t.length === 1 ? typeof t[0] == "function" ? n = {
        test: t[0]
      } : n = t[0] : t.length === 2 ? n = {
        name: t[0],
        test: t[1]
      } : n = {
        name: t[0],
        message: t[1],
        test: t[2]
      }, n.message === void 0 && (n.message = _t.default), typeof n.test != "function")
        throw new TypeError("`test` is a required parameters");
      let r = this.clone(), i = yr(n), o = n.exclusive || n.name && r.exclusiveTests[n.name] === !0;
      if (n.exclusive && !n.name)
        throw new TypeError("Exclusive tests must provide a unique `name` identifying the test");
      return n.name && (r.exclusiveTests[n.name] = !!n.exclusive), r.tests = r.tests.filter((s) => !(s.OPTIONS.name === n.name && (o || s.OPTIONS.test === i.OPTIONS.test))), r.tests.push(i), r;
    }
    when(t, n) {
      !Array.isArray(t) && typeof t != "string" && (n = t, t = ".");
      let r = this.clone(), i = Hy(t).map((o) => new ar(o));
      return i.forEach((o) => {
        o.isSibling && r.deps.push(o.key);
      }), r.conditions.push(typeof n == "function" ? new ks(i, n) : ks.fromOptions(i, n)), r;
    }
    typeError(t) {
      let n = this.clone();
      return n.internalTests.typeError = yr({
        message: t,
        name: "typeError",
        skipAbsent: !0,
        test(r) {
          return this.schema._typeCheck(r) ? !0 : this.createError({
            params: {
              type: this.schema.type
            }
          });
        }
      }), n;
    }
    oneOf(t, n = _t.oneOf) {
      let r = this.clone();
      return t.forEach((i) => {
        r._whitelist.add(i), r._blacklist.delete(i);
      }), r.internalTests.whiteList = yr({
        message: n,
        name: "oneOf",
        skipAbsent: !0,
        test(i) {
          let o = this.schema._whitelist, s = o.resolveAll(this.resolve);
          return s.includes(i) ? !0 : this.createError({
            params: {
              values: Array.from(o).join(", "),
              resolved: s
            }
          });
        }
      }), r;
    }
    notOneOf(t, n = _t.notOneOf) {
      let r = this.clone();
      return t.forEach((i) => {
        r._blacklist.add(i), r._whitelist.delete(i);
      }), r.internalTests.blacklist = yr({
        message: n,
        name: "notOneOf",
        test(i) {
          let o = this.schema._blacklist, s = o.resolveAll(this.resolve);
          return s.includes(i) ? this.createError({
            params: {
              values: Array.from(o).join(", "),
              resolved: s
            }
          }) : !0;
        }
      }), r;
    }
    strip(t = !0) {
      let n = this.clone();
      return n.spec.strip = t, n;
    }
    /**
     * Return a serialized description of the schema including validations, flags, types etc.
     *
     * @param options Provide any needed context for resolving runtime schema alterations (lazy, when conditions, etc).
     */
    describe(t) {
      const n = (t ? this.resolve(t) : this).clone(), {
        label: r,
        meta: i,
        optional: o,
        nullable: s
      } = n.spec;
      return {
        meta: i,
        label: r,
        optional: o,
        nullable: s,
        default: n.getDefault(t),
        type: n.type,
        oneOf: n._whitelist.describe(),
        notOneOf: n._blacklist.describe(),
        tests: n.tests.map((l) => ({
          name: l.OPTIONS.name,
          params: l.OPTIONS.params
        })).filter((l, u, f) => f.findIndex((c) => c.name === l.name) === u)
      };
    }
  }
  Ct.prototype.__isYupSchema__ = !0;
  for (const e of ["validate", "validateSync"])
    Ct.prototype[`${e}At`] = function(t, n, r = {}) {
      const {
        parent: i,
        parentPath: o,
        schema: s
      } = xS(this, t, n, r.context);
      return s[e](i && i[o], Object.assign({}, r, {
        parent: i,
        path: t
      }));
    };
  for (const e of ["equals", "is"])
    Ct.prototype[e] = Ct.prototype.oneOf;
  for (const e of ["not", "nope"])
    Ct.prototype[e] = Ct.prototype.notOneOf;
  const SS = /^(\d{4}|[+-]\d{6})(?:-?(\d{2})(?:-?(\d{2}))?)?(?:[ T]?(\d{2}):?(\d{2})(?::?(\d{2})(?:[,.](\d{1,}))?)?(?:(Z)|([+-])(\d{2})(?::?(\d{2}))?)?)?$/;
  function wS(e) {
    const t = vu(e);
    if (!t)
      return Date.parse ? Date.parse(e) : Number.NaN;
    if (t.z === void 0 && t.plusMinus === void 0)
      return new Date(t.year, t.month, t.day, t.hour, t.minute, t.second, t.millisecond).valueOf();
    let n = 0;
    return t.z !== "Z" && t.plusMinus !== void 0 && (n = t.hourOffset * 60 + t.minuteOffset, t.plusMinus === "+" && (n = 0 - n)), Date.UTC(t.year, t.month, t.day, t.hour, t.minute + n, t.second, t.millisecond);
  }
  function vu(e) {
    var t, n;
    const r = SS.exec(e);
    return r ? {
      year: Vt(r[1]),
      month: Vt(r[2], 1) - 1,
      day: Vt(r[3], 1),
      hour: Vt(r[4]),
      minute: Vt(r[5]),
      second: Vt(r[6]),
      millisecond: r[7] ? (
        // allow arbitrary sub-second precision beyond milliseconds
        Vt(r[7].substring(0, 3))
      ) : 0,
      precision: (t = (n = r[7]) == null ? void 0 : n.length) != null ? t : void 0,
      z: r[8] || void 0,
      plusMinus: r[9] || void 0,
      hourOffset: Vt(r[10]),
      minuteOffset: Vt(r[11])
    } : null;
  }
  function Vt(e, t = 0) {
    return Number(e) || t;
  }
  let TS = (
    // eslint-disable-next-line
    /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/
  ), ES = (
    // eslint-disable-next-line
    /^((https?|ftp):)?\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(\#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i
  ), CS = /^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i, PS = "^\\d{4}-\\d{2}-\\d{2}", kS = "\\d{2}:\\d{2}:\\d{2}", _S = "(([+-]\\d{2}(:?\\d{2})?)|Z)", AS = new RegExp(`${PS}T${kS}(\\.\\d+)?${_S}$`), OS = (e) => zt(e) || e === e.trim(), FS = {}.toString();
  function qo() {
    return new Qy();
  }
  class Qy extends Ct {
    constructor() {
      super({
        type: "string",
        check(t) {
          return t instanceof String && (t = t.valueOf()), typeof t == "string";
        }
      }), this.withMutation(() => {
        this.transform((t, n, r) => {
          if (!r.spec.coerce || r.isType(t) || Array.isArray(t))
            return t;
          const i = t != null && t.toString ? t.toString() : t;
          return i === FS ? t : i;
        });
      });
    }
    required(t) {
      return super.required(t).withMutation((n) => n.test({
        message: t || _t.required,
        name: "required",
        skipAbsent: !0,
        test: (r) => !!r.length
      }));
    }
    notRequired() {
      return super.notRequired().withMutation((t) => (t.tests = t.tests.filter((n) => n.OPTIONS.name !== "required"), t));
    }
    length(t, n = Ie.length) {
      return this.test({
        message: n,
        name: "length",
        exclusive: !0,
        params: {
          length: t
        },
        skipAbsent: !0,
        test(r) {
          return r.length === this.resolve(t);
        }
      });
    }
    min(t, n = Ie.min) {
      return this.test({
        message: n,
        name: "min",
        exclusive: !0,
        params: {
          min: t
        },
        skipAbsent: !0,
        test(r) {
          return r.length >= this.resolve(t);
        }
      });
    }
    max(t, n = Ie.max) {
      return this.test({
        name: "max",
        exclusive: !0,
        message: n,
        params: {
          max: t
        },
        skipAbsent: !0,
        test(r) {
          return r.length <= this.resolve(t);
        }
      });
    }
    matches(t, n) {
      let r = !1, i, o;
      return n && (typeof n == "object" ? {
        excludeEmptyString: r = !1,
        message: i,
        name: o
      } = n : i = n), this.test({
        name: o || "matches",
        message: i || Ie.matches,
        params: {
          regex: t
        },
        skipAbsent: !0,
        test: (s) => s === "" && r || s.search(t) !== -1
      });
    }
    email(t = Ie.email) {
      return this.matches(TS, {
        name: "email",
        message: t,
        excludeEmptyString: !0
      });
    }
    url(t = Ie.url) {
      return this.matches(ES, {
        name: "url",
        message: t,
        excludeEmptyString: !0
      });
    }
    uuid(t = Ie.uuid) {
      return this.matches(CS, {
        name: "uuid",
        message: t,
        excludeEmptyString: !1
      });
    }
    datetime(t) {
      let n = "", r, i;
      return t && (typeof t == "object" ? {
        message: n = "",
        allowOffset: r = !1,
        precision: i = void 0
      } = t : n = t), this.matches(AS, {
        name: "datetime",
        message: n || Ie.datetime,
        excludeEmptyString: !0
      }).test({
        name: "datetime_offset",
        message: n || Ie.datetime_offset,
        params: {
          allowOffset: r
        },
        skipAbsent: !0,
        test: (o) => {
          if (!o || r)
            return !0;
          const s = vu(o);
          return s ? !!s.z : !1;
        }
      }).test({
        name: "datetime_precision",
        message: n || Ie.datetime_precision,
        params: {
          precision: i
        },
        skipAbsent: !0,
        test: (o) => {
          if (!o || i == null)
            return !0;
          const s = vu(o);
          return s ? s.precision === i : !1;
        }
      });
    }
    //-- transforms --
    ensure() {
      return this.default("").transform((t) => t === null ? "" : t);
    }
    trim(t = Ie.trim) {
      return this.transform((n) => n != null ? n.trim() : n).test({
        message: t,
        name: "trim",
        test: OS
      });
    }
    lowercase(t = Ie.lowercase) {
      return this.transform((n) => zt(n) ? n : n.toLowerCase()).test({
        message: t,
        name: "string_case",
        exclusive: !0,
        skipAbsent: !0,
        test: (n) => zt(n) || n === n.toLowerCase()
      });
    }
    uppercase(t = Ie.uppercase) {
      return this.transform((n) => zt(n) ? n : n.toUpperCase()).test({
        message: t,
        name: "string_case",
        exclusive: !0,
        skipAbsent: !0,
        test: (n) => zt(n) || n === n.toUpperCase()
      });
    }
  }
  qo.prototype = Qy.prototype;
  let jS = (e) => e != +e;
  function Yy() {
    return new Xy();
  }
  class Xy extends Ct {
    constructor() {
      super({
        type: "number",
        check(t) {
          return t instanceof Number && (t = t.valueOf()), typeof t == "number" && !jS(t);
        }
      }), this.withMutation(() => {
        this.transform((t, n, r) => {
          if (!r.spec.coerce)
            return t;
          let i = t;
          if (typeof i == "string") {
            if (i = i.replace(/\s/g, ""), i === "")
              return NaN;
            i = +i;
          }
          return r.isType(i) || i === null ? i : parseFloat(i);
        });
      });
    }
    min(t, n = tn.min) {
      return this.test({
        message: n,
        name: "min",
        exclusive: !0,
        params: {
          min: t
        },
        skipAbsent: !0,
        test(r) {
          return r >= this.resolve(t);
        }
      });
    }
    max(t, n = tn.max) {
      return this.test({
        message: n,
        name: "max",
        exclusive: !0,
        params: {
          max: t
        },
        skipAbsent: !0,
        test(r) {
          return r <= this.resolve(t);
        }
      });
    }
    lessThan(t, n = tn.lessThan) {
      return this.test({
        message: n,
        name: "max",
        exclusive: !0,
        params: {
          less: t
        },
        skipAbsent: !0,
        test(r) {
          return r < this.resolve(t);
        }
      });
    }
    moreThan(t, n = tn.moreThan) {
      return this.test({
        message: n,
        name: "min",
        exclusive: !0,
        params: {
          more: t
        },
        skipAbsent: !0,
        test(r) {
          return r > this.resolve(t);
        }
      });
    }
    positive(t = tn.positive) {
      return this.moreThan(0, t);
    }
    negative(t = tn.negative) {
      return this.lessThan(0, t);
    }
    integer(t = tn.integer) {
      return this.test({
        name: "integer",
        message: t,
        skipAbsent: !0,
        test: (n) => Number.isInteger(n)
      });
    }
    truncate() {
      return this.transform((t) => zt(t) ? t : t | 0);
    }
    round(t) {
      var n;
      let r = ["ceil", "floor", "round", "trunc"];
      if (t = ((n = t) == null ? void 0 : n.toLowerCase()) || "round", t === "trunc")
        return this.truncate();
      if (r.indexOf(t.toLowerCase()) === -1)
        throw new TypeError("Only valid options for round() are: " + r.join(", "));
      return this.transform((i) => zt(i) ? i : Math[t](i));
    }
  }
  Yy.prototype = Xy.prototype;
  let DS = /* @__PURE__ */ new Date(""), MS = (e) => Object.prototype.toString.call(e) === "[object Date]";
  class ra extends Ct {
    constructor() {
      super({
        type: "date",
        check(t) {
          return MS(t) && !isNaN(t.getTime());
        }
      }), this.withMutation(() => {
        this.transform((t, n, r) => !r.spec.coerce || r.isType(t) || t === null ? t : (t = wS(t), isNaN(t) ? ra.INVALID_DATE : new Date(t)));
      });
    }
    prepareParam(t, n) {
      let r;
      if (ar.isRef(t))
        r = t;
      else {
        let i = this.cast(t);
        if (!this._typeCheck(i))
          throw new TypeError(`\`${n}\` must be a Date or a value that can be \`cast()\` to a Date`);
        r = i;
      }
      return r;
    }
    min(t, n = yu.min) {
      let r = this.prepareParam(t, "min");
      return this.test({
        message: n,
        name: "min",
        exclusive: !0,
        params: {
          min: t
        },
        skipAbsent: !0,
        test(i) {
          return i >= this.resolve(r);
        }
      });
    }
    max(t, n = yu.max) {
      let r = this.prepareParam(t, "max");
      return this.test({
        message: n,
        name: "max",
        exclusive: !0,
        params: {
          max: t
        },
        skipAbsent: !0,
        test(i) {
          return i <= this.resolve(r);
        }
      });
    }
  }
  ra.INVALID_DATE = DS;
  ra.prototype;
  function RS(e, t = []) {
    let n = [], r = /* @__PURE__ */ new Set(), i = new Set(t.map(([s, a]) => `${s}-${a}`));
    function o(s, a) {
      let l = Yn.split(s)[0];
      r.add(l), i.has(`${a}-${l}`) || n.push([a, l]);
    }
    for (const s of Object.keys(e)) {
      let a = e[s];
      r.add(s), ar.isRef(a) && a.isSibling ? o(a.path, s) : Nc(a) && "deps" in a && a.deps.forEach((l) => o(l, s));
    }
    return lS.array(Array.from(r), n).reverse();
  }
  function Id(e, t) {
    let n = 1 / 0;
    return e.some((r, i) => {
      var o;
      if ((o = t.path) != null && o.includes(r))
        return n = i, !0;
    }), n;
  }
  function Zy(e) {
    return (t, n) => Id(e, t) - Id(e, n);
  }
  const LS = (e, t, n) => {
    if (typeof e != "string")
      return e;
    let r = e;
    try {
      r = JSON.parse(e);
    } catch {
    }
    return n.isType(r) ? r : e;
  };
  function Jo(e) {
    if ("fields" in e) {
      const t = {};
      for (const [n, r] of Object.entries(e.fields))
        t[n] = Jo(r);
      return e.setFields(t);
    }
    if (e.type === "array") {
      const t = e.optional();
      return t.innerType && (t.innerType = Jo(t.innerType)), t;
    }
    return e.type === "tuple" ? e.optional().clone({
      types: e.spec.types.map(Jo)
    }) : "optional" in e ? e.optional() : e;
  }
  const VS = (e, t) => {
    const n = [...Yn.normalizePath(t)];
    if (n.length === 1)
      return n[0] in e;
    let r = n.pop(), i = Yn.getter(Yn.join(n), !0)(e);
    return !!(i && r in i);
  };
  let zd = (e) => Object.prototype.toString.call(e) === "[object Object]";
  function NS(e, t) {
    let n = Object.keys(e.fields);
    return Object.keys(t).filter((r) => n.indexOf(r) === -1);
  }
  const bS = Zy([]);
  function qy(e) {
    return new Jy(e);
  }
  class Jy extends Ct {
    constructor(t) {
      super({
        type: "object",
        check(n) {
          return zd(n) || typeof n == "function";
        }
      }), this.fields = /* @__PURE__ */ Object.create(null), this._sortErrors = bS, this._nodes = [], this._excludedEdges = [], this.withMutation(() => {
        t && this.shape(t);
      });
    }
    _cast(t, n = {}) {
      var r;
      let i = super._cast(t, n);
      if (i === void 0)
        return this.getDefault(n);
      if (!this._typeCheck(i))
        return i;
      let o = this.fields, s = (r = n.stripUnknown) != null ? r : this.spec.noUnknown, a = [].concat(this._nodes, Object.keys(i).filter((c) => !this._nodes.includes(c))), l = {}, u = Object.assign({}, n, {
        parent: l,
        __validating: n.__validating || !1
      }), f = !1;
      for (const c of a) {
        let d = o[c], p = c in i;
        if (d) {
          let g, v = i[c];
          u.path = (n.path ? `${n.path}.` : "") + c, d = d.resolve({
            value: v,
            context: n.context,
            parent: l
          });
          let T = d instanceof Ct ? d.spec : void 0, y = T == null ? void 0 : T.strict;
          if (T != null && T.strip) {
            f = f || c in i;
            continue;
          }
          g = !n.__validating || !y ? (
            // TODO: use _cast, this is double resolving
            d.cast(i[c], u)
          ) : i[c], g !== void 0 && (l[c] = g);
        } else
          p && !s && (l[c] = i[c]);
        (p !== c in l || l[c] !== i[c]) && (f = !0);
      }
      return f ? l : i;
    }
    _validate(t, n = {}, r, i) {
      let {
        from: o = [],
        originalValue: s = t,
        recursive: a = this.spec.recursive
      } = n;
      n.from = [{
        schema: this,
        value: s
      }, ...o], n.__validating = !0, n.originalValue = s, super._validate(t, n, r, (l, u) => {
        if (!a || !zd(u)) {
          i(l, u);
          return;
        }
        s = s || u;
        let f = [];
        for (let c of this._nodes) {
          let d = this.fields[c];
          !d || ar.isRef(d) || f.push(d.asNestedTest({
            options: n,
            key: c,
            parent: u,
            parentPath: n.path,
            originalParent: s
          }));
        }
        this.runTests({
          tests: f,
          value: u,
          originalValue: s,
          options: n
        }, r, (c) => {
          i(c.sort(this._sortErrors).concat(l), u);
        });
      });
    }
    clone(t) {
      const n = super.clone(t);
      return n.fields = Object.assign({}, this.fields), n._nodes = this._nodes, n._excludedEdges = this._excludedEdges, n._sortErrors = this._sortErrors, n;
    }
    concat(t) {
      let n = super.concat(t), r = n.fields;
      for (let [i, o] of Object.entries(this.fields)) {
        const s = r[i];
        r[i] = s === void 0 ? o : s;
      }
      return n.withMutation((i) => (
        // XXX: excludes here is wrong
        i.setFields(r, [...this._excludedEdges, ...t._excludedEdges])
      ));
    }
    _getDefault(t) {
      if ("default" in this.spec)
        return super._getDefault(t);
      if (!this._nodes.length)
        return;
      let n = {};
      return this._nodes.forEach((r) => {
        var i;
        const o = this.fields[r];
        let s = t;
        (i = s) != null && i.value && (s = Object.assign({}, s, {
          parent: s.value,
          value: s.value[r]
        })), n[r] = o && "getDefault" in o ? o.getDefault(s) : void 0;
      }), n;
    }
    setFields(t, n) {
      let r = this.clone();
      return r.fields = t, r._nodes = RS(t, n), r._sortErrors = Zy(Object.keys(t)), n && (r._excludedEdges = n), r;
    }
    shape(t, n = []) {
      return this.clone().withMutation((r) => {
        let i = r._excludedEdges;
        return n.length && (Array.isArray(n[0]) || (n = [n]), i = [...r._excludedEdges, ...n]), r.setFields(Object.assign(r.fields, t), i);
      });
    }
    partial() {
      const t = {};
      for (const [n, r] of Object.entries(this.fields))
        t[n] = "optional" in r && r.optional instanceof Function ? r.optional() : r;
      return this.setFields(t);
    }
    deepPartial() {
      return Jo(this);
    }
    pick(t) {
      const n = {};
      for (const r of t)
        this.fields[r] && (n[r] = this.fields[r]);
      return this.setFields(n, this._excludedEdges.filter(([r, i]) => t.includes(r) && t.includes(i)));
    }
    omit(t) {
      const n = [];
      for (const r of Object.keys(this.fields))
        t.includes(r) || n.push(r);
      return this.pick(n);
    }
    from(t, n, r) {
      let i = Yn.getter(t, !0);
      return this.transform((o) => {
        if (!o)
          return o;
        let s = o;
        return VS(o, t) && (s = Object.assign({}, o), r || delete s[t], s[n] = i(o)), s;
      });
    }
    /** Parse an input JSON string to an object */
    json() {
      return this.transform(LS);
    }
    noUnknown(t = !0, n = gu.noUnknown) {
      typeof t != "boolean" && (n = t, t = !0);
      let r = this.test({
        name: "noUnknown",
        exclusive: !0,
        message: n,
        test(i) {
          if (i == null)
            return !0;
          const o = NS(this.schema, i);
          return !t || o.length === 0 || this.createError({
            params: {
              unknown: o.join(", ")
            }
          });
        }
      });
      return r.spec.noUnknown = t, r;
    }
    unknown(t = !0, n = gu.noUnknown) {
      return this.noUnknown(!t, n);
    }
    transformKeys(t) {
      return this.transform((n) => {
        if (!n)
          return n;
        const r = {};
        for (const i of Object.keys(n))
          r[t(i)] = n[i];
        return r;
      });
    }
    camelCase() {
      return this.transformKeys(rl.camelCase);
    }
    snakeCase() {
      return this.transformKeys(rl.snakeCase);
    }
    constantCase() {
      return this.transformKeys((t) => rl.snakeCase(t).toUpperCase());
    }
    describe(t) {
      const n = (t ? this.resolve(t) : this).clone(), r = super.describe(t);
      r.fields = {};
      for (const [o, s] of Object.entries(n.fields)) {
        var i;
        let a = t;
        (i = a) != null && i.value && (a = Object.assign({}, a, {
          parent: a.value,
          value: a.value[o]
        })), r.fields[o] = s.describe(a);
      }
      return r;
    }
  }
  qy.prototype = Jy.prototype;
  const $S = qy({
    firstName: qo().required("This field is required"),
    lastName: qo().required("This field is required"),
    age: Yy().min(0).positive().max(125).required("This field is required"),
    email: qo().email()
  });
  function IS(e, t) {
    const n = {};
    return e.username ? e.username.toLowerCase().includes(t.ContactInfo.firstName.toLowerCase()) || (n.username = `Username should contain your first name (${t.ContactInfo.firstName})`) : n.username = "This field is required", n;
  }
  var zS = function(t) {
    return BS(t) && !US(t);
  };
  function BS(e) {
    return !!e && typeof e == "object";
  }
  function US(e) {
    var t = Object.prototype.toString.call(e);
    return t === "[object RegExp]" || t === "[object Date]" || GS(e);
  }
  var HS = typeof Symbol == "function" && Symbol.for, WS = HS ? Symbol.for("react.element") : 60103;
  function GS(e) {
    return e.$$typeof === WS;
  }
  function KS(e) {
    return Array.isArray(e) ? [] : {};
  }
  function As(e, t) {
    return t.clone !== !1 && t.isMergeableObject(e) ? Yi(KS(e), e, t) : e;
  }
  function QS(e, t, n) {
    return e.concat(t).map(function(r) {
      return As(r, n);
    });
  }
  function YS(e, t, n) {
    var r = {};
    return n.isMergeableObject(e) && Object.keys(e).forEach(function(i) {
      r[i] = As(e[i], n);
    }), Object.keys(t).forEach(function(i) {
      !n.isMergeableObject(t[i]) || !e[i] ? r[i] = As(t[i], n) : r[i] = Yi(e[i], t[i], n);
    }), r;
  }
  function Yi(e, t, n) {
    n = n || {}, n.arrayMerge = n.arrayMerge || QS, n.isMergeableObject = n.isMergeableObject || zS;
    var r = Array.isArray(t), i = Array.isArray(e), o = r === i;
    return o ? r ? n.arrayMerge(e, t, n) : YS(e, t, n) : As(t, n);
  }
  Yi.all = function(t, n) {
    if (!Array.isArray(t))
      throw new Error("first argument should be an array");
    return t.reduce(function(r, i) {
      return Yi(r, i, n);
    }, {});
  };
  var xu = Yi, eg = typeof global == "object" && global && global.Object === Object && global, XS = typeof self == "object" && self && self.Object === Object && self, Rt = eg || XS || Function("return this")(), kn = Rt.Symbol, tg = Object.prototype, ZS = tg.hasOwnProperty, qS = tg.toString, ui = kn ? kn.toStringTag : void 0;
  function JS(e) {
    var t = ZS.call(e, ui), n = e[ui];
    try {
      e[ui] = void 0;
      var r = !0;
    } catch {
    }
    var i = qS.call(e);
    return r && (t ? e[ui] = n : delete e[ui]), i;
  }
  var ew = Object.prototype, tw = ew.toString;
  function nw(e) {
    return tw.call(e);
  }
  var rw = "[object Null]", iw = "[object Undefined]", Bd = kn ? kn.toStringTag : void 0;
  function lr(e) {
    return e == null ? e === void 0 ? iw : rw : Bd && Bd in Object(e) ? JS(e) : nw(e);
  }
  function ng(e, t) {
    return function(n) {
      return e(t(n));
    };
  }
  var bc = ng(Object.getPrototypeOf, Object);
  function ur(e) {
    return e != null && typeof e == "object";
  }
  var ow = "[object Object]", sw = Function.prototype, aw = Object.prototype, rg = sw.toString, lw = aw.hasOwnProperty, uw = rg.call(Object);
  function Ud(e) {
    if (!ur(e) || lr(e) != ow)
      return !1;
    var t = bc(e);
    if (t === null)
      return !0;
    var n = lw.call(t, "constructor") && t.constructor;
    return typeof n == "function" && n instanceof n && rg.call(n) == uw;
  }
  var Hd = Array.isArray, Wd = Object.keys, cw = Object.prototype.hasOwnProperty, fw = typeof Element < "u";
  function Su(e, t) {
    if (e === t)
      return !0;
    if (e && t && typeof e == "object" && typeof t == "object") {
      var n = Hd(e), r = Hd(t), i, o, s;
      if (n && r) {
        if (o = e.length, o != t.length)
          return !1;
        for (i = o; i-- !== 0; )
          if (!Su(e[i], t[i]))
            return !1;
        return !0;
      }
      if (n != r)
        return !1;
      var a = e instanceof Date, l = t instanceof Date;
      if (a != l)
        return !1;
      if (a && l)
        return e.getTime() == t.getTime();
      var u = e instanceof RegExp, f = t instanceof RegExp;
      if (u != f)
        return !1;
      if (u && f)
        return e.toString() == t.toString();
      var c = Wd(e);
      if (o = c.length, o !== Wd(t).length)
        return !1;
      for (i = o; i-- !== 0; )
        if (!cw.call(t, c[i]))
          return !1;
      if (fw && e instanceof Element && t instanceof Element)
        return e === t;
      for (i = o; i-- !== 0; )
        if (s = c[i], !(s === "_owner" && e.$$typeof) && !Su(e[s], t[s]))
          return !1;
      return !0;
    }
    return e !== e && t !== t;
  }
  var dw = function(t, n) {
    try {
      return Su(t, n);
    } catch (r) {
      if (r.message && r.message.match(/stack|recursion/i) || r.number === -2146828260)
        return console.warn("Warning: react-fast-compare does not handle circular references.", r.name, r.message), !1;
      throw r;
    }
  };
  const sn = /* @__PURE__ */ bs(dw);
  function hw() {
    this.__data__ = [], this.size = 0;
  }
  function ig(e, t) {
    return e === t || e !== e && t !== t;
  }
  function ia(e, t) {
    for (var n = e.length; n--; )
      if (ig(e[n][0], t))
        return n;
    return -1;
  }
  var pw = Array.prototype, mw = pw.splice;
  function yw(e) {
    var t = this.__data__, n = ia(t, e);
    if (n < 0)
      return !1;
    var r = t.length - 1;
    return n == r ? t.pop() : mw.call(t, n, 1), --this.size, !0;
  }
  function gw(e) {
    var t = this.__data__, n = ia(t, e);
    return n < 0 ? void 0 : t[n][1];
  }
  function vw(e) {
    return ia(this.__data__, e) > -1;
  }
  function xw(e, t) {
    var n = this.__data__, r = ia(n, e);
    return r < 0 ? (++this.size, n.push([e, t])) : n[r][1] = t, this;
  }
  function Jt(e) {
    var t = -1, n = e == null ? 0 : e.length;
    for (this.clear(); ++t < n; ) {
      var r = e[t];
      this.set(r[0], r[1]);
    }
  }
  Jt.prototype.clear = hw;
  Jt.prototype.delete = yw;
  Jt.prototype.get = gw;
  Jt.prototype.has = vw;
  Jt.prototype.set = xw;
  function Sw() {
    this.__data__ = new Jt(), this.size = 0;
  }
  function ww(e) {
    var t = this.__data__, n = t.delete(e);
    return this.size = t.size, n;
  }
  function Tw(e) {
    return this.__data__.get(e);
  }
  function Ew(e) {
    return this.__data__.has(e);
  }
  function so(e) {
    var t = typeof e;
    return e != null && (t == "object" || t == "function");
  }
  var Cw = "[object AsyncFunction]", Pw = "[object Function]", kw = "[object GeneratorFunction]", _w = "[object Proxy]";
  function og(e) {
    if (!so(e))
      return !1;
    var t = lr(e);
    return t == Pw || t == kw || t == Cw || t == _w;
  }
  var il = Rt["__core-js_shared__"], Gd = function() {
    var e = /[^.]+$/.exec(il && il.keys && il.keys.IE_PROTO || "");
    return e ? "Symbol(src)_1." + e : "";
  }();
  function Aw(e) {
    return !!Gd && Gd in e;
  }
  var Ow = Function.prototype, Fw = Ow.toString;
  function cr(e) {
    if (e != null) {
      try {
        return Fw.call(e);
      } catch {
      }
      try {
        return e + "";
      } catch {
      }
    }
    return "";
  }
  var jw = /[\\^$.*+?()[\]{}|]/g, Dw = /^\[object .+?Constructor\]$/, Mw = Function.prototype, Rw = Object.prototype, Lw = Mw.toString, Vw = Rw.hasOwnProperty, Nw = RegExp(
    "^" + Lw.call(Vw).replace(jw, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
  );
  function bw(e) {
    if (!so(e) || Aw(e))
      return !1;
    var t = og(e) ? Nw : Dw;
    return t.test(cr(e));
  }
  function $w(e, t) {
    return e == null ? void 0 : e[t];
  }
  function fr(e, t) {
    var n = $w(e, t);
    return bw(n) ? n : void 0;
  }
  var Xi = fr(Rt, "Map"), Zi = fr(Object, "create");
  function Iw() {
    this.__data__ = Zi ? Zi(null) : {}, this.size = 0;
  }
  function zw(e) {
    var t = this.has(e) && delete this.__data__[e];
    return this.size -= t ? 1 : 0, t;
  }
  var Bw = "__lodash_hash_undefined__", Uw = Object.prototype, Hw = Uw.hasOwnProperty;
  function Ww(e) {
    var t = this.__data__;
    if (Zi) {
      var n = t[e];
      return n === Bw ? void 0 : n;
    }
    return Hw.call(t, e) ? t[e] : void 0;
  }
  var Gw = Object.prototype, Kw = Gw.hasOwnProperty;
  function Qw(e) {
    var t = this.__data__;
    return Zi ? t[e] !== void 0 : Kw.call(t, e);
  }
  var Yw = "__lodash_hash_undefined__";
  function Xw(e, t) {
    var n = this.__data__;
    return this.size += this.has(e) ? 0 : 1, n[e] = Zi && t === void 0 ? Yw : t, this;
  }
  function nr(e) {
    var t = -1, n = e == null ? 0 : e.length;
    for (this.clear(); ++t < n; ) {
      var r = e[t];
      this.set(r[0], r[1]);
    }
  }
  nr.prototype.clear = Iw;
  nr.prototype.delete = zw;
  nr.prototype.get = Ww;
  nr.prototype.has = Qw;
  nr.prototype.set = Xw;
  function Zw() {
    this.size = 0, this.__data__ = {
      hash: new nr(),
      map: new (Xi || Jt)(),
      string: new nr()
    };
  }
  function qw(e) {
    var t = typeof e;
    return t == "string" || t == "number" || t == "symbol" || t == "boolean" ? e !== "__proto__" : e === null;
  }
  function oa(e, t) {
    var n = e.__data__;
    return qw(t) ? n[typeof t == "string" ? "string" : "hash"] : n.map;
  }
  function Jw(e) {
    var t = oa(this, e).delete(e);
    return this.size -= t ? 1 : 0, t;
  }
  function eT(e) {
    return oa(this, e).get(e);
  }
  function tT(e) {
    return oa(this, e).has(e);
  }
  function nT(e, t) {
    var n = oa(this, e), r = n.size;
    return n.set(e, t), this.size += n.size == r ? 0 : 1, this;
  }
  function Dn(e) {
    var t = -1, n = e == null ? 0 : e.length;
    for (this.clear(); ++t < n; ) {
      var r = e[t];
      this.set(r[0], r[1]);
    }
  }
  Dn.prototype.clear = Zw;
  Dn.prototype.delete = Jw;
  Dn.prototype.get = eT;
  Dn.prototype.has = tT;
  Dn.prototype.set = nT;
  var rT = 200;
  function iT(e, t) {
    var n = this.__data__;
    if (n instanceof Jt) {
      var r = n.__data__;
      if (!Xi || r.length < rT - 1)
        return r.push([e, t]), this.size = ++n.size, this;
      n = this.__data__ = new Dn(r);
    }
    return n.set(e, t), this.size = n.size, this;
  }
  function ei(e) {
    var t = this.__data__ = new Jt(e);
    this.size = t.size;
  }
  ei.prototype.clear = Sw;
  ei.prototype.delete = ww;
  ei.prototype.get = Tw;
  ei.prototype.has = Ew;
  ei.prototype.set = iT;
  function oT(e, t) {
    for (var n = -1, r = e == null ? 0 : e.length; ++n < r && t(e[n], n, e) !== !1; )
      ;
    return e;
  }
  var Kd = function() {
    try {
      var e = fr(Object, "defineProperty");
      return e({}, "", {}), e;
    } catch {
    }
  }();
  function sg(e, t, n) {
    t == "__proto__" && Kd ? Kd(e, t, {
      configurable: !0,
      enumerable: !0,
      value: n,
      writable: !0
    }) : e[t] = n;
  }
  var sT = Object.prototype, aT = sT.hasOwnProperty;
  function ag(e, t, n) {
    var r = e[t];
    (!(aT.call(e, t) && ig(r, n)) || n === void 0 && !(t in e)) && sg(e, t, n);
  }
  function sa(e, t, n, r) {
    var i = !n;
    n || (n = {});
    for (var o = -1, s = t.length; ++o < s; ) {
      var a = t[o], l = r ? r(n[a], e[a], a, n, e) : void 0;
      l === void 0 && (l = e[a]), i ? sg(n, a, l) : ag(n, a, l);
    }
    return n;
  }
  function lT(e, t) {
    for (var n = -1, r = Array(e); ++n < e; )
      r[n] = t(n);
    return r;
  }
  var uT = "[object Arguments]";
  function Qd(e) {
    return ur(e) && lr(e) == uT;
  }
  var lg = Object.prototype, cT = lg.hasOwnProperty, fT = lg.propertyIsEnumerable, dT = Qd(/* @__PURE__ */ function() {
    return arguments;
  }()) ? Qd : function(e) {
    return ur(e) && cT.call(e, "callee") && !fT.call(e, "callee");
  }, ao = Array.isArray;
  function hT() {
    return !1;
  }
  var ug = typeof qe == "object" && qe && !qe.nodeType && qe, Yd = ug && typeof Je == "object" && Je && !Je.nodeType && Je, pT = Yd && Yd.exports === ug, Xd = pT ? Rt.Buffer : void 0, mT = Xd ? Xd.isBuffer : void 0, cg = mT || hT, yT = 9007199254740991, gT = /^(?:0|[1-9]\d*)$/;
  function vT(e, t) {
    var n = typeof e;
    return t = t ?? yT, !!t && (n == "number" || n != "symbol" && gT.test(e)) && e > -1 && e % 1 == 0 && e < t;
  }
  var xT = 9007199254740991;
  function fg(e) {
    return typeof e == "number" && e > -1 && e % 1 == 0 && e <= xT;
  }
  var ST = "[object Arguments]", wT = "[object Array]", TT = "[object Boolean]", ET = "[object Date]", CT = "[object Error]", PT = "[object Function]", kT = "[object Map]", _T = "[object Number]", AT = "[object Object]", OT = "[object RegExp]", FT = "[object Set]", jT = "[object String]", DT = "[object WeakMap]", MT = "[object ArrayBuffer]", RT = "[object DataView]", LT = "[object Float32Array]", VT = "[object Float64Array]", NT = "[object Int8Array]", bT = "[object Int16Array]", $T = "[object Int32Array]", IT = "[object Uint8Array]", zT = "[object Uint8ClampedArray]", BT = "[object Uint16Array]", UT = "[object Uint32Array]", re = {};
  re[LT] = re[VT] = re[NT] = re[bT] = re[$T] = re[IT] = re[zT] = re[BT] = re[UT] = !0;
  re[ST] = re[wT] = re[MT] = re[TT] = re[RT] = re[ET] = re[CT] = re[PT] = re[kT] = re[_T] = re[AT] = re[OT] = re[FT] = re[jT] = re[DT] = !1;
  function HT(e) {
    return ur(e) && fg(e.length) && !!re[lr(e)];
  }
  function $c(e) {
    return function(t) {
      return e(t);
    };
  }
  var dg = typeof qe == "object" && qe && !qe.nodeType && qe, ki = dg && typeof Je == "object" && Je && !Je.nodeType && Je, WT = ki && ki.exports === dg, ol = WT && eg.process, Kr = function() {
    try {
      var e = ki && ki.require && ki.require("util").types;
      return e || ol && ol.binding && ol.binding("util");
    } catch {
    }
  }(), Zd = Kr && Kr.isTypedArray, GT = Zd ? $c(Zd) : HT, KT = Object.prototype, QT = KT.hasOwnProperty;
  function hg(e, t) {
    var n = ao(e), r = !n && dT(e), i = !n && !r && cg(e), o = !n && !r && !i && GT(e), s = n || r || i || o, a = s ? lT(e.length, String) : [], l = a.length;
    for (var u in e)
      (t || QT.call(e, u)) && !(s && // Safari 9 has enumerable `arguments.length` in strict mode.
      (u == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
      i && (u == "offset" || u == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
      o && (u == "buffer" || u == "byteLength" || u == "byteOffset") || // Skip index properties.
      vT(u, l))) && a.push(u);
    return a;
  }
  var YT = Object.prototype;
  function Ic(e) {
    var t = e && e.constructor, n = typeof t == "function" && t.prototype || YT;
    return e === n;
  }
  var XT = ng(Object.keys, Object), ZT = Object.prototype, qT = ZT.hasOwnProperty;
  function JT(e) {
    if (!Ic(e))
      return XT(e);
    var t = [];
    for (var n in Object(e))
      qT.call(e, n) && n != "constructor" && t.push(n);
    return t;
  }
  function pg(e) {
    return e != null && fg(e.length) && !og(e);
  }
  function zc(e) {
    return pg(e) ? hg(e) : JT(e);
  }
  function eE(e, t) {
    return e && sa(t, zc(t), e);
  }
  function tE(e) {
    var t = [];
    if (e != null)
      for (var n in Object(e))
        t.push(n);
    return t;
  }
  var nE = Object.prototype, rE = nE.hasOwnProperty;
  function iE(e) {
    if (!so(e))
      return tE(e);
    var t = Ic(e), n = [];
    for (var r in e)
      r == "constructor" && (t || !rE.call(e, r)) || n.push(r);
    return n;
  }
  function Bc(e) {
    return pg(e) ? hg(e, !0) : iE(e);
  }
  function oE(e, t) {
    return e && sa(t, Bc(t), e);
  }
  var mg = typeof qe == "object" && qe && !qe.nodeType && qe, qd = mg && typeof Je == "object" && Je && !Je.nodeType && Je, sE = qd && qd.exports === mg, Jd = sE ? Rt.Buffer : void 0, eh = Jd ? Jd.allocUnsafe : void 0;
  function aE(e, t) {
    if (t)
      return e.slice();
    var n = e.length, r = eh ? eh(n) : new e.constructor(n);
    return e.copy(r), r;
  }
  function yg(e, t) {
    var n = -1, r = e.length;
    for (t || (t = Array(r)); ++n < r; )
      t[n] = e[n];
    return t;
  }
  function lE(e, t) {
    for (var n = -1, r = e == null ? 0 : e.length, i = 0, o = []; ++n < r; ) {
      var s = e[n];
      t(s, n, e) && (o[i++] = s);
    }
    return o;
  }
  function gg() {
    return [];
  }
  var uE = Object.prototype, cE = uE.propertyIsEnumerable, th = Object.getOwnPropertySymbols, Uc = th ? function(e) {
    return e == null ? [] : (e = Object(e), lE(th(e), function(t) {
      return cE.call(e, t);
    }));
  } : gg;
  function fE(e, t) {
    return sa(e, Uc(e), t);
  }
  function vg(e, t) {
    for (var n = -1, r = t.length, i = e.length; ++n < r; )
      e[i + n] = t[n];
    return e;
  }
  var dE = Object.getOwnPropertySymbols, xg = dE ? function(e) {
    for (var t = []; e; )
      vg(t, Uc(e)), e = bc(e);
    return t;
  } : gg;
  function hE(e, t) {
    return sa(e, xg(e), t);
  }
  function Sg(e, t, n) {
    var r = t(e);
    return ao(e) ? r : vg(r, n(e));
  }
  function pE(e) {
    return Sg(e, zc, Uc);
  }
  function mE(e) {
    return Sg(e, Bc, xg);
  }
  var wu = fr(Rt, "DataView"), Tu = fr(Rt, "Promise"), Eu = fr(Rt, "Set"), Cu = fr(Rt, "WeakMap"), nh = "[object Map]", yE = "[object Object]", rh = "[object Promise]", ih = "[object Set]", oh = "[object WeakMap]", sh = "[object DataView]", gE = cr(wu), vE = cr(Xi), xE = cr(Tu), SE = cr(Eu), wE = cr(Cu), $n = lr;
  (wu && $n(new wu(new ArrayBuffer(1))) != sh || Xi && $n(new Xi()) != nh || Tu && $n(Tu.resolve()) != rh || Eu && $n(new Eu()) != ih || Cu && $n(new Cu()) != oh) && ($n = function(e) {
    var t = lr(e), n = t == yE ? e.constructor : void 0, r = n ? cr(n) : "";
    if (r)
      switch (r) {
        case gE:
          return sh;
        case vE:
          return nh;
        case xE:
          return rh;
        case SE:
          return ih;
        case wE:
          return oh;
      }
    return t;
  });
  const Hc = $n;
  var TE = Object.prototype, EE = TE.hasOwnProperty;
  function CE(e) {
    var t = e.length, n = new e.constructor(t);
    return t && typeof e[0] == "string" && EE.call(e, "index") && (n.index = e.index, n.input = e.input), n;
  }
  var ah = Rt.Uint8Array;
  function Wc(e) {
    var t = new e.constructor(e.byteLength);
    return new ah(t).set(new ah(e)), t;
  }
  function PE(e, t) {
    var n = t ? Wc(e.buffer) : e.buffer;
    return new e.constructor(n, e.byteOffset, e.byteLength);
  }
  var kE = /\w*$/;
  function _E(e) {
    var t = new e.constructor(e.source, kE.exec(e));
    return t.lastIndex = e.lastIndex, t;
  }
  var lh = kn ? kn.prototype : void 0, uh = lh ? lh.valueOf : void 0;
  function AE(e) {
    return uh ? Object(uh.call(e)) : {};
  }
  function OE(e, t) {
    var n = t ? Wc(e.buffer) : e.buffer;
    return new e.constructor(n, e.byteOffset, e.length);
  }
  var FE = "[object Boolean]", jE = "[object Date]", DE = "[object Map]", ME = "[object Number]", RE = "[object RegExp]", LE = "[object Set]", VE = "[object String]", NE = "[object Symbol]", bE = "[object ArrayBuffer]", $E = "[object DataView]", IE = "[object Float32Array]", zE = "[object Float64Array]", BE = "[object Int8Array]", UE = "[object Int16Array]", HE = "[object Int32Array]", WE = "[object Uint8Array]", GE = "[object Uint8ClampedArray]", KE = "[object Uint16Array]", QE = "[object Uint32Array]";
  function YE(e, t, n) {
    var r = e.constructor;
    switch (t) {
      case bE:
        return Wc(e);
      case FE:
      case jE:
        return new r(+e);
      case $E:
        return PE(e, n);
      case IE:
      case zE:
      case BE:
      case UE:
      case HE:
      case WE:
      case GE:
      case KE:
      case QE:
        return OE(e, n);
      case DE:
        return new r();
      case ME:
      case VE:
        return new r(e);
      case RE:
        return _E(e);
      case LE:
        return new r();
      case NE:
        return AE(e);
    }
  }
  var ch = Object.create, XE = /* @__PURE__ */ function() {
    function e() {
    }
    return function(t) {
      if (!so(t))
        return {};
      if (ch)
        return ch(t);
      e.prototype = t;
      var n = new e();
      return e.prototype = void 0, n;
    };
  }();
  function ZE(e) {
    return typeof e.constructor == "function" && !Ic(e) ? XE(bc(e)) : {};
  }
  var qE = "[object Map]";
  function JE(e) {
    return ur(e) && Hc(e) == qE;
  }
  var fh = Kr && Kr.isMap, eC = fh ? $c(fh) : JE, tC = "[object Set]";
  function nC(e) {
    return ur(e) && Hc(e) == tC;
  }
  var dh = Kr && Kr.isSet, rC = dh ? $c(dh) : nC, iC = 1, oC = 2, sC = 4, wg = "[object Arguments]", aC = "[object Array]", lC = "[object Boolean]", uC = "[object Date]", cC = "[object Error]", Tg = "[object Function]", fC = "[object GeneratorFunction]", dC = "[object Map]", hC = "[object Number]", Eg = "[object Object]", pC = "[object RegExp]", mC = "[object Set]", yC = "[object String]", gC = "[object Symbol]", vC = "[object WeakMap]", xC = "[object ArrayBuffer]", SC = "[object DataView]", wC = "[object Float32Array]", TC = "[object Float64Array]", EC = "[object Int8Array]", CC = "[object Int16Array]", PC = "[object Int32Array]", kC = "[object Uint8Array]", _C = "[object Uint8ClampedArray]", AC = "[object Uint16Array]", OC = "[object Uint32Array]", J = {};
  J[wg] = J[aC] = J[xC] = J[SC] = J[lC] = J[uC] = J[wC] = J[TC] = J[EC] = J[CC] = J[PC] = J[dC] = J[hC] = J[Eg] = J[pC] = J[mC] = J[yC] = J[gC] = J[kC] = J[_C] = J[AC] = J[OC] = !0;
  J[cC] = J[Tg] = J[vC] = !1;
  function _i(e, t, n, r, i, o) {
    var s, a = t & iC, l = t & oC, u = t & sC;
    if (n && (s = i ? n(e, r, i, o) : n(e)), s !== void 0)
      return s;
    if (!so(e))
      return e;
    var f = ao(e);
    if (f) {
      if (s = CE(e), !a)
        return yg(e, s);
    } else {
      var c = Hc(e), d = c == Tg || c == fC;
      if (cg(e))
        return aE(e, a);
      if (c == Eg || c == wg || d && !i) {
        if (s = l || d ? {} : ZE(e), !a)
          return l ? hE(e, oE(s, e)) : fE(e, eE(s, e));
      } else {
        if (!J[c])
          return i ? e : {};
        s = YE(e, c, a);
      }
    }
    o || (o = new ei());
    var p = o.get(e);
    if (p)
      return p;
    o.set(e, s), rC(e) ? e.forEach(function(T) {
      s.add(_i(T, t, n, T, e, o));
    }) : eC(e) && e.forEach(function(T, y) {
      s.set(y, _i(T, t, n, y, e, o));
    });
    var g = u ? l ? mE : pE : l ? Bc : zc, v = f ? void 0 : g(e);
    return oT(v || e, function(T, y) {
      v && (y = T, T = e[y]), ag(s, y, _i(T, t, n, y, e, o));
    }), s;
  }
  var FC = 4;
  function hh(e) {
    return _i(e, FC);
  }
  function Cg(e, t) {
    for (var n = -1, r = e == null ? 0 : e.length, i = Array(r); ++n < r; )
      i[n] = t(e[n], n, e);
    return i;
  }
  var jC = "[object Symbol]";
  function Gc(e) {
    return typeof e == "symbol" || ur(e) && lr(e) == jC;
  }
  var DC = "Expected a function";
  function Kc(e, t) {
    if (typeof e != "function" || t != null && typeof t != "function")
      throw new TypeError(DC);
    var n = function() {
      var r = arguments, i = t ? t.apply(this, r) : r[0], o = n.cache;
      if (o.has(i))
        return o.get(i);
      var s = e.apply(this, r);
      return n.cache = o.set(i, s) || o, s;
    };
    return n.cache = new (Kc.Cache || Dn)(), n;
  }
  Kc.Cache = Dn;
  var MC = 500;
  function RC(e) {
    var t = Kc(e, function(r) {
      return n.size === MC && n.clear(), r;
    }), n = t.cache;
    return t;
  }
  var LC = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, VC = /\\(\\)?/g, NC = RC(function(e) {
    var t = [];
    return e.charCodeAt(0) === 46 && t.push(""), e.replace(LC, function(n, r, i, o) {
      t.push(i ? o.replace(VC, "$1") : r || n);
    }), t;
  });
  const bC = NC;
  var $C = 1 / 0;
  function IC(e) {
    if (typeof e == "string" || Gc(e))
      return e;
    var t = e + "";
    return t == "0" && 1 / e == -$C ? "-0" : t;
  }
  var zC = 1 / 0, ph = kn ? kn.prototype : void 0, mh = ph ? ph.toString : void 0;
  function Pg(e) {
    if (typeof e == "string")
      return e;
    if (ao(e))
      return Cg(e, Pg) + "";
    if (Gc(e))
      return mh ? mh.call(e) : "";
    var t = e + "";
    return t == "0" && 1 / e == -zC ? "-0" : t;
  }
  function BC(e) {
    return e == null ? "" : Pg(e);
  }
  function kg(e) {
    return ao(e) ? Cg(e, IC) : Gc(e) ? [e] : yg(bC(BC(e)));
  }
  var _g = { exports: {} }, Z = {};
  /** @license React v16.13.1
   * react-is.production.min.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */
  var we = typeof Symbol == "function" && Symbol.for, Qc = we ? Symbol.for("react.element") : 60103, Yc = we ? Symbol.for("react.portal") : 60106, aa = we ? Symbol.for("react.fragment") : 60107, la = we ? Symbol.for("react.strict_mode") : 60108, ua = we ? Symbol.for("react.profiler") : 60114, ca = we ? Symbol.for("react.provider") : 60109, fa = we ? Symbol.for("react.context") : 60110, Xc = we ? Symbol.for("react.async_mode") : 60111, da = we ? Symbol.for("react.concurrent_mode") : 60111, ha = we ? Symbol.for("react.forward_ref") : 60112, pa = we ? Symbol.for("react.suspense") : 60113, UC = we ? Symbol.for("react.suspense_list") : 60120, ma = we ? Symbol.for("react.memo") : 60115, ya = we ? Symbol.for("react.lazy") : 60116, HC = we ? Symbol.for("react.block") : 60121, WC = we ? Symbol.for("react.fundamental") : 60117, GC = we ? Symbol.for("react.responder") : 60118, KC = we ? Symbol.for("react.scope") : 60119;
  function ot(e) {
    if (typeof e == "object" && e !== null) {
      var t = e.$$typeof;
      switch (t) {
        case Qc:
          switch (e = e.type, e) {
            case Xc:
            case da:
            case aa:
            case ua:
            case la:
            case pa:
              return e;
            default:
              switch (e = e && e.$$typeof, e) {
                case fa:
                case ha:
                case ya:
                case ma:
                case ca:
                  return e;
                default:
                  return t;
              }
          }
        case Yc:
          return t;
      }
    }
  }
  function Ag(e) {
    return ot(e) === da;
  }
  Z.AsyncMode = Xc;
  Z.ConcurrentMode = da;
  Z.ContextConsumer = fa;
  Z.ContextProvider = ca;
  Z.Element = Qc;
  Z.ForwardRef = ha;
  Z.Fragment = aa;
  Z.Lazy = ya;
  Z.Memo = ma;
  Z.Portal = Yc;
  Z.Profiler = ua;
  Z.StrictMode = la;
  Z.Suspense = pa;
  Z.isAsyncMode = function(e) {
    return Ag(e) || ot(e) === Xc;
  };
  Z.isConcurrentMode = Ag;
  Z.isContextConsumer = function(e) {
    return ot(e) === fa;
  };
  Z.isContextProvider = function(e) {
    return ot(e) === ca;
  };
  Z.isElement = function(e) {
    return typeof e == "object" && e !== null && e.$$typeof === Qc;
  };
  Z.isForwardRef = function(e) {
    return ot(e) === ha;
  };
  Z.isFragment = function(e) {
    return ot(e) === aa;
  };
  Z.isLazy = function(e) {
    return ot(e) === ya;
  };
  Z.isMemo = function(e) {
    return ot(e) === ma;
  };
  Z.isPortal = function(e) {
    return ot(e) === Yc;
  };
  Z.isProfiler = function(e) {
    return ot(e) === ua;
  };
  Z.isStrictMode = function(e) {
    return ot(e) === la;
  };
  Z.isSuspense = function(e) {
    return ot(e) === pa;
  };
  Z.isValidElementType = function(e) {
    return typeof e == "string" || typeof e == "function" || e === aa || e === da || e === ua || e === la || e === pa || e === UC || typeof e == "object" && e !== null && (e.$$typeof === ya || e.$$typeof === ma || e.$$typeof === ca || e.$$typeof === fa || e.$$typeof === ha || e.$$typeof === WC || e.$$typeof === GC || e.$$typeof === KC || e.$$typeof === HC);
  };
  Z.typeOf = ot;
  _g.exports = Z;
  var QC = _g.exports, Zc = QC, YC = {
    childContextTypes: !0,
    contextType: !0,
    contextTypes: !0,
    defaultProps: !0,
    displayName: !0,
    getDefaultProps: !0,
    getDerivedStateFromError: !0,
    getDerivedStateFromProps: !0,
    mixins: !0,
    propTypes: !0,
    type: !0
  }, XC = {
    name: !0,
    length: !0,
    prototype: !0,
    caller: !0,
    callee: !0,
    arguments: !0,
    arity: !0
  }, ZC = {
    $$typeof: !0,
    render: !0,
    defaultProps: !0,
    displayName: !0,
    propTypes: !0
  }, Og = {
    $$typeof: !0,
    compare: !0,
    defaultProps: !0,
    displayName: !0,
    propTypes: !0,
    type: !0
  }, qc = {};
  qc[Zc.ForwardRef] = ZC;
  qc[Zc.Memo] = Og;
  function yh(e) {
    return Zc.isMemo(e) ? Og : qc[e.$$typeof] || YC;
  }
  var qC = Object.defineProperty, JC = Object.getOwnPropertyNames, gh = Object.getOwnPropertySymbols, eP = Object.getOwnPropertyDescriptor, tP = Object.getPrototypeOf, vh = Object.prototype;
  function Fg(e, t, n) {
    if (typeof t != "string") {
      if (vh) {
        var r = tP(t);
        r && r !== vh && Fg(e, r, n);
      }
      var i = JC(t);
      gh && (i = i.concat(gh(t)));
      for (var o = yh(e), s = yh(t), a = 0; a < i.length; ++a) {
        var l = i[a];
        if (!XC[l] && !(n && n[l]) && !(s && s[l]) && !(o && o[l])) {
          var u = eP(t, l);
          try {
            qC(e, l, u);
          } catch {
          }
        }
      }
    }
    return e;
  }
  var nP = Fg;
  const rP = /* @__PURE__ */ bs(nP);
  var iP = 1, oP = 4;
  function sP(e) {
    return _i(e, iP | oP);
  }
  function Y() {
    return Y = Object.assign || function(e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = arguments[t];
        for (var r in n)
          Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
      }
      return e;
    }, Y.apply(this, arguments);
  }
  function jg(e, t) {
    e.prototype = Object.create(t.prototype), e.prototype.constructor = e, e.__proto__ = t;
  }
  function dn(e, t) {
    if (e == null)
      return {};
    var n = {}, r = Object.keys(e), i, o;
    for (o = 0; o < r.length; o++)
      i = r[o], !(t.indexOf(i) >= 0) && (n[i] = e[i]);
    return n;
  }
  function xh(e) {
    if (e === void 0)
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return e;
  }
  var ga = /* @__PURE__ */ S.createContext(void 0);
  ga.displayName = "FormikContext";
  var aP = ga.Provider, lP = ga.Consumer;
  function lo() {
    var e = S.useContext(ga);
    return e;
  }
  var Sh = function(t) {
    return Array.isArray(t) && t.length === 0;
  }, Ee = function(t) {
    return typeof t == "function";
  }, uo = function(t) {
    return t !== null && typeof t == "object";
  }, uP = function(t) {
    return String(Math.floor(Number(t))) === t;
  }, sl = function(t) {
    return Object.prototype.toString.call(t) === "[object String]";
  }, Dg = function(t) {
    return S.Children.count(t) === 0;
  }, al = function(t) {
    return uo(t) && Ee(t.then);
  };
  function oe(e, t, n, r) {
    r === void 0 && (r = 0);
    for (var i = kg(t); e && r < i.length; )
      e = e[i[r++]];
    return r !== i.length && !e || e === void 0 ? n : e;
  }
  function jt(e, t, n) {
    for (var r = hh(e), i = r, o = 0, s = kg(t); o < s.length - 1; o++) {
      var a = s[o], l = oe(e, s.slice(0, o + 1));
      if (l && (uo(l) || Array.isArray(l)))
        i = i[a] = hh(l);
      else {
        var u = s[o + 1];
        i = i[a] = uP(u) && Number(u) >= 0 ? [] : {};
      }
    }
    return (o === 0 ? e : i)[s[o]] === n ? e : (n === void 0 ? delete i[s[o]] : i[s[o]] = n, o === 0 && n === void 0 && delete r[s[o]], r);
  }
  function Mg(e, t, n, r) {
    n === void 0 && (n = /* @__PURE__ */ new WeakMap()), r === void 0 && (r = {});
    for (var i = 0, o = Object.keys(e); i < o.length; i++) {
      var s = o[i], a = e[s];
      uo(a) ? n.get(a) || (n.set(a, !0), r[s] = Array.isArray(a) ? [] : {}, Mg(a, t, n, r[s])) : r[s] = t;
    }
    return r;
  }
  function cP(e, t) {
    switch (t.type) {
      case "SET_VALUES":
        return Y({}, e, {
          values: t.payload
        });
      case "SET_TOUCHED":
        return Y({}, e, {
          touched: t.payload
        });
      case "SET_ERRORS":
        return sn(e.errors, t.payload) ? e : Y({}, e, {
          errors: t.payload
        });
      case "SET_STATUS":
        return Y({}, e, {
          status: t.payload
        });
      case "SET_ISSUBMITTING":
        return Y({}, e, {
          isSubmitting: t.payload
        });
      case "SET_ISVALIDATING":
        return Y({}, e, {
          isValidating: t.payload
        });
      case "SET_FIELD_VALUE":
        return Y({}, e, {
          values: jt(e.values, t.payload.field, t.payload.value)
        });
      case "SET_FIELD_TOUCHED":
        return Y({}, e, {
          touched: jt(e.touched, t.payload.field, t.payload.value)
        });
      case "SET_FIELD_ERROR":
        return Y({}, e, {
          errors: jt(e.errors, t.payload.field, t.payload.value)
        });
      case "RESET_FORM":
        return Y({}, e, t.payload);
      case "SET_FORMIK_STATE":
        return t.payload(e);
      case "SUBMIT_ATTEMPT":
        return Y({}, e, {
          touched: Mg(e.values, !0),
          isSubmitting: !0,
          submitCount: e.submitCount + 1
        });
      case "SUBMIT_FAILURE":
        return Y({}, e, {
          isSubmitting: !1
        });
      case "SUBMIT_SUCCESS":
        return Y({}, e, {
          isSubmitting: !1
        });
      default:
        return e;
    }
  }
  var Ln = {}, Lo = {};
  function fP(e) {
    var t = e.validateOnChange, n = t === void 0 ? !0 : t, r = e.validateOnBlur, i = r === void 0 ? !0 : r, o = e.validateOnMount, s = o === void 0 ? !1 : o, a = e.isInitialValid, l = e.enableReinitialize, u = l === void 0 ? !1 : l, f = e.onSubmit, c = dn(e, ["validateOnChange", "validateOnBlur", "validateOnMount", "isInitialValid", "enableReinitialize", "onSubmit"]), d = Y({
      validateOnChange: n,
      validateOnBlur: i,
      validateOnMount: s,
      onSubmit: f
    }, c), p = S.useRef(d.initialValues), g = S.useRef(d.initialErrors || Ln), v = S.useRef(d.initialTouched || Lo), T = S.useRef(d.initialStatus), y = S.useRef(!1), h = S.useRef({});
    S.useEffect(function() {
      return y.current = !0, function() {
        y.current = !1;
      };
    }, []);
    var m = S.useState(0), x = m[1], k = S.useRef({
      values: d.initialValues,
      errors: d.initialErrors || Ln,
      touched: d.initialTouched || Lo,
      status: d.initialStatus,
      isSubmitting: !1,
      isValidating: !1,
      submitCount: 0
    }), E = k.current, C = S.useCallback(function(w) {
      var D = k.current;
      k.current = cP(D, w), D !== k.current && x(function(N) {
        return N + 1;
      });
    }, []), _ = S.useCallback(function(w, D) {
      return new Promise(function(N, b) {
        var z = d.validate(w, D);
        z == null ? N(Ln) : al(z) ? z.then(function(Q) {
          N(Q || Ln);
        }, function(Q) {
          b(Q);
        }) : N(z);
      });
    }, [d.validate]), L = S.useCallback(function(w, D) {
      var N = d.validationSchema, b = Ee(N) ? N(D) : N, z = D && b.validateAt ? b.validateAt(D, w) : pP(w, b);
      return new Promise(function(Q, ve) {
        z.then(function() {
          Q(Ln);
        }, function(Lt) {
          Lt.name === "ValidationError" ? Q(hP(Lt)) : ve(Lt);
        });
      });
    }, [d.validationSchema]), V = S.useCallback(function(w, D) {
      return new Promise(function(N) {
        return N(h.current[w].validate(D));
      });
    }, []), I = S.useCallback(function(w) {
      var D = Object.keys(h.current).filter(function(b) {
        return Ee(h.current[b].validate);
      }), N = D.length > 0 ? D.map(function(b) {
        return V(b, oe(w, b));
      }) : [Promise.resolve("DO_NOT_DELETE_YOU_WILL_BE_FIRED")];
      return Promise.all(N).then(function(b) {
        return b.reduce(function(z, Q, ve) {
          return Q === "DO_NOT_DELETE_YOU_WILL_BE_FIRED" || Q && (z = jt(z, D[ve], Q)), z;
        }, {});
      });
    }, [V]), G = S.useCallback(function(w) {
      return Promise.all([I(w), d.validationSchema ? L(w) : {}, d.validate ? _(w) : {}]).then(function(D) {
        var N = D[0], b = D[1], z = D[2], Q = xu.all([N, b, z], {
          arrayMerge: mP
        });
        return Q;
      });
    }, [d.validate, d.validationSchema, I, _, L]), W = st(function(w) {
      return w === void 0 && (w = E.values), C({
        type: "SET_ISVALIDATING",
        payload: !0
      }), G(w).then(function(D) {
        return y.current && (C({
          type: "SET_ISVALIDATING",
          payload: !1
        }), C({
          type: "SET_ERRORS",
          payload: D
        })), D;
      });
    });
    S.useEffect(function() {
      s && y.current === !0 && sn(p.current, d.initialValues) && W(p.current);
    }, [s, W]);
    var K = S.useCallback(function(w) {
      var D = w && w.values ? w.values : p.current, N = w && w.errors ? w.errors : g.current ? g.current : d.initialErrors || {}, b = w && w.touched ? w.touched : v.current ? v.current : d.initialTouched || {}, z = w && w.status ? w.status : T.current ? T.current : d.initialStatus;
      p.current = D, g.current = N, v.current = b, T.current = z;
      var Q = function() {
        C({
          type: "RESET_FORM",
          payload: {
            isSubmitting: !!w && !!w.isSubmitting,
            errors: N,
            touched: b,
            status: z,
            values: D,
            isValidating: !!w && !!w.isValidating,
            submitCount: w && w.submitCount && typeof w.submitCount == "number" ? w.submitCount : 0
          }
        });
      };
      if (d.onReset) {
        var ve = d.onReset(E.values, Cf);
        al(ve) ? ve.then(Q) : Q();
      } else
        Q();
    }, [d.initialErrors, d.initialStatus, d.initialTouched, d.onReset]);
    S.useEffect(function() {
      y.current === !0 && !sn(p.current, d.initialValues) && u && (p.current = d.initialValues, K(), s && W(p.current));
    }, [u, d.initialValues, K, s, W]), S.useEffect(function() {
      u && y.current === !0 && !sn(g.current, d.initialErrors) && (g.current = d.initialErrors || Ln, C({
        type: "SET_ERRORS",
        payload: d.initialErrors || Ln
      }));
    }, [u, d.initialErrors]), S.useEffect(function() {
      u && y.current === !0 && !sn(v.current, d.initialTouched) && (v.current = d.initialTouched || Lo, C({
        type: "SET_TOUCHED",
        payload: d.initialTouched || Lo
      }));
    }, [u, d.initialTouched]), S.useEffect(function() {
      u && y.current === !0 && !sn(T.current, d.initialStatus) && (T.current = d.initialStatus, C({
        type: "SET_STATUS",
        payload: d.initialStatus
      }));
    }, [u, d.initialStatus, d.initialTouched]);
    var Qe = st(function(w) {
      if (h.current[w] && Ee(h.current[w].validate)) {
        var D = oe(E.values, w), N = h.current[w].validate(D);
        return al(N) ? (C({
          type: "SET_ISVALIDATING",
          payload: !0
        }), N.then(function(b) {
          return b;
        }).then(function(b) {
          C({
            type: "SET_FIELD_ERROR",
            payload: {
              field: w,
              value: b
            }
          }), C({
            type: "SET_ISVALIDATING",
            payload: !1
          });
        })) : (C({
          type: "SET_FIELD_ERROR",
          payload: {
            field: w,
            value: N
          }
        }), Promise.resolve(N));
      } else if (d.validationSchema)
        return C({
          type: "SET_ISVALIDATING",
          payload: !0
        }), L(E.values, w).then(function(b) {
          return b;
        }).then(function(b) {
          C({
            type: "SET_FIELD_ERROR",
            payload: {
              field: w,
              value: oe(b, w)
            }
          }), C({
            type: "SET_ISVALIDATING",
            payload: !1
          });
        });
      return Promise.resolve();
    }), q = S.useCallback(function(w, D) {
      var N = D.validate;
      h.current[w] = {
        validate: N
      };
    }, []), ke = S.useCallback(function(w) {
      delete h.current[w];
    }, []), P = st(function(w, D) {
      C({
        type: "SET_TOUCHED",
        payload: w
      });
      var N = D === void 0 ? i : D;
      return N ? W(E.values) : Promise.resolve();
    }), O = S.useCallback(function(w) {
      C({
        type: "SET_ERRORS",
        payload: w
      });
    }, []), j = st(function(w, D) {
      var N = Ee(w) ? w(E.values) : w;
      C({
        type: "SET_VALUES",
        payload: N
      });
      var b = D === void 0 ? n : D;
      return b ? W(N) : Promise.resolve();
    }), R = S.useCallback(function(w, D) {
      C({
        type: "SET_FIELD_ERROR",
        payload: {
          field: w,
          value: D
        }
      });
    }, []), U = st(function(w, D, N) {
      C({
        type: "SET_FIELD_VALUE",
        payload: {
          field: w,
          value: D
        }
      });
      var b = N === void 0 ? n : N;
      return b ? W(jt(E.values, w, D)) : Promise.resolve();
    }), Me = S.useCallback(function(w, D) {
      var N = D, b = w, z;
      if (!sl(w)) {
        w.persist && w.persist();
        var Q = w.target ? w.target : w.currentTarget, ve = Q.type, Lt = Q.name, Aa = Q.id, Oa = Q.value, y0 = Q.checked, wO = Q.outerHTML, Pf = Q.options, g0 = Q.multiple;
        N = D || Lt || Aa, b = /number|range/.test(ve) ? (z = parseFloat(Oa), isNaN(z) ? "" : z) : /checkbox/.test(ve) ? gP(oe(E.values, N), y0, Oa) : Pf && g0 ? yP(Pf) : Oa;
      }
      N && U(N, b);
    }, [U, E.values]), Re = st(function(w) {
      if (sl(w))
        return function(D) {
          return Me(D, w);
        };
      Me(w);
    }), Ye = st(function(w, D, N) {
      D === void 0 && (D = !0), C({
        type: "SET_FIELD_TOUCHED",
        payload: {
          field: w,
          value: D
        }
      });
      var b = N === void 0 ? i : N;
      return b ? W(E.values) : Promise.resolve();
    }), _e = S.useCallback(function(w, D) {
      w.persist && w.persist();
      var N = w.target, b = N.name, z = N.id, Q = N.outerHTML, ve = D || b || z;
      Ye(ve, !0);
    }, [Ye]), mt = st(function(w) {
      if (sl(w))
        return function(D) {
          return _e(D, w);
        };
      _e(w);
    }), yo = S.useCallback(function(w) {
      Ee(w) ? C({
        type: "SET_FORMIK_STATE",
        payload: w
      }) : C({
        type: "SET_FORMIK_STATE",
        payload: function() {
          return w;
        }
      });
    }, []), pr = S.useCallback(function(w) {
      C({
        type: "SET_STATUS",
        payload: w
      });
    }, []), Rn = S.useCallback(function(w) {
      C({
        type: "SET_ISSUBMITTING",
        payload: w
      });
    }, []), yt = st(function() {
      return C({
        type: "SUBMIT_ATTEMPT"
      }), W().then(function(w) {
        var D = w instanceof Error, N = !D && Object.keys(w).length === 0;
        if (N) {
          var b;
          try {
            if (b = u0(), b === void 0)
              return;
          } catch (z) {
            throw z;
          }
          return Promise.resolve(b).then(function(z) {
            return y.current && C({
              type: "SUBMIT_SUCCESS"
            }), z;
          }).catch(function(z) {
            if (y.current)
              throw C({
                type: "SUBMIT_FAILURE"
              }), z;
          });
        } else if (y.current && (C({
          type: "SUBMIT_FAILURE"
        }), D))
          throw w;
      });
    }), Ef = st(function(w) {
      w && w.preventDefault && Ee(w.preventDefault) && w.preventDefault(), w && w.stopPropagation && Ee(w.stopPropagation) && w.stopPropagation(), yt().catch(function(D) {
        console.warn("Warning: An unhandled error was caught from submitForm()", D);
      });
    }), Cf = {
      resetForm: K,
      validateForm: W,
      validateField: Qe,
      setErrors: O,
      setFieldError: R,
      setFieldTouched: Ye,
      setFieldValue: U,
      setStatus: pr,
      setSubmitting: Rn,
      setTouched: P,
      setValues: j,
      setFormikState: yo,
      submitForm: yt
    }, u0 = st(function() {
      return f(E.values, Cf);
    }), c0 = st(function(w) {
      w && w.preventDefault && Ee(w.preventDefault) && w.preventDefault(), w && w.stopPropagation && Ee(w.stopPropagation) && w.stopPropagation(), K();
    }), f0 = S.useCallback(function(w) {
      return {
        value: oe(E.values, w),
        error: oe(E.errors, w),
        touched: !!oe(E.touched, w),
        initialValue: oe(p.current, w),
        initialTouched: !!oe(v.current, w),
        initialError: oe(g.current, w)
      };
    }, [E.errors, E.touched, E.values]), d0 = S.useCallback(function(w) {
      return {
        setValue: function(N, b) {
          return U(w, N, b);
        },
        setTouched: function(N, b) {
          return Ye(w, N, b);
        },
        setError: function(N) {
          return R(w, N);
        }
      };
    }, [U, Ye, R]), h0 = S.useCallback(function(w) {
      var D = uo(w), N = D ? w.name : w, b = oe(E.values, N), z = {
        name: N,
        value: b,
        onChange: Re,
        onBlur: mt
      };
      if (D) {
        var Q = w.type, ve = w.value, Lt = w.as, Aa = w.multiple;
        Q === "checkbox" ? ve === void 0 ? z.checked = !!b : (z.checked = !!(Array.isArray(b) && ~b.indexOf(ve)), z.value = ve) : Q === "radio" ? (z.checked = b === ve, z.value = ve) : Lt === "select" && Aa && (z.value = z.value || [], z.multiple = !0);
      }
      return z;
    }, [mt, Re, E.values]), _a = S.useMemo(function() {
      return !sn(p.current, E.values);
    }, [p.current, E.values]), p0 = S.useMemo(function() {
      return typeof a < "u" ? _a ? E.errors && Object.keys(E.errors).length === 0 : a !== !1 && Ee(a) ? a(d) : a : E.errors && Object.keys(E.errors).length === 0;
    }, [a, _a, E.errors, d]), m0 = Y({}, E, {
      initialValues: p.current,
      initialErrors: g.current,
      initialTouched: v.current,
      initialStatus: T.current,
      handleBlur: mt,
      handleChange: Re,
      handleReset: c0,
      handleSubmit: Ef,
      resetForm: K,
      setErrors: O,
      setFormikState: yo,
      setFieldTouched: Ye,
      setFieldValue: U,
      setFieldError: R,
      setStatus: pr,
      setSubmitting: Rn,
      setTouched: P,
      setValues: j,
      submitForm: yt,
      validateForm: W,
      validateField: Qe,
      isValid: p0,
      dirty: _a,
      unregisterField: ke,
      registerField: q,
      getFieldProps: h0,
      getFieldMeta: f0,
      getFieldHelpers: d0,
      validateOnBlur: i,
      validateOnChange: n,
      validateOnMount: s
    });
    return m0;
  }
  function dP(e) {
    var t = fP(e), n = e.component, r = e.children, i = e.render, o = e.innerRef;
    return S.useImperativeHandle(o, function() {
      return t;
    }), S.createElement(aP, {
      value: t
    }, n ? S.createElement(n, t) : i ? i(t) : r ? Ee(r) ? r(t) : Dg(r) ? null : S.Children.only(r) : null);
  }
  function hP(e) {
    var t = {};
    if (e.inner) {
      if (e.inner.length === 0)
        return jt(t, e.path, e.message);
      for (var i = e.inner, n = Array.isArray(i), r = 0, i = n ? i : i[Symbol.iterator](); ; ) {
        var o;
        if (n) {
          if (r >= i.length)
            break;
          o = i[r++];
        } else {
          if (r = i.next(), r.done)
            break;
          o = r.value;
        }
        var s = o;
        oe(t, s.path) || (t = jt(t, s.path, s.message));
      }
    }
    return t;
  }
  function pP(e, t, n, r) {
    n === void 0 && (n = !1);
    var i = Pu(e);
    return t[n ? "validateSync" : "validate"](i, {
      abortEarly: !1,
      context: r || i
    });
  }
  function Pu(e) {
    var t = Array.isArray(e) ? [] : {};
    for (var n in e)
      if (Object.prototype.hasOwnProperty.call(e, n)) {
        var r = String(n);
        Array.isArray(e[r]) === !0 ? t[r] = e[r].map(function(i) {
          return Array.isArray(i) === !0 || Ud(i) ? Pu(i) : i !== "" ? i : void 0;
        }) : Ud(e[r]) ? t[r] = Pu(e[r]) : t[r] = e[r] !== "" ? e[r] : void 0;
      }
    return t;
  }
  function mP(e, t, n) {
    var r = e.slice();
    return t.forEach(function(o, s) {
      if (typeof r[s] > "u") {
        var a = n.clone !== !1, l = a && n.isMergeableObject(o);
        r[s] = l ? xu(Array.isArray(o) ? [] : {}, o, n) : o;
      } else
        n.isMergeableObject(o) ? r[s] = xu(e[s], o, n) : e.indexOf(o) === -1 && r.push(o);
    }), r;
  }
  function yP(e) {
    return Array.from(e).filter(function(t) {
      return t.selected;
    }).map(function(t) {
      return t.value;
    });
  }
  function gP(e, t, n) {
    if (typeof e == "boolean")
      return !!t;
    var r = [], i = !1, o = -1;
    if (Array.isArray(e))
      r = e, o = e.indexOf(n), i = o >= 0;
    else if (!n || n == "true" || n == "false")
      return !!t;
    return t && n && !i ? r.concat(n) : i ? r.slice(0, o).concat(r.slice(o + 1)) : r;
  }
  var vP = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u" ? S.useLayoutEffect : S.useEffect;
  function st(e) {
    var t = S.useRef(e);
    return vP(function() {
      t.current = e;
    }), S.useCallback(function() {
      for (var n = arguments.length, r = new Array(n), i = 0; i < n; i++)
        r[i] = arguments[i];
      return t.current.apply(void 0, r);
    }, []);
  }
  function xP(e) {
    var t = e.validate, n = e.name, r = e.render, i = e.children, o = e.as, s = e.component, a = e.className, l = dn(e, ["validate", "name", "render", "children", "as", "component", "className"]), u = lo(), f = dn(u, ["validate", "validationSchema"]), c = f.registerField, d = f.unregisterField;
    S.useEffect(function() {
      return c(n, {
        validate: t
      }), function() {
        d(n);
      };
    }, [c, d, n, t]);
    var p = f.getFieldProps(Y({
      name: n
    }, l)), g = f.getFieldMeta(n), v = {
      field: p,
      form: f
    };
    if (r)
      return r(Y({}, v, {
        meta: g
      }));
    if (Ee(i))
      return i(Y({}, v, {
        meta: g
      }));
    if (s) {
      if (typeof s == "string") {
        var T = l.innerRef, y = dn(l, ["innerRef"]);
        return S.createElement(s, Y({
          ref: T
        }, p, y, {
          className: a
        }), i);
      }
      return S.createElement(s, Y({
        field: p,
        form: f
      }, l, {
        className: a
      }), i);
    }
    var h = o || "input";
    if (typeof h == "string") {
      var m = l.innerRef, x = dn(l, ["innerRef"]);
      return S.createElement(h, Y({
        ref: m
      }, p, x, {
        className: a
      }), i);
    }
    return S.createElement(h, Y({}, p, l, {
      className: a
    }), i);
  }
  var Rg = /* @__PURE__ */ S.forwardRef(function(e, t) {
    var n = e.action, r = dn(e, ["action"]), i = n ?? "#", o = lo(), s = o.handleReset, a = o.handleSubmit;
    return S.createElement("form", Y({
      onSubmit: a,
      ref: t,
      onReset: s,
      action: i
    }, r));
  });
  Rg.displayName = "Form";
  function SP(e) {
    var t = function(i) {
      return S.createElement(lP, null, function(o) {
        return S.createElement(e, Y({}, i, {
          formik: o
        }));
      });
    }, n = e.displayName || e.name || e.constructor && e.constructor.name || "Component";
    return t.WrappedComponent = e, t.displayName = "FormikConnect(" + n + ")", rP(
      t,
      e
      // cast type to ComponentClass (even if SFC)
    );
  }
  var wP = function(t, n, r) {
    var i = rr(t), o = i[n];
    return i.splice(n, 1), i.splice(r, 0, o), i;
  }, TP = function(t, n, r) {
    var i = rr(t), o = i[n];
    return i[n] = i[r], i[r] = o, i;
  }, ll = function(t, n, r) {
    var i = rr(t);
    return i.splice(n, 0, r), i;
  }, EP = function(t, n, r) {
    var i = rr(t);
    return i[n] = r, i;
  }, rr = function(t) {
    if (t) {
      if (Array.isArray(t))
        return [].concat(t);
      var n = Object.keys(t).map(function(r) {
        return parseInt(r);
      }).reduce(function(r, i) {
        return i > r ? i : r;
      }, 0);
      return Array.from(Y({}, t, {
        length: n + 1
      }));
    } else
      return [];
  }, wh = function(t, n) {
    var r = typeof t == "function" ? t : n;
    return function(i) {
      if (Array.isArray(i) || uo(i)) {
        var o = rr(i);
        return r(o);
      }
      return i;
    };
  }, CP = /* @__PURE__ */ function(e) {
    jg(t, e);
    function t(r) {
      var i;
      return i = e.call(this, r) || this, i.updateArrayField = function(o, s, a) {
        var l = i.props, u = l.name, f = l.formik.setFormikState;
        f(function(c) {
          var d = wh(a, o), p = wh(s, o), g = jt(c.values, u, o(oe(c.values, u))), v = a ? d(oe(c.errors, u)) : void 0, T = s ? p(oe(c.touched, u)) : void 0;
          return Sh(v) && (v = void 0), Sh(T) && (T = void 0), Y({}, c, {
            values: g,
            errors: a ? jt(c.errors, u, v) : c.errors,
            touched: s ? jt(c.touched, u, T) : c.touched
          });
        });
      }, i.push = function(o) {
        return i.updateArrayField(function(s) {
          return [].concat(rr(s), [sP(o)]);
        }, !1, !1);
      }, i.handlePush = function(o) {
        return function() {
          return i.push(o);
        };
      }, i.swap = function(o, s) {
        return i.updateArrayField(function(a) {
          return TP(a, o, s);
        }, !0, !0);
      }, i.handleSwap = function(o, s) {
        return function() {
          return i.swap(o, s);
        };
      }, i.move = function(o, s) {
        return i.updateArrayField(function(a) {
          return wP(a, o, s);
        }, !0, !0);
      }, i.handleMove = function(o, s) {
        return function() {
          return i.move(o, s);
        };
      }, i.insert = function(o, s) {
        return i.updateArrayField(function(a) {
          return ll(a, o, s);
        }, function(a) {
          return ll(a, o, null);
        }, function(a) {
          return ll(a, o, null);
        });
      }, i.handleInsert = function(o, s) {
        return function() {
          return i.insert(o, s);
        };
      }, i.replace = function(o, s) {
        return i.updateArrayField(function(a) {
          return EP(a, o, s);
        }, !1, !1);
      }, i.handleReplace = function(o, s) {
        return function() {
          return i.replace(o, s);
        };
      }, i.unshift = function(o) {
        var s = -1;
        return i.updateArrayField(function(a) {
          var l = a ? [o].concat(a) : [o];
          return s = l.length, l;
        }, function(a) {
          return a ? [null].concat(a) : [null];
        }, function(a) {
          return a ? [null].concat(a) : [null];
        }), s;
      }, i.handleUnshift = function(o) {
        return function() {
          return i.unshift(o);
        };
      }, i.handleRemove = function(o) {
        return function() {
          return i.remove(o);
        };
      }, i.handlePop = function() {
        return function() {
          return i.pop();
        };
      }, i.remove = i.remove.bind(xh(i)), i.pop = i.pop.bind(xh(i)), i;
    }
    var n = t.prototype;
    return n.componentDidUpdate = function(i) {
      this.props.validateOnChange && this.props.formik.validateOnChange && !sn(oe(i.formik.values, i.name), oe(this.props.formik.values, this.props.name)) && this.props.formik.validateForm(this.props.formik.values);
    }, n.remove = function(i) {
      var o;
      return this.updateArrayField(
        // so this gets call 3 times
        function(s) {
          var a = s ? rr(s) : [];
          return o || (o = a[i]), Ee(a.splice) && a.splice(i, 1), Ee(a.every) && a.every(function(l) {
            return l === void 0;
          }) ? [] : a;
        },
        !0,
        !0
      ), o;
    }, n.pop = function() {
      var i;
      return this.updateArrayField(
        // so this gets call 3 times
        function(o) {
          var s = o.slice();
          return i || (i = s && s.pop && s.pop()), s;
        },
        !0,
        !0
      ), i;
    }, n.render = function() {
      var i = {
        push: this.push,
        pop: this.pop,
        swap: this.swap,
        move: this.move,
        insert: this.insert,
        replace: this.replace,
        unshift: this.unshift,
        remove: this.remove,
        handlePush: this.handlePush,
        handlePop: this.handlePop,
        handleSwap: this.handleSwap,
        handleMove: this.handleMove,
        handleInsert: this.handleInsert,
        handleReplace: this.handleReplace,
        handleUnshift: this.handleUnshift,
        handleRemove: this.handleRemove
      }, o = this.props, s = o.component, a = o.render, l = o.children, u = o.name, f = o.formik, c = dn(f, ["validate", "validationSchema"]), d = Y({}, i, {
        form: c,
        name: u
      });
      return s ? S.createElement(s, d) : a ? a(d) : l ? typeof l == "function" ? l(d) : Dg(l) ? null : S.Children.only(l) : null;
    }, t;
  }(S.Component);
  CP.defaultProps = {
    validateOnChange: !0
  };
  var PP = /* @__PURE__ */ function(e) {
    jg(t, e);
    function t() {
      return e.apply(this, arguments) || this;
    }
    var n = t.prototype;
    return n.shouldComponentUpdate = function(i) {
      return oe(this.props.formik.errors, this.props.name) !== oe(i.formik.errors, this.props.name) || oe(this.props.formik.touched, this.props.name) !== oe(i.formik.touched, this.props.name) || Object.keys(this.props).length !== Object.keys(i).length;
    }, n.render = function() {
      var i = this.props, o = i.component, s = i.formik, a = i.render, l = i.children, u = i.name, f = dn(i, ["component", "formik", "render", "children", "name"]), c = oe(s.touched, u), d = oe(s.errors, u);
      return c && d ? a ? Ee(a) ? a(d) : null : l ? Ee(l) ? l(d) : null : o ? S.createElement(o, f, d) : d : null;
    }, t;
  }(S.Component), kP = /* @__PURE__ */ SP(PP);
  const Lg = S.createContext(void 0);
  function co() {
    const e = S.useContext(Lg);
    if (e === void 0)
      throw new Error("useWizard must be used within the Wizard app!");
    return e;
  }
  function _P({ step: e }) {
    const { submitForm: t, setFieldValue: n } = lo();
    S.useEffect(() => {
      const i = r(e);
      i && i.forEach((o) => {
        const s = document.querySelectorAll(`input[name='${o}']`);
        for (let a = 0; a < s.length; ++a)
          s[a].addEventListener("click", (l) => {
            const u = l.target.value;
            n(o, u), setTimeout(t, 0);
          });
      });
    }, []);
    function r(i) {
      return i.initialValues ? Object.keys(i.initialValues) : [];
    }
    return null;
  }
  function AP(e) {
    const t = {};
    return e.forEach((n) => {
      const r = n.id.replace(/[A-Z]/g, (i, o) => (o > 0 ? "-" : "") + i.toLowerCase());
      t[r] = n;
    }), t;
  }
  function Th(e) {
    const t = window.location.hash.slice(1);
    return e[t];
  }
  function OP(e, t) {
    const n = Object.keys(e).find((r) => e[r].id === t.id);
    window.location.hash = n || window.location.hash;
  }
  function FP({
    steps: e,
    onCompleted: t,
    onStepChanged: n,
    enableHash: r,
    // Components
    header: i,
    wrapper: o,
    footer: s
  }) {
    let a = e[0], l = {};
    r && (l = AP(e), a = Th(l) || a);
    const [u, f] = S.useState(a), [c, d] = S.useState(!1), [p, g] = S.useState({}), v = S.useRef(null), T = e.findIndex((P) => P.id === u.id), y = T + 1, h = e.length, m = y === 1, x = y === h;
    S.useEffect(() => {
      if (r)
        return window.addEventListener("hashchange", k), OP(l, u), () => window.removeEventListener("hashchange", k);
    }, [u]);
    function k() {
      const P = Th(l);
      (P == null ? void 0 : P.id) !== u.id && V(P, v.current);
    }
    async function E(P, O, j) {
      let R;
      for (let U = 0; U < P.length; ++U) {
        const Me = P[U];
        if (Me.shouldSkip === void 0) {
          R = Me;
          break;
        }
        if (!await Me.shouldSkip(O, j)) {
          R = Me;
          break;
        }
      }
      return R;
    }
    async function C(P) {
      const O = e.slice(T + 1);
      return await E(O, P, 1);
    }
    async function _(P) {
      const O = e.slice(0, T).reverse();
      return await E(O, P, -1);
    }
    function L(P) {
      if (!t)
        return;
      let O = {};
      Object.keys(P).forEach((j) => {
        O = { ...O, ...P[j] };
      }), t(O);
    }
    function V(P, O) {
      f(P), O.resetForm({ values: q(P) });
    }
    async function I(P, O) {
      try {
        u.onSubmit && (O.setStatus(""), d(!0), P = await u.onSubmit(P, p, O), d(!1));
        const j = {
          ...p,
          [u.id]: P
        };
        g(j);
        const R = await C(j);
        if (!R) {
          L(j);
          return;
        }
        n && n(u, R, j), V(R, O);
      } catch (j) {
        console.log(j), d(!1), O.setStatus(j.message);
      }
    }
    async function G(P, O) {
      let j = null;
      (u.keepValuesOnPrevious ?? !0) && (j = {
        ...p,
        [u.id]: P
      }, g(j)), j = j || p;
      const R = await _(j);
      R && (n && n(u, R, j), V(R, O));
    }
    function W(P) {
      if (P)
        return (O) => P(O, p);
    }
    function K(P, O) {
      V(e[P], O);
    }
    function Qe(P, O) {
      f({ ...u, [P]: O });
    }
    function q(P) {
      return p[P.id] || P.initialValues || {};
    }
    function ke(P) {
      return {
        values: p,
        setValues: g,
        setIsLoading: d,
        updateStep: Qe,
        goToPreviousStep: () => G(P.values, P),
        goToNextStep: () => I(P.values, P),
        goToStep: (O) => K(O, P),
        activeStep: u,
        stepNumber: y,
        totalSteps: h,
        isLoading: c,
        isFirstStep: m,
        isLastStep: x
      };
    }
    return /* @__PURE__ */ F.jsx(
      dP,
      {
        initialValues: q(u),
        validationSchema: u.validationSchema,
        validate: W(u.validate),
        validateOnChange: u.validateOnChange ?? !0,
        validateOnBlur: u.validateOnBlur ?? !0,
        onSubmit: I,
        innerRef: v,
        children: (P) => {
          const O = ke(P), j = o || u.component;
          return /* @__PURE__ */ F.jsx(Lg.Provider, { value: O, children: /* @__PURE__ */ F.jsxs(Rg, { children: [
            i,
            j,
            s,
            u.submitOnChange && /* @__PURE__ */ F.jsx(_P, { step: u })
          ] }) });
        }
      }
    );
  }
  function jP() {
    const { goToStep: e } = co();
    return /* @__PURE__ */ F.jsxs("div", { className: "prose max-w-none", children: [
      /* @__PURE__ */ F.jsx("h2", { children: "Warning" }),
      /* @__PURE__ */ F.jsx("p", { children: "Seems like you did not fill your email. Would you like to do it?" }),
      /* @__PURE__ */ F.jsxs("p", { children: [
        /* @__PURE__ */ F.jsx("b", { children: "Note:" }),
        " This step is automatically skipped if user filled their email in the first step."
      ] }),
      /* @__PURE__ */ F.jsxs("div", { className: "flex gap-4", children: [
        /* @__PURE__ */ F.jsx("button", { className: "btn", type: "submit", children: "No" }),
        /* @__PURE__ */ F.jsx("button", { className: "btn", type: "button", onClick: () => e(0), children: "Yes" })
      ] })
    ] });
  }
  function DP() {
    return /* @__PURE__ */ F.jsxs("div", { className: "prose max-w-none", children: [
      /* @__PURE__ */ F.jsx("h2", { children: "Async" }),
      /* @__PURE__ */ F.jsx("p", { children: 'Pressing "Next" does async operation that takes 2 seconds before we proceed to the next step.' })
    ] });
  }
  function MP() {
    const { values: e, updateStep: t } = co(), [n, r] = S.useState(!0);
    function i() {
      const s = !n;
      r(s), t("hideNext", s);
    }
    let o = {};
    return Object.keys(e).forEach((s) => {
      o = {
        ...o,
        ...e[s]
      };
    }), /* @__PURE__ */ F.jsxs("div", { className: "prose prose-neutral max-w-none", children: [
      /* @__PURE__ */ F.jsx("h2", { children: "Congratulations!" }),
      /* @__PURE__ */ F.jsxs("div", { className: "flex flex-wrap gap-4 justify-between", children: [
        /* @__PURE__ */ F.jsxs("p", { className: "my-0", children: [
          "You did it ",
          /* @__PURE__ */ F.jsx("b", { children: e.Username.username }),
          "! 🎉",
          /* @__PURE__ */ F.jsx("br", {}),
          "Here's your input:"
        ] }),
        /* @__PURE__ */ F.jsx("button", { className: "btn", onClick: i, type: "button", children: "Toggle hideNext" })
      ] }),
      /* @__PURE__ */ F.jsx("code", { className: "text-sm sm:text-base bg-transparent", children: /* @__PURE__ */ F.jsx("pre", { className: "mt-0", children: JSON.stringify(o, null, 2) }) })
    ] });
  }
  const RP = [
    {
      id: "ContactInfo",
      initialValues: {
        firstName: "John",
        lastName: "Doe",
        age: 30,
        email: ""
      },
      // attrs defined under "fields" are for custom step renderer made
      // just for this demo folder, otherwise these aren't part of
      // the step config object
      fields: {
        inputTypes: {
          firstName: "text",
          lastName: "text",
          age: "number",
          email: "email"
        },
        placeholders: {
          firstName: "e.g. John",
          lastName: "e.g. Doe",
          age: "e.g. 18",
          email: "e.g. john@doe.com"
        }
      },
      validationSchema: $S,
      disableNextOnErrors: !0
    },
    {
      id: "Username",
      helpText: "Username should include your first name. This step is to demonstrate that we can validate field based on what user typed in the previous step.",
      initialValues: {
        username: ""
      },
      fields: {
        inputTypes: {
          username: "text"
        }
      },
      validate: IS,
      disableNextOnErrors: !0
    },
    {
      id: "EmailCheck",
      component: /* @__PURE__ */ F.jsx(jP, {}),
      hideNext: !0,
      hidePrevious: !0,
      shouldSkip: (e, t) => t === -1 ? !0 : !!e.ContactInfo.email
    },
    {
      id: "Async",
      component: /* @__PURE__ */ F.jsx(DP, {}),
      onSubmit: async (e, t, n) => (await ((i) => new Promise((o) => setTimeout(o, i)))(2e3), e)
    },
    {
      id: "Final",
      component: /* @__PURE__ */ F.jsx(MP, {}),
      hideNext: !0,
      hidePrevious: !1
    }
  ], Vg = S.createContext({
    transformPagePoint: (e) => e,
    isStatic: !1,
    reducedMotion: "never"
  }), va = S.createContext({}), xa = S.createContext(null), Sa = typeof document < "u", Jc = Sa ? S.useLayoutEffect : S.useEffect, Ng = S.createContext({ strict: !1 }), ef = (e) => e.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase(), LP = "framerAppearId", bg = "data-" + ef(LP);
  function VP(e, t, n, r) {
    const { visualElement: i } = S.useContext(va), o = S.useContext(Ng), s = S.useContext(xa), a = S.useContext(Vg).reducedMotion, l = S.useRef();
    r = r || o.renderer, !l.current && r && (l.current = r(e, {
      visualState: t,
      parent: i,
      props: n,
      presenceContext: s,
      blockInitialAnimation: s ? s.initial === !1 : !1,
      reducedMotionConfig: a
    }));
    const u = l.current;
    S.useInsertionEffect(() => {
      u && u.update(n, s);
    });
    const f = S.useRef(!!(n[bg] && !window.HandoffComplete));
    return Jc(() => {
      u && (u.render(), f.current && u.animationState && u.animationState.animateChanges());
    }), S.useEffect(() => {
      u && (u.updateFeatures(), !f.current && u.animationState && u.animationState.animateChanges(), f.current && (f.current = !1, window.HandoffComplete = !0));
    }), u;
  }
  function Fr(e) {
    return e && typeof e == "object" && Object.prototype.hasOwnProperty.call(e, "current");
  }
  function NP(e, t, n) {
    return S.useCallback(
      (r) => {
        r && e.mount && e.mount(r), t && (r ? t.mount(r) : t.unmount()), n && (typeof n == "function" ? n(r) : Fr(n) && (n.current = r));
      },
      /**
       * Only pass a new ref callback to React if we've received a visual element
       * factory. Otherwise we'll be mounting/remounting every time externalRef
       * or other dependencies change.
       */
      [t]
    );
  }
  function qi(e) {
    return typeof e == "string" || Array.isArray(e);
  }
  function wa(e) {
    return e !== null && typeof e == "object" && typeof e.start == "function";
  }
  const tf = [
    "animate",
    "whileInView",
    "whileFocus",
    "whileHover",
    "whileTap",
    "whileDrag",
    "exit"
  ], nf = ["initial", ...tf];
  function Ta(e) {
    return wa(e.animate) || nf.some((t) => qi(e[t]));
  }
  function $g(e) {
    return !!(Ta(e) || e.variants);
  }
  function bP(e, t) {
    if (Ta(e)) {
      const { initial: n, animate: r } = e;
      return {
        initial: n === !1 || qi(n) ? n : void 0,
        animate: qi(r) ? r : void 0
      };
    }
    return e.inherit !== !1 ? t : {};
  }
  function $P(e) {
    const { initial: t, animate: n } = bP(e, S.useContext(va));
    return S.useMemo(() => ({ initial: t, animate: n }), [Eh(t), Eh(n)]);
  }
  function Eh(e) {
    return Array.isArray(e) ? e.join(" ") : e;
  }
  const Ch = {
    animation: [
      "animate",
      "variants",
      "whileHover",
      "whileTap",
      "exit",
      "whileInView",
      "whileFocus",
      "whileDrag"
    ],
    exit: ["exit"],
    drag: ["drag", "dragControls"],
    focus: ["whileFocus"],
    hover: ["whileHover", "onHoverStart", "onHoverEnd"],
    tap: ["whileTap", "onTap", "onTapStart", "onTapCancel"],
    pan: ["onPan", "onPanStart", "onPanSessionStart", "onPanEnd"],
    inView: ["whileInView", "onViewportEnter", "onViewportLeave"],
    layout: ["layout", "layoutId"]
  }, Ji = {};
  for (const e in Ch)
    Ji[e] = {
      isEnabled: (t) => Ch[e].some((n) => !!t[n])
    };
  function IP(e) {
    for (const t in e)
      Ji[t] = {
        ...Ji[t],
        ...e[t]
      };
  }
  const rf = S.createContext({}), Ig = S.createContext({}), zP = Symbol.for("motionComponentSymbol");
  function BP({ preloadedFeatures: e, createVisualElement: t, useRender: n, useVisualState: r, Component: i }) {
    e && IP(e);
    function o(a, l) {
      let u;
      const f = {
        ...S.useContext(Vg),
        ...a,
        layoutId: UP(a)
      }, { isStatic: c } = f, d = $P(a), p = r(a, c);
      if (!c && Sa) {
        d.visualElement = VP(i, p, f, t);
        const g = S.useContext(Ig), v = S.useContext(Ng).strict;
        d.visualElement && (u = d.visualElement.loadFeatures(
          // Note: Pass the full new combined props to correctly re-render dynamic feature components.
          f,
          v,
          e,
          g
        ));
      }
      return S.createElement(
        va.Provider,
        { value: d },
        u && d.visualElement ? S.createElement(u, { visualElement: d.visualElement, ...f }) : null,
        n(i, a, NP(p, d.visualElement, l), p, c, d.visualElement)
      );
    }
    const s = S.forwardRef(o);
    return s[zP] = i, s;
  }
  function UP({ layoutId: e }) {
    const t = S.useContext(rf).id;
    return t && e !== void 0 ? t + "-" + e : e;
  }
  function HP(e) {
    function t(r, i = {}) {
      return BP(e(r, i));
    }
    if (typeof Proxy > "u")
      return t;
    const n = /* @__PURE__ */ new Map();
    return new Proxy(t, {
      /**
       * Called when `motion` is referenced with a prop: `motion.div`, `motion.input` etc.
       * The prop name is passed through as `key` and we can use that to generate a `motion`
       * DOM component with that name.
       */
      get: (r, i) => (n.has(i) || n.set(i, t(i)), n.get(i))
    });
  }
  const WP = [
    "animate",
    "circle",
    "defs",
    "desc",
    "ellipse",
    "g",
    "image",
    "line",
    "filter",
    "marker",
    "mask",
    "metadata",
    "path",
    "pattern",
    "polygon",
    "polyline",
    "rect",
    "stop",
    "switch",
    "symbol",
    "svg",
    "text",
    "tspan",
    "use",
    "view"
  ];
  function of(e) {
    return (
      /**
       * If it's not a string, it's a custom React component. Currently we only support
       * HTML custom React components.
       */
      typeof e != "string" || /**
       * If it contains a dash, the element is a custom HTML webcomponent.
       */
      e.includes("-") ? !1 : (
        /**
         * If it's in our list of lowercase SVG tags, it's an SVG component
         */
        !!(WP.indexOf(e) > -1 || /**
         * If it contains a capital letter, it's an SVG component
         */
        /[A-Z]/.test(e))
      )
    );
  }
  const Os = {};
  function GP(e) {
    Object.assign(Os, e);
  }
  const fo = [
    "transformPerspective",
    "x",
    "y",
    "z",
    "translateX",
    "translateY",
    "translateZ",
    "scale",
    "scaleX",
    "scaleY",
    "rotate",
    "rotateX",
    "rotateY",
    "rotateZ",
    "skew",
    "skewX",
    "skewY"
  ], dr = new Set(fo);
  function zg(e, { layout: t, layoutId: n }) {
    return dr.has(e) || e.startsWith("origin") || (t || n !== void 0) && (!!Os[e] || e === "opacity");
  }
  const Ke = (e) => !!(e && e.getVelocity), KP = {
    x: "translateX",
    y: "translateY",
    z: "translateZ",
    transformPerspective: "perspective"
  }, QP = fo.length;
  function YP(e, { enableHardwareAcceleration: t = !0, allowTransformNone: n = !0 }, r, i) {
    let o = "";
    for (let s = 0; s < QP; s++) {
      const a = fo[s];
      if (e[a] !== void 0) {
        const l = KP[a] || a;
        o += `${l}(${e[a]}) `;
      }
    }
    return t && !e.z && (o += "translateZ(0)"), o = o.trim(), i ? o = i(e, r ? "" : o) : n && r && (o = "none"), o;
  }
  const Bg = (e) => (t) => typeof t == "string" && t.startsWith(e), Ug = Bg("--"), ku = Bg("var(--"), XP = /var\s*\(\s*--[\w-]+(\s*,\s*(?:(?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)+)?\s*\)/g, ZP = (e, t) => t && typeof e == "number" ? t.transform(e) : e, _n = (e, t, n) => Math.min(Math.max(n, e), t), hr = {
    test: (e) => typeof e == "number",
    parse: parseFloat,
    transform: (e) => e
  }, Ai = {
    ...hr,
    transform: (e) => _n(0, 1, e)
  }, Vo = {
    ...hr,
    default: 1
  }, Oi = (e) => Math.round(e * 1e5) / 1e5, Ea = /(-)?([\d]*\.?[\d])+/g, Hg = /(#[0-9a-f]{3,8}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))/gi, qP = /^(#[0-9a-f]{3,8}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))$/i;
  function ho(e) {
    return typeof e == "string";
  }
  const po = (e) => ({
    test: (t) => ho(t) && t.endsWith(e) && t.split(" ").length === 1,
    parse: parseFloat,
    transform: (t) => `${t}${e}`
  }), nn = po("deg"), Dt = po("%"), $ = po("px"), JP = po("vh"), ek = po("vw"), Ph = {
    ...Dt,
    parse: (e) => Dt.parse(e) / 100,
    transform: (e) => Dt.transform(e * 100)
  }, kh = {
    ...hr,
    transform: Math.round
  }, Wg = {
    // Border props
    borderWidth: $,
    borderTopWidth: $,
    borderRightWidth: $,
    borderBottomWidth: $,
    borderLeftWidth: $,
    borderRadius: $,
    radius: $,
    borderTopLeftRadius: $,
    borderTopRightRadius: $,
    borderBottomRightRadius: $,
    borderBottomLeftRadius: $,
    // Positioning props
    width: $,
    maxWidth: $,
    height: $,
    maxHeight: $,
    size: $,
    top: $,
    right: $,
    bottom: $,
    left: $,
    // Spacing props
    padding: $,
    paddingTop: $,
    paddingRight: $,
    paddingBottom: $,
    paddingLeft: $,
    margin: $,
    marginTop: $,
    marginRight: $,
    marginBottom: $,
    marginLeft: $,
    // Transform props
    rotate: nn,
    rotateX: nn,
    rotateY: nn,
    rotateZ: nn,
    scale: Vo,
    scaleX: Vo,
    scaleY: Vo,
    scaleZ: Vo,
    skew: nn,
    skewX: nn,
    skewY: nn,
    distance: $,
    translateX: $,
    translateY: $,
    translateZ: $,
    x: $,
    y: $,
    z: $,
    perspective: $,
    transformPerspective: $,
    opacity: Ai,
    originX: Ph,
    originY: Ph,
    originZ: $,
    // Misc
    zIndex: kh,
    // SVG
    fillOpacity: Ai,
    strokeOpacity: Ai,
    numOctaves: kh
  };
  function sf(e, t, n, r) {
    const { style: i, vars: o, transform: s, transformOrigin: a } = e;
    let l = !1, u = !1, f = !0;
    for (const c in t) {
      const d = t[c];
      if (Ug(c)) {
        o[c] = d;
        continue;
      }
      const p = Wg[c], g = ZP(d, p);
      if (dr.has(c)) {
        if (l = !0, s[c] = g, !f)
          continue;
        d !== (p.default || 0) && (f = !1);
      } else
        c.startsWith("origin") ? (u = !0, a[c] = g) : i[c] = g;
    }
    if (t.transform || (l || r ? i.transform = YP(e.transform, n, f, r) : i.transform && (i.transform = "none")), u) {
      const { originX: c = "50%", originY: d = "50%", originZ: p = 0 } = a;
      i.transformOrigin = `${c} ${d} ${p}`;
    }
  }
  const af = () => ({
    style: {},
    transform: {},
    transformOrigin: {},
    vars: {}
  });
  function Gg(e, t, n) {
    for (const r in t)
      !Ke(t[r]) && !zg(r, n) && (e[r] = t[r]);
  }
  function tk({ transformTemplate: e }, t, n) {
    return S.useMemo(() => {
      const r = af();
      return sf(r, t, { enableHardwareAcceleration: !n }, e), Object.assign({}, r.vars, r.style);
    }, [t]);
  }
  function nk(e, t, n) {
    const r = e.style || {}, i = {};
    return Gg(i, r, e), Object.assign(i, tk(e, t, n)), e.transformValues ? e.transformValues(i) : i;
  }
  function rk(e, t, n) {
    const r = {}, i = nk(e, t, n);
    return e.drag && e.dragListener !== !1 && (r.draggable = !1, i.userSelect = i.WebkitUserSelect = i.WebkitTouchCallout = "none", i.touchAction = e.drag === !0 ? "none" : `pan-${e.drag === "x" ? "y" : "x"}`), e.tabIndex === void 0 && (e.onTap || e.onTapStart || e.whileTap) && (r.tabIndex = 0), r.style = i, r;
  }
  const ik = /* @__PURE__ */ new Set([
    "animate",
    "exit",
    "variants",
    "initial",
    "style",
    "values",
    "variants",
    "transition",
    "transformTemplate",
    "transformValues",
    "custom",
    "inherit",
    "onBeforeLayoutMeasure",
    "onAnimationStart",
    "onAnimationComplete",
    "onUpdate",
    "onDragStart",
    "onDrag",
    "onDragEnd",
    "onMeasureDragConstraints",
    "onDirectionLock",
    "onDragTransitionEnd",
    "_dragX",
    "_dragY",
    "onHoverStart",
    "onHoverEnd",
    "onViewportEnter",
    "onViewportLeave",
    "globalTapTarget",
    "ignoreStrict",
    "viewport"
  ]);
  function Fs(e) {
    return e.startsWith("while") || e.startsWith("drag") && e !== "draggable" || e.startsWith("layout") || e.startsWith("onTap") || e.startsWith("onPan") || e.startsWith("onLayout") || ik.has(e);
  }
  let Kg = (e) => !Fs(e);
  function ok(e) {
    e && (Kg = (t) => t.startsWith("on") ? !Fs(t) : e(t));
  }
  try {
    ok(require("@emotion/is-prop-valid").default);
  } catch {
  }
  function sk(e, t, n) {
    const r = {};
    for (const i in e)
      i === "values" && typeof e.values == "object" || (Kg(i) || n === !0 && Fs(i) || !t && !Fs(i) || // If trying to use native HTML drag events, forward drag listeners
      e.draggable && i.startsWith("onDrag")) && (r[i] = e[i]);
    return r;
  }
  function _h(e, t, n) {
    return typeof e == "string" ? e : $.transform(t + n * e);
  }
  function ak(e, t, n) {
    const r = _h(t, e.x, e.width), i = _h(n, e.y, e.height);
    return `${r} ${i}`;
  }
  const lk = {
    offset: "stroke-dashoffset",
    array: "stroke-dasharray"
  }, uk = {
    offset: "strokeDashoffset",
    array: "strokeDasharray"
  };
  function ck(e, t, n = 1, r = 0, i = !0) {
    e.pathLength = 1;
    const o = i ? lk : uk;
    e[o.offset] = $.transform(-r);
    const s = $.transform(t), a = $.transform(n);
    e[o.array] = `${s} ${a}`;
  }
  function lf(e, {
    attrX: t,
    attrY: n,
    attrScale: r,
    originX: i,
    originY: o,
    pathLength: s,
    pathSpacing: a = 1,
    pathOffset: l = 0,
    // This is object creation, which we try to avoid per-frame.
    ...u
  }, f, c, d) {
    if (sf(e, u, f, d), c) {
      e.style.viewBox && (e.attrs.viewBox = e.style.viewBox);
      return;
    }
    e.attrs = e.style, e.style = {};
    const { attrs: p, style: g, dimensions: v } = e;
    p.transform && (v && (g.transform = p.transform), delete p.transform), v && (i !== void 0 || o !== void 0 || g.transform) && (g.transformOrigin = ak(v, i !== void 0 ? i : 0.5, o !== void 0 ? o : 0.5)), t !== void 0 && (p.x = t), n !== void 0 && (p.y = n), r !== void 0 && (p.scale = r), s !== void 0 && ck(p, s, a, l, !1);
  }
  const Qg = () => ({
    ...af(),
    attrs: {}
  }), uf = (e) => typeof e == "string" && e.toLowerCase() === "svg";
  function fk(e, t, n, r) {
    const i = S.useMemo(() => {
      const o = Qg();
      return lf(o, t, { enableHardwareAcceleration: !1 }, uf(r), e.transformTemplate), {
        ...o.attrs,
        style: { ...o.style }
      };
    }, [t]);
    if (e.style) {
      const o = {};
      Gg(o, e.style, e), i.style = { ...o, ...i.style };
    }
    return i;
  }
  function dk(e = !1) {
    return (n, r, i, { latestValues: o }, s) => {
      const l = (of(n) ? fk : rk)(r, o, s, n), f = {
        ...sk(r, typeof n == "string", e),
        ...l,
        ref: i
      }, { children: c } = r, d = S.useMemo(() => Ke(c) ? c.get() : c, [c]);
      return S.createElement(n, {
        ...f,
        children: d
      });
    };
  }
  function Yg(e, { style: t, vars: n }, r, i) {
    Object.assign(e.style, t, i && i.getProjectionStyles(r));
    for (const o in n)
      e.style.setProperty(o, n[o]);
  }
  const Xg = /* @__PURE__ */ new Set([
    "baseFrequency",
    "diffuseConstant",
    "kernelMatrix",
    "kernelUnitLength",
    "keySplines",
    "keyTimes",
    "limitingConeAngle",
    "markerHeight",
    "markerWidth",
    "numOctaves",
    "targetX",
    "targetY",
    "surfaceScale",
    "specularConstant",
    "specularExponent",
    "stdDeviation",
    "tableValues",
    "viewBox",
    "gradientTransform",
    "pathLength",
    "startOffset",
    "textLength",
    "lengthAdjust"
  ]);
  function Zg(e, t, n, r) {
    Yg(e, t, void 0, r);
    for (const i in t.attrs)
      e.setAttribute(Xg.has(i) ? i : ef(i), t.attrs[i]);
  }
  function cf(e, t) {
    const { style: n } = e, r = {};
    for (const i in n)
      (Ke(n[i]) || t.style && Ke(t.style[i]) || zg(i, e)) && (r[i] = n[i]);
    return r;
  }
  function qg(e, t) {
    const n = cf(e, t);
    for (const r in e)
      if (Ke(e[r]) || Ke(t[r])) {
        const i = fo.indexOf(r) !== -1 ? "attr" + r.charAt(0).toUpperCase() + r.substring(1) : r;
        n[i] = e[r];
      }
    return n;
  }
  function ff(e, t, n, r = {}, i = {}) {
    return typeof t == "function" && (t = t(n !== void 0 ? n : e.custom, r, i)), typeof t == "string" && (t = e.variants && e.variants[t]), typeof t == "function" && (t = t(n !== void 0 ? n : e.custom, r, i)), t;
  }
  function Jg(e) {
    const t = S.useRef(null);
    return t.current === null && (t.current = e()), t.current;
  }
  const js = (e) => Array.isArray(e), hk = (e) => !!(e && typeof e == "object" && e.mix && e.toValue), pk = (e) => js(e) ? e[e.length - 1] || 0 : e;
  function es(e) {
    const t = Ke(e) ? e.get() : e;
    return hk(t) ? t.toValue() : t;
  }
  function mk({ scrapeMotionValuesFromProps: e, createRenderState: t, onMount: n }, r, i, o) {
    const s = {
      latestValues: yk(r, i, o, e),
      renderState: t()
    };
    return n && (s.mount = (a) => n(r, a, s)), s;
  }
  const ev = (e) => (t, n) => {
    const r = S.useContext(va), i = S.useContext(xa), o = () => mk(e, t, r, i);
    return n ? o() : Jg(o);
  };
  function yk(e, t, n, r) {
    const i = {}, o = r(e, {});
    for (const d in o)
      i[d] = es(o[d]);
    let { initial: s, animate: a } = e;
    const l = Ta(e), u = $g(e);
    t && u && !l && e.inherit !== !1 && (s === void 0 && (s = t.initial), a === void 0 && (a = t.animate));
    let f = n ? n.initial === !1 : !1;
    f = f || s === !1;
    const c = f ? a : s;
    return c && typeof c != "boolean" && !wa(c) && (Array.isArray(c) ? c : [c]).forEach((p) => {
      const g = ff(e, p);
      if (!g)
        return;
      const { transitionEnd: v, transition: T, ...y } = g;
      for (const h in y) {
        let m = y[h];
        if (Array.isArray(m)) {
          const x = f ? m.length - 1 : 0;
          m = m[x];
        }
        m !== null && (i[h] = m);
      }
      for (const h in v)
        i[h] = v[h];
    }), i;
  }
  const he = (e) => e;
  class Ah {
    constructor() {
      this.order = [], this.scheduled = /* @__PURE__ */ new Set();
    }
    add(t) {
      if (!this.scheduled.has(t))
        return this.scheduled.add(t), this.order.push(t), !0;
    }
    remove(t) {
      const n = this.order.indexOf(t);
      n !== -1 && (this.order.splice(n, 1), this.scheduled.delete(t));
    }
    clear() {
      this.order.length = 0, this.scheduled.clear();
    }
  }
  function gk(e) {
    let t = new Ah(), n = new Ah(), r = 0, i = !1, o = !1;
    const s = /* @__PURE__ */ new WeakSet(), a = {
      /**
       * Schedule a process to run on the next frame.
       */
      schedule: (l, u = !1, f = !1) => {
        const c = f && i, d = c ? t : n;
        return u && s.add(l), d.add(l) && c && i && (r = t.order.length), l;
      },
      /**
       * Cancel the provided callback from running on the next frame.
       */
      cancel: (l) => {
        n.remove(l), s.delete(l);
      },
      /**
       * Execute all schedule callbacks.
       */
      process: (l) => {
        if (i) {
          o = !0;
          return;
        }
        if (i = !0, [t, n] = [n, t], n.clear(), r = t.order.length, r)
          for (let u = 0; u < r; u++) {
            const f = t.order[u];
            f(l), s.has(f) && (a.schedule(f), e());
          }
        i = !1, o && (o = !1, a.process(l));
      }
    };
    return a;
  }
  const No = [
    "prepare",
    "read",
    "update",
    "preRender",
    "render",
    "postRender"
  ], vk = 40;
  function xk(e, t) {
    let n = !1, r = !0;
    const i = {
      delta: 0,
      timestamp: 0,
      isProcessing: !1
    }, o = No.reduce((c, d) => (c[d] = gk(() => n = !0), c), {}), s = (c) => o[c].process(i), a = () => {
      const c = performance.now();
      n = !1, i.delta = r ? 1e3 / 60 : Math.max(Math.min(c - i.timestamp, vk), 1), i.timestamp = c, i.isProcessing = !0, No.forEach(s), i.isProcessing = !1, n && t && (r = !1, e(a));
    }, l = () => {
      n = !0, r = !0, i.isProcessing || e(a);
    };
    return { schedule: No.reduce((c, d) => {
      const p = o[d];
      return c[d] = (g, v = !1, T = !1) => (n || l(), p.schedule(g, v, T)), c;
    }, {}), cancel: (c) => No.forEach((d) => o[d].cancel(c)), state: i, steps: o };
  }
  const { schedule: te, cancel: Zt, state: Fe, steps: ul } = xk(typeof requestAnimationFrame < "u" ? requestAnimationFrame : he, !0), Sk = {
    useVisualState: ev({
      scrapeMotionValuesFromProps: qg,
      createRenderState: Qg,
      onMount: (e, t, { renderState: n, latestValues: r }) => {
        te.read(() => {
          try {
            n.dimensions = typeof t.getBBox == "function" ? t.getBBox() : t.getBoundingClientRect();
          } catch {
            n.dimensions = {
              x: 0,
              y: 0,
              width: 0,
              height: 0
            };
          }
        }), te.render(() => {
          lf(n, r, { enableHardwareAcceleration: !1 }, uf(t.tagName), e.transformTemplate), Zg(t, n);
        });
      }
    })
  }, wk = {
    useVisualState: ev({
      scrapeMotionValuesFromProps: cf,
      createRenderState: af
    })
  };
  function Tk(e, { forwardMotionProps: t = !1 }, n, r) {
    return {
      ...of(e) ? Sk : wk,
      preloadedFeatures: n,
      useRender: dk(t),
      createVisualElement: r,
      Component: e
    };
  }
  function Bt(e, t, n, r = { passive: !0 }) {
    return e.addEventListener(t, n, r), () => e.removeEventListener(t, n);
  }
  const tv = (e) => e.pointerType === "mouse" ? typeof e.button != "number" || e.button <= 0 : e.isPrimary !== !1;
  function Ca(e, t = "page") {
    return {
      point: {
        x: e[t + "X"],
        y: e[t + "Y"]
      }
    };
  }
  const Ek = (e) => (t) => tv(t) && e(t, Ca(t));
  function Wt(e, t, n, r) {
    return Bt(e, t, Ek(n), r);
  }
  const Ck = (e, t) => (n) => t(e(n)), Tn = (...e) => e.reduce(Ck);
  function nv(e) {
    let t = null;
    return () => {
      const n = () => {
        t = null;
      };
      return t === null ? (t = e, n) : !1;
    };
  }
  const Oh = nv("dragHorizontal"), Fh = nv("dragVertical");
  function rv(e) {
    let t = !1;
    if (e === "y")
      t = Fh();
    else if (e === "x")
      t = Oh();
    else {
      const n = Oh(), r = Fh();
      n && r ? t = () => {
        n(), r();
      } : (n && n(), r && r());
    }
    return t;
  }
  function iv() {
    const e = rv(!0);
    return e ? (e(), !1) : !0;
  }
  class Mn {
    constructor(t) {
      this.isMounted = !1, this.node = t;
    }
    update() {
    }
  }
  function jh(e, t) {
    const n = "pointer" + (t ? "enter" : "leave"), r = "onHover" + (t ? "Start" : "End"), i = (o, s) => {
      if (o.pointerType === "touch" || iv())
        return;
      const a = e.getProps();
      e.animationState && a.whileHover && e.animationState.setActive("whileHover", t), a[r] && te.update(() => a[r](o, s));
    };
    return Wt(e.current, n, i, {
      passive: !e.getProps()[r]
    });
  }
  class Pk extends Mn {
    mount() {
      this.unmount = Tn(jh(this.node, !0), jh(this.node, !1));
    }
    unmount() {
    }
  }
  class kk extends Mn {
    constructor() {
      super(...arguments), this.isActive = !1;
    }
    onFocus() {
      let t = !1;
      try {
        t = this.node.current.matches(":focus-visible");
      } catch {
        t = !0;
      }
      !t || !this.node.animationState || (this.node.animationState.setActive("whileFocus", !0), this.isActive = !0);
    }
    onBlur() {
      !this.isActive || !this.node.animationState || (this.node.animationState.setActive("whileFocus", !1), this.isActive = !1);
    }
    mount() {
      this.unmount = Tn(Bt(this.node.current, "focus", () => this.onFocus()), Bt(this.node.current, "blur", () => this.onBlur()));
    }
    unmount() {
    }
  }
  const ov = (e, t) => t ? e === t ? !0 : ov(e, t.parentElement) : !1;
  function cl(e, t) {
    if (!t)
      return;
    const n = new PointerEvent("pointer" + e);
    t(n, Ca(n));
  }
  class _k extends Mn {
    constructor() {
      super(...arguments), this.removeStartListeners = he, this.removeEndListeners = he, this.removeAccessibleListeners = he, this.startPointerPress = (t, n) => {
        if (this.isPressing)
          return;
        this.removeEndListeners();
        const r = this.node.getProps(), o = Wt(window, "pointerup", (a, l) => {
          if (!this.checkPressEnd())
            return;
          const { onTap: u, onTapCancel: f, globalTapTarget: c } = this.node.getProps();
          te.update(() => {
            !c && !ov(this.node.current, a.target) ? f && f(a, l) : u && u(a, l);
          });
        }, { passive: !(r.onTap || r.onPointerUp) }), s = Wt(window, "pointercancel", (a, l) => this.cancelPress(a, l), { passive: !(r.onTapCancel || r.onPointerCancel) });
        this.removeEndListeners = Tn(o, s), this.startPress(t, n);
      }, this.startAccessiblePress = () => {
        const t = (o) => {
          if (o.key !== "Enter" || this.isPressing)
            return;
          const s = (a) => {
            a.key !== "Enter" || !this.checkPressEnd() || cl("up", (l, u) => {
              const { onTap: f } = this.node.getProps();
              f && te.update(() => f(l, u));
            });
          };
          this.removeEndListeners(), this.removeEndListeners = Bt(this.node.current, "keyup", s), cl("down", (a, l) => {
            this.startPress(a, l);
          });
        }, n = Bt(this.node.current, "keydown", t), r = () => {
          this.isPressing && cl("cancel", (o, s) => this.cancelPress(o, s));
        }, i = Bt(this.node.current, "blur", r);
        this.removeAccessibleListeners = Tn(n, i);
      };
    }
    startPress(t, n) {
      this.isPressing = !0;
      const { onTapStart: r, whileTap: i } = this.node.getProps();
      i && this.node.animationState && this.node.animationState.setActive("whileTap", !0), r && te.update(() => r(t, n));
    }
    checkPressEnd() {
      return this.removeEndListeners(), this.isPressing = !1, this.node.getProps().whileTap && this.node.animationState && this.node.animationState.setActive("whileTap", !1), !iv();
    }
    cancelPress(t, n) {
      if (!this.checkPressEnd())
        return;
      const { onTapCancel: r } = this.node.getProps();
      r && te.update(() => r(t, n));
    }
    mount() {
      const t = this.node.getProps(), n = Wt(t.globalTapTarget ? window : this.node.current, "pointerdown", this.startPointerPress, { passive: !(t.onTapStart || t.onPointerStart) }), r = Bt(this.node.current, "focus", this.startAccessiblePress);
      this.removeStartListeners = Tn(n, r);
    }
    unmount() {
      this.removeStartListeners(), this.removeEndListeners(), this.removeAccessibleListeners();
    }
  }
  const _u = /* @__PURE__ */ new WeakMap(), fl = /* @__PURE__ */ new WeakMap(), Ak = (e) => {
    const t = _u.get(e.target);
    t && t(e);
  }, Ok = (e) => {
    e.forEach(Ak);
  };
  function Fk({ root: e, ...t }) {
    const n = e || document;
    fl.has(n) || fl.set(n, {});
    const r = fl.get(n), i = JSON.stringify(t);
    return r[i] || (r[i] = new IntersectionObserver(Ok, { root: e, ...t })), r[i];
  }
  function jk(e, t, n) {
    const r = Fk(t);
    return _u.set(e, n), r.observe(e), () => {
      _u.delete(e), r.unobserve(e);
    };
  }
  const Dk = {
    some: 0,
    all: 1
  };
  class Mk extends Mn {
    constructor() {
      super(...arguments), this.hasEnteredView = !1, this.isInView = !1;
    }
    startObserver() {
      this.unmount();
      const { viewport: t = {} } = this.node.getProps(), { root: n, margin: r, amount: i = "some", once: o } = t, s = {
        root: n ? n.current : void 0,
        rootMargin: r,
        threshold: typeof i == "number" ? i : Dk[i]
      }, a = (l) => {
        const { isIntersecting: u } = l;
        if (this.isInView === u || (this.isInView = u, o && !u && this.hasEnteredView))
          return;
        u && (this.hasEnteredView = !0), this.node.animationState && this.node.animationState.setActive("whileInView", u);
        const { onViewportEnter: f, onViewportLeave: c } = this.node.getProps(), d = u ? f : c;
        d && d(l);
      };
      return jk(this.node.current, s, a);
    }
    mount() {
      this.startObserver();
    }
    update() {
      if (typeof IntersectionObserver > "u")
        return;
      const { props: t, prevProps: n } = this.node;
      ["amount", "margin", "root"].some(Rk(t, n)) && this.startObserver();
    }
    unmount() {
    }
  }
  function Rk({ viewport: e = {} }, { viewport: t = {} } = {}) {
    return (n) => e[n] !== t[n];
  }
  const Lk = {
    inView: {
      Feature: Mk
    },
    tap: {
      Feature: _k
    },
    focus: {
      Feature: kk
    },
    hover: {
      Feature: Pk
    }
  };
  function sv(e, t) {
    if (!Array.isArray(t))
      return !1;
    const n = t.length;
    if (n !== e.length)
      return !1;
    for (let r = 0; r < n; r++)
      if (t[r] !== e[r])
        return !1;
    return !0;
  }
  function Vk(e) {
    const t = {};
    return e.values.forEach((n, r) => t[r] = n.get()), t;
  }
  function Nk(e) {
    const t = {};
    return e.values.forEach((n, r) => t[r] = n.getVelocity()), t;
  }
  function Pa(e, t, n) {
    const r = e.getProps();
    return ff(r, t, n !== void 0 ? n : r.custom, Vk(e), Nk(e));
  }
  let df = he;
  const Xn = (e) => e * 1e3, Gt = (e) => e / 1e3, bk = {
    current: !1
  }, av = (e) => Array.isArray(e) && typeof e[0] == "number";
  function lv(e) {
    return !!(!e || typeof e == "string" && uv[e] || av(e) || Array.isArray(e) && e.every(lv));
  }
  const yi = ([e, t, n, r]) => `cubic-bezier(${e}, ${t}, ${n}, ${r})`, uv = {
    linear: "linear",
    ease: "ease",
    easeIn: "ease-in",
    easeOut: "ease-out",
    easeInOut: "ease-in-out",
    circIn: yi([0, 0.65, 0.55, 1]),
    circOut: yi([0.55, 0, 1, 0.45]),
    backIn: yi([0.31, 0.01, 0.66, -0.59]),
    backOut: yi([0.33, 1.53, 0.69, 0.99])
  };
  function cv(e) {
    if (e)
      return av(e) ? yi(e) : Array.isArray(e) ? e.map(cv) : uv[e];
  }
  function $k(e, t, n, { delay: r = 0, duration: i, repeat: o = 0, repeatType: s = "loop", ease: a, times: l } = {}) {
    const u = { [t]: n };
    l && (u.offset = l);
    const f = cv(a);
    return Array.isArray(f) && (u.easing = f), e.animate(u, {
      delay: r,
      duration: i,
      easing: Array.isArray(f) ? "linear" : f,
      fill: "both",
      iterations: o + 1,
      direction: s === "reverse" ? "alternate" : "normal"
    });
  }
  function Ik(e, { repeat: t, repeatType: n = "loop" }) {
    const r = t && n !== "loop" && t % 2 === 1 ? 0 : e.length - 1;
    return e[r];
  }
  const fv = (e, t, n) => (((1 - 3 * n + 3 * t) * e + (3 * n - 6 * t)) * e + 3 * t) * e, zk = 1e-7, Bk = 12;
  function Uk(e, t, n, r, i) {
    let o, s, a = 0;
    do
      s = t + (n - t) / 2, o = fv(s, r, i) - e, o > 0 ? n = s : t = s;
    while (Math.abs(o) > zk && ++a < Bk);
    return s;
  }
  function mo(e, t, n, r) {
    if (e === t && n === r)
      return he;
    const i = (o) => Uk(o, 0, 1, e, n);
    return (o) => o === 0 || o === 1 ? o : fv(i(o), t, r);
  }
  const Hk = mo(0.42, 0, 1, 1), Wk = mo(0, 0, 0.58, 1), dv = mo(0.42, 0, 0.58, 1), Gk = (e) => Array.isArray(e) && typeof e[0] != "number", hv = (e) => (t) => t <= 0.5 ? e(2 * t) / 2 : (2 - e(2 * (1 - t))) / 2, pv = (e) => (t) => 1 - e(1 - t), hf = (e) => 1 - Math.sin(Math.acos(e)), mv = pv(hf), Kk = hv(hf), yv = mo(0.33, 1.53, 0.69, 0.99), pf = pv(yv), Qk = hv(pf), Yk = (e) => (e *= 2) < 1 ? 0.5 * pf(e) : 0.5 * (2 - Math.pow(2, -10 * (e - 1))), Xk = {
    linear: he,
    easeIn: Hk,
    easeInOut: dv,
    easeOut: Wk,
    circIn: hf,
    circInOut: Kk,
    circOut: mv,
    backIn: pf,
    backInOut: Qk,
    backOut: yv,
    anticipate: Yk
  }, Dh = (e) => {
    if (Array.isArray(e)) {
      df(e.length === 4);
      const [t, n, r, i] = e;
      return mo(t, n, r, i);
    } else if (typeof e == "string")
      return Xk[e];
    return e;
  }, mf = (e, t) => (n) => !!(ho(n) && qP.test(n) && n.startsWith(e) || t && Object.prototype.hasOwnProperty.call(n, t)), gv = (e, t, n) => (r) => {
    if (!ho(r))
      return r;
    const [i, o, s, a] = r.match(Ea);
    return {
      [e]: parseFloat(i),
      [t]: parseFloat(o),
      [n]: parseFloat(s),
      alpha: a !== void 0 ? parseFloat(a) : 1
    };
  }, Zk = (e) => _n(0, 255, e), dl = {
    ...hr,
    transform: (e) => Math.round(Zk(e))
  }, Gn = {
    test: mf("rgb", "red"),
    parse: gv("red", "green", "blue"),
    transform: ({ red: e, green: t, blue: n, alpha: r = 1 }) => "rgba(" + dl.transform(e) + ", " + dl.transform(t) + ", " + dl.transform(n) + ", " + Oi(Ai.transform(r)) + ")"
  };
  function qk(e) {
    let t = "", n = "", r = "", i = "";
    return e.length > 5 ? (t = e.substring(1, 3), n = e.substring(3, 5), r = e.substring(5, 7), i = e.substring(7, 9)) : (t = e.substring(1, 2), n = e.substring(2, 3), r = e.substring(3, 4), i = e.substring(4, 5), t += t, n += n, r += r, i += i), {
      red: parseInt(t, 16),
      green: parseInt(n, 16),
      blue: parseInt(r, 16),
      alpha: i ? parseInt(i, 16) / 255 : 1
    };
  }
  const Au = {
    test: mf("#"),
    parse: qk,
    transform: Gn.transform
  }, jr = {
    test: mf("hsl", "hue"),
    parse: gv("hue", "saturation", "lightness"),
    transform: ({ hue: e, saturation: t, lightness: n, alpha: r = 1 }) => "hsla(" + Math.round(e) + ", " + Dt.transform(Oi(t)) + ", " + Dt.transform(Oi(n)) + ", " + Oi(Ai.transform(r)) + ")"
  }, Le = {
    test: (e) => Gn.test(e) || Au.test(e) || jr.test(e),
    parse: (e) => Gn.test(e) ? Gn.parse(e) : jr.test(e) ? jr.parse(e) : Au.parse(e),
    transform: (e) => ho(e) ? e : e.hasOwnProperty("red") ? Gn.transform(e) : jr.transform(e)
  }, le = (e, t, n) => -n * e + n * t + e;
  function hl(e, t, n) {
    return n < 0 && (n += 1), n > 1 && (n -= 1), n < 1 / 6 ? e + (t - e) * 6 * n : n < 1 / 2 ? t : n < 2 / 3 ? e + (t - e) * (2 / 3 - n) * 6 : e;
  }
  function Jk({ hue: e, saturation: t, lightness: n, alpha: r }) {
    e /= 360, t /= 100, n /= 100;
    let i = 0, o = 0, s = 0;
    if (!t)
      i = o = s = n;
    else {
      const a = n < 0.5 ? n * (1 + t) : n + t - n * t, l = 2 * n - a;
      i = hl(l, a, e + 1 / 3), o = hl(l, a, e), s = hl(l, a, e - 1 / 3);
    }
    return {
      red: Math.round(i * 255),
      green: Math.round(o * 255),
      blue: Math.round(s * 255),
      alpha: r
    };
  }
  const pl = (e, t, n) => {
    const r = e * e;
    return Math.sqrt(Math.max(0, n * (t * t - r) + r));
  }, e2 = [Au, Gn, jr], t2 = (e) => e2.find((t) => t.test(e));
  function Mh(e) {
    const t = t2(e);
    let n = t.parse(e);
    return t === jr && (n = Jk(n)), n;
  }
  const vv = (e, t) => {
    const n = Mh(e), r = Mh(t), i = { ...n };
    return (o) => (i.red = pl(n.red, r.red, o), i.green = pl(n.green, r.green, o), i.blue = pl(n.blue, r.blue, o), i.alpha = le(n.alpha, r.alpha, o), Gn.transform(i));
  };
  function n2(e) {
    var t, n;
    return isNaN(e) && ho(e) && (((t = e.match(Ea)) === null || t === void 0 ? void 0 : t.length) || 0) + (((n = e.match(Hg)) === null || n === void 0 ? void 0 : n.length) || 0) > 0;
  }
  const xv = {
    regex: XP,
    countKey: "Vars",
    token: "${v}",
    parse: he
  }, Sv = {
    regex: Hg,
    countKey: "Colors",
    token: "${c}",
    parse: Le.parse
  }, wv = {
    regex: Ea,
    countKey: "Numbers",
    token: "${n}",
    parse: hr.parse
  };
  function ml(e, { regex: t, countKey: n, token: r, parse: i }) {
    const o = e.tokenised.match(t);
    o && (e["num" + n] = o.length, e.tokenised = e.tokenised.replace(t, r), e.values.push(...o.map(i)));
  }
  function Ds(e) {
    const t = e.toString(), n = {
      value: t,
      tokenised: t,
      values: [],
      numVars: 0,
      numColors: 0,
      numNumbers: 0
    };
    return n.value.includes("var(--") && ml(n, xv), ml(n, Sv), ml(n, wv), n;
  }
  function Tv(e) {
    return Ds(e).values;
  }
  function Ev(e) {
    const { values: t, numColors: n, numVars: r, tokenised: i } = Ds(e), o = t.length;
    return (s) => {
      let a = i;
      for (let l = 0; l < o; l++)
        l < r ? a = a.replace(xv.token, s[l]) : l < r + n ? a = a.replace(Sv.token, Le.transform(s[l])) : a = a.replace(wv.token, Oi(s[l]));
      return a;
    };
  }
  const r2 = (e) => typeof e == "number" ? 0 : e;
  function i2(e) {
    const t = Tv(e);
    return Ev(e)(t.map(r2));
  }
  const An = {
    test: n2,
    parse: Tv,
    createTransformer: Ev,
    getAnimatableNone: i2
  }, Cv = (e, t) => (n) => `${n > 0 ? t : e}`;
  function Pv(e, t) {
    return typeof e == "number" ? (n) => le(e, t, n) : Le.test(e) ? vv(e, t) : e.startsWith("var(") ? Cv(e, t) : _v(e, t);
  }
  const kv = (e, t) => {
    const n = [...e], r = n.length, i = e.map((o, s) => Pv(o, t[s]));
    return (o) => {
      for (let s = 0; s < r; s++)
        n[s] = i[s](o);
      return n;
    };
  }, o2 = (e, t) => {
    const n = { ...e, ...t }, r = {};
    for (const i in n)
      e[i] !== void 0 && t[i] !== void 0 && (r[i] = Pv(e[i], t[i]));
    return (i) => {
      for (const o in r)
        n[o] = r[o](i);
      return n;
    };
  }, _v = (e, t) => {
    const n = An.createTransformer(t), r = Ds(e), i = Ds(t);
    return r.numVars === i.numVars && r.numColors === i.numColors && r.numNumbers >= i.numNumbers ? Tn(kv(r.values, i.values), n) : Cv(e, t);
  }, eo = (e, t, n) => {
    const r = t - e;
    return r === 0 ? 1 : (n - e) / r;
  }, Rh = (e, t) => (n) => le(e, t, n);
  function s2(e) {
    return typeof e == "number" ? Rh : typeof e == "string" ? Le.test(e) ? vv : _v : Array.isArray(e) ? kv : typeof e == "object" ? o2 : Rh;
  }
  function a2(e, t, n) {
    const r = [], i = n || s2(e[0]), o = e.length - 1;
    for (let s = 0; s < o; s++) {
      let a = i(e[s], e[s + 1]);
      if (t) {
        const l = Array.isArray(t) ? t[s] || he : t;
        a = Tn(l, a);
      }
      r.push(a);
    }
    return r;
  }
  function Av(e, t, { clamp: n = !0, ease: r, mixer: i } = {}) {
    const o = e.length;
    if (df(o === t.length), o === 1)
      return () => t[0];
    e[0] > e[o - 1] && (e = [...e].reverse(), t = [...t].reverse());
    const s = a2(t, r, i), a = s.length, l = (u) => {
      let f = 0;
      if (a > 1)
        for (; f < e.length - 2 && !(u < e[f + 1]); f++)
          ;
      const c = eo(e[f], e[f + 1], u);
      return s[f](c);
    };
    return n ? (u) => l(_n(e[0], e[o - 1], u)) : l;
  }
  function l2(e, t) {
    const n = e[e.length - 1];
    for (let r = 1; r <= t; r++) {
      const i = eo(0, t, r);
      e.push(le(n, 1, i));
    }
  }
  function u2(e) {
    const t = [0];
    return l2(t, e.length - 1), t;
  }
  function c2(e, t) {
    return e.map((n) => n * t);
  }
  function f2(e, t) {
    return e.map(() => t || dv).splice(0, e.length - 1);
  }
  function Ms({ duration: e = 300, keyframes: t, times: n, ease: r = "easeInOut" }) {
    const i = Gk(r) ? r.map(Dh) : Dh(r), o = {
      done: !1,
      value: t[0]
    }, s = c2(
      // Only use the provided offsets if they're the correct length
      // TODO Maybe we should warn here if there's a length mismatch
      n && n.length === t.length ? n : u2(t),
      e
    ), a = Av(s, t, {
      ease: Array.isArray(i) ? i : f2(t, i)
    });
    return {
      calculatedDuration: e,
      next: (l) => (o.value = a(l), o.done = l >= e, o)
    };
  }
  function Ov(e, t) {
    return t ? e * (1e3 / t) : 0;
  }
  const d2 = 5;
  function Fv(e, t, n) {
    const r = Math.max(t - d2, 0);
    return Ov(n - e(r), t - r);
  }
  const yl = 1e-3, h2 = 0.01, p2 = 10, m2 = 0.05, y2 = 1;
  function g2({ duration: e = 800, bounce: t = 0.25, velocity: n = 0, mass: r = 1 }) {
    let i, o, s = 1 - t;
    s = _n(m2, y2, s), e = _n(h2, p2, Gt(e)), s < 1 ? (i = (u) => {
      const f = u * s, c = f * e, d = f - n, p = Ou(u, s), g = Math.exp(-c);
      return yl - d / p * g;
    }, o = (u) => {
      const c = u * s * e, d = c * n + n, p = Math.pow(s, 2) * Math.pow(u, 2) * e, g = Math.exp(-c), v = Ou(Math.pow(u, 2), s);
      return (-i(u) + yl > 0 ? -1 : 1) * ((d - p) * g) / v;
    }) : (i = (u) => {
      const f = Math.exp(-u * e), c = (u - n) * e + 1;
      return -yl + f * c;
    }, o = (u) => {
      const f = Math.exp(-u * e), c = (n - u) * (e * e);
      return f * c;
    });
    const a = 5 / e, l = x2(i, o, a);
    if (e = Xn(e), isNaN(l))
      return {
        stiffness: 100,
        damping: 10,
        duration: e
      };
    {
      const u = Math.pow(l, 2) * r;
      return {
        stiffness: u,
        damping: s * 2 * Math.sqrt(r * u),
        duration: e
      };
    }
  }
  const v2 = 12;
  function x2(e, t, n) {
    let r = n;
    for (let i = 1; i < v2; i++)
      r = r - e(r) / t(r);
    return r;
  }
  function Ou(e, t) {
    return e * Math.sqrt(1 - t * t);
  }
  const S2 = ["duration", "bounce"], w2 = ["stiffness", "damping", "mass"];
  function Lh(e, t) {
    return t.some((n) => e[n] !== void 0);
  }
  function T2(e) {
    let t = {
      velocity: 0,
      stiffness: 100,
      damping: 10,
      mass: 1,
      isResolvedFromDuration: !1,
      ...e
    };
    if (!Lh(e, w2) && Lh(e, S2)) {
      const n = g2(e);
      t = {
        ...t,
        ...n,
        mass: 1
      }, t.isResolvedFromDuration = !0;
    }
    return t;
  }
  function jv({ keyframes: e, restDelta: t, restSpeed: n, ...r }) {
    const i = e[0], o = e[e.length - 1], s = { done: !1, value: i }, { stiffness: a, damping: l, mass: u, duration: f, velocity: c, isResolvedFromDuration: d } = T2({
      ...r,
      velocity: -Gt(r.velocity || 0)
    }), p = c || 0, g = l / (2 * Math.sqrt(a * u)), v = o - i, T = Gt(Math.sqrt(a / u)), y = Math.abs(v) < 5;
    n || (n = y ? 0.01 : 2), t || (t = y ? 5e-3 : 0.5);
    let h;
    if (g < 1) {
      const m = Ou(T, g);
      h = (x) => {
        const k = Math.exp(-g * T * x);
        return o - k * ((p + g * T * v) / m * Math.sin(m * x) + v * Math.cos(m * x));
      };
    } else if (g === 1)
      h = (m) => o - Math.exp(-T * m) * (v + (p + T * v) * m);
    else {
      const m = T * Math.sqrt(g * g - 1);
      h = (x) => {
        const k = Math.exp(-g * T * x), E = Math.min(m * x, 300);
        return o - k * ((p + g * T * v) * Math.sinh(E) + m * v * Math.cosh(E)) / m;
      };
    }
    return {
      calculatedDuration: d && f || null,
      next: (m) => {
        const x = h(m);
        if (d)
          s.done = m >= f;
        else {
          let k = p;
          m !== 0 && (g < 1 ? k = Fv(h, m, x) : k = 0);
          const E = Math.abs(k) <= n, C = Math.abs(o - x) <= t;
          s.done = E && C;
        }
        return s.value = s.done ? o : x, s;
      }
    };
  }
  function Vh({ keyframes: e, velocity: t = 0, power: n = 0.8, timeConstant: r = 325, bounceDamping: i = 10, bounceStiffness: o = 500, modifyTarget: s, min: a, max: l, restDelta: u = 0.5, restSpeed: f }) {
    const c = e[0], d = {
      done: !1,
      value: c
    }, p = (_) => a !== void 0 && _ < a || l !== void 0 && _ > l, g = (_) => a === void 0 ? l : l === void 0 || Math.abs(a - _) < Math.abs(l - _) ? a : l;
    let v = n * t;
    const T = c + v, y = s === void 0 ? T : s(T);
    y !== T && (v = y - c);
    const h = (_) => -v * Math.exp(-_ / r), m = (_) => y + h(_), x = (_) => {
      const L = h(_), V = m(_);
      d.done = Math.abs(L) <= u, d.value = d.done ? y : V;
    };
    let k, E;
    const C = (_) => {
      p(d.value) && (k = _, E = jv({
        keyframes: [d.value, g(d.value)],
        velocity: Fv(m, _, d.value),
        damping: i,
        stiffness: o,
        restDelta: u,
        restSpeed: f
      }));
    };
    return C(0), {
      calculatedDuration: null,
      next: (_) => {
        let L = !1;
        return !E && k === void 0 && (L = !0, x(_), C(_)), k !== void 0 && _ > k ? E.next(_ - k) : (!L && x(_), d);
      }
    };
  }
  const E2 = (e) => {
    const t = ({ timestamp: n }) => e(n);
    return {
      start: () => te.update(t, !0),
      stop: () => Zt(t),
      /**
       * If we're processing this frame we can use the
       * framelocked timestamp to keep things in sync.
       */
      now: () => Fe.isProcessing ? Fe.timestamp : performance.now()
    };
  }, Nh = 2e4;
  function bh(e) {
    let t = 0;
    const n = 50;
    let r = e.next(t);
    for (; !r.done && t < Nh; )
      t += n, r = e.next(t);
    return t >= Nh ? 1 / 0 : t;
  }
  const C2 = {
    decay: Vh,
    inertia: Vh,
    tween: Ms,
    keyframes: Ms,
    spring: jv
  };
  function Rs({ autoplay: e = !0, delay: t = 0, driver: n = E2, keyframes: r, type: i = "keyframes", repeat: o = 0, repeatDelay: s = 0, repeatType: a = "loop", onPlay: l, onStop: u, onComplete: f, onUpdate: c, ...d }) {
    let p = 1, g = !1, v, T;
    const y = () => {
      T = new Promise((R) => {
        v = R;
      });
    };
    y();
    let h;
    const m = C2[i] || Ms;
    let x;
    m !== Ms && typeof r[0] != "number" && (x = Av([0, 100], r, {
      clamp: !1
    }), r = [0, 100]);
    const k = m({ ...d, keyframes: r });
    let E;
    a === "mirror" && (E = m({
      ...d,
      keyframes: [...r].reverse(),
      velocity: -(d.velocity || 0)
    }));
    let C = "idle", _ = null, L = null, V = null;
    k.calculatedDuration === null && o && (k.calculatedDuration = bh(k));
    const { calculatedDuration: I } = k;
    let G = 1 / 0, W = 1 / 0;
    I !== null && (G = I + s, W = G * (o + 1) - s);
    let K = 0;
    const Qe = (R) => {
      if (L === null)
        return;
      p > 0 && (L = Math.min(L, R)), p < 0 && (L = Math.min(R - W / p, L)), _ !== null ? K = _ : K = Math.round(R - L) * p;
      const U = K - t * (p >= 0 ? 1 : -1), Me = p >= 0 ? U < 0 : U > W;
      K = Math.max(U, 0), C === "finished" && _ === null && (K = W);
      let Re = K, Ye = k;
      if (o) {
        const pr = Math.min(K, W) / G;
        let Rn = Math.floor(pr), yt = pr % 1;
        !yt && pr >= 1 && (yt = 1), yt === 1 && Rn--, Rn = Math.min(Rn, o + 1), !!(Rn % 2) && (a === "reverse" ? (yt = 1 - yt, s && (yt -= s / G)) : a === "mirror" && (Ye = E)), Re = _n(0, 1, yt) * G;
      }
      const _e = Me ? { done: !1, value: r[0] } : Ye.next(Re);
      x && (_e.value = x(_e.value));
      let { done: mt } = _e;
      !Me && I !== null && (mt = p >= 0 ? K >= W : K <= 0);
      const yo = _ === null && (C === "finished" || C === "running" && mt);
      return c && c(_e.value), yo && P(), _e;
    }, q = () => {
      h && h.stop(), h = void 0;
    }, ke = () => {
      C = "idle", q(), v(), y(), L = V = null;
    }, P = () => {
      C = "finished", f && f(), q(), v();
    }, O = () => {
      if (g)
        return;
      h || (h = n(Qe));
      const R = h.now();
      l && l(), _ !== null ? L = R - _ : (!L || C === "finished") && (L = R), C === "finished" && y(), V = L, _ = null, C = "running", h.start();
    };
    e && O();
    const j = {
      then(R, U) {
        return T.then(R, U);
      },
      get time() {
        return Gt(K);
      },
      set time(R) {
        R = Xn(R), K = R, _ !== null || !h || p === 0 ? _ = R : L = h.now() - R / p;
      },
      get duration() {
        const R = k.calculatedDuration === null ? bh(k) : k.calculatedDuration;
        return Gt(R);
      },
      get speed() {
        return p;
      },
      set speed(R) {
        R === p || !h || (p = R, j.time = Gt(K));
      },
      get state() {
        return C;
      },
      play: O,
      pause: () => {
        C = "paused", _ = K;
      },
      stop: () => {
        g = !0, C !== "idle" && (C = "idle", u && u(), ke());
      },
      cancel: () => {
        V !== null && Qe(V), ke();
      },
      complete: () => {
        C = "finished";
      },
      sample: (R) => (L = 0, Qe(R))
    };
    return j;
  }
  function P2(e) {
    let t;
    return () => (t === void 0 && (t = e()), t);
  }
  const k2 = P2(() => Object.hasOwnProperty.call(Element.prototype, "animate")), _2 = /* @__PURE__ */ new Set([
    "opacity",
    "clipPath",
    "filter",
    "transform",
    "backgroundColor"
  ]), bo = 10, A2 = 2e4, O2 = (e, t) => t.type === "spring" || e === "backgroundColor" || !lv(t.ease);
  function F2(e, t, { onUpdate: n, onComplete: r, ...i }) {
    if (!(k2() && _2.has(t) && !i.repeatDelay && i.repeatType !== "mirror" && i.damping !== 0 && i.type !== "inertia"))
      return !1;
    let s = !1, a, l, u = !1;
    const f = () => {
      l = new Promise((m) => {
        a = m;
      });
    };
    f();
    let { keyframes: c, duration: d = 300, ease: p, times: g } = i;
    if (O2(t, i)) {
      const m = Rs({
        ...i,
        repeat: 0,
        delay: 0
      });
      let x = { done: !1, value: c[0] };
      const k = [];
      let E = 0;
      for (; !x.done && E < A2; )
        x = m.sample(E), k.push(x.value), E += bo;
      g = void 0, c = k, d = E - bo, p = "linear";
    }
    const v = $k(e.owner.current, t, c, {
      ...i,
      duration: d,
      /**
       * This function is currently not called if ease is provided
       * as a function so the cast is safe.
       *
       * However it would be possible for a future refinement to port
       * in easing pregeneration from Motion One for browsers that
       * support the upcoming `linear()` easing function.
       */
      ease: p,
      times: g
    }), T = () => {
      u = !1, v.cancel();
    }, y = () => {
      u = !0, te.update(T), a(), f();
    };
    return v.onfinish = () => {
      u || (e.set(Ik(c, i)), r && r(), y());
    }, {
      then(m, x) {
        return l.then(m, x);
      },
      attachTimeline(m) {
        return v.timeline = m, v.onfinish = null, he;
      },
      get time() {
        return Gt(v.currentTime || 0);
      },
      set time(m) {
        v.currentTime = Xn(m);
      },
      get speed() {
        return v.playbackRate;
      },
      set speed(m) {
        v.playbackRate = m;
      },
      get duration() {
        return Gt(d);
      },
      play: () => {
        s || (v.play(), Zt(T));
      },
      pause: () => v.pause(),
      stop: () => {
        if (s = !0, v.playState === "idle")
          return;
        const { currentTime: m } = v;
        if (m) {
          const x = Rs({
            ...i,
            autoplay: !1
          });
          e.setWithVelocity(x.sample(m - bo).value, x.sample(m).value, bo);
        }
        y();
      },
      complete: () => {
        u || v.finish();
      },
      cancel: y
    };
  }
  function j2({ keyframes: e, delay: t, onUpdate: n, onComplete: r }) {
    const i = () => (n && n(e[e.length - 1]), r && r(), {
      time: 0,
      speed: 1,
      duration: 0,
      play: he,
      pause: he,
      stop: he,
      then: (o) => (o(), Promise.resolve()),
      cancel: he,
      complete: he
    });
    return t ? Rs({
      keyframes: [0, 1],
      duration: 0,
      delay: t,
      onComplete: i
    }) : i();
  }
  const D2 = {
    type: "spring",
    stiffness: 500,
    damping: 25,
    restSpeed: 10
  }, M2 = (e) => ({
    type: "spring",
    stiffness: 550,
    damping: e === 0 ? 2 * Math.sqrt(550) : 30,
    restSpeed: 10
  }), R2 = {
    type: "keyframes",
    duration: 0.8
  }, L2 = {
    type: "keyframes",
    ease: [0.25, 0.1, 0.35, 1],
    duration: 0.3
  }, V2 = (e, { keyframes: t }) => t.length > 2 ? R2 : dr.has(e) ? e.startsWith("scale") ? M2(t[1]) : D2 : L2, Fu = (e, t) => e === "zIndex" ? !1 : !!(typeof t == "number" || Array.isArray(t) || typeof t == "string" && // It's animatable if we have a string
  (An.test(t) || t === "0") && // And it contains numbers and/or colors
  !t.startsWith("url(")), N2 = /* @__PURE__ */ new Set(["brightness", "contrast", "saturate", "opacity"]);
  function b2(e) {
    const [t, n] = e.slice(0, -1).split("(");
    if (t === "drop-shadow")
      return e;
    const [r] = n.match(Ea) || [];
    if (!r)
      return e;
    const i = n.replace(r, "");
    let o = N2.has(t) ? 1 : 0;
    return r !== n && (o *= 100), t + "(" + o + i + ")";
  }
  const $2 = /([a-z-]*)\(.*?\)/g, ju = {
    ...An,
    getAnimatableNone: (e) => {
      const t = e.match($2);
      return t ? t.map(b2).join(" ") : e;
    }
  }, I2 = {
    ...Wg,
    // Color props
    color: Le,
    backgroundColor: Le,
    outlineColor: Le,
    fill: Le,
    stroke: Le,
    // Border props
    borderColor: Le,
    borderTopColor: Le,
    borderRightColor: Le,
    borderBottomColor: Le,
    borderLeftColor: Le,
    filter: ju,
    WebkitFilter: ju
  }, yf = (e) => I2[e];
  function Dv(e, t) {
    let n = yf(e);
    return n !== ju && (n = An), n.getAnimatableNone ? n.getAnimatableNone(t) : void 0;
  }
  const Mv = (e) => /^0[^.\s]+$/.test(e);
  function z2(e) {
    if (typeof e == "number")
      return e === 0;
    if (e !== null)
      return e === "none" || e === "0" || Mv(e);
  }
  function B2(e, t, n, r) {
    const i = Fu(t, n);
    let o;
    Array.isArray(n) ? o = [...n] : o = [null, n];
    const s = r.from !== void 0 ? r.from : e.get();
    let a;
    const l = [];
    for (let u = 0; u < o.length; u++)
      o[u] === null && (o[u] = u === 0 ? s : o[u - 1]), z2(o[u]) && l.push(u), typeof o[u] == "string" && o[u] !== "none" && o[u] !== "0" && (a = o[u]);
    if (i && l.length && a)
      for (let u = 0; u < l.length; u++) {
        const f = l[u];
        o[f] = Dv(t, a);
      }
    return o;
  }
  function U2({ when: e, delay: t, delayChildren: n, staggerChildren: r, staggerDirection: i, repeat: o, repeatType: s, repeatDelay: a, from: l, elapsed: u, ...f }) {
    return !!Object.keys(f).length;
  }
  function gf(e, t) {
    return e[t] || e.default || e;
  }
  const H2 = {
    skipAnimations: !1
  }, vf = (e, t, n, r = {}) => (i) => {
    const o = gf(r, e) || {}, s = o.delay || r.delay || 0;
    let { elapsed: a = 0 } = r;
    a = a - Xn(s);
    const l = B2(t, e, n, o), u = l[0], f = l[l.length - 1], c = Fu(e, u), d = Fu(e, f);
    let p = {
      keyframes: l,
      velocity: t.getVelocity(),
      ease: "easeOut",
      ...o,
      delay: -a,
      onUpdate: (g) => {
        t.set(g), o.onUpdate && o.onUpdate(g);
      },
      onComplete: () => {
        i(), o.onComplete && o.onComplete();
      }
    };
    if (U2(o) || (p = {
      ...p,
      ...V2(e, p)
    }), p.duration && (p.duration = Xn(p.duration)), p.repeatDelay && (p.repeatDelay = Xn(p.repeatDelay)), !c || !d || bk.current || o.type === !1 || H2.skipAnimations)
      return j2(p);
    if (
      /**
       * If this is a handoff animation, the optimised animation will be running via
       * WAAPI. Therefore, this animation must be JS to ensure it runs "under" the
       * optimised animation.
       */
      !r.isHandoff && t.owner && t.owner.current instanceof HTMLElement && /**
       * If we're outputting values to onUpdate then we can't use WAAPI as there's
       * no way to read the value from WAAPI every frame.
       */
      !t.owner.getProps().onUpdate
    ) {
      const g = F2(t, e, p);
      if (g)
        return g;
    }
    return Rs(p);
  };
  function Ls(e) {
    return !!(Ke(e) && e.add);
  }
  const Rv = (e) => /^\-?\d*\.?\d+$/.test(e);
  function xf(e, t) {
    e.indexOf(t) === -1 && e.push(t);
  }
  function Sf(e, t) {
    const n = e.indexOf(t);
    n > -1 && e.splice(n, 1);
  }
  class wf {
    constructor() {
      this.subscriptions = [];
    }
    add(t) {
      return xf(this.subscriptions, t), () => Sf(this.subscriptions, t);
    }
    notify(t, n, r) {
      const i = this.subscriptions.length;
      if (i)
        if (i === 1)
          this.subscriptions[0](t, n, r);
        else
          for (let o = 0; o < i; o++) {
            const s = this.subscriptions[o];
            s && s(t, n, r);
          }
    }
    getSize() {
      return this.subscriptions.length;
    }
    clear() {
      this.subscriptions.length = 0;
    }
  }
  const W2 = (e) => !isNaN(parseFloat(e));
  class G2 {
    /**
     * @param init - The initiating value
     * @param config - Optional configuration options
     *
     * -  `transformer`: A function to transform incoming values with.
     *
     * @internal
     */
    constructor(t, n = {}) {
      this.version = "10.18.0", this.timeDelta = 0, this.lastUpdated = 0, this.canTrackVelocity = !1, this.events = {}, this.updateAndNotify = (r, i = !0) => {
        this.prev = this.current, this.current = r;
        const { delta: o, timestamp: s } = Fe;
        this.lastUpdated !== s && (this.timeDelta = o, this.lastUpdated = s, te.postRender(this.scheduleVelocityCheck)), this.prev !== this.current && this.events.change && this.events.change.notify(this.current), this.events.velocityChange && this.events.velocityChange.notify(this.getVelocity()), i && this.events.renderRequest && this.events.renderRequest.notify(this.current);
      }, this.scheduleVelocityCheck = () => te.postRender(this.velocityCheck), this.velocityCheck = ({ timestamp: r }) => {
        r !== this.lastUpdated && (this.prev = this.current, this.events.velocityChange && this.events.velocityChange.notify(this.getVelocity()));
      }, this.hasAnimated = !1, this.prev = this.current = t, this.canTrackVelocity = W2(this.current), this.owner = n.owner;
    }
    /**
     * Adds a function that will be notified when the `MotionValue` is updated.
     *
     * It returns a function that, when called, will cancel the subscription.
     *
     * When calling `onChange` inside a React component, it should be wrapped with the
     * `useEffect` hook. As it returns an unsubscribe function, this should be returned
     * from the `useEffect` function to ensure you don't add duplicate subscribers..
     *
     * ```jsx
     * export const MyComponent = () => {
     *   const x = useMotionValue(0)
     *   const y = useMotionValue(0)
     *   const opacity = useMotionValue(1)
     *
     *   useEffect(() => {
     *     function updateOpacity() {
     *       const maxXY = Math.max(x.get(), y.get())
     *       const newOpacity = transform(maxXY, [0, 100], [1, 0])
     *       opacity.set(newOpacity)
     *     }
     *
     *     const unsubscribeX = x.on("change", updateOpacity)
     *     const unsubscribeY = y.on("change", updateOpacity)
     *
     *     return () => {
     *       unsubscribeX()
     *       unsubscribeY()
     *     }
     *   }, [])
     *
     *   return <motion.div style={{ x }} />
     * }
     * ```
     *
     * @param subscriber - A function that receives the latest value.
     * @returns A function that, when called, will cancel this subscription.
     *
     * @deprecated
     */
    onChange(t) {
      return this.on("change", t);
    }
    on(t, n) {
      this.events[t] || (this.events[t] = new wf());
      const r = this.events[t].add(n);
      return t === "change" ? () => {
        r(), te.read(() => {
          this.events.change.getSize() || this.stop();
        });
      } : r;
    }
    clearListeners() {
      for (const t in this.events)
        this.events[t].clear();
    }
    /**
     * Attaches a passive effect to the `MotionValue`.
     *
     * @internal
     */
    attach(t, n) {
      this.passiveEffect = t, this.stopPassiveEffect = n;
    }
    /**
     * Sets the state of the `MotionValue`.
     *
     * @remarks
     *
     * ```jsx
     * const x = useMotionValue(0)
     * x.set(10)
     * ```
     *
     * @param latest - Latest value to set.
     * @param render - Whether to notify render subscribers. Defaults to `true`
     *
     * @public
     */
    set(t, n = !0) {
      !n || !this.passiveEffect ? this.updateAndNotify(t, n) : this.passiveEffect(t, this.updateAndNotify);
    }
    setWithVelocity(t, n, r) {
      this.set(n), this.prev = t, this.timeDelta = r;
    }
    /**
     * Set the state of the `MotionValue`, stopping any active animations,
     * effects, and resets velocity to `0`.
     */
    jump(t) {
      this.updateAndNotify(t), this.prev = t, this.stop(), this.stopPassiveEffect && this.stopPassiveEffect();
    }
    /**
     * Returns the latest state of `MotionValue`
     *
     * @returns - The latest state of `MotionValue`
     *
     * @public
     */
    get() {
      return this.current;
    }
    /**
     * @public
     */
    getPrevious() {
      return this.prev;
    }
    /**
     * Returns the latest velocity of `MotionValue`
     *
     * @returns - The latest velocity of `MotionValue`. Returns `0` if the state is non-numerical.
     *
     * @public
     */
    getVelocity() {
      return this.canTrackVelocity ? (
        // These casts could be avoided if parseFloat would be typed better
        Ov(parseFloat(this.current) - parseFloat(this.prev), this.timeDelta)
      ) : 0;
    }
    /**
     * Registers a new animation to control this `MotionValue`. Only one
     * animation can drive a `MotionValue` at one time.
     *
     * ```jsx
     * value.start()
     * ```
     *
     * @param animation - A function that starts the provided animation
     *
     * @internal
     */
    start(t) {
      return this.stop(), new Promise((n) => {
        this.hasAnimated = !0, this.animation = t(n), this.events.animationStart && this.events.animationStart.notify();
      }).then(() => {
        this.events.animationComplete && this.events.animationComplete.notify(), this.clearAnimation();
      });
    }
    /**
     * Stop the currently active animation.
     *
     * @public
     */
    stop() {
      this.animation && (this.animation.stop(), this.events.animationCancel && this.events.animationCancel.notify()), this.clearAnimation();
    }
    /**
     * Returns `true` if this value is currently animating.
     *
     * @public
     */
    isAnimating() {
      return !!this.animation;
    }
    clearAnimation() {
      delete this.animation;
    }
    /**
     * Destroy and clean up subscribers to this `MotionValue`.
     *
     * The `MotionValue` hooks like `useMotionValue` and `useTransform` automatically
     * handle the lifecycle of the returned `MotionValue`, so this method is only necessary if you've manually
     * created a `MotionValue` via the `motionValue` function.
     *
     * @public
     */
    destroy() {
      this.clearListeners(), this.stop(), this.stopPassiveEffect && this.stopPassiveEffect();
    }
  }
  function Qr(e, t) {
    return new G2(e, t);
  }
  const Lv = (e) => (t) => t.test(e), K2 = {
    test: (e) => e === "auto",
    parse: (e) => e
  }, Vv = [hr, $, Dt, nn, ek, JP, K2], ci = (e) => Vv.find(Lv(e)), Q2 = [...Vv, Le, An], Y2 = (e) => Q2.find(Lv(e));
  function X2(e, t, n) {
    e.hasValue(t) ? e.getValue(t).set(n) : e.addValue(t, Qr(n));
  }
  function Z2(e, t) {
    const n = Pa(e, t);
    let { transitionEnd: r = {}, transition: i = {}, ...o } = n ? e.makeTargetAnimatable(n, !1) : {};
    o = { ...o, ...r };
    for (const s in o) {
      const a = pk(o[s]);
      X2(e, s, a);
    }
  }
  function q2(e, t, n) {
    var r, i;
    const o = Object.keys(t).filter((a) => !e.hasValue(a)), s = o.length;
    if (s)
      for (let a = 0; a < s; a++) {
        const l = o[a], u = t[l];
        let f = null;
        Array.isArray(u) && (f = u[0]), f === null && (f = (i = (r = n[l]) !== null && r !== void 0 ? r : e.readValue(l)) !== null && i !== void 0 ? i : t[l]), f != null && (typeof f == "string" && (Rv(f) || Mv(f)) ? f = parseFloat(f) : !Y2(f) && An.test(u) && (f = Dv(l, u)), e.addValue(l, Qr(f, { owner: e })), n[l] === void 0 && (n[l] = f), f !== null && e.setBaseTarget(l, f));
      }
  }
  function J2(e, t) {
    return t ? (t[e] || t.default || t).from : void 0;
  }
  function e_(e, t, n) {
    const r = {};
    for (const i in e) {
      const o = J2(i, t);
      if (o !== void 0)
        r[i] = o;
      else {
        const s = n.getValue(i);
        s && (r[i] = s.get());
      }
    }
    return r;
  }
  function t_({ protectedKeys: e, needsAnimating: t }, n) {
    const r = e.hasOwnProperty(n) && t[n] !== !0;
    return t[n] = !1, r;
  }
  function n_(e, t) {
    const n = e.get();
    if (Array.isArray(t)) {
      for (let r = 0; r < t.length; r++)
        if (t[r] !== n)
          return !0;
    } else
      return n !== t;
  }
  function Nv(e, t, { delay: n = 0, transitionOverride: r, type: i } = {}) {
    let { transition: o = e.getDefaultTransition(), transitionEnd: s, ...a } = e.makeTargetAnimatable(t);
    const l = e.getValue("willChange");
    r && (o = r);
    const u = [], f = i && e.animationState && e.animationState.getState()[i];
    for (const c in a) {
      const d = e.getValue(c), p = a[c];
      if (!d || p === void 0 || f && t_(f, c))
        continue;
      const g = {
        delay: n,
        elapsed: 0,
        ...gf(o || {}, c)
      };
      if (window.HandoffAppearAnimations) {
        const y = e.getProps()[bg];
        if (y) {
          const h = window.HandoffAppearAnimations(y, c, d, te);
          h !== null && (g.elapsed = h, g.isHandoff = !0);
        }
      }
      let v = !g.isHandoff && !n_(d, p);
      if (g.type === "spring" && (d.getVelocity() || g.velocity) && (v = !1), d.animation && (v = !1), v)
        continue;
      d.start(vf(c, d, p, e.shouldReduceMotion && dr.has(c) ? { type: !1 } : g));
      const T = d.animation;
      Ls(l) && (l.add(c), T.then(() => l.remove(c))), u.push(T);
    }
    return s && Promise.all(u).then(() => {
      s && Z2(e, s);
    }), u;
  }
  function Du(e, t, n = {}) {
    const r = Pa(e, t, n.custom);
    let { transition: i = e.getDefaultTransition() || {} } = r || {};
    n.transitionOverride && (i = n.transitionOverride);
    const o = r ? () => Promise.all(Nv(e, r, n)) : () => Promise.resolve(), s = e.variantChildren && e.variantChildren.size ? (l = 0) => {
      const { delayChildren: u = 0, staggerChildren: f, staggerDirection: c } = i;
      return r_(e, t, u + l, f, c, n);
    } : () => Promise.resolve(), { when: a } = i;
    if (a) {
      const [l, u] = a === "beforeChildren" ? [o, s] : [s, o];
      return l().then(() => u());
    } else
      return Promise.all([o(), s(n.delay)]);
  }
  function r_(e, t, n = 0, r = 0, i = 1, o) {
    const s = [], a = (e.variantChildren.size - 1) * r, l = i === 1 ? (u = 0) => u * r : (u = 0) => a - u * r;
    return Array.from(e.variantChildren).sort(i_).forEach((u, f) => {
      u.notify("AnimationStart", t), s.push(Du(u, t, {
        ...o,
        delay: n + l(f)
      }).then(() => u.notify("AnimationComplete", t)));
    }), Promise.all(s);
  }
  function i_(e, t) {
    return e.sortNodePosition(t);
  }
  function o_(e, t, n = {}) {
    e.notify("AnimationStart", t);
    let r;
    if (Array.isArray(t)) {
      const i = t.map((o) => Du(e, o, n));
      r = Promise.all(i);
    } else if (typeof t == "string")
      r = Du(e, t, n);
    else {
      const i = typeof t == "function" ? Pa(e, t, n.custom) : t;
      r = Promise.all(Nv(e, i, n));
    }
    return r.then(() => e.notify("AnimationComplete", t));
  }
  const s_ = [...tf].reverse(), a_ = tf.length;
  function l_(e) {
    return (t) => Promise.all(t.map(({ animation: n, options: r }) => o_(e, n, r)));
  }
  function u_(e) {
    let t = l_(e);
    const n = f_();
    let r = !0;
    const i = (l, u) => {
      const f = Pa(e, u);
      if (f) {
        const { transition: c, transitionEnd: d, ...p } = f;
        l = { ...l, ...p, ...d };
      }
      return l;
    };
    function o(l) {
      t = l(e);
    }
    function s(l, u) {
      const f = e.getProps(), c = e.getVariantContext(!0) || {}, d = [], p = /* @__PURE__ */ new Set();
      let g = {}, v = 1 / 0;
      for (let y = 0; y < a_; y++) {
        const h = s_[y], m = n[h], x = f[h] !== void 0 ? f[h] : c[h], k = qi(x), E = h === u ? m.isActive : null;
        E === !1 && (v = y);
        let C = x === c[h] && x !== f[h] && k;
        if (C && r && e.manuallyAnimateOnMount && (C = !1), m.protectedKeys = { ...g }, // If it isn't active and hasn't *just* been set as inactive
        !m.isActive && E === null || // If we didn't and don't have any defined prop for this animation type
        !x && !m.prevProp || // Or if the prop doesn't define an animation
        wa(x) || typeof x == "boolean")
          continue;
        let L = c_(m.prevProp, x) || // If we're making this variant active, we want to always make it active
        h === u && m.isActive && !C && k || // If we removed a higher-priority variant (i is in reverse order)
        y > v && k, V = !1;
        const I = Array.isArray(x) ? x : [x];
        let G = I.reduce(i, {});
        E === !1 && (G = {});
        const { prevResolvedValues: W = {} } = m, K = {
          ...W,
          ...G
        }, Qe = (q) => {
          L = !0, p.has(q) && (V = !0, p.delete(q)), m.needsAnimating[q] = !0;
        };
        for (const q in K) {
          const ke = G[q], P = W[q];
          if (g.hasOwnProperty(q))
            continue;
          let O = !1;
          js(ke) && js(P) ? O = !sv(ke, P) : O = ke !== P, O ? ke !== void 0 ? Qe(q) : p.add(q) : ke !== void 0 && p.has(q) ? Qe(q) : m.protectedKeys[q] = !0;
        }
        m.prevProp = x, m.prevResolvedValues = G, m.isActive && (g = { ...g, ...G }), r && e.blockInitialAnimation && (L = !1), L && (!C || V) && d.push(...I.map((q) => ({
          animation: q,
          options: { type: h, ...l }
        })));
      }
      if (p.size) {
        const y = {};
        p.forEach((h) => {
          const m = e.getBaseTarget(h);
          m !== void 0 && (y[h] = m);
        }), d.push({ animation: y });
      }
      let T = !!d.length;
      return r && (f.initial === !1 || f.initial === f.animate) && !e.manuallyAnimateOnMount && (T = !1), r = !1, T ? t(d) : Promise.resolve();
    }
    function a(l, u, f) {
      var c;
      if (n[l].isActive === u)
        return Promise.resolve();
      (c = e.variantChildren) === null || c === void 0 || c.forEach((p) => {
        var g;
        return (g = p.animationState) === null || g === void 0 ? void 0 : g.setActive(l, u);
      }), n[l].isActive = u;
      const d = s(f, l);
      for (const p in n)
        n[p].protectedKeys = {};
      return d;
    }
    return {
      animateChanges: s,
      setActive: a,
      setAnimateFunction: o,
      getState: () => n
    };
  }
  function c_(e, t) {
    return typeof t == "string" ? t !== e : Array.isArray(t) ? !sv(t, e) : !1;
  }
  function Vn(e = !1) {
    return {
      isActive: e,
      protectedKeys: {},
      needsAnimating: {},
      prevResolvedValues: {}
    };
  }
  function f_() {
    return {
      animate: Vn(!0),
      whileInView: Vn(),
      whileHover: Vn(),
      whileTap: Vn(),
      whileDrag: Vn(),
      whileFocus: Vn(),
      exit: Vn()
    };
  }
  class d_ extends Mn {
    /**
     * We dynamically generate the AnimationState manager as it contains a reference
     * to the underlying animation library. We only want to load that if we load this,
     * so people can optionally code split it out using the `m` component.
     */
    constructor(t) {
      super(t), t.animationState || (t.animationState = u_(t));
    }
    updateAnimationControlsSubscription() {
      const { animate: t } = this.node.getProps();
      this.unmount(), wa(t) && (this.unmount = t.subscribe(this.node));
    }
    /**
     * Subscribe any provided AnimationControls to the component's VisualElement
     */
    mount() {
      this.updateAnimationControlsSubscription();
    }
    update() {
      const { animate: t } = this.node.getProps(), { animate: n } = this.node.prevProps || {};
      t !== n && this.updateAnimationControlsSubscription();
    }
    unmount() {
    }
  }
  let h_ = 0;
  class p_ extends Mn {
    constructor() {
      super(...arguments), this.id = h_++;
    }
    update() {
      if (!this.node.presenceContext)
        return;
      const { isPresent: t, onExitComplete: n, custom: r } = this.node.presenceContext, { isPresent: i } = this.node.prevPresenceContext || {};
      if (!this.node.animationState || t === i)
        return;
      const o = this.node.animationState.setActive("exit", !t, { custom: r ?? this.node.getProps().custom });
      n && !t && o.then(() => n(this.id));
    }
    mount() {
      const { register: t } = this.node.presenceContext || {};
      t && (this.unmount = t(this.id));
    }
    unmount() {
    }
  }
  const m_ = {
    animation: {
      Feature: d_
    },
    exit: {
      Feature: p_
    }
  }, $h = (e, t) => Math.abs(e - t);
  function y_(e, t) {
    const n = $h(e.x, t.x), r = $h(e.y, t.y);
    return Math.sqrt(n ** 2 + r ** 2);
  }
  class bv {
    constructor(t, n, { transformPagePoint: r, contextWindow: i, dragSnapToOrigin: o = !1 } = {}) {
      if (this.startEvent = null, this.lastMoveEvent = null, this.lastMoveEventInfo = null, this.handlers = {}, this.contextWindow = window, this.updatePoint = () => {
        if (!(this.lastMoveEvent && this.lastMoveEventInfo))
          return;
        const c = vl(this.lastMoveEventInfo, this.history), d = this.startEvent !== null, p = y_(c.offset, { x: 0, y: 0 }) >= 3;
        if (!d && !p)
          return;
        const { point: g } = c, { timestamp: v } = Fe;
        this.history.push({ ...g, timestamp: v });
        const { onStart: T, onMove: y } = this.handlers;
        d || (T && T(this.lastMoveEvent, c), this.startEvent = this.lastMoveEvent), y && y(this.lastMoveEvent, c);
      }, this.handlePointerMove = (c, d) => {
        this.lastMoveEvent = c, this.lastMoveEventInfo = gl(d, this.transformPagePoint), te.update(this.updatePoint, !0);
      }, this.handlePointerUp = (c, d) => {
        this.end();
        const { onEnd: p, onSessionEnd: g, resumeAnimation: v } = this.handlers;
        if (this.dragSnapToOrigin && v && v(), !(this.lastMoveEvent && this.lastMoveEventInfo))
          return;
        const T = vl(c.type === "pointercancel" ? this.lastMoveEventInfo : gl(d, this.transformPagePoint), this.history);
        this.startEvent && p && p(c, T), g && g(c, T);
      }, !tv(t))
        return;
      this.dragSnapToOrigin = o, this.handlers = n, this.transformPagePoint = r, this.contextWindow = i || window;
      const s = Ca(t), a = gl(s, this.transformPagePoint), { point: l } = a, { timestamp: u } = Fe;
      this.history = [{ ...l, timestamp: u }];
      const { onSessionStart: f } = n;
      f && f(t, vl(a, this.history)), this.removeListeners = Tn(Wt(this.contextWindow, "pointermove", this.handlePointerMove), Wt(this.contextWindow, "pointerup", this.handlePointerUp), Wt(this.contextWindow, "pointercancel", this.handlePointerUp));
    }
    updateHandlers(t) {
      this.handlers = t;
    }
    end() {
      this.removeListeners && this.removeListeners(), Zt(this.updatePoint);
    }
  }
  function gl(e, t) {
    return t ? { point: t(e.point) } : e;
  }
  function Ih(e, t) {
    return { x: e.x - t.x, y: e.y - t.y };
  }
  function vl({ point: e }, t) {
    return {
      point: e,
      delta: Ih(e, $v(t)),
      offset: Ih(e, g_(t)),
      velocity: v_(t, 0.1)
    };
  }
  function g_(e) {
    return e[0];
  }
  function $v(e) {
    return e[e.length - 1];
  }
  function v_(e, t) {
    if (e.length < 2)
      return { x: 0, y: 0 };
    let n = e.length - 1, r = null;
    const i = $v(e);
    for (; n >= 0 && (r = e[n], !(i.timestamp - r.timestamp > Xn(t))); )
      n--;
    if (!r)
      return { x: 0, y: 0 };
    const o = Gt(i.timestamp - r.timestamp);
    if (o === 0)
      return { x: 0, y: 0 };
    const s = {
      x: (i.x - r.x) / o,
      y: (i.y - r.y) / o
    };
    return s.x === 1 / 0 && (s.x = 0), s.y === 1 / 0 && (s.y = 0), s;
  }
  function nt(e) {
    return e.max - e.min;
  }
  function Mu(e, t = 0, n = 0.01) {
    return Math.abs(e - t) <= n;
  }
  function zh(e, t, n, r = 0.5) {
    e.origin = r, e.originPoint = le(t.min, t.max, e.origin), e.scale = nt(n) / nt(t), (Mu(e.scale, 1, 1e-4) || isNaN(e.scale)) && (e.scale = 1), e.translate = le(n.min, n.max, e.origin) - e.originPoint, (Mu(e.translate) || isNaN(e.translate)) && (e.translate = 0);
  }
  function Fi(e, t, n, r) {
    zh(e.x, t.x, n.x, r ? r.originX : void 0), zh(e.y, t.y, n.y, r ? r.originY : void 0);
  }
  function Bh(e, t, n) {
    e.min = n.min + t.min, e.max = e.min + nt(t);
  }
  function x_(e, t, n) {
    Bh(e.x, t.x, n.x), Bh(e.y, t.y, n.y);
  }
  function Uh(e, t, n) {
    e.min = t.min - n.min, e.max = e.min + nt(t);
  }
  function ji(e, t, n) {
    Uh(e.x, t.x, n.x), Uh(e.y, t.y, n.y);
  }
  function S_(e, { min: t, max: n }, r) {
    return t !== void 0 && e < t ? e = r ? le(t, e, r.min) : Math.max(e, t) : n !== void 0 && e > n && (e = r ? le(n, e, r.max) : Math.min(e, n)), e;
  }
  function Hh(e, t, n) {
    return {
      min: t !== void 0 ? e.min + t : void 0,
      max: n !== void 0 ? e.max + n - (e.max - e.min) : void 0
    };
  }
  function w_(e, { top: t, left: n, bottom: r, right: i }) {
    return {
      x: Hh(e.x, n, i),
      y: Hh(e.y, t, r)
    };
  }
  function Wh(e, t) {
    let n = t.min - e.min, r = t.max - e.max;
    return t.max - t.min < e.max - e.min && ([n, r] = [r, n]), { min: n, max: r };
  }
  function T_(e, t) {
    return {
      x: Wh(e.x, t.x),
      y: Wh(e.y, t.y)
    };
  }
  function E_(e, t) {
    let n = 0.5;
    const r = nt(e), i = nt(t);
    return i > r ? n = eo(t.min, t.max - r, e.min) : r > i && (n = eo(e.min, e.max - i, t.min)), _n(0, 1, n);
  }
  function C_(e, t) {
    const n = {};
    return t.min !== void 0 && (n.min = t.min - e.min), t.max !== void 0 && (n.max = t.max - e.min), n;
  }
  const Ru = 0.35;
  function P_(e = Ru) {
    return e === !1 ? e = 0 : e === !0 && (e = Ru), {
      x: Gh(e, "left", "right"),
      y: Gh(e, "top", "bottom")
    };
  }
  function Gh(e, t, n) {
    return {
      min: Kh(e, t),
      max: Kh(e, n)
    };
  }
  function Kh(e, t) {
    return typeof e == "number" ? e : e[t] || 0;
  }
  const Qh = () => ({
    translate: 0,
    scale: 1,
    origin: 0,
    originPoint: 0
  }), Dr = () => ({
    x: Qh(),
    y: Qh()
  }), Yh = () => ({ min: 0, max: 0 }), pe = () => ({
    x: Yh(),
    y: Yh()
  });
  function lt(e) {
    return [e("x"), e("y")];
  }
  function Iv({ top: e, left: t, right: n, bottom: r }) {
    return {
      x: { min: t, max: n },
      y: { min: e, max: r }
    };
  }
  function k_({ x: e, y: t }) {
    return { top: t.min, right: e.max, bottom: t.max, left: e.min };
  }
  function __(e, t) {
    if (!t)
      return e;
    const n = t({ x: e.left, y: e.top }), r = t({ x: e.right, y: e.bottom });
    return {
      top: n.y,
      left: n.x,
      bottom: r.y,
      right: r.x
    };
  }
  function xl(e) {
    return e === void 0 || e === 1;
  }
  function Lu({ scale: e, scaleX: t, scaleY: n }) {
    return !xl(e) || !xl(t) || !xl(n);
  }
  function In(e) {
    return Lu(e) || zv(e) || e.z || e.rotate || e.rotateX || e.rotateY;
  }
  function zv(e) {
    return Xh(e.x) || Xh(e.y);
  }
  function Xh(e) {
    return e && e !== "0%";
  }
  function Vs(e, t, n) {
    const r = e - n, i = t * r;
    return n + i;
  }
  function Zh(e, t, n, r, i) {
    return i !== void 0 && (e = Vs(e, i, r)), Vs(e, n, r) + t;
  }
  function Vu(e, t = 0, n = 1, r, i) {
    e.min = Zh(e.min, t, n, r, i), e.max = Zh(e.max, t, n, r, i);
  }
  function Bv(e, { x: t, y: n }) {
    Vu(e.x, t.translate, t.scale, t.originPoint), Vu(e.y, n.translate, n.scale, n.originPoint);
  }
  function A_(e, t, n, r = !1) {
    const i = n.length;
    if (!i)
      return;
    t.x = t.y = 1;
    let o, s;
    for (let a = 0; a < i; a++) {
      o = n[a], s = o.projectionDelta;
      const l = o.instance;
      l && l.style && l.style.display === "contents" || (r && o.options.layoutScroll && o.scroll && o !== o.root && Mr(e, {
        x: -o.scroll.offset.x,
        y: -o.scroll.offset.y
      }), s && (t.x *= s.x.scale, t.y *= s.y.scale, Bv(e, s)), r && In(o.latestValues) && Mr(e, o.latestValues));
    }
    t.x = qh(t.x), t.y = qh(t.y);
  }
  function qh(e) {
    return Number.isInteger(e) || e > 1.0000000000001 || e < 0.999999999999 ? e : 1;
  }
  function an(e, t) {
    e.min = e.min + t, e.max = e.max + t;
  }
  function Jh(e, t, [n, r, i]) {
    const o = t[i] !== void 0 ? t[i] : 0.5, s = le(e.min, e.max, o);
    Vu(e, t[n], t[r], s, t.scale);
  }
  const O_ = ["x", "scaleX", "originX"], F_ = ["y", "scaleY", "originY"];
  function Mr(e, t) {
    Jh(e.x, t, O_), Jh(e.y, t, F_);
  }
  function Uv(e, t) {
    return Iv(__(e.getBoundingClientRect(), t));
  }
  function j_(e, t, n) {
    const r = Uv(e, n), { scroll: i } = t;
    return i && (an(r.x, i.offset.x), an(r.y, i.offset.y)), r;
  }
  const Hv = ({ current: e }) => e ? e.ownerDocument.defaultView : null, D_ = /* @__PURE__ */ new WeakMap();
  class M_ {
    constructor(t) {
      this.openGlobalLock = null, this.isDragging = !1, this.currentDirection = null, this.originPoint = { x: 0, y: 0 }, this.constraints = !1, this.hasMutatedConstraints = !1, this.elastic = pe(), this.visualElement = t;
    }
    start(t, { snapToCursor: n = !1 } = {}) {
      const { presenceContext: r } = this.visualElement;
      if (r && r.isPresent === !1)
        return;
      const i = (f) => {
        const { dragSnapToOrigin: c } = this.getProps();
        c ? this.pauseAnimation() : this.stopAnimation(), n && this.snapToCursor(Ca(f, "page").point);
      }, o = (f, c) => {
        const { drag: d, dragPropagation: p, onDragStart: g } = this.getProps();
        if (d && !p && (this.openGlobalLock && this.openGlobalLock(), this.openGlobalLock = rv(d), !this.openGlobalLock))
          return;
        this.isDragging = !0, this.currentDirection = null, this.resolveConstraints(), this.visualElement.projection && (this.visualElement.projection.isAnimationBlocked = !0, this.visualElement.projection.target = void 0), lt((T) => {
          let y = this.getAxisMotionValue(T).get() || 0;
          if (Dt.test(y)) {
            const { projection: h } = this.visualElement;
            if (h && h.layout) {
              const m = h.layout.layoutBox[T];
              m && (y = nt(m) * (parseFloat(y) / 100));
            }
          }
          this.originPoint[T] = y;
        }), g && te.update(() => g(f, c), !1, !0);
        const { animationState: v } = this.visualElement;
        v && v.setActive("whileDrag", !0);
      }, s = (f, c) => {
        const { dragPropagation: d, dragDirectionLock: p, onDirectionLock: g, onDrag: v } = this.getProps();
        if (!d && !this.openGlobalLock)
          return;
        const { offset: T } = c;
        if (p && this.currentDirection === null) {
          this.currentDirection = R_(T), this.currentDirection !== null && g && g(this.currentDirection);
          return;
        }
        this.updateAxis("x", c.point, T), this.updateAxis("y", c.point, T), this.visualElement.render(), v && v(f, c);
      }, a = (f, c) => this.stop(f, c), l = () => lt((f) => {
        var c;
        return this.getAnimationState(f) === "paused" && ((c = this.getAxisMotionValue(f).animation) === null || c === void 0 ? void 0 : c.play());
      }), { dragSnapToOrigin: u } = this.getProps();
      this.panSession = new bv(t, {
        onSessionStart: i,
        onStart: o,
        onMove: s,
        onSessionEnd: a,
        resumeAnimation: l
      }, {
        transformPagePoint: this.visualElement.getTransformPagePoint(),
        dragSnapToOrigin: u,
        contextWindow: Hv(this.visualElement)
      });
    }
    stop(t, n) {
      const r = this.isDragging;
      if (this.cancel(), !r)
        return;
      const { velocity: i } = n;
      this.startAnimation(i);
      const { onDragEnd: o } = this.getProps();
      o && te.update(() => o(t, n));
    }
    cancel() {
      this.isDragging = !1;
      const { projection: t, animationState: n } = this.visualElement;
      t && (t.isAnimationBlocked = !1), this.panSession && this.panSession.end(), this.panSession = void 0;
      const { dragPropagation: r } = this.getProps();
      !r && this.openGlobalLock && (this.openGlobalLock(), this.openGlobalLock = null), n && n.setActive("whileDrag", !1);
    }
    updateAxis(t, n, r) {
      const { drag: i } = this.getProps();
      if (!r || !$o(t, i, this.currentDirection))
        return;
      const o = this.getAxisMotionValue(t);
      let s = this.originPoint[t] + r[t];
      this.constraints && this.constraints[t] && (s = S_(s, this.constraints[t], this.elastic[t])), o.set(s);
    }
    resolveConstraints() {
      var t;
      const { dragConstraints: n, dragElastic: r } = this.getProps(), i = this.visualElement.projection && !this.visualElement.projection.layout ? this.visualElement.projection.measure(!1) : (t = this.visualElement.projection) === null || t === void 0 ? void 0 : t.layout, o = this.constraints;
      n && Fr(n) ? this.constraints || (this.constraints = this.resolveRefConstraints()) : n && i ? this.constraints = w_(i.layoutBox, n) : this.constraints = !1, this.elastic = P_(r), o !== this.constraints && i && this.constraints && !this.hasMutatedConstraints && lt((s) => {
        this.getAxisMotionValue(s) && (this.constraints[s] = C_(i.layoutBox[s], this.constraints[s]));
      });
    }
    resolveRefConstraints() {
      const { dragConstraints: t, onMeasureDragConstraints: n } = this.getProps();
      if (!t || !Fr(t))
        return !1;
      const r = t.current, { projection: i } = this.visualElement;
      if (!i || !i.layout)
        return !1;
      const o = j_(r, i.root, this.visualElement.getTransformPagePoint());
      let s = T_(i.layout.layoutBox, o);
      if (n) {
        const a = n(k_(s));
        this.hasMutatedConstraints = !!a, a && (s = Iv(a));
      }
      return s;
    }
    startAnimation(t) {
      const { drag: n, dragMomentum: r, dragElastic: i, dragTransition: o, dragSnapToOrigin: s, onDragTransitionEnd: a } = this.getProps(), l = this.constraints || {}, u = lt((f) => {
        if (!$o(f, n, this.currentDirection))
          return;
        let c = l && l[f] || {};
        s && (c = { min: 0, max: 0 });
        const d = i ? 200 : 1e6, p = i ? 40 : 1e7, g = {
          type: "inertia",
          velocity: r ? t[f] : 0,
          bounceStiffness: d,
          bounceDamping: p,
          timeConstant: 750,
          restDelta: 1,
          restSpeed: 10,
          ...o,
          ...c
        };
        return this.startAxisValueAnimation(f, g);
      });
      return Promise.all(u).then(a);
    }
    startAxisValueAnimation(t, n) {
      const r = this.getAxisMotionValue(t);
      return r.start(vf(t, r, 0, n));
    }
    stopAnimation() {
      lt((t) => this.getAxisMotionValue(t).stop());
    }
    pauseAnimation() {
      lt((t) => {
        var n;
        return (n = this.getAxisMotionValue(t).animation) === null || n === void 0 ? void 0 : n.pause();
      });
    }
    getAnimationState(t) {
      var n;
      return (n = this.getAxisMotionValue(t).animation) === null || n === void 0 ? void 0 : n.state;
    }
    /**
     * Drag works differently depending on which props are provided.
     *
     * - If _dragX and _dragY are provided, we output the gesture delta directly to those motion values.
     * - Otherwise, we apply the delta to the x/y motion values.
     */
    getAxisMotionValue(t) {
      const n = "_drag" + t.toUpperCase(), r = this.visualElement.getProps(), i = r[n];
      return i || this.visualElement.getValue(t, (r.initial ? r.initial[t] : void 0) || 0);
    }
    snapToCursor(t) {
      lt((n) => {
        const { drag: r } = this.getProps();
        if (!$o(n, r, this.currentDirection))
          return;
        const { projection: i } = this.visualElement, o = this.getAxisMotionValue(n);
        if (i && i.layout) {
          const { min: s, max: a } = i.layout.layoutBox[n];
          o.set(t[n] - le(s, a, 0.5));
        }
      });
    }
    /**
     * When the viewport resizes we want to check if the measured constraints
     * have changed and, if so, reposition the element within those new constraints
     * relative to where it was before the resize.
     */
    scalePositionWithinConstraints() {
      if (!this.visualElement.current)
        return;
      const { drag: t, dragConstraints: n } = this.getProps(), { projection: r } = this.visualElement;
      if (!Fr(n) || !r || !this.constraints)
        return;
      this.stopAnimation();
      const i = { x: 0, y: 0 };
      lt((s) => {
        const a = this.getAxisMotionValue(s);
        if (a) {
          const l = a.get();
          i[s] = E_({ min: l, max: l }, this.constraints[s]);
        }
      });
      const { transformTemplate: o } = this.visualElement.getProps();
      this.visualElement.current.style.transform = o ? o({}, "") : "none", r.root && r.root.updateScroll(), r.updateLayout(), this.resolveConstraints(), lt((s) => {
        if (!$o(s, t, null))
          return;
        const a = this.getAxisMotionValue(s), { min: l, max: u } = this.constraints[s];
        a.set(le(l, u, i[s]));
      });
    }
    addListeners() {
      if (!this.visualElement.current)
        return;
      D_.set(this.visualElement, this);
      const t = this.visualElement.current, n = Wt(t, "pointerdown", (l) => {
        const { drag: u, dragListener: f = !0 } = this.getProps();
        u && f && this.start(l);
      }), r = () => {
        const { dragConstraints: l } = this.getProps();
        Fr(l) && (this.constraints = this.resolveRefConstraints());
      }, { projection: i } = this.visualElement, o = i.addEventListener("measure", r);
      i && !i.layout && (i.root && i.root.updateScroll(), i.updateLayout()), r();
      const s = Bt(window, "resize", () => this.scalePositionWithinConstraints()), a = i.addEventListener("didUpdate", ({ delta: l, hasLayoutChanged: u }) => {
        this.isDragging && u && (lt((f) => {
          const c = this.getAxisMotionValue(f);
          c && (this.originPoint[f] += l[f].translate, c.set(c.get() + l[f].translate));
        }), this.visualElement.render());
      });
      return () => {
        s(), n(), o(), a && a();
      };
    }
    getProps() {
      const t = this.visualElement.getProps(), { drag: n = !1, dragDirectionLock: r = !1, dragPropagation: i = !1, dragConstraints: o = !1, dragElastic: s = Ru, dragMomentum: a = !0 } = t;
      return {
        ...t,
        drag: n,
        dragDirectionLock: r,
        dragPropagation: i,
        dragConstraints: o,
        dragElastic: s,
        dragMomentum: a
      };
    }
  }
  function $o(e, t, n) {
    return (t === !0 || t === e) && (n === null || n === e);
  }
  function R_(e, t = 10) {
    let n = null;
    return Math.abs(e.y) > t ? n = "y" : Math.abs(e.x) > t && (n = "x"), n;
  }
  class L_ extends Mn {
    constructor(t) {
      super(t), this.removeGroupControls = he, this.removeListeners = he, this.controls = new M_(t);
    }
    mount() {
      const { dragControls: t } = this.node.getProps();
      t && (this.removeGroupControls = t.subscribe(this.controls)), this.removeListeners = this.controls.addListeners() || he;
    }
    unmount() {
      this.removeGroupControls(), this.removeListeners();
    }
  }
  const ep = (e) => (t, n) => {
    e && te.update(() => e(t, n));
  };
  class V_ extends Mn {
    constructor() {
      super(...arguments), this.removePointerDownListener = he;
    }
    onPointerDown(t) {
      this.session = new bv(t, this.createPanHandlers(), {
        transformPagePoint: this.node.getTransformPagePoint(),
        contextWindow: Hv(this.node)
      });
    }
    createPanHandlers() {
      const { onPanSessionStart: t, onPanStart: n, onPan: r, onPanEnd: i } = this.node.getProps();
      return {
        onSessionStart: ep(t),
        onStart: ep(n),
        onMove: r,
        onEnd: (o, s) => {
          delete this.session, i && te.update(() => i(o, s));
        }
      };
    }
    mount() {
      this.removePointerDownListener = Wt(this.node.current, "pointerdown", (t) => this.onPointerDown(t));
    }
    update() {
      this.session && this.session.updateHandlers(this.createPanHandlers());
    }
    unmount() {
      this.removePointerDownListener(), this.session && this.session.end();
    }
  }
  function N_() {
    const e = S.useContext(xa);
    if (e === null)
      return [!0, null];
    const { isPresent: t, onExitComplete: n, register: r } = e, i = S.useId();
    return S.useEffect(() => r(i), []), !t && n ? [!1, () => n && n(i)] : [!0];
  }
  const ts = {
    /**
     * Global flag as to whether the tree has animated since the last time
     * we resized the window
     */
    hasAnimatedSinceResize: !0,
    /**
     * We set this to true once, on the first update. Any nodes added to the tree beyond that
     * update will be given a `data-projection-id` attribute.
     */
    hasEverUpdated: !1
  };
  function tp(e, t) {
    return t.max === t.min ? 0 : e / (t.max - t.min) * 100;
  }
  const fi = {
    correct: (e, t) => {
      if (!t.target)
        return e;
      if (typeof e == "string")
        if ($.test(e))
          e = parseFloat(e);
        else
          return e;
      const n = tp(e, t.target.x), r = tp(e, t.target.y);
      return `${n}% ${r}%`;
    }
  }, b_ = {
    correct: (e, { treeScale: t, projectionDelta: n }) => {
      const r = e, i = An.parse(e);
      if (i.length > 5)
        return r;
      const o = An.createTransformer(e), s = typeof i[0] != "number" ? 1 : 0, a = n.x.scale * t.x, l = n.y.scale * t.y;
      i[0 + s] /= a, i[1 + s] /= l;
      const u = le(a, l, 0.5);
      return typeof i[2 + s] == "number" && (i[2 + s] /= u), typeof i[3 + s] == "number" && (i[3 + s] /= u), o(i);
    }
  };
  class $_ extends Ut.Component {
    /**
     * This only mounts projection nodes for components that
     * need measuring, we might want to do it for all components
     * in order to incorporate transforms
     */
    componentDidMount() {
      const { visualElement: t, layoutGroup: n, switchLayoutGroup: r, layoutId: i } = this.props, { projection: o } = t;
      GP(I_), o && (n.group && n.group.add(o), r && r.register && i && r.register(o), o.root.didUpdate(), o.addEventListener("animationComplete", () => {
        this.safeToRemove();
      }), o.setOptions({
        ...o.options,
        onExitComplete: () => this.safeToRemove()
      })), ts.hasEverUpdated = !0;
    }
    getSnapshotBeforeUpdate(t) {
      const { layoutDependency: n, visualElement: r, drag: i, isPresent: o } = this.props, s = r.projection;
      return s && (s.isPresent = o, i || t.layoutDependency !== n || n === void 0 ? s.willUpdate() : this.safeToRemove(), t.isPresent !== o && (o ? s.promote() : s.relegate() || te.postRender(() => {
        const a = s.getStack();
        (!a || !a.members.length) && this.safeToRemove();
      }))), null;
    }
    componentDidUpdate() {
      const { projection: t } = this.props.visualElement;
      t && (t.root.didUpdate(), queueMicrotask(() => {
        !t.currentAnimation && t.isLead() && this.safeToRemove();
      }));
    }
    componentWillUnmount() {
      const { visualElement: t, layoutGroup: n, switchLayoutGroup: r } = this.props, { projection: i } = t;
      i && (i.scheduleCheckAfterUnmount(), n && n.group && n.group.remove(i), r && r.deregister && r.deregister(i));
    }
    safeToRemove() {
      const { safeToRemove: t } = this.props;
      t && t();
    }
    render() {
      return null;
    }
  }
  function Wv(e) {
    const [t, n] = N_(), r = S.useContext(rf);
    return Ut.createElement($_, { ...e, layoutGroup: r, switchLayoutGroup: S.useContext(Ig), isPresent: t, safeToRemove: n });
  }
  const I_ = {
    borderRadius: {
      ...fi,
      applyTo: [
        "borderTopLeftRadius",
        "borderTopRightRadius",
        "borderBottomLeftRadius",
        "borderBottomRightRadius"
      ]
    },
    borderTopLeftRadius: fi,
    borderTopRightRadius: fi,
    borderBottomLeftRadius: fi,
    borderBottomRightRadius: fi,
    boxShadow: b_
  }, Gv = ["TopLeft", "TopRight", "BottomLeft", "BottomRight"], z_ = Gv.length, np = (e) => typeof e == "string" ? parseFloat(e) : e, rp = (e) => typeof e == "number" || $.test(e);
  function B_(e, t, n, r, i, o) {
    i ? (e.opacity = le(
      0,
      // TODO Reinstate this if only child
      n.opacity !== void 0 ? n.opacity : 1,
      U_(r)
    ), e.opacityExit = le(t.opacity !== void 0 ? t.opacity : 1, 0, H_(r))) : o && (e.opacity = le(t.opacity !== void 0 ? t.opacity : 1, n.opacity !== void 0 ? n.opacity : 1, r));
    for (let s = 0; s < z_; s++) {
      const a = `border${Gv[s]}Radius`;
      let l = ip(t, a), u = ip(n, a);
      if (l === void 0 && u === void 0)
        continue;
      l || (l = 0), u || (u = 0), l === 0 || u === 0 || rp(l) === rp(u) ? (e[a] = Math.max(le(np(l), np(u), r), 0), (Dt.test(u) || Dt.test(l)) && (e[a] += "%")) : e[a] = u;
    }
    (t.rotate || n.rotate) && (e.rotate = le(t.rotate || 0, n.rotate || 0, r));
  }
  function ip(e, t) {
    return e[t] !== void 0 ? e[t] : e.borderRadius;
  }
  const U_ = Kv(0, 0.5, mv), H_ = Kv(0.5, 0.95, he);
  function Kv(e, t, n) {
    return (r) => r < e ? 0 : r > t ? 1 : n(eo(e, t, r));
  }
  function op(e, t) {
    e.min = t.min, e.max = t.max;
  }
  function at(e, t) {
    op(e.x, t.x), op(e.y, t.y);
  }
  function sp(e, t, n, r, i) {
    return e -= t, e = Vs(e, 1 / n, r), i !== void 0 && (e = Vs(e, 1 / i, r)), e;
  }
  function W_(e, t = 0, n = 1, r = 0.5, i, o = e, s = e) {
    if (Dt.test(t) && (t = parseFloat(t), t = le(s.min, s.max, t / 100) - s.min), typeof t != "number")
      return;
    let a = le(o.min, o.max, r);
    e === o && (a -= t), e.min = sp(e.min, t, n, a, i), e.max = sp(e.max, t, n, a, i);
  }
  function ap(e, t, [n, r, i], o, s) {
    W_(e, t[n], t[r], t[i], t.scale, o, s);
  }
  const G_ = ["x", "scaleX", "originX"], K_ = ["y", "scaleY", "originY"];
  function lp(e, t, n, r) {
    ap(e.x, t, G_, n ? n.x : void 0, r ? r.x : void 0), ap(e.y, t, K_, n ? n.y : void 0, r ? r.y : void 0);
  }
  function up(e) {
    return e.translate === 0 && e.scale === 1;
  }
  function Qv(e) {
    return up(e.x) && up(e.y);
  }
  function Q_(e, t) {
    return e.x.min === t.x.min && e.x.max === t.x.max && e.y.min === t.y.min && e.y.max === t.y.max;
  }
  function Yv(e, t) {
    return Math.round(e.x.min) === Math.round(t.x.min) && Math.round(e.x.max) === Math.round(t.x.max) && Math.round(e.y.min) === Math.round(t.y.min) && Math.round(e.y.max) === Math.round(t.y.max);
  }
  function cp(e) {
    return nt(e.x) / nt(e.y);
  }
  class Y_ {
    constructor() {
      this.members = [];
    }
    add(t) {
      xf(this.members, t), t.scheduleRender();
    }
    remove(t) {
      if (Sf(this.members, t), t === this.prevLead && (this.prevLead = void 0), t === this.lead) {
        const n = this.members[this.members.length - 1];
        n && this.promote(n);
      }
    }
    relegate(t) {
      const n = this.members.findIndex((i) => t === i);
      if (n === 0)
        return !1;
      let r;
      for (let i = n; i >= 0; i--) {
        const o = this.members[i];
        if (o.isPresent !== !1) {
          r = o;
          break;
        }
      }
      return r ? (this.promote(r), !0) : !1;
    }
    promote(t, n) {
      const r = this.lead;
      if (t !== r && (this.prevLead = r, this.lead = t, t.show(), r)) {
        r.instance && r.scheduleRender(), t.scheduleRender(), t.resumeFrom = r, n && (t.resumeFrom.preserveOpacity = !0), r.snapshot && (t.snapshot = r.snapshot, t.snapshot.latestValues = r.animationValues || r.latestValues), t.root && t.root.isUpdating && (t.isLayoutDirty = !0);
        const { crossfade: i } = t.options;
        i === !1 && r.hide();
      }
    }
    exitAnimationComplete() {
      this.members.forEach((t) => {
        const { options: n, resumingFrom: r } = t;
        n.onExitComplete && n.onExitComplete(), r && r.options.onExitComplete && r.options.onExitComplete();
      });
    }
    scheduleRender() {
      this.members.forEach((t) => {
        t.instance && t.scheduleRender(!1);
      });
    }
    /**
     * Clear any leads that have been removed this render to prevent them from being
     * used in future animations and to prevent memory leaks
     */
    removeLeadSnapshot() {
      this.lead && this.lead.snapshot && (this.lead.snapshot = void 0);
    }
  }
  function fp(e, t, n) {
    let r = "";
    const i = e.x.translate / t.x, o = e.y.translate / t.y;
    if ((i || o) && (r = `translate3d(${i}px, ${o}px, 0) `), (t.x !== 1 || t.y !== 1) && (r += `scale(${1 / t.x}, ${1 / t.y}) `), n) {
      const { rotate: l, rotateX: u, rotateY: f } = n;
      l && (r += `rotate(${l}deg) `), u && (r += `rotateX(${u}deg) `), f && (r += `rotateY(${f}deg) `);
    }
    const s = e.x.scale * t.x, a = e.y.scale * t.y;
    return (s !== 1 || a !== 1) && (r += `scale(${s}, ${a})`), r || "none";
  }
  const X_ = (e, t) => e.depth - t.depth;
  class Z_ {
    constructor() {
      this.children = [], this.isDirty = !1;
    }
    add(t) {
      xf(this.children, t), this.isDirty = !0;
    }
    remove(t) {
      Sf(this.children, t), this.isDirty = !0;
    }
    forEach(t) {
      this.isDirty && this.children.sort(X_), this.isDirty = !1, this.children.forEach(t);
    }
  }
  function q_(e, t) {
    const n = performance.now(), r = ({ timestamp: i }) => {
      const o = i - n;
      o >= t && (Zt(r), e(o - t));
    };
    return te.read(r, !0), () => Zt(r);
  }
  function J_(e) {
    window.MotionDebug && window.MotionDebug.record(e);
  }
  function eA(e) {
    return e instanceof SVGElement && e.tagName !== "svg";
  }
  function tA(e, t, n) {
    const r = Ke(e) ? e : Qr(e);
    return r.start(vf("", r, t, n)), r.animation;
  }
  const dp = ["", "X", "Y", "Z"], nA = { visibility: "hidden" }, hp = 1e3;
  let rA = 0;
  const zn = {
    type: "projectionFrame",
    totalNodes: 0,
    resolvedTargetDeltas: 0,
    recalculatedProjection: 0
  };
  function Xv({ attachResizeListener: e, defaultParent: t, measureScroll: n, checkIsScrollRoot: r, resetTransform: i }) {
    return class {
      constructor(s = {}, a = t == null ? void 0 : t()) {
        this.id = rA++, this.animationId = 0, this.children = /* @__PURE__ */ new Set(), this.options = {}, this.isTreeAnimating = !1, this.isAnimationBlocked = !1, this.isLayoutDirty = !1, this.isProjectionDirty = !1, this.isSharedProjectionDirty = !1, this.isTransformDirty = !1, this.updateManuallyBlocked = !1, this.updateBlockedByResize = !1, this.isUpdating = !1, this.isSVG = !1, this.needsReset = !1, this.shouldResetTransform = !1, this.treeScale = { x: 1, y: 1 }, this.eventHandlers = /* @__PURE__ */ new Map(), this.hasTreeAnimated = !1, this.updateScheduled = !1, this.projectionUpdateScheduled = !1, this.checkUpdateFailed = () => {
          this.isUpdating && (this.isUpdating = !1, this.clearAllSnapshots());
        }, this.updateProjection = () => {
          this.projectionUpdateScheduled = !1, zn.totalNodes = zn.resolvedTargetDeltas = zn.recalculatedProjection = 0, this.nodes.forEach(sA), this.nodes.forEach(fA), this.nodes.forEach(dA), this.nodes.forEach(aA), J_(zn);
        }, this.hasProjected = !1, this.isVisible = !0, this.animationProgress = 0, this.sharedNodes = /* @__PURE__ */ new Map(), this.latestValues = s, this.root = a ? a.root || a : this, this.path = a ? [...a.path, a] : [], this.parent = a, this.depth = a ? a.depth + 1 : 0;
        for (let l = 0; l < this.path.length; l++)
          this.path[l].shouldResetTransform = !0;
        this.root === this && (this.nodes = new Z_());
      }
      addEventListener(s, a) {
        return this.eventHandlers.has(s) || this.eventHandlers.set(s, new wf()), this.eventHandlers.get(s).add(a);
      }
      notifyListeners(s, ...a) {
        const l = this.eventHandlers.get(s);
        l && l.notify(...a);
      }
      hasListeners(s) {
        return this.eventHandlers.has(s);
      }
      /**
       * Lifecycles
       */
      mount(s, a = this.root.hasTreeAnimated) {
        if (this.instance)
          return;
        this.isSVG = eA(s), this.instance = s;
        const { layoutId: l, layout: u, visualElement: f } = this.options;
        if (f && !f.current && f.mount(s), this.root.nodes.add(this), this.parent && this.parent.children.add(this), a && (u || l) && (this.isLayoutDirty = !0), e) {
          let c;
          const d = () => this.root.updateBlockedByResize = !1;
          e(s, () => {
            this.root.updateBlockedByResize = !0, c && c(), c = q_(d, 250), ts.hasAnimatedSinceResize && (ts.hasAnimatedSinceResize = !1, this.nodes.forEach(mp));
          });
        }
        l && this.root.registerSharedNode(l, this), this.options.animate !== !1 && f && (l || u) && this.addEventListener("didUpdate", ({ delta: c, hasLayoutChanged: d, hasRelativeTargetChanged: p, layout: g }) => {
          if (this.isTreeAnimationBlocked()) {
            this.target = void 0, this.relativeTarget = void 0;
            return;
          }
          const v = this.options.transition || f.getDefaultTransition() || gA, { onLayoutAnimationStart: T, onLayoutAnimationComplete: y } = f.getProps(), h = !this.targetLayout || !Yv(this.targetLayout, g) || p, m = !d && p;
          if (this.options.layoutRoot || this.resumeFrom && this.resumeFrom.instance || m || d && (h || !this.currentAnimation)) {
            this.resumeFrom && (this.resumingFrom = this.resumeFrom, this.resumingFrom.resumingFrom = void 0), this.setAnimationOrigin(c, m);
            const x = {
              ...gf(v, "layout"),
              onPlay: T,
              onComplete: y
            };
            (f.shouldReduceMotion || this.options.layoutRoot) && (x.delay = 0, x.type = !1), this.startAnimation(x);
          } else
            d || mp(this), this.isLead() && this.options.onExitComplete && this.options.onExitComplete();
          this.targetLayout = g;
        });
      }
      unmount() {
        this.options.layoutId && this.willUpdate(), this.root.nodes.remove(this);
        const s = this.getStack();
        s && s.remove(this), this.parent && this.parent.children.delete(this), this.instance = void 0, Zt(this.updateProjection);
      }
      // only on the root
      blockUpdate() {
        this.updateManuallyBlocked = !0;
      }
      unblockUpdate() {
        this.updateManuallyBlocked = !1;
      }
      isUpdateBlocked() {
        return this.updateManuallyBlocked || this.updateBlockedByResize;
      }
      isTreeAnimationBlocked() {
        return this.isAnimationBlocked || this.parent && this.parent.isTreeAnimationBlocked() || !1;
      }
      // Note: currently only running on root node
      startUpdate() {
        this.isUpdateBlocked() || (this.isUpdating = !0, this.nodes && this.nodes.forEach(hA), this.animationId++);
      }
      getTransformTemplate() {
        const { visualElement: s } = this.options;
        return s && s.getProps().transformTemplate;
      }
      willUpdate(s = !0) {
        if (this.root.hasTreeAnimated = !0, this.root.isUpdateBlocked()) {
          this.options.onExitComplete && this.options.onExitComplete();
          return;
        }
        if (!this.root.isUpdating && this.root.startUpdate(), this.isLayoutDirty)
          return;
        this.isLayoutDirty = !0;
        for (let f = 0; f < this.path.length; f++) {
          const c = this.path[f];
          c.shouldResetTransform = !0, c.updateScroll("snapshot"), c.options.layoutRoot && c.willUpdate(!1);
        }
        const { layoutId: a, layout: l } = this.options;
        if (a === void 0 && !l)
          return;
        const u = this.getTransformTemplate();
        this.prevTransformTemplateValue = u ? u(this.latestValues, "") : void 0, this.updateSnapshot(), s && this.notifyListeners("willUpdate");
      }
      update() {
        if (this.updateScheduled = !1, this.isUpdateBlocked()) {
          this.unblockUpdate(), this.clearAllSnapshots(), this.nodes.forEach(pp);
          return;
        }
        this.isUpdating || this.nodes.forEach(uA), this.isUpdating = !1, this.nodes.forEach(cA), this.nodes.forEach(iA), this.nodes.forEach(oA), this.clearAllSnapshots();
        const a = performance.now();
        Fe.delta = _n(0, 1e3 / 60, a - Fe.timestamp), Fe.timestamp = a, Fe.isProcessing = !0, ul.update.process(Fe), ul.preRender.process(Fe), ul.render.process(Fe), Fe.isProcessing = !1;
      }
      didUpdate() {
        this.updateScheduled || (this.updateScheduled = !0, queueMicrotask(() => this.update()));
      }
      clearAllSnapshots() {
        this.nodes.forEach(lA), this.sharedNodes.forEach(pA);
      }
      scheduleUpdateProjection() {
        this.projectionUpdateScheduled || (this.projectionUpdateScheduled = !0, te.preRender(this.updateProjection, !1, !0));
      }
      scheduleCheckAfterUnmount() {
        te.postRender(() => {
          this.isLayoutDirty ? this.root.didUpdate() : this.root.checkUpdateFailed();
        });
      }
      /**
       * Update measurements
       */
      updateSnapshot() {
        this.snapshot || !this.instance || (this.snapshot = this.measure());
      }
      updateLayout() {
        if (!this.instance || (this.updateScroll(), !(this.options.alwaysMeasureLayout && this.isLead()) && !this.isLayoutDirty))
          return;
        if (this.resumeFrom && !this.resumeFrom.instance)
          for (let l = 0; l < this.path.length; l++)
            this.path[l].updateScroll();
        const s = this.layout;
        this.layout = this.measure(!1), this.layoutCorrected = pe(), this.isLayoutDirty = !1, this.projectionDelta = void 0, this.notifyListeners("measure", this.layout.layoutBox);
        const { visualElement: a } = this.options;
        a && a.notify("LayoutMeasure", this.layout.layoutBox, s ? s.layoutBox : void 0);
      }
      updateScroll(s = "measure") {
        let a = !!(this.options.layoutScroll && this.instance);
        this.scroll && this.scroll.animationId === this.root.animationId && this.scroll.phase === s && (a = !1), a && (this.scroll = {
          animationId: this.root.animationId,
          phase: s,
          isRoot: r(this.instance),
          offset: n(this.instance)
        });
      }
      resetTransform() {
        if (!i)
          return;
        const s = this.isLayoutDirty || this.shouldResetTransform, a = this.projectionDelta && !Qv(this.projectionDelta), l = this.getTransformTemplate(), u = l ? l(this.latestValues, "") : void 0, f = u !== this.prevTransformTemplateValue;
        s && (a || In(this.latestValues) || f) && (i(this.instance, u), this.shouldResetTransform = !1, this.scheduleRender());
      }
      measure(s = !0) {
        const a = this.measurePageBox();
        let l = this.removeElementScroll(a);
        return s && (l = this.removeTransform(l)), vA(l), {
          animationId: this.root.animationId,
          measuredBox: a,
          layoutBox: l,
          latestValues: {},
          source: this.id
        };
      }
      measurePageBox() {
        const { visualElement: s } = this.options;
        if (!s)
          return pe();
        const a = s.measureViewportBox(), { scroll: l } = this.root;
        return l && (an(a.x, l.offset.x), an(a.y, l.offset.y)), a;
      }
      removeElementScroll(s) {
        const a = pe();
        at(a, s);
        for (let l = 0; l < this.path.length; l++) {
          const u = this.path[l], { scroll: f, options: c } = u;
          if (u !== this.root && f && c.layoutScroll) {
            if (f.isRoot) {
              at(a, s);
              const { scroll: d } = this.root;
              d && (an(a.x, -d.offset.x), an(a.y, -d.offset.y));
            }
            an(a.x, f.offset.x), an(a.y, f.offset.y);
          }
        }
        return a;
      }
      applyTransform(s, a = !1) {
        const l = pe();
        at(l, s);
        for (let u = 0; u < this.path.length; u++) {
          const f = this.path[u];
          !a && f.options.layoutScroll && f.scroll && f !== f.root && Mr(l, {
            x: -f.scroll.offset.x,
            y: -f.scroll.offset.y
          }), In(f.latestValues) && Mr(l, f.latestValues);
        }
        return In(this.latestValues) && Mr(l, this.latestValues), l;
      }
      removeTransform(s) {
        const a = pe();
        at(a, s);
        for (let l = 0; l < this.path.length; l++) {
          const u = this.path[l];
          if (!u.instance || !In(u.latestValues))
            continue;
          Lu(u.latestValues) && u.updateSnapshot();
          const f = pe(), c = u.measurePageBox();
          at(f, c), lp(a, u.latestValues, u.snapshot ? u.snapshot.layoutBox : void 0, f);
        }
        return In(this.latestValues) && lp(a, this.latestValues), a;
      }
      setTargetDelta(s) {
        this.targetDelta = s, this.root.scheduleUpdateProjection(), this.isProjectionDirty = !0;
      }
      setOptions(s) {
        this.options = {
          ...this.options,
          ...s,
          crossfade: s.crossfade !== void 0 ? s.crossfade : !0
        };
      }
      clearMeasurements() {
        this.scroll = void 0, this.layout = void 0, this.snapshot = void 0, this.prevTransformTemplateValue = void 0, this.targetDelta = void 0, this.target = void 0, this.isLayoutDirty = !1;
      }
      forceRelativeParentToResolveTarget() {
        this.relativeParent && this.relativeParent.resolvedRelativeTargetAt !== Fe.timestamp && this.relativeParent.resolveTargetDelta(!0);
      }
      resolveTargetDelta(s = !1) {
        var a;
        const l = this.getLead();
        this.isProjectionDirty || (this.isProjectionDirty = l.isProjectionDirty), this.isTransformDirty || (this.isTransformDirty = l.isTransformDirty), this.isSharedProjectionDirty || (this.isSharedProjectionDirty = l.isSharedProjectionDirty);
        const u = !!this.resumingFrom || this !== l;
        if (!(s || u && this.isSharedProjectionDirty || this.isProjectionDirty || !((a = this.parent) === null || a === void 0) && a.isProjectionDirty || this.attemptToResolveRelativeTarget))
          return;
        const { layout: c, layoutId: d } = this.options;
        if (!(!this.layout || !(c || d))) {
          if (this.resolvedRelativeTargetAt = Fe.timestamp, !this.targetDelta && !this.relativeTarget) {
            const p = this.getClosestProjectingParent();
            p && p.layout && this.animationProgress !== 1 ? (this.relativeParent = p, this.forceRelativeParentToResolveTarget(), this.relativeTarget = pe(), this.relativeTargetOrigin = pe(), ji(this.relativeTargetOrigin, this.layout.layoutBox, p.layout.layoutBox), at(this.relativeTarget, this.relativeTargetOrigin)) : this.relativeParent = this.relativeTarget = void 0;
          }
          if (!(!this.relativeTarget && !this.targetDelta)) {
            if (this.target || (this.target = pe(), this.targetWithTransforms = pe()), this.relativeTarget && this.relativeTargetOrigin && this.relativeParent && this.relativeParent.target ? (this.forceRelativeParentToResolveTarget(), x_(this.target, this.relativeTarget, this.relativeParent.target)) : this.targetDelta ? (this.resumingFrom ? this.target = this.applyTransform(this.layout.layoutBox) : at(this.target, this.layout.layoutBox), Bv(this.target, this.targetDelta)) : at(this.target, this.layout.layoutBox), this.attemptToResolveRelativeTarget) {
              this.attemptToResolveRelativeTarget = !1;
              const p = this.getClosestProjectingParent();
              p && !!p.resumingFrom == !!this.resumingFrom && !p.options.layoutScroll && p.target && this.animationProgress !== 1 ? (this.relativeParent = p, this.forceRelativeParentToResolveTarget(), this.relativeTarget = pe(), this.relativeTargetOrigin = pe(), ji(this.relativeTargetOrigin, this.target, p.target), at(this.relativeTarget, this.relativeTargetOrigin)) : this.relativeParent = this.relativeTarget = void 0;
            }
            zn.resolvedTargetDeltas++;
          }
        }
      }
      getClosestProjectingParent() {
        if (!(!this.parent || Lu(this.parent.latestValues) || zv(this.parent.latestValues)))
          return this.parent.isProjecting() ? this.parent : this.parent.getClosestProjectingParent();
      }
      isProjecting() {
        return !!((this.relativeTarget || this.targetDelta || this.options.layoutRoot) && this.layout);
      }
      calcProjection() {
        var s;
        const a = this.getLead(), l = !!this.resumingFrom || this !== a;
        let u = !0;
        if ((this.isProjectionDirty || !((s = this.parent) === null || s === void 0) && s.isProjectionDirty) && (u = !1), l && (this.isSharedProjectionDirty || this.isTransformDirty) && (u = !1), this.resolvedRelativeTargetAt === Fe.timestamp && (u = !1), u)
          return;
        const { layout: f, layoutId: c } = this.options;
        if (this.isTreeAnimating = !!(this.parent && this.parent.isTreeAnimating || this.currentAnimation || this.pendingAnimation), this.isTreeAnimating || (this.targetDelta = this.relativeTarget = void 0), !this.layout || !(f || c))
          return;
        at(this.layoutCorrected, this.layout.layoutBox);
        const d = this.treeScale.x, p = this.treeScale.y;
        A_(this.layoutCorrected, this.treeScale, this.path, l), a.layout && !a.target && (this.treeScale.x !== 1 || this.treeScale.y !== 1) && (a.target = a.layout.layoutBox);
        const { target: g } = a;
        if (!g) {
          this.projectionTransform && (this.projectionDelta = Dr(), this.projectionTransform = "none", this.scheduleRender());
          return;
        }
        this.projectionDelta || (this.projectionDelta = Dr(), this.projectionDeltaWithTransform = Dr());
        const v = this.projectionTransform;
        Fi(this.projectionDelta, this.layoutCorrected, g, this.latestValues), this.projectionTransform = fp(this.projectionDelta, this.treeScale), (this.projectionTransform !== v || this.treeScale.x !== d || this.treeScale.y !== p) && (this.hasProjected = !0, this.scheduleRender(), this.notifyListeners("projectionUpdate", g)), zn.recalculatedProjection++;
      }
      hide() {
        this.isVisible = !1;
      }
      show() {
        this.isVisible = !0;
      }
      scheduleRender(s = !0) {
        if (this.options.scheduleRender && this.options.scheduleRender(), s) {
          const a = this.getStack();
          a && a.scheduleRender();
        }
        this.resumingFrom && !this.resumingFrom.instance && (this.resumingFrom = void 0);
      }
      setAnimationOrigin(s, a = !1) {
        const l = this.snapshot, u = l ? l.latestValues : {}, f = { ...this.latestValues }, c = Dr();
        (!this.relativeParent || !this.relativeParent.options.layoutRoot) && (this.relativeTarget = this.relativeTargetOrigin = void 0), this.attemptToResolveRelativeTarget = !a;
        const d = pe(), p = l ? l.source : void 0, g = this.layout ? this.layout.source : void 0, v = p !== g, T = this.getStack(), y = !T || T.members.length <= 1, h = !!(v && !y && this.options.crossfade === !0 && !this.path.some(yA));
        this.animationProgress = 0;
        let m;
        this.mixTargetDelta = (x) => {
          const k = x / 1e3;
          yp(c.x, s.x, k), yp(c.y, s.y, k), this.setTargetDelta(c), this.relativeTarget && this.relativeTargetOrigin && this.layout && this.relativeParent && this.relativeParent.layout && (ji(d, this.layout.layoutBox, this.relativeParent.layout.layoutBox), mA(this.relativeTarget, this.relativeTargetOrigin, d, k), m && Q_(this.relativeTarget, m) && (this.isProjectionDirty = !1), m || (m = pe()), at(m, this.relativeTarget)), v && (this.animationValues = f, B_(f, u, this.latestValues, k, h, y)), this.root.scheduleUpdateProjection(), this.scheduleRender(), this.animationProgress = k;
        }, this.mixTargetDelta(this.options.layoutRoot ? 1e3 : 0);
      }
      startAnimation(s) {
        this.notifyListeners("animationStart"), this.currentAnimation && this.currentAnimation.stop(), this.resumingFrom && this.resumingFrom.currentAnimation && this.resumingFrom.currentAnimation.stop(), this.pendingAnimation && (Zt(this.pendingAnimation), this.pendingAnimation = void 0), this.pendingAnimation = te.update(() => {
          ts.hasAnimatedSinceResize = !0, this.currentAnimation = tA(0, hp, {
            ...s,
            onUpdate: (a) => {
              this.mixTargetDelta(a), s.onUpdate && s.onUpdate(a);
            },
            onComplete: () => {
              s.onComplete && s.onComplete(), this.completeAnimation();
            }
          }), this.resumingFrom && (this.resumingFrom.currentAnimation = this.currentAnimation), this.pendingAnimation = void 0;
        });
      }
      completeAnimation() {
        this.resumingFrom && (this.resumingFrom.currentAnimation = void 0, this.resumingFrom.preserveOpacity = void 0);
        const s = this.getStack();
        s && s.exitAnimationComplete(), this.resumingFrom = this.currentAnimation = this.animationValues = void 0, this.notifyListeners("animationComplete");
      }
      finishAnimation() {
        this.currentAnimation && (this.mixTargetDelta && this.mixTargetDelta(hp), this.currentAnimation.stop()), this.completeAnimation();
      }
      applyTransformsToTarget() {
        const s = this.getLead();
        let { targetWithTransforms: a, target: l, layout: u, latestValues: f } = s;
        if (!(!a || !l || !u)) {
          if (this !== s && this.layout && u && Zv(this.options.animationType, this.layout.layoutBox, u.layoutBox)) {
            l = this.target || pe();
            const c = nt(this.layout.layoutBox.x);
            l.x.min = s.target.x.min, l.x.max = l.x.min + c;
            const d = nt(this.layout.layoutBox.y);
            l.y.min = s.target.y.min, l.y.max = l.y.min + d;
          }
          at(a, l), Mr(a, f), Fi(this.projectionDeltaWithTransform, this.layoutCorrected, a, f);
        }
      }
      registerSharedNode(s, a) {
        this.sharedNodes.has(s) || this.sharedNodes.set(s, new Y_()), this.sharedNodes.get(s).add(a);
        const u = a.options.initialPromotionConfig;
        a.promote({
          transition: u ? u.transition : void 0,
          preserveFollowOpacity: u && u.shouldPreserveFollowOpacity ? u.shouldPreserveFollowOpacity(a) : void 0
        });
      }
      isLead() {
        const s = this.getStack();
        return s ? s.lead === this : !0;
      }
      getLead() {
        var s;
        const { layoutId: a } = this.options;
        return a ? ((s = this.getStack()) === null || s === void 0 ? void 0 : s.lead) || this : this;
      }
      getPrevLead() {
        var s;
        const { layoutId: a } = this.options;
        return a ? (s = this.getStack()) === null || s === void 0 ? void 0 : s.prevLead : void 0;
      }
      getStack() {
        const { layoutId: s } = this.options;
        if (s)
          return this.root.sharedNodes.get(s);
      }
      promote({ needsReset: s, transition: a, preserveFollowOpacity: l } = {}) {
        const u = this.getStack();
        u && u.promote(this, l), s && (this.projectionDelta = void 0, this.needsReset = !0), a && this.setOptions({ transition: a });
      }
      relegate() {
        const s = this.getStack();
        return s ? s.relegate(this) : !1;
      }
      resetRotation() {
        const { visualElement: s } = this.options;
        if (!s)
          return;
        let a = !1;
        const { latestValues: l } = s;
        if ((l.rotate || l.rotateX || l.rotateY || l.rotateZ) && (a = !0), !a)
          return;
        const u = {};
        for (let f = 0; f < dp.length; f++) {
          const c = "rotate" + dp[f];
          l[c] && (u[c] = l[c], s.setStaticValue(c, 0));
        }
        s.render();
        for (const f in u)
          s.setStaticValue(f, u[f]);
        s.scheduleRender();
      }
      getProjectionStyles(s) {
        var a, l;
        if (!this.instance || this.isSVG)
          return;
        if (!this.isVisible)
          return nA;
        const u = {
          visibility: ""
        }, f = this.getTransformTemplate();
        if (this.needsReset)
          return this.needsReset = !1, u.opacity = "", u.pointerEvents = es(s == null ? void 0 : s.pointerEvents) || "", u.transform = f ? f(this.latestValues, "") : "none", u;
        const c = this.getLead();
        if (!this.projectionDelta || !this.layout || !c.target) {
          const v = {};
          return this.options.layoutId && (v.opacity = this.latestValues.opacity !== void 0 ? this.latestValues.opacity : 1, v.pointerEvents = es(s == null ? void 0 : s.pointerEvents) || ""), this.hasProjected && !In(this.latestValues) && (v.transform = f ? f({}, "") : "none", this.hasProjected = !1), v;
        }
        const d = c.animationValues || c.latestValues;
        this.applyTransformsToTarget(), u.transform = fp(this.projectionDeltaWithTransform, this.treeScale, d), f && (u.transform = f(d, u.transform));
        const { x: p, y: g } = this.projectionDelta;
        u.transformOrigin = `${p.origin * 100}% ${g.origin * 100}% 0`, c.animationValues ? u.opacity = c === this ? (l = (a = d.opacity) !== null && a !== void 0 ? a : this.latestValues.opacity) !== null && l !== void 0 ? l : 1 : this.preserveOpacity ? this.latestValues.opacity : d.opacityExit : u.opacity = c === this ? d.opacity !== void 0 ? d.opacity : "" : d.opacityExit !== void 0 ? d.opacityExit : 0;
        for (const v in Os) {
          if (d[v] === void 0)
            continue;
          const { correct: T, applyTo: y } = Os[v], h = u.transform === "none" ? d[v] : T(d[v], c);
          if (y) {
            const m = y.length;
            for (let x = 0; x < m; x++)
              u[y[x]] = h;
          } else
            u[v] = h;
        }
        return this.options.layoutId && (u.pointerEvents = c === this ? es(s == null ? void 0 : s.pointerEvents) || "" : "none"), u;
      }
      clearSnapshot() {
        this.resumeFrom = this.snapshot = void 0;
      }
      // Only run on root
      resetTree() {
        this.root.nodes.forEach((s) => {
          var a;
          return (a = s.currentAnimation) === null || a === void 0 ? void 0 : a.stop();
        }), this.root.nodes.forEach(pp), this.root.sharedNodes.clear();
      }
    };
  }
  function iA(e) {
    e.updateLayout();
  }
  function oA(e) {
    var t;
    const n = ((t = e.resumeFrom) === null || t === void 0 ? void 0 : t.snapshot) || e.snapshot;
    if (e.isLead() && e.layout && n && e.hasListeners("didUpdate")) {
      const { layoutBox: r, measuredBox: i } = e.layout, { animationType: o } = e.options, s = n.source !== e.layout.source;
      o === "size" ? lt((c) => {
        const d = s ? n.measuredBox[c] : n.layoutBox[c], p = nt(d);
        d.min = r[c].min, d.max = d.min + p;
      }) : Zv(o, n.layoutBox, r) && lt((c) => {
        const d = s ? n.measuredBox[c] : n.layoutBox[c], p = nt(r[c]);
        d.max = d.min + p, e.relativeTarget && !e.currentAnimation && (e.isProjectionDirty = !0, e.relativeTarget[c].max = e.relativeTarget[c].min + p);
      });
      const a = Dr();
      Fi(a, r, n.layoutBox);
      const l = Dr();
      s ? Fi(l, e.applyTransform(i, !0), n.measuredBox) : Fi(l, r, n.layoutBox);
      const u = !Qv(a);
      let f = !1;
      if (!e.resumeFrom) {
        const c = e.getClosestProjectingParent();
        if (c && !c.resumeFrom) {
          const { snapshot: d, layout: p } = c;
          if (d && p) {
            const g = pe();
            ji(g, n.layoutBox, d.layoutBox);
            const v = pe();
            ji(v, r, p.layoutBox), Yv(g, v) || (f = !0), c.options.layoutRoot && (e.relativeTarget = v, e.relativeTargetOrigin = g, e.relativeParent = c);
          }
        }
      }
      e.notifyListeners("didUpdate", {
        layout: r,
        snapshot: n,
        delta: l,
        layoutDelta: a,
        hasLayoutChanged: u,
        hasRelativeTargetChanged: f
      });
    } else if (e.isLead()) {
      const { onExitComplete: r } = e.options;
      r && r();
    }
    e.options.transition = void 0;
  }
  function sA(e) {
    zn.totalNodes++, e.parent && (e.isProjecting() || (e.isProjectionDirty = e.parent.isProjectionDirty), e.isSharedProjectionDirty || (e.isSharedProjectionDirty = !!(e.isProjectionDirty || e.parent.isProjectionDirty || e.parent.isSharedProjectionDirty)), e.isTransformDirty || (e.isTransformDirty = e.parent.isTransformDirty));
  }
  function aA(e) {
    e.isProjectionDirty = e.isSharedProjectionDirty = e.isTransformDirty = !1;
  }
  function lA(e) {
    e.clearSnapshot();
  }
  function pp(e) {
    e.clearMeasurements();
  }
  function uA(e) {
    e.isLayoutDirty = !1;
  }
  function cA(e) {
    const { visualElement: t } = e.options;
    t && t.getProps().onBeforeLayoutMeasure && t.notify("BeforeLayoutMeasure"), e.resetTransform();
  }
  function mp(e) {
    e.finishAnimation(), e.targetDelta = e.relativeTarget = e.target = void 0, e.isProjectionDirty = !0;
  }
  function fA(e) {
    e.resolveTargetDelta();
  }
  function dA(e) {
    e.calcProjection();
  }
  function hA(e) {
    e.resetRotation();
  }
  function pA(e) {
    e.removeLeadSnapshot();
  }
  function yp(e, t, n) {
    e.translate = le(t.translate, 0, n), e.scale = le(t.scale, 1, n), e.origin = t.origin, e.originPoint = t.originPoint;
  }
  function gp(e, t, n, r) {
    e.min = le(t.min, n.min, r), e.max = le(t.max, n.max, r);
  }
  function mA(e, t, n, r) {
    gp(e.x, t.x, n.x, r), gp(e.y, t.y, n.y, r);
  }
  function yA(e) {
    return e.animationValues && e.animationValues.opacityExit !== void 0;
  }
  const gA = {
    duration: 0.45,
    ease: [0.4, 0, 0.1, 1]
  }, vp = (e) => typeof navigator < "u" && navigator.userAgent.toLowerCase().includes(e), xp = vp("applewebkit/") && !vp("chrome/") ? Math.round : he;
  function Sp(e) {
    e.min = xp(e.min), e.max = xp(e.max);
  }
  function vA(e) {
    Sp(e.x), Sp(e.y);
  }
  function Zv(e, t, n) {
    return e === "position" || e === "preserve-aspect" && !Mu(cp(t), cp(n), 0.2);
  }
  const xA = Xv({
    attachResizeListener: (e, t) => Bt(e, "resize", t),
    measureScroll: () => ({
      x: document.documentElement.scrollLeft || document.body.scrollLeft,
      y: document.documentElement.scrollTop || document.body.scrollTop
    }),
    checkIsScrollRoot: () => !0
  }), Sl = {
    current: void 0
  }, qv = Xv({
    measureScroll: (e) => ({
      x: e.scrollLeft,
      y: e.scrollTop
    }),
    defaultParent: () => {
      if (!Sl.current) {
        const e = new xA({});
        e.mount(window), e.setOptions({ layoutScroll: !0 }), Sl.current = e;
      }
      return Sl.current;
    },
    resetTransform: (e, t) => {
      e.style.transform = t !== void 0 ? t : "none";
    },
    checkIsScrollRoot: (e) => window.getComputedStyle(e).position === "fixed"
  }), SA = {
    pan: {
      Feature: V_
    },
    drag: {
      Feature: L_,
      ProjectionNode: qv,
      MeasureLayout: Wv
    }
  }, wA = /var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/;
  function TA(e) {
    const t = wA.exec(e);
    if (!t)
      return [,];
    const [, n, r] = t;
    return [n, r];
  }
  function Nu(e, t, n = 1) {
    const [r, i] = TA(e);
    if (!r)
      return;
    const o = window.getComputedStyle(t).getPropertyValue(r);
    if (o) {
      const s = o.trim();
      return Rv(s) ? parseFloat(s) : s;
    } else
      return ku(i) ? Nu(i, t, n + 1) : i;
  }
  function EA(e, { ...t }, n) {
    const r = e.current;
    if (!(r instanceof Element))
      return { target: t, transitionEnd: n };
    n && (n = { ...n }), e.values.forEach((i) => {
      const o = i.get();
      if (!ku(o))
        return;
      const s = Nu(o, r);
      s && i.set(s);
    });
    for (const i in t) {
      const o = t[i];
      if (!ku(o))
        continue;
      const s = Nu(o, r);
      s && (t[i] = s, n || (n = {}), n[i] === void 0 && (n[i] = o));
    }
    return { target: t, transitionEnd: n };
  }
  const CA = /* @__PURE__ */ new Set([
    "width",
    "height",
    "top",
    "left",
    "right",
    "bottom",
    "x",
    "y",
    "translateX",
    "translateY"
  ]), Jv = (e) => CA.has(e), PA = (e) => Object.keys(e).some(Jv), wp = (e) => e === hr || e === $, Tp = (e, t) => parseFloat(e.split(", ")[t]), Ep = (e, t) => (n, { transform: r }) => {
    if (r === "none" || !r)
      return 0;
    const i = r.match(/^matrix3d\((.+)\)$/);
    if (i)
      return Tp(i[1], t);
    {
      const o = r.match(/^matrix\((.+)\)$/);
      return o ? Tp(o[1], e) : 0;
    }
  }, kA = /* @__PURE__ */ new Set(["x", "y", "z"]), _A = fo.filter((e) => !kA.has(e));
  function AA(e) {
    const t = [];
    return _A.forEach((n) => {
      const r = e.getValue(n);
      r !== void 0 && (t.push([n, r.get()]), r.set(n.startsWith("scale") ? 1 : 0));
    }), t.length && e.render(), t;
  }
  const Yr = {
    // Dimensions
    width: ({ x: e }, { paddingLeft: t = "0", paddingRight: n = "0" }) => e.max - e.min - parseFloat(t) - parseFloat(n),
    height: ({ y: e }, { paddingTop: t = "0", paddingBottom: n = "0" }) => e.max - e.min - parseFloat(t) - parseFloat(n),
    top: (e, { top: t }) => parseFloat(t),
    left: (e, { left: t }) => parseFloat(t),
    bottom: ({ y: e }, { top: t }) => parseFloat(t) + (e.max - e.min),
    right: ({ x: e }, { left: t }) => parseFloat(t) + (e.max - e.min),
    // Transform
    x: Ep(4, 13),
    y: Ep(5, 14)
  };
  Yr.translateX = Yr.x;
  Yr.translateY = Yr.y;
  const OA = (e, t, n) => {
    const r = t.measureViewportBox(), i = t.current, o = getComputedStyle(i), { display: s } = o, a = {};
    s === "none" && t.setStaticValue("display", e.display || "block"), n.forEach((u) => {
      a[u] = Yr[u](r, o);
    }), t.render();
    const l = t.measureViewportBox();
    return n.forEach((u) => {
      const f = t.getValue(u);
      f && f.jump(a[u]), e[u] = Yr[u](l, o);
    }), e;
  }, FA = (e, t, n = {}, r = {}) => {
    t = { ...t }, r = { ...r };
    const i = Object.keys(t).filter(Jv);
    let o = [], s = !1;
    const a = [];
    if (i.forEach((l) => {
      const u = e.getValue(l);
      if (!e.hasValue(l))
        return;
      let f = n[l], c = ci(f);
      const d = t[l];
      let p;
      if (js(d)) {
        const g = d.length, v = d[0] === null ? 1 : 0;
        f = d[v], c = ci(f);
        for (let T = v; T < g && d[T] !== null; T++)
          p ? df(ci(d[T]) === p) : p = ci(d[T]);
      } else
        p = ci(d);
      if (c !== p)
        if (wp(c) && wp(p)) {
          const g = u.get();
          typeof g == "string" && u.set(parseFloat(g)), typeof d == "string" ? t[l] = parseFloat(d) : Array.isArray(d) && p === $ && (t[l] = d.map(parseFloat));
        } else
          c != null && c.transform && (p != null && p.transform) && (f === 0 || d === 0) ? f === 0 ? u.set(p.transform(f)) : t[l] = c.transform(d) : (s || (o = AA(e), s = !0), a.push(l), r[l] = r[l] !== void 0 ? r[l] : t[l], u.jump(d));
    }), a.length) {
      const l = a.indexOf("height") >= 0 ? window.pageYOffset : null, u = OA(t, e, a);
      return o.length && o.forEach(([f, c]) => {
        e.getValue(f).set(c);
      }), e.render(), Sa && l !== null && window.scrollTo({ top: l }), { target: u, transitionEnd: r };
    } else
      return { target: t, transitionEnd: r };
  };
  function jA(e, t, n, r) {
    return PA(t) ? FA(e, t, n, r) : { target: t, transitionEnd: r };
  }
  const DA = (e, t, n, r) => {
    const i = EA(e, t, r);
    return t = i.target, r = i.transitionEnd, jA(e, t, n, r);
  }, bu = { current: null }, e0 = { current: !1 };
  function MA() {
    if (e0.current = !0, !!Sa)
      if (window.matchMedia) {
        const e = window.matchMedia("(prefers-reduced-motion)"), t = () => bu.current = e.matches;
        e.addListener(t), t();
      } else
        bu.current = !1;
  }
  function RA(e, t, n) {
    const { willChange: r } = t;
    for (const i in t) {
      const o = t[i], s = n[i];
      if (Ke(o))
        e.addValue(i, o), Ls(r) && r.add(i);
      else if (Ke(s))
        e.addValue(i, Qr(o, { owner: e })), Ls(r) && r.remove(i);
      else if (s !== o)
        if (e.hasValue(i)) {
          const a = e.getValue(i);
          !a.hasAnimated && a.set(o);
        } else {
          const a = e.getStaticValue(i);
          e.addValue(i, Qr(a !== void 0 ? a : o, { owner: e }));
        }
    }
    for (const i in n)
      t[i] === void 0 && e.removeValue(i);
    return t;
  }
  const Cp = /* @__PURE__ */ new WeakMap(), t0 = Object.keys(Ji), LA = t0.length, Pp = [
    "AnimationStart",
    "AnimationComplete",
    "Update",
    "BeforeLayoutMeasure",
    "LayoutMeasure",
    "LayoutAnimationStart",
    "LayoutAnimationComplete"
  ], VA = nf.length;
  class NA {
    constructor({ parent: t, props: n, presenceContext: r, reducedMotionConfig: i, visualState: o }, s = {}) {
      this.current = null, this.children = /* @__PURE__ */ new Set(), this.isVariantNode = !1, this.isControllingVariants = !1, this.shouldReduceMotion = null, this.values = /* @__PURE__ */ new Map(), this.features = {}, this.valueSubscriptions = /* @__PURE__ */ new Map(), this.prevMotionValues = {}, this.events = {}, this.propEventSubscriptions = {}, this.notifyUpdate = () => this.notify("Update", this.latestValues), this.render = () => {
        this.current && (this.triggerBuild(), this.renderInstance(this.current, this.renderState, this.props.style, this.projection));
      }, this.scheduleRender = () => te.render(this.render, !1, !0);
      const { latestValues: a, renderState: l } = o;
      this.latestValues = a, this.baseTarget = { ...a }, this.initialValues = n.initial ? { ...a } : {}, this.renderState = l, this.parent = t, this.props = n, this.presenceContext = r, this.depth = t ? t.depth + 1 : 0, this.reducedMotionConfig = i, this.options = s, this.isControllingVariants = Ta(n), this.isVariantNode = $g(n), this.isVariantNode && (this.variantChildren = /* @__PURE__ */ new Set()), this.manuallyAnimateOnMount = !!(t && t.current);
      const { willChange: u, ...f } = this.scrapeMotionValuesFromProps(n, {});
      for (const c in f) {
        const d = f[c];
        a[c] !== void 0 && Ke(d) && (d.set(a[c], !1), Ls(u) && u.add(c));
      }
    }
    /**
     * This method takes React props and returns found MotionValues. For example, HTML
     * MotionValues will be found within the style prop, whereas for Three.js within attribute arrays.
     *
     * This isn't an abstract method as it needs calling in the constructor, but it is
     * intended to be one.
     */
    scrapeMotionValuesFromProps(t, n) {
      return {};
    }
    mount(t) {
      this.current = t, Cp.set(t, this), this.projection && !this.projection.instance && this.projection.mount(t), this.parent && this.isVariantNode && !this.isControllingVariants && (this.removeFromVariantTree = this.parent.addVariantChild(this)), this.values.forEach((n, r) => this.bindToMotionValue(r, n)), e0.current || MA(), this.shouldReduceMotion = this.reducedMotionConfig === "never" ? !1 : this.reducedMotionConfig === "always" ? !0 : bu.current, this.parent && this.parent.children.add(this), this.update(this.props, this.presenceContext);
    }
    unmount() {
      Cp.delete(this.current), this.projection && this.projection.unmount(), Zt(this.notifyUpdate), Zt(this.render), this.valueSubscriptions.forEach((t) => t()), this.removeFromVariantTree && this.removeFromVariantTree(), this.parent && this.parent.children.delete(this);
      for (const t in this.events)
        this.events[t].clear();
      for (const t in this.features)
        this.features[t].unmount();
      this.current = null;
    }
    bindToMotionValue(t, n) {
      const r = dr.has(t), i = n.on("change", (s) => {
        this.latestValues[t] = s, this.props.onUpdate && te.update(this.notifyUpdate, !1, !0), r && this.projection && (this.projection.isTransformDirty = !0);
      }), o = n.on("renderRequest", this.scheduleRender);
      this.valueSubscriptions.set(t, () => {
        i(), o();
      });
    }
    sortNodePosition(t) {
      return !this.current || !this.sortInstanceNodePosition || this.type !== t.type ? 0 : this.sortInstanceNodePosition(this.current, t.current);
    }
    loadFeatures({ children: t, ...n }, r, i, o) {
      let s, a;
      for (let l = 0; l < LA; l++) {
        const u = t0[l], { isEnabled: f, Feature: c, ProjectionNode: d, MeasureLayout: p } = Ji[u];
        d && (s = d), f(n) && (!this.features[u] && c && (this.features[u] = new c(this)), p && (a = p));
      }
      if ((this.type === "html" || this.type === "svg") && !this.projection && s) {
        this.projection = new s(this.latestValues, this.parent && this.parent.projection);
        const { layoutId: l, layout: u, drag: f, dragConstraints: c, layoutScroll: d, layoutRoot: p } = n;
        this.projection.setOptions({
          layoutId: l,
          layout: u,
          alwaysMeasureLayout: !!f || c && Fr(c),
          visualElement: this,
          scheduleRender: () => this.scheduleRender(),
          /**
           * TODO: Update options in an effect. This could be tricky as it'll be too late
           * to update by the time layout animations run.
           * We also need to fix this safeToRemove by linking it up to the one returned by usePresence,
           * ensuring it gets called if there's no potential layout animations.
           *
           */
          animationType: typeof u == "string" ? u : "both",
          initialPromotionConfig: o,
          layoutScroll: d,
          layoutRoot: p
        });
      }
      return a;
    }
    updateFeatures() {
      for (const t in this.features) {
        const n = this.features[t];
        n.isMounted ? n.update() : (n.mount(), n.isMounted = !0);
      }
    }
    triggerBuild() {
      this.build(this.renderState, this.latestValues, this.options, this.props);
    }
    /**
     * Measure the current viewport box with or without transforms.
     * Only measures axis-aligned boxes, rotate and skew must be manually
     * removed with a re-render to work.
     */
    measureViewportBox() {
      return this.current ? this.measureInstanceViewportBox(this.current, this.props) : pe();
    }
    getStaticValue(t) {
      return this.latestValues[t];
    }
    setStaticValue(t, n) {
      this.latestValues[t] = n;
    }
    /**
     * Make a target animatable by Popmotion. For instance, if we're
     * trying to animate width from 100px to 100vw we need to measure 100vw
     * in pixels to determine what we really need to animate to. This is also
     * pluggable to support Framer's custom value types like Color,
     * and CSS variables.
     */
    makeTargetAnimatable(t, n = !0) {
      return this.makeTargetAnimatableFromInstance(t, this.props, n);
    }
    /**
     * Update the provided props. Ensure any newly-added motion values are
     * added to our map, old ones removed, and listeners updated.
     */
    update(t, n) {
      (t.transformTemplate || this.props.transformTemplate) && this.scheduleRender(), this.prevProps = this.props, this.props = t, this.prevPresenceContext = this.presenceContext, this.presenceContext = n;
      for (let r = 0; r < Pp.length; r++) {
        const i = Pp[r];
        this.propEventSubscriptions[i] && (this.propEventSubscriptions[i](), delete this.propEventSubscriptions[i]);
        const o = t["on" + i];
        o && (this.propEventSubscriptions[i] = this.on(i, o));
      }
      this.prevMotionValues = RA(this, this.scrapeMotionValuesFromProps(t, this.prevProps), this.prevMotionValues), this.handleChildMotionValue && this.handleChildMotionValue();
    }
    getProps() {
      return this.props;
    }
    /**
     * Returns the variant definition with a given name.
     */
    getVariant(t) {
      return this.props.variants ? this.props.variants[t] : void 0;
    }
    /**
     * Returns the defined default transition on this component.
     */
    getDefaultTransition() {
      return this.props.transition;
    }
    getTransformPagePoint() {
      return this.props.transformPagePoint;
    }
    getClosestVariantNode() {
      return this.isVariantNode ? this : this.parent ? this.parent.getClosestVariantNode() : void 0;
    }
    getVariantContext(t = !1) {
      if (t)
        return this.parent ? this.parent.getVariantContext() : void 0;
      if (!this.isControllingVariants) {
        const r = this.parent ? this.parent.getVariantContext() || {} : {};
        return this.props.initial !== void 0 && (r.initial = this.props.initial), r;
      }
      const n = {};
      for (let r = 0; r < VA; r++) {
        const i = nf[r], o = this.props[i];
        (qi(o) || o === !1) && (n[i] = o);
      }
      return n;
    }
    /**
     * Add a child visual element to our set of children.
     */
    addVariantChild(t) {
      const n = this.getClosestVariantNode();
      if (n)
        return n.variantChildren && n.variantChildren.add(t), () => n.variantChildren.delete(t);
    }
    /**
     * Add a motion value and bind it to this visual element.
     */
    addValue(t, n) {
      n !== this.values.get(t) && (this.removeValue(t), this.bindToMotionValue(t, n)), this.values.set(t, n), this.latestValues[t] = n.get();
    }
    /**
     * Remove a motion value and unbind any active subscriptions.
     */
    removeValue(t) {
      this.values.delete(t);
      const n = this.valueSubscriptions.get(t);
      n && (n(), this.valueSubscriptions.delete(t)), delete this.latestValues[t], this.removeValueFromRenderState(t, this.renderState);
    }
    /**
     * Check whether we have a motion value for this key
     */
    hasValue(t) {
      return this.values.has(t);
    }
    getValue(t, n) {
      if (this.props.values && this.props.values[t])
        return this.props.values[t];
      let r = this.values.get(t);
      return r === void 0 && n !== void 0 && (r = Qr(n, { owner: this }), this.addValue(t, r)), r;
    }
    /**
     * If we're trying to animate to a previously unencountered value,
     * we need to check for it in our state and as a last resort read it
     * directly from the instance (which might have performance implications).
     */
    readValue(t) {
      var n;
      return this.latestValues[t] !== void 0 || !this.current ? this.latestValues[t] : (n = this.getBaseTargetFromProps(this.props, t)) !== null && n !== void 0 ? n : this.readValueFromInstance(this.current, t, this.options);
    }
    /**
     * Set the base target to later animate back to. This is currently
     * only hydrated on creation and when we first read a value.
     */
    setBaseTarget(t, n) {
      this.baseTarget[t] = n;
    }
    /**
     * Find the base target for a value thats been removed from all animation
     * props.
     */
    getBaseTarget(t) {
      var n;
      const { initial: r } = this.props, i = typeof r == "string" || typeof r == "object" ? (n = ff(this.props, r)) === null || n === void 0 ? void 0 : n[t] : void 0;
      if (r && i !== void 0)
        return i;
      const o = this.getBaseTargetFromProps(this.props, t);
      return o !== void 0 && !Ke(o) ? o : this.initialValues[t] !== void 0 && i === void 0 ? void 0 : this.baseTarget[t];
    }
    on(t, n) {
      return this.events[t] || (this.events[t] = new wf()), this.events[t].add(n);
    }
    notify(t, ...n) {
      this.events[t] && this.events[t].notify(...n);
    }
  }
  class n0 extends NA {
    sortInstanceNodePosition(t, n) {
      return t.compareDocumentPosition(n) & 2 ? 1 : -1;
    }
    getBaseTargetFromProps(t, n) {
      return t.style ? t.style[n] : void 0;
    }
    removeValueFromRenderState(t, { vars: n, style: r }) {
      delete n[t], delete r[t];
    }
    makeTargetAnimatableFromInstance({ transition: t, transitionEnd: n, ...r }, { transformValues: i }, o) {
      let s = e_(r, t || {}, this);
      if (i && (n && (n = i(n)), r && (r = i(r)), s && (s = i(s))), o) {
        q2(this, r, s);
        const a = DA(this, r, s, n);
        n = a.transitionEnd, r = a.target;
      }
      return {
        transition: t,
        transitionEnd: n,
        ...r
      };
    }
  }
  function bA(e) {
    return window.getComputedStyle(e);
  }
  class $A extends n0 {
    constructor() {
      super(...arguments), this.type = "html";
    }
    readValueFromInstance(t, n) {
      if (dr.has(n)) {
        const r = yf(n);
        return r && r.default || 0;
      } else {
        const r = bA(t), i = (Ug(n) ? r.getPropertyValue(n) : r[n]) || 0;
        return typeof i == "string" ? i.trim() : i;
      }
    }
    measureInstanceViewportBox(t, { transformPagePoint: n }) {
      return Uv(t, n);
    }
    build(t, n, r, i) {
      sf(t, n, r, i.transformTemplate);
    }
    scrapeMotionValuesFromProps(t, n) {
      return cf(t, n);
    }
    handleChildMotionValue() {
      this.childSubscription && (this.childSubscription(), delete this.childSubscription);
      const { children: t } = this.props;
      Ke(t) && (this.childSubscription = t.on("change", (n) => {
        this.current && (this.current.textContent = `${n}`);
      }));
    }
    renderInstance(t, n, r, i) {
      Yg(t, n, r, i);
    }
  }
  class IA extends n0 {
    constructor() {
      super(...arguments), this.type = "svg", this.isSVGTag = !1;
    }
    getBaseTargetFromProps(t, n) {
      return t[n];
    }
    readValueFromInstance(t, n) {
      if (dr.has(n)) {
        const r = yf(n);
        return r && r.default || 0;
      }
      return n = Xg.has(n) ? n : ef(n), t.getAttribute(n);
    }
    measureInstanceViewportBox() {
      return pe();
    }
    scrapeMotionValuesFromProps(t, n) {
      return qg(t, n);
    }
    build(t, n, r, i) {
      lf(t, n, r, this.isSVGTag, i.transformTemplate);
    }
    renderInstance(t, n, r, i) {
      Zg(t, n, r, i);
    }
    mount(t) {
      this.isSVGTag = uf(t.tagName), super.mount(t);
    }
  }
  const zA = (e, t) => of(e) ? new IA(t, { enableHardwareAcceleration: !1 }) : new $A(t, { enableHardwareAcceleration: !0 }), BA = {
    layout: {
      ProjectionNode: qv,
      MeasureLayout: Wv
    }
  }, UA = {
    ...m_,
    ...Lk,
    ...SA,
    ...BA
  }, HA = /* @__PURE__ */ HP((e, t) => Tk(e, t, UA, zA));
  function r0() {
    const e = S.useRef(!1);
    return Jc(() => (e.current = !0, () => {
      e.current = !1;
    }), []), e;
  }
  function WA() {
    const e = r0(), [t, n] = S.useState(0), r = S.useCallback(() => {
      e.current && n(t + 1);
    }, [t]);
    return [S.useCallback(() => te.postRender(r), [r]), t];
  }
  class GA extends S.Component {
    getSnapshotBeforeUpdate(t) {
      const n = this.props.childRef.current;
      if (n && t.isPresent && !this.props.isPresent) {
        const r = this.props.sizeRef.current;
        r.height = n.offsetHeight || 0, r.width = n.offsetWidth || 0, r.top = n.offsetTop, r.left = n.offsetLeft;
      }
      return null;
    }
    /**
     * Required with getSnapshotBeforeUpdate to stop React complaining.
     */
    componentDidUpdate() {
    }
    render() {
      return this.props.children;
    }
  }
  function KA({ children: e, isPresent: t }) {
    const n = S.useId(), r = S.useRef(null), i = S.useRef({
      width: 0,
      height: 0,
      top: 0,
      left: 0
    });
    return S.useInsertionEffect(() => {
      const { width: o, height: s, top: a, left: l } = i.current;
      if (t || !r.current || !o || !s)
        return;
      r.current.dataset.motionPopId = n;
      const u = document.createElement("style");
      return document.head.appendChild(u), u.sheet && u.sheet.insertRule(`
          [data-motion-pop-id="${n}"] {
            position: absolute !important;
            width: ${o}px !important;
            height: ${s}px !important;
            top: ${a}px !important;
            left: ${l}px !important;
          }
        `), () => {
        document.head.removeChild(u);
      };
    }, [t]), S.createElement(GA, { isPresent: t, childRef: r, sizeRef: i }, S.cloneElement(e, { ref: r }));
  }
  const wl = ({ children: e, initial: t, isPresent: n, onExitComplete: r, custom: i, presenceAffectsLayout: o, mode: s }) => {
    const a = Jg(QA), l = S.useId(), u = S.useMemo(
      () => ({
        id: l,
        initial: t,
        isPresent: n,
        custom: i,
        onExitComplete: (f) => {
          a.set(f, !0);
          for (const c of a.values())
            if (!c)
              return;
          r && r();
        },
        register: (f) => (a.set(f, !1), () => a.delete(f))
      }),
      /**
       * If the presence of a child affects the layout of the components around it,
       * we want to make a new context value to ensure they get re-rendered
       * so they can detect that layout change.
       */
      o ? void 0 : [n]
    );
    return S.useMemo(() => {
      a.forEach((f, c) => a.set(c, !1));
    }, [n]), S.useEffect(() => {
      !n && !a.size && r && r();
    }, [n]), s === "popLayout" && (e = S.createElement(KA, { isPresent: n }, e)), S.createElement(xa.Provider, { value: u }, e);
  };
  function QA() {
    return /* @__PURE__ */ new Map();
  }
  function YA(e) {
    return S.useEffect(() => () => e(), []);
  }
  const Bn = (e) => e.key || "";
  function XA(e, t) {
    e.forEach((n) => {
      const r = Bn(n);
      t.set(r, n);
    });
  }
  function ZA(e) {
    const t = [];
    return S.Children.forEach(e, (n) => {
      S.isValidElement(n) && t.push(n);
    }), t;
  }
  const qA = ({ children: e, custom: t, initial: n = !0, onExitComplete: r, exitBeforeEnter: i, presenceAffectsLayout: o = !0, mode: s = "sync" }) => {
    const a = S.useContext(rf).forceRender || WA()[0], l = r0(), u = ZA(e);
    let f = u;
    const c = S.useRef(/* @__PURE__ */ new Map()).current, d = S.useRef(f), p = S.useRef(/* @__PURE__ */ new Map()).current, g = S.useRef(!0);
    if (Jc(() => {
      g.current = !1, XA(u, p), d.current = f;
    }), YA(() => {
      g.current = !0, p.clear(), c.clear();
    }), g.current)
      return S.createElement(S.Fragment, null, f.map((h) => S.createElement(wl, { key: Bn(h), isPresent: !0, initial: n ? void 0 : !1, presenceAffectsLayout: o, mode: s }, h)));
    f = [...f];
    const v = d.current.map(Bn), T = u.map(Bn), y = v.length;
    for (let h = 0; h < y; h++) {
      const m = v[h];
      T.indexOf(m) === -1 && !c.has(m) && c.set(m, void 0);
    }
    return s === "wait" && c.size && (f = []), c.forEach((h, m) => {
      if (T.indexOf(m) !== -1)
        return;
      const x = p.get(m);
      if (!x)
        return;
      const k = v.indexOf(m);
      let E = h;
      if (!E) {
        const C = () => {
          c.delete(m);
          const _ = Array.from(p.keys()).filter((L) => !T.includes(L));
          if (_.forEach((L) => p.delete(L)), d.current = u.filter((L) => {
            const V = Bn(L);
            return (
              // filter out the node exiting
              V === m || // filter out the leftover children
              _.includes(V)
            );
          }), !c.size) {
            if (l.current === !1)
              return;
            a(), r && r();
          }
        };
        E = S.createElement(wl, { key: Bn(x), isPresent: !1, onExitComplete: C, custom: t, presenceAffectsLayout: o, mode: s }, x), c.set(m, E);
      }
      f.splice(k, 0, E);
    }), f = f.map((h) => {
      const m = h.key;
      return c.has(m) ? h : S.createElement(wl, { key: Bn(h), isPresent: !0, presenceAffectsLayout: o, mode: s }, h);
    }), S.createElement(S.Fragment, null, c.size ? f : f.map((h) => S.cloneElement(h)));
  };
  function JA({
    activeStep: e,
    initialValues: t,
    values: n
  }) {
    function r(a) {
      return a = a[0].toUpperCase() + a.slice(1), a.replace(/[A-Z]/g, " $&");
    }
    function i(a, l) {
      const u = {};
      return l === "number" && (u.onKeyDown = (c) => {
        ["e", "E", "+", "-", ".", ","].includes(c.key) && c.preventDefault();
      }), ((a == null ? void 0 : a.tests) || []).forEach((c) => {
        switch (c.OPTIONS.name) {
          case "min":
            u.min = c.OPTIONS.params.min || c.OPTIONS.params.more;
            break;
          case "max":
            u.max = c.OPTIONS.params.max;
            break;
        }
      }), u;
    }
    const { validationSchema: o, fields: s } = e;
    return /* @__PURE__ */ F.jsxs("div", { id: "default", className: "prose max-w-none", children: [
      /* @__PURE__ */ F.jsx("h2", { children: r(e.id) }),
      /* @__PURE__ */ F.jsx("p", { children: e.helpText }),
      /* @__PURE__ */ F.jsx("div", { className: "flex flex-row gap-6 flex-wrap", children: Object.keys(t || {}).map((a) => {
        var l, u;
        return /* @__PURE__ */ F.jsxs("div", { className: "grow shrink-0 basis-72", children: [
          /* @__PURE__ */ F.jsx("label", { htmlFor: a, className: "block mb-2 text-sm font-medium text-white", children: r(a) }),
          /* @__PURE__ */ F.jsx(
            xP,
            {
              id: a,
              name: a,
              value: n[a],
              type: s == null ? void 0 : s.inputTypes[a],
              placeholder: (l = s == null ? void 0 : s.placeholders) == null ? void 0 : l[a],
              ...i((u = o == null ? void 0 : o.fields) == null ? void 0 : u[a], s == null ? void 0 : s.inputTypes[a]),
              className: "bg-gray-700 border border-gray-600 text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 placeholder-gray-400"
            }
          ),
          /* @__PURE__ */ F.jsx(kP, { name: a, children: (f) => /* @__PURE__ */ F.jsx("div", { className: "text-red-400", children: f }) })
        ] }, a);
      }) })
    ] });
  }
  function eO() {
    const { isAnimated: e } = S.useContext(Tf), { activeStep: t } = co(), { initialValues: n, values: r } = lo();
    let i = {};
    return e && (i = {
      initial: { opacity: 0 },
      animate: { opacity: 1 },
      exit: { opacity: 0 }
    }), /* @__PURE__ */ F.jsx(qA, { initial: !1, mode: "wait", children: /* @__PURE__ */ F.jsx(
      HA.div,
      {
        variants: i,
        initial: "initial",
        animate: "animate",
        exit: "exit",
        transition: { type: "tween", duration: 0.25 },
        children: /* @__PURE__ */ F.jsx("div", { className: "py-4 sm:pt-12 lg:pt-20 pb-20 sm:pb-32", children: /* @__PURE__ */ F.jsx("div", { className: "container mx-auto sm:px-0 px-5 max-w-lg min-w-min md:max-w-2xl lg:max-w-4xl", children: t.component || /* @__PURE__ */ F.jsx(
          JA,
          {
            activeStep: t,
            initialValues: n,
            values: r
          }
        ) }) })
      },
      t.id
    ) });
  }
  var i0 = {
    color: void 0,
    size: void 0,
    className: void 0,
    style: void 0,
    attr: void 0
  }, kp = Ut.createContext && Ut.createContext(i0), En = function() {
    return En = Object.assign || function(e) {
      for (var t, n = 1, r = arguments.length; n < r; n++) {
        t = arguments[n];
        for (var i in t)
          Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
      }
      return e;
    }, En.apply(this, arguments);
  }, tO = function(e, t) {
    var n = {};
    for (var r in e)
      Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
    if (e != null && typeof Object.getOwnPropertySymbols == "function")
      for (var i = 0, r = Object.getOwnPropertySymbols(e); i < r.length; i++)
        t.indexOf(r[i]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[i]) && (n[r[i]] = e[r[i]]);
    return n;
  };
  function o0(e) {
    return e && e.map(function(t, n) {
      return Ut.createElement(t.tag, En({
        key: n
      }, t.attr), o0(t.child));
    });
  }
  function s0(e) {
    return function(t) {
      return Ut.createElement(nO, En({
        attr: En({}, e.attr)
      }, t), o0(e.child));
    };
  }
  function nO(e) {
    var t = function(n) {
      var r = e.attr, i = e.size, o = e.title, s = tO(e, ["attr", "size", "title"]), a = i || n.size || "1em", l;
      return n.className && (l = n.className), e.className && (l = (l ? l + " " : "") + e.className), Ut.createElement("svg", En({
        stroke: "currentColor",
        fill: "currentColor",
        strokeWidth: "0"
      }, n.attr, r, s, {
        className: l,
        style: En(En({
          color: e.color || n.color
        }, n.style), e.style),
        height: a,
        width: a,
        xmlns: "http://www.w3.org/2000/svg"
      }), o && Ut.createElement("title", null, o), e.children);
    };
    return kp !== void 0 ? Ut.createElement(kp.Consumer, null, function(n) {
      return t(n);
    }) : t(i0);
  }
  function rO(e) {
    return s0({ tag: "svg", attr: { fill: "currentColor", viewBox: "0 0 16 16" }, child: [{ tag: "path", attr: { fillRule: "evenodd", d: "M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z" } }] })(e);
  }
  function iO(e) {
    return s0({ tag: "svg", attr: { fill: "currentColor", viewBox: "0 0 16 16" }, child: [{ tag: "path", attr: { fillRule: "evenodd", d: "M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z" } }] })(e);
  }
  var a0 = {}, Xr = {};
  Object.defineProperty(Xr, "__esModule", { value: !0 });
  Xr.cssValue = Xr.parseLengthAndUnit = void 0;
  var oO = {
    cm: !0,
    mm: !0,
    in: !0,
    px: !0,
    pt: !0,
    pc: !0,
    em: !0,
    ex: !0,
    ch: !0,
    rem: !0,
    vw: !0,
    vh: !0,
    vmin: !0,
    vmax: !0,
    "%": !0
  };
  function l0(e) {
    if (typeof e == "number")
      return {
        value: e,
        unit: "px"
      };
    var t, n = (e.match(/^[0-9.]*/) || "").toString();
    n.includes(".") ? t = parseFloat(n) : t = parseInt(n, 10);
    var r = (e.match(/[^0-9]*$/) || "").toString();
    return oO[r] ? {
      value: t,
      unit: r
    } : (console.warn("React Spinners: ".concat(e, " is not a valid css value. Defaulting to ").concat(t, "px.")), {
      value: t,
      unit: "px"
    });
  }
  Xr.parseLengthAndUnit = l0;
  function sO(e) {
    var t = l0(e);
    return "".concat(t.value).concat(t.unit);
  }
  Xr.cssValue = sO;
  var ka = {};
  Object.defineProperty(ka, "__esModule", { value: !0 });
  ka.createAnimation = void 0;
  var aO = function(e, t, n) {
    var r = "react-spinners-".concat(e, "-").concat(n);
    if (typeof window > "u" || !window.document)
      return r;
    var i = document.createElement("style");
    document.head.appendChild(i);
    var o = i.sheet, s = `
    @keyframes `.concat(r, ` {
      `).concat(t, `
    }
  `);
    return o && o.insertRule(s, 0), r;
  };
  ka.createAnimation = aO;
  var Ns = Mt && Mt.__assign || function() {
    return Ns = Object.assign || function(e) {
      for (var t, n = 1, r = arguments.length; n < r; n++) {
        t = arguments[n];
        for (var i in t)
          Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
      }
      return e;
    }, Ns.apply(this, arguments);
  }, lO = Mt && Mt.__createBinding || (Object.create ? function(e, t, n, r) {
    r === void 0 && (r = n);
    var i = Object.getOwnPropertyDescriptor(t, n);
    (!i || ("get" in i ? !t.__esModule : i.writable || i.configurable)) && (i = { enumerable: !0, get: function() {
      return t[n];
    } }), Object.defineProperty(e, r, i);
  } : function(e, t, n, r) {
    r === void 0 && (r = n), e[r] = t[n];
  }), uO = Mt && Mt.__setModuleDefault || (Object.create ? function(e, t) {
    Object.defineProperty(e, "default", { enumerable: !0, value: t });
  } : function(e, t) {
    e.default = t;
  }), cO = Mt && Mt.__importStar || function(e) {
    if (e && e.__esModule)
      return e;
    var t = {};
    if (e != null)
      for (var n in e)
        n !== "default" && Object.prototype.hasOwnProperty.call(e, n) && lO(t, e, n);
    return uO(t, e), t;
  }, fO = Mt && Mt.__rest || function(e, t) {
    var n = {};
    for (var r in e)
      Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
    if (e != null && typeof Object.getOwnPropertySymbols == "function")
      for (var i = 0, r = Object.getOwnPropertySymbols(e); i < r.length; i++)
        t.indexOf(r[i]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[i]) && (n[r[i]] = e[r[i]]);
    return n;
  };
  Object.defineProperty(a0, "__esModule", { value: !0 });
  var dO = cO(S), _p = Xr, hO = ka, pO = (0, hO.createAnimation)("ClipLoader", "0% {transform: rotate(0deg) scale(1)} 50% {transform: rotate(180deg) scale(0.8)} 100% {transform: rotate(360deg) scale(1)}", "clip");
  function mO(e) {
    var t = e.loading, n = t === void 0 ? !0 : t, r = e.color, i = r === void 0 ? "#000000" : r, o = e.speedMultiplier, s = o === void 0 ? 1 : o, a = e.cssOverride, l = a === void 0 ? {} : a, u = e.size, f = u === void 0 ? 35 : u, c = fO(e, ["loading", "color", "speedMultiplier", "cssOverride", "size"]), d = Ns({ background: "transparent !important", width: (0, _p.cssValue)(f), height: (0, _p.cssValue)(f), borderRadius: "100%", border: "2px solid", borderTopColor: i, borderBottomColor: "transparent", borderLeftColor: i, borderRightColor: i, display: "inline-block", animation: "".concat(pO, " ").concat(0.75 / s, "s 0s infinite linear"), animationFillMode: "both" }, l);
    return n ? dO.createElement("span", Ns({ style: d }, c)) : null;
  }
  var yO = a0.default = mO;
  function gO() {
    let {
      goToPreviousStep: e,
      isFirstStep: t,
      isLoading: n,
      activeStep: {
        hidePrevious: r,
        hideNext: i,
        disableNext: o,
        disableNextOnErrors: s
      }
    } = co();
    const { isValid: a, submitForm: l } = lo();
    return o = n || o || s && !a, /* @__PURE__ */ F.jsx("div", { className: "navigation", children: /* @__PURE__ */ F.jsxs("div", { className: "navigation-wrapper " + (r ? "justify-end" : "justify-between"), children: [
      !r && /* @__PURE__ */ F.jsxs(
        "button",
        {
          className: "btn",
          onClick: e,
          disabled: t,
          type: "button",
          children: [
            /* @__PURE__ */ F.jsx(rO, { className: "w-8 h-8 fill-current" }),
            /* @__PURE__ */ F.jsx("span", { children: "Previous" })
          ]
        }
      ),
      !i && // Still possible to trigger submit even though button is disabled.
      // Main reason is to display validation errors.
      /* @__PURE__ */ F.jsx("div", { onClick: o ? l : void 0, children: /* @__PURE__ */ F.jsxs(
        "button",
        {
          className: "btn",
          disabled: o,
          type: "submit",
          children: [
            n && /* @__PURE__ */ F.jsx("span", { className: "mr-1 loading", children: /* @__PURE__ */ F.jsx(yO, { size: 11, color: "#757575" }) }),
            /* @__PURE__ */ F.jsx("span", { children: "Next" }),
            /* @__PURE__ */ F.jsx(iO, { className: "w-8 h-8 fill-current" })
          ]
        }
      ) })
    ] }) });
  }
  function vO() {
    const { isAnimated: e, setIsAnimated: t } = S.useContext(Tf), { stepNumber: n, totalSteps: r } = co(), i = `${(n - 1) / (r - 1) * 100}%`;
    return /* @__PURE__ */ F.jsxs("header", { className: "pt-4 pb-3", children: [
      /* @__PURE__ */ F.jsxs("div", { className: "px-5 flex justify-between items-center prose max-w-none", children: [
        /* @__PURE__ */ F.jsx("h3", { className: "mb-0 text-base sm:text-xl", children: "react-formik-step-wizard" }),
        /* @__PURE__ */ F.jsxs("div", { className: "flex items-center", children: [
          /* @__PURE__ */ F.jsxs("div", { className: "mr-3 text-sm", children: [
            /* @__PURE__ */ F.jsx("span", { className: "hidden min-[400px]:inline", children: "Step" }),
            " ",
            n,
            " / ",
            r
          ] }),
          /* @__PURE__ */ F.jsx("a", { href: "https://github.com/kennyhei/react-formik-step-wizard", target: "_blank", children: /* @__PURE__ */ F.jsx("img", { src: "/react-formik-step-wizard/github-mark-white.svg", className: "rounded-md w-9 my-0" }) })
        ] })
      ] }),
      /* @__PURE__ */ F.jsx("div", { className: "w-full bg-gray-600 h-1 mt-[17px]", children: /* @__PURE__ */ F.jsx(
        "div",
        {
          style: { width: i },
          className: "h-full bg-success transition-all " + (e ? "duration-500" : "")
        }
      ) }),
      /* @__PURE__ */ F.jsx("div", { className: "flex justify-end pr-5 prose max-w-none pt-1", children: /* @__PURE__ */ F.jsxs("label", { className: "label cursor-pointer px-0", children: [
        /* @__PURE__ */ F.jsx("span", { className: "label-text pr-2 " + (e ? "text-success" : "text-gray-300"), children: "Animate" }),
        /* @__PURE__ */ F.jsx(
          "input",
          {
            type: "checkbox",
            className: "toggle toggle-sm bg-gray-300 toggle-success",
            checked: e,
            onChange: () => t(!e)
          }
        )
      ] }) })
    ] });
  }
  const Tf = S.createContext({});
  function xO() {
    const [e, t] = S.useState(!0);
    return /* @__PURE__ */ F.jsx(Tf.Provider, { value: { isAnimated: e, setIsAnimated: t }, children: /* @__PURE__ */ F.jsx(
      FP,
      {
        enableHash: !0,
        steps: RP,
        onStepChanged: (n, r, i) => {
          console.log("step changed", n.id, r.id, i);
        },
        header: /* @__PURE__ */ F.jsx(vO, {}),
        wrapper: /* @__PURE__ */ F.jsx(eO, {}),
        footer: /* @__PURE__ */ F.jsx(gO, {})
      }
    ) });
  }
  Tl.createRoot(document.getElementById("root")).render(
    /* @__PURE__ */ F.jsx(xO, {})
  );
});
export default SO();
