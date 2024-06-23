function stylesheetToggle() {
    var style = document.getElementById("stylesheet");
    if (style) {
        var currStyle = style.getAttribute("href");
        if (currStyle == "style1.css") {
            var newStyle = "style2.css";
            style.setAttribute("href", newStyle);
            localStorage.setItem("href", newStyle);
        }
        else {
            var newStyle = "style1.css";
            style.setAttribute("href", newStyle);
            localStorage.setItem("href", newStyle);
        }
    }
}

window.onload = function () {
    var style = document.getElementById("stylesheet");
    ;
    if (style) {
        style.setAttribute("href", localStorage.getItem("href") || "style1.css");
    }
};
