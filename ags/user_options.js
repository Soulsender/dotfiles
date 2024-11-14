// For every option, see ~/.config/ags/modules/.configuration/user_options.js
// (vscode users ctrl+click this: file://./modules/.configuration/user_options.js)
// (vim users: `:vsp` to split window, move cursor to this path, press `gf`. `Ctrl-w` twice to switch between)
//   options listed in this file will override the default ones in the above file

const userConfigOptions = {
    'cheatsheet': {
        'keybinds': {
            'configPath': "/home/$USER/.config/hypr/custom/keybinds.conf" // Path to hyprland keybind config file. Leave empty for default (~/.config/hypr/hyprland/keybinds.conf)
        }
    }, 
    'sidebar': {
        'ai': {
            'extraGptModels': {
                'oxygen3': {
                    'name': 'Oxygen (GPT-3.5)',
                    'logo_name': 'ai-oxygen-symbolic',
                    'description': 'An API from Tornado Softwares\nPricing: Free: 100/day\nRequires you to join their Discord for a key',
                    'base_url': 'https://app.oxyapi.uk/v1/chat/completions',
                    'key_get_url': 'https://discord.com/invite/kM6MaCqGKA',
                    'key_file': 'oxygen_key.txt',
                    'model': 'gpt-3.5-turbo',
                },
            }
        },
        'image': {
            'columns': 2,
            'batchCount': 20,
            'allowNsfw': false,
            'saveInFolderByTags': false,
        },
        'pages': {
            'order': ["apis", "tools"],
            'apis': {
                'order': ["gpt", "waifu", "booru"],
            }
        }
    },
    'search': {
        'enableFeatures': {
            'actions': true,
            'commands': true,
            'mathResults': true,
            'directorySearch': true,
            'aiSearch': false,
            'webSearch': false,
        },
        'engineBaseUrl': "https://www.google.com/search?q=",
        'excludedSites': ["quora.com"],
    }
}

export default userConfigOptions;
