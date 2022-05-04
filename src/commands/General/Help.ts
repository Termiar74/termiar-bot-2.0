import { MessageType, Mimetype } from '@adiwajshing/baileys'
import { join } from 'path'
import MessageHandler from '../../Handlers/MessageHandler'
import BaseCommand from '../../lib/BaseCommand'
import WAClient from '../../lib/WAClient'
import { ISimplifiedMessage } from '../../typings'

export default class Command extends BaseCommand {
    constructor(client: WAClient, handler: MessageHandler) {
        super(client, handler, {
            command: 'help',
            description: 'Displays the help menu or shows the info of the command provided',
            category: 'general',
            usage: `${client.config.prefix}help (command_name)`,
            dm: true,
            aliases: ['h','m','menu','MENU','HELP']
        })
    }

    run = async (M: ISimplifiedMessage): Promise<void> => {
        const n = [
            './assets/Rin/rin.mp4','./assets/Rin/rin-1.mp4','./assets/Rin/rin-2.mp4','./assets/Rin/rin-3.mp4','./assets/Rin/rin-4.mp4','./assets/Rin/rin-5.mp4','./assets/Rin/rin-6.mp4'
        ]
        let well = n[Math.floor(Math.random() * n.length)]
        return void this.client.sendMessage(M.from, { url: well }, MessageType.video, {quoted:M.WAMessage,
            mimetype: Mimetype.gif,
            caption: `📝 ɴᴏᴛᴇꜱ

╭─『◀•.¸♡ HELLO ♡¸.•▶』
| ❅───────✧❅✦❅✧────────❅
|🌟𝐇𝐄𝐘 👋 𝐓𝐇𝐈𝐒 𝐈𝐒 |𝐓𝐄𝐑𝐌𝐈𝐀𝐑 𝐁𝐎𝐓 𝟐.𝟎|
|🌟𝐇𝐎𝐖 𝐌𝐀𝐘 𝐈 𝐂𝐀𝐍 𝐇𝐄𝐋𝐏 𝐘𝐎𝐔 *${M.sender.username}*
│: ̗̀➛ 𝐍𝐀𝐌𝐄: ◥|꧁ད𝐓𝐄𝐑𝐌𝐈𝐀𝐑-𝐁𝐎𝐓🎭ཌ꧂|◤
│: ̗̀➛ 𝐏𝐑𝐄𝐅𝐈𝐗: ${this.client.config.prefix}
│: ̗̀➛ 𝐎𝐖𝐍𝐄𝐑: *${this.client.config.prefix}mod*
|: ̗̀➛ 𝐅𝐎𝐋𝐋𝐎𝐖 𝐌𝐄 𝐎𝐍 𝐈𝐍𝐒𝐓𝐀𝐆𝐑𝐀𝐌: https://instagram.com/termiar
│|◥|꧁ད𝐓𝐄𝐑𝐌𝐈𝐀𝐑 𝐁𝐎𝐓🎭ཌ꧂|◤|
│🌟𝐘𝐎𝐔 𝐂𝐀𝐍 𝐔𝐒𝐄 𝐌𝐄 𝐁𝐘 𝐔𝐒𝐈𝐍𝐆 ${this.client.config.prefix}𝐇𝐄𝐋𝐏.
│🌟𝐀𝐋𝐋𝐀𝐇 𝐃𝐈 𝐑𝐄𝐇𝐄𝐌𝐀𝐓𝐈 𝐁𝐍𝐀𝐈𝐘𝐄 𝐑𝐀𝐊𝐇𝐄 𝐒𝐀𝐁𝐊𝐎 🤲 
│ ೃ⁀➷ 𝐈 𝐇𝐎𝐏𝐄 𝐘𝐎𝐔 𝐀𝐋𝐋 𝐄𝐍𝐉𝐎𝐘𝐈𝐍𝐆 𝐓𝐇𝐈𝐒 𝐁𝐎𝐓
│ ೃ⁀➷ 𝐅𝐎𝐑 𝐀𝐃𝐃𝐈𝐍𝐆 𝐌𝐄 𝐈𝐍 𝐀𝐍𝐘 𝐎𝐓𝐇𝐄𝐑 𝐆𝐑𝐎𝐔𝐏𝐒
│ ೃ⁀➷ 𝐂𝐎𝐍𝐓𝐀𝐂𝐓 𝐌𝐘 🤴𝐎𝐖𝐍𝐄𝐑 𝐒𝐈𝐑 -|𝐓𝐄𝐑𝐌𝐈𝐀𝐑🎭|-
│    ⁎̩͙ ⁑̩͙̩͙ ⁂̩̩͙͙     @𝟕𝟎𝟔𝟖𝟏𝟒𝟑𝟎𝟒　　　 ⁂̩̩͙͙ ⁑̩͙̩͙ ⁎̩͙
│          -|𝐓𝐄𝐑𝐌𝐈𝐀𝐑 𝐁𝐎𝐓|-       
| ::::: 🧡 ━━━━━━━━━━━━━━ 🧡 :::::
╰────────────┈平和

|👉🏻𝐈𝐅 𝐘𝐎𝐔 𝐇𝐀𝐕𝐄 𝐀𝐍𝐘 𝐓𝐘𝐏𝐄 𝐎𝐅 𝐈𝐒𝐒𝐔𝐄 𝐖𝐈𝐓𝐇 𝐓𝐇𝐄 𝐁𝐎𝐓 𝐎𝐑 𝐄𝐑𝐑𝐎𝐑 𝐓𝐇𝐄. 𝐂𝐎𝐍𝐓𝐀𝐂𝐓 𝐓𝐎 𝐓𝐇𝐄 𝐁𝐎𝐓 𝐎𝐖𝐍𝐄𝐑. 𝐓𝐘𝐏𝐄 " ${this.client.config.prefix}ᴏᴡɴᴇʀ " 𝐓𝐎 𝐂𝐎𝐍𝐓𝐀𝐂𝐓 𝐎𝐖𝐍𝐄𝐑!

|🌟 ＰＲＥＦＩＸ = ${this.client.config.prefix}
┌────────────┈❅
|三 𝐆𝐄𝐍𝐄𝐑𝐀𝐋 三 
|
|❐ ${this.client.config.prefix}Ｈｅｌｐ1 [${this.client.config.prefix}ｈ１]
|
|三 𝐖𝐄𝐄𝐁𝐒 三 
|
|❐ ${this.client.config.prefix}Ｈｅｌｐ2 [${this.client.config.prefix}ｈ2]
|
|三 𝐅𝐔𝐍 三
|
|❐ ${this.client.config.prefix}Ｈｅｌｐ3 [${this.client.config.prefix}ｈ3]
|
|三 𝐌𝐄𝐃𝐈𝐀 三
|
|❐ ${this.client.config.prefix}Ｈｅｌｐ4 [${this.client.config.prefix}ｈ4]
|
|三 𝐔𝐓𝐈𝐋𝐒 三
|
|❐ ${this.client.config.prefix}Ｈｅｌｐ5 [${this.client.config.prefix}ｈ5]
|
|三 𝐌𝐎𝐃𝐄𝐑𝐀𝐓𝐈𝐎𝐍 三
|
|❐ ${this.client.config.prefix}Ｈｅｌｐ6 [${this.client.config.prefix}ｈ6]
|
|三 𝐄𝐃𝐔𝐂𝐀𝐓𝐈𝐕𝐄 三
|
|❐ ${this.client.config.prefix}Ｈｅｌｐ7 [${this.client.config.prefix}ｈ7]
|
|三 𝐍𝐒𝐅𝐖 三
|
|❐ ${this.client.config.prefix}Ｈｅｌｐ8 [${this.client.config.prefix}ｈ8
└────────────┈⁂
 ──❅┈[|ད𝐋𝐄𝐕𝐄𝐋-𝐁𝐎𝐓🎭ཌ|]┈❅───
┌────────────┈❅
│   ❐ |ད𝐋𝐄𝐕𝐄𝐋-𝐁𝐎𝐓🎭ཌ|
│   ©️ |𝐇𝐀𝐂𝐊𝐓𝐈𝐕𝐈𝐒𝐓 𝐒𝐈𝐑|
└────────────┈⁂
❅┈[𝐇𝐚𝐯𝐞 𝐆𝐫𝐞𝐚𝐭 𝐃𝐚𝐲]┈❅
🎗 *Note: Use ${this.client.config.prefix}help <command_name> to view the command info*` }
        )
    }
}
