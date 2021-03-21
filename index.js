const fs = require("fs");
const discord = require("discord.js");
const { Player } = require("discord-player");
const client = new discord.Client({ disableMentions: "everyone" });
const Player = new Player(client);

client.player = new Player(client);
client.config = require("./config/bot");
client.emotes = client.config.emojis;
client.filters = client.config.filters;
client.commands = new discord.Collection();

fs.readdirSync("./commands").forEach((dir) => {
  const commands = fs
    .readdirSync(`./commands/${dir}`)
    .filter((files) => files.endsWith(".js"));

  for (const file of commands) {
    const command = require(`./commands/${dir}/${file}`);
    console.log(`loading command ${file}...`);
    client.commands.set(command.name.toLowerCase(), command);
  }
});

const events = fs
  .readdirSync("./events")
  .filter((file) => file.endsWith(".js"));
const player = fs
  .readdirSync("./player")
  .filter((file) => file.endsWith(".js"));

for (const file of events) {
  console.log(`Loading discord.js event ${file}`);
  const event = require(`./player/${file}`);
  client.player.on(file.split(".")[0], event.bind(null, client));
}

client.login(client.config.discord.token);
