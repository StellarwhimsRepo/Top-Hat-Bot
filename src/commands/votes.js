const fetch = require("node-fetch")

const votes = (msg) => {
    //msg.react('🎩')

    fetch(`https://space-engineers.net/api/?object=servers&element=voters&key=${process.env.MEDIEVAL_ENGINEERS_NET_API_KEY}&month=current&format=json`)
    .then(res => res.json())
    .then(votesJson => {

        const voteLeaderboard = votesJson.voters.map((voter, i) => {
            return `**${i+1}**: ${voter.nickname} - ${voter.votes}`
        }).join('\n');

        const totalVotes = votesJson.voters ? votesJson.voters.reduce((prev, voter) => {
            return prev + parseInt(voter.votes)
        }, 0) : 0;

        msg.channel.send({
            embed: {
                description: totalVotes > 0 ? (
                    `${voteLeaderboard}`
                    + '\n\n'
                    + `Total: ${votesJson.voters.length} voters with ${totalVotes} votes`
                    + '\n'
                    + `[Click here to vote](https://space-engineers.net/server/${process.env.MEDIEVAL_ENGINEERS_NET_SERVER_ID}/vote/)`
                ) : (
                    'No votes'
                    + '\n'
                    + `[Click here to vote](https://space-engineers.net/server/${process.env.MEDIEVAL_ENGINEERS_NET_SERVER_ID}/vote/)`
                ),
                author: {
                    name: `Votes leaderboard`,
                },
                color: 3447003,
                timestamp: new Date()
            }
        })
    })
}

module.exports = votes