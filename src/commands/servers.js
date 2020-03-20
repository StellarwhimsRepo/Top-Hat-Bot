const {createServer, getServer, getServers} = require('../../api/controllers/server')

const addServer = (msg, args) => {

    const data = createServer("Stellarwhims", "Space Engineers", "stellarwhims.com", "27016", "stellarwhims.com", "27015", "gYHmSmDD8sY+CcZUXeiE9w==")
}

const listServers = msg => {

    getServers().then(servers => {
        const fields = []

        servers.map(server => {
            fields.push({
                name: server.name,
                value: `${server.address}:${server.port}`
            })
        })

        msg.channel.send({
            embed: {
                title: "📡 Server List 📡",
                color: 3447003,
                fields: fields,
                timestamp: new Date()
            }
        })
    })
}

module.exports = [
    addServer,
    listServers
]