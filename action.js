function openCamera(msg) {
    try {
        openNativeCamera.postMessage(msg);
    } catch (err) {
        alert(err.message);
    }
}

function openGallery(msg) {
    try {
        openNativeGallery.postMessage(msg);
    } catch (err) {
        alert(err.message);
    }
}

function getSelectedImage(base64Image) {
    let imgSrc = "data:image/png;base64," + btoa(String.fromCharCode.apply(null, new Uint8Array(base64Image)));
    document.getElementById('selectedImage').src = imgSrc;
}