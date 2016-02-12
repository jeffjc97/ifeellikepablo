var formType = 'url';

$(document).ready(function() {
    $('.album-submit').click(function() {
        makeCoverText($('.album-text').val().replace(/ /g, '  ').toUpperCase());
    });

    $('.album-img-submit').click(function() {
        makeCoverImg('url', $('.album-img').val());
    });
    
    $('.album-file-submit').change(function() {
        makeCoverImg('file', $(this)[0].files[0]);
    });

    album = $("#album-art");
    context = album[0].getContext("2d");
    clearCanvas();

    makeCoverText("THE  LIFE  OF  PABLO");
    makeCoverImg("url", "http://i.imgur.com/G42jwgC.png");
});

clearCanvas = function() {
    context.fillStyle = "#F5804E";
    context.fillRect(0, 0, 512, 512);
    context.fillStyle = "black";
};

makeCoverText = function(title) {
    clearCanvas();
    if (formType === 'url') {
        if ($('.album-img').val() === '') {
            makeCoverImg('url', "http://i.imgur.com/G42jwgC.png");
        }
        else {
            makeCoverImg('url', $('.album-img').val());
        }
    }
    else {
        makeCoverImg('file', $('.album-file-submit')[0].files[0]);
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

makeCoverImg = function(type, data) {
    var coverImg = new Image();
    coverImg.onload = function() {
        context.drawImage(coverImg, 66, 392, 118, 83);
    };
    coverImg.setAttribute('crossOrigin', 'anonymous');

    if (type == 'url') {
        formType = 'url';
        coverImg.src = data;
    }
    else if (type == 'file') {
        formType = 'file';

        var reader  = new FileReader();
        reader.onload = function() {
            coverImg.src = reader.result;
        };

        if (data) {
            reader.readAsDataURL(data);
        }
        else {
            coverImg.src = "";
        }

        $('.album-img').val('');
        
    }
};