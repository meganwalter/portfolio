(function(module) {

  function Project(articleObj) {
    this.name = articleObj.name;
    this.pubdate = articleObj.pubdate;
    this.img = articleObj.img;
    this.body = articleObj.body;
  }

  function Skills(data) {
    this.skill = data.skill;
    this.years = data.years;
  }

  Skills.all = [];

  Skills.prototype.render = function() {
    var skillTemp = $('#skills-template').html();
    var compileSkill = Handlebars.compile(skillTemp);
    return compileSkill(this);
  };

  Skills.print = function(data) {
    data.forEach(function(obj) {
      Skills.all.push(new Skills(obj));
    });

    Skills.all.forEach(function(b) {
      $('#skills-page').append(b.render());
    });

  };

  Skills.months = function() {
    Skills.all.map(function(skill) {
      console.log(skill.years);
      return skill.years;
    }).reduce(function(months, year) {
      months.push(year * 12);
      console.log(months);
      return months;
    }, []);
  };

  Skills.months();

  Skills.getSkills = function() {
    console.log("this works");
    if (localStorage.skills) {
      Skills.print(JSON.parse(localStorage.skills));
    } else {
      $.getJSON('../data/sample.json', function(data) {
        localStorage.setItem('skills', JSON.stringify(data));
        Skills.print(data);
        console.log(data);
      }).fail(function() {
        console.log('fail');
      }).done(function() {
        console.log('done');
      });
    }
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
      }).fail(function() {
        console.log('fail');
      }).done(function() {
        console.log('done');
      });
    }
  };

  module.Project = Project;
  module.Skills = Skills;
})(window);
