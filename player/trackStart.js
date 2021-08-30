module.exports = (client, message, track) => {
  message.channel.send({
    embed: {
      color: "ORANGE",
      author: { name: `Playing ${track.title}` },
      footer: {
        text: "Made by Kush Gabani",
      },
      timestamp: new Date(),
    },
  });
};
