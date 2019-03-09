const Alexa = require('ask-sdk-core');

const NumberOfAttempts = 10;

const dataCorrectResult = [
  'Bene',
  'Giusto',
  'Corretto',
  'Ottimo',
  'Molto bene',
  'Esatto',
];

const dataIncorrectResult = [
  'No',
  'Sbagliato',
  'Errato',
];

const LaunchRequestHandler = {
  canHandle(handlerInput) {
    return handlerInput.requestEnvelope.request.type === 'LaunchRequest' || 
            handlerInput.requestEnvelope.request.type === 'AMAZON.StartOverIntent' ||
            handlerInput.requestEnvelope.request.type === 'AMAZON.HelpIntent';
  },
  handle(handlerInput) {    
    initializeSessionVariables(handlerInput);

    var speechText = '<say-as interpret-as="interjection">Ciao!</say-as><break time="0.2s" /> e benvenuto al ripasso delle tabelline. <break time="1s" /> Adesso ti chiederò ' + NumberOfAttempts + ' operazioni, vediamo quante ne sai. Iniziamo <break time="0.5s" /> ' + generateNextOperationPhrase(handlerInput);

    return handlerInput.responseBuilder
      .speak(speechText)
      .withShouldEndSession(false)
      .getResponse();
  },
};

const ResultIntentHandler = {
  canHandle(handlerInput) {
    return handlerInput.requestEnvelope.request.type === 'IntentRequest'
      && handlerInput.requestEnvelope.request.intent.name === 'Result';
  },
  handle(handlerInput) {

    var result = handlerInput.requestEnvelope.request.intent.slots.MultiplicationResult.value;
    var operationResult = givenTheLastResult(handlerInput);

    var speechText = '';

    if(giveAttempts(handlerInput) == NumberOfAttempts)
    {
      if(result == operationResult)
        incrementSuccessCounter(handlerInput);
        
      speechText = givenFinalResult(handlerInput);

      return handlerInput.responseBuilder
      .speak(speechText)
      .getResponse();
    }
    else
    {
      speechText = givenCorrectResult();
      if(result != operationResult )
        speechText = givenIncorrectResult();
      else
        incrementSuccessCounter(handlerInput);

      speechText += ' <break time="0.5s" />' + generateNextOperationPhrase(handlerInput);

      return handlerInput.responseBuilder
      .speak(speechText)
      .withShouldEndSession(false)
      .getResponse();
    }
  },
};

const HelpMeIntentHandler = {
  canHandle(handlerInput) {
    return handlerInput.requestEnvelope.request.type === 'IntentRequest'
      && handlerInput.requestEnvelope.request.intent.name === 'HelpMe';
  },
  handle(handlerInput) {
    var speechText = 'Il risultato è ' + givenTheLastResult(handlerInput);

    incrementHintsCounter(handlerInput);
    incrementSuccessCounter(handlerInput);

    if(giveAttempts(handlerInput) == NumberOfAttempts)
    {
      speechText += ' <break time="0.5s" />' + givenFinalResult(handlerInput);

      return handlerInput.responseBuilder
      .speak(speechText)
      .getResponse();
    }
    else
    {
      speechText += ' <break time="0.5s" />' + generateNextOperationPhrase(handlerInput);

      return handlerInput.responseBuilder
      .speak(speechText)
      .withShouldEndSession(false)
      .getResponse();
    }
  },
};

const CancelAndStopIntentHandler = {
  canHandle(handlerInput) {
    return handlerInput.requestEnvelope.request.type === 'IntentRequest'
      && (handlerInput.requestEnvelope.request.intent.name === 'AMAZON.CancelIntent'
        || handlerInput.requestEnvelope.request.intent.name === 'AMAZON.StopIntent');
  },
  handle(handlerInput) {
    const speechText = '<say-as interpret-as="interjection">Come vuoi</say-as> <break time="0.5s" /> grazie per aver ripassato le tabelline con me!';

    return handlerInput.responseBuilder
      .speak(speechText)
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
      .speak('Mi spiace ma non capisco il comando. <break time="1s" /> ' + giveLastOperation(handlerInput)) 
      .withShouldEndSession(false)
      .getResponse();
  },
};

const skillBuilder = Alexa.SkillBuilders.custom();

exports.handler = skillBuilder
  .addRequestHandlers(
    LaunchRequestHandler,
    ResultIntentHandler,
    HelpMeIntentHandler,
    CancelAndStopIntentHandler,
    SessionEndedRequestHandler
  )
  .addErrorHandlers(ErrorHandler)
  .lambda();


//Initialize all session variables
function initializeSessionVariables(handlerInput)
{
    var sessionAttributees =  handlerInput.attributesManager.getSessionAttributes();
    sessionAttributees["multiplicand"] = 0;
    sessionAttributees["multiplier"] = 0;
    sessionAttributees["result"] = 0;
    sessionAttributees["attempt"] =  0;
    sessionAttributees["successCounter"] =  0;
    sessionAttributees["hints"] =  0;
    handlerInput.attributesManager.setSessionAttributes(sessionAttributees);
}

//Give a random number between 1 and 10
function giveRandomNumber()
{
    return Math.floor((Math.random() * 10) + 1);
}

//Repropose the last operation
function giveLastOperation(handlerInput)
{
    var sessionAttributees =  handlerInput.attributesManager.getSessionAttributes();
    var multiplicand = sessionAttributees["multiplicand"];
    var multiplier = sessionAttributees["multiplier"];

    return 'quanto fa ' + multiplicand + ' x ' + multiplier + '?';
}

//Generate the phrase to tell
function generateNextOperationPhrase(handlerInput)
{
    return 'quanto fa ' + generateNextOperationAndUpdateSessionVariables(handlerInput) + '?';
}

//Generate operation and set all necessary session varables
function generateNextOperationAndUpdateSessionVariables(handlerInput)
{
    var multiplicand = giveRandomNumber();
    var multiplier = giveRandomNumber();
    var result = multiplicand * multiplier;

    var sessionAttributees =  handlerInput.attributesManager.getSessionAttributes();
    sessionAttributees["multiplicand"] = multiplicand;
    sessionAttributees["multiplier"] = multiplier;
    sessionAttributees["result"] = result;
    sessionAttributees["attempt"] =  sessionAttributees["attempt"] + 1;
    handlerInput.attributesManager.setSessionAttributes(sessionAttributees);

    return multiplicand + " x " + multiplier;
}

//Return the attempts
function giveAttempts(handlerInput)
{
    var sessionAttributees =  handlerInput.attributesManager.getSessionAttributes();
    return sessionAttributees["attempt"];
}

//Return the result of the last operation
function givenTheLastResult(handlerInput)
{
    var sessionAttributees =  handlerInput.attributesManager.getSessionAttributes();
    return sessionAttributees["result"];
}

//Return the hint counter
function givenHintsCounter(handlerInput)
{
  var sessionAttributees =  handlerInput.attributesManager.getSessionAttributes();
  return sessionAttributees["hints"];
}

//Increment the success counter
function incrementSuccessCounter(handlerInput)
{
  var sessionAttributees =  handlerInput.attributesManager.getSessionAttributes();
  sessionAttributees["successCounter"] =  sessionAttributees["successCounter"] + 1;
  handlerInput.attributesManager.setSessionAttributes(sessionAttributees);
}

//Increment the hint counter
function incrementHintsCounter(handlerInput)
{
  var sessionAttributees =  handlerInput.attributesManager.getSessionAttributes();
  sessionAttributees["hints"] =  sessionAttributees["hints"] + 1;
  handlerInput.attributesManager.setSessionAttributes(sessionAttributees);
}

//Return random correct expression
function givenCorrectResult()
{
  const factArr = dataCorrectResult;
  const factIndex = Math.floor(Math.random() * factArr.length);
  return factArr[factIndex];
}

//Return random incorrect expression
function givenIncorrectResult()
{
  const factArr = dataIncorrectResult;
  const factIndex = Math.floor(Math.random() * factArr.length);
  return factArr[factIndex];
}

//Return final result
function givenFinalResult(handlerInput)
{
  var sessionAttributees =  handlerInput.attributesManager.getSessionAttributes();

  var successi = sessionAttributees["successCounter"];
  var aiuti = sessionAttributees["hints"];

  var textualResponse = givenTextualResponse(sessionAttributees["successCounter"], sessionAttributees["hints"])

  var textualSuccess =  sessionAttributees["successCounter"] + ' operazioni su ' + NumberOfAttempts;
  if(successi == 1)
    textualSuccess = 'una operazione su ' + NumberOfAttempts;

  if(aiuti == 1)
    textualSuccess += '<break time="0.5s" /> ma una te l\'ho suggerita io.';
    
  if(aiuti > 1)
    textualSuccess +=  '<break time="0.5s" /> ma ' + aiuti + ' te le ho suggerite io.';

  return textualResponse + '<break time="0.5s" /> Hai risposto a ' + textualSuccess;
}

// Return the final result comment
function givenTextualResponse(successCounter, hints)
{
  var media = successCounter - hints;
  if(media < 0)
    media = 0;

  if(media >= 0 && media <= 3)
    return '<say-as interpret-as="interjection">buu</say-as> <break time="0.5s" /> Veramente molto molto male.';

  if(media >= 4 && media <= 6)
    return '<say-as interpret-as="interjection">ahi</say-as> <break time="0.5s" /> Direi che non è andata molto bene.';
    
  if(media >= 7 && media <= 8)
    return '<say-as interpret-as="interjection">Bah</say-as> <break time="0.5s" /> direi bene <break time="0.5s" /> ma non benissimo.';

  return '<say-as interpret-as="interjection">Wow</say-as> <break time="0.5s" /> veramente molto bene.';
}
