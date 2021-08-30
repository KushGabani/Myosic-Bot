module.exports = (client, message, query) => {
  message.channel.send({
    embed: {
      color: "ORANGE",
      author: { name: `Nahi dega` },
      footer: {
        text: "Made by Kush Gabani",
      },
      timestamp: new Date(),
    },
  });
};
