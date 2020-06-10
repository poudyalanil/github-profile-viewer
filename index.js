window.addEventListener('load', () => {
    let inputText = document.querySelector("#userNameInput");
    let submitBtn = document.querySelector("#submitBtn");
    var profileSection = document.querySelector(".profileSection")
    profileSection.style.display = "none";
    var inputSection = document.querySelector(".inputSection")
    let profileImage = document.querySelector(".profileImge");

    let userId = document.querySelector("#userId");
    let fullName = document.querySelector("#fullName");
    let detail = document.querySelector("#detail")
    let badge = document.querySelector(".badge")


    let twitter = document.querySelector(".twitter");

    submitBtn.addEventListener("click", () => {
        console.log("clicked");
        getInfo(inputText.value);
        profileSection.style.display = "block";


    });

    async function getInfo(username) {

        let endpoint = await fetch(`https://api.github.com/users/${username}`);
        let info = await endpoint.json();
        if (info.message != "Not Found") {

            // inputSection.style.display = "none";
            console.log(info)
            profileImage.src = info.avatar_url;
            userId.textContent = info.login;
            fullName.textContent = info.name;
            detail.textContent = info.bio;
            twitterUserName = "https://twitter.com/" + info.twitter_username;
            if (twitterUserName.length > 10) {
                twitter.href = twitterUserName;
            } else {
                twitter.display = "none";
            }
            badge.textContent = info.public_repos;

        } else {
            alert("User Name Incorrect")
        }


    }


});

