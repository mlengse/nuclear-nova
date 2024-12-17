import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
// import starlightThemeObsidian from 'starlight-theme-obsidian';
import starlightSidebarTopics from 'starlight-sidebar-topics';
// import starlightSidebarTopicsDropdown from 'starlight-sidebar-topics-dropdown';
// import markdoc from '@astrojs/markdoc';

// https://astro.build/config
export default defineConfig({
  integrations: [starlight({
    // plugins: [starlightThemeObsidian()],
    plugins:[
      starlightSidebarTopics([
        {
          label: 'Akreditasi',
          link: '/docs/akred/pendahuluan',
          icon: 'open-book',
          items: [
            'docs/akred/pendahuluan',
            'docs/akred/struktur'
          ],
        },
        {
          label: 'Starlight Docs',
          link: 'https://starlight.astro.build/',
          icon: 'starlight',
        },
      ])
    ],
    title: 'Referensi',
    social: {
      github: 'https://github.com/mlengse',
    },
  //   sidebar: [
  //     {
  //       label: 'Akreditasi',
  //       items: [
  //         'docs/akred/pendahuluan',
  //         'docs/akred/struktur',
  //         {
  //           label: 'Puskesmas',
  //           collapsed: true, 
  //           items: [
  //             {
  //               label: 'KMP',
  //               collapsed: true,
  //               items: [
  //                 'docs/akred/pkm/1',
  //                 'docs/akred/pkm/1/1',
  //                 'docs/akred/pkm/1/1/1',
  //                 'docs/akred/pkm/1/1/2',
  //                 'docs/akred/pkm/1/2',
  //                 'docs/akred/pkm/1/2/1',
  //                 'docs/akred/pkm/1/2/2',
  //                 'docs/akred/pkm/1/2/3',
  //                 'docs/akred/pkm/1/2/4',
  //                 'docs/akred/pkm/1/2/5',

  //               ]
  //             },
  //             {
  //               label: 'UKM',
  //               collapsed: true,
  //               autogenerate: {
  //                 directory: 'docs/akred/pkm/2',
  //                 collapsed: true
  //               }
  //             },
  //             {
  //               label: 'UKP',
  //               collapsed: true,
  //               autogenerate: {
  //                 directory: 'docs/akred/pkm/3',
  //                 collapsed: true
  //               }
  //             },
  //             {
  //               label: 'PPN',
  //               collapsed: true,
  //               autogenerate: {
  //                 directory: 'docs/akred/pkm/4',
  //                 collapsed: true
  //               }
  //             },
  //             {
  //               label: 'PMP',
  //               collapsed: true,
  //               autogenerate: {
  //                 directory: 'docs/akred/pkm/5',
  //                 collapsed: true
  //               }
  //             },
  //           ]
  //         },
  //         {
  //           label: 'Klinik',
  //           collapsed: true, 
  //           autogenerate: { 
  //             directory: 'docs/akred/klinik', 
  //             collapsed: true, 
  //           }
  //         }
    
  //       ]
  //     },

  //   ],
  })],
});