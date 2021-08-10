import { IPage, IStatus } from '../utils/interfaces';
import { EStatusType } from './enums';


export const INITIAL_PAGE: IPage = { start: 0, end: 2 }

export const INITAIL_STATUS: IStatus = { code: EStatusType.loading, message: "Loading"}

export const APP_ID = '75f972b80e26f14fe6c920aa6a85ad57';
