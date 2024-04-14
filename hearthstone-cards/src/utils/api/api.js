/* eslint-disable no-unused-vars */
import {useHttp} from '../../hooks/http.hook';

export const HearthStoneApi = (locale = 'ptBR') => {
  const {request, clearError, process, setProcess} = useHttp();
  const _apiBase = 'https://omgvamp-hearthstone-v1.p.rapidapi.com/';
  // const lang = `locale=${locale}`;

  //   const changeStr = (str) => {
  //     if (str != '') {
  //       str += `&collectible=1&${lang}`;
  //     } else str += `collectible=1&${lang}`;

  //     return str;
  //   };

  //   const setReqStr = (health, cost, attack) => {
  //     let stringReq = '';

  //     if (health) {
  //       stringReq += `health=${health}`;
  //     }
  //     if (cost) {
  //       stringReq += `&cost=${cost}`;
  //     }
  //     if (attack) {
  //       attack += `&cost=${attack}`;
  //     }
  //     if (stringReq.charAt(0) === '&') {
  //       stringReq = stringReq.substring(1);
  //     }

  //     stringReq = changeStr(stringReq);
  //     return stringReq;
  //   };

  // const getInfo = async () => {
  //   const res = await request(`${_apiBase}info${lang}`);
  //   return res;
  // };

  const getInfo = async () => {
    const res = await request(`${_apiBase}info`);
    return res;
  };

  // const getSingleCard = async (name) => {
  //   const res = await request(`${_apiBase}cards/${name}?${lang}`);
  //   return res;
  // };

  const toSearch = async (name) => {
    const res = await request(`${_apiBase}cards/search/${name}`);
    return res;
  };

  // const getCardByClass = async (
  //   cardClass,
  //   // health = null,
  //   // cost = null,
  //   // attack = null,
  // ) => {
  //   // const strReq = setReqStr(health, cost, attack);
  //   const res = await request(
  //     `${_apiBase}cards/classes/${cardClass}?${lang}`,
  //     //   `${_apiBase}cards/classes/${cardClass}?${strReq}`,
  //   );
  //   return res;
  // };

  const getCardByClass = async (
    cardClass,
    // health = null,
    // cost = null,
    // attack = null,
  ) => {
    // const strReq = setReqStr(health, cost, attack);
    const res = await request(
      `${_apiBase}cards/classes/${cardClass}`,
      //   `${_apiBase}cards/classes/${cardClass}?${strReq}`,
    );
    return res;
  };

  const getCardByCost = async (cost) => {
    // const strReq = setReqStr(null, cost, null);
    const res = await request(`${_apiBase}cards?cost=${cost}`);
    return res;
  };

  const getCardByRace = async (race) => {
    // const strReq = setReqStr(null, cost, null);
    const res = await request(`${_apiBase}cards/races/${race}`);
    return res;
  };

  const getCardByQuality = async (quality) => {
    // const strReq = setReqStr(null, cost, null);
    const res = await request(`${_apiBase}cards/qualities/${quality}`);
    return res;
  };

  const getCardByType = async (type) => {
    // const strReq = setReqStr(null, cost, null);
    const res = await request(`${_apiBase}cards/types/${type}`);
    return res;
  };

  return {
    getInfo,
    toSearch,
    getCardByClass,
    getCardByCost,
    getCardByRace,
    getCardByQuality,
    getCardByType,
    process,
  };
};

export const apiKey = '343ff22b33msh74107620bdd6cc9p1b902ajsndbf9d4ab7e7f';
export const apiHost = 'omgvamp-hearthstone-v1.p.rapidapi.com';
