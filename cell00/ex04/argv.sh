if [ "$#" = "1" ]; then
	echo "$1"
elif [ "$#" = "2" ]; then
	echo "$1"
	echo "$2"
elif [ "$#" != "0" ] && [ "$#" != "1" ] && [ "$#" != "2" ]; then
	echo "$1"
	echo "$2"
	echo "$3"
else
	echo "No arguments supplied"
fi
