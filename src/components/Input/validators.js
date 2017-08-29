/**
 * Created by pusti on 27.08.2017.
 */

const generateYearRegex  = ([year,decade]) => new RegExp(`^(19\\d{2})|20[0-${decade-1}]\\d|20${decade}[0-${year}]$`);

const validators = {
    title:/^[\s\w,\.-]{1,50}$/,
    year: generateYearRegex(new Date().getFullYear().toString().split("").reverse()),
    format:/^[\w-]{2,15}$/,
    stars:/^[\sa-zA-Z,-]{3,200}$/,
    actor:/^[a-zA-Z-]{0,20}$/
};
export default validators;