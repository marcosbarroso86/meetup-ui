import * as moment from 'moment-timezone';
import { DATE_FORMAT_YYYY_MM_DD, DATE_FORMAT_YYYY_MM_DD_WITH_TIME , TIMEZONE_AR_BSAS } from '../constants/index'

export const dateformater = {

    format: function(date , aformat) {
        return moment.tz( date, TIMEZONE_AR_BSAS).format(aformat)
    },
    
    getDate: function (){
        return this.format(new Date() , DATE_FORMAT_YYYY_MM_DD_WITH_TIME)
    },

    sumtoDate: function(date , days){
        date.setDate(date.getDate() + days )
        return this.format(date , DATE_FORMAT_YYYY_MM_DD_WITH_TIME);
    },

    timestampToDate : function(timestamp) {
        const milliseconds = timestamp * 1000;
        const aDate = new Date(milliseconds);
        return this.format(aDate , DATE_FORMAT_YYYY_MM_DD);
    }

}
