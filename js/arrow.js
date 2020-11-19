//Arrow function, ha nem adunk nevet akkor nevtelen fgv.
//

const functionExpression0 = function fnName(param) {
    
    console.log('function expression ');
}


const functionExpression = function (param) {
    console.log(arguments);
    console.log('function expression ', param);
}

//function expression Arrow function-nel megirva,
//ha 1 nel tobb parameter van nem kell zarojel
// Az arrow function nem hoz létre arguments object
// console.log(arguments);
//nem kell neki nevet adni
//const-al letrehozott fgv-t nem lehet felulirni

const functionExpressionWArrow = (param) => {
    
    console.log('function expression ', param);
}

const PI = 3.14;

functionExpression('parameter value');
functionExpressionWArrow('arrow param');



const fnExprReturnValue = function (param) {
    return 'param value: ' + param;
}

const fnExprReturnValueWArrow = (param) => 'param value: ' + param;


console.log(fnExprReturnValue(10));
console.log(fnExprReturnValueWArrow(10));


