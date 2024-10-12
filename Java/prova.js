const headers = document.querySelectorAll(".Extra_content_main h3");
const contents = document.querySelectorAll(".Extra_content_main .Container_overflow_hidden");

headers[0].classList.add("active");
contents[0].classList.add("active");
;
headers.forEach((header, i) => {
    header.addEventListener('click', function() {
        if (!header.classList.contains("active")){
            headers.forEach((head, index) => {
                head.classList.remove("active");
                contents[index].classList.remove("active");
            });
            header.classList.add("active");
            contents[i].classList.add("active");
        }
    });
});




