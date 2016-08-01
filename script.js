var PE = 0;
var TE = 1;
var KA = 2;
var DE = 3;
var BE = 4;
var GE = 5;
var AA = 6;
var EE = 7;
var II = 8;
var OO = 9;
var UU = 10;
var YY = 11;

var RV = 0;
var VRV = 1;
var VRRV = 2;
var RC = 3;
var CR = 4;
var VR = 5;
var VDV_VRV = 6;
var HH = 7;
var LL = 8;
var SZH = 9;
var Y_LL = 10;

var categoryOneArr = [
    { angle: 0, category: 'a', score: 0, explanation: 'Pronounced much like the \'a\' in \'father\', but somewhat brighter. The mouth remains fixed in position throughout the entire vowel.', examples: 'abanico, gato'},
    { angle: 0, category: 'e', score: 0, explanation: 'Pronounced much like the \'e\' in \'they\'. The mouth remains fixed in position throughout the entire vowel.', examples: 'Pepe, techo'},
    { angle: 0, category: 'i', score: 0, explanation: 'Pronounced much like the \'i\' in \'machine\', but generally shorter. The mouth remains fixed in position throughout the entire vowel.', examples: 'Isidro, silueta'},
    { angle: 0, category: 'o', score: 0, explanation: 'Pronounced much like the \'o\' in \'toe\'. The mouth remains fixed in position throughout the entire vowel.', examples: 'policía, topo'},
    { angle: 0, category: 'u', score: 0, explanation: 'Pronounced much like the \'u\' sound in \'food\' or \'attitude\'. The mouth remains fixed in position throughout the entire vowel.', examples: 'Plutón, urgente'},
    { angle: 0, category: 'unstr. V', score: 0, explanation: 'The schwa, or \'uh\' sound occurs in many unstressed syllables in English words. This does not happen in Spanish.', examples: 'Estéfani, pirata'},
    { angle: 0, category: '/p/', score: 0, explanation: 'This sound doesn\'t have an accompanying puff of air.', examples: 'padre, pata'},
    { angle: 0, category: '/t/', score: 0, explanation: 'This sound doesn\'t have an accompanying puff of air.', examples: 'tapa, inteligente'},
    { angle: 0, category: '/k/', score: 0, explanation: 'This sound doesn\'t have an accompanying puff of air.', examples: 'cama, café'},
    { angle: 0, category: '/d/-/dh/', score: 0, explanation: 'Sometimes pronounced much like an English \'d\', sometimes like a soft \'th\' as in \'they\'.', examples: 'dedo, divinidad'},
    { angle: 0, category: '/b/-/bh/', score: 0, explanation: 'The Spanish letters \'b\' and \'v\' can each be pronounced as /b/ and /bh/, depending on their position in a word and surrounding sounds.', examples: 'babosa, vivir'},
    { angle: 0, category: '/g/-/gh/', score: 0, explanation: 'The Spanish \'g\' has two distinct pronunciations, depending on its position in a word and the surrounding sounds.', examples: 'gripe, lago'}
];

var categoryTwoArr = [
    { angle: 0, category: 'rV', score: 0 , explanation: '', examples: ''},
    { angle: 0, category: 'VrV', score: 0 , explanation: '', examples: ''},
    { angle: 0, category: 'VrrV', score: 0 , explanation: '', examples: ''},
    { angle: 0, category: 'rC', score: 0 , explanation: '', examples: ''},
    { angle: 0, category: 'Cr', score: 0 , explanation: '', examples: ''},
    { angle: 0, category: 'Vr', score: 0 , explanation: '', examples: ''},
    { angle: 0, category: 'VdV VrV', score: 0 , explanation: '', examples: ''},
    { angle: 0, category: '/h/', score: 0 , explanation: '', examples: ''},
    { angle: 0, category: '/l/', score: 0 , explanation: '', examples: ''},
    { angle: 0, category: 's, z, -h', score: 0 , explanation: '', examples: ''},
    { angle: 0, category: '/y/', score: 0, explanation: '', examples: '' }
];


var a_canvas;
var context;
var canvasWidth;
var canvasHeight;
var center_x;
var center_y;
var radius;
var pos;
var numberCategories;
var FONT_STYLE_20PX_BOLD = "bold 20px Garamond";
var BLACK = "black";
var RING_ONE = 0;
var RING_TWO = 1;
var RING_THREE = 2;
var RING_FOUR = 3;
var RING_ONE_COLOR = "#60f868"; //"green";
var RING_TWO_COLOR = "#495bf8"; //"blue";
var RING_THREE_COLOR = "#f6f94e"; //"yellow";
var RING_FOUR_COLOR = "#f5483b"; //"red";
var RADII_COLOR = "black";
var RING_LINES_COLOR = RADII_COLOR;
var BACKGROUND_COLOR = "#969393"; //"#272a2a"; //"grey";
var LINE_WIDTH = 2;
var RING_ONE_LABEL = "Bullseye";
var RING_TWO_LABEL = "Closer";
var RING_THREE_LABEL = "Work needed";
var RING_FOUR_LABEL = "Not close";
var RING_ONE_DESCRIPTION = "Consistent native-like or near-native pronunciation";
var RING_TWO_DESCRIPTION = "Generally correct with occasional mistakes";
var RING_THREE_DESCRIPTION = "Approximates are used with some English influence";
var RING_FOUR_DESCRIPTION = "Pronounced as in English mostly if not at all times";
var TARGET_A = "Target A: Vowels, Voiceless Stops, Voiced Stopped Consonants";
var TARGET_B = "Target B: Vibrants ('/r/'), Voiceless Spirants, Nasals, Palatals";
var CHART_TITLE = "Overview of Pronunciation Accuracy";

var radii = [
  { length: 0 },
  { length: 0 },
  { length: 0 },
  { length: 0 }];

var totalRingOnes = [];
var totalRingTwos = [];
var totalRingThrees = [];
var totalRingFours = [];

_setScores();
drawBullsEyeFirst("a", categoryOneArr);
aExplanation();
drawBullsEyeSecond("b", categoryTwoArr);
graphResults("chart");
chartExplanation();

function aExplanation() {

  // var explanation = "<ul>";
  // for (var i = 0; i < categoryOneArr.length; i++) {
  //   explanation += "<li><strong>" + categoryOneArr[i].category + "</strong>: " + categoryOneArr[i].explanation + " (<strong>" + categoryOneArr[i].examples + "</strong>)" + "</li>";
  // }
  // explanation += "</ul>";

  var explanation = "";
  for (var i = 0; i < categoryOneArr.length; i++) {
    explanation += "<p><strong>" + categoryOneArr[i].category + "</strong>: " + categoryOneArr[i].explanation + " (<strong>" + categoryOneArr[i].examples + "</strong>)" + "</p>";
  }

  document.getElementById("a-explanation").innerHTML = explanation;

}

function chartExplanation() {
  var totalPhonemes = totalRingOnes.length + totalRingTwos.length + totalRingThrees.length + totalRingFours.length;
  var ringOnePercentage = (totalRingOnes.length / totalPhonemes * 100).toFixed(1);
  var ringTwoPercentage = (totalRingTwos.length / totalPhonemes * 100).toFixed(1);
  var ringThreePercentage = (totalRingThrees.length / totalPhonemes * 100).toFixed(1);
  var ringFourPercentage = (totalRingFours.length / totalPhonemes * 100).toFixed(1);

  var explanation = "We rated your pronunciation samples across " + totalPhonemes;
  explanation += " pronunciation categories. Each category was given a rank of Not Close to Bullseye.";
  explanation += "<br><br>";
  explanation += "The ratings are explained here:";
  explanation += "<br>";
  explanation += "<ul>";
  explanation += "<li>" + RING_ONE_LABEL + ": " + RING_ONE_DESCRIPTION + "</li>";
  explanation += "<li>" + RING_TWO_LABEL + ": " + RING_TWO_DESCRIPTION + "</li>";
  explanation += "<li>" + RING_THREE_LABEL + ": " + RING_THREE_DESCRIPTION + "</li>";
  explanation += "<li>" + RING_FOUR_LABEL + ": " + RING_FOUR_DESCRIPTION + "</li>";
  explanation += "</ul>";

  explanation += "We scored your pronunciation in " + ringOnePercentage + "% of those ";
  explanation += totalPhonemes + " categories as hitting the " + RING_ONE_LABEL + ", ";
  explanation += ringTwoPercentage + "% rated as " + RING_TWO_LABEL + ", ";
  explanation += ringThreePercentage + "% as " + RING_THREE_LABEL + ", ";
  explanation += "and " + ringFourPercentage + "% as " + RING_FOUR_LABEL + ".";

  document.getElementById("div-explanation").innerHTML = explanation;

}

function _setScores() {
  setFirstScores(2, 1, 0, 2, 1, 3, 2, 3, 3, 3, 2, 3);
  setSecondScores(1, 3, 3, 1, 2, 2, 3, 3, 1, 3, 2);
  // setFirstScores(0, 0, 0, 2, 2, 3, 2, 0, 3, 0, 2, 3);
  // setSecondScores(1, 3, 3, 0, 2, 2, 2, 2, 1, 0, 2);
  // setFirstScores(3, 2, 1, 3, 2, 1, 2, 0, 3, 3, 2, 3);
  // setSecondScores(3, 3, 3, 0, 2, 2, 2, 2, 1, 0, 2);
}

function addGrid() {
  context.addGrid();
}

function drawBar( xS, yS, width, height, color) {
  context.beginPath();
  context.moveTo(xS, yS);
  context.lineTo(xS + width, yS);
  context.lineTo(xS + width, yS - height);
  context.lineTo(xS, yS - height);
  context.closePath();
  context.stroke();
  context.fillStyle = color;
  context.fill();
}

function drawCircle(x, y, r, lineWidth) {
  context.beginPath();
  context.arc(x, y, r, 0, 2*Math.PI);
  context.lineWidth = LINE_WIDTH;
  context.strokeStyle = RING_LINES_COLOR;
  context.stroke();
  context.closePath();
}

function drawCircleBackground(x, y, r, lineWidth) {
  context.beginPath();
  context.arc(x, y, r, 0, 2*Math.PI);
  context.fillStyle = BACKGROUND_COLOR;
  context.stroke();
  context.fill();
  context.closePath();
}

function drawCircles() {
  for (var i = 0; i < radii.length; i++) {
    drawCircle(center_x, center_y, radii[i].length, 1);
  }
}

function drawBullsEyeFirst(id, arr) {
  setCanvas(id);
  setCenter();
  setAngles(arr);
  setRadius();
  drawCircleBackground(center_x, center_y, radii[3].length);
  fillCategoriesAndLabel(arr);
  drawCircles();
  drawRadii(arr);
  writeVariable(TARGET_A, xForCenteredText(TARGET_A), 30, FONT_STYLE_20PX_BOLD, BLACK);
}

function xForCenteredText(text) {
  return (canvasWidth - (text.length * 9)) / 2;
}

function drawBullsEyeSecond(id, arr) {
  setCanvas(id);
  setCenter();
  setAngles(arr);
  setRadius();
  drawCircleBackground(center_x, center_y, radii[3].length);
  fillCategoriesAndLabel(arr);
  drawCircles();
  drawRadii(arr);
  writeVariable(TARGET_B, xForCenteredText(TARGET_B), 30, FONT_STYLE_20PX_BOLD, BLACK);
}

function drawRadii(arr) {
  for (var i = 0; i < arr.length; i++) {
    pos = getPositionOnArc(center_x, center_y, arr[i].angle, radius);
    drawRadius(center_x, center_y, pos.x, pos.y);
  }
}

function drawRadius(x, y, x2, y2) {
  context.beginPath();
  context.moveTo(x, y);
  context.lineTo(x2, y2);
  context.closePath();
  context.strokeStyle = RADII_COLOR;
  context.stroke();

}

function fillCategoriesAndLabel(arr) {
  for (var i = 0; i < arr.length; i++) {
    fillCategory(arr[i].score, i+1, arr);
    setLabel(i, arr);
  }
}

function fillCategory(ring, whichCategory, arr) {
  var categoryIndexCurrent = whichCategory == numberCategories ? whichCategory - numberCategories : whichCategory;
  var categoryIndexPrevious = whichCategory-1;

  context.beginPath();

  // point 1
  var x;
  var y;
  if (ring > RING_ONE) {
    pos = getPositionOnArc(center_x, center_y, arr[categoryIndexPrevious].angle, radii[ring-1].length);
    context.moveTo(pos.x, pos.y);
    x = pos.x;
    y = pos.y;
  } else {
    context.moveTo(center_x, center_y);
    x = center_x;
    y = center_y;
  }

  // point 2
  pos = getPositionOnArc(center_x, center_y, arr[categoryIndexPrevious].angle, radii[ring].length);
  context.lineTo(pos.x, pos.y);

  // point 3
  var arcS = (Math.PI/180)*arr[whichCategory-1].angle;
  var arcE = (Math.PI/180)*arr[categoryIndexCurrent].angle;
  context.arc(center_x, center_y, radii[ring].length, arcS, arcE, true);

  // point 4
  if (ring > RING_ONE) {
    pos = getPositionOnArc(center_x, center_y, arr[categoryIndexCurrent].angle, radii[ring-1].length);
    context.lineTo(pos.x, pos.y);
  } else {
    context.lineTo(center_x, center_y);
  }

  // close path
  if (ring > RING_ONE) {
    var arcS = (Math.PI/180)*arr[categoryIndexCurrent].angle;
    var arcE = (Math.PI/180)*arr[categoryIndexPrevious].angle;
    context.arc(center_x, center_y, radii[ring-1].length, arcS, arcE, false);
  } else {
    context.lineTo(center_x, center_y);
  }
  context.closePath();

  // draw stroke, set color and fill
  context.stroke();
  switch (ring) {
    case RING_ONE:
      color = RING_ONE_COLOR;
      break;
    case RING_TWO:
      color = RING_TWO_COLOR;
      break;
    case RING_THREE:
      color = RING_THREE_COLOR;
      break;
    case RING_FOUR:
      color = RING_FOUR_COLOR;
  }
  context.fillStyle = color;
  context.fill();
}

function getPositionOnArc(x, y, angle, h) {
    var radians = angle * (Math.PI / 180);
    return { x: x + h * Math.cos(radians), y: y + h * Math.sin(radians) };
}

function graphResults(id) {
  setCanvas(id);
  setCenter();
  sortScores(categoryOneArr);
  sortScores(categoryTwoArr);

  var buffer = 100;
  var horizontalSpacing = 40;
  var barWidth = (canvasWidth - 2*buffer - 3*horizontalSpacing) / 4;
  var baseY = canvasHeight - buffer;

  var x1 = buffer;
  var x2 = buffer + 1 * (barWidth + horizontalSpacing);
  var x3 = buffer + 2 * (barWidth + horizontalSpacing);
  var x4 = buffer + 3 * (barWidth + horizontalSpacing);
  var rHeight = rowHeight(canvasHeight - 2 * buffer, totalRingOnes.length,
    totalRingTwos.length, totalRingThrees.length, totalRingFours.length);

  drawBar(x1, baseY, barWidth, rHeight * totalRingOnes.length, RING_ONE_COLOR);
  drawBar(x2, baseY, barWidth, rHeight * totalRingTwos.length, RING_TWO_COLOR);
  drawBar(x3, baseY, barWidth, rHeight * totalRingThrees.length, RING_THREE_COLOR);
  drawBar(x4, baseY, barWidth, rHeight * totalRingFours.length, RING_FOUR_COLOR);

  var margin = 20;
  writeScoresInBar(x1, baseY, totalRingOnes, rHeight, margin);
  writeScoresInBar(x2, baseY, totalRingTwos, rHeight, margin);
  writeScoresInBar(x3, baseY, totalRingThrees, rHeight, margin);
  writeScoresInBar(x4, baseY, totalRingFours, rHeight, margin);

  // writeVariable(RING_ONE_LABEL, x1 + calculateMargin(barWidth, RING_FOUR_LABEL), baseY + margin);
  writeVariable(RING_ONE_LABEL, x1 + calculateMargin(barWidth, RING_ONE_LABEL), baseY + 2 * margin, FONT_STYLE_20PX_BOLD, BLACK);
  writeVariable(RING_TWO_LABEL, x2 + calculateMargin(barWidth, RING_TWO_LABEL), baseY + 2 * margin, FONT_STYLE_20PX_BOLD, BLACK);
  writeVariable(RING_THREE_LABEL, x3 + calculateMargin(barWidth, RING_THREE_LABEL), baseY + 2 * margin, FONT_STYLE_20PX_BOLD, BLACK);
  writeVariable(RING_FOUR_LABEL, x4 + calculateMargin(barWidth, RING_FOUR_LABEL), baseY + 2 * margin, FONT_STYLE_20PX_BOLD, BLACK);

  writeVariable(CHART_TITLE, xForCenteredText(CHART_TITLE), 30, FONT_STYLE_20PX_BOLD, BLACK);
}

function calculateMargin(barWidth, text) {
  return (barWidth - (text.length * 9))/2;
}

function rowHeight(totalHeightAvailable, ringOneTotal, ringTwoTotal,
  ringThreeTotal, ringFourTotal) {
  var highest = ringOneTotal;
  if (ringTwoTotal > highest) {
    highest = ringTwoTotal;
  }
  if (ringThreeTotal > highest) {
    highest = ringThreeTotal;
  }
  if (ringFourTotal > highest) {
    highest = ringFourTotal;
  }

  return Math.floor(totalHeightAvailable / highest);
}

function setAngles(arr) {
  numberCategories = arr.length;
  angle = 360 / arr.length;
  for (var i = 0; i < arr.length; i++) {
    arr[i].angle = -(angle * i);
  }
}

function setCanvas(id) {
  a_canvas = document.getElementById(id);
  context = a_canvas.getContext("2d");
}

function setCenter() {
  canvasWidth = a_canvas.width;
  canvasHeight = a_canvas.height;
  center_x = canvasWidth / 2;
  center_y = canvasHeight / 2 + 35;
}

function setLabel(whichCategory, arr) {
  var categoryIndexCurrent = whichCategory == numberCategories ? whichCategory - numberCategories : whichCategory;
  var categoryIndexPrevious = whichCategory-1;
  var angleOffset = (360 / arr.length) / 2;
  var angle = arr[categoryIndexCurrent].angle - angleOffset;

  if (angle < -100 && angle > -270) {
    textLength = arr[categoryIndexCurrent].category.length;
  } else {
    textLength = 0;
  }

  leftOffset = textLength * 8;
  pos = getPositionOnArc(center_x, center_y, angle, radius + 40);
  writeVariable(arr[categoryIndexCurrent].category, pos.x - leftOffset, pos.y, FONT_STYLE_20PX_BOLD, BLACK);

}

function setRadius() {
  var smallerSide = canvasWidth < canvasHeight ? canvasWidth : canvasHeight;
  radius = (smallerSide / 2) - .15*smallerSide;

  radii[0].length = radius / 3;
  radii[1].length = radius / 1.75;
  radii[2].length = 3.25*radius / 4;
  radii[3].length = radius;
}

function setFirstScores(pe, te, ka, be, de, ge, a, e, i, o, u, y) {
  categoryOneArr[PE].score = pe;
  categoryOneArr[TE].score = te;
  categoryOneArr[KA].score = ka;
  categoryOneArr[BE].score = be;
  categoryOneArr[DE].score = de;
  categoryOneArr[GE].score = ge;
  categoryOneArr[AA].score = a;
  categoryOneArr[EE].score = e;
  categoryOneArr[II].score = i;
  categoryOneArr[OO].score = o;
  categoryOneArr[UU].score = u;
  categoryOneArr[YY].score = y;
}

function setSecondScores(rv, vrv, vrrv, rc, cr, vr, vdv_vrv, hh, ll, szh, y_ll) {
  categoryTwoArr[RV].score = rv;
  categoryTwoArr[VRV].score = vrv;
  categoryTwoArr[VRRV].score = vrrv;
  categoryTwoArr[RC].score = rc;
  categoryTwoArr[CR].score = cr;
  categoryTwoArr[VR].score = vr;
  categoryTwoArr[VDV_VRV].score = vdv_vrv;
  categoryTwoArr[HH].score = hh;
  categoryTwoArr[LL].score = ll;
  categoryTwoArr[SZH].score = szh;
  categoryTwoArr[Y_LL].score = y_ll;

}

function sortScores(arr) {
  for (var i = 0; i < arr.length; i++) {
    score = arr[i].score;
    switch (score) {
      case RING_ONE:
        totalRingOnes.push(arr[i]);
        break;
      case RING_TWO:
        totalRingTwos.push(arr[i]);
        break;
      case RING_THREE:
        totalRingThrees.push(arr[i]);
        break;
      case RING_FOUR:
        totalRingFours.push(arr[i]);
    }
  }
}

function writeScoresInBar(x, y, scoresArray, height, margin) {
  var h = height * scoresArray.length - margin - 5;
  var topLine;

  for (var i = 0; i < scoresArray.length; i++) {
    topLine = y - h;
    writeVariable(scoresArray[i].category, x + margin, topLine + height * i, FONT_STYLE_20PX_BOLD, BLACK);
    // writeVariable(h + ", " + baseY, x1 + margin, topLine + rHeight * i)
  }
}

function writeVariable(text, x, y, style, color) {
  context.font = style;
  context.fillStyle = color;
  context.fillText(text, x, y);
}

function write(text, x, y) {
  context.fillText(text, x, y);
}
