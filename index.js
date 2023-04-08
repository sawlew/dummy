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

function mainMenu(){
    var logo = document.getElementById("menu-svg");
    var m = document.getElementById("main-menu");
    var bg = document.getElementById("last-header");

    var m1 = document.getElementById("messenger");
    var logo1 = document.getElementById("mess-svg");
    var bg1 = document.getElementById("last-header1");
    var m2 = document.getElementById("profile-menu");
    var m3 = document.getElementById("notification1");
    var logo3 = document.getElementById("notify");
    var bg3 = document.getElementById("last-header2");

    if (m.style.display === "none"){
        m.style.display = "flex";
        logo.style.fill = "#1B74E4";
        bg.style.background = "#E7F3FF";

        m2.style.display = "none";
        m1.style.display = "none";
        logo1.style.fill = "black";
        bg1.style.background = "#e3e5e9";
        m3.style.display = "none";
        logo3.style.fill = "black";
        bg3.style.background = "#e3e5e9";
    }else{
        m.style.display = "none";
        logo.style.fill = "black";
        bg.style.background = "#e3e5e9";
    }
}

function messenger(){
    var m1 = document.getElementById("messenger");
    var logo1 = document.getElementById("mess-svg");
    var bg1 = document.getElementById("last-header1");

    var logo = document.getElementById("menu-svg");
    var m = document.getElementById("main-menu");
    var bg = document.getElementById("last-header");
    var m2 = document.getElementById("profile-menu");
    var m3 = document.getElementById("notification1");
    var logo3 = document.getElementById("notify");
    var bg3 = document.getElementById("last-header2");
    if (m1.style.display === "none"){
        m1.style.display = "flex";
        logo1.style.fill = "#1B74E4";
        bg1.style.background = "#E7F3FF";

        m2.style.display = "none";
        m.style.display = "none";
        logo.style.fill = "black";
        bg.style.background = "#e3e5e9";
        m3.style.display = "none";
        logo3.style.fill = "black";
        bg3.style.background = "#e3e5e9";
    }else{
        m1.style.display = "none";
        logo1.style.fill = "black";
        bg1.style.background = "#e3e5e9";
    }
}

function profileMenu(){
    var m2 = document.getElementById("profile-menu");

    var logo = document.getElementById("menu-svg");
    var m = document.getElementById("main-menu");
    var bg = document.getElementById("last-header");
    var m1 = document.getElementById("messenger");
    var logo1 = document.getElementById("mess-svg");
    var bg1 = document.getElementById("last-header1");
    var m3 = document.getElementById("notification1");
    var logo3 = document.getElementById("notify");
    var bg3 = document.getElementById("last-header2");
    if (m2.style.display === "none"){
        m2.style.display = "block";

        m1.style.display = "none";
        logo1.style.fill = "black";
        bg1.style.background = "#e3e5e9";
        m.style.display = "none";
        logo.style.fill = "black";
        bg.style.background = "#e3e5e9";
        m3.style.display = "none";
        logo3.style.fill = "black";
        bg3.style.background = "#e3e5e9";
    }else{
        m2.style.display = "none";
    }
}

function notification(){
    var m3 = document.getElementById("notification1");
    var logo3 = document.getElementById("notify");
    var bg3 = document.getElementById("last-header2");

    var logo = document.getElementById("menu-svg");
    var m = document.getElementById("main-menu");
    var bg = document.getElementById("last-header");
    var m1 = document.getElementById("messenger");
    var logo1 = document.getElementById("mess-svg");
    var bg1 = document.getElementById("last-header1");
    var m2 = document.getElementById("profile-menu");

    if (m3.style.display === "none"){
        m3.style.display = "block";
        logo3.style.fill = "#1B74E4";
        bg3.style.background = "#E7F3FF";

        m1.style.display = "none";
        logo1.style.fill = "black";
        bg1.style.background = "#e3e5e9";
        m.style.display = "none";
        logo.style.fill = "black";
        bg.style.background = "#e3e5e9";
        m2.style.display = "none"
    }else{
        m3.style.display = "none";
        logo3.style.fill = "black";
        bg3.style.background = "#e3e5e9";
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
function chat(){
    var m = document.getElementById("message");
    if (m.style.display === "none"){
        m.style.display = "block";
    }else{
        m.style.display = "none";
    }
}

function friend(){
    // const fri = document.getElementById("request");
    // const req = document.getElementById("friend-request");
    // if (fri.style.display === "flex"){
        // fri.style.display = "none";
        // req.style.display = "none";
    // }
    // setTimeout(function() {
        // $("#friend-request").fadeOut(1500);
        // $("#request").fadeOut(1500);
    // }, 3000);
    setTimeout(function() {
        $("#request").fadeOut(1500);
    },3000);
}