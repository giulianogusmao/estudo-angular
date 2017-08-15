import { Component, OnInit, OnDestroy } from '@angular/core';
import { Http } from '@angular/http';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { Subscription } from 'rxjs/Rx';
import 'rxjs/add/operator/map';

import { DropdownService } from './../shared/services/dropdown.service';
import { EstadoBR } from './../shared/models/estado-br';

@Component({
  selector: 'app-data-form',
  templateUrl: './data-form.component.html',
  styleUrls: ['./data-form.component.sass']
})
export class DataFormComponent implements OnInit, OnDestroy {

  formulario: FormGroup;
  estados: EstadoBR[];

  constructor(
    private formBuilder: FormBuilder,
    private http: Http,
    private dropdownService: DropdownService
  ) { }

  ngOnInit() {

    this.dropdownService.getEstadosBR().subscribe(
      dados => this.estados = dados
    )

    this.formulario = this.formBuilder.group({
      nome: [null, Validators.required],
      email: [null, [Validators.required, Validators.email]],
      endereco: this.formBuilder.group({
        cep: [null, Validators.required],
        numero: [null, Validators.required],
        complemento: [null],
        rua: [null, Validators.required],
        bairro: [null, Validators.required],
        cidade: [null, Validators.required],
        estado: [null, Validators.required],
      })
    });
  }

  ngOnDestroy() {
  }

  consultaCEP() {
    try {
      let valor: string = this.formulario.get('endereco.cep').value;

      //Verifica se campo cep possui valor informado.
      if (valor) {
        //Nova variável "cep" somente com dígitos.
        let cep = valor.replace(/\D/g, '');

        //Expressão regular para validar o CEP.
        var validacep = /^[0-9]{8}$/;

        //Valida o formato do CEP.
        if (validacep.test(cep)) {
          //Sincroniza com o callback.
          let url = `//viacep.com.br/ws/${cep}/json`;

          this.http.get(url)
            .map(dados => dados.json())
            .subscribe(
            dados => this.populaDadosForm(dados),
            error => this.populaDadosForm(null, error)
            );
        }
      }
    } catch (e) { }
  }

  private populaDadosForm(dados, error = null): void {

    if (dados) {
      this.formulario.patchValue({
        endereco: {
          rua: dados.logradouro,
          complemento: dados.complemento,
          bairro: dados.bairro,
          cidade: dados.localidade,
          estado: dados.uf
        }
      });

      this.touchCamposEndereco();
    }
  }

  private touchCamposEndereco() {
    console.log('test');
    Object.keys(this.formulario.get('endereco').value).forEach(key => {
      const campo = this.formulario.get('endereco.' + key);
      if (campo instanceof FormControl) {
        campo.markAsDirty();
      }
    });
  }

  private sinalizaCampos(formulario: FormGroup) {
    Object.keys(formulario.controls).forEach(campo => {
      const controle = formulario.get(campo);
      controle.markAsDirty();

      if (controle instanceof FormGroup) {
        this.sinalizaCampos(controle);
      }
    });
  }

  onSubmit() {
    // console.log(this.formulario);

    if (this.formulario.valid) {
      this.http.post('https://httpbin.org/post',
        JSON.stringify(this.formulario.value))
        // .map(res => res)
        .subscribe(
        dados => {
          this.resetForm();
        },
        (erro: any) => {
          alert('Erro ao enviar dados');
        }
        );
    } else {
      // console.log('formulário inválido');

      this.sinalizaCampos(this.formulario);
    }
  }

  resetForm() {
    this.formulario.reset();
  }



  // ====================================================================================
  // validações

  isTouched(campo) {
    return (this.formulario.get(campo).touched || this.formulario.get(campo).dirty);
  }

  isValid(campo) {
    // [ngClass]="isInvalid('nome')"
    return this.formulario.get(campo).valid;
  }

  isNull(campo) {
    return !this.formulario.get(campo).value;
  }

  isInvalidEmail(campo) {
    let campoEmail = this.formulario.get(campo);

    if (campoEmail.errors) {
      return campoEmail.errors['email'] && this.isTouched(campo);
    }

    return false;
  }

  aplicaCssErro(campo) {
    return !this.isValid(campo) && this.isTouched(campo) ? 'is-invalid' : '';
  }

  aplicaCssValid(campo) {
    return this.isValid(campo) && this.isTouched(campo) ? 'is-valid' : '';
  }
}
