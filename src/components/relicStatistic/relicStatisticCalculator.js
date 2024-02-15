import React, {Component} from 'react';
import "./relicStatisticCalculator.css"

import RelicStatistic_CharacterSelector from './relicStatistic_CharacterSelector';
import RelicStatistic_RelicStats from './relicStatistic_RelicStats';
import RelicStatistic_StatWeightSelector from './relicStatistic_StatWeightSelector';
import RelicStatistic_Results from './relicStatistic_Results';

class RelicStatisticCalculator extends Component {

    constructor(props) {

        super(props);

        this.state = {

            /* stores what stats can be found in each relic piece */
            relicInfo: {
                Head: {
                    main: ["HP"],
                    sub: ["HP%", "ATK", "ATK%", "DEF", "DEF%", "SPD", "CRIT RATE", "CRIT DAMAGE", "BREAK EFFECT", "EFFECT HIT RATE", "EFFECT RES"]
                },
                Gloves: {
                    main: ["ATK"],
                    sub: []
                },
                Chest: {
                    main: ["HP","ATK%","DEF%","EFFECT HIT RATE","OUTGOING HEALING BOOST", "CRIT RATE", "CRIT DAMAGE"],
                    sub: ["This is fake", "this is as well"]
                },
                Feet: {
                    main: ["HP","ATK%","DEF%", "SPEED"],
                    sub: []
                },
                Sphere: {
                    main: ["HP", "ATK%", "DEF%", "PHYSICAL DAMAGE BOOST", "FIRE DAMAGE BOOST", "ICE DAMAGE BOOST", "WIND DAMAGE BOOST", "LIGHTNING DAMAGE BOOST", "QUANTUM DAMAGE BOOST", "IMAGINARY DAMAGE BOOST"],
                    sub: []
                },
                Rope: {
                    main: ["HP","ATK%","DEF%", "BREAK EFFECT", "ENERGY REGEN RATE"],
                    sub: []
                }
            },

            currentRelic: {
                type: "",
                mainStat: "",
                statOne: "",
                statTwo: "",
                statThree: "",
                statFour: ""
            },

            /* used to keep track of the selected relic info */
            relicTypeSelectorInfo: {
                name: "",
                possibleMainStats: [],
                possibleSubStats: [],
                selectedSubStats: []
            }
            
        };

    };

    componentDidMount() {

        console.log("Calculator Running")

    };

    componentWillUnmount() {

        console.log("Calculator unmounting")

    };

    buttonClick = (event) => {

        console.log(this.state.relicInfo)

    }

    /* keeps track of the relic type to be calculated */
    relicTypeSelector = (event) => {

        const selectedRelicType = event.target.value;

        /* grabs current state then changes the values we need and sets it as the new state for that value */
        let currentRelicTypeSelectorInfo = this.state.relicTypeSelectorInfo;

        currentRelicTypeSelectorInfo.name = selectedRelicType;
        currentRelicTypeSelectorInfo.possibleMainStats = this.state.relicInfo[selectedRelicType].main;
        currentRelicTypeSelectorInfo.possibleSubStats = this.state.relicInfo[selectedRelicType].sub;

        this.setState({

            relicTypeSelectorInfo: currentRelicTypeSelectorInfo

        });

    };

    relicMainStatSelector = (event) => {

    };

    relicSubStatSelector = (event) => {
        console.log("relicSubStatSelector was reached")

        const selectedStatName = event.target.value;
        console.log(selectedStatName)

    };

    render() {

        let selectedValue = this.state.relicTypeSelectorInfo.name;
        let relicTypeNameList = [];

        for(const [key, value] of Object.entries(this.state.relicInfo)) {

            relicTypeNameList.push(key)

        };

        const characterSelectorObject = {
            name:"Kafka",
             element:"Lightning",
             path:"Nhility"
        }

        return(

            <div className="relicStatisticCalculator_Container">

                <div className="placeholder">

                    <select value={selectedValue} onChange={this.relicTypeSelector}>
                        
                        <option value ="">Relic Type</option>
                        {relicTypeNameList.map((relicName) => (
                            
                            <option key={relicName} value={relicName}>

                                {relicName}

                            </option>

                        ))}

                    </select>

                    <select value={selectedValue}>
                        
                        <option value ="">Main Stat</option>
                        {this.state.relicTypeSelectorInfo.possibleMainStats.map((relicName) => (
                            
                            <option key={relicName} value={relicName}>

                                {relicName}

                            </option>

                        ))}

                    </select>

                    <select value={selectedValue} onChange={this.relicSubStatSelector}>
                        
                        <option value ="">Sub Stat 1</option>

                        {this.state.relicTypeSelectorInfo.possibleSubStats.map((subStatName) => (

                            this.state.relicTypeSelectorInfo.selectedSubStats.indexOf(subStatName) === -1 ? (

                                <option key={subStatName} value={subStatName}>{subStatName}</option>
                                
                            ) : (<option key={subStatName} value={subStatName} disabled hidden>{subStatName}</option>)

                        ))}

                    </select>

                    <select value={selectedValue}>
                        
                        <option value ="">Sub Stat 2</option>
                        {this.state.relicTypeSelectorInfo.possibleSubStats.map((subStatName) => (
                            
                            <option key={subStatName} value={subStatName}>

                                {subStatName}

                            </option>

                        ))}

                    </select>
                    

                </div>

                <button onClick={() => this.buttonClick()}>Click me for calculator</button>

                <RelicStatistic_CharacterSelector characterInfo={characterSelectorObject}/>
                <RelicStatistic_RelicStats />
                <RelicStatistic_StatWeightSelector />
                <RelicStatistic_Results />

            </div>

        )

    }

};

export default RelicStatisticCalculator;