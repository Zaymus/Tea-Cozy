const locations = document.getElementById("header_locations");
const featured = document.getElementById("header_featured");
const mission = document.getElementById("header_mission");

locations.onclick = () => {
    location.href = "#locations";
    window.scrollTo(window.scrollX, scrollY - 80);
};

featured.onclick = () => {
    location.href = "#featured";
    window.scrollTo(window.scrollX, scrollY - 80);
};

mission.onclick = () => {
    location.href = "#mission";
    window.scrollTo(window.scrollX, scrollY - 10);
};