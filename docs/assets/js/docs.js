(function($) {
  'use strict';

  // Scrollspy
  var $window = $(window);
  var $body   = $(document.body);

  $body.scrollspy({
    target: '.ge-nav'
  })
  $window.on('load', function() {
    $body.scrollspy('refresh');
  });

  // Kill links
  $('.container [href=#]').click(function(e) {
    e.preventDefault();
  });

  // Sidenav affixing
  setTimeout(function () {
    var $sideBar = $('.ge-nav > .ge-nav-stacked');

    if ($sideBar.length === 0) {
      return;
    }

    $sideBar.affix({
      offset: {
        top: $sideBar.offset().top,
        bottom: $sideBar.offset().top
      }
    });
  }, 100);


  $('.change-brand').on('click', 'a', function(e) {
    var brand = $(e.target).closest('a').attr('class');
    $('body').attr('class', brand);
  });

  $(document).ready(function() {
    $('.dropdown-select-search').multiselect({
      enableFiltering:true
    });

    $('.dropdown-select').multiselect({});
    /*
     * X-Editable
     */
    $.fn.editable.defaults.mode = 'inline';
    // simple text field
    $('#username').editable();

    // ------ empty  text field, required ----------
    $('#firstname').editable({
      validate: function(value) {
        if ($.trim(value) === '') {
          return 'This field is required';
        }
      }
    });
  });

  // ------ select, local array, custom display --
  $.fn.editable.defaults.mode = 'inline';
  $('#gender').editable({
    prepend: 'not selected',
    source: [
      { value: 1, text: 'Male' },
      { value: 2, text: 'Female' }
    ]
  });

  $('#group').editable({
     showbuttons: false
  });

  $('#status').editable();

  // $.fn.editable.defaults.mode = 'inline';
  $('#dob').editable();

  $('#event').editable({
    placement: 'right',
    combodate: {
      firstItem: 'name'
    }
  });

  $('#comments').editable({
    showbuttons: 'bottom',
    rows:3
  });

  $('#state2').editable({
    value: 'California',
    typeahead: {
      name: 'state',
      local: [ 'Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California', 'Colorado', 'Connecticut', 'Delaware', 'Florida', 'Georgia', 'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky', 'Louisiana', 'Maine', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi', 'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New Hampshire', 'New Jersey', 'New Mexico', 'New York', 'North Dakota', 'North Carolina', 'Ohio', 'Oklahoma', 'Oregon', 'Pennsylvania', 'Rhode Island', 'South Carolina', 'South Dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont', 'Virginia', 'Washington', 'West Virginia', 'Wisconsin', 'Wyoming' ]
    }
  });

  $('#fruits').editable({
     pk: 1,
     limit: 3,
     source: [
      { value: 1, text: 'banana' },
      { value: 2, text: 'peach' },
      { value: 3, text: 'apple' },
      { value: 4, text: 'watermelon' },
      { value: 5, text: 'orange' }
     ]
  });
  //
  $('#state2').editable({
    value: 'California',
    typeahead: {
      name: 'state',
      local: [ 'Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California', 'Colorado', 'Connecticut', 'Delaware', 'Florida', 'Georgia', 'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky', 'Louisiana', 'Maine', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi', 'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New Hampshire', 'New Jersey', 'New Mexico', 'New York', 'North Dakota', 'North Carolina', 'Ohio', 'Oklahoma', 'Oregon', 'Pennsylvania', 'Rhode Island', 'South Carolina', 'South Dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont', 'Virginia', 'Washington', 'West Virginia', 'Wisconsin', 'Wyoming' ]
    }
  });


  $('#tags').editable({
    inputclass: 'input-large',
    select2: {
      tags: [ 'html', 'javascript', 'css', 'ajax' ],
      tokenSeparators: [ ',', ' ' ]
    }
  });


  var countries = [];
  $.each(
    {
      "BD": "Bangladesh", "BE": "Belgium", "BF": "Burkina Faso", "BG": "Bulgaria", "BA": "Bosnia and Herzegovina", "BB": "Barbados", "WF": "Wallis and Futuna", "BL": "Saint Bartelemey", "BM": "Bermuda", "BN": "Brunei Darussalam", "BO": "Bolivia", "BH": "Bahrain", "BI": "Burundi", "BJ": "Benin", "BT": "Bhutan", "JM": "Jamaica", "BV": "Bouvet Island", "BW": "Botswana", "WS": "Samoa", "BR": "Brazil", "BS": "Bahamas", "JE": "Jersey", "BY": "Belarus", "O1": "Other Country", "LV": "Latvia", "RW": "Rwanda", "RS": "Serbia", "TL": "Timor-Leste", "RE": "Reunion", "LU": "Luxembourg", "TJ": "Tajikistan", "RO": "Romania", "PG": "Papua New Guinea", "GW": "Guinea-Bissau", "GU": "Guam", "GT": "Guatemala", "GS": "South Georgia and the South Sandwich Islands", "GR": "Greece", "GQ": "Equatorial Guinea", "GP": "Guadeloupe", "JP": "Japan", "GY": "Guyana", "GG": "Guernsey", "GF": "French Guiana", "GE": "Georgia", "GD": "Grenada", "GB": "United Kingdom", "GA": "Gabon", "SV": "El Salvador", "GN": "Guinea", "GM": "Gambia", "GL": "Greenland", "GI": "Gibraltar", "GH": "Ghana", "OM": "Oman", "TN": "Tunisia", "JO": "Jordan", "HR": "Croatia", "HT": "Haiti", "HU": "Hungary", "HK": "Hong Kong", "HN": "Honduras", "HM": "Heard Island and McDonald Islands", "VE": "Venezuela", "PR": "Puerto Rico", "PS": "Palestinian Territory", "PW": "Palau", "PT": "Portugal", "SJ": "Svalbard and Jan Mayen", "PY": "Paraguay", "IQ": "Iraq", "PA": "Panama", "PF": "French Polynesia", "BZ": "Belize", "PE": "Peru", "PK": "Pakistan", "PH": "Philippines", "PN": "Pitcairn", "TM": "Turkmenistan", "PL": "Poland", "PM": "Saint Pierre and Miquelon", "ZM": "Zambia", "EH": "Western Sahara", "RU": "Russian Federation", "EE": "Estonia", "EG": "Egypt", "TK": "Tokelau", "ZA": "South Africa", "EC": "Ecuador", "IT": "Italy", "VN": "Vietnam", "SB": "Solomon Islands", "EU": "Europe", "ET": "Ethiopia", "SO": "Somalia", "ZW": "Zimbabwe", "SA": "Saudi Arabia", "ES": "Spain", "ER": "Eritrea", "ME": "Montenegro", "MD": "Moldova, Republic of", "MG": "Madagascar", "MF": "Saint Martin", "MA": "Morocco", "MC": "Monaco", "UZ": "Uzbekistan", "MM": "Myanmar", "ML": "Mali", "MO": "Macao", "MN": "Mongolia", "MH": "Marshall Islands", "MK": "Macedonia", "MU": "Mauritius", "MT": "Malta", "MW": "Malawi", "MV": "Maldives", "MQ": "Martinique", "MP": "Northern Mariana Islands", "MS": "Montserrat", "MR": "Mauritania", "IM": "Isle of Man", "UG": "Uganda", "TZ": "Tanzania, United Republic of", "MY": "Malaysia", "MX": "Mexico", "IL": "Israel", "FR": "France", "IO": "British Indian Ocean Territory", "FX": "France, Metropolitan", "SH": "Saint Helena", "FI": "Finland", "FJ": "Fiji", "FK": "Falkland Islands (Malvinas)", "FM": "Micronesia, Federated States of", "FO": "Faroe Islands", "NI": "Nicaragua", "NL": "Netherlands", "NO": "Norway", "NA": "Namibia", "VU": "Vanuatu", "NC": "New Caledonia", "NE": "Niger", "NF": "Norfolk Island", "NG": "Nigeria", "NZ": "New Zealand", "NP": "Nepal", "NR": "Nauru", "NU": "Niue", "CK": "Cook Islands", "CI": "Cote d'Ivoire", "CH": "Switzerland", "CO": "Colombia", "CN": "China", "CM": "Cameroon", "CL": "Chile", "CC": "Cocos (Keeling) Islands", "CA": "Canada", "CG": "Congo", "CF": "Central African Republic", "CD": "Congo, The Democratic Republic of the", "CZ": "Czech Republic", "CY": "Cyprus", "CX": "Christmas Island", "CR": "Costa Rica", "CV": "Cape Verde", "CU": "Cuba", "SZ": "Swaziland", "SY": "Syrian Arab Republic", "KG": "Kyrgyzstan", "KE": "Kenya", "SR": "Suriname", "KI": "Kiribati", "KH": "Cambodia", "KN": "Saint Kitts and Nevis", "KM": "Comoros", "ST": "Sao Tome and Principe", "SK": "Slovakia", "KR": "Korea, Republic of", "SI": "Slovenia", "KP": "Korea, Democratic People's Republic of", "KW": "Kuwait", "SN": "Senegal", "SM": "San Marino", "SL": "Sierra Leone", "SC": "Seychelles", "KZ": "Kazakhstan", "KY": "Cayman Islands", "SG": "Singapore", "SE": "Sweden", "SD": "Sudan", "DO": "Dominican Republic", "DM": "Dominica", "DJ": "Djibouti", "DK": "Denmark", "VG": "Virgin Islands, British", "DE": "Germany", "YE": "Yemen", "DZ": "Algeria", "US": "United States", "UY": "Uruguay", "YT": "Mayotte", "UM": "United States Minor Outlying Islands", "LB": "Lebanon", "LC": "Saint Lucia", "LA": "Lao People's Democratic Republic", "TV": "Tuvalu", "TW": "Taiwan", "TT": "Trinidad and Tobago", "TR": "Turkey", "LK": "Sri Lanka", "LI": "Liechtenstein", "A1": "Anonymous Proxy", "TO": "Tonga", "LT": "Lithuania", "A2": "Satellite Provider", "LR": "Liberia", "LS": "Lesotho", "TH": "Thailand", "TF": "French Southern Territories", "TG": "Togo", "TD": "Chad", "TC": "Turks and Caicos Islands", "LY": "Libyan Arab Jamahiriya", "VA": "Holy See (Vatican City State)", "VC": "Saint Vincent and the Grenadines", "AE": "United Arab Emirates", "AD": "Andorra", "AG": "Antigua and Barbuda", "AF": "Afghanistan", "AI": "Anguilla", "VI": "Virgin Islands, U.S.", "IS": "Iceland", "IR": "Iran, Islamic Republic of", "AM": "Armenia", "AL": "Albania", "AO": "Angola", "AN": "Netherlands Antilles", "AQ": "Antarctica", "AP": "Asia/Pacific Region", "AS": "American Samoa", "AR": "Argentina", "AU": "Australia", "AT": "Austria", "AW": "Aruba", "IN": "India", "AX": "Aland Islands", "AZ": "Azerbaijan", "IE": "Ireland", "ID": "Indonesia", "UA": "Ukraine", "QA": "Qatar", "MZ": "Mozambique"
    },
    function(k, v) {
      countries.push({ id: k, text: v });
    }
  );

  $('#country').editable({
    source: countries,
    select2: {
      width: 200,
      placeholder: 'Select country',
      allowClear: true
    }
  });

  $('#address').editable({
    url: '/post',
    value: {
      city: 'Moscow',
      street: 'Lenina',
      building: '12'
    },
    validate: function(value) {
      if (value.city == '') {
        return 'city is required!';
      }
    },
    display: function(value) {
      if (!value) {
        $(this).empty();
        return;
      }

      var html = '<b>' + $('<div>').text(value.city).html() + '</b>, '
               + $('<div>').text(value.street).html() + ' st., bld. '
               + $('<div>').text(value.building).html();

      $(this).html(html);
    }
  })
  .on('click', function() {
    $(this).next('span').find('input').each(function() {
      $(this).addClass('form-control')
    });
  });

  /**
   *
   * "Back to top" button
   *
   */
  var $backToTop = $('#back-to-top');
  var hidePos = $backToTop.css('bottom');
  $backToTop .on('click', 'a', function(e)  {
    e.preventDefault();

     $('html,body').animate({
      scrollTop: 0
    }, 1000);
  });

  $window.on('scroll', function() {
    if (1200 <= $window.scrollTop()) {
      $backToTop.css('bottom', '24px');
    } else {
      $backToTop.css('bottom', hidePos);
    }
  }).trigger('scroll');

})(jQuery);
