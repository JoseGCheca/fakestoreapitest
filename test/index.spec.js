
import { expect } from "chai"
import FakeStoreProducts from "../lib/index"

describe("Index test", () => {
    const fakeStoreProducts = new FakeStoreProducts();
    const fakeArrayIds = Array.from(Array(40).keys());
    describe("calculate price basket ", () => {
        it("should return a number as a sum", async () => {
            expect(await fakeStoreProducts.calculateCartPrice([1, 2])).to.be.a('number');
        })

        it("All products should return the sum of ", async () => {
            expect(await fakeStoreProducts.calculateCartPrice(fakeArrayIds)).to.be.equal(3240.92);
        })

        it("should be rejected with not a number as param", async () => {
            await fakeStoreProducts.calculateCartPrice('a').catch(error => {
                expect(error).to.be.an('Error');
            })
        })
    })
})