import { AlunosService } from './alunos.service';
import { Aluno } from './aluno';

describe('Suíte de testes do serviço Alunos', () => {
  let alunosService: AlunosService;
  let alunoA: Aluno;
  let alunoB: Aluno;

  beforeEach(() => {
    alunosService = new AlunosService();
    alunoA = new Aluno(null, 'Teste 1', 'teste1@teste1.com');
    alunoB = new Aluno(null, 'Teste 2', 'teste2@teste2.com');
  });

  it('Deve limpar a lista de alunos', () => {
    // inserindo novos valores
    alunosService.saveAluno(alunoA);
    alunosService.saveAluno(alunoB);
    // limpando a lista
    alunosService.clearAlunos();
    // lê todos os alunos
    let alunos = alunosService.getAlunos();

    // verifica se a lista está vazia
    expect(alunos.length).toEqual(0);
  });

  it('Deve listar todos os alunos', () => {
    // limpando a lista
    alunosService.clearAlunos();
    // inserindo novos valores
    let id0 = alunosService.saveAluno(alunoA);
    let id1 = alunosService.saveAluno(alunoB);
    // lê todos os alunos
    let alunos = alunosService.getAlunos();

    expect(alunos).toBeDefined();
    expect(alunos.length).toEqual(2);
    expect(alunos[0]['id']).toEqual(id0);
    expect(alunos[1]['id']).toEqual(id1);
  });

  it('Deve cadastrar um aluno', () => {
    let id: number = alunosService.saveAluno(alunoA);     // salva um novo aluno
    let alunoCad: Aluno = alunosService.getAluno(id);     // lê o aluno salvo apartir do id que foi cadastrado

    expect(alunoCad).toBeDefined();                       // verifica se existe um aluno definido
    expect(alunoCad['id']).toEqual(id);                   // verifica se o id cadastrado é igaul ao id recebido
    expect(alunoCad['nome']).toEqual(alunoA['nome']);     // verifica se o nome do aluno recebido é igual ao nome do aluno cadastrado
    expect(alunoCad['email']).toEqual(alunoA['email']);   // verifica se o e-mail do aluno recebido é igual ao e-mail do aluno cadastrado
  });

  it('Deve alterar os dados de um aluno', () => {
    const novoNome = 'Fulano doido';
    const novoEmail = 'Fulano@emaildoido.com';

    let id: number = alunosService.saveAluno(alunoA);     // salva um novo aluno
    let alunoCad: Aluno = alunosService.getAluno(id);     // lê o aluno salvo apartir do id que foi cadastrado

    alunoCad['nome'] = novoNome;                          // set novo nome
    alunoCad['email'] = novoEmail;                        // set novo email
    let idAlt = alunosService.saveAluno(alunoCad);        // salva dados alterados
    let alunoAlt: Aluno = alunosService.getAluno(idAlt);  // lê os dados do aluno alterado

    expect(alunoAlt).toBeDefined();
    expect(id).toEqual(idAlt);
    expect(alunoAlt['nome']).toEqual(novoNome);
    expect(alunoAlt['email']).toEqual(novoEmail);
  });

  it('Deve excluir um aluno', () => {
    let id: number = alunosService.saveAluno(alunoA);
    alunosService.deleteAluno(id);

    let alunoCad = alunosService.getAluno(id);
    expect(alunoCad['id']).toBeUndefined();
  });
});
