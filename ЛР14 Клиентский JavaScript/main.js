class Product {
    static number = 0;

    constructor() {
        this.Products = [];
    }

    addProduct(nname, nprice, nsourceImg) {
        let product = {
            id: Product.number,
            name: nname,
            price: nprice,
            sourceImg: nsourceImg,
            button: new Button(Product.number++, 120, 40, '#007bff', 'В корзину')
        };

        let productCard = document.createElement('div');
        productCard.classList.add('product');
        productCard.id = 'card' + product.id;

        let productImage = document.createElement('img');
        productImage.style["width"] = '200px';

        let productName = document.createElement('h3');
        let productPrice = document.createElement('p');
        let productButton = product.button.createButton(product.button.id, product.button.width, product.button.height, product.button.background, product.button.text);

        productName.textContent = product.name;
        productPrice.textContent = '$' + product.price;
        productImage.src = product.sourceImg;

        productCard.appendChild(productImage);
        productCard.appendChild(productName);
        productCard.appendChild(productPrice);
        productCard.appendChild(productButton);

        document.getElementById('productContainer').appendChild(productCard);

        this.Products.push(product);
    }

    deleteProduct(id) {
        let productR = document.getElementById('card' + id);
        if (productR != null) {
            productR.remove();
            this.Products.splice(id, 1);
        }
    }

    deleteButton(id) {
        let productR = document.getElementById('card' + id);
        if (productR != null) {
            if (productR.querySelector('button')) {
                productR.removeChild(productR.querySelector('button'));
            }
        }
    }

    createButton(id, width, height, background, text) {
        this.Products.forEach(pr => {
            if (pr.id == id) {
                let productButton = pr.button.createButton(id, width, height, background, text);
                let productR = document.getElementById('card' + id);
                if (productR != null) {
                    productR.appendChild(productButton);
                }
                return;
            }
        })
    }

    setName(id, nname) {
        let productR = document.getElementById('card' + id);
        if (productR != null) {
            this.Products.forEach(pr => {
                if (pr.id == id) {
                    pr.name = nname;
                }
                return;
            })
            if (productR.querySelector('h3')) {
                productR.querySelector('h3').textContent = nname;
            }
        }
    }

    setPrice(id, nprice) {
        let productR = document.getElementById('card' + id);
        if (productR != null) {
            this.Products.forEach(pr => {
                if (pr.id == id) {
                    pr.price = nprice;
                }
                return;
            })
            if (productR.querySelector('p')) {
                productR.querySelector('p').textContent = '$' + nprice;
            }
        }
    }

    setImg(id, nsourceImg) {
        let productR = document.getElementById('card' + id);
        if (productR != null) {
            this.Products.forEach(pr => {
                if (pr.id == id) {
                    pr.sourceImg = nsourceImg;
                }
                return;
            })
            if (productR.querySelector('img')) {
                productR.querySelector('img').src = nsourceImg;
            }
        }
    }

    findgray() {
        this.Products.forEach(pr => {
            let productR = document.getElementById('card' + pr.id);
            if (productR != null) {
                if (pr.id % 2 == 0) {
                    productR.classList.add('productN');
                } else {
                    productR.classList.remove('productN');
                }
            }
            return;
        })
    }
}

class Button {
    constructor(id, width, height, background, text) {
        this.id = id;
        this.width = width;
        this.height = height;
        this.background = background;
        this.text = text;
    }

    createButton(id = this.id, width = this.width, height = this.height, background = this.background, text = this.text) {
        let addToCartButton = document.createElement('button');
        addToCartButton.textContent = text;
        addToCartButton.style["backgroundColor"] = background;
        addToCartButton.style["width"] = String(width) + 'px';
        addToCartButton.style["height"] = String(height) + 'px';
        return addToCartButton;
    }

    setSize(nwidth, nheight) {
        let parent = document.getElementById('card' + this.id);
        let button = parent.querySelector('button');
        this.width = nwidth;
        this.height = nheight;
        button.style["width"] = String(this.width) + 'px';
        button.style["height"] = String(this.height) + 'px';
    }

    setBackground(nbackground) {
        let parent = document.getElementById('card' + this.id);
        let button = parent.querySelector('button');
        this.background = nbackground;
        button.style["backgroundColor"] = this.background;
    }

    setText(ntext) {
        let parent = document.getElementById('card' + this.id);
        let button = parent.querySelector('button');
        this.text = ntext;
        button.textContent = this.text;
    }
}

let Products = new Product();