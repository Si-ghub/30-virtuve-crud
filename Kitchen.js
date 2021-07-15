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
        // console.log(productObject);
    }

    turimiProduktai() {
        let productNumber = 0;
        for (let i = 0; i < this.list.length; i++) {
            const product = this.list[i];
            const newProduct = this.firstBig(product.name)
            productNumber++
            console.log(`${productNumber}. ${newProduct}: ${product.amount}`);
        }
    }

    firstBig(text) {
        let answer = '';
        answer = text.charAt(0).toUpperCase() + text.slice(1);
        return answer;
    }

    sunaudota(item, newAmount) {
        for (let i = 0; i < this.list.length; i++) {
            const product = this.list[i];

            if (item === product.name) {
                product.amount -= newAmount;
                break;
            }

        }
    }

    sugedesProduktas(name) {
        const updatedList = [];

        for (let i = 0; i < this.list.length; i++) {
            if (this.list[i].name !== name) {
                updatedList.push(this.list[i]);
            }
        }
        this.list = updatedList;
    }

}

module.exports = Kitchen;