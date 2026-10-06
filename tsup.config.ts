import { defineConfig } from 'tsup';

export default defineConfig({
  entry: [
    'src/index.ts',
    'src/provinces.ts',
    'src/districts.ts',
    'src/zones.ts',
    'src/national-schools.ts',
    'src/schools.ts',
    'src/admissions.ts',
  ],
  format: ['cjs', 'esm'],
  dts: false,
  clean: false,
  sourcemap: true,
  minify: false,
});

