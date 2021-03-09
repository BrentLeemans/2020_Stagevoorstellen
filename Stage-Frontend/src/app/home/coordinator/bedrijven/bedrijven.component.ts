import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '@app/services/auth.service';
import { Claim } from '@app/classes/claim';

@Component({
  selector: 'app-bedrijven',
  templateUrl: './bedrijven.component.html',
  styleUrls: ['./bedrijven.component.css'],
})
export class BedrijvenComponent implements OnInit {
  claim: Claim;

  constructor(private authService: AuthService, public router: Router) {}

  ngOnInit(): void {
    this.authService.getUserClaim().subscribe((claim) => {
      this.claim = claim;
    });
  }
}
