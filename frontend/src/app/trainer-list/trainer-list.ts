import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { getTrainers } from '../api/trainers-api';

@Component({
  selector: 'app-trainer-list',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './trainer-list.html',
  styleUrl: './trainer-list.css'
})
export class TrainerListComponent implements OnInit {

  trainers: any[] = [];

  constructor(private cdr: ChangeDetectorRef) {}

  async ngOnInit() {
    const data = await getTrainers();
    this.trainers = data;

    // 🔥 forza refresh UI
    this.cdr.detectChanges();
  }
}