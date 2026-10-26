import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppModule } from '../app-module';
import { Cidade } from './cidade';

describe('Cidade', () => {
  let component: Cidade;
  let fixture: ComponentFixture<Cidade>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppModule],
    }).compileComponents();

    fixture = TestBed.createComponent(Cidade);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should add a city to the list when the form is valid', () => {
    component.formCidade.setValue({ nome: 'Jacareí', uf: 'sp', populacao: 235000, ddd: 12 });

    component.cadastrar();

    expect(component.cidades.length).toBe(1);
    expect(component.cidades[0].uf).toBe('SP');
    expect(component.formCidade.value.nome).toBeNull();
  });

  it('should not add a city when the form is invalid', () => {
    component.formCidade.setValue({ nome: '', uf: '', populacao: null, ddd: null });

    component.cadastrar();

    expect(component.cidades.length).toBe(0);
  });
});
