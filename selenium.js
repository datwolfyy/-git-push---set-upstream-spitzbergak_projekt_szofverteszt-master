const { writeFile } = require("fs/promises");
const { Builder, Browser, By, Key, until, Select } = require("selenium-webdriver");
const assert = require("assert");

function sleep(time) {
    return new Promise((resolve) => setTimeout(resolve, time));
}

(async function spitzbergak() {
    let driver = await new Builder().forBrowser(Browser.FIREFOX).build();
    try {        
        await driver.get("http://127.0.0.1:5500");
        const actions = driver.actions({ async: true });
        
        await sleep(1000);

        let oldalcim = await driver.getTitle();
        let cim_hossz = oldalcim.length;
        console.log("Oldal címe " + oldalcim + ", hossza: " + cim_hossz);
        
        let size = await driver.manage().window().getSize();
        let w = size.width;
        let h = size.height;
        console.log("Böngészőablak szélessége: " + w + ", hosszúsága: " + h);

        //await driver.wait(until.elementLocated(By.css("#kepek img:first-of-type")))

        let navbar_osztaly = await driver.findElement(By.css("#navbar")).getAttribute("class");
        console.log("A navbar class attribútumának tartalma: " + navbar_osztaly)

        let random_kepek = await driver.findElements(By.css("#kepek img"));
        console.log("A három random kép url-je: ");
        random_kepek.forEach(async (kep) => {
            let url = await kep.getAttribute("src");
            console.log(url);
        });
        
        let tortenet_link = await driver.findElement(By.css("#navbar a[href=\"#tortenet\"]"));
        await actions.move({origin: tortenet_link}).click().perform();
        
        let foldrajz_link = await driver.findElement(By.css("#navbar a[href=\"#foldrajz\"]"));
        await actions.move({origin: foldrajz_link}).click().perform();

        let turizmus_link = await driver.findElement(By.css("#navbar a[href=\"#turizmus\"]"));
        await actions.move({origin: turizmus_link}).click().perform();
        
        let elovilag_link = await driver.findElement(By.css("#navbar a[href=\"#elovilag\"]"));
        await actions.move({origin: elovilag_link}).click().perform();

        let elovilag_select = new Select(await driver.findElement(By.css("#elovilag select")));
        await elovilag_select.selectByValue("sarkiroka");
        
        await sleep(1000);

        let galeria_link = await driver.findElement(By.css("#navbar a[href=\"#galeria\"]"));
        await actions.move({origin: galeria_link}).click().perform();

        var idx = Math.round(Math.random() * 6);
        let galeria_kepek = await driver.findElements(By.css("#galeria img"));
        await sleep(1000);
        await galeria_kepek[idx].click();

        driver.takeScreenshot().then(async (image, err) => {
            await writeFile("screenshot-" + Date.now() + ".png", image, "base64");
        });
    } catch (err) {
        console.log(err);
    } finally {
        await sleep(2000);
        await driver.quit();
    }
})();