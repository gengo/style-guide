(function ($) {
  'use strict';

  $('.change-brand').on('click', 'a', function(e){
    var brand = $(e.target).closest('a').attr('class');
    $('body').attr('class', brand);
  });
  $(document).ready(function() {
    $('.dropdown-select-search').multiselect({
      enableFiltering:true
    });
    $('.dropdown-select').multiselect({
    });
    $.fn.editable.defaults.mode = 'inline';
    $('#username').editable();
  });

})(jQuery);
