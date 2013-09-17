


      // fname and rrd_data are the global variable used by all the functions below
      fname="dht11.rrd";
      rrd_data="dht11.rrd";

      // This function updates the Web Page with the data from the RRD archive header
      // when a new file is selected
      function update_fname() {
        // Finally, update the file name and enable the update button

ctemp();
        var graph_opts={points: { show: false },
			
			yaxis: { autoscaleMargin: .25},
			tooltip: true,
			tooltipOpts: { content: "<h4>%s</h4> Value: %y.3" }
			};

        var ds_graph_opts={'t0':{ label: 'Temp', color: "#ff0000", 
                           	lines: { show: true, fill: true}
				},
			   'h0':{ label: 'Hum', color: "#00c0c0", 
                                lines: { show: true, fill: true}
				}
			};

        var rrdflotv={	graph_only:false, 
			multi_ds:true,
 			tooltip: true,
			tooltipOpts: { content: "<h4>%s</h4> Value: %y.3" },
			use_checked_DSs:true,
			checked_DSs:['h0-GAUGE','t0-GAUGE'], 
			use_windows:false, 
			window_min: 1,
			window_max: 13,
			timezone: -5
		};

        // the rrdFlot object creates and handles the graph
	function update() {
			var f=new rrdFlot("mygraph",rrd_data,graph_opts,ds_graph_opts,rrdflotv);
			setTimeout(update, 5*60000)
		};
	function update2() {
		
			setTimeout(update2, 300);
			seTemp();
			ctemp();
			status();
			btnupd()
		};
        update()
       	update2()
      }
 
      // This is the callback function that,
      // given a binary file object,
      // verifies that it is a valid RRD archive
      // and performs the update of the Web page
      function update_fname_handler(bf) {
          var i_rrd_data=undefined;
          if (bf.getLength()<1) {
            alert("File "+fname+" is empty (possibly loading failed)!");
            return 1;
          }
          try {
            var i_rrd_data=new RRDFile(bf);            
          } catch(err) {
            alert("File "+fname+" is not a valid RRD archive!\n"+err);
            return 1;
          }
          if (i_rrd_data!=undefined) {
            rrd_data=i_rrd_data;
            update_fname()
          }
      }

      // this function is invoked when the RRD file name changes
      function fname_update() {
        fname="dht11.rrd";
        try {
          FetchBinaryURLAsync(fname,update_fname_handler);
        } catch (err) {
           alert("Failed loading "+fname+"\n"+err);
        }

      }
function ctemp(){
var ajaxRequest;  // The variable that makes Ajax possible!
	
	try{
		// Opera 8.0+, Firefox, Safari
		ajaxRequest = new XMLHttpRequest();
	} catch (e){
		// Internet Explorer Browsers
		try{
			ajaxRequest = new ActiveXObject("Msxml2.XMLHTTP");
		} catch (e) {
			try{
				ajaxRequest = new ActiveXObject("Microsoft.XMLHTTP");
			} catch (e){
				// Something went wrong
				alert("Your browser broke!");
				return false;
			}
		}
	}
	// Create a function that will receive data sent from the server
	ajaxRequest.onreadystatechange = function(){
		if(ajaxRequest.readyState == 4){
var fieldNameElement = document.getElementById("temp");
  while(fieldNameElement.childNodes.length >= 1) {
    fieldNameElement.removeChild(fieldNameElement.firstChild);
  }
  fieldNameElement.appendChild(fieldNameElement.ownerDocument.createTextNode(ajaxRequest.responseText));

		}
	}
	ajaxRequest.open("GET", "thermostat.php?f=rctemp", true);
	ajaxRequest.send(null); 

	}
	


function seTemp(){
	var ajaxRequest;  // The variable that makes Ajax possible!
	
	try{
		// Opera 8.0+, Firefox, Safari
		ajaxRequest = new XMLHttpRequest();
	} catch (e){
		// Internet Explorer Browsers
		try{
			ajaxRequest = new ActiveXObject("Msxml2.XMLHTTP");
		} catch (e) {
			try{
				ajaxRequest = new ActiveXObject("Microsoft.XMLHTTP");
			} catch (e){
				// Something went wrong
				alert("Your browser broke!");
				return false;
			}
		}
	}
	// Create a function that will receive data sent from the server
	ajaxRequest.onreadystatechange = function(){
		if(ajaxRequest.readyState == 4){
var fieldNameElement = document.getElementById("stemp");
  while(fieldNameElement.childNodes.length >= 1) {
    fieldNameElement.removeChild(fieldNameElement.firstChild);
  }
  fieldNameElement.appendChild(fieldNameElement.ownerDocument.createTextNode(ajaxRequest.responseText));

		}
	}
	ajaxRequest.open("GET", "thermostat.php?f=rstemp", true);
	ajaxRequest.send(null); 

	}

function tp(){ 
  var javascriptVariable = document.getElementById("tsetter").value;
		$.ajax({
			type:'post',
    			url:"thermostat.php?f=wstemp&tsetter=" + javascriptVariable,
    			success:function(res){
     			seTemp();
   			}
  		});
};
function run(){ 

		$.ajax({
			type:'post',
    			url:"thermostat.php?f=wstate&state=run",
    			success:function(res){
     			seTemp();
   			}
  		});
};
function stop(){ 

		$.ajax({
			type:'post',
    			url:"thermostat.php?f=wstate&state=stop",
    			success:function(res){
     			seTemp();
   			}
  		});
};
  

	function tup(){
		var otemp = parseInt(document.getElementById("stemp").innerHTML, 10);	
		var ntemp = otemp + 1;
		$.ajax({
   			 type:'post',
   			 url:"thermostat.php?f=wstemp&tsetter=" + ntemp,
   			 success:function(res){
     			 seTemp();
   			}
  		});
	};

	function tdown(){
		var otemp = parseInt(document.getElementById("stemp").innerHTML, 10);
		var ntemp = otemp + -1
		$.ajax({
   			 type:'post',
   			 url:"thermostat.php?f=wstemp&tsetter=" + ntemp,
   			 success:function(res){
     			 seTemp();
   			}
  		});		
		
	}
function status(){
var ajaxRequest;  // The variable that makes Ajax possible!
	
	try{
		// Opera 8.0+, Firefox, Safari
		ajaxRequest = new XMLHttpRequest();
	} catch (e){
		// Internet Explorer Browsers
		try{
			ajaxRequest = new ActiveXObject("Msxml2.XMLHTTP");
		} catch (e) {
			try{
				ajaxRequest = new ActiveXObject("Microsoft.XMLHTTP");
			} catch (e){
				// Something went wrong
				alert("Your browser broke!");
				return false;
			}
		}
	}
	// Create a function that will receive data sent from the server
	ajaxRequest.onreadystatechange = function(){
		if(ajaxRequest.readyState == 4){
var fieldNameElement = document.getElementById("statusBtn");
  while(fieldNameElement.childNodes.length >= 1) {
    fieldNameElement.removeChild(fieldNameElement.firstChild);
  }
  fieldNameElement.appendChild(fieldNameElement.ownerDocument.createTextNode(ajaxRequest.responseText));

		}
	}
	ajaxRequest.open("GET", "thermostat.php?f=rstate", true);
	ajaxRequest.send(null); 


}
function btnupd(){
state = document.getElementById("statusBtn").outerText;
if(state == "Disconnected")

document.getElementById("statusBtn").className = "btn btn-Warning";

if(state == "off")
document.getElementById("statusBtn").className = "btn btn-inverse";
if(state == "Running")
document.getElementById("statusBtn").className = "btn btn-success";
if(state == "Error")
document.getElementById("statusBtn").className = "btn btn-danger";
}
