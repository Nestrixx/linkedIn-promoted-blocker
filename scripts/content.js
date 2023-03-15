const newConfig = { attributes: false, childList: true, subtree: true }

const replaceAds = () => {
    const jobList = document.querySelector(".scaffold-layout__list-container")
    if (jobList) {
        const jobListContainer = document.querySelector(".scaffold-layout__list-container");

        const jobsList = jobListContainer.querySelectorAll(".jobs-search-results__list-item")

        for (let i = 0; i < jobsList.length; i++) {
            const currentJob = jobsList[i];
            const currentJobListElements = currentJob.getElementsByTagName("li");

            for (let j = 0; j < currentJobListElements.length; j++) {
                if (currentJobListElements[j].innerText.toLocaleLowerCase() === "promoted") {
                    const catImageTest = new Image(486, 107)
                    catImageTest.src = chrome.runtime.getURL("../images/logo.png");
                    currentJob.replaceChildren(catImageTest);
                }
            }
        }
    }
}

// this could be an arrow function inside of the Mutation Observer.
const observer = new MutationObserver(replaceAds);
observer.observe(document, newConfig);