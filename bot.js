const Discord = require('discord.js');
const bot = new Discord.Client();


bot.on('ready', () =>{
    console.log('I am online!');
      });

bot.on('message', msg=>{
    if(msg.content === "arktic"){
    msg.reply('Arktic is the best server ever say CHEERS!');
}
else if(msg.content === "anzy"){
    msg.reply('SACHIN is Co founder of Arktic Clan');
}
else if(msg.content === "izen"){
    msg.reply('SAGAR is Co founder of Arktic Clan');
}
else if(msg.content === "sarge"){
    msg.reply('Nisant Co founder of Arktic Clan');
}
else if(msg.content === "godfather"){
    msg.reply('ISHAAN is Co founder of Arktic Clan');
}
else if(msg.content === "yoyo"){
    msg.reply('MITESH is Co founder of Arktic Clan');
}
else if(msg.content === "crusader"){
    msg.reply('AJAY is Co founder of Arktic Clan');
}
else if(msg.content === "beast"){
    msg.reply('SASHIKANT is Co founder of Arktic Clan');
}
else if(msg.content === "chutiya"){
    msg.reply('Bhen ke lawde gaand na fulao maa chood denge tumhari');
}
else if(msg.content === "bhenchod"){
    msg.reply('Bhosdike idhar gaali mat de lawde maa chod denge nahi to');
}
else if(msg.content === "madarchod"){
    msg.reply('Bhosdike idhar gaali mat de lawde madarchod hoga tu');
}
else if(msg.content === "gandu"){
    msg.reply('Bhosdike idhar gaali mat de lawde, tera baap gandu samja');
}
else if(msg.content === "gaandu"){
    msg.reply('Bhosdike idhar gaali mat de lawde, tera baap gandu samja');
}
else if(msg.content === "lawda"){
    msg.reply('Tu chakka hain kya kisne lund kaat diya tera?');
}
else if(msg.content === "lawde"){
    msg.reply('Tu chakka hain kya kisne lund kaat diya tera?');
}
else if(msg.content === "randi"){
    msg.reply('Bhosdike idhar gaali mat de lawde, teri maa randi samja');
}
else if(msg.content === "randii"){
    msg.reply('Bhosdike idhar gaali mat de lawde, teri maa randi samja');
}
else if(msg.content === "motherchodd"){
    msg.reply('Bhosdike idhar gaali mat de lawde madarchod hoga tu');
}
else if(msg.content === "behenchod"){
    msg.reply('Bhosdike idhar gaali mat de lawde maa chod denge nahi to');
}
else if(msg.content === "chutia"){
    msg.reply('Bhen ke lawde gaand na fulao maa chood denge tumhar');
}
})

bot.login(process.env.BOT_TOKEN)
