// copied from the web-toiletpaper github repository. JS done by weaselovercome
// removed numinput for my specific use case

var gallery = document.getElementById("comics");
var length = gallery.children.length;

// only actually add controls if there's more than one page
if (length > 1) {
    var controls = document.createElement("div");
    controls.id = "controls";
    controls.className = "controls";
    controls.innerHTML = `
    <div><button onclick="first();">«</button>
    <button onclick="back();">back</button></div>
    <div><button onclick="forward();">next</button>
    <button onclick="last();">»</button></div>
    `;
    gallery.parentElement.insertBefore(controls, gallery);
    var input = document.querySelector("#controls");

    var controls2 = controls.cloneNode(true);
    controls2.id = "controls2";
    document.getElementById("maincontent").appendChild(controls2);
    var input2 = document.querySelector("#controls2");

    changeImage(1); // initialize it on first page
}

// change image on enter
input.addEventListener("keyup", (e) => {
    if (e.key == "Enter") {
        // avoid completely hiding it if the user is stupid
        if (input.value > 0 && input.value <= length)
            changeImage(input.value);
    }
});
input2.addEventListener("keyup", (e) => {
    if (e.key == "Enter") {
        if (input.value > 0 && input.value <= length)
            changeImage(input2.value);
    }
});

// arrow keys
document.addEventListener("keydown", (e) => {
    if (e.key == "ArrowLeft") {
        back();
    }
    if (e.key == "ArrowRight") {
        forward();
    }
});

var current;

function changeImage(image) {
    current = image; // NOT zero indexed
    input.value = current;
    input2.value = current;

    for (let i = 0; i < length; i++) {
        // MAKE IT ZERO INDEXED
        let show = i == image-1 ? "block" : "none";
        gallery.children.item(i).style.display = show;
    }
}

function back() {
    if (current-1 < 1) {
        return;
    }
    changeImage(current-1);
}

function forward() {
    if (current+1 > length) {
        return;
    }
    changeImage(current+1);
}

function first() {
    changeImage(1);
}

function last() {
    changeImage(length);
}