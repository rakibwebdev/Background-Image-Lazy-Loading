//Background image lazy load
    const loadScripts_PreloadTimer = setTimeout(triggerScriptLoader_Preload, 8e3),
        userInteractionEvents_Preload = [
            "mouseover",
            "keydown",
            "touchstart",
            "touchmove",
            "wheel",
        ];
    function triggerScriptLoader_Preload() {
        document.querySelector("html").classList.add("is-active-page"),
            clearTimeout(loadScripts_PreloadTimer);
    }
    userInteractionEvents_Preload.forEach(function (e) {
        window.addEventListener(e, triggerScriptLoader_Preload, {
            passive: !0,
        });
    });
