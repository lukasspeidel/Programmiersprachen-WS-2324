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
        <div class="card-content">
            <div class="card-number center-content">${dino.group_letter}${dino.card_number}</div>
            <div class="card-title">
                <h3>${dino.name}</h3>
                <h5>${dino.group}</h5>
            </div>
            <div class="card-image center-content">
                <img src="${imagePath}" alt="Image of a ${dino.name}" onerror="this.src='img/dummydino.png'">
            </div>
            <div class="info-icon center-content">Info</div>
            <div class="info">${dino.random_fact}</div>

            <div class="stats-wrapper">
                <div class="card-stat center-content">
                    <img src="${iconPath}height.png" alt="height">
                </div>
                <div class="card-val center-content">${dino.height}</div>
                <div class="card-stat center-content">
                    <img src="${iconPath}weight.png" alt="weight">
                </div>
                <div class="card-val center-content">${dino.weight}</div>
                <div class="card-stat center-content">
                    <img src="${iconPath}extinction.png" alt="years since extinction">
                </div>
                <div class="card-val center-content">${dino.years}</div>
                <div class="card-stat center-content">
                    <img src="${iconPath}iq.png" alt="eq times 100">
                </div>
                <div class="card-val center-content">${Math.round(dino.encephalization * 100)}</div>
                <div class="card-stat center-content bottom-left">
                    <img src="${iconPath}speed.png" alt="max speed">
                </div>
                <div class="card-val center-content">${dino.speed}</div>
                <div class="card-stat center-content">
                    <img src="${iconPath}teeth.png" alt="no. of teeth">
                </div>
                <div class="card-val center-content bottom-right">${dino.number_teeth}</div>
            </div>
        </div>`;
        document.getElementById("cards-container").appendChild(card);
    }
    );
}