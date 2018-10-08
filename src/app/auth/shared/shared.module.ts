import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

// Components
import { AuthFormComponent } from './components/auth-form/auth-form.component';

@NgModule({
  declarations: [AuthFormComponent],
  imports: [CommonModule, ReactiveFormsModule],
  exports: [AuthFormComponent]
})
export class SharedModule {}
