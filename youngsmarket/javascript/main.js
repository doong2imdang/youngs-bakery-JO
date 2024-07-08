let btnLeftSwiper = document.querySelector(".btn-left-swiper");
let btnRightSwiper = document.querySelector(".btn-right-swiper");
let imagesBox = document.querySelector(".images-box");
let images = document.querySelectorAll(".images-box img");
let dots = document.querySelectorAll(".dot");

let productsContainer = document.querySelector(".products-container");

// 전역변수
let outerWidth = imagesBox.offsetWidth;
let totalWidth = 0;
let click = 0;
let URL = "https://openmarket.weniv.co.kr/";
let products = [];
// localStorage
let token = localStorage.getItem("token");

// 상품 전체 불러오기 GET 요청
function getProducts() {
  fetch(URL + "products/")
    .then((response) => response.json())
    .then((data) => {
      products = data.results;
      console.log(products);
      localStorage.setItem("products", JSON.stringify(products));
      displayProducts();
    })
    .catch((error) => console.error("Error fetching products:", error));
}

// product 데이터 화면에 표시
function displayProducts() {
  products.forEach((product, index) => {
    const listItem = document.createElement("li");

    const formattedPrice = Number(product.price).toLocaleString();
    listItem.className = "product";

    // 기본 product HTML
    let productHTML = ` 
      <button onclick="displayProductDetail(${index})" class="product-image" type="button">
        <img src="${product.image}" alt="" />
      </button>
      <p class="store-name">${product.store_name}</p>
      <strong onclick="location.href='http://127.0.0.1:5500/youngsmarket/pages/productDetail.html'" class="product-name">${product.product_name}</strong>
    `;

    // 재고가 0인 경우 soldout 이미지를 추가
    if (product.stock === 0) {
      productHTML += `
        <img src="../images/icon-soldout.svg" alt="soldout" class="soldout-image" />
      `;
    }

    // 가격 추가
    productHTML += `
      <p class="product-price">${formattedPrice}<span>원</span></p>
    `;

    listItem.innerHTML = productHTML;
    productsContainer.appendChild(listItem);
  });
}

getProducts();

// 클릭된 상품
function displayProductDetail(index) {
  let clickedProduct = products[`${index}`];
  let clickedProductImg = clickedProduct.image;
  let clickedProductName = clickedProduct.product_name;
  let clickedProductStoreName = clickedProduct.store_name;
  let clickedProductPrice = clickedProduct.price;
  let clickedProductId = clickedProduct.product_id;
  let clickedProductStock = clickedProduct.stock;

  const productDetails = {
    img: clickedProductImg,
    storeName: clickedProductStoreName,
    productName: clickedProductName,
    price: clickedProductPrice,
    productId: clickedProductId,
    stock: clickedProductStock,
  };

  localStorage.setItem("product", JSON.stringify(productDetails));

  location.href = "http://127.0.0.1:5500/youngsmarket/pages/productDetail.html";
}

// 너비 구하기
window.addEventListener("resize", function () {
  outerWidth = imagesBox.offsetWidth;
});

// 이미지슬라이더 다음버튼
function moveToNextImage() {
  click = (click + 1) % images.length;
  totalWidth = click * outerWidth;
  imagesBox.style.transform = `translateX(-${totalWidth}px)`;
  updateDots();
}

// 이미지슬라이더 이전버튼
function moveToPreviousImage() {
  if (click > 0) {
    click--;
  } else {
    click = images.length - 1;
  }
  totalWidth = click * outerWidth;
  imagesBox.style.transform = `translateX(-${totalWidth}px)`;
  updateDots();
}

//이미지슬라이더 자동 넘기기
let autoSlide = setInterval(moveToNextImage, 3000);

// 이미지슬라이더 마우스이벤트
imagesBox.addEventListener("mouseenter", () => {
  clearInterval(autoSlide);
});

imagesBox.addEventListener("mouseleave", () => {
  autoSlide = setInterval(moveToNextImage, 3000);
});

// 이미지에 맞는 dot active
function updateDots() {
  dots.forEach((dot, index) => {
    dot.classList.remove("dot-active");
    if (index === click) {
      dot.classList.add("dot-active");
    }
  });
}

// dot클릭으로 이미지 선택
dots.forEach((dot, index) => {
  dot.addEventListener("click", () => {
    click = index;
    totalWidth = click * outerWidth;
    imagesBox.style.transform = `translateX(-${totalWidth}px)`;
    updateDots();
  });
});
