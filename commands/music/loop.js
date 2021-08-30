module.exports = {
  name: "loop",
  aliases: ["lp", "repeat"],
  category: "Music",
  utilisation: "{prefix}loop",

  execute(client, message, args) {
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

    if (args.join(" ").toLowerCase() === "queue") {
      if (client.player.getQueue(message).loopMode) {
        client.player.setLoopMode(message, false);
        return message.channel.send(`Loop **disabled**`);
      } else {
        client.player.setLoopMode(message, true);
        return message.channel.send(`Loop **enabled**`);
      }
    } else {
      if (client.player.getQueue(message).repeatMode) {
        client.player.setRepeatMode(message, false);
        return message.channel.send(`Loop **disabled**`);
      } else {
        client.player.setRepeatMode(message, true);
        return message.channel.send(`Loop **enabled**`);
      }
    }
  },
};
