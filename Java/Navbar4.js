function Check_Device_Type(Nav,But){
    if (window.matchMedia("(min-width: 1025px)").matches) {
        Nav.classList.remove("Close_pop_up","Open_pop_up");
        Nav.removeAttribute("style");
        But.removeAttribute("style");
    } else {
        Nav.classList.add("Close_pop_up");
        But.style.width = window.innerWidth - (window.innerWidth - document.documentElement.clientWidth) + 'px';     
    }
}
function ControlPanel(P,C1,C2){
    Pop_up_open(P,C1);
    Pop_up_close(P,C2);
}
function Pop_up_open(P,C1){
    C1.addEventListener("click", function(){
        P.style.display = "initial";
        P.classList.remove("Close_pop_up");
        P.classList.add("Open_pop_up");
        body.style.overflow = "hidden";
    });
}

function Pop_up_close(P,C2){
    C2.addEventListener("click", function(){
        P.classList.remove("Open_pop_up");
        P.classList.add("Close_pop_up")
        P.addEventListener("animationend", function(event){
            if (event.animationName === "Pop_up_close_animation"){
                this.removeAttribute("style");
            }
        });
    });
}


const body = document.body;

document.addEventListener("DOMContentLoaded", function(){
    const Menu_navbar = document.querySelector(".Menu_navbar");
    const Click_mobile = document.getElementById("Click_mobile_navbar");
    const Click_mobile_close = document.getElementById("Click_mobile_navbar_close");
    
    const Button_mobile = document.querySelector(".Containers_buttons_mobile_navbar");
    
    window.addEventListener('load', function(){
        Check_Device_Type(Menu_navbar,Button_mobile);
    });
    window.addEventListener('resize', function(){
        Check_Device_Type(Menu_navbar,Button_mobile);
    });

    ControlPanel(Menu_navbar,Click_mobile,Click_mobile_close);

});