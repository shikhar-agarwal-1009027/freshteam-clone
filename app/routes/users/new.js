import Route from '@ember/routing/route';

export default Route.extend({
    model() {

        return this.store.createRecord('user', {
            img_url: '',
            // img_url:'https://joeschmoe.io/api/v1/mail@ashallendesign.co.uk',
            first_name: "new",
            last_name: "user",
            email: "newuser@gmail.com",
            team: "Freshservice",
            joiningDate: new Date("2022-04-29"),
            designation: "SSE-Frontend"
        });

    }
});
