/* ----- Load files into interface ----- */

var $filesList = $('.files-list');

files.forEach(function (item) {
  var
    $li = $('<li>').addClass('file').attr('data-type', item.type),
    $i = $('<i>').addClass('file-icon file-' + item.type),
    $strong = $('<a>').attr('href', '#').addClass('file-name').html(item.name),
    $btn = $('<button>').addClass('file-del').html('Delete')
  ;

  $li.append($i, $strong, $btn);
  $filesList.append($li);
});


/* ----- File type filter buttons ----- */

$('.file-btns').on('change', 'input', function (e) {
  var display = $(e.target).val();

  $filesList.children('li').removeClass('is-hidden');

  if (display !== 'all') {
    $filesList.children('li')
      .filter(':not([data-type="' + display + '"])')
      .addClass('is-hidden')
    ;
  }
});


/* ----- File delete buttons ----- */

$('.file-del').on('click', function () {
  $(this).parents('li')
    .addClass('is-deleted')
    .on('transitionend', function () {
      $(this).remove();
    })
  ;
});
