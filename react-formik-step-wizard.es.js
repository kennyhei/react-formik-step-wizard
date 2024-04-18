var F0 = (e, t) => () => (t || e((t = { exports: {} }).exports, t), t.exports);
var IO = F0((Ge, Ye) => {
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
  var Ft = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
  function Ns(e) {
    return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
  }
  var zp = { exports: {} }, bs = {}, Up = { exports: {} }, U = {};
  /**
   * @license React
   * react.production.min.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */
  var qi = Symbol.for("react.element"), R0 = Symbol.for("react.portal"), D0 = Symbol.for("react.fragment"), M0 = Symbol.for("react.strict_mode"), N0 = Symbol.for("react.profiler"), b0 = Symbol.for("react.provider"), L0 = Symbol.for("react.context"), V0 = Symbol.for("react.forward_ref"), $0 = Symbol.for("react.suspense"), I0 = Symbol.for("react.memo"), z0 = Symbol.for("react.lazy"), Nf = Symbol.iterator;
  function U0(e) {
    return e === null || typeof e != "object" ? null : (e = Nf && e[Nf] || e["@@iterator"], typeof e == "function" ? e : null);
  }
  var Bp = { isMounted: function() {
    return !1;
  }, enqueueForceUpdate: function() {
  }, enqueueReplaceState: function() {
  }, enqueueSetState: function() {
  } }, Hp = Object.assign, Wp = {};
  function Gr(e, t, n) {
    this.props = e, this.context = t, this.refs = Wp, this.updater = n || Bp;
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
  function Kp() {
  }
  Kp.prototype = Gr.prototype;
  function Vu(e, t, n) {
    this.props = e, this.context = t, this.refs = Wp, this.updater = n || Bp;
  }
  var $u = Vu.prototype = new Kp();
  $u.constructor = Vu;
  Hp($u, Gr.prototype);
  $u.isPureReactComponent = !0;
  var bf = Array.isArray, Gp = Object.prototype.hasOwnProperty, Iu = { current: null }, Yp = { key: !0, ref: !0, __self: !0, __source: !0 };
  function Qp(e, t, n) {
    var r, i = {}, o = null, s = null;
    if (t != null)
      for (r in t.ref !== void 0 && (s = t.ref), t.key !== void 0 && (o = "" + t.key), t)
        Gp.call(t, r) && !Yp.hasOwnProperty(r) && (i[r] = t[r]);
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
    return { $$typeof: qi, type: e, key: o, ref: s, props: i, _owner: Iu.current };
  }
  function B0(e, t) {
    return { $$typeof: qi, type: e.type, key: t, ref: e.ref, props: e.props, _owner: e._owner };
  }
  function zu(e) {
    return typeof e == "object" && e !== null && e.$$typeof === qi;
  }
  function H0(e) {
    var t = { "=": "=0", ":": "=2" };
    return "$" + e.replace(/[=:]/g, function(n) {
      return t[n];
    });
  }
  var Lf = /\/+/g;
  function _a(e, t) {
    return typeof e == "object" && e !== null && e.key != null ? H0("" + e.key) : t.toString(36);
  }
  function No(e, t, n, r, i) {
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
            case R0:
              s = !0;
          }
      }
    if (s)
      return s = e, i = i(s), e = r === "" ? "." + _a(s, 0) : r, bf(i) ? (n = "", e != null && (n = e.replace(Lf, "$&/") + "/"), No(i, t, n, "", function(u) {
        return u;
      })) : i != null && (zu(i) && (i = B0(i, n + (!i.key || s && s.key === i.key ? "" : ("" + i.key).replace(Lf, "$&/") + "/") + e)), t.push(i)), 1;
    if (s = 0, r = r === "" ? "." : r + ":", bf(e))
      for (var a = 0; a < e.length; a++) {
        o = e[a];
        var l = r + _a(o, a);
        s += No(o, t, n, l, i);
      }
    else if (l = U0(e), typeof l == "function")
      for (e = l.call(e), a = 0; !(o = e.next()).done; )
        o = o.value, l = r + _a(o, a++), s += No(o, t, n, l, i);
    else if (o === "object")
      throw t = String(e), Error("Objects are not valid as a React child (found: " + (t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t) + "). If you meant to render a collection of children, use an array instead.");
    return s;
  }
  function ho(e, t, n) {
    if (e == null)
      return e;
    var r = [], i = 0;
    return No(e, r, "", "", function(o) {
      return t.call(n, o, i++);
    }), r;
  }
  function W0(e) {
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
  var be = { current: null }, bo = { transition: null }, K0 = { ReactCurrentDispatcher: be, ReactCurrentBatchConfig: bo, ReactCurrentOwner: Iu };
  U.Children = { map: ho, forEach: function(e, t, n) {
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
    if (!zu(e))
      throw Error("React.Children.only expected to receive a single React element child.");
    return e;
  } };
  U.Component = Gr;
  U.Fragment = D0;
  U.Profiler = N0;
  U.PureComponent = Vu;
  U.StrictMode = M0;
  U.Suspense = $0;
  U.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = K0;
  U.cloneElement = function(e, t, n) {
    if (e == null)
      throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + e + ".");
    var r = Hp({}, e.props), i = e.key, o = e.ref, s = e._owner;
    if (t != null) {
      if (t.ref !== void 0 && (o = t.ref, s = Iu.current), t.key !== void 0 && (i = "" + t.key), e.type && e.type.defaultProps)
        var a = e.type.defaultProps;
      for (l in t)
        Gp.call(t, l) && !Yp.hasOwnProperty(l) && (r[l] = t[l] === void 0 && a !== void 0 ? a[l] : t[l]);
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
  U.createContext = function(e) {
    return e = { $$typeof: L0, _currentValue: e, _currentValue2: e, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, e.Provider = { $$typeof: b0, _context: e }, e.Consumer = e;
  };
  U.createElement = Qp;
  U.createFactory = function(e) {
    var t = Qp.bind(null, e);
    return t.type = e, t;
  };
  U.createRef = function() {
    return { current: null };
  };
  U.forwardRef = function(e) {
    return { $$typeof: V0, render: e };
  };
  U.isValidElement = zu;
  U.lazy = function(e) {
    return { $$typeof: z0, _payload: { _status: -1, _result: e }, _init: W0 };
  };
  U.memo = function(e, t) {
    return { $$typeof: I0, type: e, compare: t === void 0 ? null : t };
  };
  U.startTransition = function(e) {
    var t = bo.transition;
    bo.transition = {};
    try {
      e();
    } finally {
      bo.transition = t;
    }
  };
  U.unstable_act = function() {
    throw Error("act(...) is not supported in production builds of React.");
  };
  U.useCallback = function(e, t) {
    return be.current.useCallback(e, t);
  };
  U.useContext = function(e) {
    return be.current.useContext(e);
  };
  U.useDebugValue = function() {
  };
  U.useDeferredValue = function(e) {
    return be.current.useDeferredValue(e);
  };
  U.useEffect = function(e, t) {
    return be.current.useEffect(e, t);
  };
  U.useId = function() {
    return be.current.useId();
  };
  U.useImperativeHandle = function(e, t, n) {
    return be.current.useImperativeHandle(e, t, n);
  };
  U.useInsertionEffect = function(e, t) {
    return be.current.useInsertionEffect(e, t);
  };
  U.useLayoutEffect = function(e, t) {
    return be.current.useLayoutEffect(e, t);
  };
  U.useMemo = function(e, t) {
    return be.current.useMemo(e, t);
  };
  U.useReducer = function(e, t, n) {
    return be.current.useReducer(e, t, n);
  };
  U.useRef = function(e) {
    return be.current.useRef(e);
  };
  U.useState = function(e) {
    return be.current.useState(e);
  };
  U.useSyncExternalStore = function(e, t, n) {
    return be.current.useSyncExternalStore(e, t, n);
  };
  U.useTransition = function() {
    return be.current.useTransition();
  };
  U.version = "18.2.0";
  Up.exports = U;
  var x = Up.exports;
  const Wn = /* @__PURE__ */ Ns(x);
  /**
   * @license React
   * react-jsx-runtime.production.min.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */
  var G0 = x, Y0 = Symbol.for("react.element"), Q0 = Symbol.for("react.fragment"), X0 = Object.prototype.hasOwnProperty, Z0 = G0.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, q0 = { key: !0, ref: !0, __self: !0, __source: !0 };
  function Xp(e, t, n) {
    var r, i = {}, o = null, s = null;
    n !== void 0 && (o = "" + n), t.key !== void 0 && (o = "" + t.key), t.ref !== void 0 && (s = t.ref);
    for (r in t)
      X0.call(t, r) && !q0.hasOwnProperty(r) && (i[r] = t[r]);
    if (e && e.defaultProps)
      for (r in t = e.defaultProps, t)
        i[r] === void 0 && (i[r] = t[r]);
    return { $$typeof: Y0, type: e, key: o, ref: s, props: i, _owner: Z0.current };
  }
  bs.Fragment = Q0;
  bs.jsx = Xp;
  bs.jsxs = Xp;
  zp.exports = bs;
  var O = zp.exports, xl = {}, Zp = { exports: {} }, qe = {}, qp = { exports: {} }, Jp = {};
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
    function t(E, j) {
      var D = E.length;
      E.push(j);
      e:
        for (; 0 < D; ) {
          var I = D - 1 >>> 1, H = E[I];
          if (0 < i(H, j))
            E[I] = j, E[D] = H, D = I;
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
      var j = E[0], D = E.pop();
      if (D !== j) {
        E[0] = D;
        e:
          for (var I = 0, H = E.length, tt = H >>> 1; I < tt; ) {
            var nt = 2 * (I + 1) - 1, wt = E[nt], Tt = nt + 1, Zt = E[Tt];
            if (0 > i(wt, D))
              Tt < H && 0 > i(Zt, wt) ? (E[I] = Zt, E[Tt] = D, I = Tt) : (E[I] = wt, E[nt] = D, I = nt);
            else if (Tt < H && 0 > i(Zt, D))
              E[I] = Zt, E[Tt] = D, I = Tt;
            else
              break e;
          }
      }
      return j;
    }
    function i(E, j) {
      var D = E.sortIndex - j.sortIndex;
      return D !== 0 ? D : E.id - j.id;
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
    var l = [], u = [], c = 1, f = null, d = 3, y = !1, g = !1, v = !1, T = typeof setTimeout == "function" ? setTimeout : null, p = typeof clearTimeout == "function" ? clearTimeout : null, h = typeof setImmediate < "u" ? setImmediate : null;
    typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
    function m(E) {
      for (var j = n(u); j !== null; ) {
        if (j.callback === null)
          r(u);
        else if (j.startTime <= E)
          r(u), j.sortIndex = j.expirationTime, t(l, j);
        else
          break;
        j = n(u);
      }
    }
    function S(E) {
      if (v = !1, m(E), !g)
        if (n(l) !== null)
          g = !0, me(C);
        else {
          var j = n(u);
          j !== null && dt(S, j.startTime - E);
        }
    }
    function C(E, j) {
      g = !1, v && (v = !1, p(_), _ = -1), y = !0;
      var D = d;
      try {
        for (m(j), f = n(l); f !== null && (!(f.expirationTime > j) || E && !$()); ) {
          var I = f.callback;
          if (typeof I == "function") {
            f.callback = null, d = f.priorityLevel;
            var H = I(f.expirationTime <= j);
            j = e.unstable_now(), typeof H == "function" ? f.callback = H : f === n(l) && r(l), m(j);
          } else
            r(l);
          f = n(l);
        }
        if (f !== null)
          var tt = !0;
        else {
          var nt = n(u);
          nt !== null && dt(S, nt.startTime - j), tt = !1;
        }
        return tt;
      } finally {
        f = null, d = D, y = !1;
      }
    }
    var P = !1, k = null, _ = -1, b = 5, M = -1;
    function $() {
      return !(e.unstable_now() - M < b);
    }
    function fe() {
      if (k !== null) {
        var E = e.unstable_now();
        M = E;
        var j = !0;
        try {
          j = k(!0, E);
        } finally {
          j ? ee() : (P = !1, k = null);
        }
      } else
        P = !1;
    }
    var ee;
    if (typeof h == "function")
      ee = function() {
        h(fe);
      };
    else if (typeof MessageChannel < "u") {
      var ke = new MessageChannel(), ae = ke.port2;
      ke.port1.onmessage = fe, ee = function() {
        ae.postMessage(null);
      };
    } else
      ee = function() {
        T(fe, 0);
      };
    function me(E) {
      k = E, P || (P = !0, ee());
    }
    function dt(E, j) {
      _ = T(function() {
        E(e.unstable_now());
      }, j);
    }
    e.unstable_IdlePriority = 5, e.unstable_ImmediatePriority = 1, e.unstable_LowPriority = 4, e.unstable_NormalPriority = 3, e.unstable_Profiling = null, e.unstable_UserBlockingPriority = 2, e.unstable_cancelCallback = function(E) {
      E.callback = null;
    }, e.unstable_continueExecution = function() {
      g || y || (g = !0, me(C));
    }, e.unstable_forceFrameRate = function(E) {
      0 > E || 125 < E ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : b = 0 < E ? Math.floor(1e3 / E) : 5;
    }, e.unstable_getCurrentPriorityLevel = function() {
      return d;
    }, e.unstable_getFirstCallbackNode = function() {
      return n(l);
    }, e.unstable_next = function(E) {
      switch (d) {
        case 1:
        case 2:
        case 3:
          var j = 3;
          break;
        default:
          j = d;
      }
      var D = d;
      d = j;
      try {
        return E();
      } finally {
        d = D;
      }
    }, e.unstable_pauseExecution = function() {
    }, e.unstable_requestPaint = function() {
    }, e.unstable_runWithPriority = function(E, j) {
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
        return j();
      } finally {
        d = D;
      }
    }, e.unstable_scheduleCallback = function(E, j, D) {
      var I = e.unstable_now();
      switch (typeof D == "object" && D !== null ? (D = D.delay, D = typeof D == "number" && 0 < D ? I + D : I) : D = I, E) {
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
      return H = D + H, E = { id: c++, callback: j, priorityLevel: E, startTime: D, expirationTime: H, sortIndex: -1 }, D > I ? (E.sortIndex = D, t(u, E), n(l) === null && E === n(u) && (v ? (p(_), _ = -1) : v = !0, dt(S, D - I))) : (E.sortIndex = H, t(l, E), g || y || (g = !0, me(C))), E;
    }, e.unstable_shouldYield = $, e.unstable_wrapCallback = function(E) {
      var j = d;
      return function() {
        var D = d;
        d = j;
        try {
          return E.apply(this, arguments);
        } finally {
          d = D;
        }
      };
    };
  })(Jp);
  qp.exports = Jp;
  var J0 = qp.exports;
  /**
   * @license React
   * react-dom.production.min.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */
  var em = x, Xe = J0;
  function A(e) {
    for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++)
      t += "&args[]=" + encodeURIComponent(arguments[n]);
    return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  var tm = /* @__PURE__ */ new Set(), Ai = {};
  function rr(e, t) {
    Lr(e, t), Lr(e + "Capture", t);
  }
  function Lr(e, t) {
    for (Ai[e] = t, e = 0; e < t.length; e++)
      tm.add(t[e]);
  }
  var Wt = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), wl = Object.prototype.hasOwnProperty, e1 = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, Vf = {}, $f = {};
  function t1(e) {
    return wl.call($f, e) ? !0 : wl.call(Vf, e) ? !1 : e1.test(e) ? $f[e] = !0 : (Vf[e] = !0, !1);
  }
  function n1(e, t, n, r) {
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
  function r1(e, t, n, r) {
    if (t === null || typeof t > "u" || n1(e, t, n, r))
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
  function Le(e, t, n, r, i, o, s) {
    this.acceptsBooleans = t === 2 || t === 3 || t === 4, this.attributeName = r, this.attributeNamespace = i, this.mustUseProperty = n, this.propertyName = e, this.type = t, this.sanitizeURL = o, this.removeEmptyString = s;
  }
  var Ce = {};
  "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e) {
    Ce[e] = new Le(e, 0, !1, e, null, !1, !1);
  });
  [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(e) {
    var t = e[0];
    Ce[t] = new Le(t, 1, !1, e[1], null, !1, !1);
  });
  ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
    Ce[e] = new Le(e, 2, !1, e.toLowerCase(), null, !1, !1);
  });
  ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) {
    Ce[e] = new Le(e, 2, !1, e, null, !1, !1);
  });
  "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e) {
    Ce[e] = new Le(e, 3, !1, e.toLowerCase(), null, !1, !1);
  });
  ["checked", "multiple", "muted", "selected"].forEach(function(e) {
    Ce[e] = new Le(e, 3, !0, e, null, !1, !1);
  });
  ["capture", "download"].forEach(function(e) {
    Ce[e] = new Le(e, 4, !1, e, null, !1, !1);
  });
  ["cols", "rows", "size", "span"].forEach(function(e) {
    Ce[e] = new Le(e, 6, !1, e, null, !1, !1);
  });
  ["rowSpan", "start"].forEach(function(e) {
    Ce[e] = new Le(e, 5, !1, e.toLowerCase(), null, !1, !1);
  });
  var Uu = /[\-:]([a-z])/g;
  function Bu(e) {
    return e[1].toUpperCase();
  }
  "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e) {
    var t = e.replace(
      Uu,
      Bu
    );
    Ce[t] = new Le(t, 1, !1, e, null, !1, !1);
  });
  "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e) {
    var t = e.replace(Uu, Bu);
    Ce[t] = new Le(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
  });
  ["xml:base", "xml:lang", "xml:space"].forEach(function(e) {
    var t = e.replace(Uu, Bu);
    Ce[t] = new Le(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
  });
  ["tabIndex", "crossOrigin"].forEach(function(e) {
    Ce[e] = new Le(e, 1, !1, e.toLowerCase(), null, !1, !1);
  });
  Ce.xlinkHref = new Le("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1);
  ["src", "href", "action", "formAction"].forEach(function(e) {
    Ce[e] = new Le(e, 1, !1, e.toLowerCase(), null, !0, !0);
  });
  function Hu(e, t, n, r) {
    var i = Ce.hasOwnProperty(t) ? Ce[t] : null;
    (i !== null ? i.type !== 0 : r || !(2 < t.length) || t[0] !== "o" && t[0] !== "O" || t[1] !== "n" && t[1] !== "N") && (r1(t, n, i, r) && (n = null), r || i === null ? t1(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n)) : i.mustUseProperty ? e[i.propertyName] = n === null ? i.type === 3 ? !1 : "" : n : (t = i.attributeName, r = i.attributeNamespace, n === null ? e.removeAttribute(t) : (i = i.type, n = i === 3 || i === 4 && n === !0 ? "" : "" + n, r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
  }
  var Qt = em.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, po = Symbol.for("react.element"), pr = Symbol.for("react.portal"), mr = Symbol.for("react.fragment"), Wu = Symbol.for("react.strict_mode"), Tl = Symbol.for("react.profiler"), nm = Symbol.for("react.provider"), rm = Symbol.for("react.context"), Ku = Symbol.for("react.forward_ref"), El = Symbol.for("react.suspense"), Pl = Symbol.for("react.suspense_list"), Gu = Symbol.for("react.memo"), tn = Symbol.for("react.lazy"), im = Symbol.for("react.offscreen"), If = Symbol.iterator;
  function qr(e) {
    return e === null || typeof e != "object" ? null : (e = If && e[If] || e["@@iterator"], typeof e == "function" ? e : null);
  }
  var se = Object.assign, Aa;
  function li(e) {
    if (Aa === void 0)
      try {
        throw Error();
      } catch (n) {
        var t = n.stack.trim().match(/\n( *(at )?)/);
        Aa = t && t[1] || "";
      }
    return `
` + Aa + e;
  }
  var Oa = !1;
  function ja(e, t) {
    if (!e || Oa)
      return "";
    Oa = !0;
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
      Oa = !1, Error.prepareStackTrace = n;
    }
    return (e = e ? e.displayName || e.name : "") ? li(e) : "";
  }
  function i1(e) {
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
        return e = ja(e.type, !1), e;
      case 11:
        return e = ja(e.type.render, !1), e;
      case 1:
        return e = ja(e.type, !0), e;
      default:
        return "";
    }
  }
  function Cl(e) {
    if (e == null)
      return null;
    if (typeof e == "function")
      return e.displayName || e.name || null;
    if (typeof e == "string")
      return e;
    switch (e) {
      case mr:
        return "Fragment";
      case pr:
        return "Portal";
      case Tl:
        return "Profiler";
      case Wu:
        return "StrictMode";
      case El:
        return "Suspense";
      case Pl:
        return "SuspenseList";
    }
    if (typeof e == "object")
      switch (e.$$typeof) {
        case rm:
          return (e.displayName || "Context") + ".Consumer";
        case nm:
          return (e._context.displayName || "Context") + ".Provider";
        case Ku:
          var t = e.render;
          return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
        case Gu:
          return t = e.displayName || null, t !== null ? t : Cl(e.type) || "Memo";
        case tn:
          t = e._payload, e = e._init;
          try {
            return Cl(e(t));
          } catch {
          }
      }
    return null;
  }
  function o1(e) {
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
        return Cl(t);
      case 8:
        return t === Wu ? "StrictMode" : "Mode";
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
  function Tn(e) {
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
  function om(e) {
    var t = e.type;
    return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
  }
  function s1(e) {
    var t = om(e) ? "checked" : "value", n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t), r = "" + e[t];
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
    e._valueTracker || (e._valueTracker = s1(e));
  }
  function sm(e) {
    if (!e)
      return !1;
    var t = e._valueTracker;
    if (!t)
      return !0;
    var n = t.getValue(), r = "";
    return e && (r = om(e) ? e.checked ? "true" : "false" : e.value), e = r, e !== n ? (t.setValue(e), !0) : !1;
  }
  function qo(e) {
    if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u")
      return null;
    try {
      return e.activeElement || e.body;
    } catch {
      return e.body;
    }
  }
  function kl(e, t) {
    var n = t.checked;
    return se({}, t, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: n ?? e._wrapperState.initialChecked });
  }
  function zf(e, t) {
    var n = t.defaultValue == null ? "" : t.defaultValue, r = t.checked != null ? t.checked : t.defaultChecked;
    n = Tn(t.value != null ? t.value : n), e._wrapperState = { initialChecked: r, initialValue: n, controlled: t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null };
  }
  function am(e, t) {
    t = t.checked, t != null && Hu(e, "checked", t, !1);
  }
  function _l(e, t) {
    am(e, t);
    var n = Tn(t.value), r = t.type;
    if (n != null)
      r === "number" ? (n === 0 && e.value === "" || e.value != n) && (e.value = "" + n) : e.value !== "" + n && (e.value = "" + n);
    else if (r === "submit" || r === "reset") {
      e.removeAttribute("value");
      return;
    }
    t.hasOwnProperty("value") ? Al(e, t.type, n) : t.hasOwnProperty("defaultValue") && Al(e, t.type, Tn(t.defaultValue)), t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked);
  }
  function Uf(e, t, n) {
    if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
      var r = t.type;
      if (!(r !== "submit" && r !== "reset" || t.value !== void 0 && t.value !== null))
        return;
      t = "" + e._wrapperState.initialValue, n || t === e.value || (e.value = t), e.defaultValue = t;
    }
    n = e.name, n !== "" && (e.name = ""), e.defaultChecked = !!e._wrapperState.initialChecked, n !== "" && (e.name = n);
  }
  function Al(e, t, n) {
    (t !== "number" || qo(e.ownerDocument) !== e) && (n == null ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
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
      for (n = "" + Tn(n), t = null, i = 0; i < e.length; i++) {
        if (e[i].value === n) {
          e[i].selected = !0, r && (e[i].defaultSelected = !0);
          return;
        }
        t !== null || e[i].disabled || (t = e[i]);
      }
      t !== null && (t.selected = !0);
    }
  }
  function Ol(e, t) {
    if (t.dangerouslySetInnerHTML != null)
      throw Error(A(91));
    return se({}, t, { value: void 0, defaultValue: void 0, children: "" + e._wrapperState.initialValue });
  }
  function Bf(e, t) {
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
    e._wrapperState = { initialValue: Tn(n) };
  }
  function lm(e, t) {
    var n = Tn(t.value), r = Tn(t.defaultValue);
    n != null && (n = "" + n, n !== e.value && (e.value = n), t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)), r != null && (e.defaultValue = "" + r);
  }
  function Hf(e) {
    var t = e.textContent;
    t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
  }
  function um(e) {
    switch (e) {
      case "svg":
        return "http://www.w3.org/2000/svg";
      case "math":
        return "http://www.w3.org/1998/Math/MathML";
      default:
        return "http://www.w3.org/1999/xhtml";
    }
  }
  function jl(e, t) {
    return e == null || e === "http://www.w3.org/1999/xhtml" ? um(t) : e === "http://www.w3.org/2000/svg" && t === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e;
  }
  var yo, cm = function(e) {
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
  }, a1 = ["Webkit", "ms", "Moz", "O"];
  Object.keys(hi).forEach(function(e) {
    a1.forEach(function(t) {
      t = t + e.charAt(0).toUpperCase() + e.substring(1), hi[t] = hi[e];
    });
  });
  function fm(e, t, n) {
    return t == null || typeof t == "boolean" || t === "" ? "" : n || typeof t != "number" || t === 0 || hi.hasOwnProperty(e) && hi[e] ? ("" + t).trim() : t + "px";
  }
  function dm(e, t) {
    e = e.style;
    for (var n in t)
      if (t.hasOwnProperty(n)) {
        var r = n.indexOf("--") === 0, i = fm(n, t[n], r);
        n === "float" && (n = "cssFloat"), r ? e.setProperty(n, i) : e[n] = i;
      }
  }
  var l1 = se({ menuitem: !0 }, { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 });
  function Fl(e, t) {
    if (t) {
      if (l1[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
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
  var Dl = null;
  function Yu(e) {
    return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
  }
  var Ml = null, Rr = null, Dr = null;
  function Wf(e) {
    if (e = to(e)) {
      if (typeof Ml != "function")
        throw Error(A(280));
      var t = e.stateNode;
      t && (t = zs(t), Ml(e.stateNode, e.type, t));
    }
  }
  function hm(e) {
    Rr ? Dr ? Dr.push(e) : Dr = [e] : Rr = e;
  }
  function pm() {
    if (Rr) {
      var e = Rr, t = Dr;
      if (Dr = Rr = null, Wf(e), t)
        for (e = 0; e < t.length; e++)
          Wf(t[e]);
    }
  }
  function mm(e, t) {
    return e(t);
  }
  function ym() {
  }
  var Fa = !1;
  function gm(e, t, n) {
    if (Fa)
      return e(t, n);
    Fa = !0;
    try {
      return mm(e, t, n);
    } finally {
      Fa = !1, (Rr !== null || Dr !== null) && (ym(), pm());
    }
  }
  function ji(e, t) {
    var n = e.stateNode;
    if (n === null)
      return null;
    var r = zs(n);
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
  if (Wt)
    try {
      var Jr = {};
      Object.defineProperty(Jr, "passive", { get: function() {
        Nl = !0;
      } }), window.addEventListener("test", Jr, Jr), window.removeEventListener("test", Jr, Jr);
    } catch {
      Nl = !1;
    }
  function u1(e, t, n, r, i, o, s, a, l) {
    var u = Array.prototype.slice.call(arguments, 3);
    try {
      t.apply(n, u);
    } catch (c) {
      this.onError(c);
    }
  }
  var pi = !1, Jo = null, es = !1, bl = null, c1 = { onError: function(e) {
    pi = !0, Jo = e;
  } };
  function f1(e, t, n, r, i, o, s, a, l) {
    pi = !1, Jo = null, u1.apply(c1, arguments);
  }
  function d1(e, t, n, r, i, o, s, a, l) {
    if (f1.apply(this, arguments), pi) {
      if (pi) {
        var u = Jo;
        pi = !1, Jo = null;
      } else
        throw Error(A(198));
      es || (es = !0, bl = u);
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
  function vm(e) {
    if (e.tag === 13) {
      var t = e.memoizedState;
      if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null)
        return t.dehydrated;
    }
    return null;
  }
  function Kf(e) {
    if (ir(e) !== e)
      throw Error(A(188));
  }
  function h1(e) {
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
            return Kf(i), e;
          if (o === r)
            return Kf(i), t;
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
  function Sm(e) {
    return e = h1(e), e !== null ? xm(e) : null;
  }
  function xm(e) {
    if (e.tag === 5 || e.tag === 6)
      return e;
    for (e = e.child; e !== null; ) {
      var t = xm(e);
      if (t !== null)
        return t;
      e = e.sibling;
    }
    return null;
  }
  var wm = Xe.unstable_scheduleCallback, Gf = Xe.unstable_cancelCallback, p1 = Xe.unstable_shouldYield, m1 = Xe.unstable_requestPaint, ce = Xe.unstable_now, y1 = Xe.unstable_getCurrentPriorityLevel, Qu = Xe.unstable_ImmediatePriority, Tm = Xe.unstable_UserBlockingPriority, ts = Xe.unstable_NormalPriority, g1 = Xe.unstable_LowPriority, Em = Xe.unstable_IdlePriority, Ls = null, _t = null;
  function v1(e) {
    if (_t && typeof _t.onCommitFiberRoot == "function")
      try {
        _t.onCommitFiberRoot(Ls, e, void 0, (e.current.flags & 128) === 128);
      } catch {
      }
  }
  var gt = Math.clz32 ? Math.clz32 : w1, S1 = Math.log, x1 = Math.LN2;
  function w1(e) {
    return e >>>= 0, e === 0 ? 32 : 31 - (S1(e) / x1 | 0) | 0;
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
  function ns(e, t) {
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
        n = 31 - gt(t), i = 1 << n, r |= e[n], t &= ~i;
    return r;
  }
  function T1(e, t) {
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
  function E1(e, t) {
    for (var n = e.suspendedLanes, r = e.pingedLanes, i = e.expirationTimes, o = e.pendingLanes; 0 < o; ) {
      var s = 31 - gt(o), a = 1 << s, l = i[s];
      l === -1 ? (!(a & n) || a & r) && (i[s] = T1(a, t)) : l <= t && (e.expiredLanes |= a), o &= ~a;
    }
  }
  function Ll(e) {
    return e = e.pendingLanes & -1073741825, e !== 0 ? e : e & 1073741824 ? 1073741824 : 0;
  }
  function Pm() {
    var e = go;
    return go <<= 1, !(go & 4194240) && (go = 64), e;
  }
  function Ra(e) {
    for (var t = [], n = 0; 31 > n; n++)
      t.push(e);
    return t;
  }
  function Ji(e, t, n) {
    e.pendingLanes |= t, t !== 536870912 && (e.suspendedLanes = 0, e.pingedLanes = 0), e = e.eventTimes, t = 31 - gt(t), e[t] = n;
  }
  function P1(e, t) {
    var n = e.pendingLanes & ~t;
    e.pendingLanes = t, e.suspendedLanes = 0, e.pingedLanes = 0, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t, t = e.entanglements;
    var r = e.eventTimes;
    for (e = e.expirationTimes; 0 < n; ) {
      var i = 31 - gt(n), o = 1 << i;
      t[i] = 0, r[i] = -1, e[i] = -1, n &= ~o;
    }
  }
  function Xu(e, t) {
    var n = e.entangledLanes |= t;
    for (e = e.entanglements; n; ) {
      var r = 31 - gt(n), i = 1 << r;
      i & t | e[r] & t && (e[r] |= t), n &= ~i;
    }
  }
  var G = 0;
  function Cm(e) {
    return e &= -e, 1 < e ? 4 < e ? e & 268435455 ? 16 : 536870912 : 4 : 1;
  }
  var km, Zu, _m, Am, Om, Vl = !1, So = [], fn = null, dn = null, hn = null, Fi = /* @__PURE__ */ new Map(), Ri = /* @__PURE__ */ new Map(), sn = [], C1 = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
  function Yf(e, t) {
    switch (e) {
      case "focusin":
      case "focusout":
        fn = null;
        break;
      case "dragenter":
      case "dragleave":
        dn = null;
        break;
      case "mouseover":
      case "mouseout":
        hn = null;
        break;
      case "pointerover":
      case "pointerout":
        Fi.delete(t.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        Ri.delete(t.pointerId);
    }
  }
  function ei(e, t, n, r, i, o) {
    return e === null || e.nativeEvent !== o ? (e = { blockedOn: t, domEventName: n, eventSystemFlags: r, nativeEvent: o, targetContainers: [i] }, t !== null && (t = to(t), t !== null && Zu(t)), e) : (e.eventSystemFlags |= r, t = e.targetContainers, i !== null && t.indexOf(i) === -1 && t.push(i), e);
  }
  function k1(e, t, n, r, i) {
    switch (t) {
      case "focusin":
        return fn = ei(fn, e, t, n, r, i), !0;
      case "dragenter":
        return dn = ei(dn, e, t, n, r, i), !0;
      case "mouseover":
        return hn = ei(hn, e, t, n, r, i), !0;
      case "pointerover":
        var o = i.pointerId;
        return Fi.set(o, ei(Fi.get(o) || null, e, t, n, r, i)), !0;
      case "gotpointercapture":
        return o = i.pointerId, Ri.set(o, ei(Ri.get(o) || null, e, t, n, r, i)), !0;
    }
    return !1;
  }
  function jm(e) {
    var t = zn(e.target);
    if (t !== null) {
      var n = ir(t);
      if (n !== null) {
        if (t = n.tag, t === 13) {
          if (t = vm(n), t !== null) {
            e.blockedOn = t, Om(e.priority, function() {
              _m(n);
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
  function Lo(e) {
    if (e.blockedOn !== null)
      return !1;
    for (var t = e.targetContainers; 0 < t.length; ) {
      var n = $l(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
      if (n === null) {
        n = e.nativeEvent;
        var r = new n.constructor(n.type, n);
        Dl = r, n.target.dispatchEvent(r), Dl = null;
      } else
        return t = to(n), t !== null && Zu(t), e.blockedOn = n, !1;
      t.shift();
    }
    return !0;
  }
  function Qf(e, t, n) {
    Lo(e) && n.delete(t);
  }
  function _1() {
    Vl = !1, fn !== null && Lo(fn) && (fn = null), dn !== null && Lo(dn) && (dn = null), hn !== null && Lo(hn) && (hn = null), Fi.forEach(Qf), Ri.forEach(Qf);
  }
  function ti(e, t) {
    e.blockedOn === t && (e.blockedOn = null, Vl || (Vl = !0, Xe.unstable_scheduleCallback(Xe.unstable_NormalPriority, _1)));
  }
  function Di(e) {
    function t(i) {
      return ti(i, e);
    }
    if (0 < So.length) {
      ti(So[0], e);
      for (var n = 1; n < So.length; n++) {
        var r = So[n];
        r.blockedOn === e && (r.blockedOn = null);
      }
    }
    for (fn !== null && ti(fn, e), dn !== null && ti(dn, e), hn !== null && ti(hn, e), Fi.forEach(t), Ri.forEach(t), n = 0; n < sn.length; n++)
      r = sn[n], r.blockedOn === e && (r.blockedOn = null);
    for (; 0 < sn.length && (n = sn[0], n.blockedOn === null); )
      jm(n), n.blockedOn === null && sn.shift();
  }
  var Mr = Qt.ReactCurrentBatchConfig, rs = !0;
  function A1(e, t, n, r) {
    var i = G, o = Mr.transition;
    Mr.transition = null;
    try {
      G = 1, qu(e, t, n, r);
    } finally {
      G = i, Mr.transition = o;
    }
  }
  function O1(e, t, n, r) {
    var i = G, o = Mr.transition;
    Mr.transition = null;
    try {
      G = 4, qu(e, t, n, r);
    } finally {
      G = i, Mr.transition = o;
    }
  }
  function qu(e, t, n, r) {
    if (rs) {
      var i = $l(e, t, n, r);
      if (i === null)
        Ua(e, t, r, is, n), Yf(e, r);
      else if (k1(i, e, t, n, r))
        r.stopPropagation();
      else if (Yf(e, r), t & 4 && -1 < C1.indexOf(e)) {
        for (; i !== null; ) {
          var o = to(i);
          if (o !== null && km(o), o = $l(e, t, n, r), o === null && Ua(e, t, r, is, n), o === i)
            break;
          i = o;
        }
        i !== null && r.stopPropagation();
      } else
        Ua(e, t, r, null, n);
    }
  }
  var is = null;
  function $l(e, t, n, r) {
    if (is = null, e = Yu(r), e = zn(e), e !== null)
      if (t = ir(e), t === null)
        e = null;
      else if (n = t.tag, n === 13) {
        if (e = vm(t), e !== null)
          return e;
        e = null;
      } else if (n === 3) {
        if (t.stateNode.current.memoizedState.isDehydrated)
          return t.tag === 3 ? t.stateNode.containerInfo : null;
        e = null;
      } else
        t !== e && (e = null);
    return is = e, null;
  }
  function Fm(e) {
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
        switch (y1()) {
          case Qu:
            return 1;
          case Tm:
            return 4;
          case ts:
          case g1:
            return 16;
          case Em:
            return 536870912;
          default:
            return 16;
        }
      default:
        return 16;
    }
  }
  var ln = null, Ju = null, Vo = null;
  function Rm() {
    if (Vo)
      return Vo;
    var e, t = Ju, n = t.length, r, i = "value" in ln ? ln.value : ln.textContent, o = i.length;
    for (e = 0; e < n && t[e] === i[e]; e++)
      ;
    var s = n - e;
    for (r = 1; r <= s && t[n - r] === i[o - r]; r++)
      ;
    return Vo = i.slice(e, 1 < r ? 1 - r : void 0);
  }
  function $o(e) {
    var t = e.keyCode;
    return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0;
  }
  function xo() {
    return !0;
  }
  function Xf() {
    return !1;
  }
  function Je(e) {
    function t(n, r, i, o, s) {
      this._reactName = n, this._targetInst = i, this.type = r, this.nativeEvent = o, this.target = s, this.currentTarget = null;
      for (var a in e)
        e.hasOwnProperty(a) && (n = e[a], this[a] = n ? n(o) : o[a]);
      return this.isDefaultPrevented = (o.defaultPrevented != null ? o.defaultPrevented : o.returnValue === !1) ? xo : Xf, this.isPropagationStopped = Xf, this;
    }
    return se(t.prototype, { preventDefault: function() {
      this.defaultPrevented = !0;
      var n = this.nativeEvent;
      n && (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = !1), this.isDefaultPrevented = xo);
    }, stopPropagation: function() {
      var n = this.nativeEvent;
      n && (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0), this.isPropagationStopped = xo);
    }, persist: function() {
    }, isPersistent: xo }), t;
  }
  var Yr = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(e) {
    return e.timeStamp || Date.now();
  }, defaultPrevented: 0, isTrusted: 0 }, ec = Je(Yr), eo = se({}, Yr, { view: 0, detail: 0 }), j1 = Je(eo), Da, Ma, ni, Vs = se({}, eo, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: tc, button: 0, buttons: 0, relatedTarget: function(e) {
    return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
  }, movementX: function(e) {
    return "movementX" in e ? e.movementX : (e !== ni && (ni && e.type === "mousemove" ? (Da = e.screenX - ni.screenX, Ma = e.screenY - ni.screenY) : Ma = Da = 0, ni = e), Da);
  }, movementY: function(e) {
    return "movementY" in e ? e.movementY : Ma;
  } }), Zf = Je(Vs), F1 = se({}, Vs, { dataTransfer: 0 }), R1 = Je(F1), D1 = se({}, eo, { relatedTarget: 0 }), Na = Je(D1), M1 = se({}, Yr, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), N1 = Je(M1), b1 = se({}, Yr, { clipboardData: function(e) {
    return "clipboardData" in e ? e.clipboardData : window.clipboardData;
  } }), L1 = Je(b1), V1 = se({}, Yr, { data: 0 }), qf = Je(V1), $1 = {
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
  }, I1 = {
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
  }, z1 = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
  function U1(e) {
    var t = this.nativeEvent;
    return t.getModifierState ? t.getModifierState(e) : (e = z1[e]) ? !!t[e] : !1;
  }
  function tc() {
    return U1;
  }
  var B1 = se({}, eo, { key: function(e) {
    if (e.key) {
      var t = $1[e.key] || e.key;
      if (t !== "Unidentified")
        return t;
    }
    return e.type === "keypress" ? (e = $o(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? I1[e.keyCode] || "Unidentified" : "";
  }, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: tc, charCode: function(e) {
    return e.type === "keypress" ? $o(e) : 0;
  }, keyCode: function(e) {
    return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
  }, which: function(e) {
    return e.type === "keypress" ? $o(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
  } }), H1 = Je(B1), W1 = se({}, Vs, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), Jf = Je(W1), K1 = se({}, eo, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: tc }), G1 = Je(K1), Y1 = se({}, Yr, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), Q1 = Je(Y1), X1 = se({}, Vs, {
    deltaX: function(e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function(e) {
      return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), Z1 = Je(X1), q1 = [9, 13, 27, 32], nc = Wt && "CompositionEvent" in window, mi = null;
  Wt && "documentMode" in document && (mi = document.documentMode);
  var J1 = Wt && "TextEvent" in window && !mi, Dm = Wt && (!nc || mi && 8 < mi && 11 >= mi), ed = " ", td = !1;
  function Mm(e, t) {
    switch (e) {
      case "keyup":
        return q1.indexOf(t.keyCode) !== -1;
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
  function Nm(e) {
    return e = e.detail, typeof e == "object" && "data" in e ? e.data : null;
  }
  var yr = !1;
  function eS(e, t) {
    switch (e) {
      case "compositionend":
        return Nm(t);
      case "keypress":
        return t.which !== 32 ? null : (td = !0, ed);
      case "textInput":
        return e = t.data, e === ed && td ? null : e;
      default:
        return null;
    }
  }
  function tS(e, t) {
    if (yr)
      return e === "compositionend" || !nc && Mm(e, t) ? (e = Rm(), Vo = Ju = ln = null, yr = !1, e) : null;
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
        return Dm && t.locale !== "ko" ? null : t.data;
      default:
        return null;
    }
  }
  var nS = { color: !0, date: !0, datetime: !0, "datetime-local": !0, email: !0, month: !0, number: !0, password: !0, range: !0, search: !0, tel: !0, text: !0, time: !0, url: !0, week: !0 };
  function nd(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t === "input" ? !!nS[e.type] : t === "textarea";
  }
  function bm(e, t, n, r) {
    hm(r), t = os(t, "onChange"), 0 < t.length && (n = new ec("onChange", "change", null, n, r), e.push({ event: n, listeners: t }));
  }
  var yi = null, Mi = null;
  function rS(e) {
    Gm(e, 0);
  }
  function $s(e) {
    var t = Sr(e);
    if (sm(t))
      return e;
  }
  function iS(e, t) {
    if (e === "change")
      return t;
  }
  var Lm = !1;
  if (Wt) {
    var ba;
    if (Wt) {
      var La = "oninput" in document;
      if (!La) {
        var rd = document.createElement("div");
        rd.setAttribute("oninput", "return;"), La = typeof rd.oninput == "function";
      }
      ba = La;
    } else
      ba = !1;
    Lm = ba && (!document.documentMode || 9 < document.documentMode);
  }
  function id() {
    yi && (yi.detachEvent("onpropertychange", Vm), Mi = yi = null);
  }
  function Vm(e) {
    if (e.propertyName === "value" && $s(Mi)) {
      var t = [];
      bm(t, Mi, e, Yu(e)), gm(rS, t);
    }
  }
  function oS(e, t, n) {
    e === "focusin" ? (id(), yi = t, Mi = n, yi.attachEvent("onpropertychange", Vm)) : e === "focusout" && id();
  }
  function sS(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown")
      return $s(Mi);
  }
  function aS(e, t) {
    if (e === "click")
      return $s(t);
  }
  function lS(e, t) {
    if (e === "input" || e === "change")
      return $s(t);
  }
  function uS(e, t) {
    return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
  }
  var St = typeof Object.is == "function" ? Object.is : uS;
  function Ni(e, t) {
    if (St(e, t))
      return !0;
    if (typeof e != "object" || e === null || typeof t != "object" || t === null)
      return !1;
    var n = Object.keys(e), r = Object.keys(t);
    if (n.length !== r.length)
      return !1;
    for (r = 0; r < n.length; r++) {
      var i = n[r];
      if (!wl.call(t, i) || !St(e[i], t[i]))
        return !1;
    }
    return !0;
  }
  function od(e) {
    for (; e && e.firstChild; )
      e = e.firstChild;
    return e;
  }
  function sd(e, t) {
    var n = od(e);
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
      n = od(n);
    }
  }
  function $m(e, t) {
    return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? $m(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1;
  }
  function Im() {
    for (var e = window, t = qo(); t instanceof e.HTMLIFrameElement; ) {
      try {
        var n = typeof t.contentWindow.location.href == "string";
      } catch {
        n = !1;
      }
      if (n)
        e = t.contentWindow;
      else
        break;
      t = qo(e.document);
    }
    return t;
  }
  function rc(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
  }
  function cS(e) {
    var t = Im(), n = e.focusedElem, r = e.selectionRange;
    if (t !== n && n && n.ownerDocument && $m(n.ownerDocument.documentElement, n)) {
      if (r !== null && rc(n)) {
        if (t = r.start, e = r.end, e === void 0 && (e = t), "selectionStart" in n)
          n.selectionStart = t, n.selectionEnd = Math.min(e, n.value.length);
        else if (e = (t = n.ownerDocument || document) && t.defaultView || window, e.getSelection) {
          e = e.getSelection();
          var i = n.textContent.length, o = Math.min(r.start, i);
          r = r.end === void 0 ? o : Math.min(r.end, i), !e.extend && o > r && (i = r, r = o, o = i), i = sd(n, o);
          var s = sd(
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
  var fS = Wt && "documentMode" in document && 11 >= document.documentMode, gr = null, Il = null, gi = null, zl = !1;
  function ad(e, t, n) {
    var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
    zl || gr == null || gr !== qo(r) || (r = gr, "selectionStart" in r && rc(r) ? r = { start: r.selectionStart, end: r.selectionEnd } : (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection(), r = { anchorNode: r.anchorNode, anchorOffset: r.anchorOffset, focusNode: r.focusNode, focusOffset: r.focusOffset }), gi && Ni(gi, r) || (gi = r, r = os(Il, "onSelect"), 0 < r.length && (t = new ec("onSelect", "select", null, t, n), e.push({ event: t, listeners: r }), t.target = gr)));
  }
  function wo(e, t) {
    var n = {};
    return n[e.toLowerCase()] = t.toLowerCase(), n["Webkit" + e] = "webkit" + t, n["Moz" + e] = "moz" + t, n;
  }
  var vr = { animationend: wo("Animation", "AnimationEnd"), animationiteration: wo("Animation", "AnimationIteration"), animationstart: wo("Animation", "AnimationStart"), transitionend: wo("Transition", "TransitionEnd") }, Va = {}, zm = {};
  Wt && (zm = document.createElement("div").style, "AnimationEvent" in window || (delete vr.animationend.animation, delete vr.animationiteration.animation, delete vr.animationstart.animation), "TransitionEvent" in window || delete vr.transitionend.transition);
  function Is(e) {
    if (Va[e])
      return Va[e];
    if (!vr[e])
      return e;
    var t = vr[e], n;
    for (n in t)
      if (t.hasOwnProperty(n) && n in zm)
        return Va[e] = t[n];
    return e;
  }
  var Um = Is("animationend"), Bm = Is("animationiteration"), Hm = Is("animationstart"), Wm = Is("transitionend"), Km = /* @__PURE__ */ new Map(), ld = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
  function An(e, t) {
    Km.set(e, t), rr(t, [e]);
  }
  for (var $a = 0; $a < ld.length; $a++) {
    var Ia = ld[$a], dS = Ia.toLowerCase(), hS = Ia[0].toUpperCase() + Ia.slice(1);
    An(dS, "on" + hS);
  }
  An(Um, "onAnimationEnd");
  An(Bm, "onAnimationIteration");
  An(Hm, "onAnimationStart");
  An("dblclick", "onDoubleClick");
  An("focusin", "onFocus");
  An("focusout", "onBlur");
  An(Wm, "onTransitionEnd");
  Lr("onMouseEnter", ["mouseout", "mouseover"]);
  Lr("onMouseLeave", ["mouseout", "mouseover"]);
  Lr("onPointerEnter", ["pointerout", "pointerover"]);
  Lr("onPointerLeave", ["pointerout", "pointerover"]);
  rr("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
  rr("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
  rr("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
  rr("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
  rr("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
  rr("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
  var fi = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), pS = new Set("cancel close invalid load scroll toggle".split(" ").concat(fi));
  function ud(e, t, n) {
    var r = e.type || "unknown-event";
    e.currentTarget = n, d1(r, t, void 0, e), e.currentTarget = null;
  }
  function Gm(e, t) {
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
            ud(i, a, u), o = l;
          }
        else
          for (s = 0; s < r.length; s++) {
            if (a = r[s], l = a.instance, u = a.currentTarget, a = a.listener, l !== o && i.isPropagationStopped())
              break e;
            ud(i, a, u), o = l;
          }
      }
    }
    if (es)
      throw e = bl, es = !1, bl = null, e;
  }
  function Z(e, t) {
    var n = t[Kl];
    n === void 0 && (n = t[Kl] = /* @__PURE__ */ new Set());
    var r = e + "__bubble";
    n.has(r) || (Ym(t, e, 2, !1), n.add(r));
  }
  function za(e, t, n) {
    var r = 0;
    t && (r |= 4), Ym(n, e, r, t);
  }
  var To = "_reactListening" + Math.random().toString(36).slice(2);
  function bi(e) {
    if (!e[To]) {
      e[To] = !0, tm.forEach(function(n) {
        n !== "selectionchange" && (pS.has(n) || za(n, !1, e), za(n, !0, e));
      });
      var t = e.nodeType === 9 ? e : e.ownerDocument;
      t === null || t[To] || (t[To] = !0, za("selectionchange", !1, t));
    }
  }
  function Ym(e, t, n, r) {
    switch (Fm(t)) {
      case 1:
        var i = A1;
        break;
      case 4:
        i = O1;
        break;
      default:
        i = qu;
    }
    n = i.bind(null, t, n, e), i = void 0, !Nl || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (i = !0), r ? i !== void 0 ? e.addEventListener(t, n, { capture: !0, passive: i }) : e.addEventListener(t, n, !0) : i !== void 0 ? e.addEventListener(t, n, { passive: i }) : e.addEventListener(t, n, !1);
  }
  function Ua(e, t, n, r, i) {
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
    gm(function() {
      var u = o, c = Yu(n), f = [];
      e: {
        var d = Km.get(e);
        if (d !== void 0) {
          var y = ec, g = e;
          switch (e) {
            case "keypress":
              if ($o(n) === 0)
                break e;
            case "keydown":
            case "keyup":
              y = H1;
              break;
            case "focusin":
              g = "focus", y = Na;
              break;
            case "focusout":
              g = "blur", y = Na;
              break;
            case "beforeblur":
            case "afterblur":
              y = Na;
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
              y = Zf;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              y = R1;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              y = G1;
              break;
            case Um:
            case Bm:
            case Hm:
              y = N1;
              break;
            case Wm:
              y = Q1;
              break;
            case "scroll":
              y = j1;
              break;
            case "wheel":
              y = Z1;
              break;
            case "copy":
            case "cut":
            case "paste":
              y = L1;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              y = Jf;
          }
          var v = (t & 4) !== 0, T = !v && e === "scroll", p = v ? d !== null ? d + "Capture" : null : d;
          v = [];
          for (var h = u, m; h !== null; ) {
            m = h;
            var S = m.stateNode;
            if (m.tag === 5 && S !== null && (m = S, p !== null && (S = ji(h, p), S != null && v.push(Li(h, S, m)))), T)
              break;
            h = h.return;
          }
          0 < v.length && (d = new y(d, g, null, n, c), f.push({ event: d, listeners: v }));
        }
      }
      if (!(t & 7)) {
        e: {
          if (d = e === "mouseover" || e === "pointerover", y = e === "mouseout" || e === "pointerout", d && n !== Dl && (g = n.relatedTarget || n.fromElement) && (zn(g) || g[Kt]))
            break e;
          if ((y || d) && (d = c.window === c ? c : (d = c.ownerDocument) ? d.defaultView || d.parentWindow : window, y ? (g = n.relatedTarget || n.toElement, y = u, g = g ? zn(g) : null, g !== null && (T = ir(g), g !== T || g.tag !== 5 && g.tag !== 6) && (g = null)) : (y = null, g = u), y !== g)) {
            if (v = Zf, S = "onMouseLeave", p = "onMouseEnter", h = "mouse", (e === "pointerout" || e === "pointerover") && (v = Jf, S = "onPointerLeave", p = "onPointerEnter", h = "pointer"), T = y == null ? d : Sr(y), m = g == null ? d : Sr(g), d = new v(S, h + "leave", y, n, c), d.target = T, d.relatedTarget = m, S = null, zn(c) === u && (v = new v(p, h + "enter", g, n, c), v.target = m, v.relatedTarget = T, S = v), T = S, y && g)
              t: {
                for (v = y, p = g, h = 0, m = v; m; m = dr(m))
                  h++;
                for (m = 0, S = p; S; S = dr(S))
                  m++;
                for (; 0 < h - m; )
                  v = dr(v), h--;
                for (; 0 < m - h; )
                  p = dr(p), m--;
                for (; h--; ) {
                  if (v === p || p !== null && v === p.alternate)
                    break t;
                  v = dr(v), p = dr(p);
                }
                v = null;
              }
            else
              v = null;
            y !== null && cd(f, d, y, v, !1), g !== null && T !== null && cd(f, T, g, v, !0);
          }
        }
        e: {
          if (d = u ? Sr(u) : window, y = d.nodeName && d.nodeName.toLowerCase(), y === "select" || y === "input" && d.type === "file")
            var C = iS;
          else if (nd(d))
            if (Lm)
              C = lS;
            else {
              C = sS;
              var P = oS;
            }
          else
            (y = d.nodeName) && y.toLowerCase() === "input" && (d.type === "checkbox" || d.type === "radio") && (C = aS);
          if (C && (C = C(e, u))) {
            bm(f, C, n, c);
            break e;
          }
          P && P(e, d, u), e === "focusout" && (P = d._wrapperState) && P.controlled && d.type === "number" && Al(d, "number", d.value);
        }
        switch (P = u ? Sr(u) : window, e) {
          case "focusin":
            (nd(P) || P.contentEditable === "true") && (gr = P, Il = u, gi = null);
            break;
          case "focusout":
            gi = Il = gr = null;
            break;
          case "mousedown":
            zl = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            zl = !1, ad(f, n, c);
            break;
          case "selectionchange":
            if (fS)
              break;
          case "keydown":
          case "keyup":
            ad(f, n, c);
        }
        var k;
        if (nc)
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
          yr ? Mm(e, n) && (_ = "onCompositionEnd") : e === "keydown" && n.keyCode === 229 && (_ = "onCompositionStart");
        _ && (Dm && n.locale !== "ko" && (yr || _ !== "onCompositionStart" ? _ === "onCompositionEnd" && yr && (k = Rm()) : (ln = c, Ju = "value" in ln ? ln.value : ln.textContent, yr = !0)), P = os(u, _), 0 < P.length && (_ = new qf(_, e, null, n, c), f.push({ event: _, listeners: P }), k ? _.data = k : (k = Nm(n), k !== null && (_.data = k)))), (k = J1 ? eS(e, n) : tS(e, n)) && (u = os(u, "onBeforeInput"), 0 < u.length && (c = new qf("onBeforeInput", "beforeinput", null, n, c), f.push({ event: c, listeners: u }), c.data = k));
      }
      Gm(f, t);
    });
  }
  function Li(e, t, n) {
    return { instance: e, listener: t, currentTarget: n };
  }
  function os(e, t) {
    for (var n = t + "Capture", r = []; e !== null; ) {
      var i = e, o = i.stateNode;
      i.tag === 5 && o !== null && (i = o, o = ji(e, n), o != null && r.unshift(Li(e, o, i)), o = ji(e, t), o != null && r.push(Li(e, o, i))), e = e.return;
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
  function cd(e, t, n, r, i) {
    for (var o = t._reactName, s = []; n !== null && n !== r; ) {
      var a = n, l = a.alternate, u = a.stateNode;
      if (l !== null && l === r)
        break;
      a.tag === 5 && u !== null && (a = u, i ? (l = ji(n, o), l != null && s.unshift(Li(n, l, a))) : i || (l = ji(n, o), l != null && s.push(Li(n, l, a)))), n = n.return;
    }
    s.length !== 0 && e.push({ event: t, listeners: s });
  }
  var mS = /\r\n?/g, yS = /\u0000|\uFFFD/g;
  function fd(e) {
    return (typeof e == "string" ? e : "" + e).replace(mS, `
`).replace(yS, "");
  }
  function Eo(e, t, n) {
    if (t = fd(t), fd(e) !== t && n)
      throw Error(A(425));
  }
  function ss() {
  }
  var Ul = null, Bl = null;
  function Hl(e, t) {
    return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
  }
  var Wl = typeof setTimeout == "function" ? setTimeout : void 0, gS = typeof clearTimeout == "function" ? clearTimeout : void 0, dd = typeof Promise == "function" ? Promise : void 0, vS = typeof queueMicrotask == "function" ? queueMicrotask : typeof dd < "u" ? function(e) {
    return dd.resolve(null).then(e).catch(SS);
  } : Wl;
  function SS(e) {
    setTimeout(function() {
      throw e;
    });
  }
  function Ba(e, t) {
    var n = t, r = 0;
    do {
      var i = n.nextSibling;
      if (e.removeChild(n), i && i.nodeType === 8)
        if (n = i.data, n === "/$") {
          if (r === 0) {
            e.removeChild(i), Di(t);
            return;
          }
          r--;
        } else
          n !== "$" && n !== "$?" && n !== "$!" || r++;
      n = i;
    } while (n);
    Di(t);
  }
  function pn(e) {
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
  function hd(e) {
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
  var Qr = Math.random().toString(36).slice(2), kt = "__reactFiber$" + Qr, Vi = "__reactProps$" + Qr, Kt = "__reactContainer$" + Qr, Kl = "__reactEvents$" + Qr, xS = "__reactListeners$" + Qr, wS = "__reactHandles$" + Qr;
  function zn(e) {
    var t = e[kt];
    if (t)
      return t;
    for (var n = e.parentNode; n; ) {
      if (t = n[Kt] || n[kt]) {
        if (n = t.alternate, t.child !== null || n !== null && n.child !== null)
          for (e = hd(e); e !== null; ) {
            if (n = e[kt])
              return n;
            e = hd(e);
          }
        return t;
      }
      e = n, n = e.parentNode;
    }
    return null;
  }
  function to(e) {
    return e = e[kt] || e[Kt], !e || e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3 ? null : e;
  }
  function Sr(e) {
    if (e.tag === 5 || e.tag === 6)
      return e.stateNode;
    throw Error(A(33));
  }
  function zs(e) {
    return e[Vi] || null;
  }
  var Gl = [], xr = -1;
  function On(e) {
    return { current: e };
  }
  function J(e) {
    0 > xr || (e.current = Gl[xr], Gl[xr] = null, xr--);
  }
  function X(e, t) {
    xr++, Gl[xr] = e.current, e.current = t;
  }
  var En = {}, De = On(En), Ue = On(!1), Xn = En;
  function Vr(e, t) {
    var n = e.type.contextTypes;
    if (!n)
      return En;
    var r = e.stateNode;
    if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
      return r.__reactInternalMemoizedMaskedChildContext;
    var i = {}, o;
    for (o in n)
      i[o] = t[o];
    return r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = t, e.__reactInternalMemoizedMaskedChildContext = i), i;
  }
  function Be(e) {
    return e = e.childContextTypes, e != null;
  }
  function as() {
    J(Ue), J(De);
  }
  function pd(e, t, n) {
    if (De.current !== En)
      throw Error(A(168));
    X(De, t), X(Ue, n);
  }
  function Qm(e, t, n) {
    var r = e.stateNode;
    if (t = t.childContextTypes, typeof r.getChildContext != "function")
      return n;
    r = r.getChildContext();
    for (var i in r)
      if (!(i in t))
        throw Error(A(108, o1(e) || "Unknown", i));
    return se({}, n, r);
  }
  function ls(e) {
    return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || En, Xn = De.current, X(De, e), X(Ue, Ue.current), !0;
  }
  function md(e, t, n) {
    var r = e.stateNode;
    if (!r)
      throw Error(A(169));
    n ? (e = Qm(e, t, Xn), r.__reactInternalMemoizedMergedChildContext = e, J(Ue), J(De), X(De, e)) : J(Ue), X(Ue, n);
  }
  var bt = null, Us = !1, Ha = !1;
  function Xm(e) {
    bt === null ? bt = [e] : bt.push(e);
  }
  function TS(e) {
    Us = !0, Xm(e);
  }
  function jn() {
    if (!Ha && bt !== null) {
      Ha = !0;
      var e = 0, t = G;
      try {
        var n = bt;
        for (G = 1; e < n.length; e++) {
          var r = n[e];
          do
            r = r(!0);
          while (r !== null);
        }
        bt = null, Us = !1;
      } catch (i) {
        throw bt !== null && (bt = bt.slice(e + 1)), wm(Qu, jn), i;
      } finally {
        G = t, Ha = !1;
      }
    }
    return null;
  }
  var wr = [], Tr = 0, us = null, cs = 0, st = [], at = 0, Zn = null, Lt = 1, Vt = "";
  function Nn(e, t) {
    wr[Tr++] = cs, wr[Tr++] = us, us = e, cs = t;
  }
  function Zm(e, t, n) {
    st[at++] = Lt, st[at++] = Vt, st[at++] = Zn, Zn = e;
    var r = Lt;
    e = Vt;
    var i = 32 - gt(r) - 1;
    r &= ~(1 << i), n += 1;
    var o = 32 - gt(t) + i;
    if (30 < o) {
      var s = i - i % 5;
      o = (r & (1 << s) - 1).toString(32), r >>= s, i -= s, Lt = 1 << 32 - gt(t) + i | n << i | r, Vt = o + e;
    } else
      Lt = 1 << o | n << i | r, Vt = e;
  }
  function ic(e) {
    e.return !== null && (Nn(e, 1), Zm(e, 1, 0));
  }
  function oc(e) {
    for (; e === us; )
      us = wr[--Tr], wr[Tr] = null, cs = wr[--Tr], wr[Tr] = null;
    for (; e === Zn; )
      Zn = st[--at], st[at] = null, Vt = st[--at], st[at] = null, Lt = st[--at], st[at] = null;
  }
  var Qe = null, Ke = null, ne = !1, yt = null;
  function qm(e, t) {
    var n = lt(5, null, null, 0);
    n.elementType = "DELETED", n.stateNode = t, n.return = e, t = e.deletions, t === null ? (e.deletions = [n], e.flags |= 16) : t.push(n);
  }
  function yd(e, t) {
    switch (e.tag) {
      case 5:
        var n = e.type;
        return t = t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t, t !== null ? (e.stateNode = t, Qe = e, Ke = pn(t.firstChild), !0) : !1;
      case 6:
        return t = e.pendingProps === "" || t.nodeType !== 3 ? null : t, t !== null ? (e.stateNode = t, Qe = e, Ke = null, !0) : !1;
      case 13:
        return t = t.nodeType !== 8 ? null : t, t !== null ? (n = Zn !== null ? { id: Lt, overflow: Vt } : null, e.memoizedState = { dehydrated: t, treeContext: n, retryLane: 1073741824 }, n = lt(18, null, null, 0), n.stateNode = t, n.return = e, e.child = n, Qe = e, Ke = null, !0) : !1;
      default:
        return !1;
    }
  }
  function Yl(e) {
    return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
  }
  function Ql(e) {
    if (ne) {
      var t = Ke;
      if (t) {
        var n = t;
        if (!yd(e, t)) {
          if (Yl(e))
            throw Error(A(418));
          t = pn(n.nextSibling);
          var r = Qe;
          t && yd(e, t) ? qm(r, n) : (e.flags = e.flags & -4097 | 2, ne = !1, Qe = e);
        }
      } else {
        if (Yl(e))
          throw Error(A(418));
        e.flags = e.flags & -4097 | 2, ne = !1, Qe = e;
      }
    }
  }
  function gd(e) {
    for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
      e = e.return;
    Qe = e;
  }
  function Po(e) {
    if (e !== Qe)
      return !1;
    if (!ne)
      return gd(e), ne = !0, !1;
    var t;
    if ((t = e.tag !== 3) && !(t = e.tag !== 5) && (t = e.type, t = t !== "head" && t !== "body" && !Hl(e.type, e.memoizedProps)), t && (t = Ke)) {
      if (Yl(e))
        throw Jm(), Error(A(418));
      for (; t; )
        qm(e, t), t = pn(t.nextSibling);
    }
    if (gd(e), e.tag === 13) {
      if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e)
        throw Error(A(317));
      e: {
        for (e = e.nextSibling, t = 0; e; ) {
          if (e.nodeType === 8) {
            var n = e.data;
            if (n === "/$") {
              if (t === 0) {
                Ke = pn(e.nextSibling);
                break e;
              }
              t--;
            } else
              n !== "$" && n !== "$!" && n !== "$?" || t++;
          }
          e = e.nextSibling;
        }
        Ke = null;
      }
    } else
      Ke = Qe ? pn(e.stateNode.nextSibling) : null;
    return !0;
  }
  function Jm() {
    for (var e = Ke; e; )
      e = pn(e.nextSibling);
  }
  function $r() {
    Ke = Qe = null, ne = !1;
  }
  function sc(e) {
    yt === null ? yt = [e] : yt.push(e);
  }
  var ES = Qt.ReactCurrentBatchConfig;
  function pt(e, t) {
    if (e && e.defaultProps) {
      t = se({}, t), e = e.defaultProps;
      for (var n in e)
        t[n] === void 0 && (t[n] = e[n]);
      return t;
    }
    return t;
  }
  var fs = On(null), ds = null, Er = null, ac = null;
  function lc() {
    ac = Er = ds = null;
  }
  function uc(e) {
    var t = fs.current;
    J(fs), e._currentValue = t;
  }
  function Xl(e, t, n) {
    for (; e !== null; ) {
      var r = e.alternate;
      if ((e.childLanes & t) !== t ? (e.childLanes |= t, r !== null && (r.childLanes |= t)) : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t), e === n)
        break;
      e = e.return;
    }
  }
  function Nr(e, t) {
    ds = e, ac = Er = null, e = e.dependencies, e !== null && e.firstContext !== null && (e.lanes & t && (ze = !0), e.firstContext = null);
  }
  function ct(e) {
    var t = e._currentValue;
    if (ac !== e)
      if (e = { context: e, memoizedValue: t, next: null }, Er === null) {
        if (ds === null)
          throw Error(A(308));
        Er = e, ds.dependencies = { lanes: 0, firstContext: e };
      } else
        Er = Er.next = e;
    return t;
  }
  var Un = null;
  function cc(e) {
    Un === null ? Un = [e] : Un.push(e);
  }
  function ey(e, t, n, r) {
    var i = t.interleaved;
    return i === null ? (n.next = n, cc(t)) : (n.next = i.next, i.next = n), t.interleaved = n, Gt(e, r);
  }
  function Gt(e, t) {
    e.lanes |= t;
    var n = e.alternate;
    for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; )
      e.childLanes |= t, n = e.alternate, n !== null && (n.childLanes |= t), n = e, e = e.return;
    return n.tag === 3 ? n.stateNode : null;
  }
  var nn = !1;
  function fc(e) {
    e.updateQueue = { baseState: e.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
  }
  function ty(e, t) {
    e = e.updateQueue, t.updateQueue === e && (t.updateQueue = { baseState: e.baseState, firstBaseUpdate: e.firstBaseUpdate, lastBaseUpdate: e.lastBaseUpdate, shared: e.shared, effects: e.effects });
  }
  function zt(e, t) {
    return { eventTime: e, lane: t, tag: 0, payload: null, callback: null, next: null };
  }
  function mn(e, t, n) {
    var r = e.updateQueue;
    if (r === null)
      return null;
    if (r = r.shared, B & 2) {
      var i = r.pending;
      return i === null ? t.next = t : (t.next = i.next, i.next = t), r.pending = t, Gt(e, n);
    }
    return i = r.interleaved, i === null ? (t.next = t, cc(r)) : (t.next = i.next, i.next = t), r.interleaved = t, Gt(e, n);
  }
  function Io(e, t, n) {
    if (t = t.updateQueue, t !== null && (t = t.shared, (n & 4194240) !== 0)) {
      var r = t.lanes;
      r &= e.pendingLanes, n |= r, t.lanes = n, Xu(e, n);
    }
  }
  function vd(e, t) {
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
  function hs(e, t, n, r) {
    var i = e.updateQueue;
    nn = !1;
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
        var d = a.lane, y = a.eventTime;
        if ((r & d) === d) {
          c !== null && (c = c.next = {
            eventTime: y,
            lane: 0,
            tag: a.tag,
            payload: a.payload,
            callback: a.callback,
            next: null
          });
          e: {
            var g = e, v = a;
            switch (d = t, y = n, v.tag) {
              case 1:
                if (g = v.payload, typeof g == "function") {
                  f = g.call(y, f, d);
                  break e;
                }
                f = g;
                break e;
              case 3:
                g.flags = g.flags & -65537 | 128;
              case 0:
                if (g = v.payload, d = typeof g == "function" ? g.call(y, f, d) : g, d == null)
                  break e;
                f = se({}, f, d);
                break e;
              case 2:
                nn = !0;
            }
          }
          a.callback !== null && a.lane !== 0 && (e.flags |= 64, d = i.effects, d === null ? i.effects = [a] : d.push(a));
        } else
          y = { eventTime: y, lane: d, tag: a.tag, payload: a.payload, callback: a.callback, next: null }, c === null ? (u = c = y, l = f) : c = c.next = y, s |= d;
        if (a = a.next, a === null) {
          if (a = i.shared.pending, a === null)
            break;
          d = a, a = d.next, d.next = null, i.lastBaseUpdate = d, i.shared.pending = null;
        }
      } while (!0);
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
  function Sd(e, t, n) {
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
  var ny = new em.Component().refs;
  function Zl(e, t, n, r) {
    t = e.memoizedState, n = n(r, t), n = n == null ? t : se({}, t, n), e.memoizedState = n, e.lanes === 0 && (e.updateQueue.baseState = n);
  }
  var Bs = { isMounted: function(e) {
    return (e = e._reactInternals) ? ir(e) === e : !1;
  }, enqueueSetState: function(e, t, n) {
    e = e._reactInternals;
    var r = Ne(), i = gn(e), o = zt(r, i);
    o.payload = t, n != null && (o.callback = n), t = mn(e, o, i), t !== null && (vt(t, e, i, r), Io(t, e, i));
  }, enqueueReplaceState: function(e, t, n) {
    e = e._reactInternals;
    var r = Ne(), i = gn(e), o = zt(r, i);
    o.tag = 1, o.payload = t, n != null && (o.callback = n), t = mn(e, o, i), t !== null && (vt(t, e, i, r), Io(t, e, i));
  }, enqueueForceUpdate: function(e, t) {
    e = e._reactInternals;
    var n = Ne(), r = gn(e), i = zt(n, r);
    i.tag = 2, t != null && (i.callback = t), t = mn(e, i, r), t !== null && (vt(t, e, r, n), Io(t, e, r));
  } };
  function xd(e, t, n, r, i, o, s) {
    return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(r, o, s) : t.prototype && t.prototype.isPureReactComponent ? !Ni(n, r) || !Ni(i, o) : !0;
  }
  function ry(e, t, n) {
    var r = !1, i = En, o = t.contextType;
    return typeof o == "object" && o !== null ? o = ct(o) : (i = Be(t) ? Xn : De.current, r = t.contextTypes, o = (r = r != null) ? Vr(e, i) : En), t = new t(n, o), e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null, t.updater = Bs, e.stateNode = t, t._reactInternals = e, r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = i, e.__reactInternalMemoizedMaskedChildContext = o), t;
  }
  function wd(e, t, n, r) {
    e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, r), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, r), t.state !== e && Bs.enqueueReplaceState(t, t.state, null);
  }
  function ql(e, t, n, r) {
    var i = e.stateNode;
    i.props = n, i.state = e.memoizedState, i.refs = ny, fc(e);
    var o = t.contextType;
    typeof o == "object" && o !== null ? i.context = ct(o) : (o = Be(t) ? Xn : De.current, i.context = Vr(e, o)), i.state = e.memoizedState, o = t.getDerivedStateFromProps, typeof o == "function" && (Zl(e, t, o, n), i.state = e.memoizedState), typeof t.getDerivedStateFromProps == "function" || typeof i.getSnapshotBeforeUpdate == "function" || typeof i.UNSAFE_componentWillMount != "function" && typeof i.componentWillMount != "function" || (t = i.state, typeof i.componentWillMount == "function" && i.componentWillMount(), typeof i.UNSAFE_componentWillMount == "function" && i.UNSAFE_componentWillMount(), t !== i.state && Bs.enqueueReplaceState(i, i.state, null), hs(e, n, i, r), i.state = e.memoizedState), typeof i.componentDidMount == "function" && (e.flags |= 4194308);
  }
  function ri(e, t, n) {
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
          a === ny && (a = i.refs = {}), s === null ? delete a[o] : a[o] = s;
        }, t._stringRef = o, t);
      }
      if (typeof e != "string")
        throw Error(A(284));
      if (!n._owner)
        throw Error(A(290, e));
    }
    return e;
  }
  function Co(e, t) {
    throw e = Object.prototype.toString.call(t), Error(A(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e));
  }
  function Td(e) {
    var t = e._init;
    return t(e._payload);
  }
  function iy(e) {
    function t(p, h) {
      if (e) {
        var m = p.deletions;
        m === null ? (p.deletions = [h], p.flags |= 16) : m.push(h);
      }
    }
    function n(p, h) {
      if (!e)
        return null;
      for (; h !== null; )
        t(p, h), h = h.sibling;
      return null;
    }
    function r(p, h) {
      for (p = /* @__PURE__ */ new Map(); h !== null; )
        h.key !== null ? p.set(h.key, h) : p.set(h.index, h), h = h.sibling;
      return p;
    }
    function i(p, h) {
      return p = vn(p, h), p.index = 0, p.sibling = null, p;
    }
    function o(p, h, m) {
      return p.index = m, e ? (m = p.alternate, m !== null ? (m = m.index, m < h ? (p.flags |= 2, h) : m) : (p.flags |= 2, h)) : (p.flags |= 1048576, h);
    }
    function s(p) {
      return e && p.alternate === null && (p.flags |= 2), p;
    }
    function a(p, h, m, S) {
      return h === null || h.tag !== 6 ? (h = Za(m, p.mode, S), h.return = p, h) : (h = i(h, m), h.return = p, h);
    }
    function l(p, h, m, S) {
      var C = m.type;
      return C === mr ? c(p, h, m.props.children, S, m.key) : h !== null && (h.elementType === C || typeof C == "object" && C !== null && C.$$typeof === tn && Td(C) === h.type) ? (S = i(h, m.props), S.ref = ri(p, h, m), S.return = p, S) : (S = Ko(m.type, m.key, m.props, null, p.mode, S), S.ref = ri(p, h, m), S.return = p, S);
    }
    function u(p, h, m, S) {
      return h === null || h.tag !== 4 || h.stateNode.containerInfo !== m.containerInfo || h.stateNode.implementation !== m.implementation ? (h = qa(m, p.mode, S), h.return = p, h) : (h = i(h, m.children || []), h.return = p, h);
    }
    function c(p, h, m, S, C) {
      return h === null || h.tag !== 7 ? (h = Gn(m, p.mode, S, C), h.return = p, h) : (h = i(h, m), h.return = p, h);
    }
    function f(p, h, m) {
      if (typeof h == "string" && h !== "" || typeof h == "number")
        return h = Za("" + h, p.mode, m), h.return = p, h;
      if (typeof h == "object" && h !== null) {
        switch (h.$$typeof) {
          case po:
            return m = Ko(h.type, h.key, h.props, null, p.mode, m), m.ref = ri(p, null, h), m.return = p, m;
          case pr:
            return h = qa(h, p.mode, m), h.return = p, h;
          case tn:
            var S = h._init;
            return f(p, S(h._payload), m);
        }
        if (ui(h) || qr(h))
          return h = Gn(h, p.mode, m, null), h.return = p, h;
        Co(p, h);
      }
      return null;
    }
    function d(p, h, m, S) {
      var C = h !== null ? h.key : null;
      if (typeof m == "string" && m !== "" || typeof m == "number")
        return C !== null ? null : a(p, h, "" + m, S);
      if (typeof m == "object" && m !== null) {
        switch (m.$$typeof) {
          case po:
            return m.key === C ? l(p, h, m, S) : null;
          case pr:
            return m.key === C ? u(p, h, m, S) : null;
          case tn:
            return C = m._init, d(
              p,
              h,
              C(m._payload),
              S
            );
        }
        if (ui(m) || qr(m))
          return C !== null ? null : c(p, h, m, S, null);
        Co(p, m);
      }
      return null;
    }
    function y(p, h, m, S, C) {
      if (typeof S == "string" && S !== "" || typeof S == "number")
        return p = p.get(m) || null, a(h, p, "" + S, C);
      if (typeof S == "object" && S !== null) {
        switch (S.$$typeof) {
          case po:
            return p = p.get(S.key === null ? m : S.key) || null, l(h, p, S, C);
          case pr:
            return p = p.get(S.key === null ? m : S.key) || null, u(h, p, S, C);
          case tn:
            var P = S._init;
            return y(p, h, m, P(S._payload), C);
        }
        if (ui(S) || qr(S))
          return p = p.get(m) || null, c(h, p, S, C, null);
        Co(h, S);
      }
      return null;
    }
    function g(p, h, m, S) {
      for (var C = null, P = null, k = h, _ = h = 0, b = null; k !== null && _ < m.length; _++) {
        k.index > _ ? (b = k, k = null) : b = k.sibling;
        var M = d(p, k, m[_], S);
        if (M === null) {
          k === null && (k = b);
          break;
        }
        e && k && M.alternate === null && t(p, k), h = o(M, h, _), P === null ? C = M : P.sibling = M, P = M, k = b;
      }
      if (_ === m.length)
        return n(p, k), ne && Nn(p, _), C;
      if (k === null) {
        for (; _ < m.length; _++)
          k = f(p, m[_], S), k !== null && (h = o(k, h, _), P === null ? C = k : P.sibling = k, P = k);
        return ne && Nn(p, _), C;
      }
      for (k = r(p, k); _ < m.length; _++)
        b = y(k, p, _, m[_], S), b !== null && (e && b.alternate !== null && k.delete(b.key === null ? _ : b.key), h = o(b, h, _), P === null ? C = b : P.sibling = b, P = b);
      return e && k.forEach(function($) {
        return t(p, $);
      }), ne && Nn(p, _), C;
    }
    function v(p, h, m, S) {
      var C = qr(m);
      if (typeof C != "function")
        throw Error(A(150));
      if (m = C.call(m), m == null)
        throw Error(A(151));
      for (var P = C = null, k = h, _ = h = 0, b = null, M = m.next(); k !== null && !M.done; _++, M = m.next()) {
        k.index > _ ? (b = k, k = null) : b = k.sibling;
        var $ = d(p, k, M.value, S);
        if ($ === null) {
          k === null && (k = b);
          break;
        }
        e && k && $.alternate === null && t(p, k), h = o($, h, _), P === null ? C = $ : P.sibling = $, P = $, k = b;
      }
      if (M.done)
        return n(
          p,
          k
        ), ne && Nn(p, _), C;
      if (k === null) {
        for (; !M.done; _++, M = m.next())
          M = f(p, M.value, S), M !== null && (h = o(M, h, _), P === null ? C = M : P.sibling = M, P = M);
        return ne && Nn(p, _), C;
      }
      for (k = r(p, k); !M.done; _++, M = m.next())
        M = y(k, p, _, M.value, S), M !== null && (e && M.alternate !== null && k.delete(M.key === null ? _ : M.key), h = o(M, h, _), P === null ? C = M : P.sibling = M, P = M);
      return e && k.forEach(function(fe) {
        return t(p, fe);
      }), ne && Nn(p, _), C;
    }
    function T(p, h, m, S) {
      if (typeof m == "object" && m !== null && m.type === mr && m.key === null && (m = m.props.children), typeof m == "object" && m !== null) {
        switch (m.$$typeof) {
          case po:
            e: {
              for (var C = m.key, P = h; P !== null; ) {
                if (P.key === C) {
                  if (C = m.type, C === mr) {
                    if (P.tag === 7) {
                      n(p, P.sibling), h = i(P, m.props.children), h.return = p, p = h;
                      break e;
                    }
                  } else if (P.elementType === C || typeof C == "object" && C !== null && C.$$typeof === tn && Td(C) === P.type) {
                    n(p, P.sibling), h = i(P, m.props), h.ref = ri(p, P, m), h.return = p, p = h;
                    break e;
                  }
                  n(p, P);
                  break;
                } else
                  t(p, P);
                P = P.sibling;
              }
              m.type === mr ? (h = Gn(m.props.children, p.mode, S, m.key), h.return = p, p = h) : (S = Ko(m.type, m.key, m.props, null, p.mode, S), S.ref = ri(p, h, m), S.return = p, p = S);
            }
            return s(p);
          case pr:
            e: {
              for (P = m.key; h !== null; ) {
                if (h.key === P)
                  if (h.tag === 4 && h.stateNode.containerInfo === m.containerInfo && h.stateNode.implementation === m.implementation) {
                    n(p, h.sibling), h = i(h, m.children || []), h.return = p, p = h;
                    break e;
                  } else {
                    n(p, h);
                    break;
                  }
                else
                  t(p, h);
                h = h.sibling;
              }
              h = qa(m, p.mode, S), h.return = p, p = h;
            }
            return s(p);
          case tn:
            return P = m._init, T(p, h, P(m._payload), S);
        }
        if (ui(m))
          return g(p, h, m, S);
        if (qr(m))
          return v(p, h, m, S);
        Co(p, m);
      }
      return typeof m == "string" && m !== "" || typeof m == "number" ? (m = "" + m, h !== null && h.tag === 6 ? (n(p, h.sibling), h = i(h, m), h.return = p, p = h) : (n(p, h), h = Za(m, p.mode, S), h.return = p, p = h), s(p)) : n(p, h);
    }
    return T;
  }
  var Ir = iy(!0), oy = iy(!1), no = {}, At = On(no), $i = On(no), Ii = On(no);
  function Bn(e) {
    if (e === no)
      throw Error(A(174));
    return e;
  }
  function dc(e, t) {
    switch (X(Ii, t), X($i, e), X(At, no), e = t.nodeType, e) {
      case 9:
      case 11:
        t = (t = t.documentElement) ? t.namespaceURI : jl(null, "");
        break;
      default:
        e = e === 8 ? t.parentNode : t, t = e.namespaceURI || null, e = e.tagName, t = jl(t, e);
    }
    J(At), X(At, t);
  }
  function zr() {
    J(At), J($i), J(Ii);
  }
  function sy(e) {
    Bn(Ii.current);
    var t = Bn(At.current), n = jl(t, e.type);
    t !== n && (X($i, e), X(At, n));
  }
  function hc(e) {
    $i.current === e && (J(At), J($i));
  }
  var re = On(0);
  function ps(e) {
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
  var Wa = [];
  function pc() {
    for (var e = 0; e < Wa.length; e++)
      Wa[e]._workInProgressVersionPrimary = null;
    Wa.length = 0;
  }
  var zo = Qt.ReactCurrentDispatcher, Ka = Qt.ReactCurrentBatchConfig, qn = 0, oe = null, he = null, ge = null, ms = !1, vi = !1, zi = 0, PS = 0;
  function _e() {
    throw Error(A(321));
  }
  function mc(e, t) {
    if (t === null)
      return !1;
    for (var n = 0; n < t.length && n < e.length; n++)
      if (!St(e[n], t[n]))
        return !1;
    return !0;
  }
  function yc(e, t, n, r, i, o) {
    if (qn = o, oe = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, zo.current = e === null || e.memoizedState === null ? AS : OS, e = n(r, i), vi) {
      o = 0;
      do {
        if (vi = !1, zi = 0, 25 <= o)
          throw Error(A(301));
        o += 1, ge = he = null, t.updateQueue = null, zo.current = jS, e = n(r, i);
      } while (vi);
    }
    if (zo.current = ys, t = he !== null && he.next !== null, qn = 0, ge = he = oe = null, ms = !1, t)
      throw Error(A(300));
    return e;
  }
  function gc() {
    var e = zi !== 0;
    return zi = 0, e;
  }
  function Pt() {
    var e = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
    return ge === null ? oe.memoizedState = ge = e : ge = ge.next = e, ge;
  }
  function ft() {
    if (he === null) {
      var e = oe.alternate;
      e = e !== null ? e.memoizedState : null;
    } else
      e = he.next;
    var t = ge === null ? oe.memoizedState : ge.next;
    if (t !== null)
      ge = t, he = e;
    else {
      if (e === null)
        throw Error(A(310));
      he = e, e = { memoizedState: he.memoizedState, baseState: he.baseState, baseQueue: he.baseQueue, queue: he.queue, next: null }, ge === null ? oe.memoizedState = ge = e : ge = ge.next = e;
    }
    return ge;
  }
  function Ui(e, t) {
    return typeof t == "function" ? t(e) : t;
  }
  function Ga(e) {
    var t = ft(), n = t.queue;
    if (n === null)
      throw Error(A(311));
    n.lastRenderedReducer = e;
    var r = he, i = r.baseQueue, o = n.pending;
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
          l === null ? (a = l = f, s = r) : l = l.next = f, oe.lanes |= c, Jn |= c;
        }
        u = u.next;
      } while (u !== null && u !== o);
      l === null ? s = r : l.next = a, St(r, t.memoizedState) || (ze = !0), t.memoizedState = r, t.baseState = s, t.baseQueue = l, n.lastRenderedState = r;
    }
    if (e = n.interleaved, e !== null) {
      i = e;
      do
        o = i.lane, oe.lanes |= o, Jn |= o, i = i.next;
      while (i !== e);
    } else
      i === null && (n.lanes = 0);
    return [t.memoizedState, n.dispatch];
  }
  function Ya(e) {
    var t = ft(), n = t.queue;
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
      St(o, t.memoizedState) || (ze = !0), t.memoizedState = o, t.baseQueue === null && (t.baseState = o), n.lastRenderedState = o;
    }
    return [o, r];
  }
  function ay() {
  }
  function ly(e, t) {
    var n = oe, r = ft(), i = t(), o = !St(r.memoizedState, i);
    if (o && (r.memoizedState = i, ze = !0), r = r.queue, vc(fy.bind(null, n, r, e), [e]), r.getSnapshot !== t || o || ge !== null && ge.memoizedState.tag & 1) {
      if (n.flags |= 2048, Bi(9, cy.bind(null, n, r, i, t), void 0, null), ve === null)
        throw Error(A(349));
      qn & 30 || uy(n, t, i);
    }
    return i;
  }
  function uy(e, t, n) {
    e.flags |= 16384, e = { getSnapshot: t, value: n }, t = oe.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, oe.updateQueue = t, t.stores = [e]) : (n = t.stores, n === null ? t.stores = [e] : n.push(e));
  }
  function cy(e, t, n, r) {
    t.value = n, t.getSnapshot = r, dy(t) && hy(e);
  }
  function fy(e, t, n) {
    return n(function() {
      dy(t) && hy(e);
    });
  }
  function dy(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
      var n = t();
      return !St(e, n);
    } catch {
      return !0;
    }
  }
  function hy(e) {
    var t = Gt(e, 1);
    t !== null && vt(t, e, 1, -1);
  }
  function Ed(e) {
    var t = Pt();
    return typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: Ui, lastRenderedState: e }, t.queue = e, e = e.dispatch = _S.bind(null, oe, e), [t.memoizedState, e];
  }
  function Bi(e, t, n, r) {
    return e = { tag: e, create: t, destroy: n, deps: r, next: null }, t = oe.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, oe.updateQueue = t, t.lastEffect = e.next = e) : (n = t.lastEffect, n === null ? t.lastEffect = e.next = e : (r = n.next, n.next = e, e.next = r, t.lastEffect = e)), e;
  }
  function py() {
    return ft().memoizedState;
  }
  function Uo(e, t, n, r) {
    var i = Pt();
    oe.flags |= e, i.memoizedState = Bi(1 | t, n, void 0, r === void 0 ? null : r);
  }
  function Hs(e, t, n, r) {
    var i = ft();
    r = r === void 0 ? null : r;
    var o = void 0;
    if (he !== null) {
      var s = he.memoizedState;
      if (o = s.destroy, r !== null && mc(r, s.deps)) {
        i.memoizedState = Bi(t, n, o, r);
        return;
      }
    }
    oe.flags |= e, i.memoizedState = Bi(1 | t, n, o, r);
  }
  function Pd(e, t) {
    return Uo(8390656, 8, e, t);
  }
  function vc(e, t) {
    return Hs(2048, 8, e, t);
  }
  function my(e, t) {
    return Hs(4, 2, e, t);
  }
  function yy(e, t) {
    return Hs(4, 4, e, t);
  }
  function gy(e, t) {
    if (typeof t == "function")
      return e = e(), t(e), function() {
        t(null);
      };
    if (t != null)
      return e = e(), t.current = e, function() {
        t.current = null;
      };
  }
  function vy(e, t, n) {
    return n = n != null ? n.concat([e]) : null, Hs(4, 4, gy.bind(null, t, e), n);
  }
  function Sc() {
  }
  function Sy(e, t) {
    var n = ft();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && mc(t, r[1]) ? r[0] : (n.memoizedState = [e, t], e);
  }
  function xy(e, t) {
    var n = ft();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && mc(t, r[1]) ? r[0] : (e = e(), n.memoizedState = [e, t], e);
  }
  function wy(e, t, n) {
    return qn & 21 ? (St(n, t) || (n = Pm(), oe.lanes |= n, Jn |= n, e.baseState = !0), t) : (e.baseState && (e.baseState = !1, ze = !0), e.memoizedState = n);
  }
  function CS(e, t) {
    var n = G;
    G = n !== 0 && 4 > n ? n : 4, e(!0);
    var r = Ka.transition;
    Ka.transition = {};
    try {
      e(!1), t();
    } finally {
      G = n, Ka.transition = r;
    }
  }
  function Ty() {
    return ft().memoizedState;
  }
  function kS(e, t, n) {
    var r = gn(e);
    if (n = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null }, Ey(e))
      Py(t, n);
    else if (n = ey(e, t, n, r), n !== null) {
      var i = Ne();
      vt(n, e, r, i), Cy(n, t, r);
    }
  }
  function _S(e, t, n) {
    var r = gn(e), i = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
    if (Ey(e))
      Py(t, i);
    else {
      var o = e.alternate;
      if (e.lanes === 0 && (o === null || o.lanes === 0) && (o = t.lastRenderedReducer, o !== null))
        try {
          var s = t.lastRenderedState, a = o(s, n);
          if (i.hasEagerState = !0, i.eagerState = a, St(a, s)) {
            var l = t.interleaved;
            l === null ? (i.next = i, cc(t)) : (i.next = l.next, l.next = i), t.interleaved = i;
            return;
          }
        } catch {
        } finally {
        }
      n = ey(e, t, i, r), n !== null && (i = Ne(), vt(n, e, r, i), Cy(n, t, r));
    }
  }
  function Ey(e) {
    var t = e.alternate;
    return e === oe || t !== null && t === oe;
  }
  function Py(e, t) {
    vi = ms = !0;
    var n = e.pending;
    n === null ? t.next = t : (t.next = n.next, n.next = t), e.pending = t;
  }
  function Cy(e, t, n) {
    if (n & 4194240) {
      var r = t.lanes;
      r &= e.pendingLanes, n |= r, t.lanes = n, Xu(e, n);
    }
  }
  var ys = { readContext: ct, useCallback: _e, useContext: _e, useEffect: _e, useImperativeHandle: _e, useInsertionEffect: _e, useLayoutEffect: _e, useMemo: _e, useReducer: _e, useRef: _e, useState: _e, useDebugValue: _e, useDeferredValue: _e, useTransition: _e, useMutableSource: _e, useSyncExternalStore: _e, useId: _e, unstable_isNewReconciler: !1 }, AS = { readContext: ct, useCallback: function(e, t) {
    return Pt().memoizedState = [e, t === void 0 ? null : t], e;
  }, useContext: ct, useEffect: Pd, useImperativeHandle: function(e, t, n) {
    return n = n != null ? n.concat([e]) : null, Uo(
      4194308,
      4,
      gy.bind(null, t, e),
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
    return t = n !== void 0 ? n(t) : t, r.memoizedState = r.baseState = t, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: e, lastRenderedState: t }, r.queue = e, e = e.dispatch = kS.bind(null, oe, e), [r.memoizedState, e];
  }, useRef: function(e) {
    var t = Pt();
    return e = { current: e }, t.memoizedState = e;
  }, useState: Ed, useDebugValue: Sc, useDeferredValue: function(e) {
    return Pt().memoizedState = e;
  }, useTransition: function() {
    var e = Ed(!1), t = e[0];
    return e = CS.bind(null, e[1]), Pt().memoizedState = e, [t, e];
  }, useMutableSource: function() {
  }, useSyncExternalStore: function(e, t, n) {
    var r = oe, i = Pt();
    if (ne) {
      if (n === void 0)
        throw Error(A(407));
      n = n();
    } else {
      if (n = t(), ve === null)
        throw Error(A(349));
      qn & 30 || uy(r, t, n);
    }
    i.memoizedState = n;
    var o = { value: n, getSnapshot: t };
    return i.queue = o, Pd(fy.bind(
      null,
      r,
      o,
      e
    ), [e]), r.flags |= 2048, Bi(9, cy.bind(null, r, o, n, t), void 0, null), n;
  }, useId: function() {
    var e = Pt(), t = ve.identifierPrefix;
    if (ne) {
      var n = Vt, r = Lt;
      n = (r & ~(1 << 32 - gt(r) - 1)).toString(32) + n, t = ":" + t + "R" + n, n = zi++, 0 < n && (t += "H" + n.toString(32)), t += ":";
    } else
      n = PS++, t = ":" + t + "r" + n.toString(32) + ":";
    return e.memoizedState = t;
  }, unstable_isNewReconciler: !1 }, OS = {
    readContext: ct,
    useCallback: Sy,
    useContext: ct,
    useEffect: vc,
    useImperativeHandle: vy,
    useInsertionEffect: my,
    useLayoutEffect: yy,
    useMemo: xy,
    useReducer: Ga,
    useRef: py,
    useState: function() {
      return Ga(Ui);
    },
    useDebugValue: Sc,
    useDeferredValue: function(e) {
      var t = ft();
      return wy(t, he.memoizedState, e);
    },
    useTransition: function() {
      var e = Ga(Ui)[0], t = ft().memoizedState;
      return [e, t];
    },
    useMutableSource: ay,
    useSyncExternalStore: ly,
    useId: Ty,
    unstable_isNewReconciler: !1
  }, jS = { readContext: ct, useCallback: Sy, useContext: ct, useEffect: vc, useImperativeHandle: vy, useInsertionEffect: my, useLayoutEffect: yy, useMemo: xy, useReducer: Ya, useRef: py, useState: function() {
    return Ya(Ui);
  }, useDebugValue: Sc, useDeferredValue: function(e) {
    var t = ft();
    return he === null ? t.memoizedState = e : wy(t, he.memoizedState, e);
  }, useTransition: function() {
    var e = Ya(Ui)[0], t = ft().memoizedState;
    return [e, t];
  }, useMutableSource: ay, useSyncExternalStore: ly, useId: Ty, unstable_isNewReconciler: !1 };
  function Ur(e, t) {
    try {
      var n = "", r = t;
      do
        n += i1(r), r = r.return;
      while (r);
      var i = n;
    } catch (o) {
      i = `
Error generating stack: ` + o.message + `
` + o.stack;
    }
    return { value: e, source: t, stack: i, digest: null };
  }
  function Qa(e, t, n) {
    return { value: e, source: null, stack: n ?? null, digest: t ?? null };
  }
  function Jl(e, t) {
    try {
      console.error(t.value);
    } catch (n) {
      setTimeout(function() {
        throw n;
      });
    }
  }
  var FS = typeof WeakMap == "function" ? WeakMap : Map;
  function ky(e, t, n) {
    n = zt(-1, n), n.tag = 3, n.payload = { element: null };
    var r = t.value;
    return n.callback = function() {
      vs || (vs = !0, uu = r), Jl(e, t);
    }, n;
  }
  function _y(e, t, n) {
    n = zt(-1, n), n.tag = 3;
    var r = e.type.getDerivedStateFromError;
    if (typeof r == "function") {
      var i = t.value;
      n.payload = function() {
        return r(i);
      }, n.callback = function() {
        Jl(e, t);
      };
    }
    var o = e.stateNode;
    return o !== null && typeof o.componentDidCatch == "function" && (n.callback = function() {
      Jl(e, t), typeof r != "function" && (yn === null ? yn = /* @__PURE__ */ new Set([this]) : yn.add(this));
      var s = t.stack;
      this.componentDidCatch(t.value, { componentStack: s !== null ? s : "" });
    }), n;
  }
  function Cd(e, t, n) {
    var r = e.pingCache;
    if (r === null) {
      r = e.pingCache = new FS();
      var i = /* @__PURE__ */ new Set();
      r.set(t, i);
    } else
      i = r.get(t), i === void 0 && (i = /* @__PURE__ */ new Set(), r.set(t, i));
    i.has(n) || (i.add(n), e = WS.bind(null, e, t, n), t.then(e, e));
  }
  function kd(e) {
    do {
      var t;
      if ((t = e.tag === 13) && (t = e.memoizedState, t = t !== null ? t.dehydrated !== null : !0), t)
        return e;
      e = e.return;
    } while (e !== null);
    return null;
  }
  function _d(e, t, n, r, i) {
    return e.mode & 1 ? (e.flags |= 65536, e.lanes = i, e) : (e === t ? e.flags |= 65536 : (e.flags |= 128, n.flags |= 131072, n.flags &= -52805, n.tag === 1 && (n.alternate === null ? n.tag = 17 : (t = zt(-1, 1), t.tag = 2, mn(n, t, 1))), n.lanes |= 1), e);
  }
  var RS = Qt.ReactCurrentOwner, ze = !1;
  function Me(e, t, n, r) {
    t.child = e === null ? oy(t, null, n, r) : Ir(t, e.child, n, r);
  }
  function Ad(e, t, n, r, i) {
    n = n.render;
    var o = t.ref;
    return Nr(t, i), r = yc(e, t, n, r, o, i), n = gc(), e !== null && !ze ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~i, Yt(e, t, i)) : (ne && n && ic(t), t.flags |= 1, Me(e, t, r, i), t.child);
  }
  function Od(e, t, n, r, i) {
    if (e === null) {
      var o = n.type;
      return typeof o == "function" && !_c(o) && o.defaultProps === void 0 && n.compare === null && n.defaultProps === void 0 ? (t.tag = 15, t.type = o, Ay(e, t, o, r, i)) : (e = Ko(n.type, null, r, t, t.mode, i), e.ref = t.ref, e.return = t, t.child = e);
    }
    if (o = e.child, !(e.lanes & i)) {
      var s = o.memoizedProps;
      if (n = n.compare, n = n !== null ? n : Ni, n(s, r) && e.ref === t.ref)
        return Yt(e, t, i);
    }
    return t.flags |= 1, e = vn(o, r), e.ref = t.ref, e.return = t, t.child = e;
  }
  function Ay(e, t, n, r, i) {
    if (e !== null) {
      var o = e.memoizedProps;
      if (Ni(o, r) && e.ref === t.ref)
        if (ze = !1, t.pendingProps = r = o, (e.lanes & i) !== 0)
          e.flags & 131072 && (ze = !0);
        else
          return t.lanes = e.lanes, Yt(e, t, i);
    }
    return eu(e, t, n, r, i);
  }
  function Oy(e, t, n) {
    var r = t.pendingProps, i = r.children, o = e !== null ? e.memoizedState : null;
    if (r.mode === "hidden")
      if (!(t.mode & 1))
        t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, X(Cr, We), We |= n;
      else {
        if (!(n & 1073741824))
          return e = o !== null ? o.baseLanes | n : n, t.lanes = t.childLanes = 1073741824, t.memoizedState = { baseLanes: e, cachePool: null, transitions: null }, t.updateQueue = null, X(Cr, We), We |= e, null;
        t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, r = o !== null ? o.baseLanes : n, X(Cr, We), We |= r;
      }
    else
      o !== null ? (r = o.baseLanes | n, t.memoizedState = null) : r = n, X(Cr, We), We |= r;
    return Me(e, t, i, n), t.child;
  }
  function jy(e, t) {
    var n = t.ref;
    (e === null && n !== null || e !== null && e.ref !== n) && (t.flags |= 512, t.flags |= 2097152);
  }
  function eu(e, t, n, r, i) {
    var o = Be(n) ? Xn : De.current;
    return o = Vr(t, o), Nr(t, i), n = yc(e, t, n, r, o, i), r = gc(), e !== null && !ze ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~i, Yt(e, t, i)) : (ne && r && ic(t), t.flags |= 1, Me(e, t, n, i), t.child);
  }
  function jd(e, t, n, r, i) {
    if (Be(n)) {
      var o = !0;
      ls(t);
    } else
      o = !1;
    if (Nr(t, i), t.stateNode === null)
      Bo(e, t), ry(t, n, r), ql(t, n, r, i), r = !0;
    else if (e === null) {
      var s = t.stateNode, a = t.memoizedProps;
      s.props = a;
      var l = s.context, u = n.contextType;
      typeof u == "object" && u !== null ? u = ct(u) : (u = Be(n) ? Xn : De.current, u = Vr(t, u));
      var c = n.getDerivedStateFromProps, f = typeof c == "function" || typeof s.getSnapshotBeforeUpdate == "function";
      f || typeof s.UNSAFE_componentWillReceiveProps != "function" && typeof s.componentWillReceiveProps != "function" || (a !== r || l !== u) && wd(t, s, r, u), nn = !1;
      var d = t.memoizedState;
      s.state = d, hs(t, r, s, i), l = t.memoizedState, a !== r || d !== l || Ue.current || nn ? (typeof c == "function" && (Zl(t, n, c, r), l = t.memoizedState), (a = nn || xd(t, n, a, r, d, l, u)) ? (f || typeof s.UNSAFE_componentWillMount != "function" && typeof s.componentWillMount != "function" || (typeof s.componentWillMount == "function" && s.componentWillMount(), typeof s.UNSAFE_componentWillMount == "function" && s.UNSAFE_componentWillMount()), typeof s.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof s.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = r, t.memoizedState = l), s.props = r, s.state = l, s.context = u, r = a) : (typeof s.componentDidMount == "function" && (t.flags |= 4194308), r = !1);
    } else {
      s = t.stateNode, ty(e, t), a = t.memoizedProps, u = t.type === t.elementType ? a : pt(t.type, a), s.props = u, f = t.pendingProps, d = s.context, l = n.contextType, typeof l == "object" && l !== null ? l = ct(l) : (l = Be(n) ? Xn : De.current, l = Vr(t, l));
      var y = n.getDerivedStateFromProps;
      (c = typeof y == "function" || typeof s.getSnapshotBeforeUpdate == "function") || typeof s.UNSAFE_componentWillReceiveProps != "function" && typeof s.componentWillReceiveProps != "function" || (a !== f || d !== l) && wd(t, s, r, l), nn = !1, d = t.memoizedState, s.state = d, hs(t, r, s, i);
      var g = t.memoizedState;
      a !== f || d !== g || Ue.current || nn ? (typeof y == "function" && (Zl(t, n, y, r), g = t.memoizedState), (u = nn || xd(t, n, u, r, d, g, l) || !1) ? (c || typeof s.UNSAFE_componentWillUpdate != "function" && typeof s.componentWillUpdate != "function" || (typeof s.componentWillUpdate == "function" && s.componentWillUpdate(r, g, l), typeof s.UNSAFE_componentWillUpdate == "function" && s.UNSAFE_componentWillUpdate(r, g, l)), typeof s.componentDidUpdate == "function" && (t.flags |= 4), typeof s.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof s.componentDidUpdate != "function" || a === e.memoizedProps && d === e.memoizedState || (t.flags |= 4), typeof s.getSnapshotBeforeUpdate != "function" || a === e.memoizedProps && d === e.memoizedState || (t.flags |= 1024), t.memoizedProps = r, t.memoizedState = g), s.props = r, s.state = g, s.context = l, r = u) : (typeof s.componentDidUpdate != "function" || a === e.memoizedProps && d === e.memoizedState || (t.flags |= 4), typeof s.getSnapshotBeforeUpdate != "function" || a === e.memoizedProps && d === e.memoizedState || (t.flags |= 1024), r = !1);
    }
    return tu(e, t, n, r, o, i);
  }
  function tu(e, t, n, r, i, o) {
    jy(e, t);
    var s = (t.flags & 128) !== 0;
    if (!r && !s)
      return i && md(t, n, !1), Yt(e, t, o);
    r = t.stateNode, RS.current = t;
    var a = s && typeof n.getDerivedStateFromError != "function" ? null : r.render();
    return t.flags |= 1, e !== null && s ? (t.child = Ir(t, e.child, null, o), t.child = Ir(t, null, a, o)) : Me(e, t, a, o), t.memoizedState = r.state, i && md(t, n, !0), t.child;
  }
  function Fy(e) {
    var t = e.stateNode;
    t.pendingContext ? pd(e, t.pendingContext, t.pendingContext !== t.context) : t.context && pd(e, t.context, !1), dc(e, t.containerInfo);
  }
  function Fd(e, t, n, r, i) {
    return $r(), sc(i), t.flags |= 256, Me(e, t, n, r), t.child;
  }
  var nu = { dehydrated: null, treeContext: null, retryLane: 0 };
  function ru(e) {
    return { baseLanes: e, cachePool: null, transitions: null };
  }
  function Ry(e, t, n) {
    var r = t.pendingProps, i = re.current, o = !1, s = (t.flags & 128) !== 0, a;
    if ((a = s) || (a = e !== null && e.memoizedState === null ? !1 : (i & 2) !== 0), a ? (o = !0, t.flags &= -129) : (e === null || e.memoizedState !== null) && (i |= 1), X(re, i & 1), e === null)
      return Ql(t), e = t.memoizedState, e !== null && (e = e.dehydrated, e !== null) ? (t.mode & 1 ? e.data === "$!" ? t.lanes = 8 : t.lanes = 1073741824 : t.lanes = 1, null) : (s = r.children, e = r.fallback, o ? (r = t.mode, o = t.child, s = { mode: "hidden", children: s }, !(r & 1) && o !== null ? (o.childLanes = 0, o.pendingProps = s) : o = Gs(s, r, 0, null), e = Gn(e, r, n, null), o.return = t, e.return = t, o.sibling = e, t.child = o, t.child.memoizedState = ru(n), t.memoizedState = nu, e) : xc(t, s));
    if (i = e.memoizedState, i !== null && (a = i.dehydrated, a !== null))
      return DS(e, t, s, r, a, i, n);
    if (o) {
      o = r.fallback, s = t.mode, i = e.child, a = i.sibling;
      var l = { mode: "hidden", children: r.children };
      return !(s & 1) && t.child !== i ? (r = t.child, r.childLanes = 0, r.pendingProps = l, t.deletions = null) : (r = vn(i, l), r.subtreeFlags = i.subtreeFlags & 14680064), a !== null ? o = vn(a, o) : (o = Gn(o, s, n, null), o.flags |= 2), o.return = t, r.return = t, r.sibling = o, t.child = r, r = o, o = t.child, s = e.child.memoizedState, s = s === null ? ru(n) : { baseLanes: s.baseLanes | n, cachePool: null, transitions: s.transitions }, o.memoizedState = s, o.childLanes = e.childLanes & ~n, t.memoizedState = nu, r;
    }
    return o = e.child, e = o.sibling, r = vn(o, { mode: "visible", children: r.children }), !(t.mode & 1) && (r.lanes = n), r.return = t, r.sibling = null, e !== null && (n = t.deletions, n === null ? (t.deletions = [e], t.flags |= 16) : n.push(e)), t.child = r, t.memoizedState = null, r;
  }
  function xc(e, t) {
    return t = Gs({ mode: "visible", children: t }, e.mode, 0, null), t.return = e, e.child = t;
  }
  function ko(e, t, n, r) {
    return r !== null && sc(r), Ir(t, e.child, null, n), e = xc(t, t.pendingProps.children), e.flags |= 2, t.memoizedState = null, e;
  }
  function DS(e, t, n, r, i, o, s) {
    if (n)
      return t.flags & 256 ? (t.flags &= -257, r = Qa(Error(A(422))), ko(e, t, s, r)) : t.memoizedState !== null ? (t.child = e.child, t.flags |= 128, null) : (o = r.fallback, i = t.mode, r = Gs({ mode: "visible", children: r.children }, i, 0, null), o = Gn(o, i, s, null), o.flags |= 2, r.return = t, o.return = t, r.sibling = o, t.child = r, t.mode & 1 && Ir(t, e.child, null, s), t.child.memoizedState = ru(s), t.memoizedState = nu, o);
    if (!(t.mode & 1))
      return ko(e, t, s, null);
    if (i.data === "$!") {
      if (r = i.nextSibling && i.nextSibling.dataset, r)
        var a = r.dgst;
      return r = a, o = Error(A(419)), r = Qa(o, r, void 0), ko(e, t, s, r);
    }
    if (a = (s & e.childLanes) !== 0, ze || a) {
      if (r = ve, r !== null) {
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
        i = i & (r.suspendedLanes | s) ? 0 : i, i !== 0 && i !== o.retryLane && (o.retryLane = i, Gt(e, i), vt(r, e, i, -1));
      }
      return kc(), r = Qa(Error(A(421))), ko(e, t, s, r);
    }
    return i.data === "$?" ? (t.flags |= 128, t.child = e.child, t = KS.bind(null, e), i._reactRetry = t, null) : (e = o.treeContext, Ke = pn(i.nextSibling), Qe = t, ne = !0, yt = null, e !== null && (st[at++] = Lt, st[at++] = Vt, st[at++] = Zn, Lt = e.id, Vt = e.overflow, Zn = t), t = xc(t, r.children), t.flags |= 4096, t);
  }
  function Rd(e, t, n) {
    e.lanes |= t;
    var r = e.alternate;
    r !== null && (r.lanes |= t), Xl(e.return, t, n);
  }
  function Xa(e, t, n, r, i) {
    var o = e.memoizedState;
    o === null ? e.memoizedState = { isBackwards: t, rendering: null, renderingStartTime: 0, last: r, tail: n, tailMode: i } : (o.isBackwards = t, o.rendering = null, o.renderingStartTime = 0, o.last = r, o.tail = n, o.tailMode = i);
  }
  function Dy(e, t, n) {
    var r = t.pendingProps, i = r.revealOrder, o = r.tail;
    if (Me(e, t, r.children, n), r = re.current, r & 2)
      r = r & 1 | 2, t.flags |= 128;
    else {
      if (e !== null && e.flags & 128)
        e:
          for (e = t.child; e !== null; ) {
            if (e.tag === 13)
              e.memoizedState !== null && Rd(e, n, t);
            else if (e.tag === 19)
              Rd(e, n, t);
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
    if (X(re, r), !(t.mode & 1))
      t.memoizedState = null;
    else
      switch (i) {
        case "forwards":
          for (n = t.child, i = null; n !== null; )
            e = n.alternate, e !== null && ps(e) === null && (i = n), n = n.sibling;
          n = i, n === null ? (i = t.child, t.child = null) : (i = n.sibling, n.sibling = null), Xa(t, !1, i, n, o);
          break;
        case "backwards":
          for (n = null, i = t.child, t.child = null; i !== null; ) {
            if (e = i.alternate, e !== null && ps(e) === null) {
              t.child = i;
              break;
            }
            e = i.sibling, i.sibling = n, n = i, i = e;
          }
          Xa(t, !0, n, null, o);
          break;
        case "together":
          Xa(t, !1, null, null, void 0);
          break;
        default:
          t.memoizedState = null;
      }
    return t.child;
  }
  function Bo(e, t) {
    !(t.mode & 1) && e !== null && (e.alternate = null, t.alternate = null, t.flags |= 2);
  }
  function Yt(e, t, n) {
    if (e !== null && (t.dependencies = e.dependencies), Jn |= t.lanes, !(n & t.childLanes))
      return null;
    if (e !== null && t.child !== e.child)
      throw Error(A(153));
    if (t.child !== null) {
      for (e = t.child, n = vn(e, e.pendingProps), t.child = n, n.return = t; e.sibling !== null; )
        e = e.sibling, n = n.sibling = vn(e, e.pendingProps), n.return = t;
      n.sibling = null;
    }
    return t.child;
  }
  function MS(e, t, n) {
    switch (t.tag) {
      case 3:
        Fy(t), $r();
        break;
      case 5:
        sy(t);
        break;
      case 1:
        Be(t.type) && ls(t);
        break;
      case 4:
        dc(t, t.stateNode.containerInfo);
        break;
      case 10:
        var r = t.type._context, i = t.memoizedProps.value;
        X(fs, r._currentValue), r._currentValue = i;
        break;
      case 13:
        if (r = t.memoizedState, r !== null)
          return r.dehydrated !== null ? (X(re, re.current & 1), t.flags |= 128, null) : n & t.child.childLanes ? Ry(e, t, n) : (X(re, re.current & 1), e = Yt(e, t, n), e !== null ? e.sibling : null);
        X(re, re.current & 1);
        break;
      case 19:
        if (r = (n & t.childLanes) !== 0, e.flags & 128) {
          if (r)
            return Dy(e, t, n);
          t.flags |= 128;
        }
        if (i = t.memoizedState, i !== null && (i.rendering = null, i.tail = null, i.lastEffect = null), X(re, re.current), r)
          break;
        return null;
      case 22:
      case 23:
        return t.lanes = 0, Oy(e, t, n);
    }
    return Yt(e, t, n);
  }
  var My, iu, Ny, by;
  My = function(e, t) {
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
  iu = function() {
  };
  Ny = function(e, t, n, r) {
    var i = e.memoizedProps;
    if (i !== r) {
      e = t.stateNode, Bn(At.current);
      var o = null;
      switch (n) {
        case "input":
          i = kl(e, i), r = kl(e, r), o = [];
          break;
        case "select":
          i = se({}, i, { value: void 0 }), r = se({}, r, { value: void 0 }), o = [];
          break;
        case "textarea":
          i = Ol(e, i), r = Ol(e, r), o = [];
          break;
        default:
          typeof i.onClick != "function" && typeof r.onClick == "function" && (e.onclick = ss);
      }
      Fl(n, r);
      var s;
      n = null;
      for (u in i)
        if (!r.hasOwnProperty(u) && i.hasOwnProperty(u) && i[u] != null)
          if (u === "style") {
            var a = i[u];
            for (s in a)
              a.hasOwnProperty(s) && (n || (n = {}), n[s] = "");
          } else
            u !== "dangerouslySetInnerHTML" && u !== "children" && u !== "suppressContentEditableWarning" && u !== "suppressHydrationWarning" && u !== "autoFocus" && (Ai.hasOwnProperty(u) ? o || (o = []) : (o = o || []).push(u, null));
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
            u === "dangerouslySetInnerHTML" ? (l = l ? l.__html : void 0, a = a ? a.__html : void 0, l != null && a !== l && (o = o || []).push(u, l)) : u === "children" ? typeof l != "string" && typeof l != "number" || (o = o || []).push(u, "" + l) : u !== "suppressContentEditableWarning" && u !== "suppressHydrationWarning" && (Ai.hasOwnProperty(u) ? (l != null && u === "onScroll" && Z("scroll", e), o || a === l || (o = [])) : (o = o || []).push(u, l));
      }
      n && (o = o || []).push("style", n);
      var u = o;
      (t.updateQueue = u) && (t.flags |= 4);
    }
  };
  by = function(e, t, n, r) {
    n !== r && (t.flags |= 4);
  };
  function ii(e, t) {
    if (!ne)
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
  function Ae(e) {
    var t = e.alternate !== null && e.alternate.child === e.child, n = 0, r = 0;
    if (t)
      for (var i = e.child; i !== null; )
        n |= i.lanes | i.childLanes, r |= i.subtreeFlags & 14680064, r |= i.flags & 14680064, i.return = e, i = i.sibling;
    else
      for (i = e.child; i !== null; )
        n |= i.lanes | i.childLanes, r |= i.subtreeFlags, r |= i.flags, i.return = e, i = i.sibling;
    return e.subtreeFlags |= r, e.childLanes = n, t;
  }
  function NS(e, t, n) {
    var r = t.pendingProps;
    switch (oc(t), t.tag) {
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
        return Ae(t), null;
      case 1:
        return Be(t.type) && as(), Ae(t), null;
      case 3:
        return r = t.stateNode, zr(), J(Ue), J(De), pc(), r.pendingContext && (r.context = r.pendingContext, r.pendingContext = null), (e === null || e.child === null) && (Po(t) ? t.flags |= 4 : e === null || e.memoizedState.isDehydrated && !(t.flags & 256) || (t.flags |= 1024, yt !== null && (du(yt), yt = null))), iu(e, t), Ae(t), null;
      case 5:
        hc(t);
        var i = Bn(Ii.current);
        if (n = t.type, e !== null && t.stateNode != null)
          Ny(e, t, n, r, i), e.ref !== t.ref && (t.flags |= 512, t.flags |= 2097152);
        else {
          if (!r) {
            if (t.stateNode === null)
              throw Error(A(166));
            return Ae(t), null;
          }
          if (e = Bn(At.current), Po(t)) {
            r = t.stateNode, n = t.type;
            var o = t.memoizedProps;
            switch (r[kt] = t, r[Vi] = o, e = (t.mode & 1) !== 0, n) {
              case "dialog":
                Z("cancel", r), Z("close", r);
                break;
              case "iframe":
              case "object":
              case "embed":
                Z("load", r);
                break;
              case "video":
              case "audio":
                for (i = 0; i < fi.length; i++)
                  Z(fi[i], r);
                break;
              case "source":
                Z("error", r);
                break;
              case "img":
              case "image":
              case "link":
                Z(
                  "error",
                  r
                ), Z("load", r);
                break;
              case "details":
                Z("toggle", r);
                break;
              case "input":
                zf(r, o), Z("invalid", r);
                break;
              case "select":
                r._wrapperState = { wasMultiple: !!o.multiple }, Z("invalid", r);
                break;
              case "textarea":
                Bf(r, o), Z("invalid", r);
            }
            Fl(n, o), i = null;
            for (var s in o)
              if (o.hasOwnProperty(s)) {
                var a = o[s];
                s === "children" ? typeof a == "string" ? r.textContent !== a && (o.suppressHydrationWarning !== !0 && Eo(r.textContent, a, e), i = ["children", a]) : typeof a == "number" && r.textContent !== "" + a && (o.suppressHydrationWarning !== !0 && Eo(
                  r.textContent,
                  a,
                  e
                ), i = ["children", "" + a]) : Ai.hasOwnProperty(s) && a != null && s === "onScroll" && Z("scroll", r);
              }
            switch (n) {
              case "input":
                mo(r), Uf(r, o, !0);
                break;
              case "textarea":
                mo(r), Hf(r);
                break;
              case "select":
              case "option":
                break;
              default:
                typeof o.onClick == "function" && (r.onclick = ss);
            }
            r = i, t.updateQueue = r, r !== null && (t.flags |= 4);
          } else {
            s = i.nodeType === 9 ? i : i.ownerDocument, e === "http://www.w3.org/1999/xhtml" && (e = um(n)), e === "http://www.w3.org/1999/xhtml" ? n === "script" ? (e = s.createElement("div"), e.innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild)) : typeof r.is == "string" ? e = s.createElement(n, { is: r.is }) : (e = s.createElement(n), n === "select" && (s = e, r.multiple ? s.multiple = !0 : r.size && (s.size = r.size))) : e = s.createElementNS(e, n), e[kt] = t, e[Vi] = r, My(e, t, !1, !1), t.stateNode = e;
            e: {
              switch (s = Rl(n, r), n) {
                case "dialog":
                  Z("cancel", e), Z("close", e), i = r;
                  break;
                case "iframe":
                case "object":
                case "embed":
                  Z("load", e), i = r;
                  break;
                case "video":
                case "audio":
                  for (i = 0; i < fi.length; i++)
                    Z(fi[i], e);
                  i = r;
                  break;
                case "source":
                  Z("error", e), i = r;
                  break;
                case "img":
                case "image":
                case "link":
                  Z(
                    "error",
                    e
                  ), Z("load", e), i = r;
                  break;
                case "details":
                  Z("toggle", e), i = r;
                  break;
                case "input":
                  zf(e, r), i = kl(e, r), Z("invalid", e);
                  break;
                case "option":
                  i = r;
                  break;
                case "select":
                  e._wrapperState = { wasMultiple: !!r.multiple }, i = se({}, r, { value: void 0 }), Z("invalid", e);
                  break;
                case "textarea":
                  Bf(e, r), i = Ol(e, r), Z("invalid", e);
                  break;
                default:
                  i = r;
              }
              Fl(n, i), a = i;
              for (o in a)
                if (a.hasOwnProperty(o)) {
                  var l = a[o];
                  o === "style" ? dm(e, l) : o === "dangerouslySetInnerHTML" ? (l = l ? l.__html : void 0, l != null && cm(e, l)) : o === "children" ? typeof l == "string" ? (n !== "textarea" || l !== "") && Oi(e, l) : typeof l == "number" && Oi(e, "" + l) : o !== "suppressContentEditableWarning" && o !== "suppressHydrationWarning" && o !== "autoFocus" && (Ai.hasOwnProperty(o) ? l != null && o === "onScroll" && Z("scroll", e) : l != null && Hu(e, o, l, s));
                }
              switch (n) {
                case "input":
                  mo(e), Uf(e, r, !1);
                  break;
                case "textarea":
                  mo(e), Hf(e);
                  break;
                case "option":
                  r.value != null && e.setAttribute("value", "" + Tn(r.value));
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
                  typeof i.onClick == "function" && (e.onclick = ss);
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
        return Ae(t), null;
      case 6:
        if (e && t.stateNode != null)
          by(e, t, e.memoizedProps, r);
        else {
          if (typeof r != "string" && t.stateNode === null)
            throw Error(A(166));
          if (n = Bn(Ii.current), Bn(At.current), Po(t)) {
            if (r = t.stateNode, n = t.memoizedProps, r[kt] = t, (o = r.nodeValue !== n) && (e = Qe, e !== null))
              switch (e.tag) {
                case 3:
                  Eo(r.nodeValue, n, (e.mode & 1) !== 0);
                  break;
                case 5:
                  e.memoizedProps.suppressHydrationWarning !== !0 && Eo(r.nodeValue, n, (e.mode & 1) !== 0);
              }
            o && (t.flags |= 4);
          } else
            r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r), r[kt] = t, t.stateNode = r;
        }
        return Ae(t), null;
      case 13:
        if (J(re), r = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
          if (ne && Ke !== null && t.mode & 1 && !(t.flags & 128))
            Jm(), $r(), t.flags |= 98560, o = !1;
          else if (o = Po(t), r !== null && r.dehydrated !== null) {
            if (e === null) {
              if (!o)
                throw Error(A(318));
              if (o = t.memoizedState, o = o !== null ? o.dehydrated : null, !o)
                throw Error(A(317));
              o[kt] = t;
            } else
              $r(), !(t.flags & 128) && (t.memoizedState = null), t.flags |= 4;
            Ae(t), o = !1;
          } else
            yt !== null && (du(yt), yt = null), o = !0;
          if (!o)
            return t.flags & 65536 ? t : null;
        }
        return t.flags & 128 ? (t.lanes = n, t) : (r = r !== null, r !== (e !== null && e.memoizedState !== null) && r && (t.child.flags |= 8192, t.mode & 1 && (e === null || re.current & 1 ? pe === 0 && (pe = 3) : kc())), t.updateQueue !== null && (t.flags |= 4), Ae(t), null);
      case 4:
        return zr(), iu(e, t), e === null && bi(t.stateNode.containerInfo), Ae(t), null;
      case 10:
        return uc(t.type._context), Ae(t), null;
      case 17:
        return Be(t.type) && as(), Ae(t), null;
      case 19:
        if (J(re), o = t.memoizedState, o === null)
          return Ae(t), null;
        if (r = (t.flags & 128) !== 0, s = o.rendering, s === null)
          if (r)
            ii(o, !1);
          else {
            if (pe !== 0 || e !== null && e.flags & 128)
              for (e = t.child; e !== null; ) {
                if (s = ps(e), s !== null) {
                  for (t.flags |= 128, ii(o, !1), r = s.updateQueue, r !== null && (t.updateQueue = r, t.flags |= 4), t.subtreeFlags = 0, r = n, n = t.child; n !== null; )
                    o = n, e = r, o.flags &= 14680066, s = o.alternate, s === null ? (o.childLanes = 0, o.lanes = e, o.child = null, o.subtreeFlags = 0, o.memoizedProps = null, o.memoizedState = null, o.updateQueue = null, o.dependencies = null, o.stateNode = null) : (o.childLanes = s.childLanes, o.lanes = s.lanes, o.child = s.child, o.subtreeFlags = 0, o.deletions = null, o.memoizedProps = s.memoizedProps, o.memoizedState = s.memoizedState, o.updateQueue = s.updateQueue, o.type = s.type, e = s.dependencies, o.dependencies = e === null ? null : { lanes: e.lanes, firstContext: e.firstContext }), n = n.sibling;
                  return X(re, re.current & 1 | 2), t.child;
                }
                e = e.sibling;
              }
            o.tail !== null && ce() > Br && (t.flags |= 128, r = !0, ii(o, !1), t.lanes = 4194304);
          }
        else {
          if (!r)
            if (e = ps(s), e !== null) {
              if (t.flags |= 128, r = !0, n = e.updateQueue, n !== null && (t.updateQueue = n, t.flags |= 4), ii(o, !0), o.tail === null && o.tailMode === "hidden" && !s.alternate && !ne)
                return Ae(t), null;
            } else
              2 * ce() - o.renderingStartTime > Br && n !== 1073741824 && (t.flags |= 128, r = !0, ii(o, !1), t.lanes = 4194304);
          o.isBackwards ? (s.sibling = t.child, t.child = s) : (n = o.last, n !== null ? n.sibling = s : t.child = s, o.last = s);
        }
        return o.tail !== null ? (t = o.tail, o.rendering = t, o.tail = t.sibling, o.renderingStartTime = ce(), t.sibling = null, n = re.current, X(re, r ? n & 1 | 2 : n & 1), t) : (Ae(t), null);
      case 22:
      case 23:
        return Cc(), r = t.memoizedState !== null, e !== null && e.memoizedState !== null !== r && (t.flags |= 8192), r && t.mode & 1 ? We & 1073741824 && (Ae(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : Ae(t), null;
      case 24:
        return null;
      case 25:
        return null;
    }
    throw Error(A(156, t.tag));
  }
  function bS(e, t) {
    switch (oc(t), t.tag) {
      case 1:
        return Be(t.type) && as(), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 3:
        return zr(), J(Ue), J(De), pc(), e = t.flags, e & 65536 && !(e & 128) ? (t.flags = e & -65537 | 128, t) : null;
      case 5:
        return hc(t), null;
      case 13:
        if (J(re), e = t.memoizedState, e !== null && e.dehydrated !== null) {
          if (t.alternate === null)
            throw Error(A(340));
          $r();
        }
        return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 19:
        return J(re), null;
      case 4:
        return zr(), null;
      case 10:
        return uc(t.type._context), null;
      case 22:
      case 23:
        return Cc(), null;
      case 24:
        return null;
      default:
        return null;
    }
  }
  var _o = !1, je = !1, LS = typeof WeakSet == "function" ? WeakSet : Set, R = null;
  function Pr(e, t) {
    var n = e.ref;
    if (n !== null)
      if (typeof n == "function")
        try {
          n(null);
        } catch (r) {
          le(e, t, r);
        }
      else
        n.current = null;
  }
  function ou(e, t, n) {
    try {
      n();
    } catch (r) {
      le(e, t, r);
    }
  }
  var Dd = !1;
  function VS(e, t) {
    if (Ul = rs, e = Im(), rc(e)) {
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
                for (var y; f !== n || i !== 0 && f.nodeType !== 3 || (a = s + i), f !== o || r !== 0 && f.nodeType !== 3 || (l = s + r), f.nodeType === 3 && (s += f.nodeValue.length), (y = f.firstChild) !== null; )
                  d = f, f = y;
                for (; ; ) {
                  if (f === e)
                    break t;
                  if (d === n && ++u === i && (a = s), d === o && ++c === r && (l = s), (y = f.nextSibling) !== null)
                    break;
                  f = d, d = f.parentNode;
                }
                f = y;
              }
            n = a === -1 || l === -1 ? null : { start: a, end: l };
          } else
            n = null;
        }
      n = n || { start: 0, end: 0 };
    } else
      n = null;
    for (Bl = { focusedElem: e, selectionRange: n }, rs = !1, R = t; R !== null; )
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
                    var v = g.memoizedProps, T = g.memoizedState, p = t.stateNode, h = p.getSnapshotBeforeUpdate(t.elementType === t.type ? v : pt(t.type, v), T);
                    p.__reactInternalSnapshotBeforeUpdate = h;
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
            le(t, t.return, S);
          }
          if (e = t.sibling, e !== null) {
            e.return = t.return, R = e;
            break;
          }
          R = t.return;
        }
    return g = Dd, Dd = !1, g;
  }
  function Si(e, t, n) {
    var r = t.updateQueue;
    if (r = r !== null ? r.lastEffect : null, r !== null) {
      var i = r = r.next;
      do {
        if ((i.tag & e) === e) {
          var o = i.destroy;
          i.destroy = void 0, o !== void 0 && ou(t, n, o);
        }
        i = i.next;
      } while (i !== r);
    }
  }
  function Ws(e, t) {
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
  function su(e) {
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
  function Ly(e) {
    var t = e.alternate;
    t !== null && (e.alternate = null, Ly(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && (delete t[kt], delete t[Vi], delete t[Kl], delete t[xS], delete t[wS])), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
  }
  function Vy(e) {
    return e.tag === 5 || e.tag === 3 || e.tag === 4;
  }
  function Md(e) {
    e:
      for (; ; ) {
        for (; e.sibling === null; ) {
          if (e.return === null || Vy(e.return))
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
  function au(e, t, n) {
    var r = e.tag;
    if (r === 5 || r === 6)
      e = e.stateNode, t ? n.nodeType === 8 ? n.parentNode.insertBefore(e, t) : n.insertBefore(e, t) : (n.nodeType === 8 ? (t = n.parentNode, t.insertBefore(e, n)) : (t = n, t.appendChild(e)), n = n._reactRootContainer, n != null || t.onclick !== null || (t.onclick = ss));
    else if (r !== 4 && (e = e.child, e !== null))
      for (au(e, t, n), e = e.sibling; e !== null; )
        au(e, t, n), e = e.sibling;
  }
  function lu(e, t, n) {
    var r = e.tag;
    if (r === 5 || r === 6)
      e = e.stateNode, t ? n.insertBefore(e, t) : n.appendChild(e);
    else if (r !== 4 && (e = e.child, e !== null))
      for (lu(e, t, n), e = e.sibling; e !== null; )
        lu(e, t, n), e = e.sibling;
  }
  var we = null, mt = !1;
  function qt(e, t, n) {
    for (n = n.child; n !== null; )
      $y(e, t, n), n = n.sibling;
  }
  function $y(e, t, n) {
    if (_t && typeof _t.onCommitFiberUnmount == "function")
      try {
        _t.onCommitFiberUnmount(Ls, n);
      } catch {
      }
    switch (n.tag) {
      case 5:
        je || Pr(n, t);
      case 6:
        var r = we, i = mt;
        we = null, qt(e, t, n), we = r, mt = i, we !== null && (mt ? (e = we, n = n.stateNode, e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n)) : we.removeChild(n.stateNode));
        break;
      case 18:
        we !== null && (mt ? (e = we, n = n.stateNode, e.nodeType === 8 ? Ba(e.parentNode, n) : e.nodeType === 1 && Ba(e, n), Di(e)) : Ba(we, n.stateNode));
        break;
      case 4:
        r = we, i = mt, we = n.stateNode.containerInfo, mt = !0, qt(e, t, n), we = r, mt = i;
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        if (!je && (r = n.updateQueue, r !== null && (r = r.lastEffect, r !== null))) {
          i = r = r.next;
          do {
            var o = i, s = o.destroy;
            o = o.tag, s !== void 0 && (o & 2 || o & 4) && ou(n, t, s), i = i.next;
          } while (i !== r);
        }
        qt(e, t, n);
        break;
      case 1:
        if (!je && (Pr(n, t), r = n.stateNode, typeof r.componentWillUnmount == "function"))
          try {
            r.props = n.memoizedProps, r.state = n.memoizedState, r.componentWillUnmount();
          } catch (a) {
            le(n, t, a);
          }
        qt(e, t, n);
        break;
      case 21:
        qt(e, t, n);
        break;
      case 22:
        n.mode & 1 ? (je = (r = je) || n.memoizedState !== null, qt(e, t, n), je = r) : qt(e, t, n);
        break;
      default:
        qt(e, t, n);
    }
  }
  function Nd(e) {
    var t = e.updateQueue;
    if (t !== null) {
      e.updateQueue = null;
      var n = e.stateNode;
      n === null && (n = e.stateNode = new LS()), t.forEach(function(r) {
        var i = GS.bind(null, e, r);
        n.has(r) || (n.add(r), r.then(i, i));
      });
    }
  }
  function ht(e, t) {
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
                  we = a.stateNode, mt = !1;
                  break e;
                case 3:
                  we = a.stateNode.containerInfo, mt = !0;
                  break e;
                case 4:
                  we = a.stateNode.containerInfo, mt = !0;
                  break e;
              }
              a = a.return;
            }
          if (we === null)
            throw Error(A(160));
          $y(o, s, i), we = null, mt = !1;
          var l = i.alternate;
          l !== null && (l.return = null), i.return = null;
        } catch (u) {
          le(i, t, u);
        }
      }
    if (t.subtreeFlags & 12854)
      for (t = t.child; t !== null; )
        Iy(t, e), t = t.sibling;
  }
  function Iy(e, t) {
    var n = e.alternate, r = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        if (ht(t, e), Et(e), r & 4) {
          try {
            Si(3, e, e.return), Ws(3, e);
          } catch (v) {
            le(e, e.return, v);
          }
          try {
            Si(5, e, e.return);
          } catch (v) {
            le(e, e.return, v);
          }
        }
        break;
      case 1:
        ht(t, e), Et(e), r & 512 && n !== null && Pr(n, n.return);
        break;
      case 5:
        if (ht(t, e), Et(e), r & 512 && n !== null && Pr(n, n.return), e.flags & 32) {
          var i = e.stateNode;
          try {
            Oi(i, "");
          } catch (v) {
            le(e, e.return, v);
          }
        }
        if (r & 4 && (i = e.stateNode, i != null)) {
          var o = e.memoizedProps, s = n !== null ? n.memoizedProps : o, a = e.type, l = e.updateQueue;
          if (e.updateQueue = null, l !== null)
            try {
              a === "input" && o.type === "radio" && o.name != null && am(i, o), Rl(a, s);
              var u = Rl(a, o);
              for (s = 0; s < l.length; s += 2) {
                var c = l[s], f = l[s + 1];
                c === "style" ? dm(i, f) : c === "dangerouslySetInnerHTML" ? cm(i, f) : c === "children" ? Oi(i, f) : Hu(i, c, f, u);
              }
              switch (a) {
                case "input":
                  _l(i, o);
                  break;
                case "textarea":
                  lm(i, o);
                  break;
                case "select":
                  var d = i._wrapperState.wasMultiple;
                  i._wrapperState.wasMultiple = !!o.multiple;
                  var y = o.value;
                  y != null ? Fr(i, !!o.multiple, y, !1) : d !== !!o.multiple && (o.defaultValue != null ? Fr(
                    i,
                    !!o.multiple,
                    o.defaultValue,
                    !0
                  ) : Fr(i, !!o.multiple, o.multiple ? [] : "", !1));
              }
              i[Vi] = o;
            } catch (v) {
              le(e, e.return, v);
            }
        }
        break;
      case 6:
        if (ht(t, e), Et(e), r & 4) {
          if (e.stateNode === null)
            throw Error(A(162));
          i = e.stateNode, o = e.memoizedProps;
          try {
            i.nodeValue = o;
          } catch (v) {
            le(e, e.return, v);
          }
        }
        break;
      case 3:
        if (ht(t, e), Et(e), r & 4 && n !== null && n.memoizedState.isDehydrated)
          try {
            Di(t.containerInfo);
          } catch (v) {
            le(e, e.return, v);
          }
        break;
      case 4:
        ht(t, e), Et(e);
        break;
      case 13:
        ht(t, e), Et(e), i = e.child, i.flags & 8192 && (o = i.memoizedState !== null, i.stateNode.isHidden = o, !o || i.alternate !== null && i.alternate.memoizedState !== null || (Ec = ce())), r & 4 && Nd(e);
        break;
      case 22:
        if (c = n !== null && n.memoizedState !== null, e.mode & 1 ? (je = (u = je) || c, ht(t, e), je = u) : ht(t, e), Et(e), r & 8192) {
          if (u = e.memoizedState !== null, (e.stateNode.isHidden = u) && !c && e.mode & 1)
            for (R = e, c = e.child; c !== null; ) {
              for (f = R = c; R !== null; ) {
                switch (d = R, y = d.child, d.tag) {
                  case 0:
                  case 11:
                  case 14:
                  case 15:
                    Si(4, d, d.return);
                    break;
                  case 1:
                    Pr(d, d.return);
                    var g = d.stateNode;
                    if (typeof g.componentWillUnmount == "function") {
                      r = d, n = d.return;
                      try {
                        t = r, g.props = t.memoizedProps, g.state = t.memoizedState, g.componentWillUnmount();
                      } catch (v) {
                        le(r, n, v);
                      }
                    }
                    break;
                  case 5:
                    Pr(d, d.return);
                    break;
                  case 22:
                    if (d.memoizedState !== null) {
                      Ld(f);
                      continue;
                    }
                }
                y !== null ? (y.return = d, R = y) : Ld(f);
              }
              c = c.sibling;
            }
          e:
            for (c = null, f = e; ; ) {
              if (f.tag === 5) {
                if (c === null) {
                  c = f;
                  try {
                    i = f.stateNode, u ? (o = i.style, typeof o.setProperty == "function" ? o.setProperty("display", "none", "important") : o.display = "none") : (a = f.stateNode, l = f.memoizedProps.style, s = l != null && l.hasOwnProperty("display") ? l.display : null, a.style.display = fm("display", s));
                  } catch (v) {
                    le(e, e.return, v);
                  }
                }
              } else if (f.tag === 6) {
                if (c === null)
                  try {
                    f.stateNode.nodeValue = u ? "" : f.memoizedProps;
                  } catch (v) {
                    le(e, e.return, v);
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
        ht(t, e), Et(e), r & 4 && Nd(e);
        break;
      case 21:
        break;
      default:
        ht(
          t,
          e
        ), Et(e);
    }
  }
  function Et(e) {
    var t = e.flags;
    if (t & 2) {
      try {
        e: {
          for (var n = e.return; n !== null; ) {
            if (Vy(n)) {
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
            var o = Md(e);
            lu(e, o, i);
            break;
          case 3:
          case 4:
            var s = r.stateNode.containerInfo, a = Md(e);
            au(e, a, s);
            break;
          default:
            throw Error(A(161));
        }
      } catch (l) {
        le(e, e.return, l);
      }
      e.flags &= -3;
    }
    t & 4096 && (e.flags &= -4097);
  }
  function $S(e, t, n) {
    R = e, zy(e);
  }
  function zy(e, t, n) {
    for (var r = (e.mode & 1) !== 0; R !== null; ) {
      var i = R, o = i.child;
      if (i.tag === 22 && r) {
        var s = i.memoizedState !== null || _o;
        if (!s) {
          var a = i.alternate, l = a !== null && a.memoizedState !== null || je;
          a = _o;
          var u = je;
          if (_o = s, (je = l) && !u)
            for (R = i; R !== null; )
              s = R, l = s.child, s.tag === 22 && s.memoizedState !== null ? Vd(i) : l !== null ? (l.return = s, R = l) : Vd(i);
          for (; o !== null; )
            R = o, zy(o), o = o.sibling;
          R = i, _o = a, je = u;
        }
        bd(e);
      } else
        i.subtreeFlags & 8772 && o !== null ? (o.return = i, R = o) : bd(e);
    }
  }
  function bd(e) {
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
                je || Ws(5, t);
                break;
              case 1:
                var r = t.stateNode;
                if (t.flags & 4 && !je)
                  if (n === null)
                    r.componentDidMount();
                  else {
                    var i = t.elementType === t.type ? n.memoizedProps : pt(t.type, n.memoizedProps);
                    r.componentDidUpdate(i, n.memoizedState, r.__reactInternalSnapshotBeforeUpdate);
                  }
                var o = t.updateQueue;
                o !== null && Sd(t, o, r);
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
                  Sd(t, s, n);
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
                      f !== null && Di(f);
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
          je || t.flags & 512 && su(t);
        } catch (d) {
          le(t, t.return, d);
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
  function Ld(e) {
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
  function Vd(e) {
    for (; R !== null; ) {
      var t = R;
      try {
        switch (t.tag) {
          case 0:
          case 11:
          case 15:
            var n = t.return;
            try {
              Ws(4, t);
            } catch (l) {
              le(t, n, l);
            }
            break;
          case 1:
            var r = t.stateNode;
            if (typeof r.componentDidMount == "function") {
              var i = t.return;
              try {
                r.componentDidMount();
              } catch (l) {
                le(t, i, l);
              }
            }
            var o = t.return;
            try {
              su(t);
            } catch (l) {
              le(t, o, l);
            }
            break;
          case 5:
            var s = t.return;
            try {
              su(t);
            } catch (l) {
              le(t, s, l);
            }
        }
      } catch (l) {
        le(t, t.return, l);
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
  var IS = Math.ceil, gs = Qt.ReactCurrentDispatcher, wc = Qt.ReactCurrentOwner, ut = Qt.ReactCurrentBatchConfig, B = 0, ve = null, de = null, Pe = 0, We = 0, Cr = On(0), pe = 0, Hi = null, Jn = 0, Ks = 0, Tc = 0, xi = null, $e = null, Ec = 0, Br = 1 / 0, Nt = null, vs = !1, uu = null, yn = null, Ao = !1, un = null, Ss = 0, wi = 0, cu = null, Ho = -1, Wo = 0;
  function Ne() {
    return B & 6 ? ce() : Ho !== -1 ? Ho : Ho = ce();
  }
  function gn(e) {
    return e.mode & 1 ? B & 2 && Pe !== 0 ? Pe & -Pe : ES.transition !== null ? (Wo === 0 && (Wo = Pm()), Wo) : (e = G, e !== 0 || (e = window.event, e = e === void 0 ? 16 : Fm(e.type)), e) : 1;
  }
  function vt(e, t, n, r) {
    if (50 < wi)
      throw wi = 0, cu = null, Error(A(185));
    Ji(e, n, r), (!(B & 2) || e !== ve) && (e === ve && (!(B & 2) && (Ks |= n), pe === 4 && an(e, Pe)), He(e, r), n === 1 && B === 0 && !(t.mode & 1) && (Br = ce() + 500, Us && jn()));
  }
  function He(e, t) {
    var n = e.callbackNode;
    E1(e, t);
    var r = ns(e, e === ve ? Pe : 0);
    if (r === 0)
      n !== null && Gf(n), e.callbackNode = null, e.callbackPriority = 0;
    else if (t = r & -r, e.callbackPriority !== t) {
      if (n != null && Gf(n), t === 1)
        e.tag === 0 ? TS($d.bind(null, e)) : Xm($d.bind(null, e)), vS(function() {
          !(B & 6) && jn();
        }), n = null;
      else {
        switch (Cm(r)) {
          case 1:
            n = Qu;
            break;
          case 4:
            n = Tm;
            break;
          case 16:
            n = ts;
            break;
          case 536870912:
            n = Em;
            break;
          default:
            n = ts;
        }
        n = Qy(n, Uy.bind(null, e));
      }
      e.callbackPriority = t, e.callbackNode = n;
    }
  }
  function Uy(e, t) {
    if (Ho = -1, Wo = 0, B & 6)
      throw Error(A(327));
    var n = e.callbackNode;
    if (br() && e.callbackNode !== n)
      return null;
    var r = ns(e, e === ve ? Pe : 0);
    if (r === 0)
      return null;
    if (r & 30 || r & e.expiredLanes || t)
      t = xs(e, r);
    else {
      t = r;
      var i = B;
      B |= 2;
      var o = Hy();
      (ve !== e || Pe !== t) && (Nt = null, Br = ce() + 500, Kn(e, t));
      do
        try {
          BS();
          break;
        } catch (a) {
          By(e, a);
        }
      while (!0);
      lc(), gs.current = o, B = i, de !== null ? t = 0 : (ve = null, Pe = 0, t = pe);
    }
    if (t !== 0) {
      if (t === 2 && (i = Ll(e), i !== 0 && (r = i, t = fu(e, i))), t === 1)
        throw n = Hi, Kn(e, 0), an(e, r), He(e, ce()), n;
      if (t === 6)
        an(e, r);
      else {
        if (i = e.current.alternate, !(r & 30) && !zS(i) && (t = xs(e, r), t === 2 && (o = Ll(e), o !== 0 && (r = o, t = fu(e, o))), t === 1))
          throw n = Hi, Kn(e, 0), an(e, r), He(e, ce()), n;
        switch (e.finishedWork = i, e.finishedLanes = r, t) {
          case 0:
          case 1:
            throw Error(A(345));
          case 2:
            bn(e, $e, Nt);
            break;
          case 3:
            if (an(e, r), (r & 130023424) === r && (t = Ec + 500 - ce(), 10 < t)) {
              if (ns(e, 0) !== 0)
                break;
              if (i = e.suspendedLanes, (i & r) !== r) {
                Ne(), e.pingedLanes |= e.suspendedLanes & i;
                break;
              }
              e.timeoutHandle = Wl(bn.bind(null, e, $e, Nt), t);
              break;
            }
            bn(e, $e, Nt);
            break;
          case 4:
            if (an(e, r), (r & 4194240) === r)
              break;
            for (t = e.eventTimes, i = -1; 0 < r; ) {
              var s = 31 - gt(r);
              o = 1 << s, s = t[s], s > i && (i = s), r &= ~o;
            }
            if (r = i, r = ce() - r, r = (120 > r ? 120 : 480 > r ? 480 : 1080 > r ? 1080 : 1920 > r ? 1920 : 3e3 > r ? 3e3 : 4320 > r ? 4320 : 1960 * IS(r / 1960)) - r, 10 < r) {
              e.timeoutHandle = Wl(bn.bind(null, e, $e, Nt), r);
              break;
            }
            bn(e, $e, Nt);
            break;
          case 5:
            bn(e, $e, Nt);
            break;
          default:
            throw Error(A(329));
        }
      }
    }
    return He(e, ce()), e.callbackNode === n ? Uy.bind(null, e) : null;
  }
  function fu(e, t) {
    var n = xi;
    return e.current.memoizedState.isDehydrated && (Kn(e, t).flags |= 256), e = xs(e, t), e !== 2 && (t = $e, $e = n, t !== null && du(t)), e;
  }
  function du(e) {
    $e === null ? $e = e : $e.push.apply($e, e);
  }
  function zS(e) {
    for (var t = e; ; ) {
      if (t.flags & 16384) {
        var n = t.updateQueue;
        if (n !== null && (n = n.stores, n !== null))
          for (var r = 0; r < n.length; r++) {
            var i = n[r], o = i.getSnapshot;
            i = i.value;
            try {
              if (!St(o(), i))
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
  function an(e, t) {
    for (t &= ~Tc, t &= ~Ks, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes; 0 < t; ) {
      var n = 31 - gt(t), r = 1 << n;
      e[n] = -1, t &= ~r;
    }
  }
  function $d(e) {
    if (B & 6)
      throw Error(A(327));
    br();
    var t = ns(e, 0);
    if (!(t & 1))
      return He(e, ce()), null;
    var n = xs(e, t);
    if (e.tag !== 0 && n === 2) {
      var r = Ll(e);
      r !== 0 && (t = r, n = fu(e, r));
    }
    if (n === 1)
      throw n = Hi, Kn(e, 0), an(e, t), He(e, ce()), n;
    if (n === 6)
      throw Error(A(345));
    return e.finishedWork = e.current.alternate, e.finishedLanes = t, bn(e, $e, Nt), He(e, ce()), null;
  }
  function Pc(e, t) {
    var n = B;
    B |= 1;
    try {
      return e(t);
    } finally {
      B = n, B === 0 && (Br = ce() + 500, Us && jn());
    }
  }
  function er(e) {
    un !== null && un.tag === 0 && !(B & 6) && br();
    var t = B;
    B |= 1;
    var n = ut.transition, r = G;
    try {
      if (ut.transition = null, G = 1, e)
        return e();
    } finally {
      G = r, ut.transition = n, B = t, !(B & 6) && jn();
    }
  }
  function Cc() {
    We = Cr.current, J(Cr);
  }
  function Kn(e, t) {
    e.finishedWork = null, e.finishedLanes = 0;
    var n = e.timeoutHandle;
    if (n !== -1 && (e.timeoutHandle = -1, gS(n)), de !== null)
      for (n = de.return; n !== null; ) {
        var r = n;
        switch (oc(r), r.tag) {
          case 1:
            r = r.type.childContextTypes, r != null && as();
            break;
          case 3:
            zr(), J(Ue), J(De), pc();
            break;
          case 5:
            hc(r);
            break;
          case 4:
            zr();
            break;
          case 13:
            J(re);
            break;
          case 19:
            J(re);
            break;
          case 10:
            uc(r.type._context);
            break;
          case 22:
          case 23:
            Cc();
        }
        n = n.return;
      }
    if (ve = e, de = e = vn(e.current, null), Pe = We = t, pe = 0, Hi = null, Tc = Ks = Jn = 0, $e = xi = null, Un !== null) {
      for (t = 0; t < Un.length; t++)
        if (n = Un[t], r = n.interleaved, r !== null) {
          n.interleaved = null;
          var i = r.next, o = n.pending;
          if (o !== null) {
            var s = o.next;
            o.next = i, r.next = s;
          }
          n.pending = r;
        }
      Un = null;
    }
    return e;
  }
  function By(e, t) {
    do {
      var n = de;
      try {
        if (lc(), zo.current = ys, ms) {
          for (var r = oe.memoizedState; r !== null; ) {
            var i = r.queue;
            i !== null && (i.pending = null), r = r.next;
          }
          ms = !1;
        }
        if (qn = 0, ge = he = oe = null, vi = !1, zi = 0, wc.current = null, n === null || n.return === null) {
          pe = 1, Hi = t, de = null;
          break;
        }
        e: {
          var o = e, s = n.return, a = n, l = t;
          if (t = Pe, a.flags |= 32768, l !== null && typeof l == "object" && typeof l.then == "function") {
            var u = l, c = a, f = c.tag;
            if (!(c.mode & 1) && (f === 0 || f === 11 || f === 15)) {
              var d = c.alternate;
              d ? (c.updateQueue = d.updateQueue, c.memoizedState = d.memoizedState, c.lanes = d.lanes) : (c.updateQueue = null, c.memoizedState = null);
            }
            var y = kd(s);
            if (y !== null) {
              y.flags &= -257, _d(y, s, a, o, t), y.mode & 1 && Cd(o, u, t), t = y, l = u;
              var g = t.updateQueue;
              if (g === null) {
                var v = /* @__PURE__ */ new Set();
                v.add(l), t.updateQueue = v;
              } else
                g.add(l);
              break e;
            } else {
              if (!(t & 1)) {
                Cd(o, u, t), kc();
                break e;
              }
              l = Error(A(426));
            }
          } else if (ne && a.mode & 1) {
            var T = kd(s);
            if (T !== null) {
              !(T.flags & 65536) && (T.flags |= 256), _d(T, s, a, o, t), sc(Ur(l, a));
              break e;
            }
          }
          o = l = Ur(l, a), pe !== 4 && (pe = 2), xi === null ? xi = [o] : xi.push(o), o = s;
          do {
            switch (o.tag) {
              case 3:
                o.flags |= 65536, t &= -t, o.lanes |= t;
                var p = ky(o, l, t);
                vd(o, p);
                break e;
              case 1:
                a = l;
                var h = o.type, m = o.stateNode;
                if (!(o.flags & 128) && (typeof h.getDerivedStateFromError == "function" || m !== null && typeof m.componentDidCatch == "function" && (yn === null || !yn.has(m)))) {
                  o.flags |= 65536, t &= -t, o.lanes |= t;
                  var S = _y(o, a, t);
                  vd(o, S);
                  break e;
                }
            }
            o = o.return;
          } while (o !== null);
        }
        Ky(n);
      } catch (C) {
        t = C, de === n && n !== null && (de = n = n.return);
        continue;
      }
      break;
    } while (!0);
  }
  function Hy() {
    var e = gs.current;
    return gs.current = ys, e === null ? ys : e;
  }
  function kc() {
    (pe === 0 || pe === 3 || pe === 2) && (pe = 4), ve === null || !(Jn & 268435455) && !(Ks & 268435455) || an(ve, Pe);
  }
  function xs(e, t) {
    var n = B;
    B |= 2;
    var r = Hy();
    (ve !== e || Pe !== t) && (Nt = null, Kn(e, t));
    do
      try {
        US();
        break;
      } catch (i) {
        By(e, i);
      }
    while (!0);
    if (lc(), B = n, gs.current = r, de !== null)
      throw Error(A(261));
    return ve = null, Pe = 0, pe;
  }
  function US() {
    for (; de !== null; )
      Wy(de);
  }
  function BS() {
    for (; de !== null && !p1(); )
      Wy(de);
  }
  function Wy(e) {
    var t = Yy(e.alternate, e, We);
    e.memoizedProps = e.pendingProps, t === null ? Ky(e) : de = t, wc.current = null;
  }
  function Ky(e) {
    var t = e;
    do {
      var n = t.alternate;
      if (e = t.return, t.flags & 32768) {
        if (n = bS(n, t), n !== null) {
          n.flags &= 32767, de = n;
          return;
        }
        if (e !== null)
          e.flags |= 32768, e.subtreeFlags = 0, e.deletions = null;
        else {
          pe = 6, de = null;
          return;
        }
      } else if (n = NS(n, t, We), n !== null) {
        de = n;
        return;
      }
      if (t = t.sibling, t !== null) {
        de = t;
        return;
      }
      de = t = e;
    } while (t !== null);
    pe === 0 && (pe = 5);
  }
  function bn(e, t, n) {
    var r = G, i = ut.transition;
    try {
      ut.transition = null, G = 1, HS(e, t, n, r);
    } finally {
      ut.transition = i, G = r;
    }
    return null;
  }
  function HS(e, t, n, r) {
    do
      br();
    while (un !== null);
    if (B & 6)
      throw Error(A(327));
    n = e.finishedWork;
    var i = e.finishedLanes;
    if (n === null)
      return null;
    if (e.finishedWork = null, e.finishedLanes = 0, n === e.current)
      throw Error(A(177));
    e.callbackNode = null, e.callbackPriority = 0;
    var o = n.lanes | n.childLanes;
    if (P1(e, o), e === ve && (de = ve = null, Pe = 0), !(n.subtreeFlags & 2064) && !(n.flags & 2064) || Ao || (Ao = !0, Qy(ts, function() {
      return br(), null;
    })), o = (n.flags & 15990) !== 0, n.subtreeFlags & 15990 || o) {
      o = ut.transition, ut.transition = null;
      var s = G;
      G = 1;
      var a = B;
      B |= 4, wc.current = null, VS(e, n), Iy(n, e), cS(Bl), rs = !!Ul, Bl = Ul = null, e.current = n, $S(n), m1(), B = a, G = s, ut.transition = o;
    } else
      e.current = n;
    if (Ao && (Ao = !1, un = e, Ss = i), o = e.pendingLanes, o === 0 && (yn = null), v1(n.stateNode), He(e, ce()), t !== null)
      for (r = e.onRecoverableError, n = 0; n < t.length; n++)
        i = t[n], r(i.value, { componentStack: i.stack, digest: i.digest });
    if (vs)
      throw vs = !1, e = uu, uu = null, e;
    return Ss & 1 && e.tag !== 0 && br(), o = e.pendingLanes, o & 1 ? e === cu ? wi++ : (wi = 0, cu = e) : wi = 0, jn(), null;
  }
  function br() {
    if (un !== null) {
      var e = Cm(Ss), t = ut.transition, n = G;
      try {
        if (ut.transition = null, G = 16 > e ? 16 : e, un === null)
          var r = !1;
        else {
          if (e = un, un = null, Ss = 0, B & 6)
            throw Error(A(331));
          var i = B;
          for (B |= 4, R = e.current; R !== null; ) {
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
                        var d = c.sibling, y = c.return;
                        if (Ly(c), c === u) {
                          R = null;
                          break;
                        }
                        if (d !== null) {
                          d.return = y, R = d;
                          break;
                        }
                        R = y;
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
                  var p = o.sibling;
                  if (p !== null) {
                    p.return = o.return, R = p;
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
                          Ws(9, a);
                      }
                    } catch (C) {
                      le(a, a.return, C);
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
          if (B = i, jn(), _t && typeof _t.onPostCommitFiberRoot == "function")
            try {
              _t.onPostCommitFiberRoot(Ls, e);
            } catch {
            }
          r = !0;
        }
        return r;
      } finally {
        G = n, ut.transition = t;
      }
    }
    return !1;
  }
  function Id(e, t, n) {
    t = Ur(n, t), t = ky(e, t, 1), e = mn(e, t, 1), t = Ne(), e !== null && (Ji(e, 1, t), He(e, t));
  }
  function le(e, t, n) {
    if (e.tag === 3)
      Id(e, e, n);
    else
      for (; t !== null; ) {
        if (t.tag === 3) {
          Id(t, e, n);
          break;
        } else if (t.tag === 1) {
          var r = t.stateNode;
          if (typeof t.type.getDerivedStateFromError == "function" || typeof r.componentDidCatch == "function" && (yn === null || !yn.has(r))) {
            e = Ur(n, e), e = _y(t, e, 1), t = mn(t, e, 1), e = Ne(), t !== null && (Ji(t, 1, e), He(t, e));
            break;
          }
        }
        t = t.return;
      }
  }
  function WS(e, t, n) {
    var r = e.pingCache;
    r !== null && r.delete(t), t = Ne(), e.pingedLanes |= e.suspendedLanes & n, ve === e && (Pe & n) === n && (pe === 4 || pe === 3 && (Pe & 130023424) === Pe && 500 > ce() - Ec ? Kn(e, 0) : Tc |= n), He(e, t);
  }
  function Gy(e, t) {
    t === 0 && (e.mode & 1 ? (t = vo, vo <<= 1, !(vo & 130023424) && (vo = 4194304)) : t = 1);
    var n = Ne();
    e = Gt(e, t), e !== null && (Ji(e, t, n), He(e, n));
  }
  function KS(e) {
    var t = e.memoizedState, n = 0;
    t !== null && (n = t.retryLane), Gy(e, n);
  }
  function GS(e, t) {
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
    r !== null && r.delete(t), Gy(e, n);
  }
  var Yy;
  Yy = function(e, t, n) {
    if (e !== null)
      if (e.memoizedProps !== t.pendingProps || Ue.current)
        ze = !0;
      else {
        if (!(e.lanes & n) && !(t.flags & 128))
          return ze = !1, MS(e, t, n);
        ze = !!(e.flags & 131072);
      }
    else
      ze = !1, ne && t.flags & 1048576 && Zm(t, cs, t.index);
    switch (t.lanes = 0, t.tag) {
      case 2:
        var r = t.type;
        Bo(e, t), e = t.pendingProps;
        var i = Vr(t, De.current);
        Nr(t, n), i = yc(null, t, r, e, i, n);
        var o = gc();
        return t.flags |= 1, typeof i == "object" && i !== null && typeof i.render == "function" && i.$$typeof === void 0 ? (t.tag = 1, t.memoizedState = null, t.updateQueue = null, Be(r) ? (o = !0, ls(t)) : o = !1, t.memoizedState = i.state !== null && i.state !== void 0 ? i.state : null, fc(t), i.updater = Bs, t.stateNode = i, i._reactInternals = t, ql(t, r, e, n), t = tu(null, t, r, !0, o, n)) : (t.tag = 0, ne && o && ic(t), Me(null, t, i, n), t = t.child), t;
      case 16:
        r = t.elementType;
        e: {
          switch (Bo(e, t), e = t.pendingProps, i = r._init, r = i(r._payload), t.type = r, i = t.tag = QS(r), e = pt(r, e), i) {
            case 0:
              t = eu(null, t, r, e, n);
              break e;
            case 1:
              t = jd(null, t, r, e, n);
              break e;
            case 11:
              t = Ad(null, t, r, e, n);
              break e;
            case 14:
              t = Od(null, t, r, pt(r.type, e), n);
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
        return r = t.type, i = t.pendingProps, i = t.elementType === r ? i : pt(r, i), eu(e, t, r, i, n);
      case 1:
        return r = t.type, i = t.pendingProps, i = t.elementType === r ? i : pt(r, i), jd(e, t, r, i, n);
      case 3:
        e: {
          if (Fy(t), e === null)
            throw Error(A(387));
          r = t.pendingProps, o = t.memoizedState, i = o.element, ty(e, t), hs(t, r, null, n);
          var s = t.memoizedState;
          if (r = s.element, o.isDehydrated)
            if (o = { element: r, isDehydrated: !1, cache: s.cache, pendingSuspenseBoundaries: s.pendingSuspenseBoundaries, transitions: s.transitions }, t.updateQueue.baseState = o, t.memoizedState = o, t.flags & 256) {
              i = Ur(Error(A(423)), t), t = Fd(e, t, r, n, i);
              break e;
            } else if (r !== i) {
              i = Ur(Error(A(424)), t), t = Fd(e, t, r, n, i);
              break e;
            } else
              for (Ke = pn(t.stateNode.containerInfo.firstChild), Qe = t, ne = !0, yt = null, n = oy(t, null, r, n), t.child = n; n; )
                n.flags = n.flags & -3 | 4096, n = n.sibling;
          else {
            if ($r(), r === i) {
              t = Yt(e, t, n);
              break e;
            }
            Me(e, t, r, n);
          }
          t = t.child;
        }
        return t;
      case 5:
        return sy(t), e === null && Ql(t), r = t.type, i = t.pendingProps, o = e !== null ? e.memoizedProps : null, s = i.children, Hl(r, i) ? s = null : o !== null && Hl(r, o) && (t.flags |= 32), jy(e, t), Me(e, t, s, n), t.child;
      case 6:
        return e === null && Ql(t), null;
      case 13:
        return Ry(e, t, n);
      case 4:
        return dc(t, t.stateNode.containerInfo), r = t.pendingProps, e === null ? t.child = Ir(t, null, r, n) : Me(e, t, r, n), t.child;
      case 11:
        return r = t.type, i = t.pendingProps, i = t.elementType === r ? i : pt(r, i), Ad(e, t, r, i, n);
      case 7:
        return Me(e, t, t.pendingProps, n), t.child;
      case 8:
        return Me(e, t, t.pendingProps.children, n), t.child;
      case 12:
        return Me(e, t, t.pendingProps.children, n), t.child;
      case 10:
        e: {
          if (r = t.type._context, i = t.pendingProps, o = t.memoizedProps, s = i.value, X(fs, r._currentValue), r._currentValue = s, o !== null)
            if (St(o.value, s)) {
              if (o.children === i.children && !Ue.current) {
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
                        l = zt(-1, n & -n), l.tag = 2;
                        var u = o.updateQueue;
                        if (u !== null) {
                          u = u.shared;
                          var c = u.pending;
                          c === null ? l.next = l : (l.next = c.next, c.next = l), u.pending = l;
                        }
                      }
                      o.lanes |= n, l = o.alternate, l !== null && (l.lanes |= n), Xl(
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
                  s.lanes |= n, a = s.alternate, a !== null && (a.lanes |= n), Xl(s, n, t), s = o.sibling;
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
          Me(e, t, i.children, n), t = t.child;
        }
        return t;
      case 9:
        return i = t.type, r = t.pendingProps.children, Nr(t, n), i = ct(i), r = r(i), t.flags |= 1, Me(e, t, r, n), t.child;
      case 14:
        return r = t.type, i = pt(r, t.pendingProps), i = pt(r.type, i), Od(e, t, r, i, n);
      case 15:
        return Ay(e, t, t.type, t.pendingProps, n);
      case 17:
        return r = t.type, i = t.pendingProps, i = t.elementType === r ? i : pt(r, i), Bo(e, t), t.tag = 1, Be(r) ? (e = !0, ls(t)) : e = !1, Nr(t, n), ry(t, r, i), ql(t, r, i, n), tu(null, t, r, !0, e, n);
      case 19:
        return Dy(e, t, n);
      case 22:
        return Oy(e, t, n);
    }
    throw Error(A(156, t.tag));
  };
  function Qy(e, t) {
    return wm(e, t);
  }
  function YS(e, t, n, r) {
    this.tag = e, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = r, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function lt(e, t, n, r) {
    return new YS(e, t, n, r);
  }
  function _c(e) {
    return e = e.prototype, !(!e || !e.isReactComponent);
  }
  function QS(e) {
    if (typeof e == "function")
      return _c(e) ? 1 : 0;
    if (e != null) {
      if (e = e.$$typeof, e === Ku)
        return 11;
      if (e === Gu)
        return 14;
    }
    return 2;
  }
  function vn(e, t) {
    var n = e.alternate;
    return n === null ? (n = lt(e.tag, t, e.key, e.mode), n.elementType = e.elementType, n.type = e.type, n.stateNode = e.stateNode, n.alternate = e, e.alternate = n) : (n.pendingProps = t, n.type = e.type, n.flags = 0, n.subtreeFlags = 0, n.deletions = null), n.flags = e.flags & 14680064, n.childLanes = e.childLanes, n.lanes = e.lanes, n.child = e.child, n.memoizedProps = e.memoizedProps, n.memoizedState = e.memoizedState, n.updateQueue = e.updateQueue, t = e.dependencies, n.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }, n.sibling = e.sibling, n.index = e.index, n.ref = e.ref, n;
  }
  function Ko(e, t, n, r, i, o) {
    var s = 2;
    if (r = e, typeof e == "function")
      _c(e) && (s = 1);
    else if (typeof e == "string")
      s = 5;
    else
      e:
        switch (e) {
          case mr:
            return Gn(n.children, i, o, t);
          case Wu:
            s = 8, i |= 8;
            break;
          case Tl:
            return e = lt(12, n, t, i | 2), e.elementType = Tl, e.lanes = o, e;
          case El:
            return e = lt(13, n, t, i), e.elementType = El, e.lanes = o, e;
          case Pl:
            return e = lt(19, n, t, i), e.elementType = Pl, e.lanes = o, e;
          case im:
            return Gs(n, i, o, t);
          default:
            if (typeof e == "object" && e !== null)
              switch (e.$$typeof) {
                case nm:
                  s = 10;
                  break e;
                case rm:
                  s = 9;
                  break e;
                case Ku:
                  s = 11;
                  break e;
                case Gu:
                  s = 14;
                  break e;
                case tn:
                  s = 16, r = null;
                  break e;
              }
            throw Error(A(130, e == null ? e : typeof e, ""));
        }
    return t = lt(s, n, t, i), t.elementType = e, t.type = r, t.lanes = o, t;
  }
  function Gn(e, t, n, r) {
    return e = lt(7, e, r, t), e.lanes = n, e;
  }
  function Gs(e, t, n, r) {
    return e = lt(22, e, r, t), e.elementType = im, e.lanes = n, e.stateNode = { isHidden: !1 }, e;
  }
  function Za(e, t, n) {
    return e = lt(6, e, null, t), e.lanes = n, e;
  }
  function qa(e, t, n) {
    return t = lt(4, e.children !== null ? e.children : [], e.key, t), t.lanes = n, t.stateNode = { containerInfo: e.containerInfo, pendingChildren: null, implementation: e.implementation }, t;
  }
  function XS(e, t, n, r, i) {
    this.tag = t, this.containerInfo = e, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = Ra(0), this.expirationTimes = Ra(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Ra(0), this.identifierPrefix = r, this.onRecoverableError = i, this.mutableSourceEagerHydrationData = null;
  }
  function Ac(e, t, n, r, i, o, s, a, l) {
    return e = new XS(e, t, n, a, l), t === 1 ? (t = 1, o === !0 && (t |= 8)) : t = 0, o = lt(3, null, null, t), e.current = o, o.stateNode = e, o.memoizedState = { element: r, isDehydrated: n, cache: null, transitions: null, pendingSuspenseBoundaries: null }, fc(o), e;
  }
  function ZS(e, t, n) {
    var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return { $$typeof: pr, key: r == null ? null : "" + r, children: e, containerInfo: t, implementation: n };
  }
  function Xy(e) {
    if (!e)
      return En;
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
            if (Be(t.type)) {
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
      if (Be(n))
        return Qm(e, n, t);
    }
    return t;
  }
  function Zy(e, t, n, r, i, o, s, a, l) {
    return e = Ac(n, r, !0, e, i, o, s, a, l), e.context = Xy(null), n = e.current, r = Ne(), i = gn(n), o = zt(r, i), o.callback = t ?? null, mn(n, o, i), e.current.lanes = i, Ji(e, i, r), He(e, r), e;
  }
  function Ys(e, t, n, r) {
    var i = t.current, o = Ne(), s = gn(i);
    return n = Xy(n), t.context === null ? t.context = n : t.pendingContext = n, t = zt(o, s), t.payload = { element: e }, r = r === void 0 ? null : r, r !== null && (t.callback = r), e = mn(i, t, s), e !== null && (vt(e, i, s, o), Io(e, i, s)), s;
  }
  function ws(e) {
    if (e = e.current, !e.child)
      return null;
    switch (e.child.tag) {
      case 5:
        return e.child.stateNode;
      default:
        return e.child.stateNode;
    }
  }
  function zd(e, t) {
    if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
      var n = e.retryLane;
      e.retryLane = n !== 0 && n < t ? n : t;
    }
  }
  function Oc(e, t) {
    zd(e, t), (e = e.alternate) && zd(e, t);
  }
  function qS() {
    return null;
  }
  var qy = typeof reportError == "function" ? reportError : function(e) {
    console.error(e);
  };
  function jc(e) {
    this._internalRoot = e;
  }
  Qs.prototype.render = jc.prototype.render = function(e) {
    var t = this._internalRoot;
    if (t === null)
      throw Error(A(409));
    Ys(e, t, null, null);
  };
  Qs.prototype.unmount = jc.prototype.unmount = function() {
    var e = this._internalRoot;
    if (e !== null) {
      this._internalRoot = null;
      var t = e.containerInfo;
      er(function() {
        Ys(null, e, null, null);
      }), t[Kt] = null;
    }
  };
  function Qs(e) {
    this._internalRoot = e;
  }
  Qs.prototype.unstable_scheduleHydration = function(e) {
    if (e) {
      var t = Am();
      e = { blockedOn: null, target: e, priority: t };
      for (var n = 0; n < sn.length && t !== 0 && t < sn[n].priority; n++)
        ;
      sn.splice(n, 0, e), n === 0 && jm(e);
    }
  };
  function Fc(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11);
  }
  function Xs(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "));
  }
  function Ud() {
  }
  function JS(e, t, n, r, i) {
    if (i) {
      if (typeof r == "function") {
        var o = r;
        r = function() {
          var u = ws(s);
          o.call(u);
        };
      }
      var s = Zy(t, r, e, 0, null, !1, !1, "", Ud);
      return e._reactRootContainer = s, e[Kt] = s.current, bi(e.nodeType === 8 ? e.parentNode : e), er(), s;
    }
    for (; i = e.lastChild; )
      e.removeChild(i);
    if (typeof r == "function") {
      var a = r;
      r = function() {
        var u = ws(l);
        a.call(u);
      };
    }
    var l = Ac(e, 0, !1, null, null, !1, !1, "", Ud);
    return e._reactRootContainer = l, e[Kt] = l.current, bi(e.nodeType === 8 ? e.parentNode : e), er(function() {
      Ys(t, l, n, r);
    }), l;
  }
  function Zs(e, t, n, r, i) {
    var o = n._reactRootContainer;
    if (o) {
      var s = o;
      if (typeof i == "function") {
        var a = i;
        i = function() {
          var l = ws(s);
          a.call(l);
        };
      }
      Ys(t, s, e, i);
    } else
      s = JS(n, t, e, i, r);
    return ws(s);
  }
  km = function(e) {
    switch (e.tag) {
      case 3:
        var t = e.stateNode;
        if (t.current.memoizedState.isDehydrated) {
          var n = ci(t.pendingLanes);
          n !== 0 && (Xu(t, n | 1), He(t, ce()), !(B & 6) && (Br = ce() + 500, jn()));
        }
        break;
      case 13:
        er(function() {
          var r = Gt(e, 1);
          if (r !== null) {
            var i = Ne();
            vt(r, e, 1, i);
          }
        }), Oc(e, 1);
    }
  };
  Zu = function(e) {
    if (e.tag === 13) {
      var t = Gt(e, 134217728);
      if (t !== null) {
        var n = Ne();
        vt(t, e, 134217728, n);
      }
      Oc(e, 134217728);
    }
  };
  _m = function(e) {
    if (e.tag === 13) {
      var t = gn(e), n = Gt(e, t);
      if (n !== null) {
        var r = Ne();
        vt(n, e, t, r);
      }
      Oc(e, t);
    }
  };
  Am = function() {
    return G;
  };
  Om = function(e, t) {
    var n = G;
    try {
      return G = e, t();
    } finally {
      G = n;
    }
  };
  Ml = function(e, t, n) {
    switch (t) {
      case "input":
        if (_l(e, n), t = n.name, n.type === "radio" && t != null) {
          for (n = e; n.parentNode; )
            n = n.parentNode;
          for (n = n.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'), t = 0; t < n.length; t++) {
            var r = n[t];
            if (r !== e && r.form === e.form) {
              var i = zs(r);
              if (!i)
                throw Error(A(90));
              sm(r), _l(r, i);
            }
          }
        }
        break;
      case "textarea":
        lm(e, n);
        break;
      case "select":
        t = n.value, t != null && Fr(e, !!n.multiple, t, !1);
    }
  };
  mm = Pc;
  ym = er;
  var ex = { usingClientEntryPoint: !1, Events: [to, Sr, zs, hm, pm, Pc] }, oi = { findFiberByHostInstance: zn, bundleType: 0, version: "18.2.0", rendererPackageName: "react-dom" }, tx = { bundleType: oi.bundleType, version: oi.version, rendererPackageName: oi.rendererPackageName, rendererConfig: oi.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: Qt.ReactCurrentDispatcher, findHostInstanceByFiber: function(e) {
    return e = Sm(e), e === null ? null : e.stateNode;
  }, findFiberByHostInstance: oi.findFiberByHostInstance || qS, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.2.0-next-9e3b772b8-20220608" };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var Oo = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Oo.isDisabled && Oo.supportsFiber)
      try {
        Ls = Oo.inject(tx), _t = Oo;
      } catch {
      }
  }
  qe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = ex;
  qe.createPortal = function(e, t) {
    var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!Fc(t))
      throw Error(A(200));
    return ZS(e, t, null, n);
  };
  qe.createRoot = function(e, t) {
    if (!Fc(e))
      throw Error(A(299));
    var n = !1, r = "", i = qy;
    return t != null && (t.unstable_strictMode === !0 && (n = !0), t.identifierPrefix !== void 0 && (r = t.identifierPrefix), t.onRecoverableError !== void 0 && (i = t.onRecoverableError)), t = Ac(e, 1, !1, null, null, n, !1, r, i), e[Kt] = t.current, bi(e.nodeType === 8 ? e.parentNode : e), new jc(t);
  };
  qe.findDOMNode = function(e) {
    if (e == null)
      return null;
    if (e.nodeType === 1)
      return e;
    var t = e._reactInternals;
    if (t === void 0)
      throw typeof e.render == "function" ? Error(A(188)) : (e = Object.keys(e).join(","), Error(A(268, e)));
    return e = Sm(t), e = e === null ? null : e.stateNode, e;
  };
  qe.flushSync = function(e) {
    return er(e);
  };
  qe.hydrate = function(e, t, n) {
    if (!Xs(t))
      throw Error(A(200));
    return Zs(null, e, t, !0, n);
  };
  qe.hydrateRoot = function(e, t, n) {
    if (!Fc(e))
      throw Error(A(405));
    var r = n != null && n.hydratedSources || null, i = !1, o = "", s = qy;
    if (n != null && (n.unstable_strictMode === !0 && (i = !0), n.identifierPrefix !== void 0 && (o = n.identifierPrefix), n.onRecoverableError !== void 0 && (s = n.onRecoverableError)), t = Zy(t, null, e, 1, n ?? null, i, !1, o, s), e[Kt] = t.current, bi(e), r)
      for (e = 0; e < r.length; e++)
        n = r[e], i = n._getVersion, i = i(n._source), t.mutableSourceEagerHydrationData == null ? t.mutableSourceEagerHydrationData = [n, i] : t.mutableSourceEagerHydrationData.push(
          n,
          i
        );
    return new Qs(t);
  };
  qe.render = function(e, t, n) {
    if (!Xs(t))
      throw Error(A(200));
    return Zs(null, e, t, !1, n);
  };
  qe.unmountComponentAtNode = function(e) {
    if (!Xs(e))
      throw Error(A(40));
    return e._reactRootContainer ? (er(function() {
      Zs(null, null, e, !1, function() {
        e._reactRootContainer = null, e[Kt] = null;
      });
    }), !0) : !1;
  };
  qe.unstable_batchedUpdates = Pc;
  qe.unstable_renderSubtreeIntoContainer = function(e, t, n, r) {
    if (!Xs(n))
      throw Error(A(200));
    if (e == null || e._reactInternals === void 0)
      throw Error(A(38));
    return Zs(e, t, n, !1, r);
  };
  qe.version = "18.2.0-next-9e3b772b8-20220608";
  function Jy() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Jy);
      } catch (e) {
        console.error(e);
      }
  }
  Jy(), Zp.exports = qe;
  var nx = Zp.exports, Bd = nx;
  xl.createRoot = Bd.createRoot, xl.hydrateRoot = Bd.hydrateRoot;
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
  var rx = /[^.^\]^[]+|(?=\[\]|\.\.)/g, eg = /^\d+$/, ix = /^\d/, ox = /[~`!#$%\^&*+=\-\[\]\\';,/{}|\\":<>\?]/g, sx = /^\s*(['"]?)(.*?)(\1)\s*$/, Rc = 512, Hd = new or(Rc), Wd = new or(Rc), Kd = new or(Rc), Yn = {
    Cache: or,
    split: hu,
    normalizePath: Ja,
    setter: function(e) {
      var t = Ja(e);
      return Wd.get(e) || Wd.set(e, function(r, i) {
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
      var n = Ja(e);
      return Kd.get(e) || Kd.set(e, function(i) {
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
        return t + (Dc(n) || eg.test(n) ? "[" + n + "]" : (t ? "." : "") + n);
      }, "");
    },
    forEach: function(e, t, n) {
      ax(Array.isArray(e) ? e : hu(e), t, n);
    }
  };
  function Ja(e) {
    return Hd.get(e) || Hd.set(
      e,
      hu(e).map(function(t) {
        return t.replace(sx, "$2");
      })
    );
  }
  function hu(e) {
    return e.match(rx) || [""];
  }
  function ax(e, t, n) {
    var r = e.length, i, o, s, a;
    for (o = 0; o < r; o++)
      i = e[o], i && (cx(i) && (i = '"' + i + '"'), a = Dc(i), s = !a && /^\d+$/.test(i), t.call(n, i, a, s, o, e));
  }
  function Dc(e) {
    return typeof e == "string" && e && ["'", '"'].indexOf(e.charAt(0)) !== -1;
  }
  function lx(e) {
    return e.match(ix) && !e.match(eg);
  }
  function ux(e) {
    return ox.test(e);
  }
  function cx(e) {
    return !Dc(e) && (lx(e) || ux(e));
  }
  const fx = /[A-Z\xc0-\xd6\xd8-\xde]?[a-z\xdf-\xf6\xf8-\xff]+(?:['’](?:d|ll|m|re|s|t|ve))?(?=[\xac\xb1\xd7\xf7\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\xbf\u2000-\u206f \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000]|[A-Z\xc0-\xd6\xd8-\xde]|$)|(?:[A-Z\xc0-\xd6\xd8-\xde]|[^\ud800-\udfff\xac\xb1\xd7\xf7\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\xbf\u2000-\u206f \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\d+\u2700-\u27bfa-z\xdf-\xf6\xf8-\xffA-Z\xc0-\xd6\xd8-\xde])+(?:['’](?:D|LL|M|RE|S|T|VE))?(?=[\xac\xb1\xd7\xf7\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\xbf\u2000-\u206f \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000]|[A-Z\xc0-\xd6\xd8-\xde](?:[a-z\xdf-\xf6\xf8-\xff]|[^\ud800-\udfff\xac\xb1\xd7\xf7\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\xbf\u2000-\u206f \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\d+\u2700-\u27bfa-z\xdf-\xf6\xf8-\xffA-Z\xc0-\xd6\xd8-\xde])|$)|[A-Z\xc0-\xd6\xd8-\xde]?(?:[a-z\xdf-\xf6\xf8-\xff]|[^\ud800-\udfff\xac\xb1\xd7\xf7\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\xbf\u2000-\u206f \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\d+\u2700-\u27bfa-z\xdf-\xf6\xf8-\xffA-Z\xc0-\xd6\xd8-\xde])+(?:['’](?:d|ll|m|re|s|t|ve))?|[A-Z\xc0-\xd6\xd8-\xde]+(?:['’](?:D|LL|M|RE|S|T|VE))?|\d*(?:1ST|2ND|3RD|(?![123])\dTH)(?=\b|[a-z_])|\d*(?:1st|2nd|3rd|(?![123])\dth)(?=\b|[A-Z_])|\d+|(?:[\u2700-\u27bf]|(?:\ud83c[\udde6-\uddff]){2}|[\ud800-\udbff][\udc00-\udfff])[\ufe0e\ufe0f]?(?:[\u0300-\u036f\ufe20-\ufe2f\u20d0-\u20ff]|\ud83c[\udffb-\udfff])?(?:\u200d(?:[^\ud800-\udfff]|(?:\ud83c[\udde6-\uddff]){2}|[\ud800-\udbff][\udc00-\udfff])[\ufe0e\ufe0f]?(?:[\u0300-\u036f\ufe20-\ufe2f\u20d0-\u20ff]|\ud83c[\udffb-\udfff])?)*/g, qs = (e) => e.match(fx) || [], Js = (e) => e[0].toUpperCase() + e.slice(1), Mc = (e, t) => qs(e).join(t).toLowerCase(), tg = (e) => qs(e).reduce(
    (t, n) => `${t}${t ? n[0].toUpperCase() + n.slice(1).toLowerCase() : n.toLowerCase()}`,
    ""
  ), dx = (e) => Js(tg(e)), hx = (e) => Mc(e, "_"), px = (e) => Mc(e, "-"), mx = (e) => Js(Mc(e, " ")), yx = (e) => qs(e).map(Js).join(" ");
  var el = {
    words: qs,
    upperFirst: Js,
    camelCase: tg,
    pascalCase: dx,
    snakeCase: hx,
    kebabCase: px,
    sentenceCase: mx,
    titleCase: yx
  }, Nc = { exports: {} };
  Nc.exports = function(e) {
    return ng(gx(e), e);
  };
  Nc.exports.array = ng;
  function ng(e, t) {
    var n = e.length, r = new Array(n), i = {}, o = n, s = vx(t), a = Sx(e);
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
        var y = s.get(u) || /* @__PURE__ */ new Set();
        if (y = Array.from(y), c = y.length) {
          f.add(u);
          do {
            var g = y[--c];
            l(g, a.get(g), f);
          } while (c);
          f.delete(u);
        }
        r[--n] = u;
      }
    }
  }
  function gx(e) {
    for (var t = /* @__PURE__ */ new Set(), n = 0, r = e.length; n < r; n++) {
      var i = e[n];
      t.add(i[0]), t.add(i[1]);
    }
    return Array.from(t);
  }
  function vx(e) {
    for (var t = /* @__PURE__ */ new Map(), n = 0, r = e.length; n < r; n++) {
      var i = e[n];
      t.has(i[0]) || t.set(i[0], /* @__PURE__ */ new Set()), t.has(i[1]) || t.set(i[1], /* @__PURE__ */ new Set()), t.get(i[0]).add(i[1]);
    }
    return t;
  }
  function Sx(e) {
    for (var t = /* @__PURE__ */ new Map(), n = 0, r = e.length; n < r; n++)
      t.set(e[n], n);
    return t;
  }
  var xx = Nc.exports;
  const wx = /* @__PURE__ */ Ns(xx), Tx = Object.prototype.toString, Ex = Error.prototype.toString, Px = RegExp.prototype.toString, Cx = typeof Symbol < "u" ? Symbol.prototype.toString : () => "", kx = /^Symbol\((.*)\)(.*)$/;
  function _x(e) {
    return e != +e ? "NaN" : e === 0 && 1 / e < 0 ? "-0" : "" + e;
  }
  function Gd(e, t = !1) {
    if (e == null || e === !0 || e === !1)
      return "" + e;
    const n = typeof e;
    if (n === "number")
      return _x(e);
    if (n === "string")
      return t ? `"${e}"` : e;
    if (n === "function")
      return "[Function " + (e.name || "anonymous") + "]";
    if (n === "symbol")
      return Cx.call(e).replace(kx, "Symbol($1)");
    const r = Tx.call(e).slice(8, -1);
    return r === "Date" ? isNaN(e.getTime()) ? "" + e : e.toISOString(e) : r === "Error" || e instanceof Error ? "[" + Ex.call(e) + "]" : r === "RegExp" ? Px.call(e) : null;
  }
  function Sn(e, t) {
    let n = Gd(e, t);
    return n !== null ? n : JSON.stringify(e, function(r, i) {
      let o = Gd(this[r], t);
      return o !== null ? o : i;
    }, 2);
  }
  function rg(e) {
    return e == null ? [] : [].concat(e);
  }
  let ig, og, sg, Ax = /\$\{\s*(\w+)\s*\}/g;
  ig = Symbol.toStringTag;
  class Yd {
    constructor(t, n, r, i) {
      this.name = void 0, this.message = void 0, this.value = void 0, this.path = void 0, this.type = void 0, this.params = void 0, this.errors = void 0, this.inner = void 0, this[ig] = "Error", this.name = "ValidationError", this.value = n, this.path = r, this.type = i, this.errors = [], this.inner = [], rg(t).forEach((o) => {
        if (Ie.isError(o)) {
          this.errors.push(...o.errors);
          const s = o.inner.length ? o.inner : [o];
          this.inner.push(...s);
        } else
          this.errors.push(o);
      }), this.message = this.errors.length > 1 ? `${this.errors.length} errors occurred` : this.errors[0];
    }
  }
  og = Symbol.hasInstance;
  sg = Symbol.toStringTag;
  class Ie extends Error {
    static formatError(t, n) {
      const r = n.label || n.path || "this";
      return r !== n.path && (n = Object.assign({}, n, {
        path: r
      })), typeof t == "string" ? t.replace(Ax, (i, o) => Sn(n[o])) : typeof t == "function" ? t(n) : t;
    }
    static isError(t) {
      return t && t.name === "ValidationError";
    }
    constructor(t, n, r, i, o) {
      const s = new Yd(t, n, r, i);
      if (o)
        return s;
      super(), this.value = void 0, this.path = void 0, this.type = void 0, this.params = void 0, this.errors = [], this.inner = [], this[sg] = "Error", this.name = s.name, this.message = s.message, this.type = s.type, this.value = s.value, this.path = s.path, this.errors = s.errors, this.inner = s.inner, Error.captureStackTrace && Error.captureStackTrace(this, Ie);
    }
    static [og](t) {
      return Yd[Symbol.hasInstance](t) || super[Symbol.hasInstance](t);
    }
  }
  let Ct = {
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
      const i = r != null && r !== n ? ` (cast from the value \`${Sn(r, !0)}\`).` : ".";
      return t !== "mixed" ? `${e} must be a \`${t}\` type, but the final value was: \`${Sn(n, !0)}\`` + i : `${e} must match the configured type. The validated value was: \`${Sn(n, !0)}\`` + i;
    }
  }, Ve = {
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
  }, Jt = {
    min: "${path} must be greater than or equal to ${min}",
    max: "${path} must be less than or equal to ${max}",
    lessThan: "${path} must be less than ${less}",
    moreThan: "${path} must be greater than ${more}",
    positive: "${path} must be a positive number",
    negative: "${path} must be a negative number",
    integer: "${path} must be an integer"
  }, pu = {
    min: "${path} field must be later than ${min}",
    max: "${path} field must be at earlier than ${max}"
  }, Ox = {
    isValue: "${path} field must be ${value}"
  }, mu = {
    noUnknown: "${path} field has unspecified keys: ${unknown}"
  }, jx = {
    min: "${path} field must have at least ${min} items",
    max: "${path} field must have less than or equal to ${max} items",
    length: "${path} must have ${length} items"
  }, Fx = {
    notType: (e) => {
      const {
        path: t,
        value: n,
        spec: r
      } = e, i = r.types.length;
      if (Array.isArray(n)) {
        if (n.length < i)
          return `${t} tuple value has too few items, expected a length of ${i} but got ${n.length} for value: \`${Sn(n, !0)}\``;
        if (n.length > i)
          return `${t} tuple value has too many items, expected a length of ${i} but got ${n.length} for value: \`${Sn(n, !0)}\``;
      }
      return Ie.formatError(Ct.notType, e);
    }
  };
  Object.assign(/* @__PURE__ */ Object.create(null), {
    mixed: Ct,
    string: Ve,
    number: Jt,
    date: pu,
    object: mu,
    array: jx,
    boolean: Ox,
    tuple: Fx
  });
  const bc = (e) => e && e.__isYupSchema__;
  class Ts {
    static fromOptions(t, n) {
      if (!n.then && !n.otherwise)
        throw new TypeError("either `then:` or `otherwise:` is required for `when()` conditions");
      let {
        is: r,
        then: i,
        otherwise: o
      } = n, s = typeof r == "function" ? r : (...a) => a.every((l) => l === r);
      return new Ts(t, (a, l) => {
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
      if (!bc(i))
        throw new TypeError("conditions must return a schema object");
      return i.resolve(n);
    }
  }
  const jo = {
    context: "$",
    value: "."
  };
  class sr {
    constructor(t, n = {}) {
      if (this.key = void 0, this.isContext = void 0, this.isValue = void 0, this.isSibling = void 0, this.path = void 0, this.getter = void 0, this.map = void 0, typeof t != "string")
        throw new TypeError("ref must be a string, got: " + t);
      if (this.key = t.trim(), t === "")
        throw new TypeError("ref must be a non-empty string");
      this.isContext = this.key[0] === jo.context, this.isValue = this.key[0] === jo.value, this.isSibling = !this.isContext && !this.isValue;
      let r = this.isContext ? jo.context : this.isValue ? jo.value : "";
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
  const $t = (e) => e == null;
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
        skipAbsent: y
      } = e;
      let {
        parent: g,
        context: v,
        abortEarly: T = s.spec.abortEarly,
        disableStackTrace: p = s.spec.disableStackTrace
      } = i;
      function h($) {
        return sr.isRef($) ? $.getValue(n, g, v) : $;
      }
      function m($ = {}) {
        const fe = Object.assign({
          value: n,
          originalValue: o,
          label: s.spec.label,
          path: $.path || r,
          spec: s.spec,
          disableStackTrace: $.disableStackTrace || p
        }, f, $.params);
        for (const ke of Object.keys(fe))
          fe[ke] = h(fe[ke]);
        const ee = new Ie(Ie.formatError($.message || d, fe), n, fe.path, $.type || u, fe.disableStackTrace);
        return ee.params = fe, ee;
      }
      const S = T ? a : l;
      let C = {
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
      const P = ($) => {
        Ie.isError($) ? S($) : $ ? l(null) : S(m());
      }, k = ($) => {
        Ie.isError($) ? S($) : a($);
      };
      if (y && $t(n))
        return P(!0);
      let b;
      try {
        var M;
        if (b = c.call(C, n, C), typeof ((M = b) == null ? void 0 : M.then) == "function") {
          if (i.sync)
            throw new Error(`Validation test of type: "${C.type}" returned a Promise during a synchronous validate. This test will finish after the validate call has returned`);
          return Promise.resolve(b).then(P, k);
        }
      } catch ($) {
        k($);
        return;
      }
      P(b);
    }
    return t.OPTIONS = e, t;
  }
  function Rx(e, t, n, r = n) {
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
  class Es extends Set {
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
      return new Es(this.values());
    }
    merge(t, n) {
      const r = this.clone();
      return t.forEach((i) => r.add(i)), n.forEach((i) => r.delete(i)), r;
    }
  }
  function kr(e, t = /* @__PURE__ */ new Map()) {
    if (bc(e) || !e || typeof e != "object")
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
        n[r] = kr(e[r], t);
    } else if (e instanceof Map) {
      n = /* @__PURE__ */ new Map(), t.set(e, n);
      for (const [r, i] of e.entries())
        n.set(r, kr(i, t));
    } else if (e instanceof Set) {
      n = /* @__PURE__ */ new Set(), t.set(e, n);
      for (const r of e)
        n.add(kr(r, t));
    } else if (e instanceof Object) {
      n = {}, t.set(e, n);
      for (const [r, i] of Object.entries(e))
        n[r] = kr(i, t);
    } else
      throw Error(`Unable to clone ${e}`);
    return n;
  }
  class xt {
    constructor(t) {
      this.type = void 0, this.deps = [], this.tests = void 0, this.transforms = void 0, this.conditions = [], this._mutate = void 0, this.internalTests = {}, this._whitelist = new Es(), this._blacklist = new Es(), this.exclusiveTests = /* @__PURE__ */ Object.create(null), this._typeCheck = void 0, this.spec = void 0, this.tests = [], this.transforms = [], this.withMutation(() => {
        this.typeError(Ct.notType);
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
      return n.type = this.type, n._typeCheck = this._typeCheck, n._whitelist = this._whitelist.clone(), n._blacklist = this._blacklist.clone(), n.internalTests = Object.assign({}, this.internalTests), n.exclusiveTests = Object.assign({}, this.exclusiveTests), n.deps = [...this.deps], n.conditions = [...this.conditions], n.tests = [...this.tests], n.transforms = [...this.transforms], n.spec = kr(Object.assign({}, this.spec, t)), n;
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
        if (i && $t(o))
          return o;
        let s = Sn(t), a = Sn(o);
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
      }, d = o.length, y = [];
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
        const T = o[v];
        T(g, c, function(h) {
          h && (Array.isArray(h) ? y.push(...h) : y.push(h)), --d <= 0 && f(y);
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
        path: l || a.includes(".") ? `${i || ""}[${l ? a : `"${a}"`}]` : (i ? `${i}.` : "") + t
      });
      return (f, d, y) => this.resolve(c)._validate(u, c, d, y);
    }
    validate(t, n) {
      var r;
      let i = this.resolve(Object.assign({}, n, {
        value: t
      })), o = (r = n == null ? void 0 : n.disableStackTrace) != null ? r : i.spec.disableStackTrace;
      return new Promise((s, a) => i._validate(t, n, (l, u) => {
        Ie.isError(l) && (l.value = u), a(l);
      }, (l, u) => {
        l.length ? a(new Ie(l, u, void 0, void 0, o)) : s(u);
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
        throw Ie.isError(a) && (a.value = l), a;
      }, (a, l) => {
        if (a.length)
          throw new Ie(a, t, void 0, void 0, s);
        o = l;
      }), o;
    }
    isValid(t, n) {
      return this.validate(t, n).then(() => !0, (r) => {
        if (Ie.isError(r))
          return !1;
        throw r;
      });
    }
    isValidSync(t, n) {
      try {
        return this.validateSync(t, n), !0;
      } catch (r) {
        if (Ie.isError(r))
          return !1;
        throw r;
      }
    }
    _getDefault(t) {
      let n = this.spec.default;
      return n == null ? n : typeof n == "function" ? n.call(this, t) : kr(n);
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
    defined(t = Ct.defined) {
      return this.optionality(!1, t);
    }
    nullable() {
      return this.nullability(!0);
    }
    nonNullable(t = Ct.notNull) {
      return this.nullability(!1, t);
    }
    required(t = Ct.required) {
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
      }, n.message === void 0 && (n.message = Ct.default), typeof n.test != "function")
        throw new TypeError("`test` is a required parameters");
      let r = this.clone(), i = hr(n), o = n.exclusive || n.name && r.exclusiveTests[n.name] === !0;
      if (n.exclusive && !n.name)
        throw new TypeError("Exclusive tests must provide a unique `name` identifying the test");
      return n.name && (r.exclusiveTests[n.name] = !!n.exclusive), r.tests = r.tests.filter((s) => !(s.OPTIONS.name === n.name && (o || s.OPTIONS.test === i.OPTIONS.test))), r.tests.push(i), r;
    }
    when(t, n) {
      !Array.isArray(t) && typeof t != "string" && (n = t, t = ".");
      let r = this.clone(), i = rg(t).map((o) => new sr(o));
      return i.forEach((o) => {
        o.isSibling && r.deps.push(o.key);
      }), r.conditions.push(typeof n == "function" ? new Ts(i, n) : Ts.fromOptions(i, n)), r;
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
    oneOf(t, n = Ct.oneOf) {
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
    notOneOf(t, n = Ct.notOneOf) {
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
  xt.prototype.__isYupSchema__ = !0;
  for (const e of ["validate", "validateSync"])
    xt.prototype[`${e}At`] = function(t, n, r = {}) {
      const {
        parent: i,
        parentPath: o,
        schema: s
      } = Rx(this, t, n, r.context);
      return s[e](i && i[o], Object.assign({}, r, {
        parent: i,
        path: t
      }));
    };
  for (const e of ["equals", "is"])
    xt.prototype[e] = xt.prototype.oneOf;
  for (const e of ["not", "nope"])
    xt.prototype[e] = xt.prototype.notOneOf;
  const Dx = /^(\d{4}|[+-]\d{6})(?:-?(\d{2})(?:-?(\d{2}))?)?(?:[ T]?(\d{2}):?(\d{2})(?::?(\d{2})(?:[,.](\d{1,}))?)?(?:(Z)|([+-])(\d{2})(?::?(\d{2}))?)?)?$/;
  function Mx(e) {
    const t = yu(e);
    if (!t)
      return Date.parse ? Date.parse(e) : Number.NaN;
    if (t.z === void 0 && t.plusMinus === void 0)
      return new Date(t.year, t.month, t.day, t.hour, t.minute, t.second, t.millisecond).valueOf();
    let n = 0;
    return t.z !== "Z" && t.plusMinus !== void 0 && (n = t.hourOffset * 60 + t.minuteOffset, t.plusMinus === "+" && (n = 0 - n)), Date.UTC(t.year, t.month, t.day, t.hour, t.minute + n, t.second, t.millisecond);
  }
  function yu(e) {
    var t, n;
    const r = Dx.exec(e);
    return r ? {
      year: Mt(r[1]),
      month: Mt(r[2], 1) - 1,
      day: Mt(r[3], 1),
      hour: Mt(r[4]),
      minute: Mt(r[5]),
      second: Mt(r[6]),
      millisecond: r[7] ? (
        // allow arbitrary sub-second precision beyond milliseconds
        Mt(r[7].substring(0, 3))
      ) : 0,
      precision: (t = (n = r[7]) == null ? void 0 : n.length) != null ? t : void 0,
      z: r[8] || void 0,
      plusMinus: r[9] || void 0,
      hourOffset: Mt(r[10]),
      minuteOffset: Mt(r[11])
    } : null;
  }
  function Mt(e, t = 0) {
    return Number(e) || t;
  }
  let Nx = (
    // eslint-disable-next-line
    /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/
  ), bx = (
    // eslint-disable-next-line
    /^((https?|ftp):)?\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(\#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i
  ), Lx = /^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i, Vx = "^\\d{4}-\\d{2}-\\d{2}", $x = "\\d{2}:\\d{2}:\\d{2}", Ix = "(([+-]\\d{2}(:?\\d{2})?)|Z)", zx = new RegExp(`${Vx}T${$x}(\\.\\d+)?${Ix}$`), Ux = (e) => $t(e) || e === e.trim(), Bx = {}.toString();
  function Go() {
    return new ag();
  }
  class ag extends xt {
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
          return i === Bx ? t : i;
        });
      });
    }
    required(t) {
      return super.required(t).withMutation((n) => n.test({
        message: t || Ct.required,
        name: "required",
        skipAbsent: !0,
        test: (r) => !!r.length
      }));
    }
    notRequired() {
      return super.notRequired().withMutation((t) => (t.tests = t.tests.filter((n) => n.OPTIONS.name !== "required"), t));
    }
    length(t, n = Ve.length) {
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
    min(t, n = Ve.min) {
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
    max(t, n = Ve.max) {
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
        message: i || Ve.matches,
        params: {
          regex: t
        },
        skipAbsent: !0,
        test: (s) => s === "" && r || s.search(t) !== -1
      });
    }
    email(t = Ve.email) {
      return this.matches(Nx, {
        name: "email",
        message: t,
        excludeEmptyString: !0
      });
    }
    url(t = Ve.url) {
      return this.matches(bx, {
        name: "url",
        message: t,
        excludeEmptyString: !0
      });
    }
    uuid(t = Ve.uuid) {
      return this.matches(Lx, {
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
      } = t : n = t), this.matches(zx, {
        name: "datetime",
        message: n || Ve.datetime,
        excludeEmptyString: !0
      }).test({
        name: "datetime_offset",
        message: n || Ve.datetime_offset,
        params: {
          allowOffset: r
        },
        skipAbsent: !0,
        test: (o) => {
          if (!o || r)
            return !0;
          const s = yu(o);
          return s ? !!s.z : !1;
        }
      }).test({
        name: "datetime_precision",
        message: n || Ve.datetime_precision,
        params: {
          precision: i
        },
        skipAbsent: !0,
        test: (o) => {
          if (!o || i == null)
            return !0;
          const s = yu(o);
          return s ? s.precision === i : !1;
        }
      });
    }
    //-- transforms --
    ensure() {
      return this.default("").transform((t) => t === null ? "" : t);
    }
    trim(t = Ve.trim) {
      return this.transform((n) => n != null ? n.trim() : n).test({
        message: t,
        name: "trim",
        test: Ux
      });
    }
    lowercase(t = Ve.lowercase) {
      return this.transform((n) => $t(n) ? n : n.toLowerCase()).test({
        message: t,
        name: "string_case",
        exclusive: !0,
        skipAbsent: !0,
        test: (n) => $t(n) || n === n.toLowerCase()
      });
    }
    uppercase(t = Ve.uppercase) {
      return this.transform((n) => $t(n) ? n : n.toUpperCase()).test({
        message: t,
        name: "string_case",
        exclusive: !0,
        skipAbsent: !0,
        test: (n) => $t(n) || n === n.toUpperCase()
      });
    }
  }
  Go.prototype = ag.prototype;
  let Hx = (e) => e != +e;
  function lg() {
    return new ug();
  }
  class ug extends xt {
    constructor() {
      super({
        type: "number",
        check(t) {
          return t instanceof Number && (t = t.valueOf()), typeof t == "number" && !Hx(t);
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
    min(t, n = Jt.min) {
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
    max(t, n = Jt.max) {
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
    lessThan(t, n = Jt.lessThan) {
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
    moreThan(t, n = Jt.moreThan) {
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
    positive(t = Jt.positive) {
      return this.moreThan(0, t);
    }
    negative(t = Jt.negative) {
      return this.lessThan(0, t);
    }
    integer(t = Jt.integer) {
      return this.test({
        name: "integer",
        message: t,
        skipAbsent: !0,
        test: (n) => Number.isInteger(n)
      });
    }
    truncate() {
      return this.transform((t) => $t(t) ? t : t | 0);
    }
    round(t) {
      var n;
      let r = ["ceil", "floor", "round", "trunc"];
      if (t = ((n = t) == null ? void 0 : n.toLowerCase()) || "round", t === "trunc")
        return this.truncate();
      if (r.indexOf(t.toLowerCase()) === -1)
        throw new TypeError("Only valid options for round() are: " + r.join(", "));
      return this.transform((i) => $t(i) ? i : Math[t](i));
    }
  }
  lg.prototype = ug.prototype;
  let Wx = /* @__PURE__ */ new Date(""), Kx = (e) => Object.prototype.toString.call(e) === "[object Date]";
  class ea extends xt {
    constructor() {
      super({
        type: "date",
        check(t) {
          return Kx(t) && !isNaN(t.getTime());
        }
      }), this.withMutation(() => {
        this.transform((t, n, r) => !r.spec.coerce || r.isType(t) || t === null ? t : (t = Mx(t), isNaN(t) ? ea.INVALID_DATE : new Date(t)));
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
    min(t, n = pu.min) {
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
    max(t, n = pu.max) {
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
  ea.INVALID_DATE = Wx;
  ea.prototype;
  function Gx(e, t = []) {
    let n = [], r = /* @__PURE__ */ new Set(), i = new Set(t.map(([s, a]) => `${s}-${a}`));
    function o(s, a) {
      let l = Yn.split(s)[0];
      r.add(l), i.has(`${a}-${l}`) || n.push([a, l]);
    }
    for (const s of Object.keys(e)) {
      let a = e[s];
      r.add(s), sr.isRef(a) && a.isSibling ? o(a.path, s) : bc(a) && "deps" in a && a.deps.forEach((l) => o(l, s));
    }
    return wx.array(Array.from(r), n).reverse();
  }
  function Qd(e, t) {
    let n = 1 / 0;
    return e.some((r, i) => {
      var o;
      if ((o = t.path) != null && o.includes(r))
        return n = i, !0;
    }), n;
  }
  function cg(e) {
    return (t, n) => Qd(e, t) - Qd(e, n);
  }
  const Yx = (e, t, n) => {
    if (typeof e != "string")
      return e;
    let r = e;
    try {
      r = JSON.parse(e);
    } catch {
    }
    return n.isType(r) ? r : e;
  };
  function Yo(e) {
    if ("fields" in e) {
      const t = {};
      for (const [n, r] of Object.entries(e.fields))
        t[n] = Yo(r);
      return e.setFields(t);
    }
    if (e.type === "array") {
      const t = e.optional();
      return t.innerType && (t.innerType = Yo(t.innerType)), t;
    }
    return e.type === "tuple" ? e.optional().clone({
      types: e.spec.types.map(Yo)
    }) : "optional" in e ? e.optional() : e;
  }
  const Qx = (e, t) => {
    const n = [...Yn.normalizePath(t)];
    if (n.length === 1)
      return n[0] in e;
    let r = n.pop(), i = Yn.getter(Yn.join(n), !0)(e);
    return !!(i && r in i);
  };
  let Xd = (e) => Object.prototype.toString.call(e) === "[object Object]";
  function Xx(e, t) {
    let n = Object.keys(e.fields);
    return Object.keys(t).filter((r) => n.indexOf(r) === -1);
  }
  const Zx = cg([]);
  function fg(e) {
    return new dg(e);
  }
  class dg extends xt {
    constructor(t) {
      super({
        type: "object",
        check(n) {
          return Xd(n) || typeof n == "function";
        }
      }), this.fields = /* @__PURE__ */ Object.create(null), this._sortErrors = Zx, this._nodes = [], this._excludedEdges = [], this.withMutation(() => {
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
        let d = o[f], y = f in i;
        if (d) {
          let g, v = i[f];
          u.path = (n.path ? `${n.path}.` : "") + f, d = d.resolve({
            value: v,
            context: n.context,
            parent: l
          });
          let T = d instanceof xt ? d.spec : void 0, p = T == null ? void 0 : T.strict;
          if (T != null && T.strip) {
            c = c || f in i;
            continue;
          }
          g = !n.__validating || !p ? (
            // TODO: use _cast, this is double resolving
            d.cast(i[f], u)
          ) : i[f], g !== void 0 && (l[f] = g);
        } else
          y && !s && (l[f] = i[f]);
        (y !== f in l || l[f] !== i[f]) && (c = !0);
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
        if (!a || !Xd(u)) {
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
      return r.fields = t, r._nodes = Gx(t, n), r._sortErrors = cg(Object.keys(t)), n && (r._excludedEdges = n), r;
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
      return Yo(this);
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
        return Qx(o, t) && (s = Object.assign({}, o), r || delete s[t], s[n] = i(o)), s;
      });
    }
    /** Parse an input JSON string to an object */
    json() {
      return this.transform(Yx);
    }
    noUnknown(t = !0, n = mu.noUnknown) {
      typeof t != "boolean" && (n = t, t = !0);
      let r = this.test({
        name: "noUnknown",
        exclusive: !0,
        message: n,
        test(i) {
          if (i == null)
            return !0;
          const o = Xx(this.schema, i);
          return !t || o.length === 0 || this.createError({
            params: {
              unknown: o.join(", ")
            }
          });
        }
      });
      return r.spec.noUnknown = t, r;
    }
    unknown(t = !0, n = mu.noUnknown) {
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
      return this.transformKeys(el.camelCase);
    }
    snakeCase() {
      return this.transformKeys(el.snakeCase);
    }
    constantCase() {
      return this.transformKeys((t) => el.snakeCase(t).toUpperCase());
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
  fg.prototype = dg.prototype;
  const qx = fg({
    firstName: Go().required("This field is required"),
    lastName: Go().required("This field is required"),
    age: lg().min(0).positive().max(125).required("This field is required"),
    email: Go().email()
  });
  function Jx(e, t) {
    const n = {};
    return e.username ? e.username.toLowerCase().includes(t.ContactInfo.firstName.toLowerCase()) || (n.username = `Username should contain your first name (${t.ContactInfo.firstName})`) : n.username = "This field is required", n;
  }
  var ew = function(t) {
    return tw(t) && !nw(t);
  };
  function tw(e) {
    return !!e && typeof e == "object";
  }
  function nw(e) {
    var t = Object.prototype.toString.call(e);
    return t === "[object RegExp]" || t === "[object Date]" || ow(e);
  }
  var rw = typeof Symbol == "function" && Symbol.for, iw = rw ? Symbol.for("react.element") : 60103;
  function ow(e) {
    return e.$$typeof === iw;
  }
  function sw(e) {
    return Array.isArray(e) ? [] : {};
  }
  function Ps(e, t) {
    return t.clone !== !1 && t.isMergeableObject(e) ? Wi(sw(e), e, t) : e;
  }
  function aw(e, t, n) {
    return e.concat(t).map(function(r) {
      return Ps(r, n);
    });
  }
  function lw(e, t, n) {
    var r = {};
    return n.isMergeableObject(e) && Object.keys(e).forEach(function(i) {
      r[i] = Ps(e[i], n);
    }), Object.keys(t).forEach(function(i) {
      !n.isMergeableObject(t[i]) || !e[i] ? r[i] = Ps(t[i], n) : r[i] = Wi(e[i], t[i], n);
    }), r;
  }
  function Wi(e, t, n) {
    n = n || {}, n.arrayMerge = n.arrayMerge || aw, n.isMergeableObject = n.isMergeableObject || ew;
    var r = Array.isArray(t), i = Array.isArray(e), o = r === i;
    return o ? r ? n.arrayMerge(e, t, n) : lw(e, t, n) : Ps(t, n);
  }
  Wi.all = function(t, n) {
    if (!Array.isArray(t))
      throw new Error("first argument should be an array");
    return t.reduce(function(r, i) {
      return Wi(r, i, n);
    }, {});
  };
  var gu = Wi, hg = typeof global == "object" && global && global.Object === Object && global, uw = typeof self == "object" && self && self.Object === Object && self, Rt = hg || uw || Function("return this")(), Pn = Rt.Symbol, pg = Object.prototype, cw = pg.hasOwnProperty, fw = pg.toString, si = Pn ? Pn.toStringTag : void 0;
  function dw(e) {
    var t = cw.call(e, si), n = e[si];
    try {
      e[si] = void 0;
      var r = !0;
    } catch {
    }
    var i = fw.call(e);
    return r && (t ? e[si] = n : delete e[si]), i;
  }
  var hw = Object.prototype, pw = hw.toString;
  function mw(e) {
    return pw.call(e);
  }
  var yw = "[object Null]", gw = "[object Undefined]", Zd = Pn ? Pn.toStringTag : void 0;
  function ar(e) {
    return e == null ? e === void 0 ? gw : yw : Zd && Zd in Object(e) ? dw(e) : mw(e);
  }
  function mg(e, t) {
    return function(n) {
      return e(t(n));
    };
  }
  var Lc = mg(Object.getPrototypeOf, Object);
  function lr(e) {
    return e != null && typeof e == "object";
  }
  var vw = "[object Object]", Sw = Function.prototype, xw = Object.prototype, yg = Sw.toString, ww = xw.hasOwnProperty, Tw = yg.call(Object);
  function qd(e) {
    if (!lr(e) || ar(e) != vw)
      return !1;
    var t = Lc(e);
    if (t === null)
      return !0;
    var n = ww.call(t, "constructor") && t.constructor;
    return typeof n == "function" && n instanceof n && yg.call(n) == Tw;
  }
  var Jd = Array.isArray, eh = Object.keys, Ew = Object.prototype.hasOwnProperty, Pw = typeof Element < "u";
  function vu(e, t) {
    if (e === t)
      return !0;
    if (e && t && typeof e == "object" && typeof t == "object") {
      var n = Jd(e), r = Jd(t), i, o, s;
      if (n && r) {
        if (o = e.length, o != t.length)
          return !1;
        for (i = o; i-- !== 0; )
          if (!vu(e[i], t[i]))
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
      var f = eh(e);
      if (o = f.length, o !== eh(t).length)
        return !1;
      for (i = o; i-- !== 0; )
        if (!Ew.call(t, f[i]))
          return !1;
      if (Pw && e instanceof Element && t instanceof Element)
        return e === t;
      for (i = o; i-- !== 0; )
        if (s = f[i], !(s === "_owner" && e.$$typeof) && !vu(e[s], t[s]))
          return !1;
      return !0;
    }
    return e !== e && t !== t;
  }
  var Cw = function(t, n) {
    try {
      return vu(t, n);
    } catch (r) {
      if (r.message && r.message.match(/stack|recursion/i) || r.number === -2146828260)
        return console.warn("Warning: react-fast-compare does not handle circular references.", r.name, r.message), !1;
      throw r;
    }
  };
  const rn = /* @__PURE__ */ Ns(Cw);
  function kw() {
    this.__data__ = [], this.size = 0;
  }
  function gg(e, t) {
    return e === t || e !== e && t !== t;
  }
  function ta(e, t) {
    for (var n = e.length; n--; )
      if (gg(e[n][0], t))
        return n;
    return -1;
  }
  var _w = Array.prototype, Aw = _w.splice;
  function Ow(e) {
    var t = this.__data__, n = ta(t, e);
    if (n < 0)
      return !1;
    var r = t.length - 1;
    return n == r ? t.pop() : Aw.call(t, n, 1), --this.size, !0;
  }
  function jw(e) {
    var t = this.__data__, n = ta(t, e);
    return n < 0 ? void 0 : t[n][1];
  }
  function Fw(e) {
    return ta(this.__data__, e) > -1;
  }
  function Rw(e, t) {
    var n = this.__data__, r = ta(n, e);
    return r < 0 ? (++this.size, n.push([e, t])) : n[r][1] = t, this;
  }
  function Xt(e) {
    var t = -1, n = e == null ? 0 : e.length;
    for (this.clear(); ++t < n; ) {
      var r = e[t];
      this.set(r[0], r[1]);
    }
  }
  Xt.prototype.clear = kw;
  Xt.prototype.delete = Ow;
  Xt.prototype.get = jw;
  Xt.prototype.has = Fw;
  Xt.prototype.set = Rw;
  function Dw() {
    this.__data__ = new Xt(), this.size = 0;
  }
  function Mw(e) {
    var t = this.__data__, n = t.delete(e);
    return this.size = t.size, n;
  }
  function Nw(e) {
    return this.__data__.get(e);
  }
  function bw(e) {
    return this.__data__.has(e);
  }
  function ro(e) {
    var t = typeof e;
    return e != null && (t == "object" || t == "function");
  }
  var Lw = "[object AsyncFunction]", Vw = "[object Function]", $w = "[object GeneratorFunction]", Iw = "[object Proxy]";
  function vg(e) {
    if (!ro(e))
      return !1;
    var t = ar(e);
    return t == Vw || t == $w || t == Lw || t == Iw;
  }
  var tl = Rt["__core-js_shared__"], th = function() {
    var e = /[^.]+$/.exec(tl && tl.keys && tl.keys.IE_PROTO || "");
    return e ? "Symbol(src)_1." + e : "";
  }();
  function zw(e) {
    return !!th && th in e;
  }
  var Uw = Function.prototype, Bw = Uw.toString;
  function ur(e) {
    if (e != null) {
      try {
        return Bw.call(e);
      } catch {
      }
      try {
        return e + "";
      } catch {
      }
    }
    return "";
  }
  var Hw = /[\\^$.*+?()[\]{}|]/g, Ww = /^\[object .+?Constructor\]$/, Kw = Function.prototype, Gw = Object.prototype, Yw = Kw.toString, Qw = Gw.hasOwnProperty, Xw = RegExp(
    "^" + Yw.call(Qw).replace(Hw, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
  );
  function Zw(e) {
    if (!ro(e) || zw(e))
      return !1;
    var t = vg(e) ? Xw : Ww;
    return t.test(ur(e));
  }
  function qw(e, t) {
    return e == null ? void 0 : e[t];
  }
  function cr(e, t) {
    var n = qw(e, t);
    return Zw(n) ? n : void 0;
  }
  var Ki = cr(Rt, "Map"), Gi = cr(Object, "create");
  function Jw() {
    this.__data__ = Gi ? Gi(null) : {}, this.size = 0;
  }
  function eT(e) {
    var t = this.has(e) && delete this.__data__[e];
    return this.size -= t ? 1 : 0, t;
  }
  var tT = "__lodash_hash_undefined__", nT = Object.prototype, rT = nT.hasOwnProperty;
  function iT(e) {
    var t = this.__data__;
    if (Gi) {
      var n = t[e];
      return n === tT ? void 0 : n;
    }
    return rT.call(t, e) ? t[e] : void 0;
  }
  var oT = Object.prototype, sT = oT.hasOwnProperty;
  function aT(e) {
    var t = this.__data__;
    return Gi ? t[e] !== void 0 : sT.call(t, e);
  }
  var lT = "__lodash_hash_undefined__";
  function uT(e, t) {
    var n = this.__data__;
    return this.size += this.has(e) ? 0 : 1, n[e] = Gi && t === void 0 ? lT : t, this;
  }
  function tr(e) {
    var t = -1, n = e == null ? 0 : e.length;
    for (this.clear(); ++t < n; ) {
      var r = e[t];
      this.set(r[0], r[1]);
    }
  }
  tr.prototype.clear = Jw;
  tr.prototype.delete = eT;
  tr.prototype.get = iT;
  tr.prototype.has = aT;
  tr.prototype.set = uT;
  function cT() {
    this.size = 0, this.__data__ = {
      hash: new tr(),
      map: new (Ki || Xt)(),
      string: new tr()
    };
  }
  function fT(e) {
    var t = typeof e;
    return t == "string" || t == "number" || t == "symbol" || t == "boolean" ? e !== "__proto__" : e === null;
  }
  function na(e, t) {
    var n = e.__data__;
    return fT(t) ? n[typeof t == "string" ? "string" : "hash"] : n.map;
  }
  function dT(e) {
    var t = na(this, e).delete(e);
    return this.size -= t ? 1 : 0, t;
  }
  function hT(e) {
    return na(this, e).get(e);
  }
  function pT(e) {
    return na(this, e).has(e);
  }
  function mT(e, t) {
    var n = na(this, e), r = n.size;
    return n.set(e, t), this.size += n.size == r ? 0 : 1, this;
  }
  function Fn(e) {
    var t = -1, n = e == null ? 0 : e.length;
    for (this.clear(); ++t < n; ) {
      var r = e[t];
      this.set(r[0], r[1]);
    }
  }
  Fn.prototype.clear = cT;
  Fn.prototype.delete = dT;
  Fn.prototype.get = hT;
  Fn.prototype.has = pT;
  Fn.prototype.set = mT;
  var yT = 200;
  function gT(e, t) {
    var n = this.__data__;
    if (n instanceof Xt) {
      var r = n.__data__;
      if (!Ki || r.length < yT - 1)
        return r.push([e, t]), this.size = ++n.size, this;
      n = this.__data__ = new Fn(r);
    }
    return n.set(e, t), this.size = n.size, this;
  }
  function Xr(e) {
    var t = this.__data__ = new Xt(e);
    this.size = t.size;
  }
  Xr.prototype.clear = Dw;
  Xr.prototype.delete = Mw;
  Xr.prototype.get = Nw;
  Xr.prototype.has = bw;
  Xr.prototype.set = gT;
  function vT(e, t) {
    for (var n = -1, r = e == null ? 0 : e.length; ++n < r && t(e[n], n, e) !== !1; )
      ;
    return e;
  }
  var nh = function() {
    try {
      var e = cr(Object, "defineProperty");
      return e({}, "", {}), e;
    } catch {
    }
  }();
  function Sg(e, t, n) {
    t == "__proto__" && nh ? nh(e, t, {
      configurable: !0,
      enumerable: !0,
      value: n,
      writable: !0
    }) : e[t] = n;
  }
  var ST = Object.prototype, xT = ST.hasOwnProperty;
  function xg(e, t, n) {
    var r = e[t];
    (!(xT.call(e, t) && gg(r, n)) || n === void 0 && !(t in e)) && Sg(e, t, n);
  }
  function ra(e, t, n, r) {
    var i = !n;
    n || (n = {});
    for (var o = -1, s = t.length; ++o < s; ) {
      var a = t[o], l = r ? r(n[a], e[a], a, n, e) : void 0;
      l === void 0 && (l = e[a]), i ? Sg(n, a, l) : xg(n, a, l);
    }
    return n;
  }
  function wT(e, t) {
    for (var n = -1, r = Array(e); ++n < e; )
      r[n] = t(n);
    return r;
  }
  var TT = "[object Arguments]";
  function rh(e) {
    return lr(e) && ar(e) == TT;
  }
  var wg = Object.prototype, ET = wg.hasOwnProperty, PT = wg.propertyIsEnumerable, CT = rh(/* @__PURE__ */ function() {
    return arguments;
  }()) ? rh : function(e) {
    return lr(e) && ET.call(e, "callee") && !PT.call(e, "callee");
  }, io = Array.isArray;
  function kT() {
    return !1;
  }
  var Tg = typeof Ge == "object" && Ge && !Ge.nodeType && Ge, ih = Tg && typeof Ye == "object" && Ye && !Ye.nodeType && Ye, _T = ih && ih.exports === Tg, oh = _T ? Rt.Buffer : void 0, AT = oh ? oh.isBuffer : void 0, Eg = AT || kT, OT = 9007199254740991, jT = /^(?:0|[1-9]\d*)$/;
  function FT(e, t) {
    var n = typeof e;
    return t = t ?? OT, !!t && (n == "number" || n != "symbol" && jT.test(e)) && e > -1 && e % 1 == 0 && e < t;
  }
  var RT = 9007199254740991;
  function Pg(e) {
    return typeof e == "number" && e > -1 && e % 1 == 0 && e <= RT;
  }
  var DT = "[object Arguments]", MT = "[object Array]", NT = "[object Boolean]", bT = "[object Date]", LT = "[object Error]", VT = "[object Function]", $T = "[object Map]", IT = "[object Number]", zT = "[object Object]", UT = "[object RegExp]", BT = "[object Set]", HT = "[object String]", WT = "[object WeakMap]", KT = "[object ArrayBuffer]", GT = "[object DataView]", YT = "[object Float32Array]", QT = "[object Float64Array]", XT = "[object Int8Array]", ZT = "[object Int16Array]", qT = "[object Int32Array]", JT = "[object Uint8Array]", eE = "[object Uint8ClampedArray]", tE = "[object Uint16Array]", nE = "[object Uint32Array]", q = {};
  q[YT] = q[QT] = q[XT] = q[ZT] = q[qT] = q[JT] = q[eE] = q[tE] = q[nE] = !0;
  q[DT] = q[MT] = q[KT] = q[NT] = q[GT] = q[bT] = q[LT] = q[VT] = q[$T] = q[IT] = q[zT] = q[UT] = q[BT] = q[HT] = q[WT] = !1;
  function rE(e) {
    return lr(e) && Pg(e.length) && !!q[ar(e)];
  }
  function Vc(e) {
    return function(t) {
      return e(t);
    };
  }
  var Cg = typeof Ge == "object" && Ge && !Ge.nodeType && Ge, Ti = Cg && typeof Ye == "object" && Ye && !Ye.nodeType && Ye, iE = Ti && Ti.exports === Cg, nl = iE && hg.process, Hr = function() {
    try {
      var e = Ti && Ti.require && Ti.require("util").types;
      return e || nl && nl.binding && nl.binding("util");
    } catch {
    }
  }(), sh = Hr && Hr.isTypedArray, oE = sh ? Vc(sh) : rE, sE = Object.prototype, aE = sE.hasOwnProperty;
  function kg(e, t) {
    var n = io(e), r = !n && CT(e), i = !n && !r && Eg(e), o = !n && !r && !i && oE(e), s = n || r || i || o, a = s ? wT(e.length, String) : [], l = a.length;
    for (var u in e)
      (t || aE.call(e, u)) && !(s && // Safari 9 has enumerable `arguments.length` in strict mode.
      (u == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
      i && (u == "offset" || u == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
      o && (u == "buffer" || u == "byteLength" || u == "byteOffset") || // Skip index properties.
      FT(u, l))) && a.push(u);
    return a;
  }
  var lE = Object.prototype;
  function $c(e) {
    var t = e && e.constructor, n = typeof t == "function" && t.prototype || lE;
    return e === n;
  }
  var uE = mg(Object.keys, Object), cE = Object.prototype, fE = cE.hasOwnProperty;
  function dE(e) {
    if (!$c(e))
      return uE(e);
    var t = [];
    for (var n in Object(e))
      fE.call(e, n) && n != "constructor" && t.push(n);
    return t;
  }
  function _g(e) {
    return e != null && Pg(e.length) && !vg(e);
  }
  function Ic(e) {
    return _g(e) ? kg(e) : dE(e);
  }
  function hE(e, t) {
    return e && ra(t, Ic(t), e);
  }
  function pE(e) {
    var t = [];
    if (e != null)
      for (var n in Object(e))
        t.push(n);
    return t;
  }
  var mE = Object.prototype, yE = mE.hasOwnProperty;
  function gE(e) {
    if (!ro(e))
      return pE(e);
    var t = $c(e), n = [];
    for (var r in e)
      r == "constructor" && (t || !yE.call(e, r)) || n.push(r);
    return n;
  }
  function zc(e) {
    return _g(e) ? kg(e, !0) : gE(e);
  }
  function vE(e, t) {
    return e && ra(t, zc(t), e);
  }
  var Ag = typeof Ge == "object" && Ge && !Ge.nodeType && Ge, ah = Ag && typeof Ye == "object" && Ye && !Ye.nodeType && Ye, SE = ah && ah.exports === Ag, lh = SE ? Rt.Buffer : void 0, uh = lh ? lh.allocUnsafe : void 0;
  function xE(e, t) {
    if (t)
      return e.slice();
    var n = e.length, r = uh ? uh(n) : new e.constructor(n);
    return e.copy(r), r;
  }
  function Og(e, t) {
    var n = -1, r = e.length;
    for (t || (t = Array(r)); ++n < r; )
      t[n] = e[n];
    return t;
  }
  function wE(e, t) {
    for (var n = -1, r = e == null ? 0 : e.length, i = 0, o = []; ++n < r; ) {
      var s = e[n];
      t(s, n, e) && (o[i++] = s);
    }
    return o;
  }
  function jg() {
    return [];
  }
  var TE = Object.prototype, EE = TE.propertyIsEnumerable, ch = Object.getOwnPropertySymbols, Uc = ch ? function(e) {
    return e == null ? [] : (e = Object(e), wE(ch(e), function(t) {
      return EE.call(e, t);
    }));
  } : jg;
  function PE(e, t) {
    return ra(e, Uc(e), t);
  }
  function Fg(e, t) {
    for (var n = -1, r = t.length, i = e.length; ++n < r; )
      e[i + n] = t[n];
    return e;
  }
  var CE = Object.getOwnPropertySymbols, Rg = CE ? function(e) {
    for (var t = []; e; )
      Fg(t, Uc(e)), e = Lc(e);
    return t;
  } : jg;
  function kE(e, t) {
    return ra(e, Rg(e), t);
  }
  function Dg(e, t, n) {
    var r = t(e);
    return io(e) ? r : Fg(r, n(e));
  }
  function _E(e) {
    return Dg(e, Ic, Uc);
  }
  function AE(e) {
    return Dg(e, zc, Rg);
  }
  var Su = cr(Rt, "DataView"), xu = cr(Rt, "Promise"), wu = cr(Rt, "Set"), Tu = cr(Rt, "WeakMap"), fh = "[object Map]", OE = "[object Object]", dh = "[object Promise]", hh = "[object Set]", ph = "[object WeakMap]", mh = "[object DataView]", jE = ur(Su), FE = ur(Ki), RE = ur(xu), DE = ur(wu), ME = ur(Tu), Ln = ar;
  (Su && Ln(new Su(new ArrayBuffer(1))) != mh || Ki && Ln(new Ki()) != fh || xu && Ln(xu.resolve()) != dh || wu && Ln(new wu()) != hh || Tu && Ln(new Tu()) != ph) && (Ln = function(e) {
    var t = ar(e), n = t == OE ? e.constructor : void 0, r = n ? ur(n) : "";
    if (r)
      switch (r) {
        case jE:
          return mh;
        case FE:
          return fh;
        case RE:
          return dh;
        case DE:
          return hh;
        case ME:
          return ph;
      }
    return t;
  });
  const Bc = Ln;
  var NE = Object.prototype, bE = NE.hasOwnProperty;
  function LE(e) {
    var t = e.length, n = new e.constructor(t);
    return t && typeof e[0] == "string" && bE.call(e, "index") && (n.index = e.index, n.input = e.input), n;
  }
  var yh = Rt.Uint8Array;
  function Hc(e) {
    var t = new e.constructor(e.byteLength);
    return new yh(t).set(new yh(e)), t;
  }
  function VE(e, t) {
    var n = t ? Hc(e.buffer) : e.buffer;
    return new e.constructor(n, e.byteOffset, e.byteLength);
  }
  var $E = /\w*$/;
  function IE(e) {
    var t = new e.constructor(e.source, $E.exec(e));
    return t.lastIndex = e.lastIndex, t;
  }
  var gh = Pn ? Pn.prototype : void 0, vh = gh ? gh.valueOf : void 0;
  function zE(e) {
    return vh ? Object(vh.call(e)) : {};
  }
  function UE(e, t) {
    var n = t ? Hc(e.buffer) : e.buffer;
    return new e.constructor(n, e.byteOffset, e.length);
  }
  var BE = "[object Boolean]", HE = "[object Date]", WE = "[object Map]", KE = "[object Number]", GE = "[object RegExp]", YE = "[object Set]", QE = "[object String]", XE = "[object Symbol]", ZE = "[object ArrayBuffer]", qE = "[object DataView]", JE = "[object Float32Array]", eP = "[object Float64Array]", tP = "[object Int8Array]", nP = "[object Int16Array]", rP = "[object Int32Array]", iP = "[object Uint8Array]", oP = "[object Uint8ClampedArray]", sP = "[object Uint16Array]", aP = "[object Uint32Array]";
  function lP(e, t, n) {
    var r = e.constructor;
    switch (t) {
      case ZE:
        return Hc(e);
      case BE:
      case HE:
        return new r(+e);
      case qE:
        return VE(e, n);
      case JE:
      case eP:
      case tP:
      case nP:
      case rP:
      case iP:
      case oP:
      case sP:
      case aP:
        return UE(e, n);
      case WE:
        return new r();
      case KE:
      case QE:
        return new r(e);
      case GE:
        return IE(e);
      case YE:
        return new r();
      case XE:
        return zE(e);
    }
  }
  var Sh = Object.create, uP = /* @__PURE__ */ function() {
    function e() {
    }
    return function(t) {
      if (!ro(t))
        return {};
      if (Sh)
        return Sh(t);
      e.prototype = t;
      var n = new e();
      return e.prototype = void 0, n;
    };
  }();
  function cP(e) {
    return typeof e.constructor == "function" && !$c(e) ? uP(Lc(e)) : {};
  }
  var fP = "[object Map]";
  function dP(e) {
    return lr(e) && Bc(e) == fP;
  }
  var xh = Hr && Hr.isMap, hP = xh ? Vc(xh) : dP, pP = "[object Set]";
  function mP(e) {
    return lr(e) && Bc(e) == pP;
  }
  var wh = Hr && Hr.isSet, yP = wh ? Vc(wh) : mP, gP = 1, vP = 2, SP = 4, Mg = "[object Arguments]", xP = "[object Array]", wP = "[object Boolean]", TP = "[object Date]", EP = "[object Error]", Ng = "[object Function]", PP = "[object GeneratorFunction]", CP = "[object Map]", kP = "[object Number]", bg = "[object Object]", _P = "[object RegExp]", AP = "[object Set]", OP = "[object String]", jP = "[object Symbol]", FP = "[object WeakMap]", RP = "[object ArrayBuffer]", DP = "[object DataView]", MP = "[object Float32Array]", NP = "[object Float64Array]", bP = "[object Int8Array]", LP = "[object Int16Array]", VP = "[object Int32Array]", $P = "[object Uint8Array]", IP = "[object Uint8ClampedArray]", zP = "[object Uint16Array]", UP = "[object Uint32Array]", Q = {};
  Q[Mg] = Q[xP] = Q[RP] = Q[DP] = Q[wP] = Q[TP] = Q[MP] = Q[NP] = Q[bP] = Q[LP] = Q[VP] = Q[CP] = Q[kP] = Q[bg] = Q[_P] = Q[AP] = Q[OP] = Q[jP] = Q[$P] = Q[IP] = Q[zP] = Q[UP] = !0;
  Q[EP] = Q[Ng] = Q[FP] = !1;
  function Ei(e, t, n, r, i, o) {
    var s, a = t & gP, l = t & vP, u = t & SP;
    if (n && (s = i ? n(e, r, i, o) : n(e)), s !== void 0)
      return s;
    if (!ro(e))
      return e;
    var c = io(e);
    if (c) {
      if (s = LE(e), !a)
        return Og(e, s);
    } else {
      var f = Bc(e), d = f == Ng || f == PP;
      if (Eg(e))
        return xE(e, a);
      if (f == bg || f == Mg || d && !i) {
        if (s = l || d ? {} : cP(e), !a)
          return l ? kE(e, vE(s, e)) : PE(e, hE(s, e));
      } else {
        if (!Q[f])
          return i ? e : {};
        s = lP(e, f, a);
      }
    }
    o || (o = new Xr());
    var y = o.get(e);
    if (y)
      return y;
    o.set(e, s), yP(e) ? e.forEach(function(T) {
      s.add(Ei(T, t, n, T, e, o));
    }) : hP(e) && e.forEach(function(T, p) {
      s.set(p, Ei(T, t, n, p, e, o));
    });
    var g = u ? l ? AE : _E : l ? zc : Ic, v = c ? void 0 : g(e);
    return vT(v || e, function(T, p) {
      v && (p = T, T = e[p]), xg(s, p, Ei(T, t, n, p, e, o));
    }), s;
  }
  var BP = 4;
  function Th(e) {
    return Ei(e, BP);
  }
  function Lg(e, t) {
    for (var n = -1, r = e == null ? 0 : e.length, i = Array(r); ++n < r; )
      i[n] = t(e[n], n, e);
    return i;
  }
  var HP = "[object Symbol]";
  function Wc(e) {
    return typeof e == "symbol" || lr(e) && ar(e) == HP;
  }
  var WP = "Expected a function";
  function Kc(e, t) {
    if (typeof e != "function" || t != null && typeof t != "function")
      throw new TypeError(WP);
    var n = function() {
      var r = arguments, i = t ? t.apply(this, r) : r[0], o = n.cache;
      if (o.has(i))
        return o.get(i);
      var s = e.apply(this, r);
      return n.cache = o.set(i, s) || o, s;
    };
    return n.cache = new (Kc.Cache || Fn)(), n;
  }
  Kc.Cache = Fn;
  var KP = 500;
  function GP(e) {
    var t = Kc(e, function(r) {
      return n.size === KP && n.clear(), r;
    }), n = t.cache;
    return t;
  }
  var YP = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, QP = /\\(\\)?/g, XP = GP(function(e) {
    var t = [];
    return e.charCodeAt(0) === 46 && t.push(""), e.replace(YP, function(n, r, i, o) {
      t.push(i ? o.replace(QP, "$1") : r || n);
    }), t;
  });
  const ZP = XP;
  var qP = 1 / 0;
  function JP(e) {
    if (typeof e == "string" || Wc(e))
      return e;
    var t = e + "";
    return t == "0" && 1 / e == -qP ? "-0" : t;
  }
  var eC = 1 / 0, Eh = Pn ? Pn.prototype : void 0, Ph = Eh ? Eh.toString : void 0;
  function Vg(e) {
    if (typeof e == "string")
      return e;
    if (io(e))
      return Lg(e, Vg) + "";
    if (Wc(e))
      return Ph ? Ph.call(e) : "";
    var t = e + "";
    return t == "0" && 1 / e == -eC ? "-0" : t;
  }
  function tC(e) {
    return e == null ? "" : Vg(e);
  }
  function $g(e) {
    return io(e) ? Lg(e, JP) : Wc(e) ? [e] : Og(ZP(tC(e)));
  }
  var Ig = { exports: {} }, Y = {};
  /** @license React v16.13.1
   * react-is.production.min.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */
  var xe = typeof Symbol == "function" && Symbol.for, Gc = xe ? Symbol.for("react.element") : 60103, Yc = xe ? Symbol.for("react.portal") : 60106, ia = xe ? Symbol.for("react.fragment") : 60107, oa = xe ? Symbol.for("react.strict_mode") : 60108, sa = xe ? Symbol.for("react.profiler") : 60114, aa = xe ? Symbol.for("react.provider") : 60109, la = xe ? Symbol.for("react.context") : 60110, Qc = xe ? Symbol.for("react.async_mode") : 60111, ua = xe ? Symbol.for("react.concurrent_mode") : 60111, ca = xe ? Symbol.for("react.forward_ref") : 60112, fa = xe ? Symbol.for("react.suspense") : 60113, nC = xe ? Symbol.for("react.suspense_list") : 60120, da = xe ? Symbol.for("react.memo") : 60115, ha = xe ? Symbol.for("react.lazy") : 60116, rC = xe ? Symbol.for("react.block") : 60121, iC = xe ? Symbol.for("react.fundamental") : 60117, oC = xe ? Symbol.for("react.responder") : 60118, sC = xe ? Symbol.for("react.scope") : 60119;
  function et(e) {
    if (typeof e == "object" && e !== null) {
      var t = e.$$typeof;
      switch (t) {
        case Gc:
          switch (e = e.type, e) {
            case Qc:
            case ua:
            case ia:
            case sa:
            case oa:
            case fa:
              return e;
            default:
              switch (e = e && e.$$typeof, e) {
                case la:
                case ca:
                case ha:
                case da:
                case aa:
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
  function zg(e) {
    return et(e) === ua;
  }
  Y.AsyncMode = Qc;
  Y.ConcurrentMode = ua;
  Y.ContextConsumer = la;
  Y.ContextProvider = aa;
  Y.Element = Gc;
  Y.ForwardRef = ca;
  Y.Fragment = ia;
  Y.Lazy = ha;
  Y.Memo = da;
  Y.Portal = Yc;
  Y.Profiler = sa;
  Y.StrictMode = oa;
  Y.Suspense = fa;
  Y.isAsyncMode = function(e) {
    return zg(e) || et(e) === Qc;
  };
  Y.isConcurrentMode = zg;
  Y.isContextConsumer = function(e) {
    return et(e) === la;
  };
  Y.isContextProvider = function(e) {
    return et(e) === aa;
  };
  Y.isElement = function(e) {
    return typeof e == "object" && e !== null && e.$$typeof === Gc;
  };
  Y.isForwardRef = function(e) {
    return et(e) === ca;
  };
  Y.isFragment = function(e) {
    return et(e) === ia;
  };
  Y.isLazy = function(e) {
    return et(e) === ha;
  };
  Y.isMemo = function(e) {
    return et(e) === da;
  };
  Y.isPortal = function(e) {
    return et(e) === Yc;
  };
  Y.isProfiler = function(e) {
    return et(e) === sa;
  };
  Y.isStrictMode = function(e) {
    return et(e) === oa;
  };
  Y.isSuspense = function(e) {
    return et(e) === fa;
  };
  Y.isValidElementType = function(e) {
    return typeof e == "string" || typeof e == "function" || e === ia || e === ua || e === sa || e === oa || e === fa || e === nC || typeof e == "object" && e !== null && (e.$$typeof === ha || e.$$typeof === da || e.$$typeof === aa || e.$$typeof === la || e.$$typeof === ca || e.$$typeof === iC || e.$$typeof === oC || e.$$typeof === sC || e.$$typeof === rC);
  };
  Y.typeOf = et;
  Ig.exports = Y;
  var aC = Ig.exports, Xc = aC, lC = {
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
  }, uC = {
    name: !0,
    length: !0,
    prototype: !0,
    caller: !0,
    callee: !0,
    arguments: !0,
    arity: !0
  }, cC = {
    $$typeof: !0,
    render: !0,
    defaultProps: !0,
    displayName: !0,
    propTypes: !0
  }, Ug = {
    $$typeof: !0,
    compare: !0,
    defaultProps: !0,
    displayName: !0,
    propTypes: !0,
    type: !0
  }, Zc = {};
  Zc[Xc.ForwardRef] = cC;
  Zc[Xc.Memo] = Ug;
  function Ch(e) {
    return Xc.isMemo(e) ? Ug : Zc[e.$$typeof] || lC;
  }
  var fC = Object.defineProperty, dC = Object.getOwnPropertyNames, kh = Object.getOwnPropertySymbols, hC = Object.getOwnPropertyDescriptor, pC = Object.getPrototypeOf, _h = Object.prototype;
  function Bg(e, t, n) {
    if (typeof t != "string") {
      if (_h) {
        var r = pC(t);
        r && r !== _h && Bg(e, r, n);
      }
      var i = dC(t);
      kh && (i = i.concat(kh(t)));
      for (var o = Ch(e), s = Ch(t), a = 0; a < i.length; ++a) {
        var l = i[a];
        if (!uC[l] && !(n && n[l]) && !(s && s[l]) && !(o && o[l])) {
          var u = hC(t, l);
          try {
            fC(e, l, u);
          } catch {
          }
        }
      }
    }
    return e;
  }
  var mC = Bg;
  const yC = /* @__PURE__ */ Ns(mC);
  var gC = 1, vC = 4;
  function SC(e) {
    return Ei(e, gC | vC);
  }
  function K() {
    return K = Object.assign || function(e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = arguments[t];
        for (var r in n)
          Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
      }
      return e;
    }, K.apply(this, arguments);
  }
  function Hg(e, t) {
    e.prototype = Object.create(t.prototype), e.prototype.constructor = e, e.__proto__ = t;
  }
  function cn(e, t) {
    if (e == null)
      return {};
    var n = {}, r = Object.keys(e), i, o;
    for (o = 0; o < r.length; o++)
      i = r[o], !(t.indexOf(i) >= 0) && (n[i] = e[i]);
    return n;
  }
  function Ah(e) {
    if (e === void 0)
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return e;
  }
  var pa = /* @__PURE__ */ x.createContext(void 0);
  pa.displayName = "FormikContext";
  var xC = pa.Provider, wC = pa.Consumer;
  function oo() {
    var e = x.useContext(pa);
    return e;
  }
  var Oh = function(t) {
    return Array.isArray(t) && t.length === 0;
  }, Ee = function(t) {
    return typeof t == "function";
  }, so = function(t) {
    return t !== null && typeof t == "object";
  }, TC = function(t) {
    return String(Math.floor(Number(t))) === t;
  }, rl = function(t) {
    return Object.prototype.toString.call(t) === "[object String]";
  }, Wg = function(t) {
    return x.Children.count(t) === 0;
  }, il = function(t) {
    return so(t) && Ee(t.then);
  };
  function te(e, t, n, r) {
    r === void 0 && (r = 0);
    for (var i = $g(t); e && r < i.length; )
      e = e[i[r++]];
    return r !== i.length && !e || e === void 0 ? n : e;
  }
  function Ot(e, t, n) {
    for (var r = Th(e), i = r, o = 0, s = $g(t); o < s.length - 1; o++) {
      var a = s[o], l = te(e, s.slice(0, o + 1));
      if (l && (so(l) || Array.isArray(l)))
        i = i[a] = Th(l);
      else {
        var u = s[o + 1];
        i = i[a] = TC(u) && Number(u) >= 0 ? [] : {};
      }
    }
    return (o === 0 ? e : i)[s[o]] === n ? e : (n === void 0 ? delete i[s[o]] : i[s[o]] = n, o === 0 && n === void 0 && delete r[s[o]], r);
  }
  function Kg(e, t, n, r) {
    n === void 0 && (n = /* @__PURE__ */ new WeakMap()), r === void 0 && (r = {});
    for (var i = 0, o = Object.keys(e); i < o.length; i++) {
      var s = o[i], a = e[s];
      so(a) ? n.get(a) || (n.set(a, !0), r[s] = Array.isArray(a) ? [] : {}, Kg(a, t, n, r[s])) : r[s] = t;
    }
    return r;
  }
  function EC(e, t) {
    switch (t.type) {
      case "SET_VALUES":
        return K({}, e, {
          values: t.payload
        });
      case "SET_TOUCHED":
        return K({}, e, {
          touched: t.payload
        });
      case "SET_ERRORS":
        return rn(e.errors, t.payload) ? e : K({}, e, {
          errors: t.payload
        });
      case "SET_STATUS":
        return K({}, e, {
          status: t.payload
        });
      case "SET_ISSUBMITTING":
        return K({}, e, {
          isSubmitting: t.payload
        });
      case "SET_ISVALIDATING":
        return K({}, e, {
          isValidating: t.payload
        });
      case "SET_FIELD_VALUE":
        return K({}, e, {
          values: Ot(e.values, t.payload.field, t.payload.value)
        });
      case "SET_FIELD_TOUCHED":
        return K({}, e, {
          touched: Ot(e.touched, t.payload.field, t.payload.value)
        });
      case "SET_FIELD_ERROR":
        return K({}, e, {
          errors: Ot(e.errors, t.payload.field, t.payload.value)
        });
      case "RESET_FORM":
        return K({}, e, t.payload);
      case "SET_FORMIK_STATE":
        return t.payload(e);
      case "SUBMIT_ATTEMPT":
        return K({}, e, {
          touched: Kg(e.values, !0),
          isSubmitting: !0,
          submitCount: e.submitCount + 1
        });
      case "SUBMIT_FAILURE":
        return K({}, e, {
          isSubmitting: !1
        });
      case "SUBMIT_SUCCESS":
        return K({}, e, {
          isSubmitting: !1
        });
      default:
        return e;
    }
  }
  var Dn = {}, Fo = {};
  function PC(e) {
    var t = e.validateOnChange, n = t === void 0 ? !0 : t, r = e.validateOnBlur, i = r === void 0 ? !0 : r, o = e.validateOnMount, s = o === void 0 ? !1 : o, a = e.isInitialValid, l = e.enableReinitialize, u = l === void 0 ? !1 : l, c = e.onSubmit, f = cn(e, ["validateOnChange", "validateOnBlur", "validateOnMount", "isInitialValid", "enableReinitialize", "onSubmit"]), d = K({
      validateOnChange: n,
      validateOnBlur: i,
      validateOnMount: s,
      onSubmit: c
    }, f), y = x.useRef(d.initialValues), g = x.useRef(d.initialErrors || Dn), v = x.useRef(d.initialTouched || Fo), T = x.useRef(d.initialStatus), p = x.useRef(!1), h = x.useRef({});
    x.useEffect(function() {
      return p.current = !0, function() {
        p.current = !1;
      };
    }, []);
    var m = x.useState(0), S = m[1], C = x.useRef({
      values: d.initialValues,
      errors: d.initialErrors || Dn,
      touched: d.initialTouched || Fo,
      status: d.initialStatus,
      isSubmitting: !1,
      isValidating: !1,
      submitCount: 0
    }), P = C.current, k = x.useCallback(function(w) {
      var F = C.current;
      C.current = EC(F, w), F !== C.current && S(function(N) {
        return N + 1;
      });
    }, []), _ = x.useCallback(function(w, F) {
      return new Promise(function(N, L) {
        var z = d.validate(w, F);
        z == null ? N(Dn) : il(z) ? z.then(function(W) {
          N(W || Dn);
        }, function(W) {
          L(W);
        }) : N(z);
      });
    }, [d.validate]), b = x.useCallback(function(w, F) {
      var N = d.validationSchema, L = Ee(N) ? N(F) : N, z = F && L.validateAt ? L.validateAt(F, w) : _C(w, L);
      return new Promise(function(W, ye) {
        z.then(function() {
          W(Dn);
        }, function(Dt) {
          Dt.name === "ValidationError" ? W(kC(Dt)) : ye(Dt);
        });
      });
    }, [d.validationSchema]), M = x.useCallback(function(w, F) {
      return new Promise(function(N) {
        return N(h.current[w].validate(F));
      });
    }, []), $ = x.useCallback(function(w) {
      var F = Object.keys(h.current).filter(function(L) {
        return Ee(h.current[L].validate);
      }), N = F.length > 0 ? F.map(function(L) {
        return M(L, te(w, L));
      }) : [Promise.resolve("DO_NOT_DELETE_YOU_WILL_BE_FIRED")];
      return Promise.all(N).then(function(L) {
        return L.reduce(function(z, W, ye) {
          return W === "DO_NOT_DELETE_YOU_WILL_BE_FIRED" || W && (z = Ot(z, F[ye], W)), z;
        }, {});
      });
    }, [M]), fe = x.useCallback(function(w) {
      return Promise.all([$(w), d.validationSchema ? b(w) : {}, d.validate ? _(w) : {}]).then(function(F) {
        var N = F[0], L = F[1], z = F[2], W = gu.all([N, L, z], {
          arrayMerge: AC
        });
        return W;
      });
    }, [d.validate, d.validationSchema, $, _, b]), ee = rt(function(w) {
      return w === void 0 && (w = P.values), k({
        type: "SET_ISVALIDATING",
        payload: !0
      }), fe(w).then(function(F) {
        return p.current && (k({
          type: "SET_ISVALIDATING",
          payload: !1
        }), k({
          type: "SET_ERRORS",
          payload: F
        })), F;
      });
    });
    x.useEffect(function() {
      s && p.current === !0 && rn(y.current, d.initialValues) && ee(y.current);
    }, [s, ee]);
    var ke = x.useCallback(function(w) {
      var F = w && w.values ? w.values : y.current, N = w && w.errors ? w.errors : g.current ? g.current : d.initialErrors || {}, L = w && w.touched ? w.touched : v.current ? v.current : d.initialTouched || {}, z = w && w.status ? w.status : T.current ? T.current : d.initialStatus;
      y.current = F, g.current = N, v.current = L, T.current = z;
      var W = function() {
        k({
          type: "RESET_FORM",
          payload: {
            isSubmitting: !!w && !!w.isSubmitting,
            errors: N,
            touched: L,
            status: z,
            values: F,
            isValidating: !!w && !!w.isValidating,
            submitCount: w && w.submitCount && typeof w.submitCount == "number" ? w.submitCount : 0
          }
        });
      };
      if (d.onReset) {
        var ye = d.onReset(P.values, Df);
        il(ye) ? ye.then(W) : W();
      } else
        W();
    }, [d.initialErrors, d.initialStatus, d.initialTouched, d.onReset]);
    x.useEffect(function() {
      p.current === !0 && !rn(y.current, d.initialValues) && u && (y.current = d.initialValues, ke(), s && ee(y.current));
    }, [u, d.initialValues, ke, s, ee]), x.useEffect(function() {
      u && p.current === !0 && !rn(g.current, d.initialErrors) && (g.current = d.initialErrors || Dn, k({
        type: "SET_ERRORS",
        payload: d.initialErrors || Dn
      }));
    }, [u, d.initialErrors]), x.useEffect(function() {
      u && p.current === !0 && !rn(v.current, d.initialTouched) && (v.current = d.initialTouched || Fo, k({
        type: "SET_TOUCHED",
        payload: d.initialTouched || Fo
      }));
    }, [u, d.initialTouched]), x.useEffect(function() {
      u && p.current === !0 && !rn(T.current, d.initialStatus) && (T.current = d.initialStatus, k({
        type: "SET_STATUS",
        payload: d.initialStatus
      }));
    }, [u, d.initialStatus, d.initialTouched]);
    var ae = rt(function(w) {
      if (h.current[w] && Ee(h.current[w].validate)) {
        var F = te(P.values, w), N = h.current[w].validate(F);
        return il(N) ? (k({
          type: "SET_ISVALIDATING",
          payload: !0
        }), N.then(function(L) {
          return L;
        }).then(function(L) {
          k({
            type: "SET_FIELD_ERROR",
            payload: {
              field: w,
              value: L
            }
          }), k({
            type: "SET_ISVALIDATING",
            payload: !1
          });
        })) : (k({
          type: "SET_FIELD_ERROR",
          payload: {
            field: w,
            value: N
          }
        }), Promise.resolve(N));
      } else if (d.validationSchema)
        return k({
          type: "SET_ISVALIDATING",
          payload: !0
        }), b(P.values, w).then(function(L) {
          return L;
        }).then(function(L) {
          k({
            type: "SET_FIELD_ERROR",
            payload: {
              field: w,
              value: te(L, w)
            }
          }), k({
            type: "SET_ISVALIDATING",
            payload: !1
          });
        });
      return Promise.resolve();
    }), me = x.useCallback(function(w, F) {
      var N = F.validate;
      h.current[w] = {
        validate: N
      };
    }, []), dt = x.useCallback(function(w) {
      delete h.current[w];
    }, []), E = rt(function(w, F) {
      k({
        type: "SET_TOUCHED",
        payload: w
      });
      var N = F === void 0 ? i : F;
      return N ? ee(P.values) : Promise.resolve();
    }), j = x.useCallback(function(w) {
      k({
        type: "SET_ERRORS",
        payload: w
      });
    }, []), D = rt(function(w, F) {
      var N = Ee(w) ? w(P.values) : w;
      k({
        type: "SET_VALUES",
        payload: N
      });
      var L = F === void 0 ? n : F;
      return L ? ee(N) : Promise.resolve();
    }), I = x.useCallback(function(w, F) {
      k({
        type: "SET_FIELD_ERROR",
        payload: {
          field: w,
          value: F
        }
      });
    }, []), H = rt(function(w, F, N) {
      k({
        type: "SET_FIELD_VALUE",
        payload: {
          field: w,
          value: F
        }
      });
      var L = N === void 0 ? n : N;
      return L ? ee(Ot(P.values, w, F)) : Promise.resolve();
    }), tt = x.useCallback(function(w, F) {
      var N = F, L = w, z;
      if (!rl(w)) {
        w.persist && w.persist();
        var W = w.target ? w.target : w.currentTarget, ye = W.type, Dt = W.name, Ca = W.id, ka = W.value, O0 = W.checked, zO = W.outerHTML, Mf = W.options, j0 = W.multiple;
        N = F || Dt || Ca, L = /number|range/.test(ye) ? (z = parseFloat(ka), isNaN(z) ? "" : z) : /checkbox/.test(ye) ? jC(te(P.values, N), O0, ka) : Mf && j0 ? OC(Mf) : ka;
      }
      N && H(N, L);
    }, [H, P.values]), nt = rt(function(w) {
      if (rl(w))
        return function(F) {
          return tt(F, w);
        };
      tt(w);
    }), wt = rt(function(w, F, N) {
      F === void 0 && (F = !0), k({
        type: "SET_FIELD_TOUCHED",
        payload: {
          field: w,
          value: F
        }
      });
      var L = N === void 0 ? i : N;
      return L ? ee(P.values) : Promise.resolve();
    }), Tt = x.useCallback(function(w, F) {
      w.persist && w.persist();
      var N = w.target, L = N.name, z = N.id, W = N.outerHTML, ye = F || L || z;
      wt(ye, !0);
    }, [wt]), Zt = rt(function(w) {
      if (rl(w))
        return function(F) {
          return Tt(F, w);
        };
      Tt(w);
    }), jf = x.useCallback(function(w) {
      Ee(w) ? k({
        type: "SET_FORMIK_STATE",
        payload: w
      }) : k({
        type: "SET_FORMIK_STATE",
        payload: function() {
          return w;
        }
      });
    }, []), Ff = x.useCallback(function(w) {
      k({
        type: "SET_STATUS",
        payload: w
      });
    }, []), Rf = x.useCallback(function(w) {
      k({
        type: "SET_ISSUBMITTING",
        payload: w
      });
    }, []), Ea = rt(function() {
      return k({
        type: "SUBMIT_ATTEMPT"
      }), ee().then(function(w) {
        var F = w instanceof Error, N = !F && Object.keys(w).length === 0;
        if (N) {
          var L;
          try {
            if (L = T0(), L === void 0)
              return;
          } catch (z) {
            throw z;
          }
          return Promise.resolve(L).then(function(z) {
            return p.current && k({
              type: "SUBMIT_SUCCESS"
            }), z;
          }).catch(function(z) {
            if (p.current)
              throw k({
                type: "SUBMIT_FAILURE"
              }), z;
          });
        } else if (p.current && (k({
          type: "SUBMIT_FAILURE"
        }), F))
          throw w;
      });
    }), w0 = rt(function(w) {
      w && w.preventDefault && Ee(w.preventDefault) && w.preventDefault(), w && w.stopPropagation && Ee(w.stopPropagation) && w.stopPropagation(), Ea().catch(function(F) {
        console.warn("Warning: An unhandled error was caught from submitForm()", F);
      });
    }), Df = {
      resetForm: ke,
      validateForm: ee,
      validateField: ae,
      setErrors: j,
      setFieldError: I,
      setFieldTouched: wt,
      setFieldValue: H,
      setStatus: Ff,
      setSubmitting: Rf,
      setTouched: E,
      setValues: D,
      setFormikState: jf,
      submitForm: Ea
    }, T0 = rt(function() {
      return c(P.values, Df);
    }), E0 = rt(function(w) {
      w && w.preventDefault && Ee(w.preventDefault) && w.preventDefault(), w && w.stopPropagation && Ee(w.stopPropagation) && w.stopPropagation(), ke();
    }), P0 = x.useCallback(function(w) {
      return {
        value: te(P.values, w),
        error: te(P.errors, w),
        touched: !!te(P.touched, w),
        initialValue: te(y.current, w),
        initialTouched: !!te(v.current, w),
        initialError: te(g.current, w)
      };
    }, [P.errors, P.touched, P.values]), C0 = x.useCallback(function(w) {
      return {
        setValue: function(N, L) {
          return H(w, N, L);
        },
        setTouched: function(N, L) {
          return wt(w, N, L);
        },
        setError: function(N) {
          return I(w, N);
        }
      };
    }, [H, wt, I]), k0 = x.useCallback(function(w) {
      var F = so(w), N = F ? w.name : w, L = te(P.values, N), z = {
        name: N,
        value: L,
        onChange: nt,
        onBlur: Zt
      };
      if (F) {
        var W = w.type, ye = w.value, Dt = w.as, Ca = w.multiple;
        W === "checkbox" ? ye === void 0 ? z.checked = !!L : (z.checked = !!(Array.isArray(L) && ~L.indexOf(ye)), z.value = ye) : W === "radio" ? (z.checked = L === ye, z.value = ye) : Dt === "select" && Ca && (z.value = z.value || [], z.multiple = !0);
      }
      return z;
    }, [Zt, nt, P.values]), Pa = x.useMemo(function() {
      return !rn(y.current, P.values);
    }, [y.current, P.values]), _0 = x.useMemo(function() {
      return typeof a < "u" ? Pa ? P.errors && Object.keys(P.errors).length === 0 : a !== !1 && Ee(a) ? a(d) : a : P.errors && Object.keys(P.errors).length === 0;
    }, [a, Pa, P.errors, d]), A0 = K({}, P, {
      initialValues: y.current,
      initialErrors: g.current,
      initialTouched: v.current,
      initialStatus: T.current,
      handleBlur: Zt,
      handleChange: nt,
      handleReset: E0,
      handleSubmit: w0,
      resetForm: ke,
      setErrors: j,
      setFormikState: jf,
      setFieldTouched: wt,
      setFieldValue: H,
      setFieldError: I,
      setStatus: Ff,
      setSubmitting: Rf,
      setTouched: E,
      setValues: D,
      submitForm: Ea,
      validateForm: ee,
      validateField: ae,
      isValid: _0,
      dirty: Pa,
      unregisterField: dt,
      registerField: me,
      getFieldProps: k0,
      getFieldMeta: P0,
      getFieldHelpers: C0,
      validateOnBlur: i,
      validateOnChange: n,
      validateOnMount: s
    });
    return A0;
  }
  function CC(e) {
    var t = PC(e), n = e.component, r = e.children, i = e.render, o = e.innerRef;
    return x.useImperativeHandle(o, function() {
      return t;
    }), x.createElement(xC, {
      value: t
    }, n ? x.createElement(n, t) : i ? i(t) : r ? Ee(r) ? r(t) : Wg(r) ? null : x.Children.only(r) : null);
  }
  function kC(e) {
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
        te(t, s.path) || (t = Ot(t, s.path, s.message));
      }
    }
    return t;
  }
  function _C(e, t, n, r) {
    n === void 0 && (n = !1);
    var i = Eu(e);
    return t[n ? "validateSync" : "validate"](i, {
      abortEarly: !1,
      context: r || i
    });
  }
  function Eu(e) {
    var t = Array.isArray(e) ? [] : {};
    for (var n in e)
      if (Object.prototype.hasOwnProperty.call(e, n)) {
        var r = String(n);
        Array.isArray(e[r]) === !0 ? t[r] = e[r].map(function(i) {
          return Array.isArray(i) === !0 || qd(i) ? Eu(i) : i !== "" ? i : void 0;
        }) : qd(e[r]) ? t[r] = Eu(e[r]) : t[r] = e[r] !== "" ? e[r] : void 0;
      }
    return t;
  }
  function AC(e, t, n) {
    var r = e.slice();
    return t.forEach(function(o, s) {
      if (typeof r[s] > "u") {
        var a = n.clone !== !1, l = a && n.isMergeableObject(o);
        r[s] = l ? gu(Array.isArray(o) ? [] : {}, o, n) : o;
      } else
        n.isMergeableObject(o) ? r[s] = gu(e[s], o, n) : e.indexOf(o) === -1 && r.push(o);
    }), r;
  }
  function OC(e) {
    return Array.from(e).filter(function(t) {
      return t.selected;
    }).map(function(t) {
      return t.value;
    });
  }
  function jC(e, t, n) {
    if (typeof e == "boolean")
      return !!t;
    var r = [], i = !1, o = -1;
    if (Array.isArray(e))
      r = e, o = e.indexOf(n), i = o >= 0;
    else if (!n || n == "true" || n == "false")
      return !!t;
    return t && n && !i ? r.concat(n) : i ? r.slice(0, o).concat(r.slice(o + 1)) : r;
  }
  var FC = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u" ? x.useLayoutEffect : x.useEffect;
  function rt(e) {
    var t = x.useRef(e);
    return FC(function() {
      t.current = e;
    }), x.useCallback(function() {
      for (var n = arguments.length, r = new Array(n), i = 0; i < n; i++)
        r[i] = arguments[i];
      return t.current.apply(void 0, r);
    }, []);
  }
  function RC(e) {
    var t = e.validate, n = e.name, r = e.render, i = e.children, o = e.as, s = e.component, a = e.className, l = cn(e, ["validate", "name", "render", "children", "as", "component", "className"]), u = oo(), c = cn(u, ["validate", "validationSchema"]), f = c.registerField, d = c.unregisterField;
    x.useEffect(function() {
      return f(n, {
        validate: t
      }), function() {
        d(n);
      };
    }, [f, d, n, t]);
    var y = c.getFieldProps(K({
      name: n
    }, l)), g = c.getFieldMeta(n), v = {
      field: y,
      form: c
    };
    if (r)
      return r(K({}, v, {
        meta: g
      }));
    if (Ee(i))
      return i(K({}, v, {
        meta: g
      }));
    if (s) {
      if (typeof s == "string") {
        var T = l.innerRef, p = cn(l, ["innerRef"]);
        return x.createElement(s, K({
          ref: T
        }, y, p, {
          className: a
        }), i);
      }
      return x.createElement(s, K({
        field: y,
        form: c
      }, l, {
        className: a
      }), i);
    }
    var h = o || "input";
    if (typeof h == "string") {
      var m = l.innerRef, S = cn(l, ["innerRef"]);
      return x.createElement(h, K({
        ref: m
      }, y, S, {
        className: a
      }), i);
    }
    return x.createElement(h, K({}, y, l, {
      className: a
    }), i);
  }
  var Gg = /* @__PURE__ */ x.forwardRef(function(e, t) {
    var n = e.action, r = cn(e, ["action"]), i = n ?? "#", o = oo(), s = o.handleReset, a = o.handleSubmit;
    return x.createElement("form", K({
      onSubmit: a,
      ref: t,
      onReset: s,
      action: i
    }, r));
  });
  Gg.displayName = "Form";
  function DC(e) {
    var t = function(i) {
      return x.createElement(wC, null, function(o) {
        return x.createElement(e, K({}, i, {
          formik: o
        }));
      });
    }, n = e.displayName || e.name || e.constructor && e.constructor.name || "Component";
    return t.WrappedComponent = e, t.displayName = "FormikConnect(" + n + ")", yC(
      t,
      e
      // cast type to ComponentClass (even if SFC)
    );
  }
  var MC = function(t, n, r) {
    var i = nr(t), o = i[n];
    return i.splice(n, 1), i.splice(r, 0, o), i;
  }, NC = function(t, n, r) {
    var i = nr(t), o = i[n];
    return i[n] = i[r], i[r] = o, i;
  }, ol = function(t, n, r) {
    var i = nr(t);
    return i.splice(n, 0, r), i;
  }, bC = function(t, n, r) {
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
      return Array.from(K({}, t, {
        length: n + 1
      }));
    } else
      return [];
  }, jh = function(t, n) {
    var r = typeof t == "function" ? t : n;
    return function(i) {
      if (Array.isArray(i) || so(i)) {
        var o = nr(i);
        return r(o);
      }
      return i;
    };
  }, LC = /* @__PURE__ */ function(e) {
    Hg(t, e);
    function t(r) {
      var i;
      return i = e.call(this, r) || this, i.updateArrayField = function(o, s, a) {
        var l = i.props, u = l.name, c = l.formik.setFormikState;
        c(function(f) {
          var d = jh(a, o), y = jh(s, o), g = Ot(f.values, u, o(te(f.values, u))), v = a ? d(te(f.errors, u)) : void 0, T = s ? y(te(f.touched, u)) : void 0;
          return Oh(v) && (v = void 0), Oh(T) && (T = void 0), K({}, f, {
            values: g,
            errors: a ? Ot(f.errors, u, v) : f.errors,
            touched: s ? Ot(f.touched, u, T) : f.touched
          });
        });
      }, i.push = function(o) {
        return i.updateArrayField(function(s) {
          return [].concat(nr(s), [SC(o)]);
        }, !1, !1);
      }, i.handlePush = function(o) {
        return function() {
          return i.push(o);
        };
      }, i.swap = function(o, s) {
        return i.updateArrayField(function(a) {
          return NC(a, o, s);
        }, !0, !0);
      }, i.handleSwap = function(o, s) {
        return function() {
          return i.swap(o, s);
        };
      }, i.move = function(o, s) {
        return i.updateArrayField(function(a) {
          return MC(a, o, s);
        }, !0, !0);
      }, i.handleMove = function(o, s) {
        return function() {
          return i.move(o, s);
        };
      }, i.insert = function(o, s) {
        return i.updateArrayField(function(a) {
          return ol(a, o, s);
        }, function(a) {
          return ol(a, o, null);
        }, function(a) {
          return ol(a, o, null);
        });
      }, i.handleInsert = function(o, s) {
        return function() {
          return i.insert(o, s);
        };
      }, i.replace = function(o, s) {
        return i.updateArrayField(function(a) {
          return bC(a, o, s);
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
      }, i.remove = i.remove.bind(Ah(i)), i.pop = i.pop.bind(Ah(i)), i;
    }
    var n = t.prototype;
    return n.componentDidUpdate = function(i) {
      this.props.validateOnChange && this.props.formik.validateOnChange && !rn(te(i.formik.values, i.name), te(this.props.formik.values, this.props.name)) && this.props.formik.validateForm(this.props.formik.values);
    }, n.remove = function(i) {
      var o;
      return this.updateArrayField(
        // so this gets call 3 times
        function(s) {
          var a = s ? nr(s) : [];
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
      }, o = this.props, s = o.component, a = o.render, l = o.children, u = o.name, c = o.formik, f = cn(c, ["validate", "validationSchema"]), d = K({}, i, {
        form: f,
        name: u
      });
      return s ? x.createElement(s, d) : a ? a(d) : l ? typeof l == "function" ? l(d) : Wg(l) ? null : x.Children.only(l) : null;
    }, t;
  }(x.Component);
  LC.defaultProps = {
    validateOnChange: !0
  };
  var VC = /* @__PURE__ */ function(e) {
    Hg(t, e);
    function t() {
      return e.apply(this, arguments) || this;
    }
    var n = t.prototype;
    return n.shouldComponentUpdate = function(i) {
      return te(this.props.formik.errors, this.props.name) !== te(i.formik.errors, this.props.name) || te(this.props.formik.touched, this.props.name) !== te(i.formik.touched, this.props.name) || Object.keys(this.props).length !== Object.keys(i).length;
    }, n.render = function() {
      var i = this.props, o = i.component, s = i.formik, a = i.render, l = i.children, u = i.name, c = cn(i, ["component", "formik", "render", "children", "name"]), f = te(s.touched, u), d = te(s.errors, u);
      return f && d ? a ? Ee(a) ? a(d) : null : l ? Ee(l) ? l(d) : null : o ? x.createElement(o, c, d) : d : null;
    }, t;
  }(x.Component), $C = /* @__PURE__ */ DC(VC);
  const Yg = x.createContext(void 0);
  function ao() {
    const e = x.useContext(Yg);
    if (e === void 0)
      throw new Error("useWizard must be used within the Wizard app!");
    return e;
  }
  function IC({ step: e }) {
    const { submitForm: t, setFieldValue: n } = oo();
    x.useEffect(() => {
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
  function zC(e) {
    const t = {};
    return e.forEach((n) => {
      const r = n.id.replace(/[A-Z]/g, (i, o) => (o > 0 ? "-" : "") + i.toLowerCase());
      t[r] = n;
    }), t;
  }
  function Fh(e) {
    const t = window.location.hash.slice(1);
    return e[t];
  }
  function UC(e, t) {
    const n = Object.keys(e).find((r) => e[r].id === t.id);
    window.location.hash = n || window.location.hash;
  }
  function BC({
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
    r && (l = zC(e), a = Fh(l) || a);
    const [u, c] = x.useState(a), [f, d] = x.useState(!1), [y, g] = x.useState({}), v = x.useRef(null), T = e.findIndex((E) => E.id === u.id), p = T + 1, h = e.length, m = p === 1, S = p === h;
    x.useEffect(() => {
      if (r)
        return window.addEventListener("hashchange", C), UC(l, u), () => window.removeEventListener("hashchange", C);
    }, [u]);
    function C() {
      const E = Fh(l);
      (E == null ? void 0 : E.id) !== u.id && M(E, v.current);
    }
    async function P(E, j, D) {
      let I;
      for (let H = 0; H < E.length; ++H) {
        const tt = E[H];
        if (tt.shouldSkip === void 0) {
          I = tt;
          break;
        }
        if (!await tt.shouldSkip(j, D)) {
          I = tt;
          break;
        }
      }
      return I;
    }
    async function k(E) {
      const j = e.slice(T + 1);
      return await P(j, E, 1);
    }
    async function _(E) {
      const j = e.slice(0, T).reverse();
      return await P(j, E, -1);
    }
    function b(E) {
      if (!t)
        return;
      let j = {};
      Object.keys(E).forEach((D) => {
        j = { ...j, ...E[D] };
      }), t(j);
    }
    function M(E, j) {
      c(E), j.resetForm({ values: me(E) });
    }
    async function $(E, j) {
      try {
        u.onSubmit && (j.setStatus(""), d(!0), E = await u.onSubmit(E, y, j), d(!1));
        const D = {
          ...y,
          [u.id]: E
        };
        g(D);
        const I = await k(D);
        if (!I) {
          b(D);
          return;
        }
        n && n(u, I, D), M(I, j);
      } catch (D) {
        console.log(D), d(!1), j.setStatus(D.message);
      }
    }
    async function fe(E, j) {
      let D = null;
      (u.keepValuesOnPrevious ?? !0) && (D = {
        ...y,
        [u.id]: E
      }, g(D)), D = D || y;
      const I = await _(D);
      I && (n && n(u, I, D), M(I, j));
    }
    function ee(E) {
      if (E)
        return (j) => E(j, y);
    }
    function ke(E, j) {
      M(e[E], j);
    }
    function ae(E, j) {
      c({ ...u, [E]: j });
    }
    function me(E) {
      return y[E.id] || E.initialValues || {};
    }
    function dt(E) {
      return {
        values: y,
        setValues: g,
        setIsLoading: d,
        updateStep: ae,
        goToPreviousStep: () => fe(E.values, E),
        goToNextStep: () => $(E.values, E),
        goToStep: (j) => ke(j, E),
        activeStep: u,
        stepNumber: p,
        totalSteps: h,
        isLoading: f,
        isFirstStep: m,
        isLastStep: S
      };
    }
    return /* @__PURE__ */ O.jsx(
      CC,
      {
        initialValues: me(u),
        validationSchema: u.validationSchema,
        validate: ee(u.validate),
        validateOnChange: u.validateOnChange ?? !0,
        validateOnBlur: u.validateOnBlur ?? !0,
        onSubmit: $,
        innerRef: v,
        children: (E) => {
          const j = dt(E), D = o || u.component;
          return /* @__PURE__ */ O.jsx(Yg.Provider, { value: j, children: /* @__PURE__ */ O.jsxs(Gg, { children: [
            i,
            D,
            s,
            u.submitOnChange && /* @__PURE__ */ O.jsx(IC, { step: u })
          ] }) });
        }
      }
    );
  }
  function HC() {
    const { goToStep: e } = ao();
    return /* @__PURE__ */ O.jsxs("div", { className: "prose max-w-none", children: [
      /* @__PURE__ */ O.jsx("h2", { children: "Warning" }),
      /* @__PURE__ */ O.jsx("p", { children: "Seems like you did not fill your email. Would you like to do it?" }),
      /* @__PURE__ */ O.jsxs("p", { children: [
        /* @__PURE__ */ O.jsx("b", { children: "Note:" }),
        " This step is automatically skipped if user filled their email in the first step."
      ] }),
      /* @__PURE__ */ O.jsxs("div", { className: "flex gap-4", children: [
        /* @__PURE__ */ O.jsx("button", { className: "btn", type: "submit", children: "No" }),
        /* @__PURE__ */ O.jsx("button", { className: "btn", type: "button", onClick: () => e(0), children: "Yes" })
      ] })
    ] });
  }
  function WC() {
    return /* @__PURE__ */ O.jsxs("div", { className: "prose max-w-none", children: [
      /* @__PURE__ */ O.jsx("h2", { children: "Async" }),
      /* @__PURE__ */ O.jsx("p", { children: 'Pressing "Next" does async operation that takes 2 seconds before we proceed to the next step.' })
    ] });
  }
  function KC() {
    const { values: e, updateStep: t } = ao(), [n, r] = x.useState(!0);
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
    }), /* @__PURE__ */ O.jsxs("div", { className: "prose prose-neutral max-w-none", children: [
      /* @__PURE__ */ O.jsx("h2", { children: "Congratulations!" }),
      /* @__PURE__ */ O.jsxs("div", { className: "flex flex-wrap gap-4 justify-between", children: [
        /* @__PURE__ */ O.jsxs("p", { className: "my-0", children: [
          "You did it ",
          /* @__PURE__ */ O.jsx("b", { children: e.Username.username }),
          "! 🎉",
          /* @__PURE__ */ O.jsx("br", {}),
          "Here's your input:"
        ] }),
        /* @__PURE__ */ O.jsx("button", { className: "btn", onClick: i, type: "button", children: "Toggle hideNext" })
      ] }),
      /* @__PURE__ */ O.jsx("code", { className: "text-sm sm:text-base bg-transparent", children: /* @__PURE__ */ O.jsx("pre", { className: "mt-0", children: JSON.stringify(o, null, 2) }) })
    ] });
  }
  const GC = [
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
      validationSchema: qx,
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
      validate: Jx,
      disableNextOnErrors: !0
    },
    {
      id: "EmailCheck",
      component: /* @__PURE__ */ O.jsx(HC, {}),
      hideNext: !0,
      hidePrevious: !0,
      shouldSkip: (e, t) => t === -1 ? !0 : !!e.ContactInfo.email
    },
    {
      id: "Async",
      component: /* @__PURE__ */ O.jsx(WC, {}),
      onSubmit: async (e, t, n) => (await ((i) => new Promise((o) => setTimeout(o, i)))(2e3), e)
    },
    {
      id: "Final",
      component: /* @__PURE__ */ O.jsx(KC, {}),
      hideNext: !0,
      hidePrevious: !1
    }
  ], qc = x.createContext({
    transformPagePoint: (e) => e,
    isStatic: !1,
    reducedMotion: "never"
  }), ma = x.createContext({}), ya = x.createContext(null), Jc = typeof document < "u", ef = Jc ? x.useLayoutEffect : x.useEffect, Qg = x.createContext({ strict: !1 }), tf = (e) => e.replace(/([a-z])([A-Z])/gu, "$1-$2").toLowerCase(), YC = "framerAppearId", Xg = "data-" + tf(YC), QC = {
    skipAnimations: !1,
    useManualTiming: !1
  };
  class Rh {
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
  function XC(e) {
    let t = new Rh(), n = new Rh(), r = 0, i = !1, o = !1;
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
            s.has(c) && (a.schedule(c), e()), c(l);
          }
        i = !1, o && (o = !1, a.process(l));
      }
    };
    return a;
  }
  const Ro = [
    "read",
    // Read
    "resolveKeyframes",
    // Write/Read/Write/Read
    "update",
    // Compute
    "preRender",
    // Compute
    "render",
    // Write
    "postRender"
    // Compute
  ], ZC = 40;
  function Zg(e, t) {
    let n = !1, r = !0;
    const i = {
      delta: 0,
      timestamp: 0,
      isProcessing: !1
    }, o = Ro.reduce((f, d) => (f[d] = XC(() => n = !0), f), {}), s = (f) => {
      o[f].process(i);
    }, a = () => {
      const f = performance.now();
      n = !1, i.delta = r ? 1e3 / 60 : Math.max(Math.min(f - i.timestamp, ZC), 1), i.timestamp = f, i.isProcessing = !0, Ro.forEach(s), i.isProcessing = !1, n && t && (r = !1, e(a));
    }, l = () => {
      n = !0, r = !0, i.isProcessing || e(a);
    };
    return { schedule: Ro.reduce((f, d) => {
      const y = o[d];
      return f[d] = (g, v = !1, T = !1) => (n || l(), y.schedule(g, v, T)), f;
    }, {}), cancel: (f) => Ro.forEach((d) => o[d].cancel(f)), state: i, steps: o };
  }
  const { schedule: nf, cancel: BO } = Zg(queueMicrotask, !1);
  function qC(e, t, n, r) {
    const { visualElement: i } = x.useContext(ma), o = x.useContext(Qg), s = x.useContext(ya), a = x.useContext(qc).reducedMotion, l = x.useRef();
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
    const c = x.useRef(!!(n[Xg] && !window.HandoffComplete));
    return ef(() => {
      u && (nf.postRender(u.render), c.current && u.animationState && u.animationState.animateChanges());
    }), x.useEffect(() => {
      u && (u.updateFeatures(), !c.current && u.animationState && u.animationState.animateChanges(), c.current && (c.current = !1, window.HandoffComplete = !0));
    }), u;
  }
  function _r(e) {
    return e && typeof e == "object" && Object.prototype.hasOwnProperty.call(e, "current");
  }
  function JC(e, t, n) {
    return x.useCallback(
      (r) => {
        r && e.mount && e.mount(r), t && (r ? t.mount(r) : t.unmount()), n && (typeof n == "function" ? n(r) : _r(n) && (n.current = r));
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
    return e !== null && typeof e == "object" && typeof e.start == "function";
  }
  const rf = [
    "animate",
    "whileInView",
    "whileFocus",
    "whileHover",
    "whileTap",
    "whileDrag",
    "exit"
  ], of = ["initial", ...rf];
  function va(e) {
    return ga(e.animate) || of.some((t) => Yi(e[t]));
  }
  function qg(e) {
    return !!(va(e) || e.variants);
  }
  function ek(e, t) {
    if (va(e)) {
      const { initial: n, animate: r } = e;
      return {
        initial: n === !1 || Yi(n) ? n : void 0,
        animate: Yi(r) ? r : void 0
      };
    }
    return e.inherit !== !1 ? t : {};
  }
  function tk(e) {
    const { initial: t, animate: n } = ek(e, x.useContext(ma));
    return x.useMemo(() => ({ initial: t, animate: n }), [Dh(t), Dh(n)]);
  }
  function Dh(e) {
    return Array.isArray(e) ? e.join(" ") : e;
  }
  const Mh = {
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
  }, Qi = {};
  for (const e in Mh)
    Qi[e] = {
      isEnabled: (t) => Mh[e].some((n) => !!t[n])
    };
  function nk(e) {
    for (const t in e)
      Qi[t] = {
        ...Qi[t],
        ...e[t]
      };
  }
  const sf = x.createContext({}), Jg = x.createContext({}), rk = Symbol.for("motionComponentSymbol");
  function ik({ preloadedFeatures: e, createVisualElement: t, useRender: n, useVisualState: r, Component: i }) {
    e && nk(e);
    function o(a, l) {
      let u;
      const c = {
        ...x.useContext(qc),
        ...a,
        layoutId: ok(a)
      }, { isStatic: f } = c, d = tk(a), y = r(a, f);
      if (!f && Jc) {
        d.visualElement = qC(i, y, c, t);
        const g = x.useContext(Jg), v = x.useContext(Qg).strict;
        d.visualElement && (u = d.visualElement.loadFeatures(
          // Note: Pass the full new combined props to correctly re-render dynamic feature components.
          c,
          v,
          e,
          g
        ));
      }
      return O.jsxs(ma.Provider, { value: d, children: [u && d.visualElement ? O.jsx(u, { visualElement: d.visualElement, ...c }) : null, n(i, a, JC(y, d.visualElement, l), y, f, d.visualElement)] });
    }
    const s = x.forwardRef(o);
    return s[rk] = i, s;
  }
  function ok({ layoutId: e }) {
    const t = x.useContext(sf).id;
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
  function af(e) {
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
        /[A-Z]/u.test(e))
      )
    );
  }
  const Cs = {};
  function lk(e) {
    Object.assign(Cs, e);
  }
  const lo = [
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
  ], fr = new Set(lo);
  function ev(e, { layout: t, layoutId: n }) {
    return fr.has(e) || e.startsWith("origin") || (t || n !== void 0) && (!!Cs[e] || e === "opacity");
  }
  const Fe = (e) => !!(e && e.getVelocity), uk = {
    x: "translateX",
    y: "translateY",
    z: "translateZ",
    transformPerspective: "perspective"
  }, ck = lo.length;
  function fk(e, { enableHardwareAcceleration: t = !0, allowTransformNone: n = !0 }, r, i) {
    let o = "";
    for (let s = 0; s < ck; s++) {
      const a = lo[s];
      if (e[a] !== void 0) {
        const l = uk[a] || a;
        o += `${l}(${e[a]}) `;
      }
    }
    return t && !e.z && (o += "translateZ(0)"), o = o.trim(), i ? o = i(e, r ? "" : o) : n && r && (o = "none"), o;
  }
  const tv = (e) => (t) => typeof t == "string" && t.startsWith(e), nv = tv("--"), dk = tv("var(--"), lf = (e) => dk(e) ? hk.test(e.split("/*")[0].trim()) : !1, hk = /var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu, pk = (e, t) => t && typeof e == "number" ? t.transform(e) : e, Cn = (e, t, n) => n > t ? t : n < e ? e : n, Zr = {
    test: (e) => typeof e == "number",
    parse: parseFloat,
    transform: (e) => e
  }, Pi = {
    ...Zr,
    transform: (e) => Cn(0, 1, e)
  }, Do = {
    ...Zr,
    default: 1
  }, Ci = (e) => Math.round(e * 1e5) / 1e5, uf = /-?(?:\d+(?:\.\d+)?|\.\d+)/gu, mk = /(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu, yk = /^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu;
  function uo(e) {
    return typeof e == "string";
  }
  const co = (e) => ({
    test: (t) => uo(t) && t.endsWith(e) && t.split(" ").length === 1,
    parse: parseFloat,
    transform: (t) => `${t}${e}`
  }), en = co("deg"), jt = co("%"), V = co("px"), gk = co("vh"), vk = co("vw"), Nh = {
    ...jt,
    parse: (e) => jt.parse(e) / 100,
    transform: (e) => jt.transform(e * 100)
  }, bh = {
    ...Zr,
    transform: Math.round
  }, rv = {
    // Border props
    borderWidth: V,
    borderTopWidth: V,
    borderRightWidth: V,
    borderBottomWidth: V,
    borderLeftWidth: V,
    borderRadius: V,
    radius: V,
    borderTopLeftRadius: V,
    borderTopRightRadius: V,
    borderBottomRightRadius: V,
    borderBottomLeftRadius: V,
    // Positioning props
    width: V,
    maxWidth: V,
    height: V,
    maxHeight: V,
    size: V,
    top: V,
    right: V,
    bottom: V,
    left: V,
    // Spacing props
    padding: V,
    paddingTop: V,
    paddingRight: V,
    paddingBottom: V,
    paddingLeft: V,
    margin: V,
    marginTop: V,
    marginRight: V,
    marginBottom: V,
    marginLeft: V,
    // Transform props
    rotate: en,
    rotateX: en,
    rotateY: en,
    rotateZ: en,
    scale: Do,
    scaleX: Do,
    scaleY: Do,
    scaleZ: Do,
    skew: en,
    skewX: en,
    skewY: en,
    distance: V,
    translateX: V,
    translateY: V,
    translateZ: V,
    x: V,
    y: V,
    z: V,
    perspective: V,
    transformPerspective: V,
    opacity: Pi,
    originX: Nh,
    originY: Nh,
    originZ: V,
    // Misc
    zIndex: bh,
    backgroundPositionX: V,
    backgroundPositionY: V,
    // SVG
    fillOpacity: Pi,
    strokeOpacity: Pi,
    numOctaves: bh
  };
  function cf(e, t, n, r) {
    const { style: i, vars: o, transform: s, transformOrigin: a } = e;
    let l = !1, u = !1, c = !0;
    for (const f in t) {
      const d = t[f];
      if (nv(f)) {
        o[f] = d;
        continue;
      }
      const y = rv[f], g = pk(d, y);
      if (fr.has(f)) {
        if (l = !0, s[f] = g, !c)
          continue;
        d !== (y.default || 0) && (c = !1);
      } else
        f.startsWith("origin") ? (u = !0, a[f] = g) : i[f] = g;
    }
    if (t.transform || (l || r ? i.transform = fk(e.transform, n, c, r) : i.transform && (i.transform = "none")), u) {
      const { originX: f = "50%", originY: d = "50%", originZ: y = 0 } = a;
      i.transformOrigin = `${f} ${d} ${y}`;
    }
  }
  const ff = () => ({
    style: {},
    transform: {},
    transformOrigin: {},
    vars: {}
  });
  function iv(e, t, n) {
    for (const r in t)
      !Fe(t[r]) && !ev(r, n) && (e[r] = t[r]);
  }
  function Sk({ transformTemplate: e }, t, n) {
    return x.useMemo(() => {
      const r = ff();
      return cf(r, t, { enableHardwareAcceleration: !n }, e), Object.assign({}, r.vars, r.style);
    }, [t]);
  }
  function xk(e, t, n) {
    const r = e.style || {}, i = {};
    return iv(i, r, e), Object.assign(i, Sk(e, t, n)), i;
  }
  function wk(e, t, n) {
    const r = {}, i = xk(e, t, n);
    return e.drag && e.dragListener !== !1 && (r.draggable = !1, i.userSelect = i.WebkitUserSelect = i.WebkitTouchCallout = "none", i.touchAction = e.drag === !0 ? "none" : `pan-${e.drag === "x" ? "y" : "x"}`), e.tabIndex === void 0 && (e.onTap || e.onTapStart || e.whileTap) && (r.tabIndex = 0), r.style = i, r;
  }
  const Tk = /* @__PURE__ */ new Set([
    "animate",
    "exit",
    "variants",
    "initial",
    "style",
    "values",
    "variants",
    "transition",
    "transformTemplate",
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
  function ks(e) {
    return e.startsWith("while") || e.startsWith("drag") && e !== "draggable" || e.startsWith("layout") || e.startsWith("onTap") || e.startsWith("onPan") || e.startsWith("onLayout") || Tk.has(e);
  }
  let ov = (e) => !ks(e);
  function Ek(e) {
    e && (ov = (t) => t.startsWith("on") ? !ks(t) : e(t));
  }
  try {
    Ek(require("@emotion/is-prop-valid").default);
  } catch {
  }
  function Pk(e, t, n) {
    const r = {};
    for (const i in e)
      i === "values" && typeof e.values == "object" || (ov(i) || n === !0 && ks(i) || !t && !ks(i) || // If trying to use native HTML drag events, forward drag listeners
      e.draggable && i.startsWith("onDrag")) && (r[i] = e[i]);
    return r;
  }
  function Lh(e, t, n) {
    return typeof e == "string" ? e : V.transform(t + n * e);
  }
  function Ck(e, t, n) {
    const r = Lh(t, e.x, e.width), i = Lh(n, e.y, e.height);
    return `${r} ${i}`;
  }
  const kk = {
    offset: "stroke-dashoffset",
    array: "stroke-dasharray"
  }, _k = {
    offset: "strokeDashoffset",
    array: "strokeDasharray"
  };
  function Ak(e, t, n = 1, r = 0, i = !0) {
    e.pathLength = 1;
    const o = i ? kk : _k;
    e[o.offset] = V.transform(-r);
    const s = V.transform(t), a = V.transform(n);
    e[o.array] = `${s} ${a}`;
  }
  function df(e, {
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
    if (cf(e, u, c, d), f) {
      e.style.viewBox && (e.attrs.viewBox = e.style.viewBox);
      return;
    }
    e.attrs = e.style, e.style = {};
    const { attrs: y, style: g, dimensions: v } = e;
    y.transform && (v && (g.transform = y.transform), delete y.transform), v && (i !== void 0 || o !== void 0 || g.transform) && (g.transformOrigin = Ck(v, i !== void 0 ? i : 0.5, o !== void 0 ? o : 0.5)), t !== void 0 && (y.x = t), n !== void 0 && (y.y = n), r !== void 0 && (y.scale = r), s !== void 0 && Ak(y, s, a, l, !1);
  }
  const sv = () => ({
    ...ff(),
    attrs: {}
  }), hf = (e) => typeof e == "string" && e.toLowerCase() === "svg";
  function Ok(e, t, n, r) {
    const i = x.useMemo(() => {
      const o = sv();
      return df(o, t, { enableHardwareAcceleration: !1 }, hf(r), e.transformTemplate), {
        ...o.attrs,
        style: { ...o.style }
      };
    }, [t]);
    if (e.style) {
      const o = {};
      iv(o, e.style, e), i.style = { ...o, ...i.style };
    }
    return i;
  }
  function jk(e = !1) {
    return (n, r, i, { latestValues: o }, s) => {
      const l = (af(n) ? Ok : wk)(r, o, s, n), u = Pk(r, typeof n == "string", e), c = n !== x.Fragment ? { ...u, ...l, ref: i } : {}, { children: f } = r, d = x.useMemo(() => Fe(f) ? f.get() : f, [f]);
      return x.createElement(n, {
        ...c,
        children: d
      });
    };
  }
  function av(e, { style: t, vars: n }, r, i) {
    Object.assign(e.style, t, i && i.getProjectionStyles(r));
    for (const o in n)
      e.style.setProperty(o, n[o]);
  }
  const lv = /* @__PURE__ */ new Set([
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
  function uv(e, t, n, r) {
    av(e, t, void 0, r);
    for (const i in t.attrs)
      e.setAttribute(lv.has(i) ? i : tf(i), t.attrs[i]);
  }
  function pf(e, t, n) {
    var r;
    const { style: i } = e, o = {};
    for (const s in i)
      (Fe(i[s]) || t.style && Fe(t.style[s]) || ev(s, e) || ((r = n == null ? void 0 : n.getValue(s)) === null || r === void 0 ? void 0 : r.liveStyle) !== void 0) && (o[s] = i[s]);
    return o;
  }
  function cv(e, t, n) {
    const r = pf(e, t, n);
    for (const i in e)
      if (Fe(e[i]) || Fe(t[i])) {
        const o = lo.indexOf(i) !== -1 ? "attr" + i.charAt(0).toUpperCase() + i.substring(1) : i;
        r[o] = e[i];
      }
    return r;
  }
  function mf(e, t, n, r = {}, i = {}) {
    return typeof t == "function" && (t = t(n !== void 0 ? n : e.custom, r, i)), typeof t == "string" && (t = e.variants && e.variants[t]), typeof t == "function" && (t = t(n !== void 0 ? n : e.custom, r, i)), t;
  }
  function fv(e) {
    const t = x.useRef(null);
    return t.current === null && (t.current = e()), t.current;
  }
  const Pu = (e) => Array.isArray(e), Fk = (e) => !!(e && typeof e == "object" && e.mix && e.toValue), Rk = (e) => Pu(e) ? e[e.length - 1] || 0 : e;
  function Qo(e) {
    const t = Fe(e) ? e.get() : e;
    return Fk(t) ? t.toValue() : t;
  }
  function Dk({ scrapeMotionValuesFromProps: e, createRenderState: t, onMount: n }, r, i, o) {
    const s = {
      latestValues: Mk(r, i, o, e),
      renderState: t()
    };
    return n && (s.mount = (a) => n(r, a, s)), s;
  }
  const dv = (e) => (t, n) => {
    const r = x.useContext(ma), i = x.useContext(ya), o = () => Dk(e, t, r, i);
    return n ? o() : fv(o);
  };
  function Mk(e, t, n, r) {
    const i = {}, o = r(e, {});
    for (const d in o)
      i[d] = Qo(o[d]);
    let { initial: s, animate: a } = e;
    const l = va(e), u = qg(e);
    t && u && !l && e.inherit !== !1 && (s === void 0 && (s = t.initial), a === void 0 && (a = t.animate));
    let c = n ? n.initial === !1 : !1;
    c = c || s === !1;
    const f = c ? a : s;
    return f && typeof f != "boolean" && !ga(f) && (Array.isArray(f) ? f : [f]).forEach((y) => {
      const g = mf(e, y);
      if (!g)
        return;
      const { transitionEnd: v, transition: T, ...p } = g;
      for (const h in p) {
        let m = p[h];
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
  const Re = (e) => e, { schedule: Se, cancel: kn, state: Te, steps: sl } = Zg(typeof requestAnimationFrame < "u" ? requestAnimationFrame : Re, !0), Nk = {
    useVisualState: dv({
      scrapeMotionValuesFromProps: cv,
      createRenderState: sv,
      onMount: (e, t, { renderState: n, latestValues: r }) => {
        Se.read(() => {
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
        }), Se.render(() => {
          df(n, r, { enableHardwareAcceleration: !1 }, hf(t.tagName), e.transformTemplate), uv(t, n);
        });
      }
    })
  }, bk = {
    useVisualState: dv({
      scrapeMotionValuesFromProps: pf,
      createRenderState: ff
    })
  };
  function Lk(e, { forwardMotionProps: t = !1 }, n, r) {
    return {
      ...af(e) ? Nk : bk,
      preloadedFeatures: n,
      useRender: jk(t),
      createVisualElement: r,
      Component: e
    };
  }
  function It(e, t, n, r = { passive: !0 }) {
    return e.addEventListener(t, n, r), () => e.removeEventListener(t, n);
  }
  const hv = (e) => e.pointerType === "mouse" ? typeof e.button != "number" || e.button <= 0 : e.isPrimary !== !1;
  function Sa(e, t = "page") {
    return {
      point: {
        x: e[`${t}X`],
        y: e[`${t}Y`]
      }
    };
  }
  const Vk = (e) => (t) => hv(t) && e(t, Sa(t));
  function Ut(e, t, n, r) {
    return It(e, t, Vk(n), r);
  }
  const $k = (e, t) => (n) => t(e(n)), Bt = (...e) => e.reduce($k);
  function pv(e) {
    let t = null;
    return () => {
      const n = () => {
        t = null;
      };
      return t === null ? (t = e, n) : !1;
    };
  }
  const Vh = pv("dragHorizontal"), $h = pv("dragVertical");
  function mv(e) {
    let t = !1;
    if (e === "y")
      t = $h();
    else if (e === "x")
      t = Vh();
    else {
      const n = Vh(), r = $h();
      n && r ? t = () => {
        n(), r();
      } : (n && n(), r && r());
    }
    return t;
  }
  function yv() {
    const e = mv(!0);
    return e ? (e(), !1) : !0;
  }
  class Rn {
    constructor(t) {
      this.isMounted = !1, this.node = t;
    }
    update() {
    }
  }
  function Ih(e, t) {
    const n = t ? "pointerenter" : "pointerleave", r = t ? "onHoverStart" : "onHoverEnd", i = (o, s) => {
      if (o.pointerType === "touch" || yv())
        return;
      const a = e.getProps();
      e.animationState && a.whileHover && e.animationState.setActive("whileHover", t);
      const l = a[r];
      l && l(o, s);
    };
    return Ut(e.current, n, i, {
      passive: !e.getProps()[r]
    });
  }
  class Ik extends Rn {
    mount() {
      this.unmount = Bt(Ih(this.node, !0), Ih(this.node, !1));
    }
    unmount() {
    }
  }
  class zk extends Rn {
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
      this.unmount = Bt(It(this.node.current, "focus", () => this.onFocus()), It(this.node.current, "blur", () => this.onBlur()));
    }
    unmount() {
    }
  }
  const gv = (e, t) => t ? e === t ? !0 : gv(e, t.parentElement) : !1;
  function al(e, t) {
    if (!t)
      return;
    const n = new PointerEvent("pointer" + e);
    t(n, Sa(n));
  }
  class Uk extends Rn {
    constructor() {
      super(...arguments), this.removeStartListeners = Re, this.removeEndListeners = Re, this.removeAccessibleListeners = Re, this.startPointerPress = (t, n) => {
        if (this.isPressing)
          return;
        this.removeEndListeners();
        const r = this.node.getProps(), o = Ut(window, "pointerup", (a, l) => {
          if (!this.checkPressEnd())
            return;
          const { onTap: u, onTapCancel: c, globalTapTarget: f } = this.node.getProps();
          !f && !gv(this.node.current, a.target) ? c && c(a, l) : u && u(a, l);
        }, {
          passive: !(r.onTap || r.onPointerUp)
        }), s = Ut(window, "pointercancel", (a, l) => this.cancelPress(a, l), {
          passive: !(r.onTapCancel || r.onPointerCancel)
        });
        this.removeEndListeners = Bt(o, s), this.startPress(t, n);
      }, this.startAccessiblePress = () => {
        const t = (o) => {
          if (o.key !== "Enter" || this.isPressing)
            return;
          const s = (a) => {
            a.key !== "Enter" || !this.checkPressEnd() || al("up", (l, u) => {
              const { onTap: c } = this.node.getProps();
              c && c(l, u);
            });
          };
          this.removeEndListeners(), this.removeEndListeners = It(this.node.current, "keyup", s), al("down", (a, l) => {
            this.startPress(a, l);
          });
        }, n = It(this.node.current, "keydown", t), r = () => {
          this.isPressing && al("cancel", (o, s) => this.cancelPress(o, s));
        }, i = It(this.node.current, "blur", r);
        this.removeAccessibleListeners = Bt(n, i);
      };
    }
    startPress(t, n) {
      this.isPressing = !0;
      const { onTapStart: r, whileTap: i } = this.node.getProps();
      i && this.node.animationState && this.node.animationState.setActive("whileTap", !0), r && r(t, n);
    }
    checkPressEnd() {
      return this.removeEndListeners(), this.isPressing = !1, this.node.getProps().whileTap && this.node.animationState && this.node.animationState.setActive("whileTap", !1), !yv();
    }
    cancelPress(t, n) {
      if (!this.checkPressEnd())
        return;
      const { onTapCancel: r } = this.node.getProps();
      r && r(t, n);
    }
    mount() {
      const t = this.node.getProps(), n = Ut(t.globalTapTarget ? window : this.node.current, "pointerdown", this.startPointerPress, {
        passive: !(t.onTapStart || t.onPointerStart)
      }), r = It(this.node.current, "focus", this.startAccessiblePress);
      this.removeStartListeners = Bt(n, r);
    }
    unmount() {
      this.removeStartListeners(), this.removeEndListeners(), this.removeAccessibleListeners();
    }
  }
  const Cu = /* @__PURE__ */ new WeakMap(), ll = /* @__PURE__ */ new WeakMap(), Bk = (e) => {
    const t = Cu.get(e.target);
    t && t(e);
  }, Hk = (e) => {
    e.forEach(Bk);
  };
  function Wk({ root: e, ...t }) {
    const n = e || document;
    ll.has(n) || ll.set(n, {});
    const r = ll.get(n), i = JSON.stringify(t);
    return r[i] || (r[i] = new IntersectionObserver(Hk, { root: e, ...t })), r[i];
  }
  function Kk(e, t, n) {
    const r = Wk(t);
    return Cu.set(e, n), r.observe(e), () => {
      Cu.delete(e), r.unobserve(e);
    };
  }
  const Gk = {
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
        threshold: typeof i == "number" ? i : Gk[i]
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
      ["amount", "margin", "root"].some(Qk(t, n)) && this.startObserver();
    }
    unmount() {
    }
  }
  function Qk({ viewport: e = {} }, { viewport: t = {} } = {}) {
    return (n) => e[n] !== t[n];
  }
  const Xk = {
    inView: {
      Feature: Yk
    },
    tap: {
      Feature: Uk
    },
    focus: {
      Feature: zk
    },
    hover: {
      Feature: Ik
    }
  };
  function vv(e, t) {
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
  function Zk(e) {
    const t = {};
    return e.values.forEach((n, r) => t[r] = n.get()), t;
  }
  function qk(e) {
    const t = {};
    return e.values.forEach((n, r) => t[r] = n.getVelocity()), t;
  }
  function xa(e, t, n) {
    const r = e.getProps();
    return mf(r, t, n !== void 0 ? n : r.custom, Zk(e), qk(e));
  }
  const xn = (e) => e * 1e3, Ht = (e) => e / 1e3, Jk = {
    type: "spring",
    stiffness: 500,
    damping: 25,
    restSpeed: 10
  }, e_ = (e) => ({
    type: "spring",
    stiffness: 550,
    damping: e === 0 ? 2 * Math.sqrt(550) : 30,
    restSpeed: 10
  }), t_ = {
    type: "keyframes",
    duration: 0.8
  }, n_ = {
    type: "keyframes",
    ease: [0.25, 0.1, 0.35, 1],
    duration: 0.3
  }, r_ = (e, { keyframes: t }) => t.length > 2 ? t_ : fr.has(e) ? e.startsWith("scale") ? e_(t[1]) : Jk : n_;
  function i_({ when: e, delay: t, delayChildren: n, staggerChildren: r, staggerDirection: i, repeat: o, repeatType: s, repeatDelay: a, from: l, elapsed: u, ...c }) {
    return !!Object.keys(c).length;
  }
  function yf(e, t) {
    return e[t] || e.default || e;
  }
  const o_ = (e) => e !== null;
  function wa(e, { repeat: t, repeatType: n = "loop" }, r) {
    const i = e.filter(o_), o = t && n !== "loop" && t % 2 === 1 ? 0 : i.length - 1;
    return !o || r === void 0 ? i[o] : r;
  }
  let Xo;
  function s_() {
    Xo = void 0;
  }
  const wn = {
    now: () => (Xo === void 0 && wn.set(Te.isProcessing || QC.useManualTiming ? Te.timestamp : performance.now()), Xo),
    set: (e) => {
      Xo = e, queueMicrotask(s_);
    }
  }, Sv = (e) => /^0[^.\s]+$/u.test(e);
  function a_(e) {
    return typeof e == "number" ? e === 0 : e !== null ? e === "none" || e === "0" || Sv(e) : !0;
  }
  let xv = Re;
  const wv = (e) => /^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(e), l_ = (
    // eslint-disable-next-line redos-detector/no-unsafe-regex -- false positive, as it can match a lot of words
    /^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u
  );
  function u_(e) {
    const t = l_.exec(e);
    if (!t)
      return [,];
    const [, n, r, i] = t;
    return [`--${n ?? r}`, i];
  }
  function Tv(e, t, n = 1) {
    const [r, i] = u_(e);
    if (!r)
      return;
    const o = window.getComputedStyle(t).getPropertyValue(r);
    if (o) {
      const s = o.trim();
      return wv(s) ? parseFloat(s) : s;
    }
    return lf(i) ? Tv(i, t, n + 1) : i;
  }
  const c_ = /* @__PURE__ */ new Set([
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
  ]), zh = (e) => e === Zr || e === V, Uh = (e, t) => parseFloat(e.split(", ")[t]), Bh = (e, t) => (n, { transform: r }) => {
    if (r === "none" || !r)
      return 0;
    const i = r.match(/^matrix3d\((.+)\)$/u);
    if (i)
      return Uh(i[1], t);
    {
      const o = r.match(/^matrix\((.+)\)$/u);
      return o ? Uh(o[1], e) : 0;
    }
  }, f_ = /* @__PURE__ */ new Set(["x", "y", "z"]), d_ = lo.filter((e) => !f_.has(e));
  function h_(e) {
    const t = [];
    return d_.forEach((n) => {
      const r = e.getValue(n);
      r !== void 0 && (t.push([n, r.get()]), r.set(n.startsWith("scale") ? 1 : 0));
    }), t;
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
    x: Bh(4, 13),
    y: Bh(5, 14)
  };
  Wr.translateX = Wr.x;
  Wr.translateY = Wr.y;
  const Ev = (e) => (t) => t.test(e), p_ = {
    test: (e) => e === "auto",
    parse: (e) => e
  }, Pv = [Zr, V, jt, en, vk, gk, p_], Hh = (e) => Pv.find(Ev(e)), Qn = /* @__PURE__ */ new Set();
  let ku = !1, _u = !1;
  function Cv() {
    if (_u) {
      const e = Array.from(Qn).filter((r) => r.needsMeasurement), t = new Set(e.map((r) => r.element)), n = /* @__PURE__ */ new Map();
      t.forEach((r) => {
        const i = h_(r);
        i.length && (n.set(r, i), r.render());
      }), e.forEach((r) => r.measureInitialState()), t.forEach((r) => {
        r.render();
        const i = n.get(r);
        i && i.forEach(([o, s]) => {
          var a;
          (a = r.getValue(o)) === null || a === void 0 || a.set(s);
        });
      }), e.forEach((r) => r.measureEndState()), e.forEach((r) => {
        r.suspendedScrollY !== void 0 && window.scrollTo(0, r.suspendedScrollY);
      });
    }
    _u = !1, ku = !1, Qn.forEach((e) => e.complete()), Qn.clear();
  }
  function kv() {
    Qn.forEach((e) => {
      e.readKeyframes(), e.needsMeasurement && (_u = !0);
    });
  }
  function m_() {
    kv(), Cv();
  }
  class gf {
    constructor(t, n, r, i, o, s = !1) {
      this.isComplete = !1, this.isAsync = !1, this.needsMeasurement = !1, this.isScheduled = !1, this.unresolvedKeyframes = [...t], this.onComplete = n, this.name = r, this.motionValue = i, this.element = o, this.isAsync = s;
    }
    scheduleResolve() {
      this.isScheduled = !0, this.isAsync ? (Qn.add(this), ku || (ku = !0, Se.read(kv), Se.resolveKeyframes(Cv))) : (this.readKeyframes(), this.complete());
    }
    readKeyframes() {
      const { unresolvedKeyframes: t, name: n, element: r, motionValue: i } = this;
      for (let o = 0; o < t.length; o++)
        if (t[o] === null)
          if (o === 0) {
            const s = i == null ? void 0 : i.get(), a = t[t.length - 1];
            if (s !== void 0)
              t[0] = s;
            else if (r && n) {
              const l = r.readValue(n, a);
              l != null && (t[0] = l);
            }
            t[0] === void 0 && (t[0] = a), i && s === void 0 && i.set(t[0]);
          } else
            t[o] = t[o - 1];
    }
    setFinalKeyframe() {
    }
    measureInitialState() {
    }
    renderEndStyles() {
    }
    measureEndState() {
    }
    complete() {
      this.isComplete = !0, this.onComplete(this.unresolvedKeyframes, this.finalKeyframe), Qn.delete(this);
    }
    cancel() {
      this.isComplete || (this.isScheduled = !1, Qn.delete(this));
    }
    resume() {
      this.isComplete || this.scheduleResolve();
    }
  }
  const vf = (e, t) => (n) => !!(uo(n) && yk.test(n) && n.startsWith(e) || t && Object.prototype.hasOwnProperty.call(n, t)), _v = (e, t, n) => (r) => {
    if (!uo(r))
      return r;
    const [i, o, s, a] = r.match(uf);
    return {
      [e]: parseFloat(i),
      [t]: parseFloat(o),
      [n]: parseFloat(s),
      alpha: a !== void 0 ? parseFloat(a) : 1
    };
  }, y_ = (e) => Cn(0, 255, e), ul = {
    ...Zr,
    transform: (e) => Math.round(y_(e))
  }, Hn = {
    test: vf("rgb", "red"),
    parse: _v("red", "green", "blue"),
    transform: ({ red: e, green: t, blue: n, alpha: r = 1 }) => "rgba(" + ul.transform(e) + ", " + ul.transform(t) + ", " + ul.transform(n) + ", " + Ci(Pi.transform(r)) + ")"
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
  const Au = {
    test: vf("#"),
    parse: g_,
    transform: Hn.transform
  }, Ar = {
    test: vf("hsl", "hue"),
    parse: _v("hue", "saturation", "lightness"),
    transform: ({ hue: e, saturation: t, lightness: n, alpha: r = 1 }) => "hsla(" + Math.round(e) + ", " + jt.transform(Ci(t)) + ", " + jt.transform(Ci(n)) + ", " + Ci(Pi.transform(r)) + ")"
  }, Oe = {
    test: (e) => Hn.test(e) || Au.test(e) || Ar.test(e),
    parse: (e) => Hn.test(e) ? Hn.parse(e) : Ar.test(e) ? Ar.parse(e) : Au.parse(e),
    transform: (e) => uo(e) ? e : e.hasOwnProperty("red") ? Hn.transform(e) : Ar.transform(e)
  };
  function v_(e) {
    var t, n;
    return isNaN(e) && uo(e) && (((t = e.match(uf)) === null || t === void 0 ? void 0 : t.length) || 0) + (((n = e.match(mk)) === null || n === void 0 ? void 0 : n.length) || 0) > 0;
  }
  const Av = "number", Ov = "color", S_ = "var", x_ = "var(", Wh = "${}", w_ = /var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;
  function _s(e) {
    const t = e.toString(), n = [], r = {
      color: [],
      number: [],
      var: []
    }, i = [];
    let o = 0;
    const a = t.replace(w_, (l) => (Oe.test(l) ? (r.color.push(o), i.push(Ov), n.push(Oe.parse(l))) : l.startsWith(x_) ? (r.var.push(o), i.push(S_), n.push(l)) : (r.number.push(o), i.push(Av), n.push(parseFloat(l))), ++o, Wh)).split(Wh);
    return { values: n, split: a, indexes: r, types: i };
  }
  function jv(e) {
    return _s(e).values;
  }
  function Fv(e) {
    const { split: t, types: n } = _s(e), r = t.length;
    return (i) => {
      let o = "";
      for (let s = 0; s < r; s++)
        if (o += t[s], i[s] !== void 0) {
          const a = n[s];
          a === Av ? o += Ci(i[s]) : a === Ov ? o += Oe.transform(i[s]) : o += i[s];
        }
      return o;
    };
  }
  const T_ = (e) => typeof e == "number" ? 0 : e;
  function E_(e) {
    const t = jv(e);
    return Fv(e)(t.map(T_));
  }
  const _n = {
    test: v_,
    parse: jv,
    createTransformer: Fv,
    getAnimatableNone: E_
  }, P_ = /* @__PURE__ */ new Set(["brightness", "contrast", "saturate", "opacity"]);
  function C_(e) {
    const [t, n] = e.slice(0, -1).split("(");
    if (t === "drop-shadow")
      return e;
    const [r] = n.match(uf) || [];
    if (!r)
      return e;
    const i = n.replace(r, "");
    let o = P_.has(t) ? 1 : 0;
    return r !== n && (o *= 100), t + "(" + o + i + ")";
  }
  const k_ = /\b([a-z-]*)\(.*?\)/gu, Ou = {
    ..._n,
    getAnimatableNone: (e) => {
      const t = e.match(k_);
      return t ? t.map(C_).join(" ") : e;
    }
  }, __ = {
    ...rv,
    // Color props
    color: Oe,
    backgroundColor: Oe,
    outlineColor: Oe,
    fill: Oe,
    stroke: Oe,
    // Border props
    borderColor: Oe,
    borderTopColor: Oe,
    borderRightColor: Oe,
    borderBottomColor: Oe,
    borderLeftColor: Oe,
    filter: Ou,
    WebkitFilter: Ou
  }, Sf = (e) => __[e];
  function Rv(e, t) {
    let n = Sf(e);
    return n !== Ou && (n = _n), n.getAnimatableNone ? n.getAnimatableNone(t) : void 0;
  }
  function A_(e, t, n) {
    let r = 0, i;
    for (; r < e.length && !i; )
      typeof e[r] == "string" && e[r] !== "none" && e[r] !== "0" && (i = e[r]), r++;
    if (i && n)
      for (const o of t)
        e[o] = Rv(n, i);
  }
  class Dv extends gf {
    constructor(t, n, r, i) {
      super(t, n, r, i, i == null ? void 0 : i.owner, !0);
    }
    readKeyframes() {
      const { unresolvedKeyframes: t, element: n, name: r } = this;
      if (!n.current)
        return;
      super.readKeyframes();
      for (let l = 0; l < t.length; l++) {
        const u = t[l];
        if (typeof u == "string" && lf(u)) {
          const c = Tv(u, n.current);
          c !== void 0 && (t[l] = c), l === t.length - 1 && (this.finalKeyframe = u);
        }
      }
      if (!c_.has(r) || t.length !== 2)
        return this.resolveNoneKeyframes();
      const [i, o] = t, s = Hh(i), a = Hh(o);
      if (s !== a)
        if (zh(s) && zh(a))
          for (let l = 0; l < t.length; l++) {
            const u = t[l];
            typeof u == "string" && (t[l] = parseFloat(u));
          }
        else
          this.needsMeasurement = !0;
    }
    resolveNoneKeyframes() {
      const { unresolvedKeyframes: t, name: n } = this, r = [];
      for (let i = 0; i < t.length; i++)
        a_(t[i]) && r.push(i);
      r.length && A_(t, r, n);
    }
    measureInitialState() {
      const { element: t, unresolvedKeyframes: n, name: r } = this;
      if (!t.current)
        return;
      r === "height" && (this.suspendedScrollY = window.pageYOffset), this.measuredOrigin = Wr[r](t.measureViewportBox(), window.getComputedStyle(t.current)), n[0] = this.measuredOrigin;
      const i = n[n.length - 1];
      i !== void 0 && t.getValue(r, i).jump(i, !1);
    }
    measureEndState() {
      var t;
      const { element: n, name: r, unresolvedKeyframes: i } = this;
      if (!n.current)
        return;
      const o = n.getValue(r);
      o && o.jump(this.measuredOrigin, !1);
      const s = i.length - 1, a = i[s];
      i[s] = Wr[r](n.measureViewportBox(), window.getComputedStyle(n.current)), a !== null && this.finalKeyframe === void 0 && (this.finalKeyframe = a), !((t = this.removedTransforms) === null || t === void 0) && t.length && this.removedTransforms.forEach(([l, u]) => {
        n.getValue(l).set(u);
      }), this.resolveNoneKeyframes();
    }
  }
  function O_(e) {
    let t;
    return () => (t === void 0 && (t = e()), t);
  }
  const Kh = (e, t) => t === "zIndex" ? !1 : !!(typeof e == "number" || Array.isArray(e) || typeof e == "string" && // It's animatable if we have a string
  (_n.test(e) || e === "0") && // And it contains numbers and/or colors
  !e.startsWith("url("));
  function j_(e) {
    const t = e[0];
    if (e.length === 1)
      return !0;
    for (let n = 0; n < e.length; n++)
      if (e[n] !== t)
        return !0;
  }
  function F_(e, t, n, r) {
    const i = e[0];
    if (i === null)
      return !1;
    const o = e[e.length - 1], s = Kh(i, t), a = Kh(o, t);
    return !s || !a ? !1 : j_(e) || n === "spring" && r;
  }
  class Mv {
    constructor({ autoplay: t = !0, delay: n = 0, type: r = "keyframes", repeat: i = 0, repeatDelay: o = 0, repeatType: s = "loop", ...a }) {
      this.isStopped = !1, this.hasAttemptedResolve = !1, this.options = {
        autoplay: t,
        delay: n,
        type: r,
        repeat: i,
        repeatDelay: o,
        repeatType: s,
        ...a
      }, this.updateFinishedPromise();
    }
    /**
     * A getter for resolved data. If keyframes are not yet resolved, accessing
     * this.resolved will synchronously flush all pending keyframe resolvers.
     * This is a deoptimisation, but at its worst still batches read/writes.
     */
    get resolved() {
      return !this._resolved && !this.hasAttemptedResolve && m_(), this._resolved;
    }
    /**
     * A method to be called when the keyframes resolver completes. This method
     * will check if its possible to run the animation and, if not, skip it.
     * Otherwise, it will call initPlayback on the implementing class.
     */
    onKeyframesResolved(t, n) {
      this.hasAttemptedResolve = !0;
      const { name: r, type: i, velocity: o, delay: s, onComplete: a, onUpdate: l, isGenerator: u } = this.options;
      if (!u && !F_(t, r, i, o))
        if (s)
          this.options.duration = 0;
        else {
          l == null || l(wa(t, this.options, n)), a == null || a(), this.resolveFinishedPromise();
          return;
        }
      const c = this.initPlayback(t, n);
      c !== !1 && (this._resolved = {
        keyframes: t,
        finalKeyframe: n,
        ...c
      }, this.onPostResolved());
    }
    onPostResolved() {
    }
    /**
     * Allows the returned animation to be awaited or promise-chained. Currently
     * resolves when the animation finishes at all but in a future update could/should
     * reject if its cancels.
     */
    then(t, n) {
      return this.currentFinishedPromise.then(t, n);
    }
    updateFinishedPromise() {
      this.currentFinishedPromise = new Promise((t) => {
        this.resolveFinishedPromise = t;
      });
    }
  }
  function Nv(e, t) {
    return t ? e * (1e3 / t) : 0;
  }
  const R_ = 5;
  function bv(e, t, n) {
    const r = Math.max(t - R_, 0);
    return Nv(n - e(r), t - r);
  }
  const cl = 1e-3, D_ = 0.01, M_ = 10, N_ = 0.05, b_ = 1;
  function L_({ duration: e = 800, bounce: t = 0.25, velocity: n = 0, mass: r = 1 }) {
    let i, o, s = 1 - t;
    s = Cn(N_, b_, s), e = Cn(D_, M_, Ht(e)), s < 1 ? (i = (u) => {
      const c = u * s, f = c * e, d = c - n, y = ju(u, s), g = Math.exp(-f);
      return cl - d / y * g;
    }, o = (u) => {
      const f = u * s * e, d = f * n + n, y = Math.pow(s, 2) * Math.pow(u, 2) * e, g = Math.exp(-f), v = ju(Math.pow(u, 2), s);
      return (-i(u) + cl > 0 ? -1 : 1) * ((d - y) * g) / v;
    }) : (i = (u) => {
      const c = Math.exp(-u * e), f = (u - n) * e + 1;
      return -cl + c * f;
    }, o = (u) => {
      const c = Math.exp(-u * e), f = (n - u) * (e * e);
      return c * f;
    });
    const a = 5 / e, l = $_(i, o, a);
    if (e = xn(e), isNaN(l))
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
  const V_ = 12;
  function $_(e, t, n) {
    let r = n;
    for (let i = 1; i < V_; i++)
      r = r - e(r) / t(r);
    return r;
  }
  function ju(e, t) {
    return e * Math.sqrt(1 - t * t);
  }
  const I_ = ["duration", "bounce"], z_ = ["stiffness", "damping", "mass"];
  function Gh(e, t) {
    return t.some((n) => e[n] !== void 0);
  }
  function U_(e) {
    let t = {
      velocity: 0,
      stiffness: 100,
      damping: 10,
      mass: 1,
      isResolvedFromDuration: !1,
      ...e
    };
    if (!Gh(e, z_) && Gh(e, I_)) {
      const n = L_(e);
      t = {
        ...t,
        ...n,
        mass: 1
      }, t.isResolvedFromDuration = !0;
    }
    return t;
  }
  function Lv({ keyframes: e, restDelta: t, restSpeed: n, ...r }) {
    const i = e[0], o = e[e.length - 1], s = { done: !1, value: i }, { stiffness: a, damping: l, mass: u, duration: c, velocity: f, isResolvedFromDuration: d } = U_({
      ...r,
      velocity: -Ht(r.velocity || 0)
    }), y = f || 0, g = l / (2 * Math.sqrt(a * u)), v = o - i, T = Ht(Math.sqrt(a / u)), p = Math.abs(v) < 5;
    n || (n = p ? 0.01 : 2), t || (t = p ? 5e-3 : 0.5);
    let h;
    if (g < 1) {
      const m = ju(T, g);
      h = (S) => {
        const C = Math.exp(-g * T * S);
        return o - C * ((y + g * T * v) / m * Math.sin(m * S) + v * Math.cos(m * S));
      };
    } else if (g === 1)
      h = (m) => o - Math.exp(-T * m) * (v + (y + T * v) * m);
    else {
      const m = T * Math.sqrt(g * g - 1);
      h = (S) => {
        const C = Math.exp(-g * T * S), P = Math.min(m * S, 300);
        return o - C * ((y + g * T * v) * Math.sinh(P) + m * v * Math.cosh(P)) / m;
      };
    }
    return {
      calculatedDuration: d && c || null,
      next: (m) => {
        const S = h(m);
        if (d)
          s.done = m >= c;
        else {
          let C = y;
          m !== 0 && (g < 1 ? C = bv(h, m, S) : C = 0);
          const P = Math.abs(C) <= n, k = Math.abs(o - S) <= t;
          s.done = P && k;
        }
        return s.value = s.done ? o : S, s;
      }
    };
  }
  function Yh({ keyframes: e, velocity: t = 0, power: n = 0.8, timeConstant: r = 325, bounceDamping: i = 10, bounceStiffness: o = 500, modifyTarget: s, min: a, max: l, restDelta: u = 0.5, restSpeed: c }) {
    const f = e[0], d = {
      done: !1,
      value: f
    }, y = (_) => a !== void 0 && _ < a || l !== void 0 && _ > l, g = (_) => a === void 0 ? l : l === void 0 || Math.abs(a - _) < Math.abs(l - _) ? a : l;
    let v = n * t;
    const T = f + v, p = s === void 0 ? T : s(T);
    p !== T && (v = p - f);
    const h = (_) => -v * Math.exp(-_ / r), m = (_) => p + h(_), S = (_) => {
      const b = h(_), M = m(_);
      d.done = Math.abs(b) <= u, d.value = d.done ? p : M;
    };
    let C, P;
    const k = (_) => {
      y(d.value) && (C = _, P = Lv({
        keyframes: [d.value, g(d.value)],
        velocity: bv(m, _, d.value),
        // TODO: This should be passing * 1000
        damping: i,
        stiffness: o,
        restDelta: u,
        restSpeed: c
      }));
    };
    return k(0), {
      calculatedDuration: null,
      next: (_) => {
        let b = !1;
        return !P && C === void 0 && (b = !0, S(_), k(_)), C !== void 0 && _ >= C ? P.next(_ - C) : (!b && S(_), d);
      }
    };
  }
  const Vv = (e, t, n) => (((1 - 3 * n + 3 * t) * e + (3 * n - 6 * t)) * e + 3 * t) * e, B_ = 1e-7, H_ = 12;
  function W_(e, t, n, r, i) {
    let o, s, a = 0;
    do
      s = t + (n - t) / 2, o = Vv(s, r, i) - e, o > 0 ? n = s : t = s;
    while (Math.abs(o) > B_ && ++a < H_);
    return s;
  }
  function fo(e, t, n, r) {
    if (e === t && n === r)
      return Re;
    const i = (o) => W_(o, 0, 1, e, n);
    return (o) => o === 0 || o === 1 ? o : Vv(i(o), t, r);
  }
  const K_ = fo(0.42, 0, 1, 1), G_ = fo(0, 0, 0.58, 1), $v = fo(0.42, 0, 0.58, 1), Y_ = (e) => Array.isArray(e) && typeof e[0] != "number", Iv = (e) => (t) => t <= 0.5 ? e(2 * t) / 2 : (2 - e(2 * (1 - t))) / 2, zv = (e) => (t) => 1 - e(1 - t), xf = (e) => 1 - Math.sin(Math.acos(e)), Uv = zv(xf), Q_ = Iv(xf), Bv = fo(0.33, 1.53, 0.69, 0.99), wf = zv(Bv), X_ = Iv(wf), Z_ = (e) => (e *= 2) < 1 ? 0.5 * wf(e) : 0.5 * (2 - Math.pow(2, -10 * (e - 1))), q_ = {
    linear: Re,
    easeIn: K_,
    easeInOut: $v,
    easeOut: G_,
    circIn: xf,
    circInOut: Q_,
    circOut: Uv,
    backIn: wf,
    backInOut: X_,
    backOut: Bv,
    anticipate: Z_
  }, Qh = (e) => {
    if (Array.isArray(e)) {
      xv(e.length === 4);
      const [t, n, r, i] = e;
      return fo(t, n, r, i);
    } else if (typeof e == "string")
      return q_[e];
    return e;
  }, Xi = (e, t, n) => {
    const r = t - e;
    return r === 0 ? 1 : (n - e) / r;
  }, ie = (e, t, n) => e + (t - e) * n;
  function fl(e, t, n) {
    return n < 0 && (n += 1), n > 1 && (n -= 1), n < 1 / 6 ? e + (t - e) * 6 * n : n < 1 / 2 ? t : n < 2 / 3 ? e + (t - e) * (2 / 3 - n) * 6 : e;
  }
  function J_({ hue: e, saturation: t, lightness: n, alpha: r }) {
    e /= 360, t /= 100, n /= 100;
    let i = 0, o = 0, s = 0;
    if (!t)
      i = o = s = n;
    else {
      const a = n < 0.5 ? n * (1 + t) : n + t - n * t, l = 2 * n - a;
      i = fl(l, a, e + 1 / 3), o = fl(l, a, e), s = fl(l, a, e - 1 / 3);
    }
    return {
      red: Math.round(i * 255),
      green: Math.round(o * 255),
      blue: Math.round(s * 255),
      alpha: r
    };
  }
  const dl = (e, t, n) => {
    const r = e * e, i = n * (t * t - r) + r;
    return i < 0 ? 0 : Math.sqrt(i);
  }, e2 = [Au, Hn, Ar], t2 = (e) => e2.find((t) => t.test(e));
  function Xh(e) {
    const t = t2(e);
    let n = t.parse(e);
    return t === Ar && (n = J_(n)), n;
  }
  const Zh = (e, t) => {
    const n = Xh(e), r = Xh(t), i = { ...n };
    return (o) => (i.red = dl(n.red, r.red, o), i.green = dl(n.green, r.green, o), i.blue = dl(n.blue, r.blue, o), i.alpha = ie(n.alpha, r.alpha, o), Hn.transform(i));
  };
  function Fu(e, t) {
    return (n) => n > 0 ? t : e;
  }
  function n2(e, t) {
    return (n) => ie(e, t, n);
  }
  function Tf(e) {
    return typeof e == "number" ? n2 : typeof e == "string" ? lf(e) ? Fu : Oe.test(e) ? Zh : o2 : Array.isArray(e) ? Hv : typeof e == "object" ? Oe.test(e) ? Zh : r2 : Fu;
  }
  function Hv(e, t) {
    const n = [...e], r = n.length, i = e.map((o, s) => Tf(o)(o, t[s]));
    return (o) => {
      for (let s = 0; s < r; s++)
        n[s] = i[s](o);
      return n;
    };
  }
  function r2(e, t) {
    const n = { ...e, ...t }, r = {};
    for (const i in n)
      e[i] !== void 0 && t[i] !== void 0 && (r[i] = Tf(e[i])(e[i], t[i]));
    return (i) => {
      for (const o in r)
        n[o] = r[o](i);
      return n;
    };
  }
  function i2(e, t) {
    var n;
    const r = [], i = { color: 0, var: 0, number: 0 };
    for (let o = 0; o < t.values.length; o++) {
      const s = t.types[o], a = e.indexes[s][i[s]], l = (n = e.values[a]) !== null && n !== void 0 ? n : 0;
      r[o] = l, i[s]++;
    }
    return r;
  }
  const o2 = (e, t) => {
    const n = _n.createTransformer(t), r = _s(e), i = _s(t);
    return r.indexes.var.length === i.indexes.var.length && r.indexes.color.length === i.indexes.color.length && r.indexes.number.length >= i.indexes.number.length ? Bt(Hv(i2(r, i), i.values), n) : Fu(e, t);
  };
  function Wv(e, t, n) {
    return typeof e == "number" && typeof t == "number" && typeof n == "number" ? ie(e, t, n) : Tf(e)(e, t);
  }
  function s2(e, t, n) {
    const r = [], i = n || Wv, o = e.length - 1;
    for (let s = 0; s < o; s++) {
      let a = i(e[s], e[s + 1]);
      if (t) {
        const l = Array.isArray(t) ? t[s] || Re : t;
        a = Bt(l, a);
      }
      r.push(a);
    }
    return r;
  }
  function a2(e, t, { clamp: n = !0, ease: r, mixer: i } = {}) {
    const o = e.length;
    if (xv(o === t.length), o === 1)
      return () => t[0];
    if (o === 2 && e[0] === e[1])
      return () => t[1];
    e[0] > e[o - 1] && (e = [...e].reverse(), t = [...t].reverse());
    const s = s2(t, r, i), a = s.length, l = (u) => {
      let c = 0;
      if (a > 1)
        for (; c < e.length - 2 && !(u < e[c + 1]); c++)
          ;
      const f = Xi(e[c], e[c + 1], u);
      return s[c](f);
    };
    return n ? (u) => l(Cn(e[0], e[o - 1], u)) : l;
  }
  function l2(e, t) {
    const n = e[e.length - 1];
    for (let r = 1; r <= t; r++) {
      const i = Xi(0, t, r);
      e.push(ie(n, 1, i));
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
    return e.map(() => t || $v).splice(0, e.length - 1);
  }
  function As({ duration: e = 300, keyframes: t, times: n, ease: r = "easeInOut" }) {
    const i = Y_(r) ? r.map(Qh) : Qh(r), o = {
      done: !1,
      value: t[0]
    }, s = c2(
      // Only use the provided offsets if they're the correct length
      // TODO Maybe we should warn here if there's a length mismatch
      n && n.length === t.length ? n : u2(t),
      e
    ), a = a2(s, t, {
      ease: Array.isArray(i) ? i : f2(t, i)
    });
    return {
      calculatedDuration: e,
      next: (l) => (o.value = a(l), o.done = l >= e, o)
    };
  }
  const qh = 2e4;
  function d2(e) {
    let t = 0;
    const n = 50;
    let r = e.next(t);
    for (; !r.done && t < qh; )
      t += n, r = e.next(t);
    return t >= qh ? 1 / 0 : t;
  }
  const h2 = (e) => {
    const t = ({ timestamp: n }) => e(n);
    return {
      start: () => Se.update(t, !0),
      stop: () => kn(t),
      /**
       * If we're processing this frame we can use the
       * framelocked timestamp to keep things in sync.
       */
      now: () => Te.isProcessing ? Te.timestamp : wn.now()
    };
  }, p2 = {
    decay: Yh,
    inertia: Yh,
    tween: As,
    keyframes: As,
    spring: Lv
  }, m2 = (e) => e / 100;
  class Ef extends Mv {
    constructor({ KeyframeResolver: t = gf, ...n }) {
      super(n), this.holdTime = null, this.startTime = null, this.cancelTime = null, this.currentTime = 0, this.playbackSpeed = 1, this.pendingPlayState = "running", this.state = "idle";
      const { name: r, motionValue: i, keyframes: o } = this.options, s = (a, l) => this.onKeyframesResolved(a, l);
      r && i && i.owner ? this.resolver = i.owner.resolveKeyframes(o, s, r, i) : this.resolver = new t(o, s, r, i), this.resolver.scheduleResolve();
    }
    initPlayback(t) {
      const { type: n = "keyframes", repeat: r = 0, repeatDelay: i = 0, repeatType: o, velocity: s = 0 } = this.options, a = p2[n] || As;
      let l, u;
      a !== As && typeof t[0] != "number" && (l = Bt(m2, Wv(t[0], t[1])), t = [0, 100]);
      const c = a({ ...this.options, keyframes: t });
      o === "mirror" && (u = a({
        ...this.options,
        keyframes: [...t].reverse(),
        velocity: -s
      })), c.calculatedDuration === null && (c.calculatedDuration = d2(c));
      const { calculatedDuration: f } = c, d = f + i, y = d * (r + 1) - i;
      return {
        generator: c,
        mirroredGenerator: u,
        mapPercentToKeyframes: l,
        calculatedDuration: f,
        resolvedDuration: d,
        totalDuration: y
      };
    }
    onPostResolved() {
      const { autoplay: t = !0 } = this.options;
      this.play(), this.pendingPlayState === "paused" || !t ? this.pause() : this.state = this.pendingPlayState;
    }
    tick(t, n = !1) {
      const { resolved: r } = this;
      if (!r) {
        const { keyframes: _ } = this.options;
        return { done: !0, value: _[_.length - 1] };
      }
      const { finalKeyframe: i, generator: o, mirroredGenerator: s, mapPercentToKeyframes: a, keyframes: l, calculatedDuration: u, totalDuration: c, resolvedDuration: f } = r;
      if (this.startTime === null)
        return o.next(0);
      const { delay: d, repeat: y, repeatType: g, repeatDelay: v, onUpdate: T } = this.options;
      this.speed > 0 ? this.startTime = Math.min(this.startTime, t) : this.speed < 0 && (this.startTime = Math.min(t - c / this.speed, this.startTime)), n ? this.currentTime = t : this.holdTime !== null ? this.currentTime = this.holdTime : this.currentTime = Math.round(t - this.startTime) * this.speed;
      const p = this.currentTime - d * (this.speed >= 0 ? 1 : -1), h = this.speed >= 0 ? p < 0 : p > c;
      this.currentTime = Math.max(p, 0), this.state === "finished" && this.holdTime === null && (this.currentTime = c);
      let m = this.currentTime, S = o;
      if (y) {
        const _ = Math.min(this.currentTime, c) / f;
        let b = Math.floor(_), M = _ % 1;
        !M && _ >= 1 && (M = 1), M === 1 && b--, b = Math.min(b, y + 1), !!(b % 2) && (g === "reverse" ? (M = 1 - M, v && (M -= v / f)) : g === "mirror" && (S = s)), m = Cn(0, 1, M) * f;
      }
      const C = h ? { done: !1, value: l[0] } : S.next(m);
      a && (C.value = a(C.value));
      let { done: P } = C;
      !h && u !== null && (P = this.speed >= 0 ? this.currentTime >= c : this.currentTime <= 0);
      const k = this.holdTime === null && (this.state === "finished" || this.state === "running" && P);
      return k && i !== void 0 && (C.value = wa(l, this.options, i)), T && T(C.value), k && this.finish(), C;
    }
    get duration() {
      const { resolved: t } = this;
      return t ? Ht(t.calculatedDuration) : 0;
    }
    get time() {
      return Ht(this.currentTime);
    }
    set time(t) {
      t = xn(t), this.currentTime = t, this.holdTime !== null || this.speed === 0 ? this.holdTime = t : this.driver && (this.startTime = this.driver.now() - t / this.speed);
    }
    get speed() {
      return this.playbackSpeed;
    }
    set speed(t) {
      const n = this.playbackSpeed !== t;
      this.playbackSpeed = t, n && (this.time = Ht(this.currentTime));
    }
    play() {
      if (this.resolver.isScheduled || this.resolver.resume(), !this._resolved) {
        this.pendingPlayState = "running";
        return;
      }
      if (this.isStopped)
        return;
      const { driver: t = h2, onPlay: n } = this.options;
      this.driver || (this.driver = t((i) => this.tick(i))), n && n();
      const r = this.driver.now();
      this.holdTime !== null ? this.startTime = r - this.holdTime : (!this.startTime || this.state === "finished") && (this.startTime = r), this.state === "finished" && this.updateFinishedPromise(), this.cancelTime = this.startTime, this.holdTime = null, this.state = "running", this.driver.start();
    }
    pause() {
      var t;
      if (!this._resolved) {
        this.pendingPlayState = "paused";
        return;
      }
      this.state = "paused", this.holdTime = (t = this.currentTime) !== null && t !== void 0 ? t : 0;
    }
    stop() {
      if (this.resolver.cancel(), this.isStopped = !0, this.state === "idle")
        return;
      this.teardown();
      const { onStop: t } = this.options;
      t && t();
    }
    complete() {
      this.state !== "running" && this.play(), this.pendingPlayState = this.state = "finished", this.holdTime = null;
    }
    finish() {
      this.teardown(), this.state = "finished";
      const { onComplete: t } = this.options;
      t && t();
    }
    cancel() {
      this.cancelTime !== null && this.tick(this.cancelTime), this.teardown(), this.updateFinishedPromise();
    }
    teardown() {
      this.state = "idle", this.stopDriver(), this.resolveFinishedPromise(), this.updateFinishedPromise(), this.startTime = this.cancelTime = null, this.resolver.cancel();
    }
    stopDriver() {
      this.driver && (this.driver.stop(), this.driver = void 0);
    }
    sample(t) {
      return this.startTime = 0, this.tick(t, !0);
    }
  }
  const Kv = (e) => Array.isArray(e) && typeof e[0] == "number";
  function Gv(e) {
    return !!(!e || typeof e == "string" && e in Pf || Kv(e) || Array.isArray(e) && e.every(Gv));
  }
  const di = ([e, t, n, r]) => `cubic-bezier(${e}, ${t}, ${n}, ${r})`, Pf = {
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
  function y2(e) {
    return Yv(e) || Pf.easeOut;
  }
  function Yv(e) {
    if (e)
      return Kv(e) ? di(e) : Array.isArray(e) ? e.map(y2) : Pf[e];
  }
  function g2(e, t, n, { delay: r = 0, duration: i = 300, repeat: o = 0, repeatType: s = "loop", ease: a, times: l } = {}) {
    const u = { [t]: n };
    l && (u.offset = l);
    const c = Yv(a);
    return Array.isArray(c) && (u.easing = c), e.animate(u, {
      delay: r,
      duration: i,
      easing: Array.isArray(c) ? "linear" : c,
      fill: "both",
      iterations: o + 1,
      direction: s === "reverse" ? "alternate" : "normal"
    });
  }
  const v2 = O_(() => Object.hasOwnProperty.call(Element.prototype, "animate")), S2 = /* @__PURE__ */ new Set([
    "opacity",
    "clipPath",
    "filter",
    "transform"
    // TODO: Can be accelerated but currently disabled until https://issues.chromium.org/issues/41491098 is resolved
    // or until we implement support for linear() easing.
    // "background-color"
  ]), Os = 10, x2 = 2e4;
  function w2(e) {
    return e.type === "spring" || e.name === "backgroundColor" || !Gv(e.ease);
  }
  function T2(e, t) {
    const n = new Ef({
      ...t,
      keyframes: e,
      repeat: 0,
      delay: 0,
      isGenerator: !0
    });
    let r = { done: !1, value: e[0] };
    const i = [];
    let o = 0;
    for (; !r.done && o < x2; )
      r = n.sample(o), i.push(r.value), o += Os;
    return {
      times: void 0,
      keyframes: i,
      duration: o - Os,
      ease: "linear"
    };
  }
  class Jh extends Mv {
    constructor(t) {
      super(t);
      const { name: n, motionValue: r, keyframes: i } = this.options;
      this.resolver = new Dv(i, (o, s) => this.onKeyframesResolved(o, s), n, r), this.resolver.scheduleResolve();
    }
    initPlayback(t, n) {
      var r;
      let { duration: i = 300, times: o, ease: s, type: a, motionValue: l, name: u } = this.options;
      if (!(!((r = l.owner) === null || r === void 0) && r.current))
        return !1;
      if (w2(this.options)) {
        const { onComplete: f, onUpdate: d, motionValue: y, ...g } = this.options, v = T2(t, g);
        t = v.keyframes, t.length === 1 && (t[1] = t[0]), i = v.duration, o = v.times, s = v.ease, a = "keyframes";
      }
      const c = g2(l.owner.current, u, t, { ...this.options, duration: i, times: o, ease: s });
      return c.startTime = wn.now(), this.pendingTimeline ? (c.timeline = this.pendingTimeline, this.pendingTimeline = void 0) : c.onfinish = () => {
        const { onComplete: f } = this.options;
        l.set(wa(t, this.options, n)), f && f(), this.cancel(), this.resolveFinishedPromise();
      }, {
        animation: c,
        duration: i,
        times: o,
        type: a,
        ease: s,
        keyframes: t
      };
    }
    get duration() {
      const { resolved: t } = this;
      if (!t)
        return 0;
      const { duration: n } = t;
      return Ht(n);
    }
    get time() {
      const { resolved: t } = this;
      if (!t)
        return 0;
      const { animation: n } = t;
      return Ht(n.currentTime || 0);
    }
    set time(t) {
      const { resolved: n } = this;
      if (!n)
        return;
      const { animation: r } = n;
      r.currentTime = xn(t);
    }
    get speed() {
      const { resolved: t } = this;
      if (!t)
        return 1;
      const { animation: n } = t;
      return n.playbackRate;
    }
    set speed(t) {
      const { resolved: n } = this;
      if (!n)
        return;
      const { animation: r } = n;
      r.playbackRate = t;
    }
    get state() {
      const { resolved: t } = this;
      if (!t)
        return "idle";
      const { animation: n } = t;
      return n.playState;
    }
    /**
     * Replace the default DocumentTimeline with another AnimationTimeline.
     * Currently used for scroll animations.
     */
    attachTimeline(t) {
      if (!this._resolved)
        this.pendingTimeline = t;
      else {
        const { resolved: n } = this;
        if (!n)
          return Re;
        const { animation: r } = n;
        r.timeline = t, r.onfinish = null;
      }
      return Re;
    }
    play() {
      if (this.isStopped)
        return;
      const { resolved: t } = this;
      if (!t)
        return;
      const { animation: n } = t;
      n.playState === "finished" && this.updateFinishedPromise(), n.play();
    }
    pause() {
      const { resolved: t } = this;
      if (!t)
        return;
      const { animation: n } = t;
      n.pause();
    }
    stop() {
      if (this.resolver.cancel(), this.isStopped = !0, this.state === "idle")
        return;
      const { resolved: t } = this;
      if (!t)
        return;
      const { animation: n, keyframes: r, duration: i, type: o, ease: s, times: a } = t;
      if (!(n.playState === "idle" || n.playState === "finished")) {
        if (this.time) {
          const { motionValue: l, onUpdate: u, onComplete: c, ...f } = this.options, d = new Ef({
            ...f,
            keyframes: r,
            duration: i,
            type: o,
            ease: s,
            times: a,
            isGenerator: !0
          }), y = xn(this.time);
          l.setWithVelocity(d.sample(y - Os).value, d.sample(y).value, Os);
        }
        this.cancel();
      }
    }
    complete() {
      const { resolved: t } = this;
      t && t.animation.finish();
    }
    cancel() {
      const { resolved: t } = this;
      t && t.animation.cancel();
    }
    static supports(t) {
      const { motionValue: n, name: r, repeatDelay: i, repeatType: o, damping: s, type: a } = t;
      return v2() && r && S2.has(r) && n && n.owner && n.owner.current instanceof HTMLElement && /**
       * If we're outputting values to onUpdate then we can't use WAAPI as there's
       * no way to read the value from WAAPI every frame.
       */
      !n.owner.getProps().onUpdate && !i && o !== "mirror" && s !== 0 && a !== "inertia";
    }
  }
  const Cf = (e, t, n, r = {}, i, o) => (s) => {
    const a = yf(r, e) || {}, l = a.delay || r.delay || 0;
    let { elapsed: u = 0 } = r;
    u = u - xn(l);
    let c = {
      keyframes: Array.isArray(n) ? n : [null, n],
      ease: "easeOut",
      velocity: t.getVelocity(),
      ...a,
      delay: -u,
      onUpdate: (d) => {
        t.set(d), a.onUpdate && a.onUpdate(d);
      },
      onComplete: () => {
        s(), a.onComplete && a.onComplete();
      },
      name: e,
      motionValue: t,
      element: o ? void 0 : i
    };
    i_(a) || (c = {
      ...c,
      ...r_(e, c)
    }), c.duration && (c.duration = xn(c.duration)), c.repeatDelay && (c.repeatDelay = xn(c.repeatDelay)), c.from !== void 0 && (c.keyframes[0] = c.from);
    let f = !1;
    if ((c.type === !1 || c.duration === 0 && !c.repeatDelay) && (c.duration = 0, c.delay === 0 && (f = !0)), f && !o && t.get() !== void 0) {
      const d = wa(c.keyframes, a);
      if (d !== void 0) {
        Se.update(() => {
          c.onUpdate(d), c.onComplete();
        });
        return;
      }
    }
    return !o && Jh.supports(c) ? new Jh(c) : new Ef(c);
  };
  function js(e) {
    return !!(Fe(e) && e.add);
  }
  function kf(e, t) {
    e.indexOf(t) === -1 && e.push(t);
  }
  function _f(e, t) {
    const n = e.indexOf(t);
    n > -1 && e.splice(n, 1);
  }
  class Af {
    constructor() {
      this.subscriptions = [];
    }
    add(t) {
      return kf(this.subscriptions, t), () => _f(this.subscriptions, t);
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
  const ep = 30, E2 = (e) => !isNaN(parseFloat(e));
  class P2 {
    /**
     * @param init - The initiating value
     * @param config - Optional configuration options
     *
     * -  `transformer`: A function to transform incoming values with.
     *
     * @internal
     */
    constructor(t, n = {}) {
      this.version = "11.1.5", this.canTrackVelocity = !1, this.events = {}, this.updateAndNotify = (r, i = !0) => {
        const o = wn.now();
        this.updatedAt !== o && this.setPrevFrameValue(), this.prev = this.current, this.setCurrent(r), this.current !== this.prev && this.events.change && this.events.change.notify(this.current), i && this.events.renderRequest && this.events.renderRequest.notify(this.current);
      }, this.hasAnimated = !1, this.setCurrent(t), this.canTrackVelocity = E2(this.current), this.owner = n.owner;
    }
    setCurrent(t) {
      this.current = t, this.updatedAt = wn.now();
    }
    setPrevFrameValue(t = this.current) {
      this.prevFrameValue = t, this.prevUpdatedAt = this.updatedAt;
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
      this.events[t] || (this.events[t] = new Af());
      const r = this.events[t].add(n);
      return t === "change" ? () => {
        r(), Se.read(() => {
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
      this.set(n), this.prev = void 0, this.prevFrameValue = t, this.prevUpdatedAt = this.updatedAt - r;
    }
    /**
     * Set the state of the `MotionValue`, stopping any active animations,
     * effects, and resets velocity to `0`.
     */
    jump(t, n = !0) {
      this.updateAndNotify(t), this.prev = t, this.prevUpdatedAt = this.prevFrameValue = void 0, n && this.stop(), this.stopPassiveEffect && this.stopPassiveEffect();
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
      const t = wn.now();
      if (!this.canTrackVelocity || this.prevFrameValue === void 0 || t - this.updatedAt > ep)
        return 0;
      const n = Math.min(this.updatedAt - this.prevUpdatedAt, ep);
      return Nv(parseFloat(this.current) - parseFloat(this.prevFrameValue), n);
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
  function Zi(e, t) {
    return new P2(e, t);
  }
  function C2(e, t, n) {
    e.hasValue(t) ? e.getValue(t).set(n) : e.addValue(t, Zi(n));
  }
  function k2(e, t) {
    const n = xa(e, t);
    let { transitionEnd: r = {}, transition: i = {}, ...o } = n || {};
    o = { ...o, ...r };
    for (const s in o) {
      const a = Rk(o[s]);
      C2(e, s, a);
    }
  }
  function _2({ protectedKeys: e, needsAnimating: t }, n) {
    const r = e.hasOwnProperty(n) && t[n] !== !0;
    return t[n] = !1, r;
  }
  function Qv(e, t, { delay: n = 0, transitionOverride: r, type: i } = {}) {
    var o;
    let { transition: s = e.getDefaultTransition(), transitionEnd: a, ...l } = t;
    const u = e.getValue("willChange");
    r && (s = r);
    const c = [], f = i && e.animationState && e.animationState.getState()[i];
    for (const d in l) {
      const y = e.getValue(d, (o = e.latestValues[d]) !== null && o !== void 0 ? o : null), g = l[d];
      if (g === void 0 || f && _2(f, d))
        continue;
      const v = {
        delay: n,
        elapsed: 0,
        ...yf(s || {}, d)
      };
      let T = !1;
      if (window.HandoffAppearAnimations) {
        const m = e.getProps()[Xg];
        if (m) {
          const S = window.HandoffAppearAnimations(m, d);
          S !== null && (v.elapsed = S, T = !0);
        }
      }
      y.start(Cf(d, y, g, e.shouldReduceMotion && fr.has(d) ? { type: !1 } : v, e, T));
      const p = y.animation;
      p && (js(u) && (u.add(d), p.then(() => u.remove(d))), c.push(p));
    }
    return a && Promise.all(c).then(() => {
      Se.update(() => {
        a && k2(e, a);
      });
    }), c;
  }
  function Ru(e, t, n = {}) {
    var r;
    const i = xa(e, t, n.type === "exit" ? (r = e.presenceContext) === null || r === void 0 ? void 0 : r.custom : void 0);
    let { transition: o = e.getDefaultTransition() || {} } = i || {};
    n.transitionOverride && (o = n.transitionOverride);
    const s = i ? () => Promise.all(Qv(e, i, n)) : () => Promise.resolve(), a = e.variantChildren && e.variantChildren.size ? (u = 0) => {
      const { delayChildren: c = 0, staggerChildren: f, staggerDirection: d } = o;
      return A2(e, t, c + u, f, d, n);
    } : () => Promise.resolve(), { when: l } = o;
    if (l) {
      const [u, c] = l === "beforeChildren" ? [s, a] : [a, s];
      return u().then(() => c());
    } else
      return Promise.all([s(), a(n.delay)]);
  }
  function A2(e, t, n = 0, r = 0, i = 1, o) {
    const s = [], a = (e.variantChildren.size - 1) * r, l = i === 1 ? (u = 0) => u * r : (u = 0) => a - u * r;
    return Array.from(e.variantChildren).sort(O2).forEach((u, c) => {
      u.notify("AnimationStart", t), s.push(Ru(u, t, {
        ...o,
        delay: n + l(c)
      }).then(() => u.notify("AnimationComplete", t)));
    }), Promise.all(s);
  }
  function O2(e, t) {
    return e.sortNodePosition(t);
  }
  function j2(e, t, n = {}) {
    e.notify("AnimationStart", t);
    let r;
    if (Array.isArray(t)) {
      const i = t.map((o) => Ru(e, o, n));
      r = Promise.all(i);
    } else if (typeof t == "string")
      r = Ru(e, t, n);
    else {
      const i = typeof t == "function" ? xa(e, t, n.custom) : t;
      r = Promise.all(Qv(e, i, n));
    }
    return r.then(() => {
      Se.postRender(() => {
        e.notify("AnimationComplete", t);
      });
    });
  }
  const F2 = [...rf].reverse(), R2 = rf.length;
  function D2(e) {
    return (t) => Promise.all(t.map(({ animation: n, options: r }) => j2(e, n, r)));
  }
  function M2(e) {
    let t = D2(e);
    const n = b2();
    let r = !0;
    const i = (l) => (u, c) => {
      var f;
      const d = xa(e, c, l === "exit" ? (f = e.presenceContext) === null || f === void 0 ? void 0 : f.custom : void 0);
      if (d) {
        const { transition: y, transitionEnd: g, ...v } = d;
        u = { ...u, ...v, ...g };
      }
      return u;
    };
    function o(l) {
      t = l(e);
    }
    function s(l) {
      const u = e.getProps(), c = e.getVariantContext(!0) || {}, f = [], d = /* @__PURE__ */ new Set();
      let y = {}, g = 1 / 0;
      for (let T = 0; T < R2; T++) {
        const p = F2[T], h = n[p], m = u[p] !== void 0 ? u[p] : c[p], S = Yi(m), C = p === l ? h.isActive : null;
        C === !1 && (g = T);
        let P = m === c[p] && m !== u[p] && S;
        if (P && r && e.manuallyAnimateOnMount && (P = !1), h.protectedKeys = { ...y }, // If it isn't active and hasn't *just* been set as inactive
        !h.isActive && C === null || // If we didn't and don't have any defined prop for this animation type
        !m && !h.prevProp || // Or if the prop doesn't define an animation
        ga(m) || typeof m == "boolean")
          continue;
        let _ = N2(h.prevProp, m) || // If we're making this variant active, we want to always make it active
        p === l && h.isActive && !P && S || // If we removed a higher-priority variant (i is in reverse order)
        T > g && S, b = !1;
        const M = Array.isArray(m) ? m : [m];
        let $ = M.reduce(i(p), {});
        C === !1 && ($ = {});
        const { prevResolvedValues: fe = {} } = h, ee = {
          ...fe,
          ...$
        }, ke = (ae) => {
          _ = !0, d.has(ae) && (b = !0, d.delete(ae)), h.needsAnimating[ae] = !0;
          const me = e.getValue(ae);
          me && (me.liveStyle = !1);
        };
        for (const ae in ee) {
          const me = $[ae], dt = fe[ae];
          if (y.hasOwnProperty(ae))
            continue;
          let E = !1;
          Pu(me) && Pu(dt) ? E = !vv(me, dt) : E = me !== dt, E ? me != null ? ke(ae) : d.add(ae) : me !== void 0 && d.has(ae) ? ke(ae) : h.protectedKeys[ae] = !0;
        }
        h.prevProp = m, h.prevResolvedValues = $, h.isActive && (y = { ...y, ...$ }), r && e.blockInitialAnimation && (_ = !1), _ && (!P || b) && f.push(...M.map((ae) => ({
          animation: ae,
          options: { type: p }
        })));
      }
      if (d.size) {
        const T = {};
        d.forEach((p) => {
          const h = e.getBaseTarget(p), m = e.getValue(p);
          m && (m.liveStyle = !0), T[p] = h ?? null;
        }), f.push({ animation: T });
      }
      let v = !!f.length;
      return r && (u.initial === !1 || u.initial === u.animate) && !e.manuallyAnimateOnMount && (v = !1), r = !1, v ? t(f) : Promise.resolve();
    }
    function a(l, u) {
      var c;
      if (n[l].isActive === u)
        return Promise.resolve();
      (c = e.variantChildren) === null || c === void 0 || c.forEach((d) => {
        var y;
        return (y = d.animationState) === null || y === void 0 ? void 0 : y.setActive(l, u);
      }), n[l].isActive = u;
      const f = s(l);
      for (const d in n)
        n[d].protectedKeys = {};
      return f;
    }
    return {
      animateChanges: s,
      setActive: a,
      setAnimateFunction: o,
      getState: () => n
    };
  }
  function N2(e, t) {
    return typeof t == "string" ? t !== e : Array.isArray(t) ? !vv(t, e) : !1;
  }
  function Mn(e = !1) {
    return {
      isActive: e,
      protectedKeys: {},
      needsAnimating: {},
      prevResolvedValues: {}
    };
  }
  function b2() {
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
  class L2 extends Rn {
    /**
     * We dynamically generate the AnimationState manager as it contains a reference
     * to the underlying animation library. We only want to load that if we load this,
     * so people can optionally code split it out using the `m` component.
     */
    constructor(t) {
      super(t), t.animationState || (t.animationState = M2(t));
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
  let V2 = 0;
  class $2 extends Rn {
    constructor() {
      super(...arguments), this.id = V2++;
    }
    update() {
      if (!this.node.presenceContext)
        return;
      const { isPresent: t, onExitComplete: n } = this.node.presenceContext, { isPresent: r } = this.node.prevPresenceContext || {};
      if (!this.node.animationState || t === r)
        return;
      const i = this.node.animationState.setActive("exit", !t);
      n && !t && i.then(() => n(this.id));
    }
    mount() {
      const { register: t } = this.node.presenceContext || {};
      t && (this.unmount = t(this.id));
    }
    unmount() {
    }
  }
  const I2 = {
    animation: {
      Feature: L2
    },
    exit: {
      Feature: $2
    }
  }, tp = (e, t) => Math.abs(e - t);
  function z2(e, t) {
    const n = tp(e.x, t.x), r = tp(e.y, t.y);
    return Math.sqrt(n ** 2 + r ** 2);
  }
  class Xv {
    constructor(t, n, { transformPagePoint: r, contextWindow: i, dragSnapToOrigin: o = !1 } = {}) {
      if (this.startEvent = null, this.lastMoveEvent = null, this.lastMoveEventInfo = null, this.handlers = {}, this.contextWindow = window, this.updatePoint = () => {
        if (!(this.lastMoveEvent && this.lastMoveEventInfo))
          return;
        const f = pl(this.lastMoveEventInfo, this.history), d = this.startEvent !== null, y = z2(f.offset, { x: 0, y: 0 }) >= 3;
        if (!d && !y)
          return;
        const { point: g } = f, { timestamp: v } = Te;
        this.history.push({ ...g, timestamp: v });
        const { onStart: T, onMove: p } = this.handlers;
        d || (T && T(this.lastMoveEvent, f), this.startEvent = this.lastMoveEvent), p && p(this.lastMoveEvent, f);
      }, this.handlePointerMove = (f, d) => {
        this.lastMoveEvent = f, this.lastMoveEventInfo = hl(d, this.transformPagePoint), Se.update(this.updatePoint, !0);
      }, this.handlePointerUp = (f, d) => {
        this.end();
        const { onEnd: y, onSessionEnd: g, resumeAnimation: v } = this.handlers;
        if (this.dragSnapToOrigin && v && v(), !(this.lastMoveEvent && this.lastMoveEventInfo))
          return;
        const T = pl(f.type === "pointercancel" ? this.lastMoveEventInfo : hl(d, this.transformPagePoint), this.history);
        this.startEvent && y && y(f, T), g && g(f, T);
      }, !hv(t))
        return;
      this.dragSnapToOrigin = o, this.handlers = n, this.transformPagePoint = r, this.contextWindow = i || window;
      const s = Sa(t), a = hl(s, this.transformPagePoint), { point: l } = a, { timestamp: u } = Te;
      this.history = [{ ...l, timestamp: u }];
      const { onSessionStart: c } = n;
      c && c(t, pl(a, this.history)), this.removeListeners = Bt(Ut(this.contextWindow, "pointermove", this.handlePointerMove), Ut(this.contextWindow, "pointerup", this.handlePointerUp), Ut(this.contextWindow, "pointercancel", this.handlePointerUp));
    }
    updateHandlers(t) {
      this.handlers = t;
    }
    end() {
      this.removeListeners && this.removeListeners(), kn(this.updatePoint);
    }
  }
  function hl(e, t) {
    return t ? { point: t(e.point) } : e;
  }
  function np(e, t) {
    return { x: e.x - t.x, y: e.y - t.y };
  }
  function pl({ point: e }, t) {
    return {
      point: e,
      delta: np(e, Zv(t)),
      offset: np(e, U2(t)),
      velocity: B2(t, 0.1)
    };
  }
  function U2(e) {
    return e[0];
  }
  function Zv(e) {
    return e[e.length - 1];
  }
  function B2(e, t) {
    if (e.length < 2)
      return { x: 0, y: 0 };
    let n = e.length - 1, r = null;
    const i = Zv(e);
    for (; n >= 0 && (r = e[n], !(i.timestamp - r.timestamp > xn(t))); )
      n--;
    if (!r)
      return { x: 0, y: 0 };
    const o = Ht(i.timestamp - r.timestamp);
    if (o === 0)
      return { x: 0, y: 0 };
    const s = {
      x: (i.x - r.x) / o,
      y: (i.y - r.y) / o
    };
    return s.x === 1 / 0 && (s.x = 0), s.y === 1 / 0 && (s.y = 0), s;
  }
  function Ze(e) {
    return e.max - e.min;
  }
  function Du(e, t = 0, n = 0.01) {
    return Math.abs(e - t) <= n;
  }
  function rp(e, t, n, r = 0.5) {
    e.origin = r, e.originPoint = ie(t.min, t.max, e.origin), e.scale = Ze(n) / Ze(t), (Du(e.scale, 1, 1e-4) || isNaN(e.scale)) && (e.scale = 1), e.translate = ie(n.min, n.max, e.origin) - e.originPoint, (Du(e.translate) || isNaN(e.translate)) && (e.translate = 0);
  }
  function ki(e, t, n, r) {
    rp(e.x, t.x, n.x, r ? r.originX : void 0), rp(e.y, t.y, n.y, r ? r.originY : void 0);
  }
  function ip(e, t, n) {
    e.min = n.min + t.min, e.max = e.min + Ze(t);
  }
  function H2(e, t, n) {
    ip(e.x, t.x, n.x), ip(e.y, t.y, n.y);
  }
  function op(e, t, n) {
    e.min = t.min - n.min, e.max = e.min + Ze(t);
  }
  function _i(e, t, n) {
    op(e.x, t.x, n.x), op(e.y, t.y, n.y);
  }
  function W2(e, { min: t, max: n }, r) {
    return t !== void 0 && e < t ? e = r ? ie(t, e, r.min) : Math.max(e, t) : n !== void 0 && e > n && (e = r ? ie(n, e, r.max) : Math.min(e, n)), e;
  }
  function sp(e, t, n) {
    return {
      min: t !== void 0 ? e.min + t : void 0,
      max: n !== void 0 ? e.max + n - (e.max - e.min) : void 0
    };
  }
  function K2(e, { top: t, left: n, bottom: r, right: i }) {
    return {
      x: sp(e.x, n, i),
      y: sp(e.y, t, r)
    };
  }
  function ap(e, t) {
    let n = t.min - e.min, r = t.max - e.max;
    return t.max - t.min < e.max - e.min && ([n, r] = [r, n]), { min: n, max: r };
  }
  function G2(e, t) {
    return {
      x: ap(e.x, t.x),
      y: ap(e.y, t.y)
    };
  }
  function Y2(e, t) {
    let n = 0.5;
    const r = Ze(e), i = Ze(t);
    return i > r ? n = Xi(t.min, t.max - r, e.min) : r > i && (n = Xi(e.min, e.max - i, t.min)), Cn(0, 1, n);
  }
  function Q2(e, t) {
    const n = {};
    return t.min !== void 0 && (n.min = t.min - e.min), t.max !== void 0 && (n.max = t.max - e.min), n;
  }
  const Mu = 0.35;
  function X2(e = Mu) {
    return e === !1 ? e = 0 : e === !0 && (e = Mu), {
      x: lp(e, "left", "right"),
      y: lp(e, "top", "bottom")
    };
  }
  function lp(e, t, n) {
    return {
      min: up(e, t),
      max: up(e, n)
    };
  }
  function up(e, t) {
    return typeof e == "number" ? e : e[t] || 0;
  }
  const cp = () => ({
    translate: 0,
    scale: 1,
    origin: 0,
    originPoint: 0
  }), Or = () => ({
    x: cp(),
    y: cp()
  }), fp = () => ({ min: 0, max: 0 }), ue = () => ({
    x: fp(),
    y: fp()
  });
  function ot(e) {
    return [e("x"), e("y")];
  }
  function qv({ top: e, left: t, right: n, bottom: r }) {
    return {
      x: { min: t, max: n },
      y: { min: e, max: r }
    };
  }
  function Z2({ x: e, y: t }) {
    return { top: t.min, right: e.max, bottom: t.max, left: e.min };
  }
  function q2(e, t) {
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
  function ml(e) {
    return e === void 0 || e === 1;
  }
  function Nu({ scale: e, scaleX: t, scaleY: n }) {
    return !ml(e) || !ml(t) || !ml(n);
  }
  function Vn(e) {
    return Nu(e) || Jv(e) || e.z || e.rotate || e.rotateX || e.rotateY || e.skewX || e.skewY;
  }
  function Jv(e) {
    return dp(e.x) || dp(e.y);
  }
  function dp(e) {
    return e && e !== "0%";
  }
  function Fs(e, t, n) {
    const r = e - n, i = t * r;
    return n + i;
  }
  function hp(e, t, n, r, i) {
    return i !== void 0 && (e = Fs(e, i, r)), Fs(e, n, r) + t;
  }
  function bu(e, t = 0, n = 1, r, i) {
    e.min = hp(e.min, t, n, r, i), e.max = hp(e.max, t, n, r, i);
  }
  function e0(e, { x: t, y: n }) {
    bu(e.x, t.translate, t.scale, t.originPoint), bu(e.y, n.translate, n.scale, n.originPoint);
  }
  function J2(e, t, n, r = !1) {
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
      }), s && (t.x *= s.x.scale, t.y *= s.y.scale, e0(e, s)), r && Vn(o.latestValues) && jr(e, o.latestValues));
    }
    t.x = pp(t.x), t.y = pp(t.y);
  }
  function pp(e) {
    return Number.isInteger(e) || e > 1.0000000000001 || e < 0.999999999999 ? e : 1;
  }
  function on(e, t) {
    e.min = e.min + t, e.max = e.max + t;
  }
  function mp(e, t, [n, r, i]) {
    const o = t[i] !== void 0 ? t[i] : 0.5, s = ie(e.min, e.max, o);
    bu(e, t[n], t[r], s, t.scale);
  }
  const eA = ["x", "scaleX", "originX"], tA = ["y", "scaleY", "originY"];
  function jr(e, t) {
    mp(e.x, t, eA), mp(e.y, t, tA);
  }
  function t0(e, t) {
    return qv(q2(e.getBoundingClientRect(), t));
  }
  function nA(e, t, n) {
    const r = t0(e, n), { scroll: i } = t;
    return i && (on(r.x, i.offset.x), on(r.y, i.offset.y)), r;
  }
  const n0 = ({ current: e }) => e ? e.ownerDocument.defaultView : null, rA = /* @__PURE__ */ new WeakMap();
  class iA {
    constructor(t) {
      this.openGlobalLock = null, this.isDragging = !1, this.currentDirection = null, this.originPoint = { x: 0, y: 0 }, this.constraints = !1, this.hasMutatedConstraints = !1, this.elastic = ue(), this.visualElement = t;
    }
    start(t, { snapToCursor: n = !1 } = {}) {
      const { presenceContext: r } = this.visualElement;
      if (r && r.isPresent === !1)
        return;
      const i = (c) => {
        const { dragSnapToOrigin: f } = this.getProps();
        f ? this.pauseAnimation() : this.stopAnimation(), n && this.snapToCursor(Sa(c, "page").point);
      }, o = (c, f) => {
        const { drag: d, dragPropagation: y, onDragStart: g } = this.getProps();
        if (d && !y && (this.openGlobalLock && this.openGlobalLock(), this.openGlobalLock = mv(d), !this.openGlobalLock))
          return;
        this.isDragging = !0, this.currentDirection = null, this.resolveConstraints(), this.visualElement.projection && (this.visualElement.projection.isAnimationBlocked = !0, this.visualElement.projection.target = void 0), ot((T) => {
          let p = this.getAxisMotionValue(T).get() || 0;
          if (jt.test(p)) {
            const { projection: h } = this.visualElement;
            if (h && h.layout) {
              const m = h.layout.layoutBox[T];
              m && (p = Ze(m) * (parseFloat(p) / 100));
            }
          }
          this.originPoint[T] = p;
        }), g && g(c, f);
        const { animationState: v } = this.visualElement;
        v && v.setActive("whileDrag", !0);
      }, s = (c, f) => {
        const { dragPropagation: d, dragDirectionLock: y, onDirectionLock: g, onDrag: v } = this.getProps();
        if (!d && !this.openGlobalLock)
          return;
        const { offset: T } = f;
        if (y && this.currentDirection === null) {
          this.currentDirection = oA(T), this.currentDirection !== null && g && g(this.currentDirection);
          return;
        }
        this.updateAxis("x", f.point, T), this.updateAxis("y", f.point, T), this.visualElement.render(), v && v(c, f);
      }, a = (c, f) => this.stop(c, f), l = () => ot((c) => {
        var f;
        return this.getAnimationState(c) === "paused" && ((f = this.getAxisMotionValue(c).animation) === null || f === void 0 ? void 0 : f.play());
      }), { dragSnapToOrigin: u } = this.getProps();
      this.panSession = new Xv(t, {
        onSessionStart: i,
        onStart: o,
        onMove: s,
        onSessionEnd: a,
        resumeAnimation: l
      }, {
        transformPagePoint: this.visualElement.getTransformPagePoint(),
        dragSnapToOrigin: u,
        contextWindow: n0(this.visualElement)
      });
    }
    stop(t, n) {
      const r = this.isDragging;
      if (this.cancel(), !r)
        return;
      const { velocity: i } = n;
      this.startAnimation(i);
      const { onDragEnd: o } = this.getProps();
      o && o(t, n);
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
      if (!r || !Mo(t, i, this.currentDirection))
        return;
      const o = this.getAxisMotionValue(t);
      let s = this.originPoint[t] + r[t];
      this.constraints && this.constraints[t] && (s = W2(s, this.constraints[t], this.elastic[t])), o.set(s);
    }
    resolveConstraints() {
      var t;
      const { dragConstraints: n, dragElastic: r } = this.getProps(), i = this.visualElement.projection && !this.visualElement.projection.layout ? this.visualElement.projection.measure(!1) : (t = this.visualElement.projection) === null || t === void 0 ? void 0 : t.layout, o = this.constraints;
      n && _r(n) ? this.constraints || (this.constraints = this.resolveRefConstraints()) : n && i ? this.constraints = K2(i.layoutBox, n) : this.constraints = !1, this.elastic = X2(r), o !== this.constraints && i && this.constraints && !this.hasMutatedConstraints && ot((s) => {
        this.constraints !== !1 && this.getAxisMotionValue(s) && (this.constraints[s] = Q2(i.layoutBox[s], this.constraints[s]));
      });
    }
    resolveRefConstraints() {
      const { dragConstraints: t, onMeasureDragConstraints: n } = this.getProps();
      if (!t || !_r(t))
        return !1;
      const r = t.current, { projection: i } = this.visualElement;
      if (!i || !i.layout)
        return !1;
      const o = nA(r, i.root, this.visualElement.getTransformPagePoint());
      let s = G2(i.layout.layoutBox, o);
      if (n) {
        const a = n(Z2(s));
        this.hasMutatedConstraints = !!a, a && (s = qv(a));
      }
      return s;
    }
    startAnimation(t) {
      const { drag: n, dragMomentum: r, dragElastic: i, dragTransition: o, dragSnapToOrigin: s, onDragTransitionEnd: a } = this.getProps(), l = this.constraints || {}, u = ot((c) => {
        if (!Mo(c, n, this.currentDirection))
          return;
        let f = l && l[c] || {};
        s && (f = { min: 0, max: 0 });
        const d = i ? 200 : 1e6, y = i ? 40 : 1e7, g = {
          type: "inertia",
          velocity: r ? t[c] : 0,
          bounceStiffness: d,
          bounceDamping: y,
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
      return r.start(Cf(t, r, 0, n, this.visualElement));
    }
    stopAnimation() {
      ot((t) => this.getAxisMotionValue(t).stop());
    }
    pauseAnimation() {
      ot((t) => {
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
      const n = `_drag${t.toUpperCase()}`, r = this.visualElement.getProps(), i = r[n];
      return i || this.visualElement.getValue(t, (r.initial ? r.initial[t] : void 0) || 0);
    }
    snapToCursor(t) {
      ot((n) => {
        const { drag: r } = this.getProps();
        if (!Mo(n, r, this.currentDirection))
          return;
        const { projection: i } = this.visualElement, o = this.getAxisMotionValue(n);
        if (i && i.layout) {
          const { min: s, max: a } = i.layout.layoutBox[n];
          o.set(t[n] - ie(s, a, 0.5));
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
      if (!_r(n) || !r || !this.constraints)
        return;
      this.stopAnimation();
      const i = { x: 0, y: 0 };
      ot((s) => {
        const a = this.getAxisMotionValue(s);
        if (a && this.constraints !== !1) {
          const l = a.get();
          i[s] = Y2({ min: l, max: l }, this.constraints[s]);
        }
      });
      const { transformTemplate: o } = this.visualElement.getProps();
      this.visualElement.current.style.transform = o ? o({}, "") : "none", r.root && r.root.updateScroll(), r.updateLayout(), this.resolveConstraints(), ot((s) => {
        if (!Mo(s, t, null))
          return;
        const a = this.getAxisMotionValue(s), { min: l, max: u } = this.constraints[s];
        a.set(ie(l, u, i[s]));
      });
    }
    addListeners() {
      if (!this.visualElement.current)
        return;
      rA.set(this.visualElement, this);
      const t = this.visualElement.current, n = Ut(t, "pointerdown", (l) => {
        const { drag: u, dragListener: c = !0 } = this.getProps();
        u && c && this.start(l);
      }), r = () => {
        const { dragConstraints: l } = this.getProps();
        _r(l) && (this.constraints = this.resolveRefConstraints());
      }, { projection: i } = this.visualElement, o = i.addEventListener("measure", r);
      i && !i.layout && (i.root && i.root.updateScroll(), i.updateLayout()), r();
      const s = It(window, "resize", () => this.scalePositionWithinConstraints()), a = i.addEventListener("didUpdate", ({ delta: l, hasLayoutChanged: u }) => {
        this.isDragging && u && (ot((c) => {
          const f = this.getAxisMotionValue(c);
          f && (this.originPoint[c] += l[c].translate, f.set(f.get() + l[c].translate));
        }), this.visualElement.render());
      });
      return () => {
        s(), n(), o(), a && a();
      };
    }
    getProps() {
      const t = this.visualElement.getProps(), { drag: n = !1, dragDirectionLock: r = !1, dragPropagation: i = !1, dragConstraints: o = !1, dragElastic: s = Mu, dragMomentum: a = !0 } = t;
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
  function Mo(e, t, n) {
    return (t === !0 || t === e) && (n === null || n === e);
  }
  function oA(e, t = 10) {
    let n = null;
    return Math.abs(e.y) > t ? n = "y" : Math.abs(e.x) > t && (n = "x"), n;
  }
  class sA extends Rn {
    constructor(t) {
      super(t), this.removeGroupControls = Re, this.removeListeners = Re, this.controls = new iA(t);
    }
    mount() {
      const { dragControls: t } = this.node.getProps();
      t && (this.removeGroupControls = t.subscribe(this.controls)), this.removeListeners = this.controls.addListeners() || Re;
    }
    unmount() {
      this.removeGroupControls(), this.removeListeners();
    }
  }
  const yp = (e) => (t, n) => {
    e && e(t, n);
  };
  class aA extends Rn {
    constructor() {
      super(...arguments), this.removePointerDownListener = Re;
    }
    onPointerDown(t) {
      this.session = new Xv(t, this.createPanHandlers(), {
        transformPagePoint: this.node.getTransformPagePoint(),
        contextWindow: n0(this.node)
      });
    }
    createPanHandlers() {
      const { onPanSessionStart: t, onPanStart: n, onPan: r, onPanEnd: i } = this.node.getProps();
      return {
        onSessionStart: yp(t),
        onStart: yp(n),
        onMove: r,
        onEnd: (o, s) => {
          delete this.session, i && i(o, s);
        }
      };
    }
    mount() {
      this.removePointerDownListener = Ut(this.node.current, "pointerdown", (t) => this.onPointerDown(t));
    }
    update() {
      this.session && this.session.updateHandlers(this.createPanHandlers());
    }
    unmount() {
      this.removePointerDownListener(), this.session && this.session.end();
    }
  }
  function lA() {
    const e = x.useContext(ya);
    if (e === null)
      return [!0, null];
    const { isPresent: t, onExitComplete: n, register: r } = e, i = x.useId();
    return x.useEffect(() => r(i), []), !t && n ? [!1, () => n && n(i)] : [!0];
  }
  const Zo = {
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
  function gp(e, t) {
    return t.max === t.min ? 0 : e / (t.max - t.min) * 100;
  }
  const ai = {
    correct: (e, t) => {
      if (!t.target)
        return e;
      if (typeof e == "string")
        if (V.test(e))
          e = parseFloat(e);
        else
          return e;
      const n = gp(e, t.target.x), r = gp(e, t.target.y);
      return `${n}% ${r}%`;
    }
  }, uA = {
    correct: (e, { treeScale: t, projectionDelta: n }) => {
      const r = e, i = _n.parse(e);
      if (i.length > 5)
        return r;
      const o = _n.createTransformer(e), s = typeof i[0] != "number" ? 1 : 0, a = n.x.scale * t.x, l = n.y.scale * t.y;
      i[0 + s] /= a, i[1 + s] /= l;
      const u = ie(a, l, 0.5);
      return typeof i[2 + s] == "number" && (i[2 + s] /= u), typeof i[3 + s] == "number" && (i[3 + s] /= u), o(i);
    }
  };
  class cA extends x.Component {
    /**
     * This only mounts projection nodes for components that
     * need measuring, we might want to do it for all components
     * in order to incorporate transforms
     */
    componentDidMount() {
      const { visualElement: t, layoutGroup: n, switchLayoutGroup: r, layoutId: i } = this.props, { projection: o } = t;
      lk(fA), o && (n.group && n.group.add(o), r && r.register && i && r.register(o), o.root.didUpdate(), o.addEventListener("animationComplete", () => {
        this.safeToRemove();
      }), o.setOptions({
        ...o.options,
        onExitComplete: () => this.safeToRemove()
      })), Zo.hasEverUpdated = !0;
    }
    getSnapshotBeforeUpdate(t) {
      const { layoutDependency: n, visualElement: r, drag: i, isPresent: o } = this.props, s = r.projection;
      return s && (s.isPresent = o, i || t.layoutDependency !== n || n === void 0 ? s.willUpdate() : this.safeToRemove(), t.isPresent !== o && (o ? s.promote() : s.relegate() || Se.postRender(() => {
        const a = s.getStack();
        (!a || !a.members.length) && this.safeToRemove();
      }))), null;
    }
    componentDidUpdate() {
      const { projection: t } = this.props.visualElement;
      t && (t.root.didUpdate(), nf.postRender(() => {
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
  function r0(e) {
    const [t, n] = lA(), r = x.useContext(sf);
    return O.jsx(cA, { ...e, layoutGroup: r, switchLayoutGroup: x.useContext(Jg), isPresent: t, safeToRemove: n });
  }
  const fA = {
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
    boxShadow: uA
  }, i0 = ["TopLeft", "TopRight", "BottomLeft", "BottomRight"], dA = i0.length, vp = (e) => typeof e == "string" ? parseFloat(e) : e, Sp = (e) => typeof e == "number" || V.test(e);
  function hA(e, t, n, r, i, o) {
    i ? (e.opacity = ie(
      0,
      // TODO Reinstate this if only child
      n.opacity !== void 0 ? n.opacity : 1,
      pA(r)
    ), e.opacityExit = ie(t.opacity !== void 0 ? t.opacity : 1, 0, mA(r))) : o && (e.opacity = ie(t.opacity !== void 0 ? t.opacity : 1, n.opacity !== void 0 ? n.opacity : 1, r));
    for (let s = 0; s < dA; s++) {
      const a = `border${i0[s]}Radius`;
      let l = xp(t, a), u = xp(n, a);
      if (l === void 0 && u === void 0)
        continue;
      l || (l = 0), u || (u = 0), l === 0 || u === 0 || Sp(l) === Sp(u) ? (e[a] = Math.max(ie(vp(l), vp(u), r), 0), (jt.test(u) || jt.test(l)) && (e[a] += "%")) : e[a] = u;
    }
    (t.rotate || n.rotate) && (e.rotate = ie(t.rotate || 0, n.rotate || 0, r));
  }
  function xp(e, t) {
    return e[t] !== void 0 ? e[t] : e.borderRadius;
  }
  const pA = o0(0, 0.5, Uv), mA = o0(0.5, 0.95, Re);
  function o0(e, t, n) {
    return (r) => r < e ? 0 : r > t ? 1 : n(Xi(e, t, r));
  }
  function wp(e, t) {
    e.min = t.min, e.max = t.max;
  }
  function it(e, t) {
    wp(e.x, t.x), wp(e.y, t.y);
  }
  function Tp(e, t, n, r, i) {
    return e -= t, e = Fs(e, 1 / n, r), i !== void 0 && (e = Fs(e, 1 / i, r)), e;
  }
  function yA(e, t = 0, n = 1, r = 0.5, i, o = e, s = e) {
    if (jt.test(t) && (t = parseFloat(t), t = ie(s.min, s.max, t / 100) - s.min), typeof t != "number")
      return;
    let a = ie(o.min, o.max, r);
    e === o && (a -= t), e.min = Tp(e.min, t, n, a, i), e.max = Tp(e.max, t, n, a, i);
  }
  function Ep(e, t, [n, r, i], o, s) {
    yA(e, t[n], t[r], t[i], t.scale, o, s);
  }
  const gA = ["x", "scaleX", "originX"], vA = ["y", "scaleY", "originY"];
  function Pp(e, t, n, r) {
    Ep(e.x, t, gA, n ? n.x : void 0, r ? r.x : void 0), Ep(e.y, t, vA, n ? n.y : void 0, r ? r.y : void 0);
  }
  function Cp(e) {
    return e.translate === 0 && e.scale === 1;
  }
  function s0(e) {
    return Cp(e.x) && Cp(e.y);
  }
  function SA(e, t) {
    return e.x.min === t.x.min && e.x.max === t.x.max && e.y.min === t.y.min && e.y.max === t.y.max;
  }
  function a0(e, t) {
    return Math.round(e.x.min) === Math.round(t.x.min) && Math.round(e.x.max) === Math.round(t.x.max) && Math.round(e.y.min) === Math.round(t.y.min) && Math.round(e.y.max) === Math.round(t.y.max);
  }
  function kp(e) {
    return Ze(e.x) / Ze(e.y);
  }
  class xA {
    constructor() {
      this.members = [];
    }
    add(t) {
      kf(this.members, t), t.scheduleRender();
    }
    remove(t) {
      if (_f(this.members, t), t === this.prevLead && (this.prevLead = void 0), t === this.lead) {
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
  function _p(e, t, n) {
    let r = "";
    const i = e.x.translate / t.x, o = e.y.translate / t.y, s = (n == null ? void 0 : n.z) || 0;
    if ((i || o || s) && (r = `translate3d(${i}px, ${o}px, ${s}px) `), (t.x !== 1 || t.y !== 1) && (r += `scale(${1 / t.x}, ${1 / t.y}) `), n) {
      const { transformPerspective: u, rotate: c, rotateX: f, rotateY: d, skewX: y, skewY: g } = n;
      u && (r = `perspective(${u}px) ${r}`), c && (r += `rotate(${c}deg) `), f && (r += `rotateX(${f}deg) `), d && (r += `rotateY(${d}deg) `), y && (r += `skewX(${y}deg) `), g && (r += `skewY(${g}deg) `);
    }
    const a = e.x.scale * t.x, l = e.y.scale * t.y;
    return (a !== 1 || l !== 1) && (r += `scale(${a}, ${l})`), r || "none";
  }
  const wA = (e, t) => e.depth - t.depth;
  class TA {
    constructor() {
      this.children = [], this.isDirty = !1;
    }
    add(t) {
      kf(this.children, t), this.isDirty = !0;
    }
    remove(t) {
      _f(this.children, t), this.isDirty = !0;
    }
    forEach(t) {
      this.isDirty && this.children.sort(wA), this.isDirty = !1, this.children.forEach(t);
    }
  }
  function EA(e, t) {
    const n = wn.now(), r = ({ timestamp: i }) => {
      const o = i - n;
      o >= t && (kn(r), e(o - t));
    };
    return Se.read(r, !0), () => kn(r);
  }
  function PA(e) {
    window.MotionDebug && window.MotionDebug.record(e);
  }
  function CA(e) {
    return e instanceof SVGElement && e.tagName !== "svg";
  }
  function kA(e, t, n) {
    const r = Fe(e) ? e : Zi(e);
    return r.start(Cf("", r, t, n)), r.animation;
  }
  const yl = ["", "X", "Y", "Z"], _A = { visibility: "hidden" }, Ap = 1e3;
  let AA = 0;
  const $n = {
    type: "projectionFrame",
    totalNodes: 0,
    resolvedTargetDeltas: 0,
    recalculatedProjection: 0
  };
  function gl(e, t, n, r) {
    const { latestValues: i } = t;
    i[e] && (n[e] = i[e], t.setStaticValue(e, 0), r && (r[e] = 0));
  }
  function l0({ attachResizeListener: e, defaultParent: t, measureScroll: n, checkIsScrollRoot: r, resetTransform: i }) {
    return class {
      constructor(s = {}, a = t == null ? void 0 : t()) {
        this.id = AA++, this.animationId = 0, this.children = /* @__PURE__ */ new Set(), this.options = {}, this.isTreeAnimating = !1, this.isAnimationBlocked = !1, this.isLayoutDirty = !1, this.isProjectionDirty = !1, this.isSharedProjectionDirty = !1, this.isTransformDirty = !1, this.updateManuallyBlocked = !1, this.updateBlockedByResize = !1, this.isUpdating = !1, this.isSVG = !1, this.needsReset = !1, this.shouldResetTransform = !1, this.treeScale = { x: 1, y: 1 }, this.eventHandlers = /* @__PURE__ */ new Map(), this.hasTreeAnimated = !1, this.updateScheduled = !1, this.projectionUpdateScheduled = !1, this.checkUpdateFailed = () => {
          this.isUpdating && (this.isUpdating = !1, this.clearAllSnapshots());
        }, this.updateProjection = () => {
          this.projectionUpdateScheduled = !1, $n.totalNodes = $n.resolvedTargetDeltas = $n.recalculatedProjection = 0, this.nodes.forEach(FA), this.nodes.forEach(bA), this.nodes.forEach(LA), this.nodes.forEach(RA), PA($n);
        }, this.hasProjected = !1, this.isVisible = !0, this.animationProgress = 0, this.sharedNodes = /* @__PURE__ */ new Map(), this.latestValues = s, this.root = a ? a.root || a : this, this.path = a ? [...a.path, a] : [], this.parent = a, this.depth = a ? a.depth + 1 : 0;
        for (let l = 0; l < this.path.length; l++)
          this.path[l].shouldResetTransform = !0;
        this.root === this && (this.nodes = new TA());
      }
      addEventListener(s, a) {
        return this.eventHandlers.has(s) || this.eventHandlers.set(s, new Af()), this.eventHandlers.get(s).add(a);
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
        this.isSVG = CA(s), this.instance = s;
        const { layoutId: l, layout: u, visualElement: c } = this.options;
        if (c && !c.current && c.mount(s), this.root.nodes.add(this), this.parent && this.parent.children.add(this), a && (u || l) && (this.isLayoutDirty = !0), e) {
          let f;
          const d = () => this.root.updateBlockedByResize = !1;
          e(s, () => {
            this.root.updateBlockedByResize = !0, f && f(), f = EA(d, 250), Zo.hasAnimatedSinceResize && (Zo.hasAnimatedSinceResize = !1, this.nodes.forEach(jp));
          });
        }
        l && this.root.registerSharedNode(l, this), this.options.animate !== !1 && c && (l || u) && this.addEventListener("didUpdate", ({ delta: f, hasLayoutChanged: d, hasRelativeTargetChanged: y, layout: g }) => {
          if (this.isTreeAnimationBlocked()) {
            this.target = void 0, this.relativeTarget = void 0;
            return;
          }
          const v = this.options.transition || c.getDefaultTransition() || UA, { onLayoutAnimationStart: T, onLayoutAnimationComplete: p } = c.getProps(), h = !this.targetLayout || !a0(this.targetLayout, g) || y, m = !d && y;
          if (this.options.layoutRoot || this.resumeFrom && this.resumeFrom.instance || m || d && (h || !this.currentAnimation)) {
            this.resumeFrom && (this.resumingFrom = this.resumeFrom, this.resumingFrom.resumingFrom = void 0), this.setAnimationOrigin(f, m);
            const S = {
              ...yf(v, "layout"),
              onPlay: T,
              onComplete: p
            };
            (c.shouldReduceMotion || this.options.layoutRoot) && (S.delay = 0, S.type = !1), this.startAnimation(S);
          } else
            d || jp(this), this.isLead() && this.options.onExitComplete && this.options.onExitComplete();
          this.targetLayout = g;
        });
      }
      unmount() {
        this.options.layoutId && this.willUpdate(), this.root.nodes.remove(this);
        const s = this.getStack();
        s && s.remove(this), this.parent && this.parent.children.delete(this), this.instance = void 0, kn(this.updateProjection);
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
        this.isUpdateBlocked() || (this.isUpdating = !0, this.nodes && this.nodes.forEach(VA), this.animationId++);
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
          this.unblockUpdate(), this.clearAllSnapshots(), this.nodes.forEach(Op);
          return;
        }
        this.isUpdating || this.nodes.forEach(MA), this.isUpdating = !1, window.HandoffCancelAllAnimations && window.HandoffCancelAllAnimations(), this.nodes.forEach(NA), this.nodes.forEach(OA), this.nodes.forEach(jA), this.clearAllSnapshots();
        const a = wn.now();
        Te.delta = Cn(0, 1e3 / 60, a - Te.timestamp), Te.timestamp = a, Te.isProcessing = !0, sl.update.process(Te), sl.preRender.process(Te), sl.render.process(Te), Te.isProcessing = !1;
      }
      didUpdate() {
        this.updateScheduled || (this.updateScheduled = !0, nf.read(() => this.update()));
      }
      clearAllSnapshots() {
        this.nodes.forEach(DA), this.sharedNodes.forEach($A);
      }
      scheduleUpdateProjection() {
        this.projectionUpdateScheduled || (this.projectionUpdateScheduled = !0, Se.preRender(this.updateProjection, !1, !0));
      }
      scheduleCheckAfterUnmount() {
        Se.postRender(() => {
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
        this.layout = this.measure(!1), this.layoutCorrected = ue(), this.isLayoutDirty = !1, this.projectionDelta = void 0, this.notifyListeners("measure", this.layout.layoutBox);
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
        const s = this.isLayoutDirty || this.shouldResetTransform, a = this.projectionDelta && !s0(this.projectionDelta), l = this.getTransformTemplate(), u = l ? l(this.latestValues, "") : void 0, c = u !== this.prevTransformTemplateValue;
        s && (a || Vn(this.latestValues) || c) && (i(this.instance, u), this.shouldResetTransform = !1, this.scheduleRender());
      }
      measure(s = !0) {
        const a = this.measurePageBox();
        let l = this.removeElementScroll(a);
        return s && (l = this.removeTransform(l)), BA(l), {
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
          return ue();
        const a = s.measureViewportBox(), { scroll: l } = this.root;
        return l && (on(a.x, l.offset.x), on(a.y, l.offset.y)), a;
      }
      removeElementScroll(s) {
        const a = ue();
        it(a, s);
        for (let l = 0; l < this.path.length; l++) {
          const u = this.path[l], { scroll: c, options: f } = u;
          if (u !== this.root && c && f.layoutScroll) {
            if (c.isRoot) {
              it(a, s);
              const { scroll: d } = this.root;
              d && (on(a.x, -d.offset.x), on(a.y, -d.offset.y));
            }
            on(a.x, c.offset.x), on(a.y, c.offset.y);
          }
        }
        return a;
      }
      applyTransform(s, a = !1) {
        const l = ue();
        it(l, s);
        for (let u = 0; u < this.path.length; u++) {
          const c = this.path[u];
          !a && c.options.layoutScroll && c.scroll && c !== c.root && jr(l, {
            x: -c.scroll.offset.x,
            y: -c.scroll.offset.y
          }), Vn(c.latestValues) && jr(l, c.latestValues);
        }
        return Vn(this.latestValues) && jr(l, this.latestValues), l;
      }
      removeTransform(s) {
        const a = ue();
        it(a, s);
        for (let l = 0; l < this.path.length; l++) {
          const u = this.path[l];
          if (!u.instance || !Vn(u.latestValues))
            continue;
          Nu(u.latestValues) && u.updateSnapshot();
          const c = ue(), f = u.measurePageBox();
          it(c, f), Pp(a, u.latestValues, u.snapshot ? u.snapshot.layoutBox : void 0, c);
        }
        return Vn(this.latestValues) && Pp(a, this.latestValues), a;
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
            const y = this.getClosestProjectingParent();
            y && y.layout && this.animationProgress !== 1 ? (this.relativeParent = y, this.forceRelativeParentToResolveTarget(), this.relativeTarget = ue(), this.relativeTargetOrigin = ue(), _i(this.relativeTargetOrigin, this.layout.layoutBox, y.layout.layoutBox), it(this.relativeTarget, this.relativeTargetOrigin)) : this.relativeParent = this.relativeTarget = void 0;
          }
          if (!(!this.relativeTarget && !this.targetDelta)) {
            if (this.target || (this.target = ue(), this.targetWithTransforms = ue()), this.relativeTarget && this.relativeTargetOrigin && this.relativeParent && this.relativeParent.target ? (this.forceRelativeParentToResolveTarget(), H2(this.target, this.relativeTarget, this.relativeParent.target)) : this.targetDelta ? (this.resumingFrom ? this.target = this.applyTransform(this.layout.layoutBox) : it(this.target, this.layout.layoutBox), e0(this.target, this.targetDelta)) : it(this.target, this.layout.layoutBox), this.attemptToResolveRelativeTarget) {
              this.attemptToResolveRelativeTarget = !1;
              const y = this.getClosestProjectingParent();
              y && !!y.resumingFrom == !!this.resumingFrom && !y.options.layoutScroll && y.target && this.animationProgress !== 1 ? (this.relativeParent = y, this.forceRelativeParentToResolveTarget(), this.relativeTarget = ue(), this.relativeTargetOrigin = ue(), _i(this.relativeTargetOrigin, this.target, y.target), it(this.relativeTarget, this.relativeTargetOrigin)) : this.relativeParent = this.relativeTarget = void 0;
            }
            $n.resolvedTargetDeltas++;
          }
        }
      }
      getClosestProjectingParent() {
        if (!(!this.parent || Nu(this.parent.latestValues) || Jv(this.parent.latestValues)))
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
        it(this.layoutCorrected, this.layout.layoutBox);
        const d = this.treeScale.x, y = this.treeScale.y;
        J2(this.layoutCorrected, this.treeScale, this.path, l), a.layout && !a.target && (this.treeScale.x !== 1 || this.treeScale.y !== 1) && (a.target = a.layout.layoutBox, a.targetWithTransforms = ue());
        const { target: g } = a;
        if (!g) {
          this.projectionTransform && (this.projectionDelta = Or(), this.projectionTransform = "none", this.scheduleRender());
          return;
        }
        this.projectionDelta || (this.projectionDelta = Or(), this.projectionDeltaWithTransform = Or());
        const v = this.projectionTransform;
        ki(this.projectionDelta, this.layoutCorrected, g, this.latestValues), this.projectionTransform = _p(this.projectionDelta, this.treeScale), (this.projectionTransform !== v || this.treeScale.x !== d || this.treeScale.y !== y) && (this.hasProjected = !0, this.scheduleRender(), this.notifyListeners("projectionUpdate", g)), $n.recalculatedProjection++;
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
        const l = this.snapshot, u = l ? l.latestValues : {}, c = { ...this.latestValues }, f = Or();
        (!this.relativeParent || !this.relativeParent.options.layoutRoot) && (this.relativeTarget = this.relativeTargetOrigin = void 0), this.attemptToResolveRelativeTarget = !a;
        const d = ue(), y = l ? l.source : void 0, g = this.layout ? this.layout.source : void 0, v = y !== g, T = this.getStack(), p = !T || T.members.length <= 1, h = !!(v && !p && this.options.crossfade === !0 && !this.path.some(zA));
        this.animationProgress = 0;
        let m;
        this.mixTargetDelta = (S) => {
          const C = S / 1e3;
          Fp(f.x, s.x, C), Fp(f.y, s.y, C), this.setTargetDelta(f), this.relativeTarget && this.relativeTargetOrigin && this.layout && this.relativeParent && this.relativeParent.layout && (_i(d, this.layout.layoutBox, this.relativeParent.layout.layoutBox), IA(this.relativeTarget, this.relativeTargetOrigin, d, C), m && SA(this.relativeTarget, m) && (this.isProjectionDirty = !1), m || (m = ue()), it(m, this.relativeTarget)), v && (this.animationValues = c, hA(c, u, this.latestValues, C, h, p)), this.root.scheduleUpdateProjection(), this.scheduleRender(), this.animationProgress = C;
        }, this.mixTargetDelta(this.options.layoutRoot ? 1e3 : 0);
      }
      startAnimation(s) {
        this.notifyListeners("animationStart"), this.currentAnimation && this.currentAnimation.stop(), this.resumingFrom && this.resumingFrom.currentAnimation && this.resumingFrom.currentAnimation.stop(), this.pendingAnimation && (kn(this.pendingAnimation), this.pendingAnimation = void 0), this.pendingAnimation = Se.update(() => {
          Zo.hasAnimatedSinceResize = !0, this.currentAnimation = kA(0, Ap, {
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
        this.currentAnimation && (this.mixTargetDelta && this.mixTargetDelta(Ap), this.currentAnimation.stop()), this.completeAnimation();
      }
      applyTransformsToTarget() {
        const s = this.getLead();
        let { targetWithTransforms: a, target: l, layout: u, latestValues: c } = s;
        if (!(!a || !l || !u)) {
          if (this !== s && this.layout && u && u0(this.options.animationType, this.layout.layoutBox, u.layoutBox)) {
            l = this.target || ue();
            const f = Ze(this.layout.layoutBox.x);
            l.x.min = s.target.x.min, l.x.max = l.x.min + f;
            const d = Ze(this.layout.layoutBox.y);
            l.y.min = s.target.y.min, l.y.max = l.y.min + d;
          }
          it(a, l), jr(a, c), ki(this.projectionDeltaWithTransform, this.layoutCorrected, a, c);
        }
      }
      registerSharedNode(s, a) {
        this.sharedNodes.has(s) || this.sharedNodes.set(s, new xA()), this.sharedNodes.get(s).add(a);
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
      resetSkewAndRotation() {
        const { visualElement: s } = this.options;
        if (!s)
          return;
        let a = !1;
        const { latestValues: l } = s;
        if ((l.z || l.rotate || l.rotateX || l.rotateY || l.rotateZ || l.skewX || l.skewY) && (a = !0), !a)
          return;
        const u = {};
        l.z && gl("z", s, u, this.animationValues);
        for (let c = 0; c < yl.length; c++)
          gl(`rotate${yl[c]}`, s, u, this.animationValues), gl(`skew${yl[c]}`, s, u, this.animationValues);
        s.render();
        for (const c in u)
          s.setStaticValue(c, u[c]), this.animationValues && (this.animationValues[c] = u[c]);
        s.scheduleRender();
      }
      getProjectionStyles(s) {
        var a, l;
        if (!this.instance || this.isSVG)
          return;
        if (!this.isVisible)
          return _A;
        const u = {
          visibility: ""
        }, c = this.getTransformTemplate();
        if (this.needsReset)
          return this.needsReset = !1, u.opacity = "", u.pointerEvents = Qo(s == null ? void 0 : s.pointerEvents) || "", u.transform = c ? c(this.latestValues, "") : "none", u;
        const f = this.getLead();
        if (!this.projectionDelta || !this.layout || !f.target) {
          const v = {};
          return this.options.layoutId && (v.opacity = this.latestValues.opacity !== void 0 ? this.latestValues.opacity : 1, v.pointerEvents = Qo(s == null ? void 0 : s.pointerEvents) || ""), this.hasProjected && !Vn(this.latestValues) && (v.transform = c ? c({}, "") : "none", this.hasProjected = !1), v;
        }
        const d = f.animationValues || f.latestValues;
        this.applyTransformsToTarget(), u.transform = _p(this.projectionDeltaWithTransform, this.treeScale, d), c && (u.transform = c(d, u.transform));
        const { x: y, y: g } = this.projectionDelta;
        u.transformOrigin = `${y.origin * 100}% ${g.origin * 100}% 0`, f.animationValues ? u.opacity = f === this ? (l = (a = d.opacity) !== null && a !== void 0 ? a : this.latestValues.opacity) !== null && l !== void 0 ? l : 1 : this.preserveOpacity ? this.latestValues.opacity : d.opacityExit : u.opacity = f === this ? d.opacity !== void 0 ? d.opacity : "" : d.opacityExit !== void 0 ? d.opacityExit : 0;
        for (const v in Cs) {
          if (d[v] === void 0)
            continue;
          const { correct: T, applyTo: p } = Cs[v], h = u.transform === "none" ? d[v] : T(d[v], f);
          if (p) {
            const m = p.length;
            for (let S = 0; S < m; S++)
              u[p[S]] = h;
          } else
            u[v] = h;
        }
        return this.options.layoutId && (u.pointerEvents = f === this ? Qo(s == null ? void 0 : s.pointerEvents) || "" : "none"), u;
      }
      clearSnapshot() {
        this.resumeFrom = this.snapshot = void 0;
      }
      // Only run on root
      resetTree() {
        this.root.nodes.forEach((s) => {
          var a;
          return (a = s.currentAnimation) === null || a === void 0 ? void 0 : a.stop();
        }), this.root.nodes.forEach(Op), this.root.sharedNodes.clear();
      }
    };
  }
  function OA(e) {
    e.updateLayout();
  }
  function jA(e) {
    var t;
    const n = ((t = e.resumeFrom) === null || t === void 0 ? void 0 : t.snapshot) || e.snapshot;
    if (e.isLead() && e.layout && n && e.hasListeners("didUpdate")) {
      const { layoutBox: r, measuredBox: i } = e.layout, { animationType: o } = e.options, s = n.source !== e.layout.source;
      o === "size" ? ot((f) => {
        const d = s ? n.measuredBox[f] : n.layoutBox[f], y = Ze(d);
        d.min = r[f].min, d.max = d.min + y;
      }) : u0(o, n.layoutBox, r) && ot((f) => {
        const d = s ? n.measuredBox[f] : n.layoutBox[f], y = Ze(r[f]);
        d.max = d.min + y, e.relativeTarget && !e.currentAnimation && (e.isProjectionDirty = !0, e.relativeTarget[f].max = e.relativeTarget[f].min + y);
      });
      const a = Or();
      ki(a, r, n.layoutBox);
      const l = Or();
      s ? ki(l, e.applyTransform(i, !0), n.measuredBox) : ki(l, r, n.layoutBox);
      const u = !s0(a);
      let c = !1;
      if (!e.resumeFrom) {
        const f = e.getClosestProjectingParent();
        if (f && !f.resumeFrom) {
          const { snapshot: d, layout: y } = f;
          if (d && y) {
            const g = ue();
            _i(g, n.layoutBox, d.layoutBox);
            const v = ue();
            _i(v, r, y.layoutBox), a0(g, v) || (c = !0), f.options.layoutRoot && (e.relativeTarget = v, e.relativeTargetOrigin = g, e.relativeParent = f);
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
  function FA(e) {
    $n.totalNodes++, e.parent && (e.isProjecting() || (e.isProjectionDirty = e.parent.isProjectionDirty), e.isSharedProjectionDirty || (e.isSharedProjectionDirty = !!(e.isProjectionDirty || e.parent.isProjectionDirty || e.parent.isSharedProjectionDirty)), e.isTransformDirty || (e.isTransformDirty = e.parent.isTransformDirty));
  }
  function RA(e) {
    e.isProjectionDirty = e.isSharedProjectionDirty = e.isTransformDirty = !1;
  }
  function DA(e) {
    e.clearSnapshot();
  }
  function Op(e) {
    e.clearMeasurements();
  }
  function MA(e) {
    e.isLayoutDirty = !1;
  }
  function NA(e) {
    const { visualElement: t } = e.options;
    t && t.getProps().onBeforeLayoutMeasure && t.notify("BeforeLayoutMeasure"), e.resetTransform();
  }
  function jp(e) {
    e.finishAnimation(), e.targetDelta = e.relativeTarget = e.target = void 0, e.isProjectionDirty = !0;
  }
  function bA(e) {
    e.resolveTargetDelta();
  }
  function LA(e) {
    e.calcProjection();
  }
  function VA(e) {
    e.resetSkewAndRotation();
  }
  function $A(e) {
    e.removeLeadSnapshot();
  }
  function Fp(e, t, n) {
    e.translate = ie(t.translate, 0, n), e.scale = ie(t.scale, 1, n), e.origin = t.origin, e.originPoint = t.originPoint;
  }
  function Rp(e, t, n, r) {
    e.min = ie(t.min, n.min, r), e.max = ie(t.max, n.max, r);
  }
  function IA(e, t, n, r) {
    Rp(e.x, t.x, n.x, r), Rp(e.y, t.y, n.y, r);
  }
  function zA(e) {
    return e.animationValues && e.animationValues.opacityExit !== void 0;
  }
  const UA = {
    duration: 0.45,
    ease: [0.4, 0, 0.1, 1]
  }, Dp = (e) => typeof navigator < "u" && navigator.userAgent && navigator.userAgent.toLowerCase().includes(e), Mp = Dp("applewebkit/") && !Dp("chrome/") ? Math.round : Re;
  function Np(e) {
    e.min = Mp(e.min), e.max = Mp(e.max);
  }
  function BA(e) {
    Np(e.x), Np(e.y);
  }
  function u0(e, t, n) {
    return e === "position" || e === "preserve-aspect" && !Du(kp(t), kp(n), 0.2);
  }
  const HA = l0({
    attachResizeListener: (e, t) => It(e, "resize", t),
    measureScroll: () => ({
      x: document.documentElement.scrollLeft || document.body.scrollLeft,
      y: document.documentElement.scrollTop || document.body.scrollTop
    }),
    checkIsScrollRoot: () => !0
  }), vl = {
    current: void 0
  }, c0 = l0({
    measureScroll: (e) => ({
      x: e.scrollLeft,
      y: e.scrollTop
    }),
    defaultParent: () => {
      if (!vl.current) {
        const e = new HA({});
        e.mount(window), e.setOptions({ layoutScroll: !0 }), vl.current = e;
      }
      return vl.current;
    },
    resetTransform: (e, t) => {
      e.style.transform = t !== void 0 ? t : "none";
    },
    checkIsScrollRoot: (e) => window.getComputedStyle(e).position === "fixed"
  }), WA = {
    pan: {
      Feature: aA
    },
    drag: {
      Feature: sA,
      ProjectionNode: c0,
      MeasureLayout: r0
    }
  }, Lu = { current: null }, f0 = { current: !1 };
  function KA() {
    if (f0.current = !0, !!Jc)
      if (window.matchMedia) {
        const e = window.matchMedia("(prefers-reduced-motion)"), t = () => Lu.current = e.matches;
        e.addListener(t), t();
      } else
        Lu.current = !1;
  }
  function GA(e, t, n) {
    const { willChange: r } = t;
    for (const i in t) {
      const o = t[i], s = n[i];
      if (Fe(o))
        e.addValue(i, o), js(r) && r.add(i);
      else if (Fe(s))
        e.addValue(i, Zi(o, { owner: e })), js(r) && r.remove(i);
      else if (s !== o)
        if (e.hasValue(i)) {
          const a = e.getValue(i);
          a.liveStyle === !0 ? a.jump(o) : a.hasAnimated || a.set(o);
        } else {
          const a = e.getStaticValue(i);
          e.addValue(i, Zi(a !== void 0 ? a : o, { owner: e }));
        }
    }
    for (const i in n)
      t[i] === void 0 && e.removeValue(i);
    return t;
  }
  const bp = /* @__PURE__ */ new WeakMap(), YA = [...Pv, Oe, _n], QA = (e) => YA.find(Ev(e)), d0 = Object.keys(Qi), XA = d0.length, Lp = [
    "AnimationStart",
    "AnimationComplete",
    "Update",
    "BeforeLayoutMeasure",
    "LayoutMeasure",
    "LayoutAnimationStart",
    "LayoutAnimationComplete"
  ], ZA = of.length;
  function h0(e) {
    if (e)
      return e.options.allowProjection !== !1 ? e.projection : h0(e.parent);
  }
  class qA {
    /**
     * This method takes React props and returns found MotionValues. For example, HTML
     * MotionValues will be found within the style prop, whereas for Three.js within attribute arrays.
     *
     * This isn't an abstract method as it needs calling in the constructor, but it is
     * intended to be one.
     */
    scrapeMotionValuesFromProps(t, n, r) {
      return {};
    }
    constructor({ parent: t, props: n, presenceContext: r, reducedMotionConfig: i, blockInitialAnimation: o, visualState: s }, a = {}) {
      this.resolveKeyframes = (d, y, g, v) => new this.KeyframeResolver(d, y, g, v, this), this.current = null, this.children = /* @__PURE__ */ new Set(), this.isVariantNode = !1, this.isControllingVariants = !1, this.shouldReduceMotion = null, this.values = /* @__PURE__ */ new Map(), this.KeyframeResolver = gf, this.features = {}, this.valueSubscriptions = /* @__PURE__ */ new Map(), this.prevMotionValues = {}, this.events = {}, this.propEventSubscriptions = {}, this.notifyUpdate = () => this.notify("Update", this.latestValues), this.render = () => {
        this.current && (this.triggerBuild(), this.renderInstance(this.current, this.renderState, this.props.style, this.projection));
      }, this.scheduleRender = () => Se.render(this.render, !1, !0);
      const { latestValues: l, renderState: u } = s;
      this.latestValues = l, this.baseTarget = { ...l }, this.initialValues = n.initial ? { ...l } : {}, this.renderState = u, this.parent = t, this.props = n, this.presenceContext = r, this.depth = t ? t.depth + 1 : 0, this.reducedMotionConfig = i, this.options = a, this.blockInitialAnimation = !!o, this.isControllingVariants = va(n), this.isVariantNode = qg(n), this.isVariantNode && (this.variantChildren = /* @__PURE__ */ new Set()), this.manuallyAnimateOnMount = !!(t && t.current);
      const { willChange: c, ...f } = this.scrapeMotionValuesFromProps(n, {}, this);
      for (const d in f) {
        const y = f[d];
        l[d] !== void 0 && Fe(y) && (y.set(l[d], !1), js(c) && c.add(d));
      }
    }
    mount(t) {
      this.current = t, bp.set(t, this), this.projection && !this.projection.instance && this.projection.mount(t), this.parent && this.isVariantNode && !this.isControllingVariants && (this.removeFromVariantTree = this.parent.addVariantChild(this)), this.values.forEach((n, r) => this.bindToMotionValue(r, n)), f0.current || KA(), this.shouldReduceMotion = this.reducedMotionConfig === "never" ? !1 : this.reducedMotionConfig === "always" ? !0 : Lu.current, this.parent && this.parent.children.add(this), this.update(this.props, this.presenceContext);
    }
    unmount() {
      var t;
      bp.delete(this.current), this.projection && this.projection.unmount(), kn(this.notifyUpdate), kn(this.render), this.valueSubscriptions.forEach((n) => n()), this.removeFromVariantTree && this.removeFromVariantTree(), this.parent && this.parent.children.delete(this);
      for (const n in this.events)
        this.events[n].clear();
      for (const n in this.features)
        (t = this.features[n]) === null || t === void 0 || t.unmount();
      this.current = null;
    }
    bindToMotionValue(t, n) {
      const r = fr.has(t), i = n.on("change", (s) => {
        this.latestValues[t] = s, this.props.onUpdate && Se.preRender(this.notifyUpdate), r && this.projection && (this.projection.isTransformDirty = !0);
      }), o = n.on("renderRequest", this.scheduleRender);
      this.valueSubscriptions.set(t, () => {
        i(), o(), n.owner && n.stop();
      });
    }
    sortNodePosition(t) {
      return !this.current || !this.sortInstanceNodePosition || this.type !== t.type ? 0 : this.sortInstanceNodePosition(this.current, t.current);
    }
    loadFeatures({ children: t, ...n }, r, i, o) {
      let s, a;
      for (let l = 0; l < XA; l++) {
        const u = d0[l], { isEnabled: c, Feature: f, ProjectionNode: d, MeasureLayout: y } = Qi[u];
        d && (s = d), c(n) && (!this.features[u] && f && (this.features[u] = new f(this)), y && (a = y));
      }
      if ((this.type === "html" || this.type === "svg") && !this.projection && s) {
        this.projection = new s(this.latestValues, h0(this.parent));
        const { layoutId: l, layout: u, drag: c, dragConstraints: f, layoutScroll: d, layoutRoot: y } = n;
        this.projection.setOptions({
          layoutId: l,
          layout: u,
          alwaysMeasureLayout: !!c || f && _r(f),
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
          layoutRoot: y
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
      return this.current ? this.measureInstanceViewportBox(this.current, this.props) : ue();
    }
    getStaticValue(t) {
      return this.latestValues[t];
    }
    setStaticValue(t, n) {
      this.latestValues[t] = n;
    }
    /**
     * Update the provided props. Ensure any newly-added motion values are
     * added to our map, old ones removed, and listeners updated.
     */
    update(t, n) {
      (t.transformTemplate || this.props.transformTemplate) && this.scheduleRender(), this.prevProps = this.props, this.props = t, this.prevPresenceContext = this.presenceContext, this.presenceContext = n;
      for (let r = 0; r < Lp.length; r++) {
        const i = Lp[r];
        this.propEventSubscriptions[i] && (this.propEventSubscriptions[i](), delete this.propEventSubscriptions[i]);
        const o = "on" + i, s = t[o];
        s && (this.propEventSubscriptions[i] = this.on(i, s));
      }
      this.prevMotionValues = GA(this, this.scrapeMotionValuesFromProps(t, this.prevProps, this), this.prevMotionValues), this.handleChildMotionValue && this.handleChildMotionValue();
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
        const i = of[r], o = this.props[i];
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
      const r = this.values.get(t);
      n !== r && (r && this.removeValue(t), this.bindToMotionValue(t, n), this.values.set(t, n), this.latestValues[t] = n.get());
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
      return r === void 0 && n !== void 0 && (r = Zi(n === null ? void 0 : n, { owner: this }), this.addValue(t, r)), r;
    }
    /**
     * If we're trying to animate to a previously unencountered value,
     * we need to check for it in our state and as a last resort read it
     * directly from the instance (which might have performance implications).
     */
    readValue(t, n) {
      var r;
      let i = this.latestValues[t] !== void 0 || !this.current ? this.latestValues[t] : (r = this.getBaseTargetFromProps(this.props, t)) !== null && r !== void 0 ? r : this.readValueFromInstance(this.current, t, this.options);
      return i != null && (typeof i == "string" && (wv(i) || Sv(i)) ? i = parseFloat(i) : !QA(i) && _n.test(n) && (i = Rv(t, n)), this.setBaseTarget(t, Fe(i) ? i.get() : i)), Fe(i) ? i.get() : i;
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
      const { initial: r } = this.props;
      let i;
      if (typeof r == "string" || typeof r == "object") {
        const s = mf(this.props, r, (n = this.presenceContext) === null || n === void 0 ? void 0 : n.custom);
        s && (i = s[t]);
      }
      if (r && i !== void 0)
        return i;
      const o = this.getBaseTargetFromProps(this.props, t);
      return o !== void 0 && !Fe(o) ? o : this.initialValues[t] !== void 0 && i === void 0 ? void 0 : this.baseTarget[t];
    }
    on(t, n) {
      return this.events[t] || (this.events[t] = new Af()), this.events[t].add(n);
    }
    notify(t, ...n) {
      this.events[t] && this.events[t].notify(...n);
    }
  }
  class p0 extends qA {
    constructor() {
      super(...arguments), this.KeyframeResolver = Dv;
    }
    sortInstanceNodePosition(t, n) {
      return t.compareDocumentPosition(n) & 2 ? 1 : -1;
    }
    getBaseTargetFromProps(t, n) {
      return t.style ? t.style[n] : void 0;
    }
    removeValueFromRenderState(t, { vars: n, style: r }) {
      delete n[t], delete r[t];
    }
  }
  function JA(e) {
    return window.getComputedStyle(e);
  }
  class eO extends p0 {
    constructor() {
      super(...arguments), this.type = "html";
    }
    readValueFromInstance(t, n) {
      if (fr.has(n)) {
        const r = Sf(n);
        return r && r.default || 0;
      } else {
        const r = JA(t), i = (nv(n) ? r.getPropertyValue(n) : r[n]) || 0;
        return typeof i == "string" ? i.trim() : i;
      }
    }
    measureInstanceViewportBox(t, { transformPagePoint: n }) {
      return t0(t, n);
    }
    build(t, n, r, i) {
      cf(t, n, r, i.transformTemplate);
    }
    scrapeMotionValuesFromProps(t, n, r) {
      return pf(t, n, r);
    }
    handleChildMotionValue() {
      this.childSubscription && (this.childSubscription(), delete this.childSubscription);
      const { children: t } = this.props;
      Fe(t) && (this.childSubscription = t.on("change", (n) => {
        this.current && (this.current.textContent = `${n}`);
      }));
    }
    renderInstance(t, n, r, i) {
      av(t, n, r, i);
    }
  }
  class tO extends p0 {
    constructor() {
      super(...arguments), this.type = "svg", this.isSVGTag = !1;
    }
    getBaseTargetFromProps(t, n) {
      return t[n];
    }
    readValueFromInstance(t, n) {
      if (fr.has(n)) {
        const r = Sf(n);
        return r && r.default || 0;
      }
      return n = lv.has(n) ? n : tf(n), t.getAttribute(n);
    }
    measureInstanceViewportBox() {
      return ue();
    }
    scrapeMotionValuesFromProps(t, n, r) {
      return cv(t, n, r);
    }
    build(t, n, r, i) {
      df(t, n, r, this.isSVGTag, i.transformTemplate);
    }
    renderInstance(t, n, r, i) {
      uv(t, n, r, i);
    }
    mount(t) {
      this.isSVGTag = hf(t.tagName), super.mount(t);
    }
  }
  const nO = (e, t) => af(e) ? new tO(t, { enableHardwareAcceleration: !1 }) : new eO(t, {
    allowProjection: e !== x.Fragment,
    enableHardwareAcceleration: !0
  }), rO = {
    layout: {
      ProjectionNode: c0,
      MeasureLayout: r0
    }
  }, iO = {
    ...I2,
    ...Xk,
    ...WA,
    ...rO
  }, oO = /* @__PURE__ */ sk((e, t) => Lk(e, t, iO, nO));
  function m0() {
    const e = x.useRef(!1);
    return ef(() => (e.current = !0, () => {
      e.current = !1;
    }), []), e;
  }
  function sO() {
    const e = m0(), [t, n] = x.useState(0), r = x.useCallback(() => {
      e.current && n(t + 1);
    }, [t]);
    return [x.useCallback(() => Se.postRender(r), [r]), t];
  }
  class aO extends x.Component {
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
    const n = x.useId(), r = x.useRef(null), i = x.useRef({
      width: 0,
      height: 0,
      top: 0,
      left: 0
    }), { nonce: o } = x.useContext(qc);
    return x.useInsertionEffect(() => {
      const { width: s, height: a, top: l, left: u } = i.current;
      if (t || !r.current || !s || !a)
        return;
      r.current.dataset.motionPopId = n;
      const c = document.createElement("style");
      return o && (c.nonce = o), document.head.appendChild(c), c.sheet && c.sheet.insertRule(`
          [data-motion-pop-id="${n}"] {
            position: absolute !important;
            width: ${s}px !important;
            height: ${a}px !important;
            top: ${l}px !important;
            left: ${u}px !important;
          }
        `), () => {
        document.head.removeChild(c);
      };
    }, [t]), O.jsx(aO, { isPresent: t, childRef: r, sizeRef: i, children: x.cloneElement(e, { ref: r }) });
  }
  const Sl = ({ children: e, initial: t, isPresent: n, onExitComplete: r, custom: i, presenceAffectsLayout: o, mode: s }) => {
    const a = fv(uO), l = x.useId(), u = x.useMemo(
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
      o ? [Math.random()] : [n]
    );
    return x.useMemo(() => {
      a.forEach((c, f) => a.set(f, !1));
    }, [n]), x.useEffect(() => {
      !n && !a.size && r && r();
    }, [n]), s === "popLayout" && (e = O.jsx(lO, { isPresent: n, children: e })), O.jsx(ya.Provider, { value: u, children: e });
  };
  function uO() {
    return /* @__PURE__ */ new Map();
  }
  function cO(e) {
    return x.useEffect(() => () => e(), []);
  }
  const In = (e) => e.key || "";
  function fO(e, t) {
    e.forEach((n) => {
      const r = In(n);
      t.set(r, n);
    });
  }
  function dO(e) {
    const t = [];
    return x.Children.forEach(e, (n) => {
      x.isValidElement(n) && t.push(n);
    }), t;
  }
  const hO = ({ children: e, custom: t, initial: n = !0, onExitComplete: r, exitBeforeEnter: i, presenceAffectsLayout: o = !0, mode: s = "sync" }) => {
    const a = x.useContext(sf).forceRender || sO()[0], l = m0(), u = dO(e);
    let c = u;
    const f = x.useRef(/* @__PURE__ */ new Map()).current, d = x.useRef(c), y = x.useRef(/* @__PURE__ */ new Map()).current, g = x.useRef(!0);
    if (ef(() => {
      g.current = !1, fO(u, y), d.current = c;
    }), cO(() => {
      g.current = !0, y.clear(), f.clear();
    }), g.current)
      return O.jsx(O.Fragment, { children: c.map((h) => O.jsx(Sl, { isPresent: !0, initial: n ? void 0 : !1, presenceAffectsLayout: o, mode: s, children: h }, In(h))) });
    c = [...c];
    const v = d.current.map(In), T = u.map(In), p = v.length;
    for (let h = 0; h < p; h++) {
      const m = v[h];
      T.indexOf(m) === -1 && !f.has(m) && f.set(m, void 0);
    }
    return s === "wait" && f.size && (c = []), f.forEach((h, m) => {
      if (T.indexOf(m) !== -1)
        return;
      const S = y.get(m);
      if (!S)
        return;
      const C = v.indexOf(m);
      let P = h;
      if (!P) {
        const k = () => {
          f.delete(m);
          const _ = Array.from(y.keys()).filter((b) => !T.includes(b));
          if (_.forEach((b) => y.delete(b)), d.current = u.filter((b) => {
            const M = In(b);
            return (
              // filter out the node exiting
              M === m || // filter out the leftover children
              _.includes(M)
            );
          }), !f.size) {
            if (l.current === !1)
              return;
            a(), r && r();
          }
        };
        P = O.jsx(Sl, { isPresent: !1, onExitComplete: k, custom: t, presenceAffectsLayout: o, mode: s, children: S }, In(S)), f.set(m, P);
      }
      c.splice(C, 0, P);
    }), c = c.map((h) => {
      const m = h.key;
      return f.has(m) ? h : O.jsx(Sl, { isPresent: !0, presenceAffectsLayout: o, mode: s, children: h }, In(h));
    }), O.jsx(O.Fragment, { children: f.size ? c : c.map((h) => x.cloneElement(h)) });
  };
  function pO({
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
    return /* @__PURE__ */ O.jsxs("div", { id: "default", className: "prose max-w-none", children: [
      /* @__PURE__ */ O.jsx("h2", { children: r(e.id) }),
      /* @__PURE__ */ O.jsx("p", { children: e.helpText }),
      /* @__PURE__ */ O.jsx("div", { className: "flex flex-row gap-6 flex-wrap", children: Object.keys(t || {}).map((a) => {
        var l, u;
        return /* @__PURE__ */ O.jsxs("div", { className: "grow shrink-0 basis-72", children: [
          /* @__PURE__ */ O.jsx("label", { htmlFor: a, className: "block mb-2 text-sm font-medium text-white", children: r(a) }),
          /* @__PURE__ */ O.jsx(
            RC,
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
          /* @__PURE__ */ O.jsx($C, { name: a, children: (c) => /* @__PURE__ */ O.jsx("div", { className: "text-red-400", children: c }) })
        ] }, a);
      }) })
    ] });
  }
  function mO() {
    const { isAnimated: e } = x.useContext(Of), { activeStep: t } = ao(), { initialValues: n, values: r } = oo();
    let i = {};
    return e && (i = {
      initial: { opacity: 0 },
      animate: { opacity: 1 },
      exit: { opacity: 0 }
    }), /* @__PURE__ */ O.jsx(hO, { initial: !1, mode: "wait", children: /* @__PURE__ */ O.jsx(
      oO.div,
      {
        variants: i,
        initial: "initial",
        animate: "animate",
        exit: "exit",
        transition: { type: "tween", duration: 0.25 },
        children: /* @__PURE__ */ O.jsx("div", { className: "py-4 sm:pt-12 lg:pt-20 pb-20 sm:pb-32", children: /* @__PURE__ */ O.jsx("div", { className: "container mx-auto sm:px-0 px-5 max-w-lg min-w-min md:max-w-2xl lg:max-w-4xl", children: t.component || /* @__PURE__ */ O.jsx(
          pO,
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
  var y0 = {
    color: void 0,
    size: void 0,
    className: void 0,
    style: void 0,
    attr: void 0
  }, Vp = Wn.createContext && /* @__PURE__ */ Wn.createContext(y0), yO = ["attr", "size", "title"];
  function gO(e, t) {
    if (e == null)
      return {};
    var n = vO(e, t), r, i;
    if (Object.getOwnPropertySymbols) {
      var o = Object.getOwnPropertySymbols(e);
      for (i = 0; i < o.length; i++)
        r = o[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (n[r] = e[r]);
    }
    return n;
  }
  function vO(e, t) {
    if (e == null)
      return {};
    var n = {}, r = Object.keys(e), i, o;
    for (o = 0; o < r.length; o++)
      i = r[o], !(t.indexOf(i) >= 0) && (n[i] = e[i]);
    return n;
  }
  function Rs() {
    return Rs = Object.assign ? Object.assign.bind() : function(e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = arguments[t];
        for (var r in n)
          Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
      }
      return e;
    }, Rs.apply(this, arguments);
  }
  function $p(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var r = Object.getOwnPropertySymbols(e);
      t && (r = r.filter(function(i) {
        return Object.getOwnPropertyDescriptor(e, i).enumerable;
      })), n.push.apply(n, r);
    }
    return n;
  }
  function Ds(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t] != null ? arguments[t] : {};
      t % 2 ? $p(Object(n), !0).forEach(function(r) {
        SO(e, r, n[r]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : $p(Object(n)).forEach(function(r) {
        Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
      });
    }
    return e;
  }
  function SO(e, t, n) {
    return t = xO(t), t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
  }
  function xO(e) {
    var t = wO(e, "string");
    return typeof t == "symbol" ? t : String(t);
  }
  function wO(e, t) {
    if (typeof e != "object" || e === null)
      return e;
    var n = e[Symbol.toPrimitive];
    if (n !== void 0) {
      var r = n.call(e, t || "default");
      if (typeof r != "object")
        return r;
      throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return (t === "string" ? String : Number)(e);
  }
  function g0(e) {
    return e && e.map((t, n) => /* @__PURE__ */ Wn.createElement(t.tag, Ds({
      key: n
    }, t.attr), g0(t.child)));
  }
  function v0(e) {
    return (t) => /* @__PURE__ */ Wn.createElement(TO, Rs({
      attr: Ds({}, e.attr)
    }, t), g0(e.child));
  }
  function TO(e) {
    var t = (n) => {
      var {
        attr: r,
        size: i,
        title: o
      } = e, s = gO(e, yO), a = i || n.size || "1em", l;
      return n.className && (l = n.className), e.className && (l = (l ? l + " " : "") + e.className), /* @__PURE__ */ Wn.createElement("svg", Rs({
        stroke: "currentColor",
        fill: "currentColor",
        strokeWidth: "0"
      }, n.attr, r, s, {
        className: l,
        style: Ds(Ds({
          color: e.color || n.color
        }, n.style), e.style),
        height: a,
        width: a,
        xmlns: "http://www.w3.org/2000/svg"
      }), o && /* @__PURE__ */ Wn.createElement("title", null, o), e.children);
    };
    return Vp !== void 0 ? /* @__PURE__ */ Wn.createElement(Vp.Consumer, null, (n) => t(n)) : t(y0);
  }
  function EO(e) {
    return v0({ tag: "svg", attr: { fill: "currentColor", viewBox: "0 0 16 16" }, child: [{ tag: "path", attr: { fillRule: "evenodd", d: "M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8" }, child: [] }] })(e);
  }
  function PO(e) {
    return v0({ tag: "svg", attr: { fill: "currentColor", viewBox: "0 0 16 16" }, child: [{ tag: "path", attr: { fillRule: "evenodd", d: "M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8" }, child: [] }] })(e);
  }
  var S0 = {}, Kr = {};
  Object.defineProperty(Kr, "__esModule", { value: !0 });
  Kr.cssValue = Kr.parseLengthAndUnit = void 0;
  var CO = {
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
  function x0(e) {
    if (typeof e == "number")
      return {
        value: e,
        unit: "px"
      };
    var t, n = (e.match(/^[0-9.]*/) || "").toString();
    n.includes(".") ? t = parseFloat(n) : t = parseInt(n, 10);
    var r = (e.match(/[^0-9]*$/) || "").toString();
    return CO[r] ? {
      value: t,
      unit: r
    } : (console.warn("React Spinners: ".concat(e, " is not a valid css value. Defaulting to ").concat(t, "px.")), {
      value: t,
      unit: "px"
    });
  }
  Kr.parseLengthAndUnit = x0;
  function kO(e) {
    var t = x0(e);
    return "".concat(t.value).concat(t.unit);
  }
  Kr.cssValue = kO;
  var Ta = {};
  Object.defineProperty(Ta, "__esModule", { value: !0 });
  Ta.createAnimation = void 0;
  var _O = function(e, t, n) {
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
  Ta.createAnimation = _O;
  var Ms = Ft && Ft.__assign || function() {
    return Ms = Object.assign || function(e) {
      for (var t, n = 1, r = arguments.length; n < r; n++) {
        t = arguments[n];
        for (var i in t)
          Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
      }
      return e;
    }, Ms.apply(this, arguments);
  }, AO = Ft && Ft.__createBinding || (Object.create ? function(e, t, n, r) {
    r === void 0 && (r = n);
    var i = Object.getOwnPropertyDescriptor(t, n);
    (!i || ("get" in i ? !t.__esModule : i.writable || i.configurable)) && (i = { enumerable: !0, get: function() {
      return t[n];
    } }), Object.defineProperty(e, r, i);
  } : function(e, t, n, r) {
    r === void 0 && (r = n), e[r] = t[n];
  }), OO = Ft && Ft.__setModuleDefault || (Object.create ? function(e, t) {
    Object.defineProperty(e, "default", { enumerable: !0, value: t });
  } : function(e, t) {
    e.default = t;
  }), jO = Ft && Ft.__importStar || function(e) {
    if (e && e.__esModule)
      return e;
    var t = {};
    if (e != null)
      for (var n in e)
        n !== "default" && Object.prototype.hasOwnProperty.call(e, n) && AO(t, e, n);
    return OO(t, e), t;
  }, FO = Ft && Ft.__rest || function(e, t) {
    var n = {};
    for (var r in e)
      Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
    if (e != null && typeof Object.getOwnPropertySymbols == "function")
      for (var i = 0, r = Object.getOwnPropertySymbols(e); i < r.length; i++)
        t.indexOf(r[i]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[i]) && (n[r[i]] = e[r[i]]);
    return n;
  };
  Object.defineProperty(S0, "__esModule", { value: !0 });
  var RO = jO(x), Ip = Kr, DO = Ta, MO = (0, DO.createAnimation)("ClipLoader", "0% {transform: rotate(0deg) scale(1)} 50% {transform: rotate(180deg) scale(0.8)} 100% {transform: rotate(360deg) scale(1)}", "clip");
  function NO(e) {
    var t = e.loading, n = t === void 0 ? !0 : t, r = e.color, i = r === void 0 ? "#000000" : r, o = e.speedMultiplier, s = o === void 0 ? 1 : o, a = e.cssOverride, l = a === void 0 ? {} : a, u = e.size, c = u === void 0 ? 35 : u, f = FO(e, ["loading", "color", "speedMultiplier", "cssOverride", "size"]), d = Ms({ background: "transparent !important", width: (0, Ip.cssValue)(c), height: (0, Ip.cssValue)(c), borderRadius: "100%", border: "2px solid", borderTopColor: i, borderBottomColor: "transparent", borderLeftColor: i, borderRightColor: i, display: "inline-block", animation: "".concat(MO, " ").concat(0.75 / s, "s 0s infinite linear"), animationFillMode: "both" }, l);
    return n ? RO.createElement("span", Ms({ style: d }, f)) : null;
  }
  var bO = S0.default = NO;
  function LO() {
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
    } = ao();
    const { isValid: a, submitForm: l } = oo();
    return o = n || o || s && !a, /* @__PURE__ */ O.jsx("div", { className: "navigation", children: /* @__PURE__ */ O.jsxs("div", { className: "navigation-wrapper " + (r ? "justify-end" : "justify-between"), children: [
      !r && /* @__PURE__ */ O.jsxs(
        "button",
        {
          className: "btn",
          onClick: e,
          disabled: t,
          type: "button",
          children: [
            /* @__PURE__ */ O.jsx(EO, { className: "w-8 h-8 fill-current" }),
            /* @__PURE__ */ O.jsx("span", { children: "Previous" })
          ]
        }
      ),
      !i && // Still possible to trigger submit even though button is disabled.
      // Main reason is to display validation errors.
      /* @__PURE__ */ O.jsx("div", { onClick: o ? l : void 0, children: /* @__PURE__ */ O.jsxs(
        "button",
        {
          className: "btn",
          disabled: o,
          type: "submit",
          children: [
            n && /* @__PURE__ */ O.jsx("span", { className: "mr-1 loading", children: /* @__PURE__ */ O.jsx(bO, { size: 11, color: "#757575" }) }),
            /* @__PURE__ */ O.jsx("span", { children: "Next" }),
            /* @__PURE__ */ O.jsx(PO, { className: "w-8 h-8 fill-current" })
          ]
        }
      ) })
    ] }) });
  }
  function VO() {
    const { isAnimated: e, setIsAnimated: t } = x.useContext(Of), { stepNumber: n, totalSteps: r } = ao(), i = `${(n - 1) / (r - 1) * 100}%`;
    return /* @__PURE__ */ O.jsxs("header", { className: "pt-4 pb-3", children: [
      /* @__PURE__ */ O.jsxs("div", { className: "px-5 flex justify-between items-center prose max-w-none", children: [
        /* @__PURE__ */ O.jsx("h3", { className: "mb-0 text-base sm:text-xl", children: "react-formik-step-wizard" }),
        /* @__PURE__ */ O.jsxs("div", { className: "flex items-center", children: [
          /* @__PURE__ */ O.jsxs("div", { className: "mr-3 text-sm", children: [
            /* @__PURE__ */ O.jsx("span", { className: "hidden min-[400px]:inline", children: "Step" }),
            " ",
            n,
            " / ",
            r
          ] }),
          /* @__PURE__ */ O.jsx("a", { href: "https://github.com/kennyhei/react-formik-step-wizard", target: "_blank", children: /* @__PURE__ */ O.jsx("img", { src: "/react-formik-step-wizard/github-mark-white.svg", className: "rounded-md w-9 my-0" }) })
        ] })
      ] }),
      /* @__PURE__ */ O.jsx("div", { className: "w-full bg-gray-600 h-1 mt-[17px]", children: /* @__PURE__ */ O.jsx(
        "div",
        {
          style: { width: i },
          className: "h-full bg-success transition-all " + (e ? "duration-500" : "")
        }
      ) }),
      /* @__PURE__ */ O.jsx("div", { className: "flex justify-end pr-5 prose max-w-none pt-1", children: /* @__PURE__ */ O.jsxs("label", { className: "label cursor-pointer px-0", children: [
        /* @__PURE__ */ O.jsx("span", { className: "label-text pr-2 " + (e ? "text-success" : "text-gray-300"), children: "Animate" }),
        /* @__PURE__ */ O.jsx(
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
  const Of = x.createContext({});
  function $O() {
    const [e, t] = x.useState(!0);
    return /* @__PURE__ */ O.jsx(Of.Provider, { value: { isAnimated: e, setIsAnimated: t }, children: /* @__PURE__ */ O.jsx(
      BC,
      {
        enableHash: !0,
        steps: GC,
        onStepChanged: (n, r, i) => {
          console.log("step changed", n.id, r.id, i);
        },
        header: /* @__PURE__ */ O.jsx(VO, {}),
        wrapper: /* @__PURE__ */ O.jsx(mO, {}),
        footer: /* @__PURE__ */ O.jsx(LO, {})
      }
    ) });
  }
  xl.createRoot(document.getElementById("root")).render(
    /* @__PURE__ */ O.jsx($O, {})
  );
});
export default IO();
