import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { UserRoutingModule } from './user-routing.module';
import { BetaArticlesComponent } from './beta-articles/beta-articles.component';
import { ApprovedArticlesComponent } from './approved-articles/approved-articles.component';
import { CreateArticleComponent } from './create-article/create-article.component';

@NgModule({
    declarations: [
        CreateArticleComponent,
        ApprovedArticlesComponent,
        BetaArticlesComponent
        
],
    imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule,
        UserRoutingModule
    ],
    providers: [
       
    ],
    exports: []

})
export class UserModule {

}
