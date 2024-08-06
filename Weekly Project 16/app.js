
    const arrow_right = document.querySelector("#arrow-right");
    const arrow_left = document.querySelector("#arrow-left");
    const slider = document.querySelector(".slider");

    const slideWidth = 175; // Width of each slide in pixels
    const gap = 100; // Gap between slides in pixels
    const interval = 3500; // Interval for auto slide in milliseconds
    let currentIndex = 0; // Track the current index of the slider

    // Function to move the slider to a specific slide
    function moveToSlide(index) {
        const slideOffset = -(slideWidth + gap) * index;
        slider.style.left = `${slideOffset}px`;
        currentIndex = index;
    }

    // Function to handle sliding to the next slide
    function slideNext() {
        currentIndex = (currentIndex + 1) % 7; // 7 is the number of slides
        moveToSlide(currentIndex);
    }

    // Function to handle sliding to the previous slide
    function slidePrevious() {
        currentIndex = (currentIndex - 7 + 7) % 7;
        moveToSlide(currentIndex);
    }

    // Event listeners for arrow clicks
    arrow_right.addEventListener("click", slideNext);
    arrow_left.addEventListener("click", slidePrevious);

    // Auto slide functionality
    setInterval(slideNext, interval);

    // Initial slide setup
    moveToSlide(currentIndex);



    var countDownDate = new Date("Oct 24, 2025 24:00:00").getTime();

    var x = setInterval(function () {
        var now = new Date().getTime();
        var distance = countDownDate - now;

        var day = Math.floor(distance / (1000 * 60 * 60 * 24));
        var hour = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minute = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var second = Math.floor((distance % (1000 * 60)) / 1000);



        document.getElementById("days").innerHTML = day
        document.getElementById("hours").innerHTML = hour
        document.getElementById("minutes").innerHTML = minute
        document.getElementById("seconds").innerHTML = second

        if (distance < 0) {
            clearInterval(x)

            document.getElementById("days").innerHTML = "00"
            document.getElementById("hours").innerHTML = "00"
            document.getElementById("minutes").innerHTML = "00"
            document.getElementById("seconds").innerHTML = "00"
        }
    }, 1)
