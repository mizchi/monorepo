let isError = false;
try {
  // await $`rm -r packages apps`;
  await $`pnpm turbo gen lib --args lib`;
  await $`pnpm turbo gen react-lib --args react-lib`;
  await $`pnpm turbo gen cli --args cli`;
  await $`pnpm turbo gen react --args react`;
  await $`pnpm turbo gen panda --args panda`;
  await $`pnpm turbo gen cf-worker --args cf-worker`;

  await $`pnpm install`;
  await $`pnpm turbo test`;
  await $`pnpm turbo typecheck`;
  await $`pnpm format`;
  await $`pnpm check . --apply-unsafe`;
} catch (err) {
  console.error(err);
  isError = true;
}

if (isError) {
  process.exit(1);
}
