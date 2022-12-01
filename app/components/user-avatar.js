import Component from '@ember/component';
import { computed } from '@ember/object';

export default Component.extend({
  
  randomColor: computed(function () {
    let colors = [
      '#FF0000',
      '#800000',
      '#FFFF00',
      '#808000',
      '#00FF00',
      '#008000',
      '#00FFFF',
      '#008080',
      '#0000FF',
      '#800080',
      '#FF00FF',
      '#000080',
      '#6F8FAF',
      '#1434A4',
      '#A7C7E7',
      '#9FE2BF',
      '#008080',
      '#E1C16E',
      '#EADDCA',
      '#C19A6B',
      '#C4A484',
      '#F88379',
      '#FFE5B4',
      '#FA8072',
      '#9F2B68',
      '#DC143C'
    ];
    return `${colors[Math.floor(Math.random() * colors.length)]}`
    }),
    initials: computed('user.first_name', function () {
      return this.user.first_name.charAt(0);
      })
});

