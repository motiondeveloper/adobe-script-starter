import { message } from "./another";

(function testScript() {
  const comp = app.project.activeItem;
  app.beginUndoGroup("Test Script");
  alert(message);
  if (!(comp && comp instanceof CompItem)) {
    alert("Open a comp!");
    return;
  }

  comp.selectedLayers.forEach((layer) => {
    const is = layer.name ? "ya" : "no";
    alert("You selected: " + layer.name + is);
  });

  app.endUndoGroup();
})();
