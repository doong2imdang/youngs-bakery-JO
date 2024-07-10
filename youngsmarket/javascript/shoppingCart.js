let iconShoppingCart = document.querySelector(".btn-shopping-cart img");
let txtShoppingCart = document.querySelector(".btn-shopping-cart p");
let shoppingCart = document.querySelector(".shopping-cart");
let paymentContainer = document.querySelector(".payment-container");
let modalBg = document.querySelector(".modal-bg");

// 전역변수
token = localStorage.getItem("token");
let URL = "https://openmarket.weniv.co.kr/";
let cartItems = [];
let products = localStorage.getItem("products");
let productsObj = JSON.parse(products);
let cartItemsIntersectionArray = {};

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
  // cartItems에서 product_id가 같은 경우

  let cartItemsIntersection = cartItems.filter(
    (item) =>
      productsObj.filter((i) => i.product_id === item.product_id).length > 0
  );

  // products에서 product_id가 같은 경우
  let productItemsIntersection = productsObj.filter(
    (item) =>
      cartItems.filter((i) => i.product_id === item.product_id).length > 0
  );

  cartItemsIntersection.forEach((item) => {
    cartItemsIntersectionArray[item.product_id] = {
      quantity: item.quantity,
      cart_item_id: item.cart_item_id,
    };
  });

  // productItemsIntersection에 quantity, cart-item-id 추가
  productItemsIntersection = productItemsIntersection.map((product) => {
    return {
      ...product,
      quantity:
        cartItemsIntersectionArray[product.product_id] !== undefined
          ? cartItemsIntersectionArray[product.product_id].quantity
          : 0,
      cart_item_id:
        cartItemsIntersectionArray[product.product_id] !== undefined
          ? cartItemsIntersectionArray[product.product_id].cart_item_id
          : 0,
    };
  });

  console.log(cartItemsIntersectionArray);
  localStorage.setItem("cartItem", JSON.stringify(cartItemsIntersectionArray));

  if (productItemsIntersection.length > 0) {
    paymentContainer.style.display = "block";
    productItemsIntersection.forEach((cartItem) => {
      const divItem = document.createElement("div");
      divItem.className = "cart-item";
      let price = cartItem.price.toLocaleString() + "원";
      let totalPrice =
        (cartItem.price * cartItem.quantity).toLocaleString() + "원";

      let cartItemsHTML = `
      <div class="radio-group">
            <input type="radio" id="cart-item-check${cartItem.cart_item_id}" value="${cartItem.cart_item_id}" />
            <label for="cart-item-check${cartItem.cart_item_id}"></label>
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

      // 이미지 클릭 시 상품 상세 페이지로 이동
      const imageButton = divItem.querySelector(".cart-item-image img");
      imageButton.addEventListener("click", () => {
        goProductDetailPage(productItemsIntersection, imageButton.src);
      });

      // 삭제 버튼에 클릭 이벤트 리스너 추가
      const deleteBtn = divItem.querySelector(".delete-btn");
      let cancelBtn = document.querySelector(".cancel-btn");
      let checkBtn = document.querySelector(".check-btn");

      deleteBtn.addEventListener("click", function () {
        showModal();
        cancelBtn.addEventListener("click", () => {
          hideModal();
        });
        checkBtn.addEventListener("click", () => {
          individualDeleteCartItems(cartItem.cart_item_id, cartItemsHTML);
        });
      });
    });
  } else {
    paymentContainer.style.display = "none";
    const divItem = document.createElement("div");
    divItem.className = "no-cart-item";
    let noCartItemHTML = `
    <strong>장바구니에 담긴 상품이 없습니다.</strong>
          <p>원하는 상품을 장바구니에 담아보세요!</p>
    `;
    divItem.innerHTML = noCartItemHTML;
    shoppingCart.appendChild(divItem);
  }

  calExpectedPaymentAmount(productItemsIntersection);

  console.log(
    "productItemsIntersection : ",
    productItemsIntersection,
    "cartItemsIntersection : ",
    cartItemsIntersection
  );
}

console.log(
  "cartItemsIntersectionArray",
  cartItemsIntersectionArray,
  "productObj",
  productsObj
);

// 장바구니 개별 삭제하기
function individualDeleteCartItems(cartItemId) {
  let value = parseInt(
    document.getElementById(`cart-item-check${cartItemId}`).value
  );

  fetch(URL + `cart/${value}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      Authorization: `JWT ${token}`,
    },
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
    })
    .then((data) => {
      console.log("Deleted from cart", data);
      location.reload();
    })
    .catch((error) => {
      console.error("Error:", error);
    });
}

// 모달창
function showModal() {
  modalBg.style.display = "block";
}

function hideModal() {
  modalBg.style.display = "none";
}

// 결제 예정 금액
function calExpectedPaymentAmount(products) {
  let price = 0;
  let totalPrice = document.querySelector(".total-price strong");
  let productDiscount = document.querySelector(".product-discount strong");
  let deliveryFee = document.querySelector(".delivery-fee strong");
  let expectedPaymentAmount = document.querySelector(
    ".expected-payment-amount strong"
  );

  // 총 상품금액
  products.forEach((product) => {
    price += product.price * product.quantity;
    expectedPrice = price.toLocaleString();
  });
  totalPrice.innerHTML = expectedPrice;

  // 결제예정금액
  expectedTotalPrice = (
    price +
    parseInt(productDiscount.innerHTML) +
    parseInt(deliveryFee.innerHTML)
  ).toLocaleString();

  expectedPaymentAmount.innerHTML = expectedTotalPrice;
}

// 이미지 누르면 해당상품상세페이지로 이동
function goProductDetailPage(productItemsIntersection, clickedImageSrc) {
  let clickedProduct = productItemsIntersection.filter((product) =>
    product.image == clickedImageSrc ? product : null
  )[0];
  let clickedProductId = clickedProduct.product_id;
  let clickedStoreName = clickedProduct.store_name;
  let clickedPrice = clickedProduct.price;
  let clickedProductName = clickedProduct.product_name;
  let clickedProductStock = clickedProduct.stock;

  let productDetails = JSON.parse(localStorage.getItem("product")) || {};

  productDetails.img = clickedProduct.image;
  productDetails.productId = clickedProductId;
  productDetails.storeName = clickedStoreName;
  productDetails.price = clickedPrice;
  productDetails.productName = clickedProductName;
  productDetails.stock = clickedProductStock;

  localStorage.setItem("product", JSON.stringify(productDetails));

  location.href = "http://127.0.0.1:5500/youngsmarket/pages/productDetail.html";
}

// input radio

// 개별 주문하기

// 전체 주문하기

// 전체 삭제하기

// 수량 수정하기
