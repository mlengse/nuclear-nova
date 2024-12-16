import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import starlightThemeObsidian from 'starlight-theme-obsidian';

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      plugins: [starlightThemeObsidian()],
      title: 'Referensi',
      social: {
        github: 'https://github.com/mlengse',
      },
      sidebar: [
        {
          label: 'Akreditasi',
          items: [
            {
              label: 'Puskesmas',
              autogenerate: { directory: 'docs/akred/pkm' }
            },
            {
              label: 'Klinik',
              autogenerate: { directory: 'docs/akred/klinik' }
            }
          ],
        },
        {
          label: 'Guides',
          items: [
            // Each item here is one entry in the navigation menu.
            { label: 'Example Guide', slug: 'docs/guides/example' },
          ],
        },
        {
          label: 'Reference',
          autogenerate: { directory: 'docs/reference' },
        },
      ],
    }),
  ],
});
