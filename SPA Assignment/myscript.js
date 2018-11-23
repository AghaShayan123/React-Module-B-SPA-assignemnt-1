var home= document.getElementById("home-section");
var contact = document.getElementById("contact-section");
var aboutUs = document.getElementById("about-section");
var gallery = document.getElementById("gallery-section");

function homeClick(){
    if(getComputedStyle(home).display == "none"){
        home.style.display= "block";
        contact.style.display ="none";
        aboutUs.style.display= "none";
        gallery.style.display= "none";
    }
}

function contactClick(){
    
    if(getComputedStyle(contact).display == "none" ){
        home.style.display= "none";
        aboutUs.style.display= "none";
        gallery.style.display= "none";
        contact.style.display = "block";
    }
}

function aboutUsClick(){
    if(getComputedStyle(aboutUs).display == "none"){
        home.style.display= "none";
        contact.style.display ="none";
        aboutUs.style.display= "block";
        gallery.style.display= "none";
    }
}

function galleryClick(){
    if(getComputedStyle(gallery).display == "none"){
        home.style.display= "none";
        contact.style.display ="none";
        aboutUs.style.display= "none";
        gallery.style.display= "block";
    }
}