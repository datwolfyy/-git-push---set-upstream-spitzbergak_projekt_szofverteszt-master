window.addEventListener("load", () => {
    var navbar = document.getElementById("navbar");
    var sticky = navbar.offsetTop;
    function stickyNavbar() {
        if (window.scrollY >= sticky) {
          navbar.classList.add("sticky")
        } else {
          navbar.classList.remove("sticky");
        }
    }      
    window.addEventListener("scroll", () => {
        stickyNavbar();
    });
    // select
    // random képek lekérése a fejléc alá 
    kep_leker();
    select_szovegek();
});