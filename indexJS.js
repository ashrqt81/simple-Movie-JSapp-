const api_url='https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=e7d0706d4c3890f3459a4b51a34ac4eb&page=1'
///discover/movie?sort_by=popularity.desc
const img_path='https://image.tmdb.org/t/p/w500'
//https://image.tmdb.org/t/p/w500/kqjL17yufvn9OVLyXYpvtyrFfak.jpg
//"/y5Z0WesTjvn59jP6yo459eUsbli.jpg",
const search_api='https://api.themoviedb.org/3/search/movie?&api_key=e7d0706d4c3890f3459a4b51a34ac4eb&query="'//concatenate search word 

const searchInput=document.querySelector('input')
const searchForm=document.querySelector('form')
const main=document.getElementById('main')


async function getmovies(url){
  const data=  await fetch(url)
 const jsonData=await data.json();

displayMovies(jsonData.results)
}
getmovies(api_url)

function displayMovies(movies){
    main.innerHTML='' //without clear the screen will add to existing items
    movies.forEach((movie)=>{
   
    
 //get properties from api object
 const title=movie.title;
 const img= movie.poster_path;
 const movieRate= movie.vote_average;
 const overview=movie.overview;
 //create element
 const movieEl=document.createElement('div');
 //add css class
movieEl.classList.add('movie');

movieEl.innerHTML=`
<img src="${img_path +img}">
<div class='movie-details'>

    <h3>${title}</h3>
    <span class='${rateColor(movieRate)}'> ${movieRate}</span>
</div>
<div class="overview">
  ${overview}
</div>
`
main.appendChild(movieEl)
})
}

//search
searchForm.addEventListener('submit',function(e){
   e.preventDefault();
  const searchKeyword= searchInput.value;
  if(searchKeyword !==''){
    console.log('o')
    getmovies(search_api + searchKeyword)
  }else{
   window.location.reload();
  }

})

function rateColor(rate){
   if(rate >=8){
    return 'red'
   } if(rate>=5){
   return 'green'
   }else{
    return 'yellow'
   }
}
  


