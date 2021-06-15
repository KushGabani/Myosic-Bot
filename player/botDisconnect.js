module.exports = (client, message, queue) => {
  message.channel.send({
    embed: {
      color: "ORANGE",
      author: { name: `Thik hai bhai chalta hu` },
      footer: {
        text: "Made by Kush Gabani",
      },
      timestamp: new Date(),
    },
  });
};
