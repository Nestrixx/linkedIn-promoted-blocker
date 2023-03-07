setTimeout(() => {

    const jobListContainer = document.querySelector(".scaffold-layout__list-container");

    const jobsList = jobListContainer.querySelectorAll(".jobs-search-results__list-item")

    for (let i = 0; i < jobs.length; i++) {
        const currentJob = jobs[i];
        const listItemHeight = currentJob.offsetHeight;
        const listItemWidth = currentJob.offsetWidth;

        let z = 1000;
        // if (currentJob.innerText.toLowerCase() === "promoted") {
        //     for (let j = i; j >= 0; j--) {
        //         const parentJob = jobs[j];
        //         // console.log(parentJob);
        //         // console.log(parentJob.className.split(' '));
        //         const shouldDeleteJob = parentJob.className.split(' ').includes("ember-view")
        //         // parentJob.style.display = "none";
        //         if (shouldDeleteJob) {
        //             console.log(parentJob);
        //             // currentJob.replaceChildren();
        //         }
        //     }
        // }
        // console.log(currentJob);
    }

    // const footerList = jobs.getElementsByTagName('ul');
    // console.log(jobList?.length); 
}, 8000)


/*


1. loop through JobsList for list items and look innnerHtml of "promoted" for deleting.
2. remove all child elements with replaceChildren this should remove all children thus removing unwanted list items.
2.5 replace with cat pic in image tag. this is 2.5 because replace happens same time as child killing.


*/