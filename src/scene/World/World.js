import Experience from '../Experience.js'
import Environment from './Environment.js'
import Floor from './Floor.js'
import Fox from './Fox.js'
import Cube from './Cube.js'

class World
{
    constructor(scene)
    {
        this.experience = new Experience()
        this.scene = scene
        this.resources = this.experience.resources

        // Wait for resources
        this.resources.on('ready', () =>
        {
            //test code
            // this.floor = new Floor()
            // this.fox = new Fox()

            // Setup
            this.cube = new Cube();
            this.scene.add(this.cube.mesh)
            this.environment = new Environment(this.scene)

        })
    }

    update()
    {
        // if(this.fox)
        //     this.fox.update()
    }
}

export default World;