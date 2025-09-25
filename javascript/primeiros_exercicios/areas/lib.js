const PI = 3.14159;
export function area_retangulo(altura, base){
    return altura * base;
}
export function area_circulo(raio){
    return PI * raio**2;
}
export function area_triangulo(altura, base){
    return altura*base/2;
}
export function area_trapezio(base_menor, base_maior, altura){
    return (base_menor+base_maior) * altura / 2;
}
