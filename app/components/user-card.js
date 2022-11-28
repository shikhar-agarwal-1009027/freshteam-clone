import Component from '@ember/component';
import { inject } from '@ember/service';

export default Component.extend({
    // classNames: ['users-list-wrapper']
    openModal: false,
    store: inject(),
    actions: {
        deleteUser(user) {
            // debugger
            // console.log(userId);
            user.deleteRecord();
            user.save();
            this.set('openModal', false)
            //   });
        },
        setOpenModal() {
            if (!this.openModal) {
                this.set('openModal', true)
            } else {
                this.set('openModal', false)
            }
            // this.set('openModal', !this.openModal)
        }
    }
});
