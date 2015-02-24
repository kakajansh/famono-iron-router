var View          = famous.core.View;
// var Surface       = famous.core.Surface;
// var Transform     = famous.core.Transform;
// var StateModifier = famous.modifiers.StateModifier;
var EventHandler = famous.core.EventHandler;

/*
 * @name AppView
 * @constructor
 * @description
 */

AppView = function() {
    View.apply(this, arguments);

    this.eventOutput = new EventHandler();
    this.eventInput  = new EventHandler();
    EventHandler.setOutputHandler(this, this.eventOutput);
    EventHandler.setInputHandler(this, this.eventInput);

    this.content = new famous.views.RenderController();

    this._currentPage = undefined;
    this._pages = [];

    this._pages['home'] = new HomeView();
    this._pages['about'] = new AboutView();

    this.eventInput.on('route changed', function(name) {
        if (name in this._pages) {
            this._pages[name].trigger('ready');
            this.content.show(this._pages[name]);
        }
    }.bind(this));

    this.add(this.content);
}

AppView.prototype = Object.create(View.prototype);
AppView.prototype.constructor = AppView;

AppView.DEFAULT_OPTIONS = {
};