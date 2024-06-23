function stylesheetToggle():void {
    const style: HTMLLinkElement | null = document.getElementById("stylesheet") as HTMLLinkElement | null;

    if (style) {
        const currStyle: string | null = style.getAttribute("href");
        if(currStyle == "style1.css"){
            const newStyle: string = "style2.css";
            style.setAttribute("href", newStyle);
            localStorage.setItem("href", newStyle);
        } 
        else {                
            const newStyle: string = "style1.css";
            style.setAttribute("href", newStyle);
            localStorage.setItem("href", newStyle);
        }
    }
}


window.onload = function(){
    const style: HTMLLinkElement | null = document.getElementById("stylesheet") as HTMLLinkElement | null;;
    if(style){
        style.setAttribute("href", localStorage.getItem("href") || "style1.css");
    }
}




