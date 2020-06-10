window.addEventListener('load', () => {
    let inputText = document.querySelector("#userNameInput");
    let submitBtn = document.querySelector("#submitBtn");
    var profileSection = document.querySelector(".profileSection")
    profileSection.style.display = "none";
    var inputSection = document.querySelector(".inputSection")
    let profileImage = document.querySelector(".profileImge");

    let userId = document.querySelector("#userId");
    let fullName = document.querySelector("#fullName");


    submitBtn.addEventListener("click", () => {
        console.log("clicked");
        getInfo(inputText.value);
        profileSection.style.display = "block";


    });

    async function getInfo(username) {
        let endpoint = await fetch(`https://api.github.com/users/${username}`);
        let info = await endpoint.json();
        // inputSection.style.display = "none";
        console.log(info)
        profileImage.src = info.avatar_url;
        userId.textContent = info.login;
        fullName.textContent = info.name;


    }


});

