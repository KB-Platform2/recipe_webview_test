
async function requestAppToken() {
    try {
		alert("토큰값을 요청하였습니다.");
		window.flutter_inappwebview.callHandler('requestAppToken')
		  .then(function(result) {
			console.log(JSON.stringify(result));
			alert("토큰값을 받았습니다.\nApp Token : " + JSON.stringify(result));
		});
		
    } catch (err) {
        alert(err.message);
    }
}
function openLogin() {
	const rand = Math.floor(Math.random() * 10000000);
    try {
		alert("로그인 되었습니다. 토큰값이 변경되었습니다." + rand);
		//loginNativeCheck.postMessage(rand);
		
		
		window.flutter_inappwebview.callHandler('loginNativeCheck', rand)
		  .then(function(result) {
			console.log(JSON.stringify(result));
			alert("Response : " + JSON.stringify(result));
		});

    } catch (err) {
        alert(err.message);
    }
	
	
}



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
    alert(buffer);
    let binary = '';
    let bytes = new Uint8Array(buffer);
    let len = bytes.byteLength;
    alert("len" + len);
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





function responseAppToken(token) {
    try {
		alert("토큰값을 받았습니다." + token);
    } catch (err) {
        alert(err.message);
    }
}


function sendToken() {
	
}
async function openPushNoti(msg) {
    try {
        openNativePushNoti.postMessage(msg);
    } catch (err) {
        alert(err.message);
    }
}








