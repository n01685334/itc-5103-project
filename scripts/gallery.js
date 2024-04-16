$('.gallery').each(function() {
  $(this).magnificPopup({
    type: "image",
    delegate: 'a',
    gallery: {
      enabled: true,
    }
  })
});