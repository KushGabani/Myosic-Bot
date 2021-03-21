module.exports = {
  name: "loop",
  aliases: ["lp", "repeat"],
  category: "Music",
  utilisation: "{prefix}loop",

  execute(client, message, args) {
    if (!message.member.voice.channel)
      return message.channel.send(`Abey mere ko to andar lo!!`);

    if (
      message.guild.me.voice.channel &&
      message.member.voice.channel.id != message.guild.me.voice.channel.id
    )
      return message.channel.send("Tum BHI mere saath nahi 😔");

    if (!client.player.getQueue(message))
      return message.channel.send("No song currently playing!");

    if (args.join(" ").toLowerCase() === "queue") {
      if (client.player.getQueue(message).loopMode) {
        client.player.setLoopMode(message, false);
        return message.channel.send(
          `${client.emotes.success} - Loop **disabled**`
        );
      } else {
        client.player.setLoopMode(message, true);
        return message.channel.send(
          `${client.emotes.success} - Loop **enabled**`
        );
      }
    } else {
      if (client.player.getQueue(message).repeatMode) {
        client.player.setRepeatMode(message, false);
        return message.channel.send(
          `${client.emotes.success} - Loop **disabled**`
        );
      } else {
        client.player.setRepeatMode(message, true);
        return message.channel.send(
          `${client.emotes.success} - Loop **enabled**`
        );
      }
    }
  },
};
