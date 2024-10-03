function Check_Device_Type(Nav){
    if (window.matchMedia("(min-width: 1025px)").matches) {
        Nav.classList.remove("Close_pop_up","Open_pop_up");
        Nav.style.display = "none";
    }
}

function ControlPanelNavbar(Close_Button,Menu_navbar){
    
}

const body = document.body;

document.addEventListener("DOMContentLoaded", function(){
    const Menu_navbar = document.querySelector(".Menu_navbar");
    
    
    
    document.getElementById("Click_mobile_navbar").addEventListener("click",function(){
        const Close_Button = this.querySelector('.Button_navigation_stile.-Close-');
        const Click_search_mobile = document.querySelector(".Button_container_navigation.-Invisible-");
        const Elements  = [Close_Button,Click_search_mobile,Menu_navbar];
        if(!Menu_navbar.classList.contains("Open_pop_up")){
            body.style.overflow = "hidden";
            window.scrollTo({
                top: 0,  // Posizione verticale 0 (inizio della pagina)
                behavior: 'smooth'  // Scroll animato
            });
            Elements.forEach(function(Element,i){
                if(i==0){
                    Element.style.display = "block";
                }
                else{
                    Element.style.visibility = "visible";
                }
                Element.classList.remove("Close_pop_up");
                Element.classList.add("Open_pop_up");
            });
        }
        else{
            body.removeAttribute("style");
            Elements.forEach(function(Element){
                Element.classList.remove("Open_pop_up");
                Element.classList.add("Close_pop_up");
                Element.addEventListener("animationend", function(event){
                    if (event.animationName === "Pop_up_close_animation"){
                        this.removeAttribute("style");
                        Element.classList.remove("Close_pop_up");
                    }
                });
            });
        }
    });
    
    
    /*
    window.addEventListener('load', function(){
        Check_Device_Type(Menu_navbar);
    });
    window.addEventListener('resize', function(){
        Check_Device_Type(Menu_navbar);
    });*/
});