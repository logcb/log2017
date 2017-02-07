var options = {
    valueNames: [ 'project-title', 'project-tags' ]
};
var projectList = new List('project-list', options);
$(".search").keyup(function(){
    projectList.search($(this).val());
});
var noItems = $('<h2>&#9785;</h2>');
projectList.on('updated', function(list) {
  if (list.matchingItems.length == 0) {
    $(list.list).append(noItems);
  } else {
    noItems.detach();
  }
});