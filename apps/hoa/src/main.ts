import { loadRemoteEntry } from '@angular-architects/module-federation';

Promise.all([
  loadRemoteEntry('http://localhost:4201/remoteEntry.js', 'catalog'),
  loadRemoteEntry('http://localhost:4202/remoteEntry.js', 'lightbox'),
])
  .catch((err) => console.error('Error loading remote entries', err))
  .then(() => import('./bootstrap'))
  .catch((err) => console.error(err));
