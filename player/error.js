module.exports = (client, error, message, ...args) => {
  switch (error) {
    case "NotPlaying":
      message.channel.send(
        `${client.emotes.error} - There is no music being played on this server !`
      );
      break;
    case "NotConnected":
      message.channel.send({
        embed: {
          color: "ORANGE",
          author: { name: `ae munna pehle andar toh aa` },
          footer: {
            text: "Made by Kush Gabani",
          },
          timestamp: new Date(),
        },
      });
      break;
    case "UnableToJoin":
      message.channel.send({
        embed: {
          color: "ORANGE",
          author: { name: `Aaj nahi darling kal aana` },
          footer: {
            text: "Made by Kush Gabani",
          },
          timestamp: new Date(),
        },
      });
      break;
    case "VideoUnavailable":
      message.channel.send(
        `${client.emotes.error} - ${args[0].title} is not available in your country! Skipping...`
      );
      break;
    case "MusicStarting":
      message.channel.send({
        embed: {
          color: "ORANGE",
          author: { name: `Ruko zara, sabr karo.` },
          footer: {
            text: "Made by Kush Gabani",
          },
          timestamp: new Date(),
        },
      });
      break;
    default:
      message.channel.send(
        `${client.emotes.error} - Something went wrong ... Error : ${error}`
      );
  }
};
