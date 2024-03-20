function subtrair(vitorias, derrotas){
	return vitorias - derrotas;
}

let resultado = subtrair (350, 175);
let nome = "hunter"
let nivel;


switch (true) {
    case resultado < 10:
        nivel = "Ferro";
        break;
    case resultado >= 11 && resultado <= 20:
        nivel = "Bronze";
        break;
    case resultado >= 21 && resultado <= 50:
        nivel = "Prata";
        break;
    case resultado >= 51 && resultado <= 80:
        nivel = "Ouro";
        break;
    case resultado >= 81 && resultado <= 90:
        nivel = "diamante";
        break;
    case resultado >= 91 && resultado <= 100:
        nivel = "Lendario";
        break;
    default:
        nivel = "Imortal";
        break;
}

console.log(`O Herói  ${nome}  tem saldo de ${resultado} vitórias e está no nível ${nivel}`);