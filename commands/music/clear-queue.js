module.exports = {
  name: "clear-queue",
  aliases: ["cq", "clear"],
  category: "Music",
  utilisation: "{prefix}clear-queue",

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
      message.member.voice.channel.id !== message.guild.me.voice.channel.id
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

    if (client.player.getQueue(message).tracks.length <= 1)
      return message.channel.send({
        embed: {
          color: "ORANGE",
          author: { name: `Only 1 song in the queue` },
          footer: {
            text: "Made by Kush Gabani",
          },
          timestamp: new Date(),
        },
      });

    client.player.clearQueue(message);

    message.channel.send({
      embed: {
        color: "ORANGE",
        author: { name: `tum aur mai dono khaali 😋` },
        footer: {
          text: "Made by Kush Gabani",
        },
        timestamp: new Date(),
      },
    });
  },
};
