module.exports = (client, message, queue) => {
  message.channel.send({
    embed: {
      color: "ORANGE",
      author: { name: `Kuch bajaane ko nahi hai` },
      footer: {
        text: "Made by Kush Gabani",
      },
      timestamp: new Date(),
    },
  });
};
