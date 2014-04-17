+function ($) {
  'use strict';

  $('.change-brand').on('click', 'a', function(e){
    var brand = $(e.target).closest('a').attr('class');
    $('body').attr('class', brand);
  });

}(jQuery);
