import Component from '@ember/component';

export default Component.extend({
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
