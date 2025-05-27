// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'
// import { visualizer } from 'rollup-plugin-visualizer';
// // https://vite.dev/config/
// export default defineConfig({
//   base: '/Pradyunuydarp/',
//   plugins: [react(), visualizer({ open: true })],
//   build: {
//     rollupOptions: {
//       output: {
//         manualChunks(id) {
//           if (id.includes('node_modules')) {
//             // only three.js core
//             if (id.includes('three/build/three.module.js')) {
//               return 'three';
//             }
//             // only hls.js
//             if (id.includes('hls.js/dist/hls.mjs')) {
//               return 'hls';
//             }
//             // EVERYTHING else—including react, react-dom, @react-three, drei,
//             // all your other node_modules—goes into `vendor`
//             return 'vendor';
//           }
//         }
//       }
//     }
//   }
// })

// vite.config.js
import { defineConfig, loadEnv  } from 'vite';
import react from '@vitejs/plugin-react';

// export default defineConfig({
//
//   base: '/Pradyunuydarp/',
//   plugins: [react()],
//
//   build: {
//     rollupOptions: {
//       output: {
//         manualChunks(id) {
//           if (id.includes('node_modules')) {
//             // only three.js core
//             if (id.includes('three/build/three.module.js')) {
//               return 'three';
//             }
//             // only hls.js
//             if (id.includes('hls.js/dist/hls.mjs')) {
//               return 'hls';
//             }
//             // EVERYTHING else—including react, react-dom, @react-three, drei,
//             // all your other node_modules—goes into `vendor`
//             return 'vendor';
//           }
//         }
//       }
//     }
//
//   }
// });
export default defineConfig(({ mode }) => {
  // Load env file based on mode (development or production)
  const env = loadEnv(mode, process.cwd(), '');

  return {
    // base: env.VITE_BASE_URL || '/',
    base: '/Pradyunuydarp/',
    plugins: [react()],
    build: {
      rollupOptions: {
        output: {
          manualChunks(id) {
            if (id.includes('node_modules')) {
              if (id.includes('three/build/three.module.js')) return 'three';
              if (id.includes('hls.js/dist/hls.mjs')) return 'hls';
              return 'vendor';
            }
          }
        }
      }
    }
  };
});
