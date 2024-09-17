// 當網頁載入完成時執行
window.onload = function() {
    // 獲取 SVG 地圖中的所有 path 元素 (各縣市)
    let counties = document.querySelectorAll('path');

    // 對每個縣市添加點擊事件監聽器
    counties.forEach(function(county) {
        county.addEventListener('click', function() {
            let countyName = county.getAttribute('name');  // 獲取縣市名稱
            let opinion = prompt('請輸入關於 ' + countyName + ' 的意見:');  // 彈出輸入框

            if (opinion) {
                // 假設有後端處理來保存意見，這裡可以進行 AJAX 請求等
                alert('您已輸入的意見: ' + opinion);  // 彈出提示框顯示輸入的意見

                // 這裡可以將輸入的意見發送到伺服器進行保存 (如果有後端)
                // e.g., 使用 AJAX 發送數據
            }
        });
    });
}
