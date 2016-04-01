(function(module) {
  var projectsController = {};
  Project.fetchAll();
  projectsController.index = function() {
    $('.tab-content').hide();
    $('#articles').fadeIn(500);
  };

  module.projectsController = projectsController;
})(window);
