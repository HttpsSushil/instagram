document.addEventListener("DOMContentLoaded", function() {
    let videos = document.querySelectorAll("video");

    // Function to check if video is sufficiently visible
    function isVideoVisible(video) {
        let rect = video.getBoundingClientRect();
        let threshold = window.innerHeight * 0.25; // 25% of the viewport height

        // Check if at least 25% of the video is visible
        return (
            rect.top <= threshold &&
            rect.bottom >= threshold &&
            rect.left >= 0 &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }

    // Function to handle video visibility and autoplay
    function handleVideoVisibility() {
        videos.forEach(video => {
            if (isVideoVisible(video)) {
                if (video.paused) {
                    video.play();
                }
            } else {
                video.pause();
            }
        });
    }

    // Initial check on page load
    handleVideoVisibility();

    // Listen for scroll events to check video visibility
    window.addEventListener("scroll", function() {
        handleVideoVisibility();
    });

    // Smooth scrolling for the entire document
    document.documentElement.style.scrollBehavior = "smooth";
});
