//UTK
function myFunction() {
  var x = document.getElementById("myText").value;
  document.getElementById("demo");

switch(x) {
  case "DVYY":
    // SERVER 1 SIJA	
    window.location.replace("https://edu1smkn1cmh.gnomio.com/course/view.php?id=114");
    break;
	
  case "XUEE":
    // SERVER 2	RPL
    window.location.replace("https://edu2smkn1cmh.gnomio.com/course/view.php?id=91");
    break;
	
	case "BCPP":
    // SERVER 3	PFPT
    window.location.replace("https://edu3smkn1cmh.gnomio.com/course/view.php?id=102");
    break;
	
	case "WNKK":
    // SERVER 4	TEI
    window.location.replace("https://edu4smkn1cmh.gnomio.com/course/view.php?id=25");
    break;
	
	case "QSJJ":
    // SERVER 5	TPTU
    window.location.replace("https://edu5smkn1cmh.gnomio.com/course/view.php?id=25");
    break;
	
	case "AABB":
    // SERVER 6	TEDK
    window.location.replace("http://gg.gg/lmssmkn1cimahi");
    break;
	
	case "FKII":
    // SERVER 7	KP
    window.location.replace("https://edusmkn1cmh7.gnomio.com/course/view.php?id=10");
    break;

	case "YXZZ":
    // SERVER 8	TOI
    window.location.replace("https://edusmkn1cmh8.gnomio.com/course/view.php?id=10");
    break;

	case "XDAA":
    // SERVER 9 KM
    window.location.replace("https://edu9smkn1cmh.gnomio.com/course/view.php?id=2");
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
