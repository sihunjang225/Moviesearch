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
            let title = response.title
            let poster_path = response.poster_path
            let vote_average = response.vote_average
            let id = response.id
            let overview = response.overview

            console.log(title,id,vote_average,poster_path,overview)
            
            const movieE1 = document.createElement("div");
            movieE1.classList.add("movie");
            movieE1.innerHTML = `
            <img src="${imgUrl + poster_path}" alt="${title}"/>
            <div class="movie-info">
                <h3>${title}</h3>
                <span class="${getColor(vote_average)}">${vote_average}</span>
                </div>
                <div class="overview">
                <h3>Overview</h3>
                ${overview}
            </div>
            </div>`;
            submain.appendChild(movieE1);
            titleP.innerHTML=`${title}`
        })
        .catch((err) => console.error(err));
    }

getMovies()