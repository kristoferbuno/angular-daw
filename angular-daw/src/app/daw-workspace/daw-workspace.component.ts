import { Component, OnInit } from '@angular/core';
import * as Tone from 'tone'

@Component({
  selector: 'app-daw-workspace',
  templateUrl: './daw-workspace.component.html',
  styleUrls: ['./daw-workspace.component.css']
})
export class DawWorkspaceComponent implements OnInit {

  synth: Tone.Synth;


  constructor() { }

  ngOnInit(): void {
   this.synth = new Tone.Synth().toDestination();
  }

  beep(note: string): void{
  //play a middle 'C' for the duration of an 8th note
  this.synth.triggerAttackRelease(note, "8n");
  }
}
