import Route from '@ember/routing/route';

export default Route.extend({
//   beforeModel(){
//     let users = [{
//       first_name: 'Vamsi',
//       last_name: 'Kaja',
//       email: 'kajavamsi@gmail.com',
//       team: 'Freshteam',
//       joiningDate: '2020-07-22'
//     },
//     {
//       first_name: 'Koushi',
//       last_name: 'R',
//       email: 'koushik.r@gmail.com',
//       team: 'Freshteam',
//       joiningDate: '2019-06-24'
//     },
//     {
//         first_name: 'Shikhar',
//         last_name: 'A',
//         email: 'shikhar.a@gmail.com',
//         team: 'Freshteam',
//         joiningDate: '2022-10-26'
//     },
//     {
//         first_name: 'James',
//         last_name: 'A',
//         email: 'James.a@gmail.com',
//         team: 'Freshteam',
//         joiningDate: '2022-10-26'
//     }  ,
//     {
//         first_name: 'Nina',
//         last_name: 'A',
//         email: 'nina.a@gmail.com',
//         team: 'Freshteam',
//         joiningDate: '2022-10-26'
//     }  ,
//     {
//         first_name: 'Naomi',
//         last_name: 'A',
//         email: 'Naomi.a@gmail.com',
//         team: 'Freshteam',
//         joiningDate: '2022-10-26'
//     }  ,
//     {
//         first_name: 'Arinvth',
//         last_name: 'A',
//         email: 'arvinth.a@gmail.com',
//         team: 'Freshteam',
//         joiningDate: '2022-10-26'
//     }  ,
//     {
//         first_name: 'Jon',
//         last_name: 'A',
//         email: 'jon.a@gmail.com',
//         team: 'Freshteam',
//         joiningDate: '2022-10-26'
//     }  ,
//     {
//         first_name: 'Dani',
//         last_name: 'A',
//         email: 'dani.a@gmail.com',
//         team: 'Freshteam',
//         joiningDate: '2022-10-26'
//     }  ,
//     {
//         first_name: 'Virat',
//         last_name: 'A',
//         email: 'virat.a@gmail.com',
//         team: 'Freshteam',
//         joiningDate: '2022-10-26'
//     }  ,
//     {
//         first_name: 'Rhot',
//         last_name: 'A',
//         email: 'rohit.a@gmail.com',
//         team: 'Freshteam',
//         joiningDate: '2022-10-26'
//     }  ,
//     {
//         first_name: 'Rachit',
//         last_name: 'A',
//         email: 'rachit.a@gmail.com',
//         team: 'Freshteam',
//         joiningDate: '2022-10-26'
//     }  ,
//     {
//         first_name: 'Anshu',
//         last_name: 'A',
//         email: 'anshu.a@gmail.com',
//         team: 'Freshteam',
//         joiningDate: '2022-10-26'
//     }  ,
//     {
//         first_name: 'priyanka',
//         last_name: 'A',
//         email: 'priyanka.a@gmail.com',
//         team: 'Freshteam',
//         joiningDate: '2022-10-26'
//     }
    
// ]; // Add more data here
    
//     users.forEach((user) => {
//       let userRecord = this.store.createRecord('user', user);
//       userRecord.save();
//     });
//     },
    model() {
        return this.store.findAll('user');
        // console.log(test)
        // return [];
    }
});