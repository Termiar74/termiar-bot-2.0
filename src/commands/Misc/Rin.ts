import { MessageType, Mimetype } from '@adiwajshing/baileys'
import { join } from 'path'
import MessageHandler from '../../Handlers/MessageHandler'
import BaseCommand from '../../lib/BaseCommand'
import WAClient from '../../lib/WAClient'
import { ISimplifiedMessage } from '../../typings'

export default class Command extends BaseCommand {
    constructor(client: WAClient, handler: MessageHandler) {
        super(client, handler, {
            command: 'termiar',
            description: 'Displays the info.',
            category: 'misc',
            usage: `${client.config.prefix}rin`
        })
    }

    run = async (M: ISimplifiedMessage): Promise<void> => {
        const n = [
            './assets/Rin/rin-git.mp4'
        ]
        let rin = n[Math.floor(Math.random() * n.length)]
        return void this.client.sendMessage(M.from, { url: rin }, MessageType.video, {quoted:M.WAMessage,
            mimetype: Mimetype.gif,
            caption: `👉🏻  𝐓𝐄𝐑𝐌𝐈𝐀𝐑 𝐁𝐎𝐓\n\n⚜ *𝐃𝐄𝐒𝐂𝐑𝐈𝐏𝐓𝐈𝐎𝐍: 𝐓𝐄𝐑𝐌𝐈𝐀𝐑 𝐁𝐎𝐓 𝐂𝐑𝐄𝐀𝐓𝐄𝐃 𝐁𝐘 𝐌𝐑. 𝐓𝐄𝐑𝐌𝐈𝐀𝐑. 𝐓𝐇𝐈𝐒 𝐁𝐎𝐓 𝐇𝐀𝐕𝐄 𝐑𝐈𝐂𝐇 𝐀𝐍𝐈𝐌𝐄 𝐀𝐍𝐃 𝐍𝐒𝐅𝐖 𝐅𝐄𝐀𝐓𝐔𝐑𝐄 𝐁𝐀𝐒𝐄𝐃 𝐎𝐍 𝐓𝐄𝐑𝐌𝐈𝐀𝐑 𝐒𝐈𝐑* \n\n ⭐*𝐔𝐑𝐋-𝐓𝐇𝐈𝐒 𝐁𝐎𝐓 𝐈𝐒 𝐏𝐑𝐈𝐕𝐀𝐓𝐄* \n` }
        )
    }
}
