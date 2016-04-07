(function(module) {

  var repos = {};

  repos.all = [];

  repos.getRepos = function(callback) {

    $.ajax({
      url: 'github/user/repos',
      type: 'GET',
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
