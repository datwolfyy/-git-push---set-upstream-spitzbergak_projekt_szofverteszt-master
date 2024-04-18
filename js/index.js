window.addEventListener("load", () => {
    let kep_divek = document.querySelectorAll("#kepek div");
    kep_divek.forEach(async (div) => {
        let kep = document.createElement("img");
        let valasz = await fetch("https://api.unsplash.com/photos/random?query=svalbard&orientation=landscape", {
            "method": "GET",
            "headers": {
                "Content-Type": "application/json",
                "Accept-Version": "v1",
                "Authorization": "Client-ID " + config.UNSPLASH_ACCESS_KEY
            }
        });
        let kep_valasz = await valasz.json();
        console.log(kep_valasz);
        kep.src = kep_valasz.urls.small;
        div.appendChild(kep);
    });
});