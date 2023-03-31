module.exports = {
    name: 'ready',
    execute(bot) {
        bot.application.commands.set(bot.commands.map(({ execute, ...data }) => data))
    }
}