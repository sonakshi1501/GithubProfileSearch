document.getElementById('loader').style.display = "none" // for visibility
document.getElementById('btn').style.display = "block"

document.getElementById('btn').addEventListener('click', showGithubUserProfile)


function showGithubUserProfile() {
    document.getElementById('loader').style.display = "block" // for visibility
document.getElementById('btn').style.display = "none"
    let username = document.getElementById('gusername').value

    let url = 'https://api.github.com/users/' + username
    fetch(url).then(res => res.json()).then(data => {
        if (data.message) {
            document.getElementById('res').innerHTML = `
            <h3>Profile Not Found</h3>
            `

        } else {

            document.getElementById('res').innerHTML = `
            <img src="${data.avatar_url}" class="img-fluid rounded-circle" >
            <p>${data.name} (${data.login})</p>
            <p>${data.bio}</p>
            `
            document.getElementById('result').innerHTML = `
            <div class="col-md-6" >
                <div class="card" >
                    <a id="github" class="mx-5"  href="${data.html_url}" target="_blank"> 
                    <i class="bi bi-globe2" style="font-size:140%"></i>
                    </a> 
                </div> 
            </div>
            <div class="col-md-6">
                <div class="card">
                    <a id="github" class="mx-5" href="${data.blog}" target="_blank"> 
                    <i class="bi bi-github" style="font-size:140%"></i>
                    </a>
                </div>
            </div>
            <hr>
            `
            document.getElementById('myCard').innerHTML = `
            <div class="col-md-4">
                        <div class="card">
                        
                            <a href="${data.public_repos}">
                                <i class="bi bi-github"></i>Repost
                            </a>

                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="card">
                            <a href="${data.followers}">
                                <i class="bi bi-people-fill"></i>Followers
                            </a>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="card">
                            <a href="${data.following}">
                                <i class="bi bi-person-fill"></i>Following
                            </a>
                        </div>
                    </div>
                    `
        }
        document.getElementById('loader').style.display = "none" // for visibility
        document.getElementById('btn').style.display = "block"

    }).catch(err => {
        console.log(err)
    })


}
