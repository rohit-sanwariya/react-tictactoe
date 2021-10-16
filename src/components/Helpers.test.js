const Helpers = require("./Helpers")
// @ponicode
describe("Helpers.calculateWinner", () => {
    test("0", () => {
        let callFunction = () => {
            Helpers.calculateWinner([1, 1, -5.48])
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            Helpers.calculateWinner([1, 1, 0])
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            Helpers.calculateWinner([100, 100, -5.48])
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            Helpers.calculateWinner([0, 0, 1])
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            Helpers.calculateWinner([-5.48, 1, 1])
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            Helpers.calculateWinner(undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})
