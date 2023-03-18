let isLogoDefault = true;
document.querySelector(".button").addEventListener("click", async () => {
    const [tab] = await chrome.tabs.query({ active: true, lastFocusedWindow: true });
    await chrome.tabs.sendMessage(tab.id, isLogoDefault)
    isLogoDefault = !isLogoDefault;
})