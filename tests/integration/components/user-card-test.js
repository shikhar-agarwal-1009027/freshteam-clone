import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | user-card', function(hooks) {
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
  });

  test('user card is having a full name', async function(assert) {
    await render(hbs`{{user-card user=this.user}}`);

    assert.dom('[data-test-id="user-name"]').hasText('temp-first_name temp-last_name')
  });
  test('user card is having an email', async function(assert) {
    await render(hbs`{{user-card user=this.user}}`);

    assert.dom('[data-test-id="user-name"]').hasText('temp-email@gmail.com')
  });
});
