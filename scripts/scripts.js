// 點擊漢堡圖後顯示選單
document.addEventListener('DOMContentLoaded', function() {
    var hamburger = document.getElementById('hamburger');
    var navLinks = document.getElementById('nav-links');
    var links = navLinks.getElementsByTagName('a');

    hamburger.addEventListener('click', function(event) {
        navLinks.classList.toggle('show');
        event.stopPropagation(); // 防止點擊事件冒泡到 document
    });

    for (var i = 0; i < links.length; i++) {
        links[i].addEventListener('click', function() {
            navLinks.classList.remove('show');
        });
    }

    // 點擊選單以外的區域時關閉選單
    document.addEventListener('click', function(event) {
        if (!navLinks.contains(event.target) && !hamburger.contains(event.target)) {
            navLinks.classList.remove('show');
        }
    });
});