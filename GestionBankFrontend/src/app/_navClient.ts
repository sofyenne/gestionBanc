import { INavData } from '@coreui/angular';

export const navItems: INavData[] = [

  {
    title: true,
    name: 'FicheAgent Page'
  },
  {
    name: 'fiche',
    url: '/client/fiche',
    icon: 'icon-speedometer',
  },
  
  {
    title: true,
    name: 'Calcul Paie Page'
  },
  {
    name: 'calcul',
    url: '/client/calcul',
    icon: 'icon-speedometer',
  }
]