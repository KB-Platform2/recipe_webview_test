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

function  getSelectedImage(imageBytes) {
    let selectedImage = "data:image/png;base64," + btoa(String.fromCharCode.apply(null, new Uint8Array(imageBytes)));

    document.getElementById('selectedImage').src = selectedImage;
}