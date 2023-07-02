import dotenv from 'dotenv';
import esbuild from 'esbuild';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const OUTDIR = "./public/dist";

dotenv.config();

const ctx = await esbuild.context({
  entryPoints: [path.resolve(__dirname, "./src/server.tsx"), path.resolve(__dirname, "./src/client.tsx")],
  logLevel: "info",
  bundle: true,
  minify: false,
  sourcemap: true,
  platform: "node",
  target: 'es2017',
  define: {
    "process.env.NODE_ENV": JSON.stringify(process.env.NODE_ENV),
  },
  tsconfig: "tsconfig.json",
  outdir: OUTDIR,
  external: ['express'],
  jsxFactory: 'React.createElement',
  jsxFragment: 'React.Fragment',
  treeShaking: true,
  loader: { ".ts": "ts", ".tsx": "tsx" },
})
.catch(() => process.exit(1));

await ctx.watch();

let { host, port } = ctx.serve({
  servedir: OUTDIR
});