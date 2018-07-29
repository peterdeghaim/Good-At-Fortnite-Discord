const Discord = require('discord.js');
const { prefix } = require('./config.json');
const { token, APIToken } = require('./tokens.json');
const client = new Discord.Client();
const Client = require('fortnite');
const fortnite = new Client(APIToken);

client.on('ready', () => {
    console.log('Ready!');
});

client.login(token);

//VARS

client.on('message', message => {
    if (!message.content.startsWith(prefix) || message.author.bot) return;

    //Args = message with removed prefix 
    const args = message.content.slice(prefix.length).split(' ');
    const command = args.shift().toLowerCase();
    
    if(command === 'gaf'){
       //Transforms user input into proper username by adding in appropriate spaces.
       var kd = 0;
       var fortName = "";
        for(var i = 0; i < args.length; i++){
            fortName += args[i];
            if(i != args.length - 1){
                fortName += ' ';
            }
        }

        let data = fortnite.user(fortName, 'pc').then(data => {

            message.channel.send(determineMessage(fortName, (data.stats.solo.kd + data.stats.duo.kd + data.stats.squad.kd) / 3));
            
            //message.channel.send((data.stats.solo.kd + data.stats.duo.kd + data.stats.squad.kd) / 3);
        });
        //message.channel(messageCalculator(fortName));
        
        //setStats(fortName);
        //console.log(getKd(fortName));
        
    }
    else if(command == 'gaftts'){
        //copied from before bc ceebs to input an array into a function
        var fortName = "'";
        for(var i = 0; i < args.length; i++){
            fortName += args[i];
            if(i != args.length - 1){
                fortName += ' ';
            }
        }
        fortName += "'";

        //message.channel.('/tts ' + fortName);
    }

});

//Returns stats

function determineMessage(name, kd){
    if(kd<0.5){
        return '' + name + ' is absolutely atrocious at Fortnite with an abhorrent K/D of ' + kd +
        '. Our advanced AI systems advise that ' + name + ' quits Fortnite effective immediately. Do not put this brainlet on your squad.' 
    }
    else if(kd >= 0.5 && kd < 0.97){
        return '' + name + ' is bad at Fortnite. When in an argument with ' + name + ' their opinion should be valued as lesser as their K/D is merely ' + kd + ' .';
    }
    else if(kd >= 0.97 && kd < 2){
        return '' + name + ' has the perfect life to Fortnite ratio with a moderate K/D of ' + kd + '. Although having level headed opinions, this person is probably '
        + 'a raging normie.';
    }
    else if(kd >= 2 && kd < 4){
        return '' + name + " is a wannabe Fortnite pro with a K/D of " + kd + ". This person either lacks a valuable social life or spends his time promoting his low quality "
        + ">200 sub YouTube and Twitch channels.";
    }
    else if(kd >= 4 && kd < 8){
        return '' + name + " is a third world country Twitch streamer or a complete social outcast with a depressing K/D of " + kd +
        ". Beware of severe body odour and/or a Twitch channel in an obscure foreign language.";
    }
    else if(kd >= 8){
        return '' + name + " either plays Fortnite as their full time job or lacks a job with a K/D of " + kd + ". This is so sad.";
    }
}
function setStats(name){
    stats = fortnite.user(name, 'pc');
}

function getKd(name){
    let data = fortnite.user(name, 'pc').then(data => {

        var soloKd = data.stats.solo.kd;
        var duoKd = data.stats.duo.kd;
        var squadKd = data.stats.squad.kd;
        print.log(soloKd + duoKd + squadKd);

        return (soloKd + duoKd + squadKd) / 3;
    });
}

function getSoloKd(name){
    let data = fortnite.user(name, 'pc').then(data => {

        return data.stats.solo.kd;
    });
}

function getMessage(){
    var kd = getKd();
    var returnString = '';
    if(kd < 0.5){
        returnString = 'You are absolutely terrible at this game. Any contributions you provi'
    }
}


//Translates args into a fortnite name
/*function getFortName(){
    var fortName = '';
        for(var i = 0; i < args.length; i++){
            fortName += args[i];
            if(i != args.length - 1){
                fortName += ' ';
            }
        }
}*/
