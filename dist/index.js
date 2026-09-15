import { jsx as e } from "react/jsx-runtime";
import { useEffect as t, useState as n } from "react";
import './index.css';var r = {
	"movie-title": "_movie-title_gb9b0_1",
	"movie-title__character": "_movie-title__character_gb9b0_25",
	"movie-title__word": "_movie-title__word_gb9b0_33",
	blow: "_blow_gb9b0_40",
	"drop-in": "_drop-in_gb9b0_43",
	elastic: "_elastic_gb9b0_46",
	glitch: "_glitch_gb9b0_49",
	projector: "_projector_gb9b0_52",
	bread: "_bread_gb9b0_55",
	poof: "_poof_gb9b0_58",
	washer: "_washer_gb9b0_61",
	flicker: "_flicker_gb9b0_64",
	gravity: "_gravity_gb9b0_67",
	"spin-in": "_spin-in_gb9b0_70",
	"rubber-band": "_rubber-band_gb9b0_73",
	pogo: "_pogo_gb9b0_76",
	pulse: "_pulse_gb9b0_79",
	takeoff: "_takeoff_gb9b0_82",
	wave: "_wave_gb9b0_1"
}, i = {
	subtle: .5,
	normal: 1,
	drastic: 1.5,
	extreme: 2
}, a = ({ animationName: t, perChar: n = !1, children: a, delay: o = 0, duration: s = 1, stagger: c = .12, animationIterationCount: l = 1, className: u = "", htmlTag: d = "h1", intensity: f = "normal", zIndex: p = 1 }) => {
	let m = d, h = [r["movie-title"], u].filter(Boolean).join(" "), g = {
		"--movie-title-intensity": i[f],
		zIndex: p
	};
	return /* @__PURE__ */ e(m, {
		className: h,
		style: g,
		children: n ? [...a].map((n, i) => /* @__PURE__ */ e("span", {
			className: `${r["movie-title__character"]} ${r[t]}`,
			style: {
				animationDelay: `${o + i * c}s`,
				animationDuration: `${s}s`,
				animationIterationCount: l
			},
			children: n === " " ? "\xA0" : n
		}, `${n}-${i}`)) : /* @__PURE__ */ e("span", {
			className: `${r["movie-title__word"]} ${r[t]}`,
			style: {
				animationDelay: `${o}s`,
				animationDuration: `${s}s`,
				animationIterationCount: l
			},
			children: a
		})
	});
}, o = { "movie-title-sequence": "_movie-title-sequence_1dols_1" }, s = ({ titles: r, loop: i = !1, className: s = "", zIndex: c = 1 }) => {
	let [l, u] = n(0), [d, f] = n(0);
	if (t(() => {
		if (r.length === 0) return;
		let e = r[l], t = e.duration ?? 1, n = e.delay ?? 0, a = e.stagger ?? 0, o = e.animationIterationCount ?? 1;
		if (o === "infinite") return;
		let s = n + (e.perChar ? Math.max(e.title.length - 1, 0) * a : 0) + t * o, c = window.setTimeout(() => {
			if (l === r.length - 1) {
				if (!i) return;
				u(0), f((e) => e + 1);
				return;
			}
			u((e) => e + 1);
		}, s * 1e3);
		return () => window.clearTimeout(c);
	}, [
		l,
		i,
		r
	]), r.length === 0) return null;
	let p = r[l], m = [o["movie-title-sequence"], s].filter(Boolean).join(" ");
	return /* @__PURE__ */ e("div", {
		className: m,
		children: /* @__PURE__ */ e(a, {
			animationName: p.animationName,
			perChar: p.perChar,
			delay: p.delay,
			duration: p.duration,
			stagger: p.stagger,
			animationIterationCount: p.animationIterationCount,
			htmlTag: p.htmlTag,
			intensity: p.intensity,
			zIndex: c,
			children: p.title
		}, `${l}-${d}`)
	});
};
//#endregion
export { a as MovieTitle, s as MovieTitleSequence };
