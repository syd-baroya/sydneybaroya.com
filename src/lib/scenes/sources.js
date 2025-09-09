const sources = [
    {
        name: 'environmentMapTexture',
        type: 'cubeTexture',
        folder: 'buildings/',
        path:
        [
            'px.jpg',
            'nx.jpg',
            'py.jpg',
            'ny.jpg',
            'pz.jpg',
            'nz.jpg'
        ]
    },
    {
        name: 'sunsetCubeMap',
        type: 'cubeTexture',
        folder: 'sunset/',
        path:
        [
            'px.png',
            'nx.png',
            'py.png',
            'ny.png',
            'pz.png',
            'nz.png'
        ]
    },
    {
        name: 'otterModel',
        type: 'gltfModel',
        path: 'Otter/otterSurfandPaddle.glb'
    },
    {
        name: 'waterShader',
        type: 'shader',
        vertPath: 'water.vert',
        fragPath: 'water.frag'
    },
    {
        name: 'snowShader',
        type: 'shader',
        vertPath: 'snow.vert',
        fragPath: 'snow.frag'
    }
    //keeping belowo in case I want to add the summer model back in
    
    // {
    //     name: 'summerModel',
    //     type: 'gltfModel',
    //     path: 'Summer/summer.glb'
    // },
    // {
    //     name: 'summerBakedTexture',
    //     type: 'texture',
    //     path: '/Summer/baked.jpg'
    // },
]

export default sources;