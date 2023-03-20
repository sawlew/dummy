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

function warning(){
    var b = document.getElementById("warning_div");
    if (b.style.display === "none") {
        b.style.display = "block";
    }else {
        b.style.display = "none";
    }
}

function offline(){
    var offline = document.getElementById("offline");
    if (offline.style.display === "flex"){
        offline.style.display = "none";
    }
}

function chat(){
    var m = document.getElementById("message");
    if (m.style.display === "none"){
        m.style.display = "block";
    }else{
        m.style.display = "none";
    }
}