$(document).ready(function () {
  $('#fullpage').fullpage({
    //options here
    sectionsColor: ['#F9F7E8', '#B7E3E4', '#F9F7E8','#B7E3E4'],
    anchors: ['home', 'about', 'projects','contact'],
    menu: '#enu',
    navigation: true,
    navigationTooltips: ['home', 'about', 'projects','contact'],
    navigationPosition: 'right',
    showActiveTooltip: true,

  });

});


