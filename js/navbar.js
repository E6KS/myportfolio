
$(document).ready(function(){
    $(window).scroll(function(){
        var scroll = $(window).scrollTop();
        if (window.innerWidth < 992){
            if (scroll > 50) {
                $(".blur-effect").css("backdrop-filter" , "blur(200px)");
            }

            else{
                if (document.getElementById("navbar-button-toggler").getAttribute("aria-expanded") == "false"){
                $(".blur-effect").css("backdrop-filter" , "none");
                }
            }
        }
        else {
            $(".blur-effect").css("backdrop-filter" , "none");
        }
    })
  })
  
  document.getElementById("navbar-button-toggler").onclick = function() {myFunction()};
  
  function myFunction() {
    
    var scroll = $(window).scrollTop();
    if (document.getElementById("navbar-button-toggler").getAttribute("aria-expanded") == "true"){
        $(".blur-effect").css("backdrop-filter" , "blur(200px)");
    }
    else if (document.getElementById("navbar-button-toggler").getAttribute("aria-expanded") == "false" && scroll <= 50){
        $(".blur-effect").css("backdrop-filter" , "none");
    }

  
  }


  function myFunction1() {
    document.getElementById("myDropdown").classList.toggle("show");
  }
  
  // Close the dropdown if the user clicks outside of it
  window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }