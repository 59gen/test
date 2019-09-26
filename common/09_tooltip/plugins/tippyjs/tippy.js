! function (t, e) {
    "object" == typeof exports && "undefined" != typeof module ? module.exports = e(require("popper.js")) : "function" == typeof define && define.amd ? define(["popper.js"], e) : (t = t || self).tippy = e(t.Popper)
  }(this, function (t) {
    "use strict";
    t = t && t.hasOwnProperty("default") ? t.default : t;
  
    function e() {
      return (e = Object.assign || function (t) {
        for (var e = 1; e < arguments.length; e++) {
          var a = arguments[e];
          for (var r in a) Object.prototype.hasOwnProperty.call(a, r) && (t[r] = a[r])
        }
        return t
      }).apply(this, arguments)
    }
    var a = "undefined" != typeof window && "undefined" != typeof document,
      r = a ? navigator.userAgent : "",
      n = /MSIE |Trident\//.test(r),
      i = /UCBrowser\//.test(r),
      o = a && /iPhone|iPad|iPod/.test(navigator.platform) && !window.MSStream,
      p = {
        a11y: !0,
        allowHTML: !0,
        animateFill: !0,
        animation: "shift-away",
        appendTo: function () {
          return document.body
        },
        aria: "describedby",
        arrow: !1,
        arrowType: "sharp",
        boundary: "scrollParent",
        content: "",
        delay: 0,
        distance: 10,
        duration: [325, 275],
        flip: !0,
        flipBehavior: "flip",
        flipOnUpdate: !1,
        followCursor: !1,
        hideOnClick: !0,
        ignoreAttributes: !1,
        inertia: !1,
        interactive: !1,
        interactiveBorder: 2,
        interactiveDebounce: 0,
        lazy: !0,
        maxWidth: 350,
        multiple: !1,
        offset: 0,
        onHidden: function () {},
        onHide: function () {},
        onMount: function () {},
        onShow: function () {},
        onShown: function () {},
        onTrigger: function () {},
        placement: "top",
        popperOptions: {},
        role: "tooltip",
        showOnInit: !1,
        size: "regular",
        sticky: !1,
        target: "",
        theme: "dark",
        touch: !0,
        touchHold: !1,
        trigger: "mouseenter focus",
        triggerTarget: null,
        updateDuration: 0,
        wait: null,
        zIndex: 9999
      },
      s = ["arrow", "arrowType", "boundary", "distance", "flip", "flipBehavior", "flipOnUpdate", "offset", "placement", "popperOptions"],
      c = a ? Element.prototype : {},
      l = c.matches || c.matchesSelector || c.webkitMatchesSelector || c.mozMatchesSelector || c.msMatchesSelector;
  
    function d(t) {
      return [].slice.call(t)
    }
  
    function f(t, e) {
      return m(t, function (t) {
        return l.call(t, e)
      })
    }
  
    function m(t, e) {
      for (; t;) {
        if (e(t)) return t;
        t = t.parentElement
      }
      return null
    }
    var u = {
        passive: !0
      },
      b = 4,
      y = "x-placement",
      v = "x-out-of-boundaries",
      h = "tippy-iOS",
      x = "tippy-active",
      g = "tippy-popper",
      w = "tippy-tooltip",
      k = "tippy-content",
      A = "tippy-backdrop",
      E = "tippy-arrow",
      C = "tippy-roundarrow",
      L = ".".concat(g),
      X = ".".concat(w),
      Y = ".".concat(k),
      T = ".".concat(A),
      I = ".".concat(E),
      S = ".".concat(C),
      O = !1;
  
    function z() {
      O || (O = !0, o && document.body.classList.add(h), window.performance && document.addEventListener("mousemove", H))
    }
    var M = 0;
  
    function H() {
      var t = performance.now();
      t - M < 20 && (O = !1, document.removeEventListener("mousemove", H), o || document.body.classList.remove(h)), M = t
    }
  
    function V() {
      var t = document.activeElement;
      t && t.blur && t._tippy && t.blur()
    }
    var _ = Object.keys(p);
  
    function N(t, e) {
      return {}.hasOwnProperty.call(t, e)
    }
  
    function P(t, e, a) {
      if (Array.isArray(t)) {
        var r = t[e];
        return null == r ? a : r
      }
      return t
    }
  
    function D(t, e) {
      return 0 === e ? t : function (r) {
        clearTimeout(a), a = setTimeout(function () {
          t(r)
        }, e)
      };
      var a
    }
  
    function q(t, e) {
      return t && t.modifiers && t.modifiers[e]
    }
  
    function B(t, e) {
      return t.indexOf(e) > -1
    }
  
    function F(t) {
      return t instanceof Element
    }
  
    function j(t) {
      return !(!t || !N(t, "isVirtual")) || F(t)
    }
  
    function U(t, e) {
      return "function" == typeof t ? t.apply(null, e) : t
    }
  
    function W(t, e) {
      t.filter(function (t) {
        return "flip" === t.name
      })[0].enabled = e
    }
  
    function R() {
      return document.createElement("div")
    }
  
    function J(t, e) {
      t.forEach(function (t) {
        t && (t.style.transitionDuration = "".concat(e, "ms"))
      })
    }
  
    function G(t, e) {
      t.forEach(function (t) {
        t && t.setAttribute("data-state", e)
      })
    }
  
    function K(t, a) {
      var r = e({}, a, {
        content: U(a.content, [t])
      }, a.ignoreAttributes ? {} : function (t) {
        return _.reduce(function (e, a) {
          var r = (t.getAttribute("data-tippy-".concat(a)) || "").trim();
          if (!r) return e;
          if ("content" === a) e[a] = r;
          else try {
            e[a] = JSON.parse(r)
          } catch (t) {
            e[a] = r
          }
          return e
        }, {})
      }(t));
      return (r.arrow || i) && (r.animateFill = !1), r
    }
  
    function Q(t, e) {
      Object.keys(t).forEach(function (t) {
        if (!N(e, t)) throw new Error("[tippy]: `".concat(t, "` is not a valid option"))
      })
    }
  
    function Z(t, e) {
      t.innerHTML = F(e) ? e.innerHTML : e
    }
  
    function $(t, e) {
      if (F(e.content)) Z(t, ""), t.appendChild(e.content);
      else if ("function" != typeof e.content) {
        t[e.allowHTML ? "innerHTML" : "textContent"] = e.content
      }
    }
  
    function tt(t) {
      return {
        tooltip: t.querySelector(X),
        backdrop: t.querySelector(T),
        content: t.querySelector(Y),
        arrow: t.querySelector(I) || t.querySelector(S)
      }
    }
  
    function et(t) {
      t.setAttribute("data-inertia", "")
    }
  
    function at(t) {
      var e = R();
      return "round" === t ? (e.className = C, Z(e, '<svg viewBox="0 0 18 7" xmlns="http://www.w3.org/2000/svg"><path d="M0 7s2.021-.015 5.253-4.218C6.584 1.051 7.797.007 9 0c1.203-.007 2.416 1.035 3.761 2.782C16.012 7.005 18 7 18 7H0z"/></svg>')) : e.className = E, e
    }
  
    function rt() {
      var t = R();
      return t.className = A, t.setAttribute("data-state", "hidden"), t
    }
  
    function nt(t, e) {
      t.setAttribute("tabindex", "-1"), e.setAttribute("data-interactive", "")
    }
  
    function it(t, e, a) {
      var r = i && void 0 !== document.body.style.webkitTransition ? "webkitTransitionEnd" : "transitionend";
      t[e + "EventListener"](r, a)
    }
  
    function ot(t) {
      var e = t.getAttribute(y);
      return e ? e.split("-")[0] : ""
    }
  
    function pt(t, e, a) {
      a.split(" ").forEach(function (a) {
        t.classList[e](a + "-theme")
      })
    }
  
    function st(t, e) {
      var a = R();
      a.className = g, a.id = "tippy-".concat(t), a.style.zIndex = "" + e.zIndex, a.style.position = "absolute", a.style.top = "0", a.style.left = "0", e.role && a.setAttribute("role", e.role);
      var r = R();
      r.className = w, r.style.maxWidth = e.maxWidth + ("number" == typeof e.maxWidth ? "px" : ""), r.setAttribute("data-size", e.size), r.setAttribute("data-animation", e.animation), r.setAttribute("data-state", "hidden"), pt(r, "add", e.theme);
      var n = R();
      return n.className = k, n.setAttribute("data-state", "hidden"), e.interactive && nt(a, r), e.arrow && r.appendChild(at(e.arrowType)), e.animateFill && (r.appendChild(rt()), r.setAttribute("data-animatefill", "")), e.inertia && et(r), $(n, e), r.appendChild(n), a.appendChild(r), a
    }
  
    function ct(t, e, a) {
      var r = tt(t),
        n = r.tooltip,
        i = r.content,
        o = r.backdrop,
        p = r.arrow;
      t.style.zIndex = "" + a.zIndex, n.setAttribute("data-size", a.size), n.setAttribute("data-animation", a.animation), n.style.maxWidth = a.maxWidth + ("number" == typeof a.maxWidth ? "px" : ""), a.role ? t.setAttribute("role", a.role) : t.removeAttribute("role"), e.content !== a.content && $(i, a), !e.animateFill && a.animateFill ? (n.appendChild(rt()), n.setAttribute("data-animatefill", "")) : e.animateFill && !a.animateFill && (n.removeChild(o), n.removeAttribute("data-animatefill")), !e.arrow && a.arrow ? n.appendChild(at(a.arrowType)) : e.arrow && !a.arrow && n.removeChild(p), e.arrow && a.arrow && e.arrowType !== a.arrowType && n.replaceChild(at(a.arrowType), p), !e.interactive && a.interactive ? nt(t, n) : e.interactive && !a.interactive && function (t, e) {
        t.removeAttribute("tabindex"), e.removeAttribute("data-interactive")
      }(t, n), !e.inertia && a.inertia ? et(n) : e.inertia && !a.inertia && function (t) {
        t.removeAttribute("data-inertia")
      }(n), e.theme !== a.theme && (pt(n, "remove", e.theme), pt(n, "add", a.theme))
    }
    var lt = 1,
      dt = [];
  
    function ft(a, r) {
      var i, o, c, h, g, w = K(a, r);
      if (!w.multiple && a._tippy) return null;
      var k, A, E, C, X, Y = !1,
        T = !1,
        I = !1,
        S = !1,
        z = [],
        M = D(ht, w.interactiveDebounce),
        H = lt++,
        V = st(H, w),
        _ = tt(V),
        j = {
          id: H,
          reference: a,
          popper: V,
          popperChildren: _,
          popperInstance: null,
          props: w,
          state: {
            isEnabled: !0,
            isVisible: !1,
            isDestroyed: !1,
            isMounted: !1,
            isShown: !1
          },
          clearDelayTimeouts: Tt,
          set: It,
          setContent: function (t) {
            It({
              content: t
            })
          },
          show: St,
          hide: Ot,
          enable: function () {
            j.state.isEnabled = !0
          },
          disable: function () {
            j.state.isEnabled = !1
          },
          destroy: function (t) {
            if (j.state.isDestroyed) return;
            T = !0, j.state.isMounted && Ot(0);
            bt(), delete a._tippy;
            var e = j.props.target;
            e && t && F(a) && d(a.querySelectorAll(e)).forEach(function (t) {
              t._tippy && t._tippy.destroy()
            });
            j.popperInstance && j.popperInstance.destroy();
            T = !1, j.state.isDestroyed = !0
          }
        };
      return a._tippy = j, V._tippy = j, ut(), w.lazy || Ct(), w.showOnInit && Lt(), !w.a11y || w.target || (!F(X = $()) || l.call(X, "a[href],area[href],button,details,input,textarea,select,iframe,[tabindex]") && !X.hasAttribute("disabled")) || $().setAttribute("tabindex", "0"), V.addEventListener("mouseenter", function (t) {
        j.props.interactive && j.state.isVisible && "mouseenter" === i && Lt(t, !0)
      }), V.addEventListener("mouseleave", function () {
        j.props.interactive && "mouseenter" === i && document.addEventListener("mousemove", M)
      }), j;
  
      function R() {
        document.removeEventListener("mousemove", yt)
      }
  
      function Z() {
        document.body.removeEventListener("mouseleave", Xt), document.removeEventListener("mousemove", M), dt = dt.filter(function (t) {
          return t !== M
        })
      }
  
      function $() {
        return j.props.triggerTarget || a
      }
  
      function et() {
        document.addEventListener("click", Yt, !0)
      }
  
      function at() {
        document.removeEventListener("click", Yt, !0)
      }
  
      function rt() {
        return [j.popperChildren.tooltip, j.popperChildren.backdrop, j.popperChildren.content]
      }
  
      function nt() {
        var t = j.props.followCursor;
        return t && "focus" !== i || O && "initial" === t
      }
  
      function pt(t, e) {
        var a = j.popperChildren.tooltip;
  
        function r(t) {
          t.target === a && (it(a, "remove", r), e())
        }
        if (0 === t) return e();
        it(a, "remove", E), it(a, "add", r), E = r
      }
  
      function mt(t, e) {
        var a = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        $().addEventListener(t, e, a), z.push({
          eventType: t,
          handler: e,
          options: a
        })
      }
  
      function ut() {
        j.props.touchHold && !j.props.target && (mt("touchstart", vt, u), mt("touchend", xt, u)), j.props.trigger.trim().split(" ").forEach(function (t) {
          if ("manual" !== t)
            if (j.props.target) switch (t) {
            case "mouseenter":
              mt("mouseover", wt), mt("mouseout", kt);
              break;
            case "focus":
              mt("focusin", wt), mt("focusout", kt);
              break;
            case "click":
              mt(t, wt)
            } else switch (mt(t, vt), t) {
            case "mouseenter":
              mt("mouseleave", xt);
              break;
            case "focus":
              mt(n ? "focusout" : "blur", gt)
            }
        })
      }
  
      function bt() {
        z.forEach(function (t) {
          var e = t.eventType,
            a = t.handler,
            r = t.options;
          $().removeEventListener(e, a, r)
        }), z = []
      }
  
      function yt(t) {
        var r = o = t,
          n = r.clientX,
          i = r.clientY;
        if (C) {
          var p = m(t.target, function (t) {
              return t === a
            }),
            s = a.getBoundingClientRect(),
            c = j.props.followCursor,
            l = "horizontal" === c,
            d = "vertical" === c,
            f = B(["top", "bottom"], ot(V)),
            u = V.getAttribute(y),
            b = !!u && !!u.split("-")[1],
            v = f ? V.offsetWidth : V.offsetHeight,
            h = v / 2,
            x = f ? 0 : b ? v : h,
            g = f ? b ? v : h : 0;
          !p && j.props.interactive || (j.popperInstance.reference = e({}, j.popperInstance.reference, {
            referenceNode: a,
            clientWidth: 0,
            clientHeight: 0,
            getBoundingClientRect: function () {
              return {
                width: f ? v : 0,
                height: f ? 0 : v,
                top: (l ? s.top : i) - x,
                bottom: (l ? s.bottom : i) + x,
                left: (d ? s.left : n) - g,
                right: (d ? s.right : n) + g
              }
            }
          }), j.popperInstance.update()), "initial" === c && j.state.isVisible && R()
        }
      }
  
      function vt(t) {
        j.state.isEnabled && !At(t) && (j.state.isVisible || (i = t.type, t instanceof MouseEvent && (o = t, dt.forEach(function (e) {
          return e(t)
        }))), "click" === t.type && !1 !== j.props.hideOnClick && j.state.isVisible ? Xt() : Lt(t))
      }
  
      function ht(t) {
        var e = f(t.target, L) === V,
          r = m(t.target, function (t) {
            return t === a
          });
        e || r || function (t, e, a, r) {
          if (!t) return !0;
          var n = a.clientX,
            i = a.clientY,
            o = r.interactiveBorder,
            p = r.distance,
            s = e.top - i > ("top" === t ? o + p : o),
            c = i - e.bottom > ("bottom" === t ? o + p : o),
            l = e.left - n > ("left" === t ? o + p : o),
            d = n - e.right > ("right" === t ? o + p : o);
          return s || c || l || d
        }(ot(V), V.getBoundingClientRect(), t, j.props) && (Z(), Xt())
      }
  
      function xt(t) {
        if (!At(t)) return j.props.interactive ? (document.body.addEventListener("mouseleave", Xt), document.addEventListener("mousemove", M), void dt.push(M)) : void Xt()
      }
  
      function gt(t) {
        t.target === $() && (j.props.interactive && t.relatedTarget && V.contains(t.relatedTarget) || Xt())
      }
  
      function wt(t) {
        f(t.target, j.props.target) && Lt(t)
      }
  
      function kt(t) {
        f(t.target, j.props.target) && Xt()
      }
  
      function At(t) {
        var e = "ontouchstart" in window,
          a = B(t.type, "touch"),
          r = j.props.touchHold;
        return e && O && r && !a || O && !r && a
      }
  
      function Et() {
        !S && A && (S = !0, function (t) {
          t.offsetHeight
        }(V), A())
      }
  
      function Ct() {
        var r = j.props.popperOptions,
          n = j.popperChildren,
          i = n.tooltip,
          o = n.arrow,
          p = q(r, "preventOverflow");
  
        function s(t) {
          j.props.flip && !j.props.flipOnUpdate && (t.flipped && (j.popperInstance.options.placement = t.placement), W(j.popperInstance.modifiers, !1)), i.setAttribute(y, t.placement), !1 !== t.attributes[v] ? i.setAttribute(v, "") : i.removeAttribute(v), k && k !== t.placement && I && (i.style.transition = "none", requestAnimationFrame(function () {
            i.style.transition = ""
          })), k = t.placement, I = j.state.isVisible;
          var a = ot(V),
            r = i.style;
          r.top = r.bottom = r.left = r.right = "", r[a] = -(j.props.distance - 10) + "px";
          var n = p && void 0 !== p.padding ? p.padding : b,
            o = "number" == typeof n,
            s = e({
              top: o ? n : n.top,
              bottom: o ? n : n.bottom,
              left: o ? n : n.left,
              right: o ? n : n.right
            }, !o && n);
          s[a] = o ? n + j.props.distance : (n[a] || 0) + j.props.distance, j.popperInstance.modifiers.filter(function (t) {
            return "preventOverflow" === t.name
          })[0].padding = s, C = s
        }
        var c = e({
          eventsEnabled: !1,
          placement: j.props.placement
        }, r, {
          modifiers: e({}, r ? r.modifiers : {}, {
            preventOverflow: e({
              boundariesElement: j.props.boundary,
              padding: b
            }, p),
            arrow: e({
              element: o,
              enabled: !!o
            }, q(r, "arrow")),
            flip: e({
              enabled: j.props.flip,
              padding: j.props.distance + b,
              behavior: j.props.flipBehavior
            }, q(r, "flip")),
            offset: e({
              offset: j.props.offset
            }, q(r, "offset"))
          }),
          onCreate: function (t) {
            s(t), Et(), r && r.onCreate && r.onCreate(t)
          },
          onUpdate: function (t) {
            s(t), Et(), r && r.onUpdate && r.onUpdate(t)
          }
        });
        j.popperInstance = new t(a, V, c)
      }
  
      function Lt(t, a) {
        if (Tt(), !j.state.isVisible) {
          if (j.props.target) return function (t) {
            if (t) {
              var a = f(t.target, j.props.target);
              a && !a._tippy && ft(a, e({}, j.props, {
                content: U(r.content, [a]),
                appendTo: r.appendTo,
                target: "",
                showOnInit: !0
              }))
            }
          }(t);
          if (Y = !0, t && !a && j.props.onTrigger(j, t), j.props.wait) return j.props.wait(j, t);
          nt() && !j.state.isMounted && (j.popperInstance || Ct(), document.addEventListener("mousemove", yt)), et();
          var n = P(j.props.delay, 0, p.delay);
          n ? c = setTimeout(function () {
            St()
          }, n) : St()
        }
      }
  
      function Xt() {
        if (Tt(), !j.state.isVisible) return R(), void at();
        Y = !1;
        var t = P(j.props.delay, 1, p.delay);
        t ? h = setTimeout(function () {
          j.state.isVisible && Ot()
        }, t) : g = requestAnimationFrame(function () {
          Ot()
        })
      }
  
      function Yt(t) {
        if (!j.props.interactive || !V.contains(t.target)) {
          if ($().contains(t.target)) {
            if (O) return;
            if (j.state.isVisible && B(j.props.trigger, "click")) return
          }!0 === j.props.hideOnClick && (Tt(), Ot())
        }
      }
  
      function Tt() {
        clearTimeout(c), clearTimeout(h), cancelAnimationFrame(g)
      }
  
      function It(t) {
        Q(t = t || {}, p), bt();
        var r = j.props,
          n = K(a, e({}, j.props, {}, t, {
            ignoreAttributes: !0
          }));
        n.ignoreAttributes = N(t, "ignoreAttributes") ? t.ignoreAttributes || !1 : r.ignoreAttributes, j.props = n, ut(), Z(), M = D(ht, n.interactiveDebounce), ct(V, r, n), j.popperChildren = tt(V), j.popperInstance && (s.some(function (e) {
          return N(t, e) && t[e] !== r[e]
        }) ? (j.popperInstance.destroy(), Ct(), j.state.isVisible && j.popperInstance.enableEventListeners(), j.props.followCursor && o && yt(o)) : j.popperInstance.update())
      }
  
      function St() {
        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : P(j.props.duration, 0, p.duration[1]);
        if (!j.state.isDestroyed && j.state.isEnabled && (!O || j.props.touch) && !$().hasAttribute("disabled") && !1 !== j.props.onShow(j)) {
          et(), V.style.visibility = "visible", j.state.isVisible = !0, j.props.interactive && $().classList.add(x);
          var e = rt();
          J(e.concat(V), 0), A = function () {
              if (j.state.isVisible) {
                var r = nt();
                r && o ? yt(o) : r || j.popperInstance.update(), j.popperChildren.backdrop && (j.popperChildren.content.style.transitionDelay = Math.round(t / 12) + "ms"), j.props.sticky && function () {
                    J([V], n ? 0 : j.props.updateDuration);
                    var t = a.getBoundingClientRect();
                    ! function e() {
                      var r = a.getBoundingClientRect();
                      t.top === r.top && t.right === r.right && t.bottom === r.bottom && t.left === r.left || j.popperInstance.scheduleUpdate(), t = r, j.state.isMounted && requestAnimationFrame(e)
                    }()
                  }(), J([V], j.props.updateDuration), J(e, t), G(e, "visible"),
                  function (t, e) {
                    pt(t, e)
                  }(t, function () {
                    j.props.aria && $().setAttribute("aria-".concat(j.props.aria), V.id), j.props.onShown(j), j.state.isShown = !0
                  })
              }
            },
            function () {
              S = !1;
              var t = nt();
              j.popperInstance ? (W(j.popperInstance.modifiers, j.props.flip), t || (j.popperInstance.reference = a, j.popperInstance.enableEventListeners()), j.popperInstance.scheduleUpdate()) : (Ct(), t || j.popperInstance.enableEventListeners());
              var e = j.props.appendTo,
                r = "parent" === e ? a.parentNode : U(e, [a]);
              r.contains(V) || (r.appendChild(V), j.props.onMount(j), j.state.isMounted = !0)
            }()
        }
      }
  
      function Ot() {
        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : P(j.props.duration, 1, p.duration[1]);
        if (!j.state.isDestroyed && (j.state.isEnabled || T) && (!1 !== j.props.onHide(j) || T)) {
          at(), V.style.visibility = "hidden", j.state.isVisible = !1, j.state.isShown = !1, I = !1, j.props.interactive && $().classList.remove(x);
          var e = rt();
          J(e, t), G(e, "hidden"),
            function (t, e) {
              pt(t, function () {
                !j.state.isVisible && V.parentNode && V.parentNode.contains(V) && e()
              })
            }(t, function () {
              Y || R(), j.props.aria && $().removeAttribute("aria-".concat(j.props.aria)), j.popperInstance.disableEventListeners(), j.popperInstance.options.placement = j.props.placement, V.parentNode.removeChild(V), j.props.onHidden(j), j.state.isMounted = !1
            })
        }
      }
    }
    var mt = !1;
  
    function ut(t, a) {
      Q(a || {}, p), mt || (document.addEventListener("touchstart", z, u), window.addEventListener("blur", V), mt = !0);
      var r, n = e({}, p, {}, a);
      r = t, "[object Object]" !== {}.toString.call(r) || r.addEventListener || function (t) {
        var e = {
          isVirtual: !0,
          attributes: t.attributes || {},
          contains: function () {},
          setAttribute: function (e, a) {
            t.attributes[e] = a
          },
          getAttribute: function (e) {
            return t.attributes[e]
          },
          removeAttribute: function (e) {
            delete t.attributes[e]
          },
          hasAttribute: function (e) {
            return e in t.attributes
          },
          addEventListener: function () {},
          removeEventListener: function () {},
          classList: {
            classNames: {},
            add: function (e) {
              t.classList.classNames[e] = !0
            },
            remove: function (e) {
              delete t.classList.classNames[e]
            },
            contains: function (e) {
              return e in t.classList.classNames
            }
          }
        };
        for (var a in e) t[a] = e[a]
      }(t);
      var i = function (t) {
        if (j(t)) return [t];
        if (t instanceof NodeList) return d(t);
        if (Array.isArray(t)) return t;
        try {
          return d(document.querySelectorAll(t))
        } catch (t) {
          return []
        }
      }(t).reduce(function (t, e) {
        var a = e && ft(e, n);
        return a && t.push(a), t
      }, []);
      return j(t) ? i[0] : i
    }
    return ut.version = "4.3.5", ut.defaults = p, ut.setDefaults = function (t) {
        Object.keys(t).forEach(function (e) {
          p[e] = t[e]
        })
      }, ut.hideAll = function () {
        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          e = t.exclude,
          a = t.duration;
        d(document.querySelectorAll(L)).forEach(function (t) {
          var r, n = t._tippy;
          if (n) {
            var i = !1;
            e && (i = (r = e)._tippy && !l.call(r, L) ? n.reference === e : t === e.popper), i || n.hide(a)
          }
        })
      }, ut.group = function (t) {
        var a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
          r = a.delay,
          n = void 0 === r ? t[0].props.delay : r,
          i = a.duration,
          o = void 0 === i ? 0 : i,
          p = !1;
  
        function s(t) {
          p = t, f()
        }
  
        function c(e) {
          e._originalProps.onShow(e), t.forEach(function (t) {
            t.set({
              duration: o
            }), t.state.isVisible && t.hide()
          }), s(!0)
        }
  
        function l(t) {
          t._originalProps.onHide(t), s(!1)
        }
  
        function d(t) {
          t._originalProps.onShown(t), t.set({
            duration: t._originalProps.duration
          })
        }
  
        function f() {
          t.forEach(function (t) {
            t.set({
              onShow: c,
              onShown: d,
              onHide: l,
              delay: p ? [0, Array.isArray(n) ? n[1] : n] : n,
              duration: p ? o : t._originalProps.duration
            })
          })
        }
        t.forEach(function (t) {
          t._originalProps ? t.set(t._originalProps) : t._originalProps = e({}, t.props)
        }), f()
      }, a && setTimeout(function () {
        d(document.querySelectorAll("[data-tippy]")).forEach(function (t) {
          var e = t.getAttribute("data-tippy");
          e && ut(t, {
            content: e
          })
        })
      }),
      function (t) {
        if (a) {
          var e = document.createElement("style");
          e.type = "text/css", e.textContent = t, e.setAttribute("data-tippy-stylesheet", "");
          var r = document.head,
            n = r.querySelector("style,link");
          n ? r.insertBefore(e, n) : r.appendChild(e)
        }
      }('.tippy-iOS{cursor:pointer!important;-webkit-tap-highlight-color:transparent}.tippy-popper{transition-timing-function:cubic-bezier(.165,.84,.44,1);max-width:calc(100% - 8px);pointer-events:none;outline:0}.tippy-popper[x-placement^=top] .tippy-backdrop{border-radius:40% 40% 0 0}.tippy-popper[x-placement^=top] .tippy-roundarrow{bottom:-7px;bottom:-6.5px;-webkit-transform-origin:50% 0;transform-origin:50% 0;margin:0 3px}.tippy-popper[x-placement^=top] .tippy-roundarrow svg{position:absolute;left:0;-webkit-transform:rotate(180deg);transform:rotate(180deg)}.tippy-popper[x-placement^=top] .tippy-arrow{border-top:8px solid #333;border-right:8px solid transparent;border-left:8px solid transparent;bottom:-7px;margin:0 3px;-webkit-transform-origin:50% 0;transform-origin:50% 0}.tippy-popper[x-placement^=top] .tippy-backdrop{-webkit-transform-origin:0 25%;transform-origin:0 25%}.tippy-popper[x-placement^=top] .tippy-backdrop[data-state=visible]{-webkit-transform:scale(1) translate(-50%,-55%);transform:scale(1) translate(-50%,-55%)}.tippy-popper[x-placement^=top] .tippy-backdrop[data-state=hidden]{-webkit-transform:scale(.2) translate(-50%,-45%);transform:scale(.2) translate(-50%,-45%);opacity:0}.tippy-popper[x-placement^=top] [data-animation=shift-toward][data-state=visible]{-webkit-transform:translateY(-10px);transform:translateY(-10px)}.tippy-popper[x-placement^=top] [data-animation=shift-toward][data-state=hidden]{opacity:0;-webkit-transform:translateY(-20px);transform:translateY(-20px)}.tippy-popper[x-placement^=top] [data-animation=perspective]{-webkit-transform-origin:bottom;transform-origin:bottom}.tippy-popper[x-placement^=top] [data-animation=perspective][data-state=visible]{-webkit-transform:perspective(700px) translateY(-10px);transform:perspective(700px) translateY(-10px)}.tippy-popper[x-placement^=top] [data-animation=perspective][data-state=hidden]{opacity:0;-webkit-transform:perspective(700px) rotateX(60deg);transform:perspective(700px) rotateX(60deg)}.tippy-popper[x-placement^=top] [data-animation=fade][data-state=visible]{-webkit-transform:translateY(-10px);transform:translateY(-10px)}.tippy-popper[x-placement^=top] [data-animation=fade][data-state=hidden]{opacity:0;-webkit-transform:translateY(-10px);transform:translateY(-10px)}.tippy-popper[x-placement^=top] [data-animation=shift-away][data-state=visible]{-webkit-transform:translateY(-10px);transform:translateY(-10px)}.tippy-popper[x-placement^=top] [data-animation=shift-away][data-state=hidden]{opacity:0}.tippy-popper[x-placement^=top] [data-animation=scale]{-webkit-transform-origin:bottom;transform-origin:bottom}.tippy-popper[x-placement^=top] [data-animation=scale][data-state=visible]{-webkit-transform:translateY(-10px);transform:translateY(-10px)}.tippy-popper[x-placement^=top] [data-animation=scale][data-state=hidden]{opacity:0;-webkit-transform:translateY(-10px) scale(.5);transform:translateY(-10px) scale(.5)}.tippy-popper[x-placement^=bottom] .tippy-backdrop{border-radius:0 0 30% 30%}.tippy-popper[x-placement^=bottom] .tippy-roundarrow{top:-7px;-webkit-transform-origin:50% 100%;transform-origin:50% 100%;margin:0 3px}.tippy-popper[x-placement^=bottom] .tippy-roundarrow svg{position:absolute;left:0}.tippy-popper[x-placement^=bottom] .tippy-arrow{border-bottom:8px solid #333;border-right:8px solid transparent;border-left:8px solid transparent;top:-7px;margin:0 3px;-webkit-transform-origin:50% 100%;transform-origin:50% 100%}.tippy-popper[x-placement^=bottom] .tippy-backdrop{-webkit-transform-origin:0 -50%;transform-origin:0 -50%}.tippy-popper[x-placement^=bottom] .tippy-backdrop[data-state=visible]{-webkit-transform:scale(1) translate(-50%,-45%);transform:scale(1) translate(-50%,-45%)}.tippy-popper[x-placement^=bottom] .tippy-backdrop[data-state=hidden]{-webkit-transform:scale(.2) translate(-50%);transform:scale(.2) translate(-50%);opacity:0}.tippy-popper[x-placement^=bottom] [data-animation=shift-toward][data-state=visible]{-webkit-transform:translateY(10px);transform:translateY(10px)}.tippy-popper[x-placement^=bottom] [data-animation=shift-toward][data-state=hidden]{opacity:0;-webkit-transform:translateY(20px);transform:translateY(20px)}.tippy-popper[x-placement^=bottom] [data-animation=perspective]{-webkit-transform-origin:top;transform-origin:top}.tippy-popper[x-placement^=bottom] [data-animation=perspective][data-state=visible]{-webkit-transform:perspective(700px) translateY(10px);transform:perspective(700px) translateY(10px)}.tippy-popper[x-placement^=bottom] [data-animation=perspective][data-state=hidden]{opacity:0;-webkit-transform:perspective(700px) rotateX(-60deg);transform:perspective(700px) rotateX(-60deg)}.tippy-popper[x-placement^=bottom] [data-animation=fade][data-state=visible]{-webkit-transform:translateY(10px);transform:translateY(10px)}.tippy-popper[x-placement^=bottom] [data-animation=fade][data-state=hidden]{opacity:0;-webkit-transform:translateY(10px);transform:translateY(10px)}.tippy-popper[x-placement^=bottom] [data-animation=shift-away][data-state=visible]{-webkit-transform:translateY(10px);transform:translateY(10px)}.tippy-popper[x-placement^=bottom] [data-animation=shift-away][data-state=hidden]{opacity:0}.tippy-popper[x-placement^=bottom] [data-animation=scale]{-webkit-transform-origin:top;transform-origin:top}.tippy-popper[x-placement^=bottom] [data-animation=scale][data-state=visible]{-webkit-transform:translateY(10px);transform:translateY(10px)}.tippy-popper[x-placement^=bottom] [data-animation=scale][data-state=hidden]{opacity:0;-webkit-transform:translateY(10px) scale(.5);transform:translateY(10px) scale(.5)}.tippy-popper[x-placement^=left] .tippy-backdrop{border-radius:50% 0 0 50%}.tippy-popper[x-placement^=left] .tippy-roundarrow{right:-12px;-webkit-transform-origin:33.33333333% 50%;transform-origin:33.33333333% 50%;margin:3px 0}.tippy-popper[x-placement^=left] .tippy-roundarrow svg{position:absolute;left:0;-webkit-transform:rotate(90deg);transform:rotate(90deg)}.tippy-popper[x-placement^=left] .tippy-arrow{border-left:8px solid #333;border-top:8px solid transparent;border-bottom:8px solid transparent;right:-7px;margin:3px 0;-webkit-transform-origin:0 50%;transform-origin:0 50%}.tippy-popper[x-placement^=left] .tippy-backdrop{-webkit-transform-origin:50% 0;transform-origin:50% 0}.tippy-popper[x-placement^=left] .tippy-backdrop[data-state=visible]{-webkit-transform:scale(1) translate(-50%,-50%);transform:scale(1) translate(-50%,-50%)}.tippy-popper[x-placement^=left] .tippy-backdrop[data-state=hidden]{-webkit-transform:scale(.2) translate(-75%,-50%);transform:scale(.2) translate(-75%,-50%);opacity:0}.tippy-popper[x-placement^=left] [data-animation=shift-toward][data-state=visible]{-webkit-transform:translateX(-10px);transform:translateX(-10px)}.tippy-popper[x-placement^=left] [data-animation=shift-toward][data-state=hidden]{opacity:0;-webkit-transform:translateX(-20px);transform:translateX(-20px)}.tippy-popper[x-placement^=left] [data-animation=perspective]{-webkit-transform-origin:right;transform-origin:right}.tippy-popper[x-placement^=left] [data-animation=perspective][data-state=visible]{-webkit-transform:perspective(700px) translateX(-10px);transform:perspective(700px) translateX(-10px)}.tippy-popper[x-placement^=left] [data-animation=perspective][data-state=hidden]{opacity:0;-webkit-transform:perspective(700px) rotateY(-60deg);transform:perspective(700px) rotateY(-60deg)}.tippy-popper[x-placement^=left] [data-animation=fade][data-state=visible]{-webkit-transform:translateX(-10px);transform:translateX(-10px)}.tippy-popper[x-placement^=left] [data-animation=fade][data-state=hidden]{opacity:0;-webkit-transform:translateX(-10px);transform:translateX(-10px)}.tippy-popper[x-placement^=left] [data-animation=shift-away][data-state=visible]{-webkit-transform:translateX(-10px);transform:translateX(-10px)}.tippy-popper[x-placement^=left] [data-animation=shift-away][data-state=hidden]{opacity:0}.tippy-popper[x-placement^=left] [data-animation=scale]{-webkit-transform-origin:right;transform-origin:right}.tippy-popper[x-placement^=left] [data-animation=scale][data-state=visible]{-webkit-transform:translateX(-10px);transform:translateX(-10px)}.tippy-popper[x-placement^=left] [data-animation=scale][data-state=hidden]{opacity:0;-webkit-transform:translateX(-10px) scale(.5);transform:translateX(-10px) scale(.5)}.tippy-popper[x-placement^=right] .tippy-backdrop{border-radius:0 50% 50% 0}.tippy-popper[x-placement^=right] .tippy-roundarrow{left:-12px;-webkit-transform-origin:66.66666666% 50%;transform-origin:66.66666666% 50%;margin:3px 0}.tippy-popper[x-placement^=right] .tippy-roundarrow svg{position:absolute;left:0;-webkit-transform:rotate(-90deg);transform:rotate(-90deg)}.tippy-popper[x-placement^=right] .tippy-arrow{border-right:8px solid #333;border-top:8px solid transparent;border-bottom:8px solid transparent;left:-7px;margin:3px 0;-webkit-transform-origin:100% 50%;transform-origin:100% 50%}.tippy-popper[x-placement^=right] .tippy-backdrop{-webkit-transform-origin:-50% 0;transform-origin:-50% 0}.tippy-popper[x-placement^=right] .tippy-backdrop[data-state=visible]{-webkit-transform:scale(1) translate(-50%,-50%);transform:scale(1) translate(-50%,-50%)}.tippy-popper[x-placement^=right] .tippy-backdrop[data-state=hidden]{-webkit-transform:scale(.2) translate(-25%,-50%);transform:scale(.2) translate(-25%,-50%);opacity:0}.tippy-popper[x-placement^=right] [data-animation=shift-toward][data-state=visible]{-webkit-transform:translateX(10px);transform:translateX(10px)}.tippy-popper[x-placement^=right] [data-animation=shift-toward][data-state=hidden]{opacity:0;-webkit-transform:translateX(20px);transform:translateX(20px)}.tippy-popper[x-placement^=right] [data-animation=perspective]{-webkit-transform-origin:left;transform-origin:left}.tippy-popper[x-placement^=right] [data-animation=perspective][data-state=visible]{-webkit-transform:perspective(700px) translateX(10px);transform:perspective(700px) translateX(10px)}.tippy-popper[x-placement^=right] [data-animation=perspective][data-state=hidden]{opacity:0;-webkit-transform:perspective(700px) rotateY(60deg);transform:perspective(700px) rotateY(60deg)}.tippy-popper[x-placement^=right] [data-animation=fade][data-state=visible]{-webkit-transform:translateX(10px);transform:translateX(10px)}.tippy-popper[x-placement^=right] [data-animation=fade][data-state=hidden]{opacity:0;-webkit-transform:translateX(10px);transform:translateX(10px)}.tippy-popper[x-placement^=right] [data-animation=shift-away][data-state=visible]{-webkit-transform:translateX(10px);transform:translateX(10px)}.tippy-popper[x-placement^=right] [data-animation=shift-away][data-state=hidden]{opacity:0}.tippy-popper[x-placement^=right] [data-animation=scale]{-webkit-transform-origin:left;transform-origin:left}.tippy-popper[x-placement^=right] [data-animation=scale][data-state=visible]{-webkit-transform:translateX(10px);transform:translateX(10px)}.tippy-popper[x-placement^=right] [data-animation=scale][data-state=hidden]{opacity:0;-webkit-transform:translateX(10px) scale(.5);transform:translateX(10px) scale(.5)}.tippy-tooltip{position:relative;color:#fff;border-radius:.25rem;font-size:.875rem;padding:.3125rem .5625rem;line-height:1.4;text-align:center;background-color:#333}.tippy-tooltip[data-size=small]{padding:.1875rem .375rem;font-size:.75rem}.tippy-tooltip[data-size=large]{padding:.375rem .75rem;font-size:1rem}.tippy-tooltip[data-animatefill]{overflow:hidden;background-color:initial}.tippy-tooltip[data-interactive],.tippy-tooltip[data-interactive] .tippy-roundarrow path{pointer-events:auto}.tippy-tooltip[data-inertia][data-state=visible]{transition-timing-function:cubic-bezier(.54,1.5,.38,1.11)}.tippy-tooltip[data-inertia][data-state=hidden]{transition-timing-function:ease}.tippy-arrow,.tippy-roundarrow{position:absolute;width:0;height:0}.tippy-roundarrow{width:18px;height:7px;fill:#333;pointer-events:none}.tippy-backdrop{position:absolute;background-color:#333;border-radius:50%;width:calc(110% + 2rem);left:50%;top:50%;z-index:-1;transition:all cubic-bezier(.46,.1,.52,.98);-webkit-backface-visibility:hidden;backface-visibility:hidden}.tippy-backdrop:after{content:"";float:left;padding-top:100%}.tippy-backdrop+.tippy-content{transition-property:opacity;will-change:opacity}.tippy-backdrop+.tippy-content[data-state=hidden]{opacity:0}'), ut
  });
  //# sourceMappingURL=index.all.min.js.map