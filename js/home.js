images = [
    "../img/Vũng Tàu.jpg",
    "../img/Phú Quốc.jpg",
    "../img/Nha trang.jpg",
    "../img/Hạ long.jpg",
    "../img/Tân Thành.jpg",
    "../img/Cam Ranh.jpg",
    "../img/Navagio.jpg",
    "../img/Whitehaven.jpg",
    "../img/Baia do Sancho.jpg",
  ]
  
  $('div.card-image').each
    random_image_index = Math.floor(images.length * Math.random())
    $(this).css('background-image', 'url(' + images[random_image_index] + ')')