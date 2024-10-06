document.addEventListener("DOMContentLoaded", function(){
    
    function Click_hover_animmation(C1,C2){
        Mouse_hover_button(C1,C2);
        Mouse_hover_button(C2,C1);
    }

    function Mouse_hover_button(Alfa,Beta){
        const svg_element1 = Alfa.querySelector("svg");
        const svg_element2 = Beta.querySelector("svg");
        Alfa.addEventListener("mouseenter", function(){
            Alfa.style.backgroundColor = "var(--mgk)";
            Beta.style.backgroundColor = "var(--mgk)";
            svg_element1.style.filter = "drop-shadow(0 0 5px var(--mgk)) drop-shadow(0 0 0 var(--mgk))";
            svg_element2.style.filter = "drop-shadow(0 0 5px var(--mgk)) drop-shadow(0 0 0 var(--mgk))";

        });
        Alfa.addEventListener("mouseleave", function(){
            Alfa.style.backgroundColor = "var(--clrB)";
            Beta.style.backgroundColor = "var(--clrB)";
            svg_element1.style.filter = "drop-shadow(0 0 5px var(--mgk))";
            svg_element2.style.filter = "drop-shadow(0 0 5px var(--mgk))";

        });
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
                    this.style.display = "none";
                }
            });
        });
    }

    const Pop_up_search = document.getElementById("Search_menu");
    const Pop_up_news = document.getElementById("News_menu");

    const Click_search = document.getElementById("Click_search");
    const Click_news = document.getElementById("Click_news");

    const Click_search_close = document.getElementById("Click_search_close");
    const Click_news_close= document.getElementById("Click_news_close");

    Click_hover_animmation(Click_search, Click_search_close);
    Click_hover_animmation(Click_news, Click_news_close);

    Open_Close_pop_up(Pop_up_search, Click_search , Click_search_close);
    Open_Close_pop_up(Pop_up_news, Click_news , Click_news_close);

    class Site_topics{
        constructor(name,categories,img_topics,description,url){
            this.name = name;
            this.categories =categories;
            this.img_topics = img_topics;
            this.description = description;
            this.url =url;
        }
    }
    const List_topics = [
        new Site_topics("Yubel","Deck Tutorial","","Learn the secrets of the Yubel deck",""),
        new Site_topics("Goti","Deck Tutorial","","Learn the secrets of the Goti deck",""),
        new Site_topics("Sky Striker","Deck Tutorial","","Learn the secrets of the Sky Striker deck",""),
        new Site_topics("Memento","Deck Tutorial","","Learn the secrets of the Memento deck",""),
        new Site_topics("Vaalmonica","Deck Tutorial","","Learn the secrets of the Vaalmonica deck",""),
        new Site_topics("Volcanic","Deck Tutorial","","Learn the secrets of the Volcanic deck",""),
        new Site_topics("Dinomorphia","Deck Tutorial","","Learn the secrets of the Dinomorphia deck",""),
        new Site_topics("Exosister","Deck Tutorial","","Learn the secrets of the Exosister deck",""),
        new Site_topics("Ritual Beast","Deck Tutorial","","Learn the secrets of the Ritual Beast deck",""),
        new Site_topics("Vanquish Soul","Deck Tutorial","","Learn the secrets of the Vanquish Soul deck",""),
    ];

    function Search_display_results(Input_search){
        const Results_search = document.getElementById("Results_search");
        Results_search.innerHTML = "";
    
        const Topics_search = List_topics.filter(Topics_filter);
    
        function Topics_filter(subject){
            var Id_category = subject.categories.toLowerCase().includes(Input_search);
            var Id_name = subject.name.toLowerCase().includes(Input_search);
            return Id_category || Id_name;
        }
    
        Topics_search.sort(function(a,b){
            if(a.categories > b.categories){
                return 1;
            }
            if(a.categories < b.categories){
                return -1;
            }
            if(a.name > b.name){
                return 1;
            }
            if(a.name < b.name){
                return -1;
            }
            return 0;
        });
    

        Topics_search.forEach(Topic_forEach);
        function Topic_forEach(subject){
            const List = document.createElement("li");
            const Link = document.createElement("a");
            const Link_desription = document.createElement("p");
    
            Results_search.appendChild(List);
            List.appendChild(Link);
            List.appendChild(Link_desription);
    
            Link.textContent = subject.name;
            Link_desription.textContent = subject.description;
        }
    }
    
    Search_display_results("");
    
    document.getElementById("Input_search").addEventListener("input", function(){
        const Input_search = this.value.toLowerCase();
        Search_display_results(Input_search);
    });
});