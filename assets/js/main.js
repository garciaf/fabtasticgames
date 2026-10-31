// Click-to-load YouTube player.
// Nothing is loaded from YouTube until the visitor clicks play (GDPR-friendly),
// and without JavaScript the link simply opens the video on YouTube.
document.querySelectorAll("a.yt-facade[data-yt]").forEach(function (link) {
  link.addEventListener("click", function (event) {
    event.preventDefault();
    var iframe = document.createElement("iframe");
    iframe.src = "https://www.youtube-nocookie.com/embed/" + link.dataset.yt + "?autoplay=1&rel=0";
    iframe.title = link.dataset.title || "YouTube video";
    iframe.allow = "autoplay; encrypted-media; picture-in-picture; fullscreen";
    iframe.allowFullscreen = true;
    iframe.className = "yt-frame";
    link.replaceWith(iframe);
    iframe.focus();
  });
});
