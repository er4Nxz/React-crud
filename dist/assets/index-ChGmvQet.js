(function () {
  const i = document.createElement("link").relList;
  if (i && i.supports && i.supports("modulepreload")) return;
  for (const c of document.querySelectorAll('link[rel="modulepreload"]')) s(c);
  new MutationObserver((c) => {
    for (const d of c)
      if (d.type === "childList")
        for (const p of d.addedNodes)
          p.tagName === "LINK" && p.rel === "modulepreload" && s(p);
  }).observe(document, { childList: !0, subtree: !0 });
  function r(c) {
    const d = {};
    return (
      c.integrity && (d.integrity = c.integrity),
      c.referrerPolicy && (d.referrerPolicy = c.referrerPolicy),
      c.crossOrigin === "use-credentials"
        ? (d.credentials = "include")
        : c.crossOrigin === "anonymous"
        ? (d.credentials = "omit")
        : (d.credentials = "same-origin"),
      d
    );
  }
  function s(c) {
    if (c.ep) return;
    c.ep = !0;
    const d = r(c);
    fetch(c.href, d);
  }
})();
function pw(n) {
  return n && n.__esModule && Object.prototype.hasOwnProperty.call(n, "default")
    ? n.default
    : n;
}
function gw(n) {
  if (Object.prototype.hasOwnProperty.call(n, "__esModule")) return n;
  var i = n.default;
  if (typeof i == "function") {
    var r = function s() {
      var c = !1;
      try {
        c = this instanceof s;
      } catch {}
      return c
        ? Reflect.construct(i, arguments, this.constructor)
        : i.apply(this, arguments);
    };
    r.prototype = i.prototype;
  } else r = {};
  return (
    Object.defineProperty(r, "__esModule", { value: !0 }),
    Object.keys(n).forEach(function (s) {
      var c = Object.getOwnPropertyDescriptor(n, s);
      Object.defineProperty(
        r,
        s,
        c.get
          ? c
          : {
              enumerable: !0,
              get: function () {
                return n[s];
              },
            }
      );
    }),
    r
  );
}
var uh = { exports: {} },
  fo = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Ig;
function vw() {
  if (Ig) return fo;
  Ig = 1;
  var n = Symbol.for("react.transitional.element"),
    i = Symbol.for("react.fragment");
  function r(s, c, d) {
    var p = null;
    if (
      (d !== void 0 && (p = "" + d),
      c.key !== void 0 && (p = "" + c.key),
      "key" in c)
    ) {
      d = {};
      for (var y in c) y !== "key" && (d[y] = c[y]);
    } else d = c;
    return (
      (c = d.ref),
      { $$typeof: n, type: s, key: p, ref: c !== void 0 ? c : null, props: d }
    );
  }
  return (fo.Fragment = i), (fo.jsx = r), (fo.jsxs = r), fo;
}
var Fg;
function bw() {
  return Fg || ((Fg = 1), (uh.exports = vw())), uh.exports;
}
var k = bw(),
  ch = { exports: {} },
  At = {};
/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Jg;
function yw() {
  if (Jg) return At;
  Jg = 1;
  var n = Symbol.for("react.transitional.element"),
    i = Symbol.for("react.portal"),
    r = Symbol.for("react.fragment"),
    s = Symbol.for("react.strict_mode"),
    c = Symbol.for("react.profiler"),
    d = Symbol.for("react.consumer"),
    p = Symbol.for("react.context"),
    y = Symbol.for("react.forward_ref"),
    b = Symbol.for("react.suspense"),
    g = Symbol.for("react.memo"),
    w = Symbol.for("react.lazy"),
    O = Symbol.iterator;
  function N(A) {
    return A === null || typeof A != "object"
      ? null
      : ((A = (O && A[O]) || A["@@iterator"]),
        typeof A == "function" ? A : null);
  }
  var q = {
      isMounted: function () {
        return !1;
      },
      enqueueForceUpdate: function () {},
      enqueueReplaceState: function () {},
      enqueueSetState: function () {},
    },
    x = Object.assign,
    z = {};
  function M(A, X, at) {
    (this.props = A),
      (this.context = X),
      (this.refs = z),
      (this.updater = at || q);
  }
  (M.prototype.isReactComponent = {}),
    (M.prototype.setState = function (A, X) {
      if (typeof A != "object" && typeof A != "function" && A != null)
        throw Error(
          "takes an object of state variables to update or a function which returns an object of state variables."
        );
      this.updater.enqueueSetState(this, A, X, "setState");
    }),
    (M.prototype.forceUpdate = function (A) {
      this.updater.enqueueForceUpdate(this, A, "forceUpdate");
    });
  function L() {}
  L.prototype = M.prototype;
  function I(A, X, at) {
    (this.props = A),
      (this.context = X),
      (this.refs = z),
      (this.updater = at || q);
  }
  var J = (I.prototype = new L());
  (J.constructor = I), x(J, M.prototype), (J.isPureReactComponent = !0);
  var et = Array.isArray,
    Z = { H: null, A: null, T: null, S: null, V: null },
    rt = Object.prototype.hasOwnProperty;
  function ut(A, X, at, nt, st, wt) {
    return (
      (at = wt.ref),
      {
        $$typeof: n,
        type: A,
        key: X,
        ref: at !== void 0 ? at : null,
        props: wt,
      }
    );
  }
  function bt(A, X) {
    return ut(A.type, X, void 0, void 0, void 0, A.props);
  }
  function ot(A) {
    return typeof A == "object" && A !== null && A.$$typeof === n;
  }
  function gt(A) {
    var X = { "=": "=0", ":": "=2" };
    return (
      "$" +
      A.replace(/[=:]/g, function (at) {
        return X[at];
      })
    );
  }
  var yt = /\/+/g;
  function zt(A, X) {
    return typeof A == "object" && A !== null && A.key != null
      ? gt("" + A.key)
      : X.toString(36);
  }
  function Vt() {}
  function ye(A) {
    switch (A.status) {
      case "fulfilled":
        return A.value;
      case "rejected":
        throw A.reason;
      default:
        switch (
          (typeof A.status == "string"
            ? A.then(Vt, Vt)
            : ((A.status = "pending"),
              A.then(
                function (X) {
                  A.status === "pending" &&
                    ((A.status = "fulfilled"), (A.value = X));
                },
                function (X) {
                  A.status === "pending" &&
                    ((A.status = "rejected"), (A.reason = X));
                }
              )),
          A.status)
        ) {
          case "fulfilled":
            return A.value;
          case "rejected":
            throw A.reason;
        }
    }
    throw A;
  }
  function Gt(A, X, at, nt, st) {
    var wt = typeof A;
    (wt === "undefined" || wt === "boolean") && (A = null);
    var dt = !1;
    if (A === null) dt = !0;
    else
      switch (wt) {
        case "bigint":
        case "string":
        case "number":
          dt = !0;
          break;
        case "object":
          switch (A.$$typeof) {
            case n:
            case i:
              dt = !0;
              break;
            case w:
              return (dt = A._init), Gt(dt(A._payload), X, at, nt, st);
          }
      }
    if (dt)
      return (
        (st = st(A)),
        (dt = nt === "" ? "." + zt(A, 0) : nt),
        et(st)
          ? ((at = ""),
            dt != null && (at = dt.replace(yt, "$&/") + "/"),
            Gt(st, X, at, "", function (qe) {
              return qe;
            }))
          : st != null &&
            (ot(st) &&
              (st = bt(
                st,
                at +
                  (st.key == null || (A && A.key === st.key)
                    ? ""
                    : ("" + st.key).replace(yt, "$&/") + "/") +
                  dt
              )),
            X.push(st)),
        1
      );
    dt = 0;
    var ae = nt === "" ? "." : nt + ":";
    if (et(A))
      for (var Dt = 0; Dt < A.length; Dt++)
        (nt = A[Dt]), (wt = ae + zt(nt, Dt)), (dt += Gt(nt, X, at, wt, st));
    else if (((Dt = N(A)), typeof Dt == "function"))
      for (A = Dt.call(A), Dt = 0; !(nt = A.next()).done; )
        (nt = nt.value),
          (wt = ae + zt(nt, Dt++)),
          (dt += Gt(nt, X, at, wt, st));
    else if (wt === "object") {
      if (typeof A.then == "function") return Gt(ye(A), X, at, nt, st);
      throw (
        ((X = String(A)),
        Error(
          "Objects are not valid as a React child (found: " +
            (X === "[object Object]"
              ? "object with keys {" + Object.keys(A).join(", ") + "}"
              : X) +
            "). If you meant to render a collection of children, use an array instead."
        ))
      );
    }
    return dt;
  }
  function U(A, X, at) {
    if (A == null) return A;
    var nt = [],
      st = 0;
    return (
      Gt(A, nt, "", "", function (wt) {
        return X.call(at, wt, st++);
      }),
      nt
    );
  }
  function W(A) {
    if (A._status === -1) {
      var X = A._result;
      (X = X()),
        X.then(
          function (at) {
            (A._status === 0 || A._status === -1) &&
              ((A._status = 1), (A._result = at));
          },
          function (at) {
            (A._status === 0 || A._status === -1) &&
              ((A._status = 2), (A._result = at));
          }
        ),
        A._status === -1 && ((A._status = 0), (A._result = X));
    }
    if (A._status === 1) return A._result.default;
    throw A._result;
  }
  var ct =
    typeof reportError == "function"
      ? reportError
      : function (A) {
          if (
            typeof window == "object" &&
            typeof window.ErrorEvent == "function"
          ) {
            var X = new window.ErrorEvent("error", {
              bubbles: !0,
              cancelable: !0,
              message:
                typeof A == "object" &&
                A !== null &&
                typeof A.message == "string"
                  ? String(A.message)
                  : String(A),
              error: A,
            });
            if (!window.dispatchEvent(X)) return;
          } else if (
            typeof process == "object" &&
            typeof process.emit == "function"
          ) {
            process.emit("uncaughtException", A);
            return;
          }
          console.error(A);
        };
  function xt() {}
  return (
    (At.Children = {
      map: U,
      forEach: function (A, X, at) {
        U(
          A,
          function () {
            X.apply(this, arguments);
          },
          at
        );
      },
      count: function (A) {
        var X = 0;
        return (
          U(A, function () {
            X++;
          }),
          X
        );
      },
      toArray: function (A) {
        return (
          U(A, function (X) {
            return X;
          }) || []
        );
      },
      only: function (A) {
        if (!ot(A))
          throw Error(
            "React.Children.only expected to receive a single React element child."
          );
        return A;
      },
    }),
    (At.Component = M),
    (At.Fragment = r),
    (At.Profiler = c),
    (At.PureComponent = I),
    (At.StrictMode = s),
    (At.Suspense = b),
    (At.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = Z),
    (At.__COMPILER_RUNTIME = {
      __proto__: null,
      c: function (A) {
        return Z.H.useMemoCache(A);
      },
    }),
    (At.cache = function (A) {
      return function () {
        return A.apply(null, arguments);
      };
    }),
    (At.cloneElement = function (A, X, at) {
      if (A == null)
        throw Error(
          "The argument must be a React element, but you passed " + A + "."
        );
      var nt = x({}, A.props),
        st = A.key,
        wt = void 0;
      if (X != null)
        for (dt in (X.ref !== void 0 && (wt = void 0),
        X.key !== void 0 && (st = "" + X.key),
        X))
          !rt.call(X, dt) ||
            dt === "key" ||
            dt === "__self" ||
            dt === "__source" ||
            (dt === "ref" && X.ref === void 0) ||
            (nt[dt] = X[dt]);
      var dt = arguments.length - 2;
      if (dt === 1) nt.children = at;
      else if (1 < dt) {
        for (var ae = Array(dt), Dt = 0; Dt < dt; Dt++)
          ae[Dt] = arguments[Dt + 2];
        nt.children = ae;
      }
      return ut(A.type, st, void 0, void 0, wt, nt);
    }),
    (At.createContext = function (A) {
      return (
        (A = {
          $$typeof: p,
          _currentValue: A,
          _currentValue2: A,
          _threadCount: 0,
          Provider: null,
          Consumer: null,
        }),
        (A.Provider = A),
        (A.Consumer = { $$typeof: d, _context: A }),
        A
      );
    }),
    (At.createElement = function (A, X, at) {
      var nt,
        st = {},
        wt = null;
      if (X != null)
        for (nt in (X.key !== void 0 && (wt = "" + X.key), X))
          rt.call(X, nt) &&
            nt !== "key" &&
            nt !== "__self" &&
            nt !== "__source" &&
            (st[nt] = X[nt]);
      var dt = arguments.length - 2;
      if (dt === 1) st.children = at;
      else if (1 < dt) {
        for (var ae = Array(dt), Dt = 0; Dt < dt; Dt++)
          ae[Dt] = arguments[Dt + 2];
        st.children = ae;
      }
      if (A && A.defaultProps)
        for (nt in ((dt = A.defaultProps), dt))
          st[nt] === void 0 && (st[nt] = dt[nt]);
      return ut(A, wt, void 0, void 0, null, st);
    }),
    (At.createRef = function () {
      return { current: null };
    }),
    (At.forwardRef = function (A) {
      return { $$typeof: y, render: A };
    }),
    (At.isValidElement = ot),
    (At.lazy = function (A) {
      return { $$typeof: w, _payload: { _status: -1, _result: A }, _init: W };
    }),
    (At.memo = function (A, X) {
      return { $$typeof: g, type: A, compare: X === void 0 ? null : X };
    }),
    (At.startTransition = function (A) {
      var X = Z.T,
        at = {};
      Z.T = at;
      try {
        var nt = A(),
          st = Z.S;
        st !== null && st(at, nt),
          typeof nt == "object" &&
            nt !== null &&
            typeof nt.then == "function" &&
            nt.then(xt, ct);
      } catch (wt) {
        ct(wt);
      } finally {
        Z.T = X;
      }
    }),
    (At.unstable_useCacheRefresh = function () {
      return Z.H.useCacheRefresh();
    }),
    (At.use = function (A) {
      return Z.H.use(A);
    }),
    (At.useActionState = function (A, X, at) {
      return Z.H.useActionState(A, X, at);
    }),
    (At.useCallback = function (A, X) {
      return Z.H.useCallback(A, X);
    }),
    (At.useContext = function (A) {
      return Z.H.useContext(A);
    }),
    (At.useDebugValue = function () {}),
    (At.useDeferredValue = function (A, X) {
      return Z.H.useDeferredValue(A, X);
    }),
    (At.useEffect = function (A, X, at) {
      var nt = Z.H;
      if (typeof at == "function")
        throw Error(
          "useEffect CRUD overload is not enabled in this build of React."
        );
      return nt.useEffect(A, X);
    }),
    (At.useId = function () {
      return Z.H.useId();
    }),
    (At.useImperativeHandle = function (A, X, at) {
      return Z.H.useImperativeHandle(A, X, at);
    }),
    (At.useInsertionEffect = function (A, X) {
      return Z.H.useInsertionEffect(A, X);
    }),
    (At.useLayoutEffect = function (A, X) {
      return Z.H.useLayoutEffect(A, X);
    }),
    (At.useMemo = function (A, X) {
      return Z.H.useMemo(A, X);
    }),
    (At.useOptimistic = function (A, X) {
      return Z.H.useOptimistic(A, X);
    }),
    (At.useReducer = function (A, X, at) {
      return Z.H.useReducer(A, X, at);
    }),
    (At.useRef = function (A) {
      return Z.H.useRef(A);
    }),
    (At.useState = function (A) {
      return Z.H.useState(A);
    }),
    (At.useSyncExternalStore = function (A, X, at) {
      return Z.H.useSyncExternalStore(A, X, at);
    }),
    (At.useTransition = function () {
      return Z.H.useTransition();
    }),
    (At.version = "19.1.0"),
    At
  );
}
var Wg;
function kh() {
  return Wg || ((Wg = 1), (ch.exports = yw())), ch.exports;
}
var V = kh();
const wl = pw(V);
var fh = { exports: {} },
  ho = {},
  dh = { exports: {} },
  hh = {};
/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var t0;
function ww() {
  return (
    t0 ||
      ((t0 = 1),
      (function (n) {
        function i(U, W) {
          var ct = U.length;
          U.push(W);
          t: for (; 0 < ct; ) {
            var xt = (ct - 1) >>> 1,
              A = U[xt];
            if (0 < c(A, W)) (U[xt] = W), (U[ct] = A), (ct = xt);
            else break t;
          }
        }
        function r(U) {
          return U.length === 0 ? null : U[0];
        }
        function s(U) {
          if (U.length === 0) return null;
          var W = U[0],
            ct = U.pop();
          if (ct !== W) {
            U[0] = ct;
            t: for (var xt = 0, A = U.length, X = A >>> 1; xt < X; ) {
              var at = 2 * (xt + 1) - 1,
                nt = U[at],
                st = at + 1,
                wt = U[st];
              if (0 > c(nt, ct))
                st < A && 0 > c(wt, nt)
                  ? ((U[xt] = wt), (U[st] = ct), (xt = st))
                  : ((U[xt] = nt), (U[at] = ct), (xt = at));
              else if (st < A && 0 > c(wt, ct))
                (U[xt] = wt), (U[st] = ct), (xt = st);
              else break t;
            }
          }
          return W;
        }
        function c(U, W) {
          var ct = U.sortIndex - W.sortIndex;
          return ct !== 0 ? ct : U.id - W.id;
        }
        if (
          ((n.unstable_now = void 0),
          typeof performance == "object" &&
            typeof performance.now == "function")
        ) {
          var d = performance;
          n.unstable_now = function () {
            return d.now();
          };
        } else {
          var p = Date,
            y = p.now();
          n.unstable_now = function () {
            return p.now() - y;
          };
        }
        var b = [],
          g = [],
          w = 1,
          O = null,
          N = 3,
          q = !1,
          x = !1,
          z = !1,
          M = !1,
          L = typeof setTimeout == "function" ? setTimeout : null,
          I = typeof clearTimeout == "function" ? clearTimeout : null,
          J = typeof setImmediate < "u" ? setImmediate : null;
        function et(U) {
          for (var W = r(g); W !== null; ) {
            if (W.callback === null) s(g);
            else if (W.startTime <= U)
              s(g), (W.sortIndex = W.expirationTime), i(b, W);
            else break;
            W = r(g);
          }
        }
        function Z(U) {
          if (((z = !1), et(U), !x))
            if (r(b) !== null) (x = !0), rt || ((rt = !0), zt());
            else {
              var W = r(g);
              W !== null && Gt(Z, W.startTime - U);
            }
        }
        var rt = !1,
          ut = -1,
          bt = 5,
          ot = -1;
        function gt() {
          return M ? !0 : !(n.unstable_now() - ot < bt);
        }
        function yt() {
          if (((M = !1), rt)) {
            var U = n.unstable_now();
            ot = U;
            var W = !0;
            try {
              t: {
                (x = !1), z && ((z = !1), I(ut), (ut = -1)), (q = !0);
                var ct = N;
                try {
                  e: {
                    for (
                      et(U), O = r(b);
                      O !== null && !(O.expirationTime > U && gt());

                    ) {
                      var xt = O.callback;
                      if (typeof xt == "function") {
                        (O.callback = null), (N = O.priorityLevel);
                        var A = xt(O.expirationTime <= U);
                        if (((U = n.unstable_now()), typeof A == "function")) {
                          (O.callback = A), et(U), (W = !0);
                          break e;
                        }
                        O === r(b) && s(b), et(U);
                      } else s(b);
                      O = r(b);
                    }
                    if (O !== null) W = !0;
                    else {
                      var X = r(g);
                      X !== null && Gt(Z, X.startTime - U), (W = !1);
                    }
                  }
                  break t;
                } finally {
                  (O = null), (N = ct), (q = !1);
                }
                W = void 0;
              }
            } finally {
              W ? zt() : (rt = !1);
            }
          }
        }
        var zt;
        if (typeof J == "function")
          zt = function () {
            J(yt);
          };
        else if (typeof MessageChannel < "u") {
          var Vt = new MessageChannel(),
            ye = Vt.port2;
          (Vt.port1.onmessage = yt),
            (zt = function () {
              ye.postMessage(null);
            });
        } else
          zt = function () {
            L(yt, 0);
          };
        function Gt(U, W) {
          ut = L(function () {
            U(n.unstable_now());
          }, W);
        }
        (n.unstable_IdlePriority = 5),
          (n.unstable_ImmediatePriority = 1),
          (n.unstable_LowPriority = 4),
          (n.unstable_NormalPriority = 3),
          (n.unstable_Profiling = null),
          (n.unstable_UserBlockingPriority = 2),
          (n.unstable_cancelCallback = function (U) {
            U.callback = null;
          }),
          (n.unstable_forceFrameRate = function (U) {
            0 > U || 125 < U
              ? console.error(
                  "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
                )
              : (bt = 0 < U ? Math.floor(1e3 / U) : 5);
          }),
          (n.unstable_getCurrentPriorityLevel = function () {
            return N;
          }),
          (n.unstable_next = function (U) {
            switch (N) {
              case 1:
              case 2:
              case 3:
                var W = 3;
                break;
              default:
                W = N;
            }
            var ct = N;
            N = W;
            try {
              return U();
            } finally {
              N = ct;
            }
          }),
          (n.unstable_requestPaint = function () {
            M = !0;
          }),
          (n.unstable_runWithPriority = function (U, W) {
            switch (U) {
              case 1:
              case 2:
              case 3:
              case 4:
              case 5:
                break;
              default:
                U = 3;
            }
            var ct = N;
            N = U;
            try {
              return W();
            } finally {
              N = ct;
            }
          }),
          (n.unstable_scheduleCallback = function (U, W, ct) {
            var xt = n.unstable_now();
            switch (
              (typeof ct == "object" && ct !== null
                ? ((ct = ct.delay),
                  (ct = typeof ct == "number" && 0 < ct ? xt + ct : xt))
                : (ct = xt),
              U)
            ) {
              case 1:
                var A = -1;
                break;
              case 2:
                A = 250;
                break;
              case 5:
                A = 1073741823;
                break;
              case 4:
                A = 1e4;
                break;
              default:
                A = 5e3;
            }
            return (
              (A = ct + A),
              (U = {
                id: w++,
                callback: W,
                priorityLevel: U,
                startTime: ct,
                expirationTime: A,
                sortIndex: -1,
              }),
              ct > xt
                ? ((U.sortIndex = ct),
                  i(g, U),
                  r(b) === null &&
                    U === r(g) &&
                    (z ? (I(ut), (ut = -1)) : (z = !0), Gt(Z, ct - xt)))
                : ((U.sortIndex = A),
                  i(b, U),
                  x || q || ((x = !0), rt || ((rt = !0), zt()))),
              U
            );
          }),
          (n.unstable_shouldYield = gt),
          (n.unstable_wrapCallback = function (U) {
            var W = N;
            return function () {
              var ct = N;
              N = W;
              try {
                return U.apply(this, arguments);
              } finally {
                N = ct;
              }
            };
          });
      })(hh)),
    hh
  );
}
var e0;
function Ew() {
  return e0 || ((e0 = 1), (dh.exports = ww())), dh.exports;
}
var mh = { exports: {} },
  De = {};
/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var n0;
function _w() {
  if (n0) return De;
  n0 = 1;
  var n = kh();
  function i(b) {
    var g = "https://react.dev/errors/" + b;
    if (1 < arguments.length) {
      g += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var w = 2; w < arguments.length; w++)
        g += "&args[]=" + encodeURIComponent(arguments[w]);
    }
    return (
      "Minified React error #" +
      b +
      "; visit " +
      g +
      " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    );
  }
  function r() {}
  var s = {
      d: {
        f: r,
        r: function () {
          throw Error(i(522));
        },
        D: r,
        C: r,
        L: r,
        m: r,
        X: r,
        S: r,
        M: r,
      },
      p: 0,
      findDOMNode: null,
    },
    c = Symbol.for("react.portal");
  function d(b, g, w) {
    var O =
      3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: c,
      key: O == null ? null : "" + O,
      children: b,
      containerInfo: g,
      implementation: w,
    };
  }
  var p = n.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
  function y(b, g) {
    if (b === "font") return "";
    if (typeof g == "string") return g === "use-credentials" ? g : "";
  }
  return (
    (De.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = s),
    (De.createPortal = function (b, g) {
      var w =
        2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
      if (!g || (g.nodeType !== 1 && g.nodeType !== 9 && g.nodeType !== 11))
        throw Error(i(299));
      return d(b, g, null, w);
    }),
    (De.flushSync = function (b) {
      var g = p.T,
        w = s.p;
      try {
        if (((p.T = null), (s.p = 2), b)) return b();
      } finally {
        (p.T = g), (s.p = w), s.d.f();
      }
    }),
    (De.preconnect = function (b, g) {
      typeof b == "string" &&
        (g
          ? ((g = g.crossOrigin),
            (g =
              typeof g == "string"
                ? g === "use-credentials"
                  ? g
                  : ""
                : void 0))
          : (g = null),
        s.d.C(b, g));
    }),
    (De.prefetchDNS = function (b) {
      typeof b == "string" && s.d.D(b);
    }),
    (De.preinit = function (b, g) {
      if (typeof b == "string" && g && typeof g.as == "string") {
        var w = g.as,
          O = y(w, g.crossOrigin),
          N = typeof g.integrity == "string" ? g.integrity : void 0,
          q = typeof g.fetchPriority == "string" ? g.fetchPriority : void 0;
        w === "style"
          ? s.d.S(b, typeof g.precedence == "string" ? g.precedence : void 0, {
              crossOrigin: O,
              integrity: N,
              fetchPriority: q,
            })
          : w === "script" &&
            s.d.X(b, {
              crossOrigin: O,
              integrity: N,
              fetchPriority: q,
              nonce: typeof g.nonce == "string" ? g.nonce : void 0,
            });
      }
    }),
    (De.preinitModule = function (b, g) {
      if (typeof b == "string")
        if (typeof g == "object" && g !== null) {
          if (g.as == null || g.as === "script") {
            var w = y(g.as, g.crossOrigin);
            s.d.M(b, {
              crossOrigin: w,
              integrity: typeof g.integrity == "string" ? g.integrity : void 0,
              nonce: typeof g.nonce == "string" ? g.nonce : void 0,
            });
          }
        } else g == null && s.d.M(b);
    }),
    (De.preload = function (b, g) {
      if (
        typeof b == "string" &&
        typeof g == "object" &&
        g !== null &&
        typeof g.as == "string"
      ) {
        var w = g.as,
          O = y(w, g.crossOrigin);
        s.d.L(b, w, {
          crossOrigin: O,
          integrity: typeof g.integrity == "string" ? g.integrity : void 0,
          nonce: typeof g.nonce == "string" ? g.nonce : void 0,
          type: typeof g.type == "string" ? g.type : void 0,
          fetchPriority:
            typeof g.fetchPriority == "string" ? g.fetchPriority : void 0,
          referrerPolicy:
            typeof g.referrerPolicy == "string" ? g.referrerPolicy : void 0,
          imageSrcSet:
            typeof g.imageSrcSet == "string" ? g.imageSrcSet : void 0,
          imageSizes: typeof g.imageSizes == "string" ? g.imageSizes : void 0,
          media: typeof g.media == "string" ? g.media : void 0,
        });
      }
    }),
    (De.preloadModule = function (b, g) {
      if (typeof b == "string")
        if (g) {
          var w = y(g.as, g.crossOrigin);
          s.d.m(b, {
            as: typeof g.as == "string" && g.as !== "script" ? g.as : void 0,
            crossOrigin: w,
            integrity: typeof g.integrity == "string" ? g.integrity : void 0,
          });
        } else s.d.m(b);
    }),
    (De.requestFormReset = function (b) {
      s.d.r(b);
    }),
    (De.unstable_batchedUpdates = function (b, g) {
      return b(g);
    }),
    (De.useFormState = function (b, g, w) {
      return p.H.useFormState(b, g, w);
    }),
    (De.useFormStatus = function () {
      return p.H.useHostTransitionStatus();
    }),
    (De.version = "19.1.0"),
    De
  );
}
var a0;
function Sw() {
  if (a0) return mh.exports;
  a0 = 1;
  function n() {
    if (
      !(
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
      )
    )
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n);
      } catch (i) {
        console.error(i);
      }
  }
  return n(), (mh.exports = _w()), mh.exports;
}
/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var i0;
function Aw() {
  if (i0) return ho;
  i0 = 1;
  var n = Ew(),
    i = kh(),
    r = Sw();
  function s(t) {
    var e = "https://react.dev/errors/" + t;
    if (1 < arguments.length) {
      e += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var a = 2; a < arguments.length; a++)
        e += "&args[]=" + encodeURIComponent(arguments[a]);
    }
    return (
      "Minified React error #" +
      t +
      "; visit " +
      e +
      " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    );
  }
  function c(t) {
    return !(!t || (t.nodeType !== 1 && t.nodeType !== 9 && t.nodeType !== 11));
  }
  function d(t) {
    var e = t,
      a = t;
    if (t.alternate) for (; e.return; ) e = e.return;
    else {
      t = e;
      do (e = t), (e.flags & 4098) !== 0 && (a = e.return), (t = e.return);
      while (t);
    }
    return e.tag === 3 ? a : null;
  }
  function p(t) {
    if (t.tag === 13) {
      var e = t.memoizedState;
      if (
        (e === null && ((t = t.alternate), t !== null && (e = t.memoizedState)),
        e !== null)
      )
        return e.dehydrated;
    }
    return null;
  }
  function y(t) {
    if (d(t) !== t) throw Error(s(188));
  }
  function b(t) {
    var e = t.alternate;
    if (!e) {
      if (((e = d(t)), e === null)) throw Error(s(188));
      return e !== t ? null : t;
    }
    for (var a = t, l = e; ; ) {
      var o = a.return;
      if (o === null) break;
      var u = o.alternate;
      if (u === null) {
        if (((l = o.return), l !== null)) {
          a = l;
          continue;
        }
        break;
      }
      if (o.child === u.child) {
        for (u = o.child; u; ) {
          if (u === a) return y(o), t;
          if (u === l) return y(o), e;
          u = u.sibling;
        }
        throw Error(s(188));
      }
      if (a.return !== l.return) (a = o), (l = u);
      else {
        for (var h = !1, v = o.child; v; ) {
          if (v === a) {
            (h = !0), (a = o), (l = u);
            break;
          }
          if (v === l) {
            (h = !0), (l = o), (a = u);
            break;
          }
          v = v.sibling;
        }
        if (!h) {
          for (v = u.child; v; ) {
            if (v === a) {
              (h = !0), (a = u), (l = o);
              break;
            }
            if (v === l) {
              (h = !0), (l = u), (a = o);
              break;
            }
            v = v.sibling;
          }
          if (!h) throw Error(s(189));
        }
      }
      if (a.alternate !== l) throw Error(s(190));
    }
    if (a.tag !== 3) throw Error(s(188));
    return a.stateNode.current === a ? t : e;
  }
  function g(t) {
    var e = t.tag;
    if (e === 5 || e === 26 || e === 27 || e === 6) return t;
    for (t = t.child; t !== null; ) {
      if (((e = g(t)), e !== null)) return e;
      t = t.sibling;
    }
    return null;
  }
  var w = Object.assign,
    O = Symbol.for("react.element"),
    N = Symbol.for("react.transitional.element"),
    q = Symbol.for("react.portal"),
    x = Symbol.for("react.fragment"),
    z = Symbol.for("react.strict_mode"),
    M = Symbol.for("react.profiler"),
    L = Symbol.for("react.provider"),
    I = Symbol.for("react.consumer"),
    J = Symbol.for("react.context"),
    et = Symbol.for("react.forward_ref"),
    Z = Symbol.for("react.suspense"),
    rt = Symbol.for("react.suspense_list"),
    ut = Symbol.for("react.memo"),
    bt = Symbol.for("react.lazy"),
    ot = Symbol.for("react.activity"),
    gt = Symbol.for("react.memo_cache_sentinel"),
    yt = Symbol.iterator;
  function zt(t) {
    return t === null || typeof t != "object"
      ? null
      : ((t = (yt && t[yt]) || t["@@iterator"]),
        typeof t == "function" ? t : null);
  }
  var Vt = Symbol.for("react.client.reference");
  function ye(t) {
    if (t == null) return null;
    if (typeof t == "function")
      return t.$$typeof === Vt ? null : t.displayName || t.name || null;
    if (typeof t == "string") return t;
    switch (t) {
      case x:
        return "Fragment";
      case M:
        return "Profiler";
      case z:
        return "StrictMode";
      case Z:
        return "Suspense";
      case rt:
        return "SuspenseList";
      case ot:
        return "Activity";
    }
    if (typeof t == "object")
      switch (t.$$typeof) {
        case q:
          return "Portal";
        case J:
          return (t.displayName || "Context") + ".Provider";
        case I:
          return (t._context.displayName || "Context") + ".Consumer";
        case et:
          var e = t.render;
          return (
            (t = t.displayName),
            t ||
              ((t = e.displayName || e.name || ""),
              (t = t !== "" ? "ForwardRef(" + t + ")" : "ForwardRef")),
            t
          );
        case ut:
          return (
            (e = t.displayName || null), e !== null ? e : ye(t.type) || "Memo"
          );
        case bt:
          (e = t._payload), (t = t._init);
          try {
            return ye(t(e));
          } catch {}
      }
    return null;
  }
  var Gt = Array.isArray,
    U = i.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
    W = r.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
    ct = { pending: !1, data: null, method: null, action: null },
    xt = [],
    A = -1;
  function X(t) {
    return { current: t };
  }
  function at(t) {
    0 > A || ((t.current = xt[A]), (xt[A] = null), A--);
  }
  function nt(t, e) {
    A++, (xt[A] = t.current), (t.current = e);
  }
  var st = X(null),
    wt = X(null),
    dt = X(null),
    ae = X(null);
  function Dt(t, e) {
    switch ((nt(dt, e), nt(wt, t), nt(st, null), e.nodeType)) {
      case 9:
      case 11:
        t = (t = e.documentElement) && (t = t.namespaceURI) ? Ag(t) : 0;
        break;
      default:
        if (((t = e.tagName), (e = e.namespaceURI)))
          (e = Ag(e)), (t = Tg(e, t));
        else
          switch (t) {
            case "svg":
              t = 1;
              break;
            case "math":
              t = 2;
              break;
            default:
              t = 0;
          }
    }
    at(st), nt(st, t);
  }
  function qe() {
    at(st), at(wt), at(dt);
  }
  function ai(t) {
    t.memoizedState !== null && nt(ae, t);
    var e = st.current,
      a = Tg(e, t.type);
    e !== a && (nt(wt, t), nt(st, a));
  }
  function Q(t) {
    wt.current === t && (at(st), at(wt)),
      ae.current === t && (at(ae), (ro._currentValue = ct));
  }
  var Sa = Object.prototype.hasOwnProperty,
    Aa = n.unstable_scheduleCallback,
    Ta = n.unstable_cancelCallback,
    en = n.unstable_shouldYield,
    Jn = n.unstable_requestPaint,
    Le = n.unstable_now,
    Be = n.unstable_getCurrentPriorityLevel,
    ii = n.unstable_ImmediatePriority,
    it = n.unstable_UserBlockingPriority,
    Ve = n.unstable_NormalPriority,
    Ll = n.unstable_LowPriority,
    Bl = n.unstable_IdlePriority,
    li = n.log,
    zl = n.unstable_setDisableYieldValue,
    Wn = null,
    fe = null;
  function nn(t) {
    if (
      (typeof li == "function" && zl(t),
      fe && typeof fe.setStrictMode == "function")
    )
      try {
        fe.setStrictMode(Wn, t);
      } catch {}
  }
  var ue = Math.clz32 ? Math.clz32 : mf,
    hf = Math.log,
    ym = Math.LN2;
  function mf(t) {
    return (t >>>= 0), t === 0 ? 32 : (31 - ((hf(t) / ym) | 0)) | 0;
  }
  var Hl = 256,
    kl = 4194304;
  function ta(t) {
    var e = t & 42;
    if (e !== 0) return e;
    switch (t & -t) {
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
        return 64;
      case 128:
        return 128;
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
        return t & 4194048;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return t & 62914560;
      case 67108864:
        return 67108864;
      case 134217728:
        return 134217728;
      case 268435456:
        return 268435456;
      case 536870912:
        return 536870912;
      case 1073741824:
        return 0;
      default:
        return t;
    }
  }
  function jl(t, e, a) {
    var l = t.pendingLanes;
    if (l === 0) return 0;
    var o = 0,
      u = t.suspendedLanes,
      h = t.pingedLanes;
    t = t.warmLanes;
    var v = l & 134217727;
    return (
      v !== 0
        ? ((l = v & ~u),
          l !== 0
            ? (o = ta(l))
            : ((h &= v),
              h !== 0
                ? (o = ta(h))
                : a || ((a = v & ~t), a !== 0 && (o = ta(a)))))
        : ((v = l & ~u),
          v !== 0
            ? (o = ta(v))
            : h !== 0
            ? (o = ta(h))
            : a || ((a = l & ~t), a !== 0 && (o = ta(a)))),
      o === 0
        ? 0
        : e !== 0 &&
          e !== o &&
          (e & u) === 0 &&
          ((u = o & -o),
          (a = e & -e),
          u >= a || (u === 32 && (a & 4194048) !== 0))
        ? e
        : o
    );
  }
  function zn(t, e) {
    return (t.pendingLanes & ~(t.suspendedLanes & ~t.pingedLanes) & e) === 0;
  }
  function pf(t, e) {
    switch (t) {
      case 1:
      case 2:
      case 4:
      case 8:
      case 64:
        return e + 250;
      case 16:
      case 32:
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
        return e + 5e3;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return -1;
      case 67108864:
      case 134217728:
      case 268435456:
      case 536870912:
      case 1073741824:
        return -1;
      default:
        return -1;
    }
  }
  function xa() {
    var t = Hl;
    return (Hl <<= 1), (Hl & 4194048) === 0 && (Hl = 256), t;
  }
  function Bo() {
    var t = kl;
    return (kl <<= 1), (kl & 62914560) === 0 && (kl = 4194304), t;
  }
  function Zr(t) {
    for (var e = [], a = 0; 31 > a; a++) e.push(t);
    return e;
  }
  function $i(t, e) {
    (t.pendingLanes |= e),
      e !== 268435456 &&
        ((t.suspendedLanes = 0), (t.pingedLanes = 0), (t.warmLanes = 0));
  }
  function gf(t, e, a, l, o, u) {
    var h = t.pendingLanes;
    (t.pendingLanes = a),
      (t.suspendedLanes = 0),
      (t.pingedLanes = 0),
      (t.warmLanes = 0),
      (t.expiredLanes &= a),
      (t.entangledLanes &= a),
      (t.errorRecoveryDisabledLanes &= a),
      (t.shellSuspendCounter = 0);
    var v = t.entanglements,
      _ = t.expirationTimes,
      R = t.hiddenUpdates;
    for (a = h & ~a; 0 < a; ) {
      var P = 31 - ue(a),
        K = 1 << P;
      (v[P] = 0), (_[P] = -1);
      var B = R[P];
      if (B !== null)
        for (R[P] = null, P = 0; P < B.length; P++) {
          var H = B[P];
          H !== null && (H.lane &= -536870913);
        }
      a &= ~K;
    }
    l !== 0 && zo(t, l, 0),
      u !== 0 && o === 0 && t.tag !== 0 && (t.suspendedLanes |= u & ~(h & ~e));
  }
  function zo(t, e, a) {
    (t.pendingLanes |= e), (t.suspendedLanes &= ~e);
    var l = 31 - ue(e);
    (t.entangledLanes |= e),
      (t.entanglements[l] = t.entanglements[l] | 1073741824 | (a & 4194090));
  }
  function Ho(t, e) {
    var a = (t.entangledLanes |= e);
    for (t = t.entanglements; a; ) {
      var l = 31 - ue(a),
        o = 1 << l;
      (o & e) | (t[l] & e) && (t[l] |= e), (a &= ~o);
    }
  }
  function Ir(t) {
    switch (t) {
      case 2:
        t = 1;
        break;
      case 8:
        t = 4;
        break;
      case 32:
        t = 16;
        break;
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
        t = 128;
        break;
      case 268435456:
        t = 134217728;
        break;
      default:
        t = 0;
    }
    return t;
  }
  function Fr(t) {
    return (
      (t &= -t),
      2 < t ? (8 < t ? ((t & 134217727) !== 0 ? 32 : 268435456) : 8) : 2
    );
  }
  function ko() {
    var t = W.p;
    return t !== 0 ? t : ((t = window.event), t === void 0 ? 32 : Pg(t.type));
  }
  function vf(t, e) {
    var a = W.p;
    try {
      return (W.p = t), e();
    } finally {
      W.p = a;
    }
  }
  var ea = Math.random().toString(36).slice(2),
    ie = "__reactFiber$" + ea,
    Oe = "__reactProps$" + ea,
    qi = "__reactContainer$" + ea,
    En = "__reactEvents$" + ea,
    jo = "__reactListeners$" + ea,
    bf = "__reactHandles$" + ea,
    Uo = "__reactResources$" + ea,
    Vi = "__reactMarker$" + ea;
  function Oa(t) {
    delete t[ie], delete t[Oe], delete t[En], delete t[jo], delete t[bf];
  }
  function an(t) {
    var e = t[ie];
    if (e) return e;
    for (var a = t.parentNode; a; ) {
      if ((e = a[qi] || a[ie])) {
        if (
          ((a = e.alternate),
          e.child !== null || (a !== null && a.child !== null))
        )
          for (t = Ng(t); t !== null; ) {
            if ((a = t[ie])) return a;
            t = Ng(t);
          }
        return e;
      }
      (t = a), (a = t.parentNode);
    }
    return null;
  }
  function ln(t) {
    if ((t = t[ie] || t[qi])) {
      var e = t.tag;
      if (e === 5 || e === 6 || e === 13 || e === 26 || e === 27 || e === 3)
        return t;
    }
    return null;
  }
  function na(t) {
    var e = t.tag;
    if (e === 5 || e === 26 || e === 27 || e === 6) return t.stateNode;
    throw Error(s(33));
  }
  function ri(t) {
    var e = t[Uo];
    return (
      e ||
        (e = t[Uo] =
          { hoistableStyles: new Map(), hoistableScripts: new Map() }),
      e
    );
  }
  function Wt(t) {
    t[Vi] = !0;
  }
  var $o = new Set(),
    qo = {};
  function Ca(t, e) {
    si(t, e), si(t + "Capture", e);
  }
  function si(t, e) {
    for (qo[t] = e, t = 0; t < e.length; t++) $o.add(e[t]);
  }
  var yf = RegExp(
      "^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
    ),
    Vo = {},
    Jr = {};
  function Ul(t) {
    return Sa.call(Jr, t)
      ? !0
      : Sa.call(Vo, t)
      ? !1
      : yf.test(t)
      ? (Jr[t] = !0)
      : ((Vo[t] = !0), !1);
  }
  function $l(t, e, a) {
    if (Ul(e))
      if (a === null) t.removeAttribute(e);
      else {
        switch (typeof a) {
          case "undefined":
          case "function":
          case "symbol":
            t.removeAttribute(e);
            return;
          case "boolean":
            var l = e.toLowerCase().slice(0, 5);
            if (l !== "data-" && l !== "aria-") {
              t.removeAttribute(e);
              return;
            }
        }
        t.setAttribute(e, "" + a);
      }
  }
  function ql(t, e, a) {
    if (a === null) t.removeAttribute(e);
    else {
      switch (typeof a) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          t.removeAttribute(e);
          return;
      }
      t.setAttribute(e, "" + a);
    }
  }
  function Hn(t, e, a, l) {
    if (l === null) t.removeAttribute(a);
    else {
      switch (typeof l) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          t.removeAttribute(a);
          return;
      }
      t.setAttributeNS(e, a, "" + l);
    }
  }
  var Wr, Yo;
  function Na(t) {
    if (Wr === void 0)
      try {
        throw Error();
      } catch (a) {
        var e = a.stack.trim().match(/\n( *(at )?)/);
        (Wr = (e && e[1]) || ""),
          (Yo =
            -1 <
            a.stack.indexOf(`
    at`)
              ? " (<anonymous>)"
              : -1 < a.stack.indexOf("@")
              ? "@unknown:0:0"
              : "");
      }
    return (
      `
` +
      Wr +
      t +
      Yo
    );
  }
  var Vl = !1;
  function ts(t, e) {
    if (!t || Vl) return "";
    Vl = !0;
    var a = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      var l = {
        DetermineComponentFrameRoot: function () {
          try {
            if (e) {
              var K = function () {
                throw Error();
              };
              if (
                (Object.defineProperty(K.prototype, "props", {
                  set: function () {
                    throw Error();
                  },
                }),
                typeof Reflect == "object" && Reflect.construct)
              ) {
                try {
                  Reflect.construct(K, []);
                } catch (H) {
                  var B = H;
                }
                Reflect.construct(t, [], K);
              } else {
                try {
                  K.call();
                } catch (H) {
                  B = H;
                }
                t.call(K.prototype);
              }
            } else {
              try {
                throw Error();
              } catch (H) {
                B = H;
              }
              (K = t()) &&
                typeof K.catch == "function" &&
                K.catch(function () {});
            }
          } catch (H) {
            if (H && B && typeof H.stack == "string") return [H.stack, B.stack];
          }
          return [null, null];
        },
      };
      l.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
      var o = Object.getOwnPropertyDescriptor(
        l.DetermineComponentFrameRoot,
        "name"
      );
      o &&
        o.configurable &&
        Object.defineProperty(l.DetermineComponentFrameRoot, "name", {
          value: "DetermineComponentFrameRoot",
        });
      var u = l.DetermineComponentFrameRoot(),
        h = u[0],
        v = u[1];
      if (h && v) {
        var _ = h.split(`
`),
          R = v.split(`
`);
        for (
          o = l = 0;
          l < _.length && !_[l].includes("DetermineComponentFrameRoot");

        )
          l++;
        for (; o < R.length && !R[o].includes("DetermineComponentFrameRoot"); )
          o++;
        if (l === _.length || o === R.length)
          for (
            l = _.length - 1, o = R.length - 1;
            1 <= l && 0 <= o && _[l] !== R[o];

          )
            o--;
        for (; 1 <= l && 0 <= o; l--, o--)
          if (_[l] !== R[o]) {
            if (l !== 1 || o !== 1)
              do
                if ((l--, o--, 0 > o || _[l] !== R[o])) {
                  var P =
                    `
` + _[l].replace(" at new ", " at ");
                  return (
                    t.displayName &&
                      P.includes("<anonymous>") &&
                      (P = P.replace("<anonymous>", t.displayName)),
                    P
                  );
                }
              while (1 <= l && 0 <= o);
            break;
          }
      }
    } finally {
      (Vl = !1), (Error.prepareStackTrace = a);
    }
    return (a = t ? t.displayName || t.name : "") ? Na(a) : "";
  }
  function wf(t) {
    switch (t.tag) {
      case 26:
      case 27:
      case 5:
        return Na(t.type);
      case 16:
        return Na("Lazy");
      case 13:
        return Na("Suspense");
      case 19:
        return Na("SuspenseList");
      case 0:
      case 15:
        return ts(t.type, !1);
      case 11:
        return ts(t.type.render, !1);
      case 1:
        return ts(t.type, !0);
      case 31:
        return Na("Activity");
      default:
        return "";
    }
  }
  function Po(t) {
    try {
      var e = "";
      do (e += wf(t)), (t = t.return);
      while (t);
      return e;
    } catch (a) {
      return (
        `
Error generating stack: ` +
        a.message +
        `
` +
        a.stack
      );
    }
  }
  function Ye(t) {
    switch (typeof t) {
      case "bigint":
      case "boolean":
      case "number":
      case "string":
      case "undefined":
        return t;
      case "object":
        return t;
      default:
        return "";
    }
  }
  function Go(t) {
    var e = t.type;
    return (
      (t = t.nodeName) &&
      t.toLowerCase() === "input" &&
      (e === "checkbox" || e === "radio")
    );
  }
  function Ef(t) {
    var e = Go(t) ? "checked" : "value",
      a = Object.getOwnPropertyDescriptor(t.constructor.prototype, e),
      l = "" + t[e];
    if (
      !t.hasOwnProperty(e) &&
      typeof a < "u" &&
      typeof a.get == "function" &&
      typeof a.set == "function"
    ) {
      var o = a.get,
        u = a.set;
      return (
        Object.defineProperty(t, e, {
          configurable: !0,
          get: function () {
            return o.call(this);
          },
          set: function (h) {
            (l = "" + h), u.call(this, h);
          },
        }),
        Object.defineProperty(t, e, { enumerable: a.enumerable }),
        {
          getValue: function () {
            return l;
          },
          setValue: function (h) {
            l = "" + h;
          },
          stopTracking: function () {
            (t._valueTracker = null), delete t[e];
          },
        }
      );
    }
  }
  function Yl(t) {
    t._valueTracker || (t._valueTracker = Ef(t));
  }
  function Ko(t) {
    if (!t) return !1;
    var e = t._valueTracker;
    if (!e) return !0;
    var a = e.getValue(),
      l = "";
    return (
      t && (l = Go(t) ? (t.checked ? "true" : "false") : t.value),
      (t = l),
      t !== a ? (e.setValue(t), !0) : !1
    );
  }
  function kn(t) {
    if (
      ((t = t || (typeof document < "u" ? document : void 0)), typeof t > "u")
    )
      return null;
    try {
      return t.activeElement || t.body;
    } catch {
      return t.body;
    }
  }
  var _f = /[\n"\\]/g;
  function rn(t) {
    return t.replace(_f, function (e) {
      return "\\" + e.charCodeAt(0).toString(16) + " ";
    });
  }
  function Da(t, e, a, l, o, u, h, v) {
    (t.name = ""),
      h != null &&
      typeof h != "function" &&
      typeof h != "symbol" &&
      typeof h != "boolean"
        ? (t.type = h)
        : t.removeAttribute("type"),
      e != null
        ? h === "number"
          ? ((e === 0 && t.value === "") || t.value != e) &&
            (t.value = "" + Ye(e))
          : t.value !== "" + Ye(e) && (t.value = "" + Ye(e))
        : (h !== "submit" && h !== "reset") || t.removeAttribute("value"),
      e != null
        ? es(t, h, Ye(e))
        : a != null
        ? es(t, h, Ye(a))
        : l != null && t.removeAttribute("value"),
      o == null && u != null && (t.defaultChecked = !!u),
      o != null &&
        (t.checked = o && typeof o != "function" && typeof o != "symbol"),
      v != null &&
      typeof v != "function" &&
      typeof v != "symbol" &&
      typeof v != "boolean"
        ? (t.name = "" + Ye(v))
        : t.removeAttribute("name");
  }
  function Xo(t, e, a, l, o, u, h, v) {
    if (
      (u != null &&
        typeof u != "function" &&
        typeof u != "symbol" &&
        typeof u != "boolean" &&
        (t.type = u),
      e != null || a != null)
    ) {
      if (!((u !== "submit" && u !== "reset") || e != null)) return;
      (a = a != null ? "" + Ye(a) : ""),
        (e = e != null ? "" + Ye(e) : a),
        v || e === t.value || (t.value = e),
        (t.defaultValue = e);
    }
    (l = l ?? o),
      (l = typeof l != "function" && typeof l != "symbol" && !!l),
      (t.checked = v ? t.checked : !!l),
      (t.defaultChecked = !!l),
      h != null &&
        typeof h != "function" &&
        typeof h != "symbol" &&
        typeof h != "boolean" &&
        (t.name = h);
  }
  function es(t, e, a) {
    (e === "number" && kn(t.ownerDocument) === t) ||
      t.defaultValue === "" + a ||
      (t.defaultValue = "" + a);
  }
  function oi(t, e, a, l) {
    if (((t = t.options), e)) {
      e = {};
      for (var o = 0; o < a.length; o++) e["$" + a[o]] = !0;
      for (a = 0; a < t.length; a++)
        (o = e.hasOwnProperty("$" + t[a].value)),
          t[a].selected !== o && (t[a].selected = o),
          o && l && (t[a].defaultSelected = !0);
    } else {
      for (a = "" + Ye(a), e = null, o = 0; o < t.length; o++) {
        if (t[o].value === a) {
          (t[o].selected = !0), l && (t[o].defaultSelected = !0);
          return;
        }
        e !== null || t[o].disabled || (e = t[o]);
      }
      e !== null && (e.selected = !0);
    }
  }
  function Qo(t, e, a) {
    if (
      e != null &&
      ((e = "" + Ye(e)), e !== t.value && (t.value = e), a == null)
    ) {
      t.defaultValue !== e && (t.defaultValue = e);
      return;
    }
    t.defaultValue = a != null ? "" + Ye(a) : "";
  }
  function Zo(t, e, a, l) {
    if (e == null) {
      if (l != null) {
        if (a != null) throw Error(s(92));
        if (Gt(l)) {
          if (1 < l.length) throw Error(s(93));
          l = l[0];
        }
        a = l;
      }
      a == null && (a = ""), (e = a);
    }
    (a = Ye(e)),
      (t.defaultValue = a),
      (l = t.textContent),
      l === a && l !== "" && l !== null && (t.value = l);
  }
  function ui(t, e) {
    if (e) {
      var a = t.firstChild;
      if (a && a === t.lastChild && a.nodeType === 3) {
        a.nodeValue = e;
        return;
      }
    }
    t.textContent = e;
  }
  var ns = new Set(
    "animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(
      " "
    )
  );
  function Ra(t, e, a) {
    var l = e.indexOf("--") === 0;
    a == null || typeof a == "boolean" || a === ""
      ? l
        ? t.setProperty(e, "")
        : e === "float"
        ? (t.cssFloat = "")
        : (t[e] = "")
      : l
      ? t.setProperty(e, a)
      : typeof a != "number" || a === 0 || ns.has(e)
      ? e === "float"
        ? (t.cssFloat = a)
        : (t[e] = ("" + a).trim())
      : (t[e] = a + "px");
  }
  function Yi(t, e, a) {
    if (e != null && typeof e != "object") throw Error(s(62));
    if (((t = t.style), a != null)) {
      for (var l in a)
        !a.hasOwnProperty(l) ||
          (e != null && e.hasOwnProperty(l)) ||
          (l.indexOf("--") === 0
            ? t.setProperty(l, "")
            : l === "float"
            ? (t.cssFloat = "")
            : (t[l] = ""));
      for (var o in e)
        (l = e[o]), e.hasOwnProperty(o) && a[o] !== l && Ra(t, o, l);
    } else for (var u in e) e.hasOwnProperty(u) && Ra(t, u, e[u]);
  }
  function as(t) {
    if (t.indexOf("-") === -1) return !1;
    switch (t) {
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
  var Sf = new Map([
      ["acceptCharset", "accept-charset"],
      ["htmlFor", "for"],
      ["httpEquiv", "http-equiv"],
      ["crossOrigin", "crossorigin"],
      ["accentHeight", "accent-height"],
      ["alignmentBaseline", "alignment-baseline"],
      ["arabicForm", "arabic-form"],
      ["baselineShift", "baseline-shift"],
      ["capHeight", "cap-height"],
      ["clipPath", "clip-path"],
      ["clipRule", "clip-rule"],
      ["colorInterpolation", "color-interpolation"],
      ["colorInterpolationFilters", "color-interpolation-filters"],
      ["colorProfile", "color-profile"],
      ["colorRendering", "color-rendering"],
      ["dominantBaseline", "dominant-baseline"],
      ["enableBackground", "enable-background"],
      ["fillOpacity", "fill-opacity"],
      ["fillRule", "fill-rule"],
      ["floodColor", "flood-color"],
      ["floodOpacity", "flood-opacity"],
      ["fontFamily", "font-family"],
      ["fontSize", "font-size"],
      ["fontSizeAdjust", "font-size-adjust"],
      ["fontStretch", "font-stretch"],
      ["fontStyle", "font-style"],
      ["fontVariant", "font-variant"],
      ["fontWeight", "font-weight"],
      ["glyphName", "glyph-name"],
      ["glyphOrientationHorizontal", "glyph-orientation-horizontal"],
      ["glyphOrientationVertical", "glyph-orientation-vertical"],
      ["horizAdvX", "horiz-adv-x"],
      ["horizOriginX", "horiz-origin-x"],
      ["imageRendering", "image-rendering"],
      ["letterSpacing", "letter-spacing"],
      ["lightingColor", "lighting-color"],
      ["markerEnd", "marker-end"],
      ["markerMid", "marker-mid"],
      ["markerStart", "marker-start"],
      ["overlinePosition", "overline-position"],
      ["overlineThickness", "overline-thickness"],
      ["paintOrder", "paint-order"],
      ["panose-1", "panose-1"],
      ["pointerEvents", "pointer-events"],
      ["renderingIntent", "rendering-intent"],
      ["shapeRendering", "shape-rendering"],
      ["stopColor", "stop-color"],
      ["stopOpacity", "stop-opacity"],
      ["strikethroughPosition", "strikethrough-position"],
      ["strikethroughThickness", "strikethrough-thickness"],
      ["strokeDasharray", "stroke-dasharray"],
      ["strokeDashoffset", "stroke-dashoffset"],
      ["strokeLinecap", "stroke-linecap"],
      ["strokeLinejoin", "stroke-linejoin"],
      ["strokeMiterlimit", "stroke-miterlimit"],
      ["strokeOpacity", "stroke-opacity"],
      ["strokeWidth", "stroke-width"],
      ["textAnchor", "text-anchor"],
      ["textDecoration", "text-decoration"],
      ["textRendering", "text-rendering"],
      ["transformOrigin", "transform-origin"],
      ["underlinePosition", "underline-position"],
      ["underlineThickness", "underline-thickness"],
      ["unicodeBidi", "unicode-bidi"],
      ["unicodeRange", "unicode-range"],
      ["unitsPerEm", "units-per-em"],
      ["vAlphabetic", "v-alphabetic"],
      ["vHanging", "v-hanging"],
      ["vIdeographic", "v-ideographic"],
      ["vMathematical", "v-mathematical"],
      ["vectorEffect", "vector-effect"],
      ["vertAdvY", "vert-adv-y"],
      ["vertOriginX", "vert-origin-x"],
      ["vertOriginY", "vert-origin-y"],
      ["wordSpacing", "word-spacing"],
      ["writingMode", "writing-mode"],
      ["xmlnsXlink", "xmlns:xlink"],
      ["xHeight", "x-height"],
    ]),
    Af =
      /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
  function Pl(t) {
    return Af.test("" + t)
      ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')"
      : t;
  }
  var is = null;
  function ls(t) {
    return (
      (t = t.target || t.srcElement || window),
      t.correspondingUseElement && (t = t.correspondingUseElement),
      t.nodeType === 3 ? t.parentNode : t
    );
  }
  var aa = null,
    ci = null;
  function Io(t) {
    var e = ln(t);
    if (e && (t = e.stateNode)) {
      var a = t[Oe] || null;
      t: switch (((t = e.stateNode), e.type)) {
        case "input":
          if (
            (Da(
              t,
              a.value,
              a.defaultValue,
              a.defaultValue,
              a.checked,
              a.defaultChecked,
              a.type,
              a.name
            ),
            (e = a.name),
            a.type === "radio" && e != null)
          ) {
            for (a = t; a.parentNode; ) a = a.parentNode;
            for (
              a = a.querySelectorAll(
                'input[name="' + rn("" + e) + '"][type="radio"]'
              ),
                e = 0;
              e < a.length;
              e++
            ) {
              var l = a[e];
              if (l !== t && l.form === t.form) {
                var o = l[Oe] || null;
                if (!o) throw Error(s(90));
                Da(
                  l,
                  o.value,
                  o.defaultValue,
                  o.defaultValue,
                  o.checked,
                  o.defaultChecked,
                  o.type,
                  o.name
                );
              }
            }
            for (e = 0; e < a.length; e++)
              (l = a[e]), l.form === t.form && Ko(l);
          }
          break t;
        case "textarea":
          Qo(t, a.value, a.defaultValue);
          break t;
        case "select":
          (e = a.value), e != null && oi(t, !!a.multiple, e, !1);
      }
    }
  }
  var ia = !1;
  function rs(t, e, a) {
    if (ia) return t(e, a);
    ia = !0;
    try {
      var l = t(e);
      return l;
    } finally {
      if (
        ((ia = !1),
        (aa !== null || ci !== null) &&
          (ac(), aa && ((e = aa), (t = ci), (ci = aa = null), Io(e), t)))
      )
        for (e = 0; e < t.length; e++) Io(t[e]);
    }
  }
  function Gl(t, e) {
    var a = t.stateNode;
    if (a === null) return null;
    var l = a[Oe] || null;
    if (l === null) return null;
    a = l[e];
    t: switch (e) {
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
        (l = !l.disabled) ||
          ((t = t.type),
          (l = !(
            t === "button" ||
            t === "input" ||
            t === "select" ||
            t === "textarea"
          ))),
          (t = !l);
        break t;
      default:
        t = !1;
    }
    if (t) return null;
    if (a && typeof a != "function") throw Error(s(231, e, typeof a));
    return a;
  }
  var we = !(
      typeof window > "u" ||
      typeof window.document > "u" ||
      typeof window.document.createElement > "u"
    ),
    Pi = !1;
  if (we)
    try {
      var Gi = {};
      Object.defineProperty(Gi, "passive", {
        get: function () {
          Pi = !0;
        },
      }),
        window.addEventListener("test", Gi, Gi),
        window.removeEventListener("test", Gi, Gi);
    } catch {
      Pi = !1;
    }
  var jn = null,
    ss = null,
    Ki = null;
  function Fo() {
    if (Ki) return Ki;
    var t,
      e = ss,
      a = e.length,
      l,
      o = "value" in jn ? jn.value : jn.textContent,
      u = o.length;
    for (t = 0; t < a && e[t] === o[t]; t++);
    var h = a - t;
    for (l = 1; l <= h && e[a - l] === o[u - l]; l++);
    return (Ki = o.slice(t, 1 < l ? 1 - l : void 0));
  }
  function Kl(t) {
    var e = t.keyCode;
    return (
      "charCode" in t
        ? ((t = t.charCode), t === 0 && e === 13 && (t = 13))
        : (t = e),
      t === 10 && (t = 13),
      32 <= t || t === 13 ? t : 0
    );
  }
  function Xl() {
    return !0;
  }
  function Jo() {
    return !1;
  }
  function Ce(t) {
    function e(a, l, o, u, h) {
      (this._reactName = a),
        (this._targetInst = o),
        (this.type = l),
        (this.nativeEvent = u),
        (this.target = h),
        (this.currentTarget = null);
      for (var v in t)
        t.hasOwnProperty(v) && ((a = t[v]), (this[v] = a ? a(u) : u[v]));
      return (
        (this.isDefaultPrevented = (
          u.defaultPrevented != null ? u.defaultPrevented : u.returnValue === !1
        )
          ? Xl
          : Jo),
        (this.isPropagationStopped = Jo),
        this
      );
    }
    return (
      w(e.prototype, {
        preventDefault: function () {
          this.defaultPrevented = !0;
          var a = this.nativeEvent;
          a &&
            (a.preventDefault
              ? a.preventDefault()
              : typeof a.returnValue != "unknown" && (a.returnValue = !1),
            (this.isDefaultPrevented = Xl));
        },
        stopPropagation: function () {
          var a = this.nativeEvent;
          a &&
            (a.stopPropagation
              ? a.stopPropagation()
              : typeof a.cancelBubble != "unknown" && (a.cancelBubble = !0),
            (this.isPropagationStopped = Xl));
        },
        persist: function () {},
        isPersistent: Xl,
      }),
      e
    );
  }
  var la = {
      eventPhase: 0,
      bubbles: 0,
      cancelable: 0,
      timeStamp: function (t) {
        return t.timeStamp || Date.now();
      },
      defaultPrevented: 0,
      isTrusted: 0,
    },
    Xi = Ce(la),
    Qi = w({}, la, { view: 0, detail: 0 }),
    fi = Ce(Qi),
    os,
    us,
    Zi,
    Ql = w({}, Qi, {
      screenX: 0,
      screenY: 0,
      clientX: 0,
      clientY: 0,
      pageX: 0,
      pageY: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      getModifierState: fs,
      button: 0,
      buttons: 0,
      relatedTarget: function (t) {
        return t.relatedTarget === void 0
          ? t.fromElement === t.srcElement
            ? t.toElement
            : t.fromElement
          : t.relatedTarget;
      },
      movementX: function (t) {
        return "movementX" in t
          ? t.movementX
          : (t !== Zi &&
              (Zi && t.type === "mousemove"
                ? ((os = t.screenX - Zi.screenX), (us = t.screenY - Zi.screenY))
                : (us = os = 0),
              (Zi = t)),
            os);
      },
      movementY: function (t) {
        return "movementY" in t ? t.movementY : us;
      },
    }),
    Wo = Ce(Ql),
    Ma = w({}, Ql, { dataTransfer: 0 }),
    Tf = Ce(Ma),
    Zl = w({}, Qi, { relatedTarget: 0 }),
    cs = Ce(Zl),
    xf = w({}, la, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
    Of = Ce(xf),
    Cf = w({}, la, {
      clipboardData: function (t) {
        return "clipboardData" in t ? t.clipboardData : window.clipboardData;
      },
    }),
    Nf = Ce(Cf),
    Df = w({}, la, { data: 0 }),
    tu = Ce(Df),
    Rf = {
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
      MozPrintableKey: "Unidentified",
    },
    Mf = {
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
      224: "Meta",
    },
    Lf = {
      Alt: "altKey",
      Control: "ctrlKey",
      Meta: "metaKey",
      Shift: "shiftKey",
    };
  function Bf(t) {
    var e = this.nativeEvent;
    return e.getModifierState
      ? e.getModifierState(t)
      : (t = Lf[t])
      ? !!e[t]
      : !1;
  }
  function fs() {
    return Bf;
  }
  var zf = w({}, Qi, {
      key: function (t) {
        if (t.key) {
          var e = Rf[t.key] || t.key;
          if (e !== "Unidentified") return e;
        }
        return t.type === "keypress"
          ? ((t = Kl(t)), t === 13 ? "Enter" : String.fromCharCode(t))
          : t.type === "keydown" || t.type === "keyup"
          ? Mf[t.keyCode] || "Unidentified"
          : "";
      },
      code: 0,
      location: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      repeat: 0,
      locale: 0,
      getModifierState: fs,
      charCode: function (t) {
        return t.type === "keypress" ? Kl(t) : 0;
      },
      keyCode: function (t) {
        return t.type === "keydown" || t.type === "keyup" ? t.keyCode : 0;
      },
      which: function (t) {
        return t.type === "keypress"
          ? Kl(t)
          : t.type === "keydown" || t.type === "keyup"
          ? t.keyCode
          : 0;
      },
    }),
    sn = Ce(zf),
    eu = w({}, Ql, {
      pointerId: 0,
      width: 0,
      height: 0,
      pressure: 0,
      tangentialPressure: 0,
      tiltX: 0,
      tiltY: 0,
      twist: 0,
      pointerType: 0,
      isPrimary: 0,
    }),
    nu = Ce(eu),
    au = w({}, Qi, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: fs,
    }),
    iu = Ce(au),
    Hf = w({}, la, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
    kf = Ce(Hf),
    lu = w({}, Ql, {
      deltaX: function (t) {
        return "deltaX" in t
          ? t.deltaX
          : "wheelDeltaX" in t
          ? -t.wheelDeltaX
          : 0;
      },
      deltaY: function (t) {
        return "deltaY" in t
          ? t.deltaY
          : "wheelDeltaY" in t
          ? -t.wheelDeltaY
          : "wheelDelta" in t
          ? -t.wheelDelta
          : 0;
      },
      deltaZ: 0,
      deltaMode: 0,
    }),
    jf = Ce(lu),
    wm = w({}, la, { newState: 0, oldState: 0 }),
    Il = Ce(wm),
    Uf = [9, 13, 27, 32],
    ds = we && "CompositionEvent" in window,
    Ii = null;
  we && "documentMode" in document && (Ii = document.documentMode);
  var $f = we && "TextEvent" in window && !Ii,
    hs = we && (!ds || (Ii && 8 < Ii && 11 >= Ii)),
    ru = " ",
    su = !1;
  function ms(t, e) {
    switch (t) {
      case "keyup":
        return Uf.indexOf(e.keyCode) !== -1;
      case "keydown":
        return e.keyCode !== 229;
      case "keypress":
      case "mousedown":
      case "focusout":
        return !0;
      default:
        return !1;
    }
  }
  function ps(t) {
    return (t = t.detail), typeof t == "object" && "data" in t ? t.data : null;
  }
  var La = !1;
  function Fl(t, e) {
    switch (t) {
      case "compositionend":
        return ps(e);
      case "keypress":
        return e.which !== 32 ? null : ((su = !0), ru);
      case "textInput":
        return (t = e.data), t === ru && su ? null : t;
      default:
        return null;
    }
  }
  function ou(t, e) {
    if (La)
      return t === "compositionend" || (!ds && ms(t, e))
        ? ((t = Fo()), (Ki = ss = jn = null), (La = !1), t)
        : null;
    switch (t) {
      case "paste":
        return null;
      case "keypress":
        if (!(e.ctrlKey || e.altKey || e.metaKey) || (e.ctrlKey && e.altKey)) {
          if (e.char && 1 < e.char.length) return e.char;
          if (e.which) return String.fromCharCode(e.which);
        }
        return null;
      case "compositionend":
        return hs && e.locale !== "ko" ? null : e.data;
      default:
        return null;
    }
  }
  var gs = {
    color: !0,
    date: !0,
    datetime: !0,
    "datetime-local": !0,
    email: !0,
    month: !0,
    number: !0,
    password: !0,
    range: !0,
    search: !0,
    tel: !0,
    text: !0,
    time: !0,
    url: !0,
    week: !0,
  };
  function uu(t) {
    var e = t && t.nodeName && t.nodeName.toLowerCase();
    return e === "input" ? !!gs[t.type] : e === "textarea";
  }
  function qf(t, e, a, l) {
    aa ? (ci ? ci.push(l) : (ci = [l])) : (aa = l),
      (e = uc(e, "onChange")),
      0 < e.length &&
        ((a = new Xi("onChange", "change", null, a, l)),
        t.push({ event: a, listeners: e }));
  }
  var de = null,
    Fi = null;
  function Vf(t) {
    yg(t, 0);
  }
  function Jl(t) {
    var e = na(t);
    if (Ko(e)) return t;
  }
  function cu(t, e) {
    if (t === "change") return e;
  }
  var vs = !1;
  if (we) {
    var Wl;
    if (we) {
      var bs = "oninput" in document;
      if (!bs) {
        var fu = document.createElement("div");
        fu.setAttribute("oninput", "return;"),
          (bs = typeof fu.oninput == "function");
      }
      Wl = bs;
    } else Wl = !1;
    vs = Wl && (!document.documentMode || 9 < document.documentMode);
  }
  function du() {
    de && (de.detachEvent("onpropertychange", hu), (Fi = de = null));
  }
  function hu(t) {
    if (t.propertyName === "value" && Jl(Fi)) {
      var e = [];
      qf(e, Fi, t, ls(t)), rs(Vf, e);
    }
  }
  function Yf(t, e, a) {
    t === "focusin"
      ? (du(), (de = e), (Fi = a), de.attachEvent("onpropertychange", hu))
      : t === "focusout" && du();
  }
  function Pf(t) {
    if (t === "selectionchange" || t === "keyup" || t === "keydown")
      return Jl(Fi);
  }
  function mu(t, e) {
    if (t === "click") return Jl(e);
  }
  function Gf(t, e) {
    if (t === "input" || t === "change") return Jl(e);
  }
  function pu(t, e) {
    return (t === e && (t !== 0 || 1 / t === 1 / e)) || (t !== t && e !== e);
  }
  var Ee = typeof Object.is == "function" ? Object.is : pu;
  function Ji(t, e) {
    if (Ee(t, e)) return !0;
    if (
      typeof t != "object" ||
      t === null ||
      typeof e != "object" ||
      e === null
    )
      return !1;
    var a = Object.keys(t),
      l = Object.keys(e);
    if (a.length !== l.length) return !1;
    for (l = 0; l < a.length; l++) {
      var o = a[l];
      if (!Sa.call(e, o) || !Ee(t[o], e[o])) return !1;
    }
    return !0;
  }
  function gu(t) {
    for (; t && t.firstChild; ) t = t.firstChild;
    return t;
  }
  function vu(t, e) {
    var a = gu(t);
    t = 0;
    for (var l; a; ) {
      if (a.nodeType === 3) {
        if (((l = t + a.textContent.length), t <= e && l >= e))
          return { node: a, offset: e - t };
        t = l;
      }
      t: {
        for (; a; ) {
          if (a.nextSibling) {
            a = a.nextSibling;
            break t;
          }
          a = a.parentNode;
        }
        a = void 0;
      }
      a = gu(a);
    }
  }
  function bu(t, e) {
    return t && e
      ? t === e
        ? !0
        : t && t.nodeType === 3
        ? !1
        : e && e.nodeType === 3
        ? bu(t, e.parentNode)
        : "contains" in t
        ? t.contains(e)
        : t.compareDocumentPosition
        ? !!(t.compareDocumentPosition(e) & 16)
        : !1
      : !1;
  }
  function yu(t) {
    t =
      t != null &&
      t.ownerDocument != null &&
      t.ownerDocument.defaultView != null
        ? t.ownerDocument.defaultView
        : window;
    for (var e = kn(t.document); e instanceof t.HTMLIFrameElement; ) {
      try {
        var a = typeof e.contentWindow.location.href == "string";
      } catch {
        a = !1;
      }
      if (a) t = e.contentWindow;
      else break;
      e = kn(t.document);
    }
    return e;
  }
  function ys(t) {
    var e = t && t.nodeName && t.nodeName.toLowerCase();
    return (
      e &&
      ((e === "input" &&
        (t.type === "text" ||
          t.type === "search" ||
          t.type === "tel" ||
          t.type === "url" ||
          t.type === "password")) ||
        e === "textarea" ||
        t.contentEditable === "true")
    );
  }
  var Ba = we && "documentMode" in document && 11 >= document.documentMode,
    di = null,
    wu = null,
    ze = null,
    tr = !1;
  function Eu(t, e, a) {
    var l =
      a.window === a ? a.document : a.nodeType === 9 ? a : a.ownerDocument;
    tr ||
      di == null ||
      di !== kn(l) ||
      ((l = di),
      "selectionStart" in l && ys(l)
        ? (l = { start: l.selectionStart, end: l.selectionEnd })
        : ((l = (
            (l.ownerDocument && l.ownerDocument.defaultView) ||
            window
          ).getSelection()),
          (l = {
            anchorNode: l.anchorNode,
            anchorOffset: l.anchorOffset,
            focusNode: l.focusNode,
            focusOffset: l.focusOffset,
          })),
      (ze && Ji(ze, l)) ||
        ((ze = l),
        (l = uc(wu, "onSelect")),
        0 < l.length &&
          ((e = new Xi("onSelect", "select", null, e, a)),
          t.push({ event: e, listeners: l }),
          (e.target = di))));
  }
  function za(t, e) {
    var a = {};
    return (
      (a[t.toLowerCase()] = e.toLowerCase()),
      (a["Webkit" + t] = "webkit" + e),
      (a["Moz" + t] = "moz" + e),
      a
    );
  }
  var Ha = {
      animationend: za("Animation", "AnimationEnd"),
      animationiteration: za("Animation", "AnimationIteration"),
      animationstart: za("Animation", "AnimationStart"),
      transitionrun: za("Transition", "TransitionRun"),
      transitionstart: za("Transition", "TransitionStart"),
      transitioncancel: za("Transition", "TransitionCancel"),
      transitionend: za("Transition", "TransitionEnd"),
    },
    er = {},
    ws = {};
  we &&
    ((ws = document.createElement("div").style),
    "AnimationEvent" in window ||
      (delete Ha.animationend.animation,
      delete Ha.animationiteration.animation,
      delete Ha.animationstart.animation),
    "TransitionEvent" in window || delete Ha.transitionend.transition);
  function ka(t) {
    if (er[t]) return er[t];
    if (!Ha[t]) return t;
    var e = Ha[t],
      a;
    for (a in e) if (e.hasOwnProperty(a) && a in ws) return (er[t] = e[a]);
    return t;
  }
  var Es = ka("animationend"),
    _u = ka("animationiteration"),
    Su = ka("animationstart"),
    Kf = ka("transitionrun"),
    Au = ka("transitionstart"),
    Tu = ka("transitioncancel"),
    xu = ka("transitionend"),
    Ou = new Map(),
    _s =
      "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
        " "
      );
  _s.push("scrollEnd");
  function on(t, e) {
    Ou.set(t, e), Ca(e, [t]);
  }
  var Cu = new WeakMap();
  function Pe(t, e) {
    if (typeof t == "object" && t !== null) {
      var a = Cu.get(t);
      return a !== void 0
        ? a
        : ((e = { value: t, source: e, stack: Po(e) }), Cu.set(t, e), e);
    }
    return { value: t, source: e, stack: Po(e) };
  }
  var te = [],
    Wi = 0,
    nr = 0;
  function ar() {
    for (var t = Wi, e = (nr = Wi = 0); e < t; ) {
      var a = te[e];
      te[e++] = null;
      var l = te[e];
      te[e++] = null;
      var o = te[e];
      te[e++] = null;
      var u = te[e];
      if (((te[e++] = null), l !== null && o !== null)) {
        var h = l.pending;
        h === null ? (o.next = o) : ((o.next = h.next), (h.next = o)),
          (l.pending = o);
      }
      u !== 0 && Nu(a, o, u);
    }
  }
  function ir(t, e, a, l) {
    (te[Wi++] = t),
      (te[Wi++] = e),
      (te[Wi++] = a),
      (te[Wi++] = l),
      (nr |= l),
      (t.lanes |= l),
      (t = t.alternate),
      t !== null && (t.lanes |= l);
  }
  function Ss(t, e, a, l) {
    return ir(t, e, a, l), lr(t);
  }
  function hi(t, e) {
    return ir(t, null, null, e), lr(t);
  }
  function Nu(t, e, a) {
    t.lanes |= a;
    var l = t.alternate;
    l !== null && (l.lanes |= a);
    for (var o = !1, u = t.return; u !== null; )
      (u.childLanes |= a),
        (l = u.alternate),
        l !== null && (l.childLanes |= a),
        u.tag === 22 &&
          ((t = u.stateNode), t === null || t._visibility & 1 || (o = !0)),
        (t = u),
        (u = u.return);
    return t.tag === 3
      ? ((u = t.stateNode),
        o &&
          e !== null &&
          ((o = 31 - ue(a)),
          (t = u.hiddenUpdates),
          (l = t[o]),
          l === null ? (t[o] = [e]) : l.push(e),
          (e.lane = a | 536870912)),
        u)
      : null;
  }
  function lr(t) {
    if (50 < Js) throw ((Js = 0), (Ld = null), Error(s(185)));
    for (var e = t.return; e !== null; ) (t = e), (e = t.return);
    return t.tag === 3 ? t.stateNode : null;
  }
  var mi = {};
  function Xf(t, e, a, l) {
    (this.tag = t),
      (this.key = a),
      (this.sibling =
        this.child =
        this.return =
        this.stateNode =
        this.type =
        this.elementType =
          null),
      (this.index = 0),
      (this.refCleanup = this.ref = null),
      (this.pendingProps = e),
      (this.dependencies =
        this.memoizedState =
        this.updateQueue =
        this.memoizedProps =
          null),
      (this.mode = l),
      (this.subtreeFlags = this.flags = 0),
      (this.deletions = null),
      (this.childLanes = this.lanes = 0),
      (this.alternate = null);
  }
  function He(t, e, a, l) {
    return new Xf(t, e, a, l);
  }
  function As(t) {
    return (t = t.prototype), !(!t || !t.isReactComponent);
  }
  function Un(t, e) {
    var a = t.alternate;
    return (
      a === null
        ? ((a = He(t.tag, e, t.key, t.mode)),
          (a.elementType = t.elementType),
          (a.type = t.type),
          (a.stateNode = t.stateNode),
          (a.alternate = t),
          (t.alternate = a))
        : ((a.pendingProps = e),
          (a.type = t.type),
          (a.flags = 0),
          (a.subtreeFlags = 0),
          (a.deletions = null)),
      (a.flags = t.flags & 65011712),
      (a.childLanes = t.childLanes),
      (a.lanes = t.lanes),
      (a.child = t.child),
      (a.memoizedProps = t.memoizedProps),
      (a.memoizedState = t.memoizedState),
      (a.updateQueue = t.updateQueue),
      (e = t.dependencies),
      (a.dependencies =
        e === null ? null : { lanes: e.lanes, firstContext: e.firstContext }),
      (a.sibling = t.sibling),
      (a.index = t.index),
      (a.ref = t.ref),
      (a.refCleanup = t.refCleanup),
      a
    );
  }
  function rr(t, e) {
    t.flags &= 65011714;
    var a = t.alternate;
    return (
      a === null
        ? ((t.childLanes = 0),
          (t.lanes = e),
          (t.child = null),
          (t.subtreeFlags = 0),
          (t.memoizedProps = null),
          (t.memoizedState = null),
          (t.updateQueue = null),
          (t.dependencies = null),
          (t.stateNode = null))
        : ((t.childLanes = a.childLanes),
          (t.lanes = a.lanes),
          (t.child = a.child),
          (t.subtreeFlags = 0),
          (t.deletions = null),
          (t.memoizedProps = a.memoizedProps),
          (t.memoizedState = a.memoizedState),
          (t.updateQueue = a.updateQueue),
          (t.type = a.type),
          (e = a.dependencies),
          (t.dependencies =
            e === null
              ? null
              : { lanes: e.lanes, firstContext: e.firstContext })),
      t
    );
  }
  function sr(t, e, a, l, o, u) {
    var h = 0;
    if (((l = t), typeof t == "function")) As(t) && (h = 1);
    else if (typeof t == "string")
      h = nw(t, a, st.current)
        ? 26
        : t === "html" || t === "head" || t === "body"
        ? 27
        : 5;
    else
      t: switch (t) {
        case ot:
          return (t = He(31, a, e, o)), (t.elementType = ot), (t.lanes = u), t;
        case x:
          return _n(a.children, o, u, e);
        case z:
          (h = 8), (o |= 24);
          break;
        case M:
          return (
            (t = He(12, a, e, o | 2)), (t.elementType = M), (t.lanes = u), t
          );
        case Z:
          return (t = He(13, a, e, o)), (t.elementType = Z), (t.lanes = u), t;
        case rt:
          return (t = He(19, a, e, o)), (t.elementType = rt), (t.lanes = u), t;
        default:
          if (typeof t == "object" && t !== null)
            switch (t.$$typeof) {
              case L:
              case J:
                h = 10;
                break t;
              case I:
                h = 9;
                break t;
              case et:
                h = 11;
                break t;
              case ut:
                h = 14;
                break t;
              case bt:
                (h = 16), (l = null);
                break t;
            }
          (h = 29),
            (a = Error(s(130, t === null ? "null" : typeof t, ""))),
            (l = null);
      }
    return (
      (e = He(h, a, e, o)), (e.elementType = t), (e.type = l), (e.lanes = u), e
    );
  }
  function _n(t, e, a, l) {
    return (t = He(7, t, l, e)), (t.lanes = a), t;
  }
  function Ts(t, e, a) {
    return (t = He(6, t, null, e)), (t.lanes = a), t;
  }
  function or(t, e, a) {
    return (
      (e = He(4, t.children !== null ? t.children : [], t.key, e)),
      (e.lanes = a),
      (e.stateNode = {
        containerInfo: t.containerInfo,
        pendingChildren: null,
        implementation: t.implementation,
      }),
      e
    );
  }
  var ja = [],
    Sn = 0,
    pi = null,
    gi = 0,
    Ge = [],
    Ke = 0,
    Ua = null,
    $n = 1,
    qn = "";
  function $a(t, e) {
    (ja[Sn++] = gi), (ja[Sn++] = pi), (pi = t), (gi = e);
  }
  function Du(t, e, a) {
    (Ge[Ke++] = $n), (Ge[Ke++] = qn), (Ge[Ke++] = Ua), (Ua = t);
    var l = $n;
    t = qn;
    var o = 32 - ue(l) - 1;
    (l &= ~(1 << o)), (a += 1);
    var u = 32 - ue(e) + o;
    if (30 < u) {
      var h = o - (o % 5);
      (u = (l & ((1 << h) - 1)).toString(32)),
        (l >>= h),
        (o -= h),
        ($n = (1 << (32 - ue(e) + o)) | (a << o) | l),
        (qn = u + t);
    } else ($n = (1 << u) | (a << o) | l), (qn = t);
  }
  function xs(t) {
    t.return !== null && ($a(t, 1), Du(t, 1, 0));
  }
  function Os(t) {
    for (; t === pi; )
      (pi = ja[--Sn]), (ja[Sn] = null), (gi = ja[--Sn]), (ja[Sn] = null);
    for (; t === Ua; )
      (Ua = Ge[--Ke]),
        (Ge[Ke] = null),
        (qn = Ge[--Ke]),
        (Ge[Ke] = null),
        ($n = Ge[--Ke]),
        (Ge[Ke] = null);
  }
  var _e = null,
    Zt = null,
    Mt = !1,
    qa = null,
    An = !1,
    Vn = Error(s(519));
  function Va(t) {
    var e = Error(s(418, ""));
    throw (al(Pe(e, t)), Vn);
  }
  function Ru(t) {
    var e = t.stateNode,
      a = t.type,
      l = t.memoizedProps;
    switch (((e[ie] = t), (e[Oe] = l), a)) {
      case "dialog":
        Nt("cancel", e), Nt("close", e);
        break;
      case "iframe":
      case "object":
      case "embed":
        Nt("load", e);
        break;
      case "video":
      case "audio":
        for (a = 0; a < to.length; a++) Nt(to[a], e);
        break;
      case "source":
        Nt("error", e);
        break;
      case "img":
      case "image":
      case "link":
        Nt("error", e), Nt("load", e);
        break;
      case "details":
        Nt("toggle", e);
        break;
      case "input":
        Nt("invalid", e),
          Xo(
            e,
            l.value,
            l.defaultValue,
            l.checked,
            l.defaultChecked,
            l.type,
            l.name,
            !0
          ),
          Yl(e);
        break;
      case "select":
        Nt("invalid", e);
        break;
      case "textarea":
        Nt("invalid", e), Zo(e, l.value, l.defaultValue, l.children), Yl(e);
    }
    (a = l.children),
      (typeof a != "string" && typeof a != "number" && typeof a != "bigint") ||
      e.textContent === "" + a ||
      l.suppressHydrationWarning === !0 ||
      Sg(e.textContent, a)
        ? (l.popover != null && (Nt("beforetoggle", e), Nt("toggle", e)),
          l.onScroll != null && Nt("scroll", e),
          l.onScrollEnd != null && Nt("scrollend", e),
          l.onClick != null && (e.onclick = cc),
          (e = !0))
        : (e = !1),
      e || Va(t);
  }
  function Mu(t) {
    for (_e = t.return; _e; )
      switch (_e.tag) {
        case 5:
        case 13:
          An = !1;
          return;
        case 27:
        case 3:
          An = !0;
          return;
        default:
          _e = _e.return;
      }
  }
  function tl(t) {
    if (t !== _e) return !1;
    if (!Mt) return Mu(t), (Mt = !0), !1;
    var e = t.tag,
      a;
    if (
      ((a = e !== 3 && e !== 27) &&
        ((a = e === 5) &&
          ((a = t.type),
          (a =
            !(a !== "form" && a !== "button") || Zd(t.type, t.memoizedProps))),
        (a = !a)),
      a && Zt && Va(t),
      Mu(t),
      e === 13)
    ) {
      if (((t = t.memoizedState), (t = t !== null ? t.dehydrated : null), !t))
        throw Error(s(317));
      t: {
        for (t = t.nextSibling, e = 0; t; ) {
          if (t.nodeType === 8)
            if (((a = t.data), a === "/$")) {
              if (e === 0) {
                Zt = In(t.nextSibling);
                break t;
              }
              e--;
            } else (a !== "$" && a !== "$!" && a !== "$?") || e++;
          t = t.nextSibling;
        }
        Zt = null;
      }
    } else
      e === 27
        ? ((e = Zt), Di(t.type) ? ((t = Wd), (Wd = null), (Zt = t)) : (Zt = e))
        : (Zt = _e ? In(t.stateNode.nextSibling) : null);
    return !0;
  }
  function el() {
    (Zt = _e = null), (Mt = !1);
  }
  function nl() {
    var t = qa;
    return (
      t !== null &&
        (Ie === null ? (Ie = t) : Ie.push.apply(Ie, t), (qa = null)),
      t
    );
  }
  function al(t) {
    qa === null ? (qa = [t]) : qa.push(t);
  }
  var Lu = X(null),
    Yn = null,
    Pn = null;
  function ra(t, e, a) {
    nt(Lu, e._currentValue), (e._currentValue = a);
  }
  function Tn(t) {
    (t._currentValue = Lu.current), at(Lu);
  }
  function Cs(t, e, a) {
    for (; t !== null; ) {
      var l = t.alternate;
      if (
        ((t.childLanes & e) !== e
          ? ((t.childLanes |= e), l !== null && (l.childLanes |= e))
          : l !== null && (l.childLanes & e) !== e && (l.childLanes |= e),
        t === a)
      )
        break;
      t = t.return;
    }
  }
  function Ns(t, e, a, l) {
    var o = t.child;
    for (o !== null && (o.return = t); o !== null; ) {
      var u = o.dependencies;
      if (u !== null) {
        var h = o.child;
        u = u.firstContext;
        t: for (; u !== null; ) {
          var v = u;
          u = o;
          for (var _ = 0; _ < e.length; _++)
            if (v.context === e[_]) {
              (u.lanes |= a),
                (v = u.alternate),
                v !== null && (v.lanes |= a),
                Cs(u.return, a, t),
                l || (h = null);
              break t;
            }
          u = v.next;
        }
      } else if (o.tag === 18) {
        if (((h = o.return), h === null)) throw Error(s(341));
        (h.lanes |= a),
          (u = h.alternate),
          u !== null && (u.lanes |= a),
          Cs(h, a, t),
          (h = null);
      } else h = o.child;
      if (h !== null) h.return = o;
      else
        for (h = o; h !== null; ) {
          if (h === t) {
            h = null;
            break;
          }
          if (((o = h.sibling), o !== null)) {
            (o.return = h.return), (h = o);
            break;
          }
          h = h.return;
        }
      o = h;
    }
  }
  function xn(t, e, a, l) {
    t = null;
    for (var o = e, u = !1; o !== null; ) {
      if (!u) {
        if ((o.flags & 524288) !== 0) u = !0;
        else if ((o.flags & 262144) !== 0) break;
      }
      if (o.tag === 10) {
        var h = o.alternate;
        if (h === null) throw Error(s(387));
        if (((h = h.memoizedProps), h !== null)) {
          var v = o.type;
          Ee(o.pendingProps.value, h.value) ||
            (t !== null ? t.push(v) : (t = [v]));
        }
      } else if (o === ae.current) {
        if (((h = o.alternate), h === null)) throw Error(s(387));
        h.memoizedState.memoizedState !== o.memoizedState.memoizedState &&
          (t !== null ? t.push(ro) : (t = [ro]));
      }
      o = o.return;
    }
    t !== null && Ns(e, t, a, l), (e.flags |= 262144);
  }
  function ur(t) {
    for (t = t.firstContext; t !== null; ) {
      if (!Ee(t.context._currentValue, t.memoizedValue)) return !0;
      t = t.next;
    }
    return !1;
  }
  function Gn(t) {
    (Yn = t),
      (Pn = null),
      (t = t.dependencies),
      t !== null && (t.firstContext = null);
  }
  function he(t) {
    return Qf(Yn, t);
  }
  function il(t, e) {
    return Yn === null && Gn(t), Qf(t, e);
  }
  function Qf(t, e) {
    var a = e._currentValue;
    if (((e = { context: e, memoizedValue: a, next: null }), Pn === null)) {
      if (t === null) throw Error(s(308));
      (Pn = e),
        (t.dependencies = { lanes: 0, firstContext: e }),
        (t.flags |= 524288);
    } else Pn = Pn.next = e;
    return a;
  }
  var Em =
      typeof AbortController < "u"
        ? AbortController
        : function () {
            var t = [],
              e = (this.signal = {
                aborted: !1,
                addEventListener: function (a, l) {
                  t.push(l);
                },
              });
            this.abort = function () {
              (e.aborted = !0),
                t.forEach(function (a) {
                  return a();
                });
            };
          },
    Zf = n.unstable_scheduleCallback,
    If = n.unstable_NormalPriority,
    le = {
      $$typeof: J,
      Consumer: null,
      Provider: null,
      _currentValue: null,
      _currentValue2: null,
      _threadCount: 0,
    };
  function Ds() {
    return { controller: new Em(), data: new Map(), refCount: 0 };
  }
  function ll(t) {
    t.refCount--,
      t.refCount === 0 &&
        Zf(If, function () {
          t.controller.abort();
        });
  }
  var Kn = null,
    Rs = 0,
    rl = 0,
    Xe = null;
  function Ff(t, e) {
    if (Kn === null) {
      var a = (Kn = []);
      (Rs = 0),
        (rl = $d()),
        (Xe = {
          status: "pending",
          value: void 0,
          then: function (l) {
            a.push(l);
          },
        });
    }
    return Rs++, e.then(Bu, Bu), e;
  }
  function Bu() {
    if (--Rs === 0 && Kn !== null) {
      Xe !== null && (Xe.status = "fulfilled");
      var t = Kn;
      (Kn = null), (rl = 0), (Xe = null);
      for (var e = 0; e < t.length; e++) (0, t[e])();
    }
  }
  function Jf(t, e) {
    var a = [],
      l = {
        status: "pending",
        value: null,
        reason: null,
        then: function (o) {
          a.push(o);
        },
      };
    return (
      t.then(
        function () {
          (l.status = "fulfilled"), (l.value = e);
          for (var o = 0; o < a.length; o++) (0, a[o])(e);
        },
        function (o) {
          for (l.status = "rejected", l.reason = o, o = 0; o < a.length; o++)
            (0, a[o])(void 0);
        }
      ),
      l
    );
  }
  var zu = U.S;
  U.S = function (t, e) {
    typeof e == "object" &&
      e !== null &&
      typeof e.then == "function" &&
      Ff(t, e),
      zu !== null && zu(t, e);
  };
  var Ya = X(null);
  function Ms() {
    var t = Ya.current;
    return t !== null ? t : Kt.pooledCache;
  }
  function cr(t, e) {
    e === null ? nt(Ya, Ya.current) : nt(Ya, e.pool);
  }
  function Hu() {
    var t = Ms();
    return t === null ? null : { parent: le._currentValue, pool: t };
  }
  var vi = Error(s(460)),
    ku = Error(s(474)),
    sl = Error(s(542)),
    ol = { then: function () {} };
  function Ls(t) {
    return (t = t.status), t === "fulfilled" || t === "rejected";
  }
  function On() {}
  function Bs(t, e, a) {
    switch (
      ((a = t[a]),
      a === void 0 ? t.push(e) : a !== e && (e.then(On, On), (e = a)),
      e.status)
    ) {
      case "fulfilled":
        return e.value;
      case "rejected":
        throw ((t = e.reason), zs(t), t);
      default:
        if (typeof e.status == "string") e.then(On, On);
        else {
          if (((t = Kt), t !== null && 100 < t.shellSuspendCounter))
            throw Error(s(482));
          (t = e),
            (t.status = "pending"),
            t.then(
              function (l) {
                if (e.status === "pending") {
                  var o = e;
                  (o.status = "fulfilled"), (o.value = l);
                }
              },
              function (l) {
                if (e.status === "pending") {
                  var o = e;
                  (o.status = "rejected"), (o.reason = l);
                }
              }
            );
        }
        switch (e.status) {
          case "fulfilled":
            return e.value;
          case "rejected":
            throw ((t = e.reason), zs(t), t);
        }
        throw ((Pa = e), vi);
    }
  }
  var Pa = null;
  function ju() {
    if (Pa === null) throw Error(s(459));
    var t = Pa;
    return (Pa = null), t;
  }
  function zs(t) {
    if (t === vi || t === sl) throw Error(s(483));
  }
  var sa = !1;
  function ul(t) {
    t.updateQueue = {
      baseState: t.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, lanes: 0, hiddenCallbacks: null },
      callbacks: null,
    };
  }
  function Hs(t, e) {
    (t = t.updateQueue),
      e.updateQueue === t &&
        (e.updateQueue = {
          baseState: t.baseState,
          firstBaseUpdate: t.firstBaseUpdate,
          lastBaseUpdate: t.lastBaseUpdate,
          shared: t.shared,
          callbacks: null,
        });
  }
  function oa(t) {
    return { lane: t, tag: 0, payload: null, callback: null, next: null };
  }
  function ua(t, e, a) {
    var l = t.updateQueue;
    if (l === null) return null;
    if (((l = l.shared), (jt & 2) !== 0)) {
      var o = l.pending;
      return (
        o === null ? (e.next = e) : ((e.next = o.next), (o.next = e)),
        (l.pending = e),
        (e = lr(t)),
        Nu(t, null, a),
        e
      );
    }
    return ir(t, l, e, a), lr(t);
  }
  function bi(t, e, a) {
    if (
      ((e = e.updateQueue), e !== null && ((e = e.shared), (a & 4194048) !== 0))
    ) {
      var l = e.lanes;
      (l &= t.pendingLanes), (a |= l), (e.lanes = a), Ho(t, a);
    }
  }
  function cl(t, e) {
    var a = t.updateQueue,
      l = t.alternate;
    if (l !== null && ((l = l.updateQueue), a === l)) {
      var o = null,
        u = null;
      if (((a = a.firstBaseUpdate), a !== null)) {
        do {
          var h = {
            lane: a.lane,
            tag: a.tag,
            payload: a.payload,
            callback: null,
            next: null,
          };
          u === null ? (o = u = h) : (u = u.next = h), (a = a.next);
        } while (a !== null);
        u === null ? (o = u = e) : (u = u.next = e);
      } else o = u = e;
      (a = {
        baseState: l.baseState,
        firstBaseUpdate: o,
        lastBaseUpdate: u,
        shared: l.shared,
        callbacks: l.callbacks,
      }),
        (t.updateQueue = a);
      return;
    }
    (t = a.lastBaseUpdate),
      t === null ? (a.firstBaseUpdate = e) : (t.next = e),
      (a.lastBaseUpdate = e);
  }
  var ks = !1;
  function un() {
    if (ks) {
      var t = Xe;
      if (t !== null) throw t;
    }
  }
  function fl(t, e, a, l) {
    ks = !1;
    var o = t.updateQueue;
    sa = !1;
    var u = o.firstBaseUpdate,
      h = o.lastBaseUpdate,
      v = o.shared.pending;
    if (v !== null) {
      o.shared.pending = null;
      var _ = v,
        R = _.next;
      (_.next = null), h === null ? (u = R) : (h.next = R), (h = _);
      var P = t.alternate;
      P !== null &&
        ((P = P.updateQueue),
        (v = P.lastBaseUpdate),
        v !== h &&
          (v === null ? (P.firstBaseUpdate = R) : (v.next = R),
          (P.lastBaseUpdate = _)));
    }
    if (u !== null) {
      var K = o.baseState;
      (h = 0), (P = R = _ = null), (v = u);
      do {
        var B = v.lane & -536870913,
          H = B !== v.lane;
        if (H ? (Rt & B) === B : (l & B) === B) {
          B !== 0 && B === rl && (ks = !0),
            P !== null &&
              (P = P.next =
                {
                  lane: 0,
                  tag: v.tag,
                  payload: v.payload,
                  callback: null,
                  next: null,
                });
          t: {
            var vt = t,
              mt = v;
            B = e;
            var qt = a;
            switch (mt.tag) {
              case 1:
                if (((vt = mt.payload), typeof vt == "function")) {
                  K = vt.call(qt, K, B);
                  break t;
                }
                K = vt;
                break t;
              case 3:
                vt.flags = (vt.flags & -65537) | 128;
              case 0:
                if (
                  ((vt = mt.payload),
                  (B = typeof vt == "function" ? vt.call(qt, K, B) : vt),
                  B == null)
                )
                  break t;
                K = w({}, K, B);
                break t;
              case 2:
                sa = !0;
            }
          }
          (B = v.callback),
            B !== null &&
              ((t.flags |= 64),
              H && (t.flags |= 8192),
              (H = o.callbacks),
              H === null ? (o.callbacks = [B]) : H.push(B));
        } else
          (H = {
            lane: B,
            tag: v.tag,
            payload: v.payload,
            callback: v.callback,
            next: null,
          }),
            P === null ? ((R = P = H), (_ = K)) : (P = P.next = H),
            (h |= B);
        if (((v = v.next), v === null)) {
          if (((v = o.shared.pending), v === null)) break;
          (H = v),
            (v = H.next),
            (H.next = null),
            (o.lastBaseUpdate = H),
            (o.shared.pending = null);
        }
      } while (!0);
      P === null && (_ = K),
        (o.baseState = _),
        (o.firstBaseUpdate = R),
        (o.lastBaseUpdate = P),
        u === null && (o.shared.lanes = 0),
        (xi |= h),
        (t.lanes = h),
        (t.memoizedState = K);
    }
  }
  function Wf(t, e) {
    if (typeof t != "function") throw Error(s(191, t));
    t.call(e);
  }
  function Xn(t, e) {
    var a = t.callbacks;
    if (a !== null)
      for (t.callbacks = null, t = 0; t < a.length; t++) Wf(a[t], e);
  }
  var yi = X(null),
    fr = X(0);
  function Uu(t, e) {
    (t = Fa), nt(fr, t), nt(yi, e), (Fa = t | e.baseLanes);
  }
  function js() {
    nt(fr, Fa), nt(yi, yi.current);
  }
  function Us() {
    (Fa = fr.current), at(yi), at(fr);
  }
  var ca = 0,
    St = null,
    kt = null,
    ee = null,
    dl = !1,
    Qn = !1,
    Cn = !1,
    dr = 0,
    hl = 0,
    Nn = null,
    _m = 0;
  function E() {
    throw Error(s(321));
  }
  function f(t, e) {
    if (e === null) return !1;
    for (var a = 0; a < e.length && a < t.length; a++)
      if (!Ee(t[a], e[a])) return !1;
    return !0;
  }
  function m(t, e, a, l, o, u) {
    return (
      (ca = u),
      (St = e),
      (e.memoizedState = null),
      (e.updateQueue = null),
      (e.lanes = 0),
      (U.H = t === null || t.memoizedState === null ? ap : ip),
      (Cn = !1),
      (u = a(l, o)),
      (Cn = !1),
      Qn && (u = Y(e, a, l, o)),
      S(t),
      u
    );
  }
  function S(t) {
    U.H = Pu;
    var e = kt !== null && kt.next !== null;
    if (((ca = 0), (ee = kt = St = null), (dl = !1), (hl = 0), (Nn = null), e))
      throw Error(s(300));
    t === null ||
      pe ||
      ((t = t.dependencies), t !== null && ur(t) && (pe = !0));
  }
  function Y(t, e, a, l) {
    St = t;
    var o = 0;
    do {
      if ((Qn && (Nn = null), (hl = 0), (Qn = !1), 25 <= o))
        throw Error(s(301));
      if (((o += 1), (ee = kt = null), t.updateQueue != null)) {
        var u = t.updateQueue;
        (u.lastEffect = null),
          (u.events = null),
          (u.stores = null),
          u.memoCache != null && (u.memoCache.index = 0);
      }
      (U.H = hy), (u = e(a, l));
    } while (Qn);
    return u;
  }
  function tt() {
    var t = U.H,
      e = t.useState()[0];
    return (
      (e = typeof e.then == "function" ? Se(e) : e),
      (t = t.useState()[0]),
      (kt !== null ? kt.memoizedState : null) !== t && (St.flags |= 1024),
      e
    );
  }
  function F() {
    var t = dr !== 0;
    return (dr = 0), t;
  }
  function Et(t, e, a) {
    (e.updateQueue = t.updateQueue), (e.flags &= -2053), (t.lanes &= ~a);
  }
  function me(t) {
    if (dl) {
      for (t = t.memoizedState; t !== null; ) {
        var e = t.queue;
        e !== null && (e.pending = null), (t = t.next);
      }
      dl = !1;
    }
    (ca = 0), (ee = kt = St = null), (Qn = !1), (hl = dr = 0), (Nn = null);
  }
  function Yt() {
    var t = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null,
    };
    return ee === null ? (St.memoizedState = ee = t) : (ee = ee.next = t), ee;
  }
  function Tt() {
    if (kt === null) {
      var t = St.alternate;
      t = t !== null ? t.memoizedState : null;
    } else t = kt.next;
    var e = ee === null ? St.memoizedState : ee.next;
    if (e !== null) (ee = e), (kt = t);
    else {
      if (t === null)
        throw St.alternate === null ? Error(s(467)) : Error(s(310));
      (kt = t),
        (t = {
          memoizedState: kt.memoizedState,
          baseState: kt.baseState,
          baseQueue: kt.baseQueue,
          queue: kt.queue,
          next: null,
        }),
        ee === null ? (St.memoizedState = ee = t) : (ee = ee.next = t);
    }
    return ee;
  }
  function Qe() {
    return { lastEffect: null, events: null, stores: null, memoCache: null };
  }
  function Se(t) {
    var e = hl;
    return (
      (hl += 1),
      Nn === null && (Nn = []),
      (t = Bs(Nn, t, e)),
      (e = St),
      (ee === null ? e.memoizedState : ee.next) === null &&
        ((e = e.alternate),
        (U.H = e === null || e.memoizedState === null ? ap : ip)),
      t
    );
  }
  function Ga(t) {
    if (t !== null && typeof t == "object") {
      if (typeof t.then == "function") return Se(t);
      if (t.$$typeof === J) return he(t);
    }
    throw Error(s(438, String(t)));
  }
  function $s(t) {
    var e = null,
      a = St.updateQueue;
    if ((a !== null && (e = a.memoCache), e == null)) {
      var l = St.alternate;
      l !== null &&
        ((l = l.updateQueue),
        l !== null &&
          ((l = l.memoCache),
          l != null &&
            (e = {
              data: l.data.map(function (o) {
                return o.slice();
              }),
              index: 0,
            })));
    }
    if (
      (e == null && (e = { data: [], index: 0 }),
      a === null && ((a = Qe()), (St.updateQueue = a)),
      (a.memoCache = e),
      (a = e.data[e.index]),
      a === void 0)
    )
      for (a = e.data[e.index] = Array(t), l = 0; l < t; l++) a[l] = gt;
    return e.index++, a;
  }
  function Ne(t, e) {
    return typeof e == "function" ? e(t) : e;
  }
  function $u(t) {
    var e = Tt();
    return td(e, kt, t);
  }
  function td(t, e, a) {
    var l = t.queue;
    if (l === null) throw Error(s(311));
    l.lastRenderedReducer = a;
    var o = t.baseQueue,
      u = l.pending;
    if (u !== null) {
      if (o !== null) {
        var h = o.next;
        (o.next = u.next), (u.next = h);
      }
      (e.baseQueue = o = u), (l.pending = null);
    }
    if (((u = t.baseState), o === null)) t.memoizedState = u;
    else {
      e = o.next;
      var v = (h = null),
        _ = null,
        R = e,
        P = !1;
      do {
        var K = R.lane & -536870913;
        if (K !== R.lane ? (Rt & K) === K : (ca & K) === K) {
          var B = R.revertLane;
          if (B === 0)
            _ !== null &&
              (_ = _.next =
                {
                  lane: 0,
                  revertLane: 0,
                  action: R.action,
                  hasEagerState: R.hasEagerState,
                  eagerState: R.eagerState,
                  next: null,
                }),
              K === rl && (P = !0);
          else if ((ca & B) === B) {
            (R = R.next), B === rl && (P = !0);
            continue;
          } else
            (K = {
              lane: 0,
              revertLane: R.revertLane,
              action: R.action,
              hasEagerState: R.hasEagerState,
              eagerState: R.eagerState,
              next: null,
            }),
              _ === null ? ((v = _ = K), (h = u)) : (_ = _.next = K),
              (St.lanes |= B),
              (xi |= B);
          (K = R.action),
            Cn && a(u, K),
            (u = R.hasEagerState ? R.eagerState : a(u, K));
        } else
          (B = {
            lane: K,
            revertLane: R.revertLane,
            action: R.action,
            hasEagerState: R.hasEagerState,
            eagerState: R.eagerState,
            next: null,
          }),
            _ === null ? ((v = _ = B), (h = u)) : (_ = _.next = B),
            (St.lanes |= K),
            (xi |= K);
        R = R.next;
      } while (R !== null && R !== e);
      if (
        (_ === null ? (h = u) : (_.next = v),
        !Ee(u, t.memoizedState) && ((pe = !0), P && ((a = Xe), a !== null)))
      )
        throw a;
      (t.memoizedState = u),
        (t.baseState = h),
        (t.baseQueue = _),
        (l.lastRenderedState = u);
    }
    return o === null && (l.lanes = 0), [t.memoizedState, l.dispatch];
  }
  function ed(t) {
    var e = Tt(),
      a = e.queue;
    if (a === null) throw Error(s(311));
    a.lastRenderedReducer = t;
    var l = a.dispatch,
      o = a.pending,
      u = e.memoizedState;
    if (o !== null) {
      a.pending = null;
      var h = (o = o.next);
      do (u = t(u, h.action)), (h = h.next);
      while (h !== o);
      Ee(u, e.memoizedState) || (pe = !0),
        (e.memoizedState = u),
        e.baseQueue === null && (e.baseState = u),
        (a.lastRenderedState = u);
    }
    return [u, l];
  }
  function Sm(t, e, a) {
    var l = St,
      o = Tt(),
      u = Mt;
    if (u) {
      if (a === void 0) throw Error(s(407));
      a = a();
    } else a = e();
    var h = !Ee((kt || o).memoizedState, a);
    h && ((o.memoizedState = a), (pe = !0)), (o = o.queue);
    var v = xm.bind(null, l, o, t);
    if (
      (qs(2048, 8, v, [t]),
      o.getSnapshot !== e || h || (ee !== null && ee.memoizedState.tag & 1))
    ) {
      if (
        ((l.flags |= 2048),
        hr(9, qu(), Tm.bind(null, l, o, a, e), null),
        Kt === null)
      )
        throw Error(s(349));
      u || (ca & 124) !== 0 || Am(l, e, a);
    }
    return a;
  }
  function Am(t, e, a) {
    (t.flags |= 16384),
      (t = { getSnapshot: e, value: a }),
      (e = St.updateQueue),
      e === null
        ? ((e = Qe()), (St.updateQueue = e), (e.stores = [t]))
        : ((a = e.stores), a === null ? (e.stores = [t]) : a.push(t));
  }
  function Tm(t, e, a, l) {
    (e.value = a), (e.getSnapshot = l), Om(e) && Cm(t);
  }
  function xm(t, e, a) {
    return a(function () {
      Om(e) && Cm(t);
    });
  }
  function Om(t) {
    var e = t.getSnapshot;
    t = t.value;
    try {
      var a = e();
      return !Ee(t, a);
    } catch {
      return !0;
    }
  }
  function Cm(t) {
    var e = hi(t, 2);
    e !== null && mn(e, t, 2);
  }
  function nd(t) {
    var e = Yt();
    if (typeof t == "function") {
      var a = t;
      if (((t = a()), Cn)) {
        nn(!0);
        try {
          a();
        } finally {
          nn(!1);
        }
      }
    }
    return (
      (e.memoizedState = e.baseState = t),
      (e.queue = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Ne,
        lastRenderedState: t,
      }),
      e
    );
  }
  function Nm(t, e, a, l) {
    return (t.baseState = a), td(t, kt, typeof l == "function" ? l : Ne);
  }
  function oy(t, e, a, l, o) {
    if (Yu(t)) throw Error(s(485));
    if (((t = e.action), t !== null)) {
      var u = {
        payload: o,
        action: t,
        next: null,
        isTransition: !0,
        status: "pending",
        value: null,
        reason: null,
        listeners: [],
        then: function (h) {
          u.listeners.push(h);
        },
      };
      U.T !== null ? a(!0) : (u.isTransition = !1),
        l(u),
        (a = e.pending),
        a === null
          ? ((u.next = e.pending = u), Dm(e, u))
          : ((u.next = a.next), (e.pending = a.next = u));
    }
  }
  function Dm(t, e) {
    var a = e.action,
      l = e.payload,
      o = t.state;
    if (e.isTransition) {
      var u = U.T,
        h = {};
      U.T = h;
      try {
        var v = a(o, l),
          _ = U.S;
        _ !== null && _(h, v), Rm(t, e, v);
      } catch (R) {
        ad(t, e, R);
      } finally {
        U.T = u;
      }
    } else
      try {
        (u = a(o, l)), Rm(t, e, u);
      } catch (R) {
        ad(t, e, R);
      }
  }
  function Rm(t, e, a) {
    a !== null && typeof a == "object" && typeof a.then == "function"
      ? a.then(
          function (l) {
            Mm(t, e, l);
          },
          function (l) {
            return ad(t, e, l);
          }
        )
      : Mm(t, e, a);
  }
  function Mm(t, e, a) {
    (e.status = "fulfilled"),
      (e.value = a),
      Lm(e),
      (t.state = a),
      (e = t.pending),
      e !== null &&
        ((a = e.next),
        a === e ? (t.pending = null) : ((a = a.next), (e.next = a), Dm(t, a)));
  }
  function ad(t, e, a) {
    var l = t.pending;
    if (((t.pending = null), l !== null)) {
      l = l.next;
      do (e.status = "rejected"), (e.reason = a), Lm(e), (e = e.next);
      while (e !== l);
    }
    t.action = null;
  }
  function Lm(t) {
    t = t.listeners;
    for (var e = 0; e < t.length; e++) (0, t[e])();
  }
  function Bm(t, e) {
    return e;
  }
  function zm(t, e) {
    if (Mt) {
      var a = Kt.formState;
      if (a !== null) {
        t: {
          var l = St;
          if (Mt) {
            if (Zt) {
              e: {
                for (var o = Zt, u = An; o.nodeType !== 8; ) {
                  if (!u) {
                    o = null;
                    break e;
                  }
                  if (((o = In(o.nextSibling)), o === null)) {
                    o = null;
                    break e;
                  }
                }
                (u = o.data), (o = u === "F!" || u === "F" ? o : null);
              }
              if (o) {
                (Zt = In(o.nextSibling)), (l = o.data === "F!");
                break t;
              }
            }
            Va(l);
          }
          l = !1;
        }
        l && (e = a[0]);
      }
    }
    return (
      (a = Yt()),
      (a.memoizedState = a.baseState = e),
      (l = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Bm,
        lastRenderedState: e,
      }),
      (a.queue = l),
      (a = tp.bind(null, St, l)),
      (l.dispatch = a),
      (l = nd(!1)),
      (u = od.bind(null, St, !1, l.queue)),
      (l = Yt()),
      (o = { state: e, dispatch: null, action: t, pending: null }),
      (l.queue = o),
      (a = oy.bind(null, St, o, u, a)),
      (o.dispatch = a),
      (l.memoizedState = t),
      [e, a, !1]
    );
  }
  function Hm(t) {
    var e = Tt();
    return km(e, kt, t);
  }
  function km(t, e, a) {
    if (
      ((e = td(t, e, Bm)[0]),
      (t = $u(Ne)[0]),
      typeof e == "object" && e !== null && typeof e.then == "function")
    )
      try {
        var l = Se(e);
      } catch (h) {
        throw h === vi ? sl : h;
      }
    else l = e;
    e = Tt();
    var o = e.queue,
      u = o.dispatch;
    return (
      a !== e.memoizedState &&
        ((St.flags |= 2048), hr(9, qu(), uy.bind(null, o, a), null)),
      [l, u, t]
    );
  }
  function uy(t, e) {
    t.action = e;
  }
  function jm(t) {
    var e = Tt(),
      a = kt;
    if (a !== null) return km(e, a, t);
    Tt(), (e = e.memoizedState), (a = Tt());
    var l = a.queue.dispatch;
    return (a.memoizedState = t), [e, l, !1];
  }
  function hr(t, e, a, l) {
    return (
      (t = { tag: t, create: a, deps: l, inst: e, next: null }),
      (e = St.updateQueue),
      e === null && ((e = Qe()), (St.updateQueue = e)),
      (a = e.lastEffect),
      a === null
        ? (e.lastEffect = t.next = t)
        : ((l = a.next), (a.next = t), (t.next = l), (e.lastEffect = t)),
      t
    );
  }
  function qu() {
    return { destroy: void 0, resource: void 0 };
  }
  function Um() {
    return Tt().memoizedState;
  }
  function Vu(t, e, a, l) {
    var o = Yt();
    (l = l === void 0 ? null : l),
      (St.flags |= t),
      (o.memoizedState = hr(1 | e, qu(), a, l));
  }
  function qs(t, e, a, l) {
    var o = Tt();
    l = l === void 0 ? null : l;
    var u = o.memoizedState.inst;
    kt !== null && l !== null && f(l, kt.memoizedState.deps)
      ? (o.memoizedState = hr(e, u, a, l))
      : ((St.flags |= t), (o.memoizedState = hr(1 | e, u, a, l)));
  }
  function $m(t, e) {
    Vu(8390656, 8, t, e);
  }
  function qm(t, e) {
    qs(2048, 8, t, e);
  }
  function Vm(t, e) {
    return qs(4, 2, t, e);
  }
  function Ym(t, e) {
    return qs(4, 4, t, e);
  }
  function Pm(t, e) {
    if (typeof e == "function") {
      t = t();
      var a = e(t);
      return function () {
        typeof a == "function" ? a() : e(null);
      };
    }
    if (e != null)
      return (
        (t = t()),
        (e.current = t),
        function () {
          e.current = null;
        }
      );
  }
  function Gm(t, e, a) {
    (a = a != null ? a.concat([t]) : null), qs(4, 4, Pm.bind(null, e, t), a);
  }
  function id() {}
  function Km(t, e) {
    var a = Tt();
    e = e === void 0 ? null : e;
    var l = a.memoizedState;
    return e !== null && f(e, l[1]) ? l[0] : ((a.memoizedState = [t, e]), t);
  }
  function Xm(t, e) {
    var a = Tt();
    e = e === void 0 ? null : e;
    var l = a.memoizedState;
    if (e !== null && f(e, l[1])) return l[0];
    if (((l = t()), Cn)) {
      nn(!0);
      try {
        t();
      } finally {
        nn(!1);
      }
    }
    return (a.memoizedState = [l, e]), l;
  }
  function ld(t, e, a) {
    return a === void 0 || (ca & 1073741824) !== 0
      ? (t.memoizedState = e)
      : ((t.memoizedState = a), (t = Ip()), (St.lanes |= t), (xi |= t), a);
  }
  function Qm(t, e, a, l) {
    return Ee(a, e)
      ? a
      : yi.current !== null
      ? ((t = ld(t, a, l)), Ee(t, e) || (pe = !0), t)
      : (ca & 42) === 0
      ? ((pe = !0), (t.memoizedState = a))
      : ((t = Ip()), (St.lanes |= t), (xi |= t), e);
  }
  function Zm(t, e, a, l, o) {
    var u = W.p;
    W.p = u !== 0 && 8 > u ? u : 8;
    var h = U.T,
      v = {};
    (U.T = v), od(t, !1, e, a);
    try {
      var _ = o(),
        R = U.S;
      if (
        (R !== null && R(v, _),
        _ !== null && typeof _ == "object" && typeof _.then == "function")
      ) {
        var P = Jf(_, l);
        Vs(t, e, P, hn(t));
      } else Vs(t, e, l, hn(t));
    } catch (K) {
      Vs(t, e, { then: function () {}, status: "rejected", reason: K }, hn());
    } finally {
      (W.p = u), (U.T = h);
    }
  }
  function cy() {}
  function rd(t, e, a, l) {
    if (t.tag !== 5) throw Error(s(476));
    var o = Im(t).queue;
    Zm(
      t,
      o,
      e,
      ct,
      a === null
        ? cy
        : function () {
            return Fm(t), a(l);
          }
    );
  }
  function Im(t) {
    var e = t.memoizedState;
    if (e !== null) return e;
    e = {
      memoizedState: ct,
      baseState: ct,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Ne,
        lastRenderedState: ct,
      },
      next: null,
    };
    var a = {};
    return (
      (e.next = {
        memoizedState: a,
        baseState: a,
        baseQueue: null,
        queue: {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: Ne,
          lastRenderedState: a,
        },
        next: null,
      }),
      (t.memoizedState = e),
      (t = t.alternate),
      t !== null && (t.memoizedState = e),
      e
    );
  }
  function Fm(t) {
    var e = Im(t).next.queue;
    Vs(t, e, {}, hn());
  }
  function sd() {
    return he(ro);
  }
  function Jm() {
    return Tt().memoizedState;
  }
  function Wm() {
    return Tt().memoizedState;
  }
  function fy(t) {
    for (var e = t.return; e !== null; ) {
      switch (e.tag) {
        case 24:
        case 3:
          var a = hn();
          t = oa(a);
          var l = ua(e, t, a);
          l !== null && (mn(l, e, a), bi(l, e, a)),
            (e = { cache: Ds() }),
            (t.payload = e);
          return;
      }
      e = e.return;
    }
  }
  function dy(t, e, a) {
    var l = hn();
    (a = {
      lane: l,
      revertLane: 0,
      action: a,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
      Yu(t)
        ? ep(e, a)
        : ((a = Ss(t, e, a, l)), a !== null && (mn(a, t, l), np(a, e, l)));
  }
  function tp(t, e, a) {
    var l = hn();
    Vs(t, e, a, l);
  }
  function Vs(t, e, a, l) {
    var o = {
      lane: l,
      revertLane: 0,
      action: a,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    };
    if (Yu(t)) ep(e, o);
    else {
      var u = t.alternate;
      if (
        t.lanes === 0 &&
        (u === null || u.lanes === 0) &&
        ((u = e.lastRenderedReducer), u !== null)
      )
        try {
          var h = e.lastRenderedState,
            v = u(h, a);
          if (((o.hasEagerState = !0), (o.eagerState = v), Ee(v, h)))
            return ir(t, e, o, 0), Kt === null && ar(), !1;
        } catch {
        } finally {
        }
      if (((a = Ss(t, e, o, l)), a !== null))
        return mn(a, t, l), np(a, e, l), !0;
    }
    return !1;
  }
  function od(t, e, a, l) {
    if (
      ((l = {
        lane: 2,
        revertLane: $d(),
        action: l,
        hasEagerState: !1,
        eagerState: null,
        next: null,
      }),
      Yu(t))
    ) {
      if (e) throw Error(s(479));
    } else (e = Ss(t, a, l, 2)), e !== null && mn(e, t, 2);
  }
  function Yu(t) {
    var e = t.alternate;
    return t === St || (e !== null && e === St);
  }
  function ep(t, e) {
    Qn = dl = !0;
    var a = t.pending;
    a === null ? (e.next = e) : ((e.next = a.next), (a.next = e)),
      (t.pending = e);
  }
  function np(t, e, a) {
    if ((a & 4194048) !== 0) {
      var l = e.lanes;
      (l &= t.pendingLanes), (a |= l), (e.lanes = a), Ho(t, a);
    }
  }
  var Pu = {
      readContext: he,
      use: Ga,
      useCallback: E,
      useContext: E,
      useEffect: E,
      useImperativeHandle: E,
      useLayoutEffect: E,
      useInsertionEffect: E,
      useMemo: E,
      useReducer: E,
      useRef: E,
      useState: E,
      useDebugValue: E,
      useDeferredValue: E,
      useTransition: E,
      useSyncExternalStore: E,
      useId: E,
      useHostTransitionStatus: E,
      useFormState: E,
      useActionState: E,
      useOptimistic: E,
      useMemoCache: E,
      useCacheRefresh: E,
    },
    ap = {
      readContext: he,
      use: Ga,
      useCallback: function (t, e) {
        return (Yt().memoizedState = [t, e === void 0 ? null : e]), t;
      },
      useContext: he,
      useEffect: $m,
      useImperativeHandle: function (t, e, a) {
        (a = a != null ? a.concat([t]) : null),
          Vu(4194308, 4, Pm.bind(null, e, t), a);
      },
      useLayoutEffect: function (t, e) {
        return Vu(4194308, 4, t, e);
      },
      useInsertionEffect: function (t, e) {
        Vu(4, 2, t, e);
      },
      useMemo: function (t, e) {
        var a = Yt();
        e = e === void 0 ? null : e;
        var l = t();
        if (Cn) {
          nn(!0);
          try {
            t();
          } finally {
            nn(!1);
          }
        }
        return (a.memoizedState = [l, e]), l;
      },
      useReducer: function (t, e, a) {
        var l = Yt();
        if (a !== void 0) {
          var o = a(e);
          if (Cn) {
            nn(!0);
            try {
              a(e);
            } finally {
              nn(!1);
            }
          }
        } else o = e;
        return (
          (l.memoizedState = l.baseState = o),
          (t = {
            pending: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: t,
            lastRenderedState: o,
          }),
          (l.queue = t),
          (t = t.dispatch = dy.bind(null, St, t)),
          [l.memoizedState, t]
        );
      },
      useRef: function (t) {
        var e = Yt();
        return (t = { current: t }), (e.memoizedState = t);
      },
      useState: function (t) {
        t = nd(t);
        var e = t.queue,
          a = tp.bind(null, St, e);
        return (e.dispatch = a), [t.memoizedState, a];
      },
      useDebugValue: id,
      useDeferredValue: function (t, e) {
        var a = Yt();
        return ld(a, t, e);
      },
      useTransition: function () {
        var t = nd(!1);
        return (
          (t = Zm.bind(null, St, t.queue, !0, !1)),
          (Yt().memoizedState = t),
          [!1, t]
        );
      },
      useSyncExternalStore: function (t, e, a) {
        var l = St,
          o = Yt();
        if (Mt) {
          if (a === void 0) throw Error(s(407));
          a = a();
        } else {
          if (((a = e()), Kt === null)) throw Error(s(349));
          (Rt & 124) !== 0 || Am(l, e, a);
        }
        o.memoizedState = a;
        var u = { value: a, getSnapshot: e };
        return (
          (o.queue = u),
          $m(xm.bind(null, l, u, t), [t]),
          (l.flags |= 2048),
          hr(9, qu(), Tm.bind(null, l, u, a, e), null),
          a
        );
      },
      useId: function () {
        var t = Yt(),
          e = Kt.identifierPrefix;
        if (Mt) {
          var a = qn,
            l = $n;
          (a = (l & ~(1 << (32 - ue(l) - 1))).toString(32) + a),
            (e = "«" + e + "R" + a),
            (a = dr++),
            0 < a && (e += "H" + a.toString(32)),
            (e += "»");
        } else (a = _m++), (e = "«" + e + "r" + a.toString(32) + "»");
        return (t.memoizedState = e);
      },
      useHostTransitionStatus: sd,
      useFormState: zm,
      useActionState: zm,
      useOptimistic: function (t) {
        var e = Yt();
        e.memoizedState = e.baseState = t;
        var a = {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: null,
          lastRenderedState: null,
        };
        return (
          (e.queue = a),
          (e = od.bind(null, St, !0, a)),
          (a.dispatch = e),
          [t, e]
        );
      },
      useMemoCache: $s,
      useCacheRefresh: function () {
        return (Yt().memoizedState = fy.bind(null, St));
      },
    },
    ip = {
      readContext: he,
      use: Ga,
      useCallback: Km,
      useContext: he,
      useEffect: qm,
      useImperativeHandle: Gm,
      useInsertionEffect: Vm,
      useLayoutEffect: Ym,
      useMemo: Xm,
      useReducer: $u,
      useRef: Um,
      useState: function () {
        return $u(Ne);
      },
      useDebugValue: id,
      useDeferredValue: function (t, e) {
        var a = Tt();
        return Qm(a, kt.memoizedState, t, e);
      },
      useTransition: function () {
        var t = $u(Ne)[0],
          e = Tt().memoizedState;
        return [typeof t == "boolean" ? t : Se(t), e];
      },
      useSyncExternalStore: Sm,
      useId: Jm,
      useHostTransitionStatus: sd,
      useFormState: Hm,
      useActionState: Hm,
      useOptimistic: function (t, e) {
        var a = Tt();
        return Nm(a, kt, t, e);
      },
      useMemoCache: $s,
      useCacheRefresh: Wm,
    },
    hy = {
      readContext: he,
      use: Ga,
      useCallback: Km,
      useContext: he,
      useEffect: qm,
      useImperativeHandle: Gm,
      useInsertionEffect: Vm,
      useLayoutEffect: Ym,
      useMemo: Xm,
      useReducer: ed,
      useRef: Um,
      useState: function () {
        return ed(Ne);
      },
      useDebugValue: id,
      useDeferredValue: function (t, e) {
        var a = Tt();
        return kt === null ? ld(a, t, e) : Qm(a, kt.memoizedState, t, e);
      },
      useTransition: function () {
        var t = ed(Ne)[0],
          e = Tt().memoizedState;
        return [typeof t == "boolean" ? t : Se(t), e];
      },
      useSyncExternalStore: Sm,
      useId: Jm,
      useHostTransitionStatus: sd,
      useFormState: jm,
      useActionState: jm,
      useOptimistic: function (t, e) {
        var a = Tt();
        return kt !== null
          ? Nm(a, kt, t, e)
          : ((a.baseState = t), [t, a.queue.dispatch]);
      },
      useMemoCache: $s,
      useCacheRefresh: Wm,
    },
    mr = null,
    Ys = 0;
  function Gu(t) {
    var e = Ys;
    return (Ys += 1), mr === null && (mr = []), Bs(mr, t, e);
  }
  function Ps(t, e) {
    (e = e.props.ref), (t.ref = e !== void 0 ? e : null);
  }
  function Ku(t, e) {
    throw e.$$typeof === O
      ? Error(s(525))
      : ((t = Object.prototype.toString.call(e)),
        Error(
          s(
            31,
            t === "[object Object]"
              ? "object with keys {" + Object.keys(e).join(", ") + "}"
              : t
          )
        ));
  }
  function lp(t) {
    var e = t._init;
    return e(t._payload);
  }
  function rp(t) {
    function e(C, T) {
      if (t) {
        var D = C.deletions;
        D === null ? ((C.deletions = [T]), (C.flags |= 16)) : D.push(T);
      }
    }
    function a(C, T) {
      if (!t) return null;
      for (; T !== null; ) e(C, T), (T = T.sibling);
      return null;
    }
    function l(C) {
      for (var T = new Map(); C !== null; )
        C.key !== null ? T.set(C.key, C) : T.set(C.index, C), (C = C.sibling);
      return T;
    }
    function o(C, T) {
      return (C = Un(C, T)), (C.index = 0), (C.sibling = null), C;
    }
    function u(C, T, D) {
      return (
        (C.index = D),
        t
          ? ((D = C.alternate),
            D !== null
              ? ((D = D.index), D < T ? ((C.flags |= 67108866), T) : D)
              : ((C.flags |= 67108866), T))
          : ((C.flags |= 1048576), T)
      );
    }
    function h(C) {
      return t && C.alternate === null && (C.flags |= 67108866), C;
    }
    function v(C, T, D, G) {
      return T === null || T.tag !== 6
        ? ((T = Ts(D, C.mode, G)), (T.return = C), T)
        : ((T = o(T, D)), (T.return = C), T);
    }
    function _(C, T, D, G) {
      var lt = D.type;
      return lt === x
        ? P(C, T, D.props.children, G, D.key)
        : T !== null &&
          (T.elementType === lt ||
            (typeof lt == "object" &&
              lt !== null &&
              lt.$$typeof === bt &&
              lp(lt) === T.type))
        ? ((T = o(T, D.props)), Ps(T, D), (T.return = C), T)
        : ((T = sr(D.type, D.key, D.props, null, C.mode, G)),
          Ps(T, D),
          (T.return = C),
          T);
    }
    function R(C, T, D, G) {
      return T === null ||
        T.tag !== 4 ||
        T.stateNode.containerInfo !== D.containerInfo ||
        T.stateNode.implementation !== D.implementation
        ? ((T = or(D, C.mode, G)), (T.return = C), T)
        : ((T = o(T, D.children || [])), (T.return = C), T);
    }
    function P(C, T, D, G, lt) {
      return T === null || T.tag !== 7
        ? ((T = _n(D, C.mode, G, lt)), (T.return = C), T)
        : ((T = o(T, D)), (T.return = C), T);
    }
    function K(C, T, D) {
      if (
        (typeof T == "string" && T !== "") ||
        typeof T == "number" ||
        typeof T == "bigint"
      )
        return (T = Ts("" + T, C.mode, D)), (T.return = C), T;
      if (typeof T == "object" && T !== null) {
        switch (T.$$typeof) {
          case N:
            return (
              (D = sr(T.type, T.key, T.props, null, C.mode, D)),
              Ps(D, T),
              (D.return = C),
              D
            );
          case q:
            return (T = or(T, C.mode, D)), (T.return = C), T;
          case bt:
            var G = T._init;
            return (T = G(T._payload)), K(C, T, D);
        }
        if (Gt(T) || zt(T))
          return (T = _n(T, C.mode, D, null)), (T.return = C), T;
        if (typeof T.then == "function") return K(C, Gu(T), D);
        if (T.$$typeof === J) return K(C, il(C, T), D);
        Ku(C, T);
      }
      return null;
    }
    function B(C, T, D, G) {
      var lt = T !== null ? T.key : null;
      if (
        (typeof D == "string" && D !== "") ||
        typeof D == "number" ||
        typeof D == "bigint"
      )
        return lt !== null ? null : v(C, T, "" + D, G);
      if (typeof D == "object" && D !== null) {
        switch (D.$$typeof) {
          case N:
            return D.key === lt ? _(C, T, D, G) : null;
          case q:
            return D.key === lt ? R(C, T, D, G) : null;
          case bt:
            return (lt = D._init), (D = lt(D._payload)), B(C, T, D, G);
        }
        if (Gt(D) || zt(D)) return lt !== null ? null : P(C, T, D, G, null);
        if (typeof D.then == "function") return B(C, T, Gu(D), G);
        if (D.$$typeof === J) return B(C, T, il(C, D), G);
        Ku(C, D);
      }
      return null;
    }
    function H(C, T, D, G, lt) {
      if (
        (typeof G == "string" && G !== "") ||
        typeof G == "number" ||
        typeof G == "bigint"
      )
        return (C = C.get(D) || null), v(T, C, "" + G, lt);
      if (typeof G == "object" && G !== null) {
        switch (G.$$typeof) {
          case N:
            return (
              (C = C.get(G.key === null ? D : G.key) || null), _(T, C, G, lt)
            );
          case q:
            return (
              (C = C.get(G.key === null ? D : G.key) || null), R(T, C, G, lt)
            );
          case bt:
            var Ot = G._init;
            return (G = Ot(G._payload)), H(C, T, D, G, lt);
        }
        if (Gt(G) || zt(G)) return (C = C.get(D) || null), P(T, C, G, lt, null);
        if (typeof G.then == "function") return H(C, T, D, Gu(G), lt);
        if (G.$$typeof === J) return H(C, T, D, il(T, G), lt);
        Ku(T, G);
      }
      return null;
    }
    function vt(C, T, D, G) {
      for (
        var lt = null, Ot = null, ft = T, pt = (T = 0), ve = null;
        ft !== null && pt < D.length;
        pt++
      ) {
        ft.index > pt ? ((ve = ft), (ft = null)) : (ve = ft.sibling);
        var Lt = B(C, ft, D[pt], G);
        if (Lt === null) {
          ft === null && (ft = ve);
          break;
        }
        t && ft && Lt.alternate === null && e(C, ft),
          (T = u(Lt, T, pt)),
          Ot === null ? (lt = Lt) : (Ot.sibling = Lt),
          (Ot = Lt),
          (ft = ve);
      }
      if (pt === D.length) return a(C, ft), Mt && $a(C, pt), lt;
      if (ft === null) {
        for (; pt < D.length; pt++)
          (ft = K(C, D[pt], G)),
            ft !== null &&
              ((T = u(ft, T, pt)),
              Ot === null ? (lt = ft) : (Ot.sibling = ft),
              (Ot = ft));
        return Mt && $a(C, pt), lt;
      }
      for (ft = l(ft); pt < D.length; pt++)
        (ve = H(ft, C, pt, D[pt], G)),
          ve !== null &&
            (t &&
              ve.alternate !== null &&
              ft.delete(ve.key === null ? pt : ve.key),
            (T = u(ve, T, pt)),
            Ot === null ? (lt = ve) : (Ot.sibling = ve),
            (Ot = ve));
      return (
        t &&
          ft.forEach(function (zi) {
            return e(C, zi);
          }),
        Mt && $a(C, pt),
        lt
      );
    }
    function mt(C, T, D, G) {
      if (D == null) throw Error(s(151));
      for (
        var lt = null,
          Ot = null,
          ft = T,
          pt = (T = 0),
          ve = null,
          Lt = D.next();
        ft !== null && !Lt.done;
        pt++, Lt = D.next()
      ) {
        ft.index > pt ? ((ve = ft), (ft = null)) : (ve = ft.sibling);
        var zi = B(C, ft, Lt.value, G);
        if (zi === null) {
          ft === null && (ft = ve);
          break;
        }
        t && ft && zi.alternate === null && e(C, ft),
          (T = u(zi, T, pt)),
          Ot === null ? (lt = zi) : (Ot.sibling = zi),
          (Ot = zi),
          (ft = ve);
      }
      if (Lt.done) return a(C, ft), Mt && $a(C, pt), lt;
      if (ft === null) {
        for (; !Lt.done; pt++, Lt = D.next())
          (Lt = K(C, Lt.value, G)),
            Lt !== null &&
              ((T = u(Lt, T, pt)),
              Ot === null ? (lt = Lt) : (Ot.sibling = Lt),
              (Ot = Lt));
        return Mt && $a(C, pt), lt;
      }
      for (ft = l(ft); !Lt.done; pt++, Lt = D.next())
        (Lt = H(ft, C, pt, Lt.value, G)),
          Lt !== null &&
            (t &&
              Lt.alternate !== null &&
              ft.delete(Lt.key === null ? pt : Lt.key),
            (T = u(Lt, T, pt)),
            Ot === null ? (lt = Lt) : (Ot.sibling = Lt),
            (Ot = Lt));
      return (
        t &&
          ft.forEach(function (mw) {
            return e(C, mw);
          }),
        Mt && $a(C, pt),
        lt
      );
    }
    function qt(C, T, D, G) {
      if (
        (typeof D == "object" &&
          D !== null &&
          D.type === x &&
          D.key === null &&
          (D = D.props.children),
        typeof D == "object" && D !== null)
      ) {
        switch (D.$$typeof) {
          case N:
            t: {
              for (var lt = D.key; T !== null; ) {
                if (T.key === lt) {
                  if (((lt = D.type), lt === x)) {
                    if (T.tag === 7) {
                      a(C, T.sibling),
                        (G = o(T, D.props.children)),
                        (G.return = C),
                        (C = G);
                      break t;
                    }
                  } else if (
                    T.elementType === lt ||
                    (typeof lt == "object" &&
                      lt !== null &&
                      lt.$$typeof === bt &&
                      lp(lt) === T.type)
                  ) {
                    a(C, T.sibling),
                      (G = o(T, D.props)),
                      Ps(G, D),
                      (G.return = C),
                      (C = G);
                    break t;
                  }
                  a(C, T);
                  break;
                } else e(C, T);
                T = T.sibling;
              }
              D.type === x
                ? ((G = _n(D.props.children, C.mode, G, D.key)),
                  (G.return = C),
                  (C = G))
                : ((G = sr(D.type, D.key, D.props, null, C.mode, G)),
                  Ps(G, D),
                  (G.return = C),
                  (C = G));
            }
            return h(C);
          case q:
            t: {
              for (lt = D.key; T !== null; ) {
                if (T.key === lt)
                  if (
                    T.tag === 4 &&
                    T.stateNode.containerInfo === D.containerInfo &&
                    T.stateNode.implementation === D.implementation
                  ) {
                    a(C, T.sibling),
                      (G = o(T, D.children || [])),
                      (G.return = C),
                      (C = G);
                    break t;
                  } else {
                    a(C, T);
                    break;
                  }
                else e(C, T);
                T = T.sibling;
              }
              (G = or(D, C.mode, G)), (G.return = C), (C = G);
            }
            return h(C);
          case bt:
            return (lt = D._init), (D = lt(D._payload)), qt(C, T, D, G);
        }
        if (Gt(D)) return vt(C, T, D, G);
        if (zt(D)) {
          if (((lt = zt(D)), typeof lt != "function")) throw Error(s(150));
          return (D = lt.call(D)), mt(C, T, D, G);
        }
        if (typeof D.then == "function") return qt(C, T, Gu(D), G);
        if (D.$$typeof === J) return qt(C, T, il(C, D), G);
        Ku(C, D);
      }
      return (typeof D == "string" && D !== "") ||
        typeof D == "number" ||
        typeof D == "bigint"
        ? ((D = "" + D),
          T !== null && T.tag === 6
            ? (a(C, T.sibling), (G = o(T, D)), (G.return = C), (C = G))
            : (a(C, T), (G = Ts(D, C.mode, G)), (G.return = C), (C = G)),
          h(C))
        : a(C, T);
    }
    return function (C, T, D, G) {
      try {
        Ys = 0;
        var lt = qt(C, T, D, G);
        return (mr = null), lt;
      } catch (ft) {
        if (ft === vi || ft === sl) throw ft;
        var Ot = He(29, ft, null, C.mode);
        return (Ot.lanes = G), (Ot.return = C), Ot;
      } finally {
      }
    };
  }
  var pr = rp(!0),
    sp = rp(!1),
    Dn = X(null),
    fa = null;
  function wi(t) {
    var e = t.alternate;
    nt(ce, ce.current & 1),
      nt(Dn, t),
      fa === null &&
        (e === null || yi.current !== null || e.memoizedState !== null) &&
        (fa = t);
  }
  function op(t) {
    if (t.tag === 22) {
      if ((nt(ce, ce.current), nt(Dn, t), fa === null)) {
        var e = t.alternate;
        e !== null && e.memoizedState !== null && (fa = t);
      }
    } else Ei();
  }
  function Ei() {
    nt(ce, ce.current), nt(Dn, Dn.current);
  }
  function Ka(t) {
    at(Dn), fa === t && (fa = null), at(ce);
  }
  var ce = X(0);
  function Xu(t) {
    for (var e = t; e !== null; ) {
      if (e.tag === 13) {
        var a = e.memoizedState;
        if (
          a !== null &&
          ((a = a.dehydrated), a === null || a.data === "$?" || Jd(a))
        )
          return e;
      } else if (e.tag === 19 && e.memoizedProps.revealOrder !== void 0) {
        if ((e.flags & 128) !== 0) return e;
      } else if (e.child !== null) {
        (e.child.return = e), (e = e.child);
        continue;
      }
      if (e === t) break;
      for (; e.sibling === null; ) {
        if (e.return === null || e.return === t) return null;
        e = e.return;
      }
      (e.sibling.return = e.return), (e = e.sibling);
    }
    return null;
  }
  function ud(t, e, a, l) {
    (e = t.memoizedState),
      (a = a(l, e)),
      (a = a == null ? e : w({}, e, a)),
      (t.memoizedState = a),
      t.lanes === 0 && (t.updateQueue.baseState = a);
  }
  var cd = {
    enqueueSetState: function (t, e, a) {
      t = t._reactInternals;
      var l = hn(),
        o = oa(l);
      (o.payload = e),
        a != null && (o.callback = a),
        (e = ua(t, o, l)),
        e !== null && (mn(e, t, l), bi(e, t, l));
    },
    enqueueReplaceState: function (t, e, a) {
      t = t._reactInternals;
      var l = hn(),
        o = oa(l);
      (o.tag = 1),
        (o.payload = e),
        a != null && (o.callback = a),
        (e = ua(t, o, l)),
        e !== null && (mn(e, t, l), bi(e, t, l));
    },
    enqueueForceUpdate: function (t, e) {
      t = t._reactInternals;
      var a = hn(),
        l = oa(a);
      (l.tag = 2),
        e != null && (l.callback = e),
        (e = ua(t, l, a)),
        e !== null && (mn(e, t, a), bi(e, t, a));
    },
  };
  function up(t, e, a, l, o, u, h) {
    return (
      (t = t.stateNode),
      typeof t.shouldComponentUpdate == "function"
        ? t.shouldComponentUpdate(l, u, h)
        : e.prototype && e.prototype.isPureReactComponent
        ? !Ji(a, l) || !Ji(o, u)
        : !0
    );
  }
  function cp(t, e, a, l) {
    (t = e.state),
      typeof e.componentWillReceiveProps == "function" &&
        e.componentWillReceiveProps(a, l),
      typeof e.UNSAFE_componentWillReceiveProps == "function" &&
        e.UNSAFE_componentWillReceiveProps(a, l),
      e.state !== t && cd.enqueueReplaceState(e, e.state, null);
  }
  function ml(t, e) {
    var a = e;
    if ("ref" in e) {
      a = {};
      for (var l in e) l !== "ref" && (a[l] = e[l]);
    }
    if ((t = t.defaultProps)) {
      a === e && (a = w({}, a));
      for (var o in t) a[o] === void 0 && (a[o] = t[o]);
    }
    return a;
  }
  var Qu =
    typeof reportError == "function"
      ? reportError
      : function (t) {
          if (
            typeof window == "object" &&
            typeof window.ErrorEvent == "function"
          ) {
            var e = new window.ErrorEvent("error", {
              bubbles: !0,
              cancelable: !0,
              message:
                typeof t == "object" &&
                t !== null &&
                typeof t.message == "string"
                  ? String(t.message)
                  : String(t),
              error: t,
            });
            if (!window.dispatchEvent(e)) return;
          } else if (
            typeof process == "object" &&
            typeof process.emit == "function"
          ) {
            process.emit("uncaughtException", t);
            return;
          }
          console.error(t);
        };
  function fp(t) {
    Qu(t);
  }
  function dp(t) {
    console.error(t);
  }
  function hp(t) {
    Qu(t);
  }
  function Zu(t, e) {
    try {
      var a = t.onUncaughtError;
      a(e.value, { componentStack: e.stack });
    } catch (l) {
      setTimeout(function () {
        throw l;
      });
    }
  }
  function mp(t, e, a) {
    try {
      var l = t.onCaughtError;
      l(a.value, {
        componentStack: a.stack,
        errorBoundary: e.tag === 1 ? e.stateNode : null,
      });
    } catch (o) {
      setTimeout(function () {
        throw o;
      });
    }
  }
  function fd(t, e, a) {
    return (
      (a = oa(a)),
      (a.tag = 3),
      (a.payload = { element: null }),
      (a.callback = function () {
        Zu(t, e);
      }),
      a
    );
  }
  function pp(t) {
    return (t = oa(t)), (t.tag = 3), t;
  }
  function gp(t, e, a, l) {
    var o = a.type.getDerivedStateFromError;
    if (typeof o == "function") {
      var u = l.value;
      (t.payload = function () {
        return o(u);
      }),
        (t.callback = function () {
          mp(e, a, l);
        });
    }
    var h = a.stateNode;
    h !== null &&
      typeof h.componentDidCatch == "function" &&
      (t.callback = function () {
        mp(e, a, l),
          typeof o != "function" &&
            (Oi === null ? (Oi = new Set([this])) : Oi.add(this));
        var v = l.stack;
        this.componentDidCatch(l.value, {
          componentStack: v !== null ? v : "",
        });
      });
  }
  function my(t, e, a, l, o) {
    if (
      ((a.flags |= 32768),
      l !== null && typeof l == "object" && typeof l.then == "function")
    ) {
      if (
        ((e = a.alternate),
        e !== null && xn(e, a, o, !0),
        (a = Dn.current),
        a !== null)
      ) {
        switch (a.tag) {
          case 13:
            return (
              fa === null ? zd() : a.alternate === null && ne === 0 && (ne = 3),
              (a.flags &= -257),
              (a.flags |= 65536),
              (a.lanes = o),
              l === ol
                ? (a.flags |= 16384)
                : ((e = a.updateQueue),
                  e === null ? (a.updateQueue = new Set([l])) : e.add(l),
                  kd(t, l, o)),
              !1
            );
          case 22:
            return (
              (a.flags |= 65536),
              l === ol
                ? (a.flags |= 16384)
                : ((e = a.updateQueue),
                  e === null
                    ? ((e = {
                        transitions: null,
                        markerInstances: null,
                        retryQueue: new Set([l]),
                      }),
                      (a.updateQueue = e))
                    : ((a = e.retryQueue),
                      a === null ? (e.retryQueue = new Set([l])) : a.add(l)),
                  kd(t, l, o)),
              !1
            );
        }
        throw Error(s(435, a.tag));
      }
      return kd(t, l, o), zd(), !1;
    }
    if (Mt)
      return (
        (e = Dn.current),
        e !== null
          ? ((e.flags & 65536) === 0 && (e.flags |= 256),
            (e.flags |= 65536),
            (e.lanes = o),
            l !== Vn && ((t = Error(s(422), { cause: l })), al(Pe(t, a))))
          : (l !== Vn && ((e = Error(s(423), { cause: l })), al(Pe(e, a))),
            (t = t.current.alternate),
            (t.flags |= 65536),
            (o &= -o),
            (t.lanes |= o),
            (l = Pe(l, a)),
            (o = fd(t.stateNode, l, o)),
            cl(t, o),
            ne !== 4 && (ne = 2)),
        !1
      );
    var u = Error(s(520), { cause: l });
    if (
      ((u = Pe(u, a)),
      Fs === null ? (Fs = [u]) : Fs.push(u),
      ne !== 4 && (ne = 2),
      e === null)
    )
      return !0;
    (l = Pe(l, a)), (a = e);
    do {
      switch (a.tag) {
        case 3:
          return (
            (a.flags |= 65536),
            (t = o & -o),
            (a.lanes |= t),
            (t = fd(a.stateNode, l, t)),
            cl(a, t),
            !1
          );
        case 1:
          if (
            ((e = a.type),
            (u = a.stateNode),
            (a.flags & 128) === 0 &&
              (typeof e.getDerivedStateFromError == "function" ||
                (u !== null &&
                  typeof u.componentDidCatch == "function" &&
                  (Oi === null || !Oi.has(u)))))
          )
            return (
              (a.flags |= 65536),
              (o &= -o),
              (a.lanes |= o),
              (o = pp(o)),
              gp(o, t, a, l),
              cl(a, o),
              !1
            );
      }
      a = a.return;
    } while (a !== null);
    return !1;
  }
  var vp = Error(s(461)),
    pe = !1;
  function Ae(t, e, a, l) {
    e.child = t === null ? sp(e, null, a, l) : pr(e, t.child, a, l);
  }
  function bp(t, e, a, l, o) {
    a = a.render;
    var u = e.ref;
    if ("ref" in l) {
      var h = {};
      for (var v in l) v !== "ref" && (h[v] = l[v]);
    } else h = l;
    return (
      Gn(e),
      (l = m(t, e, a, h, u, o)),
      (v = F()),
      t !== null && !pe
        ? (Et(t, e, o), Xa(t, e, o))
        : (Mt && v && xs(e), (e.flags |= 1), Ae(t, e, l, o), e.child)
    );
  }
  function yp(t, e, a, l, o) {
    if (t === null) {
      var u = a.type;
      return typeof u == "function" &&
        !As(u) &&
        u.defaultProps === void 0 &&
        a.compare === null
        ? ((e.tag = 15), (e.type = u), wp(t, e, u, l, o))
        : ((t = sr(a.type, null, l, e, e.mode, o)),
          (t.ref = e.ref),
          (t.return = e),
          (e.child = t));
    }
    if (((u = t.child), !yd(t, o))) {
      var h = u.memoizedProps;
      if (
        ((a = a.compare), (a = a !== null ? a : Ji), a(h, l) && t.ref === e.ref)
      )
        return Xa(t, e, o);
    }
    return (
      (e.flags |= 1),
      (t = Un(u, l)),
      (t.ref = e.ref),
      (t.return = e),
      (e.child = t)
    );
  }
  function wp(t, e, a, l, o) {
    if (t !== null) {
      var u = t.memoizedProps;
      if (Ji(u, l) && t.ref === e.ref)
        if (((pe = !1), (e.pendingProps = l = u), yd(t, o)))
          (t.flags & 131072) !== 0 && (pe = !0);
        else return (e.lanes = t.lanes), Xa(t, e, o);
    }
    return dd(t, e, a, l, o);
  }
  function Ep(t, e, a) {
    var l = e.pendingProps,
      o = l.children,
      u = t !== null ? t.memoizedState : null;
    if (l.mode === "hidden") {
      if ((e.flags & 128) !== 0) {
        if (((l = u !== null ? u.baseLanes | a : a), t !== null)) {
          for (o = e.child = t.child, u = 0; o !== null; )
            (u = u | o.lanes | o.childLanes), (o = o.sibling);
          e.childLanes = u & ~l;
        } else (e.childLanes = 0), (e.child = null);
        return _p(t, e, l, a);
      }
      if ((a & 536870912) !== 0)
        (e.memoizedState = { baseLanes: 0, cachePool: null }),
          t !== null && cr(e, u !== null ? u.cachePool : null),
          u !== null ? Uu(e, u) : js(),
          op(e);
      else
        return (
          (e.lanes = e.childLanes = 536870912),
          _p(t, e, u !== null ? u.baseLanes | a : a, a)
        );
    } else
      u !== null
        ? (cr(e, u.cachePool), Uu(e, u), Ei(), (e.memoizedState = null))
        : (t !== null && cr(e, null), js(), Ei());
    return Ae(t, e, o, a), e.child;
  }
  function _p(t, e, a, l) {
    var o = Ms();
    return (
      (o = o === null ? null : { parent: le._currentValue, pool: o }),
      (e.memoizedState = { baseLanes: a, cachePool: o }),
      t !== null && cr(e, null),
      js(),
      op(e),
      t !== null && xn(t, e, l, !0),
      null
    );
  }
  function Iu(t, e) {
    var a = e.ref;
    if (a === null) t !== null && t.ref !== null && (e.flags |= 4194816);
    else {
      if (typeof a != "function" && typeof a != "object") throw Error(s(284));
      (t === null || t.ref !== a) && (e.flags |= 4194816);
    }
  }
  function dd(t, e, a, l, o) {
    return (
      Gn(e),
      (a = m(t, e, a, l, void 0, o)),
      (l = F()),
      t !== null && !pe
        ? (Et(t, e, o), Xa(t, e, o))
        : (Mt && l && xs(e), (e.flags |= 1), Ae(t, e, a, o), e.child)
    );
  }
  function Sp(t, e, a, l, o, u) {
    return (
      Gn(e),
      (e.updateQueue = null),
      (a = Y(e, l, a, o)),
      S(t),
      (l = F()),
      t !== null && !pe
        ? (Et(t, e, u), Xa(t, e, u))
        : (Mt && l && xs(e), (e.flags |= 1), Ae(t, e, a, u), e.child)
    );
  }
  function Ap(t, e, a, l, o) {
    if ((Gn(e), e.stateNode === null)) {
      var u = mi,
        h = a.contextType;
      typeof h == "object" && h !== null && (u = he(h)),
        (u = new a(l, u)),
        (e.memoizedState =
          u.state !== null && u.state !== void 0 ? u.state : null),
        (u.updater = cd),
        (e.stateNode = u),
        (u._reactInternals = e),
        (u = e.stateNode),
        (u.props = l),
        (u.state = e.memoizedState),
        (u.refs = {}),
        ul(e),
        (h = a.contextType),
        (u.context = typeof h == "object" && h !== null ? he(h) : mi),
        (u.state = e.memoizedState),
        (h = a.getDerivedStateFromProps),
        typeof h == "function" && (ud(e, a, h, l), (u.state = e.memoizedState)),
        typeof a.getDerivedStateFromProps == "function" ||
          typeof u.getSnapshotBeforeUpdate == "function" ||
          (typeof u.UNSAFE_componentWillMount != "function" &&
            typeof u.componentWillMount != "function") ||
          ((h = u.state),
          typeof u.componentWillMount == "function" && u.componentWillMount(),
          typeof u.UNSAFE_componentWillMount == "function" &&
            u.UNSAFE_componentWillMount(),
          h !== u.state && cd.enqueueReplaceState(u, u.state, null),
          fl(e, l, u, o),
          un(),
          (u.state = e.memoizedState)),
        typeof u.componentDidMount == "function" && (e.flags |= 4194308),
        (l = !0);
    } else if (t === null) {
      u = e.stateNode;
      var v = e.memoizedProps,
        _ = ml(a, v);
      u.props = _;
      var R = u.context,
        P = a.contextType;
      (h = mi), typeof P == "object" && P !== null && (h = he(P));
      var K = a.getDerivedStateFromProps;
      (P =
        typeof K == "function" ||
        typeof u.getSnapshotBeforeUpdate == "function"),
        (v = e.pendingProps !== v),
        P ||
          (typeof u.UNSAFE_componentWillReceiveProps != "function" &&
            typeof u.componentWillReceiveProps != "function") ||
          ((v || R !== h) && cp(e, u, l, h)),
        (sa = !1);
      var B = e.memoizedState;
      (u.state = B),
        fl(e, l, u, o),
        un(),
        (R = e.memoizedState),
        v || B !== R || sa
          ? (typeof K == "function" && (ud(e, a, K, l), (R = e.memoizedState)),
            (_ = sa || up(e, a, _, l, B, R, h))
              ? (P ||
                  (typeof u.UNSAFE_componentWillMount != "function" &&
                    typeof u.componentWillMount != "function") ||
                  (typeof u.componentWillMount == "function" &&
                    u.componentWillMount(),
                  typeof u.UNSAFE_componentWillMount == "function" &&
                    u.UNSAFE_componentWillMount()),
                typeof u.componentDidMount == "function" &&
                  (e.flags |= 4194308))
              : (typeof u.componentDidMount == "function" &&
                  (e.flags |= 4194308),
                (e.memoizedProps = l),
                (e.memoizedState = R)),
            (u.props = l),
            (u.state = R),
            (u.context = h),
            (l = _))
          : (typeof u.componentDidMount == "function" && (e.flags |= 4194308),
            (l = !1));
    } else {
      (u = e.stateNode),
        Hs(t, e),
        (h = e.memoizedProps),
        (P = ml(a, h)),
        (u.props = P),
        (K = e.pendingProps),
        (B = u.context),
        (R = a.contextType),
        (_ = mi),
        typeof R == "object" && R !== null && (_ = he(R)),
        (v = a.getDerivedStateFromProps),
        (R =
          typeof v == "function" ||
          typeof u.getSnapshotBeforeUpdate == "function") ||
          (typeof u.UNSAFE_componentWillReceiveProps != "function" &&
            typeof u.componentWillReceiveProps != "function") ||
          ((h !== K || B !== _) && cp(e, u, l, _)),
        (sa = !1),
        (B = e.memoizedState),
        (u.state = B),
        fl(e, l, u, o),
        un();
      var H = e.memoizedState;
      h !== K ||
      B !== H ||
      sa ||
      (t !== null && t.dependencies !== null && ur(t.dependencies))
        ? (typeof v == "function" && (ud(e, a, v, l), (H = e.memoizedState)),
          (P =
            sa ||
            up(e, a, P, l, B, H, _) ||
            (t !== null && t.dependencies !== null && ur(t.dependencies)))
            ? (R ||
                (typeof u.UNSAFE_componentWillUpdate != "function" &&
                  typeof u.componentWillUpdate != "function") ||
                (typeof u.componentWillUpdate == "function" &&
                  u.componentWillUpdate(l, H, _),
                typeof u.UNSAFE_componentWillUpdate == "function" &&
                  u.UNSAFE_componentWillUpdate(l, H, _)),
              typeof u.componentDidUpdate == "function" && (e.flags |= 4),
              typeof u.getSnapshotBeforeUpdate == "function" &&
                (e.flags |= 1024))
            : (typeof u.componentDidUpdate != "function" ||
                (h === t.memoizedProps && B === t.memoizedState) ||
                (e.flags |= 4),
              typeof u.getSnapshotBeforeUpdate != "function" ||
                (h === t.memoizedProps && B === t.memoizedState) ||
                (e.flags |= 1024),
              (e.memoizedProps = l),
              (e.memoizedState = H)),
          (u.props = l),
          (u.state = H),
          (u.context = _),
          (l = P))
        : (typeof u.componentDidUpdate != "function" ||
            (h === t.memoizedProps && B === t.memoizedState) ||
            (e.flags |= 4),
          typeof u.getSnapshotBeforeUpdate != "function" ||
            (h === t.memoizedProps && B === t.memoizedState) ||
            (e.flags |= 1024),
          (l = !1));
    }
    return (
      (u = l),
      Iu(t, e),
      (l = (e.flags & 128) !== 0),
      u || l
        ? ((u = e.stateNode),
          (a =
            l && typeof a.getDerivedStateFromError != "function"
              ? null
              : u.render()),
          (e.flags |= 1),
          t !== null && l
            ? ((e.child = pr(e, t.child, null, o)),
              (e.child = pr(e, null, a, o)))
            : Ae(t, e, a, o),
          (e.memoizedState = u.state),
          (t = e.child))
        : (t = Xa(t, e, o)),
      t
    );
  }
  function Tp(t, e, a, l) {
    return el(), (e.flags |= 256), Ae(t, e, a, l), e.child;
  }
  var hd = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0,
    hydrationErrors: null,
  };
  function md(t) {
    return { baseLanes: t, cachePool: Hu() };
  }
  function pd(t, e, a) {
    return (t = t !== null ? t.childLanes & ~a : 0), e && (t |= Rn), t;
  }
  function xp(t, e, a) {
    var l = e.pendingProps,
      o = !1,
      u = (e.flags & 128) !== 0,
      h;
    if (
      ((h = u) ||
        (h =
          t !== null && t.memoizedState === null ? !1 : (ce.current & 2) !== 0),
      h && ((o = !0), (e.flags &= -129)),
      (h = (e.flags & 32) !== 0),
      (e.flags &= -33),
      t === null)
    ) {
      if (Mt) {
        if ((o ? wi(e) : Ei(), Mt)) {
          var v = Zt,
            _;
          if ((_ = v)) {
            t: {
              for (_ = v, v = An; _.nodeType !== 8; ) {
                if (!v) {
                  v = null;
                  break t;
                }
                if (((_ = In(_.nextSibling)), _ === null)) {
                  v = null;
                  break t;
                }
              }
              v = _;
            }
            v !== null
              ? ((e.memoizedState = {
                  dehydrated: v,
                  treeContext: Ua !== null ? { id: $n, overflow: qn } : null,
                  retryLane: 536870912,
                  hydrationErrors: null,
                }),
                (_ = He(18, null, null, 0)),
                (_.stateNode = v),
                (_.return = e),
                (e.child = _),
                (_e = e),
                (Zt = null),
                (_ = !0))
              : (_ = !1);
          }
          _ || Va(e);
        }
        if (
          ((v = e.memoizedState),
          v !== null && ((v = v.dehydrated), v !== null))
        )
          return Jd(v) ? (e.lanes = 32) : (e.lanes = 536870912), null;
        Ka(e);
      }
      return (
        (v = l.children),
        (l = l.fallback),
        o
          ? (Ei(),
            (o = e.mode),
            (v = Fu({ mode: "hidden", children: v }, o)),
            (l = _n(l, o, a, null)),
            (v.return = e),
            (l.return = e),
            (v.sibling = l),
            (e.child = v),
            (o = e.child),
            (o.memoizedState = md(a)),
            (o.childLanes = pd(t, h, a)),
            (e.memoizedState = hd),
            l)
          : (wi(e), gd(e, v))
      );
    }
    if (
      ((_ = t.memoizedState), _ !== null && ((v = _.dehydrated), v !== null))
    ) {
      if (u)
        e.flags & 256
          ? (wi(e), (e.flags &= -257), (e = vd(t, e, a)))
          : e.memoizedState !== null
          ? (Ei(), (e.child = t.child), (e.flags |= 128), (e = null))
          : (Ei(),
            (o = l.fallback),
            (v = e.mode),
            (l = Fu({ mode: "visible", children: l.children }, v)),
            (o = _n(o, v, a, null)),
            (o.flags |= 2),
            (l.return = e),
            (o.return = e),
            (l.sibling = o),
            (e.child = l),
            pr(e, t.child, null, a),
            (l = e.child),
            (l.memoizedState = md(a)),
            (l.childLanes = pd(t, h, a)),
            (e.memoizedState = hd),
            (e = o));
      else if ((wi(e), Jd(v))) {
        if (((h = v.nextSibling && v.nextSibling.dataset), h)) var R = h.dgst;
        (h = R),
          (l = Error(s(419))),
          (l.stack = ""),
          (l.digest = h),
          al({ value: l, source: null, stack: null }),
          (e = vd(t, e, a));
      } else if (
        (pe || xn(t, e, a, !1), (h = (a & t.childLanes) !== 0), pe || h)
      ) {
        if (
          ((h = Kt),
          h !== null &&
            ((l = a & -a),
            (l = (l & 42) !== 0 ? 1 : Ir(l)),
            (l = (l & (h.suspendedLanes | a)) !== 0 ? 0 : l),
            l !== 0 && l !== _.retryLane))
        )
          throw ((_.retryLane = l), hi(t, l), mn(h, t, l), vp);
        v.data === "$?" || zd(), (e = vd(t, e, a));
      } else
        v.data === "$?"
          ? ((e.flags |= 192), (e.child = t.child), (e = null))
          : ((t = _.treeContext),
            (Zt = In(v.nextSibling)),
            (_e = e),
            (Mt = !0),
            (qa = null),
            (An = !1),
            t !== null &&
              ((Ge[Ke++] = $n),
              (Ge[Ke++] = qn),
              (Ge[Ke++] = Ua),
              ($n = t.id),
              (qn = t.overflow),
              (Ua = e)),
            (e = gd(e, l.children)),
            (e.flags |= 4096));
      return e;
    }
    return o
      ? (Ei(),
        (o = l.fallback),
        (v = e.mode),
        (_ = t.child),
        (R = _.sibling),
        (l = Un(_, { mode: "hidden", children: l.children })),
        (l.subtreeFlags = _.subtreeFlags & 65011712),
        R !== null ? (o = Un(R, o)) : ((o = _n(o, v, a, null)), (o.flags |= 2)),
        (o.return = e),
        (l.return = e),
        (l.sibling = o),
        (e.child = l),
        (l = o),
        (o = e.child),
        (v = t.child.memoizedState),
        v === null
          ? (v = md(a))
          : ((_ = v.cachePool),
            _ !== null
              ? ((R = le._currentValue),
                (_ = _.parent !== R ? { parent: R, pool: R } : _))
              : (_ = Hu()),
            (v = { baseLanes: v.baseLanes | a, cachePool: _ })),
        (o.memoizedState = v),
        (o.childLanes = pd(t, h, a)),
        (e.memoizedState = hd),
        l)
      : (wi(e),
        (a = t.child),
        (t = a.sibling),
        (a = Un(a, { mode: "visible", children: l.children })),
        (a.return = e),
        (a.sibling = null),
        t !== null &&
          ((h = e.deletions),
          h === null ? ((e.deletions = [t]), (e.flags |= 16)) : h.push(t)),
        (e.child = a),
        (e.memoizedState = null),
        a);
  }
  function gd(t, e) {
    return (
      (e = Fu({ mode: "visible", children: e }, t.mode)),
      (e.return = t),
      (t.child = e)
    );
  }
  function Fu(t, e) {
    return (
      (t = He(22, t, null, e)),
      (t.lanes = 0),
      (t.stateNode = {
        _visibility: 1,
        _pendingMarkers: null,
        _retryCache: null,
        _transitions: null,
      }),
      t
    );
  }
  function vd(t, e, a) {
    return (
      pr(e, t.child, null, a),
      (t = gd(e, e.pendingProps.children)),
      (t.flags |= 2),
      (e.memoizedState = null),
      t
    );
  }
  function Op(t, e, a) {
    t.lanes |= e;
    var l = t.alternate;
    l !== null && (l.lanes |= e), Cs(t.return, e, a);
  }
  function bd(t, e, a, l, o) {
    var u = t.memoizedState;
    u === null
      ? (t.memoizedState = {
          isBackwards: e,
          rendering: null,
          renderingStartTime: 0,
          last: l,
          tail: a,
          tailMode: o,
        })
      : ((u.isBackwards = e),
        (u.rendering = null),
        (u.renderingStartTime = 0),
        (u.last = l),
        (u.tail = a),
        (u.tailMode = o));
  }
  function Cp(t, e, a) {
    var l = e.pendingProps,
      o = l.revealOrder,
      u = l.tail;
    if ((Ae(t, e, l.children, a), (l = ce.current), (l & 2) !== 0))
      (l = (l & 1) | 2), (e.flags |= 128);
    else {
      if (t !== null && (t.flags & 128) !== 0)
        t: for (t = e.child; t !== null; ) {
          if (t.tag === 13) t.memoizedState !== null && Op(t, a, e);
          else if (t.tag === 19) Op(t, a, e);
          else if (t.child !== null) {
            (t.child.return = t), (t = t.child);
            continue;
          }
          if (t === e) break t;
          for (; t.sibling === null; ) {
            if (t.return === null || t.return === e) break t;
            t = t.return;
          }
          (t.sibling.return = t.return), (t = t.sibling);
        }
      l &= 1;
    }
    switch ((nt(ce, l), o)) {
      case "forwards":
        for (a = e.child, o = null; a !== null; )
          (t = a.alternate),
            t !== null && Xu(t) === null && (o = a),
            (a = a.sibling);
        (a = o),
          a === null
            ? ((o = e.child), (e.child = null))
            : ((o = a.sibling), (a.sibling = null)),
          bd(e, !1, o, a, u);
        break;
      case "backwards":
        for (a = null, o = e.child, e.child = null; o !== null; ) {
          if (((t = o.alternate), t !== null && Xu(t) === null)) {
            e.child = o;
            break;
          }
          (t = o.sibling), (o.sibling = a), (a = o), (o = t);
        }
        bd(e, !0, a, null, u);
        break;
      case "together":
        bd(e, !1, null, null, void 0);
        break;
      default:
        e.memoizedState = null;
    }
    return e.child;
  }
  function Xa(t, e, a) {
    if (
      (t !== null && (e.dependencies = t.dependencies),
      (xi |= e.lanes),
      (a & e.childLanes) === 0)
    )
      if (t !== null) {
        if ((xn(t, e, a, !1), (a & e.childLanes) === 0)) return null;
      } else return null;
    if (t !== null && e.child !== t.child) throw Error(s(153));
    if (e.child !== null) {
      for (
        t = e.child, a = Un(t, t.pendingProps), e.child = a, a.return = e;
        t.sibling !== null;

      )
        (t = t.sibling),
          (a = a.sibling = Un(t, t.pendingProps)),
          (a.return = e);
      a.sibling = null;
    }
    return e.child;
  }
  function yd(t, e) {
    return (t.lanes & e) !== 0
      ? !0
      : ((t = t.dependencies), !!(t !== null && ur(t)));
  }
  function py(t, e, a) {
    switch (e.tag) {
      case 3:
        Dt(e, e.stateNode.containerInfo),
          ra(e, le, t.memoizedState.cache),
          el();
        break;
      case 27:
      case 5:
        ai(e);
        break;
      case 4:
        Dt(e, e.stateNode.containerInfo);
        break;
      case 10:
        ra(e, e.type, e.memoizedProps.value);
        break;
      case 13:
        var l = e.memoizedState;
        if (l !== null)
          return l.dehydrated !== null
            ? (wi(e), (e.flags |= 128), null)
            : (a & e.child.childLanes) !== 0
            ? xp(t, e, a)
            : (wi(e), (t = Xa(t, e, a)), t !== null ? t.sibling : null);
        wi(e);
        break;
      case 19:
        var o = (t.flags & 128) !== 0;
        if (
          ((l = (a & e.childLanes) !== 0),
          l || (xn(t, e, a, !1), (l = (a & e.childLanes) !== 0)),
          o)
        ) {
          if (l) return Cp(t, e, a);
          e.flags |= 128;
        }
        if (
          ((o = e.memoizedState),
          o !== null &&
            ((o.rendering = null), (o.tail = null), (o.lastEffect = null)),
          nt(ce, ce.current),
          l)
        )
          break;
        return null;
      case 22:
      case 23:
        return (e.lanes = 0), Ep(t, e, a);
      case 24:
        ra(e, le, t.memoizedState.cache);
    }
    return Xa(t, e, a);
  }
  function Np(t, e, a) {
    if (t !== null)
      if (t.memoizedProps !== e.pendingProps) pe = !0;
      else {
        if (!yd(t, a) && (e.flags & 128) === 0) return (pe = !1), py(t, e, a);
        pe = (t.flags & 131072) !== 0;
      }
    else (pe = !1), Mt && (e.flags & 1048576) !== 0 && Du(e, gi, e.index);
    switch (((e.lanes = 0), e.tag)) {
      case 16:
        t: {
          t = e.pendingProps;
          var l = e.elementType,
            o = l._init;
          if (((l = o(l._payload)), (e.type = l), typeof l == "function"))
            As(l)
              ? ((t = ml(l, t)), (e.tag = 1), (e = Ap(null, e, l, t, a)))
              : ((e.tag = 0), (e = dd(null, e, l, t, a)));
          else {
            if (l != null) {
              if (((o = l.$$typeof), o === et)) {
                (e.tag = 11), (e = bp(null, e, l, t, a));
                break t;
              } else if (o === ut) {
                (e.tag = 14), (e = yp(null, e, l, t, a));
                break t;
              }
            }
            throw ((e = ye(l) || l), Error(s(306, e, "")));
          }
        }
        return e;
      case 0:
        return dd(t, e, e.type, e.pendingProps, a);
      case 1:
        return (l = e.type), (o = ml(l, e.pendingProps)), Ap(t, e, l, o, a);
      case 3:
        t: {
          if ((Dt(e, e.stateNode.containerInfo), t === null))
            throw Error(s(387));
          l = e.pendingProps;
          var u = e.memoizedState;
          (o = u.element), Hs(t, e), fl(e, l, null, a);
          var h = e.memoizedState;
          if (
            ((l = h.cache),
            ra(e, le, l),
            l !== u.cache && Ns(e, [le], a, !0),
            un(),
            (l = h.element),
            u.isDehydrated)
          )
            if (
              ((u = { element: l, isDehydrated: !1, cache: h.cache }),
              (e.updateQueue.baseState = u),
              (e.memoizedState = u),
              e.flags & 256)
            ) {
              e = Tp(t, e, l, a);
              break t;
            } else if (l !== o) {
              (o = Pe(Error(s(424)), e)), al(o), (e = Tp(t, e, l, a));
              break t;
            } else {
              switch (((t = e.stateNode.containerInfo), t.nodeType)) {
                case 9:
                  t = t.body;
                  break;
                default:
                  t = t.nodeName === "HTML" ? t.ownerDocument.body : t;
              }
              for (
                Zt = In(t.firstChild),
                  _e = e,
                  Mt = !0,
                  qa = null,
                  An = !0,
                  a = sp(e, null, l, a),
                  e.child = a;
                a;

              )
                (a.flags = (a.flags & -3) | 4096), (a = a.sibling);
            }
          else {
            if ((el(), l === o)) {
              e = Xa(t, e, a);
              break t;
            }
            Ae(t, e, l, a);
          }
          e = e.child;
        }
        return e;
      case 26:
        return (
          Iu(t, e),
          t === null
            ? (a = Lg(e.type, null, e.pendingProps, null))
              ? (e.memoizedState = a)
              : Mt ||
                ((a = e.type),
                (t = e.pendingProps),
                (l = fc(dt.current).createElement(a)),
                (l[ie] = e),
                (l[Oe] = t),
                xe(l, a, t),
                Wt(l),
                (e.stateNode = l))
            : (e.memoizedState = Lg(
                e.type,
                t.memoizedProps,
                e.pendingProps,
                t.memoizedState
              )),
          null
        );
      case 27:
        return (
          ai(e),
          t === null &&
            Mt &&
            ((l = e.stateNode = Dg(e.type, e.pendingProps, dt.current)),
            (_e = e),
            (An = !0),
            (o = Zt),
            Di(e.type) ? ((Wd = o), (Zt = In(l.firstChild))) : (Zt = o)),
          Ae(t, e, e.pendingProps.children, a),
          Iu(t, e),
          t === null && (e.flags |= 4194304),
          e.child
        );
      case 5:
        return (
          t === null &&
            Mt &&
            ((o = l = Zt) &&
              ((l = Yy(l, e.type, e.pendingProps, An)),
              l !== null
                ? ((e.stateNode = l),
                  (_e = e),
                  (Zt = In(l.firstChild)),
                  (An = !1),
                  (o = !0))
                : (o = !1)),
            o || Va(e)),
          ai(e),
          (o = e.type),
          (u = e.pendingProps),
          (h = t !== null ? t.memoizedProps : null),
          (l = u.children),
          Zd(o, u) ? (l = null) : h !== null && Zd(o, h) && (e.flags |= 32),
          e.memoizedState !== null &&
            ((o = m(t, e, tt, null, null, a)), (ro._currentValue = o)),
          Iu(t, e),
          Ae(t, e, l, a),
          e.child
        );
      case 6:
        return (
          t === null &&
            Mt &&
            ((t = a = Zt) &&
              ((a = Py(a, e.pendingProps, An)),
              a !== null
                ? ((e.stateNode = a), (_e = e), (Zt = null), (t = !0))
                : (t = !1)),
            t || Va(e)),
          null
        );
      case 13:
        return xp(t, e, a);
      case 4:
        return (
          Dt(e, e.stateNode.containerInfo),
          (l = e.pendingProps),
          t === null ? (e.child = pr(e, null, l, a)) : Ae(t, e, l, a),
          e.child
        );
      case 11:
        return bp(t, e, e.type, e.pendingProps, a);
      case 7:
        return Ae(t, e, e.pendingProps, a), e.child;
      case 8:
        return Ae(t, e, e.pendingProps.children, a), e.child;
      case 12:
        return Ae(t, e, e.pendingProps.children, a), e.child;
      case 10:
        return (
          (l = e.pendingProps),
          ra(e, e.type, l.value),
          Ae(t, e, l.children, a),
          e.child
        );
      case 9:
        return (
          (o = e.type._context),
          (l = e.pendingProps.children),
          Gn(e),
          (o = he(o)),
          (l = l(o)),
          (e.flags |= 1),
          Ae(t, e, l, a),
          e.child
        );
      case 14:
        return yp(t, e, e.type, e.pendingProps, a);
      case 15:
        return wp(t, e, e.type, e.pendingProps, a);
      case 19:
        return Cp(t, e, a);
      case 31:
        return (
          (l = e.pendingProps),
          (a = e.mode),
          (l = { mode: l.mode, children: l.children }),
          t === null
            ? ((a = Fu(l, a)),
              (a.ref = e.ref),
              (e.child = a),
              (a.return = e),
              (e = a))
            : ((a = Un(t.child, l)),
              (a.ref = e.ref),
              (e.child = a),
              (a.return = e),
              (e = a)),
          e
        );
      case 22:
        return Ep(t, e, a);
      case 24:
        return (
          Gn(e),
          (l = he(le)),
          t === null
            ? ((o = Ms()),
              o === null &&
                ((o = Kt),
                (u = Ds()),
                (o.pooledCache = u),
                u.refCount++,
                u !== null && (o.pooledCacheLanes |= a),
                (o = u)),
              (e.memoizedState = { parent: l, cache: o }),
              ul(e),
              ra(e, le, o))
            : ((t.lanes & a) !== 0 && (Hs(t, e), fl(e, null, null, a), un()),
              (o = t.memoizedState),
              (u = e.memoizedState),
              o.parent !== l
                ? ((o = { parent: l, cache: l }),
                  (e.memoizedState = o),
                  e.lanes === 0 &&
                    (e.memoizedState = e.updateQueue.baseState = o),
                  ra(e, le, l))
                : ((l = u.cache),
                  ra(e, le, l),
                  l !== o.cache && Ns(e, [le], a, !0))),
          Ae(t, e, e.pendingProps.children, a),
          e.child
        );
      case 29:
        throw e.pendingProps;
    }
    throw Error(s(156, e.tag));
  }
  function Qa(t) {
    t.flags |= 4;
  }
  function Dp(t, e) {
    if (e.type !== "stylesheet" || (e.state.loading & 4) !== 0)
      t.flags &= -16777217;
    else if (((t.flags |= 16777216), !jg(e))) {
      if (
        ((e = Dn.current),
        e !== null &&
          ((Rt & 4194048) === Rt
            ? fa !== null
            : ((Rt & 62914560) !== Rt && (Rt & 536870912) === 0) || e !== fa))
      )
        throw ((Pa = ol), ku);
      t.flags |= 8192;
    }
  }
  function Ju(t, e) {
    e !== null && (t.flags |= 4),
      t.flags & 16384 &&
        ((e = t.tag !== 22 ? Bo() : 536870912), (t.lanes |= e), (yr |= e));
  }
  function Gs(t, e) {
    if (!Mt)
      switch (t.tailMode) {
        case "hidden":
          e = t.tail;
          for (var a = null; e !== null; )
            e.alternate !== null && (a = e), (e = e.sibling);
          a === null ? (t.tail = null) : (a.sibling = null);
          break;
        case "collapsed":
          a = t.tail;
          for (var l = null; a !== null; )
            a.alternate !== null && (l = a), (a = a.sibling);
          l === null
            ? e || t.tail === null
              ? (t.tail = null)
              : (t.tail.sibling = null)
            : (l.sibling = null);
      }
  }
  function Ft(t) {
    var e = t.alternate !== null && t.alternate.child === t.child,
      a = 0,
      l = 0;
    if (e)
      for (var o = t.child; o !== null; )
        (a |= o.lanes | o.childLanes),
          (l |= o.subtreeFlags & 65011712),
          (l |= o.flags & 65011712),
          (o.return = t),
          (o = o.sibling);
    else
      for (o = t.child; o !== null; )
        (a |= o.lanes | o.childLanes),
          (l |= o.subtreeFlags),
          (l |= o.flags),
          (o.return = t),
          (o = o.sibling);
    return (t.subtreeFlags |= l), (t.childLanes = a), e;
  }
  function gy(t, e, a) {
    var l = e.pendingProps;
    switch ((Os(e), e.tag)) {
      case 31:
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return Ft(e), null;
      case 1:
        return Ft(e), null;
      case 3:
        return (
          (a = e.stateNode),
          (l = null),
          t !== null && (l = t.memoizedState.cache),
          e.memoizedState.cache !== l && (e.flags |= 2048),
          Tn(le),
          qe(),
          a.pendingContext &&
            ((a.context = a.pendingContext), (a.pendingContext = null)),
          (t === null || t.child === null) &&
            (tl(e)
              ? Qa(e)
              : t === null ||
                (t.memoizedState.isDehydrated && (e.flags & 256) === 0) ||
                ((e.flags |= 1024), nl())),
          Ft(e),
          null
        );
      case 26:
        return (
          (a = e.memoizedState),
          t === null
            ? (Qa(e),
              a !== null ? (Ft(e), Dp(e, a)) : (Ft(e), (e.flags &= -16777217)))
            : a
            ? a !== t.memoizedState
              ? (Qa(e), Ft(e), Dp(e, a))
              : (Ft(e), (e.flags &= -16777217))
            : (t.memoizedProps !== l && Qa(e), Ft(e), (e.flags &= -16777217)),
          null
        );
      case 27:
        Q(e), (a = dt.current);
        var o = e.type;
        if (t !== null && e.stateNode != null) t.memoizedProps !== l && Qa(e);
        else {
          if (!l) {
            if (e.stateNode === null) throw Error(s(166));
            return Ft(e), null;
          }
          (t = st.current),
            tl(e) ? Ru(e) : ((t = Dg(o, l, a)), (e.stateNode = t), Qa(e));
        }
        return Ft(e), null;
      case 5:
        if ((Q(e), (a = e.type), t !== null && e.stateNode != null))
          t.memoizedProps !== l && Qa(e);
        else {
          if (!l) {
            if (e.stateNode === null) throw Error(s(166));
            return Ft(e), null;
          }
          if (((t = st.current), tl(e))) Ru(e);
          else {
            switch (((o = fc(dt.current)), t)) {
              case 1:
                t = o.createElementNS("http://www.w3.org/2000/svg", a);
                break;
              case 2:
                t = o.createElementNS("http://www.w3.org/1998/Math/MathML", a);
                break;
              default:
                switch (a) {
                  case "svg":
                    t = o.createElementNS("http://www.w3.org/2000/svg", a);
                    break;
                  case "math":
                    t = o.createElementNS(
                      "http://www.w3.org/1998/Math/MathML",
                      a
                    );
                    break;
                  case "script":
                    (t = o.createElement("div")),
                      (t.innerHTML = "<script></script>"),
                      (t = t.removeChild(t.firstChild));
                    break;
                  case "select":
                    (t =
                      typeof l.is == "string"
                        ? o.createElement("select", { is: l.is })
                        : o.createElement("select")),
                      l.multiple
                        ? (t.multiple = !0)
                        : l.size && (t.size = l.size);
                    break;
                  default:
                    t =
                      typeof l.is == "string"
                        ? o.createElement(a, { is: l.is })
                        : o.createElement(a);
                }
            }
            (t[ie] = e), (t[Oe] = l);
            t: for (o = e.child; o !== null; ) {
              if (o.tag === 5 || o.tag === 6) t.appendChild(o.stateNode);
              else if (o.tag !== 4 && o.tag !== 27 && o.child !== null) {
                (o.child.return = o), (o = o.child);
                continue;
              }
              if (o === e) break t;
              for (; o.sibling === null; ) {
                if (o.return === null || o.return === e) break t;
                o = o.return;
              }
              (o.sibling.return = o.return), (o = o.sibling);
            }
            e.stateNode = t;
            t: switch ((xe(t, a, l), a)) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                t = !!l.autoFocus;
                break t;
              case "img":
                t = !0;
                break t;
              default:
                t = !1;
            }
            t && Qa(e);
          }
        }
        return Ft(e), (e.flags &= -16777217), null;
      case 6:
        if (t && e.stateNode != null) t.memoizedProps !== l && Qa(e);
        else {
          if (typeof l != "string" && e.stateNode === null) throw Error(s(166));
          if (((t = dt.current), tl(e))) {
            if (
              ((t = e.stateNode),
              (a = e.memoizedProps),
              (l = null),
              (o = _e),
              o !== null)
            )
              switch (o.tag) {
                case 27:
                case 5:
                  l = o.memoizedProps;
              }
            (t[ie] = e),
              (t = !!(
                t.nodeValue === a ||
                (l !== null && l.suppressHydrationWarning === !0) ||
                Sg(t.nodeValue, a)
              )),
              t || Va(e);
          } else (t = fc(t).createTextNode(l)), (t[ie] = e), (e.stateNode = t);
        }
        return Ft(e), null;
      case 13:
        if (
          ((l = e.memoizedState),
          t === null ||
            (t.memoizedState !== null && t.memoizedState.dehydrated !== null))
        ) {
          if (((o = tl(e)), l !== null && l.dehydrated !== null)) {
            if (t === null) {
              if (!o) throw Error(s(318));
              if (
                ((o = e.memoizedState),
                (o = o !== null ? o.dehydrated : null),
                !o)
              )
                throw Error(s(317));
              o[ie] = e;
            } else
              el(),
                (e.flags & 128) === 0 && (e.memoizedState = null),
                (e.flags |= 4);
            Ft(e), (o = !1);
          } else
            (o = nl()),
              t !== null &&
                t.memoizedState !== null &&
                (t.memoizedState.hydrationErrors = o),
              (o = !0);
          if (!o) return e.flags & 256 ? (Ka(e), e) : (Ka(e), null);
        }
        if ((Ka(e), (e.flags & 128) !== 0)) return (e.lanes = a), e;
        if (
          ((a = l !== null), (t = t !== null && t.memoizedState !== null), a)
        ) {
          (l = e.child),
            (o = null),
            l.alternate !== null &&
              l.alternate.memoizedState !== null &&
              l.alternate.memoizedState.cachePool !== null &&
              (o = l.alternate.memoizedState.cachePool.pool);
          var u = null;
          l.memoizedState !== null &&
            l.memoizedState.cachePool !== null &&
            (u = l.memoizedState.cachePool.pool),
            u !== o && (l.flags |= 2048);
        }
        return (
          a !== t && a && (e.child.flags |= 8192),
          Ju(e, e.updateQueue),
          Ft(e),
          null
        );
      case 4:
        return qe(), t === null && Pd(e.stateNode.containerInfo), Ft(e), null;
      case 10:
        return Tn(e.type), Ft(e), null;
      case 19:
        if ((at(ce), (o = e.memoizedState), o === null)) return Ft(e), null;
        if (((l = (e.flags & 128) !== 0), (u = o.rendering), u === null))
          if (l) Gs(o, !1);
          else {
            if (ne !== 0 || (t !== null && (t.flags & 128) !== 0))
              for (t = e.child; t !== null; ) {
                if (((u = Xu(t)), u !== null)) {
                  for (
                    e.flags |= 128,
                      Gs(o, !1),
                      t = u.updateQueue,
                      e.updateQueue = t,
                      Ju(e, t),
                      e.subtreeFlags = 0,
                      t = a,
                      a = e.child;
                    a !== null;

                  )
                    rr(a, t), (a = a.sibling);
                  return nt(ce, (ce.current & 1) | 2), e.child;
                }
                t = t.sibling;
              }
            o.tail !== null &&
              Le() > ec &&
              ((e.flags |= 128), (l = !0), Gs(o, !1), (e.lanes = 4194304));
          }
        else {
          if (!l)
            if (((t = Xu(u)), t !== null)) {
              if (
                ((e.flags |= 128),
                (l = !0),
                (t = t.updateQueue),
                (e.updateQueue = t),
                Ju(e, t),
                Gs(o, !0),
                o.tail === null &&
                  o.tailMode === "hidden" &&
                  !u.alternate &&
                  !Mt)
              )
                return Ft(e), null;
            } else
              2 * Le() - o.renderingStartTime > ec &&
                a !== 536870912 &&
                ((e.flags |= 128), (l = !0), Gs(o, !1), (e.lanes = 4194304));
          o.isBackwards
            ? ((u.sibling = e.child), (e.child = u))
            : ((t = o.last),
              t !== null ? (t.sibling = u) : (e.child = u),
              (o.last = u));
        }
        return o.tail !== null
          ? ((e = o.tail),
            (o.rendering = e),
            (o.tail = e.sibling),
            (o.renderingStartTime = Le()),
            (e.sibling = null),
            (t = ce.current),
            nt(ce, l ? (t & 1) | 2 : t & 1),
            e)
          : (Ft(e), null);
      case 22:
      case 23:
        return (
          Ka(e),
          Us(),
          (l = e.memoizedState !== null),
          t !== null
            ? (t.memoizedState !== null) !== l && (e.flags |= 8192)
            : l && (e.flags |= 8192),
          l
            ? (a & 536870912) !== 0 &&
              (e.flags & 128) === 0 &&
              (Ft(e), e.subtreeFlags & 6 && (e.flags |= 8192))
            : Ft(e),
          (a = e.updateQueue),
          a !== null && Ju(e, a.retryQueue),
          (a = null),
          t !== null &&
            t.memoizedState !== null &&
            t.memoizedState.cachePool !== null &&
            (a = t.memoizedState.cachePool.pool),
          (l = null),
          e.memoizedState !== null &&
            e.memoizedState.cachePool !== null &&
            (l = e.memoizedState.cachePool.pool),
          l !== a && (e.flags |= 2048),
          t !== null && at(Ya),
          null
        );
      case 24:
        return (
          (a = null),
          t !== null && (a = t.memoizedState.cache),
          e.memoizedState.cache !== a && (e.flags |= 2048),
          Tn(le),
          Ft(e),
          null
        );
      case 25:
        return null;
      case 30:
        return null;
    }
    throw Error(s(156, e.tag));
  }
  function vy(t, e) {
    switch ((Os(e), e.tag)) {
      case 1:
        return (
          (t = e.flags), t & 65536 ? ((e.flags = (t & -65537) | 128), e) : null
        );
      case 3:
        return (
          Tn(le),
          qe(),
          (t = e.flags),
          (t & 65536) !== 0 && (t & 128) === 0
            ? ((e.flags = (t & -65537) | 128), e)
            : null
        );
      case 26:
      case 27:
      case 5:
        return Q(e), null;
      case 13:
        if (
          (Ka(e), (t = e.memoizedState), t !== null && t.dehydrated !== null)
        ) {
          if (e.alternate === null) throw Error(s(340));
          el();
        }
        return (
          (t = e.flags), t & 65536 ? ((e.flags = (t & -65537) | 128), e) : null
        );
      case 19:
        return at(ce), null;
      case 4:
        return qe(), null;
      case 10:
        return Tn(e.type), null;
      case 22:
      case 23:
        return (
          Ka(e),
          Us(),
          t !== null && at(Ya),
          (t = e.flags),
          t & 65536 ? ((e.flags = (t & -65537) | 128), e) : null
        );
      case 24:
        return Tn(le), null;
      case 25:
        return null;
      default:
        return null;
    }
  }
  function Rp(t, e) {
    switch ((Os(e), e.tag)) {
      case 3:
        Tn(le), qe();
        break;
      case 26:
      case 27:
      case 5:
        Q(e);
        break;
      case 4:
        qe();
        break;
      case 13:
        Ka(e);
        break;
      case 19:
        at(ce);
        break;
      case 10:
        Tn(e.type);
        break;
      case 22:
      case 23:
        Ka(e), Us(), t !== null && at(Ya);
        break;
      case 24:
        Tn(le);
    }
  }
  function Ks(t, e) {
    try {
      var a = e.updateQueue,
        l = a !== null ? a.lastEffect : null;
      if (l !== null) {
        var o = l.next;
        a = o;
        do {
          if ((a.tag & t) === t) {
            l = void 0;
            var u = a.create,
              h = a.inst;
            (l = u()), (h.destroy = l);
          }
          a = a.next;
        } while (a !== o);
      }
    } catch (v) {
      Pt(e, e.return, v);
    }
  }
  function _i(t, e, a) {
    try {
      var l = e.updateQueue,
        o = l !== null ? l.lastEffect : null;
      if (o !== null) {
        var u = o.next;
        l = u;
        do {
          if ((l.tag & t) === t) {
            var h = l.inst,
              v = h.destroy;
            if (v !== void 0) {
              (h.destroy = void 0), (o = e);
              var _ = a,
                R = v;
              try {
                R();
              } catch (P) {
                Pt(o, _, P);
              }
            }
          }
          l = l.next;
        } while (l !== u);
      }
    } catch (P) {
      Pt(e, e.return, P);
    }
  }
  function Mp(t) {
    var e = t.updateQueue;
    if (e !== null) {
      var a = t.stateNode;
      try {
        Xn(e, a);
      } catch (l) {
        Pt(t, t.return, l);
      }
    }
  }
  function Lp(t, e, a) {
    (a.props = ml(t.type, t.memoizedProps)), (a.state = t.memoizedState);
    try {
      a.componentWillUnmount();
    } catch (l) {
      Pt(t, e, l);
    }
  }
  function Xs(t, e) {
    try {
      var a = t.ref;
      if (a !== null) {
        switch (t.tag) {
          case 26:
          case 27:
          case 5:
            var l = t.stateNode;
            break;
          case 30:
            l = t.stateNode;
            break;
          default:
            l = t.stateNode;
        }
        typeof a == "function" ? (t.refCleanup = a(l)) : (a.current = l);
      }
    } catch (o) {
      Pt(t, e, o);
    }
  }
  function da(t, e) {
    var a = t.ref,
      l = t.refCleanup;
    if (a !== null)
      if (typeof l == "function")
        try {
          l();
        } catch (o) {
          Pt(t, e, o);
        } finally {
          (t.refCleanup = null),
            (t = t.alternate),
            t != null && (t.refCleanup = null);
        }
      else if (typeof a == "function")
        try {
          a(null);
        } catch (o) {
          Pt(t, e, o);
        }
      else a.current = null;
  }
  function Bp(t) {
    var e = t.type,
      a = t.memoizedProps,
      l = t.stateNode;
    try {
      t: switch (e) {
        case "button":
        case "input":
        case "select":
        case "textarea":
          a.autoFocus && l.focus();
          break t;
        case "img":
          a.src ? (l.src = a.src) : a.srcSet && (l.srcset = a.srcSet);
      }
    } catch (o) {
      Pt(t, t.return, o);
    }
  }
  function wd(t, e, a) {
    try {
      var l = t.stateNode;
      jy(l, t.type, a, e), (l[Oe] = e);
    } catch (o) {
      Pt(t, t.return, o);
    }
  }
  function zp(t) {
    return (
      t.tag === 5 ||
      t.tag === 3 ||
      t.tag === 26 ||
      (t.tag === 27 && Di(t.type)) ||
      t.tag === 4
    );
  }
  function Ed(t) {
    t: for (;;) {
      for (; t.sibling === null; ) {
        if (t.return === null || zp(t.return)) return null;
        t = t.return;
      }
      for (
        t.sibling.return = t.return, t = t.sibling;
        t.tag !== 5 && t.tag !== 6 && t.tag !== 18;

      ) {
        if (
          (t.tag === 27 && Di(t.type)) ||
          t.flags & 2 ||
          t.child === null ||
          t.tag === 4
        )
          continue t;
        (t.child.return = t), (t = t.child);
      }
      if (!(t.flags & 2)) return t.stateNode;
    }
  }
  function _d(t, e, a) {
    var l = t.tag;
    if (l === 5 || l === 6)
      (t = t.stateNode),
        e
          ? (a.nodeType === 9
              ? a.body
              : a.nodeName === "HTML"
              ? a.ownerDocument.body
              : a
            ).insertBefore(t, e)
          : ((e =
              a.nodeType === 9
                ? a.body
                : a.nodeName === "HTML"
                ? a.ownerDocument.body
                : a),
            e.appendChild(t),
            (a = a._reactRootContainer),
            a != null || e.onclick !== null || (e.onclick = cc));
    else if (
      l !== 4 &&
      (l === 27 && Di(t.type) && ((a = t.stateNode), (e = null)),
      (t = t.child),
      t !== null)
    )
      for (_d(t, e, a), t = t.sibling; t !== null; )
        _d(t, e, a), (t = t.sibling);
  }
  function Wu(t, e, a) {
    var l = t.tag;
    if (l === 5 || l === 6)
      (t = t.stateNode), e ? a.insertBefore(t, e) : a.appendChild(t);
    else if (
      l !== 4 &&
      (l === 27 && Di(t.type) && (a = t.stateNode), (t = t.child), t !== null)
    )
      for (Wu(t, e, a), t = t.sibling; t !== null; )
        Wu(t, e, a), (t = t.sibling);
  }
  function Hp(t) {
    var e = t.stateNode,
      a = t.memoizedProps;
    try {
      for (var l = t.type, o = e.attributes; o.length; )
        e.removeAttributeNode(o[0]);
      xe(e, l, a), (e[ie] = t), (e[Oe] = a);
    } catch (u) {
      Pt(t, t.return, u);
    }
  }
  var Za = !1,
    re = !1,
    Sd = !1,
    kp = typeof WeakSet == "function" ? WeakSet : Set,
    ge = null;
  function by(t, e) {
    if (((t = t.containerInfo), (Xd = vc), (t = yu(t)), ys(t))) {
      if ("selectionStart" in t)
        var a = { start: t.selectionStart, end: t.selectionEnd };
      else
        t: {
          a = ((a = t.ownerDocument) && a.defaultView) || window;
          var l = a.getSelection && a.getSelection();
          if (l && l.rangeCount !== 0) {
            a = l.anchorNode;
            var o = l.anchorOffset,
              u = l.focusNode;
            l = l.focusOffset;
            try {
              a.nodeType, u.nodeType;
            } catch {
              a = null;
              break t;
            }
            var h = 0,
              v = -1,
              _ = -1,
              R = 0,
              P = 0,
              K = t,
              B = null;
            e: for (;;) {
              for (
                var H;
                K !== a || (o !== 0 && K.nodeType !== 3) || (v = h + o),
                  K !== u || (l !== 0 && K.nodeType !== 3) || (_ = h + l),
                  K.nodeType === 3 && (h += K.nodeValue.length),
                  (H = K.firstChild) !== null;

              )
                (B = K), (K = H);
              for (;;) {
                if (K === t) break e;
                if (
                  (B === a && ++R === o && (v = h),
                  B === u && ++P === l && (_ = h),
                  (H = K.nextSibling) !== null)
                )
                  break;
                (K = B), (B = K.parentNode);
              }
              K = H;
            }
            a = v === -1 || _ === -1 ? null : { start: v, end: _ };
          } else a = null;
        }
      a = a || { start: 0, end: 0 };
    } else a = null;
    for (
      Qd = { focusedElem: t, selectionRange: a }, vc = !1, ge = e;
      ge !== null;

    )
      if (
        ((e = ge), (t = e.child), (e.subtreeFlags & 1024) !== 0 && t !== null)
      )
        (t.return = e), (ge = t);
      else
        for (; ge !== null; ) {
          switch (((e = ge), (u = e.alternate), (t = e.flags), e.tag)) {
            case 0:
              break;
            case 11:
            case 15:
              break;
            case 1:
              if ((t & 1024) !== 0 && u !== null) {
                (t = void 0),
                  (a = e),
                  (o = u.memoizedProps),
                  (u = u.memoizedState),
                  (l = a.stateNode);
                try {
                  var vt = ml(a.type, o, a.elementType === a.type);
                  (t = l.getSnapshotBeforeUpdate(vt, u)),
                    (l.__reactInternalSnapshotBeforeUpdate = t);
                } catch (mt) {
                  Pt(a, a.return, mt);
                }
              }
              break;
            case 3:
              if ((t & 1024) !== 0) {
                if (
                  ((t = e.stateNode.containerInfo), (a = t.nodeType), a === 9)
                )
                  Fd(t);
                else if (a === 1)
                  switch (t.nodeName) {
                    case "HEAD":
                    case "HTML":
                    case "BODY":
                      Fd(t);
                      break;
                    default:
                      t.textContent = "";
                  }
              }
              break;
            case 5:
            case 26:
            case 27:
            case 6:
            case 4:
            case 17:
              break;
            default:
              if ((t & 1024) !== 0) throw Error(s(163));
          }
          if (((t = e.sibling), t !== null)) {
            (t.return = e.return), (ge = t);
            break;
          }
          ge = e.return;
        }
  }
  function jp(t, e, a) {
    var l = a.flags;
    switch (a.tag) {
      case 0:
      case 11:
      case 15:
        Si(t, a), l & 4 && Ks(5, a);
        break;
      case 1:
        if ((Si(t, a), l & 4))
          if (((t = a.stateNode), e === null))
            try {
              t.componentDidMount();
            } catch (h) {
              Pt(a, a.return, h);
            }
          else {
            var o = ml(a.type, e.memoizedProps);
            e = e.memoizedState;
            try {
              t.componentDidUpdate(o, e, t.__reactInternalSnapshotBeforeUpdate);
            } catch (h) {
              Pt(a, a.return, h);
            }
          }
        l & 64 && Mp(a), l & 512 && Xs(a, a.return);
        break;
      case 3:
        if ((Si(t, a), l & 64 && ((t = a.updateQueue), t !== null))) {
          if (((e = null), a.child !== null))
            switch (a.child.tag) {
              case 27:
              case 5:
                e = a.child.stateNode;
                break;
              case 1:
                e = a.child.stateNode;
            }
          try {
            Xn(t, e);
          } catch (h) {
            Pt(a, a.return, h);
          }
        }
        break;
      case 27:
        e === null && l & 4 && Hp(a);
      case 26:
      case 5:
        Si(t, a), e === null && l & 4 && Bp(a), l & 512 && Xs(a, a.return);
        break;
      case 12:
        Si(t, a);
        break;
      case 13:
        Si(t, a),
          l & 4 && qp(t, a),
          l & 64 &&
            ((t = a.memoizedState),
            t !== null &&
              ((t = t.dehydrated),
              t !== null && ((a = Oy.bind(null, a)), Gy(t, a))));
        break;
      case 22:
        if (((l = a.memoizedState !== null || Za), !l)) {
          (e = (e !== null && e.memoizedState !== null) || re), (o = Za);
          var u = re;
          (Za = l),
            (re = e) && !u ? Ai(t, a, (a.subtreeFlags & 8772) !== 0) : Si(t, a),
            (Za = o),
            (re = u);
        }
        break;
      case 30:
        break;
      default:
        Si(t, a);
    }
  }
  function Up(t) {
    var e = t.alternate;
    e !== null && ((t.alternate = null), Up(e)),
      (t.child = null),
      (t.deletions = null),
      (t.sibling = null),
      t.tag === 5 && ((e = t.stateNode), e !== null && Oa(e)),
      (t.stateNode = null),
      (t.return = null),
      (t.dependencies = null),
      (t.memoizedProps = null),
      (t.memoizedState = null),
      (t.pendingProps = null),
      (t.stateNode = null),
      (t.updateQueue = null);
  }
  var It = null,
    Ze = !1;
  function Ia(t, e, a) {
    for (a = a.child; a !== null; ) $p(t, e, a), (a = a.sibling);
  }
  function $p(t, e, a) {
    if (fe && typeof fe.onCommitFiberUnmount == "function")
      try {
        fe.onCommitFiberUnmount(Wn, a);
      } catch {}
    switch (a.tag) {
      case 26:
        re || da(a, e),
          Ia(t, e, a),
          a.memoizedState
            ? a.memoizedState.count--
            : a.stateNode && ((a = a.stateNode), a.parentNode.removeChild(a));
        break;
      case 27:
        re || da(a, e);
        var l = It,
          o = Ze;
        Di(a.type) && ((It = a.stateNode), (Ze = !1)),
          Ia(t, e, a),
          no(a.stateNode),
          (It = l),
          (Ze = o);
        break;
      case 5:
        re || da(a, e);
      case 6:
        if (
          ((l = It),
          (o = Ze),
          (It = null),
          Ia(t, e, a),
          (It = l),
          (Ze = o),
          It !== null)
        )
          if (Ze)
            try {
              (It.nodeType === 9
                ? It.body
                : It.nodeName === "HTML"
                ? It.ownerDocument.body
                : It
              ).removeChild(a.stateNode);
            } catch (u) {
              Pt(a, e, u);
            }
          else
            try {
              It.removeChild(a.stateNode);
            } catch (u) {
              Pt(a, e, u);
            }
        break;
      case 18:
        It !== null &&
          (Ze
            ? ((t = It),
              Cg(
                t.nodeType === 9
                  ? t.body
                  : t.nodeName === "HTML"
                  ? t.ownerDocument.body
                  : t,
                a.stateNode
              ),
              co(t))
            : Cg(It, a.stateNode));
        break;
      case 4:
        (l = It),
          (o = Ze),
          (It = a.stateNode.containerInfo),
          (Ze = !0),
          Ia(t, e, a),
          (It = l),
          (Ze = o);
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        re || _i(2, a, e), re || _i(4, a, e), Ia(t, e, a);
        break;
      case 1:
        re ||
          (da(a, e),
          (l = a.stateNode),
          typeof l.componentWillUnmount == "function" && Lp(a, e, l)),
          Ia(t, e, a);
        break;
      case 21:
        Ia(t, e, a);
        break;
      case 22:
        (re = (l = re) || a.memoizedState !== null), Ia(t, e, a), (re = l);
        break;
      default:
        Ia(t, e, a);
    }
  }
  function qp(t, e) {
    if (
      e.memoizedState === null &&
      ((t = e.alternate),
      t !== null &&
        ((t = t.memoizedState), t !== null && ((t = t.dehydrated), t !== null)))
    )
      try {
        co(t);
      } catch (a) {
        Pt(e, e.return, a);
      }
  }
  function yy(t) {
    switch (t.tag) {
      case 13:
      case 19:
        var e = t.stateNode;
        return e === null && (e = t.stateNode = new kp()), e;
      case 22:
        return (
          (t = t.stateNode),
          (e = t._retryCache),
          e === null && (e = t._retryCache = new kp()),
          e
        );
      default:
        throw Error(s(435, t.tag));
    }
  }
  function Ad(t, e) {
    var a = yy(t);
    e.forEach(function (l) {
      var o = Cy.bind(null, t, l);
      a.has(l) || (a.add(l), l.then(o, o));
    });
  }
  function cn(t, e) {
    var a = e.deletions;
    if (a !== null)
      for (var l = 0; l < a.length; l++) {
        var o = a[l],
          u = t,
          h = e,
          v = h;
        t: for (; v !== null; ) {
          switch (v.tag) {
            case 27:
              if (Di(v.type)) {
                (It = v.stateNode), (Ze = !1);
                break t;
              }
              break;
            case 5:
              (It = v.stateNode), (Ze = !1);
              break t;
            case 3:
            case 4:
              (It = v.stateNode.containerInfo), (Ze = !0);
              break t;
          }
          v = v.return;
        }
        if (It === null) throw Error(s(160));
        $p(u, h, o),
          (It = null),
          (Ze = !1),
          (u = o.alternate),
          u !== null && (u.return = null),
          (o.return = null);
      }
    if (e.subtreeFlags & 13878)
      for (e = e.child; e !== null; ) Vp(e, t), (e = e.sibling);
  }
  var Zn = null;
  function Vp(t, e) {
    var a = t.alternate,
      l = t.flags;
    switch (t.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        cn(e, t),
          fn(t),
          l & 4 && (_i(3, t, t.return), Ks(3, t), _i(5, t, t.return));
        break;
      case 1:
        cn(e, t),
          fn(t),
          l & 512 && (re || a === null || da(a, a.return)),
          l & 64 &&
            Za &&
            ((t = t.updateQueue),
            t !== null &&
              ((l = t.callbacks),
              l !== null &&
                ((a = t.shared.hiddenCallbacks),
                (t.shared.hiddenCallbacks = a === null ? l : a.concat(l)))));
        break;
      case 26:
        var o = Zn;
        if (
          (cn(e, t),
          fn(t),
          l & 512 && (re || a === null || da(a, a.return)),
          l & 4)
        ) {
          var u = a !== null ? a.memoizedState : null;
          if (((l = t.memoizedState), a === null))
            if (l === null)
              if (t.stateNode === null) {
                t: {
                  (l = t.type),
                    (a = t.memoizedProps),
                    (o = o.ownerDocument || o);
                  e: switch (l) {
                    case "title":
                      (u = o.getElementsByTagName("title")[0]),
                        (!u ||
                          u[Vi] ||
                          u[ie] ||
                          u.namespaceURI === "http://www.w3.org/2000/svg" ||
                          u.hasAttribute("itemprop")) &&
                          ((u = o.createElement(l)),
                          o.head.insertBefore(
                            u,
                            o.querySelector("head > title")
                          )),
                        xe(u, l, a),
                        (u[ie] = t),
                        Wt(u),
                        (l = u);
                      break t;
                    case "link":
                      var h = Hg("link", "href", o).get(l + (a.href || ""));
                      if (h) {
                        for (var v = 0; v < h.length; v++)
                          if (
                            ((u = h[v]),
                            u.getAttribute("href") ===
                              (a.href == null || a.href === ""
                                ? null
                                : a.href) &&
                              u.getAttribute("rel") ===
                                (a.rel == null ? null : a.rel) &&
                              u.getAttribute("title") ===
                                (a.title == null ? null : a.title) &&
                              u.getAttribute("crossorigin") ===
                                (a.crossOrigin == null ? null : a.crossOrigin))
                          ) {
                            h.splice(v, 1);
                            break e;
                          }
                      }
                      (u = o.createElement(l)),
                        xe(u, l, a),
                        o.head.appendChild(u);
                      break;
                    case "meta":
                      if (
                        (h = Hg("meta", "content", o).get(
                          l + (a.content || "")
                        ))
                      ) {
                        for (v = 0; v < h.length; v++)
                          if (
                            ((u = h[v]),
                            u.getAttribute("content") ===
                              (a.content == null ? null : "" + a.content) &&
                              u.getAttribute("name") ===
                                (a.name == null ? null : a.name) &&
                              u.getAttribute("property") ===
                                (a.property == null ? null : a.property) &&
                              u.getAttribute("http-equiv") ===
                                (a.httpEquiv == null ? null : a.httpEquiv) &&
                              u.getAttribute("charset") ===
                                (a.charSet == null ? null : a.charSet))
                          ) {
                            h.splice(v, 1);
                            break e;
                          }
                      }
                      (u = o.createElement(l)),
                        xe(u, l, a),
                        o.head.appendChild(u);
                      break;
                    default:
                      throw Error(s(468, l));
                  }
                  (u[ie] = t), Wt(u), (l = u);
                }
                t.stateNode = l;
              } else kg(o, t.type, t.stateNode);
            else t.stateNode = zg(o, l, t.memoizedProps);
          else
            u !== l
              ? (u === null
                  ? a.stateNode !== null &&
                    ((a = a.stateNode), a.parentNode.removeChild(a))
                  : u.count--,
                l === null
                  ? kg(o, t.type, t.stateNode)
                  : zg(o, l, t.memoizedProps))
              : l === null &&
                t.stateNode !== null &&
                wd(t, t.memoizedProps, a.memoizedProps);
        }
        break;
      case 27:
        cn(e, t),
          fn(t),
          l & 512 && (re || a === null || da(a, a.return)),
          a !== null && l & 4 && wd(t, t.memoizedProps, a.memoizedProps);
        break;
      case 5:
        if (
          (cn(e, t),
          fn(t),
          l & 512 && (re || a === null || da(a, a.return)),
          t.flags & 32)
        ) {
          o = t.stateNode;
          try {
            ui(o, "");
          } catch (H) {
            Pt(t, t.return, H);
          }
        }
        l & 4 &&
          t.stateNode != null &&
          ((o = t.memoizedProps), wd(t, o, a !== null ? a.memoizedProps : o)),
          l & 1024 && (Sd = !0);
        break;
      case 6:
        if ((cn(e, t), fn(t), l & 4)) {
          if (t.stateNode === null) throw Error(s(162));
          (l = t.memoizedProps), (a = t.stateNode);
          try {
            a.nodeValue = l;
          } catch (H) {
            Pt(t, t.return, H);
          }
        }
        break;
      case 3:
        if (
          ((mc = null),
          (o = Zn),
          (Zn = dc(e.containerInfo)),
          cn(e, t),
          (Zn = o),
          fn(t),
          l & 4 && a !== null && a.memoizedState.isDehydrated)
        )
          try {
            co(e.containerInfo);
          } catch (H) {
            Pt(t, t.return, H);
          }
        Sd && ((Sd = !1), Yp(t));
        break;
      case 4:
        (l = Zn),
          (Zn = dc(t.stateNode.containerInfo)),
          cn(e, t),
          fn(t),
          (Zn = l);
        break;
      case 12:
        cn(e, t), fn(t);
        break;
      case 13:
        cn(e, t),
          fn(t),
          t.child.flags & 8192 &&
            (t.memoizedState !== null) !=
              (a !== null && a.memoizedState !== null) &&
            (Dd = Le()),
          l & 4 &&
            ((l = t.updateQueue),
            l !== null && ((t.updateQueue = null), Ad(t, l)));
        break;
      case 22:
        o = t.memoizedState !== null;
        var _ = a !== null && a.memoizedState !== null,
          R = Za,
          P = re;
        if (
          ((Za = R || o),
          (re = P || _),
          cn(e, t),
          (re = P),
          (Za = R),
          fn(t),
          l & 8192)
        )
          t: for (
            e = t.stateNode,
              e._visibility = o ? e._visibility & -2 : e._visibility | 1,
              o && (a === null || _ || Za || re || pl(t)),
              a = null,
              e = t;
            ;

          ) {
            if (e.tag === 5 || e.tag === 26) {
              if (a === null) {
                _ = a = e;
                try {
                  if (((u = _.stateNode), o))
                    (h = u.style),
                      typeof h.setProperty == "function"
                        ? h.setProperty("display", "none", "important")
                        : (h.display = "none");
                  else {
                    v = _.stateNode;
                    var K = _.memoizedProps.style,
                      B =
                        K != null && K.hasOwnProperty("display")
                          ? K.display
                          : null;
                    v.style.display =
                      B == null || typeof B == "boolean" ? "" : ("" + B).trim();
                  }
                } catch (H) {
                  Pt(_, _.return, H);
                }
              }
            } else if (e.tag === 6) {
              if (a === null) {
                _ = e;
                try {
                  _.stateNode.nodeValue = o ? "" : _.memoizedProps;
                } catch (H) {
                  Pt(_, _.return, H);
                }
              }
            } else if (
              ((e.tag !== 22 && e.tag !== 23) ||
                e.memoizedState === null ||
                e === t) &&
              e.child !== null
            ) {
              (e.child.return = e), (e = e.child);
              continue;
            }
            if (e === t) break t;
            for (; e.sibling === null; ) {
              if (e.return === null || e.return === t) break t;
              a === e && (a = null), (e = e.return);
            }
            a === e && (a = null),
              (e.sibling.return = e.return),
              (e = e.sibling);
          }
        l & 4 &&
          ((l = t.updateQueue),
          l !== null &&
            ((a = l.retryQueue),
            a !== null && ((l.retryQueue = null), Ad(t, a))));
        break;
      case 19:
        cn(e, t),
          fn(t),
          l & 4 &&
            ((l = t.updateQueue),
            l !== null && ((t.updateQueue = null), Ad(t, l)));
        break;
      case 30:
        break;
      case 21:
        break;
      default:
        cn(e, t), fn(t);
    }
  }
  function fn(t) {
    var e = t.flags;
    if (e & 2) {
      try {
        for (var a, l = t.return; l !== null; ) {
          if (zp(l)) {
            a = l;
            break;
          }
          l = l.return;
        }
        if (a == null) throw Error(s(160));
        switch (a.tag) {
          case 27:
            var o = a.stateNode,
              u = Ed(t);
            Wu(t, u, o);
            break;
          case 5:
            var h = a.stateNode;
            a.flags & 32 && (ui(h, ""), (a.flags &= -33));
            var v = Ed(t);
            Wu(t, v, h);
            break;
          case 3:
          case 4:
            var _ = a.stateNode.containerInfo,
              R = Ed(t);
            _d(t, R, _);
            break;
          default:
            throw Error(s(161));
        }
      } catch (P) {
        Pt(t, t.return, P);
      }
      t.flags &= -3;
    }
    e & 4096 && (t.flags &= -4097);
  }
  function Yp(t) {
    if (t.subtreeFlags & 1024)
      for (t = t.child; t !== null; ) {
        var e = t;
        Yp(e),
          e.tag === 5 && e.flags & 1024 && e.stateNode.reset(),
          (t = t.sibling);
      }
  }
  function Si(t, e) {
    if (e.subtreeFlags & 8772)
      for (e = e.child; e !== null; ) jp(t, e.alternate, e), (e = e.sibling);
  }
  function pl(t) {
    for (t = t.child; t !== null; ) {
      var e = t;
      switch (e.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          _i(4, e, e.return), pl(e);
          break;
        case 1:
          da(e, e.return);
          var a = e.stateNode;
          typeof a.componentWillUnmount == "function" && Lp(e, e.return, a),
            pl(e);
          break;
        case 27:
          no(e.stateNode);
        case 26:
        case 5:
          da(e, e.return), pl(e);
          break;
        case 22:
          e.memoizedState === null && pl(e);
          break;
        case 30:
          pl(e);
          break;
        default:
          pl(e);
      }
      t = t.sibling;
    }
  }
  function Ai(t, e, a) {
    for (a = a && (e.subtreeFlags & 8772) !== 0, e = e.child; e !== null; ) {
      var l = e.alternate,
        o = t,
        u = e,
        h = u.flags;
      switch (u.tag) {
        case 0:
        case 11:
        case 15:
          Ai(o, u, a), Ks(4, u);
          break;
        case 1:
          if (
            (Ai(o, u, a),
            (l = u),
            (o = l.stateNode),
            typeof o.componentDidMount == "function")
          )
            try {
              o.componentDidMount();
            } catch (R) {
              Pt(l, l.return, R);
            }
          if (((l = u), (o = l.updateQueue), o !== null)) {
            var v = l.stateNode;
            try {
              var _ = o.shared.hiddenCallbacks;
              if (_ !== null)
                for (o.shared.hiddenCallbacks = null, o = 0; o < _.length; o++)
                  Wf(_[o], v);
            } catch (R) {
              Pt(l, l.return, R);
            }
          }
          a && h & 64 && Mp(u), Xs(u, u.return);
          break;
        case 27:
          Hp(u);
        case 26:
        case 5:
          Ai(o, u, a), a && l === null && h & 4 && Bp(u), Xs(u, u.return);
          break;
        case 12:
          Ai(o, u, a);
          break;
        case 13:
          Ai(o, u, a), a && h & 4 && qp(o, u);
          break;
        case 22:
          u.memoizedState === null && Ai(o, u, a), Xs(u, u.return);
          break;
        case 30:
          break;
        default:
          Ai(o, u, a);
      }
      e = e.sibling;
    }
  }
  function Td(t, e) {
    var a = null;
    t !== null &&
      t.memoizedState !== null &&
      t.memoizedState.cachePool !== null &&
      (a = t.memoizedState.cachePool.pool),
      (t = null),
      e.memoizedState !== null &&
        e.memoizedState.cachePool !== null &&
        (t = e.memoizedState.cachePool.pool),
      t !== a && (t != null && t.refCount++, a != null && ll(a));
  }
  function xd(t, e) {
    (t = null),
      e.alternate !== null && (t = e.alternate.memoizedState.cache),
      (e = e.memoizedState.cache),
      e !== t && (e.refCount++, t != null && ll(t));
  }
  function ha(t, e, a, l) {
    if (e.subtreeFlags & 10256)
      for (e = e.child; e !== null; ) Pp(t, e, a, l), (e = e.sibling);
  }
  function Pp(t, e, a, l) {
    var o = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 15:
        ha(t, e, a, l), o & 2048 && Ks(9, e);
        break;
      case 1:
        ha(t, e, a, l);
        break;
      case 3:
        ha(t, e, a, l),
          o & 2048 &&
            ((t = null),
            e.alternate !== null && (t = e.alternate.memoizedState.cache),
            (e = e.memoizedState.cache),
            e !== t && (e.refCount++, t != null && ll(t)));
        break;
      case 12:
        if (o & 2048) {
          ha(t, e, a, l), (t = e.stateNode);
          try {
            var u = e.memoizedProps,
              h = u.id,
              v = u.onPostCommit;
            typeof v == "function" &&
              v(
                h,
                e.alternate === null ? "mount" : "update",
                t.passiveEffectDuration,
                -0
              );
          } catch (_) {
            Pt(e, e.return, _);
          }
        } else ha(t, e, a, l);
        break;
      case 13:
        ha(t, e, a, l);
        break;
      case 23:
        break;
      case 22:
        (u = e.stateNode),
          (h = e.alternate),
          e.memoizedState !== null
            ? u._visibility & 2
              ? ha(t, e, a, l)
              : Qs(t, e)
            : u._visibility & 2
            ? ha(t, e, a, l)
            : ((u._visibility |= 2),
              gr(t, e, a, l, (e.subtreeFlags & 10256) !== 0)),
          o & 2048 && Td(h, e);
        break;
      case 24:
        ha(t, e, a, l), o & 2048 && xd(e.alternate, e);
        break;
      default:
        ha(t, e, a, l);
    }
  }
  function gr(t, e, a, l, o) {
    for (o = o && (e.subtreeFlags & 10256) !== 0, e = e.child; e !== null; ) {
      var u = t,
        h = e,
        v = a,
        _ = l,
        R = h.flags;
      switch (h.tag) {
        case 0:
        case 11:
        case 15:
          gr(u, h, v, _, o), Ks(8, h);
          break;
        case 23:
          break;
        case 22:
          var P = h.stateNode;
          h.memoizedState !== null
            ? P._visibility & 2
              ? gr(u, h, v, _, o)
              : Qs(u, h)
            : ((P._visibility |= 2), gr(u, h, v, _, o)),
            o && R & 2048 && Td(h.alternate, h);
          break;
        case 24:
          gr(u, h, v, _, o), o && R & 2048 && xd(h.alternate, h);
          break;
        default:
          gr(u, h, v, _, o);
      }
      e = e.sibling;
    }
  }
  function Qs(t, e) {
    if (e.subtreeFlags & 10256)
      for (e = e.child; e !== null; ) {
        var a = t,
          l = e,
          o = l.flags;
        switch (l.tag) {
          case 22:
            Qs(a, l), o & 2048 && Td(l.alternate, l);
            break;
          case 24:
            Qs(a, l), o & 2048 && xd(l.alternate, l);
            break;
          default:
            Qs(a, l);
        }
        e = e.sibling;
      }
  }
  var Zs = 8192;
  function vr(t) {
    if (t.subtreeFlags & Zs)
      for (t = t.child; t !== null; ) Gp(t), (t = t.sibling);
  }
  function Gp(t) {
    switch (t.tag) {
      case 26:
        vr(t),
          t.flags & Zs &&
            t.memoizedState !== null &&
            iw(Zn, t.memoizedState, t.memoizedProps);
        break;
      case 5:
        vr(t);
        break;
      case 3:
      case 4:
        var e = Zn;
        (Zn = dc(t.stateNode.containerInfo)), vr(t), (Zn = e);
        break;
      case 22:
        t.memoizedState === null &&
          ((e = t.alternate),
          e !== null && e.memoizedState !== null
            ? ((e = Zs), (Zs = 16777216), vr(t), (Zs = e))
            : vr(t));
        break;
      default:
        vr(t);
    }
  }
  function Kp(t) {
    var e = t.alternate;
    if (e !== null && ((t = e.child), t !== null)) {
      e.child = null;
      do (e = t.sibling), (t.sibling = null), (t = e);
      while (t !== null);
    }
  }
  function Is(t) {
    var e = t.deletions;
    if ((t.flags & 16) !== 0) {
      if (e !== null)
        for (var a = 0; a < e.length; a++) {
          var l = e[a];
          (ge = l), Qp(l, t);
        }
      Kp(t);
    }
    if (t.subtreeFlags & 10256)
      for (t = t.child; t !== null; ) Xp(t), (t = t.sibling);
  }
  function Xp(t) {
    switch (t.tag) {
      case 0:
      case 11:
      case 15:
        Is(t), t.flags & 2048 && _i(9, t, t.return);
        break;
      case 3:
        Is(t);
        break;
      case 12:
        Is(t);
        break;
      case 22:
        var e = t.stateNode;
        t.memoizedState !== null &&
        e._visibility & 2 &&
        (t.return === null || t.return.tag !== 13)
          ? ((e._visibility &= -3), tc(t))
          : Is(t);
        break;
      default:
        Is(t);
    }
  }
  function tc(t) {
    var e = t.deletions;
    if ((t.flags & 16) !== 0) {
      if (e !== null)
        for (var a = 0; a < e.length; a++) {
          var l = e[a];
          (ge = l), Qp(l, t);
        }
      Kp(t);
    }
    for (t = t.child; t !== null; ) {
      switch (((e = t), e.tag)) {
        case 0:
        case 11:
        case 15:
          _i(8, e, e.return), tc(e);
          break;
        case 22:
          (a = e.stateNode),
            a._visibility & 2 && ((a._visibility &= -3), tc(e));
          break;
        default:
          tc(e);
      }
      t = t.sibling;
    }
  }
  function Qp(t, e) {
    for (; ge !== null; ) {
      var a = ge;
      switch (a.tag) {
        case 0:
        case 11:
        case 15:
          _i(8, a, e);
          break;
        case 23:
        case 22:
          if (a.memoizedState !== null && a.memoizedState.cachePool !== null) {
            var l = a.memoizedState.cachePool.pool;
            l != null && l.refCount++;
          }
          break;
        case 24:
          ll(a.memoizedState.cache);
      }
      if (((l = a.child), l !== null)) (l.return = a), (ge = l);
      else
        t: for (a = t; ge !== null; ) {
          l = ge;
          var o = l.sibling,
            u = l.return;
          if ((Up(l), l === a)) {
            ge = null;
            break t;
          }
          if (o !== null) {
            (o.return = u), (ge = o);
            break t;
          }
          ge = u;
        }
    }
  }
  var wy = {
      getCacheForType: function (t) {
        var e = he(le),
          a = e.data.get(t);
        return a === void 0 && ((a = t()), e.data.set(t, a)), a;
      },
    },
    Ey = typeof WeakMap == "function" ? WeakMap : Map,
    jt = 0,
    Kt = null,
    Ct = null,
    Rt = 0,
    Ut = 0,
    dn = null,
    Ti = !1,
    br = !1,
    Od = !1,
    Fa = 0,
    ne = 0,
    xi = 0,
    gl = 0,
    Cd = 0,
    Rn = 0,
    yr = 0,
    Fs = null,
    Ie = null,
    Nd = !1,
    Dd = 0,
    ec = 1 / 0,
    nc = null,
    Oi = null,
    Te = 0,
    Ci = null,
    wr = null,
    Er = 0,
    Rd = 0,
    Md = null,
    Zp = null,
    Js = 0,
    Ld = null;
  function hn() {
    if ((jt & 2) !== 0 && Rt !== 0) return Rt & -Rt;
    if (U.T !== null) {
      var t = rl;
      return t !== 0 ? t : $d();
    }
    return ko();
  }
  function Ip() {
    Rn === 0 && (Rn = (Rt & 536870912) === 0 || Mt ? xa() : 536870912);
    var t = Dn.current;
    return t !== null && (t.flags |= 32), Rn;
  }
  function mn(t, e, a) {
    ((t === Kt && (Ut === 2 || Ut === 9)) || t.cancelPendingCommit !== null) &&
      (_r(t, 0), Ni(t, Rt, Rn, !1)),
      $i(t, a),
      ((jt & 2) === 0 || t !== Kt) &&
        (t === Kt &&
          ((jt & 2) === 0 && (gl |= a), ne === 4 && Ni(t, Rt, Rn, !1)),
        ma(t));
  }
  function Fp(t, e, a) {
    if ((jt & 6) !== 0) throw Error(s(327));
    var l = (!a && (e & 124) === 0 && (e & t.expiredLanes) === 0) || zn(t, e),
      o = l ? Ay(t, e) : Hd(t, e, !0),
      u = l;
    do {
      if (o === 0) {
        br && !l && Ni(t, e, 0, !1);
        break;
      } else {
        if (((a = t.current.alternate), u && !_y(a))) {
          (o = Hd(t, e, !1)), (u = !1);
          continue;
        }
        if (o === 2) {
          if (((u = e), t.errorRecoveryDisabledLanes & u)) var h = 0;
          else
            (h = t.pendingLanes & -536870913),
              (h = h !== 0 ? h : h & 536870912 ? 536870912 : 0);
          if (h !== 0) {
            e = h;
            t: {
              var v = t;
              o = Fs;
              var _ = v.current.memoizedState.isDehydrated;
              if ((_ && (_r(v, h).flags |= 256), (h = Hd(v, h, !1)), h !== 2)) {
                if (Od && !_) {
                  (v.errorRecoveryDisabledLanes |= u), (gl |= u), (o = 4);
                  break t;
                }
                (u = Ie),
                  (Ie = o),
                  u !== null && (Ie === null ? (Ie = u) : Ie.push.apply(Ie, u));
              }
              o = h;
            }
            if (((u = !1), o !== 2)) continue;
          }
        }
        if (o === 1) {
          _r(t, 0), Ni(t, e, 0, !0);
          break;
        }
        t: {
          switch (((l = t), (u = o), u)) {
            case 0:
            case 1:
              throw Error(s(345));
            case 4:
              if ((e & 4194048) !== e) break;
            case 6:
              Ni(l, e, Rn, !Ti);
              break t;
            case 2:
              Ie = null;
              break;
            case 3:
            case 5:
              break;
            default:
              throw Error(s(329));
          }
          if ((e & 62914560) === e && ((o = Dd + 300 - Le()), 10 < o)) {
            if ((Ni(l, e, Rn, !Ti), jl(l, 0, !0) !== 0)) break t;
            l.timeoutHandle = xg(
              Jp.bind(null, l, a, Ie, nc, Nd, e, Rn, gl, yr, Ti, u, 2, -0, 0),
              o
            );
            break t;
          }
          Jp(l, a, Ie, nc, Nd, e, Rn, gl, yr, Ti, u, 0, -0, 0);
        }
      }
      break;
    } while (!0);
    ma(t);
  }
  function Jp(t, e, a, l, o, u, h, v, _, R, P, K, B, H) {
    if (
      ((t.timeoutHandle = -1),
      (K = e.subtreeFlags),
      (K & 8192 || (K & 16785408) === 16785408) &&
        ((lo = { stylesheets: null, count: 0, unsuspend: aw }),
        Gp(e),
        (K = lw()),
        K !== null))
    ) {
      (t.cancelPendingCommit = K(
        lg.bind(null, t, e, u, a, l, o, h, v, _, P, 1, B, H)
      )),
        Ni(t, u, h, !R);
      return;
    }
    lg(t, e, u, a, l, o, h, v, _);
  }
  function _y(t) {
    for (var e = t; ; ) {
      var a = e.tag;
      if (
        (a === 0 || a === 11 || a === 15) &&
        e.flags & 16384 &&
        ((a = e.updateQueue), a !== null && ((a = a.stores), a !== null))
      )
        for (var l = 0; l < a.length; l++) {
          var o = a[l],
            u = o.getSnapshot;
          o = o.value;
          try {
            if (!Ee(u(), o)) return !1;
          } catch {
            return !1;
          }
        }
      if (((a = e.child), e.subtreeFlags & 16384 && a !== null))
        (a.return = e), (e = a);
      else {
        if (e === t) break;
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === t) return !0;
          e = e.return;
        }
        (e.sibling.return = e.return), (e = e.sibling);
      }
    }
    return !0;
  }
  function Ni(t, e, a, l) {
    (e &= ~Cd),
      (e &= ~gl),
      (t.suspendedLanes |= e),
      (t.pingedLanes &= ~e),
      l && (t.warmLanes |= e),
      (l = t.expirationTimes);
    for (var o = e; 0 < o; ) {
      var u = 31 - ue(o),
        h = 1 << u;
      (l[u] = -1), (o &= ~h);
    }
    a !== 0 && zo(t, a, e);
  }
  function ac() {
    return (jt & 6) === 0 ? (Ws(0), !1) : !0;
  }
  function Bd() {
    if (Ct !== null) {
      if (Ut === 0) var t = Ct.return;
      else (t = Ct), (Pn = Yn = null), me(t), (mr = null), (Ys = 0), (t = Ct);
      for (; t !== null; ) Rp(t.alternate, t), (t = t.return);
      Ct = null;
    }
  }
  function _r(t, e) {
    var a = t.timeoutHandle;
    a !== -1 && ((t.timeoutHandle = -1), $y(a)),
      (a = t.cancelPendingCommit),
      a !== null && ((t.cancelPendingCommit = null), a()),
      Bd(),
      (Kt = t),
      (Ct = a = Un(t.current, null)),
      (Rt = e),
      (Ut = 0),
      (dn = null),
      (Ti = !1),
      (br = zn(t, e)),
      (Od = !1),
      (yr = Rn = Cd = gl = xi = ne = 0),
      (Ie = Fs = null),
      (Nd = !1),
      (e & 8) !== 0 && (e |= e & 32);
    var l = t.entangledLanes;
    if (l !== 0)
      for (t = t.entanglements, l &= e; 0 < l; ) {
        var o = 31 - ue(l),
          u = 1 << o;
        (e |= t[o]), (l &= ~u);
      }
    return (Fa = e), ar(), a;
  }
  function Wp(t, e) {
    (St = null),
      (U.H = Pu),
      e === vi || e === sl
        ? ((e = ju()), (Ut = 3))
        : e === ku
        ? ((e = ju()), (Ut = 4))
        : (Ut =
            e === vp
              ? 8
              : e !== null &&
                typeof e == "object" &&
                typeof e.then == "function"
              ? 6
              : 1),
      (dn = e),
      Ct === null && ((ne = 1), Zu(t, Pe(e, t.current)));
  }
  function tg() {
    var t = U.H;
    return (U.H = Pu), t === null ? Pu : t;
  }
  function eg() {
    var t = U.A;
    return (U.A = wy), t;
  }
  function zd() {
    (ne = 4),
      Ti || ((Rt & 4194048) !== Rt && Dn.current !== null) || (br = !0),
      ((xi & 134217727) === 0 && (gl & 134217727) === 0) ||
        Kt === null ||
        Ni(Kt, Rt, Rn, !1);
  }
  function Hd(t, e, a) {
    var l = jt;
    jt |= 2;
    var o = tg(),
      u = eg();
    (Kt !== t || Rt !== e) && ((nc = null), _r(t, e)), (e = !1);
    var h = ne;
    t: do
      try {
        if (Ut !== 0 && Ct !== null) {
          var v = Ct,
            _ = dn;
          switch (Ut) {
            case 8:
              Bd(), (h = 6);
              break t;
            case 3:
            case 2:
            case 9:
            case 6:
              Dn.current === null && (e = !0);
              var R = Ut;
              if (((Ut = 0), (dn = null), Sr(t, v, _, R), a && br)) {
                h = 0;
                break t;
              }
              break;
            default:
              (R = Ut), (Ut = 0), (dn = null), Sr(t, v, _, R);
          }
        }
        Sy(), (h = ne);
        break;
      } catch (P) {
        Wp(t, P);
      }
    while (!0);
    return (
      e && t.shellSuspendCounter++,
      (Pn = Yn = null),
      (jt = l),
      (U.H = o),
      (U.A = u),
      Ct === null && ((Kt = null), (Rt = 0), ar()),
      h
    );
  }
  function Sy() {
    for (; Ct !== null; ) ng(Ct);
  }
  function Ay(t, e) {
    var a = jt;
    jt |= 2;
    var l = tg(),
      o = eg();
    Kt !== t || Rt !== e
      ? ((nc = null), (ec = Le() + 500), _r(t, e))
      : (br = zn(t, e));
    t: do
      try {
        if (Ut !== 0 && Ct !== null) {
          e = Ct;
          var u = dn;
          e: switch (Ut) {
            case 1:
              (Ut = 0), (dn = null), Sr(t, e, u, 1);
              break;
            case 2:
            case 9:
              if (Ls(u)) {
                (Ut = 0), (dn = null), ag(e);
                break;
              }
              (e = function () {
                (Ut !== 2 && Ut !== 9) || Kt !== t || (Ut = 7), ma(t);
              }),
                u.then(e, e);
              break t;
            case 3:
              Ut = 7;
              break t;
            case 4:
              Ut = 5;
              break t;
            case 7:
              Ls(u)
                ? ((Ut = 0), (dn = null), ag(e))
                : ((Ut = 0), (dn = null), Sr(t, e, u, 7));
              break;
            case 5:
              var h = null;
              switch (Ct.tag) {
                case 26:
                  h = Ct.memoizedState;
                case 5:
                case 27:
                  var v = Ct;
                  if (!h || jg(h)) {
                    (Ut = 0), (dn = null);
                    var _ = v.sibling;
                    if (_ !== null) Ct = _;
                    else {
                      var R = v.return;
                      R !== null ? ((Ct = R), ic(R)) : (Ct = null);
                    }
                    break e;
                  }
              }
              (Ut = 0), (dn = null), Sr(t, e, u, 5);
              break;
            case 6:
              (Ut = 0), (dn = null), Sr(t, e, u, 6);
              break;
            case 8:
              Bd(), (ne = 6);
              break t;
            default:
              throw Error(s(462));
          }
        }
        Ty();
        break;
      } catch (P) {
        Wp(t, P);
      }
    while (!0);
    return (
      (Pn = Yn = null),
      (U.H = l),
      (U.A = o),
      (jt = a),
      Ct !== null ? 0 : ((Kt = null), (Rt = 0), ar(), ne)
    );
  }
  function Ty() {
    for (; Ct !== null && !en(); ) ng(Ct);
  }
  function ng(t) {
    var e = Np(t.alternate, t, Fa);
    (t.memoizedProps = t.pendingProps), e === null ? ic(t) : (Ct = e);
  }
  function ag(t) {
    var e = t,
      a = e.alternate;
    switch (e.tag) {
      case 15:
      case 0:
        e = Sp(a, e, e.pendingProps, e.type, void 0, Rt);
        break;
      case 11:
        e = Sp(a, e, e.pendingProps, e.type.render, e.ref, Rt);
        break;
      case 5:
        me(e);
      default:
        Rp(a, e), (e = Ct = rr(e, Fa)), (e = Np(a, e, Fa));
    }
    (t.memoizedProps = t.pendingProps), e === null ? ic(t) : (Ct = e);
  }
  function Sr(t, e, a, l) {
    (Pn = Yn = null), me(e), (mr = null), (Ys = 0);
    var o = e.return;
    try {
      if (my(t, o, e, a, Rt)) {
        (ne = 1), Zu(t, Pe(a, t.current)), (Ct = null);
        return;
      }
    } catch (u) {
      if (o !== null) throw ((Ct = o), u);
      (ne = 1), Zu(t, Pe(a, t.current)), (Ct = null);
      return;
    }
    e.flags & 32768
      ? (Mt || l === 1
          ? (t = !0)
          : br || (Rt & 536870912) !== 0
          ? (t = !1)
          : ((Ti = t = !0),
            (l === 2 || l === 9 || l === 3 || l === 6) &&
              ((l = Dn.current),
              l !== null && l.tag === 13 && (l.flags |= 16384))),
        ig(e, t))
      : ic(e);
  }
  function ic(t) {
    var e = t;
    do {
      if ((e.flags & 32768) !== 0) {
        ig(e, Ti);
        return;
      }
      t = e.return;
      var a = gy(e.alternate, e, Fa);
      if (a !== null) {
        Ct = a;
        return;
      }
      if (((e = e.sibling), e !== null)) {
        Ct = e;
        return;
      }
      Ct = e = t;
    } while (e !== null);
    ne === 0 && (ne = 5);
  }
  function ig(t, e) {
    do {
      var a = vy(t.alternate, t);
      if (a !== null) {
        (a.flags &= 32767), (Ct = a);
        return;
      }
      if (
        ((a = t.return),
        a !== null &&
          ((a.flags |= 32768), (a.subtreeFlags = 0), (a.deletions = null)),
        !e && ((t = t.sibling), t !== null))
      ) {
        Ct = t;
        return;
      }
      Ct = t = a;
    } while (t !== null);
    (ne = 6), (Ct = null);
  }
  function lg(t, e, a, l, o, u, h, v, _) {
    t.cancelPendingCommit = null;
    do lc();
    while (Te !== 0);
    if ((jt & 6) !== 0) throw Error(s(327));
    if (e !== null) {
      if (e === t.current) throw Error(s(177));
      if (
        ((u = e.lanes | e.childLanes),
        (u |= nr),
        gf(t, a, u, h, v, _),
        t === Kt && ((Ct = Kt = null), (Rt = 0)),
        (wr = e),
        (Ci = t),
        (Er = a),
        (Rd = u),
        (Md = o),
        (Zp = l),
        (e.subtreeFlags & 10256) !== 0 || (e.flags & 10256) !== 0
          ? ((t.callbackNode = null),
            (t.callbackPriority = 0),
            Ny(Ve, function () {
              return cg(), null;
            }))
          : ((t.callbackNode = null), (t.callbackPriority = 0)),
        (l = (e.flags & 13878) !== 0),
        (e.subtreeFlags & 13878) !== 0 || l)
      ) {
        (l = U.T), (U.T = null), (o = W.p), (W.p = 2), (h = jt), (jt |= 4);
        try {
          by(t, e, a);
        } finally {
          (jt = h), (W.p = o), (U.T = l);
        }
      }
      (Te = 1), rg(), sg(), og();
    }
  }
  function rg() {
    if (Te === 1) {
      Te = 0;
      var t = Ci,
        e = wr,
        a = (e.flags & 13878) !== 0;
      if ((e.subtreeFlags & 13878) !== 0 || a) {
        (a = U.T), (U.T = null);
        var l = W.p;
        W.p = 2;
        var o = jt;
        jt |= 4;
        try {
          Vp(e, t);
          var u = Qd,
            h = yu(t.containerInfo),
            v = u.focusedElem,
            _ = u.selectionRange;
          if (
            h !== v &&
            v &&
            v.ownerDocument &&
            bu(v.ownerDocument.documentElement, v)
          ) {
            if (_ !== null && ys(v)) {
              var R = _.start,
                P = _.end;
              if ((P === void 0 && (P = R), "selectionStart" in v))
                (v.selectionStart = R),
                  (v.selectionEnd = Math.min(P, v.value.length));
              else {
                var K = v.ownerDocument || document,
                  B = (K && K.defaultView) || window;
                if (B.getSelection) {
                  var H = B.getSelection(),
                    vt = v.textContent.length,
                    mt = Math.min(_.start, vt),
                    qt = _.end === void 0 ? mt : Math.min(_.end, vt);
                  !H.extend && mt > qt && ((h = qt), (qt = mt), (mt = h));
                  var C = vu(v, mt),
                    T = vu(v, qt);
                  if (
                    C &&
                    T &&
                    (H.rangeCount !== 1 ||
                      H.anchorNode !== C.node ||
                      H.anchorOffset !== C.offset ||
                      H.focusNode !== T.node ||
                      H.focusOffset !== T.offset)
                  ) {
                    var D = K.createRange();
                    D.setStart(C.node, C.offset),
                      H.removeAllRanges(),
                      mt > qt
                        ? (H.addRange(D), H.extend(T.node, T.offset))
                        : (D.setEnd(T.node, T.offset), H.addRange(D));
                  }
                }
              }
            }
            for (K = [], H = v; (H = H.parentNode); )
              H.nodeType === 1 &&
                K.push({ element: H, left: H.scrollLeft, top: H.scrollTop });
            for (
              typeof v.focus == "function" && v.focus(), v = 0;
              v < K.length;
              v++
            ) {
              var G = K[v];
              (G.element.scrollLeft = G.left), (G.element.scrollTop = G.top);
            }
          }
          (vc = !!Xd), (Qd = Xd = null);
        } finally {
          (jt = o), (W.p = l), (U.T = a);
        }
      }
      (t.current = e), (Te = 2);
    }
  }
  function sg() {
    if (Te === 2) {
      Te = 0;
      var t = Ci,
        e = wr,
        a = (e.flags & 8772) !== 0;
      if ((e.subtreeFlags & 8772) !== 0 || a) {
        (a = U.T), (U.T = null);
        var l = W.p;
        W.p = 2;
        var o = jt;
        jt |= 4;
        try {
          jp(t, e.alternate, e);
        } finally {
          (jt = o), (W.p = l), (U.T = a);
        }
      }
      Te = 3;
    }
  }
  function og() {
    if (Te === 4 || Te === 3) {
      (Te = 0), Jn();
      var t = Ci,
        e = wr,
        a = Er,
        l = Zp;
      (e.subtreeFlags & 10256) !== 0 || (e.flags & 10256) !== 0
        ? (Te = 5)
        : ((Te = 0), (wr = Ci = null), ug(t, t.pendingLanes));
      var o = t.pendingLanes;
      if (
        (o === 0 && (Oi = null),
        Fr(a),
        (e = e.stateNode),
        fe && typeof fe.onCommitFiberRoot == "function")
      )
        try {
          fe.onCommitFiberRoot(Wn, e, void 0, (e.current.flags & 128) === 128);
        } catch {}
      if (l !== null) {
        (e = U.T), (o = W.p), (W.p = 2), (U.T = null);
        try {
          for (var u = t.onRecoverableError, h = 0; h < l.length; h++) {
            var v = l[h];
            u(v.value, { componentStack: v.stack });
          }
        } finally {
          (U.T = e), (W.p = o);
        }
      }
      (Er & 3) !== 0 && lc(),
        ma(t),
        (o = t.pendingLanes),
        (a & 4194090) !== 0 && (o & 42) !== 0
          ? t === Ld
            ? Js++
            : ((Js = 0), (Ld = t))
          : (Js = 0),
        Ws(0);
    }
  }
  function ug(t, e) {
    (t.pooledCacheLanes &= e) === 0 &&
      ((e = t.pooledCache), e != null && ((t.pooledCache = null), ll(e)));
  }
  function lc(t) {
    return rg(), sg(), og(), cg();
  }
  function cg() {
    if (Te !== 5) return !1;
    var t = Ci,
      e = Rd;
    Rd = 0;
    var a = Fr(Er),
      l = U.T,
      o = W.p;
    try {
      (W.p = 32 > a ? 32 : a), (U.T = null), (a = Md), (Md = null);
      var u = Ci,
        h = Er;
      if (((Te = 0), (wr = Ci = null), (Er = 0), (jt & 6) !== 0))
        throw Error(s(331));
      var v = jt;
      if (
        ((jt |= 4),
        Xp(u.current),
        Pp(u, u.current, h, a),
        (jt = v),
        Ws(0, !1),
        fe && typeof fe.onPostCommitFiberRoot == "function")
      )
        try {
          fe.onPostCommitFiberRoot(Wn, u);
        } catch {}
      return !0;
    } finally {
      (W.p = o), (U.T = l), ug(t, e);
    }
  }
  function fg(t, e, a) {
    (e = Pe(a, e)),
      (e = fd(t.stateNode, e, 2)),
      (t = ua(t, e, 2)),
      t !== null && ($i(t, 2), ma(t));
  }
  function Pt(t, e, a) {
    if (t.tag === 3) fg(t, t, a);
    else
      for (; e !== null; ) {
        if (e.tag === 3) {
          fg(e, t, a);
          break;
        } else if (e.tag === 1) {
          var l = e.stateNode;
          if (
            typeof e.type.getDerivedStateFromError == "function" ||
            (typeof l.componentDidCatch == "function" &&
              (Oi === null || !Oi.has(l)))
          ) {
            (t = Pe(a, t)),
              (a = pp(2)),
              (l = ua(e, a, 2)),
              l !== null && (gp(a, l, e, t), $i(l, 2), ma(l));
            break;
          }
        }
        e = e.return;
      }
  }
  function kd(t, e, a) {
    var l = t.pingCache;
    if (l === null) {
      l = t.pingCache = new Ey();
      var o = new Set();
      l.set(e, o);
    } else (o = l.get(e)), o === void 0 && ((o = new Set()), l.set(e, o));
    o.has(a) ||
      ((Od = !0), o.add(a), (t = xy.bind(null, t, e, a)), e.then(t, t));
  }
  function xy(t, e, a) {
    var l = t.pingCache;
    l !== null && l.delete(e),
      (t.pingedLanes |= t.suspendedLanes & a),
      (t.warmLanes &= ~a),
      Kt === t &&
        (Rt & a) === a &&
        (ne === 4 || (ne === 3 && (Rt & 62914560) === Rt && 300 > Le() - Dd)
          ? (jt & 2) === 0 && _r(t, 0)
          : (Cd |= a),
        yr === Rt && (yr = 0)),
      ma(t);
  }
  function dg(t, e) {
    e === 0 && (e = Bo()), (t = hi(t, e)), t !== null && ($i(t, e), ma(t));
  }
  function Oy(t) {
    var e = t.memoizedState,
      a = 0;
    e !== null && (a = e.retryLane), dg(t, a);
  }
  function Cy(t, e) {
    var a = 0;
    switch (t.tag) {
      case 13:
        var l = t.stateNode,
          o = t.memoizedState;
        o !== null && (a = o.retryLane);
        break;
      case 19:
        l = t.stateNode;
        break;
      case 22:
        l = t.stateNode._retryCache;
        break;
      default:
        throw Error(s(314));
    }
    l !== null && l.delete(e), dg(t, a);
  }
  function Ny(t, e) {
    return Aa(t, e);
  }
  var rc = null,
    Ar = null,
    jd = !1,
    sc = !1,
    Ud = !1,
    vl = 0;
  function ma(t) {
    t !== Ar &&
      t.next === null &&
      (Ar === null ? (rc = Ar = t) : (Ar = Ar.next = t)),
      (sc = !0),
      jd || ((jd = !0), Ry());
  }
  function Ws(t, e) {
    if (!Ud && sc) {
      Ud = !0;
      do
        for (var a = !1, l = rc; l !== null; ) {
          if (t !== 0) {
            var o = l.pendingLanes;
            if (o === 0) var u = 0;
            else {
              var h = l.suspendedLanes,
                v = l.pingedLanes;
              (u = (1 << (31 - ue(42 | t) + 1)) - 1),
                (u &= o & ~(h & ~v)),
                (u = u & 201326741 ? (u & 201326741) | 1 : u ? u | 2 : 0);
            }
            u !== 0 && ((a = !0), gg(l, u));
          } else
            (u = Rt),
              (u = jl(
                l,
                l === Kt ? u : 0,
                l.cancelPendingCommit !== null || l.timeoutHandle !== -1
              )),
              (u & 3) === 0 || zn(l, u) || ((a = !0), gg(l, u));
          l = l.next;
        }
      while (a);
      Ud = !1;
    }
  }
  function Dy() {
    hg();
  }
  function hg() {
    sc = jd = !1;
    var t = 0;
    vl !== 0 && (Uy() && (t = vl), (vl = 0));
    for (var e = Le(), a = null, l = rc; l !== null; ) {
      var o = l.next,
        u = mg(l, e);
      u === 0
        ? ((l.next = null),
          a === null ? (rc = o) : (a.next = o),
          o === null && (Ar = a))
        : ((a = l), (t !== 0 || (u & 3) !== 0) && (sc = !0)),
        (l = o);
    }
    Ws(t);
  }
  function mg(t, e) {
    for (
      var a = t.suspendedLanes,
        l = t.pingedLanes,
        o = t.expirationTimes,
        u = t.pendingLanes & -62914561;
      0 < u;

    ) {
      var h = 31 - ue(u),
        v = 1 << h,
        _ = o[h];
      _ === -1
        ? ((v & a) === 0 || (v & l) !== 0) && (o[h] = pf(v, e))
        : _ <= e && (t.expiredLanes |= v),
        (u &= ~v);
    }
    if (
      ((e = Kt),
      (a = Rt),
      (a = jl(
        t,
        t === e ? a : 0,
        t.cancelPendingCommit !== null || t.timeoutHandle !== -1
      )),
      (l = t.callbackNode),
      a === 0 ||
        (t === e && (Ut === 2 || Ut === 9)) ||
        t.cancelPendingCommit !== null)
    )
      return (
        l !== null && l !== null && Ta(l),
        (t.callbackNode = null),
        (t.callbackPriority = 0)
      );
    if ((a & 3) === 0 || zn(t, a)) {
      if (((e = a & -a), e === t.callbackPriority)) return e;
      switch ((l !== null && Ta(l), Fr(a))) {
        case 2:
        case 8:
          a = it;
          break;
        case 32:
          a = Ve;
          break;
        case 268435456:
          a = Bl;
          break;
        default:
          a = Ve;
      }
      return (
        (l = pg.bind(null, t)),
        (a = Aa(a, l)),
        (t.callbackPriority = e),
        (t.callbackNode = a),
        e
      );
    }
    return (
      l !== null && l !== null && Ta(l),
      (t.callbackPriority = 2),
      (t.callbackNode = null),
      2
    );
  }
  function pg(t, e) {
    if (Te !== 0 && Te !== 5)
      return (t.callbackNode = null), (t.callbackPriority = 0), null;
    var a = t.callbackNode;
    if (lc() && t.callbackNode !== a) return null;
    var l = Rt;
    return (
      (l = jl(
        t,
        t === Kt ? l : 0,
        t.cancelPendingCommit !== null || t.timeoutHandle !== -1
      )),
      l === 0
        ? null
        : (Fp(t, l, e),
          mg(t, Le()),
          t.callbackNode != null && t.callbackNode === a
            ? pg.bind(null, t)
            : null)
    );
  }
  function gg(t, e) {
    if (lc()) return null;
    Fp(t, e, !0);
  }
  function Ry() {
    qy(function () {
      (jt & 6) !== 0 ? Aa(ii, Dy) : hg();
    });
  }
  function $d() {
    return vl === 0 && (vl = xa()), vl;
  }
  function vg(t) {
    return t == null || typeof t == "symbol" || typeof t == "boolean"
      ? null
      : typeof t == "function"
      ? t
      : Pl("" + t);
  }
  function bg(t, e) {
    var a = e.ownerDocument.createElement("input");
    return (
      (a.name = e.name),
      (a.value = e.value),
      t.id && a.setAttribute("form", t.id),
      e.parentNode.insertBefore(a, e),
      (t = new FormData(t)),
      a.parentNode.removeChild(a),
      t
    );
  }
  function My(t, e, a, l, o) {
    if (e === "submit" && a && a.stateNode === o) {
      var u = vg((o[Oe] || null).action),
        h = l.submitter;
      h &&
        ((e = (e = h[Oe] || null)
          ? vg(e.formAction)
          : h.getAttribute("formAction")),
        e !== null && ((u = e), (h = null)));
      var v = new Xi("action", "action", null, l, o);
      t.push({
        event: v,
        listeners: [
          {
            instance: null,
            listener: function () {
              if (l.defaultPrevented) {
                if (vl !== 0) {
                  var _ = h ? bg(o, h) : new FormData(o);
                  rd(
                    a,
                    { pending: !0, data: _, method: o.method, action: u },
                    null,
                    _
                  );
                }
              } else
                typeof u == "function" &&
                  (v.preventDefault(),
                  (_ = h ? bg(o, h) : new FormData(o)),
                  rd(
                    a,
                    { pending: !0, data: _, method: o.method, action: u },
                    u,
                    _
                  ));
            },
            currentTarget: o,
          },
        ],
      });
    }
  }
  for (var qd = 0; qd < _s.length; qd++) {
    var Vd = _s[qd],
      Ly = Vd.toLowerCase(),
      By = Vd[0].toUpperCase() + Vd.slice(1);
    on(Ly, "on" + By);
  }
  on(Es, "onAnimationEnd"),
    on(_u, "onAnimationIteration"),
    on(Su, "onAnimationStart"),
    on("dblclick", "onDoubleClick"),
    on("focusin", "onFocus"),
    on("focusout", "onBlur"),
    on(Kf, "onTransitionRun"),
    on(Au, "onTransitionStart"),
    on(Tu, "onTransitionCancel"),
    on(xu, "onTransitionEnd"),
    si("onMouseEnter", ["mouseout", "mouseover"]),
    si("onMouseLeave", ["mouseout", "mouseover"]),
    si("onPointerEnter", ["pointerout", "pointerover"]),
    si("onPointerLeave", ["pointerout", "pointerover"]),
    Ca(
      "onChange",
      "change click focusin focusout input keydown keyup selectionchange".split(
        " "
      )
    ),
    Ca(
      "onSelect",
      "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
        " "
      )
    ),
    Ca("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]),
    Ca(
      "onCompositionEnd",
      "compositionend focusout keydown keypress keyup mousedown".split(" ")
    ),
    Ca(
      "onCompositionStart",
      "compositionstart focusout keydown keypress keyup mousedown".split(" ")
    ),
    Ca(
      "onCompositionUpdate",
      "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
    );
  var to =
      "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
        " "
      ),
    zy = new Set(
      "beforetoggle cancel close invalid load scroll scrollend toggle"
        .split(" ")
        .concat(to)
    );
  function yg(t, e) {
    e = (e & 4) !== 0;
    for (var a = 0; a < t.length; a++) {
      var l = t[a],
        o = l.event;
      l = l.listeners;
      t: {
        var u = void 0;
        if (e)
          for (var h = l.length - 1; 0 <= h; h--) {
            var v = l[h],
              _ = v.instance,
              R = v.currentTarget;
            if (((v = v.listener), _ !== u && o.isPropagationStopped()))
              break t;
            (u = v), (o.currentTarget = R);
            try {
              u(o);
            } catch (P) {
              Qu(P);
            }
            (o.currentTarget = null), (u = _);
          }
        else
          for (h = 0; h < l.length; h++) {
            if (
              ((v = l[h]),
              (_ = v.instance),
              (R = v.currentTarget),
              (v = v.listener),
              _ !== u && o.isPropagationStopped())
            )
              break t;
            (u = v), (o.currentTarget = R);
            try {
              u(o);
            } catch (P) {
              Qu(P);
            }
            (o.currentTarget = null), (u = _);
          }
      }
    }
  }
  function Nt(t, e) {
    var a = e[En];
    a === void 0 && (a = e[En] = new Set());
    var l = t + "__bubble";
    a.has(l) || (wg(e, t, 2, !1), a.add(l));
  }
  function Yd(t, e, a) {
    var l = 0;
    e && (l |= 4), wg(a, t, l, e);
  }
  var oc = "_reactListening" + Math.random().toString(36).slice(2);
  function Pd(t) {
    if (!t[oc]) {
      (t[oc] = !0),
        $o.forEach(function (a) {
          a !== "selectionchange" && (zy.has(a) || Yd(a, !1, t), Yd(a, !0, t));
        });
      var e = t.nodeType === 9 ? t : t.ownerDocument;
      e === null || e[oc] || ((e[oc] = !0), Yd("selectionchange", !1, e));
    }
  }
  function wg(t, e, a, l) {
    switch (Pg(e)) {
      case 2:
        var o = ow;
        break;
      case 8:
        o = uw;
        break;
      default:
        o = ih;
    }
    (a = o.bind(null, e, a, t)),
      (o = void 0),
      !Pi ||
        (e !== "touchstart" && e !== "touchmove" && e !== "wheel") ||
        (o = !0),
      l
        ? o !== void 0
          ? t.addEventListener(e, a, { capture: !0, passive: o })
          : t.addEventListener(e, a, !0)
        : o !== void 0
        ? t.addEventListener(e, a, { passive: o })
        : t.addEventListener(e, a, !1);
  }
  function Gd(t, e, a, l, o) {
    var u = l;
    if ((e & 1) === 0 && (e & 2) === 0 && l !== null)
      t: for (;;) {
        if (l === null) return;
        var h = l.tag;
        if (h === 3 || h === 4) {
          var v = l.stateNode.containerInfo;
          if (v === o) break;
          if (h === 4)
            for (h = l.return; h !== null; ) {
              var _ = h.tag;
              if ((_ === 3 || _ === 4) && h.stateNode.containerInfo === o)
                return;
              h = h.return;
            }
          for (; v !== null; ) {
            if (((h = an(v)), h === null)) return;
            if (((_ = h.tag), _ === 5 || _ === 6 || _ === 26 || _ === 27)) {
              l = u = h;
              continue t;
            }
            v = v.parentNode;
          }
        }
        l = l.return;
      }
    rs(function () {
      var R = u,
        P = ls(a),
        K = [];
      t: {
        var B = Ou.get(t);
        if (B !== void 0) {
          var H = Xi,
            vt = t;
          switch (t) {
            case "keypress":
              if (Kl(a) === 0) break t;
            case "keydown":
            case "keyup":
              H = sn;
              break;
            case "focusin":
              (vt = "focus"), (H = cs);
              break;
            case "focusout":
              (vt = "blur"), (H = cs);
              break;
            case "beforeblur":
            case "afterblur":
              H = cs;
              break;
            case "click":
              if (a.button === 2) break t;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              H = Wo;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              H = Tf;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              H = iu;
              break;
            case Es:
            case _u:
            case Su:
              H = Of;
              break;
            case xu:
              H = kf;
              break;
            case "scroll":
            case "scrollend":
              H = fi;
              break;
            case "wheel":
              H = jf;
              break;
            case "copy":
            case "cut":
            case "paste":
              H = Nf;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              H = nu;
              break;
            case "toggle":
            case "beforetoggle":
              H = Il;
          }
          var mt = (e & 4) !== 0,
            qt = !mt && (t === "scroll" || t === "scrollend"),
            C = mt ? (B !== null ? B + "Capture" : null) : B;
          mt = [];
          for (var T = R, D; T !== null; ) {
            var G = T;
            if (
              ((D = G.stateNode),
              (G = G.tag),
              (G !== 5 && G !== 26 && G !== 27) ||
                D === null ||
                C === null ||
                ((G = Gl(T, C)), G != null && mt.push(eo(T, G, D))),
              qt)
            )
              break;
            T = T.return;
          }
          0 < mt.length &&
            ((B = new H(B, vt, null, a, P)),
            K.push({ event: B, listeners: mt }));
        }
      }
      if ((e & 7) === 0) {
        t: {
          if (
            ((B = t === "mouseover" || t === "pointerover"),
            (H = t === "mouseout" || t === "pointerout"),
            B &&
              a !== is &&
              (vt = a.relatedTarget || a.fromElement) &&
              (an(vt) || vt[qi]))
          )
            break t;
          if (
            (H || B) &&
            ((B =
              P.window === P
                ? P
                : (B = P.ownerDocument)
                ? B.defaultView || B.parentWindow
                : window),
            H
              ? ((vt = a.relatedTarget || a.toElement),
                (H = R),
                (vt = vt ? an(vt) : null),
                vt !== null &&
                  ((qt = d(vt)),
                  (mt = vt.tag),
                  vt !== qt || (mt !== 5 && mt !== 27 && mt !== 6)) &&
                  (vt = null))
              : ((H = null), (vt = R)),
            H !== vt)
          ) {
            if (
              ((mt = Wo),
              (G = "onMouseLeave"),
              (C = "onMouseEnter"),
              (T = "mouse"),
              (t === "pointerout" || t === "pointerover") &&
                ((mt = nu),
                (G = "onPointerLeave"),
                (C = "onPointerEnter"),
                (T = "pointer")),
              (qt = H == null ? B : na(H)),
              (D = vt == null ? B : na(vt)),
              (B = new mt(G, T + "leave", H, a, P)),
              (B.target = qt),
              (B.relatedTarget = D),
              (G = null),
              an(P) === R &&
                ((mt = new mt(C, T + "enter", vt, a, P)),
                (mt.target = D),
                (mt.relatedTarget = qt),
                (G = mt)),
              (qt = G),
              H && vt)
            )
              e: {
                for (mt = H, C = vt, T = 0, D = mt; D; D = Tr(D)) T++;
                for (D = 0, G = C; G; G = Tr(G)) D++;
                for (; 0 < T - D; ) (mt = Tr(mt)), T--;
                for (; 0 < D - T; ) (C = Tr(C)), D--;
                for (; T--; ) {
                  if (mt === C || (C !== null && mt === C.alternate)) break e;
                  (mt = Tr(mt)), (C = Tr(C));
                }
                mt = null;
              }
            else mt = null;
            H !== null && Eg(K, B, H, mt, !1),
              vt !== null && qt !== null && Eg(K, qt, vt, mt, !0);
          }
        }
        t: {
          if (
            ((B = R ? na(R) : window),
            (H = B.nodeName && B.nodeName.toLowerCase()),
            H === "select" || (H === "input" && B.type === "file"))
          )
            var lt = cu;
          else if (uu(B))
            if (vs) lt = Gf;
            else {
              lt = Pf;
              var Ot = Yf;
            }
          else
            (H = B.nodeName),
              !H ||
              H.toLowerCase() !== "input" ||
              (B.type !== "checkbox" && B.type !== "radio")
                ? R && as(R.elementType) && (lt = cu)
                : (lt = mu);
          if (lt && (lt = lt(t, R))) {
            qf(K, lt, a, P);
            break t;
          }
          Ot && Ot(t, B, R),
            t === "focusout" &&
              R &&
              B.type === "number" &&
              R.memoizedProps.value != null &&
              es(B, "number", B.value);
        }
        switch (((Ot = R ? na(R) : window), t)) {
          case "focusin":
            (uu(Ot) || Ot.contentEditable === "true") &&
              ((di = Ot), (wu = R), (ze = null));
            break;
          case "focusout":
            ze = wu = di = null;
            break;
          case "mousedown":
            tr = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            (tr = !1), Eu(K, a, P);
            break;
          case "selectionchange":
            if (Ba) break;
          case "keydown":
          case "keyup":
            Eu(K, a, P);
        }
        var ft;
        if (ds)
          t: {
            switch (t) {
              case "compositionstart":
                var pt = "onCompositionStart";
                break t;
              case "compositionend":
                pt = "onCompositionEnd";
                break t;
              case "compositionupdate":
                pt = "onCompositionUpdate";
                break t;
            }
            pt = void 0;
          }
        else
          La
            ? ms(t, a) && (pt = "onCompositionEnd")
            : t === "keydown" &&
              a.keyCode === 229 &&
              (pt = "onCompositionStart");
        pt &&
          (hs &&
            a.locale !== "ko" &&
            (La || pt !== "onCompositionStart"
              ? pt === "onCompositionEnd" && La && (ft = Fo())
              : ((jn = P),
                (ss = "value" in jn ? jn.value : jn.textContent),
                (La = !0))),
          (Ot = uc(R, pt)),
          0 < Ot.length &&
            ((pt = new tu(pt, t, null, a, P)),
            K.push({ event: pt, listeners: Ot }),
            ft
              ? (pt.data = ft)
              : ((ft = ps(a)), ft !== null && (pt.data = ft)))),
          (ft = $f ? Fl(t, a) : ou(t, a)) &&
            ((pt = uc(R, "onBeforeInput")),
            0 < pt.length &&
              ((Ot = new tu("onBeforeInput", "beforeinput", null, a, P)),
              K.push({ event: Ot, listeners: pt }),
              (Ot.data = ft))),
          My(K, t, R, a, P);
      }
      yg(K, e);
    });
  }
  function eo(t, e, a) {
    return { instance: t, listener: e, currentTarget: a };
  }
  function uc(t, e) {
    for (var a = e + "Capture", l = []; t !== null; ) {
      var o = t,
        u = o.stateNode;
      if (
        ((o = o.tag),
        (o !== 5 && o !== 26 && o !== 27) ||
          u === null ||
          ((o = Gl(t, a)),
          o != null && l.unshift(eo(t, o, u)),
          (o = Gl(t, e)),
          o != null && l.push(eo(t, o, u))),
        t.tag === 3)
      )
        return l;
      t = t.return;
    }
    return [];
  }
  function Tr(t) {
    if (t === null) return null;
    do t = t.return;
    while (t && t.tag !== 5 && t.tag !== 27);
    return t || null;
  }
  function Eg(t, e, a, l, o) {
    for (var u = e._reactName, h = []; a !== null && a !== l; ) {
      var v = a,
        _ = v.alternate,
        R = v.stateNode;
      if (((v = v.tag), _ !== null && _ === l)) break;
      (v !== 5 && v !== 26 && v !== 27) ||
        R === null ||
        ((_ = R),
        o
          ? ((R = Gl(a, u)), R != null && h.unshift(eo(a, R, _)))
          : o || ((R = Gl(a, u)), R != null && h.push(eo(a, R, _)))),
        (a = a.return);
    }
    h.length !== 0 && t.push({ event: e, listeners: h });
  }
  var Hy = /\r\n?/g,
    ky = /\u0000|\uFFFD/g;
  function _g(t) {
    return (typeof t == "string" ? t : "" + t)
      .replace(
        Hy,
        `
`
      )
      .replace(ky, "");
  }
  function Sg(t, e) {
    return (e = _g(e)), _g(t) === e;
  }
  function cc() {}
  function $t(t, e, a, l, o, u) {
    switch (a) {
      case "children":
        typeof l == "string"
          ? e === "body" || (e === "textarea" && l === "") || ui(t, l)
          : (typeof l == "number" || typeof l == "bigint") &&
            e !== "body" &&
            ui(t, "" + l);
        break;
      case "className":
        ql(t, "class", l);
        break;
      case "tabIndex":
        ql(t, "tabindex", l);
        break;
      case "dir":
      case "role":
      case "viewBox":
      case "width":
      case "height":
        ql(t, a, l);
        break;
      case "style":
        Yi(t, l, u);
        break;
      case "data":
        if (e !== "object") {
          ql(t, "data", l);
          break;
        }
      case "src":
      case "href":
        if (l === "" && (e !== "a" || a !== "href")) {
          t.removeAttribute(a);
          break;
        }
        if (
          l == null ||
          typeof l == "function" ||
          typeof l == "symbol" ||
          typeof l == "boolean"
        ) {
          t.removeAttribute(a);
          break;
        }
        (l = Pl("" + l)), t.setAttribute(a, l);
        break;
      case "action":
      case "formAction":
        if (typeof l == "function") {
          t.setAttribute(
            a,
            "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')"
          );
          break;
        } else
          typeof u == "function" &&
            (a === "formAction"
              ? (e !== "input" && $t(t, e, "name", o.name, o, null),
                $t(t, e, "formEncType", o.formEncType, o, null),
                $t(t, e, "formMethod", o.formMethod, o, null),
                $t(t, e, "formTarget", o.formTarget, o, null))
              : ($t(t, e, "encType", o.encType, o, null),
                $t(t, e, "method", o.method, o, null),
                $t(t, e, "target", o.target, o, null)));
        if (l == null || typeof l == "symbol" || typeof l == "boolean") {
          t.removeAttribute(a);
          break;
        }
        (l = Pl("" + l)), t.setAttribute(a, l);
        break;
      case "onClick":
        l != null && (t.onclick = cc);
        break;
      case "onScroll":
        l != null && Nt("scroll", t);
        break;
      case "onScrollEnd":
        l != null && Nt("scrollend", t);
        break;
      case "dangerouslySetInnerHTML":
        if (l != null) {
          if (typeof l != "object" || !("__html" in l)) throw Error(s(61));
          if (((a = l.__html), a != null)) {
            if (o.children != null) throw Error(s(60));
            t.innerHTML = a;
          }
        }
        break;
      case "multiple":
        t.multiple = l && typeof l != "function" && typeof l != "symbol";
        break;
      case "muted":
        t.muted = l && typeof l != "function" && typeof l != "symbol";
        break;
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
      case "defaultValue":
      case "defaultChecked":
      case "innerHTML":
      case "ref":
        break;
      case "autoFocus":
        break;
      case "xlinkHref":
        if (
          l == null ||
          typeof l == "function" ||
          typeof l == "boolean" ||
          typeof l == "symbol"
        ) {
          t.removeAttribute("xlink:href");
          break;
        }
        (a = Pl("" + l)),
          t.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", a);
        break;
      case "contentEditable":
      case "spellCheck":
      case "draggable":
      case "value":
      case "autoReverse":
      case "externalResourcesRequired":
      case "focusable":
      case "preserveAlpha":
        l != null && typeof l != "function" && typeof l != "symbol"
          ? t.setAttribute(a, "" + l)
          : t.removeAttribute(a);
        break;
      case "inert":
      case "allowFullScreen":
      case "async":
      case "autoPlay":
      case "controls":
      case "default":
      case "defer":
      case "disabled":
      case "disablePictureInPicture":
      case "disableRemotePlayback":
      case "formNoValidate":
      case "hidden":
      case "loop":
      case "noModule":
      case "noValidate":
      case "open":
      case "playsInline":
      case "readOnly":
      case "required":
      case "reversed":
      case "scoped":
      case "seamless":
      case "itemScope":
        l && typeof l != "function" && typeof l != "symbol"
          ? t.setAttribute(a, "")
          : t.removeAttribute(a);
        break;
      case "capture":
      case "download":
        l === !0
          ? t.setAttribute(a, "")
          : l !== !1 &&
            l != null &&
            typeof l != "function" &&
            typeof l != "symbol"
          ? t.setAttribute(a, l)
          : t.removeAttribute(a);
        break;
      case "cols":
      case "rows":
      case "size":
      case "span":
        l != null &&
        typeof l != "function" &&
        typeof l != "symbol" &&
        !isNaN(l) &&
        1 <= l
          ? t.setAttribute(a, l)
          : t.removeAttribute(a);
        break;
      case "rowSpan":
      case "start":
        l == null || typeof l == "function" || typeof l == "symbol" || isNaN(l)
          ? t.removeAttribute(a)
          : t.setAttribute(a, l);
        break;
      case "popover":
        Nt("beforetoggle", t), Nt("toggle", t), $l(t, "popover", l);
        break;
      case "xlinkActuate":
        Hn(t, "http://www.w3.org/1999/xlink", "xlink:actuate", l);
        break;
      case "xlinkArcrole":
        Hn(t, "http://www.w3.org/1999/xlink", "xlink:arcrole", l);
        break;
      case "xlinkRole":
        Hn(t, "http://www.w3.org/1999/xlink", "xlink:role", l);
        break;
      case "xlinkShow":
        Hn(t, "http://www.w3.org/1999/xlink", "xlink:show", l);
        break;
      case "xlinkTitle":
        Hn(t, "http://www.w3.org/1999/xlink", "xlink:title", l);
        break;
      case "xlinkType":
        Hn(t, "http://www.w3.org/1999/xlink", "xlink:type", l);
        break;
      case "xmlBase":
        Hn(t, "http://www.w3.org/XML/1998/namespace", "xml:base", l);
        break;
      case "xmlLang":
        Hn(t, "http://www.w3.org/XML/1998/namespace", "xml:lang", l);
        break;
      case "xmlSpace":
        Hn(t, "http://www.w3.org/XML/1998/namespace", "xml:space", l);
        break;
      case "is":
        $l(t, "is", l);
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        (!(2 < a.length) ||
          (a[0] !== "o" && a[0] !== "O") ||
          (a[1] !== "n" && a[1] !== "N")) &&
          ((a = Sf.get(a) || a), $l(t, a, l));
    }
  }
  function Kd(t, e, a, l, o, u) {
    switch (a) {
      case "style":
        Yi(t, l, u);
        break;
      case "dangerouslySetInnerHTML":
        if (l != null) {
          if (typeof l != "object" || !("__html" in l)) throw Error(s(61));
          if (((a = l.__html), a != null)) {
            if (o.children != null) throw Error(s(60));
            t.innerHTML = a;
          }
        }
        break;
      case "children":
        typeof l == "string"
          ? ui(t, l)
          : (typeof l == "number" || typeof l == "bigint") && ui(t, "" + l);
        break;
      case "onScroll":
        l != null && Nt("scroll", t);
        break;
      case "onScrollEnd":
        l != null && Nt("scrollend", t);
        break;
      case "onClick":
        l != null && (t.onclick = cc);
        break;
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
      case "innerHTML":
      case "ref":
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        if (!qo.hasOwnProperty(a))
          t: {
            if (
              a[0] === "o" &&
              a[1] === "n" &&
              ((o = a.endsWith("Capture")),
              (e = a.slice(2, o ? a.length - 7 : void 0)),
              (u = t[Oe] || null),
              (u = u != null ? u[a] : null),
              typeof u == "function" && t.removeEventListener(e, u, o),
              typeof l == "function")
            ) {
              typeof u != "function" &&
                u !== null &&
                (a in t
                  ? (t[a] = null)
                  : t.hasAttribute(a) && t.removeAttribute(a)),
                t.addEventListener(e, l, o);
              break t;
            }
            a in t
              ? (t[a] = l)
              : l === !0
              ? t.setAttribute(a, "")
              : $l(t, a, l);
          }
    }
  }
  function xe(t, e, a) {
    switch (e) {
      case "div":
      case "span":
      case "svg":
      case "path":
      case "a":
      case "g":
      case "p":
      case "li":
        break;
      case "img":
        Nt("error", t), Nt("load", t);
        var l = !1,
          o = !1,
          u;
        for (u in a)
          if (a.hasOwnProperty(u)) {
            var h = a[u];
            if (h != null)
              switch (u) {
                case "src":
                  l = !0;
                  break;
                case "srcSet":
                  o = !0;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  throw Error(s(137, e));
                default:
                  $t(t, e, u, h, a, null);
              }
          }
        o && $t(t, e, "srcSet", a.srcSet, a, null),
          l && $t(t, e, "src", a.src, a, null);
        return;
      case "input":
        Nt("invalid", t);
        var v = (u = h = o = null),
          _ = null,
          R = null;
        for (l in a)
          if (a.hasOwnProperty(l)) {
            var P = a[l];
            if (P != null)
              switch (l) {
                case "name":
                  o = P;
                  break;
                case "type":
                  h = P;
                  break;
                case "checked":
                  _ = P;
                  break;
                case "defaultChecked":
                  R = P;
                  break;
                case "value":
                  u = P;
                  break;
                case "defaultValue":
                  v = P;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  if (P != null) throw Error(s(137, e));
                  break;
                default:
                  $t(t, e, l, P, a, null);
              }
          }
        Xo(t, u, v, _, R, h, o, !1), Yl(t);
        return;
      case "select":
        Nt("invalid", t), (l = h = u = null);
        for (o in a)
          if (a.hasOwnProperty(o) && ((v = a[o]), v != null))
            switch (o) {
              case "value":
                u = v;
                break;
              case "defaultValue":
                h = v;
                break;
              case "multiple":
                l = v;
              default:
                $t(t, e, o, v, a, null);
            }
        (e = u),
          (a = h),
          (t.multiple = !!l),
          e != null ? oi(t, !!l, e, !1) : a != null && oi(t, !!l, a, !0);
        return;
      case "textarea":
        Nt("invalid", t), (u = o = l = null);
        for (h in a)
          if (a.hasOwnProperty(h) && ((v = a[h]), v != null))
            switch (h) {
              case "value":
                l = v;
                break;
              case "defaultValue":
                o = v;
                break;
              case "children":
                u = v;
                break;
              case "dangerouslySetInnerHTML":
                if (v != null) throw Error(s(91));
                break;
              default:
                $t(t, e, h, v, a, null);
            }
        Zo(t, l, o, u), Yl(t);
        return;
      case "option":
        for (_ in a)
          if (a.hasOwnProperty(_) && ((l = a[_]), l != null))
            switch (_) {
              case "selected":
                t.selected =
                  l && typeof l != "function" && typeof l != "symbol";
                break;
              default:
                $t(t, e, _, l, a, null);
            }
        return;
      case "dialog":
        Nt("beforetoggle", t), Nt("toggle", t), Nt("cancel", t), Nt("close", t);
        break;
      case "iframe":
      case "object":
        Nt("load", t);
        break;
      case "video":
      case "audio":
        for (l = 0; l < to.length; l++) Nt(to[l], t);
        break;
      case "image":
        Nt("error", t), Nt("load", t);
        break;
      case "details":
        Nt("toggle", t);
        break;
      case "embed":
      case "source":
      case "link":
        Nt("error", t), Nt("load", t);
      case "area":
      case "base":
      case "br":
      case "col":
      case "hr":
      case "keygen":
      case "meta":
      case "param":
      case "track":
      case "wbr":
      case "menuitem":
        for (R in a)
          if (a.hasOwnProperty(R) && ((l = a[R]), l != null))
            switch (R) {
              case "children":
              case "dangerouslySetInnerHTML":
                throw Error(s(137, e));
              default:
                $t(t, e, R, l, a, null);
            }
        return;
      default:
        if (as(e)) {
          for (P in a)
            a.hasOwnProperty(P) &&
              ((l = a[P]), l !== void 0 && Kd(t, e, P, l, a, void 0));
          return;
        }
    }
    for (v in a)
      a.hasOwnProperty(v) && ((l = a[v]), l != null && $t(t, e, v, l, a, null));
  }
  function jy(t, e, a, l) {
    switch (e) {
      case "div":
      case "span":
      case "svg":
      case "path":
      case "a":
      case "g":
      case "p":
      case "li":
        break;
      case "input":
        var o = null,
          u = null,
          h = null,
          v = null,
          _ = null,
          R = null,
          P = null;
        for (H in a) {
          var K = a[H];
          if (a.hasOwnProperty(H) && K != null)
            switch (H) {
              case "checked":
                break;
              case "value":
                break;
              case "defaultValue":
                _ = K;
              default:
                l.hasOwnProperty(H) || $t(t, e, H, null, l, K);
            }
        }
        for (var B in l) {
          var H = l[B];
          if (((K = a[B]), l.hasOwnProperty(B) && (H != null || K != null)))
            switch (B) {
              case "type":
                u = H;
                break;
              case "name":
                o = H;
                break;
              case "checked":
                R = H;
                break;
              case "defaultChecked":
                P = H;
                break;
              case "value":
                h = H;
                break;
              case "defaultValue":
                v = H;
                break;
              case "children":
              case "dangerouslySetInnerHTML":
                if (H != null) throw Error(s(137, e));
                break;
              default:
                H !== K && $t(t, e, B, H, l, K);
            }
        }
        Da(t, h, v, _, R, P, u, o);
        return;
      case "select":
        H = h = v = B = null;
        for (u in a)
          if (((_ = a[u]), a.hasOwnProperty(u) && _ != null))
            switch (u) {
              case "value":
                break;
              case "multiple":
                H = _;
              default:
                l.hasOwnProperty(u) || $t(t, e, u, null, l, _);
            }
        for (o in l)
          if (
            ((u = l[o]),
            (_ = a[o]),
            l.hasOwnProperty(o) && (u != null || _ != null))
          )
            switch (o) {
              case "value":
                B = u;
                break;
              case "defaultValue":
                v = u;
                break;
              case "multiple":
                h = u;
              default:
                u !== _ && $t(t, e, o, u, l, _);
            }
        (e = v),
          (a = h),
          (l = H),
          B != null
            ? oi(t, !!a, B, !1)
            : !!l != !!a &&
              (e != null ? oi(t, !!a, e, !0) : oi(t, !!a, a ? [] : "", !1));
        return;
      case "textarea":
        H = B = null;
        for (v in a)
          if (
            ((o = a[v]),
            a.hasOwnProperty(v) && o != null && !l.hasOwnProperty(v))
          )
            switch (v) {
              case "value":
                break;
              case "children":
                break;
              default:
                $t(t, e, v, null, l, o);
            }
        for (h in l)
          if (
            ((o = l[h]),
            (u = a[h]),
            l.hasOwnProperty(h) && (o != null || u != null))
          )
            switch (h) {
              case "value":
                B = o;
                break;
              case "defaultValue":
                H = o;
                break;
              case "children":
                break;
              case "dangerouslySetInnerHTML":
                if (o != null) throw Error(s(91));
                break;
              default:
                o !== u && $t(t, e, h, o, l, u);
            }
        Qo(t, B, H);
        return;
      case "option":
        for (var vt in a)
          if (
            ((B = a[vt]),
            a.hasOwnProperty(vt) && B != null && !l.hasOwnProperty(vt))
          )
            switch (vt) {
              case "selected":
                t.selected = !1;
                break;
              default:
                $t(t, e, vt, null, l, B);
            }
        for (_ in l)
          if (
            ((B = l[_]),
            (H = a[_]),
            l.hasOwnProperty(_) && B !== H && (B != null || H != null))
          )
            switch (_) {
              case "selected":
                t.selected =
                  B && typeof B != "function" && typeof B != "symbol";
                break;
              default:
                $t(t, e, _, B, l, H);
            }
        return;
      case "img":
      case "link":
      case "area":
      case "base":
      case "br":
      case "col":
      case "embed":
      case "hr":
      case "keygen":
      case "meta":
      case "param":
      case "source":
      case "track":
      case "wbr":
      case "menuitem":
        for (var mt in a)
          (B = a[mt]),
            a.hasOwnProperty(mt) &&
              B != null &&
              !l.hasOwnProperty(mt) &&
              $t(t, e, mt, null, l, B);
        for (R in l)
          if (
            ((B = l[R]),
            (H = a[R]),
            l.hasOwnProperty(R) && B !== H && (B != null || H != null))
          )
            switch (R) {
              case "children":
              case "dangerouslySetInnerHTML":
                if (B != null) throw Error(s(137, e));
                break;
              default:
                $t(t, e, R, B, l, H);
            }
        return;
      default:
        if (as(e)) {
          for (var qt in a)
            (B = a[qt]),
              a.hasOwnProperty(qt) &&
                B !== void 0 &&
                !l.hasOwnProperty(qt) &&
                Kd(t, e, qt, void 0, l, B);
          for (P in l)
            (B = l[P]),
              (H = a[P]),
              !l.hasOwnProperty(P) ||
                B === H ||
                (B === void 0 && H === void 0) ||
                Kd(t, e, P, B, l, H);
          return;
        }
    }
    for (var C in a)
      (B = a[C]),
        a.hasOwnProperty(C) &&
          B != null &&
          !l.hasOwnProperty(C) &&
          $t(t, e, C, null, l, B);
    for (K in l)
      (B = l[K]),
        (H = a[K]),
        !l.hasOwnProperty(K) ||
          B === H ||
          (B == null && H == null) ||
          $t(t, e, K, B, l, H);
  }
  var Xd = null,
    Qd = null;
  function fc(t) {
    return t.nodeType === 9 ? t : t.ownerDocument;
  }
  function Ag(t) {
    switch (t) {
      case "http://www.w3.org/2000/svg":
        return 1;
      case "http://www.w3.org/1998/Math/MathML":
        return 2;
      default:
        return 0;
    }
  }
  function Tg(t, e) {
    if (t === 0)
      switch (e) {
        case "svg":
          return 1;
        case "math":
          return 2;
        default:
          return 0;
      }
    return t === 1 && e === "foreignObject" ? 0 : t;
  }
  function Zd(t, e) {
    return (
      t === "textarea" ||
      t === "noscript" ||
      typeof e.children == "string" ||
      typeof e.children == "number" ||
      typeof e.children == "bigint" ||
      (typeof e.dangerouslySetInnerHTML == "object" &&
        e.dangerouslySetInnerHTML !== null &&
        e.dangerouslySetInnerHTML.__html != null)
    );
  }
  var Id = null;
  function Uy() {
    var t = window.event;
    return t && t.type === "popstate"
      ? t === Id
        ? !1
        : ((Id = t), !0)
      : ((Id = null), !1);
  }
  var xg = typeof setTimeout == "function" ? setTimeout : void 0,
    $y = typeof clearTimeout == "function" ? clearTimeout : void 0,
    Og = typeof Promise == "function" ? Promise : void 0,
    qy =
      typeof queueMicrotask == "function"
        ? queueMicrotask
        : typeof Og < "u"
        ? function (t) {
            return Og.resolve(null).then(t).catch(Vy);
          }
        : xg;
  function Vy(t) {
    setTimeout(function () {
      throw t;
    });
  }
  function Di(t) {
    return t === "head";
  }
  function Cg(t, e) {
    var a = e,
      l = 0,
      o = 0;
    do {
      var u = a.nextSibling;
      if ((t.removeChild(a), u && u.nodeType === 8))
        if (((a = u.data), a === "/$")) {
          if (0 < l && 8 > l) {
            a = l;
            var h = t.ownerDocument;
            if ((a & 1 && no(h.documentElement), a & 2 && no(h.body), a & 4))
              for (a = h.head, no(a), h = a.firstChild; h; ) {
                var v = h.nextSibling,
                  _ = h.nodeName;
                h[Vi] ||
                  _ === "SCRIPT" ||
                  _ === "STYLE" ||
                  (_ === "LINK" && h.rel.toLowerCase() === "stylesheet") ||
                  a.removeChild(h),
                  (h = v);
              }
          }
          if (o === 0) {
            t.removeChild(u), co(e);
            return;
          }
          o--;
        } else
          a === "$" || a === "$?" || a === "$!"
            ? o++
            : (l = a.charCodeAt(0) - 48);
      else l = 0;
      a = u;
    } while (a);
    co(e);
  }
  function Fd(t) {
    var e = t.firstChild;
    for (e && e.nodeType === 10 && (e = e.nextSibling); e; ) {
      var a = e;
      switch (((e = e.nextSibling), a.nodeName)) {
        case "HTML":
        case "HEAD":
        case "BODY":
          Fd(a), Oa(a);
          continue;
        case "SCRIPT":
        case "STYLE":
          continue;
        case "LINK":
          if (a.rel.toLowerCase() === "stylesheet") continue;
      }
      t.removeChild(a);
    }
  }
  function Yy(t, e, a, l) {
    for (; t.nodeType === 1; ) {
      var o = a;
      if (t.nodeName.toLowerCase() !== e.toLowerCase()) {
        if (!l && (t.nodeName !== "INPUT" || t.type !== "hidden")) break;
      } else if (l) {
        if (!t[Vi])
          switch (e) {
            case "meta":
              if (!t.hasAttribute("itemprop")) break;
              return t;
            case "link":
              if (
                ((u = t.getAttribute("rel")),
                u === "stylesheet" && t.hasAttribute("data-precedence"))
              )
                break;
              if (
                u !== o.rel ||
                t.getAttribute("href") !==
                  (o.href == null || o.href === "" ? null : o.href) ||
                t.getAttribute("crossorigin") !==
                  (o.crossOrigin == null ? null : o.crossOrigin) ||
                t.getAttribute("title") !== (o.title == null ? null : o.title)
              )
                break;
              return t;
            case "style":
              if (t.hasAttribute("data-precedence")) break;
              return t;
            case "script":
              if (
                ((u = t.getAttribute("src")),
                (u !== (o.src == null ? null : o.src) ||
                  t.getAttribute("type") !== (o.type == null ? null : o.type) ||
                  t.getAttribute("crossorigin") !==
                    (o.crossOrigin == null ? null : o.crossOrigin)) &&
                  u &&
                  t.hasAttribute("async") &&
                  !t.hasAttribute("itemprop"))
              )
                break;
              return t;
            default:
              return t;
          }
      } else if (e === "input" && t.type === "hidden") {
        var u = o.name == null ? null : "" + o.name;
        if (o.type === "hidden" && t.getAttribute("name") === u) return t;
      } else return t;
      if (((t = In(t.nextSibling)), t === null)) break;
    }
    return null;
  }
  function Py(t, e, a) {
    if (e === "") return null;
    for (; t.nodeType !== 3; )
      if (
        ((t.nodeType !== 1 || t.nodeName !== "INPUT" || t.type !== "hidden") &&
          !a) ||
        ((t = In(t.nextSibling)), t === null)
      )
        return null;
    return t;
  }
  function Jd(t) {
    return (
      t.data === "$!" ||
      (t.data === "$?" && t.ownerDocument.readyState === "complete")
    );
  }
  function Gy(t, e) {
    var a = t.ownerDocument;
    if (t.data !== "$?" || a.readyState === "complete") e();
    else {
      var l = function () {
        e(), a.removeEventListener("DOMContentLoaded", l);
      };
      a.addEventListener("DOMContentLoaded", l), (t._reactRetry = l);
    }
  }
  function In(t) {
    for (; t != null; t = t.nextSibling) {
      var e = t.nodeType;
      if (e === 1 || e === 3) break;
      if (e === 8) {
        if (
          ((e = t.data),
          e === "$" || e === "$!" || e === "$?" || e === "F!" || e === "F")
        )
          break;
        if (e === "/$") return null;
      }
    }
    return t;
  }
  var Wd = null;
  function Ng(t) {
    t = t.previousSibling;
    for (var e = 0; t; ) {
      if (t.nodeType === 8) {
        var a = t.data;
        if (a === "$" || a === "$!" || a === "$?") {
          if (e === 0) return t;
          e--;
        } else a === "/$" && e++;
      }
      t = t.previousSibling;
    }
    return null;
  }
  function Dg(t, e, a) {
    switch (((e = fc(a)), t)) {
      case "html":
        if (((t = e.documentElement), !t)) throw Error(s(452));
        return t;
      case "head":
        if (((t = e.head), !t)) throw Error(s(453));
        return t;
      case "body":
        if (((t = e.body), !t)) throw Error(s(454));
        return t;
      default:
        throw Error(s(451));
    }
  }
  function no(t) {
    for (var e = t.attributes; e.length; ) t.removeAttributeNode(e[0]);
    Oa(t);
  }
  var Mn = new Map(),
    Rg = new Set();
  function dc(t) {
    return typeof t.getRootNode == "function"
      ? t.getRootNode()
      : t.nodeType === 9
      ? t
      : t.ownerDocument;
  }
  var Ja = W.d;
  W.d = { f: Ky, r: Xy, D: Qy, C: Zy, L: Iy, m: Fy, X: Wy, S: Jy, M: tw };
  function Ky() {
    var t = Ja.f(),
      e = ac();
    return t || e;
  }
  function Xy(t) {
    var e = ln(t);
    e !== null && e.tag === 5 && e.type === "form" ? Fm(e) : Ja.r(t);
  }
  var xr = typeof document > "u" ? null : document;
  function Mg(t, e, a) {
    var l = xr;
    if (l && typeof e == "string" && e) {
      var o = rn(e);
      (o = 'link[rel="' + t + '"][href="' + o + '"]'),
        typeof a == "string" && (o += '[crossorigin="' + a + '"]'),
        Rg.has(o) ||
          (Rg.add(o),
          (t = { rel: t, crossOrigin: a, href: e }),
          l.querySelector(o) === null &&
            ((e = l.createElement("link")),
            xe(e, "link", t),
            Wt(e),
            l.head.appendChild(e)));
    }
  }
  function Qy(t) {
    Ja.D(t), Mg("dns-prefetch", t, null);
  }
  function Zy(t, e) {
    Ja.C(t, e), Mg("preconnect", t, e);
  }
  function Iy(t, e, a) {
    Ja.L(t, e, a);
    var l = xr;
    if (l && t && e) {
      var o = 'link[rel="preload"][as="' + rn(e) + '"]';
      e === "image" && a && a.imageSrcSet
        ? ((o += '[imagesrcset="' + rn(a.imageSrcSet) + '"]'),
          typeof a.imageSizes == "string" &&
            (o += '[imagesizes="' + rn(a.imageSizes) + '"]'))
        : (o += '[href="' + rn(t) + '"]');
      var u = o;
      switch (e) {
        case "style":
          u = Or(t);
          break;
        case "script":
          u = Cr(t);
      }
      Mn.has(u) ||
        ((t = w(
          {
            rel: "preload",
            href: e === "image" && a && a.imageSrcSet ? void 0 : t,
            as: e,
          },
          a
        )),
        Mn.set(u, t),
        l.querySelector(o) !== null ||
          (e === "style" && l.querySelector(ao(u))) ||
          (e === "script" && l.querySelector(io(u))) ||
          ((e = l.createElement("link")),
          xe(e, "link", t),
          Wt(e),
          l.head.appendChild(e)));
    }
  }
  function Fy(t, e) {
    Ja.m(t, e);
    var a = xr;
    if (a && t) {
      var l = e && typeof e.as == "string" ? e.as : "script",
        o =
          'link[rel="modulepreload"][as="' + rn(l) + '"][href="' + rn(t) + '"]',
        u = o;
      switch (l) {
        case "audioworklet":
        case "paintworklet":
        case "serviceworker":
        case "sharedworker":
        case "worker":
        case "script":
          u = Cr(t);
      }
      if (
        !Mn.has(u) &&
        ((t = w({ rel: "modulepreload", href: t }, e)),
        Mn.set(u, t),
        a.querySelector(o) === null)
      ) {
        switch (l) {
          case "audioworklet":
          case "paintworklet":
          case "serviceworker":
          case "sharedworker":
          case "worker":
          case "script":
            if (a.querySelector(io(u))) return;
        }
        (l = a.createElement("link")),
          xe(l, "link", t),
          Wt(l),
          a.head.appendChild(l);
      }
    }
  }
  function Jy(t, e, a) {
    Ja.S(t, e, a);
    var l = xr;
    if (l && t) {
      var o = ri(l).hoistableStyles,
        u = Or(t);
      e = e || "default";
      var h = o.get(u);
      if (!h) {
        var v = { loading: 0, preload: null };
        if ((h = l.querySelector(ao(u)))) v.loading = 5;
        else {
          (t = w({ rel: "stylesheet", href: t, "data-precedence": e }, a)),
            (a = Mn.get(u)) && th(t, a);
          var _ = (h = l.createElement("link"));
          Wt(_),
            xe(_, "link", t),
            (_._p = new Promise(function (R, P) {
              (_.onload = R), (_.onerror = P);
            })),
            _.addEventListener("load", function () {
              v.loading |= 1;
            }),
            _.addEventListener("error", function () {
              v.loading |= 2;
            }),
            (v.loading |= 4),
            hc(h, e, l);
        }
        (h = { type: "stylesheet", instance: h, count: 1, state: v }),
          o.set(u, h);
      }
    }
  }
  function Wy(t, e) {
    Ja.X(t, e);
    var a = xr;
    if (a && t) {
      var l = ri(a).hoistableScripts,
        o = Cr(t),
        u = l.get(o);
      u ||
        ((u = a.querySelector(io(o))),
        u ||
          ((t = w({ src: t, async: !0 }, e)),
          (e = Mn.get(o)) && eh(t, e),
          (u = a.createElement("script")),
          Wt(u),
          xe(u, "link", t),
          a.head.appendChild(u)),
        (u = { type: "script", instance: u, count: 1, state: null }),
        l.set(o, u));
    }
  }
  function tw(t, e) {
    Ja.M(t, e);
    var a = xr;
    if (a && t) {
      var l = ri(a).hoistableScripts,
        o = Cr(t),
        u = l.get(o);
      u ||
        ((u = a.querySelector(io(o))),
        u ||
          ((t = w({ src: t, async: !0, type: "module" }, e)),
          (e = Mn.get(o)) && eh(t, e),
          (u = a.createElement("script")),
          Wt(u),
          xe(u, "link", t),
          a.head.appendChild(u)),
        (u = { type: "script", instance: u, count: 1, state: null }),
        l.set(o, u));
    }
  }
  function Lg(t, e, a, l) {
    var o = (o = dt.current) ? dc(o) : null;
    if (!o) throw Error(s(446));
    switch (t) {
      case "meta":
      case "title":
        return null;
      case "style":
        return typeof a.precedence == "string" && typeof a.href == "string"
          ? ((e = Or(a.href)),
            (a = ri(o).hoistableStyles),
            (l = a.get(e)),
            l ||
              ((l = { type: "style", instance: null, count: 0, state: null }),
              a.set(e, l)),
            l)
          : { type: "void", instance: null, count: 0, state: null };
      case "link":
        if (
          a.rel === "stylesheet" &&
          typeof a.href == "string" &&
          typeof a.precedence == "string"
        ) {
          t = Or(a.href);
          var u = ri(o).hoistableStyles,
            h = u.get(t);
          if (
            (h ||
              ((o = o.ownerDocument || o),
              (h = {
                type: "stylesheet",
                instance: null,
                count: 0,
                state: { loading: 0, preload: null },
              }),
              u.set(t, h),
              (u = o.querySelector(ao(t))) &&
                !u._p &&
                ((h.instance = u), (h.state.loading = 5)),
              Mn.has(t) ||
                ((a = {
                  rel: "preload",
                  as: "style",
                  href: a.href,
                  crossOrigin: a.crossOrigin,
                  integrity: a.integrity,
                  media: a.media,
                  hrefLang: a.hrefLang,
                  referrerPolicy: a.referrerPolicy,
                }),
                Mn.set(t, a),
                u || ew(o, t, a, h.state))),
            e && l === null)
          )
            throw Error(s(528, ""));
          return h;
        }
        if (e && l !== null) throw Error(s(529, ""));
        return null;
      case "script":
        return (
          (e = a.async),
          (a = a.src),
          typeof a == "string" &&
          e &&
          typeof e != "function" &&
          typeof e != "symbol"
            ? ((e = Cr(a)),
              (a = ri(o).hoistableScripts),
              (l = a.get(e)),
              l ||
                ((l = {
                  type: "script",
                  instance: null,
                  count: 0,
                  state: null,
                }),
                a.set(e, l)),
              l)
            : { type: "void", instance: null, count: 0, state: null }
        );
      default:
        throw Error(s(444, t));
    }
  }
  function Or(t) {
    return 'href="' + rn(t) + '"';
  }
  function ao(t) {
    return 'link[rel="stylesheet"][' + t + "]";
  }
  function Bg(t) {
    return w({}, t, { "data-precedence": t.precedence, precedence: null });
  }
  function ew(t, e, a, l) {
    t.querySelector('link[rel="preload"][as="style"][' + e + "]")
      ? (l.loading = 1)
      : ((e = t.createElement("link")),
        (l.preload = e),
        e.addEventListener("load", function () {
          return (l.loading |= 1);
        }),
        e.addEventListener("error", function () {
          return (l.loading |= 2);
        }),
        xe(e, "link", a),
        Wt(e),
        t.head.appendChild(e));
  }
  function Cr(t) {
    return '[src="' + rn(t) + '"]';
  }
  function io(t) {
    return "script[async]" + t;
  }
  function zg(t, e, a) {
    if ((e.count++, e.instance === null))
      switch (e.type) {
        case "style":
          var l = t.querySelector('style[data-href~="' + rn(a.href) + '"]');
          if (l) return (e.instance = l), Wt(l), l;
          var o = w({}, a, {
            "data-href": a.href,
            "data-precedence": a.precedence,
            href: null,
            precedence: null,
          });
          return (
            (l = (t.ownerDocument || t).createElement("style")),
            Wt(l),
            xe(l, "style", o),
            hc(l, a.precedence, t),
            (e.instance = l)
          );
        case "stylesheet":
          o = Or(a.href);
          var u = t.querySelector(ao(o));
          if (u) return (e.state.loading |= 4), (e.instance = u), Wt(u), u;
          (l = Bg(a)),
            (o = Mn.get(o)) && th(l, o),
            (u = (t.ownerDocument || t).createElement("link")),
            Wt(u);
          var h = u;
          return (
            (h._p = new Promise(function (v, _) {
              (h.onload = v), (h.onerror = _);
            })),
            xe(u, "link", l),
            (e.state.loading |= 4),
            hc(u, a.precedence, t),
            (e.instance = u)
          );
        case "script":
          return (
            (u = Cr(a.src)),
            (o = t.querySelector(io(u)))
              ? ((e.instance = o), Wt(o), o)
              : ((l = a),
                (o = Mn.get(u)) && ((l = w({}, a)), eh(l, o)),
                (t = t.ownerDocument || t),
                (o = t.createElement("script")),
                Wt(o),
                xe(o, "link", l),
                t.head.appendChild(o),
                (e.instance = o))
          );
        case "void":
          return null;
        default:
          throw Error(s(443, e.type));
      }
    else
      e.type === "stylesheet" &&
        (e.state.loading & 4) === 0 &&
        ((l = e.instance), (e.state.loading |= 4), hc(l, a.precedence, t));
    return e.instance;
  }
  function hc(t, e, a) {
    for (
      var l = a.querySelectorAll(
          'link[rel="stylesheet"][data-precedence],style[data-precedence]'
        ),
        o = l.length ? l[l.length - 1] : null,
        u = o,
        h = 0;
      h < l.length;
      h++
    ) {
      var v = l[h];
      if (v.dataset.precedence === e) u = v;
      else if (u !== o) break;
    }
    u
      ? u.parentNode.insertBefore(t, u.nextSibling)
      : ((e = a.nodeType === 9 ? a.head : a), e.insertBefore(t, e.firstChild));
  }
  function th(t, e) {
    t.crossOrigin == null && (t.crossOrigin = e.crossOrigin),
      t.referrerPolicy == null && (t.referrerPolicy = e.referrerPolicy),
      t.title == null && (t.title = e.title);
  }
  function eh(t, e) {
    t.crossOrigin == null && (t.crossOrigin = e.crossOrigin),
      t.referrerPolicy == null && (t.referrerPolicy = e.referrerPolicy),
      t.integrity == null && (t.integrity = e.integrity);
  }
  var mc = null;
  function Hg(t, e, a) {
    if (mc === null) {
      var l = new Map(),
        o = (mc = new Map());
      o.set(a, l);
    } else (o = mc), (l = o.get(a)), l || ((l = new Map()), o.set(a, l));
    if (l.has(t)) return l;
    for (
      l.set(t, null), a = a.getElementsByTagName(t), o = 0;
      o < a.length;
      o++
    ) {
      var u = a[o];
      if (
        !(
          u[Vi] ||
          u[ie] ||
          (t === "link" && u.getAttribute("rel") === "stylesheet")
        ) &&
        u.namespaceURI !== "http://www.w3.org/2000/svg"
      ) {
        var h = u.getAttribute(e) || "";
        h = t + h;
        var v = l.get(h);
        v ? v.push(u) : l.set(h, [u]);
      }
    }
    return l;
  }
  function kg(t, e, a) {
    (t = t.ownerDocument || t),
      t.head.insertBefore(
        a,
        e === "title" ? t.querySelector("head > title") : null
      );
  }
  function nw(t, e, a) {
    if (a === 1 || e.itemProp != null) return !1;
    switch (t) {
      case "meta":
      case "title":
        return !0;
      case "style":
        if (
          typeof e.precedence != "string" ||
          typeof e.href != "string" ||
          e.href === ""
        )
          break;
        return !0;
      case "link":
        if (
          typeof e.rel != "string" ||
          typeof e.href != "string" ||
          e.href === "" ||
          e.onLoad ||
          e.onError
        )
          break;
        switch (e.rel) {
          case "stylesheet":
            return (
              (t = e.disabled), typeof e.precedence == "string" && t == null
            );
          default:
            return !0;
        }
      case "script":
        if (
          e.async &&
          typeof e.async != "function" &&
          typeof e.async != "symbol" &&
          !e.onLoad &&
          !e.onError &&
          e.src &&
          typeof e.src == "string"
        )
          return !0;
    }
    return !1;
  }
  function jg(t) {
    return !(t.type === "stylesheet" && (t.state.loading & 3) === 0);
  }
  var lo = null;
  function aw() {}
  function iw(t, e, a) {
    if (lo === null) throw Error(s(475));
    var l = lo;
    if (
      e.type === "stylesheet" &&
      (typeof a.media != "string" || matchMedia(a.media).matches !== !1) &&
      (e.state.loading & 4) === 0
    ) {
      if (e.instance === null) {
        var o = Or(a.href),
          u = t.querySelector(ao(o));
        if (u) {
          (t = u._p),
            t !== null &&
              typeof t == "object" &&
              typeof t.then == "function" &&
              (l.count++, (l = pc.bind(l)), t.then(l, l)),
            (e.state.loading |= 4),
            (e.instance = u),
            Wt(u);
          return;
        }
        (u = t.ownerDocument || t),
          (a = Bg(a)),
          (o = Mn.get(o)) && th(a, o),
          (u = u.createElement("link")),
          Wt(u);
        var h = u;
        (h._p = new Promise(function (v, _) {
          (h.onload = v), (h.onerror = _);
        })),
          xe(u, "link", a),
          (e.instance = u);
      }
      l.stylesheets === null && (l.stylesheets = new Map()),
        l.stylesheets.set(e, t),
        (t = e.state.preload) &&
          (e.state.loading & 3) === 0 &&
          (l.count++,
          (e = pc.bind(l)),
          t.addEventListener("load", e),
          t.addEventListener("error", e));
    }
  }
  function lw() {
    if (lo === null) throw Error(s(475));
    var t = lo;
    return (
      t.stylesheets && t.count === 0 && nh(t, t.stylesheets),
      0 < t.count
        ? function (e) {
            var a = setTimeout(function () {
              if ((t.stylesheets && nh(t, t.stylesheets), t.unsuspend)) {
                var l = t.unsuspend;
                (t.unsuspend = null), l();
              }
            }, 6e4);
            return (
              (t.unsuspend = e),
              function () {
                (t.unsuspend = null), clearTimeout(a);
              }
            );
          }
        : null
    );
  }
  function pc() {
    if ((this.count--, this.count === 0)) {
      if (this.stylesheets) nh(this, this.stylesheets);
      else if (this.unsuspend) {
        var t = this.unsuspend;
        (this.unsuspend = null), t();
      }
    }
  }
  var gc = null;
  function nh(t, e) {
    (t.stylesheets = null),
      t.unsuspend !== null &&
        (t.count++,
        (gc = new Map()),
        e.forEach(rw, t),
        (gc = null),
        pc.call(t));
  }
  function rw(t, e) {
    if (!(e.state.loading & 4)) {
      var a = gc.get(t);
      if (a) var l = a.get(null);
      else {
        (a = new Map()), gc.set(t, a);
        for (
          var o = t.querySelectorAll(
              "link[data-precedence],style[data-precedence]"
            ),
            u = 0;
          u < o.length;
          u++
        ) {
          var h = o[u];
          (h.nodeName === "LINK" || h.getAttribute("media") !== "not all") &&
            (a.set(h.dataset.precedence, h), (l = h));
        }
        l && a.set(null, l);
      }
      (o = e.instance),
        (h = o.getAttribute("data-precedence")),
        (u = a.get(h) || l),
        u === l && a.set(null, o),
        a.set(h, o),
        this.count++,
        (l = pc.bind(this)),
        o.addEventListener("load", l),
        o.addEventListener("error", l),
        u
          ? u.parentNode.insertBefore(o, u.nextSibling)
          : ((t = t.nodeType === 9 ? t.head : t),
            t.insertBefore(o, t.firstChild)),
        (e.state.loading |= 4);
    }
  }
  var ro = {
    $$typeof: J,
    Provider: null,
    Consumer: null,
    _currentValue: ct,
    _currentValue2: ct,
    _threadCount: 0,
  };
  function sw(t, e, a, l, o, u, h, v) {
    (this.tag = 1),
      (this.containerInfo = t),
      (this.pingCache = this.current = this.pendingChildren = null),
      (this.timeoutHandle = -1),
      (this.callbackNode =
        this.next =
        this.pendingContext =
        this.context =
        this.cancelPendingCommit =
          null),
      (this.callbackPriority = 0),
      (this.expirationTimes = Zr(-1)),
      (this.entangledLanes =
        this.shellSuspendCounter =
        this.errorRecoveryDisabledLanes =
        this.expiredLanes =
        this.warmLanes =
        this.pingedLanes =
        this.suspendedLanes =
        this.pendingLanes =
          0),
      (this.entanglements = Zr(0)),
      (this.hiddenUpdates = Zr(null)),
      (this.identifierPrefix = l),
      (this.onUncaughtError = o),
      (this.onCaughtError = u),
      (this.onRecoverableError = h),
      (this.pooledCache = null),
      (this.pooledCacheLanes = 0),
      (this.formState = v),
      (this.incompleteTransitions = new Map());
  }
  function Ug(t, e, a, l, o, u, h, v, _, R, P, K) {
    return (
      (t = new sw(t, e, a, h, v, _, R, K)),
      (e = 1),
      u === !0 && (e |= 24),
      (u = He(3, null, null, e)),
      (t.current = u),
      (u.stateNode = t),
      (e = Ds()),
      e.refCount++,
      (t.pooledCache = e),
      e.refCount++,
      (u.memoizedState = { element: l, isDehydrated: a, cache: e }),
      ul(u),
      t
    );
  }
  function $g(t) {
    return t ? ((t = mi), t) : mi;
  }
  function qg(t, e, a, l, o, u) {
    (o = $g(o)),
      l.context === null ? (l.context = o) : (l.pendingContext = o),
      (l = oa(e)),
      (l.payload = { element: a }),
      (u = u === void 0 ? null : u),
      u !== null && (l.callback = u),
      (a = ua(t, l, e)),
      a !== null && (mn(a, t, e), bi(a, t, e));
  }
  function Vg(t, e) {
    if (((t = t.memoizedState), t !== null && t.dehydrated !== null)) {
      var a = t.retryLane;
      t.retryLane = a !== 0 && a < e ? a : e;
    }
  }
  function ah(t, e) {
    Vg(t, e), (t = t.alternate) && Vg(t, e);
  }
  function Yg(t) {
    if (t.tag === 13) {
      var e = hi(t, 67108864);
      e !== null && mn(e, t, 67108864), ah(t, 67108864);
    }
  }
  var vc = !0;
  function ow(t, e, a, l) {
    var o = U.T;
    U.T = null;
    var u = W.p;
    try {
      (W.p = 2), ih(t, e, a, l);
    } finally {
      (W.p = u), (U.T = o);
    }
  }
  function uw(t, e, a, l) {
    var o = U.T;
    U.T = null;
    var u = W.p;
    try {
      (W.p = 8), ih(t, e, a, l);
    } finally {
      (W.p = u), (U.T = o);
    }
  }
  function ih(t, e, a, l) {
    if (vc) {
      var o = lh(l);
      if (o === null) Gd(t, e, l, bc, a), Gg(t, l);
      else if (fw(o, t, e, a, l)) l.stopPropagation();
      else if ((Gg(t, l), e & 4 && -1 < cw.indexOf(t))) {
        for (; o !== null; ) {
          var u = ln(o);
          if (u !== null)
            switch (u.tag) {
              case 3:
                if (((u = u.stateNode), u.current.memoizedState.isDehydrated)) {
                  var h = ta(u.pendingLanes);
                  if (h !== 0) {
                    var v = u;
                    for (v.pendingLanes |= 2, v.entangledLanes |= 2; h; ) {
                      var _ = 1 << (31 - ue(h));
                      (v.entanglements[1] |= _), (h &= ~_);
                    }
                    ma(u), (jt & 6) === 0 && ((ec = Le() + 500), Ws(0));
                  }
                }
                break;
              case 13:
                (v = hi(u, 2)), v !== null && mn(v, u, 2), ac(), ah(u, 2);
            }
          if (((u = lh(l)), u === null && Gd(t, e, l, bc, a), u === o)) break;
          o = u;
        }
        o !== null && l.stopPropagation();
      } else Gd(t, e, l, null, a);
    }
  }
  function lh(t) {
    return (t = ls(t)), rh(t);
  }
  var bc = null;
  function rh(t) {
    if (((bc = null), (t = an(t)), t !== null)) {
      var e = d(t);
      if (e === null) t = null;
      else {
        var a = e.tag;
        if (a === 13) {
          if (((t = p(e)), t !== null)) return t;
          t = null;
        } else if (a === 3) {
          if (e.stateNode.current.memoizedState.isDehydrated)
            return e.tag === 3 ? e.stateNode.containerInfo : null;
          t = null;
        } else e !== t && (t = null);
      }
    }
    return (bc = t), null;
  }
  function Pg(t) {
    switch (t) {
      case "beforetoggle":
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
      case "toggle":
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
        return 2;
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
      case "touchmove":
      case "wheel":
      case "mouseenter":
      case "mouseleave":
      case "pointerenter":
      case "pointerleave":
        return 8;
      case "message":
        switch (Be()) {
          case ii:
            return 2;
          case it:
            return 8;
          case Ve:
          case Ll:
            return 32;
          case Bl:
            return 268435456;
          default:
            return 32;
        }
      default:
        return 32;
    }
  }
  var sh = !1,
    Ri = null,
    Mi = null,
    Li = null,
    so = new Map(),
    oo = new Map(),
    Bi = [],
    cw =
      "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(
        " "
      );
  function Gg(t, e) {
    switch (t) {
      case "focusin":
      case "focusout":
        Ri = null;
        break;
      case "dragenter":
      case "dragleave":
        Mi = null;
        break;
      case "mouseover":
      case "mouseout":
        Li = null;
        break;
      case "pointerover":
      case "pointerout":
        so.delete(e.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        oo.delete(e.pointerId);
    }
  }
  function uo(t, e, a, l, o, u) {
    return t === null || t.nativeEvent !== u
      ? ((t = {
          blockedOn: e,
          domEventName: a,
          eventSystemFlags: l,
          nativeEvent: u,
          targetContainers: [o],
        }),
        e !== null && ((e = ln(e)), e !== null && Yg(e)),
        t)
      : ((t.eventSystemFlags |= l),
        (e = t.targetContainers),
        o !== null && e.indexOf(o) === -1 && e.push(o),
        t);
  }
  function fw(t, e, a, l, o) {
    switch (e) {
      case "focusin":
        return (Ri = uo(Ri, t, e, a, l, o)), !0;
      case "dragenter":
        return (Mi = uo(Mi, t, e, a, l, o)), !0;
      case "mouseover":
        return (Li = uo(Li, t, e, a, l, o)), !0;
      case "pointerover":
        var u = o.pointerId;
        return so.set(u, uo(so.get(u) || null, t, e, a, l, o)), !0;
      case "gotpointercapture":
        return (
          (u = o.pointerId), oo.set(u, uo(oo.get(u) || null, t, e, a, l, o)), !0
        );
    }
    return !1;
  }
  function Kg(t) {
    var e = an(t.target);
    if (e !== null) {
      var a = d(e);
      if (a !== null) {
        if (((e = a.tag), e === 13)) {
          if (((e = p(a)), e !== null)) {
            (t.blockedOn = e),
              vf(t.priority, function () {
                if (a.tag === 13) {
                  var l = hn();
                  l = Ir(l);
                  var o = hi(a, l);
                  o !== null && mn(o, a, l), ah(a, l);
                }
              });
            return;
          }
        } else if (e === 3 && a.stateNode.current.memoizedState.isDehydrated) {
          t.blockedOn = a.tag === 3 ? a.stateNode.containerInfo : null;
          return;
        }
      }
    }
    t.blockedOn = null;
  }
  function yc(t) {
    if (t.blockedOn !== null) return !1;
    for (var e = t.targetContainers; 0 < e.length; ) {
      var a = lh(t.nativeEvent);
      if (a === null) {
        a = t.nativeEvent;
        var l = new a.constructor(a.type, a);
        (is = l), a.target.dispatchEvent(l), (is = null);
      } else return (e = ln(a)), e !== null && Yg(e), (t.blockedOn = a), !1;
      e.shift();
    }
    return !0;
  }
  function Xg(t, e, a) {
    yc(t) && a.delete(e);
  }
  function dw() {
    (sh = !1),
      Ri !== null && yc(Ri) && (Ri = null),
      Mi !== null && yc(Mi) && (Mi = null),
      Li !== null && yc(Li) && (Li = null),
      so.forEach(Xg),
      oo.forEach(Xg);
  }
  function wc(t, e) {
    t.blockedOn === e &&
      ((t.blockedOn = null),
      sh ||
        ((sh = !0),
        n.unstable_scheduleCallback(n.unstable_NormalPriority, dw)));
  }
  var Ec = null;
  function Qg(t) {
    Ec !== t &&
      ((Ec = t),
      n.unstable_scheduleCallback(n.unstable_NormalPriority, function () {
        Ec === t && (Ec = null);
        for (var e = 0; e < t.length; e += 3) {
          var a = t[e],
            l = t[e + 1],
            o = t[e + 2];
          if (typeof l != "function") {
            if (rh(l || a) === null) continue;
            break;
          }
          var u = ln(a);
          u !== null &&
            (t.splice(e, 3),
            (e -= 3),
            rd(u, { pending: !0, data: o, method: a.method, action: l }, l, o));
        }
      }));
  }
  function co(t) {
    function e(_) {
      return wc(_, t);
    }
    Ri !== null && wc(Ri, t),
      Mi !== null && wc(Mi, t),
      Li !== null && wc(Li, t),
      so.forEach(e),
      oo.forEach(e);
    for (var a = 0; a < Bi.length; a++) {
      var l = Bi[a];
      l.blockedOn === t && (l.blockedOn = null);
    }
    for (; 0 < Bi.length && ((a = Bi[0]), a.blockedOn === null); )
      Kg(a), a.blockedOn === null && Bi.shift();
    if (((a = (t.ownerDocument || t).$$reactFormReplay), a != null))
      for (l = 0; l < a.length; l += 3) {
        var o = a[l],
          u = a[l + 1],
          h = o[Oe] || null;
        if (typeof u == "function") h || Qg(a);
        else if (h) {
          var v = null;
          if (u && u.hasAttribute("formAction")) {
            if (((o = u), (h = u[Oe] || null))) v = h.formAction;
            else if (rh(o) !== null) continue;
          } else v = h.action;
          typeof v == "function" ? (a[l + 1] = v) : (a.splice(l, 3), (l -= 3)),
            Qg(a);
        }
      }
  }
  function oh(t) {
    this._internalRoot = t;
  }
  (_c.prototype.render = oh.prototype.render =
    function (t) {
      var e = this._internalRoot;
      if (e === null) throw Error(s(409));
      var a = e.current,
        l = hn();
      qg(a, l, t, e, null, null);
    }),
    (_c.prototype.unmount = oh.prototype.unmount =
      function () {
        var t = this._internalRoot;
        if (t !== null) {
          this._internalRoot = null;
          var e = t.containerInfo;
          qg(t.current, 2, null, t, null, null), ac(), (e[qi] = null);
        }
      });
  function _c(t) {
    this._internalRoot = t;
  }
  _c.prototype.unstable_scheduleHydration = function (t) {
    if (t) {
      var e = ko();
      t = { blockedOn: null, target: t, priority: e };
      for (var a = 0; a < Bi.length && e !== 0 && e < Bi[a].priority; a++);
      Bi.splice(a, 0, t), a === 0 && Kg(t);
    }
  };
  var Zg = i.version;
  if (Zg !== "19.1.0") throw Error(s(527, Zg, "19.1.0"));
  W.findDOMNode = function (t) {
    var e = t._reactInternals;
    if (e === void 0)
      throw typeof t.render == "function"
        ? Error(s(188))
        : ((t = Object.keys(t).join(",")), Error(s(268, t)));
    return (
      (t = b(e)),
      (t = t !== null ? g(t) : null),
      (t = t === null ? null : t.stateNode),
      t
    );
  };
  var hw = {
    bundleType: 0,
    version: "19.1.0",
    rendererPackageName: "react-dom",
    currentDispatcherRef: U,
    reconcilerVersion: "19.1.0",
  };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var Sc = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Sc.isDisabled && Sc.supportsFiber)
      try {
        (Wn = Sc.inject(hw)), (fe = Sc);
      } catch {}
  }
  return (
    (ho.createRoot = function (t, e) {
      if (!c(t)) throw Error(s(299));
      var a = !1,
        l = "",
        o = fp,
        u = dp,
        h = hp,
        v = null;
      return (
        e != null &&
          (e.unstable_strictMode === !0 && (a = !0),
          e.identifierPrefix !== void 0 && (l = e.identifierPrefix),
          e.onUncaughtError !== void 0 && (o = e.onUncaughtError),
          e.onCaughtError !== void 0 && (u = e.onCaughtError),
          e.onRecoverableError !== void 0 && (h = e.onRecoverableError),
          e.unstable_transitionCallbacks !== void 0 &&
            (v = e.unstable_transitionCallbacks)),
        (e = Ug(t, 1, !1, null, null, a, l, o, u, h, v, null)),
        (t[qi] = e.current),
        Pd(t),
        new oh(e)
      );
    }),
    (ho.hydrateRoot = function (t, e, a) {
      if (!c(t)) throw Error(s(299));
      var l = !1,
        o = "",
        u = fp,
        h = dp,
        v = hp,
        _ = null,
        R = null;
      return (
        a != null &&
          (a.unstable_strictMode === !0 && (l = !0),
          a.identifierPrefix !== void 0 && (o = a.identifierPrefix),
          a.onUncaughtError !== void 0 && (u = a.onUncaughtError),
          a.onCaughtError !== void 0 && (h = a.onCaughtError),
          a.onRecoverableError !== void 0 && (v = a.onRecoverableError),
          a.unstable_transitionCallbacks !== void 0 &&
            (_ = a.unstable_transitionCallbacks),
          a.formState !== void 0 && (R = a.formState)),
        (e = Ug(t, 1, !0, e, a ?? null, l, o, u, h, v, _, R)),
        (e.context = $g(null)),
        (a = e.current),
        (l = hn()),
        (l = Ir(l)),
        (o = oa(l)),
        (o.callback = null),
        ua(a, o, l),
        (a = l),
        (e.current.lanes = a),
        $i(e, a),
        ma(e),
        (t[qi] = e.current),
        Pd(t),
        new _c(e)
      );
    }),
    (ho.version = "19.1.0"),
    ho
  );
}
var l0;
function Tw() {
  if (l0) return fh.exports;
  l0 = 1;
  function n() {
    if (
      !(
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
      )
    )
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n);
      } catch (i) {
        console.error(i);
      }
  }
  return n(), (fh.exports = Aw()), fh.exports;
}
var xw = Tw(),
  mo = {},
  r0;
function Ow() {
  if (r0) return mo;
  (r0 = 1),
    Object.defineProperty(mo, "__esModule", { value: !0 }),
    (mo.parse = p),
    (mo.serialize = g);
  const n = /^[\u0021-\u003A\u003C\u003E-\u007E]+$/,
    i = /^[\u0021-\u003A\u003C-\u007E]*$/,
    r =
      /^([.]?[a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)([.][a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)*$/i,
    s = /^[\u0020-\u003A\u003D-\u007E]*$/,
    c = Object.prototype.toString,
    d = (() => {
      const N = function () {};
      return (N.prototype = Object.create(null)), N;
    })();
  function p(N, q) {
    const x = new d(),
      z = N.length;
    if (z < 2) return x;
    const M = q?.decode || w;
    let L = 0;
    do {
      const I = N.indexOf("=", L);
      if (I === -1) break;
      const J = N.indexOf(";", L),
        et = J === -1 ? z : J;
      if (I > et) {
        L = N.lastIndexOf(";", I - 1) + 1;
        continue;
      }
      const Z = y(N, L, I),
        rt = b(N, I, Z),
        ut = N.slice(Z, rt);
      if (x[ut] === void 0) {
        let bt = y(N, I + 1, et),
          ot = b(N, et, bt);
        const gt = M(N.slice(bt, ot));
        x[ut] = gt;
      }
      L = et + 1;
    } while (L < z);
    return x;
  }
  function y(N, q, x) {
    do {
      const z = N.charCodeAt(q);
      if (z !== 32 && z !== 9) return q;
    } while (++q < x);
    return x;
  }
  function b(N, q, x) {
    for (; q > x; ) {
      const z = N.charCodeAt(--q);
      if (z !== 32 && z !== 9) return q + 1;
    }
    return x;
  }
  function g(N, q, x) {
    const z = x?.encode || encodeURIComponent;
    if (!n.test(N)) throw new TypeError(`argument name is invalid: ${N}`);
    const M = z(q);
    if (!i.test(M)) throw new TypeError(`argument val is invalid: ${q}`);
    let L = N + "=" + M;
    if (!x) return L;
    if (x.maxAge !== void 0) {
      if (!Number.isInteger(x.maxAge))
        throw new TypeError(`option maxAge is invalid: ${x.maxAge}`);
      L += "; Max-Age=" + x.maxAge;
    }
    if (x.domain) {
      if (!r.test(x.domain))
        throw new TypeError(`option domain is invalid: ${x.domain}`);
      L += "; Domain=" + x.domain;
    }
    if (x.path) {
      if (!s.test(x.path))
        throw new TypeError(`option path is invalid: ${x.path}`);
      L += "; Path=" + x.path;
    }
    if (x.expires) {
      if (!O(x.expires) || !Number.isFinite(x.expires.valueOf()))
        throw new TypeError(`option expires is invalid: ${x.expires}`);
      L += "; Expires=" + x.expires.toUTCString();
    }
    if (
      (x.httpOnly && (L += "; HttpOnly"),
      x.secure && (L += "; Secure"),
      x.partitioned && (L += "; Partitioned"),
      x.priority)
    )
      switch (
        typeof x.priority == "string" ? x.priority.toLowerCase() : void 0
      ) {
        case "low":
          L += "; Priority=Low";
          break;
        case "medium":
          L += "; Priority=Medium";
          break;
        case "high":
          L += "; Priority=High";
          break;
        default:
          throw new TypeError(`option priority is invalid: ${x.priority}`);
      }
    if (x.sameSite)
      switch (
        typeof x.sameSite == "string" ? x.sameSite.toLowerCase() : x.sameSite
      ) {
        case !0:
        case "strict":
          L += "; SameSite=Strict";
          break;
        case "lax":
          L += "; SameSite=Lax";
          break;
        case "none":
          L += "; SameSite=None";
          break;
        default:
          throw new TypeError(`option sameSite is invalid: ${x.sameSite}`);
      }
    return L;
  }
  function w(N) {
    if (N.indexOf("%") === -1) return N;
    try {
      return decodeURIComponent(N);
    } catch {
      return N;
    }
  }
  function O(N) {
    return c.call(N) === "[object Date]";
  }
  return mo;
}
Ow();
var s0 = "popstate";
function Cw(n = {}) {
  function i(s, c) {
    let { pathname: d, search: p, hash: y } = s.location;
    return Sh(
      "",
      { pathname: d, search: p, hash: y },
      (c.state && c.state.usr) || null,
      (c.state && c.state.key) || "default"
    );
  }
  function r(s, c) {
    return typeof c == "string" ? c : wo(c);
  }
  return Dw(i, r, null, n);
}
function Jt(n, i) {
  if (n === !1 || n === null || typeof n > "u") throw new Error(i);
}
function ba(n, i) {
  if (!n) {
    typeof console < "u" && console.warn(i);
    try {
      throw new Error(i);
    } catch {}
  }
}
function Nw() {
  return Math.random().toString(36).substring(2, 10);
}
function o0(n, i) {
  return { usr: n.state, key: n.key, idx: i };
}
function Sh(n, i, r = null, s) {
  return {
    pathname: typeof n == "string" ? n : n.pathname,
    search: "",
    hash: "",
    ...(typeof i == "string" ? Ur(i) : i),
    state: r,
    key: (i && i.key) || s || Nw(),
  };
}
function wo({ pathname: n = "/", search: i = "", hash: r = "" }) {
  return (
    i && i !== "?" && (n += i.charAt(0) === "?" ? i : "?" + i),
    r && r !== "#" && (n += r.charAt(0) === "#" ? r : "#" + r),
    n
  );
}
function Ur(n) {
  let i = {};
  if (n) {
    let r = n.indexOf("#");
    r >= 0 && ((i.hash = n.substring(r)), (n = n.substring(0, r)));
    let s = n.indexOf("?");
    s >= 0 && ((i.search = n.substring(s)), (n = n.substring(0, s))),
      n && (i.pathname = n);
  }
  return i;
}
function Dw(n, i, r, s = {}) {
  let { window: c = document.defaultView, v5Compat: d = !1 } = s,
    p = c.history,
    y = "POP",
    b = null,
    g = w();
  g == null && ((g = 0), p.replaceState({ ...p.state, idx: g }, ""));
  function w() {
    return (p.state || { idx: null }).idx;
  }
  function O() {
    y = "POP";
    let M = w(),
      L = M == null ? null : M - g;
    (g = M), b && b({ action: y, location: z.location, delta: L });
  }
  function N(M, L) {
    y = "PUSH";
    let I = Sh(z.location, M, L);
    g = w() + 1;
    let J = o0(I, g),
      et = z.createHref(I);
    try {
      p.pushState(J, "", et);
    } catch (Z) {
      if (Z instanceof DOMException && Z.name === "DataCloneError") throw Z;
      c.location.assign(et);
    }
    d && b && b({ action: y, location: z.location, delta: 1 });
  }
  function q(M, L) {
    y = "REPLACE";
    let I = Sh(z.location, M, L);
    g = w();
    let J = o0(I, g),
      et = z.createHref(I);
    p.replaceState(J, "", et),
      d && b && b({ action: y, location: z.location, delta: 0 });
  }
  function x(M) {
    return Rw(M);
  }
  let z = {
    get action() {
      return y;
    },
    get location() {
      return n(c, p);
    },
    listen(M) {
      if (b) throw new Error("A history only accepts one active listener");
      return (
        c.addEventListener(s0, O),
        (b = M),
        () => {
          c.removeEventListener(s0, O), (b = null);
        }
      );
    },
    createHref(M) {
      return i(c, M);
    },
    createURL: x,
    encodeLocation(M) {
      let L = x(M);
      return { pathname: L.pathname, search: L.search, hash: L.hash };
    },
    push: N,
    replace: q,
    go(M) {
      return p.go(M);
    },
  };
  return z;
}
function Rw(n, i = !1) {
  let r = "http://localhost";
  typeof window < "u" &&
    (r =
      window.location.origin !== "null"
        ? window.location.origin
        : window.location.href),
    Jt(r, "No window.location.(origin|href) available to create URL");
  let s = typeof n == "string" ? n : wo(n);
  return (
    (s = s.replace(/ $/, "%20")),
    !i && s.startsWith("//") && (s = r + s),
    new URL(s, r)
  );
}
function X0(n, i, r = "/") {
  return Mw(n, i, r, !1);
}
function Mw(n, i, r, s) {
  let c = typeof i == "string" ? Ur(i) : i,
    d = ei(c.pathname || "/", r);
  if (d == null) return null;
  let p = Q0(n);
  Lw(p);
  let y = null;
  for (let b = 0; y == null && b < p.length; ++b) {
    let g = Pw(d);
    y = Vw(p[b], g, s);
  }
  return y;
}
function Q0(n, i = [], r = [], s = "") {
  let c = (d, p, y) => {
    let b = {
      relativePath: y === void 0 ? d.path || "" : y,
      caseSensitive: d.caseSensitive === !0,
      childrenIndex: p,
      route: d,
    };
    b.relativePath.startsWith("/") &&
      (Jt(
        b.relativePath.startsWith(s),
        `Absolute route path "${b.relativePath}" nested under path "${s}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`
      ),
      (b.relativePath = b.relativePath.slice(s.length)));
    let g = Wa([s, b.relativePath]),
      w = r.concat(b);
    d.children &&
      d.children.length > 0 &&
      (Jt(
        d.index !== !0,
        `Index routes must not have child routes. Please remove all child routes from route path "${g}".`
      ),
      Q0(d.children, i, w, g)),
      !(d.path == null && !d.index) &&
        i.push({ path: g, score: $w(g, d.index), routesMeta: w });
  };
  return (
    n.forEach((d, p) => {
      if (d.path === "" || !d.path?.includes("?")) c(d, p);
      else for (let y of Z0(d.path)) c(d, p, y);
    }),
    i
  );
}
function Z0(n) {
  let i = n.split("/");
  if (i.length === 0) return [];
  let [r, ...s] = i,
    c = r.endsWith("?"),
    d = r.replace(/\?$/, "");
  if (s.length === 0) return c ? [d, ""] : [d];
  let p = Z0(s.join("/")),
    y = [];
  return (
    y.push(...p.map((b) => (b === "" ? d : [d, b].join("/")))),
    c && y.push(...p),
    y.map((b) => (n.startsWith("/") && b === "" ? "/" : b))
  );
}
function Lw(n) {
  n.sort((i, r) =>
    i.score !== r.score
      ? r.score - i.score
      : qw(
          i.routesMeta.map((s) => s.childrenIndex),
          r.routesMeta.map((s) => s.childrenIndex)
        )
  );
}
var Bw = /^:[\w-]+$/,
  zw = 3,
  Hw = 2,
  kw = 1,
  jw = 10,
  Uw = -2,
  u0 = (n) => n === "*";
function $w(n, i) {
  let r = n.split("/"),
    s = r.length;
  return (
    r.some(u0) && (s += Uw),
    i && (s += Hw),
    r
      .filter((c) => !u0(c))
      .reduce((c, d) => c + (Bw.test(d) ? zw : d === "" ? kw : jw), s)
  );
}
function qw(n, i) {
  return n.length === i.length && n.slice(0, -1).every((s, c) => s === i[c])
    ? n[n.length - 1] - i[i.length - 1]
    : 0;
}
function Vw(n, i, r = !1) {
  let { routesMeta: s } = n,
    c = {},
    d = "/",
    p = [];
  for (let y = 0; y < s.length; ++y) {
    let b = s[y],
      g = y === s.length - 1,
      w = d === "/" ? i : i.slice(d.length) || "/",
      O = Bc(
        { path: b.relativePath, caseSensitive: b.caseSensitive, end: g },
        w
      ),
      N = b.route;
    if (
      (!O &&
        g &&
        r &&
        !s[s.length - 1].route.index &&
        (O = Bc(
          { path: b.relativePath, caseSensitive: b.caseSensitive, end: !1 },
          w
        )),
      !O)
    )
      return null;
    Object.assign(c, O.params),
      p.push({
        params: c,
        pathname: Wa([d, O.pathname]),
        pathnameBase: Qw(Wa([d, O.pathnameBase])),
        route: N,
      }),
      O.pathnameBase !== "/" && (d = Wa([d, O.pathnameBase]));
  }
  return p;
}
function Bc(n, i) {
  typeof n == "string" && (n = { path: n, caseSensitive: !1, end: !0 });
  let [r, s] = Yw(n.path, n.caseSensitive, n.end),
    c = i.match(r);
  if (!c) return null;
  let d = c[0],
    p = d.replace(/(.)\/+$/, "$1"),
    y = c.slice(1);
  return {
    params: s.reduce((g, { paramName: w, isOptional: O }, N) => {
      if (w === "*") {
        let x = y[N] || "";
        p = d.slice(0, d.length - x.length).replace(/(.)\/+$/, "$1");
      }
      const q = y[N];
      return (
        O && !q ? (g[w] = void 0) : (g[w] = (q || "").replace(/%2F/g, "/")), g
      );
    }, {}),
    pathname: d,
    pathnameBase: p,
    pattern: n,
  };
}
function Yw(n, i = !1, r = !0) {
  ba(
    n === "*" || !n.endsWith("*") || n.endsWith("/*"),
    `Route path "${n}" will be treated as if it were "${n.replace(
      /\*$/,
      "/*"
    )}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${n.replace(
      /\*$/,
      "/*"
    )}".`
  );
  let s = [],
    c =
      "^" +
      n
        .replace(/\/*\*?$/, "")
        .replace(/^\/*/, "/")
        .replace(/[\\.*+^${}|()[\]]/g, "\\$&")
        .replace(
          /\/:([\w-]+)(\?)?/g,
          (p, y, b) => (
            s.push({ paramName: y, isOptional: b != null }),
            b ? "/?([^\\/]+)?" : "/([^\\/]+)"
          )
        );
  return (
    n.endsWith("*")
      ? (s.push({ paramName: "*" }),
        (c += n === "*" || n === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$"))
      : r
      ? (c += "\\/*$")
      : n !== "" && n !== "/" && (c += "(?:(?=\\/|$))"),
    [new RegExp(c, i ? void 0 : "i"), s]
  );
}
function Pw(n) {
  try {
    return n
      .split("/")
      .map((i) => decodeURIComponent(i).replace(/\//g, "%2F"))
      .join("/");
  } catch (i) {
    return (
      ba(
        !1,
        `The URL path "${n}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${i}).`
      ),
      n
    );
  }
}
function ei(n, i) {
  if (i === "/") return n;
  if (!n.toLowerCase().startsWith(i.toLowerCase())) return null;
  let r = i.endsWith("/") ? i.length - 1 : i.length,
    s = n.charAt(r);
  return s && s !== "/" ? null : n.slice(r) || "/";
}
function Gw(n, i = "/") {
  let {
    pathname: r,
    search: s = "",
    hash: c = "",
  } = typeof n == "string" ? Ur(n) : n;
  return {
    pathname: r ? (r.startsWith("/") ? r : Kw(r, i)) : i,
    search: Zw(s),
    hash: Iw(c),
  };
}
function Kw(n, i) {
  let r = i.replace(/\/+$/, "").split("/");
  return (
    n.split("/").forEach((c) => {
      c === ".." ? r.length > 1 && r.pop() : c !== "." && r.push(c);
    }),
    r.length > 1 ? r.join("/") : "/"
  );
}
function ph(n, i, r, s) {
  return `Cannot include a '${n}' character in a manually specified \`to.${i}\` field [${JSON.stringify(
    s
  )}].  Please separate it out to the \`to.${r}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`;
}
function Xw(n) {
  return n.filter(
    (i, r) => r === 0 || (i.route.path && i.route.path.length > 0)
  );
}
function I0(n) {
  let i = Xw(n);
  return i.map((r, s) => (s === i.length - 1 ? r.pathname : r.pathnameBase));
}
function F0(n, i, r, s = !1) {
  let c;
  typeof n == "string"
    ? (c = Ur(n))
    : ((c = { ...n }),
      Jt(
        !c.pathname || !c.pathname.includes("?"),
        ph("?", "pathname", "search", c)
      ),
      Jt(
        !c.pathname || !c.pathname.includes("#"),
        ph("#", "pathname", "hash", c)
      ),
      Jt(!c.search || !c.search.includes("#"), ph("#", "search", "hash", c)));
  let d = n === "" || c.pathname === "",
    p = d ? "/" : c.pathname,
    y;
  if (p == null) y = r;
  else {
    let O = i.length - 1;
    if (!s && p.startsWith("..")) {
      let N = p.split("/");
      for (; N[0] === ".."; ) N.shift(), (O -= 1);
      c.pathname = N.join("/");
    }
    y = O >= 0 ? i[O] : "/";
  }
  let b = Gw(c, y),
    g = p && p !== "/" && p.endsWith("/"),
    w = (d || p === ".") && r.endsWith("/");
  return !b.pathname.endsWith("/") && (g || w) && (b.pathname += "/"), b;
}
var Wa = (n) => n.join("/").replace(/\/\/+/g, "/"),
  Qw = (n) => n.replace(/\/+$/, "").replace(/^\/*/, "/"),
  Zw = (n) => (!n || n === "?" ? "" : n.startsWith("?") ? n : "?" + n),
  Iw = (n) => (!n || n === "#" ? "" : n.startsWith("#") ? n : "#" + n);
function Fw(n) {
  return (
    n != null &&
    typeof n.status == "number" &&
    typeof n.statusText == "string" &&
    typeof n.internal == "boolean" &&
    "data" in n
  );
}
var J0 = ["POST", "PUT", "PATCH", "DELETE"];
new Set(J0);
var Jw = ["GET", ...J0];
new Set(Jw);
var $r = V.createContext(null);
$r.displayName = "DataRouter";
var Zc = V.createContext(null);
Zc.displayName = "DataRouterState";
var W0 = V.createContext({ isTransitioning: !1 });
W0.displayName = "ViewTransition";
var Ww = V.createContext(new Map());
Ww.displayName = "Fetchers";
var t2 = V.createContext(null);
t2.displayName = "Await";
var Ea = V.createContext(null);
Ea.displayName = "Navigation";
var _o = V.createContext(null);
_o.displayName = "Location";
var _a = V.createContext({ outlet: null, matches: [], isDataRoute: !1 });
_a.displayName = "Route";
var jh = V.createContext(null);
jh.displayName = "RouteError";
function e2(n, { relative: i } = {}) {
  Jt(
    So(),
    "useHref() may be used only in the context of a <Router> component."
  );
  let { basename: r, navigator: s } = V.useContext(Ea),
    { hash: c, pathname: d, search: p } = Ao(n, { relative: i }),
    y = d;
  return (
    r !== "/" && (y = d === "/" ? r : Wa([r, d])),
    s.createHref({ pathname: y, search: p, hash: c })
  );
}
function So() {
  return V.useContext(_o) != null;
}
function Dl() {
  return (
    Jt(
      So(),
      "useLocation() may be used only in the context of a <Router> component."
    ),
    V.useContext(_o).location
  );
}
var tv =
  "You should call navigate() in a React.useEffect(), not when your component is first rendered.";
function ev(n) {
  V.useContext(Ea).static || V.useLayoutEffect(n);
}
function qr() {
  let { isDataRoute: n } = V.useContext(_a);
  return n ? m2() : n2();
}
function n2() {
  Jt(
    So(),
    "useNavigate() may be used only in the context of a <Router> component."
  );
  let n = V.useContext($r),
    { basename: i, navigator: r } = V.useContext(Ea),
    { matches: s } = V.useContext(_a),
    { pathname: c } = Dl(),
    d = JSON.stringify(I0(s)),
    p = V.useRef(!1);
  return (
    ev(() => {
      p.current = !0;
    }),
    V.useCallback(
      (b, g = {}) => {
        if ((ba(p.current, tv), !p.current)) return;
        if (typeof b == "number") {
          r.go(b);
          return;
        }
        let w = F0(b, JSON.parse(d), c, g.relative === "path");
        n == null &&
          i !== "/" &&
          (w.pathname = w.pathname === "/" ? i : Wa([i, w.pathname])),
          (g.replace ? r.replace : r.push)(w, g.state, g);
      },
      [i, r, d, c, n]
    )
  );
}
V.createContext(null);
function nv() {
  let { matches: n } = V.useContext(_a),
    i = n[n.length - 1];
  return i ? i.params : {};
}
function Ao(n, { relative: i } = {}) {
  let { matches: r } = V.useContext(_a),
    { pathname: s } = Dl(),
    c = JSON.stringify(I0(r));
  return V.useMemo(() => F0(n, JSON.parse(c), s, i === "path"), [n, c, s, i]);
}
function a2(n, i) {
  return av(n, i);
}
function av(n, i, r, s) {
  Jt(
    So(),
    "useRoutes() may be used only in the context of a <Router> component."
  );
  let { navigator: c } = V.useContext(Ea),
    { matches: d } = V.useContext(_a),
    p = d[d.length - 1],
    y = p ? p.params : {},
    b = p ? p.pathname : "/",
    g = p ? p.pathnameBase : "/",
    w = p && p.route;
  {
    let L = (w && w.path) || "";
    iv(
      b,
      !w || L.endsWith("*") || L.endsWith("*?"),
      `You rendered descendant <Routes> (or called \`useRoutes()\`) at "${b}" (under <Route path="${L}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${L}"> to <Route path="${
        L === "/" ? "*" : `${L}/*`
      }">.`
    );
  }
  let O = Dl(),
    N;
  if (i) {
    let L = typeof i == "string" ? Ur(i) : i;
    Jt(
      g === "/" || L.pathname?.startsWith(g),
      `When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${g}" but pathname "${L.pathname}" was given in the \`location\` prop.`
    ),
      (N = L);
  } else N = O;
  let q = N.pathname || "/",
    x = q;
  if (g !== "/") {
    let L = g.replace(/^\//, "").split("/");
    x = "/" + q.replace(/^\//, "").split("/").slice(L.length).join("/");
  }
  let z = X0(n, { pathname: x });
  ba(
    w || z != null,
    `No routes matched location "${N.pathname}${N.search}${N.hash}" `
  ),
    ba(
      z == null ||
        z[z.length - 1].route.element !== void 0 ||
        z[z.length - 1].route.Component !== void 0 ||
        z[z.length - 1].route.lazy !== void 0,
      `Matched leaf route at location "${N.pathname}${N.search}${N.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`
    );
  let M = o2(
    z &&
      z.map((L) =>
        Object.assign({}, L, {
          params: Object.assign({}, y, L.params),
          pathname: Wa([
            g,
            c.encodeLocation
              ? c.encodeLocation(L.pathname).pathname
              : L.pathname,
          ]),
          pathnameBase:
            L.pathnameBase === "/"
              ? g
              : Wa([
                  g,
                  c.encodeLocation
                    ? c.encodeLocation(L.pathnameBase).pathname
                    : L.pathnameBase,
                ]),
        })
      ),
    d,
    r,
    s
  );
  return i && M
    ? V.createElement(
        _o.Provider,
        {
          value: {
            location: {
              pathname: "/",
              search: "",
              hash: "",
              state: null,
              key: "default",
              ...N,
            },
            navigationType: "POP",
          },
        },
        M
      )
    : M;
}
function i2() {
  let n = h2(),
    i = Fw(n)
      ? `${n.status} ${n.statusText}`
      : n instanceof Error
      ? n.message
      : JSON.stringify(n),
    r = n instanceof Error ? n.stack : null,
    s = "rgba(200,200,200, 0.5)",
    c = { padding: "0.5rem", backgroundColor: s },
    d = { padding: "2px 4px", backgroundColor: s },
    p = null;
  return (
    console.error("Error handled by React Router default ErrorBoundary:", n),
    (p = V.createElement(
      V.Fragment,
      null,
      V.createElement("p", null, "💿 Hey developer 👋"),
      V.createElement(
        "p",
        null,
        "You can provide a way better UX than this when your app throws errors by providing your own ",
        V.createElement("code", { style: d }, "ErrorBoundary"),
        " or",
        " ",
        V.createElement("code", { style: d }, "errorElement"),
        " prop on your route."
      )
    )),
    V.createElement(
      V.Fragment,
      null,
      V.createElement("h2", null, "Unexpected Application Error!"),
      V.createElement("h3", { style: { fontStyle: "italic" } }, i),
      r ? V.createElement("pre", { style: c }, r) : null,
      p
    )
  );
}
var l2 = V.createElement(i2, null),
  r2 = class extends V.Component {
    constructor(n) {
      super(n),
        (this.state = {
          location: n.location,
          revalidation: n.revalidation,
          error: n.error,
        });
    }
    static getDerivedStateFromError(n) {
      return { error: n };
    }
    static getDerivedStateFromProps(n, i) {
      return i.location !== n.location ||
        (i.revalidation !== "idle" && n.revalidation === "idle")
        ? { error: n.error, location: n.location, revalidation: n.revalidation }
        : {
            error: n.error !== void 0 ? n.error : i.error,
            location: i.location,
            revalidation: n.revalidation || i.revalidation,
          };
    }
    componentDidCatch(n, i) {
      console.error(
        "React Router caught the following error during render",
        n,
        i
      );
    }
    render() {
      return this.state.error !== void 0
        ? V.createElement(
            _a.Provider,
            { value: this.props.routeContext },
            V.createElement(jh.Provider, {
              value: this.state.error,
              children: this.props.component,
            })
          )
        : this.props.children;
    }
  };
function s2({ routeContext: n, match: i, children: r }) {
  let s = V.useContext($r);
  return (
    s &&
      s.static &&
      s.staticContext &&
      (i.route.errorElement || i.route.ErrorBoundary) &&
      (s.staticContext._deepestRenderedBoundaryId = i.route.id),
    V.createElement(_a.Provider, { value: n }, r)
  );
}
function o2(n, i = [], r = null, s = null) {
  if (n == null) {
    if (!r) return null;
    if (r.errors) n = r.matches;
    else if (i.length === 0 && !r.initialized && r.matches.length > 0)
      n = r.matches;
    else return null;
  }
  let c = n,
    d = r?.errors;
  if (d != null) {
    let b = c.findIndex((g) => g.route.id && d?.[g.route.id] !== void 0);
    Jt(
      b >= 0,
      `Could not find a matching route for errors on route IDs: ${Object.keys(
        d
      ).join(",")}`
    ),
      (c = c.slice(0, Math.min(c.length, b + 1)));
  }
  let p = !1,
    y = -1;
  if (r)
    for (let b = 0; b < c.length; b++) {
      let g = c[b];
      if (
        ((g.route.HydrateFallback || g.route.hydrateFallbackElement) && (y = b),
        g.route.id)
      ) {
        let { loaderData: w, errors: O } = r,
          N =
            g.route.loader &&
            !w.hasOwnProperty(g.route.id) &&
            (!O || O[g.route.id] === void 0);
        if (g.route.lazy || N) {
          (p = !0), y >= 0 ? (c = c.slice(0, y + 1)) : (c = [c[0]]);
          break;
        }
      }
    }
  return c.reduceRight((b, g, w) => {
    let O,
      N = !1,
      q = null,
      x = null;
    r &&
      ((O = d && g.route.id ? d[g.route.id] : void 0),
      (q = g.route.errorElement || l2),
      p &&
        (y < 0 && w === 0
          ? (iv(
              "route-fallback",
              !1,
              "No `HydrateFallback` element provided to render during initial hydration"
            ),
            (N = !0),
            (x = null))
          : y === w &&
            ((N = !0), (x = g.route.hydrateFallbackElement || null))));
    let z = i.concat(c.slice(0, w + 1)),
      M = () => {
        let L;
        return (
          O
            ? (L = q)
            : N
            ? (L = x)
            : g.route.Component
            ? (L = V.createElement(g.route.Component, null))
            : g.route.element
            ? (L = g.route.element)
            : (L = b),
          V.createElement(s2, {
            match: g,
            routeContext: { outlet: b, matches: z, isDataRoute: r != null },
            children: L,
          })
        );
      };
    return r && (g.route.ErrorBoundary || g.route.errorElement || w === 0)
      ? V.createElement(r2, {
          location: r.location,
          revalidation: r.revalidation,
          component: q,
          error: O,
          children: M(),
          routeContext: { outlet: null, matches: z, isDataRoute: !0 },
        })
      : M();
  }, null);
}
function Uh(n) {
  return `${n} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`;
}
function u2(n) {
  let i = V.useContext($r);
  return Jt(i, Uh(n)), i;
}
function c2(n) {
  let i = V.useContext(Zc);
  return Jt(i, Uh(n)), i;
}
function f2(n) {
  let i = V.useContext(_a);
  return Jt(i, Uh(n)), i;
}
function $h(n) {
  let i = f2(n),
    r = i.matches[i.matches.length - 1];
  return (
    Jt(
      r.route.id,
      `${n} can only be used on routes that contain a unique "id"`
    ),
    r.route.id
  );
}
function d2() {
  return $h("useRouteId");
}
function h2() {
  let n = V.useContext(jh),
    i = c2("useRouteError"),
    r = $h("useRouteError");
  return n !== void 0 ? n : i.errors?.[r];
}
function m2() {
  let { router: n } = u2("useNavigate"),
    i = $h("useNavigate"),
    r = V.useRef(!1);
  return (
    ev(() => {
      r.current = !0;
    }),
    V.useCallback(
      async (c, d = {}) => {
        ba(r.current, tv),
          r.current &&
            (typeof c == "number"
              ? n.navigate(c)
              : await n.navigate(c, { fromRouteId: i, ...d }));
      },
      [n, i]
    )
  );
}
var c0 = {};
function iv(n, i, r) {
  !i && !c0[n] && ((c0[n] = !0), ba(!1, r));
}
V.memo(p2);
function p2({ routes: n, future: i, state: r }) {
  return av(n, void 0, r, i);
}
function Hi(n) {
  Jt(
    !1,
    "A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>."
  );
}
function g2({
  basename: n = "/",
  children: i = null,
  location: r,
  navigationType: s = "POP",
  navigator: c,
  static: d = !1,
}) {
  Jt(
    !So(),
    "You cannot render a <Router> inside another <Router>. You should never have more than one in your app."
  );
  let p = n.replace(/^\/*/, "/"),
    y = V.useMemo(
      () => ({ basename: p, navigator: c, static: d, future: {} }),
      [p, c, d]
    );
  typeof r == "string" && (r = Ur(r));
  let {
      pathname: b = "/",
      search: g = "",
      hash: w = "",
      state: O = null,
      key: N = "default",
    } = r,
    q = V.useMemo(() => {
      let x = ei(b, p);
      return x == null
        ? null
        : {
            location: { pathname: x, search: g, hash: w, state: O, key: N },
            navigationType: s,
          };
    }, [p, b, g, w, O, N, s]);
  return (
    ba(
      q != null,
      `<Router basename="${p}"> is not able to match the URL "${b}${g}${w}" because it does not start with the basename, so the <Router> won't render anything.`
    ),
    q == null
      ? null
      : V.createElement(
          Ea.Provider,
          { value: y },
          V.createElement(_o.Provider, { children: i, value: q })
        )
  );
}
function lv({ children: n, location: i }) {
  return a2(Ah(n), i);
}
function Ah(n, i = []) {
  let r = [];
  return (
    V.Children.forEach(n, (s, c) => {
      if (!V.isValidElement(s)) return;
      let d = [...i, c];
      if (s.type === V.Fragment) {
        r.push.apply(r, Ah(s.props.children, d));
        return;
      }
      Jt(
        s.type === Hi,
        `[${
          typeof s.type == "string" ? s.type : s.type.name
        }] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`
      ),
        Jt(
          !s.props.index || !s.props.children,
          "An index route cannot have child routes."
        );
      let p = {
        id: s.props.id || d.join("-"),
        caseSensitive: s.props.caseSensitive,
        element: s.props.element,
        Component: s.props.Component,
        index: s.props.index,
        path: s.props.path,
        loader: s.props.loader,
        action: s.props.action,
        hydrateFallbackElement: s.props.hydrateFallbackElement,
        HydrateFallback: s.props.HydrateFallback,
        errorElement: s.props.errorElement,
        ErrorBoundary: s.props.ErrorBoundary,
        hasErrorBoundary:
          s.props.hasErrorBoundary === !0 ||
          s.props.ErrorBoundary != null ||
          s.props.errorElement != null,
        shouldRevalidate: s.props.shouldRevalidate,
        handle: s.props.handle,
        lazy: s.props.lazy,
      };
      s.props.children && (p.children = Ah(s.props.children, d)), r.push(p);
    }),
    r
  );
}
var Oc = "get",
  Cc = "application/x-www-form-urlencoded";
function Ic(n) {
  return n != null && typeof n.tagName == "string";
}
function v2(n) {
  return Ic(n) && n.tagName.toLowerCase() === "button";
}
function b2(n) {
  return Ic(n) && n.tagName.toLowerCase() === "form";
}
function y2(n) {
  return Ic(n) && n.tagName.toLowerCase() === "input";
}
function w2(n) {
  return !!(n.metaKey || n.altKey || n.ctrlKey || n.shiftKey);
}
function E2(n, i) {
  return n.button === 0 && (!i || i === "_self") && !w2(n);
}
var Ac = null;
function _2() {
  if (Ac === null)
    try {
      new FormData(document.createElement("form"), 0), (Ac = !1);
    } catch {
      Ac = !0;
    }
  return Ac;
}
var S2 = new Set([
  "application/x-www-form-urlencoded",
  "multipart/form-data",
  "text/plain",
]);
function gh(n) {
  return n != null && !S2.has(n)
    ? (ba(
        !1,
        `"${n}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${Cc}"`
      ),
      null)
    : n;
}
function A2(n, i) {
  let r, s, c, d, p;
  if (b2(n)) {
    let y = n.getAttribute("action");
    (s = y ? ei(y, i) : null),
      (r = n.getAttribute("method") || Oc),
      (c = gh(n.getAttribute("enctype")) || Cc),
      (d = new FormData(n));
  } else if (v2(n) || (y2(n) && (n.type === "submit" || n.type === "image"))) {
    let y = n.form;
    if (y == null)
      throw new Error(
        'Cannot submit a <button> or <input type="submit"> without a <form>'
      );
    let b = n.getAttribute("formaction") || y.getAttribute("action");
    if (
      ((s = b ? ei(b, i) : null),
      (r = n.getAttribute("formmethod") || y.getAttribute("method") || Oc),
      (c =
        gh(n.getAttribute("formenctype")) ||
        gh(y.getAttribute("enctype")) ||
        Cc),
      (d = new FormData(y, n)),
      !_2())
    ) {
      let { name: g, type: w, value: O } = n;
      if (w === "image") {
        let N = g ? `${g}.` : "";
        d.append(`${N}x`, "0"), d.append(`${N}y`, "0");
      } else g && d.append(g, O);
    }
  } else {
    if (Ic(n))
      throw new Error(
        'Cannot submit element that is not <form>, <button>, or <input type="submit|image">'
      );
    (r = Oc), (s = null), (c = Cc), (p = n);
  }
  return (
    d && c === "text/plain" && ((p = d), (d = void 0)),
    { action: s, method: r.toLowerCase(), encType: c, formData: d, body: p }
  );
}
function qh(n, i) {
  if (n === !1 || n === null || typeof n > "u") throw new Error(i);
}
async function T2(n, i) {
  if (n.id in i) return i[n.id];
  try {
    let r = await import(n.module);
    return (i[n.id] = r), r;
  } catch (r) {
    return (
      console.error(
        `Error loading route module \`${n.module}\`, reloading page...`
      ),
      console.error(r),
      window.__reactRouterContext && window.__reactRouterContext.isSpaMode,
      window.location.reload(),
      new Promise(() => {})
    );
  }
}
function x2(n) {
  return n == null
    ? !1
    : n.href == null
    ? n.rel === "preload" &&
      typeof n.imageSrcSet == "string" &&
      typeof n.imageSizes == "string"
    : typeof n.rel == "string" && typeof n.href == "string";
}
async function O2(n, i, r) {
  let s = await Promise.all(
    n.map(async (c) => {
      let d = i.routes[c.route.id];
      if (d) {
        let p = await T2(d, r);
        return p.links ? p.links() : [];
      }
      return [];
    })
  );
  return R2(
    s
      .flat(1)
      .filter(x2)
      .filter((c) => c.rel === "stylesheet" || c.rel === "preload")
      .map((c) =>
        c.rel === "stylesheet"
          ? { ...c, rel: "prefetch", as: "style" }
          : { ...c, rel: "prefetch" }
      )
  );
}
function f0(n, i, r, s, c, d) {
  let p = (b, g) => (r[g] ? b.route.id !== r[g].route.id : !0),
    y = (b, g) =>
      r[g].pathname !== b.pathname ||
      (r[g].route.path?.endsWith("*") && r[g].params["*"] !== b.params["*"]);
  return d === "assets"
    ? i.filter((b, g) => p(b, g) || y(b, g))
    : d === "data"
    ? i.filter((b, g) => {
        let w = s.routes[b.route.id];
        if (!w || !w.hasLoader) return !1;
        if (p(b, g) || y(b, g)) return !0;
        if (b.route.shouldRevalidate) {
          let O = b.route.shouldRevalidate({
            currentUrl: new URL(c.pathname + c.search + c.hash, window.origin),
            currentParams: r[0]?.params || {},
            nextUrl: new URL(n, window.origin),
            nextParams: b.params,
            defaultShouldRevalidate: !0,
          });
          if (typeof O == "boolean") return O;
        }
        return !0;
      })
    : [];
}
function C2(n, i, { includeHydrateFallback: r } = {}) {
  return N2(
    n
      .map((s) => {
        let c = i.routes[s.route.id];
        if (!c) return [];
        let d = [c.module];
        return (
          c.clientActionModule && (d = d.concat(c.clientActionModule)),
          c.clientLoaderModule && (d = d.concat(c.clientLoaderModule)),
          r &&
            c.hydrateFallbackModule &&
            (d = d.concat(c.hydrateFallbackModule)),
          c.imports && (d = d.concat(c.imports)),
          d
        );
      })
      .flat(1)
  );
}
function N2(n) {
  return [...new Set(n)];
}
function D2(n) {
  let i = {},
    r = Object.keys(n).sort();
  for (let s of r) i[s] = n[s];
  return i;
}
function R2(n, i) {
  let r = new Set();
  return (
    new Set(i),
    n.reduce((s, c) => {
      let d = JSON.stringify(D2(c));
      return r.has(d) || (r.add(d), s.push({ key: d, link: c })), s;
    }, [])
  );
}
Object.getOwnPropertyNames(Object.prototype).sort().join("\0");
var M2 = new Set([100, 101, 204, 205]);
function L2(n, i) {
  let r =
    typeof n == "string"
      ? new URL(
          n,
          typeof window > "u" ? "server://singlefetch/" : window.location.origin
        )
      : n;
  return (
    r.pathname === "/"
      ? (r.pathname = "_root.data")
      : i && ei(r.pathname, i) === "/"
      ? (r.pathname = `${i.replace(/\/$/, "")}/_root.data`)
      : (r.pathname = `${r.pathname.replace(/\/$/, "")}.data`),
    r
  );
}
function rv() {
  let n = V.useContext($r);
  return (
    qh(
      n,
      "You must render this element inside a <DataRouterContext.Provider> element"
    ),
    n
  );
}
function B2() {
  let n = V.useContext(Zc);
  return (
    qh(
      n,
      "You must render this element inside a <DataRouterStateContext.Provider> element"
    ),
    n
  );
}
var Vh = V.createContext(void 0);
Vh.displayName = "FrameworkContext";
function sv() {
  let n = V.useContext(Vh);
  return (
    qh(n, "You must render this element inside a <HydratedRouter> element"), n
  );
}
function z2(n, i) {
  let r = V.useContext(Vh),
    [s, c] = V.useState(!1),
    [d, p] = V.useState(!1),
    {
      onFocus: y,
      onBlur: b,
      onMouseEnter: g,
      onMouseLeave: w,
      onTouchStart: O,
    } = i,
    N = V.useRef(null);
  V.useEffect(() => {
    if ((n === "render" && p(!0), n === "viewport")) {
      let z = (L) => {
          L.forEach((I) => {
            p(I.isIntersecting);
          });
        },
        M = new IntersectionObserver(z, { threshold: 0.5 });
      return (
        N.current && M.observe(N.current),
        () => {
          M.disconnect();
        }
      );
    }
  }, [n]),
    V.useEffect(() => {
      if (s) {
        let z = setTimeout(() => {
          p(!0);
        }, 100);
        return () => {
          clearTimeout(z);
        };
      }
    }, [s]);
  let q = () => {
      c(!0);
    },
    x = () => {
      c(!1), p(!1);
    };
  return r
    ? n !== "intent"
      ? [d, N, {}]
      : [
          d,
          N,
          {
            onFocus: po(y, q),
            onBlur: po(b, x),
            onMouseEnter: po(g, q),
            onMouseLeave: po(w, x),
            onTouchStart: po(O, q),
          },
        ]
    : [!1, N, {}];
}
function po(n, i) {
  return (r) => {
    n && n(r), r.defaultPrevented || i(r);
  };
}
function H2({ page: n, ...i }) {
  let { router: r } = rv(),
    s = V.useMemo(() => X0(r.routes, n, r.basename), [r.routes, n, r.basename]);
  return s ? V.createElement(j2, { page: n, matches: s, ...i }) : null;
}
function k2(n) {
  let { manifest: i, routeModules: r } = sv(),
    [s, c] = V.useState([]);
  return (
    V.useEffect(() => {
      let d = !1;
      return (
        O2(n, i, r).then((p) => {
          d || c(p);
        }),
        () => {
          d = !0;
        }
      );
    }, [n, i, r]),
    s
  );
}
function j2({ page: n, matches: i, ...r }) {
  let s = Dl(),
    { manifest: c, routeModules: d } = sv(),
    { basename: p } = rv(),
    { loaderData: y, matches: b } = B2(),
    g = V.useMemo(() => f0(n, i, b, c, s, "data"), [n, i, b, c, s]),
    w = V.useMemo(() => f0(n, i, b, c, s, "assets"), [n, i, b, c, s]),
    O = V.useMemo(() => {
      if (n === s.pathname + s.search + s.hash) return [];
      let x = new Set(),
        z = !1;
      if (
        (i.forEach((L) => {
          let I = c.routes[L.route.id];
          !I ||
            !I.hasLoader ||
            ((!g.some((J) => J.route.id === L.route.id) &&
              L.route.id in y &&
              d[L.route.id]?.shouldRevalidate) ||
            I.hasClientLoader
              ? (z = !0)
              : x.add(L.route.id));
        }),
        x.size === 0)
      )
        return [];
      let M = L2(n, p);
      return (
        z &&
          x.size > 0 &&
          M.searchParams.set(
            "_routes",
            i
              .filter((L) => x.has(L.route.id))
              .map((L) => L.route.id)
              .join(",")
          ),
        [M.pathname + M.search]
      );
    }, [p, y, s, c, g, i, n, d]),
    N = V.useMemo(() => C2(w, c), [w, c]),
    q = k2(w);
  return V.createElement(
    V.Fragment,
    null,
    O.map((x) =>
      V.createElement("link", {
        key: x,
        rel: "prefetch",
        as: "fetch",
        href: x,
        ...r,
      })
    ),
    N.map((x) =>
      V.createElement("link", { key: x, rel: "modulepreload", href: x, ...r })
    ),
    q.map(({ key: x, link: z }) => V.createElement("link", { key: x, ...z }))
  );
}
function U2(...n) {
  return (i) => {
    n.forEach((r) => {
      typeof r == "function" ? r(i) : r != null && (r.current = i);
    });
  };
}
var ov =
  typeof window < "u" &&
  typeof window.document < "u" &&
  typeof window.document.createElement < "u";
try {
  ov && (window.__reactRouterVersion = "7.6.3");
} catch {}
function $2({ basename: n, children: i, window: r }) {
  let s = V.useRef();
  s.current == null && (s.current = Cw({ window: r, v5Compat: !0 }));
  let c = s.current,
    [d, p] = V.useState({ action: c.action, location: c.location }),
    y = V.useCallback(
      (b) => {
        V.startTransition(() => p(b));
      },
      [p]
    );
  return (
    V.useLayoutEffect(() => c.listen(y), [c, y]),
    V.createElement(g2, {
      basename: n,
      children: i,
      location: d.location,
      navigationType: d.action,
      navigator: c,
    })
  );
}
var uv = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
  Tl = V.forwardRef(function (
    {
      onClick: i,
      discover: r = "render",
      prefetch: s = "none",
      relative: c,
      reloadDocument: d,
      replace: p,
      state: y,
      target: b,
      to: g,
      preventScrollReset: w,
      viewTransition: O,
      ...N
    },
    q
  ) {
    let { basename: x } = V.useContext(Ea),
      z = typeof g == "string" && uv.test(g),
      M,
      L = !1;
    if (typeof g == "string" && z && ((M = g), ov))
      try {
        let ot = new URL(window.location.href),
          gt = g.startsWith("//") ? new URL(ot.protocol + g) : new URL(g),
          yt = ei(gt.pathname, x);
        gt.origin === ot.origin && yt != null
          ? (g = yt + gt.search + gt.hash)
          : (L = !0);
      } catch {
        ba(
          !1,
          `<Link to="${g}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`
        );
      }
    let I = e2(g, { relative: c }),
      [J, et, Z] = z2(s, N),
      rt = Y2(g, {
        replace: p,
        state: y,
        target: b,
        preventScrollReset: w,
        relative: c,
        viewTransition: O,
      });
    function ut(ot) {
      i && i(ot), ot.defaultPrevented || rt(ot);
    }
    let bt = V.createElement("a", {
      ...N,
      ...Z,
      href: M || I,
      onClick: L || d ? i : ut,
      ref: U2(q, et),
      target: b,
      "data-discover": !z && r === "render" ? "true" : void 0,
    });
    return J && !z
      ? V.createElement(V.Fragment, null, bt, V.createElement(H2, { page: I }))
      : bt;
  });
Tl.displayName = "Link";
var vo = V.forwardRef(function (
  {
    "aria-current": i = "page",
    caseSensitive: r = !1,
    className: s = "",
    end: c = !1,
    style: d,
    to: p,
    viewTransition: y,
    children: b,
    ...g
  },
  w
) {
  let O = Ao(p, { relative: g.relative }),
    N = Dl(),
    q = V.useContext(Zc),
    { navigator: x, basename: z } = V.useContext(Ea),
    M = q != null && Q2(O) && y === !0,
    L = x.encodeLocation ? x.encodeLocation(O).pathname : O.pathname,
    I = N.pathname,
    J =
      q && q.navigation && q.navigation.location
        ? q.navigation.location.pathname
        : null;
  r ||
    ((I = I.toLowerCase()),
    (J = J ? J.toLowerCase() : null),
    (L = L.toLowerCase())),
    J && z && (J = ei(J, z) || J);
  const et = L !== "/" && L.endsWith("/") ? L.length - 1 : L.length;
  let Z = I === L || (!c && I.startsWith(L) && I.charAt(et) === "/"),
    rt =
      J != null &&
      (J === L || (!c && J.startsWith(L) && J.charAt(L.length) === "/")),
    ut = { isActive: Z, isPending: rt, isTransitioning: M },
    bt = Z ? i : void 0,
    ot;
  typeof s == "function"
    ? (ot = s(ut))
    : (ot = [
        s,
        Z ? "active" : null,
        rt ? "pending" : null,
        M ? "transitioning" : null,
      ]
        .filter(Boolean)
        .join(" "));
  let gt = typeof d == "function" ? d(ut) : d;
  return V.createElement(
    Tl,
    {
      ...g,
      "aria-current": bt,
      className: ot,
      ref: w,
      style: gt,
      to: p,
      viewTransition: y,
    },
    typeof b == "function" ? b(ut) : b
  );
});
vo.displayName = "NavLink";
var q2 = V.forwardRef(
  (
    {
      discover: n = "render",
      fetcherKey: i,
      navigate: r,
      reloadDocument: s,
      replace: c,
      state: d,
      method: p = Oc,
      action: y,
      onSubmit: b,
      relative: g,
      preventScrollReset: w,
      viewTransition: O,
      ...N
    },
    q
  ) => {
    let x = K2(),
      z = X2(y, { relative: g }),
      M = p.toLowerCase() === "get" ? "get" : "post",
      L = typeof y == "string" && uv.test(y),
      I = (J) => {
        if ((b && b(J), J.defaultPrevented)) return;
        J.preventDefault();
        let et = J.nativeEvent.submitter,
          Z = et?.getAttribute("formmethod") || p;
        x(et || J.currentTarget, {
          fetcherKey: i,
          method: Z,
          navigate: r,
          replace: c,
          state: d,
          relative: g,
          preventScrollReset: w,
          viewTransition: O,
        });
      };
    return V.createElement("form", {
      ref: q,
      method: M,
      action: z,
      onSubmit: s ? b : I,
      ...N,
      "data-discover": !L && n === "render" ? "true" : void 0,
    });
  }
);
q2.displayName = "Form";
function V2(n) {
  return `${n} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`;
}
function cv(n) {
  let i = V.useContext($r);
  return Jt(i, V2(n)), i;
}
function Y2(
  n,
  {
    target: i,
    replace: r,
    state: s,
    preventScrollReset: c,
    relative: d,
    viewTransition: p,
  } = {}
) {
  let y = qr(),
    b = Dl(),
    g = Ao(n, { relative: d });
  return V.useCallback(
    (w) => {
      if (E2(w, i)) {
        w.preventDefault();
        let O = r !== void 0 ? r : wo(b) === wo(g);
        y(n, {
          replace: O,
          state: s,
          preventScrollReset: c,
          relative: d,
          viewTransition: p,
        });
      }
    },
    [b, y, g, r, s, i, n, c, d, p]
  );
}
var P2 = 0,
  G2 = () => `__${String(++P2)}__`;
function K2() {
  let { router: n } = cv("useSubmit"),
    { basename: i } = V.useContext(Ea),
    r = d2();
  return V.useCallback(
    async (s, c = {}) => {
      let { action: d, method: p, encType: y, formData: b, body: g } = A2(s, i);
      if (c.navigate === !1) {
        let w = c.fetcherKey || G2();
        await n.fetch(w, r, c.action || d, {
          preventScrollReset: c.preventScrollReset,
          formData: b,
          body: g,
          formMethod: c.method || p,
          formEncType: c.encType || y,
          flushSync: c.flushSync,
        });
      } else
        await n.navigate(c.action || d, {
          preventScrollReset: c.preventScrollReset,
          formData: b,
          body: g,
          formMethod: c.method || p,
          formEncType: c.encType || y,
          replace: c.replace,
          state: c.state,
          fromRouteId: r,
          flushSync: c.flushSync,
          viewTransition: c.viewTransition,
        });
    },
    [n, i, r]
  );
}
function X2(n, { relative: i } = {}) {
  let { basename: r } = V.useContext(Ea),
    s = V.useContext(_a);
  Jt(s, "useFormAction must be used inside a RouteContext");
  let [c] = s.matches.slice(-1),
    d = { ...Ao(n || ".", { relative: i }) },
    p = Dl();
  if (n == null) {
    d.search = p.search;
    let y = new URLSearchParams(d.search),
      b = y.getAll("index");
    if (b.some((w) => w === "")) {
      y.delete("index"),
        b.filter((O) => O).forEach((O) => y.append("index", O));
      let w = y.toString();
      d.search = w ? `?${w}` : "";
    }
  }
  return (
    (!n || n === ".") &&
      c.route.index &&
      (d.search = d.search ? d.search.replace(/^\?/, "?index&") : "?index"),
    r !== "/" && (d.pathname = d.pathname === "/" ? r : Wa([r, d.pathname])),
    wo(d)
  );
}
function Q2(n, i = {}) {
  let r = V.useContext(W0);
  Jt(
    r != null,
    "`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?"
  );
  let { basename: s } = cv("useViewTransitionState"),
    c = Ao(n, { relative: i.relative });
  if (!r.isTransitioning) return !1;
  let d = ei(r.currentLocation.pathname, s) || r.currentLocation.pathname,
    p = ei(r.nextLocation.pathname, s) || r.nextLocation.pathname;
  return Bc(c.pathname, p) != null || Bc(c.pathname, d) != null;
}
[...M2];
const Z2 = () =>
    k.jsx(k.Fragment, {
      children: k.jsx("nav", {
        className: "navbar navbar-expand-sm bg-dark navbar-dark",
        children: k.jsx("div", {
          className: "container-fluid",
          children: k.jsxs("ul", {
            className: "navbar-nav mx-auto",
            children: [
              k.jsx("li", {
                className: "nav-item",
                children: k.jsx(vo, {
                  className: (n) =>
                    n.isActive
                      ? "nav-link text-white"
                      : "nav-link text-white/[0.5]",
                  to: "/",
                  children: "Home",
                }),
              }),
              k.jsx("li", {
                className: "nav-item",
                children: k.jsx(vo, {
                  className: (n) =>
                    n.isActive
                      ? "nav-link text-white"
                      : "nav-link text-white/[0.5]",
                  to: "/About",
                  children: "About",
                }),
              }),
              k.jsx("li", {
                className: "nav-item",
                children: k.jsx(vo, {
                  className: (n) =>
                    n.isActive
                      ? "nav-link text-white"
                      : "nav-link text-white/[0.5]",
                  to: "/Products",
                  children: "Products",
                }),
              }),
            ],
          }),
        }),
      }),
    }),
  I2 = () =>
    k.jsx(k.Fragment, {
      children: k.jsxs("div", {
        className:
          "bg-cyan-700 p-3 md:h-[100vh] md:flex md:flex-col justify-center",
        children: [
          k.jsx("h1", {
            className: "capitalize text-center text-white",
            style: { fontWeight: "bold", letterSpacing: "2px" },
            children: "wellcome to my website",
          }),
          k.jsx("p", {
            className:
              "text-justify text-cyan-200 p-2 text-xl font-light leading-10 ",
            dir: "lrt",
            children:
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis exercitationem magnam aperiam quasi dolorum repudiandae rerum numquam est soluta fugit odio repellendus assumenda suscipit, animi quibusdam corporis, molestiae eum blanditiis dignissimos! Exercitationem dignissimos porro iure officia, eveniet tenetur labore veniam dolorum dolor sapiente, deserunt quia. Non excepturi atque architecto debitis.",
          }),
          k.jsxs("div", {
            className: "flex justify-center gap-2",
            children: [
              k.jsx(Tl, {
                className: "btn btn-outline-info",
                to: "/About",
                children: "About",
              }),
              k.jsx(Tl, {
                className: "btn btn-outline-info",
                to: "/Products",
                children: "Prducts",
              }),
            ],
          }),
        ],
      }),
    }),
  F2 = () =>
    k.jsx(k.Fragment, {
      children: k.jsxs("div", {
        className: "w-[100%] flex justify-center items-center",
        style: { height: "calc(100vh - 60px)" },
        children: [
          k.jsx("h1", {
            className: "capitalize inline-block text-danger",
            children: "not found",
          }),
          k.jsx("span", { className: "spinner-border mx-2 text-rose-500" }),
        ],
      }),
    });
function fv(n, i) {
  return function () {
    return n.apply(i, arguments);
  };
}
const { toString: J2 } = Object.prototype,
  { getPrototypeOf: Yh } = Object,
  { iterator: Fc, toStringTag: dv } = Symbol,
  Jc = ((n) => (i) => {
    const r = J2.call(i);
    return n[r] || (n[r] = r.slice(8, -1).toLowerCase());
  })(Object.create(null)),
  Fn = (n) => ((n = n.toLowerCase()), (i) => Jc(i) === n),
  Wc = (n) => (i) => typeof i === n,
  { isArray: Vr } = Array,
  Eo = Wc("undefined");
function W2(n) {
  return (
    n !== null &&
    !Eo(n) &&
    n.constructor !== null &&
    !Eo(n.constructor) &&
    Fe(n.constructor.isBuffer) &&
    n.constructor.isBuffer(n)
  );
}
const hv = Fn("ArrayBuffer");
function t1(n) {
  let i;
  return (
    typeof ArrayBuffer < "u" && ArrayBuffer.isView
      ? (i = ArrayBuffer.isView(n))
      : (i = n && n.buffer && hv(n.buffer)),
    i
  );
}
const e1 = Wc("string"),
  Fe = Wc("function"),
  mv = Wc("number"),
  tf = (n) => n !== null && typeof n == "object",
  n1 = (n) => n === !0 || n === !1,
  Nc = (n) => {
    if (Jc(n) !== "object") return !1;
    const i = Yh(n);
    return (
      (i === null ||
        i === Object.prototype ||
        Object.getPrototypeOf(i) === null) &&
      !(dv in n) &&
      !(Fc in n)
    );
  },
  a1 = Fn("Date"),
  i1 = Fn("File"),
  l1 = Fn("Blob"),
  r1 = Fn("FileList"),
  s1 = (n) => tf(n) && Fe(n.pipe),
  o1 = (n) => {
    let i;
    return (
      n &&
      ((typeof FormData == "function" && n instanceof FormData) ||
        (Fe(n.append) &&
          ((i = Jc(n)) === "formdata" ||
            (i === "object" &&
              Fe(n.toString) &&
              n.toString() === "[object FormData]"))))
    );
  },
  u1 = Fn("URLSearchParams"),
  [c1, f1, d1, h1] = ["ReadableStream", "Request", "Response", "Headers"].map(
    Fn
  ),
  m1 = (n) =>
    n.trim ? n.trim() : n.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function To(n, i, { allOwnKeys: r = !1 } = {}) {
  if (n === null || typeof n > "u") return;
  let s, c;
  if ((typeof n != "object" && (n = [n]), Vr(n)))
    for (s = 0, c = n.length; s < c; s++) i.call(null, n[s], s, n);
  else {
    const d = r ? Object.getOwnPropertyNames(n) : Object.keys(n),
      p = d.length;
    let y;
    for (s = 0; s < p; s++) (y = d[s]), i.call(null, n[y], y, n);
  }
}
function pv(n, i) {
  i = i.toLowerCase();
  const r = Object.keys(n);
  let s = r.length,
    c;
  for (; s-- > 0; ) if (((c = r[s]), i === c.toLowerCase())) return c;
  return null;
}
const yl =
    typeof globalThis < "u"
      ? globalThis
      : typeof self < "u"
      ? self
      : typeof window < "u"
      ? window
      : global,
  gv = (n) => !Eo(n) && n !== yl;
function Th() {
  const { caseless: n } = (gv(this) && this) || {},
    i = {},
    r = (s, c) => {
      const d = (n && pv(i, c)) || c;
      Nc(i[d]) && Nc(s)
        ? (i[d] = Th(i[d], s))
        : Nc(s)
        ? (i[d] = Th({}, s))
        : Vr(s)
        ? (i[d] = s.slice())
        : (i[d] = s);
    };
  for (let s = 0, c = arguments.length; s < c; s++)
    arguments[s] && To(arguments[s], r);
  return i;
}
const p1 = (n, i, r, { allOwnKeys: s } = {}) => (
    To(
      i,
      (c, d) => {
        r && Fe(c) ? (n[d] = fv(c, r)) : (n[d] = c);
      },
      { allOwnKeys: s }
    ),
    n
  ),
  g1 = (n) => (n.charCodeAt(0) === 65279 && (n = n.slice(1)), n),
  v1 = (n, i, r, s) => {
    (n.prototype = Object.create(i.prototype, s)),
      (n.prototype.constructor = n),
      Object.defineProperty(n, "super", { value: i.prototype }),
      r && Object.assign(n.prototype, r);
  },
  b1 = (n, i, r, s) => {
    let c, d, p;
    const y = {};
    if (((i = i || {}), n == null)) return i;
    do {
      for (c = Object.getOwnPropertyNames(n), d = c.length; d-- > 0; )
        (p = c[d]), (!s || s(p, n, i)) && !y[p] && ((i[p] = n[p]), (y[p] = !0));
      n = r !== !1 && Yh(n);
    } while (n && (!r || r(n, i)) && n !== Object.prototype);
    return i;
  },
  y1 = (n, i, r) => {
    (n = String(n)),
      (r === void 0 || r > n.length) && (r = n.length),
      (r -= i.length);
    const s = n.indexOf(i, r);
    return s !== -1 && s === r;
  },
  w1 = (n) => {
    if (!n) return null;
    if (Vr(n)) return n;
    let i = n.length;
    if (!mv(i)) return null;
    const r = new Array(i);
    for (; i-- > 0; ) r[i] = n[i];
    return r;
  },
  E1 = (
    (n) => (i) =>
      n && i instanceof n
  )(typeof Uint8Array < "u" && Yh(Uint8Array)),
  _1 = (n, i) => {
    const s = (n && n[Fc]).call(n);
    let c;
    for (; (c = s.next()) && !c.done; ) {
      const d = c.value;
      i.call(n, d[0], d[1]);
    }
  },
  S1 = (n, i) => {
    let r;
    const s = [];
    for (; (r = n.exec(i)) !== null; ) s.push(r);
    return s;
  },
  A1 = Fn("HTMLFormElement"),
  T1 = (n) =>
    n.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g, function (r, s, c) {
      return s.toUpperCase() + c;
    }),
  d0 = (
    ({ hasOwnProperty: n }) =>
    (i, r) =>
      n.call(i, r)
  )(Object.prototype),
  x1 = Fn("RegExp"),
  vv = (n, i) => {
    const r = Object.getOwnPropertyDescriptors(n),
      s = {};
    To(r, (c, d) => {
      let p;
      (p = i(c, d, n)) !== !1 && (s[d] = p || c);
    }),
      Object.defineProperties(n, s);
  },
  O1 = (n) => {
    vv(n, (i, r) => {
      if (Fe(n) && ["arguments", "caller", "callee"].indexOf(r) !== -1)
        return !1;
      const s = n[r];
      if (Fe(s)) {
        if (((i.enumerable = !1), "writable" in i)) {
          i.writable = !1;
          return;
        }
        i.set ||
          (i.set = () => {
            throw Error("Can not rewrite read-only method '" + r + "'");
          });
      }
    });
  },
  C1 = (n, i) => {
    const r = {},
      s = (c) => {
        c.forEach((d) => {
          r[d] = !0;
        });
      };
    return Vr(n) ? s(n) : s(String(n).split(i)), r;
  },
  N1 = () => {},
  D1 = (n, i) => (n != null && Number.isFinite((n = +n)) ? n : i);
function R1(n) {
  return !!(n && Fe(n.append) && n[dv] === "FormData" && n[Fc]);
}
const M1 = (n) => {
    const i = new Array(10),
      r = (s, c) => {
        if (tf(s)) {
          if (i.indexOf(s) >= 0) return;
          if (!("toJSON" in s)) {
            i[c] = s;
            const d = Vr(s) ? [] : {};
            return (
              To(s, (p, y) => {
                const b = r(p, c + 1);
                !Eo(b) && (d[y] = b);
              }),
              (i[c] = void 0),
              d
            );
          }
        }
        return s;
      };
    return r(n, 0);
  },
  L1 = Fn("AsyncFunction"),
  B1 = (n) => n && (tf(n) || Fe(n)) && Fe(n.then) && Fe(n.catch),
  bv = ((n, i) =>
    n
      ? setImmediate
      : i
      ? ((r, s) => (
          yl.addEventListener(
            "message",
            ({ source: c, data: d }) => {
              c === yl && d === r && s.length && s.shift()();
            },
            !1
          ),
          (c) => {
            s.push(c), yl.postMessage(r, "*");
          }
        ))(`axios@${Math.random()}`, [])
      : (r) => setTimeout(r))(
    typeof setImmediate == "function",
    Fe(yl.postMessage)
  ),
  z1 =
    typeof queueMicrotask < "u"
      ? queueMicrotask.bind(yl)
      : (typeof process < "u" && process.nextTick) || bv,
  H1 = (n) => n != null && Fe(n[Fc]),
  j = {
    isArray: Vr,
    isArrayBuffer: hv,
    isBuffer: W2,
    isFormData: o1,
    isArrayBufferView: t1,
    isString: e1,
    isNumber: mv,
    isBoolean: n1,
    isObject: tf,
    isPlainObject: Nc,
    isReadableStream: c1,
    isRequest: f1,
    isResponse: d1,
    isHeaders: h1,
    isUndefined: Eo,
    isDate: a1,
    isFile: i1,
    isBlob: l1,
    isRegExp: x1,
    isFunction: Fe,
    isStream: s1,
    isURLSearchParams: u1,
    isTypedArray: E1,
    isFileList: r1,
    forEach: To,
    merge: Th,
    extend: p1,
    trim: m1,
    stripBOM: g1,
    inherits: v1,
    toFlatObject: b1,
    kindOf: Jc,
    kindOfTest: Fn,
    endsWith: y1,
    toArray: w1,
    forEachEntry: _1,
    matchAll: S1,
    isHTMLForm: A1,
    hasOwnProperty: d0,
    hasOwnProp: d0,
    reduceDescriptors: vv,
    freezeMethods: O1,
    toObjectSet: C1,
    toCamelCase: T1,
    noop: N1,
    toFiniteNumber: D1,
    findKey: pv,
    global: yl,
    isContextDefined: gv,
    isSpecCompliantForm: R1,
    toJSONObject: M1,
    isAsyncFn: L1,
    isThenable: B1,
    setImmediate: bv,
    asap: z1,
    isIterable: H1,
  };
function _t(n, i, r, s, c) {
  Error.call(this),
    Error.captureStackTrace
      ? Error.captureStackTrace(this, this.constructor)
      : (this.stack = new Error().stack),
    (this.message = n),
    (this.name = "AxiosError"),
    i && (this.code = i),
    r && (this.config = r),
    s && (this.request = s),
    c && ((this.response = c), (this.status = c.status ? c.status : null));
}
j.inherits(_t, Error, {
  toJSON: function () {
    return {
      message: this.message,
      name: this.name,
      description: this.description,
      number: this.number,
      fileName: this.fileName,
      lineNumber: this.lineNumber,
      columnNumber: this.columnNumber,
      stack: this.stack,
      config: j.toJSONObject(this.config),
      code: this.code,
      status: this.status,
    };
  },
});
const yv = _t.prototype,
  wv = {};
[
  "ERR_BAD_OPTION_VALUE",
  "ERR_BAD_OPTION",
  "ECONNABORTED",
  "ETIMEDOUT",
  "ERR_NETWORK",
  "ERR_FR_TOO_MANY_REDIRECTS",
  "ERR_DEPRECATED",
  "ERR_BAD_RESPONSE",
  "ERR_BAD_REQUEST",
  "ERR_CANCELED",
  "ERR_NOT_SUPPORT",
  "ERR_INVALID_URL",
].forEach((n) => {
  wv[n] = { value: n };
});
Object.defineProperties(_t, wv);
Object.defineProperty(yv, "isAxiosError", { value: !0 });
_t.from = (n, i, r, s, c, d) => {
  const p = Object.create(yv);
  return (
    j.toFlatObject(
      n,
      p,
      function (b) {
        return b !== Error.prototype;
      },
      (y) => y !== "isAxiosError"
    ),
    _t.call(p, n.message, i, r, s, c),
    (p.cause = n),
    (p.name = n.name),
    d && Object.assign(p, d),
    p
  );
};
const k1 = null;
function xh(n) {
  return j.isPlainObject(n) || j.isArray(n);
}
function Ev(n) {
  return j.endsWith(n, "[]") ? n.slice(0, -2) : n;
}
function h0(n, i, r) {
  return n
    ? n
        .concat(i)
        .map(function (c, d) {
          return (c = Ev(c)), !r && d ? "[" + c + "]" : c;
        })
        .join(r ? "." : "")
    : i;
}
function j1(n) {
  return j.isArray(n) && !n.some(xh);
}
const U1 = j.toFlatObject(j, {}, null, function (i) {
  return /^is[A-Z]/.test(i);
});
function ef(n, i, r) {
  if (!j.isObject(n)) throw new TypeError("target must be an object");
  (i = i || new FormData()),
    (r = j.toFlatObject(
      r,
      { metaTokens: !0, dots: !1, indexes: !1 },
      !1,
      function (z, M) {
        return !j.isUndefined(M[z]);
      }
    ));
  const s = r.metaTokens,
    c = r.visitor || w,
    d = r.dots,
    p = r.indexes,
    b = (r.Blob || (typeof Blob < "u" && Blob)) && j.isSpecCompliantForm(i);
  if (!j.isFunction(c)) throw new TypeError("visitor must be a function");
  function g(x) {
    if (x === null) return "";
    if (j.isDate(x)) return x.toISOString();
    if (j.isBoolean(x)) return x.toString();
    if (!b && j.isBlob(x))
      throw new _t("Blob is not supported. Use a Buffer instead.");
    return j.isArrayBuffer(x) || j.isTypedArray(x)
      ? b && typeof Blob == "function"
        ? new Blob([x])
        : Buffer.from(x)
      : x;
  }
  function w(x, z, M) {
    let L = x;
    if (x && !M && typeof x == "object") {
      if (j.endsWith(z, "{}"))
        (z = s ? z : z.slice(0, -2)), (x = JSON.stringify(x));
      else if (
        (j.isArray(x) && j1(x)) ||
        ((j.isFileList(x) || j.endsWith(z, "[]")) && (L = j.toArray(x)))
      )
        return (
          (z = Ev(z)),
          L.forEach(function (J, et) {
            !(j.isUndefined(J) || J === null) &&
              i.append(
                p === !0 ? h0([z], et, d) : p === null ? z : z + "[]",
                g(J)
              );
          }),
          !1
        );
    }
    return xh(x) ? !0 : (i.append(h0(M, z, d), g(x)), !1);
  }
  const O = [],
    N = Object.assign(U1, {
      defaultVisitor: w,
      convertValue: g,
      isVisitable: xh,
    });
  function q(x, z) {
    if (!j.isUndefined(x)) {
      if (O.indexOf(x) !== -1)
        throw Error("Circular reference detected in " + z.join("."));
      O.push(x),
        j.forEach(x, function (L, I) {
          (!(j.isUndefined(L) || L === null) &&
            c.call(i, L, j.isString(I) ? I.trim() : I, z, N)) === !0 &&
            q(L, z ? z.concat(I) : [I]);
        }),
        O.pop();
    }
  }
  if (!j.isObject(n)) throw new TypeError("data must be an object");
  return q(n), i;
}
function m0(n) {
  const i = {
    "!": "%21",
    "'": "%27",
    "(": "%28",
    ")": "%29",
    "~": "%7E",
    "%20": "+",
    "%00": "\0",
  };
  return encodeURIComponent(n).replace(/[!'()~]|%20|%00/g, function (s) {
    return i[s];
  });
}
function Ph(n, i) {
  (this._pairs = []), n && ef(n, this, i);
}
const _v = Ph.prototype;
_v.append = function (i, r) {
  this._pairs.push([i, r]);
};
_v.toString = function (i) {
  const r = i
    ? function (s) {
        return i.call(this, s, m0);
      }
    : m0;
  return this._pairs
    .map(function (c) {
      return r(c[0]) + "=" + r(c[1]);
    }, "")
    .join("&");
};
function $1(n) {
  return encodeURIComponent(n)
    .replace(/%3A/gi, ":")
    .replace(/%24/g, "$")
    .replace(/%2C/gi, ",")
    .replace(/%20/g, "+")
    .replace(/%5B/gi, "[")
    .replace(/%5D/gi, "]");
}
function Sv(n, i, r) {
  if (!i) return n;
  const s = (r && r.encode) || $1;
  j.isFunction(r) && (r = { serialize: r });
  const c = r && r.serialize;
  let d;
  if (
    (c
      ? (d = c(i, r))
      : (d = j.isURLSearchParams(i) ? i.toString() : new Ph(i, r).toString(s)),
    d)
  ) {
    const p = n.indexOf("#");
    p !== -1 && (n = n.slice(0, p)),
      (n += (n.indexOf("?") === -1 ? "?" : "&") + d);
  }
  return n;
}
class p0 {
  constructor() {
    this.handlers = [];
  }
  use(i, r, s) {
    return (
      this.handlers.push({
        fulfilled: i,
        rejected: r,
        synchronous: s ? s.synchronous : !1,
        runWhen: s ? s.runWhen : null,
      }),
      this.handlers.length - 1
    );
  }
  eject(i) {
    this.handlers[i] && (this.handlers[i] = null);
  }
  clear() {
    this.handlers && (this.handlers = []);
  }
  forEach(i) {
    j.forEach(this.handlers, function (s) {
      s !== null && i(s);
    });
  }
}
const Av = {
    silentJSONParsing: !0,
    forcedJSONParsing: !0,
    clarifyTimeoutError: !1,
  },
  q1 = typeof URLSearchParams < "u" ? URLSearchParams : Ph,
  V1 = typeof FormData < "u" ? FormData : null,
  Y1 = typeof Blob < "u" ? Blob : null,
  P1 = {
    isBrowser: !0,
    classes: { URLSearchParams: q1, FormData: V1, Blob: Y1 },
    protocols: ["http", "https", "file", "blob", "url", "data"],
  },
  Gh = typeof window < "u" && typeof document < "u",
  Oh = (typeof navigator == "object" && navigator) || void 0,
  G1 =
    Gh &&
    (!Oh || ["ReactNative", "NativeScript", "NS"].indexOf(Oh.product) < 0),
  K1 =
    typeof WorkerGlobalScope < "u" &&
    self instanceof WorkerGlobalScope &&
    typeof self.importScripts == "function",
  X1 = (Gh && window.location.href) || "http://localhost",
  Q1 = Object.freeze(
    Object.defineProperty(
      {
        __proto__: null,
        hasBrowserEnv: Gh,
        hasStandardBrowserEnv: G1,
        hasStandardBrowserWebWorkerEnv: K1,
        navigator: Oh,
        origin: X1,
      },
      Symbol.toStringTag,
      { value: "Module" }
    )
  ),
  Re = { ...Q1, ...P1 };
function Z1(n, i) {
  return ef(
    n,
    new Re.classes.URLSearchParams(),
    Object.assign(
      {
        visitor: function (r, s, c, d) {
          return Re.isNode && j.isBuffer(r)
            ? (this.append(s, r.toString("base64")), !1)
            : d.defaultVisitor.apply(this, arguments);
        },
      },
      i
    )
  );
}
function I1(n) {
  return j
    .matchAll(/\w+|\[(\w*)]/g, n)
    .map((i) => (i[0] === "[]" ? "" : i[1] || i[0]));
}
function F1(n) {
  const i = {},
    r = Object.keys(n);
  let s;
  const c = r.length;
  let d;
  for (s = 0; s < c; s++) (d = r[s]), (i[d] = n[d]);
  return i;
}
function Tv(n) {
  function i(r, s, c, d) {
    let p = r[d++];
    if (p === "__proto__") return !0;
    const y = Number.isFinite(+p),
      b = d >= r.length;
    return (
      (p = !p && j.isArray(c) ? c.length : p),
      b
        ? (j.hasOwnProp(c, p) ? (c[p] = [c[p], s]) : (c[p] = s), !y)
        : ((!c[p] || !j.isObject(c[p])) && (c[p] = []),
          i(r, s, c[p], d) && j.isArray(c[p]) && (c[p] = F1(c[p])),
          !y)
    );
  }
  if (j.isFormData(n) && j.isFunction(n.entries)) {
    const r = {};
    return (
      j.forEachEntry(n, (s, c) => {
        i(I1(s), c, r, 0);
      }),
      r
    );
  }
  return null;
}
function J1(n, i, r) {
  if (j.isString(n))
    try {
      return (i || JSON.parse)(n), j.trim(n);
    } catch (s) {
      if (s.name !== "SyntaxError") throw s;
    }
  return (r || JSON.stringify)(n);
}
const xo = {
  transitional: Av,
  adapter: ["xhr", "http", "fetch"],
  transformRequest: [
    function (i, r) {
      const s = r.getContentType() || "",
        c = s.indexOf("application/json") > -1,
        d = j.isObject(i);
      if ((d && j.isHTMLForm(i) && (i = new FormData(i)), j.isFormData(i)))
        return c ? JSON.stringify(Tv(i)) : i;
      if (
        j.isArrayBuffer(i) ||
        j.isBuffer(i) ||
        j.isStream(i) ||
        j.isFile(i) ||
        j.isBlob(i) ||
        j.isReadableStream(i)
      )
        return i;
      if (j.isArrayBufferView(i)) return i.buffer;
      if (j.isURLSearchParams(i))
        return (
          r.setContentType(
            "application/x-www-form-urlencoded;charset=utf-8",
            !1
          ),
          i.toString()
        );
      let y;
      if (d) {
        if (s.indexOf("application/x-www-form-urlencoded") > -1)
          return Z1(i, this.formSerializer).toString();
        if ((y = j.isFileList(i)) || s.indexOf("multipart/form-data") > -1) {
          const b = this.env && this.env.FormData;
          return ef(
            y ? { "files[]": i } : i,
            b && new b(),
            this.formSerializer
          );
        }
      }
      return d || c ? (r.setContentType("application/json", !1), J1(i)) : i;
    },
  ],
  transformResponse: [
    function (i) {
      const r = this.transitional || xo.transitional,
        s = r && r.forcedJSONParsing,
        c = this.responseType === "json";
      if (j.isResponse(i) || j.isReadableStream(i)) return i;
      if (i && j.isString(i) && ((s && !this.responseType) || c)) {
        const p = !(r && r.silentJSONParsing) && c;
        try {
          return JSON.parse(i);
        } catch (y) {
          if (p)
            throw y.name === "SyntaxError"
              ? _t.from(y, _t.ERR_BAD_RESPONSE, this, null, this.response)
              : y;
        }
      }
      return i;
    },
  ],
  timeout: 0,
  xsrfCookieName: "XSRF-TOKEN",
  xsrfHeaderName: "X-XSRF-TOKEN",
  maxContentLength: -1,
  maxBodyLength: -1,
  env: { FormData: Re.classes.FormData, Blob: Re.classes.Blob },
  validateStatus: function (i) {
    return i >= 200 && i < 300;
  },
  headers: {
    common: {
      Accept: "application/json, text/plain, */*",
      "Content-Type": void 0,
    },
  },
};
j.forEach(["delete", "get", "head", "post", "put", "patch"], (n) => {
  xo.headers[n] = {};
});
const W1 = j.toObjectSet([
    "age",
    "authorization",
    "content-length",
    "content-type",
    "etag",
    "expires",
    "from",
    "host",
    "if-modified-since",
    "if-unmodified-since",
    "last-modified",
    "location",
    "max-forwards",
    "proxy-authorization",
    "referer",
    "retry-after",
    "user-agent",
  ]),
  tE = (n) => {
    const i = {};
    let r, s, c;
    return (
      n &&
        n
          .split(
            `
`
          )
          .forEach(function (p) {
            (c = p.indexOf(":")),
              (r = p.substring(0, c).trim().toLowerCase()),
              (s = p.substring(c + 1).trim()),
              !(!r || (i[r] && W1[r])) &&
                (r === "set-cookie"
                  ? i[r]
                    ? i[r].push(s)
                    : (i[r] = [s])
                  : (i[r] = i[r] ? i[r] + ", " + s : s));
          }),
      i
    );
  },
  g0 = Symbol("internals");
function go(n) {
  return n && String(n).trim().toLowerCase();
}
function Dc(n) {
  return n === !1 || n == null ? n : j.isArray(n) ? n.map(Dc) : String(n);
}
function eE(n) {
  const i = Object.create(null),
    r = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let s;
  for (; (s = r.exec(n)); ) i[s[1]] = s[2];
  return i;
}
const nE = (n) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(n.trim());
function vh(n, i, r, s, c) {
  if (j.isFunction(s)) return s.call(this, i, r);
  if ((c && (i = r), !!j.isString(i))) {
    if (j.isString(s)) return i.indexOf(s) !== -1;
    if (j.isRegExp(s)) return s.test(i);
  }
}
function aE(n) {
  return n
    .trim()
    .toLowerCase()
    .replace(/([a-z\d])(\w*)/g, (i, r, s) => r.toUpperCase() + s);
}
function iE(n, i) {
  const r = j.toCamelCase(" " + i);
  ["get", "set", "has"].forEach((s) => {
    Object.defineProperty(n, s + r, {
      value: function (c, d, p) {
        return this[s].call(this, i, c, d, p);
      },
      configurable: !0,
    });
  });
}
let Je = class {
  constructor(i) {
    i && this.set(i);
  }
  set(i, r, s) {
    const c = this;
    function d(y, b, g) {
      const w = go(b);
      if (!w) throw new Error("header name must be a non-empty string");
      const O = j.findKey(c, w);
      (!O || c[O] === void 0 || g === !0 || (g === void 0 && c[O] !== !1)) &&
        (c[O || b] = Dc(y));
    }
    const p = (y, b) => j.forEach(y, (g, w) => d(g, w, b));
    if (j.isPlainObject(i) || i instanceof this.constructor) p(i, r);
    else if (j.isString(i) && (i = i.trim()) && !nE(i)) p(tE(i), r);
    else if (j.isObject(i) && j.isIterable(i)) {
      let y = {},
        b,
        g;
      for (const w of i) {
        if (!j.isArray(w))
          throw TypeError("Object iterator must return a key-value pair");
        y[(g = w[0])] = (b = y[g])
          ? j.isArray(b)
            ? [...b, w[1]]
            : [b, w[1]]
          : w[1];
      }
      p(y, r);
    } else i != null && d(r, i, s);
    return this;
  }
  get(i, r) {
    if (((i = go(i)), i)) {
      const s = j.findKey(this, i);
      if (s) {
        const c = this[s];
        if (!r) return c;
        if (r === !0) return eE(c);
        if (j.isFunction(r)) return r.call(this, c, s);
        if (j.isRegExp(r)) return r.exec(c);
        throw new TypeError("parser must be boolean|regexp|function");
      }
    }
  }
  has(i, r) {
    if (((i = go(i)), i)) {
      const s = j.findKey(this, i);
      return !!(s && this[s] !== void 0 && (!r || vh(this, this[s], s, r)));
    }
    return !1;
  }
  delete(i, r) {
    const s = this;
    let c = !1;
    function d(p) {
      if (((p = go(p)), p)) {
        const y = j.findKey(s, p);
        y && (!r || vh(s, s[y], y, r)) && (delete s[y], (c = !0));
      }
    }
    return j.isArray(i) ? i.forEach(d) : d(i), c;
  }
  clear(i) {
    const r = Object.keys(this);
    let s = r.length,
      c = !1;
    for (; s--; ) {
      const d = r[s];
      (!i || vh(this, this[d], d, i, !0)) && (delete this[d], (c = !0));
    }
    return c;
  }
  normalize(i) {
    const r = this,
      s = {};
    return (
      j.forEach(this, (c, d) => {
        const p = j.findKey(s, d);
        if (p) {
          (r[p] = Dc(c)), delete r[d];
          return;
        }
        const y = i ? aE(d) : String(d).trim();
        y !== d && delete r[d], (r[y] = Dc(c)), (s[y] = !0);
      }),
      this
    );
  }
  concat(...i) {
    return this.constructor.concat(this, ...i);
  }
  toJSON(i) {
    const r = Object.create(null);
    return (
      j.forEach(this, (s, c) => {
        s != null && s !== !1 && (r[c] = i && j.isArray(s) ? s.join(", ") : s);
      }),
      r
    );
  }
  [Symbol.iterator]() {
    return Object.entries(this.toJSON())[Symbol.iterator]();
  }
  toString() {
    return Object.entries(this.toJSON()).map(([i, r]) => i + ": " + r).join(`
`);
  }
  getSetCookie() {
    return this.get("set-cookie") || [];
  }
  get [Symbol.toStringTag]() {
    return "AxiosHeaders";
  }
  static from(i) {
    return i instanceof this ? i : new this(i);
  }
  static concat(i, ...r) {
    const s = new this(i);
    return r.forEach((c) => s.set(c)), s;
  }
  static accessor(i) {
    const s = (this[g0] = this[g0] = { accessors: {} }).accessors,
      c = this.prototype;
    function d(p) {
      const y = go(p);
      s[y] || (iE(c, p), (s[y] = !0));
    }
    return j.isArray(i) ? i.forEach(d) : d(i), this;
  }
};
Je.accessor([
  "Content-Type",
  "Content-Length",
  "Accept",
  "Accept-Encoding",
  "User-Agent",
  "Authorization",
]);
j.reduceDescriptors(Je.prototype, ({ value: n }, i) => {
  let r = i[0].toUpperCase() + i.slice(1);
  return {
    get: () => n,
    set(s) {
      this[r] = s;
    },
  };
});
j.freezeMethods(Je);
function bh(n, i) {
  const r = this || xo,
    s = i || r,
    c = Je.from(s.headers);
  let d = s.data;
  return (
    j.forEach(n, function (y) {
      d = y.call(r, d, c.normalize(), i ? i.status : void 0);
    }),
    c.normalize(),
    d
  );
}
function xv(n) {
  return !!(n && n.__CANCEL__);
}
function Yr(n, i, r) {
  _t.call(this, n ?? "canceled", _t.ERR_CANCELED, i, r),
    (this.name = "CanceledError");
}
j.inherits(Yr, _t, { __CANCEL__: !0 });
function Ov(n, i, r) {
  const s = r.config.validateStatus;
  !r.status || !s || s(r.status)
    ? n(r)
    : i(
        new _t(
          "Request failed with status code " + r.status,
          [_t.ERR_BAD_REQUEST, _t.ERR_BAD_RESPONSE][
            Math.floor(r.status / 100) - 4
          ],
          r.config,
          r.request,
          r
        )
      );
}
function lE(n) {
  const i = /^([-+\w]{1,25})(:?\/\/|:)/.exec(n);
  return (i && i[1]) || "";
}
function rE(n, i) {
  n = n || 10;
  const r = new Array(n),
    s = new Array(n);
  let c = 0,
    d = 0,
    p;
  return (
    (i = i !== void 0 ? i : 1e3),
    function (b) {
      const g = Date.now(),
        w = s[d];
      p || (p = g), (r[c] = b), (s[c] = g);
      let O = d,
        N = 0;
      for (; O !== c; ) (N += r[O++]), (O = O % n);
      if (((c = (c + 1) % n), c === d && (d = (d + 1) % n), g - p < i)) return;
      const q = w && g - w;
      return q ? Math.round((N * 1e3) / q) : void 0;
    }
  );
}
function sE(n, i) {
  let r = 0,
    s = 1e3 / i,
    c,
    d;
  const p = (g, w = Date.now()) => {
    (r = w), (c = null), d && (clearTimeout(d), (d = null)), n.apply(null, g);
  };
  return [
    (...g) => {
      const w = Date.now(),
        O = w - r;
      O >= s
        ? p(g, w)
        : ((c = g),
          d ||
            (d = setTimeout(() => {
              (d = null), p(c);
            }, s - O)));
    },
    () => c && p(c),
  ];
}
const zc = (n, i, r = 3) => {
    let s = 0;
    const c = rE(50, 250);
    return sE((d) => {
      const p = d.loaded,
        y = d.lengthComputable ? d.total : void 0,
        b = p - s,
        g = c(b),
        w = p <= y;
      s = p;
      const O = {
        loaded: p,
        total: y,
        progress: y ? p / y : void 0,
        bytes: b,
        rate: g || void 0,
        estimated: g && y && w ? (y - p) / g : void 0,
        event: d,
        lengthComputable: y != null,
        [i ? "download" : "upload"]: !0,
      };
      n(O);
    }, r);
  },
  v0 = (n, i) => {
    const r = n != null;
    return [(s) => i[0]({ lengthComputable: r, total: n, loaded: s }), i[1]];
  },
  b0 =
    (n) =>
    (...i) =>
      j.asap(() => n(...i)),
  oE = Re.hasStandardBrowserEnv
    ? ((n, i) => (r) => (
        (r = new URL(r, Re.origin)),
        n.protocol === r.protocol &&
          n.host === r.host &&
          (i || n.port === r.port)
      ))(
        new URL(Re.origin),
        Re.navigator && /(msie|trident)/i.test(Re.navigator.userAgent)
      )
    : () => !0,
  uE = Re.hasStandardBrowserEnv
    ? {
        write(n, i, r, s, c, d) {
          const p = [n + "=" + encodeURIComponent(i)];
          j.isNumber(r) && p.push("expires=" + new Date(r).toGMTString()),
            j.isString(s) && p.push("path=" + s),
            j.isString(c) && p.push("domain=" + c),
            d === !0 && p.push("secure"),
            (document.cookie = p.join("; "));
        },
        read(n) {
          const i = document.cookie.match(
            new RegExp("(^|;\\s*)(" + n + ")=([^;]*)")
          );
          return i ? decodeURIComponent(i[3]) : null;
        },
        remove(n) {
          this.write(n, "", Date.now() - 864e5);
        },
      }
    : {
        write() {},
        read() {
          return null;
        },
        remove() {},
      };
function cE(n) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(n);
}
function fE(n, i) {
  return i ? n.replace(/\/?\/$/, "") + "/" + i.replace(/^\/+/, "") : n;
}
function Cv(n, i, r) {
  let s = !cE(i);
  return n && (s || r == !1) ? fE(n, i) : i;
}
const y0 = (n) => (n instanceof Je ? { ...n } : n);
function xl(n, i) {
  i = i || {};
  const r = {};
  function s(g, w, O, N) {
    return j.isPlainObject(g) && j.isPlainObject(w)
      ? j.merge.call({ caseless: N }, g, w)
      : j.isPlainObject(w)
      ? j.merge({}, w)
      : j.isArray(w)
      ? w.slice()
      : w;
  }
  function c(g, w, O, N) {
    if (j.isUndefined(w)) {
      if (!j.isUndefined(g)) return s(void 0, g, O, N);
    } else return s(g, w, O, N);
  }
  function d(g, w) {
    if (!j.isUndefined(w)) return s(void 0, w);
  }
  function p(g, w) {
    if (j.isUndefined(w)) {
      if (!j.isUndefined(g)) return s(void 0, g);
    } else return s(void 0, w);
  }
  function y(g, w, O) {
    if (O in i) return s(g, w);
    if (O in n) return s(void 0, g);
  }
  const b = {
    url: d,
    method: d,
    data: d,
    baseURL: p,
    transformRequest: p,
    transformResponse: p,
    paramsSerializer: p,
    timeout: p,
    timeoutMessage: p,
    withCredentials: p,
    withXSRFToken: p,
    adapter: p,
    responseType: p,
    xsrfCookieName: p,
    xsrfHeaderName: p,
    onUploadProgress: p,
    onDownloadProgress: p,
    decompress: p,
    maxContentLength: p,
    maxBodyLength: p,
    beforeRedirect: p,
    transport: p,
    httpAgent: p,
    httpsAgent: p,
    cancelToken: p,
    socketPath: p,
    responseEncoding: p,
    validateStatus: y,
    headers: (g, w, O) => c(y0(g), y0(w), O, !0),
  };
  return (
    j.forEach(Object.keys(Object.assign({}, n, i)), function (w) {
      const O = b[w] || c,
        N = O(n[w], i[w], w);
      (j.isUndefined(N) && O !== y) || (r[w] = N);
    }),
    r
  );
}
const Nv = (n) => {
    const i = xl({}, n);
    let {
      data: r,
      withXSRFToken: s,
      xsrfHeaderName: c,
      xsrfCookieName: d,
      headers: p,
      auth: y,
    } = i;
    (i.headers = p = Je.from(p)),
      (i.url = Sv(
        Cv(i.baseURL, i.url, i.allowAbsoluteUrls),
        n.params,
        n.paramsSerializer
      )),
      y &&
        p.set(
          "Authorization",
          "Basic " +
            btoa(
              (y.username || "") +
                ":" +
                (y.password ? unescape(encodeURIComponent(y.password)) : "")
            )
        );
    let b;
    if (j.isFormData(r)) {
      if (Re.hasStandardBrowserEnv || Re.hasStandardBrowserWebWorkerEnv)
        p.setContentType(void 0);
      else if ((b = p.getContentType()) !== !1) {
        const [g, ...w] = b
          ? b
              .split(";")
              .map((O) => O.trim())
              .filter(Boolean)
          : [];
        p.setContentType([g || "multipart/form-data", ...w].join("; "));
      }
    }
    if (
      Re.hasStandardBrowserEnv &&
      (s && j.isFunction(s) && (s = s(i)), s || (s !== !1 && oE(i.url)))
    ) {
      const g = c && d && uE.read(d);
      g && p.set(c, g);
    }
    return i;
  },
  dE = typeof XMLHttpRequest < "u",
  hE =
    dE &&
    function (n) {
      return new Promise(function (r, s) {
        const c = Nv(n);
        let d = c.data;
        const p = Je.from(c.headers).normalize();
        let { responseType: y, onUploadProgress: b, onDownloadProgress: g } = c,
          w,
          O,
          N,
          q,
          x;
        function z() {
          q && q(),
            x && x(),
            c.cancelToken && c.cancelToken.unsubscribe(w),
            c.signal && c.signal.removeEventListener("abort", w);
        }
        let M = new XMLHttpRequest();
        M.open(c.method.toUpperCase(), c.url, !0), (M.timeout = c.timeout);
        function L() {
          if (!M) return;
          const J = Je.from(
              "getAllResponseHeaders" in M && M.getAllResponseHeaders()
            ),
            Z = {
              data:
                !y || y === "text" || y === "json"
                  ? M.responseText
                  : M.response,
              status: M.status,
              statusText: M.statusText,
              headers: J,
              config: n,
              request: M,
            };
          Ov(
            function (ut) {
              r(ut), z();
            },
            function (ut) {
              s(ut), z();
            },
            Z
          ),
            (M = null);
        }
        "onloadend" in M
          ? (M.onloadend = L)
          : (M.onreadystatechange = function () {
              !M ||
                M.readyState !== 4 ||
                (M.status === 0 &&
                  !(M.responseURL && M.responseURL.indexOf("file:") === 0)) ||
                setTimeout(L);
            }),
          (M.onabort = function () {
            M &&
              (s(new _t("Request aborted", _t.ECONNABORTED, n, M)), (M = null));
          }),
          (M.onerror = function () {
            s(new _t("Network Error", _t.ERR_NETWORK, n, M)), (M = null);
          }),
          (M.ontimeout = function () {
            let et = c.timeout
              ? "timeout of " + c.timeout + "ms exceeded"
              : "timeout exceeded";
            const Z = c.transitional || Av;
            c.timeoutErrorMessage && (et = c.timeoutErrorMessage),
              s(
                new _t(
                  et,
                  Z.clarifyTimeoutError ? _t.ETIMEDOUT : _t.ECONNABORTED,
                  n,
                  M
                )
              ),
              (M = null);
          }),
          d === void 0 && p.setContentType(null),
          "setRequestHeader" in M &&
            j.forEach(p.toJSON(), function (et, Z) {
              M.setRequestHeader(Z, et);
            }),
          j.isUndefined(c.withCredentials) ||
            (M.withCredentials = !!c.withCredentials),
          y && y !== "json" && (M.responseType = c.responseType),
          g && (([N, x] = zc(g, !0)), M.addEventListener("progress", N)),
          b &&
            M.upload &&
            (([O, q] = zc(b)),
            M.upload.addEventListener("progress", O),
            M.upload.addEventListener("loadend", q)),
          (c.cancelToken || c.signal) &&
            ((w = (J) => {
              M &&
                (s(!J || J.type ? new Yr(null, n, M) : J),
                M.abort(),
                (M = null));
            }),
            c.cancelToken && c.cancelToken.subscribe(w),
            c.signal &&
              (c.signal.aborted ? w() : c.signal.addEventListener("abort", w)));
        const I = lE(c.url);
        if (I && Re.protocols.indexOf(I) === -1) {
          s(new _t("Unsupported protocol " + I + ":", _t.ERR_BAD_REQUEST, n));
          return;
        }
        M.send(d || null);
      });
    },
  mE = (n, i) => {
    const { length: r } = (n = n ? n.filter(Boolean) : []);
    if (i || r) {
      let s = new AbortController(),
        c;
      const d = function (g) {
        if (!c) {
          (c = !0), y();
          const w = g instanceof Error ? g : this.reason;
          s.abort(
            w instanceof _t ? w : new Yr(w instanceof Error ? w.message : w)
          );
        }
      };
      let p =
        i &&
        setTimeout(() => {
          (p = null), d(new _t(`timeout ${i} of ms exceeded`, _t.ETIMEDOUT));
        }, i);
      const y = () => {
        n &&
          (p && clearTimeout(p),
          (p = null),
          n.forEach((g) => {
            g.unsubscribe
              ? g.unsubscribe(d)
              : g.removeEventListener("abort", d);
          }),
          (n = null));
      };
      n.forEach((g) => g.addEventListener("abort", d));
      const { signal: b } = s;
      return (b.unsubscribe = () => j.asap(y)), b;
    }
  },
  pE = function* (n, i) {
    let r = n.byteLength;
    if (r < i) {
      yield n;
      return;
    }
    let s = 0,
      c;
    for (; s < r; ) (c = s + i), yield n.slice(s, c), (s = c);
  },
  gE = async function* (n, i) {
    for await (const r of vE(n)) yield* pE(r, i);
  },
  vE = async function* (n) {
    if (n[Symbol.asyncIterator]) {
      yield* n;
      return;
    }
    const i = n.getReader();
    try {
      for (;;) {
        const { done: r, value: s } = await i.read();
        if (r) break;
        yield s;
      }
    } finally {
      await i.cancel();
    }
  },
  w0 = (n, i, r, s) => {
    const c = gE(n, i);
    let d = 0,
      p,
      y = (b) => {
        p || ((p = !0), s && s(b));
      };
    return new ReadableStream(
      {
        async pull(b) {
          try {
            const { done: g, value: w } = await c.next();
            if (g) {
              y(), b.close();
              return;
            }
            let O = w.byteLength;
            if (r) {
              let N = (d += O);
              r(N);
            }
            b.enqueue(new Uint8Array(w));
          } catch (g) {
            throw (y(g), g);
          }
        },
        cancel(b) {
          return y(b), c.return();
        },
      },
      { highWaterMark: 2 }
    );
  },
  nf =
    typeof fetch == "function" &&
    typeof Request == "function" &&
    typeof Response == "function",
  Dv = nf && typeof ReadableStream == "function",
  bE =
    nf &&
    (typeof TextEncoder == "function"
      ? (
          (n) => (i) =>
            n.encode(i)
        )(new TextEncoder())
      : async (n) => new Uint8Array(await new Response(n).arrayBuffer())),
  Rv = (n, ...i) => {
    try {
      return !!n(...i);
    } catch {
      return !1;
    }
  },
  yE =
    Dv &&
    Rv(() => {
      let n = !1;
      const i = new Request(Re.origin, {
        body: new ReadableStream(),
        method: "POST",
        get duplex() {
          return (n = !0), "half";
        },
      }).headers.has("Content-Type");
      return n && !i;
    }),
  E0 = 64 * 1024,
  Ch = Dv && Rv(() => j.isReadableStream(new Response("").body)),
  Hc = { stream: Ch && ((n) => n.body) };
nf &&
  ((n) => {
    ["text", "arrayBuffer", "blob", "formData", "stream"].forEach((i) => {
      !Hc[i] &&
        (Hc[i] = j.isFunction(n[i])
          ? (r) => r[i]()
          : (r, s) => {
              throw new _t(
                `Response type '${i}' is not supported`,
                _t.ERR_NOT_SUPPORT,
                s
              );
            });
    });
  })(new Response());
const wE = async (n) => {
    if (n == null) return 0;
    if (j.isBlob(n)) return n.size;
    if (j.isSpecCompliantForm(n))
      return (
        await new Request(Re.origin, { method: "POST", body: n }).arrayBuffer()
      ).byteLength;
    if (j.isArrayBufferView(n) || j.isArrayBuffer(n)) return n.byteLength;
    if ((j.isURLSearchParams(n) && (n = n + ""), j.isString(n)))
      return (await bE(n)).byteLength;
  },
  EE = async (n, i) => {
    const r = j.toFiniteNumber(n.getContentLength());
    return r ?? wE(i);
  },
  _E =
    nf &&
    (async (n) => {
      let {
        url: i,
        method: r,
        data: s,
        signal: c,
        cancelToken: d,
        timeout: p,
        onDownloadProgress: y,
        onUploadProgress: b,
        responseType: g,
        headers: w,
        withCredentials: O = "same-origin",
        fetchOptions: N,
      } = Nv(n);
      g = g ? (g + "").toLowerCase() : "text";
      let q = mE([c, d && d.toAbortSignal()], p),
        x;
      const z =
        q &&
        q.unsubscribe &&
        (() => {
          q.unsubscribe();
        });
      let M;
      try {
        if (
          b &&
          yE &&
          r !== "get" &&
          r !== "head" &&
          (M = await EE(w, s)) !== 0
        ) {
          let Z = new Request(i, { method: "POST", body: s, duplex: "half" }),
            rt;
          if (
            (j.isFormData(s) &&
              (rt = Z.headers.get("content-type")) &&
              w.setContentType(rt),
            Z.body)
          ) {
            const [ut, bt] = v0(M, zc(b0(b)));
            s = w0(Z.body, E0, ut, bt);
          }
        }
        j.isString(O) || (O = O ? "include" : "omit");
        const L = "credentials" in Request.prototype;
        x = new Request(i, {
          ...N,
          signal: q,
          method: r.toUpperCase(),
          headers: w.normalize().toJSON(),
          body: s,
          duplex: "half",
          credentials: L ? O : void 0,
        });
        let I = await fetch(x, N);
        const J = Ch && (g === "stream" || g === "response");
        if (Ch && (y || (J && z))) {
          const Z = {};
          ["status", "statusText", "headers"].forEach((ot) => {
            Z[ot] = I[ot];
          });
          const rt = j.toFiniteNumber(I.headers.get("content-length")),
            [ut, bt] = (y && v0(rt, zc(b0(y), !0))) || [];
          I = new Response(
            w0(I.body, E0, ut, () => {
              bt && bt(), z && z();
            }),
            Z
          );
        }
        g = g || "text";
        let et = await Hc[j.findKey(Hc, g) || "text"](I, n);
        return (
          !J && z && z(),
          await new Promise((Z, rt) => {
            Ov(Z, rt, {
              data: et,
              headers: Je.from(I.headers),
              status: I.status,
              statusText: I.statusText,
              config: n,
              request: x,
            });
          })
        );
      } catch (L) {
        throw (
          (z && z(),
          L && L.name === "TypeError" && /Load failed|fetch/i.test(L.message)
            ? Object.assign(new _t("Network Error", _t.ERR_NETWORK, n, x), {
                cause: L.cause || L,
              })
            : _t.from(L, L && L.code, n, x))
        );
      }
    }),
  Nh = { http: k1, xhr: hE, fetch: _E };
j.forEach(Nh, (n, i) => {
  if (n) {
    try {
      Object.defineProperty(n, "name", { value: i });
    } catch {}
    Object.defineProperty(n, "adapterName", { value: i });
  }
});
const _0 = (n) => `- ${n}`,
  SE = (n) => j.isFunction(n) || n === null || n === !1,
  Mv = {
    getAdapter: (n) => {
      n = j.isArray(n) ? n : [n];
      const { length: i } = n;
      let r, s;
      const c = {};
      for (let d = 0; d < i; d++) {
        r = n[d];
        let p;
        if (
          ((s = r),
          !SE(r) && ((s = Nh[(p = String(r)).toLowerCase()]), s === void 0))
        )
          throw new _t(`Unknown adapter '${p}'`);
        if (s) break;
        c[p || "#" + d] = s;
      }
      if (!s) {
        const d = Object.entries(c).map(
          ([y, b]) =>
            `adapter ${y} ` +
            (b === !1
              ? "is not supported by the environment"
              : "is not available in the build")
        );
        let p = i
          ? d.length > 1
            ? `since :
` +
              d.map(_0).join(`
`)
            : " " + _0(d[0])
          : "as no adapter specified";
        throw new _t(
          "There is no suitable adapter to dispatch the request " + p,
          "ERR_NOT_SUPPORT"
        );
      }
      return s;
    },
    adapters: Nh,
  };
function yh(n) {
  if (
    (n.cancelToken && n.cancelToken.throwIfRequested(),
    n.signal && n.signal.aborted)
  )
    throw new Yr(null, n);
}
function S0(n) {
  return (
    yh(n),
    (n.headers = Je.from(n.headers)),
    (n.data = bh.call(n, n.transformRequest)),
    ["post", "put", "patch"].indexOf(n.method) !== -1 &&
      n.headers.setContentType("application/x-www-form-urlencoded", !1),
    Mv.getAdapter(n.adapter || xo.adapter)(n).then(
      function (s) {
        return (
          yh(n),
          (s.data = bh.call(n, n.transformResponse, s)),
          (s.headers = Je.from(s.headers)),
          s
        );
      },
      function (s) {
        return (
          xv(s) ||
            (yh(n),
            s &&
              s.response &&
              ((s.response.data = bh.call(n, n.transformResponse, s.response)),
              (s.response.headers = Je.from(s.response.headers)))),
          Promise.reject(s)
        );
      }
    )
  );
}
const Lv = "1.10.0",
  af = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach(
  (n, i) => {
    af[n] = function (s) {
      return typeof s === n || "a" + (i < 1 ? "n " : " ") + n;
    };
  }
);
const A0 = {};
af.transitional = function (i, r, s) {
  function c(d, p) {
    return (
      "[Axios v" +
      Lv +
      "] Transitional option '" +
      d +
      "'" +
      p +
      (s ? ". " + s : "")
    );
  }
  return (d, p, y) => {
    if (i === !1)
      throw new _t(
        c(p, " has been removed" + (r ? " in " + r : "")),
        _t.ERR_DEPRECATED
      );
    return (
      r &&
        !A0[p] &&
        ((A0[p] = !0),
        console.warn(
          c(
            p,
            " has been deprecated since v" +
              r +
              " and will be removed in the near future"
          )
        )),
      i ? i(d, p, y) : !0
    );
  };
};
af.spelling = function (i) {
  return (r, s) => (console.warn(`${s} is likely a misspelling of ${i}`), !0);
};
function AE(n, i, r) {
  if (typeof n != "object")
    throw new _t("options must be an object", _t.ERR_BAD_OPTION_VALUE);
  const s = Object.keys(n);
  let c = s.length;
  for (; c-- > 0; ) {
    const d = s[c],
      p = i[d];
    if (p) {
      const y = n[d],
        b = y === void 0 || p(y, d, n);
      if (b !== !0)
        throw new _t("option " + d + " must be " + b, _t.ERR_BAD_OPTION_VALUE);
      continue;
    }
    if (r !== !0) throw new _t("Unknown option " + d, _t.ERR_BAD_OPTION);
  }
}
const Rc = { assertOptions: AE, validators: af },
  pa = Rc.validators;
let El = class {
  constructor(i) {
    (this.defaults = i || {}),
      (this.interceptors = { request: new p0(), response: new p0() });
  }
  async request(i, r) {
    try {
      return await this._request(i, r);
    } catch (s) {
      if (s instanceof Error) {
        let c = {};
        Error.captureStackTrace
          ? Error.captureStackTrace(c)
          : (c = new Error());
        const d = c.stack ? c.stack.replace(/^.+\n/, "") : "";
        try {
          s.stack
            ? d &&
              !String(s.stack).endsWith(d.replace(/^.+\n.+\n/, "")) &&
              (s.stack +=
                `
` + d)
            : (s.stack = d);
        } catch {}
      }
      throw s;
    }
  }
  _request(i, r) {
    typeof i == "string" ? ((r = r || {}), (r.url = i)) : (r = i || {}),
      (r = xl(this.defaults, r));
    const { transitional: s, paramsSerializer: c, headers: d } = r;
    s !== void 0 &&
      Rc.assertOptions(
        s,
        {
          silentJSONParsing: pa.transitional(pa.boolean),
          forcedJSONParsing: pa.transitional(pa.boolean),
          clarifyTimeoutError: pa.transitional(pa.boolean),
        },
        !1
      ),
      c != null &&
        (j.isFunction(c)
          ? (r.paramsSerializer = { serialize: c })
          : Rc.assertOptions(
              c,
              { encode: pa.function, serialize: pa.function },
              !0
            )),
      r.allowAbsoluteUrls !== void 0 ||
        (this.defaults.allowAbsoluteUrls !== void 0
          ? (r.allowAbsoluteUrls = this.defaults.allowAbsoluteUrls)
          : (r.allowAbsoluteUrls = !0)),
      Rc.assertOptions(
        r,
        {
          baseUrl: pa.spelling("baseURL"),
          withXsrfToken: pa.spelling("withXSRFToken"),
        },
        !0
      ),
      (r.method = (r.method || this.defaults.method || "get").toLowerCase());
    let p = d && j.merge(d.common, d[r.method]);
    d &&
      j.forEach(
        ["delete", "get", "head", "post", "put", "patch", "common"],
        (x) => {
          delete d[x];
        }
      ),
      (r.headers = Je.concat(p, d));
    const y = [];
    let b = !0;
    this.interceptors.request.forEach(function (z) {
      (typeof z.runWhen == "function" && z.runWhen(r) === !1) ||
        ((b = b && z.synchronous), y.unshift(z.fulfilled, z.rejected));
    });
    const g = [];
    this.interceptors.response.forEach(function (z) {
      g.push(z.fulfilled, z.rejected);
    });
    let w,
      O = 0,
      N;
    if (!b) {
      const x = [S0.bind(this), void 0];
      for (
        x.unshift.apply(x, y),
          x.push.apply(x, g),
          N = x.length,
          w = Promise.resolve(r);
        O < N;

      )
        w = w.then(x[O++], x[O++]);
      return w;
    }
    N = y.length;
    let q = r;
    for (O = 0; O < N; ) {
      const x = y[O++],
        z = y[O++];
      try {
        q = x(q);
      } catch (M) {
        z.call(this, M);
        break;
      }
    }
    try {
      w = S0.call(this, q);
    } catch (x) {
      return Promise.reject(x);
    }
    for (O = 0, N = g.length; O < N; ) w = w.then(g[O++], g[O++]);
    return w;
  }
  getUri(i) {
    i = xl(this.defaults, i);
    const r = Cv(i.baseURL, i.url, i.allowAbsoluteUrls);
    return Sv(r, i.params, i.paramsSerializer);
  }
};
j.forEach(["delete", "get", "head", "options"], function (i) {
  El.prototype[i] = function (r, s) {
    return this.request(
      xl(s || {}, { method: i, url: r, data: (s || {}).data })
    );
  };
});
j.forEach(["post", "put", "patch"], function (i) {
  function r(s) {
    return function (d, p, y) {
      return this.request(
        xl(y || {}, {
          method: i,
          headers: s ? { "Content-Type": "multipart/form-data" } : {},
          url: d,
          data: p,
        })
      );
    };
  }
  (El.prototype[i] = r()), (El.prototype[i + "Form"] = r(!0));
});
let TE = class Bv {
  constructor(i) {
    if (typeof i != "function")
      throw new TypeError("executor must be a function.");
    let r;
    this.promise = new Promise(function (d) {
      r = d;
    });
    const s = this;
    this.promise.then((c) => {
      if (!s._listeners) return;
      let d = s._listeners.length;
      for (; d-- > 0; ) s._listeners[d](c);
      s._listeners = null;
    }),
      (this.promise.then = (c) => {
        let d;
        const p = new Promise((y) => {
          s.subscribe(y), (d = y);
        }).then(c);
        return (
          (p.cancel = function () {
            s.unsubscribe(d);
          }),
          p
        );
      }),
      i(function (d, p, y) {
        s.reason || ((s.reason = new Yr(d, p, y)), r(s.reason));
      });
  }
  throwIfRequested() {
    if (this.reason) throw this.reason;
  }
  subscribe(i) {
    if (this.reason) {
      i(this.reason);
      return;
    }
    this._listeners ? this._listeners.push(i) : (this._listeners = [i]);
  }
  unsubscribe(i) {
    if (!this._listeners) return;
    const r = this._listeners.indexOf(i);
    r !== -1 && this._listeners.splice(r, 1);
  }
  toAbortSignal() {
    const i = new AbortController(),
      r = (s) => {
        i.abort(s);
      };
    return (
      this.subscribe(r),
      (i.signal.unsubscribe = () => this.unsubscribe(r)),
      i.signal
    );
  }
  static source() {
    let i;
    return {
      token: new Bv(function (c) {
        i = c;
      }),
      cancel: i,
    };
  }
};
function xE(n) {
  return function (r) {
    return n.apply(null, r);
  };
}
function OE(n) {
  return j.isObject(n) && n.isAxiosError === !0;
}
const Dh = {
  Continue: 100,
  SwitchingProtocols: 101,
  Processing: 102,
  EarlyHints: 103,
  Ok: 200,
  Created: 201,
  Accepted: 202,
  NonAuthoritativeInformation: 203,
  NoContent: 204,
  ResetContent: 205,
  PartialContent: 206,
  MultiStatus: 207,
  AlreadyReported: 208,
  ImUsed: 226,
  MultipleChoices: 300,
  MovedPermanently: 301,
  Found: 302,
  SeeOther: 303,
  NotModified: 304,
  UseProxy: 305,
  Unused: 306,
  TemporaryRedirect: 307,
  PermanentRedirect: 308,
  BadRequest: 400,
  Unauthorized: 401,
  PaymentRequired: 402,
  Forbidden: 403,
  NotFound: 404,
  MethodNotAllowed: 405,
  NotAcceptable: 406,
  ProxyAuthenticationRequired: 407,
  RequestTimeout: 408,
  Conflict: 409,
  Gone: 410,
  LengthRequired: 411,
  PreconditionFailed: 412,
  PayloadTooLarge: 413,
  UriTooLong: 414,
  UnsupportedMediaType: 415,
  RangeNotSatisfiable: 416,
  ExpectationFailed: 417,
  ImATeapot: 418,
  MisdirectedRequest: 421,
  UnprocessableEntity: 422,
  Locked: 423,
  FailedDependency: 424,
  TooEarly: 425,
  UpgradeRequired: 426,
  PreconditionRequired: 428,
  TooManyRequests: 429,
  RequestHeaderFieldsTooLarge: 431,
  UnavailableForLegalReasons: 451,
  InternalServerError: 500,
  NotImplemented: 501,
  BadGateway: 502,
  ServiceUnavailable: 503,
  GatewayTimeout: 504,
  HttpVersionNotSupported: 505,
  VariantAlsoNegotiates: 506,
  InsufficientStorage: 507,
  LoopDetected: 508,
  NotExtended: 510,
  NetworkAuthenticationRequired: 511,
};
Object.entries(Dh).forEach(([n, i]) => {
  Dh[i] = n;
});
function zv(n) {
  const i = new El(n),
    r = fv(El.prototype.request, i);
  return (
    j.extend(r, El.prototype, i, { allOwnKeys: !0 }),
    j.extend(r, i, null, { allOwnKeys: !0 }),
    (r.create = function (c) {
      return zv(xl(n, c));
    }),
    r
  );
}
const Xt = zv(xo);
Xt.Axios = El;
Xt.CanceledError = Yr;
Xt.CancelToken = TE;
Xt.isCancel = xv;
Xt.VERSION = Lv;
Xt.toFormData = ef;
Xt.AxiosError = _t;
Xt.Cancel = Xt.CanceledError;
Xt.all = function (i) {
  return Promise.all(i);
};
Xt.spread = xE;
Xt.isAxiosError = OE;
Xt.mergeConfig = xl;
Xt.AxiosHeaders = Je;
Xt.formToJSON = (n) => Tv(j.isHTMLForm(n) ? new FormData(n) : n);
Xt.getAdapter = Mv.getAdapter;
Xt.HttpStatusCode = Dh;
Xt.default = Xt;
const {
  Axios: BT,
  AxiosError: zT,
  CanceledError: HT,
  isCancel: kT,
  CancelToken: jT,
  VERSION: UT,
  all: $T,
  Cancel: qT,
  isAxiosError: VT,
  spread: YT,
  toFormData: PT,
  AxiosHeaders: GT,
  HttpStatusCode: KT,
  formToJSON: XT,
  getAdapter: QT,
  mergeConfig: ZT,
} = Xt;
var Hv = {
    color: void 0,
    size: void 0,
    className: void 0,
    style: void 0,
    attr: void 0,
  },
  T0 = wl.createContext && wl.createContext(Hv),
  CE = ["attr", "size", "title"];
function NE(n, i) {
  if (n == null) return {};
  var r = DE(n, i),
    s,
    c;
  if (Object.getOwnPropertySymbols) {
    var d = Object.getOwnPropertySymbols(n);
    for (c = 0; c < d.length; c++)
      (s = d[c]),
        !(i.indexOf(s) >= 0) &&
          Object.prototype.propertyIsEnumerable.call(n, s) &&
          (r[s] = n[s]);
  }
  return r;
}
function DE(n, i) {
  if (n == null) return {};
  var r = {};
  for (var s in n)
    if (Object.prototype.hasOwnProperty.call(n, s)) {
      if (i.indexOf(s) >= 0) continue;
      r[s] = n[s];
    }
  return r;
}
function kc() {
  return (
    (kc = Object.assign
      ? Object.assign.bind()
      : function (n) {
          for (var i = 1; i < arguments.length; i++) {
            var r = arguments[i];
            for (var s in r)
              Object.prototype.hasOwnProperty.call(r, s) && (n[s] = r[s]);
          }
          return n;
        }),
    kc.apply(this, arguments)
  );
}
function x0(n, i) {
  var r = Object.keys(n);
  if (Object.getOwnPropertySymbols) {
    var s = Object.getOwnPropertySymbols(n);
    i &&
      (s = s.filter(function (c) {
        return Object.getOwnPropertyDescriptor(n, c).enumerable;
      })),
      r.push.apply(r, s);
  }
  return r;
}
function jc(n) {
  for (var i = 1; i < arguments.length; i++) {
    var r = arguments[i] != null ? arguments[i] : {};
    i % 2
      ? x0(Object(r), !0).forEach(function (s) {
          RE(n, s, r[s]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(r))
      : x0(Object(r)).forEach(function (s) {
          Object.defineProperty(n, s, Object.getOwnPropertyDescriptor(r, s));
        });
  }
  return n;
}
function RE(n, i, r) {
  return (
    (i = ME(i)),
    i in n
      ? Object.defineProperty(n, i, {
          value: r,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (n[i] = r),
    n
  );
}
function ME(n) {
  var i = LE(n, "string");
  return typeof i == "symbol" ? i : i + "";
}
function LE(n, i) {
  if (typeof n != "object" || !n) return n;
  var r = n[Symbol.toPrimitive];
  if (r !== void 0) {
    var s = r.call(n, i);
    if (typeof s != "object") return s;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (i === "string" ? String : Number)(n);
}
function kv(n) {
  return (
    n &&
    n.map((i, r) =>
      wl.createElement(i.tag, jc({ key: r }, i.attr), kv(i.child))
    )
  );
}
function tn(n) {
  return (i) =>
    wl.createElement(BE, kc({ attr: jc({}, n.attr) }, i), kv(n.child));
}
function BE(n) {
  var i = (r) => {
    var { attr: s, size: c, title: d } = n,
      p = NE(n, CE),
      y = c || r.size || "1em",
      b;
    return (
      r.className && (b = r.className),
      n.className && (b = (b ? b + " " : "") + n.className),
      wl.createElement(
        "svg",
        kc(
          { stroke: "currentColor", fill: "currentColor", strokeWidth: "0" },
          r.attr,
          s,
          p,
          {
            className: b,
            style: jc(jc({ color: n.color || r.color }, r.style), n.style),
            height: y,
            width: y,
            xmlns: "http://www.w3.org/2000/svg",
          }
        ),
        d && wl.createElement("title", null, d),
        n.children
      )
    );
  };
  return T0 !== void 0
    ? wl.createElement(T0.Consumer, null, (r) => i(r))
    : i(Hv);
}
function jv(n) {
  return tn({
    attr: { viewBox: "0 0 24 24" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M15.28 5.22a.75.75 0 0 1 0 1.06L9.56 12l5.72 5.72a.749.749 0 0 1-.326 1.275.749.749 0 0 1-.734-.215l-6.25-6.25a.75.75 0 0 1 0-1.06l6.25-6.25a.75.75 0 0 1 1.06 0Z",
        },
        child: [],
      },
    ],
  })(n);
}
function zE(n) {
  return tn({
    attr: { viewBox: "0 0 24 24" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M8.72 18.78a.75.75 0 0 1 0-1.06L14.44 12 8.72 6.28a.751.751 0 0 1 .018-1.042.751.751 0 0 1 1.042-.018l6.25 6.25a.75.75 0 0 1 0 1.06l-6.25 6.25a.75.75 0 0 1-1.06 0Z",
        },
        child: [],
      },
    ],
  })(n);
}
function HE(n) {
  return tn({
    attr: { viewBox: "0 0 24 24" },
    child: [
      {
        tag: "g",
        attr: { id: "Badge_Dollar" },
        child: [
          {
            tag: "g",
            attr: {},
            child: [
              {
                tag: "path",
                attr: {
                  d: "M12,21.953c-.895,0-1.545-.743-2.118-1.4a3.671,3.671,0,0,0-1.033-.946,3.8,3.8,0,0,0-1.466-.077,3.012,3.012,0,0,1-2.421-.494,3.014,3.014,0,0,1-.494-2.421,3.82,3.82,0,0,0-.077-1.466,3.671,3.671,0,0,0-.946-1.033c-.655-.573-1.4-1.222-1.4-2.118s.743-1.545,1.4-2.118a3.66,3.66,0,0,0,.946-1.034,3.815,3.815,0,0,0,.077-1.465,3.012,3.012,0,0,1,.494-2.421,3.015,3.015,0,0,1,2.422-.5A3.794,3.794,0,0,0,8.849,4.39a3.666,3.666,0,0,0,1.033-.945c.573-.655,1.223-1.4,2.118-1.4s1.545.742,2.118,1.4a3.66,3.66,0,0,0,1.034.946,3.807,3.807,0,0,0,1.464.077,3.018,3.018,0,0,1,2.422.5,3.012,3.012,0,0,1,.5,2.422,3.81,3.81,0,0,0,.077,1.464,3.66,3.66,0,0,0,.946,1.034c.655.573,1.4,1.223,1.4,2.118s-.743,1.545-1.4,2.118a3.666,3.666,0,0,0-.945,1.033,3.815,3.815,0,0,0-.077,1.465,3.012,3.012,0,0,1-.5,2.422,3.018,3.018,0,0,1-2.421.494,3.818,3.818,0,0,0-1.465.077,3.673,3.673,0,0,0-1.034.946C13.545,21.21,12.9,21.953,12,21.953ZM8.093,18.5a2.952,2.952,0,0,1,1.138.183,4.233,4.233,0,0,1,1.4,1.21c.454.52.924,1.057,1.365,1.057s.911-.537,1.366-1.057a4.225,4.225,0,0,1,1.4-1.21,4.365,4.365,0,0,1,1.908-.152c.672.041,1.366.085,1.653-.2s.245-.982.2-1.653a4.387,4.387,0,0,1,.152-1.909,4.241,4.241,0,0,1,1.209-1.4c.52-.454,1.057-.924,1.057-1.365s-.537-.911-1.057-1.365a4.234,4.234,0,0,1-1.209-1.4,4.381,4.381,0,0,1-.152-1.908c.041-.671.084-1.365-.2-1.653s-.982-.246-1.653-.2a4.384,4.384,0,0,1-1.908-.152,4.234,4.234,0,0,1-1.4-1.209c-.454-.52-.924-1.057-1.365-1.057s-.911.537-1.365,1.057a4.241,4.241,0,0,1-1.4,1.209,4.417,4.417,0,0,1-1.909.152c-.67-.041-1.364-.084-1.653.2s-.244.981-.2,1.652A4.37,4.37,0,0,1,5.314,9.23a4.226,4.226,0,0,1-1.21,1.4c-.52.454-1.057.925-1.057,1.365s.537.911,1.057,1.366a4.238,4.238,0,0,1,1.21,1.4,4.378,4.378,0,0,1,.152,1.91c-.041.672-.084,1.366.2,1.653s.98.245,1.653.2C7.578,18.519,7.838,18.5,8.093,18.5Z",
                },
                child: [],
              },
              {
                tag: "path",
                attr: {
                  d: "M14.5,13.5a2.006,2.006,0,0,1-2,2v1.01A.5.5,0,0,1,12,17a.492.492,0,0,1-.5-.49V15.5h-1.25a.5.5,0,0,1-.5-.5.5.5,0,0,1,.5-.5H12.5a1,1,0,1,0,0-2h-1a2,2,0,0,1,0-4V7.453A.473.473,0,0,1,12,7a.48.48,0,0,1,.5.45V8.5h1.25a.5.5,0,0,1,.5.5.508.508,0,0,1-.5.5H11.5a1,1,0,0,0,0,2h1A2,2,0,0,1,14.5,13.5Z",
                },
                child: [],
              },
            ],
          },
        ],
      },
    ],
  })(n);
}
function Uv(n) {
  return tn({
    attr: { viewBox: "0 0 24 24" },
    child: [
      {
        tag: "g",
        attr: { id: "Image_On" },
        child: [
          {
            tag: "g",
            attr: {},
            child: [
              {
                tag: "path",
                attr: {
                  d: "M18.435,3.06H5.565a2.5,2.5,0,0,0-2.5,2.5V18.44a2.507,2.507,0,0,0,2.5,2.5h12.87a2.507,2.507,0,0,0,2.5-2.5V5.56A2.5,2.5,0,0,0,18.435,3.06ZM4.065,5.56a1.5,1.5,0,0,1,1.5-1.5h12.87a1.5,1.5,0,0,1,1.5,1.5v8.66l-3.88-3.88a1.509,1.509,0,0,0-2.12,0l-4.56,4.57a.513.513,0,0,1-.71,0l-.56-.56a1.522,1.522,0,0,0-2.12,0l-1.92,1.92Zm15.87,12.88a1.5,1.5,0,0,1-1.5,1.5H5.565a1.5,1.5,0,0,1-1.5-1.5v-.75L6.7,15.06a.5.5,0,0,1,.35-.14.524.524,0,0,1,.36.14l.55.56a1.509,1.509,0,0,0,2.12,0l4.57-4.57a.5.5,0,0,1,.71,0l4.58,4.58Z",
                },
                child: [],
              },
              {
                tag: "path",
                attr: {
                  d: "M8.062,10.565a2.5,2.5,0,1,1,2.5-2.5A2.5,2.5,0,0,1,8.062,10.565Zm0-4a1.5,1.5,0,1,0,1.5,1.5A1.5,1.5,0,0,0,8.062,6.565Z",
                },
                child: [],
              },
            ],
          },
        ],
      },
    ],
  })(n);
}
const kE = ({ item: n }) =>
  k.jsx(k.Fragment, {
    children: k.jsxs("div", {
      className:
        "rounded-2xl p-4 m-2 w-[300px] flex flex-col justify-between gap-3 bg-cyan-50 shadow-2xl",
      children: [
        k.jsxs("h5", {
          className:
            "text-center hover:scale-130 transition duration-300 relative",
          children: [
            k.jsx(vo, {
              to: `/Products/${n.id}`,
              style: { textDecoration: "none", color: "#004466" },
              children: n.title.substr(0, 10),
            }),
            k.jsx(zE, { className: "absolute top-1 right-12" }),
          ],
        }),
        k.jsxs("h5", {
          style: { color: "#004466" },
          className: "text-center",
          children: [
            n.price,
            k.jsx(HE, { className: "inline-block mx-1 mb-1 size-7" }),
          ],
        }),
        k.jsx("p", {
          className: "text-[14px]",
          style: { color: "#004466" },
          children: n.description.substr(0, 60),
        }),
        k.jsx("img", {
          src: n.image,
          className:
            "w-30 h-40 object-contain block mx-auto hover:scale-120 transition duration-300",
        }),
      ],
    }),
  });
function jE(n) {
  return tn({
    attr: { viewBox: "0 0 512 512" },
    child: [
      {
        tag: "path",
        attr: {
          fill: "none",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: "32",
          d: "M256 112v288m144-144H112",
        },
        child: [],
      },
    ],
  })(n);
}
function UE(n) {
  return tn({
    attr: { viewBox: "0 0 512 512" },
    child: [
      {
        tag: "path",
        attr: {
          fill: "none",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: "32",
          d: "M384 224v184a40 40 0 0 1-40 40H104a40 40 0 0 1-40-40V168a40 40 0 0 1 40-40h167.48",
        },
        child: [],
      },
      {
        tag: "path",
        attr: {
          d: "M459.94 53.25a16.06 16.06 0 0 0-23.22-.56L424.35 65a8 8 0 0 0 0 11.31l11.34 11.32a8 8 0 0 0 11.34 0l12.06-12c6.1-6.09 6.67-16.01.85-22.38zM399.34 90 218.82 270.2a9 9 0 0 0-2.31 3.93L208.16 299a3.91 3.91 0 0 0 4.86 4.86l24.85-8.35a9 9 0 0 0 3.93-2.31L422 112.66a9 9 0 0 0 0-12.66l-9.95-10a9 9 0 0 0-12.71 0z",
        },
        child: [],
      },
    ],
  })(n);
}
/*!
 * sweetalert2 v11.22.2
 * Released under the MIT License.
 */ function $v(n, i, r) {
  if (typeof n == "function" ? n === i : n.has(i))
    return arguments.length < 3 ? i : r;
  throw new TypeError("Private element is not present on this object");
}
function $E(n, i) {
  if (i.has(n))
    throw new TypeError(
      "Cannot initialize the same private elements twice on an object"
    );
}
function O0(n, i) {
  return n.get($v(n, i));
}
function qE(n, i, r) {
  $E(n, i), i.set(n, r);
}
function VE(n, i, r) {
  return n.set($v(n, i), r), r;
}
const YE = 100,
  ht = {},
  PE = () => {
    ht.previousActiveElement instanceof HTMLElement
      ? (ht.previousActiveElement.focus(), (ht.previousActiveElement = null))
      : document.body && document.body.focus();
  },
  GE = (n) =>
    new Promise((i) => {
      if (!n) return i();
      const r = window.scrollX,
        s = window.scrollY;
      (ht.restoreFocusTimeout = setTimeout(() => {
        PE(), i();
      }, YE)),
        window.scrollTo(r, s);
    }),
  qv = "swal2-",
  KE = [
    "container",
    "shown",
    "height-auto",
    "iosfix",
    "popup",
    "modal",
    "no-backdrop",
    "no-transition",
    "toast",
    "toast-shown",
    "show",
    "hide",
    "close",
    "title",
    "html-container",
    "actions",
    "confirm",
    "deny",
    "cancel",
    "footer",
    "icon",
    "icon-content",
    "image",
    "input",
    "file",
    "range",
    "select",
    "radio",
    "checkbox",
    "label",
    "textarea",
    "inputerror",
    "input-label",
    "validation-message",
    "progress-steps",
    "active-progress-step",
    "progress-step",
    "progress-step-line",
    "loader",
    "loading",
    "styled",
    "top",
    "top-start",
    "top-end",
    "top-left",
    "top-right",
    "center",
    "center-start",
    "center-end",
    "center-left",
    "center-right",
    "bottom",
    "bottom-start",
    "bottom-end",
    "bottom-left",
    "bottom-right",
    "grow-row",
    "grow-column",
    "grow-fullscreen",
    "rtl",
    "timer-progress-bar",
    "timer-progress-bar-container",
    "scrollbar-measure",
    "icon-success",
    "icon-warning",
    "icon-info",
    "icon-question",
    "icon-error",
    "draggable",
    "dragging",
  ],
  $ = KE.reduce((n, i) => ((n[i] = qv + i), n), {}),
  XE = ["success", "warning", "info", "question", "error"],
  Uc = XE.reduce((n, i) => ((n[i] = qv + i), n), {}),
  Vv = "SweetAlert2:",
  Kh = (n) => n.charAt(0).toUpperCase() + n.slice(1),
  Ue = (n) => {
    console.warn(`${Vv} ${typeof n == "object" ? n.join(" ") : n}`);
  },
  Rl = (n) => {
    console.error(`${Vv} ${n}`);
  },
  C0 = [],
  QE = (n) => {
    C0.includes(n) || (C0.push(n), Ue(n));
  },
  Yv = (n, i = null) => {
    QE(
      `"${n}" is deprecated and will be removed in the next major release.${
        i ? ` Use "${i}" instead.` : ""
      }`
    );
  },
  lf = (n) => (typeof n == "function" ? n() : n),
  Xh = (n) => n && typeof n.toPromise == "function",
  Oo = (n) => (Xh(n) ? n.toPromise() : Promise.resolve(n)),
  Qh = (n) => n && Promise.resolve(n) === n,
  $e = () => document.body.querySelector(`.${$.container}`),
  Co = (n) => {
    const i = $e();
    return i ? i.querySelector(n) : null;
  },
  yn = (n) => Co(`.${n}`),
  Bt = () => yn($.popup),
  Pr = () => yn($.icon),
  ZE = () => yn($["icon-content"]),
  Pv = () => yn($.title),
  Zh = () => yn($["html-container"]),
  Gv = () => yn($.image),
  Ih = () => yn($["progress-steps"]),
  rf = () => yn($["validation-message"]),
  ya = () => Co(`.${$.actions} .${$.confirm}`),
  Gr = () => Co(`.${$.actions} .${$.cancel}`),
  Ml = () => Co(`.${$.actions} .${$.deny}`),
  IE = () => yn($["input-label"]),
  Kr = () => Co(`.${$.loader}`),
  No = () => yn($.actions),
  Kv = () => yn($.footer),
  sf = () => yn($["timer-progress-bar"]),
  Fh = () => yn($.close),
  FE = `
  a[href],
  area[href],
  input:not([disabled]),
  select:not([disabled]),
  textarea:not([disabled]),
  button:not([disabled]),
  iframe,
  object,
  embed,
  [tabindex="0"],
  [contenteditable],
  audio[controls],
  video[controls],
  summary
`,
  Jh = () => {
    const n = Bt();
    if (!n) return [];
    const i = n.querySelectorAll(
        '[tabindex]:not([tabindex="-1"]):not([tabindex="0"])'
      ),
      r = Array.from(i).sort((d, p) => {
        const y = parseInt(d.getAttribute("tabindex") || "0"),
          b = parseInt(p.getAttribute("tabindex") || "0");
        return y > b ? 1 : y < b ? -1 : 0;
      }),
      s = n.querySelectorAll(FE),
      c = Array.from(s).filter((d) => d.getAttribute("tabindex") !== "-1");
    return [...new Set(r.concat(c))].filter((d) => We(d));
  },
  Wh = () =>
    ti(document.body, $.shown) &&
    !ti(document.body, $["toast-shown"]) &&
    !ti(document.body, $["no-backdrop"]),
  of = () => {
    const n = Bt();
    return n ? ti(n, $.toast) : !1;
  },
  JE = () => {
    const n = Bt();
    return n ? n.hasAttribute("data-loading") : !1;
  },
  wn = (n, i) => {
    if (((n.textContent = ""), i)) {
      const s = new DOMParser().parseFromString(i, "text/html"),
        c = s.querySelector("head");
      c &&
        Array.from(c.childNodes).forEach((p) => {
          n.appendChild(p);
        });
      const d = s.querySelector("body");
      d &&
        Array.from(d.childNodes).forEach((p) => {
          p instanceof HTMLVideoElement || p instanceof HTMLAudioElement
            ? n.appendChild(p.cloneNode(!0))
            : n.appendChild(p);
        });
    }
  },
  ti = (n, i) => {
    if (!i) return !1;
    const r = i.split(/\s+/);
    for (let s = 0; s < r.length; s++)
      if (!n.classList.contains(r[s])) return !1;
    return !0;
  },
  WE = (n, i) => {
    Array.from(n.classList).forEach((r) => {
      !Object.values($).includes(r) &&
        !Object.values(Uc).includes(r) &&
        !Object.values(i.showClass || {}).includes(r) &&
        n.classList.remove(r);
    });
  },
  pn = (n, i, r) => {
    if ((WE(n, i), !i.customClass)) return;
    const s = i.customClass[r];
    if (s) {
      if (typeof s != "string" && !s.forEach) {
        Ue(
          `Invalid type of customClass.${r}! Expected string or iterable object, got "${typeof s}"`
        );
        return;
      }
      Ht(n, s);
    }
  },
  uf = (n, i) => {
    if (!i) return null;
    switch (i) {
      case "select":
      case "textarea":
      case "file":
        return n.querySelector(`.${$.popup} > .${$[i]}`);
      case "checkbox":
        return n.querySelector(`.${$.popup} > .${$.checkbox} input`);
      case "radio":
        return (
          n.querySelector(`.${$.popup} > .${$.radio} input:checked`) ||
          n.querySelector(`.${$.popup} > .${$.radio} input:first-child`)
        );
      case "range":
        return n.querySelector(`.${$.popup} > .${$.range} input`);
      default:
        return n.querySelector(`.${$.popup} > .${$.input}`);
    }
  },
  Xv = (n) => {
    if ((n.focus(), n.type !== "file")) {
      const i = n.value;
      (n.value = ""), (n.value = i);
    }
  },
  Qv = (n, i, r) => {
    !n ||
      !i ||
      (typeof i == "string" && (i = i.split(/\s+/).filter(Boolean)),
      i.forEach((s) => {
        Array.isArray(n)
          ? n.forEach((c) => {
              r ? c.classList.add(s) : c.classList.remove(s);
            })
          : r
          ? n.classList.add(s)
          : n.classList.remove(s);
      }));
  },
  Ht = (n, i) => {
    Qv(n, i, !0);
  },
  Bn = (n, i) => {
    Qv(n, i, !1);
  },
  ki = (n, i) => {
    const r = Array.from(n.children);
    for (let s = 0; s < r.length; s++) {
      const c = r[s];
      if (c instanceof HTMLElement && ti(c, i)) return c;
    }
  },
  _l = (n, i, r) => {
    r === `${parseInt(r)}` && (r = parseInt(r)),
      r || parseInt(r) === 0
        ? n.style.setProperty(i, typeof r == "number" ? `${r}px` : r)
        : n.style.removeProperty(i);
  },
  be = (n, i = "flex") => {
    n && (n.style.display = i);
  },
  Me = (n) => {
    n && (n.style.display = "none");
  },
  tm = (n, i = "block") => {
    n &&
      new MutationObserver(() => {
        Do(n, n.innerHTML, i);
      }).observe(n, { childList: !0, subtree: !0 });
  },
  N0 = (n, i, r, s) => {
    const c = n.querySelector(i);
    c && c.style.setProperty(r, s);
  },
  Do = (n, i, r = "flex") => {
    i ? be(n, r) : Me(n);
  },
  We = (n) =>
    !!(n && (n.offsetWidth || n.offsetHeight || n.getClientRects().length)),
  t_ = () => !We(ya()) && !We(Ml()) && !We(Gr()),
  Rh = (n) => n.scrollHeight > n.clientHeight,
  e_ = (n, i) => {
    let r = n;
    for (; r && r !== i; ) {
      if (Rh(r)) return !0;
      r = r.parentElement;
    }
    return !1;
  },
  Zv = (n) => {
    const i = window.getComputedStyle(n),
      r = parseFloat(i.getPropertyValue("animation-duration") || "0"),
      s = parseFloat(i.getPropertyValue("transition-duration") || "0");
    return r > 0 || s > 0;
  },
  em = (n, i = !1) => {
    const r = sf();
    r &&
      We(r) &&
      (i && ((r.style.transition = "none"), (r.style.width = "100%")),
      setTimeout(() => {
        (r.style.transition = `width ${n / 1e3}s linear`),
          (r.style.width = "0%");
      }, 10));
  },
  n_ = () => {
    const n = sf();
    if (!n) return;
    const i = parseInt(window.getComputedStyle(n).width);
    n.style.removeProperty("transition"), (n.style.width = "100%");
    const r = parseInt(window.getComputedStyle(n).width),
      s = (i / r) * 100;
    n.style.width = `${s}%`;
  },
  a_ = () => typeof window > "u" || typeof document > "u",
  i_ = `
 <div aria-labelledby="${$.title}" aria-describedby="${$["html-container"]}" class="${$.popup}" tabindex="-1">
   <button type="button" class="${$.close}"></button>
   <ul class="${$["progress-steps"]}"></ul>
   <div class="${$.icon}"></div>
   <img class="${$.image}" />
   <h2 class="${$.title}" id="${$.title}"></h2>
   <div class="${$["html-container"]}" id="${$["html-container"]}"></div>
   <input class="${$.input}" id="${$.input}" />
   <input type="file" class="${$.file}" />
   <div class="${$.range}">
     <input type="range" />
     <output></output>
   </div>
   <select class="${$.select}" id="${$.select}"></select>
   <div class="${$.radio}"></div>
   <label class="${$.checkbox}">
     <input type="checkbox" id="${$.checkbox}" />
     <span class="${$.label}"></span>
   </label>
   <textarea class="${$.textarea}" id="${$.textarea}"></textarea>
   <div class="${$["validation-message"]}" id="${$["validation-message"]}"></div>
   <div class="${$.actions}">
     <div class="${$.loader}"></div>
     <button type="button" class="${$.confirm}"></button>
     <button type="button" class="${$.deny}"></button>
     <button type="button" class="${$.cancel}"></button>
   </div>
   <div class="${$.footer}"></div>
   <div class="${$["timer-progress-bar-container"]}">
     <div class="${$["timer-progress-bar"]}"></div>
   </div>
 </div>
`.replace(/(^|\n)\s*/g, ""),
  l_ = () => {
    const n = $e();
    return n
      ? (n.remove(),
        Bn(
          [document.documentElement, document.body],
          [$["no-backdrop"], $["toast-shown"], $["has-column"]]
        ),
        !0)
      : !1;
  },
  bl = () => {
    ht.currentInstance.resetValidationMessage();
  },
  r_ = () => {
    const n = Bt(),
      i = ki(n, $.input),
      r = ki(n, $.file),
      s = n.querySelector(`.${$.range} input`),
      c = n.querySelector(`.${$.range} output`),
      d = ki(n, $.select),
      p = n.querySelector(`.${$.checkbox} input`),
      y = ki(n, $.textarea);
    (i.oninput = bl),
      (r.onchange = bl),
      (d.onchange = bl),
      (p.onchange = bl),
      (y.oninput = bl),
      (s.oninput = () => {
        bl(), (c.value = s.value);
      }),
      (s.onchange = () => {
        bl(), (c.value = s.value);
      });
  },
  s_ = (n) => (typeof n == "string" ? document.querySelector(n) : n),
  o_ = (n) => {
    const i = Bt();
    i.setAttribute("role", n.toast ? "alert" : "dialog"),
      i.setAttribute("aria-live", n.toast ? "polite" : "assertive"),
      n.toast || i.setAttribute("aria-modal", "true");
  },
  u_ = (n) => {
    window.getComputedStyle(n).direction === "rtl" && Ht($e(), $.rtl);
  },
  c_ = (n) => {
    const i = l_();
    if (a_()) {
      Rl("SweetAlert2 requires document to initialize");
      return;
    }
    const r = document.createElement("div");
    (r.className = $.container),
      i && Ht(r, $["no-transition"]),
      wn(r, i_),
      (r.dataset.swal2Theme = n.theme);
    const s = s_(n.target);
    s.appendChild(r),
      n.topLayer && (r.setAttribute("popover", ""), r.showPopover()),
      o_(n),
      u_(s),
      r_();
  },
  nm = (n, i) => {
    n instanceof HTMLElement
      ? i.appendChild(n)
      : typeof n == "object"
      ? f_(n, i)
      : n && wn(i, n);
  },
  f_ = (n, i) => {
    n.jquery ? d_(i, n) : wn(i, n.toString());
  },
  d_ = (n, i) => {
    if (((n.textContent = ""), 0 in i))
      for (let r = 0; r in i; r++) n.appendChild(i[r].cloneNode(!0));
    else n.appendChild(i.cloneNode(!0));
  },
  h_ = (n, i) => {
    const r = No(),
      s = Kr();
    !r ||
      !s ||
      (!i.showConfirmButton && !i.showDenyButton && !i.showCancelButton
        ? Me(r)
        : be(r),
      pn(r, i, "actions"),
      m_(r, s, i),
      wn(s, i.loaderHtml || ""),
      pn(s, i, "loader"));
  };
function m_(n, i, r) {
  const s = ya(),
    c = Ml(),
    d = Gr();
  !s ||
    !c ||
    !d ||
    (Eh(s, "confirm", r),
    Eh(c, "deny", r),
    Eh(d, "cancel", r),
    p_(s, c, d, r),
    r.reverseButtons &&
      (r.toast
        ? (n.insertBefore(d, s), n.insertBefore(c, s))
        : (n.insertBefore(d, i), n.insertBefore(c, i), n.insertBefore(s, i))));
}
function p_(n, i, r, s) {
  if (!s.buttonsStyling) {
    Bn([n, i, r], $.styled);
    return;
  }
  Ht([n, i, r], $.styled),
    s.confirmButtonColor &&
      n.style.setProperty(
        "--swal2-confirm-button-background-color",
        s.confirmButtonColor
      ),
    s.denyButtonColor &&
      i.style.setProperty(
        "--swal2-deny-button-background-color",
        s.denyButtonColor
      ),
    s.cancelButtonColor &&
      r.style.setProperty(
        "--swal2-cancel-button-background-color",
        s.cancelButtonColor
      ),
    wh(n),
    wh(i),
    wh(r);
}
function wh(n) {
  const i = window.getComputedStyle(n);
  if (i.getPropertyValue("--swal2-action-button-focus-box-shadow")) return;
  const r = i.backgroundColor.replace(
    /rgba?\((\d+), (\d+), (\d+).*/,
    "rgba($1, $2, $3, 0.5)"
  );
  n.style.setProperty(
    "--swal2-action-button-focus-box-shadow",
    i.getPropertyValue("--swal2-outline").replace(/ rgba\(.*/, ` ${r}`)
  );
}
function Eh(n, i, r) {
  const s = Kh(i);
  Do(n, r[`show${s}Button`], "inline-block"),
    wn(n, r[`${i}ButtonText`] || ""),
    n.setAttribute("aria-label", r[`${i}ButtonAriaLabel`] || ""),
    (n.className = $[i]),
    pn(n, r, `${i}Button`);
}
const g_ = (n, i) => {
    const r = Fh();
    r &&
      (wn(r, i.closeButtonHtml || ""),
      pn(r, i, "closeButton"),
      Do(r, i.showCloseButton),
      r.setAttribute("aria-label", i.closeButtonAriaLabel || ""));
  },
  v_ = (n, i) => {
    const r = $e();
    r &&
      (b_(r, i.backdrop),
      y_(r, i.position),
      w_(r, i.grow),
      pn(r, i, "container"));
  };
function b_(n, i) {
  typeof i == "string"
    ? (n.style.background = i)
    : i || Ht([document.documentElement, document.body], $["no-backdrop"]);
}
function y_(n, i) {
  i &&
    (i in $
      ? Ht(n, $[i])
      : (Ue('The "position" parameter is not valid, defaulting to "center"'),
        Ht(n, $.center)));
}
function w_(n, i) {
  i && Ht(n, $[`grow-${i}`]);
}
var Qt = { innerParams: new WeakMap(), domCache: new WeakMap() };
const E_ = [
    "input",
    "file",
    "range",
    "select",
    "radio",
    "checkbox",
    "textarea",
  ],
  __ = (n, i) => {
    const r = Bt();
    if (!r) return;
    const s = Qt.innerParams.get(n),
      c = !s || i.input !== s.input;
    E_.forEach((d) => {
      const p = ki(r, $[d]);
      p && (T_(d, i.inputAttributes), (p.className = $[d]), c && Me(p));
    }),
      i.input && (c && S_(i), x_(i));
  },
  S_ = (n) => {
    if (!n.input) return;
    if (!se[n.input]) {
      Rl(
        `Unexpected type of input! Expected ${Object.keys(se).join(
          " | "
        )}, got "${n.input}"`
      );
      return;
    }
    const i = Iv(n.input);
    if (!i) return;
    const r = se[n.input](i, n);
    be(i),
      n.inputAutoFocus &&
        setTimeout(() => {
          Xv(r);
        });
  },
  A_ = (n) => {
    for (let i = 0; i < n.attributes.length; i++) {
      const r = n.attributes[i].name;
      ["id", "type", "value", "style"].includes(r) || n.removeAttribute(r);
    }
  },
  T_ = (n, i) => {
    const r = Bt();
    if (!r) return;
    const s = uf(r, n);
    if (s) {
      A_(s);
      for (const c in i) s.setAttribute(c, i[c]);
    }
  },
  x_ = (n) => {
    if (!n.input) return;
    const i = Iv(n.input);
    i && pn(i, n, "input");
  },
  am = (n, i) => {
    !n.placeholder &&
      i.inputPlaceholder &&
      (n.placeholder = i.inputPlaceholder);
  },
  Ro = (n, i, r) => {
    if (r.inputLabel) {
      const s = document.createElement("label"),
        c = $["input-label"];
      s.setAttribute("for", n.id),
        (s.className = c),
        typeof r.customClass == "object" && Ht(s, r.customClass.inputLabel),
        (s.innerText = r.inputLabel),
        i.insertAdjacentElement("beforebegin", s);
    }
  },
  Iv = (n) => {
    const i = Bt();
    if (i) return ki(i, $[n] || $.input);
  },
  $c = (n, i) => {
    ["string", "number"].includes(typeof i)
      ? (n.value = `${i}`)
      : Qh(i) ||
        Ue(
          `Unexpected type of inputValue! Expected "string", "number" or "Promise", got "${typeof i}"`
        );
  },
  se = {};
se.text =
  se.email =
  se.password =
  se.number =
  se.tel =
  se.url =
  se.search =
  se.date =
  se["datetime-local"] =
  se.time =
  se.week =
  se.month =
    (n, i) => (
      $c(n, i.inputValue), Ro(n, n, i), am(n, i), (n.type = i.input), n
    );
se.file = (n, i) => (Ro(n, n, i), am(n, i), n);
se.range = (n, i) => {
  const r = n.querySelector("input"),
    s = n.querySelector("output");
  return (
    $c(r, i.inputValue), (r.type = i.input), $c(s, i.inputValue), Ro(r, n, i), n
  );
};
se.select = (n, i) => {
  if (((n.textContent = ""), i.inputPlaceholder)) {
    const r = document.createElement("option");
    wn(r, i.inputPlaceholder),
      (r.value = ""),
      (r.disabled = !0),
      (r.selected = !0),
      n.appendChild(r);
  }
  return Ro(n, n, i), n;
};
se.radio = (n) => ((n.textContent = ""), n);
se.checkbox = (n, i) => {
  const r = uf(Bt(), "checkbox");
  (r.value = "1"), (r.checked = !!i.inputValue);
  const s = n.querySelector("span");
  return wn(s, i.inputPlaceholder || i.inputLabel), r;
};
se.textarea = (n, i) => {
  $c(n, i.inputValue), am(n, i), Ro(n, n, i);
  const r = (s) =>
    parseInt(window.getComputedStyle(s).marginLeft) +
    parseInt(window.getComputedStyle(s).marginRight);
  return (
    setTimeout(() => {
      if ("MutationObserver" in window) {
        const s = parseInt(window.getComputedStyle(Bt()).width),
          c = () => {
            if (!document.body.contains(n)) return;
            const d = n.offsetWidth + r(n);
            d > s ? (Bt().style.width = `${d}px`) : _l(Bt(), "width", i.width);
          };
        new MutationObserver(c).observe(n, {
          attributes: !0,
          attributeFilter: ["style"],
        });
      }
    }),
    n
  );
};
const O_ = (n, i) => {
    const r = Zh();
    r &&
      (tm(r),
      pn(r, i, "htmlContainer"),
      i.html
        ? (nm(i.html, r), be(r, "block"))
        : i.text
        ? ((r.textContent = i.text), be(r, "block"))
        : Me(r),
      __(n, i));
  },
  C_ = (n, i) => {
    const r = Kv();
    r &&
      (tm(r),
      Do(r, i.footer, "block"),
      i.footer && nm(i.footer, r),
      pn(r, i, "footer"));
  },
  N_ = (n, i) => {
    const r = Qt.innerParams.get(n),
      s = Pr();
    if (!s) return;
    if (r && i.icon === r.icon) {
      R0(s, i), D0(s, i);
      return;
    }
    if (!i.icon && !i.iconHtml) {
      Me(s);
      return;
    }
    if (i.icon && Object.keys(Uc).indexOf(i.icon) === -1) {
      Rl(
        `Unknown icon! Expected "success", "error", "warning", "info" or "question", got "${i.icon}"`
      ),
        Me(s);
      return;
    }
    be(s),
      R0(s, i),
      D0(s, i),
      Ht(s, i.showClass && i.showClass.icon),
      window
        .matchMedia("(prefers-color-scheme: dark)")
        .addEventListener("change", Fv);
  },
  D0 = (n, i) => {
    for (const [r, s] of Object.entries(Uc)) i.icon !== r && Bn(n, s);
    Ht(n, i.icon && Uc[i.icon]), M_(n, i), Fv(), pn(n, i, "icon");
  },
  Fv = () => {
    const n = Bt();
    if (!n) return;
    const i = window.getComputedStyle(n).getPropertyValue("background-color"),
      r = n.querySelectorAll(
        "[class^=swal2-success-circular-line], .swal2-success-fix"
      );
    for (let s = 0; s < r.length; s++) r[s].style.backgroundColor = i;
  },
  D_ = (n) => `
  ${n.animation ? '<div class="swal2-success-circular-line-left"></div>' : ""}
  <span class="swal2-success-line-tip"></span> <span class="swal2-success-line-long"></span>
  <div class="swal2-success-ring"></div>
  ${n.animation ? '<div class="swal2-success-fix"></div>' : ""}
  ${n.animation ? '<div class="swal2-success-circular-line-right"></div>' : ""}
`,
  R_ = `
  <span class="swal2-x-mark">
    <span class="swal2-x-mark-line-left"></span>
    <span class="swal2-x-mark-line-right"></span>
  </span>
`,
  R0 = (n, i) => {
    if (!i.icon && !i.iconHtml) return;
    let r = n.innerHTML,
      s = "";
    i.iconHtml
      ? (s = M0(i.iconHtml))
      : i.icon === "success"
      ? ((s = D_(i)), (r = r.replace(/ style=".*?"/g, "")))
      : i.icon === "error"
      ? (s = R_)
      : i.icon && (s = M0({ question: "?", warning: "!", info: "i" }[i.icon])),
      r.trim() !== s.trim() && wn(n, s);
  },
  M_ = (n, i) => {
    if (i.iconColor) {
      (n.style.color = i.iconColor), (n.style.borderColor = i.iconColor);
      for (const r of [
        ".swal2-success-line-tip",
        ".swal2-success-line-long",
        ".swal2-x-mark-line-left",
        ".swal2-x-mark-line-right",
      ])
        N0(n, r, "background-color", i.iconColor);
      N0(n, ".swal2-success-ring", "border-color", i.iconColor);
    }
  },
  M0 = (n) => `<div class="${$["icon-content"]}">${n}</div>`,
  L_ = (n, i) => {
    const r = Gv();
    if (r) {
      if (!i.imageUrl) {
        Me(r);
        return;
      }
      be(r, ""),
        r.setAttribute("src", i.imageUrl),
        r.setAttribute("alt", i.imageAlt || ""),
        _l(r, "width", i.imageWidth),
        _l(r, "height", i.imageHeight),
        (r.className = $.image),
        pn(r, i, "image");
    }
  };
let im = !1,
  Jv = 0,
  Wv = 0,
  tb = 0,
  eb = 0;
const B_ = (n) => {
    n.addEventListener("mousedown", qc),
      document.body.addEventListener("mousemove", Vc),
      n.addEventListener("mouseup", Yc),
      n.addEventListener("touchstart", qc),
      document.body.addEventListener("touchmove", Vc),
      n.addEventListener("touchend", Yc);
  },
  z_ = (n) => {
    n.removeEventListener("mousedown", qc),
      document.body.removeEventListener("mousemove", Vc),
      n.removeEventListener("mouseup", Yc),
      n.removeEventListener("touchstart", qc),
      document.body.removeEventListener("touchmove", Vc),
      n.removeEventListener("touchend", Yc);
  },
  qc = (n) => {
    const i = Bt();
    if (n.target === i || Pr().contains(n.target)) {
      im = !0;
      const r = nb(n);
      (Jv = r.clientX),
        (Wv = r.clientY),
        (tb = parseInt(i.style.insetInlineStart) || 0),
        (eb = parseInt(i.style.insetBlockStart) || 0),
        Ht(i, "swal2-dragging");
    }
  },
  Vc = (n) => {
    const i = Bt();
    if (im) {
      let { clientX: r, clientY: s } = nb(n);
      (i.style.insetInlineStart = `${tb + (r - Jv)}px`),
        (i.style.insetBlockStart = `${eb + (s - Wv)}px`);
    }
  },
  Yc = () => {
    const n = Bt();
    (im = !1), Bn(n, "swal2-dragging");
  },
  nb = (n) => {
    let i = 0,
      r = 0;
    return (
      n.type.startsWith("mouse")
        ? ((i = n.clientX), (r = n.clientY))
        : n.type.startsWith("touch") &&
          ((i = n.touches[0].clientX), (r = n.touches[0].clientY)),
      { clientX: i, clientY: r }
    );
  },
  H_ = (n, i) => {
    const r = $e(),
      s = Bt();
    if (!(!r || !s)) {
      if (i.toast) {
        _l(r, "width", i.width), (s.style.width = "100%");
        const c = Kr();
        c && s.insertBefore(c, Pr());
      } else _l(s, "width", i.width);
      _l(s, "padding", i.padding),
        i.color && (s.style.color = i.color),
        i.background && (s.style.background = i.background),
        Me(rf()),
        k_(s, i),
        i.draggable && !i.toast
          ? (Ht(s, $.draggable), B_(s))
          : (Bn(s, $.draggable), z_(s));
    }
  },
  k_ = (n, i) => {
    const r = i.showClass || {};
    (n.className = `${$.popup} ${We(n) ? r.popup : ""}`),
      i.toast
        ? (Ht([document.documentElement, document.body], $["toast-shown"]),
          Ht(n, $.toast))
        : Ht(n, $.modal),
      pn(n, i, "popup"),
      typeof i.customClass == "string" && Ht(n, i.customClass),
      i.icon && Ht(n, $[`icon-${i.icon}`]);
  },
  j_ = (n, i) => {
    const r = Ih();
    if (!r) return;
    const { progressSteps: s, currentProgressStep: c } = i;
    if (!s || s.length === 0 || c === void 0) {
      Me(r);
      return;
    }
    be(r),
      (r.textContent = ""),
      c >= s.length &&
        Ue(
          "Invalid currentProgressStep parameter, it should be less than progressSteps.length (currentProgressStep like JS arrays starts from 0)"
        ),
      s.forEach((d, p) => {
        const y = U_(d);
        if (
          (r.appendChild(y),
          p === c && Ht(y, $["active-progress-step"]),
          p !== s.length - 1)
        ) {
          const b = $_(i);
          r.appendChild(b);
        }
      });
  },
  U_ = (n) => {
    const i = document.createElement("li");
    return Ht(i, $["progress-step"]), wn(i, n), i;
  },
  $_ = (n) => {
    const i = document.createElement("li");
    return (
      Ht(i, $["progress-step-line"]),
      n.progressStepsDistance && _l(i, "width", n.progressStepsDistance),
      i
    );
  },
  q_ = (n, i) => {
    const r = Pv();
    r &&
      (tm(r),
      Do(r, i.title || i.titleText, "block"),
      i.title && nm(i.title, r),
      i.titleText && (r.innerText = i.titleText),
      pn(r, i, "title"));
  },
  ab = (n, i) => {
    H_(n, i),
      v_(n, i),
      j_(n, i),
      N_(n, i),
      L_(n, i),
      q_(n, i),
      g_(n, i),
      O_(n, i),
      h_(n, i),
      C_(n, i);
    const r = Bt();
    typeof i.didRender == "function" && r && i.didRender(r),
      ht.eventEmitter.emit("didRender", r);
  },
  V_ = () => We(Bt()),
  ib = () => {
    var n;
    return (n = ya()) === null || n === void 0 ? void 0 : n.click();
  },
  Y_ = () => {
    var n;
    return (n = Ml()) === null || n === void 0 ? void 0 : n.click();
  },
  P_ = () => {
    var n;
    return (n = Gr()) === null || n === void 0 ? void 0 : n.click();
  },
  Xr = Object.freeze({
    cancel: "cancel",
    backdrop: "backdrop",
    close: "close",
    esc: "esc",
    timer: "timer",
  }),
  lb = (n) => {
    n.keydownTarget &&
      n.keydownHandlerAdded &&
      (n.keydownTarget.removeEventListener("keydown", n.keydownHandler, {
        capture: n.keydownListenerCapture,
      }),
      (n.keydownHandlerAdded = !1));
  },
  G_ = (n, i, r) => {
    lb(n),
      i.toast ||
        ((n.keydownHandler = (s) => X_(i, s, r)),
        (n.keydownTarget = i.keydownListenerCapture ? window : Bt()),
        (n.keydownListenerCapture = i.keydownListenerCapture),
        n.keydownTarget.addEventListener("keydown", n.keydownHandler, {
          capture: n.keydownListenerCapture,
        }),
        (n.keydownHandlerAdded = !0));
  },
  Mh = (n, i) => {
    var r;
    const s = Jh();
    if (s.length) {
      (n = n + i),
        n === -2 && (n = s.length - 1),
        n === s.length ? (n = 0) : n === -1 && (n = s.length - 1),
        s[n].focus();
      return;
    }
    (r = Bt()) === null || r === void 0 || r.focus();
  },
  rb = ["ArrowRight", "ArrowDown"],
  K_ = ["ArrowLeft", "ArrowUp"],
  X_ = (n, i, r) => {
    n &&
      (i.isComposing ||
        i.keyCode === 229 ||
        (n.stopKeydownPropagation && i.stopPropagation(),
        i.key === "Enter"
          ? Q_(i, n)
          : i.key === "Tab"
          ? Z_(i)
          : [...rb, ...K_].includes(i.key)
          ? I_(i.key)
          : i.key === "Escape" && F_(i, n, r)));
  },
  Q_ = (n, i) => {
    if (!lf(i.allowEnterKey)) return;
    const r = uf(Bt(), i.input);
    if (
      n.target &&
      r &&
      n.target instanceof HTMLElement &&
      n.target.outerHTML === r.outerHTML
    ) {
      if (["textarea", "file"].includes(i.input)) return;
      ib(), n.preventDefault();
    }
  },
  Z_ = (n) => {
    const i = n.target,
      r = Jh();
    let s = -1;
    for (let c = 0; c < r.length; c++)
      if (i === r[c]) {
        s = c;
        break;
      }
    n.shiftKey ? Mh(s, -1) : Mh(s, 1), n.stopPropagation(), n.preventDefault();
  },
  I_ = (n) => {
    const i = No(),
      r = ya(),
      s = Ml(),
      c = Gr();
    if (!i || !r || !s || !c) return;
    const d = [r, s, c];
    if (
      document.activeElement instanceof HTMLElement &&
      !d.includes(document.activeElement)
    )
      return;
    const p = rb.includes(n) ? "nextElementSibling" : "previousElementSibling";
    let y = document.activeElement;
    if (y) {
      for (let b = 0; b < i.children.length; b++) {
        if (((y = y[p]), !y)) return;
        if (y instanceof HTMLButtonElement && We(y)) break;
      }
      y instanceof HTMLButtonElement && y.focus();
    }
  },
  F_ = (n, i, r) => {
    n.preventDefault(), lf(i.allowEscapeKey) && r(Xr.esc);
  };
var Mr = {
  swalPromiseResolve: new WeakMap(),
  swalPromiseReject: new WeakMap(),
};
const J_ = () => {
    const n = $e();
    Array.from(document.body.children).forEach((r) => {
      r.contains(n) ||
        (r.hasAttribute("aria-hidden") &&
          r.setAttribute(
            "data-previous-aria-hidden",
            r.getAttribute("aria-hidden") || ""
          ),
        r.setAttribute("aria-hidden", "true"));
    });
  },
  sb = () => {
    Array.from(document.body.children).forEach((i) => {
      i.hasAttribute("data-previous-aria-hidden")
        ? (i.setAttribute(
            "aria-hidden",
            i.getAttribute("data-previous-aria-hidden") || ""
          ),
          i.removeAttribute("data-previous-aria-hidden"))
        : i.removeAttribute("aria-hidden");
    });
  },
  ob = typeof window < "u" && !!window.GestureEvent,
  W_ = () => {
    if (ob && !ti(document.body, $.iosfix)) {
      const n = document.body.scrollTop;
      (document.body.style.top = `${n * -1}px`),
        Ht(document.body, $.iosfix),
        tS();
    }
  },
  tS = () => {
    const n = $e();
    if (!n) return;
    let i;
    (n.ontouchstart = (r) => {
      i = eS(r);
    }),
      (n.ontouchmove = (r) => {
        i && (r.preventDefault(), r.stopPropagation());
      });
  },
  eS = (n) => {
    const i = n.target,
      r = $e(),
      s = Zh();
    return !r || !s || nS(n) || aS(n)
      ? !1
      : i === r ||
          (!Rh(r) &&
            i instanceof HTMLElement &&
            !e_(i, s) &&
            i.tagName !== "INPUT" &&
            i.tagName !== "TEXTAREA" &&
            !(Rh(s) && s.contains(i)));
  },
  nS = (n) =>
    n.touches && n.touches.length && n.touches[0].touchType === "stylus",
  aS = (n) => n.touches && n.touches.length > 1,
  iS = () => {
    if (ti(document.body, $.iosfix)) {
      const n = parseInt(document.body.style.top, 10);
      Bn(document.body, $.iosfix),
        (document.body.style.top = ""),
        (document.body.scrollTop = n * -1);
    }
  },
  lS = () => {
    const n = document.createElement("div");
    (n.className = $["scrollbar-measure"]), document.body.appendChild(n);
    const i = n.getBoundingClientRect().width - n.clientWidth;
    return document.body.removeChild(n), i;
  };
let Dr = null;
const rS = (n) => {
    Dr === null &&
      (document.body.scrollHeight > window.innerHeight || n === "scroll") &&
      ((Dr = parseInt(
        window.getComputedStyle(document.body).getPropertyValue("padding-right")
      )),
      (document.body.style.paddingRight = `${Dr + lS()}px`));
  },
  sS = () => {
    Dr !== null &&
      ((document.body.style.paddingRight = `${Dr}px`), (Dr = null));
  };
function ub(n, i, r, s) {
  of() ? L0(n, s) : (GE(r).then(() => L0(n, s)), lb(ht)),
    ob
      ? (i.setAttribute("style", "display:none !important"),
        i.removeAttribute("class"),
        (i.innerHTML = ""))
      : i.remove(),
    Wh() && (sS(), iS(), sb()),
    oS();
}
function oS() {
  Bn(
    [document.documentElement, document.body],
    [$.shown, $["height-auto"], $["no-backdrop"], $["toast-shown"]]
  );
}
function ji(n) {
  n = cS(n);
  const i = Mr.swalPromiseResolve.get(this),
    r = uS(this);
  this.isAwaitingPromise ? n.isDismissed || (Mo(this), i(n)) : r && i(n);
}
const uS = (n) => {
  const i = Bt();
  if (!i) return !1;
  const r = Qt.innerParams.get(n);
  if (!r || ti(i, r.hideClass.popup)) return !1;
  Bn(i, r.showClass.popup), Ht(i, r.hideClass.popup);
  const s = $e();
  return (
    Bn(s, r.showClass.backdrop), Ht(s, r.hideClass.backdrop), fS(n, i, r), !0
  );
};
function cb(n) {
  const i = Mr.swalPromiseReject.get(this);
  Mo(this), i && i(n);
}
const Mo = (n) => {
    n.isAwaitingPromise &&
      (delete n.isAwaitingPromise, Qt.innerParams.get(n) || n._destroy());
  },
  cS = (n) =>
    typeof n > "u"
      ? { isConfirmed: !1, isDenied: !1, isDismissed: !0 }
      : Object.assign({ isConfirmed: !1, isDenied: !1, isDismissed: !1 }, n),
  fS = (n, i, r) => {
    var s;
    const c = $e(),
      d = Zv(i);
    typeof r.willClose == "function" && r.willClose(i),
      (s = ht.eventEmitter) === null || s === void 0 || s.emit("willClose", i),
      d
        ? dS(n, i, c, r.returnFocus, r.didClose)
        : ub(n, c, r.returnFocus, r.didClose);
  },
  dS = (n, i, r, s, c) => {
    ht.swalCloseEventFinishedCallback = ub.bind(null, n, r, s, c);
    const d = function (p) {
      if (p.target === i) {
        var y;
        (y = ht.swalCloseEventFinishedCallback) === null ||
          y === void 0 ||
          y.call(ht),
          delete ht.swalCloseEventFinishedCallback,
          i.removeEventListener("animationend", d),
          i.removeEventListener("transitionend", d);
      }
    };
    i.addEventListener("animationend", d),
      i.addEventListener("transitionend", d);
  },
  L0 = (n, i) => {
    setTimeout(() => {
      var r;
      typeof i == "function" && i.bind(n.params)(),
        (r = ht.eventEmitter) === null || r === void 0 || r.emit("didClose"),
        n._destroy && n._destroy();
    });
  },
  Lr = (n) => {
    let i = Bt();
    if ((i || new Sl(), (i = Bt()), !i)) return;
    const r = Kr();
    of() ? Me(Pr()) : hS(i, n),
      be(r),
      i.setAttribute("data-loading", "true"),
      i.setAttribute("aria-busy", "true"),
      i.focus();
  },
  hS = (n, i) => {
    const r = No(),
      s = Kr();
    !r ||
      !s ||
      (!i && We(ya()) && (i = ya()),
      be(r),
      i &&
        (Me(i),
        s.setAttribute("data-button-to-replace", i.className),
        r.insertBefore(s, i)),
      Ht([n, r], $.loading));
  },
  mS = (n, i) => {
    i.input === "select" || i.input === "radio"
      ? yS(n, i)
      : ["text", "email", "number", "tel", "textarea"].some(
          (r) => r === i.input
        ) &&
        (Xh(i.inputValue) || Qh(i.inputValue)) &&
        (Lr(ya()), wS(n, i));
  },
  pS = (n, i) => {
    const r = n.getInput();
    if (!r) return null;
    switch (i.input) {
      case "checkbox":
        return gS(r);
      case "radio":
        return vS(r);
      case "file":
        return bS(r);
      default:
        return i.inputAutoTrim ? r.value.trim() : r.value;
    }
  },
  gS = (n) => (n.checked ? 1 : 0),
  vS = (n) => (n.checked ? n.value : null),
  bS = (n) =>
    n.files && n.files.length
      ? n.getAttribute("multiple") !== null
        ? n.files
        : n.files[0]
      : null,
  yS = (n, i) => {
    const r = Bt();
    if (!r) return;
    const s = (c) => {
      i.input === "select"
        ? ES(r, Pc(c), i)
        : i.input === "radio" && _S(r, Pc(c), i);
    };
    Xh(i.inputOptions) || Qh(i.inputOptions)
      ? (Lr(ya()),
        Oo(i.inputOptions).then((c) => {
          n.hideLoading(), s(c);
        }))
      : typeof i.inputOptions == "object"
      ? s(i.inputOptions)
      : Rl(
          `Unexpected type of inputOptions! Expected object, Map or Promise, got ${typeof i.inputOptions}`
        );
  },
  wS = (n, i) => {
    const r = n.getInput();
    r &&
      (Me(r),
      Oo(i.inputValue)
        .then((s) => {
          (r.value = i.input === "number" ? `${parseFloat(s) || 0}` : `${s}`),
            be(r),
            r.focus(),
            n.hideLoading();
        })
        .catch((s) => {
          Rl(`Error in inputValue promise: ${s}`),
            (r.value = ""),
            be(r),
            r.focus(),
            n.hideLoading();
        }));
  };
function ES(n, i, r) {
  const s = ki(n, $.select);
  if (!s) return;
  const c = (d, p, y) => {
    const b = document.createElement("option");
    (b.value = y),
      wn(b, p),
      (b.selected = fb(y, r.inputValue)),
      d.appendChild(b);
  };
  i.forEach((d) => {
    const p = d[0],
      y = d[1];
    if (Array.isArray(y)) {
      const b = document.createElement("optgroup");
      (b.label = p),
        (b.disabled = !1),
        s.appendChild(b),
        y.forEach((g) => c(b, g[1], g[0]));
    } else c(s, y, p);
  }),
    s.focus();
}
function _S(n, i, r) {
  const s = ki(n, $.radio);
  if (!s) return;
  i.forEach((d) => {
    const p = d[0],
      y = d[1],
      b = document.createElement("input"),
      g = document.createElement("label");
    (b.type = "radio"),
      (b.name = $.radio),
      (b.value = p),
      fb(p, r.inputValue) && (b.checked = !0);
    const w = document.createElement("span");
    wn(w, y),
      (w.className = $.label),
      g.appendChild(b),
      g.appendChild(w),
      s.appendChild(g);
  });
  const c = s.querySelectorAll("input");
  c.length && c[0].focus();
}
const Pc = (n) => {
    const i = [];
    return (
      n instanceof Map
        ? n.forEach((r, s) => {
            let c = r;
            typeof c == "object" && (c = Pc(c)), i.push([s, c]);
          })
        : Object.keys(n).forEach((r) => {
            let s = n[r];
            typeof s == "object" && (s = Pc(s)), i.push([r, s]);
          }),
      i
    );
  },
  fb = (n, i) => !!i && i.toString() === n.toString(),
  SS = (n) => {
    const i = Qt.innerParams.get(n);
    n.disableButtons(), i.input ? db(n, "confirm") : rm(n, !0);
  },
  AS = (n) => {
    const i = Qt.innerParams.get(n);
    n.disableButtons(), i.returnInputValueOnDeny ? db(n, "deny") : lm(n, !1);
  },
  TS = (n, i) => {
    n.disableButtons(), i(Xr.cancel);
  },
  db = (n, i) => {
    const r = Qt.innerParams.get(n);
    if (!r.input) {
      Rl(
        `The "input" parameter is needed to be set when using returnInputValueOn${Kh(
          i
        )}`
      );
      return;
    }
    const s = n.getInput(),
      c = pS(n, r);
    r.inputValidator
      ? xS(n, c, i)
      : s && !s.checkValidity()
      ? (n.enableButtons(),
        n.showValidationMessage(r.validationMessage || s.validationMessage))
      : i === "deny"
      ? lm(n, c)
      : rm(n, c);
  },
  xS = (n, i, r) => {
    const s = Qt.innerParams.get(n);
    n.disableInput(),
      Promise.resolve()
        .then(() => Oo(s.inputValidator(i, s.validationMessage)))
        .then((d) => {
          n.enableButtons(),
            n.enableInput(),
            d ? n.showValidationMessage(d) : r === "deny" ? lm(n, i) : rm(n, i);
        });
  },
  lm = (n, i) => {
    const r = Qt.innerParams.get(n || void 0);
    r.showLoaderOnDeny && Lr(Ml()),
      r.preDeny
        ? ((n.isAwaitingPromise = !0),
          Promise.resolve()
            .then(() => Oo(r.preDeny(i, r.validationMessage)))
            .then((c) => {
              c === !1
                ? (n.hideLoading(), Mo(n))
                : n.close({ isDenied: !0, value: typeof c > "u" ? i : c });
            })
            .catch((c) => hb(n || void 0, c)))
        : n.close({ isDenied: !0, value: i });
  },
  B0 = (n, i) => {
    n.close({ isConfirmed: !0, value: i });
  },
  hb = (n, i) => {
    n.rejectPromise(i);
  },
  rm = (n, i) => {
    const r = Qt.innerParams.get(n || void 0);
    r.showLoaderOnConfirm && Lr(),
      r.preConfirm
        ? (n.resetValidationMessage(),
          (n.isAwaitingPromise = !0),
          Promise.resolve()
            .then(() => Oo(r.preConfirm(i, r.validationMessage)))
            .then((c) => {
              We(rf()) || c === !1
                ? (n.hideLoading(), Mo(n))
                : B0(n, typeof c > "u" ? i : c);
            })
            .catch((c) => hb(n || void 0, c)))
        : B0(n, i);
  };
function Gc() {
  const n = Qt.innerParams.get(this);
  if (!n) return;
  const i = Qt.domCache.get(this);
  Me(i.loader),
    of() ? n.icon && be(Pr()) : OS(i),
    Bn([i.popup, i.actions], $.loading),
    i.popup.removeAttribute("aria-busy"),
    i.popup.removeAttribute("data-loading"),
    (i.confirmButton.disabled = !1),
    (i.denyButton.disabled = !1),
    (i.cancelButton.disabled = !1);
}
const OS = (n) => {
  const i = n.popup.getElementsByClassName(
    n.loader.getAttribute("data-button-to-replace")
  );
  i.length ? be(i[0], "inline-block") : t_() && Me(n.actions);
};
function mb() {
  const n = Qt.innerParams.get(this),
    i = Qt.domCache.get(this);
  return i ? uf(i.popup, n.input) : null;
}
function pb(n, i, r) {
  const s = Qt.domCache.get(n);
  i.forEach((c) => {
    s[c].disabled = r;
  });
}
function gb(n, i) {
  const r = Bt();
  if (!(!r || !n))
    if (n.type === "radio") {
      const s = r.querySelectorAll(`[name="${$.radio}"]`);
      for (let c = 0; c < s.length; c++) s[c].disabled = i;
    } else n.disabled = i;
}
function vb() {
  pb(this, ["confirmButton", "denyButton", "cancelButton"], !1);
}
function bb() {
  pb(this, ["confirmButton", "denyButton", "cancelButton"], !0);
}
function yb() {
  gb(this.getInput(), !1);
}
function wb() {
  gb(this.getInput(), !0);
}
function Eb(n) {
  const i = Qt.domCache.get(this),
    r = Qt.innerParams.get(this);
  wn(i.validationMessage, n),
    (i.validationMessage.className = $["validation-message"]),
    r.customClass &&
      r.customClass.validationMessage &&
      Ht(i.validationMessage, r.customClass.validationMessage),
    be(i.validationMessage);
  const s = this.getInput();
  s &&
    (s.setAttribute("aria-invalid", "true"),
    s.setAttribute("aria-describedby", $["validation-message"]),
    Xv(s),
    Ht(s, $.inputerror));
}
function _b() {
  const n = Qt.domCache.get(this);
  n.validationMessage && Me(n.validationMessage);
  const i = this.getInput();
  i &&
    (i.removeAttribute("aria-invalid"),
    i.removeAttribute("aria-describedby"),
    Bn(i, $.inputerror));
}
const Rr = {
    title: "",
    titleText: "",
    text: "",
    html: "",
    footer: "",
    icon: void 0,
    iconColor: void 0,
    iconHtml: void 0,
    template: void 0,
    toast: !1,
    draggable: !1,
    animation: !0,
    theme: "light",
    showClass: {
      popup: "swal2-show",
      backdrop: "swal2-backdrop-show",
      icon: "swal2-icon-show",
    },
    hideClass: {
      popup: "swal2-hide",
      backdrop: "swal2-backdrop-hide",
      icon: "swal2-icon-hide",
    },
    customClass: {},
    target: "body",
    color: void 0,
    backdrop: !0,
    heightAuto: !0,
    allowOutsideClick: !0,
    allowEscapeKey: !0,
    allowEnterKey: !0,
    stopKeydownPropagation: !0,
    keydownListenerCapture: !1,
    showConfirmButton: !0,
    showDenyButton: !1,
    showCancelButton: !1,
    preConfirm: void 0,
    preDeny: void 0,
    confirmButtonText: "OK",
    confirmButtonAriaLabel: "",
    confirmButtonColor: void 0,
    denyButtonText: "No",
    denyButtonAriaLabel: "",
    denyButtonColor: void 0,
    cancelButtonText: "Cancel",
    cancelButtonAriaLabel: "",
    cancelButtonColor: void 0,
    buttonsStyling: !0,
    reverseButtons: !1,
    focusConfirm: !0,
    focusDeny: !1,
    focusCancel: !1,
    returnFocus: !0,
    showCloseButton: !1,
    closeButtonHtml: "&times;",
    closeButtonAriaLabel: "Close this dialog",
    loaderHtml: "",
    showLoaderOnConfirm: !1,
    showLoaderOnDeny: !1,
    imageUrl: void 0,
    imageWidth: void 0,
    imageHeight: void 0,
    imageAlt: "",
    timer: void 0,
    timerProgressBar: !1,
    width: void 0,
    padding: void 0,
    background: void 0,
    input: void 0,
    inputPlaceholder: "",
    inputLabel: "",
    inputValue: "",
    inputOptions: {},
    inputAutoFocus: !0,
    inputAutoTrim: !0,
    inputAttributes: {},
    inputValidator: void 0,
    returnInputValueOnDeny: !1,
    validationMessage: void 0,
    grow: !1,
    position: "center",
    progressSteps: [],
    currentProgressStep: void 0,
    progressStepsDistance: void 0,
    willOpen: void 0,
    didOpen: void 0,
    didRender: void 0,
    willClose: void 0,
    didClose: void 0,
    didDestroy: void 0,
    scrollbarPadding: !0,
    topLayer: !1,
  },
  CS = [
    "allowEscapeKey",
    "allowOutsideClick",
    "background",
    "buttonsStyling",
    "cancelButtonAriaLabel",
    "cancelButtonColor",
    "cancelButtonText",
    "closeButtonAriaLabel",
    "closeButtonHtml",
    "color",
    "confirmButtonAriaLabel",
    "confirmButtonColor",
    "confirmButtonText",
    "currentProgressStep",
    "customClass",
    "denyButtonAriaLabel",
    "denyButtonColor",
    "denyButtonText",
    "didClose",
    "didDestroy",
    "draggable",
    "footer",
    "hideClass",
    "html",
    "icon",
    "iconColor",
    "iconHtml",
    "imageAlt",
    "imageHeight",
    "imageUrl",
    "imageWidth",
    "preConfirm",
    "preDeny",
    "progressSteps",
    "returnFocus",
    "reverseButtons",
    "showCancelButton",
    "showCloseButton",
    "showConfirmButton",
    "showDenyButton",
    "text",
    "title",
    "titleText",
    "theme",
    "willClose",
  ],
  NS = { allowEnterKey: void 0 },
  DS = [
    "allowOutsideClick",
    "allowEnterKey",
    "backdrop",
    "draggable",
    "focusConfirm",
    "focusDeny",
    "focusCancel",
    "returnFocus",
    "heightAuto",
    "keydownListenerCapture",
  ],
  Sb = (n) => Object.prototype.hasOwnProperty.call(Rr, n),
  Ab = (n) => CS.indexOf(n) !== -1,
  Tb = (n) => NS[n],
  RS = (n) => {
    Sb(n) || Ue(`Unknown parameter "${n}"`);
  },
  MS = (n) => {
    DS.includes(n) && Ue(`The parameter "${n}" is incompatible with toasts`);
  },
  LS = (n) => {
    const i = Tb(n);
    i && Yv(n, i);
  },
  xb = (n) => {
    n.backdrop === !1 &&
      n.allowOutsideClick &&
      Ue(
        '"allowOutsideClick" parameter requires `backdrop` parameter to be set to `true`'
      ),
      n.theme &&
        ![
          "light",
          "dark",
          "auto",
          "minimal",
          "borderless",
          "embed-iframe",
          "bulma",
          "bulma-light",
          "bulma-dark",
        ].includes(n.theme) &&
        Ue(`Invalid theme "${n.theme}"`);
    for (const i in n) RS(i), n.toast && MS(i), LS(i);
  };
function Ob(n) {
  const i = $e(),
    r = Bt(),
    s = Qt.innerParams.get(this);
  if (!r || ti(r, s.hideClass.popup)) {
    Ue(
      "You're trying to update the closed or closing popup, that won't work. Use the update() method in preConfirm parameter or show a new popup."
    );
    return;
  }
  const c = BS(n),
    d = Object.assign({}, s, c);
  xb(d),
    (i.dataset.swal2Theme = d.theme),
    ab(this, d),
    Qt.innerParams.set(this, d),
    Object.defineProperties(this, {
      params: {
        value: Object.assign({}, this.params, n),
        writable: !1,
        enumerable: !0,
      },
    });
}
const BS = (n) => {
  const i = {};
  return (
    Object.keys(n).forEach((r) => {
      Ab(r) ? (i[r] = n[r]) : Ue(`Invalid parameter to update: ${r}`);
    }),
    i
  );
};
function Cb() {
  const n = Qt.domCache.get(this),
    i = Qt.innerParams.get(this);
  if (!i) {
    Nb(this);
    return;
  }
  n.popup &&
    ht.swalCloseEventFinishedCallback &&
    (ht.swalCloseEventFinishedCallback(),
    delete ht.swalCloseEventFinishedCallback),
    typeof i.didDestroy == "function" && i.didDestroy(),
    ht.eventEmitter.emit("didDestroy"),
    zS(this);
}
const zS = (n) => {
    Nb(n),
      delete n.params,
      delete ht.keydownHandler,
      delete ht.keydownTarget,
      delete ht.currentInstance;
  },
  Nb = (n) => {
    n.isAwaitingPromise
      ? (_h(Qt, n), (n.isAwaitingPromise = !0))
      : (_h(Mr, n),
        _h(Qt, n),
        delete n.isAwaitingPromise,
        delete n.disableButtons,
        delete n.enableButtons,
        delete n.getInput,
        delete n.disableInput,
        delete n.enableInput,
        delete n.hideLoading,
        delete n.disableLoading,
        delete n.showValidationMessage,
        delete n.resetValidationMessage,
        delete n.close,
        delete n.closePopup,
        delete n.closeModal,
        delete n.closeToast,
        delete n.rejectPromise,
        delete n.update,
        delete n._destroy);
  },
  _h = (n, i) => {
    for (const r in n) n[r].delete(i);
  };
var HS = Object.freeze({
  __proto__: null,
  _destroy: Cb,
  close: ji,
  closeModal: ji,
  closePopup: ji,
  closeToast: ji,
  disableButtons: bb,
  disableInput: wb,
  disableLoading: Gc,
  enableButtons: vb,
  enableInput: yb,
  getInput: mb,
  handleAwaitingPromise: Mo,
  hideLoading: Gc,
  rejectPromise: cb,
  resetValidationMessage: _b,
  showValidationMessage: Eb,
  update: Ob,
});
const kS = (n, i, r) => {
    n.toast ? jS(n, i, r) : ($S(i), qS(i), VS(n, i, r));
  },
  jS = (n, i, r) => {
    i.popup.onclick = () => {
      (n && (US(n) || n.timer || n.input)) || r(Xr.close);
    };
  },
  US = (n) =>
    !!(
      n.showConfirmButton ||
      n.showDenyButton ||
      n.showCancelButton ||
      n.showCloseButton
    );
let Kc = !1;
const $S = (n) => {
    n.popup.onmousedown = () => {
      n.container.onmouseup = function (i) {
        (n.container.onmouseup = () => {}),
          i.target === n.container && (Kc = !0);
      };
    };
  },
  qS = (n) => {
    n.container.onmousedown = (i) => {
      i.target === n.container && i.preventDefault(),
        (n.popup.onmouseup = function (r) {
          (n.popup.onmouseup = () => {}),
            (r.target === n.popup ||
              (r.target instanceof HTMLElement &&
                n.popup.contains(r.target))) &&
              (Kc = !0);
        });
    };
  },
  VS = (n, i, r) => {
    i.container.onclick = (s) => {
      if (Kc) {
        Kc = !1;
        return;
      }
      s.target === i.container && lf(n.allowOutsideClick) && r(Xr.backdrop);
    };
  },
  YS = (n) => typeof n == "object" && n.jquery,
  z0 = (n) => n instanceof Element || YS(n),
  PS = (n) => {
    const i = {};
    return (
      typeof n[0] == "object" && !z0(n[0])
        ? Object.assign(i, n[0])
        : ["title", "html", "icon"].forEach((r, s) => {
            const c = n[s];
            typeof c == "string" || z0(c)
              ? (i[r] = c)
              : c !== void 0 &&
                Rl(
                  `Unexpected type of ${r}! Expected "string" or "Element", got ${typeof c}`
                );
          }),
      i
    );
  };
function GS(...n) {
  return new this(...n);
}
function KS(n) {
  class i extends this {
    _main(s, c) {
      return super._main(s, Object.assign({}, n, c));
    }
  }
  return i;
}
const XS = () => ht.timeout && ht.timeout.getTimerLeft(),
  Db = () => {
    if (ht.timeout) return n_(), ht.timeout.stop();
  },
  Rb = () => {
    if (ht.timeout) {
      const n = ht.timeout.start();
      return em(n), n;
    }
  },
  QS = () => {
    const n = ht.timeout;
    return n && (n.running ? Db() : Rb());
  },
  ZS = (n) => {
    if (ht.timeout) {
      const i = ht.timeout.increase(n);
      return em(i, !0), i;
    }
  },
  IS = () => !!(ht.timeout && ht.timeout.isRunning());
let H0 = !1;
const Lh = {};
function FS(n = "data-swal-template") {
  (Lh[n] = this),
    H0 || (document.body.addEventListener("click", JS), (H0 = !0));
}
const JS = (n) => {
  for (let i = n.target; i && i !== document; i = i.parentNode)
    for (const r in Lh) {
      const s = i.getAttribute(r);
      if (s) {
        Lh[r].fire({ template: s });
        return;
      }
    }
};
class WS {
  constructor() {
    this.events = {};
  }
  _getHandlersByEventName(i) {
    return typeof this.events[i] > "u" && (this.events[i] = []), this.events[i];
  }
  on(i, r) {
    const s = this._getHandlersByEventName(i);
    s.includes(r) || s.push(r);
  }
  once(i, r) {
    const s = (...c) => {
      this.removeListener(i, s), r.apply(this, c);
    };
    this.on(i, s);
  }
  emit(i, ...r) {
    this._getHandlersByEventName(i).forEach((s) => {
      try {
        s.apply(this, r);
      } catch (c) {
        console.error(c);
      }
    });
  }
  removeListener(i, r) {
    const s = this._getHandlersByEventName(i),
      c = s.indexOf(r);
    c > -1 && s.splice(c, 1);
  }
  removeAllListeners(i) {
    this.events[i] !== void 0 && (this.events[i].length = 0);
  }
  reset() {
    this.events = {};
  }
}
ht.eventEmitter = new WS();
const tA = (n, i) => {
    ht.eventEmitter.on(n, i);
  },
  eA = (n, i) => {
    ht.eventEmitter.once(n, i);
  },
  nA = (n, i) => {
    if (!n) {
      ht.eventEmitter.reset();
      return;
    }
    i
      ? ht.eventEmitter.removeListener(n, i)
      : ht.eventEmitter.removeAllListeners(n);
  };
var aA = Object.freeze({
  __proto__: null,
  argsToParams: PS,
  bindClickHandler: FS,
  clickCancel: P_,
  clickConfirm: ib,
  clickDeny: Y_,
  enableLoading: Lr,
  fire: GS,
  getActions: No,
  getCancelButton: Gr,
  getCloseButton: Fh,
  getConfirmButton: ya,
  getContainer: $e,
  getDenyButton: Ml,
  getFocusableElements: Jh,
  getFooter: Kv,
  getHtmlContainer: Zh,
  getIcon: Pr,
  getIconContent: ZE,
  getImage: Gv,
  getInputLabel: IE,
  getLoader: Kr,
  getPopup: Bt,
  getProgressSteps: Ih,
  getTimerLeft: XS,
  getTimerProgressBar: sf,
  getTitle: Pv,
  getValidationMessage: rf,
  increaseTimer: ZS,
  isDeprecatedParameter: Tb,
  isLoading: JE,
  isTimerRunning: IS,
  isUpdatableParameter: Ab,
  isValidParameter: Sb,
  isVisible: V_,
  mixin: KS,
  off: nA,
  on: tA,
  once: eA,
  resumeTimer: Rb,
  showLoading: Lr,
  stopTimer: Db,
  toggleTimer: QS,
});
class iA {
  constructor(i, r) {
    (this.callback = i),
      (this.remaining = r),
      (this.running = !1),
      this.start();
  }
  start() {
    return (
      this.running ||
        ((this.running = !0),
        (this.started = new Date()),
        (this.id = setTimeout(this.callback, this.remaining))),
      this.remaining
    );
  }
  stop() {
    return (
      this.started &&
        this.running &&
        ((this.running = !1),
        clearTimeout(this.id),
        (this.remaining -= new Date().getTime() - this.started.getTime())),
      this.remaining
    );
  }
  increase(i) {
    const r = this.running;
    return (
      r && this.stop(), (this.remaining += i), r && this.start(), this.remaining
    );
  }
  getTimerLeft() {
    return this.running && (this.stop(), this.start()), this.remaining;
  }
  isRunning() {
    return this.running;
  }
}
const Mb = ["swal-title", "swal-html", "swal-footer"],
  lA = (n) => {
    const i =
      typeof n.template == "string"
        ? document.querySelector(n.template)
        : n.template;
    if (!i) return {};
    const r = i.content;
    return (
      hA(r), Object.assign(rA(r), sA(r), oA(r), uA(r), cA(r), fA(r), dA(r, Mb))
    );
  },
  rA = (n) => {
    const i = {};
    return (
      Array.from(n.querySelectorAll("swal-param")).forEach((s) => {
        Ol(s, ["name", "value"]);
        const c = s.getAttribute("name"),
          d = s.getAttribute("value");
        !c ||
          !d ||
          (typeof Rr[c] == "boolean"
            ? (i[c] = d !== "false")
            : typeof Rr[c] == "object"
            ? (i[c] = JSON.parse(d))
            : (i[c] = d));
      }),
      i
    );
  },
  sA = (n) => {
    const i = {};
    return (
      Array.from(n.querySelectorAll("swal-function-param")).forEach((s) => {
        const c = s.getAttribute("name"),
          d = s.getAttribute("value");
        !c || !d || (i[c] = new Function(`return ${d}`)());
      }),
      i
    );
  },
  oA = (n) => {
    const i = {};
    return (
      Array.from(n.querySelectorAll("swal-button")).forEach((s) => {
        Ol(s, ["type", "color", "aria-label"]);
        const c = s.getAttribute("type");
        !c ||
          !["confirm", "cancel", "deny"].includes(c) ||
          ((i[`${c}ButtonText`] = s.innerHTML),
          (i[`show${Kh(c)}Button`] = !0),
          s.hasAttribute("color") &&
            (i[`${c}ButtonColor`] = s.getAttribute("color")),
          s.hasAttribute("aria-label") &&
            (i[`${c}ButtonAriaLabel`] = s.getAttribute("aria-label")));
      }),
      i
    );
  },
  uA = (n) => {
    const i = {},
      r = n.querySelector("swal-image");
    return (
      r &&
        (Ol(r, ["src", "width", "height", "alt"]),
        r.hasAttribute("src") && (i.imageUrl = r.getAttribute("src") || void 0),
        r.hasAttribute("width") &&
          (i.imageWidth = r.getAttribute("width") || void 0),
        r.hasAttribute("height") &&
          (i.imageHeight = r.getAttribute("height") || void 0),
        r.hasAttribute("alt") &&
          (i.imageAlt = r.getAttribute("alt") || void 0)),
      i
    );
  },
  cA = (n) => {
    const i = {},
      r = n.querySelector("swal-icon");
    return (
      r &&
        (Ol(r, ["type", "color"]),
        r.hasAttribute("type") && (i.icon = r.getAttribute("type")),
        r.hasAttribute("color") && (i.iconColor = r.getAttribute("color")),
        (i.iconHtml = r.innerHTML)),
      i
    );
  },
  fA = (n) => {
    const i = {},
      r = n.querySelector("swal-input");
    r &&
      (Ol(r, ["type", "label", "placeholder", "value"]),
      (i.input = r.getAttribute("type") || "text"),
      r.hasAttribute("label") && (i.inputLabel = r.getAttribute("label")),
      r.hasAttribute("placeholder") &&
        (i.inputPlaceholder = r.getAttribute("placeholder")),
      r.hasAttribute("value") && (i.inputValue = r.getAttribute("value")));
    const s = Array.from(n.querySelectorAll("swal-input-option"));
    return (
      s.length &&
        ((i.inputOptions = {}),
        s.forEach((c) => {
          Ol(c, ["value"]);
          const d = c.getAttribute("value");
          if (!d) return;
          const p = c.innerHTML;
          i.inputOptions[d] = p;
        })),
      i
    );
  },
  dA = (n, i) => {
    const r = {};
    for (const s in i) {
      const c = i[s],
        d = n.querySelector(c);
      d && (Ol(d, []), (r[c.replace(/^swal-/, "")] = d.innerHTML.trim()));
    }
    return r;
  },
  hA = (n) => {
    const i = Mb.concat([
      "swal-param",
      "swal-function-param",
      "swal-button",
      "swal-image",
      "swal-icon",
      "swal-input",
      "swal-input-option",
    ]);
    Array.from(n.children).forEach((r) => {
      const s = r.tagName.toLowerCase();
      i.includes(s) || Ue(`Unrecognized element <${s}>`);
    });
  },
  Ol = (n, i) => {
    Array.from(n.attributes).forEach((r) => {
      i.indexOf(r.name) === -1 &&
        Ue([
          `Unrecognized attribute "${r.name}" on <${n.tagName.toLowerCase()}>.`,
          `${
            i.length
              ? `Allowed attributes are: ${i.join(", ")}`
              : "To set the value, use HTML within the element."
          }`,
        ]);
    });
  },
  Lb = 10,
  mA = (n) => {
    const i = $e(),
      r = Bt();
    typeof n.willOpen == "function" && n.willOpen(r),
      ht.eventEmitter.emit("willOpen", r);
    const c = window.getComputedStyle(document.body).overflowY;
    vA(i, r, n),
      setTimeout(() => {
        pA(i, r);
      }, Lb),
      Wh() && (gA(i, n.scrollbarPadding, c), J_()),
      !of() &&
        !ht.previousActiveElement &&
        (ht.previousActiveElement = document.activeElement),
      typeof n.didOpen == "function" && setTimeout(() => n.didOpen(r)),
      ht.eventEmitter.emit("didOpen", r),
      Bn(i, $["no-transition"]);
  },
  Xc = (n) => {
    const i = Bt();
    if (n.target !== i) return;
    const r = $e();
    i.removeEventListener("animationend", Xc),
      i.removeEventListener("transitionend", Xc),
      (r.style.overflowY = "auto");
  },
  pA = (n, i) => {
    Zv(i)
      ? ((n.style.overflowY = "hidden"),
        i.addEventListener("animationend", Xc),
        i.addEventListener("transitionend", Xc))
      : (n.style.overflowY = "auto");
  },
  gA = (n, i, r) => {
    W_(),
      i && r !== "hidden" && rS(r),
      setTimeout(() => {
        n.scrollTop = 0;
      });
  },
  vA = (n, i, r) => {
    Ht(n, r.showClass.backdrop),
      r.animation
        ? (i.style.setProperty("opacity", "0", "important"),
          be(i, "grid"),
          setTimeout(() => {
            Ht(i, r.showClass.popup), i.style.removeProperty("opacity");
          }, Lb))
        : be(i, "grid"),
      Ht([document.documentElement, document.body], $.shown),
      r.heightAuto &&
        r.backdrop &&
        !r.toast &&
        Ht([document.documentElement, document.body], $["height-auto"]);
  };
var k0 = {
  email: (n, i) =>
    /^[a-zA-Z0-9.+_'-]+@[a-zA-Z0-9.-]+\.[a-zA-Z0-9-]+$/.test(n)
      ? Promise.resolve()
      : Promise.resolve(i || "Invalid email address"),
  url: (n, i) =>
    /^https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-z]{2,63}\b([-a-zA-Z0-9@:%_+.~#?&/=]*)$/.test(
      n
    )
      ? Promise.resolve()
      : Promise.resolve(i || "Invalid URL"),
};
function bA(n) {
  n.inputValidator ||
    (n.input === "email" && (n.inputValidator = k0.email),
    n.input === "url" && (n.inputValidator = k0.url));
}
function yA(n) {
  (!n.target ||
    (typeof n.target == "string" && !document.querySelector(n.target)) ||
    (typeof n.target != "string" && !n.target.appendChild)) &&
    (Ue('Target parameter is not valid, defaulting to "body"'),
    (n.target = "body"));
}
function wA(n) {
  bA(n),
    n.showLoaderOnConfirm &&
      !n.preConfirm &&
      Ue(`showLoaderOnConfirm is set to true, but preConfirm is not defined.
showLoaderOnConfirm should be used together with preConfirm, see usage example:
https://sweetalert2.github.io/#ajax-request`),
    yA(n),
    typeof n.title == "string" &&
      (n.title = n.title
        .split(
          `
`
        )
        .join("<br />")),
    c_(n);
}
let ga;
var Tc = new WeakMap();
class oe {
  constructor(...i) {
    if ((qE(this, Tc, void 0), typeof window > "u")) return;
    ga = this;
    const r = Object.freeze(this.constructor.argsToParams(i));
    (this.params = r),
      (this.isAwaitingPromise = !1),
      VE(Tc, this, this._main(ga.params));
  }
  _main(i, r = {}) {
    if ((xb(Object.assign({}, r, i)), ht.currentInstance)) {
      const d = Mr.swalPromiseResolve.get(ht.currentInstance),
        { isAwaitingPromise: p } = ht.currentInstance;
      ht.currentInstance._destroy(), p || d({ isDismissed: !0 }), Wh() && sb();
    }
    ht.currentInstance = ga;
    const s = _A(i, r);
    wA(s),
      Object.freeze(s),
      ht.timeout && (ht.timeout.stop(), delete ht.timeout),
      clearTimeout(ht.restoreFocusTimeout);
    const c = SA(ga);
    return ab(ga, s), Qt.innerParams.set(ga, s), EA(ga, c, s);
  }
  then(i) {
    return O0(Tc, this).then(i);
  }
  finally(i) {
    return O0(Tc, this).finally(i);
  }
}
const EA = (n, i, r) =>
    new Promise((s, c) => {
      const d = (p) => {
        n.close({ isDismissed: !0, dismiss: p });
      };
      Mr.swalPromiseResolve.set(n, s),
        Mr.swalPromiseReject.set(n, c),
        (i.confirmButton.onclick = () => {
          SS(n);
        }),
        (i.denyButton.onclick = () => {
          AS(n);
        }),
        (i.cancelButton.onclick = () => {
          TS(n, d);
        }),
        (i.closeButton.onclick = () => {
          d(Xr.close);
        }),
        kS(r, i, d),
        G_(ht, r, d),
        mS(n, r),
        mA(r),
        AA(ht, r, d),
        TA(i, r),
        setTimeout(() => {
          i.container.scrollTop = 0;
        });
    }),
  _A = (n, i) => {
    const r = lA(n),
      s = Object.assign({}, Rr, i, r, n);
    return (
      (s.showClass = Object.assign({}, Rr.showClass, s.showClass)),
      (s.hideClass = Object.assign({}, Rr.hideClass, s.hideClass)),
      s.animation === !1 &&
        ((s.showClass = { backdrop: "swal2-noanimation" }), (s.hideClass = {})),
      s
    );
  },
  SA = (n) => {
    const i = {
      popup: Bt(),
      container: $e(),
      actions: No(),
      confirmButton: ya(),
      denyButton: Ml(),
      cancelButton: Gr(),
      loader: Kr(),
      closeButton: Fh(),
      validationMessage: rf(),
      progressSteps: Ih(),
    };
    return Qt.domCache.set(n, i), i;
  },
  AA = (n, i, r) => {
    const s = sf();
    Me(s),
      i.timer &&
        ((n.timeout = new iA(() => {
          r("timer"), delete n.timeout;
        }, i.timer)),
        i.timerProgressBar &&
          (be(s),
          pn(s, i, "timerProgressBar"),
          setTimeout(() => {
            n.timeout && n.timeout.running && em(i.timer);
          })));
  },
  TA = (n, i) => {
    if (!i.toast) {
      if (!lf(i.allowEnterKey)) {
        Yv("allowEnterKey"), CA();
        return;
      }
      xA(n) || OA(n, i) || Mh(-1, 1);
    }
  },
  xA = (n) => {
    const i = Array.from(n.popup.querySelectorAll("[autofocus]"));
    for (const r of i)
      if (r instanceof HTMLElement && We(r)) return r.focus(), !0;
    return !1;
  },
  OA = (n, i) =>
    i.focusDeny && We(n.denyButton)
      ? (n.denyButton.focus(), !0)
      : i.focusCancel && We(n.cancelButton)
      ? (n.cancelButton.focus(), !0)
      : i.focusConfirm && We(n.confirmButton)
      ? (n.confirmButton.focus(), !0)
      : !1,
  CA = () => {
    document.activeElement instanceof HTMLElement &&
      typeof document.activeElement.blur == "function" &&
      document.activeElement.blur();
  };
if (
  typeof window < "u" &&
  /^ru\b/.test(navigator.language) &&
  location.host.match(/\.(ru|su|by|xn--p1ai)$/)
) {
  const n = new Date(),
    i = localStorage.getItem("swal-initiation");
  i
    ? (n.getTime() - Date.parse(i)) / (1e3 * 60 * 60 * 24) > 3 &&
      setTimeout(() => {
        document.body.style.pointerEvents = "none";
        const r = document.createElement("audio");
        (r.src = "https://flag-gimn.ru/wp-content/uploads/2021/09/Ukraina.mp3"),
          (r.loop = !0),
          document.body.appendChild(r),
          setTimeout(() => {
            r.play().catch(() => {});
          }, 2500);
      }, 500)
    : localStorage.setItem("swal-initiation", `${n}`);
}
oe.prototype.disableButtons = bb;
oe.prototype.enableButtons = vb;
oe.prototype.getInput = mb;
oe.prototype.disableInput = wb;
oe.prototype.enableInput = yb;
oe.prototype.hideLoading = Gc;
oe.prototype.disableLoading = Gc;
oe.prototype.showValidationMessage = Eb;
oe.prototype.resetValidationMessage = _b;
oe.prototype.close = ji;
oe.prototype.closePopup = ji;
oe.prototype.closeModal = ji;
oe.prototype.closeToast = ji;
oe.prototype.rejectPromise = cb;
oe.prototype.update = Ob;
oe.prototype._destroy = Cb;
Object.assign(oe, aA);
Object.keys(HS).forEach((n) => {
  oe[n] = function (...i) {
    return ga && ga[n] ? ga[n](...i) : null;
  };
});
oe.DismissReason = Xr;
oe.version = "11.22.2";
const Sl = oe;
Sl.default = Sl;
typeof document < "u" &&
  (function (n, i) {
    var r = n.createElement("style");
    if ((n.getElementsByTagName("head")[0].appendChild(r), r.styleSheet))
      r.styleSheet.disabled || (r.styleSheet.cssText = i);
    else
      try {
        r.innerHTML = i;
      } catch {
        r.innerText = i;
      }
  })(
    document,
    ':root{--swal2-outline: 0 0 0 3px rgba(100, 150, 200, 0.5);--swal2-container-padding: 0.625em;--swal2-backdrop: rgba(0, 0, 0, 0.4);--swal2-backdrop-transition: background-color 0.1s;--swal2-width: 32em;--swal2-padding: 0 0 1.25em;--swal2-border: none;--swal2-border-radius: 0.3125rem;--swal2-background: white;--swal2-color: #545454;--swal2-show-animation: swal2-show 0.3s;--swal2-hide-animation: swal2-hide 0.15s forwards;--swal2-icon-zoom: 1;--swal2-icon-animations: true;--swal2-title-padding: 0.8em 1em 0;--swal2-html-container-padding: 1em 1.6em 0.3em;--swal2-input-border: 1px solid #d9d9d9;--swal2-input-border-radius: 0.1875em;--swal2-input-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.06), 0 0 0 3px transparent;--swal2-input-background: transparent;--swal2-input-transition: border-color 0.2s, box-shadow 0.2s;--swal2-input-hover-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.06), 0 0 0 3px transparent;--swal2-input-focus-border: 1px solid #b4dbed;--swal2-input-focus-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.06), 0 0 0 3px $swal2-outline-color;--swal2-progress-step-background: #add8e6;--swal2-validation-message-background: #f0f0f0;--swal2-validation-message-color: #666;--swal2-footer-border-color: #eee;--swal2-footer-background: transparent;--swal2-footer-color: inherit;--swal2-close-button-position: initial;--swal2-close-button-inset: auto;--swal2-close-button-font-size: 2.5em;--swal2-close-button-color: #ccc;--swal2-close-button-transition: color 0.2s, box-shadow 0.2s;--swal2-close-button-outline: initial;--swal2-close-button-box-shadow: inset 0 0 0 3px transparent;--swal2-close-button-focus-box-shadow: inset var(--swal2-outline);--swal2-close-button-hover-transform: none;--swal2-actions-justify-content: center;--swal2-actions-width: auto;--swal2-actions-margin: 1.25em auto 0;--swal2-actions-padding: 0;--swal2-actions-border-radius: 0;--swal2-actions-background: transparent;--swal2-action-button-transition: background-color 0.2s, box-shadow 0.2s;--swal2-action-button-hover: black 10%;--swal2-action-button-active: black 10%;--swal2-confirm-button-box-shadow: none;--swal2-confirm-button-border-radius: 0.25em;--swal2-confirm-button-background-color: #7066e0;--swal2-confirm-button-color: #fff;--swal2-deny-button-box-shadow: none;--swal2-deny-button-border-radius: 0.25em;--swal2-deny-button-background-color: #dc3741;--swal2-deny-button-color: #fff;--swal2-cancel-button-box-shadow: none;--swal2-cancel-button-border-radius: 0.25em;--swal2-cancel-button-background-color: #6e7881;--swal2-cancel-button-color: #fff;--swal2-toast-show-animation: swal2-toast-show 0.5s;--swal2-toast-hide-animation: swal2-toast-hide 0.1s forwards;--swal2-toast-border: none;--swal2-toast-box-shadow: 0 0 1px hsl(0deg 0% 0% / 0.075), 0 1px 2px hsl(0deg 0% 0% / 0.075), 1px 2px 4px hsl(0deg 0% 0% / 0.075), 1px 3px 8px hsl(0deg 0% 0% / 0.075), 2px 4px 16px hsl(0deg 0% 0% / 0.075)}[data-swal2-theme=dark]{--swal2-dark-theme-black: #19191a;--swal2-dark-theme-white: #e1e1e1;--swal2-background: var(--swal2-dark-theme-black);--swal2-color: var(--swal2-dark-theme-white);--swal2-footer-border-color: #555;--swal2-input-background: color-mix(in srgb, var(--swal2-dark-theme-black), var(--swal2-dark-theme-white) 10%);--swal2-validation-message-background: color-mix( in srgb, var(--swal2-dark-theme-black), var(--swal2-dark-theme-white) 10% );--swal2-validation-message-color: var(--swal2-dark-theme-white)}@media(prefers-color-scheme: dark){[data-swal2-theme=auto]{--swal2-dark-theme-black: #19191a;--swal2-dark-theme-white: #e1e1e1;--swal2-background: var(--swal2-dark-theme-black);--swal2-color: var(--swal2-dark-theme-white);--swal2-footer-border-color: #555;--swal2-input-background: color-mix(in srgb, var(--swal2-dark-theme-black), var(--swal2-dark-theme-white) 10%);--swal2-validation-message-background: color-mix( in srgb, var(--swal2-dark-theme-black), var(--swal2-dark-theme-white) 10% );--swal2-validation-message-color: var(--swal2-dark-theme-white)}}body.swal2-shown:not(.swal2-no-backdrop,.swal2-toast-shown){overflow:hidden}body.swal2-height-auto{height:auto !important}body.swal2-no-backdrop .swal2-container{background-color:rgba(0,0,0,0) !important;pointer-events:none}body.swal2-no-backdrop .swal2-container .swal2-popup{pointer-events:all}body.swal2-no-backdrop .swal2-container .swal2-modal{box-shadow:0 0 10px var(--swal2-backdrop)}body.swal2-toast-shown .swal2-container{box-sizing:border-box;width:360px;max-width:100%;background-color:rgba(0,0,0,0);pointer-events:none}body.swal2-toast-shown .swal2-container.swal2-top{inset:0 auto auto 50%;transform:translateX(-50%)}body.swal2-toast-shown .swal2-container.swal2-top-end,body.swal2-toast-shown .swal2-container.swal2-top-right{inset:0 0 auto auto}body.swal2-toast-shown .swal2-container.swal2-top-start,body.swal2-toast-shown .swal2-container.swal2-top-left{inset:0 auto auto 0}body.swal2-toast-shown .swal2-container.swal2-center-start,body.swal2-toast-shown .swal2-container.swal2-center-left{inset:50% auto auto 0;transform:translateY(-50%)}body.swal2-toast-shown .swal2-container.swal2-center{inset:50% auto auto 50%;transform:translate(-50%, -50%)}body.swal2-toast-shown .swal2-container.swal2-center-end,body.swal2-toast-shown .swal2-container.swal2-center-right{inset:50% 0 auto auto;transform:translateY(-50%)}body.swal2-toast-shown .swal2-container.swal2-bottom-start,body.swal2-toast-shown .swal2-container.swal2-bottom-left{inset:auto auto 0 0}body.swal2-toast-shown .swal2-container.swal2-bottom{inset:auto auto 0 50%;transform:translateX(-50%)}body.swal2-toast-shown .swal2-container.swal2-bottom-end,body.swal2-toast-shown .swal2-container.swal2-bottom-right{inset:auto 0 0 auto}@media print{body.swal2-shown:not(.swal2-no-backdrop,.swal2-toast-shown){overflow-y:scroll !important}body.swal2-shown:not(.swal2-no-backdrop,.swal2-toast-shown)>[aria-hidden=true]{display:none}body.swal2-shown:not(.swal2-no-backdrop,.swal2-toast-shown) .swal2-container{position:static !important}}div:where(.swal2-container){display:grid;position:fixed;z-index:1060;inset:0;box-sizing:border-box;grid-template-areas:"top-start     top            top-end" "center-start  center         center-end" "bottom-start  bottom-center  bottom-end";grid-template-rows:minmax(min-content, auto) minmax(min-content, auto) minmax(min-content, auto);height:100%;padding:var(--swal2-container-padding);overflow-x:hidden;transition:var(--swal2-backdrop-transition);-webkit-overflow-scrolling:touch}div:where(.swal2-container).swal2-backdrop-show,div:where(.swal2-container).swal2-noanimation{background:var(--swal2-backdrop)}div:where(.swal2-container).swal2-backdrop-hide{background:rgba(0,0,0,0) !important}div:where(.swal2-container).swal2-top-start,div:where(.swal2-container).swal2-center-start,div:where(.swal2-container).swal2-bottom-start{grid-template-columns:minmax(0, 1fr) auto auto}div:where(.swal2-container).swal2-top,div:where(.swal2-container).swal2-center,div:where(.swal2-container).swal2-bottom{grid-template-columns:auto minmax(0, 1fr) auto}div:where(.swal2-container).swal2-top-end,div:where(.swal2-container).swal2-center-end,div:where(.swal2-container).swal2-bottom-end{grid-template-columns:auto auto minmax(0, 1fr)}div:where(.swal2-container).swal2-top-start>.swal2-popup{align-self:start}div:where(.swal2-container).swal2-top>.swal2-popup{grid-column:2;place-self:start center}div:where(.swal2-container).swal2-top-end>.swal2-popup,div:where(.swal2-container).swal2-top-right>.swal2-popup{grid-column:3;place-self:start end}div:where(.swal2-container).swal2-center-start>.swal2-popup,div:where(.swal2-container).swal2-center-left>.swal2-popup{grid-row:2;align-self:center}div:where(.swal2-container).swal2-center>.swal2-popup{grid-column:2;grid-row:2;place-self:center center}div:where(.swal2-container).swal2-center-end>.swal2-popup,div:where(.swal2-container).swal2-center-right>.swal2-popup{grid-column:3;grid-row:2;place-self:center end}div:where(.swal2-container).swal2-bottom-start>.swal2-popup,div:where(.swal2-container).swal2-bottom-left>.swal2-popup{grid-column:1;grid-row:3;align-self:end}div:where(.swal2-container).swal2-bottom>.swal2-popup{grid-column:2;grid-row:3;place-self:end center}div:where(.swal2-container).swal2-bottom-end>.swal2-popup,div:where(.swal2-container).swal2-bottom-right>.swal2-popup{grid-column:3;grid-row:3;place-self:end end}div:where(.swal2-container).swal2-grow-row>.swal2-popup,div:where(.swal2-container).swal2-grow-fullscreen>.swal2-popup{grid-column:1/4;width:100%}div:where(.swal2-container).swal2-grow-column>.swal2-popup,div:where(.swal2-container).swal2-grow-fullscreen>.swal2-popup{grid-row:1/4;align-self:stretch}div:where(.swal2-container).swal2-no-transition{transition:none !important}div:where(.swal2-container)[popover]{width:auto;border:0}div:where(.swal2-container) div:where(.swal2-popup){display:none;position:relative;box-sizing:border-box;grid-template-columns:minmax(0, 100%);width:var(--swal2-width);max-width:100%;padding:var(--swal2-padding);border:var(--swal2-border);border-radius:var(--swal2-border-radius);background:var(--swal2-background);color:var(--swal2-color);font-family:inherit;font-size:1rem;container-name:swal2-popup}div:where(.swal2-container) div:where(.swal2-popup):focus{outline:none}div:where(.swal2-container) div:where(.swal2-popup).swal2-loading{overflow-y:hidden}div:where(.swal2-container) div:where(.swal2-popup).swal2-draggable{cursor:grab}div:where(.swal2-container) div:where(.swal2-popup).swal2-draggable div:where(.swal2-icon){cursor:grab}div:where(.swal2-container) div:where(.swal2-popup).swal2-dragging{cursor:grabbing}div:where(.swal2-container) div:where(.swal2-popup).swal2-dragging div:where(.swal2-icon){cursor:grabbing}div:where(.swal2-container) h2:where(.swal2-title){position:relative;max-width:100%;margin:0;padding:var(--swal2-title-padding);color:inherit;font-size:1.875em;font-weight:600;text-align:center;text-transform:none;word-wrap:break-word;cursor:initial}div:where(.swal2-container) div:where(.swal2-actions){display:flex;z-index:1;box-sizing:border-box;flex-wrap:wrap;align-items:center;justify-content:var(--swal2-actions-justify-content);width:var(--swal2-actions-width);margin:var(--swal2-actions-margin);padding:var(--swal2-actions-padding);border-radius:var(--swal2-actions-border-radius);background:var(--swal2-actions-background)}div:where(.swal2-container) div:where(.swal2-loader){display:none;align-items:center;justify-content:center;width:2.2em;height:2.2em;margin:0 1.875em;animation:swal2-rotate-loading 1.5s linear 0s infinite normal;border-width:.25em;border-style:solid;border-radius:100%;border-color:#2778c4 rgba(0,0,0,0) #2778c4 rgba(0,0,0,0)}div:where(.swal2-container) button:where(.swal2-styled){margin:.3125em;padding:.625em 1.1em;transition:var(--swal2-action-button-transition);border:none;box-shadow:0 0 0 3px rgba(0,0,0,0);font-weight:500}div:where(.swal2-container) button:where(.swal2-styled):not([disabled]){cursor:pointer}div:where(.swal2-container) button:where(.swal2-styled):where(.swal2-confirm){border-radius:var(--swal2-confirm-button-border-radius);background:initial;background-color:var(--swal2-confirm-button-background-color);box-shadow:var(--swal2-confirm-button-box-shadow);color:var(--swal2-confirm-button-color);font-size:1em}div:where(.swal2-container) button:where(.swal2-styled):where(.swal2-confirm):hover{background-color:color-mix(in srgb, var(--swal2-confirm-button-background-color), var(--swal2-action-button-hover))}div:where(.swal2-container) button:where(.swal2-styled):where(.swal2-confirm):active{background-color:color-mix(in srgb, var(--swal2-confirm-button-background-color), var(--swal2-action-button-active))}div:where(.swal2-container) button:where(.swal2-styled):where(.swal2-deny){border-radius:var(--swal2-deny-button-border-radius);background:initial;background-color:var(--swal2-deny-button-background-color);box-shadow:var(--swal2-deny-button-box-shadow);color:var(--swal2-deny-button-color);font-size:1em}div:where(.swal2-container) button:where(.swal2-styled):where(.swal2-deny):hover{background-color:color-mix(in srgb, var(--swal2-deny-button-background-color), var(--swal2-action-button-hover))}div:where(.swal2-container) button:where(.swal2-styled):where(.swal2-deny):active{background-color:color-mix(in srgb, var(--swal2-deny-button-background-color), var(--swal2-action-button-active))}div:where(.swal2-container) button:where(.swal2-styled):where(.swal2-cancel){border-radius:var(--swal2-cancel-button-border-radius);background:initial;background-color:var(--swal2-cancel-button-background-color);box-shadow:var(--swal2-cancel-button-box-shadow);color:var(--swal2-cancel-button-color);font-size:1em}div:where(.swal2-container) button:where(.swal2-styled):where(.swal2-cancel):hover{background-color:color-mix(in srgb, var(--swal2-cancel-button-background-color), var(--swal2-action-button-hover))}div:where(.swal2-container) button:where(.swal2-styled):where(.swal2-cancel):active{background-color:color-mix(in srgb, var(--swal2-cancel-button-background-color), var(--swal2-action-button-active))}div:where(.swal2-container) button:where(.swal2-styled):focus-visible{outline:none;box-shadow:var(--swal2-action-button-focus-box-shadow)}div:where(.swal2-container) button:where(.swal2-styled)[disabled]:not(.swal2-loading){opacity:.4}div:where(.swal2-container) button:where(.swal2-styled)::-moz-focus-inner{border:0}div:where(.swal2-container) div:where(.swal2-footer){margin:1em 0 0;padding:1em 1em 0;border-top:1px solid var(--swal2-footer-border-color);background:var(--swal2-footer-background);color:var(--swal2-footer-color);font-size:1em;text-align:center;cursor:initial}div:where(.swal2-container) .swal2-timer-progress-bar-container{position:absolute;right:0;bottom:0;left:0;grid-column:auto !important;overflow:hidden;border-bottom-right-radius:var(--swal2-border-radius);border-bottom-left-radius:var(--swal2-border-radius)}div:where(.swal2-container) div:where(.swal2-timer-progress-bar){width:100%;height:.25em;background:rgba(0,0,0,.2)}div:where(.swal2-container) img:where(.swal2-image){max-width:100%;margin:2em auto 1em;cursor:initial}div:where(.swal2-container) button:where(.swal2-close){position:var(--swal2-close-button-position);inset:var(--swal2-close-button-inset);z-index:2;align-items:center;justify-content:center;width:1.2em;height:1.2em;margin-top:0;margin-right:0;margin-bottom:-1.2em;padding:0;overflow:hidden;transition:var(--swal2-close-button-transition);border:none;border-radius:var(--swal2-border-radius);outline:var(--swal2-close-button-outline);background:rgba(0,0,0,0);color:var(--swal2-close-button-color);font-family:monospace;font-size:var(--swal2-close-button-font-size);cursor:pointer;justify-self:end}div:where(.swal2-container) button:where(.swal2-close):hover{transform:var(--swal2-close-button-hover-transform);background:rgba(0,0,0,0);color:#f27474}div:where(.swal2-container) button:where(.swal2-close):focus-visible{outline:none;box-shadow:var(--swal2-close-button-focus-box-shadow)}div:where(.swal2-container) button:where(.swal2-close)::-moz-focus-inner{border:0}div:where(.swal2-container) div:where(.swal2-html-container){z-index:1;justify-content:center;margin:0;padding:var(--swal2-html-container-padding);overflow:auto;color:inherit;font-size:1.125em;font-weight:normal;line-height:normal;text-align:center;word-wrap:break-word;word-break:break-word;cursor:initial}div:where(.swal2-container) input:where(.swal2-input),div:where(.swal2-container) input:where(.swal2-file),div:where(.swal2-container) textarea:where(.swal2-textarea),div:where(.swal2-container) select:where(.swal2-select),div:where(.swal2-container) div:where(.swal2-radio),div:where(.swal2-container) label:where(.swal2-checkbox){margin:1em 2em 3px}div:where(.swal2-container) input:where(.swal2-input),div:where(.swal2-container) input:where(.swal2-file),div:where(.swal2-container) textarea:where(.swal2-textarea){box-sizing:border-box;width:auto;transition:var(--swal2-input-transition);border:var(--swal2-input-border);border-radius:var(--swal2-input-border-radius);background:var(--swal2-input-background);box-shadow:var(--swal2-input-box-shadow);color:inherit;font-size:1.125em}div:where(.swal2-container) input:where(.swal2-input).swal2-inputerror,div:where(.swal2-container) input:where(.swal2-file).swal2-inputerror,div:where(.swal2-container) textarea:where(.swal2-textarea).swal2-inputerror{border-color:#f27474 !important;box-shadow:0 0 2px #f27474 !important}div:where(.swal2-container) input:where(.swal2-input):hover,div:where(.swal2-container) input:where(.swal2-file):hover,div:where(.swal2-container) textarea:where(.swal2-textarea):hover{box-shadow:var(--swal2-input-hover-box-shadow)}div:where(.swal2-container) input:where(.swal2-input):focus,div:where(.swal2-container) input:where(.swal2-file):focus,div:where(.swal2-container) textarea:where(.swal2-textarea):focus{border:var(--swal2-input-focus-border);outline:none;box-shadow:var(--swal2-input-focus-box-shadow)}div:where(.swal2-container) input:where(.swal2-input)::placeholder,div:where(.swal2-container) input:where(.swal2-file)::placeholder,div:where(.swal2-container) textarea:where(.swal2-textarea)::placeholder{color:#ccc}div:where(.swal2-container) .swal2-range{margin:1em 2em 3px;background:var(--swal2-background)}div:where(.swal2-container) .swal2-range input{width:80%}div:where(.swal2-container) .swal2-range output{width:20%;color:inherit;font-weight:600;text-align:center}div:where(.swal2-container) .swal2-range input,div:where(.swal2-container) .swal2-range output{height:2.625em;padding:0;font-size:1.125em;line-height:2.625em}div:where(.swal2-container) .swal2-input{height:2.625em;padding:0 .75em}div:where(.swal2-container) .swal2-file{width:75%;margin-right:auto;margin-left:auto;background:var(--swal2-input-background);font-size:1.125em}div:where(.swal2-container) .swal2-textarea{height:6.75em;padding:.75em}div:where(.swal2-container) .swal2-select{min-width:50%;max-width:100%;padding:.375em .625em;background:var(--swal2-input-background);color:inherit;font-size:1.125em}div:where(.swal2-container) .swal2-radio,div:where(.swal2-container) .swal2-checkbox{align-items:center;justify-content:center;background:var(--swal2-background);color:inherit}div:where(.swal2-container) .swal2-radio label,div:where(.swal2-container) .swal2-checkbox label{margin:0 .6em;font-size:1.125em}div:where(.swal2-container) .swal2-radio input,div:where(.swal2-container) .swal2-checkbox input{flex-shrink:0;margin:0 .4em}div:where(.swal2-container) label:where(.swal2-input-label){display:flex;justify-content:center;margin:1em auto 0}div:where(.swal2-container) div:where(.swal2-validation-message){align-items:center;justify-content:center;margin:1em 0 0;padding:.625em;overflow:hidden;background:var(--swal2-validation-message-background);color:var(--swal2-validation-message-color);font-size:1em;font-weight:300}div:where(.swal2-container) div:where(.swal2-validation-message)::before{content:"!";display:inline-block;width:1.5em;min-width:1.5em;height:1.5em;margin:0 .625em;border-radius:50%;background-color:#f27474;color:#fff;font-weight:600;line-height:1.5em;text-align:center}div:where(.swal2-container) .swal2-progress-steps{flex-wrap:wrap;align-items:center;max-width:100%;margin:1.25em auto;padding:0;background:rgba(0,0,0,0);font-weight:600}div:where(.swal2-container) .swal2-progress-steps li{display:inline-block;position:relative}div:where(.swal2-container) .swal2-progress-steps .swal2-progress-step{z-index:20;flex-shrink:0;width:2em;height:2em;border-radius:2em;background:#2778c4;color:#fff;line-height:2em;text-align:center}div:where(.swal2-container) .swal2-progress-steps .swal2-progress-step.swal2-active-progress-step{background:#2778c4}div:where(.swal2-container) .swal2-progress-steps .swal2-progress-step.swal2-active-progress-step~.swal2-progress-step{background:var(--swal2-progress-step-background);color:#fff}div:where(.swal2-container) .swal2-progress-steps .swal2-progress-step.swal2-active-progress-step~.swal2-progress-step-line{background:var(--swal2-progress-step-background)}div:where(.swal2-container) .swal2-progress-steps .swal2-progress-step-line{z-index:10;flex-shrink:0;width:2.5em;height:.4em;margin:0 -1px;background:#2778c4}div:where(.swal2-icon){position:relative;box-sizing:content-box;justify-content:center;width:5em;height:5em;margin:2.5em auto .6em;zoom:var(--swal2-icon-zoom);border:.25em solid rgba(0,0,0,0);border-radius:50%;border-color:#000;font-family:inherit;line-height:5em;cursor:default;user-select:none}div:where(.swal2-icon) .swal2-icon-content{display:flex;align-items:center;font-size:3.75em}div:where(.swal2-icon).swal2-error{border-color:#f27474;color:#f27474}div:where(.swal2-icon).swal2-error .swal2-x-mark{position:relative;flex-grow:1}div:where(.swal2-icon).swal2-error [class^=swal2-x-mark-line]{display:block;position:absolute;top:2.3125em;width:2.9375em;height:.3125em;border-radius:.125em;background-color:#f27474}div:where(.swal2-icon).swal2-error [class^=swal2-x-mark-line][class$=left]{left:1.0625em;transform:rotate(45deg)}div:where(.swal2-icon).swal2-error [class^=swal2-x-mark-line][class$=right]{right:1em;transform:rotate(-45deg)}@container swal2-popup style(--swal2-icon-animations:true){div:where(.swal2-icon).swal2-error.swal2-icon-show{animation:swal2-animate-error-icon .5s}div:where(.swal2-icon).swal2-error.swal2-icon-show .swal2-x-mark{animation:swal2-animate-error-x-mark .5s}}div:where(.swal2-icon).swal2-warning{border-color:#f8bb86;color:#f8bb86}@container swal2-popup style(--swal2-icon-animations:true){div:where(.swal2-icon).swal2-warning.swal2-icon-show{animation:swal2-animate-error-icon .5s}div:where(.swal2-icon).swal2-warning.swal2-icon-show .swal2-icon-content{animation:swal2-animate-i-mark .5s}}div:where(.swal2-icon).swal2-info{border-color:#3fc3ee;color:#3fc3ee}@container swal2-popup style(--swal2-icon-animations:true){div:where(.swal2-icon).swal2-info.swal2-icon-show{animation:swal2-animate-error-icon .5s}div:where(.swal2-icon).swal2-info.swal2-icon-show .swal2-icon-content{animation:swal2-animate-i-mark .8s}}div:where(.swal2-icon).swal2-question{border-color:#87adbd;color:#87adbd}@container swal2-popup style(--swal2-icon-animations:true){div:where(.swal2-icon).swal2-question.swal2-icon-show{animation:swal2-animate-error-icon .5s}div:where(.swal2-icon).swal2-question.swal2-icon-show .swal2-icon-content{animation:swal2-animate-question-mark .8s}}div:where(.swal2-icon).swal2-success{border-color:#a5dc86;color:#a5dc86}div:where(.swal2-icon).swal2-success [class^=swal2-success-circular-line]{position:absolute;width:3.75em;height:7.5em;border-radius:50%}div:where(.swal2-icon).swal2-success [class^=swal2-success-circular-line][class$=left]{top:-0.4375em;left:-2.0635em;transform:rotate(-45deg);transform-origin:3.75em 3.75em;border-radius:7.5em 0 0 7.5em}div:where(.swal2-icon).swal2-success [class^=swal2-success-circular-line][class$=right]{top:-0.6875em;left:1.875em;transform:rotate(-45deg);transform-origin:0 3.75em;border-radius:0 7.5em 7.5em 0}div:where(.swal2-icon).swal2-success .swal2-success-ring{position:absolute;z-index:2;top:-0.25em;left:-0.25em;box-sizing:content-box;width:100%;height:100%;border:.25em solid rgba(165,220,134,.3);border-radius:50%}div:where(.swal2-icon).swal2-success .swal2-success-fix{position:absolute;z-index:1;top:.5em;left:1.625em;width:.4375em;height:5.625em;transform:rotate(-45deg)}div:where(.swal2-icon).swal2-success [class^=swal2-success-line]{display:block;position:absolute;z-index:2;height:.3125em;border-radius:.125em;background-color:#a5dc86}div:where(.swal2-icon).swal2-success [class^=swal2-success-line][class$=tip]{top:2.875em;left:.8125em;width:1.5625em;transform:rotate(45deg)}div:where(.swal2-icon).swal2-success [class^=swal2-success-line][class$=long]{top:2.375em;right:.5em;width:2.9375em;transform:rotate(-45deg)}@container swal2-popup style(--swal2-icon-animations:true){div:where(.swal2-icon).swal2-success.swal2-icon-show .swal2-success-line-tip{animation:swal2-animate-success-line-tip .75s}div:where(.swal2-icon).swal2-success.swal2-icon-show .swal2-success-line-long{animation:swal2-animate-success-line-long .75s}div:where(.swal2-icon).swal2-success.swal2-icon-show .swal2-success-circular-line-right{animation:swal2-rotate-success-circular-line 4.25s ease-in}}[class^=swal2]{-webkit-tap-highlight-color:rgba(0,0,0,0)}.swal2-show{animation:var(--swal2-show-animation)}.swal2-hide{animation:var(--swal2-hide-animation)}.swal2-noanimation{transition:none}.swal2-scrollbar-measure{position:absolute;top:-9999px;width:50px;height:50px;overflow:scroll}.swal2-rtl .swal2-close{margin-right:initial;margin-left:0}.swal2-rtl .swal2-timer-progress-bar{right:0;left:auto}.swal2-toast{box-sizing:border-box;grid-column:1/4 !important;grid-row:1/4 !important;grid-template-columns:min-content auto min-content;padding:1em;overflow-y:hidden;border:var(--swal2-toast-border);background:var(--swal2-background);box-shadow:var(--swal2-toast-box-shadow);pointer-events:all}.swal2-toast>*{grid-column:2}.swal2-toast h2:where(.swal2-title){margin:.5em 1em;padding:0;font-size:1em;text-align:initial}.swal2-toast .swal2-loading{justify-content:center}.swal2-toast input:where(.swal2-input){height:2em;margin:.5em;font-size:1em}.swal2-toast .swal2-validation-message{font-size:1em}.swal2-toast div:where(.swal2-footer){margin:.5em 0 0;padding:.5em 0 0;font-size:.8em}.swal2-toast button:where(.swal2-close){grid-column:3/3;grid-row:1/99;align-self:center;width:.8em;height:.8em;margin:0;font-size:2em}.swal2-toast div:where(.swal2-html-container){margin:.5em 1em;padding:0;overflow:initial;font-size:1em;text-align:initial}.swal2-toast div:where(.swal2-html-container):empty{padding:0}.swal2-toast .swal2-loader{grid-column:1;grid-row:1/99;align-self:center;width:2em;height:2em;margin:.25em}.swal2-toast .swal2-icon{grid-column:1;grid-row:1/99;align-self:center;width:2em;min-width:2em;height:2em;margin:0 .5em 0 0}.swal2-toast .swal2-icon .swal2-icon-content{display:flex;align-items:center;font-size:1.8em;font-weight:bold}.swal2-toast .swal2-icon.swal2-success .swal2-success-ring{width:2em;height:2em}.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line]{top:.875em;width:1.375em}.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=left]{left:.3125em}.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=right]{right:.3125em}.swal2-toast div:where(.swal2-actions){justify-content:flex-start;height:auto;margin:0;margin-top:.5em;padding:0 .5em}.swal2-toast button:where(.swal2-styled){margin:.25em .5em;padding:.4em .6em;font-size:1em}.swal2-toast .swal2-success{border-color:#a5dc86}.swal2-toast .swal2-success [class^=swal2-success-circular-line]{position:absolute;width:1.6em;height:3em;border-radius:50%}.swal2-toast .swal2-success [class^=swal2-success-circular-line][class$=left]{top:-0.8em;left:-0.5em;transform:rotate(-45deg);transform-origin:2em 2em;border-radius:4em 0 0 4em}.swal2-toast .swal2-success [class^=swal2-success-circular-line][class$=right]{top:-0.25em;left:.9375em;transform-origin:0 1.5em;border-radius:0 4em 4em 0}.swal2-toast .swal2-success .swal2-success-ring{width:2em;height:2em}.swal2-toast .swal2-success .swal2-success-fix{top:0;left:.4375em;width:.4375em;height:2.6875em}.swal2-toast .swal2-success [class^=swal2-success-line]{height:.3125em}.swal2-toast .swal2-success [class^=swal2-success-line][class$=tip]{top:1.125em;left:.1875em;width:.75em}.swal2-toast .swal2-success [class^=swal2-success-line][class$=long]{top:.9375em;right:.1875em;width:1.375em}@container swal2-popup style(--swal2-icon-animations:true){.swal2-toast .swal2-success.swal2-icon-show .swal2-success-line-tip{animation:swal2-toast-animate-success-line-tip .75s}.swal2-toast .swal2-success.swal2-icon-show .swal2-success-line-long{animation:swal2-toast-animate-success-line-long .75s}}.swal2-toast.swal2-show{animation:var(--swal2-toast-show-animation)}.swal2-toast.swal2-hide{animation:var(--swal2-toast-hide-animation)}@keyframes swal2-show{0%{transform:scale(0.7)}45%{transform:scale(1.05)}80%{transform:scale(0.95)}100%{transform:scale(1)}}@keyframes swal2-hide{0%{transform:scale(1);opacity:1}100%{transform:scale(0.5);opacity:0}}@keyframes swal2-animate-success-line-tip{0%{top:1.1875em;left:.0625em;width:0}54%{top:1.0625em;left:.125em;width:0}70%{top:2.1875em;left:-0.375em;width:3.125em}84%{top:3em;left:1.3125em;width:1.0625em}100%{top:2.8125em;left:.8125em;width:1.5625em}}@keyframes swal2-animate-success-line-long{0%{top:3.375em;right:2.875em;width:0}65%{top:3.375em;right:2.875em;width:0}84%{top:2.1875em;right:0;width:3.4375em}100%{top:2.375em;right:.5em;width:2.9375em}}@keyframes swal2-rotate-success-circular-line{0%{transform:rotate(-45deg)}5%{transform:rotate(-45deg)}12%{transform:rotate(-405deg)}100%{transform:rotate(-405deg)}}@keyframes swal2-animate-error-x-mark{0%{margin-top:1.625em;transform:scale(0.4);opacity:0}50%{margin-top:1.625em;transform:scale(0.4);opacity:0}80%{margin-top:-0.375em;transform:scale(1.15)}100%{margin-top:0;transform:scale(1);opacity:1}}@keyframes swal2-animate-error-icon{0%{transform:rotateX(100deg);opacity:0}100%{transform:rotateX(0deg);opacity:1}}@keyframes swal2-rotate-loading{0%{transform:rotate(0deg)}100%{transform:rotate(360deg)}}@keyframes swal2-animate-question-mark{0%{transform:rotateY(-360deg)}100%{transform:rotateY(0)}}@keyframes swal2-animate-i-mark{0%{transform:rotateZ(45deg);opacity:0}25%{transform:rotateZ(-25deg);opacity:.4}50%{transform:rotateZ(15deg);opacity:.8}75%{transform:rotateZ(-5deg);opacity:1}100%{transform:rotateX(0);opacity:1}}@keyframes swal2-toast-show{0%{transform:translateY(-0.625em) rotateZ(2deg)}33%{transform:translateY(0) rotateZ(-2deg)}66%{transform:translateY(0.3125em) rotateZ(2deg)}100%{transform:translateY(0) rotateZ(0deg)}}@keyframes swal2-toast-hide{100%{transform:rotateZ(1deg);opacity:0}}@keyframes swal2-toast-animate-success-line-tip{0%{top:.5625em;left:.0625em;width:0}54%{top:.125em;left:.125em;width:0}70%{top:.625em;left:-0.25em;width:1.625em}84%{top:1.0625em;left:.75em;width:.5em}100%{top:1.125em;left:.1875em;width:.75em}}@keyframes swal2-toast-animate-success-line-long{0%{top:1.625em;right:1.375em;width:0}65%{top:1.25em;right:.9375em;width:0}84%{top:.9375em;right:0;width:1.125em}100%{top:.9375em;right:.1875em;width:1.375em}}'
  );
const NA = () => {
  const n = qr(),
    [i, r] = V.useState(null),
    s = async () => {
      try {
        const c = await Xt.get(
          "https://685c4d07769de2bf085c58e4.mockapi.io/Product"
        );
        r(c.data);
      } catch (c) {
        console.error(c.message);
      }
    };
  return (
    V.useEffect(() => {
      s();
    }, []),
    k.jsx(k.Fragment, {
      children: k.jsxs("div", {
        className:
          "flex flex-wrap flex-row gap-5 justify-center items-center p-2 bg-cyan-700 pt-5 relative",
        children: [
          i?.map((c) => k.jsx(kE, { item: c }, c.id)),
          k.jsxs("button", {
            className: "btn btn-light absolute top-2 left-15 ",
            onClick: () => n("/Products/create"),
            children: [
              "Add Product",
              k.jsx(jE, { className: "inline-block ml-2 mb-1" }),
            ],
          }),
        ],
      }),
    })
  );
};
function DA(n) {
  return tn({
    attr: { viewBox: "0 0 1024 1024" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M922.9 701.9H327.4l29.9-60.9 496.8-.9c16.8 0 31.2-12 34.2-28.6l68.8-385.1c1.8-10.1-.9-20.5-7.5-28.4a34.99 34.99 0 0 0-26.6-12.5l-632-2.1-5.4-25.4c-3.4-16.2-18-28-34.6-28H96.5a35.3 35.3 0 1 0 0 70.6h125.9L246 312.8l58.1 281.3-74.8 122.1a34.96 34.96 0 0 0-3 36.8c6 11.9 18.1 19.4 31.5 19.4h62.8a102.43 102.43 0 0 0-20.6 61.7c0 56.6 46 102.6 102.6 102.6s102.6-46 102.6-102.6c0-22.3-7.4-44-20.6-61.7h161.1a102.43 102.43 0 0 0-20.6 61.7c0 56.6 46 102.6 102.6 102.6s102.6-46 102.6-102.6c0-22.3-7.4-44-20.6-61.7H923c19.4 0 35.3-15.8 35.3-35.3a35.42 35.42 0 0 0-35.4-35.2zM305.7 253l575.8 1.9-56.4 315.8-452.3.8L305.7 253zm96.9 612.7c-17.4 0-31.6-14.2-31.6-31.6 0-17.4 14.2-31.6 31.6-31.6s31.6 14.2 31.6 31.6a31.6 31.6 0 0 1-31.6 31.6zm325.1 0c-17.4 0-31.6-14.2-31.6-31.6 0-17.4 14.2-31.6 31.6-31.6s31.6 14.2 31.6 31.6a31.6 31.6 0 0 1-31.6 31.6z",
        },
        child: [],
      },
    ],
  })(n);
}
function RA(n) {
  return tn({
    attr: { viewBox: "0 0 24 24" },
    child: [
      { tag: "path", attr: { fill: "none", d: "M0 0h24v24H0V0z" }, child: [] },
      {
        tag: "path",
        attr: {
          d: "M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM8 9h8v10H8V9zm7.5-5-1-1h-5l-1 1H5v2h14V4z",
        },
        child: [],
      },
    ],
  })(n);
}
function MA(n) {
  return tn({
    attr: { viewBox: "0 0 24 24" },
    child: [
      { tag: "path", attr: { fill: "none", d: "M0 0h24v24H0z" }, child: [] },
      {
        tag: "path",
        attr: {
          d: "M2 17h2v.5H3v1h1v.5H2v1h3v-4H2v1zm1-9h1V4H2v1h1v3zm-1 3h1.8L2 13.1v.9h3v-1H3.2L5 10.9V10H2v1zm5-6v2h14V5H7zm0 14h14v-2H7v2zm0-6h14v-2H7v2z",
        },
        child: [],
      },
    ],
  })(n);
}
function Bb(n) {
  return tn({
    attr: { viewBox: "0 0 24 24" },
    child: [
      { tag: "path", attr: { fill: "none", d: "M0 0h24v24H0V0z" }, child: [] },
      {
        tag: "path",
        attr: {
          d: "M8 16h8v2H8zm0-4h8v2H8zm6-10H6c-1.1 0-2 .9-2 2v16c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm4 18H6V4h7v5h5v11z",
        },
        child: [],
      },
    ],
  })(n);
}
function zb(n) {
  return tn({
    attr: { viewBox: "0 0 24 24" },
    child: [
      { tag: "path", attr: { fill: "none", d: "M0 0h24v24H0V0z" }, child: [] },
      {
        tag: "path",
        attr: {
          d: "M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 14H4V6h16v12zM6 10h2v2H6zm0 4h8v2H6zm10 0h2v2h-2zm-6-4h8v2h-8z",
        },
        child: [],
      },
    ],
  })(n);
}
const LA = ({ id: n }) => {
  const i = qr(),
    r = () => {
      Sl.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: !0,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!",
      }).then((s) => {
        s.isConfirmed
          ? (Sl.fire({
              title: "Deleted!",
              text: "Your Product has been deleted.",
              icon: "success",
            }),
            Xt.delete(
              `https://685c4d07769de2bf085c58e4.mockapi.io/Product/${n}`
            ),
            i("/Products"))
          : Sl.fire({
              position: "center-center",
              icon: "success",
              title: "Your Product is safe!",
              showConfirmButton: !1,
              timer: 1500,
            });
      });
    };
  return k.jsx(k.Fragment, {
    children: k.jsxs("button", {
      className: "btn btn-danger p-1.5 m-2",
      onClick: r,
      children: ["Delete ", k.jsx(RA, { className: "inline-block mb-1" })],
    }),
  });
};
function Hb(n) {
  return tn({
    attr: {
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "2",
      strokeLinecap: "round",
      strokeLinejoin: "round",
    },
    child: [
      {
        tag: "path",
        attr: { d: "M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z" },
        child: [],
      },
    ],
  })(n);
}
const BA = () => {
  const { id: n } = nv(),
    [i, r] = V.useState(null);
  qr();
  const s = async () => {
    try {
      const c = await Xt(
        `https://685c4d07769de2bf085c58e4.mockapi.io/Product/${n}`
      );
      r(c.data);
    } catch (c) {
      console.log(c.message);
    }
  };
  return (
    V.useEffect(() => {
      s();
    }, []),
    k.jsx(k.Fragment, {
      children: k.jsxs("div", {
        className: "bg-cyan-700 md:p-5 p-4 pt-5 relative",
        children: [
          k.jsxs("div", {
            className:
              "absolute top-0 left-0 w-full justify-between flex md:block",
            children: [
              k.jsxs(Tl, {
                className: "btn btn-dark px-4 relative m-2 top-0",
                to: "/Products",
                children: [
                  k.jsx(jv, { className: "inline absolute left-1 top-2.5" }),
                  "Back",
                ],
              }),
              n > 20 ? k.jsx(LA, { id: n }) : null,
              n > 20
                ? k.jsxs(Tl, {
                    to: `/Products/Edit/${n}`,
                    className: "btn btn-info p-1.5 text-white m-2",
                    children: [
                      "Edit",
                      k.jsx(Hb, { className: "inline-block ml-2 mb-1" }),
                    ],
                  })
                : null,
            ],
          }),
          k.jsx("div", {
            className: "flex items-center justify-center pt-2",
            children: k.jsx("div", {
              className:
                "bg-white max-w-6xl w-full rounded-2xl shadow-xl p-9 md:w-fit",
              children: k.jsxs("div", {
                className: "flex flex-col md:flex-row  items-center gap-6",
                children: [
                  k.jsx("img", {
                    src: i && i.image,
                    alt: "",
                    className: "w-64 h-64 object-contain rounded-xl shadow-md",
                  }),
                  k.jsxs("div", {
                    className: "text-gray-800",
                    children: [
                      k.jsx("h2", {
                        className: "text-3xl font-bold mb-2",
                        children: i && i.title,
                      }),
                      k.jsxs("p", {
                        className: "text-xl text-teal-700 font-semibold mb-4",
                        children: ["price : ", i && i.price, "$"],
                      }),
                      k.jsx("p", {
                        className: "text-gray-600 leading-relaxed",
                        children: i && i.description,
                      }),
                    ],
                  }),
                  k.jsxs("button", {
                    className: "btn btn-success w-full md:w-110",
                    children: [
                      "Add to Cart",
                      k.jsx(DA, { className: "mx-2 mb-1 inline-block" }),
                    ],
                  }),
                ],
              }),
            }),
          }),
        ],
      }),
    })
  );
};
function kb(n) {
  return tn({
    attr: { viewBox: "0 0 24 24", fill: "currentColor" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M10.9042 2.10025L20.8037 3.51446L22.2179 13.414L13.0255 22.6063C12.635 22.9969 12.0019 22.9969 11.6113 22.6063L1.71184 12.7069C1.32131 12.3163 1.32131 11.6832 1.71184 11.2926L10.9042 2.10025ZM11.6113 4.22157L3.83316 11.9997L12.3184 20.485L20.0966 12.7069L19.036 5.28223L11.6113 4.22157ZM13.7327 10.5855C12.9516 9.80448 12.9516 8.53815 13.7327 7.7571C14.5137 6.97606 15.78 6.97606 16.5611 7.7571C17.3421 8.53815 17.3421 9.80448 16.5611 10.5855C15.78 11.3666 14.5137 11.3666 13.7327 10.5855Z",
        },
        child: [],
      },
    ],
  })(n);
}
function zA(n) {
  return tn({
    attr: { version: "1.2", baseProfile: "tiny", viewBox: "0 0 24 24" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M21.436 7.586l-3.998-4.02c-.752-.756-2.063-.764-2.83-.006-.196.196-.35.436-.418.629-.653 1.362-1.354 2.215-2.254 2.727l-.217.105c-.968.485-2.285.979-4.719.979-.266 0-.521.052-.766.152-.484.202-.879.595-1.082 1.084-.199.484-.199 1.041 0 1.525.104.249.25.471.435.651l3.235 3.235-3.822 5.353 5.352-3.822 3.227 3.227c.186.189.406.339.656.441.247.103.503.154.766.154s.519-.052.765-.154c.498-.205.883-.592 1.08-1.078.103-.242.155-.507.155-.768 0-2.436.494-3.752.978-4.721.496-.992 1.369-1.748 2.754-2.414.271-.104.51-.256.711-.457.772-.782.768-2.051-.008-2.822zm-5.248 4.801c-.819 1.643-1.188 3.37-1.195 5.604l-7.993-7.991c2.139 0 3.814-.335 5.396-1.084l.235-.105c1.399-.699 2.468-1.893 3.388-3.834l3.924 4.051c-1.863.893-3.056 1.96-3.755 3.359z",
        },
        child: [],
      },
    ],
  })(n);
}
const HA = () => {
    const [n, i] = V.useState(0),
      [r, s] = V.useState(""),
      [c, d] = V.useState(""),
      [p, y] = V.useState(""),
      [b, g] = V.useState(""),
      w = qr(),
      O = (N) => {
        N.preventDefault(),
          Sl.fire({
            title: "Good job!",
            text: "You create a new product",
            icon: "success",
          }),
          (async () => {
            try {
              let x = await Xt.post(
                "https://685c4d07769de2bf085c58e4.mockapi.io/Product",
                { title: r, image: p, description: c, price: b, id: n }
              );
              w("/Products");
            } catch (x) {
              console.log(x);
            }
          })();
      };
    return k.jsx(k.Fragment, {
      children: k.jsxs("div", {
        className: "bg-cyan-200 pt-10 pb-10 px-0 min-h-screen",
        children: [
          k.jsxs("h1", {
            className: "text-3xl text-center mb-6",
            style: { fontWeight: "bold", color: "#308090" },
            children: [
              "Create Product ",
              k.jsx(UE, { className: "inline-block mx-1 mb-2" }),
            ],
          }),
          k.jsx("div", {
            className:
              "rounded-2xl shadow-2xl bg-cyan-900 p-6 w-[90%] max-w-lg mx-auto",
            children: k.jsxs("form", {
              action: "#",
              method: "post",
              className: "flex flex-col gap-4",
              onSubmit: (N) => O(N),
              children: [
                k.jsxs("label", {
                  className: "text-cyan-200 font-semibold cursor-pointer",
                  htmlFor: "id",
                  children: [
                    "Product Id",
                    k.jsx(MA, { className: "inline-block mb-1 mx-1 size-5" }),
                  ],
                }),
                k.jsx("input", {
                  id: "id",
                  type: "text",
                  placeholder: "Enter product title",
                  className:
                    "p-2 rounded-md border border-cyan-700 bg-cyan-800 text-cyan-100 focus:outline-none focus:ring-2 focus:ring-cyan-400",
                  required: !0,
                  onChange: (N) => i(N.target.value),
                }),
                n < 20
                  ? k.jsxs("p", {
                      className: "text-red-500 text-sm inline-block",
                      children: [
                        k.jsx(zA, {
                          className: "inline-block mx-2 text-red-500",
                        }),
                        "Product Id must be more than 20",
                      ],
                    })
                  : null,
                k.jsxs("label", {
                  className: "text-cyan-200 font-semibold cursor-pointer",
                  htmlFor: "title",
                  children: [
                    "Product Title ",
                    k.jsx(zb, { className: "inline-block" }),
                  ],
                }),
                k.jsx("input", {
                  id: "title",
                  type: "text",
                  placeholder: "Enter product title",
                  className:
                    "p-2 rounded-md border border-cyan-700 bg-cyan-800 text-cyan-100 focus:outline-none focus:ring-2 focus:ring-cyan-400",
                  required: !0,
                  onChange: (N) => s(N.target.value),
                }),
                k.jsxs("label", {
                  className: "text-cyan-200 font-semibold cursor-pointer",
                  htmlFor: "description",
                  children: [
                    "Description",
                    k.jsx(Bb, { className: "inline-block mx-1" }),
                  ],
                }),
                k.jsx("textarea", {
                  id: "description",
                  placeholder: "Enter product description",
                  className:
                    "p-2 rounded-md border border-cyan-700 bg-cyan-800 text-cyan-100 focus:outline-none focus:ring-2 focus:ring-cyan-400",
                  rows: 4,
                  required: !0,
                  onChange: (N) => d(N.target.value),
                }),
                k.jsxs("label", {
                  className: "text-cyan-200 font-semibold cursor-pointer",
                  htmlFor: "price",
                  children: [
                    "Price ",
                    k.jsx(kb, { className: "inline-block" }),
                  ],
                }),
                k.jsx("input", {
                  id: "price",
                  type: "number",
                  placeholder: "Enter product price",
                  className:
                    "p-2 rounded-md border border-cyan-700 bg-cyan-800 text-cyan-100 focus:outline-none focus:ring-2 focus:ring-cyan-400",
                  required: !0,
                  min: "0",
                  step: "0.1",
                  onChange: (N) => g(N.target.value),
                }),
                k.jsxs("label", {
                  className: "text-cyan-200 font-semibold cursor-pointer",
                  htmlFor: "image",
                  children: [
                    "Product URL image ",
                    k.jsx(Uv, { className: "inline-block" }),
                  ],
                }),
                k.jsx("input", {
                  id: "image",
                  type: "text",
                  placeholder: "Enter product title",
                  className:
                    "p-2 rounded-md border border-cyan-700 bg-cyan-800 text-cyan-100 focus:outline-none focus:ring-2 focus:ring-cyan-400",
                  required: !0,
                  onChange: (N) => y(N.target.value),
                }),
                k.jsx("button", {
                  type: "submit",
                  className:
                    "mt-4 bg-cyan-600 hover:bg-cyan-700 text-white font-bold py-2 rounded-md transition-colors",
                  disabled: n < 20 ? "disabled" : null,
                  children: "Create",
                }),
              ],
            }),
          }),
        ],
      }),
    });
  },
  kA = ({ product: n }) => {
    const [i, r] = V.useState(""),
      [s, c] = V.useState(""),
      [d, p] = V.useState(""),
      [y, b] = V.useState("");
    V.useEffect(() => {
      r(n.title), c(n.description), p(n.price), b(n.image);
    }, []);
    const g = qr(),
      w = (O) => {
        O.preventDefault(),
          (async () => {
            try {
              let q = Xt.put(
                `https://685c4d07769de2bf085c58e4.mockapi.io/Product/${n.id}`,
                { title: i, description: s, price: d, image: y },
                g("/Products")
              );
            } catch (q) {
              console.log(q.message);
            }
          })();
      };
    return k.jsx(k.Fragment, {
      children: k.jsxs("div", {
        className: "bg-cyan-200 pt-10 pb-10 px-0 min-h-screen",
        children: [
          k.jsxs("h1", {
            className: "text-3xl text-center mb-6",
            style: { fontWeight: "bold", color: "#308090" },
            children: [
              "Edit Product ",
              k.jsx(Hb, { className: "inline-block mx-1 mb-2" }),
            ],
          }),
          k.jsxs(Tl, {
            className: "btn btn-dark px-4 relative m-2 top-0",
            to: `/Products/${n.id}`,
            children: [
              k.jsx(jv, { className: "inline absolute left-1 top-2.5" }),
              "Back",
            ],
          }),
          k.jsx("div", {
            className:
              "rounded-2xl shadow-2xl bg-cyan-900 p-6 w-[90%] max-w-lg mx-auto",
            children: k.jsxs("form", {
              action: "#",
              method: "post",
              className: "flex flex-col gap-4",
              onSubmit: (O) => w(O),
              children: [
                k.jsxs("label", {
                  className: "text-cyan-200 font-semibold cursor-pointer",
                  htmlFor: "title",
                  children: [
                    "Product Title ",
                    k.jsx(zb, { className: "inline-block" }),
                  ],
                }),
                k.jsx("input", {
                  id: "title",
                  type: "text",
                  placeholder: "Enter product title",
                  className:
                    "p-2 rounded-md border border-cyan-700 bg-cyan-800 text-cyan-100 focus:outline-none focus:ring-2 focus:ring-cyan-400 font-bold",
                  required: !0,
                  value: i,
                  onChange: (O) => r(O.target.value),
                }),
                k.jsxs("label", {
                  className: "text-cyan-200 font-semibold cursor-pointer",
                  htmlFor: "description",
                  children: [
                    "Description",
                    k.jsx(Bb, { className: "inline-block mx-1" }),
                  ],
                }),
                k.jsx("textarea", {
                  id: "description",
                  placeholder: "Enter product description",
                  className:
                    "p-2 rounded-md border border-cyan-700 bg-cyan-800 text-cyan-100 focus:outline-none focus:ring-2 focus:ring-cyan-400 font-bold",
                  rows: 4,
                  value: s,
                  required: !0,
                  onChange: (O) => c(O.target.value),
                }),
                k.jsxs("label", {
                  className: "text-cyan-200 font-semibold cursor-pointer",
                  htmlFor: "price",
                  children: [
                    "Price ",
                    k.jsx(kb, { className: "inline-block" }),
                  ],
                }),
                k.jsx("input", {
                  id: "price",
                  type: "number",
                  placeholder: "Enter product price",
                  className:
                    "p-2 rounded-md border border-cyan-700 bg-cyan-800 text-cyan-100 focus:outline-none focus:ring-2 focus:ring-cyan-400 font-bold",
                  required: !0,
                  value: d,
                  min: "0",
                  step: "0.1",
                  onChange: (O) => p(O.target.value),
                }),
                k.jsxs("label", {
                  className: "text-cyan-200 font-semibold cursor-pointer",
                  htmlFor: "image",
                  children: [
                    "Product URL image ",
                    k.jsx(Uv, { className: "inline-block" }),
                  ],
                }),
                k.jsx("input", {
                  id: "image",
                  type: "text",
                  placeholder: "Enter product title",
                  className:
                    "p-2 rounded-md border border-cyan-700 bg-cyan-800 text-cyan-100 focus:outline-none focus:ring-2 focus:ring-cyan-400 font-bold",
                  required: !0,
                  value: y,
                  onChange: (O) => b(O.target.value),
                }),
                k.jsx("button", {
                  type: "submit",
                  className:
                    "mt-4 bg-cyan-600 hover:bg-cyan-700 text-white font-bold py-2 rounded-md transition-colors",
                  children: "Update",
                }),
              ],
            }),
          }),
        ],
      }),
    });
  },
  jA = () => {
    const { id: n } = nv(),
      [i, r] = V.useState(null),
      s = async () => {
        try {
          const c = await Xt.get(
            `https://685c4d07769de2bf085c58e4.mockapi.io/Product/${n}`
          );
          r(c.data);
        } catch (c) {
          console.log(c.message);
        }
      };
    return (
      V.useEffect(() => {
        s();
      }, []),
      k.jsx(k.Fragment, { children: i && k.jsx(kA, { product: i }) })
    );
  },
  UA = () =>
    k.jsx(k.Fragment, {
      children: k.jsxs(lv, {
        children: [
          k.jsx(Hi, { path: "/", element: k.jsx(NA, {}) }),
          k.jsx(Hi, { path: "/:id", element: k.jsx(BA, {}) }),
          k.jsx(Hi, { path: "/Create", element: k.jsx(HA, {}) }),
          k.jsx(Hi, { path: "/Edit/:id", element: k.jsx(jA, {}) }),
        ],
      }),
    }),
  $A = () =>
    k.jsx(k.Fragment, {
      children: k.jsxs($2, {
        children: [
          k.jsx(Z2, {}),
          k.jsxs(lv, {
            children: [
              k.jsx(Hi, { path: "/", element: k.jsx(I2, {}) }),
              k.jsx(Hi, { path: "/Products/*", element: k.jsx(UA, {}) }),
              k.jsx(Hi, { path: "*", element: k.jsx(F2, {}) }),
            ],
          }),
        ],
      }),
    });
var Mc = { exports: {} },
  ke = "top",
  gn = "bottom",
  vn = "right",
  je = "left",
  cf = "auto",
  Qr = [ke, gn, vn, je],
  Cl = "start",
  Br = "end",
  jb = "clippingParents",
  sm = "viewport",
  Nr = "popper",
  Ub = "reference",
  Bh = Qr.reduce(function (n, i) {
    return n.concat([i + "-" + Cl, i + "-" + Br]);
  }, []),
  om = [].concat(Qr, [cf]).reduce(function (n, i) {
    return n.concat([i, i + "-" + Cl, i + "-" + Br]);
  }, []),
  $b = "beforeRead",
  qb = "read",
  Vb = "afterRead",
  Yb = "beforeMain",
  Pb = "main",
  Gb = "afterMain",
  Kb = "beforeWrite",
  Xb = "write",
  Qb = "afterWrite",
  Zb = [$b, qb, Vb, Yb, Pb, Gb, Kb, Xb, Qb];
function wa(n) {
  return n ? (n.nodeName || "").toLowerCase() : null;
}
function bn(n) {
  if (n == null) return window;
  if (n.toString() !== "[object Window]") {
    var i = n.ownerDocument;
    return (i && i.defaultView) || window;
  }
  return n;
}
function Nl(n) {
  var i = bn(n).Element;
  return n instanceof i || n instanceof Element;
}
function Ln(n) {
  var i = bn(n).HTMLElement;
  return n instanceof i || n instanceof HTMLElement;
}
function um(n) {
  if (typeof ShadowRoot > "u") return !1;
  var i = bn(n).ShadowRoot;
  return n instanceof i || n instanceof ShadowRoot;
}
function qA(n) {
  var i = n.state;
  Object.keys(i.elements).forEach(function (r) {
    var s = i.styles[r] || {},
      c = i.attributes[r] || {},
      d = i.elements[r];
    !Ln(d) ||
      !wa(d) ||
      (Object.assign(d.style, s),
      Object.keys(c).forEach(function (p) {
        var y = c[p];
        y === !1 ? d.removeAttribute(p) : d.setAttribute(p, y === !0 ? "" : y);
      }));
  });
}
function VA(n) {
  var i = n.state,
    r = {
      popper: {
        position: i.options.strategy,
        left: "0",
        top: "0",
        margin: "0",
      },
      arrow: { position: "absolute" },
      reference: {},
    };
  return (
    Object.assign(i.elements.popper.style, r.popper),
    (i.styles = r),
    i.elements.arrow && Object.assign(i.elements.arrow.style, r.arrow),
    function () {
      Object.keys(i.elements).forEach(function (s) {
        var c = i.elements[s],
          d = i.attributes[s] || {},
          p = Object.keys(i.styles.hasOwnProperty(s) ? i.styles[s] : r[s]),
          y = p.reduce(function (b, g) {
            return (b[g] = ""), b;
          }, {});
        !Ln(c) ||
          !wa(c) ||
          (Object.assign(c.style, y),
          Object.keys(d).forEach(function (b) {
            c.removeAttribute(b);
          }));
      });
    }
  );
}
const cm = {
  name: "applyStyles",
  enabled: !0,
  phase: "write",
  fn: qA,
  effect: VA,
  requires: ["computeStyles"],
};
function va(n) {
  return n.split("-")[0];
}
var Al = Math.max,
  Qc = Math.min,
  zr = Math.round;
function zh() {
  var n = navigator.userAgentData;
  return n != null && n.brands && Array.isArray(n.brands)
    ? n.brands
        .map(function (i) {
          return i.brand + "/" + i.version;
        })
        .join(" ")
    : navigator.userAgent;
}
function Ib() {
  return !/^((?!chrome|android).)*safari/i.test(zh());
}
function Hr(n, i, r) {
  i === void 0 && (i = !1), r === void 0 && (r = !1);
  var s = n.getBoundingClientRect(),
    c = 1,
    d = 1;
  i &&
    Ln(n) &&
    ((c = (n.offsetWidth > 0 && zr(s.width) / n.offsetWidth) || 1),
    (d = (n.offsetHeight > 0 && zr(s.height) / n.offsetHeight) || 1));
  var p = Nl(n) ? bn(n) : window,
    y = p.visualViewport,
    b = !Ib() && r,
    g = (s.left + (b && y ? y.offsetLeft : 0)) / c,
    w = (s.top + (b && y ? y.offsetTop : 0)) / d,
    O = s.width / c,
    N = s.height / d;
  return {
    width: O,
    height: N,
    top: w,
    right: g + O,
    bottom: w + N,
    left: g,
    x: g,
    y: w,
  };
}
function fm(n) {
  var i = Hr(n),
    r = n.offsetWidth,
    s = n.offsetHeight;
  return (
    Math.abs(i.width - r) <= 1 && (r = i.width),
    Math.abs(i.height - s) <= 1 && (s = i.height),
    { x: n.offsetLeft, y: n.offsetTop, width: r, height: s }
  );
}
function Fb(n, i) {
  var r = i.getRootNode && i.getRootNode();
  if (n.contains(i)) return !0;
  if (r && um(r)) {
    var s = i;
    do {
      if (s && n.isSameNode(s)) return !0;
      s = s.parentNode || s.host;
    } while (s);
  }
  return !1;
}
function ni(n) {
  return bn(n).getComputedStyle(n);
}
function YA(n) {
  return ["table", "td", "th"].indexOf(wa(n)) >= 0;
}
function Ui(n) {
  return ((Nl(n) ? n.ownerDocument : n.document) || window.document)
    .documentElement;
}
function ff(n) {
  return wa(n) === "html"
    ? n
    : n.assignedSlot || n.parentNode || (um(n) ? n.host : null) || Ui(n);
}
function j0(n) {
  return !Ln(n) || ni(n).position === "fixed" ? null : n.offsetParent;
}
function PA(n) {
  var i = /firefox/i.test(zh()),
    r = /Trident/i.test(zh());
  if (r && Ln(n)) {
    var s = ni(n);
    if (s.position === "fixed") return null;
  }
  var c = ff(n);
  for (um(c) && (c = c.host); Ln(c) && ["html", "body"].indexOf(wa(c)) < 0; ) {
    var d = ni(c);
    if (
      d.transform !== "none" ||
      d.perspective !== "none" ||
      d.contain === "paint" ||
      ["transform", "perspective"].indexOf(d.willChange) !== -1 ||
      (i && d.willChange === "filter") ||
      (i && d.filter && d.filter !== "none")
    )
      return c;
    c = c.parentNode;
  }
  return null;
}
function Lo(n) {
  for (var i = bn(n), r = j0(n); r && YA(r) && ni(r).position === "static"; )
    r = j0(r);
  return r &&
    (wa(r) === "html" || (wa(r) === "body" && ni(r).position === "static"))
    ? i
    : r || PA(n) || i;
}
function dm(n) {
  return ["top", "bottom"].indexOf(n) >= 0 ? "x" : "y";
}
function bo(n, i, r) {
  return Al(n, Qc(i, r));
}
function GA(n, i, r) {
  var s = bo(n, i, r);
  return s > r ? r : s;
}
function Jb() {
  return { top: 0, right: 0, bottom: 0, left: 0 };
}
function Wb(n) {
  return Object.assign({}, Jb(), n);
}
function ty(n, i) {
  return i.reduce(function (r, s) {
    return (r[s] = n), r;
  }, {});
}
var KA = function (i, r) {
  return (
    (i =
      typeof i == "function"
        ? i(Object.assign({}, r.rects, { placement: r.placement }))
        : i),
    Wb(typeof i != "number" ? i : ty(i, Qr))
  );
};
function XA(n) {
  var i,
    r = n.state,
    s = n.name,
    c = n.options,
    d = r.elements.arrow,
    p = r.modifiersData.popperOffsets,
    y = va(r.placement),
    b = dm(y),
    g = [je, vn].indexOf(y) >= 0,
    w = g ? "height" : "width";
  if (!(!d || !p)) {
    var O = KA(c.padding, r),
      N = fm(d),
      q = b === "y" ? ke : je,
      x = b === "y" ? gn : vn,
      z =
        r.rects.reference[w] + r.rects.reference[b] - p[b] - r.rects.popper[w],
      M = p[b] - r.rects.reference[b],
      L = Lo(d),
      I = L ? (b === "y" ? L.clientHeight || 0 : L.clientWidth || 0) : 0,
      J = z / 2 - M / 2,
      et = O[q],
      Z = I - N[w] - O[x],
      rt = I / 2 - N[w] / 2 + J,
      ut = bo(et, rt, Z),
      bt = b;
    r.modifiersData[s] =
      ((i = {}), (i[bt] = ut), (i.centerOffset = ut - rt), i);
  }
}
function QA(n) {
  var i = n.state,
    r = n.options,
    s = r.element,
    c = s === void 0 ? "[data-popper-arrow]" : s;
  c != null &&
    ((typeof c == "string" && ((c = i.elements.popper.querySelector(c)), !c)) ||
      (Fb(i.elements.popper, c) && (i.elements.arrow = c)));
}
const ey = {
  name: "arrow",
  enabled: !0,
  phase: "main",
  fn: XA,
  effect: QA,
  requires: ["popperOffsets"],
  requiresIfExists: ["preventOverflow"],
};
function kr(n) {
  return n.split("-")[1];
}
var ZA = { top: "auto", right: "auto", bottom: "auto", left: "auto" };
function IA(n, i) {
  var r = n.x,
    s = n.y,
    c = i.devicePixelRatio || 1;
  return { x: zr(r * c) / c || 0, y: zr(s * c) / c || 0 };
}
function U0(n) {
  var i,
    r = n.popper,
    s = n.popperRect,
    c = n.placement,
    d = n.variation,
    p = n.offsets,
    y = n.position,
    b = n.gpuAcceleration,
    g = n.adaptive,
    w = n.roundOffsets,
    O = n.isFixed,
    N = p.x,
    q = N === void 0 ? 0 : N,
    x = p.y,
    z = x === void 0 ? 0 : x,
    M = typeof w == "function" ? w({ x: q, y: z }) : { x: q, y: z };
  (q = M.x), (z = M.y);
  var L = p.hasOwnProperty("x"),
    I = p.hasOwnProperty("y"),
    J = je,
    et = ke,
    Z = window;
  if (g) {
    var rt = Lo(r),
      ut = "clientHeight",
      bt = "clientWidth";
    if (
      (rt === bn(r) &&
        ((rt = Ui(r)),
        ni(rt).position !== "static" &&
          y === "absolute" &&
          ((ut = "scrollHeight"), (bt = "scrollWidth"))),
      (rt = rt),
      c === ke || ((c === je || c === vn) && d === Br))
    ) {
      et = gn;
      var ot =
        O && rt === Z && Z.visualViewport ? Z.visualViewport.height : rt[ut];
      (z -= ot - s.height), (z *= b ? 1 : -1);
    }
    if (c === je || ((c === ke || c === gn) && d === Br)) {
      J = vn;
      var gt =
        O && rt === Z && Z.visualViewport ? Z.visualViewport.width : rt[bt];
      (q -= gt - s.width), (q *= b ? 1 : -1);
    }
  }
  var yt = Object.assign({ position: y }, g && ZA),
    zt = w === !0 ? IA({ x: q, y: z }, bn(r)) : { x: q, y: z };
  if (((q = zt.x), (z = zt.y), b)) {
    var Vt;
    return Object.assign(
      {},
      yt,
      ((Vt = {}),
      (Vt[et] = I ? "0" : ""),
      (Vt[J] = L ? "0" : ""),
      (Vt.transform =
        (Z.devicePixelRatio || 1) <= 1
          ? "translate(" + q + "px, " + z + "px)"
          : "translate3d(" + q + "px, " + z + "px, 0)"),
      Vt)
    );
  }
  return Object.assign(
    {},
    yt,
    ((i = {}),
    (i[et] = I ? z + "px" : ""),
    (i[J] = L ? q + "px" : ""),
    (i.transform = ""),
    i)
  );
}
function FA(n) {
  var i = n.state,
    r = n.options,
    s = r.gpuAcceleration,
    c = s === void 0 ? !0 : s,
    d = r.adaptive,
    p = d === void 0 ? !0 : d,
    y = r.roundOffsets,
    b = y === void 0 ? !0 : y,
    g = {
      placement: va(i.placement),
      variation: kr(i.placement),
      popper: i.elements.popper,
      popperRect: i.rects.popper,
      gpuAcceleration: c,
      isFixed: i.options.strategy === "fixed",
    };
  i.modifiersData.popperOffsets != null &&
    (i.styles.popper = Object.assign(
      {},
      i.styles.popper,
      U0(
        Object.assign({}, g, {
          offsets: i.modifiersData.popperOffsets,
          position: i.options.strategy,
          adaptive: p,
          roundOffsets: b,
        })
      )
    )),
    i.modifiersData.arrow != null &&
      (i.styles.arrow = Object.assign(
        {},
        i.styles.arrow,
        U0(
          Object.assign({}, g, {
            offsets: i.modifiersData.arrow,
            position: "absolute",
            adaptive: !1,
            roundOffsets: b,
          })
        )
      )),
    (i.attributes.popper = Object.assign({}, i.attributes.popper, {
      "data-popper-placement": i.placement,
    }));
}
const hm = {
  name: "computeStyles",
  enabled: !0,
  phase: "beforeWrite",
  fn: FA,
  data: {},
};
var xc = { passive: !0 };
function JA(n) {
  var i = n.state,
    r = n.instance,
    s = n.options,
    c = s.scroll,
    d = c === void 0 ? !0 : c,
    p = s.resize,
    y = p === void 0 ? !0 : p,
    b = bn(i.elements.popper),
    g = [].concat(i.scrollParents.reference, i.scrollParents.popper);
  return (
    d &&
      g.forEach(function (w) {
        w.addEventListener("scroll", r.update, xc);
      }),
    y && b.addEventListener("resize", r.update, xc),
    function () {
      d &&
        g.forEach(function (w) {
          w.removeEventListener("scroll", r.update, xc);
        }),
        y && b.removeEventListener("resize", r.update, xc);
    }
  );
}
const mm = {
  name: "eventListeners",
  enabled: !0,
  phase: "write",
  fn: function () {},
  effect: JA,
  data: {},
};
var WA = { left: "right", right: "left", bottom: "top", top: "bottom" };
function Lc(n) {
  return n.replace(/left|right|bottom|top/g, function (i) {
    return WA[i];
  });
}
var tT = { start: "end", end: "start" };
function $0(n) {
  return n.replace(/start|end/g, function (i) {
    return tT[i];
  });
}
function pm(n) {
  var i = bn(n),
    r = i.pageXOffset,
    s = i.pageYOffset;
  return { scrollLeft: r, scrollTop: s };
}
function gm(n) {
  return Hr(Ui(n)).left + pm(n).scrollLeft;
}
function eT(n, i) {
  var r = bn(n),
    s = Ui(n),
    c = r.visualViewport,
    d = s.clientWidth,
    p = s.clientHeight,
    y = 0,
    b = 0;
  if (c) {
    (d = c.width), (p = c.height);
    var g = Ib();
    (g || (!g && i === "fixed")) && ((y = c.offsetLeft), (b = c.offsetTop));
  }
  return { width: d, height: p, x: y + gm(n), y: b };
}
function nT(n) {
  var i,
    r = Ui(n),
    s = pm(n),
    c = (i = n.ownerDocument) == null ? void 0 : i.body,
    d = Al(
      r.scrollWidth,
      r.clientWidth,
      c ? c.scrollWidth : 0,
      c ? c.clientWidth : 0
    ),
    p = Al(
      r.scrollHeight,
      r.clientHeight,
      c ? c.scrollHeight : 0,
      c ? c.clientHeight : 0
    ),
    y = -s.scrollLeft + gm(n),
    b = -s.scrollTop;
  return (
    ni(c || r).direction === "rtl" &&
      (y += Al(r.clientWidth, c ? c.clientWidth : 0) - d),
    { width: d, height: p, x: y, y: b }
  );
}
function vm(n) {
  var i = ni(n),
    r = i.overflow,
    s = i.overflowX,
    c = i.overflowY;
  return /auto|scroll|overlay|hidden/.test(r + c + s);
}
function ny(n) {
  return ["html", "body", "#document"].indexOf(wa(n)) >= 0
    ? n.ownerDocument.body
    : Ln(n) && vm(n)
    ? n
    : ny(ff(n));
}
function yo(n, i) {
  var r;
  i === void 0 && (i = []);
  var s = ny(n),
    c = s === ((r = n.ownerDocument) == null ? void 0 : r.body),
    d = bn(s),
    p = c ? [d].concat(d.visualViewport || [], vm(s) ? s : []) : s,
    y = i.concat(p);
  return c ? y : y.concat(yo(ff(p)));
}
function Hh(n) {
  return Object.assign({}, n, {
    left: n.x,
    top: n.y,
    right: n.x + n.width,
    bottom: n.y + n.height,
  });
}
function aT(n, i) {
  var r = Hr(n, !1, i === "fixed");
  return (
    (r.top = r.top + n.clientTop),
    (r.left = r.left + n.clientLeft),
    (r.bottom = r.top + n.clientHeight),
    (r.right = r.left + n.clientWidth),
    (r.width = n.clientWidth),
    (r.height = n.clientHeight),
    (r.x = r.left),
    (r.y = r.top),
    r
  );
}
function q0(n, i, r) {
  return i === sm ? Hh(eT(n, r)) : Nl(i) ? aT(i, r) : Hh(nT(Ui(n)));
}
function iT(n) {
  var i = yo(ff(n)),
    r = ["absolute", "fixed"].indexOf(ni(n).position) >= 0,
    s = r && Ln(n) ? Lo(n) : n;
  return Nl(s)
    ? i.filter(function (c) {
        return Nl(c) && Fb(c, s) && wa(c) !== "body";
      })
    : [];
}
function lT(n, i, r, s) {
  var c = i === "clippingParents" ? iT(n) : [].concat(i),
    d = [].concat(c, [r]),
    p = d[0],
    y = d.reduce(function (b, g) {
      var w = q0(n, g, s);
      return (
        (b.top = Al(w.top, b.top)),
        (b.right = Qc(w.right, b.right)),
        (b.bottom = Qc(w.bottom, b.bottom)),
        (b.left = Al(w.left, b.left)),
        b
      );
    }, q0(n, p, s));
  return (
    (y.width = y.right - y.left),
    (y.height = y.bottom - y.top),
    (y.x = y.left),
    (y.y = y.top),
    y
  );
}
function ay(n) {
  var i = n.reference,
    r = n.element,
    s = n.placement,
    c = s ? va(s) : null,
    d = s ? kr(s) : null,
    p = i.x + i.width / 2 - r.width / 2,
    y = i.y + i.height / 2 - r.height / 2,
    b;
  switch (c) {
    case ke:
      b = { x: p, y: i.y - r.height };
      break;
    case gn:
      b = { x: p, y: i.y + i.height };
      break;
    case vn:
      b = { x: i.x + i.width, y };
      break;
    case je:
      b = { x: i.x - r.width, y };
      break;
    default:
      b = { x: i.x, y: i.y };
  }
  var g = c ? dm(c) : null;
  if (g != null) {
    var w = g === "y" ? "height" : "width";
    switch (d) {
      case Cl:
        b[g] = b[g] - (i[w] / 2 - r[w] / 2);
        break;
      case Br:
        b[g] = b[g] + (i[w] / 2 - r[w] / 2);
        break;
    }
  }
  return b;
}
function jr(n, i) {
  i === void 0 && (i = {});
  var r = i,
    s = r.placement,
    c = s === void 0 ? n.placement : s,
    d = r.strategy,
    p = d === void 0 ? n.strategy : d,
    y = r.boundary,
    b = y === void 0 ? jb : y,
    g = r.rootBoundary,
    w = g === void 0 ? sm : g,
    O = r.elementContext,
    N = O === void 0 ? Nr : O,
    q = r.altBoundary,
    x = q === void 0 ? !1 : q,
    z = r.padding,
    M = z === void 0 ? 0 : z,
    L = Wb(typeof M != "number" ? M : ty(M, Qr)),
    I = N === Nr ? Ub : Nr,
    J = n.rects.popper,
    et = n.elements[x ? I : N],
    Z = lT(Nl(et) ? et : et.contextElement || Ui(n.elements.popper), b, w, p),
    rt = Hr(n.elements.reference),
    ut = ay({ reference: rt, element: J, placement: c }),
    bt = Hh(Object.assign({}, J, ut)),
    ot = N === Nr ? bt : rt,
    gt = {
      top: Z.top - ot.top + L.top,
      bottom: ot.bottom - Z.bottom + L.bottom,
      left: Z.left - ot.left + L.left,
      right: ot.right - Z.right + L.right,
    },
    yt = n.modifiersData.offset;
  if (N === Nr && yt) {
    var zt = yt[c];
    Object.keys(gt).forEach(function (Vt) {
      var ye = [vn, gn].indexOf(Vt) >= 0 ? 1 : -1,
        Gt = [ke, gn].indexOf(Vt) >= 0 ? "y" : "x";
      gt[Vt] += zt[Gt] * ye;
    });
  }
  return gt;
}
function rT(n, i) {
  i === void 0 && (i = {});
  var r = i,
    s = r.placement,
    c = r.boundary,
    d = r.rootBoundary,
    p = r.padding,
    y = r.flipVariations,
    b = r.allowedAutoPlacements,
    g = b === void 0 ? om : b,
    w = kr(s),
    O = w
      ? y
        ? Bh
        : Bh.filter(function (x) {
            return kr(x) === w;
          })
      : Qr,
    N = O.filter(function (x) {
      return g.indexOf(x) >= 0;
    });
  N.length === 0 && (N = O);
  var q = N.reduce(function (x, z) {
    return (
      (x[z] = jr(n, { placement: z, boundary: c, rootBoundary: d, padding: p })[
        va(z)
      ]),
      x
    );
  }, {});
  return Object.keys(q).sort(function (x, z) {
    return q[x] - q[z];
  });
}
function sT(n) {
  if (va(n) === cf) return [];
  var i = Lc(n);
  return [$0(n), i, $0(i)];
}
function oT(n) {
  var i = n.state,
    r = n.options,
    s = n.name;
  if (!i.modifiersData[s]._skip) {
    for (
      var c = r.mainAxis,
        d = c === void 0 ? !0 : c,
        p = r.altAxis,
        y = p === void 0 ? !0 : p,
        b = r.fallbackPlacements,
        g = r.padding,
        w = r.boundary,
        O = r.rootBoundary,
        N = r.altBoundary,
        q = r.flipVariations,
        x = q === void 0 ? !0 : q,
        z = r.allowedAutoPlacements,
        M = i.options.placement,
        L = va(M),
        I = L === M,
        J = b || (I || !x ? [Lc(M)] : sT(M)),
        et = [M].concat(J).reduce(function (st, wt) {
          return st.concat(
            va(wt) === cf
              ? rT(i, {
                  placement: wt,
                  boundary: w,
                  rootBoundary: O,
                  padding: g,
                  flipVariations: x,
                  allowedAutoPlacements: z,
                })
              : wt
          );
        }, []),
        Z = i.rects.reference,
        rt = i.rects.popper,
        ut = new Map(),
        bt = !0,
        ot = et[0],
        gt = 0;
      gt < et.length;
      gt++
    ) {
      var yt = et[gt],
        zt = va(yt),
        Vt = kr(yt) === Cl,
        ye = [ke, gn].indexOf(zt) >= 0,
        Gt = ye ? "width" : "height",
        U = jr(i, {
          placement: yt,
          boundary: w,
          rootBoundary: O,
          altBoundary: N,
          padding: g,
        }),
        W = ye ? (Vt ? vn : je) : Vt ? gn : ke;
      Z[Gt] > rt[Gt] && (W = Lc(W));
      var ct = Lc(W),
        xt = [];
      if (
        (d && xt.push(U[zt] <= 0),
        y && xt.push(U[W] <= 0, U[ct] <= 0),
        xt.every(function (st) {
          return st;
        }))
      ) {
        (ot = yt), (bt = !1);
        break;
      }
      ut.set(yt, xt);
    }
    if (bt)
      for (
        var A = x ? 3 : 1,
          X = function (wt) {
            var dt = et.find(function (ae) {
              var Dt = ut.get(ae);
              if (Dt)
                return Dt.slice(0, wt).every(function (qe) {
                  return qe;
                });
            });
            if (dt) return (ot = dt), "break";
          },
          at = A;
        at > 0;
        at--
      ) {
        var nt = X(at);
        if (nt === "break") break;
      }
    i.placement !== ot &&
      ((i.modifiersData[s]._skip = !0), (i.placement = ot), (i.reset = !0));
  }
}
const iy = {
  name: "flip",
  enabled: !0,
  phase: "main",
  fn: oT,
  requiresIfExists: ["offset"],
  data: { _skip: !1 },
};
function V0(n, i, r) {
  return (
    r === void 0 && (r = { x: 0, y: 0 }),
    {
      top: n.top - i.height - r.y,
      right: n.right - i.width + r.x,
      bottom: n.bottom - i.height + r.y,
      left: n.left - i.width - r.x,
    }
  );
}
function Y0(n) {
  return [ke, vn, gn, je].some(function (i) {
    return n[i] >= 0;
  });
}
function uT(n) {
  var i = n.state,
    r = n.name,
    s = i.rects.reference,
    c = i.rects.popper,
    d = i.modifiersData.preventOverflow,
    p = jr(i, { elementContext: "reference" }),
    y = jr(i, { altBoundary: !0 }),
    b = V0(p, s),
    g = V0(y, c, d),
    w = Y0(b),
    O = Y0(g);
  (i.modifiersData[r] = {
    referenceClippingOffsets: b,
    popperEscapeOffsets: g,
    isReferenceHidden: w,
    hasPopperEscaped: O,
  }),
    (i.attributes.popper = Object.assign({}, i.attributes.popper, {
      "data-popper-reference-hidden": w,
      "data-popper-escaped": O,
    }));
}
const ly = {
  name: "hide",
  enabled: !0,
  phase: "main",
  requiresIfExists: ["preventOverflow"],
  fn: uT,
};
function cT(n, i, r) {
  var s = va(n),
    c = [je, ke].indexOf(s) >= 0 ? -1 : 1,
    d = typeof r == "function" ? r(Object.assign({}, i, { placement: n })) : r,
    p = d[0],
    y = d[1];
  return (
    (p = p || 0),
    (y = (y || 0) * c),
    [je, vn].indexOf(s) >= 0 ? { x: y, y: p } : { x: p, y }
  );
}
function fT(n) {
  var i = n.state,
    r = n.options,
    s = n.name,
    c = r.offset,
    d = c === void 0 ? [0, 0] : c,
    p = om.reduce(function (w, O) {
      return (w[O] = cT(O, i.rects, d)), w;
    }, {}),
    y = p[i.placement],
    b = y.x,
    g = y.y;
  i.modifiersData.popperOffsets != null &&
    ((i.modifiersData.popperOffsets.x += b),
    (i.modifiersData.popperOffsets.y += g)),
    (i.modifiersData[s] = p);
}
const ry = {
  name: "offset",
  enabled: !0,
  phase: "main",
  requires: ["popperOffsets"],
  fn: fT,
};
function dT(n) {
  var i = n.state,
    r = n.name;
  i.modifiersData[r] = ay({
    reference: i.rects.reference,
    element: i.rects.popper,
    placement: i.placement,
  });
}
const bm = {
  name: "popperOffsets",
  enabled: !0,
  phase: "read",
  fn: dT,
  data: {},
};
function hT(n) {
  return n === "x" ? "y" : "x";
}
function mT(n) {
  var i = n.state,
    r = n.options,
    s = n.name,
    c = r.mainAxis,
    d = c === void 0 ? !0 : c,
    p = r.altAxis,
    y = p === void 0 ? !1 : p,
    b = r.boundary,
    g = r.rootBoundary,
    w = r.altBoundary,
    O = r.padding,
    N = r.tether,
    q = N === void 0 ? !0 : N,
    x = r.tetherOffset,
    z = x === void 0 ? 0 : x,
    M = jr(i, { boundary: b, rootBoundary: g, padding: O, altBoundary: w }),
    L = va(i.placement),
    I = kr(i.placement),
    J = !I,
    et = dm(L),
    Z = hT(et),
    rt = i.modifiersData.popperOffsets,
    ut = i.rects.reference,
    bt = i.rects.popper,
    ot =
      typeof z == "function"
        ? z(Object.assign({}, i.rects, { placement: i.placement }))
        : z,
    gt =
      typeof ot == "number"
        ? { mainAxis: ot, altAxis: ot }
        : Object.assign({ mainAxis: 0, altAxis: 0 }, ot),
    yt = i.modifiersData.offset ? i.modifiersData.offset[i.placement] : null,
    zt = { x: 0, y: 0 };
  if (rt) {
    if (d) {
      var Vt,
        ye = et === "y" ? ke : je,
        Gt = et === "y" ? gn : vn,
        U = et === "y" ? "height" : "width",
        W = rt[et],
        ct = W + M[ye],
        xt = W - M[Gt],
        A = q ? -bt[U] / 2 : 0,
        X = I === Cl ? ut[U] : bt[U],
        at = I === Cl ? -bt[U] : -ut[U],
        nt = i.elements.arrow,
        st = q && nt ? fm(nt) : { width: 0, height: 0 },
        wt = i.modifiersData["arrow#persistent"]
          ? i.modifiersData["arrow#persistent"].padding
          : Jb(),
        dt = wt[ye],
        ae = wt[Gt],
        Dt = bo(0, ut[U], st[U]),
        qe = J
          ? ut[U] / 2 - A - Dt - dt - gt.mainAxis
          : X - Dt - dt - gt.mainAxis,
        ai = J
          ? -ut[U] / 2 + A + Dt + ae + gt.mainAxis
          : at + Dt + ae + gt.mainAxis,
        Q = i.elements.arrow && Lo(i.elements.arrow),
        Sa = Q ? (et === "y" ? Q.clientTop || 0 : Q.clientLeft || 0) : 0,
        Aa = (Vt = yt?.[et]) != null ? Vt : 0,
        Ta = W + qe - Aa - Sa,
        en = W + ai - Aa,
        Jn = bo(q ? Qc(ct, Ta) : ct, W, q ? Al(xt, en) : xt);
      (rt[et] = Jn), (zt[et] = Jn - W);
    }
    if (y) {
      var Le,
        Be = et === "x" ? ke : je,
        ii = et === "x" ? gn : vn,
        it = rt[Z],
        Ve = Z === "y" ? "height" : "width",
        Ll = it + M[Be],
        Bl = it - M[ii],
        li = [ke, je].indexOf(L) !== -1,
        zl = (Le = yt?.[Z]) != null ? Le : 0,
        Wn = li ? Ll : it - ut[Ve] - bt[Ve] - zl + gt.altAxis,
        fe = li ? it + ut[Ve] + bt[Ve] - zl - gt.altAxis : Bl,
        nn = q && li ? GA(Wn, it, fe) : bo(q ? Wn : Ll, it, q ? fe : Bl);
      (rt[Z] = nn), (zt[Z] = nn - it);
    }
    i.modifiersData[s] = zt;
  }
}
const sy = {
  name: "preventOverflow",
  enabled: !0,
  phase: "main",
  fn: mT,
  requiresIfExists: ["offset"],
};
function pT(n) {
  return { scrollLeft: n.scrollLeft, scrollTop: n.scrollTop };
}
function gT(n) {
  return n === bn(n) || !Ln(n) ? pm(n) : pT(n);
}
function vT(n) {
  var i = n.getBoundingClientRect(),
    r = zr(i.width) / n.offsetWidth || 1,
    s = zr(i.height) / n.offsetHeight || 1;
  return r !== 1 || s !== 1;
}
function bT(n, i, r) {
  r === void 0 && (r = !1);
  var s = Ln(i),
    c = Ln(i) && vT(i),
    d = Ui(i),
    p = Hr(n, c, r),
    y = { scrollLeft: 0, scrollTop: 0 },
    b = { x: 0, y: 0 };
  return (
    (s || (!s && !r)) &&
      ((wa(i) !== "body" || vm(d)) && (y = gT(i)),
      Ln(i)
        ? ((b = Hr(i, !0)), (b.x += i.clientLeft), (b.y += i.clientTop))
        : d && (b.x = gm(d))),
    {
      x: p.left + y.scrollLeft - b.x,
      y: p.top + y.scrollTop - b.y,
      width: p.width,
      height: p.height,
    }
  );
}
function yT(n) {
  var i = new Map(),
    r = new Set(),
    s = [];
  n.forEach(function (d) {
    i.set(d.name, d);
  });
  function c(d) {
    r.add(d.name);
    var p = [].concat(d.requires || [], d.requiresIfExists || []);
    p.forEach(function (y) {
      if (!r.has(y)) {
        var b = i.get(y);
        b && c(b);
      }
    }),
      s.push(d);
  }
  return (
    n.forEach(function (d) {
      r.has(d.name) || c(d);
    }),
    s
  );
}
function wT(n) {
  var i = yT(n);
  return Zb.reduce(function (r, s) {
    return r.concat(
      i.filter(function (c) {
        return c.phase === s;
      })
    );
  }, []);
}
function ET(n) {
  var i;
  return function () {
    return (
      i ||
        (i = new Promise(function (r) {
          Promise.resolve().then(function () {
            (i = void 0), r(n());
          });
        })),
      i
    );
  };
}
function _T(n) {
  var i = n.reduce(function (r, s) {
    var c = r[s.name];
    return (
      (r[s.name] = c
        ? Object.assign({}, c, s, {
            options: Object.assign({}, c.options, s.options),
            data: Object.assign({}, c.data, s.data),
          })
        : s),
      r
    );
  }, {});
  return Object.keys(i).map(function (r) {
    return i[r];
  });
}
var P0 = { placement: "bottom", modifiers: [], strategy: "absolute" };
function G0() {
  for (var n = arguments.length, i = new Array(n), r = 0; r < n; r++)
    i[r] = arguments[r];
  return !i.some(function (s) {
    return !(s && typeof s.getBoundingClientRect == "function");
  });
}
function df(n) {
  n === void 0 && (n = {});
  var i = n,
    r = i.defaultModifiers,
    s = r === void 0 ? [] : r,
    c = i.defaultOptions,
    d = c === void 0 ? P0 : c;
  return function (y, b, g) {
    g === void 0 && (g = d);
    var w = {
        placement: "bottom",
        orderedModifiers: [],
        options: Object.assign({}, P0, d),
        modifiersData: {},
        elements: { reference: y, popper: b },
        attributes: {},
        styles: {},
      },
      O = [],
      N = !1,
      q = {
        state: w,
        setOptions: function (L) {
          var I = typeof L == "function" ? L(w.options) : L;
          z(),
            (w.options = Object.assign({}, d, w.options, I)),
            (w.scrollParents = {
              reference: Nl(y)
                ? yo(y)
                : y.contextElement
                ? yo(y.contextElement)
                : [],
              popper: yo(b),
            });
          var J = wT(_T([].concat(s, w.options.modifiers)));
          return (
            (w.orderedModifiers = J.filter(function (et) {
              return et.enabled;
            })),
            x(),
            q.update()
          );
        },
        forceUpdate: function () {
          if (!N) {
            var L = w.elements,
              I = L.reference,
              J = L.popper;
            if (G0(I, J)) {
              (w.rects = {
                reference: bT(I, Lo(J), w.options.strategy === "fixed"),
                popper: fm(J),
              }),
                (w.reset = !1),
                (w.placement = w.options.placement),
                w.orderedModifiers.forEach(function (gt) {
                  return (w.modifiersData[gt.name] = Object.assign(
                    {},
                    gt.data
                  ));
                });
              for (var et = 0; et < w.orderedModifiers.length; et++) {
                if (w.reset === !0) {
                  (w.reset = !1), (et = -1);
                  continue;
                }
                var Z = w.orderedModifiers[et],
                  rt = Z.fn,
                  ut = Z.options,
                  bt = ut === void 0 ? {} : ut,
                  ot = Z.name;
                typeof rt == "function" &&
                  (w =
                    rt({ state: w, options: bt, name: ot, instance: q }) || w);
              }
            }
          }
        },
        update: ET(function () {
          return new Promise(function (M) {
            q.forceUpdate(), M(w);
          });
        }),
        destroy: function () {
          z(), (N = !0);
        },
      };
    if (!G0(y, b)) return q;
    q.setOptions(g).then(function (M) {
      !N && g.onFirstUpdate && g.onFirstUpdate(M);
    });
    function x() {
      w.orderedModifiers.forEach(function (M) {
        var L = M.name,
          I = M.options,
          J = I === void 0 ? {} : I,
          et = M.effect;
        if (typeof et == "function") {
          var Z = et({ state: w, name: L, instance: q, options: J }),
            rt = function () {};
          O.push(Z || rt);
        }
      });
    }
    function z() {
      O.forEach(function (M) {
        return M();
      }),
        (O = []);
    }
    return q;
  };
}
var ST = df(),
  AT = [mm, bm, hm, cm],
  TT = df({ defaultModifiers: AT }),
  xT = [mm, bm, hm, cm, ry, iy, sy, ey, ly],
  OT = df({ defaultModifiers: xT });
const CT = Object.freeze(
    Object.defineProperty(
      {
        __proto__: null,
        afterMain: Gb,
        afterRead: Vb,
        afterWrite: Qb,
        applyStyles: cm,
        arrow: ey,
        auto: cf,
        basePlacements: Qr,
        beforeMain: Yb,
        beforeRead: $b,
        beforeWrite: Kb,
        bottom: gn,
        clippingParents: jb,
        computeStyles: hm,
        createPopper: OT,
        createPopperBase: ST,
        createPopperLite: TT,
        detectOverflow: jr,
        end: Br,
        eventListeners: mm,
        flip: iy,
        hide: ly,
        left: je,
        main: Pb,
        modifierPhases: Zb,
        offset: ry,
        placements: om,
        popper: Nr,
        popperGenerator: df,
        popperOffsets: bm,
        preventOverflow: sy,
        read: qb,
        reference: Ub,
        right: vn,
        start: Cl,
        top: ke,
        variationPlacements: Bh,
        viewport: sm,
        write: Xb,
      },
      Symbol.toStringTag,
      { value: "Module" }
    )
  ),
  NT = gw(CT);
/*!
 * Bootstrap v5.3.7 (https://getbootstrap.com/)
 * Copyright 2011-2025 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 */ var DT = Mc.exports,
  K0;
function RT() {
  return (
    K0 ||
      ((K0 = 1),
      (function (n, i) {
        (function (r, s) {
          n.exports = s(NT);
        })(DT, function (r) {
          function s(E) {
            const f = Object.create(null, {
              [Symbol.toStringTag]: { value: "Module" },
            });
            if (E) {
              for (const m in E)
                if (m !== "default") {
                  const S = Object.getOwnPropertyDescriptor(E, m);
                  Object.defineProperty(
                    f,
                    m,
                    S.get ? S : { enumerable: !0, get: () => E[m] }
                  );
                }
            }
            return (f.default = E), Object.freeze(f);
          }
          const c = s(r),
            d = new Map(),
            p = {
              set(E, f, m) {
                d.has(E) || d.set(E, new Map());
                const S = d.get(E);
                if (!S.has(f) && S.size !== 0) {
                  console.error(
                    `Bootstrap doesn't allow more than one instance per element. Bound instance: ${
                      Array.from(S.keys())[0]
                    }.`
                  );
                  return;
                }
                S.set(f, m);
              },
              get(E, f) {
                return (d.has(E) && d.get(E).get(f)) || null;
              },
              remove(E, f) {
                if (!d.has(E)) return;
                const m = d.get(E);
                m.delete(f), m.size === 0 && d.delete(E);
              },
            },
            y = 1e6,
            b = 1e3,
            g = "transitionend",
            w = (E) => (
              E &&
                window.CSS &&
                window.CSS.escape &&
                (E = E.replace(/#([^\s"#']+)/g, (f, m) => `#${CSS.escape(m)}`)),
              E
            ),
            O = (E) =>
              E == null
                ? `${E}`
                : Object.prototype.toString
                    .call(E)
                    .match(/\s([a-z]+)/i)[1]
                    .toLowerCase(),
            N = (E) => {
              do E += Math.floor(Math.random() * y);
              while (document.getElementById(E));
              return E;
            },
            q = (E) => {
              if (!E) return 0;
              let { transitionDuration: f, transitionDelay: m } =
                window.getComputedStyle(E);
              const S = Number.parseFloat(f),
                Y = Number.parseFloat(m);
              return !S && !Y
                ? 0
                : ((f = f.split(",")[0]),
                  (m = m.split(",")[0]),
                  (Number.parseFloat(f) + Number.parseFloat(m)) * b);
            },
            x = (E) => {
              E.dispatchEvent(new Event(g));
            },
            z = (E) =>
              !E || typeof E != "object"
                ? !1
                : (typeof E.jquery < "u" && (E = E[0]),
                  typeof E.nodeType < "u"),
            M = (E) =>
              z(E)
                ? E.jquery
                  ? E[0]
                  : E
                : typeof E == "string" && E.length > 0
                ? document.querySelector(w(E))
                : null,
            L = (E) => {
              if (!z(E) || E.getClientRects().length === 0) return !1;
              const f =
                  getComputedStyle(E).getPropertyValue("visibility") ===
                  "visible",
                m = E.closest("details:not([open])");
              if (!m) return f;
              if (m !== E) {
                const S = E.closest("summary");
                if ((S && S.parentNode !== m) || S === null) return !1;
              }
              return f;
            },
            I = (E) =>
              !E ||
              E.nodeType !== Node.ELEMENT_NODE ||
              E.classList.contains("disabled")
                ? !0
                : typeof E.disabled < "u"
                ? E.disabled
                : E.hasAttribute("disabled") &&
                  E.getAttribute("disabled") !== "false",
            J = (E) => {
              if (!document.documentElement.attachShadow) return null;
              if (typeof E.getRootNode == "function") {
                const f = E.getRootNode();
                return f instanceof ShadowRoot ? f : null;
              }
              return E instanceof ShadowRoot
                ? E
                : E.parentNode
                ? J(E.parentNode)
                : null;
            },
            et = () => {},
            Z = (E) => {
              E.offsetHeight;
            },
            rt = () =>
              window.jQuery && !document.body.hasAttribute("data-bs-no-jquery")
                ? window.jQuery
                : null,
            ut = [],
            bt = (E) => {
              document.readyState === "loading"
                ? (ut.length ||
                    document.addEventListener("DOMContentLoaded", () => {
                      for (const f of ut) f();
                    }),
                  ut.push(E))
                : E();
            },
            ot = () => document.documentElement.dir === "rtl",
            gt = (E) => {
              bt(() => {
                const f = rt();
                if (f) {
                  const m = E.NAME,
                    S = f.fn[m];
                  (f.fn[m] = E.jQueryInterface),
                    (f.fn[m].Constructor = E),
                    (f.fn[m].noConflict = () => (
                      (f.fn[m] = S), E.jQueryInterface
                    ));
                }
              });
            },
            yt = (E, f = [], m = E) =>
              typeof E == "function" ? E.call(...f) : m,
            zt = (E, f, m = !0) => {
              if (!m) {
                yt(E);
                return;
              }
              const Y = q(f) + 5;
              let tt = !1;
              const F = ({ target: Et }) => {
                Et === f && ((tt = !0), f.removeEventListener(g, F), yt(E));
              };
              f.addEventListener(g, F),
                setTimeout(() => {
                  tt || x(f);
                }, Y);
            },
            Vt = (E, f, m, S) => {
              const Y = E.length;
              let tt = E.indexOf(f);
              return tt === -1
                ? !m && S
                  ? E[Y - 1]
                  : E[0]
                : ((tt += m ? 1 : -1),
                  S && (tt = (tt + Y) % Y),
                  E[Math.max(0, Math.min(tt, Y - 1))]);
            },
            ye = /[^.]*(?=\..*)\.|.*/,
            Gt = /\..*/,
            U = /::\d+$/,
            W = {};
          let ct = 1;
          const xt = { mouseenter: "mouseover", mouseleave: "mouseout" },
            A = new Set([
              "click",
              "dblclick",
              "mouseup",
              "mousedown",
              "contextmenu",
              "mousewheel",
              "DOMMouseScroll",
              "mouseover",
              "mouseout",
              "mousemove",
              "selectstart",
              "selectend",
              "keydown",
              "keypress",
              "keyup",
              "orientationchange",
              "touchstart",
              "touchmove",
              "touchend",
              "touchcancel",
              "pointerdown",
              "pointermove",
              "pointerup",
              "pointerleave",
              "pointercancel",
              "gesturestart",
              "gesturechange",
              "gestureend",
              "focus",
              "blur",
              "change",
              "reset",
              "select",
              "submit",
              "focusin",
              "focusout",
              "load",
              "unload",
              "beforeunload",
              "resize",
              "move",
              "DOMContentLoaded",
              "readystatechange",
              "error",
              "abort",
              "scroll",
            ]);
          function X(E, f) {
            return (f && `${f}::${ct++}`) || E.uidEvent || ct++;
          }
          function at(E) {
            const f = X(E);
            return (E.uidEvent = f), (W[f] = W[f] || {}), W[f];
          }
          function nt(E, f) {
            return function m(S) {
              return (
                Sa(S, { delegateTarget: E }),
                m.oneOff && Q.off(E, S.type, f),
                f.apply(E, [S])
              );
            };
          }
          function st(E, f, m) {
            return function S(Y) {
              const tt = E.querySelectorAll(f);
              for (let { target: F } = Y; F && F !== this; F = F.parentNode)
                for (const Et of tt)
                  if (Et === F)
                    return (
                      Sa(Y, { delegateTarget: F }),
                      S.oneOff && Q.off(E, Y.type, f, m),
                      m.apply(F, [Y])
                    );
            };
          }
          function wt(E, f, m = null) {
            return Object.values(E).find(
              (S) => S.callable === f && S.delegationSelector === m
            );
          }
          function dt(E, f, m) {
            const S = typeof f == "string",
              Y = S ? m : f || m;
            let tt = ai(E);
            return A.has(tt) || (tt = E), [S, Y, tt];
          }
          function ae(E, f, m, S, Y) {
            if (typeof f != "string" || !E) return;
            let [tt, F, Et] = dt(f, m, S);
            f in xt &&
              (F = (($s) =>
                function (Ne) {
                  if (
                    !Ne.relatedTarget ||
                    (Ne.relatedTarget !== Ne.delegateTarget &&
                      !Ne.delegateTarget.contains(Ne.relatedTarget))
                  )
                    return $s.call(this, Ne);
                })(F));
            const me = at(E),
              Yt = me[Et] || (me[Et] = {}),
              Tt = wt(Yt, F, tt ? m : null);
            if (Tt) {
              Tt.oneOff = Tt.oneOff && Y;
              return;
            }
            const Qe = X(F, f.replace(ye, "")),
              Se = tt ? st(E, m, F) : nt(E, F);
            (Se.delegationSelector = tt ? m : null),
              (Se.callable = F),
              (Se.oneOff = Y),
              (Se.uidEvent = Qe),
              (Yt[Qe] = Se),
              E.addEventListener(Et, Se, tt);
          }
          function Dt(E, f, m, S, Y) {
            const tt = wt(f[m], S, Y);
            tt && (E.removeEventListener(m, tt, !!Y), delete f[m][tt.uidEvent]);
          }
          function qe(E, f, m, S) {
            const Y = f[m] || {};
            for (const [tt, F] of Object.entries(Y))
              tt.includes(S) && Dt(E, f, m, F.callable, F.delegationSelector);
          }
          function ai(E) {
            return (E = E.replace(Gt, "")), xt[E] || E;
          }
          const Q = {
            on(E, f, m, S) {
              ae(E, f, m, S, !1);
            },
            one(E, f, m, S) {
              ae(E, f, m, S, !0);
            },
            off(E, f, m, S) {
              if (typeof f != "string" || !E) return;
              const [Y, tt, F] = dt(f, m, S),
                Et = F !== f,
                me = at(E),
                Yt = me[F] || {},
                Tt = f.startsWith(".");
              if (typeof tt < "u") {
                if (!Object.keys(Yt).length) return;
                Dt(E, me, F, tt, Y ? m : null);
                return;
              }
              if (Tt)
                for (const Qe of Object.keys(me)) qe(E, me, Qe, f.slice(1));
              for (const [Qe, Se] of Object.entries(Yt)) {
                const Ga = Qe.replace(U, "");
                (!Et || f.includes(Ga)) &&
                  Dt(E, me, F, Se.callable, Se.delegationSelector);
              }
            },
            trigger(E, f, m) {
              if (typeof f != "string" || !E) return null;
              const S = rt(),
                Y = ai(f),
                tt = f !== Y;
              let F = null,
                Et = !0,
                me = !0,
                Yt = !1;
              tt &&
                S &&
                ((F = S.Event(f, m)),
                S(E).trigger(F),
                (Et = !F.isPropagationStopped()),
                (me = !F.isImmediatePropagationStopped()),
                (Yt = F.isDefaultPrevented()));
              const Tt = Sa(new Event(f, { bubbles: Et, cancelable: !0 }), m);
              return (
                Yt && Tt.preventDefault(),
                me && E.dispatchEvent(Tt),
                Tt.defaultPrevented && F && F.preventDefault(),
                Tt
              );
            },
          };
          function Sa(E, f = {}) {
            for (const [m, S] of Object.entries(f))
              try {
                E[m] = S;
              } catch {
                Object.defineProperty(E, m, {
                  configurable: !0,
                  get() {
                    return S;
                  },
                });
              }
            return E;
          }
          function Aa(E) {
            if (E === "true") return !0;
            if (E === "false") return !1;
            if (E === Number(E).toString()) return Number(E);
            if (E === "" || E === "null") return null;
            if (typeof E != "string") return E;
            try {
              return JSON.parse(decodeURIComponent(E));
            } catch {
              return E;
            }
          }
          function Ta(E) {
            return E.replace(/[A-Z]/g, (f) => `-${f.toLowerCase()}`);
          }
          const en = {
            setDataAttribute(E, f, m) {
              E.setAttribute(`data-bs-${Ta(f)}`, m);
            },
            removeDataAttribute(E, f) {
              E.removeAttribute(`data-bs-${Ta(f)}`);
            },
            getDataAttributes(E) {
              if (!E) return {};
              const f = {},
                m = Object.keys(E.dataset).filter(
                  (S) => S.startsWith("bs") && !S.startsWith("bsConfig")
                );
              for (const S of m) {
                let Y = S.replace(/^bs/, "");
                (Y = Y.charAt(0).toLowerCase() + Y.slice(1)),
                  (f[Y] = Aa(E.dataset[S]));
              }
              return f;
            },
            getDataAttribute(E, f) {
              return Aa(E.getAttribute(`data-bs-${Ta(f)}`));
            },
          };
          class Jn {
            static get Default() {
              return {};
            }
            static get DefaultType() {
              return {};
            }
            static get NAME() {
              throw new Error(
                'You have to implement the static method "NAME", for each component!'
              );
            }
            _getConfig(f) {
              return (
                (f = this._mergeConfigObj(f)),
                (f = this._configAfterMerge(f)),
                this._typeCheckConfig(f),
                f
              );
            }
            _configAfterMerge(f) {
              return f;
            }
            _mergeConfigObj(f, m) {
              const S = z(m) ? en.getDataAttribute(m, "config") : {};
              return {
                ...this.constructor.Default,
                ...(typeof S == "object" ? S : {}),
                ...(z(m) ? en.getDataAttributes(m) : {}),
                ...(typeof f == "object" ? f : {}),
              };
            }
            _typeCheckConfig(f, m = this.constructor.DefaultType) {
              for (const [S, Y] of Object.entries(m)) {
                const tt = f[S],
                  F = z(tt) ? "element" : O(tt);
                if (!new RegExp(Y).test(F))
                  throw new TypeError(
                    `${this.constructor.NAME.toUpperCase()}: Option "${S}" provided type "${F}" but expected type "${Y}".`
                  );
              }
            }
          }
          const Le = "5.3.7";
          class Be extends Jn {
            constructor(f, m) {
              super(),
                (f = M(f)),
                f &&
                  ((this._element = f),
                  (this._config = this._getConfig(m)),
                  p.set(this._element, this.constructor.DATA_KEY, this));
            }
            dispose() {
              p.remove(this._element, this.constructor.DATA_KEY),
                Q.off(this._element, this.constructor.EVENT_KEY);
              for (const f of Object.getOwnPropertyNames(this)) this[f] = null;
            }
            _queueCallback(f, m, S = !0) {
              zt(f, m, S);
            }
            _getConfig(f) {
              return (
                (f = this._mergeConfigObj(f, this._element)),
                (f = this._configAfterMerge(f)),
                this._typeCheckConfig(f),
                f
              );
            }
            static getInstance(f) {
              return p.get(M(f), this.DATA_KEY);
            }
            static getOrCreateInstance(f, m = {}) {
              return (
                this.getInstance(f) ||
                new this(f, typeof m == "object" ? m : null)
              );
            }
            static get VERSION() {
              return Le;
            }
            static get DATA_KEY() {
              return `bs.${this.NAME}`;
            }
            static get EVENT_KEY() {
              return `.${this.DATA_KEY}`;
            }
            static eventName(f) {
              return `${f}${this.EVENT_KEY}`;
            }
          }
          const ii = (E) => {
              let f = E.getAttribute("data-bs-target");
              if (!f || f === "#") {
                let m = E.getAttribute("href");
                if (!m || (!m.includes("#") && !m.startsWith("."))) return null;
                m.includes("#") &&
                  !m.startsWith("#") &&
                  (m = `#${m.split("#")[1]}`),
                  (f = m && m !== "#" ? m.trim() : null);
              }
              return f
                ? f
                    .split(",")
                    .map((m) => w(m))
                    .join(",")
                : null;
            },
            it = {
              find(E, f = document.documentElement) {
                return [].concat(
                  ...Element.prototype.querySelectorAll.call(f, E)
                );
              },
              findOne(E, f = document.documentElement) {
                return Element.prototype.querySelector.call(f, E);
              },
              children(E, f) {
                return [].concat(...E.children).filter((m) => m.matches(f));
              },
              parents(E, f) {
                const m = [];
                let S = E.parentNode.closest(f);
                for (; S; ) m.push(S), (S = S.parentNode.closest(f));
                return m;
              },
              prev(E, f) {
                let m = E.previousElementSibling;
                for (; m; ) {
                  if (m.matches(f)) return [m];
                  m = m.previousElementSibling;
                }
                return [];
              },
              next(E, f) {
                let m = E.nextElementSibling;
                for (; m; ) {
                  if (m.matches(f)) return [m];
                  m = m.nextElementSibling;
                }
                return [];
              },
              focusableChildren(E) {
                const f = [
                  "a",
                  "button",
                  "input",
                  "textarea",
                  "select",
                  "details",
                  "[tabindex]",
                  '[contenteditable="true"]',
                ]
                  .map((m) => `${m}:not([tabindex^="-"])`)
                  .join(",");
                return this.find(f, E).filter((m) => !I(m) && L(m));
              },
              getSelectorFromElement(E) {
                const f = ii(E);
                return f && it.findOne(f) ? f : null;
              },
              getElementFromSelector(E) {
                const f = ii(E);
                return f ? it.findOne(f) : null;
              },
              getMultipleElementsFromSelector(E) {
                const f = ii(E);
                return f ? it.find(f) : [];
              },
            },
            Ve = (E, f = "hide") => {
              const m = `click.dismiss${E.EVENT_KEY}`,
                S = E.NAME;
              Q.on(document, m, `[data-bs-dismiss="${S}"]`, function (Y) {
                if (
                  (["A", "AREA"].includes(this.tagName) && Y.preventDefault(),
                  I(this))
                )
                  return;
                const tt =
                  it.getElementFromSelector(this) || this.closest(`.${S}`);
                E.getOrCreateInstance(tt)[f]();
              });
            },
            Ll = "alert",
            li = ".bs.alert",
            zl = `close${li}`,
            Wn = `closed${li}`,
            fe = "fade",
            nn = "show";
          class ue extends Be {
            static get NAME() {
              return Ll;
            }
            close() {
              if (Q.trigger(this._element, zl).defaultPrevented) return;
              this._element.classList.remove(nn);
              const m = this._element.classList.contains(fe);
              this._queueCallback(
                () => this._destroyElement(),
                this._element,
                m
              );
            }
            _destroyElement() {
              this._element.remove(),
                Q.trigger(this._element, Wn),
                this.dispose();
            }
            static jQueryInterface(f) {
              return this.each(function () {
                const m = ue.getOrCreateInstance(this);
                if (typeof f == "string") {
                  if (
                    m[f] === void 0 ||
                    f.startsWith("_") ||
                    f === "constructor"
                  )
                    throw new TypeError(`No method named "${f}"`);
                  m[f](this);
                }
              });
            }
          }
          Ve(ue, "close"), gt(ue);
          const hf = "button",
            mf = ".bs.button",
            Hl = ".data-api",
            kl = "active",
            ta = '[data-bs-toggle="button"]',
            jl = `click${mf}${Hl}`;
          class zn extends Be {
            static get NAME() {
              return hf;
            }
            toggle() {
              this._element.setAttribute(
                "aria-pressed",
                this._element.classList.toggle(kl)
              );
            }
            static jQueryInterface(f) {
              return this.each(function () {
                const m = zn.getOrCreateInstance(this);
                f === "toggle" && m[f]();
              });
            }
          }
          Q.on(document, jl, ta, (E) => {
            E.preventDefault();
            const f = E.target.closest(ta);
            zn.getOrCreateInstance(f).toggle();
          }),
            gt(zn);
          const pf = "swipe",
            xa = ".bs.swipe",
            Bo = `touchstart${xa}`,
            Zr = `touchmove${xa}`,
            $i = `touchend${xa}`,
            gf = `pointerdown${xa}`,
            zo = `pointerup${xa}`,
            Ho = "touch",
            Ir = "pen",
            Fr = "pointer-event",
            ko = 40,
            vf = { endCallback: null, leftCallback: null, rightCallback: null },
            ea = {
              endCallback: "(function|null)",
              leftCallback: "(function|null)",
              rightCallback: "(function|null)",
            };
          class ie extends Jn {
            constructor(f, m) {
              super(),
                (this._element = f),
                !(!f || !ie.isSupported()) &&
                  ((this._config = this._getConfig(m)),
                  (this._deltaX = 0),
                  (this._supportPointerEvents = !!window.PointerEvent),
                  this._initEvents());
            }
            static get Default() {
              return vf;
            }
            static get DefaultType() {
              return ea;
            }
            static get NAME() {
              return pf;
            }
            dispose() {
              Q.off(this._element, xa);
            }
            _start(f) {
              if (!this._supportPointerEvents) {
                this._deltaX = f.touches[0].clientX;
                return;
              }
              this._eventIsPointerPenTouch(f) && (this._deltaX = f.clientX);
            }
            _end(f) {
              this._eventIsPointerPenTouch(f) &&
                (this._deltaX = f.clientX - this._deltaX),
                this._handleSwipe(),
                yt(this._config.endCallback);
            }
            _move(f) {
              this._deltaX =
                f.touches && f.touches.length > 1
                  ? 0
                  : f.touches[0].clientX - this._deltaX;
            }
            _handleSwipe() {
              const f = Math.abs(this._deltaX);
              if (f <= ko) return;
              const m = f / this._deltaX;
              (this._deltaX = 0),
                m &&
                  yt(
                    m > 0
                      ? this._config.rightCallback
                      : this._config.leftCallback
                  );
            }
            _initEvents() {
              this._supportPointerEvents
                ? (Q.on(this._element, gf, (f) => this._start(f)),
                  Q.on(this._element, zo, (f) => this._end(f)),
                  this._element.classList.add(Fr))
                : (Q.on(this._element, Bo, (f) => this._start(f)),
                  Q.on(this._element, Zr, (f) => this._move(f)),
                  Q.on(this._element, $i, (f) => this._end(f)));
            }
            _eventIsPointerPenTouch(f) {
              return (
                this._supportPointerEvents &&
                (f.pointerType === Ir || f.pointerType === Ho)
              );
            }
            static isSupported() {
              return (
                "ontouchstart" in document.documentElement ||
                navigator.maxTouchPoints > 0
              );
            }
          }
          const Oe = "carousel",
            En = ".bs.carousel",
            jo = ".data-api",
            bf = "ArrowLeft",
            Uo = "ArrowRight",
            Vi = 500,
            Oa = "next",
            an = "prev",
            ln = "left",
            na = "right",
            ri = `slide${En}`,
            Wt = `slid${En}`,
            $o = `keydown${En}`,
            qo = `mouseenter${En}`,
            Ca = `mouseleave${En}`,
            si = `dragstart${En}`,
            yf = `load${En}${jo}`,
            Vo = `click${En}${jo}`,
            Jr = "carousel",
            Ul = "active",
            $l = "slide",
            ql = "carousel-item-end",
            Hn = "carousel-item-start",
            Wr = "carousel-item-next",
            Yo = "carousel-item-prev",
            Na = ".active",
            Vl = ".carousel-item",
            ts = Na + Vl,
            wf = ".carousel-item img",
            Po = ".carousel-indicators",
            Ye = "[data-bs-slide], [data-bs-slide-to]",
            Go = '[data-bs-ride="carousel"]',
            Ef = { [bf]: na, [Uo]: ln },
            Yl = {
              interval: 5e3,
              keyboard: !0,
              pause: "hover",
              ride: !1,
              touch: !0,
              wrap: !0,
            },
            Ko = {
              interval: "(number|boolean)",
              keyboard: "boolean",
              pause: "(string|boolean)",
              ride: "(boolean|string)",
              touch: "boolean",
              wrap: "boolean",
            };
          class kn extends Be {
            constructor(f, m) {
              super(f, m),
                (this._interval = null),
                (this._activeElement = null),
                (this._isSliding = !1),
                (this.touchTimeout = null),
                (this._swipeHelper = null),
                (this._indicatorsElement = it.findOne(Po, this._element)),
                this._addEventListeners(),
                this._config.ride === Jr && this.cycle();
            }
            static get Default() {
              return Yl;
            }
            static get DefaultType() {
              return Ko;
            }
            static get NAME() {
              return Oe;
            }
            next() {
              this._slide(Oa);
            }
            nextWhenVisible() {
              !document.hidden && L(this._element) && this.next();
            }
            prev() {
              this._slide(an);
            }
            pause() {
              this._isSliding && x(this._element), this._clearInterval();
            }
            cycle() {
              this._clearInterval(),
                this._updateInterval(),
                (this._interval = setInterval(
                  () => this.nextWhenVisible(),
                  this._config.interval
                ));
            }
            _maybeEnableCycle() {
              if (this._config.ride) {
                if (this._isSliding) {
                  Q.one(this._element, Wt, () => this.cycle());
                  return;
                }
                this.cycle();
              }
            }
            to(f) {
              const m = this._getItems();
              if (f > m.length - 1 || f < 0) return;
              if (this._isSliding) {
                Q.one(this._element, Wt, () => this.to(f));
                return;
              }
              const S = this._getItemIndex(this._getActive());
              if (S === f) return;
              const Y = f > S ? Oa : an;
              this._slide(Y, m[f]);
            }
            dispose() {
              this._swipeHelper && this._swipeHelper.dispose(), super.dispose();
            }
            _configAfterMerge(f) {
              return (f.defaultInterval = f.interval), f;
            }
            _addEventListeners() {
              this._config.keyboard &&
                Q.on(this._element, $o, (f) => this._keydown(f)),
                this._config.pause === "hover" &&
                  (Q.on(this._element, qo, () => this.pause()),
                  Q.on(this._element, Ca, () => this._maybeEnableCycle())),
                this._config.touch &&
                  ie.isSupported() &&
                  this._addTouchEventListeners();
            }
            _addTouchEventListeners() {
              for (const S of it.find(wf, this._element))
                Q.on(S, si, (Y) => Y.preventDefault());
              const m = {
                leftCallback: () => this._slide(this._directionToOrder(ln)),
                rightCallback: () => this._slide(this._directionToOrder(na)),
                endCallback: () => {
                  this._config.pause === "hover" &&
                    (this.pause(),
                    this.touchTimeout && clearTimeout(this.touchTimeout),
                    (this.touchTimeout = setTimeout(
                      () => this._maybeEnableCycle(),
                      Vi + this._config.interval
                    )));
                },
              };
              this._swipeHelper = new ie(this._element, m);
            }
            _keydown(f) {
              if (/input|textarea/i.test(f.target.tagName)) return;
              const m = Ef[f.key];
              m && (f.preventDefault(), this._slide(this._directionToOrder(m)));
            }
            _getItemIndex(f) {
              return this._getItems().indexOf(f);
            }
            _setActiveIndicatorElement(f) {
              if (!this._indicatorsElement) return;
              const m = it.findOne(Na, this._indicatorsElement);
              m.classList.remove(Ul), m.removeAttribute("aria-current");
              const S = it.findOne(
                `[data-bs-slide-to="${f}"]`,
                this._indicatorsElement
              );
              S &&
                (S.classList.add(Ul), S.setAttribute("aria-current", "true"));
            }
            _updateInterval() {
              const f = this._activeElement || this._getActive();
              if (!f) return;
              const m = Number.parseInt(f.getAttribute("data-bs-interval"), 10);
              this._config.interval = m || this._config.defaultInterval;
            }
            _slide(f, m = null) {
              if (this._isSliding) return;
              const S = this._getActive(),
                Y = f === Oa,
                tt = m || Vt(this._getItems(), S, Y, this._config.wrap);
              if (tt === S) return;
              const F = this._getItemIndex(tt),
                Et = (Ga) =>
                  Q.trigger(this._element, Ga, {
                    relatedTarget: tt,
                    direction: this._orderToDirection(f),
                    from: this._getItemIndex(S),
                    to: F,
                  });
              if (Et(ri).defaultPrevented || !S || !tt) return;
              const Yt = !!this._interval;
              this.pause(),
                (this._isSliding = !0),
                this._setActiveIndicatorElement(F),
                (this._activeElement = tt);
              const Tt = Y ? Hn : ql,
                Qe = Y ? Wr : Yo;
              tt.classList.add(Qe),
                Z(tt),
                S.classList.add(Tt),
                tt.classList.add(Tt);
              const Se = () => {
                tt.classList.remove(Tt, Qe),
                  tt.classList.add(Ul),
                  S.classList.remove(Ul, Qe, Tt),
                  (this._isSliding = !1),
                  Et(Wt);
              };
              this._queueCallback(Se, S, this._isAnimated()),
                Yt && this.cycle();
            }
            _isAnimated() {
              return this._element.classList.contains($l);
            }
            _getActive() {
              return it.findOne(ts, this._element);
            }
            _getItems() {
              return it.find(Vl, this._element);
            }
            _clearInterval() {
              this._interval &&
                (clearInterval(this._interval), (this._interval = null));
            }
            _directionToOrder(f) {
              return ot() ? (f === ln ? an : Oa) : f === ln ? Oa : an;
            }
            _orderToDirection(f) {
              return ot() ? (f === an ? ln : na) : f === an ? na : ln;
            }
            static jQueryInterface(f) {
              return this.each(function () {
                const m = kn.getOrCreateInstance(this, f);
                if (typeof f == "number") {
                  m.to(f);
                  return;
                }
                if (typeof f == "string") {
                  if (
                    m[f] === void 0 ||
                    f.startsWith("_") ||
                    f === "constructor"
                  )
                    throw new TypeError(`No method named "${f}"`);
                  m[f]();
                }
              });
            }
          }
          Q.on(document, Vo, Ye, function (E) {
            const f = it.getElementFromSelector(this);
            if (!f || !f.classList.contains(Jr)) return;
            E.preventDefault();
            const m = kn.getOrCreateInstance(f),
              S = this.getAttribute("data-bs-slide-to");
            if (S) {
              m.to(S), m._maybeEnableCycle();
              return;
            }
            if (en.getDataAttribute(this, "slide") === "next") {
              m.next(), m._maybeEnableCycle();
              return;
            }
            m.prev(), m._maybeEnableCycle();
          }),
            Q.on(window, yf, () => {
              const E = it.find(Go);
              for (const f of E) kn.getOrCreateInstance(f);
            }),
            gt(kn);
          const _f = "collapse",
            Da = ".bs.collapse",
            Xo = ".data-api",
            es = `show${Da}`,
            oi = `shown${Da}`,
            Qo = `hide${Da}`,
            Zo = `hidden${Da}`,
            ui = `click${Da}${Xo}`,
            ns = "show",
            Ra = "collapse",
            Yi = "collapsing",
            as = "collapsed",
            Sf = `:scope .${Ra} .${Ra}`,
            Af = "collapse-horizontal",
            Pl = "width",
            is = "height",
            ls = ".collapse.show, .collapse.collapsing",
            aa = '[data-bs-toggle="collapse"]',
            ci = { parent: null, toggle: !0 },
            Io = { parent: "(null|element)", toggle: "boolean" };
          class ia extends Be {
            constructor(f, m) {
              super(f, m),
                (this._isTransitioning = !1),
                (this._triggerArray = []);
              const S = it.find(aa);
              for (const Y of S) {
                const tt = it.getSelectorFromElement(Y),
                  F = it.find(tt).filter((Et) => Et === this._element);
                tt !== null && F.length && this._triggerArray.push(Y);
              }
              this._initializeChildren(),
                this._config.parent ||
                  this._addAriaAndCollapsedClass(
                    this._triggerArray,
                    this._isShown()
                  ),
                this._config.toggle && this.toggle();
            }
            static get Default() {
              return ci;
            }
            static get DefaultType() {
              return Io;
            }
            static get NAME() {
              return _f;
            }
            toggle() {
              this._isShown() ? this.hide() : this.show();
            }
            show() {
              if (this._isTransitioning || this._isShown()) return;
              let f = [];
              if (
                (this._config.parent &&
                  (f = this._getFirstLevelChildren(ls)
                    .filter((Et) => Et !== this._element)
                    .map((Et) => ia.getOrCreateInstance(Et, { toggle: !1 }))),
                (f.length && f[0]._isTransitioning) ||
                  Q.trigger(this._element, es).defaultPrevented)
              )
                return;
              for (const Et of f) Et.hide();
              const S = this._getDimension();
              this._element.classList.remove(Ra),
                this._element.classList.add(Yi),
                (this._element.style[S] = 0),
                this._addAriaAndCollapsedClass(this._triggerArray, !0),
                (this._isTransitioning = !0);
              const Y = () => {
                  (this._isTransitioning = !1),
                    this._element.classList.remove(Yi),
                    this._element.classList.add(Ra, ns),
                    (this._element.style[S] = ""),
                    Q.trigger(this._element, oi);
                },
                F = `scroll${S[0].toUpperCase() + S.slice(1)}`;
              this._queueCallback(Y, this._element, !0),
                (this._element.style[S] = `${this._element[F]}px`);
            }
            hide() {
              if (
                this._isTransitioning ||
                !this._isShown() ||
                Q.trigger(this._element, Qo).defaultPrevented
              )
                return;
              const m = this._getDimension();
              (this._element.style[m] = `${
                this._element.getBoundingClientRect()[m]
              }px`),
                Z(this._element),
                this._element.classList.add(Yi),
                this._element.classList.remove(Ra, ns);
              for (const Y of this._triggerArray) {
                const tt = it.getElementFromSelector(Y);
                tt &&
                  !this._isShown(tt) &&
                  this._addAriaAndCollapsedClass([Y], !1);
              }
              this._isTransitioning = !0;
              const S = () => {
                (this._isTransitioning = !1),
                  this._element.classList.remove(Yi),
                  this._element.classList.add(Ra),
                  Q.trigger(this._element, Zo);
              };
              (this._element.style[m] = ""),
                this._queueCallback(S, this._element, !0);
            }
            _isShown(f = this._element) {
              return f.classList.contains(ns);
            }
            _configAfterMerge(f) {
              return (f.toggle = !!f.toggle), (f.parent = M(f.parent)), f;
            }
            _getDimension() {
              return this._element.classList.contains(Af) ? Pl : is;
            }
            _initializeChildren() {
              if (!this._config.parent) return;
              const f = this._getFirstLevelChildren(aa);
              for (const m of f) {
                const S = it.getElementFromSelector(m);
                S && this._addAriaAndCollapsedClass([m], this._isShown(S));
              }
            }
            _getFirstLevelChildren(f) {
              const m = it.find(Sf, this._config.parent);
              return it
                .find(f, this._config.parent)
                .filter((S) => !m.includes(S));
            }
            _addAriaAndCollapsedClass(f, m) {
              if (f.length)
                for (const S of f)
                  S.classList.toggle(as, !m),
                    S.setAttribute("aria-expanded", m);
            }
            static jQueryInterface(f) {
              const m = {};
              return (
                typeof f == "string" && /show|hide/.test(f) && (m.toggle = !1),
                this.each(function () {
                  const S = ia.getOrCreateInstance(this, m);
                  if (typeof f == "string") {
                    if (typeof S[f] > "u")
                      throw new TypeError(`No method named "${f}"`);
                    S[f]();
                  }
                })
              );
            }
          }
          Q.on(document, ui, aa, function (E) {
            (E.target.tagName === "A" ||
              (E.delegateTarget && E.delegateTarget.tagName === "A")) &&
              E.preventDefault();
            for (const f of it.getMultipleElementsFromSelector(this))
              ia.getOrCreateInstance(f, { toggle: !1 }).toggle();
          }),
            gt(ia);
          const rs = "dropdown",
            we = ".bs.dropdown",
            Pi = ".data-api",
            Gi = "Escape",
            jn = "Tab",
            ss = "ArrowUp",
            Ki = "ArrowDown",
            Fo = 2,
            Kl = `hide${we}`,
            Xl = `hidden${we}`,
            Jo = `show${we}`,
            Ce = `shown${we}`,
            la = `click${we}${Pi}`,
            Xi = `keydown${we}${Pi}`,
            Qi = `keyup${we}${Pi}`,
            fi = "show",
            os = "dropup",
            us = "dropend",
            Zi = "dropstart",
            Ql = "dropup-center",
            Wo = "dropdown-center",
            Ma = '[data-bs-toggle="dropdown"]:not(.disabled):not(:disabled)',
            Tf = `${Ma}.${fi}`,
            Zl = ".dropdown-menu",
            cs = ".navbar",
            xf = ".navbar-nav",
            Of = ".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)",
            Cf = ot() ? "top-end" : "top-start",
            Nf = ot() ? "top-start" : "top-end",
            Df = ot() ? "bottom-end" : "bottom-start",
            tu = ot() ? "bottom-start" : "bottom-end",
            Rf = ot() ? "left-start" : "right-start",
            Mf = ot() ? "right-start" : "left-start",
            Lf = "top",
            Bf = "bottom",
            fs = {
              autoClose: !0,
              boundary: "clippingParents",
              display: "dynamic",
              offset: [0, 2],
              popperConfig: null,
              reference: "toggle",
            },
            zf = {
              autoClose: "(boolean|string)",
              boundary: "(string|element)",
              display: "string",
              offset: "(array|string|function)",
              popperConfig: "(null|object|function)",
              reference: "(string|element|object)",
            };
          class sn extends Be {
            constructor(f, m) {
              super(f, m),
                (this._popper = null),
                (this._parent = this._element.parentNode),
                (this._menu =
                  it.next(this._element, Zl)[0] ||
                  it.prev(this._element, Zl)[0] ||
                  it.findOne(Zl, this._parent)),
                (this._inNavbar = this._detectNavbar());
            }
            static get Default() {
              return fs;
            }
            static get DefaultType() {
              return zf;
            }
            static get NAME() {
              return rs;
            }
            toggle() {
              return this._isShown() ? this.hide() : this.show();
            }
            show() {
              if (I(this._element) || this._isShown()) return;
              const f = { relatedTarget: this._element };
              if (!Q.trigger(this._element, Jo, f).defaultPrevented) {
                if (
                  (this._createPopper(),
                  "ontouchstart" in document.documentElement &&
                    !this._parent.closest(xf))
                )
                  for (const S of [].concat(...document.body.children))
                    Q.on(S, "mouseover", et);
                this._element.focus(),
                  this._element.setAttribute("aria-expanded", !0),
                  this._menu.classList.add(fi),
                  this._element.classList.add(fi),
                  Q.trigger(this._element, Ce, f);
              }
            }
            hide() {
              if (I(this._element) || !this._isShown()) return;
              const f = { relatedTarget: this._element };
              this._completeHide(f);
            }
            dispose() {
              this._popper && this._popper.destroy(), super.dispose();
            }
            update() {
              (this._inNavbar = this._detectNavbar()),
                this._popper && this._popper.update();
            }
            _completeHide(f) {
              if (!Q.trigger(this._element, Kl, f).defaultPrevented) {
                if ("ontouchstart" in document.documentElement)
                  for (const S of [].concat(...document.body.children))
                    Q.off(S, "mouseover", et);
                this._popper && this._popper.destroy(),
                  this._menu.classList.remove(fi),
                  this._element.classList.remove(fi),
                  this._element.setAttribute("aria-expanded", "false"),
                  en.removeDataAttribute(this._menu, "popper"),
                  Q.trigger(this._element, Xl, f),
                  this._element.focus();
              }
            }
            _getConfig(f) {
              if (
                ((f = super._getConfig(f)),
                typeof f.reference == "object" &&
                  !z(f.reference) &&
                  typeof f.reference.getBoundingClientRect != "function")
              )
                throw new TypeError(
                  `${rs.toUpperCase()}: Option "reference" provided type "object" without a required "getBoundingClientRect" method.`
                );
              return f;
            }
            _createPopper() {
              if (typeof c > "u")
                throw new TypeError(
                  "Bootstrap's dropdowns require Popper (https://popper.js.org/docs/v2/)"
                );
              let f = this._element;
              this._config.reference === "parent"
                ? (f = this._parent)
                : z(this._config.reference)
                ? (f = M(this._config.reference))
                : typeof this._config.reference == "object" &&
                  (f = this._config.reference);
              const m = this._getPopperConfig();
              this._popper = c.createPopper(f, this._menu, m);
            }
            _isShown() {
              return this._menu.classList.contains(fi);
            }
            _getPlacement() {
              const f = this._parent;
              if (f.classList.contains(us)) return Rf;
              if (f.classList.contains(Zi)) return Mf;
              if (f.classList.contains(Ql)) return Lf;
              if (f.classList.contains(Wo)) return Bf;
              const m =
                getComputedStyle(this._menu)
                  .getPropertyValue("--bs-position")
                  .trim() === "end";
              return f.classList.contains(os) ? (m ? Nf : Cf) : m ? tu : Df;
            }
            _detectNavbar() {
              return this._element.closest(cs) !== null;
            }
            _getOffset() {
              const { offset: f } = this._config;
              return typeof f == "string"
                ? f.split(",").map((m) => Number.parseInt(m, 10))
                : typeof f == "function"
                ? (m) => f(m, this._element)
                : f;
            }
            _getPopperConfig() {
              const f = {
                placement: this._getPlacement(),
                modifiers: [
                  {
                    name: "preventOverflow",
                    options: { boundary: this._config.boundary },
                  },
                  { name: "offset", options: { offset: this._getOffset() } },
                ],
              };
              return (
                (this._inNavbar || this._config.display === "static") &&
                  (en.setDataAttribute(this._menu, "popper", "static"),
                  (f.modifiers = [{ name: "applyStyles", enabled: !1 }])),
                { ...f, ...yt(this._config.popperConfig, [void 0, f]) }
              );
            }
            _selectMenuItem({ key: f, target: m }) {
              const S = it.find(Of, this._menu).filter((Y) => L(Y));
              S.length && Vt(S, m, f === Ki, !S.includes(m)).focus();
            }
            static jQueryInterface(f) {
              return this.each(function () {
                const m = sn.getOrCreateInstance(this, f);
                if (typeof f == "string") {
                  if (typeof m[f] > "u")
                    throw new TypeError(`No method named "${f}"`);
                  m[f]();
                }
              });
            }
            static clearMenus(f) {
              if (f.button === Fo || (f.type === "keyup" && f.key !== jn))
                return;
              const m = it.find(Tf);
              for (const S of m) {
                const Y = sn.getInstance(S);
                if (!Y || Y._config.autoClose === !1) continue;
                const tt = f.composedPath(),
                  F = tt.includes(Y._menu);
                if (
                  tt.includes(Y._element) ||
                  (Y._config.autoClose === "inside" && !F) ||
                  (Y._config.autoClose === "outside" && F) ||
                  (Y._menu.contains(f.target) &&
                    ((f.type === "keyup" && f.key === jn) ||
                      /input|select|option|textarea|form/i.test(
                        f.target.tagName
                      )))
                )
                  continue;
                const Et = { relatedTarget: Y._element };
                f.type === "click" && (Et.clickEvent = f), Y._completeHide(Et);
              }
            }
            static dataApiKeydownHandler(f) {
              const m = /input|textarea/i.test(f.target.tagName),
                S = f.key === Gi,
                Y = [ss, Ki].includes(f.key);
              if ((!Y && !S) || (m && !S)) return;
              f.preventDefault();
              const tt = this.matches(Ma)
                  ? this
                  : it.prev(this, Ma)[0] ||
                    it.next(this, Ma)[0] ||
                    it.findOne(Ma, f.delegateTarget.parentNode),
                F = sn.getOrCreateInstance(tt);
              if (Y) {
                f.stopPropagation(), F.show(), F._selectMenuItem(f);
                return;
              }
              F._isShown() && (f.stopPropagation(), F.hide(), tt.focus());
            }
          }
          Q.on(document, Xi, Ma, sn.dataApiKeydownHandler),
            Q.on(document, Xi, Zl, sn.dataApiKeydownHandler),
            Q.on(document, la, sn.clearMenus),
            Q.on(document, Qi, sn.clearMenus),
            Q.on(document, la, Ma, function (E) {
              E.preventDefault(), sn.getOrCreateInstance(this).toggle();
            }),
            gt(sn);
          const eu = "backdrop",
            nu = "fade",
            au = "show",
            iu = `mousedown.bs.${eu}`,
            Hf = {
              className: "modal-backdrop",
              clickCallback: null,
              isAnimated: !1,
              isVisible: !0,
              rootElement: "body",
            },
            kf = {
              className: "string",
              clickCallback: "(function|null)",
              isAnimated: "boolean",
              isVisible: "boolean",
              rootElement: "(element|string)",
            };
          class lu extends Jn {
            constructor(f) {
              super(),
                (this._config = this._getConfig(f)),
                (this._isAppended = !1),
                (this._element = null);
            }
            static get Default() {
              return Hf;
            }
            static get DefaultType() {
              return kf;
            }
            static get NAME() {
              return eu;
            }
            show(f) {
              if (!this._config.isVisible) {
                yt(f);
                return;
              }
              this._append();
              const m = this._getElement();
              this._config.isAnimated && Z(m),
                m.classList.add(au),
                this._emulateAnimation(() => {
                  yt(f);
                });
            }
            hide(f) {
              if (!this._config.isVisible) {
                yt(f);
                return;
              }
              this._getElement().classList.remove(au),
                this._emulateAnimation(() => {
                  this.dispose(), yt(f);
                });
            }
            dispose() {
              this._isAppended &&
                (Q.off(this._element, iu),
                this._element.remove(),
                (this._isAppended = !1));
            }
            _getElement() {
              if (!this._element) {
                const f = document.createElement("div");
                (f.className = this._config.className),
                  this._config.isAnimated && f.classList.add(nu),
                  (this._element = f);
              }
              return this._element;
            }
            _configAfterMerge(f) {
              return (f.rootElement = M(f.rootElement)), f;
            }
            _append() {
              if (this._isAppended) return;
              const f = this._getElement();
              this._config.rootElement.append(f),
                Q.on(f, iu, () => {
                  yt(this._config.clickCallback);
                }),
                (this._isAppended = !0);
            }
            _emulateAnimation(f) {
              zt(f, this._getElement(), this._config.isAnimated);
            }
          }
          const jf = "focustrap",
            Il = ".bs.focustrap",
            Uf = `focusin${Il}`,
            ds = `keydown.tab${Il}`,
            Ii = "Tab",
            $f = "forward",
            hs = "backward",
            ru = { autofocus: !0, trapElement: null },
            su = { autofocus: "boolean", trapElement: "element" };
          class ms extends Jn {
            constructor(f) {
              super(),
                (this._config = this._getConfig(f)),
                (this._isActive = !1),
                (this._lastTabNavDirection = null);
            }
            static get Default() {
              return ru;
            }
            static get DefaultType() {
              return su;
            }
            static get NAME() {
              return jf;
            }
            activate() {
              this._isActive ||
                (this._config.autofocus && this._config.trapElement.focus(),
                Q.off(document, Il),
                Q.on(document, Uf, (f) => this._handleFocusin(f)),
                Q.on(document, ds, (f) => this._handleKeydown(f)),
                (this._isActive = !0));
            }
            deactivate() {
              this._isActive && ((this._isActive = !1), Q.off(document, Il));
            }
            _handleFocusin(f) {
              const { trapElement: m } = this._config;
              if (
                f.target === document ||
                f.target === m ||
                m.contains(f.target)
              )
                return;
              const S = it.focusableChildren(m);
              S.length === 0
                ? m.focus()
                : this._lastTabNavDirection === hs
                ? S[S.length - 1].focus()
                : S[0].focus();
            }
            _handleKeydown(f) {
              f.key === Ii &&
                (this._lastTabNavDirection = f.shiftKey ? hs : $f);
            }
          }
          const ps = ".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",
            La = ".sticky-top",
            Fl = "padding-right",
            ou = "margin-right";
          class gs {
            constructor() {
              this._element = document.body;
            }
            getWidth() {
              const f = document.documentElement.clientWidth;
              return Math.abs(window.innerWidth - f);
            }
            hide() {
              const f = this.getWidth();
              this._disableOverFlow(),
                this._setElementAttributes(this._element, Fl, (m) => m + f),
                this._setElementAttributes(ps, Fl, (m) => m + f),
                this._setElementAttributes(La, ou, (m) => m - f);
            }
            reset() {
              this._resetElementAttributes(this._element, "overflow"),
                this._resetElementAttributes(this._element, Fl),
                this._resetElementAttributes(ps, Fl),
                this._resetElementAttributes(La, ou);
            }
            isOverflowing() {
              return this.getWidth() > 0;
            }
            _disableOverFlow() {
              this._saveInitialAttribute(this._element, "overflow"),
                (this._element.style.overflow = "hidden");
            }
            _setElementAttributes(f, m, S) {
              const Y = this.getWidth(),
                tt = (F) => {
                  if (
                    F !== this._element &&
                    window.innerWidth > F.clientWidth + Y
                  )
                    return;
                  this._saveInitialAttribute(F, m);
                  const Et = window.getComputedStyle(F).getPropertyValue(m);
                  F.style.setProperty(m, `${S(Number.parseFloat(Et))}px`);
                };
              this._applyManipulationCallback(f, tt);
            }
            _saveInitialAttribute(f, m) {
              const S = f.style.getPropertyValue(m);
              S && en.setDataAttribute(f, m, S);
            }
            _resetElementAttributes(f, m) {
              const S = (Y) => {
                const tt = en.getDataAttribute(Y, m);
                if (tt === null) {
                  Y.style.removeProperty(m);
                  return;
                }
                en.removeDataAttribute(Y, m), Y.style.setProperty(m, tt);
              };
              this._applyManipulationCallback(f, S);
            }
            _applyManipulationCallback(f, m) {
              if (z(f)) {
                m(f);
                return;
              }
              for (const S of it.find(f, this._element)) m(S);
            }
          }
          const uu = "modal",
            de = ".bs.modal",
            Fi = ".data-api",
            Vf = "Escape",
            Jl = `hide${de}`,
            cu = `hidePrevented${de}`,
            vs = `hidden${de}`,
            Wl = `show${de}`,
            bs = `shown${de}`,
            fu = `resize${de}`,
            du = `click.dismiss${de}`,
            hu = `mousedown.dismiss${de}`,
            Yf = `keydown.dismiss${de}`,
            Pf = `click${de}${Fi}`,
            mu = "modal-open",
            Gf = "fade",
            pu = "show",
            Ee = "modal-static",
            Ji = ".modal.show",
            gu = ".modal-dialog",
            vu = ".modal-body",
            bu = '[data-bs-toggle="modal"]',
            yu = { backdrop: !0, focus: !0, keyboard: !0 },
            ys = {
              backdrop: "(boolean|string)",
              focus: "boolean",
              keyboard: "boolean",
            };
          class Ba extends Be {
            constructor(f, m) {
              super(f, m),
                (this._dialog = it.findOne(gu, this._element)),
                (this._backdrop = this._initializeBackDrop()),
                (this._focustrap = this._initializeFocusTrap()),
                (this._isShown = !1),
                (this._isTransitioning = !1),
                (this._scrollBar = new gs()),
                this._addEventListeners();
            }
            static get Default() {
              return yu;
            }
            static get DefaultType() {
              return ys;
            }
            static get NAME() {
              return uu;
            }
            toggle(f) {
              return this._isShown ? this.hide() : this.show(f);
            }
            show(f) {
              this._isShown ||
                this._isTransitioning ||
                Q.trigger(this._element, Wl, { relatedTarget: f })
                  .defaultPrevented ||
                ((this._isShown = !0),
                (this._isTransitioning = !0),
                this._scrollBar.hide(),
                document.body.classList.add(mu),
                this._adjustDialog(),
                this._backdrop.show(() => this._showElement(f)));
            }
            hide() {
              !this._isShown ||
                this._isTransitioning ||
                Q.trigger(this._element, Jl).defaultPrevented ||
                ((this._isShown = !1),
                (this._isTransitioning = !0),
                this._focustrap.deactivate(),
                this._element.classList.remove(pu),
                this._queueCallback(
                  () => this._hideModal(),
                  this._element,
                  this._isAnimated()
                ));
            }
            dispose() {
              Q.off(window, de),
                Q.off(this._dialog, de),
                this._backdrop.dispose(),
                this._focustrap.deactivate(),
                super.dispose();
            }
            handleUpdate() {
              this._adjustDialog();
            }
            _initializeBackDrop() {
              return new lu({
                isVisible: !!this._config.backdrop,
                isAnimated: this._isAnimated(),
              });
            }
            _initializeFocusTrap() {
              return new ms({ trapElement: this._element });
            }
            _showElement(f) {
              document.body.contains(this._element) ||
                document.body.append(this._element),
                (this._element.style.display = "block"),
                this._element.removeAttribute("aria-hidden"),
                this._element.setAttribute("aria-modal", !0),
                this._element.setAttribute("role", "dialog"),
                (this._element.scrollTop = 0);
              const m = it.findOne(vu, this._dialog);
              m && (m.scrollTop = 0),
                Z(this._element),
                this._element.classList.add(pu);
              const S = () => {
                this._config.focus && this._focustrap.activate(),
                  (this._isTransitioning = !1),
                  Q.trigger(this._element, bs, { relatedTarget: f });
              };
              this._queueCallback(S, this._dialog, this._isAnimated());
            }
            _addEventListeners() {
              Q.on(this._element, Yf, (f) => {
                if (f.key === Vf) {
                  if (this._config.keyboard) {
                    this.hide();
                    return;
                  }
                  this._triggerBackdropTransition();
                }
              }),
                Q.on(window, fu, () => {
                  this._isShown &&
                    !this._isTransitioning &&
                    this._adjustDialog();
                }),
                Q.on(this._element, hu, (f) => {
                  Q.one(this._element, du, (m) => {
                    if (
                      !(
                        this._element !== f.target || this._element !== m.target
                      )
                    ) {
                      if (this._config.backdrop === "static") {
                        this._triggerBackdropTransition();
                        return;
                      }
                      this._config.backdrop && this.hide();
                    }
                  });
                });
            }
            _hideModal() {
              (this._element.style.display = "none"),
                this._element.setAttribute("aria-hidden", !0),
                this._element.removeAttribute("aria-modal"),
                this._element.removeAttribute("role"),
                (this._isTransitioning = !1),
                this._backdrop.hide(() => {
                  document.body.classList.remove(mu),
                    this._resetAdjustments(),
                    this._scrollBar.reset(),
                    Q.trigger(this._element, vs);
                });
            }
            _isAnimated() {
              return this._element.classList.contains(Gf);
            }
            _triggerBackdropTransition() {
              if (Q.trigger(this._element, cu).defaultPrevented) return;
              const m =
                  this._element.scrollHeight >
                  document.documentElement.clientHeight,
                S = this._element.style.overflowY;
              S === "hidden" ||
                this._element.classList.contains(Ee) ||
                (m || (this._element.style.overflowY = "hidden"),
                this._element.classList.add(Ee),
                this._queueCallback(() => {
                  this._element.classList.remove(Ee),
                    this._queueCallback(() => {
                      this._element.style.overflowY = S;
                    }, this._dialog);
                }, this._dialog),
                this._element.focus());
            }
            _adjustDialog() {
              const f =
                  this._element.scrollHeight >
                  document.documentElement.clientHeight,
                m = this._scrollBar.getWidth(),
                S = m > 0;
              if (S && !f) {
                const Y = ot() ? "paddingLeft" : "paddingRight";
                this._element.style[Y] = `${m}px`;
              }
              if (!S && f) {
                const Y = ot() ? "paddingRight" : "paddingLeft";
                this._element.style[Y] = `${m}px`;
              }
            }
            _resetAdjustments() {
              (this._element.style.paddingLeft = ""),
                (this._element.style.paddingRight = "");
            }
            static jQueryInterface(f, m) {
              return this.each(function () {
                const S = Ba.getOrCreateInstance(this, f);
                if (typeof f == "string") {
                  if (typeof S[f] > "u")
                    throw new TypeError(`No method named "${f}"`);
                  S[f](m);
                }
              });
            }
          }
          Q.on(document, Pf, bu, function (E) {
            const f = it.getElementFromSelector(this);
            ["A", "AREA"].includes(this.tagName) && E.preventDefault(),
              Q.one(f, Wl, (Y) => {
                Y.defaultPrevented ||
                  Q.one(f, vs, () => {
                    L(this) && this.focus();
                  });
              });
            const m = it.findOne(Ji);
            m && Ba.getInstance(m).hide(),
              Ba.getOrCreateInstance(f).toggle(this);
          }),
            Ve(Ba),
            gt(Ba);
          const di = "offcanvas",
            ze = ".bs.offcanvas",
            tr = ".data-api",
            Eu = `load${ze}${tr}`,
            za = "Escape",
            Ha = "show",
            er = "showing",
            ws = "hiding",
            ka = "offcanvas-backdrop",
            Es = ".offcanvas.show",
            _u = `show${ze}`,
            Su = `shown${ze}`,
            Kf = `hide${ze}`,
            Au = `hidePrevented${ze}`,
            Tu = `hidden${ze}`,
            xu = `resize${ze}`,
            Ou = `click${ze}${tr}`,
            _s = `keydown.dismiss${ze}`,
            on = '[data-bs-toggle="offcanvas"]',
            Cu = { backdrop: !0, keyboard: !0, scroll: !1 },
            Pe = {
              backdrop: "(boolean|string)",
              keyboard: "boolean",
              scroll: "boolean",
            };
          class te extends Be {
            constructor(f, m) {
              super(f, m),
                (this._isShown = !1),
                (this._backdrop = this._initializeBackDrop()),
                (this._focustrap = this._initializeFocusTrap()),
                this._addEventListeners();
            }
            static get Default() {
              return Cu;
            }
            static get DefaultType() {
              return Pe;
            }
            static get NAME() {
              return di;
            }
            toggle(f) {
              return this._isShown ? this.hide() : this.show(f);
            }
            show(f) {
              if (
                this._isShown ||
                Q.trigger(this._element, _u, { relatedTarget: f })
                  .defaultPrevented
              )
                return;
              (this._isShown = !0),
                this._backdrop.show(),
                this._config.scroll || new gs().hide(),
                this._element.setAttribute("aria-modal", !0),
                this._element.setAttribute("role", "dialog"),
                this._element.classList.add(er);
              const S = () => {
                (!this._config.scroll || this._config.backdrop) &&
                  this._focustrap.activate(),
                  this._element.classList.add(Ha),
                  this._element.classList.remove(er),
                  Q.trigger(this._element, Su, { relatedTarget: f });
              };
              this._queueCallback(S, this._element, !0);
            }
            hide() {
              if (
                !this._isShown ||
                Q.trigger(this._element, Kf).defaultPrevented
              )
                return;
              this._focustrap.deactivate(),
                this._element.blur(),
                (this._isShown = !1),
                this._element.classList.add(ws),
                this._backdrop.hide();
              const m = () => {
                this._element.classList.remove(Ha, ws),
                  this._element.removeAttribute("aria-modal"),
                  this._element.removeAttribute("role"),
                  this._config.scroll || new gs().reset(),
                  Q.trigger(this._element, Tu);
              };
              this._queueCallback(m, this._element, !0);
            }
            dispose() {
              this._backdrop.dispose(),
                this._focustrap.deactivate(),
                super.dispose();
            }
            _initializeBackDrop() {
              const f = () => {
                  if (this._config.backdrop === "static") {
                    Q.trigger(this._element, Au);
                    return;
                  }
                  this.hide();
                },
                m = !!this._config.backdrop;
              return new lu({
                className: ka,
                isVisible: m,
                isAnimated: !0,
                rootElement: this._element.parentNode,
                clickCallback: m ? f : null,
              });
            }
            _initializeFocusTrap() {
              return new ms({ trapElement: this._element });
            }
            _addEventListeners() {
              Q.on(this._element, _s, (f) => {
                if (f.key === za) {
                  if (this._config.keyboard) {
                    this.hide();
                    return;
                  }
                  Q.trigger(this._element, Au);
                }
              });
            }
            static jQueryInterface(f) {
              return this.each(function () {
                const m = te.getOrCreateInstance(this, f);
                if (typeof f == "string") {
                  if (
                    m[f] === void 0 ||
                    f.startsWith("_") ||
                    f === "constructor"
                  )
                    throw new TypeError(`No method named "${f}"`);
                  m[f](this);
                }
              });
            }
          }
          Q.on(document, Ou, on, function (E) {
            const f = it.getElementFromSelector(this);
            if (
              (["A", "AREA"].includes(this.tagName) && E.preventDefault(),
              I(this))
            )
              return;
            Q.one(f, Tu, () => {
              L(this) && this.focus();
            });
            const m = it.findOne(Es);
            m && m !== f && te.getInstance(m).hide(),
              te.getOrCreateInstance(f).toggle(this);
          }),
            Q.on(window, Eu, () => {
              for (const E of it.find(Es)) te.getOrCreateInstance(E).show();
            }),
            Q.on(window, xu, () => {
              for (const E of it.find(
                "[aria-modal][class*=show][class*=offcanvas-]"
              ))
                getComputedStyle(E).position !== "fixed" &&
                  te.getOrCreateInstance(E).hide();
            }),
            Ve(te),
            gt(te);
          const nr = {
              "*": ["class", "dir", "id", "lang", "role", /^aria-[\w-]*$/i],
              a: ["target", "href", "title", "rel"],
              area: [],
              b: [],
              br: [],
              col: [],
              code: [],
              dd: [],
              div: [],
              dl: [],
              dt: [],
              em: [],
              hr: [],
              h1: [],
              h2: [],
              h3: [],
              h4: [],
              h5: [],
              h6: [],
              i: [],
              img: ["src", "srcset", "alt", "title", "width", "height"],
              li: [],
              ol: [],
              p: [],
              pre: [],
              s: [],
              small: [],
              span: [],
              sub: [],
              sup: [],
              strong: [],
              u: [],
              ul: [],
            },
            ar = new Set([
              "background",
              "cite",
              "href",
              "itemtype",
              "longdesc",
              "poster",
              "src",
              "xlink:href",
            ]),
            ir = /^(?!javascript:)(?:[a-z0-9+.-]+:|[^&:/?#]*(?:[/?#]|$))/i,
            Ss = (E, f) => {
              const m = E.nodeName.toLowerCase();
              return f.includes(m)
                ? ar.has(m)
                  ? !!ir.test(E.nodeValue)
                  : !0
                : f.filter((S) => S instanceof RegExp).some((S) => S.test(m));
            };
          function hi(E, f, m) {
            if (!E.length) return E;
            if (m && typeof m == "function") return m(E);
            const Y = new window.DOMParser().parseFromString(E, "text/html"),
              tt = [].concat(...Y.body.querySelectorAll("*"));
            for (const F of tt) {
              const Et = F.nodeName.toLowerCase();
              if (!Object.keys(f).includes(Et)) {
                F.remove();
                continue;
              }
              const me = [].concat(...F.attributes),
                Yt = [].concat(f["*"] || [], f[Et] || []);
              for (const Tt of me) Ss(Tt, Yt) || F.removeAttribute(Tt.nodeName);
            }
            return Y.body.innerHTML;
          }
          const Nu = "TemplateFactory",
            lr = {
              allowList: nr,
              content: {},
              extraClass: "",
              html: !1,
              sanitize: !0,
              sanitizeFn: null,
              template: "<div></div>",
            },
            mi = {
              allowList: "object",
              content: "object",
              extraClass: "(string|function)",
              html: "boolean",
              sanitize: "boolean",
              sanitizeFn: "(null|function)",
              template: "string",
            },
            Xf = {
              entry: "(string|element|function|null)",
              selector: "(string|element)",
            };
          class He extends Jn {
            constructor(f) {
              super(), (this._config = this._getConfig(f));
            }
            static get Default() {
              return lr;
            }
            static get DefaultType() {
              return mi;
            }
            static get NAME() {
              return Nu;
            }
            getContent() {
              return Object.values(this._config.content)
                .map((f) => this._resolvePossibleFunction(f))
                .filter(Boolean);
            }
            hasContent() {
              return this.getContent().length > 0;
            }
            changeContent(f) {
              return (
                this._checkContent(f),
                (this._config.content = { ...this._config.content, ...f }),
                this
              );
            }
            toHtml() {
              const f = document.createElement("div");
              f.innerHTML = this._maybeSanitize(this._config.template);
              for (const [Y, tt] of Object.entries(this._config.content))
                this._setContent(f, tt, Y);
              const m = f.children[0],
                S = this._resolvePossibleFunction(this._config.extraClass);
              return S && m.classList.add(...S.split(" ")), m;
            }
            _typeCheckConfig(f) {
              super._typeCheckConfig(f), this._checkContent(f.content);
            }
            _checkContent(f) {
              for (const [m, S] of Object.entries(f))
                super._typeCheckConfig({ selector: m, entry: S }, Xf);
            }
            _setContent(f, m, S) {
              const Y = it.findOne(S, f);
              if (Y) {
                if (((m = this._resolvePossibleFunction(m)), !m)) {
                  Y.remove();
                  return;
                }
                if (z(m)) {
                  this._putElementInTemplate(M(m), Y);
                  return;
                }
                if (this._config.html) {
                  Y.innerHTML = this._maybeSanitize(m);
                  return;
                }
                Y.textContent = m;
              }
            }
            _maybeSanitize(f) {
              return this._config.sanitize
                ? hi(f, this._config.allowList, this._config.sanitizeFn)
                : f;
            }
            _resolvePossibleFunction(f) {
              return yt(f, [void 0, this]);
            }
            _putElementInTemplate(f, m) {
              if (this._config.html) {
                (m.innerHTML = ""), m.append(f);
                return;
              }
              m.textContent = f.textContent;
            }
          }
          const As = "tooltip",
            Un = new Set(["sanitize", "allowList", "sanitizeFn"]),
            rr = "fade",
            sr = "modal",
            _n = "show",
            Ts = ".tooltip-inner",
            or = `.${sr}`,
            ja = "hide.bs.modal",
            Sn = "hover",
            pi = "focus",
            gi = "click",
            Ge = "manual",
            Ke = "hide",
            Ua = "hidden",
            $n = "show",
            qn = "shown",
            $a = "inserted",
            Du = "click",
            xs = "focusin",
            Os = "focusout",
            _e = "mouseenter",
            Zt = "mouseleave",
            Mt = {
              AUTO: "auto",
              TOP: "top",
              RIGHT: ot() ? "left" : "right",
              BOTTOM: "bottom",
              LEFT: ot() ? "right" : "left",
            },
            qa = {
              allowList: nr,
              animation: !0,
              boundary: "clippingParents",
              container: !1,
              customClass: "",
              delay: 0,
              fallbackPlacements: ["top", "right", "bottom", "left"],
              html: !1,
              offset: [0, 6],
              placement: "top",
              popperConfig: null,
              sanitize: !0,
              sanitizeFn: null,
              selector: !1,
              template:
                '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
              title: "",
              trigger: "hover focus",
            },
            An = {
              allowList: "object",
              animation: "boolean",
              boundary: "(string|element)",
              container: "(string|element|boolean)",
              customClass: "(string|function)",
              delay: "(number|object)",
              fallbackPlacements: "array",
              html: "boolean",
              offset: "(array|string|function)",
              placement: "(string|function)",
              popperConfig: "(null|object|function)",
              sanitize: "boolean",
              sanitizeFn: "(null|function)",
              selector: "(string|boolean)",
              template: "string",
              title: "(string|element|function)",
              trigger: "string",
            };
          class Vn extends Be {
            constructor(f, m) {
              if (typeof c > "u")
                throw new TypeError(
                  "Bootstrap's tooltips require Popper (https://popper.js.org/docs/v2/)"
                );
              super(f, m),
                (this._isEnabled = !0),
                (this._timeout = 0),
                (this._isHovered = null),
                (this._activeTrigger = {}),
                (this._popper = null),
                (this._templateFactory = null),
                (this._newContent = null),
                (this.tip = null),
                this._setListeners(),
                this._config.selector || this._fixTitle();
            }
            static get Default() {
              return qa;
            }
            static get DefaultType() {
              return An;
            }
            static get NAME() {
              return As;
            }
            enable() {
              this._isEnabled = !0;
            }
            disable() {
              this._isEnabled = !1;
            }
            toggleEnabled() {
              this._isEnabled = !this._isEnabled;
            }
            toggle() {
              if (this._isEnabled) {
                if (this._isShown()) {
                  this._leave();
                  return;
                }
                this._enter();
              }
            }
            dispose() {
              clearTimeout(this._timeout),
                Q.off(this._element.closest(or), ja, this._hideModalHandler),
                this._element.getAttribute("data-bs-original-title") &&
                  this._element.setAttribute(
                    "title",
                    this._element.getAttribute("data-bs-original-title")
                  ),
                this._disposePopper(),
                super.dispose();
            }
            show() {
              if (this._element.style.display === "none")
                throw new Error("Please use show on visible elements");
              if (!(this._isWithContent() && this._isEnabled)) return;
              const f = Q.trigger(
                  this._element,
                  this.constructor.eventName($n)
                ),
                S = (
                  J(this._element) ||
                  this._element.ownerDocument.documentElement
                ).contains(this._element);
              if (f.defaultPrevented || !S) return;
              this._disposePopper();
              const Y = this._getTipElement();
              this._element.setAttribute(
                "aria-describedby",
                Y.getAttribute("id")
              );
              const { container: tt } = this._config;
              if (
                (this._element.ownerDocument.documentElement.contains(
                  this.tip
                ) ||
                  (tt.append(Y),
                  Q.trigger(this._element, this.constructor.eventName($a))),
                (this._popper = this._createPopper(Y)),
                Y.classList.add(_n),
                "ontouchstart" in document.documentElement)
              )
                for (const Et of [].concat(...document.body.children))
                  Q.on(Et, "mouseover", et);
              const F = () => {
                Q.trigger(this._element, this.constructor.eventName(qn)),
                  this._isHovered === !1 && this._leave(),
                  (this._isHovered = !1);
              };
              this._queueCallback(F, this.tip, this._isAnimated());
            }
            hide() {
              if (
                !this._isShown() ||
                Q.trigger(this._element, this.constructor.eventName(Ke))
                  .defaultPrevented
              )
                return;
              if (
                (this._getTipElement().classList.remove(_n),
                "ontouchstart" in document.documentElement)
              )
                for (const Y of [].concat(...document.body.children))
                  Q.off(Y, "mouseover", et);
              (this._activeTrigger[gi] = !1),
                (this._activeTrigger[pi] = !1),
                (this._activeTrigger[Sn] = !1),
                (this._isHovered = null);
              const S = () => {
                this._isWithActiveTrigger() ||
                  (this._isHovered || this._disposePopper(),
                  this._element.removeAttribute("aria-describedby"),
                  Q.trigger(this._element, this.constructor.eventName(Ua)));
              };
              this._queueCallback(S, this.tip, this._isAnimated());
            }
            update() {
              this._popper && this._popper.update();
            }
            _isWithContent() {
              return !!this._getTitle();
            }
            _getTipElement() {
              return (
                this.tip ||
                  (this.tip = this._createTipElement(
                    this._newContent || this._getContentForTemplate()
                  )),
                this.tip
              );
            }
            _createTipElement(f) {
              const m = this._getTemplateFactory(f).toHtml();
              if (!m) return null;
              m.classList.remove(rr, _n),
                m.classList.add(`bs-${this.constructor.NAME}-auto`);
              const S = N(this.constructor.NAME).toString();
              return (
                m.setAttribute("id", S),
                this._isAnimated() && m.classList.add(rr),
                m
              );
            }
            setContent(f) {
              (this._newContent = f),
                this._isShown() && (this._disposePopper(), this.show());
            }
            _getTemplateFactory(f) {
              return (
                this._templateFactory
                  ? this._templateFactory.changeContent(f)
                  : (this._templateFactory = new He({
                      ...this._config,
                      content: f,
                      extraClass: this._resolvePossibleFunction(
                        this._config.customClass
                      ),
                    })),
                this._templateFactory
              );
            }
            _getContentForTemplate() {
              return { [Ts]: this._getTitle() };
            }
            _getTitle() {
              return (
                this._resolvePossibleFunction(this._config.title) ||
                this._element.getAttribute("data-bs-original-title")
              );
            }
            _initializeOnDelegatedTarget(f) {
              return this.constructor.getOrCreateInstance(
                f.delegateTarget,
                this._getDelegateConfig()
              );
            }
            _isAnimated() {
              return (
                this._config.animation ||
                (this.tip && this.tip.classList.contains(rr))
              );
            }
            _isShown() {
              return this.tip && this.tip.classList.contains(_n);
            }
            _createPopper(f) {
              const m = yt(this._config.placement, [this, f, this._element]),
                S = Mt[m.toUpperCase()];
              return c.createPopper(this._element, f, this._getPopperConfig(S));
            }
            _getOffset() {
              const { offset: f } = this._config;
              return typeof f == "string"
                ? f.split(",").map((m) => Number.parseInt(m, 10))
                : typeof f == "function"
                ? (m) => f(m, this._element)
                : f;
            }
            _resolvePossibleFunction(f) {
              return yt(f, [this._element, this._element]);
            }
            _getPopperConfig(f) {
              const m = {
                placement: f,
                modifiers: [
                  {
                    name: "flip",
                    options: {
                      fallbackPlacements: this._config.fallbackPlacements,
                    },
                  },
                  { name: "offset", options: { offset: this._getOffset() } },
                  {
                    name: "preventOverflow",
                    options: { boundary: this._config.boundary },
                  },
                  {
                    name: "arrow",
                    options: { element: `.${this.constructor.NAME}-arrow` },
                  },
                  {
                    name: "preSetPlacement",
                    enabled: !0,
                    phase: "beforeMain",
                    fn: (S) => {
                      this._getTipElement().setAttribute(
                        "data-popper-placement",
                        S.state.placement
                      );
                    },
                  },
                ],
              };
              return { ...m, ...yt(this._config.popperConfig, [void 0, m]) };
            }
            _setListeners() {
              const f = this._config.trigger.split(" ");
              for (const m of f)
                if (m === "click")
                  Q.on(
                    this._element,
                    this.constructor.eventName(Du),
                    this._config.selector,
                    (S) => {
                      const Y = this._initializeOnDelegatedTarget(S);
                      (Y._activeTrigger[gi] = !(
                        Y._isShown() && Y._activeTrigger[gi]
                      )),
                        Y.toggle();
                    }
                  );
                else if (m !== Ge) {
                  const S =
                      m === Sn
                        ? this.constructor.eventName(_e)
                        : this.constructor.eventName(xs),
                    Y =
                      m === Sn
                        ? this.constructor.eventName(Zt)
                        : this.constructor.eventName(Os);
                  Q.on(this._element, S, this._config.selector, (tt) => {
                    const F = this._initializeOnDelegatedTarget(tt);
                    (F._activeTrigger[tt.type === "focusin" ? pi : Sn] = !0),
                      F._enter();
                  }),
                    Q.on(this._element, Y, this._config.selector, (tt) => {
                      const F = this._initializeOnDelegatedTarget(tt);
                      (F._activeTrigger[tt.type === "focusout" ? pi : Sn] =
                        F._element.contains(tt.relatedTarget)),
                        F._leave();
                    });
                }
              (this._hideModalHandler = () => {
                this._element && this.hide();
              }),
                Q.on(this._element.closest(or), ja, this._hideModalHandler);
            }
            _fixTitle() {
              const f = this._element.getAttribute("title");
              f &&
                (!this._element.getAttribute("aria-label") &&
                  !this._element.textContent.trim() &&
                  this._element.setAttribute("aria-label", f),
                this._element.setAttribute("data-bs-original-title", f),
                this._element.removeAttribute("title"));
            }
            _enter() {
              if (this._isShown() || this._isHovered) {
                this._isHovered = !0;
                return;
              }
              (this._isHovered = !0),
                this._setTimeout(() => {
                  this._isHovered && this.show();
                }, this._config.delay.show);
            }
            _leave() {
              this._isWithActiveTrigger() ||
                ((this._isHovered = !1),
                this._setTimeout(() => {
                  this._isHovered || this.hide();
                }, this._config.delay.hide));
            }
            _setTimeout(f, m) {
              clearTimeout(this._timeout), (this._timeout = setTimeout(f, m));
            }
            _isWithActiveTrigger() {
              return Object.values(this._activeTrigger).includes(!0);
            }
            _getConfig(f) {
              const m = en.getDataAttributes(this._element);
              for (const S of Object.keys(m)) Un.has(S) && delete m[S];
              return (
                (f = { ...m, ...(typeof f == "object" && f ? f : {}) }),
                (f = this._mergeConfigObj(f)),
                (f = this._configAfterMerge(f)),
                this._typeCheckConfig(f),
                f
              );
            }
            _configAfterMerge(f) {
              return (
                (f.container =
                  f.container === !1 ? document.body : M(f.container)),
                typeof f.delay == "number" &&
                  (f.delay = { show: f.delay, hide: f.delay }),
                typeof f.title == "number" && (f.title = f.title.toString()),
                typeof f.content == "number" &&
                  (f.content = f.content.toString()),
                f
              );
            }
            _getDelegateConfig() {
              const f = {};
              for (const [m, S] of Object.entries(this._config))
                this.constructor.Default[m] !== S && (f[m] = S);
              return (f.selector = !1), (f.trigger = "manual"), f;
            }
            _disposePopper() {
              this._popper && (this._popper.destroy(), (this._popper = null)),
                this.tip && (this.tip.remove(), (this.tip = null));
            }
            static jQueryInterface(f) {
              return this.each(function () {
                const m = Vn.getOrCreateInstance(this, f);
                if (typeof f == "string") {
                  if (typeof m[f] > "u")
                    throw new TypeError(`No method named "${f}"`);
                  m[f]();
                }
              });
            }
          }
          gt(Vn);
          const Va = "popover",
            Ru = ".popover-header",
            Mu = ".popover-body",
            tl = {
              ...Vn.Default,
              content: "",
              offset: [0, 8],
              placement: "right",
              template:
                '<div class="popover" role="tooltip"><div class="popover-arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>',
              trigger: "click",
            },
            el = {
              ...Vn.DefaultType,
              content: "(null|string|element|function)",
            };
          class nl extends Vn {
            static get Default() {
              return tl;
            }
            static get DefaultType() {
              return el;
            }
            static get NAME() {
              return Va;
            }
            _isWithContent() {
              return this._getTitle() || this._getContent();
            }
            _getContentForTemplate() {
              return { [Ru]: this._getTitle(), [Mu]: this._getContent() };
            }
            _getContent() {
              return this._resolvePossibleFunction(this._config.content);
            }
            static jQueryInterface(f) {
              return this.each(function () {
                const m = nl.getOrCreateInstance(this, f);
                if (typeof f == "string") {
                  if (typeof m[f] > "u")
                    throw new TypeError(`No method named "${f}"`);
                  m[f]();
                }
              });
            }
          }
          gt(nl);
          const al = "scrollspy",
            Yn = ".bs.scrollspy",
            Pn = ".data-api",
            ra = `activate${Yn}`,
            Tn = `click${Yn}`,
            Cs = `load${Yn}${Pn}`,
            Ns = "dropdown-item",
            xn = "active",
            ur = '[data-bs-spy="scroll"]',
            Gn = "[href]",
            he = ".nav, .list-group",
            il = ".nav-link",
            Zf = `${il}, .nav-item > ${il}, .list-group-item`,
            If = ".dropdown",
            le = ".dropdown-toggle",
            Ds = {
              offset: null,
              rootMargin: "0px 0px -25%",
              smoothScroll: !1,
              target: null,
              threshold: [0.1, 0.5, 1],
            },
            ll = {
              offset: "(number|null)",
              rootMargin: "string",
              smoothScroll: "boolean",
              target: "element",
              threshold: "array",
            };
          class Kn extends Be {
            constructor(f, m) {
              super(f, m),
                (this._targetLinks = new Map()),
                (this._observableSections = new Map()),
                (this._rootElement =
                  getComputedStyle(this._element).overflowY === "visible"
                    ? null
                    : this._element),
                (this._activeTarget = null),
                (this._observer = null),
                (this._previousScrollData = {
                  visibleEntryTop: 0,
                  parentScrollTop: 0,
                }),
                this.refresh();
            }
            static get Default() {
              return Ds;
            }
            static get DefaultType() {
              return ll;
            }
            static get NAME() {
              return al;
            }
            refresh() {
              this._initializeTargetsAndObservables(),
                this._maybeEnableSmoothScroll(),
                this._observer
                  ? this._observer.disconnect()
                  : (this._observer = this._getNewObserver());
              for (const f of this._observableSections.values())
                this._observer.observe(f);
            }
            dispose() {
              this._observer.disconnect(), super.dispose();
            }
            _configAfterMerge(f) {
              return (
                (f.target = M(f.target) || document.body),
                (f.rootMargin = f.offset
                  ? `${f.offset}px 0px -30%`
                  : f.rootMargin),
                typeof f.threshold == "string" &&
                  (f.threshold = f.threshold
                    .split(",")
                    .map((m) => Number.parseFloat(m))),
                f
              );
            }
            _maybeEnableSmoothScroll() {
              this._config.smoothScroll &&
                (Q.off(this._config.target, Tn),
                Q.on(this._config.target, Tn, Gn, (f) => {
                  const m = this._observableSections.get(f.target.hash);
                  if (m) {
                    f.preventDefault();
                    const S = this._rootElement || window,
                      Y = m.offsetTop - this._element.offsetTop;
                    if (S.scrollTo) {
                      S.scrollTo({ top: Y, behavior: "smooth" });
                      return;
                    }
                    S.scrollTop = Y;
                  }
                }));
            }
            _getNewObserver() {
              const f = {
                root: this._rootElement,
                threshold: this._config.threshold,
                rootMargin: this._config.rootMargin,
              };
              return new IntersectionObserver(
                (m) => this._observerCallback(m),
                f
              );
            }
            _observerCallback(f) {
              const m = (F) => this._targetLinks.get(`#${F.target.id}`),
                S = (F) => {
                  (this._previousScrollData.visibleEntryTop =
                    F.target.offsetTop),
                    this._process(m(F));
                },
                Y = (this._rootElement || document.documentElement).scrollTop,
                tt = Y >= this._previousScrollData.parentScrollTop;
              this._previousScrollData.parentScrollTop = Y;
              for (const F of f) {
                if (!F.isIntersecting) {
                  (this._activeTarget = null), this._clearActiveClass(m(F));
                  continue;
                }
                const Et =
                  F.target.offsetTop >=
                  this._previousScrollData.visibleEntryTop;
                if (tt && Et) {
                  if ((S(F), !Y)) return;
                  continue;
                }
                !tt && !Et && S(F);
              }
            }
            _initializeTargetsAndObservables() {
              (this._targetLinks = new Map()),
                (this._observableSections = new Map());
              const f = it.find(Gn, this._config.target);
              for (const m of f) {
                if (!m.hash || I(m)) continue;
                const S = it.findOne(decodeURI(m.hash), this._element);
                L(S) &&
                  (this._targetLinks.set(decodeURI(m.hash), m),
                  this._observableSections.set(m.hash, S));
              }
            }
            _process(f) {
              this._activeTarget !== f &&
                (this._clearActiveClass(this._config.target),
                (this._activeTarget = f),
                f.classList.add(xn),
                this._activateParents(f),
                Q.trigger(this._element, ra, { relatedTarget: f }));
            }
            _activateParents(f) {
              if (f.classList.contains(Ns)) {
                it.findOne(le, f.closest(If)).classList.add(xn);
                return;
              }
              for (const m of it.parents(f, he))
                for (const S of it.prev(m, Zf)) S.classList.add(xn);
            }
            _clearActiveClass(f) {
              f.classList.remove(xn);
              const m = it.find(`${Gn}.${xn}`, f);
              for (const S of m) S.classList.remove(xn);
            }
            static jQueryInterface(f) {
              return this.each(function () {
                const m = Kn.getOrCreateInstance(this, f);
                if (typeof f == "string") {
                  if (
                    m[f] === void 0 ||
                    f.startsWith("_") ||
                    f === "constructor"
                  )
                    throw new TypeError(`No method named "${f}"`);
                  m[f]();
                }
              });
            }
          }
          Q.on(window, Cs, () => {
            for (const E of it.find(ur)) Kn.getOrCreateInstance(E);
          }),
            gt(Kn);
          const Rs = "tab",
            Xe = ".bs.tab",
            Ff = `hide${Xe}`,
            Bu = `hidden${Xe}`,
            Jf = `show${Xe}`,
            zu = `shown${Xe}`,
            Ya = `click${Xe}`,
            Ms = `keydown${Xe}`,
            cr = `load${Xe}`,
            Hu = "ArrowLeft",
            vi = "ArrowRight",
            ku = "ArrowUp",
            sl = "ArrowDown",
            ol = "Home",
            Ls = "End",
            On = "active",
            Bs = "fade",
            Pa = "show",
            ju = "dropdown",
            zs = ".dropdown-toggle",
            sa = ".dropdown-menu",
            ul = `:not(${zs})`,
            Hs = '.list-group, .nav, [role="tablist"]',
            oa = ".nav-item, .list-group-item",
            ua = `.nav-link${ul}, .list-group-item${ul}, [role="tab"]${ul}`,
            bi =
              '[data-bs-toggle="tab"], [data-bs-toggle="pill"], [data-bs-toggle="list"]',
            cl = `${ua}, ${bi}`,
            ks = `.${On}[data-bs-toggle="tab"], .${On}[data-bs-toggle="pill"], .${On}[data-bs-toggle="list"]`;
          class un extends Be {
            constructor(f) {
              super(f),
                (this._parent = this._element.closest(Hs)),
                this._parent &&
                  (this._setInitialAttributes(
                    this._parent,
                    this._getChildren()
                  ),
                  Q.on(this._element, Ms, (m) => this._keydown(m)));
            }
            static get NAME() {
              return Rs;
            }
            show() {
              const f = this._element;
              if (this._elemIsActive(f)) return;
              const m = this._getActiveElem(),
                S = m ? Q.trigger(m, Ff, { relatedTarget: f }) : null;
              Q.trigger(f, Jf, { relatedTarget: m }).defaultPrevented ||
                (S && S.defaultPrevented) ||
                (this._deactivate(m, f), this._activate(f, m));
            }
            _activate(f, m) {
              if (!f) return;
              f.classList.add(On), this._activate(it.getElementFromSelector(f));
              const S = () => {
                if (f.getAttribute("role") !== "tab") {
                  f.classList.add(Pa);
                  return;
                }
                f.removeAttribute("tabindex"),
                  f.setAttribute("aria-selected", !0),
                  this._toggleDropDown(f, !0),
                  Q.trigger(f, zu, { relatedTarget: m });
              };
              this._queueCallback(S, f, f.classList.contains(Bs));
            }
            _deactivate(f, m) {
              if (!f) return;
              f.classList.remove(On),
                f.blur(),
                this._deactivate(it.getElementFromSelector(f));
              const S = () => {
                if (f.getAttribute("role") !== "tab") {
                  f.classList.remove(Pa);
                  return;
                }
                f.setAttribute("aria-selected", !1),
                  f.setAttribute("tabindex", "-1"),
                  this._toggleDropDown(f, !1),
                  Q.trigger(f, Bu, { relatedTarget: m });
              };
              this._queueCallback(S, f, f.classList.contains(Bs));
            }
            _keydown(f) {
              if (![Hu, vi, ku, sl, ol, Ls].includes(f.key)) return;
              f.stopPropagation(), f.preventDefault();
              const m = this._getChildren().filter((Y) => !I(Y));
              let S;
              if ([ol, Ls].includes(f.key))
                S = m[f.key === ol ? 0 : m.length - 1];
              else {
                const Y = [vi, sl].includes(f.key);
                S = Vt(m, f.target, Y, !0);
              }
              S &&
                (S.focus({ preventScroll: !0 }),
                un.getOrCreateInstance(S).show());
            }
            _getChildren() {
              return it.find(cl, this._parent);
            }
            _getActiveElem() {
              return (
                this._getChildren().find((f) => this._elemIsActive(f)) || null
              );
            }
            _setInitialAttributes(f, m) {
              this._setAttributeIfNotExists(f, "role", "tablist");
              for (const S of m) this._setInitialAttributesOnChild(S);
            }
            _setInitialAttributesOnChild(f) {
              f = this._getInnerElement(f);
              const m = this._elemIsActive(f),
                S = this._getOuterElement(f);
              f.setAttribute("aria-selected", m),
                S !== f &&
                  this._setAttributeIfNotExists(S, "role", "presentation"),
                m || f.setAttribute("tabindex", "-1"),
                this._setAttributeIfNotExists(f, "role", "tab"),
                this._setInitialAttributesOnTargetPanel(f);
            }
            _setInitialAttributesOnTargetPanel(f) {
              const m = it.getElementFromSelector(f);
              m &&
                (this._setAttributeIfNotExists(m, "role", "tabpanel"),
                f.id &&
                  this._setAttributeIfNotExists(
                    m,
                    "aria-labelledby",
                    `${f.id}`
                  ));
            }
            _toggleDropDown(f, m) {
              const S = this._getOuterElement(f);
              if (!S.classList.contains(ju)) return;
              const Y = (tt, F) => {
                const Et = it.findOne(tt, S);
                Et && Et.classList.toggle(F, m);
              };
              Y(zs, On), Y(sa, Pa), S.setAttribute("aria-expanded", m);
            }
            _setAttributeIfNotExists(f, m, S) {
              f.hasAttribute(m) || f.setAttribute(m, S);
            }
            _elemIsActive(f) {
              return f.classList.contains(On);
            }
            _getInnerElement(f) {
              return f.matches(cl) ? f : it.findOne(cl, f);
            }
            _getOuterElement(f) {
              return f.closest(oa) || f;
            }
            static jQueryInterface(f) {
              return this.each(function () {
                const m = un.getOrCreateInstance(this);
                if (typeof f == "string") {
                  if (
                    m[f] === void 0 ||
                    f.startsWith("_") ||
                    f === "constructor"
                  )
                    throw new TypeError(`No method named "${f}"`);
                  m[f]();
                }
              });
            }
          }
          Q.on(document, Ya, bi, function (E) {
            ["A", "AREA"].includes(this.tagName) && E.preventDefault(),
              !I(this) && un.getOrCreateInstance(this).show();
          }),
            Q.on(window, cr, () => {
              for (const E of it.find(ks)) un.getOrCreateInstance(E);
            }),
            gt(un);
          const fl = "toast",
            Xn = ".bs.toast",
            yi = `mouseover${Xn}`,
            fr = `mouseout${Xn}`,
            Uu = `focusin${Xn}`,
            js = `focusout${Xn}`,
            Us = `hide${Xn}`,
            ca = `hidden${Xn}`,
            St = `show${Xn}`,
            kt = `shown${Xn}`,
            ee = "fade",
            dl = "hide",
            Qn = "show",
            Cn = "showing",
            dr = { animation: "boolean", autohide: "boolean", delay: "number" },
            hl = { animation: !0, autohide: !0, delay: 5e3 };
          class Nn extends Be {
            constructor(f, m) {
              super(f, m),
                (this._timeout = null),
                (this._hasMouseInteraction = !1),
                (this._hasKeyboardInteraction = !1),
                this._setListeners();
            }
            static get Default() {
              return hl;
            }
            static get DefaultType() {
              return dr;
            }
            static get NAME() {
              return fl;
            }
            show() {
              if (Q.trigger(this._element, St).defaultPrevented) return;
              this._clearTimeout(),
                this._config.animation && this._element.classList.add(ee);
              const m = () => {
                this._element.classList.remove(Cn),
                  Q.trigger(this._element, kt),
                  this._maybeScheduleHide();
              };
              this._element.classList.remove(dl),
                Z(this._element),
                this._element.classList.add(Qn, Cn),
                this._queueCallback(m, this._element, this._config.animation);
            }
            hide() {
              if (
                !this.isShown() ||
                Q.trigger(this._element, Us).defaultPrevented
              )
                return;
              const m = () => {
                this._element.classList.add(dl),
                  this._element.classList.remove(Cn, Qn),
                  Q.trigger(this._element, ca);
              };
              this._element.classList.add(Cn),
                this._queueCallback(m, this._element, this._config.animation);
            }
            dispose() {
              this._clearTimeout(),
                this.isShown() && this._element.classList.remove(Qn),
                super.dispose();
            }
            isShown() {
              return this._element.classList.contains(Qn);
            }
            _maybeScheduleHide() {
              this._config.autohide &&
                (this._hasMouseInteraction ||
                  this._hasKeyboardInteraction ||
                  (this._timeout = setTimeout(() => {
                    this.hide();
                  }, this._config.delay)));
            }
            _onInteraction(f, m) {
              switch (f.type) {
                case "mouseover":
                case "mouseout": {
                  this._hasMouseInteraction = m;
                  break;
                }
                case "focusin":
                case "focusout": {
                  this._hasKeyboardInteraction = m;
                  break;
                }
              }
              if (m) {
                this._clearTimeout();
                return;
              }
              const S = f.relatedTarget;
              this._element === S ||
                this._element.contains(S) ||
                this._maybeScheduleHide();
            }
            _setListeners() {
              Q.on(this._element, yi, (f) => this._onInteraction(f, !0)),
                Q.on(this._element, fr, (f) => this._onInteraction(f, !1)),
                Q.on(this._element, Uu, (f) => this._onInteraction(f, !0)),
                Q.on(this._element, js, (f) => this._onInteraction(f, !1));
            }
            _clearTimeout() {
              clearTimeout(this._timeout), (this._timeout = null);
            }
            static jQueryInterface(f) {
              return this.each(function () {
                const m = Nn.getOrCreateInstance(this, f);
                if (typeof f == "string") {
                  if (typeof m[f] > "u")
                    throw new TypeError(`No method named "${f}"`);
                  m[f](this);
                }
              });
            }
          }
          return (
            Ve(Nn),
            gt(Nn),
            {
              Alert: ue,
              Button: zn,
              Carousel: kn,
              Collapse: ia,
              Dropdown: sn,
              Modal: Ba,
              Offcanvas: te,
              Popover: nl,
              ScrollSpy: Kn,
              Tab: un,
              Toast: Nn,
              Tooltip: Vn,
            }
          );
        });
      })(Mc)),
    Mc.exports
  );
}
RT();
xw.createRoot(document.getElementById("root")).render(
  k.jsx(V.StrictMode, { children: k.jsx($A, {}) })
);
