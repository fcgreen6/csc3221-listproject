const fm = require("./filemgr");

async function thingy () {

    rat = await fm.ReadData();
    console.log(rat);
}

thingy();

