let isCheck = 0;
let is1Check = 0;
let isNet = 0;
let doOldCores = false;

let isNetDat = localStorage.getItem("isNet");
isNet = JSON.parse(isNetDat);

if (isNet == 1) {
  doOldCores = true;
}
if (isNet == 0) {
    doOldCores = false;
}
    let gameTextDat = localStorage.getItem("gameSetText");
    let gameText = JSON.parse(gameTextDat);
    let isCheckdata = localStorage.getItem("isCheck");
    isCheck = JSON.parse(isCheckdata);
    let checkType = 0;
    let userCustom = false;
    if (isCheck == 1) {
        if (gameCoreType == "gba") {
            checkType = 1;
        }
        if (gameCoreType == "nes"){
            checkType = 2;
        }
    }
    if (userCustom == true) {
        gameName = gameText
        let gameLink = customHost + gameName + ".zip";
        gameName = gameLink;
        console.log("custom-server")
    }

   
    if (checkType == 1) {
    gameName = gameText;
    let gameLink = "https://endpoint.i10.repl.co/gba-alt/" + gameName + ".gba";
    gameName = gameLink;
    console.log("gba-server");
    }
    if (checkType == 2) {
    gameName = gameText;
    let gameLink = "https://endpoint.i10.repl.co/nes-alt/" + gameName + ".nes.zip";
    gameName = gameLink;
    console.log("nes-server");
    }
    let ischeckDatas = localStorage.getItem("is1Check");
    is1Check = JSON.parse(ischeckDatas);
   
let useCustDat = localStorage.getItem("useCust");
useCust = JSON.parse(useCustDat);
let custHostDat = localStorage.getItem("custHost");
let custHost = JSON.parse(custHostDat);
let custType = 0;
let custTypedat = localStorage.getItem("custType");
custType = JSON.parse(custTypedat);

if (useCust == true) {
    if (gameCoreType == "gba") {
        custType = 1;
        localStorage.setItem("custType", JSON.stringify(custType));
    }
    if (gameCoreType == "nes"){
        custType = 2;
        localStorage.setItem("custType", JSON.stringify(custType));
    }
   
} else if (useCust == false) {
    custType = 0;
    localStorage.setItem("custType", JSON.stringify(custType));
}

if (custType == 1) {
    gameName = gameText;
    let gameLink = custHost + "gba-alt/" + gameName + ".gba";
    gameName = gameLink;
    console.log(gameLink);
}
if (custType == 2) {
    gameName = gameText;
    let gameLink = custHost + "nes-alt/" + gameName + ".nes.zip";
    gameName = gameLink;
    console.log(gameLink);
}