#!/bin/bash

# create directory for hostname if needed
# dotfiles are different between hosts
mkdir -p $HOSTNAME

# hyprland stuff
cp -f $HOME/.config/code-flags.conf ./$HOSTNAME/code-flags.conf
cp -rf $HOME/.config/quickshell ./$HOSTNAME/
cp -rf $HOME/.config/hypr ./$HOSTNAME/
cp -rf $HOME/.config/fuzzel ./$HOSTNAME/
cp -rf $HOME/.config/kitty ./$HOSTNAME/

# personal config stuff
# cp -rf $HOME/Documents/notes/.obsidian ./$HOSTNAME/obsidian
cp -f $HOME/.zshrc ./$HOSTNAME/zshrc
cp -rf $HOME/.config/gtk-4.0 ./$HOSTNAME/gtk-4.0
cp -rf $HOME/.scripts ./$HOSTNAME/scripts

# get a list of all installed packages
pacman -Q | awk '{print $1}' >> ./$HOSTNAME/packages.txt

# prompt for icons and themes to save
read -p "Do you want to copy the theme and icons? (takes a while) (y/N): " response
if [[ "$response" =~ ^[yY]$ ]]; then
    # gnome theme stuff
    cp -rf $HOME/.local/share/icons ./$HOSTNAME/icons
    cp -rf $HOME/.themes ./$HOSTNAME/themes
else
    echo -e "${BLUE}Skipping the icons and themes${RESET}"
fi
