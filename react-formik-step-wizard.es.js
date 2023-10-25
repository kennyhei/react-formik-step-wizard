var h0 = (e, t) => () => (t || e((t = { exports: {} }).exports, t), t.exports);
var LO = h0((Ze, qe) => {
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
  function Is(e) {
    return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
  }
  var kh = { exports: {} }, zs = {}, _h = { exports: {} }, B = {};
  /**
   * @license React
   * react.production.min.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */
  var no = Symbol.for("react.element"), m0 = Symbol.for("react.portal"), y0 = Symbol.for("react.fragment"), g0 = Symbol.for("react.strict_mode"), v0 = Symbol.for("react.profiler"), x0 = Symbol.for("react.provider"), S0 = Symbol.for("react.context"), w0 = Symbol.for("react.forward_ref"), T0 = Symbol.for("react.suspense"), E0 = Symbol.for("react.memo"), C0 = Symbol.for("react.lazy"), Cf = Symbol.iterator;
  function P0(e) {
    return e === null || typeof e != "object" ? null : (e = Cf && e[Cf] || e["@@iterator"], typeof e == "function" ? e : null);
  }
  var Ah = { isMounted: function() {
    return !1;
  }, enqueueForceUpdate: function() {
  }, enqueueReplaceState: function() {
  }, enqueueSetState: function() {
  } }, Oh = Object.assign, Fh = {};
  function Zr(e, t, n) {
    this.props = e, this.context = t, this.refs = Fh, this.updater = n || Ah;
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
  function jh() {
  }
  jh.prototype = Zr.prototype;
  function Iu(e, t, n) {
    this.props = e, this.context = t, this.refs = Fh, this.updater = n || Ah;
  }
  var zu = Iu.prototype = new jh();
  zu.constructor = Iu;
  Oh(zu, Zr.prototype);
  zu.isPureReactComponent = !0;
  var Pf = Array.isArray, Dh = Object.prototype.hasOwnProperty, Bu = { current: null }, Mh = { key: !0, ref: !0, __self: !0, __source: !0 };
  function Rh(e, t, n) {
    var r, i = {}, o = null, s = null;
    if (t != null)
      for (r in t.ref !== void 0 && (s = t.ref), t.key !== void 0 && (o = "" + t.key), t)
        Dh.call(t, r) && !Mh.hasOwnProperty(r) && (i[r] = t[r]);
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
    return { $$typeof: no, type: e, key: o, ref: s, props: i, _owner: Bu.current };
  }
  function k0(e, t) {
    return { $$typeof: no, type: e.type, key: t, ref: e.ref, props: e.props, _owner: e._owner };
  }
  function Uu(e) {
    return typeof e == "object" && e !== null && e.$$typeof === no;
  }
  function _0(e) {
    var t = { "=": "=0", ":": "=2" };
    return "$" + e.replace(/[=:]/g, function(n) {
      return t[n];
    });
  }
  var kf = /\/+/g;
  function Da(e, t) {
    return typeof e == "object" && e !== null && e.key != null ? _0("" + e.key) : t.toString(36);
  }
  function Bo(e, t, n, r, i) {
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
            case no:
            case m0:
              s = !0;
          }
      }
    if (s)
      return s = e, i = i(s), e = r === "" ? "." + Da(s, 0) : r, Pf(i) ? (n = "", e != null && (n = e.replace(kf, "$&/") + "/"), Bo(i, t, n, "", function(u) {
        return u;
      })) : i != null && (Uu(i) && (i = k0(i, n + (!i.key || s && s.key === i.key ? "" : ("" + i.key).replace(kf, "$&/") + "/") + e)), t.push(i)), 1;
    if (s = 0, r = r === "" ? "." : r + ":", Pf(e))
      for (var a = 0; a < e.length; a++) {
        o = e[a];
        var l = r + Da(o, a);
        s += Bo(o, t, n, l, i);
      }
    else if (l = P0(e), typeof l == "function")
      for (e = l.call(e), a = 0; !(o = e.next()).done; )
        o = o.value, l = r + Da(o, a++), s += Bo(o, t, n, l, i);
    else if (o === "object")
      throw t = String(e), Error("Objects are not valid as a React child (found: " + (t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t) + "). If you meant to render a collection of children, use an array instead.");
    return s;
  }
  function xo(e, t, n) {
    if (e == null)
      return e;
    var r = [], i = 0;
    return Bo(e, r, "", "", function(o) {
      return t.call(n, o, i++);
    }), r;
  }
  function A0(e) {
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
  var $e = { current: null }, Uo = { transition: null }, O0 = { ReactCurrentDispatcher: $e, ReactCurrentBatchConfig: Uo, ReactCurrentOwner: Bu };
  B.Children = { map: xo, forEach: function(e, t, n) {
    xo(e, function() {
      t.apply(this, arguments);
    }, n);
  }, count: function(e) {
    var t = 0;
    return xo(e, function() {
      t++;
    }), t;
  }, toArray: function(e) {
    return xo(e, function(t) {
      return t;
    }) || [];
  }, only: function(e) {
    if (!Uu(e))
      throw Error("React.Children.only expected to receive a single React element child.");
    return e;
  } };
  B.Component = Zr;
  B.Fragment = y0;
  B.Profiler = v0;
  B.PureComponent = Iu;
  B.StrictMode = g0;
  B.Suspense = T0;
  B.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = O0;
  B.cloneElement = function(e, t, n) {
    if (e == null)
      throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + e + ".");
    var r = Oh({}, e.props), i = e.key, o = e.ref, s = e._owner;
    if (t != null) {
      if (t.ref !== void 0 && (o = t.ref, s = Bu.current), t.key !== void 0 && (i = "" + t.key), e.type && e.type.defaultProps)
        var a = e.type.defaultProps;
      for (l in t)
        Dh.call(t, l) && !Mh.hasOwnProperty(l) && (r[l] = t[l] === void 0 && a !== void 0 ? a[l] : t[l]);
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
    return { $$typeof: no, type: e.type, key: i, ref: o, props: r, _owner: s };
  };
  B.createContext = function(e) {
    return e = { $$typeof: S0, _currentValue: e, _currentValue2: e, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, e.Provider = { $$typeof: x0, _context: e }, e.Consumer = e;
  };
  B.createElement = Rh;
  B.createFactory = function(e) {
    var t = Rh.bind(null, e);
    return t.type = e, t;
  };
  B.createRef = function() {
    return { current: null };
  };
  B.forwardRef = function(e) {
    return { $$typeof: w0, render: e };
  };
  B.isValidElement = Uu;
  B.lazy = function(e) {
    return { $$typeof: C0, _payload: { _status: -1, _result: e }, _init: A0 };
  };
  B.memo = function(e, t) {
    return { $$typeof: E0, type: e, compare: t === void 0 ? null : t };
  };
  B.startTransition = function(e) {
    var t = Uo.transition;
    Uo.transition = {};
    try {
      e();
    } finally {
      Uo.transition = t;
    }
  };
  B.unstable_act = function() {
    throw Error("act(...) is not supported in production builds of React.");
  };
  B.useCallback = function(e, t) {
    return $e.current.useCallback(e, t);
  };
  B.useContext = function(e) {
    return $e.current.useContext(e);
  };
  B.useDebugValue = function() {
  };
  B.useDeferredValue = function(e) {
    return $e.current.useDeferredValue(e);
  };
  B.useEffect = function(e, t) {
    return $e.current.useEffect(e, t);
  };
  B.useId = function() {
    return $e.current.useId();
  };
  B.useImperativeHandle = function(e, t, n) {
    return $e.current.useImperativeHandle(e, t, n);
  };
  B.useInsertionEffect = function(e, t) {
    return $e.current.useInsertionEffect(e, t);
  };
  B.useLayoutEffect = function(e, t) {
    return $e.current.useLayoutEffect(e, t);
  };
  B.useMemo = function(e, t) {
    return $e.current.useMemo(e, t);
  };
  B.useReducer = function(e, t, n) {
    return $e.current.useReducer(e, t, n);
  };
  B.useRef = function(e) {
    return $e.current.useRef(e);
  };
  B.useState = function(e) {
    return $e.current.useState(e);
  };
  B.useSyncExternalStore = function(e, t, n) {
    return $e.current.useSyncExternalStore(e, t, n);
  };
  B.useTransition = function() {
    return $e.current.useTransition();
  };
  B.version = "18.2.0";
  _h.exports = B;
  var S = _h.exports;
  const Ut = /* @__PURE__ */ Is(S);
  /**
   * @license React
   * react-jsx-runtime.production.min.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */
  var F0 = S, j0 = Symbol.for("react.element"), D0 = Symbol.for("react.fragment"), M0 = Object.prototype.hasOwnProperty, R0 = F0.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, L0 = { key: !0, ref: !0, __self: !0, __source: !0 };
  function Lh(e, t, n) {
    var r, i = {}, o = null, s = null;
    n !== void 0 && (o = "" + n), t.key !== void 0 && (o = "" + t.key), t.ref !== void 0 && (s = t.ref);
    for (r in t)
      M0.call(t, r) && !L0.hasOwnProperty(r) && (i[r] = t[r]);
    if (e && e.defaultProps)
      for (r in t = e.defaultProps, t)
        i[r] === void 0 && (i[r] = t[r]);
    return { $$typeof: j0, type: e, key: o, ref: s, props: i, _owner: R0.current };
  }
  zs.Fragment = D0;
  zs.jsx = Lh;
  zs.jsxs = Lh;
  kh.exports = zs;
  var F = kh.exports, Cl = {}, Nh = { exports: {} }, nt = {}, Vh = { exports: {} }, $h = {};
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
          var R = j - 1 >>> 1, H = P[R];
          if (0 < i(H, O))
            P[R] = O, P[j] = H, j = R;
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
          for (var R = 0, H = P.length, Me = H >>> 1; R < Me; ) {
            var Re = 2 * (R + 1) - 1, Qe = P[Re], Ae = Re + 1, pt = P[Ae];
            if (0 > i(Qe, j))
              Ae < H && 0 > i(pt, Qe) ? (P[R] = pt, P[Ae] = j, R = Ae) : (P[R] = Qe, P[Re] = j, R = Re);
            else if (Ae < H && 0 > i(pt, j))
              P[R] = pt, P[Ae] = j, R = Ae;
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
    var l = [], u = [], c = 1, f = null, d = 3, h = !1, g = !1, v = !1, k = typeof setTimeout == "function" ? setTimeout : null, y = typeof clearTimeout == "function" ? clearTimeout : null, p = typeof setImmediate < "u" ? setImmediate : null;
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
          g = !0, Ee(E);
        else {
          var O = n(u);
          O !== null && Ie(x, O.startTime - P);
        }
    }
    function E(P, O) {
      g = !1, v && (v = !1, y(_), _ = -1), h = !0;
      var j = d;
      try {
        for (m(O), f = n(l); f !== null && (!(f.expirationTime > O) || P && !I()); ) {
          var R = f.callback;
          if (typeof R == "function") {
            f.callback = null, d = f.priorityLevel;
            var H = R(f.expirationTime <= O);
            O = e.unstable_now(), typeof H == "function" ? f.callback = H : f === n(l) && r(l), m(O);
          } else
            r(l);
          f = n(l);
        }
        if (f !== null)
          var Me = !0;
        else {
          var Re = n(u);
          Re !== null && Ie(x, Re.startTime - O), Me = !1;
        }
        return Me;
      } finally {
        f = null, d = j, h = !1;
      }
    }
    var C = !1, T = null, _ = -1, L = 5, V = -1;
    function I() {
      return !(e.unstable_now() - V < L);
    }
    function de() {
      if (T !== null) {
        var P = e.unstable_now();
        V = P;
        var O = !0;
        try {
          O = T(!0, P);
        } finally {
          O ? U() : (C = !1, T = null);
        }
      } else
        C = !1;
    }
    var U;
    if (typeof p == "function")
      U = function() {
        p(de);
      };
    else if (typeof MessageChannel < "u") {
      var G = new MessageChannel(), K = G.port2;
      G.port1.onmessage = de, U = function() {
        K.postMessage(null);
      };
    } else
      U = function() {
        k(de, 0);
      };
    function Ee(P) {
      T = P, C || (C = !0, U());
    }
    function Ie(P, O) {
      _ = k(function() {
        P(e.unstable_now());
      }, O);
    }
    e.unstable_IdlePriority = 5, e.unstable_ImmediatePriority = 1, e.unstable_LowPriority = 4, e.unstable_NormalPriority = 3, e.unstable_Profiling = null, e.unstable_UserBlockingPriority = 2, e.unstable_cancelCallback = function(P) {
      P.callback = null;
    }, e.unstable_continueExecution = function() {
      g || h || (g = !0, Ee(E));
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
          var H = -1;
          break;
        case 2:
          H = 250;
          break;
        case 5:
          H = 1073741823;
          break;
        case 4:
          H = 1e4;
          break;
        default:
          H = 5e3;
      }
      return H = j + H, P = { id: c++, callback: O, priorityLevel: P, startTime: j, expirationTime: H, sortIndex: -1 }, j > R ? (P.sortIndex = j, t(u, P), n(l) === null && P === n(u) && (v ? (y(_), _ = -1) : v = !0, Ie(x, j - R))) : (P.sortIndex = H, t(l, P), g || h || (g = !0, Ee(E))), P;
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
  })($h);
  Vh.exports = $h;
  var N0 = Vh.exports;
  /**
   * @license React
   * react-dom.production.min.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */
  var bh = S, et = N0;
  function A(e) {
    for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++)
      t += "&args[]=" + encodeURIComponent(arguments[n]);
    return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  var Ih = /* @__PURE__ */ new Set(), Mi = {};
  function rr(e, t) {
    Ir(e, t), Ir(e + "Capture", t);
  }
  function Ir(e, t) {
    for (Mi[e] = t, e = 0; e < t.length; e++)
      Ih.add(t[e]);
  }
  var Kt = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), Pl = Object.prototype.hasOwnProperty, V0 = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, _f = {}, Af = {};
  function $0(e) {
    return Pl.call(Af, e) ? !0 : Pl.call(_f, e) ? !1 : V0.test(e) ? Af[e] = !0 : (_f[e] = !0, !1);
  }
  function b0(e, t, n, r) {
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
  function I0(e, t, n, r) {
    if (t === null || typeof t > "u" || b0(e, t, n, r))
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
  function be(e, t, n, r, i, o, s) {
    this.acceptsBooleans = t === 2 || t === 3 || t === 4, this.attributeName = r, this.attributeNamespace = i, this.mustUseProperty = n, this.propertyName = e, this.type = t, this.sanitizeURL = o, this.removeEmptyString = s;
  }
  var _e = {};
  "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e) {
    _e[e] = new be(e, 0, !1, e, null, !1, !1);
  });
  [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(e) {
    var t = e[0];
    _e[t] = new be(t, 1, !1, e[1], null, !1, !1);
  });
  ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
    _e[e] = new be(e, 2, !1, e.toLowerCase(), null, !1, !1);
  });
  ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) {
    _e[e] = new be(e, 2, !1, e, null, !1, !1);
  });
  "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e) {
    _e[e] = new be(e, 3, !1, e.toLowerCase(), null, !1, !1);
  });
  ["checked", "multiple", "muted", "selected"].forEach(function(e) {
    _e[e] = new be(e, 3, !0, e, null, !1, !1);
  });
  ["capture", "download"].forEach(function(e) {
    _e[e] = new be(e, 4, !1, e, null, !1, !1);
  });
  ["cols", "rows", "size", "span"].forEach(function(e) {
    _e[e] = new be(e, 6, !1, e, null, !1, !1);
  });
  ["rowSpan", "start"].forEach(function(e) {
    _e[e] = new be(e, 5, !1, e.toLowerCase(), null, !1, !1);
  });
  var Hu = /[\-:]([a-z])/g;
  function Wu(e) {
    return e[1].toUpperCase();
  }
  "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e) {
    var t = e.replace(
      Hu,
      Wu
    );
    _e[t] = new be(t, 1, !1, e, null, !1, !1);
  });
  "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e) {
    var t = e.replace(Hu, Wu);
    _e[t] = new be(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
  });
  ["xml:base", "xml:lang", "xml:space"].forEach(function(e) {
    var t = e.replace(Hu, Wu);
    _e[t] = new be(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
  });
  ["tabIndex", "crossOrigin"].forEach(function(e) {
    _e[e] = new be(e, 1, !1, e.toLowerCase(), null, !1, !1);
  });
  _e.xlinkHref = new be("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1);
  ["src", "href", "action", "formAction"].forEach(function(e) {
    _e[e] = new be(e, 1, !1, e.toLowerCase(), null, !0, !0);
  });
  function Gu(e, t, n, r) {
    var i = _e.hasOwnProperty(t) ? _e[t] : null;
    (i !== null ? i.type !== 0 : r || !(2 < t.length) || t[0] !== "o" && t[0] !== "O" || t[1] !== "n" && t[1] !== "N") && (I0(t, n, i, r) && (n = null), r || i === null ? $0(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n)) : i.mustUseProperty ? e[i.propertyName] = n === null ? i.type === 3 ? !1 : "" : n : (t = i.attributeName, r = i.attributeNamespace, n === null ? e.removeAttribute(t) : (i = i.type, n = i === 3 || i === 4 && n === !0 ? "" : "" + n, r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
  }
  var qt = bh.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, So = Symbol.for("react.element"), gr = Symbol.for("react.portal"), vr = Symbol.for("react.fragment"), Ku = Symbol.for("react.strict_mode"), kl = Symbol.for("react.profiler"), zh = Symbol.for("react.provider"), Bh = Symbol.for("react.context"), Qu = Symbol.for("react.forward_ref"), _l = Symbol.for("react.suspense"), Al = Symbol.for("react.suspense_list"), Yu = Symbol.for("react.memo"), rn = Symbol.for("react.lazy"), Uh = Symbol.for("react.offscreen"), Of = Symbol.iterator;
  function ni(e) {
    return e === null || typeof e != "object" ? null : (e = Of && e[Of] || e["@@iterator"], typeof e == "function" ? e : null);
  }
  var ue = Object.assign, Ma;
  function pi(e) {
    if (Ma === void 0)
      try {
        throw Error();
      } catch (n) {
        var t = n.stack.trim().match(/\n( *(at )?)/);
        Ma = t && t[1] || "";
      }
    return `
` + Ma + e;
  }
  var Ra = !1;
  function La(e, t) {
    if (!e || Ra)
      return "";
    Ra = !0;
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
      Ra = !1, Error.prepareStackTrace = n;
    }
    return (e = e ? e.displayName || e.name : "") ? pi(e) : "";
  }
  function z0(e) {
    switch (e.tag) {
      case 5:
        return pi(e.type);
      case 16:
        return pi("Lazy");
      case 13:
        return pi("Suspense");
      case 19:
        return pi("SuspenseList");
      case 0:
      case 2:
      case 15:
        return e = La(e.type, !1), e;
      case 11:
        return e = La(e.type.render, !1), e;
      case 1:
        return e = La(e.type, !0), e;
      default:
        return "";
    }
  }
  function Ol(e) {
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
      case kl:
        return "Profiler";
      case Ku:
        return "StrictMode";
      case _l:
        return "Suspense";
      case Al:
        return "SuspenseList";
    }
    if (typeof e == "object")
      switch (e.$$typeof) {
        case Bh:
          return (e.displayName || "Context") + ".Consumer";
        case zh:
          return (e._context.displayName || "Context") + ".Provider";
        case Qu:
          var t = e.render;
          return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
        case Yu:
          return t = e.displayName || null, t !== null ? t : Ol(e.type) || "Memo";
        case rn:
          t = e._payload, e = e._init;
          try {
            return Ol(e(t));
          } catch {
          }
      }
    return null;
  }
  function B0(e) {
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
        return Ol(t);
      case 8:
        return t === Ku ? "StrictMode" : "Mode";
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
  function Pn(e) {
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
  function Hh(e) {
    var t = e.type;
    return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
  }
  function U0(e) {
    var t = Hh(e) ? "checked" : "value", n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t), r = "" + e[t];
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
  function wo(e) {
    e._valueTracker || (e._valueTracker = U0(e));
  }
  function Wh(e) {
    if (!e)
      return !1;
    var t = e._valueTracker;
    if (!t)
      return !0;
    var n = t.getValue(), r = "";
    return e && (r = Hh(e) ? e.checked ? "true" : "false" : e.value), e = r, e !== n ? (t.setValue(e), !0) : !1;
  }
  function is(e) {
    if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u")
      return null;
    try {
      return e.activeElement || e.body;
    } catch {
      return e.body;
    }
  }
  function Fl(e, t) {
    var n = t.checked;
    return ue({}, t, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: n ?? e._wrapperState.initialChecked });
  }
  function Ff(e, t) {
    var n = t.defaultValue == null ? "" : t.defaultValue, r = t.checked != null ? t.checked : t.defaultChecked;
    n = Pn(t.value != null ? t.value : n), e._wrapperState = { initialChecked: r, initialValue: n, controlled: t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null };
  }
  function Gh(e, t) {
    t = t.checked, t != null && Gu(e, "checked", t, !1);
  }
  function jl(e, t) {
    Gh(e, t);
    var n = Pn(t.value), r = t.type;
    if (n != null)
      r === "number" ? (n === 0 && e.value === "" || e.value != n) && (e.value = "" + n) : e.value !== "" + n && (e.value = "" + n);
    else if (r === "submit" || r === "reset") {
      e.removeAttribute("value");
      return;
    }
    t.hasOwnProperty("value") ? Dl(e, t.type, n) : t.hasOwnProperty("defaultValue") && Dl(e, t.type, Pn(t.defaultValue)), t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked);
  }
  function jf(e, t, n) {
    if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
      var r = t.type;
      if (!(r !== "submit" && r !== "reset" || t.value !== void 0 && t.value !== null))
        return;
      t = "" + e._wrapperState.initialValue, n || t === e.value || (e.value = t), e.defaultValue = t;
    }
    n = e.name, n !== "" && (e.name = ""), e.defaultChecked = !!e._wrapperState.initialChecked, n !== "" && (e.name = n);
  }
  function Dl(e, t, n) {
    (t !== "number" || is(e.ownerDocument) !== e) && (n == null ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
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
      for (n = "" + Pn(n), t = null, i = 0; i < e.length; i++) {
        if (e[i].value === n) {
          e[i].selected = !0, r && (e[i].defaultSelected = !0);
          return;
        }
        t !== null || e[i].disabled || (t = e[i]);
      }
      t !== null && (t.selected = !0);
    }
  }
  function Ml(e, t) {
    if (t.dangerouslySetInnerHTML != null)
      throw Error(A(91));
    return ue({}, t, { value: void 0, defaultValue: void 0, children: "" + e._wrapperState.initialValue });
  }
  function Df(e, t) {
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
    e._wrapperState = { initialValue: Pn(n) };
  }
  function Kh(e, t) {
    var n = Pn(t.value), r = Pn(t.defaultValue);
    n != null && (n = "" + n, n !== e.value && (e.value = n), t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)), r != null && (e.defaultValue = "" + r);
  }
  function Mf(e) {
    var t = e.textContent;
    t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
  }
  function Qh(e) {
    switch (e) {
      case "svg":
        return "http://www.w3.org/2000/svg";
      case "math":
        return "http://www.w3.org/1998/Math/MathML";
      default:
        return "http://www.w3.org/1999/xhtml";
    }
  }
  function Rl(e, t) {
    return e == null || e === "http://www.w3.org/1999/xhtml" ? Qh(t) : e === "http://www.w3.org/2000/svg" && t === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e;
  }
  var To, Yh = function(e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, n, r, i) {
      MSApp.execUnsafeLocalFunction(function() {
        return e(t, n, r, i);
      });
    } : e;
  }(function(e, t) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e)
      e.innerHTML = t;
    else {
      for (To = To || document.createElement("div"), To.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>", t = To.firstChild; e.firstChild; )
        e.removeChild(e.firstChild);
      for (; t.firstChild; )
        e.appendChild(t.firstChild);
    }
  });
  function Ri(e, t) {
    if (t) {
      var n = e.firstChild;
      if (n && n === e.lastChild && n.nodeType === 3) {
        n.nodeValue = t;
        return;
      }
    }
    e.textContent = t;
  }
  var vi = {
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
  }, H0 = ["Webkit", "ms", "Moz", "O"];
  Object.keys(vi).forEach(function(e) {
    H0.forEach(function(t) {
      t = t + e.charAt(0).toUpperCase() + e.substring(1), vi[t] = vi[e];
    });
  });
  function Xh(e, t, n) {
    return t == null || typeof t == "boolean" || t === "" ? "" : n || typeof t != "number" || t === 0 || vi.hasOwnProperty(e) && vi[e] ? ("" + t).trim() : t + "px";
  }
  function Zh(e, t) {
    e = e.style;
    for (var n in t)
      if (t.hasOwnProperty(n)) {
        var r = n.indexOf("--") === 0, i = Xh(n, t[n], r);
        n === "float" && (n = "cssFloat"), r ? e.setProperty(n, i) : e[n] = i;
      }
  }
  var W0 = ue({ menuitem: !0 }, { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 });
  function Ll(e, t) {
    if (t) {
      if (W0[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
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
  function Nl(e, t) {
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
  var Vl = null;
  function Xu(e) {
    return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
  }
  var $l = null, Lr = null, Nr = null;
  function Rf(e) {
    if (e = oo(e)) {
      if (typeof $l != "function")
        throw Error(A(280));
      var t = e.stateNode;
      t && (t = Gs(t), $l(e.stateNode, e.type, t));
    }
  }
  function qh(e) {
    Lr ? Nr ? Nr.push(e) : Nr = [e] : Lr = e;
  }
  function Jh() {
    if (Lr) {
      var e = Lr, t = Nr;
      if (Nr = Lr = null, Rf(e), t)
        for (e = 0; e < t.length; e++)
          Rf(t[e]);
    }
  }
  function em(e, t) {
    return e(t);
  }
  function tm() {
  }
  var Na = !1;
  function nm(e, t, n) {
    if (Na)
      return e(t, n);
    Na = !0;
    try {
      return em(e, t, n);
    } finally {
      Na = !1, (Lr !== null || Nr !== null) && (tm(), Jh());
    }
  }
  function Li(e, t) {
    var n = e.stateNode;
    if (n === null)
      return null;
    var r = Gs(n);
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
  var bl = !1;
  if (Kt)
    try {
      var ri = {};
      Object.defineProperty(ri, "passive", { get: function() {
        bl = !0;
      } }), window.addEventListener("test", ri, ri), window.removeEventListener("test", ri, ri);
    } catch {
      bl = !1;
    }
  function G0(e, t, n, r, i, o, s, a, l) {
    var u = Array.prototype.slice.call(arguments, 3);
    try {
      t.apply(n, u);
    } catch (c) {
      this.onError(c);
    }
  }
  var xi = !1, os = null, ss = !1, Il = null, K0 = { onError: function(e) {
    xi = !0, os = e;
  } };
  function Q0(e, t, n, r, i, o, s, a, l) {
    xi = !1, os = null, G0.apply(K0, arguments);
  }
  function Y0(e, t, n, r, i, o, s, a, l) {
    if (Q0.apply(this, arguments), xi) {
      if (xi) {
        var u = os;
        xi = !1, os = null;
      } else
        throw Error(A(198));
      ss || (ss = !0, Il = u);
    }
  }
  function ir(e) {
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
  function rm(e) {
    if (e.tag === 13) {
      var t = e.memoizedState;
      if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null)
        return t.dehydrated;
    }
    return null;
  }
  function Lf(e) {
    if (ir(e) !== e)
      throw Error(A(188));
  }
  function X0(e) {
    var t = e.alternate;
    if (!t) {
      if (t = ir(e), t === null)
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
            return Lf(i), e;
          if (o === r)
            return Lf(i), t;
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
  function im(e) {
    return e = X0(e), e !== null ? om(e) : null;
  }
  function om(e) {
    if (e.tag === 5 || e.tag === 6)
      return e;
    for (e = e.child; e !== null; ) {
      var t = om(e);
      if (t !== null)
        return t;
      e = e.sibling;
    }
    return null;
  }
  var sm = et.unstable_scheduleCallback, Nf = et.unstable_cancelCallback, Z0 = et.unstable_shouldYield, q0 = et.unstable_requestPaint, pe = et.unstable_now, J0 = et.unstable_getCurrentPriorityLevel, Zu = et.unstable_ImmediatePriority, am = et.unstable_UserBlockingPriority, as = et.unstable_NormalPriority, e1 = et.unstable_LowPriority, lm = et.unstable_IdlePriority, Bs = null, Ot = null;
  function t1(e) {
    if (Ot && typeof Ot.onCommitFiberRoot == "function")
      try {
        Ot.onCommitFiberRoot(Bs, e, void 0, (e.current.flags & 128) === 128);
      } catch {
      }
  }
  var St = Math.clz32 ? Math.clz32 : i1, n1 = Math.log, r1 = Math.LN2;
  function i1(e) {
    return e >>>= 0, e === 0 ? 32 : 31 - (n1(e) / r1 | 0) | 0;
  }
  var Eo = 64, Co = 4194304;
  function mi(e) {
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
  function ls(e, t) {
    var n = e.pendingLanes;
    if (n === 0)
      return 0;
    var r = 0, i = e.suspendedLanes, o = e.pingedLanes, s = n & 268435455;
    if (s !== 0) {
      var a = s & ~i;
      a !== 0 ? r = mi(a) : (o &= s, o !== 0 && (r = mi(o)));
    } else
      s = n & ~i, s !== 0 ? r = mi(s) : o !== 0 && (r = mi(o));
    if (r === 0)
      return 0;
    if (t !== 0 && t !== r && !(t & i) && (i = r & -r, o = t & -t, i >= o || i === 16 && (o & 4194240) !== 0))
      return t;
    if (r & 4 && (r |= n & 16), t = e.entangledLanes, t !== 0)
      for (e = e.entanglements, t &= r; 0 < t; )
        n = 31 - St(t), i = 1 << n, r |= e[n], t &= ~i;
    return r;
  }
  function o1(e, t) {
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
  function s1(e, t) {
    for (var n = e.suspendedLanes, r = e.pingedLanes, i = e.expirationTimes, o = e.pendingLanes; 0 < o; ) {
      var s = 31 - St(o), a = 1 << s, l = i[s];
      l === -1 ? (!(a & n) || a & r) && (i[s] = o1(a, t)) : l <= t && (e.expiredLanes |= a), o &= ~a;
    }
  }
  function zl(e) {
    return e = e.pendingLanes & -1073741825, e !== 0 ? e : e & 1073741824 ? 1073741824 : 0;
  }
  function um() {
    var e = Eo;
    return Eo <<= 1, !(Eo & 4194240) && (Eo = 64), e;
  }
  function Va(e) {
    for (var t = [], n = 0; 31 > n; n++)
      t.push(e);
    return t;
  }
  function ro(e, t, n) {
    e.pendingLanes |= t, t !== 536870912 && (e.suspendedLanes = 0, e.pingedLanes = 0), e = e.eventTimes, t = 31 - St(t), e[t] = n;
  }
  function a1(e, t) {
    var n = e.pendingLanes & ~t;
    e.pendingLanes = t, e.suspendedLanes = 0, e.pingedLanes = 0, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t, t = e.entanglements;
    var r = e.eventTimes;
    for (e = e.expirationTimes; 0 < n; ) {
      var i = 31 - St(n), o = 1 << i;
      t[i] = 0, r[i] = -1, e[i] = -1, n &= ~o;
    }
  }
  function qu(e, t) {
    var n = e.entangledLanes |= t;
    for (e = e.entanglements; n; ) {
      var r = 31 - St(n), i = 1 << r;
      i & t | e[r] & t && (e[r] |= t), n &= ~i;
    }
  }
  var X = 0;
  function cm(e) {
    return e &= -e, 1 < e ? 4 < e ? e & 268435455 ? 16 : 536870912 : 4 : 1;
  }
  var fm, Ju, dm, pm, hm, Bl = !1, Po = [], pn = null, hn = null, mn = null, Ni = /* @__PURE__ */ new Map(), Vi = /* @__PURE__ */ new Map(), ln = [], l1 = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
  function Vf(e, t) {
    switch (e) {
      case "focusin":
      case "focusout":
        pn = null;
        break;
      case "dragenter":
      case "dragleave":
        hn = null;
        break;
      case "mouseover":
      case "mouseout":
        mn = null;
        break;
      case "pointerover":
      case "pointerout":
        Ni.delete(t.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        Vi.delete(t.pointerId);
    }
  }
  function ii(e, t, n, r, i, o) {
    return e === null || e.nativeEvent !== o ? (e = { blockedOn: t, domEventName: n, eventSystemFlags: r, nativeEvent: o, targetContainers: [i] }, t !== null && (t = oo(t), t !== null && Ju(t)), e) : (e.eventSystemFlags |= r, t = e.targetContainers, i !== null && t.indexOf(i) === -1 && t.push(i), e);
  }
  function u1(e, t, n, r, i) {
    switch (t) {
      case "focusin":
        return pn = ii(pn, e, t, n, r, i), !0;
      case "dragenter":
        return hn = ii(hn, e, t, n, r, i), !0;
      case "mouseover":
        return mn = ii(mn, e, t, n, r, i), !0;
      case "pointerover":
        var o = i.pointerId;
        return Ni.set(o, ii(Ni.get(o) || null, e, t, n, r, i)), !0;
      case "gotpointercapture":
        return o = i.pointerId, Vi.set(o, ii(Vi.get(o) || null, e, t, n, r, i)), !0;
    }
    return !1;
  }
  function mm(e) {
    var t = Un(e.target);
    if (t !== null) {
      var n = ir(t);
      if (n !== null) {
        if (t = n.tag, t === 13) {
          if (t = rm(n), t !== null) {
            e.blockedOn = t, hm(e.priority, function() {
              dm(n);
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
  function Ho(e) {
    if (e.blockedOn !== null)
      return !1;
    for (var t = e.targetContainers; 0 < t.length; ) {
      var n = Ul(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
      if (n === null) {
        n = e.nativeEvent;
        var r = new n.constructor(n.type, n);
        Vl = r, n.target.dispatchEvent(r), Vl = null;
      } else
        return t = oo(n), t !== null && Ju(t), e.blockedOn = n, !1;
      t.shift();
    }
    return !0;
  }
  function $f(e, t, n) {
    Ho(e) && n.delete(t);
  }
  function c1() {
    Bl = !1, pn !== null && Ho(pn) && (pn = null), hn !== null && Ho(hn) && (hn = null), mn !== null && Ho(mn) && (mn = null), Ni.forEach($f), Vi.forEach($f);
  }
  function oi(e, t) {
    e.blockedOn === t && (e.blockedOn = null, Bl || (Bl = !0, et.unstable_scheduleCallback(et.unstable_NormalPriority, c1)));
  }
  function $i(e) {
    function t(i) {
      return oi(i, e);
    }
    if (0 < Po.length) {
      oi(Po[0], e);
      for (var n = 1; n < Po.length; n++) {
        var r = Po[n];
        r.blockedOn === e && (r.blockedOn = null);
      }
    }
    for (pn !== null && oi(pn, e), hn !== null && oi(hn, e), mn !== null && oi(mn, e), Ni.forEach(t), Vi.forEach(t), n = 0; n < ln.length; n++)
      r = ln[n], r.blockedOn === e && (r.blockedOn = null);
    for (; 0 < ln.length && (n = ln[0], n.blockedOn === null); )
      mm(n), n.blockedOn === null && ln.shift();
  }
  var Vr = qt.ReactCurrentBatchConfig, us = !0;
  function f1(e, t, n, r) {
    var i = X, o = Vr.transition;
    Vr.transition = null;
    try {
      X = 1, ec(e, t, n, r);
    } finally {
      X = i, Vr.transition = o;
    }
  }
  function d1(e, t, n, r) {
    var i = X, o = Vr.transition;
    Vr.transition = null;
    try {
      X = 4, ec(e, t, n, r);
    } finally {
      X = i, Vr.transition = o;
    }
  }
  function ec(e, t, n, r) {
    if (us) {
      var i = Ul(e, t, n, r);
      if (i === null)
        Ka(e, t, r, cs, n), Vf(e, r);
      else if (u1(i, e, t, n, r))
        r.stopPropagation();
      else if (Vf(e, r), t & 4 && -1 < l1.indexOf(e)) {
        for (; i !== null; ) {
          var o = oo(i);
          if (o !== null && fm(o), o = Ul(e, t, n, r), o === null && Ka(e, t, r, cs, n), o === i)
            break;
          i = o;
        }
        i !== null && r.stopPropagation();
      } else
        Ka(e, t, r, null, n);
    }
  }
  var cs = null;
  function Ul(e, t, n, r) {
    if (cs = null, e = Xu(r), e = Un(e), e !== null)
      if (t = ir(e), t === null)
        e = null;
      else if (n = t.tag, n === 13) {
        if (e = rm(t), e !== null)
          return e;
        e = null;
      } else if (n === 3) {
        if (t.stateNode.current.memoizedState.isDehydrated)
          return t.tag === 3 ? t.stateNode.containerInfo : null;
        e = null;
      } else
        t !== e && (e = null);
    return cs = e, null;
  }
  function ym(e) {
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
        switch (J0()) {
          case Zu:
            return 1;
          case am:
            return 4;
          case as:
          case e1:
            return 16;
          case lm:
            return 536870912;
          default:
            return 16;
        }
      default:
        return 16;
    }
  }
  var cn = null, tc = null, Wo = null;
  function gm() {
    if (Wo)
      return Wo;
    var e, t = tc, n = t.length, r, i = "value" in cn ? cn.value : cn.textContent, o = i.length;
    for (e = 0; e < n && t[e] === i[e]; e++)
      ;
    var s = n - e;
    for (r = 1; r <= s && t[n - r] === i[o - r]; r++)
      ;
    return Wo = i.slice(e, 1 < r ? 1 - r : void 0);
  }
  function Go(e) {
    var t = e.keyCode;
    return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0;
  }
  function ko() {
    return !0;
  }
  function bf() {
    return !1;
  }
  function rt(e) {
    function t(n, r, i, o, s) {
      this._reactName = n, this._targetInst = i, this.type = r, this.nativeEvent = o, this.target = s, this.currentTarget = null;
      for (var a in e)
        e.hasOwnProperty(a) && (n = e[a], this[a] = n ? n(o) : o[a]);
      return this.isDefaultPrevented = (o.defaultPrevented != null ? o.defaultPrevented : o.returnValue === !1) ? ko : bf, this.isPropagationStopped = bf, this;
    }
    return ue(t.prototype, { preventDefault: function() {
      this.defaultPrevented = !0;
      var n = this.nativeEvent;
      n && (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = !1), this.isDefaultPrevented = ko);
    }, stopPropagation: function() {
      var n = this.nativeEvent;
      n && (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0), this.isPropagationStopped = ko);
    }, persist: function() {
    }, isPersistent: ko }), t;
  }
  var qr = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(e) {
    return e.timeStamp || Date.now();
  }, defaultPrevented: 0, isTrusted: 0 }, nc = rt(qr), io = ue({}, qr, { view: 0, detail: 0 }), p1 = rt(io), $a, ba, si, Us = ue({}, io, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: rc, button: 0, buttons: 0, relatedTarget: function(e) {
    return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
  }, movementX: function(e) {
    return "movementX" in e ? e.movementX : (e !== si && (si && e.type === "mousemove" ? ($a = e.screenX - si.screenX, ba = e.screenY - si.screenY) : ba = $a = 0, si = e), $a);
  }, movementY: function(e) {
    return "movementY" in e ? e.movementY : ba;
  } }), If = rt(Us), h1 = ue({}, Us, { dataTransfer: 0 }), m1 = rt(h1), y1 = ue({}, io, { relatedTarget: 0 }), Ia = rt(y1), g1 = ue({}, qr, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), v1 = rt(g1), x1 = ue({}, qr, { clipboardData: function(e) {
    return "clipboardData" in e ? e.clipboardData : window.clipboardData;
  } }), S1 = rt(x1), w1 = ue({}, qr, { data: 0 }), zf = rt(w1), T1 = {
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
  }, E1 = {
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
  }, C1 = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
  function P1(e) {
    var t = this.nativeEvent;
    return t.getModifierState ? t.getModifierState(e) : (e = C1[e]) ? !!t[e] : !1;
  }
  function rc() {
    return P1;
  }
  var k1 = ue({}, io, { key: function(e) {
    if (e.key) {
      var t = T1[e.key] || e.key;
      if (t !== "Unidentified")
        return t;
    }
    return e.type === "keypress" ? (e = Go(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? E1[e.keyCode] || "Unidentified" : "";
  }, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: rc, charCode: function(e) {
    return e.type === "keypress" ? Go(e) : 0;
  }, keyCode: function(e) {
    return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
  }, which: function(e) {
    return e.type === "keypress" ? Go(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
  } }), _1 = rt(k1), A1 = ue({}, Us, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), Bf = rt(A1), O1 = ue({}, io, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: rc }), F1 = rt(O1), j1 = ue({}, qr, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), D1 = rt(j1), M1 = ue({}, Us, {
    deltaX: function(e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function(e) {
      return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), R1 = rt(M1), L1 = [9, 13, 27, 32], ic = Kt && "CompositionEvent" in window, Si = null;
  Kt && "documentMode" in document && (Si = document.documentMode);
  var N1 = Kt && "TextEvent" in window && !Si, vm = Kt && (!ic || Si && 8 < Si && 11 >= Si), Uf = String.fromCharCode(32), Hf = !1;
  function xm(e, t) {
    switch (e) {
      case "keyup":
        return L1.indexOf(t.keyCode) !== -1;
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
  function Sm(e) {
    return e = e.detail, typeof e == "object" && "data" in e ? e.data : null;
  }
  var xr = !1;
  function V1(e, t) {
    switch (e) {
      case "compositionend":
        return Sm(t);
      case "keypress":
        return t.which !== 32 ? null : (Hf = !0, Uf);
      case "textInput":
        return e = t.data, e === Uf && Hf ? null : e;
      default:
        return null;
    }
  }
  function $1(e, t) {
    if (xr)
      return e === "compositionend" || !ic && xm(e, t) ? (e = gm(), Wo = tc = cn = null, xr = !1, e) : null;
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
        return vm && t.locale !== "ko" ? null : t.data;
      default:
        return null;
    }
  }
  var b1 = { color: !0, date: !0, datetime: !0, "datetime-local": !0, email: !0, month: !0, number: !0, password: !0, range: !0, search: !0, tel: !0, text: !0, time: !0, url: !0, week: !0 };
  function Wf(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t === "input" ? !!b1[e.type] : t === "textarea";
  }
  function wm(e, t, n, r) {
    qh(r), t = fs(t, "onChange"), 0 < t.length && (n = new nc("onChange", "change", null, n, r), e.push({ event: n, listeners: t }));
  }
  var wi = null, bi = null;
  function I1(e) {
    Dm(e, 0);
  }
  function Hs(e) {
    var t = Tr(e);
    if (Wh(t))
      return e;
  }
  function z1(e, t) {
    if (e === "change")
      return t;
  }
  var Tm = !1;
  if (Kt) {
    var za;
    if (Kt) {
      var Ba = "oninput" in document;
      if (!Ba) {
        var Gf = document.createElement("div");
        Gf.setAttribute("oninput", "return;"), Ba = typeof Gf.oninput == "function";
      }
      za = Ba;
    } else
      za = !1;
    Tm = za && (!document.documentMode || 9 < document.documentMode);
  }
  function Kf() {
    wi && (wi.detachEvent("onpropertychange", Em), bi = wi = null);
  }
  function Em(e) {
    if (e.propertyName === "value" && Hs(bi)) {
      var t = [];
      wm(t, bi, e, Xu(e)), nm(I1, t);
    }
  }
  function B1(e, t, n) {
    e === "focusin" ? (Kf(), wi = t, bi = n, wi.attachEvent("onpropertychange", Em)) : e === "focusout" && Kf();
  }
  function U1(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown")
      return Hs(bi);
  }
  function H1(e, t) {
    if (e === "click")
      return Hs(t);
  }
  function W1(e, t) {
    if (e === "input" || e === "change")
      return Hs(t);
  }
  function G1(e, t) {
    return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
  }
  var Tt = typeof Object.is == "function" ? Object.is : G1;
  function Ii(e, t) {
    if (Tt(e, t))
      return !0;
    if (typeof e != "object" || e === null || typeof t != "object" || t === null)
      return !1;
    var n = Object.keys(e), r = Object.keys(t);
    if (n.length !== r.length)
      return !1;
    for (r = 0; r < n.length; r++) {
      var i = n[r];
      if (!Pl.call(t, i) || !Tt(e[i], t[i]))
        return !1;
    }
    return !0;
  }
  function Qf(e) {
    for (; e && e.firstChild; )
      e = e.firstChild;
    return e;
  }
  function Yf(e, t) {
    var n = Qf(e);
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
      n = Qf(n);
    }
  }
  function Cm(e, t) {
    return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? Cm(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1;
  }
  function Pm() {
    for (var e = window, t = is(); t instanceof e.HTMLIFrameElement; ) {
      try {
        var n = typeof t.contentWindow.location.href == "string";
      } catch {
        n = !1;
      }
      if (n)
        e = t.contentWindow;
      else
        break;
      t = is(e.document);
    }
    return t;
  }
  function oc(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
  }
  function K1(e) {
    var t = Pm(), n = e.focusedElem, r = e.selectionRange;
    if (t !== n && n && n.ownerDocument && Cm(n.ownerDocument.documentElement, n)) {
      if (r !== null && oc(n)) {
        if (t = r.start, e = r.end, e === void 0 && (e = t), "selectionStart" in n)
          n.selectionStart = t, n.selectionEnd = Math.min(e, n.value.length);
        else if (e = (t = n.ownerDocument || document) && t.defaultView || window, e.getSelection) {
          e = e.getSelection();
          var i = n.textContent.length, o = Math.min(r.start, i);
          r = r.end === void 0 ? o : Math.min(r.end, i), !e.extend && o > r && (i = r, r = o, o = i), i = Yf(n, o);
          var s = Yf(
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
  var Q1 = Kt && "documentMode" in document && 11 >= document.documentMode, Sr = null, Hl = null, Ti = null, Wl = !1;
  function Xf(e, t, n) {
    var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
    Wl || Sr == null || Sr !== is(r) || (r = Sr, "selectionStart" in r && oc(r) ? r = { start: r.selectionStart, end: r.selectionEnd } : (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection(), r = { anchorNode: r.anchorNode, anchorOffset: r.anchorOffset, focusNode: r.focusNode, focusOffset: r.focusOffset }), Ti && Ii(Ti, r) || (Ti = r, r = fs(Hl, "onSelect"), 0 < r.length && (t = new nc("onSelect", "select", null, t, n), e.push({ event: t, listeners: r }), t.target = Sr)));
  }
  function _o(e, t) {
    var n = {};
    return n[e.toLowerCase()] = t.toLowerCase(), n["Webkit" + e] = "webkit" + t, n["Moz" + e] = "moz" + t, n;
  }
  var wr = { animationend: _o("Animation", "AnimationEnd"), animationiteration: _o("Animation", "AnimationIteration"), animationstart: _o("Animation", "AnimationStart"), transitionend: _o("Transition", "TransitionEnd") }, Ua = {}, km = {};
  Kt && (km = document.createElement("div").style, "AnimationEvent" in window || (delete wr.animationend.animation, delete wr.animationiteration.animation, delete wr.animationstart.animation), "TransitionEvent" in window || delete wr.transitionend.transition);
  function Ws(e) {
    if (Ua[e])
      return Ua[e];
    if (!wr[e])
      return e;
    var t = wr[e], n;
    for (n in t)
      if (t.hasOwnProperty(n) && n in km)
        return Ua[e] = t[n];
    return e;
  }
  var _m = Ws("animationend"), Am = Ws("animationiteration"), Om = Ws("animationstart"), Fm = Ws("transitionend"), jm = /* @__PURE__ */ new Map(), Zf = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
  function Fn(e, t) {
    jm.set(e, t), rr(t, [e]);
  }
  for (var Ha = 0; Ha < Zf.length; Ha++) {
    var Wa = Zf[Ha], Y1 = Wa.toLowerCase(), X1 = Wa[0].toUpperCase() + Wa.slice(1);
    Fn(Y1, "on" + X1);
  }
  Fn(_m, "onAnimationEnd");
  Fn(Am, "onAnimationIteration");
  Fn(Om, "onAnimationStart");
  Fn("dblclick", "onDoubleClick");
  Fn("focusin", "onFocus");
  Fn("focusout", "onBlur");
  Fn(Fm, "onTransitionEnd");
  Ir("onMouseEnter", ["mouseout", "mouseover"]);
  Ir("onMouseLeave", ["mouseout", "mouseover"]);
  Ir("onPointerEnter", ["pointerout", "pointerover"]);
  Ir("onPointerLeave", ["pointerout", "pointerover"]);
  rr("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
  rr("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
  rr("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
  rr("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
  rr("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
  rr("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
  var yi = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), Z1 = new Set("cancel close invalid load scroll toggle".split(" ").concat(yi));
  function qf(e, t, n) {
    var r = e.type || "unknown-event";
    e.currentTarget = n, Y0(r, t, void 0, e), e.currentTarget = null;
  }
  function Dm(e, t) {
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
            qf(i, a, u), o = l;
          }
        else
          for (s = 0; s < r.length; s++) {
            if (a = r[s], l = a.instance, u = a.currentTarget, a = a.listener, l !== o && i.isPropagationStopped())
              break e;
            qf(i, a, u), o = l;
          }
      }
    }
    if (ss)
      throw e = Il, ss = !1, Il = null, e;
  }
  function te(e, t) {
    var n = t[Xl];
    n === void 0 && (n = t[Xl] = /* @__PURE__ */ new Set());
    var r = e + "__bubble";
    n.has(r) || (Mm(t, e, 2, !1), n.add(r));
  }
  function Ga(e, t, n) {
    var r = 0;
    t && (r |= 4), Mm(n, e, r, t);
  }
  var Ao = "_reactListening" + Math.random().toString(36).slice(2);
  function zi(e) {
    if (!e[Ao]) {
      e[Ao] = !0, Ih.forEach(function(n) {
        n !== "selectionchange" && (Z1.has(n) || Ga(n, !1, e), Ga(n, !0, e));
      });
      var t = e.nodeType === 9 ? e : e.ownerDocument;
      t === null || t[Ao] || (t[Ao] = !0, Ga("selectionchange", !1, t));
    }
  }
  function Mm(e, t, n, r) {
    switch (ym(t)) {
      case 1:
        var i = f1;
        break;
      case 4:
        i = d1;
        break;
      default:
        i = ec;
    }
    n = i.bind(null, t, n, e), i = void 0, !bl || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (i = !0), r ? i !== void 0 ? e.addEventListener(t, n, { capture: !0, passive: i }) : e.addEventListener(t, n, !0) : i !== void 0 ? e.addEventListener(t, n, { passive: i }) : e.addEventListener(t, n, !1);
  }
  function Ka(e, t, n, r, i) {
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
    nm(function() {
      var u = o, c = Xu(n), f = [];
      e: {
        var d = jm.get(e);
        if (d !== void 0) {
          var h = nc, g = e;
          switch (e) {
            case "keypress":
              if (Go(n) === 0)
                break e;
            case "keydown":
            case "keyup":
              h = _1;
              break;
            case "focusin":
              g = "focus", h = Ia;
              break;
            case "focusout":
              g = "blur", h = Ia;
              break;
            case "beforeblur":
            case "afterblur":
              h = Ia;
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
              h = If;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              h = m1;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              h = F1;
              break;
            case _m:
            case Am:
            case Om:
              h = v1;
              break;
            case Fm:
              h = D1;
              break;
            case "scroll":
              h = p1;
              break;
            case "wheel":
              h = R1;
              break;
            case "copy":
            case "cut":
            case "paste":
              h = S1;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              h = Bf;
          }
          var v = (t & 4) !== 0, k = !v && e === "scroll", y = v ? d !== null ? d + "Capture" : null : d;
          v = [];
          for (var p = u, m; p !== null; ) {
            m = p;
            var x = m.stateNode;
            if (m.tag === 5 && x !== null && (m = x, y !== null && (x = Li(p, y), x != null && v.push(Bi(p, x, m)))), k)
              break;
            p = p.return;
          }
          0 < v.length && (d = new h(d, g, null, n, c), f.push({ event: d, listeners: v }));
        }
      }
      if (!(t & 7)) {
        e: {
          if (d = e === "mouseover" || e === "pointerover", h = e === "mouseout" || e === "pointerout", d && n !== Vl && (g = n.relatedTarget || n.fromElement) && (Un(g) || g[Qt]))
            break e;
          if ((h || d) && (d = c.window === c ? c : (d = c.ownerDocument) ? d.defaultView || d.parentWindow : window, h ? (g = n.relatedTarget || n.toElement, h = u, g = g ? Un(g) : null, g !== null && (k = ir(g), g !== k || g.tag !== 5 && g.tag !== 6) && (g = null)) : (h = null, g = u), h !== g)) {
            if (v = If, x = "onMouseLeave", y = "onMouseEnter", p = "mouse", (e === "pointerout" || e === "pointerover") && (v = Bf, x = "onPointerLeave", y = "onPointerEnter", p = "pointer"), k = h == null ? d : Tr(h), m = g == null ? d : Tr(g), d = new v(x, p + "leave", h, n, c), d.target = k, d.relatedTarget = m, x = null, Un(c) === u && (v = new v(y, p + "enter", g, n, c), v.target = m, v.relatedTarget = k, x = v), k = x, h && g)
              t: {
                for (v = h, y = g, p = 0, m = v; m; m = hr(m))
                  p++;
                for (m = 0, x = y; x; x = hr(x))
                  m++;
                for (; 0 < p - m; )
                  v = hr(v), p--;
                for (; 0 < m - p; )
                  y = hr(y), m--;
                for (; p--; ) {
                  if (v === y || y !== null && v === y.alternate)
                    break t;
                  v = hr(v), y = hr(y);
                }
                v = null;
              }
            else
              v = null;
            h !== null && Jf(f, d, h, v, !1), g !== null && k !== null && Jf(f, k, g, v, !0);
          }
        }
        e: {
          if (d = u ? Tr(u) : window, h = d.nodeName && d.nodeName.toLowerCase(), h === "select" || h === "input" && d.type === "file")
            var E = z1;
          else if (Wf(d))
            if (Tm)
              E = W1;
            else {
              E = U1;
              var C = B1;
            }
          else
            (h = d.nodeName) && h.toLowerCase() === "input" && (d.type === "checkbox" || d.type === "radio") && (E = H1);
          if (E && (E = E(e, u))) {
            wm(f, E, n, c);
            break e;
          }
          C && C(e, d, u), e === "focusout" && (C = d._wrapperState) && C.controlled && d.type === "number" && Dl(d, "number", d.value);
        }
        switch (C = u ? Tr(u) : window, e) {
          case "focusin":
            (Wf(C) || C.contentEditable === "true") && (Sr = C, Hl = u, Ti = null);
            break;
          case "focusout":
            Ti = Hl = Sr = null;
            break;
          case "mousedown":
            Wl = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            Wl = !1, Xf(f, n, c);
            break;
          case "selectionchange":
            if (Q1)
              break;
          case "keydown":
          case "keyup":
            Xf(f, n, c);
        }
        var T;
        if (ic)
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
          xr ? xm(e, n) && (_ = "onCompositionEnd") : e === "keydown" && n.keyCode === 229 && (_ = "onCompositionStart");
        _ && (vm && n.locale !== "ko" && (xr || _ !== "onCompositionStart" ? _ === "onCompositionEnd" && xr && (T = gm()) : (cn = c, tc = "value" in cn ? cn.value : cn.textContent, xr = !0)), C = fs(u, _), 0 < C.length && (_ = new zf(_, e, null, n, c), f.push({ event: _, listeners: C }), T ? _.data = T : (T = Sm(n), T !== null && (_.data = T)))), (T = N1 ? V1(e, n) : $1(e, n)) && (u = fs(u, "onBeforeInput"), 0 < u.length && (c = new zf("onBeforeInput", "beforeinput", null, n, c), f.push({ event: c, listeners: u }), c.data = T));
      }
      Dm(f, t);
    });
  }
  function Bi(e, t, n) {
    return { instance: e, listener: t, currentTarget: n };
  }
  function fs(e, t) {
    for (var n = t + "Capture", r = []; e !== null; ) {
      var i = e, o = i.stateNode;
      i.tag === 5 && o !== null && (i = o, o = Li(e, n), o != null && r.unshift(Bi(e, o, i)), o = Li(e, t), o != null && r.push(Bi(e, o, i))), e = e.return;
    }
    return r;
  }
  function hr(e) {
    if (e === null)
      return null;
    do
      e = e.return;
    while (e && e.tag !== 5);
    return e || null;
  }
  function Jf(e, t, n, r, i) {
    for (var o = t._reactName, s = []; n !== null && n !== r; ) {
      var a = n, l = a.alternate, u = a.stateNode;
      if (l !== null && l === r)
        break;
      a.tag === 5 && u !== null && (a = u, i ? (l = Li(n, o), l != null && s.unshift(Bi(n, l, a))) : i || (l = Li(n, o), l != null && s.push(Bi(n, l, a)))), n = n.return;
    }
    s.length !== 0 && e.push({ event: t, listeners: s });
  }
  var q1 = /\r\n?/g, J1 = /\u0000|\uFFFD/g;
  function ed(e) {
    return (typeof e == "string" ? e : "" + e).replace(q1, `
`).replace(J1, "");
  }
  function Oo(e, t, n) {
    if (t = ed(t), ed(e) !== t && n)
      throw Error(A(425));
  }
  function ds() {
  }
  var Gl = null, Kl = null;
  function Ql(e, t) {
    return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
  }
  var Yl = typeof setTimeout == "function" ? setTimeout : void 0, ex = typeof clearTimeout == "function" ? clearTimeout : void 0, td = typeof Promise == "function" ? Promise : void 0, tx = typeof queueMicrotask == "function" ? queueMicrotask : typeof td < "u" ? function(e) {
    return td.resolve(null).then(e).catch(nx);
  } : Yl;
  function nx(e) {
    setTimeout(function() {
      throw e;
    });
  }
  function Qa(e, t) {
    var n = t, r = 0;
    do {
      var i = n.nextSibling;
      if (e.removeChild(n), i && i.nodeType === 8)
        if (n = i.data, n === "/$") {
          if (r === 0) {
            e.removeChild(i), $i(t);
            return;
          }
          r--;
        } else
          n !== "$" && n !== "$?" && n !== "$!" || r++;
      n = i;
    } while (n);
    $i(t);
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
  function nd(e) {
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
  var Jr = Math.random().toString(36).slice(2), At = "__reactFiber$" + Jr, Ui = "__reactProps$" + Jr, Qt = "__reactContainer$" + Jr, Xl = "__reactEvents$" + Jr, rx = "__reactListeners$" + Jr, ix = "__reactHandles$" + Jr;
  function Un(e) {
    var t = e[At];
    if (t)
      return t;
    for (var n = e.parentNode; n; ) {
      if (t = n[Qt] || n[At]) {
        if (n = t.alternate, t.child !== null || n !== null && n.child !== null)
          for (e = nd(e); e !== null; ) {
            if (n = e[At])
              return n;
            e = nd(e);
          }
        return t;
      }
      e = n, n = e.parentNode;
    }
    return null;
  }
  function oo(e) {
    return e = e[At] || e[Qt], !e || e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3 ? null : e;
  }
  function Tr(e) {
    if (e.tag === 5 || e.tag === 6)
      return e.stateNode;
    throw Error(A(33));
  }
  function Gs(e) {
    return e[Ui] || null;
  }
  var Zl = [], Er = -1;
  function jn(e) {
    return { current: e };
  }
  function re(e) {
    0 > Er || (e.current = Zl[Er], Zl[Er] = null, Er--);
  }
  function J(e, t) {
    Er++, Zl[Er] = e.current, e.current = t;
  }
  var kn = {}, De = jn(kn), He = jn(!1), Xn = kn;
  function zr(e, t) {
    var n = e.type.contextTypes;
    if (!n)
      return kn;
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
  function ps() {
    re(He), re(De);
  }
  function rd(e, t, n) {
    if (De.current !== kn)
      throw Error(A(168));
    J(De, t), J(He, n);
  }
  function Rm(e, t, n) {
    var r = e.stateNode;
    if (t = t.childContextTypes, typeof r.getChildContext != "function")
      return n;
    r = r.getChildContext();
    for (var i in r)
      if (!(i in t))
        throw Error(A(108, B0(e) || "Unknown", i));
    return ue({}, n, r);
  }
  function hs(e) {
    return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || kn, Xn = De.current, J(De, e), J(He, He.current), !0;
  }
  function id(e, t, n) {
    var r = e.stateNode;
    if (!r)
      throw Error(A(169));
    n ? (e = Rm(e, t, Xn), r.__reactInternalMemoizedMergedChildContext = e, re(He), re(De), J(De, e)) : re(He), J(He, n);
  }
  var $t = null, Ks = !1, Ya = !1;
  function Lm(e) {
    $t === null ? $t = [e] : $t.push(e);
  }
  function ox(e) {
    Ks = !0, Lm(e);
  }
  function Dn() {
    if (!Ya && $t !== null) {
      Ya = !0;
      var e = 0, t = X;
      try {
        var n = $t;
        for (X = 1; e < n.length; e++) {
          var r = n[e];
          do
            r = r(!0);
          while (r !== null);
        }
        $t = null, Ks = !1;
      } catch (i) {
        throw $t !== null && ($t = $t.slice(e + 1)), sm(Zu, Dn), i;
      } finally {
        X = t, Ya = !1;
      }
    }
    return null;
  }
  var Cr = [], Pr = 0, ms = null, ys = 0, at = [], lt = 0, Zn = null, bt = 1, It = "";
  function $n(e, t) {
    Cr[Pr++] = ys, Cr[Pr++] = ms, ms = e, ys = t;
  }
  function Nm(e, t, n) {
    at[lt++] = bt, at[lt++] = It, at[lt++] = Zn, Zn = e;
    var r = bt;
    e = It;
    var i = 32 - St(r) - 1;
    r &= ~(1 << i), n += 1;
    var o = 32 - St(t) + i;
    if (30 < o) {
      var s = i - i % 5;
      o = (r & (1 << s) - 1).toString(32), r >>= s, i -= s, bt = 1 << 32 - St(t) + i | n << i | r, It = o + e;
    } else
      bt = 1 << o | n << i | r, It = e;
  }
  function sc(e) {
    e.return !== null && ($n(e, 1), Nm(e, 1, 0));
  }
  function ac(e) {
    for (; e === ms; )
      ms = Cr[--Pr], Cr[Pr] = null, ys = Cr[--Pr], Cr[Pr] = null;
    for (; e === Zn; )
      Zn = at[--lt], at[lt] = null, It = at[--lt], at[lt] = null, bt = at[--lt], at[lt] = null;
  }
  var Je = null, Xe = null, oe = !1, xt = null;
  function Vm(e, t) {
    var n = ut(5, null, null, 0);
    n.elementType = "DELETED", n.stateNode = t, n.return = e, t = e.deletions, t === null ? (e.deletions = [n], e.flags |= 16) : t.push(n);
  }
  function od(e, t) {
    switch (e.tag) {
      case 5:
        var n = e.type;
        return t = t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t, t !== null ? (e.stateNode = t, Je = e, Xe = yn(t.firstChild), !0) : !1;
      case 6:
        return t = e.pendingProps === "" || t.nodeType !== 3 ? null : t, t !== null ? (e.stateNode = t, Je = e, Xe = null, !0) : !1;
      case 13:
        return t = t.nodeType !== 8 ? null : t, t !== null ? (n = Zn !== null ? { id: bt, overflow: It } : null, e.memoizedState = { dehydrated: t, treeContext: n, retryLane: 1073741824 }, n = ut(18, null, null, 0), n.stateNode = t, n.return = e, e.child = n, Je = e, Xe = null, !0) : !1;
      default:
        return !1;
    }
  }
  function ql(e) {
    return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
  }
  function Jl(e) {
    if (oe) {
      var t = Xe;
      if (t) {
        var n = t;
        if (!od(e, t)) {
          if (ql(e))
            throw Error(A(418));
          t = yn(n.nextSibling);
          var r = Je;
          t && od(e, t) ? Vm(r, n) : (e.flags = e.flags & -4097 | 2, oe = !1, Je = e);
        }
      } else {
        if (ql(e))
          throw Error(A(418));
        e.flags = e.flags & -4097 | 2, oe = !1, Je = e;
      }
    }
  }
  function sd(e) {
    for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
      e = e.return;
    Je = e;
  }
  function Fo(e) {
    if (e !== Je)
      return !1;
    if (!oe)
      return sd(e), oe = !0, !1;
    var t;
    if ((t = e.tag !== 3) && !(t = e.tag !== 5) && (t = e.type, t = t !== "head" && t !== "body" && !Ql(e.type, e.memoizedProps)), t && (t = Xe)) {
      if (ql(e))
        throw $m(), Error(A(418));
      for (; t; )
        Vm(e, t), t = yn(t.nextSibling);
    }
    if (sd(e), e.tag === 13) {
      if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e)
        throw Error(A(317));
      e: {
        for (e = e.nextSibling, t = 0; e; ) {
          if (e.nodeType === 8) {
            var n = e.data;
            if (n === "/$") {
              if (t === 0) {
                Xe = yn(e.nextSibling);
                break e;
              }
              t--;
            } else
              n !== "$" && n !== "$!" && n !== "$?" || t++;
          }
          e = e.nextSibling;
        }
        Xe = null;
      }
    } else
      Xe = Je ? yn(e.stateNode.nextSibling) : null;
    return !0;
  }
  function $m() {
    for (var e = Xe; e; )
      e = yn(e.nextSibling);
  }
  function Br() {
    Xe = Je = null, oe = !1;
  }
  function lc(e) {
    xt === null ? xt = [e] : xt.push(e);
  }
  var sx = qt.ReactCurrentBatchConfig;
  function gt(e, t) {
    if (e && e.defaultProps) {
      t = ue({}, t), e = e.defaultProps;
      for (var n in e)
        t[n] === void 0 && (t[n] = e[n]);
      return t;
    }
    return t;
  }
  var gs = jn(null), vs = null, kr = null, uc = null;
  function cc() {
    uc = kr = vs = null;
  }
  function fc(e) {
    var t = gs.current;
    re(gs), e._currentValue = t;
  }
  function eu(e, t, n) {
    for (; e !== null; ) {
      var r = e.alternate;
      if ((e.childLanes & t) !== t ? (e.childLanes |= t, r !== null && (r.childLanes |= t)) : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t), e === n)
        break;
      e = e.return;
    }
  }
  function $r(e, t) {
    vs = e, uc = kr = null, e = e.dependencies, e !== null && e.firstContext !== null && (e.lanes & t && (Ue = !0), e.firstContext = null);
  }
  function ft(e) {
    var t = e._currentValue;
    if (uc !== e)
      if (e = { context: e, memoizedValue: t, next: null }, kr === null) {
        if (vs === null)
          throw Error(A(308));
        kr = e, vs.dependencies = { lanes: 0, firstContext: e };
      } else
        kr = kr.next = e;
    return t;
  }
  var Hn = null;
  function dc(e) {
    Hn === null ? Hn = [e] : Hn.push(e);
  }
  function bm(e, t, n, r) {
    var i = t.interleaved;
    return i === null ? (n.next = n, dc(t)) : (n.next = i.next, i.next = n), t.interleaved = n, Yt(e, r);
  }
  function Yt(e, t) {
    e.lanes |= t;
    var n = e.alternate;
    for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; )
      e.childLanes |= t, n = e.alternate, n !== null && (n.childLanes |= t), n = e, e = e.return;
    return n.tag === 3 ? n.stateNode : null;
  }
  var on = !1;
  function pc(e) {
    e.updateQueue = { baseState: e.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
  }
  function Im(e, t) {
    e = e.updateQueue, t.updateQueue === e && (t.updateQueue = { baseState: e.baseState, firstBaseUpdate: e.firstBaseUpdate, lastBaseUpdate: e.lastBaseUpdate, shared: e.shared, effects: e.effects });
  }
  function Ht(e, t) {
    return { eventTime: e, lane: t, tag: 0, payload: null, callback: null, next: null };
  }
  function gn(e, t, n) {
    var r = e.updateQueue;
    if (r === null)
      return null;
    if (r = r.shared, W & 2) {
      var i = r.pending;
      return i === null ? t.next = t : (t.next = i.next, i.next = t), r.pending = t, Yt(e, n);
    }
    return i = r.interleaved, i === null ? (t.next = t, dc(r)) : (t.next = i.next, i.next = t), r.interleaved = t, Yt(e, n);
  }
  function Ko(e, t, n) {
    if (t = t.updateQueue, t !== null && (t = t.shared, (n & 4194240) !== 0)) {
      var r = t.lanes;
      r &= e.pendingLanes, n |= r, t.lanes = n, qu(e, n);
    }
  }
  function ad(e, t) {
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
  function xs(e, t, n, r) {
    var i = e.updateQueue;
    on = !1;
    var o = i.firstBaseUpdate, s = i.lastBaseUpdate, a = i.shared.pending;
    if (a !== null) {
      i.shared.pending = null;
      var l = a, u = l.next;
      l.next = null, s === null ? o = u : s.next = u, s = l;
      var c = e.alternate;
      c !== null && (c = c.updateQueue, a = c.lastBaseUpdate, a !== s && (a === null ? c.firstBaseUpdate = u : a.next = u, c.lastBaseUpdate = l));
    }
    if (o !== null) {
      var f = i.baseState;
      s = 0, c = u = l = null, a = o;
      do {
        var d = a.lane, h = a.eventTime;
        if ((r & d) === d) {
          c !== null && (c = c.next = {
            eventTime: h,
            lane: 0,
            tag: a.tag,
            payload: a.payload,
            callback: a.callback,
            next: null
          });
          e: {
            var g = e, v = a;
            switch (d = t, h = n, v.tag) {
              case 1:
                if (g = v.payload, typeof g == "function") {
                  f = g.call(h, f, d);
                  break e;
                }
                f = g;
                break e;
              case 3:
                g.flags = g.flags & -65537 | 128;
              case 0:
                if (g = v.payload, d = typeof g == "function" ? g.call(h, f, d) : g, d == null)
                  break e;
                f = ue({}, f, d);
                break e;
              case 2:
                on = !0;
            }
          }
          a.callback !== null && a.lane !== 0 && (e.flags |= 64, d = i.effects, d === null ? i.effects = [a] : d.push(a));
        } else
          h = { eventTime: h, lane: d, tag: a.tag, payload: a.payload, callback: a.callback, next: null }, c === null ? (u = c = h, l = f) : c = c.next = h, s |= d;
        if (a = a.next, a === null) {
          if (a = i.shared.pending, a === null)
            break;
          d = a, a = d.next, d.next = null, i.lastBaseUpdate = d, i.shared.pending = null;
        }
      } while (1);
      if (c === null && (l = f), i.baseState = l, i.firstBaseUpdate = u, i.lastBaseUpdate = c, t = i.shared.interleaved, t !== null) {
        i = t;
        do
          s |= i.lane, i = i.next;
        while (i !== t);
      } else
        o === null && (i.shared.lanes = 0);
      Jn |= s, e.lanes = s, e.memoizedState = f;
    }
  }
  function ld(e, t, n) {
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
  var zm = new bh.Component().refs;
  function tu(e, t, n, r) {
    t = e.memoizedState, n = n(r, t), n = n == null ? t : ue({}, t, n), e.memoizedState = n, e.lanes === 0 && (e.updateQueue.baseState = n);
  }
  var Qs = { isMounted: function(e) {
    return (e = e._reactInternals) ? ir(e) === e : !1;
  }, enqueueSetState: function(e, t, n) {
    e = e._reactInternals;
    var r = Ve(), i = xn(e), o = Ht(r, i);
    o.payload = t, n != null && (o.callback = n), t = gn(e, o, i), t !== null && (wt(t, e, i, r), Ko(t, e, i));
  }, enqueueReplaceState: function(e, t, n) {
    e = e._reactInternals;
    var r = Ve(), i = xn(e), o = Ht(r, i);
    o.tag = 1, o.payload = t, n != null && (o.callback = n), t = gn(e, o, i), t !== null && (wt(t, e, i, r), Ko(t, e, i));
  }, enqueueForceUpdate: function(e, t) {
    e = e._reactInternals;
    var n = Ve(), r = xn(e), i = Ht(n, r);
    i.tag = 2, t != null && (i.callback = t), t = gn(e, i, r), t !== null && (wt(t, e, r, n), Ko(t, e, r));
  } };
  function ud(e, t, n, r, i, o, s) {
    return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(r, o, s) : t.prototype && t.prototype.isPureReactComponent ? !Ii(n, r) || !Ii(i, o) : !0;
  }
  function Bm(e, t, n) {
    var r = !1, i = kn, o = t.contextType;
    return typeof o == "object" && o !== null ? o = ft(o) : (i = We(t) ? Xn : De.current, r = t.contextTypes, o = (r = r != null) ? zr(e, i) : kn), t = new t(n, o), e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null, t.updater = Qs, e.stateNode = t, t._reactInternals = e, r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = i, e.__reactInternalMemoizedMaskedChildContext = o), t;
  }
  function cd(e, t, n, r) {
    e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, r), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, r), t.state !== e && Qs.enqueueReplaceState(t, t.state, null);
  }
  function nu(e, t, n, r) {
    var i = e.stateNode;
    i.props = n, i.state = e.memoizedState, i.refs = zm, pc(e);
    var o = t.contextType;
    typeof o == "object" && o !== null ? i.context = ft(o) : (o = We(t) ? Xn : De.current, i.context = zr(e, o)), i.state = e.memoizedState, o = t.getDerivedStateFromProps, typeof o == "function" && (tu(e, t, o, n), i.state = e.memoizedState), typeof t.getDerivedStateFromProps == "function" || typeof i.getSnapshotBeforeUpdate == "function" || typeof i.UNSAFE_componentWillMount != "function" && typeof i.componentWillMount != "function" || (t = i.state, typeof i.componentWillMount == "function" && i.componentWillMount(), typeof i.UNSAFE_componentWillMount == "function" && i.UNSAFE_componentWillMount(), t !== i.state && Qs.enqueueReplaceState(i, i.state, null), xs(e, n, i, r), i.state = e.memoizedState), typeof i.componentDidMount == "function" && (e.flags |= 4194308);
  }
  function ai(e, t, n) {
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
          a === zm && (a = i.refs = {}), s === null ? delete a[o] : a[o] = s;
        }, t._stringRef = o, t);
      }
      if (typeof e != "string")
        throw Error(A(284));
      if (!n._owner)
        throw Error(A(290, e));
    }
    return e;
  }
  function jo(e, t) {
    throw e = Object.prototype.toString.call(t), Error(A(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e));
  }
  function fd(e) {
    var t = e._init;
    return t(e._payload);
  }
  function Um(e) {
    function t(y, p) {
      if (e) {
        var m = y.deletions;
        m === null ? (y.deletions = [p], y.flags |= 16) : m.push(p);
      }
    }
    function n(y, p) {
      if (!e)
        return null;
      for (; p !== null; )
        t(y, p), p = p.sibling;
      return null;
    }
    function r(y, p) {
      for (y = /* @__PURE__ */ new Map(); p !== null; )
        p.key !== null ? y.set(p.key, p) : y.set(p.index, p), p = p.sibling;
      return y;
    }
    function i(y, p) {
      return y = Sn(y, p), y.index = 0, y.sibling = null, y;
    }
    function o(y, p, m) {
      return y.index = m, e ? (m = y.alternate, m !== null ? (m = m.index, m < p ? (y.flags |= 2, p) : m) : (y.flags |= 2, p)) : (y.flags |= 1048576, p);
    }
    function s(y) {
      return e && y.alternate === null && (y.flags |= 2), y;
    }
    function a(y, p, m, x) {
      return p === null || p.tag !== 6 ? (p = nl(m, y.mode, x), p.return = y, p) : (p = i(p, m), p.return = y, p);
    }
    function l(y, p, m, x) {
      var E = m.type;
      return E === vr ? c(y, p, m.props.children, x, m.key) : p !== null && (p.elementType === E || typeof E == "object" && E !== null && E.$$typeof === rn && fd(E) === p.type) ? (x = i(p, m.props), x.ref = ai(y, p, m), x.return = y, x) : (x = Jo(m.type, m.key, m.props, null, y.mode, x), x.ref = ai(y, p, m), x.return = y, x);
    }
    function u(y, p, m, x) {
      return p === null || p.tag !== 4 || p.stateNode.containerInfo !== m.containerInfo || p.stateNode.implementation !== m.implementation ? (p = rl(m, y.mode, x), p.return = y, p) : (p = i(p, m.children || []), p.return = y, p);
    }
    function c(y, p, m, x, E) {
      return p === null || p.tag !== 7 ? (p = Qn(m, y.mode, x, E), p.return = y, p) : (p = i(p, m), p.return = y, p);
    }
    function f(y, p, m) {
      if (typeof p == "string" && p !== "" || typeof p == "number")
        return p = nl("" + p, y.mode, m), p.return = y, p;
      if (typeof p == "object" && p !== null) {
        switch (p.$$typeof) {
          case So:
            return m = Jo(p.type, p.key, p.props, null, y.mode, m), m.ref = ai(y, null, p), m.return = y, m;
          case gr:
            return p = rl(p, y.mode, m), p.return = y, p;
          case rn:
            var x = p._init;
            return f(y, x(p._payload), m);
        }
        if (hi(p) || ni(p))
          return p = Qn(p, y.mode, m, null), p.return = y, p;
        jo(y, p);
      }
      return null;
    }
    function d(y, p, m, x) {
      var E = p !== null ? p.key : null;
      if (typeof m == "string" && m !== "" || typeof m == "number")
        return E !== null ? null : a(y, p, "" + m, x);
      if (typeof m == "object" && m !== null) {
        switch (m.$$typeof) {
          case So:
            return m.key === E ? l(y, p, m, x) : null;
          case gr:
            return m.key === E ? u(y, p, m, x) : null;
          case rn:
            return E = m._init, d(
              y,
              p,
              E(m._payload),
              x
            );
        }
        if (hi(m) || ni(m))
          return E !== null ? null : c(y, p, m, x, null);
        jo(y, m);
      }
      return null;
    }
    function h(y, p, m, x, E) {
      if (typeof x == "string" && x !== "" || typeof x == "number")
        return y = y.get(m) || null, a(p, y, "" + x, E);
      if (typeof x == "object" && x !== null) {
        switch (x.$$typeof) {
          case So:
            return y = y.get(x.key === null ? m : x.key) || null, l(p, y, x, E);
          case gr:
            return y = y.get(x.key === null ? m : x.key) || null, u(p, y, x, E);
          case rn:
            var C = x._init;
            return h(y, p, m, C(x._payload), E);
        }
        if (hi(x) || ni(x))
          return y = y.get(m) || null, c(p, y, x, E, null);
        jo(p, x);
      }
      return null;
    }
    function g(y, p, m, x) {
      for (var E = null, C = null, T = p, _ = p = 0, L = null; T !== null && _ < m.length; _++) {
        T.index > _ ? (L = T, T = null) : L = T.sibling;
        var V = d(y, T, m[_], x);
        if (V === null) {
          T === null && (T = L);
          break;
        }
        e && T && V.alternate === null && t(y, T), p = o(V, p, _), C === null ? E = V : C.sibling = V, C = V, T = L;
      }
      if (_ === m.length)
        return n(y, T), oe && $n(y, _), E;
      if (T === null) {
        for (; _ < m.length; _++)
          T = f(y, m[_], x), T !== null && (p = o(T, p, _), C === null ? E = T : C.sibling = T, C = T);
        return oe && $n(y, _), E;
      }
      for (T = r(y, T); _ < m.length; _++)
        L = h(T, y, _, m[_], x), L !== null && (e && L.alternate !== null && T.delete(L.key === null ? _ : L.key), p = o(L, p, _), C === null ? E = L : C.sibling = L, C = L);
      return e && T.forEach(function(I) {
        return t(y, I);
      }), oe && $n(y, _), E;
    }
    function v(y, p, m, x) {
      var E = ni(m);
      if (typeof E != "function")
        throw Error(A(150));
      if (m = E.call(m), m == null)
        throw Error(A(151));
      for (var C = E = null, T = p, _ = p = 0, L = null, V = m.next(); T !== null && !V.done; _++, V = m.next()) {
        T.index > _ ? (L = T, T = null) : L = T.sibling;
        var I = d(y, T, V.value, x);
        if (I === null) {
          T === null && (T = L);
          break;
        }
        e && T && I.alternate === null && t(y, T), p = o(I, p, _), C === null ? E = I : C.sibling = I, C = I, T = L;
      }
      if (V.done)
        return n(
          y,
          T
        ), oe && $n(y, _), E;
      if (T === null) {
        for (; !V.done; _++, V = m.next())
          V = f(y, V.value, x), V !== null && (p = o(V, p, _), C === null ? E = V : C.sibling = V, C = V);
        return oe && $n(y, _), E;
      }
      for (T = r(y, T); !V.done; _++, V = m.next())
        V = h(T, y, _, V.value, x), V !== null && (e && V.alternate !== null && T.delete(V.key === null ? _ : V.key), p = o(V, p, _), C === null ? E = V : C.sibling = V, C = V);
      return e && T.forEach(function(de) {
        return t(y, de);
      }), oe && $n(y, _), E;
    }
    function k(y, p, m, x) {
      if (typeof m == "object" && m !== null && m.type === vr && m.key === null && (m = m.props.children), typeof m == "object" && m !== null) {
        switch (m.$$typeof) {
          case So:
            e: {
              for (var E = m.key, C = p; C !== null; ) {
                if (C.key === E) {
                  if (E = m.type, E === vr) {
                    if (C.tag === 7) {
                      n(y, C.sibling), p = i(C, m.props.children), p.return = y, y = p;
                      break e;
                    }
                  } else if (C.elementType === E || typeof E == "object" && E !== null && E.$$typeof === rn && fd(E) === C.type) {
                    n(y, C.sibling), p = i(C, m.props), p.ref = ai(y, C, m), p.return = y, y = p;
                    break e;
                  }
                  n(y, C);
                  break;
                } else
                  t(y, C);
                C = C.sibling;
              }
              m.type === vr ? (p = Qn(m.props.children, y.mode, x, m.key), p.return = y, y = p) : (x = Jo(m.type, m.key, m.props, null, y.mode, x), x.ref = ai(y, p, m), x.return = y, y = x);
            }
            return s(y);
          case gr:
            e: {
              for (C = m.key; p !== null; ) {
                if (p.key === C)
                  if (p.tag === 4 && p.stateNode.containerInfo === m.containerInfo && p.stateNode.implementation === m.implementation) {
                    n(y, p.sibling), p = i(p, m.children || []), p.return = y, y = p;
                    break e;
                  } else {
                    n(y, p);
                    break;
                  }
                else
                  t(y, p);
                p = p.sibling;
              }
              p = rl(m, y.mode, x), p.return = y, y = p;
            }
            return s(y);
          case rn:
            return C = m._init, k(y, p, C(m._payload), x);
        }
        if (hi(m))
          return g(y, p, m, x);
        if (ni(m))
          return v(y, p, m, x);
        jo(y, m);
      }
      return typeof m == "string" && m !== "" || typeof m == "number" ? (m = "" + m, p !== null && p.tag === 6 ? (n(y, p.sibling), p = i(p, m), p.return = y, y = p) : (n(y, p), p = nl(m, y.mode, x), p.return = y, y = p), s(y)) : n(y, p);
    }
    return k;
  }
  var Ur = Um(!0), Hm = Um(!1), so = {}, Ft = jn(so), Hi = jn(so), Wi = jn(so);
  function Wn(e) {
    if (e === so)
      throw Error(A(174));
    return e;
  }
  function hc(e, t) {
    switch (J(Wi, t), J(Hi, e), J(Ft, so), e = t.nodeType, e) {
      case 9:
      case 11:
        t = (t = t.documentElement) ? t.namespaceURI : Rl(null, "");
        break;
      default:
        e = e === 8 ? t.parentNode : t, t = e.namespaceURI || null, e = e.tagName, t = Rl(t, e);
    }
    re(Ft), J(Ft, t);
  }
  function Hr() {
    re(Ft), re(Hi), re(Wi);
  }
  function Wm(e) {
    Wn(Wi.current);
    var t = Wn(Ft.current), n = Rl(t, e.type);
    t !== n && (J(Hi, e), J(Ft, n));
  }
  function mc(e) {
    Hi.current === e && (re(Ft), re(Hi));
  }
  var se = jn(0);
  function Ss(e) {
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
  var Xa = [];
  function yc() {
    for (var e = 0; e < Xa.length; e++)
      Xa[e]._workInProgressVersionPrimary = null;
    Xa.length = 0;
  }
  var Qo = qt.ReactCurrentDispatcher, Za = qt.ReactCurrentBatchConfig, qn = 0, le = null, ye = null, Se = null, ws = !1, Ei = !1, Gi = 0, ax = 0;
  function Oe() {
    throw Error(A(321));
  }
  function gc(e, t) {
    if (t === null)
      return !1;
    for (var n = 0; n < t.length && n < e.length; n++)
      if (!Tt(e[n], t[n]))
        return !1;
    return !0;
  }
  function vc(e, t, n, r, i, o) {
    if (qn = o, le = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, Qo.current = e === null || e.memoizedState === null ? fx : dx, e = n(r, i), Ei) {
      o = 0;
      do {
        if (Ei = !1, Gi = 0, 25 <= o)
          throw Error(A(301));
        o += 1, Se = ye = null, t.updateQueue = null, Qo.current = px, e = n(r, i);
      } while (Ei);
    }
    if (Qo.current = Ts, t = ye !== null && ye.next !== null, qn = 0, Se = ye = le = null, ws = !1, t)
      throw Error(A(300));
    return e;
  }
  function xc() {
    var e = Gi !== 0;
    return Gi = 0, e;
  }
  function Pt() {
    var e = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
    return Se === null ? le.memoizedState = Se = e : Se = Se.next = e, Se;
  }
  function dt() {
    if (ye === null) {
      var e = le.alternate;
      e = e !== null ? e.memoizedState : null;
    } else
      e = ye.next;
    var t = Se === null ? le.memoizedState : Se.next;
    if (t !== null)
      Se = t, ye = e;
    else {
      if (e === null)
        throw Error(A(310));
      ye = e, e = { memoizedState: ye.memoizedState, baseState: ye.baseState, baseQueue: ye.baseQueue, queue: ye.queue, next: null }, Se === null ? le.memoizedState = Se = e : Se = Se.next = e;
    }
    return Se;
  }
  function Ki(e, t) {
    return typeof t == "function" ? t(e) : t;
  }
  function qa(e) {
    var t = dt(), n = t.queue;
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
        var c = u.lane;
        if ((qn & c) === c)
          l !== null && (l = l.next = { lane: 0, action: u.action, hasEagerState: u.hasEagerState, eagerState: u.eagerState, next: null }), r = u.hasEagerState ? u.eagerState : e(r, u.action);
        else {
          var f = {
            lane: c,
            action: u.action,
            hasEagerState: u.hasEagerState,
            eagerState: u.eagerState,
            next: null
          };
          l === null ? (a = l = f, s = r) : l = l.next = f, le.lanes |= c, Jn |= c;
        }
        u = u.next;
      } while (u !== null && u !== o);
      l === null ? s = r : l.next = a, Tt(r, t.memoizedState) || (Ue = !0), t.memoizedState = r, t.baseState = s, t.baseQueue = l, n.lastRenderedState = r;
    }
    if (e = n.interleaved, e !== null) {
      i = e;
      do
        o = i.lane, le.lanes |= o, Jn |= o, i = i.next;
      while (i !== e);
    } else
      i === null && (n.lanes = 0);
    return [t.memoizedState, n.dispatch];
  }
  function Ja(e) {
    var t = dt(), n = t.queue;
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
      Tt(o, t.memoizedState) || (Ue = !0), t.memoizedState = o, t.baseQueue === null && (t.baseState = o), n.lastRenderedState = o;
    }
    return [o, r];
  }
  function Gm() {
  }
  function Km(e, t) {
    var n = le, r = dt(), i = t(), o = !Tt(r.memoizedState, i);
    if (o && (r.memoizedState = i, Ue = !0), r = r.queue, Sc(Xm.bind(null, n, r, e), [e]), r.getSnapshot !== t || o || Se !== null && Se.memoizedState.tag & 1) {
      if (n.flags |= 2048, Qi(9, Ym.bind(null, n, r, i, t), void 0, null), we === null)
        throw Error(A(349));
      qn & 30 || Qm(n, t, i);
    }
    return i;
  }
  function Qm(e, t, n) {
    e.flags |= 16384, e = { getSnapshot: t, value: n }, t = le.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, le.updateQueue = t, t.stores = [e]) : (n = t.stores, n === null ? t.stores = [e] : n.push(e));
  }
  function Ym(e, t, n, r) {
    t.value = n, t.getSnapshot = r, Zm(t) && qm(e);
  }
  function Xm(e, t, n) {
    return n(function() {
      Zm(t) && qm(e);
    });
  }
  function Zm(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
      var n = t();
      return !Tt(e, n);
    } catch {
      return !0;
    }
  }
  function qm(e) {
    var t = Yt(e, 1);
    t !== null && wt(t, e, 1, -1);
  }
  function dd(e) {
    var t = Pt();
    return typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: Ki, lastRenderedState: e }, t.queue = e, e = e.dispatch = cx.bind(null, le, e), [t.memoizedState, e];
  }
  function Qi(e, t, n, r) {
    return e = { tag: e, create: t, destroy: n, deps: r, next: null }, t = le.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, le.updateQueue = t, t.lastEffect = e.next = e) : (n = t.lastEffect, n === null ? t.lastEffect = e.next = e : (r = n.next, n.next = e, e.next = r, t.lastEffect = e)), e;
  }
  function Jm() {
    return dt().memoizedState;
  }
  function Yo(e, t, n, r) {
    var i = Pt();
    le.flags |= e, i.memoizedState = Qi(1 | t, n, void 0, r === void 0 ? null : r);
  }
  function Ys(e, t, n, r) {
    var i = dt();
    r = r === void 0 ? null : r;
    var o = void 0;
    if (ye !== null) {
      var s = ye.memoizedState;
      if (o = s.destroy, r !== null && gc(r, s.deps)) {
        i.memoizedState = Qi(t, n, o, r);
        return;
      }
    }
    le.flags |= e, i.memoizedState = Qi(1 | t, n, o, r);
  }
  function pd(e, t) {
    return Yo(8390656, 8, e, t);
  }
  function Sc(e, t) {
    return Ys(2048, 8, e, t);
  }
  function ey(e, t) {
    return Ys(4, 2, e, t);
  }
  function ty(e, t) {
    return Ys(4, 4, e, t);
  }
  function ny(e, t) {
    if (typeof t == "function")
      return e = e(), t(e), function() {
        t(null);
      };
    if (t != null)
      return e = e(), t.current = e, function() {
        t.current = null;
      };
  }
  function ry(e, t, n) {
    return n = n != null ? n.concat([e]) : null, Ys(4, 4, ny.bind(null, t, e), n);
  }
  function wc() {
  }
  function iy(e, t) {
    var n = dt();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && gc(t, r[1]) ? r[0] : (n.memoizedState = [e, t], e);
  }
  function oy(e, t) {
    var n = dt();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && gc(t, r[1]) ? r[0] : (e = e(), n.memoizedState = [e, t], e);
  }
  function sy(e, t, n) {
    return qn & 21 ? (Tt(n, t) || (n = um(), le.lanes |= n, Jn |= n, e.baseState = !0), t) : (e.baseState && (e.baseState = !1, Ue = !0), e.memoizedState = n);
  }
  function lx(e, t) {
    var n = X;
    X = n !== 0 && 4 > n ? n : 4, e(!0);
    var r = Za.transition;
    Za.transition = {};
    try {
      e(!1), t();
    } finally {
      X = n, Za.transition = r;
    }
  }
  function ay() {
    return dt().memoizedState;
  }
  function ux(e, t, n) {
    var r = xn(e);
    if (n = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null }, ly(e))
      uy(t, n);
    else if (n = bm(e, t, n, r), n !== null) {
      var i = Ve();
      wt(n, e, r, i), cy(n, t, r);
    }
  }
  function cx(e, t, n) {
    var r = xn(e), i = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
    if (ly(e))
      uy(t, i);
    else {
      var o = e.alternate;
      if (e.lanes === 0 && (o === null || o.lanes === 0) && (o = t.lastRenderedReducer, o !== null))
        try {
          var s = t.lastRenderedState, a = o(s, n);
          if (i.hasEagerState = !0, i.eagerState = a, Tt(a, s)) {
            var l = t.interleaved;
            l === null ? (i.next = i, dc(t)) : (i.next = l.next, l.next = i), t.interleaved = i;
            return;
          }
        } catch {
        } finally {
        }
      n = bm(e, t, i, r), n !== null && (i = Ve(), wt(n, e, r, i), cy(n, t, r));
    }
  }
  function ly(e) {
    var t = e.alternate;
    return e === le || t !== null && t === le;
  }
  function uy(e, t) {
    Ei = ws = !0;
    var n = e.pending;
    n === null ? t.next = t : (t.next = n.next, n.next = t), e.pending = t;
  }
  function cy(e, t, n) {
    if (n & 4194240) {
      var r = t.lanes;
      r &= e.pendingLanes, n |= r, t.lanes = n, qu(e, n);
    }
  }
  var Ts = { readContext: ft, useCallback: Oe, useContext: Oe, useEffect: Oe, useImperativeHandle: Oe, useInsertionEffect: Oe, useLayoutEffect: Oe, useMemo: Oe, useReducer: Oe, useRef: Oe, useState: Oe, useDebugValue: Oe, useDeferredValue: Oe, useTransition: Oe, useMutableSource: Oe, useSyncExternalStore: Oe, useId: Oe, unstable_isNewReconciler: !1 }, fx = { readContext: ft, useCallback: function(e, t) {
    return Pt().memoizedState = [e, t === void 0 ? null : t], e;
  }, useContext: ft, useEffect: pd, useImperativeHandle: function(e, t, n) {
    return n = n != null ? n.concat([e]) : null, Yo(
      4194308,
      4,
      ny.bind(null, t, e),
      n
    );
  }, useLayoutEffect: function(e, t) {
    return Yo(4194308, 4, e, t);
  }, useInsertionEffect: function(e, t) {
    return Yo(4, 2, e, t);
  }, useMemo: function(e, t) {
    var n = Pt();
    return t = t === void 0 ? null : t, e = e(), n.memoizedState = [e, t], e;
  }, useReducer: function(e, t, n) {
    var r = Pt();
    return t = n !== void 0 ? n(t) : t, r.memoizedState = r.baseState = t, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: e, lastRenderedState: t }, r.queue = e, e = e.dispatch = ux.bind(null, le, e), [r.memoizedState, e];
  }, useRef: function(e) {
    var t = Pt();
    return e = { current: e }, t.memoizedState = e;
  }, useState: dd, useDebugValue: wc, useDeferredValue: function(e) {
    return Pt().memoizedState = e;
  }, useTransition: function() {
    var e = dd(!1), t = e[0];
    return e = lx.bind(null, e[1]), Pt().memoizedState = e, [t, e];
  }, useMutableSource: function() {
  }, useSyncExternalStore: function(e, t, n) {
    var r = le, i = Pt();
    if (oe) {
      if (n === void 0)
        throw Error(A(407));
      n = n();
    } else {
      if (n = t(), we === null)
        throw Error(A(349));
      qn & 30 || Qm(r, t, n);
    }
    i.memoizedState = n;
    var o = { value: n, getSnapshot: t };
    return i.queue = o, pd(Xm.bind(
      null,
      r,
      o,
      e
    ), [e]), r.flags |= 2048, Qi(9, Ym.bind(null, r, o, n, t), void 0, null), n;
  }, useId: function() {
    var e = Pt(), t = we.identifierPrefix;
    if (oe) {
      var n = It, r = bt;
      n = (r & ~(1 << 32 - St(r) - 1)).toString(32) + n, t = ":" + t + "R" + n, n = Gi++, 0 < n && (t += "H" + n.toString(32)), t += ":";
    } else
      n = ax++, t = ":" + t + "r" + n.toString(32) + ":";
    return e.memoizedState = t;
  }, unstable_isNewReconciler: !1 }, dx = {
    readContext: ft,
    useCallback: iy,
    useContext: ft,
    useEffect: Sc,
    useImperativeHandle: ry,
    useInsertionEffect: ey,
    useLayoutEffect: ty,
    useMemo: oy,
    useReducer: qa,
    useRef: Jm,
    useState: function() {
      return qa(Ki);
    },
    useDebugValue: wc,
    useDeferredValue: function(e) {
      var t = dt();
      return sy(t, ye.memoizedState, e);
    },
    useTransition: function() {
      var e = qa(Ki)[0], t = dt().memoizedState;
      return [e, t];
    },
    useMutableSource: Gm,
    useSyncExternalStore: Km,
    useId: ay,
    unstable_isNewReconciler: !1
  }, px = { readContext: ft, useCallback: iy, useContext: ft, useEffect: Sc, useImperativeHandle: ry, useInsertionEffect: ey, useLayoutEffect: ty, useMemo: oy, useReducer: Ja, useRef: Jm, useState: function() {
    return Ja(Ki);
  }, useDebugValue: wc, useDeferredValue: function(e) {
    var t = dt();
    return ye === null ? t.memoizedState = e : sy(t, ye.memoizedState, e);
  }, useTransition: function() {
    var e = Ja(Ki)[0], t = dt().memoizedState;
    return [e, t];
  }, useMutableSource: Gm, useSyncExternalStore: Km, useId: ay, unstable_isNewReconciler: !1 };
  function Wr(e, t) {
    try {
      var n = "", r = t;
      do
        n += z0(r), r = r.return;
      while (r);
      var i = n;
    } catch (o) {
      i = `
Error generating stack: ` + o.message + `
` + o.stack;
    }
    return { value: e, source: t, stack: i, digest: null };
  }
  function el(e, t, n) {
    return { value: e, source: null, stack: n ?? null, digest: t ?? null };
  }
  function ru(e, t) {
    try {
      console.error(t.value);
    } catch (n) {
      setTimeout(function() {
        throw n;
      });
    }
  }
  var hx = typeof WeakMap == "function" ? WeakMap : Map;
  function fy(e, t, n) {
    n = Ht(-1, n), n.tag = 3, n.payload = { element: null };
    var r = t.value;
    return n.callback = function() {
      Cs || (Cs = !0, pu = r), ru(e, t);
    }, n;
  }
  function dy(e, t, n) {
    n = Ht(-1, n), n.tag = 3;
    var r = e.type.getDerivedStateFromError;
    if (typeof r == "function") {
      var i = t.value;
      n.payload = function() {
        return r(i);
      }, n.callback = function() {
        ru(e, t);
      };
    }
    var o = e.stateNode;
    return o !== null && typeof o.componentDidCatch == "function" && (n.callback = function() {
      ru(e, t), typeof r != "function" && (vn === null ? vn = /* @__PURE__ */ new Set([this]) : vn.add(this));
      var s = t.stack;
      this.componentDidCatch(t.value, { componentStack: s !== null ? s : "" });
    }), n;
  }
  function hd(e, t, n) {
    var r = e.pingCache;
    if (r === null) {
      r = e.pingCache = new hx();
      var i = /* @__PURE__ */ new Set();
      r.set(t, i);
    } else
      i = r.get(t), i === void 0 && (i = /* @__PURE__ */ new Set(), r.set(t, i));
    i.has(n) || (i.add(n), e = Ax.bind(null, e, t, n), t.then(e, e));
  }
  function md(e) {
    do {
      var t;
      if ((t = e.tag === 13) && (t = e.memoizedState, t = t !== null ? t.dehydrated !== null : !0), t)
        return e;
      e = e.return;
    } while (e !== null);
    return null;
  }
  function yd(e, t, n, r, i) {
    return e.mode & 1 ? (e.flags |= 65536, e.lanes = i, e) : (e === t ? e.flags |= 65536 : (e.flags |= 128, n.flags |= 131072, n.flags &= -52805, n.tag === 1 && (n.alternate === null ? n.tag = 17 : (t = Ht(-1, 1), t.tag = 2, gn(n, t, 1))), n.lanes |= 1), e);
  }
  var mx = qt.ReactCurrentOwner, Ue = !1;
  function Ne(e, t, n, r) {
    t.child = e === null ? Hm(t, null, n, r) : Ur(t, e.child, n, r);
  }
  function gd(e, t, n, r, i) {
    n = n.render;
    var o = t.ref;
    return $r(t, i), r = vc(e, t, n, r, o, i), n = xc(), e !== null && !Ue ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~i, Xt(e, t, i)) : (oe && n && sc(t), t.flags |= 1, Ne(e, t, r, i), t.child);
  }
  function vd(e, t, n, r, i) {
    if (e === null) {
      var o = n.type;
      return typeof o == "function" && !Oc(o) && o.defaultProps === void 0 && n.compare === null && n.defaultProps === void 0 ? (t.tag = 15, t.type = o, py(e, t, o, r, i)) : (e = Jo(n.type, null, r, t, t.mode, i), e.ref = t.ref, e.return = t, t.child = e);
    }
    if (o = e.child, !(e.lanes & i)) {
      var s = o.memoizedProps;
      if (n = n.compare, n = n !== null ? n : Ii, n(s, r) && e.ref === t.ref)
        return Xt(e, t, i);
    }
    return t.flags |= 1, e = Sn(o, r), e.ref = t.ref, e.return = t, t.child = e;
  }
  function py(e, t, n, r, i) {
    if (e !== null) {
      var o = e.memoizedProps;
      if (Ii(o, r) && e.ref === t.ref)
        if (Ue = !1, t.pendingProps = r = o, (e.lanes & i) !== 0)
          e.flags & 131072 && (Ue = !0);
        else
          return t.lanes = e.lanes, Xt(e, t, i);
    }
    return iu(e, t, n, r, i);
  }
  function hy(e, t, n) {
    var r = t.pendingProps, i = r.children, o = e !== null ? e.memoizedState : null;
    if (r.mode === "hidden")
      if (!(t.mode & 1))
        t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, J(Ar, Ye), Ye |= n;
      else {
        if (!(n & 1073741824))
          return e = o !== null ? o.baseLanes | n : n, t.lanes = t.childLanes = 1073741824, t.memoizedState = { baseLanes: e, cachePool: null, transitions: null }, t.updateQueue = null, J(Ar, Ye), Ye |= e, null;
        t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, r = o !== null ? o.baseLanes : n, J(Ar, Ye), Ye |= r;
      }
    else
      o !== null ? (r = o.baseLanes | n, t.memoizedState = null) : r = n, J(Ar, Ye), Ye |= r;
    return Ne(e, t, i, n), t.child;
  }
  function my(e, t) {
    var n = t.ref;
    (e === null && n !== null || e !== null && e.ref !== n) && (t.flags |= 512, t.flags |= 2097152);
  }
  function iu(e, t, n, r, i) {
    var o = We(n) ? Xn : De.current;
    return o = zr(t, o), $r(t, i), n = vc(e, t, n, r, o, i), r = xc(), e !== null && !Ue ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~i, Xt(e, t, i)) : (oe && r && sc(t), t.flags |= 1, Ne(e, t, n, i), t.child);
  }
  function xd(e, t, n, r, i) {
    if (We(n)) {
      var o = !0;
      hs(t);
    } else
      o = !1;
    if ($r(t, i), t.stateNode === null)
      Xo(e, t), Bm(t, n, r), nu(t, n, r, i), r = !0;
    else if (e === null) {
      var s = t.stateNode, a = t.memoizedProps;
      s.props = a;
      var l = s.context, u = n.contextType;
      typeof u == "object" && u !== null ? u = ft(u) : (u = We(n) ? Xn : De.current, u = zr(t, u));
      var c = n.getDerivedStateFromProps, f = typeof c == "function" || typeof s.getSnapshotBeforeUpdate == "function";
      f || typeof s.UNSAFE_componentWillReceiveProps != "function" && typeof s.componentWillReceiveProps != "function" || (a !== r || l !== u) && cd(t, s, r, u), on = !1;
      var d = t.memoizedState;
      s.state = d, xs(t, r, s, i), l = t.memoizedState, a !== r || d !== l || He.current || on ? (typeof c == "function" && (tu(t, n, c, r), l = t.memoizedState), (a = on || ud(t, n, a, r, d, l, u)) ? (f || typeof s.UNSAFE_componentWillMount != "function" && typeof s.componentWillMount != "function" || (typeof s.componentWillMount == "function" && s.componentWillMount(), typeof s.UNSAFE_componentWillMount == "function" && s.UNSAFE_componentWillMount()), typeof s.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof s.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = r, t.memoizedState = l), s.props = r, s.state = l, s.context = u, r = a) : (typeof s.componentDidMount == "function" && (t.flags |= 4194308), r = !1);
    } else {
      s = t.stateNode, Im(e, t), a = t.memoizedProps, u = t.type === t.elementType ? a : gt(t.type, a), s.props = u, f = t.pendingProps, d = s.context, l = n.contextType, typeof l == "object" && l !== null ? l = ft(l) : (l = We(n) ? Xn : De.current, l = zr(t, l));
      var h = n.getDerivedStateFromProps;
      (c = typeof h == "function" || typeof s.getSnapshotBeforeUpdate == "function") || typeof s.UNSAFE_componentWillReceiveProps != "function" && typeof s.componentWillReceiveProps != "function" || (a !== f || d !== l) && cd(t, s, r, l), on = !1, d = t.memoizedState, s.state = d, xs(t, r, s, i);
      var g = t.memoizedState;
      a !== f || d !== g || He.current || on ? (typeof h == "function" && (tu(t, n, h, r), g = t.memoizedState), (u = on || ud(t, n, u, r, d, g, l) || !1) ? (c || typeof s.UNSAFE_componentWillUpdate != "function" && typeof s.componentWillUpdate != "function" || (typeof s.componentWillUpdate == "function" && s.componentWillUpdate(r, g, l), typeof s.UNSAFE_componentWillUpdate == "function" && s.UNSAFE_componentWillUpdate(r, g, l)), typeof s.componentDidUpdate == "function" && (t.flags |= 4), typeof s.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof s.componentDidUpdate != "function" || a === e.memoizedProps && d === e.memoizedState || (t.flags |= 4), typeof s.getSnapshotBeforeUpdate != "function" || a === e.memoizedProps && d === e.memoizedState || (t.flags |= 1024), t.memoizedProps = r, t.memoizedState = g), s.props = r, s.state = g, s.context = l, r = u) : (typeof s.componentDidUpdate != "function" || a === e.memoizedProps && d === e.memoizedState || (t.flags |= 4), typeof s.getSnapshotBeforeUpdate != "function" || a === e.memoizedProps && d === e.memoizedState || (t.flags |= 1024), r = !1);
    }
    return ou(e, t, n, r, o, i);
  }
  function ou(e, t, n, r, i, o) {
    my(e, t);
    var s = (t.flags & 128) !== 0;
    if (!r && !s)
      return i && id(t, n, !1), Xt(e, t, o);
    r = t.stateNode, mx.current = t;
    var a = s && typeof n.getDerivedStateFromError != "function" ? null : r.render();
    return t.flags |= 1, e !== null && s ? (t.child = Ur(t, e.child, null, o), t.child = Ur(t, null, a, o)) : Ne(e, t, a, o), t.memoizedState = r.state, i && id(t, n, !0), t.child;
  }
  function yy(e) {
    var t = e.stateNode;
    t.pendingContext ? rd(e, t.pendingContext, t.pendingContext !== t.context) : t.context && rd(e, t.context, !1), hc(e, t.containerInfo);
  }
  function Sd(e, t, n, r, i) {
    return Br(), lc(i), t.flags |= 256, Ne(e, t, n, r), t.child;
  }
  var su = { dehydrated: null, treeContext: null, retryLane: 0 };
  function au(e) {
    return { baseLanes: e, cachePool: null, transitions: null };
  }
  function gy(e, t, n) {
    var r = t.pendingProps, i = se.current, o = !1, s = (t.flags & 128) !== 0, a;
    if ((a = s) || (a = e !== null && e.memoizedState === null ? !1 : (i & 2) !== 0), a ? (o = !0, t.flags &= -129) : (e === null || e.memoizedState !== null) && (i |= 1), J(se, i & 1), e === null)
      return Jl(t), e = t.memoizedState, e !== null && (e = e.dehydrated, e !== null) ? (t.mode & 1 ? e.data === "$!" ? t.lanes = 8 : t.lanes = 1073741824 : t.lanes = 1, null) : (s = r.children, e = r.fallback, o ? (r = t.mode, o = t.child, s = { mode: "hidden", children: s }, !(r & 1) && o !== null ? (o.childLanes = 0, o.pendingProps = s) : o = qs(s, r, 0, null), e = Qn(e, r, n, null), o.return = t, e.return = t, o.sibling = e, t.child = o, t.child.memoizedState = au(n), t.memoizedState = su, e) : Tc(t, s));
    if (i = e.memoizedState, i !== null && (a = i.dehydrated, a !== null))
      return yx(e, t, s, r, a, i, n);
    if (o) {
      o = r.fallback, s = t.mode, i = e.child, a = i.sibling;
      var l = { mode: "hidden", children: r.children };
      return !(s & 1) && t.child !== i ? (r = t.child, r.childLanes = 0, r.pendingProps = l, t.deletions = null) : (r = Sn(i, l), r.subtreeFlags = i.subtreeFlags & 14680064), a !== null ? o = Sn(a, o) : (o = Qn(o, s, n, null), o.flags |= 2), o.return = t, r.return = t, r.sibling = o, t.child = r, r = o, o = t.child, s = e.child.memoizedState, s = s === null ? au(n) : { baseLanes: s.baseLanes | n, cachePool: null, transitions: s.transitions }, o.memoizedState = s, o.childLanes = e.childLanes & ~n, t.memoizedState = su, r;
    }
    return o = e.child, e = o.sibling, r = Sn(o, { mode: "visible", children: r.children }), !(t.mode & 1) && (r.lanes = n), r.return = t, r.sibling = null, e !== null && (n = t.deletions, n === null ? (t.deletions = [e], t.flags |= 16) : n.push(e)), t.child = r, t.memoizedState = null, r;
  }
  function Tc(e, t) {
    return t = qs({ mode: "visible", children: t }, e.mode, 0, null), t.return = e, e.child = t;
  }
  function Do(e, t, n, r) {
    return r !== null && lc(r), Ur(t, e.child, null, n), e = Tc(t, t.pendingProps.children), e.flags |= 2, t.memoizedState = null, e;
  }
  function yx(e, t, n, r, i, o, s) {
    if (n)
      return t.flags & 256 ? (t.flags &= -257, r = el(Error(A(422))), Do(e, t, s, r)) : t.memoizedState !== null ? (t.child = e.child, t.flags |= 128, null) : (o = r.fallback, i = t.mode, r = qs({ mode: "visible", children: r.children }, i, 0, null), o = Qn(o, i, s, null), o.flags |= 2, r.return = t, o.return = t, r.sibling = o, t.child = r, t.mode & 1 && Ur(t, e.child, null, s), t.child.memoizedState = au(s), t.memoizedState = su, o);
    if (!(t.mode & 1))
      return Do(e, t, s, null);
    if (i.data === "$!") {
      if (r = i.nextSibling && i.nextSibling.dataset, r)
        var a = r.dgst;
      return r = a, o = Error(A(419)), r = el(o, r, void 0), Do(e, t, s, r);
    }
    if (a = (s & e.childLanes) !== 0, Ue || a) {
      if (r = we, r !== null) {
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
        i = i & (r.suspendedLanes | s) ? 0 : i, i !== 0 && i !== o.retryLane && (o.retryLane = i, Yt(e, i), wt(r, e, i, -1));
      }
      return Ac(), r = el(Error(A(421))), Do(e, t, s, r);
    }
    return i.data === "$?" ? (t.flags |= 128, t.child = e.child, t = Ox.bind(null, e), i._reactRetry = t, null) : (e = o.treeContext, Xe = yn(i.nextSibling), Je = t, oe = !0, xt = null, e !== null && (at[lt++] = bt, at[lt++] = It, at[lt++] = Zn, bt = e.id, It = e.overflow, Zn = t), t = Tc(t, r.children), t.flags |= 4096, t);
  }
  function wd(e, t, n) {
    e.lanes |= t;
    var r = e.alternate;
    r !== null && (r.lanes |= t), eu(e.return, t, n);
  }
  function tl(e, t, n, r, i) {
    var o = e.memoizedState;
    o === null ? e.memoizedState = { isBackwards: t, rendering: null, renderingStartTime: 0, last: r, tail: n, tailMode: i } : (o.isBackwards = t, o.rendering = null, o.renderingStartTime = 0, o.last = r, o.tail = n, o.tailMode = i);
  }
  function vy(e, t, n) {
    var r = t.pendingProps, i = r.revealOrder, o = r.tail;
    if (Ne(e, t, r.children, n), r = se.current, r & 2)
      r = r & 1 | 2, t.flags |= 128;
    else {
      if (e !== null && e.flags & 128)
        e:
          for (e = t.child; e !== null; ) {
            if (e.tag === 13)
              e.memoizedState !== null && wd(e, n, t);
            else if (e.tag === 19)
              wd(e, n, t);
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
    if (J(se, r), !(t.mode & 1))
      t.memoizedState = null;
    else
      switch (i) {
        case "forwards":
          for (n = t.child, i = null; n !== null; )
            e = n.alternate, e !== null && Ss(e) === null && (i = n), n = n.sibling;
          n = i, n === null ? (i = t.child, t.child = null) : (i = n.sibling, n.sibling = null), tl(t, !1, i, n, o);
          break;
        case "backwards":
          for (n = null, i = t.child, t.child = null; i !== null; ) {
            if (e = i.alternate, e !== null && Ss(e) === null) {
              t.child = i;
              break;
            }
            e = i.sibling, i.sibling = n, n = i, i = e;
          }
          tl(t, !0, n, null, o);
          break;
        case "together":
          tl(t, !1, null, null, void 0);
          break;
        default:
          t.memoizedState = null;
      }
    return t.child;
  }
  function Xo(e, t) {
    !(t.mode & 1) && e !== null && (e.alternate = null, t.alternate = null, t.flags |= 2);
  }
  function Xt(e, t, n) {
    if (e !== null && (t.dependencies = e.dependencies), Jn |= t.lanes, !(n & t.childLanes))
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
  function gx(e, t, n) {
    switch (t.tag) {
      case 3:
        yy(t), Br();
        break;
      case 5:
        Wm(t);
        break;
      case 1:
        We(t.type) && hs(t);
        break;
      case 4:
        hc(t, t.stateNode.containerInfo);
        break;
      case 10:
        var r = t.type._context, i = t.memoizedProps.value;
        J(gs, r._currentValue), r._currentValue = i;
        break;
      case 13:
        if (r = t.memoizedState, r !== null)
          return r.dehydrated !== null ? (J(se, se.current & 1), t.flags |= 128, null) : n & t.child.childLanes ? gy(e, t, n) : (J(se, se.current & 1), e = Xt(e, t, n), e !== null ? e.sibling : null);
        J(se, se.current & 1);
        break;
      case 19:
        if (r = (n & t.childLanes) !== 0, e.flags & 128) {
          if (r)
            return vy(e, t, n);
          t.flags |= 128;
        }
        if (i = t.memoizedState, i !== null && (i.rendering = null, i.tail = null, i.lastEffect = null), J(se, se.current), r)
          break;
        return null;
      case 22:
      case 23:
        return t.lanes = 0, hy(e, t, n);
    }
    return Xt(e, t, n);
  }
  var xy, lu, Sy, wy;
  xy = function(e, t) {
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
  lu = function() {
  };
  Sy = function(e, t, n, r) {
    var i = e.memoizedProps;
    if (i !== r) {
      e = t.stateNode, Wn(Ft.current);
      var o = null;
      switch (n) {
        case "input":
          i = Fl(e, i), r = Fl(e, r), o = [];
          break;
        case "select":
          i = ue({}, i, { value: void 0 }), r = ue({}, r, { value: void 0 }), o = [];
          break;
        case "textarea":
          i = Ml(e, i), r = Ml(e, r), o = [];
          break;
        default:
          typeof i.onClick != "function" && typeof r.onClick == "function" && (e.onclick = ds);
      }
      Ll(n, r);
      var s;
      n = null;
      for (u in i)
        if (!r.hasOwnProperty(u) && i.hasOwnProperty(u) && i[u] != null)
          if (u === "style") {
            var a = i[u];
            for (s in a)
              a.hasOwnProperty(s) && (n || (n = {}), n[s] = "");
          } else
            u !== "dangerouslySetInnerHTML" && u !== "children" && u !== "suppressContentEditableWarning" && u !== "suppressHydrationWarning" && u !== "autoFocus" && (Mi.hasOwnProperty(u) ? o || (o = []) : (o = o || []).push(u, null));
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
            u === "dangerouslySetInnerHTML" ? (l = l ? l.__html : void 0, a = a ? a.__html : void 0, l != null && a !== l && (o = o || []).push(u, l)) : u === "children" ? typeof l != "string" && typeof l != "number" || (o = o || []).push(u, "" + l) : u !== "suppressContentEditableWarning" && u !== "suppressHydrationWarning" && (Mi.hasOwnProperty(u) ? (l != null && u === "onScroll" && te("scroll", e), o || a === l || (o = [])) : (o = o || []).push(u, l));
      }
      n && (o = o || []).push("style", n);
      var u = o;
      (t.updateQueue = u) && (t.flags |= 4);
    }
  };
  wy = function(e, t, n, r) {
    n !== r && (t.flags |= 4);
  };
  function li(e, t) {
    if (!oe)
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
  function Fe(e) {
    var t = e.alternate !== null && e.alternate.child === e.child, n = 0, r = 0;
    if (t)
      for (var i = e.child; i !== null; )
        n |= i.lanes | i.childLanes, r |= i.subtreeFlags & 14680064, r |= i.flags & 14680064, i.return = e, i = i.sibling;
    else
      for (i = e.child; i !== null; )
        n |= i.lanes | i.childLanes, r |= i.subtreeFlags, r |= i.flags, i.return = e, i = i.sibling;
    return e.subtreeFlags |= r, e.childLanes = n, t;
  }
  function vx(e, t, n) {
    var r = t.pendingProps;
    switch (ac(t), t.tag) {
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
        return Fe(t), null;
      case 1:
        return We(t.type) && ps(), Fe(t), null;
      case 3:
        return r = t.stateNode, Hr(), re(He), re(De), yc(), r.pendingContext && (r.context = r.pendingContext, r.pendingContext = null), (e === null || e.child === null) && (Fo(t) ? t.flags |= 4 : e === null || e.memoizedState.isDehydrated && !(t.flags & 256) || (t.flags |= 1024, xt !== null && (yu(xt), xt = null))), lu(e, t), Fe(t), null;
      case 5:
        mc(t);
        var i = Wn(Wi.current);
        if (n = t.type, e !== null && t.stateNode != null)
          Sy(e, t, n, r, i), e.ref !== t.ref && (t.flags |= 512, t.flags |= 2097152);
        else {
          if (!r) {
            if (t.stateNode === null)
              throw Error(A(166));
            return Fe(t), null;
          }
          if (e = Wn(Ft.current), Fo(t)) {
            r = t.stateNode, n = t.type;
            var o = t.memoizedProps;
            switch (r[At] = t, r[Ui] = o, e = (t.mode & 1) !== 0, n) {
              case "dialog":
                te("cancel", r), te("close", r);
                break;
              case "iframe":
              case "object":
              case "embed":
                te("load", r);
                break;
              case "video":
              case "audio":
                for (i = 0; i < yi.length; i++)
                  te(yi[i], r);
                break;
              case "source":
                te("error", r);
                break;
              case "img":
              case "image":
              case "link":
                te(
                  "error",
                  r
                ), te("load", r);
                break;
              case "details":
                te("toggle", r);
                break;
              case "input":
                Ff(r, o), te("invalid", r);
                break;
              case "select":
                r._wrapperState = { wasMultiple: !!o.multiple }, te("invalid", r);
                break;
              case "textarea":
                Df(r, o), te("invalid", r);
            }
            Ll(n, o), i = null;
            for (var s in o)
              if (o.hasOwnProperty(s)) {
                var a = o[s];
                s === "children" ? typeof a == "string" ? r.textContent !== a && (o.suppressHydrationWarning !== !0 && Oo(r.textContent, a, e), i = ["children", a]) : typeof a == "number" && r.textContent !== "" + a && (o.suppressHydrationWarning !== !0 && Oo(
                  r.textContent,
                  a,
                  e
                ), i = ["children", "" + a]) : Mi.hasOwnProperty(s) && a != null && s === "onScroll" && te("scroll", r);
              }
            switch (n) {
              case "input":
                wo(r), jf(r, o, !0);
                break;
              case "textarea":
                wo(r), Mf(r);
                break;
              case "select":
              case "option":
                break;
              default:
                typeof o.onClick == "function" && (r.onclick = ds);
            }
            r = i, t.updateQueue = r, r !== null && (t.flags |= 4);
          } else {
            s = i.nodeType === 9 ? i : i.ownerDocument, e === "http://www.w3.org/1999/xhtml" && (e = Qh(n)), e === "http://www.w3.org/1999/xhtml" ? n === "script" ? (e = s.createElement("div"), e.innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild)) : typeof r.is == "string" ? e = s.createElement(n, { is: r.is }) : (e = s.createElement(n), n === "select" && (s = e, r.multiple ? s.multiple = !0 : r.size && (s.size = r.size))) : e = s.createElementNS(e, n), e[At] = t, e[Ui] = r, xy(e, t, !1, !1), t.stateNode = e;
            e: {
              switch (s = Nl(n, r), n) {
                case "dialog":
                  te("cancel", e), te("close", e), i = r;
                  break;
                case "iframe":
                case "object":
                case "embed":
                  te("load", e), i = r;
                  break;
                case "video":
                case "audio":
                  for (i = 0; i < yi.length; i++)
                    te(yi[i], e);
                  i = r;
                  break;
                case "source":
                  te("error", e), i = r;
                  break;
                case "img":
                case "image":
                case "link":
                  te(
                    "error",
                    e
                  ), te("load", e), i = r;
                  break;
                case "details":
                  te("toggle", e), i = r;
                  break;
                case "input":
                  Ff(e, r), i = Fl(e, r), te("invalid", e);
                  break;
                case "option":
                  i = r;
                  break;
                case "select":
                  e._wrapperState = { wasMultiple: !!r.multiple }, i = ue({}, r, { value: void 0 }), te("invalid", e);
                  break;
                case "textarea":
                  Df(e, r), i = Ml(e, r), te("invalid", e);
                  break;
                default:
                  i = r;
              }
              Ll(n, i), a = i;
              for (o in a)
                if (a.hasOwnProperty(o)) {
                  var l = a[o];
                  o === "style" ? Zh(e, l) : o === "dangerouslySetInnerHTML" ? (l = l ? l.__html : void 0, l != null && Yh(e, l)) : o === "children" ? typeof l == "string" ? (n !== "textarea" || l !== "") && Ri(e, l) : typeof l == "number" && Ri(e, "" + l) : o !== "suppressContentEditableWarning" && o !== "suppressHydrationWarning" && o !== "autoFocus" && (Mi.hasOwnProperty(o) ? l != null && o === "onScroll" && te("scroll", e) : l != null && Gu(e, o, l, s));
                }
              switch (n) {
                case "input":
                  wo(e), jf(e, r, !1);
                  break;
                case "textarea":
                  wo(e), Mf(e);
                  break;
                case "option":
                  r.value != null && e.setAttribute("value", "" + Pn(r.value));
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
                  typeof i.onClick == "function" && (e.onclick = ds);
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
        return Fe(t), null;
      case 6:
        if (e && t.stateNode != null)
          wy(e, t, e.memoizedProps, r);
        else {
          if (typeof r != "string" && t.stateNode === null)
            throw Error(A(166));
          if (n = Wn(Wi.current), Wn(Ft.current), Fo(t)) {
            if (r = t.stateNode, n = t.memoizedProps, r[At] = t, (o = r.nodeValue !== n) && (e = Je, e !== null))
              switch (e.tag) {
                case 3:
                  Oo(r.nodeValue, n, (e.mode & 1) !== 0);
                  break;
                case 5:
                  e.memoizedProps.suppressHydrationWarning !== !0 && Oo(r.nodeValue, n, (e.mode & 1) !== 0);
              }
            o && (t.flags |= 4);
          } else
            r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r), r[At] = t, t.stateNode = r;
        }
        return Fe(t), null;
      case 13:
        if (re(se), r = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
          if (oe && Xe !== null && t.mode & 1 && !(t.flags & 128))
            $m(), Br(), t.flags |= 98560, o = !1;
          else if (o = Fo(t), r !== null && r.dehydrated !== null) {
            if (e === null) {
              if (!o)
                throw Error(A(318));
              if (o = t.memoizedState, o = o !== null ? o.dehydrated : null, !o)
                throw Error(A(317));
              o[At] = t;
            } else
              Br(), !(t.flags & 128) && (t.memoizedState = null), t.flags |= 4;
            Fe(t), o = !1;
          } else
            xt !== null && (yu(xt), xt = null), o = !0;
          if (!o)
            return t.flags & 65536 ? t : null;
        }
        return t.flags & 128 ? (t.lanes = n, t) : (r = r !== null, r !== (e !== null && e.memoizedState !== null) && r && (t.child.flags |= 8192, t.mode & 1 && (e === null || se.current & 1 ? ge === 0 && (ge = 3) : Ac())), t.updateQueue !== null && (t.flags |= 4), Fe(t), null);
      case 4:
        return Hr(), lu(e, t), e === null && zi(t.stateNode.containerInfo), Fe(t), null;
      case 10:
        return fc(t.type._context), Fe(t), null;
      case 17:
        return We(t.type) && ps(), Fe(t), null;
      case 19:
        if (re(se), o = t.memoizedState, o === null)
          return Fe(t), null;
        if (r = (t.flags & 128) !== 0, s = o.rendering, s === null)
          if (r)
            li(o, !1);
          else {
            if (ge !== 0 || e !== null && e.flags & 128)
              for (e = t.child; e !== null; ) {
                if (s = Ss(e), s !== null) {
                  for (t.flags |= 128, li(o, !1), r = s.updateQueue, r !== null && (t.updateQueue = r, t.flags |= 4), t.subtreeFlags = 0, r = n, n = t.child; n !== null; )
                    o = n, e = r, o.flags &= 14680066, s = o.alternate, s === null ? (o.childLanes = 0, o.lanes = e, o.child = null, o.subtreeFlags = 0, o.memoizedProps = null, o.memoizedState = null, o.updateQueue = null, o.dependencies = null, o.stateNode = null) : (o.childLanes = s.childLanes, o.lanes = s.lanes, o.child = s.child, o.subtreeFlags = 0, o.deletions = null, o.memoizedProps = s.memoizedProps, o.memoizedState = s.memoizedState, o.updateQueue = s.updateQueue, o.type = s.type, e = s.dependencies, o.dependencies = e === null ? null : { lanes: e.lanes, firstContext: e.firstContext }), n = n.sibling;
                  return J(se, se.current & 1 | 2), t.child;
                }
                e = e.sibling;
              }
            o.tail !== null && pe() > Gr && (t.flags |= 128, r = !0, li(o, !1), t.lanes = 4194304);
          }
        else {
          if (!r)
            if (e = Ss(s), e !== null) {
              if (t.flags |= 128, r = !0, n = e.updateQueue, n !== null && (t.updateQueue = n, t.flags |= 4), li(o, !0), o.tail === null && o.tailMode === "hidden" && !s.alternate && !oe)
                return Fe(t), null;
            } else
              2 * pe() - o.renderingStartTime > Gr && n !== 1073741824 && (t.flags |= 128, r = !0, li(o, !1), t.lanes = 4194304);
          o.isBackwards ? (s.sibling = t.child, t.child = s) : (n = o.last, n !== null ? n.sibling = s : t.child = s, o.last = s);
        }
        return o.tail !== null ? (t = o.tail, o.rendering = t, o.tail = t.sibling, o.renderingStartTime = pe(), t.sibling = null, n = se.current, J(se, r ? n & 1 | 2 : n & 1), t) : (Fe(t), null);
      case 22:
      case 23:
        return _c(), r = t.memoizedState !== null, e !== null && e.memoizedState !== null !== r && (t.flags |= 8192), r && t.mode & 1 ? Ye & 1073741824 && (Fe(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : Fe(t), null;
      case 24:
        return null;
      case 25:
        return null;
    }
    throw Error(A(156, t.tag));
  }
  function xx(e, t) {
    switch (ac(t), t.tag) {
      case 1:
        return We(t.type) && ps(), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 3:
        return Hr(), re(He), re(De), yc(), e = t.flags, e & 65536 && !(e & 128) ? (t.flags = e & -65537 | 128, t) : null;
      case 5:
        return mc(t), null;
      case 13:
        if (re(se), e = t.memoizedState, e !== null && e.dehydrated !== null) {
          if (t.alternate === null)
            throw Error(A(340));
          Br();
        }
        return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 19:
        return re(se), null;
      case 4:
        return Hr(), null;
      case 10:
        return fc(t.type._context), null;
      case 22:
      case 23:
        return _c(), null;
      case 24:
        return null;
      default:
        return null;
    }
  }
  var Mo = !1, je = !1, Sx = typeof WeakSet == "function" ? WeakSet : Set, M = null;
  function _r(e, t) {
    var n = e.ref;
    if (n !== null)
      if (typeof n == "function")
        try {
          n(null);
        } catch (r) {
          ce(e, t, r);
        }
      else
        n.current = null;
  }
  function uu(e, t, n) {
    try {
      n();
    } catch (r) {
      ce(e, t, r);
    }
  }
  var Td = !1;
  function wx(e, t) {
    if (Gl = us, e = Pm(), oc(e)) {
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
            var s = 0, a = -1, l = -1, u = 0, c = 0, f = e, d = null;
            t:
              for (; ; ) {
                for (var h; f !== n || i !== 0 && f.nodeType !== 3 || (a = s + i), f !== o || r !== 0 && f.nodeType !== 3 || (l = s + r), f.nodeType === 3 && (s += f.nodeValue.length), (h = f.firstChild) !== null; )
                  d = f, f = h;
                for (; ; ) {
                  if (f === e)
                    break t;
                  if (d === n && ++u === i && (a = s), d === o && ++c === r && (l = s), (h = f.nextSibling) !== null)
                    break;
                  f = d, d = f.parentNode;
                }
                f = h;
              }
            n = a === -1 || l === -1 ? null : { start: a, end: l };
          } else
            n = null;
        }
      n = n || { start: 0, end: 0 };
    } else
      n = null;
    for (Kl = { focusedElem: e, selectionRange: n }, us = !1, M = t; M !== null; )
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
                    var v = g.memoizedProps, k = g.memoizedState, y = t.stateNode, p = y.getSnapshotBeforeUpdate(t.elementType === t.type ? v : gt(t.type, v), k);
                    y.__reactInternalSnapshotBeforeUpdate = p;
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
            ce(t, t.return, x);
          }
          if (e = t.sibling, e !== null) {
            e.return = t.return, M = e;
            break;
          }
          M = t.return;
        }
    return g = Td, Td = !1, g;
  }
  function Ci(e, t, n) {
    var r = t.updateQueue;
    if (r = r !== null ? r.lastEffect : null, r !== null) {
      var i = r = r.next;
      do {
        if ((i.tag & e) === e) {
          var o = i.destroy;
          i.destroy = void 0, o !== void 0 && uu(t, n, o);
        }
        i = i.next;
      } while (i !== r);
    }
  }
  function Xs(e, t) {
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
  function cu(e) {
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
  function Ty(e) {
    var t = e.alternate;
    t !== null && (e.alternate = null, Ty(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && (delete t[At], delete t[Ui], delete t[Xl], delete t[rx], delete t[ix])), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
  }
  function Ey(e) {
    return e.tag === 5 || e.tag === 3 || e.tag === 4;
  }
  function Ed(e) {
    e:
      for (; ; ) {
        for (; e.sibling === null; ) {
          if (e.return === null || Ey(e.return))
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
  function fu(e, t, n) {
    var r = e.tag;
    if (r === 5 || r === 6)
      e = e.stateNode, t ? n.nodeType === 8 ? n.parentNode.insertBefore(e, t) : n.insertBefore(e, t) : (n.nodeType === 8 ? (t = n.parentNode, t.insertBefore(e, n)) : (t = n, t.appendChild(e)), n = n._reactRootContainer, n != null || t.onclick !== null || (t.onclick = ds));
    else if (r !== 4 && (e = e.child, e !== null))
      for (fu(e, t, n), e = e.sibling; e !== null; )
        fu(e, t, n), e = e.sibling;
  }
  function du(e, t, n) {
    var r = e.tag;
    if (r === 5 || r === 6)
      e = e.stateNode, t ? n.insertBefore(e, t) : n.appendChild(e);
    else if (r !== 4 && (e = e.child, e !== null))
      for (du(e, t, n), e = e.sibling; e !== null; )
        du(e, t, n), e = e.sibling;
  }
  var Ce = null, vt = !1;
  function en(e, t, n) {
    for (n = n.child; n !== null; )
      Cy(e, t, n), n = n.sibling;
  }
  function Cy(e, t, n) {
    if (Ot && typeof Ot.onCommitFiberUnmount == "function")
      try {
        Ot.onCommitFiberUnmount(Bs, n);
      } catch {
      }
    switch (n.tag) {
      case 5:
        je || _r(n, t);
      case 6:
        var r = Ce, i = vt;
        Ce = null, en(e, t, n), Ce = r, vt = i, Ce !== null && (vt ? (e = Ce, n = n.stateNode, e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n)) : Ce.removeChild(n.stateNode));
        break;
      case 18:
        Ce !== null && (vt ? (e = Ce, n = n.stateNode, e.nodeType === 8 ? Qa(e.parentNode, n) : e.nodeType === 1 && Qa(e, n), $i(e)) : Qa(Ce, n.stateNode));
        break;
      case 4:
        r = Ce, i = vt, Ce = n.stateNode.containerInfo, vt = !0, en(e, t, n), Ce = r, vt = i;
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        if (!je && (r = n.updateQueue, r !== null && (r = r.lastEffect, r !== null))) {
          i = r = r.next;
          do {
            var o = i, s = o.destroy;
            o = o.tag, s !== void 0 && (o & 2 || o & 4) && uu(n, t, s), i = i.next;
          } while (i !== r);
        }
        en(e, t, n);
        break;
      case 1:
        if (!je && (_r(n, t), r = n.stateNode, typeof r.componentWillUnmount == "function"))
          try {
            r.props = n.memoizedProps, r.state = n.memoizedState, r.componentWillUnmount();
          } catch (a) {
            ce(n, t, a);
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
  function Cd(e) {
    var t = e.updateQueue;
    if (t !== null) {
      e.updateQueue = null;
      var n = e.stateNode;
      n === null && (n = e.stateNode = new Sx()), t.forEach(function(r) {
        var i = Fx.bind(null, e, r);
        n.has(r) || (n.add(r), r.then(i, i));
      });
    }
  }
  function mt(e, t) {
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
                  Ce = a.stateNode, vt = !1;
                  break e;
                case 3:
                  Ce = a.stateNode.containerInfo, vt = !0;
                  break e;
                case 4:
                  Ce = a.stateNode.containerInfo, vt = !0;
                  break e;
              }
              a = a.return;
            }
          if (Ce === null)
            throw Error(A(160));
          Cy(o, s, i), Ce = null, vt = !1;
          var l = i.alternate;
          l !== null && (l.return = null), i.return = null;
        } catch (u) {
          ce(i, t, u);
        }
      }
    if (t.subtreeFlags & 12854)
      for (t = t.child; t !== null; )
        Py(t, e), t = t.sibling;
  }
  function Py(e, t) {
    var n = e.alternate, r = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        if (mt(t, e), Ct(e), r & 4) {
          try {
            Ci(3, e, e.return), Xs(3, e);
          } catch (v) {
            ce(e, e.return, v);
          }
          try {
            Ci(5, e, e.return);
          } catch (v) {
            ce(e, e.return, v);
          }
        }
        break;
      case 1:
        mt(t, e), Ct(e), r & 512 && n !== null && _r(n, n.return);
        break;
      case 5:
        if (mt(t, e), Ct(e), r & 512 && n !== null && _r(n, n.return), e.flags & 32) {
          var i = e.stateNode;
          try {
            Ri(i, "");
          } catch (v) {
            ce(e, e.return, v);
          }
        }
        if (r & 4 && (i = e.stateNode, i != null)) {
          var o = e.memoizedProps, s = n !== null ? n.memoizedProps : o, a = e.type, l = e.updateQueue;
          if (e.updateQueue = null, l !== null)
            try {
              a === "input" && o.type === "radio" && o.name != null && Gh(i, o), Nl(a, s);
              var u = Nl(a, o);
              for (s = 0; s < l.length; s += 2) {
                var c = l[s], f = l[s + 1];
                c === "style" ? Zh(i, f) : c === "dangerouslySetInnerHTML" ? Yh(i, f) : c === "children" ? Ri(i, f) : Gu(i, c, f, u);
              }
              switch (a) {
                case "input":
                  jl(i, o);
                  break;
                case "textarea":
                  Kh(i, o);
                  break;
                case "select":
                  var d = i._wrapperState.wasMultiple;
                  i._wrapperState.wasMultiple = !!o.multiple;
                  var h = o.value;
                  h != null ? Rr(i, !!o.multiple, h, !1) : d !== !!o.multiple && (o.defaultValue != null ? Rr(
                    i,
                    !!o.multiple,
                    o.defaultValue,
                    !0
                  ) : Rr(i, !!o.multiple, o.multiple ? [] : "", !1));
              }
              i[Ui] = o;
            } catch (v) {
              ce(e, e.return, v);
            }
        }
        break;
      case 6:
        if (mt(t, e), Ct(e), r & 4) {
          if (e.stateNode === null)
            throw Error(A(162));
          i = e.stateNode, o = e.memoizedProps;
          try {
            i.nodeValue = o;
          } catch (v) {
            ce(e, e.return, v);
          }
        }
        break;
      case 3:
        if (mt(t, e), Ct(e), r & 4 && n !== null && n.memoizedState.isDehydrated)
          try {
            $i(t.containerInfo);
          } catch (v) {
            ce(e, e.return, v);
          }
        break;
      case 4:
        mt(t, e), Ct(e);
        break;
      case 13:
        mt(t, e), Ct(e), i = e.child, i.flags & 8192 && (o = i.memoizedState !== null, i.stateNode.isHidden = o, !o || i.alternate !== null && i.alternate.memoizedState !== null || (Pc = pe())), r & 4 && Cd(e);
        break;
      case 22:
        if (c = n !== null && n.memoizedState !== null, e.mode & 1 ? (je = (u = je) || c, mt(t, e), je = u) : mt(t, e), Ct(e), r & 8192) {
          if (u = e.memoizedState !== null, (e.stateNode.isHidden = u) && !c && e.mode & 1)
            for (M = e, c = e.child; c !== null; ) {
              for (f = M = c; M !== null; ) {
                switch (d = M, h = d.child, d.tag) {
                  case 0:
                  case 11:
                  case 14:
                  case 15:
                    Ci(4, d, d.return);
                    break;
                  case 1:
                    _r(d, d.return);
                    var g = d.stateNode;
                    if (typeof g.componentWillUnmount == "function") {
                      r = d, n = d.return;
                      try {
                        t = r, g.props = t.memoizedProps, g.state = t.memoizedState, g.componentWillUnmount();
                      } catch (v) {
                        ce(r, n, v);
                      }
                    }
                    break;
                  case 5:
                    _r(d, d.return);
                    break;
                  case 22:
                    if (d.memoizedState !== null) {
                      kd(f);
                      continue;
                    }
                }
                h !== null ? (h.return = d, M = h) : kd(f);
              }
              c = c.sibling;
            }
          e:
            for (c = null, f = e; ; ) {
              if (f.tag === 5) {
                if (c === null) {
                  c = f;
                  try {
                    i = f.stateNode, u ? (o = i.style, typeof o.setProperty == "function" ? o.setProperty("display", "none", "important") : o.display = "none") : (a = f.stateNode, l = f.memoizedProps.style, s = l != null && l.hasOwnProperty("display") ? l.display : null, a.style.display = Xh("display", s));
                  } catch (v) {
                    ce(e, e.return, v);
                  }
                }
              } else if (f.tag === 6) {
                if (c === null)
                  try {
                    f.stateNode.nodeValue = u ? "" : f.memoizedProps;
                  } catch (v) {
                    ce(e, e.return, v);
                  }
              } else if ((f.tag !== 22 && f.tag !== 23 || f.memoizedState === null || f === e) && f.child !== null) {
                f.child.return = f, f = f.child;
                continue;
              }
              if (f === e)
                break e;
              for (; f.sibling === null; ) {
                if (f.return === null || f.return === e)
                  break e;
                c === f && (c = null), f = f.return;
              }
              c === f && (c = null), f.sibling.return = f.return, f = f.sibling;
            }
        }
        break;
      case 19:
        mt(t, e), Ct(e), r & 4 && Cd(e);
        break;
      case 21:
        break;
      default:
        mt(
          t,
          e
        ), Ct(e);
    }
  }
  function Ct(e) {
    var t = e.flags;
    if (t & 2) {
      try {
        e: {
          for (var n = e.return; n !== null; ) {
            if (Ey(n)) {
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
            r.flags & 32 && (Ri(i, ""), r.flags &= -33);
            var o = Ed(e);
            du(e, o, i);
            break;
          case 3:
          case 4:
            var s = r.stateNode.containerInfo, a = Ed(e);
            fu(e, a, s);
            break;
          default:
            throw Error(A(161));
        }
      } catch (l) {
        ce(e, e.return, l);
      }
      e.flags &= -3;
    }
    t & 4096 && (e.flags &= -4097);
  }
  function Tx(e, t, n) {
    M = e, ky(e);
  }
  function ky(e, t, n) {
    for (var r = (e.mode & 1) !== 0; M !== null; ) {
      var i = M, o = i.child;
      if (i.tag === 22 && r) {
        var s = i.memoizedState !== null || Mo;
        if (!s) {
          var a = i.alternate, l = a !== null && a.memoizedState !== null || je;
          a = Mo;
          var u = je;
          if (Mo = s, (je = l) && !u)
            for (M = i; M !== null; )
              s = M, l = s.child, s.tag === 22 && s.memoizedState !== null ? _d(i) : l !== null ? (l.return = s, M = l) : _d(i);
          for (; o !== null; )
            M = o, ky(o), o = o.sibling;
          M = i, Mo = a, je = u;
        }
        Pd(e);
      } else
        i.subtreeFlags & 8772 && o !== null ? (o.return = i, M = o) : Pd(e);
    }
  }
  function Pd(e) {
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
                je || Xs(5, t);
                break;
              case 1:
                var r = t.stateNode;
                if (t.flags & 4 && !je)
                  if (n === null)
                    r.componentDidMount();
                  else {
                    var i = t.elementType === t.type ? n.memoizedProps : gt(t.type, n.memoizedProps);
                    r.componentDidUpdate(i, n.memoizedState, r.__reactInternalSnapshotBeforeUpdate);
                  }
                var o = t.updateQueue;
                o !== null && ld(t, o, r);
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
                  ld(t, s, n);
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
                    var c = u.memoizedState;
                    if (c !== null) {
                      var f = c.dehydrated;
                      f !== null && $i(f);
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
          je || t.flags & 512 && cu(t);
        } catch (d) {
          ce(t, t.return, d);
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
  function kd(e) {
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
  function _d(e) {
    for (; M !== null; ) {
      var t = M;
      try {
        switch (t.tag) {
          case 0:
          case 11:
          case 15:
            var n = t.return;
            try {
              Xs(4, t);
            } catch (l) {
              ce(t, n, l);
            }
            break;
          case 1:
            var r = t.stateNode;
            if (typeof r.componentDidMount == "function") {
              var i = t.return;
              try {
                r.componentDidMount();
              } catch (l) {
                ce(t, i, l);
              }
            }
            var o = t.return;
            try {
              cu(t);
            } catch (l) {
              ce(t, o, l);
            }
            break;
          case 5:
            var s = t.return;
            try {
              cu(t);
            } catch (l) {
              ce(t, s, l);
            }
        }
      } catch (l) {
        ce(t, t.return, l);
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
  var Ex = Math.ceil, Es = qt.ReactCurrentDispatcher, Ec = qt.ReactCurrentOwner, ct = qt.ReactCurrentBatchConfig, W = 0, we = null, me = null, ke = 0, Ye = 0, Ar = jn(0), ge = 0, Yi = null, Jn = 0, Zs = 0, Cc = 0, Pi = null, ze = null, Pc = 0, Gr = 1 / 0, Vt = null, Cs = !1, pu = null, vn = null, Ro = !1, fn = null, Ps = 0, ki = 0, hu = null, Zo = -1, qo = 0;
  function Ve() {
    return W & 6 ? pe() : Zo !== -1 ? Zo : Zo = pe();
  }
  function xn(e) {
    return e.mode & 1 ? W & 2 && ke !== 0 ? ke & -ke : sx.transition !== null ? (qo === 0 && (qo = um()), qo) : (e = X, e !== 0 || (e = window.event, e = e === void 0 ? 16 : ym(e.type)), e) : 1;
  }
  function wt(e, t, n, r) {
    if (50 < ki)
      throw ki = 0, hu = null, Error(A(185));
    ro(e, n, r), (!(W & 2) || e !== we) && (e === we && (!(W & 2) && (Zs |= n), ge === 4 && un(e, ke)), Ge(e, r), n === 1 && W === 0 && !(t.mode & 1) && (Gr = pe() + 500, Ks && Dn()));
  }
  function Ge(e, t) {
    var n = e.callbackNode;
    s1(e, t);
    var r = ls(e, e === we ? ke : 0);
    if (r === 0)
      n !== null && Nf(n), e.callbackNode = null, e.callbackPriority = 0;
    else if (t = r & -r, e.callbackPriority !== t) {
      if (n != null && Nf(n), t === 1)
        e.tag === 0 ? ox(Ad.bind(null, e)) : Lm(Ad.bind(null, e)), tx(function() {
          !(W & 6) && Dn();
        }), n = null;
      else {
        switch (cm(r)) {
          case 1:
            n = Zu;
            break;
          case 4:
            n = am;
            break;
          case 16:
            n = as;
            break;
          case 536870912:
            n = lm;
            break;
          default:
            n = as;
        }
        n = Ry(n, _y.bind(null, e));
      }
      e.callbackPriority = t, e.callbackNode = n;
    }
  }
  function _y(e, t) {
    if (Zo = -1, qo = 0, W & 6)
      throw Error(A(327));
    var n = e.callbackNode;
    if (br() && e.callbackNode !== n)
      return null;
    var r = ls(e, e === we ? ke : 0);
    if (r === 0)
      return null;
    if (r & 30 || r & e.expiredLanes || t)
      t = ks(e, r);
    else {
      t = r;
      var i = W;
      W |= 2;
      var o = Oy();
      (we !== e || ke !== t) && (Vt = null, Gr = pe() + 500, Kn(e, t));
      do
        try {
          kx();
          break;
        } catch (a) {
          Ay(e, a);
        }
      while (1);
      cc(), Es.current = o, W = i, me !== null ? t = 0 : (we = null, ke = 0, t = ge);
    }
    if (t !== 0) {
      if (t === 2 && (i = zl(e), i !== 0 && (r = i, t = mu(e, i))), t === 1)
        throw n = Yi, Kn(e, 0), un(e, r), Ge(e, pe()), n;
      if (t === 6)
        un(e, r);
      else {
        if (i = e.current.alternate, !(r & 30) && !Cx(i) && (t = ks(e, r), t === 2 && (o = zl(e), o !== 0 && (r = o, t = mu(e, o))), t === 1))
          throw n = Yi, Kn(e, 0), un(e, r), Ge(e, pe()), n;
        switch (e.finishedWork = i, e.finishedLanes = r, t) {
          case 0:
          case 1:
            throw Error(A(345));
          case 2:
            bn(e, ze, Vt);
            break;
          case 3:
            if (un(e, r), (r & 130023424) === r && (t = Pc + 500 - pe(), 10 < t)) {
              if (ls(e, 0) !== 0)
                break;
              if (i = e.suspendedLanes, (i & r) !== r) {
                Ve(), e.pingedLanes |= e.suspendedLanes & i;
                break;
              }
              e.timeoutHandle = Yl(bn.bind(null, e, ze, Vt), t);
              break;
            }
            bn(e, ze, Vt);
            break;
          case 4:
            if (un(e, r), (r & 4194240) === r)
              break;
            for (t = e.eventTimes, i = -1; 0 < r; ) {
              var s = 31 - St(r);
              o = 1 << s, s = t[s], s > i && (i = s), r &= ~o;
            }
            if (r = i, r = pe() - r, r = (120 > r ? 120 : 480 > r ? 480 : 1080 > r ? 1080 : 1920 > r ? 1920 : 3e3 > r ? 3e3 : 4320 > r ? 4320 : 1960 * Ex(r / 1960)) - r, 10 < r) {
              e.timeoutHandle = Yl(bn.bind(null, e, ze, Vt), r);
              break;
            }
            bn(e, ze, Vt);
            break;
          case 5:
            bn(e, ze, Vt);
            break;
          default:
            throw Error(A(329));
        }
      }
    }
    return Ge(e, pe()), e.callbackNode === n ? _y.bind(null, e) : null;
  }
  function mu(e, t) {
    var n = Pi;
    return e.current.memoizedState.isDehydrated && (Kn(e, t).flags |= 256), e = ks(e, t), e !== 2 && (t = ze, ze = n, t !== null && yu(t)), e;
  }
  function yu(e) {
    ze === null ? ze = e : ze.push.apply(ze, e);
  }
  function Cx(e) {
    for (var t = e; ; ) {
      if (t.flags & 16384) {
        var n = t.updateQueue;
        if (n !== null && (n = n.stores, n !== null))
          for (var r = 0; r < n.length; r++) {
            var i = n[r], o = i.getSnapshot;
            i = i.value;
            try {
              if (!Tt(o(), i))
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
    for (t &= ~Cc, t &= ~Zs, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes; 0 < t; ) {
      var n = 31 - St(t), r = 1 << n;
      e[n] = -1, t &= ~r;
    }
  }
  function Ad(e) {
    if (W & 6)
      throw Error(A(327));
    br();
    var t = ls(e, 0);
    if (!(t & 1))
      return Ge(e, pe()), null;
    var n = ks(e, t);
    if (e.tag !== 0 && n === 2) {
      var r = zl(e);
      r !== 0 && (t = r, n = mu(e, r));
    }
    if (n === 1)
      throw n = Yi, Kn(e, 0), un(e, t), Ge(e, pe()), n;
    if (n === 6)
      throw Error(A(345));
    return e.finishedWork = e.current.alternate, e.finishedLanes = t, bn(e, ze, Vt), Ge(e, pe()), null;
  }
  function kc(e, t) {
    var n = W;
    W |= 1;
    try {
      return e(t);
    } finally {
      W = n, W === 0 && (Gr = pe() + 500, Ks && Dn());
    }
  }
  function er(e) {
    fn !== null && fn.tag === 0 && !(W & 6) && br();
    var t = W;
    W |= 1;
    var n = ct.transition, r = X;
    try {
      if (ct.transition = null, X = 1, e)
        return e();
    } finally {
      X = r, ct.transition = n, W = t, !(W & 6) && Dn();
    }
  }
  function _c() {
    Ye = Ar.current, re(Ar);
  }
  function Kn(e, t) {
    e.finishedWork = null, e.finishedLanes = 0;
    var n = e.timeoutHandle;
    if (n !== -1 && (e.timeoutHandle = -1, ex(n)), me !== null)
      for (n = me.return; n !== null; ) {
        var r = n;
        switch (ac(r), r.tag) {
          case 1:
            r = r.type.childContextTypes, r != null && ps();
            break;
          case 3:
            Hr(), re(He), re(De), yc();
            break;
          case 5:
            mc(r);
            break;
          case 4:
            Hr();
            break;
          case 13:
            re(se);
            break;
          case 19:
            re(se);
            break;
          case 10:
            fc(r.type._context);
            break;
          case 22:
          case 23:
            _c();
        }
        n = n.return;
      }
    if (we = e, me = e = Sn(e.current, null), ke = Ye = t, ge = 0, Yi = null, Cc = Zs = Jn = 0, ze = Pi = null, Hn !== null) {
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
  function Ay(e, t) {
    do {
      var n = me;
      try {
        if (cc(), Qo.current = Ts, ws) {
          for (var r = le.memoizedState; r !== null; ) {
            var i = r.queue;
            i !== null && (i.pending = null), r = r.next;
          }
          ws = !1;
        }
        if (qn = 0, Se = ye = le = null, Ei = !1, Gi = 0, Ec.current = null, n === null || n.return === null) {
          ge = 1, Yi = t, me = null;
          break;
        }
        e: {
          var o = e, s = n.return, a = n, l = t;
          if (t = ke, a.flags |= 32768, l !== null && typeof l == "object" && typeof l.then == "function") {
            var u = l, c = a, f = c.tag;
            if (!(c.mode & 1) && (f === 0 || f === 11 || f === 15)) {
              var d = c.alternate;
              d ? (c.updateQueue = d.updateQueue, c.memoizedState = d.memoizedState, c.lanes = d.lanes) : (c.updateQueue = null, c.memoizedState = null);
            }
            var h = md(s);
            if (h !== null) {
              h.flags &= -257, yd(h, s, a, o, t), h.mode & 1 && hd(o, u, t), t = h, l = u;
              var g = t.updateQueue;
              if (g === null) {
                var v = /* @__PURE__ */ new Set();
                v.add(l), t.updateQueue = v;
              } else
                g.add(l);
              break e;
            } else {
              if (!(t & 1)) {
                hd(o, u, t), Ac();
                break e;
              }
              l = Error(A(426));
            }
          } else if (oe && a.mode & 1) {
            var k = md(s);
            if (k !== null) {
              !(k.flags & 65536) && (k.flags |= 256), yd(k, s, a, o, t), lc(Wr(l, a));
              break e;
            }
          }
          o = l = Wr(l, a), ge !== 4 && (ge = 2), Pi === null ? Pi = [o] : Pi.push(o), o = s;
          do {
            switch (o.tag) {
              case 3:
                o.flags |= 65536, t &= -t, o.lanes |= t;
                var y = fy(o, l, t);
                ad(o, y);
                break e;
              case 1:
                a = l;
                var p = o.type, m = o.stateNode;
                if (!(o.flags & 128) && (typeof p.getDerivedStateFromError == "function" || m !== null && typeof m.componentDidCatch == "function" && (vn === null || !vn.has(m)))) {
                  o.flags |= 65536, t &= -t, o.lanes |= t;
                  var x = dy(o, a, t);
                  ad(o, x);
                  break e;
                }
            }
            o = o.return;
          } while (o !== null);
        }
        jy(n);
      } catch (E) {
        t = E, me === n && n !== null && (me = n = n.return);
        continue;
      }
      break;
    } while (1);
  }
  function Oy() {
    var e = Es.current;
    return Es.current = Ts, e === null ? Ts : e;
  }
  function Ac() {
    (ge === 0 || ge === 3 || ge === 2) && (ge = 4), we === null || !(Jn & 268435455) && !(Zs & 268435455) || un(we, ke);
  }
  function ks(e, t) {
    var n = W;
    W |= 2;
    var r = Oy();
    (we !== e || ke !== t) && (Vt = null, Kn(e, t));
    do
      try {
        Px();
        break;
      } catch (i) {
        Ay(e, i);
      }
    while (1);
    if (cc(), W = n, Es.current = r, me !== null)
      throw Error(A(261));
    return we = null, ke = 0, ge;
  }
  function Px() {
    for (; me !== null; )
      Fy(me);
  }
  function kx() {
    for (; me !== null && !Z0(); )
      Fy(me);
  }
  function Fy(e) {
    var t = My(e.alternate, e, Ye);
    e.memoizedProps = e.pendingProps, t === null ? jy(e) : me = t, Ec.current = null;
  }
  function jy(e) {
    var t = e;
    do {
      var n = t.alternate;
      if (e = t.return, t.flags & 32768) {
        if (n = xx(n, t), n !== null) {
          n.flags &= 32767, me = n;
          return;
        }
        if (e !== null)
          e.flags |= 32768, e.subtreeFlags = 0, e.deletions = null;
        else {
          ge = 6, me = null;
          return;
        }
      } else if (n = vx(n, t, Ye), n !== null) {
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
    var r = X, i = ct.transition;
    try {
      ct.transition = null, X = 1, _x(e, t, n, r);
    } finally {
      ct.transition = i, X = r;
    }
    return null;
  }
  function _x(e, t, n, r) {
    do
      br();
    while (fn !== null);
    if (W & 6)
      throw Error(A(327));
    n = e.finishedWork;
    var i = e.finishedLanes;
    if (n === null)
      return null;
    if (e.finishedWork = null, e.finishedLanes = 0, n === e.current)
      throw Error(A(177));
    e.callbackNode = null, e.callbackPriority = 0;
    var o = n.lanes | n.childLanes;
    if (a1(e, o), e === we && (me = we = null, ke = 0), !(n.subtreeFlags & 2064) && !(n.flags & 2064) || Ro || (Ro = !0, Ry(as, function() {
      return br(), null;
    })), o = (n.flags & 15990) !== 0, n.subtreeFlags & 15990 || o) {
      o = ct.transition, ct.transition = null;
      var s = X;
      X = 1;
      var a = W;
      W |= 4, Ec.current = null, wx(e, n), Py(n, e), K1(Kl), us = !!Gl, Kl = Gl = null, e.current = n, Tx(n), q0(), W = a, X = s, ct.transition = o;
    } else
      e.current = n;
    if (Ro && (Ro = !1, fn = e, Ps = i), o = e.pendingLanes, o === 0 && (vn = null), t1(n.stateNode), Ge(e, pe()), t !== null)
      for (r = e.onRecoverableError, n = 0; n < t.length; n++)
        i = t[n], r(i.value, { componentStack: i.stack, digest: i.digest });
    if (Cs)
      throw Cs = !1, e = pu, pu = null, e;
    return Ps & 1 && e.tag !== 0 && br(), o = e.pendingLanes, o & 1 ? e === hu ? ki++ : (ki = 0, hu = e) : ki = 0, Dn(), null;
  }
  function br() {
    if (fn !== null) {
      var e = cm(Ps), t = ct.transition, n = X;
      try {
        if (ct.transition = null, X = 16 > e ? 16 : e, fn === null)
          var r = !1;
        else {
          if (e = fn, fn = null, Ps = 0, W & 6)
            throw Error(A(331));
          var i = W;
          for (W |= 4, M = e.current; M !== null; ) {
            var o = M, s = o.child;
            if (M.flags & 16) {
              var a = o.deletions;
              if (a !== null) {
                for (var l = 0; l < a.length; l++) {
                  var u = a[l];
                  for (M = u; M !== null; ) {
                    var c = M;
                    switch (c.tag) {
                      case 0:
                      case 11:
                      case 15:
                        Ci(8, c, o);
                    }
                    var f = c.child;
                    if (f !== null)
                      f.return = c, M = f;
                    else
                      for (; M !== null; ) {
                        c = M;
                        var d = c.sibling, h = c.return;
                        if (Ty(c), c === u) {
                          M = null;
                          break;
                        }
                        if (d !== null) {
                          d.return = h, M = d;
                          break;
                        }
                        M = h;
                      }
                  }
                }
                var g = o.alternate;
                if (g !== null) {
                  var v = g.child;
                  if (v !== null) {
                    g.child = null;
                    do {
                      var k = v.sibling;
                      v.sibling = null, v = k;
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
                        Ci(9, o, o.return);
                    }
                  var y = o.sibling;
                  if (y !== null) {
                    y.return = o.return, M = y;
                    break e;
                  }
                  M = o.return;
                }
          }
          var p = e.current;
          for (M = p; M !== null; ) {
            s = M;
            var m = s.child;
            if (s.subtreeFlags & 2064 && m !== null)
              m.return = s, M = m;
            else
              e:
                for (s = p; M !== null; ) {
                  if (a = M, a.flags & 2048)
                    try {
                      switch (a.tag) {
                        case 0:
                        case 11:
                        case 15:
                          Xs(9, a);
                      }
                    } catch (E) {
                      ce(a, a.return, E);
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
          if (W = i, Dn(), Ot && typeof Ot.onPostCommitFiberRoot == "function")
            try {
              Ot.onPostCommitFiberRoot(Bs, e);
            } catch {
            }
          r = !0;
        }
        return r;
      } finally {
        X = n, ct.transition = t;
      }
    }
    return !1;
  }
  function Od(e, t, n) {
    t = Wr(n, t), t = fy(e, t, 1), e = gn(e, t, 1), t = Ve(), e !== null && (ro(e, 1, t), Ge(e, t));
  }
  function ce(e, t, n) {
    if (e.tag === 3)
      Od(e, e, n);
    else
      for (; t !== null; ) {
        if (t.tag === 3) {
          Od(t, e, n);
          break;
        } else if (t.tag === 1) {
          var r = t.stateNode;
          if (typeof t.type.getDerivedStateFromError == "function" || typeof r.componentDidCatch == "function" && (vn === null || !vn.has(r))) {
            e = Wr(n, e), e = dy(t, e, 1), t = gn(t, e, 1), e = Ve(), t !== null && (ro(t, 1, e), Ge(t, e));
            break;
          }
        }
        t = t.return;
      }
  }
  function Ax(e, t, n) {
    var r = e.pingCache;
    r !== null && r.delete(t), t = Ve(), e.pingedLanes |= e.suspendedLanes & n, we === e && (ke & n) === n && (ge === 4 || ge === 3 && (ke & 130023424) === ke && 500 > pe() - Pc ? Kn(e, 0) : Cc |= n), Ge(e, t);
  }
  function Dy(e, t) {
    t === 0 && (e.mode & 1 ? (t = Co, Co <<= 1, !(Co & 130023424) && (Co = 4194304)) : t = 1);
    var n = Ve();
    e = Yt(e, t), e !== null && (ro(e, t, n), Ge(e, n));
  }
  function Ox(e) {
    var t = e.memoizedState, n = 0;
    t !== null && (n = t.retryLane), Dy(e, n);
  }
  function Fx(e, t) {
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
    r !== null && r.delete(t), Dy(e, n);
  }
  var My;
  My = function(e, t, n) {
    if (e !== null)
      if (e.memoizedProps !== t.pendingProps || He.current)
        Ue = !0;
      else {
        if (!(e.lanes & n) && !(t.flags & 128))
          return Ue = !1, gx(e, t, n);
        Ue = !!(e.flags & 131072);
      }
    else
      Ue = !1, oe && t.flags & 1048576 && Nm(t, ys, t.index);
    switch (t.lanes = 0, t.tag) {
      case 2:
        var r = t.type;
        Xo(e, t), e = t.pendingProps;
        var i = zr(t, De.current);
        $r(t, n), i = vc(null, t, r, e, i, n);
        var o = xc();
        return t.flags |= 1, typeof i == "object" && i !== null && typeof i.render == "function" && i.$$typeof === void 0 ? (t.tag = 1, t.memoizedState = null, t.updateQueue = null, We(r) ? (o = !0, hs(t)) : o = !1, t.memoizedState = i.state !== null && i.state !== void 0 ? i.state : null, pc(t), i.updater = Qs, t.stateNode = i, i._reactInternals = t, nu(t, r, e, n), t = ou(null, t, r, !0, o, n)) : (t.tag = 0, oe && o && sc(t), Ne(null, t, i, n), t = t.child), t;
      case 16:
        r = t.elementType;
        e: {
          switch (Xo(e, t), e = t.pendingProps, i = r._init, r = i(r._payload), t.type = r, i = t.tag = Dx(r), e = gt(r, e), i) {
            case 0:
              t = iu(null, t, r, e, n);
              break e;
            case 1:
              t = xd(null, t, r, e, n);
              break e;
            case 11:
              t = gd(null, t, r, e, n);
              break e;
            case 14:
              t = vd(null, t, r, gt(r.type, e), n);
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
        return r = t.type, i = t.pendingProps, i = t.elementType === r ? i : gt(r, i), iu(e, t, r, i, n);
      case 1:
        return r = t.type, i = t.pendingProps, i = t.elementType === r ? i : gt(r, i), xd(e, t, r, i, n);
      case 3:
        e: {
          if (yy(t), e === null)
            throw Error(A(387));
          r = t.pendingProps, o = t.memoizedState, i = o.element, Im(e, t), xs(t, r, null, n);
          var s = t.memoizedState;
          if (r = s.element, o.isDehydrated)
            if (o = { element: r, isDehydrated: !1, cache: s.cache, pendingSuspenseBoundaries: s.pendingSuspenseBoundaries, transitions: s.transitions }, t.updateQueue.baseState = o, t.memoizedState = o, t.flags & 256) {
              i = Wr(Error(A(423)), t), t = Sd(e, t, r, n, i);
              break e;
            } else if (r !== i) {
              i = Wr(Error(A(424)), t), t = Sd(e, t, r, n, i);
              break e;
            } else
              for (Xe = yn(t.stateNode.containerInfo.firstChild), Je = t, oe = !0, xt = null, n = Hm(t, null, r, n), t.child = n; n; )
                n.flags = n.flags & -3 | 4096, n = n.sibling;
          else {
            if (Br(), r === i) {
              t = Xt(e, t, n);
              break e;
            }
            Ne(e, t, r, n);
          }
          t = t.child;
        }
        return t;
      case 5:
        return Wm(t), e === null && Jl(t), r = t.type, i = t.pendingProps, o = e !== null ? e.memoizedProps : null, s = i.children, Ql(r, i) ? s = null : o !== null && Ql(r, o) && (t.flags |= 32), my(e, t), Ne(e, t, s, n), t.child;
      case 6:
        return e === null && Jl(t), null;
      case 13:
        return gy(e, t, n);
      case 4:
        return hc(t, t.stateNode.containerInfo), r = t.pendingProps, e === null ? t.child = Ur(t, null, r, n) : Ne(e, t, r, n), t.child;
      case 11:
        return r = t.type, i = t.pendingProps, i = t.elementType === r ? i : gt(r, i), gd(e, t, r, i, n);
      case 7:
        return Ne(e, t, t.pendingProps, n), t.child;
      case 8:
        return Ne(e, t, t.pendingProps.children, n), t.child;
      case 12:
        return Ne(e, t, t.pendingProps.children, n), t.child;
      case 10:
        e: {
          if (r = t.type._context, i = t.pendingProps, o = t.memoizedProps, s = i.value, J(gs, r._currentValue), r._currentValue = s, o !== null)
            if (Tt(o.value, s)) {
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
                          var c = u.pending;
                          c === null ? l.next = l : (l.next = c.next, c.next = l), u.pending = l;
                        }
                      }
                      o.lanes |= n, l = o.alternate, l !== null && (l.lanes |= n), eu(
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
                  s.lanes |= n, a = s.alternate, a !== null && (a.lanes |= n), eu(s, n, t), s = o.sibling;
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
          Ne(e, t, i.children, n), t = t.child;
        }
        return t;
      case 9:
        return i = t.type, r = t.pendingProps.children, $r(t, n), i = ft(i), r = r(i), t.flags |= 1, Ne(e, t, r, n), t.child;
      case 14:
        return r = t.type, i = gt(r, t.pendingProps), i = gt(r.type, i), vd(e, t, r, i, n);
      case 15:
        return py(e, t, t.type, t.pendingProps, n);
      case 17:
        return r = t.type, i = t.pendingProps, i = t.elementType === r ? i : gt(r, i), Xo(e, t), t.tag = 1, We(r) ? (e = !0, hs(t)) : e = !1, $r(t, n), Bm(t, r, i), nu(t, r, i, n), ou(null, t, r, !0, e, n);
      case 19:
        return vy(e, t, n);
      case 22:
        return hy(e, t, n);
    }
    throw Error(A(156, t.tag));
  };
  function Ry(e, t) {
    return sm(e, t);
  }
  function jx(e, t, n, r) {
    this.tag = e, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = r, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function ut(e, t, n, r) {
    return new jx(e, t, n, r);
  }
  function Oc(e) {
    return e = e.prototype, !(!e || !e.isReactComponent);
  }
  function Dx(e) {
    if (typeof e == "function")
      return Oc(e) ? 1 : 0;
    if (e != null) {
      if (e = e.$$typeof, e === Qu)
        return 11;
      if (e === Yu)
        return 14;
    }
    return 2;
  }
  function Sn(e, t) {
    var n = e.alternate;
    return n === null ? (n = ut(e.tag, t, e.key, e.mode), n.elementType = e.elementType, n.type = e.type, n.stateNode = e.stateNode, n.alternate = e, e.alternate = n) : (n.pendingProps = t, n.type = e.type, n.flags = 0, n.subtreeFlags = 0, n.deletions = null), n.flags = e.flags & 14680064, n.childLanes = e.childLanes, n.lanes = e.lanes, n.child = e.child, n.memoizedProps = e.memoizedProps, n.memoizedState = e.memoizedState, n.updateQueue = e.updateQueue, t = e.dependencies, n.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }, n.sibling = e.sibling, n.index = e.index, n.ref = e.ref, n;
  }
  function Jo(e, t, n, r, i, o) {
    var s = 2;
    if (r = e, typeof e == "function")
      Oc(e) && (s = 1);
    else if (typeof e == "string")
      s = 5;
    else
      e:
        switch (e) {
          case vr:
            return Qn(n.children, i, o, t);
          case Ku:
            s = 8, i |= 8;
            break;
          case kl:
            return e = ut(12, n, t, i | 2), e.elementType = kl, e.lanes = o, e;
          case _l:
            return e = ut(13, n, t, i), e.elementType = _l, e.lanes = o, e;
          case Al:
            return e = ut(19, n, t, i), e.elementType = Al, e.lanes = o, e;
          case Uh:
            return qs(n, i, o, t);
          default:
            if (typeof e == "object" && e !== null)
              switch (e.$$typeof) {
                case zh:
                  s = 10;
                  break e;
                case Bh:
                  s = 9;
                  break e;
                case Qu:
                  s = 11;
                  break e;
                case Yu:
                  s = 14;
                  break e;
                case rn:
                  s = 16, r = null;
                  break e;
              }
            throw Error(A(130, e == null ? e : typeof e, ""));
        }
    return t = ut(s, n, t, i), t.elementType = e, t.type = r, t.lanes = o, t;
  }
  function Qn(e, t, n, r) {
    return e = ut(7, e, r, t), e.lanes = n, e;
  }
  function qs(e, t, n, r) {
    return e = ut(22, e, r, t), e.elementType = Uh, e.lanes = n, e.stateNode = { isHidden: !1 }, e;
  }
  function nl(e, t, n) {
    return e = ut(6, e, null, t), e.lanes = n, e;
  }
  function rl(e, t, n) {
    return t = ut(4, e.children !== null ? e.children : [], e.key, t), t.lanes = n, t.stateNode = { containerInfo: e.containerInfo, pendingChildren: null, implementation: e.implementation }, t;
  }
  function Mx(e, t, n, r, i) {
    this.tag = t, this.containerInfo = e, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = Va(0), this.expirationTimes = Va(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Va(0), this.identifierPrefix = r, this.onRecoverableError = i, this.mutableSourceEagerHydrationData = null;
  }
  function Fc(e, t, n, r, i, o, s, a, l) {
    return e = new Mx(e, t, n, a, l), t === 1 ? (t = 1, o === !0 && (t |= 8)) : t = 0, o = ut(3, null, null, t), e.current = o, o.stateNode = e, o.memoizedState = { element: r, isDehydrated: n, cache: null, transitions: null, pendingSuspenseBoundaries: null }, pc(o), e;
  }
  function Rx(e, t, n) {
    var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return { $$typeof: gr, key: r == null ? null : "" + r, children: e, containerInfo: t, implementation: n };
  }
  function Ly(e) {
    if (!e)
      return kn;
    e = e._reactInternals;
    e: {
      if (ir(e) !== e || e.tag !== 1)
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
        return Rm(e, n, t);
    }
    return t;
  }
  function Ny(e, t, n, r, i, o, s, a, l) {
    return e = Fc(n, r, !0, e, i, o, s, a, l), e.context = Ly(null), n = e.current, r = Ve(), i = xn(n), o = Ht(r, i), o.callback = t ?? null, gn(n, o, i), e.current.lanes = i, ro(e, i, r), Ge(e, r), e;
  }
  function Js(e, t, n, r) {
    var i = t.current, o = Ve(), s = xn(i);
    return n = Ly(n), t.context === null ? t.context = n : t.pendingContext = n, t = Ht(o, s), t.payload = { element: e }, r = r === void 0 ? null : r, r !== null && (t.callback = r), e = gn(i, t, s), e !== null && (wt(e, i, s, o), Ko(e, i, s)), s;
  }
  function _s(e) {
    if (e = e.current, !e.child)
      return null;
    switch (e.child.tag) {
      case 5:
        return e.child.stateNode;
      default:
        return e.child.stateNode;
    }
  }
  function Fd(e, t) {
    if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
      var n = e.retryLane;
      e.retryLane = n !== 0 && n < t ? n : t;
    }
  }
  function jc(e, t) {
    Fd(e, t), (e = e.alternate) && Fd(e, t);
  }
  function Lx() {
    return null;
  }
  var Vy = typeof reportError == "function" ? reportError : function(e) {
    console.error(e);
  };
  function Dc(e) {
    this._internalRoot = e;
  }
  ea.prototype.render = Dc.prototype.render = function(e) {
    var t = this._internalRoot;
    if (t === null)
      throw Error(A(409));
    Js(e, t, null, null);
  };
  ea.prototype.unmount = Dc.prototype.unmount = function() {
    var e = this._internalRoot;
    if (e !== null) {
      this._internalRoot = null;
      var t = e.containerInfo;
      er(function() {
        Js(null, e, null, null);
      }), t[Qt] = null;
    }
  };
  function ea(e) {
    this._internalRoot = e;
  }
  ea.prototype.unstable_scheduleHydration = function(e) {
    if (e) {
      var t = pm();
      e = { blockedOn: null, target: e, priority: t };
      for (var n = 0; n < ln.length && t !== 0 && t < ln[n].priority; n++)
        ;
      ln.splice(n, 0, e), n === 0 && mm(e);
    }
  };
  function Mc(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11);
  }
  function ta(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "));
  }
  function jd() {
  }
  function Nx(e, t, n, r, i) {
    if (i) {
      if (typeof r == "function") {
        var o = r;
        r = function() {
          var u = _s(s);
          o.call(u);
        };
      }
      var s = Ny(t, r, e, 0, null, !1, !1, "", jd);
      return e._reactRootContainer = s, e[Qt] = s.current, zi(e.nodeType === 8 ? e.parentNode : e), er(), s;
    }
    for (; i = e.lastChild; )
      e.removeChild(i);
    if (typeof r == "function") {
      var a = r;
      r = function() {
        var u = _s(l);
        a.call(u);
      };
    }
    var l = Fc(e, 0, !1, null, null, !1, !1, "", jd);
    return e._reactRootContainer = l, e[Qt] = l.current, zi(e.nodeType === 8 ? e.parentNode : e), er(function() {
      Js(t, l, n, r);
    }), l;
  }
  function na(e, t, n, r, i) {
    var o = n._reactRootContainer;
    if (o) {
      var s = o;
      if (typeof i == "function") {
        var a = i;
        i = function() {
          var l = _s(s);
          a.call(l);
        };
      }
      Js(t, s, e, i);
    } else
      s = Nx(n, t, e, i, r);
    return _s(s);
  }
  fm = function(e) {
    switch (e.tag) {
      case 3:
        var t = e.stateNode;
        if (t.current.memoizedState.isDehydrated) {
          var n = mi(t.pendingLanes);
          n !== 0 && (qu(t, n | 1), Ge(t, pe()), !(W & 6) && (Gr = pe() + 500, Dn()));
        }
        break;
      case 13:
        er(function() {
          var r = Yt(e, 1);
          if (r !== null) {
            var i = Ve();
            wt(r, e, 1, i);
          }
        }), jc(e, 1);
    }
  };
  Ju = function(e) {
    if (e.tag === 13) {
      var t = Yt(e, 134217728);
      if (t !== null) {
        var n = Ve();
        wt(t, e, 134217728, n);
      }
      jc(e, 134217728);
    }
  };
  dm = function(e) {
    if (e.tag === 13) {
      var t = xn(e), n = Yt(e, t);
      if (n !== null) {
        var r = Ve();
        wt(n, e, t, r);
      }
      jc(e, t);
    }
  };
  pm = function() {
    return X;
  };
  hm = function(e, t) {
    var n = X;
    try {
      return X = e, t();
    } finally {
      X = n;
    }
  };
  $l = function(e, t, n) {
    switch (t) {
      case "input":
        if (jl(e, n), t = n.name, n.type === "radio" && t != null) {
          for (n = e; n.parentNode; )
            n = n.parentNode;
          for (n = n.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'), t = 0; t < n.length; t++) {
            var r = n[t];
            if (r !== e && r.form === e.form) {
              var i = Gs(r);
              if (!i)
                throw Error(A(90));
              Wh(r), jl(r, i);
            }
          }
        }
        break;
      case "textarea":
        Kh(e, n);
        break;
      case "select":
        t = n.value, t != null && Rr(e, !!n.multiple, t, !1);
    }
  };
  em = kc;
  tm = er;
  var Vx = { usingClientEntryPoint: !1, Events: [oo, Tr, Gs, qh, Jh, kc] }, ui = { findFiberByHostInstance: Un, bundleType: 0, version: "18.2.0", rendererPackageName: "react-dom" }, $x = { bundleType: ui.bundleType, version: ui.version, rendererPackageName: ui.rendererPackageName, rendererConfig: ui.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: qt.ReactCurrentDispatcher, findHostInstanceByFiber: function(e) {
    return e = im(e), e === null ? null : e.stateNode;
  }, findFiberByHostInstance: ui.findFiberByHostInstance || Lx, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.2.0-next-9e3b772b8-20220608" };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var Lo = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Lo.isDisabled && Lo.supportsFiber)
      try {
        Bs = Lo.inject($x), Ot = Lo;
      } catch {
      }
  }
  nt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Vx;
  nt.createPortal = function(e, t) {
    var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!Mc(t))
      throw Error(A(200));
    return Rx(e, t, null, n);
  };
  nt.createRoot = function(e, t) {
    if (!Mc(e))
      throw Error(A(299));
    var n = !1, r = "", i = Vy;
    return t != null && (t.unstable_strictMode === !0 && (n = !0), t.identifierPrefix !== void 0 && (r = t.identifierPrefix), t.onRecoverableError !== void 0 && (i = t.onRecoverableError)), t = Fc(e, 1, !1, null, null, n, !1, r, i), e[Qt] = t.current, zi(e.nodeType === 8 ? e.parentNode : e), new Dc(t);
  };
  nt.findDOMNode = function(e) {
    if (e == null)
      return null;
    if (e.nodeType === 1)
      return e;
    var t = e._reactInternals;
    if (t === void 0)
      throw typeof e.render == "function" ? Error(A(188)) : (e = Object.keys(e).join(","), Error(A(268, e)));
    return e = im(t), e = e === null ? null : e.stateNode, e;
  };
  nt.flushSync = function(e) {
    return er(e);
  };
  nt.hydrate = function(e, t, n) {
    if (!ta(t))
      throw Error(A(200));
    return na(null, e, t, !0, n);
  };
  nt.hydrateRoot = function(e, t, n) {
    if (!Mc(e))
      throw Error(A(405));
    var r = n != null && n.hydratedSources || null, i = !1, o = "", s = Vy;
    if (n != null && (n.unstable_strictMode === !0 && (i = !0), n.identifierPrefix !== void 0 && (o = n.identifierPrefix), n.onRecoverableError !== void 0 && (s = n.onRecoverableError)), t = Ny(t, null, e, 1, n ?? null, i, !1, o, s), e[Qt] = t.current, zi(e), r)
      for (e = 0; e < r.length; e++)
        n = r[e], i = n._getVersion, i = i(n._source), t.mutableSourceEagerHydrationData == null ? t.mutableSourceEagerHydrationData = [n, i] : t.mutableSourceEagerHydrationData.push(
          n,
          i
        );
    return new ea(t);
  };
  nt.render = function(e, t, n) {
    if (!ta(t))
      throw Error(A(200));
    return na(null, e, t, !1, n);
  };
  nt.unmountComponentAtNode = function(e) {
    if (!ta(e))
      throw Error(A(40));
    return e._reactRootContainer ? (er(function() {
      na(null, null, e, !1, function() {
        e._reactRootContainer = null, e[Qt] = null;
      });
    }), !0) : !1;
  };
  nt.unstable_batchedUpdates = kc;
  nt.unstable_renderSubtreeIntoContainer = function(e, t, n, r) {
    if (!ta(n))
      throw Error(A(200));
    if (e == null || e._reactInternals === void 0)
      throw Error(A(38));
    return na(e, t, n, !1, r);
  };
  nt.version = "18.2.0-next-9e3b772b8-20220608";
  function $y() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE($y);
      } catch (e) {
        console.error(e);
      }
  }
  $y(), Nh.exports = nt;
  var bx = Nh.exports, Dd = bx;
  Cl.createRoot = Dd.createRoot, Cl.hydrateRoot = Dd.hydrateRoot;
  function or(e) {
    this._maxSize = e, this.clear();
  }
  or.prototype.clear = function() {
    this._size = 0, this._values = /* @__PURE__ */ Object.create(null);
  };
  or.prototype.get = function(e) {
    return this._values[e];
  };
  or.prototype.set = function(e, t) {
    return this._size >= this._maxSize && this.clear(), e in this._values || this._size++, this._values[e] = t;
  };
  var Ix = /[^.^\]^[]+|(?=\[\]|\.\.)/g, by = /^\d+$/, zx = /^\d/, Bx = /[~`!#$%\^&*+=\-\[\]\\';,/{}|\\":<>\?]/g, Ux = /^\s*(['"]?)(.*?)(\1)\s*$/, Rc = 512, Md = new or(Rc), Rd = new or(Rc), Ld = new or(Rc), Yn = {
    Cache: or,
    split: gu,
    normalizePath: il,
    setter: function(e) {
      var t = il(e);
      return Rd.get(e) || Rd.set(e, function(r, i) {
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
      var n = il(e);
      return Ld.get(e) || Ld.set(e, function(i) {
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
        return t + (Lc(n) || by.test(n) ? "[" + n + "]" : (t ? "." : "") + n);
      }, "");
    },
    forEach: function(e, t, n) {
      Hx(Array.isArray(e) ? e : gu(e), t, n);
    }
  };
  function il(e) {
    return Md.get(e) || Md.set(
      e,
      gu(e).map(function(t) {
        return t.replace(Ux, "$2");
      })
    );
  }
  function gu(e) {
    return e.match(Ix) || [""];
  }
  function Hx(e, t, n) {
    var r = e.length, i, o, s, a;
    for (o = 0; o < r; o++)
      i = e[o], i && (Kx(i) && (i = '"' + i + '"'), a = Lc(i), s = !a && /^\d+$/.test(i), t.call(n, i, a, s, o, e));
  }
  function Lc(e) {
    return typeof e == "string" && e && ["'", '"'].indexOf(e.charAt(0)) !== -1;
  }
  function Wx(e) {
    return e.match(zx) && !e.match(by);
  }
  function Gx(e) {
    return Bx.test(e);
  }
  function Kx(e) {
    return !Lc(e) && (Wx(e) || Gx(e));
  }
  const Qx = /[A-Z\xc0-\xd6\xd8-\xde]?[a-z\xdf-\xf6\xf8-\xff]+(?:['’](?:d|ll|m|re|s|t|ve))?(?=[\xac\xb1\xd7\xf7\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\xbf\u2000-\u206f \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000]|[A-Z\xc0-\xd6\xd8-\xde]|$)|(?:[A-Z\xc0-\xd6\xd8-\xde]|[^\ud800-\udfff\xac\xb1\xd7\xf7\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\xbf\u2000-\u206f \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\d+\u2700-\u27bfa-z\xdf-\xf6\xf8-\xffA-Z\xc0-\xd6\xd8-\xde])+(?:['’](?:D|LL|M|RE|S|T|VE))?(?=[\xac\xb1\xd7\xf7\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\xbf\u2000-\u206f \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000]|[A-Z\xc0-\xd6\xd8-\xde](?:[a-z\xdf-\xf6\xf8-\xff]|[^\ud800-\udfff\xac\xb1\xd7\xf7\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\xbf\u2000-\u206f \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\d+\u2700-\u27bfa-z\xdf-\xf6\xf8-\xffA-Z\xc0-\xd6\xd8-\xde])|$)|[A-Z\xc0-\xd6\xd8-\xde]?(?:[a-z\xdf-\xf6\xf8-\xff]|[^\ud800-\udfff\xac\xb1\xd7\xf7\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\xbf\u2000-\u206f \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\d+\u2700-\u27bfa-z\xdf-\xf6\xf8-\xffA-Z\xc0-\xd6\xd8-\xde])+(?:['’](?:d|ll|m|re|s|t|ve))?|[A-Z\xc0-\xd6\xd8-\xde]+(?:['’](?:D|LL|M|RE|S|T|VE))?|\d*(?:1ST|2ND|3RD|(?![123])\dTH)(?=\b|[a-z_])|\d*(?:1st|2nd|3rd|(?![123])\dth)(?=\b|[A-Z_])|\d+|(?:[\u2700-\u27bf]|(?:\ud83c[\udde6-\uddff]){2}|[\ud800-\udbff][\udc00-\udfff])[\ufe0e\ufe0f]?(?:[\u0300-\u036f\ufe20-\ufe2f\u20d0-\u20ff]|\ud83c[\udffb-\udfff])?(?:\u200d(?:[^\ud800-\udfff]|(?:\ud83c[\udde6-\uddff]){2}|[\ud800-\udbff][\udc00-\udfff])[\ufe0e\ufe0f]?(?:[\u0300-\u036f\ufe20-\ufe2f\u20d0-\u20ff]|\ud83c[\udffb-\udfff])?)*/g, ra = (e) => e.match(Qx) || [], ia = (e) => e[0].toUpperCase() + e.slice(1), Nc = (e, t) => ra(e).join(t).toLowerCase(), Iy = (e) => ra(e).reduce(
    (t, n) => `${t}${t ? n[0].toUpperCase() + n.slice(1).toLowerCase() : n.toLowerCase()}`,
    ""
  ), Yx = (e) => ia(Iy(e)), Xx = (e) => Nc(e, "_"), Zx = (e) => Nc(e, "-"), qx = (e) => ia(Nc(e, " ")), Jx = (e) => ra(e).map(ia).join(" ");
  var ol = {
    words: ra,
    upperFirst: ia,
    camelCase: Iy,
    pascalCase: Yx,
    snakeCase: Xx,
    kebabCase: Zx,
    sentenceCase: qx,
    titleCase: Jx
  }, Vc = { exports: {} };
  Vc.exports = function(e) {
    return zy(eS(e), e);
  };
  Vc.exports.array = zy;
  function zy(e, t) {
    var n = e.length, r = new Array(n), i = {}, o = n, s = tS(t), a = nS(e);
    for (t.forEach(function(u) {
      if (!a.has(u[0]) || !a.has(u[1]))
        throw new Error("Unknown node. There is an unknown node in the supplied edges.");
    }); o--; )
      i[o] || l(e[o], o, /* @__PURE__ */ new Set());
    return r;
    function l(u, c, f) {
      if (f.has(u)) {
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
      if (!i[c]) {
        i[c] = !0;
        var h = s.get(u) || /* @__PURE__ */ new Set();
        if (h = Array.from(h), c = h.length) {
          f.add(u);
          do {
            var g = h[--c];
            l(g, a.get(g), f);
          } while (c);
          f.delete(u);
        }
        r[--n] = u;
      }
    }
  }
  function eS(e) {
    for (var t = /* @__PURE__ */ new Set(), n = 0, r = e.length; n < r; n++) {
      var i = e[n];
      t.add(i[0]), t.add(i[1]);
    }
    return Array.from(t);
  }
  function tS(e) {
    for (var t = /* @__PURE__ */ new Map(), n = 0, r = e.length; n < r; n++) {
      var i = e[n];
      t.has(i[0]) || t.set(i[0], /* @__PURE__ */ new Set()), t.has(i[1]) || t.set(i[1], /* @__PURE__ */ new Set()), t.get(i[0]).add(i[1]);
    }
    return t;
  }
  function nS(e) {
    for (var t = /* @__PURE__ */ new Map(), n = 0, r = e.length; n < r; n++)
      t.set(e[n], n);
    return t;
  }
  var rS = Vc.exports;
  const iS = /* @__PURE__ */ Is(rS), oS = Object.prototype.toString, sS = Error.prototype.toString, aS = RegExp.prototype.toString, lS = typeof Symbol < "u" ? Symbol.prototype.toString : () => "", uS = /^Symbol\((.*)\)(.*)$/;
  function cS(e) {
    return e != +e ? "NaN" : e === 0 && 1 / e < 0 ? "-0" : "" + e;
  }
  function Nd(e, t = !1) {
    if (e == null || e === !0 || e === !1)
      return "" + e;
    const n = typeof e;
    if (n === "number")
      return cS(e);
    if (n === "string")
      return t ? `"${e}"` : e;
    if (n === "function")
      return "[Function " + (e.name || "anonymous") + "]";
    if (n === "symbol")
      return lS.call(e).replace(uS, "Symbol($1)");
    const r = oS.call(e).slice(8, -1);
    return r === "Date" ? isNaN(e.getTime()) ? "" + e : e.toISOString(e) : r === "Error" || e instanceof Error ? "[" + sS.call(e) + "]" : r === "RegExp" ? aS.call(e) : null;
  }
  function wn(e, t) {
    let n = Nd(e, t);
    return n !== null ? n : JSON.stringify(e, function(r, i) {
      let o = Nd(this[r], t);
      return o !== null ? o : i;
    }, 2);
  }
  function By(e) {
    return e == null ? [] : [].concat(e);
  }
  let Uy, fS = /\$\{\s*(\w+)\s*\}/g;
  Uy = Symbol.toStringTag;
  class Be extends Error {
    static formatError(t, n) {
      const r = n.label || n.path || "this";
      return r !== n.path && (n = Object.assign({}, n, {
        path: r
      })), typeof t == "string" ? t.replace(fS, (i, o) => wn(n[o])) : typeof t == "function" ? t(n) : t;
    }
    static isError(t) {
      return t && t.name === "ValidationError";
    }
    constructor(t, n, r, i, o) {
      super(), this.value = void 0, this.path = void 0, this.type = void 0, this.errors = void 0, this.params = void 0, this.inner = void 0, this[Uy] = "Error", this.name = "ValidationError", this.value = n, this.path = r, this.type = i, this.errors = [], this.inner = [], By(t).forEach((s) => {
        if (Be.isError(s)) {
          this.errors.push(...s.errors);
          const a = s.inner.length ? s.inner : [s];
          this.inner.push(...a);
        } else
          this.errors.push(s);
      }), this.message = this.errors.length > 1 ? `${this.errors.length} errors occurred` : this.errors[0], !o && Error.captureStackTrace && Error.captureStackTrace(this, Be);
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
  }, yt = {
    length: "${path} must be exactly ${length} characters",
    min: "${path} must be at least ${min} characters",
    max: "${path} must be at most ${max} characters",
    matches: '${path} must match the following: "${regex}"',
    email: "${path} must be a valid email",
    url: "${path} must be a valid URL",
    uuid: "${path} must be a valid UUID",
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
  }, vu = {
    min: "${path} field must be later than ${min}",
    max: "${path} field must be at earlier than ${max}"
  }, dS = {
    isValue: "${path} field must be ${value}"
  }, xu = {
    noUnknown: "${path} field has unspecified keys: ${unknown}"
  }, pS = {
    min: "${path} field must have at least ${min} items",
    max: "${path} field must have less than or equal to ${max} items",
    length: "${path} must have ${length} items"
  }, hS = {
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
    string: yt,
    number: tn,
    date: vu,
    object: xu,
    array: pS,
    boolean: dS,
    tuple: hS
  });
  const $c = (e) => e && e.__isYupSchema__;
  class As {
    static fromOptions(t, n) {
      if (!n.then && !n.otherwise)
        throw new TypeError("either `then:` or `otherwise:` is required for `when()` conditions");
      let {
        is: r,
        then: i,
        otherwise: o
      } = n, s = typeof r == "function" ? r : (...a) => a.every((l) => l === r);
      return new As(t, (a, l) => {
        var u;
        let c = s(...a) ? i : o;
        return (u = c == null ? void 0 : c(l)) != null ? u : l;
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
      if (!$c(i))
        throw new TypeError("conditions must return a schema object");
      return i.resolve(n);
    }
  }
  const No = {
    context: "$",
    value: "."
  };
  class sr {
    constructor(t, n = {}) {
      if (this.key = void 0, this.isContext = void 0, this.isValue = void 0, this.isSibling = void 0, this.path = void 0, this.getter = void 0, this.map = void 0, typeof t != "string")
        throw new TypeError("ref must be a string, got: " + t);
      if (this.key = t.trim(), t === "")
        throw new TypeError("ref must be a non-empty string");
      this.isContext = this.key[0] === No.context, this.isValue = this.key[0] === No.value, this.isSibling = !this.isContext && !this.isValue;
      let r = this.isContext ? No.context : this.isValue ? No.value : "";
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
  sr.prototype.__isYupRef = !0;
  const zt = (e) => e == null;
  function mr(e) {
    function t({
      value: n,
      path: r = "",
      options: i,
      originalValue: o,
      schema: s
    }, a, l) {
      const {
        name: u,
        test: c,
        params: f,
        message: d,
        skipAbsent: h
      } = e;
      let {
        parent: g,
        context: v,
        abortEarly: k = s.spec.abortEarly,
        disableStackTrace: y = s.spec.disableStackTrace
      } = i;
      function p(I) {
        return sr.isRef(I) ? I.getValue(n, g, v) : I;
      }
      function m(I = {}) {
        var de;
        const U = Object.assign({
          value: n,
          originalValue: o,
          label: s.spec.label,
          path: I.path || r,
          spec: s.spec
        }, f, I.params);
        for (const K of Object.keys(U))
          U[K] = p(U[K]);
        const G = new Be(Be.formatError(I.message || d, U), n, U.path, I.type || u, (de = I.disableStackTrace) != null ? de : y);
        return G.params = U, G;
      }
      const x = k ? a : l;
      let E = {
        path: r,
        parent: g,
        type: u,
        from: i.from,
        createError: m,
        resolve: p,
        options: i,
        originalValue: o,
        schema: s
      };
      const C = (I) => {
        Be.isError(I) ? x(I) : I ? l(null) : x(m());
      }, T = (I) => {
        Be.isError(I) ? x(I) : a(I);
      };
      if (h && zt(n))
        return C(!0);
      let L;
      try {
        var V;
        if (L = c.call(E, n, E), typeof ((V = L) == null ? void 0 : V.then) == "function") {
          if (i.sync)
            throw new Error(`Validation test of type: "${E.type}" returned a Promise during a synchronous validate. This test will finish after the validate call has returned`);
          return Promise.resolve(L).then(C, T);
        }
      } catch (I) {
        T(I);
        return;
      }
      C(L);
    }
    return t.OPTIONS = e, t;
  }
  function mS(e, t, n, r = n) {
    let i, o, s;
    return t ? (Yn.forEach(t, (a, l, u) => {
      let c = l ? a.slice(1, a.length - 1) : a;
      e = e.resolve({
        context: r,
        parent: i,
        value: n
      });
      let f = e.type === "tuple", d = u ? parseInt(c, 10) : 0;
      if (e.innerType || f) {
        if (f && !u)
          throw new Error(`Yup.reach cannot implicitly index into a tuple type. the path part "${s}" must contain an index to the tuple element, e.g. "${s}[0]"`);
        if (n && d >= n.length)
          throw new Error(`Yup.reach cannot resolve an array item at index: ${a}, in the path: ${t}. because there is no value at that index. `);
        i = n, n = n && n[d], e = f ? e.spec.types[d] : e.innerType;
      }
      if (!u) {
        if (!e.fields || !e.fields[c])
          throw new Error(`The schema does not contain the path: ${t}. (failed at: ${s} which is a type: "${e.type}")`);
        i = n, n = n && n[c], e = e.fields[c];
      }
      o = c, s = l ? "[" + a + "]" : "." + a;
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
  class Os extends Set {
    describe() {
      const t = [];
      for (const n of this.values())
        t.push(sr.isRef(n) ? n.describe() : n);
      return t;
    }
    resolveAll(t) {
      let n = [];
      for (const r of this.values())
        n.push(t(r));
      return n;
    }
    clone() {
      return new Os(this.values());
    }
    merge(t, n) {
      const r = this.clone();
      return t.forEach((i) => r.add(i)), n.forEach((i) => r.delete(i)), r;
    }
  }
  function Or(e, t = /* @__PURE__ */ new Map()) {
    if ($c(e) || !e || typeof e != "object")
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
  class Et {
    constructor(t) {
      this.type = void 0, this.deps = [], this.tests = void 0, this.transforms = void 0, this.conditions = [], this._mutate = void 0, this.internalTests = {}, this._whitelist = new Os(), this._blacklist = new Os(), this.exclusiveTests = /* @__PURE__ */ Object.create(null), this._typeCheck = void 0, this.spec = void 0, this.tests = [], this.transforms = [], this.withMutation(() => {
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
      for (let c of Object.values(this.internalTests))
        c && u.push(c);
      this.runTests({
        path: o,
        value: l,
        originalValue: s,
        options: n,
        tests: u
      }, r, (c) => {
        if (c.length)
          return i(c, l);
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
      } = t, c = (v) => {
        i || (i = !0, n(v, s));
      }, f = (v) => {
        i || (i = !0, r(v, s));
      }, d = o.length, h = [];
      if (!d)
        return f([]);
      let g = {
        value: s,
        originalValue: a,
        path: l,
        options: u,
        schema: this
      };
      for (let v = 0; v < o.length; v++) {
        const k = o[v];
        k(g, c, function(p) {
          p && (Array.isArray(p) ? h.push(...p) : h.push(p)), --d <= 0 && f(h);
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
      const c = Object.assign({}, s, {
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
        path: l || a.includes(".") ? `${i || ""}[${u ? a : `"${a}"`}]` : (i ? `${i}.` : "") + t
      });
      return (f, d, h) => this.resolve(c)._validate(u, c, d, h);
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
      return r.internalTests.nullable = mr({
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
      return r.internalTests.optionality = mr({
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
      let r = this.clone(), i = mr(n), o = n.exclusive || n.name && r.exclusiveTests[n.name] === !0;
      if (n.exclusive && !n.name)
        throw new TypeError("Exclusive tests must provide a unique `name` identifying the test");
      return n.name && (r.exclusiveTests[n.name] = !!n.exclusive), r.tests = r.tests.filter((s) => !(s.OPTIONS.name === n.name && (o || s.OPTIONS.test === i.OPTIONS.test))), r.tests.push(i), r;
    }
    when(t, n) {
      !Array.isArray(t) && typeof t != "string" && (n = t, t = ".");
      let r = this.clone(), i = By(t).map((o) => new sr(o));
      return i.forEach((o) => {
        o.isSibling && r.deps.push(o.key);
      }), r.conditions.push(typeof n == "function" ? new As(i, n) : As.fromOptions(i, n)), r;
    }
    typeError(t) {
      let n = this.clone();
      return n.internalTests.typeError = mr({
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
      }), r.internalTests.whiteList = mr({
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
      }), r.internalTests.blacklist = mr({
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
        })).filter((l, u, c) => c.findIndex((f) => f.name === l.name) === u)
      };
    }
  }
  Et.prototype.__isYupSchema__ = !0;
  for (const e of ["validate", "validateSync"])
    Et.prototype[`${e}At`] = function(t, n, r = {}) {
      const {
        parent: i,
        parentPath: o,
        schema: s
      } = mS(this, t, n, r.context);
      return s[e](i && i[o], Object.assign({}, r, {
        parent: i,
        path: t
      }));
    };
  for (const e of ["equals", "is"])
    Et.prototype[e] = Et.prototype.oneOf;
  for (const e of ["not", "nope"])
    Et.prototype[e] = Et.prototype.notOneOf;
  let yS = (
    // eslint-disable-next-line
    /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/
  ), gS = (
    // eslint-disable-next-line
    /^((https?|ftp):)?\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(\#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i
  ), vS = /^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i, xS = (e) => zt(e) || e === e.trim(), SS = {}.toString();
  function es() {
    return new Hy();
  }
  class Hy extends Et {
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
          return i === SS ? t : i;
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
    length(t, n = yt.length) {
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
    min(t, n = yt.min) {
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
    max(t, n = yt.max) {
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
        message: i || yt.matches,
        params: {
          regex: t
        },
        skipAbsent: !0,
        test: (s) => s === "" && r || s.search(t) !== -1
      });
    }
    email(t = yt.email) {
      return this.matches(yS, {
        name: "email",
        message: t,
        excludeEmptyString: !0
      });
    }
    url(t = yt.url) {
      return this.matches(gS, {
        name: "url",
        message: t,
        excludeEmptyString: !0
      });
    }
    uuid(t = yt.uuid) {
      return this.matches(vS, {
        name: "uuid",
        message: t,
        excludeEmptyString: !1
      });
    }
    //-- transforms --
    ensure() {
      return this.default("").transform((t) => t === null ? "" : t);
    }
    trim(t = yt.trim) {
      return this.transform((n) => n != null ? n.trim() : n).test({
        message: t,
        name: "trim",
        test: xS
      });
    }
    lowercase(t = yt.lowercase) {
      return this.transform((n) => zt(n) ? n : n.toLowerCase()).test({
        message: t,
        name: "string_case",
        exclusive: !0,
        skipAbsent: !0,
        test: (n) => zt(n) || n === n.toLowerCase()
      });
    }
    uppercase(t = yt.uppercase) {
      return this.transform((n) => zt(n) ? n : n.toUpperCase()).test({
        message: t,
        name: "string_case",
        exclusive: !0,
        skipAbsent: !0,
        test: (n) => zt(n) || n === n.toUpperCase()
      });
    }
  }
  es.prototype = Hy.prototype;
  let wS = (e) => e != +e;
  function Wy() {
    return new Gy();
  }
  class Gy extends Et {
    constructor() {
      super({
        type: "number",
        check(t) {
          return t instanceof Number && (t = t.valueOf()), typeof t == "number" && !wS(t);
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
  Wy.prototype = Gy.prototype;
  const TS = /^(\d{4}|[+-]\d{6})(?:-?(\d{2})(?:-?(\d{2}))?)?(?:[ T]?(\d{2}):?(\d{2})(?::?(\d{2})(?:[,.](\d{1,}))?)?(?:(Z)|([+-])(\d{2})(?::?(\d{2}))?)?)?$/;
  function Nt(e, t = 0) {
    return Number(e) || t;
  }
  function ES(e) {
    const t = TS.exec(e);
    if (!t)
      return Date.parse ? Date.parse(e) : Number.NaN;
    const n = {
      year: Nt(t[1]),
      month: Nt(t[2], 1) - 1,
      day: Nt(t[3], 1),
      hour: Nt(t[4]),
      minute: Nt(t[5]),
      second: Nt(t[6]),
      millisecond: t[7] ? (
        // allow arbitrary sub-second precision beyond milliseconds
        Nt(t[7].substring(0, 3))
      ) : 0,
      z: t[8] || void 0,
      plusMinus: t[9] || void 0,
      hourOffset: Nt(t[10]),
      minuteOffset: Nt(t[11])
    };
    if (n.z === void 0 && n.plusMinus === void 0)
      return new Date(n.year, n.month, n.day, n.hour, n.minute, n.second, n.millisecond).valueOf();
    let r = 0;
    return n.z !== "Z" && n.plusMinus !== void 0 && (r = n.hourOffset * 60 + n.minuteOffset, n.plusMinus === "+" && (r = 0 - r)), Date.UTC(n.year, n.month, n.day, n.hour, n.minute + r, n.second, n.millisecond);
  }
  let CS = /* @__PURE__ */ new Date(""), PS = (e) => Object.prototype.toString.call(e) === "[object Date]";
  class oa extends Et {
    constructor() {
      super({
        type: "date",
        check(t) {
          return PS(t) && !isNaN(t.getTime());
        }
      }), this.withMutation(() => {
        this.transform((t, n, r) => !r.spec.coerce || r.isType(t) || t === null ? t : (t = ES(t), isNaN(t) ? oa.INVALID_DATE : new Date(t)));
      });
    }
    prepareParam(t, n) {
      let r;
      if (sr.isRef(t))
        r = t;
      else {
        let i = this.cast(t);
        if (!this._typeCheck(i))
          throw new TypeError(`\`${n}\` must be a Date or a value that can be \`cast()\` to a Date`);
        r = i;
      }
      return r;
    }
    min(t, n = vu.min) {
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
    max(t, n = vu.max) {
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
  oa.INVALID_DATE = CS;
  oa.prototype;
  function kS(e, t = []) {
    let n = [], r = /* @__PURE__ */ new Set(), i = new Set(t.map(([s, a]) => `${s}-${a}`));
    function o(s, a) {
      let l = Yn.split(s)[0];
      r.add(l), i.has(`${a}-${l}`) || n.push([a, l]);
    }
    for (const s of Object.keys(e)) {
      let a = e[s];
      r.add(s), sr.isRef(a) && a.isSibling ? o(a.path, s) : $c(a) && "deps" in a && a.deps.forEach((l) => o(l, s));
    }
    return iS.array(Array.from(r), n).reverse();
  }
  function Vd(e, t) {
    let n = 1 / 0;
    return e.some((r, i) => {
      var o;
      if ((o = t.path) != null && o.includes(r))
        return n = i, !0;
    }), n;
  }
  function Ky(e) {
    return (t, n) => Vd(e, t) - Vd(e, n);
  }
  const _S = (e, t, n) => {
    if (typeof e != "string")
      return e;
    let r = e;
    try {
      r = JSON.parse(e);
    } catch {
    }
    return n.isType(r) ? r : e;
  };
  function ts(e) {
    if ("fields" in e) {
      const t = {};
      for (const [n, r] of Object.entries(e.fields))
        t[n] = ts(r);
      return e.setFields(t);
    }
    if (e.type === "array") {
      const t = e.optional();
      return t.innerType && (t.innerType = ts(t.innerType)), t;
    }
    return e.type === "tuple" ? e.optional().clone({
      types: e.spec.types.map(ts)
    }) : "optional" in e ? e.optional() : e;
  }
  const AS = (e, t) => {
    const n = [...Yn.normalizePath(t)];
    if (n.length === 1)
      return n[0] in e;
    let r = n.pop(), i = Yn.getter(Yn.join(n), !0)(e);
    return !!(i && r in i);
  };
  let $d = (e) => Object.prototype.toString.call(e) === "[object Object]";
  function OS(e, t) {
    let n = Object.keys(e.fields);
    return Object.keys(t).filter((r) => n.indexOf(r) === -1);
  }
  const FS = Ky([]);
  function Qy(e) {
    return new Yy(e);
  }
  class Yy extends Et {
    constructor(t) {
      super({
        type: "object",
        check(n) {
          return $d(n) || typeof n == "function";
        }
      }), this.fields = /* @__PURE__ */ Object.create(null), this._sortErrors = FS, this._nodes = [], this._excludedEdges = [], this.withMutation(() => {
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
      let o = this.fields, s = (r = n.stripUnknown) != null ? r : this.spec.noUnknown, a = [].concat(this._nodes, Object.keys(i).filter((f) => !this._nodes.includes(f))), l = {}, u = Object.assign({}, n, {
        parent: l,
        __validating: n.__validating || !1
      }), c = !1;
      for (const f of a) {
        let d = o[f], h = f in i;
        if (d) {
          let g, v = i[f];
          u.path = (n.path ? `${n.path}.` : "") + f, d = d.resolve({
            value: v,
            context: n.context,
            parent: l
          });
          let k = d instanceof Et ? d.spec : void 0, y = k == null ? void 0 : k.strict;
          if (k != null && k.strip) {
            c = c || f in i;
            continue;
          }
          g = !n.__validating || !y ? (
            // TODO: use _cast, this is double resolving
            d.cast(i[f], u)
          ) : i[f], g !== void 0 && (l[f] = g);
        } else
          h && !s && (l[f] = i[f]);
        (h !== f in l || l[f] !== i[f]) && (c = !0);
      }
      return c ? l : i;
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
        if (!a || !$d(u)) {
          i(l, u);
          return;
        }
        s = s || u;
        let c = [];
        for (let f of this._nodes) {
          let d = this.fields[f];
          !d || sr.isRef(d) || c.push(d.asNestedTest({
            options: n,
            key: f,
            parent: u,
            parentPath: n.path,
            originalParent: s
          }));
        }
        this.runTests({
          tests: c,
          value: u,
          originalValue: s,
          options: n
        }, r, (f) => {
          i(f.sort(this._sortErrors).concat(l), u);
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
      return r.fields = t, r._nodes = kS(t, n), r._sortErrors = Ky(Object.keys(t)), n && (r._excludedEdges = n), r;
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
      return ts(this);
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
        return AS(o, t) && (s = Object.assign({}, o), r || delete s[t], s[n] = i(o)), s;
      });
    }
    /** Parse an input JSON string to an object */
    json() {
      return this.transform(_S);
    }
    noUnknown(t = !0, n = xu.noUnknown) {
      typeof t != "boolean" && (n = t, t = !0);
      let r = this.test({
        name: "noUnknown",
        exclusive: !0,
        message: n,
        test(i) {
          if (i == null)
            return !0;
          const o = OS(this.schema, i);
          return !t || o.length === 0 || this.createError({
            params: {
              unknown: o.join(", ")
            }
          });
        }
      });
      return r.spec.noUnknown = t, r;
    }
    unknown(t = !0, n = xu.noUnknown) {
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
      return this.transformKeys(ol.camelCase);
    }
    snakeCase() {
      return this.transformKeys(ol.snakeCase);
    }
    constantCase() {
      return this.transformKeys((t) => ol.snakeCase(t).toUpperCase());
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
  Qy.prototype = Yy.prototype;
  const jS = Qy({
    firstName: es().required("This field is required"),
    lastName: es().required("This field is required"),
    age: Wy().min(0).positive().max(125).required("This field is required"),
    email: es().email()
  });
  function DS(e, t) {
    const n = {};
    return e.username ? e.username.toLowerCase().includes(t.ContactInfo.firstName.toLowerCase()) || (n.username = `Username should contain your first name (${t.ContactInfo.firstName})`) : n.username = "This field is required", n;
  }
  var MS = function(t) {
    return RS(t) && !LS(t);
  };
  function RS(e) {
    return !!e && typeof e == "object";
  }
  function LS(e) {
    var t = Object.prototype.toString.call(e);
    return t === "[object RegExp]" || t === "[object Date]" || $S(e);
  }
  var NS = typeof Symbol == "function" && Symbol.for, VS = NS ? Symbol.for("react.element") : 60103;
  function $S(e) {
    return e.$$typeof === VS;
  }
  function bS(e) {
    return Array.isArray(e) ? [] : {};
  }
  function Fs(e, t) {
    return t.clone !== !1 && t.isMergeableObject(e) ? Xi(bS(e), e, t) : e;
  }
  function IS(e, t, n) {
    return e.concat(t).map(function(r) {
      return Fs(r, n);
    });
  }
  function zS(e, t, n) {
    var r = {};
    return n.isMergeableObject(e) && Object.keys(e).forEach(function(i) {
      r[i] = Fs(e[i], n);
    }), Object.keys(t).forEach(function(i) {
      !n.isMergeableObject(t[i]) || !e[i] ? r[i] = Fs(t[i], n) : r[i] = Xi(e[i], t[i], n);
    }), r;
  }
  function Xi(e, t, n) {
    n = n || {}, n.arrayMerge = n.arrayMerge || IS, n.isMergeableObject = n.isMergeableObject || MS;
    var r = Array.isArray(t), i = Array.isArray(e), o = r === i;
    return o ? r ? n.arrayMerge(e, t, n) : zS(e, t, n) : Fs(t, n);
  }
  Xi.all = function(t, n) {
    if (!Array.isArray(t))
      throw new Error("first argument should be an array");
    return t.reduce(function(r, i) {
      return Xi(r, i, n);
    }, {});
  };
  var Su = Xi, BS = typeof global == "object" && global && global.Object === Object && global;
  const Xy = BS;
  var US = typeof self == "object" && self && self.Object === Object && self, HS = Xy || US || Function("return this")();
  const Rt = HS;
  var WS = Rt.Symbol;
  const _n = WS;
  var Zy = Object.prototype, GS = Zy.hasOwnProperty, KS = Zy.toString, ci = _n ? _n.toStringTag : void 0;
  function QS(e) {
    var t = GS.call(e, ci), n = e[ci];
    try {
      e[ci] = void 0;
      var r = !0;
    } catch {
    }
    var i = KS.call(e);
    return r && (t ? e[ci] = n : delete e[ci]), i;
  }
  var YS = Object.prototype, XS = YS.toString;
  function ZS(e) {
    return XS.call(e);
  }
  var qS = "[object Null]", JS = "[object Undefined]", bd = _n ? _n.toStringTag : void 0;
  function ar(e) {
    return e == null ? e === void 0 ? JS : qS : bd && bd in Object(e) ? QS(e) : ZS(e);
  }
  function qy(e, t) {
    return function(n) {
      return e(t(n));
    };
  }
  var ew = qy(Object.getPrototypeOf, Object);
  const bc = ew;
  function lr(e) {
    return e != null && typeof e == "object";
  }
  var tw = "[object Object]", nw = Function.prototype, rw = Object.prototype, Jy = nw.toString, iw = rw.hasOwnProperty, ow = Jy.call(Object);
  function Id(e) {
    if (!lr(e) || ar(e) != tw)
      return !1;
    var t = bc(e);
    if (t === null)
      return !0;
    var n = iw.call(t, "constructor") && t.constructor;
    return typeof n == "function" && n instanceof n && Jy.call(n) == ow;
  }
  var zd = Array.isArray, Bd = Object.keys, sw = Object.prototype.hasOwnProperty, aw = typeof Element < "u";
  function wu(e, t) {
    if (e === t)
      return !0;
    if (e && t && typeof e == "object" && typeof t == "object") {
      var n = zd(e), r = zd(t), i, o, s;
      if (n && r) {
        if (o = e.length, o != t.length)
          return !1;
        for (i = o; i-- !== 0; )
          if (!wu(e[i], t[i]))
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
      var u = e instanceof RegExp, c = t instanceof RegExp;
      if (u != c)
        return !1;
      if (u && c)
        return e.toString() == t.toString();
      var f = Bd(e);
      if (o = f.length, o !== Bd(t).length)
        return !1;
      for (i = o; i-- !== 0; )
        if (!sw.call(t, f[i]))
          return !1;
      if (aw && e instanceof Element && t instanceof Element)
        return e === t;
      for (i = o; i-- !== 0; )
        if (s = f[i], !(s === "_owner" && e.$$typeof) && !wu(e[s], t[s]))
          return !1;
      return !0;
    }
    return e !== e && t !== t;
  }
  var lw = function(t, n) {
    try {
      return wu(t, n);
    } catch (r) {
      if (r.message && r.message.match(/stack|recursion/i) || r.number === -2146828260)
        return console.warn("Warning: react-fast-compare does not handle circular references.", r.name, r.message), !1;
      throw r;
    }
  };
  const sn = /* @__PURE__ */ Is(lw);
  var uw = !0;
  function eg(e, t) {
    if (!uw) {
      if (e)
        return;
      var n = "Warning: " + t;
      typeof console < "u" && console.warn(n);
      try {
        throw Error(n);
      } catch {
      }
    }
  }
  function cw() {
    this.__data__ = [], this.size = 0;
  }
  function tg(e, t) {
    return e === t || e !== e && t !== t;
  }
  function sa(e, t) {
    for (var n = e.length; n--; )
      if (tg(e[n][0], t))
        return n;
    return -1;
  }
  var fw = Array.prototype, dw = fw.splice;
  function pw(e) {
    var t = this.__data__, n = sa(t, e);
    if (n < 0)
      return !1;
    var r = t.length - 1;
    return n == r ? t.pop() : dw.call(t, n, 1), --this.size, !0;
  }
  function hw(e) {
    var t = this.__data__, n = sa(t, e);
    return n < 0 ? void 0 : t[n][1];
  }
  function mw(e) {
    return sa(this.__data__, e) > -1;
  }
  function yw(e, t) {
    var n = this.__data__, r = sa(n, e);
    return r < 0 ? (++this.size, n.push([e, t])) : n[r][1] = t, this;
  }
  function Jt(e) {
    var t = -1, n = e == null ? 0 : e.length;
    for (this.clear(); ++t < n; ) {
      var r = e[t];
      this.set(r[0], r[1]);
    }
  }
  Jt.prototype.clear = cw;
  Jt.prototype.delete = pw;
  Jt.prototype.get = hw;
  Jt.prototype.has = mw;
  Jt.prototype.set = yw;
  function gw() {
    this.__data__ = new Jt(), this.size = 0;
  }
  function vw(e) {
    var t = this.__data__, n = t.delete(e);
    return this.size = t.size, n;
  }
  function xw(e) {
    return this.__data__.get(e);
  }
  function Sw(e) {
    return this.__data__.has(e);
  }
  function ao(e) {
    var t = typeof e;
    return e != null && (t == "object" || t == "function");
  }
  var ww = "[object AsyncFunction]", Tw = "[object Function]", Ew = "[object GeneratorFunction]", Cw = "[object Proxy]";
  function ng(e) {
    if (!ao(e))
      return !1;
    var t = ar(e);
    return t == Tw || t == Ew || t == ww || t == Cw;
  }
  var Pw = Rt["__core-js_shared__"];
  const sl = Pw;
  var Ud = function() {
    var e = /[^.]+$/.exec(sl && sl.keys && sl.keys.IE_PROTO || "");
    return e ? "Symbol(src)_1." + e : "";
  }();
  function kw(e) {
    return !!Ud && Ud in e;
  }
  var _w = Function.prototype, Aw = _w.toString;
  function ur(e) {
    if (e != null) {
      try {
        return Aw.call(e);
      } catch {
      }
      try {
        return e + "";
      } catch {
      }
    }
    return "";
  }
  var Ow = /[\\^$.*+?()[\]{}|]/g, Fw = /^\[object .+?Constructor\]$/, jw = Function.prototype, Dw = Object.prototype, Mw = jw.toString, Rw = Dw.hasOwnProperty, Lw = RegExp(
    "^" + Mw.call(Rw).replace(Ow, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
  );
  function Nw(e) {
    if (!ao(e) || kw(e))
      return !1;
    var t = ng(e) ? Lw : Fw;
    return t.test(ur(e));
  }
  function Vw(e, t) {
    return e == null ? void 0 : e[t];
  }
  function cr(e, t) {
    var n = Vw(e, t);
    return Nw(n) ? n : void 0;
  }
  var $w = cr(Rt, "Map");
  const Zi = $w;
  var bw = cr(Object, "create");
  const qi = bw;
  function Iw() {
    this.__data__ = qi ? qi(null) : {}, this.size = 0;
  }
  function zw(e) {
    var t = this.has(e) && delete this.__data__[e];
    return this.size -= t ? 1 : 0, t;
  }
  var Bw = "__lodash_hash_undefined__", Uw = Object.prototype, Hw = Uw.hasOwnProperty;
  function Ww(e) {
    var t = this.__data__;
    if (qi) {
      var n = t[e];
      return n === Bw ? void 0 : n;
    }
    return Hw.call(t, e) ? t[e] : void 0;
  }
  var Gw = Object.prototype, Kw = Gw.hasOwnProperty;
  function Qw(e) {
    var t = this.__data__;
    return qi ? t[e] !== void 0 : Kw.call(t, e);
  }
  var Yw = "__lodash_hash_undefined__";
  function Xw(e, t) {
    var n = this.__data__;
    return this.size += this.has(e) ? 0 : 1, n[e] = qi && t === void 0 ? Yw : t, this;
  }
  function tr(e) {
    var t = -1, n = e == null ? 0 : e.length;
    for (this.clear(); ++t < n; ) {
      var r = e[t];
      this.set(r[0], r[1]);
    }
  }
  tr.prototype.clear = Iw;
  tr.prototype.delete = zw;
  tr.prototype.get = Ww;
  tr.prototype.has = Qw;
  tr.prototype.set = Xw;
  function Zw() {
    this.size = 0, this.__data__ = {
      hash: new tr(),
      map: new (Zi || Jt)(),
      string: new tr()
    };
  }
  function qw(e) {
    var t = typeof e;
    return t == "string" || t == "number" || t == "symbol" || t == "boolean" ? e !== "__proto__" : e === null;
  }
  function aa(e, t) {
    var n = e.__data__;
    return qw(t) ? n[typeof t == "string" ? "string" : "hash"] : n.map;
  }
  function Jw(e) {
    var t = aa(this, e).delete(e);
    return this.size -= t ? 1 : 0, t;
  }
  function eT(e) {
    return aa(this, e).get(e);
  }
  function tT(e) {
    return aa(this, e).has(e);
  }
  function nT(e, t) {
    var n = aa(this, e), r = n.size;
    return n.set(e, t), this.size += n.size == r ? 0 : 1, this;
  }
  function Mn(e) {
    var t = -1, n = e == null ? 0 : e.length;
    for (this.clear(); ++t < n; ) {
      var r = e[t];
      this.set(r[0], r[1]);
    }
  }
  Mn.prototype.clear = Zw;
  Mn.prototype.delete = Jw;
  Mn.prototype.get = eT;
  Mn.prototype.has = tT;
  Mn.prototype.set = nT;
  var rT = 200;
  function iT(e, t) {
    var n = this.__data__;
    if (n instanceof Jt) {
      var r = n.__data__;
      if (!Zi || r.length < rT - 1)
        return r.push([e, t]), this.size = ++n.size, this;
      n = this.__data__ = new Mn(r);
    }
    return n.set(e, t), this.size = n.size, this;
  }
  function ei(e) {
    var t = this.__data__ = new Jt(e);
    this.size = t.size;
  }
  ei.prototype.clear = gw;
  ei.prototype.delete = vw;
  ei.prototype.get = xw;
  ei.prototype.has = Sw;
  ei.prototype.set = iT;
  function oT(e, t) {
    for (var n = -1, r = e == null ? 0 : e.length; ++n < r && t(e[n], n, e) !== !1; )
      ;
    return e;
  }
  var sT = function() {
    try {
      var e = cr(Object, "defineProperty");
      return e({}, "", {}), e;
    } catch {
    }
  }();
  const Hd = sT;
  function rg(e, t, n) {
    t == "__proto__" && Hd ? Hd(e, t, {
      configurable: !0,
      enumerable: !0,
      value: n,
      writable: !0
    }) : e[t] = n;
  }
  var aT = Object.prototype, lT = aT.hasOwnProperty;
  function ig(e, t, n) {
    var r = e[t];
    (!(lT.call(e, t) && tg(r, n)) || n === void 0 && !(t in e)) && rg(e, t, n);
  }
  function la(e, t, n, r) {
    var i = !n;
    n || (n = {});
    for (var o = -1, s = t.length; ++o < s; ) {
      var a = t[o], l = r ? r(n[a], e[a], a, n, e) : void 0;
      l === void 0 && (l = e[a]), i ? rg(n, a, l) : ig(n, a, l);
    }
    return n;
  }
  function uT(e, t) {
    for (var n = -1, r = Array(e); ++n < e; )
      r[n] = t(n);
    return r;
  }
  var cT = "[object Arguments]";
  function Wd(e) {
    return lr(e) && ar(e) == cT;
  }
  var og = Object.prototype, fT = og.hasOwnProperty, dT = og.propertyIsEnumerable, pT = Wd(function() {
    return arguments;
  }()) ? Wd : function(e) {
    return lr(e) && fT.call(e, "callee") && !dT.call(e, "callee");
  };
  const hT = pT;
  var mT = Array.isArray;
  const lo = mT;
  function yT() {
    return !1;
  }
  var sg = typeof Ze == "object" && Ze && !Ze.nodeType && Ze, Gd = sg && typeof qe == "object" && qe && !qe.nodeType && qe, gT = Gd && Gd.exports === sg, Kd = gT ? Rt.Buffer : void 0, vT = Kd ? Kd.isBuffer : void 0, xT = vT || yT;
  const ag = xT;
  var ST = 9007199254740991, wT = /^(?:0|[1-9]\d*)$/;
  function TT(e, t) {
    var n = typeof e;
    return t = t ?? ST, !!t && (n == "number" || n != "symbol" && wT.test(e)) && e > -1 && e % 1 == 0 && e < t;
  }
  var ET = 9007199254740991;
  function lg(e) {
    return typeof e == "number" && e > -1 && e % 1 == 0 && e <= ET;
  }
  var CT = "[object Arguments]", PT = "[object Array]", kT = "[object Boolean]", _T = "[object Date]", AT = "[object Error]", OT = "[object Function]", FT = "[object Map]", jT = "[object Number]", DT = "[object Object]", MT = "[object RegExp]", RT = "[object Set]", LT = "[object String]", NT = "[object WeakMap]", VT = "[object ArrayBuffer]", $T = "[object DataView]", bT = "[object Float32Array]", IT = "[object Float64Array]", zT = "[object Int8Array]", BT = "[object Int16Array]", UT = "[object Int32Array]", HT = "[object Uint8Array]", WT = "[object Uint8ClampedArray]", GT = "[object Uint16Array]", KT = "[object Uint32Array]", ne = {};
  ne[bT] = ne[IT] = ne[zT] = ne[BT] = ne[UT] = ne[HT] = ne[WT] = ne[GT] = ne[KT] = !0;
  ne[CT] = ne[PT] = ne[VT] = ne[kT] = ne[$T] = ne[_T] = ne[AT] = ne[OT] = ne[FT] = ne[jT] = ne[DT] = ne[MT] = ne[RT] = ne[LT] = ne[NT] = !1;
  function QT(e) {
    return lr(e) && lg(e.length) && !!ne[ar(e)];
  }
  function Ic(e) {
    return function(t) {
      return e(t);
    };
  }
  var ug = typeof Ze == "object" && Ze && !Ze.nodeType && Ze, _i = ug && typeof qe == "object" && qe && !qe.nodeType && qe, YT = _i && _i.exports === ug, al = YT && Xy.process, XT = function() {
    try {
      var e = _i && _i.require && _i.require("util").types;
      return e || al && al.binding && al.binding("util");
    } catch {
    }
  }();
  const Kr = XT;
  var Qd = Kr && Kr.isTypedArray, ZT = Qd ? Ic(Qd) : QT;
  const qT = ZT;
  var JT = Object.prototype, eE = JT.hasOwnProperty;
  function cg(e, t) {
    var n = lo(e), r = !n && hT(e), i = !n && !r && ag(e), o = !n && !r && !i && qT(e), s = n || r || i || o, a = s ? uT(e.length, String) : [], l = a.length;
    for (var u in e)
      (t || eE.call(e, u)) && !(s && // Safari 9 has enumerable `arguments.length` in strict mode.
      (u == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
      i && (u == "offset" || u == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
      o && (u == "buffer" || u == "byteLength" || u == "byteOffset") || // Skip index properties.
      TT(u, l))) && a.push(u);
    return a;
  }
  var tE = Object.prototype;
  function zc(e) {
    var t = e && e.constructor, n = typeof t == "function" && t.prototype || tE;
    return e === n;
  }
  var nE = qy(Object.keys, Object);
  const rE = nE;
  var iE = Object.prototype, oE = iE.hasOwnProperty;
  function sE(e) {
    if (!zc(e))
      return rE(e);
    var t = [];
    for (var n in Object(e))
      oE.call(e, n) && n != "constructor" && t.push(n);
    return t;
  }
  function fg(e) {
    return e != null && lg(e.length) && !ng(e);
  }
  function Bc(e) {
    return fg(e) ? cg(e) : sE(e);
  }
  function aE(e, t) {
    return e && la(t, Bc(t), e);
  }
  function lE(e) {
    var t = [];
    if (e != null)
      for (var n in Object(e))
        t.push(n);
    return t;
  }
  var uE = Object.prototype, cE = uE.hasOwnProperty;
  function fE(e) {
    if (!ao(e))
      return lE(e);
    var t = zc(e), n = [];
    for (var r in e)
      r == "constructor" && (t || !cE.call(e, r)) || n.push(r);
    return n;
  }
  function Uc(e) {
    return fg(e) ? cg(e, !0) : fE(e);
  }
  function dE(e, t) {
    return e && la(t, Uc(t), e);
  }
  var dg = typeof Ze == "object" && Ze && !Ze.nodeType && Ze, Yd = dg && typeof qe == "object" && qe && !qe.nodeType && qe, pE = Yd && Yd.exports === dg, Xd = pE ? Rt.Buffer : void 0, Zd = Xd ? Xd.allocUnsafe : void 0;
  function hE(e, t) {
    if (t)
      return e.slice();
    var n = e.length, r = Zd ? Zd(n) : new e.constructor(n);
    return e.copy(r), r;
  }
  function pg(e, t) {
    var n = -1, r = e.length;
    for (t || (t = Array(r)); ++n < r; )
      t[n] = e[n];
    return t;
  }
  function mE(e, t) {
    for (var n = -1, r = e == null ? 0 : e.length, i = 0, o = []; ++n < r; ) {
      var s = e[n];
      t(s, n, e) && (o[i++] = s);
    }
    return o;
  }
  function hg() {
    return [];
  }
  var yE = Object.prototype, gE = yE.propertyIsEnumerable, qd = Object.getOwnPropertySymbols, vE = qd ? function(e) {
    return e == null ? [] : (e = Object(e), mE(qd(e), function(t) {
      return gE.call(e, t);
    }));
  } : hg;
  const Hc = vE;
  function xE(e, t) {
    return la(e, Hc(e), t);
  }
  function mg(e, t) {
    for (var n = -1, r = t.length, i = e.length; ++n < r; )
      e[i + n] = t[n];
    return e;
  }
  var SE = Object.getOwnPropertySymbols, wE = SE ? function(e) {
    for (var t = []; e; )
      mg(t, Hc(e)), e = bc(e);
    return t;
  } : hg;
  const yg = wE;
  function TE(e, t) {
    return la(e, yg(e), t);
  }
  function gg(e, t, n) {
    var r = t(e);
    return lo(e) ? r : mg(r, n(e));
  }
  function EE(e) {
    return gg(e, Bc, Hc);
  }
  function CE(e) {
    return gg(e, Uc, yg);
  }
  var PE = cr(Rt, "DataView");
  const Tu = PE;
  var kE = cr(Rt, "Promise");
  const Eu = kE;
  var _E = cr(Rt, "Set");
  const Cu = _E;
  var AE = cr(Rt, "WeakMap");
  const Pu = AE;
  var Jd = "[object Map]", OE = "[object Object]", ep = "[object Promise]", tp = "[object Set]", np = "[object WeakMap]", rp = "[object DataView]", FE = ur(Tu), jE = ur(Zi), DE = ur(Eu), ME = ur(Cu), RE = ur(Pu), In = ar;
  (Tu && In(new Tu(new ArrayBuffer(1))) != rp || Zi && In(new Zi()) != Jd || Eu && In(Eu.resolve()) != ep || Cu && In(new Cu()) != tp || Pu && In(new Pu()) != np) && (In = function(e) {
    var t = ar(e), n = t == OE ? e.constructor : void 0, r = n ? ur(n) : "";
    if (r)
      switch (r) {
        case FE:
          return rp;
        case jE:
          return Jd;
        case DE:
          return ep;
        case ME:
          return tp;
        case RE:
          return np;
      }
    return t;
  });
  const Wc = In;
  var LE = Object.prototype, NE = LE.hasOwnProperty;
  function VE(e) {
    var t = e.length, n = new e.constructor(t);
    return t && typeof e[0] == "string" && NE.call(e, "index") && (n.index = e.index, n.input = e.input), n;
  }
  var $E = Rt.Uint8Array;
  const ip = $E;
  function Gc(e) {
    var t = new e.constructor(e.byteLength);
    return new ip(t).set(new ip(e)), t;
  }
  function bE(e, t) {
    var n = t ? Gc(e.buffer) : e.buffer;
    return new e.constructor(n, e.byteOffset, e.byteLength);
  }
  var IE = /\w*$/;
  function zE(e) {
    var t = new e.constructor(e.source, IE.exec(e));
    return t.lastIndex = e.lastIndex, t;
  }
  var op = _n ? _n.prototype : void 0, sp = op ? op.valueOf : void 0;
  function BE(e) {
    return sp ? Object(sp.call(e)) : {};
  }
  function UE(e, t) {
    var n = t ? Gc(e.buffer) : e.buffer;
    return new e.constructor(n, e.byteOffset, e.length);
  }
  var HE = "[object Boolean]", WE = "[object Date]", GE = "[object Map]", KE = "[object Number]", QE = "[object RegExp]", YE = "[object Set]", XE = "[object String]", ZE = "[object Symbol]", qE = "[object ArrayBuffer]", JE = "[object DataView]", eC = "[object Float32Array]", tC = "[object Float64Array]", nC = "[object Int8Array]", rC = "[object Int16Array]", iC = "[object Int32Array]", oC = "[object Uint8Array]", sC = "[object Uint8ClampedArray]", aC = "[object Uint16Array]", lC = "[object Uint32Array]";
  function uC(e, t, n) {
    var r = e.constructor;
    switch (t) {
      case qE:
        return Gc(e);
      case HE:
      case WE:
        return new r(+e);
      case JE:
        return bE(e, n);
      case eC:
      case tC:
      case nC:
      case rC:
      case iC:
      case oC:
      case sC:
      case aC:
      case lC:
        return UE(e, n);
      case GE:
        return new r();
      case KE:
      case XE:
        return new r(e);
      case QE:
        return zE(e);
      case YE:
        return new r();
      case ZE:
        return BE(e);
    }
  }
  var ap = Object.create, cC = function() {
    function e() {
    }
    return function(t) {
      if (!ao(t))
        return {};
      if (ap)
        return ap(t);
      e.prototype = t;
      var n = new e();
      return e.prototype = void 0, n;
    };
  }();
  const fC = cC;
  function dC(e) {
    return typeof e.constructor == "function" && !zc(e) ? fC(bc(e)) : {};
  }
  var pC = "[object Map]";
  function hC(e) {
    return lr(e) && Wc(e) == pC;
  }
  var lp = Kr && Kr.isMap, mC = lp ? Ic(lp) : hC;
  const yC = mC;
  var gC = "[object Set]";
  function vC(e) {
    return lr(e) && Wc(e) == gC;
  }
  var up = Kr && Kr.isSet, xC = up ? Ic(up) : vC;
  const SC = xC;
  var wC = 1, TC = 2, EC = 4, vg = "[object Arguments]", CC = "[object Array]", PC = "[object Boolean]", kC = "[object Date]", _C = "[object Error]", xg = "[object Function]", AC = "[object GeneratorFunction]", OC = "[object Map]", FC = "[object Number]", Sg = "[object Object]", jC = "[object RegExp]", DC = "[object Set]", MC = "[object String]", RC = "[object Symbol]", LC = "[object WeakMap]", NC = "[object ArrayBuffer]", VC = "[object DataView]", $C = "[object Float32Array]", bC = "[object Float64Array]", IC = "[object Int8Array]", zC = "[object Int16Array]", BC = "[object Int32Array]", UC = "[object Uint8Array]", HC = "[object Uint8ClampedArray]", WC = "[object Uint16Array]", GC = "[object Uint32Array]", q = {};
  q[vg] = q[CC] = q[NC] = q[VC] = q[PC] = q[kC] = q[$C] = q[bC] = q[IC] = q[zC] = q[BC] = q[OC] = q[FC] = q[Sg] = q[jC] = q[DC] = q[MC] = q[RC] = q[UC] = q[HC] = q[WC] = q[GC] = !0;
  q[_C] = q[xg] = q[LC] = !1;
  function Ai(e, t, n, r, i, o) {
    var s, a = t & wC, l = t & TC, u = t & EC;
    if (n && (s = i ? n(e, r, i, o) : n(e)), s !== void 0)
      return s;
    if (!ao(e))
      return e;
    var c = lo(e);
    if (c) {
      if (s = VE(e), !a)
        return pg(e, s);
    } else {
      var f = Wc(e), d = f == xg || f == AC;
      if (ag(e))
        return hE(e, a);
      if (f == Sg || f == vg || d && !i) {
        if (s = l || d ? {} : dC(e), !a)
          return l ? TE(e, dE(s, e)) : xE(e, aE(s, e));
      } else {
        if (!q[f])
          return i ? e : {};
        s = uC(e, f, a);
      }
    }
    o || (o = new ei());
    var h = o.get(e);
    if (h)
      return h;
    o.set(e, s), SC(e) ? e.forEach(function(k) {
      s.add(Ai(k, t, n, k, e, o));
    }) : yC(e) && e.forEach(function(k, y) {
      s.set(y, Ai(k, t, n, y, e, o));
    });
    var g = u ? l ? CE : EE : l ? Uc : Bc, v = c ? void 0 : g(e);
    return oT(v || e, function(k, y) {
      v && (y = k, k = e[y]), ig(s, y, Ai(k, t, n, y, e, o));
    }), s;
  }
  var KC = 4;
  function cp(e) {
    return Ai(e, KC);
  }
  function wg(e, t) {
    for (var n = -1, r = e == null ? 0 : e.length, i = Array(r); ++n < r; )
      i[n] = t(e[n], n, e);
    return i;
  }
  var QC = "[object Symbol]";
  function Kc(e) {
    return typeof e == "symbol" || lr(e) && ar(e) == QC;
  }
  var YC = "Expected a function";
  function Qc(e, t) {
    if (typeof e != "function" || t != null && typeof t != "function")
      throw new TypeError(YC);
    var n = function() {
      var r = arguments, i = t ? t.apply(this, r) : r[0], o = n.cache;
      if (o.has(i))
        return o.get(i);
      var s = e.apply(this, r);
      return n.cache = o.set(i, s) || o, s;
    };
    return n.cache = new (Qc.Cache || Mn)(), n;
  }
  Qc.Cache = Mn;
  var XC = 500;
  function ZC(e) {
    var t = Qc(e, function(r) {
      return n.size === XC && n.clear(), r;
    }), n = t.cache;
    return t;
  }
  var qC = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, JC = /\\(\\)?/g, eP = ZC(function(e) {
    var t = [];
    return e.charCodeAt(0) === 46 && t.push(""), e.replace(qC, function(n, r, i, o) {
      t.push(i ? o.replace(JC, "$1") : r || n);
    }), t;
  });
  const tP = eP;
  var nP = 1 / 0;
  function rP(e) {
    if (typeof e == "string" || Kc(e))
      return e;
    var t = e + "";
    return t == "0" && 1 / e == -nP ? "-0" : t;
  }
  var iP = 1 / 0, fp = _n ? _n.prototype : void 0, dp = fp ? fp.toString : void 0;
  function Tg(e) {
    if (typeof e == "string")
      return e;
    if (lo(e))
      return wg(e, Tg) + "";
    if (Kc(e))
      return dp ? dp.call(e) : "";
    var t = e + "";
    return t == "0" && 1 / e == -iP ? "-0" : t;
  }
  function oP(e) {
    return e == null ? "" : Tg(e);
  }
  function Eg(e) {
    return lo(e) ? wg(e, rP) : Kc(e) ? [e] : pg(tP(oP(e)));
  }
  var Cg = { exports: {} }, Z = {};
  /** @license React v16.13.1
   * react-is.production.min.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */
  var Te = typeof Symbol == "function" && Symbol.for, Yc = Te ? Symbol.for("react.element") : 60103, Xc = Te ? Symbol.for("react.portal") : 60106, ua = Te ? Symbol.for("react.fragment") : 60107, ca = Te ? Symbol.for("react.strict_mode") : 60108, fa = Te ? Symbol.for("react.profiler") : 60114, da = Te ? Symbol.for("react.provider") : 60109, pa = Te ? Symbol.for("react.context") : 60110, Zc = Te ? Symbol.for("react.async_mode") : 60111, ha = Te ? Symbol.for("react.concurrent_mode") : 60111, ma = Te ? Symbol.for("react.forward_ref") : 60112, ya = Te ? Symbol.for("react.suspense") : 60113, sP = Te ? Symbol.for("react.suspense_list") : 60120, ga = Te ? Symbol.for("react.memo") : 60115, va = Te ? Symbol.for("react.lazy") : 60116, aP = Te ? Symbol.for("react.block") : 60121, lP = Te ? Symbol.for("react.fundamental") : 60117, uP = Te ? Symbol.for("react.responder") : 60118, cP = Te ? Symbol.for("react.scope") : 60119;
  function it(e) {
    if (typeof e == "object" && e !== null) {
      var t = e.$$typeof;
      switch (t) {
        case Yc:
          switch (e = e.type, e) {
            case Zc:
            case ha:
            case ua:
            case fa:
            case ca:
            case ya:
              return e;
            default:
              switch (e = e && e.$$typeof, e) {
                case pa:
                case ma:
                case va:
                case ga:
                case da:
                  return e;
                default:
                  return t;
              }
          }
        case Xc:
          return t;
      }
    }
  }
  function Pg(e) {
    return it(e) === ha;
  }
  Z.AsyncMode = Zc;
  Z.ConcurrentMode = ha;
  Z.ContextConsumer = pa;
  Z.ContextProvider = da;
  Z.Element = Yc;
  Z.ForwardRef = ma;
  Z.Fragment = ua;
  Z.Lazy = va;
  Z.Memo = ga;
  Z.Portal = Xc;
  Z.Profiler = fa;
  Z.StrictMode = ca;
  Z.Suspense = ya;
  Z.isAsyncMode = function(e) {
    return Pg(e) || it(e) === Zc;
  };
  Z.isConcurrentMode = Pg;
  Z.isContextConsumer = function(e) {
    return it(e) === pa;
  };
  Z.isContextProvider = function(e) {
    return it(e) === da;
  };
  Z.isElement = function(e) {
    return typeof e == "object" && e !== null && e.$$typeof === Yc;
  };
  Z.isForwardRef = function(e) {
    return it(e) === ma;
  };
  Z.isFragment = function(e) {
    return it(e) === ua;
  };
  Z.isLazy = function(e) {
    return it(e) === va;
  };
  Z.isMemo = function(e) {
    return it(e) === ga;
  };
  Z.isPortal = function(e) {
    return it(e) === Xc;
  };
  Z.isProfiler = function(e) {
    return it(e) === fa;
  };
  Z.isStrictMode = function(e) {
    return it(e) === ca;
  };
  Z.isSuspense = function(e) {
    return it(e) === ya;
  };
  Z.isValidElementType = function(e) {
    return typeof e == "string" || typeof e == "function" || e === ua || e === ha || e === fa || e === ca || e === ya || e === sP || typeof e == "object" && e !== null && (e.$$typeof === va || e.$$typeof === ga || e.$$typeof === da || e.$$typeof === pa || e.$$typeof === ma || e.$$typeof === lP || e.$$typeof === uP || e.$$typeof === cP || e.$$typeof === aP);
  };
  Z.typeOf = it;
  Cg.exports = Z;
  var fP = Cg.exports, qc = fP, dP = {
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
  }, pP = {
    name: !0,
    length: !0,
    prototype: !0,
    caller: !0,
    callee: !0,
    arguments: !0,
    arity: !0
  }, hP = {
    $$typeof: !0,
    render: !0,
    defaultProps: !0,
    displayName: !0,
    propTypes: !0
  }, kg = {
    $$typeof: !0,
    compare: !0,
    defaultProps: !0,
    displayName: !0,
    propTypes: !0,
    type: !0
  }, Jc = {};
  Jc[qc.ForwardRef] = hP;
  Jc[qc.Memo] = kg;
  function pp(e) {
    return qc.isMemo(e) ? kg : Jc[e.$$typeof] || dP;
  }
  var mP = Object.defineProperty, yP = Object.getOwnPropertyNames, hp = Object.getOwnPropertySymbols, gP = Object.getOwnPropertyDescriptor, vP = Object.getPrototypeOf, mp = Object.prototype;
  function _g(e, t, n) {
    if (typeof t != "string") {
      if (mp) {
        var r = vP(t);
        r && r !== mp && _g(e, r, n);
      }
      var i = yP(t);
      hp && (i = i.concat(hp(t)));
      for (var o = pp(e), s = pp(t), a = 0; a < i.length; ++a) {
        var l = i[a];
        if (!pP[l] && !(n && n[l]) && !(s && s[l]) && !(o && o[l])) {
          var u = gP(t, l);
          try {
            mP(e, l, u);
          } catch {
          }
        }
      }
    }
    return e;
  }
  var xP = _g;
  const SP = /* @__PURE__ */ Is(xP);
  var wP = 1, TP = 4;
  function EP(e) {
    return Ai(e, wP | TP);
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
  function Ag(e, t) {
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
  function yp(e) {
    if (e === void 0)
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return e;
  }
  var xa = /* @__PURE__ */ S.createContext(void 0);
  xa.displayName = "FormikContext";
  var CP = xa.Provider, PP = xa.Consumer;
  function uo() {
    var e = S.useContext(xa);
    return e || eg(!1), e;
  }
  var gp = function(t) {
    return Array.isArray(t) && t.length === 0;
  }, Pe = function(t) {
    return typeof t == "function";
  }, co = function(t) {
    return t !== null && typeof t == "object";
  }, kP = function(t) {
    return String(Math.floor(Number(t))) === t;
  }, ll = function(t) {
    return Object.prototype.toString.call(t) === "[object String]";
  }, Og = function(t) {
    return S.Children.count(t) === 0;
  }, ul = function(t) {
    return co(t) && Pe(t.then);
  };
  function ie(e, t, n, r) {
    r === void 0 && (r = 0);
    for (var i = Eg(t); e && r < i.length; )
      e = e[i[r++]];
    return r !== i.length && !e || e === void 0 ? n : e;
  }
  function jt(e, t, n) {
    for (var r = cp(e), i = r, o = 0, s = Eg(t); o < s.length - 1; o++) {
      var a = s[o], l = ie(e, s.slice(0, o + 1));
      if (l && (co(l) || Array.isArray(l)))
        i = i[a] = cp(l);
      else {
        var u = s[o + 1];
        i = i[a] = kP(u) && Number(u) >= 0 ? [] : {};
      }
    }
    return (o === 0 ? e : i)[s[o]] === n ? e : (n === void 0 ? delete i[s[o]] : i[s[o]] = n, o === 0 && n === void 0 && delete r[s[o]], r);
  }
  function Fg(e, t, n, r) {
    n === void 0 && (n = /* @__PURE__ */ new WeakMap()), r === void 0 && (r = {});
    for (var i = 0, o = Object.keys(e); i < o.length; i++) {
      var s = o[i], a = e[s];
      co(a) ? n.get(a) || (n.set(a, !0), r[s] = Array.isArray(a) ? [] : {}, Fg(a, t, n, r[s])) : r[s] = t;
    }
    return r;
  }
  function _P(e, t) {
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
          touched: Fg(e.values, !0),
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
  var Nn = {}, Vo = {};
  function AP(e) {
    var t = e.validateOnChange, n = t === void 0 ? !0 : t, r = e.validateOnBlur, i = r === void 0 ? !0 : r, o = e.validateOnMount, s = o === void 0 ? !1 : o, a = e.isInitialValid, l = e.enableReinitialize, u = l === void 0 ? !1 : l, c = e.onSubmit, f = dn(e, ["validateOnChange", "validateOnBlur", "validateOnMount", "isInitialValid", "enableReinitialize", "onSubmit"]), d = Y({
      validateOnChange: n,
      validateOnBlur: i,
      validateOnMount: s,
      onSubmit: c
    }, f), h = S.useRef(d.initialValues), g = S.useRef(d.initialErrors || Nn), v = S.useRef(d.initialTouched || Vo), k = S.useRef(d.initialStatus), y = S.useRef(!1), p = S.useRef({});
    S.useEffect(function() {
      return y.current = !0, function() {
        y.current = !1;
      };
    }, []);
    var m = S.useState(0), x = m[1], E = S.useRef({
      values: d.initialValues,
      errors: d.initialErrors || Nn,
      touched: d.initialTouched || Vo,
      status: d.initialStatus,
      isSubmitting: !1,
      isValidating: !1,
      submitCount: 0
    }), C = E.current, T = S.useCallback(function(w) {
      var D = E.current;
      E.current = _P(D, w), D !== E.current && x(function(N) {
        return N + 1;
      });
    }, []), _ = S.useCallback(function(w, D) {
      return new Promise(function(N, $) {
        var z = d.validate(w, D);
        z == null ? N(Nn) : ul(z) ? z.then(function(Q) {
          N(Q || Nn);
        }, function(Q) {
          $(Q);
        }) : N(z);
      });
    }, [d.validate]), L = S.useCallback(function(w, D) {
      var N = d.validationSchema, $ = Pe(N) ? N(D) : N, z = D && $.validateAt ? $.validateAt(D, w) : jP(w, $);
      return new Promise(function(Q, ve) {
        z.then(function() {
          Q(Nn);
        }, function(Lt) {
          Lt.name === "ValidationError" ? Q(FP(Lt)) : ve(Lt);
        });
      });
    }, [d.validationSchema]), V = S.useCallback(function(w, D) {
      return new Promise(function(N) {
        return N(p.current[w].validate(D));
      });
    }, []), I = S.useCallback(function(w) {
      var D = Object.keys(p.current).filter(function($) {
        return Pe(p.current[$].validate);
      }), N = D.length > 0 ? D.map(function($) {
        return V($, ie(w, $));
      }) : [Promise.resolve("DO_NOT_DELETE_YOU_WILL_BE_FIRED")];
      return Promise.all(N).then(function($) {
        return $.reduce(function(z, Q, ve) {
          return Q === "DO_NOT_DELETE_YOU_WILL_BE_FIRED" || Q && (z = jt(z, D[ve], Q)), z;
        }, {});
      });
    }, [V]), de = S.useCallback(function(w) {
      return Promise.all([I(w), d.validationSchema ? L(w) : {}, d.validate ? _(w) : {}]).then(function(D) {
        var N = D[0], $ = D[1], z = D[2], Q = Su.all([N, $, z], {
          arrayMerge: DP
        });
        return Q;
      });
    }, [d.validate, d.validationSchema, I, _, L]), U = ot(function(w) {
      return w === void 0 && (w = C.values), T({
        type: "SET_ISVALIDATING",
        payload: !0
      }), de(w).then(function(D) {
        return y.current && (T({
          type: "SET_ISVALIDATING",
          payload: !1
        }), T({
          type: "SET_ERRORS",
          payload: D
        })), D;
      });
    });
    S.useEffect(function() {
      s && y.current === !0 && sn(h.current, d.initialValues) && U(h.current);
    }, [s, U]);
    var G = S.useCallback(function(w) {
      var D = w && w.values ? w.values : h.current, N = w && w.errors ? w.errors : g.current ? g.current : d.initialErrors || {}, $ = w && w.touched ? w.touched : v.current ? v.current : d.initialTouched || {}, z = w && w.status ? w.status : k.current ? k.current : d.initialStatus;
      h.current = D, g.current = N, v.current = $, k.current = z;
      var Q = function() {
        T({
          type: "RESET_FORM",
          payload: {
            isSubmitting: !!w && !!w.isSubmitting,
            errors: N,
            touched: $,
            status: z,
            values: D,
            isValidating: !!w && !!w.isValidating,
            submitCount: w && w.submitCount && typeof w.submitCount == "number" ? w.submitCount : 0
          }
        });
      };
      if (d.onReset) {
        var ve = d.onReset(C.values, ti);
        ul(ve) ? ve.then(Q) : Q();
      } else
        Q();
    }, [d.initialErrors, d.initialStatus, d.initialTouched, d.onReset]);
    S.useEffect(function() {
      y.current === !0 && !sn(h.current, d.initialValues) && u && (h.current = d.initialValues, G(), s && U(h.current));
    }, [u, d.initialValues, G, s, U]), S.useEffect(function() {
      u && y.current === !0 && !sn(g.current, d.initialErrors) && (g.current = d.initialErrors || Nn, T({
        type: "SET_ERRORS",
        payload: d.initialErrors || Nn
      }));
    }, [u, d.initialErrors]), S.useEffect(function() {
      u && y.current === !0 && !sn(v.current, d.initialTouched) && (v.current = d.initialTouched || Vo, T({
        type: "SET_TOUCHED",
        payload: d.initialTouched || Vo
      }));
    }, [u, d.initialTouched]), S.useEffect(function() {
      u && y.current === !0 && !sn(k.current, d.initialStatus) && (k.current = d.initialStatus, T({
        type: "SET_STATUS",
        payload: d.initialStatus
      }));
    }, [u, d.initialStatus, d.initialTouched]);
    var K = ot(function(w) {
      if (p.current[w] && Pe(p.current[w].validate)) {
        var D = ie(C.values, w), N = p.current[w].validate(D);
        return ul(N) ? (T({
          type: "SET_ISVALIDATING",
          payload: !0
        }), N.then(function($) {
          return $;
        }).then(function($) {
          T({
            type: "SET_FIELD_ERROR",
            payload: {
              field: w,
              value: $
            }
          }), T({
            type: "SET_ISVALIDATING",
            payload: !1
          });
        })) : (T({
          type: "SET_FIELD_ERROR",
          payload: {
            field: w,
            value: N
          }
        }), Promise.resolve(N));
      } else if (d.validationSchema)
        return T({
          type: "SET_ISVALIDATING",
          payload: !0
        }), L(C.values, w).then(function($) {
          return $;
        }).then(function($) {
          T({
            type: "SET_FIELD_ERROR",
            payload: {
              field: w,
              value: ie($, w)
            }
          }), T({
            type: "SET_ISVALIDATING",
            payload: !1
          });
        });
      return Promise.resolve();
    }), Ee = S.useCallback(function(w, D) {
      var N = D.validate;
      p.current[w] = {
        validate: N
      };
    }, []), Ie = S.useCallback(function(w) {
      delete p.current[w];
    }, []), P = ot(function(w, D) {
      T({
        type: "SET_TOUCHED",
        payload: w
      });
      var N = D === void 0 ? i : D;
      return N ? U(C.values) : Promise.resolve();
    }), O = S.useCallback(function(w) {
      T({
        type: "SET_ERRORS",
        payload: w
      });
    }, []), j = ot(function(w, D) {
      var N = Pe(w) ? w(C.values) : w;
      T({
        type: "SET_VALUES",
        payload: N
      });
      var $ = D === void 0 ? n : D;
      return $ ? U(N) : Promise.resolve();
    }), R = S.useCallback(function(w, D) {
      T({
        type: "SET_FIELD_ERROR",
        payload: {
          field: w,
          value: D
        }
      });
    }, []), H = ot(function(w, D, N) {
      T({
        type: "SET_FIELD_VALUE",
        payload: {
          field: w,
          value: D
        }
      });
      var $ = N === void 0 ? n : N;
      return $ ? U(jt(C.values, w, D)) : Promise.resolve();
    }), Me = S.useCallback(function(w, D) {
      var N = D, $ = w, z;
      if (!ll(w)) {
        w.persist && w.persist();
        var Q = w.target ? w.target : w.currentTarget, ve = Q.type, Lt = Q.name, Fa = Q.id, ja = Q.value, d0 = Q.checked, NO = Q.outerHTML, Ef = Q.options, p0 = Q.multiple;
        N = D || Lt || Fa, $ = /number|range/.test(ve) ? (z = parseFloat(ja), isNaN(z) ? "" : z) : /checkbox/.test(ve) ? RP(ie(C.values, N), d0, ja) : Ef && p0 ? MP(Ef) : ja;
      }
      N && H(N, $);
    }, [H, C.values]), Re = ot(function(w) {
      if (ll(w))
        return function(D) {
          return Me(D, w);
        };
      Me(w);
    }), Qe = ot(function(w, D, N) {
      D === void 0 && (D = !0), T({
        type: "SET_FIELD_TOUCHED",
        payload: {
          field: w,
          value: D
        }
      });
      var $ = N === void 0 ? i : N;
      return $ ? U(C.values) : Promise.resolve();
    }), Ae = S.useCallback(function(w, D) {
      w.persist && w.persist();
      var N = w.target, $ = N.name, z = N.id, Q = N.outerHTML, ve = D || $ || z;
      Qe(ve, !0);
    }, [Qe]), pt = ot(function(w) {
      if (ll(w))
        return function(D) {
          return Ae(D, w);
        };
      Ae(w);
    }), go = S.useCallback(function(w) {
      Pe(w) ? T({
        type: "SET_FORMIK_STATE",
        payload: w
      }) : T({
        type: "SET_FORMIK_STATE",
        payload: function() {
          return w;
        }
      });
    }, []), pr = S.useCallback(function(w) {
      T({
        type: "SET_STATUS",
        payload: w
      });
    }, []), Ln = S.useCallback(function(w) {
      T({
        type: "SET_ISSUBMITTING",
        payload: w
      });
    }, []), ht = ot(function() {
      return T({
        type: "SUBMIT_ATTEMPT"
      }), U().then(function(w) {
        var D = w instanceof Error, N = !D && Object.keys(w).length === 0;
        if (N) {
          var $;
          try {
            if ($ = o0(), $ === void 0)
              return;
          } catch (z) {
            throw z;
          }
          return Promise.resolve($).then(function(z) {
            return y.current && T({
              type: "SUBMIT_SUCCESS"
            }), z;
          }).catch(function(z) {
            if (y.current)
              throw T({
                type: "SUBMIT_FAILURE"
              }), z;
          });
        } else if (y.current && (T({
          type: "SUBMIT_FAILURE"
        }), D))
          throw w;
      });
    }), vo = ot(function(w) {
      w && w.preventDefault && Pe(w.preventDefault) && w.preventDefault(), w && w.stopPropagation && Pe(w.stopPropagation) && w.stopPropagation(), ht().catch(function(D) {
        console.warn("Warning: An unhandled error was caught from submitForm()", D);
      });
    }), ti = {
      resetForm: G,
      validateForm: U,
      validateField: K,
      setErrors: O,
      setFieldError: R,
      setFieldTouched: Qe,
      setFieldValue: H,
      setStatus: pr,
      setSubmitting: Ln,
      setTouched: P,
      setValues: j,
      setFormikState: go,
      submitForm: ht
    }, o0 = ot(function() {
      return c(C.values, ti);
    }), s0 = ot(function(w) {
      w && w.preventDefault && Pe(w.preventDefault) && w.preventDefault(), w && w.stopPropagation && Pe(w.stopPropagation) && w.stopPropagation(), G();
    }), a0 = S.useCallback(function(w) {
      return {
        value: ie(C.values, w),
        error: ie(C.errors, w),
        touched: !!ie(C.touched, w),
        initialValue: ie(h.current, w),
        initialTouched: !!ie(v.current, w),
        initialError: ie(g.current, w)
      };
    }, [C.errors, C.touched, C.values]), l0 = S.useCallback(function(w) {
      return {
        setValue: function(N, $) {
          return H(w, N, $);
        },
        setTouched: function(N, $) {
          return Qe(w, N, $);
        },
        setError: function(N) {
          return R(w, N);
        }
      };
    }, [H, Qe, R]), u0 = S.useCallback(function(w) {
      var D = co(w), N = D ? w.name : w, $ = ie(C.values, N), z = {
        name: N,
        value: $,
        onChange: Re,
        onBlur: pt
      };
      if (D) {
        var Q = w.type, ve = w.value, Lt = w.as, Fa = w.multiple;
        Q === "checkbox" ? ve === void 0 ? z.checked = !!$ : (z.checked = !!(Array.isArray($) && ~$.indexOf(ve)), z.value = ve) : Q === "radio" ? (z.checked = $ === ve, z.value = ve) : Lt === "select" && Fa && (z.value = z.value || [], z.multiple = !0);
      }
      return z;
    }, [pt, Re, C.values]), Oa = S.useMemo(function() {
      return !sn(h.current, C.values);
    }, [h.current, C.values]), c0 = S.useMemo(function() {
      return typeof a < "u" ? Oa ? C.errors && Object.keys(C.errors).length === 0 : a !== !1 && Pe(a) ? a(d) : a : C.errors && Object.keys(C.errors).length === 0;
    }, [a, Oa, C.errors, d]), f0 = Y({}, C, {
      initialValues: h.current,
      initialErrors: g.current,
      initialTouched: v.current,
      initialStatus: k.current,
      handleBlur: pt,
      handleChange: Re,
      handleReset: s0,
      handleSubmit: vo,
      resetForm: G,
      setErrors: O,
      setFormikState: go,
      setFieldTouched: Qe,
      setFieldValue: H,
      setFieldError: R,
      setStatus: pr,
      setSubmitting: Ln,
      setTouched: P,
      setValues: j,
      submitForm: ht,
      validateForm: U,
      validateField: K,
      isValid: c0,
      dirty: Oa,
      unregisterField: Ie,
      registerField: Ee,
      getFieldProps: u0,
      getFieldMeta: a0,
      getFieldHelpers: l0,
      validateOnBlur: i,
      validateOnChange: n,
      validateOnMount: s
    });
    return f0;
  }
  function OP(e) {
    var t = AP(e), n = e.component, r = e.children, i = e.render, o = e.innerRef;
    return S.useImperativeHandle(o, function() {
      return t;
    }), S.createElement(CP, {
      value: t
    }, n ? S.createElement(n, t) : i ? i(t) : r ? Pe(r) ? r(t) : Og(r) ? null : S.Children.only(r) : null);
  }
  function FP(e) {
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
        ie(t, s.path) || (t = jt(t, s.path, s.message));
      }
    }
    return t;
  }
  function jP(e, t, n, r) {
    n === void 0 && (n = !1);
    var i = ku(e);
    return t[n ? "validateSync" : "validate"](i, {
      abortEarly: !1,
      context: r || i
    });
  }
  function ku(e) {
    var t = Array.isArray(e) ? [] : {};
    for (var n in e)
      if (Object.prototype.hasOwnProperty.call(e, n)) {
        var r = String(n);
        Array.isArray(e[r]) === !0 ? t[r] = e[r].map(function(i) {
          return Array.isArray(i) === !0 || Id(i) ? ku(i) : i !== "" ? i : void 0;
        }) : Id(e[r]) ? t[r] = ku(e[r]) : t[r] = e[r] !== "" ? e[r] : void 0;
      }
    return t;
  }
  function DP(e, t, n) {
    var r = e.slice();
    return t.forEach(function(o, s) {
      if (typeof r[s] > "u") {
        var a = n.clone !== !1, l = a && n.isMergeableObject(o);
        r[s] = l ? Su(Array.isArray(o) ? [] : {}, o, n) : o;
      } else
        n.isMergeableObject(o) ? r[s] = Su(e[s], o, n) : e.indexOf(o) === -1 && r.push(o);
    }), r;
  }
  function MP(e) {
    return Array.from(e).filter(function(t) {
      return t.selected;
    }).map(function(t) {
      return t.value;
    });
  }
  function RP(e, t, n) {
    if (typeof e == "boolean")
      return !!t;
    var r = [], i = !1, o = -1;
    if (Array.isArray(e))
      r = e, o = e.indexOf(n), i = o >= 0;
    else if (!n || n == "true" || n == "false")
      return !!t;
    return t && n && !i ? r.concat(n) : i ? r.slice(0, o).concat(r.slice(o + 1)) : r;
  }
  var LP = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u" ? S.useLayoutEffect : S.useEffect;
  function ot(e) {
    var t = S.useRef(e);
    return LP(function() {
      t.current = e;
    }), S.useCallback(function() {
      for (var n = arguments.length, r = new Array(n), i = 0; i < n; i++)
        r[i] = arguments[i];
      return t.current.apply(void 0, r);
    }, []);
  }
  function NP(e) {
    var t = e.validate, n = e.name, r = e.render, i = e.children, o = e.as, s = e.component, a = e.className, l = dn(e, ["validate", "name", "render", "children", "as", "component", "className"]), u = uo(), c = dn(u, ["validate", "validationSchema"]), f = c.registerField, d = c.unregisterField;
    S.useEffect(function() {
      return f(n, {
        validate: t
      }), function() {
        d(n);
      };
    }, [f, d, n, t]);
    var h = c.getFieldProps(Y({
      name: n
    }, l)), g = c.getFieldMeta(n), v = {
      field: h,
      form: c
    };
    if (r)
      return r(Y({}, v, {
        meta: g
      }));
    if (Pe(i))
      return i(Y({}, v, {
        meta: g
      }));
    if (s) {
      if (typeof s == "string") {
        var k = l.innerRef, y = dn(l, ["innerRef"]);
        return S.createElement(s, Y({
          ref: k
        }, h, y, {
          className: a
        }), i);
      }
      return S.createElement(s, Y({
        field: h,
        form: c
      }, l, {
        className: a
      }), i);
    }
    var p = o || "input";
    if (typeof p == "string") {
      var m = l.innerRef, x = dn(l, ["innerRef"]);
      return S.createElement(p, Y({
        ref: m
      }, h, x, {
        className: a
      }), i);
    }
    return S.createElement(p, Y({}, h, l, {
      className: a
    }), i);
  }
  var jg = /* @__PURE__ */ S.forwardRef(function(e, t) {
    var n = e.action, r = dn(e, ["action"]), i = n ?? "#", o = uo(), s = o.handleReset, a = o.handleSubmit;
    return S.createElement("form", Y({
      onSubmit: a,
      ref: t,
      onReset: s,
      action: i
    }, r));
  });
  jg.displayName = "Form";
  function VP(e) {
    var t = function(i) {
      return S.createElement(PP, null, function(o) {
        return o || eg(!1), S.createElement(e, Y({}, i, {
          formik: o
        }));
      });
    }, n = e.displayName || e.name || e.constructor && e.constructor.name || "Component";
    return t.WrappedComponent = e, t.displayName = "FormikConnect(" + n + ")", SP(
      t,
      e
      // cast type to ComponentClass (even if SFC)
    );
  }
  var $P = function(t, n, r) {
    var i = nr(t), o = i[n];
    return i.splice(n, 1), i.splice(r, 0, o), i;
  }, bP = function(t, n, r) {
    var i = nr(t), o = i[n];
    return i[n] = i[r], i[r] = o, i;
  }, cl = function(t, n, r) {
    var i = nr(t);
    return i.splice(n, 0, r), i;
  }, IP = function(t, n, r) {
    var i = nr(t);
    return i[n] = r, i;
  }, nr = function(t) {
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
  }, vp = function(t, n) {
    var r = typeof t == "function" ? t : n;
    return function(i) {
      if (Array.isArray(i) || co(i)) {
        var o = nr(i);
        return r(o);
      }
      return i;
    };
  }, zP = /* @__PURE__ */ function(e) {
    Ag(t, e);
    function t(r) {
      var i;
      return i = e.call(this, r) || this, i.updateArrayField = function(o, s, a) {
        var l = i.props, u = l.name, c = l.formik.setFormikState;
        c(function(f) {
          var d = vp(a, o), h = vp(s, o), g = jt(f.values, u, o(ie(f.values, u))), v = a ? d(ie(f.errors, u)) : void 0, k = s ? h(ie(f.touched, u)) : void 0;
          return gp(v) && (v = void 0), gp(k) && (k = void 0), Y({}, f, {
            values: g,
            errors: a ? jt(f.errors, u, v) : f.errors,
            touched: s ? jt(f.touched, u, k) : f.touched
          });
        });
      }, i.push = function(o) {
        return i.updateArrayField(function(s) {
          return [].concat(nr(s), [EP(o)]);
        }, !1, !1);
      }, i.handlePush = function(o) {
        return function() {
          return i.push(o);
        };
      }, i.swap = function(o, s) {
        return i.updateArrayField(function(a) {
          return bP(a, o, s);
        }, !0, !0);
      }, i.handleSwap = function(o, s) {
        return function() {
          return i.swap(o, s);
        };
      }, i.move = function(o, s) {
        return i.updateArrayField(function(a) {
          return $P(a, o, s);
        }, !0, !0);
      }, i.handleMove = function(o, s) {
        return function() {
          return i.move(o, s);
        };
      }, i.insert = function(o, s) {
        return i.updateArrayField(function(a) {
          return cl(a, o, s);
        }, function(a) {
          return cl(a, o, null);
        }, function(a) {
          return cl(a, o, null);
        });
      }, i.handleInsert = function(o, s) {
        return function() {
          return i.insert(o, s);
        };
      }, i.replace = function(o, s) {
        return i.updateArrayField(function(a) {
          return IP(a, o, s);
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
      }, i.remove = i.remove.bind(yp(i)), i.pop = i.pop.bind(yp(i)), i;
    }
    var n = t.prototype;
    return n.componentDidUpdate = function(i) {
      this.props.validateOnChange && this.props.formik.validateOnChange && !sn(ie(i.formik.values, i.name), ie(this.props.formik.values, this.props.name)) && this.props.formik.validateForm(this.props.formik.values);
    }, n.remove = function(i) {
      var o;
      return this.updateArrayField(
        // so this gets call 3 times
        function(s) {
          var a = s ? nr(s) : [];
          return o || (o = a[i]), Pe(a.splice) && a.splice(i, 1), Pe(a.every) && a.every(function(l) {
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
      }, o = this.props, s = o.component, a = o.render, l = o.children, u = o.name, c = o.formik, f = dn(c, ["validate", "validationSchema"]), d = Y({}, i, {
        form: f,
        name: u
      });
      return s ? S.createElement(s, d) : a ? a(d) : l ? typeof l == "function" ? l(d) : Og(l) ? null : S.Children.only(l) : null;
    }, t;
  }(S.Component);
  zP.defaultProps = {
    validateOnChange: !0
  };
  var BP = /* @__PURE__ */ function(e) {
    Ag(t, e);
    function t() {
      return e.apply(this, arguments) || this;
    }
    var n = t.prototype;
    return n.shouldComponentUpdate = function(i) {
      return ie(this.props.formik.errors, this.props.name) !== ie(i.formik.errors, this.props.name) || ie(this.props.formik.touched, this.props.name) !== ie(i.formik.touched, this.props.name) || Object.keys(this.props).length !== Object.keys(i).length;
    }, n.render = function() {
      var i = this.props, o = i.component, s = i.formik, a = i.render, l = i.children, u = i.name, c = dn(i, ["component", "formik", "render", "children", "name"]), f = ie(s.touched, u), d = ie(s.errors, u);
      return f && d ? a ? Pe(a) ? a(d) : null : l ? Pe(l) ? l(d) : null : o ? S.createElement(o, c, d) : d : null;
    }, t;
  }(S.Component), UP = /* @__PURE__ */ VP(BP);
  const Dg = S.createContext(void 0);
  function fo() {
    const e = S.useContext(Dg);
    if (e === void 0)
      throw new Error("useWizard must be used within the Wizard app!");
    return e;
  }
  function HP({ step: e }) {
    const { submitForm: t, setFieldValue: n } = uo();
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
  function WP(e) {
    const t = {};
    return e.forEach((n) => {
      const r = n.id.replace(/[A-Z]/g, (i, o) => (o > 0 ? "-" : "") + i.toLowerCase());
      t[r] = n;
    }), t;
  }
  function xp(e) {
    const t = window.location.hash.slice(1);
    return e[t];
  }
  function GP(e, t) {
    const n = Object.keys(e).find((r) => e[r].id === t.id);
    window.location.hash = n || window.location.hash;
  }
  function KP({
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
    r && (l = WP(e), a = xp(l) || a);
    const [u, c] = S.useState(a), [f, d] = S.useState(!1), [h, g] = S.useState({}), v = S.useRef(null), k = e.findIndex((P) => P.id === u.id), y = k + 1, p = e.length, m = y === 1, x = y === p;
    S.useEffect(() => {
      if (r)
        return window.addEventListener("hashchange", E), GP(l, u), () => window.removeEventListener("hashchange", E);
    }, [u]);
    function E() {
      const P = xp(l);
      (P == null ? void 0 : P.id) !== u.id && V(P, v.current);
    }
    async function C(P, O, j) {
      let R;
      for (let H = 0; H < P.length; ++H) {
        const Me = P[H];
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
    async function T(P) {
      const O = e.slice(k + 1);
      return await C(O, P, 1);
    }
    async function _(P) {
      const O = e.slice(0, k).reverse();
      return await C(O, P, -1);
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
      c(P), O.resetForm({ values: Ee(P) });
    }
    async function I(P, O) {
      try {
        u.onSubmit && (O.setStatus(""), d(!0), P = await u.onSubmit(P, h, O), d(!1));
        const j = {
          ...h,
          [u.id]: P
        };
        g(j);
        const R = await T(j);
        if (!R) {
          L(j);
          return;
        }
        n && n(u, R, j), V(R, O);
      } catch (j) {
        console.log(j), d(!1), O.setStatus(j.message);
      }
    }
    async function de(P, O) {
      let j = null;
      (u.keepValuesOnPrevious ?? !0) && (j = {
        ...h,
        [u.id]: P
      }, g(j)), j = j || h;
      const R = await _(j);
      R && (n && n(u, R, j), V(R, O));
    }
    function U(P) {
      if (P)
        return (O) => P(O, h);
    }
    function G(P, O) {
      V(e[P], O);
    }
    function K(P, O) {
      c({ ...u, [P]: O });
    }
    function Ee(P) {
      return h[P.id] || P.initialValues || {};
    }
    function Ie(P) {
      return {
        values: h,
        setValues: g,
        setIsLoading: d,
        updateStep: K,
        goToPreviousStep: () => de(P.values, P),
        goToNextStep: () => I(P.values, P),
        goToStep: (O) => G(O, P),
        activeStep: u,
        stepNumber: y,
        totalSteps: p,
        isLoading: f,
        isFirstStep: m,
        isLastStep: x
      };
    }
    return /* @__PURE__ */ F.jsx(
      OP,
      {
        initialValues: Ee(u),
        validationSchema: u.validationSchema,
        validate: U(u.validate),
        validateOnChange: u.validateOnChange ?? !0,
        validateOnBlur: u.validateOnBlur ?? !0,
        onSubmit: I,
        innerRef: v,
        children: (P) => {
          const O = Ie(P), j = o || u.component;
          return /* @__PURE__ */ F.jsx(Dg.Provider, { value: O, children: /* @__PURE__ */ F.jsxs(jg, { children: [
            i,
            j,
            s,
            u.submitOnChange && /* @__PURE__ */ F.jsx(HP, { step: u })
          ] }) });
        }
      }
    );
  }
  function QP() {
    const { goToStep: e } = fo();
    return /* @__PURE__ */ F.jsxs("div", { className: "prose max-w-none", children: [
      /* @__PURE__ */ F.jsx("h2", { children: "Warning" }),
      /* @__PURE__ */ F.jsx("p", { children: "Seems like you did not fill your email. Would you like to do it?" }),
      /* @__PURE__ */ F.jsxs("p", { children: [
        /* @__PURE__ */ F.jsx("b", { children: "Note:" }),
        " This step is automatically skipped if user filled their email in the first step."
      ] }),
      /* @__PURE__ */ F.jsxs("div", { className: "flex gap-4", children: [
        /* @__PURE__ */ F.jsx("button", { className: "btn text-white", type: "submit", children: "No" }),
        /* @__PURE__ */ F.jsx("button", { className: "btn text-white", type: "button", onClick: () => e(0), children: "Yes" })
      ] })
    ] });
  }
  function YP() {
    return /* @__PURE__ */ F.jsxs("div", { className: "prose max-w-none", children: [
      /* @__PURE__ */ F.jsx("h2", { children: "Async" }),
      /* @__PURE__ */ F.jsx("p", { children: 'Pressing "Next" does async operation that takes 2 seconds before we proceed to the next step.' })
    ] });
  }
  function XP() {
    const { values: e, updateStep: t } = fo(), [n, r] = S.useState(!0);
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
        /* @__PURE__ */ F.jsx("button", { className: "btn text-white", onClick: i, type: "button", children: "Toggle hideNext" })
      ] }),
      /* @__PURE__ */ F.jsx("code", { className: "text-sm sm:text-base", children: /* @__PURE__ */ F.jsx("pre", { className: "mt-0", children: JSON.stringify(o, null, 2) }) })
    ] });
  }
  const ZP = [
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
      validationSchema: jS,
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
      validate: DS,
      disableNextOnErrors: !0
    },
    {
      id: "EmailCheck",
      component: /* @__PURE__ */ F.jsx(QP, {}),
      hideNext: !0,
      hidePrevious: !0,
      shouldSkip: (e, t) => t === -1 ? !0 : !!e.ContactInfo.email
    },
    {
      id: "Async",
      component: /* @__PURE__ */ F.jsx(YP, {}),
      onSubmit: async (e, t, n) => (await ((i) => new Promise((o) => setTimeout(o, i)))(2e3), e)
    },
    {
      id: "Final",
      component: /* @__PURE__ */ F.jsx(XP, {}),
      hideNext: !0,
      hidePrevious: !1
    }
  ], Mg = S.createContext({
    transformPagePoint: (e) => e,
    isStatic: !1,
    reducedMotion: "never"
  }), Sa = S.createContext({}), wa = S.createContext(null), Ta = typeof document < "u", ef = Ta ? S.useLayoutEffect : S.useEffect, Rg = S.createContext({ strict: !1 });
  function qP(e, t, n, r) {
    const { visualElement: i } = S.useContext(Sa), o = S.useContext(Rg), s = S.useContext(wa), a = S.useContext(Mg).reducedMotion, l = S.useRef();
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
    const c = S.useRef(!!window.HandoffAppearAnimations);
    return ef(() => {
      u && (u.render(), c.current && u.animationState && u.animationState.animateChanges());
    }), S.useEffect(() => {
      u && (u.updateFeatures(), !c.current && u.animationState && u.animationState.animateChanges(), window.HandoffAppearAnimations = void 0, c.current = !1);
    }), u;
  }
  function Fr(e) {
    return typeof e == "object" && Object.prototype.hasOwnProperty.call(e, "current");
  }
  function JP(e, t, n) {
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
  function Ji(e) {
    return typeof e == "string" || Array.isArray(e);
  }
  function Ea(e) {
    return typeof e == "object" && typeof e.start == "function";
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
  function Ca(e) {
    return Ea(e.animate) || nf.some((t) => Ji(e[t]));
  }
  function Lg(e) {
    return !!(Ca(e) || e.variants);
  }
  function ek(e, t) {
    if (Ca(e)) {
      const { initial: n, animate: r } = e;
      return {
        initial: n === !1 || Ji(n) ? n : void 0,
        animate: Ji(r) ? r : void 0
      };
    }
    return e.inherit !== !1 ? t : {};
  }
  function tk(e) {
    const { initial: t, animate: n } = ek(e, S.useContext(Sa));
    return S.useMemo(() => ({ initial: t, animate: n }), [Sp(t), Sp(n)]);
  }
  function Sp(e) {
    return Array.isArray(e) ? e.join(" ") : e;
  }
  const wp = {
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
  }, eo = {};
  for (const e in wp)
    eo[e] = {
      isEnabled: (t) => wp[e].some((n) => !!t[n])
    };
  function nk(e) {
    for (const t in e)
      eo[t] = {
        ...eo[t],
        ...e[t]
      };
  }
  const rf = S.createContext({}), Ng = S.createContext({}), rk = Symbol.for("motionComponentSymbol");
  function ik({ preloadedFeatures: e, createVisualElement: t, useRender: n, useVisualState: r, Component: i }) {
    e && nk(e);
    function o(a, l) {
      let u;
      const c = {
        ...S.useContext(Mg),
        ...a,
        layoutId: ok(a)
      }, { isStatic: f } = c, d = tk(a), h = r(a, f);
      if (!f && Ta) {
        d.visualElement = qP(i, h, c, t);
        const g = S.useContext(Ng), v = S.useContext(Rg).strict;
        d.visualElement && (u = d.visualElement.loadFeatures(
          // Note: Pass the full new combined props to correctly re-render dynamic feature components.
          c,
          v,
          e,
          g
        ));
      }
      return S.createElement(
        Sa.Provider,
        { value: d },
        u && d.visualElement ? S.createElement(u, { visualElement: d.visualElement, ...c }) : null,
        n(i, a, JP(h, d.visualElement, l), h, f, d.visualElement)
      );
    }
    const s = S.forwardRef(o);
    return s[rk] = i, s;
  }
  function ok({ layoutId: e }) {
    const t = S.useContext(rf).id;
    return t && e !== void 0 ? t + "-" + e : e;
  }
  function sk(e) {
    function t(r, i = {}) {
      return ik(e(r, i));
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
  const ak = [
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
        !!(ak.indexOf(e) > -1 || /**
         * If it contains a capital letter, it's an SVG component
         */
        /[A-Z]/.test(e))
      )
    );
  }
  const js = {};
  function lk(e) {
    Object.assign(js, e);
  }
  const po = [
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
  ], fr = new Set(po);
  function Vg(e, { layout: t, layoutId: n }) {
    return fr.has(e) || e.startsWith("origin") || (t || n !== void 0) && (!!js[e] || e === "opacity");
  }
  const Ke = (e) => !!(e && e.getVelocity), uk = {
    x: "translateX",
    y: "translateY",
    z: "translateZ",
    transformPerspective: "perspective"
  }, ck = po.length;
  function fk(e, { enableHardwareAcceleration: t = !0, allowTransformNone: n = !0 }, r, i) {
    let o = "";
    for (let s = 0; s < ck; s++) {
      const a = po[s];
      if (e[a] !== void 0) {
        const l = uk[a] || a;
        o += `${l}(${e[a]}) `;
      }
    }
    return t && !e.z && (o += "translateZ(0)"), o = o.trim(), i ? o = i(e, r ? "" : o) : n && r && (o = "none"), o;
  }
  const $g = (e) => (t) => typeof t == "string" && t.startsWith(e), bg = $g("--"), _u = $g("var(--"), dk = /var\s*\(\s*--[\w-]+(\s*,\s*(?:(?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)+)?\s*\)/g, pk = (e, t) => t && typeof e == "number" ? t.transform(e) : e, An = (e, t, n) => Math.min(Math.max(n, e), t), dr = {
    test: (e) => typeof e == "number",
    parse: parseFloat,
    transform: (e) => e
  }, Oi = {
    ...dr,
    transform: (e) => An(0, 1, e)
  }, $o = {
    ...dr,
    default: 1
  }, Fi = (e) => Math.round(e * 1e5) / 1e5, Pa = /(-)?([\d]*\.?[\d])+/g, Ig = /(#[0-9a-f]{3,8}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))/gi, hk = /^(#[0-9a-f]{3,8}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))$/i;
  function ho(e) {
    return typeof e == "string";
  }
  const mo = (e) => ({
    test: (t) => ho(t) && t.endsWith(e) && t.split(" ").length === 1,
    parse: parseFloat,
    transform: (t) => `${t}${e}`
  }), nn = mo("deg"), Dt = mo("%"), b = mo("px"), mk = mo("vh"), yk = mo("vw"), Tp = {
    ...Dt,
    parse: (e) => Dt.parse(e) / 100,
    transform: (e) => Dt.transform(e * 100)
  }, Ep = {
    ...dr,
    transform: Math.round
  }, zg = {
    // Border props
    borderWidth: b,
    borderTopWidth: b,
    borderRightWidth: b,
    borderBottomWidth: b,
    borderLeftWidth: b,
    borderRadius: b,
    radius: b,
    borderTopLeftRadius: b,
    borderTopRightRadius: b,
    borderBottomRightRadius: b,
    borderBottomLeftRadius: b,
    // Positioning props
    width: b,
    maxWidth: b,
    height: b,
    maxHeight: b,
    size: b,
    top: b,
    right: b,
    bottom: b,
    left: b,
    // Spacing props
    padding: b,
    paddingTop: b,
    paddingRight: b,
    paddingBottom: b,
    paddingLeft: b,
    margin: b,
    marginTop: b,
    marginRight: b,
    marginBottom: b,
    marginLeft: b,
    // Transform props
    rotate: nn,
    rotateX: nn,
    rotateY: nn,
    rotateZ: nn,
    scale: $o,
    scaleX: $o,
    scaleY: $o,
    scaleZ: $o,
    skew: nn,
    skewX: nn,
    skewY: nn,
    distance: b,
    translateX: b,
    translateY: b,
    translateZ: b,
    x: b,
    y: b,
    z: b,
    perspective: b,
    transformPerspective: b,
    opacity: Oi,
    originX: Tp,
    originY: Tp,
    originZ: b,
    // Misc
    zIndex: Ep,
    // SVG
    fillOpacity: Oi,
    strokeOpacity: Oi,
    numOctaves: Ep
  };
  function sf(e, t, n, r) {
    const { style: i, vars: o, transform: s, transformOrigin: a } = e;
    let l = !1, u = !1, c = !0;
    for (const f in t) {
      const d = t[f];
      if (bg(f)) {
        o[f] = d;
        continue;
      }
      const h = zg[f], g = pk(d, h);
      if (fr.has(f)) {
        if (l = !0, s[f] = g, !c)
          continue;
        d !== (h.default || 0) && (c = !1);
      } else
        f.startsWith("origin") ? (u = !0, a[f] = g) : i[f] = g;
    }
    if (t.transform || (l || r ? i.transform = fk(e.transform, n, c, r) : i.transform && (i.transform = "none")), u) {
      const { originX: f = "50%", originY: d = "50%", originZ: h = 0 } = a;
      i.transformOrigin = `${f} ${d} ${h}`;
    }
  }
  const af = () => ({
    style: {},
    transform: {},
    transformOrigin: {},
    vars: {}
  });
  function Bg(e, t, n) {
    for (const r in t)
      !Ke(t[r]) && !Vg(r, n) && (e[r] = t[r]);
  }
  function gk({ transformTemplate: e }, t, n) {
    return S.useMemo(() => {
      const r = af();
      return sf(r, t, { enableHardwareAcceleration: !n }, e), Object.assign({}, r.vars, r.style);
    }, [t]);
  }
  function vk(e, t, n) {
    const r = e.style || {}, i = {};
    return Bg(i, r, e), Object.assign(i, gk(e, t, n)), e.transformValues ? e.transformValues(i) : i;
  }
  function xk(e, t, n) {
    const r = {}, i = vk(e, t, n);
    return e.drag && e.dragListener !== !1 && (r.draggable = !1, i.userSelect = i.WebkitUserSelect = i.WebkitTouchCallout = "none", i.touchAction = e.drag === !0 ? "none" : `pan-${e.drag === "x" ? "y" : "x"}`), e.tabIndex === void 0 && (e.onTap || e.onTapStart || e.whileTap) && (r.tabIndex = 0), r.style = i, r;
  }
  const Sk = /* @__PURE__ */ new Set([
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
    "onLayoutAnimationStart",
    "onLayoutAnimationComplete",
    "onLayoutMeasure",
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
    "ignoreStrict",
    "viewport"
  ]);
  function Ds(e) {
    return e.startsWith("while") || e.startsWith("drag") && e !== "draggable" || e.startsWith("layout") || e.startsWith("onTap") || e.startsWith("onPan") || Sk.has(e);
  }
  let Ug = (e) => !Ds(e);
  function wk(e) {
    e && (Ug = (t) => t.startsWith("on") ? !Ds(t) : e(t));
  }
  try {
    wk(require("@emotion/is-prop-valid").default);
  } catch {
  }
  function Tk(e, t, n) {
    const r = {};
    for (const i in e)
      i === "values" && typeof e.values == "object" || (Ug(i) || n === !0 && Ds(i) || !t && !Ds(i) || // If trying to use native HTML drag events, forward drag listeners
      e.draggable && i.startsWith("onDrag")) && (r[i] = e[i]);
    return r;
  }
  function Cp(e, t, n) {
    return typeof e == "string" ? e : b.transform(t + n * e);
  }
  function Ek(e, t, n) {
    const r = Cp(t, e.x, e.width), i = Cp(n, e.y, e.height);
    return `${r} ${i}`;
  }
  const Ck = {
    offset: "stroke-dashoffset",
    array: "stroke-dasharray"
  }, Pk = {
    offset: "strokeDashoffset",
    array: "strokeDasharray"
  };
  function kk(e, t, n = 1, r = 0, i = !0) {
    e.pathLength = 1;
    const o = i ? Ck : Pk;
    e[o.offset] = b.transform(-r);
    const s = b.transform(t), a = b.transform(n);
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
  }, c, f, d) {
    if (sf(e, u, c, d), f) {
      e.style.viewBox && (e.attrs.viewBox = e.style.viewBox);
      return;
    }
    e.attrs = e.style, e.style = {};
    const { attrs: h, style: g, dimensions: v } = e;
    h.transform && (v && (g.transform = h.transform), delete h.transform), v && (i !== void 0 || o !== void 0 || g.transform) && (g.transformOrigin = Ek(v, i !== void 0 ? i : 0.5, o !== void 0 ? o : 0.5)), t !== void 0 && (h.x = t), n !== void 0 && (h.y = n), r !== void 0 && (h.scale = r), s !== void 0 && kk(h, s, a, l, !1);
  }
  const Hg = () => ({
    ...af(),
    attrs: {}
  }), uf = (e) => typeof e == "string" && e.toLowerCase() === "svg";
  function _k(e, t, n, r) {
    const i = S.useMemo(() => {
      const o = Hg();
      return lf(o, t, { enableHardwareAcceleration: !1 }, uf(r), e.transformTemplate), {
        ...o.attrs,
        style: { ...o.style }
      };
    }, [t]);
    if (e.style) {
      const o = {};
      Bg(o, e.style, e), i.style = { ...o, ...i.style };
    }
    return i;
  }
  function Ak(e = !1) {
    return (n, r, i, { latestValues: o }, s) => {
      const l = (of(n) ? _k : xk)(r, o, s, n), c = {
        ...Tk(r, typeof n == "string", e),
        ...l,
        ref: i
      }, { children: f } = r, d = S.useMemo(() => Ke(f) ? f.get() : f, [f]);
      return S.createElement(n, {
        ...c,
        children: d
      });
    };
  }
  const cf = (e) => e.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase();
  function Wg(e, { style: t, vars: n }, r, i) {
    Object.assign(e.style, t, i && i.getProjectionStyles(r));
    for (const o in n)
      e.style.setProperty(o, n[o]);
  }
  const Gg = /* @__PURE__ */ new Set([
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
  function Kg(e, t, n, r) {
    Wg(e, t, void 0, r);
    for (const i in t.attrs)
      e.setAttribute(Gg.has(i) ? i : cf(i), t.attrs[i]);
  }
  function ff(e, t) {
    const { style: n } = e, r = {};
    for (const i in n)
      (Ke(n[i]) || t.style && Ke(t.style[i]) || Vg(i, e)) && (r[i] = n[i]);
    return r;
  }
  function Qg(e, t) {
    const n = ff(e, t);
    for (const r in e)
      if (Ke(e[r]) || Ke(t[r])) {
        const i = po.indexOf(r) !== -1 ? "attr" + r.charAt(0).toUpperCase() + r.substring(1) : r;
        n[i] = e[r];
      }
    return n;
  }
  function df(e, t, n, r = {}, i = {}) {
    return typeof t == "function" && (t = t(n !== void 0 ? n : e.custom, r, i)), typeof t == "string" && (t = e.variants && e.variants[t]), typeof t == "function" && (t = t(n !== void 0 ? n : e.custom, r, i)), t;
  }
  function Yg(e) {
    const t = S.useRef(null);
    return t.current === null && (t.current = e()), t.current;
  }
  const Ms = (e) => Array.isArray(e), Ok = (e) => !!(e && typeof e == "object" && e.mix && e.toValue), Fk = (e) => Ms(e) ? e[e.length - 1] || 0 : e;
  function ns(e) {
    const t = Ke(e) ? e.get() : e;
    return Ok(t) ? t.toValue() : t;
  }
  function jk({ scrapeMotionValuesFromProps: e, createRenderState: t, onMount: n }, r, i, o) {
    const s = {
      latestValues: Dk(r, i, o, e),
      renderState: t()
    };
    return n && (s.mount = (a) => n(r, a, s)), s;
  }
  const Xg = (e) => (t, n) => {
    const r = S.useContext(Sa), i = S.useContext(wa), o = () => jk(e, t, r, i);
    return n ? o() : Yg(o);
  };
  function Dk(e, t, n, r) {
    const i = {}, o = r(e, {});
    for (const d in o)
      i[d] = ns(o[d]);
    let { initial: s, animate: a } = e;
    const l = Ca(e), u = Lg(e);
    t && u && !l && e.inherit !== !1 && (s === void 0 && (s = t.initial), a === void 0 && (a = t.animate));
    let c = n ? n.initial === !1 : !1;
    c = c || s === !1;
    const f = c ? a : s;
    return f && typeof f != "boolean" && !Ea(f) && (Array.isArray(f) ? f : [f]).forEach((h) => {
      const g = df(e, h);
      if (!g)
        return;
      const { transitionEnd: v, transition: k, ...y } = g;
      for (const p in y) {
        let m = y[p];
        if (Array.isArray(m)) {
          const x = c ? m.length - 1 : 0;
          m = m[x];
        }
        m !== null && (i[p] = m);
      }
      for (const p in v)
        i[p] = v[p];
    }), i;
  }
  const fe = (e) => e;
  class Pp {
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
  function Mk(e) {
    let t = new Pp(), n = new Pp(), r = 0, i = !1, o = !1;
    const s = /* @__PURE__ */ new WeakSet(), a = {
      /**
       * Schedule a process to run on the next frame.
       */
      schedule: (l, u = !1, c = !1) => {
        const f = c && i, d = f ? t : n;
        return u && s.add(l), d.add(l) && f && i && (r = t.order.length), l;
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
            const c = t.order[u];
            c(l), s.has(c) && (a.schedule(c), e());
          }
        i = !1, o && (o = !1, a.process(l));
      }
    };
    return a;
  }
  const bo = [
    "prepare",
    "read",
    "update",
    "preRender",
    "render",
    "postRender"
  ], Rk = 40;
  function Lk(e, t) {
    let n = !1, r = !0;
    const i = {
      delta: 0,
      timestamp: 0,
      isProcessing: !1
    }, o = bo.reduce((f, d) => (f[d] = Mk(() => n = !0), f), {}), s = (f) => o[f].process(i), a = () => {
      const f = performance.now();
      n = !1, i.delta = r ? 1e3 / 60 : Math.max(Math.min(f - i.timestamp, Rk), 1), i.timestamp = f, i.isProcessing = !0, bo.forEach(s), i.isProcessing = !1, n && t && (r = !1, e(a));
    }, l = () => {
      n = !0, r = !0, i.isProcessing || e(a);
    };
    return { schedule: bo.reduce((f, d) => {
      const h = o[d];
      return f[d] = (g, v = !1, k = !1) => (n || l(), h.schedule(g, v, k)), f;
    }, {}), cancel: (f) => bo.forEach((d) => o[d].cancel(f)), state: i, steps: o };
  }
  const { schedule: ee, cancel: Zt, state: xe, steps: fl } = Lk(typeof requestAnimationFrame < "u" ? requestAnimationFrame : fe, !0), Nk = {
    useVisualState: Xg({
      scrapeMotionValuesFromProps: Qg,
      createRenderState: Hg,
      onMount: (e, t, { renderState: n, latestValues: r }) => {
        ee.read(() => {
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
        }), ee.render(() => {
          lf(n, r, { enableHardwareAcceleration: !1 }, uf(t.tagName), e.transformTemplate), Kg(t, n);
        });
      }
    })
  }, Vk = {
    useVisualState: Xg({
      scrapeMotionValuesFromProps: ff,
      createRenderState: af
    })
  };
  function $k(e, { forwardMotionProps: t = !1 }, n, r) {
    return {
      ...of(e) ? Nk : Vk,
      preloadedFeatures: n,
      useRender: Ak(t),
      createVisualElement: r,
      Component: e
    };
  }
  function Bt(e, t, n, r = { passive: !0 }) {
    return e.addEventListener(t, n, r), () => e.removeEventListener(t, n);
  }
  const Zg = (e) => e.pointerType === "mouse" ? typeof e.button != "number" || e.button <= 0 : e.isPrimary !== !1;
  function ka(e, t = "page") {
    return {
      point: {
        x: e[t + "X"],
        y: e[t + "Y"]
      }
    };
  }
  const bk = (e) => (t) => Zg(t) && e(t, ka(t));
  function Wt(e, t, n, r) {
    return Bt(e, t, bk(n), r);
  }
  const Ik = (e, t) => (n) => t(e(n)), Tn = (...e) => e.reduce(Ik);
  function qg(e) {
    let t = null;
    return () => {
      const n = () => {
        t = null;
      };
      return t === null ? (t = e, n) : !1;
    };
  }
  const kp = qg("dragHorizontal"), _p = qg("dragVertical");
  function Jg(e) {
    let t = !1;
    if (e === "y")
      t = _p();
    else if (e === "x")
      t = kp();
    else {
      const n = kp(), r = _p();
      n && r ? t = () => {
        n(), r();
      } : (n && n(), r && r());
    }
    return t;
  }
  function ev() {
    const e = Jg(!0);
    return e ? (e(), !1) : !0;
  }
  class Rn {
    constructor(t) {
      this.isMounted = !1, this.node = t;
    }
    update() {
    }
  }
  function Ap(e, t) {
    const n = "pointer" + (t ? "enter" : "leave"), r = "onHover" + (t ? "Start" : "End"), i = (o, s) => {
      if (o.type === "touch" || ev())
        return;
      const a = e.getProps();
      e.animationState && a.whileHover && e.animationState.setActive("whileHover", t), a[r] && ee.update(() => a[r](o, s));
    };
    return Wt(e.current, n, i, {
      passive: !e.getProps()[r]
    });
  }
  class zk extends Rn {
    mount() {
      this.unmount = Tn(Ap(this.node, !0), Ap(this.node, !1));
    }
    unmount() {
    }
  }
  class Bk extends Rn {
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
  const tv = (e, t) => t ? e === t ? !0 : tv(e, t.parentElement) : !1;
  function dl(e, t) {
    if (!t)
      return;
    const n = new PointerEvent("pointer" + e);
    t(n, ka(n));
  }
  class Uk extends Rn {
    constructor() {
      super(...arguments), this.removeStartListeners = fe, this.removeEndListeners = fe, this.removeAccessibleListeners = fe, this.startPointerPress = (t, n) => {
        if (this.removeEndListeners(), this.isPressing)
          return;
        const r = this.node.getProps(), o = Wt(window, "pointerup", (a, l) => {
          if (!this.checkPressEnd())
            return;
          const { onTap: u, onTapCancel: c } = this.node.getProps();
          ee.update(() => {
            tv(this.node.current, a.target) ? u && u(a, l) : c && c(a, l);
          });
        }, { passive: !(r.onTap || r.onPointerUp) }), s = Wt(window, "pointercancel", (a, l) => this.cancelPress(a, l), { passive: !(r.onTapCancel || r.onPointerCancel) });
        this.removeEndListeners = Tn(o, s), this.startPress(t, n);
      }, this.startAccessiblePress = () => {
        const t = (o) => {
          if (o.key !== "Enter" || this.isPressing)
            return;
          const s = (a) => {
            a.key !== "Enter" || !this.checkPressEnd() || dl("up", (l, u) => {
              const { onTap: c } = this.node.getProps();
              c && ee.update(() => c(l, u));
            });
          };
          this.removeEndListeners(), this.removeEndListeners = Bt(this.node.current, "keyup", s), dl("down", (a, l) => {
            this.startPress(a, l);
          });
        }, n = Bt(this.node.current, "keydown", t), r = () => {
          this.isPressing && dl("cancel", (o, s) => this.cancelPress(o, s));
        }, i = Bt(this.node.current, "blur", r);
        this.removeAccessibleListeners = Tn(n, i);
      };
    }
    startPress(t, n) {
      this.isPressing = !0;
      const { onTapStart: r, whileTap: i } = this.node.getProps();
      i && this.node.animationState && this.node.animationState.setActive("whileTap", !0), r && ee.update(() => r(t, n));
    }
    checkPressEnd() {
      return this.removeEndListeners(), this.isPressing = !1, this.node.getProps().whileTap && this.node.animationState && this.node.animationState.setActive("whileTap", !1), !ev();
    }
    cancelPress(t, n) {
      if (!this.checkPressEnd())
        return;
      const { onTapCancel: r } = this.node.getProps();
      r && ee.update(() => r(t, n));
    }
    mount() {
      const t = this.node.getProps(), n = Wt(this.node.current, "pointerdown", this.startPointerPress, { passive: !(t.onTapStart || t.onPointerStart) }), r = Bt(this.node.current, "focus", this.startAccessiblePress);
      this.removeStartListeners = Tn(n, r);
    }
    unmount() {
      this.removeStartListeners(), this.removeEndListeners(), this.removeAccessibleListeners();
    }
  }
  const Au = /* @__PURE__ */ new WeakMap(), pl = /* @__PURE__ */ new WeakMap(), Hk = (e) => {
    const t = Au.get(e.target);
    t && t(e);
  }, Wk = (e) => {
    e.forEach(Hk);
  };
  function Gk({ root: e, ...t }) {
    const n = e || document;
    pl.has(n) || pl.set(n, {});
    const r = pl.get(n), i = JSON.stringify(t);
    return r[i] || (r[i] = new IntersectionObserver(Wk, { root: e, ...t })), r[i];
  }
  function Kk(e, t, n) {
    const r = Gk(t);
    return Au.set(e, n), r.observe(e), () => {
      Au.delete(e), r.unobserve(e);
    };
  }
  const Qk = {
    some: 0,
    all: 1
  };
  class Yk extends Rn {
    constructor() {
      super(...arguments), this.hasEnteredView = !1, this.isInView = !1;
    }
    startObserver() {
      this.unmount();
      const { viewport: t = {} } = this.node.getProps(), { root: n, margin: r, amount: i = "some", once: o } = t, s = {
        root: n ? n.current : void 0,
        rootMargin: r,
        threshold: typeof i == "number" ? i : Qk[i]
      }, a = (l) => {
        const { isIntersecting: u } = l;
        if (this.isInView === u || (this.isInView = u, o && !u && this.hasEnteredView))
          return;
        u && (this.hasEnteredView = !0), this.node.animationState && this.node.animationState.setActive("whileInView", u);
        const { onViewportEnter: c, onViewportLeave: f } = this.node.getProps(), d = u ? c : f;
        d && d(l);
      };
      return Kk(this.node.current, s, a);
    }
    mount() {
      this.startObserver();
    }
    update() {
      if (typeof IntersectionObserver > "u")
        return;
      const { props: t, prevProps: n } = this.node;
      ["amount", "margin", "root"].some(Xk(t, n)) && this.startObserver();
    }
    unmount() {
    }
  }
  function Xk({ viewport: e = {} }, { viewport: t = {} } = {}) {
    return (n) => e[n] !== t[n];
  }
  const Zk = {
    inView: {
      Feature: Yk
    },
    tap: {
      Feature: Uk
    },
    focus: {
      Feature: Bk
    },
    hover: {
      Feature: zk
    }
  };
  function nv(e, t) {
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
  function qk(e) {
    const t = {};
    return e.values.forEach((n, r) => t[r] = n.get()), t;
  }
  function Jk(e) {
    const t = {};
    return e.values.forEach((n, r) => t[r] = n.getVelocity()), t;
  }
  function _a(e, t, n) {
    const r = e.getProps();
    return df(r, t, n !== void 0 ? n : r.custom, qk(e), Jk(e));
  }
  const e_ = "framerAppearId", t_ = "data-" + cf(e_);
  let n_ = fe, pf = fe;
  const En = (e) => e * 1e3, Gt = (e) => e / 1e3, r_ = {
    current: !1
  }, rv = (e) => Array.isArray(e) && typeof e[0] == "number";
  function iv(e) {
    return !!(!e || typeof e == "string" && ov[e] || rv(e) || Array.isArray(e) && e.every(iv));
  }
  const gi = ([e, t, n, r]) => `cubic-bezier(${e}, ${t}, ${n}, ${r})`, ov = {
    linear: "linear",
    ease: "ease",
    easeIn: "ease-in",
    easeOut: "ease-out",
    easeInOut: "ease-in-out",
    circIn: gi([0, 0.65, 0.55, 1]),
    circOut: gi([0.55, 0, 1, 0.45]),
    backIn: gi([0.31, 0.01, 0.66, -0.59]),
    backOut: gi([0.33, 1.53, 0.69, 0.99])
  };
  function sv(e) {
    if (e)
      return rv(e) ? gi(e) : Array.isArray(e) ? e.map(sv) : ov[e];
  }
  function i_(e, t, n, { delay: r = 0, duration: i, repeat: o = 0, repeatType: s = "loop", ease: a, times: l } = {}) {
    const u = { [t]: n };
    l && (u.offset = l);
    const c = sv(a);
    return Array.isArray(c) && (u.easing = c), e.animate(u, {
      delay: r,
      duration: i,
      easing: Array.isArray(c) ? "linear" : c,
      fill: "both",
      iterations: o + 1,
      direction: s === "reverse" ? "alternate" : "normal"
    });
  }
  function o_(e, { repeat: t, repeatType: n = "loop" }) {
    const r = t && n !== "loop" && t % 2 === 1 ? 0 : e.length - 1;
    return e[r];
  }
  const av = (e, t, n) => (((1 - 3 * n + 3 * t) * e + (3 * n - 6 * t)) * e + 3 * t) * e, s_ = 1e-7, a_ = 12;
  function l_(e, t, n, r, i) {
    let o, s, a = 0;
    do
      s = t + (n - t) / 2, o = av(s, r, i) - e, o > 0 ? n = s : t = s;
    while (Math.abs(o) > s_ && ++a < a_);
    return s;
  }
  function yo(e, t, n, r) {
    if (e === t && n === r)
      return fe;
    const i = (o) => l_(o, 0, 1, e, n);
    return (o) => o === 0 || o === 1 ? o : av(i(o), t, r);
  }
  const u_ = yo(0.42, 0, 1, 1), c_ = yo(0, 0, 0.58, 1), lv = yo(0.42, 0, 0.58, 1), f_ = (e) => Array.isArray(e) && typeof e[0] != "number", uv = (e) => (t) => t <= 0.5 ? e(2 * t) / 2 : (2 - e(2 * (1 - t))) / 2, cv = (e) => (t) => 1 - e(1 - t), fv = (e) => 1 - Math.sin(Math.acos(e)), hf = cv(fv), d_ = uv(hf), dv = yo(0.33, 1.53, 0.69, 0.99), mf = cv(dv), p_ = uv(mf), h_ = (e) => (e *= 2) < 1 ? 0.5 * mf(e) : 0.5 * (2 - Math.pow(2, -10 * (e - 1))), m_ = {
    linear: fe,
    easeIn: u_,
    easeInOut: lv,
    easeOut: c_,
    circIn: fv,
    circInOut: d_,
    circOut: hf,
    backIn: mf,
    backInOut: p_,
    backOut: dv,
    anticipate: h_
  }, Op = (e) => {
    if (Array.isArray(e)) {
      pf(e.length === 4);
      const [t, n, r, i] = e;
      return yo(t, n, r, i);
    } else if (typeof e == "string")
      return m_[e];
    return e;
  }, yf = (e, t) => (n) => !!(ho(n) && hk.test(n) && n.startsWith(e) || t && Object.prototype.hasOwnProperty.call(n, t)), pv = (e, t, n) => (r) => {
    if (!ho(r))
      return r;
    const [i, o, s, a] = r.match(Pa);
    return {
      [e]: parseFloat(i),
      [t]: parseFloat(o),
      [n]: parseFloat(s),
      alpha: a !== void 0 ? parseFloat(a) : 1
    };
  }, y_ = (e) => An(0, 255, e), hl = {
    ...dr,
    transform: (e) => Math.round(y_(e))
  }, Gn = {
    test: yf("rgb", "red"),
    parse: pv("red", "green", "blue"),
    transform: ({ red: e, green: t, blue: n, alpha: r = 1 }) => "rgba(" + hl.transform(e) + ", " + hl.transform(t) + ", " + hl.transform(n) + ", " + Fi(Oi.transform(r)) + ")"
  };
  function g_(e) {
    let t = "", n = "", r = "", i = "";
    return e.length > 5 ? (t = e.substring(1, 3), n = e.substring(3, 5), r = e.substring(5, 7), i = e.substring(7, 9)) : (t = e.substring(1, 2), n = e.substring(2, 3), r = e.substring(3, 4), i = e.substring(4, 5), t += t, n += n, r += r, i += i), {
      red: parseInt(t, 16),
      green: parseInt(n, 16),
      blue: parseInt(r, 16),
      alpha: i ? parseInt(i, 16) / 255 : 1
    };
  }
  const Ou = {
    test: yf("#"),
    parse: g_,
    transform: Gn.transform
  }, jr = {
    test: yf("hsl", "hue"),
    parse: pv("hue", "saturation", "lightness"),
    transform: ({ hue: e, saturation: t, lightness: n, alpha: r = 1 }) => "hsla(" + Math.round(e) + ", " + Dt.transform(Fi(t)) + ", " + Dt.transform(Fi(n)) + ", " + Fi(Oi.transform(r)) + ")"
  }, Le = {
    test: (e) => Gn.test(e) || Ou.test(e) || jr.test(e),
    parse: (e) => Gn.test(e) ? Gn.parse(e) : jr.test(e) ? jr.parse(e) : Ou.parse(e),
    transform: (e) => ho(e) ? e : e.hasOwnProperty("red") ? Gn.transform(e) : jr.transform(e)
  }, ae = (e, t, n) => -n * e + n * t + e;
  function ml(e, t, n) {
    return n < 0 && (n += 1), n > 1 && (n -= 1), n < 1 / 6 ? e + (t - e) * 6 * n : n < 1 / 2 ? t : n < 2 / 3 ? e + (t - e) * (2 / 3 - n) * 6 : e;
  }
  function v_({ hue: e, saturation: t, lightness: n, alpha: r }) {
    e /= 360, t /= 100, n /= 100;
    let i = 0, o = 0, s = 0;
    if (!t)
      i = o = s = n;
    else {
      const a = n < 0.5 ? n * (1 + t) : n + t - n * t, l = 2 * n - a;
      i = ml(l, a, e + 1 / 3), o = ml(l, a, e), s = ml(l, a, e - 1 / 3);
    }
    return {
      red: Math.round(i * 255),
      green: Math.round(o * 255),
      blue: Math.round(s * 255),
      alpha: r
    };
  }
  const yl = (e, t, n) => {
    const r = e * e;
    return Math.sqrt(Math.max(0, n * (t * t - r) + r));
  }, x_ = [Ou, Gn, jr], S_ = (e) => x_.find((t) => t.test(e));
  function Fp(e) {
    const t = S_(e);
    let n = t.parse(e);
    return t === jr && (n = v_(n)), n;
  }
  const hv = (e, t) => {
    const n = Fp(e), r = Fp(t), i = { ...n };
    return (o) => (i.red = yl(n.red, r.red, o), i.green = yl(n.green, r.green, o), i.blue = yl(n.blue, r.blue, o), i.alpha = ae(n.alpha, r.alpha, o), Gn.transform(i));
  };
  function w_(e) {
    var t, n;
    return isNaN(e) && ho(e) && (((t = e.match(Pa)) === null || t === void 0 ? void 0 : t.length) || 0) + (((n = e.match(Ig)) === null || n === void 0 ? void 0 : n.length) || 0) > 0;
  }
  const mv = {
    regex: dk,
    countKey: "Vars",
    token: "${v}",
    parse: fe
  }, yv = {
    regex: Ig,
    countKey: "Colors",
    token: "${c}",
    parse: Le.parse
  }, gv = {
    regex: Pa,
    countKey: "Numbers",
    token: "${n}",
    parse: dr.parse
  };
  function gl(e, { regex: t, countKey: n, token: r, parse: i }) {
    const o = e.tokenised.match(t);
    o && (e["num" + n] = o.length, e.tokenised = e.tokenised.replace(t, r), e.values.push(...o.map(i)));
  }
  function Rs(e) {
    const t = e.toString(), n = {
      value: t,
      tokenised: t,
      values: [],
      numVars: 0,
      numColors: 0,
      numNumbers: 0
    };
    return n.value.includes("var(--") && gl(n, mv), gl(n, yv), gl(n, gv), n;
  }
  function vv(e) {
    return Rs(e).values;
  }
  function xv(e) {
    const { values: t, numColors: n, numVars: r, tokenised: i } = Rs(e), o = t.length;
    return (s) => {
      let a = i;
      for (let l = 0; l < o; l++)
        l < r ? a = a.replace(mv.token, s[l]) : l < r + n ? a = a.replace(yv.token, Le.transform(s[l])) : a = a.replace(gv.token, Fi(s[l]));
      return a;
    };
  }
  const T_ = (e) => typeof e == "number" ? 0 : e;
  function E_(e) {
    const t = vv(e);
    return xv(e)(t.map(T_));
  }
  const On = {
    test: w_,
    parse: vv,
    createTransformer: xv,
    getAnimatableNone: E_
  }, Sv = (e, t) => (n) => `${n > 0 ? t : e}`;
  function wv(e, t) {
    return typeof e == "number" ? (n) => ae(e, t, n) : Le.test(e) ? hv(e, t) : e.startsWith("var(") ? Sv(e, t) : Ev(e, t);
  }
  const Tv = (e, t) => {
    const n = [...e], r = n.length, i = e.map((o, s) => wv(o, t[s]));
    return (o) => {
      for (let s = 0; s < r; s++)
        n[s] = i[s](o);
      return n;
    };
  }, C_ = (e, t) => {
    const n = { ...e, ...t }, r = {};
    for (const i in n)
      e[i] !== void 0 && t[i] !== void 0 && (r[i] = wv(e[i], t[i]));
    return (i) => {
      for (const o in r)
        n[o] = r[o](i);
      return n;
    };
  }, Ev = (e, t) => {
    const n = On.createTransformer(t), r = Rs(e), i = Rs(t);
    return r.numVars === i.numVars && r.numColors === i.numColors && r.numNumbers >= i.numNumbers ? Tn(Tv(r.values, i.values), n) : Sv(e, t);
  }, to = (e, t, n) => {
    const r = t - e;
    return r === 0 ? 1 : (n - e) / r;
  }, jp = (e, t) => (n) => ae(e, t, n);
  function P_(e) {
    return typeof e == "number" ? jp : typeof e == "string" ? Le.test(e) ? hv : Ev : Array.isArray(e) ? Tv : typeof e == "object" ? C_ : jp;
  }
  function k_(e, t, n) {
    const r = [], i = n || P_(e[0]), o = e.length - 1;
    for (let s = 0; s < o; s++) {
      let a = i(e[s], e[s + 1]);
      if (t) {
        const l = Array.isArray(t) ? t[s] || fe : t;
        a = Tn(l, a);
      }
      r.push(a);
    }
    return r;
  }
  function Cv(e, t, { clamp: n = !0, ease: r, mixer: i } = {}) {
    const o = e.length;
    if (pf(o === t.length), o === 1)
      return () => t[0];
    e[0] > e[o - 1] && (e = [...e].reverse(), t = [...t].reverse());
    const s = k_(t, r, i), a = s.length, l = (u) => {
      let c = 0;
      if (a > 1)
        for (; c < e.length - 2 && !(u < e[c + 1]); c++)
          ;
      const f = to(e[c], e[c + 1], u);
      return s[c](f);
    };
    return n ? (u) => l(An(e[0], e[o - 1], u)) : l;
  }
  function __(e, t) {
    const n = e[e.length - 1];
    for (let r = 1; r <= t; r++) {
      const i = to(0, t, r);
      e.push(ae(n, 1, i));
    }
  }
  function A_(e) {
    const t = [0];
    return __(t, e.length - 1), t;
  }
  function O_(e, t) {
    return e.map((n) => n * t);
  }
  function F_(e, t) {
    return e.map(() => t || lv).splice(0, e.length - 1);
  }
  function Ls({ duration: e = 300, keyframes: t, times: n, ease: r = "easeInOut" }) {
    const i = f_(r) ? r.map(Op) : Op(r), o = {
      done: !1,
      value: t[0]
    }, s = O_(
      // Only use the provided offsets if they're the correct length
      // TODO Maybe we should warn here if there's a length mismatch
      n && n.length === t.length ? n : A_(t),
      e
    ), a = Cv(s, t, {
      ease: Array.isArray(i) ? i : F_(t, i)
    });
    return {
      calculatedDuration: e,
      next: (l) => (o.value = a(l), o.done = l >= e, o)
    };
  }
  function Pv(e, t) {
    return t ? e * (1e3 / t) : 0;
  }
  const j_ = 5;
  function kv(e, t, n) {
    const r = Math.max(t - j_, 0);
    return Pv(n - e(r), t - r);
  }
  const vl = 1e-3, D_ = 0.01, Dp = 10, M_ = 0.05, R_ = 1;
  function L_({ duration: e = 800, bounce: t = 0.25, velocity: n = 0, mass: r = 1 }) {
    let i, o;
    n_(e <= En(Dp));
    let s = 1 - t;
    s = An(M_, R_, s), e = An(D_, Dp, Gt(e)), s < 1 ? (i = (u) => {
      const c = u * s, f = c * e, d = c - n, h = Fu(u, s), g = Math.exp(-f);
      return vl - d / h * g;
    }, o = (u) => {
      const f = u * s * e, d = f * n + n, h = Math.pow(s, 2) * Math.pow(u, 2) * e, g = Math.exp(-f), v = Fu(Math.pow(u, 2), s);
      return (-i(u) + vl > 0 ? -1 : 1) * ((d - h) * g) / v;
    }) : (i = (u) => {
      const c = Math.exp(-u * e), f = (u - n) * e + 1;
      return -vl + c * f;
    }, o = (u) => {
      const c = Math.exp(-u * e), f = (n - u) * (e * e);
      return c * f;
    });
    const a = 5 / e, l = V_(i, o, a);
    if (e = En(e), isNaN(l))
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
  const N_ = 12;
  function V_(e, t, n) {
    let r = n;
    for (let i = 1; i < N_; i++)
      r = r - e(r) / t(r);
    return r;
  }
  function Fu(e, t) {
    return e * Math.sqrt(1 - t * t);
  }
  const $_ = ["duration", "bounce"], b_ = ["stiffness", "damping", "mass"];
  function Mp(e, t) {
    return t.some((n) => e[n] !== void 0);
  }
  function I_(e) {
    let t = {
      velocity: 0,
      stiffness: 100,
      damping: 10,
      mass: 1,
      isResolvedFromDuration: !1,
      ...e
    };
    if (!Mp(e, b_) && Mp(e, $_)) {
      const n = L_(e);
      t = {
        ...t,
        ...n,
        velocity: 0,
        mass: 1
      }, t.isResolvedFromDuration = !0;
    }
    return t;
  }
  function _v({ keyframes: e, restDelta: t, restSpeed: n, ...r }) {
    const i = e[0], o = e[e.length - 1], s = { done: !1, value: i }, { stiffness: a, damping: l, mass: u, velocity: c, duration: f, isResolvedFromDuration: d } = I_(r), h = c ? -Gt(c) : 0, g = l / (2 * Math.sqrt(a * u)), v = o - i, k = Gt(Math.sqrt(a / u)), y = Math.abs(v) < 5;
    n || (n = y ? 0.01 : 2), t || (t = y ? 5e-3 : 0.5);
    let p;
    if (g < 1) {
      const m = Fu(k, g);
      p = (x) => {
        const E = Math.exp(-g * k * x);
        return o - E * ((h + g * k * v) / m * Math.sin(m * x) + v * Math.cos(m * x));
      };
    } else if (g === 1)
      p = (m) => o - Math.exp(-k * m) * (v + (h + k * v) * m);
    else {
      const m = k * Math.sqrt(g * g - 1);
      p = (x) => {
        const E = Math.exp(-g * k * x), C = Math.min(m * x, 300);
        return o - E * ((h + g * k * v) * Math.sinh(C) + m * v * Math.cosh(C)) / m;
      };
    }
    return {
      calculatedDuration: d && f || null,
      next: (m) => {
        const x = p(m);
        if (d)
          s.done = m >= f;
        else {
          let E = h;
          m !== 0 && (g < 1 ? E = kv(p, m, x) : E = 0);
          const C = Math.abs(E) <= n, T = Math.abs(o - x) <= t;
          s.done = C && T;
        }
        return s.value = s.done ? o : x, s;
      }
    };
  }
  function Rp({ keyframes: e, velocity: t = 0, power: n = 0.8, timeConstant: r = 325, bounceDamping: i = 10, bounceStiffness: o = 500, modifyTarget: s, min: a, max: l, restDelta: u = 0.5, restSpeed: c }) {
    const f = e[0], d = {
      done: !1,
      value: f
    }, h = (_) => a !== void 0 && _ < a || l !== void 0 && _ > l, g = (_) => a === void 0 ? l : l === void 0 || Math.abs(a - _) < Math.abs(l - _) ? a : l;
    let v = n * t;
    const k = f + v, y = s === void 0 ? k : s(k);
    y !== k && (v = y - f);
    const p = (_) => -v * Math.exp(-_ / r), m = (_) => y + p(_), x = (_) => {
      const L = p(_), V = m(_);
      d.done = Math.abs(L) <= u, d.value = d.done ? y : V;
    };
    let E, C;
    const T = (_) => {
      h(d.value) && (E = _, C = _v({
        keyframes: [d.value, g(d.value)],
        velocity: kv(m, _, d.value),
        damping: i,
        stiffness: o,
        restDelta: u,
        restSpeed: c
      }));
    };
    return T(0), {
      calculatedDuration: null,
      next: (_) => {
        let L = !1;
        return !C && E === void 0 && (L = !0, x(_), T(_)), E !== void 0 && _ > E ? C.next(_ - E) : (!L && x(_), d);
      }
    };
  }
  const z_ = (e) => {
    const t = ({ timestamp: n }) => e(n);
    return {
      start: () => ee.update(t, !0),
      stop: () => Zt(t),
      /**
       * If we're processing this frame we can use the
       * framelocked timestamp to keep things in sync.
       */
      now: () => xe.isProcessing ? xe.timestamp : performance.now()
    };
  }, Lp = 2e4;
  function Np(e) {
    let t = 0;
    const n = 50;
    let r = e.next(t);
    for (; !r.done && t < Lp; )
      t += n, r = e.next(t);
    return t >= Lp ? 1 / 0 : t;
  }
  const B_ = {
    decay: Rp,
    inertia: Rp,
    tween: Ls,
    keyframes: Ls,
    spring: _v
  };
  function Ns({ autoplay: e = !0, delay: t = 0, driver: n = z_, keyframes: r, type: i = "keyframes", repeat: o = 0, repeatDelay: s = 0, repeatType: a = "loop", onPlay: l, onStop: u, onComplete: c, onUpdate: f, ...d }) {
    let h = 1, g = !1, v, k;
    const y = () => {
      k = new Promise((R) => {
        v = R;
      });
    };
    y();
    let p;
    const m = B_[i] || Ls;
    let x;
    m !== Ls && typeof r[0] != "number" && (x = Cv([0, 100], r, {
      clamp: !1
    }), r = [0, 100]);
    const E = m({ ...d, keyframes: r });
    let C;
    a === "mirror" && (C = m({
      ...d,
      keyframes: [...r].reverse(),
      velocity: -(d.velocity || 0)
    }));
    let T = "idle", _ = null, L = null, V = null;
    E.calculatedDuration === null && o && (E.calculatedDuration = Np(E));
    const { calculatedDuration: I } = E;
    let de = 1 / 0, U = 1 / 0;
    I !== null && (de = I + s, U = de * (o + 1) - s);
    let G = 0;
    const K = (R) => {
      if (L === null)
        return;
      h > 0 && (L = Math.min(L, R)), h < 0 && (L = Math.min(R - U / h, L)), _ !== null ? G = _ : G = Math.round(R - L) * h;
      const H = G - t * (h >= 0 ? 1 : -1), Me = h >= 0 ? H < 0 : H > U;
      G = Math.max(H, 0), T === "finished" && _ === null && (G = U);
      let Re = G, Qe = E;
      if (o) {
        const pr = G / de;
        let Ln = Math.floor(pr), ht = pr % 1;
        !ht && pr >= 1 && (ht = 1), ht === 1 && Ln--, Ln = Math.min(Ln, o + 1);
        const vo = !!(Ln % 2);
        vo && (a === "reverse" ? (ht = 1 - ht, s && (ht -= s / de)) : a === "mirror" && (Qe = C));
        let ti = An(0, 1, ht);
        G > U && (ti = a === "reverse" && vo ? 1 : 0), Re = ti * de;
      }
      const Ae = Me ? { done: !1, value: r[0] } : Qe.next(Re);
      x && (Ae.value = x(Ae.value));
      let { done: pt } = Ae;
      !Me && I !== null && (pt = h >= 0 ? G >= U : G <= 0);
      const go = _ === null && (T === "finished" || T === "running" && pt);
      return f && f(Ae.value), go && P(), Ae;
    }, Ee = () => {
      p && p.stop(), p = void 0;
    }, Ie = () => {
      T = "idle", Ee(), v(), y(), L = V = null;
    }, P = () => {
      T = "finished", c && c(), Ee(), v();
    }, O = () => {
      if (g)
        return;
      p || (p = n(K));
      const R = p.now();
      l && l(), _ !== null ? L = R - _ : (!L || T === "finished") && (L = R), T === "finished" && y(), V = L, _ = null, T = "running", p.start();
    };
    e && O();
    const j = {
      then(R, H) {
        return k.then(R, H);
      },
      get time() {
        return Gt(G);
      },
      set time(R) {
        R = En(R), G = R, _ !== null || !p || h === 0 ? _ = R : L = p.now() - R / h;
      },
      get duration() {
        const R = E.calculatedDuration === null ? Np(E) : E.calculatedDuration;
        return Gt(R);
      },
      get speed() {
        return h;
      },
      set speed(R) {
        R === h || !p || (h = R, j.time = Gt(G));
      },
      get state() {
        return T;
      },
      play: O,
      pause: () => {
        T = "paused", _ = G;
      },
      stop: () => {
        g = !0, T !== "idle" && (T = "idle", u && u(), Ie());
      },
      cancel: () => {
        V !== null && K(V), Ie();
      },
      complete: () => {
        T = "finished";
      },
      sample: (R) => (L = 0, K(R))
    };
    return j;
  }
  function U_(e) {
    let t;
    return () => (t === void 0 && (t = e()), t);
  }
  const H_ = U_(() => Object.hasOwnProperty.call(Element.prototype, "animate")), W_ = /* @__PURE__ */ new Set([
    "opacity",
    "clipPath",
    "filter",
    "transform",
    "backgroundColor"
  ]), Io = 10, G_ = 2e4, K_ = (e, t) => t.type === "spring" || e === "backgroundColor" || !iv(t.ease);
  function Q_(e, t, { onUpdate: n, onComplete: r, ...i }) {
    if (!(H_() && W_.has(t) && !i.repeatDelay && i.repeatType !== "mirror" && i.damping !== 0 && i.type !== "inertia"))
      return !1;
    let s = !1, a, l;
    const u = () => {
      l = new Promise((p) => {
        a = p;
      });
    };
    u();
    let { keyframes: c, duration: f = 300, ease: d, times: h } = i;
    if (K_(t, i)) {
      const p = Ns({
        ...i,
        repeat: 0,
        delay: 0
      });
      let m = { done: !1, value: c[0] };
      const x = [];
      let E = 0;
      for (; !m.done && E < G_; )
        m = p.sample(E), x.push(m.value), E += Io;
      h = void 0, c = x, f = E - Io, d = "linear";
    }
    const g = i_(e.owner.current, t, c, {
      ...i,
      duration: f,
      /**
       * This function is currently not called if ease is provided
       * as a function so the cast is safe.
       *
       * However it would be possible for a future refinement to port
       * in easing pregeneration from Motion One for browsers that
       * support the upcoming `linear()` easing function.
       */
      ease: d,
      times: h
    });
    i.syncStart && (g.startTime = xe.isProcessing ? xe.timestamp : document.timeline ? document.timeline.currentTime : performance.now());
    const v = () => g.cancel(), k = () => {
      ee.update(v), a(), u();
    };
    return g.onfinish = () => {
      e.set(o_(c, i)), r && r(), k();
    }, {
      then(p, m) {
        return l.then(p, m);
      },
      attachTimeline(p) {
        return g.timeline = p, g.onfinish = null, fe;
      },
      get time() {
        return Gt(g.currentTime || 0);
      },
      set time(p) {
        g.currentTime = En(p);
      },
      get speed() {
        return g.playbackRate;
      },
      set speed(p) {
        g.playbackRate = p;
      },
      get duration() {
        return Gt(f);
      },
      play: () => {
        s || (g.play(), Zt(v));
      },
      pause: () => g.pause(),
      stop: () => {
        if (s = !0, g.playState === "idle")
          return;
        const { currentTime: p } = g;
        if (p) {
          const m = Ns({
            ...i,
            autoplay: !1
          });
          e.setWithVelocity(m.sample(p - Io).value, m.sample(p).value, Io);
        }
        k();
      },
      complete: () => g.finish(),
      cancel: k
    };
  }
  function Y_({ keyframes: e, delay: t, onUpdate: n, onComplete: r }) {
    const i = () => (n && n(e[e.length - 1]), r && r(), {
      time: 0,
      speed: 1,
      duration: 0,
      play: fe,
      pause: fe,
      stop: fe,
      then: (o) => (o(), Promise.resolve()),
      cancel: fe,
      complete: fe
    });
    return t ? Ns({
      keyframes: [0, 1],
      duration: 0,
      delay: t,
      onComplete: i
    }) : i();
  }
  const X_ = {
    type: "spring",
    stiffness: 500,
    damping: 25,
    restSpeed: 10
  }, Z_ = (e) => ({
    type: "spring",
    stiffness: 550,
    damping: e === 0 ? 2 * Math.sqrt(550) : 30,
    restSpeed: 10
  }), q_ = {
    type: "keyframes",
    duration: 0.8
  }, J_ = {
    type: "keyframes",
    ease: [0.25, 0.1, 0.35, 1],
    duration: 0.3
  }, e2 = (e, { keyframes: t }) => t.length > 2 ? q_ : fr.has(e) ? e.startsWith("scale") ? Z_(t[1]) : X_ : J_, ju = (e, t) => e === "zIndex" ? !1 : !!(typeof t == "number" || Array.isArray(t) || typeof t == "string" && // It's animatable if we have a string
  (On.test(t) || t === "0") && // And it contains numbers and/or colors
  !t.startsWith("url(")), t2 = /* @__PURE__ */ new Set(["brightness", "contrast", "saturate", "opacity"]);
  function n2(e) {
    const [t, n] = e.slice(0, -1).split("(");
    if (t === "drop-shadow")
      return e;
    const [r] = n.match(Pa) || [];
    if (!r)
      return e;
    const i = n.replace(r, "");
    let o = t2.has(t) ? 1 : 0;
    return r !== n && (o *= 100), t + "(" + o + i + ")";
  }
  const r2 = /([a-z-]*)\(.*?\)/g, Du = {
    ...On,
    getAnimatableNone: (e) => {
      const t = e.match(r2);
      return t ? t.map(n2).join(" ") : e;
    }
  }, i2 = {
    ...zg,
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
    filter: Du,
    WebkitFilter: Du
  }, gf = (e) => i2[e];
  function Av(e, t) {
    let n = gf(e);
    return n !== Du && (n = On), n.getAnimatableNone ? n.getAnimatableNone(t) : void 0;
  }
  const Ov = (e) => /^0[^.\s]+$/.test(e);
  function o2(e) {
    if (typeof e == "number")
      return e === 0;
    if (e !== null)
      return e === "none" || e === "0" || Ov(e);
  }
  function s2(e, t, n, r) {
    const i = ju(t, n);
    let o;
    Array.isArray(n) ? o = [...n] : o = [null, n];
    const s = r.from !== void 0 ? r.from : e.get();
    let a;
    const l = [];
    for (let u = 0; u < o.length; u++)
      o[u] === null && (o[u] = u === 0 ? s : o[u - 1]), o2(o[u]) && l.push(u), typeof o[u] == "string" && o[u] !== "none" && o[u] !== "0" && (a = o[u]);
    if (i && l.length && a)
      for (let u = 0; u < l.length; u++) {
        const c = l[u];
        o[c] = Av(t, a);
      }
    return o;
  }
  function a2({ when: e, delay: t, delayChildren: n, staggerChildren: r, staggerDirection: i, repeat: o, repeatType: s, repeatDelay: a, from: l, elapsed: u, ...c }) {
    return !!Object.keys(c).length;
  }
  function Fv(e, t) {
    return e[t] || e.default || e;
  }
  const vf = (e, t, n, r = {}) => (i) => {
    const o = Fv(r, e) || {}, s = o.delay || r.delay || 0;
    let { elapsed: a = 0 } = r;
    a = a - En(s);
    const l = s2(t, e, n, o), u = l[0], c = l[l.length - 1], f = ju(e, u), d = ju(e, c);
    let h = {
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
    if (a2(o) || (h = {
      ...h,
      ...e2(e, h)
    }), h.duration && (h.duration = En(h.duration)), h.repeatDelay && (h.repeatDelay = En(h.repeatDelay)), !f || !d || r_.current || o.type === !1)
      return Y_(h);
    if (t.owner && t.owner.current instanceof HTMLElement && !t.owner.getProps().onUpdate) {
      const g = Q_(t, e, h);
      if (g)
        return g;
    }
    return Ns(h);
  };
  function Vs(e) {
    return !!(Ke(e) && e.add);
  }
  const jv = (e) => /^\-?\d*\.?\d+$/.test(e);
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
  const l2 = (e) => !isNaN(parseFloat(e));
  class u2 {
    /**
     * @param init - The initiating value
     * @param config - Optional configuration options
     *
     * -  `transformer`: A function to transform incoming values with.
     *
     * @internal
     */
    constructor(t, n = {}) {
      this.version = "10.16.4", this.timeDelta = 0, this.lastUpdated = 0, this.canTrackVelocity = !1, this.events = {}, this.updateAndNotify = (r, i = !0) => {
        this.prev = this.current, this.current = r;
        const { delta: o, timestamp: s } = xe;
        this.lastUpdated !== s && (this.timeDelta = o, this.lastUpdated = s, ee.postRender(this.scheduleVelocityCheck)), this.prev !== this.current && this.events.change && this.events.change.notify(this.current), this.events.velocityChange && this.events.velocityChange.notify(this.getVelocity()), i && this.events.renderRequest && this.events.renderRequest.notify(this.current);
      }, this.scheduleVelocityCheck = () => ee.postRender(this.velocityCheck), this.velocityCheck = ({ timestamp: r }) => {
        r !== this.lastUpdated && (this.prev = this.current, this.events.velocityChange && this.events.velocityChange.notify(this.getVelocity()));
      }, this.hasAnimated = !1, this.prev = this.current = t, this.canTrackVelocity = l2(this.current), this.owner = n.owner;
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
        r(), ee.read(() => {
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
        Pv(parseFloat(this.current) - parseFloat(this.prev), this.timeDelta)
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
    return new u2(e, t);
  }
  const Dv = (e) => (t) => t.test(e), c2 = {
    test: (e) => e === "auto",
    parse: (e) => e
  }, Mv = [dr, b, Dt, nn, yk, mk, c2], fi = (e) => Mv.find(Dv(e)), f2 = [...Mv, Le, On], d2 = (e) => f2.find(Dv(e));
  function p2(e, t, n) {
    e.hasValue(t) ? e.getValue(t).set(n) : e.addValue(t, Qr(n));
  }
  function h2(e, t) {
    const n = _a(e, t);
    let { transitionEnd: r = {}, transition: i = {}, ...o } = n ? e.makeTargetAnimatable(n, !1) : {};
    o = { ...o, ...r };
    for (const s in o) {
      const a = Fk(o[s]);
      p2(e, s, a);
    }
  }
  function m2(e, t, n) {
    var r, i;
    const o = Object.keys(t).filter((a) => !e.hasValue(a)), s = o.length;
    if (s)
      for (let a = 0; a < s; a++) {
        const l = o[a], u = t[l];
        let c = null;
        Array.isArray(u) && (c = u[0]), c === null && (c = (i = (r = n[l]) !== null && r !== void 0 ? r : e.readValue(l)) !== null && i !== void 0 ? i : t[l]), c != null && (typeof c == "string" && (jv(c) || Ov(c)) ? c = parseFloat(c) : !d2(c) && On.test(u) && (c = Av(l, u)), e.addValue(l, Qr(c, { owner: e })), n[l] === void 0 && (n[l] = c), c !== null && e.setBaseTarget(l, c));
      }
  }
  function y2(e, t) {
    return t ? (t[e] || t.default || t).from : void 0;
  }
  function g2(e, t, n) {
    const r = {};
    for (const i in e) {
      const o = y2(i, t);
      if (o !== void 0)
        r[i] = o;
      else {
        const s = n.getValue(i);
        s && (r[i] = s.get());
      }
    }
    return r;
  }
  function v2({ protectedKeys: e, needsAnimating: t }, n) {
    const r = e.hasOwnProperty(n) && t[n] !== !0;
    return t[n] = !1, r;
  }
  function Rv(e, t, { delay: n = 0, transitionOverride: r, type: i } = {}) {
    let { transition: o = e.getDefaultTransition(), transitionEnd: s, ...a } = e.makeTargetAnimatable(t);
    const l = e.getValue("willChange");
    r && (o = r);
    const u = [], c = i && e.animationState && e.animationState.getState()[i];
    for (const f in a) {
      const d = e.getValue(f), h = a[f];
      if (!d || h === void 0 || c && v2(c, f))
        continue;
      const g = {
        delay: n,
        elapsed: 0,
        ...o
      };
      if (window.HandoffAppearAnimations && !d.hasAnimated) {
        const k = e.getProps()[t_];
        k && (g.elapsed = window.HandoffAppearAnimations(k, f, d, ee), g.syncStart = !0);
      }
      d.start(vf(f, d, h, e.shouldReduceMotion && fr.has(f) ? { type: !1 } : g));
      const v = d.animation;
      Vs(l) && (l.add(f), v.then(() => l.remove(f))), u.push(v);
    }
    return s && Promise.all(u).then(() => {
      s && h2(e, s);
    }), u;
  }
  function Mu(e, t, n = {}) {
    const r = _a(e, t, n.custom);
    let { transition: i = e.getDefaultTransition() || {} } = r || {};
    n.transitionOverride && (i = n.transitionOverride);
    const o = r ? () => Promise.all(Rv(e, r, n)) : () => Promise.resolve(), s = e.variantChildren && e.variantChildren.size ? (l = 0) => {
      const { delayChildren: u = 0, staggerChildren: c, staggerDirection: f } = i;
      return x2(e, t, u + l, c, f, n);
    } : () => Promise.resolve(), { when: a } = i;
    if (a) {
      const [l, u] = a === "beforeChildren" ? [o, s] : [s, o];
      return l().then(() => u());
    } else
      return Promise.all([o(), s(n.delay)]);
  }
  function x2(e, t, n = 0, r = 0, i = 1, o) {
    const s = [], a = (e.variantChildren.size - 1) * r, l = i === 1 ? (u = 0) => u * r : (u = 0) => a - u * r;
    return Array.from(e.variantChildren).sort(S2).forEach((u, c) => {
      u.notify("AnimationStart", t), s.push(Mu(u, t, {
        ...o,
        delay: n + l(c)
      }).then(() => u.notify("AnimationComplete", t)));
    }), Promise.all(s);
  }
  function S2(e, t) {
    return e.sortNodePosition(t);
  }
  function w2(e, t, n = {}) {
    e.notify("AnimationStart", t);
    let r;
    if (Array.isArray(t)) {
      const i = t.map((o) => Mu(e, o, n));
      r = Promise.all(i);
    } else if (typeof t == "string")
      r = Mu(e, t, n);
    else {
      const i = typeof t == "function" ? _a(e, t, n.custom) : t;
      r = Promise.all(Rv(e, i, n));
    }
    return r.then(() => e.notify("AnimationComplete", t));
  }
  const T2 = [...tf].reverse(), E2 = tf.length;
  function C2(e) {
    return (t) => Promise.all(t.map(({ animation: n, options: r }) => w2(e, n, r)));
  }
  function P2(e) {
    let t = C2(e);
    const n = _2();
    let r = !0;
    const i = (l, u) => {
      const c = _a(e, u);
      if (c) {
        const { transition: f, transitionEnd: d, ...h } = c;
        l = { ...l, ...h, ...d };
      }
      return l;
    };
    function o(l) {
      t = l(e);
    }
    function s(l, u) {
      const c = e.getProps(), f = e.getVariantContext(!0) || {}, d = [], h = /* @__PURE__ */ new Set();
      let g = {}, v = 1 / 0;
      for (let y = 0; y < E2; y++) {
        const p = T2[y], m = n[p], x = c[p] !== void 0 ? c[p] : f[p], E = Ji(x), C = p === u ? m.isActive : null;
        C === !1 && (v = y);
        let T = x === f[p] && x !== c[p] && E;
        if (T && r && e.manuallyAnimateOnMount && (T = !1), m.protectedKeys = { ...g }, // If it isn't active and hasn't *just* been set as inactive
        !m.isActive && C === null || // If we didn't and don't have any defined prop for this animation type
        !x && !m.prevProp || // Or if the prop doesn't define an animation
        Ea(x) || typeof x == "boolean")
          continue;
        const _ = k2(m.prevProp, x);
        let L = _ || // If we're making this variant active, we want to always make it active
        p === u && m.isActive && !T && E || // If we removed a higher-priority variant (i is in reverse order)
        y > v && E;
        const V = Array.isArray(x) ? x : [x];
        let I = V.reduce(i, {});
        C === !1 && (I = {});
        const { prevResolvedValues: de = {} } = m, U = {
          ...de,
          ...I
        }, G = (K) => {
          L = !0, h.delete(K), m.needsAnimating[K] = !0;
        };
        for (const K in U) {
          const Ee = I[K], Ie = de[K];
          g.hasOwnProperty(K) || (Ee !== Ie ? Ms(Ee) && Ms(Ie) ? !nv(Ee, Ie) || _ ? G(K) : m.protectedKeys[K] = !0 : Ee !== void 0 ? G(K) : h.add(K) : Ee !== void 0 && h.has(K) ? G(K) : m.protectedKeys[K] = !0);
        }
        m.prevProp = x, m.prevResolvedValues = I, m.isActive && (g = { ...g, ...I }), r && e.blockInitialAnimation && (L = !1), L && !T && d.push(...V.map((K) => ({
          animation: K,
          options: { type: p, ...l }
        })));
      }
      if (h.size) {
        const y = {};
        h.forEach((p) => {
          const m = e.getBaseTarget(p);
          m !== void 0 && (y[p] = m);
        }), d.push({ animation: y });
      }
      let k = !!d.length;
      return r && c.initial === !1 && !e.manuallyAnimateOnMount && (k = !1), r = !1, k ? t(d) : Promise.resolve();
    }
    function a(l, u, c) {
      var f;
      if (n[l].isActive === u)
        return Promise.resolve();
      (f = e.variantChildren) === null || f === void 0 || f.forEach((h) => {
        var g;
        return (g = h.animationState) === null || g === void 0 ? void 0 : g.setActive(l, u);
      }), n[l].isActive = u;
      const d = s(c, l);
      for (const h in n)
        n[h].protectedKeys = {};
      return d;
    }
    return {
      animateChanges: s,
      setActive: a,
      setAnimateFunction: o,
      getState: () => n
    };
  }
  function k2(e, t) {
    return typeof t == "string" ? t !== e : Array.isArray(t) ? !nv(t, e) : !1;
  }
  function Vn(e = !1) {
    return {
      isActive: e,
      protectedKeys: {},
      needsAnimating: {},
      prevResolvedValues: {}
    };
  }
  function _2() {
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
  class A2 extends Rn {
    /**
     * We dynamically generate the AnimationState manager as it contains a reference
     * to the underlying animation library. We only want to load that if we load this,
     * so people can optionally code split it out using the `m` component.
     */
    constructor(t) {
      super(t), t.animationState || (t.animationState = P2(t));
    }
    updateAnimationControlsSubscription() {
      const { animate: t } = this.node.getProps();
      this.unmount(), Ea(t) && (this.unmount = t.subscribe(this.node));
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
  let O2 = 0;
  class F2 extends Rn {
    constructor() {
      super(...arguments), this.id = O2++;
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
  const j2 = {
    animation: {
      Feature: A2
    },
    exit: {
      Feature: F2
    }
  }, Vp = (e, t) => Math.abs(e - t);
  function D2(e, t) {
    const n = Vp(e.x, t.x), r = Vp(e.y, t.y);
    return Math.sqrt(n ** 2 + r ** 2);
  }
  class Lv {
    constructor(t, n, { transformPagePoint: r } = {}) {
      if (this.startEvent = null, this.lastMoveEvent = null, this.lastMoveEventInfo = null, this.handlers = {}, this.updatePoint = () => {
        if (!(this.lastMoveEvent && this.lastMoveEventInfo))
          return;
        const u = Sl(this.lastMoveEventInfo, this.history), c = this.startEvent !== null, f = D2(u.offset, { x: 0, y: 0 }) >= 3;
        if (!c && !f)
          return;
        const { point: d } = u, { timestamp: h } = xe;
        this.history.push({ ...d, timestamp: h });
        const { onStart: g, onMove: v } = this.handlers;
        c || (g && g(this.lastMoveEvent, u), this.startEvent = this.lastMoveEvent), v && v(this.lastMoveEvent, u);
      }, this.handlePointerMove = (u, c) => {
        this.lastMoveEvent = u, this.lastMoveEventInfo = xl(c, this.transformPagePoint), ee.update(this.updatePoint, !0);
      }, this.handlePointerUp = (u, c) => {
        if (this.end(), !(this.lastMoveEvent && this.lastMoveEventInfo))
          return;
        const { onEnd: f, onSessionEnd: d } = this.handlers, h = Sl(u.type === "pointercancel" ? this.lastMoveEventInfo : xl(c, this.transformPagePoint), this.history);
        this.startEvent && f && f(u, h), d && d(u, h);
      }, !Zg(t))
        return;
      this.handlers = n, this.transformPagePoint = r;
      const i = ka(t), o = xl(i, this.transformPagePoint), { point: s } = o, { timestamp: a } = xe;
      this.history = [{ ...s, timestamp: a }];
      const { onSessionStart: l } = n;
      l && l(t, Sl(o, this.history)), this.removeListeners = Tn(Wt(window, "pointermove", this.handlePointerMove), Wt(window, "pointerup", this.handlePointerUp), Wt(window, "pointercancel", this.handlePointerUp));
    }
    updateHandlers(t) {
      this.handlers = t;
    }
    end() {
      this.removeListeners && this.removeListeners(), Zt(this.updatePoint);
    }
  }
  function xl(e, t) {
    return t ? { point: t(e.point) } : e;
  }
  function $p(e, t) {
    return { x: e.x - t.x, y: e.y - t.y };
  }
  function Sl({ point: e }, t) {
    return {
      point: e,
      delta: $p(e, Nv(t)),
      offset: $p(e, M2(t)),
      velocity: R2(t, 0.1)
    };
  }
  function M2(e) {
    return e[0];
  }
  function Nv(e) {
    return e[e.length - 1];
  }
  function R2(e, t) {
    if (e.length < 2)
      return { x: 0, y: 0 };
    let n = e.length - 1, r = null;
    const i = Nv(e);
    for (; n >= 0 && (r = e[n], !(i.timestamp - r.timestamp > En(t))); )
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
  function tt(e) {
    return e.max - e.min;
  }
  function Ru(e, t = 0, n = 0.01) {
    return Math.abs(e - t) <= n;
  }
  function bp(e, t, n, r = 0.5) {
    e.origin = r, e.originPoint = ae(t.min, t.max, e.origin), e.scale = tt(n) / tt(t), (Ru(e.scale, 1, 1e-4) || isNaN(e.scale)) && (e.scale = 1), e.translate = ae(n.min, n.max, e.origin) - e.originPoint, (Ru(e.translate) || isNaN(e.translate)) && (e.translate = 0);
  }
  function ji(e, t, n, r) {
    bp(e.x, t.x, n.x, r ? r.originX : void 0), bp(e.y, t.y, n.y, r ? r.originY : void 0);
  }
  function Ip(e, t, n) {
    e.min = n.min + t.min, e.max = e.min + tt(t);
  }
  function L2(e, t, n) {
    Ip(e.x, t.x, n.x), Ip(e.y, t.y, n.y);
  }
  function zp(e, t, n) {
    e.min = t.min - n.min, e.max = e.min + tt(t);
  }
  function Di(e, t, n) {
    zp(e.x, t.x, n.x), zp(e.y, t.y, n.y);
  }
  function N2(e, { min: t, max: n }, r) {
    return t !== void 0 && e < t ? e = r ? ae(t, e, r.min) : Math.max(e, t) : n !== void 0 && e > n && (e = r ? ae(n, e, r.max) : Math.min(e, n)), e;
  }
  function Bp(e, t, n) {
    return {
      min: t !== void 0 ? e.min + t : void 0,
      max: n !== void 0 ? e.max + n - (e.max - e.min) : void 0
    };
  }
  function V2(e, { top: t, left: n, bottom: r, right: i }) {
    return {
      x: Bp(e.x, n, i),
      y: Bp(e.y, t, r)
    };
  }
  function Up(e, t) {
    let n = t.min - e.min, r = t.max - e.max;
    return t.max - t.min < e.max - e.min && ([n, r] = [r, n]), { min: n, max: r };
  }
  function $2(e, t) {
    return {
      x: Up(e.x, t.x),
      y: Up(e.y, t.y)
    };
  }
  function b2(e, t) {
    let n = 0.5;
    const r = tt(e), i = tt(t);
    return i > r ? n = to(t.min, t.max - r, e.min) : r > i && (n = to(e.min, e.max - i, t.min)), An(0, 1, n);
  }
  function I2(e, t) {
    const n = {};
    return t.min !== void 0 && (n.min = t.min - e.min), t.max !== void 0 && (n.max = t.max - e.min), n;
  }
  const Lu = 0.35;
  function z2(e = Lu) {
    return e === !1 ? e = 0 : e === !0 && (e = Lu), {
      x: Hp(e, "left", "right"),
      y: Hp(e, "top", "bottom")
    };
  }
  function Hp(e, t, n) {
    return {
      min: Wp(e, t),
      max: Wp(e, n)
    };
  }
  function Wp(e, t) {
    return typeof e == "number" ? e : e[t] || 0;
  }
  const Gp = () => ({
    translate: 0,
    scale: 1,
    origin: 0,
    originPoint: 0
  }), Dr = () => ({
    x: Gp(),
    y: Gp()
  }), Kp = () => ({ min: 0, max: 0 }), he = () => ({
    x: Kp(),
    y: Kp()
  });
  function kt(e) {
    return [e("x"), e("y")];
  }
  function Vv({ top: e, left: t, right: n, bottom: r }) {
    return {
      x: { min: t, max: n },
      y: { min: e, max: r }
    };
  }
  function B2({ x: e, y: t }) {
    return { top: t.min, right: e.max, bottom: t.max, left: e.min };
  }
  function U2(e, t) {
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
  function wl(e) {
    return e === void 0 || e === 1;
  }
  function Nu({ scale: e, scaleX: t, scaleY: n }) {
    return !wl(e) || !wl(t) || !wl(n);
  }
  function zn(e) {
    return Nu(e) || $v(e) || e.z || e.rotate || e.rotateX || e.rotateY;
  }
  function $v(e) {
    return Qp(e.x) || Qp(e.y);
  }
  function Qp(e) {
    return e && e !== "0%";
  }
  function $s(e, t, n) {
    const r = e - n, i = t * r;
    return n + i;
  }
  function Yp(e, t, n, r, i) {
    return i !== void 0 && (e = $s(e, i, r)), $s(e, n, r) + t;
  }
  function Vu(e, t = 0, n = 1, r, i) {
    e.min = Yp(e.min, t, n, r, i), e.max = Yp(e.max, t, n, r, i);
  }
  function bv(e, { x: t, y: n }) {
    Vu(e.x, t.translate, t.scale, t.originPoint), Vu(e.y, n.translate, n.scale, n.originPoint);
  }
  function H2(e, t, n, r = !1) {
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
      }), s && (t.x *= s.x.scale, t.y *= s.y.scale, bv(e, s)), r && zn(o.latestValues) && Mr(e, o.latestValues));
    }
    t.x = Xp(t.x), t.y = Xp(t.y);
  }
  function Xp(e) {
    return Number.isInteger(e) || e > 1.0000000000001 || e < 0.999999999999 ? e : 1;
  }
  function an(e, t) {
    e.min = e.min + t, e.max = e.max + t;
  }
  function Zp(e, t, [n, r, i]) {
    const o = t[i] !== void 0 ? t[i] : 0.5, s = ae(e.min, e.max, o);
    Vu(e, t[n], t[r], s, t.scale);
  }
  const W2 = ["x", "scaleX", "originX"], G2 = ["y", "scaleY", "originY"];
  function Mr(e, t) {
    Zp(e.x, t, W2), Zp(e.y, t, G2);
  }
  function Iv(e, t) {
    return Vv(U2(e.getBoundingClientRect(), t));
  }
  function K2(e, t, n) {
    const r = Iv(e, n), { scroll: i } = t;
    return i && (an(r.x, i.offset.x), an(r.y, i.offset.y)), r;
  }
  const Q2 = /* @__PURE__ */ new WeakMap();
  class Y2 {
    constructor(t) {
      this.openGlobalLock = null, this.isDragging = !1, this.currentDirection = null, this.originPoint = { x: 0, y: 0 }, this.constraints = !1, this.hasMutatedConstraints = !1, this.elastic = he(), this.visualElement = t;
    }
    start(t, { snapToCursor: n = !1 } = {}) {
      const { presenceContext: r } = this.visualElement;
      if (r && r.isPresent === !1)
        return;
      const i = (l) => {
        this.stopAnimation(), n && this.snapToCursor(ka(l, "page").point);
      }, o = (l, u) => {
        const { drag: c, dragPropagation: f, onDragStart: d } = this.getProps();
        if (c && !f && (this.openGlobalLock && this.openGlobalLock(), this.openGlobalLock = Jg(c), !this.openGlobalLock))
          return;
        this.isDragging = !0, this.currentDirection = null, this.resolveConstraints(), this.visualElement.projection && (this.visualElement.projection.isAnimationBlocked = !0, this.visualElement.projection.target = void 0), kt((g) => {
          let v = this.getAxisMotionValue(g).get() || 0;
          if (Dt.test(v)) {
            const { projection: k } = this.visualElement;
            if (k && k.layout) {
              const y = k.layout.layoutBox[g];
              y && (v = tt(y) * (parseFloat(v) / 100));
            }
          }
          this.originPoint[g] = v;
        }), d && ee.update(() => d(l, u), !1, !0);
        const { animationState: h } = this.visualElement;
        h && h.setActive("whileDrag", !0);
      }, s = (l, u) => {
        const { dragPropagation: c, dragDirectionLock: f, onDirectionLock: d, onDrag: h } = this.getProps();
        if (!c && !this.openGlobalLock)
          return;
        const { offset: g } = u;
        if (f && this.currentDirection === null) {
          this.currentDirection = X2(g), this.currentDirection !== null && d && d(this.currentDirection);
          return;
        }
        this.updateAxis("x", u.point, g), this.updateAxis("y", u.point, g), this.visualElement.render(), h && h(l, u);
      }, a = (l, u) => this.stop(l, u);
      this.panSession = new Lv(t, {
        onSessionStart: i,
        onStart: o,
        onMove: s,
        onSessionEnd: a
      }, { transformPagePoint: this.visualElement.getTransformPagePoint() });
    }
    stop(t, n) {
      const r = this.isDragging;
      if (this.cancel(), !r)
        return;
      const { velocity: i } = n;
      this.startAnimation(i);
      const { onDragEnd: o } = this.getProps();
      o && ee.update(() => o(t, n));
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
      if (!r || !zo(t, i, this.currentDirection))
        return;
      const o = this.getAxisMotionValue(t);
      let s = this.originPoint[t] + r[t];
      this.constraints && this.constraints[t] && (s = N2(s, this.constraints[t], this.elastic[t])), o.set(s);
    }
    resolveConstraints() {
      const { dragConstraints: t, dragElastic: n } = this.getProps(), { layout: r } = this.visualElement.projection || {}, i = this.constraints;
      t && Fr(t) ? this.constraints || (this.constraints = this.resolveRefConstraints()) : t && r ? this.constraints = V2(r.layoutBox, t) : this.constraints = !1, this.elastic = z2(n), i !== this.constraints && r && this.constraints && !this.hasMutatedConstraints && kt((o) => {
        this.getAxisMotionValue(o) && (this.constraints[o] = I2(r.layoutBox[o], this.constraints[o]));
      });
    }
    resolveRefConstraints() {
      const { dragConstraints: t, onMeasureDragConstraints: n } = this.getProps();
      if (!t || !Fr(t))
        return !1;
      const r = t.current, { projection: i } = this.visualElement;
      if (!i || !i.layout)
        return !1;
      const o = K2(r, i.root, this.visualElement.getTransformPagePoint());
      let s = $2(i.layout.layoutBox, o);
      if (n) {
        const a = n(B2(s));
        this.hasMutatedConstraints = !!a, a && (s = Vv(a));
      }
      return s;
    }
    startAnimation(t) {
      const { drag: n, dragMomentum: r, dragElastic: i, dragTransition: o, dragSnapToOrigin: s, onDragTransitionEnd: a } = this.getProps(), l = this.constraints || {}, u = kt((c) => {
        if (!zo(c, n, this.currentDirection))
          return;
        let f = l && l[c] || {};
        s && (f = { min: 0, max: 0 });
        const d = i ? 200 : 1e6, h = i ? 40 : 1e7, g = {
          type: "inertia",
          velocity: r ? t[c] : 0,
          bounceStiffness: d,
          bounceDamping: h,
          timeConstant: 750,
          restDelta: 1,
          restSpeed: 10,
          ...o,
          ...f
        };
        return this.startAxisValueAnimation(c, g);
      });
      return Promise.all(u).then(a);
    }
    startAxisValueAnimation(t, n) {
      const r = this.getAxisMotionValue(t);
      return r.start(vf(t, r, 0, n));
    }
    stopAnimation() {
      kt((t) => this.getAxisMotionValue(t).stop());
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
      kt((n) => {
        const { drag: r } = this.getProps();
        if (!zo(n, r, this.currentDirection))
          return;
        const { projection: i } = this.visualElement, o = this.getAxisMotionValue(n);
        if (i && i.layout) {
          const { min: s, max: a } = i.layout.layoutBox[n];
          o.set(t[n] - ae(s, a, 0.5));
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
      kt((s) => {
        const a = this.getAxisMotionValue(s);
        if (a) {
          const l = a.get();
          i[s] = b2({ min: l, max: l }, this.constraints[s]);
        }
      });
      const { transformTemplate: o } = this.visualElement.getProps();
      this.visualElement.current.style.transform = o ? o({}, "") : "none", r.root && r.root.updateScroll(), r.updateLayout(), this.resolveConstraints(), kt((s) => {
        if (!zo(s, t, null))
          return;
        const a = this.getAxisMotionValue(s), { min: l, max: u } = this.constraints[s];
        a.set(ae(l, u, i[s]));
      });
    }
    addListeners() {
      if (!this.visualElement.current)
        return;
      Q2.set(this.visualElement, this);
      const t = this.visualElement.current, n = Wt(t, "pointerdown", (l) => {
        const { drag: u, dragListener: c = !0 } = this.getProps();
        u && c && this.start(l);
      }), r = () => {
        const { dragConstraints: l } = this.getProps();
        Fr(l) && (this.constraints = this.resolveRefConstraints());
      }, { projection: i } = this.visualElement, o = i.addEventListener("measure", r);
      i && !i.layout && (i.root && i.root.updateScroll(), i.updateLayout()), r();
      const s = Bt(window, "resize", () => this.scalePositionWithinConstraints()), a = i.addEventListener("didUpdate", ({ delta: l, hasLayoutChanged: u }) => {
        this.isDragging && u && (kt((c) => {
          const f = this.getAxisMotionValue(c);
          f && (this.originPoint[c] += l[c].translate, f.set(f.get() + l[c].translate));
        }), this.visualElement.render());
      });
      return () => {
        s(), n(), o(), a && a();
      };
    }
    getProps() {
      const t = this.visualElement.getProps(), { drag: n = !1, dragDirectionLock: r = !1, dragPropagation: i = !1, dragConstraints: o = !1, dragElastic: s = Lu, dragMomentum: a = !0 } = t;
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
  function zo(e, t, n) {
    return (t === !0 || t === e) && (n === null || n === e);
  }
  function X2(e, t = 10) {
    let n = null;
    return Math.abs(e.y) > t ? n = "y" : Math.abs(e.x) > t && (n = "x"), n;
  }
  class Z2 extends Rn {
    constructor(t) {
      super(t), this.removeGroupControls = fe, this.removeListeners = fe, this.controls = new Y2(t);
    }
    mount() {
      const { dragControls: t } = this.node.getProps();
      t && (this.removeGroupControls = t.subscribe(this.controls)), this.removeListeners = this.controls.addListeners() || fe;
    }
    unmount() {
      this.removeGroupControls(), this.removeListeners();
    }
  }
  const qp = (e) => (t, n) => {
    e && ee.update(() => e(t, n));
  };
  class q2 extends Rn {
    constructor() {
      super(...arguments), this.removePointerDownListener = fe;
    }
    onPointerDown(t) {
      this.session = new Lv(t, this.createPanHandlers(), { transformPagePoint: this.node.getTransformPagePoint() });
    }
    createPanHandlers() {
      const { onPanSessionStart: t, onPanStart: n, onPan: r, onPanEnd: i } = this.node.getProps();
      return {
        onSessionStart: qp(t),
        onStart: qp(n),
        onMove: r,
        onEnd: (o, s) => {
          delete this.session, i && ee.update(() => i(o, s));
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
  function J2() {
    const e = S.useContext(wa);
    if (e === null)
      return [!0, null];
    const { isPresent: t, onExitComplete: n, register: r } = e, i = S.useId();
    return S.useEffect(() => r(i), []), !t && n ? [!1, () => n && n(i)] : [!0];
  }
  const rs = {
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
  function Jp(e, t) {
    return t.max === t.min ? 0 : e / (t.max - t.min) * 100;
  }
  const di = {
    correct: (e, t) => {
      if (!t.target)
        return e;
      if (typeof e == "string")
        if (b.test(e))
          e = parseFloat(e);
        else
          return e;
      const n = Jp(e, t.target.x), r = Jp(e, t.target.y);
      return `${n}% ${r}%`;
    }
  }, eA = {
    correct: (e, { treeScale: t, projectionDelta: n }) => {
      const r = e, i = On.parse(e);
      if (i.length > 5)
        return r;
      const o = On.createTransformer(e), s = typeof i[0] != "number" ? 1 : 0, a = n.x.scale * t.x, l = n.y.scale * t.y;
      i[0 + s] /= a, i[1 + s] /= l;
      const u = ae(a, l, 0.5);
      return typeof i[2 + s] == "number" && (i[2 + s] /= u), typeof i[3 + s] == "number" && (i[3 + s] /= u), o(i);
    }
  };
  class tA extends Ut.Component {
    /**
     * This only mounts projection nodes for components that
     * need measuring, we might want to do it for all components
     * in order to incorporate transforms
     */
    componentDidMount() {
      const { visualElement: t, layoutGroup: n, switchLayoutGroup: r, layoutId: i } = this.props, { projection: o } = t;
      lk(nA), o && (n.group && n.group.add(o), r && r.register && i && r.register(o), o.root.didUpdate(), o.addEventListener("animationComplete", () => {
        this.safeToRemove();
      }), o.setOptions({
        ...o.options,
        onExitComplete: () => this.safeToRemove()
      })), rs.hasEverUpdated = !0;
    }
    getSnapshotBeforeUpdate(t) {
      const { layoutDependency: n, visualElement: r, drag: i, isPresent: o } = this.props, s = r.projection;
      return s && (s.isPresent = o, i || t.layoutDependency !== n || n === void 0 ? s.willUpdate() : this.safeToRemove(), t.isPresent !== o && (o ? s.promote() : s.relegate() || ee.postRender(() => {
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
  function zv(e) {
    const [t, n] = J2(), r = S.useContext(rf);
    return Ut.createElement(tA, { ...e, layoutGroup: r, switchLayoutGroup: S.useContext(Ng), isPresent: t, safeToRemove: n });
  }
  const nA = {
    borderRadius: {
      ...di,
      applyTo: [
        "borderTopLeftRadius",
        "borderTopRightRadius",
        "borderBottomLeftRadius",
        "borderBottomRightRadius"
      ]
    },
    borderTopLeftRadius: di,
    borderTopRightRadius: di,
    borderBottomLeftRadius: di,
    borderBottomRightRadius: di,
    boxShadow: eA
  }, Bv = ["TopLeft", "TopRight", "BottomLeft", "BottomRight"], rA = Bv.length, eh = (e) => typeof e == "string" ? parseFloat(e) : e, th = (e) => typeof e == "number" || b.test(e);
  function iA(e, t, n, r, i, o) {
    i ? (e.opacity = ae(
      0,
      // TODO Reinstate this if only child
      n.opacity !== void 0 ? n.opacity : 1,
      oA(r)
    ), e.opacityExit = ae(t.opacity !== void 0 ? t.opacity : 1, 0, sA(r))) : o && (e.opacity = ae(t.opacity !== void 0 ? t.opacity : 1, n.opacity !== void 0 ? n.opacity : 1, r));
    for (let s = 0; s < rA; s++) {
      const a = `border${Bv[s]}Radius`;
      let l = nh(t, a), u = nh(n, a);
      if (l === void 0 && u === void 0)
        continue;
      l || (l = 0), u || (u = 0), l === 0 || u === 0 || th(l) === th(u) ? (e[a] = Math.max(ae(eh(l), eh(u), r), 0), (Dt.test(u) || Dt.test(l)) && (e[a] += "%")) : e[a] = u;
    }
    (t.rotate || n.rotate) && (e.rotate = ae(t.rotate || 0, n.rotate || 0, r));
  }
  function nh(e, t) {
    return e[t] !== void 0 ? e[t] : e.borderRadius;
  }
  const oA = Uv(0, 0.5, hf), sA = Uv(0.5, 0.95, fe);
  function Uv(e, t, n) {
    return (r) => r < e ? 0 : r > t ? 1 : n(to(e, t, r));
  }
  function rh(e, t) {
    e.min = t.min, e.max = t.max;
  }
  function st(e, t) {
    rh(e.x, t.x), rh(e.y, t.y);
  }
  function ih(e, t, n, r, i) {
    return e -= t, e = $s(e, 1 / n, r), i !== void 0 && (e = $s(e, 1 / i, r)), e;
  }
  function aA(e, t = 0, n = 1, r = 0.5, i, o = e, s = e) {
    if (Dt.test(t) && (t = parseFloat(t), t = ae(s.min, s.max, t / 100) - s.min), typeof t != "number")
      return;
    let a = ae(o.min, o.max, r);
    e === o && (a -= t), e.min = ih(e.min, t, n, a, i), e.max = ih(e.max, t, n, a, i);
  }
  function oh(e, t, [n, r, i], o, s) {
    aA(e, t[n], t[r], t[i], t.scale, o, s);
  }
  const lA = ["x", "scaleX", "originX"], uA = ["y", "scaleY", "originY"];
  function sh(e, t, n, r) {
    oh(e.x, t, lA, n ? n.x : void 0, r ? r.x : void 0), oh(e.y, t, uA, n ? n.y : void 0, r ? r.y : void 0);
  }
  function ah(e) {
    return e.translate === 0 && e.scale === 1;
  }
  function Hv(e) {
    return ah(e.x) && ah(e.y);
  }
  function cA(e, t) {
    return e.x.min === t.x.min && e.x.max === t.x.max && e.y.min === t.y.min && e.y.max === t.y.max;
  }
  function Wv(e, t) {
    return Math.round(e.x.min) === Math.round(t.x.min) && Math.round(e.x.max) === Math.round(t.x.max) && Math.round(e.y.min) === Math.round(t.y.min) && Math.round(e.y.max) === Math.round(t.y.max);
  }
  function lh(e) {
    return tt(e.x) / tt(e.y);
  }
  class fA {
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
  function uh(e, t, n) {
    let r = "";
    const i = e.x.translate / t.x, o = e.y.translate / t.y;
    if ((i || o) && (r = `translate3d(${i}px, ${o}px, 0) `), (t.x !== 1 || t.y !== 1) && (r += `scale(${1 / t.x}, ${1 / t.y}) `), n) {
      const { rotate: l, rotateX: u, rotateY: c } = n;
      l && (r += `rotate(${l}deg) `), u && (r += `rotateX(${u}deg) `), c && (r += `rotateY(${c}deg) `);
    }
    const s = e.x.scale * t.x, a = e.y.scale * t.y;
    return (s !== 1 || a !== 1) && (r += `scale(${s}, ${a})`), r || "none";
  }
  const dA = (e, t) => e.depth - t.depth;
  class pA {
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
      this.isDirty && this.children.sort(dA), this.isDirty = !1, this.children.forEach(t);
    }
  }
  function hA(e, t) {
    const n = performance.now(), r = ({ timestamp: i }) => {
      const o = i - n;
      o >= t && (Zt(r), e(o - t));
    };
    return ee.read(r, !0), () => Zt(r);
  }
  function mA(e) {
    window.MotionDebug && window.MotionDebug.record(e);
  }
  function yA(e) {
    return e instanceof SVGElement && e.tagName !== "svg";
  }
  function gA(e, t, n) {
    const r = Ke(e) ? e : Qr(e);
    return r.start(vf("", r, t, n)), r.animation;
  }
  const ch = ["", "X", "Y", "Z"], fh = 1e3;
  let vA = 0;
  const Bn = {
    type: "projectionFrame",
    totalNodes: 0,
    resolvedTargetDeltas: 0,
    recalculatedProjection: 0
  };
  function Gv({ attachResizeListener: e, defaultParent: t, measureScroll: n, checkIsScrollRoot: r, resetTransform: i }) {
    return class {
      constructor(s = {}, a = t == null ? void 0 : t()) {
        this.id = vA++, this.animationId = 0, this.children = /* @__PURE__ */ new Set(), this.options = {}, this.isTreeAnimating = !1, this.isAnimationBlocked = !1, this.isLayoutDirty = !1, this.isProjectionDirty = !1, this.isSharedProjectionDirty = !1, this.isTransformDirty = !1, this.updateManuallyBlocked = !1, this.updateBlockedByResize = !1, this.isUpdating = !1, this.isSVG = !1, this.needsReset = !1, this.shouldResetTransform = !1, this.treeScale = { x: 1, y: 1 }, this.eventHandlers = /* @__PURE__ */ new Map(), this.hasTreeAnimated = !1, this.updateScheduled = !1, this.checkUpdateFailed = () => {
          this.isUpdating && (this.isUpdating = !1, this.clearAllSnapshots());
        }, this.updateProjection = () => {
          Bn.totalNodes = Bn.resolvedTargetDeltas = Bn.recalculatedProjection = 0, this.nodes.forEach(wA), this.nodes.forEach(kA), this.nodes.forEach(_A), this.nodes.forEach(TA), mA(Bn);
        }, this.hasProjected = !1, this.isVisible = !0, this.animationProgress = 0, this.sharedNodes = /* @__PURE__ */ new Map(), this.latestValues = s, this.root = a ? a.root || a : this, this.path = a ? [...a.path, a] : [], this.parent = a, this.depth = a ? a.depth + 1 : 0;
        for (let l = 0; l < this.path.length; l++)
          this.path[l].shouldResetTransform = !0;
        this.root === this && (this.nodes = new pA());
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
        this.isSVG = yA(s), this.instance = s;
        const { layoutId: l, layout: u, visualElement: c } = this.options;
        if (c && !c.current && c.mount(s), this.root.nodes.add(this), this.parent && this.parent.children.add(this), a && (u || l) && (this.isLayoutDirty = !0), e) {
          let f;
          const d = () => this.root.updateBlockedByResize = !1;
          e(s, () => {
            this.root.updateBlockedByResize = !0, f && f(), f = hA(d, 250), rs.hasAnimatedSinceResize && (rs.hasAnimatedSinceResize = !1, this.nodes.forEach(ph));
          });
        }
        l && this.root.registerSharedNode(l, this), this.options.animate !== !1 && c && (l || u) && this.addEventListener("didUpdate", ({ delta: f, hasLayoutChanged: d, hasRelativeTargetChanged: h, layout: g }) => {
          if (this.isTreeAnimationBlocked()) {
            this.target = void 0, this.relativeTarget = void 0;
            return;
          }
          const v = this.options.transition || c.getDefaultTransition() || DA, { onLayoutAnimationStart: k, onLayoutAnimationComplete: y } = c.getProps(), p = !this.targetLayout || !Wv(this.targetLayout, g) || h, m = !d && h;
          if (this.options.layoutRoot || this.resumeFrom && this.resumeFrom.instance || m || d && (p || !this.currentAnimation)) {
            this.resumeFrom && (this.resumingFrom = this.resumeFrom, this.resumingFrom.resumingFrom = void 0), this.setAnimationOrigin(f, m);
            const x = {
              ...Fv(v, "layout"),
              onPlay: k,
              onComplete: y
            };
            (c.shouldReduceMotion || this.options.layoutRoot) && (x.delay = 0, x.type = !1), this.startAnimation(x);
          } else
            d || ph(this), this.isLead() && this.options.onExitComplete && this.options.onExitComplete();
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
        this.isUpdateBlocked() || (this.isUpdating = !0, this.nodes && this.nodes.forEach(AA), this.animationId++);
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
        for (let c = 0; c < this.path.length; c++) {
          const f = this.path[c];
          f.shouldResetTransform = !0, f.updateScroll("snapshot"), f.options.layoutRoot && f.willUpdate(!1);
        }
        const { layoutId: a, layout: l } = this.options;
        if (a === void 0 && !l)
          return;
        const u = this.getTransformTemplate();
        this.prevTransformTemplateValue = u ? u(this.latestValues, "") : void 0, this.updateSnapshot(), s && this.notifyListeners("willUpdate");
      }
      update() {
        if (this.updateScheduled = !1, this.isUpdateBlocked()) {
          this.unblockUpdate(), this.clearAllSnapshots(), this.nodes.forEach(dh);
          return;
        }
        this.isUpdating || this.nodes.forEach(CA), this.isUpdating = !1, this.nodes.forEach(PA), this.nodes.forEach(xA), this.nodes.forEach(SA), this.clearAllSnapshots();
        const a = performance.now();
        xe.delta = An(0, 1e3 / 60, a - xe.timestamp), xe.timestamp = a, xe.isProcessing = !0, fl.update.process(xe), fl.preRender.process(xe), fl.render.process(xe), xe.isProcessing = !1;
      }
      didUpdate() {
        this.updateScheduled || (this.updateScheduled = !0, queueMicrotask(() => this.update()));
      }
      clearAllSnapshots() {
        this.nodes.forEach(EA), this.sharedNodes.forEach(OA);
      }
      scheduleUpdateProjection() {
        ee.preRender(this.updateProjection, !1, !0);
      }
      scheduleCheckAfterUnmount() {
        ee.postRender(() => {
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
        this.layout = this.measure(!1), this.layoutCorrected = he(), this.isLayoutDirty = !1, this.projectionDelta = void 0, this.notifyListeners("measure", this.layout.layoutBox);
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
        const s = this.isLayoutDirty || this.shouldResetTransform, a = this.projectionDelta && !Hv(this.projectionDelta), l = this.getTransformTemplate(), u = l ? l(this.latestValues, "") : void 0, c = u !== this.prevTransformTemplateValue;
        s && (a || zn(this.latestValues) || c) && (i(this.instance, u), this.shouldResetTransform = !1, this.scheduleRender());
      }
      measure(s = !0) {
        const a = this.measurePageBox();
        let l = this.removeElementScroll(a);
        return s && (l = this.removeTransform(l)), MA(l), {
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
          return he();
        const a = s.measureViewportBox(), { scroll: l } = this.root;
        return l && (an(a.x, l.offset.x), an(a.y, l.offset.y)), a;
      }
      removeElementScroll(s) {
        const a = he();
        st(a, s);
        for (let l = 0; l < this.path.length; l++) {
          const u = this.path[l], { scroll: c, options: f } = u;
          if (u !== this.root && c && f.layoutScroll) {
            if (c.isRoot) {
              st(a, s);
              const { scroll: d } = this.root;
              d && (an(a.x, -d.offset.x), an(a.y, -d.offset.y));
            }
            an(a.x, c.offset.x), an(a.y, c.offset.y);
          }
        }
        return a;
      }
      applyTransform(s, a = !1) {
        const l = he();
        st(l, s);
        for (let u = 0; u < this.path.length; u++) {
          const c = this.path[u];
          !a && c.options.layoutScroll && c.scroll && c !== c.root && Mr(l, {
            x: -c.scroll.offset.x,
            y: -c.scroll.offset.y
          }), zn(c.latestValues) && Mr(l, c.latestValues);
        }
        return zn(this.latestValues) && Mr(l, this.latestValues), l;
      }
      removeTransform(s) {
        const a = he();
        st(a, s);
        for (let l = 0; l < this.path.length; l++) {
          const u = this.path[l];
          if (!u.instance || !zn(u.latestValues))
            continue;
          Nu(u.latestValues) && u.updateSnapshot();
          const c = he(), f = u.measurePageBox();
          st(c, f), sh(a, u.latestValues, u.snapshot ? u.snapshot.layoutBox : void 0, c);
        }
        return zn(this.latestValues) && sh(a, this.latestValues), a;
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
        this.relativeParent && this.relativeParent.resolvedRelativeTargetAt !== xe.timestamp && this.relativeParent.resolveTargetDelta(!0);
      }
      resolveTargetDelta(s = !1) {
        var a;
        const l = this.getLead();
        this.isProjectionDirty || (this.isProjectionDirty = l.isProjectionDirty), this.isTransformDirty || (this.isTransformDirty = l.isTransformDirty), this.isSharedProjectionDirty || (this.isSharedProjectionDirty = l.isSharedProjectionDirty);
        const u = !!this.resumingFrom || this !== l;
        if (!(s || u && this.isSharedProjectionDirty || this.isProjectionDirty || !((a = this.parent) === null || a === void 0) && a.isProjectionDirty || this.attemptToResolveRelativeTarget))
          return;
        const { layout: f, layoutId: d } = this.options;
        if (!(!this.layout || !(f || d))) {
          if (this.resolvedRelativeTargetAt = xe.timestamp, !this.targetDelta && !this.relativeTarget) {
            const h = this.getClosestProjectingParent();
            h && h.layout && this.animationProgress !== 1 ? (this.relativeParent = h, this.forceRelativeParentToResolveTarget(), this.relativeTarget = he(), this.relativeTargetOrigin = he(), Di(this.relativeTargetOrigin, this.layout.layoutBox, h.layout.layoutBox), st(this.relativeTarget, this.relativeTargetOrigin)) : this.relativeParent = this.relativeTarget = void 0;
          }
          if (!(!this.relativeTarget && !this.targetDelta)) {
            if (this.target || (this.target = he(), this.targetWithTransforms = he()), this.relativeTarget && this.relativeTargetOrigin && this.relativeParent && this.relativeParent.target ? (this.forceRelativeParentToResolveTarget(), L2(this.target, this.relativeTarget, this.relativeParent.target)) : this.targetDelta ? (this.resumingFrom ? this.target = this.applyTransform(this.layout.layoutBox) : st(this.target, this.layout.layoutBox), bv(this.target, this.targetDelta)) : st(this.target, this.layout.layoutBox), this.attemptToResolveRelativeTarget) {
              this.attemptToResolveRelativeTarget = !1;
              const h = this.getClosestProjectingParent();
              h && !!h.resumingFrom == !!this.resumingFrom && !h.options.layoutScroll && h.target && this.animationProgress !== 1 ? (this.relativeParent = h, this.forceRelativeParentToResolveTarget(), this.relativeTarget = he(), this.relativeTargetOrigin = he(), Di(this.relativeTargetOrigin, this.target, h.target), st(this.relativeTarget, this.relativeTargetOrigin)) : this.relativeParent = this.relativeTarget = void 0;
            }
            Bn.resolvedTargetDeltas++;
          }
        }
      }
      getClosestProjectingParent() {
        if (!(!this.parent || Nu(this.parent.latestValues) || $v(this.parent.latestValues)))
          return this.parent.isProjecting() ? this.parent : this.parent.getClosestProjectingParent();
      }
      isProjecting() {
        return !!((this.relativeTarget || this.targetDelta || this.options.layoutRoot) && this.layout);
      }
      calcProjection() {
        var s;
        const a = this.getLead(), l = !!this.resumingFrom || this !== a;
        let u = !0;
        if ((this.isProjectionDirty || !((s = this.parent) === null || s === void 0) && s.isProjectionDirty) && (u = !1), l && (this.isSharedProjectionDirty || this.isTransformDirty) && (u = !1), this.resolvedRelativeTargetAt === xe.timestamp && (u = !1), u)
          return;
        const { layout: c, layoutId: f } = this.options;
        if (this.isTreeAnimating = !!(this.parent && this.parent.isTreeAnimating || this.currentAnimation || this.pendingAnimation), this.isTreeAnimating || (this.targetDelta = this.relativeTarget = void 0), !this.layout || !(c || f))
          return;
        st(this.layoutCorrected, this.layout.layoutBox);
        const d = this.treeScale.x, h = this.treeScale.y;
        H2(this.layoutCorrected, this.treeScale, this.path, l), a.layout && !a.target && (this.treeScale.x !== 1 || this.treeScale.y !== 1) && (a.target = a.layout.layoutBox);
        const { target: g } = a;
        if (!g) {
          this.projectionTransform && (this.projectionDelta = Dr(), this.projectionTransform = "none", this.scheduleRender());
          return;
        }
        this.projectionDelta || (this.projectionDelta = Dr(), this.projectionDeltaWithTransform = Dr());
        const v = this.projectionTransform;
        ji(this.projectionDelta, this.layoutCorrected, g, this.latestValues), this.projectionTransform = uh(this.projectionDelta, this.treeScale), (this.projectionTransform !== v || this.treeScale.x !== d || this.treeScale.y !== h) && (this.hasProjected = !0, this.scheduleRender(), this.notifyListeners("projectionUpdate", g)), Bn.recalculatedProjection++;
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
        const l = this.snapshot, u = l ? l.latestValues : {}, c = { ...this.latestValues }, f = Dr();
        (!this.relativeParent || !this.relativeParent.options.layoutRoot) && (this.relativeTarget = this.relativeTargetOrigin = void 0), this.attemptToResolveRelativeTarget = !a;
        const d = he(), h = l ? l.source : void 0, g = this.layout ? this.layout.source : void 0, v = h !== g, k = this.getStack(), y = !k || k.members.length <= 1, p = !!(v && !y && this.options.crossfade === !0 && !this.path.some(jA));
        this.animationProgress = 0;
        let m;
        this.mixTargetDelta = (x) => {
          const E = x / 1e3;
          hh(f.x, s.x, E), hh(f.y, s.y, E), this.setTargetDelta(f), this.relativeTarget && this.relativeTargetOrigin && this.layout && this.relativeParent && this.relativeParent.layout && (Di(d, this.layout.layoutBox, this.relativeParent.layout.layoutBox), FA(this.relativeTarget, this.relativeTargetOrigin, d, E), m && cA(this.relativeTarget, m) && (this.isProjectionDirty = !1), m || (m = he()), st(m, this.relativeTarget)), v && (this.animationValues = c, iA(c, u, this.latestValues, E, p, y)), this.root.scheduleUpdateProjection(), this.scheduleRender(), this.animationProgress = E;
        }, this.mixTargetDelta(this.options.layoutRoot ? 1e3 : 0);
      }
      startAnimation(s) {
        this.notifyListeners("animationStart"), this.currentAnimation && this.currentAnimation.stop(), this.resumingFrom && this.resumingFrom.currentAnimation && this.resumingFrom.currentAnimation.stop(), this.pendingAnimation && (Zt(this.pendingAnimation), this.pendingAnimation = void 0), this.pendingAnimation = ee.update(() => {
          rs.hasAnimatedSinceResize = !0, this.currentAnimation = gA(0, fh, {
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
        this.currentAnimation && (this.mixTargetDelta && this.mixTargetDelta(fh), this.currentAnimation.stop()), this.completeAnimation();
      }
      applyTransformsToTarget() {
        const s = this.getLead();
        let { targetWithTransforms: a, target: l, layout: u, latestValues: c } = s;
        if (!(!a || !l || !u)) {
          if (this !== s && this.layout && u && Kv(this.options.animationType, this.layout.layoutBox, u.layoutBox)) {
            l = this.target || he();
            const f = tt(this.layout.layoutBox.x);
            l.x.min = s.target.x.min, l.x.max = l.x.min + f;
            const d = tt(this.layout.layoutBox.y);
            l.y.min = s.target.y.min, l.y.max = l.y.min + d;
          }
          st(a, l), Mr(a, c), ji(this.projectionDeltaWithTransform, this.layoutCorrected, a, c);
        }
      }
      registerSharedNode(s, a) {
        this.sharedNodes.has(s) || this.sharedNodes.set(s, new fA()), this.sharedNodes.get(s).add(a);
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
        for (let c = 0; c < ch.length; c++) {
          const f = "rotate" + ch[c];
          l[f] && (u[f] = l[f], s.setStaticValue(f, 0));
        }
        s.render();
        for (const c in u)
          s.setStaticValue(c, u[c]);
        s.scheduleRender();
      }
      getProjectionStyles(s = {}) {
        var a, l;
        const u = {};
        if (!this.instance || this.isSVG)
          return u;
        if (this.isVisible)
          u.visibility = "";
        else
          return { visibility: "hidden" };
        const c = this.getTransformTemplate();
        if (this.needsReset)
          return this.needsReset = !1, u.opacity = "", u.pointerEvents = ns(s.pointerEvents) || "", u.transform = c ? c(this.latestValues, "") : "none", u;
        const f = this.getLead();
        if (!this.projectionDelta || !this.layout || !f.target) {
          const v = {};
          return this.options.layoutId && (v.opacity = this.latestValues.opacity !== void 0 ? this.latestValues.opacity : 1, v.pointerEvents = ns(s.pointerEvents) || ""), this.hasProjected && !zn(this.latestValues) && (v.transform = c ? c({}, "") : "none", this.hasProjected = !1), v;
        }
        const d = f.animationValues || f.latestValues;
        this.applyTransformsToTarget(), u.transform = uh(this.projectionDeltaWithTransform, this.treeScale, d), c && (u.transform = c(d, u.transform));
        const { x: h, y: g } = this.projectionDelta;
        u.transformOrigin = `${h.origin * 100}% ${g.origin * 100}% 0`, f.animationValues ? u.opacity = f === this ? (l = (a = d.opacity) !== null && a !== void 0 ? a : this.latestValues.opacity) !== null && l !== void 0 ? l : 1 : this.preserveOpacity ? this.latestValues.opacity : d.opacityExit : u.opacity = f === this ? d.opacity !== void 0 ? d.opacity : "" : d.opacityExit !== void 0 ? d.opacityExit : 0;
        for (const v in js) {
          if (d[v] === void 0)
            continue;
          const { correct: k, applyTo: y } = js[v], p = u.transform === "none" ? d[v] : k(d[v], f);
          if (y) {
            const m = y.length;
            for (let x = 0; x < m; x++)
              u[y[x]] = p;
          } else
            u[v] = p;
        }
        return this.options.layoutId && (u.pointerEvents = f === this ? ns(s.pointerEvents) || "" : "none"), u;
      }
      clearSnapshot() {
        this.resumeFrom = this.snapshot = void 0;
      }
      // Only run on root
      resetTree() {
        this.root.nodes.forEach((s) => {
          var a;
          return (a = s.currentAnimation) === null || a === void 0 ? void 0 : a.stop();
        }), this.root.nodes.forEach(dh), this.root.sharedNodes.clear();
      }
    };
  }
  function xA(e) {
    e.updateLayout();
  }
  function SA(e) {
    var t;
    const n = ((t = e.resumeFrom) === null || t === void 0 ? void 0 : t.snapshot) || e.snapshot;
    if (e.isLead() && e.layout && n && e.hasListeners("didUpdate")) {
      const { layoutBox: r, measuredBox: i } = e.layout, { animationType: o } = e.options, s = n.source !== e.layout.source;
      o === "size" ? kt((f) => {
        const d = s ? n.measuredBox[f] : n.layoutBox[f], h = tt(d);
        d.min = r[f].min, d.max = d.min + h;
      }) : Kv(o, n.layoutBox, r) && kt((f) => {
        const d = s ? n.measuredBox[f] : n.layoutBox[f], h = tt(r[f]);
        d.max = d.min + h, e.relativeTarget && !e.currentAnimation && (e.isProjectionDirty = !0, e.relativeTarget[f].max = e.relativeTarget[f].min + h);
      });
      const a = Dr();
      ji(a, r, n.layoutBox);
      const l = Dr();
      s ? ji(l, e.applyTransform(i, !0), n.measuredBox) : ji(l, r, n.layoutBox);
      const u = !Hv(a);
      let c = !1;
      if (!e.resumeFrom) {
        const f = e.getClosestProjectingParent();
        if (f && !f.resumeFrom) {
          const { snapshot: d, layout: h } = f;
          if (d && h) {
            const g = he();
            Di(g, n.layoutBox, d.layoutBox);
            const v = he();
            Di(v, r, h.layoutBox), Wv(g, v) || (c = !0), f.options.layoutRoot && (e.relativeTarget = v, e.relativeTargetOrigin = g, e.relativeParent = f);
          }
        }
      }
      e.notifyListeners("didUpdate", {
        layout: r,
        snapshot: n,
        delta: l,
        layoutDelta: a,
        hasLayoutChanged: u,
        hasRelativeTargetChanged: c
      });
    } else if (e.isLead()) {
      const { onExitComplete: r } = e.options;
      r && r();
    }
    e.options.transition = void 0;
  }
  function wA(e) {
    Bn.totalNodes++, e.parent && (e.isProjecting() || (e.isProjectionDirty = e.parent.isProjectionDirty), e.isSharedProjectionDirty || (e.isSharedProjectionDirty = !!(e.isProjectionDirty || e.parent.isProjectionDirty || e.parent.isSharedProjectionDirty)), e.isTransformDirty || (e.isTransformDirty = e.parent.isTransformDirty));
  }
  function TA(e) {
    e.isProjectionDirty = e.isSharedProjectionDirty = e.isTransformDirty = !1;
  }
  function EA(e) {
    e.clearSnapshot();
  }
  function dh(e) {
    e.clearMeasurements();
  }
  function CA(e) {
    e.isLayoutDirty = !1;
  }
  function PA(e) {
    const { visualElement: t } = e.options;
    t && t.getProps().onBeforeLayoutMeasure && t.notify("BeforeLayoutMeasure"), e.resetTransform();
  }
  function ph(e) {
    e.finishAnimation(), e.targetDelta = e.relativeTarget = e.target = void 0, e.isProjectionDirty = !0;
  }
  function kA(e) {
    e.resolveTargetDelta();
  }
  function _A(e) {
    e.calcProjection();
  }
  function AA(e) {
    e.resetRotation();
  }
  function OA(e) {
    e.removeLeadSnapshot();
  }
  function hh(e, t, n) {
    e.translate = ae(t.translate, 0, n), e.scale = ae(t.scale, 1, n), e.origin = t.origin, e.originPoint = t.originPoint;
  }
  function mh(e, t, n, r) {
    e.min = ae(t.min, n.min, r), e.max = ae(t.max, n.max, r);
  }
  function FA(e, t, n, r) {
    mh(e.x, t.x, n.x, r), mh(e.y, t.y, n.y, r);
  }
  function jA(e) {
    return e.animationValues && e.animationValues.opacityExit !== void 0;
  }
  const DA = {
    duration: 0.45,
    ease: [0.4, 0, 0.1, 1]
  }, yh = (e) => typeof navigator < "u" && navigator.userAgent.toLowerCase().includes(e), gh = yh("applewebkit/") && !yh("chrome/") ? Math.round : fe;
  function vh(e) {
    e.min = gh(e.min), e.max = gh(e.max);
  }
  function MA(e) {
    vh(e.x), vh(e.y);
  }
  function Kv(e, t, n) {
    return e === "position" || e === "preserve-aspect" && !Ru(lh(t), lh(n), 0.2);
  }
  const RA = Gv({
    attachResizeListener: (e, t) => Bt(e, "resize", t),
    measureScroll: () => ({
      x: document.documentElement.scrollLeft || document.body.scrollLeft,
      y: document.documentElement.scrollTop || document.body.scrollTop
    }),
    checkIsScrollRoot: () => !0
  }), Tl = {
    current: void 0
  }, Qv = Gv({
    measureScroll: (e) => ({
      x: e.scrollLeft,
      y: e.scrollTop
    }),
    defaultParent: () => {
      if (!Tl.current) {
        const e = new RA({});
        e.mount(window), e.setOptions({ layoutScroll: !0 }), Tl.current = e;
      }
      return Tl.current;
    },
    resetTransform: (e, t) => {
      e.style.transform = t !== void 0 ? t : "none";
    },
    checkIsScrollRoot: (e) => window.getComputedStyle(e).position === "fixed"
  }), LA = {
    pan: {
      Feature: q2
    },
    drag: {
      Feature: Z2,
      ProjectionNode: Qv,
      MeasureLayout: zv
    }
  }, NA = /var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/;
  function VA(e) {
    const t = NA.exec(e);
    if (!t)
      return [,];
    const [, n, r] = t;
    return [n, r];
  }
  function $u(e, t, n = 1) {
    const [r, i] = VA(e);
    if (!r)
      return;
    const o = window.getComputedStyle(t).getPropertyValue(r);
    if (o) {
      const s = o.trim();
      return jv(s) ? parseFloat(s) : s;
    } else
      return _u(i) ? $u(i, t, n + 1) : i;
  }
  function $A(e, { ...t }, n) {
    const r = e.current;
    if (!(r instanceof Element))
      return { target: t, transitionEnd: n };
    n && (n = { ...n }), e.values.forEach((i) => {
      const o = i.get();
      if (!_u(o))
        return;
      const s = $u(o, r);
      s && i.set(s);
    });
    for (const i in t) {
      const o = t[i];
      if (!_u(o))
        continue;
      const s = $u(o, r);
      s && (t[i] = s, n || (n = {}), n[i] === void 0 && (n[i] = o));
    }
    return { target: t, transitionEnd: n };
  }
  const bA = /* @__PURE__ */ new Set([
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
  ]), Yv = (e) => bA.has(e), IA = (e) => Object.keys(e).some(Yv), xh = (e) => e === dr || e === b, Sh = (e, t) => parseFloat(e.split(", ")[t]), wh = (e, t) => (n, { transform: r }) => {
    if (r === "none" || !r)
      return 0;
    const i = r.match(/^matrix3d\((.+)\)$/);
    if (i)
      return Sh(i[1], t);
    {
      const o = r.match(/^matrix\((.+)\)$/);
      return o ? Sh(o[1], e) : 0;
    }
  }, zA = /* @__PURE__ */ new Set(["x", "y", "z"]), BA = po.filter((e) => !zA.has(e));
  function UA(e) {
    const t = [];
    return BA.forEach((n) => {
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
    x: wh(4, 13),
    y: wh(5, 14)
  };
  Yr.translateX = Yr.x;
  Yr.translateY = Yr.y;
  const HA = (e, t, n) => {
    const r = t.measureViewportBox(), i = t.current, o = getComputedStyle(i), { display: s } = o, a = {};
    s === "none" && t.setStaticValue("display", e.display || "block"), n.forEach((u) => {
      a[u] = Yr[u](r, o);
    }), t.render();
    const l = t.measureViewportBox();
    return n.forEach((u) => {
      const c = t.getValue(u);
      c && c.jump(a[u]), e[u] = Yr[u](l, o);
    }), e;
  }, WA = (e, t, n = {}, r = {}) => {
    t = { ...t }, r = { ...r };
    const i = Object.keys(t).filter(Yv);
    let o = [], s = !1;
    const a = [];
    if (i.forEach((l) => {
      const u = e.getValue(l);
      if (!e.hasValue(l))
        return;
      let c = n[l], f = fi(c);
      const d = t[l];
      let h;
      if (Ms(d)) {
        const g = d.length, v = d[0] === null ? 1 : 0;
        c = d[v], f = fi(c);
        for (let k = v; k < g && d[k] !== null; k++)
          h ? pf(fi(d[k]) === h) : h = fi(d[k]);
      } else
        h = fi(d);
      if (f !== h)
        if (xh(f) && xh(h)) {
          const g = u.get();
          typeof g == "string" && u.set(parseFloat(g)), typeof d == "string" ? t[l] = parseFloat(d) : Array.isArray(d) && h === b && (t[l] = d.map(parseFloat));
        } else
          f != null && f.transform && (h != null && h.transform) && (c === 0 || d === 0) ? c === 0 ? u.set(h.transform(c)) : t[l] = f.transform(d) : (s || (o = UA(e), s = !0), a.push(l), r[l] = r[l] !== void 0 ? r[l] : t[l], u.jump(d));
    }), a.length) {
      const l = a.indexOf("height") >= 0 ? window.pageYOffset : null, u = HA(t, e, a);
      return o.length && o.forEach(([c, f]) => {
        e.getValue(c).set(f);
      }), e.render(), Ta && l !== null && window.scrollTo({ top: l }), { target: u, transitionEnd: r };
    } else
      return { target: t, transitionEnd: r };
  };
  function GA(e, t, n, r) {
    return IA(t) ? WA(e, t, n, r) : { target: t, transitionEnd: r };
  }
  const KA = (e, t, n, r) => {
    const i = $A(e, t, r);
    return t = i.target, r = i.transitionEnd, GA(e, t, n, r);
  }, bu = { current: null }, Xv = { current: !1 };
  function QA() {
    if (Xv.current = !0, !!Ta)
      if (window.matchMedia) {
        const e = window.matchMedia("(prefers-reduced-motion)"), t = () => bu.current = e.matches;
        e.addListener(t), t();
      } else
        bu.current = !1;
  }
  function YA(e, t, n) {
    const { willChange: r } = t;
    for (const i in t) {
      const o = t[i], s = n[i];
      if (Ke(o))
        e.addValue(i, o), Vs(r) && r.add(i);
      else if (Ke(s))
        e.addValue(i, Qr(o, { owner: e })), Vs(r) && r.remove(i);
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
  const Th = /* @__PURE__ */ new WeakMap(), Zv = Object.keys(eo), XA = Zv.length, Eh = [
    "AnimationStart",
    "AnimationComplete",
    "Update",
    "BeforeLayoutMeasure",
    "LayoutMeasure",
    "LayoutAnimationStart",
    "LayoutAnimationComplete"
  ], ZA = nf.length;
  class qA {
    constructor({ parent: t, props: n, presenceContext: r, reducedMotionConfig: i, visualState: o }, s = {}) {
      this.current = null, this.children = /* @__PURE__ */ new Set(), this.isVariantNode = !1, this.isControllingVariants = !1, this.shouldReduceMotion = null, this.values = /* @__PURE__ */ new Map(), this.features = {}, this.valueSubscriptions = /* @__PURE__ */ new Map(), this.prevMotionValues = {}, this.events = {}, this.propEventSubscriptions = {}, this.notifyUpdate = () => this.notify("Update", this.latestValues), this.render = () => {
        this.current && (this.triggerBuild(), this.renderInstance(this.current, this.renderState, this.props.style, this.projection));
      }, this.scheduleRender = () => ee.render(this.render, !1, !0);
      const { latestValues: a, renderState: l } = o;
      this.latestValues = a, this.baseTarget = { ...a }, this.initialValues = n.initial ? { ...a } : {}, this.renderState = l, this.parent = t, this.props = n, this.presenceContext = r, this.depth = t ? t.depth + 1 : 0, this.reducedMotionConfig = i, this.options = s, this.isControllingVariants = Ca(n), this.isVariantNode = Lg(n), this.isVariantNode && (this.variantChildren = /* @__PURE__ */ new Set()), this.manuallyAnimateOnMount = !!(t && t.current);
      const { willChange: u, ...c } = this.scrapeMotionValuesFromProps(n, {});
      for (const f in c) {
        const d = c[f];
        a[f] !== void 0 && Ke(d) && (d.set(a[f], !1), Vs(u) && u.add(f));
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
      this.current = t, Th.set(t, this), this.projection && !this.projection.instance && this.projection.mount(t), this.parent && this.isVariantNode && !this.isControllingVariants && (this.removeFromVariantTree = this.parent.addVariantChild(this)), this.values.forEach((n, r) => this.bindToMotionValue(r, n)), Xv.current || QA(), this.shouldReduceMotion = this.reducedMotionConfig === "never" ? !1 : this.reducedMotionConfig === "always" ? !0 : bu.current, this.parent && this.parent.children.add(this), this.update(this.props, this.presenceContext);
    }
    unmount() {
      Th.delete(this.current), this.projection && this.projection.unmount(), Zt(this.notifyUpdate), Zt(this.render), this.valueSubscriptions.forEach((t) => t()), this.removeFromVariantTree && this.removeFromVariantTree(), this.parent && this.parent.children.delete(this);
      for (const t in this.events)
        this.events[t].clear();
      for (const t in this.features)
        this.features[t].unmount();
      this.current = null;
    }
    bindToMotionValue(t, n) {
      const r = fr.has(t), i = n.on("change", (s) => {
        this.latestValues[t] = s, this.props.onUpdate && ee.update(this.notifyUpdate, !1, !0), r && this.projection && (this.projection.isTransformDirty = !0);
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
      for (let l = 0; l < XA; l++) {
        const u = Zv[l], { isEnabled: c, Feature: f, ProjectionNode: d, MeasureLayout: h } = eo[u];
        d && (s = d), c(n) && (!this.features[u] && f && (this.features[u] = new f(this)), h && (a = h));
      }
      if (!this.projection && s) {
        this.projection = new s(this.latestValues, this.parent && this.parent.projection);
        const { layoutId: l, layout: u, drag: c, dragConstraints: f, layoutScroll: d, layoutRoot: h } = n;
        this.projection.setOptions({
          layoutId: l,
          layout: u,
          alwaysMeasureLayout: !!c || f && Fr(f),
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
          layoutRoot: h
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
      return this.current ? this.measureInstanceViewportBox(this.current, this.props) : he();
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
      for (let r = 0; r < Eh.length; r++) {
        const i = Eh[r];
        this.propEventSubscriptions[i] && (this.propEventSubscriptions[i](), delete this.propEventSubscriptions[i]);
        const o = t["on" + i];
        o && (this.propEventSubscriptions[i] = this.on(i, o));
      }
      this.prevMotionValues = YA(this, this.scrapeMotionValuesFromProps(t, this.prevProps), this.prevMotionValues), this.handleChildMotionValue && this.handleChildMotionValue();
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
      for (let r = 0; r < ZA; r++) {
        const i = nf[r], o = this.props[i];
        (Ji(o) || o === !1) && (n[i] = o);
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
      const { initial: r } = this.props, i = typeof r == "string" || typeof r == "object" ? (n = df(this.props, r)) === null || n === void 0 ? void 0 : n[t] : void 0;
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
  class qv extends qA {
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
      let s = g2(r, t || {}, this);
      if (i && (n && (n = i(n)), r && (r = i(r)), s && (s = i(s))), o) {
        m2(this, r, s);
        const a = KA(this, r, s, n);
        n = a.transitionEnd, r = a.target;
      }
      return {
        transition: t,
        transitionEnd: n,
        ...r
      };
    }
  }
  function JA(e) {
    return window.getComputedStyle(e);
  }
  class eO extends qv {
    readValueFromInstance(t, n) {
      if (fr.has(n)) {
        const r = gf(n);
        return r && r.default || 0;
      } else {
        const r = JA(t), i = (bg(n) ? r.getPropertyValue(n) : r[n]) || 0;
        return typeof i == "string" ? i.trim() : i;
      }
    }
    measureInstanceViewportBox(t, { transformPagePoint: n }) {
      return Iv(t, n);
    }
    build(t, n, r, i) {
      sf(t, n, r, i.transformTemplate);
    }
    scrapeMotionValuesFromProps(t, n) {
      return ff(t, n);
    }
    handleChildMotionValue() {
      this.childSubscription && (this.childSubscription(), delete this.childSubscription);
      const { children: t } = this.props;
      Ke(t) && (this.childSubscription = t.on("change", (n) => {
        this.current && (this.current.textContent = `${n}`);
      }));
    }
    renderInstance(t, n, r, i) {
      Wg(t, n, r, i);
    }
  }
  class tO extends qv {
    constructor() {
      super(...arguments), this.isSVGTag = !1;
    }
    getBaseTargetFromProps(t, n) {
      return t[n];
    }
    readValueFromInstance(t, n) {
      if (fr.has(n)) {
        const r = gf(n);
        return r && r.default || 0;
      }
      return n = Gg.has(n) ? n : cf(n), t.getAttribute(n);
    }
    measureInstanceViewportBox() {
      return he();
    }
    scrapeMotionValuesFromProps(t, n) {
      return Qg(t, n);
    }
    build(t, n, r, i) {
      lf(t, n, r, this.isSVGTag, i.transformTemplate);
    }
    renderInstance(t, n, r, i) {
      Kg(t, n, r, i);
    }
    mount(t) {
      this.isSVGTag = uf(t.tagName), super.mount(t);
    }
  }
  const nO = (e, t) => of(e) ? new tO(t, { enableHardwareAcceleration: !1 }) : new eO(t, { enableHardwareAcceleration: !0 }), rO = {
    layout: {
      ProjectionNode: Qv,
      MeasureLayout: zv
    }
  }, iO = {
    ...j2,
    ...Zk,
    ...LA,
    ...rO
  }, oO = /* @__PURE__ */ sk((e, t) => $k(e, t, iO, nO));
  function Jv() {
    const e = S.useRef(!1);
    return ef(() => (e.current = !0, () => {
      e.current = !1;
    }), []), e;
  }
  function sO() {
    const e = Jv(), [t, n] = S.useState(0), r = S.useCallback(() => {
      e.current && n(t + 1);
    }, [t]);
    return [S.useCallback(() => ee.postRender(r), [r]), t];
  }
  class aO extends S.Component {
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
  function lO({ children: e, isPresent: t }) {
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
    }, [t]), S.createElement(aO, { isPresent: t, childRef: r, sizeRef: i }, S.cloneElement(e, { ref: r }));
  }
  const El = ({ children: e, initial: t, isPresent: n, onExitComplete: r, custom: i, presenceAffectsLayout: o, mode: s }) => {
    const a = Yg(uO), l = S.useId(), u = S.useMemo(
      () => ({
        id: l,
        initial: t,
        isPresent: n,
        custom: i,
        onExitComplete: (c) => {
          a.set(c, !0);
          for (const f of a.values())
            if (!f)
              return;
          r && r();
        },
        register: (c) => (a.set(c, !1), () => a.delete(c))
      }),
      /**
       * If the presence of a child affects the layout of the components around it,
       * we want to make a new context value to ensure they get re-rendered
       * so they can detect that layout change.
       */
      o ? void 0 : [n]
    );
    return S.useMemo(() => {
      a.forEach((c, f) => a.set(f, !1));
    }, [n]), S.useEffect(() => {
      !n && !a.size && r && r();
    }, [n]), s === "popLayout" && (e = S.createElement(lO, { isPresent: n }, e)), S.createElement(wa.Provider, { value: u }, e);
  };
  function uO() {
    return /* @__PURE__ */ new Map();
  }
  function cO(e) {
    return S.useEffect(() => () => e(), []);
  }
  const yr = (e) => e.key || "";
  function fO(e, t) {
    e.forEach((n) => {
      const r = yr(n);
      t.set(r, n);
    });
  }
  function dO(e) {
    const t = [];
    return S.Children.forEach(e, (n) => {
      S.isValidElement(n) && t.push(n);
    }), t;
  }
  const pO = ({ children: e, custom: t, initial: n = !0, onExitComplete: r, exitBeforeEnter: i, presenceAffectsLayout: o = !0, mode: s = "sync" }) => {
    const a = S.useContext(rf).forceRender || sO()[0], l = Jv(), u = dO(e);
    let c = u;
    const f = S.useRef(/* @__PURE__ */ new Map()).current, d = S.useRef(c), h = S.useRef(/* @__PURE__ */ new Map()).current, g = S.useRef(!0);
    if (ef(() => {
      g.current = !1, fO(u, h), d.current = c;
    }), cO(() => {
      g.current = !0, h.clear(), f.clear();
    }), g.current)
      return S.createElement(S.Fragment, null, c.map((p) => S.createElement(El, { key: yr(p), isPresent: !0, initial: n ? void 0 : !1, presenceAffectsLayout: o, mode: s }, p)));
    c = [...c];
    const v = d.current.map(yr), k = u.map(yr), y = v.length;
    for (let p = 0; p < y; p++) {
      const m = v[p];
      k.indexOf(m) === -1 && !f.has(m) && f.set(m, void 0);
    }
    return s === "wait" && f.size && (c = []), f.forEach((p, m) => {
      if (k.indexOf(m) !== -1)
        return;
      const x = h.get(m);
      if (!x)
        return;
      const E = v.indexOf(m);
      let C = p;
      if (!C) {
        const T = () => {
          h.delete(m), f.delete(m);
          const _ = d.current.findIndex((L) => L.key === m);
          if (d.current.splice(_, 1), !f.size) {
            if (d.current = u, l.current === !1)
              return;
            a(), r && r();
          }
        };
        C = S.createElement(El, { key: yr(x), isPresent: !1, onExitComplete: T, custom: t, presenceAffectsLayout: o, mode: s }, x), f.set(m, C);
      }
      c.splice(E, 0, C);
    }), c = c.map((p) => {
      const m = p.key;
      return f.has(m) ? p : S.createElement(El, { key: yr(p), isPresent: !0, presenceAffectsLayout: o, mode: s }, p);
    }), S.createElement(S.Fragment, null, f.size ? c : c.map((p) => S.cloneElement(p)));
  };
  function hO({
    activeStep: e,
    initialValues: t,
    values: n
  }) {
    function r(a) {
      return a = a[0].toUpperCase() + a.slice(1), a.replace(/[A-Z]/g, " $&");
    }
    function i(a, l) {
      const u = {};
      return l === "number" && (u.onKeyDown = (f) => {
        ["e", "E", "+", "-", ".", ","].includes(f.key) && f.preventDefault();
      }), ((a == null ? void 0 : a.tests) || []).forEach((f) => {
        switch (f.OPTIONS.name) {
          case "min":
            u.min = f.OPTIONS.params.min || f.OPTIONS.params.more;
            break;
          case "max":
            u.max = f.OPTIONS.params.max;
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
            NP,
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
          /* @__PURE__ */ F.jsx(UP, { name: a, children: (c) => /* @__PURE__ */ F.jsx("div", { className: "text-red-400", children: c }) })
        ] }, a);
      }) })
    ] });
  }
  function mO() {
    const { isAnimated: e } = S.useContext(Tf), { activeStep: t } = fo(), { initialValues: n, values: r } = uo();
    let i = {};
    return e && (i = {
      initial: { opacity: 0 },
      animate: { opacity: 1 },
      exit: { opacity: 0 }
    }), /* @__PURE__ */ F.jsx(pO, { initial: !1, mode: "wait", children: /* @__PURE__ */ F.jsx(
      oO.div,
      {
        variants: i,
        initial: "initial",
        animate: "animate",
        exit: "exit",
        transition: { type: "tween", duration: 0.25 },
        children: /* @__PURE__ */ F.jsx("div", { className: "py-4 sm:pt-12 lg:pt-20 pb-20 sm:pb-32", children: /* @__PURE__ */ F.jsx("div", { className: "container mx-auto sm:px-0 px-5 max-w-lg min-w-min md:max-w-2xl lg:max-w-4xl", children: t.component || /* @__PURE__ */ F.jsx(
          hO,
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
  var e0 = {
    color: void 0,
    size: void 0,
    className: void 0,
    style: void 0,
    attr: void 0
  }, Ch = Ut.createContext && Ut.createContext(e0), Cn = globalThis && globalThis.__assign || function() {
    return Cn = Object.assign || function(e) {
      for (var t, n = 1, r = arguments.length; n < r; n++) {
        t = arguments[n];
        for (var i in t)
          Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
      }
      return e;
    }, Cn.apply(this, arguments);
  }, yO = globalThis && globalThis.__rest || function(e, t) {
    var n = {};
    for (var r in e)
      Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
    if (e != null && typeof Object.getOwnPropertySymbols == "function")
      for (var i = 0, r = Object.getOwnPropertySymbols(e); i < r.length; i++)
        t.indexOf(r[i]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[i]) && (n[r[i]] = e[r[i]]);
    return n;
  };
  function t0(e) {
    return e && e.map(function(t, n) {
      return Ut.createElement(t.tag, Cn({
        key: n
      }, t.attr), t0(t.child));
    });
  }
  function n0(e) {
    return function(t) {
      return Ut.createElement(gO, Cn({
        attr: Cn({}, e.attr)
      }, t), t0(e.child));
    };
  }
  function gO(e) {
    var t = function(n) {
      var r = e.attr, i = e.size, o = e.title, s = yO(e, ["attr", "size", "title"]), a = i || n.size || "1em", l;
      return n.className && (l = n.className), e.className && (l = (l ? l + " " : "") + e.className), Ut.createElement("svg", Cn({
        stroke: "currentColor",
        fill: "currentColor",
        strokeWidth: "0"
      }, n.attr, r, s, {
        className: l,
        style: Cn(Cn({
          color: e.color || n.color
        }, n.style), e.style),
        height: a,
        width: a,
        xmlns: "http://www.w3.org/2000/svg"
      }), o && Ut.createElement("title", null, o), e.children);
    };
    return Ch !== void 0 ? Ut.createElement(Ch.Consumer, null, function(n) {
      return t(n);
    }) : t(e0);
  }
  function vO(e) {
    return n0({ tag: "svg", attr: { fill: "currentColor", viewBox: "0 0 16 16" }, child: [{ tag: "path", attr: { fillRule: "evenodd", d: "M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z" } }] })(e);
  }
  function xO(e) {
    return n0({ tag: "svg", attr: { fill: "currentColor", viewBox: "0 0 16 16" }, child: [{ tag: "path", attr: { fillRule: "evenodd", d: "M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z" } }] })(e);
  }
  var r0 = {}, Xr = {};
  Object.defineProperty(Xr, "__esModule", { value: !0 });
  Xr.cssValue = Xr.parseLengthAndUnit = void 0;
  var SO = {
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
  function i0(e) {
    if (typeof e == "number")
      return {
        value: e,
        unit: "px"
      };
    var t, n = (e.match(/^[0-9.]*/) || "").toString();
    n.includes(".") ? t = parseFloat(n) : t = parseInt(n, 10);
    var r = (e.match(/[^0-9]*$/) || "").toString();
    return SO[r] ? {
      value: t,
      unit: r
    } : (console.warn("React Spinners: ".concat(e, " is not a valid css value. Defaulting to ").concat(t, "px.")), {
      value: t,
      unit: "px"
    });
  }
  Xr.parseLengthAndUnit = i0;
  function wO(e) {
    var t = i0(e);
    return "".concat(t.value).concat(t.unit);
  }
  Xr.cssValue = wO;
  var Aa = {};
  Object.defineProperty(Aa, "__esModule", { value: !0 });
  Aa.createAnimation = void 0;
  var TO = function(e, t, n) {
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
  Aa.createAnimation = TO;
  var bs = Mt && Mt.__assign || function() {
    return bs = Object.assign || function(e) {
      for (var t, n = 1, r = arguments.length; n < r; n++) {
        t = arguments[n];
        for (var i in t)
          Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
      }
      return e;
    }, bs.apply(this, arguments);
  }, EO = Mt && Mt.__createBinding || (Object.create ? function(e, t, n, r) {
    r === void 0 && (r = n);
    var i = Object.getOwnPropertyDescriptor(t, n);
    (!i || ("get" in i ? !t.__esModule : i.writable || i.configurable)) && (i = { enumerable: !0, get: function() {
      return t[n];
    } }), Object.defineProperty(e, r, i);
  } : function(e, t, n, r) {
    r === void 0 && (r = n), e[r] = t[n];
  }), CO = Mt && Mt.__setModuleDefault || (Object.create ? function(e, t) {
    Object.defineProperty(e, "default", { enumerable: !0, value: t });
  } : function(e, t) {
    e.default = t;
  }), PO = Mt && Mt.__importStar || function(e) {
    if (e && e.__esModule)
      return e;
    var t = {};
    if (e != null)
      for (var n in e)
        n !== "default" && Object.prototype.hasOwnProperty.call(e, n) && EO(t, e, n);
    return CO(t, e), t;
  }, kO = Mt && Mt.__rest || function(e, t) {
    var n = {};
    for (var r in e)
      Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
    if (e != null && typeof Object.getOwnPropertySymbols == "function")
      for (var i = 0, r = Object.getOwnPropertySymbols(e); i < r.length; i++)
        t.indexOf(r[i]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[i]) && (n[r[i]] = e[r[i]]);
    return n;
  };
  Object.defineProperty(r0, "__esModule", { value: !0 });
  var _O = PO(S), Ph = Xr, AO = Aa, OO = (0, AO.createAnimation)("ClipLoader", "0% {transform: rotate(0deg) scale(1)} 50% {transform: rotate(180deg) scale(0.8)} 100% {transform: rotate(360deg) scale(1)}", "clip");
  function FO(e) {
    var t = e.loading, n = t === void 0 ? !0 : t, r = e.color, i = r === void 0 ? "#000000" : r, o = e.speedMultiplier, s = o === void 0 ? 1 : o, a = e.cssOverride, l = a === void 0 ? {} : a, u = e.size, c = u === void 0 ? 35 : u, f = kO(e, ["loading", "color", "speedMultiplier", "cssOverride", "size"]), d = bs({ background: "transparent !important", width: (0, Ph.cssValue)(c), height: (0, Ph.cssValue)(c), borderRadius: "100%", border: "2px solid", borderTopColor: i, borderBottomColor: "transparent", borderLeftColor: i, borderRightColor: i, display: "inline-block", animation: "".concat(OO, " ").concat(0.75 / s, "s 0s infinite linear"), animationFillMode: "both" }, l);
    return n ? _O.createElement("span", bs({ style: d }, f)) : null;
  }
  var jO = r0.default = FO;
  function DO() {
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
    } = fo();
    const { isValid: a, submitForm: l } = uo();
    return o = n || o || s && !a, /* @__PURE__ */ F.jsx("div", { className: "navigation", children: /* @__PURE__ */ F.jsxs("div", { className: "navigation-wrapper " + (r ? "justify-end" : "justify-between"), children: [
      !r && /* @__PURE__ */ F.jsxs(
        "button",
        {
          onClick: e,
          disabled: t,
          type: "button",
          children: [
            /* @__PURE__ */ F.jsx(vO, { className: "w-8 h-8 fill-current" }),
            /* @__PURE__ */ F.jsx("span", { children: "Previous" })
          ]
        }
      ),
      !i && // Still possible to trigger submit even though button is disabled.
      // Main reason is to display validation errors.
      /* @__PURE__ */ F.jsx("div", { onClick: o ? l : void 0, children: /* @__PURE__ */ F.jsxs(
        "button",
        {
          type: "submit",
          disabled: o,
          children: [
            n && /* @__PURE__ */ F.jsx("span", { className: "mr-1 loading", children: /* @__PURE__ */ F.jsx(jO, { size: 11, color: "#757575" }) }),
            /* @__PURE__ */ F.jsx("span", { children: "Next" }),
            /* @__PURE__ */ F.jsx(xO, { className: "w-8 h-8 fill-current" })
          ]
        }
      ) })
    ] }) });
  }
  function MO() {
    const { isAnimated: e, setIsAnimated: t } = S.useContext(Tf), { stepNumber: n, totalSteps: r } = fo(), i = `${(n - 1) / (r - 1) * 100}%`, o = "/react-formik-step-wizard";
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
          /* @__PURE__ */ F.jsx("a", { href: "https://github.com/kennyhei/react-formik-step-wizard", target: "_blank", children: /* @__PURE__ */ F.jsx("img", { src: `${o}/github-mark-white.svg`, className: "rounded-md w-9 my-0" }) })
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
  function RO() {
    const [e, t] = S.useState(!0);
    return /* @__PURE__ */ F.jsx(Tf.Provider, { value: { isAnimated: e, setIsAnimated: t }, children: /* @__PURE__ */ F.jsx(
      KP,
      {
        enableHash: !0,
        steps: ZP,
        onStepChanged: (n, r, i) => {
          console.log("step changed", n.id, r.id, i);
        },
        header: /* @__PURE__ */ F.jsx(MO, {}),
        wrapper: /* @__PURE__ */ F.jsx(mO, {}),
        footer: /* @__PURE__ */ F.jsx(DO, {})
      }
    ) });
  }
  Cl.createRoot(document.getElementById("root")).render(
    /* @__PURE__ */ F.jsx(RO, {})
  );
});
export default LO();
