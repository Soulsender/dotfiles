#!/bin/bash
echo "ACTION=="add", SUBSYSTEM=="usb", DRIVERS=="usb", ATTRS{idVendor}=="046d", ATTRS{idProduct}=="c53f", ATTR{power/wakeup}="disabled", ATTR{driver/1-1/power/wakeup}="disabled"" > /etc/udev/rules.d/50-wake-on-device.rules 
