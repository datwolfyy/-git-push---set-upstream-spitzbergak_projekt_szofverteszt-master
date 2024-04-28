var cf = require("../js/config");
var config = cf.config;

async function kep_leker(darab) {
    let kepek = [];
    let valasz = await fetch("https://api.unsplash.com/photos/random?query=svalbard&orientation=landscape&count=" + darab, {
        "method": "GET",
        "headers": {
            "Content-Type": "application/json",
            "Accept-Version": "v1",
            "Authorization": "Client-ID " + config.UNSPLASH_ACCESS_KEY
        }
    });
    let kep_valasz = await valasz.json();
    kep_valasz.forEach((kep) => {
        kepek.push(kep.urls.small);
    });
    return kepek;
}

function kep_betolt() {
    let kep_divek = document.querySelectorAll("#kepek div");
    let db = kep_divek.length;
    kep_leker(db).then((kepek) => {
        var i = 0;
        kep_divek.forEach(async (div) => {
            let kep = document.createElement("img");
            kep.src = kepek[i];
            div.appendChild(kep);
            i++;
        });
    });
    
}

function allat_szoveg(allat) {
    let szoveg = '';
  
    switch(allat) {
        case 'jegesmedve':
            szoveg = "A Spitzbergák ikonikus lakója, a jegesmedve, a sarkvidék egyik legnagyobb ragadozója. Hatalmas testének és vastag bundájának köszönhetően képes túlélni a hideg éghajlatot. A jegesmedvék fő eledele a fóka, amelyet a jégmezőkön zsákmányolnak. Az éghajlatváltozás következtében a jegesmedvék számára egyre nehezebbé válik a túlélés, mivel elveszítik a fóka vadászásra alkalmas jégmezőket.";
            break;
        case 'sarkiroka':
            szoveg = "A Spitzbergák másik jellegzetes állata a sarki róka. A sarki rókák fehér bundájukkal és kicsi fülükkel alkalmazkodtak a hideg éghajlathoz. Kiváló ragadozók, és a jegesmedvék után a második legnagyobb számban találhatók meg a Spitzbergákon. Élelmüket főként kisemlősökből és madarakból szerzik, de nem vetik meg a halakat sem.";
            break;
        case 'renszarvas':
            szoveg = "A rénszarvasok a Spitzbergák fő emlős lakói, és különleges látványt nyújtanak a tundrákon, a hegyekben. Ezek a páratlanul széles agancsú emlősök a tél kemény éghajlatához alkalmazkodtak, vastag szőrzettel és kerek patákkal rendelkeznek. A rénszarvasok nagy csoportokban élnek, és főként a tundra növényeivel táplálkoznak, beleértve a mohát és zuzmót.";
            break;
        case 'gyongybagoly':
            szoveg = "A Spitzbergák madárvilágának egyik jellegzetes képviselője a gyöngybagoly, amely szintén sarkvidéki jellegzetességekkel rendelkezik. A gyöngybagoly rendkívül nagy madár-faj,  vastag tollazata lehetővé teszi számára, hogy a hideg éghajlatban is túléljen. A Spitzbergákon a gyöngybagoly fő zsákmányai közé tartoznak a rágcsálók és kisebb madarak.";
            break;
    }
    return szoveg;
}

function select_szovegek() {
    const optionSelector = document.getElementById('optionSelector');
    const allatContent = document.getElementById('allatContent');
    optionSelector.addEventListener('change', function() {
        const selectedOption = optionSelector.value;
        let sz = allat_szoveg(selectedOption);
        allatContent.innerHTML = `<div class="selectedContent">${sz}</div>`;
    });
}

module.exports = {
    kep_leker,
    kep_betolt,
    select_szovegek,
    allat_szoveg
};