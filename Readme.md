# Myosic-bot
### ⚡ Installation

Go to the folder `config` then the file `bot.js`.
For the bot to be able to start, please complete the file with your credentials as follows :

- For configuration

```js
discord: {
    token: 'TOKEN',
    prefix: 'PREFIX',
    activity: 'ACTIVITY',
}
```

- `token`, the token of the bot available on the [Discord Developers](https://discordapp.com/developers/applications) section.
- `prefix`, the prefix that will be set to use the bot.

In the console, type `npm install` to install all dependencies.

- To start the bot :
MAKE SURE THE NODE VERSION IS > 14.0.0
```
npm start
```

### 🎵 Music commands

```
p     | play <name/URL>, play music in a voice channel.
N/A   | pause, pause the current music.
r     | resume, puts the current music back on.
q     | queue, see the next songs.
clear | clear-queue, remove music in the queue.
sh    | shuffle, to mix the queue.
np    | nowplaying, see music in progress.
lp    | loop, to enable or disable the repeat function.
v     | volume <1 - 100>, change the volume.
sk    | skip, skip to next music.
N/A   | stop, stop all music.
```

### 💡 General

```
ping, see the bot latency.
help, see the list of available commands.
debug, see number of voice connections.
``
