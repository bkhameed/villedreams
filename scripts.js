var myIndex = 0;

           window.onload =  function carousel() {
                var i;
                var x = document.getElementsByClassName("mySlides");
                for (i = 0; i < x.length; i++) {
                    x[i].style.display = "none";
                }
                myIndex++;
                if (myIndex > x.length) {
                    myIndex = 1;
                }
                x[myIndex - 1].style.display = "block";
                if (myIndex == 1) {
                    setTimeout(carousel, 1);
                } else {
                    setTimeout(carousel, 3000);
                }
            }
            
            function openNav() {
                document.getElementById("mySidenav").style.width="250px";
            }
            
            function closeNav() {
                document.getElementById("mySidenav").style.width = "0";
            }
            
            function setActive(elem) {
                var navs = document.getElementsByClassName("navItems");
                for( index = 0; index < navs.length; index++){
                    navs[index].removeAttribute("class");
                    navs[index].setAttribute("class", "navItems");
                }
                elem.setAttribute("class", "active navItems");
                
            }


function entryButton() {
   var elem = document.getElementById("enterBtn");
    elem.style.backgroundColor="black";
    elem.style.color="white";
}