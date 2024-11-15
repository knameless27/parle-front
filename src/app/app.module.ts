import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
// import { HttpClientModule } from '@angular/common/http';
// import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { PostsComponent } from './components/posts/posts.component';
// import { routes } from './app.routes';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    // HttpClientModule,
    // RouterModule.forRoot(routes)
  ],
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    PostsComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
