require('lib/jquery.min.js');
require('lib/masonry.pkgd.min.js');
require('lib/list.min.js');
require('lib/keyboard-pagination.js');

$('.indexgrid').masonry({
	itemSelector: '.grid-item',
	columnWidth: '.grid-sizer',
	percentPosition: true
});
