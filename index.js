let nomeDoHeroi = "Novembre"
let xpAdquirida = 10001
// Se XP for menor do que 1.000 = Ferro
// Se XP for entre 1.001 e 2.000 = Bronze
// Se XP for entre 2.001 e 5.000 = Prata
// Se XP for entre 5.001 e 7.000 = Ouro
// Se XP for entre 7.001 e 8.000 = Platina
// Se XP for entre 8.001 e 9.000 = Ascendente
// Se XP for entre 9.001 e 10.000= Imortal
// Se XP for maior ou igual a 10.001 = Radiante
    if(xpAdquirida <= 1000){
        console.log("O Herói " + nomeDoHeroi + " está no nivel Ferro")
    }else if(xpAdquirida <= 2000){
        console.log("O Herói " + nomeDoHeroi + " está no nivel Bronze")
    }else if(xpAdquirida <=5000){
        console.log("O Herói " + nomeDoHeroi + " está no nivel Prata")
    }else if(xpAdquirida <= 7000){
        console.log("O Herói " + nomeDoHeroi +" está no nivel Ouro")
    }else if(xpAdquirida <= 8000){
        console.log("O Herói" + nomeDoHeroi + " está no nivel Platina")
    }else if(xpAdquirida <= 9000){
        console.log("O Herói " + nomeDoHeroi + " está no nivel ascedente")
    }else if(xpAdquirida <= 10000){
        console.log("O Herói " + nomeDoHeroi + " está no nivem Imortal")
    }else if(xpAdquirida >=10001){
        console.log("O Herói " + nomeDoHeroi + " alcançou o nivel Radiante")
    }
