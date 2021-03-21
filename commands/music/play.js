module.exports = {
  name: "play",
  aliases: ["p"],
  category: "Music",
  utilisation: "{prefix}play [name/URL]",

  execute(client, message, args) {
    if (!message.member.voice.channel)
      return message.channel.send(`Abey mere ko to andar lo!!`);

    if (
      message.guild.me.voice.channel &&
      message.member.voice.channel.id != message.guild.me.voice.channel.id
    )
      return message.channel.send("Tum BHI mere saath nahi 😔");

    if (!args[0]) return message.channel.send(`Kuch bajaane ko de.`);
    client.player.play(message, args.join(" "), { firstResult: true });
  },
};
