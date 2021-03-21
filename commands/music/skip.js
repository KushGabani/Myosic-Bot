module.exports = {
  name: "skip",
  aliases: ["sk"],
  category: "Music",
  utilisation: "{prefix}skip",

  execute(client, message) {
    if (!message.member.voice.channel)
      return message.channel.send(`Not connected to voice channel!`);

    if (
      message.guild.me.voice.channel &&
      message.member.voice.channel.id != message.guild.me.voice.channel.id
    )
      return message.channel.send("Tum BHI mere saath nahi 😔");

    if (!client.player.getQueue(message))
      return message.channel.send("No song currently playing!");

    const success = client.player.skip(message);

    if (success)
      message.channel.send(`${client.emotes.success} - **Skipped!**`);
  },
};
