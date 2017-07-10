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

//Notice
      notice ();

//localize
var pageLable1 = $("#infocontainer > h1")[0];
var translateInfo = document.createElement("div");
	    translateInfo.id = "translateMSG";
	    translateInfo.innerHTML = "[ Language Loading... ]";
	    translateInfo.style.color = "#00ff00";
	    translateInfo.style.background = "black";
	    translateInfo.style.padding = "2%";
	    translateInfo.style.zoom = "1.2";
	    translateInfo.style.textShadow = "0 1px 0 #000";
	    // Use any selector
	    $(pageLable1).after(translateInfo);

var translateBox = document.createElement("div");
	    translateBox.id = "google_translate_element";
	    // Use any selector
	    $("#translateMSG").after(translateBox);

function googleTranslateElementInit() {
	new google.translate.TranslateElement({pageLanguage: 'en'}, 'google_translate_element');
	
	//fixTranslateUI
	$("#google_translate_element img").attr('style', 'width: 10% !important');
	$(".goog-te-gadget .goog-te-combo").attr('style', 'zoom: 2');
	$("#translateMSG").attr('style', 'display: none');
	
	//$(document).on('tap', '#google_translate_element, #goog-te-combo, .skiptranslate, .goog-te-gadget', function(){
	var langOptions = $(".goog-te-combo > option")[0];
	$(document).on('tap', langOptions, function(){
		$(".goog-te-banner-frame").attr('style', 'visibility: visible');
		setTimeout(fixTranslateOverflow, 7000);
		});
	};

 function localize () {	
	 $("#header").addClass("notranslate");
	 $("#aboutDialog").addClass("notranslate");
	 $(".mainfooter").addClass("notranslate");
	 $("title").addClass("notranslate");
	 
	var translateJS = document.createElement("script");
	    translateJS.type = "text/javascript";
	    translateJS.src = "https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
	    // Use any selector
	    $("head").append(translateJS);
};


//fixTranslateOverflow
 function fixTranslateOverflow () {
	$(".goog-te-banner-frame").attr('style', 'visibility: hidden');
	$("#goog-gt-tt").attr('style', 'visibility: hidden !important');
	$(".goog-tooltip").attr('style', 'visibility: hidden !important');
};

//localize
localize ();

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

if (versionLable1 !== "DRIVING TUTOR 2.0") { 
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
   
 window.location.href = 'http://www.bing.com/images/search?q=latest%20cars&qs=n&form=QBIR&sp=-1&pq=latest%20car&sc=8-18&sk=&cvid=E79F6141DC9F4688B2AB148D3AED0FE2&ajf=60';	
	};

//CHANNEL
if (pagename() === "CHANNEL 1"){
  $(".youmax").youmax({
                apiKey:"AIzaSyAlhAqP5RS7Gxwg_0r_rh9jOv_5WfaJgXw",
                	//apiKey:"AIzaSyC3lXNm8-OC5y3uFLUQjPkTCTP6qR7Bv0s", //CASTERO APPS LEARN KUNGFU [ NEW ]
                channelLink:"https://m.youtube.com/channel/UCPwt-gLXAMMVVne6TFyCDFA",
	  	playlistLink:"https://www.youtube.com/?listType=user_uploads&list=shemmati10yt",
                //playlistLink:"https://m.youtube.com/channel/UCPwt-gLXAMMVVne6TFyCDFA/playlists",
                
                defaultTab:"Playlists",         //Uploads|Playlists|Featured
                videoDisplayMode:"popup",       //popup|link|inline

                maxResults:"20",
                autoPlay:true,
                displayFirstVideoOnLoad:true,       //for inline video display mode only                

                responsiveBreakpoints   :[600,900,2000,2500],

                loadMoreText            :"<i class=\"fa fa-plus\"></i>&nbsp;&nbsp;Show me more videos..",
                previousButtonText      :"<i class=\"fa fa-angle-left\"></i>&nbsp;&nbsp;Previous",
                nextButtonText          :"Next&nbsp;&nbsp;<i class=\"fa fa-angle-right\"></i>",
                loadingText             :"Please Wait.. <br> Videos are loading..",
                allDoneText             :"<i class=\"fa fa-times\"></i>&nbsp;&nbsp;All done..",

                hideHeader              :false,
                hideTabs                :false,
                hideLoadingMechanism    :false,
            });
	}


if (pagename() === "CHANNEL 2"){
  $(".youmax").youmax({
                apiKey:"AIzaSyAlhAqP5RS7Gxwg_0r_rh9jOv_5WfaJgXw",
                	//apiKey:"AIzaSyC3lXNm8-OC5y3uFLUQjPkTCTP6qR7Bv0s", //CASTERO APPS LEARN KUNGFU [ NEW ]
                channelLink:"https://www.youtube.com/channel/UC94rkNhixyVA2N_UYTQyVeg",
	  	playlistLink:"https://www.youtube.com/?listType=user_uploads&list=shemmati10yt",
                //playlistLink:"https://www.youtube.com/channel/UC94rkNhixyVA2N_UYTQyVeg/playlists",
                
                defaultTab:"Playlists",         //Uploads|Playlists|Featured
                videoDisplayMode:"popup",       //popup|link|inline

                maxResults:"20",
                autoPlay:true,
                displayFirstVideoOnLoad:true,       //for inline video display mode only                

                responsiveBreakpoints   :[600,900,2000,2500],

                loadMoreText            :"<i class=\"fa fa-plus\"></i>&nbsp;&nbsp;Show me more videos..",
                previousButtonText      :"<i class=\"fa fa-angle-left\"></i>&nbsp;&nbsp;Previous",
                nextButtonText          :"Next&nbsp;&nbsp;<i class=\"fa fa-angle-right\"></i>",
                loadingText             :"Please Wait.. <br> Videos are loading..",
                allDoneText             :"<i class=\"fa fa-times\"></i>&nbsp;&nbsp;All done..",

                hideHeader              :false,
                hideTabs                :false,
                hideLoadingMechanism    :false,
            });
	}


if (pagename() === "CHANNEL 3"){
  $(".youmax").youmax({
                apiKey:"AIzaSyAlhAqP5RS7Gxwg_0r_rh9jOv_5WfaJgXw",
                	//apiKey:"AIzaSyC3lXNm8-OC5y3uFLUQjPkTCTP6qR7Bv0s", //CASTERO APPS LEARN KUNGFU [ NEW ]
                channelLink:"https://www.youtube.com/user/purpledriving",
                playlistLink:"https://www.youtube.com/?listType=user_uploads&list=purpledriving",
                
                defaultTab:"Playlists",         //Uploads|Playlists|Featured
                videoDisplayMode:"popup",       //popup|link|inline

                maxResults:"20",
                autoPlay:true,
                displayFirstVideoOnLoad:true,       //for inline video display mode only                

                responsiveBreakpoints   :[600,900,2000,2500],

                loadMoreText            :"<i class=\"fa fa-plus\"></i>&nbsp;&nbsp;Show me more videos..",
                previousButtonText      :"<i class=\"fa fa-angle-left\"></i>&nbsp;&nbsp;Previous",
                nextButtonText          :"Next&nbsp;&nbsp;<i class=\"fa fa-angle-right\"></i>",
                loadingText             :"Please Wait.. <br> Videos are loading..",
                allDoneText             :"<i class=\"fa fa-times\"></i>&nbsp;&nbsp;All done..",

                hideHeader              :false,
                hideTabs                :false,
                hideLoadingMechanism    :false,
            });
	}

//checkVersionLable
checkVersionLable ();
