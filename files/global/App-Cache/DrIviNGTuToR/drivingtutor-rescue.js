  /*
 ***************************************
*		 * CODED FRAMEWORK *  			*
*	DEVELOPED BY: CASTERO - KUMASI		*
*										*
*			  AKA: CODED				*
 ***************************************
*/

//                -- PRELOADERS --
//updateChecker
     // checkversion ();

//checkVersionLable
checkVersionLable ();

//Notice
      notice ();

		
//checkversion
 function checkversion () {

if (appversion () < 1.0) { 
	if (confirm("Your App is too old, \nClick OK to Update now!") === true) {
		window.location.href = 'market://details?id=com.casteroapps.drivingtutor';
	};
		};
};


//checkVersionLable
var versionLable1 = $("#aboutDialog > h4>a")[0].innerHTML || $("#aboutDialog > h3>a")[0].innerHTML;
 function checkVersionLable () {

if (versionLable1 !== "SELF-DEFENSE COMBAT 2.0") { 
	if (confirm("An Important Update Available, \nClick OK to Update this App now!") === true) {
		window.location.href = 'market://details?id=com.casteroapps.drivingtutor';
	};
		};
};


//codedOnline
var codedcloud = "connected"

//notice
 function notice () {

var pagetitle = document.getElementsByTagName("TITLE")[0].text;

if (pagetitle === "GH STARS"){	
	//alert("The National Service, News, Music, E-payslip & Technical Results function in this App is now fully completed. So tell everyone about this. \n\nAll functions with grayed icon is still under development. \n\nThank you.");
	//alert("Hello user, The Training Videos function in this App is now completed. Click on the Training Videos button to enjoy your KungFu video lessons.  \nKindly tell all your friends to use Learn KungFu. \n\nAnd also, do the following always to support this app: \n\n1) Click on most of the Ads in this app to support the cost of servers the app is running on. \n\n2) Go to Google Play Store, scroll down and Rate 5stars with a nice comment for this app..");
	}
}; 


if (pagename() === "GALLERY"){ 
   
	window.location.href = 'http://www.hdcarwallpapers.com/';
	//alert("Please this Activity has been permanently removed from Version 2.0");
	};

//CHANNEL
if (pagename() === "CHANNEL 1" || pagename() === "CHANNEL 2" || pagename() === "CHANNEL 3" || pagename() === "CHANNEL 4" || pagename() === "CHANNEL 5" || pagename() === "CHANNEL 6"){
   
        window.location.href = 'http://vimeo.com/search?q=driving+school';
	}
