import Component from '@ember/component';
import { computed } from '@ember/object';

export default Component.extend({
    // firstChar: '',
    // init() {
    //     this._super(...arguments);
    //     this.set('errors', []);
    //     console.log(this.attrs)
    //     // this.filter('').then((results) => this.set('results', results));
    // },
    initials: computed('user.first_name', function () {
        // console.log(user)
        // return `${this.user.first_name.charAt[0].toUpperCase()}`;
      })
});
