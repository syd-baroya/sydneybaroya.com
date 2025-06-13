import * as THREE from 'three'
import EventEmitter from './Utils/EventEmitter.js'

class Renderer extends EventEmitter
{
    constructor(canvas, sizes, clearColor)
    {
        super();

        this.sizes = sizes
        this.clearColor = clearColor;
        this.setInstance(canvas)

        this.instance.domElement.addEventListener('webglcontextlost', function(event) {
            console.log('WebGL context lost. Restoring...');
            // Optionally display a message to the user
            event.preventDefault();
        }, false);

        this.instance.domElement.addEventListener('webglcontextrestored', function(event) {
            console.log('WebGL context restored. Rebuilding scene...');
            // Rebuild your scene here
            this.trigger('restore');
        }, false);
    }

    setInstance(canvas)
    {
        this.instance = new THREE.WebGLRenderer({
            canvas: canvas,
            antialias: true
        })
        this.instance.useLegacyLights = false
        this.instance.toneMapping = THREE.CineonToneMapping
        this.instance.toneMappingExposure = 1.75
        this.instance.shadowMap.enabled = true
        this.instance.shadowMap.type = THREE.PCFSoftShadowMap
        this.instance.setClearColor(this.clearColor, 0);
        this.instance.setSize(this.sizes.width, this.sizes.height)
        this.instance.setPixelRatio(this.sizes.pixelRatio)
    }

    resize()
    {
        this.instance.setSize(this.sizes.width, this.sizes.height)
        this.instance.setPixelRatio(this.sizes.pixelRatio)
    }

    clearForUpdate() {
        this.instance.setClearColor( this.clearColor );
        this.instance.setScissorTest( false );
        this.instance.clear();
        this.instance.setClearColor( 0x000000 );
        this.instance.setScissorTest( true );
    }
    update(scene)
    {
        const rect = scene.userData.view.getBoundingClientRect();

        // check if it's offscreen. If so skip it

        if ( rect.bottom < 0 || rect.top > this.instance.domElement.clientHeight ||
             rect.right < 0 || rect.left > this.instance.domElement.clientWidth ) {

            return; // it's off screen

        }

        // set the viewport
        const bottom = this.instance.domElement.clientHeight - rect.bottom;

        this.instance.setViewport( rect.left, bottom, rect.width, rect.height );
        this.instance.setScissor( rect.left, bottom, rect.width, rect.height );

        this.instance.render( scene, scene.userData.camera.instance );    
    }
}

export default Renderer;