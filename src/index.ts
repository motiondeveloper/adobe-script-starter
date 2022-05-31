import { message } from "./another";

(function testScript() {
  const comp = app.project.activeItem;
  app.beginUndoGroup("Test Script");
  alert(message);
  if (!(comp && comp instanceof CompItem)) {
    alert("Open a comp!");
    return;
  }

  const layer = comp.selectedLayers[0];

  if (!layer) {
    alert("No layer selected");
    return;
  }

  alert("You selected: " + layer.name);

  app.endUndoGroup();
})();
