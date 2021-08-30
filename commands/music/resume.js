module.exports = {
  name: "resume",
  aliases: [],
  category: "Music",
  utilisation: "{prefix}resume",

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

    if (!client.player.getQueue(message).paused)
      return message.channel.send(`The music is already playing !`);

    const success = client.player.resume(message);

    if (success)
      message.channel.send(
        `Song ${client.player.getQueue(message).playing.title} resumed !`
      );
  },
};
