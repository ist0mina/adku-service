export enum ToggleFieldTypes { SIDEBAR = 'sidebar' }

export type ToggleState = {
    [ToggleFieldTypes.SIDEBAR]?: boolean;
}

export enum ToggleActionTypes {
    TOGGLE = '@@toggle/TOGGLE'
}
