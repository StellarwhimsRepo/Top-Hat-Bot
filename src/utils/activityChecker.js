const gamedig = require('./gamedig')
const topHatEngineersConfig = require('../requests/gamedig/topHatEngineers')

const activityChecker = bot => {

    gamedig(
        topHatEngineersConfig,
        state => {
            state.maxplayers > 0 ? (
                bot.user.setActivity(`${state.raw.numplayers}/${state.raw.maxplayers} players`, { type: 'Online' })
            ) : (
                bot.user.setActivity(`Loading...`, {type: 'Online'} )
            )
    }, error => {
        bot.user.setActivity('Server Offline', {type: 'WATCHING'})
    })

    setTimeout(() => activityChecker(bot), 60000)
}

module.exports = activityChecker

