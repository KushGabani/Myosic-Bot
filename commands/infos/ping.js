module.exports = {
  name: "ping",
  aliases: [],
  category: "Infos",
  utilisation: "{prefix}ping",

  execute(client, message) {
    message.channel.send({
      embed: {
        color: "ORANGE",
        author: { name: `Ping : **${client.ws.ping}ms** !` },
        footer: {
          text: "The kishmish bot",
        },
        timestamp: new Date(),
      },
    });
  },
};
