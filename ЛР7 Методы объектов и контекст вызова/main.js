//1
let products = {
    обувь: {
        ботинки: [
            {
                id: 1,
                size: 42,
                color: 'black',
                price: 2500
            },
            {
                id: 2,
                size: 40,
                color: 'brown',
                price: 2800
            }
        ],
        кроссовки: [
            {
                id: 3,
                size: 39,
                color: 'white',
                price: 2000
            },
            {
                id: 4,
                size: 41,
                color: 'blue',
                price: 2200
            }
        ],
        сандалии: [
            {
                id: 5,
                size: 43,
                color: 'green',
                price: 2200
            },
            {
                id: 6,
                size: 43,
                color: 'green',
                price: 2100
            }
        ]
    },
    //2
    filterShoes: function (minPrice, maxPrice, size, color) {
        let filtered = [];
        for (const type in this.обувь) {
            for (const shoe of this.обувь[type]) {
                if (
                    shoe.price >= minPrice &&
                    shoe.price <= maxPrice &&
                    shoe.size === size &&
                    shoe.color === color
                ) {
                    filtered.push(shoe.id);
                }
            }
        }

        return filtered;
    }
};

console.log(products.filterShoes(2000, 2500, 43, 'green'));

//3-4
let newProducts = {
    обувь: {
        ботинки: [
            {
                id: 1,
                size: 42,
                color: 'black',
                value: 2300,
                discount: 0.1
                /*
                get цена() {
                    return this.value * (1 - this.discount);
                }
                */
            },
            {
                id: 2,
                size: 40,
                color: 'brown',
                value: 2800,
                discount: 0.5
            }
        ],
        кроссовки: [
            {
                id: 3,
                size: 39,
                color: 'white',
                value: 2100,
                discount: 0.3
            },
            {
                id: 4,
                size: 41,
                color: 'blue',
                value: 2400,
                discount: 0.4
            }
        ],
        сандалии: [
            {
                id: 5,
                size: 43,
                color: 'green',
                value: 1800,
                discount: 0.2
            },
            {
                id: 6,
                size: 43,
                color: 'green',
                value: 2000,
                discount: 0.5
            }
        ]
    }
};
for (let type in newProducts['обувь']) {
    for (let shoe in newProducts['обувь'][type]) {
        Object.defineProperties(newProducts['обувь'][type][shoe], {
            'price': {
                get() {
                    return this['value'] * (1 - this['discount']);
                },
                enumerable: true,
                configurable: false
            },
            'id': {
                writable: false,
                enumerable: true,
                configurable: false
            }
        });
    }
}
delete newProducts.обувь.ботинки[0].id;
console.log(newProducts);

//5
function newShoe(id, size, color, discount, value) {
    this['id'] = id;
    this['size'] = size;
    this['color'] = color;
    this['discount'] = discount;
    this['value'] = value;

    Object.defineProperties(this, {
        'price': {
            get() {
                return this['value'] * (1 - this['discount']);
            }
        },
        'id': {
            writable: false,
            enumerable: true,
            configurable: false
        }
    });
}

let shoe1 = new newShoe(8, 40, 'red', 0.5, 2000);
console.log(shoe1);

//6
let allProducts = {
    обувь: {
        ботинки: [
            new newShoe(8, 40, 'red', 0.5, 2000),
            new newShoe(8, 40, 'red', 0.5, 2000)
        ],
        кроссовки: [
            new newShoe(8, 40, 'red', 0.5, 2000),
            new newShoe(8, 40, 'red', 0.5, 2000)
        ],
        сандалии: [
            new newShoe(8, 40, 'red', 0.5, 2000),
            new newShoe(8, 40, 'red', 0.5, 2000)
        ]
    }
}
console.log(allProducts);