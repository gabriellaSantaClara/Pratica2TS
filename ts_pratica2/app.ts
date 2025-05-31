class Aluno {
  constructor(
    public id: number,
    public nome: string,
    public idade: number,
    public altura: number,
    public peso: number
  ) {}
}

class Turma {
  public alunos: Aluno[] = [];

  constructor(public id: number, public nome: string) {}

  adicionarAluno(aluno: Aluno) {
    this.alunos.push(aluno);
  }

  getNumAlunos(): number {
    return this.alunos.length;
  }

  getMediaIdades(): number {
    return this.mediaPorCampo('idade');
  }

  getMediaAlturas(): number {
    return this.mediaPorCampo('altura');
  }

  getMediaPesos(): number {
    return this.mediaPorCampo('peso');
  }

  private mediaPorCampo(campo: 'idade' | 'altura' | 'peso'): number {
    const total = this.alunos.reduce((acc, aluno) => acc + aluno[campo], 0);
    return this.alunos.length ? total / this.alunos.length : 0;
  }
}

const turma = new Turma(1, "Educação Física");

const form = document.getElementById('form-aluno') as HTMLFormElement;

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const nome = (document.getElementById('nome') as HTMLInputElement).value;
  const idade = +(document.getElementById('idade') as HTMLInputElement).value;
  const altura = +(document.getElementById('altura') as HTMLInputElement).value;
  const peso = +(document.getElementById('peso') as HTMLInputElement).value;

  const novoAluno = new Aluno(Date.now(), nome, idade, altura, peso);
  turma.adicionarAluno(novoAluno);
  atualizarEstatisticas();

  form.reset();
});

function atualizarEstatisticas() {
  (document.getElementById('numAlunos') as HTMLElement).innerText = turma.getNumAlunos().toString();
  (document.getElementById('mediaIdades') as HTMLElement).innerText = turma.getMediaIdades().toFixed(1);
  (document.getElementById('mediaAlturas') as HTMLElement).innerText = turma.getMediaAlturas().toFixed(1);
  (document.getElementById('mediaPesos') as HTMLElement).innerText = turma.getMediaPesos().toFixed(1);
}
