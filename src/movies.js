// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.

const movies = require("./data");

// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(array) {
  const arrayOfDirectors = array.map((oneDirector) => {
    return oneDirector.director
  })
  return arrayOfDirectors
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(array) {
  const allDramaBySpielberg = array.filter((dramaAndSpielberg) => {
    return dramaAndSpielberg.director === "Steven Spielberg"  && dramaAndSpielberg.genre.includes('Drama');
    });
  return allDramaBySpielberg.length
}


// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(array) {
    const average = array.reduce((acc, elem) => {
      return acc + elem.score / array.length
    }, 0)
    return average
 }


// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(array) {
  const allDrama = array.filter((drama) => {
    return drama.genre.includes('Drama');
    });

    return allDrama.score
  }
/*
    const average = array.reduce((acc, elem) =>{
      return acc + allDrama.score / array.length
    }, 0)

    return average;
}
*/
// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(array) {
  const copySortedByYear = JSON.parse(JSON.stringify(array)).sort((a, b) => {
    return a.year - b.year;
   
      });
 return copySortedByYear

    
}
  /*
    if (a.year > b.year) {
      return -1;
    }
    return 1;
  });
  return copySortedByYear
}
*/

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(array) {
  const sortedAlph = JSON.parse(JSON.stringify(array)).sort((a, b) => {
    if (a.title === b.title) return 0;
  
    if (a.title > b.title) {
      return 1;
    }
    return -1;
  });
  return sortedAlph;
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes() {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg() {}



// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = {
    getAllDirectors,
    howManyMovies,
    scoresAverage,
    dramaMoviesScore,
    orderByYear,
    orderAlphabetically,
    turnHoursToMinutes,
    bestYearAvg,
  };
}
