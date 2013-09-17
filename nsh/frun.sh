sett=$(cat /var/www/stemp.txt) 
curt=$(cat /var/www/ctemp.txt)


if [ "$curt" -gt "$sett" ];then
	echo "higher"
	echo "run" > /var/www/state.txt

	while [ "$curt" -lt "$sett" ];do
		echo "lower"
		echo "stop" > /var/www/state.txt
	done
fi
