function initMap() {
    // The location of Uluru 43.68159338237201, -78.3611332463333
    const lakeOnt = { lat: 43.68159338237201, lng: -78.3611332463333 };
    // The map, centered at Uluru
    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 4,
        center: lakeOnt,
    });
    // The marker, positioned at Uluru
    const marker = new google.maps.Marker({
        position: lakeOnt,
        map: map,
    });
}