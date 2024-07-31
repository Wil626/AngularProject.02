import { Component } from '@angular/core';
import { signal } from '@angular/core';
import { Ass } from '../interface/ass';
import assert from 'assert';

@Component({
  selector: 'app-physical',
  standalone: true,
  imports: [],
  templateUrl: './physical.component.html',
  styleUrl: './physical.component.css'
})
export class PhysicalComponent {

  count = signal<number>(0);
  assets = signal<Ass[]>([]);
  newAssText = signal<string>('');

  ngOnInit(){
    console.log
  }
  amountValue(event: Event){
    const input = event?.target as HTMLInputElement;
    this.newAssText.set(input?.value);
  }

  addAssets(){
    if(this.newAssText()){
      const newAss : Ass = {
            amount:this.newAssText(),
           
      }
      this.newAssText.set([...this.assets(), newAss]);
      this.newAssText.set('');
      }

    }

  }


