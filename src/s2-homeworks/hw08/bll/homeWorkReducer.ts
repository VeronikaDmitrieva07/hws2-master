import {UserType} from '../HW8'

type ActionType =
    | { type: 'sort'; payload: 'up' | 'down' }
    | { type: 'check'; payload: number }

export const homeWorkReducer = (state: UserType[], action: ActionType): UserType[] => {
    switch (action.type) {
        case 'sort': { // by name
            const sortState = [...state]
            return action.payload === "down"
                ? sortState.sort((a, b) => b.name.localeCompare(a.name))
                : sortState.sort((a, b) => a.name.localeCompare(b.name))
        }
        case 'check': {
            return state.filter(u => u.age >= action.payload);
        }
        default:
            return state
    }
}
