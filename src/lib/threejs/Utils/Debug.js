import * as dat from 'lil-gui'

class Debug
{
    constructor(container)
    {
        this.active = window.location.hash === '#debug'
        const options ={
            closeFolders: true
        }
        if(container)
        {
            options.container = container
        }

        if(this.active)
        {
            this.ui = new dat.GUI(options)
        }
    }
}

export default Debug;