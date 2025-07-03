const sources = [
    {
        name: 'environmentMapTexture',
        type: 'cubeTexture',
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
        name: 'grassColorTexture',
        type: 'texture',
        path: 'dirt/color.jpg'
    },
    {
        name: 'grassNormalTexture',
        type: 'texture',
        path: 'dirt/normal.jpg'
    },
    {
        name: 'foxModel',
        type: 'gltfModel',
        path: 'Fox/glTF/Fox.gltf'
    },
    {
        name: 'summerModel',
        type: 'gltfModel',
        path: 'Summer/summer.glb'
    },
    {
        name: 'summerBakedTexture',
        type: 'texture',
        path: '/Summer/baked.jpg'
    },
    {
        name: 'otterModel',
        type: 'gltfModel',
        path: 'Otter/otterAnimated.glb'
    }
]

export default sources;