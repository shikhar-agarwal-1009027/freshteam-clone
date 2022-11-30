import Component from '@ember/component';
import { computed, get } from '@ember/object';
import { debounce } from '@ember/runloop';


export default Component.extend({

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

        if (searchInputValue !== '' || searchInputValue !== null) {
            temp = sortedUsers.filter((_el) => {
                if (_el['first_name'].toLowerCase().includes(searchInputValue.toLowerCase()) > 0) return _el;
            })
            return temp
        }

        return sortedUsers;

    }),
    actions: {
        selectOptionFilter(value) {
            this.selectFilterOption(value);
        },
        selectOptionSort(value) {
            this.selectSortOption(value);
        },
        selectOrderFilter(value) {
            this.selectOrder(value);
        },
        handleSearchFilter(event) {
            this.handleSearch(event);
        }
    }
});
