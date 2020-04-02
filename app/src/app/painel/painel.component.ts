import { Component, OnInit } from '@angular/core';

import { Frase } from '../shared/frase.model'
import { FRASES } from './frases-mock'

@Component({
  selector: 'app-painel',
  templateUrl: './painel.component.html',
  styleUrls: ['./painel.component.css']
})
export class PainelComponent implements OnInit {

  public frases: Frase[] = FRASES
  public instrucao: string = 'Traduza a frase:'
  public resposta: string  =''

  public rodada: number = 0
  public rodadaFrase: Frase

  public progresso: number = 0

  constructor() { 
    this.atualizaResposta()
  }

  ngOnInit(): void {
  }

  public atualizarResposta(resposta: Event): void {
    this.resposta = (<HTMLInputElement>resposta.target).value
    console.log(this.resposta)
  }

  public verificarResposta() : void {
    if(this.rodadaFrase.frasePtBr) {
      alert('A tradução está correta')

      this.rodada++

      this.progresso = this.progresso + (100 / this.frases.length)

      this.atualizaResposta()
    } else {
      alert('A tradução está errada')
    }
  }

  public atualizaResposta(): void{
    this.rodadaFrase = this.frases[this.rodada]
    
    this.resposta = ''
  }
}
