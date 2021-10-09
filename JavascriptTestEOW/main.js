/*Escribe una función que reciba un parámetro y lo imprima en consola*/
function basicPrint(param){
    console.log(param);
}
/*basicPrint("Andrés "+78632874);*/

/*Escribe una función que reciba dos parámetros, los sume e imprima en consola el resultado de la operación*/
function add(par1, par2){
    if(typeof(par1) == "number" && typeof(par2) == "number"){
        const result = Number(par1) + Number(par2);
        console.log(result)
    }
    else{
        console.log("Please insert numeric parameters")
    }  
}
/*add(908, 19200);*/

/*Escribe una función que reciba dos parámetros, los reste e imprima en consola es reultado de la operación*/
function minus(par1, par2){
    if(typeof(par1) == "number" && typeof(par2) == "number"){
        const result = Number(par1) - Number(par2);
        console.log(result)
    }
    else{
        console.log("Please insert numeric parameters")
    }  
}
/*minus(8972398, 231);*/

/*Escribe una función que reciba dos parámetros, los multiplique e imprima en consola es reultado de la operación*/
function multiply(par1, par2){
    if(typeof(par1) == "number" && typeof(par2) == "number"){
        const result = Number(par1) * Number(par2);
        console.log(result)
    }
    else{
        console.log("Please insert numeric parameters")
    }  
}
/*multiply(6972,8.1);*/

/*Escribe una función que reciba dos parámetros, los divida e imprima en consola es reultado de la operación*/
function division(par1, par2){
    if(typeof(par1) == "number" && typeof(par2) == "number"){
        const result = Number(par1) / Number(par2);
        console.log(result)
    }
    else{
        console.log("Please insert numeric parameters")
    }  
}
/*division(6972,8.1);*/

/*Escribe una función que recibe el radio de un círculo como parámetro, calcule el área e imprima*/
function circleArea(radio){
    if(typeof(radio) == "number"){
        const area = 3.1416 * (Number(radio) ** 2);
        console.log(area)
    }
    else{
        console.log("Please insert numeric parameter")
    }  
}
/*circleArea(2.57);*/

/*Escribe una función que reciba como parámetro un valor en metros e imprima en consola su equivalente en
kilometros con 2 decimales*/
function met2Kil(meters){
    if(typeof(meters) == "number"){
        const kil = meters/1000;
        console.log(kil.toFixed(2))
    }
    else{
        console.log("Please insert numeric parameter")
    }  
}
/*met2Kil(18979);*/

/*Escribe una función que reciba un valor en °C e imprima el equivalente en °F con máximo 2 decimales*/
function cel2Far(gradesC){
    if(typeof(gradesC) == "number"){
        const conv = (gradesC * 1.8) + 32;
        console.log(conv.toFixed(2))
    }
    else{
        console.log("Please insert numeric parameter")
    }  
}
/*cel2Far(3239.3892897239);*/

/* Escribe una función que reciba las siguientes listas de número como parámetro y encuentra el valor mas alto
y mas bajo en la lista. list1 = [10,4,2,20,5], list2 = [0,0,0,1,0], list3 = [-13,10,9,8,0,2000,-1]*/
function listLowHigh(list){
    var maxValue = -1000000;
    var minValue = 1000000;
    for(let i = 0; i < list.length; i++){
        if(list[i]>maxValue){
            maxValue = list[i]
        }
        if(list[i]<minValue){
            minValue = list[i]
        }
    }
console.log("Max value from list: " + maxValue);
console.log("Min value from list: " + minValue);
}
var list1 = [10,4,2,20,5];
var list2 = [0,0,0,1,0];
var list3 = [-13,10,9,8,0,2000,-1];
/*listLowHigh(list3);*/

/* Escribe una función que reciba dos parámetros con los que se calculará el valor exponencial de una base. El
primer parámetro será la base y el segundo será el exponente. Imprimir el resultado del valor exponencial de
la base en la consola*/
function exponential(base, exp){
    if(typeof(base) == "number" && typeof(exp) == "number"){
        const exponent = base ** exp;
        console.log(exponent)
    }
    else{
        console.log("Please insert numeric parameter")
    }
}
/*exponential(3,4);*/

/* Escribe una función que reciba un número como parámetro. Este número será la cantidad de veces que se debe
solicitar, con la función prompt, que el usuario ingrese el nombre de un país diferente. Después de que el 
usuario ingrese el nombre de los países, el sistema debe mostrar un mensaje en pantalla indicando el nombre 
del país y cuántas letras tiene el nombre del país.*/
function countryNameLength(attempts){
    if(typeof(attempts) == "number"){
        console.log("We are listing " + attempts + " countries.")
        for(let i = 0; i < attempts; i++){
            const countryName = prompt("Insert the name of the country","Country");
            if(countryName == null || countryName == ""){
                console.log("Invalid data, try again")
                break;
            }
            else{
                const countryLength = countryName.length;
                console.log("Country "+ (i + 1) + ": " + countryName + ". Amount of letters: "+ countryLength)
            }
        }
    }
    else{
        console.log("Please insert numeric parameter")
    }
}
/*countryNameLength(6);*/
