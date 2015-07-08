var movies = ["hulk", "bad boys","bad boys2", "spy", "town", "house", "city", "new york", "american history", "batman"];

function capitalize(str) {
     if (!str || typeof str !== "string") {
         return '';
     } 
     return str[0].toUpperCase() + str.slice(1);
 }


for(var i=0; i< movies.length; i++ ){
  
  var moviesPieces = movies[i].split(' ');
  
  for (var j=0; j< moviesPieces.length; j++){
    
    moviesPieces[j] =  capitalize(moviesPieces[j]); //i is the element, j is the letter.
  }
  
  movies[i] = moviesPieces.join(' ');
}


console.log(movies);