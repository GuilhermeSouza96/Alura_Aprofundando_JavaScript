const alunos = ['Joao', 'Juliana', 'Caio', 'Ana'];
const mediaDosAlunos = [10, 7, 9, 6];

let listaDeNotasEAlunos = [alunos, mediaDosAlunos];

const exibeNomeENota = (nomeDoAluno) => {
    if (listaDeNotasEAlunos[0].includes(nomeDoAluno)){
        let indice = listaDeNotasEAlunos[0].indexOf(nomeDoAluno);
        return listaDeNotasEAlunos[0][indice] + ', sua media eh ' + listaDeNotasEAlunos[1][indice];
    }else {
        return "Aluno nao esta cadastrado";
    }
}

console.log(exibeNomeENota("Ana"));