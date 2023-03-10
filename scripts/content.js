setTimeout(() => {

    const jobListContainer = document.querySelector(".scaffold-layout__list-container");

    const jobsList = jobListContainer.querySelectorAll(".jobs-search-results__list-item")

    for (let i = 0; i < jobsList.length; i++) {
        const currentJob = jobsList[i];
        const currentJobListElements = currentJob.getElementsByTagName("li");
        // console.log(jobsList.length, currentJobListElements.length);

        for (let j = 0; j < currentJobListElements.length; j++) {
            if (currentJobListElements[j].innerText.toLocaleLowerCase() === "promoted") {
                const catImageTest = new Image(486, 107)
                catImageTest.src = chrome.runtime.getURL("../images/cat.jpg");
                currentJob.replaceChildren(catImageTest);
                currentJob.appendChild
            }
        }
        // for(let j = 0; j < currentJob.length)

    }

}, 4000)


/*


1. loop through JobsList for list items and look innnerHtml of "promoted" for deleting.
2. remove all child elements with replaceChildren this should remove all children thus removing unwanted list items.
2.5 replace with cat pic in image tag. this is 2.5 because replace happens same time as child killing.


*/