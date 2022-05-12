
import { Component, OnInit } from '@angular/core';
import { CorrentistaService } from 'src/app/services/correntista.service';
import { MovimentacaoService } from 'src/app/services/movimentacao.service';

@Component({
  selector: 'app-movimentacao-new',
  templateUrl: './movimentacao-new.component.html',
  styleUrls: ['./movimentacao-new.component.css']
})
export class MovimentacaoNewComponent implements OnInit {
  correntistas:any;
  correntistaSelecionado:any;//guarda o correntista selecionado pela aplicação do front end
  valor:any;
  descricao:any;
  dataHora:any;
  tipo:any;


  constructor(
    private movimentacaoService: MovimentacaoService,
    private correntistaService: CorrentistaService,
    ) { }

  ngOnInit(): void {
    this.exibirCorrentistas();
  }
  exibirCorrentistas(): void {
    this.correntistaService.list()
      .subscribe(
        data => {
          this.correntistas = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }//exibirCorrentista


// criando o método para ser chamado na tela e assim incluir a movimentação

save(): void {
  console.log(this.correntistaSelecionado)
  const movimentacao = {
    valor:this.valor,
    descricao:this.descricao,
    tipo:this.tipo,
    idConta:this.correntistaSelecionado.id,
    dataHora:this.dataHora

  };
  console.log(movimentacao);
  this.movimentacaoService.create(movimentacao)
    .subscribe(
      response => {
        console.log(response);
        alert('Salco com sucesso!')
      },
      error => {
        console.log(error);
        alert('Erro ao salvar!')
      });
}


}//@componet
