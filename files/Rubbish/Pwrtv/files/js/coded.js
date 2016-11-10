/*
 ***************************************
*		 * CODED FRAMEWORK *  			*
*	DEVELOPED BY: CASTERO - KUMASI		*
*										*
*			  AKA: CODED				*
 ***************************************
*/


//appversion
 function appversion (){
	 version = "1.0";
	 return version;
 }


function checkAndroidVersion (){
var ua = navigator.userAgent;

if( ua.indexOf("Android") >= 0 )

{

  var androidversion = parseFloat(ua.slice(ua.indexOf("Android")+8)); 

  //if (androidversion < 2.3)
	
  if (androidversion < 5.0)

  {
	var pagetitle = document.getElementsByTagName("TITLE")[0].text;

	if (pagetitle === "LIVE TV"){
	$( "#dashboard" ).css("height", "50%");
	document.getElementById('old-android').href='files/styles/oldandroid.css';
//document.getElementById('android-styles').href='files/styles/style-old.css';
	};

  };
}
};

 function playVid (){
document.getElementById("tvimg").src = "files/images/tv-construction-ful-new.png";
//document.getElementById("mainvid").style.visibility = "visible";
//document.getElementById("tvimg").style.display = "none";
 }