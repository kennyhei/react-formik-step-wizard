var n0 = (e, t) => () => (t || e((t = { exports: {} }).exports, t), t.exports);
var eF = n0((Ze, qe) => {
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
  function Rs(e) {
    return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
  }
  var xp = { exports: {} }, js = {}, wp = { exports: {} }, z = {};
  /**
   * @license React
   * react.production.min.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */
  var qi = Symbol.for("react.element"), r0 = Symbol.for("react.portal"), i0 = Symbol.for("react.fragment"), o0 = Symbol.for("react.strict_mode"), s0 = Symbol.for("react.profiler"), a0 = Symbol.for("react.provider"), l0 = Symbol.for("react.context"), u0 = Symbol.for("react.forward_ref"), c0 = Symbol.for("react.suspense"), f0 = Symbol.for("react.memo"), d0 = Symbol.for("react.lazy"), xf = Symbol.iterator;
  function h0(e) {
    return e === null || typeof e != "object" ? null : (e = xf && e[xf] || e["@@iterator"], typeof e == "function" ? e : null);
  }
  var Tp = { isMounted: function() {
    return !1;
  }, enqueueForceUpdate: function() {
  }, enqueueReplaceState: function() {
  }, enqueueSetState: function() {
  } }, Ep = Object.assign, Cp = {};
  function Gr(e, t, n) {
    this.props = e, this.context = t, this.refs = Cp, this.updater = n || Tp;
  }
  Gr.prototype.isReactComponent = {};
  Gr.prototype.setState = function(e, t) {
    if (typeof e != "object" && typeof e != "function" && e != null)
      throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
    this.updater.enqueueSetState(this, e, t, "setState");
  };
  Gr.prototype.forceUpdate = function(e) {
    this.updater.enqueueForceUpdate(this, e, "forceUpdate");
  };
  function Pp() {
  }
  Pp.prototype = Gr.prototype;
  function Ru(e, t, n) {
    this.props = e, this.context = t, this.refs = Cp, this.updater = n || Tp;
  }
  var ju = Ru.prototype = new Pp();
  ju.constructor = Ru;
  Ep(ju, Gr.prototype);
  ju.isPureReactComponent = !0;
  var wf = Array.isArray, kp = Object.prototype.hasOwnProperty, Lu = { current: null }, _p = { key: !0, ref: !0, __self: !0, __source: !0 };
  function Ap(e, t, n) {
    var r, i = {}, o = null, s = null;
    if (t != null)
      for (r in t.ref !== void 0 && (s = t.ref), t.key !== void 0 && (o = "" + t.key), t)
        kp.call(t, r) && !_p.hasOwnProperty(r) && (i[r] = t[r]);
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
    return { $$typeof: qi, type: e, key: o, ref: s, props: i, _owner: Lu.current };
  }
  function p0(e, t) {
    return { $$typeof: qi, type: e.type, key: t, ref: e.ref, props: e.props, _owner: e._owner };
  }
  function Vu(e) {
    return typeof e == "object" && e !== null && e.$$typeof === qi;
  }
  function m0(e) {
    var t = { "=": "=0", ":": "=2" };
    return "$" + e.replace(/[=:]/g, function(n) {
      return t[n];
    });
  }
  var Tf = /\/+/g;
  function Pa(e, t) {
    return typeof e == "object" && e !== null && e.key != null ? m0("" + e.key) : t.toString(36);
  }
  function Vo(e, t, n, r, i) {
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
            case qi:
            case r0:
              s = !0;
          }
      }
    if (s)
      return s = e, i = i(s), e = r === "" ? "." + Pa(s, 0) : r, wf(i) ? (n = "", e != null && (n = e.replace(Tf, "$&/") + "/"), Vo(i, t, n, "", function(u) {
        return u;
      })) : i != null && (Vu(i) && (i = p0(i, n + (!i.key || s && s.key === i.key ? "" : ("" + i.key).replace(Tf, "$&/") + "/") + e)), t.push(i)), 1;
    if (s = 0, r = r === "" ? "." : r + ":", wf(e))
      for (var a = 0; a < e.length; a++) {
        o = e[a];
        var l = r + Pa(o, a);
        s += Vo(o, t, n, l, i);
      }
    else if (l = h0(e), typeof l == "function")
      for (e = l.call(e), a = 0; !(o = e.next()).done; )
        o = o.value, l = r + Pa(o, a++), s += Vo(o, t, n, l, i);
    else if (o === "object")
      throw t = String(e), Error("Objects are not valid as a React child (found: " + (t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t) + "). If you meant to render a collection of children, use an array instead.");
    return s;
  }
  function ho(e, t, n) {
    if (e == null)
      return e;
    var r = [], i = 0;
    return Vo(e, r, "", "", function(o) {
      return t.call(n, o, i++);
    }), r;
  }
  function y0(e) {
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
  var Ne = { current: null }, $o = { transition: null }, g0 = { ReactCurrentDispatcher: Ne, ReactCurrentBatchConfig: $o, ReactCurrentOwner: Lu };
  z.Children = { map: ho, forEach: function(e, t, n) {
    ho(e, function() {
      t.apply(this, arguments);
    }, n);
  }, count: function(e) {
    var t = 0;
    return ho(e, function() {
      t++;
    }), t;
  }, toArray: function(e) {
    return ho(e, function(t) {
      return t;
    }) || [];
  }, only: function(e) {
    if (!Vu(e))
      throw Error("React.Children.only expected to receive a single React element child.");
    return e;
  } };
  z.Component = Gr;
  z.Fragment = i0;
  z.Profiler = s0;
  z.PureComponent = Ru;
  z.StrictMode = o0;
  z.Suspense = c0;
  z.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = g0;
  z.cloneElement = function(e, t, n) {
    if (e == null)
      throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + e + ".");
    var r = Ep({}, e.props), i = e.key, o = e.ref, s = e._owner;
    if (t != null) {
      if (t.ref !== void 0 && (o = t.ref, s = Lu.current), t.key !== void 0 && (i = "" + t.key), e.type && e.type.defaultProps)
        var a = e.type.defaultProps;
      for (l in t)
        kp.call(t, l) && !_p.hasOwnProperty(l) && (r[l] = t[l] === void 0 && a !== void 0 ? a[l] : t[l]);
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
    return { $$typeof: qi, type: e.type, key: i, ref: o, props: r, _owner: s };
  };
  z.createContext = function(e) {
    return e = { $$typeof: l0, _currentValue: e, _currentValue2: e, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, e.Provider = { $$typeof: a0, _context: e }, e.Consumer = e;
  };
  z.createElement = Ap;
  z.createFactory = function(e) {
    var t = Ap.bind(null, e);
    return t.type = e, t;
  };
  z.createRef = function() {
    return { current: null };
  };
  z.forwardRef = function(e) {
    return { $$typeof: u0, render: e };
  };
  z.isValidElement = Vu;
  z.lazy = function(e) {
    return { $$typeof: d0, _payload: { _status: -1, _result: e }, _init: y0 };
  };
  z.memo = function(e, t) {
    return { $$typeof: f0, type: e, compare: t === void 0 ? null : t };
  };
  z.startTransition = function(e) {
    var t = $o.transition;
    $o.transition = {};
    try {
      e();
    } finally {
      $o.transition = t;
    }
  };
  z.unstable_act = function() {
    throw Error("act(...) is not supported in production builds of React.");
  };
  z.useCallback = function(e, t) {
    return Ne.current.useCallback(e, t);
  };
  z.useContext = function(e) {
    return Ne.current.useContext(e);
  };
  z.useDebugValue = function() {
  };
  z.useDeferredValue = function(e) {
    return Ne.current.useDeferredValue(e);
  };
  z.useEffect = function(e, t) {
    return Ne.current.useEffect(e, t);
  };
  z.useId = function() {
    return Ne.current.useId();
  };
  z.useImperativeHandle = function(e, t, n) {
    return Ne.current.useImperativeHandle(e, t, n);
  };
  z.useInsertionEffect = function(e, t) {
    return Ne.current.useInsertionEffect(e, t);
  };
  z.useLayoutEffect = function(e, t) {
    return Ne.current.useLayoutEffect(e, t);
  };
  z.useMemo = function(e, t) {
    return Ne.current.useMemo(e, t);
  };
  z.useReducer = function(e, t, n) {
    return Ne.current.useReducer(e, t, n);
  };
  z.useRef = function(e) {
    return Ne.current.useRef(e);
  };
  z.useState = function(e) {
    return Ne.current.useState(e);
  };
  z.useSyncExternalStore = function(e, t, n) {
    return Ne.current.useSyncExternalStore(e, t, n);
  };
  z.useTransition = function() {
    return Ne.current.useTransition();
  };
  z.version = "18.2.0";
  wp.exports = z;
  var x = wp.exports;
  const Fp = /* @__PURE__ */ Rs(x);
  /**
   * @license React
   * react-jsx-runtime.production.min.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */
  var v0 = x, S0 = Symbol.for("react.element"), x0 = Symbol.for("react.fragment"), w0 = Object.prototype.hasOwnProperty, T0 = v0.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, E0 = { key: !0, ref: !0, __self: !0, __source: !0 };
  function Op(e, t, n) {
    var r, i = {}, o = null, s = null;
    n !== void 0 && (o = "" + n), t.key !== void 0 && (o = "" + t.key), t.ref !== void 0 && (s = t.ref);
    for (r in t)
      w0.call(t, r) && !E0.hasOwnProperty(r) && (i[r] = t[r]);
    if (e && e.defaultProps)
      for (r in t = e.defaultProps, t)
        i[r] === void 0 && (i[r] = t[r]);
    return { $$typeof: S0, type: e, key: o, ref: s, props: i, _owner: T0.current };
  }
  js.Fragment = x0;
  js.jsx = Op;
  js.jsxs = Op;
  xp.exports = js;
  var I = xp.exports, gl = {}, Dp = { exports: {} }, nt = {}, Mp = { exports: {} }, Rp = {};
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
    function t(E, F) {
      var D = E.length;
      E.push(F);
      e:
        for (; 0 < D; ) {
          var j = D - 1 >>> 1, B = E[j];
          if (0 < i(B, F))
            E[j] = F, E[D] = B, D = j;
          else
            break e;
        }
    }
    function n(E) {
      return E.length === 0 ? null : E[0];
    }
    function r(E) {
      if (E.length === 0)
        return null;
      var F = E[0], D = E.pop();
      if (D !== F) {
        E[0] = D;
        e:
          for (var j = 0, B = E.length, Re = B >>> 1; j < Re; ) {
            var je = 2 * (j + 1) - 1, Ke = E[je], Ae = je + 1, ht = E[Ae];
            if (0 > i(Ke, D))
              Ae < B && 0 > i(ht, Ke) ? (E[j] = ht, E[Ae] = D, j = Ae) : (E[j] = Ke, E[je] = D, j = je);
            else if (Ae < B && 0 > i(ht, D))
              E[j] = ht, E[Ae] = D, j = Ae;
            else
              break e;
          }
      }
      return F;
    }
    function i(E, F) {
      var D = E.sortIndex - F.sortIndex;
      return D !== 0 ? D : E.id - F.id;
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
    var l = [], u = [], c = 1, f = null, d = 3, p = !1, g = !1, v = !1, k = typeof setTimeout == "function" ? setTimeout : null, y = typeof clearTimeout == "function" ? clearTimeout : null, h = typeof setImmediate < "u" ? setImmediate : null;
    typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
    function m(E) {
      for (var F = n(u); F !== null; ) {
        if (F.callback === null)
          r(u);
        else if (F.startTime <= E)
          r(u), F.sortIndex = F.expirationTime, t(l, F);
        else
          break;
        F = n(u);
      }
    }
    function S(E) {
      if (v = !1, m(E), !g)
        if (n(l) !== null)
          g = !0, Ee(C);
        else {
          var F = n(u);
          F !== null && be(S, F.startTime - E);
        }
    }
    function C(E, F) {
      g = !1, v && (v = !1, y(_), _ = -1), p = !0;
      var D = d;
      try {
        for (m(F), f = n(l); f !== null && (!(f.expirationTime > F) || E && !U()); ) {
          var j = f.callback;
          if (typeof j == "function") {
            f.callback = null, d = f.priorityLevel;
            var B = j(f.expirationTime <= F);
            F = e.unstable_now(), typeof B == "function" ? f.callback = B : f === n(l) && r(l), m(F);
          } else
            r(l);
          f = n(l);
        }
        if (f !== null)
          var Re = !0;
        else {
          var je = n(u);
          je !== null && be(S, je.startTime - F), Re = !1;
        }
        return Re;
      } finally {
        f = null, d = D, p = !1;
      }
    }
    var P = !1, T = null, _ = -1, L = 5, O = -1;
    function U() {
      return !(e.unstable_now() - O < L);
    }
    function de() {
      if (T !== null) {
        var E = e.unstable_now();
        O = E;
        var F = !0;
        try {
          F = T(!0, E);
        } finally {
          F ? W() : (P = !1, T = null);
        }
      } else
        P = !1;
    }
    var W;
    if (typeof h == "function")
      W = function() {
        h(de);
      };
    else if (typeof MessageChannel < "u") {
      var G = new MessageChannel(), Z = G.port2;
      G.port1.onmessage = de, W = function() {
        Z.postMessage(null);
      };
    } else
      W = function() {
        k(de, 0);
      };
    function Ee(E) {
      T = E, P || (P = !0, W());
    }
    function be(E, F) {
      _ = k(function() {
        E(e.unstable_now());
      }, F);
    }
    e.unstable_IdlePriority = 5, e.unstable_ImmediatePriority = 1, e.unstable_LowPriority = 4, e.unstable_NormalPriority = 3, e.unstable_Profiling = null, e.unstable_UserBlockingPriority = 2, e.unstable_cancelCallback = function(E) {
      E.callback = null;
    }, e.unstable_continueExecution = function() {
      g || p || (g = !0, Ee(C));
    }, e.unstable_forceFrameRate = function(E) {
      0 > E || 125 < E ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : L = 0 < E ? Math.floor(1e3 / E) : 5;
    }, e.unstable_getCurrentPriorityLevel = function() {
      return d;
    }, e.unstable_getFirstCallbackNode = function() {
      return n(l);
    }, e.unstable_next = function(E) {
      switch (d) {
        case 1:
        case 2:
        case 3:
          var F = 3;
          break;
        default:
          F = d;
      }
      var D = d;
      d = F;
      try {
        return E();
      } finally {
        d = D;
      }
    }, e.unstable_pauseExecution = function() {
    }, e.unstable_requestPaint = function() {
    }, e.unstable_runWithPriority = function(E, F) {
      switch (E) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          E = 3;
      }
      var D = d;
      d = E;
      try {
        return F();
      } finally {
        d = D;
      }
    }, e.unstable_scheduleCallback = function(E, F, D) {
      var j = e.unstable_now();
      switch (typeof D == "object" && D !== null ? (D = D.delay, D = typeof D == "number" && 0 < D ? j + D : j) : D = j, E) {
        case 1:
          var B = -1;
          break;
        case 2:
          B = 250;
          break;
        case 5:
          B = 1073741823;
          break;
        case 4:
          B = 1e4;
          break;
        default:
          B = 5e3;
      }
      return B = D + B, E = { id: c++, callback: F, priorityLevel: E, startTime: D, expirationTime: B, sortIndex: -1 }, D > j ? (E.sortIndex = D, t(u, E), n(l) === null && E === n(u) && (v ? (y(_), _ = -1) : v = !0, be(S, D - j))) : (E.sortIndex = B, t(l, E), g || p || (g = !0, Ee(C))), E;
    }, e.unstable_shouldYield = U, e.unstable_wrapCallback = function(E) {
      var F = d;
      return function() {
        var D = d;
        d = F;
        try {
          return E.apply(this, arguments);
        } finally {
          d = D;
        }
      };
    };
  })(Rp);
  Mp.exports = Rp;
  var C0 = Mp.exports;
  /**
   * @license React
   * react-dom.production.min.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */
  var jp = x, et = C0;
  function A(e) {
    for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++)
      t += "&args[]=" + encodeURIComponent(arguments[n]);
    return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  var Lp = /* @__PURE__ */ new Set(), Fi = {};
  function qn(e, t) {
    Vr(e, t), Vr(e + "Capture", t);
  }
  function Vr(e, t) {
    for (Fi[e] = t, e = 0; e < t.length; e++)
      Lp.add(t[e]);
  }
  var Ht = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), vl = Object.prototype.hasOwnProperty, P0 = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, Ef = {}, Cf = {};
  function k0(e) {
    return vl.call(Cf, e) ? !0 : vl.call(Ef, e) ? !1 : P0.test(e) ? Cf[e] = !0 : (Ef[e] = !0, !1);
  }
  function _0(e, t, n, r) {
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
  function A0(e, t, n, r) {
    if (t === null || typeof t > "u" || _0(e, t, n, r))
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
  var _e = {};
  "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e) {
    _e[e] = new Ie(e, 0, !1, e, null, !1, !1);
  });
  [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(e) {
    var t = e[0];
    _e[t] = new Ie(t, 1, !1, e[1], null, !1, !1);
  });
  ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
    _e[e] = new Ie(e, 2, !1, e.toLowerCase(), null, !1, !1);
  });
  ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) {
    _e[e] = new Ie(e, 2, !1, e, null, !1, !1);
  });
  "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e) {
    _e[e] = new Ie(e, 3, !1, e.toLowerCase(), null, !1, !1);
  });
  ["checked", "multiple", "muted", "selected"].forEach(function(e) {
    _e[e] = new Ie(e, 3, !0, e, null, !1, !1);
  });
  ["capture", "download"].forEach(function(e) {
    _e[e] = new Ie(e, 4, !1, e, null, !1, !1);
  });
  ["cols", "rows", "size", "span"].forEach(function(e) {
    _e[e] = new Ie(e, 6, !1, e, null, !1, !1);
  });
  ["rowSpan", "start"].forEach(function(e) {
    _e[e] = new Ie(e, 5, !1, e.toLowerCase(), null, !1, !1);
  });
  var $u = /[\-:]([a-z])/g;
  function Nu(e) {
    return e[1].toUpperCase();
  }
  "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e) {
    var t = e.replace(
      $u,
      Nu
    );
    _e[t] = new Ie(t, 1, !1, e, null, !1, !1);
  });
  "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e) {
    var t = e.replace($u, Nu);
    _e[t] = new Ie(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
  });
  ["xml:base", "xml:lang", "xml:space"].forEach(function(e) {
    var t = e.replace($u, Nu);
    _e[t] = new Ie(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
  });
  ["tabIndex", "crossOrigin"].forEach(function(e) {
    _e[e] = new Ie(e, 1, !1, e.toLowerCase(), null, !1, !1);
  });
  _e.xlinkHref = new Ie("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1);
  ["src", "href", "action", "formAction"].forEach(function(e) {
    _e[e] = new Ie(e, 1, !1, e.toLowerCase(), null, !0, !0);
  });
  function Iu(e, t, n, r) {
    var i = _e.hasOwnProperty(t) ? _e[t] : null;
    (i !== null ? i.type !== 0 : r || !(2 < t.length) || t[0] !== "o" && t[0] !== "O" || t[1] !== "n" && t[1] !== "N") && (A0(t, n, i, r) && (n = null), r || i === null ? k0(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n)) : i.mustUseProperty ? e[i.propertyName] = n === null ? i.type === 3 ? !1 : "" : n : (t = i.attributeName, r = i.attributeNamespace, n === null ? e.removeAttribute(t) : (i = i.type, n = i === 3 || i === 4 && n === !0 ? "" : "" + n, r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
  }
  var Yt = jp.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, po = Symbol.for("react.element"), dr = Symbol.for("react.portal"), hr = Symbol.for("react.fragment"), bu = Symbol.for("react.strict_mode"), Sl = Symbol.for("react.profiler"), Vp = Symbol.for("react.provider"), $p = Symbol.for("react.context"), zu = Symbol.for("react.forward_ref"), xl = Symbol.for("react.suspense"), wl = Symbol.for("react.suspense_list"), Bu = Symbol.for("react.memo"), en = Symbol.for("react.lazy"), Np = Symbol.for("react.offscreen"), Pf = Symbol.iterator;
  function Zr(e) {
    return e === null || typeof e != "object" ? null : (e = Pf && e[Pf] || e["@@iterator"], typeof e == "function" ? e : null);
  }
  var ue = Object.assign, ka;
  function li(e) {
    if (ka === void 0)
      try {
        throw Error();
      } catch (n) {
        var t = n.stack.trim().match(/\n( *(at )?)/);
        ka = t && t[1] || "";
      }
    return `
` + ka + e;
  }
  var _a = !1;
  function Aa(e, t) {
    if (!e || _a)
      return "";
    _a = !0;
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
      _a = !1, Error.prepareStackTrace = n;
    }
    return (e = e ? e.displayName || e.name : "") ? li(e) : "";
  }
  function F0(e) {
    switch (e.tag) {
      case 5:
        return li(e.type);
      case 16:
        return li("Lazy");
      case 13:
        return li("Suspense");
      case 19:
        return li("SuspenseList");
      case 0:
      case 2:
      case 15:
        return e = Aa(e.type, !1), e;
      case 11:
        return e = Aa(e.type.render, !1), e;
      case 1:
        return e = Aa(e.type, !0), e;
      default:
        return "";
    }
  }
  function Tl(e) {
    if (e == null)
      return null;
    if (typeof e == "function")
      return e.displayName || e.name || null;
    if (typeof e == "string")
      return e;
    switch (e) {
      case hr:
        return "Fragment";
      case dr:
        return "Portal";
      case Sl:
        return "Profiler";
      case bu:
        return "StrictMode";
      case xl:
        return "Suspense";
      case wl:
        return "SuspenseList";
    }
    if (typeof e == "object")
      switch (e.$$typeof) {
        case $p:
          return (e.displayName || "Context") + ".Consumer";
        case Vp:
          return (e._context.displayName || "Context") + ".Provider";
        case zu:
          var t = e.render;
          return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
        case Bu:
          return t = e.displayName || null, t !== null ? t : Tl(e.type) || "Memo";
        case en:
          t = e._payload, e = e._init;
          try {
            return Tl(e(t));
          } catch {
          }
      }
    return null;
  }
  function O0(e) {
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
        return Tl(t);
      case 8:
        return t === bu ? "StrictMode" : "Mode";
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
  function xn(e) {
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
  function Ip(e) {
    var t = e.type;
    return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
  }
  function D0(e) {
    var t = Ip(e) ? "checked" : "value", n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t), r = "" + e[t];
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
  function mo(e) {
    e._valueTracker || (e._valueTracker = D0(e));
  }
  function bp(e) {
    if (!e)
      return !1;
    var t = e._valueTracker;
    if (!t)
      return !0;
    var n = t.getValue(), r = "";
    return e && (r = Ip(e) ? e.checked ? "true" : "false" : e.value), e = r, e !== n ? (t.setValue(e), !0) : !1;
  }
  function Zo(e) {
    if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u")
      return null;
    try {
      return e.activeElement || e.body;
    } catch {
      return e.body;
    }
  }
  function El(e, t) {
    var n = t.checked;
    return ue({}, t, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: n ?? e._wrapperState.initialChecked });
  }
  function kf(e, t) {
    var n = t.defaultValue == null ? "" : t.defaultValue, r = t.checked != null ? t.checked : t.defaultChecked;
    n = xn(t.value != null ? t.value : n), e._wrapperState = { initialChecked: r, initialValue: n, controlled: t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null };
  }
  function zp(e, t) {
    t = t.checked, t != null && Iu(e, "checked", t, !1);
  }
  function Cl(e, t) {
    zp(e, t);
    var n = xn(t.value), r = t.type;
    if (n != null)
      r === "number" ? (n === 0 && e.value === "" || e.value != n) && (e.value = "" + n) : e.value !== "" + n && (e.value = "" + n);
    else if (r === "submit" || r === "reset") {
      e.removeAttribute("value");
      return;
    }
    t.hasOwnProperty("value") ? Pl(e, t.type, n) : t.hasOwnProperty("defaultValue") && Pl(e, t.type, xn(t.defaultValue)), t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked);
  }
  function _f(e, t, n) {
    if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
      var r = t.type;
      if (!(r !== "submit" && r !== "reset" || t.value !== void 0 && t.value !== null))
        return;
      t = "" + e._wrapperState.initialValue, n || t === e.value || (e.value = t), e.defaultValue = t;
    }
    n = e.name, n !== "" && (e.name = ""), e.defaultChecked = !!e._wrapperState.initialChecked, n !== "" && (e.name = n);
  }
  function Pl(e, t, n) {
    (t !== "number" || Zo(e.ownerDocument) !== e) && (n == null ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
  }
  var ui = Array.isArray;
  function Fr(e, t, n, r) {
    if (e = e.options, t) {
      t = {};
      for (var i = 0; i < n.length; i++)
        t["$" + n[i]] = !0;
      for (n = 0; n < e.length; n++)
        i = t.hasOwnProperty("$" + e[n].value), e[n].selected !== i && (e[n].selected = i), i && r && (e[n].defaultSelected = !0);
    } else {
      for (n = "" + xn(n), t = null, i = 0; i < e.length; i++) {
        if (e[i].value === n) {
          e[i].selected = !0, r && (e[i].defaultSelected = !0);
          return;
        }
        t !== null || e[i].disabled || (t = e[i]);
      }
      t !== null && (t.selected = !0);
    }
  }
  function kl(e, t) {
    if (t.dangerouslySetInnerHTML != null)
      throw Error(A(91));
    return ue({}, t, { value: void 0, defaultValue: void 0, children: "" + e._wrapperState.initialValue });
  }
  function Af(e, t) {
    var n = t.value;
    if (n == null) {
      if (n = t.children, t = t.defaultValue, n != null) {
        if (t != null)
          throw Error(A(92));
        if (ui(n)) {
          if (1 < n.length)
            throw Error(A(93));
          n = n[0];
        }
        t = n;
      }
      t == null && (t = ""), n = t;
    }
    e._wrapperState = { initialValue: xn(n) };
  }
  function Bp(e, t) {
    var n = xn(t.value), r = xn(t.defaultValue);
    n != null && (n = "" + n, n !== e.value && (e.value = n), t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)), r != null && (e.defaultValue = "" + r);
  }
  function Ff(e) {
    var t = e.textContent;
    t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
  }
  function Up(e) {
    switch (e) {
      case "svg":
        return "http://www.w3.org/2000/svg";
      case "math":
        return "http://www.w3.org/1998/Math/MathML";
      default:
        return "http://www.w3.org/1999/xhtml";
    }
  }
  function _l(e, t) {
    return e == null || e === "http://www.w3.org/1999/xhtml" ? Up(t) : e === "http://www.w3.org/2000/svg" && t === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e;
  }
  var yo, Hp = function(e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, n, r, i) {
      MSApp.execUnsafeLocalFunction(function() {
        return e(t, n, r, i);
      });
    } : e;
  }(function(e, t) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e)
      e.innerHTML = t;
    else {
      for (yo = yo || document.createElement("div"), yo.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>", t = yo.firstChild; e.firstChild; )
        e.removeChild(e.firstChild);
      for (; t.firstChild; )
        e.appendChild(t.firstChild);
    }
  });
  function Oi(e, t) {
    if (t) {
      var n = e.firstChild;
      if (n && n === e.lastChild && n.nodeType === 3) {
        n.nodeValue = t;
        return;
      }
    }
    e.textContent = t;
  }
  var hi = {
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
  }, M0 = ["Webkit", "ms", "Moz", "O"];
  Object.keys(hi).forEach(function(e) {
    M0.forEach(function(t) {
      t = t + e.charAt(0).toUpperCase() + e.substring(1), hi[t] = hi[e];
    });
  });
  function Wp(e, t, n) {
    return t == null || typeof t == "boolean" || t === "" ? "" : n || typeof t != "number" || t === 0 || hi.hasOwnProperty(e) && hi[e] ? ("" + t).trim() : t + "px";
  }
  function Gp(e, t) {
    e = e.style;
    for (var n in t)
      if (t.hasOwnProperty(n)) {
        var r = n.indexOf("--") === 0, i = Wp(n, t[n], r);
        n === "float" && (n = "cssFloat"), r ? e.setProperty(n, i) : e[n] = i;
      }
  }
  var R0 = ue({ menuitem: !0 }, { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 });
  function Al(e, t) {
    if (t) {
      if (R0[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
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
  function Fl(e, t) {
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
  var Ol = null;
  function Uu(e) {
    return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
  }
  var Dl = null, Or = null, Dr = null;
  function Of(e) {
    if (e = to(e)) {
      if (typeof Dl != "function")
        throw Error(A(280));
      var t = e.stateNode;
      t && (t = Is(t), Dl(e.stateNode, e.type, t));
    }
  }
  function Kp(e) {
    Or ? Dr ? Dr.push(e) : Dr = [e] : Or = e;
  }
  function Qp() {
    if (Or) {
      var e = Or, t = Dr;
      if (Dr = Or = null, Of(e), t)
        for (e = 0; e < t.length; e++)
          Of(t[e]);
    }
  }
  function Yp(e, t) {
    return e(t);
  }
  function Xp() {
  }
  var Fa = !1;
  function Zp(e, t, n) {
    if (Fa)
      return e(t, n);
    Fa = !0;
    try {
      return Yp(e, t, n);
    } finally {
      Fa = !1, (Or !== null || Dr !== null) && (Xp(), Qp());
    }
  }
  function Di(e, t) {
    var n = e.stateNode;
    if (n === null)
      return null;
    var r = Is(n);
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
  var Ml = !1;
  if (Ht)
    try {
      var qr = {};
      Object.defineProperty(qr, "passive", { get: function() {
        Ml = !0;
      } }), window.addEventListener("test", qr, qr), window.removeEventListener("test", qr, qr);
    } catch {
      Ml = !1;
    }
  function j0(e, t, n, r, i, o, s, a, l) {
    var u = Array.prototype.slice.call(arguments, 3);
    try {
      t.apply(n, u);
    } catch (c) {
      this.onError(c);
    }
  }
  var pi = !1, qo = null, Jo = !1, Rl = null, L0 = { onError: function(e) {
    pi = !0, qo = e;
  } };
  function V0(e, t, n, r, i, o, s, a, l) {
    pi = !1, qo = null, j0.apply(L0, arguments);
  }
  function $0(e, t, n, r, i, o, s, a, l) {
    if (V0.apply(this, arguments), pi) {
      if (pi) {
        var u = qo;
        pi = !1, qo = null;
      } else
        throw Error(A(198));
      Jo || (Jo = !0, Rl = u);
    }
  }
  function Jn(e) {
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
  function qp(e) {
    if (e.tag === 13) {
      var t = e.memoizedState;
      if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null)
        return t.dehydrated;
    }
    return null;
  }
  function Df(e) {
    if (Jn(e) !== e)
      throw Error(A(188));
  }
  function N0(e) {
    var t = e.alternate;
    if (!t) {
      if (t = Jn(e), t === null)
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
            return Df(i), e;
          if (o === r)
            return Df(i), t;
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
  function Jp(e) {
    return e = N0(e), e !== null ? em(e) : null;
  }
  function em(e) {
    if (e.tag === 5 || e.tag === 6)
      return e;
    for (e = e.child; e !== null; ) {
      var t = em(e);
      if (t !== null)
        return t;
      e = e.sibling;
    }
    return null;
  }
  var tm = et.unstable_scheduleCallback, Mf = et.unstable_cancelCallback, I0 = et.unstable_shouldYield, b0 = et.unstable_requestPaint, he = et.unstable_now, z0 = et.unstable_getCurrentPriorityLevel, Hu = et.unstable_ImmediatePriority, nm = et.unstable_UserBlockingPriority, es = et.unstable_NormalPriority, B0 = et.unstable_LowPriority, rm = et.unstable_IdlePriority, Ls = null, At = null;
  function U0(e) {
    if (At && typeof At.onCommitFiberRoot == "function")
      try {
        At.onCommitFiberRoot(Ls, e, void 0, (e.current.flags & 128) === 128);
      } catch {
      }
  }
  var xt = Math.clz32 ? Math.clz32 : G0, H0 = Math.log, W0 = Math.LN2;
  function G0(e) {
    return e >>>= 0, e === 0 ? 32 : 31 - (H0(e) / W0 | 0) | 0;
  }
  var go = 64, vo = 4194304;
  function ci(e) {
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
  function ts(e, t) {
    var n = e.pendingLanes;
    if (n === 0)
      return 0;
    var r = 0, i = e.suspendedLanes, o = e.pingedLanes, s = n & 268435455;
    if (s !== 0) {
      var a = s & ~i;
      a !== 0 ? r = ci(a) : (o &= s, o !== 0 && (r = ci(o)));
    } else
      s = n & ~i, s !== 0 ? r = ci(s) : o !== 0 && (r = ci(o));
    if (r === 0)
      return 0;
    if (t !== 0 && t !== r && !(t & i) && (i = r & -r, o = t & -t, i >= o || i === 16 && (o & 4194240) !== 0))
      return t;
    if (r & 4 && (r |= n & 16), t = e.entangledLanes, t !== 0)
      for (e = e.entanglements, t &= r; 0 < t; )
        n = 31 - xt(t), i = 1 << n, r |= e[n], t &= ~i;
    return r;
  }
  function K0(e, t) {
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
  function Q0(e, t) {
    for (var n = e.suspendedLanes, r = e.pingedLanes, i = e.expirationTimes, o = e.pendingLanes; 0 < o; ) {
      var s = 31 - xt(o), a = 1 << s, l = i[s];
      l === -1 ? (!(a & n) || a & r) && (i[s] = K0(a, t)) : l <= t && (e.expiredLanes |= a), o &= ~a;
    }
  }
  function jl(e) {
    return e = e.pendingLanes & -1073741825, e !== 0 ? e : e & 1073741824 ? 1073741824 : 0;
  }
  function im() {
    var e = go;
    return go <<= 1, !(go & 4194240) && (go = 64), e;
  }
  function Oa(e) {
    for (var t = [], n = 0; 31 > n; n++)
      t.push(e);
    return t;
  }
  function Ji(e, t, n) {
    e.pendingLanes |= t, t !== 536870912 && (e.suspendedLanes = 0, e.pingedLanes = 0), e = e.eventTimes, t = 31 - xt(t), e[t] = n;
  }
  function Y0(e, t) {
    var n = e.pendingLanes & ~t;
    e.pendingLanes = t, e.suspendedLanes = 0, e.pingedLanes = 0, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t, t = e.entanglements;
    var r = e.eventTimes;
    for (e = e.expirationTimes; 0 < n; ) {
      var i = 31 - xt(n), o = 1 << i;
      t[i] = 0, r[i] = -1, e[i] = -1, n &= ~o;
    }
  }
  function Wu(e, t) {
    var n = e.entangledLanes |= t;
    for (e = e.entanglements; n; ) {
      var r = 31 - xt(n), i = 1 << r;
      i & t | e[r] & t && (e[r] |= t), n &= ~i;
    }
  }
  var Y = 0;
  function om(e) {
    return e &= -e, 1 < e ? 4 < e ? e & 268435455 ? 16 : 536870912 : 4 : 1;
  }
  var sm, Gu, am, lm, um, Ll = !1, So = [], cn = null, fn = null, dn = null, Mi = /* @__PURE__ */ new Map(), Ri = /* @__PURE__ */ new Map(), on = [], X0 = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
  function Rf(e, t) {
    switch (e) {
      case "focusin":
      case "focusout":
        cn = null;
        break;
      case "dragenter":
      case "dragleave":
        fn = null;
        break;
      case "mouseover":
      case "mouseout":
        dn = null;
        break;
      case "pointerover":
      case "pointerout":
        Mi.delete(t.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        Ri.delete(t.pointerId);
    }
  }
  function Jr(e, t, n, r, i, o) {
    return e === null || e.nativeEvent !== o ? (e = { blockedOn: t, domEventName: n, eventSystemFlags: r, nativeEvent: o, targetContainers: [i] }, t !== null && (t = to(t), t !== null && Gu(t)), e) : (e.eventSystemFlags |= r, t = e.targetContainers, i !== null && t.indexOf(i) === -1 && t.push(i), e);
  }
  function Z0(e, t, n, r, i) {
    switch (t) {
      case "focusin":
        return cn = Jr(cn, e, t, n, r, i), !0;
      case "dragenter":
        return fn = Jr(fn, e, t, n, r, i), !0;
      case "mouseover":
        return dn = Jr(dn, e, t, n, r, i), !0;
      case "pointerover":
        var o = i.pointerId;
        return Mi.set(o, Jr(Mi.get(o) || null, e, t, n, r, i)), !0;
      case "gotpointercapture":
        return o = i.pointerId, Ri.set(o, Jr(Ri.get(o) || null, e, t, n, r, i)), !0;
    }
    return !1;
  }
  function cm(e) {
    var t = Nn(e.target);
    if (t !== null) {
      var n = Jn(t);
      if (n !== null) {
        if (t = n.tag, t === 13) {
          if (t = qp(n), t !== null) {
            e.blockedOn = t, um(e.priority, function() {
              am(n);
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
  function No(e) {
    if (e.blockedOn !== null)
      return !1;
    for (var t = e.targetContainers; 0 < t.length; ) {
      var n = Vl(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
      if (n === null) {
        n = e.nativeEvent;
        var r = new n.constructor(n.type, n);
        Ol = r, n.target.dispatchEvent(r), Ol = null;
      } else
        return t = to(n), t !== null && Gu(t), e.blockedOn = n, !1;
      t.shift();
    }
    return !0;
  }
  function jf(e, t, n) {
    No(e) && n.delete(t);
  }
  function q0() {
    Ll = !1, cn !== null && No(cn) && (cn = null), fn !== null && No(fn) && (fn = null), dn !== null && No(dn) && (dn = null), Mi.forEach(jf), Ri.forEach(jf);
  }
  function ei(e, t) {
    e.blockedOn === t && (e.blockedOn = null, Ll || (Ll = !0, et.unstable_scheduleCallback(et.unstable_NormalPriority, q0)));
  }
  function ji(e) {
    function t(i) {
      return ei(i, e);
    }
    if (0 < So.length) {
      ei(So[0], e);
      for (var n = 1; n < So.length; n++) {
        var r = So[n];
        r.blockedOn === e && (r.blockedOn = null);
      }
    }
    for (cn !== null && ei(cn, e), fn !== null && ei(fn, e), dn !== null && ei(dn, e), Mi.forEach(t), Ri.forEach(t), n = 0; n < on.length; n++)
      r = on[n], r.blockedOn === e && (r.blockedOn = null);
    for (; 0 < on.length && (n = on[0], n.blockedOn === null); )
      cm(n), n.blockedOn === null && on.shift();
  }
  var Mr = Yt.ReactCurrentBatchConfig, ns = !0;
  function J0(e, t, n, r) {
    var i = Y, o = Mr.transition;
    Mr.transition = null;
    try {
      Y = 1, Ku(e, t, n, r);
    } finally {
      Y = i, Mr.transition = o;
    }
  }
  function e1(e, t, n, r) {
    var i = Y, o = Mr.transition;
    Mr.transition = null;
    try {
      Y = 4, Ku(e, t, n, r);
    } finally {
      Y = i, Mr.transition = o;
    }
  }
  function Ku(e, t, n, r) {
    if (ns) {
      var i = Vl(e, t, n, r);
      if (i === null)
        ba(e, t, r, rs, n), Rf(e, r);
      else if (Z0(i, e, t, n, r))
        r.stopPropagation();
      else if (Rf(e, r), t & 4 && -1 < X0.indexOf(e)) {
        for (; i !== null; ) {
          var o = to(i);
          if (o !== null && sm(o), o = Vl(e, t, n, r), o === null && ba(e, t, r, rs, n), o === i)
            break;
          i = o;
        }
        i !== null && r.stopPropagation();
      } else
        ba(e, t, r, null, n);
    }
  }
  var rs = null;
  function Vl(e, t, n, r) {
    if (rs = null, e = Uu(r), e = Nn(e), e !== null)
      if (t = Jn(e), t === null)
        e = null;
      else if (n = t.tag, n === 13) {
        if (e = qp(t), e !== null)
          return e;
        e = null;
      } else if (n === 3) {
        if (t.stateNode.current.memoizedState.isDehydrated)
          return t.tag === 3 ? t.stateNode.containerInfo : null;
        e = null;
      } else
        t !== e && (e = null);
    return rs = e, null;
  }
  function fm(e) {
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
        switch (z0()) {
          case Hu:
            return 1;
          case nm:
            return 4;
          case es:
          case B0:
            return 16;
          case rm:
            return 536870912;
          default:
            return 16;
        }
      default:
        return 16;
    }
  }
  var an = null, Qu = null, Io = null;
  function dm() {
    if (Io)
      return Io;
    var e, t = Qu, n = t.length, r, i = "value" in an ? an.value : an.textContent, o = i.length;
    for (e = 0; e < n && t[e] === i[e]; e++)
      ;
    var s = n - e;
    for (r = 1; r <= s && t[n - r] === i[o - r]; r++)
      ;
    return Io = i.slice(e, 1 < r ? 1 - r : void 0);
  }
  function bo(e) {
    var t = e.keyCode;
    return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0;
  }
  function xo() {
    return !0;
  }
  function Lf() {
    return !1;
  }
  function rt(e) {
    function t(n, r, i, o, s) {
      this._reactName = n, this._targetInst = i, this.type = r, this.nativeEvent = o, this.target = s, this.currentTarget = null;
      for (var a in e)
        e.hasOwnProperty(a) && (n = e[a], this[a] = n ? n(o) : o[a]);
      return this.isDefaultPrevented = (o.defaultPrevented != null ? o.defaultPrevented : o.returnValue === !1) ? xo : Lf, this.isPropagationStopped = Lf, this;
    }
    return ue(t.prototype, { preventDefault: function() {
      this.defaultPrevented = !0;
      var n = this.nativeEvent;
      n && (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = !1), this.isDefaultPrevented = xo);
    }, stopPropagation: function() {
      var n = this.nativeEvent;
      n && (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0), this.isPropagationStopped = xo);
    }, persist: function() {
    }, isPersistent: xo }), t;
  }
  var Kr = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(e) {
    return e.timeStamp || Date.now();
  }, defaultPrevented: 0, isTrusted: 0 }, Yu = rt(Kr), eo = ue({}, Kr, { view: 0, detail: 0 }), t1 = rt(eo), Da, Ma, ti, Vs = ue({}, eo, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: Xu, button: 0, buttons: 0, relatedTarget: function(e) {
    return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
  }, movementX: function(e) {
    return "movementX" in e ? e.movementX : (e !== ti && (ti && e.type === "mousemove" ? (Da = e.screenX - ti.screenX, Ma = e.screenY - ti.screenY) : Ma = Da = 0, ti = e), Da);
  }, movementY: function(e) {
    return "movementY" in e ? e.movementY : Ma;
  } }), Vf = rt(Vs), n1 = ue({}, Vs, { dataTransfer: 0 }), r1 = rt(n1), i1 = ue({}, eo, { relatedTarget: 0 }), Ra = rt(i1), o1 = ue({}, Kr, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), s1 = rt(o1), a1 = ue({}, Kr, { clipboardData: function(e) {
    return "clipboardData" in e ? e.clipboardData : window.clipboardData;
  } }), l1 = rt(a1), u1 = ue({}, Kr, { data: 0 }), $f = rt(u1), c1 = {
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
  }, f1 = {
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
  }, d1 = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
  function h1(e) {
    var t = this.nativeEvent;
    return t.getModifierState ? t.getModifierState(e) : (e = d1[e]) ? !!t[e] : !1;
  }
  function Xu() {
    return h1;
  }
  var p1 = ue({}, eo, { key: function(e) {
    if (e.key) {
      var t = c1[e.key] || e.key;
      if (t !== "Unidentified")
        return t;
    }
    return e.type === "keypress" ? (e = bo(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? f1[e.keyCode] || "Unidentified" : "";
  }, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: Xu, charCode: function(e) {
    return e.type === "keypress" ? bo(e) : 0;
  }, keyCode: function(e) {
    return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
  }, which: function(e) {
    return e.type === "keypress" ? bo(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
  } }), m1 = rt(p1), y1 = ue({}, Vs, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), Nf = rt(y1), g1 = ue({}, eo, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: Xu }), v1 = rt(g1), S1 = ue({}, Kr, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), x1 = rt(S1), w1 = ue({}, Vs, {
    deltaX: function(e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function(e) {
      return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), T1 = rt(w1), E1 = [9, 13, 27, 32], Zu = Ht && "CompositionEvent" in window, mi = null;
  Ht && "documentMode" in document && (mi = document.documentMode);
  var C1 = Ht && "TextEvent" in window && !mi, hm = Ht && (!Zu || mi && 8 < mi && 11 >= mi), If = String.fromCharCode(32), bf = !1;
  function pm(e, t) {
    switch (e) {
      case "keyup":
        return E1.indexOf(t.keyCode) !== -1;
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
  function mm(e) {
    return e = e.detail, typeof e == "object" && "data" in e ? e.data : null;
  }
  var pr = !1;
  function P1(e, t) {
    switch (e) {
      case "compositionend":
        return mm(t);
      case "keypress":
        return t.which !== 32 ? null : (bf = !0, If);
      case "textInput":
        return e = t.data, e === If && bf ? null : e;
      default:
        return null;
    }
  }
  function k1(e, t) {
    if (pr)
      return e === "compositionend" || !Zu && pm(e, t) ? (e = dm(), Io = Qu = an = null, pr = !1, e) : null;
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
        return hm && t.locale !== "ko" ? null : t.data;
      default:
        return null;
    }
  }
  var _1 = { color: !0, date: !0, datetime: !0, "datetime-local": !0, email: !0, month: !0, number: !0, password: !0, range: !0, search: !0, tel: !0, text: !0, time: !0, url: !0, week: !0 };
  function zf(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t === "input" ? !!_1[e.type] : t === "textarea";
  }
  function ym(e, t, n, r) {
    Kp(r), t = is(t, "onChange"), 0 < t.length && (n = new Yu("onChange", "change", null, n, r), e.push({ event: n, listeners: t }));
  }
  var yi = null, Li = null;
  function A1(e) {
    _m(e, 0);
  }
  function $s(e) {
    var t = gr(e);
    if (bp(t))
      return e;
  }
  function F1(e, t) {
    if (e === "change")
      return t;
  }
  var gm = !1;
  if (Ht) {
    var ja;
    if (Ht) {
      var La = "oninput" in document;
      if (!La) {
        var Bf = document.createElement("div");
        Bf.setAttribute("oninput", "return;"), La = typeof Bf.oninput == "function";
      }
      ja = La;
    } else
      ja = !1;
    gm = ja && (!document.documentMode || 9 < document.documentMode);
  }
  function Uf() {
    yi && (yi.detachEvent("onpropertychange", vm), Li = yi = null);
  }
  function vm(e) {
    if (e.propertyName === "value" && $s(Li)) {
      var t = [];
      ym(t, Li, e, Uu(e)), Zp(A1, t);
    }
  }
  function O1(e, t, n) {
    e === "focusin" ? (Uf(), yi = t, Li = n, yi.attachEvent("onpropertychange", vm)) : e === "focusout" && Uf();
  }
  function D1(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown")
      return $s(Li);
  }
  function M1(e, t) {
    if (e === "click")
      return $s(t);
  }
  function R1(e, t) {
    if (e === "input" || e === "change")
      return $s(t);
  }
  function j1(e, t) {
    return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
  }
  var Tt = typeof Object.is == "function" ? Object.is : j1;
  function Vi(e, t) {
    if (Tt(e, t))
      return !0;
    if (typeof e != "object" || e === null || typeof t != "object" || t === null)
      return !1;
    var n = Object.keys(e), r = Object.keys(t);
    if (n.length !== r.length)
      return !1;
    for (r = 0; r < n.length; r++) {
      var i = n[r];
      if (!vl.call(t, i) || !Tt(e[i], t[i]))
        return !1;
    }
    return !0;
  }
  function Hf(e) {
    for (; e && e.firstChild; )
      e = e.firstChild;
    return e;
  }
  function Wf(e, t) {
    var n = Hf(e);
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
      n = Hf(n);
    }
  }
  function Sm(e, t) {
    return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? Sm(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1;
  }
  function xm() {
    for (var e = window, t = Zo(); t instanceof e.HTMLIFrameElement; ) {
      try {
        var n = typeof t.contentWindow.location.href == "string";
      } catch {
        n = !1;
      }
      if (n)
        e = t.contentWindow;
      else
        break;
      t = Zo(e.document);
    }
    return t;
  }
  function qu(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
  }
  function L1(e) {
    var t = xm(), n = e.focusedElem, r = e.selectionRange;
    if (t !== n && n && n.ownerDocument && Sm(n.ownerDocument.documentElement, n)) {
      if (r !== null && qu(n)) {
        if (t = r.start, e = r.end, e === void 0 && (e = t), "selectionStart" in n)
          n.selectionStart = t, n.selectionEnd = Math.min(e, n.value.length);
        else if (e = (t = n.ownerDocument || document) && t.defaultView || window, e.getSelection) {
          e = e.getSelection();
          var i = n.textContent.length, o = Math.min(r.start, i);
          r = r.end === void 0 ? o : Math.min(r.end, i), !e.extend && o > r && (i = r, r = o, o = i), i = Wf(n, o);
          var s = Wf(
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
  var V1 = Ht && "documentMode" in document && 11 >= document.documentMode, mr = null, $l = null, gi = null, Nl = !1;
  function Gf(e, t, n) {
    var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
    Nl || mr == null || mr !== Zo(r) || (r = mr, "selectionStart" in r && qu(r) ? r = { start: r.selectionStart, end: r.selectionEnd } : (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection(), r = { anchorNode: r.anchorNode, anchorOffset: r.anchorOffset, focusNode: r.focusNode, focusOffset: r.focusOffset }), gi && Vi(gi, r) || (gi = r, r = is($l, "onSelect"), 0 < r.length && (t = new Yu("onSelect", "select", null, t, n), e.push({ event: t, listeners: r }), t.target = mr)));
  }
  function wo(e, t) {
    var n = {};
    return n[e.toLowerCase()] = t.toLowerCase(), n["Webkit" + e] = "webkit" + t, n["Moz" + e] = "moz" + t, n;
  }
  var yr = { animationend: wo("Animation", "AnimationEnd"), animationiteration: wo("Animation", "AnimationIteration"), animationstart: wo("Animation", "AnimationStart"), transitionend: wo("Transition", "TransitionEnd") }, Va = {}, wm = {};
  Ht && (wm = document.createElement("div").style, "AnimationEvent" in window || (delete yr.animationend.animation, delete yr.animationiteration.animation, delete yr.animationstart.animation), "TransitionEvent" in window || delete yr.transitionend.transition);
  function Ns(e) {
    if (Va[e])
      return Va[e];
    if (!yr[e])
      return e;
    var t = yr[e], n;
    for (n in t)
      if (t.hasOwnProperty(n) && n in wm)
        return Va[e] = t[n];
    return e;
  }
  var Tm = Ns("animationend"), Em = Ns("animationiteration"), Cm = Ns("animationstart"), Pm = Ns("transitionend"), km = /* @__PURE__ */ new Map(), Kf = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
  function Pn(e, t) {
    km.set(e, t), qn(t, [e]);
  }
  for (var $a = 0; $a < Kf.length; $a++) {
    var Na = Kf[$a], $1 = Na.toLowerCase(), N1 = Na[0].toUpperCase() + Na.slice(1);
    Pn($1, "on" + N1);
  }
  Pn(Tm, "onAnimationEnd");
  Pn(Em, "onAnimationIteration");
  Pn(Cm, "onAnimationStart");
  Pn("dblclick", "onDoubleClick");
  Pn("focusin", "onFocus");
  Pn("focusout", "onBlur");
  Pn(Pm, "onTransitionEnd");
  Vr("onMouseEnter", ["mouseout", "mouseover"]);
  Vr("onMouseLeave", ["mouseout", "mouseover"]);
  Vr("onPointerEnter", ["pointerout", "pointerover"]);
  Vr("onPointerLeave", ["pointerout", "pointerover"]);
  qn("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
  qn("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
  qn("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
  qn("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
  qn("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
  qn("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
  var fi = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), I1 = new Set("cancel close invalid load scroll toggle".split(" ").concat(fi));
  function Qf(e, t, n) {
    var r = e.type || "unknown-event";
    e.currentTarget = n, $0(r, t, void 0, e), e.currentTarget = null;
  }
  function _m(e, t) {
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
            Qf(i, a, u), o = l;
          }
        else
          for (s = 0; s < r.length; s++) {
            if (a = r[s], l = a.instance, u = a.currentTarget, a = a.listener, l !== o && i.isPropagationStopped())
              break e;
            Qf(i, a, u), o = l;
          }
      }
    }
    if (Jo)
      throw e = Rl, Jo = !1, Rl = null, e;
  }
  function te(e, t) {
    var n = t[Ul];
    n === void 0 && (n = t[Ul] = /* @__PURE__ */ new Set());
    var r = e + "__bubble";
    n.has(r) || (Am(t, e, 2, !1), n.add(r));
  }
  function Ia(e, t, n) {
    var r = 0;
    t && (r |= 4), Am(n, e, r, t);
  }
  var To = "_reactListening" + Math.random().toString(36).slice(2);
  function $i(e) {
    if (!e[To]) {
      e[To] = !0, Lp.forEach(function(n) {
        n !== "selectionchange" && (I1.has(n) || Ia(n, !1, e), Ia(n, !0, e));
      });
      var t = e.nodeType === 9 ? e : e.ownerDocument;
      t === null || t[To] || (t[To] = !0, Ia("selectionchange", !1, t));
    }
  }
  function Am(e, t, n, r) {
    switch (fm(t)) {
      case 1:
        var i = J0;
        break;
      case 4:
        i = e1;
        break;
      default:
        i = Ku;
    }
    n = i.bind(null, t, n, e), i = void 0, !Ml || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (i = !0), r ? i !== void 0 ? e.addEventListener(t, n, { capture: !0, passive: i }) : e.addEventListener(t, n, !0) : i !== void 0 ? e.addEventListener(t, n, { passive: i }) : e.addEventListener(t, n, !1);
  }
  function ba(e, t, n, r, i) {
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
              if (s = Nn(a), s === null)
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
    Zp(function() {
      var u = o, c = Uu(n), f = [];
      e: {
        var d = km.get(e);
        if (d !== void 0) {
          var p = Yu, g = e;
          switch (e) {
            case "keypress":
              if (bo(n) === 0)
                break e;
            case "keydown":
            case "keyup":
              p = m1;
              break;
            case "focusin":
              g = "focus", p = Ra;
              break;
            case "focusout":
              g = "blur", p = Ra;
              break;
            case "beforeblur":
            case "afterblur":
              p = Ra;
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
              p = Vf;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              p = r1;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              p = v1;
              break;
            case Tm:
            case Em:
            case Cm:
              p = s1;
              break;
            case Pm:
              p = x1;
              break;
            case "scroll":
              p = t1;
              break;
            case "wheel":
              p = T1;
              break;
            case "copy":
            case "cut":
            case "paste":
              p = l1;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              p = Nf;
          }
          var v = (t & 4) !== 0, k = !v && e === "scroll", y = v ? d !== null ? d + "Capture" : null : d;
          v = [];
          for (var h = u, m; h !== null; ) {
            m = h;
            var S = m.stateNode;
            if (m.tag === 5 && S !== null && (m = S, y !== null && (S = Di(h, y), S != null && v.push(Ni(h, S, m)))), k)
              break;
            h = h.return;
          }
          0 < v.length && (d = new p(d, g, null, n, c), f.push({ event: d, listeners: v }));
        }
      }
      if (!(t & 7)) {
        e: {
          if (d = e === "mouseover" || e === "pointerover", p = e === "mouseout" || e === "pointerout", d && n !== Ol && (g = n.relatedTarget || n.fromElement) && (Nn(g) || g[Wt]))
            break e;
          if ((p || d) && (d = c.window === c ? c : (d = c.ownerDocument) ? d.defaultView || d.parentWindow : window, p ? (g = n.relatedTarget || n.toElement, p = u, g = g ? Nn(g) : null, g !== null && (k = Jn(g), g !== k || g.tag !== 5 && g.tag !== 6) && (g = null)) : (p = null, g = u), p !== g)) {
            if (v = Vf, S = "onMouseLeave", y = "onMouseEnter", h = "mouse", (e === "pointerout" || e === "pointerover") && (v = Nf, S = "onPointerLeave", y = "onPointerEnter", h = "pointer"), k = p == null ? d : gr(p), m = g == null ? d : gr(g), d = new v(S, h + "leave", p, n, c), d.target = k, d.relatedTarget = m, S = null, Nn(c) === u && (v = new v(y, h + "enter", g, n, c), v.target = m, v.relatedTarget = k, S = v), k = S, p && g)
              t: {
                for (v = p, y = g, h = 0, m = v; m; m = ur(m))
                  h++;
                for (m = 0, S = y; S; S = ur(S))
                  m++;
                for (; 0 < h - m; )
                  v = ur(v), h--;
                for (; 0 < m - h; )
                  y = ur(y), m--;
                for (; h--; ) {
                  if (v === y || y !== null && v === y.alternate)
                    break t;
                  v = ur(v), y = ur(y);
                }
                v = null;
              }
            else
              v = null;
            p !== null && Yf(f, d, p, v, !1), g !== null && k !== null && Yf(f, k, g, v, !0);
          }
        }
        e: {
          if (d = u ? gr(u) : window, p = d.nodeName && d.nodeName.toLowerCase(), p === "select" || p === "input" && d.type === "file")
            var C = F1;
          else if (zf(d))
            if (gm)
              C = R1;
            else {
              C = D1;
              var P = O1;
            }
          else
            (p = d.nodeName) && p.toLowerCase() === "input" && (d.type === "checkbox" || d.type === "radio") && (C = M1);
          if (C && (C = C(e, u))) {
            ym(f, C, n, c);
            break e;
          }
          P && P(e, d, u), e === "focusout" && (P = d._wrapperState) && P.controlled && d.type === "number" && Pl(d, "number", d.value);
        }
        switch (P = u ? gr(u) : window, e) {
          case "focusin":
            (zf(P) || P.contentEditable === "true") && (mr = P, $l = u, gi = null);
            break;
          case "focusout":
            gi = $l = mr = null;
            break;
          case "mousedown":
            Nl = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            Nl = !1, Gf(f, n, c);
            break;
          case "selectionchange":
            if (V1)
              break;
          case "keydown":
          case "keyup":
            Gf(f, n, c);
        }
        var T;
        if (Zu)
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
          pr ? pm(e, n) && (_ = "onCompositionEnd") : e === "keydown" && n.keyCode === 229 && (_ = "onCompositionStart");
        _ && (hm && n.locale !== "ko" && (pr || _ !== "onCompositionStart" ? _ === "onCompositionEnd" && pr && (T = dm()) : (an = c, Qu = "value" in an ? an.value : an.textContent, pr = !0)), P = is(u, _), 0 < P.length && (_ = new $f(_, e, null, n, c), f.push({ event: _, listeners: P }), T ? _.data = T : (T = mm(n), T !== null && (_.data = T)))), (T = C1 ? P1(e, n) : k1(e, n)) && (u = is(u, "onBeforeInput"), 0 < u.length && (c = new $f("onBeforeInput", "beforeinput", null, n, c), f.push({ event: c, listeners: u }), c.data = T));
      }
      _m(f, t);
    });
  }
  function Ni(e, t, n) {
    return { instance: e, listener: t, currentTarget: n };
  }
  function is(e, t) {
    for (var n = t + "Capture", r = []; e !== null; ) {
      var i = e, o = i.stateNode;
      i.tag === 5 && o !== null && (i = o, o = Di(e, n), o != null && r.unshift(Ni(e, o, i)), o = Di(e, t), o != null && r.push(Ni(e, o, i))), e = e.return;
    }
    return r;
  }
  function ur(e) {
    if (e === null)
      return null;
    do
      e = e.return;
    while (e && e.tag !== 5);
    return e || null;
  }
  function Yf(e, t, n, r, i) {
    for (var o = t._reactName, s = []; n !== null && n !== r; ) {
      var a = n, l = a.alternate, u = a.stateNode;
      if (l !== null && l === r)
        break;
      a.tag === 5 && u !== null && (a = u, i ? (l = Di(n, o), l != null && s.unshift(Ni(n, l, a))) : i || (l = Di(n, o), l != null && s.push(Ni(n, l, a)))), n = n.return;
    }
    s.length !== 0 && e.push({ event: t, listeners: s });
  }
  var b1 = /\r\n?/g, z1 = /\u0000|\uFFFD/g;
  function Xf(e) {
    return (typeof e == "string" ? e : "" + e).replace(b1, `
`).replace(z1, "");
  }
  function Eo(e, t, n) {
    if (t = Xf(t), Xf(e) !== t && n)
      throw Error(A(425));
  }
  function os() {
  }
  var Il = null, bl = null;
  function zl(e, t) {
    return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
  }
  var Bl = typeof setTimeout == "function" ? setTimeout : void 0, B1 = typeof clearTimeout == "function" ? clearTimeout : void 0, Zf = typeof Promise == "function" ? Promise : void 0, U1 = typeof queueMicrotask == "function" ? queueMicrotask : typeof Zf < "u" ? function(e) {
    return Zf.resolve(null).then(e).catch(H1);
  } : Bl;
  function H1(e) {
    setTimeout(function() {
      throw e;
    });
  }
  function za(e, t) {
    var n = t, r = 0;
    do {
      var i = n.nextSibling;
      if (e.removeChild(n), i && i.nodeType === 8)
        if (n = i.data, n === "/$") {
          if (r === 0) {
            e.removeChild(i), ji(t);
            return;
          }
          r--;
        } else
          n !== "$" && n !== "$?" && n !== "$!" || r++;
      n = i;
    } while (n);
    ji(t);
  }
  function hn(e) {
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
  function qf(e) {
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
  var Qr = Math.random().toString(36).slice(2), _t = "__reactFiber$" + Qr, Ii = "__reactProps$" + Qr, Wt = "__reactContainer$" + Qr, Ul = "__reactEvents$" + Qr, W1 = "__reactListeners$" + Qr, G1 = "__reactHandles$" + Qr;
  function Nn(e) {
    var t = e[_t];
    if (t)
      return t;
    for (var n = e.parentNode; n; ) {
      if (t = n[Wt] || n[_t]) {
        if (n = t.alternate, t.child !== null || n !== null && n.child !== null)
          for (e = qf(e); e !== null; ) {
            if (n = e[_t])
              return n;
            e = qf(e);
          }
        return t;
      }
      e = n, n = e.parentNode;
    }
    return null;
  }
  function to(e) {
    return e = e[_t] || e[Wt], !e || e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3 ? null : e;
  }
  function gr(e) {
    if (e.tag === 5 || e.tag === 6)
      return e.stateNode;
    throw Error(A(33));
  }
  function Is(e) {
    return e[Ii] || null;
  }
  var Hl = [], vr = -1;
  function kn(e) {
    return { current: e };
  }
  function re(e) {
    0 > vr || (e.current = Hl[vr], Hl[vr] = null, vr--);
  }
  function J(e, t) {
    vr++, Hl[vr] = e.current, e.current = t;
  }
  var wn = {}, Me = kn(wn), Ue = kn(!1), Wn = wn;
  function $r(e, t) {
    var n = e.type.contextTypes;
    if (!n)
      return wn;
    var r = e.stateNode;
    if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
      return r.__reactInternalMemoizedMaskedChildContext;
    var i = {}, o;
    for (o in n)
      i[o] = t[o];
    return r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = t, e.__reactInternalMemoizedMaskedChildContext = i), i;
  }
  function He(e) {
    return e = e.childContextTypes, e != null;
  }
  function ss() {
    re(Ue), re(Me);
  }
  function Jf(e, t, n) {
    if (Me.current !== wn)
      throw Error(A(168));
    J(Me, t), J(Ue, n);
  }
  function Fm(e, t, n) {
    var r = e.stateNode;
    if (t = t.childContextTypes, typeof r.getChildContext != "function")
      return n;
    r = r.getChildContext();
    for (var i in r)
      if (!(i in t))
        throw Error(A(108, O0(e) || "Unknown", i));
    return ue({}, n, r);
  }
  function as(e) {
    return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || wn, Wn = Me.current, J(Me, e), J(Ue, Ue.current), !0;
  }
  function ed(e, t, n) {
    var r = e.stateNode;
    if (!r)
      throw Error(A(169));
    n ? (e = Fm(e, t, Wn), r.__reactInternalMemoizedMergedChildContext = e, re(Ue), re(Me), J(Me, e)) : re(Ue), J(Ue, n);
  }
  var Vt = null, bs = !1, Ba = !1;
  function Om(e) {
    Vt === null ? Vt = [e] : Vt.push(e);
  }
  function K1(e) {
    bs = !0, Om(e);
  }
  function _n() {
    if (!Ba && Vt !== null) {
      Ba = !0;
      var e = 0, t = Y;
      try {
        var n = Vt;
        for (Y = 1; e < n.length; e++) {
          var r = n[e];
          do
            r = r(!0);
          while (r !== null);
        }
        Vt = null, bs = !1;
      } catch (i) {
        throw Vt !== null && (Vt = Vt.slice(e + 1)), tm(Hu, _n), i;
      } finally {
        Y = t, Ba = !1;
      }
    }
    return null;
  }
  var Sr = [], xr = 0, ls = null, us = 0, at = [], lt = 0, Gn = null, $t = 1, Nt = "";
  function Rn(e, t) {
    Sr[xr++] = us, Sr[xr++] = ls, ls = e, us = t;
  }
  function Dm(e, t, n) {
    at[lt++] = $t, at[lt++] = Nt, at[lt++] = Gn, Gn = e;
    var r = $t;
    e = Nt;
    var i = 32 - xt(r) - 1;
    r &= ~(1 << i), n += 1;
    var o = 32 - xt(t) + i;
    if (30 < o) {
      var s = i - i % 5;
      o = (r & (1 << s) - 1).toString(32), r >>= s, i -= s, $t = 1 << 32 - xt(t) + i | n << i | r, Nt = o + e;
    } else
      $t = 1 << o | n << i | r, Nt = e;
  }
  function Ju(e) {
    e.return !== null && (Rn(e, 1), Dm(e, 1, 0));
  }
  function ec(e) {
    for (; e === ls; )
      ls = Sr[--xr], Sr[xr] = null, us = Sr[--xr], Sr[xr] = null;
    for (; e === Gn; )
      Gn = at[--lt], at[lt] = null, Nt = at[--lt], at[lt] = null, $t = at[--lt], at[lt] = null;
  }
  var Je = null, Xe = null, oe = !1, St = null;
  function Mm(e, t) {
    var n = ut(5, null, null, 0);
    n.elementType = "DELETED", n.stateNode = t, n.return = e, t = e.deletions, t === null ? (e.deletions = [n], e.flags |= 16) : t.push(n);
  }
  function td(e, t) {
    switch (e.tag) {
      case 5:
        var n = e.type;
        return t = t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t, t !== null ? (e.stateNode = t, Je = e, Xe = hn(t.firstChild), !0) : !1;
      case 6:
        return t = e.pendingProps === "" || t.nodeType !== 3 ? null : t, t !== null ? (e.stateNode = t, Je = e, Xe = null, !0) : !1;
      case 13:
        return t = t.nodeType !== 8 ? null : t, t !== null ? (n = Gn !== null ? { id: $t, overflow: Nt } : null, e.memoizedState = { dehydrated: t, treeContext: n, retryLane: 1073741824 }, n = ut(18, null, null, 0), n.stateNode = t, n.return = e, e.child = n, Je = e, Xe = null, !0) : !1;
      default:
        return !1;
    }
  }
  function Wl(e) {
    return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
  }
  function Gl(e) {
    if (oe) {
      var t = Xe;
      if (t) {
        var n = t;
        if (!td(e, t)) {
          if (Wl(e))
            throw Error(A(418));
          t = hn(n.nextSibling);
          var r = Je;
          t && td(e, t) ? Mm(r, n) : (e.flags = e.flags & -4097 | 2, oe = !1, Je = e);
        }
      } else {
        if (Wl(e))
          throw Error(A(418));
        e.flags = e.flags & -4097 | 2, oe = !1, Je = e;
      }
    }
  }
  function nd(e) {
    for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
      e = e.return;
    Je = e;
  }
  function Co(e) {
    if (e !== Je)
      return !1;
    if (!oe)
      return nd(e), oe = !0, !1;
    var t;
    if ((t = e.tag !== 3) && !(t = e.tag !== 5) && (t = e.type, t = t !== "head" && t !== "body" && !zl(e.type, e.memoizedProps)), t && (t = Xe)) {
      if (Wl(e))
        throw Rm(), Error(A(418));
      for (; t; )
        Mm(e, t), t = hn(t.nextSibling);
    }
    if (nd(e), e.tag === 13) {
      if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e)
        throw Error(A(317));
      e: {
        for (e = e.nextSibling, t = 0; e; ) {
          if (e.nodeType === 8) {
            var n = e.data;
            if (n === "/$") {
              if (t === 0) {
                Xe = hn(e.nextSibling);
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
      Xe = Je ? hn(e.stateNode.nextSibling) : null;
    return !0;
  }
  function Rm() {
    for (var e = Xe; e; )
      e = hn(e.nextSibling);
  }
  function Nr() {
    Xe = Je = null, oe = !1;
  }
  function tc(e) {
    St === null ? St = [e] : St.push(e);
  }
  var Q1 = Yt.ReactCurrentBatchConfig;
  function gt(e, t) {
    if (e && e.defaultProps) {
      t = ue({}, t), e = e.defaultProps;
      for (var n in e)
        t[n] === void 0 && (t[n] = e[n]);
      return t;
    }
    return t;
  }
  var cs = kn(null), fs = null, wr = null, nc = null;
  function rc() {
    nc = wr = fs = null;
  }
  function ic(e) {
    var t = cs.current;
    re(cs), e._currentValue = t;
  }
  function Kl(e, t, n) {
    for (; e !== null; ) {
      var r = e.alternate;
      if ((e.childLanes & t) !== t ? (e.childLanes |= t, r !== null && (r.childLanes |= t)) : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t), e === n)
        break;
      e = e.return;
    }
  }
  function Rr(e, t) {
    fs = e, nc = wr = null, e = e.dependencies, e !== null && e.firstContext !== null && (e.lanes & t && (Be = !0), e.firstContext = null);
  }
  function ft(e) {
    var t = e._currentValue;
    if (nc !== e)
      if (e = { context: e, memoizedValue: t, next: null }, wr === null) {
        if (fs === null)
          throw Error(A(308));
        wr = e, fs.dependencies = { lanes: 0, firstContext: e };
      } else
        wr = wr.next = e;
    return t;
  }
  var In = null;
  function oc(e) {
    In === null ? In = [e] : In.push(e);
  }
  function jm(e, t, n, r) {
    var i = t.interleaved;
    return i === null ? (n.next = n, oc(t)) : (n.next = i.next, i.next = n), t.interleaved = n, Gt(e, r);
  }
  function Gt(e, t) {
    e.lanes |= t;
    var n = e.alternate;
    for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; )
      e.childLanes |= t, n = e.alternate, n !== null && (n.childLanes |= t), n = e, e = e.return;
    return n.tag === 3 ? n.stateNode : null;
  }
  var tn = !1;
  function sc(e) {
    e.updateQueue = { baseState: e.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
  }
  function Lm(e, t) {
    e = e.updateQueue, t.updateQueue === e && (t.updateQueue = { baseState: e.baseState, firstBaseUpdate: e.firstBaseUpdate, lastBaseUpdate: e.lastBaseUpdate, shared: e.shared, effects: e.effects });
  }
  function zt(e, t) {
    return { eventTime: e, lane: t, tag: 0, payload: null, callback: null, next: null };
  }
  function pn(e, t, n) {
    var r = e.updateQueue;
    if (r === null)
      return null;
    if (r = r.shared, H & 2) {
      var i = r.pending;
      return i === null ? t.next = t : (t.next = i.next, i.next = t), r.pending = t, Gt(e, n);
    }
    return i = r.interleaved, i === null ? (t.next = t, oc(r)) : (t.next = i.next, i.next = t), r.interleaved = t, Gt(e, n);
  }
  function zo(e, t, n) {
    if (t = t.updateQueue, t !== null && (t = t.shared, (n & 4194240) !== 0)) {
      var r = t.lanes;
      r &= e.pendingLanes, n |= r, t.lanes = n, Wu(e, n);
    }
  }
  function rd(e, t) {
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
  function ds(e, t, n, r) {
    var i = e.updateQueue;
    tn = !1;
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
                f = ue({}, f, d);
                break e;
              case 2:
                tn = !0;
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
      Qn |= s, e.lanes = s, e.memoizedState = f;
    }
  }
  function id(e, t, n) {
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
  var Vm = new jp.Component().refs;
  function Ql(e, t, n, r) {
    t = e.memoizedState, n = n(r, t), n = n == null ? t : ue({}, t, n), e.memoizedState = n, e.lanes === 0 && (e.updateQueue.baseState = n);
  }
  var zs = { isMounted: function(e) {
    return (e = e._reactInternals) ? Jn(e) === e : !1;
  }, enqueueSetState: function(e, t, n) {
    e = e._reactInternals;
    var r = $e(), i = yn(e), o = zt(r, i);
    o.payload = t, n != null && (o.callback = n), t = pn(e, o, i), t !== null && (wt(t, e, i, r), zo(t, e, i));
  }, enqueueReplaceState: function(e, t, n) {
    e = e._reactInternals;
    var r = $e(), i = yn(e), o = zt(r, i);
    o.tag = 1, o.payload = t, n != null && (o.callback = n), t = pn(e, o, i), t !== null && (wt(t, e, i, r), zo(t, e, i));
  }, enqueueForceUpdate: function(e, t) {
    e = e._reactInternals;
    var n = $e(), r = yn(e), i = zt(n, r);
    i.tag = 2, t != null && (i.callback = t), t = pn(e, i, r), t !== null && (wt(t, e, r, n), zo(t, e, r));
  } };
  function od(e, t, n, r, i, o, s) {
    return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(r, o, s) : t.prototype && t.prototype.isPureReactComponent ? !Vi(n, r) || !Vi(i, o) : !0;
  }
  function $m(e, t, n) {
    var r = !1, i = wn, o = t.contextType;
    return typeof o == "object" && o !== null ? o = ft(o) : (i = He(t) ? Wn : Me.current, r = t.contextTypes, o = (r = r != null) ? $r(e, i) : wn), t = new t(n, o), e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null, t.updater = zs, e.stateNode = t, t._reactInternals = e, r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = i, e.__reactInternalMemoizedMaskedChildContext = o), t;
  }
  function sd(e, t, n, r) {
    e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, r), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, r), t.state !== e && zs.enqueueReplaceState(t, t.state, null);
  }
  function Yl(e, t, n, r) {
    var i = e.stateNode;
    i.props = n, i.state = e.memoizedState, i.refs = Vm, sc(e);
    var o = t.contextType;
    typeof o == "object" && o !== null ? i.context = ft(o) : (o = He(t) ? Wn : Me.current, i.context = $r(e, o)), i.state = e.memoizedState, o = t.getDerivedStateFromProps, typeof o == "function" && (Ql(e, t, o, n), i.state = e.memoizedState), typeof t.getDerivedStateFromProps == "function" || typeof i.getSnapshotBeforeUpdate == "function" || typeof i.UNSAFE_componentWillMount != "function" && typeof i.componentWillMount != "function" || (t = i.state, typeof i.componentWillMount == "function" && i.componentWillMount(), typeof i.UNSAFE_componentWillMount == "function" && i.UNSAFE_componentWillMount(), t !== i.state && zs.enqueueReplaceState(i, i.state, null), ds(e, n, i, r), i.state = e.memoizedState), typeof i.componentDidMount == "function" && (e.flags |= 4194308);
  }
  function ni(e, t, n) {
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
          a === Vm && (a = i.refs = {}), s === null ? delete a[o] : a[o] = s;
        }, t._stringRef = o, t);
      }
      if (typeof e != "string")
        throw Error(A(284));
      if (!n._owner)
        throw Error(A(290, e));
    }
    return e;
  }
  function Po(e, t) {
    throw e = Object.prototype.toString.call(t), Error(A(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e));
  }
  function ad(e) {
    var t = e._init;
    return t(e._payload);
  }
  function Nm(e) {
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
      return y = gn(y, h), y.index = 0, y.sibling = null, y;
    }
    function o(y, h, m) {
      return y.index = m, e ? (m = y.alternate, m !== null ? (m = m.index, m < h ? (y.flags |= 2, h) : m) : (y.flags |= 2, h)) : (y.flags |= 1048576, h);
    }
    function s(y) {
      return e && y.alternate === null && (y.flags |= 2), y;
    }
    function a(y, h, m, S) {
      return h === null || h.tag !== 6 ? (h = Ya(m, y.mode, S), h.return = y, h) : (h = i(h, m), h.return = y, h);
    }
    function l(y, h, m, S) {
      var C = m.type;
      return C === hr ? c(y, h, m.props.children, S, m.key) : h !== null && (h.elementType === C || typeof C == "object" && C !== null && C.$$typeof === en && ad(C) === h.type) ? (S = i(h, m.props), S.ref = ni(y, h, m), S.return = y, S) : (S = Ko(m.type, m.key, m.props, null, y.mode, S), S.ref = ni(y, h, m), S.return = y, S);
    }
    function u(y, h, m, S) {
      return h === null || h.tag !== 4 || h.stateNode.containerInfo !== m.containerInfo || h.stateNode.implementation !== m.implementation ? (h = Xa(m, y.mode, S), h.return = y, h) : (h = i(h, m.children || []), h.return = y, h);
    }
    function c(y, h, m, S, C) {
      return h === null || h.tag !== 7 ? (h = Un(m, y.mode, S, C), h.return = y, h) : (h = i(h, m), h.return = y, h);
    }
    function f(y, h, m) {
      if (typeof h == "string" && h !== "" || typeof h == "number")
        return h = Ya("" + h, y.mode, m), h.return = y, h;
      if (typeof h == "object" && h !== null) {
        switch (h.$$typeof) {
          case po:
            return m = Ko(h.type, h.key, h.props, null, y.mode, m), m.ref = ni(y, null, h), m.return = y, m;
          case dr:
            return h = Xa(h, y.mode, m), h.return = y, h;
          case en:
            var S = h._init;
            return f(y, S(h._payload), m);
        }
        if (ui(h) || Zr(h))
          return h = Un(h, y.mode, m, null), h.return = y, h;
        Po(y, h);
      }
      return null;
    }
    function d(y, h, m, S) {
      var C = h !== null ? h.key : null;
      if (typeof m == "string" && m !== "" || typeof m == "number")
        return C !== null ? null : a(y, h, "" + m, S);
      if (typeof m == "object" && m !== null) {
        switch (m.$$typeof) {
          case po:
            return m.key === C ? l(y, h, m, S) : null;
          case dr:
            return m.key === C ? u(y, h, m, S) : null;
          case en:
            return C = m._init, d(
              y,
              h,
              C(m._payload),
              S
            );
        }
        if (ui(m) || Zr(m))
          return C !== null ? null : c(y, h, m, S, null);
        Po(y, m);
      }
      return null;
    }
    function p(y, h, m, S, C) {
      if (typeof S == "string" && S !== "" || typeof S == "number")
        return y = y.get(m) || null, a(h, y, "" + S, C);
      if (typeof S == "object" && S !== null) {
        switch (S.$$typeof) {
          case po:
            return y = y.get(S.key === null ? m : S.key) || null, l(h, y, S, C);
          case dr:
            return y = y.get(S.key === null ? m : S.key) || null, u(h, y, S, C);
          case en:
            var P = S._init;
            return p(y, h, m, P(S._payload), C);
        }
        if (ui(S) || Zr(S))
          return y = y.get(m) || null, c(h, y, S, C, null);
        Po(h, S);
      }
      return null;
    }
    function g(y, h, m, S) {
      for (var C = null, P = null, T = h, _ = h = 0, L = null; T !== null && _ < m.length; _++) {
        T.index > _ ? (L = T, T = null) : L = T.sibling;
        var O = d(y, T, m[_], S);
        if (O === null) {
          T === null && (T = L);
          break;
        }
        e && T && O.alternate === null && t(y, T), h = o(O, h, _), P === null ? C = O : P.sibling = O, P = O, T = L;
      }
      if (_ === m.length)
        return n(y, T), oe && Rn(y, _), C;
      if (T === null) {
        for (; _ < m.length; _++)
          T = f(y, m[_], S), T !== null && (h = o(T, h, _), P === null ? C = T : P.sibling = T, P = T);
        return oe && Rn(y, _), C;
      }
      for (T = r(y, T); _ < m.length; _++)
        L = p(T, y, _, m[_], S), L !== null && (e && L.alternate !== null && T.delete(L.key === null ? _ : L.key), h = o(L, h, _), P === null ? C = L : P.sibling = L, P = L);
      return e && T.forEach(function(U) {
        return t(y, U);
      }), oe && Rn(y, _), C;
    }
    function v(y, h, m, S) {
      var C = Zr(m);
      if (typeof C != "function")
        throw Error(A(150));
      if (m = C.call(m), m == null)
        throw Error(A(151));
      for (var P = C = null, T = h, _ = h = 0, L = null, O = m.next(); T !== null && !O.done; _++, O = m.next()) {
        T.index > _ ? (L = T, T = null) : L = T.sibling;
        var U = d(y, T, O.value, S);
        if (U === null) {
          T === null && (T = L);
          break;
        }
        e && T && U.alternate === null && t(y, T), h = o(U, h, _), P === null ? C = U : P.sibling = U, P = U, T = L;
      }
      if (O.done)
        return n(
          y,
          T
        ), oe && Rn(y, _), C;
      if (T === null) {
        for (; !O.done; _++, O = m.next())
          O = f(y, O.value, S), O !== null && (h = o(O, h, _), P === null ? C = O : P.sibling = O, P = O);
        return oe && Rn(y, _), C;
      }
      for (T = r(y, T); !O.done; _++, O = m.next())
        O = p(T, y, _, O.value, S), O !== null && (e && O.alternate !== null && T.delete(O.key === null ? _ : O.key), h = o(O, h, _), P === null ? C = O : P.sibling = O, P = O);
      return e && T.forEach(function(de) {
        return t(y, de);
      }), oe && Rn(y, _), C;
    }
    function k(y, h, m, S) {
      if (typeof m == "object" && m !== null && m.type === hr && m.key === null && (m = m.props.children), typeof m == "object" && m !== null) {
        switch (m.$$typeof) {
          case po:
            e: {
              for (var C = m.key, P = h; P !== null; ) {
                if (P.key === C) {
                  if (C = m.type, C === hr) {
                    if (P.tag === 7) {
                      n(y, P.sibling), h = i(P, m.props.children), h.return = y, y = h;
                      break e;
                    }
                  } else if (P.elementType === C || typeof C == "object" && C !== null && C.$$typeof === en && ad(C) === P.type) {
                    n(y, P.sibling), h = i(P, m.props), h.ref = ni(y, P, m), h.return = y, y = h;
                    break e;
                  }
                  n(y, P);
                  break;
                } else
                  t(y, P);
                P = P.sibling;
              }
              m.type === hr ? (h = Un(m.props.children, y.mode, S, m.key), h.return = y, y = h) : (S = Ko(m.type, m.key, m.props, null, y.mode, S), S.ref = ni(y, h, m), S.return = y, y = S);
            }
            return s(y);
          case dr:
            e: {
              for (P = m.key; h !== null; ) {
                if (h.key === P)
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
              h = Xa(m, y.mode, S), h.return = y, y = h;
            }
            return s(y);
          case en:
            return P = m._init, k(y, h, P(m._payload), S);
        }
        if (ui(m))
          return g(y, h, m, S);
        if (Zr(m))
          return v(y, h, m, S);
        Po(y, m);
      }
      return typeof m == "string" && m !== "" || typeof m == "number" ? (m = "" + m, h !== null && h.tag === 6 ? (n(y, h.sibling), h = i(h, m), h.return = y, y = h) : (n(y, h), h = Ya(m, y.mode, S), h.return = y, y = h), s(y)) : n(y, h);
    }
    return k;
  }
  var Ir = Nm(!0), Im = Nm(!1), no = {}, Ft = kn(no), bi = kn(no), zi = kn(no);
  function bn(e) {
    if (e === no)
      throw Error(A(174));
    return e;
  }
  function ac(e, t) {
    switch (J(zi, t), J(bi, e), J(Ft, no), e = t.nodeType, e) {
      case 9:
      case 11:
        t = (t = t.documentElement) ? t.namespaceURI : _l(null, "");
        break;
      default:
        e = e === 8 ? t.parentNode : t, t = e.namespaceURI || null, e = e.tagName, t = _l(t, e);
    }
    re(Ft), J(Ft, t);
  }
  function br() {
    re(Ft), re(bi), re(zi);
  }
  function bm(e) {
    bn(zi.current);
    var t = bn(Ft.current), n = _l(t, e.type);
    t !== n && (J(bi, e), J(Ft, n));
  }
  function lc(e) {
    bi.current === e && (re(Ft), re(bi));
  }
  var se = kn(0);
  function hs(e) {
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
  var Ua = [];
  function uc() {
    for (var e = 0; e < Ua.length; e++)
      Ua[e]._workInProgressVersionPrimary = null;
    Ua.length = 0;
  }
  var Bo = Yt.ReactCurrentDispatcher, Ha = Yt.ReactCurrentBatchConfig, Kn = 0, le = null, ye = null, xe = null, ps = !1, vi = !1, Bi = 0, Y1 = 0;
  function Fe() {
    throw Error(A(321));
  }
  function cc(e, t) {
    if (t === null)
      return !1;
    for (var n = 0; n < t.length && n < e.length; n++)
      if (!Tt(e[n], t[n]))
        return !1;
    return !0;
  }
  function fc(e, t, n, r, i, o) {
    if (Kn = o, le = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, Bo.current = e === null || e.memoizedState === null ? J1 : eS, e = n(r, i), vi) {
      o = 0;
      do {
        if (vi = !1, Bi = 0, 25 <= o)
          throw Error(A(301));
        o += 1, xe = ye = null, t.updateQueue = null, Bo.current = tS, e = n(r, i);
      } while (vi);
    }
    if (Bo.current = ms, t = ye !== null && ye.next !== null, Kn = 0, xe = ye = le = null, ps = !1, t)
      throw Error(A(300));
    return e;
  }
  function dc() {
    var e = Bi !== 0;
    return Bi = 0, e;
  }
  function Pt() {
    var e = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
    return xe === null ? le.memoizedState = xe = e : xe = xe.next = e, xe;
  }
  function dt() {
    if (ye === null) {
      var e = le.alternate;
      e = e !== null ? e.memoizedState : null;
    } else
      e = ye.next;
    var t = xe === null ? le.memoizedState : xe.next;
    if (t !== null)
      xe = t, ye = e;
    else {
      if (e === null)
        throw Error(A(310));
      ye = e, e = { memoizedState: ye.memoizedState, baseState: ye.baseState, baseQueue: ye.baseQueue, queue: ye.queue, next: null }, xe === null ? le.memoizedState = xe = e : xe = xe.next = e;
    }
    return xe;
  }
  function Ui(e, t) {
    return typeof t == "function" ? t(e) : t;
  }
  function Wa(e) {
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
        if ((Kn & c) === c)
          l !== null && (l = l.next = { lane: 0, action: u.action, hasEagerState: u.hasEagerState, eagerState: u.eagerState, next: null }), r = u.hasEagerState ? u.eagerState : e(r, u.action);
        else {
          var f = {
            lane: c,
            action: u.action,
            hasEagerState: u.hasEagerState,
            eagerState: u.eagerState,
            next: null
          };
          l === null ? (a = l = f, s = r) : l = l.next = f, le.lanes |= c, Qn |= c;
        }
        u = u.next;
      } while (u !== null && u !== o);
      l === null ? s = r : l.next = a, Tt(r, t.memoizedState) || (Be = !0), t.memoizedState = r, t.baseState = s, t.baseQueue = l, n.lastRenderedState = r;
    }
    if (e = n.interleaved, e !== null) {
      i = e;
      do
        o = i.lane, le.lanes |= o, Qn |= o, i = i.next;
      while (i !== e);
    } else
      i === null && (n.lanes = 0);
    return [t.memoizedState, n.dispatch];
  }
  function Ga(e) {
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
      Tt(o, t.memoizedState) || (Be = !0), t.memoizedState = o, t.baseQueue === null && (t.baseState = o), n.lastRenderedState = o;
    }
    return [o, r];
  }
  function zm() {
  }
  function Bm(e, t) {
    var n = le, r = dt(), i = t(), o = !Tt(r.memoizedState, i);
    if (o && (r.memoizedState = i, Be = !0), r = r.queue, hc(Wm.bind(null, n, r, e), [e]), r.getSnapshot !== t || o || xe !== null && xe.memoizedState.tag & 1) {
      if (n.flags |= 2048, Hi(9, Hm.bind(null, n, r, i, t), void 0, null), we === null)
        throw Error(A(349));
      Kn & 30 || Um(n, t, i);
    }
    return i;
  }
  function Um(e, t, n) {
    e.flags |= 16384, e = { getSnapshot: t, value: n }, t = le.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, le.updateQueue = t, t.stores = [e]) : (n = t.stores, n === null ? t.stores = [e] : n.push(e));
  }
  function Hm(e, t, n, r) {
    t.value = n, t.getSnapshot = r, Gm(t) && Km(e);
  }
  function Wm(e, t, n) {
    return n(function() {
      Gm(t) && Km(e);
    });
  }
  function Gm(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
      var n = t();
      return !Tt(e, n);
    } catch {
      return !0;
    }
  }
  function Km(e) {
    var t = Gt(e, 1);
    t !== null && wt(t, e, 1, -1);
  }
  function ld(e) {
    var t = Pt();
    return typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: Ui, lastRenderedState: e }, t.queue = e, e = e.dispatch = q1.bind(null, le, e), [t.memoizedState, e];
  }
  function Hi(e, t, n, r) {
    return e = { tag: e, create: t, destroy: n, deps: r, next: null }, t = le.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, le.updateQueue = t, t.lastEffect = e.next = e) : (n = t.lastEffect, n === null ? t.lastEffect = e.next = e : (r = n.next, n.next = e, e.next = r, t.lastEffect = e)), e;
  }
  function Qm() {
    return dt().memoizedState;
  }
  function Uo(e, t, n, r) {
    var i = Pt();
    le.flags |= e, i.memoizedState = Hi(1 | t, n, void 0, r === void 0 ? null : r);
  }
  function Bs(e, t, n, r) {
    var i = dt();
    r = r === void 0 ? null : r;
    var o = void 0;
    if (ye !== null) {
      var s = ye.memoizedState;
      if (o = s.destroy, r !== null && cc(r, s.deps)) {
        i.memoizedState = Hi(t, n, o, r);
        return;
      }
    }
    le.flags |= e, i.memoizedState = Hi(1 | t, n, o, r);
  }
  function ud(e, t) {
    return Uo(8390656, 8, e, t);
  }
  function hc(e, t) {
    return Bs(2048, 8, e, t);
  }
  function Ym(e, t) {
    return Bs(4, 2, e, t);
  }
  function Xm(e, t) {
    return Bs(4, 4, e, t);
  }
  function Zm(e, t) {
    if (typeof t == "function")
      return e = e(), t(e), function() {
        t(null);
      };
    if (t != null)
      return e = e(), t.current = e, function() {
        t.current = null;
      };
  }
  function qm(e, t, n) {
    return n = n != null ? n.concat([e]) : null, Bs(4, 4, Zm.bind(null, t, e), n);
  }
  function pc() {
  }
  function Jm(e, t) {
    var n = dt();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && cc(t, r[1]) ? r[0] : (n.memoizedState = [e, t], e);
  }
  function ey(e, t) {
    var n = dt();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && cc(t, r[1]) ? r[0] : (e = e(), n.memoizedState = [e, t], e);
  }
  function ty(e, t, n) {
    return Kn & 21 ? (Tt(n, t) || (n = im(), le.lanes |= n, Qn |= n, e.baseState = !0), t) : (e.baseState && (e.baseState = !1, Be = !0), e.memoizedState = n);
  }
  function X1(e, t) {
    var n = Y;
    Y = n !== 0 && 4 > n ? n : 4, e(!0);
    var r = Ha.transition;
    Ha.transition = {};
    try {
      e(!1), t();
    } finally {
      Y = n, Ha.transition = r;
    }
  }
  function ny() {
    return dt().memoizedState;
  }
  function Z1(e, t, n) {
    var r = yn(e);
    if (n = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null }, ry(e))
      iy(t, n);
    else if (n = jm(e, t, n, r), n !== null) {
      var i = $e();
      wt(n, e, r, i), oy(n, t, r);
    }
  }
  function q1(e, t, n) {
    var r = yn(e), i = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
    if (ry(e))
      iy(t, i);
    else {
      var o = e.alternate;
      if (e.lanes === 0 && (o === null || o.lanes === 0) && (o = t.lastRenderedReducer, o !== null))
        try {
          var s = t.lastRenderedState, a = o(s, n);
          if (i.hasEagerState = !0, i.eagerState = a, Tt(a, s)) {
            var l = t.interleaved;
            l === null ? (i.next = i, oc(t)) : (i.next = l.next, l.next = i), t.interleaved = i;
            return;
          }
        } catch {
        } finally {
        }
      n = jm(e, t, i, r), n !== null && (i = $e(), wt(n, e, r, i), oy(n, t, r));
    }
  }
  function ry(e) {
    var t = e.alternate;
    return e === le || t !== null && t === le;
  }
  function iy(e, t) {
    vi = ps = !0;
    var n = e.pending;
    n === null ? t.next = t : (t.next = n.next, n.next = t), e.pending = t;
  }
  function oy(e, t, n) {
    if (n & 4194240) {
      var r = t.lanes;
      r &= e.pendingLanes, n |= r, t.lanes = n, Wu(e, n);
    }
  }
  var ms = { readContext: ft, useCallback: Fe, useContext: Fe, useEffect: Fe, useImperativeHandle: Fe, useInsertionEffect: Fe, useLayoutEffect: Fe, useMemo: Fe, useReducer: Fe, useRef: Fe, useState: Fe, useDebugValue: Fe, useDeferredValue: Fe, useTransition: Fe, useMutableSource: Fe, useSyncExternalStore: Fe, useId: Fe, unstable_isNewReconciler: !1 }, J1 = { readContext: ft, useCallback: function(e, t) {
    return Pt().memoizedState = [e, t === void 0 ? null : t], e;
  }, useContext: ft, useEffect: ud, useImperativeHandle: function(e, t, n) {
    return n = n != null ? n.concat([e]) : null, Uo(
      4194308,
      4,
      Zm.bind(null, t, e),
      n
    );
  }, useLayoutEffect: function(e, t) {
    return Uo(4194308, 4, e, t);
  }, useInsertionEffect: function(e, t) {
    return Uo(4, 2, e, t);
  }, useMemo: function(e, t) {
    var n = Pt();
    return t = t === void 0 ? null : t, e = e(), n.memoizedState = [e, t], e;
  }, useReducer: function(e, t, n) {
    var r = Pt();
    return t = n !== void 0 ? n(t) : t, r.memoizedState = r.baseState = t, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: e, lastRenderedState: t }, r.queue = e, e = e.dispatch = Z1.bind(null, le, e), [r.memoizedState, e];
  }, useRef: function(e) {
    var t = Pt();
    return e = { current: e }, t.memoizedState = e;
  }, useState: ld, useDebugValue: pc, useDeferredValue: function(e) {
    return Pt().memoizedState = e;
  }, useTransition: function() {
    var e = ld(!1), t = e[0];
    return e = X1.bind(null, e[1]), Pt().memoizedState = e, [t, e];
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
      Kn & 30 || Um(r, t, n);
    }
    i.memoizedState = n;
    var o = { value: n, getSnapshot: t };
    return i.queue = o, ud(Wm.bind(
      null,
      r,
      o,
      e
    ), [e]), r.flags |= 2048, Hi(9, Hm.bind(null, r, o, n, t), void 0, null), n;
  }, useId: function() {
    var e = Pt(), t = we.identifierPrefix;
    if (oe) {
      var n = Nt, r = $t;
      n = (r & ~(1 << 32 - xt(r) - 1)).toString(32) + n, t = ":" + t + "R" + n, n = Bi++, 0 < n && (t += "H" + n.toString(32)), t += ":";
    } else
      n = Y1++, t = ":" + t + "r" + n.toString(32) + ":";
    return e.memoizedState = t;
  }, unstable_isNewReconciler: !1 }, eS = {
    readContext: ft,
    useCallback: Jm,
    useContext: ft,
    useEffect: hc,
    useImperativeHandle: qm,
    useInsertionEffect: Ym,
    useLayoutEffect: Xm,
    useMemo: ey,
    useReducer: Wa,
    useRef: Qm,
    useState: function() {
      return Wa(Ui);
    },
    useDebugValue: pc,
    useDeferredValue: function(e) {
      var t = dt();
      return ty(t, ye.memoizedState, e);
    },
    useTransition: function() {
      var e = Wa(Ui)[0], t = dt().memoizedState;
      return [e, t];
    },
    useMutableSource: zm,
    useSyncExternalStore: Bm,
    useId: ny,
    unstable_isNewReconciler: !1
  }, tS = { readContext: ft, useCallback: Jm, useContext: ft, useEffect: hc, useImperativeHandle: qm, useInsertionEffect: Ym, useLayoutEffect: Xm, useMemo: ey, useReducer: Ga, useRef: Qm, useState: function() {
    return Ga(Ui);
  }, useDebugValue: pc, useDeferredValue: function(e) {
    var t = dt();
    return ye === null ? t.memoizedState = e : ty(t, ye.memoizedState, e);
  }, useTransition: function() {
    var e = Ga(Ui)[0], t = dt().memoizedState;
    return [e, t];
  }, useMutableSource: zm, useSyncExternalStore: Bm, useId: ny, unstable_isNewReconciler: !1 };
  function zr(e, t) {
    try {
      var n = "", r = t;
      do
        n += F0(r), r = r.return;
      while (r);
      var i = n;
    } catch (o) {
      i = `
Error generating stack: ` + o.message + `
` + o.stack;
    }
    return { value: e, source: t, stack: i, digest: null };
  }
  function Ka(e, t, n) {
    return { value: e, source: null, stack: n ?? null, digest: t ?? null };
  }
  function Xl(e, t) {
    try {
      console.error(t.value);
    } catch (n) {
      setTimeout(function() {
        throw n;
      });
    }
  }
  var nS = typeof WeakMap == "function" ? WeakMap : Map;
  function sy(e, t, n) {
    n = zt(-1, n), n.tag = 3, n.payload = { element: null };
    var r = t.value;
    return n.callback = function() {
      gs || (gs = !0, su = r), Xl(e, t);
    }, n;
  }
  function ay(e, t, n) {
    n = zt(-1, n), n.tag = 3;
    var r = e.type.getDerivedStateFromError;
    if (typeof r == "function") {
      var i = t.value;
      n.payload = function() {
        return r(i);
      }, n.callback = function() {
        Xl(e, t);
      };
    }
    var o = e.stateNode;
    return o !== null && typeof o.componentDidCatch == "function" && (n.callback = function() {
      Xl(e, t), typeof r != "function" && (mn === null ? mn = /* @__PURE__ */ new Set([this]) : mn.add(this));
      var s = t.stack;
      this.componentDidCatch(t.value, { componentStack: s !== null ? s : "" });
    }), n;
  }
  function cd(e, t, n) {
    var r = e.pingCache;
    if (r === null) {
      r = e.pingCache = new nS();
      var i = /* @__PURE__ */ new Set();
      r.set(t, i);
    } else
      i = r.get(t), i === void 0 && (i = /* @__PURE__ */ new Set(), r.set(t, i));
    i.has(n) || (i.add(n), e = yS.bind(null, e, t, n), t.then(e, e));
  }
  function fd(e) {
    do {
      var t;
      if ((t = e.tag === 13) && (t = e.memoizedState, t = t !== null ? t.dehydrated !== null : !0), t)
        return e;
      e = e.return;
    } while (e !== null);
    return null;
  }
  function dd(e, t, n, r, i) {
    return e.mode & 1 ? (e.flags |= 65536, e.lanes = i, e) : (e === t ? e.flags |= 65536 : (e.flags |= 128, n.flags |= 131072, n.flags &= -52805, n.tag === 1 && (n.alternate === null ? n.tag = 17 : (t = zt(-1, 1), t.tag = 2, pn(n, t, 1))), n.lanes |= 1), e);
  }
  var rS = Yt.ReactCurrentOwner, Be = !1;
  function Ve(e, t, n, r) {
    t.child = e === null ? Im(t, null, n, r) : Ir(t, e.child, n, r);
  }
  function hd(e, t, n, r, i) {
    n = n.render;
    var o = t.ref;
    return Rr(t, i), r = fc(e, t, n, r, o, i), n = dc(), e !== null && !Be ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~i, Kt(e, t, i)) : (oe && n && Ju(t), t.flags |= 1, Ve(e, t, r, i), t.child);
  }
  function pd(e, t, n, r, i) {
    if (e === null) {
      var o = n.type;
      return typeof o == "function" && !Tc(o) && o.defaultProps === void 0 && n.compare === null && n.defaultProps === void 0 ? (t.tag = 15, t.type = o, ly(e, t, o, r, i)) : (e = Ko(n.type, null, r, t, t.mode, i), e.ref = t.ref, e.return = t, t.child = e);
    }
    if (o = e.child, !(e.lanes & i)) {
      var s = o.memoizedProps;
      if (n = n.compare, n = n !== null ? n : Vi, n(s, r) && e.ref === t.ref)
        return Kt(e, t, i);
    }
    return t.flags |= 1, e = gn(o, r), e.ref = t.ref, e.return = t, t.child = e;
  }
  function ly(e, t, n, r, i) {
    if (e !== null) {
      var o = e.memoizedProps;
      if (Vi(o, r) && e.ref === t.ref)
        if (Be = !1, t.pendingProps = r = o, (e.lanes & i) !== 0)
          e.flags & 131072 && (Be = !0);
        else
          return t.lanes = e.lanes, Kt(e, t, i);
    }
    return Zl(e, t, n, r, i);
  }
  function uy(e, t, n) {
    var r = t.pendingProps, i = r.children, o = e !== null ? e.memoizedState : null;
    if (r.mode === "hidden")
      if (!(t.mode & 1))
        t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, J(Er, Qe), Qe |= n;
      else {
        if (!(n & 1073741824))
          return e = o !== null ? o.baseLanes | n : n, t.lanes = t.childLanes = 1073741824, t.memoizedState = { baseLanes: e, cachePool: null, transitions: null }, t.updateQueue = null, J(Er, Qe), Qe |= e, null;
        t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, r = o !== null ? o.baseLanes : n, J(Er, Qe), Qe |= r;
      }
    else
      o !== null ? (r = o.baseLanes | n, t.memoizedState = null) : r = n, J(Er, Qe), Qe |= r;
    return Ve(e, t, i, n), t.child;
  }
  function cy(e, t) {
    var n = t.ref;
    (e === null && n !== null || e !== null && e.ref !== n) && (t.flags |= 512, t.flags |= 2097152);
  }
  function Zl(e, t, n, r, i) {
    var o = He(n) ? Wn : Me.current;
    return o = $r(t, o), Rr(t, i), n = fc(e, t, n, r, o, i), r = dc(), e !== null && !Be ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~i, Kt(e, t, i)) : (oe && r && Ju(t), t.flags |= 1, Ve(e, t, n, i), t.child);
  }
  function md(e, t, n, r, i) {
    if (He(n)) {
      var o = !0;
      as(t);
    } else
      o = !1;
    if (Rr(t, i), t.stateNode === null)
      Ho(e, t), $m(t, n, r), Yl(t, n, r, i), r = !0;
    else if (e === null) {
      var s = t.stateNode, a = t.memoizedProps;
      s.props = a;
      var l = s.context, u = n.contextType;
      typeof u == "object" && u !== null ? u = ft(u) : (u = He(n) ? Wn : Me.current, u = $r(t, u));
      var c = n.getDerivedStateFromProps, f = typeof c == "function" || typeof s.getSnapshotBeforeUpdate == "function";
      f || typeof s.UNSAFE_componentWillReceiveProps != "function" && typeof s.componentWillReceiveProps != "function" || (a !== r || l !== u) && sd(t, s, r, u), tn = !1;
      var d = t.memoizedState;
      s.state = d, ds(t, r, s, i), l = t.memoizedState, a !== r || d !== l || Ue.current || tn ? (typeof c == "function" && (Ql(t, n, c, r), l = t.memoizedState), (a = tn || od(t, n, a, r, d, l, u)) ? (f || typeof s.UNSAFE_componentWillMount != "function" && typeof s.componentWillMount != "function" || (typeof s.componentWillMount == "function" && s.componentWillMount(), typeof s.UNSAFE_componentWillMount == "function" && s.UNSAFE_componentWillMount()), typeof s.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof s.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = r, t.memoizedState = l), s.props = r, s.state = l, s.context = u, r = a) : (typeof s.componentDidMount == "function" && (t.flags |= 4194308), r = !1);
    } else {
      s = t.stateNode, Lm(e, t), a = t.memoizedProps, u = t.type === t.elementType ? a : gt(t.type, a), s.props = u, f = t.pendingProps, d = s.context, l = n.contextType, typeof l == "object" && l !== null ? l = ft(l) : (l = He(n) ? Wn : Me.current, l = $r(t, l));
      var p = n.getDerivedStateFromProps;
      (c = typeof p == "function" || typeof s.getSnapshotBeforeUpdate == "function") || typeof s.UNSAFE_componentWillReceiveProps != "function" && typeof s.componentWillReceiveProps != "function" || (a !== f || d !== l) && sd(t, s, r, l), tn = !1, d = t.memoizedState, s.state = d, ds(t, r, s, i);
      var g = t.memoizedState;
      a !== f || d !== g || Ue.current || tn ? (typeof p == "function" && (Ql(t, n, p, r), g = t.memoizedState), (u = tn || od(t, n, u, r, d, g, l) || !1) ? (c || typeof s.UNSAFE_componentWillUpdate != "function" && typeof s.componentWillUpdate != "function" || (typeof s.componentWillUpdate == "function" && s.componentWillUpdate(r, g, l), typeof s.UNSAFE_componentWillUpdate == "function" && s.UNSAFE_componentWillUpdate(r, g, l)), typeof s.componentDidUpdate == "function" && (t.flags |= 4), typeof s.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof s.componentDidUpdate != "function" || a === e.memoizedProps && d === e.memoizedState || (t.flags |= 4), typeof s.getSnapshotBeforeUpdate != "function" || a === e.memoizedProps && d === e.memoizedState || (t.flags |= 1024), t.memoizedProps = r, t.memoizedState = g), s.props = r, s.state = g, s.context = l, r = u) : (typeof s.componentDidUpdate != "function" || a === e.memoizedProps && d === e.memoizedState || (t.flags |= 4), typeof s.getSnapshotBeforeUpdate != "function" || a === e.memoizedProps && d === e.memoizedState || (t.flags |= 1024), r = !1);
    }
    return ql(e, t, n, r, o, i);
  }
  function ql(e, t, n, r, i, o) {
    cy(e, t);
    var s = (t.flags & 128) !== 0;
    if (!r && !s)
      return i && ed(t, n, !1), Kt(e, t, o);
    r = t.stateNode, rS.current = t;
    var a = s && typeof n.getDerivedStateFromError != "function" ? null : r.render();
    return t.flags |= 1, e !== null && s ? (t.child = Ir(t, e.child, null, o), t.child = Ir(t, null, a, o)) : Ve(e, t, a, o), t.memoizedState = r.state, i && ed(t, n, !0), t.child;
  }
  function fy(e) {
    var t = e.stateNode;
    t.pendingContext ? Jf(e, t.pendingContext, t.pendingContext !== t.context) : t.context && Jf(e, t.context, !1), ac(e, t.containerInfo);
  }
  function yd(e, t, n, r, i) {
    return Nr(), tc(i), t.flags |= 256, Ve(e, t, n, r), t.child;
  }
  var Jl = { dehydrated: null, treeContext: null, retryLane: 0 };
  function eu(e) {
    return { baseLanes: e, cachePool: null, transitions: null };
  }
  function dy(e, t, n) {
    var r = t.pendingProps, i = se.current, o = !1, s = (t.flags & 128) !== 0, a;
    if ((a = s) || (a = e !== null && e.memoizedState === null ? !1 : (i & 2) !== 0), a ? (o = !0, t.flags &= -129) : (e === null || e.memoizedState !== null) && (i |= 1), J(se, i & 1), e === null)
      return Gl(t), e = t.memoizedState, e !== null && (e = e.dehydrated, e !== null) ? (t.mode & 1 ? e.data === "$!" ? t.lanes = 8 : t.lanes = 1073741824 : t.lanes = 1, null) : (s = r.children, e = r.fallback, o ? (r = t.mode, o = t.child, s = { mode: "hidden", children: s }, !(r & 1) && o !== null ? (o.childLanes = 0, o.pendingProps = s) : o = Ws(s, r, 0, null), e = Un(e, r, n, null), o.return = t, e.return = t, o.sibling = e, t.child = o, t.child.memoizedState = eu(n), t.memoizedState = Jl, e) : mc(t, s));
    if (i = e.memoizedState, i !== null && (a = i.dehydrated, a !== null))
      return iS(e, t, s, r, a, i, n);
    if (o) {
      o = r.fallback, s = t.mode, i = e.child, a = i.sibling;
      var l = { mode: "hidden", children: r.children };
      return !(s & 1) && t.child !== i ? (r = t.child, r.childLanes = 0, r.pendingProps = l, t.deletions = null) : (r = gn(i, l), r.subtreeFlags = i.subtreeFlags & 14680064), a !== null ? o = gn(a, o) : (o = Un(o, s, n, null), o.flags |= 2), o.return = t, r.return = t, r.sibling = o, t.child = r, r = o, o = t.child, s = e.child.memoizedState, s = s === null ? eu(n) : { baseLanes: s.baseLanes | n, cachePool: null, transitions: s.transitions }, o.memoizedState = s, o.childLanes = e.childLanes & ~n, t.memoizedState = Jl, r;
    }
    return o = e.child, e = o.sibling, r = gn(o, { mode: "visible", children: r.children }), !(t.mode & 1) && (r.lanes = n), r.return = t, r.sibling = null, e !== null && (n = t.deletions, n === null ? (t.deletions = [e], t.flags |= 16) : n.push(e)), t.child = r, t.memoizedState = null, r;
  }
  function mc(e, t) {
    return t = Ws({ mode: "visible", children: t }, e.mode, 0, null), t.return = e, e.child = t;
  }
  function ko(e, t, n, r) {
    return r !== null && tc(r), Ir(t, e.child, null, n), e = mc(t, t.pendingProps.children), e.flags |= 2, t.memoizedState = null, e;
  }
  function iS(e, t, n, r, i, o, s) {
    if (n)
      return t.flags & 256 ? (t.flags &= -257, r = Ka(Error(A(422))), ko(e, t, s, r)) : t.memoizedState !== null ? (t.child = e.child, t.flags |= 128, null) : (o = r.fallback, i = t.mode, r = Ws({ mode: "visible", children: r.children }, i, 0, null), o = Un(o, i, s, null), o.flags |= 2, r.return = t, o.return = t, r.sibling = o, t.child = r, t.mode & 1 && Ir(t, e.child, null, s), t.child.memoizedState = eu(s), t.memoizedState = Jl, o);
    if (!(t.mode & 1))
      return ko(e, t, s, null);
    if (i.data === "$!") {
      if (r = i.nextSibling && i.nextSibling.dataset, r)
        var a = r.dgst;
      return r = a, o = Error(A(419)), r = Ka(o, r, void 0), ko(e, t, s, r);
    }
    if (a = (s & e.childLanes) !== 0, Be || a) {
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
        i = i & (r.suspendedLanes | s) ? 0 : i, i !== 0 && i !== o.retryLane && (o.retryLane = i, Gt(e, i), wt(r, e, i, -1));
      }
      return wc(), r = Ka(Error(A(421))), ko(e, t, s, r);
    }
    return i.data === "$?" ? (t.flags |= 128, t.child = e.child, t = gS.bind(null, e), i._reactRetry = t, null) : (e = o.treeContext, Xe = hn(i.nextSibling), Je = t, oe = !0, St = null, e !== null && (at[lt++] = $t, at[lt++] = Nt, at[lt++] = Gn, $t = e.id, Nt = e.overflow, Gn = t), t = mc(t, r.children), t.flags |= 4096, t);
  }
  function gd(e, t, n) {
    e.lanes |= t;
    var r = e.alternate;
    r !== null && (r.lanes |= t), Kl(e.return, t, n);
  }
  function Qa(e, t, n, r, i) {
    var o = e.memoizedState;
    o === null ? e.memoizedState = { isBackwards: t, rendering: null, renderingStartTime: 0, last: r, tail: n, tailMode: i } : (o.isBackwards = t, o.rendering = null, o.renderingStartTime = 0, o.last = r, o.tail = n, o.tailMode = i);
  }
  function hy(e, t, n) {
    var r = t.pendingProps, i = r.revealOrder, o = r.tail;
    if (Ve(e, t, r.children, n), r = se.current, r & 2)
      r = r & 1 | 2, t.flags |= 128;
    else {
      if (e !== null && e.flags & 128)
        e:
          for (e = t.child; e !== null; ) {
            if (e.tag === 13)
              e.memoizedState !== null && gd(e, n, t);
            else if (e.tag === 19)
              gd(e, n, t);
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
            e = n.alternate, e !== null && hs(e) === null && (i = n), n = n.sibling;
          n = i, n === null ? (i = t.child, t.child = null) : (i = n.sibling, n.sibling = null), Qa(t, !1, i, n, o);
          break;
        case "backwards":
          for (n = null, i = t.child, t.child = null; i !== null; ) {
            if (e = i.alternate, e !== null && hs(e) === null) {
              t.child = i;
              break;
            }
            e = i.sibling, i.sibling = n, n = i, i = e;
          }
          Qa(t, !0, n, null, o);
          break;
        case "together":
          Qa(t, !1, null, null, void 0);
          break;
        default:
          t.memoizedState = null;
      }
    return t.child;
  }
  function Ho(e, t) {
    !(t.mode & 1) && e !== null && (e.alternate = null, t.alternate = null, t.flags |= 2);
  }
  function Kt(e, t, n) {
    if (e !== null && (t.dependencies = e.dependencies), Qn |= t.lanes, !(n & t.childLanes))
      return null;
    if (e !== null && t.child !== e.child)
      throw Error(A(153));
    if (t.child !== null) {
      for (e = t.child, n = gn(e, e.pendingProps), t.child = n, n.return = t; e.sibling !== null; )
        e = e.sibling, n = n.sibling = gn(e, e.pendingProps), n.return = t;
      n.sibling = null;
    }
    return t.child;
  }
  function oS(e, t, n) {
    switch (t.tag) {
      case 3:
        fy(t), Nr();
        break;
      case 5:
        bm(t);
        break;
      case 1:
        He(t.type) && as(t);
        break;
      case 4:
        ac(t, t.stateNode.containerInfo);
        break;
      case 10:
        var r = t.type._context, i = t.memoizedProps.value;
        J(cs, r._currentValue), r._currentValue = i;
        break;
      case 13:
        if (r = t.memoizedState, r !== null)
          return r.dehydrated !== null ? (J(se, se.current & 1), t.flags |= 128, null) : n & t.child.childLanes ? dy(e, t, n) : (J(se, se.current & 1), e = Kt(e, t, n), e !== null ? e.sibling : null);
        J(se, se.current & 1);
        break;
      case 19:
        if (r = (n & t.childLanes) !== 0, e.flags & 128) {
          if (r)
            return hy(e, t, n);
          t.flags |= 128;
        }
        if (i = t.memoizedState, i !== null && (i.rendering = null, i.tail = null, i.lastEffect = null), J(se, se.current), r)
          break;
        return null;
      case 22:
      case 23:
        return t.lanes = 0, uy(e, t, n);
    }
    return Kt(e, t, n);
  }
  var py, tu, my, yy;
  py = function(e, t) {
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
  tu = function() {
  };
  my = function(e, t, n, r) {
    var i = e.memoizedProps;
    if (i !== r) {
      e = t.stateNode, bn(Ft.current);
      var o = null;
      switch (n) {
        case "input":
          i = El(e, i), r = El(e, r), o = [];
          break;
        case "select":
          i = ue({}, i, { value: void 0 }), r = ue({}, r, { value: void 0 }), o = [];
          break;
        case "textarea":
          i = kl(e, i), r = kl(e, r), o = [];
          break;
        default:
          typeof i.onClick != "function" && typeof r.onClick == "function" && (e.onclick = os);
      }
      Al(n, r);
      var s;
      n = null;
      for (u in i)
        if (!r.hasOwnProperty(u) && i.hasOwnProperty(u) && i[u] != null)
          if (u === "style") {
            var a = i[u];
            for (s in a)
              a.hasOwnProperty(s) && (n || (n = {}), n[s] = "");
          } else
            u !== "dangerouslySetInnerHTML" && u !== "children" && u !== "suppressContentEditableWarning" && u !== "suppressHydrationWarning" && u !== "autoFocus" && (Fi.hasOwnProperty(u) ? o || (o = []) : (o = o || []).push(u, null));
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
            u === "dangerouslySetInnerHTML" ? (l = l ? l.__html : void 0, a = a ? a.__html : void 0, l != null && a !== l && (o = o || []).push(u, l)) : u === "children" ? typeof l != "string" && typeof l != "number" || (o = o || []).push(u, "" + l) : u !== "suppressContentEditableWarning" && u !== "suppressHydrationWarning" && (Fi.hasOwnProperty(u) ? (l != null && u === "onScroll" && te("scroll", e), o || a === l || (o = [])) : (o = o || []).push(u, l));
      }
      n && (o = o || []).push("style", n);
      var u = o;
      (t.updateQueue = u) && (t.flags |= 4);
    }
  };
  yy = function(e, t, n, r) {
    n !== r && (t.flags |= 4);
  };
  function ri(e, t) {
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
  function sS(e, t, n) {
    var r = t.pendingProps;
    switch (ec(t), t.tag) {
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
        return He(t.type) && ss(), Oe(t), null;
      case 3:
        return r = t.stateNode, br(), re(Ue), re(Me), uc(), r.pendingContext && (r.context = r.pendingContext, r.pendingContext = null), (e === null || e.child === null) && (Co(t) ? t.flags |= 4 : e === null || e.memoizedState.isDehydrated && !(t.flags & 256) || (t.flags |= 1024, St !== null && (uu(St), St = null))), tu(e, t), Oe(t), null;
      case 5:
        lc(t);
        var i = bn(zi.current);
        if (n = t.type, e !== null && t.stateNode != null)
          my(e, t, n, r, i), e.ref !== t.ref && (t.flags |= 512, t.flags |= 2097152);
        else {
          if (!r) {
            if (t.stateNode === null)
              throw Error(A(166));
            return Oe(t), null;
          }
          if (e = bn(Ft.current), Co(t)) {
            r = t.stateNode, n = t.type;
            var o = t.memoizedProps;
            switch (r[_t] = t, r[Ii] = o, e = (t.mode & 1) !== 0, n) {
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
                for (i = 0; i < fi.length; i++)
                  te(fi[i], r);
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
                kf(r, o), te("invalid", r);
                break;
              case "select":
                r._wrapperState = { wasMultiple: !!o.multiple }, te("invalid", r);
                break;
              case "textarea":
                Af(r, o), te("invalid", r);
            }
            Al(n, o), i = null;
            for (var s in o)
              if (o.hasOwnProperty(s)) {
                var a = o[s];
                s === "children" ? typeof a == "string" ? r.textContent !== a && (o.suppressHydrationWarning !== !0 && Eo(r.textContent, a, e), i = ["children", a]) : typeof a == "number" && r.textContent !== "" + a && (o.suppressHydrationWarning !== !0 && Eo(
                  r.textContent,
                  a,
                  e
                ), i = ["children", "" + a]) : Fi.hasOwnProperty(s) && a != null && s === "onScroll" && te("scroll", r);
              }
            switch (n) {
              case "input":
                mo(r), _f(r, o, !0);
                break;
              case "textarea":
                mo(r), Ff(r);
                break;
              case "select":
              case "option":
                break;
              default:
                typeof o.onClick == "function" && (r.onclick = os);
            }
            r = i, t.updateQueue = r, r !== null && (t.flags |= 4);
          } else {
            s = i.nodeType === 9 ? i : i.ownerDocument, e === "http://www.w3.org/1999/xhtml" && (e = Up(n)), e === "http://www.w3.org/1999/xhtml" ? n === "script" ? (e = s.createElement("div"), e.innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild)) : typeof r.is == "string" ? e = s.createElement(n, { is: r.is }) : (e = s.createElement(n), n === "select" && (s = e, r.multiple ? s.multiple = !0 : r.size && (s.size = r.size))) : e = s.createElementNS(e, n), e[_t] = t, e[Ii] = r, py(e, t, !1, !1), t.stateNode = e;
            e: {
              switch (s = Fl(n, r), n) {
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
                  for (i = 0; i < fi.length; i++)
                    te(fi[i], e);
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
                  kf(e, r), i = El(e, r), te("invalid", e);
                  break;
                case "option":
                  i = r;
                  break;
                case "select":
                  e._wrapperState = { wasMultiple: !!r.multiple }, i = ue({}, r, { value: void 0 }), te("invalid", e);
                  break;
                case "textarea":
                  Af(e, r), i = kl(e, r), te("invalid", e);
                  break;
                default:
                  i = r;
              }
              Al(n, i), a = i;
              for (o in a)
                if (a.hasOwnProperty(o)) {
                  var l = a[o];
                  o === "style" ? Gp(e, l) : o === "dangerouslySetInnerHTML" ? (l = l ? l.__html : void 0, l != null && Hp(e, l)) : o === "children" ? typeof l == "string" ? (n !== "textarea" || l !== "") && Oi(e, l) : typeof l == "number" && Oi(e, "" + l) : o !== "suppressContentEditableWarning" && o !== "suppressHydrationWarning" && o !== "autoFocus" && (Fi.hasOwnProperty(o) ? l != null && o === "onScroll" && te("scroll", e) : l != null && Iu(e, o, l, s));
                }
              switch (n) {
                case "input":
                  mo(e), _f(e, r, !1);
                  break;
                case "textarea":
                  mo(e), Ff(e);
                  break;
                case "option":
                  r.value != null && e.setAttribute("value", "" + xn(r.value));
                  break;
                case "select":
                  e.multiple = !!r.multiple, o = r.value, o != null ? Fr(e, !!r.multiple, o, !1) : r.defaultValue != null && Fr(
                    e,
                    !!r.multiple,
                    r.defaultValue,
                    !0
                  );
                  break;
                default:
                  typeof i.onClick == "function" && (e.onclick = os);
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
          yy(e, t, e.memoizedProps, r);
        else {
          if (typeof r != "string" && t.stateNode === null)
            throw Error(A(166));
          if (n = bn(zi.current), bn(Ft.current), Co(t)) {
            if (r = t.stateNode, n = t.memoizedProps, r[_t] = t, (o = r.nodeValue !== n) && (e = Je, e !== null))
              switch (e.tag) {
                case 3:
                  Eo(r.nodeValue, n, (e.mode & 1) !== 0);
                  break;
                case 5:
                  e.memoizedProps.suppressHydrationWarning !== !0 && Eo(r.nodeValue, n, (e.mode & 1) !== 0);
              }
            o && (t.flags |= 4);
          } else
            r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r), r[_t] = t, t.stateNode = r;
        }
        return Oe(t), null;
      case 13:
        if (re(se), r = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
          if (oe && Xe !== null && t.mode & 1 && !(t.flags & 128))
            Rm(), Nr(), t.flags |= 98560, o = !1;
          else if (o = Co(t), r !== null && r.dehydrated !== null) {
            if (e === null) {
              if (!o)
                throw Error(A(318));
              if (o = t.memoizedState, o = o !== null ? o.dehydrated : null, !o)
                throw Error(A(317));
              o[_t] = t;
            } else
              Nr(), !(t.flags & 128) && (t.memoizedState = null), t.flags |= 4;
            Oe(t), o = !1;
          } else
            St !== null && (uu(St), St = null), o = !0;
          if (!o)
            return t.flags & 65536 ? t : null;
        }
        return t.flags & 128 ? (t.lanes = n, t) : (r = r !== null, r !== (e !== null && e.memoizedState !== null) && r && (t.child.flags |= 8192, t.mode & 1 && (e === null || se.current & 1 ? ge === 0 && (ge = 3) : wc())), t.updateQueue !== null && (t.flags |= 4), Oe(t), null);
      case 4:
        return br(), tu(e, t), e === null && $i(t.stateNode.containerInfo), Oe(t), null;
      case 10:
        return ic(t.type._context), Oe(t), null;
      case 17:
        return He(t.type) && ss(), Oe(t), null;
      case 19:
        if (re(se), o = t.memoizedState, o === null)
          return Oe(t), null;
        if (r = (t.flags & 128) !== 0, s = o.rendering, s === null)
          if (r)
            ri(o, !1);
          else {
            if (ge !== 0 || e !== null && e.flags & 128)
              for (e = t.child; e !== null; ) {
                if (s = hs(e), s !== null) {
                  for (t.flags |= 128, ri(o, !1), r = s.updateQueue, r !== null && (t.updateQueue = r, t.flags |= 4), t.subtreeFlags = 0, r = n, n = t.child; n !== null; )
                    o = n, e = r, o.flags &= 14680066, s = o.alternate, s === null ? (o.childLanes = 0, o.lanes = e, o.child = null, o.subtreeFlags = 0, o.memoizedProps = null, o.memoizedState = null, o.updateQueue = null, o.dependencies = null, o.stateNode = null) : (o.childLanes = s.childLanes, o.lanes = s.lanes, o.child = s.child, o.subtreeFlags = 0, o.deletions = null, o.memoizedProps = s.memoizedProps, o.memoizedState = s.memoizedState, o.updateQueue = s.updateQueue, o.type = s.type, e = s.dependencies, o.dependencies = e === null ? null : { lanes: e.lanes, firstContext: e.firstContext }), n = n.sibling;
                  return J(se, se.current & 1 | 2), t.child;
                }
                e = e.sibling;
              }
            o.tail !== null && he() > Br && (t.flags |= 128, r = !0, ri(o, !1), t.lanes = 4194304);
          }
        else {
          if (!r)
            if (e = hs(s), e !== null) {
              if (t.flags |= 128, r = !0, n = e.updateQueue, n !== null && (t.updateQueue = n, t.flags |= 4), ri(o, !0), o.tail === null && o.tailMode === "hidden" && !s.alternate && !oe)
                return Oe(t), null;
            } else
              2 * he() - o.renderingStartTime > Br && n !== 1073741824 && (t.flags |= 128, r = !0, ri(o, !1), t.lanes = 4194304);
          o.isBackwards ? (s.sibling = t.child, t.child = s) : (n = o.last, n !== null ? n.sibling = s : t.child = s, o.last = s);
        }
        return o.tail !== null ? (t = o.tail, o.rendering = t, o.tail = t.sibling, o.renderingStartTime = he(), t.sibling = null, n = se.current, J(se, r ? n & 1 | 2 : n & 1), t) : (Oe(t), null);
      case 22:
      case 23:
        return xc(), r = t.memoizedState !== null, e !== null && e.memoizedState !== null !== r && (t.flags |= 8192), r && t.mode & 1 ? Qe & 1073741824 && (Oe(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : Oe(t), null;
      case 24:
        return null;
      case 25:
        return null;
    }
    throw Error(A(156, t.tag));
  }
  function aS(e, t) {
    switch (ec(t), t.tag) {
      case 1:
        return He(t.type) && ss(), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 3:
        return br(), re(Ue), re(Me), uc(), e = t.flags, e & 65536 && !(e & 128) ? (t.flags = e & -65537 | 128, t) : null;
      case 5:
        return lc(t), null;
      case 13:
        if (re(se), e = t.memoizedState, e !== null && e.dehydrated !== null) {
          if (t.alternate === null)
            throw Error(A(340));
          Nr();
        }
        return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 19:
        return re(se), null;
      case 4:
        return br(), null;
      case 10:
        return ic(t.type._context), null;
      case 22:
      case 23:
        return xc(), null;
      case 24:
        return null;
      default:
        return null;
    }
  }
  var _o = !1, De = !1, lS = typeof WeakSet == "function" ? WeakSet : Set, R = null;
  function Tr(e, t) {
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
  function nu(e, t, n) {
    try {
      n();
    } catch (r) {
      ce(e, t, r);
    }
  }
  var vd = !1;
  function uS(e, t) {
    if (Il = ns, e = xm(), qu(e)) {
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
    for (bl = { focusedElem: e, selectionRange: n }, ns = !1, R = t; R !== null; )
      if (t = R, e = t.child, (t.subtreeFlags & 1028) !== 0 && e !== null)
        e.return = t, R = e;
      else
        for (; R !== null; ) {
          t = R;
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
                    var v = g.memoizedProps, k = g.memoizedState, y = t.stateNode, h = y.getSnapshotBeforeUpdate(t.elementType === t.type ? v : gt(t.type, v), k);
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
          } catch (S) {
            ce(t, t.return, S);
          }
          if (e = t.sibling, e !== null) {
            e.return = t.return, R = e;
            break;
          }
          R = t.return;
        }
    return g = vd, vd = !1, g;
  }
  function Si(e, t, n) {
    var r = t.updateQueue;
    if (r = r !== null ? r.lastEffect : null, r !== null) {
      var i = r = r.next;
      do {
        if ((i.tag & e) === e) {
          var o = i.destroy;
          i.destroy = void 0, o !== void 0 && nu(t, n, o);
        }
        i = i.next;
      } while (i !== r);
    }
  }
  function Us(e, t) {
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
  function ru(e) {
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
  function gy(e) {
    var t = e.alternate;
    t !== null && (e.alternate = null, gy(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && (delete t[_t], delete t[Ii], delete t[Ul], delete t[W1], delete t[G1])), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
  }
  function vy(e) {
    return e.tag === 5 || e.tag === 3 || e.tag === 4;
  }
  function Sd(e) {
    e:
      for (; ; ) {
        for (; e.sibling === null; ) {
          if (e.return === null || vy(e.return))
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
  function iu(e, t, n) {
    var r = e.tag;
    if (r === 5 || r === 6)
      e = e.stateNode, t ? n.nodeType === 8 ? n.parentNode.insertBefore(e, t) : n.insertBefore(e, t) : (n.nodeType === 8 ? (t = n.parentNode, t.insertBefore(e, n)) : (t = n, t.appendChild(e)), n = n._reactRootContainer, n != null || t.onclick !== null || (t.onclick = os));
    else if (r !== 4 && (e = e.child, e !== null))
      for (iu(e, t, n), e = e.sibling; e !== null; )
        iu(e, t, n), e = e.sibling;
  }
  function ou(e, t, n) {
    var r = e.tag;
    if (r === 5 || r === 6)
      e = e.stateNode, t ? n.insertBefore(e, t) : n.appendChild(e);
    else if (r !== 4 && (e = e.child, e !== null))
      for (ou(e, t, n), e = e.sibling; e !== null; )
        ou(e, t, n), e = e.sibling;
  }
  var Ce = null, vt = !1;
  function Zt(e, t, n) {
    for (n = n.child; n !== null; )
      Sy(e, t, n), n = n.sibling;
  }
  function Sy(e, t, n) {
    if (At && typeof At.onCommitFiberUnmount == "function")
      try {
        At.onCommitFiberUnmount(Ls, n);
      } catch {
      }
    switch (n.tag) {
      case 5:
        De || Tr(n, t);
      case 6:
        var r = Ce, i = vt;
        Ce = null, Zt(e, t, n), Ce = r, vt = i, Ce !== null && (vt ? (e = Ce, n = n.stateNode, e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n)) : Ce.removeChild(n.stateNode));
        break;
      case 18:
        Ce !== null && (vt ? (e = Ce, n = n.stateNode, e.nodeType === 8 ? za(e.parentNode, n) : e.nodeType === 1 && za(e, n), ji(e)) : za(Ce, n.stateNode));
        break;
      case 4:
        r = Ce, i = vt, Ce = n.stateNode.containerInfo, vt = !0, Zt(e, t, n), Ce = r, vt = i;
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        if (!De && (r = n.updateQueue, r !== null && (r = r.lastEffect, r !== null))) {
          i = r = r.next;
          do {
            var o = i, s = o.destroy;
            o = o.tag, s !== void 0 && (o & 2 || o & 4) && nu(n, t, s), i = i.next;
          } while (i !== r);
        }
        Zt(e, t, n);
        break;
      case 1:
        if (!De && (Tr(n, t), r = n.stateNode, typeof r.componentWillUnmount == "function"))
          try {
            r.props = n.memoizedProps, r.state = n.memoizedState, r.componentWillUnmount();
          } catch (a) {
            ce(n, t, a);
          }
        Zt(e, t, n);
        break;
      case 21:
        Zt(e, t, n);
        break;
      case 22:
        n.mode & 1 ? (De = (r = De) || n.memoizedState !== null, Zt(e, t, n), De = r) : Zt(e, t, n);
        break;
      default:
        Zt(e, t, n);
    }
  }
  function xd(e) {
    var t = e.updateQueue;
    if (t !== null) {
      e.updateQueue = null;
      var n = e.stateNode;
      n === null && (n = e.stateNode = new lS()), t.forEach(function(r) {
        var i = vS.bind(null, e, r);
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
          Sy(o, s, i), Ce = null, vt = !1;
          var l = i.alternate;
          l !== null && (l.return = null), i.return = null;
        } catch (u) {
          ce(i, t, u);
        }
      }
    if (t.subtreeFlags & 12854)
      for (t = t.child; t !== null; )
        xy(t, e), t = t.sibling;
  }
  function xy(e, t) {
    var n = e.alternate, r = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        if (mt(t, e), Ct(e), r & 4) {
          try {
            Si(3, e, e.return), Us(3, e);
          } catch (v) {
            ce(e, e.return, v);
          }
          try {
            Si(5, e, e.return);
          } catch (v) {
            ce(e, e.return, v);
          }
        }
        break;
      case 1:
        mt(t, e), Ct(e), r & 512 && n !== null && Tr(n, n.return);
        break;
      case 5:
        if (mt(t, e), Ct(e), r & 512 && n !== null && Tr(n, n.return), e.flags & 32) {
          var i = e.stateNode;
          try {
            Oi(i, "");
          } catch (v) {
            ce(e, e.return, v);
          }
        }
        if (r & 4 && (i = e.stateNode, i != null)) {
          var o = e.memoizedProps, s = n !== null ? n.memoizedProps : o, a = e.type, l = e.updateQueue;
          if (e.updateQueue = null, l !== null)
            try {
              a === "input" && o.type === "radio" && o.name != null && zp(i, o), Fl(a, s);
              var u = Fl(a, o);
              for (s = 0; s < l.length; s += 2) {
                var c = l[s], f = l[s + 1];
                c === "style" ? Gp(i, f) : c === "dangerouslySetInnerHTML" ? Hp(i, f) : c === "children" ? Oi(i, f) : Iu(i, c, f, u);
              }
              switch (a) {
                case "input":
                  Cl(i, o);
                  break;
                case "textarea":
                  Bp(i, o);
                  break;
                case "select":
                  var d = i._wrapperState.wasMultiple;
                  i._wrapperState.wasMultiple = !!o.multiple;
                  var p = o.value;
                  p != null ? Fr(i, !!o.multiple, p, !1) : d !== !!o.multiple && (o.defaultValue != null ? Fr(
                    i,
                    !!o.multiple,
                    o.defaultValue,
                    !0
                  ) : Fr(i, !!o.multiple, o.multiple ? [] : "", !1));
              }
              i[Ii] = o;
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
            ji(t.containerInfo);
          } catch (v) {
            ce(e, e.return, v);
          }
        break;
      case 4:
        mt(t, e), Ct(e);
        break;
      case 13:
        mt(t, e), Ct(e), i = e.child, i.flags & 8192 && (o = i.memoizedState !== null, i.stateNode.isHidden = o, !o || i.alternate !== null && i.alternate.memoizedState !== null || (vc = he())), r & 4 && xd(e);
        break;
      case 22:
        if (c = n !== null && n.memoizedState !== null, e.mode & 1 ? (De = (u = De) || c, mt(t, e), De = u) : mt(t, e), Ct(e), r & 8192) {
          if (u = e.memoizedState !== null, (e.stateNode.isHidden = u) && !c && e.mode & 1)
            for (R = e, c = e.child; c !== null; ) {
              for (f = R = c; R !== null; ) {
                switch (d = R, p = d.child, d.tag) {
                  case 0:
                  case 11:
                  case 14:
                  case 15:
                    Si(4, d, d.return);
                    break;
                  case 1:
                    Tr(d, d.return);
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
                    Tr(d, d.return);
                    break;
                  case 22:
                    if (d.memoizedState !== null) {
                      Td(f);
                      continue;
                    }
                }
                p !== null ? (p.return = d, R = p) : Td(f);
              }
              c = c.sibling;
            }
          e:
            for (c = null, f = e; ; ) {
              if (f.tag === 5) {
                if (c === null) {
                  c = f;
                  try {
                    i = f.stateNode, u ? (o = i.style, typeof o.setProperty == "function" ? o.setProperty("display", "none", "important") : o.display = "none") : (a = f.stateNode, l = f.memoizedProps.style, s = l != null && l.hasOwnProperty("display") ? l.display : null, a.style.display = Wp("display", s));
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
        mt(t, e), Ct(e), r & 4 && xd(e);
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
            if (vy(n)) {
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
            r.flags & 32 && (Oi(i, ""), r.flags &= -33);
            var o = Sd(e);
            ou(e, o, i);
            break;
          case 3:
          case 4:
            var s = r.stateNode.containerInfo, a = Sd(e);
            iu(e, a, s);
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
  function cS(e, t, n) {
    R = e, wy(e);
  }
  function wy(e, t, n) {
    for (var r = (e.mode & 1) !== 0; R !== null; ) {
      var i = R, o = i.child;
      if (i.tag === 22 && r) {
        var s = i.memoizedState !== null || _o;
        if (!s) {
          var a = i.alternate, l = a !== null && a.memoizedState !== null || De;
          a = _o;
          var u = De;
          if (_o = s, (De = l) && !u)
            for (R = i; R !== null; )
              s = R, l = s.child, s.tag === 22 && s.memoizedState !== null ? Ed(i) : l !== null ? (l.return = s, R = l) : Ed(i);
          for (; o !== null; )
            R = o, wy(o), o = o.sibling;
          R = i, _o = a, De = u;
        }
        wd(e);
      } else
        i.subtreeFlags & 8772 && o !== null ? (o.return = i, R = o) : wd(e);
    }
  }
  function wd(e) {
    for (; R !== null; ) {
      var t = R;
      if (t.flags & 8772) {
        var n = t.alternate;
        try {
          if (t.flags & 8772)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                De || Us(5, t);
                break;
              case 1:
                var r = t.stateNode;
                if (t.flags & 4 && !De)
                  if (n === null)
                    r.componentDidMount();
                  else {
                    var i = t.elementType === t.type ? n.memoizedProps : gt(t.type, n.memoizedProps);
                    r.componentDidUpdate(i, n.memoizedState, r.__reactInternalSnapshotBeforeUpdate);
                  }
                var o = t.updateQueue;
                o !== null && id(t, o, r);
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
                  id(t, s, n);
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
                      f !== null && ji(f);
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
          De || t.flags & 512 && ru(t);
        } catch (d) {
          ce(t, t.return, d);
        }
      }
      if (t === e) {
        R = null;
        break;
      }
      if (n = t.sibling, n !== null) {
        n.return = t.return, R = n;
        break;
      }
      R = t.return;
    }
  }
  function Td(e) {
    for (; R !== null; ) {
      var t = R;
      if (t === e) {
        R = null;
        break;
      }
      var n = t.sibling;
      if (n !== null) {
        n.return = t.return, R = n;
        break;
      }
      R = t.return;
    }
  }
  function Ed(e) {
    for (; R !== null; ) {
      var t = R;
      try {
        switch (t.tag) {
          case 0:
          case 11:
          case 15:
            var n = t.return;
            try {
              Us(4, t);
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
              ru(t);
            } catch (l) {
              ce(t, o, l);
            }
            break;
          case 5:
            var s = t.return;
            try {
              ru(t);
            } catch (l) {
              ce(t, s, l);
            }
        }
      } catch (l) {
        ce(t, t.return, l);
      }
      if (t === e) {
        R = null;
        break;
      }
      var a = t.sibling;
      if (a !== null) {
        a.return = t.return, R = a;
        break;
      }
      R = t.return;
    }
  }
  var fS = Math.ceil, ys = Yt.ReactCurrentDispatcher, yc = Yt.ReactCurrentOwner, ct = Yt.ReactCurrentBatchConfig, H = 0, we = null, me = null, ke = 0, Qe = 0, Er = kn(0), ge = 0, Wi = null, Qn = 0, Hs = 0, gc = 0, xi = null, ze = null, vc = 0, Br = 1 / 0, jt = null, gs = !1, su = null, mn = null, Ao = !1, ln = null, vs = 0, wi = 0, au = null, Wo = -1, Go = 0;
  function $e() {
    return H & 6 ? he() : Wo !== -1 ? Wo : Wo = he();
  }
  function yn(e) {
    return e.mode & 1 ? H & 2 && ke !== 0 ? ke & -ke : Q1.transition !== null ? (Go === 0 && (Go = im()), Go) : (e = Y, e !== 0 || (e = window.event, e = e === void 0 ? 16 : fm(e.type)), e) : 1;
  }
  function wt(e, t, n, r) {
    if (50 < wi)
      throw wi = 0, au = null, Error(A(185));
    Ji(e, n, r), (!(H & 2) || e !== we) && (e === we && (!(H & 2) && (Hs |= n), ge === 4 && sn(e, ke)), We(e, r), n === 1 && H === 0 && !(t.mode & 1) && (Br = he() + 500, bs && _n()));
  }
  function We(e, t) {
    var n = e.callbackNode;
    Q0(e, t);
    var r = ts(e, e === we ? ke : 0);
    if (r === 0)
      n !== null && Mf(n), e.callbackNode = null, e.callbackPriority = 0;
    else if (t = r & -r, e.callbackPriority !== t) {
      if (n != null && Mf(n), t === 1)
        e.tag === 0 ? K1(Cd.bind(null, e)) : Om(Cd.bind(null, e)), U1(function() {
          !(H & 6) && _n();
        }), n = null;
      else {
        switch (om(r)) {
          case 1:
            n = Hu;
            break;
          case 4:
            n = nm;
            break;
          case 16:
            n = es;
            break;
          case 536870912:
            n = rm;
            break;
          default:
            n = es;
        }
        n = Fy(n, Ty.bind(null, e));
      }
      e.callbackPriority = t, e.callbackNode = n;
    }
  }
  function Ty(e, t) {
    if (Wo = -1, Go = 0, H & 6)
      throw Error(A(327));
    var n = e.callbackNode;
    if (jr() && e.callbackNode !== n)
      return null;
    var r = ts(e, e === we ? ke : 0);
    if (r === 0)
      return null;
    if (r & 30 || r & e.expiredLanes || t)
      t = Ss(e, r);
    else {
      t = r;
      var i = H;
      H |= 2;
      var o = Cy();
      (we !== e || ke !== t) && (jt = null, Br = he() + 500, Bn(e, t));
      do
        try {
          pS();
          break;
        } catch (a) {
          Ey(e, a);
        }
      while (1);
      rc(), ys.current = o, H = i, me !== null ? t = 0 : (we = null, ke = 0, t = ge);
    }
    if (t !== 0) {
      if (t === 2 && (i = jl(e), i !== 0 && (r = i, t = lu(e, i))), t === 1)
        throw n = Wi, Bn(e, 0), sn(e, r), We(e, he()), n;
      if (t === 6)
        sn(e, r);
      else {
        if (i = e.current.alternate, !(r & 30) && !dS(i) && (t = Ss(e, r), t === 2 && (o = jl(e), o !== 0 && (r = o, t = lu(e, o))), t === 1))
          throw n = Wi, Bn(e, 0), sn(e, r), We(e, he()), n;
        switch (e.finishedWork = i, e.finishedLanes = r, t) {
          case 0:
          case 1:
            throw Error(A(345));
          case 2:
            jn(e, ze, jt);
            break;
          case 3:
            if (sn(e, r), (r & 130023424) === r && (t = vc + 500 - he(), 10 < t)) {
              if (ts(e, 0) !== 0)
                break;
              if (i = e.suspendedLanes, (i & r) !== r) {
                $e(), e.pingedLanes |= e.suspendedLanes & i;
                break;
              }
              e.timeoutHandle = Bl(jn.bind(null, e, ze, jt), t);
              break;
            }
            jn(e, ze, jt);
            break;
          case 4:
            if (sn(e, r), (r & 4194240) === r)
              break;
            for (t = e.eventTimes, i = -1; 0 < r; ) {
              var s = 31 - xt(r);
              o = 1 << s, s = t[s], s > i && (i = s), r &= ~o;
            }
            if (r = i, r = he() - r, r = (120 > r ? 120 : 480 > r ? 480 : 1080 > r ? 1080 : 1920 > r ? 1920 : 3e3 > r ? 3e3 : 4320 > r ? 4320 : 1960 * fS(r / 1960)) - r, 10 < r) {
              e.timeoutHandle = Bl(jn.bind(null, e, ze, jt), r);
              break;
            }
            jn(e, ze, jt);
            break;
          case 5:
            jn(e, ze, jt);
            break;
          default:
            throw Error(A(329));
        }
      }
    }
    return We(e, he()), e.callbackNode === n ? Ty.bind(null, e) : null;
  }
  function lu(e, t) {
    var n = xi;
    return e.current.memoizedState.isDehydrated && (Bn(e, t).flags |= 256), e = Ss(e, t), e !== 2 && (t = ze, ze = n, t !== null && uu(t)), e;
  }
  function uu(e) {
    ze === null ? ze = e : ze.push.apply(ze, e);
  }
  function dS(e) {
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
  function sn(e, t) {
    for (t &= ~gc, t &= ~Hs, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes; 0 < t; ) {
      var n = 31 - xt(t), r = 1 << n;
      e[n] = -1, t &= ~r;
    }
  }
  function Cd(e) {
    if (H & 6)
      throw Error(A(327));
    jr();
    var t = ts(e, 0);
    if (!(t & 1))
      return We(e, he()), null;
    var n = Ss(e, t);
    if (e.tag !== 0 && n === 2) {
      var r = jl(e);
      r !== 0 && (t = r, n = lu(e, r));
    }
    if (n === 1)
      throw n = Wi, Bn(e, 0), sn(e, t), We(e, he()), n;
    if (n === 6)
      throw Error(A(345));
    return e.finishedWork = e.current.alternate, e.finishedLanes = t, jn(e, ze, jt), We(e, he()), null;
  }
  function Sc(e, t) {
    var n = H;
    H |= 1;
    try {
      return e(t);
    } finally {
      H = n, H === 0 && (Br = he() + 500, bs && _n());
    }
  }
  function Yn(e) {
    ln !== null && ln.tag === 0 && !(H & 6) && jr();
    var t = H;
    H |= 1;
    var n = ct.transition, r = Y;
    try {
      if (ct.transition = null, Y = 1, e)
        return e();
    } finally {
      Y = r, ct.transition = n, H = t, !(H & 6) && _n();
    }
  }
  function xc() {
    Qe = Er.current, re(Er);
  }
  function Bn(e, t) {
    e.finishedWork = null, e.finishedLanes = 0;
    var n = e.timeoutHandle;
    if (n !== -1 && (e.timeoutHandle = -1, B1(n)), me !== null)
      for (n = me.return; n !== null; ) {
        var r = n;
        switch (ec(r), r.tag) {
          case 1:
            r = r.type.childContextTypes, r != null && ss();
            break;
          case 3:
            br(), re(Ue), re(Me), uc();
            break;
          case 5:
            lc(r);
            break;
          case 4:
            br();
            break;
          case 13:
            re(se);
            break;
          case 19:
            re(se);
            break;
          case 10:
            ic(r.type._context);
            break;
          case 22:
          case 23:
            xc();
        }
        n = n.return;
      }
    if (we = e, me = e = gn(e.current, null), ke = Qe = t, ge = 0, Wi = null, gc = Hs = Qn = 0, ze = xi = null, In !== null) {
      for (t = 0; t < In.length; t++)
        if (n = In[t], r = n.interleaved, r !== null) {
          n.interleaved = null;
          var i = r.next, o = n.pending;
          if (o !== null) {
            var s = o.next;
            o.next = i, r.next = s;
          }
          n.pending = r;
        }
      In = null;
    }
    return e;
  }
  function Ey(e, t) {
    do {
      var n = me;
      try {
        if (rc(), Bo.current = ms, ps) {
          for (var r = le.memoizedState; r !== null; ) {
            var i = r.queue;
            i !== null && (i.pending = null), r = r.next;
          }
          ps = !1;
        }
        if (Kn = 0, xe = ye = le = null, vi = !1, Bi = 0, yc.current = null, n === null || n.return === null) {
          ge = 1, Wi = t, me = null;
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
            var p = fd(s);
            if (p !== null) {
              p.flags &= -257, dd(p, s, a, o, t), p.mode & 1 && cd(o, u, t), t = p, l = u;
              var g = t.updateQueue;
              if (g === null) {
                var v = /* @__PURE__ */ new Set();
                v.add(l), t.updateQueue = v;
              } else
                g.add(l);
              break e;
            } else {
              if (!(t & 1)) {
                cd(o, u, t), wc();
                break e;
              }
              l = Error(A(426));
            }
          } else if (oe && a.mode & 1) {
            var k = fd(s);
            if (k !== null) {
              !(k.flags & 65536) && (k.flags |= 256), dd(k, s, a, o, t), tc(zr(l, a));
              break e;
            }
          }
          o = l = zr(l, a), ge !== 4 && (ge = 2), xi === null ? xi = [o] : xi.push(o), o = s;
          do {
            switch (o.tag) {
              case 3:
                o.flags |= 65536, t &= -t, o.lanes |= t;
                var y = sy(o, l, t);
                rd(o, y);
                break e;
              case 1:
                a = l;
                var h = o.type, m = o.stateNode;
                if (!(o.flags & 128) && (typeof h.getDerivedStateFromError == "function" || m !== null && typeof m.componentDidCatch == "function" && (mn === null || !mn.has(m)))) {
                  o.flags |= 65536, t &= -t, o.lanes |= t;
                  var S = ay(o, a, t);
                  rd(o, S);
                  break e;
                }
            }
            o = o.return;
          } while (o !== null);
        }
        ky(n);
      } catch (C) {
        t = C, me === n && n !== null && (me = n = n.return);
        continue;
      }
      break;
    } while (1);
  }
  function Cy() {
    var e = ys.current;
    return ys.current = ms, e === null ? ms : e;
  }
  function wc() {
    (ge === 0 || ge === 3 || ge === 2) && (ge = 4), we === null || !(Qn & 268435455) && !(Hs & 268435455) || sn(we, ke);
  }
  function Ss(e, t) {
    var n = H;
    H |= 2;
    var r = Cy();
    (we !== e || ke !== t) && (jt = null, Bn(e, t));
    do
      try {
        hS();
        break;
      } catch (i) {
        Ey(e, i);
      }
    while (1);
    if (rc(), H = n, ys.current = r, me !== null)
      throw Error(A(261));
    return we = null, ke = 0, ge;
  }
  function hS() {
    for (; me !== null; )
      Py(me);
  }
  function pS() {
    for (; me !== null && !I0(); )
      Py(me);
  }
  function Py(e) {
    var t = Ay(e.alternate, e, Qe);
    e.memoizedProps = e.pendingProps, t === null ? ky(e) : me = t, yc.current = null;
  }
  function ky(e) {
    var t = e;
    do {
      var n = t.alternate;
      if (e = t.return, t.flags & 32768) {
        if (n = aS(n, t), n !== null) {
          n.flags &= 32767, me = n;
          return;
        }
        if (e !== null)
          e.flags |= 32768, e.subtreeFlags = 0, e.deletions = null;
        else {
          ge = 6, me = null;
          return;
        }
      } else if (n = sS(n, t, Qe), n !== null) {
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
  function jn(e, t, n) {
    var r = Y, i = ct.transition;
    try {
      ct.transition = null, Y = 1, mS(e, t, n, r);
    } finally {
      ct.transition = i, Y = r;
    }
    return null;
  }
  function mS(e, t, n, r) {
    do
      jr();
    while (ln !== null);
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
    if (Y0(e, o), e === we && (me = we = null, ke = 0), !(n.subtreeFlags & 2064) && !(n.flags & 2064) || Ao || (Ao = !0, Fy(es, function() {
      return jr(), null;
    })), o = (n.flags & 15990) !== 0, n.subtreeFlags & 15990 || o) {
      o = ct.transition, ct.transition = null;
      var s = Y;
      Y = 1;
      var a = H;
      H |= 4, yc.current = null, uS(e, n), xy(n, e), L1(bl), ns = !!Il, bl = Il = null, e.current = n, cS(n), b0(), H = a, Y = s, ct.transition = o;
    } else
      e.current = n;
    if (Ao && (Ao = !1, ln = e, vs = i), o = e.pendingLanes, o === 0 && (mn = null), U0(n.stateNode), We(e, he()), t !== null)
      for (r = e.onRecoverableError, n = 0; n < t.length; n++)
        i = t[n], r(i.value, { componentStack: i.stack, digest: i.digest });
    if (gs)
      throw gs = !1, e = su, su = null, e;
    return vs & 1 && e.tag !== 0 && jr(), o = e.pendingLanes, o & 1 ? e === au ? wi++ : (wi = 0, au = e) : wi = 0, _n(), null;
  }
  function jr() {
    if (ln !== null) {
      var e = om(vs), t = ct.transition, n = Y;
      try {
        if (ct.transition = null, Y = 16 > e ? 16 : e, ln === null)
          var r = !1;
        else {
          if (e = ln, ln = null, vs = 0, H & 6)
            throw Error(A(331));
          var i = H;
          for (H |= 4, R = e.current; R !== null; ) {
            var o = R, s = o.child;
            if (R.flags & 16) {
              var a = o.deletions;
              if (a !== null) {
                for (var l = 0; l < a.length; l++) {
                  var u = a[l];
                  for (R = u; R !== null; ) {
                    var c = R;
                    switch (c.tag) {
                      case 0:
                      case 11:
                      case 15:
                        Si(8, c, o);
                    }
                    var f = c.child;
                    if (f !== null)
                      f.return = c, R = f;
                    else
                      for (; R !== null; ) {
                        c = R;
                        var d = c.sibling, p = c.return;
                        if (gy(c), c === u) {
                          R = null;
                          break;
                        }
                        if (d !== null) {
                          d.return = p, R = d;
                          break;
                        }
                        R = p;
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
                R = o;
              }
            }
            if (o.subtreeFlags & 2064 && s !== null)
              s.return = o, R = s;
            else
              e:
                for (; R !== null; ) {
                  if (o = R, o.flags & 2048)
                    switch (o.tag) {
                      case 0:
                      case 11:
                      case 15:
                        Si(9, o, o.return);
                    }
                  var y = o.sibling;
                  if (y !== null) {
                    y.return = o.return, R = y;
                    break e;
                  }
                  R = o.return;
                }
          }
          var h = e.current;
          for (R = h; R !== null; ) {
            s = R;
            var m = s.child;
            if (s.subtreeFlags & 2064 && m !== null)
              m.return = s, R = m;
            else
              e:
                for (s = h; R !== null; ) {
                  if (a = R, a.flags & 2048)
                    try {
                      switch (a.tag) {
                        case 0:
                        case 11:
                        case 15:
                          Us(9, a);
                      }
                    } catch (C) {
                      ce(a, a.return, C);
                    }
                  if (a === s) {
                    R = null;
                    break e;
                  }
                  var S = a.sibling;
                  if (S !== null) {
                    S.return = a.return, R = S;
                    break e;
                  }
                  R = a.return;
                }
          }
          if (H = i, _n(), At && typeof At.onPostCommitFiberRoot == "function")
            try {
              At.onPostCommitFiberRoot(Ls, e);
            } catch {
            }
          r = !0;
        }
        return r;
      } finally {
        Y = n, ct.transition = t;
      }
    }
    return !1;
  }
  function Pd(e, t, n) {
    t = zr(n, t), t = sy(e, t, 1), e = pn(e, t, 1), t = $e(), e !== null && (Ji(e, 1, t), We(e, t));
  }
  function ce(e, t, n) {
    if (e.tag === 3)
      Pd(e, e, n);
    else
      for (; t !== null; ) {
        if (t.tag === 3) {
          Pd(t, e, n);
          break;
        } else if (t.tag === 1) {
          var r = t.stateNode;
          if (typeof t.type.getDerivedStateFromError == "function" || typeof r.componentDidCatch == "function" && (mn === null || !mn.has(r))) {
            e = zr(n, e), e = ay(t, e, 1), t = pn(t, e, 1), e = $e(), t !== null && (Ji(t, 1, e), We(t, e));
            break;
          }
        }
        t = t.return;
      }
  }
  function yS(e, t, n) {
    var r = e.pingCache;
    r !== null && r.delete(t), t = $e(), e.pingedLanes |= e.suspendedLanes & n, we === e && (ke & n) === n && (ge === 4 || ge === 3 && (ke & 130023424) === ke && 500 > he() - vc ? Bn(e, 0) : gc |= n), We(e, t);
  }
  function _y(e, t) {
    t === 0 && (e.mode & 1 ? (t = vo, vo <<= 1, !(vo & 130023424) && (vo = 4194304)) : t = 1);
    var n = $e();
    e = Gt(e, t), e !== null && (Ji(e, t, n), We(e, n));
  }
  function gS(e) {
    var t = e.memoizedState, n = 0;
    t !== null && (n = t.retryLane), _y(e, n);
  }
  function vS(e, t) {
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
    r !== null && r.delete(t), _y(e, n);
  }
  var Ay;
  Ay = function(e, t, n) {
    if (e !== null)
      if (e.memoizedProps !== t.pendingProps || Ue.current)
        Be = !0;
      else {
        if (!(e.lanes & n) && !(t.flags & 128))
          return Be = !1, oS(e, t, n);
        Be = !!(e.flags & 131072);
      }
    else
      Be = !1, oe && t.flags & 1048576 && Dm(t, us, t.index);
    switch (t.lanes = 0, t.tag) {
      case 2:
        var r = t.type;
        Ho(e, t), e = t.pendingProps;
        var i = $r(t, Me.current);
        Rr(t, n), i = fc(null, t, r, e, i, n);
        var o = dc();
        return t.flags |= 1, typeof i == "object" && i !== null && typeof i.render == "function" && i.$$typeof === void 0 ? (t.tag = 1, t.memoizedState = null, t.updateQueue = null, He(r) ? (o = !0, as(t)) : o = !1, t.memoizedState = i.state !== null && i.state !== void 0 ? i.state : null, sc(t), i.updater = zs, t.stateNode = i, i._reactInternals = t, Yl(t, r, e, n), t = ql(null, t, r, !0, o, n)) : (t.tag = 0, oe && o && Ju(t), Ve(null, t, i, n), t = t.child), t;
      case 16:
        r = t.elementType;
        e: {
          switch (Ho(e, t), e = t.pendingProps, i = r._init, r = i(r._payload), t.type = r, i = t.tag = xS(r), e = gt(r, e), i) {
            case 0:
              t = Zl(null, t, r, e, n);
              break e;
            case 1:
              t = md(null, t, r, e, n);
              break e;
            case 11:
              t = hd(null, t, r, e, n);
              break e;
            case 14:
              t = pd(null, t, r, gt(r.type, e), n);
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
        return r = t.type, i = t.pendingProps, i = t.elementType === r ? i : gt(r, i), Zl(e, t, r, i, n);
      case 1:
        return r = t.type, i = t.pendingProps, i = t.elementType === r ? i : gt(r, i), md(e, t, r, i, n);
      case 3:
        e: {
          if (fy(t), e === null)
            throw Error(A(387));
          r = t.pendingProps, o = t.memoizedState, i = o.element, Lm(e, t), ds(t, r, null, n);
          var s = t.memoizedState;
          if (r = s.element, o.isDehydrated)
            if (o = { element: r, isDehydrated: !1, cache: s.cache, pendingSuspenseBoundaries: s.pendingSuspenseBoundaries, transitions: s.transitions }, t.updateQueue.baseState = o, t.memoizedState = o, t.flags & 256) {
              i = zr(Error(A(423)), t), t = yd(e, t, r, n, i);
              break e;
            } else if (r !== i) {
              i = zr(Error(A(424)), t), t = yd(e, t, r, n, i);
              break e;
            } else
              for (Xe = hn(t.stateNode.containerInfo.firstChild), Je = t, oe = !0, St = null, n = Im(t, null, r, n), t.child = n; n; )
                n.flags = n.flags & -3 | 4096, n = n.sibling;
          else {
            if (Nr(), r === i) {
              t = Kt(e, t, n);
              break e;
            }
            Ve(e, t, r, n);
          }
          t = t.child;
        }
        return t;
      case 5:
        return bm(t), e === null && Gl(t), r = t.type, i = t.pendingProps, o = e !== null ? e.memoizedProps : null, s = i.children, zl(r, i) ? s = null : o !== null && zl(r, o) && (t.flags |= 32), cy(e, t), Ve(e, t, s, n), t.child;
      case 6:
        return e === null && Gl(t), null;
      case 13:
        return dy(e, t, n);
      case 4:
        return ac(t, t.stateNode.containerInfo), r = t.pendingProps, e === null ? t.child = Ir(t, null, r, n) : Ve(e, t, r, n), t.child;
      case 11:
        return r = t.type, i = t.pendingProps, i = t.elementType === r ? i : gt(r, i), hd(e, t, r, i, n);
      case 7:
        return Ve(e, t, t.pendingProps, n), t.child;
      case 8:
        return Ve(e, t, t.pendingProps.children, n), t.child;
      case 12:
        return Ve(e, t, t.pendingProps.children, n), t.child;
      case 10:
        e: {
          if (r = t.type._context, i = t.pendingProps, o = t.memoizedProps, s = i.value, J(cs, r._currentValue), r._currentValue = s, o !== null)
            if (Tt(o.value, s)) {
              if (o.children === i.children && !Ue.current) {
                t = Kt(e, t, n);
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
                        l = zt(-1, n & -n), l.tag = 2;
                        var u = o.updateQueue;
                        if (u !== null) {
                          u = u.shared;
                          var c = u.pending;
                          c === null ? l.next = l : (l.next = c.next, c.next = l), u.pending = l;
                        }
                      }
                      o.lanes |= n, l = o.alternate, l !== null && (l.lanes |= n), Kl(
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
                  s.lanes |= n, a = s.alternate, a !== null && (a.lanes |= n), Kl(s, n, t), s = o.sibling;
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
        return i = t.type, r = t.pendingProps.children, Rr(t, n), i = ft(i), r = r(i), t.flags |= 1, Ve(e, t, r, n), t.child;
      case 14:
        return r = t.type, i = gt(r, t.pendingProps), i = gt(r.type, i), pd(e, t, r, i, n);
      case 15:
        return ly(e, t, t.type, t.pendingProps, n);
      case 17:
        return r = t.type, i = t.pendingProps, i = t.elementType === r ? i : gt(r, i), Ho(e, t), t.tag = 1, He(r) ? (e = !0, as(t)) : e = !1, Rr(t, n), $m(t, r, i), Yl(t, r, i, n), ql(null, t, r, !0, e, n);
      case 19:
        return hy(e, t, n);
      case 22:
        return uy(e, t, n);
    }
    throw Error(A(156, t.tag));
  };
  function Fy(e, t) {
    return tm(e, t);
  }
  function SS(e, t, n, r) {
    this.tag = e, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = r, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function ut(e, t, n, r) {
    return new SS(e, t, n, r);
  }
  function Tc(e) {
    return e = e.prototype, !(!e || !e.isReactComponent);
  }
  function xS(e) {
    if (typeof e == "function")
      return Tc(e) ? 1 : 0;
    if (e != null) {
      if (e = e.$$typeof, e === zu)
        return 11;
      if (e === Bu)
        return 14;
    }
    return 2;
  }
  function gn(e, t) {
    var n = e.alternate;
    return n === null ? (n = ut(e.tag, t, e.key, e.mode), n.elementType = e.elementType, n.type = e.type, n.stateNode = e.stateNode, n.alternate = e, e.alternate = n) : (n.pendingProps = t, n.type = e.type, n.flags = 0, n.subtreeFlags = 0, n.deletions = null), n.flags = e.flags & 14680064, n.childLanes = e.childLanes, n.lanes = e.lanes, n.child = e.child, n.memoizedProps = e.memoizedProps, n.memoizedState = e.memoizedState, n.updateQueue = e.updateQueue, t = e.dependencies, n.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }, n.sibling = e.sibling, n.index = e.index, n.ref = e.ref, n;
  }
  function Ko(e, t, n, r, i, o) {
    var s = 2;
    if (r = e, typeof e == "function")
      Tc(e) && (s = 1);
    else if (typeof e == "string")
      s = 5;
    else
      e:
        switch (e) {
          case hr:
            return Un(n.children, i, o, t);
          case bu:
            s = 8, i |= 8;
            break;
          case Sl:
            return e = ut(12, n, t, i | 2), e.elementType = Sl, e.lanes = o, e;
          case xl:
            return e = ut(13, n, t, i), e.elementType = xl, e.lanes = o, e;
          case wl:
            return e = ut(19, n, t, i), e.elementType = wl, e.lanes = o, e;
          case Np:
            return Ws(n, i, o, t);
          default:
            if (typeof e == "object" && e !== null)
              switch (e.$$typeof) {
                case Vp:
                  s = 10;
                  break e;
                case $p:
                  s = 9;
                  break e;
                case zu:
                  s = 11;
                  break e;
                case Bu:
                  s = 14;
                  break e;
                case en:
                  s = 16, r = null;
                  break e;
              }
            throw Error(A(130, e == null ? e : typeof e, ""));
        }
    return t = ut(s, n, t, i), t.elementType = e, t.type = r, t.lanes = o, t;
  }
  function Un(e, t, n, r) {
    return e = ut(7, e, r, t), e.lanes = n, e;
  }
  function Ws(e, t, n, r) {
    return e = ut(22, e, r, t), e.elementType = Np, e.lanes = n, e.stateNode = { isHidden: !1 }, e;
  }
  function Ya(e, t, n) {
    return e = ut(6, e, null, t), e.lanes = n, e;
  }
  function Xa(e, t, n) {
    return t = ut(4, e.children !== null ? e.children : [], e.key, t), t.lanes = n, t.stateNode = { containerInfo: e.containerInfo, pendingChildren: null, implementation: e.implementation }, t;
  }
  function wS(e, t, n, r, i) {
    this.tag = t, this.containerInfo = e, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = Oa(0), this.expirationTimes = Oa(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Oa(0), this.identifierPrefix = r, this.onRecoverableError = i, this.mutableSourceEagerHydrationData = null;
  }
  function Ec(e, t, n, r, i, o, s, a, l) {
    return e = new wS(e, t, n, a, l), t === 1 ? (t = 1, o === !0 && (t |= 8)) : t = 0, o = ut(3, null, null, t), e.current = o, o.stateNode = e, o.memoizedState = { element: r, isDehydrated: n, cache: null, transitions: null, pendingSuspenseBoundaries: null }, sc(o), e;
  }
  function TS(e, t, n) {
    var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return { $$typeof: dr, key: r == null ? null : "" + r, children: e, containerInfo: t, implementation: n };
  }
  function Oy(e) {
    if (!e)
      return wn;
    e = e._reactInternals;
    e: {
      if (Jn(e) !== e || e.tag !== 1)
        throw Error(A(170));
      var t = e;
      do {
        switch (t.tag) {
          case 3:
            t = t.stateNode.context;
            break e;
          case 1:
            if (He(t.type)) {
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
      if (He(n))
        return Fm(e, n, t);
    }
    return t;
  }
  function Dy(e, t, n, r, i, o, s, a, l) {
    return e = Ec(n, r, !0, e, i, o, s, a, l), e.context = Oy(null), n = e.current, r = $e(), i = yn(n), o = zt(r, i), o.callback = t ?? null, pn(n, o, i), e.current.lanes = i, Ji(e, i, r), We(e, r), e;
  }
  function Gs(e, t, n, r) {
    var i = t.current, o = $e(), s = yn(i);
    return n = Oy(n), t.context === null ? t.context = n : t.pendingContext = n, t = zt(o, s), t.payload = { element: e }, r = r === void 0 ? null : r, r !== null && (t.callback = r), e = pn(i, t, s), e !== null && (wt(e, i, s, o), zo(e, i, s)), s;
  }
  function xs(e) {
    if (e = e.current, !e.child)
      return null;
    switch (e.child.tag) {
      case 5:
        return e.child.stateNode;
      default:
        return e.child.stateNode;
    }
  }
  function kd(e, t) {
    if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
      var n = e.retryLane;
      e.retryLane = n !== 0 && n < t ? n : t;
    }
  }
  function Cc(e, t) {
    kd(e, t), (e = e.alternate) && kd(e, t);
  }
  function ES() {
    return null;
  }
  var My = typeof reportError == "function" ? reportError : function(e) {
    console.error(e);
  };
  function Pc(e) {
    this._internalRoot = e;
  }
  Ks.prototype.render = Pc.prototype.render = function(e) {
    var t = this._internalRoot;
    if (t === null)
      throw Error(A(409));
    Gs(e, t, null, null);
  };
  Ks.prototype.unmount = Pc.prototype.unmount = function() {
    var e = this._internalRoot;
    if (e !== null) {
      this._internalRoot = null;
      var t = e.containerInfo;
      Yn(function() {
        Gs(null, e, null, null);
      }), t[Wt] = null;
    }
  };
  function Ks(e) {
    this._internalRoot = e;
  }
  Ks.prototype.unstable_scheduleHydration = function(e) {
    if (e) {
      var t = lm();
      e = { blockedOn: null, target: e, priority: t };
      for (var n = 0; n < on.length && t !== 0 && t < on[n].priority; n++)
        ;
      on.splice(n, 0, e), n === 0 && cm(e);
    }
  };
  function kc(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11);
  }
  function Qs(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "));
  }
  function _d() {
  }
  function CS(e, t, n, r, i) {
    if (i) {
      if (typeof r == "function") {
        var o = r;
        r = function() {
          var u = xs(s);
          o.call(u);
        };
      }
      var s = Dy(t, r, e, 0, null, !1, !1, "", _d);
      return e._reactRootContainer = s, e[Wt] = s.current, $i(e.nodeType === 8 ? e.parentNode : e), Yn(), s;
    }
    for (; i = e.lastChild; )
      e.removeChild(i);
    if (typeof r == "function") {
      var a = r;
      r = function() {
        var u = xs(l);
        a.call(u);
      };
    }
    var l = Ec(e, 0, !1, null, null, !1, !1, "", _d);
    return e._reactRootContainer = l, e[Wt] = l.current, $i(e.nodeType === 8 ? e.parentNode : e), Yn(function() {
      Gs(t, l, n, r);
    }), l;
  }
  function Ys(e, t, n, r, i) {
    var o = n._reactRootContainer;
    if (o) {
      var s = o;
      if (typeof i == "function") {
        var a = i;
        i = function() {
          var l = xs(s);
          a.call(l);
        };
      }
      Gs(t, s, e, i);
    } else
      s = CS(n, t, e, i, r);
    return xs(s);
  }
  sm = function(e) {
    switch (e.tag) {
      case 3:
        var t = e.stateNode;
        if (t.current.memoizedState.isDehydrated) {
          var n = ci(t.pendingLanes);
          n !== 0 && (Wu(t, n | 1), We(t, he()), !(H & 6) && (Br = he() + 500, _n()));
        }
        break;
      case 13:
        Yn(function() {
          var r = Gt(e, 1);
          if (r !== null) {
            var i = $e();
            wt(r, e, 1, i);
          }
        }), Cc(e, 1);
    }
  };
  Gu = function(e) {
    if (e.tag === 13) {
      var t = Gt(e, 134217728);
      if (t !== null) {
        var n = $e();
        wt(t, e, 134217728, n);
      }
      Cc(e, 134217728);
    }
  };
  am = function(e) {
    if (e.tag === 13) {
      var t = yn(e), n = Gt(e, t);
      if (n !== null) {
        var r = $e();
        wt(n, e, t, r);
      }
      Cc(e, t);
    }
  };
  lm = function() {
    return Y;
  };
  um = function(e, t) {
    var n = Y;
    try {
      return Y = e, t();
    } finally {
      Y = n;
    }
  };
  Dl = function(e, t, n) {
    switch (t) {
      case "input":
        if (Cl(e, n), t = n.name, n.type === "radio" && t != null) {
          for (n = e; n.parentNode; )
            n = n.parentNode;
          for (n = n.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'), t = 0; t < n.length; t++) {
            var r = n[t];
            if (r !== e && r.form === e.form) {
              var i = Is(r);
              if (!i)
                throw Error(A(90));
              bp(r), Cl(r, i);
            }
          }
        }
        break;
      case "textarea":
        Bp(e, n);
        break;
      case "select":
        t = n.value, t != null && Fr(e, !!n.multiple, t, !1);
    }
  };
  Yp = Sc;
  Xp = Yn;
  var PS = { usingClientEntryPoint: !1, Events: [to, gr, Is, Kp, Qp, Sc] }, ii = { findFiberByHostInstance: Nn, bundleType: 0, version: "18.2.0", rendererPackageName: "react-dom" }, kS = { bundleType: ii.bundleType, version: ii.version, rendererPackageName: ii.rendererPackageName, rendererConfig: ii.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: Yt.ReactCurrentDispatcher, findHostInstanceByFiber: function(e) {
    return e = Jp(e), e === null ? null : e.stateNode;
  }, findFiberByHostInstance: ii.findFiberByHostInstance || ES, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.2.0-next-9e3b772b8-20220608" };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var Fo = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Fo.isDisabled && Fo.supportsFiber)
      try {
        Ls = Fo.inject(kS), At = Fo;
      } catch {
      }
  }
  nt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = PS;
  nt.createPortal = function(e, t) {
    var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!kc(t))
      throw Error(A(200));
    return TS(e, t, null, n);
  };
  nt.createRoot = function(e, t) {
    if (!kc(e))
      throw Error(A(299));
    var n = !1, r = "", i = My;
    return t != null && (t.unstable_strictMode === !0 && (n = !0), t.identifierPrefix !== void 0 && (r = t.identifierPrefix), t.onRecoverableError !== void 0 && (i = t.onRecoverableError)), t = Ec(e, 1, !1, null, null, n, !1, r, i), e[Wt] = t.current, $i(e.nodeType === 8 ? e.parentNode : e), new Pc(t);
  };
  nt.findDOMNode = function(e) {
    if (e == null)
      return null;
    if (e.nodeType === 1)
      return e;
    var t = e._reactInternals;
    if (t === void 0)
      throw typeof e.render == "function" ? Error(A(188)) : (e = Object.keys(e).join(","), Error(A(268, e)));
    return e = Jp(t), e = e === null ? null : e.stateNode, e;
  };
  nt.flushSync = function(e) {
    return Yn(e);
  };
  nt.hydrate = function(e, t, n) {
    if (!Qs(t))
      throw Error(A(200));
    return Ys(null, e, t, !0, n);
  };
  nt.hydrateRoot = function(e, t, n) {
    if (!kc(e))
      throw Error(A(405));
    var r = n != null && n.hydratedSources || null, i = !1, o = "", s = My;
    if (n != null && (n.unstable_strictMode === !0 && (i = !0), n.identifierPrefix !== void 0 && (o = n.identifierPrefix), n.onRecoverableError !== void 0 && (s = n.onRecoverableError)), t = Dy(t, null, e, 1, n ?? null, i, !1, o, s), e[Wt] = t.current, $i(e), r)
      for (e = 0; e < r.length; e++)
        n = r[e], i = n._getVersion, i = i(n._source), t.mutableSourceEagerHydrationData == null ? t.mutableSourceEagerHydrationData = [n, i] : t.mutableSourceEagerHydrationData.push(
          n,
          i
        );
    return new Ks(t);
  };
  nt.render = function(e, t, n) {
    if (!Qs(t))
      throw Error(A(200));
    return Ys(null, e, t, !1, n);
  };
  nt.unmountComponentAtNode = function(e) {
    if (!Qs(e))
      throw Error(A(40));
    return e._reactRootContainer ? (Yn(function() {
      Ys(null, null, e, !1, function() {
        e._reactRootContainer = null, e[Wt] = null;
      });
    }), !0) : !1;
  };
  nt.unstable_batchedUpdates = Sc;
  nt.unstable_renderSubtreeIntoContainer = function(e, t, n, r) {
    if (!Qs(n))
      throw Error(A(200));
    if (e == null || e._reactInternals === void 0)
      throw Error(A(38));
    return Ys(e, t, n, !1, r);
  };
  nt.version = "18.2.0-next-9e3b772b8-20220608";
  function Ry() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Ry);
      } catch (e) {
        console.error(e);
      }
  }
  Ry(), Dp.exports = nt;
  var _S = Dp.exports, Ad = _S;
  gl.createRoot = Ad.createRoot, gl.hydrateRoot = Ad.hydrateRoot;
  function er(e) {
    this._maxSize = e, this.clear();
  }
  er.prototype.clear = function() {
    this._size = 0, this._values = /* @__PURE__ */ Object.create(null);
  };
  er.prototype.get = function(e) {
    return this._values[e];
  };
  er.prototype.set = function(e, t) {
    return this._size >= this._maxSize && this.clear(), e in this._values || this._size++, this._values[e] = t;
  };
  var AS = /[^.^\]^[]+|(?=\[\]|\.\.)/g, jy = /^\d+$/, FS = /^\d/, OS = /[~`!#$%\^&*+=\-\[\]\\';,/{}|\\":<>\?]/g, DS = /^\s*(['"]?)(.*?)(\1)\s*$/, _c = 512, Fd = new er(_c), Od = new er(_c), Dd = new er(_c), Hn = {
    Cache: er,
    split: cu,
    normalizePath: Za,
    setter: function(e) {
      var t = Za(e);
      return Od.get(e) || Od.set(e, function(r, i) {
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
      var n = Za(e);
      return Dd.get(e) || Dd.set(e, function(i) {
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
        return t + (Ac(n) || jy.test(n) ? "[" + n + "]" : (t ? "." : "") + n);
      }, "");
    },
    forEach: function(e, t, n) {
      MS(Array.isArray(e) ? e : cu(e), t, n);
    }
  };
  function Za(e) {
    return Fd.get(e) || Fd.set(
      e,
      cu(e).map(function(t) {
        return t.replace(DS, "$2");
      })
    );
  }
  function cu(e) {
    return e.match(AS) || [""];
  }
  function MS(e, t, n) {
    var r = e.length, i, o, s, a;
    for (o = 0; o < r; o++)
      i = e[o], i && (LS(i) && (i = '"' + i + '"'), a = Ac(i), s = !a && /^\d+$/.test(i), t.call(n, i, a, s, o, e));
  }
  function Ac(e) {
    return typeof e == "string" && e && ["'", '"'].indexOf(e.charAt(0)) !== -1;
  }
  function RS(e) {
    return e.match(FS) && !e.match(jy);
  }
  function jS(e) {
    return OS.test(e);
  }
  function LS(e) {
    return !Ac(e) && (RS(e) || jS(e));
  }
  const VS = /[A-Z\xc0-\xd6\xd8-\xde]?[a-z\xdf-\xf6\xf8-\xff]+(?:['’](?:d|ll|m|re|s|t|ve))?(?=[\xac\xb1\xd7\xf7\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\xbf\u2000-\u206f \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000]|[A-Z\xc0-\xd6\xd8-\xde]|$)|(?:[A-Z\xc0-\xd6\xd8-\xde]|[^\ud800-\udfff\xac\xb1\xd7\xf7\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\xbf\u2000-\u206f \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\d+\u2700-\u27bfa-z\xdf-\xf6\xf8-\xffA-Z\xc0-\xd6\xd8-\xde])+(?:['’](?:D|LL|M|RE|S|T|VE))?(?=[\xac\xb1\xd7\xf7\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\xbf\u2000-\u206f \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000]|[A-Z\xc0-\xd6\xd8-\xde](?:[a-z\xdf-\xf6\xf8-\xff]|[^\ud800-\udfff\xac\xb1\xd7\xf7\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\xbf\u2000-\u206f \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\d+\u2700-\u27bfa-z\xdf-\xf6\xf8-\xffA-Z\xc0-\xd6\xd8-\xde])|$)|[A-Z\xc0-\xd6\xd8-\xde]?(?:[a-z\xdf-\xf6\xf8-\xff]|[^\ud800-\udfff\xac\xb1\xd7\xf7\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\xbf\u2000-\u206f \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\d+\u2700-\u27bfa-z\xdf-\xf6\xf8-\xffA-Z\xc0-\xd6\xd8-\xde])+(?:['’](?:d|ll|m|re|s|t|ve))?|[A-Z\xc0-\xd6\xd8-\xde]+(?:['’](?:D|LL|M|RE|S|T|VE))?|\d*(?:1ST|2ND|3RD|(?![123])\dTH)(?=\b|[a-z_])|\d*(?:1st|2nd|3rd|(?![123])\dth)(?=\b|[A-Z_])|\d+|(?:[\u2700-\u27bf]|(?:\ud83c[\udde6-\uddff]){2}|[\ud800-\udbff][\udc00-\udfff])[\ufe0e\ufe0f]?(?:[\u0300-\u036f\ufe20-\ufe2f\u20d0-\u20ff]|\ud83c[\udffb-\udfff])?(?:\u200d(?:[^\ud800-\udfff]|(?:\ud83c[\udde6-\uddff]){2}|[\ud800-\udbff][\udc00-\udfff])[\ufe0e\ufe0f]?(?:[\u0300-\u036f\ufe20-\ufe2f\u20d0-\u20ff]|\ud83c[\udffb-\udfff])?)*/g, Xs = (e) => e.match(VS) || [], Zs = (e) => e[0].toUpperCase() + e.slice(1), Fc = (e, t) => Xs(e).join(t).toLowerCase(), Ly = (e) => Xs(e).reduce(
    (t, n) => `${t}${t ? n[0].toUpperCase() + n.slice(1).toLowerCase() : n.toLowerCase()}`,
    ""
  ), $S = (e) => Zs(Ly(e)), NS = (e) => Fc(e, "_"), IS = (e) => Fc(e, "-"), bS = (e) => Zs(Fc(e, " ")), zS = (e) => Xs(e).map(Zs).join(" ");
  var qa = {
    words: Xs,
    upperFirst: Zs,
    camelCase: Ly,
    pascalCase: $S,
    snakeCase: NS,
    kebabCase: IS,
    sentenceCase: bS,
    titleCase: zS
  }, Oc = { exports: {} };
  Oc.exports = function(e) {
    return Vy(BS(e), e);
  };
  Oc.exports.array = Vy;
  function Vy(e, t) {
    var n = e.length, r = new Array(n), i = {}, o = n, s = US(t), a = HS(e);
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
  function BS(e) {
    for (var t = /* @__PURE__ */ new Set(), n = 0, r = e.length; n < r; n++) {
      var i = e[n];
      t.add(i[0]), t.add(i[1]);
    }
    return Array.from(t);
  }
  function US(e) {
    for (var t = /* @__PURE__ */ new Map(), n = 0, r = e.length; n < r; n++) {
      var i = e[n];
      t.has(i[0]) || t.set(i[0], /* @__PURE__ */ new Set()), t.has(i[1]) || t.set(i[1], /* @__PURE__ */ new Set()), t.get(i[0]).add(i[1]);
    }
    return t;
  }
  function HS(e) {
    for (var t = /* @__PURE__ */ new Map(), n = 0, r = e.length; n < r; n++)
      t.set(e[n], n);
    return t;
  }
  var WS = Oc.exports;
  const GS = /* @__PURE__ */ Rs(WS), KS = Object.prototype.toString, QS = Error.prototype.toString, YS = RegExp.prototype.toString, XS = typeof Symbol < "u" ? Symbol.prototype.toString : () => "", ZS = /^Symbol\((.*)\)(.*)$/;
  function qS(e) {
    return e != +e ? "NaN" : e === 0 && 1 / e < 0 ? "-0" : "" + e;
  }
  function Md(e, t = !1) {
    if (e == null || e === !0 || e === !1)
      return "" + e;
    const n = typeof e;
    if (n === "number")
      return qS(e);
    if (n === "string")
      return t ? `"${e}"` : e;
    if (n === "function")
      return "[Function " + (e.name || "anonymous") + "]";
    if (n === "symbol")
      return XS.call(e).replace(ZS, "Symbol($1)");
    const r = KS.call(e).slice(8, -1);
    return r === "Date" ? isNaN(e.getTime()) ? "" + e : e.toISOString(e) : r === "Error" || e instanceof Error ? "[" + QS.call(e) + "]" : r === "RegExp" ? YS.call(e) : null;
  }
  function Lr(e, t) {
    let n = Md(e, t);
    return n !== null ? n : JSON.stringify(e, function(r, i) {
      let o = Md(this[r], t);
      return o !== null ? o : i;
    }, 2);
  }
  function $y(e) {
    return e == null ? [] : [].concat(e);
  }
  let JS = /\$\{\s*(\w+)\s*\}/g;
  class Ye extends Error {
    static formatError(t, n) {
      const r = n.label || n.path || "this";
      return r !== n.path && (n = Object.assign({}, n, {
        path: r
      })), typeof t == "string" ? t.replace(JS, (i, o) => Lr(n[o])) : typeof t == "function" ? t(n) : t;
    }
    static isError(t) {
      return t && t.name === "ValidationError";
    }
    constructor(t, n, r, i) {
      super(), this.value = void 0, this.path = void 0, this.type = void 0, this.errors = void 0, this.params = void 0, this.inner = void 0, this.name = "ValidationError", this.value = n, this.path = r, this.type = i, this.errors = [], this.inner = [], $y(t).forEach((o) => {
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
      const i = r != null && r !== n ? ` (cast from the value \`${Lr(r, !0)}\`).` : ".";
      return t !== "mixed" ? `${e} must be a \`${t}\` type, but the final value was: \`${Lr(n, !0)}\`` + i : `${e} must match the configured type. The validated value was: \`${Lr(n, !0)}\`` + i;
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
  }, qt = {
    min: "${path} must be greater than or equal to ${min}",
    max: "${path} must be less than or equal to ${max}",
    lessThan: "${path} must be less than ${less}",
    moreThan: "${path} must be greater than ${more}",
    positive: "${path} must be a positive number",
    negative: "${path} must be a negative number",
    integer: "${path} must be an integer"
  }, fu = {
    min: "${path} field must be later than ${min}",
    max: "${path} field must be at earlier than ${max}"
  }, ex = {
    isValue: "${path} field must be ${value}"
  }, du = {
    noUnknown: "${path} field has unspecified keys: ${unknown}"
  }, tx = {
    min: "${path} field must have at least ${min} items",
    max: "${path} field must have less than or equal to ${max} items",
    length: "${path} must have ${length} items"
  };
  Object.assign(/* @__PURE__ */ Object.create(null), {
    mixed: Lt,
    string: yt,
    number: qt,
    date: fu,
    object: du,
    array: tx,
    boolean: ex
  });
  const Dc = (e) => e && e.__isYupSchema__;
  class ws {
    static fromOptions(t, n) {
      if (!n.then && !n.otherwise)
        throw new TypeError("either `then:` or `otherwise:` is required for `when()` conditions");
      let {
        is: r,
        then: i,
        otherwise: o
      } = n, s = typeof r == "function" ? r : (...a) => a.every((l) => l === r);
      return new ws(t, (a, l) => {
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
      if (!Dc(i))
        throw new TypeError("conditions must return a schema object");
      return i.resolve(n);
    }
  }
  const Oo = {
    context: "$",
    value: "."
  };
  class tr {
    constructor(t, n = {}) {
      if (this.key = void 0, this.isContext = void 0, this.isValue = void 0, this.isSibling = void 0, this.path = void 0, this.getter = void 0, this.map = void 0, typeof t != "string")
        throw new TypeError("ref must be a string, got: " + t);
      if (this.key = t.trim(), t === "")
        throw new TypeError("ref must be a non-empty string");
      this.isContext = this.key[0] === Oo.context, this.isValue = this.key[0] === Oo.value, this.isSibling = !this.isContext && !this.isValue;
      let r = this.isContext ? Oo.context : this.isValue ? Oo.value : "";
      this.path = this.key.slice(r.length), this.getter = this.path && Hn.getter(this.path, !0), this.map = n.map;
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
  tr.prototype.__isYupRef = !0;
  const It = (e) => e == null;
  function cr(e) {
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
        abortEarly: k = s.spec.abortEarly
      } = i;
      function y(O) {
        return tr.isRef(O) ? O.getValue(n, g, v) : O;
      }
      function h(O = {}) {
        const U = Object.assign({
          value: n,
          originalValue: o,
          label: s.spec.label,
          path: O.path || r,
          spec: s.spec
        }, f, O.params);
        for (const W of Object.keys(U))
          U[W] = y(U[W]);
        const de = new Ye(Ye.formatError(O.message || d, U), n, U.path, O.type || u);
        return de.params = U, de;
      }
      const m = k ? a : l;
      let S = {
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
      const C = (O) => {
        Ye.isError(O) ? m(O) : O ? l(null) : m(h());
      }, P = (O) => {
        Ye.isError(O) ? m(O) : a(O);
      }, T = p && It(n);
      if (!i.sync) {
        try {
          Promise.resolve(T ? !0 : c.call(S, n, S)).then(C, P);
        } catch (O) {
          P(O);
        }
        return;
      }
      let _;
      try {
        var L;
        if (_ = T ? !0 : c.call(S, n, S), typeof ((L = _) == null ? void 0 : L.then) == "function")
          throw new Error(`Validation test of type: "${S.type}" returned a Promise during a synchronous validate. This test will finish after the validate call has returned`);
      } catch (O) {
        P(O);
        return;
      }
      C(_);
    }
    return t.OPTIONS = e, t;
  }
  function nx(e, t, n, r = n) {
    let i, o, s;
    return t ? (Hn.forEach(t, (a, l, u) => {
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
  class Ts extends Set {
    describe() {
      const t = [];
      for (const n of this.values())
        t.push(tr.isRef(n) ? n.describe() : n);
      return t;
    }
    resolveAll(t) {
      let n = [];
      for (const r of this.values())
        n.push(t(r));
      return n;
    }
    clone() {
      return new Ts(this.values());
    }
    merge(t, n) {
      const r = this.clone();
      return t.forEach((i) => r.add(i)), n.forEach((i) => r.delete(i)), r;
    }
  }
  function Cr(e, t = /* @__PURE__ */ new Map()) {
    if (Dc(e) || !e || typeof e != "object")
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
        n[r] = Cr(e[r], t);
    } else if (e instanceof Map) {
      n = /* @__PURE__ */ new Map(), t.set(e, n);
      for (const [r, i] of e.entries())
        n.set(r, Cr(i, t));
    } else if (e instanceof Set) {
      n = /* @__PURE__ */ new Set(), t.set(e, n);
      for (const r of e)
        n.add(Cr(r, t));
    } else if (e instanceof Object) {
      n = {}, t.set(e, n);
      for (const [r, i] of Object.entries(e))
        n[r] = Cr(i, t);
    } else
      throw Error(`Unable to clone ${e}`);
    return n;
  }
  class Et {
    constructor(t) {
      this.type = void 0, this.deps = [], this.tests = void 0, this.transforms = void 0, this.conditions = [], this._mutate = void 0, this.internalTests = {}, this._whitelist = new Ts(), this._blacklist = new Ts(), this.exclusiveTests = /* @__PURE__ */ Object.create(null), this._typeCheck = void 0, this.spec = void 0, this.tests = [], this.transforms = [], this.withMutation(() => {
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
      return n.type = this.type, n._typeCheck = this._typeCheck, n._whitelist = this._whitelist.clone(), n._blacklist = this._blacklist.clone(), n.internalTests = Object.assign({}, this.internalTests), n.exclusiveTests = Object.assign({}, this.exclusiveTests), n.deps = [...this.deps], n.conditions = [...this.conditions], n.tests = [...this.tests], n.transforms = [...this.transforms], n.spec = Cr(Object.assign({}, this.spec, t)), n;
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
        let s = Lr(t), a = Lr(o);
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
        const k = o[v];
        k(g, c, function(h) {
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
      return n == null ? n : typeof n == "function" ? n.call(this, t) : Cr(n);
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
      return r.internalTests.nullable = cr({
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
      return r.internalTests.optionality = cr({
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
      let r = this.clone(), i = cr(n), o = n.exclusive || n.name && r.exclusiveTests[n.name] === !0;
      if (n.exclusive && !n.name)
        throw new TypeError("Exclusive tests must provide a unique `name` identifying the test");
      return n.name && (r.exclusiveTests[n.name] = !!n.exclusive), r.tests = r.tests.filter((s) => !(s.OPTIONS.name === n.name && (o || s.OPTIONS.test === i.OPTIONS.test))), r.tests.push(i), r;
    }
    when(t, n) {
      !Array.isArray(t) && typeof t != "string" && (n = t, t = ".");
      let r = this.clone(), i = $y(t).map((o) => new tr(o));
      return i.forEach((o) => {
        o.isSibling && r.deps.push(o.key);
      }), r.conditions.push(typeof n == "function" ? new ws(i, n) : ws.fromOptions(i, n)), r;
    }
    typeError(t) {
      let n = this.clone();
      return n.internalTests.typeError = cr({
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
      }), r.internalTests.whiteList = cr({
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
      }), r.internalTests.blacklist = cr({
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
      } = nx(this, t, n, r.context);
      return s[e](i && i[o], Object.assign({}, r, {
        parent: i,
        path: t
      }));
    };
  for (const e of ["equals", "is"])
    Et.prototype[e] = Et.prototype.oneOf;
  for (const e of ["not", "nope"])
    Et.prototype[e] = Et.prototype.notOneOf;
  let rx = (
    // eslint-disable-next-line
    /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/
  ), ix = (
    // eslint-disable-next-line
    /^((https?|ftp):)?\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(\#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i
  ), ox = /^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i, sx = (e) => It(e) || e === e.trim(), ax = {}.toString();
  function Ti() {
    return new Ny();
  }
  class Ny extends Et {
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
          return i === ax ? t : i;
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
      return this.matches(rx, {
        name: "email",
        message: t,
        excludeEmptyString: !0
      });
    }
    url(t = yt.url) {
      return this.matches(ix, {
        name: "url",
        message: t,
        excludeEmptyString: !0
      });
    }
    uuid(t = yt.uuid) {
      return this.matches(ox, {
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
        test: sx
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
  Ti.prototype = Ny.prototype;
  let lx = (e) => e != +e;
  function Mc() {
    return new Iy();
  }
  class Iy extends Et {
    constructor() {
      super({
        type: "number",
        check(t) {
          return t instanceof Number && (t = t.valueOf()), typeof t == "number" && !lx(t);
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
    min(t, n = qt.min) {
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
    max(t, n = qt.max) {
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
    lessThan(t, n = qt.lessThan) {
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
    moreThan(t, n = qt.moreThan) {
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
    positive(t = qt.positive) {
      return this.moreThan(0, t);
    }
    negative(t = qt.negative) {
      return this.lessThan(0, t);
    }
    integer(t = qt.integer) {
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
  Mc.prototype = Iy.prototype;
  var ux = /^(\d{4}|[+\-]\d{6})(?:-?(\d{2})(?:-?(\d{2}))?)?(?:[ T]?(\d{2}):?(\d{2})(?::?(\d{2})(?:[,\.](\d{1,}))?)?(?:(Z)|([+\-])(\d{2})(?::?(\d{2}))?)?)?$/;
  function cx(e) {
    var t = [1, 4, 5, 6, 7, 10, 11], n = 0, r, i;
    if (i = ux.exec(e)) {
      for (var o = 0, s; s = t[o]; ++o)
        i[s] = +i[s] || 0;
      i[2] = (+i[2] || 1) - 1, i[3] = +i[3] || 1, i[7] = i[7] ? String(i[7]).substr(0, 3) : 0, (i[8] === void 0 || i[8] === "") && (i[9] === void 0 || i[9] === "") ? r = +new Date(i[1], i[2], i[3], i[4], i[5], i[6], i[7]) : (i[8] !== "Z" && i[9] !== void 0 && (n = i[10] * 60 + i[11], i[9] === "+" && (n = 0 - n)), r = Date.UTC(i[1], i[2], i[3], i[4], i[5] + n, i[6], i[7]));
    } else
      r = Date.parse ? Date.parse(e) : NaN;
    return r;
  }
  let fx = /* @__PURE__ */ new Date(""), dx = (e) => Object.prototype.toString.call(e) === "[object Date]";
  class qs extends Et {
    constructor() {
      super({
        type: "date",
        check(t) {
          return dx(t) && !isNaN(t.getTime());
        }
      }), this.withMutation(() => {
        this.transform((t, n, r) => !r.spec.coerce || r.isType(t) || t === null ? t : (t = cx(t), isNaN(t) ? qs.INVALID_DATE : new Date(t)));
      });
    }
    prepareParam(t, n) {
      let r;
      if (tr.isRef(t))
        r = t;
      else {
        let i = this.cast(t);
        if (!this._typeCheck(i))
          throw new TypeError(`\`${n}\` must be a Date or a value that can be \`cast()\` to a Date`);
        r = i;
      }
      return r;
    }
    min(t, n = fu.min) {
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
    max(t, n = fu.max) {
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
  qs.INVALID_DATE = fx;
  qs.prototype;
  function hx(e, t = []) {
    let n = [], r = /* @__PURE__ */ new Set(), i = new Set(t.map(([s, a]) => `${s}-${a}`));
    function o(s, a) {
      let l = Hn.split(s)[0];
      r.add(l), i.has(`${a}-${l}`) || n.push([a, l]);
    }
    for (const s of Object.keys(e)) {
      let a = e[s];
      r.add(s), tr.isRef(a) && a.isSibling ? o(a.path, s) : Dc(a) && "deps" in a && a.deps.forEach((l) => o(l, s));
    }
    return GS.array(Array.from(r), n).reverse();
  }
  function Rd(e, t) {
    let n = 1 / 0;
    return e.some((r, i) => {
      var o;
      if ((o = t.path) != null && o.includes(r))
        return n = i, !0;
    }), n;
  }
  function by(e) {
    return (t, n) => Rd(e, t) - Rd(e, n);
  }
  const px = (e, t, n) => {
    if (typeof e != "string")
      return e;
    let r = e;
    try {
      r = JSON.parse(e);
    } catch {
    }
    return n.isType(r) ? r : e;
  };
  function Qo(e) {
    if ("fields" in e) {
      const t = {};
      for (const [n, r] of Object.entries(e.fields))
        t[n] = Qo(r);
      return e.setFields(t);
    }
    if (e.type === "array") {
      const t = e.optional();
      return t.innerType && (t.innerType = Qo(t.innerType)), t;
    }
    return e.type === "tuple" ? e.optional().clone({
      types: e.spec.types.map(Qo)
    }) : "optional" in e ? e.optional() : e;
  }
  const mx = (e, t) => {
    const n = [...Hn.normalizePath(t)];
    if (n.length === 1)
      return n[0] in e;
    let r = n.pop(), i = Hn.getter(Hn.join(n), !0)(e);
    return !!(i && r in i);
  };
  let jd = (e) => Object.prototype.toString.call(e) === "[object Object]";
  function yx(e, t) {
    let n = Object.keys(e.fields);
    return Object.keys(t).filter((r) => n.indexOf(r) === -1);
  }
  const gx = by([]);
  function Es(e) {
    return new zy(e);
  }
  class zy extends Et {
    constructor(t) {
      super({
        type: "object",
        check(n) {
          return jd(n) || typeof n == "function";
        }
      }), this.fields = /* @__PURE__ */ Object.create(null), this._sortErrors = gx, this._nodes = [], this._excludedEdges = [], this.withMutation(() => {
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
        if (!a || !jd(u)) {
          i(l, u);
          return;
        }
        s = s || u;
        let c = [];
        for (let f of this._nodes) {
          let d = this.fields[f];
          !d || tr.isRef(d) || c.push(d.asNestedTest({
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
      return r.fields = t, r._nodes = hx(t, n), r._sortErrors = by(Object.keys(t)), n && (r._excludedEdges = n), r;
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
      return Qo(this);
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
      let i = Hn.getter(t, !0);
      return this.transform((o) => {
        if (!o)
          return o;
        let s = o;
        return mx(o, t) && (s = Object.assign({}, o), r || delete s[t], s[n] = i(o)), s;
      });
    }
    /** Parse an input JSON string to an object */
    json() {
      return this.transform(px);
    }
    noUnknown(t = !0, n = du.noUnknown) {
      typeof t != "boolean" && (n = t, t = !0);
      let r = this.test({
        name: "noUnknown",
        exclusive: !0,
        message: n,
        test(i) {
          if (i == null)
            return !0;
          const o = yx(this.schema, i);
          return !t || o.length === 0 || this.createError({
            params: {
              unknown: o.join(", ")
            }
          });
        }
      });
      return r.spec.noUnknown = t, r;
    }
    unknown(t = !0, n = du.noUnknown) {
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
      return this.transformKeys(qa.camelCase);
    }
    snakeCase() {
      return this.transformKeys(qa.snakeCase);
    }
    constantCase() {
      return this.transformKeys((t) => qa.snakeCase(t).toUpperCase());
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
  Es.prototype = zy.prototype;
  Es({
    firstName: Ti().required("This field is required"),
    lastName: Ti().required("This field is required"),
    age: Mc().min(0).positive().max(125).required("This field is required"),
    email: Ti().email()
  });
  var vx = function(t) {
    return Sx(t) && !xx(t);
  };
  function Sx(e) {
    return !!e && typeof e == "object";
  }
  function xx(e) {
    var t = Object.prototype.toString.call(e);
    return t === "[object RegExp]" || t === "[object Date]" || Ex(e);
  }
  var wx = typeof Symbol == "function" && Symbol.for, Tx = wx ? Symbol.for("react.element") : 60103;
  function Ex(e) {
    return e.$$typeof === Tx;
  }
  function Cx(e) {
    return Array.isArray(e) ? [] : {};
  }
  function Cs(e, t) {
    return t.clone !== !1 && t.isMergeableObject(e) ? Gi(Cx(e), e, t) : e;
  }
  function Px(e, t, n) {
    return e.concat(t).map(function(r) {
      return Cs(r, n);
    });
  }
  function kx(e, t, n) {
    var r = {};
    return n.isMergeableObject(e) && Object.keys(e).forEach(function(i) {
      r[i] = Cs(e[i], n);
    }), Object.keys(t).forEach(function(i) {
      !n.isMergeableObject(t[i]) || !e[i] ? r[i] = Cs(t[i], n) : r[i] = Gi(e[i], t[i], n);
    }), r;
  }
  function Gi(e, t, n) {
    n = n || {}, n.arrayMerge = n.arrayMerge || Px, n.isMergeableObject = n.isMergeableObject || vx;
    var r = Array.isArray(t), i = Array.isArray(e), o = r === i;
    return o ? r ? n.arrayMerge(e, t, n) : kx(e, t, n) : Cs(t, n);
  }
  Gi.all = function(t, n) {
    if (!Array.isArray(t))
      throw new Error("first argument should be an array");
    return t.reduce(function(r, i) {
      return Gi(r, i, n);
    }, {});
  };
  var hu = Gi, _x = typeof global == "object" && global && global.Object === Object && global;
  const By = _x;
  var Ax = typeof self == "object" && self && self.Object === Object && self, Fx = By || Ax || Function("return this")();
  const Mt = Fx;
  var Ox = Mt.Symbol;
  const Tn = Ox;
  var Uy = Object.prototype, Dx = Uy.hasOwnProperty, Mx = Uy.toString, oi = Tn ? Tn.toStringTag : void 0;
  function Rx(e) {
    var t = Dx.call(e, oi), n = e[oi];
    try {
      e[oi] = void 0;
      var r = !0;
    } catch {
    }
    var i = Mx.call(e);
    return r && (t ? e[oi] = n : delete e[oi]), i;
  }
  var jx = Object.prototype, Lx = jx.toString;
  function Vx(e) {
    return Lx.call(e);
  }
  var $x = "[object Null]", Nx = "[object Undefined]", Ld = Tn ? Tn.toStringTag : void 0;
  function nr(e) {
    return e == null ? e === void 0 ? Nx : $x : Ld && Ld in Object(e) ? Rx(e) : Vx(e);
  }
  function Hy(e, t) {
    return function(n) {
      return e(t(n));
    };
  }
  var Ix = Hy(Object.getPrototypeOf, Object);
  const Rc = Ix;
  function rr(e) {
    return e != null && typeof e == "object";
  }
  var bx = "[object Object]", zx = Function.prototype, Bx = Object.prototype, Wy = zx.toString, Ux = Bx.hasOwnProperty, Hx = Wy.call(Object);
  function Vd(e) {
    if (!rr(e) || nr(e) != bx)
      return !1;
    var t = Rc(e);
    if (t === null)
      return !0;
    var n = Ux.call(t, "constructor") && t.constructor;
    return typeof n == "function" && n instanceof n && Wy.call(n) == Hx;
  }
  var $d = Array.isArray, Nd = Object.keys, Wx = Object.prototype.hasOwnProperty, Gx = typeof Element < "u";
  function pu(e, t) {
    if (e === t)
      return !0;
    if (e && t && typeof e == "object" && typeof t == "object") {
      var n = $d(e), r = $d(t), i, o, s;
      if (n && r) {
        if (o = e.length, o != t.length)
          return !1;
        for (i = o; i-- !== 0; )
          if (!pu(e[i], t[i]))
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
      var f = Nd(e);
      if (o = f.length, o !== Nd(t).length)
        return !1;
      for (i = o; i-- !== 0; )
        if (!Wx.call(t, f[i]))
          return !1;
      if (Gx && e instanceof Element && t instanceof Element)
        return e === t;
      for (i = o; i-- !== 0; )
        if (s = f[i], !(s === "_owner" && e.$$typeof) && !pu(e[s], t[s]))
          return !1;
      return !0;
    }
    return e !== e && t !== t;
  }
  var Kx = function(t, n) {
    try {
      return pu(t, n);
    } catch (r) {
      if (r.message && r.message.match(/stack|recursion/i) || r.number === -2146828260)
        return console.warn("Warning: react-fast-compare does not handle circular references.", r.name, r.message), !1;
      throw r;
    }
  };
  const nn = /* @__PURE__ */ Rs(Kx);
  var Qx = !0;
  function Gy(e, t) {
    if (!Qx) {
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
  function Yx() {
    this.__data__ = [], this.size = 0;
  }
  function Ky(e, t) {
    return e === t || e !== e && t !== t;
  }
  function Js(e, t) {
    for (var n = e.length; n--; )
      if (Ky(e[n][0], t))
        return n;
    return -1;
  }
  var Xx = Array.prototype, Zx = Xx.splice;
  function qx(e) {
    var t = this.__data__, n = Js(t, e);
    if (n < 0)
      return !1;
    var r = t.length - 1;
    return n == r ? t.pop() : Zx.call(t, n, 1), --this.size, !0;
  }
  function Jx(e) {
    var t = this.__data__, n = Js(t, e);
    return n < 0 ? void 0 : t[n][1];
  }
  function ew(e) {
    return Js(this.__data__, e) > -1;
  }
  function tw(e, t) {
    var n = this.__data__, r = Js(n, e);
    return r < 0 ? (++this.size, n.push([e, t])) : n[r][1] = t, this;
  }
  function Xt(e) {
    var t = -1, n = e == null ? 0 : e.length;
    for (this.clear(); ++t < n; ) {
      var r = e[t];
      this.set(r[0], r[1]);
    }
  }
  Xt.prototype.clear = Yx;
  Xt.prototype.delete = qx;
  Xt.prototype.get = Jx;
  Xt.prototype.has = ew;
  Xt.prototype.set = tw;
  function nw() {
    this.__data__ = new Xt(), this.size = 0;
  }
  function rw(e) {
    var t = this.__data__, n = t.delete(e);
    return this.size = t.size, n;
  }
  function iw(e) {
    return this.__data__.get(e);
  }
  function ow(e) {
    return this.__data__.has(e);
  }
  function ro(e) {
    var t = typeof e;
    return e != null && (t == "object" || t == "function");
  }
  var sw = "[object AsyncFunction]", aw = "[object Function]", lw = "[object GeneratorFunction]", uw = "[object Proxy]";
  function Qy(e) {
    if (!ro(e))
      return !1;
    var t = nr(e);
    return t == aw || t == lw || t == sw || t == uw;
  }
  var cw = Mt["__core-js_shared__"];
  const Ja = cw;
  var Id = function() {
    var e = /[^.]+$/.exec(Ja && Ja.keys && Ja.keys.IE_PROTO || "");
    return e ? "Symbol(src)_1." + e : "";
  }();
  function fw(e) {
    return !!Id && Id in e;
  }
  var dw = Function.prototype, hw = dw.toString;
  function ir(e) {
    if (e != null) {
      try {
        return hw.call(e);
      } catch {
      }
      try {
        return e + "";
      } catch {
      }
    }
    return "";
  }
  var pw = /[\\^$.*+?()[\]{}|]/g, mw = /^\[object .+?Constructor\]$/, yw = Function.prototype, gw = Object.prototype, vw = yw.toString, Sw = gw.hasOwnProperty, xw = RegExp(
    "^" + vw.call(Sw).replace(pw, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
  );
  function ww(e) {
    if (!ro(e) || fw(e))
      return !1;
    var t = Qy(e) ? xw : mw;
    return t.test(ir(e));
  }
  function Tw(e, t) {
    return e == null ? void 0 : e[t];
  }
  function or(e, t) {
    var n = Tw(e, t);
    return ww(n) ? n : void 0;
  }
  var Ew = or(Mt, "Map");
  const Ki = Ew;
  var Cw = or(Object, "create");
  const Qi = Cw;
  function Pw() {
    this.__data__ = Qi ? Qi(null) : {}, this.size = 0;
  }
  function kw(e) {
    var t = this.has(e) && delete this.__data__[e];
    return this.size -= t ? 1 : 0, t;
  }
  var _w = "__lodash_hash_undefined__", Aw = Object.prototype, Fw = Aw.hasOwnProperty;
  function Ow(e) {
    var t = this.__data__;
    if (Qi) {
      var n = t[e];
      return n === _w ? void 0 : n;
    }
    return Fw.call(t, e) ? t[e] : void 0;
  }
  var Dw = Object.prototype, Mw = Dw.hasOwnProperty;
  function Rw(e) {
    var t = this.__data__;
    return Qi ? t[e] !== void 0 : Mw.call(t, e);
  }
  var jw = "__lodash_hash_undefined__";
  function Lw(e, t) {
    var n = this.__data__;
    return this.size += this.has(e) ? 0 : 1, n[e] = Qi && t === void 0 ? jw : t, this;
  }
  function Xn(e) {
    var t = -1, n = e == null ? 0 : e.length;
    for (this.clear(); ++t < n; ) {
      var r = e[t];
      this.set(r[0], r[1]);
    }
  }
  Xn.prototype.clear = Pw;
  Xn.prototype.delete = kw;
  Xn.prototype.get = Ow;
  Xn.prototype.has = Rw;
  Xn.prototype.set = Lw;
  function Vw() {
    this.size = 0, this.__data__ = {
      hash: new Xn(),
      map: new (Ki || Xt)(),
      string: new Xn()
    };
  }
  function $w(e) {
    var t = typeof e;
    return t == "string" || t == "number" || t == "symbol" || t == "boolean" ? e !== "__proto__" : e === null;
  }
  function ea(e, t) {
    var n = e.__data__;
    return $w(t) ? n[typeof t == "string" ? "string" : "hash"] : n.map;
  }
  function Nw(e) {
    var t = ea(this, e).delete(e);
    return this.size -= t ? 1 : 0, t;
  }
  function Iw(e) {
    return ea(this, e).get(e);
  }
  function bw(e) {
    return ea(this, e).has(e);
  }
  function zw(e, t) {
    var n = ea(this, e), r = n.size;
    return n.set(e, t), this.size += n.size == r ? 0 : 1, this;
  }
  function An(e) {
    var t = -1, n = e == null ? 0 : e.length;
    for (this.clear(); ++t < n; ) {
      var r = e[t];
      this.set(r[0], r[1]);
    }
  }
  An.prototype.clear = Vw;
  An.prototype.delete = Nw;
  An.prototype.get = Iw;
  An.prototype.has = bw;
  An.prototype.set = zw;
  var Bw = 200;
  function Uw(e, t) {
    var n = this.__data__;
    if (n instanceof Xt) {
      var r = n.__data__;
      if (!Ki || r.length < Bw - 1)
        return r.push([e, t]), this.size = ++n.size, this;
      n = this.__data__ = new An(r);
    }
    return n.set(e, t), this.size = n.size, this;
  }
  function Yr(e) {
    var t = this.__data__ = new Xt(e);
    this.size = t.size;
  }
  Yr.prototype.clear = nw;
  Yr.prototype.delete = rw;
  Yr.prototype.get = iw;
  Yr.prototype.has = ow;
  Yr.prototype.set = Uw;
  function Hw(e, t) {
    for (var n = -1, r = e == null ? 0 : e.length; ++n < r && t(e[n], n, e) !== !1; )
      ;
    return e;
  }
  var Ww = function() {
    try {
      var e = or(Object, "defineProperty");
      return e({}, "", {}), e;
    } catch {
    }
  }();
  const bd = Ww;
  function Yy(e, t, n) {
    t == "__proto__" && bd ? bd(e, t, {
      configurable: !0,
      enumerable: !0,
      value: n,
      writable: !0
    }) : e[t] = n;
  }
  var Gw = Object.prototype, Kw = Gw.hasOwnProperty;
  function Xy(e, t, n) {
    var r = e[t];
    (!(Kw.call(e, t) && Ky(r, n)) || n === void 0 && !(t in e)) && Yy(e, t, n);
  }
  function ta(e, t, n, r) {
    var i = !n;
    n || (n = {});
    for (var o = -1, s = t.length; ++o < s; ) {
      var a = t[o], l = r ? r(n[a], e[a], a, n, e) : void 0;
      l === void 0 && (l = e[a]), i ? Yy(n, a, l) : Xy(n, a, l);
    }
    return n;
  }
  function Qw(e, t) {
    for (var n = -1, r = Array(e); ++n < e; )
      r[n] = t(n);
    return r;
  }
  var Yw = "[object Arguments]";
  function zd(e) {
    return rr(e) && nr(e) == Yw;
  }
  var Zy = Object.prototype, Xw = Zy.hasOwnProperty, Zw = Zy.propertyIsEnumerable, qw = zd(function() {
    return arguments;
  }()) ? zd : function(e) {
    return rr(e) && Xw.call(e, "callee") && !Zw.call(e, "callee");
  };
  const Jw = qw;
  var eT = Array.isArray;
  const io = eT;
  function tT() {
    return !1;
  }
  var qy = typeof Ze == "object" && Ze && !Ze.nodeType && Ze, Bd = qy && typeof qe == "object" && qe && !qe.nodeType && qe, nT = Bd && Bd.exports === qy, Ud = nT ? Mt.Buffer : void 0, rT = Ud ? Ud.isBuffer : void 0, iT = rT || tT;
  const Jy = iT;
  var oT = 9007199254740991, sT = /^(?:0|[1-9]\d*)$/;
  function aT(e, t) {
    var n = typeof e;
    return t = t ?? oT, !!t && (n == "number" || n != "symbol" && sT.test(e)) && e > -1 && e % 1 == 0 && e < t;
  }
  var lT = 9007199254740991;
  function eg(e) {
    return typeof e == "number" && e > -1 && e % 1 == 0 && e <= lT;
  }
  var uT = "[object Arguments]", cT = "[object Array]", fT = "[object Boolean]", dT = "[object Date]", hT = "[object Error]", pT = "[object Function]", mT = "[object Map]", yT = "[object Number]", gT = "[object Object]", vT = "[object RegExp]", ST = "[object Set]", xT = "[object String]", wT = "[object WeakMap]", TT = "[object ArrayBuffer]", ET = "[object DataView]", CT = "[object Float32Array]", PT = "[object Float64Array]", kT = "[object Int8Array]", _T = "[object Int16Array]", AT = "[object Int32Array]", FT = "[object Uint8Array]", OT = "[object Uint8ClampedArray]", DT = "[object Uint16Array]", MT = "[object Uint32Array]", ne = {};
  ne[CT] = ne[PT] = ne[kT] = ne[_T] = ne[AT] = ne[FT] = ne[OT] = ne[DT] = ne[MT] = !0;
  ne[uT] = ne[cT] = ne[TT] = ne[fT] = ne[ET] = ne[dT] = ne[hT] = ne[pT] = ne[mT] = ne[yT] = ne[gT] = ne[vT] = ne[ST] = ne[xT] = ne[wT] = !1;
  function RT(e) {
    return rr(e) && eg(e.length) && !!ne[nr(e)];
  }
  function jc(e) {
    return function(t) {
      return e(t);
    };
  }
  var tg = typeof Ze == "object" && Ze && !Ze.nodeType && Ze, Ei = tg && typeof qe == "object" && qe && !qe.nodeType && qe, jT = Ei && Ei.exports === tg, el = jT && By.process, LT = function() {
    try {
      var e = Ei && Ei.require && Ei.require("util").types;
      return e || el && el.binding && el.binding("util");
    } catch {
    }
  }();
  const Ur = LT;
  var Hd = Ur && Ur.isTypedArray, VT = Hd ? jc(Hd) : RT;
  const $T = VT;
  var NT = Object.prototype, IT = NT.hasOwnProperty;
  function ng(e, t) {
    var n = io(e), r = !n && Jw(e), i = !n && !r && Jy(e), o = !n && !r && !i && $T(e), s = n || r || i || o, a = s ? Qw(e.length, String) : [], l = a.length;
    for (var u in e)
      (t || IT.call(e, u)) && !(s && // Safari 9 has enumerable `arguments.length` in strict mode.
      (u == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
      i && (u == "offset" || u == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
      o && (u == "buffer" || u == "byteLength" || u == "byteOffset") || // Skip index properties.
      aT(u, l))) && a.push(u);
    return a;
  }
  var bT = Object.prototype;
  function Lc(e) {
    var t = e && e.constructor, n = typeof t == "function" && t.prototype || bT;
    return e === n;
  }
  var zT = Hy(Object.keys, Object);
  const BT = zT;
  var UT = Object.prototype, HT = UT.hasOwnProperty;
  function WT(e) {
    if (!Lc(e))
      return BT(e);
    var t = [];
    for (var n in Object(e))
      HT.call(e, n) && n != "constructor" && t.push(n);
    return t;
  }
  function rg(e) {
    return e != null && eg(e.length) && !Qy(e);
  }
  function Vc(e) {
    return rg(e) ? ng(e) : WT(e);
  }
  function GT(e, t) {
    return e && ta(t, Vc(t), e);
  }
  function KT(e) {
    var t = [];
    if (e != null)
      for (var n in Object(e))
        t.push(n);
    return t;
  }
  var QT = Object.prototype, YT = QT.hasOwnProperty;
  function XT(e) {
    if (!ro(e))
      return KT(e);
    var t = Lc(e), n = [];
    for (var r in e)
      r == "constructor" && (t || !YT.call(e, r)) || n.push(r);
    return n;
  }
  function $c(e) {
    return rg(e) ? ng(e, !0) : XT(e);
  }
  function ZT(e, t) {
    return e && ta(t, $c(t), e);
  }
  var ig = typeof Ze == "object" && Ze && !Ze.nodeType && Ze, Wd = ig && typeof qe == "object" && qe && !qe.nodeType && qe, qT = Wd && Wd.exports === ig, Gd = qT ? Mt.Buffer : void 0, Kd = Gd ? Gd.allocUnsafe : void 0;
  function JT(e, t) {
    if (t)
      return e.slice();
    var n = e.length, r = Kd ? Kd(n) : new e.constructor(n);
    return e.copy(r), r;
  }
  function og(e, t) {
    var n = -1, r = e.length;
    for (t || (t = Array(r)); ++n < r; )
      t[n] = e[n];
    return t;
  }
  function eE(e, t) {
    for (var n = -1, r = e == null ? 0 : e.length, i = 0, o = []; ++n < r; ) {
      var s = e[n];
      t(s, n, e) && (o[i++] = s);
    }
    return o;
  }
  function sg() {
    return [];
  }
  var tE = Object.prototype, nE = tE.propertyIsEnumerable, Qd = Object.getOwnPropertySymbols, rE = Qd ? function(e) {
    return e == null ? [] : (e = Object(e), eE(Qd(e), function(t) {
      return nE.call(e, t);
    }));
  } : sg;
  const Nc = rE;
  function iE(e, t) {
    return ta(e, Nc(e), t);
  }
  function ag(e, t) {
    for (var n = -1, r = t.length, i = e.length; ++n < r; )
      e[i + n] = t[n];
    return e;
  }
  var oE = Object.getOwnPropertySymbols, sE = oE ? function(e) {
    for (var t = []; e; )
      ag(t, Nc(e)), e = Rc(e);
    return t;
  } : sg;
  const lg = sE;
  function aE(e, t) {
    return ta(e, lg(e), t);
  }
  function ug(e, t, n) {
    var r = t(e);
    return io(e) ? r : ag(r, n(e));
  }
  function lE(e) {
    return ug(e, Vc, Nc);
  }
  function uE(e) {
    return ug(e, $c, lg);
  }
  var cE = or(Mt, "DataView");
  const mu = cE;
  var fE = or(Mt, "Promise");
  const yu = fE;
  var dE = or(Mt, "Set");
  const gu = dE;
  var hE = or(Mt, "WeakMap");
  const vu = hE;
  var Yd = "[object Map]", pE = "[object Object]", Xd = "[object Promise]", Zd = "[object Set]", qd = "[object WeakMap]", Jd = "[object DataView]", mE = ir(mu), yE = ir(Ki), gE = ir(yu), vE = ir(gu), SE = ir(vu), Ln = nr;
  (mu && Ln(new mu(new ArrayBuffer(1))) != Jd || Ki && Ln(new Ki()) != Yd || yu && Ln(yu.resolve()) != Xd || gu && Ln(new gu()) != Zd || vu && Ln(new vu()) != qd) && (Ln = function(e) {
    var t = nr(e), n = t == pE ? e.constructor : void 0, r = n ? ir(n) : "";
    if (r)
      switch (r) {
        case mE:
          return Jd;
        case yE:
          return Yd;
        case gE:
          return Xd;
        case vE:
          return Zd;
        case SE:
          return qd;
      }
    return t;
  });
  const Ic = Ln;
  var xE = Object.prototype, wE = xE.hasOwnProperty;
  function TE(e) {
    var t = e.length, n = new e.constructor(t);
    return t && typeof e[0] == "string" && wE.call(e, "index") && (n.index = e.index, n.input = e.input), n;
  }
  var EE = Mt.Uint8Array;
  const eh = EE;
  function bc(e) {
    var t = new e.constructor(e.byteLength);
    return new eh(t).set(new eh(e)), t;
  }
  function CE(e, t) {
    var n = t ? bc(e.buffer) : e.buffer;
    return new e.constructor(n, e.byteOffset, e.byteLength);
  }
  var PE = /\w*$/;
  function kE(e) {
    var t = new e.constructor(e.source, PE.exec(e));
    return t.lastIndex = e.lastIndex, t;
  }
  var th = Tn ? Tn.prototype : void 0, nh = th ? th.valueOf : void 0;
  function _E(e) {
    return nh ? Object(nh.call(e)) : {};
  }
  function AE(e, t) {
    var n = t ? bc(e.buffer) : e.buffer;
    return new e.constructor(n, e.byteOffset, e.length);
  }
  var FE = "[object Boolean]", OE = "[object Date]", DE = "[object Map]", ME = "[object Number]", RE = "[object RegExp]", jE = "[object Set]", LE = "[object String]", VE = "[object Symbol]", $E = "[object ArrayBuffer]", NE = "[object DataView]", IE = "[object Float32Array]", bE = "[object Float64Array]", zE = "[object Int8Array]", BE = "[object Int16Array]", UE = "[object Int32Array]", HE = "[object Uint8Array]", WE = "[object Uint8ClampedArray]", GE = "[object Uint16Array]", KE = "[object Uint32Array]";
  function QE(e, t, n) {
    var r = e.constructor;
    switch (t) {
      case $E:
        return bc(e);
      case FE:
      case OE:
        return new r(+e);
      case NE:
        return CE(e, n);
      case IE:
      case bE:
      case zE:
      case BE:
      case UE:
      case HE:
      case WE:
      case GE:
      case KE:
        return AE(e, n);
      case DE:
        return new r();
      case ME:
      case LE:
        return new r(e);
      case RE:
        return kE(e);
      case jE:
        return new r();
      case VE:
        return _E(e);
    }
  }
  var rh = Object.create, YE = function() {
    function e() {
    }
    return function(t) {
      if (!ro(t))
        return {};
      if (rh)
        return rh(t);
      e.prototype = t;
      var n = new e();
      return e.prototype = void 0, n;
    };
  }();
  const XE = YE;
  function ZE(e) {
    return typeof e.constructor == "function" && !Lc(e) ? XE(Rc(e)) : {};
  }
  var qE = "[object Map]";
  function JE(e) {
    return rr(e) && Ic(e) == qE;
  }
  var ih = Ur && Ur.isMap, eC = ih ? jc(ih) : JE;
  const tC = eC;
  var nC = "[object Set]";
  function rC(e) {
    return rr(e) && Ic(e) == nC;
  }
  var oh = Ur && Ur.isSet, iC = oh ? jc(oh) : rC;
  const oC = iC;
  var sC = 1, aC = 2, lC = 4, cg = "[object Arguments]", uC = "[object Array]", cC = "[object Boolean]", fC = "[object Date]", dC = "[object Error]", fg = "[object Function]", hC = "[object GeneratorFunction]", pC = "[object Map]", mC = "[object Number]", dg = "[object Object]", yC = "[object RegExp]", gC = "[object Set]", vC = "[object String]", SC = "[object Symbol]", xC = "[object WeakMap]", wC = "[object ArrayBuffer]", TC = "[object DataView]", EC = "[object Float32Array]", CC = "[object Float64Array]", PC = "[object Int8Array]", kC = "[object Int16Array]", _C = "[object Int32Array]", AC = "[object Uint8Array]", FC = "[object Uint8ClampedArray]", OC = "[object Uint16Array]", DC = "[object Uint32Array]", q = {};
  q[cg] = q[uC] = q[wC] = q[TC] = q[cC] = q[fC] = q[EC] = q[CC] = q[PC] = q[kC] = q[_C] = q[pC] = q[mC] = q[dg] = q[yC] = q[gC] = q[vC] = q[SC] = q[AC] = q[FC] = q[OC] = q[DC] = !0;
  q[dC] = q[fg] = q[xC] = !1;
  function Ci(e, t, n, r, i, o) {
    var s, a = t & sC, l = t & aC, u = t & lC;
    if (n && (s = i ? n(e, r, i, o) : n(e)), s !== void 0)
      return s;
    if (!ro(e))
      return e;
    var c = io(e);
    if (c) {
      if (s = TE(e), !a)
        return og(e, s);
    } else {
      var f = Ic(e), d = f == fg || f == hC;
      if (Jy(e))
        return JT(e, a);
      if (f == dg || f == cg || d && !i) {
        if (s = l || d ? {} : ZE(e), !a)
          return l ? aE(e, ZT(s, e)) : iE(e, GT(s, e));
      } else {
        if (!q[f])
          return i ? e : {};
        s = QE(e, f, a);
      }
    }
    o || (o = new Yr());
    var p = o.get(e);
    if (p)
      return p;
    o.set(e, s), oC(e) ? e.forEach(function(k) {
      s.add(Ci(k, t, n, k, e, o));
    }) : tC(e) && e.forEach(function(k, y) {
      s.set(y, Ci(k, t, n, y, e, o));
    });
    var g = u ? l ? uE : lE : l ? $c : Vc, v = c ? void 0 : g(e);
    return Hw(v || e, function(k, y) {
      v && (y = k, k = e[y]), Xy(s, y, Ci(k, t, n, y, e, o));
    }), s;
  }
  var MC = 4;
  function sh(e) {
    return Ci(e, MC);
  }
  function hg(e, t) {
    for (var n = -1, r = e == null ? 0 : e.length, i = Array(r); ++n < r; )
      i[n] = t(e[n], n, e);
    return i;
  }
  var RC = "[object Symbol]";
  function zc(e) {
    return typeof e == "symbol" || rr(e) && nr(e) == RC;
  }
  var jC = "Expected a function";
  function Bc(e, t) {
    if (typeof e != "function" || t != null && typeof t != "function")
      throw new TypeError(jC);
    var n = function() {
      var r = arguments, i = t ? t.apply(this, r) : r[0], o = n.cache;
      if (o.has(i))
        return o.get(i);
      var s = e.apply(this, r);
      return n.cache = o.set(i, s) || o, s;
    };
    return n.cache = new (Bc.Cache || An)(), n;
  }
  Bc.Cache = An;
  var LC = 500;
  function VC(e) {
    var t = Bc(e, function(r) {
      return n.size === LC && n.clear(), r;
    }), n = t.cache;
    return t;
  }
  var $C = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, NC = /\\(\\)?/g, IC = VC(function(e) {
    var t = [];
    return e.charCodeAt(0) === 46 && t.push(""), e.replace($C, function(n, r, i, o) {
      t.push(i ? o.replace(NC, "$1") : r || n);
    }), t;
  });
  const bC = IC;
  var zC = 1 / 0;
  function BC(e) {
    if (typeof e == "string" || zc(e))
      return e;
    var t = e + "";
    return t == "0" && 1 / e == -zC ? "-0" : t;
  }
  var UC = 1 / 0, ah = Tn ? Tn.prototype : void 0, lh = ah ? ah.toString : void 0;
  function pg(e) {
    if (typeof e == "string")
      return e;
    if (io(e))
      return hg(e, pg) + "";
    if (zc(e))
      return lh ? lh.call(e) : "";
    var t = e + "";
    return t == "0" && 1 / e == -UC ? "-0" : t;
  }
  function HC(e) {
    return e == null ? "" : pg(e);
  }
  function mg(e) {
    return io(e) ? hg(e, BC) : zc(e) ? [e] : og(bC(HC(e)));
  }
  var yg = { exports: {} }, X = {};
  /** @license React v16.13.1
   * react-is.production.min.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */
  var Te = typeof Symbol == "function" && Symbol.for, Uc = Te ? Symbol.for("react.element") : 60103, Hc = Te ? Symbol.for("react.portal") : 60106, na = Te ? Symbol.for("react.fragment") : 60107, ra = Te ? Symbol.for("react.strict_mode") : 60108, ia = Te ? Symbol.for("react.profiler") : 60114, oa = Te ? Symbol.for("react.provider") : 60109, sa = Te ? Symbol.for("react.context") : 60110, Wc = Te ? Symbol.for("react.async_mode") : 60111, aa = Te ? Symbol.for("react.concurrent_mode") : 60111, la = Te ? Symbol.for("react.forward_ref") : 60112, ua = Te ? Symbol.for("react.suspense") : 60113, WC = Te ? Symbol.for("react.suspense_list") : 60120, ca = Te ? Symbol.for("react.memo") : 60115, fa = Te ? Symbol.for("react.lazy") : 60116, GC = Te ? Symbol.for("react.block") : 60121, KC = Te ? Symbol.for("react.fundamental") : 60117, QC = Te ? Symbol.for("react.responder") : 60118, YC = Te ? Symbol.for("react.scope") : 60119;
  function it(e) {
    if (typeof e == "object" && e !== null) {
      var t = e.$$typeof;
      switch (t) {
        case Uc:
          switch (e = e.type, e) {
            case Wc:
            case aa:
            case na:
            case ia:
            case ra:
            case ua:
              return e;
            default:
              switch (e = e && e.$$typeof, e) {
                case sa:
                case la:
                case fa:
                case ca:
                case oa:
                  return e;
                default:
                  return t;
              }
          }
        case Hc:
          return t;
      }
    }
  }
  function gg(e) {
    return it(e) === aa;
  }
  X.AsyncMode = Wc;
  X.ConcurrentMode = aa;
  X.ContextConsumer = sa;
  X.ContextProvider = oa;
  X.Element = Uc;
  X.ForwardRef = la;
  X.Fragment = na;
  X.Lazy = fa;
  X.Memo = ca;
  X.Portal = Hc;
  X.Profiler = ia;
  X.StrictMode = ra;
  X.Suspense = ua;
  X.isAsyncMode = function(e) {
    return gg(e) || it(e) === Wc;
  };
  X.isConcurrentMode = gg;
  X.isContextConsumer = function(e) {
    return it(e) === sa;
  };
  X.isContextProvider = function(e) {
    return it(e) === oa;
  };
  X.isElement = function(e) {
    return typeof e == "object" && e !== null && e.$$typeof === Uc;
  };
  X.isForwardRef = function(e) {
    return it(e) === la;
  };
  X.isFragment = function(e) {
    return it(e) === na;
  };
  X.isLazy = function(e) {
    return it(e) === fa;
  };
  X.isMemo = function(e) {
    return it(e) === ca;
  };
  X.isPortal = function(e) {
    return it(e) === Hc;
  };
  X.isProfiler = function(e) {
    return it(e) === ia;
  };
  X.isStrictMode = function(e) {
    return it(e) === ra;
  };
  X.isSuspense = function(e) {
    return it(e) === ua;
  };
  X.isValidElementType = function(e) {
    return typeof e == "string" || typeof e == "function" || e === na || e === aa || e === ia || e === ra || e === ua || e === WC || typeof e == "object" && e !== null && (e.$$typeof === fa || e.$$typeof === ca || e.$$typeof === oa || e.$$typeof === sa || e.$$typeof === la || e.$$typeof === KC || e.$$typeof === QC || e.$$typeof === YC || e.$$typeof === GC);
  };
  X.typeOf = it;
  yg.exports = X;
  var XC = yg.exports, Gc = XC, ZC = {
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
  }, qC = {
    name: !0,
    length: !0,
    prototype: !0,
    caller: !0,
    callee: !0,
    arguments: !0,
    arity: !0
  }, JC = {
    $$typeof: !0,
    render: !0,
    defaultProps: !0,
    displayName: !0,
    propTypes: !0
  }, vg = {
    $$typeof: !0,
    compare: !0,
    defaultProps: !0,
    displayName: !0,
    propTypes: !0,
    type: !0
  }, Kc = {};
  Kc[Gc.ForwardRef] = JC;
  Kc[Gc.Memo] = vg;
  function uh(e) {
    return Gc.isMemo(e) ? vg : Kc[e.$$typeof] || ZC;
  }
  var eP = Object.defineProperty, tP = Object.getOwnPropertyNames, ch = Object.getOwnPropertySymbols, nP = Object.getOwnPropertyDescriptor, rP = Object.getPrototypeOf, fh = Object.prototype;
  function Sg(e, t, n) {
    if (typeof t != "string") {
      if (fh) {
        var r = rP(t);
        r && r !== fh && Sg(e, r, n);
      }
      var i = tP(t);
      ch && (i = i.concat(ch(t)));
      for (var o = uh(e), s = uh(t), a = 0; a < i.length; ++a) {
        var l = i[a];
        if (!qC[l] && !(n && n[l]) && !(s && s[l]) && !(o && o[l])) {
          var u = nP(t, l);
          try {
            eP(e, l, u);
          } catch {
          }
        }
      }
    }
    return e;
  }
  var iP = Sg;
  const oP = /* @__PURE__ */ Rs(iP);
  var sP = 1, aP = 4;
  function lP(e) {
    return Ci(e, sP | aP);
  }
  function Q() {
    return Q = Object.assign || function(e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = arguments[t];
        for (var r in n)
          Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
      }
      return e;
    }, Q.apply(this, arguments);
  }
  function xg(e, t) {
    e.prototype = Object.create(t.prototype), e.prototype.constructor = e, e.__proto__ = t;
  }
  function un(e, t) {
    if (e == null)
      return {};
    var n = {}, r = Object.keys(e), i, o;
    for (o = 0; o < r.length; o++)
      i = r[o], !(t.indexOf(i) >= 0) && (n[i] = e[i]);
    return n;
  }
  function dh(e) {
    if (e === void 0)
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return e;
  }
  var da = /* @__PURE__ */ x.createContext(void 0);
  da.displayName = "FormikContext";
  var uP = da.Provider, cP = da.Consumer;
  function ha() {
    var e = x.useContext(da);
    return e || Gy(!1), e;
  }
  var hh = function(t) {
    return Array.isArray(t) && t.length === 0;
  }, Pe = function(t) {
    return typeof t == "function";
  }, oo = function(t) {
    return t !== null && typeof t == "object";
  }, fP = function(t) {
    return String(Math.floor(Number(t))) === t;
  }, tl = function(t) {
    return Object.prototype.toString.call(t) === "[object String]";
  }, wg = function(t) {
    return x.Children.count(t) === 0;
  }, nl = function(t) {
    return oo(t) && Pe(t.then);
  };
  function ie(e, t, n, r) {
    r === void 0 && (r = 0);
    for (var i = mg(t); e && r < i.length; )
      e = e[i[r++]];
    return r !== i.length && !e || e === void 0 ? n : e;
  }
  function Ot(e, t, n) {
    for (var r = sh(e), i = r, o = 0, s = mg(t); o < s.length - 1; o++) {
      var a = s[o], l = ie(e, s.slice(0, o + 1));
      if (l && (oo(l) || Array.isArray(l)))
        i = i[a] = sh(l);
      else {
        var u = s[o + 1];
        i = i[a] = fP(u) && Number(u) >= 0 ? [] : {};
      }
    }
    return (o === 0 ? e : i)[s[o]] === n ? e : (n === void 0 ? delete i[s[o]] : i[s[o]] = n, o === 0 && n === void 0 && delete r[s[o]], r);
  }
  function Tg(e, t, n, r) {
    n === void 0 && (n = /* @__PURE__ */ new WeakMap()), r === void 0 && (r = {});
    for (var i = 0, o = Object.keys(e); i < o.length; i++) {
      var s = o[i], a = e[s];
      oo(a) ? n.get(a) || (n.set(a, !0), r[s] = Array.isArray(a) ? [] : {}, Tg(a, t, n, r[s])) : r[s] = t;
    }
    return r;
  }
  function dP(e, t) {
    switch (t.type) {
      case "SET_VALUES":
        return Q({}, e, {
          values: t.payload
        });
      case "SET_TOUCHED":
        return Q({}, e, {
          touched: t.payload
        });
      case "SET_ERRORS":
        return nn(e.errors, t.payload) ? e : Q({}, e, {
          errors: t.payload
        });
      case "SET_STATUS":
        return Q({}, e, {
          status: t.payload
        });
      case "SET_ISSUBMITTING":
        return Q({}, e, {
          isSubmitting: t.payload
        });
      case "SET_ISVALIDATING":
        return Q({}, e, {
          isValidating: t.payload
        });
      case "SET_FIELD_VALUE":
        return Q({}, e, {
          values: Ot(e.values, t.payload.field, t.payload.value)
        });
      case "SET_FIELD_TOUCHED":
        return Q({}, e, {
          touched: Ot(e.touched, t.payload.field, t.payload.value)
        });
      case "SET_FIELD_ERROR":
        return Q({}, e, {
          errors: Ot(e.errors, t.payload.field, t.payload.value)
        });
      case "RESET_FORM":
        return Q({}, e, t.payload);
      case "SET_FORMIK_STATE":
        return t.payload(e);
      case "SUBMIT_ATTEMPT":
        return Q({}, e, {
          touched: Tg(e.values, !0),
          isSubmitting: !0,
          submitCount: e.submitCount + 1
        });
      case "SUBMIT_FAILURE":
        return Q({}, e, {
          isSubmitting: !1
        });
      case "SUBMIT_SUCCESS":
        return Q({}, e, {
          isSubmitting: !1
        });
      default:
        return e;
    }
  }
  var Dn = {}, Do = {};
  function hP(e) {
    var t = e.validateOnChange, n = t === void 0 ? !0 : t, r = e.validateOnBlur, i = r === void 0 ? !0 : r, o = e.validateOnMount, s = o === void 0 ? !1 : o, a = e.isInitialValid, l = e.enableReinitialize, u = l === void 0 ? !1 : l, c = e.onSubmit, f = un(e, ["validateOnChange", "validateOnBlur", "validateOnMount", "isInitialValid", "enableReinitialize", "onSubmit"]), d = Q({
      validateOnChange: n,
      validateOnBlur: i,
      validateOnMount: s,
      onSubmit: c
    }, f), p = x.useRef(d.initialValues), g = x.useRef(d.initialErrors || Dn), v = x.useRef(d.initialTouched || Do), k = x.useRef(d.initialStatus), y = x.useRef(!1), h = x.useRef({});
    x.useEffect(function() {
      return y.current = !0, function() {
        y.current = !1;
      };
    }, []);
    var m = x.useState(0), S = m[1], C = x.useRef({
      values: d.initialValues,
      errors: d.initialErrors || Dn,
      touched: d.initialTouched || Do,
      status: d.initialStatus,
      isSubmitting: !1,
      isValidating: !1,
      submitCount: 0
    }), P = C.current, T = x.useCallback(function(w) {
      var M = C.current;
      C.current = dP(M, w), M !== C.current && S(function(V) {
        return V + 1;
      });
    }, []), _ = x.useCallback(function(w, M) {
      return new Promise(function(V, $) {
        var b = d.validate(w, M);
        b == null ? V(Dn) : nl(b) ? b.then(function(K) {
          V(K || Dn);
        }, function(K) {
          $(K);
        }) : V(b);
      });
    }, [d.validate]), L = x.useCallback(function(w, M) {
      var V = d.validationSchema, $ = Pe(V) ? V(M) : V, b = M && $.validateAt ? $.validateAt(M, w) : yP(w, $);
      return new Promise(function(K, ve) {
        b.then(function() {
          K(Dn);
        }, function(Rt) {
          Rt.name === "ValidationError" ? K(mP(Rt)) : ve(Rt);
        });
      });
    }, [d.validationSchema]), O = x.useCallback(function(w, M) {
      return new Promise(function(V) {
        return V(h.current[w].validate(M));
      });
    }, []), U = x.useCallback(function(w) {
      var M = Object.keys(h.current).filter(function($) {
        return Pe(h.current[$].validate);
      }), V = M.length > 0 ? M.map(function($) {
        return O($, ie(w, $));
      }) : [Promise.resolve("DO_NOT_DELETE_YOU_WILL_BE_FIRED")];
      return Promise.all(V).then(function($) {
        return $.reduce(function(b, K, ve) {
          return K === "DO_NOT_DELETE_YOU_WILL_BE_FIRED" || K && (b = Ot(b, M[ve], K)), b;
        }, {});
      });
    }, [O]), de = x.useCallback(function(w) {
      return Promise.all([U(w), d.validationSchema ? L(w) : {}, d.validate ? _(w) : {}]).then(function(M) {
        var V = M[0], $ = M[1], b = M[2], K = hu.all([V, $, b], {
          arrayMerge: gP
        });
        return K;
      });
    }, [d.validate, d.validationSchema, U, _, L]), W = ot(function(w) {
      return w === void 0 && (w = P.values), T({
        type: "SET_ISVALIDATING",
        payload: !0
      }), de(w).then(function(M) {
        return y.current && (T({
          type: "SET_ISVALIDATING",
          payload: !1
        }), T({
          type: "SET_ERRORS",
          payload: M
        })), M;
      });
    });
    x.useEffect(function() {
      s && y.current === !0 && nn(p.current, d.initialValues) && W(p.current);
    }, [s, W]);
    var G = x.useCallback(function(w) {
      var M = w && w.values ? w.values : p.current, V = w && w.errors ? w.errors : g.current ? g.current : d.initialErrors || {}, $ = w && w.touched ? w.touched : v.current ? v.current : d.initialTouched || {}, b = w && w.status ? w.status : k.current ? k.current : d.initialStatus;
      p.current = M, g.current = V, v.current = $, k.current = b;
      var K = function() {
        T({
          type: "RESET_FORM",
          payload: {
            isSubmitting: !!w && !!w.isSubmitting,
            errors: V,
            touched: $,
            status: b,
            values: M,
            isValidating: !!w && !!w.isValidating,
            submitCount: w && w.submitCount && typeof w.submitCount == "number" ? w.submitCount : 0
          }
        });
      };
      if (d.onReset) {
        var ve = d.onReset(P.values, Xr);
        nl(ve) ? ve.then(K) : K();
      } else
        K();
    }, [d.initialErrors, d.initialStatus, d.initialTouched, d.onReset]);
    x.useEffect(function() {
      y.current === !0 && !nn(p.current, d.initialValues) && u && (p.current = d.initialValues, G(), s && W(p.current));
    }, [u, d.initialValues, G, s, W]), x.useEffect(function() {
      u && y.current === !0 && !nn(g.current, d.initialErrors) && (g.current = d.initialErrors || Dn, T({
        type: "SET_ERRORS",
        payload: d.initialErrors || Dn
      }));
    }, [u, d.initialErrors]), x.useEffect(function() {
      u && y.current === !0 && !nn(v.current, d.initialTouched) && (v.current = d.initialTouched || Do, T({
        type: "SET_TOUCHED",
        payload: d.initialTouched || Do
      }));
    }, [u, d.initialTouched]), x.useEffect(function() {
      u && y.current === !0 && !nn(k.current, d.initialStatus) && (k.current = d.initialStatus, T({
        type: "SET_STATUS",
        payload: d.initialStatus
      }));
    }, [u, d.initialStatus, d.initialTouched]);
    var Z = ot(function(w) {
      if (h.current[w] && Pe(h.current[w].validate)) {
        var M = ie(P.values, w), V = h.current[w].validate(M);
        return nl(V) ? (T({
          type: "SET_ISVALIDATING",
          payload: !0
        }), V.then(function($) {
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
            value: V
          }
        }), Promise.resolve(V));
      } else if (d.validationSchema)
        return T({
          type: "SET_ISVALIDATING",
          payload: !0
        }), L(P.values, w).then(function($) {
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
    }), Ee = x.useCallback(function(w, M) {
      var V = M.validate;
      h.current[w] = {
        validate: V
      };
    }, []), be = x.useCallback(function(w) {
      delete h.current[w];
    }, []), E = ot(function(w, M) {
      T({
        type: "SET_TOUCHED",
        payload: w
      });
      var V = M === void 0 ? i : M;
      return V ? W(P.values) : Promise.resolve();
    }), F = x.useCallback(function(w) {
      T({
        type: "SET_ERRORS",
        payload: w
      });
    }, []), D = ot(function(w, M) {
      var V = Pe(w) ? w(P.values) : w;
      T({
        type: "SET_VALUES",
        payload: V
      });
      var $ = M === void 0 ? n : M;
      return $ ? W(V) : Promise.resolve();
    }), j = x.useCallback(function(w, M) {
      T({
        type: "SET_FIELD_ERROR",
        payload: {
          field: w,
          value: M
        }
      });
    }, []), B = ot(function(w, M, V) {
      T({
        type: "SET_FIELD_VALUE",
        payload: {
          field: w,
          value: M
        }
      });
      var $ = V === void 0 ? n : V;
      return $ ? W(Ot(P.values, w, M)) : Promise.resolve();
    }), Re = x.useCallback(function(w, M) {
      var V = M, $ = w, b;
      if (!tl(w)) {
        w.persist && w.persist();
        var K = w.target ? w.target : w.currentTarget, ve = K.type, Rt = K.name, Ea = K.id, Ca = K.value, e0 = K.checked, tF = K.outerHTML, Sf = K.options, t0 = K.multiple;
        V = M || Rt || Ea, $ = /number|range/.test(ve) ? (b = parseFloat(Ca), isNaN(b) ? "" : b) : /checkbox/.test(ve) ? SP(ie(P.values, V), e0, Ca) : Sf && t0 ? vP(Sf) : Ca;
      }
      V && B(V, $);
    }, [B, P.values]), je = ot(function(w) {
      if (tl(w))
        return function(M) {
          return Re(M, w);
        };
      Re(w);
    }), Ke = ot(function(w, M, V) {
      M === void 0 && (M = !0), T({
        type: "SET_FIELD_TOUCHED",
        payload: {
          field: w,
          value: M
        }
      });
      var $ = V === void 0 ? i : V;
      return $ ? W(P.values) : Promise.resolve();
    }), Ae = x.useCallback(function(w, M) {
      w.persist && w.persist();
      var V = w.target, $ = V.name, b = V.id, K = V.outerHTML, ve = M || $ || b;
      Ke(ve, !0);
    }, [Ke]), ht = ot(function(w) {
      if (tl(w))
        return function(M) {
          return Ae(M, w);
        };
      Ae(w);
    }), co = x.useCallback(function(w) {
      Pe(w) ? T({
        type: "SET_FORMIK_STATE",
        payload: w
      }) : T({
        type: "SET_FORMIK_STATE",
        payload: function() {
          return w;
        }
      });
    }, []), lr = x.useCallback(function(w) {
      T({
        type: "SET_STATUS",
        payload: w
      });
    }, []), On = x.useCallback(function(w) {
      T({
        type: "SET_ISSUBMITTING",
        payload: w
      });
    }, []), pt = ot(function() {
      return T({
        type: "SUBMIT_ATTEMPT"
      }), W().then(function(w) {
        var M = w instanceof Error, V = !M && Object.keys(w).length === 0;
        if (V) {
          var $;
          try {
            if ($ = Kv(), $ === void 0)
              return;
          } catch (b) {
            throw b;
          }
          return Promise.resolve($).then(function(b) {
            return y.current && T({
              type: "SUBMIT_SUCCESS"
            }), b;
          }).catch(function(b) {
            if (y.current)
              throw T({
                type: "SUBMIT_FAILURE"
              }), b;
          });
        } else if (y.current && (T({
          type: "SUBMIT_FAILURE"
        }), M))
          throw w;
      });
    }), fo = ot(function(w) {
      w && w.preventDefault && Pe(w.preventDefault) && w.preventDefault(), w && w.stopPropagation && Pe(w.stopPropagation) && w.stopPropagation(), pt().catch(function(M) {
        console.warn("Warning: An unhandled error was caught from submitForm()", M);
      });
    }), Xr = {
      resetForm: G,
      validateForm: W,
      validateField: Z,
      setErrors: F,
      setFieldError: j,
      setFieldTouched: Ke,
      setFieldValue: B,
      setStatus: lr,
      setSubmitting: On,
      setTouched: E,
      setValues: D,
      setFormikState: co,
      submitForm: pt
    }, Kv = ot(function() {
      return c(P.values, Xr);
    }), Qv = ot(function(w) {
      w && w.preventDefault && Pe(w.preventDefault) && w.preventDefault(), w && w.stopPropagation && Pe(w.stopPropagation) && w.stopPropagation(), G();
    }), Yv = x.useCallback(function(w) {
      return {
        value: ie(P.values, w),
        error: ie(P.errors, w),
        touched: !!ie(P.touched, w),
        initialValue: ie(p.current, w),
        initialTouched: !!ie(v.current, w),
        initialError: ie(g.current, w)
      };
    }, [P.errors, P.touched, P.values]), Xv = x.useCallback(function(w) {
      return {
        setValue: function(V, $) {
          return B(w, V, $);
        },
        setTouched: function(V, $) {
          return Ke(w, V, $);
        },
        setError: function(V) {
          return j(w, V);
        }
      };
    }, [B, Ke, j]), Zv = x.useCallback(function(w) {
      var M = oo(w), V = M ? w.name : w, $ = ie(P.values, V), b = {
        name: V,
        value: $,
        onChange: je,
        onBlur: ht
      };
      if (M) {
        var K = w.type, ve = w.value, Rt = w.as, Ea = w.multiple;
        K === "checkbox" ? ve === void 0 ? b.checked = !!$ : (b.checked = !!(Array.isArray($) && ~$.indexOf(ve)), b.value = ve) : K === "radio" ? (b.checked = $ === ve, b.value = ve) : Rt === "select" && Ea && (b.value = b.value || [], b.multiple = !0);
      }
      return b;
    }, [ht, je, P.values]), Ta = x.useMemo(function() {
      return !nn(p.current, P.values);
    }, [p.current, P.values]), qv = x.useMemo(function() {
      return typeof a < "u" ? Ta ? P.errors && Object.keys(P.errors).length === 0 : a !== !1 && Pe(a) ? a(d) : a : P.errors && Object.keys(P.errors).length === 0;
    }, [a, Ta, P.errors, d]), Jv = Q({}, P, {
      initialValues: p.current,
      initialErrors: g.current,
      initialTouched: v.current,
      initialStatus: k.current,
      handleBlur: ht,
      handleChange: je,
      handleReset: Qv,
      handleSubmit: fo,
      resetForm: G,
      setErrors: F,
      setFormikState: co,
      setFieldTouched: Ke,
      setFieldValue: B,
      setFieldError: j,
      setStatus: lr,
      setSubmitting: On,
      setTouched: E,
      setValues: D,
      submitForm: pt,
      validateForm: W,
      validateField: Z,
      isValid: qv,
      dirty: Ta,
      unregisterField: be,
      registerField: Ee,
      getFieldProps: Zv,
      getFieldMeta: Yv,
      getFieldHelpers: Xv,
      validateOnBlur: i,
      validateOnChange: n,
      validateOnMount: s
    });
    return Jv;
  }
  function pP(e) {
    var t = hP(e), n = e.component, r = e.children, i = e.render, o = e.innerRef;
    return x.useImperativeHandle(o, function() {
      return t;
    }), x.createElement(uP, {
      value: t
    }, n ? x.createElement(n, t) : i ? i(t) : r ? Pe(r) ? r(t) : wg(r) ? null : x.Children.only(r) : null);
  }
  function mP(e) {
    var t = {};
    if (e.inner) {
      if (e.inner.length === 0)
        return Ot(t, e.path, e.message);
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
        ie(t, s.path) || (t = Ot(t, s.path, s.message));
      }
    }
    return t;
  }
  function yP(e, t, n, r) {
    n === void 0 && (n = !1);
    var i = Su(e);
    return t[n ? "validateSync" : "validate"](i, {
      abortEarly: !1,
      context: r || i
    });
  }
  function Su(e) {
    var t = Array.isArray(e) ? [] : {};
    for (var n in e)
      if (Object.prototype.hasOwnProperty.call(e, n)) {
        var r = String(n);
        Array.isArray(e[r]) === !0 ? t[r] = e[r].map(function(i) {
          return Array.isArray(i) === !0 || Vd(i) ? Su(i) : i !== "" ? i : void 0;
        }) : Vd(e[r]) ? t[r] = Su(e[r]) : t[r] = e[r] !== "" ? e[r] : void 0;
      }
    return t;
  }
  function gP(e, t, n) {
    var r = e.slice();
    return t.forEach(function(o, s) {
      if (typeof r[s] > "u") {
        var a = n.clone !== !1, l = a && n.isMergeableObject(o);
        r[s] = l ? hu(Array.isArray(o) ? [] : {}, o, n) : o;
      } else
        n.isMergeableObject(o) ? r[s] = hu(e[s], o, n) : e.indexOf(o) === -1 && r.push(o);
    }), r;
  }
  function vP(e) {
    return Array.from(e).filter(function(t) {
      return t.selected;
    }).map(function(t) {
      return t.value;
    });
  }
  function SP(e, t, n) {
    if (typeof e == "boolean")
      return !!t;
    var r = [], i = !1, o = -1;
    if (Array.isArray(e))
      r = e, o = e.indexOf(n), i = o >= 0;
    else if (!n || n == "true" || n == "false")
      return !!t;
    return t && n && !i ? r.concat(n) : i ? r.slice(0, o).concat(r.slice(o + 1)) : r;
  }
  var xP = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u" ? x.useLayoutEffect : x.useEffect;
  function ot(e) {
    var t = x.useRef(e);
    return xP(function() {
      t.current = e;
    }), x.useCallback(function() {
      for (var n = arguments.length, r = new Array(n), i = 0; i < n; i++)
        r[i] = arguments[i];
      return t.current.apply(void 0, r);
    }, []);
  }
  function Qc(e) {
    var t = e.validate, n = e.name, r = e.render, i = e.children, o = e.as, s = e.component, a = e.className, l = un(e, ["validate", "name", "render", "children", "as", "component", "className"]), u = ha(), c = un(u, ["validate", "validationSchema"]), f = c.registerField, d = c.unregisterField;
    x.useEffect(function() {
      return f(n, {
        validate: t
      }), function() {
        d(n);
      };
    }, [f, d, n, t]);
    var p = c.getFieldProps(Q({
      name: n
    }, l)), g = c.getFieldMeta(n), v = {
      field: p,
      form: c
    };
    if (r)
      return r(Q({}, v, {
        meta: g
      }));
    if (Pe(i))
      return i(Q({}, v, {
        meta: g
      }));
    if (s) {
      if (typeof s == "string") {
        var k = l.innerRef, y = un(l, ["innerRef"]);
        return x.createElement(s, Q({
          ref: k
        }, p, y, {
          className: a
        }), i);
      }
      return x.createElement(s, Q({
        field: p,
        form: c
      }, l, {
        className: a
      }), i);
    }
    var h = o || "input";
    if (typeof h == "string") {
      var m = l.innerRef, S = un(l, ["innerRef"]);
      return x.createElement(h, Q({
        ref: m
      }, p, S, {
        className: a
      }), i);
    }
    return x.createElement(h, Q({}, p, l, {
      className: a
    }), i);
  }
  var Eg = /* @__PURE__ */ x.forwardRef(function(e, t) {
    var n = e.action, r = un(e, ["action"]), i = n ?? "#", o = ha(), s = o.handleReset, a = o.handleSubmit;
    return x.createElement("form", Q({
      onSubmit: a,
      ref: t,
      onReset: s,
      action: i
    }, r));
  });
  Eg.displayName = "Form";
  function wP(e) {
    var t = function(i) {
      return x.createElement(cP, null, function(o) {
        return o || Gy(!1), x.createElement(e, Q({}, i, {
          formik: o
        }));
      });
    }, n = e.displayName || e.name || e.constructor && e.constructor.name || "Component";
    return t.WrappedComponent = e, t.displayName = "FormikConnect(" + n + ")", oP(
      t,
      e
      // cast type to ComponentClass (even if SFC)
    );
  }
  var TP = function(t, n, r) {
    var i = Zn(t), o = i[n];
    return i.splice(n, 1), i.splice(r, 0, o), i;
  }, EP = function(t, n, r) {
    var i = Zn(t), o = i[n];
    return i[n] = i[r], i[r] = o, i;
  }, rl = function(t, n, r) {
    var i = Zn(t);
    return i.splice(n, 0, r), i;
  }, CP = function(t, n, r) {
    var i = Zn(t);
    return i[n] = r, i;
  }, Zn = function(t) {
    if (t) {
      if (Array.isArray(t))
        return [].concat(t);
      var n = Object.keys(t).map(function(r) {
        return parseInt(r);
      }).reduce(function(r, i) {
        return i > r ? i : r;
      }, 0);
      return Array.from(Q({}, t, {
        length: n + 1
      }));
    } else
      return [];
  }, ph = function(t, n) {
    var r = typeof t == "function" ? t : n;
    return function(i) {
      if (Array.isArray(i) || oo(i)) {
        var o = Zn(i);
        return r(o);
      }
      return i;
    };
  }, PP = /* @__PURE__ */ function(e) {
    xg(t, e);
    function t(r) {
      var i;
      return i = e.call(this, r) || this, i.updateArrayField = function(o, s, a) {
        var l = i.props, u = l.name, c = l.formik.setFormikState;
        c(function(f) {
          var d = ph(a, o), p = ph(s, o), g = Ot(f.values, u, o(ie(f.values, u))), v = a ? d(ie(f.errors, u)) : void 0, k = s ? p(ie(f.touched, u)) : void 0;
          return hh(v) && (v = void 0), hh(k) && (k = void 0), Q({}, f, {
            values: g,
            errors: a ? Ot(f.errors, u, v) : f.errors,
            touched: s ? Ot(f.touched, u, k) : f.touched
          });
        });
      }, i.push = function(o) {
        return i.updateArrayField(function(s) {
          return [].concat(Zn(s), [lP(o)]);
        }, !1, !1);
      }, i.handlePush = function(o) {
        return function() {
          return i.push(o);
        };
      }, i.swap = function(o, s) {
        return i.updateArrayField(function(a) {
          return EP(a, o, s);
        }, !0, !0);
      }, i.handleSwap = function(o, s) {
        return function() {
          return i.swap(o, s);
        };
      }, i.move = function(o, s) {
        return i.updateArrayField(function(a) {
          return TP(a, o, s);
        }, !0, !0);
      }, i.handleMove = function(o, s) {
        return function() {
          return i.move(o, s);
        };
      }, i.insert = function(o, s) {
        return i.updateArrayField(function(a) {
          return rl(a, o, s);
        }, function(a) {
          return rl(a, o, null);
        }, function(a) {
          return rl(a, o, null);
        });
      }, i.handleInsert = function(o, s) {
        return function() {
          return i.insert(o, s);
        };
      }, i.replace = function(o, s) {
        return i.updateArrayField(function(a) {
          return CP(a, o, s);
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
      }, i.remove = i.remove.bind(dh(i)), i.pop = i.pop.bind(dh(i)), i;
    }
    var n = t.prototype;
    return n.componentDidUpdate = function(i) {
      this.props.validateOnChange && this.props.formik.validateOnChange && !nn(ie(i.formik.values, i.name), ie(this.props.formik.values, this.props.name)) && this.props.formik.validateForm(this.props.formik.values);
    }, n.remove = function(i) {
      var o;
      return this.updateArrayField(
        // so this gets call 3 times
        function(s) {
          var a = s ? Zn(s) : [];
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
      }, o = this.props, s = o.component, a = o.render, l = o.children, u = o.name, c = o.formik, f = un(c, ["validate", "validationSchema"]), d = Q({}, i, {
        form: f,
        name: u
      });
      return s ? x.createElement(s, d) : a ? a(d) : l ? typeof l == "function" ? l(d) : wg(l) ? null : x.Children.only(l) : null;
    }, t;
  }(x.Component);
  PP.defaultProps = {
    validateOnChange: !0
  };
  var kP = /* @__PURE__ */ function(e) {
    xg(t, e);
    function t() {
      return e.apply(this, arguments) || this;
    }
    var n = t.prototype;
    return n.shouldComponentUpdate = function(i) {
      return ie(this.props.formik.errors, this.props.name) !== ie(i.formik.errors, this.props.name) || ie(this.props.formik.touched, this.props.name) !== ie(i.formik.touched, this.props.name) || Object.keys(this.props).length !== Object.keys(i).length;
    }, n.render = function() {
      var i = this.props, o = i.component, s = i.formik, a = i.render, l = i.children, u = i.name, c = un(i, ["component", "formik", "render", "children", "name"]), f = ie(s.touched, u), d = ie(s.errors, u);
      return f && d ? a ? Pe(a) ? a(d) : null : l ? Pe(l) ? l(d) : null : o ? x.createElement(o, c, d) : d : null;
    }, t;
  }(x.Component), Yc = /* @__PURE__ */ wP(kP);
  const Cg = x.createContext();
  function Xc() {
    const e = x.useContext(Cg);
    if (e === void 0)
      throw new Error("useWizard must be used within the Wizard app!");
    return e;
  }
  function _P({ step: e }) {
    const { submitForm: t, setFieldValue: n } = ha();
    x.useEffect(() => {
      const i = r(e);
      i && i.forEach((o) => {
        const s = document.querySelectorAll(`input[name='${o}']`);
        for (let a = 0; a < s.length; ++a)
          s[a].addEventListener("click", (l) => {
            n(o, l.target.value), setTimeout(t, 0);
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
  function mh(e) {
    const t = window.location.hash.slice(1);
    return e[t];
  }
  function FP(e, t) {
    const n = Object.keys(e).find((r) => e[r].id === t.id);
    window.location.hash = n;
  }
  function OP(e) {
    let t = {};
    return Object.keys(e).forEach((n) => {
      t = {
        ...t,
        ...e[n]
      };
    }), t;
  }
  function DP({
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
    r && (l = AP(e), a = mh(l) || a);
    const [u, c] = x.useState(a), [f, d] = x.useState(!1), [p, g] = x.useState({}), v = e.findIndex((E) => E.id === u.id), k = v + 1, y = e.length, h = k === 1, m = k === y;
    x.useEffect(() => {
      if (r)
        return window.addEventListener("hashchange", S), FP(l, u), () => window.removeEventListener("hashchange", S);
    }, [u]);
    function S(E) {
      const F = mh(l);
      (F == null ? void 0 : F.id) !== u.id && c(F);
    }
    async function C(E, F, D) {
      let j;
      for (let B = 0; B < E.length; ++B) {
        const Re = E[B];
        if (!Re.hasOwnProperty("shouldSkip")) {
          j = Re;
          break;
        }
        if (!await Re.shouldSkip(F, D)) {
          j = Re;
          break;
        }
      }
      return j;
    }
    async function P(E) {
      const F = e.slice(v + 1), D = await C(F, E, 1);
      if (!D) {
        _(E);
        return;
      }
      return D;
    }
    async function T(E) {
      const F = e.slice(0, v).reverse();
      return await C(F, E, -1);
    }
    function _(E) {
      E = OP(E), t(E);
    }
    function L(E, F) {
      c(E), F.resetForm({ values: Ee(E) });
    }
    async function O(E, F) {
      try {
        u.onSubmit && (F.setStatus(""), d(!0), E = await u.onSubmit(E, p, F), d(!1));
        const D = {
          ...p,
          [u.id]: E
        };
        g(D);
        const j = await P(D);
        n && n(u, j, D), L(j || u, F);
      } catch (D) {
        console.log(D), d(!1), F.setStatus(D.message);
      }
    }
    async function U(E, F) {
      let D = null;
      (u.keepValuesOnPrevious ?? !0) && (D = {
        ...p,
        [u.id]: E
      }, g(D)), D = D || p;
      const j = await T(D);
      n && n(u, j, D), L(j || u, F);
    }
    function de(E) {
      return E ? (F) => E(F, p) : null;
    }
    function W(E, F) {
      L(e[E], F);
    }
    function G(E) {
      c({ ...u, hideNext: E });
    }
    function Z(E) {
      c({ ...u, disableNext: E });
    }
    function Ee(E) {
      return p[E.id] || E.initialValues || {};
    }
    function be(E) {
      return {
        values: p,
        setValues: g,
        setHideNext: G,
        setDisableNext: Z,
        setIsLoading: d,
        goToPreviousStep: () => U(E.values, E),
        goToNextStep: () => O(E.values, E),
        goToStep: (F) => W(F, E),
        activeStep: u,
        stepNumber: k,
        totalSteps: y,
        isLoading: f,
        isFirstStep: h,
        isLastStep: m,
        // navigation
        hidePrevious: u.hidePrevious,
        hideNext: u.hideNext,
        disableNext: u.disableNext,
        disableNextOnErrors: u.disableNextOnErrors && !E.isValid,
        // allow form validation even if btn is disabled to show validation errors
        onClickNext: u.disableNext || u.disableNextOnErrors ? async () => {
          const F = await E.validateForm();
          Object.keys(F).forEach((D) => {
            E.setFieldTouched(D, !0, !1);
          });
        } : null
      };
    }
    return /* @__PURE__ */ I.jsx(
      pP,
      {
        initialValues: Ee(u),
        validationSchema: u.validationSchema,
        validate: de(u.validate),
        validateOnChange: u.validateOnChange ?? !0,
        validateOnBlur: u.validateOnBlur ?? !0,
        onSubmit: O,
        children: (E) => {
          const F = be(E), D = o || u.component;
          return /* @__PURE__ */ I.jsx(Cg.Provider, { value: F, children: /* @__PURE__ */ I.jsxs(Eg, { children: [
            i,
            u.submitOnChange && /* @__PURE__ */ I.jsx(_P, { step: u }),
            D,
            s
          ] }) });
        }
      }
    );
  }
  const Pg = x.createContext({
    transformPagePoint: (e) => e,
    isStatic: !1,
    reducedMotion: "never"
  }), pa = x.createContext({}), ma = x.createContext(null), ya = typeof document < "u", Zc = ya ? x.useLayoutEffect : x.useEffect, kg = x.createContext({ strict: !1 });
  function MP(e, t, n, r) {
    const { visualElement: i } = x.useContext(pa), o = x.useContext(kg), s = x.useContext(ma), a = x.useContext(Pg).reducedMotion, l = x.useRef();
    r = r || o.renderer, !l.current && r && (l.current = r(e, {
      visualState: t,
      parent: i,
      props: n,
      presenceContext: s,
      blockInitialAnimation: s ? s.initial === !1 : !1,
      reducedMotionConfig: a
    }));
    const u = l.current;
    x.useInsertionEffect(() => {
      u && u.update(n, s);
    });
    const c = x.useRef(!!window.HandoffAppearAnimations);
    return Zc(() => {
      u && (u.render(), c.current && u.animationState && u.animationState.animateChanges());
    }), x.useEffect(() => {
      u && (u.updateFeatures(), !c.current && u.animationState && u.animationState.animateChanges(), window.HandoffAppearAnimations = void 0, c.current = !1);
    }), u;
  }
  function Pr(e) {
    return typeof e == "object" && Object.prototype.hasOwnProperty.call(e, "current");
  }
  function RP(e, t, n) {
    return x.useCallback(
      (r) => {
        r && e.mount && e.mount(r), t && (r ? t.mount(r) : t.unmount()), n && (typeof n == "function" ? n(r) : Pr(n) && (n.current = r));
      },
      /**
       * Only pass a new ref callback to React if we've received a visual element
       * factory. Otherwise we'll be mounting/remounting every time externalRef
       * or other dependencies change.
       */
      [t]
    );
  }
  function Yi(e) {
    return typeof e == "string" || Array.isArray(e);
  }
  function ga(e) {
    return typeof e == "object" && typeof e.start == "function";
  }
  const qc = [
    "animate",
    "whileInView",
    "whileFocus",
    "whileHover",
    "whileTap",
    "whileDrag",
    "exit"
  ], Jc = ["initial", ...qc];
  function va(e) {
    return ga(e.animate) || Jc.some((t) => Yi(e[t]));
  }
  function _g(e) {
    return !!(va(e) || e.variants);
  }
  function jP(e, t) {
    if (va(e)) {
      const { initial: n, animate: r } = e;
      return {
        initial: n === !1 || Yi(n) ? n : void 0,
        animate: Yi(r) ? r : void 0
      };
    }
    return e.inherit !== !1 ? t : {};
  }
  function LP(e) {
    const { initial: t, animate: n } = jP(e, x.useContext(pa));
    return x.useMemo(() => ({ initial: t, animate: n }), [yh(t), yh(n)]);
  }
  function yh(e) {
    return Array.isArray(e) ? e.join(" ") : e;
  }
  const gh = {
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
  }, Xi = {};
  for (const e in gh)
    Xi[e] = {
      isEnabled: (t) => gh[e].some((n) => !!t[n])
    };
  function VP(e) {
    for (const t in e)
      Xi[t] = {
        ...Xi[t],
        ...e[t]
      };
  }
  const ef = x.createContext({}), Ag = x.createContext({}), $P = Symbol.for("motionComponentSymbol");
  function NP({ preloadedFeatures: e, createVisualElement: t, useRender: n, useVisualState: r, Component: i }) {
    e && VP(e);
    function o(a, l) {
      let u;
      const c = {
        ...x.useContext(Pg),
        ...a,
        layoutId: IP(a)
      }, { isStatic: f } = c, d = LP(a), p = r(a, f);
      if (!f && ya) {
        d.visualElement = MP(i, p, c, t);
        const g = x.useContext(Ag), v = x.useContext(kg).strict;
        d.visualElement && (u = d.visualElement.loadFeatures(
          // Note: Pass the full new combined props to correctly re-render dynamic feature components.
          c,
          v,
          e,
          g
        ));
      }
      return x.createElement(
        pa.Provider,
        { value: d },
        u && d.visualElement ? x.createElement(u, { visualElement: d.visualElement, ...c }) : null,
        n(i, a, RP(p, d.visualElement, l), p, f, d.visualElement)
      );
    }
    const s = x.forwardRef(o);
    return s[$P] = i, s;
  }
  function IP({ layoutId: e }) {
    const t = x.useContext(ef).id;
    return t && e !== void 0 ? t + "-" + e : e;
  }
  function bP(e) {
    function t(r, i = {}) {
      return NP(e(r, i));
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
  const zP = [
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
  function tf(e) {
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
        !!(zP.indexOf(e) > -1 || /**
         * If it contains a capital letter, it's an SVG component
         */
        /[A-Z]/.test(e))
      )
    );
  }
  const Ps = {};
  function BP(e) {
    Object.assign(Ps, e);
  }
  const so = [
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
  ], sr = new Set(so);
  function Fg(e, { layout: t, layoutId: n }) {
    return sr.has(e) || e.startsWith("origin") || (t || n !== void 0) && (!!Ps[e] || e === "opacity");
  }
  const Ge = (e) => !!(e && e.getVelocity), UP = {
    x: "translateX",
    y: "translateY",
    z: "translateZ",
    transformPerspective: "perspective"
  }, HP = so.length;
  function WP(e, { enableHardwareAcceleration: t = !0, allowTransformNone: n = !0 }, r, i) {
    let o = "";
    for (let s = 0; s < HP; s++) {
      const a = so[s];
      if (e[a] !== void 0) {
        const l = UP[a] || a;
        o += `${l}(${e[a]}) `;
      }
    }
    return t && !e.z && (o += "translateZ(0)"), o = o.trim(), i ? o = i(e, r ? "" : o) : n && r && (o = "none"), o;
  }
  const Og = (e) => (t) => typeof t == "string" && t.startsWith(e), Dg = Og("--"), xu = Og("var(--"), GP = /var\s*\(\s*--[\w-]+(\s*,\s*(?:(?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)+)?\s*\)/g, KP = (e, t) => t && typeof e == "number" ? t.transform(e) : e, En = (e, t, n) => Math.min(Math.max(n, e), t), ar = {
    test: (e) => typeof e == "number",
    parse: parseFloat,
    transform: (e) => e
  }, Pi = {
    ...ar,
    transform: (e) => En(0, 1, e)
  }, Mo = {
    ...ar,
    default: 1
  }, ki = (e) => Math.round(e * 1e5) / 1e5, Sa = /(-)?([\d]*\.?[\d])+/g, Mg = /(#[0-9a-f]{3,8}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))/gi, QP = /^(#[0-9a-f]{3,8}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))$/i;
  function ao(e) {
    return typeof e == "string";
  }
  const lo = (e) => ({
    test: (t) => ao(t) && t.endsWith(e) && t.split(" ").length === 1,
    parse: parseFloat,
    transform: (t) => `${t}${e}`
  }), Jt = lo("deg"), Dt = lo("%"), N = lo("px"), YP = lo("vh"), XP = lo("vw"), vh = {
    ...Dt,
    parse: (e) => Dt.parse(e) / 100,
    transform: (e) => Dt.transform(e * 100)
  }, Sh = {
    ...ar,
    transform: Math.round
  }, Rg = {
    // Border props
    borderWidth: N,
    borderTopWidth: N,
    borderRightWidth: N,
    borderBottomWidth: N,
    borderLeftWidth: N,
    borderRadius: N,
    radius: N,
    borderTopLeftRadius: N,
    borderTopRightRadius: N,
    borderBottomRightRadius: N,
    borderBottomLeftRadius: N,
    // Positioning props
    width: N,
    maxWidth: N,
    height: N,
    maxHeight: N,
    size: N,
    top: N,
    right: N,
    bottom: N,
    left: N,
    // Spacing props
    padding: N,
    paddingTop: N,
    paddingRight: N,
    paddingBottom: N,
    paddingLeft: N,
    margin: N,
    marginTop: N,
    marginRight: N,
    marginBottom: N,
    marginLeft: N,
    // Transform props
    rotate: Jt,
    rotateX: Jt,
    rotateY: Jt,
    rotateZ: Jt,
    scale: Mo,
    scaleX: Mo,
    scaleY: Mo,
    scaleZ: Mo,
    skew: Jt,
    skewX: Jt,
    skewY: Jt,
    distance: N,
    translateX: N,
    translateY: N,
    translateZ: N,
    x: N,
    y: N,
    z: N,
    perspective: N,
    transformPerspective: N,
    opacity: Pi,
    originX: vh,
    originY: vh,
    originZ: N,
    // Misc
    zIndex: Sh,
    // SVG
    fillOpacity: Pi,
    strokeOpacity: Pi,
    numOctaves: Sh
  };
  function nf(e, t, n, r) {
    const { style: i, vars: o, transform: s, transformOrigin: a } = e;
    let l = !1, u = !1, c = !0;
    for (const f in t) {
      const d = t[f];
      if (Dg(f)) {
        o[f] = d;
        continue;
      }
      const p = Rg[f], g = KP(d, p);
      if (sr.has(f)) {
        if (l = !0, s[f] = g, !c)
          continue;
        d !== (p.default || 0) && (c = !1);
      } else
        f.startsWith("origin") ? (u = !0, a[f] = g) : i[f] = g;
    }
    if (t.transform || (l || r ? i.transform = WP(e.transform, n, c, r) : i.transform && (i.transform = "none")), u) {
      const { originX: f = "50%", originY: d = "50%", originZ: p = 0 } = a;
      i.transformOrigin = `${f} ${d} ${p}`;
    }
  }
  const rf = () => ({
    style: {},
    transform: {},
    transformOrigin: {},
    vars: {}
  });
  function jg(e, t, n) {
    for (const r in t)
      !Ge(t[r]) && !Fg(r, n) && (e[r] = t[r]);
  }
  function ZP({ transformTemplate: e }, t, n) {
    return x.useMemo(() => {
      const r = rf();
      return nf(r, t, { enableHardwareAcceleration: !n }, e), Object.assign({}, r.vars, r.style);
    }, [t]);
  }
  function qP(e, t, n) {
    const r = e.style || {}, i = {};
    return jg(i, r, e), Object.assign(i, ZP(e, t, n)), e.transformValues ? e.transformValues(i) : i;
  }
  function JP(e, t, n) {
    const r = {}, i = qP(e, t, n);
    return e.drag && e.dragListener !== !1 && (r.draggable = !1, i.userSelect = i.WebkitUserSelect = i.WebkitTouchCallout = "none", i.touchAction = e.drag === !0 ? "none" : `pan-${e.drag === "x" ? "y" : "x"}`), e.tabIndex === void 0 && (e.onTap || e.onTapStart || e.whileTap) && (r.tabIndex = 0), r.style = i, r;
  }
  const ek = /* @__PURE__ */ new Set([
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
  function ks(e) {
    return e.startsWith("while") || e.startsWith("drag") && e !== "draggable" || e.startsWith("layout") || e.startsWith("onTap") || e.startsWith("onPan") || ek.has(e);
  }
  let Lg = (e) => !ks(e);
  function tk(e) {
    e && (Lg = (t) => t.startsWith("on") ? !ks(t) : e(t));
  }
  try {
    tk(require("@emotion/is-prop-valid").default);
  } catch {
  }
  function nk(e, t, n) {
    const r = {};
    for (const i in e)
      i === "values" && typeof e.values == "object" || (Lg(i) || n === !0 && ks(i) || !t && !ks(i) || // If trying to use native HTML drag events, forward drag listeners
      e.draggable && i.startsWith("onDrag")) && (r[i] = e[i]);
    return r;
  }
  function xh(e, t, n) {
    return typeof e == "string" ? e : N.transform(t + n * e);
  }
  function rk(e, t, n) {
    const r = xh(t, e.x, e.width), i = xh(n, e.y, e.height);
    return `${r} ${i}`;
  }
  const ik = {
    offset: "stroke-dashoffset",
    array: "stroke-dasharray"
  }, ok = {
    offset: "strokeDashoffset",
    array: "strokeDasharray"
  };
  function sk(e, t, n = 1, r = 0, i = !0) {
    e.pathLength = 1;
    const o = i ? ik : ok;
    e[o.offset] = N.transform(-r);
    const s = N.transform(t), a = N.transform(n);
    e[o.array] = `${s} ${a}`;
  }
  function of(e, {
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
    if (nf(e, u, c, d), f) {
      e.style.viewBox && (e.attrs.viewBox = e.style.viewBox);
      return;
    }
    e.attrs = e.style, e.style = {};
    const { attrs: p, style: g, dimensions: v } = e;
    p.transform && (v && (g.transform = p.transform), delete p.transform), v && (i !== void 0 || o !== void 0 || g.transform) && (g.transformOrigin = rk(v, i !== void 0 ? i : 0.5, o !== void 0 ? o : 0.5)), t !== void 0 && (p.x = t), n !== void 0 && (p.y = n), r !== void 0 && (p.scale = r), s !== void 0 && sk(p, s, a, l, !1);
  }
  const Vg = () => ({
    ...rf(),
    attrs: {}
  }), sf = (e) => typeof e == "string" && e.toLowerCase() === "svg";
  function ak(e, t, n, r) {
    const i = x.useMemo(() => {
      const o = Vg();
      return of(o, t, { enableHardwareAcceleration: !1 }, sf(r), e.transformTemplate), {
        ...o.attrs,
        style: { ...o.style }
      };
    }, [t]);
    if (e.style) {
      const o = {};
      jg(o, e.style, e), i.style = { ...o, ...i.style };
    }
    return i;
  }
  function lk(e = !1) {
    return (n, r, i, { latestValues: o }, s) => {
      const l = (tf(n) ? ak : JP)(r, o, s, n), c = {
        ...nk(r, typeof n == "string", e),
        ...l,
        ref: i
      }, { children: f } = r, d = x.useMemo(() => Ge(f) ? f.get() : f, [f]);
      return x.createElement(n, {
        ...c,
        children: d
      });
    };
  }
  const af = (e) => e.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase();
  function $g(e, { style: t, vars: n }, r, i) {
    Object.assign(e.style, t, i && i.getProjectionStyles(r));
    for (const o in n)
      e.style.setProperty(o, n[o]);
  }
  const Ng = /* @__PURE__ */ new Set([
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
  function Ig(e, t, n, r) {
    $g(e, t, void 0, r);
    for (const i in t.attrs)
      e.setAttribute(Ng.has(i) ? i : af(i), t.attrs[i]);
  }
  function lf(e, t) {
    const { style: n } = e, r = {};
    for (const i in n)
      (Ge(n[i]) || t.style && Ge(t.style[i]) || Fg(i, e)) && (r[i] = n[i]);
    return r;
  }
  function bg(e, t) {
    const n = lf(e, t);
    for (const r in e)
      if (Ge(e[r]) || Ge(t[r])) {
        const i = so.indexOf(r) !== -1 ? "attr" + r.charAt(0).toUpperCase() + r.substring(1) : r;
        n[i] = e[r];
      }
    return n;
  }
  function uf(e, t, n, r = {}, i = {}) {
    return typeof t == "function" && (t = t(n !== void 0 ? n : e.custom, r, i)), typeof t == "string" && (t = e.variants && e.variants[t]), typeof t == "function" && (t = t(n !== void 0 ? n : e.custom, r, i)), t;
  }
  function zg(e) {
    const t = x.useRef(null);
    return t.current === null && (t.current = e()), t.current;
  }
  const _s = (e) => Array.isArray(e), uk = (e) => !!(e && typeof e == "object" && e.mix && e.toValue), ck = (e) => _s(e) ? e[e.length - 1] || 0 : e;
  function Yo(e) {
    const t = Ge(e) ? e.get() : e;
    return uk(t) ? t.toValue() : t;
  }
  function fk({ scrapeMotionValuesFromProps: e, createRenderState: t, onMount: n }, r, i, o) {
    const s = {
      latestValues: dk(r, i, o, e),
      renderState: t()
    };
    return n && (s.mount = (a) => n(r, a, s)), s;
  }
  const Bg = (e) => (t, n) => {
    const r = x.useContext(pa), i = x.useContext(ma), o = () => fk(e, t, r, i);
    return n ? o() : zg(o);
  };
  function dk(e, t, n, r) {
    const i = {}, o = r(e, {});
    for (const d in o)
      i[d] = Yo(o[d]);
    let { initial: s, animate: a } = e;
    const l = va(e), u = _g(e);
    t && u && !l && e.inherit !== !1 && (s === void 0 && (s = t.initial), a === void 0 && (a = t.animate));
    let c = n ? n.initial === !1 : !1;
    c = c || s === !1;
    const f = c ? a : s;
    return f && typeof f != "boolean" && !ga(f) && (Array.isArray(f) ? f : [f]).forEach((p) => {
      const g = uf(e, p);
      if (!g)
        return;
      const { transitionEnd: v, transition: k, ...y } = g;
      for (const h in y) {
        let m = y[h];
        if (Array.isArray(m)) {
          const S = c ? m.length - 1 : 0;
          m = m[S];
        }
        m !== null && (i[h] = m);
      }
      for (const h in v)
        i[h] = v[h];
    }), i;
  }
  const fe = (e) => e;
  class wh {
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
  function hk(e) {
    let t = new wh(), n = new wh(), r = 0, i = !1, o = !1;
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
  const Ro = [
    "prepare",
    "read",
    "update",
    "preRender",
    "render",
    "postRender"
  ], pk = 40;
  function mk(e, t) {
    let n = !1, r = !0;
    const i = {
      delta: 0,
      timestamp: 0,
      isProcessing: !1
    }, o = Ro.reduce((f, d) => (f[d] = hk(() => n = !0), f), {}), s = (f) => o[f].process(i), a = () => {
      const f = performance.now();
      n = !1, i.delta = r ? 1e3 / 60 : Math.max(Math.min(f - i.timestamp, pk), 1), i.timestamp = f, i.isProcessing = !0, Ro.forEach(s), i.isProcessing = !1, n && t && (r = !1, e(a));
    }, l = () => {
      n = !0, r = !0, i.isProcessing || e(a);
    };
    return { schedule: Ro.reduce((f, d) => {
      const p = o[d];
      return f[d] = (g, v = !1, k = !1) => (n || l(), p.schedule(g, v, k)), f;
    }, {}), cancel: (f) => Ro.forEach((d) => o[d].cancel(f)), state: i, steps: o };
  }
  const { schedule: ee, cancel: Qt, state: Se, steps: il } = mk(typeof requestAnimationFrame < "u" ? requestAnimationFrame : fe, !0), yk = {
    useVisualState: Bg({
      scrapeMotionValuesFromProps: bg,
      createRenderState: Vg,
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
          of(n, r, { enableHardwareAcceleration: !1 }, sf(t.tagName), e.transformTemplate), Ig(t, n);
        });
      }
    })
  }, gk = {
    useVisualState: Bg({
      scrapeMotionValuesFromProps: lf,
      createRenderState: rf
    })
  };
  function vk(e, { forwardMotionProps: t = !1 }, n, r) {
    return {
      ...tf(e) ? yk : gk,
      preloadedFeatures: n,
      useRender: lk(t),
      createVisualElement: r,
      Component: e
    };
  }
  function bt(e, t, n, r = { passive: !0 }) {
    return e.addEventListener(t, n, r), () => e.removeEventListener(t, n);
  }
  const Ug = (e) => e.pointerType === "mouse" ? typeof e.button != "number" || e.button <= 0 : e.isPrimary !== !1;
  function xa(e, t = "page") {
    return {
      point: {
        x: e[t + "X"],
        y: e[t + "Y"]
      }
    };
  }
  const Sk = (e) => (t) => Ug(t) && e(t, xa(t));
  function Bt(e, t, n, r) {
    return bt(e, t, Sk(n), r);
  }
  const xk = (e, t) => (n) => t(e(n)), vn = (...e) => e.reduce(xk);
  function Hg(e) {
    let t = null;
    return () => {
      const n = () => {
        t = null;
      };
      return t === null ? (t = e, n) : !1;
    };
  }
  const Th = Hg("dragHorizontal"), Eh = Hg("dragVertical");
  function Wg(e) {
    let t = !1;
    if (e === "y")
      t = Eh();
    else if (e === "x")
      t = Th();
    else {
      const n = Th(), r = Eh();
      n && r ? t = () => {
        n(), r();
      } : (n && n(), r && r());
    }
    return t;
  }
  function Gg() {
    const e = Wg(!0);
    return e ? (e(), !1) : !0;
  }
  class Fn {
    constructor(t) {
      this.isMounted = !1, this.node = t;
    }
    update() {
    }
  }
  function Ch(e, t) {
    const n = "pointer" + (t ? "enter" : "leave"), r = "onHover" + (t ? "Start" : "End"), i = (o, s) => {
      if (o.type === "touch" || Gg())
        return;
      const a = e.getProps();
      e.animationState && a.whileHover && e.animationState.setActive("whileHover", t), a[r] && ee.update(() => a[r](o, s));
    };
    return Bt(e.current, n, i, {
      passive: !e.getProps()[r]
    });
  }
  class wk extends Fn {
    mount() {
      this.unmount = vn(Ch(this.node, !0), Ch(this.node, !1));
    }
    unmount() {
    }
  }
  class Tk extends Fn {
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
      this.unmount = vn(bt(this.node.current, "focus", () => this.onFocus()), bt(this.node.current, "blur", () => this.onBlur()));
    }
    unmount() {
    }
  }
  const Kg = (e, t) => t ? e === t ? !0 : Kg(e, t.parentElement) : !1;
  function ol(e, t) {
    if (!t)
      return;
    const n = new PointerEvent("pointer" + e);
    t(n, xa(n));
  }
  class Ek extends Fn {
    constructor() {
      super(...arguments), this.removeStartListeners = fe, this.removeEndListeners = fe, this.removeAccessibleListeners = fe, this.startPointerPress = (t, n) => {
        if (this.removeEndListeners(), this.isPressing)
          return;
        const r = this.node.getProps(), o = Bt(window, "pointerup", (a, l) => {
          if (!this.checkPressEnd())
            return;
          const { onTap: u, onTapCancel: c } = this.node.getProps();
          ee.update(() => {
            Kg(this.node.current, a.target) ? u && u(a, l) : c && c(a, l);
          });
        }, { passive: !(r.onTap || r.onPointerUp) }), s = Bt(window, "pointercancel", (a, l) => this.cancelPress(a, l), { passive: !(r.onTapCancel || r.onPointerCancel) });
        this.removeEndListeners = vn(o, s), this.startPress(t, n);
      }, this.startAccessiblePress = () => {
        const t = (o) => {
          if (o.key !== "Enter" || this.isPressing)
            return;
          const s = (a) => {
            a.key !== "Enter" || !this.checkPressEnd() || ol("up", (l, u) => {
              const { onTap: c } = this.node.getProps();
              c && ee.update(() => c(l, u));
            });
          };
          this.removeEndListeners(), this.removeEndListeners = bt(this.node.current, "keyup", s), ol("down", (a, l) => {
            this.startPress(a, l);
          });
        }, n = bt(this.node.current, "keydown", t), r = () => {
          this.isPressing && ol("cancel", (o, s) => this.cancelPress(o, s));
        }, i = bt(this.node.current, "blur", r);
        this.removeAccessibleListeners = vn(n, i);
      };
    }
    startPress(t, n) {
      this.isPressing = !0;
      const { onTapStart: r, whileTap: i } = this.node.getProps();
      i && this.node.animationState && this.node.animationState.setActive("whileTap", !0), r && ee.update(() => r(t, n));
    }
    checkPressEnd() {
      return this.removeEndListeners(), this.isPressing = !1, this.node.getProps().whileTap && this.node.animationState && this.node.animationState.setActive("whileTap", !1), !Gg();
    }
    cancelPress(t, n) {
      if (!this.checkPressEnd())
        return;
      const { onTapCancel: r } = this.node.getProps();
      r && ee.update(() => r(t, n));
    }
    mount() {
      const t = this.node.getProps(), n = Bt(this.node.current, "pointerdown", this.startPointerPress, { passive: !(t.onTapStart || t.onPointerStart) }), r = bt(this.node.current, "focus", this.startAccessiblePress);
      this.removeStartListeners = vn(n, r);
    }
    unmount() {
      this.removeStartListeners(), this.removeEndListeners(), this.removeAccessibleListeners();
    }
  }
  const wu = /* @__PURE__ */ new WeakMap(), sl = /* @__PURE__ */ new WeakMap(), Ck = (e) => {
    const t = wu.get(e.target);
    t && t(e);
  }, Pk = (e) => {
    e.forEach(Ck);
  };
  function kk({ root: e, ...t }) {
    const n = e || document;
    sl.has(n) || sl.set(n, {});
    const r = sl.get(n), i = JSON.stringify(t);
    return r[i] || (r[i] = new IntersectionObserver(Pk, { root: e, ...t })), r[i];
  }
  function _k(e, t, n) {
    const r = kk(t);
    return wu.set(e, n), r.observe(e), () => {
      wu.delete(e), r.unobserve(e);
    };
  }
  const Ak = {
    some: 0,
    all: 1
  };
  class Fk extends Fn {
    constructor() {
      super(...arguments), this.hasEnteredView = !1, this.isInView = !1;
    }
    startObserver() {
      this.unmount();
      const { viewport: t = {} } = this.node.getProps(), { root: n, margin: r, amount: i = "some", once: o } = t, s = {
        root: n ? n.current : void 0,
        rootMargin: r,
        threshold: typeof i == "number" ? i : Ak[i]
      }, a = (l) => {
        const { isIntersecting: u } = l;
        if (this.isInView === u || (this.isInView = u, o && !u && this.hasEnteredView))
          return;
        u && (this.hasEnteredView = !0), this.node.animationState && this.node.animationState.setActive("whileInView", u);
        const { onViewportEnter: c, onViewportLeave: f } = this.node.getProps(), d = u ? c : f;
        d && d(l);
      };
      return _k(this.node.current, s, a);
    }
    mount() {
      this.startObserver();
    }
    update() {
      if (typeof IntersectionObserver > "u")
        return;
      const { props: t, prevProps: n } = this.node;
      ["amount", "margin", "root"].some(Ok(t, n)) && this.startObserver();
    }
    unmount() {
    }
  }
  function Ok({ viewport: e = {} }, { viewport: t = {} } = {}) {
    return (n) => e[n] !== t[n];
  }
  const Dk = {
    inView: {
      Feature: Fk
    },
    tap: {
      Feature: Ek
    },
    focus: {
      Feature: Tk
    },
    hover: {
      Feature: wk
    }
  };
  function Qg(e, t) {
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
  function Mk(e) {
    const t = {};
    return e.values.forEach((n, r) => t[r] = n.get()), t;
  }
  function Rk(e) {
    const t = {};
    return e.values.forEach((n, r) => t[r] = n.getVelocity()), t;
  }
  function wa(e, t, n) {
    const r = e.getProps();
    return uf(r, t, n !== void 0 ? n : r.custom, Mk(e), Rk(e));
  }
  const jk = "framerAppearId", Lk = "data-" + af(jk);
  let Vk = fe, cf = fe;
  const Sn = (e) => e * 1e3, Ut = (e) => e / 1e3, $k = {
    current: !1
  }, Yg = (e) => Array.isArray(e) && typeof e[0] == "number";
  function Xg(e) {
    return !!(!e || typeof e == "string" && Zg[e] || Yg(e) || Array.isArray(e) && e.every(Xg));
  }
  const di = ([e, t, n, r]) => `cubic-bezier(${e}, ${t}, ${n}, ${r})`, Zg = {
    linear: "linear",
    ease: "ease",
    easeIn: "ease-in",
    easeOut: "ease-out",
    easeInOut: "ease-in-out",
    circIn: di([0, 0.65, 0.55, 1]),
    circOut: di([0.55, 0, 1, 0.45]),
    backIn: di([0.31, 0.01, 0.66, -0.59]),
    backOut: di([0.33, 1.53, 0.69, 0.99])
  };
  function qg(e) {
    if (e)
      return Yg(e) ? di(e) : Array.isArray(e) ? e.map(qg) : Zg[e];
  }
  function Nk(e, t, n, { delay: r = 0, duration: i, repeat: o = 0, repeatType: s = "loop", ease: a, times: l } = {}) {
    const u = { [t]: n };
    l && (u.offset = l);
    const c = qg(a);
    return Array.isArray(c) && (u.easing = c), e.animate(u, {
      delay: r,
      duration: i,
      easing: Array.isArray(c) ? "linear" : c,
      fill: "both",
      iterations: o + 1,
      direction: s === "reverse" ? "alternate" : "normal"
    });
  }
  function Ik(e, { repeat: t, repeatType: n = "loop" }) {
    const r = t && n !== "loop" && t % 2 === 1 ? 0 : e.length - 1;
    return e[r];
  }
  const Jg = (e, t, n) => (((1 - 3 * n + 3 * t) * e + (3 * n - 6 * t)) * e + 3 * t) * e, bk = 1e-7, zk = 12;
  function Bk(e, t, n, r, i) {
    let o, s, a = 0;
    do
      s = t + (n - t) / 2, o = Jg(s, r, i) - e, o > 0 ? n = s : t = s;
    while (Math.abs(o) > bk && ++a < zk);
    return s;
  }
  function uo(e, t, n, r) {
    if (e === t && n === r)
      return fe;
    const i = (o) => Bk(o, 0, 1, e, n);
    return (o) => o === 0 || o === 1 ? o : Jg(i(o), t, r);
  }
  const Uk = uo(0.42, 0, 1, 1), Hk = uo(0, 0, 0.58, 1), ev = uo(0.42, 0, 0.58, 1), Wk = (e) => Array.isArray(e) && typeof e[0] != "number", tv = (e) => (t) => t <= 0.5 ? e(2 * t) / 2 : (2 - e(2 * (1 - t))) / 2, nv = (e) => (t) => 1 - e(1 - t), rv = (e) => 1 - Math.sin(Math.acos(e)), ff = nv(rv), Gk = tv(ff), iv = uo(0.33, 1.53, 0.69, 0.99), df = nv(iv), Kk = tv(df), Qk = (e) => (e *= 2) < 1 ? 0.5 * df(e) : 0.5 * (2 - Math.pow(2, -10 * (e - 1))), Yk = {
    linear: fe,
    easeIn: Uk,
    easeInOut: ev,
    easeOut: Hk,
    circIn: rv,
    circInOut: Gk,
    circOut: ff,
    backIn: df,
    backInOut: Kk,
    backOut: iv,
    anticipate: Qk
  }, Ph = (e) => {
    if (Array.isArray(e)) {
      cf(e.length === 4);
      const [t, n, r, i] = e;
      return uo(t, n, r, i);
    } else if (typeof e == "string")
      return Yk[e];
    return e;
  }, hf = (e, t) => (n) => !!(ao(n) && QP.test(n) && n.startsWith(e) || t && Object.prototype.hasOwnProperty.call(n, t)), ov = (e, t, n) => (r) => {
    if (!ao(r))
      return r;
    const [i, o, s, a] = r.match(Sa);
    return {
      [e]: parseFloat(i),
      [t]: parseFloat(o),
      [n]: parseFloat(s),
      alpha: a !== void 0 ? parseFloat(a) : 1
    };
  }, Xk = (e) => En(0, 255, e), al = {
    ...ar,
    transform: (e) => Math.round(Xk(e))
  }, zn = {
    test: hf("rgb", "red"),
    parse: ov("red", "green", "blue"),
    transform: ({ red: e, green: t, blue: n, alpha: r = 1 }) => "rgba(" + al.transform(e) + ", " + al.transform(t) + ", " + al.transform(n) + ", " + ki(Pi.transform(r)) + ")"
  };
  function Zk(e) {
    let t = "", n = "", r = "", i = "";
    return e.length > 5 ? (t = e.substring(1, 3), n = e.substring(3, 5), r = e.substring(5, 7), i = e.substring(7, 9)) : (t = e.substring(1, 2), n = e.substring(2, 3), r = e.substring(3, 4), i = e.substring(4, 5), t += t, n += n, r += r, i += i), {
      red: parseInt(t, 16),
      green: parseInt(n, 16),
      blue: parseInt(r, 16),
      alpha: i ? parseInt(i, 16) / 255 : 1
    };
  }
  const Tu = {
    test: hf("#"),
    parse: Zk,
    transform: zn.transform
  }, kr = {
    test: hf("hsl", "hue"),
    parse: ov("hue", "saturation", "lightness"),
    transform: ({ hue: e, saturation: t, lightness: n, alpha: r = 1 }) => "hsla(" + Math.round(e) + ", " + Dt.transform(ki(t)) + ", " + Dt.transform(ki(n)) + ", " + ki(Pi.transform(r)) + ")"
  }, Le = {
    test: (e) => zn.test(e) || Tu.test(e) || kr.test(e),
    parse: (e) => zn.test(e) ? zn.parse(e) : kr.test(e) ? kr.parse(e) : Tu.parse(e),
    transform: (e) => ao(e) ? e : e.hasOwnProperty("red") ? zn.transform(e) : kr.transform(e)
  }, ae = (e, t, n) => -n * e + n * t + e;
  function ll(e, t, n) {
    return n < 0 && (n += 1), n > 1 && (n -= 1), n < 1 / 6 ? e + (t - e) * 6 * n : n < 1 / 2 ? t : n < 2 / 3 ? e + (t - e) * (2 / 3 - n) * 6 : e;
  }
  function qk({ hue: e, saturation: t, lightness: n, alpha: r }) {
    e /= 360, t /= 100, n /= 100;
    let i = 0, o = 0, s = 0;
    if (!t)
      i = o = s = n;
    else {
      const a = n < 0.5 ? n * (1 + t) : n + t - n * t, l = 2 * n - a;
      i = ll(l, a, e + 1 / 3), o = ll(l, a, e), s = ll(l, a, e - 1 / 3);
    }
    return {
      red: Math.round(i * 255),
      green: Math.round(o * 255),
      blue: Math.round(s * 255),
      alpha: r
    };
  }
  const ul = (e, t, n) => {
    const r = e * e;
    return Math.sqrt(Math.max(0, n * (t * t - r) + r));
  }, Jk = [Tu, zn, kr], e2 = (e) => Jk.find((t) => t.test(e));
  function kh(e) {
    const t = e2(e);
    let n = t.parse(e);
    return t === kr && (n = qk(n)), n;
  }
  const sv = (e, t) => {
    const n = kh(e), r = kh(t), i = { ...n };
    return (o) => (i.red = ul(n.red, r.red, o), i.green = ul(n.green, r.green, o), i.blue = ul(n.blue, r.blue, o), i.alpha = ae(n.alpha, r.alpha, o), zn.transform(i));
  };
  function t2(e) {
    var t, n;
    return isNaN(e) && ao(e) && (((t = e.match(Sa)) === null || t === void 0 ? void 0 : t.length) || 0) + (((n = e.match(Mg)) === null || n === void 0 ? void 0 : n.length) || 0) > 0;
  }
  const av = {
    regex: GP,
    countKey: "Vars",
    token: "${v}",
    parse: fe
  }, lv = {
    regex: Mg,
    countKey: "Colors",
    token: "${c}",
    parse: Le.parse
  }, uv = {
    regex: Sa,
    countKey: "Numbers",
    token: "${n}",
    parse: ar.parse
  };
  function cl(e, { regex: t, countKey: n, token: r, parse: i }) {
    const o = e.tokenised.match(t);
    o && (e["num" + n] = o.length, e.tokenised = e.tokenised.replace(t, r), e.values.push(...o.map(i)));
  }
  function As(e) {
    const t = e.toString(), n = {
      value: t,
      tokenised: t,
      values: [],
      numVars: 0,
      numColors: 0,
      numNumbers: 0
    };
    return n.value.includes("var(--") && cl(n, av), cl(n, lv), cl(n, uv), n;
  }
  function cv(e) {
    return As(e).values;
  }
  function fv(e) {
    const { values: t, numColors: n, numVars: r, tokenised: i } = As(e), o = t.length;
    return (s) => {
      let a = i;
      for (let l = 0; l < o; l++)
        l < r ? a = a.replace(av.token, s[l]) : l < r + n ? a = a.replace(lv.token, Le.transform(s[l])) : a = a.replace(uv.token, ki(s[l]));
      return a;
    };
  }
  const n2 = (e) => typeof e == "number" ? 0 : e;
  function r2(e) {
    const t = cv(e);
    return fv(e)(t.map(n2));
  }
  const Cn = {
    test: t2,
    parse: cv,
    createTransformer: fv,
    getAnimatableNone: r2
  }, dv = (e, t) => (n) => `${n > 0 ? t : e}`;
  function hv(e, t) {
    return typeof e == "number" ? (n) => ae(e, t, n) : Le.test(e) ? sv(e, t) : e.startsWith("var(") ? dv(e, t) : mv(e, t);
  }
  const pv = (e, t) => {
    const n = [...e], r = n.length, i = e.map((o, s) => hv(o, t[s]));
    return (o) => {
      for (let s = 0; s < r; s++)
        n[s] = i[s](o);
      return n;
    };
  }, i2 = (e, t) => {
    const n = { ...e, ...t }, r = {};
    for (const i in n)
      e[i] !== void 0 && t[i] !== void 0 && (r[i] = hv(e[i], t[i]));
    return (i) => {
      for (const o in r)
        n[o] = r[o](i);
      return n;
    };
  }, mv = (e, t) => {
    const n = Cn.createTransformer(t), r = As(e), i = As(t);
    return r.numVars === i.numVars && r.numColors === i.numColors && r.numNumbers >= i.numNumbers ? vn(pv(r.values, i.values), n) : dv(e, t);
  }, Zi = (e, t, n) => {
    const r = t - e;
    return r === 0 ? 1 : (n - e) / r;
  }, _h = (e, t) => (n) => ae(e, t, n);
  function o2(e) {
    return typeof e == "number" ? _h : typeof e == "string" ? Le.test(e) ? sv : mv : Array.isArray(e) ? pv : typeof e == "object" ? i2 : _h;
  }
  function s2(e, t, n) {
    const r = [], i = n || o2(e[0]), o = e.length - 1;
    for (let s = 0; s < o; s++) {
      let a = i(e[s], e[s + 1]);
      if (t) {
        const l = Array.isArray(t) ? t[s] || fe : t;
        a = vn(l, a);
      }
      r.push(a);
    }
    return r;
  }
  function yv(e, t, { clamp: n = !0, ease: r, mixer: i } = {}) {
    const o = e.length;
    if (cf(o === t.length), o === 1)
      return () => t[0];
    e[0] > e[o - 1] && (e = [...e].reverse(), t = [...t].reverse());
    const s = s2(t, r, i), a = s.length, l = (u) => {
      let c = 0;
      if (a > 1)
        for (; c < e.length - 2 && !(u < e[c + 1]); c++)
          ;
      const f = Zi(e[c], e[c + 1], u);
      return s[c](f);
    };
    return n ? (u) => l(En(e[0], e[o - 1], u)) : l;
  }
  function a2(e, t) {
    const n = e[e.length - 1];
    for (let r = 1; r <= t; r++) {
      const i = Zi(0, t, r);
      e.push(ae(n, 1, i));
    }
  }
  function l2(e) {
    const t = [0];
    return a2(t, e.length - 1), t;
  }
  function u2(e, t) {
    return e.map((n) => n * t);
  }
  function c2(e, t) {
    return e.map(() => t || ev).splice(0, e.length - 1);
  }
  function Fs({ duration: e = 300, keyframes: t, times: n, ease: r = "easeInOut" }) {
    const i = Wk(r) ? r.map(Ph) : Ph(r), o = {
      done: !1,
      value: t[0]
    }, s = u2(
      // Only use the provided offsets if they're the correct length
      // TODO Maybe we should warn here if there's a length mismatch
      n && n.length === t.length ? n : l2(t),
      e
    ), a = yv(s, t, {
      ease: Array.isArray(i) ? i : c2(t, i)
    });
    return {
      calculatedDuration: e,
      next: (l) => (o.value = a(l), o.done = l >= e, o)
    };
  }
  function gv(e, t) {
    return t ? e * (1e3 / t) : 0;
  }
  const f2 = 5;
  function vv(e, t, n) {
    const r = Math.max(t - f2, 0);
    return gv(n - e(r), t - r);
  }
  const fl = 1e-3, d2 = 0.01, Ah = 10, h2 = 0.05, p2 = 1;
  function m2({ duration: e = 800, bounce: t = 0.25, velocity: n = 0, mass: r = 1 }) {
    let i, o;
    Vk(e <= Sn(Ah));
    let s = 1 - t;
    s = En(h2, p2, s), e = En(d2, Ah, Ut(e)), s < 1 ? (i = (u) => {
      const c = u * s, f = c * e, d = c - n, p = Eu(u, s), g = Math.exp(-f);
      return fl - d / p * g;
    }, o = (u) => {
      const f = u * s * e, d = f * n + n, p = Math.pow(s, 2) * Math.pow(u, 2) * e, g = Math.exp(-f), v = Eu(Math.pow(u, 2), s);
      return (-i(u) + fl > 0 ? -1 : 1) * ((d - p) * g) / v;
    }) : (i = (u) => {
      const c = Math.exp(-u * e), f = (u - n) * e + 1;
      return -fl + c * f;
    }, o = (u) => {
      const c = Math.exp(-u * e), f = (n - u) * (e * e);
      return c * f;
    });
    const a = 5 / e, l = g2(i, o, a);
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
  const y2 = 12;
  function g2(e, t, n) {
    let r = n;
    for (let i = 1; i < y2; i++)
      r = r - e(r) / t(r);
    return r;
  }
  function Eu(e, t) {
    return e * Math.sqrt(1 - t * t);
  }
  const v2 = ["duration", "bounce"], S2 = ["stiffness", "damping", "mass"];
  function Fh(e, t) {
    return t.some((n) => e[n] !== void 0);
  }
  function x2(e) {
    let t = {
      velocity: 0,
      stiffness: 100,
      damping: 10,
      mass: 1,
      isResolvedFromDuration: !1,
      ...e
    };
    if (!Fh(e, S2) && Fh(e, v2)) {
      const n = m2(e);
      t = {
        ...t,
        ...n,
        velocity: 0,
        mass: 1
      }, t.isResolvedFromDuration = !0;
    }
    return t;
  }
  function Sv({ keyframes: e, restDelta: t, restSpeed: n, ...r }) {
    const i = e[0], o = e[e.length - 1], s = { done: !1, value: i }, { stiffness: a, damping: l, mass: u, velocity: c, duration: f, isResolvedFromDuration: d } = x2(r), p = c ? -Ut(c) : 0, g = l / (2 * Math.sqrt(a * u)), v = o - i, k = Ut(Math.sqrt(a / u)), y = Math.abs(v) < 5;
    n || (n = y ? 0.01 : 2), t || (t = y ? 5e-3 : 0.5);
    let h;
    if (g < 1) {
      const m = Eu(k, g);
      h = (S) => {
        const C = Math.exp(-g * k * S);
        return o - C * ((p + g * k * v) / m * Math.sin(m * S) + v * Math.cos(m * S));
      };
    } else if (g === 1)
      h = (m) => o - Math.exp(-k * m) * (v + (p + k * v) * m);
    else {
      const m = k * Math.sqrt(g * g - 1);
      h = (S) => {
        const C = Math.exp(-g * k * S), P = Math.min(m * S, 300);
        return o - C * ((p + g * k * v) * Math.sinh(P) + m * v * Math.cosh(P)) / m;
      };
    }
    return {
      calculatedDuration: d && f || null,
      next: (m) => {
        const S = h(m);
        if (d)
          s.done = m >= f;
        else {
          let C = p;
          m !== 0 && (g < 1 ? C = vv(h, m, S) : C = 0);
          const P = Math.abs(C) <= n, T = Math.abs(o - S) <= t;
          s.done = P && T;
        }
        return s.value = s.done ? o : S, s;
      }
    };
  }
  function Oh({ keyframes: e, velocity: t = 0, power: n = 0.8, timeConstant: r = 325, bounceDamping: i = 10, bounceStiffness: o = 500, modifyTarget: s, min: a, max: l, restDelta: u = 0.5, restSpeed: c }) {
    const f = e[0], d = {
      done: !1,
      value: f
    }, p = (_) => a !== void 0 && _ < a || l !== void 0 && _ > l, g = (_) => a === void 0 ? l : l === void 0 || Math.abs(a - _) < Math.abs(l - _) ? a : l;
    let v = n * t;
    const k = f + v, y = s === void 0 ? k : s(k);
    y !== k && (v = y - f);
    const h = (_) => -v * Math.exp(-_ / r), m = (_) => y + h(_), S = (_) => {
      const L = h(_), O = m(_);
      d.done = Math.abs(L) <= u, d.value = d.done ? y : O;
    };
    let C, P;
    const T = (_) => {
      p(d.value) && (C = _, P = Sv({
        keyframes: [d.value, g(d.value)],
        velocity: vv(m, _, d.value),
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
        return !P && C === void 0 && (L = !0, S(_), T(_)), C !== void 0 && _ > C ? P.next(_ - C) : (!L && S(_), d);
      }
    };
  }
  const w2 = (e) => {
    const t = ({ timestamp: n }) => e(n);
    return {
      start: () => ee.update(t, !0),
      stop: () => Qt(t),
      /**
       * If we're processing this frame we can use the
       * framelocked timestamp to keep things in sync.
       */
      now: () => Se.isProcessing ? Se.timestamp : performance.now()
    };
  }, Dh = 2e4;
  function Mh(e) {
    let t = 0;
    const n = 50;
    let r = e.next(t);
    for (; !r.done && t < Dh; )
      t += n, r = e.next(t);
    return t >= Dh ? 1 / 0 : t;
  }
  const T2 = {
    decay: Oh,
    inertia: Oh,
    tween: Fs,
    keyframes: Fs,
    spring: Sv
  };
  function Os({ autoplay: e = !0, delay: t = 0, driver: n = w2, keyframes: r, type: i = "keyframes", repeat: o = 0, repeatDelay: s = 0, repeatType: a = "loop", onPlay: l, onStop: u, onComplete: c, onUpdate: f, ...d }) {
    let p = 1, g = !1, v, k;
    const y = () => {
      k = new Promise((j) => {
        v = j;
      });
    };
    y();
    let h;
    const m = T2[i] || Fs;
    let S;
    m !== Fs && typeof r[0] != "number" && (S = yv([0, 100], r, {
      clamp: !1
    }), r = [0, 100]);
    const C = m({ ...d, keyframes: r });
    let P;
    a === "mirror" && (P = m({
      ...d,
      keyframes: [...r].reverse(),
      velocity: -(d.velocity || 0)
    }));
    let T = "idle", _ = null, L = null, O = null;
    C.calculatedDuration === null && o && (C.calculatedDuration = Mh(C));
    const { calculatedDuration: U } = C;
    let de = 1 / 0, W = 1 / 0;
    U !== null && (de = U + s, W = de * (o + 1) - s);
    let G = 0;
    const Z = (j) => {
      if (L === null)
        return;
      p > 0 && (L = Math.min(L, j)), p < 0 && (L = Math.min(j - W / p, L)), _ !== null ? G = _ : G = Math.round(j - L) * p;
      const B = G - t * (p >= 0 ? 1 : -1), Re = p >= 0 ? B < 0 : B > W;
      G = Math.max(B, 0), T === "finished" && _ === null && (G = W);
      let je = G, Ke = C;
      if (o) {
        const lr = G / de;
        let On = Math.floor(lr), pt = lr % 1;
        !pt && lr >= 1 && (pt = 1), pt === 1 && On--, On = Math.min(On, o + 1);
        const fo = !!(On % 2);
        fo && (a === "reverse" ? (pt = 1 - pt, s && (pt -= s / de)) : a === "mirror" && (Ke = P));
        let Xr = En(0, 1, pt);
        G > W && (Xr = a === "reverse" && fo ? 1 : 0), je = Xr * de;
      }
      const Ae = Re ? { done: !1, value: r[0] } : Ke.next(je);
      S && (Ae.value = S(Ae.value));
      let { done: ht } = Ae;
      !Re && U !== null && (ht = p >= 0 ? G >= W : G <= 0);
      const co = _ === null && (T === "finished" || T === "running" && ht);
      return f && f(Ae.value), co && E(), Ae;
    }, Ee = () => {
      h && h.stop(), h = void 0;
    }, be = () => {
      T = "idle", Ee(), v(), y(), L = O = null;
    }, E = () => {
      T = "finished", c && c(), Ee(), v();
    }, F = () => {
      if (g)
        return;
      h || (h = n(Z));
      const j = h.now();
      l && l(), _ !== null ? L = j - _ : (!L || T === "finished") && (L = j), T === "finished" && y(), O = L, _ = null, T = "running", h.start();
    };
    e && F();
    const D = {
      then(j, B) {
        return k.then(j, B);
      },
      get time() {
        return Ut(G);
      },
      set time(j) {
        j = Sn(j), G = j, _ !== null || !h || p === 0 ? _ = j : L = h.now() - j / p;
      },
      get duration() {
        const j = C.calculatedDuration === null ? Mh(C) : C.calculatedDuration;
        return Ut(j);
      },
      get speed() {
        return p;
      },
      set speed(j) {
        j === p || !h || (p = j, D.time = Ut(G));
      },
      get state() {
        return T;
      },
      play: F,
      pause: () => {
        T = "paused", _ = G;
      },
      stop: () => {
        g = !0, T !== "idle" && (T = "idle", u && u(), be());
      },
      cancel: () => {
        O !== null && Z(O), be();
      },
      complete: () => {
        T = "finished";
      },
      sample: (j) => (L = 0, Z(j))
    };
    return D;
  }
  function E2(e) {
    let t;
    return () => (t === void 0 && (t = e()), t);
  }
  const C2 = E2(() => Object.hasOwnProperty.call(Element.prototype, "animate")), P2 = /* @__PURE__ */ new Set([
    "opacity",
    "clipPath",
    "filter",
    "transform",
    "backgroundColor"
  ]), jo = 10, k2 = 2e4, _2 = (e, t) => t.type === "spring" || e === "backgroundColor" || !Xg(t.ease);
  function A2(e, t, { onUpdate: n, onComplete: r, ...i }) {
    if (!(C2() && P2.has(t) && !i.repeatDelay && i.repeatType !== "mirror" && i.damping !== 0 && i.type !== "inertia"))
      return !1;
    let s = !1, a, l;
    const u = () => {
      l = new Promise((h) => {
        a = h;
      });
    };
    u();
    let { keyframes: c, duration: f = 300, ease: d, times: p } = i;
    if (_2(t, i)) {
      const h = Os({
        ...i,
        repeat: 0,
        delay: 0
      });
      let m = { done: !1, value: c[0] };
      const S = [];
      let C = 0;
      for (; !m.done && C < k2; )
        m = h.sample(C), S.push(m.value), C += jo;
      p = void 0, c = S, f = C - jo, d = "linear";
    }
    const g = Nk(e.owner.current, t, c, {
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
    i.syncStart && (g.startTime = Se.isProcessing ? Se.timestamp : document.timeline ? document.timeline.currentTime : performance.now());
    const v = () => g.cancel(), k = () => {
      ee.update(v), a(), u();
    };
    return g.onfinish = () => {
      e.set(Ik(c, i)), r && r(), k();
    }, {
      then(h, m) {
        return l.then(h, m);
      },
      attachTimeline(h) {
        return g.timeline = h, g.onfinish = null, fe;
      },
      get time() {
        return Ut(g.currentTime || 0);
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
        return Ut(f);
      },
      play: () => {
        s || (g.play(), Qt(v));
      },
      pause: () => g.pause(),
      stop: () => {
        if (s = !0, g.playState === "idle")
          return;
        const { currentTime: h } = g;
        if (h) {
          const m = Os({
            ...i,
            autoplay: !1
          });
          e.setWithVelocity(m.sample(h - jo).value, m.sample(h).value, jo);
        }
        k();
      },
      complete: () => g.finish(),
      cancel: k
    };
  }
  function F2({ keyframes: e, delay: t, onUpdate: n, onComplete: r }) {
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
    return t ? Os({
      keyframes: [0, 1],
      duration: 0,
      delay: t,
      onComplete: i
    }) : i();
  }
  const O2 = {
    type: "spring",
    stiffness: 500,
    damping: 25,
    restSpeed: 10
  }, D2 = (e) => ({
    type: "spring",
    stiffness: 550,
    damping: e === 0 ? 2 * Math.sqrt(550) : 30,
    restSpeed: 10
  }), M2 = {
    type: "keyframes",
    duration: 0.8
  }, R2 = {
    type: "keyframes",
    ease: [0.25, 0.1, 0.35, 1],
    duration: 0.3
  }, j2 = (e, { keyframes: t }) => t.length > 2 ? M2 : sr.has(e) ? e.startsWith("scale") ? D2(t[1]) : O2 : R2, Cu = (e, t) => e === "zIndex" ? !1 : !!(typeof t == "number" || Array.isArray(t) || typeof t == "string" && // It's animatable if we have a string
  (Cn.test(t) || t === "0") && // And it contains numbers and/or colors
  !t.startsWith("url(")), L2 = /* @__PURE__ */ new Set(["brightness", "contrast", "saturate", "opacity"]);
  function V2(e) {
    const [t, n] = e.slice(0, -1).split("(");
    if (t === "drop-shadow")
      return e;
    const [r] = n.match(Sa) || [];
    if (!r)
      return e;
    const i = n.replace(r, "");
    let o = L2.has(t) ? 1 : 0;
    return r !== n && (o *= 100), t + "(" + o + i + ")";
  }
  const $2 = /([a-z-]*)\(.*?\)/g, Pu = {
    ...Cn,
    getAnimatableNone: (e) => {
      const t = e.match($2);
      return t ? t.map(V2).join(" ") : e;
    }
  }, N2 = {
    ...Rg,
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
    filter: Pu,
    WebkitFilter: Pu
  }, pf = (e) => N2[e];
  function xv(e, t) {
    let n = pf(e);
    return n !== Pu && (n = Cn), n.getAnimatableNone ? n.getAnimatableNone(t) : void 0;
  }
  const wv = (e) => /^0[^.\s]+$/.test(e);
  function I2(e) {
    if (typeof e == "number")
      return e === 0;
    if (e !== null)
      return e === "none" || e === "0" || wv(e);
  }
  function b2(e, t, n, r) {
    const i = Cu(t, n);
    let o;
    Array.isArray(n) ? o = [...n] : o = [null, n];
    const s = r.from !== void 0 ? r.from : e.get();
    let a;
    const l = [];
    for (let u = 0; u < o.length; u++)
      o[u] === null && (o[u] = u === 0 ? s : o[u - 1]), I2(o[u]) && l.push(u), typeof o[u] == "string" && o[u] !== "none" && o[u] !== "0" && (a = o[u]);
    if (i && l.length && a)
      for (let u = 0; u < l.length; u++) {
        const c = l[u];
        o[c] = xv(t, a);
      }
    return o;
  }
  function z2({ when: e, delay: t, delayChildren: n, staggerChildren: r, staggerDirection: i, repeat: o, repeatType: s, repeatDelay: a, from: l, elapsed: u, ...c }) {
    return !!Object.keys(c).length;
  }
  function Tv(e, t) {
    return e[t] || e.default || e;
  }
  const mf = (e, t, n, r = {}) => (i) => {
    const o = Tv(r, e) || {}, s = o.delay || r.delay || 0;
    let { elapsed: a = 0 } = r;
    a = a - Sn(s);
    const l = b2(t, e, n, o), u = l[0], c = l[l.length - 1], f = Cu(e, u), d = Cu(e, c);
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
    if (z2(o) || (p = {
      ...p,
      ...j2(e, p)
    }), p.duration && (p.duration = Sn(p.duration)), p.repeatDelay && (p.repeatDelay = Sn(p.repeatDelay)), !f || !d || $k.current || o.type === !1)
      return F2(p);
    if (t.owner && t.owner.current instanceof HTMLElement && !t.owner.getProps().onUpdate) {
      const g = A2(t, e, p);
      if (g)
        return g;
    }
    return Os(p);
  };
  function Ds(e) {
    return !!(Ge(e) && e.add);
  }
  const Ev = (e) => /^\-?\d*\.?\d+$/.test(e);
  function yf(e, t) {
    e.indexOf(t) === -1 && e.push(t);
  }
  function gf(e, t) {
    const n = e.indexOf(t);
    n > -1 && e.splice(n, 1);
  }
  class vf {
    constructor() {
      this.subscriptions = [];
    }
    add(t) {
      return yf(this.subscriptions, t), () => gf(this.subscriptions, t);
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
  const B2 = (e) => !isNaN(parseFloat(e));
  class U2 {
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
        const { delta: o, timestamp: s } = Se;
        this.lastUpdated !== s && (this.timeDelta = o, this.lastUpdated = s, ee.postRender(this.scheduleVelocityCheck)), this.prev !== this.current && this.events.change && this.events.change.notify(this.current), this.events.velocityChange && this.events.velocityChange.notify(this.getVelocity()), i && this.events.renderRequest && this.events.renderRequest.notify(this.current);
      }, this.scheduleVelocityCheck = () => ee.postRender(this.velocityCheck), this.velocityCheck = ({ timestamp: r }) => {
        r !== this.lastUpdated && (this.prev = this.current, this.events.velocityChange && this.events.velocityChange.notify(this.getVelocity()));
      }, this.hasAnimated = !1, this.prev = this.current = t, this.canTrackVelocity = B2(this.current), this.owner = n.owner;
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
      this.events[t] || (this.events[t] = new vf());
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
        gv(parseFloat(this.current) - parseFloat(this.prev), this.timeDelta)
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
  function Hr(e, t) {
    return new U2(e, t);
  }
  const Cv = (e) => (t) => t.test(e), H2 = {
    test: (e) => e === "auto",
    parse: (e) => e
  }, Pv = [ar, N, Dt, Jt, XP, YP, H2], si = (e) => Pv.find(Cv(e)), W2 = [...Pv, Le, Cn], G2 = (e) => W2.find(Cv(e));
  function K2(e, t, n) {
    e.hasValue(t) ? e.getValue(t).set(n) : e.addValue(t, Hr(n));
  }
  function Q2(e, t) {
    const n = wa(e, t);
    let { transitionEnd: r = {}, transition: i = {}, ...o } = n ? e.makeTargetAnimatable(n, !1) : {};
    o = { ...o, ...r };
    for (const s in o) {
      const a = ck(o[s]);
      K2(e, s, a);
    }
  }
  function Y2(e, t, n) {
    var r, i;
    const o = Object.keys(t).filter((a) => !e.hasValue(a)), s = o.length;
    if (s)
      for (let a = 0; a < s; a++) {
        const l = o[a], u = t[l];
        let c = null;
        Array.isArray(u) && (c = u[0]), c === null && (c = (i = (r = n[l]) !== null && r !== void 0 ? r : e.readValue(l)) !== null && i !== void 0 ? i : t[l]), c != null && (typeof c == "string" && (Ev(c) || wv(c)) ? c = parseFloat(c) : !G2(c) && Cn.test(u) && (c = xv(l, u)), e.addValue(l, Hr(c, { owner: e })), n[l] === void 0 && (n[l] = c), c !== null && e.setBaseTarget(l, c));
      }
  }
  function X2(e, t) {
    return t ? (t[e] || t.default || t).from : void 0;
  }
  function Z2(e, t, n) {
    const r = {};
    for (const i in e) {
      const o = X2(i, t);
      if (o !== void 0)
        r[i] = o;
      else {
        const s = n.getValue(i);
        s && (r[i] = s.get());
      }
    }
    return r;
  }
  function q2({ protectedKeys: e, needsAnimating: t }, n) {
    const r = e.hasOwnProperty(n) && t[n] !== !0;
    return t[n] = !1, r;
  }
  function kv(e, t, { delay: n = 0, transitionOverride: r, type: i } = {}) {
    let { transition: o = e.getDefaultTransition(), transitionEnd: s, ...a } = e.makeTargetAnimatable(t);
    const l = e.getValue("willChange");
    r && (o = r);
    const u = [], c = i && e.animationState && e.animationState.getState()[i];
    for (const f in a) {
      const d = e.getValue(f), p = a[f];
      if (!d || p === void 0 || c && q2(c, f))
        continue;
      const g = {
        delay: n,
        elapsed: 0,
        ...o
      };
      if (window.HandoffAppearAnimations && !d.hasAnimated) {
        const k = e.getProps()[Lk];
        k && (g.elapsed = window.HandoffAppearAnimations(k, f, d, ee), g.syncStart = !0);
      }
      d.start(mf(f, d, p, e.shouldReduceMotion && sr.has(f) ? { type: !1 } : g));
      const v = d.animation;
      Ds(l) && (l.add(f), v.then(() => l.remove(f))), u.push(v);
    }
    return s && Promise.all(u).then(() => {
      s && Q2(e, s);
    }), u;
  }
  function ku(e, t, n = {}) {
    const r = wa(e, t, n.custom);
    let { transition: i = e.getDefaultTransition() || {} } = r || {};
    n.transitionOverride && (i = n.transitionOverride);
    const o = r ? () => Promise.all(kv(e, r, n)) : () => Promise.resolve(), s = e.variantChildren && e.variantChildren.size ? (l = 0) => {
      const { delayChildren: u = 0, staggerChildren: c, staggerDirection: f } = i;
      return J2(e, t, u + l, c, f, n);
    } : () => Promise.resolve(), { when: a } = i;
    if (a) {
      const [l, u] = a === "beforeChildren" ? [o, s] : [s, o];
      return l().then(() => u());
    } else
      return Promise.all([o(), s(n.delay)]);
  }
  function J2(e, t, n = 0, r = 0, i = 1, o) {
    const s = [], a = (e.variantChildren.size - 1) * r, l = i === 1 ? (u = 0) => u * r : (u = 0) => a - u * r;
    return Array.from(e.variantChildren).sort(e_).forEach((u, c) => {
      u.notify("AnimationStart", t), s.push(ku(u, t, {
        ...o,
        delay: n + l(c)
      }).then(() => u.notify("AnimationComplete", t)));
    }), Promise.all(s);
  }
  function e_(e, t) {
    return e.sortNodePosition(t);
  }
  function t_(e, t, n = {}) {
    e.notify("AnimationStart", t);
    let r;
    if (Array.isArray(t)) {
      const i = t.map((o) => ku(e, o, n));
      r = Promise.all(i);
    } else if (typeof t == "string")
      r = ku(e, t, n);
    else {
      const i = typeof t == "function" ? wa(e, t, n.custom) : t;
      r = Promise.all(kv(e, i, n));
    }
    return r.then(() => e.notify("AnimationComplete", t));
  }
  const n_ = [...qc].reverse(), r_ = qc.length;
  function i_(e) {
    return (t) => Promise.all(t.map(({ animation: n, options: r }) => t_(e, n, r)));
  }
  function o_(e) {
    let t = i_(e);
    const n = a_();
    let r = !0;
    const i = (l, u) => {
      const c = wa(e, u);
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
      for (let y = 0; y < r_; y++) {
        const h = n_[y], m = n[h], S = c[h] !== void 0 ? c[h] : f[h], C = Yi(S), P = h === u ? m.isActive : null;
        P === !1 && (v = y);
        let T = S === f[h] && S !== c[h] && C;
        if (T && r && e.manuallyAnimateOnMount && (T = !1), m.protectedKeys = { ...g }, // If it isn't active and hasn't *just* been set as inactive
        !m.isActive && P === null || // If we didn't and don't have any defined prop for this animation type
        !S && !m.prevProp || // Or if the prop doesn't define an animation
        ga(S) || typeof S == "boolean")
          continue;
        const _ = s_(m.prevProp, S);
        let L = _ || // If we're making this variant active, we want to always make it active
        h === u && m.isActive && !T && C || // If we removed a higher-priority variant (i is in reverse order)
        y > v && C;
        const O = Array.isArray(S) ? S : [S];
        let U = O.reduce(i, {});
        P === !1 && (U = {});
        const { prevResolvedValues: de = {} } = m, W = {
          ...de,
          ...U
        }, G = (Z) => {
          L = !0, p.delete(Z), m.needsAnimating[Z] = !0;
        };
        for (const Z in W) {
          const Ee = U[Z], be = de[Z];
          g.hasOwnProperty(Z) || (Ee !== be ? _s(Ee) && _s(be) ? !Qg(Ee, be) || _ ? G(Z) : m.protectedKeys[Z] = !0 : Ee !== void 0 ? G(Z) : p.add(Z) : Ee !== void 0 && p.has(Z) ? G(Z) : m.protectedKeys[Z] = !0);
        }
        m.prevProp = S, m.prevResolvedValues = U, m.isActive && (g = { ...g, ...U }), r && e.blockInitialAnimation && (L = !1), L && !T && d.push(...O.map((Z) => ({
          animation: Z,
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
      let k = !!d.length;
      return r && c.initial === !1 && !e.manuallyAnimateOnMount && (k = !1), r = !1, k ? t(d) : Promise.resolve();
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
  function s_(e, t) {
    return typeof t == "string" ? t !== e : Array.isArray(t) ? !Qg(t, e) : !1;
  }
  function Mn(e = !1) {
    return {
      isActive: e,
      protectedKeys: {},
      needsAnimating: {},
      prevResolvedValues: {}
    };
  }
  function a_() {
    return {
      animate: Mn(!0),
      whileInView: Mn(),
      whileHover: Mn(),
      whileTap: Mn(),
      whileDrag: Mn(),
      whileFocus: Mn(),
      exit: Mn()
    };
  }
  class l_ extends Fn {
    /**
     * We dynamically generate the AnimationState manager as it contains a reference
     * to the underlying animation library. We only want to load that if we load this,
     * so people can optionally code split it out using the `m` component.
     */
    constructor(t) {
      super(t), t.animationState || (t.animationState = o_(t));
    }
    updateAnimationControlsSubscription() {
      const { animate: t } = this.node.getProps();
      this.unmount(), ga(t) && (this.unmount = t.subscribe(this.node));
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
  let u_ = 0;
  class c_ extends Fn {
    constructor() {
      super(...arguments), this.id = u_++;
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
  const f_ = {
    animation: {
      Feature: l_
    },
    exit: {
      Feature: c_
    }
  }, Rh = (e, t) => Math.abs(e - t);
  function d_(e, t) {
    const n = Rh(e.x, t.x), r = Rh(e.y, t.y);
    return Math.sqrt(n ** 2 + r ** 2);
  }
  class _v {
    constructor(t, n, { transformPagePoint: r } = {}) {
      if (this.startEvent = null, this.lastMoveEvent = null, this.lastMoveEventInfo = null, this.handlers = {}, this.updatePoint = () => {
        if (!(this.lastMoveEvent && this.lastMoveEventInfo))
          return;
        const u = hl(this.lastMoveEventInfo, this.history), c = this.startEvent !== null, f = d_(u.offset, { x: 0, y: 0 }) >= 3;
        if (!c && !f)
          return;
        const { point: d } = u, { timestamp: p } = Se;
        this.history.push({ ...d, timestamp: p });
        const { onStart: g, onMove: v } = this.handlers;
        c || (g && g(this.lastMoveEvent, u), this.startEvent = this.lastMoveEvent), v && v(this.lastMoveEvent, u);
      }, this.handlePointerMove = (u, c) => {
        this.lastMoveEvent = u, this.lastMoveEventInfo = dl(c, this.transformPagePoint), ee.update(this.updatePoint, !0);
      }, this.handlePointerUp = (u, c) => {
        if (this.end(), !(this.lastMoveEvent && this.lastMoveEventInfo))
          return;
        const { onEnd: f, onSessionEnd: d } = this.handlers, p = hl(u.type === "pointercancel" ? this.lastMoveEventInfo : dl(c, this.transformPagePoint), this.history);
        this.startEvent && f && f(u, p), d && d(u, p);
      }, !Ug(t))
        return;
      this.handlers = n, this.transformPagePoint = r;
      const i = xa(t), o = dl(i, this.transformPagePoint), { point: s } = o, { timestamp: a } = Se;
      this.history = [{ ...s, timestamp: a }];
      const { onSessionStart: l } = n;
      l && l(t, hl(o, this.history)), this.removeListeners = vn(Bt(window, "pointermove", this.handlePointerMove), Bt(window, "pointerup", this.handlePointerUp), Bt(window, "pointercancel", this.handlePointerUp));
    }
    updateHandlers(t) {
      this.handlers = t;
    }
    end() {
      this.removeListeners && this.removeListeners(), Qt(this.updatePoint);
    }
  }
  function dl(e, t) {
    return t ? { point: t(e.point) } : e;
  }
  function jh(e, t) {
    return { x: e.x - t.x, y: e.y - t.y };
  }
  function hl({ point: e }, t) {
    return {
      point: e,
      delta: jh(e, Av(t)),
      offset: jh(e, h_(t)),
      velocity: p_(t, 0.1)
    };
  }
  function h_(e) {
    return e[0];
  }
  function Av(e) {
    return e[e.length - 1];
  }
  function p_(e, t) {
    if (e.length < 2)
      return { x: 0, y: 0 };
    let n = e.length - 1, r = null;
    const i = Av(e);
    for (; n >= 0 && (r = e[n], !(i.timestamp - r.timestamp > Sn(t))); )
      n--;
    if (!r)
      return { x: 0, y: 0 };
    const o = Ut(i.timestamp - r.timestamp);
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
  function _u(e, t = 0, n = 0.01) {
    return Math.abs(e - t) <= n;
  }
  function Lh(e, t, n, r = 0.5) {
    e.origin = r, e.originPoint = ae(t.min, t.max, e.origin), e.scale = tt(n) / tt(t), (_u(e.scale, 1, 1e-4) || isNaN(e.scale)) && (e.scale = 1), e.translate = ae(n.min, n.max, e.origin) - e.originPoint, (_u(e.translate) || isNaN(e.translate)) && (e.translate = 0);
  }
  function _i(e, t, n, r) {
    Lh(e.x, t.x, n.x, r ? r.originX : void 0), Lh(e.y, t.y, n.y, r ? r.originY : void 0);
  }
  function Vh(e, t, n) {
    e.min = n.min + t.min, e.max = e.min + tt(t);
  }
  function m_(e, t, n) {
    Vh(e.x, t.x, n.x), Vh(e.y, t.y, n.y);
  }
  function $h(e, t, n) {
    e.min = t.min - n.min, e.max = e.min + tt(t);
  }
  function Ai(e, t, n) {
    $h(e.x, t.x, n.x), $h(e.y, t.y, n.y);
  }
  function y_(e, { min: t, max: n }, r) {
    return t !== void 0 && e < t ? e = r ? ae(t, e, r.min) : Math.max(e, t) : n !== void 0 && e > n && (e = r ? ae(n, e, r.max) : Math.min(e, n)), e;
  }
  function Nh(e, t, n) {
    return {
      min: t !== void 0 ? e.min + t : void 0,
      max: n !== void 0 ? e.max + n - (e.max - e.min) : void 0
    };
  }
  function g_(e, { top: t, left: n, bottom: r, right: i }) {
    return {
      x: Nh(e.x, n, i),
      y: Nh(e.y, t, r)
    };
  }
  function Ih(e, t) {
    let n = t.min - e.min, r = t.max - e.max;
    return t.max - t.min < e.max - e.min && ([n, r] = [r, n]), { min: n, max: r };
  }
  function v_(e, t) {
    return {
      x: Ih(e.x, t.x),
      y: Ih(e.y, t.y)
    };
  }
  function S_(e, t) {
    let n = 0.5;
    const r = tt(e), i = tt(t);
    return i > r ? n = Zi(t.min, t.max - r, e.min) : r > i && (n = Zi(e.min, e.max - i, t.min)), En(0, 1, n);
  }
  function x_(e, t) {
    const n = {};
    return t.min !== void 0 && (n.min = t.min - e.min), t.max !== void 0 && (n.max = t.max - e.min), n;
  }
  const Au = 0.35;
  function w_(e = Au) {
    return e === !1 ? e = 0 : e === !0 && (e = Au), {
      x: bh(e, "left", "right"),
      y: bh(e, "top", "bottom")
    };
  }
  function bh(e, t, n) {
    return {
      min: zh(e, t),
      max: zh(e, n)
    };
  }
  function zh(e, t) {
    return typeof e == "number" ? e : e[t] || 0;
  }
  const Bh = () => ({
    translate: 0,
    scale: 1,
    origin: 0,
    originPoint: 0
  }), _r = () => ({
    x: Bh(),
    y: Bh()
  }), Uh = () => ({ min: 0, max: 0 }), pe = () => ({
    x: Uh(),
    y: Uh()
  });
  function kt(e) {
    return [e("x"), e("y")];
  }
  function Fv({ top: e, left: t, right: n, bottom: r }) {
    return {
      x: { min: t, max: n },
      y: { min: e, max: r }
    };
  }
  function T_({ x: e, y: t }) {
    return { top: t.min, right: e.max, bottom: t.max, left: e.min };
  }
  function E_(e, t) {
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
  function pl(e) {
    return e === void 0 || e === 1;
  }
  function Fu({ scale: e, scaleX: t, scaleY: n }) {
    return !pl(e) || !pl(t) || !pl(n);
  }
  function Vn(e) {
    return Fu(e) || Ov(e) || e.z || e.rotate || e.rotateX || e.rotateY;
  }
  function Ov(e) {
    return Hh(e.x) || Hh(e.y);
  }
  function Hh(e) {
    return e && e !== "0%";
  }
  function Ms(e, t, n) {
    const r = e - n, i = t * r;
    return n + i;
  }
  function Wh(e, t, n, r, i) {
    return i !== void 0 && (e = Ms(e, i, r)), Ms(e, n, r) + t;
  }
  function Ou(e, t = 0, n = 1, r, i) {
    e.min = Wh(e.min, t, n, r, i), e.max = Wh(e.max, t, n, r, i);
  }
  function Dv(e, { x: t, y: n }) {
    Ou(e.x, t.translate, t.scale, t.originPoint), Ou(e.y, n.translate, n.scale, n.originPoint);
  }
  function C_(e, t, n, r = !1) {
    const i = n.length;
    if (!i)
      return;
    t.x = t.y = 1;
    let o, s;
    for (let a = 0; a < i; a++) {
      o = n[a], s = o.projectionDelta;
      const l = o.instance;
      l && l.style && l.style.display === "contents" || (r && o.options.layoutScroll && o.scroll && o !== o.root && Ar(e, {
        x: -o.scroll.offset.x,
        y: -o.scroll.offset.y
      }), s && (t.x *= s.x.scale, t.y *= s.y.scale, Dv(e, s)), r && Vn(o.latestValues) && Ar(e, o.latestValues));
    }
    t.x = Gh(t.x), t.y = Gh(t.y);
  }
  function Gh(e) {
    return Number.isInteger(e) || e > 1.0000000000001 || e < 0.999999999999 ? e : 1;
  }
  function rn(e, t) {
    e.min = e.min + t, e.max = e.max + t;
  }
  function Kh(e, t, [n, r, i]) {
    const o = t[i] !== void 0 ? t[i] : 0.5, s = ae(e.min, e.max, o);
    Ou(e, t[n], t[r], s, t.scale);
  }
  const P_ = ["x", "scaleX", "originX"], k_ = ["y", "scaleY", "originY"];
  function Ar(e, t) {
    Kh(e.x, t, P_), Kh(e.y, t, k_);
  }
  function Mv(e, t) {
    return Fv(E_(e.getBoundingClientRect(), t));
  }
  function __(e, t, n) {
    const r = Mv(e, n), { scroll: i } = t;
    return i && (rn(r.x, i.offset.x), rn(r.y, i.offset.y)), r;
  }
  const A_ = /* @__PURE__ */ new WeakMap();
  class F_ {
    constructor(t) {
      this.openGlobalLock = null, this.isDragging = !1, this.currentDirection = null, this.originPoint = { x: 0, y: 0 }, this.constraints = !1, this.hasMutatedConstraints = !1, this.elastic = pe(), this.visualElement = t;
    }
    start(t, { snapToCursor: n = !1 } = {}) {
      const { presenceContext: r } = this.visualElement;
      if (r && r.isPresent === !1)
        return;
      const i = (l) => {
        this.stopAnimation(), n && this.snapToCursor(xa(l, "page").point);
      }, o = (l, u) => {
        const { drag: c, dragPropagation: f, onDragStart: d } = this.getProps();
        if (c && !f && (this.openGlobalLock && this.openGlobalLock(), this.openGlobalLock = Wg(c), !this.openGlobalLock))
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
        const { animationState: p } = this.visualElement;
        p && p.setActive("whileDrag", !0);
      }, s = (l, u) => {
        const { dragPropagation: c, dragDirectionLock: f, onDirectionLock: d, onDrag: p } = this.getProps();
        if (!c && !this.openGlobalLock)
          return;
        const { offset: g } = u;
        if (f && this.currentDirection === null) {
          this.currentDirection = O_(g), this.currentDirection !== null && d && d(this.currentDirection);
          return;
        }
        this.updateAxis("x", u.point, g), this.updateAxis("y", u.point, g), this.visualElement.render(), p && p(l, u);
      }, a = (l, u) => this.stop(l, u);
      this.panSession = new _v(t, {
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
      if (!r || !Lo(t, i, this.currentDirection))
        return;
      const o = this.getAxisMotionValue(t);
      let s = this.originPoint[t] + r[t];
      this.constraints && this.constraints[t] && (s = y_(s, this.constraints[t], this.elastic[t])), o.set(s);
    }
    resolveConstraints() {
      const { dragConstraints: t, dragElastic: n } = this.getProps(), { layout: r } = this.visualElement.projection || {}, i = this.constraints;
      t && Pr(t) ? this.constraints || (this.constraints = this.resolveRefConstraints()) : t && r ? this.constraints = g_(r.layoutBox, t) : this.constraints = !1, this.elastic = w_(n), i !== this.constraints && r && this.constraints && !this.hasMutatedConstraints && kt((o) => {
        this.getAxisMotionValue(o) && (this.constraints[o] = x_(r.layoutBox[o], this.constraints[o]));
      });
    }
    resolveRefConstraints() {
      const { dragConstraints: t, onMeasureDragConstraints: n } = this.getProps();
      if (!t || !Pr(t))
        return !1;
      const r = t.current, { projection: i } = this.visualElement;
      if (!i || !i.layout)
        return !1;
      const o = __(r, i.root, this.visualElement.getTransformPagePoint());
      let s = v_(i.layout.layoutBox, o);
      if (n) {
        const a = n(T_(s));
        this.hasMutatedConstraints = !!a, a && (s = Fv(a));
      }
      return s;
    }
    startAnimation(t) {
      const { drag: n, dragMomentum: r, dragElastic: i, dragTransition: o, dragSnapToOrigin: s, onDragTransitionEnd: a } = this.getProps(), l = this.constraints || {}, u = kt((c) => {
        if (!Lo(c, n, this.currentDirection))
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
      return r.start(mf(t, r, 0, n));
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
        if (!Lo(n, r, this.currentDirection))
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
      if (!Pr(n) || !r || !this.constraints)
        return;
      this.stopAnimation();
      const i = { x: 0, y: 0 };
      kt((s) => {
        const a = this.getAxisMotionValue(s);
        if (a) {
          const l = a.get();
          i[s] = S_({ min: l, max: l }, this.constraints[s]);
        }
      });
      const { transformTemplate: o } = this.visualElement.getProps();
      this.visualElement.current.style.transform = o ? o({}, "") : "none", r.root && r.root.updateScroll(), r.updateLayout(), this.resolveConstraints(), kt((s) => {
        if (!Lo(s, t, null))
          return;
        const a = this.getAxisMotionValue(s), { min: l, max: u } = this.constraints[s];
        a.set(ae(l, u, i[s]));
      });
    }
    addListeners() {
      if (!this.visualElement.current)
        return;
      A_.set(this.visualElement, this);
      const t = this.visualElement.current, n = Bt(t, "pointerdown", (l) => {
        const { drag: u, dragListener: c = !0 } = this.getProps();
        u && c && this.start(l);
      }), r = () => {
        const { dragConstraints: l } = this.getProps();
        Pr(l) && (this.constraints = this.resolveRefConstraints());
      }, { projection: i } = this.visualElement, o = i.addEventListener("measure", r);
      i && !i.layout && (i.root && i.root.updateScroll(), i.updateLayout()), r();
      const s = bt(window, "resize", () => this.scalePositionWithinConstraints()), a = i.addEventListener("didUpdate", ({ delta: l, hasLayoutChanged: u }) => {
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
      const t = this.visualElement.getProps(), { drag: n = !1, dragDirectionLock: r = !1, dragPropagation: i = !1, dragConstraints: o = !1, dragElastic: s = Au, dragMomentum: a = !0 } = t;
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
  function Lo(e, t, n) {
    return (t === !0 || t === e) && (n === null || n === e);
  }
  function O_(e, t = 10) {
    let n = null;
    return Math.abs(e.y) > t ? n = "y" : Math.abs(e.x) > t && (n = "x"), n;
  }
  class D_ extends Fn {
    constructor(t) {
      super(t), this.removeGroupControls = fe, this.removeListeners = fe, this.controls = new F_(t);
    }
    mount() {
      const { dragControls: t } = this.node.getProps();
      t && (this.removeGroupControls = t.subscribe(this.controls)), this.removeListeners = this.controls.addListeners() || fe;
    }
    unmount() {
      this.removeGroupControls(), this.removeListeners();
    }
  }
  const Qh = (e) => (t, n) => {
    e && ee.update(() => e(t, n));
  };
  class M_ extends Fn {
    constructor() {
      super(...arguments), this.removePointerDownListener = fe;
    }
    onPointerDown(t) {
      this.session = new _v(t, this.createPanHandlers(), { transformPagePoint: this.node.getTransformPagePoint() });
    }
    createPanHandlers() {
      const { onPanSessionStart: t, onPanStart: n, onPan: r, onPanEnd: i } = this.node.getProps();
      return {
        onSessionStart: Qh(t),
        onStart: Qh(n),
        onMove: r,
        onEnd: (o, s) => {
          delete this.session, i && ee.update(() => i(o, s));
        }
      };
    }
    mount() {
      this.removePointerDownListener = Bt(this.node.current, "pointerdown", (t) => this.onPointerDown(t));
    }
    update() {
      this.session && this.session.updateHandlers(this.createPanHandlers());
    }
    unmount() {
      this.removePointerDownListener(), this.session && this.session.end();
    }
  }
  function R_() {
    const e = x.useContext(ma);
    if (e === null)
      return [!0, null];
    const { isPresent: t, onExitComplete: n, register: r } = e, i = x.useId();
    return x.useEffect(() => r(i), []), !t && n ? [!1, () => n && n(i)] : [!0];
  }
  const Xo = {
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
  function Yh(e, t) {
    return t.max === t.min ? 0 : e / (t.max - t.min) * 100;
  }
  const ai = {
    correct: (e, t) => {
      if (!t.target)
        return e;
      if (typeof e == "string")
        if (N.test(e))
          e = parseFloat(e);
        else
          return e;
      const n = Yh(e, t.target.x), r = Yh(e, t.target.y);
      return `${n}% ${r}%`;
    }
  }, j_ = {
    correct: (e, { treeScale: t, projectionDelta: n }) => {
      const r = e, i = Cn.parse(e);
      if (i.length > 5)
        return r;
      const o = Cn.createTransformer(e), s = typeof i[0] != "number" ? 1 : 0, a = n.x.scale * t.x, l = n.y.scale * t.y;
      i[0 + s] /= a, i[1 + s] /= l;
      const u = ae(a, l, 0.5);
      return typeof i[2 + s] == "number" && (i[2 + s] /= u), typeof i[3 + s] == "number" && (i[3 + s] /= u), o(i);
    }
  };
  class L_ extends Fp.Component {
    /**
     * This only mounts projection nodes for components that
     * need measuring, we might want to do it for all components
     * in order to incorporate transforms
     */
    componentDidMount() {
      const { visualElement: t, layoutGroup: n, switchLayoutGroup: r, layoutId: i } = this.props, { projection: o } = t;
      BP(V_), o && (n.group && n.group.add(o), r && r.register && i && r.register(o), o.root.didUpdate(), o.addEventListener("animationComplete", () => {
        this.safeToRemove();
      }), o.setOptions({
        ...o.options,
        onExitComplete: () => this.safeToRemove()
      })), Xo.hasEverUpdated = !0;
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
  function Rv(e) {
    const [t, n] = R_(), r = x.useContext(ef);
    return Fp.createElement(L_, { ...e, layoutGroup: r, switchLayoutGroup: x.useContext(Ag), isPresent: t, safeToRemove: n });
  }
  const V_ = {
    borderRadius: {
      ...ai,
      applyTo: [
        "borderTopLeftRadius",
        "borderTopRightRadius",
        "borderBottomLeftRadius",
        "borderBottomRightRadius"
      ]
    },
    borderTopLeftRadius: ai,
    borderTopRightRadius: ai,
    borderBottomLeftRadius: ai,
    borderBottomRightRadius: ai,
    boxShadow: j_
  }, jv = ["TopLeft", "TopRight", "BottomLeft", "BottomRight"], $_ = jv.length, Xh = (e) => typeof e == "string" ? parseFloat(e) : e, Zh = (e) => typeof e == "number" || N.test(e);
  function N_(e, t, n, r, i, o) {
    i ? (e.opacity = ae(
      0,
      // TODO Reinstate this if only child
      n.opacity !== void 0 ? n.opacity : 1,
      I_(r)
    ), e.opacityExit = ae(t.opacity !== void 0 ? t.opacity : 1, 0, b_(r))) : o && (e.opacity = ae(t.opacity !== void 0 ? t.opacity : 1, n.opacity !== void 0 ? n.opacity : 1, r));
    for (let s = 0; s < $_; s++) {
      const a = `border${jv[s]}Radius`;
      let l = qh(t, a), u = qh(n, a);
      if (l === void 0 && u === void 0)
        continue;
      l || (l = 0), u || (u = 0), l === 0 || u === 0 || Zh(l) === Zh(u) ? (e[a] = Math.max(ae(Xh(l), Xh(u), r), 0), (Dt.test(u) || Dt.test(l)) && (e[a] += "%")) : e[a] = u;
    }
    (t.rotate || n.rotate) && (e.rotate = ae(t.rotate || 0, n.rotate || 0, r));
  }
  function qh(e, t) {
    return e[t] !== void 0 ? e[t] : e.borderRadius;
  }
  const I_ = Lv(0, 0.5, ff), b_ = Lv(0.5, 0.95, fe);
  function Lv(e, t, n) {
    return (r) => r < e ? 0 : r > t ? 1 : n(Zi(e, t, r));
  }
  function Jh(e, t) {
    e.min = t.min, e.max = t.max;
  }
  function st(e, t) {
    Jh(e.x, t.x), Jh(e.y, t.y);
  }
  function ep(e, t, n, r, i) {
    return e -= t, e = Ms(e, 1 / n, r), i !== void 0 && (e = Ms(e, 1 / i, r)), e;
  }
  function z_(e, t = 0, n = 1, r = 0.5, i, o = e, s = e) {
    if (Dt.test(t) && (t = parseFloat(t), t = ae(s.min, s.max, t / 100) - s.min), typeof t != "number")
      return;
    let a = ae(o.min, o.max, r);
    e === o && (a -= t), e.min = ep(e.min, t, n, a, i), e.max = ep(e.max, t, n, a, i);
  }
  function tp(e, t, [n, r, i], o, s) {
    z_(e, t[n], t[r], t[i], t.scale, o, s);
  }
  const B_ = ["x", "scaleX", "originX"], U_ = ["y", "scaleY", "originY"];
  function np(e, t, n, r) {
    tp(e.x, t, B_, n ? n.x : void 0, r ? r.x : void 0), tp(e.y, t, U_, n ? n.y : void 0, r ? r.y : void 0);
  }
  function rp(e) {
    return e.translate === 0 && e.scale === 1;
  }
  function Vv(e) {
    return rp(e.x) && rp(e.y);
  }
  function H_(e, t) {
    return e.x.min === t.x.min && e.x.max === t.x.max && e.y.min === t.y.min && e.y.max === t.y.max;
  }
  function $v(e, t) {
    return Math.round(e.x.min) === Math.round(t.x.min) && Math.round(e.x.max) === Math.round(t.x.max) && Math.round(e.y.min) === Math.round(t.y.min) && Math.round(e.y.max) === Math.round(t.y.max);
  }
  function ip(e) {
    return tt(e.x) / tt(e.y);
  }
  class W_ {
    constructor() {
      this.members = [];
    }
    add(t) {
      yf(this.members, t), t.scheduleRender();
    }
    remove(t) {
      if (gf(this.members, t), t === this.prevLead && (this.prevLead = void 0), t === this.lead) {
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
  function op(e, t, n) {
    let r = "";
    const i = e.x.translate / t.x, o = e.y.translate / t.y;
    if ((i || o) && (r = `translate3d(${i}px, ${o}px, 0) `), (t.x !== 1 || t.y !== 1) && (r += `scale(${1 / t.x}, ${1 / t.y}) `), n) {
      const { rotate: l, rotateX: u, rotateY: c } = n;
      l && (r += `rotate(${l}deg) `), u && (r += `rotateX(${u}deg) `), c && (r += `rotateY(${c}deg) `);
    }
    const s = e.x.scale * t.x, a = e.y.scale * t.y;
    return (s !== 1 || a !== 1) && (r += `scale(${s}, ${a})`), r || "none";
  }
  const G_ = (e, t) => e.depth - t.depth;
  class K_ {
    constructor() {
      this.children = [], this.isDirty = !1;
    }
    add(t) {
      yf(this.children, t), this.isDirty = !0;
    }
    remove(t) {
      gf(this.children, t), this.isDirty = !0;
    }
    forEach(t) {
      this.isDirty && this.children.sort(G_), this.isDirty = !1, this.children.forEach(t);
    }
  }
  function Q_(e, t) {
    const n = performance.now(), r = ({ timestamp: i }) => {
      const o = i - n;
      o >= t && (Qt(r), e(o - t));
    };
    return ee.read(r, !0), () => Qt(r);
  }
  function Y_(e) {
    window.MotionDebug && window.MotionDebug.record(e);
  }
  function X_(e) {
    return e instanceof SVGElement && e.tagName !== "svg";
  }
  function Z_(e, t, n) {
    const r = Ge(e) ? e : Hr(e);
    return r.start(mf("", r, t, n)), r.animation;
  }
  const sp = ["", "X", "Y", "Z"], ap = 1e3;
  let q_ = 0;
  const $n = {
    type: "projectionFrame",
    totalNodes: 0,
    resolvedTargetDeltas: 0,
    recalculatedProjection: 0
  };
  function Nv({ attachResizeListener: e, defaultParent: t, measureScroll: n, checkIsScrollRoot: r, resetTransform: i }) {
    return class {
      constructor(s = {}, a = t == null ? void 0 : t()) {
        this.id = q_++, this.animationId = 0, this.children = /* @__PURE__ */ new Set(), this.options = {}, this.isTreeAnimating = !1, this.isAnimationBlocked = !1, this.isLayoutDirty = !1, this.isProjectionDirty = !1, this.isSharedProjectionDirty = !1, this.isTransformDirty = !1, this.updateManuallyBlocked = !1, this.updateBlockedByResize = !1, this.isUpdating = !1, this.isSVG = !1, this.needsReset = !1, this.shouldResetTransform = !1, this.treeScale = { x: 1, y: 1 }, this.eventHandlers = /* @__PURE__ */ new Map(), this.hasTreeAnimated = !1, this.updateScheduled = !1, this.checkUpdateFailed = () => {
          this.isUpdating && (this.isUpdating = !1, this.clearAllSnapshots());
        }, this.updateProjection = () => {
          $n.totalNodes = $n.resolvedTargetDeltas = $n.recalculatedProjection = 0, this.nodes.forEach(tA), this.nodes.forEach(sA), this.nodes.forEach(aA), this.nodes.forEach(nA), Y_($n);
        }, this.hasProjected = !1, this.isVisible = !0, this.animationProgress = 0, this.sharedNodes = /* @__PURE__ */ new Map(), this.latestValues = s, this.root = a ? a.root || a : this, this.path = a ? [...a.path, a] : [], this.parent = a, this.depth = a ? a.depth + 1 : 0;
        for (let l = 0; l < this.path.length; l++)
          this.path[l].shouldResetTransform = !0;
        this.root === this && (this.nodes = new K_());
      }
      addEventListener(s, a) {
        return this.eventHandlers.has(s) || this.eventHandlers.set(s, new vf()), this.eventHandlers.get(s).add(a);
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
        this.isSVG = X_(s), this.instance = s;
        const { layoutId: l, layout: u, visualElement: c } = this.options;
        if (c && !c.current && c.mount(s), this.root.nodes.add(this), this.parent && this.parent.children.add(this), a && (u || l) && (this.isLayoutDirty = !0), e) {
          let f;
          const d = () => this.root.updateBlockedByResize = !1;
          e(s, () => {
            this.root.updateBlockedByResize = !0, f && f(), f = Q_(d, 250), Xo.hasAnimatedSinceResize && (Xo.hasAnimatedSinceResize = !1, this.nodes.forEach(up));
          });
        }
        l && this.root.registerSharedNode(l, this), this.options.animate !== !1 && c && (l || u) && this.addEventListener("didUpdate", ({ delta: f, hasLayoutChanged: d, hasRelativeTargetChanged: p, layout: g }) => {
          if (this.isTreeAnimationBlocked()) {
            this.target = void 0, this.relativeTarget = void 0;
            return;
          }
          const v = this.options.transition || c.getDefaultTransition() || dA, { onLayoutAnimationStart: k, onLayoutAnimationComplete: y } = c.getProps(), h = !this.targetLayout || !$v(this.targetLayout, g) || p, m = !d && p;
          if (this.options.layoutRoot || this.resumeFrom && this.resumeFrom.instance || m || d && (h || !this.currentAnimation)) {
            this.resumeFrom && (this.resumingFrom = this.resumeFrom, this.resumingFrom.resumingFrom = void 0), this.setAnimationOrigin(f, m);
            const S = {
              ...Tv(v, "layout"),
              onPlay: k,
              onComplete: y
            };
            (c.shouldReduceMotion || this.options.layoutRoot) && (S.delay = 0, S.type = !1), this.startAnimation(S);
          } else
            d || up(this), this.isLead() && this.options.onExitComplete && this.options.onExitComplete();
          this.targetLayout = g;
        });
      }
      unmount() {
        this.options.layoutId && this.willUpdate(), this.root.nodes.remove(this);
        const s = this.getStack();
        s && s.remove(this), this.parent && this.parent.children.delete(this), this.instance = void 0, Qt(this.updateProjection);
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
        this.isUpdateBlocked() || (this.isUpdating = !0, this.nodes && this.nodes.forEach(lA), this.animationId++);
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
          this.unblockUpdate(), this.clearAllSnapshots(), this.nodes.forEach(lp);
          return;
        }
        this.isUpdating || this.nodes.forEach(iA), this.isUpdating = !1, this.nodes.forEach(oA), this.nodes.forEach(J_), this.nodes.forEach(eA), this.clearAllSnapshots();
        const a = performance.now();
        Se.delta = En(0, 1e3 / 60, a - Se.timestamp), Se.timestamp = a, Se.isProcessing = !0, il.update.process(Se), il.preRender.process(Se), il.render.process(Se), Se.isProcessing = !1;
      }
      didUpdate() {
        this.updateScheduled || (this.updateScheduled = !0, queueMicrotask(() => this.update()));
      }
      clearAllSnapshots() {
        this.nodes.forEach(rA), this.sharedNodes.forEach(uA);
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
        const s = this.isLayoutDirty || this.shouldResetTransform, a = this.projectionDelta && !Vv(this.projectionDelta), l = this.getTransformTemplate(), u = l ? l(this.latestValues, "") : void 0, c = u !== this.prevTransformTemplateValue;
        s && (a || Vn(this.latestValues) || c) && (i(this.instance, u), this.shouldResetTransform = !1, this.scheduleRender());
      }
      measure(s = !0) {
        const a = this.measurePageBox();
        let l = this.removeElementScroll(a);
        return s && (l = this.removeTransform(l)), hA(l), {
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
        return l && (rn(a.x, l.offset.x), rn(a.y, l.offset.y)), a;
      }
      removeElementScroll(s) {
        const a = pe();
        st(a, s);
        for (let l = 0; l < this.path.length; l++) {
          const u = this.path[l], { scroll: c, options: f } = u;
          if (u !== this.root && c && f.layoutScroll) {
            if (c.isRoot) {
              st(a, s);
              const { scroll: d } = this.root;
              d && (rn(a.x, -d.offset.x), rn(a.y, -d.offset.y));
            }
            rn(a.x, c.offset.x), rn(a.y, c.offset.y);
          }
        }
        return a;
      }
      applyTransform(s, a = !1) {
        const l = pe();
        st(l, s);
        for (let u = 0; u < this.path.length; u++) {
          const c = this.path[u];
          !a && c.options.layoutScroll && c.scroll && c !== c.root && Ar(l, {
            x: -c.scroll.offset.x,
            y: -c.scroll.offset.y
          }), Vn(c.latestValues) && Ar(l, c.latestValues);
        }
        return Vn(this.latestValues) && Ar(l, this.latestValues), l;
      }
      removeTransform(s) {
        const a = pe();
        st(a, s);
        for (let l = 0; l < this.path.length; l++) {
          const u = this.path[l];
          if (!u.instance || !Vn(u.latestValues))
            continue;
          Fu(u.latestValues) && u.updateSnapshot();
          const c = pe(), f = u.measurePageBox();
          st(c, f), np(a, u.latestValues, u.snapshot ? u.snapshot.layoutBox : void 0, c);
        }
        return Vn(this.latestValues) && np(a, this.latestValues), a;
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
        this.relativeParent && this.relativeParent.resolvedRelativeTargetAt !== Se.timestamp && this.relativeParent.resolveTargetDelta(!0);
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
          if (this.resolvedRelativeTargetAt = Se.timestamp, !this.targetDelta && !this.relativeTarget) {
            const p = this.getClosestProjectingParent();
            p && p.layout && this.animationProgress !== 1 ? (this.relativeParent = p, this.forceRelativeParentToResolveTarget(), this.relativeTarget = pe(), this.relativeTargetOrigin = pe(), Ai(this.relativeTargetOrigin, this.layout.layoutBox, p.layout.layoutBox), st(this.relativeTarget, this.relativeTargetOrigin)) : this.relativeParent = this.relativeTarget = void 0;
          }
          if (!(!this.relativeTarget && !this.targetDelta)) {
            if (this.target || (this.target = pe(), this.targetWithTransforms = pe()), this.relativeTarget && this.relativeTargetOrigin && this.relativeParent && this.relativeParent.target ? (this.forceRelativeParentToResolveTarget(), m_(this.target, this.relativeTarget, this.relativeParent.target)) : this.targetDelta ? (this.resumingFrom ? this.target = this.applyTransform(this.layout.layoutBox) : st(this.target, this.layout.layoutBox), Dv(this.target, this.targetDelta)) : st(this.target, this.layout.layoutBox), this.attemptToResolveRelativeTarget) {
              this.attemptToResolveRelativeTarget = !1;
              const p = this.getClosestProjectingParent();
              p && !!p.resumingFrom == !!this.resumingFrom && !p.options.layoutScroll && p.target && this.animationProgress !== 1 ? (this.relativeParent = p, this.forceRelativeParentToResolveTarget(), this.relativeTarget = pe(), this.relativeTargetOrigin = pe(), Ai(this.relativeTargetOrigin, this.target, p.target), st(this.relativeTarget, this.relativeTargetOrigin)) : this.relativeParent = this.relativeTarget = void 0;
            }
            $n.resolvedTargetDeltas++;
          }
        }
      }
      getClosestProjectingParent() {
        if (!(!this.parent || Fu(this.parent.latestValues) || Ov(this.parent.latestValues)))
          return this.parent.isProjecting() ? this.parent : this.parent.getClosestProjectingParent();
      }
      isProjecting() {
        return !!((this.relativeTarget || this.targetDelta || this.options.layoutRoot) && this.layout);
      }
      calcProjection() {
        var s;
        const a = this.getLead(), l = !!this.resumingFrom || this !== a;
        let u = !0;
        if ((this.isProjectionDirty || !((s = this.parent) === null || s === void 0) && s.isProjectionDirty) && (u = !1), l && (this.isSharedProjectionDirty || this.isTransformDirty) && (u = !1), this.resolvedRelativeTargetAt === Se.timestamp && (u = !1), u)
          return;
        const { layout: c, layoutId: f } = this.options;
        if (this.isTreeAnimating = !!(this.parent && this.parent.isTreeAnimating || this.currentAnimation || this.pendingAnimation), this.isTreeAnimating || (this.targetDelta = this.relativeTarget = void 0), !this.layout || !(c || f))
          return;
        st(this.layoutCorrected, this.layout.layoutBox);
        const d = this.treeScale.x, p = this.treeScale.y;
        C_(this.layoutCorrected, this.treeScale, this.path, l), a.layout && !a.target && (this.treeScale.x !== 1 || this.treeScale.y !== 1) && (a.target = a.layout.layoutBox);
        const { target: g } = a;
        if (!g) {
          this.projectionTransform && (this.projectionDelta = _r(), this.projectionTransform = "none", this.scheduleRender());
          return;
        }
        this.projectionDelta || (this.projectionDelta = _r(), this.projectionDeltaWithTransform = _r());
        const v = this.projectionTransform;
        _i(this.projectionDelta, this.layoutCorrected, g, this.latestValues), this.projectionTransform = op(this.projectionDelta, this.treeScale), (this.projectionTransform !== v || this.treeScale.x !== d || this.treeScale.y !== p) && (this.hasProjected = !0, this.scheduleRender(), this.notifyListeners("projectionUpdate", g)), $n.recalculatedProjection++;
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
        const l = this.snapshot, u = l ? l.latestValues : {}, c = { ...this.latestValues }, f = _r();
        (!this.relativeParent || !this.relativeParent.options.layoutRoot) && (this.relativeTarget = this.relativeTargetOrigin = void 0), this.attemptToResolveRelativeTarget = !a;
        const d = pe(), p = l ? l.source : void 0, g = this.layout ? this.layout.source : void 0, v = p !== g, k = this.getStack(), y = !k || k.members.length <= 1, h = !!(v && !y && this.options.crossfade === !0 && !this.path.some(fA));
        this.animationProgress = 0;
        let m;
        this.mixTargetDelta = (S) => {
          const C = S / 1e3;
          cp(f.x, s.x, C), cp(f.y, s.y, C), this.setTargetDelta(f), this.relativeTarget && this.relativeTargetOrigin && this.layout && this.relativeParent && this.relativeParent.layout && (Ai(d, this.layout.layoutBox, this.relativeParent.layout.layoutBox), cA(this.relativeTarget, this.relativeTargetOrigin, d, C), m && H_(this.relativeTarget, m) && (this.isProjectionDirty = !1), m || (m = pe()), st(m, this.relativeTarget)), v && (this.animationValues = c, N_(c, u, this.latestValues, C, h, y)), this.root.scheduleUpdateProjection(), this.scheduleRender(), this.animationProgress = C;
        }, this.mixTargetDelta(this.options.layoutRoot ? 1e3 : 0);
      }
      startAnimation(s) {
        this.notifyListeners("animationStart"), this.currentAnimation && this.currentAnimation.stop(), this.resumingFrom && this.resumingFrom.currentAnimation && this.resumingFrom.currentAnimation.stop(), this.pendingAnimation && (Qt(this.pendingAnimation), this.pendingAnimation = void 0), this.pendingAnimation = ee.update(() => {
          Xo.hasAnimatedSinceResize = !0, this.currentAnimation = Z_(0, ap, {
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
        this.currentAnimation && (this.mixTargetDelta && this.mixTargetDelta(ap), this.currentAnimation.stop()), this.completeAnimation();
      }
      applyTransformsToTarget() {
        const s = this.getLead();
        let { targetWithTransforms: a, target: l, layout: u, latestValues: c } = s;
        if (!(!a || !l || !u)) {
          if (this !== s && this.layout && u && Iv(this.options.animationType, this.layout.layoutBox, u.layoutBox)) {
            l = this.target || pe();
            const f = tt(this.layout.layoutBox.x);
            l.x.min = s.target.x.min, l.x.max = l.x.min + f;
            const d = tt(this.layout.layoutBox.y);
            l.y.min = s.target.y.min, l.y.max = l.y.min + d;
          }
          st(a, l), Ar(a, c), _i(this.projectionDeltaWithTransform, this.layoutCorrected, a, c);
        }
      }
      registerSharedNode(s, a) {
        this.sharedNodes.has(s) || this.sharedNodes.set(s, new W_()), this.sharedNodes.get(s).add(a);
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
        for (let c = 0; c < sp.length; c++) {
          const f = "rotate" + sp[c];
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
          return this.needsReset = !1, u.opacity = "", u.pointerEvents = Yo(s.pointerEvents) || "", u.transform = c ? c(this.latestValues, "") : "none", u;
        const f = this.getLead();
        if (!this.projectionDelta || !this.layout || !f.target) {
          const v = {};
          return this.options.layoutId && (v.opacity = this.latestValues.opacity !== void 0 ? this.latestValues.opacity : 1, v.pointerEvents = Yo(s.pointerEvents) || ""), this.hasProjected && !Vn(this.latestValues) && (v.transform = c ? c({}, "") : "none", this.hasProjected = !1), v;
        }
        const d = f.animationValues || f.latestValues;
        this.applyTransformsToTarget(), u.transform = op(this.projectionDeltaWithTransform, this.treeScale, d), c && (u.transform = c(d, u.transform));
        const { x: p, y: g } = this.projectionDelta;
        u.transformOrigin = `${p.origin * 100}% ${g.origin * 100}% 0`, f.animationValues ? u.opacity = f === this ? (l = (a = d.opacity) !== null && a !== void 0 ? a : this.latestValues.opacity) !== null && l !== void 0 ? l : 1 : this.preserveOpacity ? this.latestValues.opacity : d.opacityExit : u.opacity = f === this ? d.opacity !== void 0 ? d.opacity : "" : d.opacityExit !== void 0 ? d.opacityExit : 0;
        for (const v in Ps) {
          if (d[v] === void 0)
            continue;
          const { correct: k, applyTo: y } = Ps[v], h = u.transform === "none" ? d[v] : k(d[v], f);
          if (y) {
            const m = y.length;
            for (let S = 0; S < m; S++)
              u[y[S]] = h;
          } else
            u[v] = h;
        }
        return this.options.layoutId && (u.pointerEvents = f === this ? Yo(s.pointerEvents) || "" : "none"), u;
      }
      clearSnapshot() {
        this.resumeFrom = this.snapshot = void 0;
      }
      // Only run on root
      resetTree() {
        this.root.nodes.forEach((s) => {
          var a;
          return (a = s.currentAnimation) === null || a === void 0 ? void 0 : a.stop();
        }), this.root.nodes.forEach(lp), this.root.sharedNodes.clear();
      }
    };
  }
  function J_(e) {
    e.updateLayout();
  }
  function eA(e) {
    var t;
    const n = ((t = e.resumeFrom) === null || t === void 0 ? void 0 : t.snapshot) || e.snapshot;
    if (e.isLead() && e.layout && n && e.hasListeners("didUpdate")) {
      const { layoutBox: r, measuredBox: i } = e.layout, { animationType: o } = e.options, s = n.source !== e.layout.source;
      o === "size" ? kt((f) => {
        const d = s ? n.measuredBox[f] : n.layoutBox[f], p = tt(d);
        d.min = r[f].min, d.max = d.min + p;
      }) : Iv(o, n.layoutBox, r) && kt((f) => {
        const d = s ? n.measuredBox[f] : n.layoutBox[f], p = tt(r[f]);
        d.max = d.min + p, e.relativeTarget && !e.currentAnimation && (e.isProjectionDirty = !0, e.relativeTarget[f].max = e.relativeTarget[f].min + p);
      });
      const a = _r();
      _i(a, r, n.layoutBox);
      const l = _r();
      s ? _i(l, e.applyTransform(i, !0), n.measuredBox) : _i(l, r, n.layoutBox);
      const u = !Vv(a);
      let c = !1;
      if (!e.resumeFrom) {
        const f = e.getClosestProjectingParent();
        if (f && !f.resumeFrom) {
          const { snapshot: d, layout: p } = f;
          if (d && p) {
            const g = pe();
            Ai(g, n.layoutBox, d.layoutBox);
            const v = pe();
            Ai(v, r, p.layoutBox), $v(g, v) || (c = !0), f.options.layoutRoot && (e.relativeTarget = v, e.relativeTargetOrigin = g, e.relativeParent = f);
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
  function tA(e) {
    $n.totalNodes++, e.parent && (e.isProjecting() || (e.isProjectionDirty = e.parent.isProjectionDirty), e.isSharedProjectionDirty || (e.isSharedProjectionDirty = !!(e.isProjectionDirty || e.parent.isProjectionDirty || e.parent.isSharedProjectionDirty)), e.isTransformDirty || (e.isTransformDirty = e.parent.isTransformDirty));
  }
  function nA(e) {
    e.isProjectionDirty = e.isSharedProjectionDirty = e.isTransformDirty = !1;
  }
  function rA(e) {
    e.clearSnapshot();
  }
  function lp(e) {
    e.clearMeasurements();
  }
  function iA(e) {
    e.isLayoutDirty = !1;
  }
  function oA(e) {
    const { visualElement: t } = e.options;
    t && t.getProps().onBeforeLayoutMeasure && t.notify("BeforeLayoutMeasure"), e.resetTransform();
  }
  function up(e) {
    e.finishAnimation(), e.targetDelta = e.relativeTarget = e.target = void 0, e.isProjectionDirty = !0;
  }
  function sA(e) {
    e.resolveTargetDelta();
  }
  function aA(e) {
    e.calcProjection();
  }
  function lA(e) {
    e.resetRotation();
  }
  function uA(e) {
    e.removeLeadSnapshot();
  }
  function cp(e, t, n) {
    e.translate = ae(t.translate, 0, n), e.scale = ae(t.scale, 1, n), e.origin = t.origin, e.originPoint = t.originPoint;
  }
  function fp(e, t, n, r) {
    e.min = ae(t.min, n.min, r), e.max = ae(t.max, n.max, r);
  }
  function cA(e, t, n, r) {
    fp(e.x, t.x, n.x, r), fp(e.y, t.y, n.y, r);
  }
  function fA(e) {
    return e.animationValues && e.animationValues.opacityExit !== void 0;
  }
  const dA = {
    duration: 0.45,
    ease: [0.4, 0, 0.1, 1]
  }, dp = (e) => typeof navigator < "u" && navigator.userAgent.toLowerCase().includes(e), hp = dp("applewebkit/") && !dp("chrome/") ? Math.round : fe;
  function pp(e) {
    e.min = hp(e.min), e.max = hp(e.max);
  }
  function hA(e) {
    pp(e.x), pp(e.y);
  }
  function Iv(e, t, n) {
    return e === "position" || e === "preserve-aspect" && !_u(ip(t), ip(n), 0.2);
  }
  const pA = Nv({
    attachResizeListener: (e, t) => bt(e, "resize", t),
    measureScroll: () => ({
      x: document.documentElement.scrollLeft || document.body.scrollLeft,
      y: document.documentElement.scrollTop || document.body.scrollTop
    }),
    checkIsScrollRoot: () => !0
  }), ml = {
    current: void 0
  }, bv = Nv({
    measureScroll: (e) => ({
      x: e.scrollLeft,
      y: e.scrollTop
    }),
    defaultParent: () => {
      if (!ml.current) {
        const e = new pA({});
        e.mount(window), e.setOptions({ layoutScroll: !0 }), ml.current = e;
      }
      return ml.current;
    },
    resetTransform: (e, t) => {
      e.style.transform = t !== void 0 ? t : "none";
    },
    checkIsScrollRoot: (e) => window.getComputedStyle(e).position === "fixed"
  }), mA = {
    pan: {
      Feature: M_
    },
    drag: {
      Feature: D_,
      ProjectionNode: bv,
      MeasureLayout: Rv
    }
  }, yA = /var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/;
  function gA(e) {
    const t = yA.exec(e);
    if (!t)
      return [,];
    const [, n, r] = t;
    return [n, r];
  }
  function Du(e, t, n = 1) {
    const [r, i] = gA(e);
    if (!r)
      return;
    const o = window.getComputedStyle(t).getPropertyValue(r);
    if (o) {
      const s = o.trim();
      return Ev(s) ? parseFloat(s) : s;
    } else
      return xu(i) ? Du(i, t, n + 1) : i;
  }
  function vA(e, { ...t }, n) {
    const r = e.current;
    if (!(r instanceof Element))
      return { target: t, transitionEnd: n };
    n && (n = { ...n }), e.values.forEach((i) => {
      const o = i.get();
      if (!xu(o))
        return;
      const s = Du(o, r);
      s && i.set(s);
    });
    for (const i in t) {
      const o = t[i];
      if (!xu(o))
        continue;
      const s = Du(o, r);
      s && (t[i] = s, n || (n = {}), n[i] === void 0 && (n[i] = o));
    }
    return { target: t, transitionEnd: n };
  }
  const SA = /* @__PURE__ */ new Set([
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
  ]), zv = (e) => SA.has(e), xA = (e) => Object.keys(e).some(zv), mp = (e) => e === ar || e === N, yp = (e, t) => parseFloat(e.split(", ")[t]), gp = (e, t) => (n, { transform: r }) => {
    if (r === "none" || !r)
      return 0;
    const i = r.match(/^matrix3d\((.+)\)$/);
    if (i)
      return yp(i[1], t);
    {
      const o = r.match(/^matrix\((.+)\)$/);
      return o ? yp(o[1], e) : 0;
    }
  }, wA = /* @__PURE__ */ new Set(["x", "y", "z"]), TA = so.filter((e) => !wA.has(e));
  function EA(e) {
    const t = [];
    return TA.forEach((n) => {
      const r = e.getValue(n);
      r !== void 0 && (t.push([n, r.get()]), r.set(n.startsWith("scale") ? 1 : 0));
    }), t.length && e.render(), t;
  }
  const Wr = {
    // Dimensions
    width: ({ x: e }, { paddingLeft: t = "0", paddingRight: n = "0" }) => e.max - e.min - parseFloat(t) - parseFloat(n),
    height: ({ y: e }, { paddingTop: t = "0", paddingBottom: n = "0" }) => e.max - e.min - parseFloat(t) - parseFloat(n),
    top: (e, { top: t }) => parseFloat(t),
    left: (e, { left: t }) => parseFloat(t),
    bottom: ({ y: e }, { top: t }) => parseFloat(t) + (e.max - e.min),
    right: ({ x: e }, { left: t }) => parseFloat(t) + (e.max - e.min),
    // Transform
    x: gp(4, 13),
    y: gp(5, 14)
  };
  Wr.translateX = Wr.x;
  Wr.translateY = Wr.y;
  const CA = (e, t, n) => {
    const r = t.measureViewportBox(), i = t.current, o = getComputedStyle(i), { display: s } = o, a = {};
    s === "none" && t.setStaticValue("display", e.display || "block"), n.forEach((u) => {
      a[u] = Wr[u](r, o);
    }), t.render();
    const l = t.measureViewportBox();
    return n.forEach((u) => {
      const c = t.getValue(u);
      c && c.jump(a[u]), e[u] = Wr[u](l, o);
    }), e;
  }, PA = (e, t, n = {}, r = {}) => {
    t = { ...t }, r = { ...r };
    const i = Object.keys(t).filter(zv);
    let o = [], s = !1;
    const a = [];
    if (i.forEach((l) => {
      const u = e.getValue(l);
      if (!e.hasValue(l))
        return;
      let c = n[l], f = si(c);
      const d = t[l];
      let p;
      if (_s(d)) {
        const g = d.length, v = d[0] === null ? 1 : 0;
        c = d[v], f = si(c);
        for (let k = v; k < g && d[k] !== null; k++)
          p ? cf(si(d[k]) === p) : p = si(d[k]);
      } else
        p = si(d);
      if (f !== p)
        if (mp(f) && mp(p)) {
          const g = u.get();
          typeof g == "string" && u.set(parseFloat(g)), typeof d == "string" ? t[l] = parseFloat(d) : Array.isArray(d) && p === N && (t[l] = d.map(parseFloat));
        } else
          f != null && f.transform && (p != null && p.transform) && (c === 0 || d === 0) ? c === 0 ? u.set(p.transform(c)) : t[l] = f.transform(d) : (s || (o = EA(e), s = !0), a.push(l), r[l] = r[l] !== void 0 ? r[l] : t[l], u.jump(d));
    }), a.length) {
      const l = a.indexOf("height") >= 0 ? window.pageYOffset : null, u = CA(t, e, a);
      return o.length && o.forEach(([c, f]) => {
        e.getValue(c).set(f);
      }), e.render(), ya && l !== null && window.scrollTo({ top: l }), { target: u, transitionEnd: r };
    } else
      return { target: t, transitionEnd: r };
  };
  function kA(e, t, n, r) {
    return xA(t) ? PA(e, t, n, r) : { target: t, transitionEnd: r };
  }
  const _A = (e, t, n, r) => {
    const i = vA(e, t, r);
    return t = i.target, r = i.transitionEnd, kA(e, t, n, r);
  }, Mu = { current: null }, Bv = { current: !1 };
  function AA() {
    if (Bv.current = !0, !!ya)
      if (window.matchMedia) {
        const e = window.matchMedia("(prefers-reduced-motion)"), t = () => Mu.current = e.matches;
        e.addListener(t), t();
      } else
        Mu.current = !1;
  }
  function FA(e, t, n) {
    const { willChange: r } = t;
    for (const i in t) {
      const o = t[i], s = n[i];
      if (Ge(o))
        e.addValue(i, o), Ds(r) && r.add(i);
      else if (Ge(s))
        e.addValue(i, Hr(o, { owner: e })), Ds(r) && r.remove(i);
      else if (s !== o)
        if (e.hasValue(i)) {
          const a = e.getValue(i);
          !a.hasAnimated && a.set(o);
        } else {
          const a = e.getStaticValue(i);
          e.addValue(i, Hr(a !== void 0 ? a : o, { owner: e }));
        }
    }
    for (const i in n)
      t[i] === void 0 && e.removeValue(i);
    return t;
  }
  const vp = /* @__PURE__ */ new WeakMap(), Uv = Object.keys(Xi), OA = Uv.length, Sp = [
    "AnimationStart",
    "AnimationComplete",
    "Update",
    "BeforeLayoutMeasure",
    "LayoutMeasure",
    "LayoutAnimationStart",
    "LayoutAnimationComplete"
  ], DA = Jc.length;
  class MA {
    constructor({ parent: t, props: n, presenceContext: r, reducedMotionConfig: i, visualState: o }, s = {}) {
      this.current = null, this.children = /* @__PURE__ */ new Set(), this.isVariantNode = !1, this.isControllingVariants = !1, this.shouldReduceMotion = null, this.values = /* @__PURE__ */ new Map(), this.features = {}, this.valueSubscriptions = /* @__PURE__ */ new Map(), this.prevMotionValues = {}, this.events = {}, this.propEventSubscriptions = {}, this.notifyUpdate = () => this.notify("Update", this.latestValues), this.render = () => {
        this.current && (this.triggerBuild(), this.renderInstance(this.current, this.renderState, this.props.style, this.projection));
      }, this.scheduleRender = () => ee.render(this.render, !1, !0);
      const { latestValues: a, renderState: l } = o;
      this.latestValues = a, this.baseTarget = { ...a }, this.initialValues = n.initial ? { ...a } : {}, this.renderState = l, this.parent = t, this.props = n, this.presenceContext = r, this.depth = t ? t.depth + 1 : 0, this.reducedMotionConfig = i, this.options = s, this.isControllingVariants = va(n), this.isVariantNode = _g(n), this.isVariantNode && (this.variantChildren = /* @__PURE__ */ new Set()), this.manuallyAnimateOnMount = !!(t && t.current);
      const { willChange: u, ...c } = this.scrapeMotionValuesFromProps(n, {});
      for (const f in c) {
        const d = c[f];
        a[f] !== void 0 && Ge(d) && (d.set(a[f], !1), Ds(u) && u.add(f));
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
      this.current = t, vp.set(t, this), this.projection && !this.projection.instance && this.projection.mount(t), this.parent && this.isVariantNode && !this.isControllingVariants && (this.removeFromVariantTree = this.parent.addVariantChild(this)), this.values.forEach((n, r) => this.bindToMotionValue(r, n)), Bv.current || AA(), this.shouldReduceMotion = this.reducedMotionConfig === "never" ? !1 : this.reducedMotionConfig === "always" ? !0 : Mu.current, this.parent && this.parent.children.add(this), this.update(this.props, this.presenceContext);
    }
    unmount() {
      vp.delete(this.current), this.projection && this.projection.unmount(), Qt(this.notifyUpdate), Qt(this.render), this.valueSubscriptions.forEach((t) => t()), this.removeFromVariantTree && this.removeFromVariantTree(), this.parent && this.parent.children.delete(this);
      for (const t in this.events)
        this.events[t].clear();
      for (const t in this.features)
        this.features[t].unmount();
      this.current = null;
    }
    bindToMotionValue(t, n) {
      const r = sr.has(t), i = n.on("change", (s) => {
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
      for (let l = 0; l < OA; l++) {
        const u = Uv[l], { isEnabled: c, Feature: f, ProjectionNode: d, MeasureLayout: p } = Xi[u];
        d && (s = d), c(n) && (!this.features[u] && f && (this.features[u] = new f(this)), p && (a = p));
      }
      if (!this.projection && s) {
        this.projection = new s(this.latestValues, this.parent && this.parent.projection);
        const { layoutId: l, layout: u, drag: c, dragConstraints: f, layoutScroll: d, layoutRoot: p } = n;
        this.projection.setOptions({
          layoutId: l,
          layout: u,
          alwaysMeasureLayout: !!c || f && Pr(f),
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
      for (let r = 0; r < Sp.length; r++) {
        const i = Sp[r];
        this.propEventSubscriptions[i] && (this.propEventSubscriptions[i](), delete this.propEventSubscriptions[i]);
        const o = t["on" + i];
        o && (this.propEventSubscriptions[i] = this.on(i, o));
      }
      this.prevMotionValues = FA(this, this.scrapeMotionValuesFromProps(t, this.prevProps), this.prevMotionValues), this.handleChildMotionValue && this.handleChildMotionValue();
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
      for (let r = 0; r < DA; r++) {
        const i = Jc[r], o = this.props[i];
        (Yi(o) || o === !1) && (n[i] = o);
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
      return r === void 0 && n !== void 0 && (r = Hr(n, { owner: this }), this.addValue(t, r)), r;
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
      const { initial: r } = this.props, i = typeof r == "string" || typeof r == "object" ? (n = uf(this.props, r)) === null || n === void 0 ? void 0 : n[t] : void 0;
      if (r && i !== void 0)
        return i;
      const o = this.getBaseTargetFromProps(this.props, t);
      return o !== void 0 && !Ge(o) ? o : this.initialValues[t] !== void 0 && i === void 0 ? void 0 : this.baseTarget[t];
    }
    on(t, n) {
      return this.events[t] || (this.events[t] = new vf()), this.events[t].add(n);
    }
    notify(t, ...n) {
      this.events[t] && this.events[t].notify(...n);
    }
  }
  class Hv extends MA {
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
      let s = Z2(r, t || {}, this);
      if (i && (n && (n = i(n)), r && (r = i(r)), s && (s = i(s))), o) {
        Y2(this, r, s);
        const a = _A(this, r, s, n);
        n = a.transitionEnd, r = a.target;
      }
      return {
        transition: t,
        transitionEnd: n,
        ...r
      };
    }
  }
  function RA(e) {
    return window.getComputedStyle(e);
  }
  class jA extends Hv {
    readValueFromInstance(t, n) {
      if (sr.has(n)) {
        const r = pf(n);
        return r && r.default || 0;
      } else {
        const r = RA(t), i = (Dg(n) ? r.getPropertyValue(n) : r[n]) || 0;
        return typeof i == "string" ? i.trim() : i;
      }
    }
    measureInstanceViewportBox(t, { transformPagePoint: n }) {
      return Mv(t, n);
    }
    build(t, n, r, i) {
      nf(t, n, r, i.transformTemplate);
    }
    scrapeMotionValuesFromProps(t, n) {
      return lf(t, n);
    }
    handleChildMotionValue() {
      this.childSubscription && (this.childSubscription(), delete this.childSubscription);
      const { children: t } = this.props;
      Ge(t) && (this.childSubscription = t.on("change", (n) => {
        this.current && (this.current.textContent = `${n}`);
      }));
    }
    renderInstance(t, n, r, i) {
      $g(t, n, r, i);
    }
  }
  class LA extends Hv {
    constructor() {
      super(...arguments), this.isSVGTag = !1;
    }
    getBaseTargetFromProps(t, n) {
      return t[n];
    }
    readValueFromInstance(t, n) {
      if (sr.has(n)) {
        const r = pf(n);
        return r && r.default || 0;
      }
      return n = Ng.has(n) ? n : af(n), t.getAttribute(n);
    }
    measureInstanceViewportBox() {
      return pe();
    }
    scrapeMotionValuesFromProps(t, n) {
      return bg(t, n);
    }
    build(t, n, r, i) {
      of(t, n, r, this.isSVGTag, i.transformTemplate);
    }
    renderInstance(t, n, r, i) {
      Ig(t, n, r, i);
    }
    mount(t) {
      this.isSVGTag = sf(t.tagName), super.mount(t);
    }
  }
  const VA = (e, t) => tf(e) ? new LA(t, { enableHardwareAcceleration: !1 }) : new jA(t, { enableHardwareAcceleration: !0 }), $A = {
    layout: {
      ProjectionNode: bv,
      MeasureLayout: Rv
    }
  }, NA = {
    ...f_,
    ...Dk,
    ...mA,
    ...$A
  }, IA = /* @__PURE__ */ bP((e, t) => vk(e, t, NA, VA));
  function Wv() {
    const e = x.useRef(!1);
    return Zc(() => (e.current = !0, () => {
      e.current = !1;
    }), []), e;
  }
  function bA() {
    const e = Wv(), [t, n] = x.useState(0), r = x.useCallback(() => {
      e.current && n(t + 1);
    }, [t]);
    return [x.useCallback(() => ee.postRender(r), [r]), t];
  }
  class zA extends x.Component {
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
  function BA({ children: e, isPresent: t }) {
    const n = x.useId(), r = x.useRef(null), i = x.useRef({
      width: 0,
      height: 0,
      top: 0,
      left: 0
    });
    return x.useInsertionEffect(() => {
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
    }, [t]), x.createElement(zA, { isPresent: t, childRef: r, sizeRef: i }, x.cloneElement(e, { ref: r }));
  }
  const yl = ({ children: e, initial: t, isPresent: n, onExitComplete: r, custom: i, presenceAffectsLayout: o, mode: s }) => {
    const a = zg(UA), l = x.useId(), u = x.useMemo(
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
    return x.useMemo(() => {
      a.forEach((c, f) => a.set(f, !1));
    }, [n]), x.useEffect(() => {
      !n && !a.size && r && r();
    }, [n]), s === "popLayout" && (e = x.createElement(BA, { isPresent: n }, e)), x.createElement(ma.Provider, { value: u }, e);
  };
  function UA() {
    return /* @__PURE__ */ new Map();
  }
  function HA(e) {
    return x.useEffect(() => () => e(), []);
  }
  const fr = (e) => e.key || "";
  function WA(e, t) {
    e.forEach((n) => {
      const r = fr(n);
      t.set(r, n);
    });
  }
  function GA(e) {
    const t = [];
    return x.Children.forEach(e, (n) => {
      x.isValidElement(n) && t.push(n);
    }), t;
  }
  const KA = ({ children: e, custom: t, initial: n = !0, onExitComplete: r, exitBeforeEnter: i, presenceAffectsLayout: o = !0, mode: s = "sync" }) => {
    const a = x.useContext(ef).forceRender || bA()[0], l = Wv(), u = GA(e);
    let c = u;
    const f = x.useRef(/* @__PURE__ */ new Map()).current, d = x.useRef(c), p = x.useRef(/* @__PURE__ */ new Map()).current, g = x.useRef(!0);
    if (Zc(() => {
      g.current = !1, WA(u, p), d.current = c;
    }), HA(() => {
      g.current = !0, p.clear(), f.clear();
    }), g.current)
      return x.createElement(x.Fragment, null, c.map((h) => x.createElement(yl, { key: fr(h), isPresent: !0, initial: n ? void 0 : !1, presenceAffectsLayout: o, mode: s }, h)));
    c = [...c];
    const v = d.current.map(fr), k = u.map(fr), y = v.length;
    for (let h = 0; h < y; h++) {
      const m = v[h];
      k.indexOf(m) === -1 && !f.has(m) && f.set(m, void 0);
    }
    return s === "wait" && f.size && (c = []), f.forEach((h, m) => {
      if (k.indexOf(m) !== -1)
        return;
      const S = p.get(m);
      if (!S)
        return;
      const C = v.indexOf(m);
      let P = h;
      if (!P) {
        const T = () => {
          p.delete(m), f.delete(m);
          const _ = d.current.findIndex((L) => L.key === m);
          if (d.current.splice(_, 1), !f.size) {
            if (d.current = u, l.current === !1)
              return;
            a(), r && r();
          }
        };
        P = x.createElement(yl, { key: fr(S), isPresent: !1, onExitComplete: T, custom: t, presenceAffectsLayout: o, mode: s }, S), f.set(m, P);
      }
      c.splice(C, 0, P);
    }), c = c.map((h) => {
      const m = h.key;
      return f.has(m) ? h : x.createElement(yl, { key: fr(h), isPresent: !0, presenceAffectsLayout: o, mode: s }, h);
    }), x.createElement(x.Fragment, null, f.size ? c : c.map((h) => x.cloneElement(h)));
  };
  function QA({
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
    return console.log("rendering ", e.id), /* @__PURE__ */ I.jsxs("div", { id: "default", className: "prose max-w-none", children: [
      /* @__PURE__ */ I.jsx("h2", { className: "text-white", children: r(e.id) }),
      /* @__PURE__ */ I.jsx("p", { children: e.helpText }),
      /* @__PURE__ */ I.jsx("div", { className: "flex flex-row gap-6 flex-wrap", children: Object.keys(t || {}).map((a) => {
        var l, u;
        return /* @__PURE__ */ I.jsxs("div", { className: "grow shrink-0 basis-72", children: [
          /* @__PURE__ */ I.jsx("label", { htmlFor: a, className: "block mb-2 text-sm font-medium text-white", children: r(a) }),
          /* @__PURE__ */ I.jsx(
            Qc,
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
          /* @__PURE__ */ I.jsx(Yc, { name: a, children: (c) => /* @__PURE__ */ I.jsx("div", { className: "text-red-400", children: c }) })
        ] }, a);
      }) })
    ] });
  }
  function YA() {
    const { isAnimated: e } = x.useContext(Gv), { activeStep: t } = Xc(), { initialValues: n, values: r } = ha();
    let i = {};
    return e && (i = {
      initial: { opacity: 0 },
      animate: { opacity: 1 },
      exit: { opacity: 0 }
    }), /* @__PURE__ */ I.jsx(KA, { initial: !1, mode: "wait", children: /* @__PURE__ */ I.jsx(
      IA.div,
      {
        variants: i,
        initial: "initial",
        animate: "animate",
        exit: "exit",
        transition: { type: "tween", duration: 0.25 },
        children: /* @__PURE__ */ I.jsx("div", { className: "py-4 sm:pt-12 lg:pt-20 pb-20 sm:pb-32", children: /* @__PURE__ */ I.jsx("div", { className: "container mx-auto sm:px-0 px-5 max-w-lg min-w-min md:max-w-2xl lg:max-w-4xl", children: t.component || /* @__PURE__ */ I.jsx(
          QA,
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
  const Gv = x.createContext();
  function XA() {
    return /* @__PURE__ */ I.jsxs("div", { children: [
      /* @__PURE__ */ I.jsxs("div", { children: [
        /* @__PURE__ */ I.jsx("label", { htmlFor: "name", children: "Name" }),
        /* @__PURE__ */ I.jsx(Qc, { id: "name", name: "name", type: "text" }),
        /* @__PURE__ */ I.jsx(Yc, { name: "name" })
      ] }),
      /* @__PURE__ */ I.jsx("button", { type: "submit", children: "Next" })
    ] });
  }
  function ZA() {
    const { goToPreviousStep: e } = Xc();
    return /* @__PURE__ */ I.jsxs("div", { children: [
      /* @__PURE__ */ I.jsxs("div", { children: [
        /* @__PURE__ */ I.jsx("label", { htmlFor: "age", children: "Age" }),
        /* @__PURE__ */ I.jsx(Qc, { id: "age", name: "age", type: "number", min: "0" }),
        /* @__PURE__ */ I.jsx(Yc, { name: "age" })
      ] }),
      /* @__PURE__ */ I.jsx("button", { type: "button", onClick: e, children: "Previous" }),
      /* @__PURE__ */ I.jsx("button", { type: "submit", children: "Next" })
    ] });
  }
  function qA() {
    const { values: e, goToPreviousStep: t } = Xc();
    return /* @__PURE__ */ I.jsxs("div", { children: [
      /* @__PURE__ */ I.jsxs("p", { children: [
        "Your name is ",
        e.StepName.name,
        " and your age is ",
        e.StepAge.age
      ] }),
      /* @__PURE__ */ I.jsx("button", { type: "button", onClick: t, children: "Previous" })
    ] });
  }
  function JA() {
    const [e, t] = x.useState(!0), n = [
      {
        id: "StepName",
        component: /* @__PURE__ */ I.jsx(XA, {}),
        initialValues: { name: "" },
        validationSchema: Es({ name: Ti().required("Name is required") })
      },
      {
        id: "StepAge",
        component: /* @__PURE__ */ I.jsx(ZA, {}),
        initialValues: { age: "" },
        validationSchema: Es({ age: Mc().positive().required("Age is required") })
      },
      {
        id: "StepFinal",
        component: /* @__PURE__ */ I.jsx(qA, {})
      }
    ];
    return /* @__PURE__ */ I.jsx(Gv.Provider, { value: { isAnimated: e, setIsAnimated: t }, children: /* @__PURE__ */ I.jsx(
      DP,
      {
        steps: n,
        onStepChanged: (r, i) => {
          console.log("step changed", r, i);
        },
        wrapper: /* @__PURE__ */ I.jsx(YA, {})
      }
    ) });
  }
  gl.createRoot(document.getElementById("root")).render(
    /* @__PURE__ */ I.jsx(JA, {})
  );
});
export default eF();
