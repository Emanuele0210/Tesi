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

function Handle_Button(Button_1,Menu_1,Button_2,Menu_2){
    const Close_Button_1 = Button_1.querySelector(".Button_navbar_style .-Close-");
    const Close_Button_2 = Button_2.querySelector(".Button_navbar_style .-Close-");
    Button_check(Close_Button_1,Menu_1,Close_Button_2,Menu_2);
}

function Button_check(Close_Button_1,Menu_1,Close_Button_2,Menu_2){
    if(!Menu_1.classList.contains("Open_pop_up")){
        body.style.overflow = "hidden";
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
        if(Menu_2.classList.contains("Open_pop_up")){
            Button_deactivate(Menu_2);
            Button_deactivate(Close_Button_2);
        }
        if(Menu_1 == Menu_navbar){
            if(Menu_news.classList.contains("Open_pop_up")){
                const Close_Button_3 = Button_news_mobile.querySelector(".Button_navbar_style .-Close-");
                Button_deactivate(Menu_news);
                Button_deactivate(Close_Button_3);
            }
            else{
                Button_active(Button_news_mobile);
            }
        }
        Button_active(Close_Button_1);
        Button_active(Menu_1);
    }
    else{
        body.removeAttribute("style");
        if(Button_news_mobile.style.visibility == "visible"){
            Button_deactivate(Button_news_mobile);
        }
        Button_deactivate(Close_Button_1);
        Button_deactivate(Menu_1);
    }
}

function Button_active(Element){
    if(Element == Menu_navbar || Element == Button_news_mobile){
        Element.style.visibility = "visible";
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
    },{once:true});
}