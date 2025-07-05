import * as THREE from 'three'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'
import EventEmitter from './EventEmitter.js'

class Resources extends EventEmitter
{
    constructor(sources)
    {
        super()

        this.sources = sources

        this.items = {}
        this.toLoad = this.sources.length
        this.loaded = 0

        this.setLoaders()
        this.startLoading()
    }

    setLoaders()
    {
        this.loaders = {}
        this.loaders.gltfLoader = new GLTFLoader().setPath('/models/')
        this.loaders.textureLoader = new THREE.TextureLoader().setPath('/textures/')
        this.loaders.cubeTextureLoader = new THREE.CubeTextureLoader().setPath('/textures/environmentMap/')
        this.loaders.shaderLoader = new THREE.FileLoader().setPath('/shaders/');
    }

    startLoading()
    {
        // Load each source
        for(const source of this.sources)
        {
            if(source.type === 'gltfModel')
            {
                this.loaders.gltfLoader.load(
                    source.path,
                    (file) =>
                    {
                        this.sourceLoaded(file, source.name)
                    }
                )
            }
            else if(source.type === 'texture')
            {
                this.loaders.textureLoader.load(
                    source.path,
                    (file) =>
                    {
                        this.sourceLoaded(file, source.name)
                    }
                )
            }
            else if(source.type === 'cubeTexture')
            {
                this.loaders.cubeTextureLoader.load(
                    source.path,
                    (file) =>
                    {
                        this.sourceLoaded(file, source.name)
                    }
                )
            }
            else if(source.type === 'shader')
            {
                this.loaders.shaderLoader.load(
                    source.vertPath,
                    (file) =>
                    {
                        this.sourceLoaded(file, source.name, 'vert')
                    }
                )
                 this.loaders.shaderLoader.load(
                    source.fragPath,
                    (file) =>
                    {
                        this.sourceLoaded(file, source.name, 'frag')
                    }
                )
            }
        }
    }

    sourceLoaded(file, name, extraName=null)
    {
        if(extraName) {
            if(this.items[name] === undefined) {
                this.items[name] = {}
            }
            this.items[name][extraName] = file
        }
        else {
            this.items[name] = file
        }

        this.loaded++

        if(this.loaded === this.toLoad)
        {
            this.trigger('ready')
        }
    }
}

export default Resources;