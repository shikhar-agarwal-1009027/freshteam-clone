import Component from '@ember/component';
import { computed, get } from '@ember/object';
import { debounce } from '@ember/runloop';


export default Component.extend({

    teams: ['All Employees'],
    sortValues: ['first_name', 'last_name', 'joining_date'],
    sortOrderType: ['Ascending', 'Descending'],
    selectedSort: 'First Name',
    selectedTeam: 'All Employees',
    selectedSortOrder: 'Ascending',
    inputValue: '',

    teamsArray: computed('model', function () {
        let users = this.model;
        users.forEach(element => {
            if (this.teams.indexOf(element.team) === -1) this.teams.push(element.team);
        });

        return this.teams;
    }),
    sortArrayValue: computed('sortValues',function() {
        let temp = this.sortValues.map((el) => el.split('_').join(' '));
        return temp;
    }),

    filteredUsers: computed('selectedTeam', function () {
        if (this.selectedTeam === 'All Employees') return this.model.filter((el)=>el);
        else return this.model.filter((el) => el.team === this.selectedTeam);
    }),

    sortedResults: computed('filteredUsers.[]', 'selectedSort', 'selectedSortOrder', function () {
        let filterUsers = get(this, 'filteredUsers');
        let sortType = get(this, 'selectedSort');
        let x = sortType.split(' ').join('_').toLowerCase();
        if (sortType === 'joining date') {
            x = 'joiningDate';
        }
        let sortOrderType = get(this, 'selectedSortOrder');
    
        if (sortOrderType === 'Ascending' || "") {
            filterUsers.sort(function (a, b) {
                return (a[x]<b[x]) ? -1 : 1
            })
        } else {
            filterUsers.sort(function (a, b) {
                return (a[x]>b[x] ? -1: 1)
            })
        }
        return filterUsers;
    }),
    searchResult: computed('sortedResults.[]', 'inputValue', function () {
        let searchInputValue = this.inputValue;
        let sortedUsers = get(this, 'sortedResults');
        let temp = [];

        console.log(searchInputValue)
        if (searchInputValue !== '' || searchInputValue !== null) {
            temp = sortedUsers.filter((_el) => {
                if (_el['first_name'].toLowerCase().includes(searchInputValue.toLowerCase()) > 0) return _el;
            })
            return temp
        }

        return sortedUsers;

    }), 
    
    actions: {
        selectOption(value, method = '') {
            console.log(value, method)
            if (method === 'sort') {
                if (this.sortValues.indexOf(value.split(' ').join('_')) !== -1) this.set('selectedSort', value);
                console.log(this.selectedSort);
            } else {
                if (this.teams.indexOf(value) !== -1) this.set('selectedTeam', value);
            }
        },
        selectOrder(value) {
            this.set('selectedSortOrder', value);
        },
        handleSearch(event) {
            debounce(this.sortedResults, this.set('inputValue', event), 150);
            console.log(event);
            // let searchInputValue = this.inputValue;
            // let users = this.model;

            
            // function searchResultFilter() {
            //     console.log( users, searchInputValue)
            //     if (searchInputValue !== '' || searchInputValue !== null) {
            //         let searchResults = users.filter((_el) => _el.first_name.search(searchInputValue) > 0)
            //         console.log(searchResults)
            //         return searchResults;
            //     }else return users.filter((_el)=> _el)
            // }
            // let temp = debounce(users, searchResultFilter, 150);
            // debounce(, searchInputValue, 200)
            // console.log(temp)
        }
    }
});
