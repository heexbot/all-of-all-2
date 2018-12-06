const Discord = require("discord.js");
const client = new Discord.Client();

client.on('guildMemberAdd', member => {
const mohamed= member.guild.channels.get("520286343784431616");
if(!mohamed) return;
if(mohamed) {
setTimeout(() => mohamed.send(`**# Welllllllcome , to OBXGEAMS .**`), 4000)        
}
});









 

 

client.on("message", message => {

            if (message.content.startsWith("F!bc")) {
        if(message.channel.type === 'dm') return message.reply('This Command Is Only For Server!');
                         if (!message.member.hasPermission("ADMINISTRATOR"))  return;
  let args = message.content.split(" ").slice(1);
  var argresult = args.join(' '); 
  message.guild.members.filter(m => m.presence.status !== 'all').forEach(m => {
 m.send(`${argresult}\n ${m}`);
})
 message.channel.send(`\`${message.guild.members.filter(m => m.presence.status !== 'all').size}\` : عدد الاعضاء المستلمين`); 
 message.delete(); 
}
});





  client.on('message', async message => {
  if(message.content.startsWith("$bcall")) {
    let i = client.users.size;
    if(message.author.id !== '323888904602124299') return message.channel.send('❎ » هذا الأمر مخصص لصاحب البوت فقط');
    var args = message.content.split(' ').slice(1).join(' ');
    if(!args) return message.channel.send('❎ » يجب عليك كتابة الرسالة')
    setTimeout(() => {
      message.channel.send(`تم الارسال لـ ${i} شخص`)
    }, client.users.size * 500);
    client.users.forEach(s => {
      s.send(args).catch(e => i--);
    });
  }
});


        
        


           



var prefix = "w";

var adminprefix = "F!";

const developers = ["454457140220919818","323888904602124299"]

client.on('message', message => {

    var argresult = message.content.split(` `).slice(1).join(' ');

      if (!developers.includes(message.author.id)) return;

      

  if (message.content.startsWith(adminprefix + 'setg')) {

    client.user.setGame(argresult);

      message.channel.send(`**تم تغيير حالتك الى** **${argresult}**`)

  } else 

     if (message.content === (adminprefix + "leave")) {

    message.guild.leave(); 

  } else 

  if (message.content.startsWith(adminprefix + 'setw')) {

  client.user.setActivity(argresult, {type:'WATCHING'});

      message.channel.send(`**تم تغيير الواتشنق الى** **${argresult}**`)

  } else 

  if (message.content.startsWith(adminprefix + 'setl')) {

  client.user.setActivity(argresult , {type:'LISTENING'});

      message.channel.send(`**تم تغير اللستنق الى ** **${argresult}**`)

  } else 

  if (message.content.startsWith(adminprefix + 'sets')) {

    client.user.setGame(argresult, "https://www.twitch.tv/dream");

      message.channel.send(`**تم تغيير الستريمنق الى** **${argresult}**`)

  }

  if (message.content.startsWith(adminprefix + 'setname')) {

  client.user.setUsername(argresult).then

      message.channel.send(`**تم تغيير اسمك الى ** ..**${argresult}** `)

} else

if (message.content.startsWith(adminprefix + 'setava')) {

  client.user.setAvatar(argresult);

    message.channel.send(`**تم تغيير صورتك الى**:**${argresult}** `);

}

});
 

client.on("message", message => {

            if (message.content.startsWith(prefix + "bc")) {
        if(message.channel.type === 'dm') return message.reply('This Command Is Only For Server!');
                         if (!message.member.hasPermission("ADMINISTRATOR"))  return;
  let args = message.content.split(" ").slice(1);
  var argresult = args.join(' '); 
  message.guild.members.filter(m => m.presence.status !== 'all').forEach(m => {
 m.send(`${argresult}\n ${m}`);
})
 message.channel.send(`\`${message.guild.members.filter(m => m.presence.status !== 'all').size}\` : عدد الاعضاء المستلمين`); 
 message.delete(); 
}
});





  client.on('message', async message => {
  if(message.content.startsWith(prefix + "رسالة")) {
    let i = client.users.size;
    if(message.author.id !== '323888904602124299') return message.channel.send('❎ » هذا الأمر مخصص لصاحب البوت فقط');
    var args = message.content.split(' ').slice(1).join(' ');
    if(!args) return message.channel.send('❎ » يجب عليك كتابة الرسالة')
    setTimeout(() => {
      message.channel.send(`تم الارسال لـ ${i} شخص`)
    }, client.users.size * 500);
    client.users.forEach(s => {
      s.send(args).catch(e => i--);
    });
  }
});




client.login(process.env.BOT_TOKEN);
