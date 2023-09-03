import dotenv from 'dotenv';
import esbuild from 'esbuild';
import autoprefixer from 'autoprefixer';
import tailwindCss from 'tailwindcss';
import postCssPlugin from 'esbuild-style-plugin';
import path from 'path';
import { fileURLToPath } from 'url';
import { argv } from 'process';
const [,, args] = argv;

dotenv.config();

const isWatchMode = args.includes('--watch');
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const OUTDIR = "./public/dist";
const isProduction = JSON.stringify(process.env.NODE_ENV) === 'production';

const handleLogError = (error) => {
  console.error(error);
  process.exit(1);
}

const buildConfig = {
  entryPoints: [ path.resolve(__dirname, "./src/server.ts") ],
  outdir: OUTDIR,
  logLevel: "info",
  bundle: true,
  minify: !isProduction,
  sourcemap: !isProduction,
  platform: 'node',
  target: 'es2017',
  define: {
    "process.env.NODE_ENV": JSON.stringify(process.env.NODE_ENV),
  },
  tsconfig: "tsconfig.json",
  external: [ 'express' ],
  jsxFactory: 'React.createElement',
  jsxFragment: 'React.Fragment',
  treeShaking: true,
  loader: { ".ts": "ts", ".tsx": "tsx" },
  plugins: [ postCssPlugin({ 
    postcss: {
      plugins: [tailwindCss, autoprefixer]
    }
  })]
};

if (isWatchMode) {
  const ctx = await esbuild.context(buildConfig)
  .catch(handleLogError);
  
  await ctx.watch();
} else {
  await esbuild.build(buildConfig)
  .catch(handleLogError);
}
