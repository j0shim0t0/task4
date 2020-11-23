function nightModeOn() {
	document.getElementById("textNightMode").innerHTML = 'Day mod';
	document.getElementById("logo").setAttribute('src', 'img/logoNight.png');
	document.getElementById("imgNightMode").setAttribute('src', 'img/nightModeOn.png');
	document.body.style.background = '#012345';
	let text = document.getElementsByClassName("textHeader");
	for(let item of text){
		item.style.color = '#99A7B5';
	}
	document.getElementById("imgMessage").setAttribute('src', 'img/messageNight.png');
	document.getElementById("imgNotice").setAttribute('src', 'img/noticeNight.png');
	document.getElementById("userName").style.color = '#FCFCFC';
	document.getElementById("main").style.background = '#011C37';
	document.getElementById("textFilter").style.color = '#FCFCFC';
	document.getElementById("selectFilter").style.background = 'url(img/arrowSelectNight.png) 96% 50% no-repeat';
	document.getElementById("textAddNew").style.color = '#4959FF';
	let elems = document.getElementsByClassName("elem");
	for(let item of elems){
		item.style.background = '#012345';
	}
	let elemInfoTitle = document.getElementsByClassName("elemInfoTitle");
	for(let item of elemInfoTitle){
		item.style.color = '#FCFCFC';
	}
	let elemInfoDescription = document.getElementsByClassName("elemInfoDescription");
	for(let item of elemInfoDescription){
		item.style.color = '#99A7B5';
	}
}