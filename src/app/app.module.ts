import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { VgCoreModule } from 'videogular2/compiled/core';
import { VgControlsModule } from 'videogular2/compiled/controls';
import { VgOverlayPlayModule } from 'videogular2/compiled/overlay-play';
import { VgBufferingModule } from 'videogular2/compiled/buffering';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  MatStepperModule,
  MatInputModule,
  MatButtonModule
} from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CdkStepperModule } from '@angular/cdk/stepper';

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
import { VideoPlayerComponent } from './testimonials/video-player/video-player.component';
import { ContainerFullComponent } from './container-full/container-full.component';
import { SpeechBubbleComponent } from './testimonials/speech-bubble/speech-bubble.component';
import { CommentsComponent } from './testimonials/comments/comments.component';
import { CommentFormComponent } from './testimonials/comment-form/comment-form.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { FormFieldTextareaComponent } from './form-field-textarea/form-field-textarea.component';
import { StepperComponent } from './stepper/stepper.component';

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
    TestimonialsComponent,
    VideoPlayerComponent,
    ContainerFullComponent,
    SpeechBubbleComponent,
    CommentsComponent,
    CommentFormComponent,
    PageNotFoundComponent,
    FormFieldTextareaComponent,
    StepperComponent
  ],
  imports: [
    BrowserModule,
    VgCoreModule,
    VgControlsModule,
    VgOverlayPlayModule,
    VgBufferingModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatStepperModule,
    MatInputModule,
    MatButtonModule,
    FormsModule,
    ReactiveFormsModule,
    CdkStepperModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
