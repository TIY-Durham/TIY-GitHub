// TODO: Make buttons click over to corresponding tabs.
// TODO: Convert buttons into tabs.
// TODO: Add event listener 'click' to each button that changes class to active.
//
// For now make the tab 'repo' always active.

// $('a[href="#contributions"]').on('click', function (){
//   $(this).addClass('active').siblings().removeClass('active');
//   $('#contributions').addClass('active').siblings().removeClass('active');
// });
//
// $('a[href="#repositories"]').on('click', function (){
//   $(this).addClass('active').siblings().removeClass('active');
//   $('#repositories').addClass('active').siblings().removeClass('active');
// });
//
// $('a[href="#public-activity"]').on('click', function (){
//   $(this).addClass('active').siblings().removeClass('active');
//   $('#public-activity').toggleClass('active').siblings().removeClass('active');
// });

$('.tabs > a').on('click', function(){
  var panelId = $(this).attr('href');

  $(this).add(panelId)
    .addClass('active')
  .siblings()
    .removeClass('active');

  console.log($(this).siblings());
}).filter('[href="#repositories"]')
  .trigger('click'); // or .click()
