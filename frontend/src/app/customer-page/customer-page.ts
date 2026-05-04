import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ChangeDetectorRef } from '@angular/core';

import { getCustomers, addCustomer, deleteCustomer } from '../api/customers-api';
import { getTrainers } from '../api/trainers-api';

@Component({
  selector: 'app-customer-page',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './customer-page.html',
  styleUrl: './customer-page.css'
})

export class CustomerPageComponent implements OnInit {

  constructor(private cdr: ChangeDetectorRef) {}

  customers: any[] = [];
  trainers: any[] = [];

  newCustomer = {
    name: '',
    surname: '',
    email: '',
    trainer_id: ''
  };

  async ngOnInit() {
    await this.loadData();
  }

  async loadData() {
    this.customers = await getCustomers();
    this.trainers = await getTrainers();

    this.cdr.detectChanges();
  }

  async saveCustomer() {
    await addCustomer(this.newCustomer);
    this.newCustomer = {
      name: '',
      surname: '',
      email: '',
      trainer_id: ''
    };
    await this.loadData();
  }

  async removeCustomer(id:number) {
    await deleteCustomer(id);
    await this.loadData();
  }
}