/*
 *  top bar 
 */

var topBarItem = document.querySelectorAll('.top-bar-item');

for (let i = 0; i < topBarItem.length; i++) {
    topBarItem[i].addEventListener('mouseover', function () {
        document.getElementById(topBarItem[i].id + '-choice').style.position = 'relative';
        document.getElementById(topBarItem[i].id + '-choice').style.zIndex = '1';
        document.getElementById(topBarItem[i].id + '-choice').style.visibility = 'visible';
    });
    topBarItem[i].addEventListener('mouseleave', function () {
        document.getElementById(topBarItem[i].id + '-choice').style.position = 'relative';
        document.getElementById(topBarItem[i].id + '-choice').style.zIndex = '0';
        document.getElementById(topBarItem[i].id + '-choice').style.visibility = 'hidden';
    });
}

/*
    Selected Input Mode
 */

function ChangeMode(e) {
    var mode;
    for (var i = 1; i <= 3; i++) {
        mode = document.getElementById('sch-mode-' + i).value;
        if (mode == 1) {
            SelectedMode(e, i);
            break;
        }
    }
}

function SelectedMode(e, mode) {
    document.getElementById('sch-mode-' + mode).style.color = "orangered";
    document.getElementById('sch-mode-' + mode).style.backgroundColor = "white";
    document.getElementById('sch-mode-' + mode).style.border = "none";
    document.getElementById('sch-mode-' + mode).value = "0";
    e.style.backgroundColor = "orangered";
    e.style.color = "white";
    e.style.border = "3px solid orangered";
    e.value = "1";
    if (mode == "2") {
        PlaceholderIn();
    }
    if (e.id == "sch-mode-2") {
        PlaceholderOut();
    }
}

function PlaceholderIn() {
    document.getElementById('sch-input').setAttribute("placeholder", "     超酷西装男");
    document.getElementById('sch-quick-links').style.visibility = "inherit";
}

function PlaceholderOut() {
    document.getElementById('sch-input').setAttribute("placeholder", "");
    document.getElementById('sch-quick-links').style.visibility = "hidden";
}

/*
 *  Change Search Logo
 */

function HideSchLogo() {
    var v = document.getElementById('search').getElementsByTagName('input')[0].value;
    if (v == "") {
        document.getElementById('sch-input-logo').style.visibility = 'inherit';
    } else {
        document.getElementById('sch-input-logo').style.visibility = 'hidden';
    }
}

/*
 * Cat Items
 */

document.getElementById('cat').addEventListener('mouseover', ShowCatItem);
document.getElementById('central-panel').addEventListener('mouseleave', HideCatItem);

function ShowCatItem() {
    document.getElementById('central-panel-promotion').style.display = 'none';
    document.getElementById('cat-item-detail').style.display = 'block';
}

function HideCatItem() {
    document.getElementById('central-panel-promotion').style.display = 'block';
    document.getElementById('cat-item-detail').style.display = 'none';
}

//Changing the cat item detail shown
var catItem = document.querySelectorAll('.cat-item');
for (let i = 0; i < catItem.length; i++) {
    catItem[i].addEventListener('mouseover', function () { ChangeCatItemDetail(i); });
}

function ChangeCatItemDetail(input) {
    document.getElementById('cat-item-detail-number').innerHTML = input;
}

/*
 *  Central Panel Promotion Upper Display Buttons
*/

//Auto showing the central Panel Promotion Upper Display
var promotionUpperImg = setInterval(ChangeUpperDisplay, 3000, 'next');

function ChangeUpperDisplay(action, e) {
    clearInterval(promotionUpperImg);
    var presentNum = 1;
    var presentImg = document.getElementById('central-panel-promotion-upper-display-img').src;
    while (presentImg != 'file:///C:/Users/SHING/Desktop/Taobao_new/_Data/' + presentNum + '.jpg') {
        presentNum += 1;
    }
    document.getElementById('central-panel-promotion-upper-display-circle-page-' + presentNum).style.backgroundColor = 'white';
    var page;
    if (action == 'prev') {
        page = presentNum - 1;
        if (page == 0) {
            page += 5;
        }
        document.getElementById('central-panel-promotion-upper-display-img').src = '_Data/' + page + '.jpg';
        document.getElementById('central-panel-promotion-upper-display-circle-page-' + page).style.backgroundColor = 'orangered';
    }
    if (action == 'next') {
        page = presentNum + 1;
        if (page > 5) {
            page -= 5;
        }
        document.getElementById('central-panel-promotion-upper-display-img').src = '_Data/' + page + '.jpg';
        document.getElementById('central-panel-promotion-upper-display-circle-page-' + page).style.backgroundColor = 'orangered';
    }
    if (action == 'circle') {
        var getPage = (e.id).charAt((e.id).length - 1);
        page = parseInt(getPage);
        document.getElementById('central-panel-promotion-upper-display-img').src = '_Data/' + page + '.jpg';
        document.getElementById('central-panel-promotion-upper-display-circle-page-' + page).style.backgroundColor = 'orangered';
    }
    promotionUpperImg = setInterval(ChangeUpperDisplay, 3000, 'next');
}

//stop auto play of upper display
document.getElementById('central-panel-promotion-upper-display-img').addEventListener('mouseover', StopUpperDisplayAuto);
document.getElementById('central-panel-promotion-upper-display-img').addEventListener('mouseout', StartUpperDisplayAuto);

function StopUpperDisplayAuto() {
    clearInterval(promotionUpperImg);
}

function StartUpperDisplayAuto() {
    promotionUpperImg = setInterval(ChangeUpperDisplay, 3000, 'next');
}

/*
    Central Panel Promotion Bottom Display
*/

//Auto play of central panel promotion bottom display
var promotionBottomImg = setInterval(ChangeBottomDisplay, 3000, 'next');

function ChangeBottomDisplay(action) {
    var present = document.getElementById('central-panel-promotion-middle-bar-page').innerText;
    var page = parseInt(present);
    if (action == 'prev') {
        page -= 1;
        if (page == 0)
            page += 6;
    }
    if (action == 'next') {
        page += 1;
        if (page > 6)
            page -= 6;
    }
    document.getElementById('central-panel-promotion-middle-bar-page').innerHTML = page;
    document.getElementById('central-panel-promotion-bottom-display-page-' + present).style.display = 'none';
    document.getElementById('central-panel-promotion-bottom-display-page-' + present).style.visibility = 'hidden';
    document.getElementById('central-panel-promotion-middle-bar-page-' + present).style.backgroundColor = 'crimson';
    document.getElementById('central-panel-promotion-bottom-display-page-' + page).style.display = 'block';
    document.getElementById('central-panel-promotion-bottom-display-page-' + page).style.visibility = 'inherit';
    document.getElementById('central-panel-promotion-middle-bar-page-' + page).style.backgroundColor = 'black';
}

//stop time count on changing the central panel promotion bottom display
document.getElementById('central-panel-promotion-bottom-display').addEventListener('mouseover', StopBottomDisplayAuto);
document.getElementById('central-panel-promotion-bottom-display').addEventListener('mouseout', StartBottomDisplayAuto);

function StopBottomDisplayAuto() {
    clearInterval(promotionBottomImg);
}

function StartBottomDisplayAuto() {
    promotionBottomImg = setInterval(ChangeBottomDisplay, 3000, 'next');
}

/*
 *  Personal Information
*/

for (let i = 1; i <= 5; i++) {
    document.getElementById('info-' + i).addEventListener('mouseover', function () { ShowInfoDetail(i) });
}

function ShowInfoDetail(num) {
    for (var i = 1; i <= 5; i++) {
        /* info topic - the five areas*/
        if (i != num) {
            document.getElementById('info-' + i).style.fontWeight = 'inherit';
            document.getElementById('info-' + i).style.borderBottom = 'none';
        } else {
            document.getElementById('info-' + i).style.fontWeight = 'bold';
            document.getElementById('info-' + i).style.borderBottom = '2px solid orangered';
        }   
    }
/* the info details, maximum of four*/
    /* Show info 1 details*/
    if (num == 1) {
        document.getElementById('info-detail-1').style.width = 'inherit';
        document.getElementById('info-detail-1').innerHTML = "95公益周阿里、腾讯等六家公司同台联合做公益";
        document.getElementById('info-detail-2').style.width = '0px';
        document.getElementById('info-detail-2').innerHTML = "";
        document.getElementById('info-detail-3').innerHTML = "淘宝造物者之城市秘密";
        document.getElementById('info-detail-4').innerHTML = "聚划算88红包省钱卡";
    } 
    /* Show info 2 details*/
    if (num == 2) {
        document.getElementById('info-detail-1').style.width = '120px';
        document.getElementById('info-detail-1').innerHTML = "新增《淘宝网汽配行业";
        document.getElementById('info-detail-2').style.width = '120px';
        document.getElementById('info-detail-2').innerHTML = "《淘宝网区域零售服务";
        document.getElementById('info-detail-3').innerHTML = "《淘宝网票务行业管理";
        document.getElementById('info-detail-4').innerHTML = "《淘宝网数字娱乐市场";
    }
    /* Show info 3 details*/
    if (num == 3) {
        document.getElementById('info-detail-1').style.width = '120px';
        document.getElementById('info-detail-1').innerHTML = "淘宝618大促报名";
        document.getElementById('info-detail-2').style.width = '120px';
        document.getElementById('info-detail-2').innerHTML = "金牌卖家志愿者招募";
        document.getElementById('info-detail-3').innerHTML = "618大促报名激励";
        document.getElementById('info-detail-4').innerHTML = "运营神器年中大促";
    }
    /* Show info 4 details*/
    if (num == 4) {
        document.getElementById('info-detail-1').style.width = '120px';
        document.getElementById('info-detail-1').innerHTML = "魔豆妈妈公益项目";
        document.getElementById('info-detail-2').style.width = '120px';
        document.getElementById('info-detail-2').innerHTML = "让母爱永不打烊";
        document.getElementById('info-detail-3').innerHTML = "卖家注意：风险通报！";
        document.getElementById('info-detail-4').innerHTML = "售假获刑又起诉！";
    }
    /* Show info 5 details*/
    if (num == 5) {
        document.getElementById('info-detail-1').style.width = '120px';
        document.getElementById('info-detail-1').innerHTML = "淘宝公益平台正式更名";
        document.getElementById('info-detail-2').style.width = '120px';
        document.getElementById('info-detail-2').innerHTML = "益起来商家招募即将截";
        document.getElementById('info-detail-3').innerHTML = "卖家如何设置公益宝贝";
        document.getElementById('info-detail-4').innerHTML = "公益机构开店全攻略";
    }
}

/*
 *  forthe shortcut details
 */

//for the close button for all shortcut detail
var close = document.querySelectorAll('.close');
for (let i = 0; i < close.length; i++) {
    close[i].addEventListener('click', CloseShortcutDetail);
}

function CloseShortcutDetail() {
    var targetList = document.querySelectorAll('.shortcut-detail');
    var i = 0;
    for (i = 0; i < targetList.length; i++) {
        targetList[i].style.display = 'none';
    }
    targetList = document.querySelectorAll('.shortcut');
    for (i = 0; i < targetList.length; i++) {
        targetList[i].style.border = 'none';
        targetList[i].style.color = 'black';
    }
    document.getElementById('bottom-shortcuts').style.display = 'block';
}

//show the shortcut details
for (let i = 1; i <= 3; i++) {
    document.getElementById('shortcut-' + i).addEventListener('mouseover', function () { ShowShortcutDetail(i); });
}

function ShowShortcutDetail(i) {
    document.getElementById('bottom-shortcuts').style.display = 'none';
    for (var j = 1; j <= 3; j++) {
        if (j == i) {
            document.getElementById('shortcut-' + j + '-detail').style.display = 'block';
        } else {
            document.getElementById('shortcut-' + j + '-detail').style.display = 'none';
        }
    }
    var shortcut = document.querySelectorAll('.shortcut');
    shortcut[3].style.borderBottom = '1px solid red'; //since no detail, so always showing the bottom border for layout
    for (var j = 0; j < 3; j++) {
        if (j == (i - 1)) { //the target shortcut
            shortcut[j].style.border = '1px solid red';
            shortcut[j].style.borderBottom = 'none';
            shortcut[j].style.color = 'orangered';
        } else { //other shortcut
            shortcut[j].style.border = 'none';
            shortcut[j].style.borderBottom = '1px solid red';
            shortcut[j].style.color = 'black';
        }
    }
}

for (let i = 1; i <= 3; i++) {
    var d = document.querySelectorAll('.shortcut-' + i + '-detail-choice');
    for (let j = 0; j < d.length; j++) {
        d[j].addEventListener('mouseover', function () {
            ChangeShortcutDetail(i, j);
        })
    }
}

function ChangeShortcutDetail(shortcut, specific) {
    //choice 1 default color to black
    document.getElementById('shortcut-' + shortcut + '-detail-choice-1').style.color = 'black';
    //change the colors of others and the target
    var targetList = document.getElementsByClassName('shortcut-' + shortcut + '-detail-choice');
    for (var i = 0; i < targetList.length; i++) {
        if (i == specific) {
            targetList[i].style.color = 'orangered';
            document.getElementById('shortcut-' + shortcut + '-detail-choice-' + (i + 1) + '-detail').style.display = 'block';
        } else {
            targetList[i].style.color = 'black';
            document.getElementById('shortcut-' + shortcut + '-detail-choice-' + (i + 1) + '-detail').style.display = 'none';
        }
    }
}

//for shortcut 1 choice 1 detail

//showing the top up fee
var money = parseInt(document.getElementById('topup').value);
document.getElementById('topup-fee').innerHTML = (money * 0.998);

//showing the top up selection list
document.getElementById('topup').addEventListener('click', ShowTopupList);
document.getElementById('topup-arrow').addEventListener('click', ShowTopupList);
document.getElementById('div-topup').addEventListener('mouseleave', HideTopupList);

function ShowTopupList() {
    let target = document.getElementById('topup-list');
    var tt = window.getComputedStyle(target, null);
    if (tt.display == 'none') {
        document.getElementById('topup-list').style.display = 'block';
    } else {
        document.getElementById('topup-list').style.display = 'none';
    }
}

function HideTopupList() {
    document.getElementById('topup-list').style.display = 'none';
}

//after selection of the top up value, for changing the chosen top up value in the input

var ChangeTopupValue = document.querySelectorAll('.topup-list-item');

for (let i = 0; i < ChangeTopupValue.length; i++) {
    ChangeTopupValue[i].addEventListener('click', function () { ChooseTopup(i) });
    ChangeTopupValue[i].addEventListener('mouseover', function () {
        ChangeTopupValue[i].style.color = 'orangered';
        ChangeTopupValue[i].style.backgroundColor = 'antiquewhite';
    });
    ChangeTopupValue[i].addEventListener('mouseleave', function () {
        ChangeTopupValue[i].style.color = 'black';
        ChangeTopupValue[i].style.backgroundColor = 'white';
        if (document.getElementById('topup').value == ChangeTopupValue[i].innerText) {
            ChangeTopupValue[i].style.color = 'orangered';
            ChangeTopupValue[i].style.backgroundColor = 'antiquewhite';
        }
    });
}

function ChooseTopup(input) {
    for (var i = 0; i < ChangeTopupValue.length; i++) {
        if (i == input) {
            ChangeTopupValue[i].style.color = 'orangered';
            ChangeTopupValue[i].style.backgroundColor = 'antiquewhite';
            var text = ChangeTopupValue[i].innerText;
            document.getElementById('topup').value = text;
            document.getElementById('topup-list').style.display = 'none';
            var money = parseInt(document.getElementById('topup').value);
            document.getElementById('topup-fee').innerHTML = (money * 0.998);
        } else {
            ChangeTopupValue[i].style.color = 'black';
            ChangeTopupValue[i].style.backgroundColor = 'white';
        }
    }
}













