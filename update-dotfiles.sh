#!/bin/bash

# create directory for hostname if needed
# dotfiles are different between hosts
mkdir -p $HOSTNAME

cp -rf $HOME/scripts ./$HOSTNAME/
cp -f $HOME/.zshrc ./$HOSTNAME/zshrc
cp -f $HOME/.config/code-flags.conf ./$HOSTNAME/code-flags.conf
cp -rf $HOME/.config/ags ./$HOSTNAME/
cp -rf $HOME/.config/hypr ./$HOSTNAME/
cp -rf $HOME/.config/kitty ./$HOSTNAME/
cp -rf $HOME/Documents/notes/.obsidian ./$HOSTNAME/obsidian

# get a list of all installed pacman and AUR packages
pacman -Qqe > ./$HOSTNAME/packages-pacman.txt
pacman -Qqm > ./$HOSTNAME/packages-AUR.txt
