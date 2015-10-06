jQuery.ajax('../apis/github/users/octocat.json').then(function(data){
 console.log(arguments);
});



$(".tabs").click(function(){
    addTabs();
});


function addTabs() {
  $(".tabs").removeClass("active");
};
