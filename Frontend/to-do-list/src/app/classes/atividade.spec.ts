import { Atividade } from './atividade';

describe('Atividade', () => {
  it('should create an instance', () => {
    expect(new Atividade(0, 'teste')).toBeTruthy();
  });
});
