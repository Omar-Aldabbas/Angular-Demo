import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { UserComponent } from './user/user.component';
import { TasksComponent } from './tasks/tasks.component';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  //declarations only for fully stand alone component
  declarations: [AppComponent],
  bootstrap: [AppComponent],
  // imports in the other hand is for imported component thats not stand alone
  imports: [
    RouterOutlet,
    HeaderComponent,
    UserComponent,
    TasksComponent,
    CommonModule,
    BrowserModule,
  ],
})
export class AppModule {}
