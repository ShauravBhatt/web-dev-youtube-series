document.addEventListener('DOMContentLoaded',()=>{

    const products = [
      { id: 1, product: "Product 1", price: 19.99 },
      { id: 2, product: "Product 2", price: 59.99 },
      { id: 3, product: "Product 3", price: 39.99 },
      { id: 4, product: "Product 4", price: 89.99 },
      { id: 5, product: "Product 5", price: 69.99 },
    ];

    const productList = document.getElementById("product-list");
    const cartItems = document.getElementById("cart-items");
    const emptyCartMessage = document.getElementById("empty-cart");
    const cart = document.getElementById("cart-total");
    const totalPrice = document.getElementById("total-price");
    const checkoutBtn = document.getElementById("checkout-btn");

    const userCart = [];

    products.forEach((p) => {
        const div = document.createElement('div');
        div.classList.add('product');
        div.innerHTML=`<span>${p.product} : $${p.price}</span>
        <button data-id="${p.id}">Add to cart</button>`;
        productList.appendChild(div);
    })

    productList.addEventListener('click',(e)=>{
        if(e.target.tagName === "BUTTON"){
           let productId = (parseInt(e.target.getAttribute("data-id")));
           let product = products.find((p)=>p.id===productId);
           
           userCart.push(product);
           let p = document.createElement('p');
           p.innerText = `${product.product} : $${product.price}`;
           cartItems.appendChild(p);
           emptyCartMessage.classList.add("hidden");
           renderCart();
        }        
    })
    
    function renderCart(){
        let price = 0;
        cart.classList.remove("hidden");
        userCart.forEach((p)=>{
            price = price+p.price;
        })
        totalPrice.innerText=`$${price.toFixed(2)}`;
    }

    checkoutBtn.addEventListener('click',()=>{
        userCart.length = 0;
        alert("Thank you for your purchase! Your cart has been cleared.");
        cartItems.innerText="";
        cart.classList.add("hidden");
        totalPrice.innerText="";
    })

})