//= require jquery.rating
//= require spree/frontend
//= require spree/frontend/spree_auth

// Navigating to a page with ratings via TurboLinks shows the radio buttons
$(document).on('page:load', function () {
	$('input[type=radio].star').rating();
});

$('.stars').on('mouseenter', 'input', function(){
        DisplayRating($(this)); // when we hover into a label, show the ratings
    }
)
.on('mouseleave', function() {
    // when we leave the rating div, figure out which one is selected and show the correct rating level
    var $this = $(this),
        $selectedRating = $this.find('input:checked');
    if ($selectedRating.length == 1) {
        DisplayRating($selectedRating); // a rating has been selected, show the stars
    } else {
        $this.find('input').removeClass('star-active'); // nothing clicked, remove the stars
    };
})

var DisplayRating = function($el){
    // for the passed in element, add the 'on' class to this and all prev labels
    // and remove the 'on' class from all next labels. This stops the flicker of removing then adding back
    $el.addClass('star-active');
    $el.parent('input').addClass('star-active');
    $el.closest('span').prevAll().find('input').addClass('star-active');
    $el.closest('span').nextAll().find('input').removeClass('star-active');
};
