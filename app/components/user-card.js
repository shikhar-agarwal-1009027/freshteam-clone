import Component from '@ember/component';
import { inject } from '@ember/service';

export default Component.extend({
    openModal: false,
    store: inject(),
    actions: {
        deleteUser(user) {
            user.deleteRecord();
            user.save();
            this.set('openModal', false)
        },
        setOpenModal() {
            this.set('openModal', !this.openModal)
        }
    }
});
