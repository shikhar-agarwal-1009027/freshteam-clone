import { module, test , only} from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render,click, visit } from '@ember/test-helpers';
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

    assert.dom('[data-test-id="user-email"]').hasText('temp-email@gmail.com')
  });

  test('edit the user details', async function (assert) {
    await render(hbs`{{user-card user=this.user}}`);

    await click('.card-action-btn a');
    await visit('users/edit/:id')
    await render(hbs`{{user-form userData=this.user}}`);

    assert.dom('#firstName').hasAnyValue();
    assert.dom('#lastName').hasAnyValue();
    assert.dom('#email').hasAnyValue();
    assert.dom('#designation').hasAnyValue();

  })
  only('delete the user ', async function (assert) {
    await render(hbs`{{user-card user=this.user}} <div id="ember-bootstrap-wormhole"></div>`);

    await click('#delete-btn');
    assert.dom('#ember-bootstrap-wormhole #del-confirm').exists();

    await click('#ember-bootstrap-wormhole #del-confirm');
    assert.ok(this.user.isDeleted);
  })
});
