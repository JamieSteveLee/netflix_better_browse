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
			
			goToUrl("my list", "/browse/my-list");
			goToUrl("mylist", "/browse/my-list");
			goToUrl("me", "/browse/my-list");
			goToUrl("netflix originals", "/browse/originals");
			goToUrl("originals", "/browse/originals");
			goToUrl("original", "/browse/originals");
			goToUrl("new arrivals", "/browse/new-arrivals");
			goToUrl("new", "/browse/new-arrivals");

			goToUrl("tv", "/browse/genre/83");
			goToUrl("action", "/browse/genre/1365");
			goToUrl("adventure", "/browse/genre/1365");
			goToUrl("anime", "/browse/genre/7424");
			goToUrl("book", "/browse/genre/9889");
			goToUrl("books", "/browse/genre/9889");
			goToUrl("british", "/browse/genre/10757");
			goToUrl("classic", "/browse/genre/31574");
			goToUrl("comedies", "/browse/genre/6548");
			goToUrl("comedy", "/browse/genre/6548");
			goToUrl("crime", "/browse/genre/5824");
			goToUrl("cult", "/browse/genre/7627");
			goToUrl("documentaries", "/browse/genre/6839");
			goToUrl("docs", "/browse/genre/6839");
			goToUrl("dramas", "/browse/genre/5763");
			goToUrl("drama", "/browse/genre/5763");
			goToUrl("gay and lesbian", "/browse/genre/5977");
			goToUrl("gay", "/browse/genre/5977");
			goToUrl("lesbian", "/browse/genre/5977");
			goToUrl("german", "/browse/genre/58886");
			goToUrl("halloween", "/browse/genre/108663");
			goToUrl("horror", "/browse/genre/8711");
			goToUrl("independent", "/browse/genre/7077");
			goToUrl("indie", "/browse/genre/7077");
			goToUrl("international", "/browse/genre/78367");
			goToUrl("foreign", "/browse/genre/78367");
			goToUrl("kids and family", "/browse/genre/783");
			goToUrl("kids", "/browse/genre/783");
			goToUrl("family", "/browse/genre/783");
			goToUrl("musicals", "/browse/genre/13335");
			goToUrl("musical", "/browse/genre/13335");
			goToUrl("romance", "/browse/genre/8883");
			goToUrl("sci-fi", "/browse/genre/1492");
			goToUrl("sci fi", "/browse/genre/1492");
			goToUrl("scifi", "/browse/genre/1492");
			goToUrl("special interest", "/browse/genre/6814");
			goToUrl("sports", "/browse/genre/4370");
			goToUrl("sport", "/browse/genre/4370");
			goToUrl("talk shows and stand-up", "/browse/genre/1516534");
			goToUrl("talk shows", "/browse/genre/1516534");
			goToUrl("stand-up", "/browse/genre/1516534");
			goToUrl("standup", "/browse/genre/1516534");
			goToUrl("thrillers", "/browse/genre/8933");
			goToUrl("thriller", "/browse/genre/8933");

			goToUrl("always sunny", "/title/70136141");
			goToUrl("iasip", "/title/70136141");
			goToUrl("brba", "/title/70143836");
			messageAlert("ffly", "Curse your sudden but inevitable betrayal!");
			goToUrl("ffly", "/title/70202753");
			goToUrl("king of spades", "/title/70125231");
			goToUrl("ram", "/title/80014749");

			messageAlert("jambon", "Matey");

			//Random category
			if ( $( "#bb-search" ).val().toLowerCase() === "random" ) {
				var randomCatNumber = Math.floor(Math.random()*(hiddenCategories.length + 1));
				var randomCatUrl = hiddenCategories[randomCatNumber].link;
				$(location).attr('href', randomCatUrl);
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
		if ( $( "#bb-search" ).val().toLowerCase() === code ) {
			ga('send', 'event', 'Shortcut', 'InputCode', code);
			$(function(){
				$(location).attr('href', url);
			}); 
		}
	}
	function messageAlert(code, message) {
		if ( $( "#bb-search" ).val().toLowerCase() === code ) {
			ga('send', 'event', 'Message', 'InputCode', code);
			alert(message); 
		}
	}

});