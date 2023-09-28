var d0 = (e, t) => () => (t || e((t = { exports: {} }).exports, t), t.exports);
var MO = d0((Ze, qe) => {
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
  var Dt = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
  function $s(e) {
    return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
  }
  var Pp = { exports: {} }, bs = {}, kp = { exports: {} }, B = {};
  /**
   * @license React
   * react.production.min.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */
  var to = Symbol.for("react.element"), h0 = Symbol.for("react.portal"), p0 = Symbol.for("react.fragment"), m0 = Symbol.for("react.strict_mode"), y0 = Symbol.for("react.profiler"), g0 = Symbol.for("react.provider"), v0 = Symbol.for("react.context"), x0 = Symbol.for("react.forward_ref"), w0 = Symbol.for("react.suspense"), S0 = Symbol.for("react.memo"), T0 = Symbol.for("react.lazy"), Ef = Symbol.iterator;
  function E0(e) {
    return e === null || typeof e != "object" ? null : (e = Ef && e[Ef] || e["@@iterator"], typeof e == "function" ? e : null);
  }
  var _p = { isMounted: function() {
    return !1;
  }, enqueueForceUpdate: function() {
  }, enqueueReplaceState: function() {
  }, enqueueSetState: function() {
  } }, Ap = Object.assign, Op = {};
  function Xr(e, t, n) {
    this.props = e, this.context = t, this.refs = Op, this.updater = n || _p;
  }
  Xr.prototype.isReactComponent = {};
  Xr.prototype.setState = function(e, t) {
    if (typeof e != "object" && typeof e != "function" && e != null)
      throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
    this.updater.enqueueSetState(this, e, t, "setState");
  };
  Xr.prototype.forceUpdate = function(e) {
    this.updater.enqueueForceUpdate(this, e, "forceUpdate");
  };
  function Fp() {
  }
  Fp.prototype = Xr.prototype;
  function bu(e, t, n) {
    this.props = e, this.context = t, this.refs = Op, this.updater = n || _p;
  }
  var Iu = bu.prototype = new Fp();
  Iu.constructor = bu;
  Ap(Iu, Xr.prototype);
  Iu.isPureReactComponent = !0;
  var Cf = Array.isArray, jp = Object.prototype.hasOwnProperty, zu = { current: null }, Dp = { key: !0, ref: !0, __self: !0, __source: !0 };
  function Mp(e, t, n) {
    var r, i = {}, o = null, s = null;
    if (t != null)
      for (r in t.ref !== void 0 && (s = t.ref), t.key !== void 0 && (o = "" + t.key), t)
        jp.call(t, r) && !Dp.hasOwnProperty(r) && (i[r] = t[r]);
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
  function C0(e, t) {
    return { $$typeof: to, type: e.type, key: t, ref: e.ref, props: e.props, _owner: e._owner };
  }
  function Bu(e) {
    return typeof e == "object" && e !== null && e.$$typeof === to;
  }
  function P0(e) {
    var t = { "=": "=0", ":": "=2" };
    return "$" + e.replace(/[=:]/g, function(n) {
      return t[n];
    });
  }
  var Pf = /\/+/g;
  function ja(e, t) {
    return typeof e == "object" && e !== null && e.key != null ? P0("" + e.key) : t.toString(36);
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
            case h0:
              s = !0;
          }
      }
    if (s)
      return s = e, i = i(s), e = r === "" ? "." + ja(s, 0) : r, Cf(i) ? (n = "", e != null && (n = e.replace(Pf, "$&/") + "/"), Io(i, t, n, "", function(u) {
        return u;
      })) : i != null && (Bu(i) && (i = C0(i, n + (!i.key || s && s.key === i.key ? "" : ("" + i.key).replace(Pf, "$&/") + "/") + e)), t.push(i)), 1;
    if (s = 0, r = r === "" ? "." : r + ":", Cf(e))
      for (var a = 0; a < e.length; a++) {
        o = e[a];
        var l = r + ja(o, a);
        s += Io(o, t, n, l, i);
      }
    else if (l = E0(e), typeof l == "function")
      for (e = l.call(e), a = 0; !(o = e.next()).done; )
        o = o.value, l = r + ja(o, a++), s += Io(o, t, n, l, i);
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
  function k0(e) {
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
  var be = { current: null }, zo = { transition: null }, _0 = { ReactCurrentDispatcher: be, ReactCurrentBatchConfig: zo, ReactCurrentOwner: zu };
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
  B.Component = Xr;
  B.Fragment = p0;
  B.Profiler = y0;
  B.PureComponent = bu;
  B.StrictMode = m0;
  B.Suspense = w0;
  B.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = _0;
  B.cloneElement = function(e, t, n) {
    if (e == null)
      throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + e + ".");
    var r = Ap({}, e.props), i = e.key, o = e.ref, s = e._owner;
    if (t != null) {
      if (t.ref !== void 0 && (o = t.ref, s = zu.current), t.key !== void 0 && (i = "" + t.key), e.type && e.type.defaultProps)
        var a = e.type.defaultProps;
      for (l in t)
        jp.call(t, l) && !Dp.hasOwnProperty(l) && (r[l] = t[l] === void 0 && a !== void 0 ? a[l] : t[l]);
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
    return e = { $$typeof: v0, _currentValue: e, _currentValue2: e, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, e.Provider = { $$typeof: g0, _context: e }, e.Consumer = e;
  };
  B.createElement = Mp;
  B.createFactory = function(e) {
    var t = Mp.bind(null, e);
    return t.type = e, t;
  };
  B.createRef = function() {
    return { current: null };
  };
  B.forwardRef = function(e) {
    return { $$typeof: x0, render: e };
  };
  B.isValidElement = Bu;
  B.lazy = function(e) {
    return { $$typeof: T0, _payload: { _status: -1, _result: e }, _init: k0 };
  };
  B.memo = function(e, t) {
    return { $$typeof: S0, type: e, compare: t === void 0 ? null : t };
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
  kp.exports = B;
  var w = kp.exports;
  const Bt = /* @__PURE__ */ $s(w);
  /**
   * @license React
   * react-jsx-runtime.production.min.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */
  var A0 = w, O0 = Symbol.for("react.element"), F0 = Symbol.for("react.fragment"), j0 = Object.prototype.hasOwnProperty, D0 = A0.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, M0 = { key: !0, ref: !0, __self: !0, __source: !0 };
  function Rp(e, t, n) {
    var r, i = {}, o = null, s = null;
    n !== void 0 && (o = "" + n), t.key !== void 0 && (o = "" + t.key), t.ref !== void 0 && (s = t.ref);
    for (r in t)
      j0.call(t, r) && !M0.hasOwnProperty(r) && (i[r] = t[r]);
    if (e && e.defaultProps)
      for (r in t = e.defaultProps, t)
        i[r] === void 0 && (i[r] = t[r]);
    return { $$typeof: O0, type: e, key: o, ref: s, props: i, _owner: D0.current };
  }
  bs.Fragment = F0;
  bs.jsx = Rp;
  bs.jsxs = Rp;
  Pp.exports = bs;
  var F = Pp.exports, El = {}, Np = { exports: {} }, nt = {}, Lp = { exports: {} }, Vp = {};
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
    function t(j, $) {
      var I = j.length;
      j.push($);
      e:
        for (; 0 < I; ) {
          var k = I - 1 >>> 1, R = j[k];
          if (0 < i(R, $))
            j[k] = $, j[I] = R, I = k;
          else
            break e;
        }
    }
    function n(j) {
      return j.length === 0 ? null : j[0];
    }
    function r(j) {
      if (j.length === 0)
        return null;
      var $ = j[0], I = j.pop();
      if (I !== $) {
        j[0] = I;
        e:
          for (var k = 0, R = j.length, H = R >>> 1; k < H; ) {
            var J = 2 * (k + 1) - 1, ke = j[J], me = J + 1, ot = j[me];
            if (0 > i(ke, I))
              me < R && 0 > i(ot, ke) ? (j[k] = ot, j[me] = I, k = me) : (j[k] = ke, j[J] = I, k = J);
            else if (me < R && 0 > i(ot, I))
              j[k] = ot, j[me] = I, k = me;
            else
              break e;
          }
      }
      return $;
    }
    function i(j, $) {
      var I = j.sortIndex - $.sortIndex;
      return I !== 0 ? I : j.id - $.id;
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
    var l = [], u = [], c = 1, f = null, d = 3, p = !1, g = !1, v = !1, P = typeof setTimeout == "function" ? setTimeout : null, y = typeof clearTimeout == "function" ? clearTimeout : null, h = typeof setImmediate < "u" ? setImmediate : null;
    typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
    function m(j) {
      for (var $ = n(u); $ !== null; ) {
        if ($.callback === null)
          r(u);
        else if ($.startTime <= j)
          r(u), $.sortIndex = $.expirationTime, t(l, $);
        else
          break;
        $ = n(u);
      }
    }
    function x(j) {
      if (v = !1, m(j), !g)
        if (n(l) !== null)
          g = !0, je(E);
        else {
          var $ = n(u);
          $ !== null && ze(x, $.startTime - j);
        }
    }
    function E(j, $) {
      g = !1, v && (v = !1, y(_), _ = -1), p = !0;
      var I = d;
      try {
        for (m($), f = n(l); f !== null && (!(f.expirationTime > $) || j && !U()); ) {
          var k = f.callback;
          if (typeof k == "function") {
            f.callback = null, d = f.priorityLevel;
            var R = k(f.expirationTime <= $);
            $ = e.unstable_now(), typeof R == "function" ? f.callback = R : f === n(l) && r(l), m($);
          } else
            r(l);
          f = n(l);
        }
        if (f !== null)
          var H = !0;
        else {
          var J = n(u);
          J !== null && ze(x, J.startTime - $), H = !1;
        }
        return H;
      } finally {
        f = null, d = I, p = !1;
      }
    }
    var C = !1, T = null, _ = -1, L = 5, O = -1;
    function U() {
      return !(e.unstable_now() - O < L);
    }
    function pe() {
      if (T !== null) {
        var j = e.unstable_now();
        O = j;
        var $ = !0;
        try {
          $ = T(!0, j);
        } finally {
          $ ? G() : (C = !1, T = null);
        }
      } else
        C = !1;
    }
    var G;
    if (typeof h == "function")
      G = function() {
        h(pe);
      };
    else if (typeof MessageChannel < "u") {
      var K = new MessageChannel(), q = K.port2;
      K.port1.onmessage = pe, G = function() {
        q.postMessage(null);
      };
    } else
      G = function() {
        P(pe, 0);
      };
    function je(j) {
      T = j, C || (C = !0, G());
    }
    function ze(j, $) {
      _ = P(function() {
        j(e.unstable_now());
      }, $);
    }
    e.unstable_IdlePriority = 5, e.unstable_ImmediatePriority = 1, e.unstable_LowPriority = 4, e.unstable_NormalPriority = 3, e.unstable_Profiling = null, e.unstable_UserBlockingPriority = 2, e.unstable_cancelCallback = function(j) {
      j.callback = null;
    }, e.unstable_continueExecution = function() {
      g || p || (g = !0, je(E));
    }, e.unstable_forceFrameRate = function(j) {
      0 > j || 125 < j ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : L = 0 < j ? Math.floor(1e3 / j) : 5;
    }, e.unstable_getCurrentPriorityLevel = function() {
      return d;
    }, e.unstable_getFirstCallbackNode = function() {
      return n(l);
    }, e.unstable_next = function(j) {
      switch (d) {
        case 1:
        case 2:
        case 3:
          var $ = 3;
          break;
        default:
          $ = d;
      }
      var I = d;
      d = $;
      try {
        return j();
      } finally {
        d = I;
      }
    }, e.unstable_pauseExecution = function() {
    }, e.unstable_requestPaint = function() {
    }, e.unstable_runWithPriority = function(j, $) {
      switch (j) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          j = 3;
      }
      var I = d;
      d = j;
      try {
        return $();
      } finally {
        d = I;
      }
    }, e.unstable_scheduleCallback = function(j, $, I) {
      var k = e.unstable_now();
      switch (typeof I == "object" && I !== null ? (I = I.delay, I = typeof I == "number" && 0 < I ? k + I : k) : I = k, j) {
        case 1:
          var R = -1;
          break;
        case 2:
          R = 250;
          break;
        case 5:
          R = 1073741823;
          break;
        case 4:
          R = 1e4;
          break;
        default:
          R = 5e3;
      }
      return R = I + R, j = { id: c++, callback: $, priorityLevel: j, startTime: I, expirationTime: R, sortIndex: -1 }, I > k ? (j.sortIndex = I, t(u, j), n(l) === null && j === n(u) && (v ? (y(_), _ = -1) : v = !0, ze(x, I - k))) : (j.sortIndex = R, t(l, j), g || p || (g = !0, je(E))), j;
    }, e.unstable_shouldYield = U, e.unstable_wrapCallback = function(j) {
      var $ = d;
      return function() {
        var I = d;
        d = $;
        try {
          return j.apply(this, arguments);
        } finally {
          d = I;
        }
      };
    };
  })(Vp);
  Lp.exports = Vp;
  var R0 = Lp.exports;
  /**
   * @license React
   * react-dom.production.min.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */
  var $p = w, et = R0;
  function A(e) {
    for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++)
      t += "&args[]=" + encodeURIComponent(arguments[n]);
    return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  var bp = /* @__PURE__ */ new Set(), Di = {};
  function tr(e, t) {
    br(e, t), br(e + "Capture", t);
  }
  function br(e, t) {
    for (Di[e] = t, e = 0; e < t.length; e++)
      bp.add(t[e]);
  }
  var Gt = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), Cl = Object.prototype.hasOwnProperty, N0 = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, kf = {}, _f = {};
  function L0(e) {
    return Cl.call(_f, e) ? !0 : Cl.call(kf, e) ? !1 : N0.test(e) ? _f[e] = !0 : (kf[e] = !0, !1);
  }
  function V0(e, t, n, r) {
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
  function $0(e, t, n, r) {
    if (t === null || typeof t > "u" || V0(e, t, n, r))
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
  function Ie(e, t, n, r, i, o, s) {
    this.acceptsBooleans = t === 2 || t === 3 || t === 4, this.attributeName = r, this.attributeNamespace = i, this.mustUseProperty = n, this.propertyName = e, this.type = t, this.sanitizeURL = o, this.removeEmptyString = s;
  }
  var Fe = {};
  "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e) {
    Fe[e] = new Ie(e, 0, !1, e, null, !1, !1);
  });
  [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(e) {
    var t = e[0];
    Fe[t] = new Ie(t, 1, !1, e[1], null, !1, !1);
  });
  ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
    Fe[e] = new Ie(e, 2, !1, e.toLowerCase(), null, !1, !1);
  });
  ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) {
    Fe[e] = new Ie(e, 2, !1, e, null, !1, !1);
  });
  "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e) {
    Fe[e] = new Ie(e, 3, !1, e.toLowerCase(), null, !1, !1);
  });
  ["checked", "multiple", "muted", "selected"].forEach(function(e) {
    Fe[e] = new Ie(e, 3, !0, e, null, !1, !1);
  });
  ["capture", "download"].forEach(function(e) {
    Fe[e] = new Ie(e, 4, !1, e, null, !1, !1);
  });
  ["cols", "rows", "size", "span"].forEach(function(e) {
    Fe[e] = new Ie(e, 6, !1, e, null, !1, !1);
  });
  ["rowSpan", "start"].forEach(function(e) {
    Fe[e] = new Ie(e, 5, !1, e.toLowerCase(), null, !1, !1);
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
    Fe[t] = new Ie(t, 1, !1, e, null, !1, !1);
  });
  "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e) {
    var t = e.replace(Uu, Hu);
    Fe[t] = new Ie(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
  });
  ["xml:base", "xml:lang", "xml:space"].forEach(function(e) {
    var t = e.replace(Uu, Hu);
    Fe[t] = new Ie(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
  });
  ["tabIndex", "crossOrigin"].forEach(function(e) {
    Fe[e] = new Ie(e, 1, !1, e.toLowerCase(), null, !1, !1);
  });
  Fe.xlinkHref = new Ie("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1);
  ["src", "href", "action", "formAction"].forEach(function(e) {
    Fe[e] = new Ie(e, 1, !1, e.toLowerCase(), null, !0, !0);
  });
  function Wu(e, t, n, r) {
    var i = Fe.hasOwnProperty(t) ? Fe[t] : null;
    (i !== null ? i.type !== 0 : r || !(2 < t.length) || t[0] !== "o" && t[0] !== "O" || t[1] !== "n" && t[1] !== "N") && ($0(t, n, i, r) && (n = null), r || i === null ? L0(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n)) : i.mustUseProperty ? e[i.propertyName] = n === null ? i.type === 3 ? !1 : "" : n : (t = i.attributeName, r = i.attributeNamespace, n === null ? e.removeAttribute(t) : (i = i.type, n = i === 3 || i === 4 && n === !0 ? "" : "" + n, r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
  }
  var Zt = $p.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, vo = Symbol.for("react.element"), mr = Symbol.for("react.portal"), yr = Symbol.for("react.fragment"), Gu = Symbol.for("react.strict_mode"), Pl = Symbol.for("react.profiler"), Ip = Symbol.for("react.provider"), zp = Symbol.for("react.context"), Ku = Symbol.for("react.forward_ref"), kl = Symbol.for("react.suspense"), _l = Symbol.for("react.suspense_list"), Qu = Symbol.for("react.memo"), nn = Symbol.for("react.lazy"), Bp = Symbol.for("react.offscreen"), Af = Symbol.iterator;
  function ti(e) {
    return e === null || typeof e != "object" ? null : (e = Af && e[Af] || e["@@iterator"], typeof e == "function" ? e : null);
  }
  var fe = Object.assign, Da;
  function di(e) {
    if (Da === void 0)
      try {
        throw Error();
      } catch (n) {
        var t = n.stack.trim().match(/\n( *(at )?)/);
        Da = t && t[1] || "";
      }
    return `
` + Da + e;
  }
  var Ma = !1;
  function Ra(e, t) {
    if (!e || Ma)
      return "";
    Ma = !0;
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
      Ma = !1, Error.prepareStackTrace = n;
    }
    return (e = e ? e.displayName || e.name : "") ? di(e) : "";
  }
  function b0(e) {
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
        return e = Ra(e.type, !1), e;
      case 11:
        return e = Ra(e.type.render, !1), e;
      case 1:
        return e = Ra(e.type, !0), e;
      default:
        return "";
    }
  }
  function Al(e) {
    if (e == null)
      return null;
    if (typeof e == "function")
      return e.displayName || e.name || null;
    if (typeof e == "string")
      return e;
    switch (e) {
      case yr:
        return "Fragment";
      case mr:
        return "Portal";
      case Pl:
        return "Profiler";
      case Gu:
        return "StrictMode";
      case kl:
        return "Suspense";
      case _l:
        return "SuspenseList";
    }
    if (typeof e == "object")
      switch (e.$$typeof) {
        case zp:
          return (e.displayName || "Context") + ".Consumer";
        case Ip:
          return (e._context.displayName || "Context") + ".Provider";
        case Ku:
          var t = e.render;
          return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
        case Qu:
          return t = e.displayName || null, t !== null ? t : Al(e.type) || "Memo";
        case nn:
          t = e._payload, e = e._init;
          try {
            return Al(e(t));
          } catch {
          }
      }
    return null;
  }
  function I0(e) {
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
        return Al(t);
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
  function En(e) {
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
  function Up(e) {
    var t = e.type;
    return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
  }
  function z0(e) {
    var t = Up(e) ? "checked" : "value", n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t), r = "" + e[t];
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
    e._valueTracker || (e._valueTracker = z0(e));
  }
  function Hp(e) {
    if (!e)
      return !1;
    var t = e._valueTracker;
    if (!t)
      return !0;
    var n = t.getValue(), r = "";
    return e && (r = Up(e) ? e.checked ? "true" : "false" : e.value), e = r, e !== n ? (t.setValue(e), !0) : !1;
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
  function Ol(e, t) {
    var n = t.checked;
    return fe({}, t, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: n ?? e._wrapperState.initialChecked });
  }
  function Of(e, t) {
    var n = t.defaultValue == null ? "" : t.defaultValue, r = t.checked != null ? t.checked : t.defaultChecked;
    n = En(t.value != null ? t.value : n), e._wrapperState = { initialChecked: r, initialValue: n, controlled: t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null };
  }
  function Wp(e, t) {
    t = t.checked, t != null && Wu(e, "checked", t, !1);
  }
  function Fl(e, t) {
    Wp(e, t);
    var n = En(t.value), r = t.type;
    if (n != null)
      r === "number" ? (n === 0 && e.value === "" || e.value != n) && (e.value = "" + n) : e.value !== "" + n && (e.value = "" + n);
    else if (r === "submit" || r === "reset") {
      e.removeAttribute("value");
      return;
    }
    t.hasOwnProperty("value") ? jl(e, t.type, n) : t.hasOwnProperty("defaultValue") && jl(e, t.type, En(t.defaultValue)), t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked);
  }
  function Ff(e, t, n) {
    if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
      var r = t.type;
      if (!(r !== "submit" && r !== "reset" || t.value !== void 0 && t.value !== null))
        return;
      t = "" + e._wrapperState.initialValue, n || t === e.value || (e.value = t), e.defaultValue = t;
    }
    n = e.name, n !== "" && (e.name = ""), e.defaultChecked = !!e._wrapperState.initialChecked, n !== "" && (e.name = n);
  }
  function jl(e, t, n) {
    (t !== "number" || ns(e.ownerDocument) !== e) && (n == null ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
  }
  var hi = Array.isArray;
  function Dr(e, t, n, r) {
    if (e = e.options, t) {
      t = {};
      for (var i = 0; i < n.length; i++)
        t["$" + n[i]] = !0;
      for (n = 0; n < e.length; n++)
        i = t.hasOwnProperty("$" + e[n].value), e[n].selected !== i && (e[n].selected = i), i && r && (e[n].defaultSelected = !0);
    } else {
      for (n = "" + En(n), t = null, i = 0; i < e.length; i++) {
        if (e[i].value === n) {
          e[i].selected = !0, r && (e[i].defaultSelected = !0);
          return;
        }
        t !== null || e[i].disabled || (t = e[i]);
      }
      t !== null && (t.selected = !0);
    }
  }
  function Dl(e, t) {
    if (t.dangerouslySetInnerHTML != null)
      throw Error(A(91));
    return fe({}, t, { value: void 0, defaultValue: void 0, children: "" + e._wrapperState.initialValue });
  }
  function jf(e, t) {
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
    e._wrapperState = { initialValue: En(n) };
  }
  function Gp(e, t) {
    var n = En(t.value), r = En(t.defaultValue);
    n != null && (n = "" + n, n !== e.value && (e.value = n), t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)), r != null && (e.defaultValue = "" + r);
  }
  function Df(e) {
    var t = e.textContent;
    t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
  }
  function Kp(e) {
    switch (e) {
      case "svg":
        return "http://www.w3.org/2000/svg";
      case "math":
        return "http://www.w3.org/1998/Math/MathML";
      default:
        return "http://www.w3.org/1999/xhtml";
    }
  }
  function Ml(e, t) {
    return e == null || e === "http://www.w3.org/1999/xhtml" ? Kp(t) : e === "http://www.w3.org/2000/svg" && t === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e;
  }
  var wo, Qp = function(e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, n, r, i) {
      MSApp.execUnsafeLocalFunction(function() {
        return e(t, n, r, i);
      });
    } : e;
  }(function(e, t) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e)
      e.innerHTML = t;
    else {
      for (wo = wo || document.createElement("div"), wo.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>", t = wo.firstChild; e.firstChild; )
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
  }, B0 = ["Webkit", "ms", "Moz", "O"];
  Object.keys(gi).forEach(function(e) {
    B0.forEach(function(t) {
      t = t + e.charAt(0).toUpperCase() + e.substring(1), gi[t] = gi[e];
    });
  });
  function Yp(e, t, n) {
    return t == null || typeof t == "boolean" || t === "" ? "" : n || typeof t != "number" || t === 0 || gi.hasOwnProperty(e) && gi[e] ? ("" + t).trim() : t + "px";
  }
  function Xp(e, t) {
    e = e.style;
    for (var n in t)
      if (t.hasOwnProperty(n)) {
        var r = n.indexOf("--") === 0, i = Yp(n, t[n], r);
        n === "float" && (n = "cssFloat"), r ? e.setProperty(n, i) : e[n] = i;
      }
  }
  var U0 = fe({ menuitem: !0 }, { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 });
  function Rl(e, t) {
    if (t) {
      if (U0[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
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
  var Ll = null;
  function Yu(e) {
    return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
  }
  var Vl = null, Mr = null, Rr = null;
  function Mf(e) {
    if (e = io(e)) {
      if (typeof Vl != "function")
        throw Error(A(280));
      var t = e.stateNode;
      t && (t = Hs(t), Vl(e.stateNode, e.type, t));
    }
  }
  function Zp(e) {
    Mr ? Rr ? Rr.push(e) : Rr = [e] : Mr = e;
  }
  function qp() {
    if (Mr) {
      var e = Mr, t = Rr;
      if (Rr = Mr = null, Mf(e), t)
        for (e = 0; e < t.length; e++)
          Mf(t[e]);
    }
  }
  function Jp(e, t) {
    return e(t);
  }
  function em() {
  }
  var Na = !1;
  function tm(e, t, n) {
    if (Na)
      return e(t, n);
    Na = !0;
    try {
      return Jp(e, t, n);
    } finally {
      Na = !1, (Mr !== null || Rr !== null) && (em(), qp());
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
  var $l = !1;
  if (Gt)
    try {
      var ni = {};
      Object.defineProperty(ni, "passive", { get: function() {
        $l = !0;
      } }), window.addEventListener("test", ni, ni), window.removeEventListener("test", ni, ni);
    } catch {
      $l = !1;
    }
  function H0(e, t, n, r, i, o, s, a, l) {
    var u = Array.prototype.slice.call(arguments, 3);
    try {
      t.apply(n, u);
    } catch (c) {
      this.onError(c);
    }
  }
  var vi = !1, rs = null, is = !1, bl = null, W0 = { onError: function(e) {
    vi = !0, rs = e;
  } };
  function G0(e, t, n, r, i, o, s, a, l) {
    vi = !1, rs = null, H0.apply(W0, arguments);
  }
  function K0(e, t, n, r, i, o, s, a, l) {
    if (G0.apply(this, arguments), vi) {
      if (vi) {
        var u = rs;
        vi = !1, rs = null;
      } else
        throw Error(A(198));
      is || (is = !0, bl = u);
    }
  }
  function nr(e) {
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
  function nm(e) {
    if (e.tag === 13) {
      var t = e.memoizedState;
      if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null)
        return t.dehydrated;
    }
    return null;
  }
  function Rf(e) {
    if (nr(e) !== e)
      throw Error(A(188));
  }
  function Q0(e) {
    var t = e.alternate;
    if (!t) {
      if (t = nr(e), t === null)
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
            return Rf(i), e;
          if (o === r)
            return Rf(i), t;
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
  function rm(e) {
    return e = Q0(e), e !== null ? im(e) : null;
  }
  function im(e) {
    if (e.tag === 5 || e.tag === 6)
      return e;
    for (e = e.child; e !== null; ) {
      var t = im(e);
      if (t !== null)
        return t;
      e = e.sibling;
    }
    return null;
  }
  var om = et.unstable_scheduleCallback, Nf = et.unstable_cancelCallback, Y0 = et.unstable_shouldYield, X0 = et.unstable_requestPaint, ye = et.unstable_now, Z0 = et.unstable_getCurrentPriorityLevel, Xu = et.unstable_ImmediatePriority, sm = et.unstable_UserBlockingPriority, os = et.unstable_NormalPriority, q0 = et.unstable_LowPriority, am = et.unstable_IdlePriority, Is = null, At = null;
  function J0(e) {
    if (At && typeof At.onCommitFiberRoot == "function")
      try {
        At.onCommitFiberRoot(Is, e, void 0, (e.current.flags & 128) === 128);
      } catch {
      }
  }
  var wt = Math.clz32 ? Math.clz32 : n1, e1 = Math.log, t1 = Math.LN2;
  function n1(e) {
    return e >>>= 0, e === 0 ? 32 : 31 - (e1(e) / t1 | 0) | 0;
  }
  var So = 64, To = 4194304;
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
  function r1(e, t) {
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
  function i1(e, t) {
    for (var n = e.suspendedLanes, r = e.pingedLanes, i = e.expirationTimes, o = e.pendingLanes; 0 < o; ) {
      var s = 31 - wt(o), a = 1 << s, l = i[s];
      l === -1 ? (!(a & n) || a & r) && (i[s] = r1(a, t)) : l <= t && (e.expiredLanes |= a), o &= ~a;
    }
  }
  function Il(e) {
    return e = e.pendingLanes & -1073741825, e !== 0 ? e : e & 1073741824 ? 1073741824 : 0;
  }
  function lm() {
    var e = So;
    return So <<= 1, !(So & 4194240) && (So = 64), e;
  }
  function La(e) {
    for (var t = [], n = 0; 31 > n; n++)
      t.push(e);
    return t;
  }
  function no(e, t, n) {
    e.pendingLanes |= t, t !== 536870912 && (e.suspendedLanes = 0, e.pingedLanes = 0), e = e.eventTimes, t = 31 - wt(t), e[t] = n;
  }
  function o1(e, t) {
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
  function um(e) {
    return e &= -e, 1 < e ? 4 < e ? e & 268435455 ? 16 : 536870912 : 4 : 1;
  }
  var cm, qu, fm, dm, hm, zl = !1, Eo = [], dn = null, hn = null, pn = null, Ni = /* @__PURE__ */ new Map(), Li = /* @__PURE__ */ new Map(), an = [], s1 = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
  function Lf(e, t) {
    switch (e) {
      case "focusin":
      case "focusout":
        dn = null;
        break;
      case "dragenter":
      case "dragleave":
        hn = null;
        break;
      case "mouseover":
      case "mouseout":
        pn = null;
        break;
      case "pointerover":
      case "pointerout":
        Ni.delete(t.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        Li.delete(t.pointerId);
    }
  }
  function ri(e, t, n, r, i, o) {
    return e === null || e.nativeEvent !== o ? (e = { blockedOn: t, domEventName: n, eventSystemFlags: r, nativeEvent: o, targetContainers: [i] }, t !== null && (t = io(t), t !== null && qu(t)), e) : (e.eventSystemFlags |= r, t = e.targetContainers, i !== null && t.indexOf(i) === -1 && t.push(i), e);
  }
  function a1(e, t, n, r, i) {
    switch (t) {
      case "focusin":
        return dn = ri(dn, e, t, n, r, i), !0;
      case "dragenter":
        return hn = ri(hn, e, t, n, r, i), !0;
      case "mouseover":
        return pn = ri(pn, e, t, n, r, i), !0;
      case "pointerover":
        var o = i.pointerId;
        return Ni.set(o, ri(Ni.get(o) || null, e, t, n, r, i)), !0;
      case "gotpointercapture":
        return o = i.pointerId, Li.set(o, ri(Li.get(o) || null, e, t, n, r, i)), !0;
    }
    return !1;
  }
  function pm(e) {
    var t = zn(e.target);
    if (t !== null) {
      var n = nr(t);
      if (n !== null) {
        if (t = n.tag, t === 13) {
          if (t = nm(n), t !== null) {
            e.blockedOn = t, hm(e.priority, function() {
              fm(n);
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
      var n = Bl(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
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
  function Vf(e, t, n) {
    Bo(e) && n.delete(t);
  }
  function l1() {
    zl = !1, dn !== null && Bo(dn) && (dn = null), hn !== null && Bo(hn) && (hn = null), pn !== null && Bo(pn) && (pn = null), Ni.forEach(Vf), Li.forEach(Vf);
  }
  function ii(e, t) {
    e.blockedOn === t && (e.blockedOn = null, zl || (zl = !0, et.unstable_scheduleCallback(et.unstable_NormalPriority, l1)));
  }
  function Vi(e) {
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
    for (dn !== null && ii(dn, e), hn !== null && ii(hn, e), pn !== null && ii(pn, e), Ni.forEach(t), Li.forEach(t), n = 0; n < an.length; n++)
      r = an[n], r.blockedOn === e && (r.blockedOn = null);
    for (; 0 < an.length && (n = an[0], n.blockedOn === null); )
      pm(n), n.blockedOn === null && an.shift();
  }
  var Nr = Zt.ReactCurrentBatchConfig, as = !0;
  function u1(e, t, n, r) {
    var i = X, o = Nr.transition;
    Nr.transition = null;
    try {
      X = 1, Ju(e, t, n, r);
    } finally {
      X = i, Nr.transition = o;
    }
  }
  function c1(e, t, n, r) {
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
      var i = Bl(e, t, n, r);
      if (i === null)
        Ga(e, t, r, ls, n), Lf(e, r);
      else if (a1(i, e, t, n, r))
        r.stopPropagation();
      else if (Lf(e, r), t & 4 && -1 < s1.indexOf(e)) {
        for (; i !== null; ) {
          var o = io(i);
          if (o !== null && cm(o), o = Bl(e, t, n, r), o === null && Ga(e, t, r, ls, n), o === i)
            break;
          i = o;
        }
        i !== null && r.stopPropagation();
      } else
        Ga(e, t, r, null, n);
    }
  }
  var ls = null;
  function Bl(e, t, n, r) {
    if (ls = null, e = Yu(r), e = zn(e), e !== null)
      if (t = nr(e), t === null)
        e = null;
      else if (n = t.tag, n === 13) {
        if (e = nm(t), e !== null)
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
  function mm(e) {
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
        switch (Z0()) {
          case Xu:
            return 1;
          case sm:
            return 4;
          case os:
          case q0:
            return 16;
          case am:
            return 536870912;
          default:
            return 16;
        }
      default:
        return 16;
    }
  }
  var un = null, ec = null, Uo = null;
  function ym() {
    if (Uo)
      return Uo;
    var e, t = ec, n = t.length, r, i = "value" in un ? un.value : un.textContent, o = i.length;
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
  function $f() {
    return !1;
  }
  function rt(e) {
    function t(n, r, i, o, s) {
      this._reactName = n, this._targetInst = i, this.type = r, this.nativeEvent = o, this.target = s, this.currentTarget = null;
      for (var a in e)
        e.hasOwnProperty(a) && (n = e[a], this[a] = n ? n(o) : o[a]);
      return this.isDefaultPrevented = (o.defaultPrevented != null ? o.defaultPrevented : o.returnValue === !1) ? Co : $f, this.isPropagationStopped = $f, this;
    }
    return fe(t.prototype, { preventDefault: function() {
      this.defaultPrevented = !0;
      var n = this.nativeEvent;
      n && (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = !1), this.isDefaultPrevented = Co);
    }, stopPropagation: function() {
      var n = this.nativeEvent;
      n && (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0), this.isPropagationStopped = Co);
    }, persist: function() {
    }, isPersistent: Co }), t;
  }
  var Zr = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(e) {
    return e.timeStamp || Date.now();
  }, defaultPrevented: 0, isTrusted: 0 }, tc = rt(Zr), ro = fe({}, Zr, { view: 0, detail: 0 }), f1 = rt(ro), Va, $a, oi, zs = fe({}, ro, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: nc, button: 0, buttons: 0, relatedTarget: function(e) {
    return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
  }, movementX: function(e) {
    return "movementX" in e ? e.movementX : (e !== oi && (oi && e.type === "mousemove" ? (Va = e.screenX - oi.screenX, $a = e.screenY - oi.screenY) : $a = Va = 0, oi = e), Va);
  }, movementY: function(e) {
    return "movementY" in e ? e.movementY : $a;
  } }), bf = rt(zs), d1 = fe({}, zs, { dataTransfer: 0 }), h1 = rt(d1), p1 = fe({}, ro, { relatedTarget: 0 }), ba = rt(p1), m1 = fe({}, Zr, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), y1 = rt(m1), g1 = fe({}, Zr, { clipboardData: function(e) {
    return "clipboardData" in e ? e.clipboardData : window.clipboardData;
  } }), v1 = rt(g1), x1 = fe({}, Zr, { data: 0 }), If = rt(x1), w1 = {
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
  }, S1 = {
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
  }, T1 = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
  function E1(e) {
    var t = this.nativeEvent;
    return t.getModifierState ? t.getModifierState(e) : (e = T1[e]) ? !!t[e] : !1;
  }
  function nc() {
    return E1;
  }
  var C1 = fe({}, ro, { key: function(e) {
    if (e.key) {
      var t = w1[e.key] || e.key;
      if (t !== "Unidentified")
        return t;
    }
    return e.type === "keypress" ? (e = Ho(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? S1[e.keyCode] || "Unidentified" : "";
  }, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: nc, charCode: function(e) {
    return e.type === "keypress" ? Ho(e) : 0;
  }, keyCode: function(e) {
    return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
  }, which: function(e) {
    return e.type === "keypress" ? Ho(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
  } }), P1 = rt(C1), k1 = fe({}, zs, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), zf = rt(k1), _1 = fe({}, ro, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: nc }), A1 = rt(_1), O1 = fe({}, Zr, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), F1 = rt(O1), j1 = fe({}, zs, {
    deltaX: function(e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function(e) {
      return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), D1 = rt(j1), M1 = [9, 13, 27, 32], rc = Gt && "CompositionEvent" in window, xi = null;
  Gt && "documentMode" in document && (xi = document.documentMode);
  var R1 = Gt && "TextEvent" in window && !xi, gm = Gt && (!rc || xi && 8 < xi && 11 >= xi), Bf = String.fromCharCode(32), Uf = !1;
  function vm(e, t) {
    switch (e) {
      case "keyup":
        return M1.indexOf(t.keyCode) !== -1;
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
  function xm(e) {
    return e = e.detail, typeof e == "object" && "data" in e ? e.data : null;
  }
  var gr = !1;
  function N1(e, t) {
    switch (e) {
      case "compositionend":
        return xm(t);
      case "keypress":
        return t.which !== 32 ? null : (Uf = !0, Bf);
      case "textInput":
        return e = t.data, e === Bf && Uf ? null : e;
      default:
        return null;
    }
  }
  function L1(e, t) {
    if (gr)
      return e === "compositionend" || !rc && vm(e, t) ? (e = ym(), Uo = ec = un = null, gr = !1, e) : null;
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
        return gm && t.locale !== "ko" ? null : t.data;
      default:
        return null;
    }
  }
  var V1 = { color: !0, date: !0, datetime: !0, "datetime-local": !0, email: !0, month: !0, number: !0, password: !0, range: !0, search: !0, tel: !0, text: !0, time: !0, url: !0, week: !0 };
  function Hf(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t === "input" ? !!V1[e.type] : t === "textarea";
  }
  function wm(e, t, n, r) {
    Zp(r), t = us(t, "onChange"), 0 < t.length && (n = new tc("onChange", "change", null, n, r), e.push({ event: n, listeners: t }));
  }
  var wi = null, $i = null;
  function $1(e) {
    jm(e, 0);
  }
  function Bs(e) {
    var t = wr(e);
    if (Hp(t))
      return e;
  }
  function b1(e, t) {
    if (e === "change")
      return t;
  }
  var Sm = !1;
  if (Gt) {
    var Ia;
    if (Gt) {
      var za = "oninput" in document;
      if (!za) {
        var Wf = document.createElement("div");
        Wf.setAttribute("oninput", "return;"), za = typeof Wf.oninput == "function";
      }
      Ia = za;
    } else
      Ia = !1;
    Sm = Ia && (!document.documentMode || 9 < document.documentMode);
  }
  function Gf() {
    wi && (wi.detachEvent("onpropertychange", Tm), $i = wi = null);
  }
  function Tm(e) {
    if (e.propertyName === "value" && Bs($i)) {
      var t = [];
      wm(t, $i, e, Yu(e)), tm($1, t);
    }
  }
  function I1(e, t, n) {
    e === "focusin" ? (Gf(), wi = t, $i = n, wi.attachEvent("onpropertychange", Tm)) : e === "focusout" && Gf();
  }
  function z1(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown")
      return Bs($i);
  }
  function B1(e, t) {
    if (e === "click")
      return Bs(t);
  }
  function U1(e, t) {
    if (e === "input" || e === "change")
      return Bs(t);
  }
  function H1(e, t) {
    return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
  }
  var Tt = typeof Object.is == "function" ? Object.is : H1;
  function bi(e, t) {
    if (Tt(e, t))
      return !0;
    if (typeof e != "object" || e === null || typeof t != "object" || t === null)
      return !1;
    var n = Object.keys(e), r = Object.keys(t);
    if (n.length !== r.length)
      return !1;
    for (r = 0; r < n.length; r++) {
      var i = n[r];
      if (!Cl.call(t, i) || !Tt(e[i], t[i]))
        return !1;
    }
    return !0;
  }
  function Kf(e) {
    for (; e && e.firstChild; )
      e = e.firstChild;
    return e;
  }
  function Qf(e, t) {
    var n = Kf(e);
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
      n = Kf(n);
    }
  }
  function Em(e, t) {
    return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? Em(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1;
  }
  function Cm() {
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
  function W1(e) {
    var t = Cm(), n = e.focusedElem, r = e.selectionRange;
    if (t !== n && n && n.ownerDocument && Em(n.ownerDocument.documentElement, n)) {
      if (r !== null && ic(n)) {
        if (t = r.start, e = r.end, e === void 0 && (e = t), "selectionStart" in n)
          n.selectionStart = t, n.selectionEnd = Math.min(e, n.value.length);
        else if (e = (t = n.ownerDocument || document) && t.defaultView || window, e.getSelection) {
          e = e.getSelection();
          var i = n.textContent.length, o = Math.min(r.start, i);
          r = r.end === void 0 ? o : Math.min(r.end, i), !e.extend && o > r && (i = r, r = o, o = i), i = Qf(n, o);
          var s = Qf(
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
  var G1 = Gt && "documentMode" in document && 11 >= document.documentMode, vr = null, Ul = null, Si = null, Hl = !1;
  function Yf(e, t, n) {
    var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
    Hl || vr == null || vr !== ns(r) || (r = vr, "selectionStart" in r && ic(r) ? r = { start: r.selectionStart, end: r.selectionEnd } : (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection(), r = { anchorNode: r.anchorNode, anchorOffset: r.anchorOffset, focusNode: r.focusNode, focusOffset: r.focusOffset }), Si && bi(Si, r) || (Si = r, r = us(Ul, "onSelect"), 0 < r.length && (t = new tc("onSelect", "select", null, t, n), e.push({ event: t, listeners: r }), t.target = vr)));
  }
  function Po(e, t) {
    var n = {};
    return n[e.toLowerCase()] = t.toLowerCase(), n["Webkit" + e] = "webkit" + t, n["Moz" + e] = "moz" + t, n;
  }
  var xr = { animationend: Po("Animation", "AnimationEnd"), animationiteration: Po("Animation", "AnimationIteration"), animationstart: Po("Animation", "AnimationStart"), transitionend: Po("Transition", "TransitionEnd") }, Ba = {}, Pm = {};
  Gt && (Pm = document.createElement("div").style, "AnimationEvent" in window || (delete xr.animationend.animation, delete xr.animationiteration.animation, delete xr.animationstart.animation), "TransitionEvent" in window || delete xr.transitionend.transition);
  function Us(e) {
    if (Ba[e])
      return Ba[e];
    if (!xr[e])
      return e;
    var t = xr[e], n;
    for (n in t)
      if (t.hasOwnProperty(n) && n in Pm)
        return Ba[e] = t[n];
    return e;
  }
  var km = Us("animationend"), _m = Us("animationiteration"), Am = Us("animationstart"), Om = Us("transitionend"), Fm = /* @__PURE__ */ new Map(), Xf = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
  function An(e, t) {
    Fm.set(e, t), tr(t, [e]);
  }
  for (var Ua = 0; Ua < Xf.length; Ua++) {
    var Ha = Xf[Ua], K1 = Ha.toLowerCase(), Q1 = Ha[0].toUpperCase() + Ha.slice(1);
    An(K1, "on" + Q1);
  }
  An(km, "onAnimationEnd");
  An(_m, "onAnimationIteration");
  An(Am, "onAnimationStart");
  An("dblclick", "onDoubleClick");
  An("focusin", "onFocus");
  An("focusout", "onBlur");
  An(Om, "onTransitionEnd");
  br("onMouseEnter", ["mouseout", "mouseover"]);
  br("onMouseLeave", ["mouseout", "mouseover"]);
  br("onPointerEnter", ["pointerout", "pointerover"]);
  br("onPointerLeave", ["pointerout", "pointerover"]);
  tr("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
  tr("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
  tr("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
  tr("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
  tr("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
  tr("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
  var mi = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), Y1 = new Set("cancel close invalid load scroll toggle".split(" ").concat(mi));
  function Zf(e, t, n) {
    var r = e.type || "unknown-event";
    e.currentTarget = n, K0(r, t, void 0, e), e.currentTarget = null;
  }
  function jm(e, t) {
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
            Zf(i, a, u), o = l;
          }
        else
          for (s = 0; s < r.length; s++) {
            if (a = r[s], l = a.instance, u = a.currentTarget, a = a.listener, l !== o && i.isPropagationStopped())
              break e;
            Zf(i, a, u), o = l;
          }
      }
    }
    if (is)
      throw e = bl, is = !1, bl = null, e;
  }
  function re(e, t) {
    var n = t[Yl];
    n === void 0 && (n = t[Yl] = /* @__PURE__ */ new Set());
    var r = e + "__bubble";
    n.has(r) || (Dm(t, e, 2, !1), n.add(r));
  }
  function Wa(e, t, n) {
    var r = 0;
    t && (r |= 4), Dm(n, e, r, t);
  }
  var ko = "_reactListening" + Math.random().toString(36).slice(2);
  function Ii(e) {
    if (!e[ko]) {
      e[ko] = !0, bp.forEach(function(n) {
        n !== "selectionchange" && (Y1.has(n) || Wa(n, !1, e), Wa(n, !0, e));
      });
      var t = e.nodeType === 9 ? e : e.ownerDocument;
      t === null || t[ko] || (t[ko] = !0, Wa("selectionchange", !1, t));
    }
  }
  function Dm(e, t, n, r) {
    switch (mm(t)) {
      case 1:
        var i = u1;
        break;
      case 4:
        i = c1;
        break;
      default:
        i = Ju;
    }
    n = i.bind(null, t, n, e), i = void 0, !$l || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (i = !0), r ? i !== void 0 ? e.addEventListener(t, n, { capture: !0, passive: i }) : e.addEventListener(t, n, !0) : i !== void 0 ? e.addEventListener(t, n, { passive: i }) : e.addEventListener(t, n, !1);
  }
  function Ga(e, t, n, r, i) {
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
              if (s = zn(a), s === null)
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
    tm(function() {
      var u = o, c = Yu(n), f = [];
      e: {
        var d = Fm.get(e);
        if (d !== void 0) {
          var p = tc, g = e;
          switch (e) {
            case "keypress":
              if (Ho(n) === 0)
                break e;
            case "keydown":
            case "keyup":
              p = P1;
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
              p = bf;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              p = h1;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              p = A1;
              break;
            case km:
            case _m:
            case Am:
              p = y1;
              break;
            case Om:
              p = F1;
              break;
            case "scroll":
              p = f1;
              break;
            case "wheel":
              p = D1;
              break;
            case "copy":
            case "cut":
            case "paste":
              p = v1;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              p = zf;
          }
          var v = (t & 4) !== 0, P = !v && e === "scroll", y = v ? d !== null ? d + "Capture" : null : d;
          v = [];
          for (var h = u, m; h !== null; ) {
            m = h;
            var x = m.stateNode;
            if (m.tag === 5 && x !== null && (m = x, y !== null && (x = Ri(h, y), x != null && v.push(zi(h, x, m)))), P)
              break;
            h = h.return;
          }
          0 < v.length && (d = new p(d, g, null, n, c), f.push({ event: d, listeners: v }));
        }
      }
      if (!(t & 7)) {
        e: {
          if (d = e === "mouseover" || e === "pointerover", p = e === "mouseout" || e === "pointerout", d && n !== Ll && (g = n.relatedTarget || n.fromElement) && (zn(g) || g[Kt]))
            break e;
          if ((p || d) && (d = c.window === c ? c : (d = c.ownerDocument) ? d.defaultView || d.parentWindow : window, p ? (g = n.relatedTarget || n.toElement, p = u, g = g ? zn(g) : null, g !== null && (P = nr(g), g !== P || g.tag !== 5 && g.tag !== 6) && (g = null)) : (p = null, g = u), p !== g)) {
            if (v = bf, x = "onMouseLeave", y = "onMouseEnter", h = "mouse", (e === "pointerout" || e === "pointerover") && (v = zf, x = "onPointerLeave", y = "onPointerEnter", h = "pointer"), P = p == null ? d : wr(p), m = g == null ? d : wr(g), d = new v(x, h + "leave", p, n, c), d.target = P, d.relatedTarget = m, x = null, zn(c) === u && (v = new v(y, h + "enter", g, n, c), v.target = m, v.relatedTarget = P, x = v), P = x, p && g)
              t: {
                for (v = p, y = g, h = 0, m = v; m; m = dr(m))
                  h++;
                for (m = 0, x = y; x; x = dr(x))
                  m++;
                for (; 0 < h - m; )
                  v = dr(v), h--;
                for (; 0 < m - h; )
                  y = dr(y), m--;
                for (; h--; ) {
                  if (v === y || y !== null && v === y.alternate)
                    break t;
                  v = dr(v), y = dr(y);
                }
                v = null;
              }
            else
              v = null;
            p !== null && qf(f, d, p, v, !1), g !== null && P !== null && qf(f, P, g, v, !0);
          }
        }
        e: {
          if (d = u ? wr(u) : window, p = d.nodeName && d.nodeName.toLowerCase(), p === "select" || p === "input" && d.type === "file")
            var E = b1;
          else if (Hf(d))
            if (Sm)
              E = U1;
            else {
              E = z1;
              var C = I1;
            }
          else
            (p = d.nodeName) && p.toLowerCase() === "input" && (d.type === "checkbox" || d.type === "radio") && (E = B1);
          if (E && (E = E(e, u))) {
            wm(f, E, n, c);
            break e;
          }
          C && C(e, d, u), e === "focusout" && (C = d._wrapperState) && C.controlled && d.type === "number" && jl(d, "number", d.value);
        }
        switch (C = u ? wr(u) : window, e) {
          case "focusin":
            (Hf(C) || C.contentEditable === "true") && (vr = C, Ul = u, Si = null);
            break;
          case "focusout":
            Si = Ul = vr = null;
            break;
          case "mousedown":
            Hl = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            Hl = !1, Yf(f, n, c);
            break;
          case "selectionchange":
            if (G1)
              break;
          case "keydown":
          case "keyup":
            Yf(f, n, c);
        }
        var T;
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
          gr ? vm(e, n) && (_ = "onCompositionEnd") : e === "keydown" && n.keyCode === 229 && (_ = "onCompositionStart");
        _ && (gm && n.locale !== "ko" && (gr || _ !== "onCompositionStart" ? _ === "onCompositionEnd" && gr && (T = ym()) : (un = c, ec = "value" in un ? un.value : un.textContent, gr = !0)), C = us(u, _), 0 < C.length && (_ = new If(_, e, null, n, c), f.push({ event: _, listeners: C }), T ? _.data = T : (T = xm(n), T !== null && (_.data = T)))), (T = R1 ? N1(e, n) : L1(e, n)) && (u = us(u, "onBeforeInput"), 0 < u.length && (c = new If("onBeforeInput", "beforeinput", null, n, c), f.push({ event: c, listeners: u }), c.data = T));
      }
      jm(f, t);
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
  function dr(e) {
    if (e === null)
      return null;
    do
      e = e.return;
    while (e && e.tag !== 5);
    return e || null;
  }
  function qf(e, t, n, r, i) {
    for (var o = t._reactName, s = []; n !== null && n !== r; ) {
      var a = n, l = a.alternate, u = a.stateNode;
      if (l !== null && l === r)
        break;
      a.tag === 5 && u !== null && (a = u, i ? (l = Ri(n, o), l != null && s.unshift(zi(n, l, a))) : i || (l = Ri(n, o), l != null && s.push(zi(n, l, a)))), n = n.return;
    }
    s.length !== 0 && e.push({ event: t, listeners: s });
  }
  var X1 = /\r\n?/g, Z1 = /\u0000|\uFFFD/g;
  function Jf(e) {
    return (typeof e == "string" ? e : "" + e).replace(X1, `
`).replace(Z1, "");
  }
  function _o(e, t, n) {
    if (t = Jf(t), Jf(e) !== t && n)
      throw Error(A(425));
  }
  function cs() {
  }
  var Wl = null, Gl = null;
  function Kl(e, t) {
    return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
  }
  var Ql = typeof setTimeout == "function" ? setTimeout : void 0, q1 = typeof clearTimeout == "function" ? clearTimeout : void 0, ed = typeof Promise == "function" ? Promise : void 0, J1 = typeof queueMicrotask == "function" ? queueMicrotask : typeof ed < "u" ? function(e) {
    return ed.resolve(null).then(e).catch(ex);
  } : Ql;
  function ex(e) {
    setTimeout(function() {
      throw e;
    });
  }
  function Ka(e, t) {
    var n = t, r = 0;
    do {
      var i = n.nextSibling;
      if (e.removeChild(n), i && i.nodeType === 8)
        if (n = i.data, n === "/$") {
          if (r === 0) {
            e.removeChild(i), Vi(t);
            return;
          }
          r--;
        } else
          n !== "$" && n !== "$?" && n !== "$!" || r++;
      n = i;
    } while (n);
    Vi(t);
  }
  function mn(e) {
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
  function td(e) {
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
  var qr = Math.random().toString(36).slice(2), _t = "__reactFiber$" + qr, Bi = "__reactProps$" + qr, Kt = "__reactContainer$" + qr, Yl = "__reactEvents$" + qr, tx = "__reactListeners$" + qr, nx = "__reactHandles$" + qr;
  function zn(e) {
    var t = e[_t];
    if (t)
      return t;
    for (var n = e.parentNode; n; ) {
      if (t = n[Kt] || n[_t]) {
        if (n = t.alternate, t.child !== null || n !== null && n.child !== null)
          for (e = td(e); e !== null; ) {
            if (n = e[_t])
              return n;
            e = td(e);
          }
        return t;
      }
      e = n, n = e.parentNode;
    }
    return null;
  }
  function io(e) {
    return e = e[_t] || e[Kt], !e || e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3 ? null : e;
  }
  function wr(e) {
    if (e.tag === 5 || e.tag === 6)
      return e.stateNode;
    throw Error(A(33));
  }
  function Hs(e) {
    return e[Bi] || null;
  }
  var Xl = [], Sr = -1;
  function On(e) {
    return { current: e };
  }
  function oe(e) {
    0 > Sr || (e.current = Xl[Sr], Xl[Sr] = null, Sr--);
  }
  function te(e, t) {
    Sr++, Xl[Sr] = e.current, e.current = t;
  }
  var Cn = {}, Ne = On(Cn), He = On(!1), Qn = Cn;
  function Ir(e, t) {
    var n = e.type.contextTypes;
    if (!n)
      return Cn;
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
    oe(He), oe(Ne);
  }
  function nd(e, t, n) {
    if (Ne.current !== Cn)
      throw Error(A(168));
    te(Ne, t), te(He, n);
  }
  function Mm(e, t, n) {
    var r = e.stateNode;
    if (t = t.childContextTypes, typeof r.getChildContext != "function")
      return n;
    r = r.getChildContext();
    for (var i in r)
      if (!(i in t))
        throw Error(A(108, I0(e) || "Unknown", i));
    return fe({}, n, r);
  }
  function ds(e) {
    return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || Cn, Qn = Ne.current, te(Ne, e), te(He, He.current), !0;
  }
  function rd(e, t, n) {
    var r = e.stateNode;
    if (!r)
      throw Error(A(169));
    n ? (e = Mm(e, t, Qn), r.__reactInternalMemoizedMergedChildContext = e, oe(He), oe(Ne), te(Ne, e)) : oe(He), te(He, n);
  }
  var Vt = null, Ws = !1, Qa = !1;
  function Rm(e) {
    Vt === null ? Vt = [e] : Vt.push(e);
  }
  function rx(e) {
    Ws = !0, Rm(e);
  }
  function Fn() {
    if (!Qa && Vt !== null) {
      Qa = !0;
      var e = 0, t = X;
      try {
        var n = Vt;
        for (X = 1; e < n.length; e++) {
          var r = n[e];
          do
            r = r(!0);
          while (r !== null);
        }
        Vt = null, Ws = !1;
      } catch (i) {
        throw Vt !== null && (Vt = Vt.slice(e + 1)), om(Xu, Fn), i;
      } finally {
        X = t, Qa = !1;
      }
    }
    return null;
  }
  var Tr = [], Er = 0, hs = null, ps = 0, lt = [], ut = 0, Yn = null, $t = 1, bt = "";
  function Ln(e, t) {
    Tr[Er++] = ps, Tr[Er++] = hs, hs = e, ps = t;
  }
  function Nm(e, t, n) {
    lt[ut++] = $t, lt[ut++] = bt, lt[ut++] = Yn, Yn = e;
    var r = $t;
    e = bt;
    var i = 32 - wt(r) - 1;
    r &= ~(1 << i), n += 1;
    var o = 32 - wt(t) + i;
    if (30 < o) {
      var s = i - i % 5;
      o = (r & (1 << s) - 1).toString(32), r >>= s, i -= s, $t = 1 << 32 - wt(t) + i | n << i | r, bt = o + e;
    } else
      $t = 1 << o | n << i | r, bt = e;
  }
  function oc(e) {
    e.return !== null && (Ln(e, 1), Nm(e, 1, 0));
  }
  function sc(e) {
    for (; e === hs; )
      hs = Tr[--Er], Tr[Er] = null, ps = Tr[--Er], Tr[Er] = null;
    for (; e === Yn; )
      Yn = lt[--ut], lt[ut] = null, bt = lt[--ut], lt[ut] = null, $t = lt[--ut], lt[ut] = null;
  }
  var Je = null, Xe = null, ae = !1, xt = null;
  function Lm(e, t) {
    var n = ct(5, null, null, 0);
    n.elementType = "DELETED", n.stateNode = t, n.return = e, t = e.deletions, t === null ? (e.deletions = [n], e.flags |= 16) : t.push(n);
  }
  function id(e, t) {
    switch (e.tag) {
      case 5:
        var n = e.type;
        return t = t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t, t !== null ? (e.stateNode = t, Je = e, Xe = mn(t.firstChild), !0) : !1;
      case 6:
        return t = e.pendingProps === "" || t.nodeType !== 3 ? null : t, t !== null ? (e.stateNode = t, Je = e, Xe = null, !0) : !1;
      case 13:
        return t = t.nodeType !== 8 ? null : t, t !== null ? (n = Yn !== null ? { id: $t, overflow: bt } : null, e.memoizedState = { dehydrated: t, treeContext: n, retryLane: 1073741824 }, n = ct(18, null, null, 0), n.stateNode = t, n.return = e, e.child = n, Je = e, Xe = null, !0) : !1;
      default:
        return !1;
    }
  }
  function Zl(e) {
    return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
  }
  function ql(e) {
    if (ae) {
      var t = Xe;
      if (t) {
        var n = t;
        if (!id(e, t)) {
          if (Zl(e))
            throw Error(A(418));
          t = mn(n.nextSibling);
          var r = Je;
          t && id(e, t) ? Lm(r, n) : (e.flags = e.flags & -4097 | 2, ae = !1, Je = e);
        }
      } else {
        if (Zl(e))
          throw Error(A(418));
        e.flags = e.flags & -4097 | 2, ae = !1, Je = e;
      }
    }
  }
  function od(e) {
    for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
      e = e.return;
    Je = e;
  }
  function Ao(e) {
    if (e !== Je)
      return !1;
    if (!ae)
      return od(e), ae = !0, !1;
    var t;
    if ((t = e.tag !== 3) && !(t = e.tag !== 5) && (t = e.type, t = t !== "head" && t !== "body" && !Kl(e.type, e.memoizedProps)), t && (t = Xe)) {
      if (Zl(e))
        throw Vm(), Error(A(418));
      for (; t; )
        Lm(e, t), t = mn(t.nextSibling);
    }
    if (od(e), e.tag === 13) {
      if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e)
        throw Error(A(317));
      e: {
        for (e = e.nextSibling, t = 0; e; ) {
          if (e.nodeType === 8) {
            var n = e.data;
            if (n === "/$") {
              if (t === 0) {
                Xe = mn(e.nextSibling);
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
      Xe = Je ? mn(e.stateNode.nextSibling) : null;
    return !0;
  }
  function Vm() {
    for (var e = Xe; e; )
      e = mn(e.nextSibling);
  }
  function zr() {
    Xe = Je = null, ae = !1;
  }
  function ac(e) {
    xt === null ? xt = [e] : xt.push(e);
  }
  var ix = Zt.ReactCurrentBatchConfig;
  function gt(e, t) {
    if (e && e.defaultProps) {
      t = fe({}, t), e = e.defaultProps;
      for (var n in e)
        t[n] === void 0 && (t[n] = e[n]);
      return t;
    }
    return t;
  }
  var ms = On(null), ys = null, Cr = null, lc = null;
  function uc() {
    lc = Cr = ys = null;
  }
  function cc(e) {
    var t = ms.current;
    oe(ms), e._currentValue = t;
  }
  function Jl(e, t, n) {
    for (; e !== null; ) {
      var r = e.alternate;
      if ((e.childLanes & t) !== t ? (e.childLanes |= t, r !== null && (r.childLanes |= t)) : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t), e === n)
        break;
      e = e.return;
    }
  }
  function Lr(e, t) {
    ys = e, lc = Cr = null, e = e.dependencies, e !== null && e.firstContext !== null && (e.lanes & t && (Ue = !0), e.firstContext = null);
  }
  function dt(e) {
    var t = e._currentValue;
    if (lc !== e)
      if (e = { context: e, memoizedValue: t, next: null }, Cr === null) {
        if (ys === null)
          throw Error(A(308));
        Cr = e, ys.dependencies = { lanes: 0, firstContext: e };
      } else
        Cr = Cr.next = e;
    return t;
  }
  var Bn = null;
  function fc(e) {
    Bn === null ? Bn = [e] : Bn.push(e);
  }
  function $m(e, t, n, r) {
    var i = t.interleaved;
    return i === null ? (n.next = n, fc(t)) : (n.next = i.next, i.next = n), t.interleaved = n, Qt(e, r);
  }
  function Qt(e, t) {
    e.lanes |= t;
    var n = e.alternate;
    for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; )
      e.childLanes |= t, n = e.alternate, n !== null && (n.childLanes |= t), n = e, e = e.return;
    return n.tag === 3 ? n.stateNode : null;
  }
  var rn = !1;
  function dc(e) {
    e.updateQueue = { baseState: e.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
  }
  function bm(e, t) {
    e = e.updateQueue, t.updateQueue === e && (t.updateQueue = { baseState: e.baseState, firstBaseUpdate: e.firstBaseUpdate, lastBaseUpdate: e.lastBaseUpdate, shared: e.shared, effects: e.effects });
  }
  function Ut(e, t) {
    return { eventTime: e, lane: t, tag: 0, payload: null, callback: null, next: null };
  }
  function yn(e, t, n) {
    var r = e.updateQueue;
    if (r === null)
      return null;
    if (r = r.shared, W & 2) {
      var i = r.pending;
      return i === null ? t.next = t : (t.next = i.next, i.next = t), r.pending = t, Qt(e, n);
    }
    return i = r.interleaved, i === null ? (t.next = t, fc(r)) : (t.next = i.next, i.next = t), r.interleaved = t, Qt(e, n);
  }
  function Wo(e, t, n) {
    if (t = t.updateQueue, t !== null && (t = t.shared, (n & 4194240) !== 0)) {
      var r = t.lanes;
      r &= e.pendingLanes, n |= r, t.lanes = n, Zu(e, n);
    }
  }
  function sd(e, t) {
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
    rn = !1;
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
        var d = a.lane, p = a.eventTime;
        if ((r & d) === d) {
          c !== null && (c = c.next = {
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
                  f = g.call(p, f, d);
                  break e;
                }
                f = g;
                break e;
              case 3:
                g.flags = g.flags & -65537 | 128;
              case 0:
                if (g = v.payload, d = typeof g == "function" ? g.call(p, f, d) : g, d == null)
                  break e;
                f = fe({}, f, d);
                break e;
              case 2:
                rn = !0;
            }
          }
          a.callback !== null && a.lane !== 0 && (e.flags |= 64, d = i.effects, d === null ? i.effects = [a] : d.push(a));
        } else
          p = { eventTime: p, lane: d, tag: a.tag, payload: a.payload, callback: a.callback, next: null }, c === null ? (u = c = p, l = f) : c = c.next = p, s |= d;
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
      Zn |= s, e.lanes = s, e.memoizedState = f;
    }
  }
  function ad(e, t, n) {
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
  var Im = new $p.Component().refs;
  function eu(e, t, n, r) {
    t = e.memoizedState, n = n(r, t), n = n == null ? t : fe({}, t, n), e.memoizedState = n, e.lanes === 0 && (e.updateQueue.baseState = n);
  }
  var Gs = { isMounted: function(e) {
    return (e = e._reactInternals) ? nr(e) === e : !1;
  }, enqueueSetState: function(e, t, n) {
    e = e._reactInternals;
    var r = $e(), i = vn(e), o = Ut(r, i);
    o.payload = t, n != null && (o.callback = n), t = yn(e, o, i), t !== null && (St(t, e, i, r), Wo(t, e, i));
  }, enqueueReplaceState: function(e, t, n) {
    e = e._reactInternals;
    var r = $e(), i = vn(e), o = Ut(r, i);
    o.tag = 1, o.payload = t, n != null && (o.callback = n), t = yn(e, o, i), t !== null && (St(t, e, i, r), Wo(t, e, i));
  }, enqueueForceUpdate: function(e, t) {
    e = e._reactInternals;
    var n = $e(), r = vn(e), i = Ut(n, r);
    i.tag = 2, t != null && (i.callback = t), t = yn(e, i, r), t !== null && (St(t, e, r, n), Wo(t, e, r));
  } };
  function ld(e, t, n, r, i, o, s) {
    return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(r, o, s) : t.prototype && t.prototype.isPureReactComponent ? !bi(n, r) || !bi(i, o) : !0;
  }
  function zm(e, t, n) {
    var r = !1, i = Cn, o = t.contextType;
    return typeof o == "object" && o !== null ? o = dt(o) : (i = We(t) ? Qn : Ne.current, r = t.contextTypes, o = (r = r != null) ? Ir(e, i) : Cn), t = new t(n, o), e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null, t.updater = Gs, e.stateNode = t, t._reactInternals = e, r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = i, e.__reactInternalMemoizedMaskedChildContext = o), t;
  }
  function ud(e, t, n, r) {
    e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, r), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, r), t.state !== e && Gs.enqueueReplaceState(t, t.state, null);
  }
  function tu(e, t, n, r) {
    var i = e.stateNode;
    i.props = n, i.state = e.memoizedState, i.refs = Im, dc(e);
    var o = t.contextType;
    typeof o == "object" && o !== null ? i.context = dt(o) : (o = We(t) ? Qn : Ne.current, i.context = Ir(e, o)), i.state = e.memoizedState, o = t.getDerivedStateFromProps, typeof o == "function" && (eu(e, t, o, n), i.state = e.memoizedState), typeof t.getDerivedStateFromProps == "function" || typeof i.getSnapshotBeforeUpdate == "function" || typeof i.UNSAFE_componentWillMount != "function" && typeof i.componentWillMount != "function" || (t = i.state, typeof i.componentWillMount == "function" && i.componentWillMount(), typeof i.UNSAFE_componentWillMount == "function" && i.UNSAFE_componentWillMount(), t !== i.state && Gs.enqueueReplaceState(i, i.state, null), gs(e, n, i, r), i.state = e.memoizedState), typeof i.componentDidMount == "function" && (e.flags |= 4194308);
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
          a === Im && (a = i.refs = {}), s === null ? delete a[o] : a[o] = s;
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
  function cd(e) {
    var t = e._init;
    return t(e._payload);
  }
  function Bm(e) {
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
      return y = xn(y, h), y.index = 0, y.sibling = null, y;
    }
    function o(y, h, m) {
      return y.index = m, e ? (m = y.alternate, m !== null ? (m = m.index, m < h ? (y.flags |= 2, h) : m) : (y.flags |= 2, h)) : (y.flags |= 1048576, h);
    }
    function s(y) {
      return e && y.alternate === null && (y.flags |= 2), y;
    }
    function a(y, h, m, x) {
      return h === null || h.tag !== 6 ? (h = tl(m, y.mode, x), h.return = y, h) : (h = i(h, m), h.return = y, h);
    }
    function l(y, h, m, x) {
      var E = m.type;
      return E === yr ? c(y, h, m.props.children, x, m.key) : h !== null && (h.elementType === E || typeof E == "object" && E !== null && E.$$typeof === nn && cd(E) === h.type) ? (x = i(h, m.props), x.ref = si(y, h, m), x.return = y, x) : (x = Zo(m.type, m.key, m.props, null, y.mode, x), x.ref = si(y, h, m), x.return = y, x);
    }
    function u(y, h, m, x) {
      return h === null || h.tag !== 4 || h.stateNode.containerInfo !== m.containerInfo || h.stateNode.implementation !== m.implementation ? (h = nl(m, y.mode, x), h.return = y, h) : (h = i(h, m.children || []), h.return = y, h);
    }
    function c(y, h, m, x, E) {
      return h === null || h.tag !== 7 ? (h = Gn(m, y.mode, x, E), h.return = y, h) : (h = i(h, m), h.return = y, h);
    }
    function f(y, h, m) {
      if (typeof h == "string" && h !== "" || typeof h == "number")
        return h = tl("" + h, y.mode, m), h.return = y, h;
      if (typeof h == "object" && h !== null) {
        switch (h.$$typeof) {
          case vo:
            return m = Zo(h.type, h.key, h.props, null, y.mode, m), m.ref = si(y, null, h), m.return = y, m;
          case mr:
            return h = nl(h, y.mode, m), h.return = y, h;
          case nn:
            var x = h._init;
            return f(y, x(h._payload), m);
        }
        if (hi(h) || ti(h))
          return h = Gn(h, y.mode, m, null), h.return = y, h;
        Oo(y, h);
      }
      return null;
    }
    function d(y, h, m, x) {
      var E = h !== null ? h.key : null;
      if (typeof m == "string" && m !== "" || typeof m == "number")
        return E !== null ? null : a(y, h, "" + m, x);
      if (typeof m == "object" && m !== null) {
        switch (m.$$typeof) {
          case vo:
            return m.key === E ? l(y, h, m, x) : null;
          case mr:
            return m.key === E ? u(y, h, m, x) : null;
          case nn:
            return E = m._init, d(
              y,
              h,
              E(m._payload),
              x
            );
        }
        if (hi(m) || ti(m))
          return E !== null ? null : c(y, h, m, x, null);
        Oo(y, m);
      }
      return null;
    }
    function p(y, h, m, x, E) {
      if (typeof x == "string" && x !== "" || typeof x == "number")
        return y = y.get(m) || null, a(h, y, "" + x, E);
      if (typeof x == "object" && x !== null) {
        switch (x.$$typeof) {
          case vo:
            return y = y.get(x.key === null ? m : x.key) || null, l(h, y, x, E);
          case mr:
            return y = y.get(x.key === null ? m : x.key) || null, u(h, y, x, E);
          case nn:
            var C = x._init;
            return p(y, h, m, C(x._payload), E);
        }
        if (hi(x) || ti(x))
          return y = y.get(m) || null, c(h, y, x, E, null);
        Oo(h, x);
      }
      return null;
    }
    function g(y, h, m, x) {
      for (var E = null, C = null, T = h, _ = h = 0, L = null; T !== null && _ < m.length; _++) {
        T.index > _ ? (L = T, T = null) : L = T.sibling;
        var O = d(y, T, m[_], x);
        if (O === null) {
          T === null && (T = L);
          break;
        }
        e && T && O.alternate === null && t(y, T), h = o(O, h, _), C === null ? E = O : C.sibling = O, C = O, T = L;
      }
      if (_ === m.length)
        return n(y, T), ae && Ln(y, _), E;
      if (T === null) {
        for (; _ < m.length; _++)
          T = f(y, m[_], x), T !== null && (h = o(T, h, _), C === null ? E = T : C.sibling = T, C = T);
        return ae && Ln(y, _), E;
      }
      for (T = r(y, T); _ < m.length; _++)
        L = p(T, y, _, m[_], x), L !== null && (e && L.alternate !== null && T.delete(L.key === null ? _ : L.key), h = o(L, h, _), C === null ? E = L : C.sibling = L, C = L);
      return e && T.forEach(function(U) {
        return t(y, U);
      }), ae && Ln(y, _), E;
    }
    function v(y, h, m, x) {
      var E = ti(m);
      if (typeof E != "function")
        throw Error(A(150));
      if (m = E.call(m), m == null)
        throw Error(A(151));
      for (var C = E = null, T = h, _ = h = 0, L = null, O = m.next(); T !== null && !O.done; _++, O = m.next()) {
        T.index > _ ? (L = T, T = null) : L = T.sibling;
        var U = d(y, T, O.value, x);
        if (U === null) {
          T === null && (T = L);
          break;
        }
        e && T && U.alternate === null && t(y, T), h = o(U, h, _), C === null ? E = U : C.sibling = U, C = U, T = L;
      }
      if (O.done)
        return n(
          y,
          T
        ), ae && Ln(y, _), E;
      if (T === null) {
        for (; !O.done; _++, O = m.next())
          O = f(y, O.value, x), O !== null && (h = o(O, h, _), C === null ? E = O : C.sibling = O, C = O);
        return ae && Ln(y, _), E;
      }
      for (T = r(y, T); !O.done; _++, O = m.next())
        O = p(T, y, _, O.value, x), O !== null && (e && O.alternate !== null && T.delete(O.key === null ? _ : O.key), h = o(O, h, _), C === null ? E = O : C.sibling = O, C = O);
      return e && T.forEach(function(pe) {
        return t(y, pe);
      }), ae && Ln(y, _), E;
    }
    function P(y, h, m, x) {
      if (typeof m == "object" && m !== null && m.type === yr && m.key === null && (m = m.props.children), typeof m == "object" && m !== null) {
        switch (m.$$typeof) {
          case vo:
            e: {
              for (var E = m.key, C = h; C !== null; ) {
                if (C.key === E) {
                  if (E = m.type, E === yr) {
                    if (C.tag === 7) {
                      n(y, C.sibling), h = i(C, m.props.children), h.return = y, y = h;
                      break e;
                    }
                  } else if (C.elementType === E || typeof E == "object" && E !== null && E.$$typeof === nn && cd(E) === C.type) {
                    n(y, C.sibling), h = i(C, m.props), h.ref = si(y, C, m), h.return = y, y = h;
                    break e;
                  }
                  n(y, C);
                  break;
                } else
                  t(y, C);
                C = C.sibling;
              }
              m.type === yr ? (h = Gn(m.props.children, y.mode, x, m.key), h.return = y, y = h) : (x = Zo(m.type, m.key, m.props, null, y.mode, x), x.ref = si(y, h, m), x.return = y, y = x);
            }
            return s(y);
          case mr:
            e: {
              for (C = m.key; h !== null; ) {
                if (h.key === C)
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
              h = nl(m, y.mode, x), h.return = y, y = h;
            }
            return s(y);
          case nn:
            return C = m._init, P(y, h, C(m._payload), x);
        }
        if (hi(m))
          return g(y, h, m, x);
        if (ti(m))
          return v(y, h, m, x);
        Oo(y, m);
      }
      return typeof m == "string" && m !== "" || typeof m == "number" ? (m = "" + m, h !== null && h.tag === 6 ? (n(y, h.sibling), h = i(h, m), h.return = y, y = h) : (n(y, h), h = tl(m, y.mode, x), h.return = y, y = h), s(y)) : n(y, h);
    }
    return P;
  }
  var Br = Bm(!0), Um = Bm(!1), oo = {}, Ot = On(oo), Ui = On(oo), Hi = On(oo);
  function Un(e) {
    if (e === oo)
      throw Error(A(174));
    return e;
  }
  function hc(e, t) {
    switch (te(Hi, t), te(Ui, e), te(Ot, oo), e = t.nodeType, e) {
      case 9:
      case 11:
        t = (t = t.documentElement) ? t.namespaceURI : Ml(null, "");
        break;
      default:
        e = e === 8 ? t.parentNode : t, t = e.namespaceURI || null, e = e.tagName, t = Ml(t, e);
    }
    oe(Ot), te(Ot, t);
  }
  function Ur() {
    oe(Ot), oe(Ui), oe(Hi);
  }
  function Hm(e) {
    Un(Hi.current);
    var t = Un(Ot.current), n = Ml(t, e.type);
    t !== n && (te(Ui, e), te(Ot, n));
  }
  function pc(e) {
    Ui.current === e && (oe(Ot), oe(Ui));
  }
  var le = On(0);
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
  var Ya = [];
  function mc() {
    for (var e = 0; e < Ya.length; e++)
      Ya[e]._workInProgressVersionPrimary = null;
    Ya.length = 0;
  }
  var Go = Zt.ReactCurrentDispatcher, Xa = Zt.ReactCurrentBatchConfig, Xn = 0, ce = null, xe = null, Ee = null, xs = !1, Ti = !1, Wi = 0, ox = 0;
  function De() {
    throw Error(A(321));
  }
  function yc(e, t) {
    if (t === null)
      return !1;
    for (var n = 0; n < t.length && n < e.length; n++)
      if (!Tt(e[n], t[n]))
        return !1;
    return !0;
  }
  function gc(e, t, n, r, i, o) {
    if (Xn = o, ce = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, Go.current = e === null || e.memoizedState === null ? ux : cx, e = n(r, i), Ti) {
      o = 0;
      do {
        if (Ti = !1, Wi = 0, 25 <= o)
          throw Error(A(301));
        o += 1, Ee = xe = null, t.updateQueue = null, Go.current = fx, e = n(r, i);
      } while (Ti);
    }
    if (Go.current = ws, t = xe !== null && xe.next !== null, Xn = 0, Ee = xe = ce = null, xs = !1, t)
      throw Error(A(300));
    return e;
  }
  function vc() {
    var e = Wi !== 0;
    return Wi = 0, e;
  }
  function Pt() {
    var e = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
    return Ee === null ? ce.memoizedState = Ee = e : Ee = Ee.next = e, Ee;
  }
  function ht() {
    if (xe === null) {
      var e = ce.alternate;
      e = e !== null ? e.memoizedState : null;
    } else
      e = xe.next;
    var t = Ee === null ? ce.memoizedState : Ee.next;
    if (t !== null)
      Ee = t, xe = e;
    else {
      if (e === null)
        throw Error(A(310));
      xe = e, e = { memoizedState: xe.memoizedState, baseState: xe.baseState, baseQueue: xe.baseQueue, queue: xe.queue, next: null }, Ee === null ? ce.memoizedState = Ee = e : Ee = Ee.next = e;
    }
    return Ee;
  }
  function Gi(e, t) {
    return typeof t == "function" ? t(e) : t;
  }
  function Za(e) {
    var t = ht(), n = t.queue;
    if (n === null)
      throw Error(A(311));
    n.lastRenderedReducer = e;
    var r = xe, i = r.baseQueue, o = n.pending;
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
        if ((Xn & c) === c)
          l !== null && (l = l.next = { lane: 0, action: u.action, hasEagerState: u.hasEagerState, eagerState: u.eagerState, next: null }), r = u.hasEagerState ? u.eagerState : e(r, u.action);
        else {
          var f = {
            lane: c,
            action: u.action,
            hasEagerState: u.hasEagerState,
            eagerState: u.eagerState,
            next: null
          };
          l === null ? (a = l = f, s = r) : l = l.next = f, ce.lanes |= c, Zn |= c;
        }
        u = u.next;
      } while (u !== null && u !== o);
      l === null ? s = r : l.next = a, Tt(r, t.memoizedState) || (Ue = !0), t.memoizedState = r, t.baseState = s, t.baseQueue = l, n.lastRenderedState = r;
    }
    if (e = n.interleaved, e !== null) {
      i = e;
      do
        o = i.lane, ce.lanes |= o, Zn |= o, i = i.next;
      while (i !== e);
    } else
      i === null && (n.lanes = 0);
    return [t.memoizedState, n.dispatch];
  }
  function qa(e) {
    var t = ht(), n = t.queue;
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
  function Wm() {
  }
  function Gm(e, t) {
    var n = ce, r = ht(), i = t(), o = !Tt(r.memoizedState, i);
    if (o && (r.memoizedState = i, Ue = !0), r = r.queue, xc(Ym.bind(null, n, r, e), [e]), r.getSnapshot !== t || o || Ee !== null && Ee.memoizedState.tag & 1) {
      if (n.flags |= 2048, Ki(9, Qm.bind(null, n, r, i, t), void 0, null), Ce === null)
        throw Error(A(349));
      Xn & 30 || Km(n, t, i);
    }
    return i;
  }
  function Km(e, t, n) {
    e.flags |= 16384, e = { getSnapshot: t, value: n }, t = ce.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, ce.updateQueue = t, t.stores = [e]) : (n = t.stores, n === null ? t.stores = [e] : n.push(e));
  }
  function Qm(e, t, n, r) {
    t.value = n, t.getSnapshot = r, Xm(t) && Zm(e);
  }
  function Ym(e, t, n) {
    return n(function() {
      Xm(t) && Zm(e);
    });
  }
  function Xm(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
      var n = t();
      return !Tt(e, n);
    } catch {
      return !0;
    }
  }
  function Zm(e) {
    var t = Qt(e, 1);
    t !== null && St(t, e, 1, -1);
  }
  function fd(e) {
    var t = Pt();
    return typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: Gi, lastRenderedState: e }, t.queue = e, e = e.dispatch = lx.bind(null, ce, e), [t.memoizedState, e];
  }
  function Ki(e, t, n, r) {
    return e = { tag: e, create: t, destroy: n, deps: r, next: null }, t = ce.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, ce.updateQueue = t, t.lastEffect = e.next = e) : (n = t.lastEffect, n === null ? t.lastEffect = e.next = e : (r = n.next, n.next = e, e.next = r, t.lastEffect = e)), e;
  }
  function qm() {
    return ht().memoizedState;
  }
  function Ko(e, t, n, r) {
    var i = Pt();
    ce.flags |= e, i.memoizedState = Ki(1 | t, n, void 0, r === void 0 ? null : r);
  }
  function Ks(e, t, n, r) {
    var i = ht();
    r = r === void 0 ? null : r;
    var o = void 0;
    if (xe !== null) {
      var s = xe.memoizedState;
      if (o = s.destroy, r !== null && yc(r, s.deps)) {
        i.memoizedState = Ki(t, n, o, r);
        return;
      }
    }
    ce.flags |= e, i.memoizedState = Ki(1 | t, n, o, r);
  }
  function dd(e, t) {
    return Ko(8390656, 8, e, t);
  }
  function xc(e, t) {
    return Ks(2048, 8, e, t);
  }
  function Jm(e, t) {
    return Ks(4, 2, e, t);
  }
  function ey(e, t) {
    return Ks(4, 4, e, t);
  }
  function ty(e, t) {
    if (typeof t == "function")
      return e = e(), t(e), function() {
        t(null);
      };
    if (t != null)
      return e = e(), t.current = e, function() {
        t.current = null;
      };
  }
  function ny(e, t, n) {
    return n = n != null ? n.concat([e]) : null, Ks(4, 4, ty.bind(null, t, e), n);
  }
  function wc() {
  }
  function ry(e, t) {
    var n = ht();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && yc(t, r[1]) ? r[0] : (n.memoizedState = [e, t], e);
  }
  function iy(e, t) {
    var n = ht();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && yc(t, r[1]) ? r[0] : (e = e(), n.memoizedState = [e, t], e);
  }
  function oy(e, t, n) {
    return Xn & 21 ? (Tt(n, t) || (n = lm(), ce.lanes |= n, Zn |= n, e.baseState = !0), t) : (e.baseState && (e.baseState = !1, Ue = !0), e.memoizedState = n);
  }
  function sx(e, t) {
    var n = X;
    X = n !== 0 && 4 > n ? n : 4, e(!0);
    var r = Xa.transition;
    Xa.transition = {};
    try {
      e(!1), t();
    } finally {
      X = n, Xa.transition = r;
    }
  }
  function sy() {
    return ht().memoizedState;
  }
  function ax(e, t, n) {
    var r = vn(e);
    if (n = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null }, ay(e))
      ly(t, n);
    else if (n = $m(e, t, n, r), n !== null) {
      var i = $e();
      St(n, e, r, i), uy(n, t, r);
    }
  }
  function lx(e, t, n) {
    var r = vn(e), i = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
    if (ay(e))
      ly(t, i);
    else {
      var o = e.alternate;
      if (e.lanes === 0 && (o === null || o.lanes === 0) && (o = t.lastRenderedReducer, o !== null))
        try {
          var s = t.lastRenderedState, a = o(s, n);
          if (i.hasEagerState = !0, i.eagerState = a, Tt(a, s)) {
            var l = t.interleaved;
            l === null ? (i.next = i, fc(t)) : (i.next = l.next, l.next = i), t.interleaved = i;
            return;
          }
        } catch {
        } finally {
        }
      n = $m(e, t, i, r), n !== null && (i = $e(), St(n, e, r, i), uy(n, t, r));
    }
  }
  function ay(e) {
    var t = e.alternate;
    return e === ce || t !== null && t === ce;
  }
  function ly(e, t) {
    Ti = xs = !0;
    var n = e.pending;
    n === null ? t.next = t : (t.next = n.next, n.next = t), e.pending = t;
  }
  function uy(e, t, n) {
    if (n & 4194240) {
      var r = t.lanes;
      r &= e.pendingLanes, n |= r, t.lanes = n, Zu(e, n);
    }
  }
  var ws = { readContext: dt, useCallback: De, useContext: De, useEffect: De, useImperativeHandle: De, useInsertionEffect: De, useLayoutEffect: De, useMemo: De, useReducer: De, useRef: De, useState: De, useDebugValue: De, useDeferredValue: De, useTransition: De, useMutableSource: De, useSyncExternalStore: De, useId: De, unstable_isNewReconciler: !1 }, ux = { readContext: dt, useCallback: function(e, t) {
    return Pt().memoizedState = [e, t === void 0 ? null : t], e;
  }, useContext: dt, useEffect: dd, useImperativeHandle: function(e, t, n) {
    return n = n != null ? n.concat([e]) : null, Ko(
      4194308,
      4,
      ty.bind(null, t, e),
      n
    );
  }, useLayoutEffect: function(e, t) {
    return Ko(4194308, 4, e, t);
  }, useInsertionEffect: function(e, t) {
    return Ko(4, 2, e, t);
  }, useMemo: function(e, t) {
    var n = Pt();
    return t = t === void 0 ? null : t, e = e(), n.memoizedState = [e, t], e;
  }, useReducer: function(e, t, n) {
    var r = Pt();
    return t = n !== void 0 ? n(t) : t, r.memoizedState = r.baseState = t, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: e, lastRenderedState: t }, r.queue = e, e = e.dispatch = ax.bind(null, ce, e), [r.memoizedState, e];
  }, useRef: function(e) {
    var t = Pt();
    return e = { current: e }, t.memoizedState = e;
  }, useState: fd, useDebugValue: wc, useDeferredValue: function(e) {
    return Pt().memoizedState = e;
  }, useTransition: function() {
    var e = fd(!1), t = e[0];
    return e = sx.bind(null, e[1]), Pt().memoizedState = e, [t, e];
  }, useMutableSource: function() {
  }, useSyncExternalStore: function(e, t, n) {
    var r = ce, i = Pt();
    if (ae) {
      if (n === void 0)
        throw Error(A(407));
      n = n();
    } else {
      if (n = t(), Ce === null)
        throw Error(A(349));
      Xn & 30 || Km(r, t, n);
    }
    i.memoizedState = n;
    var o = { value: n, getSnapshot: t };
    return i.queue = o, dd(Ym.bind(
      null,
      r,
      o,
      e
    ), [e]), r.flags |= 2048, Ki(9, Qm.bind(null, r, o, n, t), void 0, null), n;
  }, useId: function() {
    var e = Pt(), t = Ce.identifierPrefix;
    if (ae) {
      var n = bt, r = $t;
      n = (r & ~(1 << 32 - wt(r) - 1)).toString(32) + n, t = ":" + t + "R" + n, n = Wi++, 0 < n && (t += "H" + n.toString(32)), t += ":";
    } else
      n = ox++, t = ":" + t + "r" + n.toString(32) + ":";
    return e.memoizedState = t;
  }, unstable_isNewReconciler: !1 }, cx = {
    readContext: dt,
    useCallback: ry,
    useContext: dt,
    useEffect: xc,
    useImperativeHandle: ny,
    useInsertionEffect: Jm,
    useLayoutEffect: ey,
    useMemo: iy,
    useReducer: Za,
    useRef: qm,
    useState: function() {
      return Za(Gi);
    },
    useDebugValue: wc,
    useDeferredValue: function(e) {
      var t = ht();
      return oy(t, xe.memoizedState, e);
    },
    useTransition: function() {
      var e = Za(Gi)[0], t = ht().memoizedState;
      return [e, t];
    },
    useMutableSource: Wm,
    useSyncExternalStore: Gm,
    useId: sy,
    unstable_isNewReconciler: !1
  }, fx = { readContext: dt, useCallback: ry, useContext: dt, useEffect: xc, useImperativeHandle: ny, useInsertionEffect: Jm, useLayoutEffect: ey, useMemo: iy, useReducer: qa, useRef: qm, useState: function() {
    return qa(Gi);
  }, useDebugValue: wc, useDeferredValue: function(e) {
    var t = ht();
    return xe === null ? t.memoizedState = e : oy(t, xe.memoizedState, e);
  }, useTransition: function() {
    var e = qa(Gi)[0], t = ht().memoizedState;
    return [e, t];
  }, useMutableSource: Wm, useSyncExternalStore: Gm, useId: sy, unstable_isNewReconciler: !1 };
  function Hr(e, t) {
    try {
      var n = "", r = t;
      do
        n += b0(r), r = r.return;
      while (r);
      var i = n;
    } catch (o) {
      i = `
Error generating stack: ` + o.message + `
` + o.stack;
    }
    return { value: e, source: t, stack: i, digest: null };
  }
  function Ja(e, t, n) {
    return { value: e, source: null, stack: n ?? null, digest: t ?? null };
  }
  function nu(e, t) {
    try {
      console.error(t.value);
    } catch (n) {
      setTimeout(function() {
        throw n;
      });
    }
  }
  var dx = typeof WeakMap == "function" ? WeakMap : Map;
  function cy(e, t, n) {
    n = Ut(-1, n), n.tag = 3, n.payload = { element: null };
    var r = t.value;
    return n.callback = function() {
      Ts || (Ts = !0, du = r), nu(e, t);
    }, n;
  }
  function fy(e, t, n) {
    n = Ut(-1, n), n.tag = 3;
    var r = e.type.getDerivedStateFromError;
    if (typeof r == "function") {
      var i = t.value;
      n.payload = function() {
        return r(i);
      }, n.callback = function() {
        nu(e, t);
      };
    }
    var o = e.stateNode;
    return o !== null && typeof o.componentDidCatch == "function" && (n.callback = function() {
      nu(e, t), typeof r != "function" && (gn === null ? gn = /* @__PURE__ */ new Set([this]) : gn.add(this));
      var s = t.stack;
      this.componentDidCatch(t.value, { componentStack: s !== null ? s : "" });
    }), n;
  }
  function hd(e, t, n) {
    var r = e.pingCache;
    if (r === null) {
      r = e.pingCache = new dx();
      var i = /* @__PURE__ */ new Set();
      r.set(t, i);
    } else
      i = r.get(t), i === void 0 && (i = /* @__PURE__ */ new Set(), r.set(t, i));
    i.has(n) || (i.add(n), e = kx.bind(null, e, t, n), t.then(e, e));
  }
  function pd(e) {
    do {
      var t;
      if ((t = e.tag === 13) && (t = e.memoizedState, t = t !== null ? t.dehydrated !== null : !0), t)
        return e;
      e = e.return;
    } while (e !== null);
    return null;
  }
  function md(e, t, n, r, i) {
    return e.mode & 1 ? (e.flags |= 65536, e.lanes = i, e) : (e === t ? e.flags |= 65536 : (e.flags |= 128, n.flags |= 131072, n.flags &= -52805, n.tag === 1 && (n.alternate === null ? n.tag = 17 : (t = Ut(-1, 1), t.tag = 2, yn(n, t, 1))), n.lanes |= 1), e);
  }
  var hx = Zt.ReactCurrentOwner, Ue = !1;
  function Ve(e, t, n, r) {
    t.child = e === null ? Um(t, null, n, r) : Br(t, e.child, n, r);
  }
  function yd(e, t, n, r, i) {
    n = n.render;
    var o = t.ref;
    return Lr(t, i), r = gc(e, t, n, r, o, i), n = vc(), e !== null && !Ue ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~i, Yt(e, t, i)) : (ae && n && oc(t), t.flags |= 1, Ve(e, t, r, i), t.child);
  }
  function gd(e, t, n, r, i) {
    if (e === null) {
      var o = n.type;
      return typeof o == "function" && !Ac(o) && o.defaultProps === void 0 && n.compare === null && n.defaultProps === void 0 ? (t.tag = 15, t.type = o, dy(e, t, o, r, i)) : (e = Zo(n.type, null, r, t, t.mode, i), e.ref = t.ref, e.return = t, t.child = e);
    }
    if (o = e.child, !(e.lanes & i)) {
      var s = o.memoizedProps;
      if (n = n.compare, n = n !== null ? n : bi, n(s, r) && e.ref === t.ref)
        return Yt(e, t, i);
    }
    return t.flags |= 1, e = xn(o, r), e.ref = t.ref, e.return = t, t.child = e;
  }
  function dy(e, t, n, r, i) {
    if (e !== null) {
      var o = e.memoizedProps;
      if (bi(o, r) && e.ref === t.ref)
        if (Ue = !1, t.pendingProps = r = o, (e.lanes & i) !== 0)
          e.flags & 131072 && (Ue = !0);
        else
          return t.lanes = e.lanes, Yt(e, t, i);
    }
    return ru(e, t, n, r, i);
  }
  function hy(e, t, n) {
    var r = t.pendingProps, i = r.children, o = e !== null ? e.memoizedState : null;
    if (r.mode === "hidden")
      if (!(t.mode & 1))
        t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, te(kr, Qe), Qe |= n;
      else {
        if (!(n & 1073741824))
          return e = o !== null ? o.baseLanes | n : n, t.lanes = t.childLanes = 1073741824, t.memoizedState = { baseLanes: e, cachePool: null, transitions: null }, t.updateQueue = null, te(kr, Qe), Qe |= e, null;
        t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, r = o !== null ? o.baseLanes : n, te(kr, Qe), Qe |= r;
      }
    else
      o !== null ? (r = o.baseLanes | n, t.memoizedState = null) : r = n, te(kr, Qe), Qe |= r;
    return Ve(e, t, i, n), t.child;
  }
  function py(e, t) {
    var n = t.ref;
    (e === null && n !== null || e !== null && e.ref !== n) && (t.flags |= 512, t.flags |= 2097152);
  }
  function ru(e, t, n, r, i) {
    var o = We(n) ? Qn : Ne.current;
    return o = Ir(t, o), Lr(t, i), n = gc(e, t, n, r, o, i), r = vc(), e !== null && !Ue ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~i, Yt(e, t, i)) : (ae && r && oc(t), t.flags |= 1, Ve(e, t, n, i), t.child);
  }
  function vd(e, t, n, r, i) {
    if (We(n)) {
      var o = !0;
      ds(t);
    } else
      o = !1;
    if (Lr(t, i), t.stateNode === null)
      Qo(e, t), zm(t, n, r), tu(t, n, r, i), r = !0;
    else if (e === null) {
      var s = t.stateNode, a = t.memoizedProps;
      s.props = a;
      var l = s.context, u = n.contextType;
      typeof u == "object" && u !== null ? u = dt(u) : (u = We(n) ? Qn : Ne.current, u = Ir(t, u));
      var c = n.getDerivedStateFromProps, f = typeof c == "function" || typeof s.getSnapshotBeforeUpdate == "function";
      f || typeof s.UNSAFE_componentWillReceiveProps != "function" && typeof s.componentWillReceiveProps != "function" || (a !== r || l !== u) && ud(t, s, r, u), rn = !1;
      var d = t.memoizedState;
      s.state = d, gs(t, r, s, i), l = t.memoizedState, a !== r || d !== l || He.current || rn ? (typeof c == "function" && (eu(t, n, c, r), l = t.memoizedState), (a = rn || ld(t, n, a, r, d, l, u)) ? (f || typeof s.UNSAFE_componentWillMount != "function" && typeof s.componentWillMount != "function" || (typeof s.componentWillMount == "function" && s.componentWillMount(), typeof s.UNSAFE_componentWillMount == "function" && s.UNSAFE_componentWillMount()), typeof s.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof s.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = r, t.memoizedState = l), s.props = r, s.state = l, s.context = u, r = a) : (typeof s.componentDidMount == "function" && (t.flags |= 4194308), r = !1);
    } else {
      s = t.stateNode, bm(e, t), a = t.memoizedProps, u = t.type === t.elementType ? a : gt(t.type, a), s.props = u, f = t.pendingProps, d = s.context, l = n.contextType, typeof l == "object" && l !== null ? l = dt(l) : (l = We(n) ? Qn : Ne.current, l = Ir(t, l));
      var p = n.getDerivedStateFromProps;
      (c = typeof p == "function" || typeof s.getSnapshotBeforeUpdate == "function") || typeof s.UNSAFE_componentWillReceiveProps != "function" && typeof s.componentWillReceiveProps != "function" || (a !== f || d !== l) && ud(t, s, r, l), rn = !1, d = t.memoizedState, s.state = d, gs(t, r, s, i);
      var g = t.memoizedState;
      a !== f || d !== g || He.current || rn ? (typeof p == "function" && (eu(t, n, p, r), g = t.memoizedState), (u = rn || ld(t, n, u, r, d, g, l) || !1) ? (c || typeof s.UNSAFE_componentWillUpdate != "function" && typeof s.componentWillUpdate != "function" || (typeof s.componentWillUpdate == "function" && s.componentWillUpdate(r, g, l), typeof s.UNSAFE_componentWillUpdate == "function" && s.UNSAFE_componentWillUpdate(r, g, l)), typeof s.componentDidUpdate == "function" && (t.flags |= 4), typeof s.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof s.componentDidUpdate != "function" || a === e.memoizedProps && d === e.memoizedState || (t.flags |= 4), typeof s.getSnapshotBeforeUpdate != "function" || a === e.memoizedProps && d === e.memoizedState || (t.flags |= 1024), t.memoizedProps = r, t.memoizedState = g), s.props = r, s.state = g, s.context = l, r = u) : (typeof s.componentDidUpdate != "function" || a === e.memoizedProps && d === e.memoizedState || (t.flags |= 4), typeof s.getSnapshotBeforeUpdate != "function" || a === e.memoizedProps && d === e.memoizedState || (t.flags |= 1024), r = !1);
    }
    return iu(e, t, n, r, o, i);
  }
  function iu(e, t, n, r, i, o) {
    py(e, t);
    var s = (t.flags & 128) !== 0;
    if (!r && !s)
      return i && rd(t, n, !1), Yt(e, t, o);
    r = t.stateNode, hx.current = t;
    var a = s && typeof n.getDerivedStateFromError != "function" ? null : r.render();
    return t.flags |= 1, e !== null && s ? (t.child = Br(t, e.child, null, o), t.child = Br(t, null, a, o)) : Ve(e, t, a, o), t.memoizedState = r.state, i && rd(t, n, !0), t.child;
  }
  function my(e) {
    var t = e.stateNode;
    t.pendingContext ? nd(e, t.pendingContext, t.pendingContext !== t.context) : t.context && nd(e, t.context, !1), hc(e, t.containerInfo);
  }
  function xd(e, t, n, r, i) {
    return zr(), ac(i), t.flags |= 256, Ve(e, t, n, r), t.child;
  }
  var ou = { dehydrated: null, treeContext: null, retryLane: 0 };
  function su(e) {
    return { baseLanes: e, cachePool: null, transitions: null };
  }
  function yy(e, t, n) {
    var r = t.pendingProps, i = le.current, o = !1, s = (t.flags & 128) !== 0, a;
    if ((a = s) || (a = e !== null && e.memoizedState === null ? !1 : (i & 2) !== 0), a ? (o = !0, t.flags &= -129) : (e === null || e.memoizedState !== null) && (i |= 1), te(le, i & 1), e === null)
      return ql(t), e = t.memoizedState, e !== null && (e = e.dehydrated, e !== null) ? (t.mode & 1 ? e.data === "$!" ? t.lanes = 8 : t.lanes = 1073741824 : t.lanes = 1, null) : (s = r.children, e = r.fallback, o ? (r = t.mode, o = t.child, s = { mode: "hidden", children: s }, !(r & 1) && o !== null ? (o.childLanes = 0, o.pendingProps = s) : o = Xs(s, r, 0, null), e = Gn(e, r, n, null), o.return = t, e.return = t, o.sibling = e, t.child = o, t.child.memoizedState = su(n), t.memoizedState = ou, e) : Sc(t, s));
    if (i = e.memoizedState, i !== null && (a = i.dehydrated, a !== null))
      return px(e, t, s, r, a, i, n);
    if (o) {
      o = r.fallback, s = t.mode, i = e.child, a = i.sibling;
      var l = { mode: "hidden", children: r.children };
      return !(s & 1) && t.child !== i ? (r = t.child, r.childLanes = 0, r.pendingProps = l, t.deletions = null) : (r = xn(i, l), r.subtreeFlags = i.subtreeFlags & 14680064), a !== null ? o = xn(a, o) : (o = Gn(o, s, n, null), o.flags |= 2), o.return = t, r.return = t, r.sibling = o, t.child = r, r = o, o = t.child, s = e.child.memoizedState, s = s === null ? su(n) : { baseLanes: s.baseLanes | n, cachePool: null, transitions: s.transitions }, o.memoizedState = s, o.childLanes = e.childLanes & ~n, t.memoizedState = ou, r;
    }
    return o = e.child, e = o.sibling, r = xn(o, { mode: "visible", children: r.children }), !(t.mode & 1) && (r.lanes = n), r.return = t, r.sibling = null, e !== null && (n = t.deletions, n === null ? (t.deletions = [e], t.flags |= 16) : n.push(e)), t.child = r, t.memoizedState = null, r;
  }
  function Sc(e, t) {
    return t = Xs({ mode: "visible", children: t }, e.mode, 0, null), t.return = e, e.child = t;
  }
  function Fo(e, t, n, r) {
    return r !== null && ac(r), Br(t, e.child, null, n), e = Sc(t, t.pendingProps.children), e.flags |= 2, t.memoizedState = null, e;
  }
  function px(e, t, n, r, i, o, s) {
    if (n)
      return t.flags & 256 ? (t.flags &= -257, r = Ja(Error(A(422))), Fo(e, t, s, r)) : t.memoizedState !== null ? (t.child = e.child, t.flags |= 128, null) : (o = r.fallback, i = t.mode, r = Xs({ mode: "visible", children: r.children }, i, 0, null), o = Gn(o, i, s, null), o.flags |= 2, r.return = t, o.return = t, r.sibling = o, t.child = r, t.mode & 1 && Br(t, e.child, null, s), t.child.memoizedState = su(s), t.memoizedState = ou, o);
    if (!(t.mode & 1))
      return Fo(e, t, s, null);
    if (i.data === "$!") {
      if (r = i.nextSibling && i.nextSibling.dataset, r)
        var a = r.dgst;
      return r = a, o = Error(A(419)), r = Ja(o, r, void 0), Fo(e, t, s, r);
    }
    if (a = (s & e.childLanes) !== 0, Ue || a) {
      if (r = Ce, r !== null) {
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
        i = i & (r.suspendedLanes | s) ? 0 : i, i !== 0 && i !== o.retryLane && (o.retryLane = i, Qt(e, i), St(r, e, i, -1));
      }
      return _c(), r = Ja(Error(A(421))), Fo(e, t, s, r);
    }
    return i.data === "$?" ? (t.flags |= 128, t.child = e.child, t = _x.bind(null, e), i._reactRetry = t, null) : (e = o.treeContext, Xe = mn(i.nextSibling), Je = t, ae = !0, xt = null, e !== null && (lt[ut++] = $t, lt[ut++] = bt, lt[ut++] = Yn, $t = e.id, bt = e.overflow, Yn = t), t = Sc(t, r.children), t.flags |= 4096, t);
  }
  function wd(e, t, n) {
    e.lanes |= t;
    var r = e.alternate;
    r !== null && (r.lanes |= t), Jl(e.return, t, n);
  }
  function el(e, t, n, r, i) {
    var o = e.memoizedState;
    o === null ? e.memoizedState = { isBackwards: t, rendering: null, renderingStartTime: 0, last: r, tail: n, tailMode: i } : (o.isBackwards = t, o.rendering = null, o.renderingStartTime = 0, o.last = r, o.tail = n, o.tailMode = i);
  }
  function gy(e, t, n) {
    var r = t.pendingProps, i = r.revealOrder, o = r.tail;
    if (Ve(e, t, r.children, n), r = le.current, r & 2)
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
    if (te(le, r), !(t.mode & 1))
      t.memoizedState = null;
    else
      switch (i) {
        case "forwards":
          for (n = t.child, i = null; n !== null; )
            e = n.alternate, e !== null && vs(e) === null && (i = n), n = n.sibling;
          n = i, n === null ? (i = t.child, t.child = null) : (i = n.sibling, n.sibling = null), el(t, !1, i, n, o);
          break;
        case "backwards":
          for (n = null, i = t.child, t.child = null; i !== null; ) {
            if (e = i.alternate, e !== null && vs(e) === null) {
              t.child = i;
              break;
            }
            e = i.sibling, i.sibling = n, n = i, i = e;
          }
          el(t, !0, n, null, o);
          break;
        case "together":
          el(t, !1, null, null, void 0);
          break;
        default:
          t.memoizedState = null;
      }
    return t.child;
  }
  function Qo(e, t) {
    !(t.mode & 1) && e !== null && (e.alternate = null, t.alternate = null, t.flags |= 2);
  }
  function Yt(e, t, n) {
    if (e !== null && (t.dependencies = e.dependencies), Zn |= t.lanes, !(n & t.childLanes))
      return null;
    if (e !== null && t.child !== e.child)
      throw Error(A(153));
    if (t.child !== null) {
      for (e = t.child, n = xn(e, e.pendingProps), t.child = n, n.return = t; e.sibling !== null; )
        e = e.sibling, n = n.sibling = xn(e, e.pendingProps), n.return = t;
      n.sibling = null;
    }
    return t.child;
  }
  function mx(e, t, n) {
    switch (t.tag) {
      case 3:
        my(t), zr();
        break;
      case 5:
        Hm(t);
        break;
      case 1:
        We(t.type) && ds(t);
        break;
      case 4:
        hc(t, t.stateNode.containerInfo);
        break;
      case 10:
        var r = t.type._context, i = t.memoizedProps.value;
        te(ms, r._currentValue), r._currentValue = i;
        break;
      case 13:
        if (r = t.memoizedState, r !== null)
          return r.dehydrated !== null ? (te(le, le.current & 1), t.flags |= 128, null) : n & t.child.childLanes ? yy(e, t, n) : (te(le, le.current & 1), e = Yt(e, t, n), e !== null ? e.sibling : null);
        te(le, le.current & 1);
        break;
      case 19:
        if (r = (n & t.childLanes) !== 0, e.flags & 128) {
          if (r)
            return gy(e, t, n);
          t.flags |= 128;
        }
        if (i = t.memoizedState, i !== null && (i.rendering = null, i.tail = null, i.lastEffect = null), te(le, le.current), r)
          break;
        return null;
      case 22:
      case 23:
        return t.lanes = 0, hy(e, t, n);
    }
    return Yt(e, t, n);
  }
  var vy, au, xy, wy;
  vy = function(e, t) {
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
  au = function() {
  };
  xy = function(e, t, n, r) {
    var i = e.memoizedProps;
    if (i !== r) {
      e = t.stateNode, Un(Ot.current);
      var o = null;
      switch (n) {
        case "input":
          i = Ol(e, i), r = Ol(e, r), o = [];
          break;
        case "select":
          i = fe({}, i, { value: void 0 }), r = fe({}, r, { value: void 0 }), o = [];
          break;
        case "textarea":
          i = Dl(e, i), r = Dl(e, r), o = [];
          break;
        default:
          typeof i.onClick != "function" && typeof r.onClick == "function" && (e.onclick = cs);
      }
      Rl(n, r);
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
            u === "dangerouslySetInnerHTML" ? (l = l ? l.__html : void 0, a = a ? a.__html : void 0, l != null && a !== l && (o = o || []).push(u, l)) : u === "children" ? typeof l != "string" && typeof l != "number" || (o = o || []).push(u, "" + l) : u !== "suppressContentEditableWarning" && u !== "suppressHydrationWarning" && (Di.hasOwnProperty(u) ? (l != null && u === "onScroll" && re("scroll", e), o || a === l || (o = [])) : (o = o || []).push(u, l));
      }
      n && (o = o || []).push("style", n);
      var u = o;
      (t.updateQueue = u) && (t.flags |= 4);
    }
  };
  wy = function(e, t, n, r) {
    n !== r && (t.flags |= 4);
  };
  function ai(e, t) {
    if (!ae)
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
  function Me(e) {
    var t = e.alternate !== null && e.alternate.child === e.child, n = 0, r = 0;
    if (t)
      for (var i = e.child; i !== null; )
        n |= i.lanes | i.childLanes, r |= i.subtreeFlags & 14680064, r |= i.flags & 14680064, i.return = e, i = i.sibling;
    else
      for (i = e.child; i !== null; )
        n |= i.lanes | i.childLanes, r |= i.subtreeFlags, r |= i.flags, i.return = e, i = i.sibling;
    return e.subtreeFlags |= r, e.childLanes = n, t;
  }
  function yx(e, t, n) {
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
        return Me(t), null;
      case 1:
        return We(t.type) && fs(), Me(t), null;
      case 3:
        return r = t.stateNode, Ur(), oe(He), oe(Ne), mc(), r.pendingContext && (r.context = r.pendingContext, r.pendingContext = null), (e === null || e.child === null) && (Ao(t) ? t.flags |= 4 : e === null || e.memoizedState.isDehydrated && !(t.flags & 256) || (t.flags |= 1024, xt !== null && (mu(xt), xt = null))), au(e, t), Me(t), null;
      case 5:
        pc(t);
        var i = Un(Hi.current);
        if (n = t.type, e !== null && t.stateNode != null)
          xy(e, t, n, r, i), e.ref !== t.ref && (t.flags |= 512, t.flags |= 2097152);
        else {
          if (!r) {
            if (t.stateNode === null)
              throw Error(A(166));
            return Me(t), null;
          }
          if (e = Un(Ot.current), Ao(t)) {
            r = t.stateNode, n = t.type;
            var o = t.memoizedProps;
            switch (r[_t] = t, r[Bi] = o, e = (t.mode & 1) !== 0, n) {
              case "dialog":
                re("cancel", r), re("close", r);
                break;
              case "iframe":
              case "object":
              case "embed":
                re("load", r);
                break;
              case "video":
              case "audio":
                for (i = 0; i < mi.length; i++)
                  re(mi[i], r);
                break;
              case "source":
                re("error", r);
                break;
              case "img":
              case "image":
              case "link":
                re(
                  "error",
                  r
                ), re("load", r);
                break;
              case "details":
                re("toggle", r);
                break;
              case "input":
                Of(r, o), re("invalid", r);
                break;
              case "select":
                r._wrapperState = { wasMultiple: !!o.multiple }, re("invalid", r);
                break;
              case "textarea":
                jf(r, o), re("invalid", r);
            }
            Rl(n, o), i = null;
            for (var s in o)
              if (o.hasOwnProperty(s)) {
                var a = o[s];
                s === "children" ? typeof a == "string" ? r.textContent !== a && (o.suppressHydrationWarning !== !0 && _o(r.textContent, a, e), i = ["children", a]) : typeof a == "number" && r.textContent !== "" + a && (o.suppressHydrationWarning !== !0 && _o(
                  r.textContent,
                  a,
                  e
                ), i = ["children", "" + a]) : Di.hasOwnProperty(s) && a != null && s === "onScroll" && re("scroll", r);
              }
            switch (n) {
              case "input":
                xo(r), Ff(r, o, !0);
                break;
              case "textarea":
                xo(r), Df(r);
                break;
              case "select":
              case "option":
                break;
              default:
                typeof o.onClick == "function" && (r.onclick = cs);
            }
            r = i, t.updateQueue = r, r !== null && (t.flags |= 4);
          } else {
            s = i.nodeType === 9 ? i : i.ownerDocument, e === "http://www.w3.org/1999/xhtml" && (e = Kp(n)), e === "http://www.w3.org/1999/xhtml" ? n === "script" ? (e = s.createElement("div"), e.innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild)) : typeof r.is == "string" ? e = s.createElement(n, { is: r.is }) : (e = s.createElement(n), n === "select" && (s = e, r.multiple ? s.multiple = !0 : r.size && (s.size = r.size))) : e = s.createElementNS(e, n), e[_t] = t, e[Bi] = r, vy(e, t, !1, !1), t.stateNode = e;
            e: {
              switch (s = Nl(n, r), n) {
                case "dialog":
                  re("cancel", e), re("close", e), i = r;
                  break;
                case "iframe":
                case "object":
                case "embed":
                  re("load", e), i = r;
                  break;
                case "video":
                case "audio":
                  for (i = 0; i < mi.length; i++)
                    re(mi[i], e);
                  i = r;
                  break;
                case "source":
                  re("error", e), i = r;
                  break;
                case "img":
                case "image":
                case "link":
                  re(
                    "error",
                    e
                  ), re("load", e), i = r;
                  break;
                case "details":
                  re("toggle", e), i = r;
                  break;
                case "input":
                  Of(e, r), i = Ol(e, r), re("invalid", e);
                  break;
                case "option":
                  i = r;
                  break;
                case "select":
                  e._wrapperState = { wasMultiple: !!r.multiple }, i = fe({}, r, { value: void 0 }), re("invalid", e);
                  break;
                case "textarea":
                  jf(e, r), i = Dl(e, r), re("invalid", e);
                  break;
                default:
                  i = r;
              }
              Rl(n, i), a = i;
              for (o in a)
                if (a.hasOwnProperty(o)) {
                  var l = a[o];
                  o === "style" ? Xp(e, l) : o === "dangerouslySetInnerHTML" ? (l = l ? l.__html : void 0, l != null && Qp(e, l)) : o === "children" ? typeof l == "string" ? (n !== "textarea" || l !== "") && Mi(e, l) : typeof l == "number" && Mi(e, "" + l) : o !== "suppressContentEditableWarning" && o !== "suppressHydrationWarning" && o !== "autoFocus" && (Di.hasOwnProperty(o) ? l != null && o === "onScroll" && re("scroll", e) : l != null && Wu(e, o, l, s));
                }
              switch (n) {
                case "input":
                  xo(e), Ff(e, r, !1);
                  break;
                case "textarea":
                  xo(e), Df(e);
                  break;
                case "option":
                  r.value != null && e.setAttribute("value", "" + En(r.value));
                  break;
                case "select":
                  e.multiple = !!r.multiple, o = r.value, o != null ? Dr(e, !!r.multiple, o, !1) : r.defaultValue != null && Dr(
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
        return Me(t), null;
      case 6:
        if (e && t.stateNode != null)
          wy(e, t, e.memoizedProps, r);
        else {
          if (typeof r != "string" && t.stateNode === null)
            throw Error(A(166));
          if (n = Un(Hi.current), Un(Ot.current), Ao(t)) {
            if (r = t.stateNode, n = t.memoizedProps, r[_t] = t, (o = r.nodeValue !== n) && (e = Je, e !== null))
              switch (e.tag) {
                case 3:
                  _o(r.nodeValue, n, (e.mode & 1) !== 0);
                  break;
                case 5:
                  e.memoizedProps.suppressHydrationWarning !== !0 && _o(r.nodeValue, n, (e.mode & 1) !== 0);
              }
            o && (t.flags |= 4);
          } else
            r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r), r[_t] = t, t.stateNode = r;
        }
        return Me(t), null;
      case 13:
        if (oe(le), r = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
          if (ae && Xe !== null && t.mode & 1 && !(t.flags & 128))
            Vm(), zr(), t.flags |= 98560, o = !1;
          else if (o = Ao(t), r !== null && r.dehydrated !== null) {
            if (e === null) {
              if (!o)
                throw Error(A(318));
              if (o = t.memoizedState, o = o !== null ? o.dehydrated : null, !o)
                throw Error(A(317));
              o[_t] = t;
            } else
              zr(), !(t.flags & 128) && (t.memoizedState = null), t.flags |= 4;
            Me(t), o = !1;
          } else
            xt !== null && (mu(xt), xt = null), o = !0;
          if (!o)
            return t.flags & 65536 ? t : null;
        }
        return t.flags & 128 ? (t.lanes = n, t) : (r = r !== null, r !== (e !== null && e.memoizedState !== null) && r && (t.child.flags |= 8192, t.mode & 1 && (e === null || le.current & 1 ? we === 0 && (we = 3) : _c())), t.updateQueue !== null && (t.flags |= 4), Me(t), null);
      case 4:
        return Ur(), au(e, t), e === null && Ii(t.stateNode.containerInfo), Me(t), null;
      case 10:
        return cc(t.type._context), Me(t), null;
      case 17:
        return We(t.type) && fs(), Me(t), null;
      case 19:
        if (oe(le), o = t.memoizedState, o === null)
          return Me(t), null;
        if (r = (t.flags & 128) !== 0, s = o.rendering, s === null)
          if (r)
            ai(o, !1);
          else {
            if (we !== 0 || e !== null && e.flags & 128)
              for (e = t.child; e !== null; ) {
                if (s = vs(e), s !== null) {
                  for (t.flags |= 128, ai(o, !1), r = s.updateQueue, r !== null && (t.updateQueue = r, t.flags |= 4), t.subtreeFlags = 0, r = n, n = t.child; n !== null; )
                    o = n, e = r, o.flags &= 14680066, s = o.alternate, s === null ? (o.childLanes = 0, o.lanes = e, o.child = null, o.subtreeFlags = 0, o.memoizedProps = null, o.memoizedState = null, o.updateQueue = null, o.dependencies = null, o.stateNode = null) : (o.childLanes = s.childLanes, o.lanes = s.lanes, o.child = s.child, o.subtreeFlags = 0, o.deletions = null, o.memoizedProps = s.memoizedProps, o.memoizedState = s.memoizedState, o.updateQueue = s.updateQueue, o.type = s.type, e = s.dependencies, o.dependencies = e === null ? null : { lanes: e.lanes, firstContext: e.firstContext }), n = n.sibling;
                  return te(le, le.current & 1 | 2), t.child;
                }
                e = e.sibling;
              }
            o.tail !== null && ye() > Wr && (t.flags |= 128, r = !0, ai(o, !1), t.lanes = 4194304);
          }
        else {
          if (!r)
            if (e = vs(s), e !== null) {
              if (t.flags |= 128, r = !0, n = e.updateQueue, n !== null && (t.updateQueue = n, t.flags |= 4), ai(o, !0), o.tail === null && o.tailMode === "hidden" && !s.alternate && !ae)
                return Me(t), null;
            } else
              2 * ye() - o.renderingStartTime > Wr && n !== 1073741824 && (t.flags |= 128, r = !0, ai(o, !1), t.lanes = 4194304);
          o.isBackwards ? (s.sibling = t.child, t.child = s) : (n = o.last, n !== null ? n.sibling = s : t.child = s, o.last = s);
        }
        return o.tail !== null ? (t = o.tail, o.rendering = t, o.tail = t.sibling, o.renderingStartTime = ye(), t.sibling = null, n = le.current, te(le, r ? n & 1 | 2 : n & 1), t) : (Me(t), null);
      case 22:
      case 23:
        return kc(), r = t.memoizedState !== null, e !== null && e.memoizedState !== null !== r && (t.flags |= 8192), r && t.mode & 1 ? Qe & 1073741824 && (Me(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : Me(t), null;
      case 24:
        return null;
      case 25:
        return null;
    }
    throw Error(A(156, t.tag));
  }
  function gx(e, t) {
    switch (sc(t), t.tag) {
      case 1:
        return We(t.type) && fs(), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 3:
        return Ur(), oe(He), oe(Ne), mc(), e = t.flags, e & 65536 && !(e & 128) ? (t.flags = e & -65537 | 128, t) : null;
      case 5:
        return pc(t), null;
      case 13:
        if (oe(le), e = t.memoizedState, e !== null && e.dehydrated !== null) {
          if (t.alternate === null)
            throw Error(A(340));
          zr();
        }
        return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 19:
        return oe(le), null;
      case 4:
        return Ur(), null;
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
  var jo = !1, Re = !1, vx = typeof WeakSet == "function" ? WeakSet : Set, M = null;
  function Pr(e, t) {
    var n = e.ref;
    if (n !== null)
      if (typeof n == "function")
        try {
          n(null);
        } catch (r) {
          de(e, t, r);
        }
      else
        n.current = null;
  }
  function lu(e, t, n) {
    try {
      n();
    } catch (r) {
      de(e, t, r);
    }
  }
  var Sd = !1;
  function xx(e, t) {
    if (Wl = as, e = Cm(), ic(e)) {
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
                for (var p; f !== n || i !== 0 && f.nodeType !== 3 || (a = s + i), f !== o || r !== 0 && f.nodeType !== 3 || (l = s + r), f.nodeType === 3 && (s += f.nodeValue.length), (p = f.firstChild) !== null; )
                  d = f, f = p;
                for (; ; ) {
                  if (f === e)
                    break t;
                  if (d === n && ++u === i && (a = s), d === o && ++c === r && (l = s), (p = f.nextSibling) !== null)
                    break;
                  f = d, d = f.parentNode;
                }
                f = p;
              }
            n = a === -1 || l === -1 ? null : { start: a, end: l };
          } else
            n = null;
        }
      n = n || { start: 0, end: 0 };
    } else
      n = null;
    for (Gl = { focusedElem: e, selectionRange: n }, as = !1, M = t; M !== null; )
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
                    var v = g.memoizedProps, P = g.memoizedState, y = t.stateNode, h = y.getSnapshotBeforeUpdate(t.elementType === t.type ? v : gt(t.type, v), P);
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
            de(t, t.return, x);
          }
          if (e = t.sibling, e !== null) {
            e.return = t.return, M = e;
            break;
          }
          M = t.return;
        }
    return g = Sd, Sd = !1, g;
  }
  function Ei(e, t, n) {
    var r = t.updateQueue;
    if (r = r !== null ? r.lastEffect : null, r !== null) {
      var i = r = r.next;
      do {
        if ((i.tag & e) === e) {
          var o = i.destroy;
          i.destroy = void 0, o !== void 0 && lu(t, n, o);
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
  function uu(e) {
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
  function Sy(e) {
    var t = e.alternate;
    t !== null && (e.alternate = null, Sy(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && (delete t[_t], delete t[Bi], delete t[Yl], delete t[tx], delete t[nx])), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
  }
  function Ty(e) {
    return e.tag === 5 || e.tag === 3 || e.tag === 4;
  }
  function Td(e) {
    e:
      for (; ; ) {
        for (; e.sibling === null; ) {
          if (e.return === null || Ty(e.return))
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
  function cu(e, t, n) {
    var r = e.tag;
    if (r === 5 || r === 6)
      e = e.stateNode, t ? n.nodeType === 8 ? n.parentNode.insertBefore(e, t) : n.insertBefore(e, t) : (n.nodeType === 8 ? (t = n.parentNode, t.insertBefore(e, n)) : (t = n, t.appendChild(e)), n = n._reactRootContainer, n != null || t.onclick !== null || (t.onclick = cs));
    else if (r !== 4 && (e = e.child, e !== null))
      for (cu(e, t, n), e = e.sibling; e !== null; )
        cu(e, t, n), e = e.sibling;
  }
  function fu(e, t, n) {
    var r = e.tag;
    if (r === 5 || r === 6)
      e = e.stateNode, t ? n.insertBefore(e, t) : n.appendChild(e);
    else if (r !== 4 && (e = e.child, e !== null))
      for (fu(e, t, n), e = e.sibling; e !== null; )
        fu(e, t, n), e = e.sibling;
  }
  var _e = null, vt = !1;
  function Jt(e, t, n) {
    for (n = n.child; n !== null; )
      Ey(e, t, n), n = n.sibling;
  }
  function Ey(e, t, n) {
    if (At && typeof At.onCommitFiberUnmount == "function")
      try {
        At.onCommitFiberUnmount(Is, n);
      } catch {
      }
    switch (n.tag) {
      case 5:
        Re || Pr(n, t);
      case 6:
        var r = _e, i = vt;
        _e = null, Jt(e, t, n), _e = r, vt = i, _e !== null && (vt ? (e = _e, n = n.stateNode, e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n)) : _e.removeChild(n.stateNode));
        break;
      case 18:
        _e !== null && (vt ? (e = _e, n = n.stateNode, e.nodeType === 8 ? Ka(e.parentNode, n) : e.nodeType === 1 && Ka(e, n), Vi(e)) : Ka(_e, n.stateNode));
        break;
      case 4:
        r = _e, i = vt, _e = n.stateNode.containerInfo, vt = !0, Jt(e, t, n), _e = r, vt = i;
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        if (!Re && (r = n.updateQueue, r !== null && (r = r.lastEffect, r !== null))) {
          i = r = r.next;
          do {
            var o = i, s = o.destroy;
            o = o.tag, s !== void 0 && (o & 2 || o & 4) && lu(n, t, s), i = i.next;
          } while (i !== r);
        }
        Jt(e, t, n);
        break;
      case 1:
        if (!Re && (Pr(n, t), r = n.stateNode, typeof r.componentWillUnmount == "function"))
          try {
            r.props = n.memoizedProps, r.state = n.memoizedState, r.componentWillUnmount();
          } catch (a) {
            de(n, t, a);
          }
        Jt(e, t, n);
        break;
      case 21:
        Jt(e, t, n);
        break;
      case 22:
        n.mode & 1 ? (Re = (r = Re) || n.memoizedState !== null, Jt(e, t, n), Re = r) : Jt(e, t, n);
        break;
      default:
        Jt(e, t, n);
    }
  }
  function Ed(e) {
    var t = e.updateQueue;
    if (t !== null) {
      e.updateQueue = null;
      var n = e.stateNode;
      n === null && (n = e.stateNode = new vx()), t.forEach(function(r) {
        var i = Ax.bind(null, e, r);
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
                  _e = a.stateNode, vt = !1;
                  break e;
                case 3:
                  _e = a.stateNode.containerInfo, vt = !0;
                  break e;
                case 4:
                  _e = a.stateNode.containerInfo, vt = !0;
                  break e;
              }
              a = a.return;
            }
          if (_e === null)
            throw Error(A(160));
          Ey(o, s, i), _e = null, vt = !1;
          var l = i.alternate;
          l !== null && (l.return = null), i.return = null;
        } catch (u) {
          de(i, t, u);
        }
      }
    if (t.subtreeFlags & 12854)
      for (t = t.child; t !== null; )
        Cy(t, e), t = t.sibling;
  }
  function Cy(e, t) {
    var n = e.alternate, r = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        if (mt(t, e), Ct(e), r & 4) {
          try {
            Ei(3, e, e.return), Qs(3, e);
          } catch (v) {
            de(e, e.return, v);
          }
          try {
            Ei(5, e, e.return);
          } catch (v) {
            de(e, e.return, v);
          }
        }
        break;
      case 1:
        mt(t, e), Ct(e), r & 512 && n !== null && Pr(n, n.return);
        break;
      case 5:
        if (mt(t, e), Ct(e), r & 512 && n !== null && Pr(n, n.return), e.flags & 32) {
          var i = e.stateNode;
          try {
            Mi(i, "");
          } catch (v) {
            de(e, e.return, v);
          }
        }
        if (r & 4 && (i = e.stateNode, i != null)) {
          var o = e.memoizedProps, s = n !== null ? n.memoizedProps : o, a = e.type, l = e.updateQueue;
          if (e.updateQueue = null, l !== null)
            try {
              a === "input" && o.type === "radio" && o.name != null && Wp(i, o), Nl(a, s);
              var u = Nl(a, o);
              for (s = 0; s < l.length; s += 2) {
                var c = l[s], f = l[s + 1];
                c === "style" ? Xp(i, f) : c === "dangerouslySetInnerHTML" ? Qp(i, f) : c === "children" ? Mi(i, f) : Wu(i, c, f, u);
              }
              switch (a) {
                case "input":
                  Fl(i, o);
                  break;
                case "textarea":
                  Gp(i, o);
                  break;
                case "select":
                  var d = i._wrapperState.wasMultiple;
                  i._wrapperState.wasMultiple = !!o.multiple;
                  var p = o.value;
                  p != null ? Dr(i, !!o.multiple, p, !1) : d !== !!o.multiple && (o.defaultValue != null ? Dr(
                    i,
                    !!o.multiple,
                    o.defaultValue,
                    !0
                  ) : Dr(i, !!o.multiple, o.multiple ? [] : "", !1));
              }
              i[Bi] = o;
            } catch (v) {
              de(e, e.return, v);
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
            de(e, e.return, v);
          }
        }
        break;
      case 3:
        if (mt(t, e), Ct(e), r & 4 && n !== null && n.memoizedState.isDehydrated)
          try {
            Vi(t.containerInfo);
          } catch (v) {
            de(e, e.return, v);
          }
        break;
      case 4:
        mt(t, e), Ct(e);
        break;
      case 13:
        mt(t, e), Ct(e), i = e.child, i.flags & 8192 && (o = i.memoizedState !== null, i.stateNode.isHidden = o, !o || i.alternate !== null && i.alternate.memoizedState !== null || (Cc = ye())), r & 4 && Ed(e);
        break;
      case 22:
        if (c = n !== null && n.memoizedState !== null, e.mode & 1 ? (Re = (u = Re) || c, mt(t, e), Re = u) : mt(t, e), Ct(e), r & 8192) {
          if (u = e.memoizedState !== null, (e.stateNode.isHidden = u) && !c && e.mode & 1)
            for (M = e, c = e.child; c !== null; ) {
              for (f = M = c; M !== null; ) {
                switch (d = M, p = d.child, d.tag) {
                  case 0:
                  case 11:
                  case 14:
                  case 15:
                    Ei(4, d, d.return);
                    break;
                  case 1:
                    Pr(d, d.return);
                    var g = d.stateNode;
                    if (typeof g.componentWillUnmount == "function") {
                      r = d, n = d.return;
                      try {
                        t = r, g.props = t.memoizedProps, g.state = t.memoizedState, g.componentWillUnmount();
                      } catch (v) {
                        de(r, n, v);
                      }
                    }
                    break;
                  case 5:
                    Pr(d, d.return);
                    break;
                  case 22:
                    if (d.memoizedState !== null) {
                      Pd(f);
                      continue;
                    }
                }
                p !== null ? (p.return = d, M = p) : Pd(f);
              }
              c = c.sibling;
            }
          e:
            for (c = null, f = e; ; ) {
              if (f.tag === 5) {
                if (c === null) {
                  c = f;
                  try {
                    i = f.stateNode, u ? (o = i.style, typeof o.setProperty == "function" ? o.setProperty("display", "none", "important") : o.display = "none") : (a = f.stateNode, l = f.memoizedProps.style, s = l != null && l.hasOwnProperty("display") ? l.display : null, a.style.display = Yp("display", s));
                  } catch (v) {
                    de(e, e.return, v);
                  }
                }
              } else if (f.tag === 6) {
                if (c === null)
                  try {
                    f.stateNode.nodeValue = u ? "" : f.memoizedProps;
                  } catch (v) {
                    de(e, e.return, v);
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
        mt(t, e), Ct(e), r & 4 && Ed(e);
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
            if (Ty(n)) {
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
            var o = Td(e);
            fu(e, o, i);
            break;
          case 3:
          case 4:
            var s = r.stateNode.containerInfo, a = Td(e);
            cu(e, a, s);
            break;
          default:
            throw Error(A(161));
        }
      } catch (l) {
        de(e, e.return, l);
      }
      e.flags &= -3;
    }
    t & 4096 && (e.flags &= -4097);
  }
  function wx(e, t, n) {
    M = e, Py(e);
  }
  function Py(e, t, n) {
    for (var r = (e.mode & 1) !== 0; M !== null; ) {
      var i = M, o = i.child;
      if (i.tag === 22 && r) {
        var s = i.memoizedState !== null || jo;
        if (!s) {
          var a = i.alternate, l = a !== null && a.memoizedState !== null || Re;
          a = jo;
          var u = Re;
          if (jo = s, (Re = l) && !u)
            for (M = i; M !== null; )
              s = M, l = s.child, s.tag === 22 && s.memoizedState !== null ? kd(i) : l !== null ? (l.return = s, M = l) : kd(i);
          for (; o !== null; )
            M = o, Py(o), o = o.sibling;
          M = i, jo = a, Re = u;
        }
        Cd(e);
      } else
        i.subtreeFlags & 8772 && o !== null ? (o.return = i, M = o) : Cd(e);
    }
  }
  function Cd(e) {
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
                Re || Qs(5, t);
                break;
              case 1:
                var r = t.stateNode;
                if (t.flags & 4 && !Re)
                  if (n === null)
                    r.componentDidMount();
                  else {
                    var i = t.elementType === t.type ? n.memoizedProps : gt(t.type, n.memoizedProps);
                    r.componentDidUpdate(i, n.memoizedState, r.__reactInternalSnapshotBeforeUpdate);
                  }
                var o = t.updateQueue;
                o !== null && ad(t, o, r);
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
                  ad(t, s, n);
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
                      f !== null && Vi(f);
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
          Re || t.flags & 512 && uu(t);
        } catch (d) {
          de(t, t.return, d);
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
  function Pd(e) {
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
  function kd(e) {
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
              de(t, n, l);
            }
            break;
          case 1:
            var r = t.stateNode;
            if (typeof r.componentDidMount == "function") {
              var i = t.return;
              try {
                r.componentDidMount();
              } catch (l) {
                de(t, i, l);
              }
            }
            var o = t.return;
            try {
              uu(t);
            } catch (l) {
              de(t, o, l);
            }
            break;
          case 5:
            var s = t.return;
            try {
              uu(t);
            } catch (l) {
              de(t, s, l);
            }
        }
      } catch (l) {
        de(t, t.return, l);
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
  var Sx = Math.ceil, Ss = Zt.ReactCurrentDispatcher, Tc = Zt.ReactCurrentOwner, ft = Zt.ReactCurrentBatchConfig, W = 0, Ce = null, ve = null, Oe = 0, Qe = 0, kr = On(0), we = 0, Qi = null, Zn = 0, Ys = 0, Ec = 0, Ci = null, Be = null, Cc = 0, Wr = 1 / 0, Nt = null, Ts = !1, du = null, gn = null, Do = !1, cn = null, Es = 0, Pi = 0, hu = null, Yo = -1, Xo = 0;
  function $e() {
    return W & 6 ? ye() : Yo !== -1 ? Yo : Yo = ye();
  }
  function vn(e) {
    return e.mode & 1 ? W & 2 && Oe !== 0 ? Oe & -Oe : ix.transition !== null ? (Xo === 0 && (Xo = lm()), Xo) : (e = X, e !== 0 || (e = window.event, e = e === void 0 ? 16 : mm(e.type)), e) : 1;
  }
  function St(e, t, n, r) {
    if (50 < Pi)
      throw Pi = 0, hu = null, Error(A(185));
    no(e, n, r), (!(W & 2) || e !== Ce) && (e === Ce && (!(W & 2) && (Ys |= n), we === 4 && ln(e, Oe)), Ge(e, r), n === 1 && W === 0 && !(t.mode & 1) && (Wr = ye() + 500, Ws && Fn()));
  }
  function Ge(e, t) {
    var n = e.callbackNode;
    i1(e, t);
    var r = ss(e, e === Ce ? Oe : 0);
    if (r === 0)
      n !== null && Nf(n), e.callbackNode = null, e.callbackPriority = 0;
    else if (t = r & -r, e.callbackPriority !== t) {
      if (n != null && Nf(n), t === 1)
        e.tag === 0 ? rx(_d.bind(null, e)) : Rm(_d.bind(null, e)), J1(function() {
          !(W & 6) && Fn();
        }), n = null;
      else {
        switch (um(r)) {
          case 1:
            n = Xu;
            break;
          case 4:
            n = sm;
            break;
          case 16:
            n = os;
            break;
          case 536870912:
            n = am;
            break;
          default:
            n = os;
        }
        n = My(n, ky.bind(null, e));
      }
      e.callbackPriority = t, e.callbackNode = n;
    }
  }
  function ky(e, t) {
    if (Yo = -1, Xo = 0, W & 6)
      throw Error(A(327));
    var n = e.callbackNode;
    if (Vr() && e.callbackNode !== n)
      return null;
    var r = ss(e, e === Ce ? Oe : 0);
    if (r === 0)
      return null;
    if (r & 30 || r & e.expiredLanes || t)
      t = Cs(e, r);
    else {
      t = r;
      var i = W;
      W |= 2;
      var o = Ay();
      (Ce !== e || Oe !== t) && (Nt = null, Wr = ye() + 500, Wn(e, t));
      do
        try {
          Cx();
          break;
        } catch (a) {
          _y(e, a);
        }
      while (1);
      uc(), Ss.current = o, W = i, ve !== null ? t = 0 : (Ce = null, Oe = 0, t = we);
    }
    if (t !== 0) {
      if (t === 2 && (i = Il(e), i !== 0 && (r = i, t = pu(e, i))), t === 1)
        throw n = Qi, Wn(e, 0), ln(e, r), Ge(e, ye()), n;
      if (t === 6)
        ln(e, r);
      else {
        if (i = e.current.alternate, !(r & 30) && !Tx(i) && (t = Cs(e, r), t === 2 && (o = Il(e), o !== 0 && (r = o, t = pu(e, o))), t === 1))
          throw n = Qi, Wn(e, 0), ln(e, r), Ge(e, ye()), n;
        switch (e.finishedWork = i, e.finishedLanes = r, t) {
          case 0:
          case 1:
            throw Error(A(345));
          case 2:
            Vn(e, Be, Nt);
            break;
          case 3:
            if (ln(e, r), (r & 130023424) === r && (t = Cc + 500 - ye(), 10 < t)) {
              if (ss(e, 0) !== 0)
                break;
              if (i = e.suspendedLanes, (i & r) !== r) {
                $e(), e.pingedLanes |= e.suspendedLanes & i;
                break;
              }
              e.timeoutHandle = Ql(Vn.bind(null, e, Be, Nt), t);
              break;
            }
            Vn(e, Be, Nt);
            break;
          case 4:
            if (ln(e, r), (r & 4194240) === r)
              break;
            for (t = e.eventTimes, i = -1; 0 < r; ) {
              var s = 31 - wt(r);
              o = 1 << s, s = t[s], s > i && (i = s), r &= ~o;
            }
            if (r = i, r = ye() - r, r = (120 > r ? 120 : 480 > r ? 480 : 1080 > r ? 1080 : 1920 > r ? 1920 : 3e3 > r ? 3e3 : 4320 > r ? 4320 : 1960 * Sx(r / 1960)) - r, 10 < r) {
              e.timeoutHandle = Ql(Vn.bind(null, e, Be, Nt), r);
              break;
            }
            Vn(e, Be, Nt);
            break;
          case 5:
            Vn(e, Be, Nt);
            break;
          default:
            throw Error(A(329));
        }
      }
    }
    return Ge(e, ye()), e.callbackNode === n ? ky.bind(null, e) : null;
  }
  function pu(e, t) {
    var n = Ci;
    return e.current.memoizedState.isDehydrated && (Wn(e, t).flags |= 256), e = Cs(e, t), e !== 2 && (t = Be, Be = n, t !== null && mu(t)), e;
  }
  function mu(e) {
    Be === null ? Be = e : Be.push.apply(Be, e);
  }
  function Tx(e) {
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
  function ln(e, t) {
    for (t &= ~Ec, t &= ~Ys, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes; 0 < t; ) {
      var n = 31 - wt(t), r = 1 << n;
      e[n] = -1, t &= ~r;
    }
  }
  function _d(e) {
    if (W & 6)
      throw Error(A(327));
    Vr();
    var t = ss(e, 0);
    if (!(t & 1))
      return Ge(e, ye()), null;
    var n = Cs(e, t);
    if (e.tag !== 0 && n === 2) {
      var r = Il(e);
      r !== 0 && (t = r, n = pu(e, r));
    }
    if (n === 1)
      throw n = Qi, Wn(e, 0), ln(e, t), Ge(e, ye()), n;
    if (n === 6)
      throw Error(A(345));
    return e.finishedWork = e.current.alternate, e.finishedLanes = t, Vn(e, Be, Nt), Ge(e, ye()), null;
  }
  function Pc(e, t) {
    var n = W;
    W |= 1;
    try {
      return e(t);
    } finally {
      W = n, W === 0 && (Wr = ye() + 500, Ws && Fn());
    }
  }
  function qn(e) {
    cn !== null && cn.tag === 0 && !(W & 6) && Vr();
    var t = W;
    W |= 1;
    var n = ft.transition, r = X;
    try {
      if (ft.transition = null, X = 1, e)
        return e();
    } finally {
      X = r, ft.transition = n, W = t, !(W & 6) && Fn();
    }
  }
  function kc() {
    Qe = kr.current, oe(kr);
  }
  function Wn(e, t) {
    e.finishedWork = null, e.finishedLanes = 0;
    var n = e.timeoutHandle;
    if (n !== -1 && (e.timeoutHandle = -1, q1(n)), ve !== null)
      for (n = ve.return; n !== null; ) {
        var r = n;
        switch (sc(r), r.tag) {
          case 1:
            r = r.type.childContextTypes, r != null && fs();
            break;
          case 3:
            Ur(), oe(He), oe(Ne), mc();
            break;
          case 5:
            pc(r);
            break;
          case 4:
            Ur();
            break;
          case 13:
            oe(le);
            break;
          case 19:
            oe(le);
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
    if (Ce = e, ve = e = xn(e.current, null), Oe = Qe = t, we = 0, Qi = null, Ec = Ys = Zn = 0, Be = Ci = null, Bn !== null) {
      for (t = 0; t < Bn.length; t++)
        if (n = Bn[t], r = n.interleaved, r !== null) {
          n.interleaved = null;
          var i = r.next, o = n.pending;
          if (o !== null) {
            var s = o.next;
            o.next = i, r.next = s;
          }
          n.pending = r;
        }
      Bn = null;
    }
    return e;
  }
  function _y(e, t) {
    do {
      var n = ve;
      try {
        if (uc(), Go.current = ws, xs) {
          for (var r = ce.memoizedState; r !== null; ) {
            var i = r.queue;
            i !== null && (i.pending = null), r = r.next;
          }
          xs = !1;
        }
        if (Xn = 0, Ee = xe = ce = null, Ti = !1, Wi = 0, Tc.current = null, n === null || n.return === null) {
          we = 1, Qi = t, ve = null;
          break;
        }
        e: {
          var o = e, s = n.return, a = n, l = t;
          if (t = Oe, a.flags |= 32768, l !== null && typeof l == "object" && typeof l.then == "function") {
            var u = l, c = a, f = c.tag;
            if (!(c.mode & 1) && (f === 0 || f === 11 || f === 15)) {
              var d = c.alternate;
              d ? (c.updateQueue = d.updateQueue, c.memoizedState = d.memoizedState, c.lanes = d.lanes) : (c.updateQueue = null, c.memoizedState = null);
            }
            var p = pd(s);
            if (p !== null) {
              p.flags &= -257, md(p, s, a, o, t), p.mode & 1 && hd(o, u, t), t = p, l = u;
              var g = t.updateQueue;
              if (g === null) {
                var v = /* @__PURE__ */ new Set();
                v.add(l), t.updateQueue = v;
              } else
                g.add(l);
              break e;
            } else {
              if (!(t & 1)) {
                hd(o, u, t), _c();
                break e;
              }
              l = Error(A(426));
            }
          } else if (ae && a.mode & 1) {
            var P = pd(s);
            if (P !== null) {
              !(P.flags & 65536) && (P.flags |= 256), md(P, s, a, o, t), ac(Hr(l, a));
              break e;
            }
          }
          o = l = Hr(l, a), we !== 4 && (we = 2), Ci === null ? Ci = [o] : Ci.push(o), o = s;
          do {
            switch (o.tag) {
              case 3:
                o.flags |= 65536, t &= -t, o.lanes |= t;
                var y = cy(o, l, t);
                sd(o, y);
                break e;
              case 1:
                a = l;
                var h = o.type, m = o.stateNode;
                if (!(o.flags & 128) && (typeof h.getDerivedStateFromError == "function" || m !== null && typeof m.componentDidCatch == "function" && (gn === null || !gn.has(m)))) {
                  o.flags |= 65536, t &= -t, o.lanes |= t;
                  var x = fy(o, a, t);
                  sd(o, x);
                  break e;
                }
            }
            o = o.return;
          } while (o !== null);
        }
        Fy(n);
      } catch (E) {
        t = E, ve === n && n !== null && (ve = n = n.return);
        continue;
      }
      break;
    } while (1);
  }
  function Ay() {
    var e = Ss.current;
    return Ss.current = ws, e === null ? ws : e;
  }
  function _c() {
    (we === 0 || we === 3 || we === 2) && (we = 4), Ce === null || !(Zn & 268435455) && !(Ys & 268435455) || ln(Ce, Oe);
  }
  function Cs(e, t) {
    var n = W;
    W |= 2;
    var r = Ay();
    (Ce !== e || Oe !== t) && (Nt = null, Wn(e, t));
    do
      try {
        Ex();
        break;
      } catch (i) {
        _y(e, i);
      }
    while (1);
    if (uc(), W = n, Ss.current = r, ve !== null)
      throw Error(A(261));
    return Ce = null, Oe = 0, we;
  }
  function Ex() {
    for (; ve !== null; )
      Oy(ve);
  }
  function Cx() {
    for (; ve !== null && !Y0(); )
      Oy(ve);
  }
  function Oy(e) {
    var t = Dy(e.alternate, e, Qe);
    e.memoizedProps = e.pendingProps, t === null ? Fy(e) : ve = t, Tc.current = null;
  }
  function Fy(e) {
    var t = e;
    do {
      var n = t.alternate;
      if (e = t.return, t.flags & 32768) {
        if (n = gx(n, t), n !== null) {
          n.flags &= 32767, ve = n;
          return;
        }
        if (e !== null)
          e.flags |= 32768, e.subtreeFlags = 0, e.deletions = null;
        else {
          we = 6, ve = null;
          return;
        }
      } else if (n = yx(n, t, Qe), n !== null) {
        ve = n;
        return;
      }
      if (t = t.sibling, t !== null) {
        ve = t;
        return;
      }
      ve = t = e;
    } while (t !== null);
    we === 0 && (we = 5);
  }
  function Vn(e, t, n) {
    var r = X, i = ft.transition;
    try {
      ft.transition = null, X = 1, Px(e, t, n, r);
    } finally {
      ft.transition = i, X = r;
    }
    return null;
  }
  function Px(e, t, n, r) {
    do
      Vr();
    while (cn !== null);
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
    if (o1(e, o), e === Ce && (ve = Ce = null, Oe = 0), !(n.subtreeFlags & 2064) && !(n.flags & 2064) || Do || (Do = !0, My(os, function() {
      return Vr(), null;
    })), o = (n.flags & 15990) !== 0, n.subtreeFlags & 15990 || o) {
      o = ft.transition, ft.transition = null;
      var s = X;
      X = 1;
      var a = W;
      W |= 4, Tc.current = null, xx(e, n), Cy(n, e), W1(Gl), as = !!Wl, Gl = Wl = null, e.current = n, wx(n), X0(), W = a, X = s, ft.transition = o;
    } else
      e.current = n;
    if (Do && (Do = !1, cn = e, Es = i), o = e.pendingLanes, o === 0 && (gn = null), J0(n.stateNode), Ge(e, ye()), t !== null)
      for (r = e.onRecoverableError, n = 0; n < t.length; n++)
        i = t[n], r(i.value, { componentStack: i.stack, digest: i.digest });
    if (Ts)
      throw Ts = !1, e = du, du = null, e;
    return Es & 1 && e.tag !== 0 && Vr(), o = e.pendingLanes, o & 1 ? e === hu ? Pi++ : (Pi = 0, hu = e) : Pi = 0, Fn(), null;
  }
  function Vr() {
    if (cn !== null) {
      var e = um(Es), t = ft.transition, n = X;
      try {
        if (ft.transition = null, X = 16 > e ? 16 : e, cn === null)
          var r = !1;
        else {
          if (e = cn, cn = null, Es = 0, W & 6)
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
                        Ei(8, c, o);
                    }
                    var f = c.child;
                    if (f !== null)
                      f.return = c, M = f;
                    else
                      for (; M !== null; ) {
                        c = M;
                        var d = c.sibling, p = c.return;
                        if (Sy(c), c === u) {
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
                      var P = v.sibling;
                      v.sibling = null, v = P;
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
                    } catch (E) {
                      de(a, a.return, E);
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
          if (W = i, Fn(), At && typeof At.onPostCommitFiberRoot == "function")
            try {
              At.onPostCommitFiberRoot(Is, e);
            } catch {
            }
          r = !0;
        }
        return r;
      } finally {
        X = n, ft.transition = t;
      }
    }
    return !1;
  }
  function Ad(e, t, n) {
    t = Hr(n, t), t = cy(e, t, 1), e = yn(e, t, 1), t = $e(), e !== null && (no(e, 1, t), Ge(e, t));
  }
  function de(e, t, n) {
    if (e.tag === 3)
      Ad(e, e, n);
    else
      for (; t !== null; ) {
        if (t.tag === 3) {
          Ad(t, e, n);
          break;
        } else if (t.tag === 1) {
          var r = t.stateNode;
          if (typeof t.type.getDerivedStateFromError == "function" || typeof r.componentDidCatch == "function" && (gn === null || !gn.has(r))) {
            e = Hr(n, e), e = fy(t, e, 1), t = yn(t, e, 1), e = $e(), t !== null && (no(t, 1, e), Ge(t, e));
            break;
          }
        }
        t = t.return;
      }
  }
  function kx(e, t, n) {
    var r = e.pingCache;
    r !== null && r.delete(t), t = $e(), e.pingedLanes |= e.suspendedLanes & n, Ce === e && (Oe & n) === n && (we === 4 || we === 3 && (Oe & 130023424) === Oe && 500 > ye() - Cc ? Wn(e, 0) : Ec |= n), Ge(e, t);
  }
  function jy(e, t) {
    t === 0 && (e.mode & 1 ? (t = To, To <<= 1, !(To & 130023424) && (To = 4194304)) : t = 1);
    var n = $e();
    e = Qt(e, t), e !== null && (no(e, t, n), Ge(e, n));
  }
  function _x(e) {
    var t = e.memoizedState, n = 0;
    t !== null && (n = t.retryLane), jy(e, n);
  }
  function Ax(e, t) {
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
    r !== null && r.delete(t), jy(e, n);
  }
  var Dy;
  Dy = function(e, t, n) {
    if (e !== null)
      if (e.memoizedProps !== t.pendingProps || He.current)
        Ue = !0;
      else {
        if (!(e.lanes & n) && !(t.flags & 128))
          return Ue = !1, mx(e, t, n);
        Ue = !!(e.flags & 131072);
      }
    else
      Ue = !1, ae && t.flags & 1048576 && Nm(t, ps, t.index);
    switch (t.lanes = 0, t.tag) {
      case 2:
        var r = t.type;
        Qo(e, t), e = t.pendingProps;
        var i = Ir(t, Ne.current);
        Lr(t, n), i = gc(null, t, r, e, i, n);
        var o = vc();
        return t.flags |= 1, typeof i == "object" && i !== null && typeof i.render == "function" && i.$$typeof === void 0 ? (t.tag = 1, t.memoizedState = null, t.updateQueue = null, We(r) ? (o = !0, ds(t)) : o = !1, t.memoizedState = i.state !== null && i.state !== void 0 ? i.state : null, dc(t), i.updater = Gs, t.stateNode = i, i._reactInternals = t, tu(t, r, e, n), t = iu(null, t, r, !0, o, n)) : (t.tag = 0, ae && o && oc(t), Ve(null, t, i, n), t = t.child), t;
      case 16:
        r = t.elementType;
        e: {
          switch (Qo(e, t), e = t.pendingProps, i = r._init, r = i(r._payload), t.type = r, i = t.tag = Fx(r), e = gt(r, e), i) {
            case 0:
              t = ru(null, t, r, e, n);
              break e;
            case 1:
              t = vd(null, t, r, e, n);
              break e;
            case 11:
              t = yd(null, t, r, e, n);
              break e;
            case 14:
              t = gd(null, t, r, gt(r.type, e), n);
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
        return r = t.type, i = t.pendingProps, i = t.elementType === r ? i : gt(r, i), ru(e, t, r, i, n);
      case 1:
        return r = t.type, i = t.pendingProps, i = t.elementType === r ? i : gt(r, i), vd(e, t, r, i, n);
      case 3:
        e: {
          if (my(t), e === null)
            throw Error(A(387));
          r = t.pendingProps, o = t.memoizedState, i = o.element, bm(e, t), gs(t, r, null, n);
          var s = t.memoizedState;
          if (r = s.element, o.isDehydrated)
            if (o = { element: r, isDehydrated: !1, cache: s.cache, pendingSuspenseBoundaries: s.pendingSuspenseBoundaries, transitions: s.transitions }, t.updateQueue.baseState = o, t.memoizedState = o, t.flags & 256) {
              i = Hr(Error(A(423)), t), t = xd(e, t, r, n, i);
              break e;
            } else if (r !== i) {
              i = Hr(Error(A(424)), t), t = xd(e, t, r, n, i);
              break e;
            } else
              for (Xe = mn(t.stateNode.containerInfo.firstChild), Je = t, ae = !0, xt = null, n = Um(t, null, r, n), t.child = n; n; )
                n.flags = n.flags & -3 | 4096, n = n.sibling;
          else {
            if (zr(), r === i) {
              t = Yt(e, t, n);
              break e;
            }
            Ve(e, t, r, n);
          }
          t = t.child;
        }
        return t;
      case 5:
        return Hm(t), e === null && ql(t), r = t.type, i = t.pendingProps, o = e !== null ? e.memoizedProps : null, s = i.children, Kl(r, i) ? s = null : o !== null && Kl(r, o) && (t.flags |= 32), py(e, t), Ve(e, t, s, n), t.child;
      case 6:
        return e === null && ql(t), null;
      case 13:
        return yy(e, t, n);
      case 4:
        return hc(t, t.stateNode.containerInfo), r = t.pendingProps, e === null ? t.child = Br(t, null, r, n) : Ve(e, t, r, n), t.child;
      case 11:
        return r = t.type, i = t.pendingProps, i = t.elementType === r ? i : gt(r, i), yd(e, t, r, i, n);
      case 7:
        return Ve(e, t, t.pendingProps, n), t.child;
      case 8:
        return Ve(e, t, t.pendingProps.children, n), t.child;
      case 12:
        return Ve(e, t, t.pendingProps.children, n), t.child;
      case 10:
        e: {
          if (r = t.type._context, i = t.pendingProps, o = t.memoizedProps, s = i.value, te(ms, r._currentValue), r._currentValue = s, o !== null)
            if (Tt(o.value, s)) {
              if (o.children === i.children && !He.current) {
                t = Yt(e, t, n);
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
                        l = Ut(-1, n & -n), l.tag = 2;
                        var u = o.updateQueue;
                        if (u !== null) {
                          u = u.shared;
                          var c = u.pending;
                          c === null ? l.next = l : (l.next = c.next, c.next = l), u.pending = l;
                        }
                      }
                      o.lanes |= n, l = o.alternate, l !== null && (l.lanes |= n), Jl(
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
                  s.lanes |= n, a = s.alternate, a !== null && (a.lanes |= n), Jl(s, n, t), s = o.sibling;
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
        return i = t.type, r = t.pendingProps.children, Lr(t, n), i = dt(i), r = r(i), t.flags |= 1, Ve(e, t, r, n), t.child;
      case 14:
        return r = t.type, i = gt(r, t.pendingProps), i = gt(r.type, i), gd(e, t, r, i, n);
      case 15:
        return dy(e, t, t.type, t.pendingProps, n);
      case 17:
        return r = t.type, i = t.pendingProps, i = t.elementType === r ? i : gt(r, i), Qo(e, t), t.tag = 1, We(r) ? (e = !0, ds(t)) : e = !1, Lr(t, n), zm(t, r, i), tu(t, r, i, n), iu(null, t, r, !0, e, n);
      case 19:
        return gy(e, t, n);
      case 22:
        return hy(e, t, n);
    }
    throw Error(A(156, t.tag));
  };
  function My(e, t) {
    return om(e, t);
  }
  function Ox(e, t, n, r) {
    this.tag = e, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = r, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function ct(e, t, n, r) {
    return new Ox(e, t, n, r);
  }
  function Ac(e) {
    return e = e.prototype, !(!e || !e.isReactComponent);
  }
  function Fx(e) {
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
  function xn(e, t) {
    var n = e.alternate;
    return n === null ? (n = ct(e.tag, t, e.key, e.mode), n.elementType = e.elementType, n.type = e.type, n.stateNode = e.stateNode, n.alternate = e, e.alternate = n) : (n.pendingProps = t, n.type = e.type, n.flags = 0, n.subtreeFlags = 0, n.deletions = null), n.flags = e.flags & 14680064, n.childLanes = e.childLanes, n.lanes = e.lanes, n.child = e.child, n.memoizedProps = e.memoizedProps, n.memoizedState = e.memoizedState, n.updateQueue = e.updateQueue, t = e.dependencies, n.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }, n.sibling = e.sibling, n.index = e.index, n.ref = e.ref, n;
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
          case yr:
            return Gn(n.children, i, o, t);
          case Gu:
            s = 8, i |= 8;
            break;
          case Pl:
            return e = ct(12, n, t, i | 2), e.elementType = Pl, e.lanes = o, e;
          case kl:
            return e = ct(13, n, t, i), e.elementType = kl, e.lanes = o, e;
          case _l:
            return e = ct(19, n, t, i), e.elementType = _l, e.lanes = o, e;
          case Bp:
            return Xs(n, i, o, t);
          default:
            if (typeof e == "object" && e !== null)
              switch (e.$$typeof) {
                case Ip:
                  s = 10;
                  break e;
                case zp:
                  s = 9;
                  break e;
                case Ku:
                  s = 11;
                  break e;
                case Qu:
                  s = 14;
                  break e;
                case nn:
                  s = 16, r = null;
                  break e;
              }
            throw Error(A(130, e == null ? e : typeof e, ""));
        }
    return t = ct(s, n, t, i), t.elementType = e, t.type = r, t.lanes = o, t;
  }
  function Gn(e, t, n, r) {
    return e = ct(7, e, r, t), e.lanes = n, e;
  }
  function Xs(e, t, n, r) {
    return e = ct(22, e, r, t), e.elementType = Bp, e.lanes = n, e.stateNode = { isHidden: !1 }, e;
  }
  function tl(e, t, n) {
    return e = ct(6, e, null, t), e.lanes = n, e;
  }
  function nl(e, t, n) {
    return t = ct(4, e.children !== null ? e.children : [], e.key, t), t.lanes = n, t.stateNode = { containerInfo: e.containerInfo, pendingChildren: null, implementation: e.implementation }, t;
  }
  function jx(e, t, n, r, i) {
    this.tag = t, this.containerInfo = e, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = La(0), this.expirationTimes = La(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = La(0), this.identifierPrefix = r, this.onRecoverableError = i, this.mutableSourceEagerHydrationData = null;
  }
  function Oc(e, t, n, r, i, o, s, a, l) {
    return e = new jx(e, t, n, a, l), t === 1 ? (t = 1, o === !0 && (t |= 8)) : t = 0, o = ct(3, null, null, t), e.current = o, o.stateNode = e, o.memoizedState = { element: r, isDehydrated: n, cache: null, transitions: null, pendingSuspenseBoundaries: null }, dc(o), e;
  }
  function Dx(e, t, n) {
    var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return { $$typeof: mr, key: r == null ? null : "" + r, children: e, containerInfo: t, implementation: n };
  }
  function Ry(e) {
    if (!e)
      return Cn;
    e = e._reactInternals;
    e: {
      if (nr(e) !== e || e.tag !== 1)
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
        return Mm(e, n, t);
    }
    return t;
  }
  function Ny(e, t, n, r, i, o, s, a, l) {
    return e = Oc(n, r, !0, e, i, o, s, a, l), e.context = Ry(null), n = e.current, r = $e(), i = vn(n), o = Ut(r, i), o.callback = t ?? null, yn(n, o, i), e.current.lanes = i, no(e, i, r), Ge(e, r), e;
  }
  function Zs(e, t, n, r) {
    var i = t.current, o = $e(), s = vn(i);
    return n = Ry(n), t.context === null ? t.context = n : t.pendingContext = n, t = Ut(o, s), t.payload = { element: e }, r = r === void 0 ? null : r, r !== null && (t.callback = r), e = yn(i, t, s), e !== null && (St(e, i, s, o), Wo(e, i, s)), s;
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
  function Od(e, t) {
    if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
      var n = e.retryLane;
      e.retryLane = n !== 0 && n < t ? n : t;
    }
  }
  function Fc(e, t) {
    Od(e, t), (e = e.alternate) && Od(e, t);
  }
  function Mx() {
    return null;
  }
  var Ly = typeof reportError == "function" ? reportError : function(e) {
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
      qn(function() {
        Zs(null, e, null, null);
      }), t[Kt] = null;
    }
  };
  function qs(e) {
    this._internalRoot = e;
  }
  qs.prototype.unstable_scheduleHydration = function(e) {
    if (e) {
      var t = dm();
      e = { blockedOn: null, target: e, priority: t };
      for (var n = 0; n < an.length && t !== 0 && t < an[n].priority; n++)
        ;
      an.splice(n, 0, e), n === 0 && pm(e);
    }
  };
  function Dc(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11);
  }
  function Js(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "));
  }
  function Fd() {
  }
  function Rx(e, t, n, r, i) {
    if (i) {
      if (typeof r == "function") {
        var o = r;
        r = function() {
          var u = Ps(s);
          o.call(u);
        };
      }
      var s = Ny(t, r, e, 0, null, !1, !1, "", Fd);
      return e._reactRootContainer = s, e[Kt] = s.current, Ii(e.nodeType === 8 ? e.parentNode : e), qn(), s;
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
    var l = Oc(e, 0, !1, null, null, !1, !1, "", Fd);
    return e._reactRootContainer = l, e[Kt] = l.current, Ii(e.nodeType === 8 ? e.parentNode : e), qn(function() {
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
      s = Rx(n, t, e, i, r);
    return Ps(s);
  }
  cm = function(e) {
    switch (e.tag) {
      case 3:
        var t = e.stateNode;
        if (t.current.memoizedState.isDehydrated) {
          var n = pi(t.pendingLanes);
          n !== 0 && (Zu(t, n | 1), Ge(t, ye()), !(W & 6) && (Wr = ye() + 500, Fn()));
        }
        break;
      case 13:
        qn(function() {
          var r = Qt(e, 1);
          if (r !== null) {
            var i = $e();
            St(r, e, 1, i);
          }
        }), Fc(e, 1);
    }
  };
  qu = function(e) {
    if (e.tag === 13) {
      var t = Qt(e, 134217728);
      if (t !== null) {
        var n = $e();
        St(t, e, 134217728, n);
      }
      Fc(e, 134217728);
    }
  };
  fm = function(e) {
    if (e.tag === 13) {
      var t = vn(e), n = Qt(e, t);
      if (n !== null) {
        var r = $e();
        St(n, e, t, r);
      }
      Fc(e, t);
    }
  };
  dm = function() {
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
  Vl = function(e, t, n) {
    switch (t) {
      case "input":
        if (Fl(e, n), t = n.name, n.type === "radio" && t != null) {
          for (n = e; n.parentNode; )
            n = n.parentNode;
          for (n = n.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'), t = 0; t < n.length; t++) {
            var r = n[t];
            if (r !== e && r.form === e.form) {
              var i = Hs(r);
              if (!i)
                throw Error(A(90));
              Hp(r), Fl(r, i);
            }
          }
        }
        break;
      case "textarea":
        Gp(e, n);
        break;
      case "select":
        t = n.value, t != null && Dr(e, !!n.multiple, t, !1);
    }
  };
  Jp = Pc;
  em = qn;
  var Nx = { usingClientEntryPoint: !1, Events: [io, wr, Hs, Zp, qp, Pc] }, li = { findFiberByHostInstance: zn, bundleType: 0, version: "18.2.0", rendererPackageName: "react-dom" }, Lx = { bundleType: li.bundleType, version: li.version, rendererPackageName: li.rendererPackageName, rendererConfig: li.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: Zt.ReactCurrentDispatcher, findHostInstanceByFiber: function(e) {
    return e = rm(e), e === null ? null : e.stateNode;
  }, findFiberByHostInstance: li.findFiberByHostInstance || Mx, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.2.0-next-9e3b772b8-20220608" };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var Mo = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Mo.isDisabled && Mo.supportsFiber)
      try {
        Is = Mo.inject(Lx), At = Mo;
      } catch {
      }
  }
  nt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Nx;
  nt.createPortal = function(e, t) {
    var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!Dc(t))
      throw Error(A(200));
    return Dx(e, t, null, n);
  };
  nt.createRoot = function(e, t) {
    if (!Dc(e))
      throw Error(A(299));
    var n = !1, r = "", i = Ly;
    return t != null && (t.unstable_strictMode === !0 && (n = !0), t.identifierPrefix !== void 0 && (r = t.identifierPrefix), t.onRecoverableError !== void 0 && (i = t.onRecoverableError)), t = Oc(e, 1, !1, null, null, n, !1, r, i), e[Kt] = t.current, Ii(e.nodeType === 8 ? e.parentNode : e), new jc(t);
  };
  nt.findDOMNode = function(e) {
    if (e == null)
      return null;
    if (e.nodeType === 1)
      return e;
    var t = e._reactInternals;
    if (t === void 0)
      throw typeof e.render == "function" ? Error(A(188)) : (e = Object.keys(e).join(","), Error(A(268, e)));
    return e = rm(t), e = e === null ? null : e.stateNode, e;
  };
  nt.flushSync = function(e) {
    return qn(e);
  };
  nt.hydrate = function(e, t, n) {
    if (!Js(t))
      throw Error(A(200));
    return ea(null, e, t, !0, n);
  };
  nt.hydrateRoot = function(e, t, n) {
    if (!Dc(e))
      throw Error(A(405));
    var r = n != null && n.hydratedSources || null, i = !1, o = "", s = Ly;
    if (n != null && (n.unstable_strictMode === !0 && (i = !0), n.identifierPrefix !== void 0 && (o = n.identifierPrefix), n.onRecoverableError !== void 0 && (s = n.onRecoverableError)), t = Ny(t, null, e, 1, n ?? null, i, !1, o, s), e[Kt] = t.current, Ii(e), r)
      for (e = 0; e < r.length; e++)
        n = r[e], i = n._getVersion, i = i(n._source), t.mutableSourceEagerHydrationData == null ? t.mutableSourceEagerHydrationData = [n, i] : t.mutableSourceEagerHydrationData.push(
          n,
          i
        );
    return new qs(t);
  };
  nt.render = function(e, t, n) {
    if (!Js(t))
      throw Error(A(200));
    return ea(null, e, t, !1, n);
  };
  nt.unmountComponentAtNode = function(e) {
    if (!Js(e))
      throw Error(A(40));
    return e._reactRootContainer ? (qn(function() {
      ea(null, null, e, !1, function() {
        e._reactRootContainer = null, e[Kt] = null;
      });
    }), !0) : !1;
  };
  nt.unstable_batchedUpdates = Pc;
  nt.unstable_renderSubtreeIntoContainer = function(e, t, n, r) {
    if (!Js(n))
      throw Error(A(200));
    if (e == null || e._reactInternals === void 0)
      throw Error(A(38));
    return ea(e, t, n, !1, r);
  };
  nt.version = "18.2.0-next-9e3b772b8-20220608";
  function Vy() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Vy);
      } catch (e) {
        console.error(e);
      }
  }
  Vy(), Np.exports = nt;
  var Vx = Np.exports, jd = Vx;
  El.createRoot = jd.createRoot, El.hydrateRoot = jd.hydrateRoot;
  function rr(e) {
    this._maxSize = e, this.clear();
  }
  rr.prototype.clear = function() {
    this._size = 0, this._values = /* @__PURE__ */ Object.create(null);
  };
  rr.prototype.get = function(e) {
    return this._values[e];
  };
  rr.prototype.set = function(e, t) {
    return this._size >= this._maxSize && this.clear(), e in this._values || this._size++, this._values[e] = t;
  };
  var $x = /[^.^\]^[]+|(?=\[\]|\.\.)/g, $y = /^\d+$/, bx = /^\d/, Ix = /[~`!#$%\^&*+=\-\[\]\\';,/{}|\\":<>\?]/g, zx = /^\s*(['"]?)(.*?)(\1)\s*$/, Mc = 512, Dd = new rr(Mc), Md = new rr(Mc), Rd = new rr(Mc), Kn = {
    Cache: rr,
    split: yu,
    normalizePath: rl,
    setter: function(e) {
      var t = rl(e);
      return Md.get(e) || Md.set(e, function(r, i) {
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
      var n = rl(e);
      return Rd.get(e) || Rd.set(e, function(i) {
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
        return t + (Rc(n) || $y.test(n) ? "[" + n + "]" : (t ? "." : "") + n);
      }, "");
    },
    forEach: function(e, t, n) {
      Bx(Array.isArray(e) ? e : yu(e), t, n);
    }
  };
  function rl(e) {
    return Dd.get(e) || Dd.set(
      e,
      yu(e).map(function(t) {
        return t.replace(zx, "$2");
      })
    );
  }
  function yu(e) {
    return e.match($x) || [""];
  }
  function Bx(e, t, n) {
    var r = e.length, i, o, s, a;
    for (o = 0; o < r; o++)
      i = e[o], i && (Wx(i) && (i = '"' + i + '"'), a = Rc(i), s = !a && /^\d+$/.test(i), t.call(n, i, a, s, o, e));
  }
  function Rc(e) {
    return typeof e == "string" && e && ["'", '"'].indexOf(e.charAt(0)) !== -1;
  }
  function Ux(e) {
    return e.match(bx) && !e.match($y);
  }
  function Hx(e) {
    return Ix.test(e);
  }
  function Wx(e) {
    return !Rc(e) && (Ux(e) || Hx(e));
  }
  const Gx = /[A-Z\xc0-\xd6\xd8-\xde]?[a-z\xdf-\xf6\xf8-\xff]+(?:['’](?:d|ll|m|re|s|t|ve))?(?=[\xac\xb1\xd7\xf7\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\xbf\u2000-\u206f \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000]|[A-Z\xc0-\xd6\xd8-\xde]|$)|(?:[A-Z\xc0-\xd6\xd8-\xde]|[^\ud800-\udfff\xac\xb1\xd7\xf7\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\xbf\u2000-\u206f \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\d+\u2700-\u27bfa-z\xdf-\xf6\xf8-\xffA-Z\xc0-\xd6\xd8-\xde])+(?:['’](?:D|LL|M|RE|S|T|VE))?(?=[\xac\xb1\xd7\xf7\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\xbf\u2000-\u206f \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000]|[A-Z\xc0-\xd6\xd8-\xde](?:[a-z\xdf-\xf6\xf8-\xff]|[^\ud800-\udfff\xac\xb1\xd7\xf7\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\xbf\u2000-\u206f \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\d+\u2700-\u27bfa-z\xdf-\xf6\xf8-\xffA-Z\xc0-\xd6\xd8-\xde])|$)|[A-Z\xc0-\xd6\xd8-\xde]?(?:[a-z\xdf-\xf6\xf8-\xff]|[^\ud800-\udfff\xac\xb1\xd7\xf7\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\xbf\u2000-\u206f \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\d+\u2700-\u27bfa-z\xdf-\xf6\xf8-\xffA-Z\xc0-\xd6\xd8-\xde])+(?:['’](?:d|ll|m|re|s|t|ve))?|[A-Z\xc0-\xd6\xd8-\xde]+(?:['’](?:D|LL|M|RE|S|T|VE))?|\d*(?:1ST|2ND|3RD|(?![123])\dTH)(?=\b|[a-z_])|\d*(?:1st|2nd|3rd|(?![123])\dth)(?=\b|[A-Z_])|\d+|(?:[\u2700-\u27bf]|(?:\ud83c[\udde6-\uddff]){2}|[\ud800-\udbff][\udc00-\udfff])[\ufe0e\ufe0f]?(?:[\u0300-\u036f\ufe20-\ufe2f\u20d0-\u20ff]|\ud83c[\udffb-\udfff])?(?:\u200d(?:[^\ud800-\udfff]|(?:\ud83c[\udde6-\uddff]){2}|[\ud800-\udbff][\udc00-\udfff])[\ufe0e\ufe0f]?(?:[\u0300-\u036f\ufe20-\ufe2f\u20d0-\u20ff]|\ud83c[\udffb-\udfff])?)*/g, ta = (e) => e.match(Gx) || [], na = (e) => e[0].toUpperCase() + e.slice(1), Nc = (e, t) => ta(e).join(t).toLowerCase(), by = (e) => ta(e).reduce(
    (t, n) => `${t}${t ? n[0].toUpperCase() + n.slice(1).toLowerCase() : n.toLowerCase()}`,
    ""
  ), Kx = (e) => na(by(e)), Qx = (e) => Nc(e, "_"), Yx = (e) => Nc(e, "-"), Xx = (e) => na(Nc(e, " ")), Zx = (e) => ta(e).map(na).join(" ");
  var il = {
    words: ta,
    upperFirst: na,
    camelCase: by,
    pascalCase: Kx,
    snakeCase: Qx,
    kebabCase: Yx,
    sentenceCase: Xx,
    titleCase: Zx
  }, Lc = { exports: {} };
  Lc.exports = function(e) {
    return Iy(qx(e), e);
  };
  Lc.exports.array = Iy;
  function Iy(e, t) {
    var n = e.length, r = new Array(n), i = {}, o = n, s = Jx(t), a = ew(e);
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
        var p = s.get(u) || /* @__PURE__ */ new Set();
        if (p = Array.from(p), c = p.length) {
          f.add(u);
          do {
            var g = p[--c];
            l(g, a.get(g), f);
          } while (c);
          f.delete(u);
        }
        r[--n] = u;
      }
    }
  }
  function qx(e) {
    for (var t = /* @__PURE__ */ new Set(), n = 0, r = e.length; n < r; n++) {
      var i = e[n];
      t.add(i[0]), t.add(i[1]);
    }
    return Array.from(t);
  }
  function Jx(e) {
    for (var t = /* @__PURE__ */ new Map(), n = 0, r = e.length; n < r; n++) {
      var i = e[n];
      t.has(i[0]) || t.set(i[0], /* @__PURE__ */ new Set()), t.has(i[1]) || t.set(i[1], /* @__PURE__ */ new Set()), t.get(i[0]).add(i[1]);
    }
    return t;
  }
  function ew(e) {
    for (var t = /* @__PURE__ */ new Map(), n = 0, r = e.length; n < r; n++)
      t.set(e[n], n);
    return t;
  }
  var tw = Lc.exports;
  const nw = /* @__PURE__ */ $s(tw), rw = Object.prototype.toString, iw = Error.prototype.toString, ow = RegExp.prototype.toString, sw = typeof Symbol < "u" ? Symbol.prototype.toString : () => "", aw = /^Symbol\((.*)\)(.*)$/;
  function lw(e) {
    return e != +e ? "NaN" : e === 0 && 1 / e < 0 ? "-0" : "" + e;
  }
  function Nd(e, t = !1) {
    if (e == null || e === !0 || e === !1)
      return "" + e;
    const n = typeof e;
    if (n === "number")
      return lw(e);
    if (n === "string")
      return t ? `"${e}"` : e;
    if (n === "function")
      return "[Function " + (e.name || "anonymous") + "]";
    if (n === "symbol")
      return sw.call(e).replace(aw, "Symbol($1)");
    const r = rw.call(e).slice(8, -1);
    return r === "Date" ? isNaN(e.getTime()) ? "" + e : e.toISOString(e) : r === "Error" || e instanceof Error ? "[" + iw.call(e) + "]" : r === "RegExp" ? ow.call(e) : null;
  }
  function $r(e, t) {
    let n = Nd(e, t);
    return n !== null ? n : JSON.stringify(e, function(r, i) {
      let o = Nd(this[r], t);
      return o !== null ? o : i;
    }, 2);
  }
  function zy(e) {
    return e == null ? [] : [].concat(e);
  }
  let uw = /\$\{\s*(\w+)\s*\}/g;
  class Ye extends Error {
    static formatError(t, n) {
      const r = n.label || n.path || "this";
      return r !== n.path && (n = Object.assign({}, n, {
        path: r
      })), typeof t == "string" ? t.replace(uw, (i, o) => $r(n[o])) : typeof t == "function" ? t(n) : t;
    }
    static isError(t) {
      return t && t.name === "ValidationError";
    }
    constructor(t, n, r, i) {
      super(), this.value = void 0, this.path = void 0, this.type = void 0, this.errors = void 0, this.params = void 0, this.inner = void 0, this.name = "ValidationError", this.value = n, this.path = r, this.type = i, this.errors = [], this.inner = [], zy(t).forEach((o) => {
        Ye.isError(o) ? (this.errors.push(...o.errors), this.inner = this.inner.concat(o.inner.length ? o.inner : o)) : this.errors.push(o);
      }), this.message = this.errors.length > 1 ? `${this.errors.length} errors occurred` : this.errors[0], Error.captureStackTrace && Error.captureStackTrace(this, Ye);
    }
  }
  let Lt = {
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
      const i = r != null && r !== n ? ` (cast from the value \`${$r(r, !0)}\`).` : ".";
      return t !== "mixed" ? `${e} must be a \`${t}\` type, but the final value was: \`${$r(n, !0)}\`` + i : `${e} must match the configured type. The validated value was: \`${$r(n, !0)}\`` + i;
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
  }, en = {
    min: "${path} must be greater than or equal to ${min}",
    max: "${path} must be less than or equal to ${max}",
    lessThan: "${path} must be less than ${less}",
    moreThan: "${path} must be greater than ${more}",
    positive: "${path} must be a positive number",
    negative: "${path} must be a negative number",
    integer: "${path} must be an integer"
  }, gu = {
    min: "${path} field must be later than ${min}",
    max: "${path} field must be at earlier than ${max}"
  }, cw = {
    isValue: "${path} field must be ${value}"
  }, vu = {
    noUnknown: "${path} field has unspecified keys: ${unknown}"
  }, fw = {
    min: "${path} field must have at least ${min} items",
    max: "${path} field must have less than or equal to ${max} items",
    length: "${path} must have ${length} items"
  };
  Object.assign(/* @__PURE__ */ Object.create(null), {
    mixed: Lt,
    string: yt,
    number: en,
    date: gu,
    object: vu,
    array: fw,
    boolean: cw
  });
  const Vc = (e) => e && e.__isYupSchema__;
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
      if (!Vc(i))
        throw new TypeError("conditions must return a schema object");
      return i.resolve(n);
    }
  }
  const Ro = {
    context: "$",
    value: "."
  };
  class ir {
    constructor(t, n = {}) {
      if (this.key = void 0, this.isContext = void 0, this.isValue = void 0, this.isSibling = void 0, this.path = void 0, this.getter = void 0, this.map = void 0, typeof t != "string")
        throw new TypeError("ref must be a string, got: " + t);
      if (this.key = t.trim(), t === "")
        throw new TypeError("ref must be a non-empty string");
      this.isContext = this.key[0] === Ro.context, this.isValue = this.key[0] === Ro.value, this.isSibling = !this.isContext && !this.isValue;
      let r = this.isContext ? Ro.context : this.isValue ? Ro.value : "";
      this.path = this.key.slice(r.length), this.getter = this.path && Kn.getter(this.path, !0), this.map = n.map;
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
  ir.prototype.__isYupRef = !0;
  const It = (e) => e == null;
  function hr(e) {
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
        skipAbsent: p
      } = e;
      let {
        parent: g,
        context: v,
        abortEarly: P = s.spec.abortEarly
      } = i;
      function y(O) {
        return ir.isRef(O) ? O.getValue(n, g, v) : O;
      }
      function h(O = {}) {
        const U = Object.assign({
          value: n,
          originalValue: o,
          label: s.spec.label,
          path: O.path || r,
          spec: s.spec
        }, f, O.params);
        for (const G of Object.keys(U))
          U[G] = y(U[G]);
        const pe = new Ye(Ye.formatError(O.message || d, U), n, U.path, O.type || u);
        return pe.params = U, pe;
      }
      const m = P ? a : l;
      let x = {
        path: r,
        parent: g,
        type: u,
        from: i.from,
        createError: h,
        resolve: y,
        options: i,
        originalValue: o,
        schema: s
      };
      const E = (O) => {
        Ye.isError(O) ? m(O) : O ? l(null) : m(h());
      }, C = (O) => {
        Ye.isError(O) ? m(O) : a(O);
      }, T = p && It(n);
      if (!i.sync) {
        try {
          Promise.resolve(T ? !0 : c.call(x, n, x)).then(E, C);
        } catch (O) {
          C(O);
        }
        return;
      }
      let _;
      try {
        var L;
        if (_ = T ? !0 : c.call(x, n, x), typeof ((L = _) == null ? void 0 : L.then) == "function")
          throw new Error(`Validation test of type: "${x.type}" returned a Promise during a synchronous validate. This test will finish after the validate call has returned`);
      } catch (O) {
        C(O);
        return;
      }
      E(_);
    }
    return t.OPTIONS = e, t;
  }
  function dw(e, t, n, r = n) {
    let i, o, s;
    return t ? (Kn.forEach(t, (a, l, u) => {
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
  class _s extends Set {
    describe() {
      const t = [];
      for (const n of this.values())
        t.push(ir.isRef(n) ? n.describe() : n);
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
  function _r(e, t = /* @__PURE__ */ new Map()) {
    if (Vc(e) || !e || typeof e != "object")
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
        n[r] = _r(e[r], t);
    } else if (e instanceof Map) {
      n = /* @__PURE__ */ new Map(), t.set(e, n);
      for (const [r, i] of e.entries())
        n.set(r, _r(i, t));
    } else if (e instanceof Set) {
      n = /* @__PURE__ */ new Set(), t.set(e, n);
      for (const r of e)
        n.add(_r(r, t));
    } else if (e instanceof Object) {
      n = {}, t.set(e, n);
      for (const [r, i] of Object.entries(e))
        n[r] = _r(i, t);
    } else
      throw Error(`Unable to clone ${e}`);
    return n;
  }
  class Et {
    constructor(t) {
      this.type = void 0, this.deps = [], this.tests = void 0, this.transforms = void 0, this.conditions = [], this._mutate = void 0, this.internalTests = {}, this._whitelist = new _s(), this._blacklist = new _s(), this.exclusiveTests = /* @__PURE__ */ Object.create(null), this._typeCheck = void 0, this.spec = void 0, this.tests = [], this.transforms = [], this.withMutation(() => {
        this.typeError(Lt.notType);
      }), this.type = t.type, this._typeCheck = t.check, this.spec = Object.assign({
        strip: !1,
        strict: !1,
        abortEarly: !0,
        recursive: !0,
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
      return n.type = this.type, n._typeCheck = this._typeCheck, n._whitelist = this._whitelist.clone(), n._blacklist = this._blacklist.clone(), n.internalTests = Object.assign({}, this.internalTests), n.exclusiveTests = Object.assign({}, this.exclusiveTests), n.deps = [...this.deps], n.conditions = [...this.conditions], n.tests = [...this.tests], n.transforms = [...this.transforms], n.spec = _r(Object.assign({}, this.spec, t)), n;
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
      var n, r, i;
      return Object.assign({}, t, {
        from: t.from || [],
        strict: (n = t.strict) != null ? n : this.spec.strict,
        abortEarly: (r = t.abortEarly) != null ? r : this.spec.abortEarly,
        recursive: (i = t.recursive) != null ? i : this.spec.recursive
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
        if (i && It(o))
          return o;
        let s = $r(t), a = $r(o);
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
      }, d = o.length, p = [];
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
        const P = o[v];
        P(g, c, function(h) {
          h && (p = p.concat(h)), --d <= 0 && f(p);
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
      return (f, d, p) => this.resolve(c)._validate(u, c, d, p);
    }
    validate(t, n) {
      let r = this.resolve(Object.assign({}, n, {
        value: t
      }));
      return new Promise((i, o) => r._validate(t, n, (s, a) => {
        Ye.isError(s) && (s.value = a), o(s);
      }, (s, a) => {
        s.length ? o(new Ye(s, a)) : i(a);
      }));
    }
    validateSync(t, n) {
      let r = this.resolve(Object.assign({}, n, {
        value: t
      })), i;
      return r._validate(t, Object.assign({}, n, {
        sync: !0
      }), (o, s) => {
        throw Ye.isError(o) && (o.value = s), o;
      }, (o, s) => {
        if (o.length)
          throw new Ye(o, t);
        i = s;
      }), i;
    }
    isValid(t, n) {
      return this.validate(t, n).then(() => !0, (r) => {
        if (Ye.isError(r))
          return !1;
        throw r;
      });
    }
    isValidSync(t, n) {
      try {
        return this.validateSync(t, n), !0;
      } catch (r) {
        if (Ye.isError(r))
          return !1;
        throw r;
      }
    }
    _getDefault(t) {
      let n = this.spec.default;
      return n == null ? n : typeof n == "function" ? n.call(this, t) : _r(n);
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
      return r.internalTests.nullable = hr({
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
      return r.internalTests.optionality = hr({
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
    defined(t = Lt.defined) {
      return this.optionality(!1, t);
    }
    nullable() {
      return this.nullability(!0);
    }
    nonNullable(t = Lt.notNull) {
      return this.nullability(!1, t);
    }
    required(t = Lt.required) {
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
      }, n.message === void 0 && (n.message = Lt.default), typeof n.test != "function")
        throw new TypeError("`test` is a required parameters");
      let r = this.clone(), i = hr(n), o = n.exclusive || n.name && r.exclusiveTests[n.name] === !0;
      if (n.exclusive && !n.name)
        throw new TypeError("Exclusive tests must provide a unique `name` identifying the test");
      return n.name && (r.exclusiveTests[n.name] = !!n.exclusive), r.tests = r.tests.filter((s) => !(s.OPTIONS.name === n.name && (o || s.OPTIONS.test === i.OPTIONS.test))), r.tests.push(i), r;
    }
    when(t, n) {
      !Array.isArray(t) && typeof t != "string" && (n = t, t = ".");
      let r = this.clone(), i = zy(t).map((o) => new ir(o));
      return i.forEach((o) => {
        o.isSibling && r.deps.push(o.key);
      }), r.conditions.push(typeof n == "function" ? new ks(i, n) : ks.fromOptions(i, n)), r;
    }
    typeError(t) {
      let n = this.clone();
      return n.internalTests.typeError = hr({
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
    oneOf(t, n = Lt.oneOf) {
      let r = this.clone();
      return t.forEach((i) => {
        r._whitelist.add(i), r._blacklist.delete(i);
      }), r.internalTests.whiteList = hr({
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
    notOneOf(t, n = Lt.notOneOf) {
      let r = this.clone();
      return t.forEach((i) => {
        r._blacklist.add(i), r._whitelist.delete(i);
      }), r.internalTests.blacklist = hr({
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
      } = dw(this, t, n, r.context);
      return s[e](i && i[o], Object.assign({}, r, {
        parent: i,
        path: t
      }));
    };
  for (const e of ["equals", "is"])
    Et.prototype[e] = Et.prototype.oneOf;
  for (const e of ["not", "nope"])
    Et.prototype[e] = Et.prototype.notOneOf;
  let hw = (
    // eslint-disable-next-line
    /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/
  ), pw = (
    // eslint-disable-next-line
    /^((https?|ftp):)?\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(\#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i
  ), mw = /^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i, yw = (e) => It(e) || e === e.trim(), gw = {}.toString();
  function qo() {
    return new By();
  }
  class By extends Et {
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
          return i === gw ? t : i;
        });
      });
    }
    required(t) {
      return super.required(t).withMutation((n) => n.test({
        message: t || Lt.required,
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
      return this.matches(hw, {
        name: "email",
        message: t,
        excludeEmptyString: !0
      });
    }
    url(t = yt.url) {
      return this.matches(pw, {
        name: "url",
        message: t,
        excludeEmptyString: !0
      });
    }
    uuid(t = yt.uuid) {
      return this.matches(mw, {
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
        test: yw
      });
    }
    lowercase(t = yt.lowercase) {
      return this.transform((n) => It(n) ? n : n.toLowerCase()).test({
        message: t,
        name: "string_case",
        exclusive: !0,
        skipAbsent: !0,
        test: (n) => It(n) || n === n.toLowerCase()
      });
    }
    uppercase(t = yt.uppercase) {
      return this.transform((n) => It(n) ? n : n.toUpperCase()).test({
        message: t,
        name: "string_case",
        exclusive: !0,
        skipAbsent: !0,
        test: (n) => It(n) || n === n.toUpperCase()
      });
    }
  }
  qo.prototype = By.prototype;
  let vw = (e) => e != +e;
  function Uy() {
    return new Hy();
  }
  class Hy extends Et {
    constructor() {
      super({
        type: "number",
        check(t) {
          return t instanceof Number && (t = t.valueOf()), typeof t == "number" && !vw(t);
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
    min(t, n = en.min) {
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
    max(t, n = en.max) {
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
    lessThan(t, n = en.lessThan) {
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
    moreThan(t, n = en.moreThan) {
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
    positive(t = en.positive) {
      return this.moreThan(0, t);
    }
    negative(t = en.negative) {
      return this.lessThan(0, t);
    }
    integer(t = en.integer) {
      return this.test({
        name: "integer",
        message: t,
        skipAbsent: !0,
        test: (n) => Number.isInteger(n)
      });
    }
    truncate() {
      return this.transform((t) => It(t) ? t : t | 0);
    }
    round(t) {
      var n;
      let r = ["ceil", "floor", "round", "trunc"];
      if (t = ((n = t) == null ? void 0 : n.toLowerCase()) || "round", t === "trunc")
        return this.truncate();
      if (r.indexOf(t.toLowerCase()) === -1)
        throw new TypeError("Only valid options for round() are: " + r.join(", "));
      return this.transform((i) => It(i) ? i : Math[t](i));
    }
  }
  Uy.prototype = Hy.prototype;
  var xw = /^(\d{4}|[+\-]\d{6})(?:-?(\d{2})(?:-?(\d{2}))?)?(?:[ T]?(\d{2}):?(\d{2})(?::?(\d{2})(?:[,\.](\d{1,}))?)?(?:(Z)|([+\-])(\d{2})(?::?(\d{2}))?)?)?$/;
  function ww(e) {
    var t = [1, 4, 5, 6, 7, 10, 11], n = 0, r, i;
    if (i = xw.exec(e)) {
      for (var o = 0, s; s = t[o]; ++o)
        i[s] = +i[s] || 0;
      i[2] = (+i[2] || 1) - 1, i[3] = +i[3] || 1, i[7] = i[7] ? String(i[7]).substr(0, 3) : 0, (i[8] === void 0 || i[8] === "") && (i[9] === void 0 || i[9] === "") ? r = +new Date(i[1], i[2], i[3], i[4], i[5], i[6], i[7]) : (i[8] !== "Z" && i[9] !== void 0 && (n = i[10] * 60 + i[11], i[9] === "+" && (n = 0 - n)), r = Date.UTC(i[1], i[2], i[3], i[4], i[5] + n, i[6], i[7]));
    } else
      r = Date.parse ? Date.parse(e) : NaN;
    return r;
  }
  let Sw = /* @__PURE__ */ new Date(""), Tw = (e) => Object.prototype.toString.call(e) === "[object Date]";
  class ra extends Et {
    constructor() {
      super({
        type: "date",
        check(t) {
          return Tw(t) && !isNaN(t.getTime());
        }
      }), this.withMutation(() => {
        this.transform((t, n, r) => !r.spec.coerce || r.isType(t) || t === null ? t : (t = ww(t), isNaN(t) ? ra.INVALID_DATE : new Date(t)));
      });
    }
    prepareParam(t, n) {
      let r;
      if (ir.isRef(t))
        r = t;
      else {
        let i = this.cast(t);
        if (!this._typeCheck(i))
          throw new TypeError(`\`${n}\` must be a Date or a value that can be \`cast()\` to a Date`);
        r = i;
      }
      return r;
    }
    min(t, n = gu.min) {
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
    max(t, n = gu.max) {
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
  ra.INVALID_DATE = Sw;
  ra.prototype;
  function Ew(e, t = []) {
    let n = [], r = /* @__PURE__ */ new Set(), i = new Set(t.map(([s, a]) => `${s}-${a}`));
    function o(s, a) {
      let l = Kn.split(s)[0];
      r.add(l), i.has(`${a}-${l}`) || n.push([a, l]);
    }
    for (const s of Object.keys(e)) {
      let a = e[s];
      r.add(s), ir.isRef(a) && a.isSibling ? o(a.path, s) : Vc(a) && "deps" in a && a.deps.forEach((l) => o(l, s));
    }
    return nw.array(Array.from(r), n).reverse();
  }
  function Ld(e, t) {
    let n = 1 / 0;
    return e.some((r, i) => {
      var o;
      if ((o = t.path) != null && o.includes(r))
        return n = i, !0;
    }), n;
  }
  function Wy(e) {
    return (t, n) => Ld(e, t) - Ld(e, n);
  }
  const Cw = (e, t, n) => {
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
  const Pw = (e, t) => {
    const n = [...Kn.normalizePath(t)];
    if (n.length === 1)
      return n[0] in e;
    let r = n.pop(), i = Kn.getter(Kn.join(n), !0)(e);
    return !!(i && r in i);
  };
  let Vd = (e) => Object.prototype.toString.call(e) === "[object Object]";
  function kw(e, t) {
    let n = Object.keys(e.fields);
    return Object.keys(t).filter((r) => n.indexOf(r) === -1);
  }
  const _w = Wy([]);
  function Gy(e) {
    return new Ky(e);
  }
  class Ky extends Et {
    constructor(t) {
      super({
        type: "object",
        check(n) {
          return Vd(n) || typeof n == "function";
        }
      }), this.fields = /* @__PURE__ */ Object.create(null), this._sortErrors = _w, this._nodes = [], this._excludedEdges = [], this.withMutation(() => {
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
        let d = o[f], p = f in i;
        if (d) {
          let g, v = i[f];
          u.path = (n.path ? `${n.path}.` : "") + f, d = d.resolve({
            value: v,
            context: n.context,
            parent: l
          });
          let P = d instanceof Et ? d.spec : void 0, y = P == null ? void 0 : P.strict;
          if (P != null && P.strip) {
            c = c || f in i;
            continue;
          }
          g = !n.__validating || !y ? (
            // TODO: use _cast, this is double resolving
            d.cast(i[f], u)
          ) : i[f], g !== void 0 && (l[f] = g);
        } else
          p && !s && (l[f] = i[f]);
        (p !== f in l || l[f] !== i[f]) && (c = !0);
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
        if (!a || !Vd(u)) {
          i(l, u);
          return;
        }
        s = s || u;
        let c = [];
        for (let f of this._nodes) {
          let d = this.fields[f];
          !d || ir.isRef(d) || c.push(d.asNestedTest({
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
      return r.fields = t, r._nodes = Ew(t, n), r._sortErrors = Wy(Object.keys(t)), n && (r._excludedEdges = n), r;
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
      return this.setFields(n);
    }
    omit(t) {
      const n = Object.assign({}, this.fields);
      for (const r of t)
        delete n[r];
      return this.setFields(n);
    }
    from(t, n, r) {
      let i = Kn.getter(t, !0);
      return this.transform((o) => {
        if (!o)
          return o;
        let s = o;
        return Pw(o, t) && (s = Object.assign({}, o), r || delete s[t], s[n] = i(o)), s;
      });
    }
    /** Parse an input JSON string to an object */
    json() {
      return this.transform(Cw);
    }
    noUnknown(t = !0, n = vu.noUnknown) {
      typeof t != "boolean" && (n = t, t = !0);
      let r = this.test({
        name: "noUnknown",
        exclusive: !0,
        message: n,
        test(i) {
          if (i == null)
            return !0;
          const o = kw(this.schema, i);
          return !t || o.length === 0 || this.createError({
            params: {
              unknown: o.join(", ")
            }
          });
        }
      });
      return r.spec.noUnknown = t, r;
    }
    unknown(t = !0, n = vu.noUnknown) {
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
      return this.transformKeys(il.camelCase);
    }
    snakeCase() {
      return this.transformKeys(il.snakeCase);
    }
    constantCase() {
      return this.transformKeys((t) => il.snakeCase(t).toUpperCase());
    }
    describe(t) {
      let n = super.describe(t);
      n.fields = {};
      for (const [i, o] of Object.entries(this.fields)) {
        var r;
        let s = t;
        (r = s) != null && r.value && (s = Object.assign({}, s, {
          parent: s.value,
          value: s.value[i]
        })), n.fields[i] = o.describe(s);
      }
      return n;
    }
  }
  Gy.prototype = Ky.prototype;
  const Aw = Gy({
    firstName: qo().required("This field is required"),
    lastName: qo().required("This field is required"),
    age: Uy().min(0).positive().max(125).required("This field is required"),
    email: qo().email()
  });
  function Ow(e, t) {
    const n = {};
    return e.username ? e.username.toLowerCase().includes(t.ContactInfo.firstName.toLowerCase()) || (n.username = `Username should contain your first name (${t.ContactInfo.firstName}).`) : n.username = "This field is required.", n;
  }
  var Fw = function(t) {
    return jw(t) && !Dw(t);
  };
  function jw(e) {
    return !!e && typeof e == "object";
  }
  function Dw(e) {
    var t = Object.prototype.toString.call(e);
    return t === "[object RegExp]" || t === "[object Date]" || Nw(e);
  }
  var Mw = typeof Symbol == "function" && Symbol.for, Rw = Mw ? Symbol.for("react.element") : 60103;
  function Nw(e) {
    return e.$$typeof === Rw;
  }
  function Lw(e) {
    return Array.isArray(e) ? [] : {};
  }
  function As(e, t) {
    return t.clone !== !1 && t.isMergeableObject(e) ? Yi(Lw(e), e, t) : e;
  }
  function Vw(e, t, n) {
    return e.concat(t).map(function(r) {
      return As(r, n);
    });
  }
  function $w(e, t, n) {
    var r = {};
    return n.isMergeableObject(e) && Object.keys(e).forEach(function(i) {
      r[i] = As(e[i], n);
    }), Object.keys(t).forEach(function(i) {
      !n.isMergeableObject(t[i]) || !e[i] ? r[i] = As(t[i], n) : r[i] = Yi(e[i], t[i], n);
    }), r;
  }
  function Yi(e, t, n) {
    n = n || {}, n.arrayMerge = n.arrayMerge || Vw, n.isMergeableObject = n.isMergeableObject || Fw;
    var r = Array.isArray(t), i = Array.isArray(e), o = r === i;
    return o ? r ? n.arrayMerge(e, t, n) : $w(e, t, n) : As(t, n);
  }
  Yi.all = function(t, n) {
    if (!Array.isArray(t))
      throw new Error("first argument should be an array");
    return t.reduce(function(r, i) {
      return Yi(r, i, n);
    }, {});
  };
  var xu = Yi, bw = typeof global == "object" && global && global.Object === Object && global;
  const Qy = bw;
  var Iw = typeof self == "object" && self && self.Object === Object && self, zw = Qy || Iw || Function("return this")();
  const Mt = zw;
  var Bw = Mt.Symbol;
  const Pn = Bw;
  var Yy = Object.prototype, Uw = Yy.hasOwnProperty, Hw = Yy.toString, ui = Pn ? Pn.toStringTag : void 0;
  function Ww(e) {
    var t = Uw.call(e, ui), n = e[ui];
    try {
      e[ui] = void 0;
      var r = !0;
    } catch {
    }
    var i = Hw.call(e);
    return r && (t ? e[ui] = n : delete e[ui]), i;
  }
  var Gw = Object.prototype, Kw = Gw.toString;
  function Qw(e) {
    return Kw.call(e);
  }
  var Yw = "[object Null]", Xw = "[object Undefined]", $d = Pn ? Pn.toStringTag : void 0;
  function or(e) {
    return e == null ? e === void 0 ? Xw : Yw : $d && $d in Object(e) ? Ww(e) : Qw(e);
  }
  function Xy(e, t) {
    return function(n) {
      return e(t(n));
    };
  }
  var Zw = Xy(Object.getPrototypeOf, Object);
  const $c = Zw;
  function sr(e) {
    return e != null && typeof e == "object";
  }
  var qw = "[object Object]", Jw = Function.prototype, eS = Object.prototype, Zy = Jw.toString, tS = eS.hasOwnProperty, nS = Zy.call(Object);
  function bd(e) {
    if (!sr(e) || or(e) != qw)
      return !1;
    var t = $c(e);
    if (t === null)
      return !0;
    var n = tS.call(t, "constructor") && t.constructor;
    return typeof n == "function" && n instanceof n && Zy.call(n) == nS;
  }
  var Id = Array.isArray, zd = Object.keys, rS = Object.prototype.hasOwnProperty, iS = typeof Element < "u";
  function wu(e, t) {
    if (e === t)
      return !0;
    if (e && t && typeof e == "object" && typeof t == "object") {
      var n = Id(e), r = Id(t), i, o, s;
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
      var f = zd(e);
      if (o = f.length, o !== zd(t).length)
        return !1;
      for (i = o; i-- !== 0; )
        if (!rS.call(t, f[i]))
          return !1;
      if (iS && e instanceof Element && t instanceof Element)
        return e === t;
      for (i = o; i-- !== 0; )
        if (s = f[i], !(s === "_owner" && e.$$typeof) && !wu(e[s], t[s]))
          return !1;
      return !0;
    }
    return e !== e && t !== t;
  }
  var oS = function(t, n) {
    try {
      return wu(t, n);
    } catch (r) {
      if (r.message && r.message.match(/stack|recursion/i) || r.number === -2146828260)
        return console.warn("Warning: react-fast-compare does not handle circular references.", r.name, r.message), !1;
      throw r;
    }
  };
  const on = /* @__PURE__ */ $s(oS);
  var sS = !0;
  function qy(e, t) {
    if (!sS) {
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
  function aS() {
    this.__data__ = [], this.size = 0;
  }
  function Jy(e, t) {
    return e === t || e !== e && t !== t;
  }
  function ia(e, t) {
    for (var n = e.length; n--; )
      if (Jy(e[n][0], t))
        return n;
    return -1;
  }
  var lS = Array.prototype, uS = lS.splice;
  function cS(e) {
    var t = this.__data__, n = ia(t, e);
    if (n < 0)
      return !1;
    var r = t.length - 1;
    return n == r ? t.pop() : uS.call(t, n, 1), --this.size, !0;
  }
  function fS(e) {
    var t = this.__data__, n = ia(t, e);
    return n < 0 ? void 0 : t[n][1];
  }
  function dS(e) {
    return ia(this.__data__, e) > -1;
  }
  function hS(e, t) {
    var n = this.__data__, r = ia(n, e);
    return r < 0 ? (++this.size, n.push([e, t])) : n[r][1] = t, this;
  }
  function qt(e) {
    var t = -1, n = e == null ? 0 : e.length;
    for (this.clear(); ++t < n; ) {
      var r = e[t];
      this.set(r[0], r[1]);
    }
  }
  qt.prototype.clear = aS;
  qt.prototype.delete = cS;
  qt.prototype.get = fS;
  qt.prototype.has = dS;
  qt.prototype.set = hS;
  function pS() {
    this.__data__ = new qt(), this.size = 0;
  }
  function mS(e) {
    var t = this.__data__, n = t.delete(e);
    return this.size = t.size, n;
  }
  function yS(e) {
    return this.__data__.get(e);
  }
  function gS(e) {
    return this.__data__.has(e);
  }
  function so(e) {
    var t = typeof e;
    return e != null && (t == "object" || t == "function");
  }
  var vS = "[object AsyncFunction]", xS = "[object Function]", wS = "[object GeneratorFunction]", SS = "[object Proxy]";
  function eg(e) {
    if (!so(e))
      return !1;
    var t = or(e);
    return t == xS || t == wS || t == vS || t == SS;
  }
  var TS = Mt["__core-js_shared__"];
  const ol = TS;
  var Bd = function() {
    var e = /[^.]+$/.exec(ol && ol.keys && ol.keys.IE_PROTO || "");
    return e ? "Symbol(src)_1." + e : "";
  }();
  function ES(e) {
    return !!Bd && Bd in e;
  }
  var CS = Function.prototype, PS = CS.toString;
  function ar(e) {
    if (e != null) {
      try {
        return PS.call(e);
      } catch {
      }
      try {
        return e + "";
      } catch {
      }
    }
    return "";
  }
  var kS = /[\\^$.*+?()[\]{}|]/g, _S = /^\[object .+?Constructor\]$/, AS = Function.prototype, OS = Object.prototype, FS = AS.toString, jS = OS.hasOwnProperty, DS = RegExp(
    "^" + FS.call(jS).replace(kS, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
  );
  function MS(e) {
    if (!so(e) || ES(e))
      return !1;
    var t = eg(e) ? DS : _S;
    return t.test(ar(e));
  }
  function RS(e, t) {
    return e == null ? void 0 : e[t];
  }
  function lr(e, t) {
    var n = RS(e, t);
    return MS(n) ? n : void 0;
  }
  var NS = lr(Mt, "Map");
  const Xi = NS;
  var LS = lr(Object, "create");
  const Zi = LS;
  function VS() {
    this.__data__ = Zi ? Zi(null) : {}, this.size = 0;
  }
  function $S(e) {
    var t = this.has(e) && delete this.__data__[e];
    return this.size -= t ? 1 : 0, t;
  }
  var bS = "__lodash_hash_undefined__", IS = Object.prototype, zS = IS.hasOwnProperty;
  function BS(e) {
    var t = this.__data__;
    if (Zi) {
      var n = t[e];
      return n === bS ? void 0 : n;
    }
    return zS.call(t, e) ? t[e] : void 0;
  }
  var US = Object.prototype, HS = US.hasOwnProperty;
  function WS(e) {
    var t = this.__data__;
    return Zi ? t[e] !== void 0 : HS.call(t, e);
  }
  var GS = "__lodash_hash_undefined__";
  function KS(e, t) {
    var n = this.__data__;
    return this.size += this.has(e) ? 0 : 1, n[e] = Zi && t === void 0 ? GS : t, this;
  }
  function Jn(e) {
    var t = -1, n = e == null ? 0 : e.length;
    for (this.clear(); ++t < n; ) {
      var r = e[t];
      this.set(r[0], r[1]);
    }
  }
  Jn.prototype.clear = VS;
  Jn.prototype.delete = $S;
  Jn.prototype.get = BS;
  Jn.prototype.has = WS;
  Jn.prototype.set = KS;
  function QS() {
    this.size = 0, this.__data__ = {
      hash: new Jn(),
      map: new (Xi || qt)(),
      string: new Jn()
    };
  }
  function YS(e) {
    var t = typeof e;
    return t == "string" || t == "number" || t == "symbol" || t == "boolean" ? e !== "__proto__" : e === null;
  }
  function oa(e, t) {
    var n = e.__data__;
    return YS(t) ? n[typeof t == "string" ? "string" : "hash"] : n.map;
  }
  function XS(e) {
    var t = oa(this, e).delete(e);
    return this.size -= t ? 1 : 0, t;
  }
  function ZS(e) {
    return oa(this, e).get(e);
  }
  function qS(e) {
    return oa(this, e).has(e);
  }
  function JS(e, t) {
    var n = oa(this, e), r = n.size;
    return n.set(e, t), this.size += n.size == r ? 0 : 1, this;
  }
  function jn(e) {
    var t = -1, n = e == null ? 0 : e.length;
    for (this.clear(); ++t < n; ) {
      var r = e[t];
      this.set(r[0], r[1]);
    }
  }
  jn.prototype.clear = QS;
  jn.prototype.delete = XS;
  jn.prototype.get = ZS;
  jn.prototype.has = qS;
  jn.prototype.set = JS;
  var eT = 200;
  function tT(e, t) {
    var n = this.__data__;
    if (n instanceof qt) {
      var r = n.__data__;
      if (!Xi || r.length < eT - 1)
        return r.push([e, t]), this.size = ++n.size, this;
      n = this.__data__ = new jn(r);
    }
    return n.set(e, t), this.size = n.size, this;
  }
  function Jr(e) {
    var t = this.__data__ = new qt(e);
    this.size = t.size;
  }
  Jr.prototype.clear = pS;
  Jr.prototype.delete = mS;
  Jr.prototype.get = yS;
  Jr.prototype.has = gS;
  Jr.prototype.set = tT;
  function nT(e, t) {
    for (var n = -1, r = e == null ? 0 : e.length; ++n < r && t(e[n], n, e) !== !1; )
      ;
    return e;
  }
  var rT = function() {
    try {
      var e = lr(Object, "defineProperty");
      return e({}, "", {}), e;
    } catch {
    }
  }();
  const Ud = rT;
  function tg(e, t, n) {
    t == "__proto__" && Ud ? Ud(e, t, {
      configurable: !0,
      enumerable: !0,
      value: n,
      writable: !0
    }) : e[t] = n;
  }
  var iT = Object.prototype, oT = iT.hasOwnProperty;
  function ng(e, t, n) {
    var r = e[t];
    (!(oT.call(e, t) && Jy(r, n)) || n === void 0 && !(t in e)) && tg(e, t, n);
  }
  function sa(e, t, n, r) {
    var i = !n;
    n || (n = {});
    for (var o = -1, s = t.length; ++o < s; ) {
      var a = t[o], l = r ? r(n[a], e[a], a, n, e) : void 0;
      l === void 0 && (l = e[a]), i ? tg(n, a, l) : ng(n, a, l);
    }
    return n;
  }
  function sT(e, t) {
    for (var n = -1, r = Array(e); ++n < e; )
      r[n] = t(n);
    return r;
  }
  var aT = "[object Arguments]";
  function Hd(e) {
    return sr(e) && or(e) == aT;
  }
  var rg = Object.prototype, lT = rg.hasOwnProperty, uT = rg.propertyIsEnumerable, cT = Hd(function() {
    return arguments;
  }()) ? Hd : function(e) {
    return sr(e) && lT.call(e, "callee") && !uT.call(e, "callee");
  };
  const fT = cT;
  var dT = Array.isArray;
  const ao = dT;
  function hT() {
    return !1;
  }
  var ig = typeof Ze == "object" && Ze && !Ze.nodeType && Ze, Wd = ig && typeof qe == "object" && qe && !qe.nodeType && qe, pT = Wd && Wd.exports === ig, Gd = pT ? Mt.Buffer : void 0, mT = Gd ? Gd.isBuffer : void 0, yT = mT || hT;
  const og = yT;
  var gT = 9007199254740991, vT = /^(?:0|[1-9]\d*)$/;
  function xT(e, t) {
    var n = typeof e;
    return t = t ?? gT, !!t && (n == "number" || n != "symbol" && vT.test(e)) && e > -1 && e % 1 == 0 && e < t;
  }
  var wT = 9007199254740991;
  function sg(e) {
    return typeof e == "number" && e > -1 && e % 1 == 0 && e <= wT;
  }
  var ST = "[object Arguments]", TT = "[object Array]", ET = "[object Boolean]", CT = "[object Date]", PT = "[object Error]", kT = "[object Function]", _T = "[object Map]", AT = "[object Number]", OT = "[object Object]", FT = "[object RegExp]", jT = "[object Set]", DT = "[object String]", MT = "[object WeakMap]", RT = "[object ArrayBuffer]", NT = "[object DataView]", LT = "[object Float32Array]", VT = "[object Float64Array]", $T = "[object Int8Array]", bT = "[object Int16Array]", IT = "[object Int32Array]", zT = "[object Uint8Array]", BT = "[object Uint8ClampedArray]", UT = "[object Uint16Array]", HT = "[object Uint32Array]", ie = {};
  ie[LT] = ie[VT] = ie[$T] = ie[bT] = ie[IT] = ie[zT] = ie[BT] = ie[UT] = ie[HT] = !0;
  ie[ST] = ie[TT] = ie[RT] = ie[ET] = ie[NT] = ie[CT] = ie[PT] = ie[kT] = ie[_T] = ie[AT] = ie[OT] = ie[FT] = ie[jT] = ie[DT] = ie[MT] = !1;
  function WT(e) {
    return sr(e) && sg(e.length) && !!ie[or(e)];
  }
  function bc(e) {
    return function(t) {
      return e(t);
    };
  }
  var ag = typeof Ze == "object" && Ze && !Ze.nodeType && Ze, ki = ag && typeof qe == "object" && qe && !qe.nodeType && qe, GT = ki && ki.exports === ag, sl = GT && Qy.process, KT = function() {
    try {
      var e = ki && ki.require && ki.require("util").types;
      return e || sl && sl.binding && sl.binding("util");
    } catch {
    }
  }();
  const Gr = KT;
  var Kd = Gr && Gr.isTypedArray, QT = Kd ? bc(Kd) : WT;
  const YT = QT;
  var XT = Object.prototype, ZT = XT.hasOwnProperty;
  function lg(e, t) {
    var n = ao(e), r = !n && fT(e), i = !n && !r && og(e), o = !n && !r && !i && YT(e), s = n || r || i || o, a = s ? sT(e.length, String) : [], l = a.length;
    for (var u in e)
      (t || ZT.call(e, u)) && !(s && // Safari 9 has enumerable `arguments.length` in strict mode.
      (u == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
      i && (u == "offset" || u == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
      o && (u == "buffer" || u == "byteLength" || u == "byteOffset") || // Skip index properties.
      xT(u, l))) && a.push(u);
    return a;
  }
  var qT = Object.prototype;
  function Ic(e) {
    var t = e && e.constructor, n = typeof t == "function" && t.prototype || qT;
    return e === n;
  }
  var JT = Xy(Object.keys, Object);
  const eE = JT;
  var tE = Object.prototype, nE = tE.hasOwnProperty;
  function rE(e) {
    if (!Ic(e))
      return eE(e);
    var t = [];
    for (var n in Object(e))
      nE.call(e, n) && n != "constructor" && t.push(n);
    return t;
  }
  function ug(e) {
    return e != null && sg(e.length) && !eg(e);
  }
  function zc(e) {
    return ug(e) ? lg(e) : rE(e);
  }
  function iE(e, t) {
    return e && sa(t, zc(t), e);
  }
  function oE(e) {
    var t = [];
    if (e != null)
      for (var n in Object(e))
        t.push(n);
    return t;
  }
  var sE = Object.prototype, aE = sE.hasOwnProperty;
  function lE(e) {
    if (!so(e))
      return oE(e);
    var t = Ic(e), n = [];
    for (var r in e)
      r == "constructor" && (t || !aE.call(e, r)) || n.push(r);
    return n;
  }
  function Bc(e) {
    return ug(e) ? lg(e, !0) : lE(e);
  }
  function uE(e, t) {
    return e && sa(t, Bc(t), e);
  }
  var cg = typeof Ze == "object" && Ze && !Ze.nodeType && Ze, Qd = cg && typeof qe == "object" && qe && !qe.nodeType && qe, cE = Qd && Qd.exports === cg, Yd = cE ? Mt.Buffer : void 0, Xd = Yd ? Yd.allocUnsafe : void 0;
  function fE(e, t) {
    if (t)
      return e.slice();
    var n = e.length, r = Xd ? Xd(n) : new e.constructor(n);
    return e.copy(r), r;
  }
  function fg(e, t) {
    var n = -1, r = e.length;
    for (t || (t = Array(r)); ++n < r; )
      t[n] = e[n];
    return t;
  }
  function dE(e, t) {
    for (var n = -1, r = e == null ? 0 : e.length, i = 0, o = []; ++n < r; ) {
      var s = e[n];
      t(s, n, e) && (o[i++] = s);
    }
    return o;
  }
  function dg() {
    return [];
  }
  var hE = Object.prototype, pE = hE.propertyIsEnumerable, Zd = Object.getOwnPropertySymbols, mE = Zd ? function(e) {
    return e == null ? [] : (e = Object(e), dE(Zd(e), function(t) {
      return pE.call(e, t);
    }));
  } : dg;
  const Uc = mE;
  function yE(e, t) {
    return sa(e, Uc(e), t);
  }
  function hg(e, t) {
    for (var n = -1, r = t.length, i = e.length; ++n < r; )
      e[i + n] = t[n];
    return e;
  }
  var gE = Object.getOwnPropertySymbols, vE = gE ? function(e) {
    for (var t = []; e; )
      hg(t, Uc(e)), e = $c(e);
    return t;
  } : dg;
  const pg = vE;
  function xE(e, t) {
    return sa(e, pg(e), t);
  }
  function mg(e, t, n) {
    var r = t(e);
    return ao(e) ? r : hg(r, n(e));
  }
  function wE(e) {
    return mg(e, zc, Uc);
  }
  function SE(e) {
    return mg(e, Bc, pg);
  }
  var TE = lr(Mt, "DataView");
  const Su = TE;
  var EE = lr(Mt, "Promise");
  const Tu = EE;
  var CE = lr(Mt, "Set");
  const Eu = CE;
  var PE = lr(Mt, "WeakMap");
  const Cu = PE;
  var qd = "[object Map]", kE = "[object Object]", Jd = "[object Promise]", eh = "[object Set]", th = "[object WeakMap]", nh = "[object DataView]", _E = ar(Su), AE = ar(Xi), OE = ar(Tu), FE = ar(Eu), jE = ar(Cu), $n = or;
  (Su && $n(new Su(new ArrayBuffer(1))) != nh || Xi && $n(new Xi()) != qd || Tu && $n(Tu.resolve()) != Jd || Eu && $n(new Eu()) != eh || Cu && $n(new Cu()) != th) && ($n = function(e) {
    var t = or(e), n = t == kE ? e.constructor : void 0, r = n ? ar(n) : "";
    if (r)
      switch (r) {
        case _E:
          return nh;
        case AE:
          return qd;
        case OE:
          return Jd;
        case FE:
          return eh;
        case jE:
          return th;
      }
    return t;
  });
  const Hc = $n;
  var DE = Object.prototype, ME = DE.hasOwnProperty;
  function RE(e) {
    var t = e.length, n = new e.constructor(t);
    return t && typeof e[0] == "string" && ME.call(e, "index") && (n.index = e.index, n.input = e.input), n;
  }
  var NE = Mt.Uint8Array;
  const rh = NE;
  function Wc(e) {
    var t = new e.constructor(e.byteLength);
    return new rh(t).set(new rh(e)), t;
  }
  function LE(e, t) {
    var n = t ? Wc(e.buffer) : e.buffer;
    return new e.constructor(n, e.byteOffset, e.byteLength);
  }
  var VE = /\w*$/;
  function $E(e) {
    var t = new e.constructor(e.source, VE.exec(e));
    return t.lastIndex = e.lastIndex, t;
  }
  var ih = Pn ? Pn.prototype : void 0, oh = ih ? ih.valueOf : void 0;
  function bE(e) {
    return oh ? Object(oh.call(e)) : {};
  }
  function IE(e, t) {
    var n = t ? Wc(e.buffer) : e.buffer;
    return new e.constructor(n, e.byteOffset, e.length);
  }
  var zE = "[object Boolean]", BE = "[object Date]", UE = "[object Map]", HE = "[object Number]", WE = "[object RegExp]", GE = "[object Set]", KE = "[object String]", QE = "[object Symbol]", YE = "[object ArrayBuffer]", XE = "[object DataView]", ZE = "[object Float32Array]", qE = "[object Float64Array]", JE = "[object Int8Array]", eC = "[object Int16Array]", tC = "[object Int32Array]", nC = "[object Uint8Array]", rC = "[object Uint8ClampedArray]", iC = "[object Uint16Array]", oC = "[object Uint32Array]";
  function sC(e, t, n) {
    var r = e.constructor;
    switch (t) {
      case YE:
        return Wc(e);
      case zE:
      case BE:
        return new r(+e);
      case XE:
        return LE(e, n);
      case ZE:
      case qE:
      case JE:
      case eC:
      case tC:
      case nC:
      case rC:
      case iC:
      case oC:
        return IE(e, n);
      case UE:
        return new r();
      case HE:
      case KE:
        return new r(e);
      case WE:
        return $E(e);
      case GE:
        return new r();
      case QE:
        return bE(e);
    }
  }
  var sh = Object.create, aC = function() {
    function e() {
    }
    return function(t) {
      if (!so(t))
        return {};
      if (sh)
        return sh(t);
      e.prototype = t;
      var n = new e();
      return e.prototype = void 0, n;
    };
  }();
  const lC = aC;
  function uC(e) {
    return typeof e.constructor == "function" && !Ic(e) ? lC($c(e)) : {};
  }
  var cC = "[object Map]";
  function fC(e) {
    return sr(e) && Hc(e) == cC;
  }
  var ah = Gr && Gr.isMap, dC = ah ? bc(ah) : fC;
  const hC = dC;
  var pC = "[object Set]";
  function mC(e) {
    return sr(e) && Hc(e) == pC;
  }
  var lh = Gr && Gr.isSet, yC = lh ? bc(lh) : mC;
  const gC = yC;
  var vC = 1, xC = 2, wC = 4, yg = "[object Arguments]", SC = "[object Array]", TC = "[object Boolean]", EC = "[object Date]", CC = "[object Error]", gg = "[object Function]", PC = "[object GeneratorFunction]", kC = "[object Map]", _C = "[object Number]", vg = "[object Object]", AC = "[object RegExp]", OC = "[object Set]", FC = "[object String]", jC = "[object Symbol]", DC = "[object WeakMap]", MC = "[object ArrayBuffer]", RC = "[object DataView]", NC = "[object Float32Array]", LC = "[object Float64Array]", VC = "[object Int8Array]", $C = "[object Int16Array]", bC = "[object Int32Array]", IC = "[object Uint8Array]", zC = "[object Uint8ClampedArray]", BC = "[object Uint16Array]", UC = "[object Uint32Array]", ee = {};
  ee[yg] = ee[SC] = ee[MC] = ee[RC] = ee[TC] = ee[EC] = ee[NC] = ee[LC] = ee[VC] = ee[$C] = ee[bC] = ee[kC] = ee[_C] = ee[vg] = ee[AC] = ee[OC] = ee[FC] = ee[jC] = ee[IC] = ee[zC] = ee[BC] = ee[UC] = !0;
  ee[CC] = ee[gg] = ee[DC] = !1;
  function _i(e, t, n, r, i, o) {
    var s, a = t & vC, l = t & xC, u = t & wC;
    if (n && (s = i ? n(e, r, i, o) : n(e)), s !== void 0)
      return s;
    if (!so(e))
      return e;
    var c = ao(e);
    if (c) {
      if (s = RE(e), !a)
        return fg(e, s);
    } else {
      var f = Hc(e), d = f == gg || f == PC;
      if (og(e))
        return fE(e, a);
      if (f == vg || f == yg || d && !i) {
        if (s = l || d ? {} : uC(e), !a)
          return l ? xE(e, uE(s, e)) : yE(e, iE(s, e));
      } else {
        if (!ee[f])
          return i ? e : {};
        s = sC(e, f, a);
      }
    }
    o || (o = new Jr());
    var p = o.get(e);
    if (p)
      return p;
    o.set(e, s), gC(e) ? e.forEach(function(P) {
      s.add(_i(P, t, n, P, e, o));
    }) : hC(e) && e.forEach(function(P, y) {
      s.set(y, _i(P, t, n, y, e, o));
    });
    var g = u ? l ? SE : wE : l ? Bc : zc, v = c ? void 0 : g(e);
    return nT(v || e, function(P, y) {
      v && (y = P, P = e[y]), ng(s, y, _i(P, t, n, y, e, o));
    }), s;
  }
  var HC = 4;
  function uh(e) {
    return _i(e, HC);
  }
  function xg(e, t) {
    for (var n = -1, r = e == null ? 0 : e.length, i = Array(r); ++n < r; )
      i[n] = t(e[n], n, e);
    return i;
  }
  var WC = "[object Symbol]";
  function Gc(e) {
    return typeof e == "symbol" || sr(e) && or(e) == WC;
  }
  var GC = "Expected a function";
  function Kc(e, t) {
    if (typeof e != "function" || t != null && typeof t != "function")
      throw new TypeError(GC);
    var n = function() {
      var r = arguments, i = t ? t.apply(this, r) : r[0], o = n.cache;
      if (o.has(i))
        return o.get(i);
      var s = e.apply(this, r);
      return n.cache = o.set(i, s) || o, s;
    };
    return n.cache = new (Kc.Cache || jn)(), n;
  }
  Kc.Cache = jn;
  var KC = 500;
  function QC(e) {
    var t = Kc(e, function(r) {
      return n.size === KC && n.clear(), r;
    }), n = t.cache;
    return t;
  }
  var YC = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, XC = /\\(\\)?/g, ZC = QC(function(e) {
    var t = [];
    return e.charCodeAt(0) === 46 && t.push(""), e.replace(YC, function(n, r, i, o) {
      t.push(i ? o.replace(XC, "$1") : r || n);
    }), t;
  });
  const qC = ZC;
  var JC = 1 / 0;
  function eP(e) {
    if (typeof e == "string" || Gc(e))
      return e;
    var t = e + "";
    return t == "0" && 1 / e == -JC ? "-0" : t;
  }
  var tP = 1 / 0, ch = Pn ? Pn.prototype : void 0, fh = ch ? ch.toString : void 0;
  function wg(e) {
    if (typeof e == "string")
      return e;
    if (ao(e))
      return xg(e, wg) + "";
    if (Gc(e))
      return fh ? fh.call(e) : "";
    var t = e + "";
    return t == "0" && 1 / e == -tP ? "-0" : t;
  }
  function nP(e) {
    return e == null ? "" : wg(e);
  }
  function Sg(e) {
    return ao(e) ? xg(e, eP) : Gc(e) ? [e] : fg(qC(nP(e)));
  }
  var Tg = { exports: {} }, Z = {};
  /** @license React v16.13.1
   * react-is.production.min.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */
  var Pe = typeof Symbol == "function" && Symbol.for, Qc = Pe ? Symbol.for("react.element") : 60103, Yc = Pe ? Symbol.for("react.portal") : 60106, aa = Pe ? Symbol.for("react.fragment") : 60107, la = Pe ? Symbol.for("react.strict_mode") : 60108, ua = Pe ? Symbol.for("react.profiler") : 60114, ca = Pe ? Symbol.for("react.provider") : 60109, fa = Pe ? Symbol.for("react.context") : 60110, Xc = Pe ? Symbol.for("react.async_mode") : 60111, da = Pe ? Symbol.for("react.concurrent_mode") : 60111, ha = Pe ? Symbol.for("react.forward_ref") : 60112, pa = Pe ? Symbol.for("react.suspense") : 60113, rP = Pe ? Symbol.for("react.suspense_list") : 60120, ma = Pe ? Symbol.for("react.memo") : 60115, ya = Pe ? Symbol.for("react.lazy") : 60116, iP = Pe ? Symbol.for("react.block") : 60121, oP = Pe ? Symbol.for("react.fundamental") : 60117, sP = Pe ? Symbol.for("react.responder") : 60118, aP = Pe ? Symbol.for("react.scope") : 60119;
  function it(e) {
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
  function Eg(e) {
    return it(e) === da;
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
    return Eg(e) || it(e) === Xc;
  };
  Z.isConcurrentMode = Eg;
  Z.isContextConsumer = function(e) {
    return it(e) === fa;
  };
  Z.isContextProvider = function(e) {
    return it(e) === ca;
  };
  Z.isElement = function(e) {
    return typeof e == "object" && e !== null && e.$$typeof === Qc;
  };
  Z.isForwardRef = function(e) {
    return it(e) === ha;
  };
  Z.isFragment = function(e) {
    return it(e) === aa;
  };
  Z.isLazy = function(e) {
    return it(e) === ya;
  };
  Z.isMemo = function(e) {
    return it(e) === ma;
  };
  Z.isPortal = function(e) {
    return it(e) === Yc;
  };
  Z.isProfiler = function(e) {
    return it(e) === ua;
  };
  Z.isStrictMode = function(e) {
    return it(e) === la;
  };
  Z.isSuspense = function(e) {
    return it(e) === pa;
  };
  Z.isValidElementType = function(e) {
    return typeof e == "string" || typeof e == "function" || e === aa || e === da || e === ua || e === la || e === pa || e === rP || typeof e == "object" && e !== null && (e.$$typeof === ya || e.$$typeof === ma || e.$$typeof === ca || e.$$typeof === fa || e.$$typeof === ha || e.$$typeof === oP || e.$$typeof === sP || e.$$typeof === aP || e.$$typeof === iP);
  };
  Z.typeOf = it;
  Tg.exports = Z;
  var lP = Tg.exports, Zc = lP, uP = {
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
  }, cP = {
    name: !0,
    length: !0,
    prototype: !0,
    caller: !0,
    callee: !0,
    arguments: !0,
    arity: !0
  }, fP = {
    $$typeof: !0,
    render: !0,
    defaultProps: !0,
    displayName: !0,
    propTypes: !0
  }, Cg = {
    $$typeof: !0,
    compare: !0,
    defaultProps: !0,
    displayName: !0,
    propTypes: !0,
    type: !0
  }, qc = {};
  qc[Zc.ForwardRef] = fP;
  qc[Zc.Memo] = Cg;
  function dh(e) {
    return Zc.isMemo(e) ? Cg : qc[e.$$typeof] || uP;
  }
  var dP = Object.defineProperty, hP = Object.getOwnPropertyNames, hh = Object.getOwnPropertySymbols, pP = Object.getOwnPropertyDescriptor, mP = Object.getPrototypeOf, ph = Object.prototype;
  function Pg(e, t, n) {
    if (typeof t != "string") {
      if (ph) {
        var r = mP(t);
        r && r !== ph && Pg(e, r, n);
      }
      var i = hP(t);
      hh && (i = i.concat(hh(t)));
      for (var o = dh(e), s = dh(t), a = 0; a < i.length; ++a) {
        var l = i[a];
        if (!cP[l] && !(n && n[l]) && !(s && s[l]) && !(o && o[l])) {
          var u = pP(t, l);
          try {
            dP(e, l, u);
          } catch {
          }
        }
      }
    }
    return e;
  }
  var yP = Pg;
  const gP = /* @__PURE__ */ $s(yP);
  var vP = 1, xP = 4;
  function wP(e) {
    return _i(e, vP | xP);
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
  function kg(e, t) {
    e.prototype = Object.create(t.prototype), e.prototype.constructor = e, e.__proto__ = t;
  }
  function fn(e, t) {
    if (e == null)
      return {};
    var n = {}, r = Object.keys(e), i, o;
    for (o = 0; o < r.length; o++)
      i = r[o], !(t.indexOf(i) >= 0) && (n[i] = e[i]);
    return n;
  }
  function mh(e) {
    if (e === void 0)
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return e;
  }
  var ga = /* @__PURE__ */ w.createContext(void 0);
  ga.displayName = "FormikContext";
  var SP = ga.Provider, TP = ga.Consumer;
  function va() {
    var e = w.useContext(ga);
    return e || qy(!1), e;
  }
  var yh = function(t) {
    return Array.isArray(t) && t.length === 0;
  }, Ae = function(t) {
    return typeof t == "function";
  }, lo = function(t) {
    return t !== null && typeof t == "object";
  }, EP = function(t) {
    return String(Math.floor(Number(t))) === t;
  }, al = function(t) {
    return Object.prototype.toString.call(t) === "[object String]";
  }, _g = function(t) {
    return w.Children.count(t) === 0;
  }, ll = function(t) {
    return lo(t) && Ae(t.then);
  };
  function se(e, t, n, r) {
    r === void 0 && (r = 0);
    for (var i = Sg(t); e && r < i.length; )
      e = e[i[r++]];
    return r !== i.length && !e || e === void 0 ? n : e;
  }
  function Ft(e, t, n) {
    for (var r = uh(e), i = r, o = 0, s = Sg(t); o < s.length - 1; o++) {
      var a = s[o], l = se(e, s.slice(0, o + 1));
      if (l && (lo(l) || Array.isArray(l)))
        i = i[a] = uh(l);
      else {
        var u = s[o + 1];
        i = i[a] = EP(u) && Number(u) >= 0 ? [] : {};
      }
    }
    return (o === 0 ? e : i)[s[o]] === n ? e : (n === void 0 ? delete i[s[o]] : i[s[o]] = n, o === 0 && n === void 0 && delete r[s[o]], r);
  }
  function Ag(e, t, n, r) {
    n === void 0 && (n = /* @__PURE__ */ new WeakMap()), r === void 0 && (r = {});
    for (var i = 0, o = Object.keys(e); i < o.length; i++) {
      var s = o[i], a = e[s];
      lo(a) ? n.get(a) || (n.set(a, !0), r[s] = Array.isArray(a) ? [] : {}, Ag(a, t, n, r[s])) : r[s] = t;
    }
    return r;
  }
  function CP(e, t) {
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
        return on(e.errors, t.payload) ? e : Y({}, e, {
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
          values: Ft(e.values, t.payload.field, t.payload.value)
        });
      case "SET_FIELD_TOUCHED":
        return Y({}, e, {
          touched: Ft(e.touched, t.payload.field, t.payload.value)
        });
      case "SET_FIELD_ERROR":
        return Y({}, e, {
          errors: Ft(e.errors, t.payload.field, t.payload.value)
        });
      case "RESET_FORM":
        return Y({}, e, t.payload);
      case "SET_FORMIK_STATE":
        return t.payload(e);
      case "SUBMIT_ATTEMPT":
        return Y({}, e, {
          touched: Ag(e.values, !0),
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
  var Rn = {}, No = {};
  function PP(e) {
    var t = e.validateOnChange, n = t === void 0 ? !0 : t, r = e.validateOnBlur, i = r === void 0 ? !0 : r, o = e.validateOnMount, s = o === void 0 ? !1 : o, a = e.isInitialValid, l = e.enableReinitialize, u = l === void 0 ? !1 : l, c = e.onSubmit, f = fn(e, ["validateOnChange", "validateOnBlur", "validateOnMount", "isInitialValid", "enableReinitialize", "onSubmit"]), d = Y({
      validateOnChange: n,
      validateOnBlur: i,
      validateOnMount: s,
      onSubmit: c
    }, f), p = w.useRef(d.initialValues), g = w.useRef(d.initialErrors || Rn), v = w.useRef(d.initialTouched || No), P = w.useRef(d.initialStatus), y = w.useRef(!1), h = w.useRef({});
    w.useEffect(function() {
      return y.current = !0, function() {
        y.current = !1;
      };
    }, []);
    var m = w.useState(0), x = m[1], E = w.useRef({
      values: d.initialValues,
      errors: d.initialErrors || Rn,
      touched: d.initialTouched || No,
      status: d.initialStatus,
      isSubmitting: !1,
      isValidating: !1,
      submitCount: 0
    }), C = E.current, T = w.useCallback(function(S) {
      var D = E.current;
      E.current = CP(D, S), D !== E.current && x(function(N) {
        return N + 1;
      });
    }, []), _ = w.useCallback(function(S, D) {
      return new Promise(function(N, V) {
        var z = d.validate(S, D);
        z == null ? N(Rn) : ll(z) ? z.then(function(Q) {
          N(Q || Rn);
        }, function(Q) {
          V(Q);
        }) : N(z);
      });
    }, [d.validate]), L = w.useCallback(function(S, D) {
      var N = d.validationSchema, V = Ae(N) ? N(D) : N, z = D && V.validateAt ? V.validateAt(D, S) : AP(S, V);
      return new Promise(function(Q, Se) {
        z.then(function() {
          Q(Rn);
        }, function(Rt) {
          Rt.name === "ValidationError" ? Q(_P(Rt)) : Se(Rt);
        });
      });
    }, [d.validationSchema]), O = w.useCallback(function(S, D) {
      return new Promise(function(N) {
        return N(h.current[S].validate(D));
      });
    }, []), U = w.useCallback(function(S) {
      var D = Object.keys(h.current).filter(function(V) {
        return Ae(h.current[V].validate);
      }), N = D.length > 0 ? D.map(function(V) {
        return O(V, se(S, V));
      }) : [Promise.resolve("DO_NOT_DELETE_YOU_WILL_BE_FIRED")];
      return Promise.all(N).then(function(V) {
        return V.reduce(function(z, Q, Se) {
          return Q === "DO_NOT_DELETE_YOU_WILL_BE_FIRED" || Q && (z = Ft(z, D[Se], Q)), z;
        }, {});
      });
    }, [O]), pe = w.useCallback(function(S) {
      return Promise.all([U(S), d.validationSchema ? L(S) : {}, d.validate ? _(S) : {}]).then(function(D) {
        var N = D[0], V = D[1], z = D[2], Q = xu.all([N, V, z], {
          arrayMerge: OP
        });
        return Q;
      });
    }, [d.validate, d.validationSchema, U, _, L]), G = st(function(S) {
      return S === void 0 && (S = C.values), T({
        type: "SET_ISVALIDATING",
        payload: !0
      }), pe(S).then(function(D) {
        return y.current && (T({
          type: "SET_ISVALIDATING",
          payload: !1
        }), T({
          type: "SET_ERRORS",
          payload: D
        })), D;
      });
    });
    w.useEffect(function() {
      s && y.current === !0 && on(p.current, d.initialValues) && G(p.current);
    }, [s, G]);
    var K = w.useCallback(function(S) {
      var D = S && S.values ? S.values : p.current, N = S && S.errors ? S.errors : g.current ? g.current : d.initialErrors || {}, V = S && S.touched ? S.touched : v.current ? v.current : d.initialTouched || {}, z = S && S.status ? S.status : P.current ? P.current : d.initialStatus;
      p.current = D, g.current = N, v.current = V, P.current = z;
      var Q = function() {
        T({
          type: "RESET_FORM",
          payload: {
            isSubmitting: !!S && !!S.isSubmitting,
            errors: N,
            touched: V,
            status: z,
            values: D,
            isValidating: !!S && !!S.isValidating,
            submitCount: S && S.submitCount && typeof S.submitCount == "number" ? S.submitCount : 0
          }
        });
      };
      if (d.onReset) {
        var Se = d.onReset(C.values, ei);
        ll(Se) ? Se.then(Q) : Q();
      } else
        Q();
    }, [d.initialErrors, d.initialStatus, d.initialTouched, d.onReset]);
    w.useEffect(function() {
      y.current === !0 && !on(p.current, d.initialValues) && u && (p.current = d.initialValues, K(), s && G(p.current));
    }, [u, d.initialValues, K, s, G]), w.useEffect(function() {
      u && y.current === !0 && !on(g.current, d.initialErrors) && (g.current = d.initialErrors || Rn, T({
        type: "SET_ERRORS",
        payload: d.initialErrors || Rn
      }));
    }, [u, d.initialErrors]), w.useEffect(function() {
      u && y.current === !0 && !on(v.current, d.initialTouched) && (v.current = d.initialTouched || No, T({
        type: "SET_TOUCHED",
        payload: d.initialTouched || No
      }));
    }, [u, d.initialTouched]), w.useEffect(function() {
      u && y.current === !0 && !on(P.current, d.initialStatus) && (P.current = d.initialStatus, T({
        type: "SET_STATUS",
        payload: d.initialStatus
      }));
    }, [u, d.initialStatus, d.initialTouched]);
    var q = st(function(S) {
      if (h.current[S] && Ae(h.current[S].validate)) {
        var D = se(C.values, S), N = h.current[S].validate(D);
        return ll(N) ? (T({
          type: "SET_ISVALIDATING",
          payload: !0
        }), N.then(function(V) {
          return V;
        }).then(function(V) {
          T({
            type: "SET_FIELD_ERROR",
            payload: {
              field: S,
              value: V
            }
          }), T({
            type: "SET_ISVALIDATING",
            payload: !1
          });
        })) : (T({
          type: "SET_FIELD_ERROR",
          payload: {
            field: S,
            value: N
          }
        }), Promise.resolve(N));
      } else if (d.validationSchema)
        return T({
          type: "SET_ISVALIDATING",
          payload: !0
        }), L(C.values, S).then(function(V) {
          return V;
        }).then(function(V) {
          T({
            type: "SET_FIELD_ERROR",
            payload: {
              field: S,
              value: se(V, S)
            }
          }), T({
            type: "SET_ISVALIDATING",
            payload: !1
          });
        });
      return Promise.resolve();
    }), je = w.useCallback(function(S, D) {
      var N = D.validate;
      h.current[S] = {
        validate: N
      };
    }, []), ze = w.useCallback(function(S) {
      delete h.current[S];
    }, []), j = st(function(S, D) {
      T({
        type: "SET_TOUCHED",
        payload: S
      });
      var N = D === void 0 ? i : D;
      return N ? G(C.values) : Promise.resolve();
    }), $ = w.useCallback(function(S) {
      T({
        type: "SET_ERRORS",
        payload: S
      });
    }, []), I = st(function(S, D) {
      var N = Ae(S) ? S(C.values) : S;
      T({
        type: "SET_VALUES",
        payload: N
      });
      var V = D === void 0 ? n : D;
      return V ? G(N) : Promise.resolve();
    }), k = w.useCallback(function(S, D) {
      T({
        type: "SET_FIELD_ERROR",
        payload: {
          field: S,
          value: D
        }
      });
    }, []), R = st(function(S, D, N) {
      T({
        type: "SET_FIELD_VALUE",
        payload: {
          field: S,
          value: D
        }
      });
      var V = N === void 0 ? n : N;
      return V ? G(Ft(C.values, S, D)) : Promise.resolve();
    }), H = w.useCallback(function(S, D) {
      var N = D, V = S, z;
      if (!al(S)) {
        S.persist && S.persist();
        var Q = S.target ? S.target : S.currentTarget, Se = Q.type, Rt = Q.name, Oa = Q.id, Fa = Q.value, c0 = Q.checked, RO = Q.outerHTML, Tf = Q.options, f0 = Q.multiple;
        N = D || Rt || Oa, V = /number|range/.test(Se) ? (z = parseFloat(Fa), isNaN(z) ? "" : z) : /checkbox/.test(Se) ? jP(se(C.values, N), c0, Fa) : Tf && f0 ? FP(Tf) : Fa;
      }
      N && R(N, V);
    }, [R, C.values]), J = st(function(S) {
      if (al(S))
        return function(D) {
          return H(D, S);
        };
      H(S);
    }), ke = st(function(S, D, N) {
      D === void 0 && (D = !0), T({
        type: "SET_FIELD_TOUCHED",
        payload: {
          field: S,
          value: D
        }
      });
      var V = N === void 0 ? i : N;
      return V ? G(C.values) : Promise.resolve();
    }), me = w.useCallback(function(S, D) {
      S.persist && S.persist();
      var N = S.target, V = N.name, z = N.id, Q = N.outerHTML, Se = D || V || z;
      ke(Se, !0);
    }, [ke]), ot = st(function(S) {
      if (al(S))
        return function(D) {
          return me(D, S);
        };
      me(S);
    }), mo = w.useCallback(function(S) {
      Ae(S) ? T({
        type: "SET_FORMIK_STATE",
        payload: S
      }) : T({
        type: "SET_FORMIK_STATE",
        payload: function() {
          return S;
        }
      });
    }, []), fr = w.useCallback(function(S) {
      T({
        type: "SET_STATUS",
        payload: S
      });
    }, []), Mn = w.useCallback(function(S) {
      T({
        type: "SET_ISSUBMITTING",
        payload: S
      });
    }, []), pt = st(function() {
      return T({
        type: "SUBMIT_ATTEMPT"
      }), G().then(function(S) {
        var D = S instanceof Error, N = !D && Object.keys(S).length === 0;
        if (N) {
          var V;
          try {
            if (V = r0(), V === void 0)
              return;
          } catch (z) {
            throw z;
          }
          return Promise.resolve(V).then(function(z) {
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
          throw S;
      });
    }), yo = st(function(S) {
      S && S.preventDefault && Ae(S.preventDefault) && S.preventDefault(), S && S.stopPropagation && Ae(S.stopPropagation) && S.stopPropagation(), pt().catch(function(D) {
        console.warn("Warning: An unhandled error was caught from submitForm()", D);
      });
    }), ei = {
      resetForm: K,
      validateForm: G,
      validateField: q,
      setErrors: $,
      setFieldError: k,
      setFieldTouched: ke,
      setFieldValue: R,
      setStatus: fr,
      setSubmitting: Mn,
      setTouched: j,
      setValues: I,
      setFormikState: mo,
      submitForm: pt
    }, r0 = st(function() {
      return c(C.values, ei);
    }), i0 = st(function(S) {
      S && S.preventDefault && Ae(S.preventDefault) && S.preventDefault(), S && S.stopPropagation && Ae(S.stopPropagation) && S.stopPropagation(), K();
    }), o0 = w.useCallback(function(S) {
      return {
        value: se(C.values, S),
        error: se(C.errors, S),
        touched: !!se(C.touched, S),
        initialValue: se(p.current, S),
        initialTouched: !!se(v.current, S),
        initialError: se(g.current, S)
      };
    }, [C.errors, C.touched, C.values]), s0 = w.useCallback(function(S) {
      return {
        setValue: function(N, V) {
          return R(S, N, V);
        },
        setTouched: function(N, V) {
          return ke(S, N, V);
        },
        setError: function(N) {
          return k(S, N);
        }
      };
    }, [R, ke, k]), a0 = w.useCallback(function(S) {
      var D = lo(S), N = D ? S.name : S, V = se(C.values, N), z = {
        name: N,
        value: V,
        onChange: J,
        onBlur: ot
      };
      if (D) {
        var Q = S.type, Se = S.value, Rt = S.as, Oa = S.multiple;
        Q === "checkbox" ? Se === void 0 ? z.checked = !!V : (z.checked = !!(Array.isArray(V) && ~V.indexOf(Se)), z.value = Se) : Q === "radio" ? (z.checked = V === Se, z.value = Se) : Rt === "select" && Oa && (z.value = z.value || [], z.multiple = !0);
      }
      return z;
    }, [ot, J, C.values]), Aa = w.useMemo(function() {
      return !on(p.current, C.values);
    }, [p.current, C.values]), l0 = w.useMemo(function() {
      return typeof a < "u" ? Aa ? C.errors && Object.keys(C.errors).length === 0 : a !== !1 && Ae(a) ? a(d) : a : C.errors && Object.keys(C.errors).length === 0;
    }, [a, Aa, C.errors, d]), u0 = Y({}, C, {
      initialValues: p.current,
      initialErrors: g.current,
      initialTouched: v.current,
      initialStatus: P.current,
      handleBlur: ot,
      handleChange: J,
      handleReset: i0,
      handleSubmit: yo,
      resetForm: K,
      setErrors: $,
      setFormikState: mo,
      setFieldTouched: ke,
      setFieldValue: R,
      setFieldError: k,
      setStatus: fr,
      setSubmitting: Mn,
      setTouched: j,
      setValues: I,
      submitForm: pt,
      validateForm: G,
      validateField: q,
      isValid: l0,
      dirty: Aa,
      unregisterField: ze,
      registerField: je,
      getFieldProps: a0,
      getFieldMeta: o0,
      getFieldHelpers: s0,
      validateOnBlur: i,
      validateOnChange: n,
      validateOnMount: s
    });
    return u0;
  }
  function kP(e) {
    var t = PP(e), n = e.component, r = e.children, i = e.render, o = e.innerRef;
    return w.useImperativeHandle(o, function() {
      return t;
    }), w.createElement(SP, {
      value: t
    }, n ? w.createElement(n, t) : i ? i(t) : r ? Ae(r) ? r(t) : _g(r) ? null : w.Children.only(r) : null);
  }
  function _P(e) {
    var t = {};
    if (e.inner) {
      if (e.inner.length === 0)
        return Ft(t, e.path, e.message);
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
        se(t, s.path) || (t = Ft(t, s.path, s.message));
      }
    }
    return t;
  }
  function AP(e, t, n, r) {
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
          return Array.isArray(i) === !0 || bd(i) ? Pu(i) : i !== "" ? i : void 0;
        }) : bd(e[r]) ? t[r] = Pu(e[r]) : t[r] = e[r] !== "" ? e[r] : void 0;
      }
    return t;
  }
  function OP(e, t, n) {
    var r = e.slice();
    return t.forEach(function(o, s) {
      if (typeof r[s] > "u") {
        var a = n.clone !== !1, l = a && n.isMergeableObject(o);
        r[s] = l ? xu(Array.isArray(o) ? [] : {}, o, n) : o;
      } else
        n.isMergeableObject(o) ? r[s] = xu(e[s], o, n) : e.indexOf(o) === -1 && r.push(o);
    }), r;
  }
  function FP(e) {
    return Array.from(e).filter(function(t) {
      return t.selected;
    }).map(function(t) {
      return t.value;
    });
  }
  function jP(e, t, n) {
    if (typeof e == "boolean")
      return !!t;
    var r = [], i = !1, o = -1;
    if (Array.isArray(e))
      r = e, o = e.indexOf(n), i = o >= 0;
    else if (!n || n == "true" || n == "false")
      return !!t;
    return t && n && !i ? r.concat(n) : i ? r.slice(0, o).concat(r.slice(o + 1)) : r;
  }
  var DP = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u" ? w.useLayoutEffect : w.useEffect;
  function st(e) {
    var t = w.useRef(e);
    return DP(function() {
      t.current = e;
    }), w.useCallback(function() {
      for (var n = arguments.length, r = new Array(n), i = 0; i < n; i++)
        r[i] = arguments[i];
      return t.current.apply(void 0, r);
    }, []);
  }
  function MP(e) {
    var t = e.validate, n = e.name, r = e.render, i = e.children, o = e.as, s = e.component, a = e.className, l = fn(e, ["validate", "name", "render", "children", "as", "component", "className"]), u = va(), c = fn(u, ["validate", "validationSchema"]), f = c.registerField, d = c.unregisterField;
    w.useEffect(function() {
      return f(n, {
        validate: t
      }), function() {
        d(n);
      };
    }, [f, d, n, t]);
    var p = c.getFieldProps(Y({
      name: n
    }, l)), g = c.getFieldMeta(n), v = {
      field: p,
      form: c
    };
    if (r)
      return r(Y({}, v, {
        meta: g
      }));
    if (Ae(i))
      return i(Y({}, v, {
        meta: g
      }));
    if (s) {
      if (typeof s == "string") {
        var P = l.innerRef, y = fn(l, ["innerRef"]);
        return w.createElement(s, Y({
          ref: P
        }, p, y, {
          className: a
        }), i);
      }
      return w.createElement(s, Y({
        field: p,
        form: c
      }, l, {
        className: a
      }), i);
    }
    var h = o || "input";
    if (typeof h == "string") {
      var m = l.innerRef, x = fn(l, ["innerRef"]);
      return w.createElement(h, Y({
        ref: m
      }, p, x, {
        className: a
      }), i);
    }
    return w.createElement(h, Y({}, p, l, {
      className: a
    }), i);
  }
  var Og = /* @__PURE__ */ w.forwardRef(function(e, t) {
    var n = e.action, r = fn(e, ["action"]), i = n ?? "#", o = va(), s = o.handleReset, a = o.handleSubmit;
    return w.createElement("form", Y({
      onSubmit: a,
      ref: t,
      onReset: s,
      action: i
    }, r));
  });
  Og.displayName = "Form";
  function RP(e) {
    var t = function(i) {
      return w.createElement(TP, null, function(o) {
        return o || qy(!1), w.createElement(e, Y({}, i, {
          formik: o
        }));
      });
    }, n = e.displayName || e.name || e.constructor && e.constructor.name || "Component";
    return t.WrappedComponent = e, t.displayName = "FormikConnect(" + n + ")", gP(
      t,
      e
      // cast type to ComponentClass (even if SFC)
    );
  }
  var NP = function(t, n, r) {
    var i = er(t), o = i[n];
    return i.splice(n, 1), i.splice(r, 0, o), i;
  }, LP = function(t, n, r) {
    var i = er(t), o = i[n];
    return i[n] = i[r], i[r] = o, i;
  }, ul = function(t, n, r) {
    var i = er(t);
    return i.splice(n, 0, r), i;
  }, VP = function(t, n, r) {
    var i = er(t);
    return i[n] = r, i;
  }, er = function(t) {
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
  }, gh = function(t, n) {
    var r = typeof t == "function" ? t : n;
    return function(i) {
      if (Array.isArray(i) || lo(i)) {
        var o = er(i);
        return r(o);
      }
      return i;
    };
  }, $P = /* @__PURE__ */ function(e) {
    kg(t, e);
    function t(r) {
      var i;
      return i = e.call(this, r) || this, i.updateArrayField = function(o, s, a) {
        var l = i.props, u = l.name, c = l.formik.setFormikState;
        c(function(f) {
          var d = gh(a, o), p = gh(s, o), g = Ft(f.values, u, o(se(f.values, u))), v = a ? d(se(f.errors, u)) : void 0, P = s ? p(se(f.touched, u)) : void 0;
          return yh(v) && (v = void 0), yh(P) && (P = void 0), Y({}, f, {
            values: g,
            errors: a ? Ft(f.errors, u, v) : f.errors,
            touched: s ? Ft(f.touched, u, P) : f.touched
          });
        });
      }, i.push = function(o) {
        return i.updateArrayField(function(s) {
          return [].concat(er(s), [wP(o)]);
        }, !1, !1);
      }, i.handlePush = function(o) {
        return function() {
          return i.push(o);
        };
      }, i.swap = function(o, s) {
        return i.updateArrayField(function(a) {
          return LP(a, o, s);
        }, !0, !0);
      }, i.handleSwap = function(o, s) {
        return function() {
          return i.swap(o, s);
        };
      }, i.move = function(o, s) {
        return i.updateArrayField(function(a) {
          return NP(a, o, s);
        }, !0, !0);
      }, i.handleMove = function(o, s) {
        return function() {
          return i.move(o, s);
        };
      }, i.insert = function(o, s) {
        return i.updateArrayField(function(a) {
          return ul(a, o, s);
        }, function(a) {
          return ul(a, o, null);
        }, function(a) {
          return ul(a, o, null);
        });
      }, i.handleInsert = function(o, s) {
        return function() {
          return i.insert(o, s);
        };
      }, i.replace = function(o, s) {
        return i.updateArrayField(function(a) {
          return VP(a, o, s);
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
      }, i.remove = i.remove.bind(mh(i)), i.pop = i.pop.bind(mh(i)), i;
    }
    var n = t.prototype;
    return n.componentDidUpdate = function(i) {
      this.props.validateOnChange && this.props.formik.validateOnChange && !on(se(i.formik.values, i.name), se(this.props.formik.values, this.props.name)) && this.props.formik.validateForm(this.props.formik.values);
    }, n.remove = function(i) {
      var o;
      return this.updateArrayField(
        // so this gets call 3 times
        function(s) {
          var a = s ? er(s) : [];
          return o || (o = a[i]), Ae(a.splice) && a.splice(i, 1), Ae(a.every) && a.every(function(l) {
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
      }, o = this.props, s = o.component, a = o.render, l = o.children, u = o.name, c = o.formik, f = fn(c, ["validate", "validationSchema"]), d = Y({}, i, {
        form: f,
        name: u
      });
      return s ? w.createElement(s, d) : a ? a(d) : l ? typeof l == "function" ? l(d) : _g(l) ? null : w.Children.only(l) : null;
    }, t;
  }(w.Component);
  $P.defaultProps = {
    validateOnChange: !0
  };
  var bP = /* @__PURE__ */ function(e) {
    kg(t, e);
    function t() {
      return e.apply(this, arguments) || this;
    }
    var n = t.prototype;
    return n.shouldComponentUpdate = function(i) {
      return se(this.props.formik.errors, this.props.name) !== se(i.formik.errors, this.props.name) || se(this.props.formik.touched, this.props.name) !== se(i.formik.touched, this.props.name) || Object.keys(this.props).length !== Object.keys(i).length;
    }, n.render = function() {
      var i = this.props, o = i.component, s = i.formik, a = i.render, l = i.children, u = i.name, c = fn(i, ["component", "formik", "render", "children", "name"]), f = se(s.touched, u), d = se(s.errors, u);
      return f && d ? a ? Ae(a) ? a(d) : null : l ? Ae(l) ? l(d) : null : o ? w.createElement(o, c, d) : d : null;
    }, t;
  }(w.Component), IP = /* @__PURE__ */ RP(bP);
  const Fg = w.createContext(void 0);
  function uo() {
    const e = w.useContext(Fg);
    if (e === void 0)
      throw new Error("useWizard must be used within the Wizard app!");
    return e;
  }
  function zP({ step: e }) {
    const { submitForm: t, setFieldValue: n } = va();
    w.useEffect(() => {
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
  function BP(e) {
    const t = {};
    return e.forEach((n) => {
      const r = n.id.replace(/[A-Z]/g, (i, o) => (o > 0 ? "-" : "") + i.toLowerCase());
      t[r] = n;
    }), t;
  }
  function vh(e) {
    const t = window.location.hash.slice(1);
    return e[t];
  }
  function UP(e, t) {
    const n = Object.keys(e).find((r) => e[r].id === t.id);
    window.location.hash = n || window.location.hash;
  }
  function HP(e) {
    let t = {};
    return Object.keys(e).forEach((n) => {
      t = {
        ...t,
        ...e[n]
      };
    }), t;
  }
  function WP({
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
    r && (l = BP(e), a = vh(l) || a);
    const [u, c] = w.useState(a), [f, d] = w.useState(!1), [p, g] = w.useState({}), v = w.useRef(null), P = e.findIndex((k) => k.id === u.id), y = P + 1, h = e.length, m = y === 1, x = y === h;
    w.useEffect(() => {
      if (r)
        return window.addEventListener("hashchange", E), UP(l, u), () => window.removeEventListener("hashchange", E);
    }, [u]);
    function E() {
      const k = vh(l);
      (k == null ? void 0 : k.id) !== u.id && O(k, v.current);
    }
    async function C(k, R, H) {
      let J;
      for (let ke = 0; ke < k.length; ++ke) {
        const me = k[ke];
        if (me.shouldSkip === void 0) {
          J = me;
          break;
        }
        if (!await me.shouldSkip(R, H)) {
          J = me;
          break;
        }
      }
      return J;
    }
    async function T(k) {
      const R = e.slice(P + 1);
      return await C(R, k, 1);
    }
    async function _(k) {
      const R = e.slice(0, P).reverse();
      return await C(R, k, -1);
    }
    function L(k) {
      t && (k = HP(k), t(k));
    }
    function O(k, R) {
      c(k), R && R.resetForm({ values: $(k) });
    }
    async function U(k, R) {
      try {
        u.onSubmit && (R.setStatus(""), d(!0), k = await u.onSubmit(k, p, R), d(!1));
        const H = {
          ...p,
          [u.id]: k
        };
        g(H);
        const J = await T(H);
        n && n(u, J, H), J ? O(J, R) : L(H);
      } catch (H) {
        console.log(H), d(!1), R.setStatus(H.message);
      }
    }
    async function pe(k, R) {
      let H = null;
      (u.keepValuesOnPrevious ?? !0) && (H = {
        ...p,
        [u.id]: k
      }, g(H)), H = H || p;
      const J = await _(H);
      n && n(u, J, H), J && O(J, R);
    }
    function G(k) {
      if (k)
        return (R) => k(R, p);
    }
    function K(k, R) {
      O(e[k], R);
    }
    function q(k) {
      c({ ...u, hideNext: k });
    }
    function je(k) {
      c({ ...u, disableNext: k });
    }
    function ze(k) {
      c({ ...u, hidePrevious: k });
    }
    function j(k) {
      c({ ...u, disablePrevious: k });
    }
    function $(k) {
      return p[k.id] || k.initialValues || {};
    }
    function I(k) {
      return {
        values: p,
        setValues: g,
        setHideNext: q,
        setDisableNext: je,
        setHidePrevious: ze,
        setDisablePrevious: j,
        setIsLoading: d,
        goToPreviousStep: () => pe(k.values, k),
        goToNextStep: () => U(k.values, k),
        goToStep: (R) => K(R, k),
        activeStep: u,
        stepNumber: y,
        totalSteps: h,
        isLoading: f,
        isFirstStep: m,
        isLastStep: x,
        // navigation
        hidePrevious: u.hidePrevious,
        hideNext: u.hideNext,
        disableNext: u.disableNext,
        disablePrevious: u.disablePrevious,
        disableNextOnErrors: u.disableNextOnErrors && !k.isValid,
        // allow form validation even if btn is disabled to show validation errors
        onClickDisabledNext: u.disableNext || u.disableNextOnErrors ? async () => {
          const R = await k.validateForm();
          Object.keys(R).forEach((H) => {
            k.setFieldTouched(H, !0, !1);
          });
        } : void 0
      };
    }
    return /* @__PURE__ */ F.jsx(
      kP,
      {
        initialValues: $(u),
        validationSchema: u.validationSchema,
        validate: G(u.validate),
        validateOnChange: u.validateOnChange ?? !0,
        validateOnBlur: u.validateOnBlur ?? !0,
        onSubmit: U,
        innerRef: v,
        children: (k) => {
          const R = I(k), H = o || u.component;
          return /* @__PURE__ */ F.jsx(Fg.Provider, { value: R, children: /* @__PURE__ */ F.jsxs(Og, { children: [
            i,
            u.submitOnChange && /* @__PURE__ */ F.jsx(zP, { step: u }),
            H,
            s
          ] }) });
        }
      }
    );
  }
  function GP() {
    const { goToStep: e } = uo();
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
  function KP() {
    return /* @__PURE__ */ F.jsxs("div", { className: "prose max-w-none", children: [
      /* @__PURE__ */ F.jsx("h2", { children: "Async" }),
      /* @__PURE__ */ F.jsx("p", { children: 'Pressing "Next" does async operation that takes 2 seconds before we proceed to the next step.' })
    ] });
  }
  function QP() {
    const { values: e, setHideNext: t } = uo(), [n, r] = w.useState(!0);
    function i() {
      const s = !n;
      r(s), t(s);
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
  const YP = [
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
      validationSchema: Aw,
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
      validate: Ow,
      disableNextOnErrors: !0
    },
    {
      id: "EmailCheck",
      component: /* @__PURE__ */ F.jsx(GP, {}),
      hideNext: !0,
      hidePrevious: !0,
      shouldSkip: (e, t) => t === -1 ? !0 : !!e.ContactInfo.email
    },
    {
      id: "Async",
      component: /* @__PURE__ */ F.jsx(KP, {}),
      onSubmit: async (e, t, n) => (await ((i) => new Promise((o) => setTimeout(o, i)))(2e3), e)
    },
    {
      id: "Final",
      component: /* @__PURE__ */ F.jsx(QP, {}),
      hideNext: !0,
      hidePrevious: !1
    }
  ], jg = w.createContext({
    transformPagePoint: (e) => e,
    isStatic: !1,
    reducedMotion: "never"
  }), xa = w.createContext({}), wa = w.createContext(null), Sa = typeof document < "u", Jc = Sa ? w.useLayoutEffect : w.useEffect, Dg = w.createContext({ strict: !1 });
  function XP(e, t, n, r) {
    const { visualElement: i } = w.useContext(xa), o = w.useContext(Dg), s = w.useContext(wa), a = w.useContext(jg).reducedMotion, l = w.useRef();
    r = r || o.renderer, !l.current && r && (l.current = r(e, {
      visualState: t,
      parent: i,
      props: n,
      presenceContext: s,
      blockInitialAnimation: s ? s.initial === !1 : !1,
      reducedMotionConfig: a
    }));
    const u = l.current;
    w.useInsertionEffect(() => {
      u && u.update(n, s);
    });
    const c = w.useRef(!!window.HandoffAppearAnimations);
    return Jc(() => {
      u && (u.render(), c.current && u.animationState && u.animationState.animateChanges());
    }), w.useEffect(() => {
      u && (u.updateFeatures(), !c.current && u.animationState && u.animationState.animateChanges(), window.HandoffAppearAnimations = void 0, c.current = !1);
    }), u;
  }
  function Ar(e) {
    return typeof e == "object" && Object.prototype.hasOwnProperty.call(e, "current");
  }
  function ZP(e, t, n) {
    return w.useCallback(
      (r) => {
        r && e.mount && e.mount(r), t && (r ? t.mount(r) : t.unmount()), n && (typeof n == "function" ? n(r) : Ar(n) && (n.current = r));
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
  function Ta(e) {
    return typeof e == "object" && typeof e.start == "function";
  }
  const ef = [
    "animate",
    "whileInView",
    "whileFocus",
    "whileHover",
    "whileTap",
    "whileDrag",
    "exit"
  ], tf = ["initial", ...ef];
  function Ea(e) {
    return Ta(e.animate) || tf.some((t) => qi(e[t]));
  }
  function Mg(e) {
    return !!(Ea(e) || e.variants);
  }
  function qP(e, t) {
    if (Ea(e)) {
      const { initial: n, animate: r } = e;
      return {
        initial: n === !1 || qi(n) ? n : void 0,
        animate: qi(r) ? r : void 0
      };
    }
    return e.inherit !== !1 ? t : {};
  }
  function JP(e) {
    const { initial: t, animate: n } = qP(e, w.useContext(xa));
    return w.useMemo(() => ({ initial: t, animate: n }), [xh(t), xh(n)]);
  }
  function xh(e) {
    return Array.isArray(e) ? e.join(" ") : e;
  }
  const wh = {
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
  for (const e in wh)
    Ji[e] = {
      isEnabled: (t) => wh[e].some((n) => !!t[n])
    };
  function ek(e) {
    for (const t in e)
      Ji[t] = {
        ...Ji[t],
        ...e[t]
      };
  }
  const nf = w.createContext({}), Rg = w.createContext({}), tk = Symbol.for("motionComponentSymbol");
  function nk({ preloadedFeatures: e, createVisualElement: t, useRender: n, useVisualState: r, Component: i }) {
    e && ek(e);
    function o(a, l) {
      let u;
      const c = {
        ...w.useContext(jg),
        ...a,
        layoutId: rk(a)
      }, { isStatic: f } = c, d = JP(a), p = r(a, f);
      if (!f && Sa) {
        d.visualElement = XP(i, p, c, t);
        const g = w.useContext(Rg), v = w.useContext(Dg).strict;
        d.visualElement && (u = d.visualElement.loadFeatures(
          // Note: Pass the full new combined props to correctly re-render dynamic feature components.
          c,
          v,
          e,
          g
        ));
      }
      return w.createElement(
        xa.Provider,
        { value: d },
        u && d.visualElement ? w.createElement(u, { visualElement: d.visualElement, ...c }) : null,
        n(i, a, ZP(p, d.visualElement, l), p, f, d.visualElement)
      );
    }
    const s = w.forwardRef(o);
    return s[tk] = i, s;
  }
  function rk({ layoutId: e }) {
    const t = w.useContext(nf).id;
    return t && e !== void 0 ? t + "-" + e : e;
  }
  function ik(e) {
    function t(r, i = {}) {
      return nk(e(r, i));
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
  const ok = [
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
  function rf(e) {
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
        !!(ok.indexOf(e) > -1 || /**
         * If it contains a capital letter, it's an SVG component
         */
        /[A-Z]/.test(e))
      )
    );
  }
  const Os = {};
  function sk(e) {
    Object.assign(Os, e);
  }
  const co = [
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
  ], ur = new Set(co);
  function Ng(e, { layout: t, layoutId: n }) {
    return ur.has(e) || e.startsWith("origin") || (t || n !== void 0) && (!!Os[e] || e === "opacity");
  }
  const Ke = (e) => !!(e && e.getVelocity), ak = {
    x: "translateX",
    y: "translateY",
    z: "translateZ",
    transformPerspective: "perspective"
  }, lk = co.length;
  function uk(e, { enableHardwareAcceleration: t = !0, allowTransformNone: n = !0 }, r, i) {
    let o = "";
    for (let s = 0; s < lk; s++) {
      const a = co[s];
      if (e[a] !== void 0) {
        const l = ak[a] || a;
        o += `${l}(${e[a]}) `;
      }
    }
    return t && !e.z && (o += "translateZ(0)"), o = o.trim(), i ? o = i(e, r ? "" : o) : n && r && (o = "none"), o;
  }
  const Lg = (e) => (t) => typeof t == "string" && t.startsWith(e), Vg = Lg("--"), ku = Lg("var(--"), ck = /var\s*\(\s*--[\w-]+(\s*,\s*(?:(?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)+)?\s*\)/g, fk = (e, t) => t && typeof e == "number" ? t.transform(e) : e, kn = (e, t, n) => Math.min(Math.max(n, e), t), cr = {
    test: (e) => typeof e == "number",
    parse: parseFloat,
    transform: (e) => e
  }, Ai = {
    ...cr,
    transform: (e) => kn(0, 1, e)
  }, Lo = {
    ...cr,
    default: 1
  }, Oi = (e) => Math.round(e * 1e5) / 1e5, Ca = /(-)?([\d]*\.?[\d])+/g, $g = /(#[0-9a-f]{3,8}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))/gi, dk = /^(#[0-9a-f]{3,8}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))$/i;
  function fo(e) {
    return typeof e == "string";
  }
  const ho = (e) => ({
    test: (t) => fo(t) && t.endsWith(e) && t.split(" ").length === 1,
    parse: parseFloat,
    transform: (t) => `${t}${e}`
  }), tn = ho("deg"), jt = ho("%"), b = ho("px"), hk = ho("vh"), pk = ho("vw"), Sh = {
    ...jt,
    parse: (e) => jt.parse(e) / 100,
    transform: (e) => jt.transform(e * 100)
  }, Th = {
    ...cr,
    transform: Math.round
  }, bg = {
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
    rotate: tn,
    rotateX: tn,
    rotateY: tn,
    rotateZ: tn,
    scale: Lo,
    scaleX: Lo,
    scaleY: Lo,
    scaleZ: Lo,
    skew: tn,
    skewX: tn,
    skewY: tn,
    distance: b,
    translateX: b,
    translateY: b,
    translateZ: b,
    x: b,
    y: b,
    z: b,
    perspective: b,
    transformPerspective: b,
    opacity: Ai,
    originX: Sh,
    originY: Sh,
    originZ: b,
    // Misc
    zIndex: Th,
    // SVG
    fillOpacity: Ai,
    strokeOpacity: Ai,
    numOctaves: Th
  };
  function of(e, t, n, r) {
    const { style: i, vars: o, transform: s, transformOrigin: a } = e;
    let l = !1, u = !1, c = !0;
    for (const f in t) {
      const d = t[f];
      if (Vg(f)) {
        o[f] = d;
        continue;
      }
      const p = bg[f], g = fk(d, p);
      if (ur.has(f)) {
        if (l = !0, s[f] = g, !c)
          continue;
        d !== (p.default || 0) && (c = !1);
      } else
        f.startsWith("origin") ? (u = !0, a[f] = g) : i[f] = g;
    }
    if (t.transform || (l || r ? i.transform = uk(e.transform, n, c, r) : i.transform && (i.transform = "none")), u) {
      const { originX: f = "50%", originY: d = "50%", originZ: p = 0 } = a;
      i.transformOrigin = `${f} ${d} ${p}`;
    }
  }
  const sf = () => ({
    style: {},
    transform: {},
    transformOrigin: {},
    vars: {}
  });
  function Ig(e, t, n) {
    for (const r in t)
      !Ke(t[r]) && !Ng(r, n) && (e[r] = t[r]);
  }
  function mk({ transformTemplate: e }, t, n) {
    return w.useMemo(() => {
      const r = sf();
      return of(r, t, { enableHardwareAcceleration: !n }, e), Object.assign({}, r.vars, r.style);
    }, [t]);
  }
  function yk(e, t, n) {
    const r = e.style || {}, i = {};
    return Ig(i, r, e), Object.assign(i, mk(e, t, n)), e.transformValues ? e.transformValues(i) : i;
  }
  function gk(e, t, n) {
    const r = {}, i = yk(e, t, n);
    return e.drag && e.dragListener !== !1 && (r.draggable = !1, i.userSelect = i.WebkitUserSelect = i.WebkitTouchCallout = "none", i.touchAction = e.drag === !0 ? "none" : `pan-${e.drag === "x" ? "y" : "x"}`), e.tabIndex === void 0 && (e.onTap || e.onTapStart || e.whileTap) && (r.tabIndex = 0), r.style = i, r;
  }
  const vk = /* @__PURE__ */ new Set([
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
  function Fs(e) {
    return e.startsWith("while") || e.startsWith("drag") && e !== "draggable" || e.startsWith("layout") || e.startsWith("onTap") || e.startsWith("onPan") || vk.has(e);
  }
  let zg = (e) => !Fs(e);
  function xk(e) {
    e && (zg = (t) => t.startsWith("on") ? !Fs(t) : e(t));
  }
  try {
    xk(require("@emotion/is-prop-valid").default);
  } catch {
  }
  function wk(e, t, n) {
    const r = {};
    for (const i in e)
      i === "values" && typeof e.values == "object" || (zg(i) || n === !0 && Fs(i) || !t && !Fs(i) || // If trying to use native HTML drag events, forward drag listeners
      e.draggable && i.startsWith("onDrag")) && (r[i] = e[i]);
    return r;
  }
  function Eh(e, t, n) {
    return typeof e == "string" ? e : b.transform(t + n * e);
  }
  function Sk(e, t, n) {
    const r = Eh(t, e.x, e.width), i = Eh(n, e.y, e.height);
    return `${r} ${i}`;
  }
  const Tk = {
    offset: "stroke-dashoffset",
    array: "stroke-dasharray"
  }, Ek = {
    offset: "strokeDashoffset",
    array: "strokeDasharray"
  };
  function Ck(e, t, n = 1, r = 0, i = !0) {
    e.pathLength = 1;
    const o = i ? Tk : Ek;
    e[o.offset] = b.transform(-r);
    const s = b.transform(t), a = b.transform(n);
    e[o.array] = `${s} ${a}`;
  }
  function af(e, {
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
    if (of(e, u, c, d), f) {
      e.style.viewBox && (e.attrs.viewBox = e.style.viewBox);
      return;
    }
    e.attrs = e.style, e.style = {};
    const { attrs: p, style: g, dimensions: v } = e;
    p.transform && (v && (g.transform = p.transform), delete p.transform), v && (i !== void 0 || o !== void 0 || g.transform) && (g.transformOrigin = Sk(v, i !== void 0 ? i : 0.5, o !== void 0 ? o : 0.5)), t !== void 0 && (p.x = t), n !== void 0 && (p.y = n), r !== void 0 && (p.scale = r), s !== void 0 && Ck(p, s, a, l, !1);
  }
  const Bg = () => ({
    ...sf(),
    attrs: {}
  }), lf = (e) => typeof e == "string" && e.toLowerCase() === "svg";
  function Pk(e, t, n, r) {
    const i = w.useMemo(() => {
      const o = Bg();
      return af(o, t, { enableHardwareAcceleration: !1 }, lf(r), e.transformTemplate), {
        ...o.attrs,
        style: { ...o.style }
      };
    }, [t]);
    if (e.style) {
      const o = {};
      Ig(o, e.style, e), i.style = { ...o, ...i.style };
    }
    return i;
  }
  function kk(e = !1) {
    return (n, r, i, { latestValues: o }, s) => {
      const l = (rf(n) ? Pk : gk)(r, o, s, n), c = {
        ...wk(r, typeof n == "string", e),
        ...l,
        ref: i
      }, { children: f } = r, d = w.useMemo(() => Ke(f) ? f.get() : f, [f]);
      return w.createElement(n, {
        ...c,
        children: d
      });
    };
  }
  const uf = (e) => e.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase();
  function Ug(e, { style: t, vars: n }, r, i) {
    Object.assign(e.style, t, i && i.getProjectionStyles(r));
    for (const o in n)
      e.style.setProperty(o, n[o]);
  }
  const Hg = /* @__PURE__ */ new Set([
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
  function Wg(e, t, n, r) {
    Ug(e, t, void 0, r);
    for (const i in t.attrs)
      e.setAttribute(Hg.has(i) ? i : uf(i), t.attrs[i]);
  }
  function cf(e, t) {
    const { style: n } = e, r = {};
    for (const i in n)
      (Ke(n[i]) || t.style && Ke(t.style[i]) || Ng(i, e)) && (r[i] = n[i]);
    return r;
  }
  function Gg(e, t) {
    const n = cf(e, t);
    for (const r in e)
      if (Ke(e[r]) || Ke(t[r])) {
        const i = co.indexOf(r) !== -1 ? "attr" + r.charAt(0).toUpperCase() + r.substring(1) : r;
        n[i] = e[r];
      }
    return n;
  }
  function ff(e, t, n, r = {}, i = {}) {
    return typeof t == "function" && (t = t(n !== void 0 ? n : e.custom, r, i)), typeof t == "string" && (t = e.variants && e.variants[t]), typeof t == "function" && (t = t(n !== void 0 ? n : e.custom, r, i)), t;
  }
  function Kg(e) {
    const t = w.useRef(null);
    return t.current === null && (t.current = e()), t.current;
  }
  const js = (e) => Array.isArray(e), _k = (e) => !!(e && typeof e == "object" && e.mix && e.toValue), Ak = (e) => js(e) ? e[e.length - 1] || 0 : e;
  function es(e) {
    const t = Ke(e) ? e.get() : e;
    return _k(t) ? t.toValue() : t;
  }
  function Ok({ scrapeMotionValuesFromProps: e, createRenderState: t, onMount: n }, r, i, o) {
    const s = {
      latestValues: Fk(r, i, o, e),
      renderState: t()
    };
    return n && (s.mount = (a) => n(r, a, s)), s;
  }
  const Qg = (e) => (t, n) => {
    const r = w.useContext(xa), i = w.useContext(wa), o = () => Ok(e, t, r, i);
    return n ? o() : Kg(o);
  };
  function Fk(e, t, n, r) {
    const i = {}, o = r(e, {});
    for (const d in o)
      i[d] = es(o[d]);
    let { initial: s, animate: a } = e;
    const l = Ea(e), u = Mg(e);
    t && u && !l && e.inherit !== !1 && (s === void 0 && (s = t.initial), a === void 0 && (a = t.animate));
    let c = n ? n.initial === !1 : !1;
    c = c || s === !1;
    const f = c ? a : s;
    return f && typeof f != "boolean" && !Ta(f) && (Array.isArray(f) ? f : [f]).forEach((p) => {
      const g = ff(e, p);
      if (!g)
        return;
      const { transitionEnd: v, transition: P, ...y } = g;
      for (const h in y) {
        let m = y[h];
        if (Array.isArray(m)) {
          const x = c ? m.length - 1 : 0;
          m = m[x];
        }
        m !== null && (i[h] = m);
      }
      for (const h in v)
        i[h] = v[h];
    }), i;
  }
  const he = (e) => e;
  class Ch {
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
  function jk(e) {
    let t = new Ch(), n = new Ch(), r = 0, i = !1, o = !1;
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
  const Vo = [
    "prepare",
    "read",
    "update",
    "preRender",
    "render",
    "postRender"
  ], Dk = 40;
  function Mk(e, t) {
    let n = !1, r = !0;
    const i = {
      delta: 0,
      timestamp: 0,
      isProcessing: !1
    }, o = Vo.reduce((f, d) => (f[d] = jk(() => n = !0), f), {}), s = (f) => o[f].process(i), a = () => {
      const f = performance.now();
      n = !1, i.delta = r ? 1e3 / 60 : Math.max(Math.min(f - i.timestamp, Dk), 1), i.timestamp = f, i.isProcessing = !0, Vo.forEach(s), i.isProcessing = !1, n && t && (r = !1, e(a));
    }, l = () => {
      n = !0, r = !0, i.isProcessing || e(a);
    };
    return { schedule: Vo.reduce((f, d) => {
      const p = o[d];
      return f[d] = (g, v = !1, P = !1) => (n || l(), p.schedule(g, v, P)), f;
    }, {}), cancel: (f) => Vo.forEach((d) => o[d].cancel(f)), state: i, steps: o };
  }
  const { schedule: ne, cancel: Xt, state: Te, steps: cl } = Mk(typeof requestAnimationFrame < "u" ? requestAnimationFrame : he, !0), Rk = {
    useVisualState: Qg({
      scrapeMotionValuesFromProps: Gg,
      createRenderState: Bg,
      onMount: (e, t, { renderState: n, latestValues: r }) => {
        ne.read(() => {
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
        }), ne.render(() => {
          af(n, r, { enableHardwareAcceleration: !1 }, lf(t.tagName), e.transformTemplate), Wg(t, n);
        });
      }
    })
  }, Nk = {
    useVisualState: Qg({
      scrapeMotionValuesFromProps: cf,
      createRenderState: sf
    })
  };
  function Lk(e, { forwardMotionProps: t = !1 }, n, r) {
    return {
      ...rf(e) ? Rk : Nk,
      preloadedFeatures: n,
      useRender: kk(t),
      createVisualElement: r,
      Component: e
    };
  }
  function zt(e, t, n, r = { passive: !0 }) {
    return e.addEventListener(t, n, r), () => e.removeEventListener(t, n);
  }
  const Yg = (e) => e.pointerType === "mouse" ? typeof e.button != "number" || e.button <= 0 : e.isPrimary !== !1;
  function Pa(e, t = "page") {
    return {
      point: {
        x: e[t + "X"],
        y: e[t + "Y"]
      }
    };
  }
  const Vk = (e) => (t) => Yg(t) && e(t, Pa(t));
  function Ht(e, t, n, r) {
    return zt(e, t, Vk(n), r);
  }
  const $k = (e, t) => (n) => t(e(n)), wn = (...e) => e.reduce($k);
  function Xg(e) {
    let t = null;
    return () => {
      const n = () => {
        t = null;
      };
      return t === null ? (t = e, n) : !1;
    };
  }
  const Ph = Xg("dragHorizontal"), kh = Xg("dragVertical");
  function Zg(e) {
    let t = !1;
    if (e === "y")
      t = kh();
    else if (e === "x")
      t = Ph();
    else {
      const n = Ph(), r = kh();
      n && r ? t = () => {
        n(), r();
      } : (n && n(), r && r());
    }
    return t;
  }
  function qg() {
    const e = Zg(!0);
    return e ? (e(), !1) : !0;
  }
  class Dn {
    constructor(t) {
      this.isMounted = !1, this.node = t;
    }
    update() {
    }
  }
  function _h(e, t) {
    const n = "pointer" + (t ? "enter" : "leave"), r = "onHover" + (t ? "Start" : "End"), i = (o, s) => {
      if (o.type === "touch" || qg())
        return;
      const a = e.getProps();
      e.animationState && a.whileHover && e.animationState.setActive("whileHover", t), a[r] && ne.update(() => a[r](o, s));
    };
    return Ht(e.current, n, i, {
      passive: !e.getProps()[r]
    });
  }
  class bk extends Dn {
    mount() {
      this.unmount = wn(_h(this.node, !0), _h(this.node, !1));
    }
    unmount() {
    }
  }
  class Ik extends Dn {
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
      this.unmount = wn(zt(this.node.current, "focus", () => this.onFocus()), zt(this.node.current, "blur", () => this.onBlur()));
    }
    unmount() {
    }
  }
  const Jg = (e, t) => t ? e === t ? !0 : Jg(e, t.parentElement) : !1;
  function fl(e, t) {
    if (!t)
      return;
    const n = new PointerEvent("pointer" + e);
    t(n, Pa(n));
  }
  class zk extends Dn {
    constructor() {
      super(...arguments), this.removeStartListeners = he, this.removeEndListeners = he, this.removeAccessibleListeners = he, this.startPointerPress = (t, n) => {
        if (this.removeEndListeners(), this.isPressing)
          return;
        const r = this.node.getProps(), o = Ht(window, "pointerup", (a, l) => {
          if (!this.checkPressEnd())
            return;
          const { onTap: u, onTapCancel: c } = this.node.getProps();
          ne.update(() => {
            Jg(this.node.current, a.target) ? u && u(a, l) : c && c(a, l);
          });
        }, { passive: !(r.onTap || r.onPointerUp) }), s = Ht(window, "pointercancel", (a, l) => this.cancelPress(a, l), { passive: !(r.onTapCancel || r.onPointerCancel) });
        this.removeEndListeners = wn(o, s), this.startPress(t, n);
      }, this.startAccessiblePress = () => {
        const t = (o) => {
          if (o.key !== "Enter" || this.isPressing)
            return;
          const s = (a) => {
            a.key !== "Enter" || !this.checkPressEnd() || fl("up", (l, u) => {
              const { onTap: c } = this.node.getProps();
              c && ne.update(() => c(l, u));
            });
          };
          this.removeEndListeners(), this.removeEndListeners = zt(this.node.current, "keyup", s), fl("down", (a, l) => {
            this.startPress(a, l);
          });
        }, n = zt(this.node.current, "keydown", t), r = () => {
          this.isPressing && fl("cancel", (o, s) => this.cancelPress(o, s));
        }, i = zt(this.node.current, "blur", r);
        this.removeAccessibleListeners = wn(n, i);
      };
    }
    startPress(t, n) {
      this.isPressing = !0;
      const { onTapStart: r, whileTap: i } = this.node.getProps();
      i && this.node.animationState && this.node.animationState.setActive("whileTap", !0), r && ne.update(() => r(t, n));
    }
    checkPressEnd() {
      return this.removeEndListeners(), this.isPressing = !1, this.node.getProps().whileTap && this.node.animationState && this.node.animationState.setActive("whileTap", !1), !qg();
    }
    cancelPress(t, n) {
      if (!this.checkPressEnd())
        return;
      const { onTapCancel: r } = this.node.getProps();
      r && ne.update(() => r(t, n));
    }
    mount() {
      const t = this.node.getProps(), n = Ht(this.node.current, "pointerdown", this.startPointerPress, { passive: !(t.onTapStart || t.onPointerStart) }), r = zt(this.node.current, "focus", this.startAccessiblePress);
      this.removeStartListeners = wn(n, r);
    }
    unmount() {
      this.removeStartListeners(), this.removeEndListeners(), this.removeAccessibleListeners();
    }
  }
  const _u = /* @__PURE__ */ new WeakMap(), dl = /* @__PURE__ */ new WeakMap(), Bk = (e) => {
    const t = _u.get(e.target);
    t && t(e);
  }, Uk = (e) => {
    e.forEach(Bk);
  };
  function Hk({ root: e, ...t }) {
    const n = e || document;
    dl.has(n) || dl.set(n, {});
    const r = dl.get(n), i = JSON.stringify(t);
    return r[i] || (r[i] = new IntersectionObserver(Uk, { root: e, ...t })), r[i];
  }
  function Wk(e, t, n) {
    const r = Hk(t);
    return _u.set(e, n), r.observe(e), () => {
      _u.delete(e), r.unobserve(e);
    };
  }
  const Gk = {
    some: 0,
    all: 1
  };
  class Kk extends Dn {
    constructor() {
      super(...arguments), this.hasEnteredView = !1, this.isInView = !1;
    }
    startObserver() {
      this.unmount();
      const { viewport: t = {} } = this.node.getProps(), { root: n, margin: r, amount: i = "some", once: o } = t, s = {
        root: n ? n.current : void 0,
        rootMargin: r,
        threshold: typeof i == "number" ? i : Gk[i]
      }, a = (l) => {
        const { isIntersecting: u } = l;
        if (this.isInView === u || (this.isInView = u, o && !u && this.hasEnteredView))
          return;
        u && (this.hasEnteredView = !0), this.node.animationState && this.node.animationState.setActive("whileInView", u);
        const { onViewportEnter: c, onViewportLeave: f } = this.node.getProps(), d = u ? c : f;
        d && d(l);
      };
      return Wk(this.node.current, s, a);
    }
    mount() {
      this.startObserver();
    }
    update() {
      if (typeof IntersectionObserver > "u")
        return;
      const { props: t, prevProps: n } = this.node;
      ["amount", "margin", "root"].some(Qk(t, n)) && this.startObserver();
    }
    unmount() {
    }
  }
  function Qk({ viewport: e = {} }, { viewport: t = {} } = {}) {
    return (n) => e[n] !== t[n];
  }
  const Yk = {
    inView: {
      Feature: Kk
    },
    tap: {
      Feature: zk
    },
    focus: {
      Feature: Ik
    },
    hover: {
      Feature: bk
    }
  };
  function ev(e, t) {
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
  function Xk(e) {
    const t = {};
    return e.values.forEach((n, r) => t[r] = n.get()), t;
  }
  function Zk(e) {
    const t = {};
    return e.values.forEach((n, r) => t[r] = n.getVelocity()), t;
  }
  function ka(e, t, n) {
    const r = e.getProps();
    return ff(r, t, n !== void 0 ? n : r.custom, Xk(e), Zk(e));
  }
  const qk = "framerAppearId", Jk = "data-" + uf(qk);
  let e2 = he, df = he;
  const Sn = (e) => e * 1e3, Wt = (e) => e / 1e3, t2 = {
    current: !1
  }, tv = (e) => Array.isArray(e) && typeof e[0] == "number";
  function nv(e) {
    return !!(!e || typeof e == "string" && rv[e] || tv(e) || Array.isArray(e) && e.every(nv));
  }
  const yi = ([e, t, n, r]) => `cubic-bezier(${e}, ${t}, ${n}, ${r})`, rv = {
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
  function iv(e) {
    if (e)
      return tv(e) ? yi(e) : Array.isArray(e) ? e.map(iv) : rv[e];
  }
  function n2(e, t, n, { delay: r = 0, duration: i, repeat: o = 0, repeatType: s = "loop", ease: a, times: l } = {}) {
    const u = { [t]: n };
    l && (u.offset = l);
    const c = iv(a);
    return Array.isArray(c) && (u.easing = c), e.animate(u, {
      delay: r,
      duration: i,
      easing: Array.isArray(c) ? "linear" : c,
      fill: "both",
      iterations: o + 1,
      direction: s === "reverse" ? "alternate" : "normal"
    });
  }
  function r2(e, { repeat: t, repeatType: n = "loop" }) {
    const r = t && n !== "loop" && t % 2 === 1 ? 0 : e.length - 1;
    return e[r];
  }
  const ov = (e, t, n) => (((1 - 3 * n + 3 * t) * e + (3 * n - 6 * t)) * e + 3 * t) * e, i2 = 1e-7, o2 = 12;
  function s2(e, t, n, r, i) {
    let o, s, a = 0;
    do
      s = t + (n - t) / 2, o = ov(s, r, i) - e, o > 0 ? n = s : t = s;
    while (Math.abs(o) > i2 && ++a < o2);
    return s;
  }
  function po(e, t, n, r) {
    if (e === t && n === r)
      return he;
    const i = (o) => s2(o, 0, 1, e, n);
    return (o) => o === 0 || o === 1 ? o : ov(i(o), t, r);
  }
  const a2 = po(0.42, 0, 1, 1), l2 = po(0, 0, 0.58, 1), sv = po(0.42, 0, 0.58, 1), u2 = (e) => Array.isArray(e) && typeof e[0] != "number", av = (e) => (t) => t <= 0.5 ? e(2 * t) / 2 : (2 - e(2 * (1 - t))) / 2, lv = (e) => (t) => 1 - e(1 - t), uv = (e) => 1 - Math.sin(Math.acos(e)), hf = lv(uv), c2 = av(hf), cv = po(0.33, 1.53, 0.69, 0.99), pf = lv(cv), f2 = av(pf), d2 = (e) => (e *= 2) < 1 ? 0.5 * pf(e) : 0.5 * (2 - Math.pow(2, -10 * (e - 1))), h2 = {
    linear: he,
    easeIn: a2,
    easeInOut: sv,
    easeOut: l2,
    circIn: uv,
    circInOut: c2,
    circOut: hf,
    backIn: pf,
    backInOut: f2,
    backOut: cv,
    anticipate: d2
  }, Ah = (e) => {
    if (Array.isArray(e)) {
      df(e.length === 4);
      const [t, n, r, i] = e;
      return po(t, n, r, i);
    } else if (typeof e == "string")
      return h2[e];
    return e;
  }, mf = (e, t) => (n) => !!(fo(n) && dk.test(n) && n.startsWith(e) || t && Object.prototype.hasOwnProperty.call(n, t)), fv = (e, t, n) => (r) => {
    if (!fo(r))
      return r;
    const [i, o, s, a] = r.match(Ca);
    return {
      [e]: parseFloat(i),
      [t]: parseFloat(o),
      [n]: parseFloat(s),
      alpha: a !== void 0 ? parseFloat(a) : 1
    };
  }, p2 = (e) => kn(0, 255, e), hl = {
    ...cr,
    transform: (e) => Math.round(p2(e))
  }, Hn = {
    test: mf("rgb", "red"),
    parse: fv("red", "green", "blue"),
    transform: ({ red: e, green: t, blue: n, alpha: r = 1 }) => "rgba(" + hl.transform(e) + ", " + hl.transform(t) + ", " + hl.transform(n) + ", " + Oi(Ai.transform(r)) + ")"
  };
  function m2(e) {
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
    parse: m2,
    transform: Hn.transform
  }, Or = {
    test: mf("hsl", "hue"),
    parse: fv("hue", "saturation", "lightness"),
    transform: ({ hue: e, saturation: t, lightness: n, alpha: r = 1 }) => "hsla(" + Math.round(e) + ", " + jt.transform(Oi(t)) + ", " + jt.transform(Oi(n)) + ", " + Oi(Ai.transform(r)) + ")"
  }, Le = {
    test: (e) => Hn.test(e) || Au.test(e) || Or.test(e),
    parse: (e) => Hn.test(e) ? Hn.parse(e) : Or.test(e) ? Or.parse(e) : Au.parse(e),
    transform: (e) => fo(e) ? e : e.hasOwnProperty("red") ? Hn.transform(e) : Or.transform(e)
  }, ue = (e, t, n) => -n * e + n * t + e;
  function pl(e, t, n) {
    return n < 0 && (n += 1), n > 1 && (n -= 1), n < 1 / 6 ? e + (t - e) * 6 * n : n < 1 / 2 ? t : n < 2 / 3 ? e + (t - e) * (2 / 3 - n) * 6 : e;
  }
  function y2({ hue: e, saturation: t, lightness: n, alpha: r }) {
    e /= 360, t /= 100, n /= 100;
    let i = 0, o = 0, s = 0;
    if (!t)
      i = o = s = n;
    else {
      const a = n < 0.5 ? n * (1 + t) : n + t - n * t, l = 2 * n - a;
      i = pl(l, a, e + 1 / 3), o = pl(l, a, e), s = pl(l, a, e - 1 / 3);
    }
    return {
      red: Math.round(i * 255),
      green: Math.round(o * 255),
      blue: Math.round(s * 255),
      alpha: r
    };
  }
  const ml = (e, t, n) => {
    const r = e * e;
    return Math.sqrt(Math.max(0, n * (t * t - r) + r));
  }, g2 = [Au, Hn, Or], v2 = (e) => g2.find((t) => t.test(e));
  function Oh(e) {
    const t = v2(e);
    let n = t.parse(e);
    return t === Or && (n = y2(n)), n;
  }
  const dv = (e, t) => {
    const n = Oh(e), r = Oh(t), i = { ...n };
    return (o) => (i.red = ml(n.red, r.red, o), i.green = ml(n.green, r.green, o), i.blue = ml(n.blue, r.blue, o), i.alpha = ue(n.alpha, r.alpha, o), Hn.transform(i));
  };
  function x2(e) {
    var t, n;
    return isNaN(e) && fo(e) && (((t = e.match(Ca)) === null || t === void 0 ? void 0 : t.length) || 0) + (((n = e.match($g)) === null || n === void 0 ? void 0 : n.length) || 0) > 0;
  }
  const hv = {
    regex: ck,
    countKey: "Vars",
    token: "${v}",
    parse: he
  }, pv = {
    regex: $g,
    countKey: "Colors",
    token: "${c}",
    parse: Le.parse
  }, mv = {
    regex: Ca,
    countKey: "Numbers",
    token: "${n}",
    parse: cr.parse
  };
  function yl(e, { regex: t, countKey: n, token: r, parse: i }) {
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
    return n.value.includes("var(--") && yl(n, hv), yl(n, pv), yl(n, mv), n;
  }
  function yv(e) {
    return Ds(e).values;
  }
  function gv(e) {
    const { values: t, numColors: n, numVars: r, tokenised: i } = Ds(e), o = t.length;
    return (s) => {
      let a = i;
      for (let l = 0; l < o; l++)
        l < r ? a = a.replace(hv.token, s[l]) : l < r + n ? a = a.replace(pv.token, Le.transform(s[l])) : a = a.replace(mv.token, Oi(s[l]));
      return a;
    };
  }
  const w2 = (e) => typeof e == "number" ? 0 : e;
  function S2(e) {
    const t = yv(e);
    return gv(e)(t.map(w2));
  }
  const _n = {
    test: x2,
    parse: yv,
    createTransformer: gv,
    getAnimatableNone: S2
  }, vv = (e, t) => (n) => `${n > 0 ? t : e}`;
  function xv(e, t) {
    return typeof e == "number" ? (n) => ue(e, t, n) : Le.test(e) ? dv(e, t) : e.startsWith("var(") ? vv(e, t) : Sv(e, t);
  }
  const wv = (e, t) => {
    const n = [...e], r = n.length, i = e.map((o, s) => xv(o, t[s]));
    return (o) => {
      for (let s = 0; s < r; s++)
        n[s] = i[s](o);
      return n;
    };
  }, T2 = (e, t) => {
    const n = { ...e, ...t }, r = {};
    for (const i in n)
      e[i] !== void 0 && t[i] !== void 0 && (r[i] = xv(e[i], t[i]));
    return (i) => {
      for (const o in r)
        n[o] = r[o](i);
      return n;
    };
  }, Sv = (e, t) => {
    const n = _n.createTransformer(t), r = Ds(e), i = Ds(t);
    return r.numVars === i.numVars && r.numColors === i.numColors && r.numNumbers >= i.numNumbers ? wn(wv(r.values, i.values), n) : vv(e, t);
  }, eo = (e, t, n) => {
    const r = t - e;
    return r === 0 ? 1 : (n - e) / r;
  }, Fh = (e, t) => (n) => ue(e, t, n);
  function E2(e) {
    return typeof e == "number" ? Fh : typeof e == "string" ? Le.test(e) ? dv : Sv : Array.isArray(e) ? wv : typeof e == "object" ? T2 : Fh;
  }
  function C2(e, t, n) {
    const r = [], i = n || E2(e[0]), o = e.length - 1;
    for (let s = 0; s < o; s++) {
      let a = i(e[s], e[s + 1]);
      if (t) {
        const l = Array.isArray(t) ? t[s] || he : t;
        a = wn(l, a);
      }
      r.push(a);
    }
    return r;
  }
  function Tv(e, t, { clamp: n = !0, ease: r, mixer: i } = {}) {
    const o = e.length;
    if (df(o === t.length), o === 1)
      return () => t[0];
    e[0] > e[o - 1] && (e = [...e].reverse(), t = [...t].reverse());
    const s = C2(t, r, i), a = s.length, l = (u) => {
      let c = 0;
      if (a > 1)
        for (; c < e.length - 2 && !(u < e[c + 1]); c++)
          ;
      const f = eo(e[c], e[c + 1], u);
      return s[c](f);
    };
    return n ? (u) => l(kn(e[0], e[o - 1], u)) : l;
  }
  function P2(e, t) {
    const n = e[e.length - 1];
    for (let r = 1; r <= t; r++) {
      const i = eo(0, t, r);
      e.push(ue(n, 1, i));
    }
  }
  function k2(e) {
    const t = [0];
    return P2(t, e.length - 1), t;
  }
  function _2(e, t) {
    return e.map((n) => n * t);
  }
  function A2(e, t) {
    return e.map(() => t || sv).splice(0, e.length - 1);
  }
  function Ms({ duration: e = 300, keyframes: t, times: n, ease: r = "easeInOut" }) {
    const i = u2(r) ? r.map(Ah) : Ah(r), o = {
      done: !1,
      value: t[0]
    }, s = _2(
      // Only use the provided offsets if they're the correct length
      // TODO Maybe we should warn here if there's a length mismatch
      n && n.length === t.length ? n : k2(t),
      e
    ), a = Tv(s, t, {
      ease: Array.isArray(i) ? i : A2(t, i)
    });
    return {
      calculatedDuration: e,
      next: (l) => (o.value = a(l), o.done = l >= e, o)
    };
  }
  function Ev(e, t) {
    return t ? e * (1e3 / t) : 0;
  }
  const O2 = 5;
  function Cv(e, t, n) {
    const r = Math.max(t - O2, 0);
    return Ev(n - e(r), t - r);
  }
  const gl = 1e-3, F2 = 0.01, jh = 10, j2 = 0.05, D2 = 1;
  function M2({ duration: e = 800, bounce: t = 0.25, velocity: n = 0, mass: r = 1 }) {
    let i, o;
    e2(e <= Sn(jh));
    let s = 1 - t;
    s = kn(j2, D2, s), e = kn(F2, jh, Wt(e)), s < 1 ? (i = (u) => {
      const c = u * s, f = c * e, d = c - n, p = Ou(u, s), g = Math.exp(-f);
      return gl - d / p * g;
    }, o = (u) => {
      const f = u * s * e, d = f * n + n, p = Math.pow(s, 2) * Math.pow(u, 2) * e, g = Math.exp(-f), v = Ou(Math.pow(u, 2), s);
      return (-i(u) + gl > 0 ? -1 : 1) * ((d - p) * g) / v;
    }) : (i = (u) => {
      const c = Math.exp(-u * e), f = (u - n) * e + 1;
      return -gl + c * f;
    }, o = (u) => {
      const c = Math.exp(-u * e), f = (n - u) * (e * e);
      return c * f;
    });
    const a = 5 / e, l = N2(i, o, a);
    if (e = Sn(e), isNaN(l))
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
  const R2 = 12;
  function N2(e, t, n) {
    let r = n;
    for (let i = 1; i < R2; i++)
      r = r - e(r) / t(r);
    return r;
  }
  function Ou(e, t) {
    return e * Math.sqrt(1 - t * t);
  }
  const L2 = ["duration", "bounce"], V2 = ["stiffness", "damping", "mass"];
  function Dh(e, t) {
    return t.some((n) => e[n] !== void 0);
  }
  function $2(e) {
    let t = {
      velocity: 0,
      stiffness: 100,
      damping: 10,
      mass: 1,
      isResolvedFromDuration: !1,
      ...e
    };
    if (!Dh(e, V2) && Dh(e, L2)) {
      const n = M2(e);
      t = {
        ...t,
        ...n,
        velocity: 0,
        mass: 1
      }, t.isResolvedFromDuration = !0;
    }
    return t;
  }
  function Pv({ keyframes: e, restDelta: t, restSpeed: n, ...r }) {
    const i = e[0], o = e[e.length - 1], s = { done: !1, value: i }, { stiffness: a, damping: l, mass: u, velocity: c, duration: f, isResolvedFromDuration: d } = $2(r), p = c ? -Wt(c) : 0, g = l / (2 * Math.sqrt(a * u)), v = o - i, P = Wt(Math.sqrt(a / u)), y = Math.abs(v) < 5;
    n || (n = y ? 0.01 : 2), t || (t = y ? 5e-3 : 0.5);
    let h;
    if (g < 1) {
      const m = Ou(P, g);
      h = (x) => {
        const E = Math.exp(-g * P * x);
        return o - E * ((p + g * P * v) / m * Math.sin(m * x) + v * Math.cos(m * x));
      };
    } else if (g === 1)
      h = (m) => o - Math.exp(-P * m) * (v + (p + P * v) * m);
    else {
      const m = P * Math.sqrt(g * g - 1);
      h = (x) => {
        const E = Math.exp(-g * P * x), C = Math.min(m * x, 300);
        return o - E * ((p + g * P * v) * Math.sinh(C) + m * v * Math.cosh(C)) / m;
      };
    }
    return {
      calculatedDuration: d && f || null,
      next: (m) => {
        const x = h(m);
        if (d)
          s.done = m >= f;
        else {
          let E = p;
          m !== 0 && (g < 1 ? E = Cv(h, m, x) : E = 0);
          const C = Math.abs(E) <= n, T = Math.abs(o - x) <= t;
          s.done = C && T;
        }
        return s.value = s.done ? o : x, s;
      }
    };
  }
  function Mh({ keyframes: e, velocity: t = 0, power: n = 0.8, timeConstant: r = 325, bounceDamping: i = 10, bounceStiffness: o = 500, modifyTarget: s, min: a, max: l, restDelta: u = 0.5, restSpeed: c }) {
    const f = e[0], d = {
      done: !1,
      value: f
    }, p = (_) => a !== void 0 && _ < a || l !== void 0 && _ > l, g = (_) => a === void 0 ? l : l === void 0 || Math.abs(a - _) < Math.abs(l - _) ? a : l;
    let v = n * t;
    const P = f + v, y = s === void 0 ? P : s(P);
    y !== P && (v = y - f);
    const h = (_) => -v * Math.exp(-_ / r), m = (_) => y + h(_), x = (_) => {
      const L = h(_), O = m(_);
      d.done = Math.abs(L) <= u, d.value = d.done ? y : O;
    };
    let E, C;
    const T = (_) => {
      p(d.value) && (E = _, C = Pv({
        keyframes: [d.value, g(d.value)],
        velocity: Cv(m, _, d.value),
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
  const b2 = (e) => {
    const t = ({ timestamp: n }) => e(n);
    return {
      start: () => ne.update(t, !0),
      stop: () => Xt(t),
      /**
       * If we're processing this frame we can use the
       * framelocked timestamp to keep things in sync.
       */
      now: () => Te.isProcessing ? Te.timestamp : performance.now()
    };
  }, Rh = 2e4;
  function Nh(e) {
    let t = 0;
    const n = 50;
    let r = e.next(t);
    for (; !r.done && t < Rh; )
      t += n, r = e.next(t);
    return t >= Rh ? 1 / 0 : t;
  }
  const I2 = {
    decay: Mh,
    inertia: Mh,
    tween: Ms,
    keyframes: Ms,
    spring: Pv
  };
  function Rs({ autoplay: e = !0, delay: t = 0, driver: n = b2, keyframes: r, type: i = "keyframes", repeat: o = 0, repeatDelay: s = 0, repeatType: a = "loop", onPlay: l, onStop: u, onComplete: c, onUpdate: f, ...d }) {
    let p = 1, g = !1, v, P;
    const y = () => {
      P = new Promise((k) => {
        v = k;
      });
    };
    y();
    let h;
    const m = I2[i] || Ms;
    let x;
    m !== Ms && typeof r[0] != "number" && (x = Tv([0, 100], r, {
      clamp: !1
    }), r = [0, 100]);
    const E = m({ ...d, keyframes: r });
    let C;
    a === "mirror" && (C = m({
      ...d,
      keyframes: [...r].reverse(),
      velocity: -(d.velocity || 0)
    }));
    let T = "idle", _ = null, L = null, O = null;
    E.calculatedDuration === null && o && (E.calculatedDuration = Nh(E));
    const { calculatedDuration: U } = E;
    let pe = 1 / 0, G = 1 / 0;
    U !== null && (pe = U + s, G = pe * (o + 1) - s);
    let K = 0;
    const q = (k) => {
      if (L === null)
        return;
      p > 0 && (L = Math.min(L, k)), p < 0 && (L = Math.min(k - G / p, L)), _ !== null ? K = _ : K = Math.round(k - L) * p;
      const R = K - t * (p >= 0 ? 1 : -1), H = p >= 0 ? R < 0 : R > G;
      K = Math.max(R, 0), T === "finished" && _ === null && (K = G);
      let J = K, ke = E;
      if (o) {
        const fr = K / pe;
        let Mn = Math.floor(fr), pt = fr % 1;
        !pt && fr >= 1 && (pt = 1), pt === 1 && Mn--, Mn = Math.min(Mn, o + 1);
        const yo = !!(Mn % 2);
        yo && (a === "reverse" ? (pt = 1 - pt, s && (pt -= s / pe)) : a === "mirror" && (ke = C));
        let ei = kn(0, 1, pt);
        K > G && (ei = a === "reverse" && yo ? 1 : 0), J = ei * pe;
      }
      const me = H ? { done: !1, value: r[0] } : ke.next(J);
      x && (me.value = x(me.value));
      let { done: ot } = me;
      !H && U !== null && (ot = p >= 0 ? K >= G : K <= 0);
      const mo = _ === null && (T === "finished" || T === "running" && ot);
      return f && f(me.value), mo && j(), me;
    }, je = () => {
      h && h.stop(), h = void 0;
    }, ze = () => {
      T = "idle", je(), v(), y(), L = O = null;
    }, j = () => {
      T = "finished", c && c(), je(), v();
    }, $ = () => {
      if (g)
        return;
      h || (h = n(q));
      const k = h.now();
      l && l(), _ !== null ? L = k - _ : (!L || T === "finished") && (L = k), T === "finished" && y(), O = L, _ = null, T = "running", h.start();
    };
    e && $();
    const I = {
      then(k, R) {
        return P.then(k, R);
      },
      get time() {
        return Wt(K);
      },
      set time(k) {
        k = Sn(k), K = k, _ !== null || !h || p === 0 ? _ = k : L = h.now() - k / p;
      },
      get duration() {
        const k = E.calculatedDuration === null ? Nh(E) : E.calculatedDuration;
        return Wt(k);
      },
      get speed() {
        return p;
      },
      set speed(k) {
        k === p || !h || (p = k, I.time = Wt(K));
      },
      get state() {
        return T;
      },
      play: $,
      pause: () => {
        T = "paused", _ = K;
      },
      stop: () => {
        g = !0, T !== "idle" && (T = "idle", u && u(), ze());
      },
      cancel: () => {
        O !== null && q(O), ze();
      },
      complete: () => {
        T = "finished";
      },
      sample: (k) => (L = 0, q(k))
    };
    return I;
  }
  function z2(e) {
    let t;
    return () => (t === void 0 && (t = e()), t);
  }
  const B2 = z2(() => Object.hasOwnProperty.call(Element.prototype, "animate")), U2 = /* @__PURE__ */ new Set([
    "opacity",
    "clipPath",
    "filter",
    "transform",
    "backgroundColor"
  ]), $o = 10, H2 = 2e4, W2 = (e, t) => t.type === "spring" || e === "backgroundColor" || !nv(t.ease);
  function G2(e, t, { onUpdate: n, onComplete: r, ...i }) {
    if (!(B2() && U2.has(t) && !i.repeatDelay && i.repeatType !== "mirror" && i.damping !== 0 && i.type !== "inertia"))
      return !1;
    let s = !1, a, l;
    const u = () => {
      l = new Promise((h) => {
        a = h;
      });
    };
    u();
    let { keyframes: c, duration: f = 300, ease: d, times: p } = i;
    if (W2(t, i)) {
      const h = Rs({
        ...i,
        repeat: 0,
        delay: 0
      });
      let m = { done: !1, value: c[0] };
      const x = [];
      let E = 0;
      for (; !m.done && E < H2; )
        m = h.sample(E), x.push(m.value), E += $o;
      p = void 0, c = x, f = E - $o, d = "linear";
    }
    const g = n2(e.owner.current, t, c, {
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
      times: p
    });
    i.syncStart && (g.startTime = Te.isProcessing ? Te.timestamp : document.timeline ? document.timeline.currentTime : performance.now());
    const v = () => g.cancel(), P = () => {
      ne.update(v), a(), u();
    };
    return g.onfinish = () => {
      e.set(r2(c, i)), r && r(), P();
    }, {
      then(h, m) {
        return l.then(h, m);
      },
      attachTimeline(h) {
        return g.timeline = h, g.onfinish = null, he;
      },
      get time() {
        return Wt(g.currentTime || 0);
      },
      set time(h) {
        g.currentTime = Sn(h);
      },
      get speed() {
        return g.playbackRate;
      },
      set speed(h) {
        g.playbackRate = h;
      },
      get duration() {
        return Wt(f);
      },
      play: () => {
        s || (g.play(), Xt(v));
      },
      pause: () => g.pause(),
      stop: () => {
        if (s = !0, g.playState === "idle")
          return;
        const { currentTime: h } = g;
        if (h) {
          const m = Rs({
            ...i,
            autoplay: !1
          });
          e.setWithVelocity(m.sample(h - $o).value, m.sample(h).value, $o);
        }
        P();
      },
      complete: () => g.finish(),
      cancel: P
    };
  }
  function K2({ keyframes: e, delay: t, onUpdate: n, onComplete: r }) {
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
  const Q2 = {
    type: "spring",
    stiffness: 500,
    damping: 25,
    restSpeed: 10
  }, Y2 = (e) => ({
    type: "spring",
    stiffness: 550,
    damping: e === 0 ? 2 * Math.sqrt(550) : 30,
    restSpeed: 10
  }), X2 = {
    type: "keyframes",
    duration: 0.8
  }, Z2 = {
    type: "keyframes",
    ease: [0.25, 0.1, 0.35, 1],
    duration: 0.3
  }, q2 = (e, { keyframes: t }) => t.length > 2 ? X2 : ur.has(e) ? e.startsWith("scale") ? Y2(t[1]) : Q2 : Z2, Fu = (e, t) => e === "zIndex" ? !1 : !!(typeof t == "number" || Array.isArray(t) || typeof t == "string" && // It's animatable if we have a string
  (_n.test(t) || t === "0") && // And it contains numbers and/or colors
  !t.startsWith("url(")), J2 = /* @__PURE__ */ new Set(["brightness", "contrast", "saturate", "opacity"]);
  function e_(e) {
    const [t, n] = e.slice(0, -1).split("(");
    if (t === "drop-shadow")
      return e;
    const [r] = n.match(Ca) || [];
    if (!r)
      return e;
    const i = n.replace(r, "");
    let o = J2.has(t) ? 1 : 0;
    return r !== n && (o *= 100), t + "(" + o + i + ")";
  }
  const t_ = /([a-z-]*)\(.*?\)/g, ju = {
    ..._n,
    getAnimatableNone: (e) => {
      const t = e.match(t_);
      return t ? t.map(e_).join(" ") : e;
    }
  }, n_ = {
    ...bg,
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
  }, yf = (e) => n_[e];
  function kv(e, t) {
    let n = yf(e);
    return n !== ju && (n = _n), n.getAnimatableNone ? n.getAnimatableNone(t) : void 0;
  }
  const _v = (e) => /^0[^.\s]+$/.test(e);
  function r_(e) {
    if (typeof e == "number")
      return e === 0;
    if (e !== null)
      return e === "none" || e === "0" || _v(e);
  }
  function i_(e, t, n, r) {
    const i = Fu(t, n);
    let o;
    Array.isArray(n) ? o = [...n] : o = [null, n];
    const s = r.from !== void 0 ? r.from : e.get();
    let a;
    const l = [];
    for (let u = 0; u < o.length; u++)
      o[u] === null && (o[u] = u === 0 ? s : o[u - 1]), r_(o[u]) && l.push(u), typeof o[u] == "string" && o[u] !== "none" && o[u] !== "0" && (a = o[u]);
    if (i && l.length && a)
      for (let u = 0; u < l.length; u++) {
        const c = l[u];
        o[c] = kv(t, a);
      }
    return o;
  }
  function o_({ when: e, delay: t, delayChildren: n, staggerChildren: r, staggerDirection: i, repeat: o, repeatType: s, repeatDelay: a, from: l, elapsed: u, ...c }) {
    return !!Object.keys(c).length;
  }
  function Av(e, t) {
    return e[t] || e.default || e;
  }
  const gf = (e, t, n, r = {}) => (i) => {
    const o = Av(r, e) || {}, s = o.delay || r.delay || 0;
    let { elapsed: a = 0 } = r;
    a = a - Sn(s);
    const l = i_(t, e, n, o), u = l[0], c = l[l.length - 1], f = Fu(e, u), d = Fu(e, c);
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
    if (o_(o) || (p = {
      ...p,
      ...q2(e, p)
    }), p.duration && (p.duration = Sn(p.duration)), p.repeatDelay && (p.repeatDelay = Sn(p.repeatDelay)), !f || !d || t2.current || o.type === !1)
      return K2(p);
    if (t.owner && t.owner.current instanceof HTMLElement && !t.owner.getProps().onUpdate) {
      const g = G2(t, e, p);
      if (g)
        return g;
    }
    return Rs(p);
  };
  function Ns(e) {
    return !!(Ke(e) && e.add);
  }
  const Ov = (e) => /^\-?\d*\.?\d+$/.test(e);
  function vf(e, t) {
    e.indexOf(t) === -1 && e.push(t);
  }
  function xf(e, t) {
    const n = e.indexOf(t);
    n > -1 && e.splice(n, 1);
  }
  class wf {
    constructor() {
      this.subscriptions = [];
    }
    add(t) {
      return vf(this.subscriptions, t), () => xf(this.subscriptions, t);
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
  const s_ = (e) => !isNaN(parseFloat(e));
  class a_ {
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
        const { delta: o, timestamp: s } = Te;
        this.lastUpdated !== s && (this.timeDelta = o, this.lastUpdated = s, ne.postRender(this.scheduleVelocityCheck)), this.prev !== this.current && this.events.change && this.events.change.notify(this.current), this.events.velocityChange && this.events.velocityChange.notify(this.getVelocity()), i && this.events.renderRequest && this.events.renderRequest.notify(this.current);
      }, this.scheduleVelocityCheck = () => ne.postRender(this.velocityCheck), this.velocityCheck = ({ timestamp: r }) => {
        r !== this.lastUpdated && (this.prev = this.current, this.events.velocityChange && this.events.velocityChange.notify(this.getVelocity()));
      }, this.hasAnimated = !1, this.prev = this.current = t, this.canTrackVelocity = s_(this.current), this.owner = n.owner;
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
        r(), ne.read(() => {
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
        Ev(parseFloat(this.current) - parseFloat(this.prev), this.timeDelta)
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
  function Kr(e, t) {
    return new a_(e, t);
  }
  const Fv = (e) => (t) => t.test(e), l_ = {
    test: (e) => e === "auto",
    parse: (e) => e
  }, jv = [cr, b, jt, tn, pk, hk, l_], ci = (e) => jv.find(Fv(e)), u_ = [...jv, Le, _n], c_ = (e) => u_.find(Fv(e));
  function f_(e, t, n) {
    e.hasValue(t) ? e.getValue(t).set(n) : e.addValue(t, Kr(n));
  }
  function d_(e, t) {
    const n = ka(e, t);
    let { transitionEnd: r = {}, transition: i = {}, ...o } = n ? e.makeTargetAnimatable(n, !1) : {};
    o = { ...o, ...r };
    for (const s in o) {
      const a = Ak(o[s]);
      f_(e, s, a);
    }
  }
  function h_(e, t, n) {
    var r, i;
    const o = Object.keys(t).filter((a) => !e.hasValue(a)), s = o.length;
    if (s)
      for (let a = 0; a < s; a++) {
        const l = o[a], u = t[l];
        let c = null;
        Array.isArray(u) && (c = u[0]), c === null && (c = (i = (r = n[l]) !== null && r !== void 0 ? r : e.readValue(l)) !== null && i !== void 0 ? i : t[l]), c != null && (typeof c == "string" && (Ov(c) || _v(c)) ? c = parseFloat(c) : !c_(c) && _n.test(u) && (c = kv(l, u)), e.addValue(l, Kr(c, { owner: e })), n[l] === void 0 && (n[l] = c), c !== null && e.setBaseTarget(l, c));
      }
  }
  function p_(e, t) {
    return t ? (t[e] || t.default || t).from : void 0;
  }
  function m_(e, t, n) {
    const r = {};
    for (const i in e) {
      const o = p_(i, t);
      if (o !== void 0)
        r[i] = o;
      else {
        const s = n.getValue(i);
        s && (r[i] = s.get());
      }
    }
    return r;
  }
  function y_({ protectedKeys: e, needsAnimating: t }, n) {
    const r = e.hasOwnProperty(n) && t[n] !== !0;
    return t[n] = !1, r;
  }
  function Dv(e, t, { delay: n = 0, transitionOverride: r, type: i } = {}) {
    let { transition: o = e.getDefaultTransition(), transitionEnd: s, ...a } = e.makeTargetAnimatable(t);
    const l = e.getValue("willChange");
    r && (o = r);
    const u = [], c = i && e.animationState && e.animationState.getState()[i];
    for (const f in a) {
      const d = e.getValue(f), p = a[f];
      if (!d || p === void 0 || c && y_(c, f))
        continue;
      const g = {
        delay: n,
        elapsed: 0,
        ...o
      };
      if (window.HandoffAppearAnimations && !d.hasAnimated) {
        const P = e.getProps()[Jk];
        P && (g.elapsed = window.HandoffAppearAnimations(P, f, d, ne), g.syncStart = !0);
      }
      d.start(gf(f, d, p, e.shouldReduceMotion && ur.has(f) ? { type: !1 } : g));
      const v = d.animation;
      Ns(l) && (l.add(f), v.then(() => l.remove(f))), u.push(v);
    }
    return s && Promise.all(u).then(() => {
      s && d_(e, s);
    }), u;
  }
  function Du(e, t, n = {}) {
    const r = ka(e, t, n.custom);
    let { transition: i = e.getDefaultTransition() || {} } = r || {};
    n.transitionOverride && (i = n.transitionOverride);
    const o = r ? () => Promise.all(Dv(e, r, n)) : () => Promise.resolve(), s = e.variantChildren && e.variantChildren.size ? (l = 0) => {
      const { delayChildren: u = 0, staggerChildren: c, staggerDirection: f } = i;
      return g_(e, t, u + l, c, f, n);
    } : () => Promise.resolve(), { when: a } = i;
    if (a) {
      const [l, u] = a === "beforeChildren" ? [o, s] : [s, o];
      return l().then(() => u());
    } else
      return Promise.all([o(), s(n.delay)]);
  }
  function g_(e, t, n = 0, r = 0, i = 1, o) {
    const s = [], a = (e.variantChildren.size - 1) * r, l = i === 1 ? (u = 0) => u * r : (u = 0) => a - u * r;
    return Array.from(e.variantChildren).sort(v_).forEach((u, c) => {
      u.notify("AnimationStart", t), s.push(Du(u, t, {
        ...o,
        delay: n + l(c)
      }).then(() => u.notify("AnimationComplete", t)));
    }), Promise.all(s);
  }
  function v_(e, t) {
    return e.sortNodePosition(t);
  }
  function x_(e, t, n = {}) {
    e.notify("AnimationStart", t);
    let r;
    if (Array.isArray(t)) {
      const i = t.map((o) => Du(e, o, n));
      r = Promise.all(i);
    } else if (typeof t == "string")
      r = Du(e, t, n);
    else {
      const i = typeof t == "function" ? ka(e, t, n.custom) : t;
      r = Promise.all(Dv(e, i, n));
    }
    return r.then(() => e.notify("AnimationComplete", t));
  }
  const w_ = [...ef].reverse(), S_ = ef.length;
  function T_(e) {
    return (t) => Promise.all(t.map(({ animation: n, options: r }) => x_(e, n, r)));
  }
  function E_(e) {
    let t = T_(e);
    const n = P_();
    let r = !0;
    const i = (l, u) => {
      const c = ka(e, u);
      if (c) {
        const { transition: f, transitionEnd: d, ...p } = c;
        l = { ...l, ...p, ...d };
      }
      return l;
    };
    function o(l) {
      t = l(e);
    }
    function s(l, u) {
      const c = e.getProps(), f = e.getVariantContext(!0) || {}, d = [], p = /* @__PURE__ */ new Set();
      let g = {}, v = 1 / 0;
      for (let y = 0; y < S_; y++) {
        const h = w_[y], m = n[h], x = c[h] !== void 0 ? c[h] : f[h], E = qi(x), C = h === u ? m.isActive : null;
        C === !1 && (v = y);
        let T = x === f[h] && x !== c[h] && E;
        if (T && r && e.manuallyAnimateOnMount && (T = !1), m.protectedKeys = { ...g }, // If it isn't active and hasn't *just* been set as inactive
        !m.isActive && C === null || // If we didn't and don't have any defined prop for this animation type
        !x && !m.prevProp || // Or if the prop doesn't define an animation
        Ta(x) || typeof x == "boolean")
          continue;
        const _ = C_(m.prevProp, x);
        let L = _ || // If we're making this variant active, we want to always make it active
        h === u && m.isActive && !T && E || // If we removed a higher-priority variant (i is in reverse order)
        y > v && E;
        const O = Array.isArray(x) ? x : [x];
        let U = O.reduce(i, {});
        C === !1 && (U = {});
        const { prevResolvedValues: pe = {} } = m, G = {
          ...pe,
          ...U
        }, K = (q) => {
          L = !0, p.delete(q), m.needsAnimating[q] = !0;
        };
        for (const q in G) {
          const je = U[q], ze = pe[q];
          g.hasOwnProperty(q) || (je !== ze ? js(je) && js(ze) ? !ev(je, ze) || _ ? K(q) : m.protectedKeys[q] = !0 : je !== void 0 ? K(q) : p.add(q) : je !== void 0 && p.has(q) ? K(q) : m.protectedKeys[q] = !0);
        }
        m.prevProp = x, m.prevResolvedValues = U, m.isActive && (g = { ...g, ...U }), r && e.blockInitialAnimation && (L = !1), L && !T && d.push(...O.map((q) => ({
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
      let P = !!d.length;
      return r && c.initial === !1 && !e.manuallyAnimateOnMount && (P = !1), r = !1, P ? t(d) : Promise.resolve();
    }
    function a(l, u, c) {
      var f;
      if (n[l].isActive === u)
        return Promise.resolve();
      (f = e.variantChildren) === null || f === void 0 || f.forEach((p) => {
        var g;
        return (g = p.animationState) === null || g === void 0 ? void 0 : g.setActive(l, u);
      }), n[l].isActive = u;
      const d = s(c, l);
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
  function C_(e, t) {
    return typeof t == "string" ? t !== e : Array.isArray(t) ? !ev(t, e) : !1;
  }
  function Nn(e = !1) {
    return {
      isActive: e,
      protectedKeys: {},
      needsAnimating: {},
      prevResolvedValues: {}
    };
  }
  function P_() {
    return {
      animate: Nn(!0),
      whileInView: Nn(),
      whileHover: Nn(),
      whileTap: Nn(),
      whileDrag: Nn(),
      whileFocus: Nn(),
      exit: Nn()
    };
  }
  class k_ extends Dn {
    /**
     * We dynamically generate the AnimationState manager as it contains a reference
     * to the underlying animation library. We only want to load that if we load this,
     * so people can optionally code split it out using the `m` component.
     */
    constructor(t) {
      super(t), t.animationState || (t.animationState = E_(t));
    }
    updateAnimationControlsSubscription() {
      const { animate: t } = this.node.getProps();
      this.unmount(), Ta(t) && (this.unmount = t.subscribe(this.node));
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
  let __ = 0;
  class A_ extends Dn {
    constructor() {
      super(...arguments), this.id = __++;
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
  const O_ = {
    animation: {
      Feature: k_
    },
    exit: {
      Feature: A_
    }
  }, Lh = (e, t) => Math.abs(e - t);
  function F_(e, t) {
    const n = Lh(e.x, t.x), r = Lh(e.y, t.y);
    return Math.sqrt(n ** 2 + r ** 2);
  }
  class Mv {
    constructor(t, n, { transformPagePoint: r } = {}) {
      if (this.startEvent = null, this.lastMoveEvent = null, this.lastMoveEventInfo = null, this.handlers = {}, this.updatePoint = () => {
        if (!(this.lastMoveEvent && this.lastMoveEventInfo))
          return;
        const u = xl(this.lastMoveEventInfo, this.history), c = this.startEvent !== null, f = F_(u.offset, { x: 0, y: 0 }) >= 3;
        if (!c && !f)
          return;
        const { point: d } = u, { timestamp: p } = Te;
        this.history.push({ ...d, timestamp: p });
        const { onStart: g, onMove: v } = this.handlers;
        c || (g && g(this.lastMoveEvent, u), this.startEvent = this.lastMoveEvent), v && v(this.lastMoveEvent, u);
      }, this.handlePointerMove = (u, c) => {
        this.lastMoveEvent = u, this.lastMoveEventInfo = vl(c, this.transformPagePoint), ne.update(this.updatePoint, !0);
      }, this.handlePointerUp = (u, c) => {
        if (this.end(), !(this.lastMoveEvent && this.lastMoveEventInfo))
          return;
        const { onEnd: f, onSessionEnd: d } = this.handlers, p = xl(u.type === "pointercancel" ? this.lastMoveEventInfo : vl(c, this.transformPagePoint), this.history);
        this.startEvent && f && f(u, p), d && d(u, p);
      }, !Yg(t))
        return;
      this.handlers = n, this.transformPagePoint = r;
      const i = Pa(t), o = vl(i, this.transformPagePoint), { point: s } = o, { timestamp: a } = Te;
      this.history = [{ ...s, timestamp: a }];
      const { onSessionStart: l } = n;
      l && l(t, xl(o, this.history)), this.removeListeners = wn(Ht(window, "pointermove", this.handlePointerMove), Ht(window, "pointerup", this.handlePointerUp), Ht(window, "pointercancel", this.handlePointerUp));
    }
    updateHandlers(t) {
      this.handlers = t;
    }
    end() {
      this.removeListeners && this.removeListeners(), Xt(this.updatePoint);
    }
  }
  function vl(e, t) {
    return t ? { point: t(e.point) } : e;
  }
  function Vh(e, t) {
    return { x: e.x - t.x, y: e.y - t.y };
  }
  function xl({ point: e }, t) {
    return {
      point: e,
      delta: Vh(e, Rv(t)),
      offset: Vh(e, j_(t)),
      velocity: D_(t, 0.1)
    };
  }
  function j_(e) {
    return e[0];
  }
  function Rv(e) {
    return e[e.length - 1];
  }
  function D_(e, t) {
    if (e.length < 2)
      return { x: 0, y: 0 };
    let n = e.length - 1, r = null;
    const i = Rv(e);
    for (; n >= 0 && (r = e[n], !(i.timestamp - r.timestamp > Sn(t))); )
      n--;
    if (!r)
      return { x: 0, y: 0 };
    const o = Wt(i.timestamp - r.timestamp);
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
  function Mu(e, t = 0, n = 0.01) {
    return Math.abs(e - t) <= n;
  }
  function $h(e, t, n, r = 0.5) {
    e.origin = r, e.originPoint = ue(t.min, t.max, e.origin), e.scale = tt(n) / tt(t), (Mu(e.scale, 1, 1e-4) || isNaN(e.scale)) && (e.scale = 1), e.translate = ue(n.min, n.max, e.origin) - e.originPoint, (Mu(e.translate) || isNaN(e.translate)) && (e.translate = 0);
  }
  function Fi(e, t, n, r) {
    $h(e.x, t.x, n.x, r ? r.originX : void 0), $h(e.y, t.y, n.y, r ? r.originY : void 0);
  }
  function bh(e, t, n) {
    e.min = n.min + t.min, e.max = e.min + tt(t);
  }
  function M_(e, t, n) {
    bh(e.x, t.x, n.x), bh(e.y, t.y, n.y);
  }
  function Ih(e, t, n) {
    e.min = t.min - n.min, e.max = e.min + tt(t);
  }
  function ji(e, t, n) {
    Ih(e.x, t.x, n.x), Ih(e.y, t.y, n.y);
  }
  function R_(e, { min: t, max: n }, r) {
    return t !== void 0 && e < t ? e = r ? ue(t, e, r.min) : Math.max(e, t) : n !== void 0 && e > n && (e = r ? ue(n, e, r.max) : Math.min(e, n)), e;
  }
  function zh(e, t, n) {
    return {
      min: t !== void 0 ? e.min + t : void 0,
      max: n !== void 0 ? e.max + n - (e.max - e.min) : void 0
    };
  }
  function N_(e, { top: t, left: n, bottom: r, right: i }) {
    return {
      x: zh(e.x, n, i),
      y: zh(e.y, t, r)
    };
  }
  function Bh(e, t) {
    let n = t.min - e.min, r = t.max - e.max;
    return t.max - t.min < e.max - e.min && ([n, r] = [r, n]), { min: n, max: r };
  }
  function L_(e, t) {
    return {
      x: Bh(e.x, t.x),
      y: Bh(e.y, t.y)
    };
  }
  function V_(e, t) {
    let n = 0.5;
    const r = tt(e), i = tt(t);
    return i > r ? n = eo(t.min, t.max - r, e.min) : r > i && (n = eo(e.min, e.max - i, t.min)), kn(0, 1, n);
  }
  function $_(e, t) {
    const n = {};
    return t.min !== void 0 && (n.min = t.min - e.min), t.max !== void 0 && (n.max = t.max - e.min), n;
  }
  const Ru = 0.35;
  function b_(e = Ru) {
    return e === !1 ? e = 0 : e === !0 && (e = Ru), {
      x: Uh(e, "left", "right"),
      y: Uh(e, "top", "bottom")
    };
  }
  function Uh(e, t, n) {
    return {
      min: Hh(e, t),
      max: Hh(e, n)
    };
  }
  function Hh(e, t) {
    return typeof e == "number" ? e : e[t] || 0;
  }
  const Wh = () => ({
    translate: 0,
    scale: 1,
    origin: 0,
    originPoint: 0
  }), Fr = () => ({
    x: Wh(),
    y: Wh()
  }), Gh = () => ({ min: 0, max: 0 }), ge = () => ({
    x: Gh(),
    y: Gh()
  });
  function kt(e) {
    return [e("x"), e("y")];
  }
  function Nv({ top: e, left: t, right: n, bottom: r }) {
    return {
      x: { min: t, max: n },
      y: { min: e, max: r }
    };
  }
  function I_({ x: e, y: t }) {
    return { top: t.min, right: e.max, bottom: t.max, left: e.min };
  }
  function z_(e, t) {
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
  function bn(e) {
    return Nu(e) || Lv(e) || e.z || e.rotate || e.rotateX || e.rotateY;
  }
  function Lv(e) {
    return Kh(e.x) || Kh(e.y);
  }
  function Kh(e) {
    return e && e !== "0%";
  }
  function Ls(e, t, n) {
    const r = e - n, i = t * r;
    return n + i;
  }
  function Qh(e, t, n, r, i) {
    return i !== void 0 && (e = Ls(e, i, r)), Ls(e, n, r) + t;
  }
  function Lu(e, t = 0, n = 1, r, i) {
    e.min = Qh(e.min, t, n, r, i), e.max = Qh(e.max, t, n, r, i);
  }
  function Vv(e, { x: t, y: n }) {
    Lu(e.x, t.translate, t.scale, t.originPoint), Lu(e.y, n.translate, n.scale, n.originPoint);
  }
  function B_(e, t, n, r = !1) {
    const i = n.length;
    if (!i)
      return;
    t.x = t.y = 1;
    let o, s;
    for (let a = 0; a < i; a++) {
      o = n[a], s = o.projectionDelta;
      const l = o.instance;
      l && l.style && l.style.display === "contents" || (r && o.options.layoutScroll && o.scroll && o !== o.root && jr(e, {
        x: -o.scroll.offset.x,
        y: -o.scroll.offset.y
      }), s && (t.x *= s.x.scale, t.y *= s.y.scale, Vv(e, s)), r && bn(o.latestValues) && jr(e, o.latestValues));
    }
    t.x = Yh(t.x), t.y = Yh(t.y);
  }
  function Yh(e) {
    return Number.isInteger(e) || e > 1.0000000000001 || e < 0.999999999999 ? e : 1;
  }
  function sn(e, t) {
    e.min = e.min + t, e.max = e.max + t;
  }
  function Xh(e, t, [n, r, i]) {
    const o = t[i] !== void 0 ? t[i] : 0.5, s = ue(e.min, e.max, o);
    Lu(e, t[n], t[r], s, t.scale);
  }
  const U_ = ["x", "scaleX", "originX"], H_ = ["y", "scaleY", "originY"];
  function jr(e, t) {
    Xh(e.x, t, U_), Xh(e.y, t, H_);
  }
  function $v(e, t) {
    return Nv(z_(e.getBoundingClientRect(), t));
  }
  function W_(e, t, n) {
    const r = $v(e, n), { scroll: i } = t;
    return i && (sn(r.x, i.offset.x), sn(r.y, i.offset.y)), r;
  }
  const G_ = /* @__PURE__ */ new WeakMap();
  class K_ {
    constructor(t) {
      this.openGlobalLock = null, this.isDragging = !1, this.currentDirection = null, this.originPoint = { x: 0, y: 0 }, this.constraints = !1, this.hasMutatedConstraints = !1, this.elastic = ge(), this.visualElement = t;
    }
    start(t, { snapToCursor: n = !1 } = {}) {
      const { presenceContext: r } = this.visualElement;
      if (r && r.isPresent === !1)
        return;
      const i = (l) => {
        this.stopAnimation(), n && this.snapToCursor(Pa(l, "page").point);
      }, o = (l, u) => {
        const { drag: c, dragPropagation: f, onDragStart: d } = this.getProps();
        if (c && !f && (this.openGlobalLock && this.openGlobalLock(), this.openGlobalLock = Zg(c), !this.openGlobalLock))
          return;
        this.isDragging = !0, this.currentDirection = null, this.resolveConstraints(), this.visualElement.projection && (this.visualElement.projection.isAnimationBlocked = !0, this.visualElement.projection.target = void 0), kt((g) => {
          let v = this.getAxisMotionValue(g).get() || 0;
          if (jt.test(v)) {
            const { projection: P } = this.visualElement;
            if (P && P.layout) {
              const y = P.layout.layoutBox[g];
              y && (v = tt(y) * (parseFloat(v) / 100));
            }
          }
          this.originPoint[g] = v;
        }), d && ne.update(() => d(l, u), !1, !0);
        const { animationState: p } = this.visualElement;
        p && p.setActive("whileDrag", !0);
      }, s = (l, u) => {
        const { dragPropagation: c, dragDirectionLock: f, onDirectionLock: d, onDrag: p } = this.getProps();
        if (!c && !this.openGlobalLock)
          return;
        const { offset: g } = u;
        if (f && this.currentDirection === null) {
          this.currentDirection = Q_(g), this.currentDirection !== null && d && d(this.currentDirection);
          return;
        }
        this.updateAxis("x", u.point, g), this.updateAxis("y", u.point, g), this.visualElement.render(), p && p(l, u);
      }, a = (l, u) => this.stop(l, u);
      this.panSession = new Mv(t, {
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
      o && ne.update(() => o(t, n));
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
      if (!r || !bo(t, i, this.currentDirection))
        return;
      const o = this.getAxisMotionValue(t);
      let s = this.originPoint[t] + r[t];
      this.constraints && this.constraints[t] && (s = R_(s, this.constraints[t], this.elastic[t])), o.set(s);
    }
    resolveConstraints() {
      const { dragConstraints: t, dragElastic: n } = this.getProps(), { layout: r } = this.visualElement.projection || {}, i = this.constraints;
      t && Ar(t) ? this.constraints || (this.constraints = this.resolveRefConstraints()) : t && r ? this.constraints = N_(r.layoutBox, t) : this.constraints = !1, this.elastic = b_(n), i !== this.constraints && r && this.constraints && !this.hasMutatedConstraints && kt((o) => {
        this.getAxisMotionValue(o) && (this.constraints[o] = $_(r.layoutBox[o], this.constraints[o]));
      });
    }
    resolveRefConstraints() {
      const { dragConstraints: t, onMeasureDragConstraints: n } = this.getProps();
      if (!t || !Ar(t))
        return !1;
      const r = t.current, { projection: i } = this.visualElement;
      if (!i || !i.layout)
        return !1;
      const o = W_(r, i.root, this.visualElement.getTransformPagePoint());
      let s = L_(i.layout.layoutBox, o);
      if (n) {
        const a = n(I_(s));
        this.hasMutatedConstraints = !!a, a && (s = Nv(a));
      }
      return s;
    }
    startAnimation(t) {
      const { drag: n, dragMomentum: r, dragElastic: i, dragTransition: o, dragSnapToOrigin: s, onDragTransitionEnd: a } = this.getProps(), l = this.constraints || {}, u = kt((c) => {
        if (!bo(c, n, this.currentDirection))
          return;
        let f = l && l[c] || {};
        s && (f = { min: 0, max: 0 });
        const d = i ? 200 : 1e6, p = i ? 40 : 1e7, g = {
          type: "inertia",
          velocity: r ? t[c] : 0,
          bounceStiffness: d,
          bounceDamping: p,
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
      return r.start(gf(t, r, 0, n));
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
        if (!bo(n, r, this.currentDirection))
          return;
        const { projection: i } = this.visualElement, o = this.getAxisMotionValue(n);
        if (i && i.layout) {
          const { min: s, max: a } = i.layout.layoutBox[n];
          o.set(t[n] - ue(s, a, 0.5));
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
      if (!Ar(n) || !r || !this.constraints)
        return;
      this.stopAnimation();
      const i = { x: 0, y: 0 };
      kt((s) => {
        const a = this.getAxisMotionValue(s);
        if (a) {
          const l = a.get();
          i[s] = V_({ min: l, max: l }, this.constraints[s]);
        }
      });
      const { transformTemplate: o } = this.visualElement.getProps();
      this.visualElement.current.style.transform = o ? o({}, "") : "none", r.root && r.root.updateScroll(), r.updateLayout(), this.resolveConstraints(), kt((s) => {
        if (!bo(s, t, null))
          return;
        const a = this.getAxisMotionValue(s), { min: l, max: u } = this.constraints[s];
        a.set(ue(l, u, i[s]));
      });
    }
    addListeners() {
      if (!this.visualElement.current)
        return;
      G_.set(this.visualElement, this);
      const t = this.visualElement.current, n = Ht(t, "pointerdown", (l) => {
        const { drag: u, dragListener: c = !0 } = this.getProps();
        u && c && this.start(l);
      }), r = () => {
        const { dragConstraints: l } = this.getProps();
        Ar(l) && (this.constraints = this.resolveRefConstraints());
      }, { projection: i } = this.visualElement, o = i.addEventListener("measure", r);
      i && !i.layout && (i.root && i.root.updateScroll(), i.updateLayout()), r();
      const s = zt(window, "resize", () => this.scalePositionWithinConstraints()), a = i.addEventListener("didUpdate", ({ delta: l, hasLayoutChanged: u }) => {
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
  function bo(e, t, n) {
    return (t === !0 || t === e) && (n === null || n === e);
  }
  function Q_(e, t = 10) {
    let n = null;
    return Math.abs(e.y) > t ? n = "y" : Math.abs(e.x) > t && (n = "x"), n;
  }
  class Y_ extends Dn {
    constructor(t) {
      super(t), this.removeGroupControls = he, this.removeListeners = he, this.controls = new K_(t);
    }
    mount() {
      const { dragControls: t } = this.node.getProps();
      t && (this.removeGroupControls = t.subscribe(this.controls)), this.removeListeners = this.controls.addListeners() || he;
    }
    unmount() {
      this.removeGroupControls(), this.removeListeners();
    }
  }
  const Zh = (e) => (t, n) => {
    e && ne.update(() => e(t, n));
  };
  class X_ extends Dn {
    constructor() {
      super(...arguments), this.removePointerDownListener = he;
    }
    onPointerDown(t) {
      this.session = new Mv(t, this.createPanHandlers(), { transformPagePoint: this.node.getTransformPagePoint() });
    }
    createPanHandlers() {
      const { onPanSessionStart: t, onPanStart: n, onPan: r, onPanEnd: i } = this.node.getProps();
      return {
        onSessionStart: Zh(t),
        onStart: Zh(n),
        onMove: r,
        onEnd: (o, s) => {
          delete this.session, i && ne.update(() => i(o, s));
        }
      };
    }
    mount() {
      this.removePointerDownListener = Ht(this.node.current, "pointerdown", (t) => this.onPointerDown(t));
    }
    update() {
      this.session && this.session.updateHandlers(this.createPanHandlers());
    }
    unmount() {
      this.removePointerDownListener(), this.session && this.session.end();
    }
  }
  function Z_() {
    const e = w.useContext(wa);
    if (e === null)
      return [!0, null];
    const { isPresent: t, onExitComplete: n, register: r } = e, i = w.useId();
    return w.useEffect(() => r(i), []), !t && n ? [!1, () => n && n(i)] : [!0];
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
  function qh(e, t) {
    return t.max === t.min ? 0 : e / (t.max - t.min) * 100;
  }
  const fi = {
    correct: (e, t) => {
      if (!t.target)
        return e;
      if (typeof e == "string")
        if (b.test(e))
          e = parseFloat(e);
        else
          return e;
      const n = qh(e, t.target.x), r = qh(e, t.target.y);
      return `${n}% ${r}%`;
    }
  }, q_ = {
    correct: (e, { treeScale: t, projectionDelta: n }) => {
      const r = e, i = _n.parse(e);
      if (i.length > 5)
        return r;
      const o = _n.createTransformer(e), s = typeof i[0] != "number" ? 1 : 0, a = n.x.scale * t.x, l = n.y.scale * t.y;
      i[0 + s] /= a, i[1 + s] /= l;
      const u = ue(a, l, 0.5);
      return typeof i[2 + s] == "number" && (i[2 + s] /= u), typeof i[3 + s] == "number" && (i[3 + s] /= u), o(i);
    }
  };
  class J_ extends Bt.Component {
    /**
     * This only mounts projection nodes for components that
     * need measuring, we might want to do it for all components
     * in order to incorporate transforms
     */
    componentDidMount() {
      const { visualElement: t, layoutGroup: n, switchLayoutGroup: r, layoutId: i } = this.props, { projection: o } = t;
      sk(eA), o && (n.group && n.group.add(o), r && r.register && i && r.register(o), o.root.didUpdate(), o.addEventListener("animationComplete", () => {
        this.safeToRemove();
      }), o.setOptions({
        ...o.options,
        onExitComplete: () => this.safeToRemove()
      })), ts.hasEverUpdated = !0;
    }
    getSnapshotBeforeUpdate(t) {
      const { layoutDependency: n, visualElement: r, drag: i, isPresent: o } = this.props, s = r.projection;
      return s && (s.isPresent = o, i || t.layoutDependency !== n || n === void 0 ? s.willUpdate() : this.safeToRemove(), t.isPresent !== o && (o ? s.promote() : s.relegate() || ne.postRender(() => {
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
  function bv(e) {
    const [t, n] = Z_(), r = w.useContext(nf);
    return Bt.createElement(J_, { ...e, layoutGroup: r, switchLayoutGroup: w.useContext(Rg), isPresent: t, safeToRemove: n });
  }
  const eA = {
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
    boxShadow: q_
  }, Iv = ["TopLeft", "TopRight", "BottomLeft", "BottomRight"], tA = Iv.length, Jh = (e) => typeof e == "string" ? parseFloat(e) : e, ep = (e) => typeof e == "number" || b.test(e);
  function nA(e, t, n, r, i, o) {
    i ? (e.opacity = ue(
      0,
      // TODO Reinstate this if only child
      n.opacity !== void 0 ? n.opacity : 1,
      rA(r)
    ), e.opacityExit = ue(t.opacity !== void 0 ? t.opacity : 1, 0, iA(r))) : o && (e.opacity = ue(t.opacity !== void 0 ? t.opacity : 1, n.opacity !== void 0 ? n.opacity : 1, r));
    for (let s = 0; s < tA; s++) {
      const a = `border${Iv[s]}Radius`;
      let l = tp(t, a), u = tp(n, a);
      if (l === void 0 && u === void 0)
        continue;
      l || (l = 0), u || (u = 0), l === 0 || u === 0 || ep(l) === ep(u) ? (e[a] = Math.max(ue(Jh(l), Jh(u), r), 0), (jt.test(u) || jt.test(l)) && (e[a] += "%")) : e[a] = u;
    }
    (t.rotate || n.rotate) && (e.rotate = ue(t.rotate || 0, n.rotate || 0, r));
  }
  function tp(e, t) {
    return e[t] !== void 0 ? e[t] : e.borderRadius;
  }
  const rA = zv(0, 0.5, hf), iA = zv(0.5, 0.95, he);
  function zv(e, t, n) {
    return (r) => r < e ? 0 : r > t ? 1 : n(eo(e, t, r));
  }
  function np(e, t) {
    e.min = t.min, e.max = t.max;
  }
  function at(e, t) {
    np(e.x, t.x), np(e.y, t.y);
  }
  function rp(e, t, n, r, i) {
    return e -= t, e = Ls(e, 1 / n, r), i !== void 0 && (e = Ls(e, 1 / i, r)), e;
  }
  function oA(e, t = 0, n = 1, r = 0.5, i, o = e, s = e) {
    if (jt.test(t) && (t = parseFloat(t), t = ue(s.min, s.max, t / 100) - s.min), typeof t != "number")
      return;
    let a = ue(o.min, o.max, r);
    e === o && (a -= t), e.min = rp(e.min, t, n, a, i), e.max = rp(e.max, t, n, a, i);
  }
  function ip(e, t, [n, r, i], o, s) {
    oA(e, t[n], t[r], t[i], t.scale, o, s);
  }
  const sA = ["x", "scaleX", "originX"], aA = ["y", "scaleY", "originY"];
  function op(e, t, n, r) {
    ip(e.x, t, sA, n ? n.x : void 0, r ? r.x : void 0), ip(e.y, t, aA, n ? n.y : void 0, r ? r.y : void 0);
  }
  function sp(e) {
    return e.translate === 0 && e.scale === 1;
  }
  function Bv(e) {
    return sp(e.x) && sp(e.y);
  }
  function lA(e, t) {
    return e.x.min === t.x.min && e.x.max === t.x.max && e.y.min === t.y.min && e.y.max === t.y.max;
  }
  function Uv(e, t) {
    return Math.round(e.x.min) === Math.round(t.x.min) && Math.round(e.x.max) === Math.round(t.x.max) && Math.round(e.y.min) === Math.round(t.y.min) && Math.round(e.y.max) === Math.round(t.y.max);
  }
  function ap(e) {
    return tt(e.x) / tt(e.y);
  }
  class uA {
    constructor() {
      this.members = [];
    }
    add(t) {
      vf(this.members, t), t.scheduleRender();
    }
    remove(t) {
      if (xf(this.members, t), t === this.prevLead && (this.prevLead = void 0), t === this.lead) {
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
  function lp(e, t, n) {
    let r = "";
    const i = e.x.translate / t.x, o = e.y.translate / t.y;
    if ((i || o) && (r = `translate3d(${i}px, ${o}px, 0) `), (t.x !== 1 || t.y !== 1) && (r += `scale(${1 / t.x}, ${1 / t.y}) `), n) {
      const { rotate: l, rotateX: u, rotateY: c } = n;
      l && (r += `rotate(${l}deg) `), u && (r += `rotateX(${u}deg) `), c && (r += `rotateY(${c}deg) `);
    }
    const s = e.x.scale * t.x, a = e.y.scale * t.y;
    return (s !== 1 || a !== 1) && (r += `scale(${s}, ${a})`), r || "none";
  }
  const cA = (e, t) => e.depth - t.depth;
  class fA {
    constructor() {
      this.children = [], this.isDirty = !1;
    }
    add(t) {
      vf(this.children, t), this.isDirty = !0;
    }
    remove(t) {
      xf(this.children, t), this.isDirty = !0;
    }
    forEach(t) {
      this.isDirty && this.children.sort(cA), this.isDirty = !1, this.children.forEach(t);
    }
  }
  function dA(e, t) {
    const n = performance.now(), r = ({ timestamp: i }) => {
      const o = i - n;
      o >= t && (Xt(r), e(o - t));
    };
    return ne.read(r, !0), () => Xt(r);
  }
  function hA(e) {
    window.MotionDebug && window.MotionDebug.record(e);
  }
  function pA(e) {
    return e instanceof SVGElement && e.tagName !== "svg";
  }
  function mA(e, t, n) {
    const r = Ke(e) ? e : Kr(e);
    return r.start(gf("", r, t, n)), r.animation;
  }
  const up = ["", "X", "Y", "Z"], cp = 1e3;
  let yA = 0;
  const In = {
    type: "projectionFrame",
    totalNodes: 0,
    resolvedTargetDeltas: 0,
    recalculatedProjection: 0
  };
  function Hv({ attachResizeListener: e, defaultParent: t, measureScroll: n, checkIsScrollRoot: r, resetTransform: i }) {
    return class {
      constructor(s = {}, a = t == null ? void 0 : t()) {
        this.id = yA++, this.animationId = 0, this.children = /* @__PURE__ */ new Set(), this.options = {}, this.isTreeAnimating = !1, this.isAnimationBlocked = !1, this.isLayoutDirty = !1, this.isProjectionDirty = !1, this.isSharedProjectionDirty = !1, this.isTransformDirty = !1, this.updateManuallyBlocked = !1, this.updateBlockedByResize = !1, this.isUpdating = !1, this.isSVG = !1, this.needsReset = !1, this.shouldResetTransform = !1, this.treeScale = { x: 1, y: 1 }, this.eventHandlers = /* @__PURE__ */ new Map(), this.hasTreeAnimated = !1, this.updateScheduled = !1, this.checkUpdateFailed = () => {
          this.isUpdating && (this.isUpdating = !1, this.clearAllSnapshots());
        }, this.updateProjection = () => {
          In.totalNodes = In.resolvedTargetDeltas = In.recalculatedProjection = 0, this.nodes.forEach(xA), this.nodes.forEach(CA), this.nodes.forEach(PA), this.nodes.forEach(wA), hA(In);
        }, this.hasProjected = !1, this.isVisible = !0, this.animationProgress = 0, this.sharedNodes = /* @__PURE__ */ new Map(), this.latestValues = s, this.root = a ? a.root || a : this, this.path = a ? [...a.path, a] : [], this.parent = a, this.depth = a ? a.depth + 1 : 0;
        for (let l = 0; l < this.path.length; l++)
          this.path[l].shouldResetTransform = !0;
        this.root === this && (this.nodes = new fA());
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
        this.isSVG = pA(s), this.instance = s;
        const { layoutId: l, layout: u, visualElement: c } = this.options;
        if (c && !c.current && c.mount(s), this.root.nodes.add(this), this.parent && this.parent.children.add(this), a && (u || l) && (this.isLayoutDirty = !0), e) {
          let f;
          const d = () => this.root.updateBlockedByResize = !1;
          e(s, () => {
            this.root.updateBlockedByResize = !0, f && f(), f = dA(d, 250), ts.hasAnimatedSinceResize && (ts.hasAnimatedSinceResize = !1, this.nodes.forEach(dp));
          });
        }
        l && this.root.registerSharedNode(l, this), this.options.animate !== !1 && c && (l || u) && this.addEventListener("didUpdate", ({ delta: f, hasLayoutChanged: d, hasRelativeTargetChanged: p, layout: g }) => {
          if (this.isTreeAnimationBlocked()) {
            this.target = void 0, this.relativeTarget = void 0;
            return;
          }
          const v = this.options.transition || c.getDefaultTransition() || FA, { onLayoutAnimationStart: P, onLayoutAnimationComplete: y } = c.getProps(), h = !this.targetLayout || !Uv(this.targetLayout, g) || p, m = !d && p;
          if (this.options.layoutRoot || this.resumeFrom && this.resumeFrom.instance || m || d && (h || !this.currentAnimation)) {
            this.resumeFrom && (this.resumingFrom = this.resumeFrom, this.resumingFrom.resumingFrom = void 0), this.setAnimationOrigin(f, m);
            const x = {
              ...Av(v, "layout"),
              onPlay: P,
              onComplete: y
            };
            (c.shouldReduceMotion || this.options.layoutRoot) && (x.delay = 0, x.type = !1), this.startAnimation(x);
          } else
            d || dp(this), this.isLead() && this.options.onExitComplete && this.options.onExitComplete();
          this.targetLayout = g;
        });
      }
      unmount() {
        this.options.layoutId && this.willUpdate(), this.root.nodes.remove(this);
        const s = this.getStack();
        s && s.remove(this), this.parent && this.parent.children.delete(this), this.instance = void 0, Xt(this.updateProjection);
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
        this.isUpdateBlocked() || (this.isUpdating = !0, this.nodes && this.nodes.forEach(kA), this.animationId++);
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
          this.unblockUpdate(), this.clearAllSnapshots(), this.nodes.forEach(fp);
          return;
        }
        this.isUpdating || this.nodes.forEach(TA), this.isUpdating = !1, this.nodes.forEach(EA), this.nodes.forEach(gA), this.nodes.forEach(vA), this.clearAllSnapshots();
        const a = performance.now();
        Te.delta = kn(0, 1e3 / 60, a - Te.timestamp), Te.timestamp = a, Te.isProcessing = !0, cl.update.process(Te), cl.preRender.process(Te), cl.render.process(Te), Te.isProcessing = !1;
      }
      didUpdate() {
        this.updateScheduled || (this.updateScheduled = !0, queueMicrotask(() => this.update()));
      }
      clearAllSnapshots() {
        this.nodes.forEach(SA), this.sharedNodes.forEach(_A);
      }
      scheduleUpdateProjection() {
        ne.preRender(this.updateProjection, !1, !0);
      }
      scheduleCheckAfterUnmount() {
        ne.postRender(() => {
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
        this.layout = this.measure(!1), this.layoutCorrected = ge(), this.isLayoutDirty = !1, this.projectionDelta = void 0, this.notifyListeners("measure", this.layout.layoutBox);
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
        const s = this.isLayoutDirty || this.shouldResetTransform, a = this.projectionDelta && !Bv(this.projectionDelta), l = this.getTransformTemplate(), u = l ? l(this.latestValues, "") : void 0, c = u !== this.prevTransformTemplateValue;
        s && (a || bn(this.latestValues) || c) && (i(this.instance, u), this.shouldResetTransform = !1, this.scheduleRender());
      }
      measure(s = !0) {
        const a = this.measurePageBox();
        let l = this.removeElementScroll(a);
        return s && (l = this.removeTransform(l)), jA(l), {
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
          return ge();
        const a = s.measureViewportBox(), { scroll: l } = this.root;
        return l && (sn(a.x, l.offset.x), sn(a.y, l.offset.y)), a;
      }
      removeElementScroll(s) {
        const a = ge();
        at(a, s);
        for (let l = 0; l < this.path.length; l++) {
          const u = this.path[l], { scroll: c, options: f } = u;
          if (u !== this.root && c && f.layoutScroll) {
            if (c.isRoot) {
              at(a, s);
              const { scroll: d } = this.root;
              d && (sn(a.x, -d.offset.x), sn(a.y, -d.offset.y));
            }
            sn(a.x, c.offset.x), sn(a.y, c.offset.y);
          }
        }
        return a;
      }
      applyTransform(s, a = !1) {
        const l = ge();
        at(l, s);
        for (let u = 0; u < this.path.length; u++) {
          const c = this.path[u];
          !a && c.options.layoutScroll && c.scroll && c !== c.root && jr(l, {
            x: -c.scroll.offset.x,
            y: -c.scroll.offset.y
          }), bn(c.latestValues) && jr(l, c.latestValues);
        }
        return bn(this.latestValues) && jr(l, this.latestValues), l;
      }
      removeTransform(s) {
        const a = ge();
        at(a, s);
        for (let l = 0; l < this.path.length; l++) {
          const u = this.path[l];
          if (!u.instance || !bn(u.latestValues))
            continue;
          Nu(u.latestValues) && u.updateSnapshot();
          const c = ge(), f = u.measurePageBox();
          at(c, f), op(a, u.latestValues, u.snapshot ? u.snapshot.layoutBox : void 0, c);
        }
        return bn(this.latestValues) && op(a, this.latestValues), a;
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
        this.relativeParent && this.relativeParent.resolvedRelativeTargetAt !== Te.timestamp && this.relativeParent.resolveTargetDelta(!0);
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
          if (this.resolvedRelativeTargetAt = Te.timestamp, !this.targetDelta && !this.relativeTarget) {
            const p = this.getClosestProjectingParent();
            p && p.layout && this.animationProgress !== 1 ? (this.relativeParent = p, this.forceRelativeParentToResolveTarget(), this.relativeTarget = ge(), this.relativeTargetOrigin = ge(), ji(this.relativeTargetOrigin, this.layout.layoutBox, p.layout.layoutBox), at(this.relativeTarget, this.relativeTargetOrigin)) : this.relativeParent = this.relativeTarget = void 0;
          }
          if (!(!this.relativeTarget && !this.targetDelta)) {
            if (this.target || (this.target = ge(), this.targetWithTransforms = ge()), this.relativeTarget && this.relativeTargetOrigin && this.relativeParent && this.relativeParent.target ? (this.forceRelativeParentToResolveTarget(), M_(this.target, this.relativeTarget, this.relativeParent.target)) : this.targetDelta ? (this.resumingFrom ? this.target = this.applyTransform(this.layout.layoutBox) : at(this.target, this.layout.layoutBox), Vv(this.target, this.targetDelta)) : at(this.target, this.layout.layoutBox), this.attemptToResolveRelativeTarget) {
              this.attemptToResolveRelativeTarget = !1;
              const p = this.getClosestProjectingParent();
              p && !!p.resumingFrom == !!this.resumingFrom && !p.options.layoutScroll && p.target && this.animationProgress !== 1 ? (this.relativeParent = p, this.forceRelativeParentToResolveTarget(), this.relativeTarget = ge(), this.relativeTargetOrigin = ge(), ji(this.relativeTargetOrigin, this.target, p.target), at(this.relativeTarget, this.relativeTargetOrigin)) : this.relativeParent = this.relativeTarget = void 0;
            }
            In.resolvedTargetDeltas++;
          }
        }
      }
      getClosestProjectingParent() {
        if (!(!this.parent || Nu(this.parent.latestValues) || Lv(this.parent.latestValues)))
          return this.parent.isProjecting() ? this.parent : this.parent.getClosestProjectingParent();
      }
      isProjecting() {
        return !!((this.relativeTarget || this.targetDelta || this.options.layoutRoot) && this.layout);
      }
      calcProjection() {
        var s;
        const a = this.getLead(), l = !!this.resumingFrom || this !== a;
        let u = !0;
        if ((this.isProjectionDirty || !((s = this.parent) === null || s === void 0) && s.isProjectionDirty) && (u = !1), l && (this.isSharedProjectionDirty || this.isTransformDirty) && (u = !1), this.resolvedRelativeTargetAt === Te.timestamp && (u = !1), u)
          return;
        const { layout: c, layoutId: f } = this.options;
        if (this.isTreeAnimating = !!(this.parent && this.parent.isTreeAnimating || this.currentAnimation || this.pendingAnimation), this.isTreeAnimating || (this.targetDelta = this.relativeTarget = void 0), !this.layout || !(c || f))
          return;
        at(this.layoutCorrected, this.layout.layoutBox);
        const d = this.treeScale.x, p = this.treeScale.y;
        B_(this.layoutCorrected, this.treeScale, this.path, l), a.layout && !a.target && (this.treeScale.x !== 1 || this.treeScale.y !== 1) && (a.target = a.layout.layoutBox);
        const { target: g } = a;
        if (!g) {
          this.projectionTransform && (this.projectionDelta = Fr(), this.projectionTransform = "none", this.scheduleRender());
          return;
        }
        this.projectionDelta || (this.projectionDelta = Fr(), this.projectionDeltaWithTransform = Fr());
        const v = this.projectionTransform;
        Fi(this.projectionDelta, this.layoutCorrected, g, this.latestValues), this.projectionTransform = lp(this.projectionDelta, this.treeScale), (this.projectionTransform !== v || this.treeScale.x !== d || this.treeScale.y !== p) && (this.hasProjected = !0, this.scheduleRender(), this.notifyListeners("projectionUpdate", g)), In.recalculatedProjection++;
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
        const l = this.snapshot, u = l ? l.latestValues : {}, c = { ...this.latestValues }, f = Fr();
        (!this.relativeParent || !this.relativeParent.options.layoutRoot) && (this.relativeTarget = this.relativeTargetOrigin = void 0), this.attemptToResolveRelativeTarget = !a;
        const d = ge(), p = l ? l.source : void 0, g = this.layout ? this.layout.source : void 0, v = p !== g, P = this.getStack(), y = !P || P.members.length <= 1, h = !!(v && !y && this.options.crossfade === !0 && !this.path.some(OA));
        this.animationProgress = 0;
        let m;
        this.mixTargetDelta = (x) => {
          const E = x / 1e3;
          hp(f.x, s.x, E), hp(f.y, s.y, E), this.setTargetDelta(f), this.relativeTarget && this.relativeTargetOrigin && this.layout && this.relativeParent && this.relativeParent.layout && (ji(d, this.layout.layoutBox, this.relativeParent.layout.layoutBox), AA(this.relativeTarget, this.relativeTargetOrigin, d, E), m && lA(this.relativeTarget, m) && (this.isProjectionDirty = !1), m || (m = ge()), at(m, this.relativeTarget)), v && (this.animationValues = c, nA(c, u, this.latestValues, E, h, y)), this.root.scheduleUpdateProjection(), this.scheduleRender(), this.animationProgress = E;
        }, this.mixTargetDelta(this.options.layoutRoot ? 1e3 : 0);
      }
      startAnimation(s) {
        this.notifyListeners("animationStart"), this.currentAnimation && this.currentAnimation.stop(), this.resumingFrom && this.resumingFrom.currentAnimation && this.resumingFrom.currentAnimation.stop(), this.pendingAnimation && (Xt(this.pendingAnimation), this.pendingAnimation = void 0), this.pendingAnimation = ne.update(() => {
          ts.hasAnimatedSinceResize = !0, this.currentAnimation = mA(0, cp, {
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
        this.currentAnimation && (this.mixTargetDelta && this.mixTargetDelta(cp), this.currentAnimation.stop()), this.completeAnimation();
      }
      applyTransformsToTarget() {
        const s = this.getLead();
        let { targetWithTransforms: a, target: l, layout: u, latestValues: c } = s;
        if (!(!a || !l || !u)) {
          if (this !== s && this.layout && u && Wv(this.options.animationType, this.layout.layoutBox, u.layoutBox)) {
            l = this.target || ge();
            const f = tt(this.layout.layoutBox.x);
            l.x.min = s.target.x.min, l.x.max = l.x.min + f;
            const d = tt(this.layout.layoutBox.y);
            l.y.min = s.target.y.min, l.y.max = l.y.min + d;
          }
          at(a, l), jr(a, c), Fi(this.projectionDeltaWithTransform, this.layoutCorrected, a, c);
        }
      }
      registerSharedNode(s, a) {
        this.sharedNodes.has(s) || this.sharedNodes.set(s, new uA()), this.sharedNodes.get(s).add(a);
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
        for (let c = 0; c < up.length; c++) {
          const f = "rotate" + up[c];
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
          return this.needsReset = !1, u.opacity = "", u.pointerEvents = es(s.pointerEvents) || "", u.transform = c ? c(this.latestValues, "") : "none", u;
        const f = this.getLead();
        if (!this.projectionDelta || !this.layout || !f.target) {
          const v = {};
          return this.options.layoutId && (v.opacity = this.latestValues.opacity !== void 0 ? this.latestValues.opacity : 1, v.pointerEvents = es(s.pointerEvents) || ""), this.hasProjected && !bn(this.latestValues) && (v.transform = c ? c({}, "") : "none", this.hasProjected = !1), v;
        }
        const d = f.animationValues || f.latestValues;
        this.applyTransformsToTarget(), u.transform = lp(this.projectionDeltaWithTransform, this.treeScale, d), c && (u.transform = c(d, u.transform));
        const { x: p, y: g } = this.projectionDelta;
        u.transformOrigin = `${p.origin * 100}% ${g.origin * 100}% 0`, f.animationValues ? u.opacity = f === this ? (l = (a = d.opacity) !== null && a !== void 0 ? a : this.latestValues.opacity) !== null && l !== void 0 ? l : 1 : this.preserveOpacity ? this.latestValues.opacity : d.opacityExit : u.opacity = f === this ? d.opacity !== void 0 ? d.opacity : "" : d.opacityExit !== void 0 ? d.opacityExit : 0;
        for (const v in Os) {
          if (d[v] === void 0)
            continue;
          const { correct: P, applyTo: y } = Os[v], h = u.transform === "none" ? d[v] : P(d[v], f);
          if (y) {
            const m = y.length;
            for (let x = 0; x < m; x++)
              u[y[x]] = h;
          } else
            u[v] = h;
        }
        return this.options.layoutId && (u.pointerEvents = f === this ? es(s.pointerEvents) || "" : "none"), u;
      }
      clearSnapshot() {
        this.resumeFrom = this.snapshot = void 0;
      }
      // Only run on root
      resetTree() {
        this.root.nodes.forEach((s) => {
          var a;
          return (a = s.currentAnimation) === null || a === void 0 ? void 0 : a.stop();
        }), this.root.nodes.forEach(fp), this.root.sharedNodes.clear();
      }
    };
  }
  function gA(e) {
    e.updateLayout();
  }
  function vA(e) {
    var t;
    const n = ((t = e.resumeFrom) === null || t === void 0 ? void 0 : t.snapshot) || e.snapshot;
    if (e.isLead() && e.layout && n && e.hasListeners("didUpdate")) {
      const { layoutBox: r, measuredBox: i } = e.layout, { animationType: o } = e.options, s = n.source !== e.layout.source;
      o === "size" ? kt((f) => {
        const d = s ? n.measuredBox[f] : n.layoutBox[f], p = tt(d);
        d.min = r[f].min, d.max = d.min + p;
      }) : Wv(o, n.layoutBox, r) && kt((f) => {
        const d = s ? n.measuredBox[f] : n.layoutBox[f], p = tt(r[f]);
        d.max = d.min + p, e.relativeTarget && !e.currentAnimation && (e.isProjectionDirty = !0, e.relativeTarget[f].max = e.relativeTarget[f].min + p);
      });
      const a = Fr();
      Fi(a, r, n.layoutBox);
      const l = Fr();
      s ? Fi(l, e.applyTransform(i, !0), n.measuredBox) : Fi(l, r, n.layoutBox);
      const u = !Bv(a);
      let c = !1;
      if (!e.resumeFrom) {
        const f = e.getClosestProjectingParent();
        if (f && !f.resumeFrom) {
          const { snapshot: d, layout: p } = f;
          if (d && p) {
            const g = ge();
            ji(g, n.layoutBox, d.layoutBox);
            const v = ge();
            ji(v, r, p.layoutBox), Uv(g, v) || (c = !0), f.options.layoutRoot && (e.relativeTarget = v, e.relativeTargetOrigin = g, e.relativeParent = f);
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
  function xA(e) {
    In.totalNodes++, e.parent && (e.isProjecting() || (e.isProjectionDirty = e.parent.isProjectionDirty), e.isSharedProjectionDirty || (e.isSharedProjectionDirty = !!(e.isProjectionDirty || e.parent.isProjectionDirty || e.parent.isSharedProjectionDirty)), e.isTransformDirty || (e.isTransformDirty = e.parent.isTransformDirty));
  }
  function wA(e) {
    e.isProjectionDirty = e.isSharedProjectionDirty = e.isTransformDirty = !1;
  }
  function SA(e) {
    e.clearSnapshot();
  }
  function fp(e) {
    e.clearMeasurements();
  }
  function TA(e) {
    e.isLayoutDirty = !1;
  }
  function EA(e) {
    const { visualElement: t } = e.options;
    t && t.getProps().onBeforeLayoutMeasure && t.notify("BeforeLayoutMeasure"), e.resetTransform();
  }
  function dp(e) {
    e.finishAnimation(), e.targetDelta = e.relativeTarget = e.target = void 0, e.isProjectionDirty = !0;
  }
  function CA(e) {
    e.resolveTargetDelta();
  }
  function PA(e) {
    e.calcProjection();
  }
  function kA(e) {
    e.resetRotation();
  }
  function _A(e) {
    e.removeLeadSnapshot();
  }
  function hp(e, t, n) {
    e.translate = ue(t.translate, 0, n), e.scale = ue(t.scale, 1, n), e.origin = t.origin, e.originPoint = t.originPoint;
  }
  function pp(e, t, n, r) {
    e.min = ue(t.min, n.min, r), e.max = ue(t.max, n.max, r);
  }
  function AA(e, t, n, r) {
    pp(e.x, t.x, n.x, r), pp(e.y, t.y, n.y, r);
  }
  function OA(e) {
    return e.animationValues && e.animationValues.opacityExit !== void 0;
  }
  const FA = {
    duration: 0.45,
    ease: [0.4, 0, 0.1, 1]
  }, mp = (e) => typeof navigator < "u" && navigator.userAgent.toLowerCase().includes(e), yp = mp("applewebkit/") && !mp("chrome/") ? Math.round : he;
  function gp(e) {
    e.min = yp(e.min), e.max = yp(e.max);
  }
  function jA(e) {
    gp(e.x), gp(e.y);
  }
  function Wv(e, t, n) {
    return e === "position" || e === "preserve-aspect" && !Mu(ap(t), ap(n), 0.2);
  }
  const DA = Hv({
    attachResizeListener: (e, t) => zt(e, "resize", t),
    measureScroll: () => ({
      x: document.documentElement.scrollLeft || document.body.scrollLeft,
      y: document.documentElement.scrollTop || document.body.scrollTop
    }),
    checkIsScrollRoot: () => !0
  }), Sl = {
    current: void 0
  }, Gv = Hv({
    measureScroll: (e) => ({
      x: e.scrollLeft,
      y: e.scrollTop
    }),
    defaultParent: () => {
      if (!Sl.current) {
        const e = new DA({});
        e.mount(window), e.setOptions({ layoutScroll: !0 }), Sl.current = e;
      }
      return Sl.current;
    },
    resetTransform: (e, t) => {
      e.style.transform = t !== void 0 ? t : "none";
    },
    checkIsScrollRoot: (e) => window.getComputedStyle(e).position === "fixed"
  }), MA = {
    pan: {
      Feature: X_
    },
    drag: {
      Feature: Y_,
      ProjectionNode: Gv,
      MeasureLayout: bv
    }
  }, RA = /var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/;
  function NA(e) {
    const t = RA.exec(e);
    if (!t)
      return [,];
    const [, n, r] = t;
    return [n, r];
  }
  function Vu(e, t, n = 1) {
    const [r, i] = NA(e);
    if (!r)
      return;
    const o = window.getComputedStyle(t).getPropertyValue(r);
    if (o) {
      const s = o.trim();
      return Ov(s) ? parseFloat(s) : s;
    } else
      return ku(i) ? Vu(i, t, n + 1) : i;
  }
  function LA(e, { ...t }, n) {
    const r = e.current;
    if (!(r instanceof Element))
      return { target: t, transitionEnd: n };
    n && (n = { ...n }), e.values.forEach((i) => {
      const o = i.get();
      if (!ku(o))
        return;
      const s = Vu(o, r);
      s && i.set(s);
    });
    for (const i in t) {
      const o = t[i];
      if (!ku(o))
        continue;
      const s = Vu(o, r);
      s && (t[i] = s, n || (n = {}), n[i] === void 0 && (n[i] = o));
    }
    return { target: t, transitionEnd: n };
  }
  const VA = /* @__PURE__ */ new Set([
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
  ]), Kv = (e) => VA.has(e), $A = (e) => Object.keys(e).some(Kv), vp = (e) => e === cr || e === b, xp = (e, t) => parseFloat(e.split(", ")[t]), wp = (e, t) => (n, { transform: r }) => {
    if (r === "none" || !r)
      return 0;
    const i = r.match(/^matrix3d\((.+)\)$/);
    if (i)
      return xp(i[1], t);
    {
      const o = r.match(/^matrix\((.+)\)$/);
      return o ? xp(o[1], e) : 0;
    }
  }, bA = /* @__PURE__ */ new Set(["x", "y", "z"]), IA = co.filter((e) => !bA.has(e));
  function zA(e) {
    const t = [];
    return IA.forEach((n) => {
      const r = e.getValue(n);
      r !== void 0 && (t.push([n, r.get()]), r.set(n.startsWith("scale") ? 1 : 0));
    }), t.length && e.render(), t;
  }
  const Qr = {
    // Dimensions
    width: ({ x: e }, { paddingLeft: t = "0", paddingRight: n = "0" }) => e.max - e.min - parseFloat(t) - parseFloat(n),
    height: ({ y: e }, { paddingTop: t = "0", paddingBottom: n = "0" }) => e.max - e.min - parseFloat(t) - parseFloat(n),
    top: (e, { top: t }) => parseFloat(t),
    left: (e, { left: t }) => parseFloat(t),
    bottom: ({ y: e }, { top: t }) => parseFloat(t) + (e.max - e.min),
    right: ({ x: e }, { left: t }) => parseFloat(t) + (e.max - e.min),
    // Transform
    x: wp(4, 13),
    y: wp(5, 14)
  };
  Qr.translateX = Qr.x;
  Qr.translateY = Qr.y;
  const BA = (e, t, n) => {
    const r = t.measureViewportBox(), i = t.current, o = getComputedStyle(i), { display: s } = o, a = {};
    s === "none" && t.setStaticValue("display", e.display || "block"), n.forEach((u) => {
      a[u] = Qr[u](r, o);
    }), t.render();
    const l = t.measureViewportBox();
    return n.forEach((u) => {
      const c = t.getValue(u);
      c && c.jump(a[u]), e[u] = Qr[u](l, o);
    }), e;
  }, UA = (e, t, n = {}, r = {}) => {
    t = { ...t }, r = { ...r };
    const i = Object.keys(t).filter(Kv);
    let o = [], s = !1;
    const a = [];
    if (i.forEach((l) => {
      const u = e.getValue(l);
      if (!e.hasValue(l))
        return;
      let c = n[l], f = ci(c);
      const d = t[l];
      let p;
      if (js(d)) {
        const g = d.length, v = d[0] === null ? 1 : 0;
        c = d[v], f = ci(c);
        for (let P = v; P < g && d[P] !== null; P++)
          p ? df(ci(d[P]) === p) : p = ci(d[P]);
      } else
        p = ci(d);
      if (f !== p)
        if (vp(f) && vp(p)) {
          const g = u.get();
          typeof g == "string" && u.set(parseFloat(g)), typeof d == "string" ? t[l] = parseFloat(d) : Array.isArray(d) && p === b && (t[l] = d.map(parseFloat));
        } else
          f != null && f.transform && (p != null && p.transform) && (c === 0 || d === 0) ? c === 0 ? u.set(p.transform(c)) : t[l] = f.transform(d) : (s || (o = zA(e), s = !0), a.push(l), r[l] = r[l] !== void 0 ? r[l] : t[l], u.jump(d));
    }), a.length) {
      const l = a.indexOf("height") >= 0 ? window.pageYOffset : null, u = BA(t, e, a);
      return o.length && o.forEach(([c, f]) => {
        e.getValue(c).set(f);
      }), e.render(), Sa && l !== null && window.scrollTo({ top: l }), { target: u, transitionEnd: r };
    } else
      return { target: t, transitionEnd: r };
  };
  function HA(e, t, n, r) {
    return $A(t) ? UA(e, t, n, r) : { target: t, transitionEnd: r };
  }
  const WA = (e, t, n, r) => {
    const i = LA(e, t, r);
    return t = i.target, r = i.transitionEnd, HA(e, t, n, r);
  }, $u = { current: null }, Qv = { current: !1 };
  function GA() {
    if (Qv.current = !0, !!Sa)
      if (window.matchMedia) {
        const e = window.matchMedia("(prefers-reduced-motion)"), t = () => $u.current = e.matches;
        e.addListener(t), t();
      } else
        $u.current = !1;
  }
  function KA(e, t, n) {
    const { willChange: r } = t;
    for (const i in t) {
      const o = t[i], s = n[i];
      if (Ke(o))
        e.addValue(i, o), Ns(r) && r.add(i);
      else if (Ke(s))
        e.addValue(i, Kr(o, { owner: e })), Ns(r) && r.remove(i);
      else if (s !== o)
        if (e.hasValue(i)) {
          const a = e.getValue(i);
          !a.hasAnimated && a.set(o);
        } else {
          const a = e.getStaticValue(i);
          e.addValue(i, Kr(a !== void 0 ? a : o, { owner: e }));
        }
    }
    for (const i in n)
      t[i] === void 0 && e.removeValue(i);
    return t;
  }
  const Sp = /* @__PURE__ */ new WeakMap(), Yv = Object.keys(Ji), QA = Yv.length, Tp = [
    "AnimationStart",
    "AnimationComplete",
    "Update",
    "BeforeLayoutMeasure",
    "LayoutMeasure",
    "LayoutAnimationStart",
    "LayoutAnimationComplete"
  ], YA = tf.length;
  class XA {
    constructor({ parent: t, props: n, presenceContext: r, reducedMotionConfig: i, visualState: o }, s = {}) {
      this.current = null, this.children = /* @__PURE__ */ new Set(), this.isVariantNode = !1, this.isControllingVariants = !1, this.shouldReduceMotion = null, this.values = /* @__PURE__ */ new Map(), this.features = {}, this.valueSubscriptions = /* @__PURE__ */ new Map(), this.prevMotionValues = {}, this.events = {}, this.propEventSubscriptions = {}, this.notifyUpdate = () => this.notify("Update", this.latestValues), this.render = () => {
        this.current && (this.triggerBuild(), this.renderInstance(this.current, this.renderState, this.props.style, this.projection));
      }, this.scheduleRender = () => ne.render(this.render, !1, !0);
      const { latestValues: a, renderState: l } = o;
      this.latestValues = a, this.baseTarget = { ...a }, this.initialValues = n.initial ? { ...a } : {}, this.renderState = l, this.parent = t, this.props = n, this.presenceContext = r, this.depth = t ? t.depth + 1 : 0, this.reducedMotionConfig = i, this.options = s, this.isControllingVariants = Ea(n), this.isVariantNode = Mg(n), this.isVariantNode && (this.variantChildren = /* @__PURE__ */ new Set()), this.manuallyAnimateOnMount = !!(t && t.current);
      const { willChange: u, ...c } = this.scrapeMotionValuesFromProps(n, {});
      for (const f in c) {
        const d = c[f];
        a[f] !== void 0 && Ke(d) && (d.set(a[f], !1), Ns(u) && u.add(f));
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
      this.current = t, Sp.set(t, this), this.projection && !this.projection.instance && this.projection.mount(t), this.parent && this.isVariantNode && !this.isControllingVariants && (this.removeFromVariantTree = this.parent.addVariantChild(this)), this.values.forEach((n, r) => this.bindToMotionValue(r, n)), Qv.current || GA(), this.shouldReduceMotion = this.reducedMotionConfig === "never" ? !1 : this.reducedMotionConfig === "always" ? !0 : $u.current, this.parent && this.parent.children.add(this), this.update(this.props, this.presenceContext);
    }
    unmount() {
      Sp.delete(this.current), this.projection && this.projection.unmount(), Xt(this.notifyUpdate), Xt(this.render), this.valueSubscriptions.forEach((t) => t()), this.removeFromVariantTree && this.removeFromVariantTree(), this.parent && this.parent.children.delete(this);
      for (const t in this.events)
        this.events[t].clear();
      for (const t in this.features)
        this.features[t].unmount();
      this.current = null;
    }
    bindToMotionValue(t, n) {
      const r = ur.has(t), i = n.on("change", (s) => {
        this.latestValues[t] = s, this.props.onUpdate && ne.update(this.notifyUpdate, !1, !0), r && this.projection && (this.projection.isTransformDirty = !0);
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
      for (let l = 0; l < QA; l++) {
        const u = Yv[l], { isEnabled: c, Feature: f, ProjectionNode: d, MeasureLayout: p } = Ji[u];
        d && (s = d), c(n) && (!this.features[u] && f && (this.features[u] = new f(this)), p && (a = p));
      }
      if (!this.projection && s) {
        this.projection = new s(this.latestValues, this.parent && this.parent.projection);
        const { layoutId: l, layout: u, drag: c, dragConstraints: f, layoutScroll: d, layoutRoot: p } = n;
        this.projection.setOptions({
          layoutId: l,
          layout: u,
          alwaysMeasureLayout: !!c || f && Ar(f),
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
      return this.current ? this.measureInstanceViewportBox(this.current, this.props) : ge();
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
      for (let r = 0; r < Tp.length; r++) {
        const i = Tp[r];
        this.propEventSubscriptions[i] && (this.propEventSubscriptions[i](), delete this.propEventSubscriptions[i]);
        const o = t["on" + i];
        o && (this.propEventSubscriptions[i] = this.on(i, o));
      }
      this.prevMotionValues = KA(this, this.scrapeMotionValuesFromProps(t, this.prevProps), this.prevMotionValues), this.handleChildMotionValue && this.handleChildMotionValue();
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
      for (let r = 0; r < YA; r++) {
        const i = tf[r], o = this.props[i];
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
      return r === void 0 && n !== void 0 && (r = Kr(n, { owner: this }), this.addValue(t, r)), r;
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
  class Xv extends XA {
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
      let s = m_(r, t || {}, this);
      if (i && (n && (n = i(n)), r && (r = i(r)), s && (s = i(s))), o) {
        h_(this, r, s);
        const a = WA(this, r, s, n);
        n = a.transitionEnd, r = a.target;
      }
      return {
        transition: t,
        transitionEnd: n,
        ...r
      };
    }
  }
  function ZA(e) {
    return window.getComputedStyle(e);
  }
  class qA extends Xv {
    readValueFromInstance(t, n) {
      if (ur.has(n)) {
        const r = yf(n);
        return r && r.default || 0;
      } else {
        const r = ZA(t), i = (Vg(n) ? r.getPropertyValue(n) : r[n]) || 0;
        return typeof i == "string" ? i.trim() : i;
      }
    }
    measureInstanceViewportBox(t, { transformPagePoint: n }) {
      return $v(t, n);
    }
    build(t, n, r, i) {
      of(t, n, r, i.transformTemplate);
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
      Ug(t, n, r, i);
    }
  }
  class JA extends Xv {
    constructor() {
      super(...arguments), this.isSVGTag = !1;
    }
    getBaseTargetFromProps(t, n) {
      return t[n];
    }
    readValueFromInstance(t, n) {
      if (ur.has(n)) {
        const r = yf(n);
        return r && r.default || 0;
      }
      return n = Hg.has(n) ? n : uf(n), t.getAttribute(n);
    }
    measureInstanceViewportBox() {
      return ge();
    }
    scrapeMotionValuesFromProps(t, n) {
      return Gg(t, n);
    }
    build(t, n, r, i) {
      af(t, n, r, this.isSVGTag, i.transformTemplate);
    }
    renderInstance(t, n, r, i) {
      Wg(t, n, r, i);
    }
    mount(t) {
      this.isSVGTag = lf(t.tagName), super.mount(t);
    }
  }
  const eO = (e, t) => rf(e) ? new JA(t, { enableHardwareAcceleration: !1 }) : new qA(t, { enableHardwareAcceleration: !0 }), tO = {
    layout: {
      ProjectionNode: Gv,
      MeasureLayout: bv
    }
  }, nO = {
    ...O_,
    ...Yk,
    ...MA,
    ...tO
  }, rO = /* @__PURE__ */ ik((e, t) => Lk(e, t, nO, eO));
  function Zv() {
    const e = w.useRef(!1);
    return Jc(() => (e.current = !0, () => {
      e.current = !1;
    }), []), e;
  }
  function iO() {
    const e = Zv(), [t, n] = w.useState(0), r = w.useCallback(() => {
      e.current && n(t + 1);
    }, [t]);
    return [w.useCallback(() => ne.postRender(r), [r]), t];
  }
  class oO extends w.Component {
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
  function sO({ children: e, isPresent: t }) {
    const n = w.useId(), r = w.useRef(null), i = w.useRef({
      width: 0,
      height: 0,
      top: 0,
      left: 0
    });
    return w.useInsertionEffect(() => {
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
    }, [t]), w.createElement(oO, { isPresent: t, childRef: r, sizeRef: i }, w.cloneElement(e, { ref: r }));
  }
  const Tl = ({ children: e, initial: t, isPresent: n, onExitComplete: r, custom: i, presenceAffectsLayout: o, mode: s }) => {
    const a = Kg(aO), l = w.useId(), u = w.useMemo(
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
    return w.useMemo(() => {
      a.forEach((c, f) => a.set(f, !1));
    }, [n]), w.useEffect(() => {
      !n && !a.size && r && r();
    }, [n]), s === "popLayout" && (e = w.createElement(sO, { isPresent: n }, e)), w.createElement(wa.Provider, { value: u }, e);
  };
  function aO() {
    return /* @__PURE__ */ new Map();
  }
  function lO(e) {
    return w.useEffect(() => () => e(), []);
  }
  const pr = (e) => e.key || "";
  function uO(e, t) {
    e.forEach((n) => {
      const r = pr(n);
      t.set(r, n);
    });
  }
  function cO(e) {
    const t = [];
    return w.Children.forEach(e, (n) => {
      w.isValidElement(n) && t.push(n);
    }), t;
  }
  const fO = ({ children: e, custom: t, initial: n = !0, onExitComplete: r, exitBeforeEnter: i, presenceAffectsLayout: o = !0, mode: s = "sync" }) => {
    const a = w.useContext(nf).forceRender || iO()[0], l = Zv(), u = cO(e);
    let c = u;
    const f = w.useRef(/* @__PURE__ */ new Map()).current, d = w.useRef(c), p = w.useRef(/* @__PURE__ */ new Map()).current, g = w.useRef(!0);
    if (Jc(() => {
      g.current = !1, uO(u, p), d.current = c;
    }), lO(() => {
      g.current = !0, p.clear(), f.clear();
    }), g.current)
      return w.createElement(w.Fragment, null, c.map((h) => w.createElement(Tl, { key: pr(h), isPresent: !0, initial: n ? void 0 : !1, presenceAffectsLayout: o, mode: s }, h)));
    c = [...c];
    const v = d.current.map(pr), P = u.map(pr), y = v.length;
    for (let h = 0; h < y; h++) {
      const m = v[h];
      P.indexOf(m) === -1 && !f.has(m) && f.set(m, void 0);
    }
    return s === "wait" && f.size && (c = []), f.forEach((h, m) => {
      if (P.indexOf(m) !== -1)
        return;
      const x = p.get(m);
      if (!x)
        return;
      const E = v.indexOf(m);
      let C = h;
      if (!C) {
        const T = () => {
          p.delete(m), f.delete(m);
          const _ = d.current.findIndex((L) => L.key === m);
          if (d.current.splice(_, 1), !f.size) {
            if (d.current = u, l.current === !1)
              return;
            a(), r && r();
          }
        };
        C = w.createElement(Tl, { key: pr(x), isPresent: !1, onExitComplete: T, custom: t, presenceAffectsLayout: o, mode: s }, x), f.set(m, C);
      }
      c.splice(E, 0, C);
    }), c = c.map((h) => {
      const m = h.key;
      return f.has(m) ? h : w.createElement(Tl, { key: pr(h), isPresent: !0, presenceAffectsLayout: o, mode: s }, h);
    }), w.createElement(w.Fragment, null, f.size ? c : c.map((h) => w.cloneElement(h)));
  };
  function dO({
    activeStep: e,
    initialValues: t,
    values: n
  }) {
    function r(a) {
      return a = a[0].toUpperCase() + a.slice(1), a.replace(/[A-Z]/g, " $&");
    }
    function i(a) {
      if (!a)
        return;
      const l = {};
      return a.tests.forEach((c) => {
        switch (c.OPTIONS.name) {
          case "min":
            l.min = c.OPTIONS.params.min || c.OPTIONS.params.more;
            break;
          case "max":
            l.max = c.OPTIONS.params.max;
            break;
        }
      }), l;
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
            MP,
            {
              id: a,
              name: a,
              value: n[a],
              type: s == null ? void 0 : s.inputTypes[a],
              placeholder: (l = s == null ? void 0 : s.placeholders) == null ? void 0 : l[a],
              ...i((u = o == null ? void 0 : o.fields) == null ? void 0 : u[a]),
              className: "bg-gray-700 border border-gray-600 text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 placeholder-gray-400"
            }
          ),
          /* @__PURE__ */ F.jsx(IP, { name: a, children: (c) => /* @__PURE__ */ F.jsx("div", { className: "text-red-400", children: c }) })
        ] }, a);
      }) })
    ] });
  }
  function hO() {
    const { isAnimated: e } = w.useContext(Sf), { activeStep: t } = uo(), { initialValues: n, values: r } = va();
    let i = {};
    return e && (i = {
      initial: { opacity: 0 },
      animate: { opacity: 1 },
      exit: { opacity: 0 }
    }), /* @__PURE__ */ F.jsx(fO, { initial: !1, mode: "wait", children: /* @__PURE__ */ F.jsx(
      rO.div,
      {
        variants: i,
        initial: "initial",
        animate: "animate",
        exit: "exit",
        transition: { type: "tween", duration: 0.25 },
        children: /* @__PURE__ */ F.jsx("div", { className: "py-4 sm:pt-12 lg:pt-20 pb-20 sm:pb-32", children: /* @__PURE__ */ F.jsx("div", { className: "container mx-auto sm:px-0 px-5 max-w-lg min-w-min md:max-w-2xl lg:max-w-4xl", children: t.component || /* @__PURE__ */ F.jsx(
          dO,
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
  var qv = {
    color: void 0,
    size: void 0,
    className: void 0,
    style: void 0,
    attr: void 0
  }, Ep = Bt.createContext && Bt.createContext(qv), Tn = globalThis && globalThis.__assign || function() {
    return Tn = Object.assign || function(e) {
      for (var t, n = 1, r = arguments.length; n < r; n++) {
        t = arguments[n];
        for (var i in t)
          Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
      }
      return e;
    }, Tn.apply(this, arguments);
  }, pO = globalThis && globalThis.__rest || function(e, t) {
    var n = {};
    for (var r in e)
      Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
    if (e != null && typeof Object.getOwnPropertySymbols == "function")
      for (var i = 0, r = Object.getOwnPropertySymbols(e); i < r.length; i++)
        t.indexOf(r[i]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[i]) && (n[r[i]] = e[r[i]]);
    return n;
  };
  function Jv(e) {
    return e && e.map(function(t, n) {
      return Bt.createElement(t.tag, Tn({
        key: n
      }, t.attr), Jv(t.child));
    });
  }
  function e0(e) {
    return function(t) {
      return Bt.createElement(mO, Tn({
        attr: Tn({}, e.attr)
      }, t), Jv(e.child));
    };
  }
  function mO(e) {
    var t = function(n) {
      var r = e.attr, i = e.size, o = e.title, s = pO(e, ["attr", "size", "title"]), a = i || n.size || "1em", l;
      return n.className && (l = n.className), e.className && (l = (l ? l + " " : "") + e.className), Bt.createElement("svg", Tn({
        stroke: "currentColor",
        fill: "currentColor",
        strokeWidth: "0"
      }, n.attr, r, s, {
        className: l,
        style: Tn(Tn({
          color: e.color || n.color
        }, n.style), e.style),
        height: a,
        width: a,
        xmlns: "http://www.w3.org/2000/svg"
      }), o && Bt.createElement("title", null, o), e.children);
    };
    return Ep !== void 0 ? Bt.createElement(Ep.Consumer, null, function(n) {
      return t(n);
    }) : t(qv);
  }
  function yO(e) {
    return e0({ tag: "svg", attr: { fill: "currentColor", viewBox: "0 0 16 16" }, child: [{ tag: "path", attr: { fillRule: "evenodd", d: "M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z" } }] })(e);
  }
  function gO(e) {
    return e0({ tag: "svg", attr: { fill: "currentColor", viewBox: "0 0 16 16" }, child: [{ tag: "path", attr: { fillRule: "evenodd", d: "M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z" } }] })(e);
  }
  var t0 = {}, Yr = {};
  Object.defineProperty(Yr, "__esModule", { value: !0 });
  Yr.cssValue = Yr.parseLengthAndUnit = void 0;
  var vO = {
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
  function n0(e) {
    if (typeof e == "number")
      return {
        value: e,
        unit: "px"
      };
    var t, n = (e.match(/^[0-9.]*/) || "").toString();
    n.includes(".") ? t = parseFloat(n) : t = parseInt(n, 10);
    var r = (e.match(/[^0-9]*$/) || "").toString();
    return vO[r] ? {
      value: t,
      unit: r
    } : (console.warn("React Spinners: ".concat(e, " is not a valid css value. Defaulting to ").concat(t, "px.")), {
      value: t,
      unit: "px"
    });
  }
  Yr.parseLengthAndUnit = n0;
  function xO(e) {
    var t = n0(e);
    return "".concat(t.value).concat(t.unit);
  }
  Yr.cssValue = xO;
  var _a = {};
  Object.defineProperty(_a, "__esModule", { value: !0 });
  _a.createAnimation = void 0;
  var wO = function(e, t, n) {
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
  _a.createAnimation = wO;
  var Vs = Dt && Dt.__assign || function() {
    return Vs = Object.assign || function(e) {
      for (var t, n = 1, r = arguments.length; n < r; n++) {
        t = arguments[n];
        for (var i in t)
          Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
      }
      return e;
    }, Vs.apply(this, arguments);
  }, SO = Dt && Dt.__createBinding || (Object.create ? function(e, t, n, r) {
    r === void 0 && (r = n);
    var i = Object.getOwnPropertyDescriptor(t, n);
    (!i || ("get" in i ? !t.__esModule : i.writable || i.configurable)) && (i = { enumerable: !0, get: function() {
      return t[n];
    } }), Object.defineProperty(e, r, i);
  } : function(e, t, n, r) {
    r === void 0 && (r = n), e[r] = t[n];
  }), TO = Dt && Dt.__setModuleDefault || (Object.create ? function(e, t) {
    Object.defineProperty(e, "default", { enumerable: !0, value: t });
  } : function(e, t) {
    e.default = t;
  }), EO = Dt && Dt.__importStar || function(e) {
    if (e && e.__esModule)
      return e;
    var t = {};
    if (e != null)
      for (var n in e)
        n !== "default" && Object.prototype.hasOwnProperty.call(e, n) && SO(t, e, n);
    return TO(t, e), t;
  }, CO = Dt && Dt.__rest || function(e, t) {
    var n = {};
    for (var r in e)
      Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
    if (e != null && typeof Object.getOwnPropertySymbols == "function")
      for (var i = 0, r = Object.getOwnPropertySymbols(e); i < r.length; i++)
        t.indexOf(r[i]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[i]) && (n[r[i]] = e[r[i]]);
    return n;
  };
  Object.defineProperty(t0, "__esModule", { value: !0 });
  var PO = EO(w), Cp = Yr, kO = _a, _O = (0, kO.createAnimation)("ClipLoader", "0% {transform: rotate(0deg) scale(1)} 50% {transform: rotate(180deg) scale(0.8)} 100% {transform: rotate(360deg) scale(1)}", "clip");
  function AO(e) {
    var t = e.loading, n = t === void 0 ? !0 : t, r = e.color, i = r === void 0 ? "#000000" : r, o = e.speedMultiplier, s = o === void 0 ? 1 : o, a = e.cssOverride, l = a === void 0 ? {} : a, u = e.size, c = u === void 0 ? 35 : u, f = CO(e, ["loading", "color", "speedMultiplier", "cssOverride", "size"]), d = Vs({ background: "transparent !important", width: (0, Cp.cssValue)(c), height: (0, Cp.cssValue)(c), borderRadius: "100%", border: "2px solid", borderTopColor: i, borderBottomColor: "transparent", borderLeftColor: i, borderRightColor: i, display: "inline-block", animation: "".concat(_O, " ").concat(0.75 / s, "s 0s infinite linear"), animationFillMode: "both" }, l);
    return n ? PO.createElement("span", Vs({ style: d }, f)) : null;
  }
  var OO = t0.default = AO;
  function FO() {
    let {
      goToPreviousStep: e,
      isFirstStep: t,
      isLoading: n,
      hidePrevious: r,
      hideNext: i,
      disableNext: o,
      disableNextOnErrors: s,
      onClickDisabledNext: a
    } = uo();
    return o = n || o || s, /* @__PURE__ */ F.jsx("div", { className: "navigation", children: /* @__PURE__ */ F.jsxs("div", { className: "navigation-wrapper " + (r ? "justify-end" : "justify-between"), children: [
      !r && /* @__PURE__ */ F.jsxs(
        "button",
        {
          onClick: e,
          disabled: t,
          type: "button",
          children: [
            /* @__PURE__ */ F.jsx(yO, { className: "w-8 h-8 fill-current" }),
            /* @__PURE__ */ F.jsx("span", { children: "Previous" })
          ]
        }
      ),
      !i && /* @__PURE__ */ F.jsx("div", { onClick: a, children: /* @__PURE__ */ F.jsxs(
        "button",
        {
          type: "submit",
          disabled: o,
          children: [
            n && /* @__PURE__ */ F.jsx("span", { className: "mr-1 loading", children: /* @__PURE__ */ F.jsx(OO, { size: 11, color: "#757575" }) }),
            /* @__PURE__ */ F.jsx("span", { children: "Next" }),
            /* @__PURE__ */ F.jsx(gO, { className: "w-8 h-8 fill-current" })
          ]
        }
      ) })
    ] }) });
  }
  function jO() {
    const { isAnimated: e, setIsAnimated: t } = w.useContext(Sf), { stepNumber: n, totalSteps: r } = uo(), i = `${(n - 1) / (r - 1) * 100}%`, o = "/react-formik-step-wizard";
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
  const Sf = w.createContext({});
  function DO() {
    const [e, t] = w.useState(!0);
    return /* @__PURE__ */ F.jsx(Sf.Provider, { value: { isAnimated: e, setIsAnimated: t }, children: /* @__PURE__ */ F.jsx(
      WP,
      {
        enableHash: !0,
        steps: YP,
        onStepChanged: (n, r, i) => {
          console.log("step changed", n == null ? void 0 : n.id, r == null ? void 0 : r.id, i);
        },
        header: /* @__PURE__ */ F.jsx(jO, {}),
        wrapper: /* @__PURE__ */ F.jsx(hO, {}),
        footer: /* @__PURE__ */ F.jsx(FO, {})
      }
    ) });
  }
  El.createRoot(document.getElementById("root")).render(
    /* @__PURE__ */ F.jsx(DO, {})
  );
});
export default MO();
