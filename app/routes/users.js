import Route from '@ember/routing/route';
import { computed } from '@ember/object';

export default Route.extend({
//   beforeModel(){
//     let users = [{
//         first_name: 'Vamsi',
//         last_name: 'Kaja',
//         email: 'kajavamsi@gmail.com',
//         team: 'Freshteam',
//         joiningDate: new Date('2020-07-22'),
//     },
//     {
//         first_name: 'Koushi',
//         last_name: 'Rama',
//         email: 'koushik.r@gmail.com',
//         team: 'Freshservice',
//         joiningDate: new Date('2019-06-24')
//     },
//     {
//         first_name: 'Shikhar',
//         last_name: 'Agarwal',
//         email: 'shikhar.a@gmail.com',
//         team: 'Freshteam',
//         joiningDate: new Date("2019-01-11"),
//         img_url: 'https://robohash.org/mail@ashallendesign.co.uk'
//     },
//     {
//         first_name: 'James',
//         last_name: 'Adam',
//         email: 'James.a@gmail.com',
//         team: 'Freshservice',
//         joiningDate: new Date("203-01-01")
//     }  ,
//     {
//         first_name: 'Nina',
//         last_name: 'Gotham',
//         email: 'nina.a@gmail.com',
//         team: 'Freshdesk',
//         joiningDate: new Date("2022-10-22"),
//         img_url: 'https://joeschmoe.io/api/v1/mail@ashallendesign.co.uk'
//     }  ,
//     {
//         first_name: 'Naomi',
//         last_name: 'Mathews',
//         email: 'Naomi.a@gmail.com',
//         team: 'Freshteam',
//         joiningDate: new Date("2023-01-01")
//     }  ,
//     {
//         first_name: 'Arinvth',
//         last_name: 'Raj',
//         email: 'arvinth.a@gmail.com',
//         team: 'Freshdesk',
//         joiningDate: new Date("2018-12-29"),
//         img_url:'https://www.gravatar.com/avatar/2c7d99fe281ecd3bcd65ab915bac6dd5?s=250'
//     }  ,
//     {
//         first_name: 'Jon',
//         last_name: 'Aleiya',
//         email: 'jon.a@gmail.com',
//         team: 'Freshteam',
//         joiningDate: new Date("2020-02-23"),
//         img_url:'https://robohash.org/mail@ashallendesign.co.uk'
//     }  ,
//     {
//         first_name: 'Dani',
//         last_name: 'Bro',
//         email: 'dani.a@gmail.com',
//         team: 'Freshdesk',
//         joiningDate: new Date("2021-04-03")
//     }  ,
//     {
//         first_name: 'Virat',
//         last_name: 'A',
//         email: 'virat.a@gmail.com',
//         team: 'Freshchat',
//         joiningDate: new Date("2021-08-15"),
//         img_url:'https://robohash.org/mail@ashallendesign.co.uk'
//     }  ,
//     {
//         first_name: 'Rhot',
//         last_name: 'Milano',
//         email: 'rohit.a@gmail.com',
//         team: 'Freshchat',
//         joiningDate: new Date("2019-06-19"),
//         img_url:'https://www.placecage.com/250/250'
//     }  ,
//     {
//         first_name: 'Rachit',
//         last_name: 'Agarwal',
//         email: 'rachit.a@gmail.com',
//         team: 'Freshteam',
//         joiningDate: new Date("2022-10-26")
//     }  ,
//     {
//         first_name: 'Anshu',
//         last_name: 'Mittal',
//         email: 'anshu.a@gmail.com',
//         team: 'Freshteam',
//         joiningDate: new Date("2022-09-26")
//     }  ,
//     {
//         first_name: 'Priyanka',
//         last_name: 'Jona',
//         email: 'priyanka.a@gmail.com',
//         team: 'Freshchat',
//         joiningDate: new Date("2022-04-29")
//     }
    
// ]; // Add more data here
    
//     users.forEach((user) => {
//       let userRecord = this.store.createRecord('user', user);
//       userRecord.save();
//     });
//     },
    model() {

        return this.store.findAll('user');
    },
});