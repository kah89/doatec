import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ContentComponent } from './../content/content.component';
import { CadastroClientesComponent } from './../cadastro-clientes/cadastro-clientes.component';
import { CadastroConcluidoComponent } from '../cadastro-concluido/cadastro-concluido.component';
import { HomeLogadaComponent } from '../home-logada/home-logada.component';
import { AuthGuard } from 'auth.guard';
import { AcessoNegadoComponent } from '../acesso-negado/acesso-negado.component';
import { LoginComponent } from '../login/login.component';
import { QuemSomosComponent } from '../quem-somos/quem-somos.component';
import { CadastroDoacaoComponent } from '../doacao/cadastro-doacao/cadastro-doacao.component';
import { ListaDoacaoComponent } from '../doacao/lista-doacao/lista-doacao.component';
import { ControleDoacaoComponent } from '../controle-doacao/controle-doacao.component';
import { ChatDoadorComponent } from './../chat-doador/chat-doador.component';
import {ChatOngComponent} from './../chat-ong/chat-ong.component';

const routes: Routes = [
  { path: '', component: ContentComponent },
  { path: 'home', component: ContentComponent },
  { path: 'cadastro-clientes', component: CadastroClientesComponent },
  { path: 'cadastro-concluido', component: CadastroConcluidoComponent },
  { path: 'home-logada', component: HomeLogadaComponent, canActivate: [AuthGuard] },
  { path: 'acesso-negado', component: AcessoNegadoComponent},
  { path: 'quem-somos', component: QuemSomosComponent},
  { path: 'cadastro-doacao', component: CadastroDoacaoComponent, canActivate: [AuthGuard] },
  { path: 'cadastro-doacao', component: ListaDoacaoComponent, canActivate: [AuthGuard] },
  { path: 'controle-doacao', component: ControleDoacaoComponent, canActivate: [AuthGuard] },
  { path: 'chat-doador', component: ChatDoadorComponent, canActivate: [AuthGuard]  },
  { path: 'chat-ong', component: ChatOngComponent, canActivate: [AuthGuard]  },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  declarations: [],
  exports: [RouterModule]
})
export class AppRoutingModule { }
