import { Component, OnInit } from '@angular/core';
import { Leader } from '../shared/leader';
import { LeaderService } from '../services/leader.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  leaderes: Leader[];

  selectedLeader: Leader;

  constructor(private leaderService: LeaderService) { }
  
  ngOnInit() {
    this.leaderService.getLeaderes().then(leaderes => this.leaderes = leaderes)
  }

  onSelect(leader: Leader) {
    this.selectedLeader = leader;
  }

}
