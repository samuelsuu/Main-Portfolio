// window.alert('hi')

// Remove menu on click
let allAnchors  = document.querySelectorAll('#menu_inner li a');
let menu_wrapper2 = document.querySelector('#menu_wrapper');

allAnchors.forEach(anchor => {
    anchor.addEventListener('click', function () {
        menu_wrapper2.classList.remove('active');
    })
}
)


// Smooth Scroll
    const scrollBtn = document.getElementById('scrollTopBtn');

    window.addEventListener('scroll', () => {
      if (window.pageYOffset > 300) {
        scrollBtn.classList.add('show');
      } else {
        scrollBtn.classList.remove('show');
      }
    });

    scrollBtn.addEventListener('click', () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });

// Menu
let menu_wrapper = document.querySelector('#menu_wrapper');
let hamburger = document.querySelector('#hamburgerCon');
let exit = document.querySelector('#exit');

hamburger.addEventListener('click', function () {
    menu_wrapper.classList.add('active');
});

exit.addEventListener('click', function () {
    menu_wrapper.classList.remove('active');
});



const cursor = document.querySelector('.cursor');

document.addEventListener('mousemove', (e) => {
    requestAnimationFrame(() => {
        cursor.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
    });
});

const eyes = document.querySelectorAll('.eye-ball');

document.addEventListener('mousemove', (event) => {
    const { innerWidth: width, innerHeight: height } = window;
    const a = (event.clientX / width) * 100;
    const b = (event.clientY / height) * 100;

    eyes.forEach(eye => {
        eye.style.left = `${a}%`;
        eye.style.top = `${b}%`;
        eye.style.transform = `translate(-${a}%, -${b}%)`;
    });
});

// DarkMode

const toggleCon = document.getElementById('darkmodeCon');
const toggleBtn = document.getElementById('togglebtn');

// Check saved mode in localStorage
let isDark = localStorage.getItem('darkMode') === 'true';

// Apply saved mode on page load
let headerCon = document.querySelector('header');
let menuLinks = document.querySelectorAll('#navcon a');
let logo = document.querySelector('#logo');
let eyewhites = document.querySelectorAll('.eye-white');
let hero_sec = document.querySelector('#hero_sec');
let build = document.querySelector('.build');
let services = document.querySelector('#services');
let serdescriptions = document.querySelectorAll('.serb');
let serboxes = document.querySelectorAll('.serbox')
let faqbs = document.querySelectorAll('.faqb')
let tech = document.querySelector('#tech');
let techboxs = document.querySelectorAll('#tech_inner div');
let about = document.querySelector('#about');
let abts = document.querySelectorAll('.abt');
let project = document.querySelector('#project')
let testimonial = document.querySelector('#testimonial-slider');
let experience = document.querySelector('#experience');
let faq_holder = document.querySelector('#faq_holder');
let footer = document.querySelector('#footer');
let slidermobile = document.querySelector('#slidermobile')


if (isDark) {
    toggleBtn.style.left = 'calc(100% - 24px)';
    // document.body.classList.add('dark-mode');
    headerCon.classList.add('header_active');
    hero_sec.classList.add('hero_active');
    services.classList.add('hero_active');
    tech.classList.add('hero_active');
    about.classList.add('hero_active');
    project.classList.add('hero_active');
    build.classList.add('build_active');
    testimonial.classList.add('hero_active');
    experience.classList.add('hero_active');
    footer.classList.add('hero_active');
    faq_holder.classList.add('faqActive');
    slidermobile.classList.add('hero_active');
    faqbs.forEach(faqb => {
        faqb.classList.add('faqb_active');
    });
    abts.forEach(abt => {
        abt.classList.add('abtTxt');
    });
    techboxs.forEach(techbox => {
        techbox.classList.add('serbox_active');
    });
    serboxes.forEach(serbox => {
        serbox.classList.add('serbox_active');
    });
    serdescriptions.forEach(serdescription => {
        serdescription.classList.add('build_active');
    });
    menuLinks.forEach(menuLink => {
        menuLink.classList.add('headerTxt');
    });
    eyewhites.forEach(eyewhite => {
        eyewhite.classList.add('eyewhite_active');
    });
    logo.classList.add('headerTxt');
    
} else {
    toggleBtn.style.left = '4px';
    // document.body.classList.remove('dark-mode');
    headerCon.classList.remove('header_active');
    hero_sec.classList.remove('hero_active');
    build.classList.remove('build_active');
    services.classList.remove('hero_active');
    tech.classList.remove('hero_active');
    about.classList.remove('hero_active');
    project.classList.remove('hero_active');
    testimonial.classList.remove('hero_active');
    experience.classList.remove('hero_active');
    faq_holder.classList.remove('faqActive');
    footer.classList.remove('hero_active');
    slidermobile.classList.remove('hero_active');
    faqbs.forEach(faqb => {
        faqb.classList.remove('faqb_active');
    });
    abts.forEach(abt => {
        abt.classList.remove('abtTxt');
    });
    techboxs.forEach(techbox => {
        techbox.classList.remove('serbox_active');
    });
    serboxes.forEach(serbox => {
        serbox.classList.remove('serbox_active');
    });
    serdescriptions.forEach(serdescription => {
        serdescription.classList.remove('build_active');
    });
    menuLinks.forEach(menuLink => {
        menuLink.classList.remove('headerTxt');
    });
    eyewhites.forEach(eyewhite => {
        eyewhite.classList.remove('eyewhite_active');
    });
    logo.classList.remove('headerTxt');

}

// On toggle click
toggleCon.addEventListener('click', () => {
    isDark = !isDark;

    if (isDark) {
        toggleBtn.style.left = 'calc(100% - 24px)';
        // document.body.classList.add('dark-mode');
        headerCon.classList.add('header_active');
        hero_sec.classList.add('hero_active');
        build.classList.add('build_active');
        services.classList.add('hero_active');
        tech.classList.add('hero_active');
        about.classList.add('hero_active');
        project.classList.add('hero_active');
        testimonial.classList.add('hero_active');
        experience.classList.add('hero_active');
        faq_holder.classList.add('faqActive');
        footer.classList.add('hero_active');
        slidermobile.classList.add('hero_active');
        faqbs.forEach(faqb => {
            faqb.classList.add('faqb_active');
        });
        abts.forEach(abt => {
            abt.classList.add('abtTxt');
        });
        techboxs.forEach(techbox => {
            techbox.classList.add('serbox_active');
        });
        serboxes.forEach(serbox => {
            serbox.classList.add('serbox_active');
        });
        serdescriptions.forEach(serdescription => {
            serdescription.classList.add('build_active');
        });
        menuLinks.forEach(menuLink => {
            menuLink.classList.add('headerTxt');
        });
        eyewhites.forEach(eyewhite => {
            eyewhite.classList.add('eyewhite_active');
        });
        logo.classList.add('headerTxt');
    } else {
        toggleBtn.style.left = '4px';
        // document.body.classList.remove('dark-mode');
        headerCon.classList.remove('header_active');
        hero_sec.classList.remove('hero_active');
        build.classList.remove('build_active');
        tech.classList.remove('hero_active');
        services.classList.remove('hero_active');
        about.classList.remove('hero_active');
        project.classList.remove('hero_active');
        testimonial.classList.remove('hero_active');
        experience.classList.remove('hero_active');
        faq_holder.classList.remove('faqActive');
        footer.classList.remove('hero_active');
        slidermobile.classList.remove('hero_active');
        faqbs.forEach(faqb => {
            faqb.classList.remove('faqb_active');
        });
        abts.forEach(abt => {
            abt.classList.remove('abtTxt');
        });
        techboxs.forEach(techbox => {
            techbox.classList.remove('serbox_active');
        });
        serboxes.forEach(serbox => {
            serbox.classList.remove('serbox_active');
        });
        serdescriptions.forEach(serdescription => {
            serdescription.classList.remove('build_active');
        });
        menuLinks.forEach(menuLink => {
            menuLink.classList.remove('headerTxt');
        });
        eyewhites.forEach(eyewhite => {
            eyewhite.classList.remove('eyewhite_active');
        });
        logo.classList.remove('headerTxt');
    }


    // Save mode to localStorage
    localStorage.setItem('darkMode', isDark);
});

const track = document.getElementById('slidermobile-track');
const prevBtnn = document.getElementById('slidermobile-prev');
const nextBtnn = document.getElementById('slidermobile-next');
const dots = document.querySelectorAll('.slidermobile-dot');

let currentSlideIndexx = 0; // ✅ Define first
const totalSlidess = dots.length;

function updateSliderr() {
  track.style.transform = `translateX(-${currentSlideIndexx * 100}%)`;
  dots.forEach((dot, idx) => {
    dot.classList.toggle('active', idx === currentSlideIndexx);
  });
}

prevBtnn.addEventListener('click', () => {
  currentSlideIndexx = (currentSlideIndexx - 1 + totalSlidess) % totalSlidess;
  updateSliderr();
});

nextBtnn.addEventListener('click', () => {
  currentSlideIndexx = (currentSlideIndexx + 1) % totalSlidess;
  updateSliderr();
});

dots.forEach((dot, idx) => {
  dot.addEventListener('click', () => {
    currentSlideIndexx = idx;
    updateSliderr();
  });
});

// ✅ Call AFTER defining variables
updateSliderr();

//Accordion Tabs
$(".faq_text_description").hide();

$(".faq_title_holder").on('click', function(){
    $(this).next().slideToggle();
    $(this).parent().toggleClass('active');

    $(".faq_title_holder").not(this).next().slideUp();

    $(".faq_title_holder").not(this).parent().removeClass('active');
})

let header = document.querySelector('header');
window.addEventListener('scroll', function () {
    if (this.scrollY > 500) {
        header.classList.add('addtop');
        header.classList.add('animate__fadeInDown');
    } else {
        header.classList.remove('addtop');
        header.classList.remove('animate__fadeInDown');
    }
});


let hideboxs = document.querySelectorAll('.hidden');
let seeMoreBtn = document.querySelector('#seemore');

seeMoreBtn.addEventListener('click', function(){
    hideboxs.forEach(hidebox => {
        hidebox.classList.toggle('hidden');
    });

    if(seeMoreBtn.textContent === 'See More'){
        seeMoreBtn.textContent = 'See Less'
    }else{
        seeMoreBtn.textContent = 'See More'
    }
})

// testimonial-script.js

const sliderContainer = document.querySelector('#slider-container');
const prevBtn = document.querySelector('#prev-btn');
const nextBtn = document.querySelector('#next-btn');

let currentSlideIndex = 0; // Tracks the current slide index
const totalSlides = 2; // We have two slides

function updateSlider() {
  const offset = -(currentSlideIndex * 50); // Move by 50% for each slide
  sliderContainer.style.transform = `translateX(${offset}%)`;
}

// Previous button functionality
prevBtn.addEventListener('click', () => {
  currentSlideIndex = (currentSlideIndex === 0) ? totalSlides - 1 : currentSlideIndex - 1;
  updateSlider();
});

// Next button functionality
nextBtn.addEventListener('click', () => {
  currentSlideIndex = (currentSlideIndex === totalSlides - 1) ? 0 : currentSlideIndex + 1;
  updateSlider();
});

// Initialize slider position
updateSlider();

