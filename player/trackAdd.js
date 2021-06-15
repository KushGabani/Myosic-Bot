module.exports = (client, message, queue, track) => {
  message.channel.send({
    embed: {
      color: "ORANGE",
      author: { name: `${track.title} ADDED!` },
      footer: {
        text: "Made by Kush Gabani",
      },
      timestamp: new Date(),
    },
  });
};
