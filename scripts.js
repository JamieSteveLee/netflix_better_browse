$(window).bind("load", function() {

	//Insert better browse into navigation bar
	function appendMenu() {
		$("ul[role='navigation']").append(
			'<li id="better-browse"><span>Browse all</span><span class="caret" role="presentation"></span>'+
			'<div class="triangle"></div>'+
			'<ul>'+
			'<input type="textbox" id="bb-search" placeholder="Search..." />'+
			'<li><a href="http://www.netflix.com/browse/genre/1365">Action &amp; Adventure</a></li>'+
			'<li><a href="http://www.netflix.com/browse/genre/43040">Action Comedies</a></li>'+
			'<li><a href="http://www.netflix.com/browse/genre/1568">Action Sci-Fi &amp; Fantasy</a></li>'+
			'<li><a href="http://www.netflix.com/browse/genre/43048">Action Thrillers</a></li>'+
			'<li><a href="http://www.netflix.com/browse/genre/11881">Adult Animation</a></li>'+
			'<li><a href="http://www.netflix.com/browse/genre/7442">Adventures</a></li>'+
			'<li><a href="http://www.netflix.com/browse/genre/3761">African Movies</a></li>'+
			'<li><a href="http://www.netflix.com/browse/genre/3327">Alien Sci-Fi</a></li>'+
			'<li><a href="http://www.netflix.com/browse/genre/5507">Animal Tales</a></li>'+
			'<li><a href="http://www.netflix.com/browse/genre/7424">Anime</a></li>'+
			'<li><a href="http://www.netflix.com/browse/genre/2653">Anime Action</a></li>'+
			'<li><a href="http://www.netflix.com/browse/genre/9302">Anime Comedies</a></li>'+
			'<li><a href="http://www.netflix.com/browse/genre/452">Anime Dramas</a></li>'+
			'<li><a href="http://www.netflix.com/browse/genre/11146">Anime Fantasy</a></li>'+
			'<li><a href="http://www.netflix.com/browse/genre/3063">Anime Features</a></li>'+
			'<li><a href="http://www.netflix.com/browse/genre/10695">Anime Horror</a></li>'+
			'<li><a href="http://www.netflix.com/browse/genre/2729">Anime Sci-Fi</a></li>'+
			'<li><a href="http://www.netflix.com/browse/genre/6721">Anime Series</a></li>'+
			'<li><a href="http://www.netflix.com/browse/genre/29764">Art House Movies</a></li>'+
			'<li><a href="http://www.netflix.com/browse/genre/77232">Asian Action Movies</a></li>'+
			'<li><a href="http://www.netflix.com/browse/genre/5230">Australian Movies</a></li>'+
			'<li><a href="http://www.netflix.com/browse/genre/8195">B-Horror Movies</a></li>'+
			'<li><a href="http://www.netflix.com/browse/genre/12339">Baseball Movies</a></li>'+
			'<li><a href="http://www.netflix.com/browse/genre/12762">Basketball Movies</a></li>'+
			'<li><a href="http://www.netflix.com/browse/genre/262">Belgian Movies</a></li>'+
			'<li><a href="http://www.netflix.com/browse/genre/3652">Biographical Documentaries</a></li>'+
			'<li><a href="http://www.netflix.com/browse/genre/3179">Biographical Dramas</a></li>'+
			'<li><a href="http://www.netflix.com/browse/genre/12443">Boxing Movies</a></li>'+
			'<li><a href="http://www.netflix.com/browse/genre/10757">British Movies</a></li>'+
			'<li><a href="http://www.netflix.com/browse/genre/52117">British TV Shows</a></li>'+
			'<li><a href="http://www.netflix.com/browse/genre/1252">Campy Movies</a></li>'+
			'<li><a href="http://www.netflix.com/browse/genre/783">Children &amp; Family Movies</a></li>'+
			'<li><a href="http://www.netflix.com/browse/genre/3960">Chinese Movies</a></li>'+
			'<li><a href="http://www.netflix.com/browse/genre/46576">Classic Action &amp; Adventure</a></li>'+
			'<li><a href="http://www.netflix.com/browse/genre/31694">Classic Comedies</a></li>'+
			'<li><a href="http://www.netflix.com/browse/genre/29809">Classic Dramas</a></li>'+
			'<li><a href="http://www.netflix.com/browse/genre/32473">Classic Foreign Movies</a></li>'+
			'<li><a href="http://www.netflix.com/browse/genre/31574">Classic Movies</a></li>'+
			'<li><a href="http://www.netflix.com/browse/genre/32392">Classic Musicals</a></li>'+
			'<li><a href="http://www.netflix.com/browse/genre/31273">Classic Romantic Movies</a></li>'+
			'<li><a href="http://www.netflix.com/browse/genre/47147">Classic Sci-Fi &amp; Fantasy</a></li>'+
			'<li><a href="http://www.netflix.com/browse/genre/46588">Classic Thrillers</a></li>'+
			'<li><a href="http://www.netflix.com/browse/genre/46553">Classic TV Shows</a></li>'+
			'<li><a href="http://www.netflix.com/browse/genre/48744">Classic War Movies</a></li>'+
			'<li><a href="http://www.netflix.com/browse/genre/47465">Classic Westerns</a></li>'+
			'<li><a href="http://www.netflix.com/browse/genre/6548">Comedies</a></li>'+
			'<li><a href="http://www.netflix.com/browse/genre/10118">Comic Book and Superhero Movies</a></li>'+
			'<li><a href="http://www.netflix.com/browse/genre/1105">Country &amp; Western/Folk</a></li>'+
			'<li><a href="http://www.netflix.com/browse/genre/528582748">Courtroom Dramas</a></li>'+
			'<li><a href="http://www.netflix.com/browse/genre/6895">Creature Features</a></li>'+
			'<li><a href="http://www.netflix.com/browse/genre/9584">Crime Action &amp; Adventure</a></li>'+
			'<li><a href="http://www.netflix.com/browse/genre/9875">Crime Documentaries</a></li>'+
			'<li><a href="http://www.netflix.com/browse/genre/6889">Crime Dramas</a></li>'+
			'<li><a href="http://www.netflix.com/browse/genre/10499">Crime Thrillers</a></li>'+
			'<li><a href="http://www.netflix.com/browse/genre/26146">Crime TV Shows</a></li>'+
			'<li><a href="http://www.netflix.com/browse/genre/9434">Cult Comedies</a></li>'+
			'<li><a href="http://www.netflix.com/browse/genre/10944">Cult Horror Movies</a></li>'+
			'<li><a href="http://www.netflix.com/browse/genre/7627">Cult Movies</a></li>'+
			'<li><a href="http://www.netflix.com/browse/genre/4734">Cult Sci-Fi &amp; Fantasy</a></li>'+
			'<li><a href="http://www.netflix.com/browse/genre/74652">Cult TV Shows</a></li>'+
			'<li><a href="http://www.netflix.com/browse/genre/869">Dark Comedies</a></li>'+
			'<li><a href="http://www.netflix.com/browse/genre/45028">Deep Sea Horror Movies</a></li>'+
			'<li><a href="http://www.netflix.com/browse/genre/67673">Disney</a></li>'+
			'<li><a href="http://www.netflix.com/browse/genre/59433">Disney Musicals</a></li>'+
			'<li><a href="http://www.netflix.com/browse/genre/6839">Documentaries</a></li>'+
			'<li><a href="http://www.netflix.com/browse/genre/5763">Dramas</a></li>'+
			'<li><a href="http://www.netflix.com/browse/genre/4961">Dramas based on Books</a></li>'+
			'<li><a href="http://www.netflix.com/browse/genre/3653">Dramas based on real life</a></li>'+
			'<li><a href="http://www.netflix.com/browse/genre/10606">Dutch Movies</a></li>'+
			'<li><a href="http://www.netflix.com/browse/genre/5254">Eastern European Movies</a></li>'+
			'<li><a href="http://www.netflix.com/browse/genre/10659">Education for Kids</a></li>'+
			'<li><a href="http://www.netflix.com/browse/genre/52858">Epics</a></li>'+
			'<li><a href="http://www.netflix.com/browse/genre/11079">Experimental Movies</a></li>'+
			'<li><a href="http://www.netflix.com/browse/genre/26835">Faith &amp; Spirituality</a></li>'+
			'<li><a href="http://www.netflix.com/browse/genre/52804">Faith &amp; Spirituality Movies</a></li>'+
			'<li><a href="http://www.netflix.com/browse/genre/51056">Family Features</a></li>'+
			'<li><a href="http://www.netflix.com/browse/genre/9744">Fantasy Movies</a></li>'+
			'<li><a href="http://www.netflix.com/browse/genre/7687">Film Noir</a></li>'+
			'<li><a href="http://www.netflix.com/browse/genre/72436">Food &amp; Travel TV</a></li>'+
			'<li><a href="http://www.netflix.com/browse/genre/12803">Football Movies</a></li>'+
			'<li><a href="http://www.netflix.com/browse/genre/11828">Foreign Action &amp; Adventure</a></li>'+
			'<li><a href="http://www.netflix.com/browse/genre/4426">Foreign Comedies</a></li>'+
			'<li><a href="http://www.netflix.com/browse/genre/5161">Foreign Documentaries</a></li>'+
			'<li><a href="http://www.netflix.com/browse/genre/2150">Foreign Dramas</a></li>'+
			'<li><a href="http://www.netflix.com/browse/genre/8243">Foreign Gay &amp; Lesbian Movies</a></li>'+
			'<li><a href="http://www.netflix.com/browse/genre/8654">Foreign Horror Movies</a></li>'+
			'<li><a href="http://www.netflix.com/browse/genre/7462">Foreign Movies</a></li>'+
			'<li><a href="http://www.netflix.com/browse/genre/6485">Foreign Sci-Fi &amp; Fantasy</a></li>'+
			'<li><a href="http://www.netflix.com/browse/genre/10306">Foreign Thrillers</a></li>'+
			'<li><a href="http://www.netflix.com/browse/genre/58807">French Movies</a></li>'+
			'<li><a href="http://www.netflix.com/browse/genre/31851">Gangster Movies</a></li>'+
			'<li><a href="http://www.netflix.com/browse/genre/500">Gay &amp; Lesbian Dramas</a></li>'+
			'<li><a href="http://www.netflix.com/browse/genre/58886">German Movies</a></li>'+
			'<li><a href="http://www.netflix.com/browse/genre/61115">Greek Movies</a></li>'+
			'<li><a href="http://www.netflix.com/browse/genre/5349">Historical Documentaries</a></li>'+
			'<li><a href="http://www.netflix.com/browse/genre/89585">Horror Comedy</a></li>'+
			'<li><a href="http://www.netflix.com/browse/genre/8711">Horror Movies</a></li>'+
			'<li><a href="http://www.netflix.com/browse/genre/11804">Independent Action &amp; Adventure</a></li>'+
			'<li><a href="http://www.netflix.com/browse/genre/4195">Independent Comedies</a></li>'+
			'<li><a href="http://www.netflix.com/browse/genre/384">Independent Dramas</a></li>'+
			'<li><a href="http://www.netflix.com/browse/genre/7077">Independent Movies</a></li>'+
			'<li><a href="http://www.netflix.com/browse/genre/3269">Independent Thrillers</a></li>'+
			'<li><a href="http://www.netflix.com/browse/genre/10463">Indian Movies</a></li>'+
			'<li><a href="http://www.netflix.com/browse/genre/58750">Irish Movies</a></li>'+
			'<li><a href="http://www.netflix.com/browse/genre/8221">Italian Movies</a></li>'+
			'<li><a href="http://www.netflix.com/browse/genre/10398">Japanese Movies</a></li>'+
			'<li><a href="http://www.netflix.com/browse/genre/10271">Jazz &amp; Easy Listening</a></li>'+
			'<li><a href="http://www.netflix.com/browse/genre/751423">Kids Faith &amp; Spirituality</a></li>'+
			'<li><a href="http://www.netflix.com/browse/genre/52843">Kids Music</a></li>'+
			'<li><a href="http://www.netflix.com/browse/genre/27346">Kids’ TV</a></li>'+
			'<li><a href="http://www.netflix.com/browse/genre/5685">Korean Movies</a></li>'+
			'<li><a href="http://www.netflix.com/browse/genre/67879">Korean TV Shows</a></li>'+
			'<li><a href="http://www.netflix.com/browse/genre/1402">Late Night Comedies</a></li>'+
			'<li><a href="http://www.netflix.com/browse/genre/1613">Latin American Movies</a></li>'+
			'<li><a href="http://www.netflix.com/browse/genre/10741">Latin Music</a></li>'+
			'<li><a href="http://www.netflix.com/browse/genre/8985">Martial Arts Movies</a></li>'+
			'<li><a href="http://www.netflix.com/browse/genre/6695">Martial Arts, Boxing &amp; Wrestling</a></li>'+
			'<li><a href="http://www.netflix.com/browse/genre/5875">Middle Eastern Movies</a></li>'+
			'<li><a href="http://www.netflix.com/browse/genre/2125">Military Action &amp; Adventure</a></li>'+
			'<li><a href="http://www.netflix.com/browse/genre/4006">Military Documentaries</a></li>'+
			'<li><a href="http://www.netflix.com/browse/genre/11">Military Dramas</a></li>'+
			'<li><a href="http://www.netflix.com/browse/genre/25804">Military TV Shows</a></li>'+
			'<li><a href="http://www.netflix.com/browse/genre/4814">Miniseries</a></li>'+
			'<li><a href="http://www.netflix.com/browse/genre/26">Mockumentaries</a></li>'+
			'<li><a href="http://www.netflix.com/browse/genre/947">Monster Movies</a></li>'+
			'<li><a href="http://www.netflix.com/browse/genre/10056">Movies based on children’s books</a></li>'+
			'<li><a href="http://www.netflix.com/browse/genre/6796">Movies for ages 0 to 2</a></li>'+
			'<li><a href="http://www.netflix.com/browse/genre/6218">Movies for ages 2 to 4</a></li>'+
			'<li><a href="http://www.netflix.com/browse/genre/5455">Movies for ages 5 to 7</a></li>'+
			'<li><a href="http://www.netflix.com/browse/genre/561">Movies for ages 8 to 10</a></li>'+
			'<li><a href="http://www.netflix.com/browse/genre/6962">Movies for ages 11 to 12</a></li>'+
			'<li><a href="http://www.netflix.com/browse/genre/90361">Music &amp; Concert Documentaries</a></li>'+
			'<li><a href="http://www.netflix.com/browse/genre/1701">Music</a></li>'+
			'<li><a href="http://www.netflix.com/browse/genre/13335">Musicals</a></li>'+
			'<li><a href="http://www.netflix.com/browse/genre/9994">Mysteries</a></li>'+
			'<li><a href="http://www.netflix.com/browse/genre/63782">New Zealand Movies</a></li>'+
			'<li><a href="http://www.netflix.com/browse/genre/12123">Period Pieces</a></li>'+
			'<li><a href="http://www.netflix.com/browse/genre/2700">Political Comedies</a></li>'+
			'<li><a href="http://www.netflix.com/browse/genre/7018">Political Documentaries</a></li>'+
			'<li><a href="http://www.netflix.com/browse/genre/6616">Political Dramas</a></li>'+
			'<li><a href="http://www.netflix.com/browse/genre/10504">Political Thrillers</a></li>'+
			'<li><a href="http://www.netflix.com/browse/genre/5505">Psychological Thrillers</a></li>'+
			'<li><a href="http://www.netflix.com/browse/genre/36103">Quirky Romance</a></li>'+
			'<li><a href="http://www.netflix.com/browse/genre/9833">Reality TV</a></li>'+
			'<li><a href="http://www.netflix.com/browse/genre/10005">Religious Documentaries</a></li>'+
			'<li><a href="http://www.netflix.com/browse/genre/3278">Rock &amp; Pop Concerts</a></li>'+
			'<li><a href="http://www.netflix.com/browse/genre/5475">Romantic Comedies</a></li>'+
			'<li><a href="http://www.netflix.com/browse/genre/1255">Romantic Dramas</a></li>'+
			'<li><a href="http://www.netflix.com/browse/genre/502675">Romantic Favorites</a></li>'+
			'<li><a href="http://www.netflix.com/browse/genre/7153">Romantic Foreign Movies</a></li>'+
			'<li><a href="http://www.netflix.com/browse/genre/9916">Romantic Independent Movies</a></li>'+
			'<li><a href="http://www.netflix.com/browse/genre/8883">Romantic Movies</a></li>'+
			'<li><a href="http://www.netflix.com/browse/genre/11567">Russian</a></li>'+
			'<li><a href="http://www.netflix.com/browse/genre/6998">Satanic Stories</a></li>'+
			'<li><a href="http://www.netflix.com/browse/genre/4922">Satires</a></li>'+
			'<li><a href="http://www.netflix.com/browse/genre/9292">Scandinavian Movies</a></li>'+
			'<li><a href="http://www.netflix.com/browse/genre/1492">Sci-Fi &amp; Fantasy</a></li>'+
			'<li><a href="http://www.netflix.com/browse/genre/6926">Sci-Fi Adventure</a></li>'+
			'<li><a href="http://www.netflix.com/browse/genre/3916">Sci-Fi Dramas</a></li>'+
			'<li><a href="http://www.netflix.com/browse/genre/1694">Sci-Fi Horror Movies</a></li>'+
			'<li><a href="http://www.netflix.com/browse/genre/11014">Sci-Fi Thrillers</a></li>'+
			'<li><a href="http://www.netflix.com/browse/genre/2595">Science &amp; Nature Documentaries</a></li>'+
			'<li><a href="http://www.netflix.com/browse/genre/52780">Science &amp; Nature TV</a></li>'+
			'<li><a href="http://www.netflix.com/browse/genre/9702">Screwball Comedies</a></li>'+
			'<li><a href="http://www.netflix.com/browse/genre/5012">Showbiz Dramas</a></li>'+
			'<li><a href="http://www.netflix.com/browse/genre/13573">Showbiz Musicals</a></li>'+
			'<li><a href="http://www.netflix.com/browse/genre/53310">Silent Movies</a></li>'+
			'<li><a href="http://www.netflix.com/browse/genre/10256">Slapstick Comedies</a></li>'+
			'<li><a href="http://www.netflix.com/browse/genre/8646">Slasher and Serial Killer Movies</a></li>'+
			'<li><a href="http://www.netflix.com/browse/genre/12549">Soccer Movies</a></li>'+
			'<li><a href="http://www.netflix.com/browse/genre/3675">Social &amp; Cultural Documentaries</a></li>'+
			'<li><a href="http://www.netflix.com/browse/genre/3947">Social Issue Dramas</a></li>'+
			'<li><a href="http://www.netflix.com/browse/genre/9196">Southeast Asian Movies</a></li>'+
			'<li><a href="http://www.netflix.com/browse/genre/58741">Spanish Movies</a></li>'+
			'<li><a href="http://www.netflix.com/browse/genre/2760">Spiritual Documentaries</a></li>'+
			'<li><a href="http://www.netflix.com/browse/genre/9327">Sports &amp; Fitness</a></li>'+
			'<li><a href="http://www.netflix.com/browse/genre/5286">Sports Comedies</a></li>'+
			'<li><a href="http://www.netflix.com/browse/genre/180">Sports Documentaries</a></li>'+
			'<li><a href="http://www.netflix.com/browse/genre/7243">Sports Dramas</a></li>'+
			'<li><a href="http://www.netflix.com/browse/genre/4370">Sports Movies</a></li>'+
			'<li><a href="http://www.netflix.com/browse/genre/10702">Spy Action &amp; Adventure</a></li>'+
			'<li><a href="http://www.netflix.com/browse/genre/9147">Spy Thrillers</a></li>'+
			'<li><a href="http://www.netflix.com/browse/genre/55774">Stage Musicals</a></li>'+
			'<li><a href="http://www.netflix.com/browse/genre/11559">Stand-up Comedy</a></li>'+
			'<li><a href="http://www.netflix.com/browse/genre/35800">Steamy Romantic Movies</a></li>'+
			'<li><a href="http://www.netflix.com/browse/genre/972">Steamy Thrillers</a></li>'+
			'<li><a href="http://www.netflix.com/browse/genre/42023">Supernatural Horror Movies</a></li>'+
			'<li><a href="http://www.netflix.com/browse/genre/11140">Supernatural Thrillers</a></li>'+
			'<li><a href="http://www.netflix.com/browse/genre/6384">Tearjerkers</a></li>'+
			'<li><a href="http://www.netflix.com/browse/genre/3519">Teen Comedies</a></li>'+
			'<li><a href="http://www.netflix.com/browse/genre/9299">Teen Dramas</a></li>'+
			'<li><a href="http://www.netflix.com/browse/genre/52147">Teen Screams</a></li>'+
			'<li><a href="http://www.netflix.com/browse/genre/60951">Teen TV Shows</a></li>'+
			'<li><a href="http://www.netflix.com/browse/genre/8933">Thrillers</a></li>'+
			'<li><a href="http://www.netflix.com/browse/genre/1159">Travel &amp; Adventure Documentaries</a></li>'+
			'<li><a href="http://www.netflix.com/browse/genre/10673">TV Action &amp; Adventure</a></li>'+
			'<li><a href="http://www.netflix.com/browse/genre/11177">TV Cartoons</a></li>'+
			'<li><a href="http://www.netflix.com/browse/genre/10375">TV Comedies</a></li>'+
			'<li><a href="http://www.netflix.com/browse/genre/10105">TV Documentaries</a></li>'+
			'<li><a href="http://www.netflix.com/browse/genre/11714">TV Dramas</a></li>'+
			'<li><a href="http://www.netflix.com/browse/genre/83059">TV Horror</a></li>'+
			'<li><a href="http://www.netflix.com/browse/genre/4366">TV Mysteries</a></li>'+
			'<li><a href="http://www.netflix.com/browse/genre/1372">TV Sci-Fi &amp; Fantasy</a></li>'+
			'<li><a href="http://www.netflix.com/browse/genre/83">TV Shows</a></li>'+
			'<li><a href="http://www.netflix.com/browse/genre/9472">Urban &amp; Dance Concerts</a></li>'+
			'<li><a href="http://www.netflix.com/browse/genre/75804">Vampire Horror Movies</a></li>'+
			'<li><a href="http://www.netflix.com/browse/genre/75930">Werewolf Horror Movies</a></li>'+
			'<li><a href="http://www.netflix.com/browse/genre/7700">Westerns</a></li>'+
			'<li><a href="http://www.netflix.com/browse/genre/2856">World Music Concerts</a></li>'+
			'<li><a href="http://www.netflix.com/browse/genre/75405">Zombie Horror Movies</a></li>'+
			'</ul>'+
			'</li>'
		);

		// Search box
		var $rows = $('#better-browse li');
		
		$('#bb-search').keyup(function() {
		    var val = $.trim($(this).val()).replace(/ +/g, ' ').toLowerCase();
		    
		    $rows.show().filter(function() {
		        var text = $(this).text().replace(/\s+/g, ' ').toLowerCase();
		        return !~text.indexOf(val);
		    }).hide();
		});
		
		console.log("MENU APPEND");
	}

	// Check if menu exists, if not, menu appears after clicking .profile-link
	if( $("ul[role='navigation']").length ) {
		appendMenu();
	} else {
		$(".profile-link").click(function(){
			appendMenu();
			setTimeout(appendMenu, 10)
		});
	}

});