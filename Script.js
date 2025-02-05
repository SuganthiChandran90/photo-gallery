@@ -0,0 +1,19 @@
function initialize() {
    console.log("Page loaded");
    const images = document.querySelectorAll('.gallery img');
    images.forEach((img, index) => {
        img.setAttribute('tabindex', index + 1);
    });
}
function upDate(previewPic) {
    document.getElementById("image").style.backgroundImage = "url('" + previewPic.src + "')";
    document.getElementById("image").innerHTML = previewPic.alt;
    console.log("Mouse over image: " + previewPic.alt);
}
function unDo() {
    document.getElementById("image").style.backgroundImage = "url('')";
    document.getElementById("image").innerHTML = "Hover over an image below to display here.";
}
