/* eslint-disable  func-names */
/* eslint quote-props: ["error", "consistent"] */
/**
 * This sample demonstrates a simple skill built with the Amazon Alexa Skills
 * nodejs skill development kit.
 * This sample supports multiple lauguages. (en-US, en-GB, de-DE).
 * The Intent Schema, Custom Slots and Sample Utterances for this skill, as well
 * as testing instructions are located at https://github.com/alexa/skill-sample-nodejs-fact
 * */
import * as Alexa from 'alexa-sdk';
import './stats';


const APP_ID = 'amzn1.ask.skill.bee7189a-d9e6-4b72-a79b-6aa7b4af0b80'; // TODO replace with your app ID (OPTIONAL).

const handlers = {
  'LaunchRequest': function () {
    this.emit('HelloWorldIntent');
  },

  'HelloWorldIntent': function () {
    this.emit(':tell', 'Hello World!');
  },

};

exports.handler = function (event, context) {
  const alexa = Alexa.handler(event, context);
  alexa.APP_ID = APP_ID;
  // To enable string internationalization (i18n) features, set a resources object.
  alexa.registerHandlers(handlers);
  alexa.execute();
};
