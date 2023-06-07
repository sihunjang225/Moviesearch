const submain = document.getElementById("submain");
const titleP = document.getElementById("titleP");
const urlParams = new URLSearchParams(window.location.search);
const baseUrl = "https://api.themoviedb.org/3/movie/";
const searchUrl =urlParams.get('id')
const apiKey ="?api_key=ad896f181b664e3c71e0096a111a52f2"
const searchKey =baseUrl+searchUrl+apiKey
const imgUrl = "https://image.tmdb.org/t/p/w500";

function getColor(vote) {
    if (vote >= 8) {
      return "green";
    } else if (vote >= 5) {
      return "orange";
    } else {
      return "red";
    }
  }

console.log(searchKey)
const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwMTY4YWE2MWUyODZiMWIwY2FkODYxMTE4NjM0ZjNhYiIsInN1YiI6IjY0NzQ0YjExZGQ3MzFiMmQ3NzlhYTZhOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.mlZJKOID6Eo7TgzA_jXlHoF65M2HRJ74FiOq4AxlVB8'
    }
};

function getMovies(){
    fetch(searchKey, options)
        .then(response => response.json())
        .then(response => {
            console.log(response)
            let title = response.title
            let poster_path = response.poster_path
            let vote_average = response.vote_average
            let id = response.id
            let overview = response.overview
            let tagline = response.tagline
            let release_date = response.release_date

            console.log(title,id,vote_average,poster_path,overview)
            
            const movieE1 = document.createElement("div");
            movieE1.classList.add("movie");
            movieE1.innerHTML = 
                              `
                              <div class="container py-4 mw-100 ">
                                <div class="p-5 mb-4  rounded-3" id='card_main' >
                                  <div class="col-md-3">
                                    <img src="${imgUrl +  poster_path}" class="mw-100 rounded-3 " alt="${title}}">
                                  </div>
                                  <div class="col-md-7">
                                    <h1 class="h1title">${title}</h1>
                                    <p class="fs-2">${tagline} </p>
                                    <p class="fs-2"> release_date : ${release_date} </p>
                                    <p class="poverview">${overview}</p>
                                    <button onclick="location.href='http://127.0.0.1:5500/index.html'" ></button>
                                  </div>
                                </div>
                              </div>`;
            submain.appendChild(movieE1);
            titleP.innerHTML=`${title}`
        })
        .catch((err) => console.error(err));
    }

getMovies()