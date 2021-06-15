module.exports = {
  name: "queue",
  aliases: ["q"],
  category: "Music",
  utilisation: "{prefix}queue",

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

    const queue = client.player.getQueue(message);

    if (!client.player.getQueue(message))
      return message.channel.send({
        embed: {
          color: "ORANGE",
          author: { name: "Ganpat kuch to bajaa" },
          footer: {
            text: "Made by Kush Gabani",
          },
          timestamp: new Date(),
          description: `Na tum baj rahe ho na hum 😕`,
        },
      });

    message.channel.send(
      `**Server queue - ${message.guild.name} ${client.emotes.queue} ${
        client.player.getQueue(message).loopMode ? "(looped)" : ""
      }**\nCurrent : ${queue.playing.title} | ${queue.playing.author}\n\n` +
        (queue.tracks
          .map((track, i) => {
            return `**#${i + 1}** - ${track.title} | ${
              track.author
            } (requested by : ${track.requestedBy.username})`;
          })
          .slice(0, 5)
          .join("\n") +
          `\n\n${
            queue.tracks.length > 5
              ? `And **${queue.tracks.length - 5}** other songs...`
              : `In the playlist **${queue.tracks.length}** song(s)...`
          }`)
    );
  },
};
