export const SEND_BEER = 'SEND_BEER_ACTION';

export const sendBeer = (payload) => {
  return { type: SEND_BEER, payload };
};
