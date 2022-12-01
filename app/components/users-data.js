import Component from '@ember/component';
import { computed, get } from '@ember/object';
import { debounce } from '@ember/runloop';

export default Component.extend({

    listType: true,
    sortOrderType: ['Ascending', 'Descending'],
    selectedSort: 'First Name',
    selectedTeam: 'All Employees',
    selectedSortOrder: 'Ascending',
    inputValue: '',

    teams: computed('model', function () {
        let teams = ['All Employees']
        let users = this.model;
        users.forEach(element => {
            if (teams.indexOf(element.team) === -1) teams.push(element.team);
        });

        return teams;
    }),
    sortValues: computed('sortValues', function () {
        let sortValues = ['first_name', 'last_name', 'joining_date'];
        let temp = sortValues.map((el) => el.split('_').join(' '));
        return temp;
    }),
    actions: {
        selectFilterOption(value) {
            if (this.teams.indexOf(value) !== -1) this.set('selectedTeam', value);
        },
        selectSortOption(value) {
            if (this.sortValues.indexOf(value) !== -1) this.set('selectedSort', value);
        },
        selectOrder(value) {
            this.set('selectedSortOrder', value);
        },
        handleSearch(event) {
            debounce(this, function () {
                this.set('inputValue', event)
            },150)
            ;
        }
    }
});
