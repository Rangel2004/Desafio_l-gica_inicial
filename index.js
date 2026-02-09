// 1. O nome precisa de aspas por ser uma String (texto)
let nome = "icaro"; 
let xp = 7500;
let nivel = "";

if (xp < 1000) {
    nivel = "Ferro";
} else if (xp >= 1001 && xp <= 2000) {
    nivel = "Bronze";
} else if (xp >= 2001 && xp <= 5000) {
    nivel = "Prata";
} else if (xp >= 5001 && xp <= 7000) {
    nivel = "Ouro";
} else if (xp >= 7001 && xp <= 8000) {
    nivel = "Platina";
} else if (xp >= 8001 && xp <= 9000) { // Adicionei o Ascendente que faltava
    nivel = "Ascendente";
} else if (xp >= 9001 && xp <= 10000) { // Fechei o parêntese que faltava aqui
    nivel = "Imortal";
} else {
    nivel = "Radiante";
}

// Usando as variáveis dentro do console.log para ficar automático
console.log("O Herói de nome " + nome + " está no nível de " + nivel);