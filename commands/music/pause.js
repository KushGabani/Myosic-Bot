module.exports = {
  name: "pause",
  aliases: [],
  category: "Music",
  utilisation: "{prefix}pause",

  execute(client, message) {
    if (!message.member.voice.channel)
      return message.channel.send(`Abey mere ko to andar lo!!`);

    if (
      message.guild.me.voice.channel &&
      message.member.voice.channel.id != message.guild.me.voice.channel.id
    )
      return message.channel.send("Tum BHI mere saath nahi 😔");

    if (!client.player.getQueue(message))
      return message.channel.send("No song currently playing!");
    if (client.player.getQueue(message).paused)
      return message.channel.send("Band hi toh hai");

    const success = client.player.pause(message);

    if (success)
      message.channel.send(
        `${client.emotes.success} - Song ${
          client.player.getQueue(message).playing.title
        } paused !`
      );
  },
};
