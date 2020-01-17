import { userService } from '../_services';
import { history } from '../_helpers';

export const marcaAction = {
    getMarca,
    getMarcaById,
    onChangeProps,
    editMarcaInfo,
    createMarca,
    deleteMarcaById
};

function getMarca(){
    return dispatch => {
        let apiEndpoint = 'Marcas';
        userService.get(apiEndpoint)
        .then((response)=>{
            console.log(response.data);
            dispatch(changeMarcasList(response.data));
        }).catch((err)=>{
            console.log("Error");
            console.log(err);
        })
    };
}

function createMarca(payload){
    return dispatch => {
        let apiEndpoint = 'Marcas/';
        userService.post(apiEndpoint, payload)
        .then((response)=>{
            dispatch(createUserInfo());
            history.push('/marcas');
        }) 
    }
}

function getMarcaById(id){

    return dispatch => {
        let apiEndpoint = 'Marcas/'+ id;
        userService.get(apiEndpoint)
        .then((response)=>{
            console.log(response.data);
            dispatch(editMarcasDetails(response.data));
            debugger;
        })
    };
}

function onChangeProps(props, event){
    return dispatch =>{
        dispatch(handleOnChangeProps(props, event.target.value));
    }
}

function editMarcaInfo(id, payload){
    return dispatch => {
        let apiEndpoint = 'Marcas/'+ id;
        userService.put(apiEndpoint, payload)
        .then((response)=>{
            //console.log(response.data);
            dispatch(updatedUserInfo());
            history.push('/marcas');
        }) 
    }
}

function deleteMarcaById(id){
    return dispatch => {
        let apiEndpoint = 'Marcas/'+ id;
        userService.deleteDetail(apiEndpoint)
        .then((response)=>{
            dispatch(deleteMarcasDetails());
            dispatch(marcaAction.getMarca());
        })
    };
}

export function changeMarcasList(marca){
    return{
        type: "FETECHED_ALL_MARCA",
        marca: marca
    }
}

export function handleOnChangeProps(props, value){
    return{
        type: "HANDLE_ON_CHANGE",
        props: props,
        value: value
    }
}

export function editMarcasDetails(marcaparametro){
    debugger;
    return{
        type: "MARCA_DETAIL",
        marca: marcaparametro.marca,
        descrip: marcaparametro.descrip,
        usuario: marcaparametro.usuario
        
    }
    
}

export function updatedUserInfo(){
    return{
        type: "USER_UPDATED"
    }
}

export function createUserInfo(){
    return{
        type: "USER_CREATED_SUCCESSFULLY"
    }
}

export function deleteMarcasDetails(){
    return{
        type: "DELETED_MARCA_DETAILS"
    }
}