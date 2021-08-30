module.exports = {
  name: "debug",
  aliases: [],
  category: "Infos",
  utilisation: "{prefix}debug",

  execute(client, message) {
    message.channel.send({
      embed: {
        color: "ORANGE",
        author: {
          name: `${client.user.username} connected in **${client.voice.connections.size}** channels !`,
        },
        footer: {
          text: "The kishmish bot",
        },
        timestamp: new Date(),
      },
    });
  },
};
