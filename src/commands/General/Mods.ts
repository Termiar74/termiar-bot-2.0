import MessageHandler from '../../Handlers/MessageHandler'
import BaseCommand from '../../lib/BaseCommand'
import WAClient from '../../lib/WAClient'
import { ISimplifiedMessage } from '../../typings'

export default class Command extends BaseCommand {
    constructor(client: WAClient, handler: MessageHandler) {
        super(client, handler, {
            command: 'mods',
            description: "Displays the Moderators' contact info",
            category: 'general',
            usage: `${client.config.prefix}mods`,
            aliases: ['moderators', 'mod', 'owner']
        })
    }

    run = async (M: ISimplifiedMessage): Promise<void> => {
        if (!this.client.config.mods || !this.client.config.mods[0]) return void M.reply('*[UNMODERATED]*')
        const filteredMap = this.client.config.mods.map((mod) => this.client.getContact(mod)).filter((user) => user)
        let text = '👉🏻 *𝐌𝐎𝐃𝐄𝐑𝐀𝐓𝐎𝐑* 👈🏻\n\n'
        filteredMap.forEach(
            (user, index) =>
                (text += `#${index + 1}\n🎫 *𝐔𝐒𝐄𝐑𝐍𝐀𝐌𝐄: ${
                    user.notify || user.vname || user.name || '𝐓𝐄𝐑𝐌𝐈𝐀𝐑 𝐒𝐈𝐑'
                }*\n📱 *𝐂𝐎𝐍𝐓𝐀𝐂𝐓: https://wa.me/+${user?.jid?.split('@')[0]}*\n\n`)
        )
        return void M.reply(text)
    }
}
