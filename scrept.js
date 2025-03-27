// تغيير لون الخلفية عند التمرير
window.addEventListener("scroll", function () {
    let header = document.querySelector("header");
    if (window.scrollY > 50) {
        header.classList.add("scrolled");
    } else {
        header.classList.remove("scrolled");
    }
});

// تفعيل وإلغاء القائمة في الهواتف
function toggleMenu() {
    let nav = document.getElementById("navbar");
    nav.classList.toggle("active");
}


// عند الضغط على زر القائمة ☰، يتم فتح/إغلاق القائمة
function toggleMenu() {
    let nav = document.getElementById("navbar");
    nav.classList.toggle("active");
}

// تغيير لون شريط التنقل عند التمرير
window.addEventListener("scroll", function () {
    let header = document.querySelector("header");
    if (window.scrollY > 50) {
        header.classList.add("scrolled");
    } else {
        header.classList.remove("scrolled");
    }
});

// إغلاق القائمة عند النقر على أي رابط داخلها
document.querySelectorAll("nav ul li a").forEach(link => {
    link.addEventListener("click", function () {
        document.getElementById("navbar").classList.remove("active");
    });
});