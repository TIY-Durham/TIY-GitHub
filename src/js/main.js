jQuery.ajax('../apis/github/users/octocat.json').then(function(data){
 console.log(arguments);
});


$(".tabs").click(function(){
    addTabs();
    $(this).addClass("active");
    $(this).next().addClass("active");
    $(this).next().css("display", "block");
}); //Adapted from http://www.jankoatwarpspeed.com/dynamic-tabs-using-jquery-why-and-how-to-create-it/

function addTabs() {
  $(".tabs").removeClass("active");
  $(".tabs").next().css("display", "none");
}; // Used within event listener to move active class
