import wiki from "wikipedia";
import MessageHandler from "../../Handlers/MessageHandler";
import BaseCommand from "../../lib/BaseCommand";
import WAClient from "../../lib/WAClient";
import { IParsedArgs, ISimplifiedMessage } from "../../typings";

export default class Command extends BaseCommand {
	constructor(client: WAClient, handler: MessageHandler) {
		super(client, handler, {
			command: "wikipedia",
			aliases: ["wiki"],
			description: "Will fetch the result of the given query from wikipedia. ",
			category: "utils",
			usage: `${client.config.prefix}wiki [query]`,
			baseXp: 20,
		});
	}

	run = async (
		M: ISimplifiedMessage,
		{ joined }: IParsedArgs
	): Promise<void> => {
		if (!joined) return void M.reply("Provide a query, Baka!");
		const query = joined.trim();
		// eslint-disable-next-line @typescript-eslint/no-explicit-any
		const results = await wiki.summary(query);
		const text = `*🌐 𝐔𝐑𝐋: ${results.content_urls.mobile.page}*\n\n*🎀 𝐓𝐈𝐓𝐋𝐄: ${results.title}*\n *📜 𝐃𝐄𝐒𝐂𝐑𝐈𝐏𝐓𝐈𝐎𝐍: ${results.description}*\n\n*❄ 𝐒𝐔𝐌𝐌𝐀𝐑𝐘:* ${results.extract}`;
		await M.reply(text);
	};
}
