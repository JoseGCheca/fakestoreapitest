
describe("API tests", async () => {
    const fakeStoreProducts = new FakeStoreProducts();
    const fakeArrayIds = Array.from(Array(40).keys());
    const products = JSON.parse(await readFile(new URL('./products.json')));

    describe("Fetch all products", () => {
        it("should return a JSON of all products", async () => {
            expect(await fakeStoreProducts.calculateCartPrice(fakeArrayIds)).to.be.equal(products);
        })
    })
})