! function (e, t) {
    "object" == typeof exports && "object" == typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define("UniversalTilt", [], t) : "object" == typeof exports ? exports.UniversalTilt = t() : e.UniversalTilt = t()
}("object" != typeof window ? global.window = global : window, function () {
    return function (e) {
        var t = {};

        function n(i) {
            if (t[i]) return t[i].exports;
            var s = t[i] = {
                i: i,
                l: !1,
                exports: {}
            };
            return e[i].call(s.exports, s, s.exports, n), s.l = !0, s.exports
        }
        return n.m = e, n.c = t, n.d = function (e, t, i) {
            n.o(e, t) || Object.defineProperty(e, t, {
                enumerable: !0,
                get: i
            })
        }, n.r = function (e) {
            "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
                value: "Module"
            }), Object.defineProperty(e, "__esModule", {
                value: !0
            })
        }, n.t = function (e, t) {
            if (1 & t && (e = n(e)), 8 & t) return e;
            if (4 & t && "object" == typeof e && e && e.__esModule) return e;
            var i = Object.create(null);
            if (n.r(i), Object.defineProperty(i, "default", {
                enumerable: !0,
                value: e
            }), 2 & t && "string" != typeof e)
                for (var s in e) n.d(i, s, function (t) {
                    return e[t]
                }.bind(null, s));
            return i
        }, n.n = function (e) {
            var t = e && e.__esModule ? function () {
                return e.default
            } : function () {
                return e
            };
            return n.d(t, "a", t), t
        }, n.o = function (e, t) {
            return Object.prototype.hasOwnProperty.call(e, t)
        }, n.p = "", n(n.s = 0)
    }([function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.default = void 0;
        var i, s = (i = n(1)) && i.__esModule ? i : {
            default: i
        };
        var o = s.default;
        t.default = o, t.default = s.default, e.exports = t.default
    }, function (e, t, n) {
        "use strict";

        function i(e, t) {
            for (var n = 0; n < t.length; n++) {
                var i = t[n];
                i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
            }
        }

        function s(e, t, n) {
            return t in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n, e
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.default = void 0;
        var o = function () {
            function e(t) {
                var n = this,
                    i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                    o = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                ! function (e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this, e), s(this, "onMouseEnter", function () {
                    n.updateElementPosition(), n.transitions(), "function" == typeof n.callbacks.onMouseEnter && n.callbacks.onMouseEnter(n.element)
                }), s(this, "onMouseMove", function (e) {
                    null !== n.updateCall && cancelAnimationFrame(n.updateCall), n.event = e, n.updateElementPosition(), n.updateCall = requestAnimationFrame(function () {
                        return n.update()
                    }), "function" == typeof n.callbacks.onMouseMove && n.callbacks.onMouseMove(n.element)
                }), s(this, "onMouseLeave", function () {
                    n.transitions(), requestAnimationFrame(function () {
                        return n.reset()
                    }), "function" == typeof n.callbacks.onMouseLeave && n.callbacks.onMouseLeave(n.element)
                }), s(this, "onDeviceMove", function (e) {
                    n.event = e, n.update(), n.updateElementPosition(), n.transitions(), "function" == typeof n.callbacks.onDeviceMove && n.callbacks.onDeviceMove(n.element)
                }), this.element = t, this.callbacks = o, this.settings = this.extendSettings(i), "function" == typeof this.callbacks.onInit && this.callbacks.onInit(this.element), this.reverse = this.settings.reverse ? -1 : 1, this.settings.shine && this.shine(), this.element.style.transform = "perspective(".concat(this.settings.perspective, "px)"), this.addEventListeners()
            }
            var t, n, o;
            return t = e, o = [{
                key: "init",
                value: function () {
                    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                        n = t.elements,
                        i = t.settings,
                        s = t.callbacks;
                    n instanceof Node && (n = [n]), n instanceof NodeList && (n = [].slice.call(n));
                    var o = !0,
                        a = !1,
                        l = void 0;
                    try {
                        for (var r, c = n[Symbol.iterator](); !(o = (r = c.next()).done); o = !0) {
                            var u = r.value;
                            "universalTilt" in u || (u.universalTilt = new e(u, i, s))
                        }
                    } catch (e) {
                        a = !0, l = e
                    } finally {
                        try {
                            o || null == c.return || c.return()
                        } finally {
                            if (a) throw l
                        }
                    }
                }
            }], (n = [{
                key: "isMobile",
                value: function () {
                    return window.DeviceMotionEvent && "ontouchstart" in document.documentElement
                }
            }, {
                key: "addEventListeners",
                value: function () {
                    navigator.userAgent.match(this.settings.exclude) || (this.isMobile() ? window.addEventListener("devicemotion", this.onDeviceMove) : ("element" === this.settings.base ? this.base = this.element : "window" === this.settings.base && (this.base = window), this.base.addEventListener("mouseenter", this.onMouseEnter), this.base.addEventListener("mousemove", this.onMouseMove), this.base.addEventListener("mouseleave", this.onMouseLeave)))
                }
            }, {
                key: "removeEventListeners",
                value: function () {
                    window.removeEventListener("devicemotion", this.onDeviceMove), this.base.removeEventListener("mouseenter", this.onMouseEnter), this.base.removeEventListener("mousemove", this.onMouseMove), this.base.removeEventListener("mouseleave", this.onMouseLeave)
                }
            }, {
                key: "destroy",
                value: function () {
                    clearTimeout(this.timeout), null !== this.updateCall && cancelAnimationFrame(this.updateCall), "function" == typeof this.callbacks.onDestroy && this.callbacks.onDestroy(this.element), this.reset(), this.removeEventListeners(), this.element.universalTilt = null, delete this.element.universalTilt, this.element = null
                }
            }, {
                key: "reset",
                value: function () {
                    this.event = {
                        pageX: this.left + this.width / 2,
                        pageY: this.top + this.height / 2
                    }, this.settings.reset && (this.element.style.transform = "perspective(".concat(this.settings.perspective, "px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)")), this.settings.shine && !this.settings["shine-save"] && Object.assign(this.shineElement.style, {
                        transform: "rotate(180deg) translate3d(-50%, -50%, 0)",
                        opacity: "0"
                    })
                }
            }, {
                key: "getValues",
                value: function () {
                    var e, t, n;
                    this.isMobile() ? (e = this.event.accelerationIncludingGravity.x / 4, t = this.event.accelerationIncludingGravity.y / 4, 90 === window.orientation ? (n = (1 - t) / 2, t = (1 + e) / 2, e = n) : -90 === window.orientation ? (n = (1 + t) / 2, t = (1 - e) / 2, e = n) : 0 === window.orientation ? (t = n = (1 + t) / 2, e = (1 + e) / 2) : 180 === window.orientation && (t = n = (1 - t) / 2, e = (1 - e) / 2)) : "element" === this.settings.base ? (e = (this.event.clientX - this.left) / this.width, t = (this.event.clientY - this.top) / this.height) : "window" === this.settings.base && (e = this.event.clientX / window.innerWidth, t = this.event.clientY / window.innerHeight);
                    e = Math.min(Math.max(e, 0), 1), t = Math.min(Math.max(t, 0), 1);
                    var i = (this.settings.max / 2 - e * this.settings.max).toFixed(2),
                        s = (t * this.settings.max - this.settings.max / 2).toFixed(2),
                        o = Math.atan2(e - .5, .5 - t) * (180 / Math.PI);
                    return {
                        tiltX: this.reverse * i,
                        tiltY: this.reverse * s,
                        angle: o
                    }
                }
            }, {
                key: "updateElementPosition",
                value: function () {
                    var e = this.element.getBoundingClientRect();
                    this.width = this.element.offsetWidth, this.height = this.element.offsetHeight, this.left = e.left, this.top = e.top
                }
            }, {
                key: "update",
                value: function () {
                    var e = this.getValues();
                    this.element.style.transform = "perspective(".concat(this.settings.perspective, "px)\n      rotateX(").concat(this.settings.disabled && "X" === this.settings.disabled.toUpperCase() ? 0 : e.tiltY, "deg)\n      rotateY(").concat(this.settings.disabled && "Y" === this.settings.disabled.toUpperCase() ? 0 : e.tiltX, "deg)\n      scale3d(").concat(this.settings.scale, ", ").concat(this.settings.scale, ", ").concat(this.settings.scale, ")"), this.settings.shine && Object.assign(this.shineElement.style, {
                        transform: "rotate(".concat(e.angle, "deg) translate3d(-50%, -50%, 0)"),
                        opacity: "".concat(this.settings["shine-opacity"])
                    }), this.element.dispatchEvent(new CustomEvent("tiltChange", {
                        detail: e
                    })), this.updateCall = null
                }
            }, {
                key: "shine",
                value: function () {
                    var e = document.createElement("div"),
                        t = document.createElement("div");
                    e.classList.add("shine"), t.classList.add("shine-inner"), e.appendChild(t), this.element.appendChild(e), this.shineWrapper = this.element.querySelector(".shine"), this.shineElement = this.element.querySelector(".shine-inner"), Object.assign(this.shineWrapper.style, {
                        position: "absolute",
                        top: "0",
                        left: "0",
                        height: "100%",
                        width: "100%",
                        overflow: "hidden"
                    }), Object.assign(this.shineElement.style, {
                        position: "absolute",
                        top: "50%",
                        left: "50%",
                        "pointer-events": "none",
                        "background-image": "linear-gradient(0deg, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 1) 100%)",
                        width: "".concat(2 * this.element.offsetWidth, "px"),
                        height: "".concat(2 * this.element.offsetWidth, "px"),
                        transform: "rotate(180deg) translate3d(-50%, -50%, 0)",
                        "transform-origin": "0% 0%",
                        opacity: "0"
                    })
                }
            }, {
                key: "transitions",
                value: function () {
                    var e = this;
                    clearTimeout(this.timeout), this.element.style.transition = "all ".concat(this.settings.speed, "ms ").concat(this.settings.easing), this.settings.shine && (this.shineElement.style.transition = "opacity ".concat(this.settings.speed, "ms ").concat(this.settings.easing)), this.timeout = setTimeout(function () {
                        e.element.style.transition = "", e.settings.shine && (e.shineElement.style.transition = "")
                    }, this.settings.speed)
                }
            }, {
                key: "extendSettings",
                value: function (e) {
                    var t = {
                            base: "element",
                            disabled: null,
                            easing: "cubic-bezier(.03, .98, .52, .99)",
                            exclude: null,
                            max: 35,
                            perspective: 1e3,
                            reset: !0,
                            reverse: !1,
                            scale: 1,
                            shine: !1,
                            "shine-opacity": 0,
                            "shine-save": !1,
                            speed: 300
                        },
                        n = {};
                    for (var i in t)
                        if (i in e) n[i] = e[i];
                        else if (this.element.getAttribute("data-".concat(i))) {
                            var s = this.element.getAttribute("data-".concat(i));
                            try {
                                n[i] = JSON.parse(s)
                            } catch (e) {
                                n[i] = s
                            }
                        } else n[i] = t[i];
                    return n
                }
            }]) && i(t.prototype, n), o && i(t, o), e
        }();
        if (t.default = o, "undefined" != typeof document) {
            window.UniversalTilt = o;
            var a = document.querySelectorAll("[data-tilt]");
            a.length && o.init({
                elements: a
            })
        }
        window.jQuery && (window.jQuery.fn.universalTilt = function () {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            o.init({
                elements: this,
                settings: e.settings || {},
                callbacks: e.callbacks || {}
            })
        })
    }])
});