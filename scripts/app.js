function Project(articleObj) {
  this.name = articleObj.name;
  this.pubdate = articleObj.pubdate;
  this.img = articleObj.img;
  this.body = articleObj.body;
}

Project.all = [];

Project.prototype.toHtml = function() {
  var projectTemp = $('#project-template').html();
  var compiledTemp = Handlebars.compile(projectTemp);
  return compiledTemp(this);
};

Project.loadAll = function(projects) {

  projects.forEach(function(obj) {
    Project.all.push(new Project(obj));
  });
  Project.all.forEach(function(a) {
    $('#article-view').append(a.toHtml());
  });
};

Project.fetchAll = function() {
  console.log("this works");
  if (localStorage.projects) {
    Project.loadAll(JSON.parse(localStorage.projects));
  } else {
    $.getJSON('../data/articles.json', function(data) {
      localStorage.setItem('projects', JSON.stringify(data));
      Project.loadAll(data);
      console.log(data);
    }).fail(function(){
      console.log('fail');
    }).done(function() {
      console.log('done');
    });
  }
};
