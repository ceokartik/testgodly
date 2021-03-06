function getMobileOperatingSystem() {
  var userAgent = navigator.userAgent || navigator.vendor || window.opera;

    if (/android/i.test(userAgent)) {
        return "Android";
    }

    // iOS detection from: http://stackoverflow.com/a/9039885/177710
    if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
        return "iOS";
    }

    return "unknown";
}
function DetectAndServe(){
    let os = getMobileOperatingSystem();
    if (os == "Android") {
        window.location.href = "https://play.google.com/store/apps/details?id=cloud.godly"; 
    } else if (os == "iOS") {
        window.location.href = "https://apps.apple.com/us/app/godly-cloud/id1526114049";
    }
}
