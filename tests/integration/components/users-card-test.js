import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render, click } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | users-card', function(hooks) {
  setupRenderingTest(hooks);
  // hooks.beforeEach(function () {
  //   this.store = this.owner.lookup('service:store');
  //   this.user = this.store.createRecord('user', {

  //     img_url: 'fake.png',
  //     first_name: 'temp-first_name',
  //     last_name: 'temp-last_name',
  //     email: 'temp-email@gmail.com',
  //     team: 'temp-team',
  //     joiningDate: 'temp-date'
  //   });
  //   // this.sortType = 'test_sort';
  //   // this.sortOrderType = 'test_order';
  //   // this.filterType = 'test_filter';
  //   // this.searchValue = ''
  // });

  test('List of users is rendered', async function (assert) {
    let store = this.owner.lookup('service:store');
    let users = store.createList('users', 14);
    
    await render(hbs`{{users-card model=this.users}}`);
    assert.dom('.card').exists({ count: 14 });

  });

  test('Search value is present ', async function (assert) {
    let store = this.owner.lookup('service:store');
    let users = store.createList('users', 14);
    await render(hbs`{{users-card model=this.users}}`);

    assert.dom('input.searchInput').hasValue('');
  });

  test('Filter value is selected ', async function (assert) {
    let store = this.owner.lookup('service:store');
    let users = store.createList('users', 14);
    await render(hbs`{{users-card model=this.users}}`);
    await click('.dropdown-toggle')
    await click('[data-test-id="Freshteam"]')
    assert.dom('input.searchInput').hasValue('')
  });

  test('Sort type value is selected ', async function (assert) {
    let store = this.owner.lookup('service:store');
    let users = store.createList('users', 14);
    await render(hbs`{{users-card model=this.users}}`);
    await click('.dropdown-toggle')
    await click('[data-test-id="first_name"]')

  });

  test('Sort Order value is selected ', async function (assert) {
    let store = this.owner.lookup('service:store');
    let users = store.createList('users', 14);
    await render(hbs`{{users-card model=this.users}}`);
    await click('.dropdown-toggle')
    await click('[data-test-id="Ascending"]')
  });

});
