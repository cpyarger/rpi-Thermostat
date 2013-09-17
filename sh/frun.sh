sett=$(cat /var/www/txt/stemp.txt)
curt=$(cat /var/www/txt/ctemp.txt)


if [ "$curt" -gt "$sett" ];then
	echo "higher"
	echo "run" > /var/www/txt/state.txt

	while [ "$curt" -lt "$sett" ];do
		echo "lower"
		echo "stop" > /var/www/txt/state.txt
	done
fi
