function soma(num1, num2){
    return num1 + num2;
}
function sub(num1, num2){
    return num1 - num2;
}
function multi(num1, num2){
    return num1 * num2;
}
function divisao(num1, num2){
    return num1 / num2;
}
export default function calc(num1, num2, operador){
    switch(operador){
        case '+':
            return soma(num1, num2);
        case '-':
            return sub(num1, num2);
        case '*':
            return multi(num1, num2);
        case '/':
            return divisao(num1, num2)
    }
}