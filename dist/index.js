import { jsx as e } from "react/jsx-runtime";
import { useEffect as t, useState as n } from "react";
import './index.css';var r = {
	"movie-title-container": "_movie-title-container_kh7al_1",
	"movie-title": "_movie-title_kh7al_1",
	"movie-title__character": "_movie-title__character_kh7al_36",
	"movie-title__word": "_movie-title__word_kh7al_44",
	blow: "_blow_kh7al_51",
	"drop-in": "_drop-in_kh7al_54",
	elastic: "_elastic_kh7al_57",
	glitch: "_glitch_kh7al_60",
	projector: "_projector_kh7al_63",
	bread: "_bread_kh7al_66",
	poof: "_poof_kh7al_69",
	washer: "_washer_kh7al_72",
	flicker: "_flicker_kh7al_75",
	gravity: "_gravity_kh7al_78",
	"spin-in": "_spin-in_kh7al_81",
	"rubber-band": "_rubber-band_kh7al_84",
	pogo: "_pogo_kh7al_87",
	pulse: "_pulse_kh7al_90",
	takeoff: "_takeoff_kh7al_93",
	wave: "_wave_kh7al_1"
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
	return /* @__PURE__ */ e("div", {
		className: r["movie-title-container"],
		style: { zIndex: p },
		children: /* @__PURE__ */ e(m, {
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
