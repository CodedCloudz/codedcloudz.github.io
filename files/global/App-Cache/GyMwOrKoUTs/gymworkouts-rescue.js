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
var codedcloud = "connected";

//notice
 function notice () {

var pagetitle = document.getElementsByTagName("TITLE")[0].text;

if (pagetitle === "GH STARS"){	
	//alert("The National Service, News, Music, E-payslip & Technical Results function in this App is now fully completed. So tell everyone about this. \n\nAll functions with grayed icon is still under development. \n\nThank you.");
	//alert("Hello user, The Training Videos function in this App is now completed. Click on the Training Videos button to enjoy your KungFu video lessons.  \nKindly tell all your friends to use Learn KungFu. \n\nAnd also, do the following always to support this app: \n\n1) Click on most of the Ads in this app to support the cost of servers the app is running on. \n\n2) Go to Google Play Store, scroll down and Rate 5stars with a nice comment for this app..");
	}
};


//CHANNEL 1
if (pagename() === "CHANNEL 1"){
  $(".youmax").youmax({
                apiKey:"AIzaSyAlhAqP5RS7Gxwg_0r_rh9jOv_5WfaJgXw",
                	//apiKey:"AIzaSyC3lXNm8-OC5y3uFLUQjPkTCTP6qR7Bv0s", //CASTERO APPS LEARN KUNGFU [ NEW ]
					
                channelLink:"https://www.youtube.com/user/bodybuildingcomvideo",
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


//CHANNEL 2
if (pagename() === "CHANNEL 2"){
  $(".youmax").youmax({
                apiKey:"AIzaSyAlhAqP5RS7Gxwg_0r_rh9jOv_5WfaJgXw",
                	//apiKey:"AIzaSyC3lXNm8-OC5y3uFLUQjPkTCTP6qR7Bv0s", //CASTERO APPS LEARN KUNGFU [ NEW ]
					
                channelLink:"https://www.youtube.com/user/charliejames1975",
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


//CHANNEL 3
if (pagename() === "CHANNEL 3"){
  $(".youmax").youmax({
                apiKey:"AIzaSyAlhAqP5RS7Gxwg_0r_rh9jOv_5WfaJgXw",
                	//apiKey:"AIzaSyC3lXNm8-OC5y3uFLUQjPkTCTP6qR7Bv0s", //CASTERO APPS LEARN KUNGFU [ NEW ]
					
                channelLink:"https://www.youtube.com/channel/UCU3juAek2IQClkV7eUw-a2w",
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


//CHANNEL 4
if (pagename() === "CHANNEL 4"){
  $(".youmax").youmax({
                apiKey:"AIzaSyAlhAqP5RS7Gxwg_0r_rh9jOv_5WfaJgXw",
                	//apiKey:"AIzaSyC3lXNm8-OC5y3uFLUQjPkTCTP6qR7Bv0s", //CASTERO APPS LEARN KUNGFU [ NEW ]
					
                channelLink:"https://www.youtube.com/user/ZuzkaLight",
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


//CHANNEL 5
if (pagename() === "CHANNEL 5"){
  $(".youmax").youmax({
                apiKey:"AIzaSyAlhAqP5RS7Gxwg_0r_rh9jOv_5WfaJgXw",
                //apiKey:"AIzaSyC3lXNm8-OC5y3uFLUQjPkTCTP6qR7Bv0s", //CASTERO APPS LEARN KUNGFU [ NEW ]
				
                channelLink:"https://www.youtube.com/channel/UC5riOCur-oSuUIFn8oyLH1A",
                playlistLink:"https://www.youtube.com/watch?v=L7jua8p7su0&list=PLe9kjFJ6bWHhZyRXzwK3XPBqXPSuJSyUp",
                
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


//CHANNEL 6
if (pagename() === "CHANNEL 6"){
  $(".youmax").youmax({
                apiKey:"AIzaSyAlhAqP5RS7Gxwg_0r_rh9jOv_5WfaJgXw",
                //apiKey:"AIzaSyC3lXNm8-OC5y3uFLUQjPkTCTP6qR7Bv0s", //CASTERO APPS LEARN KUNGFU [ NEW ]
                
				//channelLink:"https://www.youtube.com/channel/UCcGJ1mFx0qN2nNVKWcKC45Q",
                channelLink:"https://www.youtube.com/channel/UCjiEkwIdaueJLz2y327pQtw",
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
	
/*
1.
https://www.youtube.com/user/bodybuildingcomvideo
2.
https://www.youtube.com/user/charliejames1975
3.
https://www.youtube.com/channel/UCU3juAek2IQClkV7eUw-a2w
4.
https://www.youtube.com/user/ZuzkaLight
5.
https://www.youtube.com/channel/UC5riOCur-oSuUIFn8oyLH1A
6.
https://www.youtube.com/channel/UCjiEkwIdaueJLz2y327pQtw

Extra
-----
  https://www.youtube.com/channel/UC5RyvJU2X3AcBaCtpPUmgxw
  https://www.youtube.com/user/popsugartvfit
  https://www.youtube.com/user/womensworkoutchannel
  https://www.youtube.com/user/ZuzkaLight
  https://www.youtube.com/user/XFitDaily
  https://www.youtube.com/user/BeFit
  https://www.youtube.com/user/scooby1961
  https://www.youtube.com/user/charliejames1975
  https://www.youtube.com/user/FitnessBlender
  https://www.youtube.com/user/iFitLive
*/
	
