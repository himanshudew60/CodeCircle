import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';


@Component({
  selector: 'app-home',
  imports: [CommonModule],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
   

  projects = [
    {
      name: 'Cake Shop',
      description: 'Multi-outlet cake shop system with admin dashboard.',
      tech: ['HTML', 'CSS', 'JS', 'Node'],
      image: '/cake.jpg',
      live: '#',
      github: '#'
    },
    {
      name: 'E-commerce',
      description: 'Scalable store with payments & authentication.',
      tech: ['React', 'Firebase'],
      image: '/ecom.jpg',
      live: '#',
      github: '#'
    },
    {
      name: 'Restaurant System',
      description: 'Complete restaurant management solution.',
      tech: ['PHP', 'MySQL'],
      image: '/resto.jpg',
      live: '#',
      github: '#'
    },
    {
      name: 'Restaurant System',
      description: 'Complete restaurant management solution.',
      tech: ['PHP', 'MySQL'],
      image: '/resto.jpg',
      live: '#',
      github: '#'
    },
    {
      name: 'Restaurant System',
      description: 'Complete restaurant management solution.',
      tech: ['PHP', 'MySQL'],
      image: '/resto.jpg',
      live: '#',
      github: '#'
    }
  ];

 
}
