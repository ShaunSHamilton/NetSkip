// document.addEventListener('DOMContentLoaded', function () {
//     const toggle = document.querySelector('input');
//     toggle.addEventListener('click', handleToggle);
// });

// let isToggled = true;

// function handleToggle() {
//     isToggled = !isToggled;
//     document.querySelector('h3').innerHTML = isToggled ? 'Active' : 'Disabled';
// }


//-----------------------------------------
// let isExtensionOn = true;

// function disableButton() {
//     const toggle = document.getElementById("disableButton");
//     const state = document.querySelector('h3')
//     if (state.innerHTML === "Disabled") {
//         isExtensionOn = false;
//     } else if (state.innerHTML === "Active") {
//         isExtensionOn = true;
//     } else {
//         alert("Error");
//     }
// }

// document.addEventListener('DOMContentLoaded', function () {
//     const state = document.querySelector('h3')

//     //Send message to event.js (background script) telling it to disable the extension.

//     chrome.extension.sendMessage({ cmd: "setOnOffState", data: { value: isExtensionOn } });

//     chrome.extension.sendMessage({ cmd: "getOnOffState" }, function (response) {
//         if (response !== undefined) {
//             if (response) {
//                 state.innerHTML = "Disabled";
//             }
//             else {
//                 state.innerHTML = "Active";
//             }
//         }
//     });
// });

//-----------------------------------------------------------------------------
document.addEventListener('DOMContentLoaded', function () {
    let backgroundPage;
    let state = document.querySelector("h3");
    let toggle = document.querySelector('input')


    function updateButton(onOrOff) {
        state.innerHTML = onOrOff ? "Active" : "Disabled";
        toggle.checked = onOrOff;
        chrome.browserAction.setIcon = onOrOff ? 'images/logo.png' : 'images/disabledLogo.png';
    }

    function toggleButton() {
        backgroundPage.isExtensionOn = !backgroundPage.isExtensionOn;
        updateButton(backgroundPage.isExtensionOn);
    }

    chrome.runtime.getBackgroundPage(function (bgPage) {
        backgroundPage = bgPage;
        updateButton(bgPage.isExtensionOn);
        toggle.onclick = toggleButton;
    });
})