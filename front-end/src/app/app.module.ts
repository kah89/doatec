import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http'; // add this line

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material/dialog';
import { HeaderComponent } from './header/header.component';
import { ContentComponent } from './content/content.component';
import { FooterComponent } from './footer/footer.component';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { CadastroClientesComponent } from './cadastro-clientes/cadastro-clientes.component';
import { HomeLogadaComponent } from './home-logada/home-logada.component';
import { CadastroConcluidoComponent } from './cadastro-concluido/cadastro-concluido.component';
import { AuthGuard } from 'auth.guard';
import { AuthService } from 'auth.service';
import { AcessoNegadoComponent } from './acesso-negado/acesso-negado.component';
import { ModalNotCadastroComponent } from './modal-not-cadastro/modal-not-cadastro.component';
import { SingletonRouterService } from '../services/singletonRouter.service';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule} from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatTableModule } from '@angular/material/table';
//import { NgxMaskModule } from 'ngx-mask';

import { LoginComponent } from './login/login.component';
import { QuemSomosComponent } from './quem-somos/quem-somos.component';
import { CadastroDoacaoComponent } from './doacao/cadastro-doacao/cadastro-doacao.component';
import { ListaDoacaoComponent } from './doacao/lista-doacao/lista-doacao.component';
import { DoacaoService } from './doacao/doacao.service';
import { ControleDoacaoComponent } from './controle-doacao/controle-doacao.component';
import { ClienteService } from './cadastro-clientes/cliente.service';
import { ChatDoadorComponent } from './chat-doador/chat-doador.component';
import { ChatOngComponent } from './chat-ong/chat-ong.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ContentComponent,
    FooterComponent,
    CadastroClientesComponent,
    HomeLogadaComponent,
    CadastroConcluidoComponent,
    AcessoNegadoComponent,
    ModalNotCadastroComponent,
    LoginComponent,
    QuemSomosComponent,
    CadastroDoacaoComponent,
    ListaDoacaoComponent,
    ControleDoacaoComponent,
    ChatDoadorComponent,
    ChatOngComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    MatDialogModule,
    AppRoutingModule,
    ReactiveFormsModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatToolbarModule,
    MatExpansionModule,
    MatTableModule,
    HttpClientModule,
    // NbChatModule,
   // NgxMaskModule.forRoot({
    //  dropSpecialCharacters: true // false ao salvar, a mascara sera mantida, true salva sem
  //  }),
  ],

  providers: [AuthGuard, AuthService, SingletonRouterService, DoacaoService, ClienteService],
  entryComponents: [ModalNotCadastroComponent],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
// export class PageModule { }
