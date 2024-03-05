const pagination = document.getElementById('pagination');
const loadingBar = document.getElementById('loading__bar');

document.getElementById('next').onclick = () => {
    let list = document.querySelectorAll('.item');
    document.getElementById('slide').appendChild(list[0]);

    const index = parseInt(list[0 + 1].getAttribute('data-index'));
    index < 10 ? pagination.innerText = "0" + index : index;
    loadingBar.style.setProperty('--width', (index/list.length) * 100 + '%')
}

document.getElementById('prev').onclick = () => {
    let list = document.querySelectorAll('.item');
    document.getElementById('slide').prepend(list[list.length - 1]);

    const index = parseInt(list[list.length - 1].getAttribute('data-index'));
    index < 10 ? pagination.innerText = "0" + index : index;
    loadingBar.style.setProperty('--width', (index/list.length) * 100 + '%')
}

var typed = new Typed('.typing', {
    strings: ['3D ARTIST', '3D ARTIST', '3D ARTIST', '3D ARTIST'],
    typeSpeed: 150,
    BackSpeed: 100,
    loop: true
});

/*========== Modal Custom ==========*/
for (let index = 1; index < 6; index++) {
    // Lấy phần tử modal
    const modal = document.getElementById('myModal' + index);

    // Lấy phần tử nút mở modal
    const btn = document.getElementById("openModalBtn" + index);

    // Lấy phần tử span đóng modal
    const backBtn = document.getElementById("back-btn" + index);

    // Khi người dùng click vào nút, mở modal
    btn.onclick = function() {
        modal.classList.toggle('active');
        document.body.style.overflow = "hidden"; // Chặn cuộn trang
    }

    // Khi người dùng click vào nút đóng (x), đóng modal
    backBtn.onclick = function() {
        modal.classList.remove('active');
        document.body.style.overflow = "auto"; // Cho phép cuộn trang trở lại
    }

    // Khi người dùng click bên ngoài modal, đóng modal
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.classList.remove('active');
            document.body.style.overflow = "auto"; // Cho phép cuộn trang trở lại
        }
    }
}

/*========== Send Email Set Up ==========*/
const form = document.querySelector('#form');
const fullname = document.getElementById('name');
const phone = document.getElementById('phone');
const email = document.getElementById('email');
const message = document.getElementById('message');

function sendEmail() {
    const bodyMessage = `Full Name: ${fullname.value}<br> Email: ${email.value}<br> Phone Number: ${phone.value}<br> Message: ${message.value}`;

    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "minhhoaloitv@gmail.com",
        Password : "03304C77457FCD65AD00EBFBC9AC19C39CFD",
        To : email.value,
        From : "minhhoaloitv@gmail.com",
        Subject : "This is email contact",
        Body : bodyMessage
    }).then(
        message => {
            if(message == "OK") {
                Swal.fire({
                    title: "Success!",
                    text: "Message sent successfully!",
                    icon: "success"
                    });
            }
        }
    );
}

form.addEventListener('submit', (e) => {
    e.preventDefault();

    sendEmail();
    form.reset();
});

/*========== menu icon navbar ==========*/
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('fa-xmark');
    navbar.classList.toggle('active');
}


/*========== scroll sections active link ==========*/
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height) {
            navLinks.forEach(link => {
                link.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            })
        }
    })

    /*========== sticky navbar ==========*/
    let header = document.querySelector('.header');

    header.classList.toggle('sticky', window.scrollY > 100);

    /*========== remove menu icon navbar when click navbar link (scroll) ==========*/
    menuIcon.classList.remove('fa-xmark');
    navbar.classList.remove('active');
};

gsap.registerPlugin(ScrollTrigger);

gsap.to(".preloader .stripe", {
    y: -1000,
    stagger: 0.2,
    ease: "power2.inOut",
    // delay: 0,
    // height: 0,
    // stagger: {
    //     amount: 0.5,
    // },
    // ease: "power4.inOut",
})

gsap.to(".preloader", {
    delay: 2,
    display: "none"
})

gsap.from("nav", {
    y: 50,
    opacity: 0,
    stagger: 0.1,
    delay: 1.5,
    ease: "power2.inOut",
})

gsap.from(".hero h1 span", {
    y: 100,
    opacity: 0,
    stagger: 0.1,
    delay: 1.5,
    ease: "power2.inOut",
})

gsap.from(".hero h5", {
    opacity: 0,
    stagger: 0.1,
    duration: 1,
    delay: 2.5,
    ease: "power2.inOut",
})

gsap.from(".hero .left-sidebar a", {
    opacity: 0,
    x: 100,
    stagger: 0.1,
    delay: 3.5,
    ease: "power2.inOut",
})

gsap.from(".hero .right-sidebar", {
    opacity: 0,
    stagger: 0.1,
    delay: 4.5,
    ease: "power2.inOut",
})

ScrollTrigger.create({
    trigger: ".about",
    animation: gsap.from(".about h2 span", {
        y: 50,
        opacity: 0,
        stagger: 0.05
    }),
    start: "top 50%",
    end: "bottom top",
});

ScrollTrigger.create({
    trigger: ".about",
    animation: gsap.from(".about .about-content h3", {
        opacity: 0,
        x: 100,
        stagger: 0.1,
        delay: .5,
        ease: "power2.inOut",
    }),
    start: "top 50%",
    end: "bottom top",
});

ScrollTrigger.create({
    trigger: ".about",
    animation: gsap.from(".about .about-content p", {
        opacity: 0,
        x: 100,
        stagger: 0.1,
        delay: .7,
        ease: "power2.inOut",
    }),
    start: "top 50%",
    end: "bottom top",
});

ScrollTrigger.create({
    trigger: ".about",
    animation: gsap.from(".about .about-img .box", {
        opacity: 0,
        stagger: 0.1,
        duration: 1,
        delay: .5,
        ease: "power2.inOut",
    }),
    start: "top 50%",
    end: "bottom top",
});

ScrollTrigger.create({
    trigger: ".about",
    animation: gsap.from(".about-btn", {
        y: 50,
        opacity: 0,
        stagger: 0.1,
        delay: 1.5,
        ease: "power2.inOut",
    }),
    start: "top 50%",
    end: "bottom top",
});

ScrollTrigger.create({
    trigger: ".projects",
    animation: gsap.from(".projects h2 span", {
        y: 50,
        opacity: 0,
        stagger: 0.05
    }),
    start: "top 50%",
    end: "bottom top",
});
ScrollTrigger.create({
    trigger: ".projects",
    animation:
        gsap.from(".projects .slide .item img", {
            y: 200,
            opacity: 0,
            stagger: 0.1,
            duration: 1,
        }),
    start: "top 50%",
    end: "bottom top",
});
ScrollTrigger.create({
    trigger: ".contact",
    animation:
        gsap.from(".left-contact h2 span", {
            y: 50,
            opacity: 0,
            stagger: 0.05,
        }),
    start: "top 50%",
    end: "bottom top",
});
ScrollTrigger.create({
    trigger: ".contact",
    animation:
        gsap.from(".right-contact h2 span", {
            y: 50,
            opacity: 0,
            stagger: 0.05,
        }),
    start: "top 50%",
    end: "bottom top",
    
});
ScrollTrigger.create({
    trigger: ".contact",
    animation:
        gsap.from(".right-contact form input", {
            y: 50,
            opacity: 0,
            stagger: 0.05,
        }),
    start: "top 50%",
    end: "bottom top",
});
ScrollTrigger.create({
    trigger: ".contact",
    animation:
        gsap.from(".left-contact p, .left-contact h4, .left-contact small", {
            y: 50,
            opacity: 0,
            stagger: 0.05
        }),
    start: "top 50%",
    end: "bottom top",
});
