#!/bin/bash

# create directory for hostname if needed
# dotfiles are different between hosts
mkdir -p $HOSTNAME

cp -f $HOME/.zshrc ./$HOSTNAME/zshrc
cp -rf $HOME/.config/ags ./$HOSTNAME/ags
cp -rf $HOME/.config/hypr ./$HOSTNAME/hypr
cp -rf $HOME/.config/kitty ./$HOSTNAME/kitty
