$(window).bind("load", function() {

	//Insert better browse into navigation bar
	function appendMenu() {
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

		$("ul[role='navigation']").append(
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
				case 'donottest':
					goToUrl(inputCode, '/DoNotTest');
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
					goToUrl(inputCode, '/browse/genre/5977');
					break;
				case 'german':
					goToUrl(inputCode, '/browse/genre/58886');
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
				case 'always sunny':
				case 'iasip':
					goToUrl(inputCode, '/title/70136141');
					break;
				case 'brba':
					goToUrl(inputCode, '/title/70143836');
					break;
				case 'peepshow':
					goToUrl(inputCode, '/title/70217140');
					break;
				case 'ffly':
					messageAlert(inputCode, 'Curse your sudden but inevitable betrayal!');
					goToUrl(inputCode, '/title/70202753');
					break;
				case 'ram':
					goToUrl(inputCode, '/title/80014749');
					break;
				case 'jambon':
					messageAlert(inputCode, 'Matey');
					break;
				case 'bb-about':
					messageAlert(inputCode, 'Created by Jamie Lee\nversion: 1.1.1');
					break;
				case 'test':
					messageAlert(inputCode, 'test working');
					break;
				case 'random':
				case 'rand':
					var randomCatNumber = Math.floor(Math.random()*(hiddenCategories.length + 1));
					var randomCatUrl = '/browse/genre/' + hiddenCategories[randomCatNumber].genreId;
					ga('send', 'event', 'Shortcut', 'InputCode', inputCode);
					$(location).attr('href', randomCatUrl);
				default:
					ga('send', 'event', 'Mistype', 'InputCode', inputCode);
					break;
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
	if( $("ul[role='navigation']").length ) {
		appendMenu();
	 } else {
		$(".profile-link").click(function(){
			appendMenu();
			setTimeout(appendMenu, 10);
		});
	}

	//Append menu after clicking back button after watching a film
	$(document).on("click", ".player-back-to-browsing", function(){
		appendMenu();
		setTimeout(appendMenu, 100);
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