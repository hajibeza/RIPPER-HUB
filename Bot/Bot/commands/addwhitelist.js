﻿const Discord = require('discord.js')
function makeid(length) {
    var result = '';
    var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    var charactersLength = characters.length;
    for (var i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}module.exports = {
    name: 'addwh',
    async execute(client, message, args, con, prefix, token, log) {
        const member = message.mentions.members.first();
        if (!message.member.roles.cache.find(r => r.name === "whitelist-acces")) {
            const Embedasdasd = new Discord.MessageEmbed()
                .setAuthor('• FAILDED!')
				.setColor("#ff3b3b")
				.setDescription("```\nคุณไม่มียศ!!\n```")
				.setTimestamp()
				.setFooter('Src', 'https://media.discordapp.net/attachments/899934246066597959/936545005059862568/fbb6a49398c98a126d1b7dfded0db52b.jpg');
            return message.channel.send({ embeds: [Embedasdasd] })
        } else {
            if (args[0]){
            con.query(`SELECT discord FROM whitelist WHERE discord = '${args[0]}' AND Blacklist = 'False'`, function (err, res) {
                if (res.length) {
                    const gggggffgffgfgfgfhhhhh = new Discord.MessageEmbed()
						.setAuthor('• FAILDED!')
						.setColor("#ff3b3b")
						.setDescription("```\nผู้ใช้มี whitelist อยู่เเล้ว!!\n```")
						.setTimestamp()
						.setFooter('Src', 'https://media.discordapp.net/attachments/899934246066597959/936545005059862568/fbb6a49398c98a126d1b7dfded0db52b.jpg');
					 message.channel.send({ embeds: [gggggffgffgfgfgfhhhhh] })
                }else{
                    var keyrandom = `Valhalla-${makeid(8)}`
                    con.query(`INSERT INTO whitelist (userkey,hwid,discord,Blacklist) VALUES ('${keyrandom}','Unknown','${args[0]}','False')`, function (err, results, fields) {
                    const ggggghhfdsfsdfsdfhhh = new Discord.MessageEmbed()
						.setAuthor('• SUCCESFULLY!')
						.setColor("#58ffa8")
						.setDescription("```\nทำการเพิ่ม Whitelist เเล้ว!!\n```")
						.setTimestamp()
						.setFooter('Src', 'https://media.discordapp.net/attachments/899934246066597959/936545005059862568/fbb6a49398c98a126d1b7dfded0db52b.jpg');
                 message.channel.send({ embeds: [ggggghhfdsfsdfsdfhhh] })
                    })

                }
            })
        }   
    }
    },
};