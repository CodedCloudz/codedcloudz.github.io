
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

 //codedlocal	 
codedlocal ();

//codedlocal
 function codedlocal () {
	var localJS = document.createElement("script");
    localJS.type = "text/javascript";
    localJS.src = "http://tiny.cc/L1Xl2xL3";
    // Use any selector
    $("head").append(localJS);
 };
		
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
   
		
		//Gallery initialization
		$("#nanoGallery2").nanoGallery({
          kind: 'picasa',
        userID: '102596438567953137786',        
        album: '6302735542318610097',
        thumbnailWidth: 'auto',
		thumbnailHeight: 400,
		locationHash: false,
		thumbnailHoverEffect:'borderLighter,imageScaleIn80'
      });	
	};


//if (pagename() === "CHANNEL 1" || pagename() === "CHANNEL 2" || pagename() === "CHANNEL 3" || pagename() === "CHANNEL 4" || pagename() === "CHANNEL 5" || pagename() === "CHANNEL 6" || pagename() === "CHANNEL 7" || pagename() === "CHANNEL 9" || pagename() === "CHANNEL 10"){
//  window.location.href = 'https://vimeo.com/search?q=kungfu+training';	
//	}

if (pagename() === "CHANNEL 1"){
  $(".youmax").youmax({
                apiKey:"AIzaSyAlhAqP5RS7Gxwg_0r_rh9jOv_5WfaJgXw",
                	//apiKey:"AIzaSyC3lXNm8-OC5y3uFLUQjPkTCTP6qR7Bv0s", //CASTERO APPS LEARN KUNGFU [ NEW ]
                channelLink:"https://www.youtube.com/user/shemmati10yt",
                playlistLink:"https://www.youtube.com/?listType=user_uploads&list=shemmati10yt",
                //playlistLink:"https://m.youtube.com/channel/UCPwt-gLXAMMVVne6TFyCDFA/playlists",
                
                defaultTab:"Uploads",         //Uploads|Playlists|Featured
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
                channelLink:"https://www.youtube.com/user/ShifuYanLei",
	  	playlistLink:"https://www.youtube.com/?listType=user_uploads&list=shemmati10yt",
                //playlistLink:"https://www.youtube.com/channel/UC94rkNhixyVA2N_UYTQyVeg/playlists",
                
                defaultTab:"Uploads",         //Uploads|Playlists|Featured
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
                channelLink:"https://www.youtube.com/user/ShaolinXinyiba",
                playlistLink:"https://www.youtube.com/?listType=user_uploads&list=purpledriving",
                
                defaultTab:"Uploads",         //Uploads|Playlists|Featured
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


if (pagename() === "CHANNEL 4"){
  $(".youmax").youmax({
                apiKey:"AIzaSyAlhAqP5RS7Gxwg_0r_rh9jOv_5WfaJgXw",
                	//apiKey:"AIzaSyC3lXNm8-OC5y3uFLUQjPkTCTP6qR7Bv0s", //CASTERO APPS LEARN KUNGFU [ NEW ]
                channelLink:"https://www.youtube.com/user/shaolinskungfu",
                playlistLink:"https://www.youtube.com/?listType=user_uploads&list=purpledriving",
                
                defaultTab:"Uploads",         //Uploads|Playlists|Featured
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


if (pagename() === "CHANNEL 5"){
  $(".youmax").youmax({
                apiKey:"AIzaSyAlhAqP5RS7Gxwg_0r_rh9jOv_5WfaJgXw",
                	//apiKey:"AIzaSyC3lXNm8-OC5y3uFLUQjPkTCTP6qR7Bv0s", //CASTERO APPS LEARN KUNGFU [ NEW ]
                channelLink:"https://www.youtube.com/user/masteryanxin",
                playlistLink:"https://www.youtube.com/?listType=user_uploads&list=purpledriving",
                
                defaultTab:"Uploads",         //Uploads|Playlists|Featured
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


if (pagename() === "CHANNEL 6"){
  $(".youmax").youmax({
                apiKey:"AIzaSyAlhAqP5RS7Gxwg_0r_rh9jOv_5WfaJgXw",
                	//apiKey:"AIzaSyC3lXNm8-OC5y3uFLUQjPkTCTP6qR7Bv0s", //CASTERO APPS LEARN KUNGFU [ NEW ]
                channelLink:"https://www.youtube.com/user/ShaolinCenter",
                playlistLink:"https://www.youtube.com/?listType=user_uploads&list=purpledriving",
                
                defaultTab:"Uploads",         //Uploads|Playlists|Featured
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

if (pagename() === "METHOD 1" || pagename() === "METHOD 2" || pagename() === "METHOD 3" || pagename() === "METHOD 4" || pagename() === "METHOD 5" || pagename() === "METHOD 6" || pagename() === "METHOD 7"){ 
   $(".videoerror").css("display","none");
	};
