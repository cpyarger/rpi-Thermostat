#!/bin/bash
#
# Raspbery Pi Thermostat Controller
#
#

state=$(cat /var/www/txt/state.txt)


function on() {
gpio  mode 10 out #Fan
gpio  write 10 0
gpio  mode 13 out #AC
gpio  write 13 0
echo "Running" >/var/www/txt/status.txt
               exit
           }
function off (){
gpio  mode 10 out #Fan
gpio  write 10 1
gpio  mode 13 out #AC
gpio  write 13 1
echo "off" >/var/www/txt/status.txt
               exit
           }
if [ "$state" == "run" ]
then
on
else 
off
fi

