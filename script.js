document.addEventListener("DOMContentLoaded", function () {

    const menuItems = [
        { text: "POČETNA", link: "#container" },
        { text: "AUTOR", link: "autor.html" },
        { text: "DOCS", link: "documentation.pdf" },
        { text: "DOWNLOAD", link: "download.zip" }
    ];

    const heroSekcija = {
        title: "Pilates Reformer Shop",
        subtitle: "Najpovoljnije pilates mašine",
        buttonText: "Pročitajte o nama!",
        buttonLink: "#about-us"
    };

    const container = document.getElementById("container");

    let menuHTML = "";
    menuItems.forEach(item => {
        menuHTML += `<li><a href="${item.link}">${item.text}</a></li>`;
    });

    container.innerHTML = `
        <nav class="navbar">
            <a href="">
                <img src="css/imgs/logo.jpg" class="logo" alt="logo"/>
            </a>

            <nav>
                <ul>
                    ${menuHTML}
                </ul>
            </nav>

            <a href="#contact" class="mail-a">
                <i class="fa fa-envelope fa-3x"></i>
            </a>
        </nav>

        <div class="row">
            <div class="col">
                <h1 class="fade-in">${heroSekcija.title}</h1>
                <p>${heroSekcija.subtitle}</p>
                <a href="${heroSekcija.buttonLink}" class="button">
                    ${heroSekcija.buttonText}
                </a>
            </div>
        </div>
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
    const products = [
        {
            title: "Reformer Eko",
            img: "css/imgs/sprava1/background1.jpg",
            price: "2290€"
        },
        {
            title: "Reformer Eko Premium",
            img: "css/imgs/sprava9/background1.jpg",
            price: "2590€"
        },
        {
            title: "Combo Cadillac Premium",
            img: "css/imgs/sprava7/background1.jpg",
            price: "3390€"
        }
    ];

    let productsHTML ="";
    products.forEach(product => {
        productsHTML += `
        <div class="product-card">
            <h3>${product.title}</h3>
            <img src="${product.img}" alt="${product.title}">
            <p class="cena3">${product.price}</p>
            <br/>
            <a href="#contact" style="text-decoration: none;"><button type="button" class="pr-btn">Poručite!</button></a>
        </div>
        `;
    });
    const aboutHTML = `
    <div id="about-us">
        <div class="container1">
            <div class="content1">
                <div class="left-content1">
                    <img src="css/imgs/alex.jpg" alt="Vlasnik" class="slika123">
                </div>
                <div class="right-content1">
                    <h2>Dobrodošli u Pilates Reformer Shop,<br>gde se inovacije i posvećenost fitnesu susreću.</h2>
                    <p>Naša priča započinje strašću jednog ličnog trenera koji je, gradeći svoj put u svetu fitnesa, shvatio važnost kvalitetne opreme za postizanje vrhunskih rezultata.</p>
                    <p>Sa svojom vizijom, otvorio je fitnes centar koji je brzo postao u omiljeno mesto ljubitelja zdravog načina života. Sa posvećenošću ka vrhunskom iskustvu, naš centar 
                    postao je sinonim za kvalitet, stručnost i inspiraciju u fitnes industriji. Uz naš fitnes centar, širimo strast prema fitnesu nudeći vrhunske Pilates mašine i opremu najvišeg kvaliteta u regionu.</p>
                    <a href="https://alexandrosarena.com/" class="btn" target="_blank">Saznajte više</a>
                </div>
            </div>
        </div>
    </div>
    `;
    const contactHTML = `
    <div id="contact">
        <div class="content">
            <div class="left-content">
                <h2>Spremni za kupovinu?</h2>
                <p>Kontaktirajte nas preko mejla!</p>
            </div>

            <div class="right-content">
                <div class="contact-form1">
                    <h2>Kontakt</h2>
                    <form id="contactForm">
                        <div class="form-group1">
                            <input type="text" id="name" placeholder="Ime">
                            <small class="errorMsg"></small>
                        </div>
                        <div class="form-group1">
                            <input type="text" id="email" placeholder="Email">
                            <small class="errorMsg"></small>
                        </div>
                        <div class="form-group1">
                            <input type="tel" id="phone" placeholder="Telefon">
                            <small class="errorMsg"></small>
                        </div>
                        <div class="form-group1">
                            <textarea id="message" rows="4" placeholder="Poruka"></textarea>
                            <small class="errorMsg"></small>
                        </div>
                        <button type="submit">Pošaljite!</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
    `;
    const main = document.getElementById("mainContent");

    main.innerHTML = `
        <div id="products">
            <h1>Najtraženije!</h1>
            <div class="product-row">
                ${productsHTML}
            </div>
        </div>

        ${aboutHTML}
        ${contactHTML}
    `;
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

const form = document.getElementById("contactForm");

const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const phoneInput = document.getElementById("phone");
const messageInput = document.getElementById("message");

form.addEventListener("submit", function(e){
    e.preventDefault();
    let valid = true;
    if (nameInput.value.trim() === ""){
        setError(nameInput, "Morate uneti ime!");
        valid = false;
    } else if (!isValidName(nameInput.value.trim())) {
        setError(nameInput, "Ime mora poceti velikim slovom i imati najmanje 3 slova");
        valid = false;
    } else{
        setSuccess(nameInput);
    }

    if(!isValidEmail(emailInput.value)){
        setError(emailInput, "Uneti ispravan email!");
        valid = false;
    } else{
        setSuccess(emailInput);
    }

    if(phoneInput.value.trim()===""){
        setError(phoneInput, "Morate uneti telefon!");
        valid = false;
    } else if(!isValidPhone(phoneInput.value.trim())){
        setError(phoneInput, "Telefon mora imati početi sa +381 ili 06 i imati najmanje 6 cifara");
        valid = false;
    } 
    else{
        setSuccess(phoneInput);
    }

    if(messageInput.value.trim()===""){
        setError(messageInput, "Morate uneti poruku");
        valid = false;
    } else{
        setSuccess(messageInput);
    }
    if (valid){
        
    }

    function setError(input, message){
        const grupa = input.parentElement;
        const small = grupa.querySelector(".errorMsg");

        grupa.classList.add("error");
        grupa.classList.remove("success");

        small.textContent = message;
        small.style.display = "block"
    }

    function setSuccess(input){
        const grupa = input.parentElement;
        const small = grupa.querySelector(".errorMsg");

        grupa.classList.remove("error");
        grupa.classList.add("success");

        small.style.display = "none"
    }

    function isValidEmail(email){
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    }

    function isValidName(name){
        return /^[A-ZČĆŽŠĐ][a-zčćžšđ]{2,}$/.test(name);
    }
    
    function isValidPhone(phone){
        const cista = phone.replace(/\s+/g, "");
        const regex = /^(\+381|06)[0-9\s]+$/;
        return regex.test(phone) && cista.replace(/\D/g, "").length >= 6;
    }

    [nameInput, emailInput, phoneInput, messageInput].forEach(input =>{
        input.addEventListener("submit", ()=>{
            setSuccess(input);
        });
    })
    
    if(valid){
        const successMsg = document.createElement("p");
        successMsg.textContent = "Forma uspešno  poslata!";
        successMsg.style.color = "green";
        successMsg.style.fontWeight = "bold";
        form.appendChild(successMsg);

        form.reset();

        setTimeout(() => successMsg.remove(), 3000);
    }
    
})

});
