module.exports = {
  name: "help",
  aliases: ["h"],
  category: "Core",
  utilisation: "{prefix}help <command name>",

  execute(client, message, args) {
    if (!args[0]) {
      const infos = message.client.commands
        .filter((cmd) => cmd.category == "Infos")
        .map((x) => "`" + x.name + "`")
        .join(", ");
      const music = message.client.commands
        .filter((cmd) => cmd.category == "Music")
        .map((x) => "`" + x.name + "`")
        .join(", ");

      message.channel.send({
        embed: {
          color: "ORANGE",
          author: { name: "Help Panel" },
          footer: {
            text: "Made by Kush Gabani",
          },
          fields: [
            { name: "Bot", value: infos },
            { name: "Music", value: music },
            {
              name: "Filters",
              value: client.filters.map((x) => "`" + x + "`").join(", "),
            },
          ],
          timestamp: new Date(),
          description: `To use filters, ${client.config.discord.prefix}filter (the filter)`,
        },
      });
    } else {
      const command =
        message.client.commands.get(args.join(" ").toLowerCase()) ||
        message.client.commands.find(
          (x) => x.aliases && x.aliases.includes(args.join(" ").toLowerCase())
        );

      if (!command)
        return message.channel.send(
          `${client.emotes.error} - Aisa kuch hai hi nahi bhaijaan.`
        );

      message.channel.send({
        embed: {
          color: "ORANGE",
          authoer: { name: "Help Panel" },
          footer: {
            text: "Made by Kush Gabani",
          },
          fields: [
            { name: "Name", value: command.name, inline: true },
            { name: "Category", value: command.category, inline: true },
            {
              name: "Aliases",
              value:
                command.aliases.length < 1
                  ? "None"
                  : command.aliases.join(", "),
              inline: true,
            },
            {
              name: "Utilisation",
              value: command.utilisation.replace(
                "{prefix}",
                client.config.discord.prefix
              ),
              inline: true,
            },
          ],
          timestamp: new Date(),
          description:
            "More info on the command.\nMandatory args `[]`, optional arguments`<>.",
        },
      });
    }
  },
};
