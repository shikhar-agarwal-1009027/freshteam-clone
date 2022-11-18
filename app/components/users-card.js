import Component from '@ember/component';
import { computed } from '@ember/object';


export default Component.extend({
    // classNames: ["users-list-wrapper"],
    teams: ['All Employees'],
    sortValues: ['First Name', 'Last Name', 'Joining Date'],
    selectedSort: 'First Name',
    selectedTeam: 'All Employees',
    teamsArray: computed('model', function () {
        let users = this.model;
        // users.map((el) => {
        //     console.log(el)
        //     if (this.teams.indexOf(el) === -1) this.teams.push(el);
        // })
        users.forEach(element => {
            if (this.teams.indexOf(element.team) === -1) this.teams.push(element.team);
        });

        return this.teams;
    }),
    
    actions: {
        selectTeam(value, method = '') {
            console.log('Shikhar', value);
            if (method === 'sort') {
                if (this.teams.indexOf(value) !== -1) this.set('selectedTeam', value);
            } else {
                if (this.sortValues.indexOf(value) !== -1) this.set('selectedSort', value);
            }
            console.log(this.selectedTeam)
        }
    }
});
