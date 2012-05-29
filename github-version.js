/**
* Copyright (C) 2012 Patrick Tully
*
* This program is free software: you can redistribute it and/or modify
* it under the terms of the GNU General Public License version 3,
* as published by the Free Software Foundation.
*
* This program is distributed in the hope that it will be useful,
* but WITHOUT ANY WARRANTY; without even the implied warranty of
* MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
* GNU General Public License for more details:
* <http://www.gnu.org/licenses/gpl-3.0.html>.
*/

$(function() {
    
    // Edit below to match username/repo
    var username = 'mrpatrick';
    var repo = 'github-version';    
    
    $.getJSON("http://github.com/api/v2/json/repos/show/"+username+"/"+repo+"/tags?callback=?", function(data){
	if(data.tags) {										
	    var version;
	    var commit;
	    for (var i in data.tags){
		version = i;
		commit = data.tags[i];
	    }
	    var version_full = version + " " + commit.substring(0,10);		
	    
	    // Display Version Only: set div id = github-version
	    $("div#github-version").text(version);		
	    
	    // Display Version and Commit: set div id = github-version-commit
	    $("div#github-version-commit").text(version_full);
	    
	    // Display Version and Commit and Link: set link id=github-version-commit-link
	    $("a#github-version-commit-link").text(version_full);	
	    $("a#github-version-commit-link").attr('href', 'https://github.com/' + username + '/' + repo + '/commit/' + commit);
	}
    });
});

