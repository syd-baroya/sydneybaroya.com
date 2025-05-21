

export default function Scene({num}) {

    const divClass =  "view";
    const divID = divClass + num;


    /**
     * TODO
     * move canvas out of here into a main page and replace with a div here
     * copy how they do multiple scenes here: https://github.com/mrdoob/three.js/blob/master/examples/webgl_multiple_elements_text.html
     * want to be able to control what is in the scene, maybe have it as arguments passed into here or in a .jsx file like sections.jsx or a .js file like sources.js
     * 
     */

    return (
        <div id={ divID } className={divClass}>
        </div>
    );
}