var getUserRepos = function(user) {
  // format teh github api url
  var apiUrl = "https:api.github.com/users/"+user+"/repos";

  // make a request
  fetch(apiUrl).then(function(response) {
    response.json().then(function(data) {
      console.log(data);
    })
  })
};

getUserRepos();