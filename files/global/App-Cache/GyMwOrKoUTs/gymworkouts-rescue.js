
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
      checkversion ();

//Notice
      notice ();

		
//checkversion
 function checkversion () {

if (appversion () < 1.0) { 
	if (confirm("Your App is too old, \nClick OK to Update now!") === true) {
		window.location.href = 'market://details?id=com.casteroapps.learnkungfunew';
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

	var s = document.createElement("script");
	s.type = "text/javascript";
	//s.src = "https://codedcloudz.github.io/files/global/App-Cache/CdN/jquery.nanogallery2.min.js";
	// Use any selector
	$("head").append(s);
	
	//setTimeout(loadgallery, 3000);
			  
	function loadgallery (){				
		//Gallery initialization
		$("#nanoGallery2").nanogallery2({
          kind: 'picasa',
        userID: '107176243627978544958',        
        album: '6297954975177698881',
       // userID: '102596438567953137786',        
      //  album: '6302735542318610097',
        thumbnailWidth: 'auto',
		thumbnailHeight: 400,
		locationHash: false,
		thumbnailHoverEffect:'borderLighter,imageScaleIn80'
      });	
	};	
	
	window.location.href = 'https://goo.gl/photos/FDnBLjitS78ZKibz8';
    };

if (pagename() === "METHOD 1" || pagename() === "METHOD 2" || pagename() === "METHOD 3" || pagename() === "METHOD 4" || pagename() === "METHOD 5" || pagename() === "METHOD 6" || pagename() === "METHOD 7" || pagename() === "METHOD 8" || pagename() === "METHOD 9" || pagename() === "METHOD 10"){ 
   $(".videoerror").css("display","none");
	};

//CHANNEL
			if (pagename() === "CHANNEL 1" || pagename() === "CHANNEL 2" || pagename() === "CHANNEL 3" || pagename() === "CHANNEL 4" || pagename() === "CHANNEL 5" || pagename() === "CHANNEL 6"|| pagename() === "CHANNEL 7" || pagename() === "CHANNEL 8" || pagename() === "CHANNEL 9" || pagename() === "CHANNEL 10" || pagename() === "CHANNEL 11" || pagename() === "CHANNEL 12" || pagename() === "CHANNEL 13" || pagename() === "CHANNEL 14" || pagename() === "CHANNEL 15" || pagename() === "CHANNEL 16" || pagename() === "CHANNEL 17" || pagename() === "CHANNEL 18" || pagename() === "CHANNEL 19" || pagename() === "CHANNEL 20" ){
   
        window.location.href = 'http://tiny.cc/kr4xjy';
			}
