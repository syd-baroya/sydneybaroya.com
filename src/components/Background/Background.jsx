import { Component } from "react";
import threeJSEntryPoint from "../../scene/threeJSEntryPoint.js";

class Background extends Component {

    componentDidMount() 
    {
        threeJSEntryPoint(this.threeRootElement);
    }

    // componentDidUpdate() 
    // {
    //     const experience = new Experience(this.threeRootElement);
    // }

    render () {
        return (
            <div>
                <div className="header" style={{height: '75vh' }}></div>
                <div className="experience" ref={element => this.threeRootElement = element} />
            </div>
        );
    }
}

export default Background;