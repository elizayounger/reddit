export function timeSincePost(unixTimestamp) {
    const currentTime = Math.floor(Date.now() / 1000); // current time in sec
    const timeDifference = currentTime - unixTimestamp;

    let interval = Math.floor(timeDifference / 31536000);
    if (interval >= 1) return interval + (interval === 1 ? " year ago" : " years ago");

    interval = Math.floor(timeDifference / 2592000);
    if (interval >= 1) return interval + (interval === 1 ? " month ago" : " months ago");

    interval = Math.floor(timeDifference / 86400);
    if (interval >= 1) return interval + (interval === 1 ? " day ago" : " days ago");

    interval = Math.floor(timeDifference / 3600);
    if (interval >= 1) return interval + (interval === 1 ? " hour ago" : " hours ago");

    interval = Math.floor(timeDifference / 60);
    if (interval >= 1) return interval + (interval === 1 ? " minute ago" : " minutes ago");

    return timeDifference + (timeDifference === 1 ? " second ago" : " seconds ago");
}
