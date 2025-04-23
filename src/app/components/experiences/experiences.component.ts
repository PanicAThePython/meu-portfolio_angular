import { Component, signal } from '@angular/core';
import { IExperience } from '../../interface/IExperience.interface';

@Component({
  selector: 'app-experiences',
  imports: [],
  templateUrl: './experiences.component.html',
  styleUrl: './experiences.component.scss'
})
export class ExperiencesComponent {
  public arrayExperiences = signal<IExperience[]>([
    {
      summary: {
        strong: "Desenvolvedora I",
        p: "Meta | Mar 2025 - Presente"
      },
      text: "<p>Experiência com Java, JSF, Maven, Eclipse, xhtml, xml, SQL.</p>"
    },
    {
      summary: {
        strong: "FullStack Jr",
        p: "Paytrack | Set 2024 - Dez 2024"
      },
      text: "<p>Experiência com Java, Spring Boot, Quarkus, Maven, IntelliJ, SQL, React, Angular.</p>"
    },
    {
      summary: {
        strong: "Frontend Jr",
        p: "Hi Platform | Jan 2022 - Mar 2024"
      },
      text: "<p>Experiência com React, JavaScript, TypeScript, Vite, HTML5, CSS3.</p>"
    }
  ])
}
