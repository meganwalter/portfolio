(function(module) {
  var aboutController = {};

 var render = Handlebars.compile($('#about-template').text());

  // var render = function (repo) {
  //   var temp = Handlebars.compile($('#about-template').html());
  //   return temp(repo);
  // };

  var ui = function() {
    $('.tab-content').hide();
    $('#about').fadeIn(500);
  };

  aboutController.index = function() {
    ui();
    repos.getRepos();
    repos.all.map(function(repo) {
      if(!repo.private) {
        $('#repolist').append(render(repo));
      } else {
        console.log('private = true ' + repo.name);
      }
    });

  };

  module.aboutController = aboutController;
})(window);
