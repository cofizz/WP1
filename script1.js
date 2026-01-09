document.addEventListener("DOMContentLoaded", function () {
    
const authorData = {
    navbar: {
        logo: "css/imgs/logo.jpg",
        links: [
            { text: "POČETNA", href: "index.html" },
            { text: "AUTOR", href: "#author" },
            { text: "DOCS", href: "Dokumentacija.pdf" },
            { text: "DOWNLOAD", href: "download.zip" }
        ]
    },

    hero: {
        title: "O autoru",
        scrollLink: "#author-content"
    },

    social: {
        instagram: "https://www.instagram.com/pilatesreformer_shopsrbija/"
    },

    authorSection: {
        paragraphs: [
            `Rodjen 20.8.2004. u Beogradu, završio ETŠ "Nikola Tesla", smer multimedija.`
        ]
    }
};
function renderNavbar() {
    let linksHTML = "";

    authorData.navbar.links.forEach(link => {
        linksHTML += `<li><a href="${link.href}">${link.text}</a></li>`;
    });

    return `
        <div class="navbar">
            <a href="index.html">
                <img src="${authorData.navbar.logo}" class="logo" alt="logo"/>
            </a>
            <nav>
                <ul>${linksHTML}</ul>
            </nav>
            <a href="index.html#contact" class="mail-a">
                <i class="fa fa-envelope fa-3x"></i>
            </a>
        </div>
    `;
}
function renderHero() {
    return `
        <div class="author-hero" id="author">
            <h1>${authorData.hero.title}</h1>
            <a href="${authorData.hero.scrollLink}" class="scroll-down">
                <div class="arrow-circle">
                    <i class="fa fa-angle-down"></i>
                </div>
            </a>
        </div>
    `;
}

function renderSocial() {
    return `
        <div class="social-icons">
            <a href="${authorData.social.instagram}" target="_blank" class="social-icon">
                <i class="fa fa-instagram"></i>
            </a>
        </div>
    `;
}
function renderAuthorContent() {
    let textHTML = "";

    authorData.authorSection.paragraphs.forEach(p => {
        textHTML += `<p>${p}</p>`;
    });

    return `
        <main id="author-content">
            <div class="author-content">
                <div class="author-img">
                    <img src="css/imgs/slika.jpg" alt="Autor">
                </div>

                <section class="author-text">
                    <h2>Filip Terzić 64/23</h2>
                    <h4>Student Visoke ICT Škole</h4>
                    ${textHTML}
                </section>
            </div>
        </main>
    `;
}
    const footerSekcija = {
    contact: {
        title: "Kontaktirajte nas!",
        email: "pilatesreformer.prodaja@gmail.com",
        phone: "+381 65 9970 599",
        location: "Bulevar Arsenija Čarnojevića 69v, Novi Beograd",
        instagram: "https://www.instagram.com/pilatesreformer_shopsrbija/"
    },
    links: [
        { text: "Početna", href: "index.html" },
        { text: "O Autoru", href: "autor.html" },
        { text: "Docs", href: "Dokumentacija.pdf" },
        { text: "Download", href: "download.zip" }
    ],
    social: [
        {
            href: "https://www.instagram.com/pilatesreformer_shopsrbija/",
            icon: "fa-instagram",
            label: "Instagram"
        },
        {
            href: "rss.xml",
            icon: "fa-rss",
            label: "RSS"
        },
        {
            href: "sitemap.xml",
            icon: "fa-sitemap",
            label: "Sitemap"
        }
    ],
};
    let linksHTML = "";
    footerSekcija.links.forEach(link => {
        linksHTML += `<li><a href="${link.href}">${link.text}</a></li>`;
    });
    const year = new Date().getFullYear();
    const footer = document.getElementById("footer");

    
    let socialHTML = "";

footerSekcija.social.forEach(item => {
    socialHTML += `
        <a href="${item.href}" target="_blank" aria-label="${item.label}">
            <i class="fa ${item.icon}"></i>
        </a>
    `;
});

footer.innerHTML =`
    <div class="container2">
        <div class="footer-left">
            <h3>${footerSekcija.contact.title}</h3>
            <p>Email: ${footerSekcija.contact.email}</p>
            <p class="phn-nmb">Telefon: ${footerSekcija.contact.phone}</p>
            <p>Lokacija: ${footerSekcija.contact.location}</p>
            <div class="social-icons1">
                ${socialHTML}
            </div>
        </div>
        <div class="footer-right">
            <h3>Brzi linkovi</h3>
            <ul>
                ${linksHTML}
            </ul>
        </div>
    </div>
    <div class="footer-bottom">
        <p>© ${year} Pilates Reformer Shop. Sva prava su zadržana.</p>
    </div>    
`;





    const page = document.getElementById("authorPage");

    page.innerHTML = `
        <div id="productscontainer">
            ${renderNavbar()}
            ${renderHero()}
        </div>

        ${renderSocial()}
        ${renderAuthorContent()}
    `;
    /* animacija za nav */
    const navbar = document.querySelector('.navbar');

    window.addEventListener('scroll', function () {
        if (window.scrollY > 450) {
            navbar.style.backgroundColor = 'rgba(128,128,128,0.5)';
            navbar.style.backdropFilter = 'blur(35px)';
        } else {
            navbar.style.backgroundColor = 'transparent';
            navbar.style.backdropFilter = 'none';
        }
    });

    const scrollToTopBtn = document.getElementById("scrollToTopBtn");
    if (scrollToTopBtn) {
        scrollToTopBtn.addEventListener("click", () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }
});