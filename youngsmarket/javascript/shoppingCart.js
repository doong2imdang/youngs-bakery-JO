let iconShoppingCart = document.querySelector(".btn-shopping-cart img");
let txtShoppingCart = document.querySelector(".btn-shopping-cart p");
let shoppingCart = document.querySelector(".shopping-cart");
let paymentContainer = document.querySelector(".payment-container");
let modalBg = document.querySelector(".modal-bg");
let finalDeleteBtn = document.querySelector(".final-delete-btn");
let modalTxt = document.querySelector(".modal-txt");
let answerAction = document.querySelector(".answer-action");
let cancelBtn = document.querySelector(".cancel-btn");
let checkBtn = document.querySelector(".check-btn");
let finalOrderBtn = document.querySelector(".final-order-btn");
let selectAllCheckbox = document.getElementById("select-all");
let modalDeleteBtn = document.querySelector(".modal .delete-btn");

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
  if (token) {
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
        is_active: item.is_active,
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
        is_active:
          cartItemsIntersectionArray[product.product_id] !== undefined
            ? cartItemsIntersectionArray[product.product_id].is_active
            : 0,
      };
    });

    localStorage.setItem(
      "cartItem",
      JSON.stringify(cartItemsIntersectionArray)
    );

    if (productItemsIntersection.length > 0) {
      paymentContainer.style.display = "block";
      productItemsIntersection.forEach((cartItem) => {
        const divItem = document.createElement("div");
        divItem.className = "cart-item";
        let price = cartItem.price.toLocaleString() + "원";
        let totalPrice =
          (cartItem.price * cartItem.quantity).toLocaleString() + "원";

        let cartItemsHTML = `
      <div class="main-radio-group">
        <input type="radio" id="cart-item-check${cartItem.cart_item_id}" value="${cartItem.cart_item_id}" />
        <label for="cart-item-check${cartItem.cart_item_id}"></label>
      </div>
      <button class="cart-item-image" type="button">
        <img src="${cartItem.image}"
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
          <button class="order-btn" type="button">주문하기</button>
        </div>
        <button class="delete-btn" type="button">
          <img src="../images/icon-delete.svg" alt="" />
        </button>
      `;

        divItem.innerHTML = cartItemsHTML;
        shoppingCart.appendChild(divItem);

        // input radio
        selectCheckBox(divItem);

        // 수량버튼
        let productQunatityControl = divItem.querySelector(
          ".product-quantity-control"
        );

        productQunatityControl.addEventListener("click", () => {
          itemQuantityControlMessage(cartItem);
          showModal();
        });

        // 개별 주문하기
        let orderBtn = divItem.querySelector(".order-btn");
        orderBtn.addEventListener("click", () => {
          if (!token) {
            itemOrderMessage();
            showModal();
          } else {
            location.href =
              "http://127.0.0.1:5500/youngsmarket/pages/order.html";
          }
        });

        // 이미지 클릭 시 상품 상세 페이지로 이동
        const imageButton = divItem.querySelector(".cart-item-image img");
        imageButton.addEventListener("click", () => {
          goProductDetailPage(productItemsIntersection, imageButton.src);
        });

        // 삭제 버튼에 클릭 이벤트 리스너 추가
        const deleteBtn = divItem.querySelector(".delete-btn");
        const checkbox = divItem.querySelector(".main-radio-group input");

        deleteBtn.addEventListener("click", function () {
          selectAllCheckbox.checked = false;
          checkbox.checked = false;
          showModal();

          checkBtn.addEventListener("click", () => {
            individualDeleteCartItems(cartItem.cart_item_id, cartItemsHTML);
          });
        });

        cancelBtn.addEventListener("click", () => {
          hideModal();
          location.reload();
        });
      });
    } else if (productItemsIntersection.length <= 0) {
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

// 전체 삭제하기
function allCartItemsDelete() {
  fetch(URL + "cart/", {
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

// input radio
function selectCheckBox(divItem) {
  let check = 1;
  let allCheck = 1;
  const checkbox = divItem.querySelector(".main-radio-group input");

  checkbox.addEventListener("click", () => {
    check++;
    const allCheckboxes = document.querySelectorAll(".main-radio-group input");
    const checkedCheckboxes = document.querySelectorAll(
      ".main-radio-group input:checked"
    );

    if (check % 2 === 1) {
      checkbox.checked = false;
    }

    selectAllCheckbox.checked =
      allCheckboxes.length === checkedCheckboxes.length;

    finalDeleteBtn.addEventListener("click", () => {
      if (checkedCheckboxes.length > 0 && checkbox.checked === true) {
        showModal();

        checkBtn.addEventListener("click", () => {
          checkedCheckboxes.forEach((checkbox) => {
            individualDeleteCartItems(checkbox.value);
          });
        });
      }
    });
  });

  selectAllCheckbox.addEventListener("click", () => {
    allCheck++;
    const allCheckboxes = document.querySelectorAll(".main-radio-group input");

    if (allCheck % 2 === 1) {
      selectAllCheckbox.checked = false;
    }

    allCheckboxes.forEach((checkbox) => {
      checkbox.checked = selectAllCheckbox.checked;
    });

    console.log(checkbox.checked);

    finalDeleteBtn.addEventListener("click", () => {
      if (selectAllCheckbox.checked && checkbox.checked) {
        showModal();

        checkBtn.addEventListener("click", () => {
          allCartItemsDelete();
        });
      }
    });
  });
}

// 주문하기 모달 메시지
function itemOrderMessage() {
  modalTxt.innerHTML = `
    <p>로그인이 필요한 서비스입니다.<br/> 로그인 하시겠습니까?</p>
  `;

  cancelBtn.innerHTML = "아니오";
  checkBtn.innerHTML = "예";

  modalDeleteBtn.addEventListener("click", () => {
    location.reload();
  });
}

finalOrderBtn.addEventListener("click", () => {
  if (!token) {
    itemOrderMessage();
    showModal();
  } else {
    location.href = "http://127.0.0.1:5500/youngsmarket/pages/order.html";
  }
});

// 수량 버튼 누르면 모달 메시지 변경
function itemQuantityControlMessage(cartItem) {
  let currentQuantity = cartItem.quantity;

  modalTxt.innerHTML = `
    <button class="decrease-btn" type="button">
      <img src="../images/icon-minus-line.svg" alt="수량감소버튼" />
    </button>
    <button class="product-quantity" type="button">${currentQuantity}</button>
    <button class="increase-btn" type="button">
      <img src="../images/icon-plus-line.svg" alt="수량추가버튼" />
    </button>
  `;

  const decreaseBtn = modalTxt.querySelector(".decrease-btn");
  const increaseBtn = modalTxt.querySelector(".increase-btn");
  const quantityDisplay = modalTxt.querySelector(".product-quantity");
  const cartItemStock = cartItem.stock;

  decreaseBtn.addEventListener("click", () => {
    if (currentQuantity > 1) {
      currentQuantity--;
      quantityDisplay.textContent = currentQuantity;
    }
  });

  increaseBtn.addEventListener("click", () => {
    if (currentQuantity < cartItemStock) {
      currentQuantity++;
    }
    quantityDisplay.textContent = currentQuantity;
  });

  checkBtn.innerText = "수정";
  checkBtn.addEventListener("click", () => {
    itemQuantityControl(cartItem, currentQuantity);
  });

  modalDeleteBtn.addEventListener("click", () => {
    location.reload();
  });
}

// 수량 수정하기
function itemQuantityControl(cartItem, newQuantity) {
  let cartItemId = cartItem.cart_item_id;
  let productId = cartItem.product_id;
  let isActive = cartItem.is_active;
  console.log(
    `Updating item ${cartItemId} with quantity ${newQuantity} and is_active ${isActive}`
  );

  fetch(URL + `cart/${cartItemId}/`, {
    method: "PUT",
    headers: {
      Authorization: `JWT ${token}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      product_id: productId,
      quantity: newQuantity,
      is_active: isActive,
    }),
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
    })
    .then((data) => {
      console.log("itemQuantityControl:", data);
      location.reload();
    })
    .catch((error) => {
      console.error("Error:", error);
    });
}

// 개별 주문하기

// 전체 주문하기

// 배송비
