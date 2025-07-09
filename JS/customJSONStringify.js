function customJSONStringify (value) {

    if (value === null) {
        return 'null'
    };

    const type = typeof value;

    if (type === 'string') {
        return `"${value.replace(/"/g, '\\"')}"`;
    } 

    if (type === 'number' || type === 'boolean') {
        return String(value);
    }

    // type Array
    if (Array.isArray(value)) {
        const elements = value.map(el => 
            typeof el === 'undefined' || typeof el === 'function' || typeof el === 'symbol'
                ? 'null'
                : customJSONStringify(el)
        );
        console.log('elements ',elements);

        return `[${elements.join(',')}]`;
    }

    // type Object
    if (type === 'object') {
        const keys = Object.keys(value);
        const pairs = keys.map(key => {
            const val = value[key];
            if (typeof val === 'undefined' || typeof val === 'function' || typeof val === 'symbol') {
                return undefined; // skip like JSON.stringify
            }
        
            return `"${key}":${customJSONStringify(val)}`;
        }).filter(Boolean);

        return `{${pairs.join(',')}}`
    }

    return undefined;
    
}


const resultInput = 2;
let result = customJSONStringify(resultInput);
console.log('resultInput result typeOf result ', resultInput, result, typeof result);

const result2Input = 'This is my "bag"'
let result2 = customJSONStringify(result2Input);
console.log('result2Input result ', result2);

const resul3Input = true;
let result3 = customJSONStringify(resul3Input);
console.log('resul3Input result3 typeOf result3 ', resul3Input, result3, typeof result3);

const value = [5, "hello", true];
const result4 = customJSONStringify(value);
console.log(value, result4);

const objectValue = {a: '1', b: 2, c: true};
const result5 = customJSONStringify(objectValue);
console.log(objectValue, result5);