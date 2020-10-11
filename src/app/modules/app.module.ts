import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from 'src/app/modules/components/app.component';
import { SquareComponent } from 'src/app/modules/components/square/square.component';
import { BoardComponent } from 'src/app/modules/components/board/board.component';
import { BoardNewComponent } from './components/board-new/board-new.component';

@NgModule({
  declarations: [
    AppComponent,
    SquareComponent,
    BoardComponent,
    BoardNewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
