document.getElementById("Click_mobile_navbar").addEventListener("click",function(){
    const Close_Button = this.querySelector(".Button_navbar_style .-Close-");
    const Click_search_mobile = document.querySelector(".Button_navbar.-Invisible-");
    const Elements = [Close_Button,Click_search_mobile,Menu_navbar];
    if(!Menu_navbar.classList.contains("Open_pop_up")){
        body.style.overflow = "hidden";
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
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

