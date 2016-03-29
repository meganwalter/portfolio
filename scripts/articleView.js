(function(module){

  var articleView = {};

  articleView.mainNav = function() {
    $('nav').on('click', 'li', function() {
      $('.tab-content').hide();
      $('#' + $(this).data('content')).fadeIn(500);
    });

    $('nav ul li:last').click();
  };

  module.articleView = articleView;

})(window);
