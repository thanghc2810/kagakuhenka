//player
var myPlayer;
function seekToTimer(time) {
	  
	  videojs('vid1').ready(function() {
	    myPlayer = this;
	    // myPlayer.src({ type: 'video/youtube', src: 'https://www.youtube.com/watch?v=H90NdI42xNc' });
	    
	    myPlayer.currentTime(time);
        myPlayer.play();
	    console.log("clicked");
	  });
}
function showSlide(){

        console.log(myPlayer.currentTime());
    $("#test-content").html("Show Slide");
}
function showTest(){
    $("#test-content").html("Show Test");   
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
//   $( document ).ready(function() {
//     var div = document.createElement('div');
//     div.className = 'comment-user-light';
//     div.innerHTML = "<a href='#cmt01'><img src='./public/img/avatar1.jpg' height='20' width='20'></a>"
//     document.getElementsByClassName("vjs-control-bar")[0].appendChild(div);
// });

//show slide
$(document).ready(function() {
    $( ".vjs-big-play-button" ).click(function() {
        console.log("vao ham");
      seekToTimer("0");
      setTimeout(function(){
        console.log("vao ham hihi");
          console.log(myPlayer.currentTime());
            if(myPlayer.currentTime() == 20){
                $("#test-content").html("Show Slide");
            }
            if(myPlayer.currentTime() == 90){
                $("#test-content").html("Show Test");
            }    
}, 15000);
  
    });
});


// show avatar in progress bar
  $( document ).ready(function() {
    var div = document.createElement('div');
    div.className = 'comment-user-light1';
    div.innerHTML = "<a href='#cmt01'><img src='./public/img/avatar1.jpg' height='20' width='20'></a>"
    document.getElementsByClassName("vjs-control-bar")[0].appendChild(div);
});

  $( document ).ready(function() {
	$(".vjs-volume-menu-button-horizontal").hover(function(){
	    $(".comment-user-light1").animate({"margin-left":"230px"},400);
		    }, function(){
		    $(".comment-user-light1").animate({"margin-left":"150px"},400);
		});
});


// show avatar in progress bar
  $( document ).ready(function() {
    var div = document.createElement('div');
    div.className = 'comment-user-light2';
    div.innerHTML = "<a href='#cmt02'><img src='./public/img/avatar2.jpg' height='20' width='20'></a>"
    document.getElementsByClassName("vjs-control-bar")[0].appendChild(div);
});
  
  $( document ).ready(function() {
    $(".vjs-volume-menu-button-horizontal").hover(function(){
        $(".comment-user-light2").animate({"margin-left":"300px"},400);
            }, function(){
            $(".comment-user-light2").animate({"margin-left":"220px"},400);
        });
});

// show avatar in progress bar
  $( document ).ready(function() {
    var div = document.createElement('div');
    div.className = 'comment-user-light3';
    div.innerHTML = "<a href='#cmt03'><img src='./public/img/avatar3.jpg' height='20' width='20'></a>"
    document.getElementsByClassName("vjs-control-bar")[0].appendChild(div);
});
  
  $( document ).ready(function() {
    $(".vjs-volume-menu-button-horizontal").hover(function(){
        $(".comment-user-light3").animate({"margin-left":"370px"},400);
            }, function(){
            $(".comment-user-light3").animate({"margin-left":"290px"},400);
        });
});  

// show content check
  $( document ).ready(function() {
    var div = document.createElement('div');
    div.className = 'comment-user-light4';
    div.innerHTML = "<a href='#' onclick='showSlide();'><img src='./public/img/test.png' height='20' width='20'></a>"
    document.getElementsByClassName("vjs-control-bar")[0].appendChild(div);
});
  
  $( document ).ready(function() {
    $(".vjs-volume-menu-button-horizontal").hover(function(){
        $(".comment-user-light4").animate({"margin-left":"240px"},400);
            }, function(){
            $(".comment-user-light4").animate({"margin-left":"180px"},400);
        });
});  

// show slide
  $( document ).ready(function() {
    var div = document.createElement('div');
    div.className = 'comment-user-light5';
    div.innerHTML = "<a href='#' onclick='showTest();'><img src='./public/img/slide.png' height='20' width='20'></a>"
    document.getElementsByClassName("vjs-control-bar")[0].appendChild(div);
});
  
  $( document ).ready(function() {
    $(".vjs-volume-menu-button-horizontal").hover(function(){
        $(".comment-user-light5").animate({"margin-left":"530px"},400);
            }, function(){
            $(".comment-user-light5").animate({"margin-left":"520px"},400);
        });
});    