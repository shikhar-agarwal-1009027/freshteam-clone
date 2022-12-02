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
    await render(hbs`{{user-form}}`);

    set(this, 'userData.save()', function () {
      assert.ok('user data save is invoked')
    })
    await render(hbs`{{users-card model=this.users}}`);
    assert.dom('.card').exists({ count: 4 });
  });

    test("all input elements are present", async function (assert) {

      await render(hbs`{{user-form}}`);
      assert.dom(".user-input").exists({ count: 5 }, 'shows 5 inputs');
      assert.dom(".avatar-form").exists('shows upload image section')

    });
  
    test('first name field binds data correctly', async function (assert) {
      await render(hbs`{{user-form userData=this.userData}}`);

      assert.dom('#firstName').hasNoValue("");
      await typeIn('#firstName', 'First Name');
      assert.equal('userData.first_name', 'First Name');
      // assert.dom('#firstName').hasNoValue("")
    });
    // test('first name value is present', async function (assert) {
    //   await render(hbs`{{user-form userData=this.userData}}`);

    //   await typeIn('#firstName', 'First Name');
    //   assert.dom('#firstName').hasValue('First Name');
    // });
  
    test('last name field binds data correctly',async function(assert){
      await render(hbs`{{user-form userData=this.userData}}`);

      assert.dom('#lastName').hasNoValue("");
      await typeIn('#lastName', 'Last Name');
      assert.equal('userData.last_name', 'Last Name');
    })
    // test('last name value is present',async function(assert){
    //   await render(hbs`{{user-form userData=this.userData}}`);

    //   await typeIn('#lastName','Last Name');
    //   assert.dom('#lastName').hasValue('Last Name');
    // })
    test('email field binds data correctly',async function(assert){
      await render(hbs`{{user-form userData=this.userData}}`);

      assert.dom('#email').hasAttribute('type', 'email'); 
      assert.dom('#email').hasNoValue("");
      await typeIn('#email', 'user.name@gmail.com');
      assert.equal('userData.email', 'user.name@gmail.com');
    })
    // test('email value is present',async function(assert){
    //   await render(hbs`{{user-form userData=this.userData}}`);

    //   await typeIn('#email','user.name@gmail.com');
    //   assert.dom('#email').hasValue('user.name@gmail.com');

    // })
  test('joining date value is present', async function (assert) {
    await render(hbs`{{user-form userData=this.userData}} <div id="test-container"></div>`);

    await click('#date');
    await click('.datepicker-days .day:first-child');

    assert.dom('#date').hasAnyValue();
  });
  test('designation field binds data correctly', async function (assert) {
    await render(hbs`{{user-form userData=this.userData}}`);

    assert.dom('#designation').hasNoValue("");
    await typeIn('#designation', 'Designation');
    assert.equal('userData.designation', 'Designation');
  });
  test('teams options is selected', async function (assert) {
    await render(hbs`{{user-form userData=this.userData}} <div id="test-container"></div>`);

    await click('.ember-power-select-trigger');

    assert.dom("#test-container .ember-power-select-dropdown").exists();
  });
  test('Form errors are present', async function (assert) {
    await render(hbs`{{user-form userData=this.userData}}`);

    set(this, 'userData.save()', function () {
      assert.ok('user data save is invoked')
    })
    assert.dom('#firstName').hasNoValue("");
    assert.dom('#lastName').hasNoValue("");
    assert.dom('#email').hasNoValue("");
    assert.dom('#designation').hasNoValue("");
    assert.dom('.error').exists();
    assert.ok('Error in form');
  })
});
