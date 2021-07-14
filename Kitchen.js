class Kitchen {
    constructor(kitchenName) {
        this.list = [];
        this.kitchenName = kitchenName;
    }

    intro() {
        console.log(`Sveiki atvyke i ${this.kitchenName} virtuve!`);
    }

    nupirkta(name, amount) {
        let productObject = { name, amount }
        this.list.push(productObject);
        console.log(productObject);
    }

    turimiProduktai() {
        let productNumber = 0;
        for (let i = 0; i < this.list.length; i++) {
            const product = this.list[i];
            const newProduct = this.pirmaDidzioji(product.name)
            productNumber++
            console.log(`${productNumber}. ${newProduct}: ${product.amount}`);
        }
    }

    pirmaDidzioji(text) {
        let atsakymas = '';
        // rasti pirmaja raide
        // rasti likusias raides
        // rasta pirmaja raide verciam i Didziaja
        // atsakymas: didzioji raide + likusios raides
        atsakymas = text;
        return atsakymas;
    }

    sunaudota(itemName, newAmount) {
        for (let i = 0; i < this.list.length; i++) {
            const product = this.list[i];

            if (itemName === product.name) {
                product.amount -= newAmount;
                break;
            }

        }
    }

    // sugedesProduktas(item) {
    //     if (!this.isValidIndex(item)) {
    //         return false;
    //     }

    //     const updatedList = [];

    //     for (let i = 0; i < this.list.length; i++) {
    //         if (item !== item) {
    //             updatedList.push(this.list(item));
    //         }
    //     }
    //     this.list = updatedList;
    // }

}

module.exports = Kitchen;