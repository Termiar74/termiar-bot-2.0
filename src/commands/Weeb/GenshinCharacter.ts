import MessageHandler from '../../Handlers/MessageHandler'
import BaseCommand from '../../lib/BaseCommand'
import WAClient from '../../lib/WAClient'
import { IParsedArgs, ISimplifiedMessage } from '../../typings'
import genshindb from 'genshin-db'
import request from '../../lib/request'
import { MessageType } from '@adiwajshing/baileys'

export default class Command extends BaseCommand {
    constructor(client: WAClient, handler: MessageHandler) {
        super(client, handler, {
            command: 'genshincharacter',
            description: `Gives you the data of the given genshin character.`,
            aliases: ['gchar', 'genshinchara'],
            category: 'weeb',
            usage: `${client.config.prefix}genshincharacter [name]`,
            baseXp: 50
        })
    }

    run = async (M: ISimplifiedMessage, { joined }: IParsedArgs): Promise<void> => {
        if (!joined) return void (await M.reply(`𝐏𝐋𝐄𝐀𝐒𝐄 𝐏𝐑𝐎𝐕𝐈𝐃𝐄 𝐓𝐇𝐄 𝐂𝐇𝐀𝐑𝐀𝐂𝐓𝐄𝐑 𝐍𝐀𝐌𝐄.`))
        const genshin = joined.trim()
        const chara = await genshindb.characters(genshin)
        if (chara === undefined) {
            return void M.reply('𝐍𝐎 𝐒𝐔𝐂𝐇 𝐂𝐇𝐀𝐑𝐀𝐂𝐓𝐄𝐑. 𝐁𝐀𝐊𝐀!')
        }
        let text = ''
        text += `💎 *𝐍𝐀𝐌𝐄: ${chara.name}*\n`
        text += `💠 *𝐄𝐋𝐄𝐌𝐄𝐍𝐓: ${chara.element}*\n`
        text += `📛 *𝐖𝐄𝐀𝐏𝐎𝐍: ${chara.weapontype}*\n`
        text += `🎗 *𝐒𝐏𝐄𝐂𝐈𝐀𝐋𝐈𝐓𝐘: ${chara.substat}*\n`
        text += `🌟 *𝐑𝐀𝐑𝐄𝐈𝐓𝐘: ${chara.rarity}*\n`
        text += `🌸 *𝐆𝐄𝐍𝐃𝐄𝐑: ${chara.gender}*\n`
        text += `❄ *𝐂𝐎𝐍𝐒𝐓𝐄𝐋𝐋𝐀𝐓𝐈𝐎𝐍: ${chara.constellation}*\n`
        text += `⛩ *𝐑𝐄𝐈𝐆𝐎𝐍: ${chara.region}*\n`
        text += `💮 *𝐀𝐅𝐅𝐈𝐋𝐈𝐀𝐓𝐈𝐎𝐍: ${chara.affiliation}*\n`
        text += `🎁 *𝐁𝐈𝐑𝐓𝐇𝐃𝐀𝐘: ${chara.birthday}*\n\n`
        text += `💛 *𝐃𝐄𝐒𝐂𝐑𝐈𝐏𝐓𝐈𝐎𝐍: ${chara.description}*\n\n`
        text += `🌐 *𝐔𝐑𝐋: ${chara.url.fandom}*`
        const buffer = await request.buffer(chara.images.cover1).catch((e) => {
            return void M.reply(e.message)
        })
        while (true) {
            try {
                M.reply(
                    buffer || '✖ An error occurred. Please try again later.',
                    MessageType.image,
                    undefined,
                    undefined,
                    `${text}`,
                    undefined
                ).catch((e) => {
                    console.log(`This error occurs when an image is sent via M.reply()\n Child Catch Block : \n${e}`)
                    // console.log('Failed')
                    M.reply(`✖ An error occurred. Please try again later.`)
                })
                break
            } catch (e) {
                // console.log('Failed2')
                M.reply(`✖ An error occurred. Please try again later.`)
                console.log(`This error occurs when an image is sent via M.reply()\n Parent Catch Block : \n${e}`)
            }
        }
        return void null
    }
}
