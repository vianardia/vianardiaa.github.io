function nextPage(pageNum) {
    const currentPage = document.getElementById(`page${pageNum}`);
    const nextPage = document.getElementById(`page${pageNum + 1}`);
    if (currentPage) {
        currentPage.classList.remove("active");
    }
    if (nextPage) {
        nextPage.classList.add("active");
    }
    showNotification();
}

function showNotification() {
    const notification = document.getElementById("notification");
    notification.classList.add("show");
    setTimeout(() => {
        notification.classList.remove("show");
    }, 4000);
}

function replay() {
    for (let i = 1; i <= 5; i++) {
        document.getElementById(`page${i}`).classList.remove("active");
    }
    document.getElementById("page1").classList.add("active");
}

function animateInput() {
    const input = document.getElementById("answer1");
    if (input && input.value.length > 0) {
        input.classList.add("input-animate");
    }
}

window.addEventListener("load", () => {
    document.getElementById("page1").classList.add("active");
});
