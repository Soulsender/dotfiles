#!/bin/bash

RED="\e[31m"
BLUE="\e[34m"
GREEN='\e[32m'
RESET="\e[0m"

template_host="xps15"
packages_pacman="${template_host}/packages-pacman.txt"
packages_AUR="${template_host}/packages-AUR.txt"

sudo -A true

# check for internet connection
echo -e "${BLUE}Checking for internet connection${RESET}"
ping google.com -c 3
if [ $? -ne 0 ]; then
    echo -e "${RED}There was a network error${RESET}"
    exit 1
fi

# set the clock correctly
echo -e "${BLUE}Setting clock${RESET}"
timedatectl
if [ $? -ne 0 ]; then
    echo -e "${RED}There was a an error setting the clock${RESET}"
    exit 1
fi

# check for yay and pacman
echo -e "${BLUE}Checking package manager${RESET}"
if command -v pacman 2>&1; then
    echo -e "${GREEN}Arch detected${RESET}"
else
    echo -e "${RED}This is not an arch system. Quiting.${RESET}"
    exit 1
fi
if command -v yay >&1; then
    echo -e "${GREEN}Yay found${RESET}"
else
    echo -e "${RED}Yay not found. Installing...${RESET}"
    sudo pacman -S --needed git base-devel
    git clone https://aur.archlinux.org/yay-bin.git
    cd yay-bin
    makepkg -si
fi

# install packages
echo -e "${BLUE}Installing packages${RESET}"
sleep 1
for item in $(< "$packages_pacman"); do
    sudo pacman -S $item --noconfirm
done

for item in $(< "$packages_AUR"); do
    yay -S $item --noconfirm
done

# prompt for new configuration
read -p "Do you want to overwrite you current configuration? (y/N): " response
if [[ "$response" =~ ^[yY]$ ]]; then
    # copy configs dotfiles
    echo -e "${BLUE}Overwriting current config...${CLEAR}"
    sleep 1
    cp -rf ${template_host}/scripts $HOME/
    cp -rf ${template_host}/zshrc $HOME/.zshrc
    cp -rf ${template_host}/code-flags.conf $HOME/.config/
    cp -rf ${template_host}/ags $HOME/.config/
    cp -rf ${template_host}/hypr $HOME/.config/
    cp -rf ${template_host}/fuzzel $HOME/.config/
    cp -rf ${template_host}/kitty $HOME/.config/
    cp -rf ${template_host}/gtk-4.0 $HOME/.config/
else
    echo -e "${BLUE}Keeping current configuration${RESET}"
fi
