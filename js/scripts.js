$(window).bind("load", function() {

	//Check which version of the nav bar is being used
	function checkNavBar() {
		if($('ul.tabbed-primary-navigation').length) {
			return $('ul.tabbed-primary-navigation');
		} else if($("ul[role='navigation']").length) {
			return $("ul[role='navigation']");
		} else if( $("ul#global-header").length ) {
			return $("ul#global-header");
		} else {
			console.log('no nav');
			return false;
		}
	}

	//Insert better browse into navigation bar
	function appendMenu() {
		mainNavBar = checkNavBar();
		var bbList = "";
		for (var i = 0; i <= hiddenCategories.length - 1; i++) {
			var thisUrl = '';

			if(hiddenCategories[i].url) {
				thisUrl = hiddenCategories[i].url;
			} else {
				thisUrl = 'https://www.netflix.com/browse/genre/' + hiddenCategories[i].genreId;
			}

			bbList += '<li><a href="' + thisUrl + '">' + hiddenCategories[i].name + '</a></li>';
		};
		$(mainNavBar).append(
			'<li id="better-browse"><span>Browse all</span><span class="caret" role="presentation"></span>'+
				'<div class="triangle"></div>'+
				'<ul>'+
					'<form id="bb-form">'+
						'<input type="textbox" id="bb-search" autocomplete="off" placeholder="Search..." />'+
					'</form>'+
					bbList +
				'</ul>'+
			'</li>'
		);

		//Search box
		var $rows = $("#better-browse li");
		
		$("#bb-search").keyup(function() {
			var val = $.trim($(this).val()).replace(/ +/g, ' ').toLowerCase();
			
			$rows.show().filter(function() {
				var text = $(this).text().replace(/\s+/g, ' ').toLowerCase();
				return !~text.indexOf(val);
			}).hide();
		});

		//Shortcuts
		$("#bb-form").submit(function(event){
			event.preventDefault();

			var inputCode = $( "#bb-search" ).val().toLowerCase();

			switch(inputCode) {
				case 'my list':
				case 'mylist':
				case 'me':
					goToUrl(inputCode, '/browse/my-list');
					break;
				case 'netflix originals':
				case 'originals':
				case 'original':
					goToUrl(inputCode, '/browse/originals');
					break;
				case 'new arrivals':
				case 'new':
					goToUrl(inputCode, '/browse/new-arrivals');
					break;
				case 'activity':
				case 'viewingactivity':
					goToUrl(inputCode, '/viewingactivity');
					break;
				case 'donottest':
					goToUrl(inputCode, '/DoNotTest');
					break;
				case 'home':
					goToUrl(inputCode, '/');
					break;
				case 'seen':
				case 'rated':
					goToUrl(inputCode, '/MoviesYouveSeen');
					break;
				case 'subtitles':
					goToUrl(inputCode, '/SubtitlePreferences');
					break;
				case 'tv':
					goToUrl(inputCode, '/browse/genre/83');
					break;
				case 'action':
				case 'adventure':
					goToUrl(inputCode, '/browse/genre/1365');
					break;
				case 'anime':
					goToUrl(inputCode, '/browse/genre/7424');
					break;
				case 'book':
				case 'books':
					goToUrl(inputCode, '/browse/genre/9889');
					break;
				case 'british':
					goToUrl(inputCode, '/browse/genre/10757');
					break;
				case 'classic':
					goToUrl(inputCode, '/browse/genre/31574');
					break;
				case 'comedies':
				case 'comedy':
					goToUrl(inputCode, '/browse/genre/6548');
					break;
				case 'controversial':
					goToUrl(inputCode, '/browse/genre/100036');
					break;
				case 'crime':
					goToUrl(inputCode, '/browse/genre/5824');
					break;
				case 'cult':
					goToUrl(inputCode, '/browse/genre/7627');
					break;
				case 'dark':
					goToUrl(inputCode, '/browse/genre/100037');
					break;
				case 'disney':
					goToUrl(inputCode, '/browse/genre/67673');
					break;
				case 'documentaries':
				case 'docs':
					goToUrl(inputCode, '/browse/genre/6839');
					break;
				case 'dramas':
				case 'drama':
					goToUrl(inputCode, '/browse/genre/5763');
					break;
				case 'gay and lesbian':
				case 'gay':
				case 'lesbian':
				case 'lgbt':
					goToUrl(inputCode, '/browse/genre/5977');
					break;
				case 'german':
					goToUrl(inputCode, '/browse/genre/58886');
					break;
				case 'ghibli':
					goToUrl(inputCode, '/browse/genre/81227213');
					break;
				case 'halloween':
					goToUrl(inputCode, '/browse/genre/108663');
					break;
				case 'horror':
					goToUrl(inputCode, '/browse/genre/8711');
					break;
				case 'independent':
				case 'indie':
					goToUrl(inputCode, '/browse/genre/7077');
					break;
				case 'international':
				case 'foreign':
					goToUrl(inputCode, '/browse/genre/78367');
					break;
				case 'kids and family':
				case 'kids':
				case 'family':
					goToUrl(inputCode, '/browse/genre/783');
					break;
				case 'music':
					goToUrl(inputCode, '/browse/genre/1701');
					break;
				case 'musicals':
				case 'musical':
					goToUrl(inputCode, '/browse/genre/13335');
					break;
				case 'romance':
					goToUrl(inputCode, '/browse/genre/8883');
					break;
				case 'sci-fi':
				case 'sci fi':
				case 'scifi':
					goToUrl(inputCode, '/browse/genre/1492');
					break;
				case 'special interest':
					goToUrl(inputCode, '/browse/genre/6814');
					break;
				case 'sports':
				case 'sport':
					goToUrl(inputCode, '/browse/genre/4370');
					break;
				case 'talk shows and stand-up':
				case 'talk shows':
				case 'stand-up':
				case 'standup':
					goToUrl(inputCode, '/browse/genre/1516534');
					break;
				case 'thrillers':
				case 'thriller':
					goToUrl(inputCode, '/browse/genre/8933');
					break;

				case 'fassbender':
					goToUrl(inputCode, '/browse/person/30036344');
					break;
				case 'louis ck':
				case 'louise ck':
					goToUrl(inputCode, '/browse/person/20028446');
					break;

				case '4k':
					goToUrl(inputCode, '/search?q=4k&suggestionId=1800000_merch');
					break;
				case 'atmos':
					goToUrl(inputCode, '/search?q=atmos&suggestionId=2200000_merch');
					break;
				case 'hdr':
					goToUrl(inputCode, '/search?q=hdr&suggestionId=1900000_merch');
					break;

				case 'always sunny':
				case 'iasip':
					goToUrl(inputCode, '/title/70136141');
					break;
				case 'office':
				case 'the office':
					goToUrl(inputCode, '/title/70136112');
					break;
				case 'peepshow':
				case 'peep show':
					goToUrl(inputCode, '/title/70217140');
					break;
				case 'tiger':
				case 'tiger king':
				case 'the tiger king':
					goToUrl(inputCode, '/title/81130220');
					break;

				case 'jambon':
					messageAlert(inputCode, 'Hello there');
					break;
				case 'random':
				case 'rand':
					var randomCatNumber = Math.floor(Math.random()*(hiddenCategories.length + 1));
					var randomCatUrl = '/browse/genre/' + hiddenCategories[randomCatNumber].genreId;
					ga('send', 'event', 'Shortcut', 'InputCode', inputCode);
					$(location).attr('href', randomCatUrl);
					break;

				default:
					ga('send', 'event', 'NetflixSearch', 'InputCode', inputCode);
					var thisUrl = '/search?q=' + inputCode;
					$(location).attr('href', thisUrl);
			}
		});

		$('#better-browse ul li a').each(function(){
			var thisCategory = $(this).text();
			$(this).click(function(){
				ga('send', 'event', 'Category', 'Click', thisCategory);
			});
		});

	}

	//Check if menu exists, if not, menu appears after clicking .profile-link
	appendMenu();

	// append menu after clicking .profile-link
	$(".profile-link").on('click', function(){
		setTimeout(function(){
			appendMenu();
		}, 10)
	});

	//Append menu after clicking back button after watching a film
	$(document).on("click", ".button-bvuiExit, .WatchNext-action-buttons a:first-child", function(){
		setTimeout(function() {
			appendMenu();
		}, 100);
	});

	//Shortcut functions
	function goToUrl(code, url) {
		ga('send', 'event', 'Shortcut', 'InputCode', code);
		$(function(){
			$(location).attr('href', url);
		}); 
	}
	function messageAlert(code, message) {
		ga('send', 'event', 'Message', 'InputCode', code);
		alert(message);
	}

});
