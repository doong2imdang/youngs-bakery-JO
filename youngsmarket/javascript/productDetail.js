let userTxt = document.querySelector(".user-txt");
let btnUser = document.querySelector(".btn-user");
let productImage = document.querySelector(".product-image img");
let storeName = document.querySelector(".store-name");
let productName = document.querySelector(".product-name");
let productPrice = document.querySelector(".product-price");
let totalPrice = document.querySelector(".total-quantity strong");

// 전역변수
let token = localStorage.getItem("token");
let product = localStorage.getItem("product");
console.log(product);

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
