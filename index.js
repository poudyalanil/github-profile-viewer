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
    let repoEndPoint;

    let tableItems = document.querySelector(".tableItems");

    // let repoTitle = document.querySelector("#repoTitle");
    // let dateCreated = document.querySelector("#dateCreated");
    // let language = document.querySelector("#language");
    // let repoUrl = document.querySelector("#repoUrl");






    let twitter = document.querySelector(".twitter");

    submitBtn.addEventListener("click", () => {

        getInfo(inputText.value);
        profileSection.style.display = "block";


    });

    async function getInfo(username) {

        let endpoint = await fetch(`https://api.github.com/users/${username}`);
        let info = await endpoint.json();
        if (info.message != "Not Found") {
            // inputSection.style.display = "none";
            // console.log(info)
            profileImage.src = info.avatar_url;
            userId.textContent = info.login;
            fullName.textContent = info.name;
            detail.textContent = info.bio;


            twitterUserName = "https://twitter.com/" + info.twitter_username;
            if (twitterUserName.length > 10) {
                twitter.href = twitterUserName;
            } else {
                twitter.display = "none"; q
            }
            badge.textContent = info.public_repos;


            getRepoInfo(info.repos_url);



        } else {
            alert("User Name Incorrect")
        }


    }
    async function getRepoInfo(repo) {
        fetch(repo).then(data => data.json()
            .then(data => {
                tableItems.innerHTML = ""
                console.log(data)
                for (var i = 1; i <= data.length; i++) {
                    tableItems.innerHTML +=
                        '<tr>' +
                        '<td>' + i + '</td>' +
                        '<td>' + data[i].name + '</td>' +
                        '<td>' + data[i].created_at + '</td>' +
                        '<td>' + data[i].language + '</td>' +
                        '<td> <a target="_blank" href = "' + data[i].html_url + '">Click Here</a></td>'

                        + '</tr>'




                        ;
                }

            })

        )

    };


});

