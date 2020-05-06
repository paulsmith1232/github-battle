export function fetchPopularRepos(language) { //hits the github API
  const endpoint = window.encodeURI(`https://api.github.com/search/repositories?q=stars:>1+language:${language}&sort=stars&order=desc&type=Repositories`)

return fetch(endpoint) // makes the request; enpoint returns a promise
.then((res) => res.json()) // response turned into json
.then((data) => { 
  if (!data.items) { // true if an error with the request
    throw new Error(data.message) // error not caught here because nothing meaningful can be done for the user here    
  }

  return data.items
})
}