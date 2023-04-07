
type changeThemeIdType = {
    type: 'SET_THEME_ID',
    id: number
}

export type themeType = {
    themeId: number
}

const initState: themeType = {
    themeId: 1,
}

export const themeReducer = (state = initState, action: changeThemeIdType): any => { // fix any
    switch (action.type) {
        case 'SET_THEME_ID':
            return {
                themeId: action.id
            }
        default:
            return state
    }
}

export const changeThemeId = (id: number): changeThemeIdType => ({ type: 'SET_THEME_ID', id }) // fix any
