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
    $(".test-question").css("display","none");
    $(".slide-content").css("display","block");
}
function showTest(){
    $(".slide-content").css("display","none");
    $(".test-question").css("display","block");
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


//stupid function ..................................................................................................
// function showIcon(timer) {
//     var div = document.createElement('div');
//     div.className = 'comment-user-light1';
//     div.innerHTML = "<a href='#cmt01'><img src='./public/img/avatar1.jpg' height='20' width='20'></a>"
//     document.getElementsByClassName("vjs-control-bar")[0].appendChild(div);
//     // alert("Width of div: " + $("#collapse1").width());
//     var main_width = $(".col-md-3 frame-03 sub-component").width();
//     console.log("main_width:" + main_width);
//     var width=(timer/100)*main_width;
//     console.log("width:" + width);
//     $(".comment-user-light1").css("margin-left", width+"px");
// }
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

// end of stupid function .............................................................................................


// function for comment
$(document).ready(function(){
    $( "#comment-button" ).click(function() {
        var text = $('textarea#comment').val();
        var decode;
        //highlight tag or name
    var patt1 = /(@|#)(.*?)(\s|$)/g;
    var result = text.match(patt1);
    if(result){
        for(var i=0; i<result.length ; i++){
            result[i].replace(/(\s|\.)/g, '');
            decode = text.replace(result[i], "<a href='#'  style='background: #ffbd6a;'>" + result[i] + "</a>");
            text = decode;
        }
    }
 
        var html = "<div class='media' id='cmt02'> <div class='media-left'> <img src='./public/img/avatar2.jpg' class='media-object' style='width:45px'> </div> <div class='media-body'> <div class='row'> <div class='col-sm-8'> <h4 class='media-heading'>John Doe<small>&ensp;<a href='#' onclick='seekToTimer('30');'>00:30</a></small></h4> </div> <div class='col-sm-4 text-right'> <h4 class='media-heading'><small><i>2017年01月01日</i></small></h4> </div> </div> <p>";
        html+=text;
        html += "</p> </div> </div>";
        $('.comment-component').append(html);
        $('textarea#comment').val("");
    });
});

$(document).ready(function(){
    document.getElementById('upload-image-button').onclick = function() {
        document.getElementById('my_file').click();
    };
});

//function for control video
$(document).ready(function () {
    videojs('vid1').ready(function () {
        var myPlayer = this;
        // myPlayer.play();
    var pausetime1 = 3; // stop at 2 seconds
    var pausetime2 = 4; // stop at 2 seconds
        // myPlayer.on('timeupdate', function(e) {
        //     console.log(myPlayer.currentTime());
        //     if (pausetime1 < myPlayer.currentTime() && myPlayer.currentTime() < pausetime2) {
                
        //         myPlayer.pause();
        //         myPlayer.currentTime(4);
        //         // myPlayer.play();
        //         showSlide();
        //         return;
        //     }
        // });
        myPlayer.on('timeupdate', function(e) {
            console.log(myPlayer.currentTime());
            if (myPlayer.currentTime() >= 20) {
                // myPlayer.play();
                showSlide();
            }
        });        
        myPlayer.on('timeupdate', function(e) {
            if (myPlayer.currentTime() >= 90) {
                // myPlayer.pause();
                showTest();
            }
        });
    });
});