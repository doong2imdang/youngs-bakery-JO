// 전역변수
let URL = "https://openmarket.weniv.co.kr/";
token = localStorage.getItem("token");

function getOrderList() {
  fetch(URL + "order/", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `JWT ${token}`,
    },
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(data.results);
    });
}

getOrderList();
