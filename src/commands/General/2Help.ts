import MessageHandler from '../../Handlers/MessageHandler'
import BaseCommand from '../../lib/BaseCommand'
import WAClient from '../../lib/WAClient'
import { ICommand, IParsedArgs, ISimplifiedMessage } from '../../typings'
import { MessageType, Mimetype } from '@adiwajshing/baileys'
import request from '../../lib/request'


export default class Command extends BaseCommand {
    constructor(client: WAClient, handler: MessageHandler) {
        super(client, handler, {
            command: '2help',
            description: 'Displays the help menu or shows the info of the command provided',
            category: 'general',
            usage: `${client.config.prefix}2help (command_name)`,
            aliases: ['2h','2m','2menu']
        })
    }

    run = async (M: ISimplifiedMessage, parsedArgs: IParsedArgs): Promise<void> => {
            const n = [
            './assets/Rin/rin.mp4','./assets/Rin/rin-1.mp4','./assets/Rin/rin-2.mp4','./assets/Rin/rin-3.mp4','./assets/Rin/rin-4.mp4','./assets/Rin/rin-5.mp4','./assets/Rin/rin-6.mp4'
        ]
        let rin = n[Math.floor(Math.random() * n.length)]
        if (!parsedArgs.joined) {
            const commands = this.handler.commands.keys()
            const categories: { [key: string]: ICommand[] } = {}
            for (const command of commands) {
                const info = this.handler.commands.get(command)
                if (!command) continue
                if (!info?.config?.category || info.config.category === 'dev') continue
                if (Object.keys(categories).includes(info.config.category)) categories[info.config.category].push(info)
                else {
                    categories[info.config.category] = []
                    categories[info.config.category].push(info)
                }
            }
            let text = `
╭─『◀•.¸♡ HELLO ♡¸.•▶』
| ❅───────✧❅✦❅✧───────❅
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
                         \n\n`
            const keys = Object.keys(categories)
            for (const key of keys)
                text += `${this.emojis[keys.indexOf(key)]} *${this.client.util.capitalize(key)}* ${this.emojis[keys.indexOf(key)]}\n\n• \`\`\`${categories[
                    key
                ]
                    .map((command) => command.config?.command)
                    .join('\n')}\`\`\`\n\n`
            return void this.client.sendMessage(M.from, { url: rin }, MessageType.video, {quoted:M.WAMessage,
            mimetype: Mimetype.gif,
            caption: `${text}
 ──❅┈[|ད𝐋𝐄𝐕𝐄𝐋-𝐁𝐎𝐓🎭ཌ|]┈❅───
┌────────────┈❅
│   🤍 |ད𝐓𝐄𝐑𝐌𝐈𝐀𝐑 𝐁𝐎𝐓ཌ|
│   ©️  |𝐓𝐄𝐑𝐌𝐈𝐀𝐑 𝐒𝐈𝐑|
└────────────┈⁂
❅┈[𝐇𝐚𝐯𝐞 𝐆𝐫𝐞𝐚𝐭 𝐃𝐚𝐲]┈❅
🎗 *Note: Use ${this.client.config.prefix}help <command_name> to view the command info*` }
            )
        }
        const key = parsedArgs.joined.toLowerCase()
        const command = this.handler.commands.get(key) || this.handler.aliases.get(key)
        if (!command) return void M.reply(`No Command of Alias Found | "${key}"`)
        const state = await this.client.DB.disabledcommands.findOne({ command: command.config.command })
        M.reply(
            `🎈 *Command:* ${this.client.util.capitalize(command.config?.command)}\n📉 *Status:* ${
                state ? 'Disabled' : 'Available'
            }\n⛩ *Category:* ${this.client.util.capitalize(command.config?.category || '')}${
                command.config.aliases
                    ? `\n♦️ *Aliases:* ${command.config.aliases.map(this.client.util.capitalize).join(', ')}`
                    : ''
            }\n🎐 *Group Only:* ${this.client.util.capitalize(
                JSON.stringify(!command.config.dm ?? true)
            )}\n💎 *Usage:* ${command.config?.usage || ''}\n\n📒 *Description:* ${command.config?.description || ''}`
        )
    }

    emojis = ['🚀', '🌀', '🎵', '🧿', '⚖️', '🚫','👑', '✨', '📚']
}
