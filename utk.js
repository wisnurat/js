//UTK
function myFunction() {
  var x = document.getElementById("myText").value;
  document.getElementById("demo");

switch(x) {
  case "CQOL":
    // SERVER 1 SIJA	
    window.location.replace("https://edu1smkn1cmh.gnomio.com/course/view.php?id=109");
    break;
	
  case "FNTK":
    // SERVER 2	RPL
    window.location.replace("https://edu2smkn1cmh.gnomio.com/course/view.php?id=86");
    break;
	
	case "NPYJ":
    // SERVER 3	PFPT
    window.location.replace("https://edu3smkn1cmh.gnomio.com/course/view.php?id=95");
    break;
	
	case "PCVS":
    // SERVER 4	TEI
    window.location.replace("https://edu4smkn1cmh.gnomio.com/course/view.php?id=20");
    break;
	
	case "OHLF":
    // SERVER 5	TPTU
    window.location.replace("https://edu5smkn1cmh.gnomio.com/course/view.php?id=19");
    break;
	
	case "GHLX":
    // SERVER 6	TEDK
    window.location.replace("https://edu6smkn1cmh.gnomio.com/course/view.php?id=5");
    break;
	
	case "ALSG":
    // SERVER 7	IOP
    window.location.replace("https://edusmkn1cmh7.gnomio.com/course/view.php?id=2");
    break;

	case "VDPJ":
    // SERVER 8	TOI
    window.location.replace("https://edusmkn1cmh8.gnomio.com/course/view.php?id=5");
    break;
	
	case "":
    // code block
	document.getElementById("demo").innerHTML = "Anda Belum Mengetik KODE SOAL";
    break;
	default:
    // code block
	document.getElementById("demo").innerHTML = "KODE SOAL Tidak Valid, Silahkan cek lagi";
}
}
