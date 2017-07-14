  /*
 ***************************************
*		 * CODED FRAMEWORK *  			*
*	DEVELOPED BY: CASTERO - KUMASI		*
*										*
*			  AKA: CODED				*
 ***************************************
*/

//                -- PRELOADERS --


//allUIfixes
$( '#infocontainer, #all-content, #ExternalPage' ).scroll(function() {
	$("body").attr('style', 'width: 100vw !important; top: 0px !important; border: none !important');
	$(".goog-te-banner-frame").attr('style', 'visibility: hidden');
	$(".goog-tooltip").attr('style', 'visibility: hidden !important');
	$(".goog-logo-link").attr('href', '#');
	});

 function allUIfixes () {
	$("body").attr('style', 'width: 100vw !important; top: 0px !important; border: none !important');
	$("#infocontainer").attr('style', 'width: 100% !important');
	$("#all-content").attr('style', 'width: 90vw !important');
	document.getElementById("all-content").style.background = "none";
	document.getElementById("infocontainer").style.background = "none";
 };

setTimeout(allUIfixes, 2000);
	  
//localize
/*
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
*/
		
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
	$(".goog-logo-link").attr('href', '#');
	
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
	$("#goog-gt-tt").attr('style', 'visibility: hidden !important');
	$(".goog-tooltip").attr('style', 'visibility: hidden !important');
	$(".goog-logo-link").attr('href', '#');
	 
	if($("iframe").contents().find('.goog-te-button').length){
		$(".goog-te-banner-frame").attr('style', 'visibility: hidden');
	 };
};

//localize
localize ();


 /*
 
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
 
 */
