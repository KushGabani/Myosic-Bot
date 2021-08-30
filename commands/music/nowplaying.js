module.exports = {
  name: "nowplaying",
  aliases: ["np"],
  category: "Music",
  utilisation: "{prefix}nowplaying",

  execute(client, message) {
    if (!message.member.voice.channel)
      return message.channel.send({
        embed: {
          color: "ORANGE",
          author: { name: `Abey- mereko toh andar lo...` },
          footer: {
            text: "Made by Kush Gabani",
          },
          timestamp: new Date(),
        },
      });

    if (
      message.guild.me.voice.channel &&
      message.member.voice.channel.id != message.guild.me.voice.channel.id
    )
      return message.channel.send({
        embed: {
          color: "ORANGE",
          author: { name: `Tum BHI mere saath nahi 😔` },
          footer: {
            text: "Made by Kush Gabani",
          },
          timestamp: new Date(),
        },
      });

    if (!client.player.getQueue(message))
      return message.channel.send("No song currently playing!");

    const track = client.player.nowPlaying(message);
    message.channel.send({
      embed: {
        color: "RED",
        author: { name: track.title },
        footer: {
          text: "Made By Kush Gabani",
        },
        fields: [
          { name: "Channel", value: track.author, inline: true },
          {
            name: "Requested by",
            value: track.requestedBy.username,
            inline: true,
          },
          {
            name: "From playlist",
            value: track.fromPlaylist ? "Yes" : "No",
            inline: true,
          },

          { name: "Views", value: track.views, inline: true },
          { name: "Duration", value: track.duration, inline: true },

          {
            name: "Volume",
            value: client.player.getQueue(message).volume,
            inline: true,
          },
          {
            name: "Repeat mode",
            value: client.player.getQueue(message).repeatMode ? "Yes" : "No",
            inline: true,
          },
          {
            name: "Currently paused",
            value: client.player.getQueue(message).paused ? "Yes" : "No",
            inline: true,
          },

          {
            name: "Progress bar",
            value: client.player.createProgressBar(message, {
              timecodes: true,
            }),
            inline: true,
          },
        ],
        thumbnail: { url: track.thumbnail },
        timestamp: new Date(),
      },
    });
  },
};
