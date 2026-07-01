// Konfigurasi Resmi Nomor Layanan Darurat WhatsApp BP3MI Manado
const NOMOR_DARURAT_WA = "6281143001228";

// Struktur Template Pesan Pengaduan Masyarakat
const templatePesan = "[EMERGENCY - BP3MI MANADO SULAWESI UTARA]\nSaya membutuhkan bantuan segera!\n\nNama Pelapor: \nHubungan Keluarga/Status: (Keluarga / CPMI)\nNo. Paspor/KTP Korban: \nNegara Penempatan: \nKronologi Masalah: ";

// Aksi Tombol Pengaduan Besar
const sosButton = document.getElementById("sosButton");
if (sosButton) {
    sosButton.addEventListener("click", function() {
        const teksMasyarakat = encodeURIComponent(templatePesan);
        window.location.href = `https://wa.me/${NOMOR_DARURAT_WA}?text=${teksMasyarakat}`;
    });
}

// DATABASE DATA LENGKAP KBRI & KJRI GLOBAL
const databaseKontak = [
    {
        wilayah: "Wilayah Afrika",
        list: [
            { nama: "KBRI Abuja (Nigeria)", detail: "4, Gnani Street, off West-African Union Crescent, Zone 4, Wuse, Abuja, Nigeria. | Telp: +234 9-291-7640" },
            { nama: "KBRI Addis Ababa (Etiopia)", detail: "Egypt Road, Higher 23, Kebele 10, House No. 2025, Addis Ababa, Ethiopia. | Telp: +251 11-371-2104" },
            { nama: "KBRI Aljir (Aljazair)", detail: "04, Rue d'Algerie, Hydra, Algiers, Algeria. | Telp: +213 23-48-22-26" },
            { nama: "KBRI Antananarivo (Madagaskar)", detail: "11, Villa 'Asandratra' Analamahitsy, Antananarivo 101, Madagascar. | Telp: +261 20-22-429-15" },
            { nama: "KBRI Dakar (Senegal)", detail: "Rue 4 x F, Point E, Dakar, Senegal. | Telp: +221 33-825-7123" },
            { nama: "KBRI Dar es Salaam (Tanzania)", detail: "299, Ali Hassan Mwinyi Road, Dar es Salaam, Tanzania. | Telp: +255 22-266-6111" },
            { nama: "KBRI Harare (Zimbabwe)", detail: "3, Lawson Avenue, Milton Park, Harare, Zimbabwe. | Telp: +263 24-270-3490" },
            { nama: "KBRI Kairo (Mesir)", detail: "13, Aisha El-Taymouria Street, Garden City, Cairo, Egypt. | Telp: +20 2-2794-7200" },
            { nama: "KBRI Maputo (Mozambik)", detail: "Av. Friedrich Engels No. 424, Maputo, Mozambique. | Telp: +258 21-492-311" },
            { nama: "KBRI Maroko (Rabat)", detail: "17, Avenue de la Victoire, Rabat, Morocco. | Telp: +212 537-639-661" },
            { nama: "KBRI Nairobi (Kenya)", detail: "Menengai Road, Upper Hill, Nairobi, Kenya. | Telp: +254 20-285-1000" },
            { nama: "KBRI Pretoria (Afrika Selatan)", detail: "949, Francis Baard Street, Arcadia, Pretoria 0083, South Africa. | Telp: +27 12-342-3350" },
            { nama: "KBRI Tripoli (Libya)", detail: "Shara Sabet, Ben Ashour, Tripoli, Libya. | Telp: +218 21-361-4560" },
            { nama: "KBRI Tunis (Tunisia)", detail: "15, Rue du Lac de Constance, Les Berges du Lac, 1053 Tunis, Tunisia. | Telp: +216 71-960-334" },
            { nama: "KBRI Windhoek (Namibia)", detail: "103, Nelson Mandela Avenue, Klein Windhoek, Windhoek, Namibia. | Telp: +264 61-285-1000" },
            { nama: "KBRI Yaoundé (Kamerun)", detail: "Quartier Golf, Yaoundé, Cameroon. | Telp: +237 222-219-541" },
            { nama: "KJRI Cape Town (Afrika Selatan)", detail: "124, Rosmead Avenue, Kenilworth 7708, Cape Town, South Africa. | Telp: +27 21-761-7015" }
        ]
    },
    {
        wilayah: "Wilayah Amerika (Utara, Pusat, & Selatan)",
        list: [
            { nama: "KBRI Bogota (Kolombia)", detail: "Calle 93 No. 13-24, Piso 4, Bogotá, Colombia. | Telp: +57 601-218-1200" },
            { nama: "KBRI Brasilia (Brasil)", detail: "SES Avenida das Nações, Quadra 805, Lote 20, Brasília DF, Brasil. | Telp: +55 61-3443-3431" },
            { nama: "KBRI Buenos Aires (Argentina)", detail: "Mariscal Ramón Castilla 2901, C1425DZE Buenos Aires, Argentina. | Telp: +54 11-4807-2211" },
            { nama: "KBRI Caracas (Venezuela)", detail: "Quinta 'Ymperial', Avenida El Paseo, Prados del Este, Caracas, Venezuela. | Telp: +58 212-977-1601" },
            { nama: "KBRI Havana (Kuba)", detail: "Quinta Avenue No. 2207 e/ 22 y 24, Miramar, Playa, Havana, Cuba. | Telp: +53 7-204-5469" },
            { nama: "KBRI Kota Meksiko (Meksiko)", detail: "Julio Verne No. 27, Colonia Polanco, Del. Miguel Hidalgo, C.P. 11560 México D.F. | Telp: +52 55-5280-6222" },
            { nama: "KBRI Kota Panama (Panama)", detail: "Avenida Samuel Lewis, Obarrio, Edificio Plaza Obarrio, Piso 4, Panama City. | Telp: +507 263-7432" },
            { nama: "KBRI Lima (Peru)", detail: "Avenida Central 150, San Isidro, Lima 27, Peru. | Telp: +51 1-222-0453" },
            { nama: "KBRI Ottawa (Kanada)", detail: "551, King Edward Avenue, Ottawa, Ontario K1N 7N6, Canada. | Telp: +1 (613) 724-1100" },
            { nama: "KBRI Paramaribo (Suriname)", detail: "Anton Dragtenweg No. 23, Paramaribo, Suriname. | Telp: +597 431-155" },
            { nama: "KBRI Quito (Ekuador)", detail: "Calle San Salvador E7-111 y Pradera, Edificio Alisal, Piso 2, Quito, Ecuador. | Telp: +593 2-333-2553" },
            { nama: "KBRI Santiago (Chili)", detail: "Avenida Apoquindo 3457, Piso 11, Las Condes, Santiago, Chile. | Telp: +56 2-2231-1253" },
            { nama: "KBRI Washington D.C. (AS)", detail: "2020 Massachusetts Avenue, N.W., Washington, D.C. 20036, USA. | Telp: +1 (202) 775-5200" },
            { nama: "KJRI Chicago (AS)", detail: "211, North Maratime Avenue, Chicago, IL 60601, USA. | Telp: +1 (312) 920-1880" },
            { nama: "KJRI Houston (AS)", detail: "10900, Richmond Avenue, Houston, TX 77042, USA. | Telp: +1 (713) 785-1691" },
            { nama: "KJRI Los Angeles (AS)", detail: "3457, Wilshire Boulevard, Los Angeles, CA 90010, USA. | Telp: +1 (213) 383-5126" },
            { nama: "KJRI New York (AS)", detail: "5, East 68th Street, New York, NY 10021, USA. | Telp: +1 (212) 879-0600" },
            { nama: "KJRI San Francisco (AS)", detail: "1111, Columbus Avenue, San Francisco, CA 94133, USA. | Telp: +1 (415) 474-9571" },
            { nama: "KJRI Toronto (Kanada)", detail: "129, Jarvis Street, Toronto, Ontario M5C 2H6, Canada. | Telp: +1 (416) 360-4020" },
            { nama: "KJRI Vancouver (Kanada)", detail: "1630, Alberni Street, Vancouver, B.C. V6G 1A6, Canada. | Telp: +1 (604) 682-8855" }
        ]
    },
    {
        wilayah: "Wilayah Asia & Timur Tengah",
        list: [
            { nama: "KBRI Abu Dhabi (UEA)", detail: "Zone 2, Al Khalidiyah, W58, Villa No. 1, Abu Dhabi, UAE. | Telp: +971 2-445-4444" },
            { nama: "KBRI Al-Manamah (Bahrain)", detail: "Villa 2113, Road 1964, Block 319, Al-Hoorah, Manama, Bahrain. | Telp: +973 1723-3123" },
            { nama: "KBRI Amman (Yordania)", detail: "23, Medina Munawarah Street, Amman, Jordan. | Telp: +962 6-552-8912" },
            { nama: "KBRI Ankara (Turki)", detail: "Sukru Melih Akat Sokak No. 16, Cankaya, Ankara, Turkey. | Telp: +90 312-438-2141" },
            { nama: "KBRI Baghdad (Irak)", detail: "Hay Al-Chadirji, Mahala 706, Zuqaq 2, House 14, Baghdad, Iraq. | Telp: +964 780-925-5000" },
            { nama: "KBRI Baku (Azerbaijan)", detail: "56, Sattar Bahlulzade Street, Amirjan, Baku, Azerbaijan. | Telp: +994 12-514-4113" },
            { nama: "KBRI Bandar Seri Bengawan (Brunei)", detail: "Simpang 336-43, Jalan Kebangsaan, Bandar Seri Bengawan, Brunei. | Telp: +673 233-0180" },
            { nama: "KBRI Bangkok (Thailand)", detail: "600-602, Petchburi Road, Ratchathewi, Bangkok 10400, Thailand. | Telp: +66 2-252-3135" },
            { nama: "KBRI Beijing (Tiongkok)", detail: "4, Dongzhimenwai Dajie, Chaoyang District, Beijing 100600, PRC. | Telp: +86 10-6532-5486" },
            { nama: "KBRI Beirut (Lebanon)", detail: "Baabda, Presidential Palace Road, Beirut, Lebanon. | Telp: +961 5-924-676" },
            { nama: "KBRI Damaskus (Suriah)", detail: "Mezzeh, Eastern Villas, Madina Munawarah Street, Damascus, Syria. | Telp: +963 11-611-9630" },
            { nama: "KBRI Dhaka (Bangladesh)", detail: "Road No. 53, Plot No. 14, Gulshan-2, Dhaka 1212, Bangladesh. | Telp: +880 2-5881-2260" },
            { nama: "KBRI Dili (Timor Leste)", detail: "Avenida Portugal, Pantai Kelapa, Dili, Timor-Leste. | Telp: +670 331-7107" },
            { nama: "KBRI Doha (Qatar)", detail: "Al-Muntazah Area, Al-Saha Street, Zone 24, Doha, Qatar. | Telp: +974 4465-7454" },
            { nama: "KBRI Hanoi (Vietnam)", detail: "50, Ngo Quyen Street, Hanoi, Vietnam. | Telp: +84 24-3825-3353" },
            { nama: "KBRI Islamabad (Pakistan)", detail: "Diplomatic Enclave, Sector G-5, Islamabad, Pakistan. | Telp: +92 51-283-2000" },
            { nama: "KBRI Kota Kuwait (Kuwait)", detail: "Plot 1, Street 101, Diplomatic Quarter, West Mishref, Kuwait. | Telp: +965 2531-1550" },
            { nama: "KBRI Kuala Lumpur (Malaysia)", detail: "233, Jalan Tun Razak, 50400 Kuala Lumpur, Malaysia. | Telp: +60 3-2116-4011" },
            { nama: "KBRI Muskat (Oman)", detail: "Way 3017, Villa 1334, Shatti Al-Qurum, Muscat, Oman. | Telp: +968 2469-4211" },
            { nama: "KBRI Manila (Filipina)", detail: "185, Salcedo Street, Legaspi Village, Makati City, Metro Manila, Philippines. | Telp: +63 2-8892-5061" },
            { nama: "KBRI New Delhi (India)", detail: "50-A, Kautilya Marg, Chanakyapuri, New Delhi 110021, India. | Telp: +91 11-2611-8640" },
            { nama: "KBRI Nur-Sultan (Kazakhstan)", detail: "Sarayshyk Street 22, Astana 010000, Kazakhstan. | Telp: +7 7172-790-670" },
            { nama: "KBRI Phnom Penh (Kamboja)", detail: "1, Street 400, Sangkat Boeung Keng Kang I, Phnom Penh, Cambodia. | Telp: +855 23-216-148" },
            { nama: "KBRI Pyongyang (Korea Utara)", detail: "Foreigners Munsudong, Daedonggang District, Pyongyang, DPRK. | Telp: +850 2-381-7228" },
            { nama: "KBRI Riyadh (Arab Saudi)", detail: "Diplomatic Quarter, Riyadh 11693, Saudi Arabia. | Telp: +966 11-488-2800" },
            { nama: "KBRI Seoul (Korea Selatan)", detail: "380, Yeodeu-daero, Yeongdeungpo-gu, Seoul, South Korea. | Telp: +82 2-783-5675" },
            { nama: "KBRI Singapura", detail: "7, Chatsworth Road, Singapore 249761. | Telp: +65 6737-7422" },
            { nama: "KBRI Kolombo (Sri Lanka)", detail: "58, Sir Ernest de Silva Mawatha, Colombo 07, Sri Lanka. | Telp: +94 11-267-4337" },
            { nama: "KBRI Tashkent (Uzbekistan)", detail: "73, Yahyo Gulyamov Street, Tashkent 100000, Uzbekistan. | Telp: +998 71-232-0236" },
            { nama: "KBRI Teheran (Iran)", detail: "210, Ghaem Magham Farahani Avenue, Tehran, Iran. | Telp: +98 21-8871-6865" },
            { nama: "KBRI Tokyo (Jepang)", detail: "5-2-9, Higashi-Gotanda, Shinagawa-ku, Tokyo 141-0022, Japan. | Telp: +81 3-3441-4201" },
            { nama: "KBRI Vientiane (Laos)", detail: "Route Phon Kheng, Saysettha District, Vientiane, Laos. | Telp: +856 21-413-905" },
            { nama: "KBRI Yangon (Myanmar)", detail: "100, Pyidaungsu Yeiktha Road, Dagon Township, Yangon, Myanmar. | Telp: +95 1-373-540" },
            { nama: "KJRI Dubai (UEA)", detail: "Al Mina Road, Al Hudaiba Area, Bur Dubai, Dubai, UAE. | Telp: +971 4-398-5555" },
            { nama: "KJRI Davao (Filipina)", detail: "Ecoland Drive, Matina, Davao City 8000, Philippines. | Telp: +63 82-297-0402" },
            { nama: "KJRI Guangzhou (Tiongkok)", detail: "Dong Jin Hotel, 2 Monsun Road, Tianhe District, Guangzhou, PRC. | Telp: +86 20-8365-2831" },
            { nama: "KJRI Hong Kong", detail: "127-129, Leighton Road, Causeway Bay, Hong Kong. | Telp: +852 3653-6300" },
            { nama: "KJRI Istanbul (Turki)", detail: "Esentepe Mah. Büyükdere Cad. No:118, Şişli, Istanbul, Turkey. | Telp: +90 212-674-8686" },
            { nama: "KJRI Jeddah (Arab Saudi)", detail: "Al-Rehab District, 4, Masyhur Al-Harithi Street, Jeddah, Saudi Arabia. | Telp: +966 12-672-5555" },
            { nama: "KJRI Johor Bahru (Malaysia)", detail: "46, Jalan Taat, 80100 Johor Bahru, Johor, Malaysia. | Telp: +60 7-221-2000" },
            { nama: "KJRI Karachi (Pakistan)", detail: "E-1-A, Shahrah-e-Iran, Clifton, Karachi, Pakistan. | Telp: +92 21-3587-4666" },
            { nama: "KJRI Kota Kinabalu (Malaysia)", detail: "Lorong Kemajuan, Karamunsing, 88000 Kota Kinabalu, Sabah, Malaysia. | Telp: +60 88-218-600" },
            { nama: "KJRI Kuching (Malaysia)", detail: "Lot 868, Section 64, KTLD, Jalan Green, 93150 Kuching, Sarawak, Malaysia. | Telp: +60 82-241-734" },
            { nama: "KJRI Mumbai (India)", detail: "19, Altamount Road, Cumballa Hill, Mumbai 400026, India. | Telp: +91 22-2351-1678" },
            { nama: "KJRI Osaka (Jepang)", detail: "Twin 21 MID Tower 22F, 2-1-61 Shiromi, Chuo-ku, Osaka 540-6122, Japan. | Telp: +81 6-6949-5563" },
            { nama: "KJRI Penang (Malaysia)", detail: "467, Jalan Burma, 10350 George Town, Penang, Malaysia. | Telp: +60 4-227-4121" },
            { nama: "KJRI Shanghai (Tiongkok)", detail: "Shanghai Mart 10F, 2299 Yan'an Road West, Changning District, Shanghai, PRC. | Telp: +86 21-6235-1150" }
        ]
    },
    {
        wilayah: "Wilayah Eropa",
        list: [
            { nama: "KBRI Athena (Yunani)", detail: "99, Marathonodromon Street, 154 52 Psychico, Athens, Greece. | Telp: +30 210-677-4692" },
            { nama: "KBRI Belgrade (Serbia)", detail: "Bulevar Kneza Aleksandra Karadjordjevica 18, 11040 Belgrade, Serbia. | Telp: +381 11-367-4220" },
            { nama: "KBRI Berlin (Jerman)", detail: "Lehrter Straße 16-17, 10557 Berlin, Germany. | Telp: +49 30-5900310" },
            { nama: "KBRI Bern (Swiss)", detail: "Elfenauweg 51, 3006 Bern, Switzerland. | Telp: +41 31-351-6622" },
            { nama: "KBRI Bratislava (Slowakia)", detail: "Mudronova 47, 811 03 Bratislava, Slovakia. | Telp: +421 2-5441-9886" },
            { nama: "KBRI Brussels (Belgia)", detail: "Boulevard de la Plaine 38, 1050 Brussels, Belgium. | Telp: +32 2-771-2014" },
            { nama: "KBRI Bucharest (Rumania)", detail: "Aleea Alexandru No. 19, Sector 1, Bucharest, Romania. | Telp: +40 21-312-0742" },
            { nama: "KBRI Budapest (Hungaria)", detail: "Varosligeti fasor 26, 1068 Budapest, Hungary. | Telp: +36 1-413-3800" },
            { nama: "KBRI Den Haag (Belanda)", detail: "Tobias Asserlaan 8, 2517 KC The Hague, Netherlands. | Telp: +31 70-310-8100" },
            { nama: "KBRI Helsinki (Finlandia)", detail: "Kuusisaarentie 8, 00340 Helsinki, Finland. | Telp: +358 9-477-0370" },
            { nama: "KBRI Kopenhagen (Denmark)", detail: "Øregårds Allé 25, 2900 Hellerup, Copenhagen, Denmark. | Telp: +45 39-62-4435" },
            { nama: "KBRI Kyiv (Ukraina)", detail: "Otto Schmidt Street 8, Kyiv 04107, Ukraine. | Telp: +380 44-206-5446" },
            { nama: "KBRI Lisbon (Portugal)", detail: "Avenida Das Descobertas 18, Restelo, 1400-092 Lisbon, Portugal. | Telp: +351 21-304-1820" },
            { nama: "KBRI London (Britania Raya)", detail: "30, Great Peter Street, Westminster, London SW1P 2BU, UK. | Telp: +44 20-7499-7661" },
            { nama: "KBRI Madrid (Spanyol)", detail: "Calle de Agastia 65, 28027 Madrid, Spain. | Telp: +34 914-130-294" },
            { nama: "KBRI Moskow (Rusia)", detail: "Novokuznetskaya Ulitsa 12, Moscow, Russia. | Telp: +7 495-951-9549" },
            { nama: "KBRI Oslo (Norwegia)", detail: "Fritzners gate 12, 0244 Oslo, Norway. | Telp: +47 22-12-5130" },
            { nama: "KBRI Paris (Prancis)", detail: "47-49, Rue de Cortambert, 75116 Paris, France. | Telp: +33 1-4503-0760" },
            { nama: "KBRI Praha (Ceko)", detail: "Nad Buďánkami II/7, 150 00 Prague 5, Czech Republic. | Telp: +420 257-214-388" },
            { nama: "KBRI Roma (Italia)", detail: "Via Campania 55, 00187 Rome, Italy. | Telp: +39 06-420-0911" },
            { nama: "KBRI Sarajevo (Bosnia)", detail: "Splitska 9, 71000 Sarajevo, Bosnia and Herzegovina. | Telp: +387 33-568-550" },
            { nama: "KBRI Sofia (Bulgaria)", detail: "5, Yury Venelin Street, 1000 Sofia, Bulgaria. | Telp: +359 2-963-32433" },
            { nama: "KBRI Stockholm (Swedia)", detail: "Kungsbroplan 1, 112 27 Stockholm, Sweden. | Telp: +46 8-5455-5880" },
            { nama: "KBRI Vatikan", detail: "Via della Camilluccia 491, 00135 Rome, Italy. | Telp: +39 06-3630-7591" },
            { nama: "KBRI Warsawa (Polandia)", detail: "Ul. Estonska 3/5, 03-903 Warsaw, Poland. | Telp: +48 22-617-5108" },
            { nama: "KBRI Wina (Austria)", detail: "Gustav-Tschermak-Gasse 5-7, 1180 Vienna, Austria. | Telp: +43 1-476230" },
            { nama: "KBRI Zagreb (Kroasia)", detail: "Prilaz Gjure Dezelica 19, 10000 Zagreb, Croatia. | Telp: +385 1-4578-311" },
            { nama: "KJRI Frankfurt (Jerman)", detail: "Zeppelinallee 23, 60325 Frankfurt am Main, Germany. | Telp: +49 69-247090" },
            { nama: "KJRI Hamburg (Jerman)", detail: "Bebelallee 15, 22299 Hamburg, Germany. | Telp: +49 40-5132040" },
            { nama: "KJRI Marseille (Prancis)", detail: "25, Boulevard Carmagnole, 13008 Marseille, France. | Telp: +33 4-9123-0160" }
        ]
    },
    {
        wilayah: "Wilayah Oseania & Pasifik",
        list: [
            { nama: "KBRI Canberra (Australia)", detail: "8, Darwin Avenue, Yarralumla, ACT 2600, Canberra, Australia. | Telp: +61 2-6250-8600" },
            { nama: "KBRI Port Moresby (PNG)", detail: "Lot 1 & 2, Section 411, Kula Close, Saraga Street, 6-Mile, Port Moresby, Papua New Guinea. | Telp: +675 325-3116" },
            { nama: "KBRI Suva (Fiji)", detail: "6, Mariko Street, Flagstaff, Suva, Fiji. | Telp: +679 331-6697" },
            { nama: "KBRI Wellington (Selandia Baru)", detail: "70, Glen Road, Kelburn, Wellington 6012, New Zealand. | Telp: +64 4-475-8695" },
            { nama: "KJRI Melbourne (Australia)", detail: "72, Queens Road, Melbourne, VIC 3004, Australia. | Telp: +61 3-9525-2755" },
            { nama: "KJRI Noumea (Kaledonia Baru)", detail: "2, Rue di la Somme, Noumea, New Caledonia. | Telp: +687 282-555" },
            { nama: "KJRI Perth (Australia)", detail: "134, Adelaide Terrace, East Perth, WA 6004, Australia. | Telp: +61 8-9221-5858" },
            { nama: "KJRI Sydney (Australia)", detail: "236-238, Maroubra Road, Maroubra, NSW 2035, Sydney, Australia. | Telp: +61 2-9344-9933" }
        ]
    }
];

function renderKontak(filterText = "") {
    const container = document.getElementById("kontakWilayahContainer");
    if (!container) return;
    
    container.innerHTML = "";

    databaseKontak.forEach(kawasan => {
        const filteredList = kawasan.list.filter(item => 
            item.nama.toLowerCase().includes(filterText.toLowerCase()) || 
            item.detail.toLowerCase().includes(filterText.toLowerCase())
        );

        if (filteredList.length > 0) {
            const detailsElement = document.createElement("details");
            detailsElement.className = "kawasan-details";

            if (filterText !== "") {
                detailsElement.open = true;
            }

            const summaryElement = document.createElement("summary");
            summaryElement.className = "kawasan-summary";
            summaryElement.innerText = kawasan.wilayah;
            detailsElement.appendChild(summaryElement);

            const wrapperBlock = document.createElement("div");
            wrapperBlock.className = "details-wrapper";

            const contentBlock = document.createElement("div");
            contentBlock.className = "details-content";

            const paddingBlock = document.createElement("div");
            paddingBlock.className = "details-inner-padding";

            const listKBRI = filteredList.filter(item => item.nama.toUpperCase().startsWith("KBRI"));
            const listKJRI = filteredList.filter(item => item.nama.toUpperCase().startsWith("KJRI") || item.nama.toUpperCase().startsWith("KDEI"));

            if (listKBRI.length > 0) {
                const subTitleKBRI = document.createElement("h5");
                subTitleKBRI.innerText = "🏛️ Kedutaan Besar (KBRI)";
                subTitleKBRI.className = "sub-title-instansi"; 
                paddingBlock.appendChild(subTitleKBRI);

                const ulKBRI = document.createElement("ul");
                ulKBRI.className = "list-instansi"; 

                listKBRI.forEach(item => {
                    const li = document.createElement("li");
                    li.className = "kontak-item";
                    li.innerHTML = `<strong>${item.nama}</strong><p>${item.detail}</p>`;
                    ulKBRI.appendChild(li);
                });
                paddingBlock.appendChild(ulKBRI);
            }

            if (listKJRI.length > 0) {
                const subTitleKJRI = document.createElement("h5");
                subTitleKJRI.innerText = "🏢 Konsulat Jenderal (KJRI / KDEI)";
                subTitleKJRI.className = "sub-title-instansi"; 
                paddingBlock.appendChild(subTitleKJRI);

                const ulKJRI = document.createElement("ul");
                ulKJRI.className = "list-instansi-last"; 

                listKJRI.forEach(item => {
                    const li = document.createElement("li");
                    li.className = "kontak-item";
                    li.innerHTML = `<strong>${item.nama}</strong><p>${item.detail}</p>`;
                    ulKJRI.appendChild(li);
                });
                paddingBlock.appendChild(ulKJRI);
            }

            contentBlock.appendChild(paddingBlock);
            wrapperBlock.appendChild(contentBlock);
            detailsElement.appendChild(wrapperBlock);
            container.appendChild(detailsElement);
        }
    });
}

window.searchNegara = function() {
    const searchBar = document.getElementById("searchBar");
    const query = searchBar ? searchBar.value : "";
    renderKontak(query);
};

// LOGIKA NAVIGATION SLIDER HALAMAN 1 KE HALAMAN 2
const slideBtn = document.getElementById('slideBtn');
const slideTrack = document.getElementById('slideTrack');
const sliderContainer = document.getElementById('sliderContainer');
const backBtn = document.getElementById('backBtn');

let isDragging = false;
let startX = 0;
let maxSlide = 0;

if (slideTrack && slideBtn) {
    maxSlide = slideTrack.clientWidth - slideBtn.clientWidth - 10;

    slideBtn.addEventListener('mousedown', startDrag);
    window.addEventListener('mousemove', drag);
    window.addEventListener('mouseup', endDrag);

    slideBtn.addEventListener('touchstart', startDrag);
    window.addEventListener('touchmove', drag);
    window.addEventListener('touchend', endDrag);
}

function startDrag(e) {
    isDragging = true;
    startX = (e.type === 'touchstart') ? e.touches[0].clientX : e.clientX;
    slideBtn.style.transition = 'none';
}

function drag(e) {
    if (!isDragging) return;
    
    const currentX = (e.type === 'touchmove') ? e.touches[0].clientX : e.clientX;
    let deltaX = currentX - startX;

    if (deltaX < 5) deltaX = 5;
    if (deltaX > maxSlide) deltaX = maxSlide;

    slideBtn.style.left = deltaX + 'px';

    if (deltaX >= maxSlide * 0.9) {
        triggerSlideRight();
    }
}

function endDrag() {
    if (!isDragging) return;
    isDragging = false;
    
    if (parseInt(slideBtn.style.left) < maxSlide * 0.9) {
        slideBtn.style.transition = 'left 0.3s ease';
        slideBtn.style.left = '5px';
    }
}

function triggerSlideRight() {
    isDragging = false;
    slideBtn.style.transition = 'left 0.3s ease';
    slideBtn.style.left = maxSlide + 'px';
    sliderContainer.style.transform = 'translateX(-50%)';
}

if (backBtn) {
    backBtn.addEventListener('click', () => {
        sliderContainer.style.transform = 'translateX(0%)';
        setTimeout(() => {
            if(slideBtn) slideBtn.style.left = '5px';
        }, 500);
    });
}

document.addEventListener("DOMContentLoaded", function() {
    renderKontak();
});