import { Config } from '@stencil/core'
import { sass } from '@stencil/sass'

export const config: Config = {
  namespace: 'mycomps',
  plugins: [sass()],
  outputTargets: [
    {
      type: 'dist',
      esmLoaderPath: '../loader',
    },
    // {
    //   type: 'dist-custom-elements',
    // },
    // {
    //   type: 'docs-readme',
    //   // dir: 'output',
    // },
    {
      type: 'www',
      serviceWorker: null, // disable service workers
      copy: [{ src: 'dev.html' }],
    },

    // angularOutputTarget({
    //   componentCorePackage: '@ionic/core',
    //   customElementsDir: 'ng-output',
    //   directivesProxyFile: '../angular/src/directives/proxies.ts',
    //   // directivesArrayFile: '../angular/src/directives/proxies-list.txt',
    // }),
  ],
}
