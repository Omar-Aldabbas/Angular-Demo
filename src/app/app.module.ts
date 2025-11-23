import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { UserComponent } from './user/user.component';
import { BrowserModule } from '@angular/platform-browser';
import { CardModule } from './shared/card.module';
import { TasksModule } from './tasks/tasks.module';

@NgModule({
  //declarations only for fully stand alone component
  declarations: [AppComponent, HeaderComponent, UserComponent],
  bootstrap: [AppComponent],
  // imports in the other hand is for imported component thats not stand alone

  imports: [BrowserModule, CardModule, TasksModule],
})
export class AppModule {}
