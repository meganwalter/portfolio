page('/', home);
page('/about', aboutController.index);
page('/projects', projectsController.index);
page('/skills', skillsController.index);
page('/contact', contact);

function home() {
  $('.tab-content').hide();
  $('#home').fadeIn(500);
};

function contact() {
  $('.tab-content').hide();
  $('#contact').fadeIn(500);
};

page();
