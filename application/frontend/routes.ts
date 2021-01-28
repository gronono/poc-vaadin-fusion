export const routes = [
  // for client-side, place routes below (more info https://vaadin.com/docs/v18/flow/typescript/creating-routes.html)
  {
    path: '',
    component: 'main-view',
    action: async () => {
        // FIXME How to include main-view from shared ?
      await import('./views/main/main-view');
    }
  },
];
