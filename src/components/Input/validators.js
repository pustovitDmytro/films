/**
 * Created by pusti on 27.08.2017.
 */
const validators = {
    title:/^[\s\w,\.-]{1,50}$/,
    year:/^(?:19|20)\d{2}$/,
    format:/^[\w-]{0,15}$/,
    stars:/^[\s\w,-]{1,200}$/,
    actor:/^[\w-]{0,20}$/
};
export default validators;