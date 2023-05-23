const FETCHDATA = 'metrics-webapp/home/reducer/FETCHDATA';
const FETCHDATAERROR = 'metrics-webapp/home/reducer/FETCHDATAERROR';
const FETCHCOUNTRYDATA = 'metrics-webapp/home/reducer/FETCHCOUNTRYDATA';
const SORT = 'metrics-webapp/home/reducer/SORT';
const DETAILSTART = 'metrics-webapp/home/reducer/DETAILSTART';

// Actions
export const fetchdata = (payload) => ({
  type: FETCHDATA,
  payload,
});
export const fetchdataerror = () => ({
  type: FETCHDATAERROR,
});
export const fetchcountrydata = (payload) => ({
  type: FETCHCOUNTRYDATA,
  payload,
});
export const sort = (payload) => ({
  type: SORT,
  payload,
});
export const detailStart = () => ({
  type: DETAILSTART,

});

// reducer

const initState = {
  countries: [],
  loading: true,
  error: false,
  view: [],
  back: false,
};
const DataReducer = (state = initState, action) => {
  switch (action.type) {
    case FETCHDATA:
      return {
        ...state,
        countries: action.payload,
        loading: false,
        back: false,
      };
    case FETCHDATAERROR:
      return {
        ...state,
        error: true,
      };
    case FETCHCOUNTRYDATA:
      return {
        ...state,
        view: action.payload,
        loading: false,
        back: true,
      };
    case SORT:
      return {
        ...state,
        countries: action.payload,
        loading: false,
      };
    case DETAILSTART:
      return {
        ...state,
        loading: true,
      };
    default:
      return state;
  }
};

export default DataReducer;
