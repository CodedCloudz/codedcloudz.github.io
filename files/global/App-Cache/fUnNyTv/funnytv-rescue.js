
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


//Funny Clips
if (pagename() === "CHANNEL 1"){
  $(".youmax").youmax({
                apiKey:"AIzaSyAlhAqP5RS7Gxwg_0r_rh9jOv_5WfaJgXw",
                	//apiKey:"AIzaSyC3lXNm8-OC5y3uFLUQjPkTCTP6qR7Bv0s", //CASTERO APPS LEARN KUNGFU [ NEW ]
					
                channelLink:"https://www.youtube.com/channel/UC-FD4KKrk5eURR_0r6ac58w",
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


//Fails
if (pagename() === "CHANNEL 2"){
  $(".youmax").youmax({
                apiKey:"AIzaSyAlhAqP5RS7Gxwg_0r_rh9jOv_5WfaJgXw",
                	//apiKey:"AIzaSyC3lXNm8-OC5y3uFLUQjPkTCTP6qR7Bv0s", //CASTERO APPS LEARN KUNGFU [ NEW ]
					
                channelLink:"https://www.youtube.com/channel/UC2SsAVII74KAz0m8SXrmcvQ",
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


//Babies
if (pagename() === "CHANNEL 3"){
  $(".youmax").youmax({
                apiKey:"AIzaSyAlhAqP5RS7Gxwg_0r_rh9jOv_5WfaJgXw",
                	//apiKey:"AIzaSyC3lXNm8-OC5y3uFLUQjPkTCTP6qR7Bv0s", //CASTERO APPS LEARN KUNGFU [ NEW ]
					
                channelLink:"https://www.youtube.com/user/BabyClipsDaily",
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


//EMMANUELLA (NIGERIA)
if (pagename() === "CHANNEL 4"){
  $(".youmax").youmax({
                apiKey:"AIzaSyAlhAqP5RS7Gxwg_0r_rh9jOv_5WfaJgXw",
                	//apiKey:"AIzaSyC3lXNm8-OC5y3uFLUQjPkTCTP6qR7Bv0s", //CASTERO APPS LEARN KUNGFU [ NEW ]
					
                channelLink:"https://www.youtube.com/user/MarkAngelComedy",
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


//KALLY BOS (GHANA)
if (pagename() === "CHANNEL 5"){
  $(".youmax").youmax({
                apiKey:"AIzaSyAlhAqP5RS7Gxwg_0r_rh9jOv_5WfaJgXw",
                //apiKey:"AIzaSyC3lXNm8-OC5y3uFLUQjPkTCTP6qR7Bv0s", //CASTERO APPS LEARN KUNGFU [ NEW ]
				
                channelLink:"https://www.youtube.com/user/boyskasaghana/videos",
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


//Pets
if (pagename() === "CHANNEL 6"){
  $(".youmax").youmax({
                apiKey:"AIzaSyAlhAqP5RS7Gxwg_0r_rh9jOv_5WfaJgXw",
                //apiKey:"AIzaSyC3lXNm8-OC5y3uFLUQjPkTCTP6qR7Bv0s", //CASTERO APPS LEARN KUNGFU [ NEW ]
                
				//channelLink:"https://www.youtube.com/channel/UCcGJ1mFx0qN2nNVKWcKC45Q",
                channelLink:"https://www.youtube.com/channel/UCI4zH_MQz6NisQQaKj7TasQ",
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


//WhatsApp
if (pagename() === "CHANNEL 7"){
  $(".youmax").youmax({
                apiKey:"AIzaSyAlhAqP5RS7Gxwg_0r_rh9jOv_5WfaJgXw",
                //apiKey:"AIzaSyC3lXNm8-OC5y3uFLUQjPkTCTP6qR7Bv0s", //CASTERO APPS LEARN KUNGFU [ NEW ]
                
				//channelLink:"https://www.youtube.com/channel/UCcGJ1mFx0qN2nNVKWcKC45Q",
                channelLink:"https://www.youtube.com/channel/UClPjfqyU9vrAxb2K_CUPTeA",
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


//Sports
if (pagename() === "CHANNEL 8"){
  $(".youmax").youmax({
                apiKey:"AIzaSyAlhAqP5RS7Gxwg_0r_rh9jOv_5WfaJgXw",
                //apiKey:"AIzaSyC3lXNm8-OC5y3uFLUQjPkTCTP6qR7Bv0s", //CASTERO APPS LEARN KUNGFU [ NEW ]
                
				//channelLink:"https://www.youtube.com/channel/UCcGJ1mFx0qN2nNVKWcKC45Q",
                channelLink:"https://www.youtube.com/channel/UCjXt2Jma9pQSw2ZwalG6qXQ",
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


//Cartoons
if (pagename() === "CHANNEL 9"){
  $(".youmax").youmax({
                apiKey:"AIzaSyAlhAqP5RS7Gxwg_0r_rh9jOv_5WfaJgXw",
                //apiKey:"AIzaSyC3lXNm8-OC5y3uFLUQjPkTCTP6qR7Bv0s", //CASTERO APPS LEARN KUNGFU [ NEW ]
                
				//channelLink:"https://www.youtube.com/channel/UCcGJ1mFx0qN2nNVKWcKC45Q",
                channelLink:"https://www.youtube.com/channel/UCi0vvYE1OQoG25FCSoPGTRw",
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


//Wild Life
if (pagename() === "CHANNEL 10"){
  $(".youmax").youmax({
                apiKey:"AIzaSyAlhAqP5RS7Gxwg_0r_rh9jOv_5WfaJgXw",
                //apiKey:"AIzaSyC3lXNm8-OC5y3uFLUQjPkTCTP6qR7Bv0s", //CASTERO APPS LEARN KUNGFU [ NEW ]
                
				//channelLink:"https://www.youtube.com/channel/UCcGJ1mFx0qN2nNVKWcKC45Q",
                channelLink:"https://www.youtube.com/user/Animatedcams",
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


//Pranks
if (pagename() === "CHANNEL 11"){
  $(".youmax").youmax({
                apiKey:"AIzaSyAlhAqP5RS7Gxwg_0r_rh9jOv_5WfaJgXw",
                //apiKey:"AIzaSyC3lXNm8-OC5y3uFLUQjPkTCTP6qR7Bv0s", //CASTERO APPS LEARN KUNGFU [ NEW ]
                
				//channelLink:"https://www.youtube.com/channel/UCcGJ1mFx0qN2nNVKWcKC45Q",
                channelLink:"https://www.youtube.com/channel/UCcf0WYfeIkecTLQ_GzkBu1w",
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


//Instant Karma
if (pagename() === "CHANNEL 12"){
  $(".youmax").youmax({
                apiKey:"https://www.youtube.com/channel/UCv-LyelbTlUAOJRFhJV7Y1Q",
                //apiKey:"AIzaSyC3lXNm8-OC5y3uFLUQjPkTCTP6qR7Bv0s", //CASTERO APPS LEARN KUNGFU [ NEW ]
                
				//channelLink:"https://www.youtube.com/channel/UCcGJ1mFx0qN2nNVKWcKC45Q",
                channelLink:"https://www.youtube.com/channel/UC3Z6-WC-9Ei9IEBUTEBl4gQ",
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


//Awesome People
if (pagename() === "CHANNEL 13"){
  $(".youmax").youmax({
                apiKey:"https://www.youtube.com/user/Hadoukentheband",
                //apiKey:"AIzaSyC3lXNm8-OC5y3uFLUQjPkTCTP6qR7Bv0s", //CASTERO APPS LEARN KUNGFU [ NEW ]
                
				//channelLink:"https://www.youtube.com/channel/UCcGJ1mFx0qN2nNVKWcKC45Q",
                channelLink:"https://www.youtube.com/channel/UC3Z6-WC-9Ei9IEBUTEBl4gQ",
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


//LIL WIN (GHANA)
if (pagename() === "CHANNEL 14"){
  $(".youmax").youmax({
                apiKey:"AIzaSyAlhAqP5RS7Gxwg_0r_rh9jOv_5WfaJgXw",
                //apiKey:"AIzaSyC3lXNm8-OC5y3uFLUQjPkTCTP6qR7Bv0s", //CASTERO APPS LEARN KUNGFU [ NEW ]
                
				//channelLink:"https://www.youtube.com/channel/UCcGJ1mFx0qN2nNVKWcKC45Q",
                channelLink:"https://www.youtube.com/channel/UCEVDWC7RSk1LW7WkASmqeVA",
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


//Careless
if (pagename() === "CHANNEL 15"){
  $(".youmax").youmax({
                apiKey:"AIzaSyAlhAqP5RS7Gxwg_0r_rh9jOv_5WfaJgXw",
                //apiKey:"AIzaSyC3lXNm8-OC5y3uFLUQjPkTCTP6qR7Bv0s", //CASTERO APPS LEARN KUNGFU [ NEW ]
                
				//channelLink:"https://www.youtube.com/channel/UCcGJ1mFx0qN2nNVKWcKC45Q",
                channelLink:"https://www.youtube.com/channel/UCE6_fESnh9IOJDT7NzTfK7Q",
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


//Comedy
if (pagename() === "CHANNEL 16"){
  $(".youmax").youmax({
                apiKey:"https://www.youtube.com/user/comedycentral",
                //apiKey:"AIzaSyC3lXNm8-OC5y3uFLUQjPkTCTP6qR7Bv0s", //CASTERO APPS LEARN KUNGFU [ NEW ]
                
				//channelLink:"https://www.youtube.com/channel/UCcGJ1mFx0qN2nNVKWcKC45Q",
                channelLink:"https://www.youtube.com/channel/UC3Z6-WC-9Ei9IEBUTEBl4gQ",
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


//Adverts	
if (pagename() === "CHANNEL 17"){
  $(".youmax").youmax({
                apiKey:"AIzaSyAlhAqP5RS7Gxwg_0r_rh9jOv_5WfaJgXw",
                //apiKey:"AIzaSyC3lXNm8-OC5y3uFLUQjPkTCTP6qR7Bv0s", //CASTERO APPS LEARN KUNGFU [ NEW ]
                
				//channelLink:"https://www.youtube.com/channel/UCcGJ1mFx0qN2nNVKWcKC45Q",
                channelLink:"https://www.youtube.com/channel/UCc34puv2B8dTn25POI2zFgw",
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


//Games
if (pagename() === "CHANNEL 18"){
  $(".youmax").youmax({
                apiKey:"AIzaSyAlhAqP5RS7Gxwg_0r_rh9jOv_5WfaJgXw",
                //apiKey:"AIzaSyC3lXNm8-OC5y3uFLUQjPkTCTP6qR7Bv0s", //CASTERO APPS LEARN KUNGFU [ NEW ]
                
				//channelLink:"https://www.youtube.com/channel/UCcGJ1mFx0qN2nNVKWcKC45Q",
                channelLink:"https://www.youtube.com/channel/UCOpNcN46UbXVtpKMrmU4Abg",
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


//Animals	
if (pagename() === "CHANNEL 19"){
  $(".youmax").youmax({
                apiKey:"AIzaSyAlhAqP5RS7Gxwg_0r_rh9jOv_5WfaJgXw",
                //apiKey:"AIzaSyC3lXNm8-OC5y3uFLUQjPkTCTP6qR7Bv0s", //CASTERO APPS LEARN KUNGFU [ NEW ]
                
				//channelLink:"https://www.youtube.com/channel/UCcGJ1mFx0qN2nNVKWcKC45Q",
                channelLink:"https://www.youtube.com/user/ReMix69LK",
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


//Zoology
if (pagename() === "CHANNEL 20"){
  $(".youmax").youmax({
                apiKey:"AIzaSyAlhAqP5RS7Gxwg_0r_rh9jOv_5WfaJgXw",
                //apiKey:"AIzaSyC3lXNm8-OC5y3uFLUQjPkTCTP6qR7Bv0s", //CASTERO APPS LEARN KUNGFU [ NEW ]
                
				//channelLink:"https://www.youtube.com/channel/UCcGJ1mFx0qN2nNVKWcKC45Q",
                channelLink:"https://www.youtube.com/user/BreakingTrail",
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
	
VIDEOS ORDER
-------------
1.
Funny Clips	+
https://www.youtube.com/channel/UC-FD4KKrk5eURR_0r6ac58w
https://www.youtube.com/channel/UCPAt6mvC-wKunwKyiEeAxFQ

2.
Fails		+
https://www.youtube.com/channel/UC2SsAVII74KAz0m8SXrmcvQ
https://www.youtube.com/channel/UCGU4Skno0BqzVkm0FSW0quw

3.
Babies		+
https://www.youtube.com/user/BabyClipsDaily

4.
EMMANUELLA (NIGERIA)
https://www.youtube.com/user/MarkAngelComedy

5.
KALLY BOS (GHANA)
https://www.youtube.com/user/boyskasaghana/videos

6.
Pets		+
https://www.youtube.com/channel/UCI4zH_MQz6NisQQaKj7TasQ
https://www.youtube.com/user/FunnyPetMedia


7.
WhatsApp	+
https://www.youtube.com/channel/UClPjfqyU9vrAxb2K_CUPTeA
https://www.youtube.com/channel/UCkrRmvFIB4yFVIY35M1LY7Q
https://www.youtube.com/channel/UCBJBrDzEtAqatiwVPxMrptg

8.
Sports		+
https://www.youtube.com/channel/UCjXt2Jma9pQSw2ZwalG6qXQ
https://www.youtube.com/channel/UCtmhIjZJ16fXfQ3O7UosZQg
https://www.youtube.com/channel/UClFZ58k3TunTz8QVp-9e1Vw
https://www.youtube.com/user/SportsBonanza

9.
Cartoons	+
https://www.youtube.com/channel/UCi0vvYE1OQoG25FCSoPGTRw

10.
Wild Life	+
https://www.youtube.com/user/Animatedcams

11.
Pranks		+
https://www.youtube.com/channel/UCcf0WYfeIkecTLQ_GzkBu1w
https://www.youtube.com/user/RomanAtwood
https://www.youtube.com/user/PrankvsPrank
https://www.youtube.com/user/DmPranksProductions

12.
Instant Karma +
https://www.youtube.com/channel/UCv-LyelbTlUAOJRFhJV7Y1Q
https://www.youtube.com/user/AdamThoomasMooran
https://www.youtube.com/channel/UCZaEY8Ad9Lafa_dOr2CqfcA
https://www.youtube.com/channel/UCFQWS_Lhb8OTXT4I_InMA_g

13.
Awesome People		+
https://www.youtube.com/user/Hadoukentheband

14.
LIL WIN (GHANA)
https://www.youtube.com/channel/UCEVDWC7RSk1LW7WkASmqeVA

15.
Careless	+
https://www.youtube.com/channel/UCE6_fESnh9IOJDT7NzTfK7Q

16.
Comedy		+
https://www.youtube.com/user/comedycentral

17.
Adverts		+
https://www.youtube.com/channel/UCc34puv2B8dTn25POI2zFgw

18.
Games		+
https://www.youtube.com/channel/UCOpNcN46UbXVtpKMrmU4Abg
https://www.youtube.com/user/GameSprout
https://www.youtube.com/user/DEpcgames
https://www.youtube.com/user/TelltaleGames
https://www.youtube.com/user/ThatcherJoeGames
https://www.youtube.com/user/BreefoortGameChannel
https://www.youtube.com/user/2jGaming001

19.
Animals	+
https://www.youtube.com/user/ReMix69LK

20.
Zoology
https://www.youtube.com/user/BreakingTrail

*/
	
