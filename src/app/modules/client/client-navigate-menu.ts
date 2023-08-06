import { NavigateMenuModel } from '../../shared/models/navigate-menu.model';

export const clientNavigateMenu: NavigateMenuModel[] = [
  // {
  //   icon: 'baii',
  //   name: 'BAI',
  //   url: 'baii'
  // },
  {
    icon: 'gpt',
    name: 'GPT',
    url: 'gpt'
  },
  {
    icon: 'icon_edit',
    name: 'Writing',
    url: 'writing',
    children: [
      {
        icon: 'task-1',
        name: 'Task 1',
        url: 'task-1',
      },
      {
        icon: 'task-2',
        name: 'Task 2',
        url: 'task-2',
      }
    ]
  },
  {
    icon: 'donate',
    name: 'Donate',
    url: 'donation'
  },
  // {
  //   icon: 'reading',
  //   name: 'Reading',
  //   url: 'reading'
  // },
  // {
  //   icon: 'Listening',
  //   name: 'Listening',
  //   url: 'listening'
  // },
  // {
  //   icon: 'speaking',
  //   name: 'Speaking',
  //   url: 'speaking'
  // }
];
