function slideright(){
    const cards = document.getElementById('cards');
    cards.scrollLeft += 300;
}

function slideleft(){
    const cards = document.getElementById('cards');
    cards.scrollLeft -= 300;
}

function slideright1(){
    const cards = document.getElementById('cards-people');
    cards.scrollLeft += 300;
}

function slideleft1(){
    const cards = document.getElementById('cards-people');
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

function profileMenu(){
    var m = document.getElementById("profile-menu");
    if (m.style.display === "none"){
        m.style.display = "block";
    }else{
        m.style.display = "none";
    }
}

function messenger(){
    var m = document.getElementById("messenger");
    var logo = document.getElementById("mess-svg");
    var bg = document.getElementById("last-header1");
    if (m.style.display === "none"){
        m.style.display = "flex";
        logo.style.fill = "#1B74E4";
        bg.style.background = "#E7F3FF";
    }else{
        m.style.display = "none";
        logo.style.fill = "black";
        bg.style.background = "#e3e5e9";
    }
}

function mainMenu(){
    var logo = document.getElementById("menu-svg");
    var m = document.getElementById("main-menu");
    var bg = document.getElementById("last-header");
    if (m.style.display === "none"){
        m.style.display = "flex";
        logo.style.fill = "#1B74E4";
        bg.style.background = "#E7F3FF";
    }else{
        m.style.display = "none";
        logo.style.fill = "black";
        bg.style.background = "#e3e5e9";
    }
}

function reel(){
    var reel = document.getElementById("reel-stuff");
    var story = document.getElementById("story-stuff");
    var icon = document.getElementById("reel-icon");
    var story_icon = document.getElementById("story-icon");
    var reel_span = document.getElementById("reel_span");
    var story_span = document.getElementById("story_span");
    var reel_cover = document.getElementById("cover-reel");
    var story_cover = document.getElementById("cover");
    if (reel.style.display === "none"){
        reel.style.display = "flex";
        story.style.display = "none";
        icon.style.fill = "#1B74E4";
        reel_span.style.color = "#1B74E4";
        story_icon.style.fill = "#606266";
        story_span.style.color = "grey";
        reel_cover.style.borderBottom = "3px solid #1B74E4";
        story_cover.style.borderBottom = "3px solid white";
    }
}

function story(){
    var reel = document.getElementById("reel-stuff");
    var story = document.getElementById("story-stuff");
    var icon = document.getElementById("reel-icon");
    var story_icon = document.getElementById("story-icon");
    var reel_span = document.getElementById("reel_span");
    var story_span = document.getElementById("story_span");
    var reel_cover = document.getElementById("cover-reel");
    var story_cover = document.getElementById("cover");
    if (story.style.display === "none"){
        story.style.display = "flex";
        reel.style.display = "none";
        icon.style.fill = "#606266";
        story_icon.style.fill = "#1B74E4";
        reel_span.style.color = "grey";
        story_span.style.color = "#1B74E4";
        reel_cover.style.borderBottom = "3px solid white";
        story_cover.style.borderBottom = "3px solid #1B74E4";
    }
}