
#!/bin/bash

# update certificate store for tailscale

ORIGINAL_USER=$USER

sudo scp -i /home/$ORIGINAL_USER/.ssh/id_rsa root@100.115.198.67:/root/dockerhost.pigeon-gecko.ts.net.crt /usr/share/ca-certificates/tailscale/
sudo scp -i /home/$ORIGINAL_USER/.ssh/id_rsa root@100.67.182.42:/root/proxmox.pigeon-gecko.ts.net.crt /usr/share/ca-certificates/tailscale/
sudo scp -i /home/$ORIGINAL_USER/.ssh/id_rsa root@100.108.79.129:/root/homeserver-reverse-proxy.pigeon-gecko.ts.net.crt /usr/share/ca-certificates/tailscale/

sudo trust anchor --store /usr/share/ca-certificates/tailscale/*
