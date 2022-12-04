import Component from '@ember/component';
import { inject } from '@ember/service';

export default Component.extend({
    openModal: false,
    store: inject(),
    actions: {
        deleteUser(user) {
            user.deleteRecord();
            user.save();
            set(this,'openModal', false)
        },
        setOpenModal() {
            set(this,'openModal', !this.openModal)
        }
    }
});
