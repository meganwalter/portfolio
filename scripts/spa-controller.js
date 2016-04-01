page('/', home);
page('/about', about);
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

function about() {
  $('.tab-content').hide();
  $('#about').fadeIn(500);
};

page();
