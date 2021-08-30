module.exports = (client, message, queue) => {
  message.channel.send({
    embed: {
      color: "ORANGE",
      author: { name: `Tum bhi akele ho hum bhi akele` },
      footer: {
        text: "Made by Kush Gabani",
      },
      timestamp: new Date(),
    },
  });
};
