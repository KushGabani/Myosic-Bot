module.exports = (client, message, queue, playlist) => {
  message.channel.send({
    embed: {
      color: "ORANGE",
      author: {
        name: `${playlist.title} has been added to the queue! (**${playlist.tracks.length}** songs)`,
      },
      footer: {
        text: "Made by Kush Gabani",
      },
      timestamp: new Date(),
    },
  });
};
