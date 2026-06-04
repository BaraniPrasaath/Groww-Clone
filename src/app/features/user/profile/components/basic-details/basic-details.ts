import { Component } from '@angular/core';

interface DetailRow {
  label: string;
  value: string;
  editable?: boolean;
}

@Component({
  selector: 'app-basic-details',
  imports: [],
  templateUrl: './basic-details.html',
  styleUrl: './basic-details.css',
})
export class BasicDetails {
  // Array holding the profile data
  details: DetailRow[] = [
    { label: 'Full Name', value: 'barani prasaath dhamodharan (Barani)' },
    { label: 'Date of Birth', value: '-' },
    { label: 'Mobile Number', value: '*****21738', editable: true },
    { label: 'Email Address', value: 'bar****************n@gmail.com', editable: true },
    { label: 'Marital Status', value: '-' },
    { label: 'Gender', value: '-' },
    { label: 'Income Range', value: '-' },
    { label: 'Occupation', value: '-' },
    { label: "Father's Name", value: '-' },
    { label: 'Address', value: 'Koramangala' },
  ];
}
