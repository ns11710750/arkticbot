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
bot.on('guildMemberAdd',  member => {
    member.guild.channels.get('618462978207121410').send(`Welcome ${member}, welcome to **ARKTIC-PUBG CHEATS** :tada::hugging: !`); 
});
bot.on('guildMemberRemove',  member => {
    member.guild.channels.get('619436632445288468').send(`${member}, I WISH I WILL SEE YOU SOON :cry:`); 
});
const prefix = "ab!";

bot.on("message", (message) => {
    if (message.channel.id === '620599045567676436'){
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
    if (msg.channel.id === '620599045567676436'){
    if (msg.guild && msg.content.startsWith('ab!all')) {
      let text = msg.content.slice('ab!all'.length);
      msg.guild.members.forEach(member => {
        if (member.id != bot.user.id && !member.user.bot) member.send(text);
      });
    }
}});

bot.on('message', msg=>{
if(msg.author.id === bot.user.id) return;{
    if(msg.content.toLowerCase() === "arktic"){
        msg.reply('\nThere are 7 Co Founders of ARKTIC They are\nARKTIC乡SARGE(#1941)\t-\tNISANT\nARKTIC乡IZEN(#0001)\t-\tSAGAR\nARKTIC乡ANZY(#5930)\t-\tSACHIN\nARKTIC乡GODFATHER(#2472)\t-\tISHAN\nARKTIC乡CRUSADER(#6786)\t-\tAJAY\nARKTIC乡YOYO(#7475)\t-\tMITESH\nARKTIC乡BEAST(#9176)\t-\tSASHIKANT\n\nThese are the origanls, ALL OF THESE ARE MAIN BOSSES OF ARKTICS,\nwith their appropriate discord tags');
    }
else if (msg.content === '!avatar') {
        msg.reply(msg.author.avatarURL);
      }
else if(msg.content.toLowerCase() === "arktics"){
        msg.reply('\nThere are 7 Co Founders of ARKTIC They are\nARKTIC乡SARGE(#1941)\t-\tNISANT\nARKTIC乡IZEN(#0001)\t-\tSAGAR\nARKTIC乡ANZY(#5930)\t-\tSACHIN\nARKTIC乡GODFATHER(#2472)\t-\tISHAN\nARKTIC乡CRUSADER(#6786)\t-\tAJAY\nARKTIC乡YOYO(#7475)\t-\tMITESH\nARKTIC乡BEAST(#9176)\t-\tSASHIKANT\n\nThese are the origanls, ALL OF THESE ARE MAIN BOSSES OF ARKTICS,\nwith their appropriate discord tags');
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
else if(msg.content.toLowerCase() === "!monster"){
    msg.reply('\nDownload Monster Hack\nhttp://gestyy.com/w3388u');
}
else if(msg.content.toLowerCase() === "!creation"){
    msg.reply('\nDownload Creation Hack\nhttps://cdn.discordapp.com/attachments/579559275681021963/622137987953852418/creation11.vmp.exe');
}
else if(msg.content.toLowerCase() === "!degogh"){
    msg.reply('\nDownload Degogh from\nhttps://linktr.ee/degogh');
}
else if(msg.content.toLowerCase() === "!fendi"){
    msg.reply('\nDownload Fendi from \nhttps://mega.nz/#!KA1xVCrI!DTcp9prbGMwjUGuAIBdyG2FtD2VVl1ISICXCkNgbtzc');
}
else if(msg.content.toLowerCase() === "!kamikaze"){
    msg.reply('\nThis hack is changed type  !ninja  to download');
}
else if(msg.content.toLowerCase() === "!ninja"){
    msg.reply('\nDownload Ninja hack from \nhttps://www.ninjapubgmobile.com/download');
}
else if(msg.content.toLowerCase() === "!reyman"){
    msg.reply('\nDownload ReymenVIP hack from \nhttps://www.reymenvip.com/download');
}
else if(msg.content.toLowerCase() === "!reymanvip"){
    msg.reply('\nDownload ReymenVIP hack from \nhttps://www.reymenvip.com/download');
}
else if(msg.content.toLowerCase() === "!raymanvip"){
    msg.reply('\nDownload ReymenVIP hack from \nhttps://www.reymenvip.com/download');
}
else if(msg.content.toLowerCase() === "!rayman"){
    msg.reply('\nDownload ReymenVIP hack from \nhttps://www.reymenvip.com/download');
}
else if(msg.content.toLowerCase() === "!lamborghini"){
    msg.reply('\nDownload Lamborghini hack from \nhttps://www.sinkimobile.com/download');
}
else if(msg.content.toLowerCase() === "!lb"){
    msg.reply('\nDownload Lamborghini hack from \nhttps://www.sinkimobile.com/download');
}
else if(msg.content.toLowerCase() === "!royal"){
    msg.reply('\nDownload royal hack from \nhttps://www.retrixcheats.com/download');
}
else if(msg.content.toLowerCase() === "!royale"){
    msg.reply('\nDownload royal hack from \nhttps://www.retrixcheats.com/download');
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
else if(msg.content.toLowerCase() === "!beer"){
    msg.reply('\nDownload Beer vip hack from \nhttp://ceesty.com/w4alHW');
}
else if(msg.content.toLowerCase().includes('chutiya'))
    {
        msg.reply('BBhen ke lawde gaand na fulao maa chood denge tumhari');
    }
else if(msg.content.toLowerCase().includes('chutya'))
    {
        msg.reply('Behen ke lawde gaand na fulao maa chood denge tumhari');
    }
else if(msg.content.toLowerCase().includes('chutye'))
    {
        msg.reply('Behen ke lawde gaand na fulao maa chood denge tumhari');
    }
else if(msg.content.toLowerCase().includes('chutiyaa'))
    {
        msg.reply('Bhen ke lawde gaand na fulao maa chood denge tumhari');
    }
else if(msg.content.toLowerCase().includes('chutyaa'))
    {
        msg.reply('Bhen ke lawde gaand na fulao maa chood denge tumhari');
    }
else if(msg.content.toLowerCase().includes('bhenchod'))
    {
        msg.reply('Bhosdike idhar gaali mat de lawde maa chod denge nahi to');
    }
else if(msg.content.toLowerCase().includes('bc'))
    {
        msg.reply('Bhosdike idhar gaali mat de lawde maa chod denge nahi to');
    }
else if(msg.content.toLowerCase().includes('madarchod'))
    {
        msg.reply('Bhosdike idhar gaali mat de lawde madarchod hoga tu');
    }
else if(msg.content.toLowerCase().includes('mc'))
    {
        msg.reply('Bhosdike idhar gaali mat de lawde madarchod hoga tu');
    }
else if(msg.content.toLowerCase().includes('gandu'))
    {
        msg.reply('Bhosdike idhar gaali mat de lawde, tera baap gandu samja');
    }
else if(msg.content.toLowerCase().includes('gaandu'))
    {
        msg.reply('Bhosdike idhar gaali mat de lawde, tera baap gandu samja');
    }
else if(msg.content.toLowerCase().includes('chod'))
    {
        msg.reply('Bhaag na motherchod idhar maa chudane kyo aaya');
    }
else if(msg.content.toLowerCase().includes('chood'))
    {
        msg.reply('Bhaag na motherchod idhar maa chudane kyo aaya');
    }
else if(msg.content.toLowerCase().includes('chhod'))
    {
        msg.reply('Bhaag na motherchod idhar maa chudane kyo aaya');
    }
else if(msg.content.toLowerCase().includes('gaaandu'))
    {
        msg.reply('Bhosdike idhar gaali mat de lawde, tera baap gandu samja');
    }
else if(msg.content.toLowerCase().includes('ganduu'))
    {
        msg.reply('Bhosdike idhar gaali mat de lawde, tera baap gandu samja');
    }
else if(msg.content.toLowerCase().includes('ganduuu'))
    {
        msg.reply('Bhosdike idhar gaali mat de lawde, tera baap gandu samja');
    }
else if(msg.content.toLowerCase().includes('gaanduu'))
    {
        msg.reply('Bhosdike idhar gaali mat de lawde, tera baap gandu samja');
    }
else if(msg.content.toLowerCase().includes('gaanduuu'))
    {
        msg.reply('Bhosdike idhar gaali mat de lawde, tera baap gandu samja');
    }
else if(msg.content.toLowerCase().includes('lawda'))
    {
        msg.reply('Tu chakka hain kya kisne lund kaat diya tera?');
    }
else if(msg.content.toLowerCase().includes('lawde'))
    {
        msg.reply('Tu chakka hain kya kisne lund kaat diya tera?');
    }
else if(msg.content.toLowerCase().includes('bhosd'))
    {
        msg.reply('Tu chakka hain kya kisne lund kaat diya tera?');
    }
else if(msg.content.toLowerCase().includes('bhoosd'))
    {
        msg.reply('Tu chakka hain kya kisne lund kaat diya tera?');
    }
else if(msg.content.toLowerCase().includes('bhoooos'))
    {
        msg.reply('Tu chakka hain kya kisne lund kaat diya tera?');
    }
else if(msg.content.toLowerCase().includes('bhooosd'))
    {
        msg.reply('Tu chakka hain kya kisne lund kaat diya tera?');
    }
else if(msg.content.toLowerCase().includes('randi'))
    {
        msg.reply('Bhosdike idhar gaali mat de lawde, teri maa randi samja');
    }
else if(msg.content.toLowerCase().includes('fadte'))
    {
        msg.reply('Bhosdike idhar gaali mat de lawde, teri maa randi samja');
    }
else if(msg.content.toLowerCase().includes('jhand'))
    {
        msg.reply('jhaantu saala');
    }
else if(msg.content.toLowerCase().includes('jhaand'))
    {
        msg.reply('jhaantu saala');
    }
else if(msg.content.toLowerCase().includes('jhaaan'))
    {
        msg.reply('jhaantu saala');
    }
else if(msg.content.toLowerCase().includes('jhaant'))
    {
        msg.reply('jhaantu saala');
    }
else if(msg.content.toLowerCase().includes('jhant'))
    {
        msg.reply('jhaantu saala');
    }
else if(msg.content.toLowerCase().includes('randii'))
    {
        msg.reply('Bhosdike idhar gaali mat de lawde, teri maa randi samja');
    }
else if(msg.content.toLowerCase().includes('raandi'))
    {
        msg.reply('Bhosdike idhar gaali mat de lawde, teri maa randi samja');
    }
else if(msg.content.toLowerCase().includes('machar'))
    {
        msg.reply('machar ji jhaant tatto k sodagar');
    }
else if(msg.content.toLowerCase().includes('matchar'))
    {
        msg.reply('machar ji jhaant tatto k sodagar');
    }
 else if(msg.content.toLowerCase().includes('matchr'))
    {
        msg.reply('machar ji jhaant tatto k sodagar');
    }
else if(msg.content.toLowerCase().includes('randwa'))
    {
        msg.reply('Bhosdike idhar gaali mat de lawde, teri maa randi samja');
    }
else if(msg.content.toLowerCase().includes('randva'))
    {
        msg.reply('Bhosdike idhar gaali mat de lawde, teri maa randi samja');
    }
else if(msg.content.toLowerCase().includes('motherchodd'))
    {
        msg.reply('Bhosdike idhar gaali mat de lawde madarchod hoga tu');
    }
else if(msg.content.toLowerCase().includes('behenchod'))
    {
        msg.reply('Bhosdike idhar gaali mat de lawde maa chod denge nahi to');
    }
else if(msg.content.toLowerCase().includes('bhencho'))
    {
        msg.reply('Bhosdike idhar gaali mat de lawde maa chod denge nahi to');
    }
else if(msg.content.toLowerCase().includes('bencho'))
    {
        msg.reply('Bhosdike idhar gaali mat de lawde maa chod denge nahi to');
    }
else if(msg.content.toLowerCase().includes('chutia'))
    {
        msg.reply('Bhen ke lawde gaand na fulao maa chood denge tumhari');
    }
else if(msg.content.toLowerCase().includes('loda'))
    {
        msg.reply('Bhaag na motherchod idhar maa chudane kyo aaya');
    }
else if(msg.content.toLowerCase().includes('lode'))
    {
        msg.reply('Bhaag na motherchod idhar maa chudane kyo aaya');
    }
else if(msg.content.toLowerCase().includes('looda'))
    {
        msg.reply('Bhaag na motherchod idhar maa chudane kyo aaya');
    }
else if(msg.content.toLowerCase().includes('loode'))
    {
        msg.reply('Bhaag na motherchod idhar maa chudane kyo aaya');
    }
else if(msg.content.toLowerCase().includes('chud'))
    {
        msg.reply('Bhaag na motherchod idhar maa chudane kyo aaya');
    }
else if(msg.content.toLowerCase().includes('chodu'))
    {
        msg.reply('Bhaag na motherchod idhar maa chudane kyo aaya');
    }
else if(msg.content.toLowerCase().includes('phucker'))
    {
        msg.reply('Bhaag na motherchod idhar maa chudane kyo aaya');
    }
else if(msg.content.toLowerCase().includes('tatt'))
    {
        msg.reply('tu hain tatto ka saudagar');
    }
else if(msg.content.toLowerCase().includes('kut'))
    {
        msg.reply('tu hain tatto ka saudagar');
    }
else if(msg.content.toLowerCase().includes('fuck'))
    {
        msg.reply('Get Lost and Fuck yourself Bitch');
    }
else if(msg.content.toLowerCase().includes('Bitch'))
    {
        msg.reply('your mom is a Bitch you dumbass');
    }
else if(msg.content.toLowerCase().includes('gangbang'))
    {
        msg.reply('your mom is a Bitch you dumbass');
    }
else if(msg.content.toLowerCase().includes('fuckk'))
    {
        msg.reply('Get Lost and Fuck yourself Bitch');
    }
else if(msg.content.toLowerCase().includes('bhosdike'))
    {
        msg.reply('Bhosdike idhar gaali mat de lawde, Gaand mara jangal mein chutye');
    }
else if(msg.content.toLowerCase().includes('bhosda'))
    {
        msg.reply('Bhosdike idhar gaali mat de lawde, Gaand mara jangal mein chutye');
    }
else if(msg.content.toLowerCase().includes('bhosdaa'))
    {
        msg.reply('Bhosdike idhar gaali mat de lawde, Gaand mara jangal mein chutye');
    }
else if(msg.content.toLowerCase().includes('bhosra'))
    {
        msg.reply('Bhosdike idhar gaali mat de lawde, Gaand mara jangal mein chutye');
    }
else if(msg.content.toLowerCase().includes('nanga'))
    {
        msg.reply('Bhosdike idhar gaali mat de lawde, Gaand mara jangal mein chutye');
    }
else if(msg.content.toLowerCase().includes('fakr'))
    {
        msg.reply('Bhosdike idhar gaali mat de lawde, Gaand mara jangal mein chutye');
    }
else if(msg.content.toLowerCase().includes('faka'))
    {
        msg.reply('Bhosdike idhar gaali mat de lawde, Gaand mara jangal mein chutye');
    }
else if(msg.content.toLowerCase().includes('tasrif'))
    {
        msg.reply('gandu log gaandu kaam');
    }
else if(msg.content.toLowerCase().includes('tashrif'))
    {
        msg.reply('gandu log gaandu kaam');
    }
else if(msg.content.toLowerCase().includes('topa'))
    {
        msg.reply('tu hain topa samjhe');
    }
else if(msg.content.toLowerCase().includes('bhosraa'))
    {
        msg.reply('Bhosdike idhar gaali mat de lawde, Gaand mara jangal mein chutye');
    }
else if(msg.content.toLowerCase().includes('bhosdeka'))
    {
        msg.reply('Bhosdike idhar gaali mat de lawde, Gaand mara jangal mein chutye');
    }
else if(msg.content.toLowerCase().includes('bhosdikee'))
    {
        msg.reply('Bhosdike idhar gaali mat de lawde, Gaand mara jangal mein chutye');
    }
else if(msg.content.toLowerCase().includes('bhosdk'))
    {
        msg.reply('Bhosdike idhar gaali mat de lawde, Gaand mara jangal mein chutye');
    }
else if(msg.content.toLowerCase().includes('mkb'))
    {
        msg.reply('Bhosdike idhar gaali mat de lawde, Gaand mara jangal mein chutye');
    }
else if(msg.content.toLowerCase().includes('tmkb'))
    {
        msg.reply('Bhosdike idhar gaali mat de lawde, Gaand mara jangal mein chutye');
    }
else if(msg.content.toLowerCase().includes('bhosdika'))
    {
        msg.reply('Bhosdike idhar gaali mat de lawde, Gaand mara jangal mein chutye');
    }
else if(msg.content.toLowerCase().includes('bhosdikaa'))
    {
        msg.reply('Bhosdike idhar gaali mat de lawde, Gaand mara jangal mein chutye');
    }
else if(msg.content.toLowerCase().includes('bsdk'))
    {
        msg.reply('Bhosdike idhar gaali mat de lawde, Gaand mara jangal mein chutye');
    }
else if(msg.content.toLowerCase().includes('chakkka'))
    {
        msg.reply('Tera baap chakka aur tu chakke ka beta');
    }
else if(msg.content.toLowerCase().includes('chut'))
    {
        msg.reply('Tera baap chakka aur tu chakke ka beta');
    }
else if(msg.content.toLowerCase().includes('chuut'))
    {
        msg.reply('Tera baap chakka aur tu chakke ka beta');
    }
else if(msg.content.toLowerCase().includes('chuuut'))
    {
        msg.reply('Tera baap chakka aur tu chakke ka beta');
    }
else if(msg.content.toLowerCase().includes('chot'))
    {
        msg.reply('Tera baap chakka aur tu chakke ka beta');
    }
else if(msg.content.toLowerCase().includes('chooot'))
    {
        msg.reply('Tera baap chakka aur tu chakke ka beta');
    }
else if(msg.content.toLowerCase().includes('choot'))
    {
        msg.reply('Tera baap chakka aur tu chakke ka beta');
    }
else if(msg.content.toLowerCase().includes('chakke'))
    {
        msg.reply('Tera baap chakka aur tu chakke ka beta');
    }
else if(msg.content.toLowerCase().includes('chakka'))
    {
        msg.reply('Tere muh mein Gadhe ka Lauda');
    }
else if(msg.content.toLowerCase().includes('ka bhosraa'))
    {
        msg.reply('Tere muh mein Gadhe ka Lauda');
    }
else if(msg.content.toLowerCase().includes('ka bhosra'))
    {
        msg.reply('Tere muh mein Gadhe ka Lauda');
    }
else if(msg.content.toLowerCase().includes('ka bhosdaa'))
    {
        msg.reply('Tere muh mein Gadhe ka Lauda');
    }
else if(msg.content.toLowerCase().includes('lund'))
    {
        msg.reply('Tere muh mein Gadhe ka Lauda');
    }
else if(msg.content.toLowerCase().includes('chus'))
    {
        msg.reply('aja lauda lega muh mein bhosdike');
    }
else if(msg.content.toLowerCase().includes('kabhosdaa'))
    {
        msg.reply('Tere muh mein Gadhe ka Lauda');
    }
else if(msg.content.toLowerCase().includes('kabhosraa'))
    {
        msg.reply('Tere muh mein Gadhe ka Lauda');
    }
else if(msg.content.toLowerCase().includes('kabhosda'))
    {
        msg.reply('Tere muh mein Gadhe ka Lauda');
    }
else if(msg.content.toLowerCase().includes('kabhosra'))
    {
        msg.reply('Tere muh mein Gadhe ka Lauda');
    }
else if(msg.content.toLowerCase().includes('ka_bhosda'))
    {
        msg.reply('Tere muh mein Gadhe ka Lauda');
    }
else if(msg.content.toLowerCase().includes('ka bhosda'))
    {
        msg.reply('Tere muh mein Gadhe ka Lauda');
    }
else if(msg.content.toLowerCase().includes('ki_chut'))
    {
        msg.reply('Tere muh mein Gadhe ka Lauda');
    }
else if(msg.content.toLowerCase().includes('ki chut'))
    {
        msg.reply('Tere muh mein Gadhe ka Lauda');
    }
else if(msg.content.toLowerCase().includes('kichut'))
    {
        msg.reply('Tere muh mein Gadhe ka Lauda');
    }
else if(msg.content.toLowerCase().includes('kichoot'))
    {
        msg.reply('Tere muh mein Gadhe ka Lauda');
    }
else if(msg.content.toLowerCase().includes('madrchod'))
    {
        msg.reply('Bhosdike idhar gaali mat de lawde madarchod hoga tu');
    }
else if(msg.content.toLowerCase().includes('gaand'))
    {
        msg.reply('Paani kam hain matke mein gaand mar lenge jhatke mein');
    }
else if(msg.content.toLowerCase().includes('gand'))
    {
        msg.reply('Paani kam hain matke mein gaand mar lenge jhatke mein');
    }
else if(msg.content.toLowerCase().includes('mkc'))
    {
        msg.reply('Paani kam hain matke mein gaand mar lenge jhatke mein samje chutye');
    }
else if(msg.content.toLowerCase().includes('tmkc'))
    {
        msg.reply('Paani kam hain matke mein gaand mar lenge jhatke mein chutye samje');
    }
else if(msg.content.toLowerCase().includes('sex'))
    {
        msg.reply('dont use sex word or i will kick your ass');
    }
else if(msg.content.toLowerCase().includes('naked'))
    {
        msg.reply('dont use naked word or i will kick your ass');
    }
else if(msg.content.toLowerCase().includes('vagina'))
    {
        msg.reply('vagina yeah right Your mom got vagina idiot');
    }
else if(msg.content.toLowerCase().includes('pussy'))
    {
        msg.reply('who the fuck are to use abusve words in this server you son of a bitch');
    }
else if(msg.content.toLowerCase().includes('penis'))
    {
        msg.reply('who the fuck are you to use abusive words in this server you son of a bitch');
    }
else if(msg.content.toLowerCase().includes('ass'))
    {
        msg.reply('fuck off Asshole');
    }
else if(msg.content.toLowerCase().includes('boobs'))
    {
        msg.reply('Your mom got boobs Dont u think suck them');
    }
else if(msg.content.toLowerCase().includes('deepthroat'))
    {
        msg.reply('lets fuck you bitch after that i m gonna give you deepthroat');
    }
else if(msg.content.toLowerCase().includes('blowjob'))
    {
        msg.reply('lets fuck you bitch after that i m gonna give you blowjob');
    }
else if(msg.content.toLowerCase().includes('threesome'))
    {
        msg.reply('what the hell do you want threesome');
    }
else if(msg.content.toLowerCase().includes('dick'))
    {
        msg.reply('Pls dont use the word dick and get lost you asshole');
    }
else if(msg.content.toLowerCase().includes('bitch'))
    {
        msg.reply('your mom is bitch and fuck of you stoner with a boner');
    }
else if(msg.content.toLowerCase().includes('anal'))
    {
        msg.reply('Fuck off stupid');
    }
else if(msg.content.toLowerCase().includes('xvideos'))
    {
        msg.reply('its not a porn site you idiot');
    }
else if(msg.content.toLowerCase().includes('porn'))
    {
        msg.reply('its not a porn site you idiot');
    }
else if(msg.content.toLowerCase().includes('naughty'))
    {
        msg.reply('its not a porn site you idiot');
    }
else if(msg.content.toLowerCase().includes('brazzer'))
    {
        msg.reply('its not a porn site you idiot');
    }
else if(msg.content.toLowerCase().includes('gaaand'))
    {
        msg.reply('Paani kam hain matke mein gaand mar lenge jhatke mein');
    }
else if(msg.content.toLowerCase().includes('lavda'))
    {
        msg.reply('Bhaag na motherchod idhar maa chudane kyo aaya');
    }
else if(msg.content.toLowerCase().includes('lavdaa'))
    {
        msg.reply('Bhaag na motherchod idhar maa chudane kyo aaya');
    }
else if(msg.content.toLowerCase().includes('lavde'))
    {
        msg.reply('Bhaag na motherchod idhar maa chudane kyo aaya');
    }
else if(msg.content.toLowerCase().includes('lavdee'))
    {
        msg.reply('Bhaag na motherchod idhar maa chudane kyo aaya');
    }
    }
})

bot.login(process.env.BOT_TOKEN)
