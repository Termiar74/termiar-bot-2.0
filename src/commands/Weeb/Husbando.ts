import MessageHandler from '../../Handlers/MessageHandler'
import BaseCommand from '../../lib/BaseCommand'
import WAClient from '../../lib/WAClient'
import { ISimplifiedMessage } from '../../typings'
import axios from 'axios'
import request from '../../lib/request'
import { MessageType } from '@adiwajshing/baileys'

export default class Command extends BaseCommand {
    constructor(client: WAClient, handler: MessageHandler) {
        super(client, handler, {
            command: 'husbando',
            description: `Will send you random husbando image. aka\nBoys you can't have`,
            aliases: ['husbu'],
            category: 'weeb',
            usage: `${client.config.prefix}husbu`,
            baseXp: 50
        })
    }

    run = async (M: ISimplifiedMessage): Promise<void> => {
        // fetch result of https://zxbott.herokuapp.com/husbu from the API using axios
        const { data } = await axios.get('https://zxbott.herokuapp.com/husbu')
        const buffer = await request.buffer(data.url).catch((e) => {
            return void M.reply(e.message)
        })
        while (true) {
            try {
                M.reply(
                    buffer || '𝐂𝐎𝐔𝐋𝐃 𝐍𝐎𝐓 𝐅𝐄𝐓𝐂𝐇 𝐈𝐌𝐀𝐆𝐄.👉🏻𝐏𝐋𝐄𝐀𝐒𝐄 𝐓𝐑𝐘 𝐀𝐆𝐀𝐈𝐍 𝐋𝐀𝐓𝐄𝐑😂',
                    MessageType.image,
                    undefined,
                    undefined,
                    `👉🏻𝐇𝐄𝐑𝐄 𝐘𝐎𝐔 𝐆𝐎👈🏻 ✨\n`,
                    undefined
                ).catch((e) => {
                    console.log(`This error occurs when an image is sent via M.reply()\n Child Catch Block : \n${e}`)
                    // console.log('Failed')
                    M.reply(`Could not fetch image. Here's the URL: ${data.url}`)
                })
                break
            } catch (e) {
                // console.log('Failed2')
                M.reply(`Could not fetch image. Here's the URL : ${data.url}`)
                console.log(`This error occurs when an image is sent via M.reply()\n Parent Catch Block : \n${e}`)
            }
        }
        return void null
    }
}
