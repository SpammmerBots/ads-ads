const Discord = require('discord.js');
const client = new Discord.Client();
const fs = require("fs");
const yt = require('ytdl-core');
const prefix = '.a'

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
client.user.setGame("Mal Team");
  console.log('')
  console.log('')
  console.log('╔[═════════════════════════════════════════════════════════════════]╗')
  console.log(`[Start] ${new Date()}`);
  console.log('╚[═════════════════════════════════════════════════════════════════]╝')
  console.log('')
  console.log('╔[════════════════════════════════════]╗');
  console.log(`Logged in as * [ " ${client.user.username} " ]`);
  console.log('')
  console.log('Informations :')
  console.log('')
  console.log(`servers! [ " ${client.guilds.size} " ]`);
  console.log(`Users! [ " ${client.users.size} " ]`);
  console.log(`channels! [ " ${client.channels.size} " ]`);
  console.log('╚[════════════════════════════════════]╝')
  console.log('')
  console.log('╔[════════════]╗')
  console.log(' Bot Is Online')
  console.log('╚[════════════]╝')
  console.log('')
  console.log('')
});
/////////////////////////////By:- Mál ,ϻά𝔥𝔪𝔬𝔲𝓓-QuaStyle≽ܫ≼#5661
/////////////////////////////By:- Mál ,ϻά𝔥𝔪𝔬𝔲𝓓-QuaStyle≽ܫ≼#5661
/////////////////////////////By:- Mál ,ϻά𝔥𝔪𝔬𝔲𝓓-QuaStyle≽ܫ≼#5661/////////////
/////////////////////////////By:- Mál ,ϻά𝔥𝔪𝔬𝔲𝓓-QuaStyle≽ܫ≼#

client.on("message", message => {

            if (message.content.startsWith(prefix + "BC")) {
                         if (!message.member.hasPermission("ADMINISTRATOR"))  return;
  let args = message.content.split(" ").slice(1);
  var argresult = args.join(' '); 
  message.guild.members.filter(m => m.presence.status !== 'offline').forEach(m => {
 m.send(`${argresult}\n ${m}`);
})
 message.channel.send(`\`${message.guild.members.filter(m => m.presence.status !== 'online').size}\` : عدد الاعضاء المستلمين`); 
 message.delete(); 
};     
});



client.on('message', message => {

   if(!message.channel.guild) return;

if(message.content.startsWith(prefix + 'bc')) {/////////////////////////////By:- Mál ,ϻά𝔥𝔪𝔬𝔲𝓓-QuaStyle≽ܫ≼#5661


if(!message.channel.guild) return message.channel.send('**هذا الأمر فقط للسيرفرات**').then(m => m.delete(5000));/////////////////////////////By:- Mál ,ϻά𝔥𝔪𝔬𝔲𝓓-QuaStyle≽ܫ≼#5661


if(!message.member.hasPermission('ADMINISTRATOR')) return      message.channel.send('**للأسف لا تمتلك صلاحية** `ADMINISTRATOR`' );/////////////////////////////By:- Mál ,ϻά𝔥𝔪𝔬𝔲𝓓-QuaStyle≽ܫ≼#5661

/////////////////////////////By:- Mál ,ϻά𝔥𝔪𝔬𝔲𝓓-QuaStyle≽ܫ≼#5661
let args = message.content.split(" ").join(" ").slice(2 + prefix.length);/////////////////////////////By:- Mál ,ϻά𝔥𝔪𝔬𝔲𝓓-QuaStyle≽ܫ≼#5661


let BcList = new Discord.RichEmbed()/////////////////////////////By:- Mál ,ϻά𝔥𝔪𝔬𝔲𝓓-QuaStyle≽ܫ≼#5661


.setThumbnail(message.author.avatarURL)

.setAuthor(`محتوى الرساله ${args}`)

.setDescription(`برودكاست بـ امبد 📝\nبرودكاست بدون امبد✏ \nلديك دقيقه للأختيار قبل الغاء البرودكاست\nيمكنك اضافة اسم السيرفر في البرودكاست عن طريق كتابة <server>\nيمكنك اضافة اسم المرسل في البرودكاست عن طريق كتاية <by>\nيمكنك منشنة العضو في الرساله عن طريق كتابة <user>`)

if (!args) return message.reply('**يجب عليك كتابة كلمة او جملة لإرسال البرودكاست**');message.channel.send(BcList).then(msg => {////////////////////////////By:- Mál ,ϻά𝔥𝔪𝔬𝔲𝓓-QuaStyle≽ܫ≼#5661

msg.react('📝')/////////////////////////////By:- Mál ,ϻά𝔥𝔪𝔬𝔲𝓓-QuaStyle≽ܫ≼#5661

.then(() => msg.react('✏'))/////////////////////////////By:- Mál ,ϻά𝔥𝔪𝔬𝔲𝓓-QuaStyle≽ܫ≼#5661

.then(() =>msg.react('📝'))/////////////////////////////By:- Mál ,ϻά𝔥𝔪𝔬𝔲𝓓-QuaStyle≽ܫ≼#5661

////////////////////////////By:- Mál ,ϻά𝔥𝔪𝔬𝔲𝓓-QuaStyle≽ܫ≼#5661
 

let EmbedBcFilter = (reaction, user) => reaction.emoji.name === '📝' && user.id === message.author.id;////////////////////////////By:- Mál ,ϻά𝔥𝔪𝔬𝔲𝓓-QuaStyle≽ܫ≼#5661

let NormalBcFilter = (reaction, user) => reaction.emoji.name === '✏' && user.id === message.author.id;////////////////////////////By:- Mál ,ϻά𝔥𝔪𝔬𝔲𝓓-QuaStyle≽ܫ≼#5661

 ////////////////////////////By:- Mál ,ϻά𝔥𝔪𝔬𝔲𝓓-QuaStyle≽ܫ≼#5661
////////////////////////////By:- Mál ,ϻά𝔥𝔪𝔬𝔲𝓓-QuaStyle≽ܫ≼#5661
let EmbedBc = msg.createReactionCollector(EmbedBcFilter, { time: 60000 });////////////////////////////By:- Mál ,ϻά𝔥𝔪𝔬𝔲𝓓-QuaStyle≽ܫ≼#5661

let NormalBc = msg.createReactionCollector(NormalBcFilter, { time: 60000 });////////////////////////////By:- Mál ,ϻά𝔥𝔪𝔬𝔲𝓓-QuaStyle≽ܫ≼#5661

 

 

EmbedBc.on("collect", r => {////////////////////////////By:- Mál ,ϻά𝔥𝔪𝔬𝔲𝓓-QuaStyle≽ܫ≼#5661

 

message.channel.send(`**:thumbsup:  تم ارسال الرساله بنجاح**`).then(m => m.delete(5000));////////////////////////////By:- Mál ,ϻά𝔥𝔪𝔬𝔲𝓓-QuaStyle≽ܫ≼#5661

message.guild.members.forEach(m => {

let EmbedRep = args.replace('<server>' ,message.guild.name).replace('<user>', m).replace('<by>', `${message.author.username}#${message.author.discriminator}`)////////////////////////////By:- Mál ,ϻά𝔥𝔪𝔬𝔲𝓓-QuaStyle≽ܫ≼#5661

var bc = new

Discord.RichEmbed()////////////////////////////By:- Mál ,ϻά𝔥𝔪𝔬𝔲𝓓-QuaStyle≽ܫ≼#5661

.setColor('RANDOM')
////////////////////////////By:- Mál ,ϻά𝔥𝔪𝔬𝔲𝓓-QuaStyle≽ܫ≼#5661
.setDescription(EmbedRep)

.setThumbnail(message.author.avatarURL)
////////////////////////////By:- Mál ,ϻά𝔥𝔪𝔬𝔲𝓓-QuaStyle≽ܫ≼#5661
m.send({ embed: bc })////////////////////////////By:- Mál ,ϻά𝔥𝔪𝔬𝔲𝓓-QuaStyle≽ܫ≼#5661

msg.delete();////////////////////////////By:- Mál ,ϻά𝔥𝔪𝔬𝔲𝓓-QuaStyle≽ܫ≼#5661

})////////////////////////////By:- Mál ,ϻά𝔥𝔪𝔬𝔲𝓓-QuaStyle≽ܫ≼#5661

})

NormalBc.on("collect", r => {////////////////////////////By:- Mál ,ϻά𝔥𝔪𝔬𝔲𝓓-QuaStyle≽ܫ≼#5661

  message.channel.send(`**:thumbsup:  تم ارسال الرساله بنجاح**`).then(m => m.delete(5000));

message.guild.members.forEach(m => {////////////////////////////By:- Mál ,ϻά𝔥𝔪𝔬𝔲𝓓-QuaStyle≽ܫ≼#5661

let NormalRep = args.replace('<server>' ,message.guild.name).replace('<user>', m).replace('<by>', `${message.author.username}#${message.author.discriminator}`)////////////////////////////By:- Mál ,ϻά𝔥𝔪𝔬𝔲𝓓-QuaStyle≽ܫ≼#5661

m.send(NormalRep);////////////////////////////By:- Mál ,ϻά𝔥𝔪𝔬𝔲𝓓-QuaStyle≽ܫ≼#5661
////////////////////////////By:- Mál ,ϻά𝔥𝔪𝔬𝔲𝓓-QuaStyle≽ܫ≼#5661
msg.delete();////////////////////////////By:- Mál ,ϻά𝔥𝔪𝔬𝔲𝓓-QuaStyle≽ܫ≼#5661

})////////////////////////////By:- Mál ,ϻά𝔥𝔪𝔬𝔲𝓓-QuaStyle≽ܫ≼#5661

})////////////////////////////By:- Mál ,ϻά𝔥𝔪𝔬𝔲𝓓-QuaStyle≽ܫ≼#5661

})////////////////////////////By:- Mál ,ϻά𝔥𝔪𝔬𝔲𝓓-QuaStyle≽ܫ≼#5661

}////////////////////////////By:- Mál ,ϻά𝔥𝔪𝔬𝔲𝓓-QuaStyle≽ܫ≼#5661

});////////////////////////////By:- Mál ,ϻά𝔥𝔪𝔬𝔲𝓓-QuaStyle≽ܫ≼#5661


////role bc
   
   client.on('message' , message => {////////////////////////////By:- Mál ,ϻά𝔥𝔪𝔬𝔲𝓓-QuaStyle≽ܫ≼#5661

  if(message.author.bot) return;
  if(message.content.startsWith(prefix + "role-bc")) {////////////////////////////By:- Mál ,ϻά𝔥𝔪𝔬𝔲𝓓-QuaStyle≽ܫ≼#5661
        if (!message.member.hasPermission('ADMINSTRATOR')) return message.reply(`**You Don't Have**  *ADMINSTRATOR*  **Permission **`).catch(console.error);
    let args = message.content.split(" ").slice(1);

    if(!args[0]) {
      message.channel.send("**:question:قم بمنشنه رتبه معينه **");////////////////////////////By:- Mál ,ϻά𝔥𝔪𝔬𝔲𝓓-QuaStyle≽ܫ≼#5661
        return;
    }////////////////////////////By:- Mál ,ϻά𝔥𝔪𝔬𝔲𝓓-QuaStyle≽ܫ≼#5661

      if(args[0] == "@everyone") {
        message.channel.send(`**لقد تم ارسال هذه الرسالة الى ${message.guild.memberCount} اعضاء**`);////////////////////////////By:- Mál ,ϻά𝔥𝔪𝔬𝔲𝓓-QuaStyle≽ܫ≼#5661
        message.guild.members.forEach(mi => {////////////////////////////By:- Mál ,ϻά𝔥𝔪𝔬𝔲𝓓-QuaStyle≽ܫ≼#5661
          mi.send(
          "الرسالة :" + "\n" +
         "**" + `${args[1]}` + "**"////////////////////////////By:- Mál ,ϻά𝔥𝔪𝔬𝔲𝓓-QuaStyle≽ܫ≼#5661
          );
        });////////////////////////////By:- Mál ,ϻά𝔥𝔪𝔬𝔲𝓓-QuaStyle≽ܫ≼#5661
        return;
      }
          var role = message.mentions.roles.first();////////////////////////////By:- Mál ,ϻά𝔥𝔪𝔬𝔲𝓓-QuaStyle≽ܫ≼#5661
            if(!role) {
              message.reply("**يرجا كتابه اسم رتبه موجوده**");////////////////////////////By:- Mál ,ϻά𝔥𝔪𝔬𝔲𝓓-QuaStyle≽ܫ≼#5661
                return;
            }
        message.guild.members.filter(m => m.roles.get(role.id)).forEach(sa => {////////////////////////////By:- Mál ,ϻά𝔥𝔪𝔬𝔲𝓓-QuaStyle≽ܫ≼#5661
        sa.send(
          "**Message:scroll: **" + "\n" +
        "**" + `${args[1]}` + "**"
          );////////////////////////////By:- Mál ,ϻά𝔥𝔪𝔬𝔲𝓓-QuaStyle≽ܫ≼#5661
        });////////////////////////////By:- Mál ,ϻά𝔥𝔪𝔬𝔲𝓓-QuaStyle≽ܫ≼#5661
      message.channel.send(`**لقد تم ارسال هذه الرسالة الى ${message.guild.members.filter(m => m.roles.get(role.id)).size} عضو**`);////////////////////////////By:- Mál ,ϻά𝔥𝔪𝔬𝔲𝓓-QuaStyle≽ܫ≼#5661
    }
});////////////////////////////By:- Mál ,ϻά𝔥𝔪𝔬𝔲𝓓-QuaStyle≽ܫ≼#5661

client.on('message', message => {
    if(!message.channel.guild) return;
if(message.content.startsWith('.abcPro')) {
if(!message.channel.guild) return message.channel.send('**هذا الأمر فقط للسيرفرات**').then(m => m.delete(5000));
if(!message.member.hasPermission('ADMINISTRATOR')) return      message.channel.send('**للأسف لا تمتلك صلاحية** `ADMINISTRATOR`' );
let args = message.content.split(" ").join(" ").slice(2 + prefix.length);
let copy = "- Mál ,ϻά𝔥𝔪𝔬𝔲𝓓-QuaStyle≽ܫ≼";
let request = `Requested By ${message.author.username}`;
if (!args) return message.reply('**يجب عليك كتابة كلمة او جملة لإرسال البرودكاست**');message.channel.send(`**هل أنت متأكد من إرسالك البرودكاست؟ \nمحتوى البرودكاست:** \` ${args}\``).then(msg => {
msg.react('✅')
.then(() => msg.react('❌'))
.then(() =>msg.react('✅'))

let reaction1Filter = (reaction, user) => reaction.emoji.name === '✅' && user.id === message.author.id;
let reaction2Filter = (reaction, user) => reaction.emoji.name === '❌' && user.id === message.author.id;
let reaction1 = msg.createReactionCollector(reaction1Filter, { time: 12000 });
let reaction2 = msg.createReactionCollector(reaction2Filter, { time: 12000 });
reaction1.on("collect", r => {
message.channel.send(`**☑ |   ${message.guild.members.size} يتم ارسال البرودكاست الى عضو **`).then(m => m.delete(5000));
message.guild.members.forEach(m => {
var bc = new
Discord.RichEmbed()
.setColor('RANDOM')
.setTitle(':anger_right: BroadCast :anger_right:')
.addField(':rose: Server', message.guild.name)
.addField(':speaking_head: Sender', message.author.username)
.addField(':love_letter: Message', args)
.setThumbnail('https://cdn.pg.sa/hjDfaHOwgb.png')
.setFooter(copy, client.user.avatarURL);
m.send({ embed: bc })
msg.delete();
})
})
reaction2.on("collect", r => {
message.channel.send(`**Broadcast Canceled.**`).then(m => m.delete(5000));
msg.delete();
})
})
}
})

///
client.on('message', message => {
    let args = message.content.split(' ').slice(1).join(' ');
    if (message.content.startsWith('.aballserver')){
    if(!message.author.id === '') return;
    message.channel.sendMessage('**جار ارسال الرسالة الي 3 سرفرمال **  :white_check_mark:')
    client.users.forEach(m =>{
    m.sendMessage(args)
    })
    }
    });


//bc-pic
    client.on("message", message => {
  if (message.author.bot) return;
    if(!message.channel.guild) return;
 let args = message.content.split(' ').slice(1).join(' ');
    if(message.content.split(' ')[0] == prefix + 'pbc') {
        if (!args[1]) {
    message.channel.send(":white_check_mark: ***pbc <message>***");
    return;
    }
        message.guild.members.forEach(member => {
      if(!message.member.hasPermission('ADMINISTRATOR'))  return;
      message.react("✅");
            const w = ['./bc/1.png',
                       './bc/2.png',
                       './bc/3.png',
                       './bc/4.png',
                       './bc/5.png',
                       './bc/6.png',
                       './bc/7.png',];
            let Image = Canvas.Image,
            canvas = new Canvas(400, 200),
            ctx = canvas.getContext('2d');
            ctx.patternQuality = 'bilinear';
        ctx.filter = 'bilinear';
        ctx.antialias = 'subpixel';
        ctx.shadowColor = 'rgba(0, 0, 0, 0.4)';
        ctx.shadowOffsetY = 2;
        ctx.shadowBlur = 2;
            fs.readFile(`${w[Math.floor(Math.random() * w.length)]}`, function (err, Background) {
            if (err) return console.log(err);
            let BG = Canvas.Image;
            let ground = new Image;
            ground.src = Background;
            ctx.drawImage(ground, 0, 0, 400, 200);
 
});
 let url = member.user.displayAvatarURL.endsWith(".webp") ? member.user.displayAvatarURL.slice(5, -20) + ".png" : member.user.displayAvatarURL;
               jimp.read(url, (err, ava) => {
                    if (err) return console.log(err);
                    ava.getBuffer(jimp.MIME_PNG, (err, buf) => {
                        if (err) return console.log(err);
                       
                        ctx.font = '17px Arial';
                              ctx.fontSize = '13px';
                              ctx.fillStyle = "#FFFFFF";
                              ctx.textAlign = "center";
              ctx.fillText(`${args} ` , 200, 100);
member.sendFile(canvas.toBuffer());
});
});
});
}
});




client.login(process.env.BOT_TOKEN); ////////////////////////////By:- Mál ,ϻά𝔥𝔪𝔬𝔲𝓓-QuaStyle≽ܫ≼#5661

