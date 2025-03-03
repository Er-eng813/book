function loadContent(page) {
    let xhr = new XMLHttpRequest();
    xhr.open("GET", page, true);
    xhr.onload = function () {
        if (xhr.status == 200) {
            document.getElementById("content").style.display = "block";
            document.getElementById("content").innerHTML = xhr.responseText;
            window.scrollTo({
                top: document.getElementById("content").offsetTop,
                behavior: "smooth"
            });
        }
    };
    xhr.send();
}
