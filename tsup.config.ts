import { defineConfig } from 'tsup';

export default defineConfig({
  entry: [
    'src/index.ts',
    'src/provinces.ts',
    'src/districts.ts',
    'src/zones.ts',
    'src/national-schools.ts',
    'src/schools.ts',
  ],
  format: ['cjs', 'esm'],
  dts: false,
  clean: true,
  sourcemap: false,
  minify: false,
});
