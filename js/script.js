/**
 * @author	Albin CAUDERLIER
 * @date	24/02/2017
 * 
 * Script jQuery appelant l'API de BlockCypher.com et affichant les données.
 * 
 */

var xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        var myObj = this.responseText;
        var jsonPretty = JSON.stringify(JSON.parse(myObj),null,2);
        document.getElementById("demo").innerHTML = jsonPretty;
    }
};
xmlhttp.open("GET", "https://api.blockcypher.com/v1/btc/main", true);
xmlhttp.send();


function homePageLoading() {
    url = 'https://api.blockcypher.com/v1/btc/main';
    elementID = 'bitcoin_info_number';
    fonctionRequeteApi(url, elementID);
	
    /*url = 'https://bitcoin.mubiz.com/blockchaininfo';
    elementID = 'bitcoin_block_number';
    fonctionRequeteApi(url, elementID);
	
    url = 'https://bitcoin.mubiz.com/mininginfo';
    elementID = 'bitcoin_mining_number';
    fonctionRequeteApi(url, elementID);
	
    url = 'https://bitcoin.mubiz.com/peerinfo;
    elementID = 'bitcoin_peer_number';
    fonctionRequeteApi(url, elementID);*/
}


$(document).ready(function() {
	$.ajax({
		url : "https://api.blockcypher.com/v1/btc/main",
		//url : "https://bitcoin.mubiz.com/info",//ne fonctionne plus
		dataType : "json",
		contentType : "application/json; charset=utf-8",
		type : "GET",
		timeout:	"5000",
		async : false,

		success : function(data) {
			//$('#bitcoin_block_number').append(data.blocks);
			$('#bitcoin_block_number').append(data.height);
			
			$('#bitcoin_info_number').append(data.name);
			
      			$('#bitcoin_mining_number').append(data.time);
      			$('#bitcoin_peer_number').append(data.peer_count);
		},

		error : function(xhr, status, err) {
			$('#bitcoin_block_number').append(err+" N/A");
			
			$('#bitcoin_info_number').append(err+" N/A");
			
      			$('#bitcoin_mining_number').append(err+" N/A");
      			$('#bitcoin_peer_number').append(err+" N/A");
		}
	});
});
