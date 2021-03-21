module.exports = {
  name: "volume",
  aliases: [],
  category: "Music",
  utilisation: "{prefix}volume [1-100]",

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

    if (!args[0] || isNaN(args[0]) || args[0] === "Infinity")
      return message.channel.send("Not a valid volume level");

    if (
      Math.round(parseInt(args[0])) < 1 ||
      Math.round(parseInt(args[0])) > 100
    )
      return message.channel.send("Not a valid volume range!");

    const success = client.player.setVolume(message, parseInt(args[0]));

    if (success)
      message.channel.send(
        `${client.emotes.success} - Volume set to **${parseInt(args[0])}%**`
      );
  },
};
