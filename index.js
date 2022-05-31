(function testScript() {
  var comp = app.project.activeItem;
  app.beginUndoGroup("Tests Script");
  if (!(comp && comp instanceof CompItem)) {
    alert("Open a comp!");
    return;
  }
  var layers = comp.selectedLayers.map((layer) => layer.name);
  alert("You selected: ", layers);
  app.endUndoGroup();
})();
