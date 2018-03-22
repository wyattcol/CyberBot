// Don't touch anything without asking Orangedude4221 first. \\

const Discord = require("discord.js");
const client = new Discord.Client();
const snekfetch = require("snekfetch");
const website = "http://xyz.potato-host.com/puddingWhitelistCheck.php?key="
const website2 = "http://xyz.potato-host.com/puddingAddWhitelist.php?Key="
const blacklistws = "http://xyz.potato-host.com/puddingAddBlacklist.php?Key="
var PastebinAPI = require('pastebin-js'),
pastebin = new PastebinAPI('3a3f03696725a46033929f7ca868f1f4');

// Post update

client.on("ready", () => {
    client.channels.get("426280493978484746").send({embed: {
        color: 3066993,
        author: {
          name: client.user.username,
          icon_url: client.user.avatarURL
        },
        title: "Update Recieved!",
        url: "https://discord.gg/GwmHMfE",
        description: "Cyber BOT has updated!",
        fields: [{
            name: "- Finished Remote Whitelist Function ",
            value: "Will be able to whitelist HWIDs from the discord with the bot."
          },
          {
            name: "- Finished Whitelist Status function. ",
            value: "Will be able to view if you're whitelisted/blacklisted/neutral."
          },
          {
              name: "- Finished buy function (;buy) ",
              value: "Allows users to quickly purchase Cyber."
          },
          {
            name: "- Finished Remote Blacklist Function ",
            value: "Blacklist HWIDS with the bot (;bl HWID)"
        }
        ],
        timestamp: new Date(),
        footer: {
          icon_url: client.user.avatarURL,
          text: "Remember: If your profile pic is from an anime, your opinion doesn't count."
        }
      }
    });
});

// Begin Commands function \\

client.on('unhandledRejection', err => console.error(`Uncaught Promise Rejection: \n${err.stack}`));


client.on("message", (message) => {
    let args = message.content.split(" ").slice(1);    
    if (message.content.startsWith(";buy")){
        client.users.get('356506864231514112').send({embed: {
            color: 3066993,
            author: {
              name: client.user.username,
              icon_url: client.user.avatarURL
            },
            title: "Request Recieved!",
            url: "https://discord.gg/GwmHMfE",
            description: "A purchase request has been recieved.",
            fields: [{
                name: "Username",
                value: message.author.username
              },
              {
                  name: "User ID",
                  value: message.author.id
              }
            ],
            timestamp: new Date(),
            footer: {
              icon_url: client.user.avatarURL,
              text: "Remember: If your profile pic is from an anime, your opinion doesn't count."
            }
          }
        });
        message.author.send({embed: {
            color: 3066993,
            author: {
              name: client.user.username,
              icon_url: client.user.avatarURL
            },
            title: "Request Sent!",
            url: "https://discord.gg/GwmHMfE",
            description: "Your request has been sent.",
            fields: [{
                name: "Your request has been sent to `Pudding Mug#6560` for a purchase!",
                value: "Please awaite a response."
              }
            ],
            timestamp: new Date(),
            footer: {
              icon_url: client.user.avatarURL,
              text: "Remember: If your profile pic is from an anime, your opinion doesn't count."
            }
          }
        });
    } else
    if (message.content.startsWith(";hds")){
        var HWIND = args.join(" ");
        snekfetch
  .get(website+HWIND)
  .then(function (data) {
    if(data.body.toString().includes('1')){
      message.delete();
        console.log("Whitelisted. " + HWIND);
        message.author.sendMessage({embed: {
            color: 3066993,
            author: {
              name: client.user.username,
              icon_url: client.user.avatarURL
            },
            title: "Whitelist Status",
            url: "https://discord.gg/GwmHMfE",
            description: "Whitelist status for your HWID..",
            fields: [{
                name: HWIND+" is **WHITELISTED**.",
                value: "You can use Cyber."
              }
            ],
            timestamp: new Date(),
            footer: {
              icon_url: client.user.avatarURL,
              text: "Remember: If your profile pic is from an anime, your opinion doesn't count."
            }
          }
        })
    }
    else if (data.body.toString().includes('0')){
      message.delete();
        console.log("Not whitelisted. Tried to use "+HWIND);
        message.author.sendMessage({embed: {
            color: 15158332,
            author: {
              name: client.user.username,
              icon_url: client.user.avatarURL
            },
            title: "Whitelist Status",
            url: "https://discord.gg/GwmHMfE",
            description: "Whitelist status for your HWID..",
            fields: [{
                name: HWIND+" is **NOT WHITELISTED**.",
                value: "You can **NOT** use Cyber."
              }
            ],
            timestamp: new Date(),
            footer: {
              icon_url: client.user.avatarURL,
              text: "Remember: If your profile pic is from an anime, your opinion doesn't count."
            }
          }
        })
    }
    else if (message.content == ";hds"){
        message.author.send({embed: {
            color: 15158332,
            author: {
              name: client.user.username,
              icon_url: client.user.avatarURL
            },
            title: "Invalid HWID",
            url: "https://discord.gg/GwmHMfE",
            description: "This HWID is invalid.",
            fields: [{
                name: HWIND+" is not a valid HWID.",
                value: "You can **NOT** use Cyber."
              }
            ],
            timestamp: new Date(),
            footer: {
              icon_url: client.user.avatarURL,
              text: "Remember: If your profile pic is from an anime, your opinion doesn't count."
            }
          }
        })
    }
    else if (!HWIND){
        message.author.send({embed: {
            color: 15158332,
            author: {
              name: client.user.username,
              icon_url: client.user.avatarURL
            },
            title: "Invalid HWID",
            url: "https://discord.gg/GwmHMfE",
            description: "This HWID is invalid.",
            fields: [{
                name: HWIND+" is not a valid HWID.",
                value: "You can **NOT** use Cyber."
              }
            ],
            timestamp: new Date(),
            footer: {
              icon_url: client.user.avatarURL,
              text: "Remember: If your profile pic is from an anime, your opinion doesn't count."
            }
          }
        })
    }
    }
)}


// WHITELISTING FEATURE

else
if (message.content.startsWith(";wl")){
  if (message.author.id == "223557159151992832"||message.author.id == "356506864231514112"){
    message.delete();
    var HWIND = args.join(" ");
    snekfetch
.get(website2+HWIND)
.then(function (data) {
if(data.body.toString().includes('1')){
    console.log("Whitelisted " + HWIND);
    message.author.sendMessage({embed: {
        color: 3066993,
        author: {
          name: client.user.username,
          icon_url: client.user.avatarURL
        },
        title: "Whitelisted!",
        url: "https://discord.gg/GwmHMfE",
        description: "Info below.",
        fields: [{
            name: HWIND+" was whitelisted successfully!",
            value: HWIND+" can use Cyber."
          }
        ],
        timestamp: new Date(),
        footer: {
          icon_url: client.user.avatarURL,
          text: "Remember: If your profile pic is from an anime, your opinion doesn't count."
        }
      }
    })
}
else if (data.body.toString().includes('0')){
    console.log("Error whitelisting "+HWIND);
    message.author.sendMessage({embed: {
        color: 15158332,
        author: {
          name: client.user.username,
          icon_url: client.user.avatarURL
        },
        title: "There was an error...",
        url: "https://discord.gg/GwmHMfE",
        description: "Error was returned.",
        fields: [{
            name: HWIND+" has not been whitelisted.",
            value: "You can **NOT** use Cyber. Please send a DM to my creator."
          }
        ],
        timestamp: new Date(),
        footer: {
          icon_url: client.user.avatarURL,
          text: "Remember: If your profile pic is from an anime, your opinion doesn't count."
        }
      }
    })
}
else if (message.content == ";wl"){
  message.author.sendMessage({embed: {
        color: 15158332,
        author: {
          name: client.user.username,
          icon_url: client.user.avatarURL
        },
        title: "Invalid HWID",
        url: "https://discord.gg/GwmHMfE",
        description: "This HWID is invalid.",
        fields: [{
            name: HWIND+" is not a valid HWID.",
            value: "You can **NOT** use Cyber."
          }
        ],
        timestamp: new Date(),
        footer: {
          icon_url: client.user.avatarURL,
          text: "Remember: If your profile pic is from an anime, your opinion doesn't count."
        }
      }
    })
  }
     
//      //////////////////////////////////////////////////
//     if(message.author.id == "Our IDs"||message.author.id == "Our IDs"){
//        // Send an embed telling them that Cyber has detected they have access to administrator commands. Then send them a list of admin commands;
//        // ;bl [HWID] | ;wl [HWID]
//     }
// }
else if (!HWIND){
  message.author.sendMessage({embed: {
        color: 15158332,
        author: {
          name: client.user.username,
          icon_url: client.user.avatarURL
        },
        title: "Invalid HWID",
        url: "https://discord.gg/GwmHMfE",
        description: "This HWID is invalid.",
        fields: [{
            name: HWIND+" is not a valid HWID.",
            value: "You can **NOT** use Cyber."
          }
        ],
        timestamp: new Date(),
        footer: {
          icon_url: client.user.avatarURL,
          text: "Remember: If your profile pic is from an anime, your opinion doesn't count."
        }
      }
    })
}
}
)}}
else if(message.content.startsWith(";help")){
  if(message.author.id == "223557159151992832" || message.author.id == "356506864231514112" || message.author.id == "308212533309865996"){
    message.author.send({embed: {
      color: 3447003,
      author: {
        name: client.user.username,
        icon_url: client.user.avatarURL
      },
      title: "Admin CMDS",
      description: "Cyber detected that you are an Admin.",
      fields: [{
          name: ";bl **HWID**",
          value: "Blacklists HWID"
        },
        {
          name: ";wl **HWID**",
          value: "Whitelists HWID"
        }
      ],
      timestamp: new Date(),
      footer: {
        icon_url: client.user.avatarURL,
        text: "Remember: If your profile pic is from an anime, your opinion doesn't count."
      }
    }
  })
}
message.author.send({embed: {
    color: 3447003,
    author: {
      name: client.user.username,
      icon_url: client.user.avatarURL
    },
    title: "Commands",
    description: "Shows commands that can be used",
    fields: [{
        name: ";hds **HWID**",
        value: "Checks status of HWID [Whitelisted/Neutral]"
      },
      {
        name: ";buy",
        value: "Sends a buy request to the creator. NOTE: $5."
      }
    ],
    timestamp: new Date(),
    footer: {
      icon_url: client.user.avatarURL,
      text: "Remember: If your profile pic is from an anime, your opinion doesn't count."
    }
  }
})
}
      // BLACKLISTED FEATURE      

else
if (message.content.startsWith(";bl")){
  if (message.author.id == "223557159151992832" || message.author.id == "308212533309865996"){
    message.delete();
    var HWIND = args.join(" ");
    snekfetch
.get(blacklistws+HWIND)
.then(function (data) {
if(data.body.toString().includes('1')){
    console.log("Blacklisted " + HWIND);
    message.author.sendMessage({embed: {
        color: 3066993,
        author: {
          name: client.user.username,
          icon_url: client.user.avatarURL
        },
        title: "Blacklisted!",
        url: "https://discord.gg/GwmHMfE",
        description: "Info below.",
        fields: [{
            name: HWIND+" was blacklisted successfully!",
            value: HWIND+" can no longer use Cyber."
          }
        ],
        timestamp: new Date(),
        footer: {
          icon_url: client.user.avatarURL,
          text: "Remember: If your profile pic is from an anime, your opinion doesn't count."
        }
      }
    })
}
else if (data.body.toString().includes('0')){
    console.log("Error Blacklisting "+HWIND);
    message.author.sendMessage({embed: {
        color: 15158332,
        author: {
          name: client.user.username,
          icon_url: client.user.avatarURL
        },
        title: "There was an error...",
        url: "https://discord.gg/GwmHMfE",
        description: "Error was returned.",
        fields: [{
            name: HWIND+" has not been blacklisted.",
            value: "This HWID has **NOT** been blacklisted because it may already be blacklisted. Use `;hds "+HWIND+"` to check status."
          }
        ],
        timestamp: new Date(),
        footer: {
          icon_url: client.user.avatarURL,
          text: "Remember: If your profile pic is from an anime, your opinion doesn't count."
        }
      }
    })
}
else if (message.content == ";bl"){
  message.author.sendMessage({embed: {
        color: 15158332,
        author: {
          name: client.user.username,
          icon_url: client.user.avatarURL
        },
        title: "Invalid HWID",
        url: "https://discord.gg/GwmHMfE",
        description: "This HWID is invalid.",
        fields: [{
            name: HWIND+" is not a valid HWID.",
            value: "You can **NOT** use Cyber."
          }
        ],
        timestamp: new Date(),
        footer: {
          icon_url: client.user.avatarURL,
          text: "Remember: If your profile pic is from an anime, your opinion doesn't count."
        }
      }
    })
}
else if (!HWIND){
  message.author.sendMessage({embed: {
        color: 15158332,
        author: {
          name: client.user.username,
          icon_url: client.user.avatarURL
        },
        title: "Invalid HWID",
        url: "https://discord.gg/GwmHMfE",
        description: "This HWID is invalid.",
        fields: [{
            name: HWIND+" is not a valid HWID.",
            value: "You can **NOT** use Cyber."
          }
        ],
        timestamp: new Date(),
        footer: {
          icon_url: client.user.avatarURL,
          text: "Remember: If your profile pic is from an anime, your opinion doesn't count."
        }
      }
    })
}
}
)}}  


})



client.login(process.env.TOKEN);
