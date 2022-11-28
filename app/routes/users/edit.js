import Route from '@ember/routing/route';

export default Route.extend({
    model(params) {
        // console.log(this.store.findRecord('user', params.id))
        return this.store.findRecord('user', params.id);
    }
});
