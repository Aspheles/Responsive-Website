function navbar(){
    var navbar_links = document.getElementById("links");
    var main_page = document.querySelector(".main-page");
    if(navbar_links.style.display === "inline-block"){
        navbar_links.style.display = "none";
    }else {
        navbar_links.style.display = "inline-block";
        
    }
}