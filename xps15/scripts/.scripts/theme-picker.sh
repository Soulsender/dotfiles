
#!/bin/bash

RED="\e[31m"
BLUE="\e[34m"
GREEN='\e[32m'
RESET="\e[0m"

# set icons theme
echo -e "${BLUE}Installed icons:${RESET}"
ls ~/.local/share/icons
echo "${BLUE}Please enter icons:${RESET}"
read icons
gsettings set org.gnome.desktop.interface icon-theme "${icons}"

# set interface theme
echo -e "${BLUE}Installed themes:${RESET}"
ls ~/.themes
echo "${BLUE}Please enter theme:${RESET}"
read theme
gsettings set org.gnome.desktop.interface gtk-theme "${theme}"

