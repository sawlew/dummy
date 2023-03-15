function slideright(){
    const cards = document.getElementById('cards');
    cards.scrollLeft += 300;
}

function slideleft(){
    const cards = document.getElementById('cards');
    cards.scrollLeft -= 300;
}



function seemore(){
    var x = document.getElementById("more_list");
    var y = document.getElementById("drop_down");
    if (x.style.display === "none") {
        x.style.display = "block";
        y.style.display = "none";
    }else {
        x.style.display = "none";
        y.style.display = "flex";
    }
}