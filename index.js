'use strict';

(function testScript() {
    var comp = app.project.activeItem;
    app.beginUndoGroup("Test Script");
    if (!(comp && comp instanceof CompItem)) {
        alert("Open a comp!");
        return;
    }
    var layer = comp.selectedLayers[0];
    if (!layer) {
        alert("No layer selected");
        return;
    }
    alert("You selected: ", layer.name);
    app.endUndoGroup();
})();
