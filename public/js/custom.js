//player
function seekToTimer() {
	  var myPlayer;
	  videojs('vid1').ready(function() {
	    myPlayer = this;
	    // myPlayer.src({ type: 'video/youtube', src: 'https://www.youtube.com/watch?v=H90NdI42xNc' });
	    myPlayer.play();
	    myPlayer.currentTime(500);
	    console.log("clicked");
	  });
}

//for side bar
$(document).ready(function(){
    $('[data-toggle="tooltip"]').tooltip(); 
});

//for navbar menu
$(document).ready(function(){
    $(".dropdown").hover(            
        function() {
            $('.dropdown-menu', this).not('.in .dropdown-menu').stop(true,true).slideDown("400");
            $(this).toggleClass('open');        
        },
        function() {
            $('.dropdown-menu', this).not('.in .dropdown-menu').stop(true,true).slideUp("400");
            $(this).toggleClass('open');       
        }
    );
});

// show avatar in progress bar
  $( document ).ready(function() {
    var div = document.createElement('div');
    div.className = 'comment-user-light';
    div.innerHTML = "<a href='#cmt01'><img src='./public/img/avatar1.jpg' height='20' width='20'></a>"
    document.getElementsByClassName("vjs-control-bar")[0].appendChild(div);
});

  $( document ).ready(function() {
	$(".vjs-volume-menu-button-horizontal").hover(function(){
	    $(".comment-user-light").animate({"margin-left":"160px"},400);
		    }, function(){
		    $(".comment-user-light").animate({"margin-left":"80px"},400);
		});
});