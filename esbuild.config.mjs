import dotenv from 'dotenv';
import esbuild from 'esbuild';

dotenv.config();

let ctx = await esbuild.context({
  entryPoints: ["./src/server.tsx"],
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
  outdir: "./src/public/dist",
  external: ['express'],
  jsxFactory: 'React.createElement',
  jsxFragment: 'React.Fragment',
  treeShaking: true,
  loader: {".ts": "ts", ".tsx": "tsx"}
})
.catch(() => process.exit(1));

await ctx.watch();