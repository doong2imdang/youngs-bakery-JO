let iconShoppingCart = document.querySelector(".btn-shopping-cart img");
let txtShoppingCart = document.querySelector(".btn-shopping-cart p");
let shoppingCart = document.querySelector(".shopping-cart");

// 전역변수
token = localStorage.getItem("token");
let URL = "https://openmarket.weniv.co.kr/";
let cartItems = [];
let products = localStorage.getItem("products");
let productsObj = JSON.parse(products);

console.log(productsObj);

// 장바구니 페이지일 경우
iconShoppingCart.src = "../images/icon-shopping-cart-2.svg";
txtShoppingCart.style.color = "var(--color-orange)";

// 장바구니 목록 보기(GET)
function getShoppingCartItems() {
  fetch(URL + "cart/", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `JWT ${token}`,
    },
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(data.results);
      cartItems = data.results;
      displayShoppingCartItems();
    });
}

getShoppingCartItems();

// 장바구니 상품 화면에 표시
function displayShoppingCartItems() {
  // products에서 product_id가 같은 경우
  let cartItemsIntersection = cartItems.filter(
    (item) =>
      productsObj.filter((i) => i.product_id === item.product_id).length > 0
  );

  // cartItems에서 product_id가 같은 경우
  let productItemsIntersection = productsObj.filter(
    (item) =>
      cartItems.filter((i) => i.product_id === item.product_id).length > 0
  );

  let cartItemsIntersectionArray = {};

  cartItemsIntersection.forEach((item) => {
    cartItemsIntersectionArray[item.product_id] = item.quantity;
  });

  productItemsIntersection = productItemsIntersection.map((product) => {
    return {
      ...product,
      quantity:
        cartItemsIntersectionArray[product.product_id] !== undefined
          ? cartItemsIntersectionArray[product.product_id]
          : 0,
    };
  });

  console.log(cartItemsIntersectionArray);

  if (productItemsIntersection.length > 0) {
    productItemsIntersection.forEach((cartItem, index) => {
      const divItem = document.createElement("div");
      divItem.className = "cart-item";
      let price = cartItem.price.toLocaleString() + "원";
      let totalPrice =
        (cartItem.price * cartItem.quantity).toLocaleString() + "원";

      let cartItemsHTML = `
      <div class="radio-group">
            <input type="radio" id="cart-item-check" />
            <label for="cart-item-check"></label>
          </div>
          <button class="cart-item-image" type="button">
            <img
              src="${cartItem.image}"
              alt="상품이미지"
            />
          </button>
          <div class="product-info">
            <p class="store-name">${cartItem.store_name}</p>
            <p class="product-name">${cartItem.product_name}</p>
            <strong class="product-price">${price}</strong>
            <p class="delivery">택배배송<span>/</span>무료배송</p>
          </div>
          <div class="product-quantity-control">
            <button class="decrease-btn" type="button">
              <img src="../images/icon-minus-line.svg" alt="수량감소버튼" />
            </button>
            <button class="product-quantity" type="button">${cartItem.quantity}</button>
            <button class="increase-btn" type="button">
              <img src="../images/icon-plus-line.svg" alt="수량추가버튼" />
            </button>
          </div>
          <div class="product-price">
            <strong>${totalPrice}</strong>
            <button type="button">주문하기</button>
          </div>
          <button class="delete-btn" type="button">
            <img src="../images/icon-delete.svg" alt="" />
          </button>
      `;

      divItem.innerHTML = cartItemsHTML;
      shoppingCart.appendChild(divItem);
    });
  } else {
    const divItem = document.createElement("div");
    divItem.className = "no-cart-item";
    let noCartItemHTML = `
    <strong>장바구니에 담긴 상품이 없습니다.</strong>
          <p>원하는 상품을 장바구니에 담아보세요!</p>
    `;
    divItem.innerHTML = noCartItemHTML;
    shoppingCart.appendChild(divItem);
  }

  console.log(
    "productItemsIntersection : ",
    productItemsIntersection,
    "cartItemsIntersection : ",
    cartItemsIntersection
  );
}
