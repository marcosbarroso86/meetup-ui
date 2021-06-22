//MOMENT TIMEZONE
export const TIMEZONE_AR_BSAS = 'America/Argentina/Buenos_Aires';
export const DATE_FORMAT_YYYY_MM_DD = 'YYYY-MM-DD';
export const DATE_FORMAT_DD_MM_YYYY = 'DD-MM-YYYY'
export const DATE_FORMAT_YYYY_MM_DD_WITH_TIME = 'YYYY-MM-DDThh:mm';
export const DATE_FORMAT_YYYY_MM_DD_WITH_TIME_SIMPLE = 'YYYY-MM-DD hh:mm';

// API
export const MEETUPS_API_HOST = "http://localhost:8080";
export const USERS_API_HOST = "http://localhost:8090";

export const MEETUP_URI = "/api/meetups";
export const BEER_MEETUP_URI = "/api/meetups/beer-crates";
export const USERS_URI = "/api/users"
export const AUTHENTICATE_URI = '/api/users/token'

export const WEATHER_API = "https://community-open-weather-map.p.rapidapi.com";
export const WEATHER_URI = "/forecast/daily?q=Buenos%20Aires&units=metric&cnt=16"

//MESSAGES
export const USER_EXIST_MESSAGE = "Ya confirmaste tu asistencia en esta meetup";
export const SAVE_MEETUP_MESSAGE = "La meetup se creó con éxito"
export const CHECK_MEETUP = "Confirmaste tu asistencia con éxito"

export const USER_SESSION = "USER_SESSION"

export const INVALID_EMAIL = "NO ES UN CORREO VÁLIDO";
export const PASSWORD_CHARACTERS_ERROR = "LA CONTRASEÑA DEBE SER MAYOR A 6 CARACTERES";
export const PASSWORDS_NOT_MATCH = "LAS CONTRASEÑAS NO COINCIDEN"
export const INVALIDA_TITLE = "DEBES COMPLETEAR EL TÍTULO"

export const VALID_PASSWORD_LENGTH = 6

export const ADMIN_USER = "admin@dominio.com"
