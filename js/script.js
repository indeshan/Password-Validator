function showHide() {
	let show_hide = document.querySelector("#show_hide");
	let password = document.querySelector(".password");
	if (show_hide.className === "fas fa-eye") {
		show_hide.className = "fas fa-eye-slash";
		password.type = "text";
	}
	else {
		show_hide.className = "fas fa-eye";
		password.type = "password";	
	}
}


function valid(item, v_icon, inv_icon) {
	let text = document.querySelector("#"+item);
	console.log(text);
	text.style.opacity = "1";
	let valid_icon = document.querySelector("#"+item+" "+"."+v_icon);
	valid_icon.style.opacity = "1";
	let invalid_icon = document.querySelector("#"+item+" "+"."+inv_icon);
	invalid_icon.style.opacity = "0";
}

function invalid(item, v_icon, inv_icon) {
	let text = document.querySelector("#"+item);
	text.style.opacity = ".5";
	let valid_icon = document.querySelector("#"+item+" "+"."+v_icon);
	valid_icon.style.opacity = "0";
	let invalid_icon = document.querySelector("#"+item+" "+"."+inv_icon);
	invalid_icon.style.opacity = "1";
}

function textChange() {
	let password = document.querySelector(".password");
	if (password.value.match(/[A-Z]/) != null) {
		valid("capital", "fa-check", "fa-times");	
	}
	else {
		invalid("capital", "fa-check", "fa-times");
	}

	if (password.value.match(/[0-9]/) != null) {
		valid("num", "fa-check", "fa-times");	
	}
	else {
		invalid("num", "fa-check", "fa-times");
	}

	if (password.value.match(/[!@#$%^&*]/) != null) {
		valid("char", "fa-check", "fa-times");	
	}
	else {
		invalid("char", "fa-check", "fa-times");
	}

	if (password.value.length > 7) {
		valid("more8", "fa-check", "fa-times");	
	}
	else {
		invalid("more8", "fa-check", "fa-times");
	}
}
