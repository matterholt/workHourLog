import { flexScale } from "../standardDefaults/flexTimeScale";

function getFlexTimeMinValue(percentValue) {
    const section = flexScale.find(
      (flexTimeValues) => flexTimeValues.percentHour === percentValue
    );
    return section.mins[0]
}


export { getFlexTimeMinValue };