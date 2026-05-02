import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { PostList } from './posts/post-list/post-list';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [App, PostList],
  imports: [BrowserModule, AppRoutingModule, MatButtonModule],
  providers: [provideBrowserGlobalErrorListeners()],
  bootstrap: [App],
})
export class AppModule {}
