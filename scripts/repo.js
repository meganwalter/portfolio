(function(module) {

  var repos = {};

  repos.all = [];

  repos.getRepos = function(callback) {

    $.ajax({
      url: 'https://api.github.com/user/repos',
      type: 'GET',
      headers: {
        'Authorization': 'token ' + repoToken
      },
      success: function(data) {
        console.log(data);
        repos.all = data;
      },

      error: function(request, status, error) {
        console.dir(request);
        console.log('status: ' + status, 'error: ' + error);
      },
    });

    repos.with = function(attr) {
    return repos.all.filter(function(repo) {
      return repo[attr];
    });
    };
  };

  module.repos = repos;

})(window);
