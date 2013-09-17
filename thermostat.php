<?php


	function rctemp()
	{
		$myFile = "txt/ctemp.txt";
		$fh = fopen($myFile, 'r');
		$theData = fread($fh, filesize($myFile));
		fclose($fh);
		echo $theData;
	}

	function wstate()
	{
		$state = "txt/state.txt";
		$fh = fopen($state, 'w') or die("can't open file");
		$stringData = $_GET['state'];
		fwrite($fh, $stringData);
		fclose($fh);
		echo $stringData;
	}


	function rstate()
	{
		$status = "txt/status.txt";
		$fh = fopen($status, 'r');
		$theData = fread($fh, filesize($status));
		fclose($fh);
		echo $theData;
	}

	function rstemp()
	{
		$stemp = "txt/stemp.txt";
		$fh = fopen($stemp, 'r');
		$theData = fread($fh, filesize($stemp));
		fclose($fh);
		echo $theData;
	}


	function wstemp($stringData)
	{
		$myFile = "txt/stemp.txt";
		$fh = fopen($myFile, 'w') or die("can't open file");
		$stringData = $_GET['tsetter'];
		fwrite($fh, $stringData);
		fclose($fh);
		echo $stringData;

	}

if(function_exists($_GET['f'])) {
   $_GET['f']();
}
?>
