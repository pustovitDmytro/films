/**
 * Created by pusti on 27.08.2017.
 */
const validators = {
    title:/^[\s\w,\.-]{1,20}$/,
    year:/^(?:19|20)\d{2}$/,
    format:/^[\w-]{0,10}$/,
    stars:/^[\s\w,-]{1,60}$/,
    actor:/^[\w-]{0,15}$/
};
export default validators;