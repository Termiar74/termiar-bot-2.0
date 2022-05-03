import MessageHandler from '../../Handlers/MessageHandler'
import BaseCommand from '../../lib/BaseCommand'
import WAClient from '../../lib/WAClient'
import { IParsedArgs, ISimplifiedMessage } from '../../typings'
import AnimeQuotes from 'animequotes'

export default class Command extends BaseCommand {
    constructor(client: WAClient, handler: MessageHandler) {
        super(client, handler, {
            command: 'animequote',
            description: 'Will give you random anime quote for the given character.',
            aliases: ['aq'],
            category: 'weeb',
            usage: `${client.config.prefix}𝐀𝐍𝐈𝐌𝐄𝐐𝐔𝐎𝐓𝐄 [character_name]`,
            baseXp: 10
        })
    }

    run = async (M: ISimplifiedMessage, { joined }: IParsedArgs): Promise<void> => {
        const random = await AnimeQuotes.randomQuote()
        let randomText = ''
        randomText += `*✏ 𝐐𝐔𝐎𝐓𝐄: ${random.quote}*\n`
        randomText += `*🎗 𝐒𝐀𝐈𝐃 𝐁𝐘: ${random.name}*\n\n`
        randomText += `*📛 𝐒𝐎𝐔𝐑𝐂𝐄: ${random.anime}*`
        if (!joined) return void (await M.reply(`${randomText}`))
        const chara = joined.trim()
        const byChara = await AnimeQuotes.getRandomQuoteByCharacter(chara)
        let charaText = ''
        charaText += `*✏ 𝐐𝐔𝐎𝐓𝐄: ${byChara.quote}*\n`
        charaText += `*🎗 𝐒𝐀𝐈𝐃 𝐁𝐘: ${byChara.name}*\n\n`
        charaText += `*📛 𝐒𝐎𝐔𝐑𝐂𝐄: ${byChara.anime}*`
        await M.reply(charaText)
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            .catch((reason: any) => M.reply(`${reason}`))
    }
}
