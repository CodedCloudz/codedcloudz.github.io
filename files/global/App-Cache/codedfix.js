  /*
 ***************************************
*		 * CODED FRAMEWORK *  			*
*	DEVELOPED BY: CASTERO - KUMASI		*
*										*
*			  AKA: CODED				*
 ***************************************
*/

//ADMOB SETTINGS UNIVERSAL
//initialize the goodies 
function initAdNew(){
        if ( window.plugins && window.plugins.AdMob ) {
            var ad_units = {
                ios : {
                    banner: 'ca-app-pub-xxxxxxxxxxx/xxxxxxxxxxx',		//PUT ADMOB ADCODE HERE 
                    interstitial: 'ca-app-pub-xxxxxxxxxxx/xxxxxxxxxxx'	//PUT ADMOB ADCODE HERE 
                },
                android : {
                    banner: 'ca-app-pub-8484576454123628/6147471196',		//PUT ADMOB ADCODE HERE 
                    interstitial: 'ca-app-pub-8484576454123628/9100937599'	//PUT ADMOB ADCODE HERE 
                }
            };
            var admobid = ( /(android)/i.test(navigator.userAgent) ) ? ad_units.android : ad_units.ios;
 
            window.plugins.AdMob.setOptions( {
                publisherId: admobid.banner,
                interstitialAdId: admobid.interstitial,
                adSize: window.plugins.AdMob.AD_SIZE.SMART_BANNER,	//use SMART_BANNER, BANNER, LARGE_BANNER, IAB_MRECT, IAB_BANNER, IAB_LEADERBOARD 
                bannerAtTop: false, // set to true, to put banner at top 
                overlap: true, // banner will overlap webview 
                offsetTopBar: false, // set to true to avoid ios7 status bar overlap 
                isTesting: false, // receiving test ad 
                autoShow: true // auto show interstitial ad when loaded 
            });
 
            registerAdEvents();
        } else {
            //alert( 'admob plugin not ready' ); 
        }
}

//functions to allow you to know when ads are shown, etc. 
function registerAdEvents() {
        document.addEventListener('onReceiveAd', function(){});
        document.addEventListener('onFailedToReceiveAd', function(data){});
        document.addEventListener('onPresentAd', function(){});
        document.addEventListener('onDismissAd', function(){});
        document.addEventListener('onLeaveToAd', function(){});
        document.addEventListener('onReceiveInterstitialAd', function(){});
        document.addEventListener('onPresentInterstitialAd', function(){});
        document.addEventListener('onDismissInterstitialAd', function(){});
    }
 
  //display the banner 
function showBannerFunc(){
    window.plugins.AdMob.createBannerView();
	document.getElementsByClassName("mainfooter")[0].style.bottom = "8.5%"
	document.getElementsByClassName("adsbg")[0].style.display = "block"
} 

console.log ( 'New Ads settings Installed..' );

// initAdNew();
// showBannerFunc();
