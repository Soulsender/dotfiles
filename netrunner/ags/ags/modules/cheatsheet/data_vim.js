export const vimKeybindData = [
    {
        "name": "Navigation",
        "keybinds": [
            { "key": "h", "mods": [], "comment": "Move cursor left" },
            { "key": "j", "mods": [], "comment": "Move cursor down" },
            { "key": "k", "mods": [], "comment": "Move cursor up" },
            { "key": "l", "mods": [], "comment": "Move cursor right" },
            { "key": "w", "mods": [], "comment": "Move to the beginning of the next word" },
            { "key": "b", "mods": [], "comment": "Move to the beginning of the previous word" },
            { "key": "0", "mods": [], "comment": "Move to the beginning of the line" },
            { "key": "$", "mods": [], "comment": "Move to the end of the line" },
            { "key": "gg", "mods": [], "comment": "Go to the beginning of the file" },
            { "key": "G", "mods": [], "comment": "Go to the end of the file" },
            { "key": "Ctrl + f", "mods": [], "comment": "Scroll down by one page" },
            { "key": "Ctrl + b", "mods": [], "comment": "Scroll up by one page" },
            { "key": "m[a-z]", "mods": [], "comment": "Set a mark (a-z)" },
            { "key": "'a", "mods": [], "comment": "Jump to mark 'a'" },
            { "key": "`a", "mods": [], "comment": "Jump to the exact position of mark 'a'" },
            { "key": "[", "mods": [], "comment": "Jump to the previous jump location" },
            { "key": "]", "mods": [], "comment": "Jump to the next jump location" }
        ],
        "children": []
    },
    {
        "name": "Editing",
        "keybinds": [
            { "key": "i", "mods": [], "comment": "Enter insert mode at cursor" },
            { "key": "I", "mods": [], "comment": "Enter insert mode at the beginning of the line" },
            { "key": "a", "mods": [], "comment": "Enter insert mode after the cursor" },
            { "key": "A", "mods": [], "comment": "Enter insert mode at the end of the line" },
            { "key": "o", "mods": [], "comment": "Open a new line below the current line and enter insert mode" },
            { "key": "O", "mods": [], "comment": "Open a new line above the current line and enter insert mode" },
            { "key": "x", "mods": [], "comment": "Delete character under the cursor" },
            { "key": "dd", "mods": [], "comment": "Delete current line" },
            { "key": "yy", "mods": [], "comment": "Yank (copy) the current line" },
            { "key": "p", "mods": [], "comment": "Paste the clipboard contents after the cursor" },
            { "key": "P", "mods": [], "comment": "Paste the clipboard contents before the cursor" },
            { "key": "u", "mods": [], "comment": "Undo the last action" },
            { "key": "Ctrl + r", "mods": [], "comment": "Redo the undone action" }
        ],
        "children": []
    },
    {
        "name": "Search",
        "keybinds": [
            { "key": "/", "mods": [], "comment": "Start forward search" },
            { "key": "?", "mods": [], "comment": "Start backward search" },
            { "key": "n", "mods": [], "comment": "Repeat the last search forward" },
            { "key": "N", "mods": [], "comment": "Repeat the last search backward" },
            { "key": "*", "mods": [], "comment": "Search for the word under the cursor (forward)" },
            { "key": "#", "mods": [], "comment": "Search for the word under the cursor (backward)" }
        ],
        "children": []
    },
    {
        "name": "File Management",
        "keybinds": [
            { "key": ":w", "mods": [], "comment": "Save the current file" },
            { "key": ":q", "mods": [], "comment": "Quit Vim" },
            { "key": ":wq", "mods": [], "comment": "Save and quit Vim" },
            { "key": ":q!", "mods": [], "comment": "Force quit without saving" },
            { "key": ":e", "mods": [], "comment": "Open a new file" },
            { "key": ":bnext", "mods": [], "comment": "Switch to the next buffer" },
            { "key": ":bprev", "mods": [], "comment": "Switch to the previous buffer" },
            { "key": ":ls", "mods": [], "comment": "List open buffers" }
        ],
        "children": []
    },
    {
        "name": "Visual Mode",
        "keybinds": [
            { "key": "v", "mods": [], "comment": "Enter visual mode (character selection)" },
            { "key": "V", "mods": [], "comment": "Enter visual line mode (line selection)" },
            { "key": "Ctrl + v", "mods": [], "comment": "Enter visual block mode (block selection)" },
            { "key": "y", "mods": [], "comment": "Yank the selected text" },
            { "key": "d", "mods": [], "comment": "Delete the selected text" },
            { "key": "p", "mods": [], "comment": "Paste the selected text after the cursor" },
            { "key": "P", "mods": [], "comment": "Paste the selected text before the cursor" }
        ],
        "children": []
    },
    {
        "name": "Window Management",
        "keybinds": [
            { "key": ":sp", "mods": [], "comment": "Split window horizontally" },
            { "key": ":vsp", "mods": [], "comment": "Split window vertically" },
            { "key": "Ctrl + w, s", "mods": [], "comment": "Move to the next split (horizontal)" },
            { "key": "Ctrl + w, v", "mods": [], "comment": "Move to the next split (vertical)" },
            { "key": "Ctrl + w, w", "mods": [], "comment": "Switch between windows" },
            { "key": "Ctrl + w, q", "mods": [], "comment": "Close the current window" }
        ],
        "children": []
    }
];
