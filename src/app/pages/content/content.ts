import { Component } from '@angular/core';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-content',
  imports: [RouterLink],
  templateUrl: './content.html',
  styleUrl: './content.css'
})
export class Content {
  photoCover:string = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmJPhYZ4qFYiyS2i1RjxDnVwMHlSJvhTFdKQ&s';
  contentTitle:string = 'Noticia Exemplo';
  contentDescription:string = 'blablabla';
}
