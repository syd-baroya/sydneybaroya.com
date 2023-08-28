import { Component } from "react";
import Experience from "../../scene/Experience.js";

class Background extends Component {

    componentDidMount() 
    {
        const experience = new Experience(this.threeRootElement);
    }

    // componentDidUpdate() 
    // {
    //     const experience = new Experience(this.threeRootElement);
    // }

    render () {
        return (
            <div>
                <h1>temp2</h1>
                <div className="experience" ref={element => this.threeRootElement = element} />
            </div>
        );
    }
}

export default Background;