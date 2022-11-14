import Route from '@ember/routing/route';

export default Route.extend({
    beforeModel() {
        this.replaceWith('users');
    },
    model() {
        return this.store.findAll('user');
    }
});
