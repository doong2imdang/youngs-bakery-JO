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
let infoBtns = document.querySelectorAll(".info-action button");
let shoppingCartBtn = document.querySelector(".shopping-cart-btn");
let buyNowBtn = document.querySelector(".purchase-btn");

// 전역변수
let token = localStorage.getItem("token");
let product = localStorage.getItem("product");
let URL = "https://openmarket.weniv.co.kr/";
let productObj = JSON.parse(product);
let quantity = "";
if (productObj.stock === 0) {
  quantity = 0;
} else {
  quantity = 1;
}

// 상품상세(이미지/스토어/상품이름/가격)
function displayProductDetail() {
  if (product) {
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

if (productObj.stock > 0) {
  decreaseBtn.addEventListener("click", decreaseProductQuantity);
  increaseBtn.addEventListener("click", increaseProductQuantity);
  shoppingCartBtn.addEventListener("click", shoppingCart);
  buyNowBtn.addEventListener("click", buyNow);
} else {
  buyNowBtn.innerText = "SOLD OUT";
  buyNowBtn.style.backgroundColor = "black";
  buyNowBtn.style.cursor = "auto";
  buyNowBtn.style.color = "white";

  shoppingCartBtn.innerText = "SOLD OUT";
  shoppingCartBtn.style.backgroundColor = "black";
  shoppingCartBtn.style.cursor = "auto";
  shoppingCartBtn.style.color = "white";
}

// 상품 개수 및 총 가격 업데이트
function updateProductQuantity() {
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
  let productQuantity = localStorage.getItem("quantity");

  if (productQuantity > 0 && productQuantity - productObj.stock < 0) {
    notInMyShoppingCartMessage();
    showModal();
    putInShoppingCart();
  } else {
    inMyShoppingCartMessage();
    showModal();
  }

  let noBtn = document.querySelector(".no-btn");
  noBtn.addEventListener("click", hideModal);

  let yesBtn = document.querySelector(".yes-btn");
  yesBtn.addEventListener("click", () => {
    hideModal();
    location.href =
      "http://127.0.0.1:5500/youngsmarket/pages/shoppingCart.html";
  });
}

// 장바구니에 넣기
function putInShoppingCart() {
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
      console.log("shoppingCart", data);
      localStorage.setItem("quantity", data.quantity);
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

// info-action
infoBtns.forEach((infoBtn) => {
  infoBtn.addEventListener("click", () => {
    infoBtns.forEach((btn) => {
      btn.classList.remove("info-active");
    });

    infoBtn.classList.add("info-active");
  });
});

// 모달창 메세지 변경(장바구니 X)
function notInMyShoppingCartMessage() {
  let modalTxt = document.querySelector(".modal-txt");

  modalTxt.innerHTML = `
      이미 장바구니에 있는 상품입니다.<br />
      장바구니로 이동하시겠습니까?
    `;
}

// 모달창 메세지 변경(장바구니 O)
function inMyShoppingCartMessage() {
  let modalTxt = document.querySelector(".modal-txt");

  modalTxt.innerHTML = `
  재고 수량이 부족하여 <br/>
  장바구니에 담을 수 없습니다. <br />
  장바구니로 이동하시겠습니까?
`;
}
