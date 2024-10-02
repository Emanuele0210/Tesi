function Check_Device_Type(Nav){
    if (window.matchMedia("(min-width: 1025px)").matches) {
        Nav.classList.remove("Close_pop_up");
        Nav.classList.remove("Open_pop_up");
        Nav.style.display = "";
    } else {
        Nav.classList.add("Close_pop_up");
    }
}
function Open_Close_pop_up(P,C1,C2){
    Pop_up_open(P,C1);
    Pop_up_close(P,C2);
}


function Pop_up_open(P,C1){
    C1.addEventListener("click", function(){
        P.style.display = "block";
        P.classList.remove("Close_pop_up");
        P.classList.add("Open_pop_up")
    });
}

function Pop_up_close(P,C2){
    C2.addEventListener("click", function(){
        P.classList.remove("Open_pop_up");
        P.classList.add("Close_pop_up")
        P.addEventListener("animationend", function(event){
            if (event.animationName === "Pop_up_close_animation"){
                P.style.display = "none";
            }
        });
    });
}

document.addEventListener("DOMContentLoaded", function(){

    const Click_mobile_navbar = document.getElementById("Click_mobile_navbar");
    const Click_search = document.getElementById("Click_search");
    

    const Click_mobile_navbar_close = document.getElementById("Click_mobile_navbar_close");
    const Click_search_close = document.getElementById("Click_search_close");
    
    
    const Menu_navbar = document.querySelector(".Menu_navbar");
    const Pop_up_search = document.getElementById("Search_menu");


    window.addEventListener('load', function(){
        Check_Device_Type(Menu_navbar);
    });
    window.addEventListener('resize', function(){
        Check_Device_Type(Menu_navbar);
    });
    Open_Close_pop_up(Menu_navbar,Click_mobile_navbar,Click_mobile_navbar_close);
    Open_Close_pop_up(Pop_up_search, Click_search , Click_search_close);


});
const var2 = document.getElementById("Click_news");/*
        C1.addEventListener("click", function(){
            P.style.animation = "Pop_up_close_animation .3s ease;"
            
            function handleAnimationEnd(event) {
                if (event.animationName === "Pop_up_close_animation") {
                    P.style.display = "none";
                    P.removeEventListener("animationend", handleAnimationEnd); // Rimuovi il listener dopo l'esecuzione
                }
            }

            P.addEventListener("animationend", handleAnimationEnd);
            
        });*/