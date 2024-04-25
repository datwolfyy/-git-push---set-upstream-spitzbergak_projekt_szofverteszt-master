const { writeFile } = require("fs/promises");
const { Builder, Browser, By, Key, until, Select } = require("selenium-webdriver");

function sleep(time) {
    return new Promise((resolve) => setTimeout(resolve, time));
}

(async function topszotar() {
    let driver = await new Builder().forBrowser(Browser.FIREFOX).build();
    try {
        
        await driver.get("http://127.0.0.1:5500");
        //await driver.wait(until.elementLocated(By.css("#kepek img:first-of-type")))

        await sleep(1000);

        const actions = driver.actions({ async: true });

        let elovilag_link = await driver.findElement(By.css("#navbar a[href=\"#elovilag\"]"))
        await actions.move({origin: elovilag_link}).click().perform();

        await sleep(1000);

        let szoveg_kivalaszto = await driver.findElement(By.css("#elovilag select"));
        const szoveg_select = new Select(szoveg_kivalaszto);
        const lehetosegek = await szoveg_select.getOptions();
        console.log("A select választási lehetőségei: " + lehetosegek);

        await szoveg_select.selectByValue("sarkiroka");

        let oldalcim = await driver.getTitle();
        let cim_hossz = oldalcim.length;
        console.log("Oldal címe " + oldalcim + ", hossza: " + cim_hossz);

        let galeria_link = await driver.findElement(By.css("#navbar a[href=\"#galeria\"]"));
        await actions.move({origin: galeria_link}).click().perform();

        var idx = Math.round(Math.random() * 10);
        console.log("random index: "+ idx);
        let galeria_kepek = await driver.findElements(By.css("#galeria img"));
        await actions.move({origin: galeria_kepek[idx]}).click().perform();

        await driver.get("http://127.0.0.1:5500");

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