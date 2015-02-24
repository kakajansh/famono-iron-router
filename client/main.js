// Rig some famo.us deps
famous.polyfills;
famous.core.famous;

UI.body.rendered = function () {
    var mainContext = famous.core.Engine.createContext();
    Yarisma = new AppView();
    mainContext.add(Yarisma);
};