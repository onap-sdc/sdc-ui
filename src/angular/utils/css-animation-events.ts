// Function from David Walsh: http://davidwalsh.name/css-animation-callback
export function whichTransitionEvent(){
    const el = document.createElement("fakeelement");

    const transitions = {
        "transition"      : "transitionend",
        "OTransition"     : "oTransitionEnd",
        "MozTransition"   : "transitionend",
        "WebkitTransition": "webkitTransitionEnd"
    };

    const key = Object.keys(transitions).find((key)=> el.style[key] !== undefined);

    return transitions[key] || null;
}
