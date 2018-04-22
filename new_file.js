OpenInstall = function(e, t, n) {
	function r() {
		this.arr = [], this.run = function(e) {
			this.arr ? this.arr[this.arr.length] = e : e()
		}, this.ready = function() {
			if(null != this.arr)
				for(var e = 0; e < this.arr.length; e++) this.arr[e]();
			this.arr = null
		}
	}

	function i(e) {
		var t = [];
		for(var n in e) {
			var r = e[n];
			if("[object Array]" == Object.prototype.toString.call())
				for(var i = 0; i < r.length; i++) null != r[i] && "undefined" != typeof r[i] && t.push(encodeURIComponent(n) + "=" + encodeURIComponent(r[i]));
			else null != r && "undefined" != typeof r && t.push(encodeURIComponent(n) + "=" + encodeURIComponent(r))
		}
		return t.join("&")
	}

	function o(e) {
		var t = new n,
			r = e.data,
			i = e.url,
			o = e.method;
		i = i.indexOf("?") > -1 ? i + "&v=" + c : i + "?v=" + c, r && "string" != typeof r && (r = f.stringify(r)), "POST" != o && r && (i = i + (i.indexOf("?") > -1 ? "&" : "?") + r, r = null), t.onreadystatechange = function() {
			if(t.readyState == ("number" == typeof n.DONE ? n.DONE : 4)) {
				if(200 == t.status) {
					var r = t.response || t.responseText || {};
					e.success && e.success("string" == typeof r ? f.parse(r) : r)
				} else e.error && e.error(t, t.statusText);
				e.complete && e.complete(t)
			}
		}, t.ontimeout = function() {
			e.error && e.error(t, t.statusText)
		}, t.timeout = e.timeout || 0, t.open(o, i, !0), t.setRequestHeader && t.setRequestHeader("Content-Type", "application/json;charset=utf-8"), t.withCredentials = (e.xhrFields || {}).withCredentials, t.send(r)
	}

	function a(n, c) {
		function f(e) {
			function n(e) {
				for(var n = 0; n < i.length; n++) t.removeEventListener(i[n], e)
			}

			function r() {
				for(var r = function() {
						clearTimeout(e), n(r)
					}, o = 0; o < i.length; o++) {
					var a = i[o];
					t.addEventListener(a, r)
				}
			}
			if("android" != b.platform || "qq" != b.brower) {
				var i = ["visibilitychange", "webkitvisibilitychange", "mozvisibilitychange"];
				r()
			}
		}

		function s() {
			for(var e = ["hidden", "webkitHidden", "mozHidden", "msHidden", "oHidden"], n = 0; n < e.length; n++) {
				var r = e[n];
				if(r in t && "boolean" == typeof t[r]) return t[r] === !0
			}
			return !1
		}

		function d(e, t, n, r) {
			if(D[e](t), "function" == typeof n) {
				var i = setTimeout(function() {
					s() || n()
				}, r);
				f(i)
			}
		}

		function h(e) {
			var n = t.createElement("div");
			return n.innerHTML = e, n = n.children[0], n.onclick = function() {
				t.body.removeChild(n)
			}, n
		}

		function p() {
			return b.apkUrl && "function" == typeof n.apkDownloadHandler ? void n.apkDownloadHandler(b.apkUrl) : void(b.fallbackUrl ? D[b.fallbackMethod](b.fallbackUrl) : C && t.body.appendChild(C))
		}

		function v() {
			b && b.allowClickLog && !H && (H = !0, o({
				url: a.server + "/stats/click?" + i({
					appKey: S,
					platform: b.platform,
					channelCode: b.channelCode
				}),
				method: "GET",
				xhrFields: {
					withCredentials: !0
				}
			}))
		}

		function m(e, t, r) {
			l(function() {
				x.run(function() {
					n._logClick !== !1 && v();
					var i = t ? p : null;
					e || "android" != b.platform || "qq" != b.brower || (e = !0, r = r || {}, "undefined" == typeof r.timeout && (r.timeout = 300)), b.schemaUrl && e ? d(b.schemaMethod, b.schemaUrl, i, (r || {}).timeout || 500) : i && i()
				})
			})
		}

		function y(e, t) {
			U && (clearTimer(U), U = null);
			var n = a.server + "/bind/" + S + "?" + i(e);
			o({
				url: n,
				method: "POST",
				xhrFields: {
					withCredentials: !0
				},
				data: t,
				success: function(n) {
					b = g(n || {}), n.shadow && (C = h(n.shadow)), x.ready(), b.ttl && (U = setTimeout(function() {
						y(e, t)
					}, 1e3 * b.ttl))
				}
			})
		}

		function g(e) {
			var t = {
				sm: "schemaMethod",
				st: "schemaTimeout",
				fm: "fallbackMethod",
				au: "apkUrl",
				acl: "allowClickLog"
			};
			for(var n in e) {
				var r = t[n];
				r && (e[r] = e[n], delete e[n])
			}
			return e
		}
		n = n || {};
		var b, C, w, k, O, T, E = n.channelCode,
			S = n.appKey,
			x = new r,
			R = this;
		if(!S) return void alert("未指定appKey");
		if(!E) {
			var I = /[\?\&]channelCode=([^=&]+)$/.exec(e.location.href);
			I && (E = I[1])
		}
		try {
			w = e.screen.width || "", k = e.screen.height || "", T = e.devicePixelRatio || "";
			var L = t.createElement("canvas").getContext("webgl");
			O = L.getParameter(L.VERSION)
		} catch(j) {}
		var H, U, D = {
			frm: function(e) {
				var n = t.createElement("iframe");
				n.border = "none", n.style.display = "none", n.style.visibility = "hidden", n.src = e, t.body.appendChild(n)
			},
			loc: function(t) {
				e.location = t
			},
			hrf: function(e) {
				var n = t.createElement("a");
				n.style.display = "none", n.href = e, t.body.appendChild(n), n.click()
			},
			inhrf: function(e) {
				var n = t.createElement("script");
				n.setAttribute("type", "text/javascript"), n.innerHTML = '(function(){var a = document.createElement("a");a.style.display = "none";a.href = "' + e.replace(/"/g, '\\"') + '";document.body.appendChild(a);a.click();})()', t.body.appendChild(n)
			},
			open: function(t) {
				e.open(t)
			}
		};
		this.wakeupOrInstall = function(e) {
			m(!0, !0, e)
		}, this.schemeWakeup = function(e) {
			m(!0, !1, e)
		}, this.install = function(e) {
			m(!1, !0, e)
		}, n.buttonId && l(function() {
			for(var e = n.buttonId.split(" "), r = 0; r < e.length; r++) {
				var i = t.getElementById(e[r]);
				i && i.addEventListener("click", function() {
					R.wakeupOrInstall()
				})
			}
		}), u(function(e) {
			var t = {
				channelCode: E,
				w: w,
				h: k,
				p: T,
				g: O,
				i: e,
				c: n._channelRedirect ? 1 : 0,
				apk: n.apkFileName
			};
			y(t, c)
		})
	}
	var c = 2,
		l = function() {
			"use strict";

			function n() {
				if(!o) {
					o = !0;
					for(var t = 0; t < i.length; t++) i[t].fn.call(e, i[t].ctx);
					i = []
				}
			}

			function r() {
				"complete" === t.readyState && n()
			}
			var i = [],
				o = !1,
				a = !1;
			return function(c, l) {
				return o ? void setTimeout(function() {
					c(l)
				}, 1) : (i.push({
					fn: c,
					ctx: l
				}), void("complete" === t.readyState || !t.attachEvent && "interactive" === t.readyState ? setTimeout(n, 1) : a || (t.addEventListener ? (t.addEventListener("DOMContentLoaded", n, !1), e.addEventListener("load", n, !1)) : (t.attachEvent("onreadystatechange", r), e.attachEvent("onload", n)), a = !0)))
			}
		}(),
		u = function() {
			function t(t) {
				function n(e) {
					var t = e.split(".");
					if(4 == t.length)
						for(var n = 0; 4 > n; n++) t[n] = parseInt(t[n]);
					else {
						t = e.split("::");
						var r = [],
							i = [];
						if(2 == t.length) {
							t[0] && (r = t[0].split(":")), t[1] && (i = t[1].split(":"));
							for(var o = r.length + i.length; o++ < 8;) r.push("0");
							for(var n = 0; n < i.length; n++) r.push(i[n])
						} else r = t[0].split(":");
						t = [];
						for(var n = 0; n < r.length; n++) {
							var a = parseInt(r[n], 16);
							t[2 * n] = a >> 8 & 255, t[2 * n + 1] = 255 & a
						}
					}
					return t
				}

				function r(e) {
					return e[0] << 24 | e[1] << 16 | e[2] << 8 | e[3]
				}

				function i(e) {
					4 != (e = n(e)).length || 0 === (e = r(e)) || e >> 24 === 127 || e in s || (s[e] = !0, c[c.length] = e, l())
				}

				function o(e) {
					for(var t = e.split("\r\n"), n = 0; n < t.length; n++) {
						var r = t[n];
						if(~r.indexOf("a=candidate")) {
							var o = r.split(" "),
								a = o[4],
								c = o[7];
							"host" === c && i(a)
						} else if(~r.indexOf("c=")) {
							var o = r.split(" "),
								a = o[2];
							i(a)
						}
					}
				}
				var a, c = [],
					l = function() {
						c && (f && f.close(), t(c), clearTimeout(a), c = null)
					};
				a = setTimeout(l, 2e3);
				try {
					var u = e.RTCPeerConnection || e.webkitRTCPeerConnection || e.mozRTCPeerConnection;
					if(!u) return void l();
					var f = new u({
						iceServers: []
					});
					f.createDataChannel("", {
						reliable: !1
					}), f.onicecandidate = function(e) {
						e.candidate && o("a=" + e.candidate.candidate)
					}, f.createOffer(function(e) {
						o(e.sdp), f.setLocalDescription(e)
					}, function() {
						l()
					}); {
						var s = {};
						(new Date).getTime()
					}
				} catch(d) {
					l()
				}
			}
			var n, i = new r;
			return t(function(e) {
					n = e, i.ready()
				}),
				function(e) {
					i.run(function() {
						e(n)
					})
				}
		}(),
		f = e.JSON || {
			parse: function(e) {
				return eval("(" + e + ")")
			},
			stringify: function() {
				var e = Object.prototype.toString,
					t = Array.isArray || function(t) {
						return "[object Array]" === e.call(t)
					},
					n = {
						'"': '\\"',
						"\\": "\\\\",
						"\b": "\\b",
						"\f": "\\f",
						"\n": "\\n",
						"\r": "\\r",
						"	": "\\t"
					},
					r = function(e) {
						return n[e] || "\\u" + (e.charCodeAt(0) + 65536).toString(16).substr(1)
					},
					i = /[\\"\u0000-\u001F\u2028\u2029]/g;
				return function o(n) {
					if(null == n) return "null";
					if("number" == typeof n) return isFinite(n) ? n.toString() : "null";
					if("boolean" == typeof n) return n.toString();
					if("object" == typeof n) {
						if("function" == typeof n.toJSON) return o(n.toJSON());
						if(t(n)) {
							for(var a = "[", c = 0; c < n.length; c++) a += (c ? ", " : "") + o(n[c]);
							return a + "]"
						}
						if("[object Object]" === e.call(n)) {
							var l = [];
							for(var u in n) n.hasOwnProperty(u) && l.push(o(u) + ": " + o(n[u]));
							return "{" + l.sort().join(", ") + "}"
						}
					}
					return '"' + n.toString().replace(i, r) + '"'
				}
			}()
		};
	return a.channelRedirect = function(e, t) {
		new a({
			appKey: e,
			channelCode: t,
			_channelRedirect: !0
		}).wakeupOrInstall()
	}, a.server = "//openlink.cc", a
}(window, document, XMLHttpRequest);