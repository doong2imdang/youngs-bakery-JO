const infoContents = document.querySelector(".info-contents");

// 전역변수
let URL = "https://openmarket.weniv.co.kr/";
token = localStorage.getItem("token");
let products = [];

// 판매상품 리스트 GET
function getProducts() {
  fetch(URL + "seller/", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `JWT ${token}`,
    },
  })
    .then((response) => response.json())
    .then((data) => {
      products = data.results;
      console.log(data.results);
      displayProducts();
    })
    .catch((error) => console.error("Error fetching products:", error));
}
getProducts();

// 판매상품 리스트 화면 표시
function displayProducts() {
  products.forEach((product) => {
    console.log(product);
    const listItem = document.createElement("li");
    const formattedPrice = Number(product.price).toLocaleString() + "원";
    listItem.className = "info-content";

    let productHTML = `
      <img
              src=${product.image}
              alt=""
            />
            <div class="content-name">
              <p>${product.product_name}</p>
              <span>재고 : ${product.stock}개</span>
            </div>
            <strong>${formattedPrice}</strong>
            <button class="btn-edit" type="button">수정</button>
            <button class="btn-delete" type="button">삭제</button>
    `;

    listItem.innerHTML = productHTML;
    infoContents.appendChild(listItem);
  });
}
