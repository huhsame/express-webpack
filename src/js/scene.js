

let doBase = 'https://wxr.nyc3.digitaloceanspaces.com/';
let valveNameList = ['00_handle', '02_cover', '03_seal',
    '04_ball', '05_bolt', '05_holder','05_nut', 'base'];
let valveIdList = ['handle', 'cover', 'seal',
    'ball', 'bolt', 'holder','nut', 'base'];

function initAScene(){
    // let sceneEL = document.createElement('a-scene');
    // document.body.appendChild( sceneEL );
    // createCamera();
    // createAssets();
    // createValve();

    testBox();
}

function testBox(){
    let sceneEl = document.querySelector('a-scene');
    let boxEl = document.createElement('a-box');
    sceneEl.appendChild(boxEl);

}
function createCamera(){
    let sceneEL = document.querySelector('a-scene');
    let entityEl = document.createElement('a-entity');
    entityEl.setAttribute('id', 'camera');
    entityEl.setAttribute('position', '0 1 4');
    entityEl.setAttribute('rotation', '-30 0 0');
    let cameraEl = document.createElement('a-camera');
    entityEl.appendChild( cameraEl );
    sceneEL.appendChild( entityEl );

}

function createAssets() {
    let sceneEL = document.querySelector('a-scene');
    let assetsEl = document.createElement('a-aseets');
    for(let name of valveNameList){
        let id = 'valve-' + name
        if(name.startsWith('0')){
            id = 'valve-' + name.substring(3);
        }
        let doPath = 'ar3dp/resources/models/valve_3d/';
        let exs = ['obj', 'mtl']
        for( let ex of exs){
            let assetItemEl = document.createElement('a-asset-item');
            assetItemEl.setAttribute('id', id+'-'+ex);
            assetItemEl.setAttribute('src',doBase+doPath+name+'.'+ex);
            assetItemEl.setAttribute('crossorigin', 'anonymous');
            assetsEl.appendChild( assetItemEl );
        }
        let assetItemEl = document.createElement('a-mixin');
        assetItemEl.setAttribute('id',id);
        assetItemEl.setAttribute('obj-model', 'obj: #'+id+'-obj; mtl: #'+id+'-mtl')
        assetsEl.appendChild( assetItemEl );
        sceneEL.appendChild( assetsEl );
    }
}

function createValve(){
    let sceneEL = document.querySelector('a-scene');
    let valveEl = document.createElement('a-entity');
    valveEl.setAttribute('id', 'valve');

    for( let subid of valveIdList ){
        let id = 'valve-'+ subid;
        let entityEl = document.createElement('a-entity');
        entityEl.setAttribute('mixin',id);
        valveEl.appendChild( entityEl );
    }
    sceneEL.appendChild( valveEl );
}



initAScene();

/**
 *
 *  <a-entity mixin="red cube"></a-entity>
<a-asset-item id="avatar-obj" src="https://wxr.nyc3.digitaloceanspaces.com/huh/avatar.obj" crossorigin=”anonymous”></a-asset-item>
<a-asset-item id="avatar-mtl" src="https://wxr.nyc3.digitaloceanspaces.com/huh/avatar.mtl" crossorigin=”anonymous”></a-asset-item>
<a-mixin id ="avatar" avatar obj-model="obj: #avatar-obj; mtl: #avatar-mtl" rotation="0 90 0" scale="0.7 0.7 0.7"></a-mixin>
 *
 * */

