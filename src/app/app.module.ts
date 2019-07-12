import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { ScrollableTabComponent } from './component'
import { HorizontalGridComponent } from './component/horizontal-grid'

@NgModule({
   declarations: [
      AppComponent,
      ScrollableTabComponent,
      HorizontalGridComponent
   ],
   imports: [
      [BrowserModule, FormsModule]
   ],
   providers: [],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
