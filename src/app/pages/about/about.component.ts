import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit{
  
  constructor(
    private activedRouter: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void{
    this.activedRouter.params.subscribe(
      res => console.log(res)
    )

   /* setInterval (() => {
      this.router.navigateByUrl('404')
    }, 5000) */
  }

}
