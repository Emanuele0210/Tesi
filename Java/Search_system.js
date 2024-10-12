class Site_topics {
    constructor(name, category, image_articles, description, URL, date) {
        this.name = name;
        this.category = category;
        this.image_articles = image_articles;
        this.description = description;
        this.URL = URL;
        this.date = date;
    }
}

const List_articles = [
    new Site_topics("Yubel", "Deck", "img/Background/exosister.jpg", "Learn the secrets of the Yubel deck", "", "2024-10-01"),
    new Site_topics("Goti", "Deck", "img/Background/exosister.jpg", "Learn the secrets of the Goti deck", "", "2024-09-15"),
    new Site_topics("Sky Striker", "Deck", "img/Background/exosister.jpg", "Learn the secrets of the Sky Striker deck", "", "2024-08-10"),
    new Site_topics("Memento", "Deck", "img/Background/exosister.jpg", "Learn the secrets of the Memento deck", "", "2024-07-20"),
    new Site_topics("Vaalmonica", "Deck", "img/Background/exosister.jpg", "Learn the secrets of the Vaalmonica deck", "", "2024-06-30"),
    new Site_topics("Volcanic", "Deck", "img/Background/exosister.jpg", "Learn the secrets of the Volcanic deck", "", "2024-05-25"),
    new Site_topics("Dinomorphia", "Deck", "img/Background/exosister.jpg", "Learn the secrets of the Dinomorphia deck", "", "2024-04-15"),
    new Site_topics("Exosister", "Deck", "img/Background/exosister.jpg", "Learn the secrets of the Exosister deck", "", "2024-03-01"),
    new Site_topics("Ritual Beast", "Deck", "img/Background/exosister.jpg", "Learn the secrets of the Ritual Beast deck", "", "2024-02-12"),
    new Site_topics("Vanquish Soul", "Deck", "img/Background/exosister.jpg", "Learn the secrets of the Vanquish Soul deck", "", "2024-01-28"),
];

let Current_page = 1;

function Print_search_results(Input){
    const Results_search = document.getElementById("Results_search");
    Results_search.innerHTML = ""; //Reset Search

    const Element_for_page = Layout_size();

    //================================================
    const Items_found = List_articles.filter(Articles_filter);

    function Articles_filter(Subject) {
        const Id_category = Subject.category.toLowerCase().includes(Input);
        const Id_name = Subject.name.toLowerCase().includes(Input);
        return Id_category || Id_name;
    }
    //================================================
    Items_found.sort((a, b) => {
        if (a.category > b.category){return 1;}
        if (a.category < b.category){return -1;}
        if (a.name > b.name){return 1;}
        if (a.name < b.name){return -1;}
        return 0;
    });

    const Total_pages = Math.ceil(Items_found.length / Element_for_page);
    const Page_index = (Current_page - 1) * Element_for_page;
    const Results_item_page = Items_found.slice(Page_index, Page_index + Element_for_page);
    
    Results_item_page.forEach(Items_stamp);

    function Items_stamp(Subject) {
        const Section = document.createElement("section");
        const Link = document.createElement("a");
        Link.href = Subject.URL || "#";
        //================================================
        const Header = document.createElement("div");
        Header.className = "Grid_header_1";
        const Img = document.createElement("img");
        Img.src = Subject.image_articles || "default.jpg";
        Img.alt = Subject.name;
        const Title = document.createElement("h3");
        Title.textContent = Subject.name;
        Header.appendChild(Img);
        Header.appendChild(Title);
        //================================================
        const Date_article = document.createElement("p");
        Date_article.className = "Results_date";
        Date_article.textContent = "Latest Update: ";
        const Date_element = document.createElement("time");
        Date_element.setAttribute("datetime", Subject.date);
        Date_element.textContent = `${Subject.date}`;
        Date_article.appendChild(Date_element);
        //================================================
        const Description_container = document.createElement("div");
        Description_container.className = "Results_description";
        const Description = document.createElement("p");
        Description.textContent = Subject.description;
        const Category = document.createElement("span");
        Category.textContent = Subject.category;
        Description_container.appendChild(Description);
        Description_container.appendChild(Category);
        //================================================
        Link.appendChild(Header);
        Link.appendChild(Date_article);
        Link.appendChild(Description_container);
        Section.appendChild(Link);
        //================================================
        Results_search.appendChild(Section);
    }
    Pagination_button_system(Total_pages);
}
//====================================================

Print_search_results("");

document.getElementById("Search_input").addEventListener("input", function () {
    Current_page = 1; //Reset Current_page
    Print_search_results(this.value.toLowerCase());
});

function Layout_size(){
    const width = window.innerWidth;
    if (width > 1439){
        return 8;
    }
    return 6;
}

function Pagination_button_system(Total_pages){
    const currentButton = document.getElementById("Current-1");
    const firstButton = document.getElementById("First-1");
    const prevButton = document.getElementById("Prev-1");
    const nextButton = document.getElementById("Next-1");
    const lastButton = document.getElementById("Last-1");

    firstButton.textContent = 1;
    currentButton.textContent = Current_page;
    lastButton.textContent = Total_pages;

    firstButton.disabled = Current_page === 1;
    prevButton.disabled = Current_page === 1; 
    nextButton.disabled = Current_page === Total_pages;
    lastButton.disabled = Current_page === Total_pages; 

    firstButton.onclick = () => {
        Current_page = 1;
        Print_search_results(document.getElementById("Search_input").value.toLowerCase());
    };
    prevButton.onclick = () => {
        if (Current_page > 1) {
            Current_page--;
            Print_search_results(document.getElementById("Search_input").value.toLowerCase());
        }
    };
    nextButton.onclick = () => {
        if (Current_page < Total_pages) {
            Current_page++;
            Print_search_results(document.getElementById("Search_input").value.toLowerCase());
        }
    };
    lastButton.onclick = () => {
        Current_page = Total_pages;
        Print_search_results(document.getElementById("Search_input").value.toLowerCase());
    };
}