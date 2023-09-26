
const API_URL_SEARCH="http://www.omdbapi.com/?apikey=5f3197d6&t=";

 var search_input= document.getElementById("search-input");
 var card= document.getElementsByClassName("movie-cards")[0];
   
 document.getElementsByClassName("search")[0].addEventListener("click",function(){
console.log(search_input.value);
const query=search_input.value;
if(query){
    getMovies(API_URL_SEARCH+query);
}
 });

  async function getMovies(url){
    const resp= await fetch(url);
    const respData= await resp.json();
    console.log(respData);
    showMovies(respData);
  }

  function showMovies(movie){
    card.innerHTML="";
    if(movie){
      movie_display(movie);
    } else {
      console.log("not found")
    }
  }
  function movie_display(imovie){
    const movieElm=document.createElement("div");
    movieElm.classList.add("movie-card");
    movieElm.innerHTML=`
    <div class ="card">
        <img src="${imovie.Poster}" alt="poster" width="300px" height="300px"/>
        <br>
        <div class="movie-description">
        <span class="movie-title><b>Title</b><span class="value">${imovie.Title}</span></span>
        <span class="movie-title><b>Title</b><span class="value">${imovie.imdbRating}</span></span>
        <span class="movie-title><b>Title</b><span class="value">${imovie.Director}</span></span>
        <span class="movie-title><b>Title</b><span class="value">${imovie.Released}</span></span>
        <span class="movie-title><b>Title</b><span class="value">${imovie.Genre}</span></span>
        
        </div>
    </div>`;
    card.appendChild(movieElm);
  }
  