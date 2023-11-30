$(document).ready(function () {
    createCards();
});

function createCards() {
    const iconPath = "img/icons/";

    dinosaurs.forEach(dino => {
        let card = document.createElement("div");
        card.className = "card-wrapper";
        const imagePath = "img/" + dino.group_letter + dino.card_number + "_" + dino.name.replace(/\s/g, '') + ".jpg";

        card.innerHTML = `
        <div class="whole_card">
            <div class="banner">
                <div class="group_number primary_color_red">
                    <h1>${dino.group_letter}</h1>
                </div>
                <div class="name">
                    <h1>${dino.name}</h1>
                </div>
            </div>
            <div class="picture">
                <img src="${imagePath}" alt="Image of a ${dino.name}" onerror="this.src='img/dummydino.png'">
            </div>
            <div class="facts secondary_color_red">
                <h3>${dino.group}</h3>${dino.random_fact}
            </div>
            <div class="attributes weight">
                <div class="attributes_description primary_color_red">
                    <div class="icon_container">
                        <img src="${iconPath}weight_icon.png" alt="Weight icon">
                    </div>
                    <div class="actual_attribute">
                        <h3>Weight</h3>
                    </div>
                </div>
                <div class="weight_info secondary_color_red">${dino.weight}</div>
            </div>
            <div class="attributes number_eggs">
                <div class="attributes_description primary_color_red">
                    <div class="icon_container">
                        <img src="${iconPath}number_eggs_icon.png" alt="Egg icon">
                    </div>
                    <div class="actual_attribute">
                        <h3>Eggs</h3>
                    </div>
                </div>
                <div class="number_eggs_info secondary_color_red">${dino.number_eggs}</div>
            </div>
            <div class="attributes speed">
                <div class="attributes_description primary_color_red">
                    <div class="icon_container">
                        <img src="${iconPath}speed_icon.png" alt="Speed icon">
                    </div>
                    <div class="actual_attribute">
                        <h3>Speed</h3>
                    </div>
                </div>
                <div class="speed_info secondary_color_red">${dino.speed}</div>
            </div>
            <div class="attributes iq">
                <div class="attributes_description primary_color_red">
                    <div class="icon_container">
                        <img src="${iconPath}iq_icon.png" alt="IQ icon">
                    </div>
                    <div class="actual_attribute">
                        <h3>IQ</h3>
                    </div>
                </div>
                <div class="iq_info secondary_color_red">${dino.iq}</div>
            </div>
            <div class="attributes number_skeletons">
                <div class="attributes_description primary_color_red">
                    <div class="icon_container">
                        <img src="${iconPath}number_skeletons_icon.png" alt="Skeleton icon">
                    </div>
                    <div class="actual_attribute">
                        <h3>Skeleton</h3>
                    </div>
                </div>
                <div class="number_skeletons_info secondary_color_red">${dino.number_skeletons}</div>
            </div>
            <div class="attributes jaw_size">
                <div class="attributes_description primary_color_red">
                    <div class="icon_container">
                        <img src="${iconPath}jaw_size_icon.png" alt="Jaw icon">
                    </div>
                    <div class="actual_attribute">
                        <h3>Jaw Size</h3>
                    </div>
                </div>
                <div class="jaw_size_info secondary_color_red">${dino.jaw_size}</div>
            </div>`;
        document.getElementById("cards-container").appendChild(card);
    }
    );
}