import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { LogoComponent } from './logo/logo.component';
import { TopBannerComponent } from './home/top-banner/top-banner.component';
import { ButtonPrimaryComponent } from './button-primary/button-primary.component';
import { ButtonArrowsComponent } from './button-arrows/button-arrows.component';
import { HomeComponent } from './home/home.component';
import { DividerComponent } from './divider/divider.component';
import { ContainerMediumComponent } from './container-medium/container-medium.component';
import { FormFieldTextComponent } from './form-field-text/form-field-text.component';
import { ButtonSecondaryComponent } from './button-secondary/button-secondary.component';
import { NewsArticlesComponent } from './home/news-articles/news-articles.component';
import { ContainerLargeComponent } from './container-large/container-large.component';
import { TestimonialsComponent } from './testimonials/testimonials.component';

@NgModule({
   declarations: [
      AppComponent,
      NavigationComponent,
      LogoComponent,
      TopBannerComponent,
      ButtonPrimaryComponent,
      ButtonArrowsComponent,
      HomeComponent,
      DividerComponent,
      ContainerMediumComponent,
      FormFieldTextComponent,
      ButtonSecondaryComponent,
      NewsArticlesComponent,
      ContainerLargeComponent,
      LogoComponent,
      TestimonialsComponent
   ],
   imports: [
      BrowserModule,
      AppRoutingModule
   ],
   providers: [],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule {}
