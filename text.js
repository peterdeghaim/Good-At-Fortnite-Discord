const Client = require('fortnite');
const fortnite = new Client('5f63d788-ba94-4bee-94a3-efe09d49426c');

let data = fortnite.user('Despacito II', 'pc').then(data => {

    /*let stats = data.stats;
    let solostats = stats.solo;
    let duostats = stats.duo;
    let sqaudstats = stats.sqaud;

    var soloKd = solostats.kd;*/

    console.log((data.stats.solo.kd + data.stats.duo.kd + data.stats.squad.kd) / 3);
});