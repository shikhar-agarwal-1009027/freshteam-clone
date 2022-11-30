import Component from '@ember/component';
import { inject as service } from '@ember/service';
import { set, get } from '@ember/object';

export default Component.extend({
    classNames: ['slide-add-emp-div'],
    teams: ['Freshteam','Freshdesk','Freshservice'],
    selectedTeam: '',
    router: service(),

    converImageToBase64() {
        let image = document.querySelector(".upload").files[0];
        const reader = new FileReader(); 
        return new Promise(resolve => {
          reader.onload = ev => {
            resolve(ev.target.result)
          }
          reader.readAsDataURL(image)
        })
    },
    actions: {
        uploadImage() {
            get(this, 'converImageToBase64')().then((result) => {
              set(this, 'userData.img_url', result);
            }, (error) => {
              console.log(error);
            })
        },
        save(userData) {
            this.set('didValidate', true);
            userData.validate().then(({ validations }) => {
                if (validations.get('isValid')) {
                    userData.save();
                    this.router.transitionTo('users');
                }
            }).catch((err) => {
                console.log(err)
            })
        },

        selectTeam(value) {
            this.set('userData.team', value);
            this.set('selectedTeam', value);
            console.log(this.userData)
        },
    }
});
