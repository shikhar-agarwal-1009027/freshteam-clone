import Controller from '@ember/controller';

export default Controller.extend({
    searchByName(param) {
        if (param !== '') return this.model.query('user', {first_name: param})
        else return this.store.findAll('user');
    }
});
