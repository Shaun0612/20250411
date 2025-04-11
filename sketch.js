function setup() {//設定初始函數
  //產生一個全視窗的畫布
  createCanvas(windowWidth, windowHeight);
  //設定背景顏色#E6CAFF
  background('#E6CAFF');
}

function draw() {
  //設定背景顏色#E6CAFF
  background('#E6CAFF');
}


//畫布大小改變時，重新設定畫布大小
function windowResized() {
  //重新設定畫布大小
  resizeCanvas(windowWidth, windowHeight);
}
document.addEventListener("DOMContentLoaded", () => {
  const iframe = document.getElementById("content-frame");
  const menuLinks = document.querySelectorAll(".menu a");

  // 一開始隱藏 iframe
  iframe.style.display = "none";

  // 點擊選單項目時的行為
  menuLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      const url = link.getAttribute("data-url");

      if (url) {
        // 如果有 data-url，顯示 iframe 並載入對應的網址
        iframe.src = url;
        iframe.style.display = "block";
      } else {
        // 如果沒有 data-url，隱藏 iframe
        iframe.style.display = "none";
      }
    });
  });

  // 點擊首頁時隱藏 iframe
  const homeLink = document.querySelector(".menu a[href='#']");
  if (homeLink) {
    homeLink.addEventListener("click", () => {
      iframe.style.display = "none";
    });
  }

  const menu = document.querySelector(".menu");

  // 一開始隱藏選單
  menu.classList.add("hide");

  // 監聽滑鼠移動事件
  document.addEventListener("mousemove", (e) => {
    if (e.clientY < 250) {
      // 當滑鼠 y 坐標小於 250 時顯示選單
      menu.classList.remove("hide");
      menu.classList.add("show");
    } else {
      // 當滑鼠 y 坐標大於 250 時隱藏選單
      menu.classList.remove("show");
      menu.classList.add("hide");
    }
  });
});