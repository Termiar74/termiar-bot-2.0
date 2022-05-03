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
            aliases: ['h','m','menu']
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

┌────────────┈❅
|❏‣ 𝐓𝐇𝐈𝐒 𝐈𝐒 𝐀 |ད𝐇𝐀𝐂𝐊𝐓𝐈-𝐋𝐄𝐕𝐄𝐋-𝐁𝐎𝐓🎭ཌ|!
└────────────┈⁂

|👉🏻𝐈𝐅 𝐘𝐎𝐔 𝐇𝐀𝐕𝐄 𝐀𝐍𝐘 𝐓𝐘𝐏𝐄 𝐎𝐅 𝐈𝐒𝐒𝐔𝐄 𝐖𝐈𝐓𝐇 𝐓𝐇𝐄 𝐁𝐎𝐓 𝐎𝐑 𝐄𝐑𝐑𝐎𝐑 𝐓𝐇𝐄. 𝐂𝐎𝐍𝐓𝐀𝐂𝐓 𝐓𝐎 𝐓𝐇𝐄 𝐁𝐎𝐓 𝐎𝐖𝐍𝐄𝐑. 𝐓𝐘𝐏𝐄 " ${this.client.config.prefix}ᴏᴡɴᴇʀ " 𝐓𝐎 𝐂𝐎𝐍𝐓𝐀𝐂𝐓 𝐎𝐖𝐍𝐄𝐑!

🎗 ᴘʀᴇꜰɪx - ${this.client.config.prefix}
┌──────────────────┈❅
|🌟三 𝐆𝐄𝐍𝐄𝐑𝐀𝐋 三 
|
|❐ ${this.client.config.prefix}Ｈｅｌｐ1 [${this.client.config.prefix}ｈ１]
|
|🌟三 𝐖𝐄𝐄𝐁𝐒 三 
|
|❐ ${this.client.config.prefix}Ｈｅｌｐ2 [${this.client.config.prefix}ｈ2]
|
|🌟三 𝐅𝐔𝐍 三
|
|❐ ${this.client.config.prefix}Ｈｅｌｐ3 [${this.client.config.prefix}ｈ3]
|
|🌟三 𝐌𝐄𝐃𝐈𝐀 三
|
|❐ ${this.client.config.prefix}Ｈｅｌｐ4 [${this.client.config.prefix}ｈ4]
|
|🌟三 𝐔𝐓𝐈𝐋𝐒 三
|
|❐ ${this.client.config.prefix}Ｈｅｌｐ5 [${this.client.config.prefix}ｈ5]
|
|🌟三 𝐌𝐎𝐃𝐄𝐑𝐀𝐓𝐈𝐎𝐍 三
|
|❐ ${this.client.config.prefix}Ｈｅｌｐ6 [${this.client.config.prefix}ｈ6]
|
|🌟三 𝐄𝐃𝐔𝐂𝐀𝐓𝐈𝐕𝐄 三
|
|❐ ${this.client.config.prefix}Ｈｅｌｐ7 [${this.client.config.prefix}ｈ7]
|
|🌟三 𝐍𝐒𝐅𝐖 三
|
|❐ ${this.client.config.prefix}Ｈｅｌｐ8 [${this.client.config.prefix}ｈ8]
└────────────────────┈⁂
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
