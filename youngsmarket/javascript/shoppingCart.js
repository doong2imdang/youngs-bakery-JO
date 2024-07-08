let iconShoppingCart = document.querySelector(".btn-shopping-cart img");
let txtShoppingCart = document.querySelector(".btn-shopping-cart p");

token = localStorage.getItem("token");
let URL = "https://openmarket.weniv.co.kr/";
let cartItems;

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
    });
}

getShoppingCartItems();
