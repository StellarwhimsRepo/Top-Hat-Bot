const checkIfAdmin = (msg, command) => {
    if (msg.guild.roles.find(role => role.name === 'Admin') !== null) {
        const allowedRole = msg.guild.roles.find(role => role.name === "Admin");
    } else {
        msg.channel.send(':exclamation:Uh oh, something went wrong. Note: This command can not be used in a DM.')
        const allowedRole = null;
    }

    if (allowedRole && msg.member.roles.has(allowedRole.id)) {
        command()
    } else {
        msg.channel.send(':exclamation:You do not have authorization to use that command.')
    }
}

module.exports = checkIfAdmin