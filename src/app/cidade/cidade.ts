import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Cidade as CidadeModel } from '../interfaces/cidade';

@Component({
  selector: 'app-cidade',
  standalone: false,
  styleUrl: './cidade.css',
  templateUrl: './cidade.html',
})
export class Cidade {
  cidades: CidadeModel[] = [];
  formCidade: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.formCidade = this.formBuilder.group({
      nome: ['', Validators.required],
      uf: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(2)]],
      populacao: [null, [Validators.required, Validators.min(1)]],
      ddd: [null, [Validators.required, Validators.min(11), Validators.max(99)]],
    });
  }

  cadastrar(): void {
    if (this.formCidade.invalid) {
      this.formCidade.markAllAsTouched();
      return;
    }

    const { nome, uf, populacao, ddd } = this.formCidade.value;

    this.cidades.push({
      id: this.cidades.length + 1,
      nome: nome.trim(),
      uf: uf.toUpperCase(),
      populacao: Number(populacao),
      ddd: Number(ddd),
    });

    this.limpar();
  }

  limpar(): void {
    this.formCidade.reset();
  }

  campoInvalido(campo: string): boolean {
    const controle = this.formCidade.get(campo);
    return !!controle && controle.invalid && (controle.dirty || controle.touched);
  }
}
