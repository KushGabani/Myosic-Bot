module.exports = {
  name: "pause",
  aliases: [],
  category: "Music",
  utilisation: "{prefix}pause",

  execute(client, message) {
    if (!message.member.voice.channel)
      return message.channel.send({
        embed: {
          color: "ORANGE",
          author: { name: `Abey- mereko toh andar lo...` },
          footer: {
            text: "Made by Kush Gabani",
          },
          timestamp: new Date(),
        },
      });

    if (
      message.guild.me.voice.channel &&
      message.member.voice.channel.id != message.guild.me.voice.channel.id
    )
      return message.channel.send({
        embed: {
          color: "ORANGE",
          author: { name: `Tum BHI mere saath nahi 😔` },
          footer: {
            text: "Made by Kush Gabani",
          },
          timestamp: new Date(),
        },
      });

    if (!client.player.getQueue(message))
      return message.channel.send({
        embed: {
          color: "ORANGE",
          author: { name: `tum mai baj raha hu na tum` },
          footer: {
            text: "Made by Kush Gabani",
          },
          timestamp: new Date(),
        },
      });

    if (client.player.getQueue(message).paused)
      return message.channel.send({
        embed: {
          color: "ORANGE",
          author: { name: `band hi toh hai...` },
          footer: {
            text: "Made by Kush Gabani",
          },
          timestamp: new Date(),
        },
      });

    const success = client.player.pause(message);

    if (success)
      message.channel.send({
        embed: {
          color: "ORANGE",
          author: {
            name: `Song ${
              client.player.getQueue(message).playing.title
            } paused !`,
          },
          footer: {
            text: "Made by Kush Gabani",
          },
          timestamp: new Date(),
        },
      });
  },
};
