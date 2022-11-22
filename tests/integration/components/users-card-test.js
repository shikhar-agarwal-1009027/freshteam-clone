import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render, click, typeIn } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | users-card', function(hooks) {
  setupRenderingTest(hooks);
  hooks.beforeEach(function () {
    this.store = this.owner.lookup('service:store');
    this.user = this.store.createRecord('user', {

      img_url: 'fake.png',
      first_name: 'temp-first_name',
      last_name: 'temp-last_name',
      email: 'temp-email@gmail.com',
      team: 'Freshteam',
      joiningDate: new Date("12-11-2022")
    });
    this.user1 = this.store.createRecord('user', {

      img_url: 'test.png',
      first_name: 'temp-first_name_first',
      last_name: 'temp-last_name_first',
      email: 'temp-email_first@gmail.com',
      team: 'Freshservice',
      joiningDate: new Date("12-11-2020")
    });
    this.user2 = this.store.createRecord('user', {

      img_url: 'test1.png',
      first_name: 'temp-first_name_second',
      last_name: 'temp-last_name_second',
      email: 'temp-email_second@gmail.com',
      team: 'FreshSales',
      joiningDate: new Date("12-11-2021")
    });

    this.users = this.store.findAll('user');
  });

  test('List of users is rendered', async function (assert) {
    
    await render(hbs`{{users-card model=this.users}}`);
    assert.dom('.card').exists({ count: 3 });

  });

  

  test('Filter value is selected ', async function (assert) {
    await render(hbs`{{users-card model=this.users}}`);
    await click('.dropdown-toggle');
    await click('[data-test-id="Freshteam"]');

    assert.dom('.card').exists({ count: 1 });
    assert.dom('[data-test-id="user-name"]').hasText('temp-first_name temp-last_name');
    // assert.dom('[data-test-id="Freshteam"]').hasAnyText();
  });

  test('Sort type value is selected ', async function (assert) {
    await render(hbs`{{users-card model=this.users}}`);
    await click('.dropdown-toggle.sort-by');
    await click('[data-test-id="first name"]')

    assert.dom('.card').exists({ count: 3 });
    assert.dom('[data-test-id="user-name"]').hasText('temp-first_name temp-last_name');
  });

  test('no users are present after the search', async function (assert) {
    await render(hbs`{{users.card model= this.users}}`)

    assert.dom('.users-list-wrapper.card').doesNotExist('no user card is present')
  })

  test('Search input text value is not present ', async function (assert) {
    await render(hbs`{{users-card model=this.users}}`);
    
    assert.dom('input.searchInput').hasValue('');
  });

  test('Search input text value is not present ', async function (assert) {
    await render(hbs`{{users-card model=this.users}}`);

    await typeIn('.searchInput', 'Search text is entered');
    assert.dom('input.searchInput').hasValue('Search text is entered');
  });
});
