describe('template spec', () => {
	it('Oldal betöltése', () => {
	  cy.visit('http://127.0.0.1:5500/index.html')
	})
  
	// HTML tesztek ----------------------------------------------------------------------------
	
	// 1. Ellenőrzi, hogy a címek a megfelelő helyekre mutatnak-e a navbarból
	it('Navigációs linkek ellenőrzése', () => {
	  cy.visit('http://127.0.0.1:5500/index.html')
	  cy.get('#navbar a').each((link) => {
		cy.wrap(link).click() // Minden linket megnyit
		cy.url().should('include', link.attr('href')) // Ellenőrzi, hogy a megfelelő helyre mutat-e
	  })
	})
  
	// 2. Ellenőrzi, hogy a headerben a kép megjelenik-e
	it('Címkép megjelenítésének ellenőrzése', () => {
	  cy.visit('http://127.0.0.1:5500/index.html')
	  cy.get('header img').should('be.visible') // Header kép ellenőrzése
	})
  
	// 3. Ellenőrzi, hogy a történet rész megjelenik-e
	it('Történet rész megjelenítésének ellenőrzése', () => {
	  cy.visit('http://127.0.0.1:5500/index.html')
	  cy.get('#tortenet').should('be.visible') // Ellenőrzi, hogy a történet rész megjelenik-e
	})
  
	// 4. Ellenőrzi, hogy a galéria rész megjelenik-e
	it('Galéria rész megjelenítésének ellenőrzése', () => {
	  cy.visit('http://127.0.0.1:5500/index.html')
	  cy.get('#galeria').should('be.visible') // Ellenőrzi, hogy a galéria rész megjelenik-e
	})
  
	// 5. Ellenőrzi, hogy a footer megjelenik-e
	it('Footer megjelenítésének ellenőrzése', () => {
	  cy.visit('http://127.0.0.1:5500/index.html') 
	  cy.get('#footer').should('be.visible') // Ellenőrzi, hogy a footer megjelenik-e
	})
  
	// CSS tesztek ----------------------------------------------------------------------------
  
	// 6. Ellenőrzi, hogy a címek stílusa megfelelő-e
	it('Címek stílusának ellenőrzése', () => {
	  cy.visit('http://127.0.0.1:5500/index.html') 
	  cy.get('h1').should('have.css', 'text-align', 'center') // Ellenőrzi a h1 címek középre igazítását
	  cy.get('h2').should('have.css', 'text-align', 'center') // Ellenőrzi a h2 címek középre igazítását
	})
  
	// 7. Ellenőrzi, hogy a szöveg bekezdéseinek stílusa megfelelő-e
	it('Szöveg bekezdéseinek stílusának ellenőrzése', () => {
	  cy.visit('http://127.0.0.1:5500/index.html') 
	  cy.get('p').should('have.css', 'text-align', 'justify') // Ellenőrzi a bekezdések igazítását
	})
  
	// 8. Ellenőrzi, hogy a header képe megfelelően megjelenik-e
	it('Header kép megjelenítésének ellenőrzése', () => {
	  cy.visit('http://127.0.0.1:5500/index.html')
	  cy.get('header img').should('have.css', 'object-fit', 'cover') // Ellenőrzi a kép igazítását
	})
  
	// 9. Ellenőrzi, hogy a navbar megfelelően formázott-e
	it('Navbar formázásának ellenőrzése', () => {
	  cy.visit('http://127.0.0.1:5500/index.html') 
	  cy.get('#navbar').should('have.css', 'overflow', 'hidden') // Ellenőrzi az overflow tulajdonságot
	  cy.get('#navbar a').should('have.css', 'color', 'rgb(242, 242, 242)') // Ellenőrzi a linkek színét
	})
  
	// 10. Ellenőrzi, hogy a háttérszín megfelelő-e
	it('Háttérszín ellenőrzése', () => {
	  cy.visit('http://127.0.0.1:5500/index.html')
	  cy.get('body').should('have.css', 'background-color', 'rgb(239, 239, 239)') // Ellenőrzi a háttérszín beállítását
	})
  })