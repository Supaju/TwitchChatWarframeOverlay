// Copy this file to "config.js" (same folder as warframechat.html) and edit the values you want to change.
// Delete any line you don't care about and it falls back to the default in warframechat.html.
// When you update, replace only warframechat.html (and config.example.js) and keep your config.js.
// Advanced options (colors.damage, colorAliases, testIntervalMs) can be added here too, see the README.
const USER_CONFIG = {
  channel: "yourchannel",          // Twitch channel name (lowercase)
  fontSize: 22,                    // px
  maxLines: 12,                    // lines kept on screen
  fadeSeconds: 30,                 // seconds before a line slides out (0 = never fade)
  ignoredUsers: ["nightbot", "streamelements", "streamlabs", "spotchbot"],  // lowercase usernames to hide
  timestamps: true,                // [HH:MM] before each chat line, like in-game
  gmTag: "<Ruler>",                // tag before the broadcaster's name ("" = none)
  modTag: "<Mod>",                 // tag before moderators' names ("" = none)
  chatPrefix: "[Clan] ",           // prefix on regular chat lines
  modPrefix: "[Squad] ",           // prefix on moderator lines
  joinMessage: "{name} has logged in.",  // gold line the first time someone chats ("" = none)
  subMessage: "{name} has joined the clan.",  // gold line for a new subscriber or gift recipient ("" = none)
  colorCommand: "!color",        // chat command for name colors ("" disables it)
  colorsCommand: "!colors",      // lists all name colors on the overlay ("" disables it)
  colorsCooldownSeconds: 30,     // seconds before !colors can be shown again
  colors: {
    chat: "#EFEFEF",               // chat text
    clan: "#2AAA8C",               // [Clan] prefix
    name: "#2AAA8C",               // everyone's name color; "" = a damage-type color per chatter
    modText: "#7FE3F0",            // moderator text
    system: "#D9B65D",             // join/sub lines
    time: "#8796A5",               // timestamps
    gm: "#F5D06A",                 // the broadcaster's tag (gmTag)
    mod: "#7FE3F0",                // the moderators' tag (modTag)
  },
};
