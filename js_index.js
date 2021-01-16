function notifyMe(params) {
    if (!("Notification" in window)) {
        alert("This Browser doesn't support Notifications")
    }

    else if (Notification.permission=="granted") {
        var notification = new Notification("Hi There!") 
    }

    else if(Notification.permission=="default"){
        Notification.requestPermission().then(function (permission) {
            if (permission=="granted") {
                var notification = new Notification("User Granted The Permission")
            }else if (permission=="denied") {
                alert("User denied the permission")
            }
        })
    }
    
}