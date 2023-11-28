$(document).ready(function () {
    createCards();
});

function createCards() {

    dinosaurs.forEach(dino => {
        let card = document.createElement("div");

        card.innerHTML = `
        <div class="whole_card">
            <div class="banner">
                <div class="group_number primary_color_red">
                    <h1>Xy
                </div>
                <div class="name">
                    <h1>Whatever Dino</h1>
                </div>
            </div>
            <div class="picture">
                <img src="img\b3_allosaurus.jpg" alt="b3_allosaurus">
            </div>
            <div class="facts secondary_color_red">
                <h3>Group Name</h3>random facts random facts random facts random facts
            </div>
            <div class="attributes weight">
                <div class="attributes_description primary_color_red">
                    <div class="icon_container">
                        <img src="icons/weight_icon.png" alt="Weight icon">
                    </div>
                    <div class="actual_attribute">
                        <h3>Weight</h3>
                    </div>
                </div>
                <div class="weight_info secondary_color_red">info</div>
            </div>
            <div class="attributes number_eggs">
                <div class="attributes_description primary_color_red">
                    <div class="icon_container">
                        <img src="icons/number_eggs_icon.png" alt="Egg icon">
                    </div>
                    <div class="actual_attribute">
                        <h3>Eggs</h3>
                    </div>
                </div>
                <div class="number_eggs_info secondary_color_red">info</div>
            </div>
            <div class="attributes speed">
                <div class="attributes_description primary_color_red">
                    <div class="icon_container">
                        <img src="icons/speed_icon.png" alt="Speed icon">
                    </div>
                    <div class="actual_attribute">
                        <h3>Speed</h3>
                    </div>
                </div>
                <div class="speed_info secondary_color_red">info</div>
            </div>
            <div class="attributes iq">
                <div class="attributes_description primary_color_red">
                    <div class="icon_container">
                        <img src="icons/iq_icon.png" alt="IQ icon">
                    </div>
                    <div class="actual_attribute">
                        <h3>IQ</h3>
                    </div>
                </div>
                <div class="iq_info secondary_color_red">info</div>
            </div>
            <div class="attributes number_skeletons">
                <div class="attributes_description primary_color_red">
                    <div class="icon_container">
                        <img src="icons/number_skeletons_icon.png" alt="Skeleton icon">
                    </div>
                    <div class="actual_attribute">
                        <h3>Skeletons</h3>
                    </div>
                </div>
                <div class="number_skeletons_info secondary_color_red">info</div>
            </div>
            <div class="attributes jaw_size">
                <div class="attributes_description primary_color_red">
                    <div class="icon_container">
                        <img src="icons/jaw_size_icon.png" alt="Jaw icon">
                    </div>
                    <div class="actual_attribute">
                        <h3>Jaw Size</h3>
                    </div>
                </div>
                <div class="jaw_size_info secondary_color_red">info</div>
            </div>

        </div>`;
        document.getElementById("cards-container").appendChild(card);
    }
    );
}