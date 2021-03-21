module.exports = {
  name: "clear-queue",
  aliases: ["cq"],
  category: "Music",
  utilisation: "{prefix}clear-queue",

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

    if (client.player.getQueue(message).tracks.length <= 1)
      return message.channel.send("Only 1 song is playing");

    client.player.clearQueue(message);

    message.channel.send(`${client.emotes.success} - Queue **cleared**!`);
  },
};
