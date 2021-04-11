import { INavData } from '@coreui/angular';

export const navItems: INavData[] = [

  {
    title: true,
    name: 'paramétrage'
  },
  {
    name: 'Corps',
    url: '/corps',
    icon: 'icon-speedometer',
  },
  {
    name: 'Grades',
    url: '/grade',
    icon: 'icon-speedometer',
  },
  {
    name: 'Affectations',
    url: '/affectation',
    icon: 'icon-speedometer',
  },
  {
    name: 'Bank',
    url: '/bank',
    icon: 'icon-speedometer',
  },
  {
    title: true,
    name: 'paramétrage calcul paie'
  },
  {
    name: 'indemnité',
    url: '/subvention',
    icon: 'icon-speedometer',
  },
  {
    name: 'indemnité lié au grade',
    url: '/subventionSpeciale',
    icon: 'icon-speedometer',
  },
  {
    name: 'Taux de retraite',
    url: '/tauxDeRetraite',
    icon: 'icon-speedometer',
  },
  {
    name: 'Calcul paie',
    url: '/employees',
    icon: 'icon-speedometer',
  },
  {
    title: true,
    name: 'Fiche'
  },
  {
    name: 'Fiche agent',
    url: '/fiches',
    icon: 'icon-speedometer',
  }

];
