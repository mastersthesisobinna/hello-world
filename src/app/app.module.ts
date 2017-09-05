import { DirectiveFor } from './demo-reusableComponent/directiveFOR.component';
import { DirectiveSwitch } from './demo-reusableComponent/directiveSWITCH.component';
import { DirectiveIF } from './demo-reusableComponent/directiveIF.component';
import { AngularContainer } from './demo-reusableComponent/angularcontainer.component';
import { ShadowDOMComponent } from './demo-reusableComponent/shadowdom.component';
import { NumberFormatter } from './demo-DataHandlingEvents/number.pipe';
import { SummaryPipe } from './demo-DataHandlingEvents/summary.pipe';
import { MyCoursesService } from './my-courses.service';
import { MyCourseComponent } from './my-courses.component';
import { CourseComponent } from './course/course.component';
import { FavoriteComponent } from './favorite/favorite.component';
import { AppComponent } from './app.component';
import { DemoComponent } from './demo-DataHandlingEvents/demo.component';
import { DemoReusableComponentComponent } from './demo-reusableComponent/demo-reusable-component.component';

import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'
import { NgModule } from '@angular/core';
import { InputFormatDirective } from './custom-directive/input-format.directive';
import { CustomDirectiveComponent } from './custom-directive/custom-directive.component';






@NgModule({
  declarations: [
    AppComponent, //add all component and pipes that are part of the module
    MyCourseComponent,
    CourseComponent,
    FavoriteComponent,
    DemoComponent,
    SummaryPipe,
    NumberFormatter,
    DemoReusableComponentComponent,
    ShadowDOMComponent,
    AngularContainer,
    DirectiveIF,
    DirectiveSwitch,
    DirectiveFor,
    InputFormatDirective,
    CustomDirectiveComponent
  ],
  imports: [
    BrowserModule, //add all the @angular libraries require.
    FormsModule    //required for two-way binding to work ngModel
  ],
  providers: [MyCoursesService], //registering any dependencies required to run the app
  bootstrap: [AppComponent] //can add other component to be loaded on startup. This mean that the component's selector can also be used in the index.html directly
})
export class AppModule { }
