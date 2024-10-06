const Menu_news = document.getElementById("Container_menu_news");
const Menu_search = document.getElementById("Container_menu_search");
const Menu_navbar = document.querySelector(".Container_menu_navbar");

const Button_search = document.getElementById("Click_search");
const Button_news_pc = document.getElementById("Click_news_pc");

const Button_navbar_mobile = document.getElementById("Click_mobile_navbar");
const Button_news_mobile = document.getElementById("Click_news_mobile");
Button_search.addEventListener("click", function(){
    Handle_Button(Button_search,Menu_search,Button_news_pc,Menu_news);
});
Button_news_pc.addEventListener("click", function(){
    Handle_Button(Button_news_pc,Menu_news,Button_search,Menu_search);
});
Button_navbar_mobile.addEventListener("click", function(){
    Handle_Button(Button_navbar_mobile,Menu_navbar,Button_search,Menu_search);
});
Button_news_mobile.addEventListener("click",function(){
    Handle_Button(Button_news_mobile,Menu_news,Button_navbar_mobile,Menu_navbar);
});

function Handle_Button(Button_Alfa,Menu_Alfa,Button_Beta,Menu_Beta){
    const Close_Button_Alfa = Button_Alfa.querySelector(".Button_navbar_style .-Close-");
    const Close_Button_Beta = Button_Beta.querySelector(".Button_navbar_style .-Close-");
    Button_check(Close_Button_Alfa,Menu_Alfa,Close_Button_Beta,Menu_Beta);
}
function Button_check(Close_Button_Alfa,Menu_Alfa,Close_Button_Beta,Menu_Beta){
    if(!Menu_Alfa.classList.contains("Open_pop_up")){
        body.style.overflow = "hidden";
            window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
        // non se tocca
        if(Menu_Beta.style.display == "block" || Menu_Beta.style.visibility == "visible"){
            Button_deactivate(Menu_Beta);
            Button_deactivate(Close_Button_Beta);
        }
        Button_active(Close_Button_Alfa);
        Button_active(Menu_Alfa);
    }
    else{
        body.removeAttribute("style");
        if(Button_news_mobile.style.visibility == "visible"){
            Button_deactivate(Button_news_mobile);
        }
        Button_deactivate(Close_Button_Alfa);
        Button_deactivate(Menu_Alfa);
    }
}
function Button_active(Element){
    if(Element == Menu_navbar){
        Element.style.visibility = "visible";
        Button_news_mobile.style.visibility = "visible";
        Button_news_mobile.classList.remove("Close_pop_up");
        Button_news_mobile.classList.add("Open_pop_up");
    }
    else{
        Element.style.display = "block";
    }
    Element.classList.remove("Close_pop_up");
    Element.classList.add("Open_pop_up"); 
}
function Button_deactivate(Element){
    Element.classList.remove("Open_pop_up");
    Element.classList.add("Close_pop_up");
    Element.addEventListener("animationend", function(event){
        if(event.animationName === "Pop_up_close_animation"){
            Element.removeAttribute("style");
            Element.classList.remove("Close_pop_up");
        }
    });
}