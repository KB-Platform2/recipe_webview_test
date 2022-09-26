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