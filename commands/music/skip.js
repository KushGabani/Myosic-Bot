module.exports = {
  name: "skip",
  aliases: ["sk"],
  category: "Music",
  utilisation: "{prefix}skip",

  execute(client, message) {
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

    if (!client.player.getQueue(message))
      return message.channel.send({
        embed: {
          color: "ORANGE",
          author: { name: "Gaane ka pata nhi par tera kataa" },
          footer: {
            text: "Made by Kush Gabani",
          },
          timestamp: new Date(),
        },
      });

    const success = client.player.skip(message);

    if (success)
      message.channel.send({
        embed: {
          color: "ORANGE",
          author: { name: "AE AE AE KATAAAAAAAA" },
          footer: {
            text: "Made by Kush Gabani",
          },
          timestamp: new Date(),
        },
      });
  },
};
