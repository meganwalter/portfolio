(function(module) {
  var skillsController = {};
  Skills.getSkills();
  skillsController.index = function() {
    $('.tab-content').hide();
    $('#skills').fadeIn(500);
  };

  module.skillsController = skillsController;
})(window);
