(function (t) { function e (e) { for (var r, o, c = e[0], l = e[1], s = e[2], d = 0, p = []; d < c.length; d++)o = c[d], Object.prototype.hasOwnProperty.call(a, o) && a[o] && p.push(a[o][0]), a[o] = 0; for (r in l)Object.prototype.hasOwnProperty.call(l, r) && (t[r] = l[r]); u && u(e); while (p.length)p.shift()(); return i.push.apply(i, s || []), n() } function n () { for (var t, e = 0; e < i.length; e++) { for (var n = i[e], r = !0, c = 1; c < n.length; c++) { var l = n[c]; a[l] !== 0 && (r = !1) }r && (i.splice(e--, 1), t = o(o.s = n[0])) } return t } var r = {}; var a = { app: 0 }; var i = []; function o (e) { if (r[e]) return r[e].exports; var n = r[e] = { i: e, l: !1, exports: {} }; return t[e].call(n.exports, n, n.exports, o), n.l = !0, n.exports }o.m = t, o.c = r, o.d = function (t, e, n) { o.o(t, e) || Object.defineProperty(t, e, { enumerable: !0, get: n }) }, o.r = function (t) { typeof Symbol !== 'undefined' && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, { value: 'Module' }), Object.defineProperty(t, '__esModule', { value: !0 }) }, o.t = function (t, e) { if (1 & e && (t = o(t)), 8 & e) return t; if (4 & e && typeof t === 'object' && t && t.__esModule) return t; var n = Object.create(null); if (o.r(n), Object.defineProperty(n, 'default', { enumerable: !0, value: t }), 2 & e && typeof t !== 'string') for (var r in t)o.d(n, r, function (e) { return t[e] }.bind(null, r)); return n }, o.n = function (t) { var e = t && t.__esModule ? function () { return t.default } : function () { return t }; return o.d(e, 'a', e), e }, o.o = function (t, e) { return Object.prototype.hasOwnProperty.call(t, e) }, o.p = '/'; var c = window.webpackJsonp = window.webpackJsonp || []; var l = c.push.bind(c); c.push = e, c = c.slice(); for (var s = 0; s < c.length; s++)e(c[s]); var u = l; i.push([0, 'chunk-vendors']), n() })({ 0: function (t, e, n) { t.exports = n('56d7') }, '1f57': function (t, e, n) { 'use strict'; n('e1aa') }, 2395: function (t, e, n) {}, '39cf': function (t, e, n) {}, '56d7': function (t, e, n) { 'use strict'; n.r(e); n('e260'), n('e6cf'), n('cca6'), n('a79d'); var r = n('2b0e'); var a = function () { var t = this; var e = t.$createElement; var n = t._self._c || e; return n('div', { attrs: { id: 'app' } }, [n('router-view')], 1) }; var i = []; var o = (n('7c55'), n('2877')); var c = {}; var l = Object(o.a)(c, a, i, !1, null, null, null); var s = l.exports; var u = n('8c4f'); var d = function () { var t = this; var e = t.$createElement; var n = t._self._c || e; return n('div', { staticClass: 'app-main' }, [n('div', { staticClass: 'container' }, [n('textarea', { directives: [{ name: 'model', rawName: 'v-model', value: t.markdown, expression: 'markdown' }], staticClass: 'app-note', class: { 'error-status': t.hasErrInput }, attrs: { name: 'note', id: 'note', cols: '30', rows: '10' }, domProps: { value: t.markdown }, on: { input: [function (e) { e.target.composing || (t.markdown = e.target.value) }, t.handleRebuildMindMap] } })]), n('div', { staticClass: 'container' }, [n('div', { staticClass: 'app-map', attrs: { id: 'app-map' } }, [n('mind-map', { attrs: { mindMapTree: t.mindMapTree } })], 1)])]) }; var p = []; var f = (n('a434'), n('ac1f'), n('1276'), n('d81d'), n('5319'), n('fb6a'), function () { var t = this; var e = t.$createElement; t._self._c; return t._m(0) }); var h = [function () { var t = this; var e = t.$createElement; var n = t._self._c || e; return n('div', { staticClass: 'svg-main' }, [n('div', { staticClass: 'svg-map', attrs: { id: 'svg-map' } })]) }]; var m = (n('99af'), n('159b'), { props: { mindMapTree: { type: Array, required: !0 } }, data: function () { return { mindMapDataLocal: [], options: { rootId: 'svg-map', svgId: 'svg-container', interval: 80, padding: 8, marginY: 12, borderWidth: 4, fontColor: '#fff', borderColor: 'rgba(0, 0, 0, 0)', lineColor: '#55aaee' } } }, mounted: function () { this.mindMapDataLocal = this.mindMapTree }, watch: { mindMapTree: { handler: function (t, e) { var n = this; this.mindMapDataLocal = t, this.$nextTick(function () { var t = document.getElementById('svg-container'); t && t.remove(), n.handleDrawMindMap() }) }, immediate: !0 } }, methods: { handleDrawMindMap: function (t, e) { var n = document.getElementById('app-map'); var r = n.offsetWidth; var a = n.offsetHeight; var i = document.createElementNS('http://www.w3.org/2000/svg', 'svg'); i.setAttribute('id', 'svg-container'), i.setAttribute('version', '1.1'), i.setAttribute('viewBox', '0 0 '.concat(r, ' ').concat(a)), i.setAttribute('preserveAspectRatio', 'xMinYMin'); var o = document.getElementById('svg-map'); o.appendChild(i); var c = this.mindMapDataLocal; var l = 80; var s = 8; var u = 12; var d = 4; var p = '#fff'; var f = 'rgba(0, 0, 0, 0)'; var h = '#55aaee'; var m = 0; var v = 0; var w = 2 * s + 2 * u; function g (t, e) { t.forEach(function (n, r) { n.parent = e, n.children && n.children.length > 0 ? (g(n.children, n), b(n, t.length, r)) : (v += 1, n.y = v, b(n, t.length, r)) }) } function b (t, e, n) { var r = t.parent; if (e === n + 1 && r) { var a = r.children[0].y; r.y = a + (t.y - a) / 2 } } function y (t, e) { i.setAttribute('width', t), i.setAttribute('height', e) } function M (t) { t.forEach(function (t) { C(t), t.children && t.children.length > 0 && M(t.children) }) } function C (t) { var e = document.createElementNS('http://www.w3.org/2000/svg', 'g'); var n = document.createElementNS('http://www.w3.org/2000/svg', 'text'); var r = document.createTextNode(t.title); n.appendChild(r), n.setAttribute('fill', t.fontColor ? t.fontColor : p), n.setAttribute('font-weight', 'bold'), e.appendChild(n), i.appendChild(e); var a = t.parent ? t.parent.x : 0; var o = t.parent ? t.parent.w : 0; var c = t.parent ? l : 0; var u = Math.ceil(n.getBBox().height); t.w = Math.ceil(n.getBBox().width) + 2 * s, t.x = a + o + c + 0, e.insertBefore(x(t), n), i.prepend(A(t), e); var f = n.getBBox().width; n.setAttribute('x', 0.5 * (t.w - f - 2 * d)), t.parent ? e.setAttribute('transform', 'translate('.concat(t.x + s, ',').concat(t.y * w + u / 2 - 20, ')')) : e.setAttribute('transform', 'translate('.concat(t.x + s + 20, ',').concat(t.y * w + u / 2 - 5, ')')), t.w + t.x > m && (m = t.w + t.x) } function x (t) { var e = document.createElementNS('http://www.w3.org/2000/svg', 'path'); return t.parent ? e.setAttribute('d', 'M0 '.concat(0.5 * u, ' l').concat(t.w, ' 0')) : e.setAttribute('d', k(t)), e.setAttribute('stroke', t.borderColor ? t.borderColor : f), e.setAttribute('stroke-width', d), e.setAttribute('stroke-linecap', 'round'), e.setAttribute('stroke-linejoin', 'round'), e.setAttribute('fill', t.bgColor ? t.bgColor : 'none'), e.setAttribute('fill', '#ccc'), e } function k (t) { return 'M0,-17h'.concat(t.w - 8, 'a5,5,0,0,1,5,5v13a5,5,0,0,1,-5,5h-').concat(t.w - 8, 'a5,5,0,0,1,-5,-5v-13a5,5,0,0,1,5,-5z') } function A (t) { var e = document.createElementNS('http://www.w3.org/2000/svg', 'path'); return t.parent ? (e.setAttribute('d', E(t)), e.setAttribute('stroke', t.lineColor ? t.lineColor : h), e.setAttribute('stroke-width', d), e.setAttribute('stroke-linecap', 'round'), e.setAttribute('fill', 'none'), e) : e } function E (t) { var e = t.parent; return e.y !== t.y ? 'M'.concat(e.x + e.w, ' ').concat(e.y * w, ' Q').concat(e.x + e.w + 40, ' ').concat(t.y * w, ' ').concat(t.x - 20, ' ').concat(t.y * w, ' L').concat(t.x + t.w, ' ').concat(t.y * w) : 'M'.concat(e.x + e.w, ' ').concat(e.y * w, ' L').concat(t.x + t.w, ' ').concat(t.y * w) }g(c, null), M(c), y(r, a) } } }); var v = m; var w = (n('1f57'), Object(o.a)(v, f, h, !1, null, '9494bb2a', null)); var g = w.exports; var b = { components: { MindMap: g }, data: function () { return { hasErrInput: !1, markdown: '- Front end tech\n   - Compiler/language\n   - Reactive framework\n      - React\n      - Vue\n         - vue2.X\n   - packager\n      - Webpack\n      - Snowpack', mindMapTree: [{ title: 'Front end tech', borderColor: '#55aaee', children: [{ title: 'Compiler/language', lineColor: 'red', children: [{ title: 'Elm', lineColor: 'red' }, { title: 'Svelte', lineColor: 'red' }, { title: 'ClojureScript', lineColor: 'red' }] }, { title: 'Reactive framework', lineColor: 'yellow', children: [{ title: 'React', lineColor: 'yellow' }, { title: 'Vue', lineColor: 'yellow' }, { title: 'Angular', lineColor: 'yellow' }] }, { title: 'packager', children: [{ title: 'Webpack' }, { title: 'Snowpack' }] }] }] } }, mounted: function () { this.handleRebuildMindMap() }, methods: { handleListToTree: function (t) { for (var e = t.shift(), n = 0; n < t.length; n++) if (e.parent - 1 === t[n].parent) { t[n].children ? t[n].children.unshift(e) : t[n].children = [e]; break }t.length > 1 && this.handleListToTree(t) }, handleDeleteNode: function (t, e) { for (var n = 0; n < t.length; n++) { if (t[n] && t[n].id === e) { t.splice(n, 1); break }t[n].children && t[n].children.length > 1 && this.handleDeleteNode(t[n].children, e) } return t }, handleRebuildMindMap: function () { var t = 0; var e = this.markdown.split(/\n/gi); try { var n = e.map(function (e, n) { var r = e.split('- ')[0].length / 3; var a = e.replace(/\s*-\s/, ''); var i = n + 1; if (!/^([1-9][0-9]*|0)$/.test(r) || !/^\s*-\s/g.test(e)) throw t = i, new Error('error input in line'.concat(i)); return { id: i, parent: r, title: a } }).sort(function (t, e) { return e.id - t.id }); this.mindMapTree = n, this.handleListToTree(n), this.hasErrInput = !1 } catch (a) { var r = this.handleDeleteNode(this.mindMapTree.slice(), t); this.mindMapTree = r, this.hasErrInput = !0 } } } }; var y = b; var M = (n('f59e'), Object(o.a)(y, d, p, !1, null, '60fecd02', null)); var C = M.exports; r.a.use(u.a); var x = [{ path: '/', name: 'main', component: C }, { path: '*', redirect: '/' }]; var k = new u.a({ routes: x }); var A = k; r.a.config.productionTip = !1, new r.a({ router: A, render: function (t) { return t(s) } }).$mount('#app') }, '7c55': function (t, e, n) { 'use strict'; n('2395') }, e1aa: function (t, e, n) {}, f59e: function (t, e, n) { 'use strict'; n('39cf') } })
// # sourceMappingURL=app.618aba86.js.map
