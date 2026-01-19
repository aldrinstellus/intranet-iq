(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/apps/intranet-iq/src/lib/utils.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "cn",
    ()=>cn
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/clsx/dist/clsx.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/tailwind-merge/dist/bundle-mjs.mjs [app-client] (ecmascript)");
;
;
function cn(...inputs) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["twMerge"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])(inputs));
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/intranet-iq/src/components/brand/IQLogo.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "IQLogo",
    ()=>IQLogo,
    "IQMark",
    ()=>IQMark
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
function IQLogo({ size = "md", showText = false, className = "" }) {
    _s();
    const [glitch, setGlitch] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "IQLogo.useEffect": ()=>{
            const interval = setInterval({
                "IQLogo.useEffect.interval": ()=>{
                    setGlitch(true);
                    setTimeout({
                        "IQLogo.useEffect.interval": ()=>setGlitch(false)
                    }["IQLogo.useEffect.interval"], 150);
                }
            }["IQLogo.useEffect.interval"], 4000);
            setTimeout({
                "IQLogo.useEffect": ()=>{
                    setGlitch(true);
                    setTimeout({
                        "IQLogo.useEffect": ()=>setGlitch(false)
                    }["IQLogo.useEffect"], 150);
                }
            }["IQLogo.useEffect"], 500);
            return ({
                "IQLogo.useEffect": ()=>clearInterval(interval)
            })["IQLogo.useEffect"];
        }
    }["IQLogo.useEffect"], []);
    // Unified sizing system
    const sizes = {
        sm: {
            container: "h-7 px-1.5",
            d: 16,
            iq: 9,
            dot: 4,
            dotOffset: 1
        },
        md: {
            container: "h-8 px-2",
            d: 20,
            iq: 11,
            dot: 5,
            dotOffset: 1
        },
        lg: {
            container: "h-10 px-2.5",
            d: 26,
            iq: 14,
            dot: 6,
            dotOffset: 2
        },
        xl: {
            container: "h-12 px-3",
            d: 32,
            iq: 17,
            dot: 7,
            dotOffset: 2
        }
    };
    const s = sizes[size];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `flex items-center gap-3 ${className}`,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `${s.container} rounded-xl bg-gradient-to-br from-blue-500 via-blue-600 to-purple-600 flex items-center justify-center relative overflow-hidden`,
                style: {
                    fontFamily: "'JetBrains Mono', 'Fira Code', monospace",
                    boxShadow: "0 4px 20px rgba(59, 130, 246, 0.3), inset 0 1px 0 rgba(255,255,255,0.15)"
                },
                children: [
                    glitch && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "absolute inset-0 flex items-center justify-center opacity-60",
                                style: {
                                    transform: "translate(-1.5px, 0)"
                                },
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(LogoText, {
                                    s: s,
                                    color: "#22d3ee"
                                }, void 0, false, {
                                    fileName: "[project]/apps/intranet-iq/src/components/brand/IQLogo.tsx",
                                    lineNumber: 55,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/apps/intranet-iq/src/components/brand/IQLogo.tsx",
                                lineNumber: 51,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "absolute inset-0 flex items-center justify-center opacity-60",
                                style: {
                                    transform: "translate(1.5px, 0)"
                                },
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(LogoText, {
                                    s: s,
                                    color: "#f87171"
                                }, void 0, false, {
                                    fileName: "[project]/apps/intranet-iq/src/components/brand/IQLogo.tsx",
                                    lineNumber: 61,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/apps/intranet-iq/src/components/brand/IQLogo.tsx",
                                lineNumber: 57,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "relative z-10",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(LogoText, {
                            s: s,
                            color: "#ffffff",
                            glowing: glitch
                        }, void 0, false, {
                            fileName: "[project]/apps/intranet-iq/src/components/brand/IQLogo.tsx",
                            lineNumber: 68,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/apps/intranet-iq/src/components/brand/IQLogo.tsx",
                        lineNumber: 67,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/apps/intranet-iq/src/components/brand/IQLogo.tsx",
                lineNumber: 41,
                columnNumber: 7
            }, this),
            showText && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-col",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-white font-medium leading-tight tracking-tight",
                        style: {
                            fontFamily: "'JetBrains Mono', monospace"
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "font-light text-white/60",
                                children: "digital"
                            }, void 0, false, {
                                fileName: "[project]/apps/intranet-iq/src/components/brand/IQLogo.tsx",
                                lineNumber: 79,
                                columnNumber: 13
                            }, this),
                            " ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-blue-400",
                                children: "intranet"
                            }, void 0, false, {
                                fileName: "[project]/apps/intranet-iq/src/components/brand/IQLogo.tsx",
                                lineNumber: 81,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/apps/intranet-iq/src/components/brand/IQLogo.tsx",
                        lineNumber: 75,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-[10px] text-white/40 uppercase tracking-widest",
                        children: "Knowledge Network"
                    }, void 0, false, {
                        fileName: "[project]/apps/intranet-iq/src/components/brand/IQLogo.tsx",
                        lineNumber: 83,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/apps/intranet-iq/src/components/brand/IQLogo.tsx",
                lineNumber: 74,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/apps/intranet-iq/src/components/brand/IQLogo.tsx",
        lineNumber: 39,
        columnNumber: 5
    }, this);
}
_s(IQLogo, "+wHBddT1u42wMWz+42D8h+uLPMQ=");
_c = IQLogo;
// Unified logo text component for seamless rendering
function LogoText({ s, color, glowing = false }) {
    const fontFamily = "ui-monospace, SFMono-Regular, 'SF Mono', Menlo, Monaco, Consolas, monospace";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        height: s.d,
        viewBox: `0 0 ${s.d * 1.7} ${s.d}`,
        style: {
            overflow: "visible"
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                x: "0",
                y: s.d * 0.78,
                fill: color,
                fontSize: s.d,
                fontWeight: "700",
                fontFamily: fontFamily,
                children: "d"
            }, void 0, false, {
                fileName: "[project]/apps/intranet-iq/src/components/brand/IQLogo.tsx",
                lineNumber: 109,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                x: s.d * 0.58,
                y: s.d * 0.78,
                fill: color,
                fillOpacity: 0.85,
                fontSize: s.iq,
                fontWeight: "400",
                fontFamily: fontFamily,
                children: "I"
            }, void 0, false, {
                fileName: "[project]/apps/intranet-iq/src/components/brand/IQLogo.tsx",
                lineNumber: 121,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                x: s.d * 0.58 + s.iq * 0.55,
                y: s.d * 0.78,
                fill: color,
                fillOpacity: 0.85,
                fontSize: s.iq,
                fontWeight: "400",
                fontFamily: fontFamily,
                children: "Q"
            }, void 0, false, {
                fileName: "[project]/apps/intranet-iq/src/components/brand/IQLogo.tsx",
                lineNumber: 134,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                cx: s.d * 1.48,
                cy: s.d * 0.78 - s.dotOffset,
                r: s.dot / 2,
                fill: "#60a5fa",
                style: {
                    filter: glowing ? "drop-shadow(0 0 4px rgba(96, 165, 250, 0.8))" : "drop-shadow(0 0 3px rgba(96, 165, 250, 0.5))"
                }
            }, void 0, false, {
                fileName: "[project]/apps/intranet-iq/src/components/brand/IQLogo.tsx",
                lineNumber: 147,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/apps/intranet-iq/src/components/brand/IQLogo.tsx",
        lineNumber: 103,
        columnNumber: 5
    }, this);
}
_c1 = LogoText;
function IQMark({ className = "" }) {
    const s = {
        d: 14,
        iq: 8,
        dot: 4,
        dotOffset: 1
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `h-6 px-1.5 rounded-lg bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center ${className}`,
        style: {
            fontFamily: "'JetBrains Mono', monospace",
            boxShadow: "0 2px 10px rgba(59, 130, 246, 0.25)"
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(LogoText, {
            s: s,
            color: "#ffffff"
        }, void 0, false, {
            fileName: "[project]/apps/intranet-iq/src/components/brand/IQLogo.tsx",
            lineNumber: 172,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/apps/intranet-iq/src/components/brand/IQLogo.tsx",
        lineNumber: 165,
        columnNumber: 5
    }, this);
}
_c2 = IQMark;
var _c, _c1, _c2;
__turbopack_context__.k.register(_c, "IQLogo");
__turbopack_context__.k.register(_c1, "LogoText");
__turbopack_context__.k.register(_c2, "IQMark");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/intranet-iq/src/components/layout/Sidebar.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Sidebar",
    ()=>Sidebar
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$house$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Home$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/house.js [app-client] (ecmascript) <export default as Home>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$message$2d$square$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MessageSquare$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/message-square.js [app-client] (ecmascript) <export default as MessageSquare>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$bot$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Bot$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/bot.js [app-client] (ecmascript) <export default as Bot>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/users.js [app-client] (ecmascript) <export default as Users>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$folder$2d$open$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FolderOpen$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/folder-open.js [app-client] (ecmascript) <export default as FolderOpen>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/search.js [app-client] (ecmascript) <export default as Search>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$settings$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Settings$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/settings.js [app-client] (ecmascript) <export default as Settings>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$intranet$2d$iq$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/intranet-iq/src/lib/utils.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$intranet$2d$iq$2f$src$2f$components$2f$brand$2f$IQLogo$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/intranet-iq/src/components/brand/IQLogo.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
const navigation = [
    {
        name: "Home",
        href: "/dashboard",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$house$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Home$3e$__["Home"]
    },
    {
        name: "Chat",
        href: "/chat",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$message$2d$square$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MessageSquare$3e$__["MessageSquare"]
    },
    {
        name: "Agents",
        href: "/agents",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$bot$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Bot$3e$__["Bot"]
    },
    {
        name: "People",
        href: "/people",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__["Users"]
    },
    {
        name: "Content",
        href: "/content",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$folder$2d$open$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FolderOpen$3e$__["FolderOpen"]
    }
];
function Sidebar() {
    _s();
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"])();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("aside", {
        className: "fixed left-0 top-0 z-40 h-screen w-16 bg-[#0f0f14] border-r border-white/10 flex flex-col items-center py-4",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                href: "/dashboard",
                className: "mb-6 hover:scale-105 transition-transform",
                title: "Intranet IQ",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$intranet$2d$iq$2f$src$2f$components$2f$brand$2f$IQLogo$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IQLogo"], {
                    size: "md"
                }, void 0, false, {
                    fileName: "[project]/apps/intranet-iq/src/components/layout/Sidebar.tsx",
                    lineNumber: 36,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/apps/intranet-iq/src/components/layout/Sidebar.tsx",
                lineNumber: 31,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                className: "flex-1 flex flex-col items-center gap-2",
                children: navigation.map((item)=>{
                    const isActive = pathname === item.href || pathname.startsWith(item.href + "/");
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        href: item.href,
                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$intranet$2d$iq$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("w-10 h-10 rounded-lg flex items-center justify-center transition-all group relative", isActive ? "bg-blue-500/20 text-blue-400" : "text-white/60 hover:text-white hover:bg-white/5"),
                        title: item.name,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(item.icon, {
                                className: "w-5 h-5"
                            }, void 0, false, {
                                fileName: "[project]/apps/intranet-iq/src/components/layout/Sidebar.tsx",
                                lineNumber: 55,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "absolute left-14 px-2 py-1 bg-[#1f1f23] text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none",
                                children: item.name
                            }, void 0, false, {
                                fileName: "[project]/apps/intranet-iq/src/components/layout/Sidebar.tsx",
                                lineNumber: 57,
                                columnNumber: 15
                            }, this),
                            isActive && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "absolute left-0 w-0.5 h-6 bg-blue-500 rounded-r"
                            }, void 0, false, {
                                fileName: "[project]/apps/intranet-iq/src/components/layout/Sidebar.tsx",
                                lineNumber: 62,
                                columnNumber: 17
                            }, this)
                        ]
                    }, item.name, true, {
                        fileName: "[project]/apps/intranet-iq/src/components/layout/Sidebar.tsx",
                        lineNumber: 44,
                        columnNumber: 13
                    }, this);
                })
            }, void 0, false, {
                fileName: "[project]/apps/intranet-iq/src/components/layout/Sidebar.tsx",
                lineNumber: 40,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-col items-center gap-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        href: "/search",
                        className: "w-10 h-10 rounded-lg flex items-center justify-center text-white/60 hover:text-white hover:bg-white/5 transition-all",
                        title: "Search",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__["Search"], {
                            className: "w-5 h-5"
                        }, void 0, false, {
                            fileName: "[project]/apps/intranet-iq/src/components/layout/Sidebar.tsx",
                            lineNumber: 76,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/apps/intranet-iq/src/components/layout/Sidebar.tsx",
                        lineNumber: 71,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        href: "/settings",
                        className: "w-10 h-10 rounded-lg flex items-center justify-center text-white/60 hover:text-white hover:bg-white/5 transition-all",
                        title: "Settings",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$settings$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Settings$3e$__["Settings"], {
                            className: "w-5 h-5"
                        }, void 0, false, {
                            fileName: "[project]/apps/intranet-iq/src/components/layout/Sidebar.tsx",
                            lineNumber: 83,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/apps/intranet-iq/src/components/layout/Sidebar.tsx",
                        lineNumber: 78,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/apps/intranet-iq/src/components/layout/Sidebar.tsx",
                lineNumber: 70,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/apps/intranet-iq/src/components/layout/Sidebar.tsx",
        lineNumber: 29,
        columnNumber: 5
    }, this);
}
_s(Sidebar, "xbyQPtUVMO7MNj7WjJlpdWqRcTo=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"]
    ];
});
_c = Sidebar;
var _c;
__turbopack_context__.k.register(_c, "Sidebar");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/intranet-iq/src/lib/supabase.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "addBookmark",
    ()=>addBookmark,
    "addChatMessage",
    ()=>addChatMessage,
    "createChatThread",
    ()=>createChatThread,
    "findSimilarArticles",
    ()=>findSimilarArticles,
    "getArticleBySlug",
    ()=>getArticleBySlug,
    "getArticles",
    ()=>getArticles,
    "getChatContext",
    ()=>getChatContext,
    "getChatMessages",
    ()=>getChatMessages,
    "getChatThreads",
    ()=>getChatThreads,
    "getDepartmentBySlug",
    ()=>getDepartmentBySlug,
    "getDepartments",
    ()=>getDepartments,
    "getEmbeddingStats",
    ()=>getEmbeddingStats,
    "getEmployees",
    ()=>getEmployees,
    "getKBCategories",
    ()=>getKBCategories,
    "getNewsPosts",
    ()=>getNewsPosts,
    "getOrgChart",
    ()=>getOrgChart,
    "getUpcomingEvents",
    ()=>getUpcomingEvents,
    "getUserBookmarks",
    ()=>getUserBookmarks,
    "getUserSettings",
    ()=>getUserSettings,
    "getWorkflowWithSteps",
    ()=>getWorkflowWithSteps,
    "getWorkflows",
    ()=>getWorkflows,
    "logActivity",
    ()=>logActivity,
    "removeBookmark",
    ()=>removeBookmark,
    "searchArticles",
    ()=>searchArticles,
    "searchArticlesSemantic",
    ()=>searchArticlesSemantic,
    "searchKnowledge",
    ()=>searchKnowledge,
    "searchKnowledgeHybrid",
    ()=>searchKnowledgeHybrid,
    "searchKnowledgeSemantic",
    ()=>searchKnowledgeSemantic,
    "supabase",
    ()=>supabase,
    "updateUserSettings",
    ()=>updateUserSettings
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
/**
 * dIQ Supabase Client
 * Configured for the Intranet IQ project
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$supabase$2f$supabase$2d$js$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@supabase/supabase-js/dist/index.mjs [app-client] (ecmascript) <locals>");
;
// Environment variables
const supabaseUrl = ("TURBOPACK compile-time value", "https://fhtempgkltrazrgbedrh.supabase.co");
const supabaseAnonKey = ("TURBOPACK compile-time value", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZodGVtcGdrbHRyYXpyZ2JlZHJoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Njg3ODgzOTEsImV4cCI6MjA4NDM2NDM5MX0.6nESGQI48SWOfwBen2IRDStMMkOEKBKdAE6xCK7McQs");
const supabase = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$supabase$2f$supabase$2d$js$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createClient"])(supabaseUrl, supabaseAnonKey);
async function getArticles(options) {
    let query = supabase.schema('diq').from('articles').select(`
      *,
      author:author_id(id, full_name, avatar_url),
      category:category_id(id, name, slug, color)
    `).order('created_at', {
        ascending: false
    });
    if (options?.categoryId) {
        query = query.eq('category_id', options.categoryId);
    }
    if (options?.status) {
        query = query.eq('status', options.status);
    }
    if (options?.limit) {
        query = query.limit(options.limit);
    }
    if (options?.offset) {
        query = query.range(options.offset, options.offset + (options.limit || 10) - 1);
    }
    return query;
}
async function getArticleBySlug(slug) {
    return supabase.schema('diq').from('articles').select(`
      *,
      author:author_id(id, full_name, avatar_url),
      category:category_id(id, name, slug, color)
    `).eq('slug', slug).single();
}
async function getKBCategories(departmentId) {
    let query = supabase.schema('diq').from('kb_categories').select('*').order('sort_order', {
        ascending: true
    });
    if (departmentId) {
        query = query.eq('department_id', departmentId);
    }
    return query;
}
async function getEmployees(options) {
    let query = supabase.schema('diq').from('employees').select(`
      *,
      user:user_id(id, full_name, email, avatar_url),
      department:department_id(id, name, slug)
    `).order('user_id');
    if (options?.departmentId) {
        query = query.eq('department_id', options.departmentId);
    }
    if (options?.limit) {
        query = query.limit(options.limit);
    }
    return query;
}
async function getOrgChart(departmentId) {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    return supabase.rpc('diq.get_org_chart', {
        dept_id: departmentId || null
    });
}
async function getChatThreads(userId) {
    return supabase.schema('diq').from('chat_threads').select('*').eq('user_id', userId).neq('status', 'deleted').order('updated_at', {
        ascending: false
    });
}
async function getChatMessages(threadId) {
    return supabase.schema('diq').from('chat_messages').select('*').eq('thread_id', threadId).order('created_at', {
        ascending: true
    });
}
async function createChatThread(userId, title, llmModel = 'gpt-4') {
    return supabase.schema('diq').from('chat_threads').insert({
        user_id: userId,
        title,
        llm_model: llmModel,
        status: 'active',
        metadata: {}
    }).select().single();
}
async function addChatMessage(threadId, role, content, options) {
    return supabase.schema('diq').from('chat_messages').insert({
        thread_id: threadId,
        role,
        content,
        sources: options?.sources || [],
        confidence: options?.confidence || null,
        tokens_used: options?.tokensUsed || null,
        llm_model: options?.llmModel || null,
        metadata: {}
    }).select().single();
}
async function getWorkflows(options) {
    let query = supabase.schema('diq').from('workflows').select(`
      *,
      creator:created_by(id, full_name, avatar_url)
    `).order('updated_at', {
        ascending: false
    });
    if (options?.createdBy) {
        query = query.eq('created_by', options.createdBy);
    }
    if (options?.status) {
        query = query.eq('status', options.status);
    }
    if (options?.isTemplate !== undefined) {
        query = query.eq('is_template', options.isTemplate);
    }
    return query;
}
async function getWorkflowWithSteps(workflowId) {
    const [workflow, steps] = await Promise.all([
        supabase.schema('diq').from('workflows').select('*').eq('id', workflowId).single(),
        supabase.schema('diq').from('workflow_steps').select('*').eq('workflow_id', workflowId).order('step_number', {
            ascending: true
        })
    ]);
    return {
        workflow,
        steps
    };
}
async function getNewsPosts(options) {
    let query = supabase.schema('diq').from('news_posts').select(`
      *,
      author:author_id(id, full_name, avatar_url),
      department:department_id(id, name)
    `).order('pinned', {
        ascending: false
    }).order('published_at', {
        ascending: false
    });
    if (options?.departmentId) {
        query = query.eq('department_id', options.departmentId);
    }
    if (options?.type) {
        query = query.eq('type', options.type);
    }
    if (options?.limit) {
        query = query.limit(options.limit);
    }
    if (options?.offset) {
        query = query.range(options.offset, options.offset + (options.limit || 10) - 1);
    }
    return query;
}
async function getUpcomingEvents(options) {
    let query = supabase.schema('diq').from('events').select(`
      *,
      organizer:organizer_id(id, full_name, avatar_url),
      department:department_id(id, name)
    `).gte('start_time', new Date().toISOString()).order('start_time', {
        ascending: true
    });
    if (options?.departmentId) {
        query = query.eq('department_id', options.departmentId);
    }
    if (options?.limit) {
        query = query.limit(options.limit);
    }
    return query;
}
async function getUserBookmarks(userId, itemType) {
    let query = supabase.schema('diq').from('bookmarks').select('*').eq('user_id', userId).order('created_at', {
        ascending: false
    });
    if (itemType) {
        query = query.eq('item_type', itemType);
    }
    return query;
}
async function addBookmark(userId, itemType, itemId, options) {
    return supabase.schema('diq').from('bookmarks').insert({
        user_id: userId,
        item_type: itemType,
        item_id: itemId,
        notes: options?.notes || null,
        folder: options?.folder || null
    }).select().single();
}
async function removeBookmark(userId, itemType, itemId) {
    return supabase.schema('diq').from('bookmarks').delete().eq('user_id', userId).eq('item_type', itemType).eq('item_id', itemId);
}
async function getUserSettings(userId) {
    const { data, error } = await supabase.schema('diq').from('user_settings').select('*').eq('user_id', userId).single();
    // If no settings exist, return defaults
    if (error && error.code === 'PGRST116') {
        return {
            data: {
                notification_prefs: {
                    email_digest: true,
                    news_mentions: true,
                    article_updates: true,
                    event_reminders: true
                },
                appearance: {
                    theme: 'dark',
                    sidebar_collapsed: false,
                    density: 'comfortable'
                },
                ai_prefs: {
                    default_llm: 'gpt-4',
                    response_style: 'balanced',
                    show_sources: true
                },
                privacy: {
                    show_profile: true,
                    show_activity: true,
                    searchable: true
                }
            },
            error: null
        };
    }
    return {
        data,
        error
    };
}
async function updateUserSettings(userId, settings) {
    return supabase.schema('diq').from('user_settings').upsert({
        user_id: userId,
        ...settings
    }).select().single();
}
async function searchKnowledge(query, options) {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    return supabase.rpc('search_knowledge', {
        search_query: query,
        project_codes: options?.projectCodes || null,
        item_types: options?.itemTypes || null,
        max_results: options?.maxResults || 20
    });
}
async function searchArticles(query, options) {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    return supabase.rpc('diq.search_articles', {
        search_query: query,
        category_slug: options?.categorySlug || null,
        max_results: options?.maxResults || 20
    });
}
async function logActivity(userId, action, options) {
    // Get dIQ project ID
    const { data: projectData } = await supabase.from('projects').select('id').eq('code', 'dIQ').single();
    const projectId = projectData?.id;
    if (!projectId) return;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    return supabase.from('activity_log').insert({
        user_id: userId,
        project_id: projectId,
        action,
        entity_type: options?.entityType || null,
        entity_id: options?.entityId || null,
        metadata: options?.metadata || {}
    });
}
async function getDepartments() {
    return supabase.schema('diq').from('departments').select(`
      *,
      manager:manager_id(id, full_name, avatar_url)
    `).order('name');
}
async function getDepartmentBySlug(slug) {
    return supabase.schema('diq').from('departments').select(`
      *,
      manager:manager_id(id, full_name, avatar_url)
    `).eq('slug', slug).single();
}
async function searchKnowledgeSemantic(queryEmbedding, options) {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    return supabase.rpc('search_knowledge_semantic', {
        query_embedding: queryEmbedding,
        match_threshold: options?.matchThreshold || 0.7,
        match_count: options?.matchCount || 10,
        filter_project_codes: options?.projectCodes || null,
        filter_item_types: options?.itemTypes || null
    });
}
async function searchKnowledgeHybrid(searchQuery, queryEmbedding, options) {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    return supabase.rpc('search_knowledge_hybrid', {
        search_query: searchQuery,
        query_embedding: queryEmbedding || null,
        match_count: options?.matchCount || 20,
        filter_project_codes: options?.projectCodes || null,
        filter_item_types: options?.itemTypes || null,
        semantic_weight: options?.semanticWeight || 0.5
    });
}
async function searchArticlesSemantic(queryEmbedding, options) {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    return supabase.rpc('diq.search_articles_semantic', {
        query_embedding: queryEmbedding,
        match_threshold: options?.matchThreshold || 0.7,
        match_count: options?.matchCount || 10,
        filter_category_slug: options?.categorySlug || null,
        filter_status: options?.status || 'published'
    });
}
async function findSimilarArticles(articleId, matchCount = 5) {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    return supabase.rpc('diq.find_similar_articles', {
        article_id: articleId,
        match_count: matchCount
    });
}
async function getChatContext(queryEmbedding, options) {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    return supabase.rpc('diq.get_chat_context', {
        query_embedding: queryEmbedding,
        max_tokens: options?.maxTokens || 4000,
        match_threshold: options?.matchThreshold || 0.7
    });
}
async function getEmbeddingStats() {
    return supabase.from('embedding_stats').select('*');
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/intranet-iq/src/lib/hooks/useSupabase.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useActivityLog",
    ()=>useActivityLog,
    "useArticles",
    ()=>useArticles,
    "useChatMessages",
    ()=>useChatMessages,
    "useChatThreads",
    ()=>useChatThreads,
    "useCurrentUser",
    ()=>useCurrentUser,
    "useDepartments",
    ()=>useDepartments,
    "useEmployees",
    ()=>useEmployees,
    "useKBCategories",
    ()=>useKBCategories,
    "useNewsPosts",
    ()=>useNewsPosts,
    "useRecentActivity",
    ()=>useRecentActivity,
    "useSearch",
    ()=>useSearch,
    "useUpcomingEvents",
    ()=>useUpcomingEvents,
    "useUserSettings",
    ()=>useUserSettings,
    "useWorkflows",
    ()=>useWorkflows
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$runtime$2f$react$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@clerk/shared/dist/runtime/react/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$intranet$2d$iq$2f$src$2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/intranet-iq/src/lib/supabase.ts [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature(), _s2 = __turbopack_context__.k.signature(), _s3 = __turbopack_context__.k.signature(), _s4 = __turbopack_context__.k.signature(), _s5 = __turbopack_context__.k.signature(), _s6 = __turbopack_context__.k.signature(), _s7 = __turbopack_context__.k.signature(), _s8 = __turbopack_context__.k.signature(), _s9 = __turbopack_context__.k.signature(), _s10 = __turbopack_context__.k.signature(), _s11 = __turbopack_context__.k.signature(), _s12 = __turbopack_context__.k.signature(), _s13 = __turbopack_context__.k.signature();
/**
 * dIQ Supabase Hooks
 * React hooks for data fetching with Supabase
 */ "use client";
;
;
;
function useCurrentUser() {
    _s();
    const { user: clerkUser, isLoaded } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$runtime$2f$react$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useUser"])();
    const [dbUser, setDbUser] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useCurrentUser.useEffect": ()=>{
            async function fetchUser() {
                if (!isLoaded) return;
                if (!clerkUser) {
                    setLoading(false);
                    return;
                }
                const { data, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$intranet$2d$iq$2f$src$2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from("users").select("*").eq("clerk_id", clerkUser.id).single();
                if (!error && data) {
                    setDbUser(data);
                }
                setLoading(false);
            }
            fetchUser();
        }
    }["useCurrentUser.useEffect"], [
        clerkUser,
        isLoaded
    ]);
    return {
        user: dbUser,
        clerkUser,
        loading,
        isLoaded
    };
}
_s(useCurrentUser, "kQ7NvNopcbDKWR9MUWyljl36lIM=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$runtime$2f$react$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useUser"]
    ];
});
function useDepartments() {
    _s1();
    const [departments, setDepartments] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useDepartments.useEffect": ()=>{
            async function fetch() {
                const { data, error } = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$intranet$2d$iq$2f$src$2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getDepartments"])();
                if (error) {
                    setError(error.message);
                } else {
                    setDepartments(data || []);
                }
                setLoading(false);
            }
            fetch();
        }
    }["useDepartments.useEffect"], []);
    return {
        departments,
        loading,
        error
    };
}
_s1(useDepartments, "EV2RXiEqWo/yoLBCocMtMdZKvwQ=");
function useEmployees(options) {
    _s2();
    const [employees, setEmployees] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useEmployees.useEffect": ()=>{
            async function fetch() {
                setLoading(true);
                const { data, error } = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$intranet$2d$iq$2f$src$2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getEmployees"])(options);
                if (error) {
                    setError(error.message);
                } else {
                    setEmployees(data || []);
                }
                setLoading(false);
            }
            fetch();
        }
    }["useEmployees.useEffect"], [
        options?.departmentId,
        options?.search,
        options?.limit
    ]);
    return {
        employees,
        loading,
        error
    };
}
_s2(useEmployees, "nDNsbwi6cauKbYJjxXXg9/c4fAc=");
function useArticles(options) {
    _s3();
    const [articles, setArticles] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useArticles.useEffect": ()=>{
            async function fetch() {
                setLoading(true);
                const { data, error } = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$intranet$2d$iq$2f$src$2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getArticles"])(options);
                if (error) {
                    setError(error.message);
                } else {
                    setArticles(data || []);
                }
                setLoading(false);
            }
            fetch();
        }
    }["useArticles.useEffect"], [
        options?.categoryId,
        options?.status,
        options?.limit
    ]);
    return {
        articles,
        loading,
        error,
        setArticles
    };
}
_s3(useArticles, "trxyYN9tEqpANqhYg3rghnSmKa8=");
function useKBCategories(departmentId) {
    _s4();
    const [categories, setCategories] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useKBCategories.useEffect": ()=>{
            async function fetch() {
                const { data, error } = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$intranet$2d$iq$2f$src$2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getKBCategories"])(departmentId);
                if (error) {
                    setError(error.message);
                } else {
                    setCategories(data || []);
                }
                setLoading(false);
            }
            fetch();
        }
    }["useKBCategories.useEffect"], [
        departmentId
    ]);
    return {
        categories,
        loading,
        error
    };
}
_s4(useKBCategories, "PEFWK5NudK8G7IEShrERrFoV+TY=");
function useChatThreads() {
    _s5();
    const { user } = useCurrentUser();
    const [threads, setThreads] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useChatThreads.useEffect": ()=>{
            async function fetch() {
                if (!user) {
                    setLoading(false);
                    return;
                }
                const { data, error } = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$intranet$2d$iq$2f$src$2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getChatThreads"])(user.id);
                if (error) {
                    setError(error.message);
                } else {
                    setThreads(data || []);
                }
                setLoading(false);
            }
            fetch();
        }
    }["useChatThreads.useEffect"], [
        user
    ]);
    const createThread = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useChatThreads.useCallback[createThread]": async (title, llmModel = "claude-3")=>{
            if (!user) return null;
            const { data, error } = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$intranet$2d$iq$2f$src$2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createChatThread"])(user.id, title, llmModel);
            if (error) {
                setError(error.message);
                return null;
            }
            if (data) {
                setThreads({
                    "useChatThreads.useCallback[createThread]": (prev)=>[
                            data,
                            ...prev
                        ]
                }["useChatThreads.useCallback[createThread]"]);
            }
            return data;
        }
    }["useChatThreads.useCallback[createThread]"], [
        user
    ]);
    return {
        threads,
        loading,
        error,
        createThread,
        setThreads
    };
}
_s5(useChatThreads, "5TTOEoI+7M/IDSPiEJ/MAwVqq30=", false, function() {
    return [
        useCurrentUser
    ];
});
function useChatMessages(threadId) {
    _s6();
    const [messages, setMessages] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useChatMessages.useEffect": ()=>{
            async function fetch() {
                if (!threadId) {
                    setMessages([]);
                    setLoading(false);
                    return;
                }
                setLoading(true);
                const { data, error } = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$intranet$2d$iq$2f$src$2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getChatMessages"])(threadId);
                if (error) {
                    setError(error.message);
                } else {
                    setMessages(data || []);
                }
                setLoading(false);
            }
            fetch();
        }
    }["useChatMessages.useEffect"], [
        threadId
    ]);
    const addMessage = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useChatMessages.useCallback[addMessage]": async (role, content, options)=>{
            if (!threadId) return null;
            const { data, error } = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$intranet$2d$iq$2f$src$2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["addChatMessage"])(threadId, role, content, options);
            if (error) {
                setError(error.message);
                return null;
            }
            if (data) {
                setMessages({
                    "useChatMessages.useCallback[addMessage]": (prev)=>[
                            ...prev,
                            data
                        ]
                }["useChatMessages.useCallback[addMessage]"]);
            }
            return data;
        }
    }["useChatMessages.useCallback[addMessage]"], [
        threadId
    ]);
    return {
        messages,
        loading,
        error,
        addMessage,
        setMessages
    };
}
_s6(useChatMessages, "YKQoVSgk3NMFdbhN6ALrIKfhP1k=");
function useWorkflows(options) {
    _s7();
    const [workflows, setWorkflows] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useWorkflows.useEffect": ()=>{
            async function fetch() {
                setLoading(true);
                const { data, error } = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$intranet$2d$iq$2f$src$2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getWorkflows"])(options);
                if (error) {
                    setError(error.message);
                } else {
                    setWorkflows(data || []);
                }
                setLoading(false);
            }
            fetch();
        }
    }["useWorkflows.useEffect"], [
        options?.status,
        options?.isTemplate
    ]);
    return {
        workflows,
        loading,
        error,
        setWorkflows
    };
}
_s7(useWorkflows, "AIzJItcIx8/CAXTR6e/KiSA/jT4=");
function useNewsPosts(options) {
    _s8();
    const [posts, setPosts] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useNewsPosts.useEffect": ()=>{
            async function fetch() {
                setLoading(true);
                const { data, error } = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$intranet$2d$iq$2f$src$2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getNewsPosts"])(options);
                if (error) {
                    setError(error.message);
                } else {
                    setPosts(data || []);
                }
                setLoading(false);
            }
            fetch();
        }
    }["useNewsPosts.useEffect"], [
        options?.departmentId,
        options?.type,
        options?.limit
    ]);
    return {
        posts,
        loading,
        error,
        setPosts
    };
}
_s8(useNewsPosts, "FFSFm1bVdM1s2gLh8ffGbsIvlRY=");
function useUpcomingEvents(options) {
    _s9();
    const [events, setEvents] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useUpcomingEvents.useEffect": ()=>{
            async function fetch() {
                setLoading(true);
                const { data, error } = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$intranet$2d$iq$2f$src$2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getUpcomingEvents"])(options);
                if (error) {
                    setError(error.message);
                } else {
                    setEvents(data || []);
                }
                setLoading(false);
            }
            fetch();
        }
    }["useUpcomingEvents.useEffect"], [
        options?.departmentId,
        options?.limit
    ]);
    return {
        events,
        loading,
        error,
        setEvents
    };
}
_s9(useUpcomingEvents, "TlsuwTtpJOZ2tMfhB3uipTGA4lI=");
function useUserSettings() {
    _s10();
    const { user } = useCurrentUser();
    const [settings, setSettings] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useUserSettings.useEffect": ()=>{
            async function fetch() {
                if (!user) {
                    setLoading(false);
                    return;
                }
                const { data, error } = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$intranet$2d$iq$2f$src$2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getUserSettings"])(user.id);
                if (error) {
                    setError(error.message);
                } else {
                    setSettings(data);
                }
                setLoading(false);
            }
            fetch();
        }
    }["useUserSettings.useEffect"], [
        user
    ]);
    const updateSettings = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useUserSettings.useCallback[updateSettings]": async (newSettings)=>{
            if (!user) return null;
            const { data, error } = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$intranet$2d$iq$2f$src$2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["updateUserSettings"])(user.id, newSettings);
            if (error) {
                setError(error.message);
                return null;
            }
            if (data) {
                setSettings(data);
            }
            return data;
        }
    }["useUserSettings.useCallback[updateSettings]"], [
        user
    ]);
    return {
        settings,
        loading,
        error,
        updateSettings
    };
}
_s10(useUserSettings, "vfDU0g44+mo+WTPPjJMD0NcmCh4=", false, function() {
    return [
        useCurrentUser
    ];
});
function useSearch() {
    _s11();
    const [results, setResults] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const search = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useSearch.useCallback[search]": async (query, options)=>{
            if (!query.trim()) {
                setResults([]);
                return;
            }
            setLoading(true);
            setError(null);
            const { data, error } = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$intranet$2d$iq$2f$src$2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["searchKnowledge"])(query, options);
            if (error) {
                setError(error.message);
                setResults([]);
            } else {
                setResults(data || []);
            }
            setLoading(false);
        }
    }["useSearch.useCallback[search]"], []);
    return {
        results,
        loading,
        error,
        search
    };
}
_s11(useSearch, "TTegatqcEe6K9OZY/sQUSyM/U0M=");
function useActivityLog() {
    _s12();
    const { user } = useCurrentUser();
    const log = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useActivityLog.useCallback[log]": async (action, options)=>{
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$intranet$2d$iq$2f$src$2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["logActivity"])(user?.id || null, action, options);
        }
    }["useActivityLog.useCallback[log]"], [
        user
    ]);
    return {
        log
    };
}
_s12(useActivityLog, "02kWjI4Zry49C9ebpNxYMBPzjAE=", false, function() {
    return [
        useCurrentUser
    ];
});
function useRecentActivity(limit = 10) {
    _s13();
    const { user } = useCurrentUser();
    const [activities, setActivities] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useRecentActivity.useEffect": ()=>{
            async function fetch() {
                if (!user) {
                    setLoading(false);
                    return;
                }
                // Get dIQ project ID first
                const { data: projectData } = await __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$intranet$2d$iq$2f$src$2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from("projects").select("id").eq("code", "dIQ").single();
                const projectId = projectData?.id;
                if (!projectId) {
                    setLoading(false);
                    return;
                }
                const { data } = await __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$intranet$2d$iq$2f$src$2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from("activity_log").select("*").eq("project_id", projectId).order("created_at", {
                    ascending: false
                }).limit(limit);
                setActivities(data || []);
                setLoading(false);
            }
            fetch();
        }
    }["useRecentActivity.useEffect"], [
        user,
        limit
    ]);
    return {
        activities,
        loading
    };
}
_s13(useRecentActivity, "Cv2tRmpKVmj1auGTt8fRUwJD/FU=", false, function() {
    return [
        useCurrentUser
    ];
});
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/intranet-iq/src/app/dashboard/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Dashboard
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$runtime$2f$react$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@clerk/shared/dist/runtime/react/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$intranet$2d$iq$2f$src$2f$components$2f$layout$2f$Sidebar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/intranet-iq/src/components/layout/Sidebar.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/search.js [app-client] (ecmascript) <export default as Search>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/sparkles.js [app-client] (ecmascript) <export default as Sparkles>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/clock.js [app-client] (ecmascript) <export default as Clock>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trending$2d$up$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TrendingUp$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/trending-up.js [app-client] (ecmascript) <export default as TrendingUp>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/file-text.js [app-client] (ecmascript) <export default as FileText>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/users.js [app-client] (ecmascript) <export default as Users>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/calendar.js [app-client] (ecmascript) <export default as Calendar>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$message$2d$square$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MessageSquare$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/message-square.js [app-client] (ecmascript) <export default as MessageSquare>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$newspaper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Newspaper$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/newspaper.js [app-client] (ecmascript) <export default as Newspaper>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$bell$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Bell$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/bell.js [app-client] (ecmascript) <export default as Bell>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$intranet$2d$iq$2f$src$2f$lib$2f$hooks$2f$useSupabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/intranet-iq/src/lib/hooks/useSupabase.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
function Dashboard() {
    _s();
    const { user } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$runtime$2f$react$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useUser"])();
    const firstName = user?.firstName || "there";
    // Fetch real data from Supabase
    const { posts: newsPosts, loading: postsLoading } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$intranet$2d$iq$2f$src$2f$lib$2f$hooks$2f$useSupabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useNewsPosts"])({
        limit: 5
    });
    const { events, loading: eventsLoading } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$intranet$2d$iq$2f$src$2f$lib$2f$hooks$2f$useSupabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useUpcomingEvents"])({
        limit: 3
    });
    const { activities, loading: activitiesLoading } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$intranet$2d$iq$2f$src$2f$lib$2f$hooks$2f$useSupabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRecentActivity"])(5);
    // Trending topics derived from recent posts
    const trendingTopics = [
        "AI Strategy",
        "Q4 Goals",
        "New Hires",
        "Product Launch",
        "Team Building"
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen bg-[#0a0a0f]",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$intranet$2d$iq$2f$src$2f$components$2f$layout$2f$Sidebar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Sidebar"], {}, void 0, false, {
                fileName: "[project]/apps/intranet-iq/src/app/dashboard/page.tsx",
                lineNumber: 25,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                className: "ml-16 p-8",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "max-w-5xl mx-auto",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center justify-between mb-6",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-3",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "px-2.5 py-1.5 rounded-lg bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/30",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                height: "18",
                                                viewBox: "0 0 32 18",
                                                style: {
                                                    overflow: "visible"
                                                },
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                                                        x: "0",
                                                        y: "14",
                                                        fill: "white",
                                                        fontSize: "18",
                                                        fontWeight: "700",
                                                        fontFamily: "ui-monospace, SFMono-Regular, Menlo, monospace",
                                                        children: "d"
                                                    }, void 0, false, {
                                                        fileName: "[project]/apps/intranet-iq/src/app/dashboard/page.tsx",
                                                        lineNumber: 36,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                                                        x: "11",
                                                        y: "14",
                                                        fill: "white",
                                                        fillOpacity: "0.85",
                                                        fontSize: "10",
                                                        fontWeight: "400",
                                                        fontFamily: "ui-monospace, SFMono-Regular, Menlo, monospace",
                                                        children: "I"
                                                    }, void 0, false, {
                                                        fileName: "[project]/apps/intranet-iq/src/app/dashboard/page.tsx",
                                                        lineNumber: 37,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                                                        x: "16.5",
                                                        y: "14",
                                                        fill: "white",
                                                        fillOpacity: "0.85",
                                                        fontSize: "10",
                                                        fontWeight: "400",
                                                        fontFamily: "ui-monospace, SFMono-Regular, Menlo, monospace",
                                                        children: "Q"
                                                    }, void 0, false, {
                                                        fileName: "[project]/apps/intranet-iq/src/app/dashboard/page.tsx",
                                                        lineNumber: 38,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                                        cx: "27",
                                                        cy: "13",
                                                        r: "2.5",
                                                        fill: "#60a5fa",
                                                        style: {
                                                            filter: "drop-shadow(0 0 3px rgba(96, 165, 250, 0.6))"
                                                        }
                                                    }, void 0, false, {
                                                        fileName: "[project]/apps/intranet-iq/src/app/dashboard/page.tsx",
                                                        lineNumber: 39,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/apps/intranet-iq/src/app/dashboard/page.tsx",
                                                lineNumber: 35,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/apps/intranet-iq/src/app/dashboard/page.tsx",
                                            lineNumber: 34,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-white/40 text-sm",
                                            children: "Intranet IQ"
                                        }, void 0, false, {
                                            fileName: "[project]/apps/intranet-iq/src/app/dashboard/page.tsx",
                                            lineNumber: 42,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/apps/intranet-iq/src/app/dashboard/page.tsx",
                                    lineNumber: 33,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-xs text-white/30 font-mono",
                                    children: "localhost:3001"
                                }, void 0, false, {
                                    fileName: "[project]/apps/intranet-iq/src/app/dashboard/page.tsx",
                                    lineNumber: 44,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/apps/intranet-iq/src/app/dashboard/page.tsx",
                            lineNumber: 32,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mb-8",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                    className: "text-2xl font-medium text-white mb-1",
                                    children: [
                                        "Good ",
                                        getTimeOfDay(),
                                        ", ",
                                        firstName
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/apps/intranet-iq/src/app/dashboard/page.tsx",
                                    lineNumber: 49,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-2 text-sm text-white/50",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: "For you"
                                        }, void 0, false, {
                                            fileName: "[project]/apps/intranet-iq/src/app/dashboard/page.tsx",
                                            lineNumber: 53,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: "|"
                                        }, void 0, false, {
                                            fileName: "[project]/apps/intranet-iq/src/app/dashboard/page.tsx",
                                            lineNumber: 54,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: "Company"
                                        }, void 0, false, {
                                            fileName: "[project]/apps/intranet-iq/src/app/dashboard/page.tsx",
                                            lineNumber: 55,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/apps/intranet-iq/src/app/dashboard/page.tsx",
                                    lineNumber: 52,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/apps/intranet-iq/src/app/dashboard/page.tsx",
                            lineNumber: 48,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            href: "/search",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "relative mb-8",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "bg-[#1a1a1f] border border-white/10 rounded-2xl p-4 hover:border-blue-500/50 transition-colors cursor-pointer",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-3",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__["Search"], {
                                                className: "w-5 h-5 text-white/40"
                                            }, void 0, false, {
                                                fileName: "[project]/apps/intranet-iq/src/app/dashboard/page.tsx",
                                                lineNumber: 64,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "flex-1 text-white/40 text-lg",
                                                children: "Ask anything..."
                                            }, void 0, false, {
                                                fileName: "[project]/apps/intranet-iq/src/app/dashboard/page.tsx",
                                                lineNumber: 65,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center gap-2 text-white/40 text-sm",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "flex items-center gap-1 px-2 py-1 rounded bg-white/5",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__["Sparkles"], {
                                                            className: "w-4 h-4"
                                                        }, void 0, false, {
                                                            fileName: "[project]/apps/intranet-iq/src/app/dashboard/page.tsx",
                                                            lineNumber: 68,
                                                            columnNumber: 23
                                                        }, this),
                                                        "Fast"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/apps/intranet-iq/src/app/dashboard/page.tsx",
                                                    lineNumber: 67,
                                                    columnNumber: 21
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/apps/intranet-iq/src/app/dashboard/page.tsx",
                                                lineNumber: 66,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/apps/intranet-iq/src/app/dashboard/page.tsx",
                                        lineNumber: 63,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/apps/intranet-iq/src/app/dashboard/page.tsx",
                                    lineNumber: 62,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/apps/intranet-iq/src/app/dashboard/page.tsx",
                                lineNumber: 61,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/apps/intranet-iq/src/app/dashboard/page.tsx",
                            lineNumber: 60,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid grid-cols-3 gap-4 mb-8",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    href: "/content",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(QuickActionCard, {
                                        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__["FileText"], {
                                            className: "w-5 h-5"
                                        }, void 0, false, {
                                            fileName: "[project]/apps/intranet-iq/src/app/dashboard/page.tsx",
                                            lineNumber: 81,
                                            columnNumber: 23
                                        }, void 0),
                                        title: "Recent Documents",
                                        description: "View your recently accessed files",
                                        color: "blue"
                                    }, void 0, false, {
                                        fileName: "[project]/apps/intranet-iq/src/app/dashboard/page.tsx",
                                        lineNumber: 80,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/apps/intranet-iq/src/app/dashboard/page.tsx",
                                    lineNumber: 79,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    href: "/people",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(QuickActionCard, {
                                        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__["Users"], {
                                            className: "w-5 h-5"
                                        }, void 0, false, {
                                            fileName: "[project]/apps/intranet-iq/src/app/dashboard/page.tsx",
                                            lineNumber: 89,
                                            columnNumber: 23
                                        }, void 0),
                                        title: "Team Updates",
                                        description: "See what your team is working on",
                                        color: "purple"
                                    }, void 0, false, {
                                        fileName: "[project]/apps/intranet-iq/src/app/dashboard/page.tsx",
                                        lineNumber: 88,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/apps/intranet-iq/src/app/dashboard/page.tsx",
                                    lineNumber: 87,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    href: "/chat",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(QuickActionCard, {
                                        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$message$2d$square$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MessageSquare$3e$__["MessageSquare"], {
                                            className: "w-5 h-5"
                                        }, void 0, false, {
                                            fileName: "[project]/apps/intranet-iq/src/app/dashboard/page.tsx",
                                            lineNumber: 97,
                                            columnNumber: 23
                                        }, void 0),
                                        title: "AI Assistant",
                                        description: "Ask questions and get answers",
                                        color: "cyan"
                                    }, void 0, false, {
                                        fileName: "[project]/apps/intranet-iq/src/app/dashboard/page.tsx",
                                        lineNumber: 96,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/apps/intranet-iq/src/app/dashboard/page.tsx",
                                    lineNumber: 95,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/apps/intranet-iq/src/app/dashboard/page.tsx",
                            lineNumber: 78,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid grid-cols-2 gap-6",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "bg-[#0f0f14] border border-white/10 rounded-xl p-6",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center justify-between mb-4",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                    className: "text-lg font-medium text-white flex items-center gap-2",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$newspaper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Newspaper$3e$__["Newspaper"], {
                                                            className: "w-5 h-5 text-purple-400"
                                                        }, void 0, false, {
                                                            fileName: "[project]/apps/intranet-iq/src/app/dashboard/page.tsx",
                                                            lineNumber: 110,
                                                            columnNumber: 19
                                                        }, this),
                                                        "Company News"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/apps/intranet-iq/src/app/dashboard/page.tsx",
                                                    lineNumber: 109,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    className: "text-sm text-blue-400 hover:text-blue-300",
                                                    children: "View all"
                                                }, void 0, false, {
                                                    fileName: "[project]/apps/intranet-iq/src/app/dashboard/page.tsx",
                                                    lineNumber: 113,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/apps/intranet-iq/src/app/dashboard/page.tsx",
                                            lineNumber: 108,
                                            columnNumber: 15
                                        }, this),
                                        postsLoading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "space-y-3",
                                            children: [
                                                1,
                                                2,
                                                3
                                            ].map((i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "animate-pulse",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "h-4 bg-white/10 rounded w-3/4 mb-2"
                                                        }, void 0, false, {
                                                            fileName: "[project]/apps/intranet-iq/src/app/dashboard/page.tsx",
                                                            lineNumber: 120,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "h-3 bg-white/5 rounded w-1/2"
                                                        }, void 0, false, {
                                                            fileName: "[project]/apps/intranet-iq/src/app/dashboard/page.tsx",
                                                            lineNumber: 121,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, i, true, {
                                                    fileName: "[project]/apps/intranet-iq/src/app/dashboard/page.tsx",
                                                    lineNumber: 119,
                                                    columnNumber: 21
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/apps/intranet-iq/src/app/dashboard/page.tsx",
                                            lineNumber: 117,
                                            columnNumber: 17
                                        }, this) : newsPosts.length > 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "space-y-3",
                                            children: newsPosts.map((post)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "p-3 rounded-lg hover:bg-white/5 transition-colors cursor-pointer",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex items-start gap-3",
                                                        children: [
                                                            post.pinned && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$bell$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Bell$3e$__["Bell"], {
                                                                className: "w-4 h-4 text-yellow-400 mt-0.5 flex-shrink-0"
                                                            }, void 0, false, {
                                                                fileName: "[project]/apps/intranet-iq/src/app/dashboard/page.tsx",
                                                                lineNumber: 134,
                                                                columnNumber: 27
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "flex-1 min-w-0",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                                        className: "text-white font-medium text-sm truncate",
                                                                        children: post.title || post.content.slice(0, 50)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/apps/intranet-iq/src/app/dashboard/page.tsx",
                                                                        lineNumber: 137,
                                                                        columnNumber: 27
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                        className: "text-xs text-white/50 line-clamp-2 mt-1",
                                                                        children: post.content
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/apps/intranet-iq/src/app/dashboard/page.tsx",
                                                                        lineNumber: 140,
                                                                        columnNumber: 27
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "flex items-center gap-3 mt-2 text-xs text-white/40",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                children: [
                                                                                    post.likes_count,
                                                                                    " likes"
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/apps/intranet-iq/src/app/dashboard/page.tsx",
                                                                                lineNumber: 144,
                                                                                columnNumber: 29
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                children: [
                                                                                    post.comments_count,
                                                                                    " comments"
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/apps/intranet-iq/src/app/dashboard/page.tsx",
                                                                                lineNumber: 145,
                                                                                columnNumber: 29
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/apps/intranet-iq/src/app/dashboard/page.tsx",
                                                                        lineNumber: 143,
                                                                        columnNumber: 27
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/apps/intranet-iq/src/app/dashboard/page.tsx",
                                                                lineNumber: 136,
                                                                columnNumber: 25
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/apps/intranet-iq/src/app/dashboard/page.tsx",
                                                        lineNumber: 132,
                                                        columnNumber: 23
                                                    }, this)
                                                }, post.id, false, {
                                                    fileName: "[project]/apps/intranet-iq/src/app/dashboard/page.tsx",
                                                    lineNumber: 128,
                                                    columnNumber: 21
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/apps/intranet-iq/src/app/dashboard/page.tsx",
                                            lineNumber: 126,
                                            columnNumber: 17
                                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-white/40 text-sm",
                                            children: "No news posts yet"
                                        }, void 0, false, {
                                            fileName: "[project]/apps/intranet-iq/src/app/dashboard/page.tsx",
                                            lineNumber: 153,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/apps/intranet-iq/src/app/dashboard/page.tsx",
                                    lineNumber: 107,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "bg-[#0f0f14] border border-white/10 rounded-xl p-6",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center justify-between mb-4",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                    className: "text-lg font-medium text-white flex items-center gap-2",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__["Calendar"], {
                                                            className: "w-5 h-5 text-green-400"
                                                        }, void 0, false, {
                                                            fileName: "[project]/apps/intranet-iq/src/app/dashboard/page.tsx",
                                                            lineNumber: 161,
                                                            columnNumber: 19
                                                        }, this),
                                                        "Upcoming Events"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/apps/intranet-iq/src/app/dashboard/page.tsx",
                                                    lineNumber: 160,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    className: "text-sm text-blue-400 hover:text-blue-300",
                                                    children: "View all"
                                                }, void 0, false, {
                                                    fileName: "[project]/apps/intranet-iq/src/app/dashboard/page.tsx",
                                                    lineNumber: 164,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/apps/intranet-iq/src/app/dashboard/page.tsx",
                                            lineNumber: 159,
                                            columnNumber: 15
                                        }, this),
                                        eventsLoading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "space-y-3",
                                            children: [
                                                1,
                                                2,
                                                3
                                            ].map((i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "animate-pulse",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "h-4 bg-white/10 rounded w-3/4 mb-2"
                                                        }, void 0, false, {
                                                            fileName: "[project]/apps/intranet-iq/src/app/dashboard/page.tsx",
                                                            lineNumber: 171,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "h-3 bg-white/5 rounded w-1/2"
                                                        }, void 0, false, {
                                                            fileName: "[project]/apps/intranet-iq/src/app/dashboard/page.tsx",
                                                            lineNumber: 172,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, i, true, {
                                                    fileName: "[project]/apps/intranet-iq/src/app/dashboard/page.tsx",
                                                    lineNumber: 170,
                                                    columnNumber: 21
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/apps/intranet-iq/src/app/dashboard/page.tsx",
                                            lineNumber: 168,
                                            columnNumber: 17
                                        }, this) : events.length > 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "space-y-3",
                                            children: events.map((event)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "p-3 rounded-lg hover:bg-white/5 transition-colors cursor-pointer border-l-2 border-green-500",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                            className: "text-white font-medium text-sm",
                                                            children: event.title
                                                        }, void 0, false, {
                                                            fileName: "[project]/apps/intranet-iq/src/app/dashboard/page.tsx",
                                                            lineNumber: 183,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-xs text-white/50 mt-1",
                                                            children: new Date(event.start_time).toLocaleDateString("en-US", {
                                                                weekday: "short",
                                                                month: "short",
                                                                day: "numeric",
                                                                hour: "numeric",
                                                                minute: "2-digit"
                                                            })
                                                        }, void 0, false, {
                                                            fileName: "[project]/apps/intranet-iq/src/app/dashboard/page.tsx",
                                                            lineNumber: 184,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex items-center gap-2 mt-2",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: `px-2 py-0.5 rounded text-xs ${event.location_type === "virtual" ? "bg-blue-500/20 text-blue-400" : event.location_type === "hybrid" ? "bg-purple-500/20 text-purple-400" : "bg-green-500/20 text-green-400"}`,
                                                                    children: event.location_type
                                                                }, void 0, false, {
                                                                    fileName: "[project]/apps/intranet-iq/src/app/dashboard/page.tsx",
                                                                    lineNumber: 194,
                                                                    columnNumber: 25
                                                                }, this),
                                                                event.location && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "text-xs text-white/40 truncate",
                                                                    children: event.location
                                                                }, void 0, false, {
                                                                    fileName: "[project]/apps/intranet-iq/src/app/dashboard/page.tsx",
                                                                    lineNumber: 204,
                                                                    columnNumber: 27
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/apps/intranet-iq/src/app/dashboard/page.tsx",
                                                            lineNumber: 193,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, event.id, true, {
                                                    fileName: "[project]/apps/intranet-iq/src/app/dashboard/page.tsx",
                                                    lineNumber: 179,
                                                    columnNumber: 21
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/apps/intranet-iq/src/app/dashboard/page.tsx",
                                            lineNumber: 177,
                                            columnNumber: 17
                                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-white/40 text-sm",
                                            children: "No upcoming events"
                                        }, void 0, false, {
                                            fileName: "[project]/apps/intranet-iq/src/app/dashboard/page.tsx",
                                            lineNumber: 211,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/apps/intranet-iq/src/app/dashboard/page.tsx",
                                    lineNumber: 158,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/apps/intranet-iq/src/app/dashboard/page.tsx",
                            lineNumber: 105,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mt-6 bg-[#0f0f14] border border-white/10 rounded-xl p-6",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center justify-between mb-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                            className: "text-lg font-medium text-white flex items-center gap-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__["Clock"], {
                                                    className: "w-5 h-5 text-blue-400"
                                                }, void 0, false, {
                                                    fileName: "[project]/apps/intranet-iq/src/app/dashboard/page.tsx",
                                                    lineNumber: 220,
                                                    columnNumber: 17
                                                }, this),
                                                "Recent Activity"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/apps/intranet-iq/src/app/dashboard/page.tsx",
                                            lineNumber: 219,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            className: "text-sm text-blue-400 hover:text-blue-300",
                                            children: "View all"
                                        }, void 0, false, {
                                            fileName: "[project]/apps/intranet-iq/src/app/dashboard/page.tsx",
                                            lineNumber: 223,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/apps/intranet-iq/src/app/dashboard/page.tsx",
                                    lineNumber: 218,
                                    columnNumber: 13
                                }, this),
                                activitiesLoading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "space-y-3",
                                    children: [
                                        1,
                                        2,
                                        3
                                    ].map((i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "animate-pulse flex items-center gap-4 p-3",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "w-10 h-10 bg-white/10 rounded-lg"
                                                }, void 0, false, {
                                                    fileName: "[project]/apps/intranet-iq/src/app/dashboard/page.tsx",
                                                    lineNumber: 230,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex-1",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "h-4 bg-white/10 rounded w-1/2 mb-2"
                                                        }, void 0, false, {
                                                            fileName: "[project]/apps/intranet-iq/src/app/dashboard/page.tsx",
                                                            lineNumber: 232,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "h-3 bg-white/5 rounded w-1/3"
                                                        }, void 0, false, {
                                                            fileName: "[project]/apps/intranet-iq/src/app/dashboard/page.tsx",
                                                            lineNumber: 233,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/apps/intranet-iq/src/app/dashboard/page.tsx",
                                                    lineNumber: 231,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, i, true, {
                                            fileName: "[project]/apps/intranet-iq/src/app/dashboard/page.tsx",
                                            lineNumber: 229,
                                            columnNumber: 19
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/apps/intranet-iq/src/app/dashboard/page.tsx",
                                    lineNumber: 227,
                                    columnNumber: 15
                                }, this) : activities.length > 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "space-y-2",
                                    children: activities.map((activity)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center gap-4 p-3 rounded-lg hover:bg-white/5 transition-colors",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "w-10 h-10 rounded-lg bg-blue-500/20 text-blue-400 flex items-center justify-center",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__["FileText"], {
                                                        className: "w-5 h-5"
                                                    }, void 0, false, {
                                                        fileName: "[project]/apps/intranet-iq/src/app/dashboard/page.tsx",
                                                        lineNumber: 246,
                                                        columnNumber: 23
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/apps/intranet-iq/src/app/dashboard/page.tsx",
                                                    lineNumber: 245,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex-1",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-white text-sm",
                                                            children: activity.action
                                                        }, void 0, false, {
                                                            fileName: "[project]/apps/intranet-iq/src/app/dashboard/page.tsx",
                                                            lineNumber: 249,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-xs text-white/40",
                                                            children: new Date(activity.created_at).toLocaleString()
                                                        }, void 0, false, {
                                                            fileName: "[project]/apps/intranet-iq/src/app/dashboard/page.tsx",
                                                            lineNumber: 250,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/apps/intranet-iq/src/app/dashboard/page.tsx",
                                                    lineNumber: 248,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, activity.id, true, {
                                            fileName: "[project]/apps/intranet-iq/src/app/dashboard/page.tsx",
                                            lineNumber: 241,
                                            columnNumber: 19
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/apps/intranet-iq/src/app/dashboard/page.tsx",
                                    lineNumber: 239,
                                    columnNumber: 15
                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "space-y-3",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ActivityItem, {
                                            title: "Q4 Planning Document",
                                            type: "document",
                                            time: "2 hours ago",
                                            user: "Sarah Chen"
                                        }, void 0, false, {
                                            fileName: "[project]/apps/intranet-iq/src/app/dashboard/page.tsx",
                                            lineNumber: 260,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ActivityItem, {
                                            title: "Engineering Team Channel",
                                            type: "channel",
                                            time: "4 hours ago",
                                            user: "12 new messages"
                                        }, void 0, false, {
                                            fileName: "[project]/apps/intranet-iq/src/app/dashboard/page.tsx",
                                            lineNumber: 266,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ActivityItem, {
                                            title: "Product Roadmap 2026",
                                            type: "document",
                                            time: "Yesterday",
                                            user: "Updated by Alex"
                                        }, void 0, false, {
                                            fileName: "[project]/apps/intranet-iq/src/app/dashboard/page.tsx",
                                            lineNumber: 272,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/apps/intranet-iq/src/app/dashboard/page.tsx",
                                    lineNumber: 258,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/apps/intranet-iq/src/app/dashboard/page.tsx",
                            lineNumber: 217,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mt-6 bg-[#0f0f14] border border-white/10 rounded-xl p-6",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-2 mb-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trending$2d$up$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TrendingUp$3e$__["TrendingUp"], {
                                            className: "w-5 h-5 text-green-400"
                                        }, void 0, false, {
                                            fileName: "[project]/apps/intranet-iq/src/app/dashboard/page.tsx",
                                            lineNumber: 285,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                            className: "text-lg font-medium text-white",
                                            children: "Trending in your organization"
                                        }, void 0, false, {
                                            fileName: "[project]/apps/intranet-iq/src/app/dashboard/page.tsx",
                                            lineNumber: 286,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/apps/intranet-iq/src/app/dashboard/page.tsx",
                                    lineNumber: 284,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex flex-wrap gap-2",
                                    children: trendingTopics.map((topic)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            href: `/search?q=${encodeURIComponent(topic)}`,
                                            className: "px-3 py-1.5 bg-white/5 hover:bg-white/10 border border-white/10 rounded-full text-sm text-white/70 cursor-pointer transition-colors",
                                            children: topic
                                        }, topic, false, {
                                            fileName: "[project]/apps/intranet-iq/src/app/dashboard/page.tsx",
                                            lineNumber: 290,
                                            columnNumber: 17
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/apps/intranet-iq/src/app/dashboard/page.tsx",
                                    lineNumber: 288,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/apps/intranet-iq/src/app/dashboard/page.tsx",
                            lineNumber: 283,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/apps/intranet-iq/src/app/dashboard/page.tsx",
                    lineNumber: 30,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/apps/intranet-iq/src/app/dashboard/page.tsx",
                lineNumber: 28,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/apps/intranet-iq/src/app/dashboard/page.tsx",
        lineNumber: 24,
        columnNumber: 5
    }, this);
}
_s(Dashboard, "eQsMcfcq+5BVoKXOhjO9SDUqq1U=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$runtime$2f$react$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useUser"],
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$intranet$2d$iq$2f$src$2f$lib$2f$hooks$2f$useSupabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useNewsPosts"],
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$intranet$2d$iq$2f$src$2f$lib$2f$hooks$2f$useSupabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useUpcomingEvents"],
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$intranet$2d$iq$2f$src$2f$lib$2f$hooks$2f$useSupabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRecentActivity"]
    ];
});
_c = Dashboard;
function getTimeOfDay() {
    const hour = new Date().getHours();
    if (hour < 12) return "morning";
    if (hour < 17) return "afternoon";
    return "evening";
}
function QuickActionCard({ icon, title, description, color }) {
    const colorClasses = {
        blue: "from-blue-500/20 to-blue-600/10 border-blue-500/30 hover:border-blue-500/50",
        purple: "from-purple-500/20 to-purple-600/10 border-purple-500/30 hover:border-purple-500/50",
        cyan: "from-cyan-500/20 to-cyan-600/10 border-cyan-500/30 hover:border-cyan-500/50"
    };
    const iconColors = {
        blue: "text-blue-400",
        purple: "text-purple-400",
        cyan: "text-cyan-400"
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `bg-gradient-to-br ${colorClasses[color]} border rounded-xl p-4 cursor-pointer transition-all hover:scale-[1.02]`,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `${iconColors[color]} mb-3`,
                children: icon
            }, void 0, false, {
                fileName: "[project]/apps/intranet-iq/src/app/dashboard/page.tsx",
                lineNumber: 340,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                className: "text-white font-medium mb-1",
                children: title
            }, void 0, false, {
                fileName: "[project]/apps/intranet-iq/src/app/dashboard/page.tsx",
                lineNumber: 341,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-sm text-white/50",
                children: description
            }, void 0, false, {
                fileName: "[project]/apps/intranet-iq/src/app/dashboard/page.tsx",
                lineNumber: 342,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/apps/intranet-iq/src/app/dashboard/page.tsx",
        lineNumber: 337,
        columnNumber: 5
    }, this);
}
_c1 = QuickActionCard;
function ActivityItem({ title, type, time, user }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex items-center gap-4 p-3 rounded-lg hover:bg-white/5 transition-colors cursor-pointer",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `w-10 h-10 rounded-lg flex items-center justify-center ${type === "document" ? "bg-blue-500/20 text-blue-400" : "bg-purple-500/20 text-purple-400"}`,
                children: type === "document" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__["FileText"], {
                    className: "w-5 h-5"
                }, void 0, false, {
                    fileName: "[project]/apps/intranet-iq/src/app/dashboard/page.tsx",
                    lineNumber: 364,
                    columnNumber: 11
                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__["Users"], {
                    className: "w-5 h-5"
                }, void 0, false, {
                    fileName: "[project]/apps/intranet-iq/src/app/dashboard/page.tsx",
                    lineNumber: 366,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/apps/intranet-iq/src/app/dashboard/page.tsx",
                lineNumber: 360,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex-1",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                        className: "text-white font-medium",
                        children: title
                    }, void 0, false, {
                        fileName: "[project]/apps/intranet-iq/src/app/dashboard/page.tsx",
                        lineNumber: 370,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-sm text-white/50",
                        children: user
                    }, void 0, false, {
                        fileName: "[project]/apps/intranet-iq/src/app/dashboard/page.tsx",
                        lineNumber: 371,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/apps/intranet-iq/src/app/dashboard/page.tsx",
                lineNumber: 369,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "text-xs text-white/40",
                children: time
            }, void 0, false, {
                fileName: "[project]/apps/intranet-iq/src/app/dashboard/page.tsx",
                lineNumber: 373,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/apps/intranet-iq/src/app/dashboard/page.tsx",
        lineNumber: 359,
        columnNumber: 5
    }, this);
}
_c2 = ActivityItem;
var _c, _c1, _c2;
__turbopack_context__.k.register(_c, "Dashboard");
__turbopack_context__.k.register(_c1, "QuickActionCard");
__turbopack_context__.k.register(_c2, "ActivityItem");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=apps_intranet-iq_src_2e00f0e4._.js.map