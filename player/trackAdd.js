module.exports = (client, message, queue, track) => {
  message.channel.send({
    embed: {
      color: "ORANGE",
      author: { name: `${track.title} added!` },
      footer: {
        text: "Made by Kush Gabani",
      },
      timestamp: new Date(),
    },
  });
};
