module.exports = {
  name: "play",
  aliases: ["p"],
  category: "Music",
  utilisation: "{prefix}play [name/URL]",

  execute(client, message, args) {
    if (!message.member.voice.channel)
      return message.channel.send({
        embed: {
          color: "ORANGE",
          author: { name: "No sampark" },
          footer: {
            text: "Made by Kush Gabani",
          },
          timestamp: new Date(),
          description: `Tum BHI mere saath nahi 😔`,
        },
      });

    if (
      message.guild.me.voice.channel &&
      message.member.voice.channel.id != message.guild.me.voice.channel.id
    )
      return message.channel.send({
        embed: {
          color: "ORANGE",
          author: { name: "No sampark" },
          footer: {
            text: "Made by Kush Gabani",
          },
          timestamp: new Date(),
          description: `Tum BHI mere saath nahi 😔`,
        },
      });

    if (!args[0])
      return message.channel.send({
        embed: {
          color: "ORANGE",
          author: { name: "Kuch bajaane ko de." },
          footer: {
            text: "Made by Kush Gabani",
          },
          timestamp: new Date(),
        },
      });

    client.player.play(message, args.join(" "), { firstResult: true });
  },
};
