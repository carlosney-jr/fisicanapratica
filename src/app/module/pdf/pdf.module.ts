import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { PDFComponent } from './pdf.component';
import { ExibirPDFComponent } from './exibir-pdf/exibir-pdf.component';



@NgModule({
  declarations: [
    ExibirPDFComponent,
    PDFComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    PDFComponent,
    ExibirPDFComponent
  ]
})
export class PdfModule { }
