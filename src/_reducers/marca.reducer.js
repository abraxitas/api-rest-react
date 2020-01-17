const initialState = { anchor: 'left',
    marcas: [],
    open: false,
    marca: '',  
    descrip: '',
    usuario: ''
 };


export function marca(state = initialState, action) {
    switch (action.type) {
        case 'FETECHED_ALL_MARCA':
            return {
            ...state,
            marcas: action.marca
            };
        case 'MARCA_DETAIL':
            return {
                ...state,
                marca: action.marca,
                descrip: action.descrip,
                usuario: action.usuario
                
            };
        case "USER_UPDATED":
            return state;
        case "HANDLE_ON_CHANGE":
            return {
                ...state,
                [action.props]: action.marca
            };    
        default:
            return state
    }
  }