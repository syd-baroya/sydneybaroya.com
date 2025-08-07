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
    // {
    //     name: 'grassColorTexture',
    //     type: 'texture',
    //     path: 'dirt/color.jpg'
    // },
    // {
    //     name: 'grassNormalTexture',
    //     type: 'texture',
    //     path: 'dirt/normal.jpg'
    // },
    // {
    //     name: 'foxModel',
    //     type: 'gltfModel',
    //     path: 'Fox/glTF/Fox.gltf'
    // },
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
    {
        name: 'otterModel',
        type: 'gltfModel',
        path: 'Otter/otterAnimated.glb'
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
]

export default sources;