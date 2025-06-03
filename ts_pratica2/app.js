"use strict";
var Aluno = /** @class */ (function () {
    function Aluno(id, nome, idade, altura, peso) {
        this.id = id;
        this.nome = nome;
        this.idade = idade;
        this.altura = altura;
        this.peso = peso;
    }
    return Aluno;
}());
var Turma = /** @class */ (function () {
    function Turma(id, nome) {
        this.id = id;
        this.nome = nome;
        this.alunos = [];
    }
    Turma.prototype.adicionarAluno = function (aluno) {
        this.alunos.push(aluno);
    };
    Turma.prototype.getNumAlunos = function () {
        return this.alunos.length;
    };
    Turma.prototype.getMediaIdades = function () {
        return this.mediaPorCampo('idade');
    };
    Turma.prototype.getMediaAlturas = function () {
        return this.mediaPorCampo('altura');
    };
    Turma.prototype.getMediaPesos = function () {
        return this.mediaPorCampo('peso');
    };
    Turma.prototype.mediaPorCampo = function (campo) {
        var total = this.alunos.reduce(function (acc, aluno) { return acc + aluno[campo]; }, 0);
        return this.alunos.length ? total / this.alunos.length : 0;
    };
    return Turma;
}());
var turma = new Turma(1, "Educação Física");
var form = document.getElementById('form-aluno');
form.addEventListener('submit', function (e) {
    e.preventDefault();
    var nome = document.getElementById('nome').value.trim();
    var idade = +document.getElementById('idade').value.trim();
    var alturaInput = document.getElementById('altura').value.trim();
    var pesoInput = document.getElementById('peso').value.trim();
    var numeroRegex = /^[0-9]+([.,][0-9]+)?$/;
    if (!numeroRegex.test(alturaInput) || !numeroRegex.test(pesoInput)) {
        alert("Altura e peso devem conter apenas números válidos. Use vírgula ou ponto como separador decimal.");
        return;
    }
    var altura = parseFloat(alturaInput.replace(',', '.'));
    var peso = parseFloat(pesoInput.replace(',', '.'));
    var novoAluno = new Aluno(Date.now(), nome, idade, altura, peso);
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
