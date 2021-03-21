module.exports = (client, message) => {
  if (message.author.bot || message.channel.type == "dm") return;

  const prefix = client.config.discord.prefix;
  if (message.content.indexOf(prefix) !== 0) return;

  const args = message.content.slice(prefix.length).trim().split(/ +/g);
  const command = arg.shift().toLowerCase();

  const cmd =
    client.commands.get(command) ||
    client.commands.find((cmd) => cmd.aliases && cm.aliases.includes(command));
  if (cmd) cmd.execute(client, message, args);
};
