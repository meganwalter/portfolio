var myProjs = [];

function Project(articleObj) {
  this.name = articleObj.name;
  this.pubdate = articleObj.pubdate;
  this.body = articleObj.body;
}

Project.prototype.toHtml = function() {
  var $newProject = $('article.template').clone();
  $newProject.find('h1').html(this.name);
  $newProject.find('time[pubdate]').attr('datetime', this.pubdate);
  $newProject.find('.article-body').html(this.body);
  $newProject.append('<hr>');
  $newProject.removeClass('template');
  return $newProject;
};

projects.forEach(function(obj) {
  myProjs.push(new Project(obj));
});

myProjs.forEach(function(a) {
  $('#articles').append(a.toHtml());
});
