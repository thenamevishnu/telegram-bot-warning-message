import TelegramBot from "node-telegram-bot-api";

const api = new TelegramBot(process.env.BOT_TOKEN, {
    polling: true
})

const userMention = (from) => {
    return from.username ? `@${from.username}` : `<a href="tg://user?id=${from.id}">${from.first_name}</a>`
}

api.on("message", async msg => {
    const text = `<b>⚠️ Important Update\nThis bot has been deprecated and is no longer active. We’ve shifted everything to a newer and more advanced system so you can enjoy smoother performance and better features.\n\n🚀 Move to the New Bot\nTo continue accessing tasks, referrals, rewards, and all future updates, please switch to our upgraded bot.\n\n👉 Join @TrueClickBot to continue\nEverything happens there now — faster, cleaner, and fully updated.\n\n✨ See you on the new bot!</b>`
    return await api.sendMessage(msg.chat.id, text, {
        parse_mode: "HTML",
        disable_web_page_preview: true,
        reply_to_message_id: msg.message_id,
        protect_content: true,
        reply_markup: {
            inline_keyboard: [
                [
                    {
                        text: "✅ Continue on TrueClickBot",
                        url: "https://t.me/TrueClickBot"
                    }
                ]
            ]
        }
    })
})