BEGIN;

SET CLIENT_ENCODING TO 'UTF-8';

TRUNCATE "user", "website";

INSERT INTO "website" ("title", "slug","description", "address", "device", "level")
  VALUES 
    -- premier site
    (
      'Google', 
      'google',
      'Il y a un tout petit problème.',
      'https://www.google.com/',
      'Ordinateur',
      'Casse-tête'
    ),
    -- deuxième site
    (
      'Wikipédia',
      'wikipedia',
      'Pas jojo',
      'https://fr.wikipedia.org/',
      'Mobile',
      'Bloquant'
    ),
    -- troisième site
    (
      'Facebook',
      'facebook',
      'Nul',
      'https://facebook.com/',
      'Mobile',
      'Bloquant'
    ),
    -- quatrième site
    (
      'Npm',
      'npm',
      'Des soucis',
      'https://www.npmjs.com/',
      'Mobile',
      'Casse-tête'
    );

COMMIT;
