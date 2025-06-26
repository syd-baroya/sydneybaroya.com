import Environment from './Environment.js'

class World
{
    constructor(scene, sceneInfo, resources, debug)
    {
        this.scene = scene
        this.resources = resources;
        this.debug = debug;
        this.objects = [];

        // Wait for resources
        this.resources.on('ready', () =>
        {
            for (let i = 0; i < sceneInfo.length; i++) {
                const {objectRef, shader} = sceneInfo[i];
                const object = new objectRef(this.debug, resources);

                this.objects.push(object);
                if(object.mesh != null) {
                    this.scene.add(object.mesh);
                } else if (object.model != null) {
                    this.scene.add(object.model);
                }
            }

            this.environment = new Environment(this.scene, this.debug, resources)


        })
    }

    update(delta)
    {
        for (let i = 0; i < this.objects.length; i++) {
            this.objects[i].update(delta);
        }
    }
}

export default World;