const links = document.querySelectorAll("div.header > h4");

for (const link of links) {
    link.addEventListener("click", clickHandler);
}

function clickHandler(e) {
    e.preventDefault();
    const id = this.getAttribute("id");
    var offsetTop = 0;
    if (id === "header_locations")
    {
        var offsetTop = document.getElementById("locations").offsetTop - 80;
    }
    else if (id === "header_featured")
    {
        var offsetTop = document.getElementById("featured").offsetTop - 80;
    }
    else if (id === "header_mission")
    {
        var offsetTop = document.getElementById("mission").offsetTop - 80;
    }

    scroll({
        top: offsetTop,
        behavior: "smooth"
    });
}