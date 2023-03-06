setTimeout(() => {

    const jobList = document.querySelector(".scaffold-layout__list-container");
    const jobs = Array.from(jobList.getElementsByTagName('li'));

    for (let i = 0; i < jobs.length; i++) {
        const currentJob = jobs[i];
        if (currentJob.innerText.toLowerCase() === "promoted") {
            for (let j = i; j >= 0; j--) {
                const parentJob = jobs[j];
                // console.log(parentJob);
                // console.log(parentJob.className.split(' '));
                const shouldDeleteJob = parentJob.className.split(' ').includes("ember-view")
                if (shouldDeleteJob) {
                    console.log("second if check")
                    // parentJob.style.display = "none";
                    currentJob.style.color = "white";
                }
            }
        }
        // console.log(currentJob);
    }
    document

    // const footerList = jobs.getElementsByTagName('ul');
    // console.log(jobList?.length); 
}, 4000)


/*

check the innertext for "promoted"
go back in the loop to look for parent
check to see if classname equals wrapper *** if wrapper is the same across the board for li's


*/