module.exports = {
  name: "shuffle",
  aliases: ["sh"],
  category: "Music",
  utilisation: "{prefix}shuffle",

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

    const success = client.player.shuffle(message);
    if (success)
      message.channel.send({
        embed: {
          color: "ORANGE",
          author: { name: `Queue **Shuffled**! (Kyuuuuu hilaa dila na?)` },
          footer: {
            text: "Made by Kush Gabani",
          },
          timestamp: new Date(),
        },
      });
  },
};
