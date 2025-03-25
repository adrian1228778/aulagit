// let litrodegasolina =  5.50
// let distanciadeviagem = 200
// let consumodocarro = 10 //por cada 1 litro//
// let custodebiagen = ( distanciadeviagem/ consumodocarro  )*litrodegasolina 
// console.log( custodebiagen) 


// function consumodeconbustible(  distanciadeviagem , consumodocarro , ) {
//     return  ( distanciadeviagem/ consumodocarro)
// }




// function presodagasolina( consumodocarro ,litrodegasolina ) {
//     return  ( consumodocarro*litrodegasolina)
// }
// console.log( presodagasolina(consumodeconbustible(200,10),6));

// function  sayMyName(name) {
//     console.log("you name is" + name);

// }
// sayMyName(" acosta ")



// function juros(valor, porcentaje) {
//     const masjuros = (porcentaje/100)*valor
//    return valor+masjuros
    
// }
// console.log(juros(100,10));
// --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// function  edad(edade,nome) {
//     const maior = 18;
  
//      if (edade>=maior) {

//         console.log("vc e maior de idade "+ (nome))
//      }
//      else{
//         console.log("vc e menor de idad "+ (nome))

//      }
    
// }

// edad(17,"adrian")
// edad(18,"acosta")
// ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// function soma (nuemroUn,numeroDois) {
//    return(nuemroUn+numeroDois)
   
// }
// function media(soma,divisor) {
//    return(soma/divisor)
   
// }
// let sum = soma(10,8)
// let medi = media(sum,2)
// console.log(medi)
// function gasolinacon(distancia, consumo ) {
//    return(distancia/ consumo)   
// }
// function valorViaje(gasolinacon,viage) {
// return (gasolinacon*viage)
// }
// let nono = valorViaje(gasolinacon(200,10), 6.53)

// console.log(nono)
// -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// function escrevenome(nome, idade) {
// console.log(`ola voce ${nome}, tudo bem`)
// verificaridade(idade)

// }
// function verificaridade(idade) {
// if (idade>=18) {
//    console.log("voce e maior de idade")}
//    else {
//       console.log("vc é menor de idade")
//    }
// }   

// escrevenome("adian",17)
// ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// function classificarimc(imc) {
//    if (imc<18.5) {
//       return `imc:${imc} - abaxio de peso`;
//    }
//    else if(imc < 25){
//       return `imc :${ imc} - peso é normal`
//    }   else if (imc < 30){
//       return `imc :${ imc} - acima de peso`
//    }   else if(imc < 40){
//       return `imc :${ imc} - obeso`
//    }   else{
//       return `imc :${ imc} - obesidade grave`
//    }
// }
// function calcularimc(altura, peso) {
//    return peso/(altura*altura)
   
// }
// console.log(classificarimc( calcularimc(1.79, 91)));
// ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// const pessoa = {
//    nome :"adrian",
//    idade : "17",
//    altura : " 1.79",
//    descrever: function () {
//       console.log(`meu nome é ${this.nome} e minha iadade é ${this.idade} `);

      
//    } , 
// };
// pessoa.descrever()
// console.log(pessoa.nome);
// console.log(pessoa.altura);
// console.log(pessoa.idade);
// console.log(pessoa["nome"]);
 // ---------------------------------------------------------------------------------------------------------------------------------------------------- 
// class Pessoa {
//  nome;
//  idade;
//  constructor(){
//       this.nome ="adrian";
//       this.idade = "17";
//  }
//  descrever (){
//    console.log(`meu nome é ${this.adrian} e minha idade é ${this.idade}`);
//  }
//  }
// let pessoa = new Pessoa();
// Pessoa.name= "carol"
// Pessoa.idade= 18

//  pessoa.descrever()
//  console.log(pessoa);
//  ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// class Pessoa {
//  / class Pessoa {
//     nome;
//      idade;
//      anodenacimiento;
//      constructor(){
//          this.nome ="adrian";
//           this.idade = "17";
//           anodenacimiento = 2025 - idade;
//     }
//     descrever (){
//       console.log(`meu nome é ${this.adrian} e minha idade é ${this.idade}`);
//     }
// }
// let pessoaUm = new Pessoa ("adrian","17")
// let pessoaDois = new Pessoa ("abraham","18")



// compararPessoa(pessoaUm ,  pessoaDois)
// function compararPessoa(p1,p2) {
//    if (p1.idade<p2.idade) {
//       console.log(`apessoa ${p2.nome} é mais velha que la pessoa ${p1.nome}`);      
//    }
//    else{ 
//       console.log(`apessoa ${p1.nome} é mais velha que la pessoa ${p2.nome}`);      


//    }
// }
// -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// class carro{
//     marca;
//     cor;
//     gasolina;

//     constructor(marca , cor, consumo ){
//         this.marca = marca ;
//         this.cor = cor;
//         this.consumoPorKm= consumo;

//     }
    
//     CalculoDeValorviagem(precosGasolia, distancia ,){
//         let listroConsumido = distancia/this.consumoPorKm;
//         let custoViagem =  listroConsumido*precosGasolia;
//         console.log(`tu carro es  ${this.marca} el color es  ${this.cor},  y el consumo de ${this.consumoPorKm} ${custoViagem}`);


//     }
// }
// let fiesta  = new carro("new fiesta", "prata", 12)
// fiesta.CalculoDeValorviagem(5, 7) 


// -----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
//actividad mia
class Pessoa {
    nome;
    idade;
    
    constructor( nome, idade ){
             this.nome = nome;
              this.idade = idade;

              

            }   
          classificarimc(imc) {
   if (imc<18.5) {
      return `imc:${imc} - abaxio de peso`;
   }
   else if(imc < 25){
      return `imc :${ imc} - peso é normal`
   }   else if (imc < 30){
      return `imc :${ imc} - acima de peso`
   }   else if(imc < 40){
      return `imc :${ imc} - obeso`
   }   else{
      return `imc :${ imc} - obesidade grave`
   }
}

 calcularimc(altura, peso) {
   return peso/(altura*altura)
   
}
 cualculaMedia(nota1, nota2,nota3 ){
    let neta = nota1+nota2+ nota3
    let media = neta/3 
    return ` me nome é ${this.nome } e minha idade  é ${this.idade} sua media foi de :${ media}`

 }
}
let loco  = new Pessoa("adrian", 17)
console.log(loco.classificarimc(loco.calcularimc(1.79, 91)));

let nene  = new Pessoa("çato", 69)
console.log(nene.classificarimc(nene.calcularimc(1.60, 91)));


console.log(loco.cualculaMedia(199 , 187, 12));
console.log(nene.cualculaMedia(34 , 187, 14));
    
    
    