(function(module) {
  var aboutController = {};

  var render = Handlebars.compile($('#repo-template').text());
  var ui = function() {
    $('.tab-content').hide();
    $('#about').fadeIn(500);
  };

  aboutController.index = function() {
    ui();
    $('#repolist').append(
      repos.all.map(render);
    );
  };

  module.aboutController = aboutController;
})(window);
