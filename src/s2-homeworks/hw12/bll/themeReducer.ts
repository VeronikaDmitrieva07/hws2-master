type ThemeType = {
    themeId: number
}

type ActionType = {
    type: 'SET_THEME_ID'
    id: number
}

const initState = {
    themeId: 1,
}

export const themeReducer = (state = initState, action: ActionType): ThemeType => { // fix any
    switch (action.type) {
        case 'SET_THEME_ID':
            return {
                ...state, themeId: action.id
            }
        // дописать

        default:
            return state
    }
}

export const changeThemeId = (id: number): ActionType => ({ type: 'SET_THEME_ID', id }) // fix any
