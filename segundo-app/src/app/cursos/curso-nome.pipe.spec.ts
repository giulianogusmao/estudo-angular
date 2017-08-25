import { CursoNomePipe } from './curso-nome.pipe';

describe('Suíte de testes de formatação do nome do curso - CursoNomePipe', () => {
  let cursoPipe: CursoNomePipe;

  // inicialização da instância
  beforeEach(() => cursoPipe = new CursoNomePipe())

  it('deve transformar o nome do curso para letras minusculas', () => {
    expect(cursoPipe.transform('OlA MundO')).toEqual('ola mundo');
  });
});
