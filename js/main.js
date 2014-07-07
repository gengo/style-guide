(function ($) {
  'use strict';

  $('.change-brand').on('click', 'a', function(e){
    console.log("hoge")
    var brand = $(e.target).closest('a').attr('class');
    $('body').attr('class', brand);
  });
  $(document).ready(function() {
    $('.dropdown-select-search').multiselect({
      enableFiltering:true
    });
    $('.dropdown-select').multiselect({
    });
  });

})(jQuery);
