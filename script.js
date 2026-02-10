document.addEventListener("DOMContentLoaded", function () {

   
    
    window.addEventListener('click', function(event) {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    });
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

    container.innerHTML += `
        <nav class="navbar">
            <a href="">
                <img src="css/imgs/logo.jpg" class="logo" alt="logo"/>
            </a>

            <nav>
                <ul>
                    ${menuHTML}
                </ul>
            </nav>

            <a href="#" class="mail-a">
            <i class="fa fa-envelope fa-3x" class="mail-icon"></i>
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
    /* pop up forma */
    const modal = document.getElementById("popUpModal");
    

    function toggleModal(event) {
        event.preventDefault();
        modal.style.display = modal.style.display === "block" ? "none" : "block";
    }

    document.querySelectorAll('.mail-a, .close, .dugme').forEach(function(element) {
        element.addEventListener('click', toggleModal);
    });

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

    const productsSekcija = document.getElementById("products");

    const h1 = document.createElement("h1");
    h1.textContent = "Najtraženije!";
    productsSekcija.appendChild(h1);

    const row = document.createElement("div");
    row.classList.add("product-row");
    productsSekcija.appendChild(row);

    products.forEach(product => {
        const card = document.createElement("div");
        card.classList.add("product-card");

        const title = document.createElement("h3");
        title.textContent = product.title;

        const img = document.createElement("img");
        img.src = product.img;
        img.alt = product.title;

        const price = document.createElement("p");              // Dinamicko Generisanje
        price.classList.add("cena3");
        price.textContent = product.price;

        const br = document.createElement("br");

        const a = document.createElement("a");
        a.href = "#contact";
        a.style.textDecoration = "none";

        const btn = document.createElement("button");
        btn.type = "button";
        btn.classList.add("pr-btn");
        btn.textContent = "Poručite!";

        a.appendChild(btn);

        card.appendChild(title);
        card.appendChild(img);
        card.appendChild(price);
        card.appendChild(br);
        card.appendChild(a);

        row.appendChild(card);
    });

    
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

const forms = document.querySelectorAll("#contactForm")



forms.forEach(form=> {
form.addEventListener("submit", function(e){
    e.preventDefault();
    const nameInput = form.querySelector("#name");
    const surnameInput = form.querySelector("#surname");
    const emailInput = form.querySelector("#email");
    const phoneInput = form.querySelector("#phone");
    const messageInput = form.querySelector("#message");
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

    if (surnameInput.value.trim() === ""){
        setError(surnameInput, "Morate uneti prezime!");
        valid = false;
    } else if (!isValidSurname(surnameInput.value.trim())){
        setError(surnameInput, "Prezime mora poceti velikim slovom i imati najmanje 3 slova");
        valid = false;
    } else{
        setSuccess(surnameInput);
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
    function setError(input, message){
        const small = input.nextElementSibling;

        small.textContent = message;
        small.style.display = "block";

        input.classList.add("error");
        input.classList.remove("success");
    }

    function setSuccess(input){
        const small = input.nextElementSibling;

        small.textContent = "";
        small.style.display = "none";

        input.classList.remove("error");
        input.classList.add("success");
    }


    

    function isValidEmail(email){
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    }

    function isValidName(name){
        return /^[A-ZČĆŽŠĐ][a-zčćžšđ]{2,}$/.test(name);
    }

    function isValidSurname(surname){
        return /^[A-ZČĆŽŠĐ][a-zčćžšđ]{2,}$/.test(surname);
    }
    
    function isValidPhone(phone){
        const cista = phone.replace(/\s+/g, "");
        const regex = /^(\+381|06)[0-9\s]+$/;
        return regex.test(phone) && cista.replace(/\D/g, "").length >= 6;
    }

    })
});
