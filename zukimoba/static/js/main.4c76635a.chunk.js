(this["webpackJsonp@VeroFarm/interface"] = this["webpackJsonp@VeroFarm/interface"] || []).push([
    [1], {
        107: function(e, n, t) {
            "use strict";
            var a, i = t(9),
                r = t(6),
                o = t(31),
                c = t(249),
                s = r.default.div(a || (a = Object(i.a)(["\n  color: ", ";\n  font-size: ", ";\n  font-weight: ", ";\n  line-height: 1.5;\n  ", "\n  ", "\n  ", "\n"])), (function(e) {
                    var n = e.color,
                        t = e.theme;
                    return Object(c.a)("colors.".concat(n), n)(t)
                }), (function(e) { var n = e.fontSize; return e.small ? "14px" : n || "16px" }), (function(e) { return e.bold ? 600 : 400 }), (function(e) { var n = e.textTransform; return n && "text-transform: ".concat(n, ";") }), o.space, o.typography);
            s.defaultProps = { color: "text", small: !1 }, n.a = s
        },
        114: function(e, n, t) {
            "use strict";
            t.d(n, "b", (function() { return a })), t.d(n, "a", (function() { return i }));
            var a = { H1: "h1", H2: "h2", H3: "h3", H4: "h4", H5: "h5", H6: "h6" },
                i = { MD: "md", LG: "lg", XL: "xl", XXL: "xxl" }
        },
        129: function(e, n, t) {
            "use strict";
            t.d(n, "a", (function() { return d }));
            var a, i, r, o, c = t(9),
                s = t(6),
                l = s.default.div(a || (a = Object(c.a)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n"]))),
                d = (Object(s.default)(l)(i || (i = Object(c.a)(["\n  width: 100%;\n  align-items: center;\n"]))), Object(s.default)(l)(r || (r = Object(c.a)(["\n  width: 100%;\n  padding: 0 30px;\n"]))), s.default.div(o || (o = Object(c.a)(["\n  display: grid;\n  grid-auto-rows: auto;\n  grid-row-gap: ", ";\n  justify-items: ", ";\n"])), (function(e) { var n = e.gap; return ("sm" === n ? "8px" : "md" === n && "12px") || "lg" === n && "24px" || n }), (function(e) { var n = e.justify; return n && n })))
        },
        13: function(e, n, t) {
            "use strict";
            var a, i, r, o = t(9),
                c = t(6),
                s = t(31),
                l = t(249),
                d = Object(c.keyframes)(a || (a = Object(o.a)(["\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n"]))),
                u = Object(c.css)(i || (i = Object(o.a)(["\n  animation: ", " 2s linear infinite;\n"])), d),
                p = c.default.svg(r || (r = Object(o.a)(["\n  fill: ", ";\n  flex-shrink: 0;\n\n  ", "\n  ", "\n"])), (function(e) {
                    var n = e.theme,
                        t = e.color;
                    return Object(l.a)("colors.".concat(t), t)(n)
                }), (function(e) { return e.spin && u }), s.space);
            p.defaultProps = { color: "text", width: "20px", xmlns: "http://www.w3.org/2000/svg", spin: !1 }, n.a = p
        },
        138: function(e, n, t) {
            "use strict";
            t.d(n, "a", (function() { return v })), t.d(n, "b", (function() { return g }));
            var a, i, r, o, c = t(9),
                s = (t(0), t(6)),
                l = t(229),
                d = t(154),
                u = t(88),
                p = t(231),
                b = t(232),
                m = t(233),
                f = t(234),
                h = t(81),
                g = { INFO: "info", DANGER: "danger", SUCCESS: "success", WARNING: "warning" },
                x = t(1),
                j = s.default.div(a || (a = Object(c.a)(["\n  color: ", ";\n  padding: 5px;\n  background-color: ", ";\n  border-radius: 6px 0 0 6px;\n\n  display: flex;\n  justify-content: center;\n"])), (function(e) { return e.theme.alert.background }), (function(e) {
                    var n = e.theme,
                        t = e.variant;
                    switch (void 0 === t ? g.INFO : t) {
                        case g.DANGER:
                            return n.colors.failure;
                        case g.WARNING:
                            return n.colors.warning;
                        case g.SUCCESS:
                            return n.colors.success;
                        case g.INFO:
                        default:
                            return n.colors.secondary
                    }
                })),
                O = s.default.div(i || (i = Object(c.a)(["\n  flex: 1;\n  padding-bottom: 12px;\n  padding-left: 12px;\n  padding-right: ", ";\n  padding-top: 12px;\n"])), (function(e) { return e.hasHandler ? "".concat(52, "px") : "12px" })),
                y = s.default.div(r || (r = Object(c.a)(["\n  border-radius: 0 6px 6px 0;\n  right: 8px;\n  position: absolute;\n  top: 8px;\n"]))),
                C = Object(s.default)(l.a)(o || (o = Object(c.a)(["\n  position: relative;\n  background: ", ";\n  border-radius: 6px;\n  box-shadow: 0px 20px 36px -8px rgba(14, 14, 44, 0.1), 0px 1px 1px rgba(0, 0, 0, 0.05);\n"])), (function(e) { return e.theme.alert.background })),
                v = function(e) {
                    var n = e.title,
                        t = e.children,
                        a = e.variant,
                        i = e.onClick,
                        r = function() {
                            switch (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : g.INFO) {
                                case g.DANGER:
                                    return m.a;
                                case g.WARNING:
                                    return b.a;
                                case g.SUCCESS:
                                    return p.a;
                                case g.INFO:
                                default:
                                    return f.a
                            }
                        }(a);
                    return Object(x.jsxs)(C, { children: [Object(x.jsx)(j, { variant: a, hasDescription: !!t, children: Object(x.jsx)(r, { color: "currentColor", width: "24px" }) }), Object(x.jsxs)(O, { hasHandler: !!i, children: [Object(x.jsx)(d.a, { bold: !0, color: "textSubtle", children: n }), "string" === typeof t ? Object(x.jsx)(d.a, { as: "p", children: t }) : t] }), i && Object(x.jsx)(y, { children: Object(x.jsx)(u.b, { scale: "sm", variant: "text", onClick: i, children: Object(x.jsx)(h.d, { width: "24px", color: "currentColor" }) }) })] })
                }
        },
        154: function(e, n, t) {
            "use strict";
            var a = t(107);
            t.d(n, "a", (function() { return a.a }))
        },
        174: function(e, n, t) {
            "use strict";
            n.a = function() { return { target: "_blank", rel: "noreferrer noopener" } }
        },
        20: function(e, n, t) {
            "use strict";
            t.d(n, "d", (function() { return c.a })), t.d(n, "a", (function() { return s.a })), t.d(n, "b", (function() { return J.e })), t.d(n, "c", (function() { return J.f })), t.d(n, "e", (function() { return $.a }));
            t(138);
            var a, i, r, o, c = t(229),
                s = t(88),
                l = (t(0), t(9)),
                d = t(6),
                u = (d.default.div(a || (a = Object(l.a)(["\n  // background: $getBackgroundColor};\n  border-radius: 16px;\n  display: inline-flex;\n  gap: 10px;\n\n  & > button + button,\n  & > a + a {\n    margin-left: 25px; // To avoid focus shadow overlap\n  }\n"]))), t(69), t(1)),
                p = t(2),
                b = t(37),
                m = t(86),
                f = (Object(d.default)(m.a)(i || (i = Object(l.a)(["\n  color: ", ";\n  background: ", ";\n  padding: 0 25px;\n  border-radius: 4px;\n  border: unset;\n  outline: unset;\n  min-width: 100px;\n"])), (function(e) { return e.theme.colors.textSubtle }), (function(e) { return e.theme.colors.buttonDisable })), Object(d.default)(m.a)(r || (r = Object(l.a)(["\n  padding: 0 25px;\n  border-radius: 4px;\n  color: ", ";\n  background: ", ";\n  border: unset;\n  outline: unset;\n  min-width: 100px;\n  cursor: pointer;\n"])), (function(e) { return e.theme.colors.textSubtle }), (function(e) { return e.theme.colors.gradients.commonRight })), t(31)),
                h = d.default.div(o || (o = Object(l.a)(["\n  background-color: ", ";\n  border: ", ";\n  border-radius: 32px;\n  box-shadow: ", ";\n  color: ", ";\n  overflow: hidden;\n  position: relative;\n\n  ", "\n"])), (function(e) { return e.theme.card.background }), (function(e) { return e.theme.card.boxShadow }), (function(e) {
                    var n = e.isActive,
                        t = e.isSuccess,
                        a = e.isWarning,
                        i = e.theme;
                    return a ? i.card.boxShadowWarning : t ? i.card.boxShadowSuccess : n ? i.card.boxShadowActive : i.card.boxShadow
                }), (function(e) {
                    var n = e.theme,
                        t = e.isDisabled;
                    return n.colors[t ? "textDisabled" : "text"]
                }), f.space);
            h.defaultProps = { isActive: !1, isSuccess: !1, isWarning: !1, isDisabled: !1 };
            var g, x = d.default.div(g || (g = Object(l.a)(["\n  ", "\n"])), f.space);
            x.defaultProps = { p: "24px" };
            var j, O = d.default.div(j || (j = Object(l.a)(["\n  background: ", ";\n\n  ", "\n"])), (function(e) { return e.theme.card.cardHeaderBackground }), f.space);
            O.defaultProps = { p: "24px" };
            var y, C = d.default.div(y || (y = Object(l.a)(["\n  border-top: 1px solid ", ";\n  ", "\n"])), (function(e) { return e.theme.colors.borderColor }), f.space);
            C.defaultProps = { p: "24px" };
            d.default.div(v || (v = Object(l.a)(["\n  background-color: ", ";\n  color: white;\n  margin: 0;\n  padding: 0;\n  padding: 8px 0;\n  position: absolute;\n  right: 0;\n  top: 0;\n  text-align: center;\n  transform: translateX(30%) translateY(0%) rotate(45deg);\n  transform-origin: top left;\n  width: 96px;\n\n  &:before,\n  &:after {\n    background-color: ", ';\n    content: "";\n    height: 100%;\n    margin: 0 -1px; /* Removes tiny gap */\n    position: absolute;\n    top: 0;\n    width: 100%;\n  }\n\n  &:before {\n    right: 100%;\n  }\n\n  &:after {\n    left: 100%;\n  }\n\n  & > div {\n    overflow: hidden;\n    text-overflow: ellipsis;\n    white-space: nowrap;\n    width: 96px;\n  }\n'])), (function(e) {
                var n = e.variantColor,
                    t = void 0 === n ? "secondary" : n;
                return e.theme.colors[t]
            }), (function(e) {
                var n = e.variantColor,
                    t = void 0 === n ? "secondary" : n;
                return e.theme.colors[t]
            }));
            var v, w, k, T, M, L = d.default.div(w || (w = Object(l.a)(["\n  width: 100%;\n  border-radius: 16px;\n  padding: 1.25rem;\n  padding: ", ";\n  border: ", ";\n  border-radius: ", ";\n"])), (function(e) { return e.padding }), (function(e) { return e.border }), (function(e) { return e.borderRadius })),
                I = (Object(d.default)(L)(k || (k = Object(l.a)(["\n  border: 1px solid ", ";\n  background-color: ", ";\n"])), (function(e) { return e.theme.colors.invertedContrast }), (function(e) { return e.theme.colors.invertedContrast })), Object(d.default)(L)(T || (T = Object(l.a)(["\n  background-color: ", ";\n"])), (function(e) { return e.theme.colors.tertiary })), "sm"),
                N = "md",
                A = function(e) {
                    switch (e.scale) {
                        case I:
                            return "24px";
                        case N:
                        default:
                            return "32px"
                    }
                },
                E = d.default.input.attrs({ type: "checkbox" })(M || (M = Object(l.a)(["\n  appearance: none;\n  overflow: hidden;\n  cursor: pointer;\n  position: relative;\n  display: inline-block;\n  height: ", ";\n  width: ", ";\n  vertical-align: middle;\n  transition: background-color 0.2s ease-in-out;\n  border: 0;\n  border-radius: 8px;\n  background-color: ", ";\n  box-shadow: ", ';\n\n  &:after {\n    content: "";\n    position: absolute;\n    border-bottom: 2px solid;\n    border-left: 2px solid;\n    border-color: transparent;\n    top: 30%;\n    left: 0;\n    right: 0;\n    width: 50%;\n    height: 25%;\n    margin: auto;\n    transform: rotate(-50deg);\n    transition: border-color 0.2s ease-in-out;\n  }\n\n  &:hover:not(:disabled):not(:checked) {\n    box-shadow: ', ";\n  }\n\n  &:focus {\n    outline: none;\n    box-shadow: ", ";\n  }\n\n  &:checked {\n    background-color: ", ";\n    &:after {\n      border-color: white;\n    }\n  }\n\n  &:disabled {\n    cursor: default;\n    opacity: 0.6;\n  }\n"])), A, A, (function(e) { return e.theme.colors.input }), (function(e) { return e.theme.shadows.inset }), (function(e) { return e.theme.shadows.focus }), (function(e) { return e.theme.shadows.focus }), (function(e) { return e.theme.colors.success }));
            E.defaultProps = { scale: N };
            var S, F, R = d.default.div(S || (S = Object(l.a)(["\n  width: max-content;\n  display: none;\n  flex-direction: column;\n  position: absolute;\n  transform: translate(-50%, 0);\n  left: ", ";\n  bottom: ", ";\n  background-color: ", ";\n  box-shadow: ", ";\n  padding: 16px;\n  max-height: 500px;\n  overflow-y: auto;\n  z-index: ", ";\n  border-radius: ", ";\n"])), (function(e) { return "top-right" === e.position ? "100%" : "50%" }), (function(e) { var n = e.position; return "top" === n || "top-right" === n ? "100%" : "auto" }), (function(e) { return e.theme.nav.background }), (function(e) { return e.theme.shadows.level1 }), (function(e) { return e.theme.zIndices.dropdown }), (function(e) { return e.theme.radii.small })),
                B = d.default.div(F || (F = Object(l.a)(["\n  position: relative;\n  &:hover ", ", &:focus-within ", " {\n    display: flex;\n  }\n"])), R, R),
                D = function(e) {
                    var n = e.target,
                        t = e.position,
                        a = void 0 === t ? "bottom" : t,
                        i = e.children;
                    return Object(u.jsxs)(B, { children: [n, Object(u.jsx)(R, { position: a, children: i })] })
                };
            D.defaultProps = { position: "bottom" };
            t(228);
            var U, H = "sm",
                z = "md",
                V = function(e) {
                    switch (e.scale) {
                        case H:
                            return "24px";
                        case z:
                        default:
                            return "32px"
                    }
                },
                Z = function(e) {
                    switch (e.scale) {
                        case H:
                            return "12px";
                        case z:
                        default:
                            return "20px"
                    }
                },
                P = d.default.input.attrs({ type: "radio" })(U || (U = Object(l.a)(["\n  appearance: none;\n  overflow: hidden;\n  cursor: pointer;\n  position: relative;\n  display: inline-block;\n  height: ", ";\n  width: ", ";\n  vertical-align: middle;\n  transition: background-color 0.2s ease-in-out;\n  border: 0;\n  border-radius: 50%;\n  background-color: ", ";\n  box-shadow: ", ';\n\n  &:after {\n    border-radius: 50%;\n    content: "";\n    height: ', ";\n    left: 6px;\n    position: absolute;\n    top: 6px;\n    width: ", ";\n  }\n\n  &:hover:not(:disabled):not(:checked) {\n    box-shadow: ", ";\n  }\n\n  &:focus {\n    outline: none;\n    box-shadow: ", ";\n  }\n\n  &:checked {\n    background-color: ", ";\n    &:after {\n      background-color: ", ";\n    }\n  }\n\n  &:disabled {\n    cursor: default;\n    opacity: 0.6;\n  }\n  ", "\n"])), V, V, (function(e) { return e.theme.colors.input }), (function(e) { return e.theme.shadows.inset }), Z, Z, (function(e) { return e.theme.shadows.focus }), (function(e) { return e.theme.shadows.focus }), (function(e) { return e.theme.colors.success }), (function(e) { return e.theme.radio.handleBackground }), f.space);
            P.defaultProps = { scale: z, m: 0 };
            var _, G, W, K, Y, Q, q, X, J = t(81),
                $ = t(154),
                ee = (t(71), t(236), t(237), "circle"),
                ne = Object(d.keyframes)(_ || (_ = Object(l.a)(["\n   from {\n        left: -150px;\n    }\n    to   {\n        left: 100%;\n    }\n"]))),
                te = Object(d.keyframes)(G || (G = Object(l.a)(["\n  0% {\n    opacity: 1;\n  }\n  50% {\n    opacity: 0.4;\n  }\n  100% {\n    opacity: 1;\n  }\n"]))),
                ae = d.default.div(W || (W = Object(l.a)(["\n  min-height: 20px;\n  display: block;\n  background-color: ", ";\n  border-radius: ", ";\n\n  ", "\n  ", "\n"])), (function(e) { return e.theme.colors.backgroundDisabled }), (function(e) {
                    var n = e.variant,
                        t = e.theme;
                    return n === ee ? t.radii.circle : t.radii.small
                }), f.layout, f.space),
                ie = (Object(d.default)(ae)(K || (K = Object(l.a)(["\n  animation: ", " 2s infinite ease-out;\n  transform: translate3d(0, 0, 0);\n"])), te), Object(d.default)(ae)(Y || (Y = Object(l.a)(['\n  position: relative;\n  overflow: hidden;\n  transform: translate3d(0, 0, 0);\n  &:before {\n    content: "";\n    position: absolute;\n    background-image: linear-gradient(90deg, transparent, rgba(243, 243, 243, 0.5), transparent);\n    top: 0;\n    left: -150px;\n    height: 100%;\n    width: 150px;\n    animation: ', " 2s cubic-bezier(0.4, 0, 0.2, 1) infinite;\n  }\n"])), ne), { sm: { handleHeight: "16px", handleWidth: "16px", handleLeft: "2px", handleTop: "2px", checkedLeft: "calc(100% - 18px)", toggleHeight: "20px", toggleWidth: "36px" }, md: { handleHeight: "32px", handleWidth: "32px", handleLeft: "4px", handleTop: "4px", checkedLeft: "calc(100% - 36px)", toggleHeight: "40px", toggleWidth: "72px" } }),
                re = function(e) { return function(n) { var t = n.scale; return ie[void 0 === t ? N : t][e] } },
                oe = d.default.div(Q || (Q = Object(l.a)(["\n  background-color: ", ";\n  border-radius: 50%;\n  cursor: pointer;\n  height: ", ";\n  left: ", ";\n  position: absolute;\n  top: ", ";\n  transition: left 200ms ease-in;\n  width: ", ";\n  z-index: 1;\n"])), (function(e) { return e.theme.toggle.handleBackground }), re("handleHeight"), re("handleLeft"), re("handleTop"), re("handleWidth")),
                ce = d.default.input(q || (q = Object(l.a)(["\n  cursor: pointer;\n  opacity: 0;\n  height: 100%;\n  position: absolute;\n  width: 100%;\n  z-index: 3;\n\n  &:checked + ", " {\n    left: ", ";\n  }\n\n  &:focus + ", " {\n    box-shadow: ", ";\n  }\n\n  &:hover + ", ":not(:disabled):not(:checked) {\n    box-shadow: ", ";\n  }\n"])), oe, re("checkedLeft"), oe, (function(e) { return e.theme.shadows.focus }), oe, (function(e) { return e.theme.shadows.focus })),
                se = d.default.div(X || (X = Object(l.a)(["\n  align-items: center;\n  background-color: ", ";\n  border-radius: 24px;\n  box-shadow: ", ";\n  cursor: pointer;\n  display: inline-flex;\n  height: ", ";\n  position: relative;\n  transition: background-color 200ms;\n  width: ", ";\n"])), (function(e) {
                    var n = e.theme,
                        t = e.checked;
                    return n.colors[t ? "success" : "input"]
                }), (function(e) { return e.theme.shadows.inset }), re("toggleHeight"), re("toggleWidth")),
                le = "md",
                de = ["checked", "scale"],
                ue = function(e) {
                    var n = e.checked,
                        t = e.scale,
                        a = void 0 === t ? le : t,
                        i = Object(b.a)(e, de),
                        r = !!n;
                    return Object(u.jsxs)(se, { checked: r, scale: a, children: [Object(u.jsx)(ce, Object(p.a)(Object(p.a)({ checked: n, scale: a }, i), {}, { type: "checkbox" })), Object(u.jsx)(oe, { scale: a })] })
                };
            ue.defaultProps = { scale: le };
            var pe, be = "sm",
                me = "md",
                fe = "lg",
                he = d.default.input(pe || (pe = Object(l.a)(["\n  background-color: ", ";\n  border: 0;\n  border-radius: 16px;\n  box-shadow: ", ";\n  color: ", ";\n  display: block;\n  font-size: 16px;\n  height: ", ";\n  outline: 0;\n  padding: 0 16px;\n  width: 100%;\n\n  &::placeholder {\n    color: ", ";\n  }\n\n  &:disabled {\n    background-color: ", ";\n    box-shadow: none;\n    color: ", ";\n    cursor: not-allowed;\n  }\n\n  &:focus:not(:disabled) {\n    box-shadow: ", ";\n  }\n"])), (function(e) { return e.theme.colors.input }), (function(e) {
                    var n = e.isSuccess,
                        t = void 0 !== n && n,
                        a = e.isWarning,
                        i = void 0 !== a && a,
                        r = e.theme;
                    return i ? r.shadows.warning : t ? r.shadows.success : r.shadows.inset
                }), (function(e) { return e.theme.colors.text }), (function(e) {
                    var n = e.scale;
                    switch (void 0 === n ? me : n) {
                        case be:
                            return "32px";
                        case fe:
                            return "48px";
                        case me:
                        default:
                            return "40px"
                    }
                }), (function(e) { return e.theme.colors.textSubtle }), (function(e) { return e.theme.colors.backgroundDisabled }), (function(e) { return e.theme.colors.textDisabled }), (function(e) { return e.theme.shadows.focus }));
            he.defaultProps = { scale: me, isSuccess: !1, isWarning: !1 }
        },
        228: function(e, n, t) {
            "use strict";
            var a, i, r = t(9),
                o = t(26),
                c = t(6),
                s = t(20),
                l = t(114),
                d = (a = {}, Object(o.a)(a, l.a.MD, { fontSize: "20px", fontSizeLg: "20px" }), Object(o.a)(a, l.a.LG, { fontSize: "24px", fontSizeLg: "24px" }), Object(o.a)(a, l.a.XL, { fontSize: "32px", fontSizeLg: "40px" }), Object(o.a)(a, l.a.XXL, { fontSize: "48px", fontSizeLg: "64px" }), a),
                u = Object(c.default)(s.e).attrs({ bold: !0 })(i || (i = Object(r.a)(["\n  font-family: iCiel Cadena;\n  font-size: ", ";\n  font-weight: 600;\n  line-height: 1.1;\n  background: -webkit-linear-gradient(90deg, #FF8B02 0%, #F8FC25 70%);\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n\n  margin: auto;\n  \n  ", " {\n    font-size: ", ";\n  }\n"])), (function(e) { var n = e.size; return d[n || l.a.MD].fontSize }), (function(e) { return e.theme.mediaQueries.lg }), (function(e) { var n = e.size; return d[n || l.a.MD].fontSizeLg }));
            u.defaultProps = { as: l.b.H2 }, n.a = u
        },
        229: function(e, n, t) {
            "use strict";
            t(230);
            var a = t(65);
            t.d(n, "a", (function() { return a.a }))
        },
        230: function(e, n, t) {
            "use strict";
            var a, i = t(9),
                r = t(6),
                o = t(31),
                c = r.default.div(a || (a = Object(i.a)(["\n  ", "\n  ", "\n  ", "\n  ", "\n  ", " \n"])), o.background, o.border, o.layout, o.position, o.space);
            n.a = c
        },
        231: function(e, n, t) {
            "use strict";
            var a = t(2),
                i = (t(0), t(13)),
                r = t(1);
            n.a = function(e) { return Object(r.jsx)(i.a, Object(a.a)(Object(a.a)({ viewBox: "0 0 24 24" }, e), {}, { children: Object(r.jsx)("path", { d: "M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20ZM15.88 8.29L10 14.17L8.12 12.29C7.73 11.9 7.1 11.9 6.71 12.29C6.32 12.68 6.32 13.31 6.71 13.7L9.3 16.29C9.69 16.68 10.32 16.68 10.71 16.29L17.3 9.7C17.69 9.31 17.69 8.68 17.3 8.29C16.91 7.9 16.27 7.9 15.88 8.29Z" }) })) }
        },
        232: function(e, n, t) {
            "use strict";
            var a = t(2),
                i = (t(0), t(13)),
                r = t(1);
            n.a = function(e) { return Object(r.jsx)(i.a, Object(a.a)(Object(a.a)({ viewBox: "0 0 24 24" }, e), {}, { children: Object(r.jsx)("path", { d: "M12 7C12.55 7 13 7.45 13 8V12C13 12.55 12.55 13 12 13C11.45 13 11 12.55 11 12V8C11 7.45 11.45 7 12 7ZM11.99 2C6.47 2 2 6.48 2 12C2 17.52 6.47 22 11.99 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 11.99 2ZM12 20C7.58 20 4 16.42 4 12C4 7.58 7.58 4 12 4C16.42 4 20 7.58 20 12C20 16.42 16.42 20 12 20ZM13 17H11V15H13V17Z" }) })) }
        },
        233: function(e, n, t) {
            "use strict";
            var a = t(2),
                i = (t(0), t(13)),
                r = t(1);
            n.a = function(e) { return Object(r.jsx)(i.a, Object(a.a)(Object(a.a)({ viewBox: "0 0 24 24" }, e), {}, { children: Object(r.jsx)("path", { d: "M12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22ZM12 4C16.42 4 20 7.58 20 12C20 13.85 19.37 15.55 18.31 16.9L7.1 5.69C8.45 4.63 10.15 4 12 4ZM5.69 7.1L16.9 18.31C15.55 19.37 13.85 20 12 20C7.58 20 4 16.42 4 12C4 10.15 4.63 8.45 5.69 7.1Z" }) })) }
        },
        234: function(e, n, t) {
            "use strict";
            var a = t(2),
                i = (t(0), t(13)),
                r = t(1);
            n.a = function(e) { return Object(r.jsx)(i.a, Object(a.a)(Object(a.a)({ viewBox: "0 0 24 24" }, e), {}, { children: Object(r.jsx)("path", { d: "M11 7H13V9H11V7ZM12 17C12.55 17 13 16.55 13 16V12C13 11.45 12.55 11 12 11C11.45 11 11 11.45 11 12V16C11 16.55 11.45 17 12 17ZM12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20Z" }) })) }
        },
        235: function(e, n, t) {
            "use strict";
            var a = t(2),
                i = (t(0), t(13)),
                r = t(1);
            n.a = function(e) { return Object(r.jsx)(i.a, Object(a.a)(Object(a.a)({ viewBox: "0 0 24 24" }, e), {}, { children: Object(r.jsx)("path", { d: "M18 19H6C5.45 19 5 18.55 5 18V6C5 5.45 5.45 5 6 5H11C11.55 5 12 4.55 12 4C12 3.45 11.55 3 11 3H5C3.89 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V13C21 12.45 20.55 12 20 12C19.45 12 19 12.45 19 13V18C19 18.55 18.55 19 18 19ZM14 4C14 4.55 14.45 5 15 5H17.59L8.46 14.13C8.07 14.52 8.07 15.15 8.46 15.54C8.85 15.93 9.48 15.93 9.87 15.54L19 6.41V9C19 9.55 19.45 10 20 10C20.55 10 21 9.55 21 9V4C21 3.45 20.55 3 20 3H15C14.45 3 14 3.45 14 4Z" }) })) }
        },
        236: function(e, n, t) {
            "use strict";
            var a, i = t(2),
                r = t(37),
                o = t(9),
                c = (t(0), t(6)),
                s = t(174),
                l = t(107),
                d = t(1),
                u = ["external"],
                p = Object(c.default)(l.a)(a || (a = Object(o.a)(["\n  display: flex;\n  align-items: center;\n  width: fit-content;\n  &:hover {\n    text-decoration: underline;\n  }\n"]))),
                b = function(e) {
                    var n = e.external,
                        t = Object(r.a)(e, u),
                        a = n ? Object(s.a)() : {};
                    return Object(d.jsx)(p, Object(i.a)(Object(i.a)({ as: "a", bold: !0 }, a), t))
                };
            b.defaultProps = { color: "textSubtle" }, n.a = b
        },
        237: function(e, n, t) {
            "use strict";
            var a = t(2),
                i = t(37),
                r = (t(0), t(236)),
                o = t(235),
                c = t(1),
                s = ["children"];
            n.a = function(e) {
                var n = e.children,
                    t = Object(i.a)(e, s);
                return Object(c.jsxs)(r.a, Object(a.a)(Object(a.a)({ external: !0 }, t), {}, { children: [n, Object(c.jsx)(o.a, { color: "textSubtle", ml: "4px" })] }))
            }
        },
        249: function(e, n, t) {
            "use strict";
            var a = t(447),
                i = t.n(a);
            n.a = function(e, n) { return function(t) { return i()(t, e, n) } }
        },
        314: function(e) { e.exports = JSON.parse('[{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[],"name":"_decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"_name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"_symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"spender","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"burn","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"burnFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"subtractedValue","type":"uint256"}],"name":"decreaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"getOwner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"addedValue","type":"uint256"}],"name":"increaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"sender","type":"address"},{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"}]') },
        43: function(e, n, t) {
            "use strict";
            t.d(n, "g", (function() { return s })), t.d(n, "i", (function() { return l })), t.d(n, "j", (function() { return d })), t.d(n, "l", (function() { return u })), t.d(n, "k", (function() { return p })), t.d(n, "m", (function() { return b })), t.d(n, "c", (function() { return m })), t.d(n, "d", (function() { return f })), t.d(n, "e", (function() { return h })), t.d(n, "a", (function() { return g })), t.d(n, "h", (function() { return w })), t.d(n, "f", (function() { return k })), t.d(n, "b", (function() { return T }));
            var a, i = t(79),
                r = t(2),
                o = t(26),
                c = t(27),
                s = "false",
                l = "0x05fF2B0DB69458A0750badebc4f9e13aDd608C7F",
                d = "0xF07548E7cfcb3601A1078634adB728015Ac47d43",
                u = "0xE81257d932280AE440B17AFc5f07C8A110D21432",
                p = "0x39c60E839F05dE00f1E743Ac80fa2D311B5DCD1e",
                b = "0xa3b1153e121E632353d43767037E6E22410E68E8",
                m = "ZukiMoba",
                f = "zukimoba-landingpage",
                h = "root",
                g = new c.e(c.a.MAINNET, u, 6, "VERO", "VERO FARM (VERO)"),
                x = new c.e(c.a.MAINNET, "0x1af3f329e8be154074d8769d1ffa4ee058b1dbc3", 18, "DAI", "Dai Stablecoin"),
                j = new c.e(c.a.MAINNET, "0xe9e7cea3dedca5984780bafc599bd69add087d56", 18, "BUSD", "Binance USD"),
                O = new c.e(c.a.MAINNET, "0x55d398326f99059ff775485246999027b3197955", 18, "USDT", "Tether USD"),
                y = new c.e(c.a.MAINNET, "0x23396cf899ca06c4472205fc903bdb4de249d6fc", 18, "UST", "Wrapped UST Token"),
                C = new c.e(c.a.MAINNET, "0x2170ed0880ac9a755fd29b2688956bd959f933f8", 18, "ETH", "Binance-Peg Ethereum Token"),
                v = (a = {}, Object(o.a)(a, c.a.MAINNET, [c.f[c.a.MAINNET]]), Object(o.a)(a, c.a.BSCTESTNET, [c.f[c.a.BSCTESTNET]]), a),
                w = (Object(r.a)(Object(r.a)({}, v), {}, Object(o.a)({}, c.a.MAINNET, [].concat(Object(i.a)(v[c.a.MAINNET]), [x, j, O, y, C]))), Object(o.a)({}, c.a.MAINNET, {}), Object(r.a)(Object(r.a)({}, v), {}, Object(o.a)({}, c.a.MAINNET, [].concat(Object(i.a)(v[c.a.MAINNET]), [x, j, O]))), Object(r.a)(Object(r.a)({}, v), {}, Object(o.a)({}, c.a.MAINNET, [].concat(Object(i.a)(v[c.a.MAINNET]), [x, j, O]))), Object(o.a)({}, c.a.MAINNET, [
                    [new c.e(c.a.MAINNET, "0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82", 18, "CAKE", "PancakeSwap Token"), new c.e(c.a.MAINNET, "0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c", 18, "WBNB", "Wrapped BNB")],
                    [j, O],
                    [x, O]
                ]), "NETWORK"),
                k = 80,
                T = 1200,
                M = (new c.d(c.c.BigInt(1), c.c.BigInt(1e4)), c.c.BigInt(1e4));
            new c.d(c.c.BigInt(100), M), new c.d(c.c.BigInt(300), M), new c.d(c.c.BigInt(500), M), new c.d(c.c.BigInt(1e3), M), new c.d(c.c.BigInt(1500), M), c.c.exponentiate(c.c.BigInt(10), c.c.BigInt(16))
        },
        445: function(e) { e.exports = JSON.parse('[{"inputs":[{"internalType":"address payable","name":"_feeWallet","type":"address"},{"internalType":"address payable","name":"_saleWallet","type":"address"},{"internalType":"address","name":"_randManager","type":"address"},{"internalType":"contract VEROFARMNFT","name":"_veroNFT","type":"address"},{"internalType":"contract IERC20","name":"_veroTicket","type":"address"},{"internalType":"contract IERC20","name":"_vero","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"},{"indexed":false,"internalType":"address","name":"buyer","type":"address"},{"indexed":false,"internalType":"uint256","name":"fee","type":"uint256"}],"name":"FeeSale","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"},{"indexed":false,"internalType":"address","name":"buyer","type":"address"},{"indexed":false,"internalType":"uint256","name":"price","type":"uint256"},{"components":[{"internalType":"string","name":"name","type":"string"},{"internalType":"uint256","name":"index","type":"uint256"}],"indexed":false,"internalType":"struct VEROFARMNFT.Attribute","name":"attr","type":"tuple"}],"name":"Sale","type":"event"},{"inputs":[],"name":"BASE_PRICE","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"PERCENTS_DIVIDER","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"REVEAL_TIMESTAMP","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"SALE_START_TIMESTAMP","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"VERO_TICKET","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"buyAdvance","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"buyLegend","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"buyNomal","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"feeSale","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"feeWallet","outputs":[{"internalType":"address payable","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"components":[{"internalType":"string","name":"name","type":"string"},{"internalType":"uint256","name":"index","type":"uint256"}],"internalType":"struct VEROFARMNFT.Attribute","name":"attribute","type":"tuple"}],"name":"getNFTPrice","outputs":[{"internalType":"uint256","name":"priceSale","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getSaleStore","outputs":[{"components":[{"components":[{"internalType":"string","name":"name","type":"string"},{"internalType":"uint256","name":"index","type":"uint256"}],"internalType":"struct VEROFARMNFT.Attribute","name":"attribute","type":"tuple"},{"components":[{"internalType":"string","name":"name","type":"string"},{"internalType":"uint256","name":"index","type":"uint256"}],"internalType":"struct VEROFARMNFT.Class","name":"class","type":"tuple"},{"internalType":"uint256","name":"totalSale","type":"uint256"},{"internalType":"uint256","name":"currentSale","type":"uint256"},{"internalType":"uint256","name":"priceSale","type":"uint256"}],"internalType":"struct VEROFARMSALE.SaleSeed[]","name":"_saleStore","type":"tuple[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"coinAddress","type":"address"},{"internalType":"uint256","name":"value","type":"uint256"},{"internalType":"address payable","name":"to","type":"address"}],"name":"handleForfeitedBalance","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"randManager","outputs":[{"internalType":"contract RandInterface","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"saleWallet","outputs":[{"internalType":"address payable","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_priceSale","type":"uint256"}],"name":"setBasePrice","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_fee","type":"uint256"}],"name":"setFeeSale","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address payable","name":"_wallet","type":"address"}],"name":"setFeeWallet","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_addr","type":"address"}],"name":"setRandManager","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"newTime","type":"uint256"}],"name":"setSaleEndTimestamp","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"newTime","type":"uint256"}],"name":"setSaleStartTimestamp","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address payable","name":"_wallet","type":"address"}],"name":"setSaleWallet","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"veroNFT","outputs":[{"internalType":"contract VEROFARMNFT","name":"","type":"address"}],"stateMutability":"view","type":"function"}]') },
        446: function(e) { e.exports = JSON.parse('[{"inputs":[{"internalType":"string","name":"name","type":"string"},{"internalType":"string","name":"symbol","type":"string"},{"internalType":"string","name":"baseURI","type":"string"},{"internalType":"address","name":"_manager","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"AddSeedFactory","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"AddSeedUser","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"approved","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"operator","type":"address"},{"indexed":false,"internalType":"bool","name":"approved","type":"bool"}],"name":"ApprovalForAll","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"exp","type":"uint256"}],"name":"Exp","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Transfer","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"},{"components":[{"internalType":"string","name":"name","type":"string"},{"internalType":"uint256","name":"index","type":"uint256"}],"indexed":false,"internalType":"struct VEROFARMNFT.Attribute","name":"attribute","type":"tuple"}],"name":"UpdateAttribute","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"},{"components":[{"internalType":"string","name":"name","type":"string"},{"internalType":"uint256","name":"index","type":"uint256"}],"indexed":false,"internalType":"struct VEROFARMNFT.Class","name":"class","type":"tuple"}],"name":"UpdateClass","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"},{"components":[{"internalType":"string","name":"name","type":"string"},{"internalType":"uint256","name":"index","type":"uint256"}],"indexed":false,"internalType":"struct VEROFARMNFT.Element","name":"element","type":"tuple"}],"name":"UpdateElement","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"level","type":"uint256"}],"name":"UpdateLevel","type":"event"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"approve","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"baseURI","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_tokenId","type":"uint256"},{"internalType":"address","name":"_owner","type":"address"},{"components":[{"internalType":"string","name":"name","type":"string"},{"internalType":"uint256","name":"index","type":"uint256"}],"internalType":"struct VEROFARMNFT.Attribute","name":"_attribute","type":"tuple"}],"name":"changeAttribute","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"baseURI","type":"string"}],"name":"changeBaseURI","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_tokenId","type":"uint256"},{"internalType":"address","name":"_owner","type":"address"},{"components":[{"internalType":"string","name":"name","type":"string"},{"internalType":"uint256","name":"index","type":"uint256"}],"internalType":"struct VEROFARMNFT.Class","name":"_class","type":"tuple"}],"name":"changeClass","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_tokenId","type":"uint256"},{"internalType":"address","name":"_owner","type":"address"},{"components":[{"internalType":"string","name":"name","type":"string"},{"internalType":"uint256","name":"index","type":"uint256"}],"internalType":"struct VEROFARMNFT.Element","name":"_element","type":"tuple"}],"name":"changeElement","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_tokenId","type":"uint256"},{"internalType":"uint256","name":"_exp","type":"uint256"},{"internalType":"address","name":"_userAddress","type":"address"}],"name":"changeExp","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_tokenId","type":"uint256"},{"internalType":"address","name":"_owner","type":"address"},{"internalType":"uint256","name":"_level","type":"uint256"}],"name":"changeLevel","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_fromTokenId","type":"uint256"},{"internalType":"uint256","name":"_toTokenId","type":"uint256"}],"name":"getAllNFT","outputs":[{"components":[{"internalType":"uint256","name":"tokenId","type":"uint256"},{"components":[{"internalType":"string","name":"name","type":"string"},{"internalType":"uint256","name":"index","type":"uint256"}],"internalType":"struct VEROFARMNFT.Attribute","name":"attribute","type":"tuple"},{"components":[{"internalType":"string","name":"name","type":"string"},{"internalType":"uint256","name":"index","type":"uint256"}],"internalType":"struct VEROFARMNFT.Element","name":"element","type":"tuple"},{"components":[{"internalType":"string","name":"name","type":"string"},{"internalType":"uint256","name":"index","type":"uint256"}],"internalType":"struct VEROFARMNFT.Class","name":"class","type":"tuple"},{"internalType":"uint256","name":"level","type":"uint256"},{"internalType":"uint256","name":"exp","type":"uint256"},{"internalType":"uint256","name":"bornTime","type":"uint256"}],"internalType":"struct VEROFARMNFT.Seed[]","name":"","type":"tuple[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"getApproved","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_tokenId","type":"uint256"}],"name":"getNFT","outputs":[{"components":[{"internalType":"uint256","name":"tokenId","type":"uint256"},{"components":[{"internalType":"string","name":"name","type":"string"},{"internalType":"uint256","name":"index","type":"uint256"}],"internalType":"struct VEROFARMNFT.Attribute","name":"attribute","type":"tuple"},{"components":[{"internalType":"string","name":"name","type":"string"},{"internalType":"uint256","name":"index","type":"uint256"}],"internalType":"struct VEROFARMNFT.Element","name":"element","type":"tuple"},{"components":[{"internalType":"string","name":"name","type":"string"},{"internalType":"uint256","name":"index","type":"uint256"}],"internalType":"struct VEROFARMNFT.Class","name":"class","type":"tuple"},{"internalType":"uint256","name":"level","type":"uint256"},{"internalType":"uint256","name":"exp","type":"uint256"},{"internalType":"uint256","name":"bornTime","type":"uint256"}],"internalType":"struct VEROFARMNFT.Seed","name":"","type":"tuple"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_userAddress","type":"address"}],"name":"getUser","outputs":[{"components":[{"components":[{"internalType":"uint256","name":"tokenId","type":"uint256"},{"components":[{"internalType":"string","name":"name","type":"string"},{"internalType":"uint256","name":"index","type":"uint256"}],"internalType":"struct VEROFARMNFT.Attribute","name":"attribute","type":"tuple"},{"components":[{"internalType":"string","name":"name","type":"string"},{"internalType":"uint256","name":"index","type":"uint256"}],"internalType":"struct VEROFARMNFT.Element","name":"element","type":"tuple"},{"components":[{"internalType":"string","name":"name","type":"string"},{"internalType":"uint256","name":"index","type":"uint256"}],"internalType":"struct VEROFARMNFT.Class","name":"class","type":"tuple"},{"internalType":"uint256","name":"level","type":"uint256"},{"internalType":"uint256","name":"exp","type":"uint256"},{"internalType":"uint256","name":"bornTime","type":"uint256"}],"internalType":"struct VEROFARMNFT.Seed[]","name":"seeds","type":"tuple[]"},{"internalType":"address","name":"owner","type":"address"}],"internalType":"struct VEROFARMNFT.User","name":"userInfo","type":"tuple"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"coinAddress","type":"address"},{"internalType":"uint256","name":"value","type":"uint256"},{"internalType":"address payable","name":"to","type":"address"}],"name":"handleForfeitedBalance","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"operator","type":"address"}],"name":"isApprovedForAll","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"components":[{"internalType":"string","name":"name","type":"string"},{"internalType":"uint256","name":"index","type":"uint256"}],"internalType":"struct VEROFARMNFT.Attribute","name":"attribute","type":"tuple"},{"components":[{"internalType":"string","name":"name","type":"string"},{"internalType":"uint256","name":"index","type":"uint256"}],"internalType":"struct VEROFARMNFT.Element","name":"element","type":"tuple"},{"components":[{"internalType":"string","name":"name","type":"string"},{"internalType":"uint256","name":"index","type":"uint256"}],"internalType":"struct VEROFARMNFT.Class","name":"class","type":"tuple"},{"internalType":"address","name":"userAddress","type":"address"}],"name":"mintNFTForOwner","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"ownerOf","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_addr","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"safeMintNFT","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"bytes","name":"_data","type":"bytes"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"seedFactory","outputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"},{"components":[{"internalType":"string","name":"name","type":"string"},{"internalType":"uint256","name":"index","type":"uint256"}],"internalType":"struct VEROFARMNFT.Attribute","name":"attribute","type":"tuple"},{"components":[{"internalType":"string","name":"name","type":"string"},{"internalType":"uint256","name":"index","type":"uint256"}],"internalType":"struct VEROFARMNFT.Element","name":"element","type":"tuple"},{"components":[{"internalType":"string","name":"name","type":"string"},{"internalType":"uint256","name":"index","type":"uint256"}],"internalType":"struct VEROFARMNFT.Class","name":"class","type":"tuple"},{"internalType":"uint256","name":"level","type":"uint256"},{"internalType":"uint256","name":"exp","type":"uint256"},{"internalType":"uint256","name":"bornTime","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"operator","type":"address"},{"internalType":"bool","name":"approved","type":"bool"}],"name":"setApprovalForAll","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_addr","type":"address"}],"name":"setManager","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"components":[{"internalType":"uint256","name":"tokenId","type":"uint256"},{"components":[{"internalType":"string","name":"name","type":"string"},{"internalType":"uint256","name":"index","type":"uint256"}],"internalType":"struct VEROFARMNFT.Attribute","name":"attribute","type":"tuple"},{"components":[{"internalType":"string","name":"name","type":"string"},{"internalType":"uint256","name":"index","type":"uint256"}],"internalType":"struct VEROFARMNFT.Element","name":"element","type":"tuple"},{"components":[{"internalType":"string","name":"name","type":"string"},{"internalType":"uint256","name":"index","type":"uint256"}],"internalType":"struct VEROFARMNFT.Class","name":"class","type":"tuple"},{"internalType":"uint256","name":"level","type":"uint256"},{"internalType":"uint256","name":"exp","type":"uint256"},{"internalType":"uint256","name":"bornTime","type":"uint256"}],"internalType":"struct VEROFARMNFT.Seed","name":"_seed","type":"tuple"},{"internalType":"uint256","name":"_tokenId","type":"uint256"}],"name":"setNFTFactory","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"components":[{"internalType":"uint256","name":"tokenId","type":"uint256"},{"components":[{"internalType":"string","name":"name","type":"string"},{"internalType":"uint256","name":"index","type":"uint256"}],"internalType":"struct VEROFARMNFT.Attribute","name":"attribute","type":"tuple"},{"components":[{"internalType":"string","name":"name","type":"string"},{"internalType":"uint256","name":"index","type":"uint256"}],"internalType":"struct VEROFARMNFT.Element","name":"element","type":"tuple"},{"components":[{"internalType":"string","name":"name","type":"string"},{"internalType":"uint256","name":"index","type":"uint256"}],"internalType":"struct VEROFARMNFT.Class","name":"class","type":"tuple"},{"internalType":"uint256","name":"level","type":"uint256"},{"internalType":"uint256","name":"exp","type":"uint256"},{"internalType":"uint256","name":"bornTime","type":"uint256"}],"internalType":"struct VEROFARMNFT.Seed","name":"_seed","type":"tuple"},{"internalType":"uint256","name":"_tokenId","type":"uint256"},{"internalType":"address","name":"_userAddress","type":"address"}],"name":"setNFTForUser","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"startingIndex","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes4","name":"interfaceId","type":"bytes4"}],"name":"supportsInterface","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"index","type":"uint256"}],"name":"tokenByIndex","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"uint256","name":"index","type":"uint256"}],"name":"tokenOfOwnerByIndex","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"tokenURI","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"transferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"}]') },
        449: function(e, n, t) {
            "use strict";
            (function(e) {
                var a = t(7),
                    i = t.n(a),
                    r = t(58),
                    o = t(12),
                    c = t(15),
                    s = t(315),
                    l = t.n(s),
                    d = t(43),
                    u = "https://api.github.com",
                    p = d.e,
                    b = d.c,
                    m = d.d,
                    f = function() {
                        function n() { Object(o.a)(this, n), this.repos = [], this.tree = [] }
                        return Object(c.a)(n, [{
                            key: "getRepoTreeAtOrgan",
                            value: function() {
                                var e = Object(r.a)(i.a.mark((function e() {
                                    var n, t, a, o, c = this,
                                        s = arguments;
                                    return i.a.wrap((function(e) {
                                        for (;;) switch (e.prev = e.next) {
                                            case 0:
                                                return n = s.length > 0 && void 0 !== s[0] ? s[0] : b, t = s.length > 1 && void 0 !== s[1] ? s[1] : m, a = s.length > 2 && void 0 !== s[2] ? s[2] : null, o = a ? "".concat(u, "/repos/").concat(n, "/").concat(t, "/git/trees/main?access_token=").concat(a, "&recursive=1") : "".concat(u, "/repos/").concat(n, "/").concat(t, "/git/trees/main?recursive=1"), e.abrupt("return", new Promise((function(e, n) {
                                                    Object(r.a)(i.a.mark((function t() {
                                                        return i.a.wrap((function(t) {
                                                            for (;;) switch (t.prev = t.next) {
                                                                case 0:
                                                                    return t.prev = 0, t.next = 3, l()({ method: "get", url: o, headers: { "content-type": "application/json;charset=UTF-8", Accept: "application/vnd.github.v3+json" } }).then((function(t) { 200 === t.status && (c.tree = t.data.tree, e(t.data.tree)), n(new Error("Error!!!")) }));
                                                                case 3:
                                                                    n(new Error("Error!!!")), t.next = 9;
                                                                    break;
                                                                case 6:
                                                                    t.prev = 6, t.t0 = t.catch(0), n(new Error("Error!!!"));
                                                                case 9:
                                                                case "end":
                                                                    return t.stop()
                                                            }
                                                        }), t, null, [
                                                            [0, 6]
                                                        ])
                                                    })))()
                                                })));
                                            case 5:
                                            case "end":
                                                return e.stop()
                                        }
                                    }), e)
                                })));
                                return function() { return e.apply(this, arguments) }
                            }()
                        }, {
                            key: "getFileData",
                            value: function() {
                                var n = Object(r.a)(i.a.mark((function n(t) {
                                    var a, o = this,
                                        c = arguments;
                                    return i.a.wrap((function(n) {
                                        for (;;) switch (n.prev = n.next) {
                                            case 0:
                                                return a = c.length > 1 && void 0 !== c[1] ? c[1] : null, n.abrupt("return", new Promise((function(n, c) {
                                                    Object(r.a)(i.a.mark((function r() {
                                                        var s, d, u, b;
                                                        return i.a.wrap((function(i) {
                                                            for (;;) switch (i.prev = i.next) {
                                                                case 0:
                                                                    if (i.prev = 0, d = "".concat(p, "/").concat(t), null, void 0 !== s) { i.next = 14; break }
                                                                    if (!(u = o.tree.find((function(e) { return e.path.toLowerCase() === d.toLowerCase() }))) || !u.url) { i.next = 13; break }
                                                                    return i.next = 9, l()({ method: "get", url: "".concat(u.url).concat(a ? "?access_token=".concat(a) : ""), headers: { "content-type": "application/json;charset=UTF-8", Accept: "application/vnd.github.v3+json" } });
                                                                case 9:
                                                                    200 === (b = i.sent).status ? s = JSON.parse(e.from(b.data.content, "base64").toString("ascii")) : c(new Error("An error occurred!")), i.next = 14;
                                                                    break;
                                                                case 13:
                                                                    c(new Error("Path file is not correct!"));
                                                                case 14:
                                                                    n(s), i.next = 20;
                                                                    break;
                                                                case 17:
                                                                    i.prev = 17, i.t0 = i.catch(0), c(i.t0.message);
                                                                case 20:
                                                                case "end":
                                                                    return i.stop()
                                                            }
                                                        }), r, null, [
                                                            [0, 17]
                                                        ])
                                                    })))()
                                                })));
                                            case 2:
                                            case "end":
                                                return n.stop()
                                        }
                                    }), n)
                                })));
                                return function(e) { return n.apply(this, arguments) }
                            }()
                        }]), n
                    }();
                n.a = f
            }).call(this, t(23).Buffer)
        },
        456: function(e) { e.exports = JSON.parse('[{"data":{"contentType":"text/plain","createdAt":"2021-02-03T17:36:19+00:00","stringId":9999,"text":"Contract","translationId":999999}},{"data":{"contentType":"text/plain","createdAt":"2021-02-03T17:36:19+00:00","stringId":9998,"text":"Documents","translationId":999998}},{"data":{"contentType":"text/plain","createdAt":"2021-02-03T17:36:19+00:00","stringId":9997,"text":"Medium","translationId":999997}},{"data":{"contentType":"text/plain","createdAt":"2021-02-03T17:36:19+00:00","stringId":9996,"text":"Telegram Channel","translationId":999996}},{"data":{"contentType":"text/plain","createdAt":"2021-02-03T17:36:19+00:00","stringId":9995,"text":"Reddit","translationId":999995}},{"data":{"contentType":"text/plain","createdAt":"2021-02-03T17:36:19+00:00","stringId":9994,"text":"Twitter","translationId":34602}}]') },
        457: function(e) { e.exports = JSON.parse('{"name":"SoupsSwap Default List","timestamp":"2021-03-17T09:56:23Z","version":{"major":2,"minor":1,"patch":0},"tags":{},"logoURI":"https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/smartchain/assets/0x604D105f2F1f68641a000f03b5DC557bFFfdB8FE/logo.png","keywords":["soups","default"],"tokens":[{"name":"SPW Token","symbol":"SPW","address":"0x604d105f2f1f68641a000f03b5dc557bfffdb8fe","chainId":56,"decimals":18,"position":1,"logoURI":"https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/smartchain/assets/0x604D105f2F1f68641a000f03b5DC557bFFfdB8FE/logo.png"},{"name":"WBNB Token","symbol":"WBNB","address":"0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c","chainId":56,"decimals":18,"position":2,"logoURI":"https://exchange.pancakeswap.finance/images/coins/0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c.png"},{"name":"Tether USD","symbol":"USDT","address":"0x55d398326f99059ff775485246999027b3197955","chainId":56,"decimals":18,"position":3,"logoURI":"https://exchange.pancakeswap.finance/images/coins/0x55d398326f99059ff775485246999027b3197955.png"},{"name":"PancakeSwap Token","symbol":"CAKE","address":"0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82","chainId":56,"decimals":18,"position":4,"logoURI":"https://exchange.pancakeswap.finance/images/coins/0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82.png"},{"name":"Ethereum Token","symbol":"ETH","address":"0x2170ed0880ac9a755fd29b2688956bd959f933f8","chainId":56,"decimals":18,"position":5,"logoURI":"https://exchange.pancakeswap.finance/images/coins/0x2170ed0880ac9a755fd29b2688956bd959f933f8.png"},{"name":"BUSD Token","symbol":"BUSD","address":"0xe9e7cea3dedca5984780bafc599bd69add087d56","chainId":56,"decimals":18,"position":6,"logoURI":"https://exchange.pancakeswap.finance/images/coins/0xe9e7cea3dedca5984780bafc599bd69add087d56.png"},{"name":"Beacon ETH","symbol":"BETH","address":"0x250632378e573c6be1ac2f97fcdf00515d0aa91b","chainId":56,"decimals":18,"position":7,"logoURI":"https://exchange.pancakeswap.finance/images/coins/0x250632378e573c6be1ac2f97fcdf00515d0aa91b.png"},{"name":"BTCB Token","symbol":"BTCB","address":"0x7130d2a12b9bcbfae4f2634d864a1ee1ce3ead9c","chainId":56,"decimals":18,"position":8,"logoURI":"https://exchange.pancakeswap.finance/images/coins/0x7130d2a12b9bcbfae4f2634d864a1ee1ce3ead9c.png"},{"name":"Binance-Peg USD Coin","symbol":"USDC","address":"0x8ac76a51cc950d9822d68b83fe1ad97b32cd580d","chainId":56,"decimals":18,"position":9,"logoURI":"https://exchange.pancakeswap.finance/images/coins/0x8ac76a51cc950d9822d68b83fe1ad97b32cd580d.png"},{"name":"Polkadot Token","symbol":"DOT","address":"0x7083609fce4d1d8dc0c979aab8c869ea2c873402","chainId":56,"decimals":18,"position":10,"logoURI":"https://exchange.pancakeswap.finance/images/coins/0x7083609fce4d1d8dc0c979aab8c869ea2c873402.png"},{"name":"bDollar","symbol":"BDO","address":"0x190b589cf9Fb8DDEabBFeae36a813FFb2A702454","chainId":56,"decimals":18,"position":11,"logoURI":"https://exchange.pancakeswap.finance/images/coins/0x190b589cf9Fb8DDEabBFeae36a813FFb2A702454.png"},{"name":"Dai Token","symbol":"DAI","address":"0x1af3f329e8be154074d8769d1ffa4ee058b1dbc3","chainId":56,"decimals":18,"position":12,"logoURI":"https://exchange.pancakeswap.finance/images/coins/0x1af3f329e8be154074d8769d1ffa4ee058b1dbc3.png"},{"name":"UST Token","symbol":"UST","address":"0x23396cF899Ca06c4472205fC903bDB4de249D6fC","chainId":56,"decimals":18,"position":13,"logoURI":"https://exchange.pancakeswap.finance/images/coins/0x23396cF899Ca06c4472205fC903bDB4de249D6fC.png"},{"name":"AUTOv2","symbol":"AUTO","address":"0xa184088a740c695e156f91f5cc086a06bb78b827","chainId":56,"decimals":18,"position":14,"logoURI":"https://exchange.pancakeswap.finance/images/coins/0xa184088a740c695e156f91f5cc086a06bb78b827.png"},{"name":"VAI Stablecoin","symbol":"VAI","address":"0x4bd17003473389a42daf6a0a729f6fdb328bbbd7","chainId":56,"decimals":18,"position":15,"logoURI":"https://exchange.pancakeswap.finance/images/coins/0x4bd17003473389a42daf6a0a729f6fdb328bbbd7.png"},{"name":"BSCEX","symbol":"BSCX","address":"0x5ac52ee5b2a633895292ff6d8a89bb9190451587","chainId":56,"decimals":18,"position":16,"logoURI":"https://exchange.pancakeswap.finance/images/coins/0x5ac52ee5b2a633895292ff6d8a89bb9190451587.png"},{"name":"ChainLink Token","symbol":"LINK","address":"0xf8a0bf9cf54bb92f17374d9e9a321e6a111a51bd","chainId":56,"decimals":18,"position":17,"logoURI":"https://exchange.pancakeswap.finance/images/coins/0xf8a0bf9cf54bb92f17374d9e9a321e6a111a51bd.png"},{"name":"Uniswap","symbol":"UNI","address":"0xbf5140a22578168fd562dccf235e5d43a02ce9b1","chainId":56,"decimals":18,"position":18,"logoURI":"https://exchange.pancakeswap.finance/images/coins/0xbf5140a22578168fd562dccf235e5d43a02ce9b1.png"},{"name":"Cardano Token","symbol":"ADA","address":"0x3ee2200efb3400fabb9aacf31297cbdd1d435d47","chainId":56,"decimals":18,"position":19,"logoURI":"https://exchange.pancakeswap.finance/images/coins/0x3ee2200efb3400fabb9aacf31297cbdd1d435d47.png"},{"name":"Compound Finance","symbol":"COMP","address":"0x52ce071bd9b1c4b00a0b92d298c512478cad67e8","chainId":56,"decimals":18,"logoURI":"https://exchange.pancakeswap.finance/images/coins/0x52ce071bd9b1c4b00a0b92d298c512478cad67e8.png"},{"name":"Sushi","symbol":"SUSHI","address":"0x947950bcc74888a40ffa2593c5798f11fc9124c4","chainId":56,"decimals":18,"logoURI":"https://exchange.pancakeswap.finance/images/coins/0x947950bcc74888a40ffa2593c5798f11fc9124c4.png"},{"name":"Trust Wallet","symbol":"TWT","address":"0x4b0f1812e5df2a09796481ff14017e6005508003","chainId":56,"decimals":18,"logoURI":"https://exchange.pancakeswap.finance/images/coins/0x4b0f1812e5df2a09796481ff14017e6005508003.png"},{"name":"Swipe","symbol":"SXP","address":"0x47bead2563dcbf3bf2c9407fea4dc236faba485a","chainId":56,"decimals":18,"logoURI":"https://exchange.pancakeswap.finance/images/coins/0x47bead2563dcbf3bf2c9407fea4dc236faba485a.png"},{"name":"Venus","symbol":"XVS","address":"0xcf6bb5389c92bdda8a3747ddb454cb7a64626c63","chainId":56,"decimals":18,"logoURI":"https://exchange.pancakeswap.finance/images/coins/0xcf6bb5389c92bdda8a3747ddb454cb7a64626c63.png"},{"name":"AlphaToken","symbol":"ALPHA","address":"0xa1faa113cbe53436df28ff0aee54275c13b40975","chainId":56,"decimals":18,"logoURI":"https://exchange.pancakeswap.finance/images/coins/0xa1faa113cbe53436df28ff0aee54275c13b40975.png"},{"name":"bDollar Share","symbol":"sBDO","address":"0x0d9319565be7f53CeFE84Ad201Be3f40feAE2740","chainId":56,"decimals":18,"logoURI":"https://exchange.pancakeswap.finance/images/coins/0x0d9319565be7f53CeFE84Ad201Be3f40feAE2740.png"},{"name":"XRP Token","symbol":"XRP","address":"0x1d2f0da169ceb9fc7b3144628db156f3f6c60dbe","chainId":56,"decimals":18,"logoURI":"https://exchange.pancakeswap.finance/images/coins/0x1d2f0da169ceb9fc7b3144628db156f3f6c60dbe.png"},{"name":"Injective Protocol","symbol":"INJ","address":"0xa2B726B1145A4773F68593CF171187d8EBe4d495","chainId":56,"decimals":18,"logoURI":"https://exchange.pancakeswap.finance/images/coins/0xa2B726B1145A4773F68593CF171187d8EBe4d495.png"},{"name":"Berry","symbol":"BRY","address":"0xf859Bf77cBe8699013d6Dbc7C2b926Aaf307F830","chainId":56,"decimals":18,"logoURI":"https://exchange.pancakeswap.finance/images/coins/0xf859Bf77cBe8699013d6Dbc7C2b926Aaf307F830.png"},{"name":"Reef","symbol":"REEF","address":"0xf21768ccbc73ea5b6fd3c687208a7c2def2d966e","chainId":56,"decimals":18,"logoURI":"https://exchange.pancakeswap.finance/images/coins/0xf21768ccbc73ea5b6fd3c687208a7c2def2d966e.png"},{"name":"YFII.finance Token","symbol":"YFII","address":"0x7f70642d88cf1c4a3a7abb072b53b929b653eda5","chainId":56,"decimals":18,"logoURI":"https://exchange.pancakeswap.finance/images/coins/0x7f70642d88cf1c4a3a7abb072b53b929b653eda5.png"},{"name":"SafePal Token","symbol":"SFP","address":"0xd41fdb03ba84762dd66a0af1a6c8540ff1ba5dfb","chainId":56,"decimals":18,"logoURI":"https://exchange.pancakeswap.finance/images/coins/0xd41fdb03ba84762dd66a0af1a6c8540ff1ba5dfb.png"},{"name":"Helmet.insure","symbol":"Helmet","address":"0x948d2a81086a075b3130bac19e4c6dee1d2e3fe8","chainId":56,"decimals":18,"logoURI":"https://exchange.pancakeswap.finance/images/coins/0x948d2a81086a075b3130bac19e4c6dee1d2e3fe8.png"},{"name":"Fuel","symbol":"FUEL","address":"0x2090c8295769791ab7A3CF1CC6e0AA19F35e441A","chainId":56,"decimals":18,"logoURI":"https://exchange.pancakeswap.finance/images/coins/0x2090c8295769791ab7A3CF1CC6e0AA19F35e441A.png"},{"name":"Bitcoin Cash Token","symbol":"BCH","address":"0x8ff795a6f4d97e7887c79bea79aba5cc76444adf","chainId":56,"decimals":18,"logoURI":"https://exchange.pancakeswap.finance/images/coins/0x8ff795a6f4d97e7887c79bea79aba5cc76444adf.png"},{"name":"Litecoin Token","symbol":"LTC","address":"0x4338665cbb7b2485a8855a139b75d5e34ab0db94","chainId":56,"decimals":18,"logoURI":"https://exchange.pancakeswap.finance/images/coins/0x4338665cbb7b2485a8855a139b75d5e34ab0db94.png"},{"name":"Swingby","symbol":"SWINGBY","address":"0x71DE20e0C4616E7fcBfDD3f875d568492cBE4739","chainId":56,"decimals":18,"logoURI":"https://exchange.pancakeswap.finance/images/coins/0x71DE20e0C4616E7fcBfDD3f875d568492cBE4739.png"},{"name":"EOS Token","symbol":"EOS","address":"0x56b6fb708fc5732dec1afc8d8556423a2edccbd6","chainId":56,"decimals":18,"logoURI":"https://exchange.pancakeswap.finance/images/coins/0x56b6fb708fc5732dec1afc8d8556423a2edccbd6.png"},{"name":"Dodo","symbol":"DODO","address":"0x67ee3cb086f8a16f34bee3ca72fad36f7db929e2","chainId":56,"decimals":18,"logoURI":"https://exchange.pancakeswap.finance/images/coins/0x67ee3cb086f8a16f34bee3ca72fad36f7db929e2.png"},{"name":"Frontier Token","symbol":"FRONT","address":"0x928e55daB735aa8260AF3cEDadA18B5f70C72f1b","chainId":56,"decimals":18,"logoURI":"https://exchange.pancakeswap.finance/images/coins/0x928e55daB735aa8260AF3cEDadA18B5f70C72f1b.png"},{"name":"Cosmos Token","symbol":"ATOM","address":"0x0eb3a705fc54725037cc9e008bdede697f62f335","chainId":56,"decimals":18,"logoURI":"https://exchange.pancakeswap.finance/images/coins/0x0eb3a705fc54725037cc9e008bdede697f62f335.png"},{"name":"Unifi Token","symbol":"UNFI","address":"0x728C5baC3C3e370E372Fc4671f9ef6916b814d8B","chainId":56,"decimals":18,"logoURI":"https://exchange.pancakeswap.finance/images/coins/0x728C5baC3C3e370E372Fc4671f9ef6916b814d8B.png"}]}') },
        490: function(e, n, t) {},
        505: function(e, n) {},
        527: function(e, n) {},
        529: function(e, n) {},
        548: function(e, n) {},
        552: function(e, n) {},
        585: function(e, n) {},
        587: function(e, n) {},
        65: function(e, n, t) {
            "use strict";
            var a, i = t(9),
                r = t(6),
                o = t(31),
                c = t(230),
                s = Object(r.default)(c.a)(a || (a = Object(i.a)(["\n  display: flex; \n  ", "\n"])), o.flexbox);
            n.a = s
        },
        69: function(e, n, t) {
            "use strict";
            t.d(n, "a", (function() { return a })), t.d(n, "b", (function() { return i }));
            var a = { MD: "md", SM: "sm", XS: "xs" },
                i = { PRIMARY: "primary", SECONDARY: "secondary", TERTIARY: "tertiary", TEXT: "text", DANGER: "danger", SUBTLE: "subtle", SUCCESS: "success", GRADIENTS: "gradients", COMMONRIGHT: "commonRight", COMMONLEFT: "commonLeft" }
        },
        702: function(e, n) {},
        704: function(e, n) {},
        711: function(e, n) {},
        712: function(e, n) {},
        735: function(e, n) {},
        81: function(e, n, t) {
            "use strict";
            t.d(n, "a", (function() { return o })), t.d(n, "b", (function() { return c })), t.d(n, "c", (function() { return s })), t.d(n, "d", (function() { return l })), t.d(n, "e", (function() { return p })), t.d(n, "f", (function() { return b }));
            var a = t(2),
                i = (t(0), t(13)),
                r = t(1),
                o = function(e) { return Object(r.jsx)(i.a, Object(a.a)(Object(a.a)({ viewBox: "0 0 24 24" }, e), {}, { children: Object(r.jsx)("path", { d: "M19 11H7.82998L12.71 6.12C13.1 5.73 13.1 5.09 12.71 4.7C12.32 4.31 11.69 4.31 11.3 4.7L4.70998 11.29C4.31998 11.68 4.31998 12.31 4.70998 12.7L11.3 19.29C11.69 19.68 12.32 19.68 12.71 19.29C13.1 18.9 13.1 18.27 12.71 17.88L7.82998 13H19C19.55 13 20 12.55 20 12C20 11.45 19.55 11 19 11Z" }) })) },
                c = function(e) { return Object(r.jsx)(i.a, Object(a.a)(Object(a.a)({ viewBox: "0 0 24 24" }, e), {}, { children: Object(r.jsx)("path", { d: "M8.71005 11.71L11.3001 14.3C11.6901 14.69 12.3201 14.69 12.7101 14.3L15.3001 11.71C15.9301 11.08 15.4801 10 14.5901 10H9.41005C8.52005 10 8.08005 11.08 8.71005 11.71Z" }) })) },
                s = function(e) { return Object(r.jsx)(i.a, Object(a.a)(Object(a.a)({ viewBox: "0 0 24 24" }, e), {}, { children: Object(r.jsx)("path", { d: "M8.71005 12.29L11.3001 9.69997C11.6901 9.30997 12.3201 9.30997 12.7101 9.69997L15.3001 12.29C15.9301 12.92 15.4801 14 14.5901 14H9.41005C8.52005 14 8.08005 12.92 8.71005 12.29Z" }) })) },
                l = (t(233), t(6), t(231), function(e) { return Object(r.jsxs)(i.a, Object(a.a)(Object(a.a)({ viewBox: "0 0 68 71" }, e), {}, { children: [Object(r.jsx)("path", { d: "M34.4587 70.3424C15.9392 70.3424 0.92334 55.0506 0.92334 36.1906C0.92334 17.3307 15.9392 2.0389 34.4587 2.0389C52.9782 2.0389 67.994 17.3307 67.994 36.1906C67.994 55.0506 52.9782 70.3424 34.4587 70.3424Z", fill: "url(#paint0_linear)" }), Object(r.jsx)("path", { opacity: "0.66", d: "M34.4587 70.3424C15.9392 70.3424 0.92334 55.0506 0.92334 36.1906C0.92334 17.3307 15.9392 2.0389 34.4587 2.0389C52.9782 2.0389 67.994 17.3307 67.994 36.1906C67.994 55.0506 52.9782 70.3424 34.4587 70.3424Z", fill: "url(#paint1_radial)" }), Object(r.jsx)("path", { d: "M34.4587 65.2451C15.9392 65.2451 0.92334 50.463 0.92334 32.6226C0.92334 14.5272 15.9392 0 34.4587 0C52.9782 0 67.994 14.5272 67.994 32.6226C67.994 50.463 52.9782 65.2451 34.4587 65.2451Z", fill: "url(#paint2_radial)" }), Object(r.jsx)("path", { d: "M34.4587 1.78393C52.7279 1.78393 67.4935 16.0563 67.994 33.6419C67.994 33.387 67.994 33.1322 67.994 32.8773C67.994 14.782 52.9782 0.254752 34.4587 0.254752C15.9392 -0.000111252 0.92334 14.5271 0.92334 32.6224C0.92334 32.8773 0.92334 33.1322 0.92334 33.387C1.42387 15.8014 16.1894 1.78393 34.4587 1.78393Z", fill: "url(#paint3_radial)" }), Object(r.jsx)("path", { d: "M34.4589 63.7159C51.0449 63.7159 64.4905 50.5937 64.4905 34.4066C64.4905 18.2195 51.0449 5.09728 34.4589 5.09728C17.8729 5.09728 4.42725 18.2195 4.42725 34.4066C4.42725 50.5937 17.8729 63.7159 34.4589 63.7159Z", fill: "url(#paint4_radial)" }), Object(r.jsx)("path", { d: "M34.4589 61.9319C51.0449 61.9319 64.4905 48.8096 64.4905 32.6225C64.4905 16.4354 51.0449 3.3132 34.4589 3.3132C17.8729 3.3132 4.42725 16.4354 4.42725 32.6225C4.42725 48.8096 17.8729 61.9319 34.4589 61.9319Z", fill: "url(#paint5_linear)" }), Object(r.jsx)("path", { opacity: "0.61", d: "M34.4589 10.1945C49.9752 10.1945 62.4884 21.4085 64.2402 35.9358C64.4905 34.9163 64.4905 33.642 64.4905 32.6225C64.4905 16.5661 50.9763 3.3132 34.4589 3.3132C17.9415 3.3132 4.42725 16.3113 4.42725 32.6225C4.42725 33.642 4.42725 34.9163 4.67751 35.9358C6.42936 21.4085 18.9425 10.1945 34.4589 10.1945Z", fill: "#37280B" }), Object(r.jsx)("path", { opacity: "0.61", d: "M49.9746 21.9183C46.4709 27.0156 43.9682 30.8386 40.7148 35.9358C43.718 41.288 46.2206 45.1109 50.4751 51.7374L50.2248 52.2471H47.9724C44.2185 52.2471 41.7158 52.2471 37.9619 52.502L37.4614 52.2471C36.21 49.1887 35.209 47.4047 33.7074 44.3463C32.4561 47.1498 31.455 48.9339 30.2037 51.7374L29.7032 51.9922C28.4519 51.9922 27.2006 51.9922 25.9492 51.9922C23.6969 51.9922 21.945 51.9922 19.6926 52.2471L19.4424 51.7374C23.1963 46.1304 25.699 42.3074 29.2027 36.7004C26.4498 31.6031 22.9461 26.7607 19.6926 21.9183L19.9429 21.4086C24.1974 21.4086 27.4508 21.1537 31.7053 20.8989L32.2058 21.1537C33.4571 23.7024 34.4582 25.7413 35.7095 28.2899C36.9608 25.7413 37.7116 24.2121 38.9629 21.6635L39.4635 21.4086C40.4645 21.4086 41.4656 21.4086 42.7169 21.4086C45.2195 21.4086 46.9714 21.4086 49.474 21.1537L49.9746 21.9183Z", fill: "#37280B" }), Object(r.jsx)("path", { d: "M49.9746 17.3308C46.4709 22.4281 43.9682 26.251 40.7148 31.3483C43.718 36.7004 46.2206 40.5234 50.4751 47.1498L50.2248 47.6596H47.9724C44.2185 47.6596 41.7158 47.6596 37.9619 47.9144L37.4614 47.6596C36.21 44.6012 35.209 42.8172 33.7074 39.7588C32.4561 42.5623 31.455 44.3463 30.2037 47.1498L29.7032 47.4047C28.4519 47.4047 27.2006 47.4047 25.9492 47.4047C23.6969 47.4047 21.945 47.4047 19.6926 47.6596L19.4424 47.1498C23.1963 41.5428 25.699 37.7199 29.2027 32.1129C26.4498 27.0156 22.9461 22.1732 19.6926 17.3308L19.9429 16.8211C24.1974 16.8211 27.4508 16.5662 31.7053 16.3113L32.2058 16.5662C33.4571 19.1148 34.4582 21.1537 35.7095 23.7024C36.9608 21.1537 37.7116 19.6246 38.9629 17.0759L39.4635 16.8211C40.4645 16.8211 41.4656 16.8211 42.7169 16.8211C45.2195 16.8211 46.9714 16.8211 49.474 16.5662L49.9746 17.3308Z", fill: "url(#paint6_linear)" }), Object(r.jsxs)("defs", { children: [Object(r.jsxs)("linearGradient", { id: "paint0_linear", x1: "37.4153", y1: "53.4194", x2: "55.5964", y2: "156.965", gradientUnits: "userSpaceOnUse", children: [Object(r.jsx)("stop", { offset: "0.00595238", stopColor: "#161500" }), Object(r.jsx)("stop", { offset: "0.0434759", stopColor: "#1B1802" }), Object(r.jsx)("stop", { offset: "0.2665", stopColor: "#35270B" }), Object(r.jsx)("stop", { offset: "0.4966", stopColor: "#473211" }), Object(r.jsx)("stop", { offset: "0.7362", stopColor: "#523815" }), Object(r.jsx)("stop", { offset: "1", stopColor: "#563A16" })] }), Object(r.jsxs)("radialGradient", { id: "paint1_radial", cx: "0", cy: "0", r: "1", gradientUnits: "userSpaceOnUse", gradientTransform: "translate(39.4041 25.2931) scale(50.4176 48.9722)", children: [Object(r.jsx)("stop", { offset: "0.8463" }), Object(r.jsx)("stop", { offset: "0.945", stopColor: "#108C83" }), Object(r.jsx)("stop", { offset: "1", stopColor: "#18D6C8" })] }), Object(r.jsxs)("radialGradient", { id: "paint2_radial", cx: "0", cy: "0", r: "1", gradientUnits: "userSpaceOnUse", gradientTransform: "translate(34.4852 32.5999) scale(33.5621 32.5999)", children: [Object(r.jsx)("stop", { stopColor: "#EA821B" }), Object(r.jsx)("stop", { offset: "1", stopColor: "#7B4F22" })] }), Object(r.jsxs)("radialGradient", { id: "paint3_radial", cx: "0", cy: "0", r: "1", gradientUnits: "userSpaceOnUse", gradientTransform: "translate(48.3731 2.24766) scale(43.9185 42.6594)", children: [Object(r.jsx)("stop", { offset: "0.0793651", stopColor: "#A35300" }), Object(r.jsx)("stop", { offset: "0.4841", stopColor: "#5A2E00" }), Object(r.jsx)("stop", { offset: "0.9515" })] }), Object(r.jsxs)("radialGradient", { id: "paint4_radial", cx: "0", cy: "0", r: "1", gradientUnits: "userSpaceOnUse", gradientTransform: "translate(23.7806 51.7108) scale(49.9161 48.4851)", children: [Object(r.jsx)("stop", { offset: "0.0793651", stopColor: "#A35300" }), Object(r.jsx)("stop", { offset: "0.4841", stopColor: "#5A2E00" }), Object(r.jsx)("stop", { offset: "0.9515" })] }), Object(r.jsxs)("linearGradient", { id: "paint5_linear", x1: "34.4857", y1: "-12.534", x2: "34.4857", y2: "79.8822", gradientUnits: "userSpaceOnUse", children: [Object(r.jsx)("stop", { stopColor: "#37280B" }), Object(r.jsx)("stop", { offset: "1", stopColor: "#7B4F22" })] }), Object(r.jsxs)("linearGradient", { id: "paint6_linear", x1: "35.1257", y1: "13.7206", x2: "35.1257", y2: "49.4482", gradientUnits: "userSpaceOnUse", children: [Object(r.jsx)("stop", { stopColor: "#FAE11C" }), Object(r.jsx)("stop", { offset: "1", stopColor: "#FF8D0A" })] })] })] })) }),
                d = t(37),
                u = ["type"],
                p = function(e) {
                    var n = e.type,
                        t = Object(d.a)(e, u);
                    return Object(r.jsx)(i.a, Object(a.a)(Object(a.a)({ viewBox: "0 0 22 27" }, t), {}, { children: "v1" === n ? Object(r.jsxs)(r.Fragment, { children: [Object(r.jsx)("path", { d: "M21.45 12.2464L15.8583 6.36428C15.5833 5.97856 15.125 5.78571 14.6667 5.78571H7.33333C6.325 5.78571 5.5 6.65356 5.5 7.71428V25.0714C5.5 26.1321 6.325 27 7.33333 27H20.1667C21.175 27 22 26.1321 22 25.0714V13.5964C22 13.1143 21.8167 12.6321 21.45 12.2464V12.2464ZM14.6667 7.71428L20.075 13.5H14.6667V7.71428ZM7.33333 25.0714V7.71428H12.8333V13.5C12.8333 14.5607 13.6583 15.4286 14.6667 15.4286H20.1667V25.0714H7.33333Z", fill: "#81472C" }), Object(r.jsx)("path", { d: "M1.83333 15.4286H0V1.92857C0 0.867857 0.825 0 1.83333 0H14.6667V1.92857H1.83333V15.4286Z", fill: "#81472C" })] }) : Object(r.jsx)(r.Fragment, { children: Object(r.jsx)("path", { d: "M15 1H4C2.9 1 2 1.9 2 3V16C2 16.55 2.45 17 3 17C3.55 17 4 16.55 4 16V4C4 3.45 4.45 3 5 3H15C15.55 3 16 2.55 16 2C16 1.45 15.55 1 15 1ZM19 5H8C6.9 5 6 5.9 6 7V21C6 22.1 6.9 23 8 23H19C20.1 23 21 22.1 21 21V7C21 5.9 20.1 5 19 5ZM18 21H9C8.45 21 8 20.55 8 20V8C8 7.45 8.45 7 9 7H18C18.55 7 19 7.45 19 8V20C19 20.55 18.55 21 18 21Z" }) }) }))
                },
                b = (t(232), t(234), t(235), function(e) { return Object(r.jsxs)(i.a, Object(a.a)(Object(a.a)({ viewBox: "0 0 37 37" }, e), {}, { children: [Object(r.jsx)("rect", { width: "37", height: "37", fill: "url(#pattern0)" }), Object(r.jsxs)("defs", { children: [Object(r.jsx)("pattern", { id: "pattern0", patternContentUnits: "objectBoundingBox", width: "1", height: "1", children: Object(r.jsx)("use", { xlinkHref: "#image0_536:879", transform: "scale(0.0140845)" }) }), Object(r.jsx)("image", { id: "image0_536:879", width: "71", height: "71", xlinkHref: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEcAAABHCAYAAABVsFofAAAEPElEQVR4nN3cP0wTURwH8K+VvwHU0ahRTDRhYmFTSEjQBJEwGR1w4l8hjmzssjFjaRmbCCuYNGJiCEQWZZBVk5pAgnGBtojFxbzz/WpTae+9d+/PXb9Jc/R4vD+fXEnb+91deDnVAsdpBtDLH30AtgBs80fRxNTmEqdC7RocujQCWAQwXrF/oOznZQAzAH5bnpuXmItBAfQD+HwOTGXGebt++1N0gzMG4D2ALsH2Xbz9mOF5/RfbOGP8paKSZYEjTWts4gSBoaRsAin9Q56dHJVqv5BM64ChpPgcdPVXNcaPnIVkelwjDCXF+zUaozh8ASmRtpfa2/BkaMDbCsY4kDEcWZinww9w6/pVbxsWICM4KjCXO9q952wbFiDtOEFgKGEB0oqjA4YSBiBtODphKK6BtOCYgKG4BAqMYxKG4gooEI4NGIoLIGUcmzAURaAJ1fEuDvTIf7za2d2zDkNpaW7Cnc4b+JLdR/FM6DuwkZ3dvYN7Pd27tKPh2ojQWCpHjjMYisIRlFQ5gmRxJlzDUGwAyeCwjpMiDU3DUEwDieKEDoaiAjQfbxUCEsEJLQyFjfds+KF2ID+c0MOUxu9o0w5UCycyMKV5aAaqhiMFwybkGoaiE+g8HGkYNqEwRRdQJU7kYSg6gMpxBusFhlICEp8nAxqkJ4TTwU/q+w8YERiKB/RYar6L8/FW5lHCYTCdvgNFDIYiCdRJBwqrz7kM4EjzAKFMLn+ClTcb3lYgV2K8aKjuYSC/jl5fnHqBoUisx8Ppq9ViqP9+3cBQ2HrYunzSF+M1eFWT2fyA/MlPt6vRHLaezOaOX6dbMV6YWDVHuQJW1zfqBoitY3X9HY5yeb+m2744qCOgvzAbIjAgnGMAab+WUQf6B1MQaZ6eS5we05tAVs6a9fuLqAJJwmS5R+kdcp52+CVqQJIwLDNziVPvdVf+wTNTb0CKMBl6UnlS7yOA7wCG/Xr5VTzD12/7uHv7JpqbGhWmbjaKMK/Kd5x3xjPyQDpgUON0cGSBdMHA51x55IB0wkCgkIABHUYBSDcMBKssPskAseoH20AmYCBRgiIMVDyzC2QKBpKFBAkA0yINj/MFrKyZfx+kADM9OzkqBAOFEpTQALF+Wf+SMAmZMVSKl5wDEQzrXzDSMFCtCeQDOQGyBYMgBZMqQLmC0Lf+VWMTBkFLbWWB2DdwqkC2YaCjSNsGkAsY6CrvNwnkCgY6LwwxAcR+7woGui8p0gnE9rPfu4KBiYvR+ATjIm2rAYUBBqYuY5ydHF1SBQoLDExeAKsCdHD4IzQwMH3ptCzQ67W3oYGBjYvuZYAkEjcNA168ZHoMyhT/0Bo0DHopSB+iNxeyeaMPHUdQYBiZ2L5FTBAgqzBwdHMhtsBHIufmebK8vVUYOLwtFTvl2i1Q3ZHm7TI+7YzE5Q3N2Mn65wBe1LjbGyuPcRMAfwBoaABku1LrCQAAAABJRU5ErkJggg==" })] })] })) })
        },
        86: function(e, n, t) {
            "use strict";
            var a, i, r, o = t(2),
                c = t(37),
                s = t(0),
                l = t(174),
                d = t(9),
                u = t(6),
                p = t(31),
                b = t(26),
                m = t(69),
                f = (a = {}, Object(b.a)(a, m.a.MD, { height: "48px", padding: "0 24px" }), Object(b.a)(a, m.a.SM, { height: "32px", padding: "0 16px" }), Object(b.a)(a, m.a.XS, { height: "20px", fontSize: "12px", padding: "0 8px" }), a),
                h = (i = {}, Object(b.a)(i, m.b.PRIMARY, { backgroundColor: "primary", color: "white" }), Object(b.a)(i, m.b.SECONDARY, { backgroundColor: "transparent", border: "2px solid", borderColor: "textSubtle", boxShadow: "none", color: "textSubtle", ":disabled": { backgroundColor: "transparent" } }), Object(b.a)(i, m.b.TERTIARY, { backgroundColor: "tertiary", boxShadow: "none", color: "primary" }), Object(b.a)(i, m.b.SUBTLE, { backgroundColor: "textSubtle", color: "white" }), Object(b.a)(i, m.b.DANGER, { backgroundColor: "failure", color: "white" }), Object(b.a)(i, m.b.SUCCESS, { backgroundColor: "success", color: "white" }), Object(b.a)(i, m.b.TEXT, { backgroundColor: "transparent", color: "primary", boxShadow: "none" }), i),
                g = u.default.button(r || (r = Object(d.a)(["\n  font-family: inherit;\n  font-size: 16px;\n  font-weight: 600;\n  line-height: 1;\n  letter-spacing: 0.03em;\n\n  display: inline-flex;\n  justify-content: center;\n  align-items: center;\n  \n  border: 0;\n  border-radius: 3px;\n  opacity: ", ";\n  outline: 0;\n  box-shadow: 0px -1px 0px 0px rgba(14, 14, 44, 0.4) inset;\n  cursor: ", "; \n  transition: background-color 0.2s;\n\n  &:hover:not(:disabled):not(.pancake-button--disabled):not(.pancake-button--disabled):not(:active) {\n    opacity: ", ";\n  }\n\n  &:active:not(:disabled):not(.pancake-button--disabled):not(.pancake-button--disabled) {\n    opacity: ", ";\n  }\n\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n"])), (function(e) { var n = e.$isLoading; return void 0 !== n && n ? ".5" : "1" }), (function(e) { return e.cursor }), (function(e) { return e.hoverable ? "0.65" : "1" }), (function(e) { return e.hoverable ? "0.85" : "1" }), (function(e) {
                    var n = e.variant,
                        t = e.isLoading,
                        a = e.theme;
                    return !0 === t ? "\n      &:disabled,\n      &.binance-button--disabled {\n        cursor: not-allowed;\n      }\n    " : "\n    &:disabled,\n    &.binance-button--disabled {\n      color: ".concat(a.colors.textDisabled, ";\n      background: ").concat(n !== m.b.TEXT ? a.colors.backgroundDisabled : "transparent", ";\n      border-color: ").concat(a.colors.backgroundDisabled, ";\n      box-shadow: none;\n      opacity: 0.5;\n      cursor: not-allowed;\n    }\n  ")
                }), Object(p.variant)({ prop: "scale", variants: f }), Object(p.variant)({ variants: h }), p.layout, p.space),
                x = t(1),
                j = ["startIcon", "endIcon", "external", "className", "isLoading", "disabled", "children"],
                O = function(e) {
                    var n = e.startIcon,
                        t = e.endIcon,
                        a = e.external,
                        i = e.className,
                        r = e.isLoading,
                        d = e.disabled,
                        u = e.children,
                        p = Object(c.a)(e, j),
                        b = a ? Object(l.a)() : {},
                        m = r || d,
                        f = i ? [i] : [];
                    return r && f.push("binance-button--loading"), m && !r && f.push("binance-button--disabled"), Object(x.jsx)(g, Object(o.a)(Object(o.a)(Object(o.a)({ $isLoading: r, className: f.join(" "), disabled: m }, b), p), {}, { children: Object(x.jsxs)(x.Fragment, { children: [Object(s.isValidElement)(n) && Object(s.cloneElement)(n, { mr: "0.5rem" }), u, Object(s.isValidElement)(t) && Object(s.cloneElement)(t, { ml: "0.5rem" })] }) }))
                };
            O.defaultProps = { hoverable: !0, cursor: "pointer", isLoading: !1, external: !1, variant: m.b.PRIMARY, scale: m.a.MD, disabled: !1 };
            n.a = O
        },
        88: function(e, n, t) {
            "use strict";
            t.d(n, "a", (function() { return i.a })), t.d(n, "b", (function() { return c }));
            var a, i = t(86),
                r = t(9),
                o = t(6),
                c = Object(o.default)(i.a)(a || (a = Object(r.a)(["\n  padding: 0;\n  width: ", ";\n"])), (function(e) { return "sm" === e.scale ? "32px" : "48px" }))
        },
        910: function(e, n, t) {},
        911: function(e, n, t) {
            "use strict";
            t.r(n);
            var a = {};
            t.r(a), t.d(a, "FarmIcon", (function() { return Sn })), t.d(a, "GroupsIcon", (function() { return Fn })), t.d(a, "HamburgerIcon", (function() { return Rn })), t.d(a, "HamburgerCloseIcon", (function() { return Bn })), t.d(a, "HomeIcon", (function() { return Dn })), t.d(a, "IfoIcon", (function() { return Un })), t.d(a, "InfoIcon", (function() { return Hn })), t.d(a, "LanguageIcon", (function() { return zn })), t.d(a, "LogoIcon", (function() { return Pn })), t.d(a, "MoonIcon", (function() { return _n })), t.d(a, "MoreIcon", (function() { return Gn })), t.d(a, "NftIcon", (function() { return Wn })), t.d(a, "PoolIcon", (function() { return Kn })), t.d(a, "SunIcon", (function() { return Yn })), t.d(a, "TelegramIcon", (function() { return Qn })), t.d(a, "TicketIcon", (function() { return qn })), t.d(a, "TradeIcon", (function() { return Xn })), t.d(a, "TwitterIcon", (function() { return Jn })), t.d(a, "VolumeOnIcon", (function() { return $n })), t.d(a, "VolumeOffIcon", (function() { return et }));
            var i, r, o, c = t(0),
                s = t.n(c),
                l = t(54),
                d = t.n(l),
                u = t(928),
                p = t(461),
                b = t(462),
                m = t(9),
                f = t(6),
                h = Object(f.createGlobalStyle)(i || (i = Object(m.a)(['\n  @font-face {\n    font-family: "Roboto Slab";\n    font-display: swap;\n    src: url("/fonts/RobotoSlab-Regular.ttf");\n  }\n  @font-face {\n    font-family: "iCiel Cadena";\n    // font-style: normal;\n    font-display: swap;\n    src: url("/fonts/iCielCadena.otf");\n  }\n\n  /* prettier-ignore */\n  html, body, div, span, applet, object, iframe,\n  h1, h2, h3, h4, h5, h6, p, blockquote, pre,\n  a, abbr, acronym, address, big, cite, code,\n  del, dfn, em, img, ins, kbd, q, s, samp,\n  small, strike, strong, sub, sup, tt, var,\n  b, u, i, center,\n  dl, dt, dd, ol, ul, li,\n  fieldset, form, label, legend,\n  table, caption, tbody, tfoot, thead, tr, th, td,\n  article, aside, canvas, details, embed, \n  figure, figcaption, footer, header, hgroup, \n  menu, nav, output, ruby, section, summary,\n  time, mark, audio, video {\n    margin: 0;\n    padding: 0;\n    border: 0;\n    font-size: 100%;\n    // vertical-align: baseline;\n  }\n  /* HTML5 display-role reset for older browsers */\n  /* prettier-ignore */\n  article, aside, details, figcaption, figure, \n  footer, header, hgroup, menu, nav, section {\n    display: block;\n  }\n  body {\n    line-height: 1;\n    font-size: 16px;\n  }\n  ol,\n  ul {\n    list-style: disc;\n    list-style-position: inside;\n  }\n  blockquote,\n  q {\n    quotes: none;\n  }\n  blockquote:before,\n  blockquote:after,\n  q:before,\n  q:after {\n    content: "";\n    content: none;\n  }\n  table {\n    border-collapse: collapse;\n    border-spacing: 0;\n  }\n  a {\n    color: inherit;\n    text-decoration: none;\n  }\n  [role="button"] {\n    cursor: pointer;\n  }\n  *,\n  *::before,\n  *::after {\n    box-sizing: border-box;\n  }\n  * {\n    font-family: Roboto Slab;\n    // font-family: \'Kanit\', sans-serif;\n    -webkit-font-smoothing: antialiased;\n    -moz-osx-font-smoothing: grayscale;\n  }\n  /* Scrollbar */\n  ::-webkit-scrollbar {\n    width: 8px;\n  }\n  ::-webkit-scrollbar-thumb {\n    background: ', "; \n    border-radius: 8px;\n  }\n  ::-webkit-scrollbar-track {\n    box-shadow: inset 0 0 5px ", "; \n    border-radius: 10px;\n  }\n\n  /* Slider */ \n  input[type=range] {\n    -webkit-appearance: none; /* Hides the slider so that custom slider can be made */\n    width: 100%; /* Specific width is required for Firefox. */\n    background: transparent; /* Otherwise white in Chrome */\n  }\n  input[type=range]::-webkit-slider-thumb {\n    -webkit-appearance: none;\n  }\n  input[type=range]:focus {\n    outline: none; /* Removes the blue border. You should probably do some kind of focus styling for accessibility reasons though. */\n  }\n  input[type=range]::-ms-track {\n    width: 100%;\n    cursor: pointer;\n    /* Hides the slider so custom styles can be added */\n    background: transparent; \n    border-color: transparent;\n    color: transparent;\n  }  \n"])), (function(e) { return e.theme.colors.textSubtle }), (function(e) { return e.theme.colors.input })),
                g = Object(f.createGlobalStyle)(r || (r = Object(m.a)(["\n  html {\n    scroll-behavior: smooth;\n  }\n  body {\n    background-color: ", ";\n    // background-image: url(${bg});\n    background-size: cover;\n    background-position: center;\n    background-repeat: no-repeat;\n  }\n\n  img {\n    height: auto;\n    max-width: 100%;\n\n    image-rendering: -moz-crisp-edges;\n    image-rendering: -o-crisp-edges;\n    image-rendering: -webkit-optimize-contrast;\n    image-rendering: crisp-edges;\n    -ms-interpolation-mode: nearest-neighbor;\n  }\n  \n  #root {\n    width: 100%;\n    height: 100%;\n  }\n"], ["\n  html {\n    scroll-behavior: smooth;\n  }\n  body {\n    background-color: ", ";\n    // background-image: url(\\${bg});\n    background-size: cover;\n    background-position: center;\n    background-repeat: no-repeat;\n  }\n\n  img {\n    height: auto;\n    max-width: 100%;\n\n    image-rendering: -moz-crisp-edges;\n    image-rendering: -o-crisp-edges;\n    image-rendering: -webkit-optimize-contrast;\n    image-rendering: crisp-edges;\n    -ms-interpolation-mode: nearest-neighbor;\n  }\n  \n  #root {\n    width: 100%;\n    height: 100%;\n  }\n"])), (function(e) { return e.theme.colors.background })),
                x = t(79),
                j = t(32),
                O = t(71),
                y = t(61),
                C = t(932),
                v = t(936),
                w = t(2),
                k = t(44),
                T = t(178),
                M = t(930),
                L = t(59),
                I = (t(490), t(21)),
                N = Object(I.b)("app/setAccountToState"),
                A = Object(I.b)("app/setGithubConfig"),
                E = Object(I.b)("app/setShowModalNew"),
                S = Object(I.b)("app/updateBlockNumber"),
                F = Object(I.b)("app/toggleWalletModal"),
                R = Object(I.b)("app/toggleSettingsMenu"),
                B = Object(I.b)("app/addPopup"),
                D = Object(I.b)("app/removePopup"),
                U = Object(I.b)("app/setOpenModalStake"),
                H = Object(I.b)("app/setByAccount"),
                z = Object(I.b)("app/setSoundIntro"),
                V = t(1),
                Z = f.default.div(o || (o = Object(m.a)(["\n  padding-top: 15px;\n"]))),
                P = function() {
                    var e = Object(k.b)(),
                        n = Object(k.c)((function(e) { return e.application })).banner,
                        t = function() { e(E({ banner: {} })) },
                        a = Object(L.get)(n, "link_to", "").startsWith("http"),
                        i = a ? "a" : O.b,
                        r = a ? { href: Object(L.get)(n, "link_to", ":;"), target: "_blank", rel: "noreferrer", style: { cursor: "pointer" } } : { onClick: function() { return t }, to: "/staking" },
                        o = Object(L.get)(n, "borderRadius", "10").match(/\d/g);
                    return o = o.join(""), Object(V.jsx)(V.Fragment, { children: Object(V.jsx)(M.a, { width: 900, visible: !1, onCancel: Object(L.get)(n, "accept_close", !0) && t, footer: null, className: "modal-new", centered: !0, closeIcon: Object(V.jsxs)(Z, { children: [Object(V.jsx)(T.a, {}), Object(V.jsx)("span", { children: "Close" })] }), children: Object(V.jsx)(i, Object(w.a)(Object(w.a)({ style: { cursor: "pointer" } }, r), {}, { children: Object(V.jsx)("img", { src: Object(L.get)(n, "img_url", ""), alt: Object(L.get)(n, "name", ""), style: { borderRadius: "".concat(o, "px") } }) })) }, "modalnew") })
                },
                _ = s.a.memo(P),
                G = t(7),
                W = t.n(G),
                K = t(58),
                Y = t(74),
                Q = t(261),
                q = t.n(Q),
                X = t(442),
                J = t.n(X);
            t(763);

            function $(e) {
                var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 3,
                    t = J.a.up(parseFloat(e), n),
                    a = +t < 0 ? "-" : "",
                    i = t.toString();
                if (!/e/i.test(i)) return t;
                var r = t.toString().replace(/^-/, "").replace(/^([0-9]+)(e.*)/, "$1.$2").split(/e|\./),
                    o = Object(j.a)(r, 3),
                    c = o[0],
                    s = o[1],
                    l = o[2];
                return +l < 0 ? a + "0." + "0".repeat(Math.max(Math.abs(l) - 1 || 0, 0)) + c + s : a + c + (+l >= s.length ? s + "0".repeat(Math.max(+l - s.length || 0, 0)) : s.slice(0, +l) + "." + s.slice(+l))
            }
            var ee = function(e, n, t, a) {
                var i = Object(L.sum)([n, t]),
                    r = e.length;
                return i >= r ? e : [e.slice(0, n), e.slice(r - t)].join(a)
            };
            var ne = t(43),
                te = (t(445), t(314));
            t(446);

            function ae(e) { return ie.apply(this, arguments) }

            function ie() {
                return (ie = Object(K.a)(W.a.mark((function e(n) {
                    var t, a, i, r, o;
                    return W.a.wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                return t = window, a = t.web3, i = 18, e.next = 4, a.eth.getBalance(n);
                            case 4:
                                return r = e.sent, e.next = 7, a.eth.net.getId();
                            case 7:
                                return o = e.sent, e.abrupt("return", { address: n, balance: $(r / "1e".concat(i), 10), decimals: i, chainId: o });
                            case 9:
                            case "end":
                                return e.stop()
                        }
                    }), e)
                })))).apply(this, arguments)
            }

            function re(e, n) { var t = window.web3; return Object(c.useMemo)((function() { if (!(null === t || void 0 === t ? void 0 : t.eth) || !e || !n) return null; try { return new t.eth.Contract(n, e) } catch (a) { return console.error("Failed to get contract", a), null } }), [t, e, n]) }
            var oe, ce, se, le, de, ue, pe, be, me, fe, he = t(198),
                ge = (t(114), t(228), t(65)),
                xe = t(81),
                je = t(88),
                Oe = (f.default.div(oe || (oe = Object(m.a)(["\n  position: relative;\n  border-radius: 24px;\n  width: 100%;\n  background: ", ";\n  border: 4px solid ", ";\n  box-shadow: 0px 20px 36px -8px rgba(14, 14, 44, 0.1), 0px 1px 1px rgba(0, 0, 0, 0.05);\n  z-index: ", ";\n  // overflow-y: auto;\n  ", " {\n    width: auto;\n    min-width: 420px;\n    max-width: 100%;\n  }\n"])), (function(e) { return e.theme.modal.background }), (function(e) { return e.theme.colors.borderColor }), (function(e) { return e.theme.zIndices.modal }), (function(e) { return e.theme.mediaQueries.xs })), f.default.div(ce || (ce = Object(m.a)(["\n  display: flex;\n  align-items: center;\n  // border-bottom: 1px solid #e9eaeb;\n  padding: 12px 24px;\n"]))), Object(f.default)(ge.a)(se || (se = Object(m.a)(["\n  align-items: center;\n  flex: 1;\n"]))), f.default.div(le || (le = Object(m.a)(["\n  position: absolute;\n  top: -25px;\n  right: 8px;\n"]))), f.default.div(de || (de = Object(m.a)(["\n  width: auto;\n  height: 100%;\n  max-width: 444px;\n  max-height: 456px;\n  position: relative;\n  padding: 0 15px;\n  z-index: ", ";\n"])), (function(e) { return e.theme.zIndices.modal })), f.default.div(ue || (ue = Object(m.a)(["\n  width: 100%;\n  height: 100%;\n  background-image: url(/images/bulletin/vero-contract.png);\n  background-size: contain;\n  background-repeat: no-repeat;\n\n  .modal-content {\n    padding: 82px 54px 186px;\n\n    @media screen and (min-width: 375px) {\n      padding: 100px 54px 120px;\n    }\n \n    @media screen and (min-width: 575px) {\n      padding: 120px 54px 80px;\n    }\n  }\n"]))), f.default.div(pe || (pe = Object(m.a)(["\n  display: flex;\n  align-items: center;\n  padding: 12px 24px;\n"]))), Object(f.default)(ge.a)(be || (be = Object(m.a)(["\n  align-items: center;\n  flex: 1;\n"]))), f.default.div(me || (me = Object(m.a)(["\n  position: absolute;\n  top: -18px;\n  right: 36px;\n"]))), f.default.div.attrs({ role: "presentation" })(fe || (fe = Object(m.a)(["\n  position: fixed;\n  top: 0px;\n  left: 0px;\n  width: 100%;\n  height: 100%;\n\n  background: #DBE133;\n  backdrop-filter: blur(4px);\n\n  transition: background 0.4s ease-in-out, opacity 0.4s ease-in-out;\n\n  opacity: ", ";\n  z-index: ", ";\n  pointer-events: ", ";\n"])), (function(e) {
                    var n = e.show,
                        t = e.opacity;
                    return n ? t || .6 : 0
                }), (function(e) { return e.zIndex }), (function(e) { return e.show ? "initial" : "none" })));
            Oe.defaultProps = { show: !1, zIndex: 10 };
            var ye, Ce, ve = Oe,
                we = f.default.div(ye || (ye = Object(m.a)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  position: fixed;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  z-index: ", ";\n"])), (function(e) { return e.theme.zIndices.modal - 1 })),
                ke = Object(c.createContext)({ onPresent: function() { return null }, onDismiss: function() { return null }, setCloseOnOverlayClick: function() { return !0 } }),
                Te = function(e) {
                    var n = e.children,
                        t = Object(c.useState)(!1),
                        a = Object(j.a)(t, 2),
                        i = a[0],
                        r = a[1],
                        o = Object(c.useState)(),
                        l = Object(j.a)(o, 2),
                        d = l[0],
                        u = l[1],
                        p = Object(c.useState)(!0),
                        b = Object(j.a)(p, 2),
                        m = b[0],
                        f = b[1],
                        h = function() { u(void 0), r(!1) };
                    return Object(V.jsxs)(ke.Provider, { value: { onPresent: function(e) { u(e), r(!0) }, onDismiss: h, setCloseOnOverlayClick: f }, children: [i && Object(V.jsxs)(we, { children: [Object(V.jsx)(ve, { show: !0, onClick: function() { m && h() } }), s.a.isValidElement(d) && s.a.cloneElement(d, { onDismiss: h })] }), n] })
                },
                Me = t(86),
                Le = t(107),
                Ie = t(13),
                Ne = function(e) { return Object(V.jsxs)(Ie.a, Object(w.a)(Object(w.a)({ viewBox: "0 0 96 96" }, e), {}, { children: [Object(V.jsx)("circle", { cx: "48", cy: "48", r: "48", fill: "white" }), Object(V.jsx)("path", { d: "M77.7602 16.9155L51.9419 36.0497L56.7382 24.7733L77.7602 16.9155Z", fill: "#E17726" }), Object(V.jsx)("path", { d: "M18.2656 16.9155L43.8288 36.2283L39.2622 24.7733L18.2656 16.9155Z", fill: "#E27625" }), Object(V.jsx)("path", { d: "M68.4736 61.2808L61.6108 71.7918L76.3059 75.8482L80.4899 61.5104L68.4736 61.2808Z", fill: "#E27625" }), Object(V.jsx)("path", { d: "M15.5356 61.5104L19.6941 75.8482L34.3892 71.7918L27.5519 61.2808L15.5356 61.5104Z", fill: "#E27625" }), Object(V.jsx)("path", { d: "M33.5984 43.5251L29.491 49.699L44.0584 50.3624L43.5482 34.6724L33.5984 43.5251Z", fill: "#E27625" }), Object(V.jsx)("path", { d: "M62.4274 43.525L52.2991 34.4937L51.9419 50.3622L66.5094 49.6989L62.4274 43.525Z", fill: "#E27625" }), Object(V.jsx)("path", { d: "M34.3892 71.7922L43.1654 67.5316L35.6137 61.6128L34.3892 71.7922Z", fill: "#E27625" }), Object(V.jsx)("path", { d: "M52.8345 67.5316L61.6107 71.7922L60.3861 61.6128L52.8345 67.5316Z", fill: "#E27625" }), Object(V.jsx)("path", { d: "M61.6107 71.7923L52.8345 67.5317L53.5233 73.2465L53.4468 75.6446L61.6107 71.7923Z", fill: "#D5BFB2" }), Object(V.jsx)("path", { d: "M34.3892 71.7923L42.5531 75.6446L42.502 73.2465L43.1654 67.5317L34.3892 71.7923Z", fill: "#D5BFB2" }), Object(V.jsx)("path", { d: "M42.7062 57.8369L35.4097 55.6939L40.5631 53.3213L42.7062 57.8369Z", fill: "#233447" }), Object(V.jsx)("path", { d: "M53.2937 57.8369L55.4367 53.3213L60.6412 55.6939L53.2937 57.8369Z", fill: "#233447" }), Object(V.jsx)("path", { d: "M34.3893 71.7918L35.6649 61.2808L27.552 61.5104L34.3893 71.7918Z", fill: "#CC6228" }), Object(V.jsx)("path", { d: "M60.3352 61.2808L61.6108 71.7918L68.4736 61.5104L60.3352 61.2808Z", fill: "#CC6228" }), Object(V.jsx)("path", { d: "M66.5094 49.6987L51.9419 50.362L53.294 57.8371L55.4371 53.3215L60.6416 55.6941L66.5094 49.6987Z", fill: "#CC6228" }), Object(V.jsx)("path", { d: "M35.4098 55.6941L40.5633 53.3215L42.7063 57.8371L44.0584 50.362L29.491 49.6987L35.4098 55.6941Z", fill: "#CC6228" }), Object(V.jsx)("path", { d: "M29.491 49.6987L35.6139 61.6129L35.4098 55.6941L29.491 49.6987Z", fill: "#E27525" }), Object(V.jsx)("path", { d: "M60.6414 55.6941L60.3862 61.6129L66.5092 49.6987L60.6414 55.6941Z", fill: "#E27525" }), Object(V.jsx)("path", { d: "M44.0584 50.3618L42.7063 57.8369L44.4156 66.6641L44.7728 55.0305L44.0584 50.3618Z", fill: "#E27525" }), Object(V.jsx)("path", { d: "M51.9415 50.3618L51.2527 55.005L51.5843 66.6641L53.2937 57.8369L51.9415 50.3618Z", fill: "#E27525" }), Object(V.jsx)("path", { d: "M53.2938 57.8374L51.5845 66.6646L52.8346 67.532L60.3862 61.6132L60.6413 55.6943L53.2938 57.8374Z", fill: "#F5841F" }), Object(V.jsx)("path", { d: "M35.4097 55.6943L35.6138 61.6132L43.1654 67.532L44.4155 66.6646L42.7062 57.8374L35.4097 55.6943Z", fill: "#F5841F" }), Object(V.jsx)("path", { d: "M53.4468 75.6443L53.5233 73.2462L52.8855 72.6849H43.1143L42.502 73.2462L42.5531 75.6443L34.3892 71.792L37.2465 74.1391L43.0378 78.1445H52.962L58.7533 74.1391L61.6107 71.792L53.4468 75.6443Z", fill: "#C0AC9D" }), Object(V.jsx)("path", { d: "M52.8346 67.5315L51.5845 66.6641H44.4156L43.1655 67.5315L42.5022 73.2462L43.1145 72.6849H52.8857L53.5235 73.2462L52.8346 67.5315Z", fill: "#161616" }), Object(V.jsx)("path", { d: "M78.8314 37.2998L80.9999 26.7377L77.7599 16.9155L52.8345 35.4119L62.4271 43.5247L75.9485 47.4791L78.9335 43.984L77.6323 43.04L79.7243 41.1521L78.1426 39.902L80.2091 38.3458L78.8314 37.2998Z", fill: "#763E1A" }), Object(V.jsx)("path", { d: "M15 26.7377L17.194 37.2998L15.7909 38.3458L17.8574 39.902L16.2756 41.1521L18.3676 43.04L17.0665 43.984L20.0514 47.4791L33.5984 43.5247L43.1655 35.4119L18.2656 16.9155L15 26.7377Z", fill: "#763E1A" }), Object(V.jsx)("path", { d: "M75.9487 47.4793L62.4272 43.5249L66.5092 49.6989L60.3862 61.613L68.4736 61.511H80.4898L75.9487 47.4793Z", fill: "#F5841F" }), Object(V.jsx)("path", { d: "M33.5983 43.5249L20.0513 47.4793L15.5356 61.511H27.5519L35.6137 61.613L29.4908 49.6989L33.5983 43.5249Z", fill: "#F5841F" }), Object(V.jsx)("path", { d: "M51.9415 50.3617L52.8344 35.4115L56.7378 24.7729H39.262L43.1653 35.4115L44.0583 50.3617L44.3899 55.0559L44.4154 66.664H51.5843L51.6099 55.0559L51.9415 50.3617Z", fill: "#F5841F" })] })) },
                Ae = function(e) { return Object(V.jsxs)(Ie.a, Object(w.a)(Object(w.a)({ viewBox: "0 0 96 96" }, e), {}, { children: [Object(V.jsxs)("g", { clipPath: "url(#clip0)", children: [Object(V.jsx)("path", { d: "M48.0048 96.0097C74.5172 96.0097 96.0097 74.5172 96.0097 48.0048C96.0097 21.4925 74.5172 0 48.0048 0C21.4925 0 0 21.4925 0 48.0048C0 74.5172 21.4925 96.0097 48.0048 96.0097Z", fill: "#3375BB" }), Object(V.jsx)("path", { d: "M48.0048 22.8922L49.3179 21.1833C48.9399 20.8928 48.4766 20.7354 48 20.7354C47.5233 20.7354 47.06 20.8928 46.682 21.1833L48.0048 22.8922ZM70.5783 29.5252H72.7313C72.7352 29.2396 72.6824 28.9561 72.576 28.6909C72.4696 28.4258 72.3118 28.1844 72.1116 27.9806C71.9114 27.7769 71.6729 27.6148 71.4097 27.5037C71.1465 27.3926 70.8639 27.3348 70.5783 27.3335V29.5252ZM48.0048 75.6377L46.8076 77.4335C47.1604 77.6697 47.5754 77.7958 48 77.7958C48.4245 77.7958 48.8395 77.6697 49.1924 77.4335L48.0048 75.6377ZM25.4506 29.5252V27.3625C25.165 27.3638 24.8824 27.4216 24.6192 27.5327C24.356 27.6437 24.1175 27.8058 23.9173 28.0096C23.7171 28.2134 23.5593 28.4548 23.4529 28.7199C23.3465 28.985 23.2937 29.2686 23.2976 29.5542L25.4506 29.5252ZM46.6917 24.5915C56.4626 32.1611 67.6528 31.6783 70.5879 31.6783V27.3625C67.5466 27.3625 57.8047 27.7487 49.3468 21.1833L46.6917 24.5915ZM68.4348 29.4866C68.2707 39.4892 67.8459 46.5471 67.0349 51.7704C66.2238 56.9938 65.1039 60.0448 63.6266 62.2268C62.1494 64.4089 60.257 65.8282 57.486 67.4792C54.715 69.1302 51.1716 70.9646 46.8076 73.8515L49.2406 77.4335C53.373 74.6818 56.8102 72.9246 59.7357 71.1771C62.6835 69.5717 65.2416 67.3367 67.228 64.6309C69.159 61.7344 70.4817 57.8724 71.3314 52.427C72.181 46.9815 72.6155 39.6534 72.7796 29.5542L68.4348 29.4866ZM49.2406 73.8515C44.9055 70.955 41.3718 69.1592 38.6201 67.4888C35.8684 65.8185 33.976 64.4861 32.4892 62.2268C31.0023 59.9676 29.7954 56.9648 28.9651 51.7704C28.1347 46.576 27.7678 39.4892 27.6037 29.4866L23.2976 29.5542C23.4617 39.6534 23.9058 47.0009 24.7458 52.427C25.5858 57.8531 26.8699 61.7151 28.8395 64.6309C30.8164 67.3382 33.3686 69.5739 36.3125 71.1771C39.2091 72.9246 42.6752 74.6818 46.8076 77.4335L49.2406 73.8515ZM25.4506 31.6783C28.3471 31.6783 39.547 32.1611 49.3179 24.5915L46.682 21.1833C38.2049 27.7487 28.463 27.3625 25.441 27.3625L25.4506 31.6783Z", fill: "white" })] }), Object(V.jsx)("defs", { children: Object(V.jsx)("clipPath", { id: "clip0", children: Object(V.jsx)("rect", { width: "96", height: "96", fill: "white" }) }) })] })) };
            ! function(e) { e.Injected = "injected", e.WalletConnect = "walletconnect", e.BSC = "bsc" }(Ce || (Ce = {}));
            Ce.Injected, Ce.Injected;
            var Ee, Se, Fe, Re = "connectorId",
                Be = (t(237), t(37)),
                De = (Object(f.default)(Le.a).attrs({ role: "button" })(Ee || (Ee = Object(m.a)(["\n  position: relative;\n  display: flex;\n  align-items: center;\n  color: ", ";\n"])), (function(e) { return e.theme.colors.textSubtle })), f.default.div(Se || (Se = Object(m.a)(["\n  display: ", ";\n  position: absolute;\n  bottom: -22px;\n  right: 0;\n  left: 0;\n  text-align: center;\n  background-color: ", ";\n  color: ", ";\n  border-radius: 16px;\n  opacity: 0.7;\n"])), (function(e) { return e.isTooltipDisplayed ? "block" : "none" }), (function(e) { return e.theme.colors.contrast }), (function(e) { return e.theme.colors.textSubtle })), t(26)),
                Ue = t(306),
                He = t(199),
                ze = t(200),
                Ve = t(448),
                Ze = t(250),
                Pe = t(15),
                _e = t(201),
                Ge = t(12),
                We = t(17),
                Ke = t(18),
                Ye = t(467),
                Qe = t(117),
                qe = t(22),
                Xe = function(e) {
                    Object(We.a)(t, e);
                    var n = Object(Ke.a)(t);

                    function t(e, a, i) { var r; return Object(Ge.a)(this, t), (r = n.call(this, e)).code = a, r.data = i, r }
                    return t
                }(Object(Ye.a)(Error)),
                Je = function e(n, t, a) {
                    var i = this;
                    Object(Ge.a)(this, e), this.isMetaMask = !1, this.chainId = void 0, this.url = void 0, this.host = void 0, this.path = void 0, this.batchWaitTimeMs = void 0, this.nextId = 1, this.batchTimeoutId = null, this.batch = [], this.clearBatch = Object(K.a)(W.a.mark((function e() {
                        var n, t, a, r, o, c, s, l, d, u, p, b, m, f;
                        return W.a.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return n = i.batch, i.batch = [], i.batchTimeoutId = null, e.prev = 3, e.next = 6, fetch(i.url, { method: "POST", headers: { "content-type": "application/json", accept: "application/json" }, body: JSON.stringify(n.map((function(e) { return e.request }))) });
                                case 6:
                                    t = e.sent, e.next = 13;
                                    break;
                                case 9:
                                    return e.prev = 9, e.t0 = e.catch(3), n.forEach((function(e) { return (0, e.reject)(new Error("Failed to send batch call")) })), e.abrupt("return");
                                case 13:
                                    if (t.ok) { e.next = 16; break }
                                    return n.forEach((function(e) { return (0, e.reject)(new Xe("".concat(t.status, ": ").concat(t.statusText), -32e3)) })), e.abrupt("return");
                                case 16:
                                    return e.prev = 16, e.next = 19, t.json();
                                case 19:
                                    a = e.sent, e.next = 26;
                                    break;
                                case 22:
                                    return e.prev = 22, e.t1 = e.catch(16), n.forEach((function(e) { return (0, e.reject)(new Error("Failed to parse JSON response")) })), e.abrupt("return");
                                case 26:
                                    r = n.reduce((function(e, n) { return e[n.request.id] = n, e }), {}), o = Object(_e.a)(a);
                                    try { for (o.s(); !(c = o.n()).done;) s = c.value, l = r[s.id], d = l.resolve, u = l.reject, p = l.request.method, "error" in s ? u(new Xe(null === s || void 0 === s || null === (b = s.error) || void 0 === b ? void 0 : b.message, null === s || void 0 === s || null === (m = s.error) || void 0 === m ? void 0 : m.code, null === s || void 0 === s || null === (f = s.error) || void 0 === f ? void 0 : f.data)) : "result" in s ? d(s.result) : u(new Xe("Received unexpected JSON-RPC response to ".concat(p, " request."), -32e3, s)) } catch (h) { o.e(h) } finally { o.f() }
                                case 29:
                                case "end":
                                    return e.stop()
                            }
                        }), e, null, [
                            [3, 9],
                            [16, 22]
                        ])
                    }))), this.sendAsync = function(e, n) { i.request(e.method, e.params).then((function(t) { return n(null, { jsonrpc: "2.0", id: e.id, result: t }) })).catch((function(e) { return n(e, null) })) }, this.request = function() {
                        var e = Object(K.a)(W.a.mark((function e(n, t) {
                            var a, r;
                            return W.a.wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        if ("string" === typeof n) { e.next = 2; break }
                                        return e.abrupt("return", i.request(n.method, n.params));
                                    case 2:
                                        if ("eth_chainId" !== n) { e.next = 4; break }
                                        return e.abrupt("return", "0x".concat(i.chainId.toString(16)));
                                    case 4:
                                        return r = new Promise((function(e, a) { i.batch.push({ request: { jsonrpc: "2.0", id: i.nextId++, method: n, params: t }, resolve: e, reject: a }) })), i.batchTimeoutId = null !== (a = i.batchTimeoutId) && void 0 !== a ? a : setTimeout(i.clearBatch, i.batchWaitTimeMs), e.abrupt("return", r);
                                    case 7:
                                    case "end":
                                        return e.stop()
                                }
                            }), e)
                        })));
                        return function(n, t) { return e.apply(this, arguments) }
                    }(), this.chainId = n, this.url = t;
                    var r = new URL(t);
                    this.host = r.host, this.path = r.pathname, this.batchWaitTimeMs = null !== a && void 0 !== a ? a : 50
                },
                $e = function(e) {
                    Object(We.a)(t, e);
                    var n = Object(Ke.a)(t);

                    function t(e) {
                        var a, i = e.urls,
                            r = e.defaultChainId;
                        return Object(Ge.a)(this, t), Object(qe.a)(r || 1 === Object.keys(i).length, "defaultChainId is a required argument with >1 url"), (a = n.call(this, { supportedChainIds: Object.keys(i).map((function(e) { return Number(e) })) })).providers = void 0, a.currentChainId = void 0, a.currentChainId = r || Number(Object.keys(i)[0]), a.providers = Object.keys(i).reduce((function(e, n) { return e[Number(n)] = new Je(Number(n), i[Number(n)]), e }), {}), a
                    }
                    return Object(Pe.a)(t, [{ key: "provider", get: function() { return this.providers[this.currentChainId] } }, {
                        key: "activate",
                        value: function() {
                            var e = Object(K.a)(W.a.mark((function e() {
                                return W.a.wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return e.abrupt("return", { provider: this.providers[this.currentChainId], chainId: this.currentChainId, account: null });
                                        case 1:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e, this)
                            })));
                            return function() { return e.apply(this, arguments) }
                        }()
                    }, {
                        key: "getProvider",
                        value: function() {
                            var e = Object(K.a)(W.a.mark((function e() {
                                return W.a.wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return e.abrupt("return", this.providers[this.currentChainId]);
                                        case 1:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e, this)
                            })));
                            return function() { return e.apply(this, arguments) }
                        }()
                    }, {
                        key: "getChainId",
                        value: function() {
                            var e = Object(K.a)(W.a.mark((function e() {
                                return W.a.wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return e.abrupt("return", this.currentChainId);
                                        case 1:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e, this)
                            })));
                            return function() { return e.apply(this, arguments) }
                        }()
                    }, {
                        key: "getAccount",
                        value: function() {
                            var e = Object(K.a)(W.a.mark((function e() {
                                return W.a.wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return e.abrupt("return", null);
                                        case 1:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e)
                            })));
                            return function() { return e.apply(this, arguments) }
                        }()
                    }, { key: "deactivate", value: function() { return null } }]), t
                }(Qe.AbstractConnector),
                en = "https://bsc-dataseed1.defibit.io",
                nn = parseInt(("56", "56"));
            var tn = new $e({ urls: Object(De.a)({}, nn, en) });
            var an = new He.a({ supportedChainIds: [56, 97] }),
                rn = new Ze.BscConnector({ supportedChainIds: [56] }),
                on = new ze.b({ rpc: Object(De.a)({}, nn, en), bridge: "https://bridge.walletconnect.org", qrcode: !0, pollingInterval: 15e3 }),
                cn = (new Ve.a({ url: en, appName: "Uniswap", appLogoUrl: "https://mpng.pngfly.com/20181202/bex/kisspng-emoji-domain-unicorn-pin-badges-sticker-unicorn-tumblr-emoji-unicorn-iphoneemoji-5c046729264a77.5671679315437924251569.jpg" }), Fe = {}, Object(De.a)(Fe, Ce.Injected, an), Object(De.a)(Fe, Ce.WalletConnect, on), Object(De.a)(Fe, Ce.BSC, rn), Fe);

            function sn() {
                var e = Object(Y.d)(),
                    n = Object(Y.d)(ne.h);
                return e.active ? e : n
            }

            function ln() { return Object(k.c)((function(e) { return e.application.byAccount })) }

            function dn() { var e = Object(k.b)(); return Object(c.useCallback)((function(n) { e(D({ key: n })) }), [e]) }
            var un = function(e) { return new Promise((function(n) { return setTimeout(n, e) })) };

            function pn() {
                var e = Object(k.b)(),
                    n = Object(Y.d)().account;
                Object(c.useEffect)((function() { e(H(n)) }), [n, e]);
                var t = Object(c.useReducer)((function(e) { return e + 1 }), 0),
                    a = Object(j.a)(t, 2)[1],
                    i = Object(c.useState)(!1),
                    r = Object(j.a)(i, 2),
                    o = r[0],
                    s = r[1],
                    l = ln(),
                    d = function() { return re(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ne.l, te) }(ne.a.address),
                    u = Object(c.useCallback)(Object(K.a)(W.a.mark((function n() {
                        var t, i;
                        return W.a.wrap((function(n) {
                            for (;;) switch (n.prev = n.next) {
                                case 0:
                                    if (!l || (null === d || void 0 === d ? void 0 : d.methods)) { n.next = 4; break }
                                    return a(), n.next = 4, un(1e3);
                                case 4:
                                    if (!l || !d) { n.next = 19; break }
                                    return i = {}, n.prev = 6, n.next = 9, ae(l);
                                case 9:
                                    if (t = n.sent, !d) { n.next = 13; break }
                                    return n.next = 13, Promise.all([d.methods.balanceOf(l).call(), d.methods.symbol().call(), d.methods.name().call(), d.methods.decimals().call()]).then((function(e) {
                                        var n = Object(j.a)(e, 4),
                                            t = n[0],
                                            a = n[1],
                                            r = n[2],
                                            o = n[3];
                                        i[d._address] = { balance: t / +"1e".concat(o), symbol: a, name: r, decimals: o, address: d._address }
                                    }));
                                case 13:
                                    e(N({ byAccount: l, data: Object(w.a)(Object(w.a)({}, t), {}, { mainToken: Object(w.a)({}, (null === i || void 0 === i ? void 0 : i[ne.a.address]) || {}), assets: i }) })), n.next = 19;
                                    break;
                                case 16:
                                    n.prev = 16, n.t0 = n.catch(6), console.error("E0001", n.t0);
                                case 19:
                                case "end":
                                    return n.stop()
                            }
                        }), n, null, [
                            [6, 16]
                        ])
                    }))), [l, d, e]),
                    p = Object(c.useCallback)(Object(K.a)(W.a.mark((function e() {
                        return W.a.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    if (window.ethereum ? (window.web3 = new q.a(window.ethereum), !0) : window.web3 ? (window.web3 = new q.a(window.web3.currentProvider), !0) : window.BinanceChain ? (window.web3 = new q.a(window.BinanceChain), !0) : null) { e.next = 7; break }
                                    return a(), e.next = 5, un(1e3);
                                case 5:
                                    e.next = 8;
                                    break;
                                case 7:
                                    s(!0);
                                case 8:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    }))), []);
                Object(c.useEffect)((function() { o ? u() : p() }), [p, o]),
                    function(e, n) {
                        var t = Object(c.useRef)();
                        Object(c.useEffect)((function() { t.current = e }), [e]), Object(c.useEffect)((function() { if (null !== n) { var e = setInterval((function() { t.current() }), n); return function() { return clearInterval(e) } } }), [n])
                    }(Object(K.a)(W.a.mark((function e() {
                        return W.a.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    o && u();
                                case 1:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    }))), 2e3)
            }
            var bn = new(t(449).a);
            var mn, fn, hn, gn, xn = t(256),
                jn = ["size", "stroke"],
                On = Object(f.keyframes)(mn || (mn = Object(m.a)(["\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n"]))),
                yn = f.default.svg(fn || (fn = Object(m.a)(["\n  animation: 2s ", " linear infinite;\n  height: ", ";\n  width: ", ";\n  path {\n    stroke: ", ";\n  }\n"])), On, (function(e) { return e.size }), (function(e) { return e.size }), (function(e) {
                    var n = e.stroke,
                        t = e.theme;
                    return null !== n && void 0 !== n ? n : t.colors.primary
                }));

            function Cn(e) {
                var n = e.size,
                    t = void 0 === n ? "16px" : n,
                    a = e.stroke,
                    i = Object(Be.a)(e, jn);
                return Object(V.jsx)(yn, Object(w.a)(Object(w.a)({ viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", size: t, stroke: a }, i), {}, { children: Object(V.jsx)("path", { d: "M12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 9.27455 20.9097 6.80375 19.1414 5", strokeWidth: "2.5", strokeLinecap: "round", strokeLinejoin: "round" }) }))
            }
            var vn = f.default.div(hn || (hn = Object(m.a)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  height: 20rem;\n"]))),
                wn = f.default.h2(gn || (gn = Object(m.a)(["\n  color: ", ";\n"])), (function(e) { return e.theme.colors.primaryDark }));

            function kn(e) {
                var n = e.children,
                    t = Object(xn.b)().t,
                    a = Object(Y.d)().active,
                    i = Object(Y.d)(ne.h),
                    r = i.active,
                    o = i.error,
                    s = i.activate,
                    l = function() {
                        var e = Object(Y.d)(),
                            n = e.activate,
                            t = e.active,
                            a = Object(c.useState)(!1),
                            i = Object(j.a)(a, 2),
                            r = i[0],
                            o = i[1];
                        return Object(c.useEffect)((function() {
                            an.isAuthorized().then((function(e) {
                                var t = window.localStorage.getItem(Re);
                                e && t || he.isMobile && window.ethereum && t ? n(an, void 0, !0).catch((function() { o(!0) })) : o(!0)
                            }))
                        }), [n]), Object(c.useEffect)((function() { t && o(!0) }), [t]), r
                    }();
                Object(c.useEffect)((function() {!l || r || o || a || s(tn) }), [l, r, o, s, a]),
                    function() {
                        var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
                            n = Object(Y.d)(),
                            t = n.active,
                            a = n.error,
                            i = n.activate;
                        Object(c.useEffect)((function() {
                            var n = window.ethereum;
                            if (n && n.on && !t && !a && !e) {
                                var r = function() { i(an, void 0, !0).catch((function(e) { console.error("Failed to activate after chain changed", e) })) },
                                    o = function(e) { e.length > 0 && i(an, void 0, !0).catch((function(e) { console.error("Failed to activate after accounts changed", e) })) };
                                return n.on("chainChanged", r), n.on("accountsChanged", o),
                                    function() { n.removeListener && (n.removeListener("chainChanged", r), n.removeListener("accountsChanged", o)) }
                            }
                        }), [t, a, e, i])
                    }(!l);
                var d = Object(c.useState)(!1),
                    u = Object(j.a)(d, 2),
                    p = u[0],
                    b = u[1];
                return Object(c.useEffect)((function() { var e = setTimeout((function() { b(!0) }), 600); return function() { clearTimeout(e) } }), []), l ? !a && o ? Object(V.jsx)(vn, { children: Object(V.jsx)(wn, { children: t("unknownError") }) }) : a || r ? n : p ? Object(V.jsx)(vn, { children: Object(V.jsx)(Cn, {}) }) : null : null
            }
            var Tn, Mn = { xs: 370, sm: 576, md: 852, lg: 968, xl: 1080 },
                Ln = { level1: "0px 2px 12px -8px rgba(25, 19, 38, 0.1), 0px 1px 1px rgba(25, 19, 38, 0.05)", active: "0px 0px 0px 1px #0098A1, 0px 0px 4px 8px rgba(31, 199, 212, 0.4)", success: "0px 0px 0px 1px #31D0AA, 0px 0px 0px 4px rgba(49, 208, 170, 0.2)", warning: "0px 0px 0px 1px #ED4B9E, 0px 0px 0px 4px rgba(237, 75, 158, 0.2)", focus: "0px 0px 0px 1px #7645D9, 0px 0px 0px 4px rgba(118, 69, 217, 0.6)", inset: "inset 0px 2px 2px -1px rgba(74, 74, 104, 0.1)" },
                In = { siteWidth: 1200, breakpoints: Object.values(Mn).map((function(e) { return "".concat(e, "px") })), mediaQueries: { xs: "@media screen and (min-width: ".concat(Mn.xs, "px)"), sm: "@media screen and (min-width: ".concat(Mn.sm, "px)"), md: "@media screen and (min-width: ".concat(Mn.md, "px)"), lg: "@media screen and (min-width: ".concat(Mn.lg, "px)"), xl: "@media screen and (min-width: ".concat(Mn.xl, "px)"), nav: "@media screen and (min-width: ".concat(Mn.lg, "px)") }, spacing: [0, 4, 8, 16, 24, 32, 48, 64], shadows: Ln, radii: { small: "4px", default: "16px", card: "32px", circle: "50%" }, zIndices: { dropdown: 10, modal: 100 } },
                Nn = function() {
                    var e = 0;
                    return Object.keys(Mn).reduce((function(n, t, a) {
                        if (a === Object.keys(Mn).length - 1) return Object(w.a)(Object(w.a)({}, n), {}, Object(De.a)({}, t, "(min-width: ".concat(e, "px)")));
                        var i = e,
                            r = Mn[t];
                        return e = r + 1, Object(w.a)(Object(w.a)({}, n), {}, Object(De.a)({}, t, "(min-width: ".concat(i, "px) and (max-width: ").concat(r, "px)")))
                    }), {})
                }(),
                An = function(e) { return "is".concat(e.charAt(0).toUpperCase()).concat(e.slice(1)) },
                En = function() {
                    var e = Object(c.useState)((function() {
                            return Object.keys(Nn).reduce((function(e, n) {
                                var t = An(n),
                                    a = window.matchMedia(Nn[n]);
                                return Object(w.a)(Object(w.a)({}, e), {}, Object(De.a)({}, t, a.matches))
                            }), {})
                        })),
                        n = Object(j.a)(e, 2),
                        t = n[0],
                        a = n[1];
                    return Object(c.useEffect)((function() {
                        var e = Object.keys(Nn).map((function(e) {
                            var n = window.matchMedia(Nn[e]),
                                t = function(n) {
                                    var t = An(e);
                                    a((function(e) { return Object(w.a)(Object(w.a)({}, e), {}, Object(De.a)({}, t, n.matches)) }))
                                };
                            return n.addEventListener && n.addEventListener("change", t),
                                function() { n.removeEventListener && n.removeEventListener("change", t) }
                        }));
                        return function() { e.forEach((function(e) { e() })) }
                    }), [a]), t
                },
                Sn = function(e) { return Object(V.jsxs)(Ie.a, Object(w.a)(Object(w.a)({ viewBox: "0 0 24 24" }, e), {}, { children: [Object(V.jsx)("path", { d: "M13.7803 2.71967C14.0732 3.01256 14.0732 3.48744 13.7803 3.78033L12.8107 4.75L14.0307 5.96999H20C21.1 5.96999 22 6.86999 22 7.96999V12.73C21.28 12.25 20.43 11.97 19.5 11.97C17.19 11.97 15.3 13.73 15.05 15.97H11.91C11.96 15.64 12 15.31 12 14.97C12 13.43 11.41 12.03 10.46 10.97H11C12.1 10.97 13 10.07 13 8.96999V7.06068L11.75 5.81066L10.7803 6.78033C10.4874 7.07322 10.0126 7.07322 9.71967 6.78033C9.42678 6.48744 9.42678 6.01256 9.71967 5.71967L12.7197 2.71967C13.0126 2.42678 13.4874 2.42678 13.7803 2.71967Z" }), Object(V.jsx)("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M11 15C11 17.7614 8.76142 20 6 20C3.23858 20 1 17.7614 1 15C1 12.2386 3.23858 10 6 10C8.76142 10 11 12.2386 11 15ZM9 15C9 16.6569 7.65685 18 6 18C4.34315 18 3 16.6569 3 15C3 13.3431 4.34315 12 6 12C7.65685 12 9 13.3431 9 15Z" }), Object(V.jsx)("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M19.5 12.97C17.57 12.97 16 14.54 16 16.47C16 18.4 17.57 19.97 19.5 19.97C21.43 19.97 23 18.4 23 16.47C23 14.54 21.43 12.97 19.5 12.97ZM19.5 17.97C18.67 17.97 18 17.3 18 16.47C18 15.64 18.67 14.97 19.5 14.97C20.33 14.97 21 15.64 21 16.47C21 17.3 20.33 17.97 19.5 17.97Z" }), Object(V.jsx)("path", { d: "M9 8.96997H4C3.45 8.96997 3 8.52997 3 7.96997C3 7.41997 3.45 6.96997 4 6.96997H7C8.1 6.96997 9 7.86997 9 8.96997Z" })] })) },
                Fn = function(e) { return Object(V.jsx)(Ie.a, Object(w.a)(Object(w.a)({ viewBox: "0 0 24 24" }, e), {}, { children: Object(V.jsx)("path", { d: "M12 12.75C13.63 12.75 15.07 13.14 16.24 13.65C17.32 14.13 18 15.21 18 16.38V17C18 17.55 17.55 18 17 18H7C6.45 18 6 17.55 6 17V16.39C6 15.21 6.68 14.13 7.76 13.66C8.93 13.14 10.37 12.75 12 12.75ZM4 13C5.1 13 6 12.1 6 11C6 9.9 5.1 9 4 9C2.9 9 2 9.9 2 11C2 12.1 2.9 13 4 13ZM5.13 14.1C4.76 14.04 4.39 14 4 14C3.01 14 2.07 14.21 1.22 14.58C0.48 14.9 0 15.62 0 16.43V17C0 17.55 0.45 18 1 18H4.5V16.39C4.5 15.56 4.73 14.78 5.13 14.1ZM20 13C21.1 13 22 12.1 22 11C22 9.9 21.1 9 20 9C18.9 9 18 9.9 18 11C18 12.1 18.9 13 20 13ZM24 16.43C24 15.62 23.52 14.9 22.78 14.58C21.93 14.21 20.99 14 20 14C19.61 14 19.24 14.04 18.87 14.1C19.27 14.78 19.5 15.56 19.5 16.39V18H23C23.55 18 24 17.55 24 17V16.43ZM12 6C13.66 6 15 7.34 15 9C15 10.66 13.66 12 12 12C10.34 12 9 10.66 9 9C9 7.34 10.34 6 12 6Z" }) })) },
                Rn = function(e) { return Object(V.jsx)(Ie.a, Object(w.a)(Object(w.a)({ viewBox: "0 0 24 24" }, e), {}, { children: Object(V.jsx)("path", { d: "M4 18H20C20.55 18 21 17.55 21 17C21 16.45 20.55 16 20 16H4C3.45 16 3 16.45 3 17C3 17.55 3.45 18 4 18ZM4 13H20C20.55 13 21 12.55 21 12C21 11.45 20.55 11 20 11H4C3.45 11 3 11.45 3 12C3 12.55 3.45 13 4 13ZM3 7C3 7.55 3.45 8 4 8H20C20.55 8 21 7.55 21 7C21 6.45 20.55 6 20 6H4C3.45 6 3 6.45 3 7Z" }) })) },
                Bn = function(e) { return Object(V.jsx)(Ie.a, Object(w.a)(Object(w.a)({ viewBox: "0 0 24 24" }, e), {}, { children: Object(V.jsx)("path", { d: "M4 18H15C15.55 18 16 17.55 16 17C16 16.45 15.55 16 15 16H4C3.45 16 3 16.45 3 17C3 17.55 3.45 18 4 18ZM4 13H12C12.55 13 13 12.55 13 12C13 11.45 12.55 11 12 11H4C3.45 11 3 11.45 3 12C3 12.55 3.45 13 4 13ZM3 7C3 7.55 3.45 8 4 8H15C15.55 8 16 7.55 16 7C16 6.45 15.55 6 15 6H4C3.45 6 3 6.45 3 7ZM20.3 14.88L17.42 12L20.3 9.12C20.69 8.73 20.69 8.1 20.3 7.71C19.91 7.32 19.28 7.32 18.89 7.71L15.3 11.3C14.91 11.69 14.91 12.32 15.3 12.71L18.89 16.3C19.28 16.69 19.91 16.69 20.3 16.3C20.68 15.91 20.69 15.27 20.3 14.88Z" }) })) },
                Dn = function(e) { return Object(V.jsx)(Ie.a, Object(w.a)(Object(w.a)({ viewBox: "0 0 24 24" }, e), {}, { children: Object(V.jsx)("path", { d: "M9.99998 19V14H14V19C14 19.55 14.45 20 15 20H18C18.55 20 19 19.55 19 19V12H20.7C21.16 12 21.38 11.43 21.03 11.13L12.67 3.59997C12.29 3.25997 11.71 3.25997 11.33 3.59997L2.96998 11.13C2.62998 11.43 2.83998 12 3.29998 12H4.99998V19C4.99998 19.55 5.44998 20 5.99998 20H8.99998C9.54998 20 9.99998 19.55 9.99998 19Z" }) })) },
                Un = function(e) { return Object(V.jsx)(Ie.a, Object(w.a)(Object(w.a)({ viewBox: "0 0 24 24" }, e), {}, { children: Object(V.jsx)("path", { d: "M21.9 8.89L20.85 4.52C20.63 3.62 19.85 3 18.94 3H16.73H14.72H13H11H9.28001H7.26001H5.05001C4.15001 3 3.36001 3.63 3.15001 4.52L2.10001 8.89C1.86001 9.91 2.08001 10.95 2.72001 11.77C2.80001 11.88 2.91001 11.96 3.00001 12.06V19C3.00001 20.1 3.90001 21 5.00001 21H19C20.1 21 21 20.1 21 19V12.06C21.09 11.97 21.2 11.88 21.28 11.78C21.92 10.96 22.15 9.91 21.9 8.89ZM7.02001 5L6.44001 9.86C6.36001 10.51 5.84001 11 5.23001 11C4.74001 11 4.43001 10.71 4.30001 10.53C4.04001 10.2 3.95001 9.77 4.05001 9.36L5.05001 5H7.02001ZM18.91 4.99L19.96 9.36C20.06 9.78 19.97 10.2 19.71 10.53C19.57 10.71 19.27 11 18.77 11C18.16 11 17.63 10.51 17.56 9.86L16.98 5L18.91 4.99ZM15.51 9.52C15.56 9.91 15.44 10.3 15.18 10.59C14.95 10.85 14.63 11 14.22 11C13.55 11 13 10.41 13 9.69V5H14.96L15.51 9.52ZM11 9.69C11 10.41 10.45 11 9.71001 11C9.37001 11 9.06001 10.85 8.82001 10.59C8.57001 10.3 8.45001 9.91 8.49001 9.52L9.04001 5H11V9.69ZM18 19H6.00001C5.45001 19 5.00001 18.55 5.00001 18V12.97C5.08001 12.98 5.15001 13 5.23001 13C6.10001 13 6.89001 12.64 7.47001 12.05C8.07001 12.65 8.87001 13 9.78001 13C10.65 13 11.43 12.64 12.01 12.07C12.6 12.64 13.4 13 14.3 13C15.14 13 15.94 12.65 16.54 12.05C17.12 12.64 17.91 13 18.78 13C18.86 13 18.93 12.98 19.01 12.97V18C19 18.55 18.55 19 18 19Z" }) })) },
                Hn = function(e) { return Object(V.jsxs)(Ie.a, Object(w.a)(Object(w.a)({ viewBox: "0 0 24 24" }, e), {}, { children: [Object(V.jsx)("path", { d: "M5 7C5 6.44772 4.55228 6 4 6C3.44772 6 3 6.44772 3 7V18C3 19.1046 3.89543 20 5 20H20C20.5523 20 21 19.5523 21 19C21 18.4477 20.5523 18 20 18H5V7Z" }), Object(V.jsx)("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M19 17H7C6.44772 17 6 16.5523 6 16V12C6 11.4477 6.44772 11 7 11H10V10C10 9.44772 10.4477 9 11 9H14V7C14 6.44772 14.4477 6 15 6H19C19.5523 6 20 6.44772 20 7V16C20 16.5523 19.5523 17 19 17ZM16 8H18V15H16V8ZM12 15H14V11H12V15ZM10 13H8V15H10V13Z" })] })) },
                zn = function(e) { return Object(V.jsx)(Ie.a, Object(w.a)(Object(w.a)({ viewBox: "0 0 24 24" }, e), {}, { children: Object(V.jsx)("path", { d: "M11.99 2C6.47 2 2 6.48 2 12C2 17.52 6.47 22 11.99 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 11.99 2ZM18.92 8H15.97C15.65 6.75 15.19 5.55 14.59 4.44C16.43 5.07 17.96 6.35 18.92 8ZM12 4.04C12.83 5.24 13.48 6.57 13.91 8H10.09C10.52 6.57 11.17 5.24 12 4.04ZM4.26 14C4.1 13.36 4 12.69 4 12C4 11.31 4.1 10.64 4.26 10H7.64C7.56 10.66 7.5 11.32 7.5 12C7.5 12.68 7.56 13.34 7.64 14H4.26ZM5.08 16H8.03C8.35 17.25 8.81 18.45 9.41 19.56C7.57 18.93 6.04 17.66 5.08 16ZM8.03 8H5.08C6.04 6.34 7.57 5.07 9.41 4.44C8.81 5.55 8.35 6.75 8.03 8ZM12 19.96C11.17 18.76 10.52 17.43 10.09 16H13.91C13.48 17.43 12.83 18.76 12 19.96ZM14.34 14H9.66C9.57 13.34 9.5 12.68 9.5 12C9.5 11.32 9.57 10.65 9.66 10H14.34C14.43 10.65 14.5 11.32 14.5 12C14.5 12.68 14.43 13.34 14.34 14ZM14.59 19.56C15.19 18.45 15.65 17.25 15.97 16H18.92C17.96 17.65 16.43 18.93 14.59 19.56ZM16.36 14C16.44 13.34 16.5 12.68 16.5 12C16.5 11.32 16.44 10.66 16.36 10H19.74C19.9 10.64 20 11.31 20 12C20 12.69 19.9 13.36 19.74 14H16.36Z" }) })) },
                Vn = ["isDark"],
                Zn = function(e) {
                    var n = e.isDark,
                        t = Object(Be.a)(e, Vn),
                        a = n ? "#FFFFFF" : "#000000";
                    return Object(V.jsxs)(Ie.a, Object(w.a)(Object(w.a)({ viewBox: "0 0 160 26" }, t), {}, { children: [Object(V.jsx)("path", { d: "M30.8524 19.7569C30.4803 19.7569 30.2173 19.6799 30.0633 19.5259C29.9221 19.372 29.8516 19.1282 29.8516 18.7946V7.65066C29.8516 7.31705 29.9285 7.07326 30.0825 6.91928C30.2365 6.75248 30.4931 6.66907 30.8524 6.66907H35.5679C37.3642 6.66907 38.6858 7.04759 39.5327 7.80463C40.3796 8.56167 40.803 9.69082 40.803 11.1921C40.803 12.6805 40.3796 13.8032 39.5327 14.5603C38.6987 15.3045 37.3771 15.6766 35.5679 15.6766H33.7394V18.7946C33.7394 19.1282 33.6624 19.372 33.5085 19.5259C33.3545 19.6799 33.0914 19.7569 32.7193 19.7569H30.8524ZM35.2599 12.8858C35.786 12.8858 36.1902 12.7446 36.4725 12.4624C36.7676 12.1801 36.9151 11.7566 36.9151 11.1921C36.9151 10.6147 36.7676 10.1848 36.4725 9.90253C36.1902 9.62025 35.786 9.47911 35.2599 9.47911H33.7394V12.8858H35.2599Z", fill: a }), Object(V.jsx)("path", { d: "M45.3484 20.0456C44.1423 20.0456 43.1735 19.6607 42.4421 18.8908C41.7236 18.1081 41.3643 17.011 41.3643 15.5996C41.3643 14.5218 41.6081 13.5787 42.0957 12.7703C42.5961 11.9619 43.2954 11.3396 44.1936 10.9034C45.1046 10.4543 46.1503 10.2297 47.3308 10.2297C48.306 10.2297 49.1657 10.3388 49.9099 10.5569C50.6669 10.7622 51.3598 11.0638 51.9885 11.4615V19.1602C51.9885 19.404 51.9436 19.5644 51.8538 19.6414C51.764 19.7184 51.5844 19.7569 51.3149 19.7569H49.3517C49.2106 19.7569 49.1015 19.7376 49.0245 19.6992C48.9475 19.6478 48.8834 19.5708 48.8321 19.4682L48.5819 18.8908C48.2097 19.2886 47.7607 19.5773 47.2346 19.7569C46.7213 19.9494 46.0926 20.0456 45.3484 20.0456ZM46.7919 17.428C47.2923 17.428 47.6837 17.3061 47.966 17.0623C48.2482 16.8186 48.3894 16.4721 48.3894 16.023V13.0205C48.1456 12.905 47.8376 12.8473 47.4655 12.8473C46.7855 12.8473 46.2402 13.0847 45.8296 13.5594C45.4318 14.0342 45.2329 14.7014 45.2329 15.5611C45.2329 16.8057 45.7526 17.428 46.7919 17.428Z", fill: a }), Object(V.jsx)("path", { d: "M54.667 19.7569C54.2949 19.7569 54.0319 19.6799 53.8779 19.5259C53.7239 19.372 53.6469 19.1282 53.6469 18.7946V11.1151C53.6469 10.8841 53.6854 10.7301 53.7624 10.6532C53.8522 10.5633 54.0318 10.5184 54.3013 10.5184H56.2837C56.4377 10.5184 56.5532 10.5441 56.6302 10.5954C56.72 10.6339 56.7713 10.7109 56.7841 10.8264L56.8804 11.4038C57.2397 11.0445 57.708 10.7622 58.2854 10.5569C58.8756 10.3388 59.53 10.2297 60.2486 10.2297C61.2879 10.2297 62.1283 10.5248 62.7699 11.1151C63.4115 11.6925 63.7322 12.5522 63.7322 13.6942V18.7946C63.7322 19.1282 63.6552 19.372 63.5013 19.5259C63.3601 19.6799 63.1035 19.7569 62.7314 19.7569H60.8645C60.4924 19.7569 60.2229 19.6799 60.0561 19.5259C59.9021 19.372 59.8251 19.1282 59.8251 18.7946V13.9444C59.8251 13.5594 59.7417 13.2836 59.5749 13.1167C59.4081 12.9499 59.1451 12.8665 58.7858 12.8665C58.4009 12.8665 58.0929 12.9692 57.862 13.1745C57.6438 13.3798 57.5348 13.6621 57.5348 14.0213V18.7946C57.5348 19.1282 57.4578 19.372 57.3038 19.5259C57.1627 19.6799 56.906 19.7569 56.5339 19.7569H54.667Z", fill: a }), Object(V.jsx)("path", { d: "M70.5354 20.0456C68.739 20.0456 67.3532 19.6286 66.3781 18.7946C65.4029 17.9605 64.9153 16.748 64.9153 15.1569C64.9153 14.1817 65.1399 13.322 65.5889 12.5778C66.038 11.8336 66.686 11.2562 67.5329 10.8456C68.3926 10.435 69.4062 10.2297 70.5739 10.2297C71.4592 10.2297 72.2034 10.3131 72.8065 10.4799C73.4224 10.6467 73.9677 10.9034 74.4425 11.2498C74.5836 11.3396 74.6542 11.4551 74.6542 11.5963C74.6542 11.6989 74.6029 11.8336 74.5002 12.0004L73.7111 13.367C73.6213 13.5466 73.5122 13.6364 73.3839 13.6364C73.3069 13.6364 73.185 13.5851 73.0182 13.4824C72.6718 13.2643 72.3446 13.1039 72.0366 13.0013C71.7415 12.8986 71.3694 12.8473 70.9203 12.8473C70.2787 12.8473 69.7591 13.0526 69.3613 13.4632C68.9764 13.8738 68.7839 14.4384 68.7839 15.1569C68.7839 15.8883 68.9828 16.4529 69.3806 16.8506C69.7783 17.2356 70.3237 17.428 71.0165 17.428C71.4271 17.428 71.7992 17.3703 72.1329 17.2548C72.4665 17.1393 72.8065 16.9789 73.1529 16.7736C73.3326 16.671 73.4609 16.6197 73.5379 16.6197C73.6534 16.6197 73.756 16.7095 73.8458 16.8891L74.7119 18.3711C74.7761 18.4994 74.8082 18.6021 74.8082 18.6791C74.8082 18.7946 74.7312 18.9036 74.5772 19.0063C74.0383 19.3527 73.4481 19.6093 72.8065 19.7761C72.1778 19.9558 71.4207 20.0456 70.5354 20.0456Z", fill: a }), Object(V.jsx)("path", { d: "M79.6881 20.0456C78.482 20.0456 77.5132 19.6607 76.7819 18.8908C76.0633 18.1081 75.704 17.011 75.704 15.5996C75.704 14.5218 75.9478 13.5787 76.4354 12.7703C76.9358 11.9619 77.6351 11.3396 78.5333 10.9034C79.4443 10.4543 80.4901 10.2297 81.6705 10.2297C82.6457 10.2297 83.5054 10.3388 84.2496 10.5569C85.0067 10.7622 85.6995 11.0638 86.3283 11.4615V19.1602C86.3283 19.404 86.2834 19.5644 86.1935 19.6414C86.1037 19.7184 85.9241 19.7569 85.6546 19.7569H83.6915C83.5503 19.7569 83.4412 19.7376 83.3643 19.6992C83.2873 19.6478 83.2231 19.5708 83.1718 19.4682L82.9216 18.8908C82.5495 19.2886 82.1004 19.5773 81.5743 19.7569C81.0611 19.9494 80.4323 20.0456 79.6881 20.0456ZM81.1316 17.428C81.632 17.428 82.0234 17.3061 82.3057 17.0623C82.588 16.8186 82.7291 16.4721 82.7291 16.023V13.0205C82.4853 12.905 82.1774 12.8473 81.8053 12.8473C81.1252 12.8473 80.5799 13.0847 80.1693 13.5594C79.7715 14.0342 79.5726 14.7014 79.5726 15.5611C79.5726 16.8057 80.0923 17.428 81.1316 17.428Z", fill: a }), Object(V.jsx)("path", { d: "M98.4184 19.0255C98.5082 19.1282 98.5531 19.2436 98.5531 19.372C98.5531 19.4874 98.5146 19.5837 98.4377 19.6607C98.3607 19.7248 98.258 19.7569 98.1297 19.7569H95.1465C94.9668 19.7569 94.8321 19.7441 94.7423 19.7184C94.6653 19.6799 94.5819 19.6093 94.4921 19.5067L91.8745 15.946V18.7946C91.8745 19.1282 91.7975 19.372 91.6435 19.5259C91.4896 19.6799 91.2265 19.7569 90.8544 19.7569H88.9875C88.6154 19.7569 88.3523 19.6799 88.1984 19.5259C88.0572 19.372 87.9866 19.1282 87.9866 18.7946V7.65066C87.9866 7.31705 88.0636 7.07326 88.2176 6.91928C88.3716 6.75248 88.6282 6.66907 88.9875 6.66907H90.8544C91.2265 6.66907 91.4896 6.75248 91.6435 6.91928C91.7975 7.07326 91.8745 7.31705 91.8745 7.65066V14.0983L94.4151 10.7879C94.4921 10.6852 94.5755 10.6147 94.6653 10.5762C94.7551 10.5377 94.8898 10.5184 95.0695 10.5184H98.0527C98.181 10.5184 98.2773 10.5569 98.3414 10.6339C98.4184 10.6981 98.4569 10.7879 98.4569 10.9034C98.4569 11.0317 98.412 11.1472 98.3222 11.2498L95.031 15.0222L98.4184 19.0255Z", fill: a }), Object(V.jsx)("path", { d: "M104.668 20.0456C103.59 20.0456 102.628 19.866 101.781 19.5067C100.947 19.1474 100.286 18.6085 99.7985 17.89C99.3109 17.1714 99.0671 16.2925 99.0671 15.2531C99.0671 13.6236 99.529 12.379 100.453 11.5193C101.377 10.6596 102.705 10.2297 104.437 10.2297C106.131 10.2297 107.414 10.6532 108.286 11.5C109.172 12.334 109.614 13.4953 109.614 14.9837C109.614 15.6252 109.332 15.946 108.767 15.946H102.724C102.724 16.4978 102.929 16.9212 103.34 17.2163C103.763 17.5114 104.398 17.659 105.245 17.659C105.771 17.659 106.208 17.6141 106.554 17.5243C106.913 17.4216 107.273 17.2741 107.632 17.0816C107.786 17.0174 107.889 16.9854 107.94 16.9854C108.055 16.9854 108.152 17.0623 108.229 17.2163L108.883 18.4481C108.947 18.5764 108.979 18.6727 108.979 18.7368C108.979 18.8523 108.902 18.9614 108.748 19.064C108.222 19.4105 107.626 19.6607 106.958 19.8146C106.291 19.9686 105.528 20.0456 104.668 20.0456ZM106.15 14.0406C106.15 13.553 106.009 13.1745 105.726 12.905C105.444 12.6356 105.021 12.5009 104.456 12.5009C103.892 12.5009 103.462 12.642 103.167 12.9243C102.872 13.1937 102.724 13.5658 102.724 14.0406H106.15Z", fill: a }), Object(V.jsx)("path", { d: "M116.211 20.0456C115.133 20.0456 114.113 19.9365 113.151 19.7184C112.189 19.4874 111.412 19.1667 110.822 18.7561C110.604 18.6149 110.495 18.4674 110.495 18.3134C110.495 18.2107 110.533 18.1017 110.61 17.9862L111.553 16.4849C111.656 16.331 111.759 16.254 111.861 16.254C111.926 16.254 112.035 16.2989 112.189 16.3887C112.663 16.6582 113.202 16.8763 113.805 17.0431C114.408 17.2099 115.005 17.2933 115.595 17.2933C116.198 17.2933 116.641 17.2035 116.923 17.0238C117.218 16.8442 117.366 16.5555 117.366 16.1577C117.366 15.7728 117.206 15.4713 116.885 15.2531C116.577 15.035 115.993 14.7591 115.133 14.4255C113.837 13.9379 112.824 13.3926 112.092 12.7896C111.374 12.1737 111.015 11.3396 111.015 10.2875C111.015 9.01718 111.47 8.04843 112.381 7.38121C113.292 6.71398 114.505 6.38037 116.019 6.38037C117.071 6.38037 117.969 6.47661 118.713 6.66907C119.47 6.84871 120.112 7.131 120.638 7.51593C120.856 7.68274 120.965 7.83671 120.965 7.97786C120.965 8.06767 120.927 8.17032 120.85 8.2858L119.907 9.78705C119.791 9.94103 119.688 10.018 119.599 10.018C119.534 10.018 119.425 9.97311 119.271 9.88329C118.527 9.3957 117.642 9.15191 116.615 9.15191C116.064 9.15191 115.64 9.24173 115.345 9.42137C115.05 9.601 114.902 9.89612 114.902 10.3067C114.902 10.589 114.979 10.82 115.133 10.9996C115.287 11.1792 115.493 11.3396 115.749 11.4808C116.019 11.6091 116.429 11.7759 116.981 11.9812L117.347 12.1159C118.296 12.488 119.04 12.8473 119.579 13.1937C120.131 13.5273 120.548 13.9444 120.83 14.4448C121.113 14.9324 121.254 15.5483 121.254 16.2925C121.254 17.4344 120.824 18.3455 119.964 19.0255C119.117 19.7056 117.866 20.0456 116.211 20.0456Z", fill: a }), Object(V.jsx)("path", { d: "M125.343 19.7569C125.151 19.7569 125.003 19.7248 124.9 19.6607C124.798 19.5965 124.721 19.4682 124.67 19.2757L122.187 10.9611C122.161 10.8841 122.148 10.8264 122.148 10.7879C122.148 10.6083 122.277 10.5184 122.533 10.5184H125.074C125.241 10.5184 125.362 10.5505 125.439 10.6147C125.516 10.666 125.568 10.7558 125.593 10.8841L126.633 15.2531L127.941 11.731C128.006 11.577 128.07 11.4744 128.134 11.423C128.211 11.3589 128.339 11.3268 128.519 11.3268H129.731C129.911 11.3268 130.033 11.3589 130.097 11.423C130.174 11.4744 130.245 11.577 130.309 11.731L131.598 15.2531L132.657 10.8841C132.695 10.7558 132.747 10.666 132.811 10.6147C132.875 10.5505 132.991 10.5184 133.157 10.5184H135.717C135.974 10.5184 136.102 10.6083 136.102 10.7879C136.102 10.8264 136.089 10.8841 136.064 10.9611L133.562 19.2757C133.51 19.4682 133.433 19.5965 133.331 19.6607C133.241 19.7248 133.1 19.7569 132.907 19.7569H131.021C130.841 19.7569 130.707 19.7248 130.617 19.6607C130.527 19.5837 130.45 19.4554 130.386 19.2757L129.116 15.7921L127.845 19.2757C127.794 19.4554 127.717 19.5837 127.614 19.6607C127.524 19.7248 127.39 19.7569 127.21 19.7569H125.343Z", fill: a }), Object(V.jsx)("path", { d: "M140.981 20.0456C139.775 20.0456 138.806 19.6607 138.075 18.8908C137.356 18.1081 136.997 17.011 136.997 15.5996C136.997 14.5218 137.241 13.5787 137.728 12.7703C138.229 11.9619 138.928 11.3396 139.826 10.9034C140.737 10.4543 141.783 10.2297 142.963 10.2297C143.938 10.2297 144.798 10.3388 145.542 10.5569C146.299 10.7622 146.992 11.0638 147.621 11.4615V19.1602C147.621 19.404 147.576 19.5644 147.486 19.6414C147.396 19.7184 147.217 19.7569 146.947 19.7569H144.984C144.843 19.7569 144.734 19.7376 144.657 19.6992C144.58 19.6478 144.516 19.5708 144.465 19.4682L144.214 18.8908C143.842 19.2886 143.393 19.5773 142.867 19.7569C142.354 19.9494 141.725 20.0456 140.981 20.0456ZM142.424 17.428C142.925 17.428 143.316 17.3061 143.598 17.0623C143.881 16.8186 144.022 16.4721 144.022 16.023V13.0205C143.778 12.905 143.47 12.8473 143.098 12.8473C142.418 12.8473 141.873 13.0847 141.462 13.5594C141.064 14.0342 140.865 14.7014 140.865 15.5611C140.865 16.8057 141.385 17.428 142.424 17.428Z", fill: a }), Object(V.jsx)("path", { d: "M150.28 23.6447C149.908 23.6447 149.645 23.5678 149.491 23.4138C149.35 23.2598 149.279 23.016 149.279 22.6824V11.654C149.857 11.2434 150.582 10.9034 151.454 10.6339C152.327 10.3645 153.238 10.2297 154.187 10.2297C158.062 10.2297 160 11.8721 160 15.1569C160 16.6453 159.589 17.8322 158.768 18.7176C157.947 19.6029 156.786 20.0456 155.284 20.0456C154.861 20.0456 154.45 19.9943 154.053 19.8916C153.668 19.789 153.347 19.6478 153.09 19.4682V22.6824C153.09 23.016 153.013 23.2598 152.859 23.4138C152.705 23.5678 152.442 23.6447 152.07 23.6447H150.28ZM154.457 17.4473C155.009 17.4473 155.419 17.242 155.689 16.8314C155.971 16.408 156.112 15.8434 156.112 15.1377C156.112 14.3036 155.945 13.7198 155.612 13.3862C155.291 13.0398 154.79 12.8665 154.11 12.8665C153.674 12.8665 153.328 12.9243 153.071 13.0398V16.1C153.071 16.5363 153.193 16.8699 153.437 17.1008C153.681 17.3318 154.021 17.4473 154.457 17.4473Z", fill: a }), Object(V.jsx)("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M4.38998 4.50033C4.01476 2.49106 5.55649 0.634766 7.60049 0.634766C9.40427 0.634766 10.8665 2.09701 10.8665 3.90078V7.92728C11.3177 7.89544 11.7761 7.87911 12.2404 7.87911C12.6865 7.87911 13.1272 7.89418 13.5612 7.9236V3.90078C13.5612 2.09701 15.0234 0.634766 16.8272 0.634766C18.8712 0.634766 20.4129 2.49106 20.0377 4.50033L19.1539 9.23326C22.1872 10.5576 24.4809 12.8577 24.4809 15.748V17.4966C24.4809 19.8734 22.9085 21.8634 20.7102 23.2068C18.4948 24.5606 15.4978 25.3654 12.2404 25.3654C8.98304 25.3654 5.98604 24.5606 3.77065 23.2068C1.57242 21.8634 0 19.8734 0 17.4966V15.748C0 12.873 2.2701 10.5817 5.27785 9.25477L4.38998 4.50033ZM18.0212 9.85508L19.0555 4.3169C19.3159 2.92236 18.2459 1.63399 16.8272 1.63399C15.5753 1.63399 14.5604 2.64886 14.5604 3.90078V9.02479C14.2324 8.98273 13.8991 8.9494 13.5612 8.92524C13.128 8.89426 12.6873 8.87833 12.2404 8.87833C11.7753 8.87833 11.3168 8.89559 10.8665 8.92912C10.5286 8.95429 10.1953 8.98862 9.86729 9.03169V3.90078C9.86729 2.64886 8.85241 1.63399 7.60049 1.63399C6.18184 1.63399 5.11179 2.92235 5.37222 4.3169L6.40988 9.87345C3.16599 11.0784 0.999219 13.2586 0.999219 15.748V17.4966C0.999219 21.2906 6.03208 24.3662 12.2404 24.3662C18.4488 24.3662 23.4817 21.2906 23.4817 17.4966V15.748C23.4817 13.2458 21.2927 11.0562 18.0212 9.85508Z", fill: "#633001" }), Object(V.jsx)("path", { d: "M23.4815 17.4967C23.4815 21.2907 18.4486 24.3663 12.2402 24.3663C6.03189 24.3663 0.999023 21.2907 0.999023 17.4967V15.748H23.4815V17.4967Z", fill: "#FEDC90" }), Object(V.jsx)("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M5.37202 4.31671C5.1116 2.92216 6.18164 1.63379 7.6003 1.63379C8.85222 1.63379 9.8671 2.64867 9.8671 3.90059V9.0315C10.6321 8.93102 11.4261 8.87813 12.2402 8.87813C13.0356 8.87813 13.8116 8.9286 14.5602 9.02459V3.90059C14.5602 2.64867 15.5751 1.63379 16.827 1.63379C18.2457 1.63379 19.3157 2.92216 19.0553 4.31671L18.021 9.85488C21.2925 11.056 23.4815 13.2457 23.4815 15.7478C23.4815 19.5418 18.4486 22.6174 12.2402 22.6174C6.03189 22.6174 0.999023 19.5418 0.999023 15.7478C0.999023 13.2584 3.16579 11.0782 6.40968 9.87326L5.37202 4.31671Z", fill: "#D1884F" }), Object(V.jsx)("path", { d: "M9.11817 15.2485C9.11817 16.2833 8.55896 17.1221 7.86914 17.1221C7.17932 17.1221 6.62012 16.2833 6.62012 15.2485C6.62012 14.2138 7.17932 13.375 7.86914 13.375C8.55896 13.375 9.11817 14.2138 9.11817 15.2485Z", fill: "#633001" }), Object(V.jsx)("path", { d: "M17.7363 15.2485C17.7363 16.2833 17.1771 17.1221 16.4873 17.1221C15.7975 17.1221 15.2383 16.2833 15.2383 15.2485C15.2383 14.2138 15.7975 13.375 16.4873 13.375C17.1771 13.375 17.7363 14.2138 17.7363 15.2485Z", fill: "#633001" })] }))
                },
                Pn = s.a.memo(Zn, (function(e, n) { return e.isDark === n.isDark })),
                _n = function(e) { return Object(V.jsx)(Ie.a, Object(w.a)(Object(w.a)({ viewBox: "0 0 24 24" }, e), {}, { children: Object(V.jsx)("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M4.1534 13.6089L4.15362 13.61C4.77322 16.8113 7.42207 19.3677 10.647 19.8853L10.6502 19.8858C13.0412 20.2736 15.2625 19.6103 16.9422 18.2833C11.3549 16.2878 7.9748 10.3524 9.26266 4.48816C5.69846 5.77194 3.35817 9.51245 4.1534 13.6089ZM10.0083 2.21054C4.76622 3.2533 1.09895 8.36947 2.19006 13.9901C2.97006 18.0201 6.28006 21.2101 10.3301 21.8601C13.8512 22.4311 17.0955 21.1608 19.2662 18.8587C19.2765 18.8478 19.2866 18.837 19.2968 18.8261C19.4385 18.6745 19.5757 18.5184 19.7079 18.3581C19.7105 18.355 19.713 18.3519 19.7156 18.3487C19.8853 18.1426 20.0469 17.9295 20.2001 17.7101C20.4101 17.4001 20.2401 16.9601 19.8701 16.9201C19.5114 16.8796 19.1602 16.8209 18.817 16.7452C18.7964 16.7406 18.7758 16.736 18.7552 16.7313C18.6676 16.7114 18.5804 16.6903 18.4938 16.6681C18.4919 16.6676 18.4901 16.6672 18.4882 16.6667C13.0234 15.2647 9.72516 9.48006 11.4542 4.03417C11.4549 4.03214 11.4555 4.03012 11.4562 4.0281C11.4875 3.92954 11.5205 3.83109 11.5552 3.73278C11.5565 3.72911 11.5578 3.72543 11.5591 3.72175C11.6768 3.38921 11.8136 3.05829 11.9701 2.73005C12.1301 2.39005 11.8501 2.01005 11.4701 2.03005C11.1954 2.04379 10.924 2.06848 10.6561 2.10368C10.6517 2.10427 10.6472 2.10486 10.6428 2.10545C10.4413 2.13221 10.2418 2.16492 10.0446 2.2034C10.0325 2.20576 10.0204 2.20814 10.0083 2.21054Z" }) })) },
                Gn = function(e) { return Object(V.jsx)(Ie.a, Object(w.a)(Object(w.a)({ viewBox: "0 0 24 24" }, e), {}, { children: Object(V.jsx)("path", { d: "M6 10C4.9 10 4 10.9 4 12C4 13.1 4.9 14 6 14C7.1 14 8 13.1 8 12C8 10.9 7.1 10 6 10ZM18 10C16.9 10 16 10.9 16 12C16 13.1 16.9 14 18 14C19.1 14 20 13.1 20 12C20 10.9 19.1 10 18 10ZM12 10C10.9 10 10 10.9 10 12C10 13.1 10.9 14 12 14C13.1 14 14 13.1 14 12C14 10.9 13.1 10 12 10Z" }) })) },
                Wn = function(e) { return Object(V.jsx)(Ie.a, Object(w.a)(Object(w.a)({ viewBox: "0 0 24 24" }, e), {}, { children: Object(V.jsx)("path", { d: "M12.8533 3.39627C12.4634 2.75821 11.5366 2.75821 11.1467 3.39627L7.42977 9.47855C7.02256 10.1449 7.50213 11 8.28306 11H15.7169C16.4979 11 16.9774 10.1449 16.5702 9.47855L12.8533 3.39627ZM12 5.84L13.93 9H10.06L12 5.84ZM17.5 13C15.01 13 13 15.01 13 17.5C13 19.99 15.01 22 17.5 22C19.99 22 22 19.99 22 17.5C22 15.01 19.99 13 17.5 13ZM17.5 20C16.12 20 15 18.88 15 17.5C15 16.12 16.12 15 17.5 15C18.88 15 20 16.12 20 17.5C20 18.88 18.88 20 17.5 20ZM3 19.5C3 20.6046 3.89543 21.5 5 21.5H9C10.1046 21.5 11 20.6046 11 19.5V15.5C11 14.3954 10.1046 13.5 9 13.5H5C3.89543 13.5 3 14.3954 3 15.5V19.5ZM5 15.5H9V19.5H5V15.5Z" }) })) },
                Kn = function(e) { return Object(V.jsxs)(Ie.a, Object(w.a)(Object(w.a)({ viewBox: "0 0 24 24" }, e), {}, { children: [Object(V.jsx)("path", { d: "M7.5 13C7.5 11.8954 8.39543 11 9.5 11H12.5C13.6046 11 14.5 11.8954 14.5 13V15C14.5 16.1046 13.6046 17 12.5 17H9.5C8.39543 17 7.5 16.1046 7.5 15V13Z" }), Object(V.jsx)("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M9.5 2C8.39543 2 7.5 2.89543 7.5 4V6.49482C7.5 6.93167 7.2113 7.30895 6.81834 7.49981C5.15004 8.31009 4 10.0207 4 12V17C4 19.2091 5.79086 21 8 21H14C16.2091 21 18 19.2091 18 17V12C18 11.4175 17.9004 10.8583 17.7173 10.3385L17.7892 10.297C19.4786 9.32167 20.0574 7.16153 19.082 5.47221C18.1552 3.86682 16.1534 3.25957 14.5 4.05146V4C14.5 2.89543 13.6046 2 12.5 2H9.5ZM9.5 6.25V4H12.5V6.25H9.5ZM9.22663 7.75C8.89473 8.46917 8.30318 9.00205 7.69211 9.29884C6.68638 9.78731 6 10.8154 6 12V17C6 18.1046 6.89543 19 8 19H14C15.1046 19 16 18.1046 16 17V12C16 10.8154 15.3136 9.78731 14.3079 9.29884C13.6968 9.00205 13.1053 8.46917 12.7734 7.75H9.22663ZM14.5 6.3226V6.49482C14.5 6.93167 14.7887 7.30895 15.1817 7.49981C15.7529 7.77726 16.2634 8.16029 16.6878 8.62352L16.7892 8.56495C17.522 8.1419 17.773 7.20495 17.35 6.47221C16.9346 5.75269 16.0213 5.49542 15.2914 5.89229L14.5 6.3226Z" })] })) },
                Yn = function(e) { return Object(V.jsxs)(Ie.a, Object(w.a)(Object(w.a)({ viewBox: "0 0 24 24" }, e), {}, { children: [Object(V.jsx)("path", { d: "M5.66 4.2L6.05 4.59C6.44 4.97 6.44 5.61 6.05 5.99L6.04 6C5.65 6.39 5.03 6.39 4.64 6L4.25 5.61C3.86 5.23 3.86 4.6 4.25 4.21L4.26 4.2C4.64 3.82 5.27 3.81 5.66 4.2Z" }), Object(V.jsx)("path", { d: "M1.99 10.95H3.01C3.56 10.95 4 11.39 4 11.95V11.96C4 12.51 3.56 12.95 3 12.94H1.99C1.44 12.94 1 12.5 1 11.95V11.94C1 11.39 1.44 10.95 1.99 10.95Z" }), Object(V.jsx)("path", { d: "M12 1H12.01C12.56 1 13 1.44 13 1.99V2.96C13 3.51 12.56 3.95 12 3.94H11.99C11.44 3.94 11 3.5 11 2.95V1.99C11 1.44 11.44 1 12 1Z" }), Object(V.jsx)("path", { d: "M18.34 4.2C18.73 3.82 19.36 3.82 19.75 4.21C20.14 4.6 20.14 5.22 19.75 5.61L19.36 6C18.98 6.39 18.35 6.39 17.96 6L17.95 5.99C17.56 5.61 17.56 4.98 17.95 4.59L18.34 4.2Z" }), Object(V.jsx)("path", { d: "M18.33 19.7L17.94 19.31C17.55 18.92 17.55 18.3 17.95 17.9C18.33 17.52 18.96 17.51 19.35 17.9L19.74 18.29C20.13 18.68 20.13 19.31 19.74 19.7C19.35 20.09 18.72 20.09 18.33 19.7Z" }), Object(V.jsx)("path", { d: "M20 11.95V11.94C20 11.39 20.44 10.95 20.99 10.95H22C22.55 10.95 22.99 11.39 22.99 11.94V11.95C22.99 12.5 22.55 12.94 22 12.94H20.99C20.44 12.94 20 12.5 20 11.95Z" }), Object(V.jsx)("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M6 11.95C6 8.64 8.69 5.95 12 5.95C15.31 5.95 18 8.64 18 11.95C18 15.26 15.31 17.95 12 17.95C8.69 17.95 6 15.26 6 11.95ZM12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16Z" }), Object(V.jsx)("path", { d: "M12 22.9H11.99C11.44 22.9 11 22.46 11 21.91V20.95C11 20.4 11.44 19.96 11.99 19.96H12C12.55 19.96 12.99 20.4 12.99 20.95V21.91C12.99 22.46 12.55 22.9 12 22.9Z" }), Object(V.jsx)("path", { d: "M5.66 19.69C5.27 20.08 4.64 20.08 4.25 19.69C3.86 19.3 3.86 18.68 4.24 18.28L4.63 17.89C5.02 17.5 5.65 17.5 6.04 17.89L6.05 17.9C6.43 18.28 6.44 18.91 6.05 19.3L5.66 19.69Z" })] })) },
                Qn = function(e) { return Object(V.jsx)(Ie.a, Object(w.a)(Object(w.a)({ viewBox: "0 0 24 24" }, e), {}, { children: Object(V.jsx)("path", { d: "M12 3C7.02985 3 3 7.02985 3 11.9904C3 16.9606 7.02985 21 12 21C16.9701 21 21 16.9606 21 11.9904C21 7.02985 16.9701 3 12 3ZM16.4328 8.65139C16.3753 9.48614 14.8305 15.7228 14.8305 15.7228C14.8305 15.7228 14.7345 16.0874 14.3987 16.097C14.2836 16.097 14.1301 16.0874 13.9574 15.9243C13.6023 15.6269 12.7964 15.0512 12.0384 14.5235C12.0096 14.5522 11.9808 14.581 11.9424 14.6098C11.7697 14.7633 11.5107 14.984 11.2324 15.2527C11.1269 15.3486 11.0117 15.4542 10.8966 15.5693L10.887 15.5789C10.8198 15.6461 10.7623 15.694 10.7143 15.7324C10.3401 16.0394 10.3017 15.7804 10.3017 15.6461L10.5032 13.4488V13.4296L10.5128 13.4104C10.5224 13.3817 10.5416 13.3721 10.5416 13.3721C10.5416 13.3721 14.4659 9.87953 14.5714 9.50533C14.581 9.48614 14.5522 9.46695 14.5043 9.48614C14.2452 9.57249 9.72601 12.4318 9.22708 12.7484C9.19829 12.7676 9.11194 12.758 9.11194 12.758L6.91471 12.0384C6.91471 12.0384 6.65565 11.9328 6.742 11.693C6.76119 11.645 6.78998 11.597 6.89552 11.5299C7.38486 11.1844 15.8955 8.12367 15.8955 8.12367C15.8955 8.12367 16.1354 8.04691 16.2793 8.09488C16.3465 8.12367 16.3849 8.15245 16.4232 8.2484C16.4328 8.28678 16.4424 8.36354 16.4424 8.44989C16.4424 8.49787 16.4328 8.55544 16.4328 8.65139Z" }) })) },
                qn = function(e) { return Object(V.jsx)(Ie.a, Object(w.a)(Object(w.a)({ viewBox: "0 0 24 24" }, e), {}, { children: Object(V.jsx)("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M14.3137 3L15.2631 3.94934C14.5597 5.19866 14.7398 6.81097 15.8032 7.87441C16.8667 8.93786 18.479 9.11792 19.7283 8.4146L20.6777 9.36396L17.6569 12.3848L17.1287 11.8566C16.7382 11.4661 16.105 11.4661 15.7145 11.8566C15.3239 12.2471 15.3239 12.8803 15.7145 13.2708L16.2426 13.799L9.36396 20.6777L8.49923 19.8129C9.71921 18.5286 9.69924 16.4983 8.43932 15.2384C7.1794 13.9784 5.14908 13.9585 3.86473 15.1784L3 14.3137L9.87868 7.43503L10.2145 7.77081C10.605 8.16134 11.2382 8.16134 11.6287 7.77081C12.0192 7.38029 12.0192 6.74713 11.6287 6.3566L11.2929 6.02081L14.3137 3ZM12.8995 1.58579C13.6805 0.804738 14.9469 0.804738 15.7279 1.58579L17.299 3.15684C17.6895 3.54736 17.6895 4.18053 17.299 4.57105L17.2175 4.65257C16.7183 5.15173 16.7183 5.96103 17.2175 6.4602C17.7166 6.95936 18.5259 6.95936 19.0251 6.4602L19.1066 6.37868C19.4971 5.98816 20.1303 5.98816 20.5208 6.37868L22.0919 7.94975C22.8729 8.7308 22.8729 9.99713 22.0919 10.7782L10.7782 22.0919C9.99713 22.8729 8.7308 22.8729 7.94975 22.0919L6.37869 20.5208C5.98817 20.1303 5.98817 19.4971 6.37869 19.1066L7.02511 18.4602C7.52427 17.961 7.52427 17.1517 7.02511 16.6526C6.52594 16.1534 5.71664 16.1534 5.21748 16.6526L4.57106 17.299C4.18054 17.6895 3.54737 17.6895 3.15685 17.299L1.58579 15.7279C0.804738 14.9469 0.804738 13.6805 1.58579 12.8995L12.8995 1.58579ZM13.8787 8.6066C13.4882 8.21608 12.855 8.21608 12.4645 8.6066C12.0739 8.99712 12.0739 9.63029 12.4645 10.0208L13.4645 11.0208C13.855 11.4113 14.4882 11.4113 14.8787 11.0208C15.2692 10.6303 15.2692 9.99713 14.8787 9.6066L13.8787 8.6066Z" }) })) },
                Xn = function(e) { return Object(V.jsx)(Ie.a, Object(w.a)(Object(w.a)({ viewBox: "0 0 24 24" }, e), {}, { children: Object(V.jsx)("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M18.86 4.86003L21.65 7.65003C21.84 7.84003 21.84 8.16003 21.64 8.35003L18.85 11.14C18.54 11.46 18 11.24 18 10.79V9.00003H4C3.45 9.00003 3 8.55003 3 8.00003C3 7.45003 3.45 7.00003 4 7.00003H18V5.21003C18 4.76003 18.54 4.54003 18.86 4.86003ZM5.14001 19.14L2.35001 16.35C2.16001 16.16 2.16001 15.84 2.36001 15.65L5.15001 12.86C5.46001 12.54 6.00001 12.76 6.00001 13.21V15H20C20.55 15 21 15.45 21 16C21 16.55 20.55 17 20 17H6.00001V18.79C6.00001 19.24 5.46001 19.46 5.14001 19.14Z" }) })) },
                Jn = function(e) { return Object(V.jsx)(Ie.a, Object(w.a)(Object(w.a)({ viewBox: "0 0 24 24" }, e), {}, { children: Object(V.jsx)("path", { d: "M8.65854 19C15.4488 19 19.1659 13.2338 19.1659 8.23717C19.1659 8.07728 19.1659 7.91739 19.1561 7.7475C19.878 7.21785 20.5024 6.5483 21 5.78881C20.3366 6.08861 19.6244 6.28847 18.8732 6.38841C19.6341 5.91872 20.2195 5.17921 20.5024 4.28981C19.7902 4.72951 19 5.03931 18.1512 5.20919C17.478 4.45969 16.522 4 15.4585 4C13.4195 4 11.761 5.69887 11.761 7.78747C11.761 8.08728 11.8 8.36709 11.8585 8.6469C8.79512 8.497 6.07317 6.97801 4.24878 4.68954C3.92683 5.25916 3.75122 5.90873 3.75122 6.59827C3.75122 7.90739 4.40488 9.06662 5.39024 9.74617C4.78537 9.72618 4.21951 9.5563 3.72195 9.27648C3.72195 9.28648 3.72195 9.30646 3.72195 9.32645C3.72195 11.1552 5 12.6942 6.67805 13.034C6.36585 13.1239 6.0439 13.1639 5.70244 13.1639C5.46829 13.1639 5.23415 13.1439 5.00976 13.0939C5.47805 14.6029 6.8439 15.6922 8.46341 15.7222C7.19512 16.7415 5.60488 17.3411 3.87805 17.3411C3.58537 17.3411 3.28293 17.3311 3 17.2911C4.62927 18.3704 6.57073 19 8.65854 19Z" }) })) },
                $n = function(e) { return Object(V.jsxs)(Ie.a, Object(w.a)(Object(w.a)({ viewBox: "0 0 16 16" }, e), {}, { children: [Object(V.jsx)("path", { d: "M11.536 14.01A8.473 8.473 0 0 0 14.026 8a8.473 8.473 0 0 0-2.49-6.01l-.708.707A7.476 7.476 0 0 1 13.025 8c0 2.071-.84 3.946-2.197 5.303l.708.707z" }), Object(V.jsx)("path", { d: "M10.121 12.596A6.48 6.48 0 0 0 12.025 8a6.48 6.48 0 0 0-1.904-4.596l-.707.707A5.483 5.483 0 0 1 11.025 8a5.483 5.483 0 0 1-1.61 3.89l.706.706z" }), Object(V.jsx)("path", { d: "M10.025 8a4.486 4.486 0 0 1-1.318 3.182L8 10.475A3.489 3.489 0 0 0 9.025 8c0-.966-.392-1.841-1.025-2.475l.707-.707A4.486 4.486 0 0 1 10.025 8zM7 4a.5.5 0 0 0-.812-.39L3.825 5.5H1.5A.5.5 0 0 0 1 6v4a.5.5 0 0 0 .5.5h2.325l2.363 1.89A.5.5 0 0 0 7 12V4zM4.312 6.39 6 5.04v5.92L4.312 9.61A.5.5 0 0 0 4 9.5H2v-3h2a.5.5 0 0 0 .312-.11z" })] })) },
                et = function(e) { return Object(V.jsx)(Ie.a, Object(w.a)(Object(w.a)({ viewBox: "0 0 16 16" }, e), {}, { children: Object(V.jsx)("path", { d: "M6.717 3.55A.5.5 0 0 1 7 4v8a.5.5 0 0 1-.812.39L3.825 10.5H1.5A.5.5 0 0 1 1 10V6a.5.5 0 0 1 .5-.5h2.325l2.363-1.89a.5.5 0 0 1 .529-.06zM6 5.04 4.312 6.39A.5.5 0 0 1 4 6.5H2v3h2a.5.5 0 0 1 .312.11L6 10.96V5.04zm7.854.606a.5.5 0 0 1 0 .708L12.207 8l1.647 1.646a.5.5 0 0 1-.708.708L11.5 8.707l-1.646 1.647a.5.5 0 0 1-.708-.708L10.793 8 9.146 6.354a.5.5 0 1 1 .708-.708L11.5 7.293l1.646-1.647a.5.5 0 0 1 .708 0z" }) })) },
                nt = Object(f.default)(Me.a)(Tn || (Tn = Object(m.a)(["\n  color: ", ";\n  padding: 6px 8px 0;\n  border-radius: 8px;\n"])), (function(e) { return e.theme.colors.text }));
            nt.defaultProps = { variant: "text", size: "sm" };
            var tt, at, it, rt, ot, ct, st, lt, dt = nt,
                ut = Object(f.default)(ge.a)(tt || (tt = Object(m.a)(["\n  // ", " {\n  //   width: auto;\n  // }\n"])), (function(e) { return e.theme.mediaQueries.md })),
                pt = function(e) {
                    var n = e.isMobile,
                        t = e.isPushed,
                        a = e.togglePush;
                    return Object(V.jsx)(ut, { justifyContent: "space-between", children: n && a && Object(V.jsx)(dt, { "aria-label": "Toggle menu", onClick: a, mr: "2px", children: t ? Object(V.jsx)(Bn, { width: "54px", color: "#787878" }) : Object(V.jsx)(Rn, { width: "54px", color: "#787878" }) }) })
                },
                bt = s.a.memo(pt, (function(e, n) { return e.isPushed === n.isPushed })),
                mt = Object(f.default)(ge.a)(at || (at = Object(m.a)(["\n  width: auto;\n"]))),
                ft = Object(f.default)(O.b)(it || (it = Object(m.a)(["\n  display: flex;\n  align-items: center;\n  .mobile-icon {\n    width: 32px;\n    ", " {\n      display: none;\n    }\n  }\n  .desktop-icon {\n    width: 156px;\n    display: none;\n    ", " {\n      display: block;\n    }\n  }\n"])), (function(e) { return e.theme.mediaQueries.nav }), (function(e) { return e.theme.mediaQueries.nav })),
                ht = f.default.div(rt || (rt = Object(m.a)(["\n  width: 100%;\n  display: flex;\n  align-items: center;\n\n  // ", " {\n  //   width: auto;\n  // }\n\n  img {\n    width: 80px;\n    ", " {\n      width: 100px;\n    }\n  }\n"])), (function(e) { return e.theme.mediaQueries.md }), (function(e) { return e.theme.mediaQueries.lg })),
                gt = function(e) {
                    var n = e.isMobile,
                        t = (e.isPushed, e.togglePush, e.href),
                        a = t.startsWith("http"),
                        i = Object(V.jsx)(ht, { isMobile: n, children: Object(V.jsx)("img", { src: "/images/logos/logo.png", alt: "Logo" }) });
                    return Object(V.jsx)(mt, { justifyContent: "space-between", children: a ? Object(V.jsx)(ft, { as: "a", href: t, "aria-label": "Home page", children: i }) : Object(V.jsx)(ft, { to: t, "aria-label": "Home page", children: i }) })
                },
                xt = s.a.memo(gt, (function(e, n) { return e.isPushed === n.isPushed })),
                jt = t(50),
                Ot = t(20),
                yt = Object(f.keyframes)(ot || (ot = Object(m.a)(["\n  0%,\n  100% {\n    background-position: 0 0;\n  }\n  50% {\n    background-position: 100% 0;\n  }\n"]))),
                Ct = f.default.div(ct || (ct = Object(m.a)(["\n  color: ", ";\n  transition: color 0.4s;\n  flex-grow: 1;\n"])), (function(e) {
                    var n = e.isPushed,
                        t = e.theme;
                    return n ? t.colors.textSubtle : "transparent"
                })),
                vt = f.default.div(st || (st = Object(m.a)(["\n  color: ", ";\n  font-size: ", ";\n  font-weight: ", ";\n\n  position: relative;\n\n  display: flex;\n  align-items: center;\n\n  width: fit-content;\n  height: ", "px;\n  padding: 0 30px;\n\n  // box-shadow: ", ";\n  // background-color: ", ";\n\n  border-radius: 15px;\n  cursor: pointer;\n\n  transition: background-color 0.2s;\n\n  ", ";\n\n  &:hover {\n    font-weight: bold;\n    &::before {\n      content: '';\n      position: absolute;\n      left: -18px;\n      width: 35px;\n      height: 6px;\n\n      background: #ffffff;\n      box-shadow: 0px 2px 4px rgba(54, 114, 233, 0.25);\n      border-radius: 2px 2px 0px 0px;\n\n      animation: ellipsis 1.25s infinite;\n    }\n  }\n\n  // Safari fix\n  flex-shrink: 0;\n\n  a {\n    display: flex;\n    align-items: center;\n    width: 100%;\n    height: 100%;\n\n    &:hover {\n      color: ", ";\n    }\n  }\n\n  svg {\n    fill: ", ";\n  }\n\n  &.rainbow {\n    background-clip: text;\n    animation: ", " 3s ease-in-out infinite;\n    background: ", ";\n    background-size: 400% 100%;\n  }\n"])), (function(e) { return e.theme.colors.textSubtle }), (function(e) { return e.secondary ? "14px" : "16px" }), (function(e) { return e.isActive ? "bold" : "400" }), 39, (function(e) {
                    var n = e.isActive,
                        t = e.theme;
                    return n ? "inset 4px 0px 0px ".concat(t.colors.primary) : "none"
                }), (function(e) { return e.isActive ? "rgba(200, 88, 19, 0.4)" : "transparent" }), (function(e) { return e.isActive ? '\n    &::before {\n      content: "";\n      position: absolute;\n      left: -18px;\n      width: 35px;\n      height: 6px;\n      border-radius: 50%;\n\n      background: #FFFFFF;\n      box-shadow: 0px 2px 4px rgba(54, 114, 233, 0.25);\n      border-radius: 2px 2px 0px 0px;\n      \n      animation: ellipsis 1.25s infinite;\n    }\n  ' : "" }), (function(e) { return e.theme.colors.textSubtle }), (function(e) { return e.theme.colors.textSubtle }), yt, (function(e) { return e.theme.colors.gradients.bubblegum }));
            vt.defaultProps = { secondary: !1, isActive: !1, role: "button" }, f.default.div(lt || (lt = Object(m.a)(["\n  color: ", ";\n  font-size: ", ";\n  font-weight: 500;\n\n  display: flex;\n  // Safari fix\n  flex-shrink: 0;\n  align-items: center;\n\n  height: ", "px;\n  padding: ", ";\n  margin-top: 2px;\n\n  border-radius: 15px;\n  cursor: pointer;\n\n  a {\n    display: flex;\n    align-items: center;\n    width: 100%;\n    height: 100%;\n    color: inherit !important;\n  }\n\n  svg {\n    fill: ", ";\n  }\n\n  &.rainbow {\n    background-clip: text;\n    animation: ", " 3s ease-in-out infinite;\n    background: ", ";\n    background-size: 400% 100%;\n  }\n"])), (function(e) { return e.theme.colors.textSubtle }), (function(e) { return e.secondary ? "14px" : "20px" }), 39, (function(e) { return e.secondary ? "0 12px" : "0 8px" }), (function(e) { return e.theme.colors.textSubtle }), yt, (function(e) { return e.theme.colors.gradients.bubblegum })).defaultProps = { secondary: !1, role: "button" };
            var wt, kt, Tt, Mt, Lt, It, Nt, At, Et, St = s.a.memo(Ct, (function(e, n) { return e.isPushed === n.isPushed })),
                Ft = f.default.div(wt || (wt = Object(m.a)(["\n  display: flex;\n  flex-direction: column;\n  // Safari fix\n  flex-shrink: 0;\n"]))),
                Rt = f.default.div(kt || (kt = Object(m.a)(["\n  max-height: ", ";\n  transition: max-height 0.3s ease-out;\n  overflow: hidden;\n  border-color: ", ";\n  border-style: solid;\n  border-width: 1px 0;\n"])), (function(e) {
                    var n = e.isOpen,
                        t = e.maxHeight;
                    return n ? "".concat(t, "px") : 0
                }), (function(e) {
                    var n = e.isOpen,
                        t = e.isPushed;
                    return n && t ? "rgba(133, 133, 133, 0.1)" : "transparent"
                })),
                Bt = function(e) {
                    var n = e.label,
                        t = e.icon,
                        a = e.isPushed,
                        i = e.pushNav,
                        r = e.initialOpenState,
                        o = void 0 !== r && r,
                        l = e.children,
                        d = e.className,
                        u = e.isActive,
                        p = e.onClick,
                        b = Object(c.useState)(o),
                        m = Object(j.a)(b, 2),
                        f = m[0],
                        h = m[1];
                    return Object(V.jsxs)(Ft, { onClick: function() { return p && p }, children: [Object(V.jsxs)(vt, { onClick: function() { a ? h((function(e) { return !e })) : (i(!0), h(!0)) }, className: d, isActive: u, children: [t, Object(V.jsx)(St, { isPushed: a, children: n }), f ? Object(V.jsx)(xe.c, {}) : Object(V.jsx)(xe.b, {})] }), Object(V.jsx)(Rt, { isOpen: f, isPushed: a, maxHeight: 39 * s.a.Children.count(l), children: l })] })
                },
                Dt = s.a.memo(Bt, (function(e, n) { return e.isPushed === n.isPushed })),
                Ut = ["href"],
                Ht = function(e) {
                    var n = e.href,
                        t = Object(Be.a)(e, Ut),
                        a = null === n || void 0 === n ? void 0 : n.startsWith("http"),
                        i = a ? "a" : O.c,
                        r = a ? { href: n } : { to: n };
                    return Object(V.jsx)(i, Object(w.a)(Object(w.a)({}, r), t))
                },
                zt = a,
                Vt = f.default.div(Tt || (Tt = Object(m.a)(["\n  display: flex;\n  flex-direction: column;\n\n  width: 100%;\n  height: 100%;\n  margin: auto;\n\n  background: rgb(141 147 209);\n\n  position: relative;\n"]))),
                Zt = f.default.div(Mt || (Mt = Object(m.a)(["\n  padding: 20px 20px 20px 60px;\n  margin: 30px 20px 20px;\n\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n\n  background: rgba(255, 255, 255, 0.31);\n  backdrop-filter: blur(13px);\n  border-radius: 10px;\n\n  overflow-x: hidden;\n  overflow-y: auto;\n"]))),
                Pt = function(e) {
                    var n = e.isPushed,
                        t = e.pushNav,
                        a = e.isMobile,
                        i = e.links,
                        r = e.togglePush,
                        o = Object(y.g)(),
                        c = function() { a && t(!1), r() };
                    return Object(V.jsxs)(Vt, {
                        children: [Object(V.jsxs)(Ot.d, { justifyContent: "space-between", width: "100%", padding: "20px 20px 0", children: [Object(V.jsx)("div", { onClick: function() { return t(!1) }, style: { cursor: "pointer" }, children: Object(V.jsx)(O.b, { to: "/", children: Object(V.jsx)("img", { src: "/images/logos/logo.png", width: "80px", alt: "Home" }) }) }), Object(V.jsx)(Ot.d, { onClick: function() { return t(!1) }, style: { cursor: "pointer" }, alignItems: "center", children: Object(V.jsx)("img", { src: "/images/icons/close.png", width: "40px", alt: "Close" }) })] }), Object(V.jsx)(Zt, {
                            children: i.map((function(e, a) {
                                var i = e.icon ? zt[e.icon] : "div",
                                    s = Object(V.jsx)(i, { width: "24px", mr: "8px" }),
                                    l = e.calloutClass ? e.calloutClass : void 0;
                                if (e.items) {
                                    var d = e.items.findIndex((function(e) { return e.href === o.pathname })),
                                        u = !0 === e.initialOpenState ? e.initialOpenState : d >= 0;
                                    return Object(V.jsx)(Dt, { isPushed: n, pushNav: t, icon: s, label: e.label, initialOpenState: u, className: l, isActive: e.items.some((function(e) { return e.href === o.pathname })), children: n && e.items.map((function(n, t) { return Object(V.jsx)(vt, { secondary: !0, isActive: n.href === o.pathname, onClick: c, children: n.isScrollTo ? Object(V.jsx)(jt.Link, { activeClass: "active", className: e.isScrollTo, to: e.isScrollTo, spy: !0, smooth: !0, duration: 500, children: n.labelImg ? Object(V.jsx)("img", { src: n.labelImg, alt: n.label, height: "23px" }) : n.label }) : Object(V.jsx)(Ht, { href: n.href, target: n.target, children: n.labelImg ? Object(V.jsx)("img", { src: n.labelImg, alt: n.label }) : n.label }) }, "".concat(n.label, "-").concat(t)) })) }, e.label)
                                }
                                return Object(V.jsx)(vt, { isActive: e.href === o.pathname, className: l, children: e.isScrollTo ? Object(V.jsx)(jt.Link, { activeClass: "active", className: e.isScrollTo, to: e.isScrollTo, spy: !0, smooth: !0, duration: 500, onClick: r, children: e.labelImg ? Object(V.jsx)("img", { src: e.labelImg, alt: e.label, height: "23px" }) : e.label }) : Object(V.jsx)(Ht, { href: e.href, onClick: c, target: e.target, children: Object(V.jsx)(St, { isPushed: n, children: e.labelImg ? Object(V.jsx)("img", { src: e.labelImg, alt: e.label }) : e.label }) }) }, "".concat(e.label, "-").concat(a))
                            }))
                        })]
                    })
                },
                _t = f.default.div(Lt || (Lt = Object(m.a)(["\n  position: fixed;\n  top: 0;\n  left: 0;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  flex-shrink: 0;\n\n  transition: opacity 0.3s ease-in-out, height 0.3s ease-in-out;\n  // will-change: opacity, height;\n\n  // padding-top: ", ";\n  // background: ", ";\n  width: 100%;\n  height: ", ";\n  border-right: ", ";\n  overflow: ", ";\n  opacity: ", ";\n  transform: translate3d(0, 0, 0);\n  z-index: 99;\n"])), (function(e) { return e.showMenu ? "80px" : 0 }), (function(e) { return e.theme.nav.background }), (function(e) { return e.isPushed ? "".concat(100, "%") : 0 }), (function(e) { return e.isPushed ? "2px solid rgba(133, 133, 133, 0.1)" : 0 }), (function(e) { return e.isPushed ? "initial" : "hidden" }), (function(e) { return e.isPushed ? "1" : "0" })),
                Gt = function(e) {
                    var n = e.isPushed,
                        t = e.showMenu;
                    return Object(V.jsx)(_t, { isPushed: n, showMenu: t, children: Object(V.jsx)(Pt, Object(w.a)({}, e)) })
                },
                Wt = t(931),
                Kt = t(465),
                Yt = t.p + "static/media/icon-hot.9401d4a1.svg",
                Qt = ["att"],
                qt = Object(f.keyframes)(It || (It = Object(m.a)(["\n  0% {\n    opacity: 1;\n  }\n\n  50% {\n    opacity: 0;\n  }\n\n  100% {\n    opacity: 1;\n  }\n"]))),
                Xt = f.default.div(Nt || (Nt = Object(m.a)(["\n  img {\n    animation: ", " 1s infinite;\n    width: 34px;\n    position: absolute;\n    top: 5px;\n    right: -9px;\n  }\n"])), qt),
                Jt = function(e) {
                    var n = e.att,
                        t = Object(Be.a)(e, Qt),
                        a = null === n || void 0 === n ? void 0 : n.startsWith("icon");
                    return Object(V.jsx)(V.Fragment, { children: a ? Object(V.jsx)(Xt, { children: Object(V.jsx)("img", { src: Yt, alt: "hot", width: 50 }) }) : Object(V.jsx)("div", Object(w.a)(Object(w.a)({}, t), {}, { children: n })) })
                },
                $t = f.default.div(At || (At = Object(m.a)(["\n  color: black;\n  width: 100%;\n  display: flex;\n  justify-content: flex-end;\n\n  .ant-menu-horizontal:not(.ant-menu-dark) > .ant-menu-item:hover::after,\n  .ant-menu-horizontal:not(.ant-menu-dark) > .ant-menu-submenu:hover::after,\n  .ant-menu-horizontal:not(.ant-menu-dark) > .ant-menu-item-active::after,\n  .ant-menu-horizontal:not(.ant-menu-dark) > .ant-menu-submenu-active::after,\n  .ant-menu-horizontal:not(.ant-menu-dark) > .ant-menu-item-open::after,\n  .ant-menu-horizontal:not(.ant-menu-dark) > .ant-menu-submenu-open::after,\n  .ant-menu-horizontal:not(.ant-menu-dark) > .ant-menu-item-selected::after,\n  .ant-menu-horizontal:not(.ant-menu-dark) > .ant-menu-submenu-selected::after {\n    display: none !important;\n  }\n\n  ul {\n    display: flex;\n    justify-content: space-around;\n\n    width: 100%;\n    border-bottom: unset;\n    background: transparent;\n  }\n\n  li.ant-menu-item {\n    top: 0;\n    margin: 0 !important;\n    padding: 0 !important;\n    position: relative;\n\n    display: block;\n    flex: 1 1 auto;\n\n    a {\n      color: #fff;\n      font-family: Poppins;\n      font-weight: bold;\n\n      display: flex;\n      justify-content: center;\n      align-items: center;\n\n      padding: 0 8px;\n\n      width: 100%;\n      height: 100%;\n\n      &:hover {\n        color: #fff;\n      }\n    }\n\n    a.active {\n      color: #042234;\n      background: #2cfed8;\n    }\n  }\n"]))),
                ea = f.default.div(Et || (Et = Object(m.a)(["\n  position: absolute;\n  top: -10px;\n  right: 0px;\n  font-size: 18px;\n  color: #fc0909;\n"]))),
                na = function(e) {
                    var n = e.links,
                        t = Object(y.g)(),
                        a = Object(c.useState)(t.pathname),
                        i = Object(j.a)(a, 2)[1];
                    return Object(c.useEffect)((function() { t.pathname && i(t.pathname) }), [t.pathname]), Object(V.jsx)($t, { children: Object(V.jsx)(Wt.a, { mode: "horizontal", children: n.map((function(e, n) { return e.items ? Object(V.jsx)(Wt.a.SubMenu, { title: e.label, children: e.items.map((function(n, t) { var a; return Object(V.jsx)(Wt.a.Item, { children: n.comingSoon ? Object(V.jsx)(Kt.a, { placement: "bottom", title: "COMING SOON", children: Object(V.jsx)(Ht, { href: "#", target: n.target, children: n.labelImg ? Object(V.jsx)("img", { src: n.labelImg, alt: n.label, height: "23px" }) : n.label }) }) : n.isScrollTo ? Object(V.jsx)(jt.Link, { activeClass: "active", className: e.isScrollTo, to: e.isScrollTo, spy: !0, smooth: !0, duration: 500, children: n.labelImg ? Object(V.jsx)("img", { src: n.labelImg, alt: n.label, height: "23px" }) : n.label }) : Object(V.jsx)(Ht, { href: n.href, target: n.target, children: n.labelImg ? Object(V.jsx)("img", { src: n.labelImg, alt: n.label, height: "23px" }) : n.label }) }, null !== (a = n.href) && void 0 !== a ? a : t) })) }, "".concat(e.href, "-").concat(n)) : Object(V.jsxs)(Wt.a.Item, { children: [Object(V.jsx)(ea, { children: e.att && Object(V.jsx)(Jt, { att: e.att }) }), e.comingSoon ? Object(V.jsx)(Kt.a, { placement: "bottom", title: "COMING SOON", children: Object(V.jsx)(Ht, { href: "#", target: e.target, children: e.labelImg ? Object(V.jsx)("img", { src: e.labelImg, alt: e.label }) : e.label }) }) : e.isScrollTo ? Object(V.jsx)(jt.Link, { activeClass: "active", className: e.isScrollTo, to: e.isScrollTo, spy: !0, smooth: !0, duration: 500, children: e.labelImg ? Object(V.jsx)("img", { src: e.labelImg, alt: e.label }) : e.label }) : Object(V.jsx)(Ht, { href: e.href, target: e.target, children: e.labelImg ? Object(V.jsx)("img", { src: e.labelImg, alt: e.label }) : e.label })] }, "".concat(e.href, "-").concat(n)) })) }) })
                },
                ta = (t(203), t(39)),
                aa = (t(913), t(80), t(453), t(27));

            function ia(e) { try { return Object(ta.a)(e) } catch (n) { return !1 } }
            var ra, oa, ca, sa, la, da, ua, pa, ba = { 56: "", 97: "testnet." };

            function ma(e, n, t) {
                var a = "https://".concat(ba[e] || ba[aa.a.MAINNET], "bscscan.com");
                switch (t) {
                    case "transaction":
                        return "".concat(a, "/tx/").concat(n);
                    case "token":
                        return "".concat(a, "/token/").concat(n);
                    case "address":
                    default:
                        return "".concat(a, "/address/").concat(n)
                }
            }
            var fa, ha, ga, xa = f.default.div(ra || (ra = Object(m.a)(["\n  position: relative;\n  width: 100%;\n"]))),
                ja = f.default.div(oa || (oa = Object(m.a)(["\n  padding: 6px 10px;\n  background: #e6604a;\n  margin-top: ", ";\n  transition: margin-top 0.4s;\n\n  p {\n    color: #00ffd8;\n    font-size: 16px;\n    font-weight: 400;\n    line-height: 1.5;\n    text-align: center;\n  }\n"])), (function(e) { return e.showContract ? 0 : "-60px" })),
                Oa = f.default.nav(ca || (ca = Object(m.a)(["\n  position: fixed;\n  left: 0;\n  transition: top 0.2s;\n  width: 100%;\n  z-index: 20;\n  transform: translate3d(0, 0, 0);\n  overflow: hidden;\n\n  padding: 20px 20px 0;\n  ", " {\n    padding-top: 10px;\n  }\n"])), (function(e) { return e.theme.mediaQueries.nav })),
                ya = f.default.div(sa || (sa = Object(m.a)(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  height: 100%;\n  margin: auto;\n\n  width: 100%;\n  max-width: 100%;\n  ", " {\n    width: 100%;\n    max-width: 1366px;\n  }\n"])), (function(e) { return e.theme.mediaQueries.md })),
                Ca = f.default.div(la || (la = Object(m.a)(["\n  display: flex;\n  flex-direction: row;\n\n  width: 90%;\n  height: ", "px;\n  background: #042234;\n  border-radius: 30px;\n  overflow: hidden;\n"])), 58),
                va = f.default.div(da || (da = Object(m.a)(["\n  position: relative;\n  display: flex;\n"]))),
                wa = f.default.div(ua || (ua = Object(m.a)(["\n  height: 100%;\n  flex-grow: 1;\n  // margin-top: ", ";\n  // margin-top: 64px;\n  transition: margin-top 0.2s;\n  transform: translate3d(0, 0, 0);\n  max-width: 100%;\n\n  ", " {\n    margin-left: ", ";\n    max-width: ", ";\n  }\n"])), (function(e) { return e.showMenu ? "".concat(58, "px") : 0 }), (function(e) { return e.theme.mediaQueries.nav }), (function(e) {
                    var n = e.isMobile,
                        t = e.isPushed;
                    return "".concat(n && t ? 100 : 0, "px")
                }), (function(e) {
                    var n = e.isMobile,
                        t = e.isPushed;
                    return "calc(100% - ".concat(n && t ? 100 : 0, "px)")
                })),
                ka = Object(f.default)(ve)(pa || (pa = Object(m.a)(["\n  position: fixed;\n  height: 100%;\n\n  ", " {\n    display: none;\n  }\n"])), (function(e) { return e.theme.mediaQueries.nav })),
                Ta = function(e) {
                    var n, t = e.account,
                        a = e.login,
                        i = e.logout,
                        r = e.isDark,
                        o = e.toggleTheme,
                        s = e.langs,
                        l = e.setLang,
                        d = e.currentLang,
                        u = e.cakePriceUsd,
                        p = e.links,
                        b = e.onSearch,
                        m = e.children,
                        f = !1 === En().isXl,
                        h = Object(c.useState)(!f),
                        g = Object(j.a)(h, 2),
                        x = g[0],
                        O = g[1],
                        y = Object(c.useState)(!0),
                        C = Object(j.a)(y, 2),
                        v = C[0],
                        w = C[1],
                        k = Object(c.useState)(!0),
                        T = Object(j.a)(k, 1)[0];
                    Object(c.useEffect)((function() {
                        var e = Object(L.throttle)((function() {
                            var e = window.pageYOffset,
                                n = window.document.body.clientHeight === e + window.innerHeight;
                            0 === e ? w(!0) : n || w(!1)
                        }), 200);
                        return window.addEventListener("scroll", e),
                            function() { window.removeEventListener("scroll", e) }
                    }), []);
                    var M = p.find((function(e) { return "Home" === e.label }));
                    return Object(V.jsxs)(xa, { children: [Object(V.jsxs)(ja, { showContract: v, children: [Object(V.jsx)("p", { children: "ZUKI Contract address:" }), Object(V.jsx)("a", { href: ma(56, ne.l, "token"), target: "_blank", rel: "noreferrer", children: Object(V.jsx)("p", { children: ne.l }) })] }), Object(V.jsx)(Oa, { showMenu: T, isMobile: f, children: Object(V.jsxs)(ya, { children: [Object(V.jsx)(xt, { isMobile: f, href: null !== (n = null === M || void 0 === M ? void 0 : M.href) && void 0 !== n ? n : "/" }), !f && Object(V.jsx)(Ca, { children: Object(V.jsx)(na, { isPushed: x, isMobile: f, isDark: r, toggleTheme: o, langs: s, setLang: l, currentLang: d, cakePriceUsd: u, pushNav: O, links: p }) }), f && Object(V.jsx)(bt, { isMobile: f, isPushed: x, togglePush: function() { return O((function(e) { return !e })) } })] }) }), Object(V.jsxs)(va, { children: [f && Object(V.jsx)(Gt, { account: t, login: a, logout: i, isPushed: x, isMobile: f, showMenu: T, isDark: r, toggleTheme: o, langs: s, setLang: l, currentLang: d, cakePriceUsd: u, pushNav: O, togglePush: function() { return O((function(e) { return !e })) }, onSearch: b, links: p }), Object(V.jsx)(wa, { isMobile: f, isPushed: x, showMenu: T, children: m }), Object(V.jsx)(ka, { show: x, onClick: function() { return O(!1) }, role: "presentation", opacity: .5 })] })] })
                },
                Ma = { code: "en", language: "English" },
                La = [Ma, { code: "ar", language: "\u0627\u0644\u0639\u0631\u0628\u064a\u0629" }, { code: "bn", language: "\u09ac\u09be\u0982\u09b2\u09be" }, { code: "zh-CN", language: "\u7b80\u4f53\u4e2d\u6587" }, { code: "zh-TW", language: "\u7e41\u9ad4\u4e2d\u6587" }, { code: "nl", language: "Nederlands" }, { code: "fil", language: "Filipino" }, { code: "fi", language: "Suomalainen" }, { code: "fr", language: "Fran\xe7ais" }, { code: "de", language: "Deutsch" }, { code: "el", language: "\u0395\u03bb\u03bb\u03b7\u03bd\u03b9\u03ba\u03ac" }, { code: "hi", language: "\u0939\u093f\u0902\u0926\u0940" }, { code: "hu", language: "Magyar" }, { code: "id", language: "Bahasa Indonesia" }, { code: "it", language: "Italiano" }, { code: "ja", language: "\u65e5\u672c\u8a9e" }, { code: "ko", language: "\ud55c\uad6d\uc5b4" }, { code: "pl", language: "Polski" }, { code: "pt-PT", language: "Portugu\xeas (Portugal)" }, { code: "pt-BR", language: "Portugu\xeas (Brasil)" }, { code: "ro", language: "Rom\xe2n\u0103" }, { code: "ru", language: "\u0420\u0443\u0441\u0441\u043a\u0438\u0439" }, { code: "es-ES", language: "Espa\xf1ol" }, { code: "sv-SE", language: "Svenska" }, { code: "ta", language: "\u0ba4\u0bae\u0bbf\u0bb4\u0bcd" }, { code: "tr", language: "T\xfcrk\xe7e" }, { code: "uk", language: "\u0423\u043a\u0440\u0430\u0457\u043d\u0441\u044c\u043a\u0430" }, { code: "vi", language: "Ti\u1ebfng Vi\u1ec7t" }],
                Ia = { selectedLanguage: { code: "", language: "" }, setSelectedLanguage: function() {}, translatedLanguage: { code: "", language: "" }, setTranslatedLanguage: function() {} },
                Na = Object(c.createContext)(Ia),
                Aa = { failure: "#ED4B9E", primary: "#2CFEFD", primaryBright: "#C64D9D", primaryDark: "#0098A1", secondary: "#000000", success: "#31D0AA", warning: "#FFB237" },
                Ea = { binance: "#F0B90B" },
                Sa = Object(w.a)(Object(w.a)(Object(w.a)({}, Aa), Ea), {}, { background: "#FAF9FA", backgroundDisabled: "linear-gradient(0deg,#D9D1D1 0%,#D2D2D2 100%)", buttonDisable: "linear-gradient(0deg,#D9D1D1 0%,#D2D2D2 100%)", contrast: "#191326", invertedContrast: "#FFFFFF", input: "rgba(249, 174, 46, 0.2)", inputSecondary: "#d7caec", tertiary: "rgba(255,255,255, 0.4)", text: "#FFFFFF", textSubtle: "#FFFFFF", textDisabled: "#ffffff", borderColor: "#409529", card: "radial-gradient(circle, rgba(180,225,51,1) 0%, rgba(137,207,48,1) 100%)", gradients: { navbar: "linear-gradient(90deg,#963994 0%,#E861A3 100%)", common: "linear-gradient(0deg,#963994 0%,#E861A3 100%)", commonRight: "linear-gradient(135deg,#963994 0%,#E861A3 100%)", commonBottom: "linear-gradient(180deg,#963994 0%,#E861A3 100%)", commonTop: "linear-gradient(360deg,#963994 0%,#E861A3 100%)", commonLeft: "linear-gradient(90deg,#963994 0%,#E861A3 100%)", bubblegum: "linear-gradient(139.73deg, #E6FDFF 0%, #F3EFFF 100%)", footer: "linear-gradient(90deg,#963994 0%,#E861A3 100%)" } }),
                Fa = Object(w.a)(Object(w.a)(Object(w.a)({}, Aa), Ea), {}, { secondary: "#9A6AFF", background: "#100C18", backgroundDisabled: "#3c3742", buttonDisable: "linear-gradient(0deg,#D9D1D1 0%,#D2D2D2 100%)", contrast: "#FFFFFF", invertedContrast: "#191326", input: "#483f5a", inputSecondary: "#66578D", primaryDark: "#0098A1", tertiary: "#353547", text: "#EAE2FC", textDisabled: "#666171", textSubtle: "#A28BD4", borderColor: "#524B63", card: "#27262c", gradients: { navbar: "linear-gradient(0deg,#59C1E9 0%,#0B509A 100%)", common: "linear-gradient(0deg,#0B509A 0%,#59C1E9 100%)", commonTop: "linear-gradient(0deg,#0B509A 0%,#59C1E9 100%)", commonLeft: "linear-gradient(90deg,#0B509A 0%,#59C1E9 100%)", commonRight: "linear-gradient(180deg,#0B509A 0%,#59C1E9 100%)", commonBottom: "linear-gradient(360deg,#0B509A 0%,#59C1E9 100%)", bubblegum: "linear-gradient(139.73deg, #313D5C 0%, #3D2A54 100%)", footer: "linear-gradient(90deg,#0B509A 0%,#59C1E9 100%)" } }),
                Ra = { background: Sa.card },
                Ba = { background: Fa.card },
                Da = { background: Sa.card, boxShadow: "0px 2px 12px -8px rgba(25, 19, 38, 0.1), 0px 1px 1px rgba(25, 19, 38, 0.05)", boxShadowActive: Ln.active, boxShadowSuccess: Ln.success, boxShadowWarning: Ln.warning, cardHeaderBackground: "linear-gradient(111.68deg, #F2ECF2 0%, #E8F2F6 100%)", dropShadow: "drop-shadow(0px 1px 4px rgba(25, 19, 38, 0.15))" },
                Ua = { background: Fa.card, boxShadow: "0px 2px 12px -8px rgba(25, 19, 38, 0.1), 0px 1px 1px rgba(25, 19, 38, 0.05)", boxShadowActive: Ln.active, boxShadowSuccess: Ln.success, boxShadowWarning: Ln.warning, cardHeaderBackground: "linear-gradient(166.77deg, #3B4155 0%, #3A3045 100%)", dropShadow: "drop-shadow(0px 1px 4px rgba(25, 19, 38, 0.15))" },
                Ha = { handleBackground: Sa.card },
                za = { handleBackground: Fa.card },
                Va = { handleBackground: Sa.card },
                Za = { handleBackground: Fa.card },
                Pa = { background: Sa.gradients.navbar, hover: "#EEEAF4" },
                _a = { background: Fa.gradients.navbar, hover: "#473d5d" },
                Ga = { background: Sa.card },
                Wa = { background: Fa.card },
                Ka = { background: Fa.card, text: Fa.text, boxShadow: "0px 0px 2px rgba(0, 0, 0, 0.2), 0px 4px 12px -8px rgba(14, 14, 44, 0.1)" },
                Ya = { background: Sa.card, text: Sa.text, boxShadow: "0px 0px 2px rgba(0, 0, 0, 0.2), 0px 4px 12px -8px rgba(14, 14, 44, 0.1)" },
                Qa = Object(w.a)(Object(w.a)({}, In), {}, { isDark: !0, alert: Ba, colors: Fa, card: Ua, toggle: Za, nav: _a, modal: Wa, radio: za, tooltip: Ya }),
                qa = Object(w.a)(Object(w.a)({}, In), {}, { isDark: !1, alert: Ra, colors: Sa, card: Da, toggle: Va, nav: Pa, modal: Ga, radio: Ha, tooltip: Ka }),
                Xa = s.a.createContext({ isDark: !1, toggleTheme: function() { return null } }),
                Ja = function(e) {
                    var n = e.children,
                        t = Object(c.useState)(!1),
                        a = Object(j.a)(t, 2),
                        i = a[0],
                        r = a[1];
                    return Object(V.jsx)(Xa.Provider, { value: { isDark: i, toggleTheme: function() { r((function(e) { return localStorage.setItem("IS_DARK", JSON.stringify(!e)), !e })) } }, children: Object(V.jsx)(f.ThemeProvider, { theme: i ? Qa : qa, children: n }) })
                },
                $a = function() { var e = Object(c.useContext)(Xa); return { isDark: e.isDark, toggleTheme: e.toggleTheme, theme: Object(c.useContext)(f.ThemeContext) } },
                ei = Object(I.d)({
                    name: "toasts",
                    initialState: { data: [] },
                    reducers: {
                        push: function(e, n) {
                            var t = n.payload,
                                a = e.data.findIndex((function(e) { return e.id === n.payload.id }));
                            a >= 0 && e.data.splice(a, 1), e.data.unshift(t)
                        },
                        remove: function(e, n) {
                            var t = e.data.findIndex((function(e) { return e.id === n.payload }));
                            t >= 0 && e.data.splice(t, 1)
                        },
                        clear: function(e) { e.data = [] }
                    }
                }),
                ni = ei.actions,
                ti = ni.clear,
                ai = ni.remove,
                ii = ni.push,
                ri = ei.reducer,
                oi = t(937),
                ci = t(933),
                si = t(138),
                li = t(154),
                di = t(174),
                ui = function(e) { var n = e.action; return n.url.startsWith("http") ? Object(V.jsx)(je.a, Object(w.a)(Object(w.a)({ as: "a", scale: "sm", href: n.url }, Object(di.a)()), {}, { children: n.text })) : Object(V.jsx)(je.a, { as: O.b, scale: "sm", to: n.url, children: n.text }) },
                pi = "success",
                bi = "danger",
                mi = "warning",
                fi = "info",
                hi = ["toast", "onRemove", "style", "ttl"],
                gi = (fa = {}, Object(De.a)(fa, fi, si.b.INFO), Object(De.a)(fa, pi, si.b.SUCCESS), Object(De.a)(fa, bi, si.b.DANGER), Object(De.a)(fa, mi, si.b.WARNING), fa),
                xi = f.default.div(ha || (ha = Object(m.a)(["\n  right: 16px;\n  position: fixed;\n  max-width: calc(100% - 32px);\n  transition: all 250ms ease-in;\n  width: 100%;\n\n  ", " {\n    max-width: 400px;\n  }\n"])), (function(e) { return e.theme.mediaQueries.sm })),
                ji = function(e) {
                    var n = e.toast,
                        t = e.onRemove,
                        a = e.style,
                        i = e.ttl,
                        r = Object(Be.a)(e, hi),
                        o = Object(c.useRef)(),
                        s = Object(c.useRef)(null),
                        l = Object(c.useRef)(t),
                        d = n.id,
                        u = n.title,
                        p = n.description,
                        b = n.type,
                        m = n.action,
                        f = Object(c.useCallback)((function() { return l.current(d) }), [d, l]);
                    return Object(c.useEffect)((function() {
                        return o.current && clearTimeout(o.current), o.current = window.setTimeout((function() { f() }), i),
                            function() { clearTimeout(o.current) }
                    }), [o, i, f]), Object(V.jsx)(ci.a, Object(w.a)(Object(w.a)({ nodeRef: s, timeout: 250, style: a }, r), {}, { children: Object(V.jsx)(xi, { ref: s, onMouseEnter: function() { clearTimeout(o.current) }, onMouseLeave: function() { o.current && clearTimeout(o.current), o.current = window.setTimeout((function() { f() }), i) }, children: Object(V.jsx)(si.a, { title: u, variant: gi[b], onClick: f, children: m ? Object(V.jsxs)(V.Fragment, { children: [Object(V.jsx)(li.a, { as: "p", mb: "8px", color: "textSubtle", children: p }), Object(V.jsx)(ui, { action: m })] }) : p }) }) }))
                },
                Oi = f.default.div(ga || (ga = Object(m.a)(["\n  .enter,\n  .appear {\n    opacity: 0.01;\n  }\n\n  .enter.enter-active,\n  .appear.appear-active {\n    opacity: 1;\n    transition: opacity 250ms ease-in;\n  }\n\n  .exit {\n    opacity: 1;\n  }\n\n  .exit.exit-active {\n    opacity: 0.01;\n    transition: opacity 250ms ease-out;\n  }\n"]))),
                yi = function(e) {
                    var n = e.toasts,
                        t = e.onRemove,
                        a = e.ttl,
                        i = void 0 === a ? 6e3 : a,
                        r = e.stackSpacing,
                        o = void 0 === r ? 24 : r;
                    return Object(V.jsx)(Oi, {
                        children: Object(V.jsx)(oi.a, {
                            children: n.map((function(e, n) {
                                var a = (1e3 - n).toString(),
                                    r = 80 + n * o;
                                return Object(V.jsx)(ji, { toast: e, onRemove: t, ttl: i, style: { top: "".concat(r, "px"), zIndex: a } }, e.id)
                            }))
                        })
                    })
                },
                Ci = function() { var e = Object(k.b)(); return Object(c.useMemo)((function() { var n = function(n) { return e(ii(n)) }; return { toastError: function(e, t) { return n({ id: Object(L.kebabCase)(e), type: bi, title: e, description: t }) }, toastInfo: function(e, t) { return n({ id: Object(L.kebabCase)(e), type: fi, title: e, description: t }) }, toastSuccess: function(e, t) { return n({ id: Object(L.kebabCase)(e), type: pi, title: e, description: t }) }, toastWarning: function(e, t) { return n({ id: Object(L.kebabCase)(e), type: mi, title: e, description: t }) }, push: n, remove: function(n) { return e(ai(n)) }, clear: function() { return e(ti()) } } }), [e]) };
            var vi = t(454),
                wi = t.n(vi),
                ki = { profileLink: "https://exchange.soupsswap.io", noProfileLink: "https://exchange.soupsswap.io" },
                Ti = function() {
                    var e = Object(c.useState)(ki),
                        n = Object(j.a)(e, 2),
                        t = n[0],
                        a = n[1],
                        i = sn().account;
                    return Object(c.useEffect)((function() {
                        if (i) try {
                            var e = wi.a.get("profile_".concat(i));
                            if (e) {
                                var n = JSON.parse(e);
                                a((function(e) { return Object(w.a)(Object(w.a)({}, e), {}, { username: n.username, image: n.avatar }) }))
                            }
                        } catch (t) { a(ki) } else a(ki)
                    }), [i, a]), t
                },
                Mi = function() {
                    var e = Object(Y.d)(),
                        n = e.activate,
                        t = e.deactivate,
                        a = Ci().toastError;
                    return {
                        login: Object(c.useCallback)((function(e) {
                            var t = cn[e];
                            t ? n(t, function() {
                                var e = Object(K.a)(W.a.mark((function e(n) {
                                    return W.a.wrap((function(e) {
                                        for (;;) switch (e.prev = e.next) {
                                            case 0:
                                                window.localStorage.removeItem(Re), n instanceof Y.a ? a("Unsupported Chain Id", "Unsupported Chain Id Error. Check your chain Id.") : n instanceof He.b || n instanceof Ze.NoBscProviderError ? a("Provider Error", "No provider was found") : n instanceof He.c || n instanceof ze.a ? (t instanceof ze.b && (t.walletConnectProvider = null), a("Authorization Error", "Please authorize to access your account")) : a(n.name, n.message);
                                            case 2:
                                            case "end":
                                                return e.stop()
                                        }
                                    }), e)
                                })));
                                return function(n) { return e.apply(this, arguments) }
                            }()) : a("Can't find connector", "The connector config is wrong")
                        }), []),
                        logout: t
                    }
                },
                Li = [{ label: "Home", href: "isScroll", isScrollTo: "Home" }, { label: "Dapp", href: "#", target: "_blank", isScrollTo: "Dapp" }, { label: "Game Play", href: "isScroll", isScrollTo: "GamePlay" }, { label: "Moba Esport", href: "isScroll", isScrollTo: "MobaEsport" }, { label: "NFTs Item", href: "isScroll", isScrollTo: "NFTsItem" }, { label: "Zuki Token", href: "isScroll", isScrollTo: "ZukiToken" }, { label: "RoadMap", href: "isScroll", isScrollTo: "RoadMap" }, { label: "Teams", href: "isScroll", isScrollTo: "Teams" }, { label: "Advisors", href: "isScroll", isScrollTo: "Advisors" }, { label: "Backers & Partners", href: "isScroll", isScrollTo: "BackersPartners" }, { label: "Documents", href: "#", target: "_blank" }, { label: "Contact Us", href: "isScroll", isScrollTo: "footer" }],
                Ii = function(e) {
                    var n = Object(Y.d)().account,
                        t = Mi(),
                        a = t.login,
                        i = t.logout,
                        r = function() {
                            var e = Object(k.b)(),
                                n = Ci().toastError;
                            return {
                                onSearch: Object(c.useCallback)((function(t) {
                                    var a = ia(t);
                                    a ? e(H(a)) : n("Address is not valid!!!")
                                }), [e, n])
                            }
                        }().onSearch,
                        o = Object(c.useContext)(Na),
                        s = o.selectedLanguage,
                        l = o.setSelectedLanguage,
                        d = $a(),
                        u = d.isDark,
                        p = d.toggleTheme,
                        b = Ti();
                    return Object(V.jsx)(Ta, Object(w.a)({ links: Li, account: n, login: a, logout: i, isDark: u, toggleTheme: p, currentLang: (null === s || void 0 === s ? void 0 : s.code) || "", langs: La, setLang: l, profile: b, onSearch: r }, e))
                };
            var Ni = function(e) { var n = e.location; return Object(V.jsx)(y.a, { to: Object(w.a)(Object(w.a)({}, n), {}, { pathname: "/" }) }) },
                Ai = t(129),
                Ei = t(927),
                Si = t(316),
                Fi = t(202),
                Ri = { pending: Object(I.b)("lists/fetchTokenList/pending"), fulfilled: Object(I.b)("lists/fetchTokenList/fulfilled"), rejected: Object(I.b)("lists/fetchTokenList/rejected") },
                Bi = Object(I.b)("lists/acceptListUpdate"),
                Di = Object(I.b)("lists/addList"),
                Ui = Object(I.b)("lists/removeList"),
                Hi = Object(I.b)("lists/selectList");
            Object(I.b)("lists/rejectVersionUpdate");

            function zi(e) { return "v".concat(e.major, ".").concat(e.minor, ".").concat(e.patch) }
            var Vi, Zi, Pi, _i, Gi, Wi = t(455),
                Ki = Object(f.default)(Wi.Box)(Vi || (Vi = Object(m.a)(["\n  width: 100%;\n  display: flex;\n  padding: 0;\n  align-items: ", ";\n  padding: ", ";\n  border: ", ";\n  border-radius: ", ";\n"])), (function(e) { return e.align || "center" }), (function(e) { return e.padding }), (function(e) { return e.border }), (function(e) { return e.borderRadius })),
                Yi = (Object(f.default)(Ki)(Zi || (Zi = Object(m.a)(["\n  justify-content: space-between;\n"]))), f.default.div(Pi || (Pi = Object(m.a)(["\n  display: flex;\n  align-items: flex-end;\n"]))), Object(f.default)(Ki)(_i || (_i = Object(m.a)(["\n  flex-wrap: wrap;\n  margin: ", ";\n  justify-content: ", ";\n\n  & > * {\n    margin: ", " !important;\n  }\n"])), (function(e) { var n = e.gap; return n && "-".concat(n) }), (function(e) { var n = e.justify; return n && n }), (function(e) { return e.gap })));
            Object(f.default)(Ki)(Gi || (Gi = Object(m.a)(["\n  width: fit-content;\n  margin: ", ";\n"])), (function(e) { var n = e.gap; return n && "-".concat(n) }));

            function Qi(e) {
                var n = e.popKey,
                    t = e.listUrl,
                    a = e.oldList,
                    i = e.newList,
                    r = e.auto,
                    o = dn(),
                    l = Object(c.useCallback)((function() { return o(n) }), [n, o]),
                    d = Object(k.b)(),
                    u = Object(c.useCallback)((function() { r || (d(Bi(t)), l()) }), [r, d, t, l]),
                    p = Object(c.useMemo)((function() { return Object(Fi.b)(a.tokens, i.tokens) }), [i.tokens, a.tokens]),
                    b = p.added,
                    m = p.changed,
                    f = p.removed,
                    h = Object(c.useMemo)((function() { return Object.keys(m).reduce((function(e, n) { return e + Object.keys(m[n]).length }), 0) }), [m]);
                return Object(V.jsx)(Yi, { children: Object(V.jsx)(Ai.a, { style: { flex: "1" }, gap: "8px", children: r ? Object(V.jsxs)(Ot.e, { children: ['The token list "', a.name, '" has been updated to ', Object(V.jsx)("strong", { children: zi(i.version) }), "."] }) : Object(V.jsxs)(V.Fragment, { children: [Object(V.jsxs)("div", { children: [Object(V.jsxs)(Ot.e, { fontSize: "14px", children: ['An update is available for the token list "', a.name, '" (', zi(a.version), " to", " ", zi(i.version), ")."] }), Object(V.jsxs)("ul", { children: [b.length > 0 ? Object(V.jsxs)("li", { children: [b.map((function(e, n) { return Object(V.jsxs)(s.a.Fragment, { children: [Object(V.jsx)("strong", { title: e.address, children: e.symbol }), n === b.length - 1 ? null : ", "] }, "".concat(e.chainId, "-").concat(e.address)) })), " ", "added"] }) : null, f.length > 0 ? Object(V.jsxs)("li", { children: [f.map((function(e, n) { return Object(V.jsxs)(s.a.Fragment, { children: [Object(V.jsx)("strong", { title: e.address, children: e.symbol }), n === f.length - 1 ? null : ", "] }, "".concat(e.chainId, "-").concat(e.address)) })), " ", "removed"] }) : null, h > 0 ? Object(V.jsxs)("li", { children: [h, " tokens updated"] }) : null] })] }), Object(V.jsxs)(Yi, { children: [Object(V.jsx)("div", { style: { flexGrow: 1, marginRight: 12 }, children: Object(V.jsx)(Ot.a, { onClick: u, children: "Accept update" }) }), Object(V.jsx)("div", { style: { flexGrow: 1 }, children: Object(V.jsx)(Ot.a, { onClick: l, children: "Dismiss" }) })] })] }) }) })
            }
            var qi, Xi, Ji, $i, er, nr = t(925),
                tr = t(926),
                ar = ["target", "href", "rel"],
                ir = (f.default.button(qi || (qi = Object(m.a)(["\n  border: none;\n  text-decoration: none;\n  background: none;\n\n  cursor: ", ";\n  color: ", ";\n  font-weight: 500;\n\n  :hover {\n    text-decoration: ", ";\n  }\n\n  :focus {\n    outline: none;\n    text-decoration: ", ";\n  }\n\n  :active {\n    text-decoration: none;\n  }\n"])), (function(e) { return e.disabled ? "default" : "pointer" }), (function(e) { var n = e.theme; return e.disabled ? n.colors.textSubtle : n.colors.primary }), (function(e) { return e.disabled ? null : "underline" }), (function(e) { return e.disabled ? null : "underline" })), Object(f.default)(O.b)(Xi || (Xi = Object(m.a)(["\n  text-decoration: none;\n  cursor: pointer;\n  color: ", ";\n  font-weight: 500;\n\n  :hover {\n    text-decoration: underline;\n  }\n\n  :focus {\n    outline: none;\n    text-decoration: underline;\n  }\n\n  :active {\n    text-decoration: none;\n  }\n"])), (function(e) { return e.theme.colors.primary })), f.default.a(Ji || (Ji = Object(m.a)(["\n  text-decoration: none;\n  cursor: pointer;\n  color: ", ";\n  font-weight: 500;\n\n  :hover {\n    text-decoration: underline;\n  }\n\n  :focus {\n    outline: none;\n    text-decoration: underline;\n  }\n\n  :active {\n    text-decoration: none;\n  }\n"])), (function(e) { return e.theme.colors.primary })));

            function rr(e) {
                var n = e.target,
                    t = void 0 === n ? "_blank" : n,
                    a = e.href,
                    i = e.rel,
                    r = void 0 === i ? "noopener noreferrer" : i,
                    o = Object(Be.a)(e, ar),
                    s = Object(c.useCallback)((function(e) { "_blank" === t || e.ctrlKey || e.metaKey || e.preventDefault() }), [t]);
                return Object(V.jsx)(ir, Object(w.a)({ target: t, rel: r, href: a, onClick: s }, o))
            }
            var or, cr, sr, lr, dr = Object(f.keyframes)($i || ($i = Object(m.a)(["\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n"]))),
                ur = (f.default.img(er || (er = Object(m.a)(["\n  animation: 2s ", " linear infinite;\n  width: 16px;\n  height: 16px;\n"])), dr), Object(f.default)(Yi)(or || (or = Object(m.a)(["\n  flex-wrap: nowrap;\n"]))));

            function pr(e) {
                var n = e.hash,
                    t = e.success,
                    a = e.summary,
                    i = sn().chainId,
                    r = Object(c.useContext)(f.ThemeContext);
                return Object(V.jsxs)(ur, { children: [Object(V.jsx)("div", { style: { paddingRight: 16 }, children: t ? Object(V.jsx)(nr.a, { color: r.colors.success, size: 24 }) : Object(V.jsx)(tr.a, { color: r.colors.failure, size: 24 }) }), Object(V.jsxs)(Ai.a, { gap: "8px", children: [Object(V.jsx)(Ot.e, { children: null !== a && void 0 !== a ? a : "Hash: ".concat(n.slice(0, 8), "...").concat(n.slice(58, 65)) }), i && Object(V.jsx)(rr, { href: ma(i, n, "transaction"), children: "View on bscscan" })] })] })
            }
            var br, mr, fr, hr = Object(f.default)(Ei.a)(cr || (cr = Object(m.a)(["\n  position: absolute;\n  right: 10px;\n  top: 10px;\n\n  :hover {\n    cursor: pointer;\n  }\n"]))),
                gr = f.default.div(sr || (sr = Object(m.a)(["\n  display: inline-block;\n  width: 100%;\n  padding: 1em;\n  background-color: ", ";\n  position: relative;\n  border-radius: 10px;\n  padding: 20px;\n  padding-right: 35px;\n  overflow: hidden;\n\n  ", " {\n    min-width: 290px;\n  }\n"])), (function(e) { return e.theme.colors.invertedContrast }), (function(e) { return e.theme.mediaQueries.sm })),
                xr = f.default.div(lr || (lr = Object(m.a)(["\n  position: absolute;\n  bottom: 0px;\n  left: 0px;\n  width: 100%;\n  height: 2px;\n  background-color: ", ";\n"])), (function(e) { return e.theme.colors.tertiary })),
                jr = Object(Si.a)(xr);

            function Or(e) {
                var n = e.removeAfterMs,
                    t = e.content,
                    a = e.popKey,
                    i = dn(),
                    r = Object(c.useCallback)((function() { return i(a) }), [a, i]);
                Object(c.useEffect)((function() { if (null !== n) { var e = setTimeout((function() { r() }), n); return function() { clearTimeout(e) } } }), [n, r]);
                var o, s = Object(c.useContext)(f.ThemeContext);
                if ("txn" in t) {
                    var l = t.txn,
                        d = l.hash,
                        u = l.success,
                        p = l.summary;
                    o = Object(V.jsx)(pr, { hash: d, success: u, summary: p })
                } else if ("listUpdate" in t) {
                    var b = t.listUpdate,
                        m = b.listUrl,
                        h = b.oldList,
                        g = b.newList,
                        x = b.auto;
                    o = Object(V.jsx)(Qi, { popKey: a, listUrl: m, oldList: h, newList: g, auto: x })
                }
                var j = Object(Si.b)({ from: { width: "100%" }, to: { width: "0%" }, config: { duration: null !== n && void 0 !== n ? n : void 0 } });
                return Object(V.jsxs)(gr, { children: [Object(V.jsx)(hr, { color: s.colors.textSubtle, onClick: r }), o, null !== n ? Object(V.jsx)(jr, { style: j }) : null] })
            }
            var yr, Cr = f.default.div(br || (br = Object(m.a)(["\n  position: relative;\n  max-width: 100%;\n  height: ", ";\n  margin: ", ";\n  margin-bottom: ", "};\n  display: none;\n\n  ", " {\n    display: block;\n  }\n"])), (function(e) { return e.height }), (function(e) { return e.height ? "0 auto;" : 0 }), (function(e) { return e.height ? "20px" : 0 }), (function(e) { return e.theme.mediaQueries.sm })),
                vr = f.default.div(mr || (mr = Object(m.a)(["\n  height: 99%;\n  overflow-x: auto;\n  overflow-y: hidden;\n  display: flex;\n  flex-direction: row;\n  -webkit-overflow-scrolling: touch;\n  ::-webkit-scrollbar {\n    display: none;\n  }\n"]))),
                wr = Object(f.default)(Ai.a)(fr || (fr = Object(m.a)(["\n  position: fixed;\n  top: 64px;\n  right: 1rem;\n  max-width: 355px !important;\n  width: 100%;\n  z-index: 2;\n\n  ", " {\n    display: none;\n  }\n"])), (function(e) { return e.theme.mediaQueries.sm }));

            function kr() { var e = function() { var e = Object(k.c)((function(e) { return e.application.popupList })); return Object(c.useMemo)((function() { return e.filter((function(e) { return e.show })) }), [e]) }(); return Object(V.jsxs)(V.Fragment, { children: [Object(V.jsx)(wr, { gap: "20px", children: e.map((function(e) { return Object(V.jsx)(Or, { content: e.content, popKey: e.key, removeAfterMs: e.removeAfterMs }, e.key) })) }), Object(V.jsx)(Cr, { height: (null === e || void 0 === e ? void 0 : e.length) > 0 ? "fit-content" : 0, children: Object(V.jsx)(vr, { children: e.slice(0).reverse().map((function(e) { return Object(V.jsx)(Or, { content: e.content, popKey: e.key, removeAfterMs: e.removeAfterMs }, e.key) })) }) })] }) }
            var Tr = f.default.div(yr || (yr = Object(m.a)(["\n  width: 100%;\n  min-height: ", ";\n\n  display: flex;\n  justify-content: center;\n  align-items: center;\n"])), (function(e) { return e.height }));

            function Mr(e) { var n = e.height; return Object(V.jsx)(Tr, { height: n, children: Object(V.jsxs)("svg", { xmlns: "http://www.w3.org/2000/svg", xmlnsXlink: "http://www.w3.org/1999/xlink", style: { margin: "auto", display: "block", shapeRendering: "auto" }, width: "144px", height: "144px", viewBox: "0 0 100 100", preserveAspectRatio: "xMidYMid", children: [Object(V.jsx)("g", { transform: "translate(67,50)", children: Object(V.jsx)("g", { transform: "rotate(0)", children: Object(V.jsxs)("circle", { cx: "0", cy: "0", r: "4", fill: "#cb4e08", fillOpacity: "1", children: [Object(V.jsx)("animateTransform", { attributeName: "transform", type: "scale", begin: "-0.9557945041816008s", values: "1.55 1;1 1", keyTimes: "0;1", dur: "1.075268817204301s", repeatCount: "indefinite" }), Object(V.jsx)("animate", { attributeName: "fill-opacity", keyTimes: "0;1", dur: "1.075268817204301s", repeatCount: "indefinite", values: "1;0", begin: "-0.9557945041816008s" })] }) }) }), Object(V.jsx)("g", { transform: "translate(63.022755533022625,60.92738936467117)", children: Object(V.jsx)("g", { transform: "rotate(40)", children: Object(V.jsxs)("circle", { cx: "0", cy: "0", r: "4", fill: "#cb4e08", fillOpacity: "0.8888888888888888", children: [Object(V.jsx)("animateTransform", { attributeName: "transform", type: "scale", begin: "-0.8363201911589008s", values: "1.55 1;1 1", keyTimes: "0;1", dur: "1.075268817204301s", repeatCount: "indefinite" }), Object(V.jsx)("animate", { attributeName: "fill-opacity", keyTimes: "0;1", dur: "1.075268817204301s", repeatCount: "indefinite", values: "1;0", begin: "-0.8363201911589008s" })] }) }) }), Object(V.jsx)("g", { transform: "translate(52.952019020337815,66.74173180120754)", children: Object(V.jsx)("g", { transform: "rotate(80)", children: Object(V.jsxs)("circle", { cx: "0", cy: "0", r: "4", fill: "#cb4e08", fillOpacity: "0.7777777777777778", children: [Object(V.jsx)("animateTransform", { attributeName: "transform", type: "scale", begin: "-0.7168458781362006s", values: "1.55 1;1 1", keyTimes: "0;1", dur: "1.075268817204301s", repeatCount: "indefinite" }), Object(V.jsx)("animate", { attributeName: "fill-opacity", keyTimes: "0;1", dur: "1.075268817204301s", repeatCount: "indefinite", values: "1;0", begin: "-0.7168458781362006s" })] }) }) }), Object(V.jsx)("g", { transform: "translate(41.5,64.72243186433546)", children: Object(V.jsx)("g", { transform: "rotate(119.99999999999999)", children: Object(V.jsxs)("circle", { cx: "0", cy: "0", r: "4", fill: "#cb4e08", fillOpacity: "0.6666666666666666", children: [Object(V.jsx)("animateTransform", { attributeName: "transform", type: "scale", begin: "-0.5973715651135005s", values: "1.55 1;1 1", keyTimes: "0;1", dur: "1.075268817204301s", repeatCount: "indefinite" }), Object(V.jsx)("animate", { attributeName: "fill-opacity", keyTimes: "0;1", dur: "1.075268817204301s", repeatCount: "indefinite", values: "1;0", begin: "-0.5973715651135005s" })] }) }) }), Object(V.jsx)("g", { transform: "translate(34.02522544663956,55.81434243653637)", children: Object(V.jsx)("g", { transform: "rotate(160)", children: Object(V.jsxs)("circle", { cx: "0", cy: "0", r: "4", fill: "#cb4e08", fillOpacity: "0.5555555555555556", children: [Object(V.jsx)("animateTransform", { attributeName: "transform", type: "scale", begin: "-0.4778972520908004s", values: "1.55 1;1 1", keyTimes: "0;1", dur: "1.075268817204301s", repeatCount: "indefinite" }), Object(V.jsx)("animate", { attributeName: "fill-opacity", keyTimes: "0;1", dur: "1.075268817204301s", repeatCount: "indefinite", values: "1;0", begin: "-0.4778972520908004s" })] }) }) }), Object(V.jsx)("g", { transform: "translate(34.02522544663955,44.185657563463636)", children: Object(V.jsx)("g", { transform: "rotate(200)", children: Object(V.jsxs)("circle", { cx: "0", cy: "0", r: "4", fill: "#cb4e08", fillOpacity: "0.4444444444444444", children: [Object(V.jsx)("animateTransform", { attributeName: "transform", type: "scale", begin: "-0.3584229390681003s", values: "1.55 1;1 1", keyTimes: "0;1", dur: "1.075268817204301s", repeatCount: "indefinite" }), Object(V.jsx)("animate", { attributeName: "fill-opacity", keyTimes: "0;1", dur: "1.075268817204301s", repeatCount: "indefinite", values: "1;0", begin: "-0.3584229390681003s" })] }) }) }), Object(V.jsx)("g", { transform: "translate(41.49999999999999,35.277568135664545)", children: Object(V.jsx)("g", { transform: "rotate(239.99999999999997)", children: Object(V.jsxs)("circle", { cx: "0", cy: "0", r: "4", fill: "#cb4e08", fillOpacity: "0.3333333333333333", children: [Object(V.jsx)("animateTransform", { attributeName: "transform", type: "scale", begin: "-0.2389486260454002s", values: "1.55 1;1 1", keyTimes: "0;1", dur: "1.075268817204301s", repeatCount: "indefinite" }), Object(V.jsx)("animate", { attributeName: "fill-opacity", keyTimes: "0;1", dur: "1.075268817204301s", repeatCount: "indefinite", values: "1;0", begin: "-0.2389486260454002s" })] }) }) }), Object(V.jsx)("g", { transform: "translate(52.95201902033781,33.258268198792464)", children: Object(V.jsx)("g", { transform: "rotate(280)", children: Object(V.jsxs)("circle", { cx: "0", cy: "0", r: "4", fill: "#cb4e08", fillOpacity: "0.2222222222222222", children: [Object(V.jsx)("animateTransform", { attributeName: "transform", type: "scale", begin: "-0.1194743130227001s", values: "1.55 1;1 1", keyTimes: "0;1", dur: "1.075268817204301s", repeatCount: "indefinite" }), Object(V.jsx)("animate", { attributeName: "fill-opacity", keyTimes: "0;1", dur: "1.075268817204301s", repeatCount: "indefinite", values: "1;0", begin: "-0.1194743130227001s" })] }) }) }), Object(V.jsx)("g", { transform: "translate(63.02275553302262,39.07261063532883)", children: Object(V.jsx)("g", { transform: "rotate(320)", children: Object(V.jsxs)("circle", { cx: "0", cy: "0", r: "4", fill: "#cb4e08", fillOpacity: "0.1111111111111111", children: [Object(V.jsx)("animateTransform", { attributeName: "transform", type: "scale", begin: "0s", values: "1.55 1;1 1", keyTimes: "0;1", dur: "1.075268817204301s", repeatCount: "indefinite" }), Object(V.jsx)("animate", { attributeName: "fill-opacity", keyTimes: "0;1", dur: "1.075268817204301s", repeatCount: "indefinite", values: "1;0", begin: "0s" })] }) }) })] }) }) }
            var Lr, Ir, Nr, Ar, Er, Sr, Fr, Rr, Br, Dr, Ur, Hr, zr, Vr, Zr, Pr, _r, Gr, Wr, Kr, Yr, Qr, qr, Xr, Jr, $r, eo, no, to, ao, io, ro, oo, co, so, lo, uo, po, bo, mo, fo, ho, go, xo, jo, Oo = t(181),
                yo = t(103),
                Co = Object(f.default)(jt.Element)(Lr || (Lr = Object(m.a)(["\n  width: 100%;\n  height: fit-content;\n  min-height: 190px;\n  max-width: 1100px;\n\n  margin: 0 auto;\n\n  padding: 50px 16px 300px 16px;\n  ", " {\n    padding: 200px 10px 100px 10px;\n  }\n\n  .logo {\n    width: 100%;\n    max-width: 100px;\n  }\n\n  .copyright {\n    margin-top: 20px;\n    padding-left: 10px;\n\n    color: #ffffff;\n    font-family: Roboto Slab;\n    font-style: normal;\n    font-weight: 900;\n    font-size: 15px;\n    line-height: 150%;\n  }\n\n  .footer-logo {\n    width: 60px;\n    margin: auto;\n    @media (min-width: 767px) {\n      width: 100px;\n      margin: 0;\n    }\n  }\n"])), (function(e) { return e.theme.mediaQueries.md })),
                vo = f.default.ul(Ir || (Ir = Object(m.a)(["\n  list-style: none;\n\n  display: flex;\n  flex-direction: column;\n\n  li {\n    font-family: Roboto Slab;\n    color: #ffffff;\n    font-style: normal;\n    font-weight: 400;\n    font-size: 13px;\n    line-height: 150%;\n\n    padding: 2px 0;\n\n    cursor: pointer;\n\n    ", " {\n      font-size: 16px;\n      flex-direction: column;\n      justify-content: space-between;\n      padding: 2px 0;\n    }\n  }\n\n  a {\n    color: inherit;\n    &:hover,\n    &:active {\n      color: inherit;\n      opacity: 0.65;\n    }\n  }\n"])), (function(e) { return e.theme.mediaQueries.sm })),
                wo = f.default.div(Nr || (Nr = Object(m.a)(["\n  width: 100%;\n  max-width: 500px;\n  margin: auto;\n\n  display: block;\n  @media (min-width: 768px) {\n    display: none;\n  }\n\n  .footer-penguin {\n    width: 100px;\n    position: absolute;\n    left: 65%;\n    bottom: 23px;\n  }\n\n  .footer-nft-01 {\n    width: 200px;\n    position: absolute;\n    left: 5%;\n    bottom: 73px;\n    transform: scaleX(-1);\n  }\n"]))),
                ko = function() { var e = Object(k.c)((function(e) { return e.application.githubConfig })).footer; return Object(V.jsxs)(Co, { name: "footer", className: "element", children: [Object(V.jsxs)(Oo.a, { gutter: [20, 20], children: [Object(V.jsx)(yo.a, { xs: 24, md: 5, lg: 6, children: Object(V.jsx)("div", { className: "copyright", children: "Copyright \xa9 2021 Zuki Moba" }) }), Object(V.jsxs)(yo.a, { xs: 16, md: 7, lg: 7, children: [Object(V.jsx)(Ot.e, { color: "#00FFD8", fontSize: "16px", fontWeight: "bold", marginBottom: "6px", fontFamily: "Kanit", children: "CONTACT US" }), Object(V.jsx)(vo, { children: Object(V.jsx)("li", { children: Object(V.jsx)("a", { href: "mailto:contact@zukimoba.com", children: "contact@zukimoba.com" }) }) })] }), Object(V.jsxs)(yo.a, { xs: 8, md: 4, lg: 4, children: [Object(V.jsx)(Ot.e, { color: "#00FFD8", fontSize: "16px", fontWeight: "bold", marginBottom: "6px", fontFamily: "Kanit", children: "ABOUT US" }), Object(V.jsxs)(vo, { children: [Object(V.jsx)("li", { children: Object(V.jsx)(jt.Link, { to: "Teams", children: "Team" }) }), Object(V.jsx)("li", { children: Object(V.jsx)(jt.Link, { to: "Advisors", children: Object(V.jsx)("span", { children: "Advisor" }) }) }), Object(V.jsx)("li", { children: Object(V.jsx)("a", { href: "https://docs.zukimoba.com/", target: "_blank", rel: "noreferrer", children: "Document" }) })] })] }), Object(V.jsxs)(yo.a, { xs: 16, md: 4, lg: 4, children: [Object(V.jsx)(Ot.e, { color: "#00FFD8", fontSize: "16px", fontWeight: "bold", marginBottom: "6px", fontFamily: "Kanit", children: "QUICK LINK" }), Object(V.jsxs)(vo, { children: [Object(V.jsx)("li", { children: Object(V.jsx)(Kt.a, { title: "COMING SOON", children: Object(V.jsx)("span", { children: "Game story" }) }) }), Object(V.jsx)("li", { children: Object(V.jsx)(Kt.a, { title: "COMING SOON", children: Object(V.jsx)("span", { children: "Characters" }) }) }), Object(V.jsx)("li", { children: Object(V.jsx)(Kt.a, { title: "COMING SOON", children: Object(V.jsx)("span", { children: "Marketplace" }) }) }), Object(V.jsx)("li", { children: Object(V.jsx)(Kt.a, { title: "COMING SOON", children: Object(V.jsx)("span", { children: "Our partner" }) }) })] })] }), Object(V.jsxs)(yo.a, { xs: 8, md: 3, lg: 3, style: { maxWidth: "130px" }, children: [Object(V.jsx)(Ot.e, { color: "#00FFD8", fontSize: "16px", fontWeight: "bold", marginBottom: "6px", fontFamily: "Kanit", children: "SOCIAL" }), Object(V.jsx)(Oo.a, { gutter: [5, 5], children: (e || []).map((function(e, n) { return Object(V.jsx)(yo.a, { xs: 8, md: 8, children: Object(V.jsx)("a", { href: null === e || void 0 === e ? void 0 : e.link_to, target: null === e || void 0 === e ? void 0 : e.target, rel: "noreferrer", children: Object(V.jsx)("img", { src: null === e || void 0 === e ? void 0 : e.img_url, alt: null === e || void 0 === e ? void 0 : e.label, width: "30px", title: null === e || void 0 === e ? void 0 : e.label }) }) }, (null === e || void 0 === e ? void 0 : e.link_to) + n) })) })] })] }), Object(V.jsxs)(wo, { children: [Object(V.jsx)("img", { className: "footer-penguin", src: "/images/penguin.png", alt: "" }), Object(V.jsx)("img", { className: "footer-nft-01", src: "/images/nfts/nft-02.png", alt: "" })] })] }) },
                To = t(175),
                Mo = t.n(To),
                Lo = f.default.div(Ar || (Ar = Object(m.a)(["\n  background-image: url(/images/bg-section2.png);\n  background-size: cover;\n  background-position: top;\n  background-repeat: no-repeat;\n\n  .app-title {\n    color: #00ffd8;\n    font-family: Kanit;\n    font-weight: bold;\n    font-size: 30px;\n    line-height: 130%;\n    text-transform: uppercase;\n    text-align: center;\n\n    margin-bottom: 20px;\n\n    @media (min-width: 900px) {\n      font-size: 50px;\n    }\n  }\n\n  .app-des {\n    color: #ffffff;\n    font-size: 14px;\n    font-weight: 400;\n    line-height: 1.5;\n    margin: auto;\n    margin-bottom: 60px;\n    text-align: center;\n\n    @media (min-width: 900px) {\n      font-size: 18px;\n    }\n  }\n\n  .react-multi-carousel-list {\n    padding: 0 0 60px;\n  }\n  .react-multi-carousel-dot-list {\n    bottom: 20px;\n  }\n"]))),
                Io = f.default.div(Er || (Er = Object(m.a)(["\n  width: 100%;\n  max-width: 1100px;\n  margin: 0 auto;\n  padding: 100px 16px 70px;\n"]))),
                No = f.default.div(Sr || (Sr = Object(m.a)(["\n  position: relative;\n  text-align: center;\n  margin: 0 -50px;\n\n  .carousel-item-cover {\n    width: 100%;\n  }\n\n  .carousel-item-content {\n    margin-top: -30px;\n  }\n\n  .carousel-item-title {\n    color: #00ffd8;\n    font-family: Kanit;\n    font-weight: bold;\n    font-size: 26px;\n    line-height: 130%;\n    text-transform: uppercase;\n    text-align: center;\n    margin-bottom: 20px;\n  }\n"]))),
                Ao = function(e) {
                    var n = e.onClick,
                        t = e.active;
                    return Object(V.jsx)("div", { className: t ? "active" : "inactive", onClick: function() { return n() }, style: { width: t ? "60px" : "30px", height: "8px", background: t ? "#2CFEFD" : "#fff", borderRadius: "30px", margin: "0 6px", cursor: "pointer" } })
                },
                Eo = { superLargeDesktop: { breakpoint: { max: 4e3, min: 3e3 }, items: 3 }, desktop: { breakpoint: { max: 3e3, min: 1024 }, items: 3 }, tablet: { breakpoint: { max: 1024, min: 464 }, items: 2 }, mobile: { breakpoint: { max: 464, min: 0 }, items: 2 } },
                So = function() { return Object(V.jsx)(Lo, { children: Object(V.jsx)(jt.Element, { name: "GamePlay", className: "element", children: Object(V.jsxs)(Io, { children: [Object(V.jsx)("h2", { className: "app-title", children: "Gameplay" }), Object(V.jsx)("div", { className: "app-des", fontSize: "18px", style: { maxWidth: "900px" }, margin: "auto", textAlign: "center", marginBottom: "60px", children: "Zuki Moba is designed with the background of a fun snow shooting game, with simple gameplay and chibi graphics. You can choose between survival or team mode. In addition, in the battle, there are also Boss, destroy the Boss to upgrade the character and skills to win the battle." }), Object(V.jsxs)(Mo.a, { responsive: Eo, showDots: !0, customDot: Object(V.jsx)(Ao, {}), children: [Object(V.jsxs)(No, { children: [Object(V.jsx)("img", { className: "carousel-item-cover", src: "/images/gameplay/card-01.png", alt: "" }), Object(V.jsx)("div", { className: "carousel-item-content" })] }), Object(V.jsxs)(No, { children: [Object(V.jsx)("img", { className: "carousel-item-cover", src: "/images/gameplay/card-02.png", alt: "" }), Object(V.jsx)("div", { className: "carousel-item-content" })] }), Object(V.jsxs)(No, { children: [Object(V.jsx)("img", { className: "carousel-item-cover", src: "/images/gameplay/card-03.png", alt: "" }), Object(V.jsx)("div", { className: "carousel-item-content" })] }), Object(V.jsxs)(No, { children: [Object(V.jsx)("img", { className: "carousel-item-cover", src: "/images/gameplay/card-01.png", alt: "" }), Object(V.jsx)("div", { className: "carousel-item-content" })] }), Object(V.jsxs)(No, { children: [Object(V.jsx)("img", { className: "carousel-item-cover", src: "/images/gameplay/card-01.png", alt: "" }), Object(V.jsx)("div", { className: "carousel-item-content" })] })] })] }) }) }) },
                Fo = f.default.div(Fr || (Fr = Object(m.a)(["\n  padding-bottom: 80px;\n  background-image: url(/images/bg-section2.png);\n  background-size: cover;\n  background-position: bottom;\n  background-repeat: no-repeat;\n\n  .app-title {\n    color: #00ffd8;\n    font-family: Kanit;\n    font-weight: bold;\n    font-size: 30px;\n    line-height: 130%;\n    text-transform: uppercase;\n    text-align: center;\n\n    @media (min-width: 900px) {\n      font-size: 50px;\n    }\n  }\n\n  .app-title-earn {\n    color: #f8cb63;\n    font-family: Kanit;\n    font-weight: bold;\n    font-size: 30px;\n    line-height: 130%;\n    text-transform: uppercase;\n    text-align: center;\n\n    margin-bottom: 30px;\n\n    @media (min-width: 900px) {\n      font-size: 50px;\n      margin-bottom: 10px;\n    }\n  }\n\n  .app-des {\n    color: #ffffff;\n    font-size: 14px;\n    font-weight: 400;\n    line-height: 1.5;\n    margin: auto;\n    margin-bottom: 60px;\n    text-align: center;\n\n    @media (min-width: 900px) {\n      font-size: 18px;\n    }\n  }\n"]))),
                Ro = f.default.div(Rr || (Rr = Object(m.a)(["\n  width: 100%;\n  max-width: 1100px;\n\n  padding: 110px 16px 0;\n  margin: 0 auto;\n"]))),
                Bo = f.default.div(Br || (Br = Object(m.a)(["\n  width: 100%;\n  position: relative;\n\n  display: flex;\n  flex-flow: row wrap;\n  justify-content: space-between;\n"]))),
                Do = f.default.div(Dr || (Dr = Object(m.a)(["\n  padding: 40px 10px 40px 0;\n\n  .header-title {\n    width: 54vw;\n    margin-bottom: 30px;\n    @media (min-width: 1100px) {\n      width: 620px;\n    }\n  }\n  .download-appstore {\n    width: 14vw;\n    @media (min-width: 1100px) {\n      width: 180px;\n    }\n  }\n  .download-chplay {\n    width: 14vw;\n    @media (min-width: 1100px) {\n      width: 180px;\n    }\n  }\n"]))),
                Uo = f.default.div(Ur || (Ur = Object(m.a)(["\n  display: flex;\n  position: relative;\n  flex-direction: column;\n\n  .item-ball {\n    width: 36vw;\n    z-index: 2;\n\n    @media (min-width: 1100px) {\n      width: 410px;\n    }\n  }\n  .bg-ball {\n    width: 36vw;\n    margin-top: -90px;\n\n    z-index: 1;\n\n    @media (min-width: 1000px) {\n      width: 28vw;\n    }\n\n    @media (min-width: 1100px) {\n      width: 410px;\n    }\n  }\n"]))),
                Ho = f.default.div(Hr || (Hr = Object(m.a)(["\n  .mb-download-appstore {\n    width: 24vw;\n  }\n  .mb-download-chplay {\n    width: 24vw;\n  }\n\n  .mb-item-ball {\n    padding-top: 36px;\n    z-index: 2;\n  }\n  .mb-bg-ball {\n    margin-top: -30px;\n    z-index: 1;\n  }\n"]))),
                zo = function() { return Object(V.jsx)(Fo, { children: Object(V.jsx)(jt.Element, { name: "MobaEsport", className: "element", children: Object(V.jsxs)(Ro, { children: [Object(V.jsxs)("div", { children: [Object(V.jsx)("h2", { className: "app-title", children: "MOBA ESPORT" }), Object(V.jsx)("h2", { className: "app-title-earn", children: "Play to earn NFTs" }), !he.isMobile && Object(V.jsx)("div", { className: "app-des", children: "Zuki Moba is a blockchain game platform. We make blockchain NFTs." })] }), he.isMobile ? Object(V.jsxs)(Ho, { children: [Object(V.jsx)("img", { className: "header-title", src: "/images/i-phone.png", alt: "" }), Object(V.jsxs)(ge.a, { children: [Object(V.jsxs)(Do, { style: { width: "60%" }, children: [Object(V.jsx)(Ot.e, { fontSize: "14px", fontWeight: "600", textAlign: "center", children: "\u201cZuki Moba is a blockchain game platform. We make blockchain NFTs.\u201d" }), Object(V.jsx)("div", { style: { width: "60%", height: "4px", background: "#fff", margin: "10px auto" } }), Object(V.jsx)(Ot.e, { color: "#00FFD8", textAlign: "center", fontWeight: "bold", marginBottom: "10px", children: "ZUKI DEV TEAM" }), Object(V.jsxs)(ge.a, { justifyContent: "center", style: { gap: "10px" }, children: [Object(V.jsx)(Kt.a, { title: "COMING SOON", children: Object(V.jsx)("img", { className: "mb-download-appstore", src: "/images/download/download-appstore.png", alt: "", width: "184px", style: { cursor: "pointer" } }) }), Object(V.jsx)(Kt.a, { title: "COMING SOON", children: Object(V.jsx)("img", { className: "mb-download-chplay", src: "/images/download/download-chplay.png", alt: "", width: "184px", style: { cursor: "pointer" } }) })] })] }), Object(V.jsxs)(Uo, { style: { width: "40%", marginLeft: "-10px" }, children: [Object(V.jsx)("img", { className: "mb-item-ball", src: "/images/boss.png", alt: "" }), Object(V.jsx)("img", { className: "mb-bg-ball", src: "/images/ufo.png", alt: "" })] })] })] }) : Object(V.jsxs)(Bo, { children: [Object(V.jsxs)(Do, { children: [Object(V.jsx)("img", { className: "header-title", src: "/images/i-phone.png", alt: "" }), Object(V.jsx)(Ai.a, { gap: "30px", children: Object(V.jsxs)(ge.a, { justifyContent: "center", style: { gap: "30px" }, children: [Object(V.jsx)(Kt.a, { title: "COMING SOON", children: Object(V.jsx)("img", { className: "download-appstore", src: "/images/download/download-appstore.png", alt: "", width: "184px", style: { cursor: "pointer" } }) }), Object(V.jsx)(Kt.a, { title: "COMING SOON", children: Object(V.jsx)("img", { className: "download-chplay", src: "/images/download/download-chplay.png", alt: "", width: "184px", style: { cursor: "pointer" } }) })] }) })] }), Object(V.jsxs)(Uo, { children: [Object(V.jsx)("img", { className: "item-ball", src: "/images/boss.png", alt: "" }), Object(V.jsx)("img", { className: "bg-ball", src: "/images/ufo.png", alt: "" })] })] })] }) }) }) },
                Vo = ["label", "color", "fontSize", "logo"],
                Zo = f.default.div(zr || (zr = Object(m.a)(["\n  display: flex;\n  flex-flow: row nowrap;\n  align-items: center;\n\n  .wrapper-logo {\n    margin-right: 8px;\n  }\n  .wrapper-label {\n    font-weight: 600;\n    font-size: 16px;\n    color: rgb(4, 17, 29);\n    white-space: nowrap;\n    text-overflow: ellipsis;\n    overflow: hidden;\n  }\n"]))),
                Po = function(e) {
                    var n = e.label,
                        t = e.color,
                        a = e.fontSize,
                        i = e.logo,
                        r = Object(Be.a)(e, Vo);
                    return Object(V.jsxs)(Zo, Object(w.a)(Object(w.a)({}, r), {}, { children: [i && Object(V.jsx)("div", { className: "wrapper-logo", children: i }), n && Object(V.jsx)("div", { className: "wrapper-label", style: { color: t, fontSize: a }, children: n })] }))
                },
                _o = f.default.div(Vr || (Vr = Object(m.a)(["\n  position: relative;\n\n  .bg-top {\n    position: absolute;\n    left: 50%;\n    top: 0;\n    transform: translateX(-50%);\n  }\n  .bg-section {\n    width: 100%;\n    height: 1200px;\n    object-fit: cover;\n    object-position: top;\n    @media (min-width: 560px) {\n      height: 1040px;\n    }\n  }\n  .bg-bottom {\n    position: absolute;\n    left: 50%;\n    bottom: 0;\n    transform: translateX(-50%);\n  }\n\n  .app-title {\n    color: #00ffd8;\n    font-family: Kanit;\n    font-weight: bold;\n    font-size: 30px;\n    line-height: 130%;\n    text-transform: uppercase;\n    text-align: center;\n\n    margin-bottom: 20px;\n    z-index: 1;\n\n    @media (min-width: 900px) {\n      font-size: 50px;\n    }\n  }\n\n  .app-des {\n    color: #ffffff;\n    font-size: 14px;\n    font-weight: 400;\n    line-height: 1.5;\n    margin: auto;\n    margin-bottom: 60px;\n    text-align: center;\n\n    @media (min-width: 900px) {\n      font-size: 18px;\n    }\n  }\n\n  .body {\n    width: 100%;\n    max-width: 1100px;\n    margin: 0 auto;\n    padding: 100px 16px 0;\n\n    position: absolute;\n    top: 0;\n    left: 50%;\n    transform: translateX(-50%);\n\n    @media (min-width: 900px) {\n      padding: 130px 16px 0;\n    }\n  }\n\n  .react-multi-carousel-list {\n    padding: 0 0 80px;\n  }\n  .react-multi-carousel-dot-list {\n    bottom: 20px;\n  }\n\n  @media (min-width: 1000px) {\n    .ant-col-custom-xl-5 {\n      display: block;\n      flex: 0 0 20%;\n      max-width: 20%;\n    }\n  }\n"]))),
                Go = f.default.div(Zr || (Zr = Object(m.a)(["\n  display: flex;\n  justify-content: center;\n\n  padding: 0 10px 50px;\n\n  button {\n    color: #fff;\n    font-weight: bold;\n    font-size: 16px;\n    line-height: 130%;\n    text-transform: uppercase;\n\n    padding: 10px 14px;\n    margin: 0 10px;\n    background: transparent;\n    border: unset;\n    cursor: pointer;\n  }\n\n  button.active {\n    background: #c82840;\n  }\n"]))),
                Wo = f.default.div(Pr || (Pr = Object(m.a)(["\n  position: relative;\n  text-align: center;\n  margin: 0 0;\n  @media (min-width: 900px) {\n    margin: 0 10px;\n  }\n\n  .carousel-item-bg {\n    width: 100%;\n  }\n\n  .carousel-item-nft {\n    width: 100%;\n    height: 56%;\n    object-fit: contain;\n    object-position: center;\n\n    position: absolute;\n    top: 8%;\n    left: 50%;\n    transform: translateX(-50%);\n  }\n\n  .carousel-item-content {\n    width: 100%;\n    position: absolute;\n    left: 0;\n    bottom: 0;\n    padding: 14px 24px;\n\n    height: 18vw;\n    @media (min-width: 768px) {\n      height: 8.6vw;\n    }\n    @media (min-width: 1000px) {\n      height: 8.7vw;\n    }\n    @media (min-width: 1100px) {\n      height: 95px;\n    }\n  }\n\n  .carousel-item-title {\n    color: #00ffd8;\n    font-size: 12px;\n    font-family: Kanit;\n    font-weight: bold;\n    text-transform: uppercase;\n    text-align: left;\n    margin-bottom: 8px;\n\n    @media (min-width: 768px) {\n      font-size: 14px;\n    }\n    @media (min-width: 1000px) {\n      font-size: 14px;\n    }\n    @media (min-width: 1100px) {\n      font-size: 14px;\n    }\n  }\n\n  .carousel-item-price-title {\n    color: #2cfefd;\n    font-size: 12px;\n    font-weight: 400;\n    line-height: unset;\n\n    display: none;\n\n    @media (min-width: 768px) {\n      font-size: 16px;\n      display: block;\n    }\n  }\n"]))),
                Ko = function(e) {
                    var n = e.onClick,
                        t = e.active;
                    return Object(V.jsx)("div", { className: t ? "active" : "inactive", onClick: function() { return n() }, style: { width: t ? "60px" : "30px", height: "8px", background: t ? "#2CFEFD" : "#fff", borderRadius: "30px", margin: "0 6px", cursor: "pointer" } })
                },
                Yo = { superLargeDesktop: { breakpoint: { max: 4e3, min: 3e3 }, items: 1 }, desktop: { breakpoint: { max: 3e3, min: 1024 }, items: 1 }, tablet: { breakpoint: { max: 1024, min: 464 }, items: 1 }, mobile: { breakpoint: { max: 464, min: 0 }, items: 1 } },
                Qo = window.innerWidth,
                qo = [{ id: 1, cover: "/images/nfts/Sakai.png", title: "NFT CHARACTER", type: "CHARACTER", price: { logo: "/images/tokens/busd.png", number: "???", currency: "BUSD" } }, { id: 2, cover: "/images/nfts/Saki.png", title: "NFT CHARACTER", type: "CHARACTER", price: { logo: "/images/tokens/busd.png", number: "???", currency: "BUSD" } }, { id: 3, cover: "/images/nfts/Sakiko.png", title: "NFT CHARACTER", type: "CHARACTER", price: { logo: "/images/tokens/busd.png", number: "???", currency: "BUSD" } }, { id: 4, cover: "/images/nfts/Tomiyasu.png", title: "NFT CHARACTER", type: "CHARACTER", price: { logo: "/images/tokens/busd.png", number: "???", currency: "BUSD" } }],
                Xo = ["CHARACTER", "WEAPON"],
                Jo = function() {
                    var e = Object(c.useState)(Xo[0]),
                        n = Object(j.a)(e, 2),
                        t = n[0],
                        a = n[1],
                        i = Object(c.useMemo)((function() { if (!qo) return []; var e = qo.filter((function(e) { return e.type === t })); return Qo > 1e3 ? Object(L.chunk)(e, 4) : Object(L.chunk)(e, 8) }), [t]);
                    return Object(V.jsxs)(_o, { children: [Object(V.jsx)("img", { className: "bg-top", src: "/images/line-01.png", alt: "" }), Object(V.jsx)("img", { className: "bg-section", src: "/images/bg-section3.png", alt: "" }), Object(V.jsxs)(jt.Element, { name: "NFTsItem", className: "body element ", children: [Object(V.jsx)("h2", { className: "app-title", children: "NFTS item" }), Object(V.jsx)("div", { className: "app-des", children: "Earn your NFTs items like character, skin, gear, weapon, avatar, skill... by playing the game or lucky draw and sell it on the marketplace to make money." }), Object(V.jsx)(Go, { children: Object(V.jsx)("button", { type: "button", className: t === Xo[0] ? "active" : "", onClick: function() { return a(Xo[0]) }, children: "Character" }) }), Object(V.jsx)(Mo.a, { responsive: Yo, showDots: !0, customDot: Object(V.jsx)(Ko, {}), children: i.map((function(e, n) { return Object(V.jsx)(Oo.a, { gutter: [10, 30], children: e.map((function(e, n) { var t, a, i; return Object(V.jsx)(yo.a, { xs: 12, md: 6, children: Object(V.jsxs)(Wo, { children: [Object(V.jsx)("img", { className: "carousel-item-bg", src: "/images/bg-nft-item.png", alt: "" }), Object(V.jsx)("img", { className: "carousel-item-nft", src: e.cover, alt: "" }), Object(V.jsxs)("div", { className: "carousel-item-content", children: [Object(V.jsx)("div", { className: "carousel-item-title", children: e.title }), Object(V.jsxs)(Ot.d, { marginTop: "5px", justifyContent: "space-between", children: [Object(V.jsx)(Ot.e, { className: "carousel-item-price-title", children: "Price" }), Object(V.jsx)("div", { className: "price-number", children: Object(V.jsx)(Po, { color: "#2CFEFD", fontSize: "13px", label: "".concat(null === e || void 0 === e || null === (t = e.price) || void 0 === t ? void 0 : t.number, " ").concat(null === e || void 0 === e || null === (a = e.price) || void 0 === a ? void 0 : a.currency), logo: Object(V.jsx)("img", { src: null === e || void 0 === e || null === (i = e.price) || void 0 === i ? void 0 : i.logo, alt: "", width: "20px", height: "20px" }) }) })] })] })] }) }, "nft-".concat(n)) })) }, "chunk-".concat(n)) })) }), Object(V.jsx)(Ot.d, { justifyContent: "center", children: Object(V.jsx)(Ot.a, { scale: "MD", style: { color: "#fff", borderRadius: "40px", backgroundColor: "#C82840" }, padding: "10px 40px", marginTop: "20px", children: "SEE MORE" }) })] }), Object(V.jsx)("img", { className: "bg-bottom", src: "/images/line-02.png", alt: "" })] })
                },
                $o = t(929),
                ec = ["toCopy", "children"],
                nc = Object(f.default)(Ot.e).attrs({ role: "button" })(_r || (_r = Object(m.a)(["\n  position: relative;\n  display: flex;\n  align-items: center;\n  color: ", ";\n"])), (function(e) { return e.theme.colors.primary })),
                tc = f.default.div(Gr || (Gr = Object(m.a)(["\n  display: ", ";\n  position: absolute;\n  bottom: -22px;\n  right: 0;\n  left: 0;\n  text-align: center;\n  background-color: ", ";\n  color: ", ";\n  border-radius: 16px;\n  opacity: 0.7;\n"])), (function(e) { return e.isTooltipDisplayed ? "block" : "none" }), (function(e) { return e.theme.colors.contrast }), (function(e) { return e.theme.colors.invertedContrast })),
                ac = function(e) {
                    var n = e.toCopy,
                        t = e.children,
                        a = Object(Be.a)(e, ec),
                        i = Object(c.useState)(!1),
                        r = Object(j.a)(i, 2),
                        o = r[0],
                        s = r[1];
                    return Object(V.jsxs)(nc, Object(w.a)(Object(w.a)({ small: !0, bold: !0, onClick: function(e) { e.stopPropagation(), navigator.clipboard && (navigator.clipboard.writeText(n), s(!0), setTimeout((function() { s(!1) }), 1e3)) } }, a), {}, { children: [t, Object(V.jsx)(Ot.b, { width: "20px", color: "primary", ml: "4px" }), Object(V.jsx)(tc, { isTooltipDisplayed: o, children: "Copied" })] }))
                },
                ic = Object(f.default)(jt.Element)(Wr || (Wr = Object(m.a)(["\n  width: 100%;\n  min-height: 640px;\n  padding-bottom: 10px;\n\n  background-image: url(/images/bg-section4.png);\n  background-size: cover;\n  background-position: top center;\n  background-repeat: no-repeat;\n\n  @media (min-width: 767px) {\n    padding-bottom: 100px;\n    min-height: 800px;\n  }\n\n  .app-title {\n    color: #f8cb63;\n    font-family: Kanit;\n    font-weight: bold;\n    font-size: 30px;\n    line-height: 130%;\n    text-transform: uppercase;\n    text-align: center;\n\n    margin-bottom: 30px;\n    @media (min-width: 900px) {\n      font-size: 50px;\n    }\n  }\n\n  .app-des {\n    color: #ffffff;\n    font-size: 14px;\n    font-weight: 400;\n    line-height: 1.5;\n    margin: auto;\n    margin-bottom: 30px;\n    text-align: center;\n    max-width: 700px;\n\n    @media (min-width: 900px) {\n      font-size: 18px;\n      margin-bottom: 60px;\n    }\n  }\n"]))),
                rc = f.default.div(Kr || (Kr = Object(m.a)(["\n  width: 100%;\n  max-width: 100vw;\n  overflow: hidden;\n\n  padding: 130px 16px 0;\n  margin: 0 auto;\n\n  @media (min-width: 1100px) {\n    padding: 140px 10px 0;\n  }\n"]))),
                oc = f.default.div(Yr || (Yr = Object(m.a)(["\n  width: 100%;\n\n  .ufo-info {\n    width: 100%;\n    max-width: 700px;\n    height: 320px;\n    margin: 0 auto;\n    position: relative;\n    @media (min-width: 767px) {\n      height: 500px;\n    }\n    @media (min-width: 1000px) {\n      height: 650px;\n    }\n  }\n\n  .ufo-info-title {\n    padding-top: 10vw;\n    font-size: 22px;\n    @media (min-width: 768px) {\n      font-size: 26px;\n    }\n    @media (min-width: 1000px) {\n      font-size: 34px;\n    }\n  }\n\n  .ufo-logo {\n    width: 200px;\n    position: absolute;\n    left: 50%;\n    bottom: 0;\n    transform: translateX(-50%);\n    @media (min-width: 767px) {\n      width: 66%;\n    }\n  }\n\n  .ufo-logo-line-01 {\n    width: 40%;\n    position: absolute;\n    left: 19%;\n    bottom: 47%;\n    transform: translateX(-50%);\n    @media (min-width: 767px) {\n      left: 15%;\n    }\n\n    .ufo-logo-line-title {\n      color: #ffffff;\n      font-size: 16px;\n      font-weight: 400;\n      line-height: 1.5;\n      font-family: kanit;\n      text-align: end;\n      font-weight: bold;\n\n      width: 66%;\n      @media (min-width: 767px) {\n        font-size: 30px;\n        text-align: center;\n      }\n    }\n  }\n  .ufo-logo-line-02 {\n    width: 50%;\n    position: absolute;\n    left: 87%;\n    bottom: 47%;\n    transform: translateX(-50%);\n\n    @media (min-width: 767px) {\n      left: 91%;\n    }\n\n    .ufo-logo-line-title {\n      color: #ffffff;\n      font-size: 16px;\n      font-weight: 400;\n      line-height: 1.5;\n      margin-left: auto;\n      font-family: kanit;\n      font-weight: bold;\n\n      width: 77%;\n\n      @media (min-width: 767px) {\n        font-size: 30px;\n        text-align: center;\n      }\n    }\n  }\n"]))),
                cc = Object(f.default)($o.a)(Qr || (Qr = Object(m.a)(["\n  position: relative;\n\n  text-align: center;\n  margin: 0 3px;\n\n  width: 100%;\n  height: 100%;\n\n  background: linear-gradient(to bottom, #72c1ff 0%, #002542 100%);\n  border: 3px solid #00ffd8;\n  border-radius: 20px;\n  overflow: hidden;\n\n  ", " {\n    margin: 0 10px;\n  }\n\n  .card-item-cover {\n    width: 100%;\n    max-width: 80%;\n    margin: 0 auto 12px;\n  }\n\n  .ant-card-body {\n    padding: 10px;\n  }\n\n  .card-item-content {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    text-align: center;\n  }\n\n  .token-address {\n    color: #00ffd8;\n    font-family: Poppins;\n    font-size: 16px;\n    font-weight: 600;\n    line-height: 1.5;\n    white-space: nowrap;\n    margin-bottom: 4px;\n  }\n  .token-title {\n    color: #00ffd8;\n    font-family: Poppins;\n    font-size: 16px;\n    font-weight: 600;\n    line-height: 1.5;\n    white-space: nowrap;\n    margin-bottom: 4px;\n  }\n"])), (function(e) { return e.theme.mediaQueries.sm })),
                sc = function() {
                    var e = ne.l,
                        n = "Coming soon",
                        t = "Coming soon";
                    return Object(V.jsx)(ic, { name: "ZukiToken", className: "element", children: Object(V.jsxs)(rc, { children: [Object(V.jsxs)("div", { children: [Object(V.jsx)("h2", { className: "app-title", children: "WHAT'S ZUKI TOKEN?" }), Object(V.jsx)(Ot.e, { className: "app-des", children: "ZUKI TOKEN is our main ingame currency which can be achieved by playing game modes and participating in many other activities." }), Object(V.jsxs)(Ot.d, { style: { maxWidth: "400px", margin: "auto" }, children: [Object(V.jsxs)(cc, { bordered: !1, onClick: function() { window.open("".concat(ma(56, e, "address")), "_blank") }, className: "pointer", children: [Object(V.jsx)("img", { className: "card-item-cover", src: "/images/logos/logo.png", alt: "", title: ma(56, e, "address") }), Object(V.jsxs)("div", { className: "card-item-content", children: [(null === e || void 0 === e ? void 0 : e.length) > 30 ? Object(V.jsx)(ac, { toCopy: e, children: Object(V.jsx)(Ot.e, { className: "token-address", children: ee(e, 3, 4, "...") }) }) : Object(V.jsx)(Ot.e, { className: "token-address", children: e }), Object(V.jsx)(Ot.e, { className: "token-title", children: "ZUKI token" })] })] }), Object(V.jsxs)(cc, { bordered: !1, children: [Object(V.jsx)("img", { className: "card-item-cover", src: "/images/logos/zptoken.png", alt: "" }), Object(V.jsxs)("div", { className: "card-item-content", children: [n.length > 30 ? Object(V.jsx)(ac, { toCopy: n, children: Object(V.jsx)(Ot.e, { className: "token-address", children: ee(n, 3, 4, "...") }) }) : Object(V.jsx)(Ot.e, { className: "token-address", children: n }), Object(V.jsx)(Ot.e, { className: "token-title", children: "ZP token" })] })] }), Object(V.jsxs)(cc, { bordered: !1, children: [Object(V.jsx)("img", { className: "card-item-cover", src: "/images/logos/gem.png", alt: "" }), Object(V.jsx)("div", { className: "card-item-content", children: t.length > 30 ? Object(V.jsx)(ac, { toCopy: t, children: Object(V.jsx)(Ot.e, { className: "token-address", children: t.length > 50 ? ee(t, 3, 4, "...") : t }) }) : Object(V.jsx)(Ot.e, { className: "token-address", children: t }) }), Object(V.jsx)(Ot.e, { className: "token-title", children: "GEM token" })] })] })] }), Object(V.jsx)(oc, { children: Object(V.jsxs)("div", { className: "ufo-info", children: [Object(V.jsx)(Ot.e, { className: "ufo-info-title", fontFamily: "kanit", textAlign: "center", fontWeight: "bold", children: "FREE TO EARN" }), Object(V.jsx)("img", { className: "ufo-logo", src: "/images/ufo-logo.png", alt: "" }), Object(V.jsxs)("div", { className: "ufo-logo-line-01", children: [Object(V.jsx)(Ot.e, { className: "ufo-logo-line-title", children: "TRADE" }), Object(V.jsx)("img", { src: "/images/ufo-logo-line-01.png", alt: "" })] }), Object(V.jsxs)("div", { className: "ufo-logo-line-02", children: [Object(V.jsx)(Ot.e, { className: "ufo-logo-line-title", children: "EXCHANGE" }), Object(V.jsx)("img", { src: "/images/ufo-logo-line-02.png", alt: "" })] })] }) })] }) })
                },
                lc = f.default.div(qr || (qr = Object(m.a)(["\n  width: 100%;\n  height: 100%;\n  min-height: 1000px;\n\n  background-image: url(/images/bg-section3.png);\n  background-size: cover;\n  background-position: top center;\n  background-repeat: no-repeat;\n\n  .app-title {\n    color: #f8cb63;\n    font-family: Kanit;\n    font-weight: bold;\n    font-size: 30px;\n    line-height: 130%;\n    text-transform: uppercase;\n    text-align: center;\n\n    margin-bottom: 30px;\n\n    @media (min-width: 900px) {\n      font-size: 50px;\n    }\n  }\n\n  .app-des {\n    color: #ffffff;\n    font-size: 14px;\n    font-weight: 400;\n    line-height: 1.5;\n    margin: auto;\n    margin-bottom: 60px;\n    text-align: center;\n\n    @media (min-width: 900px) {\n      font-size: 18px;\n    }\n  }\n"]))),
                dc = f.default.div(Xr || (Xr = Object(m.a)(["\n  width: 100%;\n  height: 100%;\n  max-width: 100vw;\n\n  padding: 80px 16px 0;\n  margin: 0 auto;\n\n  @media (min-width: 1100px) {\n    padding: 140px 10px 0;\n  }\n"]))),
                uc = f.default.div(Jr || (Jr = Object(m.a)(["\n  width: 100%;\n  height: 100%;\n  padding-top: 0px;\n  @media (min-width: 767px) {\n    padding-top: 50px;\n  }\n\n  .gem-info {\n    width: 100%;\n    height: 400px;\n    max-width: 800px;\n    margin: 0 auto;\n    position: relative;\n  }\n  .gem-logo {\n    width: 20%;\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n  }\n\n  .gem-content {\n    position: absolute;\n    top: 0;\n    left: 0;\n    bottom: 0;\n    right: 0;\n\n    width: 76%;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n\n    z-index: 99;\n  }\n\n  .gem-logo-line-01 {\n    width: 40%;\n\n    position: absolute;\n    left: 18%;\n    bottom: 66%;\n    transform: translateX(-50%);\n  }\n  .gem-logo-line-02 {\n    width: 40%;\n\n    position: absolute;\n    left: 62%;\n    bottom: 66%;\n\n    img {\n      transform: scaleX(-1);\n    }\n  }\n\n  .gem-logo-line-03 {\n    width: 40%;\n    position: absolute;\n    left: 18%;\n    bottom: 21%;\n    transform: translateX(-50%);\n\n    img {\n      transform: scaleY(-1);\n    }\n  }\n\n  .gem-logo-line-04 {\n    width: 40%;\n    position: absolute;\n    left: 62%;\n    bottom: 21%;\n\n    img {\n      transform: scale(-1);\n    }\n  }\n"]))),
                pc = function() { return Object(V.jsx)(lc, { children: Object(V.jsxs)(dc, { children: [Object(V.jsxs)("div", { children: [Object(V.jsx)("h2", { className: "app-title", children: "ZUKI GEM" }), Object(V.jsx)("div", { className: "app-des", children: "In addition to ZUKI TOKEN, ZUKI GEM is an exclusive currency that makes players an investor." })] }), Object(V.jsx)(uc, { children: Object(V.jsxs)("div", { className: "gem-info", children: [Object(V.jsx)("img", { className: "gem-logo", src: "/images/gem.png", alt: "" }), Object(V.jsxs)("div", { className: "gem-logo-line-01", children: [Object(V.jsx)("div", { className: "gem-content", children: Object(V.jsx)(Ot.e, { fontSize: "20px", fontFamily: "kanit", textAlign: "center", fontWeight: "bold", children: "FREE TO EARN" }) }), Object(V.jsx)("img", { src: "/images/gem-note.png", alt: "" })] }), Object(V.jsxs)("div", { className: " gem-logo-line-02", children: [Object(V.jsx)("div", { className: "gem-content", style: { marginLeft: "auto" }, children: Object(V.jsx)(Ot.e, { fontSize: "20px", fontFamily: "kanit", textAlign: "center", fontWeight: "bold", children: "STAKING" }) }), Object(V.jsx)("img", { src: "/images/gem-note.png", alt: "" })] }), Object(V.jsxs)("div", { className: "gem-logo-line-03", children: [Object(V.jsx)("div", { className: "gem-content", children: Object(V.jsx)(Ot.e, { fontSize: "20px", fontFamily: "kanit", textAlign: "center", fontWeight: "bold", children: "MARKET" }) }), Object(V.jsx)("img", { src: "/images/gem-note.png", alt: "" })] }), Object(V.jsxs)("div", { className: " gem-logo-line-04", children: [Object(V.jsx)("div", { className: "gem-content", style: { marginLeft: "auto" }, children: Object(V.jsx)(Ot.e, { fontSize: "20px", fontFamily: "kanit", textAlign: "center", fontWeight: "bold", children: "EVOLVE HEROES" }) }), Object(V.jsx)("img", { src: "/images/gem-note.png", alt: "" })] })] }) })] }) }) },
                bc = f.default.div($r || ($r = Object(m.a)(["\n  width: 100%;\n  height: 100%;\n  min-height: 500px;\n\n  background-image: url(/images/bg-section3.png);\n  background-size: cover;\n  background-position: top center;\n  background-repeat: no-repeat;\n\n  .app-title {\n    color: #f8cb63;\n    font-family: Kanit;\n    font-weight: bold;\n    font-size: 30px;\n    line-height: 130%;\n    text-transform: uppercase;\n    text-align: center;\n\n    margin-bottom: 30px;\n\n    @media (min-width: 900px) {\n      font-size: 50px;\n    }\n  }\n\n  .app-des {\n    color: #ffffff;\n    font-size: 14px;\n    font-weight: 400;\n    line-height: 1.5;\n    margin: auto;\n    margin-bottom: 60px;\n    text-align: center;\n\n    @media (min-width: 900px) {\n      font-size: 18px;\n    }\n  }\n"]))),
                mc = f.default.div(eo || (eo = Object(m.a)(["\n  width: 100%;\n  height: 100%;\n  max-width: 100vw;\n\n  padding: 80px 10px 0;\n  margin: 0 auto;\n\n  @media (min-width: 1100px) {\n    padding: 140px 10px 0;\n  }\n"]))),
                fc = f.default.div(no || (no = Object(m.a)(["\n  width: 100%;\n  height: 100%;\n  padding-top: 0px;\n  @media (min-width: 767px) {\n    padding-top: 50px;\n  }\n\n  .gem-info {\n    width: 100%;\n    height: 240px;\n    margin: 0 auto;\n    position: relative;\n  }\n  .gem-logo {\n    width: 20%;\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n  }\n\n  .gem-content {\n    position: absolute;\n    top: 0;\n    left: 0;\n    bottom: 0;\n    right: 0;\n\n    display: flex;\n    justify-content: center;\n    align-items: center;\n\n    z-index: 99;\n  }\n\n  .gem-logo-line-01 {\n    width: 42%;\n    position: absolute;\n    left: 19%;\n    bottom: 60%;\n    transform: translateX(-50%);\n  }\n  .gem-logo-line-02 {\n    width: 42%;\n    position: absolute;\n    left: 60%;\n    bottom: 60%;\n\n    img {\n      transform: scaleX(-1);\n    }\n  }\n\n  .gem-logo-line-03 {\n    width: 42%;\n    position: absolute;\n    left: 19%;\n    bottom: 27%;\n    transform: translateX(-50%);\n\n    img {\n      transform: scaleY(-1);\n    }\n  }\n\n  .gem-logo-line-04 {\n    width: 42%;\n    position: absolute;\n    left: 60%;\n    bottom: 27%;\n\n    img {\n      transform: scale(-1);\n    }\n  }\n"]))),
                hc = function() { return Object(V.jsx)(bc, { children: Object(V.jsxs)(mc, { children: [Object(V.jsxs)("div", { children: [Object(V.jsx)("h2", { className: "app-title", children: "ZUKI GEM" }), Object(V.jsx)("div", { className: "app-des", children: "In addition to ZUKI TOKEN, ZUKI GEM is an exclusive currency that makes players an investor." })] }), Object(V.jsx)(fc, { children: Object(V.jsxs)("div", { className: "gem-info", children: [Object(V.jsx)("img", { className: "gem-logo", src: "/images/gem.png", alt: "" }), Object(V.jsxs)("div", { className: "gem-logo-line-01", children: [Object(V.jsx)("div", { className: "gem-content", children: Object(V.jsx)(Ot.e, { fontSize: "13px", fontFamily: "kanit", textAlign: "center", fontWeight: "bold", children: "FREE TO EARN" }) }), Object(V.jsx)("img", { src: "/images/mb-gem-note.png", alt: "" })] }), Object(V.jsxs)("div", { className: " gem-logo-line-02", children: [Object(V.jsx)("div", { className: "gem-content", children: Object(V.jsx)(Ot.e, { fontSize: "13px", fontFamily: "kanit", textAlign: "center", fontWeight: "bold", children: "STAKING" }) }), Object(V.jsx)("img", { src: "/images/mb-gem-note.png", alt: "" })] }), Object(V.jsxs)("div", { className: "gem-logo-line-03", children: [Object(V.jsx)("div", { className: "gem-content", children: Object(V.jsx)(Ot.e, { fontSize: "13px", fontFamily: "kanit", textAlign: "center", fontWeight: "bold", children: "MARKET" }) }), Object(V.jsx)("img", { src: "/images/mb-gem-note.png", alt: "" })] }), Object(V.jsxs)("div", { className: " gem-logo-line-04", children: [Object(V.jsx)("div", { className: "gem-content", children: Object(V.jsx)(Ot.e, { fontSize: "13px", fontFamily: "kanit", textAlign: "center", fontWeight: "bold", children: "EVOLVE HEROES" }) }), Object(V.jsx)("img", { src: "/images/mb-gem-note.png", alt: "" })] })] }) })] }) }) },
                gc = t(934),
                xc = f.default.div(to || (to = Object(m.a)(["\n  background-image: url(/images/bg-3.png);\n  background-size: cover;\n  background-position: bottom;\n  background-repeat: no-repeat;\n\n  .app-title {\n    color: #00ffd8;\n    font-family: Kanit;\n    font-weight: bold;\n    font-size: 30px;\n    line-height: 130%;\n    text-transform: uppercase;\n    text-align: center;\n    margin-bottom: 10px;\n    @media (min-width: 900px) {\n      font-size: 50px;\n      margin-bottom: 20px;\n    }\n  }\n\n  .app-des {\n    color: #ffffff;\n    font-size: 14px;\n    font-weight: 400;\n    line-height: 1.5;\n    margin: auto;\n    margin-bottom: 60px;\n    text-align: center;\n    max-width: 300px;\n\n    @media (min-width: 900px) {\n      font-size: 18px;\n      max-width: 100%;\n    }\n  }\n"]))),
                jc = f.default.div(ao || (ao = Object(m.a)(["\n  position: relative;\n\n  width: 100%;\n  max-width: 1100px;\n\n  padding: 110px 16px 300px;\n  margin: 0 auto;\n\n  @media (min-width: 900px) {\n    padding: 110px 10px 130px;\n  }\n\n  .footer-nft-01 {\n    width: 150px;\n    position: absolute;\n    bottom: 0;\n    right: 10px;\n    @media (min-width: 767px) {\n      width: 200px;\n    }\n  }\n  .footer-nft-02 {\n    width: 200px;\n    position: absolute;\n    bottom: 0;\n    right: 180px;\n    @media (min-width: 767px) {\n      width: 220px;\n    }\n  }\n"]))),
                Oc = f.default.div(io || (io = Object(m.a)(["\n  width: 100%;\n  position: relative;\n  z-index: 1;\n\n  .roadmap-title {\n    color: #f8cb63;\n    font-size: 20px;\n    line-height: 1.5;\n    font-weight: bold;\n    font-family: Kanit;\n\n    @media (min-width: 900px) {\n      font-size: 30px;\n    }\n  }\n\n  .roadmap-des {\n    color: #ffffff;\n    font-size: 13px;\n    font-weight: 400;\n    line-height: 1.5;\n    margin-top: 5px;\n\n    @media (min-width: 900px) {\n      font-size: 20px;\n    }\n  }\n\n  .ant-timeline-item-tail {\n    border-left: 2 px solid #00ffd8;\n  }\n\n  .ant-timeline-item-head {\n    background-color: transparent;\n  }\n\n  // right\n  .ant-timeline-item-content {\n    margin: 0 0 0 45px;\n  }\n\n  // left\n  .ant-timeline.ant-timeline-alternate .ant-timeline-item-right .ant-timeline-item-content,\n  .ant-timeline.ant-timeline-right .ant-timeline-item-right .ant-timeline-item-content,\n  .ant-timeline.ant-timeline-label .ant-timeline-item-right .ant-timeline-item-content {\n    width: calc(50% - 45px);\n  }\n"]))),
                yc = function() { return Object(V.jsx)(xc, { children: Object(V.jsx)(jt.Element, { name: "RoadMap", className: "element", children: Object(V.jsxs)(jc, { children: [Object(V.jsxs)("div", { children: [Object(V.jsx)("h2", { className: "app-title", children: "ROADMAP" }), Object(V.jsx)(Ot.e, { className: "app-des", children: "This timeline details our funding and development goals" })] }), Object(V.jsx)(Oc, { children: Object(V.jsxs)(gc.a, { mode: "alternate", children: [Object(V.jsxs)(gc.a.Item, { dot: Object(V.jsx)(Ot.c, {}), children: [Object(V.jsx)(Ot.e, { className: "roadmap-title", children: "Q3.2021" }), Object(V.jsx)(Ot.e, { className: "roadmap-des", children: "Game play" }), Object(V.jsx)(Ot.e, { className: "roadmap-des", children: "Conceptualization" }), Object(V.jsx)(Ot.e, { className: "roadmap-des", children: "Character & Asset Design" }), Object(V.jsx)(Ot.e, { className: "roadmap-des", children: "Business Model" }), Object(V.jsx)(Ot.e, { className: "roadmap-des", children: "Private Fund Raise" })] }), Object(V.jsxs)(gc.a.Item, { dot: Object(V.jsx)(Ot.c, {}), children: [Object(V.jsx)(Ot.e, { className: "roadmap-title", children: "Q4.2021" }), Object(V.jsx)(Ot.e, { className: "roadmap-des", children: "Game development" }), Object(V.jsx)(Ot.e, { className: "roadmap-des", children: "Seed Fund & Partnership" }), Object(V.jsx)(Ot.e, { className: "roadmap-des", children: "Community Development" })] }), Object(V.jsxs)(gc.a.Item, { dot: Object(V.jsx)(Ot.c, {}), children: [Object(V.jsx)(Ot.e, { className: "roadmap-title", children: "Public Sale" }), Object(V.jsx)(Ot.e, { className: "roadmap-des", children: "IDO & NFT" }), Object(V.jsx)(Ot.e, { className: "roadmap-des", children: "Zuki Gamefi & Store" }), Object(V.jsx)(Ot.e, { className: "roadmap-des", children: "Mobile Version" }), Object(V.jsx)(Ot.e, { className: "roadmap-des", children: "Community KOLs" })] }), Object(V.jsxs)(gc.a.Item, { dot: Object(V.jsx)(Ot.c, {}), children: [Object(V.jsx)(Ot.e, { className: "roadmap-title", children: "Q1.2022" }), Object(V.jsx)(Ot.e, { className: "roadmap-des", children: "Game realease" }), Object(V.jsx)(Ot.e, { className: "roadmap-des", children: "NFT Marketplace" }), Object(V.jsx)(Ot.e, { className: "roadmap-des", children: "CEX Listing Token" })] }), Object(V.jsxs)(gc.a.Item, { dot: Object(V.jsx)(Ot.c, {}), children: [Object(V.jsx)(Ot.e, { className: "roadmap-title", children: "Q3.2022" }), Object(V.jsx)(Ot.e, { className: "roadmap-des", children: "Business Scales" }), Object(V.jsx)(Ot.e, { className: "roadmap-des", children: "Regional & Worldwide Partnership" }), Object(V.jsx)(Ot.e, { className: "roadmap-des", children: "Character & Asset Design" })] }), Object(V.jsxs)(gc.a.Item, { dot: Object(V.jsx)(Ot.c, {}), children: [Object(V.jsx)(Ot.e, { className: "roadmap-title", children: "Q4.2022" }), Object(V.jsx)(Ot.e, { className: "roadmap-des", children: "ZUKI Metaverse" }), Object(V.jsx)(Ot.e, { className: "roadmap-des", children: "NFT Land" })] })] }) }), Object(V.jsx)("img", { className: "footer-nft-01", src: "/images/nfts/nft-01.png", alt: "" }), Object(V.jsx)("img", { className: "footer-nft-02", src: "/images/nfts/nft-03.png", alt: "" })] }) }) }) },
                Cc = f.default.div(ro || (ro = Object(m.a)(["\n  position: relative;\n\n  .app-title {\n    color: #00ffd8;\n    font-family: Kanit;\n    font-weight: bold;\n    font-size: 30px;\n    line-height: 130%;\n    text-transform: uppercase;\n    text-align: center;\n\n    margin-bottom: 10px;\n    z-index: 1;\n    @media (min-width: 900px) {\n      font-size: 50px;\n      margin-bottom: 20px;\n    }\n  }\n\n  .app-des {\n    color: #ffffff;\n    font-size: 14px;\n    font-weight: 400;\n    line-height: 1.5;\n    margin: auto;\n    margin-bottom: 60px;\n    text-align: center;\n\n    @media (min-width: 900px) {\n      font-size: 18px;\n    }\n  }\n\n  .body {\n    width: 100%;\n    max-width: 1100px;\n    margin: 0 auto;\n    padding: 100px 16px 0;\n  }\n\n  .react-multi-carousel-list {\n    padding: 0 0 90px;\n  }\n  .react-multi-carousel-dot-list {\n    bottom: 20px;\n  }\n\n  @media (min-width: 1000px) {\n    .ant-col-custom-xl-5 {\n      display: block;\n      flex: 0 0 20%;\n      max-width: 20%;\n    }\n  }\n"]))),
                vc = f.default.div(oo || (oo = Object(m.a)(["\n  position: relative;\n  text-align: center;\n\n  .carousel-item-cover {\n    width: 78px;\n\n    @media (min-width: 767px) {\n      width: 9vw;\n    }\n    @media (min-width: 1100px) {\n      width: 100px;\n    }\n  }\n\n  .carousel-item-content {\n    width: 100%;\n    padding: 10px 2px;\n  }\n  .carousel-item-content-title {\n    color: #00ffd8;\n    font-size: 13px;\n    font-family: Poppins;\n    line-height: 1.5;\n    font-weight: 600;\n\n    @media (min-width: 767px) {\n      font-size: 16px;\n    }\n  }\n  .carousel-item-content-position {\n    color: #ffffff;\n    font-size: 13px;\n    font-weight: 400;\n    line-height: 1.5;\n  }\n"]))),
                wc = function(e) {
                    var n = e.onClick,
                        t = e.active;
                    return Object(V.jsx)("div", { className: t ? "active" : "inactive", onClick: function() { return n() }, style: { width: t ? "60px" : "30px", height: "8px", background: t ? "#2CFEFD" : "#fff", borderRadius: "30px", margin: "0 6px", cursor: "pointer" } })
                },
                kc = { superLargeDesktop: { breakpoint: { max: 4e3, min: 3e3 }, items: 1 }, desktop: { breakpoint: { max: 3e3, min: 1024 }, items: 1 }, tablet: { breakpoint: { max: 1024, min: 464 }, items: 1 }, mobile: { breakpoint: { max: 464, min: 0 }, items: 1 } },
                Tc = [{ id: 1, cover: "/images/coreteam/dan-ngo.png", title: "DAN NGO", position: "CEO" }, { id: 2, cover: "/images/coreteam/lucid-hoang.png", title: "LUCID HOANG", position: "CTO" }, { id: 3, cover: "/images/coreteam/jayz-nguyen.png", title: "JAYZ NGUYEN", position: "CMO" }, { id: 1, cover: "/images/coreteam/jack-truong.png", title: "JACK TRUONG", position: "COO" }, { id: 4, cover: "/images/coreteam/robert-lam.png", title: "ROBERT LAM", position: "Community Engagerment & Strategy Lead" }, { id: 5, cover: "/images/coreteam/kellie-nguyen.png", title: "KELLIE NGUYEN", position: "Global PR and Marketing" }, { id: 6, cover: "/images/coreteam/anna-nguyen.png", title: "ANNA NGUYEN", position: "Game Leader" }, { id: 7, cover: "/images/coreteam/long-pazo.png", title: "LONG PAZO", position: "Art Leader" }, { id: 8, cover: "/images/coreteam/des-nguyen.png", title: "DES NGUYEN", position: "Content Creator & Designer" }, { id: 9, cover: "/images/coreteam/ruby-nguyen.png", title: "RUBY NGUYEN", position: "PR Manager" }],
                Mc = window.innerWidth,
                Lc = function() { var e = Object(c.useMemo)((function() { return Tc ? Mc > 1e3 ? Object(L.chunk)(Tc, 10) : Mc > 767 ? Object(L.chunk)(Tc, 8) : Object(L.chunk)(Tc, 6) : [] }), []); return Object(V.jsx)(Cc, { children: Object(V.jsxs)(jt.Element, { name: "Teams", className: "body element", children: [Object(V.jsx)("h2", { className: "app-title", children: "CORE TEAM" }), Object(V.jsx)(Ot.e, { className: "app-des", children: "The team always plays an important role in the success of a project. As a team, we have been working with each other for more than 5 years, with everyone being highly experienced in their own expertise" }), Object(V.jsx)(Mo.a, { responsive: kc, showDots: !0, customDot: Object(V.jsx)(wc, {}), children: e.map((function(e, n) { return Object(V.jsx)(Oo.a, { gutter: [10, 30], children: e.map((function(e, n) { return Object(V.jsx)(yo.a, { xs: 8, md: 6, className: "ant-col-custom-xl-5", children: Object(V.jsxs)(vc, { children: [Object(V.jsx)("img", { className: "carousel-item-cover", src: e.cover, alt: "" }), Object(V.jsxs)("div", { className: "carousel-item-content", children: [Object(V.jsx)("div", { className: "carousel-item-content-title", children: e.title }), Object(V.jsx)("div", { className: "carousel-item-content-position", children: e.position })] })] }) }, "nft-".concat(n)) })) }, "chunk-".concat(n)) })) })] }) }) },
                Ic = f.default.div(co || (co = Object(m.a)(["\n  position: relative;\n  padding-top: 100px;\n\n  .app-title {\n    color: #00ffd8;\n    font-family: Kanit;\n    font-weight: bold;\n    font-size: 30px;\n    line-height: 130%;\n    text-transform: uppercase;\n    text-align: center;\n\n    margin-bottom: 20px;\n    z-index: 1;\n    @media (min-width: 900px) {\n      font-size: 50px;\n    }\n  }\n\n  .app-des {\n    color: #ffffff;\n    font-size: 14px;\n    font-weight: 400;\n    line-height: 1.5;\n    margin: auto;\n    margin-bottom: 60px;\n    text-align: center;\n\n    @media (min-width: 900px) {\n      font-size: 18px;\n    }\n  }\n\n  .body {\n    width: 100%;\n    max-width: 1100px;\n    margin: 0 auto;\n    padding: 100px 16px 0;\n  }\n\n  .react-multi-carousel-list {\n    padding: 0 0 36px;\n  }\n  .react-multi-carousel-dot-list {\n    bottom: 20px;\n  }\n\n  @media (min-width: 1000px) {\n    .ant-col-custom-xl-5 {\n      display: block;\n      flex: 0 0 20%;\n      max-width: 20%;\n    }\n  }\n"]))),
                Nc = Object(f.default)($o.a)(so || (so = Object(m.a)(["\n  position: relative;\n\n  text-align: center;\n\n  height: 100%;\n  padding-bottom: 10px;\n  // padding-bottom: 52px;\n\n  background: linear-gradient(to bottom, #72c1ff 0%, #002542 100%);\n  border: 3px solid #00ffd8;\n  border-radius: 20px;\n  overflow: hidden;\n\n  .card-item-cover {\n    width: 80%;\n    margin: 12px auto;\n  }\n\n  .ant-card-body {\n    padding: 10px;\n    @media (min-width: 768px) {\n      padding: 20px;\n    }\n  }\n\n  .card-item-content-position {\n    color: #ffffff;\n    font-size: 13px;\n    font-weight: 400;\n    line-height: 1.5;\n    font-family: Poppins;\n    @media (min-width: 768px) {\n      font-size: 16px;\n    }\n  }\n\n  .ant-card-actions {\n    width: 100%;\n\n    position: absolute;\n    bottom: 0;\n\n    background: unset;\n    border: unset;\n  }\n"]))),
                Ac = [{ id: 1, cover: "/images/advisors/leon-truong.png", title: "LEON TRUONG", position: ["Sendo BOD", "FPT Telecom BOD", "DTS Chairman"], linkdin: "#" }, { id: 2, cover: "/images/advisors/ja-long.png", title: "JA LONG", position: ["Founder BlockchainHub.vn Alliance", "SharkLand  - SharkAgent", "CEO & Founder", "CEO & Founder bitCEO.io"], linkdin: "#" }, { id: 3, cover: "/images/advisors/cat-van-khoi.png", title: "CAT VAN KHOI", position: ["Vecom Deputy Chief of", "Office Sapo Founder", "Ecomkey Asia Founder"], linkdin: "#" }, { id: 4, cover: "/images/advisors/nguyen-ngoc-nam.png", title: "NGUYEN NGOC NAM", position: ["Chairman Alpha Moon Capital", "Partner ESP Capital"], linkdin: "#" }, { id: 5, cover: "/images/advisors/robert-nguyen.png", title: "ROBERT NGUYEN", position: ["Platform Director of DTS Group", "General Coordinator of BAS"], linkdin: "#" }, { id: 6, cover: "/images/advisors/bentley.png", title: "BENTLEY MAGNATE", position: ["Empire World CEO", "OKIA International CEO"], linkdin: "#" }, { id: 7, cover: "/images/advisors/pham-quoc-bao.png", title: "PHAM QUOC BAO", position: ["Moniwar Founder & CEO", "BAS Head of technology"], linkdin: "#" }, { id: 8, cover: "/images/advisors/paulus-pham.png", title: "PAULUS PHAM", position: ["Clovers Ventures Founder", "Coinbiz.vn Founder"], linkdin: "#" }],
                Ec = function() { return Object(V.jsx)(Ic, { children: Object(V.jsxs)(jt.Element, { name: "Advisors", className: "body element ", children: [Object(V.jsx)("h2", { className: "app-title", children: "ADVISOR" }), Object(V.jsx)(Ot.e, { className: "app-des", children: "Our board of Advisors consists of major industry leaders, who have had years of incubating, mentoring and helping blockchain projects accomplish." }), Object(V.jsx)(Oo.a, { gutter: [{ xs: 10, md: 30 }, { xs: 10, md: 30 }], children: Ac.map((function(e, n) { return Object(V.jsx)(yo.a, { xs: 12, sm: 8, lg: 6, children: Object(V.jsxs)(Nc, { bordered: !1, children: [Object(V.jsx)("img", { className: "card-item-cover", src: e.cover, alt: "" }), Object(V.jsxs)("div", { className: "card-item-content", children: [Object(V.jsx)(Ot.e, { color: "#00ffd8", fontFamily: "Poppins", fontWeight: "600", marginBottom: "4px", children: e.title }), Array.isArray(e.position) ? e.position.map((function(e, n) { return Object(V.jsx)("div", { className: "card-item-content-position", children: e }, "des-".concat(n)) })) : Object(V.jsx)(Ot.e, { fontSize: "16px", fontFamily: "Poppins", children: e.position })] })] }) }, "nft-".concat(n)) })) })] }) }) },
                Sc = f.default.div(lo || (lo = Object(m.a)(["\n  position: relative;\n\n  .app-title {\n    color: #00ffd8;\n    font-family: Kanit;\n    font-weight: bold;\n    font-size: 30px;\n    line-height: 130%;\n    text-transform: uppercase;\n    text-align: center;\n\n    margin-bottom: 40px;\n    z-index: 1;\n\n    @media (min-width: 900px) {\n      font-size: 50px;\n    }\n  }\n\n  .body {\n    width: 100%;\n    max-width: 1100px;\n    margin: 0 auto;\n    padding: 100px 16px 0;\n  }\n"]))),
                Fc = f.default.div(uo || (uo = Object(m.a)(["\n  background: #fff;\n  border: 3px solid #00ffd8;\n  border-radius: 20px;\n  overflow: hidden;\n"]))),
                Rc = f.default.div(po || (po = Object(m.a)(["\n  position: relative;\n  border-right: 1px solid #e0e0e0;\n  border-bottom: 1px solid #e0e0e0;\n\n  display: flex;\n  text-align: center;\n  justify-content: center;\n  align-items: center;\n\n  .wrapper-logo {\n    height: 60px;\n    max-width: 140px;\n    max-height: 60px;\n    padding: 14px;\n  }\n\n  img {\n    height: 100%;\n    object-fit: contain;\n  }\n"]))),
                Bc = [{ id: 1, logo: "/images/backers/1.png", title: "image" }, { id: 2, logo: "/images/backers/2.png", title: "image" }, { id: 3, logo: "/images/backers/3.png", title: "image" }, { id: 4, logo: "/images/backers/4.png", title: "image" }, { id: 5, logo: "/images/backers/5.png", title: "image" }, { id: 6, logo: "/images/backers/6.png", title: "image" }, { id: 7, logo: "/images/backers/7.png", title: "image" }, { id: 8, logo: "/images/backers/8.png", title: "image" }, { id: 9, logo: "/images/backers/9.png", title: "image" }, { id: 10, logo: "/images/backers/10.png", title: "image" }, { id: 11, logo: "/images/backers/11.png", title: "image" }, { id: 12, logo: "/images/backers/12.png", title: "image" }, { id: 13, logo: "/images/backers/13.png", title: "image" }, { id: 14, logo: "/images/backers/14.png", title: "image" }, { id: 15, logo: "/images/backers/15.png", title: "image" }, { id: 16, logo: "/images/backers/16.png", title: "image" }, { id: 17, logo: "/images/backers/17.png", title: "image" }, { id: 18, logo: "/images/backers/18.png", title: "image" }, { id: 19, logo: "/images/backers/19.png", title: "image" }, { id: 20, logo: "/images/backers/20.png", title: "image" }, { id: 21, logo: "/images/backers/21.png", title: "image" }, { id: 22, logo: "/images/backers/22.png", title: "image" }, { id: 23, logo: "/images/backers/23.png", title: "image" }, { id: 24, logo: "/images/backers/24.png", title: "image" }, { id: 25, logo: "/images/backers/25.png", title: "image" }, { id: 26, logo: "/images/backers/26.png", title: "image" }, { id: 27, logo: "/images/backers/27.png", title: "image" }, { id: 28, logo: "/images/backers/28.png", title: "image" }, { id: 29, logo: "/images/backers/29.png", title: "image" }, { id: 30, logo: "/images/backers/30.png", title: "image" }, { id: 31, logo: "/images/backers/31.png", title: "image" }, { id: 32, logo: "/images/backers/32.png", title: "image" }, { id: 33, logo: "/images/backers/33.png", title: "image" }, { id: 34, logo: "/images/backers/34.png", title: "image" }, { id: 35, logo: "/images/backers/35.jpeg", title: "image" }],
                Dc = function() { return Object(V.jsx)(Sc, { children: Object(V.jsxs)(jt.Element, { name: "BackersPartners", className: "body element ", children: [Object(V.jsx)("h2", { className: "app-title", children: "BACKERS & PARTNERS " }), Object(V.jsx)(Fc, { children: Object(V.jsx)(Oo.a, { gutter: 0, children: Bc.map((function(e, n) { return Object(V.jsx)(yo.a, { xs: 8, sm: 8, xl: 6, children: Object(V.jsx)(Rc, { children: e.href ? Object(V.jsx)("a", { className: "wrapper-logo", href: e.href || "#", target: e.target, rel: "noreferrer", children: Object(V.jsx)("img", { src: e.logo, alt: e.title }) }) : Object(V.jsx)("div", { className: "wrapper-logo", children: Object(V.jsx)("img", { src: e.logo, alt: e.title }) }) }) }, "nft-".concat(n)) })) }) })] }) }) },
                Uc = s.a.lazy((function() { return Promise.all([t.e(6).then(t.bind(null, 1256)), new Promise((function(e) { return setTimeout(e, 1300) }))]).then((function(e) { return Object(j.a)(e, 1)[0] })) })),
                Hc = f.default.div(bo || (bo = Object(m.a)(["\n  display: block;\n  width: 100%;\n  height: 100%;\n  min-height: 5000px;\n  background: #000000;\n"]))),
                zc = Object(f.default)(jt.Element)(mo || (mo = Object(m.a)(["\n  padding-top: 180px;\n  background-image: url(/images/bg-section5.png);\n  background-size: cover;\n  background-position: top;\n  background-repeat: no-repeat;\n"]))),
                Vc = window.innerWidth,
                Zc = function() { return Object(c.useEffect)((function() { window.scrollTo(0, 0) }), []), Object(V.jsxs)(Hc, { children: [Object(V.jsx)(jt.Element, { name: "Home", className: "element", children: Object(V.jsx)(c.Suspense, { fallback: Object(V.jsx)(Mr, { height: "100vh" }), children: Object(V.jsx)(Uc, {}) }) }), Object(V.jsx)(So, {}), Object(V.jsx)(zo, {}), Object(V.jsx)(Jo, {}), Object(V.jsx)(sc, {}), Vc > 767 ? Object(V.jsx)(pc, {}) : Object(V.jsx)(hc, {}), Object(V.jsx)(yc, {}), Object(V.jsxs)(zc, { children: [Object(V.jsx)(Lc, {}), Object(V.jsx)(Ec, {}), Object(V.jsx)(Dc, {}), Object(V.jsx)(ko, {})] })] }) },
                Pc = { translations: [], setTranslations: function() {} },
                _c = Object(c.createContext)(Pc),
                Gc = t(456),
                Wc = f.default.div(fo || (fo = Object(m.a)(["\n  display: flex;\n  flex-flow: column;\n  align-items: flex-start;\n  overflow: hidden;\n\n  img[alt='hot'] {\n    position: relative;\n  }\n\n  div[title='Bunny'] {\n    display: none;\n  }\n\n  .ant-back-top {\n    @media (max-width: 767px) {\n      bottom: 20px;\n    }\n  }\n"]))),
                Kc = f.default.div(ho || (ho = Object(m.a)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n\n  width: 100%;\n  height: 100%;\n  flex: 1;\n  overflow: hidden;\n  z-index: 1;\n"]))),
                Yc = f.default.div(go || (go = Object(m.a)(["\n  display: flex;\n  width: 100%;\n  min-height: 100vh;\n  align-items: center;\n  justify-content: center;\n  padding: 10px;\n\n  img {\n    height: auto;\n  }\n"]))),
                Qc = f.default.div(xo || (xo = Object(m.a)(["\n  margin-top: 0rem;\n"]))),
                qc = f.default.div(jo || (jo = Object(m.a)(["\n  font-size: 20px;\n\n  width: 50px;\n  height: 50px;\n  ", " {\n    width: 60px;\n    height: 60px;\n  }\n\n  display: inline-flex;\n  text-align: center;\n  align-items: center;\n  justify-content: center;\n\n  box-shadow: 0 0 10px rgba(0, 0, 0, 5%);\n  background-color: hsla(5, 76%, 62%, 0.8);\n\n  border-radius: 5px;\n  opacity: 0.6;\n\n  transition: opacity 0.3s, visibility 0.3s, background-color 0.3s;\n\n  &:hover {\n    background-color: #e86154;\n    opacity: 1;\n  }\n"])), (function(e) { return e.theme.mediaQueries.md }));

            function Xc() {
                var e = Object(c.useState)(void 0),
                    n = Object(j.a)(e, 2),
                    t = n[0],
                    a = n[1],
                    i = Object(c.useState)(void 0),
                    r = Object(j.a)(i, 2),
                    o = r[0],
                    s = r[1],
                    l = Object(c.useState)(Object(x.a)(Gc)),
                    d = Object(j.a)(l, 2),
                    u = d[0],
                    p = d[1];
                pn(),
                    function() {
                        var e = Object(k.b)(),
                            n = Object(c.useCallback)(Object(K.a)(W.a.mark((function n() {
                                return W.a.wrap((function(n) {
                                    for (;;) switch (n.prev = n.next) {
                                        case 0:
                                            return n.next = 2, bn.getRepoTreeAtOrgan().then(Object(K.a)(W.a.mark((function n() {
                                                return W.a.wrap((function(n) {
                                                    for (;;) switch (n.prev = n.next) {
                                                        case 0:
                                                            return n.next = 2, bn.getFileData("config.js").then((function(n) { e(A(n || {})), e(E((null === n || void 0 === n ? void 0 : n.banner) || {})) }));
                                                        case 2:
                                                        case "end":
                                                            return n.stop()
                                                    }
                                                }), n)
                                            })))).catch(console.error);
                                        case 2:
                                        case "end":
                                            return n.stop()
                                    }
                                }), n)
                            }))), [e]);
                        Object(c.useEffect)((function() { n() }), [n])
                    }();
                return Object(c.useEffect)((function() {
                    var e = localStorage.getItem("language");
                    if (e) {
                        var n = function(e) { return La.filter((function(n) { return n.code === e }))[0] }(e);
                        a(n)
                    } else a(Ma)
                }), []), Object(V.jsx)(c.Suspense, { fallback: null, children: Object(V.jsx)(O.a, { children: Object(V.jsxs)(Wc, { children: [Object(V.jsx)(Na.Provider, { value: { selectedLanguage: t, setSelectedLanguage: a, translatedLanguage: o, setTranslatedLanguage: s }, children: Object(V.jsx)(_c.Provider, { value: { translations: u, setTranslations: p }, children: "false" === ne.g ? Object(V.jsxs)(Ii, { children: [Object(V.jsxs)(Kc, { children: [Object(V.jsx)(kr, {}), Object(V.jsx)(kn, { children: Object(V.jsxs)(y.d, { children: [Object(V.jsx)(y.b, { exact: !0, strict: !0, path: "/", component: Zc }), Object(V.jsx)(y.b, { component: Ni })] }) }), Object(V.jsx)(Qc, {})] }), Object(V.jsx)(_, {})] }) : Object(V.jsx)(Yc, { children: Object(V.jsx)("img", { src: "/images/image-maintain.jpg", alt: "", width: 450 }) }) }) }), Object(V.jsx)(C.a, { children: Object(V.jsx)(qc, { children: Object(V.jsx)(v.a, {}) }) })] }) }) })
            }
            var Jc = function() {
                    var e = Object(k.c)((function(e) { return e.toasts.data })),
                        n = Ci().remove;
                    return Object(V.jsx)(yi, { toasts: e, onRemove: function(e) { return n(e) } })
                },
                $c = t(317),
                es = Object(I.c)({ blockNumber: {}, githubConfig: {}, banner: {}, account: {}, popupList: [], walletModalOpen: !1, settingsMenuOpen: !1, modalOverview: {}, byAccount: null, soundIntro: { play: !0, muted: !1 } }, (function(e) {
                    return e.addCase(S, (function(e, n) {
                        var t = n.payload,
                            a = t.chainId,
                            i = t.blockNumber;
                        "number" !== typeof e.blockNumber[a] ? e.blockNumber[a] = i : e.blockNumber[a] = Math.max(i, e.blockNumber[a])
                    })).addCase(N, (function(e, n) {
                        var t = n.payload,
                            a = t.byAccount,
                            i = t.data;
                        a && i && (e.account = Object(w.a)(Object(w.a)({}, e.account), {}, Object(De.a)({}, a, i)))
                    })).addCase(A, (function(e, n) {
                        var t = n.payload;
                        e.githubConfig = t || {}
                    })).addCase(E, (function(e, n) {
                        var t = n.payload;
                        e.banner = t || {}
                    })).addCase(F, (function(e) { e.walletModalOpen = !e.walletModalOpen })).addCase(R, (function(e) { e.settingsMenuOpen = !e.settingsMenuOpen })).addCase(B, (function(e, n) {
                        var t = n.payload,
                            a = t.content,
                            i = t.key,
                            r = t.removeAfterMs,
                            o = void 0 === r ? 15e3 : r;
                        e.popupList = (i ? e.popupList.filter((function(e) { return e.key !== i })) : e.popupList).concat([{ key: i || Object(I.f)(), show: !0, content: a, removeAfterMs: o }])
                    })).addCase(D, (function(e, n) {
                        var t = n.payload.key;
                        e.popupList.forEach((function(e) { e.key === t && (e.show = !1) }))
                    })).addCase(U, (function(e, n) {
                        var t = n.payload;
                        e.modalOverview = t
                    })).addCase(H, (function(e, n) {
                        var t = n.payload;
                        e.byAccount = t
                    })).addCase(z, (function(e, n) {
                        var t = n.payload;
                        e.soundIntro = Object(w.a)(Object(w.a)({}, e.soundIntro), t)
                    }))
                })),
                ns = Object(I.b)("global/updateVersion"),
                ts = (I.b, Object(I.b)("user/updateMatchesDarkMode")),
                as = Object(I.b)("user/updateUserDarkMode"),
                is = Object(I.b)("user/updateUserExpertMode"),
                rs = Object(I.b)("user/updateUserSlippageTolerance"),
                os = Object(I.b)("user/updateUserDeadline"),
                cs = Object(I.b)("user/addSerializedToken"),
                ss = Object(I.b)("user/removeSerializedToken"),
                ls = Object(I.b)("user/addSerializedPair"),
                ds = Object(I.b)("user/removeSerializedPair"),
                us = Object(I.b)("user/muteAudio"),
                ps = Object(I.b)("user/unmuteAudio"),
                bs = function() { return (new Date).getTime() };

            function ms(e, n) { return "".concat(e, ";").concat(n) }
            var fs, hs = { userDarkMode: null, matchesDarkMode: !1, userExpertMode: !1, userSlippageTolerance: ne.f, userDeadline: ne.b, tokens: {}, pairs: {}, timestamp: bs(), audioPlay: !0 },
                gs = Object(I.c)(hs, (function(e) {
                    return e.addCase(ns, (function(e) { "number" !== typeof e.userSlippageTolerance && (e.userSlippageTolerance = ne.f), "number" !== typeof e.userDeadline && (e.userDeadline = ne.b), e.lastUpdateVersionTimestamp = bs() })).addCase(as, (function(e, n) { e.userDarkMode = n.payload.userDarkMode, e.timestamp = bs() })).addCase(ts, (function(e, n) { e.matchesDarkMode = n.payload.matchesDarkMode, e.timestamp = bs() })).addCase(is, (function(e, n) { e.userExpertMode = n.payload.userExpertMode, e.timestamp = bs() })).addCase(rs, (function(e, n) { e.userSlippageTolerance = n.payload.userSlippageTolerance, e.timestamp = bs() })).addCase(os, (function(e, n) { e.userDeadline = n.payload.userDeadline, e.timestamp = bs() })).addCase(cs, (function(e, n) {
                        var t = n.payload.serializedToken;
                        e.tokens[t.chainId] = e.tokens[t.chainId] || {}, e.tokens[t.chainId][t.address] = t, e.timestamp = bs()
                    })).addCase(ss, (function(e, n) {
                        var t = n.payload,
                            a = t.address,
                            i = t.chainId;
                        e.tokens[i] = e.tokens[i] || {}, delete e.tokens[i][a], e.timestamp = bs()
                    })).addCase(ls, (function(e, n) {
                        var t = n.payload.serializedPair;
                        if (t.token0.chainId === t.token1.chainId && t.token0.address !== t.token1.address) {
                            var a = t.token0.chainId;
                            e.pairs[a] = e.pairs[a] || {}, e.pairs[a][ms(t.token0.address, t.token1.address)] = t
                        }
                        e.timestamp = bs()
                    })).addCase(ds, (function(e, n) {
                        var t = n.payload,
                            a = t.chainId,
                            i = t.tokenAAddress,
                            r = t.tokenBAddress;
                        e.pairs[a] && (delete e.pairs[a][ms(i, r)], delete e.pairs[a][ms(r, i)]), e.timestamp = bs()
                    })).addCase(us, (function(e) { e.audioPlay = !1 })).addCase(ps, (function(e) { e.audioPlay = !0 }))
                })),
                xs = Object(I.b)("transactions/addTransaction"),
                js = Object(I.b)("transactions/clearAllTransactions"),
                Os = Object(I.b)("transactions/finalizeTransaction"),
                ys = Object(I.b)("transactions/checkedTransaction"),
                Cs = function() { return (new Date).getTime() },
                vs = Object(I.c)({}, (function(e) {
                    return e.addCase(xs, (function(e, n) {
                        var t, a, i = n.payload,
                            r = i.chainId,
                            o = i.from,
                            c = i.hash,
                            s = i.approval,
                            l = i.summary;
                        if (null === (t = e[r]) || void 0 === t ? void 0 : t[c]) throw Error("Attempted to add existing transaction.");
                        var d = null !== (a = e[r]) && void 0 !== a ? a : {};
                        d[c] = { hash: c, approval: s, summary: l, from: o, addedTime: Cs() }, e[r] = d
                    })).addCase(js, (function(e, n) {
                        var t = n.payload.chainId;
                        e[t] && (e[t] = {})
                    })).addCase(ys, (function(e, n) {
                        var t, a = n.payload,
                            i = a.chainId,
                            r = a.hash,
                            o = a.blockNumber,
                            c = null === (t = e[i]) || void 0 === t ? void 0 : t[r];
                        c && (c.lastCheckedBlockNumber ? c.lastCheckedBlockNumber = Math.max(o, c.lastCheckedBlockNumber) : c.lastCheckedBlockNumber = o)
                    })).addCase(Os, (function(e, n) {
                        var t, a = n.payload,
                            i = a.hash,
                            r = a.chainId,
                            o = a.receipt,
                            c = null === (t = e[r]) || void 0 === t ? void 0 : t[i];
                        c && (c.receipt = o, c.confirmedTime = Cs())
                    }))
                }));
            ! function(e) { e.INPUT = "INPUT", e.OUTPUT = "OUTPUT" }(fs || (fs = {}));
            var ws, ks, Ts = Object(I.b)("swap/selectCurrency"),
                Ms = Object(I.b)("swap/switchCurrencies"),
                Ls = Object(I.b)("swap/typeInput"),
                Is = Object(I.b)("swap/replaceSwapState"),
                Ns = Object(I.b)("swap/setRecipient"),
                As = (ws = { independentField: fs.INPUT, typedValue: "" }, Object(De.a)(ws, fs.INPUT, { currencyId: "" }), Object(De.a)(ws, fs.OUTPUT, { currencyId: "" }), Object(De.a)(ws, "recipient", null), ws),
                Es = Object(I.c)(As, (function(e) {
                    return e.addCase(Is, (function(e, n) {
                        var t, a = n.payload,
                            i = a.typedValue,
                            r = a.recipient,
                            o = a.field,
                            c = a.inputCurrencyId,
                            s = a.outputCurrencyId;
                        return t = {}, Object(De.a)(t, fs.INPUT, { currencyId: c }), Object(De.a)(t, fs.OUTPUT, { currencyId: s }), Object(De.a)(t, "independentField", o), Object(De.a)(t, "typedValue", i), Object(De.a)(t, "recipient", r), t
                    })).addCase(Ts, (function(e, n) {
                        var t, a = n.payload,
                            i = a.currencyId,
                            r = a.field,
                            o = r === fs.INPUT ? fs.OUTPUT : fs.INPUT;
                        return i === e[o].currencyId ? Object(w.a)(Object(w.a)({}, e), {}, (t = { independentField: e.independentField === fs.INPUT ? fs.OUTPUT : fs.INPUT }, Object(De.a)(t, r, { currencyId: i }), Object(De.a)(t, o, { currencyId: e[r].currencyId }), t)) : Object(w.a)(Object(w.a)({}, e), {}, Object(De.a)({}, r, { currencyId: i }))
                    })).addCase(Ms, (function(e) { var n; return Object(w.a)(Object(w.a)({}, e), {}, (n = { independentField: e.independentField === fs.INPUT ? fs.OUTPUT : fs.INPUT }, Object(De.a)(n, fs.INPUT, { currencyId: e[fs.OUTPUT].currencyId }), Object(De.a)(n, fs.OUTPUT, { currencyId: e[fs.INPUT].currencyId }), n)) })).addCase(Ls, (function(e, n) {
                        var t = n.payload,
                            a = t.field,
                            i = t.typedValue;
                        return Object(w.a)(Object(w.a)({}, e), {}, { independentField: a, typedValue: i })
                    })).addCase(Ns, (function(e, n) {
                        var t = n.payload.recipient;
                        e.recipient = t
                    }))
                }));
            ! function(e) { e.CURRENCY_A = "CURRENCY_A", e.CURRENCY_B = "CURRENCY_B" }(ks || (ks = {}));
            var Ss, Fs = Object(I.b)("mint/typeInputMint"),
                Rs = Object(I.b)("mint/resetMintState"),
                Bs = { independentField: ks.CURRENCY_A, typedValue: "", otherTypedValue: "" },
                Ds = Object(I.c)(Bs, (function(e) {
                    return e.addCase(Rs, (function() { return Bs })).addCase(Fs, (function(e, n) {
                        var t = n.payload,
                            a = t.field,
                            i = t.typedValue;
                        return t.noLiquidity ? a === e.independentField ? Object(w.a)(Object(w.a)({}, e), {}, { independentField: a, typedValue: i }) : Object(w.a)(Object(w.a)({}, e), {}, { independentField: a, typedValue: i, otherTypedValue: e.typedValue }) : Object(w.a)(Object(w.a)({}, e), {}, { independentField: a, typedValue: i, otherTypedValue: "" })
                    }))
                })),
                Us = "tokenList",
                Hs = [Us],
                zs = t(457),
                Vs = { error: null, current: null, loadingRequestId: null, pendingUpdate: null },
                Zs = { lastInitializedDefaultListOfLists: Hs, byUrl: Object(w.a)(Object(w.a)({}, Hs.reduce((function(e, n) { return e[n] = Vs, e }), {})), {}, Object(De.a)({}, Us, { error: null, current: zs, loadingRequestId: null, pendingUpdate: null })), selectedListUrl: Us },
                Ps = Object(I.c)(Zs, (function(e) {
                    return e.addCase(Ri.pending, (function(e, n) {
                        var t = n.payload,
                            a = t.requestId,
                            i = t.url;
                        e.byUrl[i] = Object(w.a)(Object(w.a)({ current: null, pendingUpdate: null }, e.byUrl[i]), {}, { loadingRequestId: a, error: null })
                    })).addCase(Ri.fulfilled, (function(e, n) {
                        var t, a, i = n.payload,
                            r = i.requestId,
                            o = i.tokenList,
                            c = i.url,
                            s = null === (t = e.byUrl[c]) || void 0 === t ? void 0 : t.current,
                            l = null === (a = e.byUrl[c]) || void 0 === a ? void 0 : a.loadingRequestId;
                        if (s) {
                            if (Object(Fi.c)(s.version, o.version) === Fi.a.NONE) return;
                            null !== l && l !== r || (e.byUrl[c] = Object(w.a)(Object(w.a)({}, e.byUrl[c]), {}, { loadingRequestId: null, error: null, current: s, pendingUpdate: o }))
                        } else e.byUrl[c] = Object(w.a)(Object(w.a)({}, e.byUrl[c]), {}, { loadingRequestId: null, error: null, current: o, pendingUpdate: null })
                    })).addCase(Ri.rejected, (function(e, n) {
                        var t, a = n.payload,
                            i = a.url,
                            r = a.requestId,
                            o = a.errorMessage;
                        (null === (t = e.byUrl[i]) || void 0 === t ? void 0 : t.loadingRequestId) === r && (e.byUrl[i] = Object(w.a)(Object(w.a)({}, e.byUrl[i]), {}, { loadingRequestId: null, error: o, current: null, pendingUpdate: null }))
                    })).addCase(Hi, (function(e, n) {
                        var t = n.payload;
                        e.selectedListUrl = t, e.byUrl[t] || (e.byUrl[t] = Vs)
                    })).addCase(Di, (function(e, n) {
                        var t = n.payload;
                        e.byUrl[t] || (e.byUrl[t] = Vs)
                    })).addCase(Ui, (function(e, n) {
                        var t = n.payload;
                        e.byUrl[t] && delete e.byUrl[t], e.selectedListUrl === t && (e.selectedListUrl = Object.keys(e.byUrl)[0])
                    })).addCase(Bi, (function(e, n) {
                        var t, a = n.payload;
                        if (!(null === (t = e.byUrl[a]) || void 0 === t ? void 0 : t.pendingUpdate)) throw new Error("accept list update called without pending update");
                        e.byUrl[a] = Object(w.a)(Object(w.a)({}, e.byUrl[a]), {}, { pendingUpdate: null, current: e.byUrl[a].pendingUpdate })
                    })).addCase(ns, (function(e) {
                        if (e.lastInitializedDefaultListOfLists) {
                            if (e.lastInitializedDefaultListOfLists) {
                                var n = e.lastInitializedDefaultListOfLists.reduce((function(e, n) { return e.add(n) }), new Set),
                                    t = Hs.reduce((function(e, n) { return e.add(n) }), new Set);
                                Hs.forEach((function(t) { n.has(t) || (e.byUrl[t] = Vs) })), e.lastInitializedDefaultListOfLists.forEach((function(n) { t.has(n) || delete e.byUrl[n] }))
                            }
                        } else e.byUrl = Zs.byUrl, e.selectedListUrl = void 0;
                        e.lastInitializedDefaultListOfLists = Hs
                    }))
                }));
            ! function(e) { e.LIQUIDITY_PERCENT = "LIQUIDITY_PERCENT", e.LIQUIDITY = "LIQUIDITY", e.CURRENCY_A = "CURRENCY_A", e.CURRENCY_B = "CURRENCY_B" }(Ss || (Ss = {}));
            var _s = Object(I.b)("burn/typeInputBurn"),
                Gs = { independentField: Ss.LIQUIDITY_PERCENT, typedValue: "0" },
                Ws = Object(I.c)(Gs, (function(e) {
                    return e.addCase(_s, (function(e, n) {
                        var t = n.payload,
                            a = t.field,
                            i = t.typedValue;
                        return Object(w.a)(Object(w.a)({}, e), {}, { independentField: a, typedValue: i })
                    }))
                })),
                Ks = Object(I.b)("app/openModalViewPet"),
                Ys = { modalViewPet: { toggle: !1, data: void 0 } },
                Qs = Object(I.c)(Ys, (function(e) {
                    return e.addCase(Ks, (function(e, n) {
                        var t = n.payload;
                        e.modalViewPet = t
                    }))
                })),
                qs = /^0x[a-fA-F0-9]{40}$/,
                Xs = /^0x[a-f0-9]*$/;

            function Js(e) { if (!qs.test(e.address)) throw new Error("Invalid address: ".concat(e.address)); if (!Xs.test(e.callData)) throw new Error("Invalid hex: ".concat(e.callData)); return "".concat(e.address, "-").concat(e.callData) }
            var $s = Object(I.b)("multicall/addMulticallListeners"),
                el = Object(I.b)("multicall/removeMulticallListeners"),
                nl = Object(I.b)("multicall/fetchingMulticallResults"),
                tl = Object(I.b)("multicall/errorFetchingMulticallResults"),
                al = Object(I.b)("multicall/updateMulticallResults"),
                il = Object(I.c)({ callResults: {} }, (function(e) {
                    return e.addCase($s, (function(e, n) {
                        var t, a = n.payload,
                            i = a.calls,
                            r = a.chainId,
                            o = a.options,
                            c = (o = void 0 === o ? {} : o).blocksPerFetch,
                            s = void 0 === c ? 1 : c,
                            l = e.callListeners ? e.callListeners : e.callListeners = {};
                        l[r] = null !== (t = l[r]) && void 0 !== t ? t : {}, i.forEach((function(e) {
                            var n, t, a = Js(e);
                            l[r][a] = null !== (n = l[r][a]) && void 0 !== n ? n : {}, l[r][a][s] = (null !== (t = l[r][a][s]) && void 0 !== t ? t : 0) + 1
                        }))
                    })).addCase(el, (function(e, n) {
                        var t = n.payload,
                            a = t.chainId,
                            i = t.calls,
                            r = t.options,
                            o = (r = void 0 === r ? {} : r).blocksPerFetch,
                            c = void 0 === o ? 1 : o,
                            s = e.callListeners ? e.callListeners : e.callListeners = {};
                        s[a] && i.forEach((function(e) {
                            var n = Js(e);
                            s[a][n] && s[a][n][c] && (1 === s[a][n][c] ? delete s[a][n][c] : s[a][n][c]--)
                        }))
                    })).addCase(nl, (function(e, n) {
                        var t, a = n.payload,
                            i = a.chainId,
                            r = a.fetchingBlockNumber,
                            o = a.calls;
                        e.callResults[i] = null !== (t = e.callResults[i]) && void 0 !== t ? t : {}, o.forEach((function(n) {
                            var t = Js(n),
                                a = e.callResults[i][t];
                            if (a) {
                                var o;
                                if ((null !== (o = a.fetchingBlockNumber) && void 0 !== o ? o : 0) >= r) return;
                                e.callResults[i][t].fetchingBlockNumber = r
                            } else e.callResults[i][t] = { fetchingBlockNumber: r }
                        }))
                    })).addCase(tl, (function(e, n) {
                        var t, a = n.payload,
                            i = a.fetchingBlockNumber,
                            r = a.chainId,
                            o = a.calls;
                        e.callResults[r] = null !== (t = e.callResults[r]) && void 0 !== t ? t : {}, o.forEach((function(n) {
                            var t = Js(n),
                                a = e.callResults[r][t];
                            a && a.fetchingBlockNumber === i && (delete a.fetchingBlockNumber, a.data = null, a.blockNumber = i)
                        }))
                    })).addCase(al, (function(e, n) {
                        var t, a = n.payload,
                            i = a.chainId,
                            r = a.results,
                            o = a.blockNumber;
                        e.callResults[i] = null !== (t = e.callResults[i]) && void 0 !== t ? t : {}, Object.keys(r).forEach((function(n) {
                            var t, a = e.callResults[i][n];
                            (null !== (t = null === a || void 0 === a ? void 0 : a.blockNumber) && void 0 !== t ? t : 0) > o || (e.callResults[i][n] = { data: r[n], blockNumber: o })
                        }))
                    }))
                })),
                rl = "IS_DARK";
            var ol = ["user", "transactions"],
                cl = Object($c.load)({ states: ol });
            cl.user && (cl.user.userDarkMode = function() {
                var e = null;
                try {
                    var n = localStorage.getItem(rl);
                    n && (e = JSON.parse(n))
                } catch (t) { console.error("E0003", t) }
                return e
            }());
            var sl = Object(I.a)({ reducer: { application: es, user: gs, transactions: vs, swap: Es, mint: Ds, burn: Ws, shop: Qs, multicall: il, lists: Ps, toasts: ri }, middleware: [].concat(Object(x.a)(Object(I.e)({ thunk: !1 })), [Object($c.save)({ states: ol })]), preloadedState: cl });
            sl.dispatch(ns());
            var ll = sl;

            function dl(e) { var n = new Ue.a(e); return n.pollingInterval = 15e3, n }
            var ul = Object(Y.c)(ne.h),
                pl = function(e) { var n = e.children; return Object(V.jsx)(Y.b, { getLibrary: dl, children: Object(V.jsx)(ul, { getLibrary: dl, children: Object(V.jsx)(k.a, { store: ll, children: Object(V.jsx)(Ja, { children: Object(V.jsx)(Te, { children: n }) }) }) }) }) },
                bl = (t(889), t(890), t(891), t(892), t(893), t(318)),
                ml = t(459),
                fl = t.n(ml),
                hl = t(460),
                gl = t.n(hl);
            bl.a.use(fl.a).use(gl.a).use(xn.a).init({ backend: { loadPath: "./locales/{{lng}}.json" }, react: { useSuspense: !0 }, fallbackLng: "en", preload: ["en"], keySeparator: !1, interpolation: { escapeValue: !1 } });
            bl.a, t(910);
            u.a.addDefaultLocale(p), u.a.addLocale(b), "ethereum" in window && (window.ethereum.autoRefreshOnNetworkChange = !1), window.addEventListener("error", (function() {
                var e;
                null === (e = localStorage) || void 0 === e || e.removeItem("redux_localstorage_simple_lists")
            })), d.a.render(Object(V.jsx)(c.StrictMode, { children: Object(V.jsxs)(pl, { children: [Object(V.jsx)(Jc, {}), Object(V.jsx)(h, {}), Object(V.jsx)(g, {}), Object(V.jsx)(Xc, {})] }) }), document.getElementById("root"))
        }
    },
    [
        [911, 2, 3]
    ]
]);