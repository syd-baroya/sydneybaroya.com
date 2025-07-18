import Experience from '../Experience.js'
import Environment from './Environment.js'
// import Floor from './Floor.js'
// import Fox from './Fox.js'
import Cube from './Cube.js'

class World
{
    constructor()
    {
        this.experience = new Experience()
        this.scene = this.experience.scene
        this.resources = this.experience.resources

        // Wait for resources
        this.resources.on('ready', () =>
        {
            //test code
            // this.floor = new Floor()
            // this.fox = new Fox()

            // Setup
            this.cube = new Cube();
            this.environment = new Environment()
        })
    }

    update()
    {
        // if(this.fox)
        //     this.fox.update()
    }
}

export default World;