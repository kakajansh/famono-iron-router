var View          = famous.core.View;
var Surface       = famous.core.Surface;
// var Transform     = famous.core.Transform;
var StateModifier = famous.modifiers.StateModifier;
var EventHandler  = famous.core.EventHandler;

AboutView = function() {
    View.apply(this, arguments);

    this.eventInput = new EventHandler();
    EventHandler.setInputHandler(this, this.eventInput);

    this.eventInput.on('ready', function () {
        console.log('AboutView:ready');
        createBody.call(this);
    }.bind(this));
}

AboutView.prototype = Object.create(View.prototype);
AboutView.prototype.constructor = AboutView;

AboutView.DEFAULT_OPTIONS = {
};

function createBody() {
    var surface = new Surface({
        size      : [400, 400],
        content   : 'About view',
        properties: {
            'background-color': '#2ac138'
        }
    });

    surface.on('click', function() {
        Router.go('home');
    });

    var modifier = new StateModifier({
        origin: [.5, .5],
        align : [.5, .5],
    });

    this.add(modifier).add(surface)
}