import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | user-avatar', function(hooks) {
  setupRenderingTest(hooks);

  hooks.beforeEach(function () {
    this.store = this.owner.lookup('service:store');
    this.user = this.store.createRecord('user', {

      img_url: 'fake.png',
      first_name: 'temp-first_name',
      last_name: 'temp-last_name',
      email: 'temp-email@gmail.com',
      team: 'temp-team',
      joiningDate: 'temp-date'
    });
    this.user1 = this.store.createRecord('user', {

      first_name: 'temp-first_name',
      last_name: 'temp-last_name',
      email: 'temp-email@gmail.com',
      team: 'temp-team',
      joiningDate: 'temp-date'
    });
  });
  

  test('user avatar renders image when img_url is present', async function(assert) {
    await render(hbs`{{user-avatar user=this.user}}`);

    assert.dom('[data-test-id="user-avatar"]').exist('avatar image does exist');
    assert.dom('[data-test-id="no-user-avatar"]').doesNotExist('avatar image does not exist');
    assert.dom('[data-test-img-id="user-avatar-img]').hasAttribute('src', this.user.img_url)
  });
  test('user avatar renders image when img_url is present', async function(assert) {
    await render(hbs`{{user-avatar user=this.user1}}`);
    
    assert.dom('[data-test-id="user-avatar"]').doesNotExist('avatar image does exist');
    assert.dom('[data-test-id="no-user-avatar"]').exist('avatar image does not exist');
    assert.dom('[data-test-id="no-user-avatar"]').hasText('T');
  });
});