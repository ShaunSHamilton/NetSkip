let mutationObserver = new MutationObserver(function (mutations) {
    mutations.forEach(function (mutation) {
        if (mutation.target.className === 'PlayerControlsNeo__layout PlayerControlsNeo__layout--inactive' || mutation.target.className === 'PlayerControlsNeo__layout PlayerControlsNeo__layout--active') {
            if (mutation.addedNodes.length > 0 && mutation.addedNodes[0].textContent === 'Skip Intro') {
                mutation.target.firstElementChild.firstElementChild.click();
            }
        }
    });
});
mutationObserver.observe(document.documentElement, {
    attributes: true,
    characterData: false,
    childList: true,
    subtree: true,
    attributeOldValue: true,
    characterDataOldValue: false
});