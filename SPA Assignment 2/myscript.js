var home= document.getElementById("home-section");
var contact = document.getElementById("contact-section");
var aboutUs = document.getElementById("about-section");
var gallery = document.getElementById("gallery-section");

function homeClick(){
    if(getComputedStyle(home).display == "none"){
        history.pushState({},"","index.html");
        home.style.display= "block";
        contact.style.display ="none";
        aboutUs.style.display= "none";
        gallery.style.display= "none";
    }
}

function contactClick(){
    
    if(getComputedStyle(contact).display == "none" ){
        history.pushState({},"","contact.html");
        home.style.display= "none";
        aboutUs.style.display= "none";
        gallery.style.display= "none";
        contact.style.display = "block";
    }
}

function aboutUsClick(){
    if(getComputedStyle(aboutUs).display == "none"){
        history.pushState({},"","aboutUs.html");
        home.style.display= "none";
        contact.style.display ="none";
        aboutUs.style.display= "block";
        gallery.style.display= "none";
    }
}

function galleryClick(){
    if(getComputedStyle(gallery).display == "none"){
        history.pushState({},"","gallery.html");
        home.style.display= "none";
        contact.style.display ="none";
        aboutUs.style.display= "none";
        gallery.style.display= "block";
    }
}