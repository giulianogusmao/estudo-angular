import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-data-form',
  templateUrl: './data-form.component.html',
  styleUrls: ['./data-form.component.sass']
})
export class DataFormComponent implements OnInit {

  formulario: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private http: Http
  ) { }

  ngOnInit() {
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

  consultaCEP() {
    try {
      let valor: string = this.formulario.get('endereco.cep').value;

      //Verifica se campo cep possui valor informado.
      if (valor) {
        //Nova variável "cep" somente com dígitos.
        let cep = valor.replace(/\D/g, '');

        //Expressão regular para validar o CEP.
        var validacep = /^[0-9]{8}$/;
        console.log(validacep.test(cep));

        //Valida o formato do CEP.
        if (validacep.test(cep)) {
          //Sincroniza com o callback.
          let url = `//viacep.com.br/ws/${cep}/json`;
          console.log(url);

          this.http.get(url)
            .map(dados => dados.json())
            .subscribe(dados => this.populaDadosForm(dados));
        }
      }
    } catch (e) { }
  }

  private populaDadosForm(dados) {
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

  private touchCamposEndereco() {
    console.log('test');
    Object.keys(this.formulario.get('endereco').value).forEach( key => {
      const campo = this.formulario.get('endereco.' + key);
      if (campo instanceof FormControl) {
        campo.markAsDirty();
        campo.markAsTouched();
      }
    });
  }

  onSubmit() {
    console.log(this.formulario);

    this.http.post('https://httpbin.org/post',
      JSON.stringify(this.formulario.value))
      // .map(res => res)
      .subscribe(dados => {
        this.resetForm();
      },
      (erro: any) => {
        alert('Erro ao enviar dados');
      }
      );
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
