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
    }
]

export default sources;