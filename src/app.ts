process.on("unhandledRejection", reason => {
  console.error(reason);
  process.exit(1);
});

async function main(): Promise<void> {
  console.log("poyo");
}

main();
