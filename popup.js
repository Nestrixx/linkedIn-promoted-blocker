window.addEventListener("DOMContentLoaded", async () => {
    const [tab] = await chrome.tabs.query({ active: true, lastFocusedWindow: true });
    const response = chrome.tabs.sendMessage(tab.id, true, {}, () => {
    })
})
