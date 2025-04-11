(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push(["static/chunks/src_bdb34fc5._.js", {

"[project]/src/components/Modal.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, d: __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "Modal": (()=>Modal)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$select$2f$dist$2f$react$2d$select$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/react-select/dist/react-select.esm.js [app-client] (ecmascript) <locals>");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
function Modal({ isOpen, onClose, onSubmit, onUpdate, onDelete, selectedRange, selectedEvent }) {
    _s();
    const [engagement, setEngagement] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [engagements, setEngagements] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [activity, setActivity] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [activities, setActivities] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [filteredActivities, setFilteredActivities] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [location, setLocation] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [locations, setLocations] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [details, setDetails] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [isSubmitting, setIsSubmitting] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isDeleting, setIsDeleting] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isDuplicating, setIsDuplicating] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const handleAction = async ()=>{
        console.log("✅ 追加・更新ボタンが押されました！");
        setIsSubmitting(true); // 🔸送信開始時にロック
        try {
            if (selectedEvent) {
                if (!selectedRange) {
                    console.error("❌ 更新範囲が未定義です！");
                    return;
                }
                await onUpdate({
                    id: selectedEvent.id || "",
                    userId: localStorage.getItem("userId") || "",
                    engagement: engagement?.value ?? "",
                    activity,
                    location: location?.value || "",
                    details,
                    start: selectedRange.start.toISOString(),
                    end: selectedRange.end.toISOString()
                }, selectedRange);
            } else {
                await onSubmit({
                    id: "",
                    userId: localStorage.getItem("userId") || "",
                    engagement: engagement?.value ?? "",
                    activity,
                    location: location?.value || "",
                    details,
                    start: selectedRange?.start.toISOString() || "",
                    end: selectedRange?.end.toISOString() || ""
                });
            }
        } finally{
            setIsSubmitting(false); // 🔸送信後に解除
        }
    };
    // ✅ エンゲージメントリストの取得
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Modal.useEffect": ()=>{
            const fetchEngagements = {
                "Modal.useEffect.fetchEngagements": async ()=>{
                    try {
                        const userId = ("TURBOPACK compile-time truthy", 1) ? localStorage.getItem("userId") : ("TURBOPACK unreachable", undefined);
                        if (!userId) {
                            console.error("❌ ユーザーIDが取得できません！");
                            return;
                        }
                        const response = await fetch(`/api/fetchEngagements?userId=${encodeURIComponent(userId)}`);
                        if (!response.ok) throw new Error("エンゲージメントの取得に失敗しました");
                        const data = await response.json();
                        if (!Array.isArray(data)) {
                            console.error("❌ APIのレスポンスが配列ではありません:", data);
                            return;
                        }
                        const formattedEngagements = data.map({
                            "Modal.useEffect.fetchEngagements.formattedEngagements": (eng, index)=>({
                                    id: eng.id || index.toString(),
                                    name: eng.name
                                })
                        }["Modal.useEffect.fetchEngagements.formattedEngagements"]);
                        setEngagements(formattedEngagements);
                    } catch (error) {
                        console.error("❌ エンゲージメントの取得エラー:", error);
                    }
                }
            }["Modal.useEffect.fetchEngagements"];
            if (isOpen) {
                fetchEngagements();
            }
        }
    }["Modal.useEffect"], [
        isOpen
    ]);
    // ✅ Activities を取得
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Modal.useEffect": ()=>{
            const fetchActivities = {
                "Modal.useEffect.fetchActivities": async ()=>{
                    try {
                        const response = await fetch("/api/fetchActivities");
                        const data = await response.json();
                        console.log("✅ Activity データ:", data);
                        setActivities(data);
                    } catch (error) {
                        console.error("❌ Activity の取得エラー:", error);
                    }
                }
            }["Modal.useEffect.fetchActivities"];
            if (isOpen) {
                fetchActivities();
            }
        }
    }["Modal.useEffect"], [
        isOpen
    ]);
    // ✅ Engagement に応じた Activity をフィルタリング
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Modal.useEffect": ()=>{
            const filtered = activities.filter({
                "Modal.useEffect.filtered": (act)=>act.engagement === engagement?.value
            }["Modal.useEffect.filtered"]);
            setFilteredActivities(filtered);
        }
    }["Modal.useEffect"], [
        engagement,
        activities
    ]);
    // ✅ `selectedEvent` のデータをセット
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Modal.useEffect": ()=>{
            if (selectedEvent) {
                console.log("📌 選択されたイベント:", selectedEvent);
                setEngagement(selectedEvent.engagement ? {
                    value: selectedEvent.engagement,
                    label: selectedEvent.engagement
                } : null);
                setActivity(selectedEvent.activity || "");
                setLocation(selectedEvent.location ? {
                    value: selectedEvent.location,
                    label: selectedEvent.location
                } : null);
                setDetails(selectedEvent.details || "");
            } else {
                // 新規作成時のデフォルト値
                setEngagement(null);
                setActivity("");
                setLocation(null);
                setDetails("");
            }
        }
    }["Modal.useEffect"], [
        selectedEvent,
        engagements
    ]);
    // 🔹 作業場所リストの取得
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Modal.useEffect": ()=>{
            const fetchLocations = {
                "Modal.useEffect.fetchLocations": async ()=>{
                    try {
                        const response = await fetch("/api/fetchLocations");
                        const data = await response.json();
                        console.log("✅ 取得した作業場所:", data);
                        setLocations(data);
                    } catch (error) {
                        console.error("❌ 作業場所の取得エラー:", error);
                    }
                }
            }["Modal.useEffect.fetchLocations"];
            if (isOpen) {
                fetchLocations();
            }
        }
    }["Modal.useEffect"], [
        isOpen
    ]);
    if (!isOpen) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "modal",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "modal-content",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                    children: "作業情報を入力"
                }, void 0, false, {
                    fileName: "[project]/src/components/Modal.tsx",
                    lineNumber: 176,
                    columnNumber: 9
                }, this),
                selectedRange && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    children: [
                        "📅 ",
                        new Date(selectedRange.start.getTime() - 9 * 60 * 60 * 1000).toLocaleTimeString("ja-JP", {
                            hour: "2-digit",
                            minute: "2-digit"
                        }),
                        "～ ",
                        new Date(selectedRange.end.getTime() - 9 * 60 * 60 * 1000).toLocaleTimeString("ja-JP", {
                            hour: "2-digit",
                            minute: "2-digit"
                        })
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/Modal.tsx",
                    lineNumber: 178,
                    columnNumber: 10
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        marginBottom: "10px"
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                            children: "エンゲージメント"
                        }, void 0, false, {
                            fileName: "[project]/src/components/Modal.tsx",
                            lineNumber: 187,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                            fileName: "[project]/src/components/Modal.tsx",
                            lineNumber: 187,
                            columnNumber: 34
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$select$2f$dist$2f$react$2d$select$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"], {
                            options: engagements.map((eng)=>({
                                    value: eng.name,
                                    label: eng.name
                                })),
                            value: engagement,
                            onChange: (selectedOption)=>setEngagement(selectedOption),
                            styles: {
                                menuList: (provided)=>({
                                        ...provided,
                                        maxHeight: "200px",
                                        overflowY: "auto"
                                    }),
                                menu: (provided)=>({
                                        ...provided,
                                        zIndex: 9999
                                    })
                            },
                            placeholder: "エンゲージメントを選択"
                        }, void 0, false, {
                            fileName: "[project]/src/components/Modal.tsx",
                            lineNumber: 188,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/Modal.tsx",
                    lineNumber: 186,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        marginBottom: "10px"
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                            children: "Activity"
                        }, void 0, false, {
                            fileName: "[project]/src/components/Modal.tsx",
                            lineNumber: 214,
                            columnNumber: 9
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                            fileName: "[project]/src/components/Modal.tsx",
                            lineNumber: 214,
                            columnNumber: 32
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$select$2f$dist$2f$react$2d$select$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"], {
                            options: filteredActivities.map((act)=>({
                                    value: act.activity_id,
                                    label: act.activity // 表示されるラベル
                                })),
                            value: filteredActivities.find((act)=>act.activity === activity) ? {
                                value: activity,
                                label: activity
                            } : null,
                            onChange: (selectedOption)=>setActivity(selectedOption?.label || ""),
                            styles: {
                                menuList: (provided)=>({
                                        ...provided,
                                        maxHeight: "200px",
                                        overflowY: "auto"
                                    }),
                                menu: (provided)=>({
                                        ...provided,
                                        zIndex: 9999
                                    })
                            },
                            placeholder: "Activityを選択"
                        }, void 0, false, {
                            fileName: "[project]/src/components/Modal.tsx",
                            lineNumber: 215,
                            columnNumber: 9
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/Modal.tsx",
                    lineNumber: 213,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                    children: "作業場所"
                }, void 0, false, {
                    fileName: "[project]/src/components/Modal.tsx",
                    lineNumber: 239,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$select$2f$dist$2f$react$2d$select$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"], {
                    options: locations,
                    value: location,
                    onChange: (selectedOption)=>setLocation(selectedOption),
                    placeholder: "作業場所を選択",
                    styles: {
                        menuList: (provided)=>({
                                ...provided,
                                maxHeight: "200px",
                                overflowY: "auto"
                            }),
                        menu: (provided)=>({
                                ...provided,
                                zIndex: 9999
                            })
                    }
                }, void 0, false, {
                    fileName: "[project]/src/components/Modal.tsx",
                    lineNumber: 240,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                    style: {
                        display: "block",
                        marginTop: "14px",
                        marginBottom: "-15px"
                    },
                    children: "作業内容"
                }, void 0, false, {
                    fileName: "[project]/src/components/Modal.tsx",
                    lineNumber: 259,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                    type: "text",
                    value: details,
                    onChange: (e)=>setDetails(e.target.value),
                    style: {
                        paddingTop: "5px",
                        paddingBottom: "5px",
                        height: "30px"
                    }
                }, void 0, false, {
                    fileName: "[project]/src/components/Modal.tsx",
                    lineNumber: 263,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    onClick: handleAction,
                    disabled: isSubmitting,
                    style: {
                        opacity: isSubmitting ? 0.6 : 1,
                        pointerEvents: isSubmitting ? "none" : "auto"
                    },
                    children: isSubmitting ? "送信中..." : selectedEvent ? "更新" : "追加"
                }, void 0, false, {
                    fileName: "[project]/src/components/Modal.tsx",
                    lineNumber: 277,
                    columnNumber: 1
                }, this),
                selectedEvent && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    onClick: async ()=>{
                        if (isDuplicating) return;
                        setIsDuplicating(true);
                        console.log("📋 複製ボタンが押されました！");
                        const duplicatedStart = selectedRange?.start?.toISOString() || "";
                        const duplicatedEnd = selectedRange?.end?.toISOString() || "";
                        try {
                            await onSubmit({
                                id: "",
                                userId: localStorage.getItem("userId") || "",
                                engagement: engagement?.value ?? "",
                                activity,
                                location: location?.value || "",
                                details,
                                start: duplicatedStart,
                                end: duplicatedEnd
                            });
                        } catch (error) {
                            console.error("❌ 複製エラー:", error);
                        } finally{
                            setIsDuplicating(false);
                        }
                    },
                    disabled: isDuplicating,
                    style: {
                        marginLeft: "10px",
                        backgroundColor: "darkorange",
                        color: "white",
                        opacity: isDuplicating ? 0.6 : 1,
                        pointerEvents: isDuplicating ? "none" : "auto"
                    },
                    children: isDuplicating ? "複製中..." : "複製"
                }, void 0, false, {
                    fileName: "[project]/src/components/Modal.tsx",
                    lineNumber: 291,
                    columnNumber: 3
                }, this),
                selectedEvent && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    onClick: async ()=>{
                        if (isDeleting) return;
                        setIsDeleting(true);
                        console.log("🗑️ 削除ボタンが押されました！");
                        try {
                            await onDelete(selectedEvent.id);
                        } catch (error) {
                            console.error("❌ 削除エラー:", error);
                        } finally{
                            setIsDeleting(false);
                        }
                    },
                    disabled: isDeleting,
                    style: {
                        backgroundColor: "red",
                        color: "white",
                        marginLeft: "10px",
                        opacity: isDeleting ? 0.6 : 1,
                        pointerEvents: isDeleting ? "none" : "auto"
                    },
                    children: isDeleting ? "削除中..." : "削除"
                }, void 0, false, {
                    fileName: "[project]/src/components/Modal.tsx",
                    lineNumber: 333,
                    columnNumber: 3
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    onClick: onClose,
                    children: "キャンセル"
                }, void 0, false, {
                    fileName: "[project]/src/components/Modal.tsx",
                    lineNumber: 365,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/Modal.tsx",
            lineNumber: 175,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/Modal.tsx",
        lineNumber: 174,
        columnNumber: 5
    }, this);
}
_s(Modal, "YhytS7D+vN7xGZPC4o77Jaokyvc=");
_c = Modal;
var _c;
__turbopack_context__.k.register(_c, "Modal");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/ExportModal.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, d: __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$select$2f$dist$2f$react$2d$select$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/react-select/dist/react-select.esm.js [app-client] (ecmascript) <locals>");
;
var _s = __turbopack_context__.k.signature();
;
;
const ExportModal = ({ isOpen, onClose, onExport })=>{
    _s();
    const [startDate, setStartDate] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [endDate, setEndDate] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [format, setFormat] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("xlsx");
    const [errorMessage, setErrorMessage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(""); // 修正箇所: エラーメッセージ用の state
    if (!isOpen) return null;
    const handleExport = async ()=>{
        setErrorMessage(""); // 修正箇所: エラーメッセージをリセット
        const success = await onExport(startDate, endDate, format); // 修正箇所: `onExport` の結果を取得
        if (success) {
            onClose(); // 修正箇所: エクスポート成功時にモーダルを閉じる
        } else {
            setErrorMessage("対象期間に該当データはありません"); // 修正箇所: エラー時にメッセージを表示
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "export-modal-overlay",
                onClick: onClose
            }, void 0, false, {
                fileName: "[project]/src/components/ExportModal.tsx",
                lineNumber: 32,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "export-modal",
                onClick: (e)=>e.stopPropagation(),
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        children: "📥 データをエクスポート"
                    }, void 0, false, {
                        fileName: "[project]/src/components/ExportModal.tsx",
                        lineNumber: 36,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                        children: "開始日"
                    }, void 0, false, {
                        fileName: "[project]/src/components/ExportModal.tsx",
                        lineNumber: 38,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        type: "date",
                        value: startDate,
                        onChange: (e)=>setStartDate(e.target.value)
                    }, void 0, false, {
                        fileName: "[project]/src/components/ExportModal.tsx",
                        lineNumber: 39,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                        children: "終了日"
                    }, void 0, false, {
                        fileName: "[project]/src/components/ExportModal.tsx",
                        lineNumber: 41,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        type: "date",
                        value: endDate,
                        onChange: (e)=>setEndDate(e.target.value)
                    }, void 0, false, {
                        fileName: "[project]/src/components/ExportModal.tsx",
                        lineNumber: 42,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                        children: "ファイル形式"
                    }, void 0, false, {
                        fileName: "[project]/src/components/ExportModal.tsx",
                        lineNumber: 44,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$select$2f$dist$2f$react$2d$select$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"], {
                        options: [
                            {
                                value: "xlsx",
                                label: "Excel (.xlsx)"
                            },
                            {
                                value: "csv",
                                label: "CSV (.csv)"
                            }
                        ],
                        value: {
                            value: format,
                            label: format === "xlsx" ? "Excel (.xlsx)" : "CSV (.csv)"
                        },
                        onChange: (selectedOption)=>setFormat(selectedOption?.value || "xlsx")
                    }, void 0, false, {
                        fileName: "[project]/src/components/ExportModal.tsx",
                        lineNumber: 45,
                        columnNumber: 9
                    }, this),
                    errorMessage && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        style: {
                            color: "red"
                        },
                        children: errorMessage
                    }, void 0, false, {
                        fileName: "[project]/src/components/ExportModal.tsx",
                        lineNumber: 55,
                        columnNumber: 26
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "export-modal-buttons",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: "export-button",
                                onClick: handleExport,
                                children: "📤 エクスポート"
                            }, void 0, false, {
                                fileName: "[project]/src/components/ExportModal.tsx",
                                lineNumber: 58,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: "export-button cancel",
                                onClick: onClose,
                                children: "キャンセル"
                            }, void 0, false, {
                                fileName: "[project]/src/components/ExportModal.tsx",
                                lineNumber: 59,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/ExportModal.tsx",
                        lineNumber: 57,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/ExportModal.tsx",
                lineNumber: 35,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
};
_s(ExportModal, "awd+WPxMwWcDDpq8lv2yZzIf7ns=");
_c = ExportModal;
const __TURBOPACK__default__export__ = ExportModal;
var _c;
__turbopack_context__.k.register(_c, "ExportModal");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/Sidebar.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, d: __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>Sidebar)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-icons/fa/index.esm.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ExportModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ExportModal.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
;
;
;
;
function Sidebar({ onSelectView }) {
    _s();
    const [isMenuOpen, setIsMenuOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isReportOpen, setIsReportOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isExportOpen, setIsExportOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isExportMyDataOpen, setIsExportMyDataOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [userRole, setUserRole] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const reportRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const menuRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Sidebar.useEffect": ()=>{
            const fetchUserRole = {
                "Sidebar.useEffect.fetchUserRole": async ()=>{
                    const userId = localStorage.getItem("userId");
                    if (!userId) return;
                    try {
                        const response = await fetch(`/api/getUserRole?userId=${userId}`);
                        const data = await response.json();
                        if (data.role) {
                            setUserRole(data.role);
                        }
                    } catch (error) {
                        console.error("❌ ユーザー役職の取得エラー:", error);
                    }
                }
            }["Sidebar.useEffect.fetchUserRole"];
            fetchUserRole();
        }
    }["Sidebar.useEffect"], []);
    const handleLogout = ()=>{
        localStorage.removeItem("isAuthenticated");
        router.push("/login");
    };
    const handleChangePassword = ()=>{
        router.push("/change-password");
    };
    const handleExport = async (startDate, endDate, format, userId)=>{
        console.log(`📥 エクスポート開始: ${startDate} ～ ${endDate}, フォーマット: ${format}, ユーザーID: ${userId || "全データ"}`);
        try {
            const response = await fetch("/api/exportData", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    startDate,
                    endDate,
                    format,
                    userId
                }) // ✅ `userId` がある場合、自分のデータのみ
            });
            if (!response.ok) {
                const errorData = await response.json();
                if (errorData.error === "対象期間に該当データはありません") {
                    return false; // 修正箇所: データがない場合は `false` を返す
                }
                throw new Error("エクスポート処理に失敗しました");
            }
            const blob = await response.blob();
            const downloadUrl = window.URL.createObjectURL(blob);
            const link = document.createElement("a");
            link.href = downloadUrl;
            link.setAttribute("download", `export.${format}`);
            document.body.appendChild(link);
            link.click();
            link.remove();
            console.log("✅ エクスポート成功！");
            return true; // 修正箇所: エクスポート成功時に `true` を返す
        } catch (error) {
            console.error("❌ エクスポートエラー:", error);
            return false; // 修正箇所: エラー時は `false` を返す
        }
    };
    // ✅ 外部クリックでホップアップを閉じる
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Sidebar.useEffect": ()=>{
            function handleClickOutside(event) {
                if (reportRef.current && !reportRef.current.contains(event.target)) {
                    setIsReportOpen(false);
                }
                if (menuRef.current && !menuRef.current.contains(event.target)) {
                    setIsMenuOpen(false);
                }
            }
            document.addEventListener("mousedown", handleClickOutside);
            return ({
                "Sidebar.useEffect": ()=>{
                    document.removeEventListener("mousedown", handleClickOutside);
                }
            })["Sidebar.useEffect"];
        }
    }["Sidebar.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "sidebar",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                className: "sidebar-title",
                children: "執務管理システム"
            }, void 0, false, {
                fileName: "[project]/src/components/Sidebar.tsx",
                lineNumber: 104,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                        className: "report-item",
                        onClick: ()=>onSelectView("calendar"),
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: "🗓️ タイムシート"
                            }, void 0, false, {
                                fileName: "[project]/src/components/Sidebar.tsx",
                                lineNumber: 109,
                                columnNumber: 8
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "report-arrow"
                            }, void 0, false, {
                                fileName: "[project]/src/components/Sidebar.tsx",
                                lineNumber: 110,
                                columnNumber: 8
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/Sidebar.tsx",
                        lineNumber: 108,
                        columnNumber: 7
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                        onClick: ()=>setIsReportOpen(!isReportOpen),
                        ref: reportRef,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: "📑レポート"
                            }, void 0, false, {
                                fileName: "[project]/src/components/Sidebar.tsx",
                                lineNumber: 118,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "report-arrow",
                                children: "▶"
                            }, void 0, false, {
                                fileName: "[project]/src/components/Sidebar.tsx",
                                lineNumber: 119,
                                columnNumber: 13
                            }, this),
                            isReportOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "menu-popup_report",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        className: "export-button",
                                        onClick: ()=>setIsExportMyDataOpen(true),
                                        children: "📤 Export（My Data）"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Sidebar.tsx",
                                        lineNumber: 126,
                                        columnNumber: 15
                                    }, this),
                                    isExportMyDataOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ExportModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        isOpen: isExportMyDataOpen,
                                        onClose: ()=>setIsExportMyDataOpen(false),
                                        onExport: async (startDate, endDate, format)=>{
                                            const userId = localStorage.getItem("userId") || ""; // 🔹 ユーザーIDを取得
                                            return await handleExport(startDate, endDate, format, userId); // 🔹 `await` を追加し `Promise<boolean>` を返す
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Sidebar.tsx",
                                        lineNumber: 134,
                                        columnNumber: 16
                                    }, this),
                                    userRole === "管理者" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                className: "export-button",
                                                onClick: ()=>setIsExportOpen(true),
                                                children: "📤 Export（all Data）"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/Sidebar.tsx",
                                                lineNumber: 149,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                className: "export-button",
                                                onClick: ()=>onSelectView("report"),
                                                children: "📊 予実レポート"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/Sidebar.tsx",
                                                lineNumber: 156,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/Sidebar.tsx",
                                        lineNumber: 148,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/Sidebar.tsx",
                                lineNumber: 124,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/Sidebar.tsx",
                        lineNumber: 113,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/Sidebar.tsx",
                lineNumber: 107,
                columnNumber: 7
            }, this),
            isExportMyDataOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ExportModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                isOpen: isExportMyDataOpen,
                onClose: ()=>setIsExportMyDataOpen(false),
                onExport: async (startDate, endDate, format)=>{
                    const userId = localStorage.getItem("userId") || ""; // 🔹 ユーザーIDを取得
                    return await handleExport(startDate, endDate, format, userId); // 🔹 `await` を追加し `Promise<boolean>` を返す
                }
            }, void 0, false, {
                fileName: "[project]/src/components/Sidebar.tsx",
                lineNumber: 175,
                columnNumber: 9
            }, this),
            isExportOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ExportModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                isOpen: isExportOpen,
                onClose: ()=>setIsExportOpen(false),
                onExport: (startDate, endDate, format)=>handleExport(startDate, endDate, format)
            }, void 0, false, {
                fileName: "[project]/src/components/Sidebar.tsx",
                lineNumber: 186,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "settings",
                onClick: ()=>setIsMenuOpen(!isMenuOpen),
                ref: menuRef,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaCog"], {
                        size: 20
                    }, void 0, false, {
                        fileName: "[project]/src/components/Sidebar.tsx",
                        lineNumber: 199,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        children: "管理メニュー"
                    }, void 0, false, {
                        fileName: "[project]/src/components/Sidebar.tsx",
                        lineNumber: 200,
                        columnNumber: 9
                    }, this),
                    isMenuOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "menu-popup",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: "pw-change-button",
                                onClick: handleChangePassword,
                                children: "🔑 PW変更"
                            }, void 0, false, {
                                fileName: "[project]/src/components/Sidebar.tsx",
                                lineNumber: 203,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: "logout-button",
                                onClick: handleLogout,
                                children: "ログアウト"
                            }, void 0, false, {
                                fileName: "[project]/src/components/Sidebar.tsx",
                                lineNumber: 207,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/Sidebar.tsx",
                        lineNumber: 202,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/Sidebar.tsx",
                lineNumber: 194,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/Sidebar.tsx",
        lineNumber: 103,
        columnNumber: 5
    }, this);
}
_s(Sidebar, "qThJGx9bc+wkFK0UApkW96XUuAk=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c = Sidebar;
var _c;
__turbopack_context__.k.register(_c, "Sidebar");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/app/budget-report/page.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, d: __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>BudgetReportPage)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
function BudgetReportPage() {
    _s();
    const [reportData, setReportData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [selectedEngagement, setSelectedEngagement] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "BudgetReportPage.useEffect": ()=>{
            const fetchData = {
                "BudgetReportPage.useEffect.fetchData": async ()=>{
                    const res = await fetch("/api/fetchBudgetAndActuals");
                    const data = await res.json();
                    setReportData(data);
                }
            }["BudgetReportPage.useEffect.fetchData"];
            fetchData();
        }
    }["BudgetReportPage.useEffect"], []);
    const engagements = Array.from(new Set(reportData.map((row)=>row.engagement)));
    const filteredData = reportData.filter((row)=>row.engagement === selectedEngagement).sort((a, b)=>a.activityId.localeCompare(b.activityId, "ja", {
            numeric: true
        }));
    const totalBudget = filteredData.reduce((sum, row)=>sum + row.budget, 0);
    const totalActual = filteredData.reduce((sum, row)=>sum + row.actual, 0);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "p-6",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                className: "text-2xl font-bold mb-4",
                children: "📊 予実レポート"
            }, void 0, false, {
                fileName: "[project]/src/app/budget-report/page.tsx",
                lineNumber: 39,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mb-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                        className: "mr-3 font-semibold text-gray-700",
                        children: "Engagement（会社）を選択："
                    }, void 0, false, {
                        fileName: "[project]/src/app/budget-report/page.tsx",
                        lineNumber: 42,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                        value: selectedEngagement,
                        onChange: (e)=>setSelectedEngagement(e.target.value),
                        className: "border px-3 py-2 rounded-md shadow-sm",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                value: "",
                                children: "-- 選択してください --"
                            }, void 0, false, {
                                fileName: "[project]/src/app/budget-report/page.tsx",
                                lineNumber: 50,
                                columnNumber: 11
                            }, this),
                            engagements.map((eng)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                    value: eng,
                                    children: eng
                                }, eng, false, {
                                    fileName: "[project]/src/app/budget-report/page.tsx",
                                    lineNumber: 52,
                                    columnNumber: 13
                                }, this))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/budget-report/page.tsx",
                        lineNumber: 45,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/budget-report/page.tsx",
                lineNumber: 41,
                columnNumber: 7
            }, this),
            selectedEngagement && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "text-xl font-semibold mb-3",
                        children: [
                            "「",
                            selectedEngagement,
                            "」の予算・実績一覧"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/budget-report/page.tsx",
                        lineNumber: 61,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "overflow-x-auto",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                            className: "min-w-full text-sm border-collapse border",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                                    className: "bg-gray-100",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                className: "border px-4 py-2",
                                                children: "Activity ID"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/budget-report/page.tsx",
                                                lineNumber: 68,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                className: "border px-4 py-2",
                                                children: "Activity"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/budget-report/page.tsx",
                                                lineNumber: 69,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                className: "border px-4 py-2",
                                                children: "予算時間"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/budget-report/page.tsx",
                                                lineNumber: 70,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                className: "border px-4 py-2",
                                                children: "実績時間"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/budget-report/page.tsx",
                                                lineNumber: 71,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                className: "border px-4 py-2",
                                                children: "差分"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/budget-report/page.tsx",
                                                lineNumber: 72,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/budget-report/page.tsx",
                                        lineNumber: 67,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/budget-report/page.tsx",
                                    lineNumber: 66,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                                    children: [
                                        filteredData.map((row, idx)=>{
                                            const diff = row.actual - row.budget;
                                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                className: "text-center",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        className: "border px-4 py-2",
                                                        children: row.activityId
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/budget-report/page.tsx",
                                                        lineNumber: 80,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        className: "border px-4 py-2",
                                                        children: row.activity
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/budget-report/page.tsx",
                                                        lineNumber: 81,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        className: "border px-4 py-2",
                                                        children: [
                                                            row.budget,
                                                            " h"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/budget-report/page.tsx",
                                                        lineNumber: 82,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        className: "border px-4 py-2",
                                                        children: [
                                                            row.actual,
                                                            " h"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/budget-report/page.tsx",
                                                        lineNumber: 83,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        className: "border px-4 py-2 font-bold",
                                                        style: {
                                                            color: diff > 0 ? "red" : diff < 0 ? "green" : "black"
                                                        },
                                                        children: [
                                                            (diff >= 0 ? "+" : "") + diff.toFixed(2),
                                                            " h"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/budget-report/page.tsx",
                                                        lineNumber: 84,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, idx, true, {
                                                fileName: "[project]/src/app/budget-report/page.tsx",
                                                lineNumber: 79,
                                                columnNumber: 21
                                            }, this);
                                        }),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                            className: "bg-gray-100 font-semibold text-center",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    className: "border px-4 py-2"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/budget-report/page.tsx",
                                                    lineNumber: 98,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    className: "border px-4 py-2",
                                                    children: "合計"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/budget-report/page.tsx",
                                                    lineNumber: 99,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    className: "border px-4 py-2",
                                                    children: [
                                                        totalBudget.toFixed(2),
                                                        " h"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/budget-report/page.tsx",
                                                    lineNumber: 100,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    className: "border px-4 py-2",
                                                    children: [
                                                        totalActual.toFixed(2),
                                                        " h"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/budget-report/page.tsx",
                                                    lineNumber: 101,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    className: "border px-4 py-2",
                                                    style: {
                                                        color: totalActual - totalBudget > 0 ? "red" : totalActual - totalBudget < 0 ? "green" : "black"
                                                    },
                                                    children: [
                                                        (totalActual - totalBudget >= 0 ? "+" : "") + (totalActual - totalBudget).toFixed(2),
                                                        " ",
                                                        "h"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/budget-report/page.tsx",
                                                    lineNumber: 102,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/budget-report/page.tsx",
                                            lineNumber: 97,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/budget-report/page.tsx",
                                    lineNumber: 75,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/budget-report/page.tsx",
                            lineNumber: 65,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/budget-report/page.tsx",
                        lineNumber: 64,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/budget-report/page.tsx",
        lineNumber: 38,
        columnNumber: 5
    }, this);
}
_s(BudgetReportPage, "X4WjFv7W+iTO673nqesUW4d9wUU=");
_c = BudgetReportPage;
var _c;
__turbopack_context__.k.register(_c, "BudgetReportPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/app/calendar/page.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, d: __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>CalendarPage)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$fullcalendar$2f$react$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@fullcalendar/react/dist/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$fullcalendar$2f$timegrid$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@fullcalendar/timegrid/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$fullcalendar$2f$interaction$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@fullcalendar/interaction/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Modal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/Modal.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Sidebar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/Sidebar.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$budget$2d$report$2f$page$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/budget-report/page.tsx [app-client] (ecmascript)"); // 🔹レポート画面
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
;
;
;
function CalendarPage() {
    _s();
    // const [isAuthenticated, setIsAuthenticated] = useState(
    //   typeof window !== "undefined" && localStorage.getItem("isAuthenticated") === "true"
    // );
    // const handleLogout = () => {
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const [currentView, setCurrentView] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("calendar");
    const [isOpen, setIsOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [selectedRange, setSelectedRange] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [selectedEvent, setSelectedEvent] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [events, setEvents] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [engagements, setEngagements] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    // ✅ Google Sheets から予定データを取得
    const fetchEventsFromSheets = async ()=>{
        try {
            const userId = localStorage.getItem("userId") || "";
            if (!userId) {
                console.error("❌ ユーザーIDが取得できませんでした");
                return;
            }
            const response = await fetch(`/api/getEvents?userId=${encodeURIComponent(userId)}`);
            if (!response.ok) throw new Error("スプレッドシートのデータ取得に失敗");
            const data = await response.json();
            console.log("✅ /api/getEvents のレスポンス:", data);
            setEvents(data.filter((event)=>event.userId === userId) // ✅ ログインユーザーのデータのみ取得
            .map((event)=>{
                const engagement = engagements.find((e)=>e.name === event.engagement) || {
                    color: "#3788d8"
                };
                return {
                    id: event.id,
                    title: `${event.engagement} - ${event.activity}`,
                    start: new Date(event.start),
                    end: new Date(event.end),
                    backgroundColor: engagement?.color || "#3788d8",
                    borderColor: engagement?.color || "#3788d8",
                    extendedProps: {
                        details: `${event.location} / ${event.details}`
                    }
                };
            }));
        } catch (error) {
            console.error("❌ スプレッドシートからのデータ取得エラー:", error);
        }
    };
    // ✅ 予定をスプレッドシートに保存
    const handleAddEvent = async (data)=>{
        if (!selectedRange) {
            console.error("❌ 選択された範囲がありません！");
            return;
        }
        try {
            const userId = localStorage.getItem("userId") || "";
            const userName = localStorage.getItem("userName") || "Unknown";
            const response = await fetch("/api/saveEvent", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    id: selectedEvent?.id || "",
                    userId,
                    userName,
                    start: selectedRange.start.toISOString(),
                    end: selectedRange.end.toISOString(),
                    engagement: data.engagement,
                    activity: data.activity,
                    location: data.location,
                    details: data.details
                })
            });
            if (!response.ok) throw new Error("スプレッドシートへの保存に失敗");
            console.log("✅ スプレッドシートに保存完了");
            fetchEventsFromSheets();
            setIsOpen(false);
        } catch (error) {
            console.error("❌ スプレッドシートへの保存エラー:", error);
        }
    };
    // ✅ 予定をスプレッドシートで更新
    const handleUpdateEvent = async (data, range)=>{
        if (!range || !selectedEvent) {
            console.error("❌ 更新する範囲またはイベントが未定義です！");
            return;
        }
        try {
            const response = await fetch("/api/updateEvent", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    id: selectedEvent.id,
                    start: range.start.toISOString(),
                    end: range.end.toISOString(),
                    engagement: data.engagement,
                    activity: data.activity,
                    location: data.location,
                    details: data.details
                })
            });
            if (!response.ok) throw new Error("スプレッドシートの更新に失敗");
            console.log("✅ スプレッドシートを更新完了");
            fetchEventsFromSheets();
            setIsOpen(false);
        } catch (error) {
            console.error("❌ スプレッドシートの更新エラー:", error);
        }
    };
    // ✅ 予定がクリックされたときにホップアップを表示
    const handleEventClick = (clickInfo)=>{
        console.log("📅 クリックされたイベント:", clickInfo.event);
        setSelectedEvent({
            id: clickInfo.event.id || "",
            userId: clickInfo.event.extendedProps?.userId || "",
            userName: clickInfo.event.extendedProps?.userName || "Unknown",
            engagement: clickInfo.event.title.split(" - ")[0] || "",
            activity: clickInfo.event.title.split(" - ")[1] || "",
            location: clickInfo.event.extendedProps?.details?.split(" / ")[0] || "",
            details: clickInfo.event.extendedProps?.details?.split(" / ")[1] || "",
            start: clickInfo.event.start?.toISOString() || "",
            end: clickInfo.event.end?.toISOString() || clickInfo.event.start?.toISOString() || ""
        });
        // ✅ `null` の場合は `new Date()` を代入して型エラーを回避
        setSelectedRange({
            start: clickInfo.event.start ?? new Date(),
            end: clickInfo.event.end ?? clickInfo.event.start ?? new Date()
        });
        setIsOpen(true);
    };
    const handleDeleteEvent = async (id)=>{
        console.log("🗑️ 削除する予定の ID:", id);
        try {
            const response = await fetch("/api/deleteEvent", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    id
                })
            });
            if (!response.ok) {
                throw new Error("スプレッドシートの削除に失敗しました");
            }
            console.log("✅ スプレッドシートのデータを削除しました！");
            fetchEventsFromSheets(); // ✅ 削除後に最新のデータを取得
            setIsOpen(false);
        } catch (error) {
            console.error("❌ 削除エラー:", error);
        }
    };
    const handleEventResize = async (resizeInfo)=>{
        console.log("✏️ 予定の時間が変更されました:", resizeInfo.event);
        const updatedEvent = {
            id: resizeInfo.event.id,
            start: resizeInfo.event.start ?? new Date(),
            end: resizeInfo.event.end ?? resizeInfo.event.start ?? new Date(),
            engagement: resizeInfo.event.title.split(" - ")[0] || "",
            activity: resizeInfo.event.title.split(" - ")[1] || "",
            location: resizeInfo.event.extendedProps.details.split(" / ")[0] || "",
            details: resizeInfo.event.extendedProps.details.split(" / ")[1] || ""
        };
        try {
            const response = await fetch("/api/updateEvent", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(updatedEvent)
            });
            if (!response.ok) {
                throw new Error("スプレッドシートの更新に失敗しました");
            }
            console.log("✅ スプレッドシートのデータを更新しました");
            fetchEventsFromSheets(); // 🔹 最新のデータを取得
        } catch (error) {
            console.error("❌ スプレッドシートの更新エラー:", error);
        }
    };
    const handleEventMove = async (eventDropInfo)=>{
        console.log("📌 予定の移動:", eventDropInfo);
        const { event } = eventDropInfo;
        const updatedEvent = {
            id: event.id,
            start: eventDropInfo.event.start ?? new Date(),
            end: eventDropInfo.event.end ?? eventDropInfo.event.start ?? new Date()
        };
        console.log("✅ 更新するデータ:", updatedEvent);
        try {
            const response = await fetch("/api/updateEvent", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(updatedEvent)
            });
            if (!response.ok) {
                throw new Error("スプレッドシートの更新に失敗");
            }
            console.log("✅ スプレッドシート更新完了");
            fetchEventsFromSheets(); // 🔹 更新後、最新の予定を取得
        } catch (error) {
            console.error("❌ スプレッドシートの更新エラー:", error);
        }
    };
    const handleSelect = (arg)=>{
        console.log("📅 選択された範囲:", arg.start, arg.end);
        setSelectedRange({
            start: arg.start,
            end: arg.end
        });
        setSelectedEvent(null);
        setIsOpen(true);
    };
    // ✅ スプレッドシートから Engagement を取得
    const fetchEngagements = async ()=>{
        try {
            const userId = ("TURBOPACK compile-time truthy", 1) ? localStorage.getItem("userId") : ("TURBOPACK unreachable", undefined);
            if (!userId) {
                console.error("❌ ユーザーIDが取得できません！");
                return;
            }
            const response = await fetch(`/api/fetchEngagements?userId=${encodeURIComponent(userId)}`);
            if (!response.ok) throw new Error("エンゲージメントの取得に失敗しました");
            const data = await response.json();
            if (!Array.isArray(data)) {
                console.error("❌ APIのレスポンスが配列ではありません:", data);
                return;
            }
            setEngagements(data);
        } catch (error) {
            console.error("❌ エンゲージメントの取得エラー:", error);
        }
    };
    // ✅ 初回レンダリング時に fetchEngagements を実行**
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CalendarPage.useEffect": ()=>{
            fetchEngagements();
        }
    }["CalendarPage.useEffect"], []); // 🔹 依存配列を `[]` にして初回のみ実行
    // ✅ engagements が更新された後に fetchEventsFromSheets を実行**
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CalendarPage.useEffect": ()=>{
            if (engagements.length > 0) {
                fetchEventsFromSheets();
            }
        }
    }["CalendarPage.useEffect"], [
        engagements
    ]); // 🔹 `engagements` が更新されたときに実行
    // ✅ エンゲージメントを取得したあとにイベントも取得
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CalendarPage.useEffect": ()=>{
            if (engagements.length > 0) {
                fetchEventsFromSheets();
            }
        }
    }["CalendarPage.useEffect"], [
        engagements
    ]);
    // ✅ 初回読み込み時にスプレッドシートのデータを取得
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CalendarPage.useEffect": ()=>{
            if (!localStorage.getItem("isAuthenticated")) {
                router.push("/login");
            } else {
                fetchEngagements();
            }
        }
    }["CalendarPage.useEffect"], [
        router
    ]); // 🔹 `router` に依存するよう修正
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            display: "flex"
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Sidebar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                onSelectView: setCurrentView
            }, void 0, false, {
                fileName: "[project]/src/app/calendar/page.tsx",
                lineNumber: 317,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    marginLeft: "220px",
                    padding: "20px",
                    width: "100%"
                },
                children: currentView === "calendar" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$fullcalendar$2f$react$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            plugins: [
                                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$fullcalendar$2f$timegrid$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
                                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$fullcalendar$2f$interaction$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
                            ],
                            initialView: "timeGridWeek",
                            slotMinTime: "00:00:00",
                            slotMaxTime: "24:00:00",
                            scrollTime: "09:00:00" // デフォルト表示を 9:00 に
                            ,
                            locale: "ja",
                            timeZone: "Asia/Tokyo",
                            slotDuration: "00:15:00",
                            slotLabelInterval: "01:00:00",
                            slotLabelFormat: {
                                hour: "2-digit",
                                minute: "2-digit",
                                hour12: false
                            },
                            selectable: true,
                            editable: true,
                            select: handleSelect,
                            events: events,
                            eventClick: handleEventClick,
                            eventDrop: handleEventMove,
                            eventResize: handleEventResize,
                            headerToolbar: {
                                left: "prev,next today",
                                center: "title",
                                right: "timeGridWeek,timeGridDay"
                            },
                            height: "900px" // ✅ 高さを固定
                        }, void 0, false, {
                            fileName: "[project]/src/app/calendar/page.tsx",
                            lineNumber: 321,
                            columnNumber: 9
                        }, this),
                        isOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Modal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Modal"], {
                            isOpen: isOpen,
                            onClose: ()=>setIsOpen(false),
                            onSubmit: handleAddEvent,
                            onUpdate: handleUpdateEvent,
                            onDelete: handleDeleteEvent,
                            selectedRange: selectedRange,
                            selectedEvent: selectedEvent
                        }, void 0, false, {
                            fileName: "[project]/src/app/calendar/page.tsx",
                            lineNumber: 357,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$budget$2d$report$2f$page$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                        fileName: "[project]/src/app/calendar/page.tsx",
                        lineNumber: 370,
                        columnNumber: 12
                    }, this)
                }, void 0, false)
            }, void 0, false, {
                fileName: "[project]/src/app/calendar/page.tsx",
                lineNumber: 318,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/calendar/page.tsx",
        lineNumber: 316,
        columnNumber: 5
    }, this);
}
_s(CalendarPage, "wjTUPOOosmbSvtDAxGJY3BrE74o=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c = CalendarPage;
var _c;
__turbopack_context__.k.register(_c, "CalendarPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
}]);

//# sourceMappingURL=src_bdb34fc5._.js.map