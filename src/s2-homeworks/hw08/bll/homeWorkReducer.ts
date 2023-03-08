import {UserType} from '../HW8'

type ActionType =
    | { type: 'sort'; payload: 'up' | 'down' }
    | { type: 'check'; payload: number }

export const homeWorkReducer = (state: UserType[], action: ActionType): UserType[] => { // need to fix any
    switch (action.type) {
        case 'sort': // by name
            const state_res = [...state];
            state_res.sort((a: UserType, b: UserType) : number => {
                if (action.payload === "up") {
                    if (a.name > b.name) {
                        return 1;
                    } else return -1;
                } else if (action.payload === "down"){
                    if (a.name < b.name) {
                        return 1
                    } else return -1;
                } else return 0;
                })
            return state_res // need to fix
        case 'check':
            const state_filtrated = state.filter((x: UserType) => x.age >= action.payload);
            return state_filtrated; // need to fix
        default:
            return state
    }
}
