import { cardsSaved } from "../constants/cardssetting.js";
import {
  validateSpeechApi,
  textToSpeach,
  speechToText,
  validateSpeechRecognitionApi,
} from "../helpers/speech.js";

function readInstructionsToBeginProcess(learnFormInformation) {
  const { learningTypeSelected } = learnFormInformation;

  textToSpeach(
    `Ok, we are going to start our practice about ${learningTypeSelected}`
  );
  textToSpeach(
    `First i will say every word with its meaning of and then you will tell me the meaning of`
  );
  textToSpeach(`Ready?`);
  textToSpeach(`Go`);
}

function learning(learnFormInformation) {
  try {
    validateSpeechApi();
    const recognition = validateSpeechRecognitionApi();

    speechToText(recognition);
    //speechToText(recognition);

    /*readInstructionsToBeginProcess(learnFormInformation);

    for (const { text, meaningOf } of cardsSaved) {
      textToSpeach(`Word of vocabulary: ${text}`);
      textToSpeach(`Meaning of this word: ${meaningOf}`);
    }

    textToSpeach(`Now repeat the meaning of after the word:`);

    for (const { text, meaningOf } of cardsSaved) {
      textToSpeach(`Tell me the meaning of : ${text}`);
      speechToText();
    }*/
  } catch (error) {
    console.log(error);
  }
}

export default learning;
