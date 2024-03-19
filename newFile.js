document.addEventListener("DOMContentLoaded", function () {
    const destinations = [
        { name: "Taj Mahal", description: "A UNESCO World Heritage Site, the Taj Mahal is an ivory-white marble mausoleum in Agra, India.", image: "Taj-mahal.jpg" },
        { name: "Jaipur", description: "Known as the Pink City, Jaipur is the capital and largest city of the Indian state of Rajasthan.", image: "jaipur.jpg" },
        { name: "Varanasi", description: "One of the world's oldest continually inhabited cities, Varanasi is the spiritual capital of India.", image: "varanasi.jpg" },
        { name: "Red Fort", description: "A significant landmark in Delhi, the Red Fort or Lal Qila is a splendid monument from the Mughal period. It serves as a testament to the country's rich cultural heritage and architectural finesse. The striking red sandstone walls coupled with delicate carvings make for a breathtaking sight.", image: "Redfort.jpg" },
        { name: "Golden Temple", description: "The Golden Temple or Sri Harmandir Sahib, one of India's most significant religious landmarks, is located along Punjab's Amritsar area amongst other sacred sites. Guru Ram Das, who happened to be the fourth Sikh Guru, initiated this Gurudwara’s construction during the 16th century with Hazrat Mian Mir, a respected Muslim saint.", image: "goldentemple.jpg" },
        { name: "Mysore Palace", description: "Mysore Palace or better known as Amba Vilas Palace is an impressive historic palace located in Karnataka's city, Mysore. It is a top-rated tourist destination in India .", image: "mysorepalace.jpg" },
        { name: "India Gate", description: "India Gate is an awe-inspiring monument built as a war memorial honouring Indian soldiers who demonstrated remarkable courage while serving under the British Empire during World War I and Afghan Wars.", image: "indiagate.jpg" },
        { name: "Ellora Caves", description: "Featuring Buddhist, Hindu and Jain monuments, Ellora Caves are a stunning rock-cut temple complex with 34 monasteries and temples. It takes about an hour by road to reach Ellora from Aurangabad. The UNESCO website says that Ellora 'illustrates the spirit of tolerance that was characteristic of ancient India'.", image: "elloracaves.jpg" },
        { name: "Vaishno Devi Temple", description: "Seated in the Trikuta Hills, the cave shrine of Vaishno Devi is believed to be a manifestation of Goddess Durga and is visited by thousands of devotees each year. There’s a popular belief that the Goddess herself beckons her devouts to visit her shrine.", image: "vaishnodevi.jpg" },
        { name: "Gateway of India", description: "Located on the waterfront in Colaba, South Mumbai, this arch monument is Mumbai’s prime landmark. It was built by the British to welcome King George V and Queen Mary during a royal visit in 1911.", image: "gatewayofindia.jpg" },
        { name: "Lotus Temple", description: "The Lotus Temple is an edifice of Bahai faith, resembling a lotus flower. It’s constructed purely with white marble and designed by Furiburz Sabha. The temple is open to people of all faiths.", image: "lotustemple.jpg" },
        { name: "Shaniwar Wada", description: "Built by Bajirao Peshwa, this architectural masterpiece was the erstwhile residence of the Peshwas and will leave you in awe with its massive gates, wooden pillars and a sprawling garden complex.", image: "shaniwarwada.jpg" },
    ];

    const destinationContainer = document.getElementById("destination-container");

    // Dynamically generate destination cards
    destinations.forEach(destination => {
        const card = document.createElement("div");
        card.classList.add("destination-card");
        card.innerHTML = `
            <h2>${destination.name}</h2>
            <img src="${destination.image}" alt="${destination.name}">
            <p>${destination.description}</p>
        `;
        destinationContainer.appendChild(card);
    });
});
