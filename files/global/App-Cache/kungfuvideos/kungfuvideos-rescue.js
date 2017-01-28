
        $(document).ready(function(){

            $(".youmax").youmax({
                apiKey:"AIzaSyAlhAqP5RS7Gxwg_0r_rh9jOv_5WfaJgXw",

                channelLink:"https://www.youtube.com/user/shemmati10yt",
                playlistLink:"https://www.youtube.com/?listType=user_uploads&list=shemmati10yt",
                
                defaultTab:"Uploads",         //Uploads|Playlists|Featured
                videoDisplayMode:"popup",       //popup|link|inline

                maxResults:"20",
                autoPlay:false,
                displayFirstVideoOnLoad:true,       //for inline video display mode only
                

                responsiveBreakpoints   :[600,900,2000,2500],

                loadMoreText            :"<i class=\"fa fa-plus\"></i>&nbsp;&nbsp;Show me more videos..",
                previousButtonText      :"<i class=\"fa fa-angle-left\"></i>&nbsp;&nbsp;Previous",
                nextButtonText          :"Next&nbsp;&nbsp;<i class=\"fa fa-angle-right\"></i>",
                loadingText             :"loading...",
                allDoneText             :"<i class=\"fa fa-times\"></i>&nbsp;&nbsp;All done..",

                hideHeader              :false,
                hideTabs                :false,
                hideLoadingMechanism    :false,


            });
        });
