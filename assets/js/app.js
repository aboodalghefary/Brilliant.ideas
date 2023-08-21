let searchIcon = document.querySelector(".fa-magnifying-glass")
let searchBox = document.querySelector(".searchbox")
let closeBox = document.querySelector("#close-search")
// console.log(searchIcon , searchBox ,closeBox);

searchIcon.onclick = _ =>{
    searchBox.style.display = "flex";
}
closeBox.onclick = _ =>{
    searchBox.style.display = "none";
}

let up = document.querySelector(".up")
window.onscroll =_ =>{
    if (scrollY > 0) {
        up.style.display = "block"
    } else {
        up.style.display = "none"
    }
}

up.onclick = _ =>{
    scrollTo({
        top:0 , left:0 , behavior:"smooth"
    })
}