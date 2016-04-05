(function(module) {

  var repos = {};

  repos.all = [];

  repos.getRepos = function(callback) {

    $ajax({
      url: 'https://api.github.com/user/repos',
      type: 'GET',
      headers: {
        'Authorization': 'token ' + repoToken
      },
      success: function(data) {
        console.log(data);
        repos.all.push(data);
        callback();
      },

      error: function(request, status, error) {
        console.dir(request);
        console.log('status: ' + status, 'error: ' + error);
      },
    });

  }

  module.repos = repos;

})(window);
