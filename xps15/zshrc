# If you come from bash you might have to change your $PATH.
# export PATH=$HOME/bin:/usr/local/bin:$PATH


# sudo sh -c "echo 'disabled' > /sys/bus/usb/devices/1-1/power/wakeup"
export EDITOR=vim
#todo.sh

# PATH
export PATH=/home/soul/.local/share:$PATH
export PATH="$PATH:$HOME/.local/bin"
export PATH="${HOME}/.bin:${PATH}"
export PATH="${HOME}/bin:${PATH}"
export PATH="${HOME}/.rubies/ruby-3.3.5/bin:${PATH}"

# note path
notes="~/Documents/Notes/Quick-Reference"

# cat note path
cnotes="less ${notes}"

# ctrl backspace
bindkey "^H" backward-kill-word

# declare variables
red="\e[0;91m"
green="\e[0;92m"
blue="\e[0;94m"
bold="\e[1m"
reset="\e[0m"
yellow="\e[0;33m"
cyan="\e[0;36m"

# custom aliases
alias fuck="sudo rm -rf"
alias fucking="sudo"
alias yeet="cp -r"
alias clr="clear"
alias pacclear="sudo pacman -Qdtq | sudo pacman -Rns -"

# misc
#alias neofetch="neofetch --source /home/soul/.config/neofetch-art.txt --ascii_distro debian"

# vpn
#alias proton='protonvpn-cli'
alias vpnc='sudo systemctl stop tailscaled && protonvpn-cli c'
alias vpnd='protonvpn-cli d && sudo systemctl start tailscaled'

# tasks
alias tlist="todo.sh list"
alias tadd="todo.sh add"
alias tdel="todo.sh del"
alias tdone="todo.sh done"
alias tedit="nano ~/.todo/todo.txt"

# quick notes
alias notes="ls ${notes}"

# packet tracer
alias packettracer="export XDG_CONFIG_HOME=~/.configPT; packettracer"

# system
alias unfuck-wifi="sudo systemctl restart NetworkManager"
alias nm-stop="sudo service network-manager stop"
alias nm-start="sudo service network-manager start"
alias sysupdate="sudo apt update -y && sudo apt upgrade"
alias school-mac="sudo service network-manager stop && sudo macchanger -m aa:ed:da:28:24:cc wlp59s0 && sudo service network-manager start"
alias flush-dns="sudo resolvectl flush-caches"
alias wifi-passwd="ls /etc/NetworkManager/system-connections"
alias ll="ls -l"
alias la="ls -lA"
alias l="ls -CF"
alias kill80="sudo lsof -t -i tcp:80 -s tcp:listen | sudo xargs kill"

# dev & tools
alias ei-update="docker build -t earth-invader . && docker tag earth-invader soulsender/earth-invader && sudo docker push soulsender/earth-invader:latest"
alias bluetooth-tool="hcitool scan"
#alias code="codium"
# alias exif="exiftool"
alias ferox="feroxbuster"
alias fb="feroxbuster"
alias rustscan="sudo docker run -it --rm --name rustscan rustscan/rustscan:2.0.0"
alias rs="rustscan"
alias pwncat="pwncat-cs"
# alias eog="gwenview"
# alias hash-id="python3 ~/.scripts/hash-id.py"
# alias hoaxshell="python3 ~/.scripts/hoaxshell/hoaxshell.py"
# alias nessus="/bin/systemctl start nessusd.service"
# alias airgeddon="sudo ~/.local/share/airgeddon/airgeddon.sh"
# alias sublister="sublist3r"
# alias amass="docker run -v OUTPUT_DIR_PATH:/.config/amass/ caffix/amass"
# alias dvwa="docker run --rm -it -p 80:80 vulnerables/web-dvwa"
# alias responder="python3 ~/.local/share/Responder/Responder.py"
# alias monero="~/.local/share/monero/monero-gui-v0.18.1.2/monero-wallet-gui"
# alias linkfinder="python3 ~/.local/share/LinkFinder/linkfinder.py"
# alias subjs="~/.local/share/subjs/subjs"
# alias wifispam="sudo ~/.local/share/WiFi-Spam/WiFiSpam.sh"
# alias deauth="sudo ~/.local/share/PwrDeauther/PwrDeauther.sh"

# Path to your oh-my-zsh installation.
export ZSH="$HOME/.oh-my-zsh"

# Set name of the theme to load --- if set to "random", it will
# load a random theme each time oh-my-zsh is loaded, in which case,
# to know which specific one was loaded, run: echo $RANDOM_THEME
# See https://github.com/ohmyzsh/ohmyzsh/wiki/Themes
ZSH_THEME="darkblood"

plugins=(git)

source $ZSH/oh-my-zsh.sh

PROMPT=$'%{$fg[red]%}┌[%{$fg_bold[white]%}%n%{$reset_color%}%{$fg[red]%}@%{$fg_bold[white]%}%m%{$reset_color%}%{$fg[red]%}] %{$fg_bold[white]%}%~%{$reset_color%}%{$fg[red]%} %{$(git_prompt_info)%}%(?,,%{$fg[red]%}[%{$fg_bold[white]%}%?%{$reset_color%}%{$fg[red]%}])
%{$fg[red]%}└>%{$reset_color%} '

PS2=$' %{$fg[red]%}|>%{$reset_color%} '

ZSH_THEME_GIT_PROMPT_PREFIX="%{$fg[red]%}[%{$fg_bold[white]%}"
ZSH_THEME_GIT_PROMPT_SUFFIX="%{$reset_color%}%{$fg[red]%}] "
ZSH_THEME_GIT_PROMPT_DIRTY=" %{$fg[red]%}⚡%{$reset_color%}"

      
