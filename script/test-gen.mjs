let isError = false;
try {
  await $`pnpm turbo gen lib --args _test_lib`;
  await $`pnpm turbo gen cli --args _test_cli`;
  await $`pnpm turbo gen react --args _test_react`;
  await $`pnpm turbo gen panda --args _test_panda`;
  await $`pnpm turbo gen cf-worker --args _test_worker`;
  await $`pnpm turbo gen react-lib --args _test_react_lib`;

  await $`pnpm install`;
  await $`pnpm turbo test`;
  await $`pnpm turbo typecheck`;
} catch (err) {
  console.error(err);
  isError = true;
} finally {
  await $`rm -rf packages/_test_* apps/_test_*`;
  await $`pnpm install`;
}

if (isError) {
  process.exit(1);
}
