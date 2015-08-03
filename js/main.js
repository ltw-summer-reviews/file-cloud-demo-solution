/* ----- Load files into interface ----- */

var $filesList = $('.files-list');

files.forEach(function (item) {
  var
    $li = $('<li>').addClass('file').attr('data-type', item.type),
    $i = $('<i>').addClass('file-icon file-' + item.type),
    $strong = $('<a>').attr('href', '#').addClass('file-name').html(item.name),
    $btn = $('<button>').addClass('file-del').html('Delete').attr('aria-label', 'Delete ' + item.name)
  ;

  $li.append($i, $strong, $btn);
  $filesList.append($li);
});


/* ----- File type filter buttons ----- */

var triggerFilter = function (display) {
  $filesList
    .children('li')
    .removeClass('is-hidden')
    .attr('aria-hidden', false)
    .children('a').attr('tabindex', 0)
    .siblings('button').attr('tabindex', 0)
  ;

  if (display !== 'all') {
    $filesList.children('li')
      .filter(':not([data-type="' + display + '"])')
      .addClass('is-hidden')
      .attr('aria-hidden', true)
      .children('a').attr('tabindex', -1)
      .siblings('button').attr('tabindex', -1)
    ;
  }
};

$('.file-btns').on('change', 'input', function (e) {
  triggerFilter($(e.target).val());
});

$('.file-btns').on('keypress', 'label', function (e) {
  $('#' + $(this).attr('for')).click();
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


/* ----- Skip link retarget ----- */

$('.skip-link').on('click', function () {
  $filesList.focus();
});
