import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { GraphQLModule } from './graphql.module';
import { AppRoutingModule } from './app-routing.module';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgxFitTextModule } from '@pikselin/ngx-fittext';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { WallComponent } from './wall/wall.component';
import { ChatComponent } from './chat/chat.component';
import { BackdropComponent } from './backdrop/backdrop.component';
import { CreatePostComponent } from './backdrop/create-post/create-post.component';
import { AddFeelingComponent } from './backdrop/add-feeling/add-feeling.component';


@NgModule({
  entryComponents: [
    BackdropComponent,
    CreatePostComponent
  ],
  declarations: [
    AppComponent,
    HomeComponent,
    SidebarComponent,
    DashboardComponent,
    ChatComponent,
    WallComponent,
    BackdropComponent,
    CreatePostComponent,
    AddFeelingComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    GraphQLModule,
    HttpClientModule,
    FormsModule,
    AngularSvgIconModule.forRoot(),
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
    FontAwesomeModule,
    NgxFitTextModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
