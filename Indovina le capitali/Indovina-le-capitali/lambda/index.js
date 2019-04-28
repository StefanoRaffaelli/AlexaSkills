/* eslint-disable  func-names */
/* eslint-disable  no-console */

const quizQuestions = [
  {conjunction:"dell'", nation:"Afghanistan", capital:"Kabul"},
  {conjunction:"dell'", nation:"Albania", capital:"Tirana"},
  {conjunction:"dell'", nation:"Algeria", capital:"Algeri"},
  {conjunction:"di", nation:"Andorra", capital:"Andorra la Vella"},
  {conjunction:"dell'", nation:"Angola", capital:"Luanda"},
  {conjunction:"di", nation:"Antigua e Barbuda", capital:"Saint John's"},
  {conjunction:"dell'", nation:"Arabia Saudita", capital:"Riyād"},
  {conjunction:"dell'", nation:"Argentina", capital:"Buenos Aires"},
  {conjunction:"dell'", nation:"Armenia", capital:"Erevan"},
  {conjunction:"dell'", nation:"Australia", capital:"Canberra"},
  {conjunction:"dell'", nation:"Austria", capital:"Vienna"},
  {conjunction:"dell'", nation:"Azerbaigian", capital:"Baku"},
  {conjunction:"delle", nation:"Bahamas", capital:"Nassau"},
  {conjunction:"del", nation:"Bahrein", capital:"Manama"},
  {conjunction:"del", nation:"Bangladesh", capital:"Dacca"},
  {conjunction:"delle", nation:"Barbados", capital:"Bridgetown"},
  {conjunction:"del", nation:"Belgio", capital:"Bruxelles"},
  {conjunction:"del", nation:"Belize", capital:"Belmopan"},
  {conjunction:"del", nation:"Benin", capital:"Porto-Novo"},
  {conjunction:"del", nation:"Bhutan", capital:"Thimphu"},
  {conjunction:"della", nation:"Bielorussia", capital:"Minsk"},
  {conjunction:"della", nation:"Birmania", capital:"Naypyidaw"},
  {conjunction:"della", nation:"Bolivia", capital:"Sucre"},
  {conjunction:"della", nation:"Bosnia ed Erzegovina", capital:"Sarajevo"},
  {conjunction:"del", nation:"Botswana", capital:"Gaborone"},
  {conjunction:"del", nation:"Brasile", capital:"Brasilia"},
  {conjunction:"del", nation:"Brunei", capital:"Bandar Seri Begawan"},
  {conjunction:"della", nation:"Bulgaria", capital:"Sofia"},
  {conjunction:"del", nation:"Burkina Faso", capital:"Ouagadougou"},
  {conjunction:"del", nation:"Burundi", capital:"Bujumbura"},
  {conjunction:"della", nation:"Cambogia", capital:"Phnom Penh"},
  {conjunction:"del", nation:"Camerun", capital:"Yaoundé"},
  {conjunction:"del", nation:"Canada", capital:"Ottawa"},
  {conjunction:"di", nation:"Capo Verde", capital:"Praia"},
  {conjunction:"della", nation:"Repubblica Ceca", capital:"Praga"},
  {conjunction:"della", nation:"Repubblica Centrafricana", capital:"Bangui"},
  {conjunction:"del", nation:"Ciad", capital:"N'Djamena"},
  {conjunction:"del", nation:"Cile", capital:"Santiago del Cile"},
  {conjunction:"della", nation:"Cina", capital:"Pechino"},
  {conjunction:"di", nation:"Cipro", capital:"Nicosia"},
  {conjunction:"della", nation:"Colombia", capital:"Bogotà"},
  {conjunction:"di", nation:"Comore", capital:"Moroni"},
  {conjunction:"della", nation:"Repubblica del Congo", capital:"Brazzaville"},
  {conjunction:"della", nation:"Repubblica democratica del Congo", capital:"Kinshasa"},
  {conjunction:"della", nation:"Corea del Nord", capital:"Pyongyang"},
  {conjunction:"della", nation:"Corea del Sud", capital:"Seul"},
  {conjunction:"della", nation:"Costa d'Avorio", capital:"Yamoussoukro"},
  {conjunction:"del", nation:"Costa Rica", capital:"San José"},
  {conjunction:"della", nation:"Croazia", capital:"Zagabria"},
  {conjunction:"di", nation:"Cuba", capital:"L'Avana"},
  {conjunction:"della", nation:"Danimarca", capital:"Copenaghen"},
  {conjunction:"della", nation:"Dominica", capital:"Roseau"},
  {conjunction:"della", nation:"Repubblica Dominicana", capital:"Santo Domingo"},
  {conjunction:"dell'", nation:"Ecuador", capital:"Quito"},
  {conjunction:"dell'", nation:"Egitto", capital:"Il Cairo"},
  {conjunction:"di", nation:"El Salvador", capital:"San Salvador"},
  {conjunction:"degli", nation:"Emirati Arabi Uniti", capital:"Abu Dhabi"},
  {conjunction:"dell'", nation:"Eritrea", capital:"Asmara"},
  {conjunction:"dell'", nation:"Estonia", capital:"Tallinn"},
  {conjunction:"dell'", nation:"Etiopia", capital:"Addis Abeba"},
  {conjunction:"delle", nation:"Figi", capital:"Suva"},
  {conjunction:"delle", nation:"Filippine", capital:"Manila"},
  {conjunction:"della", nation:"Finlandia", capital:"Helsinki"},
  {conjunction:"della", nation:"Francia", capital:"Parigi"},
  {conjunction:"del", nation:"Gabon", capital:"Libreville"},
  {conjunction:"del", nation:"Gambia", capital:"Banjul"},
  {conjunction:"della", nation:"Georgia", capital:"Tbilisi"},
  {conjunction:"della", nation:"Germania", capital:"Berlino"},
  {conjunction:"del", nation:"Ghana", capital:"Accra"},
  {conjunction:"della", nation:"Giamaica", capital:"Kingston"},
  {conjunction:"del", nation:"Giappone", capital:"Tokyo"},
  {conjunction:"di", nation:"Gibuti", capital:"Gibuti"},
  {conjunction:"della", nation:"Giordania", capital:"Amman"},
  {conjunction:"della", nation:"Grecia", capital:"Atene"},
  {conjunction:"di", nation:"Grenada", capital:"Saint George's"},
  {conjunction:"del", nation:"Guatemala", capital:"Città del Guatemala"},
  {conjunction:"della", nation:"Guinea", capital:"Conakry"},
  {conjunction:"della", nation:"Guinea-Bissau", capital:"Bissau"},
  {conjunction:"della", nation:"Guinea Equatoriale", capital:"Malabo"},
  {conjunction:"della", nation:"Guyana", capital:"Georgetown"},
  {conjunction:"di", nation:"Haiti", capital:"Port-au-Prince"},
  {conjunction:"dell'", nation:"Honduras", capital:"Tegucigalpa"},
  {conjunction:"dell'", nation:"India", capital:"Nuova Delhi"},
  {conjunction:"dell'", nation:"Indonesia", capital:"Giacarta"},
  {conjunction:"dell'", nation:"Iran", capital:"Teheran"},
  {conjunction:"dell'", nation:"Iraq", capital:"Baghdad"},
  {conjunction:"dell'", nation:"Irlanda", capital:"Dublino"},
  {conjunction:"dell'", nation:"Islanda", capital:"Reykjavík"},
  {conjunction:"delle", nation:"Isole Marshall", capital:"Majuro"},
  {conjunction:"di", nation:"Israele", capital:"Gerusalemme"},
  {conjunction:"dell'", nation:"Italia", capital:"Roma"},
  {conjunction:"del", nation:"Kazakistan", capital:"Astana"},
  {conjunction:"del", nation:"Kenya", capital:"Nairobi"},
  {conjunction:"del", nation:"Kirghizistan", capital:"Bishkek"},
  {conjunction:"del", nation:"Kiribati", capital:"Bairiki"},
  {conjunction:"del", nation:"Kuwait", capital:"Madinat al-Kuwait"},
  {conjunction:"del", nation:"Laos", capital:"Vientiane"},
  {conjunction:"del", nation:"Lesotho", capital:"Maseru"},
  {conjunction:"della", nation:"Lettonia", capital:"Riga"},
  {conjunction:"del", nation:"Libano", capital:"Beirut"},
  {conjunction:"della", nation:"Liberia", capital:"Monrovia"},
  {conjunction:"della", nation:"Libia", capital:"Tripoli"},
  {conjunction:"del", nation:"Liechtenstein", capital:"Vaduz"},
  {conjunction:"della", nation:"Lituania", capital:"Vilnius"},
  {conjunction:"del", nation:"Lussemburgo", capital:"Lussemburgo"},
  {conjunction:"della", nation:"Macedonia del Nord", capital:"Skopje"},
  {conjunction:"del", nation:"Madagascar", capital:"Antananarivo"},
  {conjunction:"del", nation:"Malawi", capital:"Lilongwe"},
  {conjunction:"della", nation:"Malaysia", capital:"Kuala Lumpur"},
  {conjunction:"delle", nation:"Maldive", capital:"Malé"},
  {conjunction:"del", nation:"Mali", capital:"Bamako"},
  {conjunction:"di", nation:"Malta", capital:"La Valletta"},
  {conjunction:"del", nation:"Marocco", capital:"Rabat"},
  {conjunction:"della", nation:"Mauritania", capital:"Nouakchott"},
  {conjunction:"delle", nation:"Mauritius", capital:"Port Louis"},
  {conjunction:"del", nation:"Messico", capital:"Città del Messico"},
  {conjunction:"della", nation:"Micronesia", capital:"Palikir"},
  {conjunction:"della", nation:"Moldavia", capital:"Chișinău"},
  {conjunction:"di", nation:"Monaco", capital:"Monaco"},
  {conjunction:"della", nation:"Mongolia", capital:"Ulan Bator"},
  {conjunction:"del", nation:"Montenegro", capital:"Podgorica"},
  {conjunction:"del", nation:"Mozambico", capital:"Maputo"},
  {conjunction:"della", nation:"Namibia", capital:"Windhoek"},
  {conjunction:"del", nation:"Nauru", capital:"Yaren"},
  {conjunction:"del", nation:"Nepal", capital:"Kathmandu"},
  {conjunction:"del", nation:"Nicaragua", capital:"Managua"},
  {conjunction:"del", nation:"Niger", capital:"Niamey"},
  {conjunction:"della", nation:"Nigeria", capital:"Abuja"},
  {conjunction:"della", nation:"Norvegia", capital:"Oslo"},
  {conjunction:"della", nation:"Nuova Zelanda", capital:"Wellington"},
  {conjunction:"del", nation:"Oman", capital:"Mascate"},
  {conjunction:"del", nation:"Regno dei Paesi Bassi", capital:"Amsterdam"},
  {conjunction:"del", nation:"Pakistan", capital:"Islamabad"},
  {conjunction:"di", nation:"Palau", capital:"Ngerulmud"},
  {conjunction:"della", nation:"Palestina", capital:"Gerusalemme Est"},
  {conjunction:"di", nation:"Panama", capital:"Panama"},
  {conjunction:"della", nation:"Papua Nuova Guinea", capital:"Port Moresby"},
  {conjunction:"del", nation:"Paraguay", capital:"Asunción"},
  {conjunction:"del", nation:"Perù", capital:"Lima"},
  {conjunction:"della", nation:"Polonia", capital:"Varsavia"},
  {conjunction:"del", nation:"Portogallo", capital:"Lisbona"},
  {conjunction:"del", nation:"Qatar", capital:"Doha"},
  {conjunction:"del", nation:"Regno Unito", capital:"Londra"},
  {conjunction:"della", nation:"Romania", capital:"Bucarest"},
  {conjunction:"del", nation:"Ruanda", capital:"Kigali"},
  {conjunction:"della", nation:"Russia", capital:"Mosca"},
  {conjunction:"di", nation:"Saint Kitts e Nevis", capital:"Basseterre"},
  {conjunction:"di", nation:"Saint Vincent e Grenadine", capital:"Kingstown"},
  {conjunction:"delle", nation:"Isole Salomone", capital:"Honiara"},
  {conjunction:"di", nation:"Samoa", capital:"Apia"},
  {conjunction:"di", nation:"San Marino", capital:"Città di San Marino"},
  {conjunction:"di", nation:"Saint Lucia", capital:"Castries"},
  {conjunction:"di", nation:"São Tomé e Príncipe", capital:"São Tomé"},
  {conjunction:"del", nation:"Senegal", capital:"Dakar"},
  {conjunction:"della", nation:"Serbia", capital:"Belgrado"},
  {conjunction:"delle", nation:"Seychelles", capital:"Victoria"},
  {conjunction:"della", nation:"Sierra Leone", capital:"Freetown"},
  {conjunction:"di", nation:"Singapore", capital:"Singapore"},
  {conjunction:"della", nation:"Siria", capital:"Damasco"},
  {conjunction:"della", nation:"Slovacchia", capital:"Bratislava"},
  {conjunction:"della", nation:"Slovenia", capital:"Lubiana"},
  {conjunction:"della", nation:"Somalia", capital:"Mogadiscio"},
  {conjunction:"della", nation:"Spagna", capital:"Madrid"},
  {conjunction:"dello", nation:"Sri Lanka", capital:"Sri Jayawardenapura Kotte"},
  {conjunction:"degli", nation:"Stati Uniti", capital:"Washington"},
  {conjunction:"del", nation:"Sudafrica", capital:"Pretoria"},
  {conjunction:"del", nation:"Sudan", capital:"Khartum"},
  {conjunction:"del", nation:"Sudan del Sud", capital:"Juba"},
  {conjunction:"del", nation:"Suriname", capital:"Paramaribo"},
  {conjunction:"della", nation:"Svezia", capital:"Stoccolma"},
  {conjunction:"della", nation:"Svizzera", capital:"Berna"},
  {conjunction:"dello", nation:"Swaziland", capital:"Mbabane"},
  {conjunction:"del", nation:"Tagikistan", capital:"Dušanbe"},
  {conjunction:"di", nation:"Taiwan", capital:"Taipei"},
  {conjunction:"della", nation:"Tanzania", capital:"Dodoma"},
  {conjunction:"della", nation:"Thailandia", capital:"Bangkok"},
  {conjunction:"di", nation:"Timor Est", capital:"Dili"},
  {conjunction:"del", nation:"Togo", capital:"Lomé"},
  {conjunction:"del", nation:"Tonga", capital:"Nukuʻalofa"},
  {conjunction:"di", nation:"Trinidad e Tobago", capital:"Port of Spain"},
  {conjunction:"della", nation:"Tunisia", capital:"Tunisi"},
  {conjunction:"della", nation:"Turchia", capital:"Ankara"},
  {conjunction:"del", nation:"Turkmenistan", capital:"Ashgabat"},
  {conjunction:"di", nation:"Tuvalu", capital:"Funafuti"},
  {conjunction:"dell'", nation:"Ucraina", capital:"Kiev"},
  {conjunction:"dell'", nation:"Uganda", capital:"Kampala"},
  {conjunction:"dell'", nation:"Ungheria", capital:"Budapest"},
  {conjunction:"dell'", nation:"Uruguay", capital:"Montevideo"},
  {conjunction:"dell'", nation:"Uzbekistan", capital:"Tashkent"},
  {conjunction:"di", nation:"Vanuatu", capital:"Port Vila"},
  {conjunction:"della", nation:"Città del Vaticano", capital:"Città del Vaticano"},
  {conjunction:"del", nation:"Venezuela", capital:"Caracas"},
  {conjunction:"del", nation:"Vietnam", capital:"Hanoi"},
  {conjunction:"dello", nation:"Yemen", capital:"San'a"},
  {conjunction:"dello", nation:"Zambia", capital:"Lusaka"},
  {conjunction:"dello", nation:"Zimbabwe", capital:"Harare"}
  ];

const Alexa = require('ask-sdk-core');

const LaunchRequestHandler = {
  canHandle(handlerInput) {
    return handlerInput.requestEnvelope.request.type === 'LaunchRequest';
  },
  handle(handlerInput) {

    initializeSessionVariables(handlerInput);

    const speechText = "Benvenuto nel gioco indovina le capitali. Ti chiederò adesso tre capitali di tre diversi stati, saprai rispondermi? Iniziamo: " + buildQuestion(handlerInput);

    return handlerInput.responseBuilder
      .speak(speechText)
      .reprompt(speechText)
      .withSimpleCard('Indovina la capitale', speechText)
      .withShouldEndSession(false)
      .getResponse();
  },
};

const ResponseIntentHandler = {
  canHandle(handlerInput) {
    return handlerInput.requestEnvelope.request.type === 'IntentRequest'
      && handlerInput.requestEnvelope.request.intent.name === 'Response';
  },
  handle(handlerInput) {

    var result = handlerInput.requestEnvelope.request.intent.slots.capital.value;
    var lastQuestion = quizQuestions[givenTheLastQuizIndex(handlerInput)];
    var attempt = givenTheCurrentAttempt(handlerInput);

    var speechText = '';
    if(result.toUpperCase() === lastQuestion.capital.toUpperCase())
    {
      incrementSuccessCounter(handlerInput);
      speechText = 'Risposta esatta!';
    }
    else
      speechText = 'Sbagliato! La capitale ' + lastQuestion.conjunction + ' ' + lastQuestion.nation + ' è ' + lastQuestion.capital + '.';

    if(attempt < 3)
    {
      speechText += ' ' + buildQuestion(handlerInput);

      return handlerInput.responseBuilder
        .speak(speechText)
        .withSimpleCard('Risultato', speechText)
        .withShouldEndSession(false)
        .getResponse();
    }
    
    speechText += ' ' + buildQuestionsResult(handlerInput);
    return handlerInput.responseBuilder
    .speak(speechText)
    .withSimpleCard('Risultato', speechText)
    .getResponse();

  },
};

const HelpIntentHandler = {
  canHandle(handlerInput) {
    return handlerInput.requestEnvelope.request.type === 'IntentRequest'
      && handlerInput.requestEnvelope.request.intent.name === 'AMAZON.HelpIntent';
  },
  handle(handlerInput) {
    var speechText = 'Devi indovinare i nomi delle capitali degli stati che ti dirò.';
    speechText += ' Quindi, ' + buildLatQuestion(handlerInput);

    return handlerInput.responseBuilder
      .speak(speechText)
      .withSimpleCard('Aiuto', speechText)
      .withShouldEndSession(false)
      .getResponse();
  },
};

const CancelAndStopIntentHandler = {
  canHandle(handlerInput) {
    return handlerInput.requestEnvelope.request.type === 'IntentRequest'
      && (handlerInput.requestEnvelope.request.intent.name === 'AMAZON.CancelIntent'
        || handlerInput.requestEnvelope.request.intent.name === 'AMAZON.StopIntent');
  },
  handle(handlerInput) {
    const speechText = 'Grazie per aver giocato con me!';

    return handlerInput.responseBuilder
      .speak(speechText)
      .withSimpleCard('Ciao', speechText)
      .getResponse();
  },
};

const SessionEndedRequestHandler = {
  canHandle(handlerInput) {
    return handlerInput.requestEnvelope.request.type === 'SessionEndedRequest';
  },
  handle(handlerInput) {
    console.log(`Session ended with reason: ${handlerInput.requestEnvelope.request.reason}`);

    return handlerInput.responseBuilder.getResponse();
  },
};

const ErrorHandler = {
  canHandle() {
    return true;
  },
  handle(handlerInput, error) {
    console.log(`Error handled: ${error.message}`);

    return handlerInput.responseBuilder
      .speak('Mi dispiace, non capisco il comando. Per favore prova ancora.')
      .reprompt('Mi dispiace, non capisco il comando. Per favore prova ancora.')
      .getResponse();
  },
};

const skillBuilder = Alexa.SkillBuilders.custom();

exports.handler = skillBuilder
  .addRequestHandlers(
    LaunchRequestHandler,
    ResponseIntentHandler,
    HelpIntentHandler,
    CancelAndStopIntentHandler,
    SessionEndedRequestHandler
  )
  .addErrorHandlers(ErrorHandler)
  .lambda();

//Give a random number between 1 and 196 (the quizQuestions arry dimension)
function giveRandomNumber()
{
    return Math.floor((Math.random() * quizQuestions.length) + 1);
}

function initializeSessionVariables(handlerInput)
{
    var sessionAttributees =  handlerInput.attributesManager.getSessionAttributes();
    sessionAttributees["lastQuizIndex"] = 0;
    sessionAttributees["attempt"] =  0;
    sessionAttributees["successCounter"] =  0;
    handlerInput.attributesManager.setSessionAttributes(sessionAttributees);
}

//Build a new question
function buildQuestion(handlerInput)
{
  var quizIndex = giveRandomNumber();
  var sessionAttributees =  handlerInput.attributesManager.getSessionAttributes();
  sessionAttributees["lastQuizIndex"] = quizIndex;
  sessionAttributees["attempt"] =  sessionAttributees["attempt"] + 1;
  handlerInput.attributesManager.setSessionAttributes(sessionAttributees);
  
  var capital = quizQuestions[quizIndex];
  return 'Quale è la capitale ' + capital.conjunction + ' ' + capital.nation + '?';
}

//Re-Build last question
function buildLatQuestion(handlerInput)
{
  var quizIndex = givenTheLastQuizIndex(handlerInput);
  var capital = quizQuestions[quizIndex];
  return 'Quale è la capitale ' + capital.conjunction + ' ' + capital.nation + '?';
}

//Build the quiz result
function buildQuestionsResult(handlerInput)
{ 
  var result = givenSuccessCounter(handlerInput);

  if(result == 0)
    return "Non hai indovinato nessuna delle tre capitali che ti ho domandato."

  if(result == 1)
    return "Hai indovinato una sola capitale."
    
  return "Hai indovinato " + result + " capitali"; 
}

//Return the result of the last operation
function givenTheLastQuizIndex(handlerInput)
{
    var sessionAttributees =  handlerInput.attributesManager.getSessionAttributes();
    return sessionAttributees["lastQuizIndex"];
}

//Return the current attempt
function givenTheCurrentAttempt(handlerInput)
{
    var sessionAttributees =  handlerInput.attributesManager.getSessionAttributes();
    return sessionAttributees["attempt"];
}

//Return the success counter
function givenSuccessCounter(handlerInput)
{
    var sessionAttributees =  handlerInput.attributesManager.getSessionAttributes();
    return sessionAttributees["successCounter"];
}

function incrementSuccessCounter(handlerInput)
{
  var sessionAttributees =  handlerInput.attributesManager.getSessionAttributes();
  sessionAttributees["successCounter"] =  sessionAttributees["successCounter"] + 1;
  handlerInput.attributesManager.setSessionAttributes(sessionAttributees);
}