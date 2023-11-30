$(document).ready(function () {
    createCards();
});

function createCards() {
    const iconPath = "img/icons/";

    dinosaurs.forEach(dino => {
        let card = document.createElement("div");
        card.className = "card-wrapper";
        const imagePath = "img/" + dino.group_letter + dino["card number"] + "_" + dino.name.replace(/\s/g, '') + ".jpg";
        let cardColorPrimary = "";
        let cardColorSecondary = "";

        switch (dino.group_letter) {
            case "A":
                cardColorPrimary = "primary_color_green";
                break;
            case "B":
                cardColorPrimary = "primary_color_red";
                break;	
            case "C":
                cardColorPrimary = "primary_color_blue";
                break;
            case "D":
                cardColorPrimary = "primary_color_purple";
                break;
            case "E":
                cardColorPrimary = "primary_color_darkblue";
                break;
            case "F":
                cardColorPrimary = "primary_color_brown";
                break;
            case "G":	
                cardColorPrimary = "primary_color_orange";
                break;
            case "H":
                cardColorPrimary = "primary_color_lightgreen";
                break;
        }

        switch (dino.group_letter) {
            case "A":
                cardColorSecondary= "secondary_color_green";
                break;
            case "B":
                cardColorSecondary = "secondary_color_red";
                break;	
            case "C":
                cardColorSecondary = "secondary_color_blue";
                break;
            case "D":
                cardColorSecondary = "secondary_color_purple";
                break;
            case "E":
                cardColorSecondary = "secondary_color_darkblue";
                break;
            case "F":
                cardColorSecondary = "secondary_color_brown";
                break;
            case "G":	
                cardColorSecondary = "secondary_color_orange";
                break;
            case "H":
                cardColorSecondary = "secondary_color_lightgreen";
                break;
        }



        card.innerHTML = `
        <div class="whole_card">
            <div class="banner">
                <div class="group_number ${cardColorPrimary}">
                    <h1>${dino.group_letter}${dino["card number"]}</h1>
                </div>
                <div class="name">
                    <h2>${dino.name}</h2>
                </div>
            </div>
            <div class="picture">
                <img src="${imagePath}" alt="Image of a ${dino.name}" onerror="this.src='img/dummydino.png'">
            </div>
            <div class="facts ${cardColorSecondary}">
                <h3>${dino.group}</h3>${dino.random_fact}
            </div>
            <div class="attributes weight">
                <div class="attributes_description ${cardColorPrimary}">
                    <div class="icon_container">
                        <img src="${iconPath}weight_icon.png" alt="Weight icon">
                    </div>
                    <div class="actual_attribute">
                        <h3>Weight</h3>
                    </div>
                </div>
                <div class="weight_info ${cardColorSecondary}">${dino.weight}</div>
            </div>
            <div class="attributes number_eggs">
                <div class="attributes_description ${cardColorPrimary}">
                    <div class="icon_container">
                        <img src="${iconPath}number_eggs.png" alt="Egg icon">
                    </div>
                    <div class="actual_attribute">
                        <h3>Eggs</h3>
                    </div>
                </div>
                <div class="number_eggs_info ${cardColorSecondary}">${dino.number_eggs}</div>
            </div>
            <div class="attributes speed">
                <div class="attributes_description ${cardColorPrimary}">
                    <div class="icon_container">
                        <img src="${iconPath}speed_icon.png" alt="Speed icon">
                    </div>
                    <div class="actual_attribute">
                        <h3>Speed</h3>
                    </div>
                </div>
                <div class="speed_info ${cardColorSecondary}">${dino.speed}</div>
            </div>
            <div class="attributes iq">
                <div class="attributes_description ${cardColorPrimary}">
                    <div class="icon_container">
                        <img src="${iconPath}iq_icon.png" alt="IQ icon">
                    </div>
                    <div class="actual_attribute">
                        <h3>IQ</h3>
                    </div>
                </div>
                <div class="iq_info ${cardColorSecondary}">${dino.iq}</div>
            </div>
            <div class="attributes number_skeletons">
                <div class="attributes_description ${cardColorPrimary}">
                    <div class="icon_container">
                        <img src="${iconPath}number_skeletons_icon.png" alt="Skeleton icon">
                    </div>
                    <div class="actual_attribute">
                        <h3>Skeleton</h3>
                    </div>
                </div>
                <div class="number_skeletons_info ${cardColorSecondary}">${dino.number_skeletons}</div>
            </div>
            <div class="attributes jaw_size">
                <div class="attributes_description ${cardColorPrimary}">
                    <div class="icon_container">
                        <img src="${iconPath}jaw_size_icon.png" alt="Jaw icon">
                    </div>
                    <div class="actual_attribute">
                        <h3>Jaw Size</h3>
                    </div>
                </div>
                <div class="jaw_size_info ${cardColorSecondary}">${dino.jaw_size}</div>
            </div>`;
        document.getElementById("cards-container").appendChild(card);
    }
    );
}

function cardColor(){

}