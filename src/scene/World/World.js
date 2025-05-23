import Experience from '../Experience.js'
import Environment from './Environment.js'
import Floor from './Floor.js'
import Fox from './Fox.js'
import Cube from './Cube.js'

class World
{
    constructor(scene, sceneInfo)
    {
        this.experience = new Experience()
        this.scene = scene
        this.resources = this.experience.resources

        this.objects = [];

        // Wait for resources
        this.resources.on('ready', () =>
        {
            for (let i = 0; i < sceneInfo.length; i++) {
                const {objectRef, shader} = sceneInfo[i];
                const object = new objectRef();

                this.objects.push(object);
                if(object.mesh != null) {
                    this.scene.add(object.mesh);
                } else if (object.model != null) {
                    this.scene.add(object.model);
                }
            }

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