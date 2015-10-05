var GIT = GIT || {};

(function ($, window, document, GIT, undefined) {
    GIT.buildTree = (function () {
        function _buildTree() {
            var $document = $(document),
                commandSelector = '.on-tree > a ',
                showScreenAnchor = '.show_screen',
                screenshootContainer = $('.screenshots'),
                backToTop = '#back-top',
                anchorBackToTop = '#back-top a',
                context = this;

            context.init = function() {
                // initialization here


                onHoverCommits();
                scrollingToDivs();
                toggleScreenShoots();
                scrollToTop();
            };

            var onHoverCommits = function() {
                // codeHere'
               $(commandSelector).mouseover(function(){
                   $(this).find('.flyOut').show();
               }).mouseout(function(){
                   $(this).find('.flyOut').hide();

               });
            };


            var toggleScreenShoots = function(){
                $(showScreenAnchor).on('click', function(e){
                    e.preventDefault();

                        screenshootContainer.delay(500).fadeToggle();


                });
            };

            var scrollingToDivs = function(){

                $('.on-tree > a[href^="#"]').on('click',function (e) {
                    e.preventDefault();
                    var target = $(this.hash);
                    target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
                    if (target.length) {
                        $('html, body').animate({
                            'scrollTop': target.offset().top
                        }, 1100);
                        return false;
                    }

                });
            };

            var scrollToTop = function(){

                $(window).scroll(function () {
                    if ($(this).scrollTop() > 300) {
                        $(backToTop).fadeIn().show();
                    } else {
                        $(backToTop).fadeOut();
                    }
                });

                // scroll body to 0px on click
                $(anchorBackToTop).click(function (e) {
                    e.preventDefault();
                    $('body,html').animate({
                        scrollTop: 0
                    }, 800);
                    return false;
                });

            };


            return context;
        }
        return new _buildTree();
    }());
}(jQuery,this, this.document, GIT));



$(function(){

     GIT.buildTree.init();








}());