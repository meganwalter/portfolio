var myProjs = [];

function Project(articleObj) {
  this.name = articleObj.name;
  this.pubdate = articleObj.pubdate;
  this.img = articleObj.img;
  this.body = articleObj.body;
}

Project.prototype.toHtml = function() {
  var projectTemp = $('#project-template').html();
  var compiledTemp = Handlebars.compile(projectTemp);
  return compiledTemp(this);
};

projects.forEach(function(obj) {
  myProjs.push(new Project(obj));
});

myProjs.forEach(function(a) {
  $('#article-view').append(a.toHtml());
});
