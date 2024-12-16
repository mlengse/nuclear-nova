import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import starlightThemeObsidian from 'starlight-theme-obsidian';

import markdoc from '@astrojs/markdoc';

// https://astro.build/config
export default defineConfig({
  integrations: [starlight({
    plugins: [starlightThemeObsidian()],
    title: 'Referensi',
    social: {
      github: 'https://github.com/mlengse',
    },
    sidebar: [
      {
        label: 'Akreditasi',
        autogenerate: { directory: 'docs/akred' }
      },
      {
        label: 'Akreditasi Puskesmas',
        autogenerate: { directory: 'docs/pkm' }
      },
      {
        label: 'Akreditasi Klinik',
        autogenerate: { directory: 'docs/klinik' }
      }

    ],
  }), markdoc()],
});