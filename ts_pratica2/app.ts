type Aluno = {
  id: number;
  nome: string;
  idade: number;
  altura: number;
  peso: number;
};

// Lista de alunos da "turma"
const alunos: Aluno[] = [];

const form = document.getElementById('form-aluno') as HTMLFormElement;

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const nome = (document.getElementById('nome') as HTMLInputElement).value.trim();
  const idade = +(document.getElementById('idade') as HTMLInputElement).value.trim();
  const alturaInput = (document.getElementById('altura') as HTMLInputElement).value.trim();
  const pesoInput = (document.getElementById('peso') as HTMLInputElement).value.trim();

  const altura = parseFloat(alturaInput.replace(',', '.'));
  const peso = parseFloat(pesoInput.replace(',', '.'));

  const novoAluno: Aluno = {
    id: Date.now(),
    nome,
    idade,
    altura,
    peso,
  };

  alunos.push(novoAluno);
  atualizarEstatisticas();
  form.reset();
});

function atualizarEstatisticas() {
  const numAlunos = alunos.length;
  const mediaIdades = calcularMediaIdade('idade');
  const mediaAlturas = calcularMediaAltura('altura');
  const mediaPesos = calcularMediaPeso('peso');

  (document.getElementById('numAlunos') as HTMLElement).innerText = numAlunos.toString();
  (document.getElementById('mediaIdades') as HTMLElement).innerText = mediaIdades.toFixed(1);
  (document.getElementById('mediaAlturas') as HTMLElement).innerText = mediaAlturas.toFixed(1);
  (document.getElementById('mediaPesos') as HTMLElement).innerText = mediaPesos.toFixed(1);
}

function calcularMediaIdade(campo: 'idade'): number {
  if (alunos.length === 0) return 0;
  const total = alunos.reduce((soma, aluno) => soma + aluno[campo], 0);
  return total / alunos.length;
}

function calcularMediaAltura(campo: 'altura'): number {
  if (alunos.length === 0) return 0;
  const total = alunos.reduce((soma, aluno) => soma + aluno[campo], 0);
  return total / alunos.length;
}

function calcularMediaPeso(campo: 'peso'): number {
  if (alunos.length === 0) return 0;
  const total = alunos.reduce((soma, aluno) => soma + aluno[campo], 0);
  return total / alunos.length;
}


