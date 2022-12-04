import { module, test, only } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render, typeIn, click, select } from '@ember/test-helpers';
import { set, get } from '@ember/object';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | user-form', function(hooks) {
  setupRenderingTest(hooks);

  hooks.beforeEach(function () {
    this.store = this.owner.lookup('service:store');
    this.userData = this.store.createRecord('user', {
      img_url: 'fake.png',
      first_name: '',
      last_name: '',
      email: '',
      team: '',
      joiningDate: '',
      designation: '',
      save: function () {}
    });
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

  test('data is saved', async function (assert) {
    await render(hbs`{{user-form userData=this.userData}}`);


    await typeIn('#firstName', 'First Name');
    assert.equal(this.userData.first_name, 'First Name');


    await typeIn('#lastName', 'Last Name');
    assert.equal(this.userData.last_name, 'Last Name');

    assert.dom('#email').hasAttribute('type', 'email');
    await typeIn('#email', 'user.name@gmail.com');
    assert.equal(this.userData.email, 'user.name@gmail.com');


    set(this, 'userData.save', function () {
      assert.ok('user data save is invoked')
    })
    

    await typeIn('#designation', 'Designation');
    assert.equal(this.userData.designation, 'Designation');

    await click('[data-test-id="save-btn"]');
  });

  test("all input elements are present", async function (assert) {

    await render(hbs`{{user-form}}`);
    assert.dom(".user-input").exists({ count: 5 }, 'shows 5 inputs');
    assert.dom(".avatar-form").exists('shows upload image section')

  });
  
  test('joining date value is present', async function (assert) {
    await render(hbs`{{user-form userData=this.userData}} <div id="test-container"></div>`);

    await click('#date');
    await click('.datepicker-days .day:first-child');

    assert.dom('#date').hasAnyValue();
  });
  test('teams options is selected', async function (assert) {
    await render(hbs`{{user-form userData=this.userData}} <div id="test-container"></div>`);

    await click('.ember-power-select-trigger');

    assert.dom("#test-container .ember-power-select-dropdown").exists();
  });


  test('Form errors are present', async function (assert) {
    await render(hbs`{{user-form userData=this.userData}}`);
    set(this, 'userData.save', function () {
      assert.ok('user data save is invoked')
    })

    assert.dom('[data-test-id="firstname-error"]').doesNotExist();

    await typeIn('#firstName', '');


    await click('[data-test-id="save-btn"]');
    assert.dom('.error').exists();
    assert.ok('Error in form');
  })
});
