
describe('Add new number', () => {
  it('Should return error on no name', () => {
    cy.visit('http://localhost:3000')

    cy.get('input[name="number"]').type('12-34567')
    cy.get('button[type="submit"]').click()

    cy.on('window:alert', (str) => {
      expect(str).to.equal(`Debes ingresar un nombre`)
    })
  })

  it('Should return error on no number', () => {
    cy.visit('http://localhost:3000')

    cy.get('input[name="name"]').type('Name of Person')
    cy.get('button[type="submit"]').click()

    cy.on('window:alert', (str) => {
      expect(str).to.equal(`Debes ingresar un numero`)
    })
  })

  it('Should add a new number', () => {
    cy.visit('http://localhost:3000')

    cy.get('input[name="name"]').type('Name of Person')
    cy.get('input[name="number"]').type('12-34567')
    cy.get('button[type="submit"]').click()

    cy.get('p').contains('Name of Person - 12-34567')
  })
})