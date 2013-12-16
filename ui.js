/**
 * 
 * Author: Onur CANALP <onurcanalp@siyyah.com>
 *
 * ui.js interface builders desem yeterli herhalde :)
 */

function starsForView(rating)
{
    var stars = [];

	if (rating % 1 != 0)
	var hasHalfStar = true;
	else
	var hasHalfStar = false;
	
	var emptyStarNum = 5 - rating;
	
	for (var i = 1; i <= rating; i++) {
        var star = Ti.UI.createImageView({
            height:24,
            width:24,
            left:5,
            backgroundImage: '/images/star.png'
        });
        
        stars.push(star);
	}
	
	if (hasHalfStar)
	{
		var star = Ti.UI.createImageView({
	        height:24,
	        width:24,
	        left:5,
	        backgroundImage: '/images/star_half.png'
	    });
	    stars.push(star);
	}
	
	for (var i = 0; i < emptyStarNum; i++) {
        var star = Ti.UI.createImageView({
            height:24,
            width:24,
            left:5,
            backgroundImage: '/images/star_off.png'
        });
        
        stars.push(star);
	}
return stars;
}

exports.starsForView	=	starsForView;