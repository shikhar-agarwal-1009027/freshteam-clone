import { helper } from '@ember/component/helper';

export function isEqual(arg) {
    const [param1, param2] = arg;
    return param1 === param2;
}

export default helper(isEqual);