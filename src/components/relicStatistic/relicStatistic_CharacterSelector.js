import React, { useState } from "react";
import "./relicStatistic_CharacterSelector.css";

function RelicStatistic_CharacterSelector(props) {

    const characterList= [
        "Kafka",
        "Black Swan",
        "Fu Xuan",
        "Guinaifen"
    ];

    const characterImageFileName = {
        "Kafka": "Kafka_Image_Large",
        "Black Swan": "BlackSwan_Image_Large",
        "Fu Xuan": "FuXuan_Image_Large",
        "Guinaifen": "Guinaifen_Image_Large"
    }

    const [selectedCharacter, setSelectedCharacter] = useState("")

    const [characterImageFile, setCharacterImageFile] = useState("");

    const {characterInfo} = props;

    /* takes the name of the character, sets it as the active name then grabs the image to use in the app */
    function characterSelector(event) {

        let characterName = event.target.value;
        console.log(characterName)

        setSelectedCharacter(characterName)

        /* if we go back to the base value it will be empty and break */
        if(characterName.length > 0) {

            import(`../../images/${characterImageFileName[event.target.value]}.png`).then(image => {
    
                setCharacterImageFile(image.default)
    
            })

        }else{

            setCharacterImageFile("");

        }
    }

    return(

        <div className="relicStatisticCalculator_CharacterSelectorContainer">

            <select value={selectedCharacter} onChange={characterSelector} className="characterSelectorSelect">
                        
                <option value ="">Character</option>
                {characterList.map((characterName) => (
                    
                    <option key={characterName} value={characterName}>

                        {characterName}

                    </option>

                ))}

            </select>

            <img src={characterImageFile} className="characterSelectorIcon"/>
        </div>
    );

};

export default RelicStatistic_CharacterSelector;