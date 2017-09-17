function isValidVideoID() {
	var isValid = true;

	var videoID = document.getElementById("video-id").value;

	if (videoID.length < 10) {
		document.getElementById("video-id-error").innerHTML = "* Vui lòng nhập Video ID dài hơn 10 ký tự";
		document.getElementById("video-id-error").className = "msg-error";
		isValid = false;
	}
	else {
		document.getElementById("video-id-error").innerHTML = "Video ID hợp lệ";
		document.getElementById("video-id-error").className = "msg-success";
	}
	return isValid;
}

function isValidVideoName() {
	var isValid = true;

	var videoName = document.getElementById("video-name").value;

	if (videoName.length < 3) {
		document.getElementById("video-name-error").innerHTML = "* Tên video quá ngắn";
		document.getElementById("video-name-error").className = "msg-error";
		isValid = false;
	}
	else if (videoName.length > 50) {
		document.getElementById("video-name-error").innerHTML = "* Vui lòng nhập tên video trong khoảng 3 - 50 ký tự";
		document.getElementById("video-name-error").className = "msg-error";
		isValid = false;
	}
	else {
		document.getElementById("video-name-error").innerHTML = "Tên video hợp lệ";
		document.getElementById("video-name-error").className = "msg-success";
	}
	return isValid;
}

function isValidForm() {
	var validvideoName = isValidVideoName();
	var validvideoID = isValidVideoID();

	var isValid = (validvideoID && validvideoName);

	return isValid;
}