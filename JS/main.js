const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-link");
const cards = document.querySelectorAll(".card[data-target]");
const imageSections = document.querySelectorAll(".images-section");
const imageContainer = document.querySelector(".imageContainer");

history.scrollRestoration = "manual";

window.addEventListener("load", function () {
    window.scrollTo(0, 0);
});

document.querySelectorAll(".protected-img").forEach((img) => {
    img.addEventListener("contextmenu", (e) => {
      e.preventDefault();
    });
});

addEventListener("scroll", () => {
    let current = "home";

    sections.forEach(section => {
        const top = section.offsetTop - 160;
        if (scrollY >= top) {
            current = section.id;
        }
    });

    navLinks.forEach(link => {
        link.classList.remove("active");
        if (link.getAttribute("href") === `#${current}`) {
            link.classList.add("active");
        }
    });
});

addEventListener("scroll", function () {
    const message = document.getElementById("message");
    const contact = document.getElementById("contactUs");

    const contactTop = contact.getBoundingClientRect().top;

    if (contactTop > window.innerHeight && window.scrollY > 50) {
        message.style.display = "block";
    } else {
        message.style.display = "none";
    }
});


cards.forEach(card => {
    card.addEventListener("click", () => {

        imageSections.forEach(section => {
            section.style.display = "none";
        });

        const targetId = card.dataset.target;
        const target = document.getElementById(targetId);

        target.style.display = "block";

        if (window.innerWidth <= 600) {
            // Mobile
            card.after(target);
        } else {
            // Desktop
            imageContainer.appendChild(target);
        }

        target.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });
    });
});


const reviews = [
        "https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fpermalink.php%3Fstory_fbid%3Dpfbid0QTj99JgUnNFtnKH4PSDoKeHzixJjjk9jNR7HgGed1xHoLxFcDuETgLrx3aJijrRYl%26id%3D61583690737422&show_text=true&width=500",

        "https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Ftahany.mahmoud.90%2Fposts%2Fpfbid0mfDSCB8LCv5HtPzZzytZQDpDwyQvRbdrVoD9Ev9g5JYvsu4jzRtbbRHDUyg5vrnjl&show_text=true&width=500",

        "https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fmayonisa%2Fposts%2Fpfbid0ekJdvBVgASeiXQ3Yba9Jh8c1GK6cCy4TEhpneFCJmX72uE1Aszq3PpCwrXHKjfYvl&show_text=true&width=500",

        "https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fgihan.said.2025%2Fposts%2Fpfbid024KWKFP2ERQW9apuxqez3n1EkSUCf4VeGzvyLkoe4HA3b2oxcwLVxSyG7nEsfn1LNl&show_text=true&width=500",

        "https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fm.yasser.1106%2Fposts%2Fpfbid0PzyHntQoAwF4yLKyXw4p5YoJgxG8Q6GFcp6YwDec7GKpr14uz4tJNLvmLoMVUr6jl&show_text=true&width=500",

        "https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fnada.elsharnouby.54%2Fposts%2Fpfbid0wkN1G4znQoiF1J34B1h7oZVjaeBiaWpRTYN8B4uTkLSpPXpFnid2UMPqEa8sKYrpl&show_text=true&width=500",

        "https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fdoaa.nashaat.396522%2Fposts%2Fpfbid0fv89CoYcqqSXyG34TrcjMmWFVN3QQjkpXGeXfqJSuu6oC92sgMTUTN5UaxmL9ZoUl&show_text=true&width=500",

        "https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fheba.hussien.184%2Fposts%2Fpfbid02L877h8saPVTkRyNzr7EEr79gnGjxvHUAhQi2jK72TXwzyB5gf9YATwX9TdfSqbyml&show_text=true&width=500",

        "https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fmohamed.atia.nasr%2Fposts%2Fpfbid02nPNNVBZB8PSAhe2a5yaAHL8yG4T48Cc3JN6ihbcuXoakmJ8vsw8Vb9nchDVx76BKl&show_text=true&width=500",

        "https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Frasha.atta.77%2Fposts%2Fpfbid02kRu9kcPLYu2s6nTnBKBk7YRMCeSR7DWMeZcthThujd4TqBk2pHCHURnoHaQeG9Ptl&show_text=true&width=500",

        "https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fsamahelsehity%2Fposts%2Fpfbid028Z1e6gatv88NZmu4mXMEAjvSdwpUU6M6Kc5zAyZymt3pLxfer1SqrnKcKYLgEGA1l&show_text=true&width=500",

        "https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Frajiah.redak%2Fposts%2Fpfbid02dsxWyXfQkZfx5H52SBSwZvhLxmQoABMvSHTSqQsp39qf1sQamhgwEhN64FchFgYWl&show_text=true&width=500",

        "https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2FYaraa1907%2Fposts%2Fpfbid024vnFtqoSHVE3SfprQiFipmG8vLdrP8Rmie3LyaNkNLrzQWuMFZKM2agdsdX4DxxMl&show_text=true&width=500",

        "https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fasraf.zakaria.75%2Fposts%2Fpfbid02EkrghXstXsS8DKydhPqmE7qzhrmCEfFyPsfKMHWqpw5W8RUonuxc4WEwkrzcxGgMl&show_text=true&width=500",

        "https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fhanan.elashkar%2Fposts%2Fpfbid0ZMCXR8fpXbpPS8wbf6sVu6YxWbqppzfcmyDL92d6zgPdeLChzMkJcuExyTChEPuRl&show_text=true&width=500",

        "https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fmahaismail123%2Fposts%2Fpfbid0dTpiqxmP1w72mp82Nf8j183icvhXzwJhYiTkxrYx19smNfx5W9BraiACq3uQE5cYl&show_text=true&width=500",

        "https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fmohamed.hamdyeladwi%2Fposts%2Fpfbid02gDpFBeZ3eJXYsZNSSJBmu1iHTjCeeAGcsNfmoLExGVvpoJWsJofLoU2p7BzX5V2Al&show_text=true&width=500",

        "https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fsamar.hamdy.101281%2Fposts%2Fpfbid02HZTHiooDM7CE4tVhF7G6EuyGz22k3z5JYCFTN6PyEQCF4hqJoGqDs5duV5PezCKl&show_text=true&width=500",

        "https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fpermalink.php%3Fstory_fbid%3Dpfbid0FPzNKfPRcTwR3NzuTCp1hETrdLZsNvofkYTvEEZpZzYrsCrDmERd9eTZfLETZ8ndl%26id%3D100005209818900&show_text=true&width=500",

        "https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fhzm.naim%2Fposts%2Fpfbid0NhqPrgnxHtfrbMrx4iy3LNvEQb4rU5ii7CeBSAy7RewzhLNJEsDPh9kuvQsrEJftl&show_text=true&width=500",

        "https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fsayed.mohamed.752%2Fposts%2Fpfbid0tWrCz67kQB6G4c97jboj8BiE9isX2rYpFJ3MdEW72zYnEfH4Rjn1dJRV4cEsMx7Cl&show_text=true&width=500",

        "https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fbasel.karam1%2Fposts%2Fpfbid02PAUrMgQhYeFSq28dmUq7TT8Ecbwa6cdWDAikQfqe9NcWEvWeVkrYgR2QTwoCgRvTl&show_text=true&width=500",

        "https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fmohamed.khlaled.f%2Fposts%2Fpfbid036HjpC9aL4cE1xv4L5arfd1xfnGtmUDzvddB2p3wQrow6K9cud1t8To1bV895W3tQl&show_text=true&width=500",

        "https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fyaraa.178%2Fposts%2Fpfbid0zYDGaRWnFtXQ9PqhXcQiDXsBXnwdk3MPnhwnP4Ynd3Y1Jp1hGGMnQnRbeXEEWfHvl&show_text=true&width=500"
    ];


    const carousel = document.getElementById("reviewsCarousel");


    function createReview(url) {

        return `
            <div class="review-item">
                <iframe
                    src="${url}"
                    width="100%"
                    height="233"
                    style="border:none;overflow:hidden"
                    scrolling="no"
                    frameborder="0"
                    allowfullscreen="true"
                    allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share">
                </iframe>
            </div>
        `;
    }


    function createCarousel() {

        carousel.innerHTML = "";

        const isMobile = window.innerWidth < 768;

        const reviewsPerSlide = isMobile ? 2 : 6;


        for (let i = 0; i < reviews.length; i += reviewsPerSlide) {

            const slide = document.createElement("div");

            slide.classList.add("carousel-item");

            if (i === 0) {
                slide.classList.add("active");
            }


            const row = document.createElement("div");

            row.classList.add("row");


            const currentReviews = reviews.slice(i, i + reviewsPerSlide);


            currentReviews.forEach(url => {

                const col = document.createElement("div");

                if (isMobile) {
                    // Mobile:
                    // one review per row
                    col.className = "col-12 p-1";
                } else {
                    // Desktop:
                    // 3 reviews per row
                    col.className = "col-md-4 p-1";
                }

                col.innerHTML = createReview(url);

                row.appendChild(col);

            });


            slide.appendChild(row);

            carousel.appendChild(slide);

        }

    }


    createCarousel();


    // Rebuild carousel when screen size changes

    let lastMobileState = window.innerWidth < 768;

    window.addEventListener("resize", function () {

        const currentMobileState = window.innerWidth < 768;

        if (currentMobileState !== lastMobileState) {

            lastMobileState = currentMobileState;

            createCarousel();

        }

    });




