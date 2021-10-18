(() => {
	const cfg = {
		footer: prompt("Message footer (leave blank for no footer)"),
		time_gap: 1000,
		loop_count: 3,
	};

	const findModule = (locator) =>
		Object.values(
			webpackJsonp.push([
				[],
				{
					"": (_, e, r) => { e.cache = r.c },
				},
				[[""]]
			]).cache
		).find(m => typeof m.exports?.default?.[locator] != "undefined")
			.exports
			.default;

	const user = findModule("getCurrentUser").getCurrentUser();

	const info = {
		gid: findModule("getGuildId").getGuildId(),
		cid: findModule("getChannelId").getChannelId(),
		uid: user.userId,
		nitro: user.premiumType == 2,
	};

	const mentions = findModule("getMembers")
		.getMembers(info.gid)
		.filter(m => m.userId != info.uid)
		.map(m => `<@${m.userId}>`);

	const regex = new RegExp(
		`.{1,${
			(info.nitro ? 4000 : 2000) -
			(cfg.footer?.length + (2 * !!cfg.footer))
		}}(?:\\s|$)`,
		"g",
	);

	const messages = mentions
		.join(" ")
		.match(regex)
		.map(m => cfg.footer ? `${m.trim()}\n\n${cfg.footer}` : m.trim());

	const { sendMessage } = findModule("sendMessage");

	let loop = 0;
	let message = 0;

	let interval = setInterval(() => {
		if (message > messages.length) {
			message = 0;
			return loop++;
		}

		if (loop == cfg.loop_count)
			return clearInterval(interval);

		sendMessage(
			info.cid,
			{ content: messages[message++] },
		);
	}, cfg.time_gap);
})();

