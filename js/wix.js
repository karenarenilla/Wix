
        .home-wrapper,
        .content {
            opacity: 0;
        }

        wix-menu
        {
            background-color: transparent !important;
            border-bottom: 0 solid #eff1f2 !important;
            border-bottom-width: 0;
            box-shadow: none !important;
        }
        .wm-user-state-wrapper .signin:hover {
            color: #fff !important;
            border-color: #fff!important;
        }

        .wm-user-state-wrapper .signin {
            color:  #121416!important;
            border-color: #121416!important;
        }

        .globeIcon svg path {
            fill: #121416!important;
        }

        .globeIcon:hover svg path {
            fill: #329fea!important;
        }

        #wix-menu:hover {
            background-color: rgba(255, 255, 255, .97) !important;
        }

        i, a, .home button {
            -webkit-font-smoothing: antialiased;
        }

    </style>

    <script>
        function clearVideos() {
            var video = document.getElementById('video-player') === null ? false : document.getElementById('video-player');
            if (video) {
                video.parentNode.removeChild(video);
            }
        }
        var clearVideosSrc = setTimeout(clearVideos, 7000);
        function canPlay() {
            if (!new RegExp(['MSIE', 'Trident', 'Edge'].join('|')).test(navigator.userAgent)) {
                clearTimeout(clearVideosSrc);
                var video = document.getElementById('video-player') === null ? false : document.getElementById('video-player');
                if (video) {
                    document.querySelector('.video-player-bg').style.opacity = '0';
                    setTimeout(function () {
                        video.play();
                    }, 400)
                }
            }else {
                var video = document.getElementById('video-player') === null ? false : document.getElementById('video-player');
                if (video) {
                    video.style.display = 'none';
                    var home = document.getElementById('home-fold');
                    home.style.backgroundImage = 'url(//static.parastorage.com/services/wix-homepage-davinci/1.182.0//images/header.jpg)';
                }
            }
        }
    </script>

<script async="" src="//static.hotjar.com/c/hotjar-147814.js?sv=5"></script><script src="https://script.hotjar.com/modules-47530b22b80c9e9ff9148b20f3025b56.js"></script><style type="text/css">iframe#_hjRemoteVarsFrame {display: none !important; width: 1px !important; height: 1px !important; opacity: 0 !important; pointer-events: none !important;}