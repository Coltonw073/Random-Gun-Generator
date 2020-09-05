  var randomizer = document.getElementById("randomGunBut");
  var randimg = document.getElementById("gunImg");
  var randomGunImgs = new Array();    randomGunImgs[0] = '/pump.png';

    
    randomGunImgs[0] = 'pump.png';
    
    randomGunImgs[1] = 'pump.png';

    randomGunImgs[2] = 'pump.png';
    
    randomGunImgs[3] = 'spump.png';
    
    randomGunImgs[4] = 'spump.png';
    
    randomGunImgs[5] = 'combat.png';
    
    randomGunImgs[6] = 'combat.png';
    
    randomGunImgs[7] = 'combat.png';
    
    randomGunImgs[8] = 'charge.png';
    
    randomGunImgs[9] = 'charge.png';
    
    randomGunImgs[10] = 'charge.png';
    
    randomGunImgs[11] = 'charge.png';
    
    randomGunImgs[12] = 'charge.png';
    
    randomGunImgs[13] = 'M16.png';
    
    randomGunImgs[14] = 'M16.png';
    
    randomGunImgs[15] = 'M16.png';
    
    randomGunImgs[16] = 'SM16.png';
    
    randomGunImgs[17] = 'SM16.png';
    
    randomGunImgs[18] = 'Burst.png';
    
    randomGunImgs[19] = 'Burst.png';
    
    randomGunImgs[20] = 'Burst.png';
    
    randomGunImgs[21] = 'Burst.png';
    
    randomGunImgs[22] = 'Burst.png';
    
    randomGunImgs[23] = 'SAR.png';
    
    randomGunImgs[24] = 'SAR.png';
    
    randomGunImgs[25] = 'SSAR.png';
    
    randomGunImgs[26] = 'SSAR.png';
    
    randomGunImgs[27] = 'TSMG.png';
    
    randomGunImgs[28] = 'TSMG.png';
    
    randomGunImgs[29] = 'TSMG.png';
    
    randomGunImgs[30] = 'TSMG.png';
    
    randomGunImgs[31] = 'S-SMG.png';
    
    randomGunImgs[32] = 'S-SMG.png';
    
    randomGunImgs[33] = 'S-SMG.png';
    
    randomGunImgs[34] = 'Pistol.png';
    
    randomGunImgs[35] = 'Pistol.png';
    
    randomGunImgs[36] = 'Pistol.png';
    
    randomGunImgs[37] = 'Revolver.png';
    
    randomGunImgs[38] = 'Revolver.png';
    
    randomGunImgs[39] = 'BASR.png';
    
    randomGunImgs[40] = 'SBASR.png';
    
    randomGunImgs[41] = 'SBASR.png';
    
    randomGunImgs[42] = 'RPG.png';
    
    randomGunImgs[43] = 'RPG.png';
    
    randomizer.addEventListener("click", function(){
    var randNum = Math.floor(Math.random() * randomGunImgs.length) + 0;
    randimg.src = randomGunImgs[randNum] ;
    if (randNum == 0) {
        new Audio('pump.mp3').play();
        document.getElementById('gunnametext').innerHTML = "Common Pump";
        document.getElementById('gunname').style.backgroundColor = "#cacaca";
        document.getElementById('gunImgBg').style.background = 'radial-gradient(var(--rarity-common-light),var(--rarity-common-dark))';
    }
    if (randNum == 1) {
        new Audio('pump.mp3').play();
        document.getElementById('gunnametext').innerHTML = "Uncommon Pump";
        document.getElementById('gunname').style.backgroundColor = "#80cf3f";
        document.getElementById('gunImgBg').style.background = 'radial-gradient(var(--rarity-uncommon-light),var(--rarity-uncommon-dark))';        
    }
    if (randNum == 2) {
        new Audio('pump.mp3').play();        
        document.getElementById('gunnametext').innerHTML = "Rare Pump";
        document.getElementById('gunname').style.backgroundColor = "#2fd5e8";
        document.getElementById('gunImgBg').style.background = 'radial-gradient(var(--rarity-rare-light),var(--rarity-rare-dark))';
    }
    if (randNum == 3) {
        document.getElementById('gunnametext').innerHTML = "Epic Pump";
        document.getElementById('gunname').style.backgroundColor = "#bd3ffa";
        document.getElementById('gunImgBg').style.background = 'radial-gradient(var(--rarity-epic-light),var(--rarity-epic-dark))';
        new Audio('spump.mp3').play();
    }
    if (randNum == 4) {
        document.getElementById('gunnametext').innerHTML = "Legendary Pump";
        document.getElementById('gunname').style.backgroundColor = "#fdae53";
        document.getElementById('gunImgBg').style.background = 'radial-gradient(var(--rarity-legendary-light),var(--rarity-legendary-dark))';
        new Audio('spump.mp3').play();
    }
    if (randNum == 5) {
        document.getElementById('gunnametext').innerHTML = "Rare Combat";
        document.getElementById('gunname').style.backgroundColor = "#2fd5e8";
        document.getElementById('gunImgBg').style.background = 'radial-gradient(var(--rarity-rare-light),var(--rarity-rare-dark))';
        new Audio('combat.mp3').play();
    }
    if (randNum == 6) {
        document.getElementById('gunnametext').innerHTML = "Epic Combat";
        document.getElementById('gunname').style.backgroundColor = "#bd3ffa";
        document.getElementById('gunImgBg').style.background = 'radial-gradient(var(--rarity-epic-light),var(--rarity-epic-dark))';
        new Audio('combat.mp3').play();
    }
    if (randNum == 7) {
        document.getElementById('gunnametext').innerHTML = "Legendary Combat";
        document.getElementById('gunname').style.backgroundColor = "#fdae53";
        document.getElementById('gunImgBg').style.background = 'radial-gradient(var(--rarity-legendary-light),var(--rarity-legendary-dark))';
        new Audio('combat.mp3').play();
    }
    if (randNum == 8) {
        new Audio('Charge.mp3').play();
        document.getElementById('gunnametext').innerHTML = "Common Charge";
        document.getElementById('gunname').style.backgroundColor = "#cacaca";
        document.getElementById('gunImgBg').style.background = 'radial-gradient(var(--rarity-common-light),var(--rarity-common-dark))';
    }
    if (randNum == 9) {
        new Audio('Charge.mp3').play();
        document.getElementById('gunnametext').innerHTML = "Uncommon Charge";
        document.getElementById('gunname').style.backgroundColor = "#80cf3f";
        document.getElementById('gunImgBg').style.background = 'radial-gradient(var(--rarity-uncommon-light),var(--rarity-uncommon-dark))';        
    }
    if (randNum == 10) {
        new Audio('Charge.mp3').play();        
        document.getElementById('gunnametext').innerHTML = "Rare Charge";
        document.getElementById('gunname').style.backgroundColor = "#2fd5e8";
        document.getElementById('gunImgBg').style.background = 'radial-gradient(var(--rarity-rare-light),var(--rarity-rare-dark))';
    }
    if (randNum == 11) {
        document.getElementById('gunnametext').innerHTML = "Epic Charge";
        document.getElementById('gunname').style.backgroundColor = "#bd3ffa";
        document.getElementById('gunImgBg').style.background = 'radial-gradient(var(--rarity-epic-light),var(--rarity-epic-dark))';
        new Audio('Charge.mp3').play();
    }
    if (randNum == 12) {
        document.getElementById('gunnametext').innerHTML = "Legendary Charge";
        document.getElementById('gunname').style.backgroundColor = "#fdae53";
        document.getElementById('gunImgBg').style.background = 'radial-gradient(var(--rarity-legendary-light),var(--rarity-legendary-dark))';
        new Audio('Charge.mp3').play();
    }
    if (randNum == 13) {
        new Audio('Assault Rifle.mp3').play();
        document.getElementById('gunnametext').innerHTML = "Common AR";
        document.getElementById('gunname').style.backgroundColor = "#cacaca";
        document.getElementById('gunImgBg').style.background = 'radial-gradient(var(--rarity-common-light),var(--rarity-common-dark))';
    }
    if (randNum == 14) {
        new Audio('Assault Rifle.mp3').play();
        document.getElementById('gunnametext').innerHTML = "Uncommon AR";
        document.getElementById('gunname').style.backgroundColor = "#80cf3f";
        document.getElementById('gunImgBg').style.background = 'radial-gradient(var(--rarity-uncommon-light),var(--rarity-uncommon-dark))';        
    }
    if (randNum == 15) {
        new Audio('Assault Rifle.mp3').play();        
        document.getElementById('gunnametext').innerHTML = "Rare AR";
        document.getElementById('gunname').style.backgroundColor = "#2fd5e8";
        document.getElementById('gunImgBg').style.background = 'radial-gradient(var(--rarity-rare-light),var(--rarity-rare-dark))';
    }
    if (randNum == 16) {
        document.getElementById('gunnametext').innerHTML = "Epic AR";
        document.getElementById('gunname').style.backgroundColor = "#bd3ffa";
        document.getElementById('gunImgBg').style.background = 'radial-gradient(var(--rarity-epic-light),var(--rarity-epic-dark))';
        new Audio('/S Assault Rifle.mp3').play();
    }
    if (randNum == 17) {
        document.getElementById('gunnametext').innerHTML = "Legendary AR";
        document.getElementById('gunname').style.backgroundColor = "#fdae53";
        document.getElementById('gunImgBg').style.background = 'radial-gradient(var(--rarity-legendary-light),var(--rarity-legendary-dark))';
        new Audio('/S Assault Rifle.mp3').play();
    }
    if (randNum == 18) {
        new Audio('Burst.mp3').play();
        document.getElementById('gunnametext').innerHTML = "Common Burst";
        document.getElementById('gunname').style.backgroundColor = "#cacaca";
        document.getElementById('gunImgBg').style.background = 'radial-gradient(var(--rarity-common-light),var(--rarity-common-dark))';
    }
    if (randNum == 19) {
        new Audio('Burst.mp3').play();
        document.getElementById('gunnametext').innerHTML = "Uncommon Burst";
        document.getElementById('gunname').style.backgroundColor = "#80cf3f";
        document.getElementById('gunImgBg').style.background = 'radial-gradient(var(--rarity-uncommon-light),var(--rarity-uncommon-dark))';        
    }
    if (randNum == 20) {
        new Audio('Burst.mp3').play();        
        document.getElementById('gunnametext').innerHTML = "Rare Burst";
        document.getElementById('gunname').style.backgroundColor = "#2fd5e8";
        document.getElementById('gunImgBg').style.background = 'radial-gradient(var(--rarity-rare-light),var(--rarity-rare-dark))';
    }
    if (randNum == 21) {
        document.getElementById('gunnametext').innerHTML = "Epic Burst";
        document.getElementById('gunname').style.backgroundColor = "#bd3ffa";
        document.getElementById('gunImgBg').style.background = 'radial-gradient(var(--rarity-epic-light),var(--rarity-epic-dark))';
        new Audio('SBurst.mp3').play();
    }
    if (randNum == 22) {
        document.getElementById('gunnametext').innerHTML = "Legendary Burst";
        document.getElementById('gunname').style.backgroundColor = "#fdae53";
        document.getElementById('gunImgBg').style.background = 'radial-gradient(var(--rarity-legendary-light),var(--rarity-legendary-dark))';
        new Audio('SBurst.mp3').play();
    }
    if (randNum == 23) {
        new Audio('SAR.mp3').play();
        document.getElementById('gunnametext').innerHTML = "Uncommon SAR";
        document.getElementById('gunname').style.backgroundColor = "#80cf3f";
        document.getElementById('gunImgBg').style.background = 'radial-gradient(var(--rarity-uncommon-light),var(--rarity-uncommon-dark))';        
    }
    if (randNum == 24) {
        new Audio('SAR.mp3').play();        
        document.getElementById('gunnametext').innerHTML = "Rare SAR";
        document.getElementById('gunname').style.backgroundColor = "#2fd5e8";
        document.getElementById('gunImgBg').style.background = 'radial-gradient(var(--rarity-rare-light),var(--rarity-rare-dark))';
    }
    if (randNum == 25) {
        document.getElementById('gunnametext').innerHTML = "Epic SAR";
        document.getElementById('gunname').style.backgroundColor = "#bd3ffa";
        document.getElementById('gunImgBg').style.background = 'radial-gradient(var(--rarity-epic-light),var(--rarity-epic-dark))';
        new Audio('SAR.mp3').play();
    }
    if (randNum == 26) {
        document.getElementById('gunnametext').innerHTML = "Legendary SAR";
        document.getElementById('gunname').style.backgroundColor = "#fdae53";
        document.getElementById('gunImgBg').style.background = 'radial-gradient(var(--rarity-legendary-light),var(--rarity-legendary-dark))';
        new Audio('SAR.mp3').play();
    }
    if (randNum == 27) {
        new Audio('T-SMG.mp3').play();
        document.getElementById('gunnametext').innerHTML = "Uncommon T-SMG";
        document.getElementById('gunname').style.backgroundColor = "#80cf3f";
        document.getElementById('gunImgBg').style.background = 'radial-gradient(var(--rarity-uncommon-light),var(--rarity-uncommon-dark))';        
    }
    if (randNum == 28) {
        new Audio('T-SMG.mp3').play();        
        document.getElementById('gunnametext').innerHTML = "Rare T-SMG";
        document.getElementById('gunname').style.backgroundColor = "#2fd5e8";
        document.getElementById('gunImgBg').style.background = 'radial-gradient(var(--rarity-rare-light),var(--rarity-rare-dark))';
    }
    if (randNum == 29) {
        document.getElementById('gunnametext').innerHTML = "Epic T-SMG";
        document.getElementById('gunname').style.backgroundColor = "#bd3ffa";
        document.getElementById('gunImgBg').style.background = 'radial-gradient(var(--rarity-epic-light),var(--rarity-epic-dark))';
        new Audio('T-SMG.mp3').play();
    }
    if (randNum == 30) {
        document.getElementById('gunnametext').innerHTML = "Legendary T-SMG";
        document.getElementById('gunname').style.backgroundColor = "#fdae53";
        document.getElementById('gunImgBg').style.background = 'radial-gradient(var(--rarity-legendary-light),var(--rarity-legendary-dark))';
        new Audio('T-SMG.mp3').play();
    }
    if (randNum == 31) {
        new Audio('S-SMG.mp3').play();
        document.getElementById('gunnametext').innerHTML = "Common S-SMG";
        document.getElementById('gunname').style.backgroundColor = "#cacaca";
        document.getElementById('gunImgBg').style.background = 'radial-gradient(var(--rarity-common-light),var(--rarity-common-dark))';
    }
    if (randNum == 32) {
        new Audio('S-SMG.mp3').play();
        document.getElementById('gunnametext').innerHTML = "Uncommon S-SMG";
        document.getElementById('gunname').style.backgroundColor = "#80cf3f";
        document.getElementById('gunImgBg').style.background = 'radial-gradient(var(--rarity-uncommon-light),var(--rarity-uncommon-dark))';        
    }
    if (randNum == 33) {
        new Audio('S-SMG.mp3').play();        
        document.getElementById('gunnametext').innerHTML = "Rare S-SMG";
        document.getElementById('gunname').style.backgroundColor = "#2fd5e8";
        document.getElementById('gunImgBg').style.background = 'radial-gradient(var(--rarity-rare-light),var(--rarity-rare-dark))';
    }
    if (randNum == 34) {
        new Audio('Pistol.mp3').play();
        document.getElementById('gunnametext').innerHTML = "Common Pistol";
        document.getElementById('gunname').style.backgroundColor = "#cacaca";
        document.getElementById('gunImgBg').style.background = 'radial-gradient(var(--rarity-common-light),var(--rarity-common-dark))';
    }
    if (randNum == 35) {
        new Audio('Pistol.mp3').play();
        document.getElementById('gunnametext').innerHTML = "Uncommon Pistol";
        document.getElementById('gunname').style.backgroundColor = "#80cf3f";
        document.getElementById('gunImgBg').style.background = 'radial-gradient(var(--rarity-uncommon-light),var(--rarity-uncommon-dark))';        
    }
    if (randNum == 36) {
        new Audio('Pistol.mp3').play();        
        document.getElementById('gunnametext').innerHTML = "Rare Pistol";
        document.getElementById('gunname').style.backgroundColor = "#2fd5e8";
        document.getElementById('gunImgBg').style.background = 'radial-gradient(var(--rarity-rare-light),var(--rarity-rare-dark))';
    }
    if (randNum == 37) {
        document.getElementById('gunnametext').innerHTML = "Epic Rvlver";
        document.getElementById('gunname').style.backgroundColor = "#bd3ffa";
        document.getElementById('gunImgBg').style.background = 'radial-gradient(var(--rarity-epic-light),var(--rarity-epic-dark))';
        new Audio('Revolver.mp3').play();
    }
    if (randNum == 38) {
        document.getElementById('gunnametext').innerHTML = "Legendary Rvlver";
        document.getElementById('gunname').style.backgroundColor = "#fdae53";
        document.getElementById('gunImgBg').style.background = 'radial-gradient(var(--rarity-legendary-light),var(--rarity-legendary-dark))';
        new Audio('Revolver.mp3').play();
    }
    if (randNum == 39) {
        new Audio('BASR.mp3').play();        
        document.getElementById('gunnametext').innerHTML = "Rare BASR";
        document.getElementById('gunname').style.backgroundColor = "#2fd5e8";
        document.getElementById('gunImgBg').style.background = 'radial-gradient(var(--rarity-rare-light),var(--rarity-rare-dark))';
    }
    if (randNum == 40) {
        document.getElementById('gunnametext').innerHTML = "Epic BASR";
        document.getElementById('gunname').style.backgroundColor = "#bd3ffa";
        document.getElementById('gunImgBg').style.background = 'radial-gradient(var(--rarity-epic-light),var(--rarity-epic-dark))';
        new Audio('SBASR.mp3').play();
    }
    if (randNum == 41) {
        document.getElementById('gunnametext').innerHTML = "Legendary BASR";
        document.getElementById('gunname').style.backgroundColor = "#fdae53";
        document.getElementById('gunImgBg').style.background = 'radial-gradient(var(--rarity-legendary-light),var(--rarity-legendary-dark))';
        new Audio('SBASR.mp3').play();
    }
    if (randNum == 42) {
        document.getElementById('gunnametext').innerHTML = "Epic RPG";
        document.getElementById('gunname').style.backgroundColor = "#bd3ffa";
        document.getElementById('gunImgBg').style.background = 'radial-gradient(var(--rarity-epic-light),var(--rarity-epic-dark))';
        new Audio('RPG.mp3').play();
    }
    if (randNum == 43) {
        document.getElementById('gunnametext').innerHTML = "Legendary RPG";
        document.getElementById('gunname').style.backgroundColor = "#fdae53";
        document.getElementById('gunImgBg').style.background = 'radial-gradient(var(--rarity-legendary-light),var(--rarity-legendary-dark))';
        new Audio('RPG.mp3').play();
    }
});
