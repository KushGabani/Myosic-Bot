module.exports = {
  name: "resume",
  aliases: [],
  category: "Music",
  utilisation: "{prefix}resume",

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

    if (!client.player.getQueue(message).paused)
      return message.channel.send("Baj toh raha hai!");

    const success = client.player.resume(message);

    if (success)
      message.channel.send(`${client.emote.success} - Song Resumed!`);
  },
};
