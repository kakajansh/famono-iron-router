// Router.configure({
//   layoutTemplate: 'layout'
// });

Router.route('/', { name: 'home' });

Router.route('/about', { name: 'about' });

Router.onBeforeAction(function () {
    Yarisma.trigger('route changed', this.route.getName());
    this.next();
});