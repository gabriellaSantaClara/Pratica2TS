"use strict";
class Aluno {
    constructor(id, nome, idade, altura, peso) {
        this.id = id;
        this.nome = nome;
        this.idade = idade;
        this.altura = altura;
        this.peso = peso;
    }
}
class Turma {
    constructor(id, nome) {
        this.id = id;
        this.nome = nome;
        this.alunos = [];
    }
    adicionarAluno(aluno) {
        this.alunos.push(aluno);
    }
    getNumAlunos() {
        return this.alunos.length;
    }
    getMediaIdades() {
        return this.mediaPorCampo('idade');
    }
    getMediaAlturas() {
        return this.mediaPorCampo('altura');
    }
    getMediaPesos() {
        return this.mediaPorCampo('peso');
    }
    mediaPorCampo(campo) {
        const total = this.alunos.reduce((acc, aluno) => acc + aluno[campo], 0);
        return this.alunos.length ? total / this.alunos.length : 0;
    }
}
const turma = new Turma(1, "Educação Física");
const form = document.getElementById('form-aluno');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    const nome = document.getElementById('nome').value;
    const idade = +document.getElementById('idade').value;
    const altura = +document.getElementById('altura').value;
    const peso = +document.getElementById('peso').value;
    const novoAluno = new Aluno(Date.now(), nome, idade, altura, peso);
    turma.adicionarAluno(novoAluno);
    atualizarEstatisticas();
    form.reset();
});
function atualizarEstatisticas() {
    document.getElementById('numAlunos').innerText = turma.getNumAlunos().toString();
    document.getElementById('mediaIdades').innerText = turma.getMediaIdades().toFixed(1);
    document.getElementById('mediaAlturas').innerText = turma.getMediaAlturas().toFixed(1);
    document.getElementById('mediaPesos').innerText = turma.getMediaPesos().toFixed(1);
}
"use strict";
class Aluno {
    constructor(id, nome, idade, altura, peso) {
        this.id = id;
        this.nome = nome;
        this.idade = idade;
        this.altura = altura;
        this.peso = peso;
    }
}
class Turma {
    constructor(id, nome) {
        this.id = id;
        this.nome = nome;
        this.alunos = [];
    }
    adicionarAluno(aluno) {
        this.alunos.push(aluno);
    }
    getNumAlunos() {
        return this.alunos.length;
    }
    getMediaIdades() {
        return this.mediaPorCampo('idade');
    }
    getMediaAlturas() {
        return this.mediaPorCampo('altura');
    }
    getMediaPesos() {
        return this.mediaPorCampo('peso');
    }
    mediaPorCampo(campo) {
        const total = this.alunos.reduce((acc, aluno) => acc + aluno[campo], 0);
        return this.alunos.length ? total / this.alunos.length : 0;
    }
}
const turma = new Turma(1, "Educação Física");
const form = document.getElementById('form-aluno');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    const nome = document.getElementById('nome').value;
    const idade = +document.getElementById('idade').value;
    const altura = +document.getElementById('altura').value;
    const peso = +document.getElementById('peso').value;
    const novoAluno = new Aluno(Date.now(), nome, idade, altura, peso);
    turma.adicionarAluno(novoAluno);
    atualizarEstatisticas();
    form.reset();
});
function atualizarEstatisticas() {
    document.getElementById('numAlunos').innerText = turma.getNumAlunos().toString();
    document.getElementById('mediaIdades').innerText = turma.getMediaIdades().toFixed(1);
    document.getElementById('mediaAlturas').innerText = turma.getMediaAlturas().toFixed(1);
    document.getElementById('mediaPesos').innerText = turma.getMediaPesos().toFixed(1);
}
