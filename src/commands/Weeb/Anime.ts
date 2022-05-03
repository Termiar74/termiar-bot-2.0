import MessageHandler from "../../Handlers/MessageHandler";
import BaseCommand from "../../lib/BaseCommand";
import WAClient from "../../lib/WAClient";
import { IParsedArgs, ISimplifiedMessage } from "../../typings";
import { Anime } from "mailist";
import request from "../../lib/request";
import { MessageType } from "@adiwajshing/baileys";
import malScraper from "mal-scraper";

export default class Command extends BaseCommand {
	constructor(client: WAClient, handler: MessageHandler) {
		super(client, handler, {
			command: "anime",
			description: `Gives you the data of the given anime from MyAnimeList.`,
			aliases: ["ani", "a"],
			category: "weeb",
			usage: `${client.config.prefix}anime [title]`,
			baseXp: 50,
		});
	}

	run = async (
		M: ISimplifiedMessage,
		{ joined }: IParsedArgs
	): Promise<void> => {
		if (!joined)
			return void (await M.reply(`𝐆𝐈𝐕𝐄 𝐌𝐄 𝐀𝐍 𝐀𝐍𝐈𝐌𝐄 𝐓𝐈𝐓𝐋𝐄 𝐓𝐎 𝐒𝐄𝐀𝐑𝐂𝐇.....😂`));
		const chitoge = joined.trim();
		const anime = await malScraper
			.getInfoFromName(chitoge)
			// eslint-disable-next-line @typescript-eslint/no-explicit-any
			.catch((err: any) => {
				return void M.reply(`Couldn't find any matching anime.`);
			});
		const client = new Anime();
		// eslint-disable-next-line @typescript-eslint/no-explicit-any
		const ani = await client.anime(chitoge).catch((err: any) => {
			return void M.reply(`𝐂𝐎𝐔𝐋𝐃 𝐍𝐎𝐓 𝐅𝐈𝐍𝐃 𝐀𝐍𝐘 𝐌𝐀𝐓𝐂𝐇𝐈𝐍𝐆 𝐀𝐍𝐈𝐌𝐄.`);
		});
		let text = "";
		text += `🎀 *𝐓𝐈𝐓𝐋𝐄: ${ani.data.anime.results[0].title.romaji}*\n`;
		text += `🎋 *𝐅𝐎𝐑𝐌𝐀𝐓: ${ani.data.anime.results[0].format}*\n`;
		text += `📈 *𝐒𝐓𝐀𝐓𝐔𝐒: ${ani.data.anime.results[0].status}*\n`;
		text += `💮 *𝐆𝐄𝐍𝐑𝐄𝐒: ${ani.data.anime.results[0].genres.join(", ")}*\n`;
		text += `✨ *𝐁𝐀𝐒𝐄𝐃 𝐎𝐍: ${anime.source}*\n`;
		text += `📍 *𝐒𝐓𝐔𝐃𝐈𝐎𝐒: ${anime.studios.join(", ")}*\n`;
		text += `🍥 *𝐏𝐑𝐎𝐃𝐔𝐂𝐄𝐑𝐒: ${anime.producers.join(", ")}*\n`;
		text += `🔅 *𝐏𝐑𝐄𝐌𝐄𝐈𝐑𝐄𝐃 𝐎𝐍: ${ani.data.anime.results[0].startDate.day}-${ani.data.anime.results[0].startDate.month}-${ani.data.anime.results[0].startDate.year}*\n`;
		text += `🎐 *𝐒𝐄𝐀𝐒𝐎𝐍: ${ani.data.anime.results[0].season}*\n`;
		text += `🌟 *𝐒𝐂𝐎𝐑𝐄: ${anime.score}*\n`;
		text += `💎 *𝐑𝐀𝐓𝐈𝐍𝐆: ${anime.rating}*\n`;
		text += `🏅 *𝐑𝐀𝐍𝐊: ${anime.ranked}*\n`;
		text += `💫 *𝐏𝐎𝐏𝐔𝐋𝐀𝐑𝐈𝐓𝐘: ${anime.popularity}*\n`;
		text += `🎗 *𝐃𝐔𝐑𝐀𝐓𝐈𝐎𝐍: ${ani.data.anime.results[0].duration}/episode*\n`;
		text += `🚫 *𝐄𝐄𝐂𝐇𝐈: ${ani.data.anime.results[0].isAdult}*\n\n`;
		text += `♦️ *𝐓𝐑𝐀𝐈𝐋𝐄𝐑: ${anime.trailer}*\n\n`;
		text += `🌐 *𝐔𝐑𝐋: ${anime.url}*\n\n`;
		text += `❄ *𝐃𝐄𝐒𝐂𝐑𝐈𝐏𝐓𝐈𝐎𝐍:* ${anime.synopsis}`;
		const buffer = await request.buffer(ani.data.anime.results[0].coverImage.large).catch((e) => {
			return void M.reply(e.message);
		});
		while (true) {
			try {
				M.reply(
					buffer || "✖ An error occurred. Please try again later.",
					MessageType.image,
					undefined,
					undefined,
					`${text}`,
					undefined
				).catch((e) => {
					console.log(
						`This error occurs when an image is sent via M.reply()\n Child Catch Block : \n${e}`
					);
					// console.log('Failed')
					M.reply(`✖ An error occurred. Please try again later.`);
				});
				break;
			} catch (e) {
				// console.log('Failed2')
				M.reply(`✖ An error occurred. Please try again later.`);
				console.log(
					`This error occurs when an image is sent via M.reply()\n Parent Catch Block : \n${e}`
				);
			}
		}
		return void null;
	};
}
