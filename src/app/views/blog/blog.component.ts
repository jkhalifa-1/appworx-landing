import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {

  blogs: Object[];

  constructor() {
    this.blogs = [
      { 
        title: 'Apple Is Secretly Developing Its Own Screens for the First Time', 
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        img: '../../../assets/img/mask-3.png'
      },
      { 
        title: 'Hackers Fed Up With Twitter Bots They’re Hunting Them Down Themselves', 
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        img: '../../../assets/img/mask-3.png'
      },
      { 
        title: 'Who will steal Android from Google?', 
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        img: '../../../assets/img/mask-3.png'
      },
      { 
        title: 'Apple Releases New Collaborative Watch Bands', 
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        img: '../../../assets/img/mask-3.png'
      },
      { 
        title: 'Instagram Now Allows Users to Include Hashtags & Profile Links', 
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        img: '../../../assets/img/mask-3.png'
      },
      { 
        title: '‘Black Mirror’ Social Credit Is About to Become Reality in China', 
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        img: '../../../assets/img/mask-3.png'
      }
    ]
  }

  ngOnInit() {
  }

}
