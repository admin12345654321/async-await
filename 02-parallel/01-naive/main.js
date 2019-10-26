const { process01, process02 } = require('./processes');

async function main() {
  try {
    console.time('Total running time');
    const data = await Promise.all([process01(), process02()]);

    console.log();

    console.log('Process 01 returned: ', data[0]);
    console.log('Process 02 returned: ', data[1]);

    console.log('Total running time');

    console.timeEnd();
  } catch (error) {
    console.error(error);
  }
}

main();
