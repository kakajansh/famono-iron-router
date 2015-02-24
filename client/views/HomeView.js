var View             = famous.core.View;
var Surface          = famous.core.Surface;
// var Transform     = famous.core.Transform;
var StateModifier = famous.modifiers.StateModifier;
var EventHandler     = famous.core.EventHandler;

HomeView = function() {
    View.apply(this, arguments);

    this.eventInput  = new EventHandler();
    EventHandler.setInputHandler(this, this.eventInput);

    this.eventInput.on('ready', function () {
        console.log('HomeView:ready');
        createBody.call(this);
    }.bind(this));
}

HomeView.prototype = Object.create(View.prototype);
HomeView.prototype.constructor = HomeView;

HomeView.DEFAULT_OPTIONS = {
};

function createBody() {
    var surface = new Surface({
        size      : [400, 400],
        content   : 'Home view',
        properties: {
            'background-color': '#ff5743'
        }
    });

    surface.on('click', function() {
        Router.go('about');
    });

    var modifier = new StateModifier({
        origin: [.5, .5],
        align : [.5, .5],
    });

    this.add(modifier).add(surface)
}

// module.exports = HomeView;