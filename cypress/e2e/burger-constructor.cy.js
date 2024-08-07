import "@4tw/cypress-drag-drop"

describe("E2E_TEST_BURGER_CONSTRUCTOR", () => {
    beforeEach(() => {
        cy.visit("/")
        cy.intercept("GET", "api/ingredients", {fixture: "ingredients.json"})
        cy.get("a[class^=burger-ingredient-card_container]").as("ingredients")
        cy.get("@ingredients").first().as("bun")
        cy.get("@ingredients").eq(5).as("main")
        cy.get("@ingredients").last().as("sauce")
    })


    it("TEST_LOAD_INGREDIENTS", () => {
        cy.get("@ingredients").should("have.length", 15)
    })

    it("TEST_COMPONENTS_EXIST", () => {
        cy.get("div[class^=burger-constructor-plug_wrapper]").as("plugs")
        cy.get("@plugs").should("have.length", 3)
        cy.get("@plugs").first().contains("Верхняя булка")
        cy.get("@plugs").eq(1).contains("Начинки")
        cy.get("@plugs").last().contains("Нижняя булка")
    })

    it("TEST_ADD_INGREDIENTS_IN_CONSTRUCTOR", () => {
        cy.get("div[class^=burger-constructor_cardsContainer]").as("dropContainer")
        cy.get("@bun").drag("@dropContainer")
        cy.get("@main").drag("@dropContainer")
        cy.get("@sauce").drag("@dropContainer")

        cy.get("div[class^=constructor-element]").as("orderIngridients")
        cy.get("@orderIngridients").should("have.length", 4)
        cy.get("@orderIngridients")
            .first()
            .contains("Ингредиент 1 (верх)")

        cy.get("@orderIngridients")
            .last()
            .contains("Ингредиент 1 (низ)")

        cy.get("@orderIngridients")
            .first()
            .contains("Ингредиент 1 (верх)")

        cy.get("@orderIngridients")
            .eq(1)
            .contains("Ингредиент 6")

        cy.get("@orderIngridients")
            .eq(2)
            .contains("Ингредиент 10")

        cy.get("button").contains("Оформить заказ").click()


        cy.get("input[name=email]").type(`${"test@yandex.ru"}`)
        cy.get("input[name=password]").type(`${"1234"}`)
        cy.get("Button").click()
        cy.intercept("POST", "api/auth/login", {fixture: "login.json"})

        cy.get("button").contains("Оформить заказ").click()
        cy.intercept("POST", "api/orders", {fixture: "order.json"}).as("order")


        cy.get("h1[class^=order-details_title]").contains("777")
        cy.get("[class^=order-details_subtitle]").contains("Ингридиент 1 бургер")
    })
})