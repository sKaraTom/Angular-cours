import { NgModule } from '@angular/core';

import { CommonModule } from "@angular/common";
import { CoursListeComponent } from "./cours.component";
import { CoursService } from "../../services/cours.service";

import { MdButtonModule } from '@angular/material';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

@NgModule({
  imports:      [ CommonModule ],
  declarations: [CoursListeComponent],
  exports:[CoursListeComponent],
  providers:[CoursService]
})
export class CoursModule {}
