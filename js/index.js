// Navbar

window.onscroll = function() {stickyNavbar()};

// Get the navbar
var navbar = document.getElementById("navbar");

// Get the offset position of the navbar
var sticky = navbar.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function stickyNavbar() {
  if (window.scrollY >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}


//Select



window.addEventListener("load", () => {
    const optionSelector = document.getElementById('optionSelector');
    const allatContent = document.getElementById('allatContent');
    optionSelector.addEventListener('change', function() {
        const selectedOption = optionSelector.value;
        let selectedContent = '';
  
        switch(selectedOption) {
            case 'jegesmedve':
                selectedContent = "A Spitzbergák ikonikus lakója, a jegesmedve, a sarkvidék egyik legnagyobb ragadozója. Hatalmas testének és vastag bundájának köszönhetően képes túlélni a hideg éghajlatot. A jegesmedvék fő élelmiszerforrása a fóka, amelyet a jégmezőkön zsákmányolnak. Az éghajlatváltozás következtében a jegesmedvék számára egyre nehezebbé válik a túlélés, mivel elveszítik a fókákra vadászásra alkalmas jégmezőket.";
                break;
            case 'sarkiroka':
                selectedContent = "A Spitzbergák másik jellegzetes állata a sarki róka, amely a sarkvidéki területek adaptív mesterségeként él. A sarki rókák fehér bundájukkal és kicsi fülükkel alkalmazkodtak a hideg éghajlathoz. Kiváló ragadozók, és a jegesmedvék után a második legnagyobb számban találhatók meg a Spitzbergákon. Élelmüket főként kisemlősökből és madarakból szerzik, de nem vetik meg a halakat sem.";
                break;
            case 'renszarvas':
                selectedContent = "A rénszarvasok a Spitzbergák fő emlős lakói, és jellegzetes látványt nyújtanak a tundrákon és a hegyekben. Ezek a páratlanul széles agancsú emlősök a tél kemény éghajlatához alkalmazkodtak, vastag szőrzettel és kerek lábakkal rendelkeznek. A rénszarvasok nagy csoportokban élnek, és főként a tundra növényeivel táplálkoznak, beleértve a moha és zuzmót.";
                break;
            case 'gyongybagoly':
                selectedContent = "A Spitzbergák madárvilágának egyik jellegzetes képviselője a gyöngybagoly, amely szintén sarkvidéki alkalmazkodásokkal rendelkezik. A gyöngybagoly rendkívül nagy faj, súlyos testtömegével és vastag szőrzetével, amely lehetővé teszi számára, hogy a hideg éghajlatban is túléljen. A Spitzbergákon a gyöngybagoly fő zsákmányai közé tartoznak a rágcsálók és a madarak.";
                break;
        }
  
        allatContent.innerHTML = `<div class="selectedContent">${selectedContent}</div>`;
    });  
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