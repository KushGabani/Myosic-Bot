module.exports = (client, message, track) => {
  message.channel.send(
    `${client.emotes.music} - Playing ${track.title} in ${message.member.voice.channel.name}...`
  );
};
