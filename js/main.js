$(document).ready(function() {
	$('.album-submit').click(function() {
		makeCoverText($('.album-text').val().replace(/ /g, '  ').toUpperCase());
	});

	$('.album-img-submit').click(function() {
		makeCoverImg($('.album-img').val());
	});
	
	album = $("#album-art");
	context = album[0].getContext("2d");
	clearCanvas();

	makeCoverText("THE  LIFE  OF  PABLO");
	makeCoverImg("http://i.imgur.com/G42jwgC.png");
});

clearCanvas = function() {
	context.fillStyle = "#F5804E";
	context.fillRect(0, 0, 512, 512);
	context.fillStyle = "black";
};

makeCoverText = function(title) {
	clearCanvas();
	if ($('.album-img').val() === '') {
		makeCoverImg("http://i.imgur.com/G42jwgC.png");
	}
	else {
		makeCoverImg($('.album-img').val());
	}
	context.font = "700 13.5px Helvetica";
	context.textBaseline = "top";
	for (var i = 0; i < 8; i++) {
		context.fillText(title, 42, 35 + 16 * i);
	}

	context.fillText(title, 43, 136);
	context.fillText(title, 44, 152);

	for (i = 8; i < 14; i++) {
		context.fillText(title, 42, 35 + 5 + 16 * i);
	}

	for (i = 0; i < 8; i++) {
		context.fillText(title, 39, (35 + 5 + 16 * 13 + (16 - 3)) + 16 * i);
	}
	
	for (i = 0; i < 8; i++) {
		context.fillText(title, 189, 85 + 16 * i);
	}

	for (i = 7; i < 15; i++) {
		context.fillText(title, 188, 85 - 3 + 16 * i);
	}

	for (i = 0; i < 8; i++) {
		context.fillText(title, 192, 325 + 16 * i);
	}

	for (i = 0; i < 8; i++) {
		context.fillText(title, 328, 76 + 16 * i);
	}

	for (i = 8; i < 16; i++) {
		context.fillText(title, 330, 76 - 3 + 16 * i);
	}

	for (i = 0; i < 8; i++) {
		context.fillText(title, 311, 317 + 16 * i);
	}
};

makeCoverImg = function(url) {
	var coverImg = new Image();
	coverImg.onload = function() {
		context.drawImage(coverImg, 66, 392, 118, 83);
	};
	coverImg.setAttribute('crossOrigin', 'anonymous');
	coverImg.src = url;

};