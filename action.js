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
    let imgSrc = "data:image/png;base64," + arrayBufferToBase64(base64Image);
    document.getElementById('selectedImage').src = imgSrc;
}

function arrayBufferToBase64(buffer) {
    let binary = '';
    let bytes = new Uint8Array(buffer);
    let len = bytes.byteLength;
    for (let i = 0; i < len; i++) {
        binary += String.fromCharCode(bytes[i]);
    }
    return window.btoa(binary);
}

function openShare() {
    try {
        const currentUrl = window.location.href;
        openNativeSharePopup.postMessage(currentUrl);
    } catch (err) {
        alert(err.message);
    }
}

function openLogin() {
    try {
        alert("로그인 되었습니다.")
    } catch (err) {
        alert(err.message);
    }
}