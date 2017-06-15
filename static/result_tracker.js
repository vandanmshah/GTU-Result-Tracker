    function notifyMe() {
	// Let's check if the user is okay to get some notification
	if (Notification.permission === "granted") {
	// If it's okay let's create a notification
	var notification = new Notification("Result has been arrived");
	}

	// Otherwise, we need to ask the user for permission
	// Note, Chrome does not implement the permission static property
	// So we have to check for NOT 'denied' instead of 'default'
	else if (Notification.permission !== 'denied') {
	Notification.requestPermission(function (permission) {

	  // Whatever the user answers, we make sure we store the information
	  if(!('permission' in Notification)) {
	    Notification.permission = permission;
	  }

	  // If the user is okay, let's create a notification
	  if (permission === "granted") {
	    var notification = new Notification("Hi there!");
	  }
	});
	}

  // At last, if the user already denied any notification, and you 
  // want to be respectful there is no need to bother him any more.
}
$(document).ready(function() {
	// getting the html contents which we got from py file
	var content = $('#res')[0].innerText;
	// Finding the element and calculating the result has arrived or not
	var currentResults = $(content).find("#tab-timeline .timeline > li").length;
    if (typeof(Storage) !== "undefined") {
	    if(localStorage.getItem("previousResults") != currentResults){
	    	// if result is arrived then update the previous values and notify the user 
		    localStorage.setItem("previousResults", currentResults);
	    	notifyMe();
	    	location.reload();
	    }
	    else{
	    	// If result is not arrived then reload the page
    		location.reload();
	    }
	} else {
	    alert("Sorry, your browser does not support Web Storage...");
	}
});
