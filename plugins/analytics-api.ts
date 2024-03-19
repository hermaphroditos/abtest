import { defineNuxtPlugin } from '#app';
import type { Guest } from '~/types/guest.interface';

/**
 * Tracks a pageview to our "imaginary api" - in this demo just the browser console. ;)
 * Send as params whatever you might seem valuable to send.
 * The URL is probably a good start though.
 */
const trackPageview = async (guest: Guest) => {
  const pageviewData: {
    uuid: string;
    url: string;
    pageviews: number;
    variantLetter: 'a' | 'b';
    title: string;
    timestamp: string; 
    referrer: string;
    browserInfo: string;
    screenSize: string;
    language: string;
  } = {
    uuid: guest.uuid,
    url: guest.url,
    pageviews: guest.pageviews,
    variantLetter: guest.variantLetter,
    title: document.title,
    timestamp: new Date().toISOString(),
    referrer: document.referrer,
    browserInfo: navigator.userAgent,
    screenSize: `${window.innerWidth}x${window.innerHeight}`,
    language: navigator.language
  };

  console.log(`--> Tracking Pageview: ${JSON.stringify(pageviewData)}`);
};

/**
   * Tracks an event to our "imaginary api" - in this demo just the browser console. ;)
   * Send as params whatever you might seem valuable to send.
   * The URL and an event name are probably a good start though.
   */
const trackEvent = async (guest: Guest, e: Event) => {
  
  // use localstorage to prevent double tracking of the signup event
  const hasTrackedSignup = localStorage.getItem('trackedSignup');

  if (hasTrackedSignup) {
    console.log('Signup event already tracked for this user.');
    return;
  }

  const eventData: {
    uuid: string;
    url: string;
    pageviews: number;
    signupEvent: number; 
    variantLetter: 'a' | 'b';
    title: string;
    timestamp: string; 
    referrer: string;
    browserInfo: string;
    screenSize: string;
    language: string;
  } = {
    uuid: guest.uuid,
    url: guest.url,
    pageviews: guest.pageviews,
    signupEvent: 1, 
    variantLetter: guest.variantLetter,
    title: document.title,
    timestamp: new Date().toISOString(),
    referrer: document.referrer,
    browserInfo: navigator.userAgent,
    screenSize: `${window.innerWidth}x${window.innerHeight}`,
    language: navigator.language
  };

  // add localstorage to prevent double tracking of the signup event
  localStorage.setItem('trackedSignup', 'true');

  console.log(`--> Tracking Event: ${JSON.stringify(eventData)}`);
};

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.provide('trackPageview', trackPageview);
  nuxtApp.provide('trackEvent', trackEvent);
});

