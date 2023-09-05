import { Component, OnInit } from '@angular/core';
import { SkillLevel } from './models/skill-level';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
})
export class AboutComponent implements OnInit {
  hardSkills: SkillLevel[] = [
    {
      language: 'HTML',
      level: 5,
    },
    {
      language: 'CSS',
      level: 5,
    },
    {
      language: 'JavaScript',
      level: 5,
    },
    {
      language: 'TypeScript',
      level: 4,
    },
    {
      language: 'Angular',
      level: 4,
    },
    {
      language: 'Bootstrap',
      level: 4,
    },
    {
      language: 'Jest/Jasmine',
      level: 4,
    },
    {
      language: 'NestJs',
      level: 3,
    },
    {
      language: 'MySQL',
      level: 3,
    },
    {
      language: 'MongoDB',
      level: 3,
    },
    {
      language: 'Postgres',
      level: 3,
    },
    {
      language: 'NodeJS',
      level: 3,
    },
    {
      language: 'ASP.NET Core',
      level: 3,
    },
    {
      language: 'C#',
      level: 3,
    },
    {
      language: 'Python',
      level: 2,
    },
    {
      language: 'React',
      level: 1,
    },
  ];

  softSkills: SkillLevel[] = [
    {
      language: 'Liderança',
      level: 5,
    },
    {
      language: 'Trabalho em Equipe',
      level: 5,
    },
    {
      language: 'Comunicação',
      level: 5,
    },
    {
      language: 'Resolução de conflitos',
      level: 5,
    },
    {
      language: 'Empatia',
      level: 5,
    },
    {
      language: 'Gestão de tempo',
      level: 5,
    },
    {
      language: 'Iniciativa',
      level: 5,
    },
    {
      language: 'Feedback',
      level: 4,
    },
    {
      language: 'Criatividade',
      level: 4,
    },
    {
      language: 'Adaptabilidade',
      level: 4,
    },
    {
      language: 'Confiança',
      level: 4,
    },
    {
      language: 'Resiliência',
      level: 4,
    },
    {
      language: 'Inteligência emocional',
      level: 3,
    },
    {
      language: 'Flexibilidade',
      level: 3,
    },
    {
      language: 'Gestão de conflitos',
      level: 3,
    },
  ]

  constructor() {}

  ngOnInit() {}

  getLevel(): number[] {
    return Array(5)
      .fill(0)
      .map((x, i) => i + 1);
  }
}
