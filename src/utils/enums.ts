export enum EActionType {
    fetch_weather = 'FETCH_WEATHER',
    temp_data = 'SET_TEMP_DATA',
    left_page = 'LEFT_PAGE',
    right_page = 'RIGHT_PAGE'
}

export enum EStatusType {
    error = 'ERROR',
    loading = 'LOADING',
    ok = 'OK'
}

export enum ETempType {
    f = "Fahrenheit",
    c = "Celsius"
}