const Discord = require('discord.js');
const bot = new Discord.Client();


bot.on('ready', () =>{
    console.log('I am online!');
      });
bot.on('ready', () => {
    bot.user.setStatus('available')
    bot.user.setPresence({
        game: {
            name: 'www.arktic.ga',
            type: "STREAMING",
            url: "https://www.twitch.tv/iz3ns"
        }
    });
});

const prefix = "ab!";

bot.on("message", (message) => {
    if (message.channel.id === '617818476547014686'){
    msg = message.content.toLowerCase();
    if (message.author.bot) return;
    mention = message.mentions.users.first();
    if (msg.startsWith (prefix + "send")) {
        if (mention == null) { return; }
        message.delete();
        mentionMessage = message.content.slice (8);
        mention.sendMessage (mentionMessage);
        message.channel.send ("done");
    }

}})

bot.on('message', msg => {
    if (msg.channel.id === '617818476547014686'){
    if (msg.guild && msg.content.startsWith('ab!all')) {
      let text = msg.content.slice('ab!all'.length);
      msg.guild.members.forEach(member => {
        if (member.id != bot.user.id && !member.user.bot) member.send(text);
      });
    }
}});

bot.on('message', msg=>{
    if(msg.content.toLowerCase() === "arktic"){
        msg.reply('\nThere are 7 Co Founders of ARKTIC They are\nARKTIC乡SARGE(#1941)\t-\tNISANT\nARKTIC乡IZEN(#8953)\t-\tSAGAR\nARKTIC乡ANZY(#5930)\t-\tSACHIN\nARKTIC乡GODFATHER(#2472)\t-\tISHAN\nARKTIC乡CRUSADER(#6786)\t-\tAJAY\nARKTIC乡YOYO(#7475)\t-\tMITESH\nARKTIC乡BEAST(#9176)\t-\tSASHIKANT\n\nThese are the origanls, ALL OF THESE ARE MAIN BOSSES OF ARKTICS,\nwith their appropriate discord tags');
    }
else if(msg.content.toLowerCase() === "arktics"){
        msg.reply('\nThere are 7 Co Founders of ARKTIC They are\nARKTIC乡SARGE(#1941)\t-\tNISANT\nARKTIC乡IZEN(#8953)\t-\tSAGAR\nARKTIC乡ANZY(#5930)\t-\tSACHIN\nARKTIC乡GODFATHER(#2472)\t-\tISHAN\nARKTIC乡CRUSADER(#6786)\t-\tAJAY\nARKTIC乡YOYO(#7475)\t-\tMITESH\nARKTIC乡BEAST(#9176)\t-\tSASHIKANT\n\nThese are the origanls, ALL OF THESE ARE MAIN BOSSES OF ARKTICS,\nwith their appropriate discord tags');
    }
else if(msg.content.toLowerCase() === "anzy"){
    msg.reply('SACHIN is Co founder of Arktic Clan');
}
else if(msg.content.toLowerCase() === "izen"){
    msg.reply('SAGAR is Co founder of Arktic Clan');
}
else if(msg.content.toLowerCase() === "sarge"){
    msg.reply('Nisant Co founder of Arktic Clan');
}
else if(msg.content.toLowerCase() === "godfather"){
    msg.reply('ISHAAN is Co founder of Arktic Clan');
}
else if(msg.content.toLowerCase() === "yoyo"){
    msg.reply('MITESH is Co founder of Arktic Clan');
}
else if(msg.content.toLowerCase() === "crusader"){
    msg.reply('AJAY is Co founder of Arktic Clan');
}
else if(msg.content.toLowerCase() === "beast"){
    msg.reply('SASHIKANT is Co founder of Arktic Clan');
}
else if(msg.content.toLowerCase() === "chutiya"){
    msg.reply('Bhen ke lawde gaand na fulao maa chood denge tumhari');
}
else if(msg.content.toLowerCase() === "chutya"){
    msg.reply('Bhen ke lawde gaand na fulao maa chood denge tumhari');
}
else if(msg.content.toLowerCase() === "chutiyaa"){
    msg.reply('Bhen ke lawde gaand na fulao maa chood denge tumhari');
}
else if(msg.content.toLowerCase() === "chutyaa"){
    msg.reply('Bhen ke lawde gaand na fulao maa chood denge tumhari');
}
else if(msg.content.toLowerCase() === "bhenchod"){
    msg.reply('Bhosdike idhar gaali mat de lawde maa chod denge nahi to');
}
else if(msg.content.toLowerCase() === "bc"){
    msg.reply('Bhosdike idhar gaali mat de lawde maa chod denge nahi to');
}
else if(msg.content.toLowerCase() === "madarchod"){
    msg.reply('Bhosdike idhar gaali mat de lawde madarchod hoga tu');
}
else if(msg.content.toLowerCase() === "mc"){
    msg.reply('Bhosdike idhar gaali mat de lawde madarchod hoga tu');
}
else if(msg.content.toLowerCase() === "gandu"){
    msg.reply('Bhosdike idhar gaali mat de lawde, tera baap gandu samja');
}
else if(msg.content.toLowerCase() === "gaandu"){
    msg.reply('Bhosdike idhar gaali mat de lawde, tera baap gandu samja');
}
else if(msg.content.toLowerCase() === "lawda"){
    msg.reply('Tu chakka hain kya kisne lund kaat diya tera?');
}
else if(msg.content.toLowerCase() === "lawde"){
    msg.reply('Tu chakka hain kya kisne lund kaat diya tera?');
}
else if(msg.content.toLowerCase() === "randi"){
    msg.reply('Bhosdike idhar gaali mat de lawde, teri maa randi samja');
}
else if(msg.content.toLowerCase() === "randii"){
    msg.reply('Bhosdike idhar gaali mat de lawde, teri maa randi samja');
}
else if(msg.content.toLowerCase() === "motherchodd"){
    msg.reply('Bhosdike idhar gaali mat de lawde madarchod hoga tu');
}
else if(msg.content.toLowerCase() === "behenchod"){
    msg.reply('Bhosdike idhar gaali mat de lawde maa chod denge nahi to');
}
else if(msg.content.toLowerCase() === "chutia"){
    msg.reply('Bhen ke lawde gaand na fulao maa chood denge tumhar');
}
else if(msg.content.toLowerCase() === "!monster"){
    msg.reply('\nDownload Monster Hack\nhttp://gestyy.com/w3388u');
}
else if(msg.content.toLowerCase() === "!creation"){
    msg.reply('\nDownload Creation Hack\nhttps://cdn.discordapp.com/attachments/615456178562138153/615679362058027024/imgui_8-26-2019.exe');
}
else if(msg.content.toLowerCase() === "!degogh"){
    msg.reply('\nDownload Degogh from\nhttps://linktr.ee/degogh');
}
else if(msg.content.toLowerCase() === "!fendi"){
    msg.reply('\nDownload Fendi from \nhttp://gestyy.com/w33rN2');
}
else if(msg.content.toLowerCase() === "!kamikaze"){
    msg.reply('\nDownload Kamikaze from \nhttp://corneey.com/w38HwL');
}
else if(msg.content.toLowerCase() === "!lamborghini"){
    msg.reply('\nDownload Lamborghini hack from \nhttps://www.sinkimobile.com/download');
}
else if(msg.content.toLowerCase() === "!lb"){
    msg.reply('\nDownload Lamborghini hack from \nhttps://www.sinkimobile.com/download');
}
else if(msg.content.toLowerCase() === "!lifevip"){
    msg.reply('\nDownload Lifevip hack from \nhttp://gestyy.com/w33yf3');
}
else if(msg.content.toLowerCase() === "!mh"){
    msg.reply('\ndownload memory hackers from \nhttps://mega.nz/#!wVMQHAzJ!jYfqHDKVpm5CCQUjN6dnaAzIJ8AmLQjueRT2BTu9ouk');
}
else if(msg.content.toLowerCase() === "!sinki"){
    msg.reply('\nDownload Sinki from \nhttps://www.sinkimobile.com/download');
}
else if(msg.content.toLowerCase() === "!vnhax"){
    msg.reply('\nDownload vn hax from \nhttps://cdn.discordapp.com/attachments/592650786782314501/611159206824771586/VnHaxLoader-Win64-Shipping_4.exe');
}
else if(msg.content.toLowerCase() === "!youtube"){
    msg.reply('HEY THIS IS MY YOUTUBE CHANNEL\nSUBSCRIBE AND GET DAILY HACK GAMEPLAY VIDEO\nhttps://www.youtube.com/channel/UC083eydMbfgPuHMja6rte9Q');
}
else if(msg.content.toLowerCase() === "!venom"){
    msg.reply('\nDownload Venom hack from\nhttps://mshare.io/file/Ycsmzp');
}
else if(msg.content.toLowerCase() === "!life"){
    msg.reply('\nDownload Lifevip hack from \nhttp://gestyy.com/w33yf3');
}
else if(msg.content.toLowerCase() === "!lif"){
    msg.reply('\nDownload Lifevip hack from \nhttp://gestyy.com/w33yf3');
}
else if(msg.content.toLowerCase() === "loda"){
    msg.reply('Bhaag na motherchod idhar maa chudane kyo aaya');
}
else if(msg.content.toLowerCase() === "lode"){
    msg.reply('Bhaag na motherchod idhar maa chudane kyo aaya');
}
else if(msg.content.toLowerCase() === "looda"){
    msg.reply('Bhaag na motherchod idhar maa chudane kyo aaya');
}
else if(msg.content.toLowerCase() === "loode"){
    msg.reply('Bhaag na motherchod idhar maa chudane kyo aaya');
}
else if(msg.content.toLowerCase() === "fuck"){
    msg.reply('Get Lost and Fuck yourself Bitch');
}
else if(msg.content.toLowerCase() === "fucck"){
    msg.reply('Get Lost and Fuck yourself Bitch');
}
else if(msg.content.toLowerCase() === "fuckk"){
    msg.reply('Get Lost and Fuck yourself Bitch');
}
else if(msg.content.toLowerCase() === "!errorx"){
    msg.reply('\nDownload Errorx from \nhttps://cdn.discordapp.com/attachments/609707272527937537/617370377114353694/errorXvip.vmp.safe.exe');
}
else if(msg.content.toLowerCase() === "bhosdike"){
    msg.reply('Bhosdike idhar gaali mat de lawde, Gaand mara jangal mein chutye');
}
else if(msg.content.toLowerCase() === "bhosdika"){
    msg.reply('Bhosdike idhar gaali mat de lawde, Gaand mara jangal mein chutye');
}
else if(msg.content.toLowerCase() === "bsdk"){
    msg.reply('Bhosdike idhar gaali mat de lawde, Gaand mara jangal mein chutye');
}
else if(msg.content.toLowerCase() === "chut"){
    msg.reply('Bhosdike idhar gaali mat de behen ke lawde, Gaand mara jangal mein chutye');
}
else if(msg.content.toLowerCase() === "chakka"){
    msg.reply('Tera baap chakka aur tu chakke ka beta');
}
else if(msg.content.toLowerCase() === "teri maa ki chut"){
    msg.reply('Tere muh mein Gadhe ka Lauda');
}
else if(msg.content.toLowerCase() === "madrchod"){
    msg.reply('Bhosdike idhar gaali mat de lawde madarchod hoga tu');
}
else if(msg.content.toLowerCase() === "gaand"){
    msg.reply('Paani kam hain matke mein gaand mar lenge jhatke mein');
}
else if(msg.content.toLowerCase() === "gand"){
    msg.reply('Paani kam hain matke mein gaand mar lenge jhatke mein');
}
else if(msg.content.toLowerCase() === "gaaand"){
    msg.reply('Paani kam hain matke mein gaand mar lenge jhatke mein');
}
})

bot.login(process.env.BOT_TOKEN)
