console.log("Career Guidance Website Loaded Successfully");
console.log("Header Loaded Successfully");

let btn = document.getElementById("topBtn");

window.onscroll = function () {
    if (document.documentElement.scrollTop > 300) {
        btn.style.display = "block";
    } else {
        btn.style.display = "none";
    }
};

btn.onclick = function () {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
};
// Search functionality
let searchInput = document.getElementById("searchInput");
let searchBtn = document.getElementById("searchBtn");
let searchMessage = document.getElementById("searchMessage");

searchBtn.onclick = function () {

    let searchText = searchInput.value.toLowerCase().trim();

    if (searchText === "") {
        searchMessage.innerText = "Please enter something to search.";
        return;
    }

    if (searchText.includes("career") || searchText.includes("engineering") ||
        searchText.includes("medical") || searchText.includes("commerce") ||
        searchText.includes("government")) {

        document.getElementById("career").scrollIntoView({
            behavior: "smooth"
        });

        searchMessage.innerText = "Career section found!";
    }

    else if (searchText.includes("skill") || searchText.includes("programming") ||
             searchText.includes("communication") || searchText.includes("personality")) {

        document.getElementById("skills").scrollIntoView({
            behavior: "smooth"
        });

        searchMessage.innerText = "Skills section found!";
    }

    else if (searchText.includes("college") || searchText.includes("engineering") ||
             searchText.includes("diploma") || searchText.includes("pharmacy") ||
             searchText.includes("12th") || searchText.includes("10th")) {

        document.getElementById("college").scrollIntoView({
            behavior: "smooth"
        });

        searchMessage.innerText = "College and education section found!";
    }

    else {
        searchMessage.innerText =
            "Sorry, we couldn't find anything related to your search.";
    }
};
