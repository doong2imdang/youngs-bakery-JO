let userTxt = document.querySelector(".user-txt");
let btnUser = document.querySelector(".btn-user");
let productImage = document.querySelector(".product-image img");
let storeName = document.querySelector(".store-name");
let productName = document.querySelector(".product-name");
let productPrice = document.querySelector(".product-price");
let totalPrice = document.querySelector(".total-quantity strong");
let decreaseBtn = document.querySelector(".decrease-btn");
let increaseBtn = document.querySelector(".increase-btn");
let quantityDisplay = document.querySelector(".product-quantity");
let totalQuantity = document.querySelector(".total-quantity p span");
let modalBg = document.querySelector(".modal-bg");

// 전역변수
let token = localStorage.getItem("token");
let product = localStorage.getItem("product");
let quantity = 1;
let URL = "https://openmarket.weniv.co.kr/";

// 유저 버튼 텍스트 업데이트 함수
function updateUserButton() {
  if (!token) {
    btnUser.addEventListener("click", () => {
      location.href = "http://127.0.0.1:5500/youngsmarket/pages/login.html";
    });
  } else {
    userTxt.innerHTML = "마이페이지";
    btnUser.addEventListener("click", () => {
      location.href = "http://127.0.0.1:5500/youngsmarket/pages/mypage.html";
    });
  }
}
updateUserButton();

// 상품상세(이미지/스토어/상품이름/가격)
function displayProductDetail() {
  if (product) {
    let productObj = JSON.parse(product);
    productImage.src = productObj.img;
    storeName.innerText = productObj.storeName;
    productName.innerText = productObj.productName;
    productPrice.innerText = productObj.price.toLocaleString();
  } else {
    console.error("No product found in localStorage.");
  }
}
displayProductDetail();

// 상품 개수
function decreaseProductQuantity() {
  if (quantity > 1) {
    quantity--;
    updateProductQuantity();
  }
}

function increaseProductQuantity() {
  quantity++;
  updateProductQuantity();
}

// 상품 개수 및 총 가격 업데이트
function updateProductQuantity() {
  let productObj = JSON.parse(product);
  quantityDisplay.innerText = quantity;
  totalQuantity.innerText = quantity;
  totalPrice.innerText = (productObj.price * quantity).toLocaleString();
}
updateProductQuantity();

// 바로구매 버튼
function buyNow() {
  location.href = "http://127.0.0.1:5500/youngsmarket/pages/buyNow.html";
}

// 장바구니 버튼
function shoppingCart() {
  showModal();

  let noBtn = document.querySelector(".no-btn");
  noBtn.addEventListener("click", hideModal);

  let yesBtn = document.querySelector(".yes-btn");
  yesBtn.addEventListener("click", putInShoppingCart);
}

// 장바구니에 넣기
function putInShoppingCart() {
  let productObj = JSON.parse(product);
  let productId = productObj.productId;

  if (!product) {
    console.error("No product found in localStorage.");
    return;
  }

  console.log("Token:", token);
  console.log("ProductID:", productId);
  console.log("Quantity:", quantity);

  fetch(URL + "cart/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `JWT ${token}`,
    },
    body: JSON.stringify({
      product_id: productId,
      quantity: quantity,
      check: false,
    }),
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return response.json();
    })
    .then((data) => {
      console.log("Response Data:", data);
      hideModal();
      location.href =
        "http://127.0.0.1:5500/youngsmarket/pages/shoppingCart.html";
    })
    .catch((error) => console.error("Error:", error));
}

// 모달창
function showModal() {
  modalBg.style.display = "block";
}

function hideModal() {
  modalBg.style.display = "none";
}
